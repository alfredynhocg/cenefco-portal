import {
  CertPlantillaService
} from "./chunk-6WKCNI62.js";
import "./chunk-VA2CXNEA.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-FVGVLSI5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
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
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2UT764MQ.js";

// src/app/views/admin/plantillas/plantillas.component.ts
var _c0 = (a0) => ["/admin/plantillas", a0, "campos"];
var _forTrack0 = ($index, $item) => $item.id;
function AdminPlantillasComponent_Conditional_7_Template(rf, ctx) {
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
function AdminPlantillasComponent_Conditional_8_Template(rf, ctx) {
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
function AdminPlantillasComponent_Conditional_9_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 24);
    \u0275\u0275element(1, "span", 38);
    \u0275\u0275text(2, "Subiendo...");
    \u0275\u0275elementEnd();
  }
}
function AdminPlantillasComponent_Conditional_9_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "small", 40);
    \u0275\u0275element(2, "i", 41);
    \u0275\u0275text(3, "Imagen cargada");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br")(5, "img", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r0.storageBase + ctx_r0.form.imagen_url, \u0275\u0275sanitizeUrl);
  }
}
function AdminPlantillasComponent_Conditional_9_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 38);
  }
}
function AdminPlantillasComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 12)(5, "div", 13)(6, "label", 14);
    \u0275\u0275text(7, "Nombre ");
    \u0275\u0275elementStart(8, "span", 15);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillasComponent_Conditional_9_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.nombre, $event) || (ctx_r0.form.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 17)(12, "label", 14);
    \u0275\u0275text(13, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 18);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillasComponent_Conditional_9_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.tipo, $event) || (ctx_r0.form.tipo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 19);
    \u0275\u0275text(16, "Aprobaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 20);
    \u0275\u0275text(18, "Participaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 21);
    \u0275\u0275text(20, "M\xE9rito");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 22)(22, "label", 14);
    \u0275\u0275text(23, "Imagen de fondo (JPG/PNG) ");
    \u0275\u0275elementStart(24, "span", 15);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "input", 23);
    \u0275\u0275listener("change", function AdminPlantillasComponent_Conditional_9_Template_input_change_26_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.subirImagen($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, AdminPlantillasComponent_Conditional_9_Conditional_27_Template, 3, 0, "small", 24)(28, AdminPlantillasComponent_Conditional_9_Conditional_28_Template, 6, 1, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 26)(30, "label", 14);
    \u0275\u0275text(31, "Ancho (px)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillasComponent_Conditional_9_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.ancho_px, $event) || (ctx_r0.form.ancho_px = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 26)(34, "label", 14);
    \u0275\u0275text(35, "Alto (px)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillasComponent_Conditional_9_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.alto_px, $event) || (ctx_r0.form.alto_px = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 26)(38, "label", 14);
    \u0275\u0275text(39, "Orientaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "select", 18);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillasComponent_Conditional_9_Template_select_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.orientacion, $event) || (ctx_r0.form.orientacion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(41, "option", 28);
    \u0275\u0275text(42, "Horizontal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 29);
    \u0275\u0275text(44, "Vertical");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 26)(46, "label", 14);
    \u0275\u0275text(47, "Calidad JPG (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillasComponent_Conditional_9_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.calidad_jpg, $event) || (ctx_r0.form.calidad_jpg = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 17)(50, "label", 14);
    \u0275\u0275text(51, "Color texto por defecto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 31)(53, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillasComponent_Conditional_9_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.color_default, $event) || (ctx_r0.form.color_default = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillasComponent_Conditional_9_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.color_default, $event) || (ctx_r0.form.color_default = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 17)(56, "label", 14);
    \u0275\u0275text(57, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "select", 18);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillasComponent_Conditional_9_Template_select_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.estado, $event) || (ctx_r0.form.estado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(59, "option", 34);
    \u0275\u0275text(60, "Activo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "option", 35);
    \u0275\u0275text(62, "Inactivo");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "div", 36)(64, "button", 37);
    \u0275\u0275listener("click", function AdminPlantillasComponent_Conditional_9_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.guardar());
    });
    \u0275\u0275template(65, AdminPlantillasComponent_Conditional_9_Conditional_65_Template, 1, 0, "span", 38);
    \u0275\u0275text(66, " Guardar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 39);
    \u0275\u0275listener("click", function AdminPlantillasComponent_Conditional_9_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelar());
    });
    \u0275\u0275text(68, "Cancelar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.editando ? "Editar Plantilla" : "Nueva Plantilla");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.nombre);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.tipo);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx_r0.subiendo ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.imagen_url ? 28 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.ancho_px);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.alto_px);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.orientacion);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.calidad_jpg);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.color_default);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.color_default);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.estado);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.guardando || !ctx_r0.form.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.guardando ? 65 : -1);
  }
}
function AdminPlantillasComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "span", 43);
    \u0275\u0275elementEnd();
  }
}
function AdminPlantillasComponent_Conditional_11_For_19_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 50);
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.storageBase + p_r4.imagen_url, \u0275\u0275sanitizeUrl);
  }
}
function AdminPlantillasComponent_Conditional_11_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275template(9, AdminPlantillasComponent_Conditional_11_For_19_Conditional_9_Template, 1, 1, "img", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 51);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "div", 52)(15, "button", 53);
    \u0275\u0275listener("click", function AdminPlantillasComponent_Conditional_11_For_19_Template_button_click_15_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editarPlantilla(p_r4));
    });
    \u0275\u0275element(16, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 55);
    \u0275\u0275element(18, "i", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 57);
    \u0275\u0275listener("click", function AdminPlantillasComponent_Conditional_11_For_19_Template_button_click_19_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.eliminar(p_r4));
    });
    \u0275\u0275element(20, "i", 58);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r4.tipo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r4.ancho_px, " \xD7 ", p_r4.alto_px, "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r4.imagen_url ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", p_r4.estado === "activo")("bg-secondary", p_r4.estado !== "activo");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r4.estado, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, p_r4.id));
  }
}
function AdminPlantillasComponent_Conditional_11_ForEmpty_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 59);
    \u0275\u0275text(2, "No hay plantillas creadas.");
    \u0275\u0275elementEnd()();
  }
}
function AdminPlantillasComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 44)(2, "table", 45)(3, "thead", 46)(4, "tr")(5, "th");
    \u0275\u0275text(6, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Dimensiones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Vista previa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, AdminPlantillasComponent_Conditional_11_For_19_Template, 21, 13, "tr", null, _forTrack0, false, AdminPlantillasComponent_Conditional_11_ForEmpty_20_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r0.plantillas);
  }
}
var AdminPlantillasComponent = class _AdminPlantillasComponent {
  service;
  plantillas = [];
  total = 0;
  loading = false;
  error = "";
  success = "";
  showForm = false;
  editando = null;
  form = {
    nombre: "",
    tipo: "aprobacion",
    imagen_url: "",
    ancho_px: 3508,
    alto_px: 2480,
    orientacion: "horizontal",
    formato_salida: "jpg",
    calidad_jpg: 95,
    fuente_default: "",
    color_default: "#000000",
    estado: "activo"
  };
  subiendo = false;
  guardando = false;
  constructor(service) {
    this.service = service;
  }
  ngOnInit() {
    this.cargar();
  }
  cargar() {
    this.loading = true;
    this.service.index({ pageSize: 50 }).subscribe({
      next: (res) => {
        this.plantillas = res.data;
        this.total = res.total;
        this.loading = false;
      },
      error: () => {
        this.error = "Error al cargar plantillas.";
        this.loading = false;
      }
    });
  }
  nuevaPlantilla() {
    this.editando = null;
    this.form = {
      nombre: "",
      tipo: "aprobacion",
      imagen_url: "",
      ancho_px: 3508,
      alto_px: 2480,
      orientacion: "horizontal",
      formato_salida: "jpg",
      calidad_jpg: 95,
      fuente_default: "",
      color_default: "#000000",
      estado: "activo"
    };
    this.showForm = true;
    this.success = "";
    this.error = "";
  }
  editarPlantilla(p) {
    this.editando = p;
    this.form = __spreadValues({}, p);
    this.showForm = true;
    this.success = "";
    this.error = "";
  }
  cancelar() {
    this.showForm = false;
    this.editando = null;
  }
  subirImagen(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    this.subiendo = true;
    this.service.uploadImage(file).subscribe({
      next: (res) => {
        this.form.imagen_url = res.url;
        this.subiendo = false;
      },
      error: () => {
        this.error = "Error al subir imagen.";
        this.subiendo = false;
      }
    });
  }
  guardar() {
    if (!this.form.imagen_url) {
      this.error = "Debe subir una imagen de plantilla.";
      return;
    }
    this.guardando = true;
    this.error = "";
    const obs = this.editando ? this.service.update(this.editando.id, this.form) : this.service.store(this.form);
    obs.subscribe({
      next: () => {
        this.guardando = false;
        this.success = this.editando ? "Plantilla actualizada." : "Plantilla creada.";
        this.showForm = false;
        this.cargar();
      },
      error: (err) => {
        this.guardando = false;
        this.error = err?.error?.message || "Error al guardar plantilla.";
      }
    });
  }
  eliminar(p) {
    if (!confirm(`\xBFEliminar plantilla "${p.nombre}"?`))
      return;
    this.service.destroy(p.id).subscribe({
      next: () => this.cargar(),
      error: () => alert("No se pudo eliminar la plantilla.")
    });
  }
  get storageBase() {
    return "http://localhost:8000";
  }
  static \u0275fac = function AdminPlantillasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminPlantillasComponent)(\u0275\u0275directiveInject(CertPlantillaService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminPlantillasComponent, selectors: [["app-admin-plantillas"]], decls: 12, vars: 4, consts: [[1, "p-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "fw-bold", "mb-0"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fa-solid", "fa-plus", "me-1"], [1, "alert", "alert-danger", "py-2"], [1, "alert", "alert-success", "py-2"], [1, "card", "mb-4", "border-0", "shadow-sm"], [1, "text-center", "py-5"], [1, "card", "border-0", "shadow-sm"], [1, "card-header", "fw-semibold"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-8"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["type", "text", "placeholder", "Ej: Plantilla Diplomado 2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-4"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "aprobacion"], ["value", "participacion"], ["value", "merito"], [1, "col-12"], ["type", "file", "accept", ".jpg,.jpeg,.png", 1, "form-control", 3, "change"], [1, "text-muted"], [1, "mt-2"], [1, "col-md-3"], ["type", "number", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "horizontal"], ["value", "vertical"], ["type", "number", "min", "50", "max", "100", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "gap-2", "align-items-center"], ["type", "color", 1, "form-control", "form-control-color", 3, "ngModelChange", "ngModel"], ["type", "text", 1, "form-control", 2, "width", "100px", 3, "ngModelChange", "ngModel"], ["value", "activo"], ["value", "inactivo"], [1, "d-flex", "gap-2", "mt-3"], [1, "btn", "btn-danger", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "text-success"], [1, "fa-solid", "fa-check", "me-1"], [1, "mt-2", "rounded", "border", 2, "max-height", "120px", 3, "src"], [1, "spinner-border", "text-danger"], [1, "card-body", "p-0"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], [1, "fw-semibold"], [1, "badge", "bg-secondary"], [1, "text-muted", "small"], [2, "height", "40px", "border-radius", "4px", 3, "src"], [1, "badge"], [1, "d-flex", "gap-1"], ["title", "Editar", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "fa-solid", "fa-pen"], ["title", "Configurar campos", 1, "btn", "btn-sm", "btn-outline-dark", 3, "routerLink"], [1, "fa-solid", "fa-sliders"], ["title", "Eliminar", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fa-solid", "fa-trash"], ["colspan", "6", 1, "text-center", "text-muted", "py-4"]], template: function AdminPlantillasComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Plantillas de Certificado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function AdminPlantillasComponent_Template_button_click_4_listener() {
        return ctx.nuevaPlantilla();
      });
      \u0275\u0275element(5, "i", 4);
      \u0275\u0275text(6, " Nueva Plantilla ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, AdminPlantillasComponent_Conditional_7_Template, 2, 1, "div", 5)(8, AdminPlantillasComponent_Conditional_8_Template, 2, 1, "div", 6)(9, AdminPlantillasComponent_Conditional_9_Template, 69, 14, "div", 7)(10, AdminPlantillasComponent_Conditional_10_Template, 2, 0, "div", 8)(11, AdminPlantillasComponent_Conditional_11_Template, 21, 1, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.error ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.success ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showForm ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 10 : 11);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminPlantillasComponent, [{
    type: Component,
    args: [{ selector: "app-admin-plantillas", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="p-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h4 class="fw-bold mb-0">Plantillas de Certificado</h4>
        <button class="btn btn-danger btn-sm" (click)="nuevaPlantilla()">
            <i class="fa-solid fa-plus me-1"></i> Nueva Plantilla
        </button>
    </div>

    @if (error) { <div class="alert alert-danger py-2">{{ error }}</div> }
    @if (success) { <div class="alert alert-success py-2">{{ success }}</div> }

    <!-- FORM -->
    @if (showForm) {
    <div class="card mb-4 border-0 shadow-sm">
        <div class="card-header fw-semibold">{{ editando ? 'Editar Plantilla' : 'Nueva Plantilla' }}</div>
        <div class="card-body">
            <div class="row g-3">
                <div class="col-md-8">
                    <label class="form-label fw-semibold">Nombre <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" [(ngModel)]="form.nombre" placeholder="Ej: Plantilla Diplomado 2026">
                </div>
                <div class="col-md-4">
                    <label class="form-label fw-semibold">Tipo</label>
                    <select class="form-select" [(ngModel)]="form.tipo">
                        <option value="aprobacion">Aprobaci\xF3n</option>
                        <option value="participacion">Participaci\xF3n</option>
                        <option value="merito">M\xE9rito</option>
                    </select>
                </div>
                <div class="col-12">
                    <label class="form-label fw-semibold">Imagen de fondo (JPG/PNG) <span class="text-danger">*</span></label>
                    <input type="file" class="form-control" accept=".jpg,.jpeg,.png" (change)="subirImagen($event)">
                    @if (subiendo) { <small class="text-muted"><span class="spinner-border spinner-border-sm me-1"></span>Subiendo...</small> }
                    @if (form.imagen_url) {
                        <div class="mt-2">
                            <small class="text-success"><i class="fa-solid fa-check me-1"></i>Imagen cargada</small>
                            <br>
                            <img [src]="storageBase + form.imagen_url" class="mt-2 rounded border" style="max-height:120px;">
                        </div>
                    }
                </div>
                <div class="col-md-3">
                    <label class="form-label fw-semibold">Ancho (px)</label>
                    <input type="number" class="form-control" [(ngModel)]="form.ancho_px">
                </div>
                <div class="col-md-3">
                    <label class="form-label fw-semibold">Alto (px)</label>
                    <input type="number" class="form-control" [(ngModel)]="form.alto_px">
                </div>
                <div class="col-md-3">
                    <label class="form-label fw-semibold">Orientaci\xF3n</label>
                    <select class="form-select" [(ngModel)]="form.orientacion">
                        <option value="horizontal">Horizontal</option>
                        <option value="vertical">Vertical</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label class="form-label fw-semibold">Calidad JPG (%)</label>
                    <input type="number" class="form-control" [(ngModel)]="form.calidad_jpg" min="50" max="100">
                </div>
                <div class="col-md-4">
                    <label class="form-label fw-semibold">Color texto por defecto</label>
                    <div class="d-flex gap-2 align-items-center">
                        <input type="color" class="form-control form-control-color" [(ngModel)]="form.color_default">
                        <input type="text" class="form-control" [(ngModel)]="form.color_default" style="width:100px;">
                    </div>
                </div>
                <div class="col-md-4">
                    <label class="form-label fw-semibold">Estado</label>
                    <select class="form-select" [(ngModel)]="form.estado">
                        <option value="activo">Activo</option>
                        <option value="inactivo">Inactivo</option>
                    </select>
                </div>
            </div>
            <div class="d-flex gap-2 mt-3">
                <button class="btn btn-danger" (click)="guardar()" [disabled]="guardando || !form.nombre">
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
        <div class="card-body p-0">
            <table class="table table-hover mb-0">
                <thead class="table-light">
                    <tr>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Dimensiones</th>
                        <th>Vista previa</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    @for (p of plantillas; track p.id) {
                    <tr>
                        <td class="fw-semibold">{{ p.nombre }}</td>
                        <td><span class="badge bg-secondary">{{ p.tipo }}</span></td>
                        <td class="text-muted small">{{ p.ancho_px }} \xD7 {{ p.alto_px }}</td>
                        <td>
                            @if (p.imagen_url) {
                                <img [src]="storageBase + p.imagen_url" style="height:40px; border-radius:4px;">
                            }
                        </td>
                        <td>
                            <span class="badge" [class.bg-success]="p.estado==='activo'" [class.bg-secondary]="p.estado!=='activo'">
                                {{ p.estado }}
                            </span>
                        </td>
                        <td>
                            <div class="d-flex gap-1">
                                <button class="btn btn-sm btn-outline-primary" (click)="editarPlantilla(p)" title="Editar">
                                    <i class="fa-solid fa-pen"></i>
                                </button>
                                <a class="btn btn-sm btn-outline-dark" [routerLink]="['/admin/plantillas', p.id, 'campos']" title="Configurar campos">
                                    <i class="fa-solid fa-sliders"></i>
                                </a>
                                <button class="btn btn-sm btn-outline-danger" (click)="eliminar(p)" title="Eliminar">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                    } @empty {
                    <tr><td colspan="6" class="text-center text-muted py-4">No hay plantillas creadas.</td></tr>
                    }
                </tbody>
            </table>
        </div>
    </div>
    }
</div>
` }]
  }], () => [{ type: CertPlantillaService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminPlantillasComponent, { className: "AdminPlantillasComponent", filePath: "src/app/views/admin/plantillas/plantillas.component.ts", lineNumber: 13 });
})();
export {
  AdminPlantillasComponent
};
//# sourceMappingURL=chunk-IJGDB3KZ.js.map
