import { Routes } from '@angular/router';
import { NotFoundComponent } from './error-pages/not-found.component';
import { UnauthorizedComponent } from './error-pages/unauthorized.component';
import { ForbiddenComponent } from './error-pages/forbidden.component';

export const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },  // Ленивое подключение модуля Dashboard
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },  // Ленивое подключение модуля Products
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },  // Ленивое подключение модуля Users
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // Перенаправление на Dashboard по умолчанию

  // Страницы ошибок
  { path: '404', component: NotFoundComponent },  // Страница 404
  { path: '401', component: UnauthorizedComponent },  // Страница 401
  { path: '403', component: ForbiddenComponent },  // Страница 403

  { path: '**', redirectTo: '/404' }  
];
