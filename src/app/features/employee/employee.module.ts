import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { PrimengModule } from '../../shared/primeng.module';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
        component: EmployeeComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        PrimengModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [EmployeeComponent]
})
export class EmployeeModule {}
