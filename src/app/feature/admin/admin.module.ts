import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardPage } from './pages/dashboard/dashboard.page';


const adminRoutes: Routes = [
    { path:'', component: DashboardPage}
]

@NgModule({
    declarations: [
        DashboardPage
    ],
    imports: [
        RouterModule.forChild(adminRoutes),
    
        SharedModule],
    exports: [
        RouterModule,
    ],
    providers: [],
})
export class AdminModule { }
