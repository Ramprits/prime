import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {
    employeeForm!: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.buildEmployeeForm();
    }

    buildEmployeeForm() {
        this.employeeForm = this.formBuilder.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required]],
            mobile: ['', [Validators.required]],
            office: [''],
            address: ['', [Validators.required]]
        });
    }

    onSave() {}
}
