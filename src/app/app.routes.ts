import { Routes } from '@angular/router';
import { NotFoundComponent } from './error-pages/not-found.component';
import { UnauthorizedComponent } from './error-pages/unauthorized.component';
import { ForbiddenComponent } from './error-pages/forbidden.component';

export const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },  
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },  
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  

  
  { path: '404', component: NotFoundComponent },  
  { path: '401', component: UnauthorizedComponent },
  { path: '403', component: ForbiddenComponent },  

  { path: '**', redirectTo: '/404' }  
];
