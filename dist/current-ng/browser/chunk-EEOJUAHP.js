import {
  CarouselComponent,
  CarouselModule,
  CarouselSlideDirective,
  MemberCardComponent,
  PricingCardComponent,
  SlickCarouselComponent,
  SlickCarouselModule,
  SlickItemDirective,
  pricingPlans
} from "./chunk-2VMBGGJ6.js";
import "./chunk-B2FZAM5Q.js";
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
  RouterLink,
  RouterModule
} from "./chunk-FVGVLSI5.js";
import "./chunk-RAPM3SJS.js";
import {
  CommonModule,
  Component,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtrustConstantResourceUrl
} from "./chunk-2UT764MQ.js";

// src/app/views/other-pages/our-team/our-team.component.ts
function OurTeamComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "app-member-card", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("member", member_r1);
  }
}
var OurTeamComponent = class _OurTeamComponent {
  teamMembers = [
    {
      name: "Shoaib Bashir",
      role: "Sales Manager",
      image: "assets/img/all-images/team-img1.png"
    },
    {
      name: "William Thompson",
      role: "Product Manager",
      image: "assets/img/all-images/team-img2.png"
    },
    {
      name: "Reece Toply",
      role: "Team Leader",
      image: "assets/img/all-images/team-img3.png"
    },
    {
      name: "Robert Anderson",
      role: "Sales Manager",
      image: "assets/img/all-images/team-img4.png"
    },
    {
      name: "Pat Cummins",
      role: "Sales Manager",
      image: "assets/img/all-images/team-img8.png"
    },
    {
      name: "Mahika Gaur",
      role: "Product Manager",
      image: "assets/img/all-images/team-img9.png"
    },
    {
      name: "Tim David",
      role: "Sales Manager",
      image: "assets/img/all-images/team-img10.png"
    },
    {
      name: "Jonny Bairstow",
      role: "Team Leader",
      image: "assets/img/all-images/team-img11.png"
    },
    {
      name: "Ben Duckett",
      role: "Product Manager",
      image: "assets/img/all-images/team-img12.png"
    },
    {
      name: "Sophia Dunkley",
      role: "Sales Manager",
      image: "assets/img/all-images/team-img13.png"
    },
    {
      name: "Matthew Potts",
      role: "Sales Manager",
      image: "assets/img/all-images/team-img14.png"
    },
    {
      name: "George Scrimshaw",
      role: "Team Leader",
      image: "assets/img/all-images/team-img15.png"
    }
  ];
  static \u0275fac = function OurTeamComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OurTeamComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OurTeamComponent, selectors: [["app-our-team"]], decls: 15, vars: 1, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-4", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["title", "Our Team"], [1, "team1-section-area", "sp2"], ["class", "col-lg-3 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-12"], [1, "col-lg-3", "col-md-6"], [3, "member"]], template: function OurTeamComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Our Team");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 3);
      \u0275\u0275template(12, OurTeamComponent_div_12_Template, 2, 1, "div", 8);
      \u0275\u0275elementStart(13, "div", 9);
      \u0275\u0275element(14, "app-pagination");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.teamMembers);
    }
  }, dependencies: [BreadcrumbComponent, CommonModule, NgForOf, MemberCardComponent, PaginationComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OurTeamComponent, [{
    type: Component,
    args: [{ selector: "app-our-team", imports: [BreadcrumbComponent, CommonModule, MemberCardComponent, PaginationComponent], template: '<div class="hero1-section-area about-bg-area">\n    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-4 m-auto">\n                <div class="hero-heading-area heading1 text-center">\n                    <h1>Our Team</h1>\n                    <app-breadcrumb title="Our Team" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="team1-section-area sp2">\n    <div class="container">\n        <div class="row">\n            <div *ngFor="let member of teamMembers" class="col-lg-3 col-md-6">\n                <app-member-card [member]="member"/>\n            </div>\n\n            <div class="col-lg-12">\n                <app-pagination />\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OurTeamComponent, { className: "OurTeamComponent", filePath: "src/app/views/other-pages/our-team/our-team.component.ts", lineNumber: 14 });
})();

// src/app/components/pricing/pricing-plan-1/pricing-plan-1.component.ts
function PricingPlan1Component_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "app-pricing-card", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-aos", plan_r1.aos)("data-aos-duration", plan_r1.duration);
    \u0275\u0275advance();
    \u0275\u0275property("plan", plan_r1)("isMonthly", ctx_r1.isMonthly);
  }
}
var PricingPlan1Component = class _PricingPlan1Component {
  isMonthly = true;
  pricingPlans = pricingPlans;
  class;
  togglePlan() {
    this.isMonthly = !this.isMonthly;
  }
  static \u0275fac = function PricingPlan1Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PricingPlan1Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingPlan1Component, selectors: [["app-pricing-plan-1"]], inputs: { class: "class" }, decls: 19, vars: 5, consts: [[1, "row"], [1, "col-12", "text-center"], [1, "plan-toggle-wrap", 3, "ngClass"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "toggle-inner"], ["id", "ce-toggle", "type", "checkbox", 3, "change", "checked"], [1, "custom-toggle"], [1, "t-month"], [1, "t-year"], [1, "col-lg-12"], [1, "tab-content"], ["id", "monthly"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [3, "plan", "isMonthly"]], template: function PricingPlan1Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "input", 4);
      \u0275\u0275listener("change", function PricingPlan1Component_Template_input_change_4_listener() {
        return ctx.togglePlan();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "span", 5);
      \u0275\u0275elementStart(6, "div", 6)(7, "h4");
      \u0275\u0275text(8, "Monthly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "h4");
      \u0275\u0275text(11, "Yearly ");
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "(20% Save)");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div", 0);
      \u0275\u0275template(18, PricingPlan1Component_div_18_Template, 2, 4, "div", 11);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.isMonthly ? "active" : "");
      \u0275\u0275property("ngClass", ctx.class);
      \u0275\u0275advance(2);
      \u0275\u0275property("checked", ctx.isMonthly);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.pricingPlans);
    }
  }, dependencies: [PricingCardComponent, CommonModule, NgClass, NgForOf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingPlan1Component, [{
    type: Component,
    args: [{ selector: "app-pricing-plan-1", imports: [PricingCardComponent, CommonModule], template: `<div class="row">
    <div class="col-12 text-center">
        <div class="plan-toggle-wrap" [ngClass]="class" [class]="isMonthly ? 'active' : ''">
            <div class="toggle-inner" data-aos="fade-up" data-aos-duration="1000">
                <input id="ce-toggle" [checked]="isMonthly" (change)="togglePlan()" type="checkbox">
                <span class="custom-toggle"></span>
                <div class="t-month">
                    <h4>Monthly</h4>
                </div>
                <div class="t-year">
                    <h4>Yearly <span>(20% Save)</span></h4>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-12">
        <div class="tab-content">
            <div id="monthly">
                <div class="row">
                    <div *ngFor="let plan of pricingPlans" class="col-lg-4 col-md-6" [attr.data-aos]="plan.aos"
                        [attr.data-aos-duration]="plan.duration">
                        <app-pricing-card [plan]="plan" [isMonthly]="isMonthly" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>` }]
  }], null, { class: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingPlan1Component, { className: "PricingPlan1Component", filePath: "src/app/components/pricing/pricing-plan-1/pricing-plan-1.component.ts", lineNumber: 12 });
})();

