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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2UT764MQ.js";

// src/app/core/services/lista-aprobados.service.ts
var API = "http://localhost:8000/api/v1";
var ListaAprobadosService = class _ListaAprobadosService {
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
    return this.http.get(`${API}/lista-aprobados`, __spreadProps(__spreadValues({}, this.h()), { params }));
  }
  store(data) {
    return this.http.post(`${API}/lista-aprobados`, data, this.h());
  }
  update(id, data) {
    return this.http.put(`${API}/lista-aprobados/${id}`, data, this.h());
  }
  destroy(id) {
    return this.http.delete(`${API}/lista-aprobados/${id}`, this.h());
  }
  static \u0275fac = function ListaAprobadosService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaAprobadosService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AdminAuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ListaAprobadosService, factory: _ListaAprobadosService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaAprobadosService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: AdminAuthService }], null);
})();

// src/app/views/admin/lista-aprobados/lista-aprobados.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminListaAprobadosComponent_Conditional_7_Template(rf, ctx) {
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
function AdminListaAprobadosComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.success);
  }
}
function AdminListaAprobadosComponent_Conditional_20_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 34);
  }
}
function AdminListaAprobadosComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 19);
    \u0275\u0275text(2, "Nuevo Aprobado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "div", 21)(5, "div", 10)(6, "label", 22);
    \u0275\u0275text(7, "ID Apertura (imparte_id) ");
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function AdminListaAprobadosComponent_Conditional_20_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.imparte_id, $event) || (ctx_r0.form.imparte_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 10)(12, "label", 22);
    \u0275\u0275text(13, "ID Usuario ");
    \u0275\u0275elementStart(14, "span", 23);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function AdminListaAprobadosComponent_Conditional_20_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.usuario_id, $event) || (ctx_r0.form.usuario_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 10)(18, "label", 22);
    \u0275\u0275text(19, "Nota final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function AdminListaAprobadosComponent_Conditional_20_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.nota_final, $event) || (ctx_r0.form.nota_final = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 10)(22, "label", 22);
    \u0275\u0275text(23, "Condici\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function AdminListaAprobadosComponent_Conditional_20_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.condicion, $event) || (ctx_r0.form.condicion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(25, "option", 28);
    \u0275\u0275text(26, "Aprobado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 29);
    \u0275\u0275text(28, "Participaci\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 30)(30, "label", 22);
    \u0275\u0275text(31, "Observaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function AdminListaAprobadosComponent_Conditional_20_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.observacion, $event) || (ctx_r0.form.observacion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 32)(34, "button", 33);
    \u0275\u0275listener("click", function AdminListaAprobadosComponent_Conditional_20_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.guardar());
    });
    \u0275\u0275template(35, AdminListaAprobadosComponent_Conditional_20_Conditional_35_Template, 1, 0, "span", 34);
    \u0275\u0275text(36, " Guardar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 35);
    \u0275\u0275listener("click", function AdminListaAprobadosComponent_Conditional_20_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelar());
    });
    \u0275\u0275text(38, "Cancelar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.imparte_id);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.usuario_id);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.nota_final);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.condicion);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.observacion);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.guardando || !ctx_r0.form.imparte_id || !ctx_r0.form.usuario_id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.guardando ? 35 : -1);
  }
}
function AdminListaAprobadosComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "span", 36);
    \u0275\u0275elementEnd();
  }
}
function AdminListaAprobadosComponent_Conditional_22_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 42);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 42);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "button", 43);
    \u0275\u0275listener("click", function AdminListaAprobadosComponent_Conditional_22_For_23_Template_button_click_16_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.eliminar(item_r4));
    });
    \u0275\u0275element(17, "i", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.imparte_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.usuario_id);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", item_r4.condicion === "aprobado")("bg-info", item_r4.condicion !== "aprobado");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.condicion, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_17_0 = item_r4.nota_final) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-warning", item_r4.estado_certificado === "pendiente")("bg-success", item_r4.estado_certificado === "generado")("bg-secondary", item_r4.estado_certificado !== "pendiente" && item_r4.estado_certificado !== "generado");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.estado_certificado, " ");
  }
}
function AdminListaAprobadosComponent_Conditional_22_ForEmpty_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275text(2, "No hay registros.");
    \u0275\u0275elementEnd()();
  }
}
function AdminListaAprobadosComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 38)(4, "table", 39)(5, "thead", 40)(6, "tr")(7, "th");
    \u0275\u0275text(8, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "imparte_id");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "usuario_id");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Condici\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Nota");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Estado Certificado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, AdminListaAprobadosComponent_Conditional_22_For_23_Template, 18, 16, "tr", null, _forTrack0, false, AdminListaAprobadosComponent_Conditional_22_ForEmpty_24_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.total, " registros en total");
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r0.items);
  }
}
var AdminListaAprobadosComponent = class _AdminListaAprobadosComponent {
  service;
  items = [];
  total = 0;
  loading = false;
  error = "";
  success = "";
  filtros = { imparte_id: "", pageSize: 50, pageIndex: 1 };
  showForm = false;
  guardando = false;
  form = {
    imparte_id: null,
    usuario_id: null,
    nota_final: null,
    condicion: "aprobado",
    observacion: ""
  };
  constructor(service) {
    this.service = service;
  }
  ngOnInit() {
    this.cargar();
  }
  cargar() {
    this.loading = true;
    const params = { pageSize: this.filtros.pageSize, pageIndex: this.filtros.pageIndex };
    if (this.filtros.imparte_id)
      params.imparte_id = this.filtros.imparte_id;
    this.service.index(params).subscribe({
      next: (res) => {
        this.items = res.data;
        this.total = res.total;
        this.loading = false;
      },
      error: () => {
        this.error = "Error al cargar datos.";
        this.loading = false;
      }
    });
  }
  buscar() {
    this.filtros.pageIndex = 1;
    this.cargar();
  }
  nuevoAprobado() {
    this.form = { imparte_id: null, usuario_id: null, nota_final: null, condicion: "aprobado", observacion: "" };
    this.showForm = true;
    this.error = "";
    this.success = "";
  }
  cancelar() {
    this.showForm = false;
  }
  guardar() {
    this.guardando = true;
    this.error = "";
    this.service.store(this.form).subscribe({
      next: () => {
        this.guardando = false;
        this.success = "Aprobado registrado correctamente.";
        this.showForm = false;
        this.cargar();
      },
      error: (err) => {
        this.guardando = false;
        this.error = err?.error?.message || JSON.stringify(err?.error?.errors) || "Error al guardar.";
      }
    });
  }
  eliminar(item) {
    if (!confirm("\xBFEliminar este registro de aprobado?"))
      return;
    this.service.destroy(item.id).subscribe({
      next: () => this.cargar(),
      error: () => alert("No se pudo eliminar.")
    });
  }
  static \u0275fac = function AdminListaAprobadosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminListaAprobadosComponent)(\u0275\u0275directiveInject(ListaAprobadosService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminListaAprobadosComponent, selectors: [["app-admin-lista-aprobados"]], decls: 23, vars: 5, consts: [[1, "p-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "fw-bold", "mb-0"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fa-solid", "fa-user-plus", "me-1"], [1, "alert", "alert-danger", "py-2"], [1, "alert", "alert-success", "py-2"], [1, "card", "border-0", "shadow-sm", "mb-4"], [1, "card-body", "py-2"], [1, "row", "g-2", "align-items-end"], [1, "col-md-4"], [1, "form-label", "fw-semibold", "small", "mb-1"], ["type", "number", "placeholder", "Ej: 123", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "col-auto"], [1, "btn", "btn-sm", "btn-outline-dark", 3, "click"], [1, "fa-solid", "fa-magnifying-glass", "me-1"], [1, "card", "mb-4", "border-0", "shadow-sm"], [1, "text-center", "py-5"], [1, "card", "border-0", "shadow-sm"], [1, "card-header", "fw-semibold"], [1, "card-body"], [1, "row", "g-3"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["type", "number", "placeholder", "Ej: 123", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Ej: 456", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.01", "placeholder", "Ej: 78.5", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "aprobado"], ["value", "participaci\xF3n"], [1, "col-md-8"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "gap-2", "mt-3"], [1, "btn", "btn-danger", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "spinner-border", "text-danger"], [1, "card-header", "text-muted", "small"], [1, "card-body", "p-0"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], [1, "text-muted", "small"], [1, "badge"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fa-solid", "fa-trash"], ["colspan", "7", 1, "text-center", "text-muted", "py-4"]], template: function AdminListaAprobadosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Lista de Aprobados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function AdminListaAprobadosComponent_Template_button_click_4_listener() {
        return ctx.nuevoAprobado();
      });
      \u0275\u0275element(5, "i", 4);
      \u0275\u0275text(6, " Agregar Aprobado ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, AdminListaAprobadosComponent_Conditional_7_Template, 2, 1, "div", 5)(8, AdminListaAprobadosComponent_Conditional_8_Template, 2, 1, "div", 6);
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "label", 11);
      \u0275\u0275text(14, "ID de Apertura (imparte_id)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function AdminListaAprobadosComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtros.imparte_id, $event) || (ctx.filtros.imparte_id = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 13)(17, "button", 14);
      \u0275\u0275listener("click", function AdminListaAprobadosComponent_Template_button_click_17_listener() {
        return ctx.buscar();
      });
      \u0275\u0275element(18, "i", 15);
      \u0275\u0275text(19, " Filtrar ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(20, AdminListaAprobadosComponent_Conditional_20_Template, 39, 7, "div", 16)(21, AdminListaAprobadosComponent_Conditional_21_Template, 2, 0, "div", 17)(22, AdminListaAprobadosComponent_Conditional_22_Template, 25, 2, "div", 18);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.error ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.success ? 8 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtros.imparte_id);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.showForm ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 21 : 22);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminListaAprobadosComponent, [{
    type: Component,
    args: [{ selector: "app-admin-lista-aprobados", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="p-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h4 class="fw-bold mb-0">Lista de Aprobados</h4>
        <button class="btn btn-danger btn-sm" (click)="nuevoAprobado()">
            <i class="fa-solid fa-user-plus me-1"></i> Agregar Aprobado
        </button>
    </div>

    @if (error) { <div class="alert alert-danger py-2">{{ error }}</div> }
    @if (success) { <div class="alert alert-success py-2">{{ success }}</div> }

    <!-- FILTROS -->
    <div class="card border-0 shadow-sm mb-4">
        <div class="card-body py-2">
            <div class="row g-2 align-items-end">
                <div class="col-md-4">
                    <label class="form-label fw-semibold small mb-1">ID de Apertura (imparte_id)</label>
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

    <!-- FORM -->
    @if (showForm) {
    <div class="card mb-4 border-0 shadow-sm">
        <div class="card-header fw-semibold">Nuevo Aprobado</div>
        <div class="card-body">
            <div class="row g-3">
                <div class="col-md-4">
                    <label class="form-label fw-semibold">ID Apertura (imparte_id) <span class="text-danger">*</span></label>
                    <input type="number" class="form-control" [(ngModel)]="form.imparte_id" placeholder="Ej: 123">
                </div>
                <div class="col-md-4">
                    <label class="form-label fw-semibold">ID Usuario <span class="text-danger">*</span></label>
                    <input type="number" class="form-control" [(ngModel)]="form.usuario_id" placeholder="Ej: 456">
                </div>
                <div class="col-md-4">
                    <label class="form-label fw-semibold">Nota final</label>
                    <input type="number" class="form-control" [(ngModel)]="form.nota_final" step="0.01" placeholder="Ej: 78.5">
                </div>
                <div class="col-md-4">
                    <label class="form-label fw-semibold">Condici\xF3n</label>
                    <select class="form-select" [(ngModel)]="form.condicion">
                        <option value="aprobado">Aprobado</option>
                        <option value="participaci\xF3n">Participaci\xF3n</option>
                    </select>
                </div>
                <div class="col-md-8">
                    <label class="form-label fw-semibold">Observaci\xF3n</label>
                    <input type="text" class="form-control" [(ngModel)]="form.observacion">
                </div>
            </div>
            <div class="d-flex gap-2 mt-3">
                <button class="btn btn-danger" (click)="guardar()" [disabled]="guardando || !form.imparte_id || !form.usuario_id">
                    @if (guardando) { <span class="spinner-border spinner-border-sm me-1"></span> }
                    Guardar
                </button>
                <button class="btn btn-outline-secondary" (click)="cancelar()">Cancelar</button>
            </div>
        </div>
    </div>
    }

    <!-- TABLE -->
    @if (loading) {
        <div class="text-center py-5"><span class="spinner-border text-danger"></span></div>
    } @else {
    <div class="card border-0 shadow-sm">
        <div class="card-header text-muted small">{{ total }} registros en total</div>
        <div class="card-body p-0">
            <table class="table table-hover mb-0">
                <thead class="table-light">
                    <tr>
                        <th>ID</th>
                        <th>imparte_id</th>
                        <th>usuario_id</th>
                        <th>Condici\xF3n</th>
                        <th>Nota</th>
                        <th>Estado Certificado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    @for (item of items; track item.id) {
                    <tr>
                        <td class="text-muted small">{{ item.id }}</td>
                        <td>{{ item.imparte_id }}</td>
                        <td>{{ item.usuario_id }}</td>
                        <td>
                            <span class="badge" [class.bg-success]="item.condicion==='aprobado'" [class.bg-info]="item.condicion!=='aprobado'">
                                {{ item.condicion }}
                            </span>
                        </td>
                        <td>{{ item.nota_final ?? '\u2014' }}</td>
                        <td>
                            <span class="badge"
                                [class.bg-warning]="item.estado_certificado==='pendiente'"
                                [class.bg-success]="item.estado_certificado==='generado'"
                                [class.bg-secondary]="item.estado_certificado!=='pendiente' && item.estado_certificado!=='generado'">
                                {{ item.estado_certificado }}
                            </span>
                        </td>
                        <td>
                            <button class="btn btn-sm btn-outline-danger" (click)="eliminar(item)">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                    } @empty {
                    <tr><td colspan="7" class="text-center text-muted py-4">No hay registros.</td></tr>
                    }
                </tbody>
            </table>
        </div>
    </div>
    }
</div>
` }]
  }], () => [{ type: ListaAprobadosService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminListaAprobadosComponent, { className: "AdminListaAprobadosComponent", filePath: "src/app/views/admin/lista-aprobados/lista-aprobados.component.ts", lineNumber: 12 });
})();
export {
  AdminListaAprobadosComponent
};
//# sourceMappingURL=chunk-E5U35ZGW.js.map
