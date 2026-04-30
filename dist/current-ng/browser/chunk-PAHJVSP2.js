import {
  AdminAuthService
} from "./chunk-VA2CXNEA.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-FVGVLSI5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-RAPM3SJS.js";
import {
  CommonModule,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2UT764MQ.js";

// src/app/core/guards/admin.guard.ts
var adminGuard = () => {
  const auth = inject(AdminAuthService);
  const router = inject(Router);
  if (auth.isLoggedIn()) {
    return true;
  }
  return router.parseUrl("/admin/login");
};

// src/app/views/admin/admin-layout/admin-layout.component.ts
var AdminLayoutComponent = class _AdminLayoutComponent {
  auth;
  router;
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  logout() {
    this.auth.logout();
    this.router.navigate(["/admin/login"]);
  }
  static \u0275fac = function AdminLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLayoutComponent)(\u0275\u0275directiveInject(AdminAuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], decls: 25, vars: 0, consts: [[1, "d-flex", "min-vh-100"], [1, "d-flex", "flex-column", "p-3", "text-white", 2, "width", "230px", "background", "#1a1a2e", "flex-shrink", "0"], [1, "mb-4", "mt-1"], [1, "fw-bold", "fs-5", 2, "color", "#e74c3c"], [1, "text-white-50", "small", "ms-1"], [1, "nav", "flex-column", "gap-1", "flex-grow-1"], [1, "nav-item"], ["routerLink", "/admin/certificados", "routerLinkActive", "active-link", 1, "nav-link", "text-white-75", "px-2", "py-2", "rounded"], [1, "fa-solid", "fa-certificate", "me-2"], ["routerLink", "/admin/plantillas", "routerLinkActive", "active-link", 1, "nav-link", "text-white-75", "px-2", "py-2", "rounded"], [1, "fa-solid", "fa-image", "me-2"], ["routerLink", "/admin/lista-aprobados", "routerLinkActive", "active-link", 1, "nav-link", "text-white-75", "px-2", "py-2", "rounded"], [1, "fa-solid", "fa-users", "me-2"], [1, "btn", "btn-outline-light", "btn-sm", "mt-auto", 3, "click"], [1, "fa-solid", "fa-right-from-bracket", "me-1"], [1, "flex-grow-1", "bg-light", "overflow-auto"]], template: function AdminLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "CENEFCO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "Admin");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "ul", 5)(8, "li", 6)(9, "a", 7);
      \u0275\u0275element(10, "i", 8);
      \u0275\u0275text(11, " Certificados ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 6)(13, "a", 9);
      \u0275\u0275element(14, "i", 10);
      \u0275\u0275text(15, " Plantillas ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li", 6)(17, "a", 11);
      \u0275\u0275element(18, "i", 12);
      \u0275\u0275text(19, " Lista de Aprobados ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "button", 13);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_20_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(21, "i", 14);
      \u0275\u0275text(22, " Cerrar sesi\xF3n ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "main", 15);
      \u0275\u0275element(24, "router-outlet");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n.active-link[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, .12) !important;\n  font-weight: 600;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .07);\n}\n/*# sourceMappingURL=admin-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-admin-layout", standalone: true, imports: [RouterModule], template: '<div class="d-flex min-vh-100">\n    <!-- Sidebar -->\n    <nav class="d-flex flex-column p-3 text-white" style="width:230px; background:#1a1a2e; flex-shrink:0;">\n        <div class="mb-4 mt-1">\n            <span class="fw-bold fs-5" style="color:#e74c3c;">CENEFCO</span>\n            <span class="text-white-50 small ms-1">Admin</span>\n        </div>\n        <ul class="nav flex-column gap-1 flex-grow-1">\n            <li class="nav-item">\n                <a class="nav-link text-white-75 px-2 py-2 rounded"\n                   routerLink="/admin/certificados" routerLinkActive="active-link">\n                    <i class="fa-solid fa-certificate me-2"></i> Certificados\n                </a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link text-white-75 px-2 py-2 rounded"\n                   routerLink="/admin/plantillas" routerLinkActive="active-link">\n                    <i class="fa-solid fa-image me-2"></i> Plantillas\n                </a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link text-white-75 px-2 py-2 rounded"\n                   routerLink="/admin/lista-aprobados" routerLinkActive="active-link">\n                    <i class="fa-solid fa-users me-2"></i> Lista de Aprobados\n                </a>\n            </li>\n        </ul>\n        <button class="btn btn-outline-light btn-sm mt-auto" (click)="logout()">\n            <i class="fa-solid fa-right-from-bracket me-1"></i> Cerrar sesi\xF3n\n        </button>\n    </nav>\n\n    <!-- Content -->\n    <main class="flex-grow-1 bg-light overflow-auto">\n        <router-outlet></router-outlet>\n    </main>\n</div>\n\n<style>\n.active-link { background: rgba(255,255,255,.12) !important; font-weight: 600; }\n.nav-link:hover { background: rgba(255,255,255,.07); }\n</style>\n' }]
  }], () => [{ type: AdminAuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src/app/views/admin/admin-layout/admin-layout.component.ts", lineNumber: 11 });
})();

// src/app/views/admin/admin-login/admin-login.component.ts
function AdminLoginComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function AdminLoginComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 12);
  }
}
var AdminLoginComponent = class _AdminLoginComponent {
  auth;
  router;
  email = "";
  password = "";
  loading = false;
  error = "";
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  login() {
    this.loading = true;
    this.error = "";
    this.auth.login(this.email, this.password).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(["/admin/certificados"]);
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.message || "Credenciales incorrectas.";
      }
    });
  }
  static \u0275fac = function AdminLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLoginComponent)(\u0275\u0275directiveInject(AdminAuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLoginComponent, selectors: [["app-admin-login"]], decls: 20, vars: 5, consts: [[1, "min-vh-100", "d-flex", "align-items-center", "justify-content-center", "bg-light"], [1, "card", "shadow-sm", 2, "width", "380px"], [1, "card-body", "p-4"], [1, "fw-bold", "mb-1", "text-center"], [1, "text-muted", "text-center", "small", "mb-4"], [1, "alert", "alert-danger", "py-2", "small"], [3, "ngSubmit"], [1, "mb-3"], [1, "form-label", "fw-semibold"], ["type", "email", "name", "email", "required", "", "autofocus", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-danger", "w-100", "fw-semibold", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function AdminLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "CENEFCO Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Panel de administraci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, AdminLoginComponent_Conditional_7_Template, 2, 1, "div", 5);
      \u0275\u0275elementStart(8, "form", 6);
      \u0275\u0275listener("ngSubmit", function AdminLoginComponent_Template_form_ngSubmit_8_listener() {
        return ctx.login();
      });
      \u0275\u0275elementStart(9, "div", 7)(10, "label", 8);
      \u0275\u0275text(11, "Correo electr\xF3nico");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function AdminLoginComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7)(14, "label", 8);
      \u0275\u0275text(15, "Contrase\xF1a");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function AdminLoginComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "button", 11);
      \u0275\u0275template(18, AdminLoginComponent_Conditional_18_Template, 1, 0, "span", 12);
      \u0275\u0275text(19, " Ingresar ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.error ? 7 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 18 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLoginComponent, [{
    type: Component,
    args: [{ selector: "app-admin-login", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="min-vh-100 d-flex align-items-center justify-content-center bg-light">\n    <div class="card shadow-sm" style="width: 380px;">\n        <div class="card-body p-4">\n            <h4 class="fw-bold mb-1 text-center">CENEFCO Admin</h4>\n            <p class="text-muted text-center small mb-4">Panel de administraci\xF3n</p>\n\n            @if (error) {\n                <div class="alert alert-danger py-2 small">{{ error }}</div>\n            }\n\n            <form (ngSubmit)="login()">\n                <div class="mb-3">\n                    <label class="form-label fw-semibold">Correo electr\xF3nico</label>\n                    <input type="email" class="form-control" [(ngModel)]="email" name="email" required autofocus>\n                </div>\n                <div class="mb-3">\n                    <label class="form-label fw-semibold">Contrase\xF1a</label>\n                    <input type="password" class="form-control" [(ngModel)]="password" name="password" required>\n                </div>\n                <button type="submit" class="btn btn-danger w-100 fw-semibold" [disabled]="loading">\n                    @if (loading) {\n                        <span class="spinner-border spinner-border-sm me-2"></span>\n                    }\n                    Ingresar\n                </button>\n            </form>\n        </div>\n    </div>\n</div>\n' }]
  }], () => [{ type: AdminAuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLoginComponent, { className: "AdminLoginComponent", filePath: "src/app/views/admin/admin-login/admin-login.component.ts", lineNumber: 13 });
})();

// src/app/views/admin/admin.route.ts
var ADMIN_ROUTES = [
  {
    path: "admin/login",
    component: AdminLoginComponent
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    canActivate: [adminGuard],
    children: [
      { path: "", redirectTo: "certificados", pathMatch: "full" },
      {
        path: "certificados",
        loadComponent: () => import("./chunk-Y6A5RFJT.js").then((m) => m.AdminCertificadosComponent)
      },
      {
        path: "plantillas",
        loadComponent: () => import("./chunk-IJGDB3KZ.js").then((m) => m.AdminPlantillasComponent)
      },
      {
        path: "plantillas/:id/campos",
        loadComponent: () => import("./chunk-TYTQYQXO.js").then((m) => m.AdminPlantillaCamposComponent)
      },
      {
        path: "lista-aprobados",
        loadComponent: () => import("./chunk-E5U35ZGW.js").then((m) => m.AdminListaAprobadosComponent)
      }
    ]
  }
];
export {
  ADMIN_ROUTES
};
//# sourceMappingURL=chunk-PAHJVSP2.js.map
