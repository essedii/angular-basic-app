import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

const AppRouter = RouterModule.forRoot([
  { path:'', loadChildren: () => import('./user/user.module').then(m =>m.UserModule)}
]);

@NgModule({
  declarations: [ App ],
  imports: [
    AppRouter,

    CoreModule, UserModule,
    
    BrowserModule, SharedModule, BrowserAnimationsModule, LayoutModule, 

  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
