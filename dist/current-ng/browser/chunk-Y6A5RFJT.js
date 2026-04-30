import {
  CertPlantillaService
} from "./chunk-6WKCNI62.js";
import {
  AdminAuthService
} from "./chunk-VA2CXNEA.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-RAPM3SJS.js";
import {
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  HttpHeaders,
  Injectable,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2UT764MQ.js";

// src/app/core/services/certificado-admin.service.ts
var API = "http://localhost:8000/api/v1";
var CertificadoAdminService = class _CertificadoAdminService {
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
    return this.http.get(`${API}/certificados`, __spreadProps(__spreadValues({}, this.h()), { params }));
  }
  generarLote(imparteId, plantillaId) {
    return this.http.post(`${API}/certificados/generar-lote`, {
      imparte_id: imparteId,
      plantilla_id: plantillaId
    }, this.h());
  }
  destroy(id) {
    return this.http.delete(`${API}/certificados/${id}`, this.h());
  }
  static \u0275fac = function CertificadoAdminService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CertificadoAdminService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AdminAuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CertificadoAdminService, factory: _CertificadoAdminService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CertificadoAdminService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: AdminAuthService }], null);
})();

// src/app/views/admin/certificados/certificados.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.usuario_id;
function AdminCertificadosComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function AdminCertificadosComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.success);
  }
}
function AdminCertificadosComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275property("ngValue", p_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r2.nombre, " (", p_r2.tipo, ")");
  }
}
function AdminCertificadosComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 30);
    \u0275\u0275text(1, " Generando... ");
  }
}
function AdminCertificadosComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 31);
    \u0275\u0275text(1, " Generar Certificados ");
  }
}
function AdminCertificadosComponent_Conditional_36_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 35);
    \u0275\u0275text(4, "Errores");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.resultadoLote.errores.length);
  }
}
function AdminCertificadosComponent_Conditional_36_Conditional_15_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("Usuario ", e_r3.usuario_id, " (", e_r3.nombre, "): ", e_r3.error, "");
  }
}
function AdminCertificadosComponent_Conditional_36_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details")(1, "summary", 38);
    \u0275\u0275text(2, "Ver errores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 39);
    \u0275\u0275repeaterCreate(4, AdminCertificadosComponent_Conditional_36_Conditional_15_For_5_Template, 2, 3, "li", null, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.resultadoLote.errores);
  }
}
function AdminCertificadosComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "p", 32);
    \u0275\u0275text(2, "Resultado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33)(4, "div")(5, "div", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 35);
    \u0275\u0275text(8, "Generados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "div", 36);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 35);
    \u0275\u0275text(13, "Total aprobados");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, AdminCertificadosComponent_Conditional_36_Conditional_14_Template, 5, 1, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, AdminCertificadosComponent_Conditional_36_Conditional_15_Template, 6, 0, "details");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.resultadoLote.generados);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.resultadoLote.total_aprobados);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.resultadoLote.errores == null ? null : ctx_r0.resultadoLote.errores.length) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.resultadoLote.errores == null ? null : ctx_r0.resultadoLote.errores.length) ? 15 : -1);
  }
}
function AdminCertificadosComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "span", 40);
    \u0275\u0275elementEnd();
  }
}
function AdminCertificadosComponent_Conditional_49_For_26_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 50);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275text(2, "JPG ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cert_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.storageBase + cert_r5.archivo_url, \u0275\u0275sanitizeUrl);
  }
}
function AdminCertificadosComponent_Conditional_49_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code", 46);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 48);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 49);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 49);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, AdminCertificadosComponent_Conditional_49_For_26_Conditional_15_Template, 3, 1, "a", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 51);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "button", 52);
    \u0275\u0275listener("click", function AdminCertificadosComponent_Conditional_49_For_26_Template_button_click_20_listener() {
      const cert_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.eliminar(cert_r5));
    });
    \u0275\u0275element(21, "i", 53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cert_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cert_r5.codigo_verificacion);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cert_r5.nombre_en_certificado);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cert_r5.programa_en_certificado);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", cert_r5.condicion === "aprobado")("bg-info", cert_r5.condicion !== "aprobado");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cert_r5.condicion, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", cert_r5.estado === "generado")("bg-danger", cert_r5.estado === "anulado")("bg-secondary", cert_r5.estado !== "generado" && cert_r5.estado !== "anulado");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cert_r5.estado, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(cert_r5.archivo_url ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 17, cert_r5.created_at, "dd/MM/yyyy"));
  }
}
function AdminCertificadosComponent_Conditional_49_ForEmpty_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 55);
    \u0275\u0275text(2, "No hay certificados generados a\xFAn.");
    \u0275\u0275elementEnd()();
  }
}
function AdminCertificadosComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42)(4, "div", 43)(5, "table", 44)(6, "thead", 45)(7, "tr")(8, "th");
    \u0275\u0275text(9, "C\xF3digo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Estudiante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Programa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Condici\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Archivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275repeaterCreate(25, AdminCertificadosComponent_Conditional_49_For_26_Template, 22, 20, "tr", null, _forTrack0, false, AdminCertificadosComponent_Conditional_49_ForEmpty_27_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.total, " certificados en total");
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r0.certificados);
  }
}
var AdminCertificadosComponent = class _AdminCertificadosComponent {
  service;
  plantillaService;
  certificados = [];
  total = 0;
  loading = false;
  error = "";
  success = "";
  filtros = { imparte_id: "", pageSize: 50, pageIndex: 1 };
  plantillas = [];
  generarImparteId = null;
  generarPlantillaId = null;
  generando = false;
  resultadoLote = null;
  storageBase = "http://localhost:8000";
  constructor(service, plantillaService) {
    this.service = service;
    this.plantillaService = plantillaService;
  }
  ngOnInit() {
    this.cargar();
    this.cargarPlantillas();
  }
  cargar() {
    this.loading = true;
    const params = { pageSize: this.filtros.pageSize, pageIndex: this.filtros.pageIndex };
    if (this.filtros.imparte_id)
      params.imparte_id = this.filtros.imparte_id;
    this.service.index(params).subscribe({
      next: (res) => {
        this.certificados = res.data;
        this.total = res.total;
        this.loading = false;
      },
      error: () => {
        this.error = "Error al cargar certificados.";
        this.loading = false;
      }
    });
  }
  buscar() {
    this.filtros.pageIndex = 1;
    this.cargar();
  }
  cargarPlantillas() {
    this.plantillaService.index({ soloActivos: true, pageSize: 100 }).subscribe({
      next: (res) => this.plantillas = res.data
    });
  }
  generarLote() {
    if (!this.generarImparteId || !this.generarPlantillaId) {
      this.error = "Ingrese ID de apertura y seleccione una plantilla.";
      return;
    }
    this.generando = true;
    this.error = "";
    this.success = "";
    this.resultadoLote = null;
    this.service.generarLote(this.generarImparteId, this.generarPlantillaId).subscribe({
      next: (res) => {
        this.generando = false;
        this.resultadoLote = res;
        this.success = `Se generaron ${res.generados} certificados.`;
        this.cargar();
      },
      error: (err) => {
        this.generando = false;
        this.error = err?.error?.message || "Error al generar certificados.";
      }
    });
  }
  eliminar(cert) {
    if (!confirm(`\xBFEliminar certificado ${cert.codigo_verificacion}?`))
      return;
    this.service.destroy(cert.id).subscribe({
      next: () => this.cargar(),
      error: () => alert("No se pudo eliminar.")
    });
  }
  static \u0275fac = function AdminCertificadosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminCertificadosComponent)(\u0275\u0275directiveInject(CertificadoAdminService), \u0275\u0275directiveInject(CertPlantillaService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminCertificadosComponent, selectors: [["app-admin-certificados"]], decls: 50, vars: 10, consts: [[1, "p-4"], [1, "fw-bold", "mb-4"], [1, "alert", "alert-danger", "py-2"], [1, "alert", "alert-success", "py-2"], [1, "card", "border-0", "shadow-sm", "mb-4"], [1, "card-header", "fw-semibold"], [1, "fa-solid", "fa-bolt", "me-2", "text-warning"], [1, "card-body"], [1, "text-muted", "small", "mb-3"], [1, "row", "g-3", "align-items-end"], [1, "col-md-3"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["type", "number", "placeholder", "Ej: 123", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-5"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "col-md-4"], [1, "btn", "btn-danger", "w-100", "fw-semibold", 3, "click", "disabled"], [1, "mt-4", "p-3", "rounded", "border", "bg-white"], [1, "card", "border-0", "shadow-sm", "mb-3"], [1, "card-body", "py-2"], [1, "row", "g-2", "align-items-end"], [1, "form-label", "fw-semibold", "small", "mb-1"], ["type", "number", "placeholder", "Ej: 123", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "col-auto"], [1, "btn", "btn-sm", "btn-outline-dark", 3, "click"], [1, "fa-solid", "fa-magnifying-glass", "me-1"], [1, "text-center", "py-5"], [1, "card", "border-0", "shadow-sm"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fa-solid", "fa-certificate", "me-2"], [1, "fw-semibold", "mb-2"], [1, "d-flex", "gap-4", "mb-2"], [1, "fw-bold", "text-success", "fs-4"], [1, "text-muted"], [1, "fw-bold", "text-muted", "fs-4"], [1, "fw-bold", "text-danger", "fs-4"], [1, "text-danger", "small", "fw-semibold", 2, "cursor", "pointer"], [1, "mt-2", "small"], [1, "spinner-border", "text-danger"], [1, "card-header", "text-muted", "small"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], [1, "small"], [1, "fw-semibold"], [1, "small", "text-muted"], [1, "badge"], ["target", "_blank", 1, "btn", "btn-sm", "btn-outline-success", 3, "href"], [1, "text-muted", "small"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fa-solid", "fa-trash"], [1, "fa-solid", "fa-download", "me-1"], ["colspan", "8", 1, "text-center", "text-muted", "py-4"]], template: function AdminCertificadosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
      \u0275\u0275text(2, "Generaci\xF3n de Certificados");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, AdminCertificadosComponent_Conditional_3_Template, 2, 1, "div", 2)(4, AdminCertificadosComponent_Conditional_4_Template, 2, 1, "div", 3);
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275text(8, "Generar certificados masivos ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7)(10, "p", 8);
      \u0275\u0275text(11, " Genera certificados para todos los estudiantes en ");
      \u0275\u0275elementStart(12, "strong");
      \u0275\u0275text(13, "estado_certificado = pendiente");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " de una apertura de curso. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "label", 11);
      \u0275\u0275text(18, "ID Apertura (imparte_id) ");
      \u0275\u0275elementStart(19, "span", 12);
      \u0275\u0275text(20, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function AdminCertificadosComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.generarImparteId, $event) || (ctx.generarImparteId = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 14)(23, "label", 11);
      \u0275\u0275text(24, "Plantilla de certificado ");
      \u0275\u0275elementStart(25, "span", 12);
      \u0275\u0275text(26, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "select", 15);
      \u0275\u0275twoWayListener("ngModelChange", function AdminCertificadosComponent_Template_select_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.generarPlantillaId, $event) || (ctx.generarPlantillaId = $event);
        return $event;
      });
      \u0275\u0275elementStart(28, "option", 16);
      \u0275\u0275text(29, "-- Seleccionar plantilla --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(30, AdminCertificadosComponent_For_31_Template, 2, 3, "option", 16, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 17)(33, "button", 18);
      \u0275\u0275listener("click", function AdminCertificadosComponent_Template_button_click_33_listener() {
        return ctx.generarLote();
      });
      \u0275\u0275template(34, AdminCertificadosComponent_Conditional_34_Template, 2, 0)(35, AdminCertificadosComponent_Conditional_35_Template, 2, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(36, AdminCertificadosComponent_Conditional_36_Template, 16, 4, "div", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 20)(38, "div", 21)(39, "div", 22)(40, "div", 17)(41, "label", 23);
      \u0275\u0275text(42, "Filtrar por imparte_id");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function AdminCertificadosComponent_Template_input_ngModelChange_43_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtros.imparte_id, $event) || (ctx.filtros.imparte_id = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 25)(45, "button", 26);
      \u0275\u0275listener("click", function AdminCertificadosComponent_Template_button_click_45_listener() {
        return ctx.buscar();
      });
      \u0275\u0275element(46, "i", 27);
      \u0275\u0275text(47, " Filtrar ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(48, AdminCertificadosComponent_Conditional_48_Template, 2, 0, "div", 28)(49, AdminCertificadosComponent_Conditional_49_Template, 28, 2, "div", 29);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.error ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.success ? 4 : -1);
      \u0275\u0275advance(17);
      \u0275\u0275twoWayProperty("ngModel", ctx.generarImparteId);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.generarPlantillaId);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.plantillas);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.generando);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.generando ? 34 : 35);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.resultadoLote ? 36 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtros.imparte_id);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loading ? 48 : 49);
    }
  }, dependencies: [CommonModule, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminCertificadosComponent, [{
    type: Component,
    args: [{ selector: "app-admin-certificados", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="p-4">
    <h4 class="fw-bold mb-4">Generaci\xF3n de Certificados</h4>

    @if (error) { <div class="alert alert-danger py-2">{{ error }}</div> }
    @if (success) { <div class="alert alert-success py-2">{{ success }}</div> }

    <!-- GENERACI\xD3N MASIVA -->
    <div class="card border-0 shadow-sm mb-4">
        <div class="card-header fw-semibold">
            <i class="fa-solid fa-bolt me-2 text-warning"></i>Generar certificados masivos
        </div>
        <div class="card-body">
            <p class="text-muted small mb-3">
                Genera certificados para todos los estudiantes en <strong>estado_certificado = pendiente</strong> de una apertura de curso.
            </p>
            <div class="row g-3 align-items-end">
                <div class="col-md-3">
                    <label class="form-label fw-semibold">ID Apertura (imparte_id) <span class="text-danger">*</span></label>
                    <input type="number" class="form-control" [(ngModel)]="generarImparteId" placeholder="Ej: 123">
                </div>
                <div class="col-md-5">
                    <label class="form-label fw-semibold">Plantilla de certificado <span class="text-danger">*</span></label>
                    <select class="form-select" [(ngModel)]="generarPlantillaId">
                        <option [ngValue]="null">-- Seleccionar plantilla --</option>
                        @for (p of plantillas; track p.id) {
                            <option [ngValue]="p.id">{{ p.nombre }} ({{ p.tipo }})</option>
                        }
                    </select>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-danger w-100 fw-semibold" (click)="generarLote()" [disabled]="generando">
                        @if (generando) {
                            <span class="spinner-border spinner-border-sm me-2"></span> Generando...
                        } @else {
                            <i class="fa-solid fa-certificate me-2"></i> Generar Certificados
                        }
                    </button>
                </div>
            </div>

            <!-- Resultado -->
            @if (resultadoLote) {
            <div class="mt-4 p-3 rounded border bg-white">
                <p class="fw-semibold mb-2">Resultado:</p>
                <div class="d-flex gap-4 mb-2">
                    <div>
                        <div class="fw-bold text-success fs-4">{{ resultadoLote.generados }}</div>
                        <small class="text-muted">Generados</small>
                    </div>
                    <div>
                        <div class="fw-bold text-muted fs-4">{{ resultadoLote.total_aprobados }}</div>
                        <small class="text-muted">Total aprobados</small>
                    </div>
                    @if (resultadoLote.errores?.length) {
                    <div>
                        <div class="fw-bold text-danger fs-4">{{ resultadoLote.errores.length }}</div>
                        <small class="text-muted">Errores</small>
                    </div>
                    }
                </div>
                @if (resultadoLote.errores?.length) {
                    <details>
                        <summary class="text-danger small fw-semibold" style="cursor:pointer;">Ver errores</summary>
                        <ul class="mt-2 small">
                            @for (e of resultadoLote.errores; track e.usuario_id) {
                                <li>Usuario {{ e.usuario_id }} ({{ e.nombre }}): {{ e.error }}</li>
                            }
                        </ul>
                    </details>
                }
            </div>
            }
        </div>
    </div>

    <!-- FILTROS + LISTA -->
    <div class="card border-0 shadow-sm mb-3">
        <div class="card-body py-2">
            <div class="row g-2 align-items-end">
                <div class="col-md-4">
                    <label class="form-label fw-semibold small mb-1">Filtrar por imparte_id</label>
                    <input type="number" class="form-control form-control-sm" [(ngModel)]="filtros.imparte_id" placeholder="Ej: 123">
                </div>
                <div class="col-auto">
                    <button class="btn btn-sm btn-outline-dark" (click)="buscar()">
                        <i class="fa-solid fa-magnifying-glass me-1"></i> Filtrar
                    </button>
                </div>
            </div>
        </div>
    </div>

    @if (loading) {
        <div class="text-center py-5"><span class="spinner-border text-danger"></span></div>
    } @else {
    <div class="card border-0 shadow-sm">
        <div class="card-header text-muted small">{{ total }} certificados en total</div>
        <div class="card-body p-0">
            <div class="table-responsive">
                <table class="table table-hover mb-0">
                    <thead class="table-light">
                        <tr>
                            <th>C\xF3digo</th>
                            <th>Estudiante</th>
                            <th>Programa</th>
                            <th>Condici\xF3n</th>
                            <th>Estado</th>
                            <th>Archivo</th>
                            <th>Fecha</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        @for (cert of certificados; track cert.id) {
                        <tr>
                            <td><code class="small">{{ cert.codigo_verificacion }}</code></td>
                            <td class="fw-semibold">{{ cert.nombre_en_certificado }}</td>
                            <td class="small text-muted">{{ cert.programa_en_certificado }}</td>
                            <td>
                                <span class="badge"
                                    [class.bg-success]="cert.condicion==='aprobado'"
                                    [class.bg-info]="cert.condicion!=='aprobado'">
                                    {{ cert.condicion }}
                                </span>
                            </td>
                            <td>
                                <span class="badge"
                                    [class.bg-success]="cert.estado==='generado'"
                                    [class.bg-danger]="cert.estado==='anulado'"
                                    [class.bg-secondary]="cert.estado!=='generado' && cert.estado!=='anulado'">
                                    {{ cert.estado }}
                                </span>
                            </td>
                            <td>
                                @if (cert.archivo_url) {
                                    <a [href]="storageBase + cert.archivo_url" target="_blank" class="btn btn-sm btn-outline-success">
                                        <i class="fa-solid fa-download me-1"></i>JPG
                                    </a>
                                }
                            </td>
                            <td class="text-muted small">{{ cert.created_at | date:'dd/MM/yyyy' }}</td>
                            <td>
                                <button class="btn btn-sm btn-outline-danger" (click)="eliminar(cert)">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        } @empty {
                        <tr><td colspan="8" class="text-center text-muted py-4">No hay certificados generados a\xFAn.</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    }
</div>
` }]
  }], () => [{ type: CertificadoAdminService }, { type: CertPlantillaService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminCertificadosComponent, { className: "AdminCertificadosComponent", filePath: "src/app/views/admin/certificados/certificados.component.ts", lineNumber: 13 });
})();
export {
  AdminCertificadosComponent
};
//# sourceMappingURL=chunk-Y6A5RFJT.js.map
