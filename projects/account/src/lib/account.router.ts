import { Route } from '@angular/router';
import { LoginPageComponent } from './login/login';
import { RegisterPageComponent } from './register/register';

export const AccountRoutes: Route[] = [
  // { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  // { path: 'register', loadChildren: 'account/lib/register/register.module#RegisterPageModule' },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
];
