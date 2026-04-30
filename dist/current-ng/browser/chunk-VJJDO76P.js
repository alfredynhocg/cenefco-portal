import {
  RouterLink
} from "./chunk-FVGVLSI5.js";
import {
  CommonModule,
  Component,
  Directive,
  HostBinding,
  HostListener,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2UT764MQ.js";

// src/app/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  logo;
  containerClass;
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], inputs: { logo: "logo", containerClass: "containerClass" }, decls: 97, vars: 4, consts: [[1, "container"], [1, "row"], [1, "col-lg-12"], [1, "footer-logo-content", "sp4"], [1, "col-lg-3", "col-md-6"], [1, "logo-content"], ["alt", "", 3, "src"], ["href", "javascript:void(0)"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-linkedin-in"], [1, "fa-brands", "fa-youtube"], [1, "col-lg-1", "d-lg-block", "d-none"], [1, "col-lg-2", "col-md-6"], [1, "space30", "d-block", "d-md-none"], [1, "service-heading"], ["routerLink", "/cursos"], [1, "space30", "d-md-block", "d-lg-none"], ["routerLink", "/"], ["routerLink", "/nosotros"], ["routerLink", "/docentes"], ["routerLink", "/noticias"], ["routerLink", "/contacto"], [1, "service-heading", "contact"], ["href", "tel:+59170000001"], [1, "icons"], [1, "fa-solid", "fa-phone"], ["href", "mailto:info@cenefco.edu.bo"], [1, "fa-solid", "fa-envelope"], [1, "fa-solid", "fa-location-dot"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 1)(6, "div", 4)(7, "div", 5);
      \u0275\u0275element(8, "img", 6);
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, "Centro de formaci\xF3n continua y posgrado con aval universitario. Impulsamos el desarrollo profesional con educaci\xF3n de calidad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul")(12, "li")(13, "a", 7);
      \u0275\u0275element(14, "i", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "li")(16, "a", 7);
      \u0275\u0275element(17, "i", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 7);
      \u0275\u0275element(20, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "li")(22, "a", 7);
      \u0275\u0275element(23, "i", 11);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(24, "div", 12);
      \u0275\u0275elementStart(25, "div", 13);
      \u0275\u0275element(26, "div", 14);
      \u0275\u0275elementStart(27, "div", 15)(28, "h2");
      \u0275\u0275text(29, "Programas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "ul")(31, "li")(32, "a", 16);
      \u0275\u0275text(33, "Cursos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "li")(35, "a", 16);
      \u0275\u0275text(36, "Diplomados");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "li")(38, "a", 16);
      \u0275\u0275text(39, "Posgrados");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "li")(41, "a", 16);
      \u0275\u0275text(42, "Formaci\xF3n continua");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "li")(44, "a", 16);
      \u0275\u0275text(45, "Ver todos");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(46, "div", 12);
      \u0275\u0275elementStart(47, "div", 13);
      \u0275\u0275element(48, "div", 17);
      \u0275\u0275elementStart(49, "div", 15)(50, "h2");
      \u0275\u0275text(51, "Accesos r\xE1pidos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "ul")(53, "li")(54, "a", 18);
      \u0275\u0275text(55, "Inicio");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "li")(57, "a", 19);
      \u0275\u0275text(58, "Nosotros");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "li")(60, "a", 20);
      \u0275\u0275text(61, "Docentes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "li")(63, "a", 21);
      \u0275\u0275text(64, "Noticias");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "li")(66, "a", 22);
      \u0275\u0275text(67, "Contacto");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(68, "div", 4);
      \u0275\u0275element(69, "div", 17);
      \u0275\u0275elementStart(70, "div", 23)(71, "h2");
      \u0275\u0275text(72, "Contacto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "ul")(74, "li")(75, "a", 24)(76, "span", 25);
      \u0275\u0275element(77, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "span");
      \u0275\u0275text(79, "+591 70000001");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(80, "li")(81, "a", 27)(82, "span", 25);
      \u0275\u0275element(83, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "span");
      \u0275\u0275text(85, "info@cenefco.edu.bo");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "li")(87, "a", 7)(88, "span", 25);
      \u0275\u0275element(89, "i", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "span");
      \u0275\u0275text(91, "Av. Principal 123, ");
      \u0275\u0275element(92, "br");
      \u0275\u0275text(93, "Bolivia");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(94, "div", 30)(95, "p");
      \u0275\u0275text(96);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.containerClass);
      \u0275\u0275advance(8);
      \u0275\u0275property("src", ctx.logo, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(88);
      \u0275\u0275textInterpolate1("\xA9 Copyright ", ctx.currentYear, " - CENEFCO. Todos los derechos reservados.");
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", imports: [RouterLink], template: '<div [class]="containerClass">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-12">\n                <div class="footer-logo-content sp4">\n                    <div class="row">\n                        <div class="col-lg-3 col-md-6">\n                            <div class="logo-content">\n                                <img [src]="logo" alt="">\n                                <p>Centro de formaci\xF3n continua y posgrado con aval universitario. Impulsamos el desarrollo profesional con educaci\xF3n de calidad.</p>\n                                <ul>\n                                    <li><a href="javascript:void(0)"><i class="fa-brands fa-facebook-f"></i></a></li>\n                                    <li><a href="javascript:void(0)"><i class="fa-brands fa-instagram"></i></a></li>\n                                    <li><a href="javascript:void(0)"><i class="fa-brands fa-linkedin-in"></i></a></li>\n                                    <li><a href="javascript:void(0)"><i class="fa-brands fa-youtube"></i></a></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class="col-lg-1 d-lg-block d-none"></div>\n                        <div class="col-lg-2 col-md-6">\n                            <div class="space30 d-block d-md-none"></div>\n                            <div class="service-heading">\n                                <h2>Programas</h2>\n                                <ul>\n                                    <li><a routerLink="/cursos">Cursos</a></li>\n                                    <li><a routerLink="/cursos">Diplomados</a></li>\n                                    <li><a routerLink="/cursos">Posgrados</a></li>\n                                    <li><a routerLink="/cursos">Formaci\xF3n continua</a></li>\n                                    <li><a routerLink="/cursos">Ver todos</a></li>\n                                </ul>\n                            </div>\n                        </div>\n\n                        <div class="col-lg-1 d-lg-block d-none"></div>\n                        <div class="col-lg-2 col-md-6">\n                            <div class="space30 d-md-block d-lg-none"></div>\n                            <div class="service-heading">\n                                <h2>Accesos r\xE1pidos</h2>\n                                <ul>\n                                    <li><a routerLink="/">Inicio</a></li>\n                                    <li><a routerLink="/nosotros">Nosotros</a></li>\n                                    <li><a routerLink="/docentes">Docentes</a></li>\n                                    <li><a routerLink="/noticias">Noticias</a></li>\n                                    <li><a routerLink="/contacto">Contacto</a></li>\n                                </ul>\n                            </div>\n                        </div>\n\n                        <div class="col-lg-3 col-md-6">\n                            <div class="space30 d-md-block d-lg-none"></div>\n                            <div class="service-heading contact">\n                                <h2>Contacto</h2>\n                                <ul>\n                                    <li><a href="tel:+59170000001">\n                                        <span class="icons"><i class="fa-solid fa-phone"></i></span>\n                                        <span>+591 70000001</span>\n                                    </a></li>\n                                    <li><a href="mailto:info@cenefco.edu.bo">\n                                        <span class="icons"><i class="fa-solid fa-envelope"></i></span>\n                                        <span>info&#64;cenefco.edu.bo</span>\n                                    </a></li>\n                                    <li><a href="javascript:void(0)">\n                                        <span class="icons"><i class="fa-solid fa-location-dot"></i></span>\n                                        <span>Av. Principal 123, <br>Bolivia</span>\n                                    </a></li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="copyright">\n                    <p>\xA9 Copyright {{currentYear}} - CENEFCO. Todos los derechos reservados.</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n' }]
  }], null, { logo: [{
    type: Input
  }], containerClass: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/components/footer/footer.component.ts", lineNumber: 10 });
})();

