import { RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginPageComponent {
    constructor() {
    }
}
LoginPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-account-login',
                template: "LOGIN4\n<p><a href=\"https://medium.com/@sunnysun_5694/share-angular-6-library-between-multiple-apps-275c11757ffc\" target=\"_blank\">https://medium.com/@sunnysun_5694/share-angular-6-library-between-multiple-apps-275c11757ffc</a></p>\n\n<a routerLink=\"/register\">GOTO REGISTER</a>",
                styles: [""]
            }] }
];
/** @nocollapse */
LoginPageComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RegisterPageComponent {
    constructor() {
    }
}
RegisterPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-account-register',
                template: "REGISTER3\n<p><a href=\"https://medium.com/@sunnysun_5694/share-angular-6-library-between-multiple-apps-275c11757ffc\" target=\"_blank\">https://medium.com/@sunnysun_5694/share-angular-6-library-between-multiple-apps-275c11757ffc</a></p>\n\n<a routerLink=\"/login\">GOTO LOGIN</a>",
                styles: [""]
            }] }
];
/** @nocollapse */
RegisterPageComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const AccountRoutes = [
    // { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    // { path: 'register', loadChildren: 'account/lib/register/register.module#RegisterPageModule' },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccountModule {
}
AccountModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AccountModule, AccountRoutes, LoginPageComponent as ɵa, RegisterPageComponent as ɵb };

//# sourceMappingURL=account.js.map