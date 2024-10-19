import { Routes } from '@angular/router';  // Тип маршрутов

export const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },  // Ленивое подключение модуля Dashboard
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },  // Ленивое подключение модуля Products
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },  // Ленивое подключение модуля Users
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // Перенаправление на Dashboard по умолчанию
  { path: '**', redirectTo: '/dashboard' }  // Обработка несуществующих маршрутов
];
