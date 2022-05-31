import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { App } from './app';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { UserModule } from './feature/user/user.module';
import { ShopModule } from './feature/shop/shop.module';

import { NotFoundPage } from './shared/pages/notFoundPage/notFound.page';


const AppRouter = RouterModule.forRoot([
  { path:'', loadChildren: () => import('./feature/user/user.module').then(m =>m.UserModule)},
  { path:'shop', loadChildren: () => import('./feature/shop/shop.module').then(m =>m.ShopModule)},
  // { path: '**', component: NotFoundPage }

]);

@NgModule({
  declarations: [ App ],
  imports: [
    AppRouter,

    CoreModule, UserModule, ShopModule,
    
    BrowserModule, SharedModule, BrowserAnimationsModule, LayoutModule, 

  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
