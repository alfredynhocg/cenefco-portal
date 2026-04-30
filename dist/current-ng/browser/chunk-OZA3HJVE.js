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

// src/app/components/cards/service-card/service-card.component.ts
var ServiceCardComponent = class _ServiceCardComponent {
  service;
  static \u0275fac = function ServiceCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceCardComponent, selectors: [["app-service-card"]], inputs: { service: "service" }, decls: 13, vars: 3, consts: [[1, "service-auhtor-boxarea"], [1, "img1"], ["alt", "", 3, "src"], [1, "content-area"], ["routerLink", "/services/single"], ["routerLink", "/services/single", 1, "readmore"], [1, "fa-solid", "fa-arrow-right"]], template: function ServiceCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "h3");
      \u0275\u0275text(5, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "a", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "a", 5);
      \u0275\u0275text(11, "Learn More ");
      \u0275\u0275element(12, "i", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("src", ctx.service.image, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.service.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.service.description);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceCardComponent, [{
    type: Component,
    args: [{ selector: "app-service-card", imports: [RouterLink], template: '<div class="service-auhtor-boxarea">\n    <div class="img1">\n        <img [src]="service.image" alt="">\n    </div>\n    <div class="content-area">\n        <h3>01</h3>\n        <a routerLink="/services/single">{{service.title}}</a>\n        <p>{{service.description}}</p>\n        <a routerLink="/services/single" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>\n    </div>\n</div>' }]
  }], null, { service: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceCardComponent, { className: "ServiceCardComponent", filePath: "src/app/components/cards/service-card/service-card.component.ts", lineNumber: 11 });
})();

