import {
  BreadcrumbComponent
} from "./chunk-3LW2JTQP.js";
import {
  NgbActiveModal,
  NgbModal
} from "./chunk-6V3XHZEX.js";
import {
  ActivatedRoute,
  DomSanitizer,
  RouterLink
} from "./chunk-FVGVLSI5.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-RAPM3SJS.js";
import {
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  HttpParams,
  Injectable,
  Input,
  NgTemplateOutlet,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2UT764MQ.js";

// src/app/core/services/curso.service.ts
var API_BASE = "http://localhost:8000/api/v1";
var CursoService = class _CursoService {
  http;
  base = `${API_BASE}/public/cursos`;
  constructor(http) {
    this.http = http;
  }
  getAll(params) {
    let httpParams = new HttpParams();
    if (params?.pageIndex)
      httpParams = httpParams.set("pageIndex", params.pageIndex);
    if (params?.pageSize)
      httpParams = httpParams.set("pageSize", params.pageSize);
    if (params?.query)
      httpParams = httpParams.set("query", params.query);
    return this.http.get(this.base, { params: httpParams });
  }
  getById(id) {
    return this.http.get(`${this.base}/${id}`);
  }
  static \u0275fac = function CursoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CursoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CursoService, factory: _CursoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CursoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/views/cursos/cursos-list/cursos-list.component.ts
var _c0 = (a0) => ["/cursos", a0];
var _forTrack0 = ($index, $item) => $item.id_programa;
function CursosListComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 13)(2, "div", 14)(3, "span", 15);
    \u0275\u0275text(4, "Cargando...");
    \u0275\u0275elementEnd()()()();
  }
}
function CursosListComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 16)(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function CursosListComponent_Conditional_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 13)(2, "p", 19);
    \u0275\u0275text(3, "No se encontraron programas.");
    \u0275\u0275elementEnd()()();
  }
}
function CursosListComponent_Conditional_19_Conditional_1_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 30);
    \u0275\u0275element(2, "i", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const curso_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, curso_r2.inicio_actividades, "dd/MM/yyyy"), "");
  }
}
function CursosListComponent_Conditional_19_Conditional_1_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 30);
    \u0275\u0275element(2, "i", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const curso_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", curso_r2.categoria_nombre, "");
  }
}
function CursosListComponent_Conditional_19_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22);
    \u0275\u0275element(3, "img", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24)(5, "a", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 26)(8, "ul");
    \u0275\u0275template(9, CursosListComponent_Conditional_19_Conditional_1_For_2_Conditional_9_Template, 5, 4, "li")(10, CursosListComponent_Conditional_19_Conditional_1_For_2_Conditional_10_Template, 4, 1, "li");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 27);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 28);
    \u0275\u0275text(14, "Ver detalle ");
    \u0275\u0275element(15, "i", 29);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const curso_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.getImagen(curso_r2), \u0275\u0275sanitizeUrl)("alt", curso_r2.imagen_alt || curso_r2.nombre_programa);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, curso_r2.id_programa));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(curso_r2.nombre_programa);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(curso_r2.inicio_actividades ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(curso_r2.categoria_nombre ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(curso_r2.descripcion);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, curso_r2.id_programa));
  }
}
function CursosListComponent_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, CursosListComponent_Conditional_19_Conditional_1_For_2_Template, 16, 12, "div", 20, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.cursos);
  }
}
function CursosListComponent_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 33)(2, "button", 34);
    \u0275\u0275listener("click", function CursosListComponent_Conditional_19_Conditional_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.prevPage());
    });
    \u0275\u0275element(3, "i", 35);
    \u0275\u0275text(4, " Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 34);
    \u0275\u0275listener("click", function CursosListComponent_Conditional_19_Conditional_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.nextPage());
    });
    \u0275\u0275text(8, " Siguiente ");
    \u0275\u0275element(9, "i", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.pageIndex <= 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r0.pageIndex, " de ", ctx_r0.totalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.pageIndex >= ctx_r0.totalPages);
  }
}
function CursosListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CursosListComponent_Conditional_19_Conditional_0_Template, 4, 0, "div", 3)(1, CursosListComponent_Conditional_19_Conditional_1_Template, 3, 0, "div", 3)(2, CursosListComponent_Conditional_19_Conditional_2_Template, 10, 4, "div", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.cursos.length === 0 ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.totalPages > 1 ? 2 : -1);
  }
}
var STORAGE_BASE = "http://localhost:8000";
var CursosListComponent = class _CursosListComponent {
  cursoService;
  cursos = [];
  total = 0;
  pageIndex = 1;
  pageSize = 9;
  query = "";
  loading = false;
  error = "";
  constructor(cursoService) {
    this.cursoService = cursoService;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.error = "";
    this.cursoService.getAll({ pageIndex: this.pageIndex, pageSize: this.pageSize, query: this.query }).subscribe({
      next: (res) => {
        this.cursos = res.data;
        this.total = res.total;
        this.loading = false;
      },
      error: () => {
        this.error = "No se pudieron cargar los programas. Intente nuevamente.";
        this.loading = false;
      }
    });
  }
  buscar() {
    this.pageIndex = 1;
    this.load();
  }
  getImagen(curso) {
    const foto = curso.foto;
    if (foto)
      return foto.startsWith("/") ? `${STORAGE_BASE}${foto}` : foto;
    return "assets/img/all-images/service-img1.png";
  }
  get totalPages() {
    return Math.ceil(this.total / this.pageSize);
  }
  prevPage() {
    if (this.pageIndex > 1) {
      this.pageIndex--;
      this.load();
    }
  }
  nextPage() {
    if (this.pageIndex < this.totalPages) {
      this.pageIndex++;
      this.load();
    }
  }
  static \u0275fac = function CursosListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CursosListComponent)(\u0275\u0275directiveInject(CursoService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CursosListComponent, selectors: [["app-cursos-list"]], decls: 20, vars: 4, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-4", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["title", "Programas"], [1, "blog1-section-area", "sp2"], [1, "row", "mb-4"], [1, "col-lg-6", "col-md-8", "m-auto"], [1, "d-flex", "gap-2", 3, "ngSubmit"], ["type", "text", "placeholder", "Buscar programa...", "name", "query", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary"], [1, "col-12", "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "col-12"], [1, "alert", "alert-danger"], [1, "row", "mt-4"], [1, "text-muted"], [1, "col-lg-4", "col-md-6"], [1, "blog-auhtor-boxarea"], [1, "img1"], [3, "src", "alt"], [1, "blog-position"], [1, "heading", 3, "routerLink"], [1, "blog-content-area"], [1, "curso-desc-clamp"], [1, "learnmore", 3, "routerLink"], [1, "fa-solid", "fa-arrow-right"], ["href", "javascript:void(0)"], [1, "fa-solid", "fa-calendar-days"], [1, "fa-solid", "fa-tag"], [1, "col-12", "d-flex", "justify-content-center", "align-items-center", "gap-3"], [1, "btn", "btn-outline-primary", 3, "click", "disabled"], [1, "fa-solid", "fa-chevron-left"], [1, "fa-solid", "fa-chevron-right"]], template: function CursosListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Nuestros Programas");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 8)(12, "div", 9)(13, "form", 10);
      \u0275\u0275listener("ngSubmit", function CursosListComponent_Template_form_ngSubmit_13_listener() {
        return ctx.buscar();
      });
      \u0275\u0275elementStart(14, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function CursosListComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.query, $event) || (ctx.query = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 12);
      \u0275\u0275text(16, "Buscar");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(17, CursosListComponent_Conditional_17_Template, 5, 0, "div", 3)(18, CursosListComponent_Conditional_18_Template, 4, 1, "div", 3)(19, CursosListComponent_Conditional_19_Template, 3, 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.query);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && !ctx.error ? 19 : -1);
    }
  }, dependencies: [CommonModule, DatePipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink, BreadcrumbComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CursosListComponent, [{
    type: Component,
    args: [{ selector: "app-cursos-list", imports: [CommonModule, FormsModule, RouterLink, BreadcrumbComponent], template: `<div class="hero1-section-area about-bg-area">
    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 m-auto">
                <div class="hero-heading-area heading1 text-center">
                    <h1>Nuestros Programas</h1>
                    <app-breadcrumb title="Programas" />
                </div>
            </div>
        </div>
    </div>
</div>

<div class="blog1-section-area sp2">
    <div class="container">
        <div class="row mb-4">
            <div class="col-lg-6 col-md-8 m-auto">
                <form (ngSubmit)="buscar()" class="d-flex gap-2">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Buscar programa..."
                        [(ngModel)]="query"
                        name="query"
                    >
                    <button type="submit" class="btn btn-primary">Buscar</button>
                </form>
            </div>
        </div>

        @if (loading) {
            <div class="row">
                <div class="col-12 text-center py-5">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        }

        @if (error) {
            <div class="row">
                <div class="col-12">
                    <div class="alert alert-danger">{{ error }}</div>
                </div>
            </div>
        }

        @if (!loading && !error) {
            @if (cursos.length === 0) {
                <div class="row">
                    <div class="col-12 text-center py-5">
                        <p class="text-muted">No se encontraron programas.</p>
                    </div>
                </div>
            } @else {
                <div class="row">
                    @for (curso of cursos; track curso.id_programa) {
                        <div class="col-lg-4 col-md-6">
                            <div class="blog-auhtor-boxarea">
                                <div class="img1">
                                    <img [src]="getImagen(curso)" [alt]="curso.imagen_alt || curso.nombre_programa">
                                </div>
                                <div class="blog-position">
                                    <a [routerLink]="['/cursos', curso.id_programa]" class="heading">{{ curso.nombre_programa }}</a>
                                    <div class="blog-content-area">
                                        <ul>
                                            @if (curso.inicio_actividades) {
                                                <li><a href="javascript:void(0)"><i class="fa-solid fa-calendar-days"></i> {{ curso.inicio_actividades | date:'dd/MM/yyyy' }}</a></li>
                                            }
                                            @if (curso.categoria_nombre) {
                                                <li><a href="javascript:void(0)"><i class="fa-solid fa-tag"></i> {{ curso.categoria_nombre }}</a></li>
                                            }
                                        </ul>
                                        <p class="curso-desc-clamp">{{ curso.descripcion }}</p>
                                        <a [routerLink]="['/cursos', curso.id_programa]" class="learnmore">Ver detalle <i class="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            }

            @if (totalPages > 1) {
                <div class="row mt-4">
                    <div class="col-12 d-flex justify-content-center align-items-center gap-3">
                        <button class="btn btn-outline-primary" (click)="prevPage()" [disabled]="pageIndex <= 1">
                            <i class="fa-solid fa-chevron-left"></i> Anterior
                        </button>
                        <span>P\xE1gina {{ pageIndex }} de {{ totalPages }}</span>
                        <button class="btn btn-outline-primary" (click)="nextPage()" [disabled]="pageIndex >= totalPages">
                            Siguiente <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            }
        }

    </div>
</div>
` }]
  }], () => [{ type: CursoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CursosListComponent, { className: "CursosListComponent", filePath: "src/app/views/cursos/cursos-list/cursos-list.component.ts", lineNumber: 17 });
})();

