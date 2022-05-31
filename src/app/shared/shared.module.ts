//angualar modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//material modules
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
//pures components
import { Navbar } from './pures/navbar/navbar';
import { Card } from './pures/card/card';
//pages
import { NotFoundPage } from './pages/notFoundPage/notFound.page';
//dialogs
import { LoginDialog } from './dialogs/loginDialog/loginDialog';
import { SignupDialog } from './dialogs/signuDialog/signupDialog';



@NgModule({
  declarations: [
   Navbar, Card,
   
   NotFoundPage, 
   
   LoginDialog, SignupDialog
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, RouterModule,

    MatCardModule, MatDialogModule,
  ],
  exports: [
    Navbar, NotFoundPage, Card, 
    
    LoginDialog, SignupDialog, ReactiveFormsModule,
    FormsModule,
  ]
})
export class SharedModule { }
