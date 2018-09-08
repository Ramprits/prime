import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { PrimengModule } from '../../shared/primeng.module';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
        component: RegisterComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        PrimengModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [RegisterComponent]
})
export class RegisterModule {}
