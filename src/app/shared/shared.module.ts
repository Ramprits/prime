import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    exports: [ReactiveFormsModule, HttpClientModule]
})
export class SharedModule {}
