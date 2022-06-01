import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';

import { NotFoundPage } from './shared/pages/notFoundPage/notFound.page';

const appRoutes: Routes = [
    { path:'', loadChildren: () => import('./feature/user/user.module').then(m =>m.UserModule)},
    { path:'admin', loadChildren: () => import('./feature/admin/admin.module').then(m =>m.AdminModule)},
    { path:'shop', loadChildren: () => import('./feature/shop/shop.module').then(m =>m.ShopModule)},
    { path: '**', component: NotFoundPage }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),

        SharedModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }
