import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-router.module';
import { AdminModule } from './feature/admin/admin.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ShopModule } from './feature/shop/shop.module';
import { UserModule } from './feature/user/user.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { App } from './app';


@NgModule({
  declarations: [ App ],
  imports: [
    
    CoreModule, UserModule, ShopModule, AdminModule,
    
    BrowserModule, SharedModule, BrowserAnimationsModule, LayoutModule, 

    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