// src/app/components/loader/loader.component.ts
function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 1);
    \u0275\u0275element(2, "div", 2);
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275element(4, "img", 4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("preloader ", (tmp_1_0 = ctx_r0.className) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "", "");
    \u0275\u0275advance(4);
    \u0275\u0275property("src", (tmp_2_0 = ctx_r0.icon) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "assets/img/logo/prelodaer.png", \u0275\u0275sanitizeUrl);
  }
}
var LoaderComponent = class _LoaderComponent {
  icon;
  className;
  showPreloader = true;
  ngOnInit() {
    setTimeout(() => {
      this.showPreloader = false;
    }, 400);
  }
  static \u0275fac = function LoaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderComponent, selectors: [["app-loader"]], inputs: { icon: "icon", className: "className" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"], [1, "loading-container"], [1, "loading"], ["id", "loading-icon"], ["alt", "", 3, "src"]], template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, LoaderComponent_div_0_Template, 5, 4, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.showPreloader);
    }
  }, dependencies: [NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderComponent, [{
    type: Component,
    args: [{ selector: "app-loader", imports: [NgIf], template: `<div *ngIf="showPreloader" class="preloader {{className ?? ''}}">
    <div class="loading-container">
        <div class="loading"></div>
        <div id="loading-icon"><img [src]="icon ?? 'assets/img/logo/prelodaer.png'" alt=""></div>
    </div>
</div>` }]
  }], null, { icon: [{
    type: Input
  }], className: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderComponent, { className: "LoaderComponent", filePath: "src/app/components/loader/loader.component.ts", lineNumber: 10 });
})();