// src/app/components/pricing/pricing-plan-2/pricing-plan-2.component.ts
function PricingPlan2Component_th_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 19)(1, "div", 20)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "a", 21);
    \u0275\u0275text(6, "Get Started");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const price_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", ctx_r1.isMonthly ? price_r1.monthlyPrice : price_r1.yearlyPrice, "");
  }
}
var PricingPlan2Component = class _PricingPlan2Component {
  isMonthly = true;
  planPrice = [
    { monthlyPrice: 29, yearlyPrice: 99 },
    { monthlyPrice: 99, yearlyPrice: 299 },
    { monthlyPrice: 199, yearlyPrice: 499 }
  ];
  togglePlan() {
    this.isMonthly = !this.isMonthly;
  }
  static \u0275fac = function PricingPlan2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PricingPlan2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingPlan2Component, selectors: [["app-pricing-plan-2"]], decls: 118, vars: 4, consts: [[1, "row"], [1, "col-12"], [1, "plan-toggle-wrap1", 2, "margin-top", "0"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "toggle-inner"], ["id", "ce-toggle1", "type", "checkbox", 3, "change", "checked"], [1, "custom-toggle"], [1, "t-month"], [1, "t-year"], [1, "col-lg-12"], [1, "tab-content"], [1, "col-lg-12", "col-md-12"], [1, "single-pricing-area", "comparison"], [1, "tl", "tl2"], ["colspan", "1", 1, "qbo"], ["class", "price-info hide-mobile", 4, "ngFor", "ngForOf"], ["colspan", "3"], [1, "compare-row"], ["src", "assets/img/icons/xmark.svg", "alt", ""], ["src", "assets/img/icons/check5.svg", "alt", ""], [1, "price-info", "hide-mobile"], [1, "price-now"], ["href", "javascript:void(0)", 1, "header-btn1"]], template: function PricingPlan2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "input", 4);
      \u0275\u0275listener("change", function PricingPlan2Component_Template_input_change_4_listener() {
        return ctx.togglePlan();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "span", 5);
      \u0275\u0275elementStart(6, "div", 6)(7, "h4");
      \u0275\u0275text(8, "Monthly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "h4");
      \u0275\u0275text(11, "Yearly");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "div")(15, "div", 0)(16, "div", 10)(17, "div", 11)(18, "table")(19, "thead")(20, "tr")(21, "th", 12);
      \u0275\u0275text(22, "Compare Features List ");
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24, "Save 32% with yearly billing.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "th", 13);
      \u0275\u0275text(26, " Basic Pack ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th", 13);
      \u0275\u0275text(28, " Premium Pack ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th", 13);
      \u0275\u0275text(30, " Stander Pack ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "tr");
      \u0275\u0275element(32, "th");
      \u0275\u0275template(33, PricingPlan2Component_th_33_Template, 7, 1, "th", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "tbody")(35, "tr");
      \u0275\u0275element(36, "td");
      \u0275\u0275elementStart(37, "td", 15);
      \u0275\u0275text(38, "Unlimited access to every class");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "tr", 16)(40, "td");
      \u0275\u0275text(41, "Electrical Inspection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "td")(43, "span");
      \u0275\u0275element(44, "img", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "td")(46, "span");
      \u0275\u0275element(47, "img", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "td")(49, "span");
      \u0275\u0275element(50, "img", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "tr");
      \u0275\u0275element(52, "td");
      \u0275\u0275elementStart(53, "td", 15);
      \u0275\u0275text(54, "Electricity Services");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "tr", 16)(56, "td");
      \u0275\u0275text(57, "Electricity Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "td")(59, "span");
      \u0275\u0275element(60, "img", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "td")(62, "span");
      \u0275\u0275element(63, "img", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "td")(65, "span");
      \u0275\u0275element(66, "img", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "tr")(68, "td");
      \u0275\u0275text(69, "\xA0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "td", 15);
      \u0275\u0275text(71, "Indoor/outdoor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "tr", 16)(73, "td");
      \u0275\u0275text(74, "Indoor/outdoor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "td")(76, "span");
      \u0275\u0275element(77, "img", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "td")(79, "span");
      \u0275\u0275element(80, "img", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "td")(82, "span");
      \u0275\u0275element(83, "img", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "tr")(85, "td");
      \u0275\u0275text(86, "\xA0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "td", 15);
      \u0275\u0275text(88, "12 Hours Support");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "tr", 16)(90, "td");
      \u0275\u0275text(91, "12 Hours Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "td")(93, "span");
      \u0275\u0275element(94, "img", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "td")(96, "span");
      \u0275\u0275element(97, "img", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "td")(99, "span");
      \u0275\u0275element(100, "img", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "tr")(102, "td");
      \u0275\u0275text(103, "\xA0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "td", 15);
      \u0275\u0275text(105, "Calendar View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "tr", 16)(107, "td");
      \u0275\u0275text(108, "Calendar View");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "td")(110, "span");
      \u0275\u0275element(111, "img", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "td")(113, "span");
      \u0275\u0275element(114, "img", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "td")(116, "span");
      \u0275\u0275element(117, "img", 18);
      \u0275\u0275elementEnd()()()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.isMonthly ? "active" : "");
      \u0275\u0275advance(2);
      \u0275\u0275property("checked", ctx.isMonthly);
      \u0275\u0275advance(29);
      \u0275\u0275property("ngForOf", ctx.planPrice);
    }
  }, dependencies: [CommonModule, NgForOf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingPlan2Component, [{
    type: Component,
    args: [{ selector: "app-pricing-plan-2", imports: [CommonModule], template: `<div class="row">
    <div class="col-12">
        <div class="plan-toggle-wrap1" [class]="isMonthly ? 'active' : ''" style="margin-top: 0;">
            <div class="toggle-inner" data-aos="fade-up" data-aos-duration="1000">
                <input id="ce-toggle1" [checked]="isMonthly" (change)="togglePlan()" type="checkbox">
                <span class="custom-toggle"></span>
                <div class="t-month">
                    <h4>Monthly</h4>
                </div>
                <div class="t-year">
                    <h4>Yearly</h4>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-12">
        <div class="tab-content">
            <div>
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="single-pricing-area comparison">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="tl tl2">Compare Features List <span>Save 32% with yearly
                                                billing.</span></th>
                                        <th colspan="1" class="qbo">
                                            Basic Pack
                                        </th>
                                        <th colspan="1" class="qbo">
                                            Premium Pack
                                        </th>
                                        <th colspan="1" class="qbo">
                                            Stander Pack
                                        </th>
                                    <tr>
                                        <th></th>
                                        <th *ngFor="let price of planPrice" class="price-info hide-mobile">
                                            <div class="price-now">
                                                <span>\${{isMonthly ? price.monthlyPrice : price.yearlyPrice}}</span>
                                            </div>
                                            <div>
                                                <a href="javascript:void(0)" class="header-btn1">Get Started</a>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td colspan="3">Unlimited access to every class</td>
                                    </tr>
                                    <tr class="compare-row">
                                        <td>Electrical Inspection</td>
                                        <td>
                                            <span><img src="assets/img/icons/xmark.svg" alt=""></span>
                                        </td>
                                        <td>
                                            <span><img src="assets/img/icons/check5.svg" alt=""></span>
                                        </td>
                                        <td>
                                            <span><img src="assets/img/icons/check5.svg" alt=""></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td colspan="3">Electricity Services</td>
                                    </tr>
                                    <tr class="compare-row">
                                        <td>Electricity Services</td>
                                        <td>
                                            <span><img src="assets/img/icons/xmark.svg" alt=""></span>
                                        </td>
                                        <td>
                                            <span><img src="assets/img/icons/check5.svg" alt=""></span>
                                        </td>
                                        <td>
                                            <span><img src="assets/img/icons/check5.svg" alt=""></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                        <td colspan="3">Indoor/outdoor</td>
                                    </tr>
                                    <tr class="compare-row">
                                        <td>Indoor/outdoor</td>
                                        <td>
                                            <span><img src="assets/img/icons/xmark.svg" alt=""></span>
                                        </td>
                                        <td>
                                            <span><img src="assets/img/icons/check5.svg" alt=""></span>
                                        </td>
                                        <td>
                                            <span><img src="assets/img/icons/check5.svg" alt=""></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                        <td colspan="3">12 Hours Support</td>
                                    </tr>
                                    <tr class="compare-row">
                                        <td>12 Hours Support</td>
                                        <td>
                                            <span><img src="assets/img/icons/xmark.svg" alt=""></span>
                                        </td>
                                        <td>
                                            <span><img src="assets/img/icons/xmark.svg" alt=""></span>
                                        </td>
                                        <td>
                                            <span><img src="assets/img/icons/check5.svg" alt=""></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                        <td colspan="3">Calendar View</td>
                                    </tr>
                                    <tr class="compare-row">
                                        <td>Calendar View</td>
                                        <td>
                                            <span><img src="assets/img/icons/xmark.svg" alt=""></span>
                                        </td>
                                        <td>
                                            <span><img src="assets/img/icons/xmark.svg" alt=""></span>
                                        </td>
                                        <td>
                                            <span><img src="assets/img/icons/check5.svg" alt=""></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingPlan2Component, { className: "PricingPlan2Component", filePath: "src/app/components/pricing/pricing-plan-2/pricing-plan-2.component.ts", lineNumber: 10 });
})();

// src/app/views/other-pages/pricing-plans/pricing-plans.component.ts
var PricingPlansComponent = class _PricingPlansComponent {
  static \u0275fac = function PricingPlansComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PricingPlansComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingPlansComponent, selectors: [["app-pricing-plans"]], decls: 15, vars: 0, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-4", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["title", "Pricing Plan"], [1, "compare-palns-area", "sp2"], [1, "mt-0"], [1, "compareplan-section-area", "sp1"]], template: function PricingPlansComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Pricing Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2);
      \u0275\u0275element(11, "app-pricing-plan-1", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 9)(13, "div", 2);
      \u0275\u0275element(14, "app-pricing-plan-2");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [BreadcrumbComponent, PricingPlan1Component, PricingPlan2Component], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingPlansComponent, [{
    type: Component,
    args: [{ selector: "app-pricing-plans", imports: [BreadcrumbComponent, PricingPlan1Component, PricingPlan2Component], template: '<div class="hero1-section-area about-bg-area">\n    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-4 m-auto">\n                <div class="hero-heading-area heading1 text-center">\n                    <h1>Pricing Plan</h1>\n                    <app-breadcrumb title="Pricing Plan" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="compare-palns-area sp2">\n    <div class="container">\n        <app-pricing-plan-1 class="mt-0" />\n    </div>\n</div>\n\n<div class="compareplan-section-area sp1">\n    <div class="container">\n        <app-pricing-plan-2 />\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingPlansComponent, { className: "PricingPlansComponent", filePath: "src/app/views/other-pages/pricing-plans/pricing-plans.component.ts", lineNumber: 12 });
})();

// src/app/views/other-pages/testimonials/testimonials.component.ts
var _c0 = () => [];
function TestimonialsComponent_div_12_li_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275elementEnd();
  }
}
function TestimonialsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275element(3, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "ul", 15);
    \u0275\u0275template(6, TestimonialsComponent_div_12_li_6_Template, 2, 0, "li", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "a", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const testimonial_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", testimonial_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(5, _c0).constructor(5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(testimonial_r1.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(testimonial_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(testimonial_r1.role);
  }
}
var TestimonialsComponent = class _TestimonialsComponent {
  testimonials = [
    {
      image: "assets/img/all-images/testimonial-img11.png",
      name: "Dhruv Jerel",
      role: "Scheduler",
      description: "From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn"
    },
    {
      image: "assets/img/all-images/testimonial-img12.png",
      name: "Issuant Sharma",
      role: "Logistics Officer",
      description: "Discover why our customers love our electricity services! Read testimonials from satisfied clients who have experienced the reliability, efficiency, and excellence"
    },
    {
      image: "assets/img/all-images/testimonial-img13.png",
      name: "Richardson",
      role: "Transport Manager",
      description: "Their stories not only showcase the effectiveness of our services but also highlight the dedication and expertise of our team. Explore their experiences to learn"
    },
    {
      image: "assets/img/all-images/testimonial-img15.png",
      name: "David Miller",
      role: "Inventory Planner",
      description: "Our testimonials speak volumes about the quality, reliability, and excellence of our electricity services. From homeowners to businesses, our clients have benefited from"
    },
    {
      image: "assets/img/all-images/testimonial-img16.png",
      name: "Matthew Wade",
      role: "Demand Planner",
      description: "Hear firsthand accounts of how we've helped individuals save on their energy bills, increase efficiency in their operations, and navigate complex electrical projects with"
    },
    {
      image: "assets/img/all-images/testimonial-img17.png",
      name: "Vijay Shankar",
      role: "Expeditor",
      description: "We take pride in delivering exceptional results and exceeding expectations Explore our testimonials to see why our customers trust us as their preferred electricity provider"
    },
    {
      image: "assets/img/all-images/testimonial-img18.png",
      name: "Vicky Ostwald",
      role: "Expeditor",
      description: "Experience the satisfaction and success shared by our valued customers in their own words. Our testimonials are a testament to the trust & confidence our clients place"
    },
    {
      image: "assets/img/all-images/testimonial-img19.png",
      name: "Amrich Nortje",
      role: "Inventory Planner",
      description: "From homeowners seeking reliable energy solutions to businesses striving for efficiency and sustainability, our customers have found their answers with us"
    },
    {
      image: "assets/img/all-images/testimonial-img20.png",
      name: "Praveen Dubey",
      role: "Scheduler",
      description: "Their stories highlight not only the quality and reliability of our electricity services but also the dedication and expertise of our team. Whether it's overcoming challenges"
    }
  ];
  static \u0275fac = function TestimonialsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TestimonialsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TestimonialsComponent, selectors: [["app-testimonials"]], decls: 15, vars: 1, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-7", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["title", "Voltage Vision"], [1, "testimonials-inner-section-area", "sp1"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-12"], [1, "col-lg-4", "col-md-6"], [1, "testimonial-inner-boxarea"], [1, "img1"], ["alt", "", 3, "src"], [1, "content-area"], [1, "d-flex", "align-items-center", "justify-content-center", "flex-wrap", "gap-1"], [4, "ngFor", "ngForOf"], [1, "text"], ["routerLink", "/pages/our-team"], [1, "fa-solid", "fa-star"]], template: function TestimonialsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Voltage Vision");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 3);
      \u0275\u0275template(12, TestimonialsComponent_div_12_Template, 14, 6, "div", 8);
      \u0275\u0275elementStart(13, "div", 9);
      \u0275\u0275element(14, "app-pagination");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.testimonials);
    }
  }, dependencies: [BreadcrumbComponent, CommonModule, NgForOf, PaginationComponent, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestimonialsComponent, [{
    type: Component,
    args: [{ selector: "app-testimonials", imports: [BreadcrumbComponent, CommonModule, PaginationComponent, RouterModule], template: '<div class="hero1-section-area about-bg-area">\n    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-7 m-auto">\n                <div class="hero-heading-area heading1 text-center">\n                    <h1>Voltage Vision</h1>\n                    <app-breadcrumb title="Voltage Vision" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="testimonials-inner-section-area sp1">\n    <div class="container">\n        <div class="row">\n            <div *ngFor="let testimonial of testimonials" class="col-lg-4 col-md-6">\n                <div class="testimonial-inner-boxarea">\n                    <div class="img1">\n                        <img [src]="testimonial.image" alt="">\n                    </div>\n                    <div class="content-area">\n                        <ul class="d-flex align-items-center justify-content-center flex-wrap gap-1">\n                            <li *ngFor="let item of [].constructor(5)"><i class="fa-solid fa-star"></i></li>\n                        </ul>\n                        <p>{{testimonial.description}}</p>\n                        <div class="text">\n                            <a routerLink="/pages/our-team">{{testimonial.name}}</a>\n                            <p>{{testimonial.role}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class="col-lg-12">\n                <app-pagination />\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TestimonialsComponent, { className: "TestimonialsComponent", filePath: "src/app/views/other-pages/testimonials/testimonials.component.ts", lineNumber: 14 });
})();

// src/app/views/other-pages/faq/faq.component.ts
function FaqComponent_For_25_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 25);
  }
}
function FaqComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h2", 20)(2, "button", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 22)(5, "div", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, FaqComponent_For_25_div_7_Template, 1, 0, "div", 24);
  }
  if (rf & 2) {
    const faq_r1 = ctx.$implicit;
    const \u0275$index_47_r2 = ctx.$index;
    const \u0275$count_47_r3 = ctx.$count;
    \u0275\u0275property("collapsed", \u0275$index_47_r2 === 0 ? false : true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", faq_r1.question, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r1.answer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(\u0275$index_47_r2 === \u0275$count_47_r3 - 1));
  }
}
function FaqComponent_For_29_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 25);
  }
}
function FaqComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h2", 20)(2, "button", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 22)(5, "div", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, FaqComponent_For_29_div_7_Template, 1, 0, "div", 24);
  }
  if (rf & 2) {
    const faq_r4 = ctx.$implicit;
    const \u0275$index_68_r5 = ctx.$index;
    const \u0275$count_68_r6 = ctx.$count;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", faq_r4.question, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r4.answer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(\u0275$index_68_r5 === \u0275$count_68_r6 - 1));
  }
}
function FaqComponent_For_46_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 25);
  }
}
function FaqComponent_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h2", 20)(2, "button", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 22)(5, "div", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, FaqComponent_For_46_div_7_Template, 1, 0, "div", 24);
  }
  if (rf & 2) {
    const faq_r7 = ctx.$implicit;
    const \u0275$index_114_r8 = ctx.$index;
    const \u0275$count_114_r9 = ctx.$count;
    \u0275\u0275property("collapsed", \u0275$index_114_r8 === 0 ? false : true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", faq_r7.question, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r7.answer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(\u0275$index_114_r8 === \u0275$count_114_r9 - 1));
  }
}
function FaqComponent_For_50_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 25);
  }
}
function FaqComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h2", 20)(2, "button", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 22)(5, "div", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, FaqComponent_For_50_div_7_Template, 1, 0, "div", 24);
  }
  if (rf & 2) {
    const faq_r10 = ctx.$implicit;
    const \u0275$index_135_r11 = ctx.$index;
    const \u0275$count_135_r12 = ctx.$count;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", faq_r10.question, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r10.answer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(\u0275$index_135_r11 === \u0275$count_135_r12 - 1));
  }
}
var FaqComponent = class _FaqComponent {
  faqData1 = [
    {
      question: "How do I sign up for your electricity services?",
      answer: "Whether you're wondering about our pricing plans, process installation, or sustainability initiatives."
    },
    {
      question: "What types of electricity plans do you offer?",
      answer: "Whether you're wondering about our pricing plans, process installation, or sustainability initiatives."
    },
    {
      question: "What are your billing and payment options?",
      answer: "Whether you're wondering about our pricing plans, process installation, or sustainability initiatives."
    },
    {
      question: "How can I track my energy usage with your services?",
      answer: "Whether you're wondering about our pricing plans, process installation, or sustainability initiatives."
    },
    {
      question: "What are your billing and payment options?",
      answer: "Whether you're wondering about our pricing plans, process installation, or sustainability initiatives."
    }
  ];
  faqData2 = [
    {
      question: "How do I sign up for your electricity services?",
      answer: "Whether you're wondering about our pricing plans, process installation, or sustainability initiatives."
    },
    {
      question: "What types of electricity plans do you offer?",
      answer: "Whether you're wondering about our pricing plans, process installation, or sustainability initiatives."
    },
    {
      question: "What are your billing and payment options?",
      answer: "Whether you're wondering about our pricing plans, process installation, or sustainability initiatives."
    },
    {
      question: "How can I track my energy usage with your services?",
      answer: "Whether you're wondering about our pricing plans, process installation, or sustainability initiatives."
    },
    {
      question: "What are your billing and payment options?",
      answer: "Whether you're wondering about our pricing plans, process installation, or sustainability initiatives."
    }
  ];
  static \u0275fac = function FaqComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FaqComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqComponent, selectors: [["app-faq"]], decls: 51, vars: 4, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["title", "Frequently Asked Questions"], [1, "faq1-section-area", "faq-inner", "sp8"], [1, "row", "align-items-center"], [1, "col-lg-6", "m-auto"], [1, "faq-header-area", "heading2", "text-center"], [1, "tg-element-title"], [1, "space44", "d-lg-block", "d-none"], [1, "space14", "d-lg-none", "d-block"], [1, "col-lg-12"], [1, "faq-auhtoir-area1"], [1, "col-lg-6"], ["ngbAccordion", "", "id", "accordionFlushExample", 1, "accordion-flush", 3, "closeOthers"], [1, "faq1-section-area", "faq-inner", "sp1"], ["ngbAccordionItem", "", 3, "collapsed"], ["ngbAccordionHeader", ""], ["ngbAccordionButton", "", "type", "button"], ["ngbAccordionCollapse", ""], ["ngbAccordionBody", ""], ["class", "space20", 4, "ngIf"], [1, "space20"], ["ngbAccordionItem", ""]], template: function FaqComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Frequently Asked Questions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "h2", 11);
      \u0275\u0275text(15, "Energy Electricity Questions");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(16, "div", 12)(17, "div", 13);
      \u0275\u0275elementStart(18, "div", 3)(19, "div", 14)(20, "div", 15)(21, "div", 3)(22, "div", 16)(23, "div", 17);
      \u0275\u0275repeaterCreate(24, FaqComponent_For_25_Template, 8, 4, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 16)(27, "div", 17);
      \u0275\u0275repeaterCreate(28, FaqComponent_For_29_Template, 8, 3, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(30, "div", 18)(31, "div", 2)(32, "div", 8)(33, "div", 9)(34, "div", 10)(35, "h2", 11);
      \u0275\u0275text(36, "Energy Electricity Questions");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(37, "div", 12)(38, "div", 13);
      \u0275\u0275elementStart(39, "div", 3)(40, "div", 14)(41, "div", 15)(42, "div", 3)(43, "div", 16)(44, "div", 17);
      \u0275\u0275repeaterCreate(45, FaqComponent_For_46_Template, 8, 4, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 16)(48, "div", 17);
      \u0275\u0275repeaterCreate(49, FaqComponent_For_50_Template, 8, 3, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275property("closeOthers", true);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.faqData1);
      \u0275\u0275advance(3);
      \u0275\u0275property("closeOthers", true);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.faqData1);
      \u0275\u0275advance(16);
      \u0275\u0275property("closeOthers", true);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.faqData2);
      \u0275\u0275advance(3);
      \u0275\u0275property("closeOthers", true);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.faqData2);
    }
  }, dependencies: [BreadcrumbComponent, NgbAccordionModule, NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionBody, NgbAccordionCollapse, CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaqComponent, [{
    type: Component,
    args: [{ selector: "app-faq", imports: [BreadcrumbComponent, NgbAccordionModule, CommonModule], template: '<div class="hero1-section-area about-bg-area">\n    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8 m-auto">\n                <div class="hero-heading-area heading1 text-center">\n                    <h1>Frequently Asked Questions</h1>\n                    <app-breadcrumb title="Frequently Asked Questions" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="faq1-section-area faq-inner sp8">\n    <div class="container">\n        <div class="row align-items-center">\n            <div class="col-lg-6 m-auto">\n                <div class="faq-header-area heading2 text-center">\n                    <h2 class="tg-element-title">Energy Electricity Questions</h2>\n                </div>\n            </div>\n        </div>\n        <div class="space44 d-lg-block d-none"></div>\n        <div class="space14 d-lg-none d-block"></div>\n        <div class="row">\n            <div class="col-lg-12">\n                <div class="faq-auhtoir-area1">\n                    <div class="row">\n                        <div class="col-lg-6">\n                            <div ngbAccordion [closeOthers]="true" class="accordion-flush" id="accordionFlushExample">\n                                @for (faq of faqData1; track $index;let first=$first;let id=$index;let last=$last) {\n                                <div ngbAccordionItem [collapsed]="first ? false : true">\n                                    <h2 ngbAccordionHeader>\n                                        <button ngbAccordionButton type="button">\n                                            {{faq.question}}\n                                        </button>\n                                    </h2>\n                                    <div ngbAccordionCollapse>\n                                        <div ngbAccordionBody>{{faq.answer}}</div>\n                                    </div>\n                                </div>\n                                <div *ngIf="!last" class="space20"></div>\n                                }\n                            </div>\n                        </div>\n                        <div class="col-lg-6">\n                            <div ngbAccordion [closeOthers]="true" class="accordion-flush" id="accordionFlushExample">\n                                @for (faq of faqData1; track $index;let first=$first;let id=$index;let last=$last) {\n                                <div ngbAccordionItem>\n                                    <h2 ngbAccordionHeader>\n                                        <button ngbAccordionButton type="button">\n                                            {{faq.question}}\n                                        </button>\n                                    </h2>\n                                    <div ngbAccordionCollapse>\n                                        <div ngbAccordionBody>{{faq.answer}}</div>\n                                    </div>\n                                </div>\n                                <div *ngIf="!last" class="space20"></div>\n                                }\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class="faq1-section-area faq-inner sp1">\n    <div class="container">\n        <div class="row align-items-center">\n            <div class="col-lg-6 m-auto">\n                <div class="faq-header-area heading2 text-center">\n                    <h2 class="tg-element-title">Energy Electricity Questions</h2>\n                </div>\n            </div>\n        </div>\n        <div class="space44 d-lg-block d-none"></div>\n        <div class="space14 d-lg-none d-block"></div>\n        <div class="row">\n            <div class="col-lg-12">\n                <div class="faq-auhtoir-area1">\n                    <div class="row">\n                        <div class="col-lg-6">\n                            <div ngbAccordion [closeOthers]="true" class="accordion-flush" id="accordionFlushExample">\n                                @for (faq of faqData2; track $index;let first=$first;let id=$index;let last=$last) {\n                                <div ngbAccordionItem [collapsed]="first ? false : true">\n                                    <h2 ngbAccordionHeader>\n                                        <button ngbAccordionButton type="button">\n                                            {{faq.question}}\n                                        </button>\n                                    </h2>\n                                    <div ngbAccordionCollapse>\n                                        <div ngbAccordionBody>{{faq.answer}}</div>\n                                    </div>\n                                </div>\n                                <div *ngIf="!last" class="space20"></div>\n                                }\n                            </div>\n                        </div>\n                        <div class="col-lg-6">\n                            <div ngbAccordion [closeOthers]="true" class="accordion-flush" id="accordionFlushExample">\n                                @for (faq of faqData2; track $index;let first=$first;let id=$index;let last=$last) {\n                                <div ngbAccordionItem >\n                                    <h2 ngbAccordionHeader>\n                                        <button ngbAccordionButton type="button">\n                                            {{faq.question}}\n                                        </button>\n                                    </h2>\n                                    <div ngbAccordionCollapse>\n                                        <div ngbAccordionBody>{{faq.answer}}</div>\n                                    </div>\n                                </div>\n                                <div *ngIf="!last" class="space20"></div>\n                                }\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqComponent, { className: "FaqComponent", filePath: "src/app/views/other-pages/faq/faq.component.ts", lineNumber: 13 });
})();

// src/app/views/other-pages/error-404/error-404.component.ts
var Error404Component = class _Error404Component {
  static \u0275fac = function Error404Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Error404Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Error404Component, selectors: [["app-error-404"]], decls: 29, vars: 0, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["title", "404 Error"], [1, "error-section-area", "sp1"], [1, "error-content-area", "text-center"], [1, "img1"], ["src", "assets/img/all-images/error.png", "alt", ""], [1, "space48"], [1, "content-area", "heading2"], [1, "d-lg-block", "d-none"], [1, "space8"], [1, "btn-area"], ["routerLink", "/home-1", 1, "header-btn1"], [1, "fa-solid", "fa-arrow-right"]], template: function Error404Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "404 Error");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 3)(12, "div", 4)(13, "div", 8)(14, "div", 9);
      \u0275\u0275element(15, "img", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "div", 11);
      \u0275\u0275elementStart(17, "div", 12)(18, "h2");
      \u0275\u0275text(19, " Sorry, Page Not Found!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p");
      \u0275\u0275text(21, "Sorry, the page you are looking for doesn\u2019t exist or has ");
      \u0275\u0275element(22, "br", 13);
      \u0275\u0275text(23, " been moved. Here are some helpful links.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "div", 14);
      \u0275\u0275elementStart(25, "div", 15)(26, "a", 16);
      \u0275\u0275text(27, "Take Me Home ");
      \u0275\u0275element(28, "i", 17);
      \u0275\u0275elementEnd()()()()()()()();
    }
  }, dependencies: [BreadcrumbComponent, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Error404Component, [{
    type: Component,
    args: [{ selector: "app-error-404", imports: [BreadcrumbComponent, RouterLink], template: '<div class="hero1-section-area about-bg-area">\n    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8 m-auto">\n                <div class="hero-heading-area heading1 text-center">\n                    <h1>404 Error</h1>\n                    <app-breadcrumb title="404 Error" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="error-section-area sp1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8 m-auto">\n                <div class="error-content-area text-center">\n                    <div class="img1">\n                        <img src="assets/img/all-images/error.png" alt="">\n                    </div>\n                    <div class="space48"></div>\n                    <div class="content-area heading2">\n                        <h2> Sorry, Page Not Found!</h2>\n                        <p>Sorry, the page you are looking for doesn\u2019t exist or has <br class="d-lg-block d-none"> been\n                            moved. Here are some helpful links.</p>\n                        <div class="space8"></div>\n                        <div class="btn-area">\n                            <a routerLink="/home-1" class="header-btn1">Take Me Home <i\n                                    class="fa-solid fa-arrow-right"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Error404Component, { className: "Error404Component", filePath: "src/app/views/other-pages/error-404/error-404.component.ts", lineNumber: 11 });
})();

// src/app/views/other-pages/contact-us/contact-us.component.ts
var ContactUsComponent = class _ContactUsComponent {
  static \u0275fac = function ContactUsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactUsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactUsComponent, selectors: [["app-contact-us"]], decls: 99, vars: 0, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["title", "Contact Us"], [1, "contact1-section-area", "contact-inner", "sp1"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "contact-header-area", "heading2"], [1, "tg-element-title"], [1, "space48"], [1, "col-lg-6", "col-md-6"], [1, "contact-auhtor-side"], [1, "icons-text"], [1, "icons"], [1, "fa-solid", "fa-phone"], [1, "text"], ["href", "tel:1234567890"], [1, "fa-solid", "fa-location-dot"], [1, "space48", "d-md-none"], [1, "fa-solid", "fa-envelope"], ["href", "mailto:serebangle@gmail.com "], [1, "fa-brands", "fa-linkedin-in"], ["href", "javascript:void(0)"], [1, "contact-submit-boxarea"], [1, "input-area"], ["type", "text", "placeholder", "Name"], ["type", "number", "placeholder", "Phone"], [1, "col-lg-12"], ["type", "email", "placeholder", "Email"], ["placeholder", "Describe your inquiry", "cols", "30", "rows", "10"], [1, "input-area1"], ["type", "checkbox"], ["type", "submit", 1, "header-btn1"], [1, "fa-solid", "fa-arrow-right"], [1, "mapouter"], [1, "gmap_canvas"], ["src", \u0275\u0275trustConstantResourceUrl`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4506257.120552435!2d88.67021924228865!3d21.954385721237916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1704088968016!5m2!1sen!2sbd`, "width", "600", "height", "450", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"]], template: function ContactUsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Contact Us");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "h5");
      \u0275\u0275text(15, "Contact Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "h2", 11);
      \u0275\u0275text(17, "Illuminate Your Message Get in Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19, "Have questions or ready to get started with our electricity services? Our team is here to help! Whether you're seeking.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "div", 12);
      \u0275\u0275elementStart(21, "div", 3)(22, "div", 13)(23, "div", 14)(24, "div", 15)(25, "div", 16);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 18)(28, "p");
      \u0275\u0275text(29, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "a", 19);
      \u0275\u0275text(31, "123 456 7890");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(32, "div", 12);
      \u0275\u0275elementStart(33, "div", 15)(34, "div", 16);
      \u0275\u0275element(35, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 18)(37, "p");
      \u0275\u0275text(38, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "a", 19);
      \u0275\u0275text(40, "London Eye ,London");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(41, "div", 13);
      \u0275\u0275element(42, "div", 21);
      \u0275\u0275elementStart(43, "div", 14)(44, "div", 15)(45, "div", 16);
      \u0275\u0275element(46, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 18)(48, "p");
      \u0275\u0275text(49, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "a", 23);
      \u0275\u0275text(51, "serebangle@gmail.com ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(52, "div", 12);
      \u0275\u0275elementStart(53, "div", 15)(54, "div", 16);
      \u0275\u0275element(55, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 18)(57, "p");
      \u0275\u0275text(58, "Linkedin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "a", 25);
      \u0275\u0275text(60, "Fleexstudio");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(61, "div", 9)(62, "div", 26)(63, "h4");
      \u0275\u0275text(64, "Request A Quote");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 3)(66, "div", 9)(67, "div", 27)(68, "p");
      \u0275\u0275text(69, "Name (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(70, "input", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 9)(72, "div", 27)(73, "p");
      \u0275\u0275text(74, "Number (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "input", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 30)(77, "div", 27)(78, "p");
      \u0275\u0275text(79, "Email (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(80, "input", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 30)(82, "div", 27)(83, "p");
      \u0275\u0275text(84, "Additional Details (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(85, "textarea", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 30)(87, "div", 33);
      \u0275\u0275element(88, "input", 34);
      \u0275\u0275elementStart(89, "p");
      \u0275\u0275text(90, "I agree with the site privacy policy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "div", 30)(92, "div", 33)(93, "button", 35);
      \u0275\u0275text(94, "Submit Now ");
      \u0275\u0275element(95, "i", 36);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(96, "div", 37)(97, "div", 38);
      \u0275\u0275element(98, "iframe", 39);
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [BreadcrumbComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactUsComponent, [{
    type: Component,
    args: [{ selector: "app-contact-us", imports: [BreadcrumbComponent], template: `<div class="hero1-section-area about-bg-area">
    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="hero-heading-area heading1 text-center">
                    <h1>Contact Us</h1>
                    <app-breadcrumb title="Contact Us" />
                </div>
            </div>
        </div>
    </div>
</div>

<div class="contact1-section-area contact-inner sp1">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="contact-header-area heading2">
                    <h5>Contact Us</h5>
                    <h2 class="tg-element-title">Illuminate Your Message Get in Contact</h2>
                    <p>Have questions or ready to get started with our electricity services? Our team is here to help!
                        Whether you're seeking.</p>
                    <div class="space48"></div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="contact-auhtor-side">
                                <div class="icons-text">
                                    <div class="icons">
                                        <i class="fa-solid fa-phone"></i>
                                    </div>
                                    <div class="text">
                                        <p>Phone</p>
                                        <a href="tel:1234567890">123 456 7890</a>
                                    </div>
                                </div>
                                <div class="space48"></div>
                                <div class="icons-text">
                                    <div class="icons">
                                        <i class="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div class="text">
                                        <p>Address</p>
                                        <a href="tel:1234567890">London Eye ,London</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6">
                            <div class="space48 d-md-none"></div>
                            <div class="contact-auhtor-side">
                                <div class="icons-text">
                                    <div class="icons">
                                        <i class="fa-solid fa-envelope"></i>
                                    </div>
                                    <div class="text">
                                        <p>Email</p>
                                        <a href="mailto:serebangle@gmail.com ">serebangle&#64;gmail.com </a>
                                    </div>
                                </div>
                                <div class="space48"></div>
                                <div class="icons-text">
                                    <div class="icons">
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </div>
                                    <div class="text">
                                        <p>Linkedin</p>
                                        <a href="javascript:void(0)">Fleexstudio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="contact-submit-boxarea">
                    <h4>Request A Quote</h4>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="input-area">
                                <p>Name (required)</p>
                                <input type="text" placeholder="Name">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="input-area">
                                <p>Number (required)</p>
                                <input type="number" placeholder="Phone">
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="input-area">
                                <p>Email (required)</p>
                                <input type="email" placeholder="Email">
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="input-area">
                                <p>Additional Details (Optional)</p>
                                <textarea placeholder="Describe your inquiry" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="input-area1">
                                <input type="checkbox">
                                <p>I agree with the site privacy policy</p>
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="input-area1">
                                <button type="submit" class="header-btn1">Submit Now <i
                                        class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="mapouter">
    <div class="gmap_canvas">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4506257.120552435!2d88.67021924228865!3d21.954385721237916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1704088968016!5m2!1sen!2sbd"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactUsComponent, { className: "ContactUsComponent", filePath: "src/app/views/other-pages/contact-us/contact-us.component.ts", lineNumber: 10 });
})();

// src/app/views/other-pages/about/components/about-hero/about-hero.component.ts
var AboutHeroComponent = class _AboutHeroComponent {
  static \u0275fac = function AboutHeroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutHeroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutHeroComponent, selectors: [["app-about-hero"]], decls: 9, vars: 0, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-3", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["title", "About Us"]], template: function AboutHeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "About US");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
    }
  }, dependencies: [BreadcrumbComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutHeroComponent, [{
    type: Component,
    args: [{ selector: "app-about-hero", imports: [BreadcrumbComponent], template: '<div class="hero1-section-area about-bg-area">\n    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-3 m-auto">\n                <div class="hero-heading-area heading1 text-center">\n                    <h1>About US</h1>\n                    <app-breadcrumb title="About Us"/>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutHeroComponent, { className: "AboutHeroComponent", filePath: "src/app/views/other-pages/about/components/about-hero/about-hero.component.ts", lineNumber: 10 });
})();

// src/app/views/other-pages/about/components/about-us/about-us.component.ts
var AboutUsComponent = class _AboutUsComponent {
  static \u0275fac = function AboutUsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutUsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutUsComponent, selectors: [["app-about-us"]], decls: 39, vars: 0, consts: [[1, "about1-section-area", "sp1"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "about-images-area"], ["data-aos", "zoom-out", "data-aos-duration", "1000", 1, "img1"], ["src", "assets/img/all-images/about-img1.png", "alt", ""], ["data-aos", "zoom-out", "data-aos-duration", "1100", 1, "img2"], ["src", "assets/img/all-images/about-img2.png", "alt", ""], ["data-aos", "zoom-out", "data-aos-duration", "1200", 1, "conter-area"], [1, "counter"], [1, "about-header-area", "heading2"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "space10"], ["data-aos", "fade-left", "data-aos-duration", "1100"], ["src", "assets/img/icons/check1.svg", "alt", ""], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/about", 1, "header-btn1"], [1, "fa-solid", "fa-arrow-right"]], template: function AboutUsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9)(10, "h3")(11, "span", 10);
      \u0275\u0275text(12, "12");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, "+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p");
      \u0275\u0275text(15, "Years of Experienced");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(16, "div", 3)(17, "div", 11)(18, "h5");
      \u0275\u0275text(19, "About Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "h2", 12);
      \u0275\u0275text(21, "Charged with Purpose to Shaping Future of Energy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p", 13);
      \u0275\u0275text(23, "We more than just a provider of electricity services - we're pioneers in the energy industry, dedicated to shaping a brighter, more sustainable future for all.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "div", 14);
      \u0275\u0275elementStart(25, "ul", 15)(26, "li");
      \u0275\u0275element(27, "img", 16);
      \u0275\u0275text(28, "Highlight the unique features or benefits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "li");
      \u0275\u0275element(30, "img", 16);
      \u0275\u0275text(31, "Our Commitment to Sustainable Energy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "li");
      \u0275\u0275element(33, "img", 16);
      \u0275\u0275text(34, "Present your main solutions/services.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 17)(36, "a", 18);
      \u0275\u0275text(37, "About Us ");
      \u0275\u0275element(38, "i", 19);
      \u0275\u0275elementEnd()()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutUsComponent, [{
    type: Component,
    args: [{ selector: "app-about-us", imports: [], template: `<div class="about1-section-area sp1">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="about-images-area">
                    <div class="img1" data-aos="zoom-out" data-aos-duration="1000">
                        <img src="assets/img/all-images/about-img1.png" alt="">
                    </div>
                    <div class="img2" data-aos="zoom-out" data-aos-duration="1100">
                        <img src="assets/img/all-images/about-img2.png" alt="">
                    </div>
                    <div class="conter-area" data-aos="zoom-out" data-aos-duration="1200">
                        <h3><span class="counter">12</span>+</h3>
                        <p>Years of Experienced</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="about-header-area heading2">
                    <h5>About Us</h5>
                    <h2 class="tg-element-title">Charged with Purpose to Shaping Future of Energy</h2>
                    <p data-aos="fade-left" data-aos-duration="1000">We more than just a provider of electricity
                        services - we're pioneers in the energy industry, dedicated to shaping a brighter, more
                        sustainable future for all.</p>
                    <div class="space10"></div>
                    <ul data-aos="fade-left" data-aos-duration="1100">
                        <li><img src="assets/img/icons/check1.svg" alt="">Highlight the unique features or benefits</li>
                        <li><img src="assets/img/icons/check1.svg" alt="">Our Commitment to Sustainable Energy</li>
                        <li><img src="assets/img/icons/check1.svg" alt="">Present your main solutions/services.</li>
                    </ul>

                    <div class="btn-area" data-aos="fade-left" data-aos-duration="1200">
                        <a routerLink="/about" class="header-btn1">About Us <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutUsComponent, { className: "AboutUsComponent", filePath: "src/app/views/other-pages/about/components/about-us/about-us.component.ts", lineNumber: 9 });
})();

// src/app/views/other-pages/about/components/choose-us/choose-us.component.ts
var _c02 = (a0) => ({ width: a0 });
function ChooseUsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 21);
    \u0275\u0275element(6, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("item_value cell", i_r2 + 1, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r1.current, "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(6, _c02, item_r1.current + "%"));
  }
}
var ChooseUsComponent = class _ChooseUsComponent {
  progressItems = [
    { label: "AC installation in one hour", target: 80, current: 0 },
    { label: "Full-service electrical", target: 90, current: 0 },
    { label: "Wiring and installation", target: 70, current: 0 }
  ];
  ngOnInit() {
    this.animateProgress();
  }
  animateProgress() {
    const speed = 30;
    this.progressItems.forEach((item, idx) => {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= item.target) {
          this.progressItems[idx].current = i;
        } else {
          clearInterval(interval);
        }
        i++;
      }, speed);
    });
  }
  static \u0275fac = function ChooseUsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChooseUsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChooseUsComponent, selectors: [["app-choose-us"]], decls: 24, vars: 1, consts: [[1, "about2-section-area", "about-innerpage", "sp1"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], ["data-aos", "zoom-out", "data-aos-duration", "1000", 1, "about-images-area"], [1, "img1"], ["src", "assets/img/all-images/about-img3.png", "alt", ""], [1, "img2"], ["src", "assets/img/all-images/about-img4.png", "alt", ""], [1, "about-header-area", "heading2"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "space40"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "progress_bar"], ["class", "progress_bar_item grid-x", 4, "ngFor", "ngForOf"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/blogs/single", 1, "header-btn1"], [1, "fa-solid", "fa-arrow-right"], [1, "progress_bar_item", "grid-x"], [1, "item_label"], [1, "item_bar"], [1, "progress", 3, "ngStyle"]], template: function ChooseUsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 3)(10, "div", 9)(11, "h5", 10);
      \u0275\u0275text(12, "Why Choose Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h2", 11);
      \u0275\u0275text(14, "Illuminate Your Choice Reasons to Choose Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 12);
      \u0275\u0275text(16, "Because we're more than just an electricity provider \u2013 we're your trusted partner in power. With a commitment to reliability.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "div", 13);
      \u0275\u0275elementStart(18, "div", 14);
      \u0275\u0275template(19, ChooseUsComponent_div_19_Template, 7, 8, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 16)(21, "a", 17);
      \u0275\u0275text(22, "Find Out More ");
      \u0275\u0275element(23, "i", 18);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.progressItems);
    }
  }, dependencies: [CommonModule, NgForOf, NgStyle, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChooseUsComponent, [{
    type: Component,
    args: [{ selector: "app-choose-us", imports: [CommonModule, RouterLink], template: `<div class="about2-section-area about-innerpage sp1">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="about-images-area" data-aos="zoom-out" data-aos-duration="1000">
                    <div class="img1">
                        <img src="assets/img/all-images/about-img3.png" alt="">
                    </div>
                    <div class="img2">
                        <img src="assets/img/all-images/about-img4.png" alt="">
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="about-header-area heading2">
                    <h5 data-aos="fade-left" data-aos-duration="800">Why Choose Us</h5>
                    <h2 class="tg-element-title">Illuminate Your Choice Reasons to Choose Us</h2>
                    <p data-aos="fade-left" data-aos-duration="1000">Because we're more than just an electricity
                        provider \u2013 we're your trusted partner in power. With a commitment to reliability.</p>
                    <div class="space40"></div>
                    <div class="progress_bar" data-aos="fade-left" data-aos-duration="1200">
                        <div class="progress_bar_item grid-x" *ngFor="let item of progressItems;let i=index">
                          <div class="item_label">{{ item.label }}</div>
                          <div class="item_value cell{{i+1}}">{{ item.current }}%</div>
                          <div class="item_bar">
                            <div class="progress" [ngStyle]="{ width: item.current + '%' }"></div>
                          </div>
                        </div>
                      </div>
                      
                    <div class="btn-area" data-aos="fade-left" data-aos-duration="1200">
                        <a routerLink="/blogs/single" class="header-btn1">Find Out More <i
                                class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChooseUsComponent, { className: "ChooseUsComponent", filePath: "src/app/views/other-pages/about/components/choose-us/choose-us.component.ts", lineNumber: 11 });
})();

// src/app/views/other-pages/about/components/about-content/about-content.component.ts
var AboutContentComponent = class _AboutContentComponent {
  static \u0275fac = function AboutContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutContentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutContentComponent, selectors: [["app-about-content"]], decls: 47, vars: 0, consts: [[1, "about3-section-area", "aboutpage-inner", "sp1"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-5"], [1, "about3-header-area", "heading2"], [1, "tg-element-title"], [1, "misson-text"], ["src", "assets/img/icons/check4.svg", "alt", ""], [1, "btn-area"], ["routerLink", "/blogs/single", 1, "header-btn1"], [1, "fa-solid", "fa-arrow-right"], [1, "col-lg-1"], [1, "col-lg-6"], [1, "about-images-area"], [1, "row"], [1, "col-lg-6", "col-md-6"], [1, "img1"], [1, "space70", "d-md-block", "d-none"], [1, "space30", "d-md-none", "d-block"], ["src", "assets/img/all-images/about-img5.png", "alt", ""], ["src", "assets/img/all-images/about-img6.png", "alt", ""], [1, "about-footer-bottom"], [1, "img"], ["src", "assets/img/icons/star1.svg", "alt", ""], [1, "content"]], template: function AboutContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5");
      \u0275\u0275text(6, "Who Are We");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 5);
      \u0275\u0275text(8, "Energize Your Knowledge Get to Know Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, "With a commitment to sustainability, innovation, and customer satisfaction, we strive to provide reliable, efficient, and eco-friendly electricity services to homes, businesses.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 6)(12, "p");
      \u0275\u0275text(13, "Our Mission");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "ul")(15, "li");
      \u0275\u0275element(16, "img", 7);
      \u0275\u0275text(17, "Established fact that a reader will be distracted.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "li");
      \u0275\u0275element(19, "img", 7);
      \u0275\u0275text(20, "Sed ut perspiciatis unde omnis iste natus sit.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "li");
      \u0275\u0275element(22, "img", 7);
      \u0275\u0275text(23, "Trusted Electrical Services");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 8)(25, "a", 9);
      \u0275\u0275text(26, "View All Service ");
      \u0275\u0275element(27, "i", 10);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(28, "div", 11);
      \u0275\u0275elementStart(29, "div", 12)(30, "div", 13)(31, "div", 14)(32, "div", 15)(33, "div", 16);
      \u0275\u0275element(34, "div", 17)(35, "div", 18)(36, "img", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 15)(38, "div", 16);
      \u0275\u0275element(39, "div", 18)(40, "img", 20);
      \u0275\u0275elementStart(41, "div", 21)(42, "div", 22);
      \u0275\u0275element(43, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 24)(45, "span");
      \u0275\u0275text(46, "Approved Best Electricity ");
      \u0275\u0275elementEnd()()()()()()()()()()();
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutContentComponent, [{
    type: Component,
    args: [{ selector: "app-about-content", imports: [RouterLink], template: '<div class="about3-section-area aboutpage-inner sp1">\n    <div class="container">\n        <div class="row align-items-center">\n            <div class="col-lg-5">\n                <div class="about3-header-area heading2">\n                    <h5>Who Are We</h5>\n                    <h2 class="tg-element-title">Energize Your Knowledge Get to Know Us</h2>\n                    <p>With a commitment to sustainability, innovation, and customer satisfaction, we strive to provide\n                        reliable, efficient, and eco-friendly electricity services to homes, businesses.</p>\n                    <div class="misson-text">\n                        <p>Our Mission</p>\n                        <ul>\n                            <li><img src="assets/img/icons/check4.svg" alt="">Established fact that a reader will be\n                                distracted.</li>\n                            <li><img src="assets/img/icons/check4.svg" alt="">Sed ut perspiciatis unde omnis iste natus\n                                sit.</li>\n                            <li><img src="assets/img/icons/check4.svg" alt="">Trusted Electrical Services</li>\n                        </ul>\n                    </div>\n                    <div class="btn-area">\n                        <a routerLink="/blogs/single" class="header-btn1">View All Service <i\n                                class="fa-solid fa-arrow-right"></i></a>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-1"></div>\n            <div class="col-lg-6">\n                <div class="about-images-area">\n                    <div class="row">\n                        <div class="col-lg-6 col-md-6">\n                            <div class="img1">\n                                <div class="space70 d-md-block d-none"></div>\n                                <div class="space30 d-md-none d-block"></div>\n                                <img src="assets/img/all-images/about-img5.png" alt="">\n                            </div>\n                        </div>\n                        <div class="col-lg-6 col-md-6">\n                            <div class="img1">\n                                <div class="space30 d-md-none d-block"></div>\n                                <img src="assets/img/all-images/about-img6.png" alt="">\n                                <div class="about-footer-bottom">\n                                    <div class="img">\n                                        <img src="assets/img/icons/star1.svg" alt="">\n                                    </div>\n                                    <div class="content">\n                                        <span>Approved Best Electricity </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutContentComponent, { className: "AboutContentComponent", filePath: "src/app/views/other-pages/about/components/about-content/about-content.component.ts", lineNumber: 10 });
})();

// src/app/views/other-pages/about/components/data.ts
var teamMembers = [
  {
    name: "Shoaib Bashir",
    role: "Sales Manager",
    image: "assets/img/all-images/team-img1.png"
  },
  {
    name: "William Thompson",
    role: "Product Manager",
    image: "assets/img/all-images/team-img2.png"
  },
  {
    name: "Reece Toply",
    role: "Team Leader",
    image: "assets/img/all-images/team-img3.png"
  },
  {
    name: "Robert Anderson",
    role: "Sales Manager",
    image: "assets/img/all-images/team-img4.png"
  }
];
var blogs = [
  {
    image: "assets/img/all-images/blog-img1.png",
    title: "Electrifying Reads Explore Our Electricity",
    date: "April 2, 2024",
    category: "Electricity Corner",
    description: "Are you considering studying abroad and embarking on an visa to",
    aos: "flip-left",
    duration: 800
  },
  {
    image: "assets/img/all-images/blog-img2.png",
    title: "Empowering Energy Dive into Our Electricity",
    date: "April 2, 2024",
    category: "Electricity Corner",
    description: "From understanding our pricing plans to learning about our renewable",
    aos: "flip-right",
    duration: 1e3
  },
  {
    image: "assets/img/all-images/blog-img3.png",
    title: "Electricity Explained: Bloggin Power of Tomorrow",
    date: "April 2, 2024",
    category: "Electricity Corner",
    description: "We're committed to ensuring that you have all the information you need.",
    aos: "flip-left",
    duration: 1200
  }
];
var testimonialData = [
  {
    message: `\u201CBut don't just take our word for it \u2013 hear what our best satisfied customers have to say! From homeowners to businesses, our clients have experienced the difference our services make in their daily lives. Discover how to work we've helped businesses thrive client.`,
    authorImg: "assets/img/all-images/testimonial-img2.png",
    name: "Shakib Mahmud",
    role: "Happy Client"
  },
  {
    message: `\u201CBut don't just take our word for it \u2013 hear what our best satisfied customers have to say! From homeowners to businesses, our clients have experienced the difference our services make in their daily lives. Discover how to work we've helped businesses thrive client.`,
    authorImg: "assets/img/all-images/testimonial-img3.png",
    name: "Shakib Mahmud",
    role: "Happy Client"
  },
  {
    message: `\u201CBut don't just take our word for it \u2013 hear what our best satisfied customers have to say! From homeowners to businesses, our clients have experienced the difference our services make in their daily lives. Discover how to work we've helped businesses thrive client.`,
    authorImg: "assets/img/all-images/testimonial-img4.png",
    name: "Shakib Mahmud",
    role: "Happy Client"
  },
  {
    message: `\u201CBut don't just take our word for it \u2013 hear what our best satisfied customers have to say! From homeowners to businesses, our clients have experienced the difference our services make in their daily lives. Discover how to work we've helped businesses thrive client.`,
    authorImg: "assets/img/all-images/testimonial-img5.png",
    name: "Shakib Mahmud",
    role: "Happy Client"
  },
  {
    message: `\u201CBut don't just take our word for it \u2013 hear what our best satisfied customers have to say! From homeowners to businesses, our clients have experienced the difference our services make in their daily lives. Discover how to work we've helped businesses thrive client.`,
    authorImg: "assets/img/all-images/testimonial-img1.png",
    name: "Shakib Mahmud",
    role: "Happy Client"
  },
  {
    message: `\u201CBut don't just take our word for it \u2013 hear what our best satisfied customers have to say! From homeowners to businesses, our clients have experienced the difference our services make in their daily lives. Discover how to work we've helped businesses thrive client.`,
    authorImg: "assets/img/all-images/testimonial-img2.png",
    name: "Shakib Mahmud",
    role: "Happy Client"
  },
  {
    message: `\u201CBut don't just take our word for it \u2013 hear what our best satisfied customers have to say! From homeowners to businesses, our clients have experienced the difference our services make in their daily lives. Discover how to work we've helped businesses thrive client.`,
    authorImg: "assets/img/all-images/testimonial-img3.png",
    name: "Shakib Mahmud",
    role: "Happy Client"
  },
  {
    message: `\u201CBut don't just take our word for it \u2013 hear what our best satisfied customers have to say! From homeowners to businesses, our clients have experienced the difference our services make in their daily lives. Discover how to work we've helped businesses thrive client.`,
    authorImg: "assets/img/all-images/testimonial-img4.png",
    name: "Shakib Mahmud",
    role: "Happy Client"
  },
  {
    message: `\u201CBut don't just take our word for it \u2013 hear what our best satisfied customers have to say! From homeowners to businesses, our clients have experienced the difference our services make in their daily lives. Discover how to work we've helped businesses thrive client.`,
    authorImg: "assets/img/all-images/testimonial-img5.png",
    name: "Shakib Mahmud",
    role: "Happy Client"
  },
  {
    message: `\u201CBut don't just take our word for it \u2013 hear what our best satisfied customers have to say! From homeowners to businesses, our clients have experienced the difference our services make in their daily lives. Discover how to work we've helped businesses thrive client.`,
    authorImg: "assets/img/all-images/testimonial-img2.png",
    name: "Shakib Mahmud",
    role: "Happy Client"
  },
  {
    message: `\u201CBut don't just take our word for it \u2013 hear what our best satisfied customers have to say! From homeowners to businesses, our clients have experienced the difference our services make in their daily lives. Discover how to work we've helped businesses thrive client.`,
    authorImg: "assets/img/all-images/testimonial-img1.png",
    name: "Shakib Mahmud",
    role: "Happy Client"
  },
  {
    message: `\u201CBut don't just take our word for it \u2013 hear what our best satisfied customers have to say! From homeowners to businesses, our clients have experienced the difference our services make in their daily lives. Discover how to work we've helped businesses thrive client.`,
    authorImg: "assets/img/all-images/testimonial-img2.png",
    name: "Shakib Mahmud",
    role: "Happy Client"
  },
  {
    message: `\u201CBut don't just take our word for it \u2013 hear what our best satisfied customers have to say! From homeowners to businesses, our clients have experienced the difference our services make in their daily lives. Discover how to work we've helped businesses thrive client.`,
    authorImg: "assets/img/all-images/testimonial-img3.png",
    name: "Shakib Mahmud",
    role: "Happy Client"
  },
  {
    message: `\u201CBut don't just take our word for it \u2013 hear what our best satisfied customers have to say! From homeowners to businesses, our clients have experienced the difference our services make in their daily lives. Discover how to work we've helped businesses thrive client.`,
    authorImg: "assets/img/all-images/testimonial-img4.png",
    name: "Shakib Mahmud",
    role: "Happy Client"
  },
  {
    message: `\u201CBut don't just take our word for it \u2013 hear what our best satisfied customers have to say! From homeowners to businesses, our clients have experienced the difference our services make in their daily lives. Discover how to work we've helped businesses thrive client.`,
    authorImg: "assets/img/all-images/testimonial-img5.png",
    name: "Shakib Mahmud",
    role: "Happy Client"
  },
  {
    message: `\u201CBut don't just take our word for it \u2013 hear what our best satisfied customers have to say! From homeowners to businesses, our clients have experienced the difference our services make in their daily lives. Discover how to work we've helped businesses thrive client.`,
    authorImg: "assets/img/all-images/testimonial-img2.png",
    name: "Shakib Mahmud",
    role: "Happy Client"
  }
];

// src/app/views/other-pages/about/components/testimonial/testimonial.component.ts
function TestimonialComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "ul")(3, "li")(4, "a", 22);
    \u0275\u0275element(5, "i", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "li")(7, "a", 22);
    \u0275\u0275element(8, "i", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "li")(10, "a", 22);
    \u0275\u0275element(11, "i", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li")(13, "a", 22);
    \u0275\u0275element(14, "i", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li")(16, "a", 22);
    \u0275\u0275element(17, "i", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(18, "img", 24);
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 25)(22, "div", 26);
    \u0275\u0275element(23, "img", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 28)(25, "a", 29);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(20);
    \u0275\u0275textInterpolate(item_r1.message);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r1.authorImg, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.role);
  }
}
function TestimonialComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "img", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const thumb_r2 = ctx.$implicit;
    \u0275\u0275attribute("data-aos-duration", thumb_r2.aosDuration);
    \u0275\u0275advance();
    \u0275\u0275property("src", thumb_r2.image, \u0275\u0275sanitizeUrl);
  }
}
var TestimonialComponent = class _TestimonialComponent {
  testimonials = testimonialData;
  sliderForConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    asNavFor: ".slider-galeria-thumbs",
    prevArrow: ".testimonial-next-arrow",
    nextArrow: ".testimonial-prev-arrow"
  };
  sliderThumbConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    items: 15,
    arrows: true,
    asNavFor: ".slider-galeria",
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    infinite: false,
    prevArrow: ".testimonial-next-arrow",
    nextArrow: ".testimonial-prev-arrow"
  };
  thumbnails = [
    { image: "assets/img/all-images/testimonial-img1.png", aosDuration: 600 },
    { image: "assets/img/all-images/testimonial-img5.png", aosDuration: 800 },
    { image: "assets/img/all-images/testimonial-img3.png", aosDuration: 1e3 },
    { image: "assets/img/all-images/testimonial-img4.png", aosDuration: 1200 },
    { image: "assets/img/all-images/testimonial-img1.png", aosDuration: 1400 },
    { image: "assets/img/all-images/testimonial-img5.png" },
    { image: "assets/img/all-images/testimonial-img5.png" },
    { image: "assets/img/all-images/testimonial-img3.png" },
    { image: "assets/img/all-images/testimonial-img4.png" },
    { image: "assets/img/all-images/testimonial-img3.png" },
    { image: "assets/img/all-images/testimonial-img4.png" },
    { image: "assets/img/all-images/testimonial-img1.png" },
    { image: "assets/img/all-images/testimonial-img5.png" },
    { image: "assets/img/all-images/testimonial-img3.png" },
    { image: "assets/img/all-images/testimonial-img4.png" }
  ];
  static \u0275fac = function TestimonialComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TestimonialComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TestimonialComponent, selectors: [["app-testimonial"]], decls: 28, vars: 4, consts: [[1, "testimonial1-section-area", "sp1"], [1, "container"], [1, "row"], [1, "col-lg-4"], [1, "testimonial-header", "heading2"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/pages/testimonials", 1, "header-btn1"], [1, "fa-solid", "fa-arrow-right"], [1, "col-lg-8"], [1, "testimonial-vertical-slider"], [1, "col-lg-10"], [1, "slider-galeria", 3, "config"], ["ngxSlickItem", "", "class", "testimonial3-slider-content-area", 4, "ngFor", "ngForOf"], [1, "col-lg-2"], [1, "slider-galeria-thumbs", "text-center", "d-lg-block", "d-none", 3, "config"], ["ngxSlickItem", "", "class", "testimonial1-sliders-img", "data-aos", "fade-left", 4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "testimonial3-slider-content-area"], [1, "testimonial3-author-area"], ["href", ""], [1, "fa-solid", "fa-star"], ["src", "assets/img/icons/quito1.svg", "alt", "", 1, "quito1"], [1, "testimonial1-man-info-area"], [1, "mans-img"], ["alt", "", 3, "src"], [1, "man-text"], ["routerLink", "/pages/our-team"], ["ngxSlickItem", "", "data-aos", "fade-left", 1, "testimonial1-sliders-img"]], template: function TestimonialComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Testimonials");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Powerful Praise Hear from Our Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "We take pride in providing top-notch ");
      \u0275\u0275element(11, "br", 8);
      \u0275\u0275text(12, " electricity services that exceed our ");
      \u0275\u0275element(13, "br", 8);
      \u0275\u0275text(14, " customers' expectations.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9)(16, "a", 10);
      \u0275\u0275text(17, "View all reviews ");
      \u0275\u0275element(18, "i", 11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 12)(20, "div", 13)(21, "div", 2)(22, "div", 14)(23, "ngx-slick-carousel", 15);
      \u0275\u0275template(24, TestimonialComponent_div_24_Template, 29, 4, "div", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 17)(26, "ngx-slick-carousel", 18);
      \u0275\u0275template(27, TestimonialComponent_div_27_Template, 2, 2, "div", 19);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275property("config", ctx.sliderForConfig);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.testimonials);
      \u0275\u0275advance(2);
      \u0275\u0275property("config", ctx.sliderThumbConfig);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.thumbnails);
    }
  }, dependencies: [SlickCarouselModule, SlickCarouselComponent, SlickItemDirective, CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestimonialComponent, [{
    type: Component,
    args: [{ selector: "app-testimonial", imports: [SlickCarouselModule, CommonModule, RouterLink], template: `<div class="testimonial1-section-area sp1">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="testimonial-header heading2">
                    <h5 data-aos="fade-left" data-aos-duration="800">Testimonials</h5>
                    <h2 class="tg-element-title">Powerful Praise Hear from Our Customers</h2>
                    <p data-aos="fade-left" data-aos-duration="1000">We take pride in providing top-notch <br
                            class="d-lg-block d-none"> electricity services that exceed our <br
                            class="d-lg-block d-none"> customers' expectations.</p>
                    <div class="btn-area" data-aos="fade-left" data-aos-duration="1200">
                        <a routerLink="/pages/testimonials" class="header-btn1">View all reviews <i
                                class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

            <div class="col-lg-8">
                <div class="testimonial-vertical-slider">
                    <div class="row">
                        <div class="col-lg-10">
                            <ngx-slick-carousel [config]="sliderForConfig" class="slider-galeria">
                                <div *ngFor="let item of testimonials" ngxSlickItem
                                    class="testimonial3-slider-content-area">
                                    <div class="testimonial3-author-area">
                                        <ul>
                                            <li><a href=""><i class="fa-solid fa-star"></i></a></li>
                                            <li><a href=""><i class="fa-solid fa-star"></i></a></li>
                                            <li><a href=""><i class="fa-solid fa-star"></i></a></li>
                                            <li><a href=""><i class="fa-solid fa-star"></i></a></li>
                                            <li><a href=""><i class="fa-solid fa-star"></i></a></li>
                                        </ul>
                                        <img src="assets/img/icons/quito1.svg" alt="" class="quito1">
                                        <p>{{item.message}}</p>
                                    </div>
                                    <div class="testimonial1-man-info-area">
                                        <div class="mans-img">
                                            <img [src]="item.authorImg" alt="">
                                        </div>
                                        <div class="man-text">
                                            <a routerLink="/pages/our-team">{{item.name}}</a>
                                            <p>{{item.role}}</p>
                                        </div>
                                    </div>
                                </div>

                            </ngx-slick-carousel>
                        </div>
                        <div class="col-lg-2">
                            <ngx-slick-carousel [config]="sliderThumbConfig"
                                class="slider-galeria-thumbs text-center d-lg-block d-none">
                                <div *ngFor="let thumb of thumbnails" ngxSlickItem class="testimonial1-sliders-img"
                                    data-aos="fade-left" [attr.data-aos-duration]="thumb.aosDuration">
                                    <img [src]="thumb.image" alt="">
                                </div>

                            </ngx-slick-carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TestimonialComponent, { className: "TestimonialComponent", filePath: "src/app/views/other-pages/about/components/testimonial/testimonial.component.ts", lineNumber: 13 });
})();

// src/app/views/other-pages/about/components/team/team.component.ts
function TeamComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "app-member-card", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("member", member_r1);
  }
}
var TeamComponent = class _TeamComponent {
  teamMembers = teamMembers;
  static \u0275fac = function TeamComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamComponent, selectors: [["app-team"]], decls: 13, vars: 1, consts: [[1, "team1-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-6", "m-auto"], [1, "team-header-area", "heading2", "text-center"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], ["class", "col-lg-3 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6"], [3, "member"]], template: function TeamComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Our Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Electricity Service Offerings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, " From residential households to commercial enterprises, we provide reliable, efficient, and sustainable energy solutions.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 2);
      \u0275\u0275template(12, TeamComponent_div_12_Template, 2, 1, "div", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.teamMembers);
    }
  }, dependencies: [CommonModule, NgForOf, MemberCardComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamComponent, [{
    type: Component,
    args: [{ selector: "app-team", imports: [CommonModule, MemberCardComponent], template: '<div class="team1-section-area sp2">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-6 m-auto">\n                <div class="team-header-area heading2 text-center">\n                    <h5 data-aos="fade-left" data-aos-duration="800">Our Team</h5>\n                    <h2 class="tg-element-title">Electricity Service Offerings</h2>\n                    <p data-aos="fade-left" data-aos-duration="1000"> From residential households to commercial\n                        enterprises, we provide reliable, efficient, and sustainable energy solutions.</p>\n                </div>\n            </div>\n        </div>\n\n        <div class="row">\n            <div *ngFor="let member of teamMembers" class="col-lg-3 col-md-6">\n                <app-member-card [member]="member"/>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamComponent, { className: "TeamComponent", filePath: "src/app/views/other-pages/about/components/team/team.component.ts", lineNumber: 12 });
})();

// src/app/views/other-pages/about/components/brands/brands.component.ts
function BrandsComponent_ng_container_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "img", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const brand_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", brand_r1, \u0275\u0275sanitizeUrl);
  }
}
function BrandsComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BrandsComponent_ng_container_10_ng_template_1_Template, 2, 1, "ng-template", 8);
    \u0275\u0275elementContainerEnd();
  }
}
var BrandsComponent = class _BrandsComponent {
  brands = ["assets/img/elements/brand1.png", "assets/img/elements/brand2.png", "assets/img/elements/brand3.png", "assets/img/elements/brand4.png", "assets/img/elements/brand5.png"];
  carouselOptions = {
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    mouseDrag: true,
    items: 10,
    autoplay: true,
    smartSpeed: 2e3,
    autoplayTimeout: 3e3,
    responsive: {
      0: {
        items: 2,
        nav: false
      },
      600: {
        items: 3
      },
      1e3: {
        items: 5
      }
    }
  };
  static \u0275fac = function BrandsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrandsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrandsComponent, selectors: [["app-brands"]], decls: 11, vars: 2, consts: [[1, "slider-section-area"], [1, "container"], [1, "row"], [1, "col-lg-5", "m-auto"], [1, "header-slider", "text-center"], [1, "col-lg-12"], [1, "slider-images", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "img1"], ["alt", "", 3, "src"]], template: function BrandsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3");
      \u0275\u0275text(6, " More Than 5K+ Brands With Work Techzen ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(7, "div", 2)(8, "div", 5)(9, "owl-carousel-o", 6);
      \u0275\u0275template(10, BrandsComponent_ng_container_10_Template, 2, 0, "ng-container", 7);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("options", ctx.carouselOptions);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.brands);
    }
  }, dependencies: [CarouselModule, CarouselComponent, CarouselSlideDirective, CommonModule, NgForOf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrandsComponent, [{
    type: Component,
    args: [{ selector: "app-brands", imports: [CarouselModule, CommonModule], template: '<div class="slider-section-area">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-5 m-auto">\n                <div class="header-slider text-center">\n                    <h3> More Than 5K+ Brands With Work Techzen </h3>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-lg-12">\n                <owl-carousel-o class="slider-images" [options]="carouselOptions">\n                    <ng-container *ngFor="let brand of brands">\n                        <ng-template carouselSlide>\n                            <div class="img1">\n                                <img [src]="brand" alt="">\n                            </div>\n                        </ng-template>\n                    </ng-container>\n\n                </owl-carousel-o>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrandsComponent, { className: "BrandsComponent", filePath: "src/app/views/other-pages/about/components/brands/brands.component.ts", lineNumber: 11 });
})();

// src/app/views/other-pages/about/components/blogs/blogs.component.ts
function BlogsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10);
    \u0275\u0275element(3, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12)(5, "a", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "ul")(9, "li")(10, "a", 15);
    \u0275\u0275element(11, "i", 16);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "a", 15);
    \u0275\u0275element(15, "i", 17);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "p");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 18);
    \u0275\u0275text(20, "Learn more ");
    \u0275\u0275element(21, "i", 19);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-aos", blog_r1.aos)("data-aos-duration", blog_r1.duration);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", blog_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(blog_r1.title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(blog_r1.date);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(blog_r1.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blog_r1.description);
  }
}
var BlogsComponent = class _BlogsComponent {
  blogs = blogs;
  static \u0275fac = function BlogsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogsComponent, selectors: [["app-blogs"]], decls: 13, vars: 1, consts: [[1, "blog1-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-6", "m-auto"], [1, "blog-header", "heading2", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "800"], ["data-aos", "fade-up", "data-aos-duration", "1000"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [1, "blog-auhtor-boxarea"], [1, "img1"], ["alt", "", 3, "src"], [1, "blog-position"], ["routerLink", "/blogs/single", 1, "heading"], [1, "blog-content-area"], ["href", "javascript:void(0)"], [1, "fa-solid", "fa-calendar-days"], [1, "fa-solid", "fa-tag"], ["routerLink", "/blogs/single", 1, "learnmore"], [1, "fa-solid", "fa-arrow-right"]], template: function BlogsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Our Blog");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2");
      \u0275\u0275text(8, " Electricity News & Updates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10, "From residential households to commercial enterprises, we provide reliable, efficient, and sustainable energy solutions.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 2);
      \u0275\u0275template(12, BlogsComponent_div_12_Template, 22, 7, "div", 7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.blogs);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogsComponent, [{
    type: Component,
    args: [{ selector: "app-blogs", imports: [CommonModule, RouterLink], template: '<div class="blog1-section-area sp2">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-6 m-auto">\n                <div class="blog-header heading2 text-center">\n                    <h5 data-aos="fade-up" data-aos-duration="800">Our Blog</h5>\n                    <h2> Electricity News & Updates</h2>\n                    <p data-aos="fade-up" data-aos-duration="1000">From residential households to commercial\n                        enterprises, we provide reliable, efficient, and sustainable energy solutions.</p>\n                </div>\n            </div>\n        </div>\n\n        <div class="row">\n            <div class="col-lg-4 col-md-6" *ngFor="let blog of blogs" [attr.data-aos]="blog.aos"\n                [attr.data-aos-duration]="blog.duration">\n                <div class="blog-auhtor-boxarea">\n                    <div class="img1">\n                        <img [src]="blog.image" alt="">\n                    </div>\n                    <div class="blog-position">\n                        <a routerLink="/blogs/single" class="heading">{{ blog.title }}</a>\n                        <div class="blog-content-area">\n                            <ul>\n                                <li>\n                                    <a href="javascript:void(0)"><i class="fa-solid fa-calendar-days"></i>{{ blog.date }}</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0)"><i class="fa-solid fa-tag"></i>{{ blog.category }}</a>\n                                </li>\n                            </ul>\n                            <p>{{ blog.description }}</p>\n                            <a routerLink="/blogs/single" class="learnmore">Learn more <i\n                                    class="fa-solid fa-arrow-right"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogsComponent, { className: "BlogsComponent", filePath: "src/app/views/other-pages/about/components/blogs/blogs.component.ts", lineNumber: 12 });
})();

// src/app/views/other-pages/about/about.component.ts
var AboutComponent = class _AboutComponent {
  static \u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], decls: 8, vars: 0, template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-about-hero")(1, "app-about-us")(2, "app-about-content")(3, "app-choose-us")(4, "app-testimonial")(5, "app-team")(6, "app-brands")(7, "app-blogs");
    }
  }, dependencies: [AboutHeroComponent, AboutUsComponent, ChooseUsComponent, AboutContentComponent, TestimonialComponent, TeamComponent, BrandsComponent, BlogsComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutComponent, [{
    type: Component,
    args: [{ selector: "app-about", imports: [AboutHeroComponent, AboutUsComponent, ChooseUsComponent, AboutContentComponent, TestimonialComponent, TeamComponent, BrandsComponent, BlogsComponent], template: "<app-about-hero />\n<app-about-us />\n<app-about-content />\n<app-choose-us />\n<app-testimonial />\n<app-team />\n<app-brands />\n<app-blogs />" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/views/other-pages/about/about.component.ts", lineNumber: 17 });
})();

// src/app/views/other-pages/other-pages.route.ts
var OTHER_PAGES_ROUTES = [
  {
    path: "our-team",
    component: OurTeamComponent,
    data: { title: "Our Team" }
  },
  {
    path: "pricing-plan",
    component: PricingPlansComponent,
    data: { title: "Pricing Plan" }
  },
  {
    path: "testimonials",
    component: TestimonialsComponent,
    data: { title: "Testimonials" }
  },
  {
    path: "faq",
    component: FaqComponent,
    data: { title: "Faq" }
  },
  {
    path: "contact-us",
    component: ContactUsComponent,
    data: { title: "Contact Us" }
  },
  {
    path: "about",
    component: AboutComponent,
    data: { title: "About" }
  },
  {
    path: "404",
    component: Error404Component
  }
];
export {
  OTHER_PAGES_ROUTES
};
//# sourceMappingURL=chunk-EEOJUAHP.js.map
