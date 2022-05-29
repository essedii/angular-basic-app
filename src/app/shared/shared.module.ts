import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user/user.module';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';


import { Navbar } from './pures/navbar/navbar';
import { Card } from './pures/card/card';

import { NotFoundPage } from './pages/notFoundPage/notFound.page';
import { LoginFormComponent } from '../user/pures/login-form/login-form';


@NgModule({
  declarations: [
   Navbar, Card, LoginFormComponent,
   
   NotFoundPage
  ],
  imports: [
    CommonModule, UserModule,

    MatCardModule, MatDialogModule
  ],
  exports: [
    Navbar, NotFoundPage, Card
  ]
})
export class SharedModule { }
