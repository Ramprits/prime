import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../../model/employee.model';
import { EmployeeRepository } from './employee.repository';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService extends EmployeeRepository<
    Employee,
    string | number
> {
    constructor(http: HttpClient) {
        super(http);
    }
}
