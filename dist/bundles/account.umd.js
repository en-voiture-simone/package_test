(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/router'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('account', ['exports', '@angular/router', '@angular/core'], factory) :
    (factory((global.account = {}),global.ng.router,global.ng.core));
}(this, (function (exports,router,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginPageComponent = /** @class */ (function () {
        function LoginPageComponent() {
        }
        LoginPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-account-login',
                        template: "LOGIN4\n<p><a href=\"https://medium.com/@sunnysun_5694/share-angular-6-library-between-multiple-apps-275c11757ffc\" target=\"_blank\">https://medium.com/@sunnysun_5694/share-angular-6-library-between-multiple-apps-275c11757ffc</a></p>\n\n<a routerLink=\"/register\">GOTO REGISTER</a>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        LoginPageComponent.ctorParameters = function () { return []; };
        return LoginPageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RegisterPageComponent = /** @class */ (function () {
        function RegisterPageComponent() {
        }
        RegisterPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-account-register',
                        template: "REGISTER3\n<p><a href=\"https://medium.com/@sunnysun_5694/share-angular-6-library-between-multiple-apps-275c11757ffc\" target=\"_blank\">https://medium.com/@sunnysun_5694/share-angular-6-library-between-multiple-apps-275c11757ffc</a></p>\n\n<a routerLink=\"/login\">GOTO LOGIN</a>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        RegisterPageComponent.ctorParameters = function () { return []; };
        return RegisterPageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var AccountRoutes = [
        // { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
        // { path: 'register', loadChildren: 'account/lib/register/register.module#RegisterPageModule' },
        { path: 'login', component: LoginPageComponent },
        { path: 'register', component: RegisterPageComponent },
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AccountModule = /** @class */ (function () {
        function AccountModule() {
        }
        AccountModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            LoginPageComponent,
                            RegisterPageComponent,
                        ],
                        imports: [
                            router.RouterModule.forRoot(AccountRoutes),
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
        return AccountModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AccountModule = AccountModule;
    exports.AccountRoutes = AccountRoutes;
    exports.ɵa = LoginPageComponent;
    exports.ɵb = RegisterPageComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=account.umd.js.map