import {
  NgbPagination,
  NgbPaginationModule
} from "./chunk-6V3XHZEX.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2UT764MQ.js";

// src/app/components/pagination/pagination.component.ts
var PaginationComponent = class _PaginationComponent {
  page = 2;
  static \u0275fac = function PaginationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginationComponent, selectors: [["app-pagination"]], decls: 4, vars: 2, consts: [[1, "pagination-area"], [1, "page"], [1, "pagination"], ["aria-label", "Default pagination", 3, "pageChange", "collectionSize", "page"]], template: function PaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "ul", 2)(3, "ngb-pagination", 3);
      \u0275\u0275twoWayListener("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_3_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.page, $event) || (ctx.page = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("collectionSize", 30);
      \u0275\u0275twoWayProperty("page", ctx.page);
    }
  }, dependencies: [NgbPaginationModule, NgbPagination], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationComponent, [{
    type: Component,
    args: [{ selector: "app-pagination", imports: [NgbPaginationModule], template: '<div class="pagination-area">\n    <div class="page">\n        <ul class="pagination">\n            <ngb-pagination [collectionSize]="30" [(page)]="page" aria-label="Default pagination" />\n        </ul>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "src/app/components/pagination/pagination.component.ts", lineNumber: 10 });
})();

export {
  PaginationComponent
};
//# sourceMappingURL=chunk-3VWFYYWI.js.map