// src/app/core/services/preinscripcion.service.ts
var API_BASE2 = "http://localhost:8000/api/v1";
var PreinscripcionService = class _PreinscripcionService {
  http;
  constructor(http) {
    this.http = http;
  }
  store(data) {
    return this.http.post(`${API_BASE2}/public/preinscripciones`, data);
  }
  uploadFile(file) {
    const fd = new FormData();
    fd.append("file", file);
    return this.http.post(`${API_BASE2}/public/upload/file`, fd);
  }
  static \u0275fac = function PreinscripcionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreinscripcionService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PreinscripcionService, factory: _PreinscripcionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreinscripcionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/preinscripcion-modal/preinscripcion-modal.component.ts
var _c02 = (a0) => ({ campo: a0 });
var _c1 = () => ["text", "email", "number", "date"];
var _c2 = () => [];
var _forTrack02 = ($index, $item) => $item.id;
function _forTrack1($index, $item) {
  let tmp_0_0;
  return (tmp_0_0 = $item["id"]) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : $item;
}
function PreinscripcionModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275elementStart(2, "h5", 11);
    \u0275\u0275text(3, "\xA1Pre-inscripci\xF3n enviada!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 12);
    \u0275\u0275text(5, " \u{1F393} Gracias por confiar en la ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "Universidad San Francisco de As\xEDs (USFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " y ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10, "CENEFCO");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, ". Valoramos su preferencia y la confianza depositada en nuestros programas. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 9);
    \u0275\u0275text(13, "\u{1F4F2} Ante cualquier duda o consulta, estaremos encantados de atenderle.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 13);
    \u0275\u0275listener("click", function PreinscripcionModalComponent_Conditional_5_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeModal.close());
    });
    \u0275\u0275text(15, "Cerrar");
    \u0275\u0275elementEnd()();
  }
}
function PreinscripcionModalComponent_Conditional_6_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error);
  }
}
function PreinscripcionModalComponent_Conditional_6_Conditional_15_Conditional_0_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 31);
  }
}
function PreinscripcionModalComponent_Conditional_6_Conditional_15_Conditional_0_For_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 32);
  }
}
function PreinscripcionModalComponent_Conditional_6_Conditional_15_Conditional_0_For_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "(opcional)");
    \u0275\u0275elementEnd();
  }
}
function PreinscripcionModalComponent_Conditional_6_Conditional_15_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275template(1, PreinscripcionModalComponent_Conditional_6_Conditional_15_Conditional_0_For_6_Conditional_1_Template, 1, 0, "i", 31)(2, PreinscripcionModalComponent_Conditional_6_Conditional_15_Conditional_0_For_6_Conditional_2_Template, 1, 0, "i", 32);
    \u0275\u0275text(3);
    \u0275\u0275template(4, PreinscripcionModalComponent_Conditional_6_Conditional_15_Conditional_0_For_6_Conditional_4_Template, 2, 0, "span", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const campo_r5 = ctx.$implicit;
    \u0275\u0275classProp("text-muted", !campo_r5.requerido);
    \u0275\u0275advance();
    \u0275\u0275conditional(campo_r5.requerido ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", campo_r5.etiqueta, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!campo_r5.requerido ? 4 : -1);
  }
}
function PreinscripcionModalComponent_Conditional_6_Conditional_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "p", 27);
    \u0275\u0275element(2, "i", 28);
    \u0275\u0275text(3, " Ten a mano los siguientes documentos para el paso 2: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 29);
    \u0275\u0275repeaterCreate(5, PreinscripcionModalComponent_Conditional_6_Conditional_15_Conditional_0_For_6_Template, 5, 5, "li", 30, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.camposPaso2);
  }
}
function PreinscripcionModalComponent_Conditional_6_Conditional_15_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275elementContainer(1, 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const campo_r6 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const campoDinamico_r7 = \u0275\u0275reference(11);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", campoDinamico_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c02, campo_r6));
  }
}
function PreinscripcionModalComponent_Conditional_6_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, PreinscripcionModalComponent_Conditional_6_Conditional_15_Conditional_0_Template, 7, 0, "div", 21);
    \u0275\u0275elementStart(1, "form", null, 1)(3, "div", 22);
    \u0275\u0275repeaterCreate(4, PreinscripcionModalComponent_Conditional_6_Conditional_15_For_5_Template, 2, 4, "div", 23, _forTrack02);
    \u0275\u0275elementStart(6, "div", 24)(7, "button", 25);
    \u0275\u0275listener("click", function PreinscripcionModalComponent_Conditional_6_Conditional_15_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.siguientePaso());
    });
    \u0275\u0275text(8, " Siguiente ");
    \u0275\u0275element(9, "i", 26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.camposPaso2.length > 0 ? 0 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.camposPaso1);
  }
}
function PreinscripcionModalComponent_Conditional_6_Conditional_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "p", 38);
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275text(3, " No se requieren documentos adicionales para este programa. ");
    \u0275\u0275elementEnd()();
  }
}
function PreinscripcionModalComponent_Conditional_6_Conditional_16_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275elementContainer(1, 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const campo_r9 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const campoDinamico_r7 = \u0275\u0275reference(11);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", campoDinamico_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c02, campo_r9));
  }
}
function PreinscripcionModalComponent_Conditional_6_Conditional_16_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
    \u0275\u0275text(1, " Enviando... ");
  }
}
function PreinscripcionModalComponent_Conditional_6_Conditional_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enviar Pre-inscripci\xF3n ");
    \u0275\u0275element(1, "i", 26);
  }
}
function PreinscripcionModalComponent_Conditional_6_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", null, 2)(2, "div", 22);
    \u0275\u0275template(3, PreinscripcionModalComponent_Conditional_6_Conditional_16_Conditional_3_Template, 4, 0, "div", 23);
    \u0275\u0275repeaterCreate(4, PreinscripcionModalComponent_Conditional_6_Conditional_16_For_5_Template, 2, 4, "div", 23, _forTrack02);
    \u0275\u0275elementStart(6, "div", 34)(7, "button", 35);
    \u0275\u0275listener("click", function PreinscripcionModalComponent_Conditional_6_Conditional_16_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.anteriorPaso());
    });
    \u0275\u0275element(8, "i", 36);
    \u0275\u0275text(9, " Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 37);
    \u0275\u0275listener("click", function PreinscripcionModalComponent_Conditional_6_Conditional_16_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.enviar());
    });
    \u0275\u0275template(11, PreinscripcionModalComponent_Conditional_6_Conditional_16_Conditional_11_Template, 2, 0)(12, PreinscripcionModalComponent_Conditional_6_Conditional_16_Conditional_12_Template, 2, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.camposPaso2.length === 0 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.camposPaso2);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.enviando);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.enviando ? 11 : 12);
  }
}
function PreinscripcionModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4, "Datos personales");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 17);
    \u0275\u0275elementStart(6, "span", 15);
    \u0275\u0275text(7, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 18);
    \u0275\u0275text(9, "Documentos y datos adicionales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 19);
    \u0275\u0275text(11, "Programa: ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, PreinscripcionModalComponent_Conditional_6_Conditional_14_Template, 2, 1, "div", 20)(15, PreinscripcionModalComponent_Conditional_6_Conditional_15_Template, 10, 1)(16, PreinscripcionModalComponent_Conditional_6_Conditional_16_Template, 13, 3, "form");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.paso === 1 ? "#c0392b" : "#6c757d");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background", ctx_r2.paso === 2 ? "#c0392b" : "#6c757d");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.programaNombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.error ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.paso === 1 ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.paso === 2 ? 16 : -1);
  }
}
function PreinscripcionModalComponent_ng_template_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PreinscripcionModalComponent_ng_template_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const campo_r10 = \u0275\u0275nextContext().campo;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(campo_r10.ayuda);
  }
}
function PreinscripcionModalComponent_ng_template_10_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 9);
    \u0275\u0275element(1, "span", 50);
    \u0275\u0275text(2, "Subiendo... ");
    \u0275\u0275elementEnd();
  }
}
function PreinscripcionModalComponent_ng_template_10_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 49);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275text(2, "Archivo subido correctamente ");
    \u0275\u0275elementEnd();
  }
}
function PreinscripcionModalComponent_ng_template_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 48);
    \u0275\u0275listener("change", function PreinscripcionModalComponent_ng_template_10_Conditional_4_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const campo_r10 = \u0275\u0275nextContext().campo;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.subirArchivo($event, campo_r10));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(1, PreinscripcionModalComponent_ng_template_10_Conditional_4_Conditional_1_Template, 3, 0, "small", 9)(2, PreinscripcionModalComponent_ng_template_10_Conditional_4_Conditional_2_Template, 3, 0, "small", 49);
  }
  if (rf & 2) {
    const campo_r10 = \u0275\u0275nextContext().campo;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("accept", ctx_r2.aceptaArchivo(campo_r10));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.subiendoCampo[campo_r10.nombre_campo] ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.valores[campo_r10.nombre_campo] ? 2 : -1);
  }
}
function PreinscripcionModalComponent_ng_template_10_Conditional_5_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const op_r13 = ctx.$implicit;
    \u0275\u0275property("value", op_r13["id"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(op_r13["nombre"]);
  }
}
function PreinscripcionModalComponent_ng_template_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PreinscripcionModalComponent_ng_template_10_Conditional_5_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const campo_r10 = \u0275\u0275nextContext().campo;
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.valores[campo_r10.nombre_campo], $event) || (ctx_r2.valores[campo_r10.nombre_campo] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 53);
    \u0275\u0275text(2, "Seleccione una opci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PreinscripcionModalComponent_ng_template_10_Conditional_5_For_4_Template, 2, 2, "option", 54, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const campo_r10 = \u0275\u0275nextContext().campo;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("name", campo_r10.nombre_campo);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.valores[campo_r10.nombre_campo]);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(campo_r10.opciones);
  }
}
function PreinscripcionModalComponent_ng_template_10_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const op_r15 = ctx.$implicit;
    \u0275\u0275property("value", op_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(op_r15);
  }
}
function PreinscripcionModalComponent_ng_template_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PreinscripcionModalComponent_ng_template_10_Conditional_6_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const campo_r10 = \u0275\u0275nextContext().campo;
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.valores[campo_r10.nombre_campo], $event) || (ctx_r2.valores[campo_r10.nombre_campo] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 53);
    \u0275\u0275text(2, "Seleccione una opci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PreinscripcionModalComponent_ng_template_10_Conditional_6_For_4_Template, 2, 2, "option", 54, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const campo_r10 = \u0275\u0275nextContext().campo;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("name", campo_r10.nombre_campo);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.valores[campo_r10.nombre_campo]);
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_6_0 = campo_r10.opciones) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : \u0275\u0275pureFunction0(2, _c2));
  }
}
function PreinscripcionModalComponent_ng_template_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 55);
    \u0275\u0275twoWayListener("ngModelChange", function PreinscripcionModalComponent_ng_template_10_Conditional_7_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const campo_r10 = \u0275\u0275nextContext().campo;
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.valores[campo_r10.nombre_campo], $event) || (ctx_r2.valores[campo_r10.nombre_campo] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(1, "        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const campo_r10 = \u0275\u0275nextContext().campo;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("name", campo_r10.nombre_campo)("placeholder", (tmp_5_0 = campo_r10.ayuda) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : "");
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.valores[campo_r10.nombre_campo]);
  }
}
function PreinscripcionModalComponent_ng_template_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function PreinscripcionModalComponent_ng_template_10_Conditional_8_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      const campo_r10 = \u0275\u0275nextContext().campo;
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.valores[campo_r10.nombre_campo], $event) || (ctx_r2.valores[campo_r10.nombre_campo] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 57);
    \u0275\u0275text(3, "S\xED");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const campo_r10 = \u0275\u0275nextContext().campo;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", "campo_" + campo_r10.nombre_campo)("name", campo_r10.nombre_campo);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.valores[campo_r10.nombre_campo]);
    \u0275\u0275advance();
    \u0275\u0275property("for", "campo_" + campo_r10.nombre_campo);
  }
}
function PreinscripcionModalComponent_ng_template_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function PreinscripcionModalComponent_ng_template_10_Conditional_9_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const campo_r10 = \u0275\u0275nextContext().campo;
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.valores[campo_r10.nombre_campo], $event) || (ctx_r2.valores[campo_r10.nombre_campo] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const campo_r10 = \u0275\u0275nextContext().campo;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("type", campo_r10.tipo_campo)("name", campo_r10.nombre_campo)("placeholder", (tmp_6_0 = campo_r10.ayuda) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : campo_r10.etiqueta);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.valores[campo_r10.nombre_campo]);
  }
}
function PreinscripcionModalComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 41);
    \u0275\u0275text(1);
    \u0275\u0275template(2, PreinscripcionModalComponent_ng_template_10_Conditional_2_Template, 2, 0, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PreinscripcionModalComponent_ng_template_10_Conditional_3_Template, 2, 1, "p", 43)(4, PreinscripcionModalComponent_ng_template_10_Conditional_4_Template, 3, 3)(5, PreinscripcionModalComponent_ng_template_10_Conditional_5_Template, 5, 2, "select", 44)(6, PreinscripcionModalComponent_ng_template_10_Conditional_6_Template, 5, 3, "select", 44)(7, PreinscripcionModalComponent_ng_template_10_Conditional_7_Template, 2, 3, "textarea", 45)(8, PreinscripcionModalComponent_ng_template_10_Conditional_8_Template, 4, 4, "div", 46)(9, PreinscripcionModalComponent_ng_template_10_Conditional_9_Template, 1, 4, "input", 47);
  }
  if (rf & 2) {
    const campo_r10 = ctx.campo;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", campo_r10.etiqueta, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(campo_r10.requerido ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(campo_r10.ayuda ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.campoEsArchivo(campo_r10) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(campo_r10.tipo_campo === "select" && ctx_r2.opcionEsObjeto(campo_r10) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(campo_r10.tipo_campo === "select" && !ctx_r2.opcionEsObjeto(campo_r10) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(campo_r10.tipo_campo === "textarea" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(campo_r10.tipo_campo === "boolean" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pureFunction0(9, _c1).includes(campo_r10.tipo_campo) ? 9 : -1);
  }
}
var COLUMNAS_MAPEADAS = /* @__PURE__ */ new Set([
  // Datos personales (paso 1)
  "nombre",
  "apellido_paterno",
  "apellido_materno",
  "fecha_nacimiento",
  "email",
  "ci",
  "expedido_id",
  "telefono",
  // Datos adicionales (paso 2)
  "ciudad",
  "provincia",
  "medio_pago",
  "monto_pagado",
  "sugerencia_curso",
  "recomendar_docente",
  "detalle_docente"
]);
var PreinscripcionModalComponent = class _PreinscripcionModalComponent {
  activeModal;
  service;
  programaId;
  programaNombre;
  camposDinamicos = [];
  paso = 1;
  // Todos los valores del formulario viven en un solo diccionario
  valores = {};
  subiendoCampo = {};
  enviando = false;
  exito = false;
  error = "";
  constructor(activeModal, service) {
    this.activeModal = activeModal;
    this.service = service;
  }
  get camposPaso1() {
    return this.camposDinamicos.filter((c) => c.activo && c.paso === 1);
  }
  get camposPaso2() {
    return this.camposDinamicos.filter((c) => c.activo && c.paso === 2);
  }
  get camposRequeridosPaso1Completos() {
    return this.camposPaso1.filter((c) => c.requerido).every((c) => {
      const v = this.valores[c.nombre_campo];
      return v !== void 0 && v !== null && v !== "";
    });
  }
  siguientePaso() {
    if (!this.camposRequeridosPaso1Completos) {
      this.error = "Por favor complete todos los campos requeridos antes de continuar.";
      return;
    }
    this.error = "";
    this.paso = 2;
  }
  anteriorPaso() {
    this.error = "";
    this.paso = 1;
  }
  subirArchivo(event, campo) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    this.subiendoCampo[campo.nombre_campo] = true;
    this.service.uploadFile(file).subscribe({
      next: (res) => {
        this.valores[campo.nombre_campo] = res.url;
        this.subiendoCampo[campo.nombre_campo] = false;
      },
      error: () => {
        this.subiendoCampo[campo.nombre_campo] = false;
        alert("Error al subir el archivo. Intente nuevamente.");
      }
    });
  }
  campoEsArchivo(campo) {
    return campo.tipo_campo === "file_pdf" || campo.tipo_campo === "file_image";
  }
  aceptaArchivo(campo) {
    const accept = campo.validacion?.["accept"];
    if (accept)
      return accept;
    return campo.tipo_campo === "file_pdf" ? ".pdf,.jpg,.jpeg,.png" : "image/*";
  }
  // Detecta si las opciones son objetos {id, nombre} (para selects con FK)
  opcionEsObjeto(campo) {
    const ops = campo.opciones;
    return Array.isArray(ops) && ops.length > 0 && typeof ops[0] === "object" && ops[0] !== null;
  }
  validarRequeridos(campos) {
    return campos.filter((c) => c.requerido).every((c) => {
      const v = this.valores[c.nombre_campo];
      return v !== void 0 && v !== null && v !== "";
    });
  }
  enviar() {
    if (!this.validarRequeridos(this.camposPaso2)) {
      this.error = "Por favor complete todos los campos requeridos.";
      return;
    }
    this.enviando = true;
    this.error = "";
    const mapeados = {};
    const extra = {};
    for (const [key, value] of Object.entries(this.valores)) {
      if (COLUMNAS_MAPEADAS.has(key)) {
        mapeados[key] = value;
      } else {
        extra[key] = value;
      }
    }
    this.service.store({
      programa_id: this.programaId,
      nombre: mapeados["nombre"] ?? "",
      apellido_paterno: mapeados["apellido_paterno"],
      apellido_materno: mapeados["apellido_materno"],
      fecha_nacimiento: mapeados["fecha_nacimiento"],
      email: mapeados["email"] ?? "",
      ci: mapeados["ci"],
      expedido_id: mapeados["expedido_id"] != null ? Number(mapeados["expedido_id"]) : void 0,
      telefono: mapeados["telefono"],
      ciudad: mapeados["ciudad"],
      provincia: mapeados["provincia"],
      medio_pago: mapeados["medio_pago"],
      monto_pagado: mapeados["monto_pagado"] != null ? Number(mapeados["monto_pagado"]) : void 0,
      sugerencia_curso: mapeados["sugerencia_curso"],
      recomendar_docente: mapeados["recomendar_docente"],
      detalle_docente: mapeados["detalle_docente"],
      campos_extra: Object.keys(extra).length > 0 ? extra : void 0,
      origen: "portal"
    }).subscribe({
      next: () => {
        this.enviando = false;
        this.exito = true;
      },
      error: (err) => {
        this.enviando = false;
        this.error = err?.error?.message || "Ocurri\xF3 un error. Intente nuevamente.";
      }
    });
  }
  static \u0275fac = function PreinscripcionModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreinscripcionModalComponent)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(PreinscripcionService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreinscripcionModalComponent, selectors: [["app-preinscripcion-modal"]], inputs: { programaId: "programaId", programaNombre: "programaNombre", camposDinamicos: "camposDinamicos" }, decls: 12, vars: 3, consts: [["campoDinamico", ""], ["f1", "ngForm"], ["f2", "ngForm"], [1, "modal-header", "border-bottom", "pb-3"], [1, "modal-title", "fw-bold"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "px-4", "py-3"], [1, "text-center", "py-4", "px-2"], [1, "modal-footer", "justify-content-center", "border-top", "pt-2"], [1, "text-muted"], [1, "fa-solid", "fa-graduation-cap", "fa-3x", "text-success", "mb-3", "d-block"], [1, "fw-bold", "mb-3"], [1, "mb-2"], [1, "header-btn1", "mt-3", 3, "click"], [1, "d-flex", "align-items-center", "mb-4"], [1, "badge", "rounded-pill", "px-3", "py-2", "me-2"], [1, "text-muted", "small", "me-2"], [1, "flex-grow-1", "border-top", "mx-2"], [1, "text-muted", "small"], [1, "text-muted", "mb-3"], [1, "alert", "alert-danger", "py-2"], [1, "alert", "alert-light", "border", "mb-3", "py-2", "px-3"], [1, "row", "g-3"], [1, "col-12"], [1, "col-12", "mt-2"], ["type", "button", 1, "header-btn1", "w-100", "justify-content-center", 3, "click"], [1, "fa-solid", "fa-arrow-right", "ms-2"], [1, "mb-2", "small", "fw-semibold", "text-dark"], [1, "fa-solid", "fa-circle-info", "text-primary", "me-1"], [1, "mb-0", "ps-3", 2, "font-size", "0.82rem"], [3, "text-muted"], [1, "fa-solid", "fa-circle-dot", "text-danger", "me-1", 2, "font-size", "0.6rem", "vertical-align", "middle"], [1, "fa-regular", "fa-circle", "text-muted", "me-1", 2, "font-size", "0.6rem", "vertical-align", "middle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "col-12", "d-flex", "gap-2", "mt-2"], ["type", "button", 1, "btn", "btn-outline-secondary", "flex-shrink-0", 3, "click"], [1, "fa-solid", "fa-arrow-left", "me-1"], ["type", "button", 1, "header-btn1", "flex-grow-1", "justify-content-center", 3, "click", "disabled"], [1, "text-muted", "text-center", "py-3"], [1, "fa-solid", "fa-circle-check", "text-success", "me-2"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "form-label", "fw-semibold"], [1, "text-danger"], [1, "text-muted", "small", "mb-1"], [1, "form-select", 3, "name", "ngModel"], ["rows", "3", 1, "form-control", 3, "name", "placeholder", "ngModel"], [1, "form-check", "mt-1"], [1, "form-control", 3, "type", "name", "placeholder", "ngModel"], ["type", "file", 1, "form-control", 3, "change", "accept"], [1, "text-success"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "fa-solid", "fa-check", "me-1"], [1, "form-select", 3, "ngModelChange", "name", "ngModel"], ["value", ""], [3, "value"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "name", "placeholder", "ngModel"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "id", "name", "ngModel"], [1, "form-check-label", 3, "for"], [1, "form-control", 3, "ngModelChange", "type", "name", "placeholder", "ngModel"]], template: function PreinscripcionModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "h5", 4);
      \u0275\u0275text(2, "Pre-inscripci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 5);
      \u0275\u0275listener("click", function PreinscripcionModalComponent_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.activeModal.dismiss());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 6);
      \u0275\u0275template(5, PreinscripcionModalComponent_Conditional_5_Template, 16, 0, "div", 7)(6, PreinscripcionModalComponent_Conditional_6_Template, 17, 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 8)(8, "small", 9);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, PreinscripcionModalComponent_ng_template_10_Template, 10, 10, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.exito ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.exito ? 6 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("P\xE1gina ", ctx.paso, " de 2");
    }
  }, dependencies: [CommonModule, NgTemplateOutlet, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreinscripcionModalComponent, [{
    type: Component,
    args: [{ selector: "app-preinscripcion-modal", imports: [CommonModule, FormsModule], template: `<div class="modal-header border-bottom pb-3">
    <h5 class="modal-title fw-bold">Pre-inscripci\xF3n</h5>
    <button type="button" class="btn-close" (click)="activeModal.dismiss()"></button>
</div>

<div class="modal-body px-4 py-3">

    @if (exito) {
        <div class="text-center py-4 px-2">
            <i class="fa-solid fa-graduation-cap fa-3x text-success mb-3 d-block"></i>
            <h5 class="fw-bold mb-3">\xA1Pre-inscripci\xF3n enviada!</h5>
            <p class="mb-2">
                \u{1F393} Gracias por confiar en la <strong>Universidad San Francisco de As\xEDs (USFA)</strong> y <strong>CENEFCO</strong>.
                Valoramos su preferencia y la confianza depositada en nuestros programas.
            </p>
            <p class="text-muted">\u{1F4F2} Ante cualquier duda o consulta, estaremos encantados de atenderle.</p>
            <button class="header-btn1 mt-3" (click)="activeModal.close()">Cerrar</button>
        </div>
    }

    @if (!exito) {
        <!-- Indicador de pasos -->
        <div class="d-flex align-items-center mb-4">
            <span class="badge rounded-pill px-3 py-2 me-2" [style.background]="paso === 1 ? '#c0392b' : '#6c757d'">1</span>
            <span class="text-muted small me-2">Datos personales</span>
            <div class="flex-grow-1 border-top mx-2"></div>
            <span class="badge rounded-pill px-3 py-2 me-2" [style.background]="paso === 2 ? '#c0392b' : '#6c757d'">2</span>
            <span class="text-muted small">Documentos y datos adicionales</span>
        </div>

        <p class="text-muted mb-3">Programa: <strong>{{ programaNombre }}</strong></p>

        @if (error) {
            <div class="alert alert-danger py-2">{{ error }}</div>
        }

        <!-- \u2500\u2500 PASO 1: Datos personales (din\xE1mico) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (paso === 1) {

            @if (camposPaso2.length > 0) {
                <div class="alert alert-light border mb-3 py-2 px-3">
                    <p class="mb-2 small fw-semibold text-dark">
                        <i class="fa-solid fa-circle-info text-primary me-1"></i>
                        Ten a mano los siguientes documentos para el paso 2:
                    </p>
                    <ul class="mb-0 ps-3" style="font-size:0.82rem;">
                        @for (campo of camposPaso2; track campo.id) {
                            <li [class.text-muted]="!campo.requerido">
                                @if (campo.requerido) {
                                    <i class="fa-solid fa-circle-dot text-danger me-1" style="font-size:0.6rem;vertical-align:middle"></i>
                                } @else {
                                    <i class="fa-regular fa-circle text-muted me-1" style="font-size:0.6rem;vertical-align:middle"></i>
                                }
                                {{ campo.etiqueta }}
                                @if (!campo.requerido) { <span class="text-muted">(opcional)</span> }
                            </li>
                        }
                    </ul>
                </div>
            }

            <form #f1="ngForm">
                <div class="row g-3">
                    @for (campo of camposPaso1; track campo.id) {
                        <div class="col-12">
                            <ng-container [ngTemplateOutlet]="campoDinamico" [ngTemplateOutletContext]="{campo: campo}"></ng-container>
                        </div>
                    }
                    <div class="col-12 mt-2">
                        <button type="button" class="header-btn1 w-100 justify-content-center"
                            (click)="siguientePaso()">
                            Siguiente <i class="fa-solid fa-arrow-right ms-2"></i>
                        </button>
                    </div>
                </div>
            </form>
        }

        <!-- \u2500\u2500 PASO 2: Documentos y datos adicionales (din\xE1mico) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (paso === 2) {
            <form #f2="ngForm">
                <div class="row g-3">

                    @if (camposPaso2.length === 0) {
                        <div class="col-12">
                            <p class="text-muted text-center py-3">
                                <i class="fa-solid fa-circle-check text-success me-2"></i>
                                No se requieren documentos adicionales para este programa.
                            </p>
                        </div>
                    }

                    @for (campo of camposPaso2; track campo.id) {
                        <div class="col-12">
                            <ng-container [ngTemplateOutlet]="campoDinamico" [ngTemplateOutletContext]="{campo: campo}"></ng-container>
                        </div>
                    }

                    <div class="col-12 d-flex gap-2 mt-2">
                        <button type="button" class="btn btn-outline-secondary flex-shrink-0"
                            (click)="anteriorPaso()">
                            <i class="fa-solid fa-arrow-left me-1"></i> Anterior
                        </button>
                        <button type="button" class="header-btn1 flex-grow-1 justify-content-center"
                            [disabled]="enviando" (click)="enviar()">
                            @if (enviando) {
                                <span class="spinner-border spinner-border-sm me-2"></span> Enviando...
                            } @else {
                                Enviar Pre-inscripci\xF3n <i class="fa-solid fa-arrow-right ms-2"></i>
                            }
                        </button>
                    </div>

                </div>
            </form>
        }
    }

</div>

<div class="modal-footer justify-content-center border-top pt-2">
    <small class="text-muted">P\xE1gina {{ paso }} de 2</small>
</div>

<!-- \u2500\u2500 Template reutilizable para renderizar cualquier campo din\xE1mico \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<ng-template #campoDinamico let-campo="campo">
    <label class="form-label fw-semibold">
        {{ campo.etiqueta }}
        @if (campo.requerido) { <span class="text-danger">*</span> }
    </label>

    @if (campo.ayuda) {
        <p class="text-muted small mb-1">{{ campo.ayuda }}</p>
    }

    <!-- file_pdf / file_image -->
    @if (campoEsArchivo(campo)) {
        <input type="file" class="form-control"
            [accept]="aceptaArchivo(campo)"
            (change)="subirArchivo($event, campo)">
        @if (subiendoCampo[campo.nombre_campo]) {
            <small class="text-muted">
                <span class="spinner-border spinner-border-sm me-1"></span>Subiendo...
            </small>
        }
        @if (valores[campo.nombre_campo]) {
            <small class="text-success">
                <i class="fa-solid fa-check me-1"></i>Archivo subido correctamente
            </small>
        }
    }

    <!-- select con opciones objeto {id, nombre} \u2014 ej: expedido_id -->
    @if (campo.tipo_campo === 'select' && opcionEsObjeto(campo)) {
        <select class="form-select"
            [name]="campo.nombre_campo"
            [(ngModel)]="valores[campo.nombre_campo]">
            <option value="">Seleccione una opci\xF3n</option>
            @for (op of $any(campo.opciones); track op['id'] ?? op) {
                <option [value]="op['id']">{{ op['nombre'] }}</option>
            }
        </select>
    }

    <!-- select con opciones string normales -->
    @if (campo.tipo_campo === 'select' && !opcionEsObjeto(campo)) {
        <select class="form-select"
            [name]="campo.nombre_campo"
            [(ngModel)]="valores[campo.nombre_campo]">
            <option value="">Seleccione una opci\xF3n</option>
            @for (op of $any(campo.opciones ?? []); track op) {
                <option [value]="op">{{ op }}</option>
            }
        </select>
    }

    <!-- textarea -->
    @if (campo.tipo_campo === 'textarea') {
        <textarea class="form-control" rows="3"
            [name]="campo.nombre_campo"
            [placeholder]="campo.ayuda ?? ''"
            [(ngModel)]="valores[campo.nombre_campo]">
        </textarea>
    }

    <!-- boolean -->
    @if (campo.tipo_campo === 'boolean') {
        <div class="form-check mt-1">
            <input class="form-check-input" type="checkbox"
                [id]="'campo_' + campo.nombre_campo"
                [name]="campo.nombre_campo"
                [(ngModel)]="valores[campo.nombre_campo]">
            <label class="form-check-label" [for]="'campo_' + campo.nombre_campo">S\xED</label>
        </div>
    }

    <!-- text / email / number / date -->
    @if (['text','email','number','date'].includes(campo.tipo_campo)) {
        <input [type]="campo.tipo_campo" class="form-control"
            [name]="campo.nombre_campo"
            [placeholder]="campo.ayuda ?? campo.etiqueta"
            [(ngModel)]="valores[campo.nombre_campo]">
    }
</ng-template>
` }]
  }], () => [{ type: NgbActiveModal }, { type: PreinscripcionService }], { programaId: [{
    type: Input
  }], programaNombre: [{
    type: Input
  }], camposDinamicos: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreinscripcionModalComponent, { className: "PreinscripcionModalComponent", filePath: "src/app/components/preinscripcion-modal/preinscripcion-modal.component.ts", lineNumber: 25 });
})();

