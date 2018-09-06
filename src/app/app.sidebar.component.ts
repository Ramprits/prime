import { Component, Input } from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})
export class AppSideBarComponent {
  @Input('isAdmin')
    isAdmin: boolean | undefined;
  constructor(public app: AppComponent) {}

}
