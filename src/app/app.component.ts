import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterLink, RouterLinkActive, RouterOutlet]
})
export class AppComponent {
  title = 'sales-dashboard';
  onClick() {
    console.log('Navigation clicked!');
  }
}