// src/app/views/cursos/cursos-single/cursos-single.component.ts
var _c03 = (a0) => ["/cursos", a0];
var _forTrack03 = ($index, $item) => $item.id_programa;
function CursosSingleComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementEnd();
  }
}
function CursosSingleComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function CursosSingleComponent_Conditional_17_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 40);
    \u0275\u0275text(2);
    \u0275\u0275element(3, "i", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.curso.categoria_nombre, " ");
  }
}
function CursosSingleComponent_Conditional_17_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 40);
    \u0275\u0275text(2);
    \u0275\u0275element(3, "i", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.curso.tipo_nombre, " ");
  }
}
function CursosSingleComponent_Conditional_17_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 40);
    \u0275\u0275text(2);
    \u0275\u0275element(3, "i", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Inversi\xF3n: ", ctx_r0.curso.inversion, " ");
  }
}
function CursosSingleComponent_Conditional_17_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 40);
    \u0275\u0275text(2);
    \u0275\u0275element(3, "i", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Creditaje: ", ctx_r0.curso.creditaje, " ");
  }
}
function CursosSingleComponent_Conditional_17_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275element(4, "i", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Inicio: ", \u0275\u0275pipeBind2(3, 1, ctx_r0.curso.inicio_actividades, "dd/MM/yyyy"), " ");
  }
}
function CursosSingleComponent_Conditional_17_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275element(4, "i", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Fin: ", \u0275\u0275pipeBind2(3, 1, ctx_r0.curso.finalizacion_actividades, "dd/MM/yyyy"), " ");
  }
}
function CursosSingleComponent_Conditional_17_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275element(4, "i", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Inscripciones: ", \u0275\u0275pipeBind2(3, 1, ctx_r0.curso.inicio_inscripciones, "dd/MM/yyyy"), " ");
  }
}
function CursosSingleComponent_Conditional_17_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "h3");
    \u0275\u0275text(2, "\xBFTe interesa el programa?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41)(4, "a", 42);
    \u0275\u0275element(5, "i", 43);
    \u0275\u0275text(6, " Unirse al grupo ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("href", ctx_r0.curso.url_whatsapp, \u0275\u0275sanitizeUrl);
  }
}
function CursosSingleComponent_Conditional_17_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "h3");
    \u0275\u0275text(2, "Documentos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Descarga la informaci\xF3n del programa.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 41)(6, "a", 42);
    \u0275\u0275element(7, "img", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("href", ctx_r0.getDocumento(ctx_r0.curso.documento1), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.curso.titulo_documento1 || "Pdf Download", " ");
  }
}
function CursosSingleComponent_Conditional_17_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul")(1, "li")(2, "a", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.curso.categoria_nombre);
  }
}
function CursosSingleComponent_Conditional_17_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul")(1, "li")(2, "a", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.curso.tipo_nombre);
  }
}
function CursosSingleComponent_Conditional_17_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "h3");
    \u0275\u0275text(2, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 46);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "div", 32);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.curso.descripcion);
  }
}
function CursosSingleComponent_Conditional_17_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "h3");
    \u0275\u0275text(2, "Objetivo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 46);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "div", 32);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.curso.objetivo);
  }
}
function CursosSingleComponent_Conditional_17_Conditional_36_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "div", 50);
    \u0275\u0275elementStart(2, "div", 45)(3, "h3");
    \u0275\u0275text(4, "Dirigido a");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 46);
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.curso.dirigido);
  }
}
function CursosSingleComponent_Conditional_17_Conditional_36_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "div", 50);
    \u0275\u0275elementStart(2, "div", 45)(3, "h3");
    \u0275\u0275text(4, "Requisitos");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 46);
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.curso.requisitos);
  }
}
function CursosSingleComponent_Conditional_17_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 47);
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275template(2, CursosSingleComponent_Conditional_17_Conditional_36_Conditional_2_Template, 8, 1, "div", 48)(3, CursosSingleComponent_Conditional_17_Conditional_36_Conditional_3_Template, 8, 1, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 49);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.curso.dirigido ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.curso.requisitos ? 3 : -1);
  }
}
function CursosSingleComponent_Conditional_17_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2, "Nota:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 32);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.curso.nota, "");
  }
}
function CursosSingleComponent_Conditional_17_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "h3");
    \u0275\u0275text(2, "Video");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 46);
    \u0275\u0275elementStart(4, "div", 51);
    \u0275\u0275element(5, "iframe", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "div", 32);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r0.videoUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
