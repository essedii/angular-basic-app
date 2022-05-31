import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { UserModule } from './feature/user/user.module';
import { ShopModule } from './feature/shop/shop.module';
import { AppRoutingModule } from './app-router.module';


@NgModule({
  declarations: [ App ],
  imports: [
    
    CoreModule, UserModule, ShopModule,
    
    BrowserModule, SharedModule, BrowserAnimationsModule, LayoutModule, 

    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
