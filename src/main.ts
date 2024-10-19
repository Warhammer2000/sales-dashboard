import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';  // Импортируем provideRouter
import { routes } from './app/app.routes';  // Импортируем маршруты из app.routes.ts

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // Предоставляем маршруты
  ]
}).catch(err => console.error(err));
