import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemsPage } from './items/items.page';

const ShopRouter = RouterModule.forChild([
    // {path:'', redirectTo: 'shop', pathMatch:'full' },
    {path:'shop',  component: ItemsPage},
])

@NgModule({
    declarations: [
        ItemsPage,
    ],
    imports: [
        ShopRouter,

        SharedModule, CommonModule,
    ],
    exports: [],
  
    providers: [],
})
export class ShopModule { }
