import {
  CertPlantillaService
} from "./chunk-6WKCNI62.js";
import "./chunk-VA2CXNEA.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-FVGVLSI5.js";
import {
  CheckboxControlValueAccessor,
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
  __spreadProps,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2UT764MQ.js";

// src/app/views/admin/plantillas/plantilla-campos.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function AdminPlantillaCamposComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.plantilla.nombre);
  }
}
function AdminPlantillaCamposComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function AdminPlantillaCamposComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.success);
  }
}
function AdminPlantillaCamposComponent_Conditional_14_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r3 = ctx.$implicit;
    \u0275\u0275property("value", k_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r3.label);
  }
}
function AdminPlantillaCamposComponent_Conditional_14_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 49);
  }
}
function AdminPlantillaCamposComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "div", 15)(5, "div", 16)(6, "label", 17);
    \u0275\u0275text(7, "Campo (clave) ");
    \u0275\u0275elementStart(8, "span", 18);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillaCamposComponent_Conditional_14_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.clave, $event) || (ctx_r0.form.clave = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AdminPlantillaCamposComponent_Conditional_14_Template_select_change_10_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClaveChange());
    });
    \u0275\u0275elementStart(11, "option", 20);
    \u0275\u0275text(12, "-- Seleccionar --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(13, AdminPlantillaCamposComponent_Conditional_14_For_14_Template, 2, 2, "option", 21, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 22)(16, "label", 17);
    \u0275\u0275text(17, "Etiqueta (descripci\xF3n)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillaCamposComponent_Conditional_14_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.etiqueta, $event) || (ctx_r0.form.etiqueta = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 24)(20, "label", 17);
    \u0275\u0275text(21, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillaCamposComponent_Conditional_14_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.tipo, $event) || (ctx_r0.form.tipo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(23, "option", 26);
    \u0275\u0275text(24, "Texto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 27);
    \u0275\u0275text(26, "Imagen (QR)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 24)(28, "label", 17);
    \u0275\u0275text(29, "Posici\xF3n X (%) ");
    \u0275\u0275elementStart(30, "span", 18);
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillaCamposComponent_Conditional_14_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.pos_x_pct, $event) || (ctx_r0.form.pos_x_pct = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "small", 5);
    \u0275\u0275text(34, "0 = izquierda, 100 = derecha");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 24)(36, "label", 17);
    \u0275\u0275text(37, "Posici\xF3n Y (%) ");
    \u0275\u0275elementStart(38, "span", 18);
    \u0275\u0275text(39, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillaCamposComponent_Conditional_14_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.pos_y_pct, $event) || (ctx_r0.form.pos_y_pct = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "small", 5);
    \u0275\u0275text(42, "0 = arriba, 100 = abajo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 24)(44, "label", 17);
    \u0275\u0275text(45, "Ancho (%) \u2014 QR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillaCamposComponent_Conditional_14_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.ancho_pct, $event) || (ctx_r0.form.ancho_pct = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 24)(48, "label", 17);
    \u0275\u0275text(49, "Tama\xF1o fuente (pt)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillaCamposComponent_Conditional_14_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.tamano_pt, $event) || (ctx_r0.form.tamano_pt = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 24)(52, "label", 17);
    \u0275\u0275text(53, "Color texto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 31)(55, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillaCamposComponent_Conditional_14_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.color, $event) || (ctx_r0.form.color = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillaCamposComponent_Conditional_14_Template_input_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.color, $event) || (ctx_r0.form.color = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 24)(58, "label", 17);
    \u0275\u0275text(59, "Alineaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillaCamposComponent_Conditional_14_Template_select_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.alineacion, $event) || (ctx_r0.form.alineacion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(61, "option", 34);
    \u0275\u0275text(62, "Izquierda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "option", 35);
    \u0275\u0275text(64, "Centro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "option", 36);
    \u0275\u0275text(66, "Derecha");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 24)(68, "label", 17);
    \u0275\u0275text(69, "May\xFAsculas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillaCamposComponent_Conditional_14_Template_select_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.mayusculas, $event) || (ctx_r0.form.mayusculas = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(71, "option", 37);
    \u0275\u0275text(72, "Sin cambio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "option", 38);
    \u0275\u0275text(74, "MAY\xDASCULAS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "option", 39);
    \u0275\u0275text(76, "min\xFAsculas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 24)(78, "label", 17);
    \u0275\u0275text(79, "Orden");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillaCamposComponent_Conditional_14_Template_input_ngModelChange_80_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.orden, $event) || (ctx_r0.form.orden = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 41)(82, "label", 17);
    \u0275\u0275text(83, "Valor fijo (dejar vac\xEDo para usar dato del estudiante)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillaCamposComponent_Conditional_14_Template_input_ngModelChange_84_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.valor_fijo, $event) || (ctx_r0.form.valor_fijo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 43)(86, "div", 44)(87, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPlantillaCamposComponent_Conditional_14_Template_input_ngModelChange_87_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.activo, $event) || (ctx_r0.form.activo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "label", 46);
    \u0275\u0275text(89, "Activo");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(90, "div", 47)(91, "button", 48);
    \u0275\u0275listener("click", function AdminPlantillaCamposComponent_Conditional_14_Template_button_click_91_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.guardar());
    });
    \u0275\u0275template(92, AdminPlantillaCamposComponent_Conditional_14_Conditional_92_Template, 1, 0, "span", 49);
    \u0275\u0275text(93, " Guardar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "button", 50);
    \u0275\u0275listener("click", function AdminPlantillaCamposComponent_Conditional_14_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelar());
    });
    \u0275\u0275text(95, "Cancelar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.editando ? "Editar campo" : "Nuevo campo");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.clave);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.clavesSugeridas);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.etiqueta);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.tipo);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.pos_x_pct);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.pos_y_pct);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.ancho_pct);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.tamano_pt);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.color);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.color);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.alineacion);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.mayusculas);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.orden);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.valor_fijo);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.activo);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.guardando || !ctx_r0.form.clave);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.guardando ? 92 : -1);
  }
}
function AdminPlantillaCamposComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "span", 51);
    \u0275\u0275elementEnd();
  }
}
function AdminPlantillaCamposComponent_Conditional_16_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "code");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 55);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 56);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275element(16, "span", 57);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span", 58);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "div", 59)(23, "button", 60);
    \u0275\u0275listener("click", function AdminPlantillaCamposComponent_Conditional_16_For_25_Template_button_click_23_listener() {
      const c_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editarCampo(c_r5));
    });
    \u0275\u0275element(24, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 62);
    \u0275\u0275listener("click", function AdminPlantillaCamposComponent_Conditional_16_For_25_Template_button_click_25_listener() {
      const c_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.eliminar(c_r5));
    });
    \u0275\u0275element(26, "i", 63);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.orden);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r5.clave);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.etiqueta);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r5.tipo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r5.pos_x_pct, "% / ", c_r5.pos_y_pct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.tamano_pt);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", c_r5.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r5.color, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", c_r5.activo)("bg-secondary", !c_r5.activo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r5.activo ? "S\xED" : "No", " ");
  }
}
function AdminPlantillaCamposComponent_Conditional_16_ForEmpty_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 64);
    \u0275\u0275text(2, "No hay campos configurados. Agregue al menos uno.");
    \u0275\u0275elementEnd()();
  }
}
function AdminPlantillaCamposComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 52)(2, "table", 53)(3, "thead", 54)(4, "tr")(5, "th");
    \u0275\u0275text(6, "Orden");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Clave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Etiqueta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Posici\xF3n X/Y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Fuente (pt)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Color");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Activo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275repeaterCreate(24, AdminPlantillaCamposComponent_Conditional_16_For_25_Template, 27, 15, "tr", null, _forTrack1, false, AdminPlantillaCamposComponent_Conditional_16_ForEmpty_26_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(24);
    \u0275\u0275repeater(ctx_r0.campos);
  }
}
var AdminPlantillaCamposComponent = class _AdminPlantillaCamposComponent {
  route;
  service;
  plantillaId;
  plantilla = null;
  campos = [];
  loading = false;
  error = "";
  success = "";
  showForm = false;
  editando = null;
  campoVacio = {
    clave: "",
    etiqueta: "",
    tipo: "texto",
    pos_x_pct: 50,
    pos_y_pct: 50,
    ancho_pct: null,
    tamano_pt: 48,
    color: "#000000",
    alineacion: "center",
    negrita: false,
    cursiva: false,
    mayusculas: "upper",
    valor_fijo: "",
    activo: true,
    orden: 0
  };
  form = __spreadValues({}, this.campoVacio);
  guardando = false;
  clavesSugeridas = [
    { value: "nombre_completo", label: "Nombre completo del estudiante" },
    { value: "programa", label: "Nombre del programa/curso" },
    { value: "condicion", label: "Condici\xF3n (APROBADO / PARTICIP\xD3)" },
    { value: "nota", label: "Nota final" },
    { value: "fecha_inicio", label: "Fecha de inicio" },
    { value: "fecha_fin", label: "Fecha de fin" },
    { value: "codigo", label: "C\xF3digo de verificaci\xF3n" },
    { value: "ci", label: "Carnet de identidad" },
    { value: "qr", label: "C\xF3digo QR (imagen)" }
  ];
  constructor(route, service) {
    this.route = route;
    this.service = service;
  }
  ngOnInit() {
    this.plantillaId = Number(this.route.snapshot.paramMap.get("id"));
    this.cargar();
  }
  cargar() {
    this.loading = true;
    this.service.show(this.plantillaId).subscribe({
      next: (res) => {
        this.plantilla = res;
        this.campos = res.campos || [];
        this.loading = false;
      },
      error: () => {
        this.error = "Error al cargar plantilla.";
        this.loading = false;
      }
    });
  }
  nuevoCampo() {
    this.editando = null;
    this.form = __spreadProps(__spreadValues({}, this.campoVacio), { plantilla_id: this.plantillaId });
    this.showForm = true;
    this.error = "";
    this.success = "";
  }
  editarCampo(c) {
    this.editando = c;
    this.form = __spreadValues({}, c);
    this.showForm = true;
    this.error = "";
    this.success = "";
  }
  onClaveChange() {
    if (this.form.clave === "qr") {
      this.form.tipo = "imagen";
    }
  }
  cancelar() {
    this.showForm = false;
    this.editando = null;
  }
  guardar() {
    this.guardando = true;
    this.error = "";
    const payload = __spreadProps(__spreadValues({}, this.form), { plantilla_id: this.plantillaId });
    const obs = this.editando ? this.service.updateCampo(this.editando.id, payload) : this.service.storeCampo(payload);
    obs.subscribe({
      next: () => {
        this.guardando = false;
        this.success = "Campo guardado correctamente.";
        this.showForm = false;
        this.cargar();
      },
      error: (err) => {
        this.guardando = false;
        this.error = err?.error?.message || JSON.stringify(err?.error?.errors) || "Error al guardar.";
      }
    });
  }
  eliminar(c) {
    if (!confirm(`\xBFEliminar campo "${c.etiqueta}"?`))
      return;
    this.service.destroyCampo(c.id).subscribe({
      next: () => this.cargar(),
      error: () => alert("No se pudo eliminar el campo.")
    });
  }
  static \u0275fac = function AdminPlantillaCamposComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminPlantillaCamposComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CertPlantillaService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminPlantillaCamposComponent, selectors: [["app-admin-plantilla-campos"]], decls: 17, vars: 5, consts: [[1, "p-4"], [1, "d-flex", "align-items-center", "mb-4", "gap-3"], ["routerLink", "/admin/plantillas", 1, "btn", "btn-sm", "btn-outline-secondary"], [1, "fa-solid", "fa-arrow-left", "me-1"], [1, "fw-bold", "mb-0"], [1, "text-muted"], [1, "btn", "btn-danger", "btn-sm", "ms-auto", 3, "click"], [1, "fa-solid", "fa-plus", "me-1"], [1, "alert", "alert-danger", "py-2"], [1, "alert", "alert-success", "py-2"], [1, "card", "mb-4", "border-0", "shadow-sm"], [1, "text-center", "py-5"], [1, "card", "border-0", "shadow-sm"], [1, "card-header", "fw-semibold"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-5"], [1, "form-label", "fw-semibold"], [1, "text-danger"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value"], [1, "col-md-4"], ["type", "text", "placeholder", "Ej: Nombre del estudiante", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-3"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "texto"], ["value", "imagen"], ["type", "number", "min", "0", "max", "100", "step", "0.5", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "max", "50", "step", "0.5", "placeholder", "Solo para QR", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "10", "max", "300", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "gap-2", "align-items-center"], ["type", "color", 1, "form-control", "form-control-color", 3, "ngModelChange", "ngModel"], ["type", "text", 1, "form-control", 2, "width", "90px", 3, "ngModelChange", "ngModel"], ["value", "left"], ["value", "center"], ["value", "right"], ["value", "none"], ["value", "upper"], ["value", "lower"], ["type", "number", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-12"], ["type", "text", "placeholder", "Ej: UNIVERSIDAD SAN FRANCISCO DE AS\xCDS", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-3", "d-flex", "align-items-center"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "activo_check", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "activo_check", 1, "form-check-label", "fw-semibold"], [1, "d-flex", "gap-2", "mt-3"], [1, "btn", "btn-danger", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "spinner-border", "text-danger"], [1, "card-body", "p-0"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], [1, "badge", "bg-secondary"], [1, "small", "text-muted"], [1, "d-inline-block", "rounded", "border", 2, "width", "20px", "height", "20px", "vertical-align", "middle"], [1, "badge"], [1, "d-flex", "gap-1"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "fa-solid", "fa-pen"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fa-solid", "fa-trash"], ["colspan", "9", 1, "text-center", "text-muted", "py-4"]], template: function AdminPlantillaCamposComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275text(4, " Volver ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div")(6, "h4", 4);
      \u0275\u0275text(7, "Campos de plantilla");
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, AdminPlantillaCamposComponent_Conditional_8_Template, 2, 1, "small", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 6);
      \u0275\u0275listener("click", function AdminPlantillaCamposComponent_Template_button_click_9_listener() {
        return ctx.nuevoCampo();
      });
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275text(11, " Agregar campo ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, AdminPlantillaCamposComponent_Conditional_12_Template, 2, 1, "div", 8)(13, AdminPlantillaCamposComponent_Conditional_13_Template, 2, 1, "div", 9)(14, AdminPlantillaCamposComponent_Conditional_14_Template, 96, 17, "div", 10)(15, AdminPlantillaCamposComponent_Conditional_15_Template, 2, 0, "div", 11)(16, AdminPlantillaCamposComponent_Conditional_16_Template, 27, 1, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.plantilla ? 8 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.error ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.success ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showForm ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 15 : 16);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminPlantillaCamposComponent, [{
    type: Component,
    args: [{ selector: "app-admin-plantilla-campos", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="p-4">
    <div class="d-flex align-items-center mb-4 gap-3">
        <a routerLink="/admin/plantillas" class="btn btn-sm btn-outline-secondary">
            <i class="fa-solid fa-arrow-left me-1"></i> Volver
        </a>
        <div>
            <h4 class="fw-bold mb-0">Campos de plantilla</h4>
            @if (plantilla) { <small class="text-muted">{{ plantilla.nombre }}</small> }
        </div>
        <button class="btn btn-danger btn-sm ms-auto" (click)="nuevoCampo()">
            <i class="fa-solid fa-plus me-1"></i> Agregar campo
        </button>
    </div>

    @if (error) { <div class="alert alert-danger py-2">{{ error }}</div> }
    @if (success) { <div class="alert alert-success py-2">{{ success }}</div> }

    <!-- FORM -->
    @if (showForm) {
    <div class="card mb-4 border-0 shadow-sm">
        <div class="card-header fw-semibold">{{ editando ? 'Editar campo' : 'Nuevo campo' }}</div>
        <div class="card-body">
            <div class="row g-3">
                <div class="col-md-5">
                    <label class="form-label fw-semibold">Campo (clave) <span class="text-danger">*</span></label>
                    <select class="form-select" [(ngModel)]="form.clave" (change)="onClaveChange()">
                        <option value="">-- Seleccionar --</option>
                        @for (k of clavesSugeridas; track k.value) {
                            <option [value]="k.value">{{ k.label }}</option>
                        }
                    </select>
                </div>
                <div class="col-md-4">
                    <label class="form-label fw-semibold">Etiqueta (descripci\xF3n)</label>
                    <input type="text" class="form-control" [(ngModel)]="form.etiqueta" placeholder="Ej: Nombre del estudiante">
                </div>
                <div class="col-md-3">
                    <label class="form-label fw-semibold">Tipo</label>
                    <select class="form-select" [(ngModel)]="form.tipo">
                        <option value="texto">Texto</option>
                        <option value="imagen">Imagen (QR)</option>
                    </select>
                </div>

                <div class="col-md-3">
                    <label class="form-label fw-semibold">Posici\xF3n X (%) <span class="text-danger">*</span></label>
                    <input type="number" class="form-control" [(ngModel)]="form.pos_x_pct" min="0" max="100" step="0.5">
                    <small class="text-muted">0 = izquierda, 100 = derecha</small>
                </div>
                <div class="col-md-3">
                    <label class="form-label fw-semibold">Posici\xF3n Y (%) <span class="text-danger">*</span></label>
                    <input type="number" class="form-control" [(ngModel)]="form.pos_y_pct" min="0" max="100" step="0.5">
                    <small class="text-muted">0 = arriba, 100 = abajo</small>
                </div>
                <div class="col-md-3">
                    <label class="form-label fw-semibold">Ancho (%) \u2014 QR</label>
                    <input type="number" class="form-control" [(ngModel)]="form.ancho_pct" min="1" max="50" step="0.5" placeholder="Solo para QR">
                </div>
                <div class="col-md-3">
                    <label class="form-label fw-semibold">Tama\xF1o fuente (pt)</label>
                    <input type="number" class="form-control" [(ngModel)]="form.tamano_pt" min="10" max="300">
                </div>

                <div class="col-md-3">
                    <label class="form-label fw-semibold">Color texto</label>
                    <div class="d-flex gap-2 align-items-center">
                        <input type="color" class="form-control form-control-color" [(ngModel)]="form.color">
                        <input type="text" class="form-control" [(ngModel)]="form.color" style="width:90px;">
                    </div>
                </div>
                <div class="col-md-3">
                    <label class="form-label fw-semibold">Alineaci\xF3n</label>
                    <select class="form-select" [(ngModel)]="form.alineacion">
                        <option value="left">Izquierda</option>
                        <option value="center">Centro</option>
                        <option value="right">Derecha</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label class="form-label fw-semibold">May\xFAsculas</label>
                    <select class="form-select" [(ngModel)]="form.mayusculas">
                        <option value="none">Sin cambio</option>
                        <option value="upper">MAY\xDASCULAS</option>
                        <option value="lower">min\xFAsculas</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label class="form-label fw-semibold">Orden</label>
                    <input type="number" class="form-control" [(ngModel)]="form.orden">
                </div>

                <div class="col-12">
                    <label class="form-label fw-semibold">Valor fijo (dejar vac\xEDo para usar dato del estudiante)</label>
                    <input type="text" class="form-control" [(ngModel)]="form.valor_fijo" placeholder="Ej: UNIVERSIDAD SAN FRANCISCO DE AS\xCDS">
                </div>
                <div class="col-md-3 d-flex align-items-center">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" [(ngModel)]="form.activo" id="activo_check">
                        <label class="form-check-label fw-semibold" for="activo_check">Activo</label>
                    </div>
                </div>
            </div>
            <div class="d-flex gap-2 mt-3">
                <button class="btn btn-danger" (click)="guardar()" [disabled]="guardando || !form.clave">
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
                        <th>Orden</th>
                        <th>Clave</th>
                        <th>Etiqueta</th>
                        <th>Tipo</th>
                        <th>Posici\xF3n X/Y</th>
                        <th>Fuente (pt)</th>
                        <th>Color</th>
                        <th>Activo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    @for (c of campos; track c.id) {
                    <tr>
                        <td>{{ c.orden }}</td>
                        <td><code>{{ c.clave }}</code></td>
                        <td>{{ c.etiqueta }}</td>
                        <td><span class="badge bg-secondary">{{ c.tipo }}</span></td>
                        <td class="small text-muted">{{ c.pos_x_pct }}% / {{ c.pos_y_pct }}%</td>
                        <td>{{ c.tamano_pt }}</td>
                        <td>
                            <span class="d-inline-block rounded border" style="width:20px;height:20px;vertical-align:middle;" [style.background]="c.color"></span>
                            {{ c.color }}
                        </td>
                        <td>
                            <span class="badge" [class.bg-success]="c.activo" [class.bg-secondary]="!c.activo">
                                {{ c.activo ? 'S\xED' : 'No' }}
                            </span>
                        </td>
                        <td>
                            <div class="d-flex gap-1">
                                <button class="btn btn-sm btn-outline-primary" (click)="editarCampo(c)">
                                    <i class="fa-solid fa-pen"></i>
                                </button>
                                <button class="btn btn-sm btn-outline-danger" (click)="eliminar(c)">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                    } @empty {
                    <tr><td colspan="9" class="text-center text-muted py-4">No hay campos configurados. Agregue al menos uno.</td></tr>
                    }
                </tbody>
            </table>
        </div>
    </div>
    }
</div>
` }]
  }], () => [{ type: ActivatedRoute }, { type: CertPlantillaService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminPlantillaCamposComponent, { className: "AdminPlantillaCamposComponent", filePath: "src/app/views/admin/plantillas/plantilla-campos.component.ts", lineNumber: 13 });
})();
export {
  AdminPlantillaCamposComponent
};
//# sourceMappingURL=chunk-TYTQYQXO.js.map