// src/app/core/directives/sticky-scroll.directive.ts
var StickyScrollDirective = class _StickyScrollDirective {
  isSticky = false;
  onWindowScroll() {
    const scroll = window.scrollY || window.pageYOffset;
    this.isSticky = scroll > 1;
  }
  static \u0275fac = function StickyScrollDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StickyScrollDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _StickyScrollDirective, selectors: [["", "stickyScroll", ""]], hostVars: 2, hostBindings: function StickyScrollDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function StickyScrollDirective_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, \u0275\u0275resolveWindow);
    }
    if (rf & 2) {
      \u0275\u0275classProp("sticky", ctx.isSticky);
    }
  } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StickyScrollDirective, [{
    type: Directive,
    args: [{
      selector: "[stickyScroll]",
      standalone: true
    }]
  }], null, { isSticky: [{
    type: HostBinding,
    args: ["class.sticky"]
  }], onWindowScroll: [{
    type: HostListener,
    args: ["window:scroll", []]
  }] });
})();

// src/app/components/mobile-menu/data.ts
var menuItems = [
  {
    "title": "Home",
    "link": "#",
    "isOpen": false,
    "subMenu": [
      {
        title: "Multiple page",
        subMenu: [
          { "title": "Home One", "link": "/home-1" },
          { "title": "Home Two", "link": "/home-2" },
          { "title": "Home Three", "link": "/home-3" },
          { "title": "Home Four", "link": "/home-4" }
        ]
      },
      {
        title: "Landing page",
        subMenu: [
          { "title": "Home One", "link": "/home-single-1" },
          { "title": "Home Two", "link": "/home-single-2" },
          { "title": "Home Three", "link": "/home-single-3" },
          { "title": "Home Four", "link": "/home-single-4" }
        ]
      }
    ]
  },
  {
    "title": "About",
    "link": "/about"
  },
  {
    "title": "Services",
    "isOpen": false,
    "link": "#",
    "subMenu": [
      { "title": "Service One", "link": "/services/one" },
      { "title": "Service Left", "link": "/services/left" },
      { "title": "Service Right", "link": "/services/right" },
      { "title": "Service Single", "link": "/services/single" }
    ]
  },
  {
    "title": "Blogs",
    "link": "#",
    "isOpen": false,
    "subMenu": [
      { "title": "Blog One", "link": "/blogs/one" },
      { "title": "Blog Sidebar", "link": "/blogs/sidebar" },
      { "title": "Blog Left", "link": "/blogs/left" },
      { "title": "Blog Right", "link": "/blogs/right" },
      { "title": "Blog Single", "link": "/blogs/single" }
    ]
  },
  {
    "title": "Pages",
    "link": "#",
    "isOpen": false,
    "subMenu": [
      { "title": "Case Study One", "link": "/case-study-1" },
      { "title": "Case Study Left", "link": "/case-study-left" },
      { "title": "Case Study Right", "link": "/case-study-Right" },
      { "title": "Case Study Single", "link": "/case-study-single" },
      { "title": "Our Team", "link": "/our-team" },
      { "title": "Pricing Plan", "link": "/pricing-plan" },
      { "title": "Testimonials", "link": "/testimonials" },
      { "title": "FAQ", "link": "/faq" },
      { "title": "404", "link": "/404" }
    ]
  },
  {
    "title": "ContactUs",
    "link": "/contact-us"
  }
];

