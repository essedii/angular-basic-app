import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemsPage } from './items/items.page';
import { Shop } from './shop';


const shopRoutes: Routes = [
    {path: 'shop',  component: ItemsPage},
];

@NgModule({
    declarations: [
        Shop,
        
        ItemsPage,
    ],
    imports: [
        RouterModule.forChild(shopRoutes),

        SharedModule, 
    ],
    exports: [
        RouterModule
    ],
  
    providers: [],
})
export class ShopModule { }
