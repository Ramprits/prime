import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
type userModel = {
    userName: string;
    password: string;
};
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.loginFormBuild();
    }

    loginFormBuild() {
        this.loginForm = this.fb.group({
            userName: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }
    onLogin() {}
}