// src/app/components/mobile-menu/mobile-nav-item/mobile-nav-item.component.ts
var _c0 = (a0) => ({ "has-sub hash-has-sub": a0 });
var _c1 = (a0) => ({ "submenu-opened": a0 });
var _c2 = (a0) => ({ "open-sub": a0 });
var _c3 = (a0) => ({ "display": a0 });
function MobileNavItemComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275listener("click", function MobileNavItemComponent_span_3_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSubMenu(ctx_r1.item, $event));
    });
    \u0275\u0275element(1, "em");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c1, ctx_r1.item.isOpen));
  }
}
function MobileNavItemComponent_ul_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-mobile-nav-item", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const subItem_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("item", subItem_r3);
  }
}
function MobileNavItemComponent_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 5);
    \u0275\u0275template(1, MobileNavItemComponent_ul_4_ng_container_1_Template, 2, 1, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c2, ctx_r1.item.isOpen))("ngStyle", \u0275\u0275pureFunction1(5, _c3, ctx_r1.item.isOpen ? "block" : "none"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.item.subMenu);
  }
}
var MobileNavItemComponent = class _MobileNavItemComponent {
  item;
  toggleSubMenu(item, event) {
    if (event)
      event.stopPropagation();
    item.isOpen = !item.isOpen;
  }
  static \u0275fac = function MobileNavItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MobileNavItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MobileNavItemComponent, selectors: [["app-mobile-nav-item"]], inputs: { item: "item" }, decls: 5, vars: 9, consts: [[3, "ngClass"], [3, "click", "routerLink"], ["class", "submenu-button", 3, "ngClass", "click", 4, "ngIf"], ["class", "sub-menu", 3, "ngClass", "ngStyle", 4, "ngIf"], [1, "submenu-button", 3, "click", "ngClass"], [1, "sub-menu", 3, "ngClass", "ngStyle"], [4, "ngFor", "ngForOf"], [3, "item"]], template: function MobileNavItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "li", 0)(1, "a", 1);
      \u0275\u0275listener("click", function MobileNavItemComponent_Template_a_click_1_listener() {
        return ctx.toggleSubMenu(ctx.item);
      });
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, MobileNavItemComponent_span_3_Template, 2, 3, "span", 2)(4, MobileNavItemComponent_ul_4_Template, 2, 7, "ul", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c0, ctx.item.isOpen));
      \u0275\u0275advance();
      \u0275\u0275classProp("hash-nav", ctx.item.link === "#");
      \u0275\u0275property("routerLink", ctx.item.link);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item.title, " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.item.subMenu);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.item.subMenu && ctx.item.isOpen);
    }
  }, dependencies: [_MobileNavItemComponent, CommonModule, NgClass, NgForOf, NgIf, NgStyle, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileNavItemComponent, [{
    type: Component,
    args: [{ selector: "app-mobile-nav-item", imports: [CommonModule, RouterLink], template: `<li [ngClass]="{ 'has-sub hash-has-sub': item.isOpen }">
    <a [routerLink]="item.link" (click)="toggleSubMenu(item)" [class.hash-nav]="item.link === '#'">
        {{ item.title }}
    </a>

    <span *ngIf="item.subMenu" class="submenu-button" [ngClass]="{ 'submenu-opened': item.isOpen }"
        (click)="toggleSubMenu(item, $event)">
        <em></em>
    </span>

    <ul *ngIf="item.subMenu && item.isOpen" class="sub-menu" [ngClass]="{ 'open-sub': item.isOpen }"
        [ngStyle]="{ 'display': item.isOpen ? 'block' : 'none' }">
        <ng-container *ngFor="let subItem of item.subMenu;">
            <app-mobile-nav-item [item]="subItem"></app-mobile-nav-item>
        </ng-container>
    </ul>
</li>` }]
  }], null, { item: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MobileNavItemComponent, { className: "MobileNavItemComponent", filePath: "src/app/components/mobile-menu/mobile-nav-item/mobile-nav-item.component.ts", lineNumber: 17 });
})();

