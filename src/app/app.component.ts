import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  mobileMenuActive: boolean;

  onMobileMenuButton (event: { preventDefault: () => void; }) {
    this.mobileMenuActive = !this.mobileMenuActive;
    event.preventDefault();
  }

  hideMobileMenu(event: { preventDefault: () => void; }) {
    this.mobileMenuActive = false;
    event.preventDefault();
  }
}
