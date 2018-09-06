import { Component, Input } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {
    @Input('isAdmin')
    isAdmin: boolean | undefined;
    constructor(public app: AppComponent) {}
}
