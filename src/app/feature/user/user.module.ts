import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { SignupPage } from './pages/signup/signup.page';
import { PostPage } from './pages/post/post.page';

import { SignupFormComponent } from './pures/signup-form/signup-form';
import { LoginFormComponent } from './pures/login-form/login-form';
import { PostDetail } from './pures/post-detail/post-detail';


const userRoutes: Routes = [
  { path:'', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'signup', component: SignupPage },
  { path: 'post/:id', component: PostPage },
];

@NgModule({
  declarations: [
    HomePage, LoginPage, SignupPage, PostPage,
    
    LoginFormComponent, SignupFormComponent, PostDetail,
  ],
  imports: [
    RouterModule.forChild(userRoutes),

    SharedModule
  ],
  exports: [
    RouterModule
],

})
export class UserModule { }
