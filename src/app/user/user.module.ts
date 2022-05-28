import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomePage } from './pages/home/home.page';
import { LoginFormComponent } from './pures/login-form/login-form.component';
import { LoginPage } from './pages/login/login.page';
import { SignupPage } from './pages/signup/signup.page';
import { RegistrationFormComponent } from './pures/registration-form/registration-form.component';
import { RouterModule } from '@angular/router';
import { NotFoundPage } from '../shared/pages/notFoundPage/notFound.page';

const UserRouter = RouterModule.forChild([
  { path:'', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'signup', component: SignupPage },
  { path: '**', component: NotFoundPage }
])


@NgModule({
  declarations: [
    HomePage,
    LoginPage,
    SignupPage,

    LoginFormComponent,
    RegistrationFormComponent
  ],
  imports: [
    UserRouter,
    CommonModule, SharedModule
  ]
})
export class UserModule { }
