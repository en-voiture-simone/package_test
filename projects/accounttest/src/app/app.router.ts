import { Routes, Route } from '@angular/router';
import * as account from 'account';

const AppRoutes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

export const routes: Routes = [...AppRoutes, ...account.AccountRoutes]; // 404 ROUTES added at the end ! Always !
console.log(routes);
