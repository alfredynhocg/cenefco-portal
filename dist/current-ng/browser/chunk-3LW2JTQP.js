import {
  RouterLink
} from "./chunk-FVGVLSI5.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2UT764MQ.js";

// src/app/components/breadcrumb/breadcrumb.component.ts
function BreadcrumbComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 1);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.subTitle, " ");
  }
}
var BreadcrumbComponent = class _BreadcrumbComponent {
  title;
  subTitle;
  static \u0275fac = function BreadcrumbComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadcrumbComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BreadcrumbComponent, selectors: [["app-breadcrumb"]], inputs: { title: "title", subTitle: "subTitle" }, decls: 5, vars: 2, consts: [["routerLink", "/home-1", 1, "backline"], [1, "fa-solid", "fa-angle-right"]], template: function BreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275text(1, "Home ");
      \u0275\u0275element(2, "i", 1);
      \u0275\u0275text(3);
      \u0275\u0275template(4, BreadcrumbComponent_Conditional_4_Template, 3, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.title, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.subTitle ? 4 : -1);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbComponent, [{
    type: Component,
    args: [{ selector: "app-breadcrumb", imports: [RouterLink], template: '<a routerLink="/home-1" class="backline">Home <i class="fa-solid fa-angle-right"></i> {{title}} @if (subTitle) {<i\n        class="fa-solid fa-angle-right"></i> <span>{{subTitle}} </span>}</a>' }]
  }], null, { title: [{
    type: Input
  }], subTitle: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BreadcrumbComponent, { className: "BreadcrumbComponent", filePath: "src/app/components/breadcrumb/breadcrumb.component.ts", lineNumber: 10 });
})();

export {
  BreadcrumbComponent
};
//# sourceMappingURL=chunk-3LW2JTQP.js.map
