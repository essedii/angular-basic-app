import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

const AppRouter = RouterModule.forRoot([
  { path:'', loadChildren: () => import('./feature/feature.module').then(m =>m.FeatureModule)}
]);

@NgModule({
  declarations: [ App ],
  imports: [
    AppRouter,

    CoreModule, 

    BrowserModule, SharedModule, BrowserAnimationsModule, LayoutModule, 

  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
