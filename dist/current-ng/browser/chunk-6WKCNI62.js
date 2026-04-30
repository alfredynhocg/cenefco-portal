import {
  AdminAuthService
} from "./chunk-VA2CXNEA.js";
import {
  HttpClient,
  HttpHeaders,
  Injectable,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-2UT764MQ.js";

// src/app/core/services/cert-plantilla.service.ts
var API = "http://localhost:8000/api/v1";
var CertPlantillaService = class _CertPlantillaService {
  http;
  auth;
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  h() {
    return { headers: new HttpHeaders(this.auth.authHeaders()) };
  }
  index(params = {}) {
    return this.http.get(`${API}/cert-plantillas`, __spreadProps(__spreadValues({}, this.h()), { params }));
  }
  show(id) {
    return this.http.get(`${API}/cert-plantillas/${id}`, this.h());
  }
  store(data) {
    return this.http.post(`${API}/cert-plantillas`, data, this.h());
  }
  update(id, data) {
    return this.http.put(`${API}/cert-plantillas/${id}`, data, this.h());
  }
  destroy(id) {
    return this.http.delete(`${API}/cert-plantillas/${id}`, this.h());
  }
  uploadImage(file) {
    const fd = new FormData();
    fd.append("file", file);
    return this.http.post(`${API}/upload/image`, fd, this.h());
  }
  // Campos
  indexCampos(plantillaId) {
    return this.http.get(`${API}/cert-plantilla-campos`, __spreadProps(__spreadValues({}, this.h()), { params: { plantilla_id: plantillaId, pageSize: 50 } }));
  }
  storeCampo(data) {
    return this.http.post(`${API}/cert-plantilla-campos`, data, this.h());
  }
  updateCampo(id, data) {
    return this.http.put(`${API}/cert-plantilla-campos/${id}`, data, this.h());
  }
  destroyCampo(id) {
    return this.http.delete(`${API}/cert-plantilla-campos/${id}`, this.h());
  }
  static \u0275fac = function CertPlantillaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CertPlantillaService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AdminAuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CertPlantillaService, factory: _CertPlantillaService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CertPlantillaService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: AdminAuthService }], null);
})();

export {
  CertPlantillaService
};
//# sourceMappingURL=chunk-6WKCNI62.js.map