// src/app/components/mobile-menu/mobile-menu.component.ts
var _c02 = (a0) => ({ "mobile-menu-active": a0 });
function MobileMenuComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-mobile-nav-item", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("item", item_r1);
  }
}
var MobileMenuComponent = class _MobileMenuComponent {
  isMenuOpen = false;
  mobileHeaderClass;
  mobileSidebarClass;
  mobileLogo;
  btnClass;
  menuItems = [];
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  ngOnInit() {
    this.menuItems = menuItems;
  }
  toggleSubMenu(item, event) {
    if (event) {
      event.stopPropagation();
    }
    if (item.subMenu) {
      item.isOpen = !item.isOpen;
    }
  }
  static \u0275fac = function MobileMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MobileMenuComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MobileMenuComponent, selectors: [["app-mobile-menu"]], inputs: { mobileHeaderClass: "mobileHeaderClass", mobileSidebarClass: "mobileSidebarClass", mobileLogo: "mobileLogo", btnClass: "btnClass" }, decls: 66, vars: 14, consts: [[1, "container-fluid"], [1, "col-12"], [1, "mobile-header-elements"], [1, "mobile-logo"], ["routerLink", "/home-1"], ["alt", "", 3, "src"], [1, "mobile-nav-icon", "dots-menu", 3, "click"], [1, "fa-solid", "fa-bars"], [3, "ngClass"], [1, "logosicon-area"], [1, "logos"], [1, "menu-close", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "mobile-nav", "mobile-nav1"], [1, "mobile-nav-list", "nav-list1"], [4, "ngFor", "ngForOf"], [1, "allmobilesection"], ["routerLink", "/contact-us"], [1, "fa-solid", "fa-arrow-right"], [1, "single-footer"], [1, "footer1-contact-info"], [1, "contact-info-single"], [1, "contact-info-icon"], [1, "fa-solid", "fa-phone-volume"], [1, "contact-info-text"], ["href", "tel:+3(924)4596512"], [1, "fa-solid", "fa-envelope"], ["href", "mailto:info@example.com"], [1, "fa-solid", "fa-location-dot"], [1, "social-links-mobile-menu"], ["href", "javascript:void(0)"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-linkedin-in"], [1, "fa-brands", "fa-youtube"], [3, "item"]], template: function MobileMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "a", 4);
      \u0275\u0275element(6, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6);
      \u0275\u0275listener("click", function MobileMenuComponent_Template_div_click_7_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275element(8, "i", 7);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "div", 10);
      \u0275\u0275element(12, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 11);
      \u0275\u0275listener("click", function MobileMenuComponent_Template_div_click_13_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275element(14, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 13)(16, "ul", 14);
      \u0275\u0275template(17, MobileMenuComponent_ng_container_17_Template, 2, 1, "ng-container", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 16)(19, "a", 17);
      \u0275\u0275text(20, "Get Started ");
      \u0275\u0275element(21, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 19)(23, "h3");
      \u0275\u0275text(24, "Contact Info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 20)(26, "div", 21)(27, "div", 22);
      \u0275\u0275element(28, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 24)(30, "a", 25);
      \u0275\u0275text(31, "+3(924)4596512");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 21)(33, "div", 22);
      \u0275\u0275element(34, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 24)(36, "a", 27);
      \u0275\u0275text(37, "info@example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 19)(39, "h3");
      \u0275\u0275text(40, "Our Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 21)(42, "div", 22);
      \u0275\u0275element(43, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 24)(45, "a", 27);
      \u0275\u0275text(46, "55 East Birchwood Ave.Brooklyn, ");
      \u0275\u0275element(47, "br");
      \u0275\u0275text(48, " New York 11201,United States");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(49, "div", 19)(50, "h3");
      \u0275\u0275text(51, "Social Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 29)(53, "ul")(54, "li")(55, "a", 30);
      \u0275\u0275element(56, "i", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "li")(58, "a", 30);
      \u0275\u0275element(59, "i", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "li")(61, "a", 30);
      \u0275\u0275element(62, "i", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "li")(64, "a", 30);
      \u0275\u0275element(65, "i", 34);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classMapInterpolate1("mobile-header ", ctx.mobileHeaderClass, " d-block d-lg-none");
      \u0275\u0275advance(6);
      \u0275\u0275property("src", ctx.mobileLogo, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(3);
      \u0275\u0275classMapInterpolate1("mobile-sidebar ", ctx.mobileSidebarClass, "");
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c02, ctx.isMenuOpen));
      \u0275\u0275advance(3);
      \u0275\u0275property("src", ctx.mobileLogo, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.menuItems);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.btnClass);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, MobileNavItemComponent, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileMenuComponent, [{
    type: Component,
    args: [{ selector: "app-mobile-menu", imports: [CommonModule, MobileNavItemComponent, RouterLink], template: `<div class="mobile-header {{mobileHeaderClass}} d-block d-lg-none">
    <div class="container-fluid">
      <div class="col-12">
        <div class="mobile-header-elements">
          <div class="mobile-logo">
            <a routerLink="/home-1"><img [src]="mobileLogo" alt=""></a>
          </div>
          <div class="mobile-nav-icon dots-menu" (click)="toggleMenu()">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="mobile-sidebar {{mobileSidebarClass}}" [ngClass]="{ 'mobile-menu-active': isMenuOpen }">
    <div class="logosicon-area">
      <div class="logos">
        <img [src]="mobileLogo" alt="">
      </div>
      <div class="menu-close" (click)="closeMenu()">
        <i class="fa-solid fa-xmark"></i>
      </div>
     </div>
    <div class="mobile-nav mobile-nav1">
      <ul class="mobile-nav-list nav-list1">
        <ng-container *ngFor="let item of menuItems;">
            <app-mobile-nav-item [item]="item"></app-mobile-nav-item>
          </ng-container>
      </ul>
  
      <div class="allmobilesection">
        <a routerLink="/contact-us"  [class]="btnClass">Get Started <i class="fa-solid fa-arrow-right"></i></a>
        <div class="single-footer">
          <h3>Contact Info</h3>
          <div class="footer1-contact-info">
            <div class="contact-info-single">
              <div class="contact-info-icon">
                <i class="fa-solid fa-phone-volume"></i>
              </div>
              <div class="contact-info-text">
                <a href="tel:+3(924)4596512">+3(924)4596512</a>
              </div>
            </div>
  
            <div class="contact-info-single">
              <div class="contact-info-icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div class="contact-info-text">
                <a href="mailto:info@example.com">info&#64;example.com</a>
              </div>
            </div>
  
            <div class="single-footer">
              <h3>Our Location</h3>
              
              <div class="contact-info-single">
                <div class="contact-info-icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div class="contact-info-text">
                  <a href="mailto:info@example.com" >55 East Birchwood Ave.Brooklyn, <br> New York 11201,United States</a>
                </div>
              </div>
  
            </div>
            <div class="single-footer">
              <h3>Social Links</h3>
              
              <div class="social-links-mobile-menu">
                <ul>
                  <li><a href="javascript:void(0)"><i class="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="javascript:void(0)"><i class="fa-brands fa-instagram"></i></a></li>
                  <li><a href="javascript:void(0)"><i class="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a href="javascript:void(0)"><i class="fa-brands fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
  </div>` }]
  }], null, { mobileHeaderClass: [{
    type: Input
  }], mobileSidebarClass: [{
    type: Input
  }], mobileLogo: [{
    type: Input
  }], btnClass: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MobileMenuComponent, { className: "MobileMenuComponent", filePath: "src/app/components/mobile-menu/mobile-menu.component.ts", lineNumber: 20 });
})();

// src/app/components/topbar/topbar.component.ts
function TopbarComponent_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Electricity Service In Losangle City.\xA0Get Appointment Today");
    \u0275\u0275elementEnd();
  }
}
function TopbarComponent_li_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r1.link);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.title);
  }
}
function TopbarComponent_li_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r2.link);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.title);
  }
}
var TopbarComponent = class _TopbarComponent {
  isActive = false;
  headerClass;
  mobileHeaderClass;
  mobileLogo;
  mobileSidebarClass;
  btnClass;
  logo;
  isAlert;
  programasMenuItems = [
    { title: "Todos los programas", link: "/cursos" },
    { title: "Cursos", link: "/cursos" },
    { title: "Diplomados", link: "/cursos" },
    { title: "Posgrados", link: "/cursos" },
    { title: "Formaci\xF3n continua", link: "/cursos" }
  ];
  institucionalMenuItems = [
    { title: "Acreditaci\xF3n", link: "/nosotros" },
    { title: "Docentes", link: "/docentes" },
    { title: "Noticias", link: "/noticias" },
    { title: "Preguntas frecuentes", link: "/faq" }
  ];
  static \u0275fac = function TopbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopbarComponent, selectors: [["app-topbar"]], inputs: { headerClass: "headerClass", mobileHeaderClass: "mobileHeaderClass", mobileLogo: "mobileLogo", mobileSidebarClass: "mobileSidebarClass", btnClass: "btnClass", logo: "logo", isAlert: "isAlert" }, decls: 41, vars: 13, consts: [["stickyScroll", "", "id", "header"], ["class", "header-pera", 4, "ngIf"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "header-elements"], [1, "site-logo"], ["routerLink", "/home-1"], ["alt", "", 3, "src"], [1, "main-menu"], ["routerLink", "/"], ["routerLink", "/nosotros"], ["href", "javascript:void(0)"], [1, "fa-solid", "fa-angle-down"], [1, "dropdown-padding"], [4, "ngFor", "ngForOf"], ["routerLink", "/docentes"], ["routerLink", "/contacto"], [1, "btn-area"], ["routerLink", "/preinscripcion"], [1, "fa-solid", "fa-arrow-right"], [3, "btnClass", "mobileHeaderClass", "mobileLogo", "mobileSidebarClass"], [1, "header-pera"], [3, "routerLink"]], template: function TopbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header")(1, "div", 0);
      \u0275\u0275template(2, TopbarComponent_p_2_Template, 2, 0, "p", 1);
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "a", 7);
      \u0275\u0275element(9, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 9)(11, "ul")(12, "li")(13, "a", 10);
      \u0275\u0275text(14, "Inicio");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "li")(16, "a", 11);
      \u0275\u0275text(17, "Nosotros");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 12);
      \u0275\u0275text(20, "Programas ");
      \u0275\u0275element(21, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "ul", 14);
      \u0275\u0275template(23, TopbarComponent_li_23_Template, 3, 2, "li", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "li")(25, "a", 16);
      \u0275\u0275text(26, "Docentes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "li")(28, "a", 12);
      \u0275\u0275text(29, "Institucional ");
      \u0275\u0275element(30, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "ul", 14);
      \u0275\u0275template(32, TopbarComponent_li_32_Template, 3, 2, "li", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "li")(34, "a", 17);
      \u0275\u0275text(35, "Contacto");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 18)(37, "a", 19);
      \u0275\u0275text(38, "Pre-inscripci\xF3n ");
      \u0275\u0275element(39, "i", 20);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275element(40, "app-mobile-menu", 21);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classMapInterpolate1("header-area ", ctx.headerClass, " header header-sticky  d-none d-lg-block");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAlert);
      \u0275\u0275advance(7);
      \u0275\u0275property("src", ctx.logo, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.programasMenuItems);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.institucionalMenuItems);
      \u0275\u0275advance(5);
      \u0275\u0275classMap(ctx.btnClass);
      \u0275\u0275advance(3);
      \u0275\u0275property("btnClass", ctx.btnClass)("mobileHeaderClass", ctx.mobileHeaderClass)("mobileLogo", ctx.mobileLogo)("mobileSidebarClass", ctx.mobileSidebarClass);
    }
  }, dependencies: [MobileMenuComponent, CommonModule, NgForOf, NgIf, StickyScrollDirective, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopbarComponent, [{
    type: Component,
    args: [{ selector: "app-topbar", imports: [MobileMenuComponent, CommonModule, StickyScrollDirective, RouterLink, CommonModule], template: '<header>\n    <div class="header-area {{headerClass}} header header-sticky  d-none d-lg-block" stickyScroll id="header">\n        <p *ngIf="isAlert" class="header-pera">Electricity Service In Losangle City.\xA0Get Appointment Today</p>\n        <div class="container">\n            <div class="row">\n                <div class="col-lg-12">\n                    <div class="header-elements">\n                        <div class="site-logo">\n                            <a routerLink="/home-1"><img [src]="logo" alt=""></a>\n                        </div>\n                        <div class="main-menu">\n                            <ul>\n                                <li><a routerLink="/">Inicio</a></li>\n                                <li><a routerLink="/nosotros">Nosotros</a></li>\n                                <li><a href="javascript:void(0)">Programas <i class="fa-solid fa-angle-down"></i></a>\n                                    <ul class="dropdown-padding">\n                                        <li *ngFor="let item of programasMenuItems">\n                                            <a [routerLink]="item.link">{{item.title}}</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                                <li><a routerLink="/docentes">Docentes</a></li>\n                                <li><a href="javascript:void(0)">Institucional <i class="fa-solid fa-angle-down"></i></a>\n                                    <ul class="dropdown-padding">\n                                        <li *ngFor="let item of institucionalMenuItems">\n                                            <a [routerLink]="item.link">{{item.title}}</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                                <li><a routerLink="/contacto">Contacto</a></li>\n                            </ul>\n                        </div>\n                        <div class="btn-area">\n                            <a routerLink="/preinscripcion" [class]="btnClass">Pre-inscripci\xF3n <i\n                                    class="fa-solid fa-arrow-right"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n\n<app-mobile-menu [btnClass]="btnClass" [mobileHeaderClass]="mobileHeaderClass" [mobileLogo]="mobileLogo"\n    [mobileSidebarClass]="mobileSidebarClass" />' }]
  }], null, { headerClass: [{
    type: Input
  }], mobileHeaderClass: [{
    type: Input
  }], mobileLogo: [{
    type: Input
  }], mobileSidebarClass: [{
    type: Input
  }], btnClass: [{
    type: Input
  }], logo: [{
    type: Input
  }], isAlert: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopbarComponent, { className: "TopbarComponent", filePath: "src/app/components/topbar/topbar.component.ts", lineNumber: 13 });
})();

export {
  FooterComponent,
  LoaderComponent,
  StickyScrollDirective,
  TopbarComponent
};
//# sourceMappingURL=chunk-VJJDO76P.js.map
