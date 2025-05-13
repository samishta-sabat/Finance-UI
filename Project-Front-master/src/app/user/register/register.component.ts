import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class UserRegisterComponent {
  registerForm!: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';
  today = new Date();
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void{
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      dob: ['', [Validators.required, this.pastDateValidator, this.minimumAgeValidator(18)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      address: ['', Validators.required],
      cardType: ['', Validators.required],
      bankName: ['', Validators.required],
      accountNumber: ['', [Validators.required, Validators.pattern('^[0-9]{9,18}$')]],
      ifscCode: ['', [Validators.required, Validators.pattern('^[A-Z]{4}0[A-Z0-9]{6}$')]],
    }, {validators: this.passwordMatchValidator });
    
  }

  // Password matching validation
  passwordMatchValidator(group: AbstractControl):ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password ===confirm?null: {passwordMismatch: true};
  }

  pastDateValidator(control: AbstractControl): ValidationErrors | null {
      const selectedDate = new Date(control.value);
      return selectedDate >= new Date() ? {futureDate: true}:null;
  }

  minimumAgeValidator(minAge: number){
    return (control: AbstractControl):ValidationErrors | null =>{
      const dob = new Date(control.value);
      const ageDifMs = Date.now() - dob.getTime();
      const ageDate = new Date(ageDifMs);
      const age= Math.abs(ageDate.getUTCFullYear() );
      return age < minAge ? {underage: true}: null;
    }
  }

  // Submit the form
  onSubmit(): void {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    // Stop here if the form is invalid
    if (this.registerForm.invalid) 
      {
     console.log(this.registerForm.errors);
      return;
      }      

    const payload = {
      ...this.registerForm.value,
      role: 'USER',
      isVerified: false
    };
    console.log('Payload: ', payload);
    delete payload.confirmPassword; // Remove confirmPassword before sending
    // Make HTTP request to backend
    this.http.post<any>('http://localhost:9090/api/users/register', payload, { responseType: 'json' }).subscribe({
      next: (res) => {
        // this.successMessage = res.message;
        console.log('Success:', res); // Should print: "User registered!"
          alert('Registration successful!');
        this.registerForm.reset();
        this.submitted = false;
        setTimeout(() => this.router.navigate(['/user/login']), 1500);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Registration failed. Try again.';
      }
    });
  }

  // Reset the form
  // onReset(): void {
  //   this.submitted = false;
  //   this.registerForm.reset();
  // }
     resetForm(): void{
      this.registerForm.reset();
     }
}
