import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardsComponent } from './guards/guards.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';
import { ModelsComponent } from './models/models.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    GuardsComponent,
    InterceptorsComponent,
    ModelsComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
