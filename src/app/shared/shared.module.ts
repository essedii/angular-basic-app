import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


import { Navbar } from './pures/navbar/navbar';
import { Card } from './pures/card/card';

import { NotFoundPage } from './pages/notFoundPage/notFound.page';


@NgModule({
  declarations: [
   Navbar, Card,
   
   NotFoundPage
  ],
  imports: [
    CommonModule,

    MatCardModule,
  ],
  exports: [
    Navbar, NotFoundPage, Card
  ]
})
export class SharedModule { }