// src/app/views/services/service-1/service-1.component.ts
function Service1Component_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "app-service-card", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("service", service_r1);
  }
}
var Service1Component = class _Service1Component {
  services = [
    {
      id: 1,
      image: "assets/img/all-images/service-img1.png",
      title: "Bright Spark Services",
      description: "Explore our range of services below & discover how you power your life"
    },
    {
      id: 2,
      image: "assets/img/all-images/service-img2.png",
      title: "Energy Ease Packages",
      description: "With cutting-edge technology & industry expertise, we empower"
    },
    {
      id: 3,
      image: "assets/img/all-images/service-img3.png",
      title: "Electra Care Packages",
      description: "Our team of experts is committed to delivering high-quality services"
    },
    {
      id: 4,
      image: "assets/img/all-images/service-img7.png",
      title: "Voltage Wave Energy",
      description: "That's why we're committed to delivering top-notch services"
    },
    {
      id: 5,
      image: "assets/img/all-images/service-img8.png",
      title: "Energy Savvy Solutions",
      description: "We offer a comprehensive range of solutions designed to empower"
    },
    {
      id: 6,
      image: "assets/img/all-images/service-img9.png",
      title: "Circuit Works Energy",
      description: "The lights on and the energy flowing, powering your present"
    },
    {
      id: 7,
      image: "assets/img/all-images/service-img10.png",
      title: "Power Sync Solutions",
      description: "Explore our range of services below & discover how you power your life"
    },
    {
      id: 8,
      image: "assets/img/all-images/service-img11.png",
      title: "Voltify Energy Group",
      description: "Where we're dedicated to powering your life with reliable and efficient"
    },
    {
      id: 9,
      image: "assets/img/all-images/service-img12.png",
      title: "Joule Works Energy",
      description: "As a leading provider in the industry, we understand the crucial role that"
    }
  ];
  static \u0275fac = function Service1Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Service1Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Service1Component, selectors: [["app-service-1"]], decls: 15, vars: 1, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-4", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["title", "Service"], [1, "service1-section-area", "leftside", "sp1"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-12"], [1, "col-lg-4", "col-md-6"], [3, "service"]], template: function Service1Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Our Service");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 3);
      \u0275\u0275template(12, Service1Component_div_12_Template, 2, 1, "div", 8);
      \u0275\u0275elementStart(13, "div", 9);
      \u0275\u0275element(14, "app-pagination");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.services);
    }
  }, dependencies: [CommonModule, NgForOf, PaginationComponent, ServiceCardComponent, BreadcrumbComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Service1Component, [{
    type: Component,
    args: [{ selector: "app-service-1", imports: [CommonModule, PaginationComponent, ServiceCardComponent, BreadcrumbComponent], template: '<div class="hero1-section-area about-bg-area">\n    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-4 m-auto">\n                <div class="hero-heading-area heading1 text-center">\n                    <h1>Our Service</h1>\n                    <app-breadcrumb title="Service"/>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="service1-section-area leftside sp1">\n    <div class="container">\n        <div class="row">\n            <div *ngFor="let service of services" class="col-lg-4 col-md-6">\n                <app-service-card [service]="service"/>\n            </div>\n\n            <div class="col-lg-12">\n                <app-pagination />\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Service1Component, { className: "Service1Component", filePath: "src/app/views/services/service-1/service-1.component.ts", lineNumber: 14 });
})();

// src/app/views/services/components/service-content/service-content.component.ts
function ServiceContentComponent_For_42_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 16);
  }
}
function ServiceContentComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h2", 11)(2, "button", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, ServiceContentComponent_For_42_div_7_Template, 1, 0, "div", 15);
  }
  if (rf & 2) {
    const faq_r1 = ctx.$implicit;
    const \u0275$index_72_r2 = ctx.$index;
    const \u0275$count_72_r3 = ctx.$count;
    \u0275\u0275property("collapsed", \u0275$index_72_r2 === 0 ? false : true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", faq_r1.question, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r1.answer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(\u0275$index_72_r2 === \u0275$count_72_r3 - 1));
  }
}
var ServiceContentComponent = class _ServiceContentComponent {
  faqs = [
    {
      question: "How can I contact customer support if I have further questions?",
      answer: "We're your trusted partner in all things electrical. From initial consultation to ongoing support, we're committed to providing you with the highest level"
    },
    {
      question: "Do you offer any discounts or promotions for new customers?",
      answer: "We're your trusted partner in all things electrical. From initial consultation to ongoing support, we're committed to providing you with the highest level"
    },
    {
      question: "How long does it take to set up electricity services with your company?",
      answer: "We're your trusted partner in all things electrical. From initial consultation to ongoing support, we're committed to providing you with the highest level"
    },
    {
      question: "Can I switch to your services if I'm already with another provider?",
      answer: "We're your trusted partner in all things electrical. From initial consultation to ongoing support, we're committed to providing you with the highest level"
    },
    {
      question: "What happens if there's a power outage?",
      answer: "We're your trusted partner in all things electrical. From initial consultation to ongoing support, we're committed to providing you with the highest level"
    },
    {
      question: "What types of electricity plans do you offer?",
      answer: "We're your trusted partner in all things electrical. From initial consultation to ongoing support, we're committed to providing you with the highest level"
    }
  ];
  static \u0275fac = function ServiceContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceContentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceContentComponent, selectors: [["app-service-content"]], decls: 43, vars: 1, consts: [[1, "img1"], ["src", "assets/img/all-images/service-img13.png", "alt", ""], [1, "space32"], [1, "space16"], [1, "row"], [1, "col-lg-6"], ["src", "assets/img/all-images/service-img14.png", "alt", ""], ["src", "assets/img/all-images/service-img15.png", "alt", ""], [1, "faq-auhtor-area1"], ["ngbAccordion", "", "id", "accordionFlushExample", 1, "accordion-flush", 3, "closeOthers"], ["ngbAccordionItem", "", "data-aos", "fade-left", "data-aos-duration", "800", 3, "collapsed"], ["ngbAccordionHeader", ""], ["ngbAccordionButton", "", "type", "button"], ["id", "flush-collapseOne", "ngbAccordionCollapse", ""], ["ngbAccordionBody", ""], ["class", "space20", 4, "ngIf"], [1, "space20"]], template: function ServiceContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "h3");
      \u0275\u0275text(4, "Energy Ease Packages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "We pride ourselves on delivering comprehensive and innovative electricity services tailored to meet the diverse needs of our customers. With years of experience in the industry, we offer a wide range of solutions spanning from residential");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "Additionally, our team of skilled technicians is available around the clock to provide prompt and reliable emergency services, ensuring that you're never left in the dark");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "div", 3);
      \u0275\u0275elementStart(10, "h3");
      \u0275\u0275text(11, "Electricity Services That Illuminate Your World:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p");
      \u0275\u0275text(13, "Our services include installation, maintenance, and repair of electrical systems, ensuring that your home or business remains powered efficiently and safely. We specialize in renewable energy solutions, offering solar panel installation and energy storage ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p");
      \u0275\u0275text(15, "Whether you're interested in upgrading to energy-efficient appliances, implementing smart home automation systems , we're here to guide you every step of the way.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "div", 3);
      \u0275\u0275elementStart(17, "h3");
      \u0275\u0275text(18, "Empower Your World: Unleash the Power");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p");
      \u0275\u0275text(20, "Our commitment to excellence extends beyond the installation and maintenance of electrical systems. We also offer energy efficiency consultations to help you optimize your energy usage and reduce your monthly bills. Our team of experts will assess ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p");
      \u0275\u0275text(22, "Furthermore, we understand the importance of safety when it comes to electrical systems. That's why we adhere to the highest industry standards and prioritize safety");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 4)(24, "div", 5);
      \u0275\u0275element(25, "div", 2);
      \u0275\u0275elementStart(26, "div", 0);
      \u0275\u0275element(27, "img", 6)(28, "div", 2);
      \u0275\u0275elementStart(29, "p");
      \u0275\u0275text(30, "Our technicians are fully licensed and trained to handle all types of electrical work, ensuring that every installation");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 5);
      \u0275\u0275element(32, "div", 2);
      \u0275\u0275elementStart(33, "div", 0);
      \u0275\u0275element(34, "img", 7)(35, "div", 2);
      \u0275\u0275elementStart(36, "p");
      \u0275\u0275text(37, "Experience the difference with and let us help you power your life efficiently, sustainably, and safely.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(38, "div", 2);
      \u0275\u0275elementStart(39, "div", 8)(40, "div", 9);
      \u0275\u0275repeaterCreate(41, ServiceContentComponent_For_42_Template, 8, 4, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(40);
      \u0275\u0275property("closeOthers", true);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.faqs);
    }
  }, dependencies: [NgbAccordionModule, NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionBody, NgbAccordionCollapse, CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceContentComponent, [{
    type: Component,
    args: [{ selector: "app-service-content", imports: [NgbAccordionModule, CommonModule], template: `<div class="img1">
    <img src="assets/img/all-images/service-img13.png" alt="">
</div>
<div class="space32"></div>
<h3>Energy Ease Packages</h3>
<p>We pride ourselves on delivering comprehensive and innovative electricity services tailored to
    meet the diverse needs of our customers. With years of experience in the industry, we offer a
    wide range of solutions spanning from residential</p>
<p>Additionally, our team of skilled technicians is available around the clock to provide prompt and
    reliable emergency services, ensuring that you're never left in the dark</p>
<div class="space16"></div>
<h3>Electricity Services That Illuminate Your World:</h3>
<p>Our services include installation, maintenance, and repair of electrical systems, ensuring that
    your home or business remains powered efficiently and safely. We specialize in renewable energy
    solutions, offering solar panel installation and energy storage </p>
<p>Whether you're interested in upgrading to energy-efficient appliances, implementing smart home
    automation systems , we're here to guide you every step of the way.</p>
<div class="space16"></div>
<h3>Empower Your World: Unleash the Power</h3>
<p>Our commitment to excellence extends beyond the installation and maintenance of electrical
    systems. We also offer energy efficiency consultations to help you optimize your energy usage
    and reduce your monthly bills. Our team of experts will assess </p>
<p>Furthermore, we understand the importance of safety when it comes to electrical systems. That's
    why we adhere to the highest industry standards and prioritize safety</p>
<div class="row">
    <div class="col-lg-6">
        <div class="space32"></div>
        <div class="img1">
            <img src="assets/img/all-images/service-img14.png" alt="">
            <div class="space32"></div>
            <p>Our technicians are fully licensed and trained to handle all types of electrical
                work, ensuring that every installation</p>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="space32"></div>
        <div class="img1">
            <img src="assets/img/all-images/service-img15.png" alt="">
            <div class="space32"></div>
            <p>Experience the difference with and let us help you power your life efficiently,
                sustainably, and safely.</p>
        </div>
    </div>
</div>
<div class="space32"></div>
<div class="faq-auhtor-area1">
    <div ngbAccordion [closeOthers]="true" class="accordion-flush" id="accordionFlushExample">
        @for (faq of faqs; track $index;let first=$first;let id=$index;let last=$last) {
        <div ngbAccordionItem [collapsed]="first ? false : true" data-aos="fade-left" data-aos-duration="800">
            <h2 ngbAccordionHeader>
                <button ngbAccordionButton type="button">
                    {{faq.question}}
                </button>
            </h2>
            <div id="flush-collapseOne" ngbAccordionCollapse>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceContentComponent, { className: "ServiceContentComponent", filePath: "src/app/views/services/components/service-content/service-content.component.ts", lineNumber: 12 });
})();

// src/app/views/services/components/service-sidebar/service-sidebar.component.ts
var ServiceSidebarComponent = class _ServiceSidebarComponent {
  static \u0275fac = function ServiceSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceSidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceSidebarComponent, selectors: [["app-service-sidebar"]], decls: 62, vars: 0, consts: [[1, "service-leftside"], [1, "service-author-list"], ["href", "javascript:void(0)"], [1, "fa-solid", "fa-arrow-right"], [1, "helping-area"], [1, "d-lg-block", "d-none"], [1, "btn-area"], ["href", "tel:+917052101786", 1, "header-btn1"], [1, "fa-solid", "fa-phone-volume"], [1, "download-broucher"], ["href", "javascript:void(0)", 1, "header-btn1"], ["src", "assets/img/icons/download1.svg", "alt", ""], ["href", "javascript:void(0)", 1, "header-btn2"], [1, "social-icons"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-linkedin-in"], [1, "fa-brands", "fa-pinterest-p"]], template: function ServiceSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
      \u0275\u0275text(3, "Our Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ul")(5, "li")(6, "a", 2);
      \u0275\u0275text(7, "Energy Ease Packages ");
      \u0275\u0275element(8, "i", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li")(10, "a", 2);
      \u0275\u0275text(11, "Electra Care Packages ");
      \u0275\u0275element(12, "i", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li")(14, "a", 2);
      \u0275\u0275text(15, "Circuit Works Energy ");
      \u0275\u0275element(16, "i", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 2);
      \u0275\u0275text(19, "Energy Savvy Solutions ");
      \u0275\u0275element(20, "i", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "li")(22, "a", 2);
      \u0275\u0275text(23, "Voltage Wave Energy ");
      \u0275\u0275element(24, "i", 3);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "div", 4)(26, "h3");
      \u0275\u0275text(27, "If You Need Any Help ");
      \u0275\u0275element(28, "br", 5);
      \u0275\u0275text(29, " Contact With Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 6)(31, "a", 7);
      \u0275\u0275element(32, "i", 8);
      \u0275\u0275text(33, "+91 705 2101 786");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 9)(35, "h3");
      \u0275\u0275text(36, "Download Brochure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p");
      \u0275\u0275text(38, "We also offer innovative solar financing packages, ensuring that the transition.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 6)(40, "a", 10);
      \u0275\u0275element(41, "img", 11);
      \u0275\u0275text(42, "Pdf Download");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "a", 12);
      \u0275\u0275element(44, "img", 11);
      \u0275\u0275text(45, "Doc Download");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 13)(47, "h3");
      \u0275\u0275text(48, "Follow Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "ul")(50, "li")(51, "a", 2);
      \u0275\u0275element(52, "i", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "li")(54, "a", 2);
      \u0275\u0275element(55, "i", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "li")(57, "a", 2);
      \u0275\u0275element(58, "i", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "li")(60, "a", 2);
      \u0275\u0275element(61, "i", 17);
      \u0275\u0275elementEnd()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-service-sidebar", imports: [], template: '<div class="service-leftside">\n    <div class="service-author-list">\n        <h3>Our Services</h3>\n        <ul>\n            <li><a href="javascript:void(0)">Energy Ease Packages <i class="fa-solid fa-arrow-right"></i></a></li>\n            <li><a href="javascript:void(0)">Electra Care Packages <i class="fa-solid fa-arrow-right"></i></a></li>\n            <li><a href="javascript:void(0)">Circuit Works Energy <i class="fa-solid fa-arrow-right"></i></a></li>\n            <li><a href="javascript:void(0)">Energy Savvy Solutions <i class="fa-solid fa-arrow-right"></i></a></li>\n            <li><a href="javascript:void(0)">Voltage Wave Energy <i class="fa-solid fa-arrow-right"></i></a></li>\n        </ul>\n    </div>\n\n    <div class="helping-area">\n        <h3>If You Need Any Help <br class="d-lg-block d-none"> Contact With Us</h3>\n        <div class="btn-area">\n            <a href="tel:+917052101786" class="header-btn1"><i class="fa-solid fa-phone-volume"></i>+91 705\n                2101 786</a>\n        </div>\n    </div>\n    <div class="download-broucher">\n        <h3>Download Brochure</h3>\n        <p>We also offer innovative solar financing packages, ensuring that the transition.</p>\n        <div class="btn-area">\n            <a href="javascript:void(0)" class="header-btn1"><img src="assets/img/icons/download1.svg" alt="">Pdf\n                Download</a>\n            <a href="javascript:void(0)" class="header-btn2"><img src="assets/img/icons/download1.svg" alt="">Doc\n                Download</a>\n        </div>\n    </div>\n    <div class="social-icons">\n        <h3>Follow Us</h3>\n        <ul>\n            <li><a href="javascript:void(0)"><i class="fa-brands fa-facebook-f"></i></a></li>\n            <li><a href="javascript:void(0)"><i class="fa-brands fa-instagram"></i></a></li>\n            <li><a href="javascript:void(0)"><i class="fa-brands fa-linkedin-in"></i></a></li>\n            <li><a href="javascript:void(0)"><i class="fa-brands fa-pinterest-p"></i></a></li>\n        </ul>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceSidebarComponent, { className: "ServiceSidebarComponent", filePath: "src/app/views/services/components/service-sidebar/service-sidebar.component.ts", lineNumber: 9 });
})();

// src/app/views/services/components/view-services/view-services.component.ts
function ViewServicesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "app-service-card", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("service", service_r1);
  }
}
var ViewServicesComponent = class _ViewServicesComponent {
  services = [
    {
      id: 1,
      image: "assets/img/all-images/service-img1.png",
      title: "Bright Spark Services",
      description: "Explore our range of services below & discover how you power your life"
    },
    {
      id: 2,
      image: "assets/img/all-images/service-img2.png",
      title: "Energy Ease Packages",
      description: "With cutting-edge technology & industry expertise, we empower"
    },
    {
      id: 3,
      image: "assets/img/all-images/service-img3.png",
      title: "Electra Care Packages",
      description: "Our team of experts is committed to delivering high-quality services"
    }
  ];
  static \u0275fac = function ViewServicesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewServicesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewServicesComponent, selectors: [["app-view-services"]], decls: 9, vars: 1, consts: [[1, "service1-section-area", "leftside", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-6", "m-auto"], [1, "service-header-area", "heading2", "text-center"], [1, "tg-element-title"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [3, "service"]], template: function ViewServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "View Our More Services");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(7, "div", 2);
      \u0275\u0275template(8, ViewServicesComponent_div_8_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.services);
    }
  }, dependencies: [ServiceCardComponent, CommonModule, NgForOf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewServicesComponent, [{
    type: Component,
    args: [{ selector: "app-view-services", imports: [ServiceCardComponent, CommonModule], template: '<div class="service1-section-area leftside sp2">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-6 m-auto">\n                <div class="service-header-area heading2 text-center">\n                    <h2 class="tg-element-title">View Our More Services</h2>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div *ngFor="let service of services" class="col-lg-4 col-md-6">\n                <app-service-card [service]="service" />\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewServicesComponent, { className: "ViewServicesComponent", filePath: "src/app/views/services/components/view-services/view-services.component.ts", lineNumber: 12 });
})();

// src/app/views/services/service-left/service-left.component.ts
var ServiceLeftComponent = class _ServiceLeftComponent {
  static \u0275fac = function ServiceLeftComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceLeftComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceLeftComponent, selectors: [["app-service-left"]], decls: 18, vars: 0, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-7", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["title", "Our Service", "subTitle", "Energy Ease Packages"], [1, "service-leftside-area", "sp8"], [1, "col-lg-4"], [1, "col-lg-8"], [1, "service-rightside-area", "heading2"]], template: function ServiceLeftComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Energy Ease Packages");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 3)(12, "div", 8);
      \u0275\u0275element(13, "app-service-sidebar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9)(15, "div", 10);
      \u0275\u0275element(16, "app-service-content");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(17, "app-view-services");
    }
  }, dependencies: [BreadcrumbComponent, ServiceSidebarComponent, CommonModule, ServiceContentComponent, ViewServicesComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceLeftComponent, [{
    type: Component,
    args: [{ selector: "app-service-left", imports: [BreadcrumbComponent, ServiceSidebarComponent, CommonModule, ServiceContentComponent, ViewServicesComponent], template: '<div class="hero1-section-area about-bg-area">\n    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-7 m-auto">\n                <div class="hero-heading-area heading1 text-center">\n                    <h1>Energy Ease Packages</h1>\n                    <app-breadcrumb title="Our Service" subTitle="Energy Ease Packages" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="service-leftside-area sp8">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-4">\n                <app-service-sidebar />\n            </div>\n            <div class="col-lg-8">\n                <div class="service-rightside-area heading2">\n                    <app-service-content />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<app-view-services />' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceLeftComponent, { className: "ServiceLeftComponent", filePath: "src/app/views/services/service-left/service-left.component.ts", lineNumber: 15 });
})();

// src/app/views/services/service-right/service-right.component.ts
var ServiceRightComponent = class _ServiceRightComponent {
  static \u0275fac = function ServiceRightComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceRightComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceRightComponent, selectors: [["app-service-right"]], decls: 19, vars: 0, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-7", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["subTitle", "Energy Ease Packages", "title", "Our Service"], [1, "service-leftside-area", "sp8"], [1, "col-lg-8"], [1, "service-rightside-area", "heading2", "rightsidebar"], [1, "col-lg-4"]], template: function ServiceRightComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Energy Ease Packages");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 3)(12, "div", 8)(13, "div", 9);
      \u0275\u0275element(14, "app-service-content");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10);
      \u0275\u0275text(16, " \\");
      \u0275\u0275element(17, "app-service-sidebar");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(18, "app-view-services");
    }
  }, dependencies: [BreadcrumbComponent, ServiceContentComponent, ViewServicesComponent, ServiceSidebarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceRightComponent, [{
    type: Component,
    args: [{ selector: "app-service-right", imports: [BreadcrumbComponent, ServiceContentComponent, ViewServicesComponent, ServiceSidebarComponent], template: '<div class="hero1-section-area about-bg-area">\n    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-7 m-auto">\n                <div class="hero-heading-area heading1 text-center">\n                    <h1>Energy Ease Packages</h1>\n                    <app-breadcrumb subTitle="Energy Ease Packages" title="Our Service" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="service-leftside-area sp8">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8">\n                <div class="service-rightside-area heading2 rightsidebar">\n                    <app-service-content />\n                </div>\n            </div>\n            <div class="col-lg-4">\n                \\<app-service-sidebar />\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-view-services />' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceRightComponent, { className: "ServiceRightComponent", filePath: "src/app/views/services/service-right/service-right.component.ts", lineNumber: 13 });
})();

// src/app/views/services/service-single/service-single.component.ts
var ServiceSingleComponent = class _ServiceSingleComponent {
  static \u0275fac = function ServiceSingleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceSingleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceSingleComponent, selectors: [["app-service-single"]], decls: 16, vars: 0, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-7", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["subTitle", "Energy Ease Packages", "title", "Our Service"], [1, "service-leftside-area", "sp8"], [1, "col-lg-8", "m-auto"], [1, "service-rightside-area", "heading2", 2, "padding", "0"]], template: function ServiceSingleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Energy Ease Packages");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 3)(12, "div", 8)(13, "div", 9);
      \u0275\u0275element(14, "app-service-content");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(15, "app-view-services");
    }
  }, dependencies: [BreadcrumbComponent, ServiceContentComponent, ViewServicesComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceSingleComponent, [{
    type: Component,
    args: [{ selector: "app-service-single", imports: [BreadcrumbComponent, ServiceContentComponent, ViewServicesComponent], template: '<div class="hero1-section-area about-bg-area">\n    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-7 m-auto">\n                <div class="hero-heading-area heading1 text-center">\n                    <h1>Energy Ease Packages</h1>\n                    <app-breadcrumb subTitle="Energy Ease Packages" title="Our Service" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="service-leftside-area sp8">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8 m-auto">\n                <div class="service-rightside-area heading2" style="padding: 0;">\n                    <app-service-content />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-view-services />' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceSingleComponent, { className: "ServiceSingleComponent", filePath: "src/app/views/services/service-single/service-single.component.ts", lineNumber: 12 });
})();

// src/app/views/services/services.route.ts
var SERVICES_ROUTES = [
  {
    path: "services/one",
    component: Service1Component,
    data: { title: "Service One" }
  },
  {
    path: "services/left",
    component: ServiceLeftComponent,
    data: { title: "Service Left" }
  },
  {
    path: "services/right",
    component: ServiceRightComponent,
    data: { title: "Service Right" }
  },
  {
    path: "services/single",
    component: ServiceSingleComponent,
    data: { title: "Service Single" }
  }
];
export {
  SERVICES_ROUTES
};
//# sourceMappingURL=chunk-OZA3HJVE.js.map