function CursosSingleComponent_Conditional_17_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.curso.categoria_nombre);
  }
}
function CursosSingleComponent_Conditional_17_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.curso.tipo_nombre);
  }
}
function CursosSingleComponent_Conditional_17_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "h4");
    \u0275\u0275text(2, "Unirse:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul")(4, "li")(5, "a", 53);
    \u0275\u0275element(6, "i", 43);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", ctx_r0.curso.url_whatsapp, \u0275\u0275sanitizeUrl);
  }
}
function CursosSingleComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 18)(2, "div", 19)(3, "div", 20)(4, "h3");
    \u0275\u0275text(5, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul");
    \u0275\u0275template(7, CursosSingleComponent_Conditional_17_Conditional_7_Template, 4, 1, "li")(8, CursosSingleComponent_Conditional_17_Conditional_8_Template, 4, 1, "li")(9, CursosSingleComponent_Conditional_17_Conditional_9_Template, 4, 1, "li")(10, CursosSingleComponent_Conditional_17_Conditional_10_Template, 4, 1, "li")(11, CursosSingleComponent_Conditional_17_Conditional_11_Template, 5, 4, "li")(12, CursosSingleComponent_Conditional_17_Conditional_12_Template, 5, 4, "li")(13, CursosSingleComponent_Conditional_17_Conditional_13_Template, 5, 4, "li");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, CursosSingleComponent_Conditional_17_Conditional_14_Template, 7, 1, "div", 21)(15, CursosSingleComponent_Conditional_17_Conditional_15_Template, 9, 2, "div", 22);
    \u0275\u0275elementStart(16, "div", 23)(17, "h3");
    \u0275\u0275text(18, "Etiquetas");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, CursosSingleComponent_Conditional_17_Conditional_19_Template, 4, 1, "ul")(20, CursosSingleComponent_Conditional_17_Conditional_20_Template, 4, 1, "ul");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 24)(22, "h3");
    \u0275\u0275text(23, "Volver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ul")(25, "li")(26, "a", 25);
    \u0275\u0275element(27, "i", 26);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(28, "div", 27)(29, "div", 28)(30, "div", 29)(31, "div", 30);
    \u0275\u0275element(32, "img", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "div", 32);
    \u0275\u0275template(34, CursosSingleComponent_Conditional_17_Conditional_34_Template, 7, 1)(35, CursosSingleComponent_Conditional_17_Conditional_35_Template, 7, 1)(36, CursosSingleComponent_Conditional_17_Conditional_36_Template, 5, 2)(37, CursosSingleComponent_Conditional_17_Conditional_37_Template, 5, 1)(38, CursosSingleComponent_Conditional_17_Conditional_38_Template, 7, 1);
    \u0275\u0275elementStart(39, "div", 33)(40, "div", 34)(41, "h4");
    \u0275\u0275text(42, "Categor\xEDa:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "ul");
    \u0275\u0275template(44, CursosSingleComponent_Conditional_17_Conditional_44_Template, 3, 1, "li")(45, CursosSingleComponent_Conditional_17_Conditional_45_Template, 3, 1, "li");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(46, CursosSingleComponent_Conditional_17_Conditional_46_Template, 7, 1, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "div", 32);
    \u0275\u0275elementStart(48, "div", 36)(49, "h4");
    \u0275\u0275text(50, "\xBFTe interesa este programa?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "p");
    \u0275\u0275text(52, "Completa tu pre-inscripci\xF3n y nos pondremos en contacto contigo.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 37)(54, "button", 38);
    \u0275\u0275listener("click", function CursosSingleComponent_Conditional_17_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.abrirInscripcion());
    });
    \u0275\u0275text(55, " Inscribirme ");
    \u0275\u0275element(56, "i", 39);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.curso.categoria_nombre ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.curso.tipo_nombre ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.curso.inversion ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.curso.creditaje ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.curso.inicio_actividades ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.curso.finalizacion_actividades ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.curso.inicio_inscripciones ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.curso.url_whatsapp ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.curso.documento1 ? 15 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.curso.categoria_nombre ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.curso.tipo_nombre ? 20 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275property("src", ctx_r0.imagen, \u0275\u0275sanitizeUrl)("alt", ctx_r0.curso.imagen_alt || ctx_r0.curso.nombre_programa);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.curso.descripcion ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.curso.objetivo ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.curso.dirigido || ctx_r0.curso.requisitos ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.curso.nota ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.curso.url_video ? 38 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.curso.categoria_nombre ? 44 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.curso.tipo_nombre ? 45 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.curso.url_whatsapp ? 46 : -1);
  }
}
function CursosSingleComponent_For_27_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 40);
    \u0275\u0275element(2, "i", 59);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, c_r3.inicio_actividades, "dd/MM/yyyy"), "");
  }
}
function CursosSingleComponent_For_27_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 40);
    \u0275\u0275element(2, "i", 60);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", c_r3.categoria_nombre, "");
  }
}
function CursosSingleComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 54)(2, "div", 30);
    \u0275\u0275element(3, "img", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 55)(5, "a", 56);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 57)(8, "ul");
    \u0275\u0275template(9, CursosSingleComponent_For_27_Conditional_9_Template, 5, 4, "li")(10, CursosSingleComponent_For_27_Conditional_10_Template, 4, 1, "li");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 58);
    \u0275\u0275text(14, "Ver detalle ");
    \u0275\u0275element(15, "i", 39);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.getImagen(c_r3), \u0275\u0275sanitizeUrl)("alt", c_r3.imagen_alt || c_r3.nombre_programa);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c03, c_r3.id_programa));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.nombre_programa);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(c_r3.inicio_actividades ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r3.categoria_nombre ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.descripcion);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c03, c_r3.id_programa));
  }
}
var STORAGE_BASE2 = "http://localhost:8000";
var CursosSingleComponent = class _CursosSingleComponent {
  route;
  cursoService;
  sanitizer;
  modalService;
  curso = null;
  masCursos = [];
  loading = false;
  error = "";
  constructor(route, cursoService, sanitizer, modalService) {
    this.route = route;
    this.cursoService = cursoService;
    this.sanitizer = sanitizer;
    this.modalService = modalService;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (!id) {
      this.error = "Programa no encontrado.";
      return;
    }
    this.loading = true;
    this.cursoService.getById(id).subscribe({
      next: (curso) => {
        this.curso = curso;
        this.loading = false;
        this.loadMasCursos(id);
      },
      error: () => {
        this.error = "No se pudo cargar el programa.";
        this.loading = false;
      }
    });
  }
  loadMasCursos(excludeId) {
    this.cursoService.getAll({ pageSize: 4 }).subscribe({
      next: (res) => {
        this.masCursos = res.data.filter((c) => c.id_programa !== excludeId).slice(0, 3);
      }
    });
  }
  abrirInscripcion() {
    const modal = this.modalService.open(PreinscripcionModalComponent, { size: "lg", centered: true });
    modal.componentInstance.programaId = this.curso.id_programa;
    modal.componentInstance.programaNombre = this.curso.nombre_programa;
    modal.componentInstance.camposDinamicos = this.curso.categoria_campos ?? [];
  }
  get imagen() {
    const foto = this.curso?.foto;
    if (foto)
      return foto.startsWith("/") ? `${STORAGE_BASE2}${foto}` : foto;
    return "assets/img/all-images/service-img1.png";
  }
  getDocumento(url) {
    if (!url)
      return "";
    return url.startsWith("/") ? `${STORAGE_BASE2}${url}` : url;
  }
  getImagen(c) {
    const foto = c.foto;
    if (foto)
      return foto.startsWith("/") ? `${STORAGE_BASE2}${foto}` : foto;
    return "assets/img/all-images/service-img1.png";
  }
  get videoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.curso?.url_video ?? "");
  }
  static \u0275fac = function CursosSingleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CursosSingleComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CursoService), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(NgbModal));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CursosSingleComponent, selectors: [["app-cursos-single"]], decls: 28, vars: 6, consts: [[1, "hero1-section-area", "about-bg-area", "cursos-hero-area"], [1, "cursos-hero-overlay"], [1, "cursos-hero-dots"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], [1, "cursos-hero-badge"], [1, "fa-solid", "fa-graduation-cap"], ["title", "Programas", 3, "subTitle"], [1, "blog-leftside-section-area", "sp8"], [1, "text-center", "py-5"], [1, "alert", "alert-danger"], [1, "blog1-section-area", "sp2"], [1, "col-lg-6", "m-auto"], [1, "blog-header", "heading2", "text-center"], [1, "col-lg-4", "col-md-6"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "col-lg-4"], [1, "blog-auhtor-side-area"], [1, "blog-author-list"], [1, "helping-area"], [1, "download-broucher"], [1, "tags-area"], [1, "social-icons"], ["routerLink", "/cursos"], [1, "fa-solid", "fa-arrow-left"], [1, "col-lg-8"], [1, "blog-leftside-area", "heading2"], [1, "blog-left-heading", "heading2"], [1, "img1"], [3, "src", "alt"], [1, "space48"], [1, "tags-share-area"], [1, "tags"], [1, "share"], [1, "contact-submit-boxarea"], [1, "input-area1", "mt-3"], ["type", "button", 1, "header-btn1", 3, "click"], [1, "fa-solid", "fa-arrow-right"], ["href", "javascript:void(0)"], [1, "btn-area"], ["target", "_blank", 1, "header-btn1", 3, "href"], [1, "fa-brands", "fa-whatsapp"], ["src", "assets/img/icons/download1.svg", "alt", ""], [1, "left-heading2", "heading2"], [1, "space16"], [1, "space18"], [1, "col-lg-6", "col-md-6"], [1, "space32"], [1, "space30"], [1, "ratio", "ratio-16x9"], ["allowfullscreen", "", 3, "src"], ["target", "_blank", 3, "href"], [1, "blog-auhtor-boxarea"], [1, "blog-position"], [1, "heading", 3, "routerLink"], [1, "blog-content-area"], [1, "learnmore", 3, "routerLink"], [1, "fa-solid", "fa-calendar-days"], [1, "fa-solid", "fa-tag"]], template: function CursosSingleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      \u0275\u0275element(8, "i", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h1");
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "app-breadcrumb", 9);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(13, "div", 10)(14, "div", 3);
      \u0275\u0275template(15, CursosSingleComponent_Conditional_15_Template, 2, 0, "div", 11)(16, CursosSingleComponent_Conditional_16_Template, 2, 1, "div", 12)(17, CursosSingleComponent_Conditional_17_Template, 57, 21, "div", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 13)(19, "div", 3)(20, "div", 4)(21, "div", 14)(22, "div", 15)(23, "h2");
      \u0275\u0275text(24, "M\xE1s Programas");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "div", 4);
      \u0275\u0275repeaterCreate(26, CursosSingleComponent_For_27_Template, 16, 12, "div", 16, _forTrack03);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", (ctx.curso == null ? null : ctx.curso.tipo_nombre) || "Programa Acad\xE9mico", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((ctx.curso == null ? null : ctx.curso.nombre_programa) || "Detalle del Programa");
      \u0275\u0275advance();
      \u0275\u0275propertyInterpolate("subTitle", ctx.curso == null ? null : ctx.curso.nombre_programa);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.curso && !ctx.loading ? 17 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.masCursos);
    }
  }, dependencies: [CommonModule, DatePipe, RouterLink, BreadcrumbComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CursosSingleComponent, [{
    type: Component,
    args: [{ selector: "app-cursos-single", imports: [CommonModule, RouterLink, BreadcrumbComponent], template: `<div class="hero1-section-area about-bg-area cursos-hero-area">
    <div class="cursos-hero-overlay"></div>
    <div class="cursos-hero-dots"></div>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="hero-heading-area heading1 text-center">
                    <div class="cursos-hero-badge">
                        <i class="fa-solid fa-graduation-cap"></i>
                        {{ curso?.tipo_nombre || 'Programa Acad\xE9mico' }}
                    </div>
                    <h1>{{ curso?.nombre_programa || 'Detalle del Programa' }}</h1>
                    <app-breadcrumb subTitle="{{ curso?.nombre_programa }}" title="Programas" />
                </div>
            </div>
        </div>
    </div>
</div>

<div class="blog-leftside-section-area sp8">
    <div class="container">

        @if (loading) {
            <div class="text-center py-5">
                <div class="spinner-border text-primary" role="status"></div>
            </div>
        }

        @if (error) {
            <div class="alert alert-danger">{{ error }}</div>
        }

        @if (curso && !loading) {
        <div class="row">

            <div class="col-lg-4">
                <div class="blog-auhtor-side-area">

                    <div class="blog-author-list">
                        <h3>Informaci\xF3n</h3>
                        <ul>
                            @if (curso.categoria_nombre) {
                                <li><a href="javascript:void(0)">{{ curso.categoria_nombre }} <i class="fa-solid fa-arrow-right"></i></a></li>
                            }
                            @if (curso.tipo_nombre) {
                                <li><a href="javascript:void(0)">{{ curso.tipo_nombre }} <i class="fa-solid fa-arrow-right"></i></a></li>
                            }
                            @if (curso.inversion) {
                                <li><a href="javascript:void(0)">Inversi\xF3n: {{ curso.inversion }} <i class="fa-solid fa-arrow-right"></i></a></li>
                            }
                            @if (curso.creditaje) {
                                <li><a href="javascript:void(0)">Creditaje: {{ curso.creditaje }} <i class="fa-solid fa-arrow-right"></i></a></li>
                            }
                            @if (curso.inicio_actividades) {
                                <li><a href="javascript:void(0)">Inicio: {{ curso.inicio_actividades | date:'dd/MM/yyyy' }} <i class="fa-solid fa-arrow-right"></i></a></li>
                            }
                            @if (curso.finalizacion_actividades) {
                                <li><a href="javascript:void(0)">Fin: {{ curso.finalizacion_actividades | date:'dd/MM/yyyy' }} <i class="fa-solid fa-arrow-right"></i></a></li>
                            }
                            @if (curso.inicio_inscripciones) {
                                <li><a href="javascript:void(0)">Inscripciones: {{ curso.inicio_inscripciones | date:'dd/MM/yyyy' }} <i class="fa-solid fa-arrow-right"></i></a></li>
                            }
                        </ul>
                    </div>

                    @if (curso.url_whatsapp) {
                        <div class="helping-area">
                            <h3>\xBFTe interesa el programa?</h3>
                            <div class="btn-area">
                                <a [href]="curso.url_whatsapp" target="_blank" class="header-btn1">
                                    <i class="fa-brands fa-whatsapp"></i> Unirse al grupo
                                </a>
                            </div>
                        </div>
                    }

                    @if (curso.documento1) {
                        <div class="download-broucher">
                            <h3>Documentos</h3>
                            <p>Descarga la informaci\xF3n del programa.</p>
                            <div class="btn-area">
                                <a [href]="getDocumento(curso.documento1)" target="_blank" class="header-btn1">
                                    <img src="assets/img/icons/download1.svg" alt="">
                                    {{ curso.titulo_documento1 || 'Pdf Download' }}
                                </a>
                            </div>
                        </div>
                    }

                    <div class="tags-area">
                        <h3>Etiquetas</h3>
                        @if (curso.categoria_nombre) {
                            <ul><li><a href="javascript:void(0)">{{ curso.categoria_nombre }}</a></li></ul>
                        }
                        @if (curso.tipo_nombre) {
                            <ul><li><a href="javascript:void(0)">{{ curso.tipo_nombre }}</a></li></ul>
                        }
                    </div>

                    <div class="social-icons">
                        <h3>Volver</h3>
                        <ul>
                            <li><a routerLink="/cursos"><i class="fa-solid fa-arrow-left"></i></a></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div class="col-lg-8">
                <div class="blog-leftside-area heading2">

                    <div class="blog-left-heading heading2">
                        <div class="img1">
                            <img [src]="imagen" [alt]="curso.imagen_alt || curso.nombre_programa">
                        </div>
                    </div>

                    <div class="space48"></div>

                    @if (curso.descripcion) {
                        <div class="left-heading2 heading2">
                            <h3>Descripci\xF3n</h3>
                            <div class="space16"></div>
                            <p>{{ curso.descripcion }}</p>
                        </div>
                        <div class="space48"></div>
                    }

                    @if (curso.objetivo) {
                        <div class="left-heading2 heading2">
                            <h3>Objetivo</h3>
                            <div class="space16"></div>
                            <p>{{ curso.objetivo }}</p>
                        </div>
                        <div class="space48"></div>
                    }

                    @if (curso.dirigido || curso.requisitos) {
                        <div class="space18"></div>
                        <div class="row">
                            @if (curso.dirigido) {
                                <div class="col-lg-6 col-md-6">
                                    <div class="space30"></div>
                                    <div class="left-heading2 heading2">
                                        <h3>Dirigido a</h3>
                                        <div class="space16"></div>
                                        <p>{{ curso.dirigido }}</p>
                                    </div>
                                </div>
                            }
                            @if (curso.requisitos) {
                                <div class="col-lg-6 col-md-6">
                                    <div class="space30"></div>
                                    <div class="left-heading2 heading2">
                                        <h3>Requisitos</h3>
                                        <div class="space16"></div>
                                        <p>{{ curso.requisitos }}</p>
                                    </div>
                                </div>
                            }
                        </div>
                        <div class="space32"></div>
                    }

                    @if (curso.nota) {
                        <p><strong>Nota:</strong> {{ curso.nota }}</p>
                        <div class="space48"></div>
                    }

                    @if (curso.url_video) {
                        <div class="left-heading2 heading2">
                            <h3>Video</h3>
                            <div class="space16"></div>
                            <div class="ratio ratio-16x9">
                                <iframe [src]="videoUrl" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="space48"></div>
                    }

                    <div class="tags-share-area">
                        <div class="tags">
                            <h4>Categor\xEDa:</h4>
                            <ul>
                                @if (curso.categoria_nombre) {
                                    <li><a href="javascript:void(0)">{{ curso.categoria_nombre }}</a></li>
                                }
                                @if (curso.tipo_nombre) {
                                    <li><a href="javascript:void(0)">{{ curso.tipo_nombre }}</a></li>
                                }
                            </ul>
                        </div>
                        @if (curso.url_whatsapp) {
                            <div class="share">
                                <h4>Unirse:</h4>
                                <ul>
                                    <li><a [href]="curso.url_whatsapp" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
                                </ul>
                            </div>
                        }
                    </div>

                    <div class="space48"></div>

                    <div class="contact-submit-boxarea">
                        <h4>\xBFTe interesa este programa?</h4>
                        <p>Completa tu pre-inscripci\xF3n y nos pondremos en contacto contigo.</p>
                        <div class="input-area1 mt-3">
                            <button type="button" class="header-btn1" (click)="abrirInscripcion()">
                                Inscribirme <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        }

    </div>
</div>

<div class="blog1-section-area sp2">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="blog-header heading2 text-center">
                    <h2>M\xE1s Programas</h2>
                </div>
            </div>
        </div>
        <div class="row">
            @for (c of masCursos; track c.id_programa) {
                <div class="col-lg-4 col-md-6">
                    <div class="blog-auhtor-boxarea">
                        <div class="img1">
                            <img [src]="getImagen(c)" [alt]="c.imagen_alt || c.nombre_programa">
                        </div>
                        <div class="blog-position">
                            <a [routerLink]="['/cursos', c.id_programa]" class="heading">{{ c.nombre_programa }}</a>
                            <div class="blog-content-area">
                                <ul>
                                    @if (c.inicio_actividades) {
                                        <li><a href="javascript:void(0)"><i class="fa-solid fa-calendar-days"></i> {{ c.inicio_actividades | date:'dd/MM/yyyy' }}</a></li>
                                    }
                                    @if (c.categoria_nombre) {
                                        <li><a href="javascript:void(0)"><i class="fa-solid fa-tag"></i> {{ c.categoria_nombre }}</a></li>
                                    }
                                </ul>
                                <p>{{ c.descripcion }}</p>
                                <a [routerLink]="['/cursos', c.id_programa]" class="learnmore">Ver detalle <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>
</div>
` }]
  }], () => [{ type: ActivatedRoute }, { type: CursoService }, { type: DomSanitizer }, { type: NgbModal }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CursosSingleComponent, { className: "CursosSingleComponent", filePath: "src/app/views/cursos/cursos-single/cursos-single.component.ts", lineNumber: 19 });
})();

// src/app/views/cursos/cursos.route.ts
var CURSOS_ROUTES = [
  {
    path: "cursos",
    component: CursosListComponent,
    data: { title: "Programas" }
  },
  {
    path: "cursos/:id",
    component: CursosSingleComponent,
    data: { title: "Detalle del Programa" }
  }
];
export {
  CURSOS_ROUTES
};
//# sourceMappingURL=chunk-AZIKPPNW.js.map
