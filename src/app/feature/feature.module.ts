import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';

const FeatureRouter =   RouterModule.forChild([
    {path:'', loadChildren: ()=> import('./user/user.module')}
])

@NgModule({
    imports: [
        FeatureRouter,

        UserModule,
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class FeatureModule { }
