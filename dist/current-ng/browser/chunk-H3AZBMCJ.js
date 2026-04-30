import {
  PaginationComponent
} from "./chunk-3VWFYYWI.js";
import {
  BreadcrumbComponent
} from "./chunk-3LW2JTQP.js";
import {
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem,
  NgbAccordionModule
} from "./chunk-6V3XHZEX.js";
import {
  RouterLink
} from "./chunk-FVGVLSI5.js";
import "./chunk-RAPM3SJS.js";
import {
  CommonModule,
  Component,
  Input,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2UT764MQ.js";

// src/app/views/case-studies/data.ts
var caseStudies = [
  {
    image: "assets/img/all-images/case-img1.png",
    title: "Power Navigating",
    subtitle: "Electricity Solutions"
  },
  {
    image: "assets/img/all-images/case-img2.png",
    title: "Voltage Vision",
    subtitle: "Voltage Vision"
  },
  {
    image: "assets/img/all-images/case-img3.png",
    title: "Wizard Unveiling",
    subtitle: "Wizard Unveiling"
  },
  {
    image: "assets/img/all-images/case-img10.png",
    title: "Current Chronicles",
    subtitle: "Electricity Solutions"
  },
  {
    image: "assets/img/all-images/case-img11.png",
    title: "Bright Sparks",
    subtitle: "Electricity Solutions"
  },
  {
    image: "assets/img/all-images/case-img12.png",
    title: "Electrical Endeavors",
    subtitle: "Electricity Solutions"
  },
  {
    image: "assets/img/all-images/case-img13.png",
    title: "Power Portraits",
    subtitle: "Electricity Solutions"
  },
  {
    image: "assets/img/all-images/case-img14.png",
    title: "Energy Evolution",
    subtitle: "Electricity Solutions"
  },
  {
    image: "assets/img/all-images/case-img15.png",
    title: "Eco-Electric Epics",
    subtitle: "Electricity Solutions"
  }
];
var caseFaqs = [
  {
    question: "How can I contact customer support if I have further questions?",
    answer: "We're your trusted partner in all things electrical. From initial consultation to ongoing support, we're committed to providing you with the highest level.",
    duration: 800
  },
  {
    question: "Do you offer any discounts or promotions for new customers?",
    answer: "We're your trusted partner in all things electrical. From initial consultation to ongoing support, we're committed to providing you with the highest level.",
    duration: 1e3
  },
  {
    question: "How long does it take to set up electricity services with your company?",
    answer: "We're your trusted partner in all things electrical. From initial consultation to ongoing support, we're committed to providing you with the highest level.",
    duration: 1200
  },
  {
    question: "Can I switch to your services if I'm already with another provider?",
    answer: "We're your trusted partner in all things electrical. From initial consultation to ongoing support, we're committed to providing you with the highest level.",
    duration: 1400
  },
  {
    question: "What happens if there's a power outage?",
    answer: "We're your trusted partner in all things electrical. From initial consultation to ongoing support, we're committed to providing you with the highest level.",
    duration: 1400
  },
  {
    question: "What types of electricity plans do you offer?",
    answer: "We're your trusted partner in all things electrical. From initial consultation to ongoing support, we're committed to providing you with the highest level.",
    duration: 800
  }
];

// src/app/components/cards/case-study-card/case-study-card.component.ts
var CaseStudyCardComponent = class _CaseStudyCardComponent {
  case;
  static \u0275fac = function CaseStudyCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CaseStudyCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaseStudyCardComponent, selectors: [["app-case-study-card"]], inputs: { case: "case" }, decls: 13, vars: 3, consts: [[1, "case-author-boxarea"], [1, "imges"], ["alt", "", 3, "src"], [1, "case-content"], [1, "text"], ["routerLink", "/case-single"], [1, "icons"], [1, "fa-solid", "fa-arrow-right"]], template: function CaseStudyCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6)(10, "a", 5)(11, "span");
      \u0275\u0275element(12, "i", 7);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("src", ctx.case.image, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.case.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.case.subtitle);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaseStudyCardComponent, [{
    type: Component,
    args: [{ selector: "app-case-study-card", imports: [RouterLink], template: '<div class="case-author-boxarea">\n    <div class="imges">\n        <img [src]="case.image" alt="">\n    </div>\n    <div class="case-content">\n        <div class="text">\n            <p>{{case.title}}</p>\n            <a routerLink="/case-single">{{case.subtitle}}</a>\n        </div>\n        <div class="icons">\n            <a routerLink="/case-single"><span><i class="fa-solid fa-arrow-right"></i></span></a>\n        </div>\n    </div>\n</div>' }]
  }], null, { case: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaseStudyCardComponent, { className: "CaseStudyCardComponent", filePath: "src/app/components/cards/case-study-card/case-study-card.component.ts", lineNumber: 11 });
})();

