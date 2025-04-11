import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [AppComponent, LandingPageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, AdminModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}