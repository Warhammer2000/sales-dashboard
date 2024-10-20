import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule, Router  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header.component'; 
import { FooterComponent } from './shared/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule, RouterModule, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'sales-dashboard';

  onClick() {
    console.log('Navigation clicked!');
  }
   constructor(private router: Router) {}

   isErrorPage(): boolean {
    const currentRoute = this.router.url;
    return currentRoute === '/404' || currentRoute === '/401' || currentRoute === '/403';
  }
}