// src/app/views/case-studies/case-1/case-1.component.ts
function Case1Component_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "app-case-study-card", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const case_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("case", case_r1);
  }
}
var Case1Component = class _Case1Component {
  caseStudies = caseStudies;
  static \u0275fac = function Case1Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Case1Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Case1Component, selectors: [["app-case-1"]], decls: 15, vars: 1, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-7", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["title", "Case Studies"], [1, "casestudy-inner-section-area", "sp1"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-12"], [1, "col-lg-4", "col-md-6"], [3, "case"]], template: function Case1Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Case Studies");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 3);
      \u0275\u0275template(12, Case1Component_div_12_Template, 2, 1, "div", 8);
      \u0275\u0275elementStart(13, "div", 9);
      \u0275\u0275element(14, "app-pagination");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.caseStudies);
    }
  }, dependencies: [BreadcrumbComponent, CommonModule, NgForOf, CaseStudyCardComponent, PaginationComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Case1Component, [{
    type: Component,
    args: [{ selector: "app-case-1", imports: [BreadcrumbComponent, CommonModule, CaseStudyCardComponent, PaginationComponent], template: '<div class="hero1-section-area about-bg-area">\n    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-7 m-auto">\n                <div class="hero-heading-area heading1 text-center">\n                    <h1>Case Studies</h1>\n                    <app-breadcrumb title="Case Studies" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="casestudy-inner-section-area sp1">\n    <div class="container">\n        <div class="row">\n            <div *ngFor="let case of caseStudies" class="col-lg-4 col-md-6">\n                <app-case-study-card [case]="case" />\n            </div>\n\n            <div class="col-lg-12">\n                <app-pagination />\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Case1Component, { className: "Case1Component", filePath: "src/app/views/case-studies/case-1/case-1.component.ts", lineNumber: 14 });
})();

// src/app/views/case-studies/components/case-sidebar/case-sidebar.component.ts
var CaseSidebarComponent = class _CaseSidebarComponent {
  static \u0275fac = function CaseSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CaseSidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaseSidebarComponent, selectors: [["app-case-sidebar"]], decls: 83, vars: 0, consts: [[1, "service-leftside"], [1, "service-author-list"], ["href", "javascript:void(0)"], [1, "fa-solid", "fa-arrow-right"], [1, "tags-area"], [1, "helping-area"], [1, "d-lg-block", "d-none"], [1, "btn-area"], ["href", "tel:+917052101786", 1, "header-btn1"], [1, "fa-solid", "fa-phone-volume"], [1, "social-icons"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-linkedin-in"], [1, "fa-brands", "fa-pinterest-p"]], template: function CaseSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
      \u0275\u0275text(3, "Other Case Studies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ul")(5, "li")(6, "a", 2);
      \u0275\u0275text(7, "Voltage Vision ");
      \u0275\u0275element(8, "i", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li")(10, "a", 2);
      \u0275\u0275text(11, "Power Grid Expansion ");
      \u0275\u0275element(12, "i", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li")(14, "a", 2);
      \u0275\u0275text(15, "Best Power and Progress ");
      \u0275\u0275element(16, "i", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 2);
      \u0275\u0275text(19, "Electrifying Results ");
      \u0275\u0275element(20, "i", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "li")(22, "a", 2);
      \u0275\u0275text(23, "Voltage Wave Energy ");
      \u0275\u0275element(24, "i", 3);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "div", 4)(26, "h3");
      \u0275\u0275text(27, "Our Tags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "ul")(29, "li")(30, "a", 2);
      \u0275\u0275text(31, "Electricity ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "li")(33, "a", 2);
      \u0275\u0275text(34, "Creative ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "li")(36, "a", 2);
      \u0275\u0275text(37, "Design ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "ul")(39, "li")(40, "a", 2);
      \u0275\u0275text(41, "Art ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 2);
      \u0275\u0275text(44, "Development ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 2);
      \u0275\u0275text(47, "Image ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "ul")(49, "li")(50, "a", 2);
      \u0275\u0275text(51, "People ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 2);
      \u0275\u0275text(54, "Tech ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "li")(56, "a", 2);
      \u0275\u0275text(57, "3D Images ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "div", 5)(59, "h3");
      \u0275\u0275text(60, "If You Need Any Help ");
      \u0275\u0275element(61, "br", 6);
      \u0275\u0275text(62, " Contact With Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 7)(64, "a", 8);
      \u0275\u0275element(65, "i", 9);
      \u0275\u0275text(66, "+91 705 2101 786");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "div", 10)(68, "h3");
      \u0275\u0275text(69, "Follow Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "ul")(71, "li")(72, "a", 2);
      \u0275\u0275element(73, "i", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li")(75, "a", 2);
      \u0275\u0275element(76, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "li")(78, "a", 2);
      \u0275\u0275element(79, "i", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li")(81, "a", 2);
      \u0275\u0275element(82, "i", 14);
      \u0275\u0275elementEnd()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaseSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-case-sidebar", imports: [], template: '<div class="service-leftside">\n    <div class="service-author-list">\n        <h3>Other Case Studies</h3>\n        <ul>\n            <li><a href="javascript:void(0)">Voltage Vision <i class="fa-solid fa-arrow-right"></i></a></li>\n            <li><a href="javascript:void(0)">Power Grid Expansion <i class="fa-solid fa-arrow-right"></i></a></li>\n            <li><a href="javascript:void(0)">Best Power and Progress <i class="fa-solid fa-arrow-right"></i></a></li>\n            <li><a href="javascript:void(0)">Electrifying Results <i class="fa-solid fa-arrow-right"></i></a></li>\n            <li><a href="javascript:void(0)">Voltage Wave Energy <i class="fa-solid fa-arrow-right"></i></a></li>\n        </ul>\n    </div>\n\n    <div class="tags-area">\n        <h3>Our Tags</h3>\n        <ul>\n            <li><a href="javascript:void(0)">Electricity </a></li>\n            <li><a href="javascript:void(0)">Creative </a></li>\n            <li><a href="javascript:void(0)">Design </a></li>\n        </ul>\n        <ul>\n            <li><a href="javascript:void(0)">Art </a></li>\n            <li><a href="javascript:void(0)">Development </a></li>\n            <li><a href="javascript:void(0)">Image </a></li>\n        </ul>\n        <ul>\n            <li><a href="javascript:void(0)">People </a></li>\n            <li><a href="javascript:void(0)">Tech </a></li>\n            <li><a href="javascript:void(0)">3D Images </a></li>\n        </ul>\n    </div>\n\n    <div class="helping-area">\n        <h3>If You Need Any Help <br class="d-lg-block d-none"> Contact With Us</h3>\n        <div class="btn-area">\n            <a href="tel:+917052101786" class="header-btn1"><i class="fa-solid fa-phone-volume"></i>+91 705 2101 786</a>\n        </div>\n    </div>\n\n    <div class="social-icons">\n        <h3>Follow Us</h3>\n        <ul>\n            <li><a href="javascript:void(0)"><i class="fa-brands fa-facebook-f"></i></a></li>\n            <li><a href="javascript:void(0)"><i class="fa-brands fa-instagram"></i></a></li>\n            <li><a href="javascript:void(0)"><i class="fa-brands fa-linkedin-in"></i></a></li>\n            <li><a href="javascript:void(0)"><i class="fa-brands fa-pinterest-p"></i></a></li>\n        </ul>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaseSidebarComponent, { className: "CaseSidebarComponent", filePath: "src/app/views/case-studies/components/case-sidebar/case-sidebar.component.ts", lineNumber: 9 });
})();

// src/app/views/case-studies/components/case-content/case-content.component.ts
function CaseContentComponent_For_59_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 16);
  }
}
function CaseContentComponent_For_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h2", 11)(2, "button", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, CaseContentComponent_For_59_div_7_Template, 1, 0, "div", 15);
  }
  if (rf & 2) {
    const faq_r1 = ctx.$implicit;
    const \u0275$index_102_r2 = ctx.$index;
    const \u0275$count_102_r3 = ctx.$count;
    \u0275\u0275property("collapsed", \u0275$index_102_r2 === 0 ? false : true);
    \u0275\u0275attribute("data-aos-duration", faq_r1.duration);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", faq_r1.question, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r1.answer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(\u0275$index_102_r2 === \u0275$count_102_r3 - 1));
  }
}
var CaseContentComponent = class _CaseContentComponent {
  faqs = caseFaqs;
  static \u0275fac = function CaseContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CaseContentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaseContentComponent, selectors: [["app-case-content"]], decls: 60, vars: 1, consts: [[1, "img1"], ["src", "assets/img/all-images/case-img16.png", "alt", ""], [1, "space32"], [1, "space16"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-6"], ["src", "assets/img/all-images/service-img14.png", "alt", ""], ["src", "assets/img/icons/check4.svg", "alt", ""], [1, "faq-auhtor-area1"], ["ngbAccordion", "", "id", "accordionFlushExample", 1, "accordion-flush", 3, "closeOthers"], ["ngbAccordionItem", "", "data-aos", "fade-left", 3, "collapsed"], ["ngbAccordionHeader", ""], ["ngbAccordionButton", "", "type", "button"], ["id", "flush-collapseOne", "ngbAccordionCollapse", "", "data-bs-parent", "#accordionFlushExample"], ["ngbAccordionBody", ""], ["class", "space20", 4, "ngIf"], [1, "space20"]], template: function CaseContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "h3");
      \u0275\u0275text(4, "Voltage Vision");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Explore our electricity services through real-life success stories showcase our case studies. Each case study delves into the unique challenges faced by our clients and how our tailored solutions helped them overcome these obstacles.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "From residential homes to large-scale industrial projects, our case studies highlight diverse range of services we offer and the positive impact they have had on our");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "div", 3);
      \u0275\u0275elementStart(10, "h3");
      \u0275\u0275text(11, "Experiences Tales of Energy Transformation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p");
      \u0275\u0275text(13, "Dive into our case studies to see how we've delivered reliable, efficient, and innovative electricity solutions, empowering our clients to achieve their goals and drive progress in their communities lives and businesses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p");
      \u0275\u0275text(15, "Whether it's optimizing energy efficiency, integrating renewable energy sources enhancing grid resilience, our case studies showcase the tangible impact ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "div", 3);
      \u0275\u0275elementStart(17, "h3");
      \u0275\u0275text(18, "Epics Stories of Sustainability");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p");
      \u0275\u0275text(20, "Embark on a journey of discovery with our electricity services through our collection of insightful case studies. Each case study unveils a unique narrative, depicting the challenges faced by our clients and the innovative solutions we provided");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p");
      \u0275\u0275text(22, "Delve into these stories to witness firsthand how we have transformed challenges into opportunities, delivering reliable, efficient, and sustainable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 4)(24, "div", 5);
      \u0275\u0275element(25, "div", 2);
      \u0275\u0275elementStart(26, "div", 0);
      \u0275\u0275element(27, "img", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 5);
      \u0275\u0275element(29, "div", 2);
      \u0275\u0275elementStart(30, "div", 0)(31, "ul")(32, "li");
      \u0275\u0275element(33, "img", 7);
      \u0275\u0275text(34, "Facers voluptatum meatus, volutes. ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "li", 3);
      \u0275\u0275elementStart(36, "li");
      \u0275\u0275element(37, "img", 7);
      \u0275\u0275text(38, "Habitant seeped corrupts fuse culpa.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "li", 3);
      \u0275\u0275elementStart(40, "li");
      \u0275\u0275element(41, "img", 7);
      \u0275\u0275text(42, "Tempore Atenean debits, Atenean. ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "li", 3);
      \u0275\u0275elementStart(44, "li");
      \u0275\u0275element(45, "img", 7);
      \u0275\u0275text(46, "Quisqueya venerates fringillid bland.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(47, "li", 3);
      \u0275\u0275elementStart(48, "li");
      \u0275\u0275element(49, "img", 7);
      \u0275\u0275text(50, "Bibendum corrupts quake chillum. ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(51, "li", 3);
      \u0275\u0275elementStart(52, "li");
      \u0275\u0275element(53, "img", 7);
      \u0275\u0275text(54, "Habitant seeped corrupts fuse culpa.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(55, "div", 2);
      \u0275\u0275elementStart(56, "div", 8)(57, "div", 9);
      \u0275\u0275repeaterCreate(58, CaseContentComponent_For_59_Template, 8, 5, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(57);
      \u0275\u0275property("closeOthers", true);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.faqs);
    }
  }, dependencies: [NgbAccordionModule, NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionBody, NgbAccordionCollapse, CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaseContentComponent, [{
    type: Component,
    args: [{ selector: "app-case-content", imports: [NgbAccordionModule, CommonModule], template: `<div class="img1">
    <img src="assets/img/all-images/case-img16.png" alt="">
</div>
<div class="space32"></div>
<h3>Voltage Vision</h3>
<p>Explore our electricity services through real-life success stories showcase our case studies.
    Each case study delves into the unique challenges faced by our clients and how our tailored
    solutions helped them overcome these obstacles.</p>
<p>From residential homes to large-scale industrial projects, our case studies highlight diverse
    range of services we offer and the positive impact they have had on our</p>
<div class="space16"></div>
<h3>Experiences Tales of Energy Transformation</h3>
<p>Dive into our case studies to see how we've delivered reliable, efficient, and innovative
    electricity solutions, empowering our clients to achieve their goals and drive progress in their
    communities lives and businesses</p>
<p>Whether it's optimizing energy efficiency, integrating renewable energy sources enhancing grid
    resilience, our case studies showcase the tangible impact </p>
<div class="space16"></div>
<h3>Epics Stories of Sustainability</h3>
<p>Embark on a journey of discovery with our electricity services through our collection of
    insightful case studies. Each case study unveils a unique narrative, depicting the challenges
    faced by our clients and the innovative solutions we provided</p>
<p>Delve into these stories to witness firsthand how we have transformed challenges into
    opportunities, delivering reliable, efficient, and sustainable</p>
<div class="row align-items-center">
    <div class="col-lg-6 col-md-6">
        <div class="space32"></div>
        <div class="img1">
            <img src="assets/img/all-images/service-img14.png" alt="">
        </div>
    </div>
    <div class="col-lg-6 col-md-6">
        <div class="space32"></div>
        <div class="img1">
            <ul>
                <li><img src="assets/img/icons/check4.svg" alt="">Facers voluptatum meatus, volutes.
                </li>
                <li class="space16"></li>
                <li><img src="assets/img/icons/check4.svg" alt="">Habitant seeped corrupts fuse
                    culpa.</li>
                <li class="space16"></li>
                <li><img src="assets/img/icons/check4.svg" alt="">Tempore Atenean debits, Atenean.
                </li>
                <li class="space16"></li>
                <li><img src="assets/img/icons/check4.svg" alt="">Quisqueya venerates fringillid
                    bland.</li>
                <li class="space16"></li>
                <li><img src="assets/img/icons/check4.svg" alt="">Bibendum corrupts quake chillum.
                </li>
                <li class="space16"></li>
                <li><img src="assets/img/icons/check4.svg" alt="">Habitant seeped corrupts fuse
                    culpa.</li>
            </ul>
        </div>
    </div>
</div>
<div class="space32"></div>

<div class="faq-auhtor-area1">
    <div ngbAccordion class="accordion-flush" [closeOthers]="true" id="accordionFlushExample">
        @for (faq of faqs; track $index;let first=$first;let id=$index;let last=$last) {
        <div ngbAccordionItem [collapsed]="first ? false : true" data-aos="fade-left" [attr.data-aos-duration]="faq.duration">
            <h2 ngbAccordionHeader>
                <button ngbAccordionButton type="button">
                    {{faq.question}}
                </button>
            </h2>
            <div id="flush-collapseOne" ngbAccordionCollapse data-bs-parent="#accordionFlushExample">
                <div ngbAccordionBody>{{faq.answer}}</div>
            </div>
        </div>
        <div *ngIf="!last" class="space20"></div>
        }
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaseContentComponent, { className: "CaseContentComponent", filePath: "src/app/views/case-studies/components/case-content/case-content.component.ts", lineNumber: 12 });
})();

// src/app/views/case-studies/components/more-cases/more-cases.component.ts
function MoreCasesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "app-case-study-card", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const case_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("case", case_r1);
  }
}
var MoreCasesComponent = class _MoreCasesComponent {
  caseStudies = caseStudies;
  static \u0275fac = function MoreCasesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MoreCasesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MoreCasesComponent, selectors: [["app-more-cases"]], decls: 9, vars: 1, consts: [[1, "casestudy-inner-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-6", "m-auto"], [1, "casestudy-header", "heading2", "text-center"], [1, "tg-element-title"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [3, "case"]], template: function MoreCasesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Read More Case Studies");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(7, "div", 2);
      \u0275\u0275template(8, MoreCasesComponent_div_8_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.caseStudies.slice(0, 3));
    }
  }, dependencies: [CommonModule, NgForOf, CaseStudyCardComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MoreCasesComponent, [{
    type: Component,
    args: [{ selector: "app-more-cases", imports: [CommonModule, CaseStudyCardComponent], template: '<div class="casestudy-inner-section-area sp2">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-6 m-auto">\n                <div class="casestudy-header heading2 text-center">\n                    <h2 class="tg-element-title">Read More Case Studies</h2>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div *ngFor="let case of caseStudies.slice(0,3)" class="col-lg-4 col-md-6">\n                <app-case-study-card [case]="case" />\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MoreCasesComponent, { className: "MoreCasesComponent", filePath: "src/app/views/case-studies/components/more-cases/more-cases.component.ts", lineNumber: 12 });
})();

// src/app/views/case-studies/case-left/case-left.component.ts
var CaseLeftComponent = class _CaseLeftComponent {
  static \u0275fac = function CaseLeftComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CaseLeftComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaseLeftComponent, selectors: [["app-case-left"]], decls: 18, vars: 0, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-7", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["subTitle", "Voltage Vision", "title", "Our Service"], [1, "service-leftside-area", "sp8"], [1, "col-lg-4"], [1, "col-lg-8"], [1, "service-rightside-area", "heading2"]], template: function CaseLeftComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Voltage Vision");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 3)(12, "div", 8);
      \u0275\u0275element(13, "app-case-sidebar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9)(15, "div", 10);
      \u0275\u0275element(16, "app-case-content");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(17, "app-more-cases");
    }
  }, dependencies: [BreadcrumbComponent, CaseSidebarComponent, CaseContentComponent, MoreCasesComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaseLeftComponent, [{
    type: Component,
    args: [{ selector: "app-case-left", imports: [BreadcrumbComponent, CaseSidebarComponent, CaseContentComponent, MoreCasesComponent], template: '<div class="hero1-section-area about-bg-area">\n    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-7 m-auto">\n                <div class="hero-heading-area heading1 text-center">\n                    <h1>Voltage Vision</h1>\n                    <app-breadcrumb subTitle="Voltage Vision" title="Our Service" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="service-leftside-area sp8">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-4">\n                <app-case-sidebar />\n            </div>\n            <div class="col-lg-8">\n                <div class="service-rightside-area heading2">\n                    <app-case-content />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-more-cases />' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaseLeftComponent, { className: "CaseLeftComponent", filePath: "src/app/views/case-studies/case-left/case-left.component.ts", lineNumber: 13 });
})();

// src/app/views/case-studies/case-right/case-right.component.ts
var CaseRightComponent = class _CaseRightComponent {
  static \u0275fac = function CaseRightComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CaseRightComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaseRightComponent, selectors: [["app-case-right"]], decls: 18, vars: 0, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-7", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["title", "Voltage Vision"], [1, "service-leftside-area", "sp8"], [1, "col-lg-8"], [1, "service-rightside-area", "heading2", "rightsidebar"], [1, "col-lg-4"]], template: function CaseRightComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Voltage Vision");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 3)(12, "div", 8)(13, "div", 9);
      \u0275\u0275element(14, "app-case-content");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10);
      \u0275\u0275element(16, "app-case-sidebar");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(17, "app-more-cases");
    }
  }, dependencies: [BreadcrumbComponent, CaseContentComponent, CaseSidebarComponent, MoreCasesComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaseRightComponent, [{
    type: Component,
    args: [{ selector: "app-case-right", imports: [BreadcrumbComponent, CaseContentComponent, CaseSidebarComponent, MoreCasesComponent], template: '<div class="hero1-section-area about-bg-area">\n    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-7 m-auto">\n                <div class="hero-heading-area heading1 text-center">\n                    <h1>Voltage Vision</h1>\n                    <app-breadcrumb title="Voltage Vision" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="service-leftside-area sp8">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8">\n                <div class="service-rightside-area heading2 rightsidebar">\n                    <app-case-content />\n                </div>\n            </div>\n            <div class="col-lg-4">\n                <app-case-sidebar />\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-more-cases />' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaseRightComponent, { className: "CaseRightComponent", filePath: "src/app/views/case-studies/case-right/case-right.component.ts", lineNumber: 13 });
})();

// src/app/views/case-studies/case-single/case-single.component.ts
var CaseSingleComponent = class _CaseSingleComponent {
  static \u0275fac = function CaseSingleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CaseSingleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaseSingleComponent, selectors: [["app-case-single"]], decls: 16, vars: 0, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-7", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["title", "Voltage Vision"], [1, "service-leftside-area", "sp8"], [1, "col-lg-8", "m-auto"], [1, "service-rightside-area", "heading2", 2, "padding", "0"]], template: function CaseSingleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Voltage Vision");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 3)(12, "div", 8)(13, "div", 9);
      \u0275\u0275element(14, "app-case-content");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(15, "app-more-cases");
    }
  }, dependencies: [BreadcrumbComponent, CaseContentComponent, MoreCasesComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaseSingleComponent, [{
    type: Component,
    args: [{ selector: "app-case-single", imports: [BreadcrumbComponent, CaseContentComponent, MoreCasesComponent], template: '<div class="hero1-section-area about-bg-area">\n    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-7 m-auto">\n                <div class="hero-heading-area heading1 text-center">\n                    <h1>Voltage Vision</h1>\n                    <app-breadcrumb title="Voltage Vision" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class="service-leftside-area sp8">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8 m-auto">\n                <div class="service-rightside-area heading2" style="padding: 0;">\n                    <app-case-content />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<app-more-cases />' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaseSingleComponent, { className: "CaseSingleComponent", filePath: "src/app/views/case-studies/case-single/case-single.component.ts", lineNumber: 12 });
})();

// src/app/views/case-studies/case-studies.route.ts
var CASE_STUDIES_ROUTES = [
  {
    path: "case-study-1",
    component: Case1Component,
    data: { title: "Case Study One" }
  },
  {
    path: "case-study-left",
    component: CaseLeftComponent,
    data: { title: "Case Study Left" }
  },
  {
    path: "case-study-right",
    component: CaseRightComponent,
    data: { title: "Case Study Right" }
  },
  {
    path: "case-study-single",
    component: CaseSingleComponent,
    data: { title: "Case Study Single" }
  }
];
export {
  CASE_STUDIES_ROUTES
};
//# sourceMappingURL=chunk-H3AZBMCJ.js.map
