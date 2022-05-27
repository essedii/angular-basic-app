import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './pures/login-form/login-form.component';
import { RegistrationFormComponent } from './pures/registration-form/registration-form.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginFormComponent,
    RegistrationFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
