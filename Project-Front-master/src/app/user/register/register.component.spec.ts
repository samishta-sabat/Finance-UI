import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: UserRegisterComponent;
  let fixture: ComponentFixture<UserRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
