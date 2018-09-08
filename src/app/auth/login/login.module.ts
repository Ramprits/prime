import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { PrimengModule } from '../../shared/primeng.module';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        PrimengModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
