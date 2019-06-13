import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccountRoutes } from './account.router';
import { LoginPageComponent } from './login/login';
import { RegisterPageComponent } from './register/register';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    RouterModule.forRoot(AccountRoutes),
  ],
  exports: [
    LoginPageComponent,
    RegisterPageComponent,
  ],
  entryComponents: [
    LoginPageComponent,
    RegisterPageComponent,
  ]
})
export class AccountModule { }
