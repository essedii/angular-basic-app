import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';

import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { SignupPage } from './pages/signup/signup.page';
import { PostPage } from './pages/post/post.page';

import { SignupFormComponent } from './pures/signup-form/signup-form';
import { LoginFormComponent } from './pures/login-form/login-form';


import { RouterModule } from '@angular/router';
import { NotFoundPage } from '../../shared/pages/notFoundPage/notFound.page';
import { PostDetail } from './pures/post-detail/post-detail';

const UserRouter = RouterModule.forChild([
  { path:'', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'signup', component: SignupPage },
  { path: 'post/:id', component: PostPage },
  { path: '**', component: NotFoundPage }
])

@NgModule({
  declarations: [
    HomePage, LoginPage, SignupPage, PostPage,
    LoginFormComponent, SignupFormComponent, PostDetail,
  ],
  imports: [
    UserRouter,

    CommonModule, SharedModule, ReactiveFormsModule, CoreModule, 
  ],

})
export class UserModule { }
