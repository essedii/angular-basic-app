import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { SignupPage } from './pages/signup/signup.page';
import { PostPage } from './pages/post/post.page';

import { SignupFormComponent } from './pures/signup-form/signup-form';
import { LoginFormComponent } from './pures/login-form/login-form';

import { RouterModule } from '@angular/router';
import { PostDetail } from './pures/post-detail/post-detail';


const UserRouter = RouterModule.forChild([
  { path:'', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'signup', component: SignupPage },
  { path: 'post/:id', component: PostPage },

])

@NgModule({
  declarations: [
    HomePage, LoginPage, SignupPage, PostPage,
    LoginFormComponent, SignupFormComponent, PostDetail,
  ],
  imports: [
    UserRouter,

    SharedModule,
  ],

})
export class UserModule { }
