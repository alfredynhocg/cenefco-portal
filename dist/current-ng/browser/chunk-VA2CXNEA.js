import {
  HttpClient,
  Injectable,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-2UT764MQ.js";

// src/app/core/services/admin-auth.service.ts
var API_BASE = "http://localhost:8000/api";
var AdminAuthService = class _AdminAuthService {
  http;
  TOKEN_KEY = "cenefco_admin_token";
  constructor(http) {
    this.http = http;
  }
  login(email, password) {
    return this.http.post(`${API_BASE}/auth/login`, { email, password }).pipe(tap((res) => {
      if (res?.token) {
        localStorage.setItem(this.TOKEN_KEY, res.token);
      }
    }));
  }
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  isLoggedIn() {
    return !!this.getToken();
  }
  authHeaders() {
    return { Authorization: `Bearer ${this.getToken()}` };
  }
  static \u0275fac = function AdminAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminAuthService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminAuthService, factory: _AdminAuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminAuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AdminAuthService
};
//# sourceMappingURL=chunk-VA2CXNEA.js.map
