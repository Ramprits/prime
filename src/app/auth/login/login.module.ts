import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { PrimengModule } from '../../shared/primeng.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [CommonModule, PrimengModule, SharedModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
