//angualar modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//material modules
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
//pures components
import { Navbar } from './pures/navbar/navbar';
import { Card } from './pures/card/card';
//pages
import { NotFoundPage } from './pages/notFoundPage/notFound.page';
//dialogs
import { LoginDialog } from './dialogs/loginDialog';



@NgModule({
  declarations: [
   Navbar, Card,
   
   NotFoundPage, LoginDialog,
  ],
  imports: [
    CommonModule, ReactiveFormsModule,

    MatCardModule, MatDialogModule,
  ],
  exports: [
    Navbar, NotFoundPage, Card, LoginDialog,
  ]
})
export class SharedModule { }
