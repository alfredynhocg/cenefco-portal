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
import {
  FooterComponent,
  LoaderComponent,
  StickyScrollDirective,
  TopbarComponent
} from "./chunk-VJJDO76P.js";
import "./chunk-B2FZAM5Q.js";
import {
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem,
  NgbAccordionModule,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLinkBase,
  NgbNavLinkButton,
  NgbNavModule,
  NgbNavOutlet,
  NgbProgressbarModule
} from "./chunk-6V3XHZEX.js";
import {
  NavigationEnd,
  Router,
  RouterLink
} from "./chunk-FVGVLSI5.js";
import "./chunk-RAPM3SJS.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  CommonModule,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgZone,
  Output,
  PLATFORM_ID,
  filter,
  inject,
  isPlatformBrowser,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2UT764MQ.js";

// node_modules/countup.js/dist/countUp.min.js
var t = function() {
  return t = Object.assign || function(t2) {
    for (var i2, n = 1, s = arguments.length; n < s; n++) for (var a in i2 = arguments[n]) Object.prototype.hasOwnProperty.call(i2, a) && (t2[a] = i2[a]);
    return t2;
  }, t.apply(this, arguments);
};
var i = function() {
  function i2(i3, n, s) {
    var a = this;
    this.endVal = n, this.options = s, this.version = "2.8.1", this.defaults = {
      startVal: 0,
      decimalPlaces: 0,
      duration: 2,
      useEasing: true,
      useGrouping: true,
      useIndianSeparators: false,
      smartEasingThreshold: 999,
      smartEasingAmount: 333,
      separator: ",",
      decimal: ".",
      prefix: "",
      suffix: "",
      enableScrollSpy: false,
      scrollSpyDelay: 200,
      scrollSpyOnce: false
    }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.once = false, this.count = function(t2) {
      a.startTime || (a.startTime = t2);
      var i4 = t2 - a.startTime;
      a.remaining = a.duration - i4, a.useEasing ? a.countDown ? a.frameVal = a.startVal - a.easingFn(i4, 0, a.startVal - a.endVal, a.duration) : a.frameVal = a.easingFn(i4, a.startVal, a.endVal - a.startVal, a.duration) : a.frameVal = a.startVal + (a.endVal - a.startVal) * (i4 / a.duration);
      var n2 = a.countDown ? a.frameVal < a.endVal : a.frameVal > a.endVal;
      a.frameVal = n2 ? a.endVal : a.frameVal, a.frameVal = Number(a.frameVal.toFixed(a.options.decimalPlaces)), a.printValue(a.frameVal), i4 < a.duration ? a.rAF = requestAnimationFrame(a.count) : null !== a.finalEndVal ? a.update(a.finalEndVal) : a.options.onCompleteCallback && a.options.onCompleteCallback();
    }, this.formatNumber = function(t2) {
      var i4, n2, s2, e, o = t2 < 0 ? "-" : "";
      i4 = Math.abs(t2).toFixed(a.options.decimalPlaces);
      var r = (i4 += "").split(".");
      if (n2 = r[0], s2 = r.length > 1 ? a.options.decimal + r[1] : "", a.options.useGrouping) {
        e = "";
        for (var l = 3, h = 0, u = 0, p = n2.length; u < p; ++u) a.options.useIndianSeparators && 4 === u && (l = 2, h = 1), 0 !== u && h % l == 0 && (e = a.options.separator + e), h++, e = n2[p - u - 1] + e;
        n2 = e;
      }
      return a.options.numerals && a.options.numerals.length && (n2 = n2.replace(/[0-9]/g, function(t3) {
        return a.options.numerals[+t3];
      }), s2 = s2.replace(/[0-9]/g, function(t3) {
        return a.options.numerals[+t3];
      })), o + a.options.prefix + n2 + s2 + a.options.suffix;
    }, this.easeOutExpo = function(t2, i4, n2, s2) {
      return n2 * (1 - Math.pow(2, -10 * t2 / s2)) * 1024 / 1023 + i4;
    }, this.options = t(t({}, this.defaults), s), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = false), this.el = "string" == typeof i3 ? document.getElementById(i3) : i3, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, i3) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
      return a.handleScroll(a);
    }), window.onscroll = function() {
      window.onScrollFns.forEach(function(t2) {
        return t2();
      });
    }, this.handleScroll(this)));
  }
  return i2.prototype.handleScroll = function(t2) {
    if (t2 && window && !t2.once) {
      var i3 = window.innerHeight + window.scrollY, n = t2.el.getBoundingClientRect(), s = n.top + window.pageYOffset, a = n.top + n.height + window.pageYOffset;
      a < i3 && a > window.scrollY && t2.paused ? (t2.paused = false, setTimeout(function() {
        return t2.start();
      }, t2.options.scrollSpyDelay), t2.options.scrollSpyOnce && (t2.once = true)) : (window.scrollY > a || s > i3) && !t2.paused && t2.reset();
    }
  }, i2.prototype.determineDirectionAndSmartEasing = function() {
    var t2 = this.finalEndVal ? this.finalEndVal : this.endVal;
    this.countDown = this.startVal > t2;
    var i3 = t2 - this.startVal;
    if (Math.abs(i3) > this.options.smartEasingThreshold && this.options.useEasing) {
      this.finalEndVal = t2;
      var n = this.countDown ? 1 : -1;
      this.endVal = t2 + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
    } else this.endVal = t2, this.finalEndVal = null;
    null !== this.finalEndVal ? this.useEasing = false : this.useEasing = this.options.useEasing;
  }, i2.prototype.start = function(t2) {
    this.error || (this.options.onStartCallback && this.options.onStartCallback(), t2 && (this.options.onCompleteCallback = t2), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
  }, i2.prototype.pauseResume = function() {
    this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
  }, i2.prototype.reset = function() {
    cancelAnimationFrame(this.rAF), this.paused = true, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
  }, i2.prototype.update = function(t2) {
    cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t2), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
  }, i2.prototype.printValue = function(t2) {
    var i3;
    if (this.el) {
      var n = this.formattingFn(t2);
      if (null === (i3 = this.options.plugin) || void 0 === i3 ? void 0 : i3.render) this.options.plugin.render(this.el, n);
      else if ("INPUT" === this.el.tagName) this.el.value = n;
      else "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n;
    }
  }, i2.prototype.ensureNumber = function(t2) {
    return "number" == typeof t2 && !isNaN(t2);
  }, i2.prototype.validateValue = function(t2) {
    var i3 = Number(t2);
    return this.ensureNumber(i3) ? i3 : (this.error = "[CountUp] invalid start or end value: ".concat(t2), null);
  }, i2.prototype.resetDuration = function() {
    this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
  }, i2;
}();

// node_modules/ngx-countup/fesm2020/ngx-countup.mjs
var CountUpDirective = class {
  constructor(el, zone, platformId) {
    this.el = el;
    this.zone = zone;
    this.platformId = platformId;
    this.options = {};
    this.reanimateOnClick = true;
    this.complete = new EventEmitter();
  }
  // Re-animate if preference is set.
  onClick() {
    if (this.reanimateOnClick) {
      this.animate();
    }
  }
  ngOnChanges(changes) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const {
      options,
      endVal
    } = changes;
    if (this.countUp) {
      if (options?.currentValue !== void 0 || endVal?.currentValue !== void 0) {
        if (options?.currentValue !== void 0) {
          this.initAndRun();
        } else {
          if (!this.options.startVal) {
            this.options.startVal = this.countUp.frameVal;
          }
          this.zone.runOutsideAngular(() => {
            this.countUp.update(this.endVal);
          });
        }
      }
    } else {
      this.initAndRun();
    }
  }
  animate() {
    this.zone.runOutsideAngular(() => {
      this.countUp.reset();
      this.countUp.start(() => {
        this.zone.run(() => {
          this.complete.emit();
        });
      });
    });
  }
  initAndRun() {
    this.zone.runOutsideAngular(() => {
      this.countUp = new i(this.el.nativeElement, this.endVal, this.options);
      if (!this.options.enableScrollSpy) {
        this.animate();
      }
    });
  }
};
CountUpDirective.\u0275fac = function CountUpDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CountUpDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(PLATFORM_ID));
};
CountUpDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: CountUpDirective,
  selectors: [["", "countUp", ""]],
  hostBindings: function CountUpDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function CountUpDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  inputs: {
    endVal: [0, "countUp", "endVal"],
    options: "options",
    reanimateOnClick: "reanimateOnClick"
  },
  outputs: {
    complete: "complete"
  },
  standalone: false,
  features: [\u0275\u0275NgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountUpDirective, [{
    type: Directive,
    args: [{
      selector: "[countUp]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Object,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    endVal: [{
      type: Input,
      args: ["countUp"]
    }],
    options: [{
      type: Input
    }],
    reanimateOnClick: [{
      type: Input
    }],
    complete: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var CountUpModule = class {
};
CountUpModule.\u0275fac = function CountUpModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CountUpModule)();
};
CountUpModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: CountUpModule
});
CountUpModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [[]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountUpModule, [{
    type: NgModule,
    args: [{
      imports: [],
      declarations: [CountUpDirective],
      exports: [CountUpDirective]
    }]
  }], null, null);
})();

// src/app/views/demo/home-2/components/about-2/about-2.component.ts
function About2Component_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "h2")(3, "count-up", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "+ ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const counter_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-aos", "zoom-in")("data-aos-duration", counter_r1.duration);
    \u0275\u0275advance(3);
    \u0275\u0275property("countUp", counter_r1.count);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(counter_r1.count);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(counter_r1.label);
  }
}
var About2Component = class _About2Component {
  counterData = [
    { count: 450, duration: 1e3, label: "Active Clients" },
    { count: 990, duration: 1200, label: "Electricity Services" },
    { count: 45, duration: 1e3, label: "Team Advisors" },
    { count: 12, duration: 1200, label: "Years of Experienced" }
  ];
  static \u0275fac = function About2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _About2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _About2Component, selectors: [["app-about-2"]], decls: 33, vars: 2, consts: [[1, "about4-section-area", "sp1"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "about-header-area", "heading9"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "row"], ["class", "col-lg-6 col-md-6", 4, "ngFor", "ngForOf"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/about", 1, "header-btn7"], [1, "fa-solid", "fa-arrow-right"], [1, "about-images-area"], ["data-aos", "zoom-in", "data-aos-duration", "1000", 1, "img1"], ["src", "assets/img/all-images/about-img7.png", "alt", ""], ["src", "assets/img/elements/elements2.png", "alt", "", 1, "elements2"], ["data-aos", "zoom-in", "data-aos-duration", "1100", 1, "img2"], ["src", "assets/img/all-images/about-img8.png", "alt", ""], ["data-aos", "zoom-in", "data-aos-duration", "1200", 1, "content-experiance"], [3, "countUp"], [1, "col-lg-6", "col-md-6"], [1, "counter-box"]], template: function About2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "About Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Empowering Communities with Sustainable Energy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Our team of experienced professionals is driven by a shared vision of creating a brighter, cleaner future through innovative technology and unparalleled service.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275template(12, About2Component_div_12_Template, 8, 5, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 10)(14, "a", 11);
      \u0275\u0275text(15, "About Us");
      \u0275\u0275element(16, "i", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 3)(18, "div", 13)(19, "div", 14);
      \u0275\u0275element(20, "img", 15)(21, "img", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 17);
      \u0275\u0275element(23, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 19)(25, "h3");
      \u0275\u0275text(26, "Our Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "h2")(28, "count-up", 20);
      \u0275\u0275text(29, "12");
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, "+ ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p");
      \u0275\u0275text(32, "Years of Experienced");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.counterData);
      \u0275\u0275advance(16);
      \u0275\u0275property("countUp", 12);
    }
  }, dependencies: [CountUpModule, CountUpDirective, CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(About2Component, [{
    type: Component,
    args: [{ selector: "app-about-2", imports: [CountUpModule, CommonModule, RouterLink], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="about4-section-area sp1">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="about-header-area heading9">
                    <h5 data-aos="fade-left" data-aos-duration="800">About Us</h5>
                    <h2 class="tg-element-title">Empowering Communities with Sustainable Energy</h2>
                    <p data-aos="fade-left" data-aos-duration="1000">Our team of experienced professionals is driven by
                        a shared vision of creating a brighter, cleaner future through innovative technology and
                        unparalleled service.</p>
                    <div class="row">
                        <div class="col-lg-6 col-md-6" *ngFor="let counter of counterData; let i = index"
                            [attr.data-aos]="'zoom-in'" [attr.data-aos-duration]="counter.duration">
                            <div class="counter-box">
                                <h2>
                                    <count-up [countUp]="counter.count">{{counter.count}}</count-up>+
                                </h2>
                                <p>{{ counter.label }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="btn-area" data-aos="fade-left" data-aos-duration="1200">
                        <a routerLink="/about" class="header-btn7">About Us<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="about-images-area">
                    <div class="img1" data-aos="zoom-in" data-aos-duration="1000">
                        <img src="assets/img/all-images/about-img7.png" alt="">
                        <img src="assets/img/elements/elements2.png" alt="" class="elements2">
                    </div>
                    <div class="img2" data-aos="zoom-in" data-aos-duration="1100">
                        <img src="assets/img/all-images/about-img8.png" alt="">
                    </div>
                    <div class="content-experiance" data-aos="zoom-in" data-aos-duration="1200">
                        <h3>Our Company</h3>
                        <h2>
                            <count-up [countUp]="12">12</count-up>+
                        </h2>
                        <p>Years of Experienced</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(About2Component, { className: "About2Component", filePath: "src/app/views/demo/home-2/components/about-2/about-2.component.ts", lineNumber: 13 });
})();

// src/app/views/demo/home-2/components/data.ts
var caseStudies = [
  {
    image: "assets/img/all-images/case-img7.png",
    icon: "assets/img/icons/case-icons1.svg",
    title: "Eco-Electric Chronicles",
    description: "Explore our range of services below & discover how.",
    duration: 800
  },
  {
    image: "assets/img/all-images/case-img8.png",
    icon: "assets/img/icons/case-icons2.svg",
    title: "Bright Spark Services",
    description: "Explore our range of services below & discover how.",
    duration: 1e3
  },
  {
    image: "assets/img/all-images/case-img9.png",
    icon: "assets/img/icons/case-icons3.svg",
    title: "Best Power and Progress",
    description: "Explore our range of services below & discover how.",
    duration: 1200
  }
];
var teamMembers = [
  {
    image: "assets/img/all-images/team-img1.png",
    name: "Shoaib Bashir",
    role: "Sales Manager",
    aosDuration: 800
  },
  {
    image: "assets/img/all-images/team-img3.png",
    name: "Reece Toply",
    role: "Team Leader",
    aosDuration: 1200
  },
  {
    image: "assets/img/all-images/team-img4.png",
    name: "Robert Anderson",
    role: "Sales Manager",
    aosDuration: 1400
  }
];
var testimonials = [
  {
    rating: 5,
    description: "\u201CDiscover why our customers love our electricity services Read testimonials from satisfied clients who have experienced the reliability, efficiency, and excellence\u201D",
    image: "assets/img/all-images/testimonial-img10.png",
    name: "Richardson",
    role: "Team Leader"
  },
  {
    rating: 5,
    description: "\u201CDiscover why our customers love our electricity services Read testimonials from satisfied clients who have experienced the reliability, efficiency, and excellence\u201D",
    image: "assets/img/all-images/testimonial-img11.png",
    name: "Issuant Sharma",
    role: "Team Leader"
  },
  {
    rating: 5,
    description: "\u201CDiscover why our customers love our electricity services Read testimonials from satisfied clients who have experienced the reliability, efficiency, and excellence\u201D",
    image: "assets/img/all-images/testimonial-img10.png",
    name: "Richardson",
    role: "Team Leader"
  },
  {
    rating: 5,
    description: "\u201CDiscover why our customers love our electricity services Read testimonials from satisfied clients who have experienced the reliability, efficiency, and excellence\u201D",
    image: "assets/img/all-images/testimonial-img11.png",
    name: "Issuant Sharma",
    role: "Team Leader"
  }
];
var faqs = [
  {
    question: "What types of electricity plans do you offer?",
    answer: "We understand that navigating the world of electricity services can <br> be daunting, which is why we've compiled this comprehensive."
  },
  {
    question: "How do I sign up for your electricity services?",
    answer: "We understand that navigating the world of electricity services can <br> be daunting, which is why we've compiled this comprehensive."
  },
  {
    question: "What happens if there's a power outage?",
    answer: "We understand that navigating the world of electricity services can <br> be daunting, which is why we've compiled this comprehensive."
  },
  {
    question: "How can I track my energy usage with your services?",
    answer: "We understand that navigating the world of electricity services can <br> be daunting, which is why we've compiled this comprehensive."
  },
  {
    question: "Do you offer any discounts or promotions for new customers?",
    answer: "We understand that navigating the world of electricity services can <br> be daunting, which is why we've compiled this comprehensive."
  },
  {
    question: "What types of electricity plans do you offer?",
    answer: "We understand that navigating the world of electricity services can <br> be daunting, which is why we've compiled this comprehensive."
  }
];
var blogs = [
  {
    image: "assets/img/all-images/blog-img10.png",
    title: "Exploring Energy Solutions Eco-Electric Insights",
    description: "Welcome to our electricity services blog! Stay informed and inspired.",
    date: "Apr 20, 2024"
  },
  {
    image: "assets/img/all-images/blog-img11.png",
    title: "Illuminating Energy Trends Power Perspectives",
    description: "Whether you're a homeowner looking to reduce your energy bills, a business",
    date: "Apr 20, 2024"
  },
  {
    image: "assets/img/all-images/blog-img12.png",
    title: "Spark Connections: Engage with Our Energy",
    description: "Join us as we explore topics ranging from renewable energy sources",
    date: "Apr 20, 2024"
  }
];

// src/app/views/demo/home-2/components/case-study/case-study.component.ts
function CaseStudyComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275element(3, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15);
    \u0275\u0275element(6, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 17);
    \u0275\u0275text(12, " Learn More ");
    \u0275\u0275element(13, "i", 18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-aos", "zoom-in")("data-aos-duration", item_r1.duration);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r1.icon, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.description);
  }
}
var CaseStudyComponent = class _CaseStudyComponent {
  caseStudies = caseStudies;
  static \u0275fac = function CaseStudyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CaseStudyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaseStudyComponent, selectors: [["app-case-study"]], decls: 15, vars: 1, consts: [[1, "casestudy4-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "case-header", "text-center", "heading11"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [1, "case-boxes-area"], [1, "img1"], ["alt", "", 3, "src"], [1, "content-area"], [1, "icons"], ["routerLink", "/case-study-single"], ["routerLink", "/case-study-single", 1, "readmore"], [1, "fa-solid", "fa-arrow-right"]], template: function CaseStudyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Case Studies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, " Case Studies in Energy Transformation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "From residential households to commercial enterprises, we provide reliable, efficient, ");
      \u0275\u0275element(11, "br", 8);
      \u0275\u0275text(12, " and sustainable energy solutions.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 2);
      \u0275\u0275template(14, CaseStudyComponent_div_14_Template, 14, 6, "div", 9);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.caseStudies);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaseStudyComponent, [{
    type: Component,
    args: [{ selector: "app-case-study", imports: [CommonModule, RouterLink], template: `<div class="casestudy4-section-area sp2">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="case-header text-center heading11">
                    <h5 data-aos="fade-up" data-aos-duration="800">Case Studies</h5>
                    <h2 class="tg-element-title"> Case Studies in Energy Transformation</h2>
                    <p data-aos="fade-up" data-aos-duration="1000">From residential households to commercial
                        enterprises, we provide reliable, efficient, <br class="d-lg-block d-none"> and sustainable
                        energy solutions.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-4 col-md-6" *ngFor="let item of caseStudies" [attr.data-aos]="'zoom-in'"
                [attr.data-aos-duration]="item.duration">
                <div class="case-boxes-area">
                    <div class="img1">
                        <img [src]="item.image" alt="">
                    </div>
                    <div class="content-area">
                        <div class="icons">
                            <img [src]="item.icon" alt="">
                        </div>
                        <a routerLink="/case-study-single">{{ item.title }}</a>
                        <p>{{ item.description }}</p>
                        <a routerLink="/case-study-single" class="readmore">
                            Learn More <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaseStudyComponent, { className: "CaseStudyComponent", filePath: "src/app/views/demo/home-2/components/case-study/case-study.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-2/components/hero-2/hero-2.component.ts
var Hero2Component = class _Hero2Component {
  static \u0275fac = function Hero2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Hero2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Hero2Component, selectors: [["app-hero-2"]], decls: 69, vars: 0, consts: [[1, "hero4-section-area"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "hero4-header-textarea"], [1, "col-lg-9", "m-auto"], [1, "header-text", "text-center", "heading8"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/contact-us", 1, "header-btn7"], [1, "fa-solid", "fa-arrow-right"], ["routerLink", "/contact-us", 1, "header-btn8"], [1, "row", "align-items-center"], [1, "col-lg-2"], ["data-aos", "fade-left", "data-aos-duration", "1000", 1, "header-left-side"], ["src", "assets/img/all-images/header-bottom2.png", "alt", "", 1, "bottom2"], [1, "d-flex", "align-items-center", "gap-1", "flex-wrap", "justify-content-lg-start", "justify-content-center"], [1, "fa-solid", "fa-star"], ["src", "assets/img/icons/arrow2.svg", "alt", "", 1, "arrow2"], [1, "percent-electri"], [1, "counter"], [1, "d-lg-block", "d-none"], [1, "col-lg-1"], ["data-aos", "zoom-in", "data-aos-duration", "1000", 1, "col-lg-6"], [1, "header-images"], ["src", "assets/img/all-images/header-img6.png", "alt", "", 1, "header-img6"], ["src", "assets/img/elements/elements1.png", "alt", "", 1, "elements1"], [1, "col-lg-3"], ["data-aos", "fade-right", "data-aos-duration", "1000", 1, "images-text-area"], [1, "content-area"], [1, "icons"], ["src", "assets/img/icons/bizli.svg", "alt", ""], [1, "pera"], [1, "img"], ["src", "assets/img/icons/arrow3.png", "alt", ""], [1, "pera2"]], template: function Hero2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 2)(6, "div", 5)(7, "div", 6)(8, "h5", 7);
      \u0275\u0275text(9, "Current Electricity Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h1", 8);
      \u0275\u0275text(11, "Current Innovation Leading The Way in Electricity Services ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 9)(13, "a", 10);
      \u0275\u0275text(14, "Get a Free Estimate ");
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 12);
      \u0275\u0275text(17, "Discover More ");
      \u0275\u0275element(18, "i", 11);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(19, "div", 13)(20, "div", 14)(21, "div", 15);
      \u0275\u0275element(22, "img", 16);
      \u0275\u0275elementStart(23, "p")(24, "span");
      \u0275\u0275text(25, "4K");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, "Happy Client");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "ul", 17)(28, "li");
      \u0275\u0275element(29, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "li");
      \u0275\u0275element(31, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "li");
      \u0275\u0275element(33, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "li");
      \u0275\u0275element(35, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "li");
      \u0275\u0275element(37, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(38, "img", 19);
      \u0275\u0275elementStart(39, "div", 20)(40, "h3")(41, "span", 21);
      \u0275\u0275text(42, "89");
      \u0275\u0275elementEnd();
      \u0275\u0275text(43, "%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p");
      \u0275\u0275text(45, "Electricity Client ");
      \u0275\u0275element(46, "br", 22);
      \u0275\u0275text(47, " Services Success ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(48, "div", 23);
      \u0275\u0275elementStart(49, "div", 24)(50, "div", 25);
      \u0275\u0275element(51, "img", 26)(52, "img", 27)(53, "img", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 28)(55, "div", 29)(56, "div", 30)(57, "div", 31);
      \u0275\u0275element(58, "img", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 33)(60, "p");
      \u0275\u0275text(61, "Powered by ");
      \u0275\u0275element(62, "br", 22);
      \u0275\u0275text(63, " Electricity Services ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 34);
      \u0275\u0275element(65, "img", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 36)(67, "p");
      \u0275\u0275text(68, "With cutting-edge technology and industry expertise, we empower");
      \u0275\u0275elementEnd()()()()()()()()()();
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Hero2Component, [{
    type: Component,
    args: [{ selector: "app-hero-2", imports: [RouterLink], template: '<div class="hero4-section-area">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-12">\n                <div class="hero4-header-textarea">\n                    <div class="row">\n                        <div class="col-lg-9 m-auto">\n                            <div class="header-text text-center heading8">\n                                <h5 data-aos="fade-up" data-aos-duration="800">Current Electricity Services</h5>\n                                <h1 class="tg-element-title">Current Innovation Leading The Way in Electricity Services\n                                </h1>\n                                <div class="btn-area" data-aos="fade-up" data-aos-duration="1200">\n                                    <a routerLink="/contact-us" class="header-btn7">Get a Free Estimate <i\n                                            class="fa-solid fa-arrow-right"></i></a>\n                                    <a routerLink="/contact-us" class="header-btn8">Discover More <i\n                                            class="fa-solid fa-arrow-right"></i></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="row align-items-center">\n                        <div class="col-lg-2">\n                            <div class="header-left-side" data-aos="fade-left" data-aos-duration="1000">\n                                <img src="assets/img/all-images/header-bottom2.png" alt="" class="bottom2">\n                                <p><span>4K</span>Happy Client</p>\n                                <ul class="d-flex align-items-center gap-1 flex-wrap justify-content-lg-start justify-content-center ">\n                                    <li><i class="fa-solid fa-star"></i></li>\n                                    <li><i class="fa-solid fa-star"></i></li>\n                                    <li><i class="fa-solid fa-star"></i></li>\n                                    <li><i class="fa-solid fa-star"></i></li>\n                                    <li><i class="fa-solid fa-star"></i></li>\n                                </ul>\n                                <img src="assets/img/icons/arrow2.svg" alt="" class="arrow2">\n\n                                <div class="percent-electri">\n                                    <h3><span class="counter">89</span>%</h3>\n                                    <p>Electricity Client <br class="d-lg-block d-none"> Services Success </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-lg-1"></div>\n                        <div class="col-lg-6" data-aos="zoom-in" data-aos-duration="1000">\n                            <div class="header-images">\n                                <img src="assets/img/all-images/header-img6.png" alt="" class="header-img6">\n                                <img src="assets/img/elements/elements1.png" alt="" class="elements1">\n                                <img src="assets/img/icons/arrow2.svg" alt="" class="arrow2">\n                            </div>\n                        </div>\n                        <div class="col-lg-3">\n                            <div class="images-text-area" data-aos="fade-right" data-aos-duration="1000">\n                                <div class="content-area">\n                                    <div class="icons">\n                                        <img src="assets/img/icons/bizli.svg" alt="">\n                                    </div>\n                                    <div class="pera">\n                                        <p>Powered by <br class="d-lg-block d-none"> Electricity Services </p>\n                                    </div>\n                                </div>\n                                <div class="img">\n                                    <img src="assets/img/icons/arrow3.png" alt="">\n                                </div>\n                                <div class="pera2">\n                                    <p>With cutting-edge technology and industry expertise, we empower</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Hero2Component, { className: "Hero2Component", filePath: "src/app/views/demo/home-2/components/hero-2/hero-2.component.ts", lineNumber: 10 });
})();

// src/app/views/demo/home-2/components/our-mission/our-mission.component.ts
function OurMissionComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23);
    \u0275\u0275element(3, "img", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 22)(5, "div", 25)(6, "h3", 7);
    \u0275\u0275text(7, "Empowering a Sustainable Future Electricity Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 26);
    \u0275\u0275text(9, "Through cutting-edge technology, renewable energy solutions, and unwavering dedication, we aim to empower communities, businesses, and individuals alike to embrace cleaner,");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 27);
    \u0275\u0275text(11, "With every connection we make and every service we provide, we are driven by our passion for sustainability and our determination .");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 28)(13, "a", 29);
    \u0275\u0275text(14, "Contact Us");
    \u0275\u0275element(15, "i", 30);
    \u0275\u0275elementEnd()()()()();
  }
}
function OurMissionComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 31);
    \u0275\u0275element(3, "img", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 22)(5, "div", 25)(6, "h3");
    \u0275\u0275text(7, "Empowering a Sustainable Future Electricity Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Through cutting-edge technology, renewable energy solutions, and unwavering dedication, we aim to empower communities, businesses, and individuals alike to embrace cleaner,");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "With every connection we make and every service we provide, we are driven by our passion for sustainability and our determination .");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 32)(13, "a", 29);
    \u0275\u0275text(14, "Contact Us");
    \u0275\u0275element(15, "i", 30);
    \u0275\u0275elementEnd()()()()();
  }
}
function OurMissionComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 31);
    \u0275\u0275element(3, "img", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 22)(5, "div", 25)(6, "h3");
    \u0275\u0275text(7, "Empowering a Sustainable Future Electricity Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Through cutting-edge technology, renewable energy solutions, and unwavering dedication, we aim to empower communities, businesses, and individuals alike to embrace cleaner,");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "With every connection we make and every service we provide, we are driven by our passion for sustainability and our determination .");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 32)(13, "a", 29);
    \u0275\u0275text(14, "Contact Us");
    \u0275\u0275element(15, "i", 30);
    \u0275\u0275elementEnd()()()()();
  }
}
var OurMissionComponent = class _OurMissionComponent {
  activeTab = 1;
  tabItems = [
    {
      title: "Our Mission",
      img: "assets/img/all-images/mission-img1.png",
      heading: "Empowering a Sustainable Future Electricity Services",
      paragraphs: [
        "Through cutting-edge technology, renewable energy solutions, and unwavering dedication, we aim to empower communities, businesses, and individuals alike to embrace cleaner,",
        "With every connection we make and every service we provide, we are driven by our passion for sustainability and our determination ."
      ]
    },
    {
      title: "Our Vision",
      img: "assets/img/all-images/mission-img1.png",
      heading: "Empowering a Sustainable Future Electricity Services",
      paragraphs: [
        "Through cutting-edge technology, renewable energy solutions, and unwavering dedication, we aim to empower communities, businesses, and individuals alike to embrace cleaner,",
        "With every connection we make and every service we provide, we are driven by our passion for sustainability and our determination ."
      ]
    },
    {
      title: "Our Golds",
      img: "assets/img/all-images/mission-img1.png",
      heading: "Empowering a Sustainable Future Electricity Services",
      paragraphs: [
        "Through cutting-edge technology, renewable energy solutions, and unwavering dedication, we aim to empower communities, businesses, and individuals alike to embrace cleaner,",
        "With every connection we make and every service we provide, we are driven by our passion for sustainability and our determination ."
      ]
    }
  ];
  static \u0275fac = function OurMissionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OurMissionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OurMissionComponent, selectors: [["app-our-mission"]], decls: 31, vars: 5, consts: [["nav", "ngbNav"], [1, "mission-section-area", "sp1"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "mission-header-area", "heading9", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], [1, "col-lg-12"], [1, "tabs-auhtor-area"], ["ngbNav", "", "id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", 3, "activeIdChange", "activeId"], ["role", "presentation", "data-aos", "zoom-in", "data-aos-duration", "800", 1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", "id", "pills-mission1-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-mission1", "type", "button", "role", "tab", "aria-controls", "pills-mission1", "aria-selected", "true", 1, "nav-link"], ["ngbNavContent", ""], ["role", "presentation", "data-aos", "zoom-in", "data-aos-duration", "1000", 1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", "id", "pills-mission2-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-mission2", "type", "button", "role", "tab", "aria-controls", "pills-mission2", "aria-selected", "false", 1, "nav-link"], ["role", "presentation", "data-aos", "zoom-in", "data-aos-duration", "1200", 1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", "id", "pills-mission3-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-mission3", "type", "button", "role", "tab", "aria-controls", "pills-mission3", "aria-selected", "false", 1, "nav-link"], [1, "tab-content", 3, "ngbNavOutlet"], [1, "row", "align-items-center"], [1, "col-lg-6"], ["data-aos", "zoom-in", "data-aos-duration", "1000", 1, "mission-img"], ["src", "assets/img/all-images/mission-img1.png", "alt", ""], [1, "mission-content-area", "heading10"], ["data-aos", "fade-left", "data-aos-duration", "900"], ["data-aos", "fade-left", "data-aos-duration", "1000"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/contact-us", 1, "header-btn7"], [1, "fa-solid", "fa-arrow-right"], [1, "mission-img"], [1, "btn-area"]], template: function OurMissionComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h5", 6);
      \u0275\u0275text(6, "Our Mission");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 7);
      \u0275\u0275text(8, "Our Bold Mission in Electricity Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 8);
      \u0275\u0275text(10, " We are committed to providing innovative electricity services that not only meet the needs of ");
      \u0275\u0275element(11, "br", 9);
      \u0275\u0275text(12, " today but also safeguard the environment for generations to come");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 3)(14, "div", 10)(15, "div", 11)(16, "ul", 12, 0);
      \u0275\u0275twoWayListener("activeIdChange", function OurMissionComponent_Template_ul_activeIdChange_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.activeTab, $event) || (ctx.activeTab = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(18, "li", 13)(19, "button", 14);
      \u0275\u0275text(20, " Our Mission ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, OurMissionComponent_ng_template_21_Template, 16, 0, "ng-template", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "li", 16)(23, "button", 17);
      \u0275\u0275text(24, " Our Vision ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, OurMissionComponent_ng_template_25_Template, 16, 0, "ng-template", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "li", 18)(27, "button", 19);
      \u0275\u0275text(28, " Our Golds ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, OurMissionComponent_ng_template_29_Template, 16, 0, "ng-template", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(30, "div", 20);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const nav_r2 = \u0275\u0275reference(17);
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("activeId", ctx.activeTab);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngbNavItem", 1);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngbNavItem", 2);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngbNavItem", 3);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngbNavOutlet", nav_r2);
    }
  }, dependencies: [NgbNavModule, NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLinkButton, NgbNavLinkBase, NgbNavOutlet, CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OurMissionComponent, [{
    type: Component,
    args: [{ selector: "app-our-mission", imports: [NgbNavModule, CommonModule, RouterLink], template: '<div class="mission-section-area sp1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8 m-auto">\n                <div class="mission-header-area heading9 text-center">\n                    <h5 data-aos="fade-up" data-aos-duration="800">Our Mission</h5>\n                    <h2 class="tg-element-title">Our Bold Mission in Electricity Services</h2>\n                    <p data-aos="fade-up" data-aos-duration="1000"> We are committed to providing innovative electricity\n                        services that not only meet the needs of <br class="d-lg-block d-none"> today but also safeguard\n                        the environment for generations to come</p>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-lg-12">\n                <div class="tabs-auhtor-area">\n                    <ul ngbNav #nav="ngbNav" [(activeId)]="activeTab" class="nav nav-pills" id="pills-tab"\n                        role="tablist">\n                        <li [ngbNavItem]="1" class="nav-item" role="presentation" data-aos="zoom-in"\n                            data-aos-duration="800">\n                            <button ngbNavLink class="nav-link" id="pills-mission1-tab" data-bs-toggle="pill"\n                                data-bs-target="#pills-mission1" type="button" role="tab" aria-controls="pills-mission1"\n                                aria-selected="true">\n                                Our Mission\n                            </button>\n                            <ng-template ngbNavContent>\n                                    <div class="row align-items-center">\n                                        <div class="col-lg-6">\n                                            <div class="mission-img" data-aos="zoom-in" data-aos-duration="1000">\n                                                <img src="assets/img/all-images/mission-img1.png" alt="">\n                                            </div>\n                                        </div>\n                                        <div class="col-lg-6">\n                                            <div class="mission-content-area heading10">\n                                                <h3 class="tg-element-title">Empowering a Sustainable Future Electricity\n                                                    Services</h3>\n                                                <p data-aos="fade-left" data-aos-duration="900">Through cutting-edge\n                                                    technology, renewable energy solutions, and unwavering dedication,\n                                                    we aim to empower communities, businesses, and individuals alike to\n                                                    embrace cleaner,</p>\n                                                <p data-aos="fade-left" data-aos-duration="1000">With every connection\n                                                    we make and every service we provide, we are driven by our passion\n                                                    for sustainability and our determination .</p>\n                                                <div class="btn-area" data-aos="fade-left" data-aos-duration="1200">\n                                                    <a routerLink="/contact-us" class="header-btn7">Contact Us<i\n                                                            class="fa-solid fa-arrow-right"></i></a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                            </ng-template>\n                        </li>\n                        <li [ngbNavItem]="2" class="nav-item" role="presentation" data-aos="zoom-in"\n                            data-aos-duration="1000">\n                            <button ngbNavLink class="nav-link" id="pills-mission2-tab" data-bs-toggle="pill"\n                                data-bs-target="#pills-mission2" type="button" role="tab" aria-controls="pills-mission2"\n                                aria-selected="false">\n                                Our Vision\n                            </button>\n                            <ng-template ngbNavContent>\n                                    <div class="row align-items-center">\n                                        <div class="col-lg-6">\n                                            <div class="mission-img">\n                                                <img src="assets/img/all-images/mission-img1.png" alt="">\n                                            </div>\n                                        </div>\n                                        <div class="col-lg-6">\n                                            <div class="mission-content-area heading10">\n                                                <h3>Empowering a Sustainable Future Electricity Services</h3>\n                                                <p>Through cutting-edge technology, renewable energy solutions, and\n                                                    unwavering dedication, we aim to empower communities, businesses,\n                                                    and individuals alike to embrace cleaner,</p>\n                                                <p>With every connection we make and every service we provide, we are\n                                                    driven by our passion for sustainability and our determination .</p>\n                                                <div class="btn-area">\n                                                    <a routerLink="/contact-us" class="header-btn7">Contact Us<i\n                                                            class="fa-solid fa-arrow-right"></i></a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                            </ng-template>\n\n                        </li>\n                        <li [ngbNavItem]="3" class="nav-item" role="presentation" data-aos="zoom-in"\n                            data-aos-duration="1200">\n                            <button ngbNavLink class="nav-link" id="pills-mission3-tab" data-bs-toggle="pill"\n                                data-bs-target="#pills-mission3" type="button" role="tab" aria-controls="pills-mission3"\n                                aria-selected="false">\n                                Our Golds\n                            </button>\n                            <ng-template ngbNavContent>\n                           \n                                <div class="row align-items-center">\n                                    <div class="col-lg-6">\n                                        <div class="mission-img">\n                                            <img src="assets/img/all-images/mission-img1.png" alt="">\n                                        </div>\n                                    </div>\n                                    <div class="col-lg-6">\n                                        <div class="mission-content-area heading10">\n                                            <h3>Empowering a Sustainable Future Electricity Services</h3>\n                                            <p>Through cutting-edge technology, renewable energy solutions, and unwavering\n                                                dedication, we aim to empower communities, businesses, and individuals alike\n                                                to embrace cleaner,</p>\n                                            <p>With every connection we make and every service we provide, we are driven by\n                                                our passion for sustainability and our determination .</p>\n                                            <div class="btn-area">\n                                                <a routerLink="/contact-us" class="header-btn7">Contact Us<i\n                                                        class="fa-solid fa-arrow-right"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </li>\n                    </ul>\n                    <div [ngbNavOutlet]="nav" class="tab-content"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OurMissionComponent, { className: "OurMissionComponent", filePath: "src/app/views/demo/home-2/components/our-mission/our-mission.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-2/components/team-2/team-2.component.ts
function Team2Component_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275element(3, "img", 12);
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14)(6, "ul", 15)(7, "li")(8, "a", 16);
    \u0275\u0275element(9, "i", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li")(11, "a", 16);
    \u0275\u0275element(12, "i", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "a", 16);
    \u0275\u0275element(15, "i", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li")(17, "a", 16);
    \u0275\u0275element(18, "i", 20);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(19, "div", 21)(20, "a", 22);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("data-aos-duration", member_r1.aosDuration);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", member_r1.image, \u0275\u0275sanitizeUrl)("alt", member_r1.name);
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate(member_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r1.role);
  }
}
var Team2Component = class _Team2Component {
  teamMembers = teamMembers;
  static \u0275fac = function Team2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Team2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Team2Component, selectors: [["app-team-2"]], decls: 13, vars: 1, consts: [[1, "team4-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-7", "m-auto"], [1, "team-header-area", "heading9", "text-center"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], ["data-aos", "fade-up", 1, "team-auhtor-boxarea"], [1, "images"], [3, "src", "alt"], [1, "team-social-area"], [1, "icons"], [1, "d-flex", "align-items-center", "gap-1", "flex-wrap", "justify-content-center"], ["href", "javascript:void(0)"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-pinterest-p"], [1, "fa-brands", "fa-youtube"], [1, "content-area"], ["routerLink", "/our-team"]], template: function Team2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Our Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Get to Know Our Talented Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, " With a focus on collaboration, innovation, and customer satisfaction, we strive to exceed expectations at every turn.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 2);
      \u0275\u0275template(12, Team2Component_div_12_Template, 24, 5, "div", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.teamMembers);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Team2Component, [{
    type: Component,
    args: [{ selector: "app-team-2", imports: [CommonModule, RouterLink], template: '<div class="team4-section-area sp2">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-7 m-auto">\n                <div class="team-header-area heading9 text-center">\n                    <h5 data-aos="fade-left" data-aos-duration="800">Our Team</h5>\n                    <h2 class="tg-element-title">Get to Know Our Talented Team</h2>\n                    <p data-aos="fade-left" data-aos-duration="1000"> With a focus on collaboration, innovation, and\n                        customer satisfaction, we strive to exceed expectations at every turn.</p>\n                </div>\n            </div>\n        </div>\n\n        <div class="row">\n            <div class="col-lg-4 col-md-6" *ngFor="let member of teamMembers">\n                <div class="team-auhtor-boxarea" data-aos="fade-up" [attr.data-aos-duration]="member.aosDuration">\n                    <div class="images">\n                        <img [src]="member.image" [alt]="member.name" />\n                        <div class="team-social-area">\n                            <div class="icons">\n                                <ul class="d-flex align-items-center gap-1 flex-wrap justify-content-center">\n                                    <li><a href="javascript:void(0)"><i class="fa-brands fa-instagram"></i></a></li>\n                                    <li><a href="javascript:void(0)"><i class="fa-brands fa-facebook-f"></i></a></li>\n                                    <li><a href="javascript:void(0)"><i class="fa-brands fa-pinterest-p"></i></a></li>\n                                    <li><a href="javascript:void(0)"><i class="fa-brands fa-youtube"></i></a></li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="content-area">\n                        <a routerLink="/our-team">{{ member.name }}</a>\n                        <p>{{ member.role }}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Team2Component, { className: "Team2Component", filePath: "src/app/views/demo/home-2/components/team-2/team-2.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-2/components/testimonial-2/testimonial-2.component.ts
var _c0 = () => [];
function Testimonial2Component_ng_container_19_ng_template_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275elementEnd();
  }
}
function Testimonial2Component_ng_container_19_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "ul", 17);
    \u0275\u0275template(2, Testimonial2Component_ng_container_19_ng_template_1_li_2_Template, 2, 0, "li", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "div", 19);
    \u0275\u0275element(7, "img", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 21)(9, "a", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const testimonial_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(6, _c0).constructor(testimonial_r1.rating));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(testimonial_r1.description);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", testimonial_r1.name);
    \u0275\u0275property("src", testimonial_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(testimonial_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(testimonial_r1.role);
  }
}
function Testimonial2Component_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Testimonial2Component_ng_container_19_ng_template_1_Template, 13, 7, "ng-template", 15);
    \u0275\u0275elementContainerEnd();
  }
}
var Testimonial2Component = class _Testimonial2Component {
  testimonials = testimonials;
  customOptions = {
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    mouseDrag: true,
    items: 10,
    autoplay: true,
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    smartSpeed: 3e3,
    autoplayTimeout: 4e3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2
      },
      1e3: {
        items: 2
      }
    }
  };
  static \u0275fac = function Testimonial2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Testimonial2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Testimonial2Component, selectors: [["app-testimonial-2"]], decls: 20, vars: 2, consts: [[1, "testimonial4-section-area", "sp1"], [1, "container"], [1, "row"], [1, "col-lg-4"], [1, "testimonial-header", "heading9"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/contact-us", 1, "header-btn7"], [1, "fa-solid", "fa-arrow-right"], [1, "col-lg-8"], [1, "testimonial-slider-boxarea4", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "tesimonial-slider"], [1, "d-flex", "align-items-center", "gap-1", "flex-wrap"], [1, "auhtor-images"], [1, "img1"], [3, "src", "alt"], [1, "text"], ["routerLink", "/our-team"], [1, "fa-solid", "fa-star"]], template: function Testimonial2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Testimonials");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Happy Customers Stories from");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, " Our team of experienced professionals is ");
      \u0275\u0275element(11, "br", 8);
      \u0275\u0275text(12, " driven by a shared vision of creating a ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9)(14, "a", 10);
      \u0275\u0275text(15, "Contact Us ");
      \u0275\u0275element(16, "i", 11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 12)(18, "owl-carousel-o", 13);
      \u0275\u0275template(19, Testimonial2Component_ng_container_19_Template, 2, 0, "ng-container", 14);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("options", ctx.customOptions);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.testimonials);
    }
  }, dependencies: [CarouselModule, CarouselComponent, CarouselSlideDirective, CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Testimonial2Component, [{
    type: Component,
    args: [{ selector: "app-testimonial-2", imports: [CarouselModule, CommonModule, RouterLink], template: '<div class="testimonial4-section-area sp1">\n    <div class="container">\n      <div class="row">\n        <div class="col-lg-4">\n          <div class="testimonial-header heading9">\n            <h5 data-aos="fade-left" data-aos-duration="800">Testimonials</h5>\n            <h2 class="tg-element-title">Happy Customers Stories from</h2>\n            <p data-aos="fade-left" data-aos-duration="1000"> Our team of experienced professionals is <br class="d-lg-block d-none"> driven by a shared vision of creating a </p>\n            <div class="btn-area" data-aos="fade-left" data-aos-duration="1200">\n              <a routerLink="/contact-us" class="header-btn7">Contact Us <i class="fa-solid fa-arrow-right"></i></a>\n            </div>\n          </div>\n        </div>\n        <div class="col-lg-8">\n            <owl-carousel-o [options]="customOptions" class="testimonial-slider-boxarea4">\n                <ng-container *ngFor="let testimonial of testimonials">\n                  <ng-template carouselSlide>\n                    <div class="tesimonial-slider">\n                      <ul class="d-flex align-items-center gap-1 flex-wrap">\n                        <li *ngFor="let star of [].constructor(testimonial.rating)">\n                          <i class="fa-solid fa-star"></i>\n                        </li>\n                      </ul>\n                      <p>{{ testimonial.description }}</p>\n                      <div class="auhtor-images">\n                        <div class="img1">\n                          <img [src]="testimonial.image" alt="{{ testimonial.name }}">\n                        </div>\n                        <div class="text">\n                          <a routerLink="/our-team">{{ testimonial.name }}</a>\n                          <p>{{ testimonial.role }}</p>\n                        </div>\n                      </div>\n                    </div>\n                  </ng-template>\n                </ng-container>\n              </owl-carousel-o>\n              \n        </div>\n      </div>\n    </div>\n  </div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Testimonial2Component, { className: "Testimonial2Component", filePath: "src/app/views/demo/home-2/components/testimonial-2/testimonial-2.component.ts", lineNumber: 13 });
})();

// src/app/views/demo/home-2/components/faq-2/faq-2.component.ts
function Faq2Component_For_21_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function Faq2Component_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "h2", 16)(2, "button", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 18)(5, "div", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, Faq2Component_For_21_div_7_Template, 1, 0, "div", 20);
  }
  if (rf & 2) {
    const faq_r1 = ctx.$implicit;
    const \u0275$index_37_r2 = ctx.$index;
    const \u0275$count_37_r3 = ctx.$count;
    \u0275\u0275property("collapsed", \u0275$index_37_r2 === 0 ? false : true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", faq_r1.question, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r1.answer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(\u0275$index_37_r2 === \u0275$count_37_r3 - 1));
  }
}
var Faq2Component = class _Faq2Component {
  faqs = faqs;
  static \u0275fac = function Faq2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Faq2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Faq2Component, selectors: [["app-faq-2"]], decls: 22, vars: 1, consts: [[1, "faq4-section-area", "sp1"], [1, "container"], [1, "row"], [1, "col-lg-7", "m-auto"], [1, "faq-header-area", "heading9", "text-center"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], [1, "col-lg-5"], [1, "faq-images"], ["src", "assets/img/all-images/faq-img2.png", "alt", ""], [1, "col-lg-7"], [1, "faq-auhtoir-area2"], ["ngbAccordion", "", "id", "accordionFlushExample", 1, "accordion", "accordion-flush", 3, "closeOthers"], ["ngbAccordionItem", "", "data-aos", "fade-left", "data-aos-duration", "800", 3, "collapsed"], ["ngbAccordionHeader", ""], ["ngbAccordionButton", "", "type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseOne", "aria-expanded", "false", "aria-controls", "flush-collapseOne"], ["id", "flush-collapseOne", "ngbAccordionCollapse", "", "data-bs-parent", "#accordionFlushExample"], ["ngbAccordionBody", ""], ["class", "space20", 4, "ngIf"], [1, "space20"]], template: function Faq2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "FAQ\u2019S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Electricity Essentials FAQ Section");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Have questions about our electricity services? You're in the right place! Browse ");
      \u0275\u0275element(11, "br", 8);
      \u0275\u0275text(12, " through our frequently asked questions to find answers to common.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 2)(14, "div", 9)(15, "div", 10);
      \u0275\u0275element(16, "img", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "div", 14);
      \u0275\u0275repeaterCreate(20, Faq2Component_For_21_Template, 8, 4, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275property("closeOthers", true);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.faqs);
    }
  }, dependencies: [NgbAccordionModule, NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionBody, NgbAccordionCollapse, CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Faq2Component, [{
    type: Component,
    args: [{ selector: "app-faq-2", imports: [NgbAccordionModule, CommonModule], template: `<div class="faq4-section-area sp1">
    <div class="container">
        <div class="row ">
            <div class="col-lg-7 m-auto">
                <div class="faq-header-area heading9 text-center">
                    <h5 data-aos="fade-left" data-aos-duration="800">FAQ\u2019S</h5>
                    <h2 class="tg-element-title">Electricity Essentials FAQ Section</h2>
                    <p data-aos="fade-left" data-aos-duration="1000">Have questions about our electricity services?
                        You're in the right place! Browse <br class="d-lg-block d-none"> through our frequently asked
                        questions to find answers to common.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-5">
                <div class="faq-images">
                    <img src="assets/img/all-images/faq-img2.png" alt="">
                </div>
            </div>
            <div class="col-lg-7">
                <div class="faq-auhtoir-area2">
                    <div ngbAccordion [closeOthers]="true" class="accordion accordion-flush" id="accordionFlushExample">
                        @for (faq of faqs; track $index;let first=$first;let id=$index;let last=$last) {
                            <div ngbAccordionItem [collapsed]="first ? false : true" data-aos="fade-left" data-aos-duration="800">
                                <h2 ngbAccordionHeader>
                                    <button ngbAccordionButton type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                       {{faq.question}}
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" ngbAccordionCollapse
                                    data-bs-parent="#accordionFlushExample">
                                    <div ngbAccordionBody>{{faq.answer}}</div>
                                </div>
                            </div>
                            <div *ngIf="!last" class="space20"></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Faq2Component, { className: "Faq2Component", filePath: "src/app/views/demo/home-2/components/faq-2/faq-2.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-2/components/contact-2/contact-2.component.ts
var Contact2Component = class _Contact2Component {
  static \u0275fac = function Contact2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Contact2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Contact2Component, selectors: [["app-contact-2"]], decls: 40, vars: 0, consts: [[1, "contact4-section-area", "sp1", 2, "background-image", "url(assets/img/all-images/contact-bg4.png)", "background-position", "center", "background-position", "center", "background-repeat", "no-repeat", "background-size", "cover"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "contact-submit-boxarea"], ["action", "https://api.web3forms.com/submit", "method", "POST"], ["type", "hidden", "name", "access_key", "value", "0cd32fff-eda2-4da3-be43-37d47fbb396b"], [1, "row"], [1, "input-area"], ["type", "text", "placeholder", "Name", "required", ""], ["type", "number", "placeholder", "Phone", "required", ""], [1, "col-lg-12"], ["type", "email", "placeholder", "Email", "required", ""], ["placeholder", "Describe your inquiry", "cols", "30", "rows", "10", "required", ""], [1, "input-area1"], ["type", "checkbox", "required", ""], ["type", "submit", 1, "header-btn7"], [1, "fa-solid", "fa-arrow-right"]], template: function Contact2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4");
      \u0275\u0275text(6, "Request A Quote");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "form", 5);
      \u0275\u0275element(8, "input", 6);
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 3)(11, "div", 8)(12, "p");
      \u0275\u0275text(13, "Name (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 3)(16, "div", 8)(17, "p");
      \u0275\u0275text(18, "Number (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "input", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 11)(21, "div", 8)(22, "p");
      \u0275\u0275text(23, "Email (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 11)(26, "div", 8)(27, "p");
      \u0275\u0275text(28, "Additional Details (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "textarea", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 11)(31, "div", 14);
      \u0275\u0275element(32, "input", 15);
      \u0275\u0275elementStart(33, "p");
      \u0275\u0275text(34, "I agree with the site privacy policy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 11)(36, "div", 14)(37, "button", 16);
      \u0275\u0275text(38, "Submit Now ");
      \u0275\u0275element(39, "i", 17);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Contact2Component, [{
    type: Component,
    args: [{ selector: "app-contact-2", imports: [], template: '<div class="contact4-section-area sp1" style="background-image: url(assets/img/all-images/contact-bg4.png); background-position: center; background-position: center; background-repeat: no-repeat; background-size: cover;">\n    <div class="container">\n      <div class="row align-items-center">\n        <div class="col-lg-6">\n          <div class="contact-submit-boxarea">\n            <h4>Request A Quote</h4>\n            <form action="https://api.web3forms.com/submit" method="POST">\n              <input type="hidden" name="access_key" value="0cd32fff-eda2-4da3-be43-37d47fbb396b">\n              <div class="row">\n                <div class="col-lg-6">\n                  <div class="input-area">\n                    <p>Name (required)</p>\n                    <input type="text" placeholder="Name" required>\n                  </div>\n                </div>\n                <div class="col-lg-6">\n                  <div class="input-area">\n                    <p>Number (required)</p>\n                    <input type="number" placeholder="Phone" required>\n                  </div>\n                </div>\n    \n                <div class="col-lg-12">\n                  <div class="input-area">\n                    <p>Email (required)</p>\n                    <input type="email" placeholder="Email" required>\n                  </div>\n                </div>\n    \n                <div class="col-lg-12">\n                  <div class="input-area">\n                    <p>Additional Details  (Optional)</p>\n                    <textarea placeholder="Describe your inquiry" cols="30" rows="10" required></textarea>\n                  </div>\n                </div>\n                <div class="col-lg-12">\n                  <div class="input-area1">\n                    <input type="checkbox" required>\n                    <p>I agree with the site privacy policy</p>\n                  </div>\n                </div>\n    \n                <div class="col-lg-12">\n                  <div class="input-area1">\n                    <button type="submit" class="header-btn7">Submit Now <i class="fa-solid fa-arrow-right"></i></button>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Contact2Component, { className: "Contact2Component", filePath: "src/app/views/demo/home-2/components/contact-2/contact-2.component.ts", lineNumber: 9 });
})();

// src/app/views/demo/home-2/components/blogs-2/blogs-2.component.ts
function Blogs2Component_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275element(3, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "a", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ul")(10, "li")(11, "a", 16);
    \u0275\u0275element(12, "i", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "li")(15, "a", 18);
    \u0275\u0275text(16, " Learn More ");
    \u0275\u0275element(17, "i", 19);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275attribute("data-aos", i_r2 % 2 === 0 ? "flip-right" : "flip-left")("data-aos-duration", 800 + i_r2 * 200);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", blog_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(blog_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blog_r1.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(blog_r1.date);
  }
}
var Blogs2Component = class _Blogs2Component {
  blogs = blogs;
  static \u0275fac = function Blogs2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Blogs2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Blogs2Component, selectors: [["app-blogs-2"]], decls: 15, vars: 1, consts: [[1, "blog4-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "blog-header-area", "heading9", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [1, "blog-auhtor-boxesarea"], [1, "img1"], ["alt", "", 3, "src"], [1, "content-area"], ["routerLink", "/single-blog"], ["href", "javascript:void(0)"], [1, "fa-solid", "fa-calendar-days"], ["routerLink", "/single-blog", 1, "learnmore"], [1, "fa-solid", "fa-arrow-right"]], template: function Blogs2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Our Latest News");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Electricity Explained Explore Our Blog");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Our goal is to empower you with the knowledge and insights you need to make informed ");
      \u0275\u0275element(11, "br", 8);
      \u0275\u0275text(12, " decisions about your energy consumption and contribute to a greener");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 2);
      \u0275\u0275template(14, Blogs2Component_div_14_Template, 18, 6, "div", 9);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.blogs);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Blogs2Component, [{
    type: Component,
    args: [{ selector: "app-blogs-2", imports: [CommonModule, RouterLink], template: `<div class="blog4-section-area sp2">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="blog-header-area heading9 text-center">
                    <h5 data-aos="fade-up" data-aos-duration="800">Our Latest News</h5>
                    <h2 class="tg-element-title">Electricity Explained Explore Our Blog</h2>
                    <p data-aos="fade-up" data-aos-duration="1000">Our goal is to empower you with the knowledge and
                        insights you need to make informed <br class="d-lg-block d-none"> decisions about your energy
                        consumption and contribute to a greener</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6" *ngFor="let blog of blogs; let i = index"
                [attr.data-aos]="i % 2 === 0 ? 'flip-right' : 'flip-left'" [attr.data-aos-duration]="800 + (i * 200)">
                <div class="blog-auhtor-boxesarea">
                    <div class="img1">
                        <img [src]="blog.image" alt="">
                    </div>
                    <div class="content-area">
                        <a routerLink="/single-blog">{{ blog.title }}</a>
                        <p>{{ blog.description }}</p>
                        <ul>
                            <li><a href="javascript:void(0)"><i class="fa-solid fa-calendar-days"></i>{{ blog.date }}</a></li>
                            <li>
                                <a routerLink="/single-blog" class="learnmore">
                                    Learn More <i class="fa-solid fa-arrow-right"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Blogs2Component, { className: "Blogs2Component", filePath: "src/app/views/demo/home-2/components/blogs-2/blogs-2.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-2/components/cta-2/cta-2.component.ts
var Cta2Component = class _Cta2Component {
  static \u0275fac = function Cta2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Cta2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Cta2Component, selectors: [["app-cta-2"]], decls: 19, vars: 0, consts: [[1, "cta4-section-area", "sp4"], [1, "container"], [1, "row"], [1, "col-lg-5"], [1, "cta-header", "heading2"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "800"], ["action", "#", "data-aos", "fade-up", "data-aos-duration", "1000"], ["type", "email", "placeholder", "Email Address"], ["type", "submit", 1, "header-btn7"], [1, "fa-solid", "fa-arrow-right"], [1, "col-lg-1"], [1, "cta-images"], [1, "img1"], ["src", "assets/img/all-images/cta-img1.png", "alt", ""]], template: function Cta2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Ready to Power up your Savings and Reliability?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Feel free to customize this paragraph to better reflect the specific services offered by your IT solution & the unique ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "form", 7);
      \u0275\u0275element(10, "input", 8);
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275text(12, "Subscribe Now ");
      \u0275\u0275element(13, "i", 10);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(14, "div", 11);
      \u0275\u0275elementStart(15, "div", 3)(16, "div", 12)(17, "div", 13);
      \u0275\u0275element(18, "img", 14);
      \u0275\u0275elementEnd()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Cta2Component, [{
    type: Component,
    args: [{ selector: "app-cta-2", imports: [], template: '<div class="cta4-section-area sp4">\n    <div class="container">\n      <div class="row">\n        <div class="col-lg-5">\n          <div class="cta-header heading2">\n            <h2 class="tg-element-title">Ready to Power up your Savings and Reliability?</h2>\n            <p data-aos="fade-up" data-aos-duration="800">Feel free to customize this paragraph to better reflect the specific services offered by your IT solution & the unique </p>\n            <form action="#" data-aos="fade-up" data-aos-duration="1000">\n              <input type="email" placeholder="Email Address">\n              <button type="submit" class="header-btn7">Subscribe Now <i class="fa-solid fa-arrow-right"></i></button>\n            </form>\n          </div>\n        </div>\n        <div class="col-lg-1"></div>\n        <div class="col-lg-5">\n          <div class="cta-images">\n            <div class="img1">\n              <img src="assets/img/all-images/cta-img1.png" alt="">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Cta2Component, { className: "Cta2Component", filePath: "src/app/views/demo/home-2/components/cta-2/cta-2.component.ts", lineNumber: 9 });
})();

// src/app/views/demo/home-2/home-2.component.ts
var Home2Component = class _Home2Component {
  title = "Home 2";
  static \u0275fac = function Home2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home2Component, selectors: [["app-home-2"]], decls: 14, vars: 0, consts: [["className", "preloader2", "icon", "assets/img/logo/preloader3.png"], [1, "homepage4-body", "tg-heading-subheading", "animation-style3"], ["btnClass", "header-btn7", "headerClass", "homepage4", "mobileHeaderClass", "mobile-haeder4", "mobileSidebarClass", "mobile-sidebar4", "logo", "assets/img/logo/logo6.png", "mobileLogo", "assets/img/logo/logo7.png"], ["containerClass", "footer4-section-area", "logo", "assets/img/logo/logo7.png"]], template: function Home2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-loader", 0);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275element(2, "app-topbar", 2)(3, "app-hero-2")(4, "app-about-2")(5, "app-our-mission")(6, "app-case-study")(7, "app-team-2")(8, "app-testimonial-2")(9, "app-faq-2")(10, "app-contact-2")(11, "app-blogs-2")(12, "app-cta-2")(13, "app-footer", 3);
      \u0275\u0275elementEnd();
    }
  }, dependencies: [LoaderComponent, Hero2Component, About2Component, OurMissionComponent, CaseStudyComponent, Team2Component, TopbarComponent, Testimonial2Component, Faq2Component, Contact2Component, Blogs2Component, Cta2Component, FooterComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home2Component, [{
    type: Component,
    args: [{ selector: "app-home-2", imports: [LoaderComponent, Hero2Component, About2Component, OurMissionComponent, CaseStudyComponent, Team2Component, TopbarComponent, Testimonial2Component, Faq2Component, Contact2Component, Blogs2Component, Cta2Component, FooterComponent], template: '<app-loader className="preloader2" icon="assets/img/logo/preloader3.png" />\n<div class="homepage4-body tg-heading-subheading animation-style3">\n    <app-topbar btnClass="header-btn7" headerClass="homepage4" mobileHeaderClass="mobile-haeder4"\n        mobileSidebarClass="mobile-sidebar4" logo="assets/img/logo/logo6.png" mobileLogo="assets/img/logo/logo7.png" />\n    <app-hero-2 />\n    <app-about-2 />\n    <app-our-mission />\n    <app-case-study />\n    <app-team-2 />\n    <app-testimonial-2 />\n    <app-faq-2 />\n    <app-contact-2 />\n    <app-blogs-2 />\n    <app-cta-2 />\n    <app-footer containerClass="footer4-section-area" logo="assets/img/logo/logo7.png"/>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home2Component, { className: "Home2Component", filePath: "src/app/views/demo/home-2/home-2.component.ts", lineNumber: 22 });
})();

// src/app/views/demo/home-3/components/about-3/about-3.component.ts
var _c02 = (a0) => ({ width: a0 });
function About3Component_div_19_Template(rf, ctx) {
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
var About3Component = class _About3Component {
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
      let i2 = 0;
      const interval = setInterval(() => {
        if (i2 <= item.target) {
          this.progressItems[idx].current = i2;
        } else {
          clearInterval(interval);
        }
        i2++;
      }, speed);
    });
  }
  static \u0275fac = function About3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _About3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _About3Component, selectors: [["app-about-3"]], decls: 24, vars: 1, consts: [[1, "about2-section-area", "sp1"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], ["data-aos", "zoom-out", "data-aos-duration", "1000", 1, "about-images-area"], [1, "img1"], ["src", "assets/img/all-images/about-img3.png", "alt", ""], [1, "img2"], ["src", "assets/img/all-images/about-img4.png", "alt", ""], [1, "about-header-area", "heading4"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "space40"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "progress_bar"], ["class", "progress_bar_item grid-x", 4, "ngFor", "ngForOf"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/about", 1, "header-btn3"], [1, "fa-solid", "fa-arrow-right"], [1, "progress_bar_item", "grid-x"], [1, "item_label"], [1, "item_bar"], [1, "progress", 3, "ngStyle"]], template: function About3Component_Template(rf, ctx) {
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
      \u0275\u0275template(19, About3Component_div_19_Template, 7, 8, "div", 15);
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
  }, dependencies: [NgbProgressbarModule, CommonModule, NgForOf, NgStyle, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(About3Component, [{
    type: Component,
    args: [{ selector: "app-about-3", imports: [NgbProgressbarModule, CommonModule, RouterLink], template: `<div class="about2-section-area sp1">
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
                <div class="about-header-area heading4">
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
                        <a routerLink="/about" class="header-btn3">Find Out More <i
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(About3Component, { className: "About3Component", filePath: "src/app/views/demo/home-3/components/about-3/about-3.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-3/components/hero-3/hero-3.component.ts
var Hero3Component = class _Hero3Component {
  sliderConfig = {
    loop: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 9e3,
    cssEase: "linear",
    infinite: true,
    arrows: false,
    touchMove: true,
    swipeToSlide: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: false,
          touchMove: false
        }
      },
      {
        breakpoint: 375,
        settings: {
          autoplay: false,
          touchMove: false
        }
      },
      {
        breakpoint: 320,
        settings: {
          autoplay: false,
          touchMove: false
        }
      }
    ]
  };
  sliderConfig2 = {
    loop: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8e3,
    cssEase: "linear",
    infinite: true,
    arrows: false,
    touchMove: true,
    swipeToSlide: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: false
        }
      },
      {
        breakpoint: 375,
        settings: {
          autoplay: false
        }
      },
      {
        breakpoint: 320,
        settings: {
          autoplay: false
        }
      }
    ]
  };
  static \u0275fac = function Hero3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Hero3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Hero3Component, selectors: [["app-hero-3"]], decls: 99, vars: 5, consts: [[1, "hero2-section-area", 2, "background-image", "url(assets/img/bg/header-bg1.png)", "background-size", "cover", "background-repeat", "no-repeat", "background-position", "center"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "hero-header", "heading3"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/contact-us", 1, "header-btn3", "btn2"], [1, "fa-solid", "fa-arrow-right"], ["routerLink", "/contact-us", 1, "header-btn4"], [1, "counter-header-area"], ["data-aos", "zoom-out", "data-aos-duration", "800", 1, "counter-area"], [3, "countUp"], ["data-aos", "zoom-out", "data-aos-duration", "1000", 1, "counter-area"], ["data-aos", "zoom-out", "data-aos-duration", "1200", 1, "counter-area", "m-0"], [1, "hero2-images-area"], [1, "row"], [1, "col-lg-6", "col-md-6"], [1, "all-images-area", 3, "config"], ["ngxSlickItem", "", 1, "all-images"], [1, "images"], ["src", "assets/img/all-images/header-img1.png", "alt", ""], ["src", "assets/img/all-images/header-img2.png", "alt", ""], [1, "space80", "d-md-block", "d-none"], ["src", "assets/img/elements/circle2.png", "alt", "", 1, "circle2", "keyframe5"], [1, "all-images-area2", 3, "config"], ["ngxSlickItem", "", 1, "all-imges"], ["src", "assets/img/all-images/header-img3.png", "alt", ""], ["src", "assets/img/all-images/header-img4.png", "alt", ""]], template: function Hero3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Current Electricity Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 6);
      \u0275\u0275text(8, "Your Life Reliable Electricity Services.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Whether you're a homeowner, business owner, or community leader, a we're here to light up your life with sustainable energy solutions.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "a", 9);
      \u0275\u0275text(13, "Get A Free Estimate ");
      \u0275\u0275element(14, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 11);
      \u0275\u0275text(16, "Discover More ");
      \u0275\u0275element(17, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 12)(19, "div", 13)(20, "h2")(21, "count-up", 14);
      \u0275\u0275text(22, "40");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, "+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p");
      \u0275\u0275text(25, "Contrives Reached");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 15)(27, "h2")(28, "count-up", 14);
      \u0275\u0275text(29, "450");
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, "+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p");
      \u0275\u0275text(32, "Projects Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 16)(34, "h2")(35, "count-up", 14);
      \u0275\u0275text(36, "235");
      \u0275\u0275elementEnd();
      \u0275\u0275text(37, "+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p");
      \u0275\u0275text(39, "Qualified Sataff");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(40, "div", 3)(41, "div", 17)(42, "div", 18)(43, "div", 19)(44, "ngx-slick-carousel", 20)(45, "div", 21)(46, "div", 22);
      \u0275\u0275element(47, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 22);
      \u0275\u0275element(49, "img", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 21)(51, "div", 22);
      \u0275\u0275element(52, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 22);
      \u0275\u0275element(54, "img", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 21)(56, "div", 22);
      \u0275\u0275element(57, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 22);
      \u0275\u0275element(59, "img", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 21)(61, "div", 22);
      \u0275\u0275element(62, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 22);
      \u0275\u0275element(64, "img", 24);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(65, "div", 19);
      \u0275\u0275element(66, "div", 25)(67, "img", 26);
      \u0275\u0275elementStart(68, "ngx-slick-carousel", 27)(69, "div", 28)(70, "div", 22);
      \u0275\u0275element(71, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 22);
      \u0275\u0275element(73, "img", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 28)(75, "div", 22);
      \u0275\u0275element(76, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 22);
      \u0275\u0275element(78, "img", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 28)(80, "div", 22);
      \u0275\u0275element(81, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 22);
      \u0275\u0275element(83, "img", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 28)(85, "div", 22);
      \u0275\u0275element(86, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 22);
      \u0275\u0275element(88, "img", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 28)(90, "div", 22);
      \u0275\u0275element(91, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 22);
      \u0275\u0275element(93, "img", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 28)(95, "div", 22);
      \u0275\u0275element(96, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 22);
      \u0275\u0275element(98, "img", 30);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275property("countUp", 40);
      \u0275\u0275advance(7);
      \u0275\u0275property("countUp", 450);
      \u0275\u0275advance(7);
      \u0275\u0275property("countUp", 235);
      \u0275\u0275advance(9);
      \u0275\u0275property("config", ctx.sliderConfig);
      \u0275\u0275advance(24);
      \u0275\u0275property("config", ctx.sliderConfig2);
    }
  }, dependencies: [SlickCarouselModule, SlickCarouselComponent, SlickItemDirective, CountUpModule, CountUpDirective, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Hero3Component, [{
    type: Component,
    args: [{ selector: "app-hero-3", imports: [SlickCarouselModule, CountUpModule, RouterLink], template: `<div class="hero2-section-area" style="background-image: url(assets/img/bg/header-bg1.png); background-size: cover; background-repeat: no-repeat; background-position: center;">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="hero-header heading3">
                    <h5 data-aos="fade-left" data-aos-duration="800">Current Electricity Services</h5>
                    <h1 class="tg-element-title">Your Life Reliable Electricity Services.</h1>
                    <p data-aos="fade-left" data-aos-duration="1000">Whether you're a homeowner, business owner, or community leader, a we're here to light up your life with sustainable energy solutions.</p>
                    <div class="btn-area" data-aos="fade-left" data-aos-duration="1200">
                        <a routerLink="/contact-us" class="header-btn3 btn2">Get A Free Estimate <i class="fa-solid fa-arrow-right"></i></a>
                        <a routerLink="/contact-us" class="header-btn4">Discover More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <div class="counter-header-area">
                        <div class="counter-area" data-aos="zoom-out" data-aos-duration="800">
                            <h2> <count-up [countUp]="40">40</count-up>+</h2>
                            <p>Contrives Reached</p>
                        </div>

                        <div class="counter-area" data-aos="zoom-out" data-aos-duration="1000">
                            <h2><count-up [countUp]="450">450</count-up>+</h2>
                            <p>Projects Completed</p>
                        </div>

                        <div class="counter-area m-0" data-aos="zoom-out" data-aos-duration="1200">
                            <h2><count-up [countUp]="235">235</count-up>+</h2>
                            <p>Qualified Sataff</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="hero2-images-area">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <ngx-slick-carousel [config]="sliderConfig" class="all-images-area">
                              <div ngxSlickItem class="all-images">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img1.png" alt="">
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img2.png" alt="">
                              </div>
                              </div>

                              <div ngxSlickItem class="all-images">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img1.png" alt="">
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img2.png" alt="">
                              </div>
                              </div>

                              <div ngxSlickItem class="all-images">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img1.png" alt="">
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img2.png" alt="">
                              </div>
                              </div>

                              <div ngxSlickItem class="all-images">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img1.png" alt="">
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img2.png" alt="">
                              </div>
                              </div>
                            </ngx-slick-carousel>
                        </div>

                        <div class="col-lg-6 col-md-6">
                            <div class="space80 d-md-block d-none"></div>
                            <img src="assets/img/elements/circle2.png" alt="" class="circle2 keyframe5">
                            <ngx-slick-carousel [config]="sliderConfig2" class="all-images-area2">
                              <div ngxSlickItem class="all-imges">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img3.png" alt=""> 
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img4.png" alt="">
                              </div>
                              </div>
                              <div ngxSlickItem class="all-imges">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img3.png" alt=""> 
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img4.png" alt="">
                              </div>
                              </div>
                              <div ngxSlickItem class="all-imges">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img3.png" alt=""> 
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img4.png" alt="">
                              </div>
                              </div>
                              <div ngxSlickItem class="all-imges">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img3.png" alt=""> 
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img4.png" alt="">
                              </div>
                              </div>
                              <div ngxSlickItem class="all-imges">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img3.png" alt=""> 
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img4.png" alt="">
                              </div>
                              </div>
                              <div ngxSlickItem class="all-imges">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img3.png" alt=""> 
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img4.png" alt="" >
                              </div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Hero3Component, { className: "Hero3Component", filePath: "src/app/views/demo/home-3/components/hero-3/hero-3.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-3/components/data.ts
var services = [
  {
    id: 1,
    aos: "flip-left",
    duration: 800,
    image: "assets/img/all-images/service-img4.png",
    icon: "assets/img/icons/service-icons1.svg",
    title: "Electra Works Solutions",
    description: "Explore our range of services below and discover how we can help future."
  },
  {
    id: 2,
    aos: "flip-right",
    duration: 1e3,
    image: "assets/img/all-images/service-img5.png",
    icon: "assets/img/icons/service-icons2.svg",
    title: "Bright Beam Solutions",
    description: "Explore our range of services below and discover how we can help future."
  },
  {
    id: 3,
    aos: "flip-left",
    duration: 1200,
    image: "assets/img/all-images/service-img6.png",
    icon: "assets/img/icons/service-icons3.svg",
    title: "Electri Core Services",
    description: "Explore our range of services below and discover how we can help future."
  }
];
var caseStudyData = [
  { image: "assets/img/all-images/case-img1.png", subtitle: "Electicity Solutions", title: "Power Navigating" },
  { image: "assets/img/all-images/case-img2.png", subtitle: "Voltage Vision", title: "Power Navigating" },
  { image: "assets/img/all-images/case-img3.png", subtitle: "Wizard Unveiling", title: "Power Navigating" },
  { image: "assets/img/all-images/case-img1.png", subtitle: "Electicity Solutions", title: "Power Navigating" },
  { image: "assets/img/all-images/case-img2.png", subtitle: "Voltage Vision", title: "Power Navigating" },
  { image: "assets/img/all-images/case-img3.png", subtitle: "Wizard Unveiling", title: "Power Navigating" },
  { image: "assets/img/all-images/case-img1.png", subtitle: "Electicity Solutions", title: "Power Navigating" },
  { image: "assets/img/all-images/case-img2.png", subtitle: "Voltage Vision", title: "Power Navigating" },
  { image: "assets/img/all-images/case-img3.png", subtitle: "Wizard Unveiling", title: "Power Navigating" }
];
var teamMembers2 = [
  {
    image: "assets/img/all-images/team-img5.png",
    name: "Kore Anderson",
    role: "Sales Manager",
    aosDuration: 800
  },
  {
    image: "assets/img/all-images/team-img6.png",
    name: "Zara Matheson",
    role: "Team Leader",
    aosDuration: 1200
  },
  {
    image: "assets/img/all-images/team-img7.png",
    name: "Kore Anderson",
    role: "Sales Manager",
    aosDuration: 1400
  }
];
var faqs2 = [
  {
    question: "What types of electricity plans do you offer?",
    answer: `Whether you're wondering about our pricing plans, process
               installation , or sustainability initiatives, we've got Best.`
  },
  {
    question: "How do I sign up for your electricity services?",
    answer: `Whether you're wondering about our pricing plans, process
               installation , or sustainability initiatives, we've got Best.`
  },
  {
    question: "Do you offer renewable energy options?",
    answer: `Whether you're wondering about our pricing plans, process
               installation , or sustainability initiatives, we've got Best.`
  },
  {
    question: "What are your billing and payment options?",
    answer: `Whether you're wondering about our pricing plans, process
               installation , or sustainability initiatives, we've got Best.`
  },
  {
    question: "What happens if there's a power outage?",
    answer: `Whether you're wondering about our pricing plans, process
               installation , or sustainability initiatives, we've got Best.`
  },
  {
    question: "What types of electricity plans do you offer?",
    answer: `Whether you're wondering about our pricing plans, process
               installation , or sustainability initiatives, we've got Best.`
  }
];

// src/app/views/demo/home-3/components/service-3/service-3.component.ts
function Service3Component_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275element(3, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14);
    \u0275\u0275element(5, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15)(7, "a", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 17);
    \u0275\u0275text(12, " Read More ");
    \u0275\u0275element(13, "i", 18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("data-aos", service_r1.aos)("data-aos-duration", service_r1.duration);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", service_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", service_r1.icon, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.description);
  }
}
var Service3Component = class _Service3Component {
  services = services;
  static \u0275fac = function Service3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Service3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Service3Component, selectors: [["app-service-3"]], decls: 15, vars: 1, consts: [[1, "service2-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "service-header-area", "heading4", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [1, "service2-author-boxarea"], [1, "images"], ["alt", "", 3, "src"], [1, "icons"], [1, "service-content"], ["routerLink", "/services/single"], ["routerLink", "/services/single", 1, "readmore"], [1, "fa-solid", "fa-arrow-right"]], template: function Service3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Our Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, " Our Range of Electricity Solutions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Our team of experts is committed to delivering high-quality services that prioritize ");
      \u0275\u0275element(11, "br", 8);
      \u0275\u0275text(12, " reliability, efficiency, and sustainability. With cutting-edge technology.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 2);
      \u0275\u0275template(14, Service3Component_div_14_Template, 14, 6, "div", 9);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.services);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Service3Component, [{
    type: Component,
    args: [{ selector: "app-service-3", imports: [CommonModule, RouterLink], template: '<div class="service2-section-area sp2">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8 m-auto">\n                <div class="service-header-area heading4 text-center">\n                    <h5 data-aos="fade-up" data-aos-duration="800">Our Service</h5>\n                    <h2 class="tg-element-title"> Our Range of Electricity Solutions</h2>\n                    <p data-aos="fade-up" data-aos-duration="1000">Our team of experts is committed to delivering\n                        high-quality services that prioritize <br class="d-lg-block d-none"> reliability, efficiency,\n                        and sustainability. With cutting-edge technology.</p>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-lg-4 col-md-6" *ngFor="let service of services">\n              <div class="service2-author-boxarea" [attr.data-aos]="service.aos" [attr.data-aos-duration]="service.duration">\n                <div class="images">\n                  <img [src]="service.image" alt="">\n                </div>\n                <div class="icons">\n                  <img [src]="service.icon" alt="">\n                </div>\n                <div class="service-content">\n                  <a routerLink="/services/single">{{ service.title }}</a>\n                  <p>{{ service.description }}</p>\n                  <a routerLink="/services/single" class="readmore">\n                    Read More <i class="fa-solid fa-arrow-right"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Service3Component, { className: "Service3Component", filePath: "src/app/views/demo/home-3/components/service-3/service-3.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-3/components/case-study-3/case-study-3.component.ts
function CaseStudy3Component_ng_container_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275element(2, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16)(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 18)(10, "a", 17)(11, "span");
    \u0275\u0275element(12, "i", 19);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const case_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", case_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(case_r1.subtitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(case_r1.title);
  }
}
function CaseStudy3Component_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CaseStudy3Component_ng_container_14_ng_template_1_Template, 13, 3, "ng-template", 11);
    \u0275\u0275elementContainerEnd();
  }
}
var CaseStudy3Component = class _CaseStudy3Component {
  caseStudies = caseStudyData;
  carouselOptions = {
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    mouseDrag: true,
    items: 10,
    autoplay: true,
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    smartSpeed: 2e3,
    autoplayTimeout: 2500,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2
      },
      1e3: {
        items: 3
      }
    }
  };
  static \u0275fac = function CaseStudy3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CaseStudy3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaseStudy3Component, selectors: [["app-case-study-3"]], decls: 15, vars: 2, consts: [[1, "casestudy-section-area", "sp1"], [1, "container"], [1, "row"], [1, "col-lg-6", "m-auto"], [1, "casestudy-header", "heading4", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "col-lg-12"], [1, "casestudy-slider-area", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "case-author-boxarea"], [1, "imges"], ["alt", "", 3, "src"], [1, "case-content"], [1, "text"], ["routerLink", "/case-study-single"], [1, "icons"], [1, "fa-solid", "fa-arrow-right"]], template: function CaseStudy3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Case studies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Electricity Unveiled Explaining Our Service Process");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Once we understand your requirements, our expert team swings into action, customizing a solution that's tailored just for you.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 2)(12, "div", 8)(13, "owl-carousel-o", 9);
      \u0275\u0275template(14, CaseStudy3Component_ng_container_14_Template, 2, 0, "ng-container", 10);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("options", ctx.carouselOptions);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.caseStudies);
    }
  }, dependencies: [CarouselModule, CarouselComponent, CarouselSlideDirective, CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaseStudy3Component, [{
    type: Component,
    args: [{ selector: "app-case-study-3", imports: [CarouselModule, CommonModule, RouterLink], template: `<div class="casestudy-section-area sp1">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="casestudy-header heading4 text-center">
                    <h5 data-aos="fade-up" data-aos-duration="800">Case studies</h5>
                    <h2 class="tg-element-title">Electricity Unveiled Explaining Our Service Process</h2>
                    <p data-aos="fade-up" data-aos-duration="1000">Once we understand your requirements, our expert team
                        swings into action, customizing a solution that's tailored just for you.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
                <owl-carousel-o [options]="carouselOptions" class="casestudy-slider-area">
                    <ng-container *ngFor="let case of caseStudies">
                      <ng-template carouselSlide>
                        <div class="case-author-boxarea">
                          <div class="imges">
                            <img [src]="case.image" alt="">
                          </div>
                          <div class="case-content">
                            <div class="text">
                              <p>{{ case.subtitle }}</p>
                              <a routerLink="/case-study-single">{{ case.title }}</a>
                            </div>
                            <div class="icons">
                              <a routerLink="/case-study-single"><span><i class="fa-solid fa-arrow-right"></i></span></a>
                            </div>
                          </div>
                        </div>
                      </ng-template>
                    </ng-container>
                  </owl-carousel-o>
                  
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaseStudy3Component, { className: "CaseStudy3Component", filePath: "src/app/views/demo/home-3/components/case-study-3/case-study-3.component.ts", lineNumber: 13 });
})();

// src/app/views/demo/home-3/components/testimonial-3/testimonial-3.component.ts
var _c03 = () => [];
function Testimonial3Component_div_38_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275elementEnd();
  }
}
function Testimonial3Component_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "ul", 27);
    \u0275\u0275template(2, Testimonial3Component_div_38_li_2_Template, 2, 0, "li", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "p");
    \u0275\u0275text(5, "\u201CDiscover why our customers love us! At Current, we take pride in providing exceptional electricity services that exceed expectations. But don't just take our word for it - hear what our satisfied customers have to say. From homeowners\u201D");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 30)(7, "a", 31);
    \u0275\u0275text(8, "Junaid Hasan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Happy Client");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c03).constructor(5));
  }
}
var Testimonial3Component = class _Testimonial3Component {
  sliderForConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    nav: true,
    prevArrow: ".testimonial-next-arrow",
    nextArrow: ".testimonial-prev-arrow",
    fade: true,
    loop: true,
    asNavFor: ".slider-nav1"
  };
  sliderNavConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".foter-carousel",
    dots: false,
    arrows: true,
    nav: true,
    loop: true,
    centerMode: false,
    focusOnSelect: true,
    autoplay: true,
    autoplayTimeout: 500,
    prevArrow: ".testimonial-next-arrow",
    nextArrow: ".testimonial-prev-arrow"
  };
  static \u0275fac = function Testimonial3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Testimonial3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Testimonial3Component, selectors: [["app-testimonial-3"]], decls: 46, vars: 4, consts: [[1, "testimonial2-section-area", "sp1"], [1, "container"], [1, "row"], [1, "col-lg-4"], [1, "testimonial-header", "heading4"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/testimonials", 1, "header-btn3"], [1, "fa-solid", "fa-arrow-right"], ["data-aos", "zoom-out", "data-aos-duration", "1000", 1, "col-lg-8"], [1, "testimonial-sliders"], [1, "row", "align-items-center"], [1, "col-lg-4", "col-md-6"], [1, "teimonial-slider-nav-area", "foter-carousel", 3, "config"], ["ngxSlickItem", "", 1, "testimonial-slider-img"], ["src", "assets/img/all-images/testimonial-img6.png", "alt", ""], [1, "col-lg-8", "col-md-6"], [1, "testimonial-content-slider", "slider-nav1", 3, "config"], ["ngxSlickItem", "", "class", "testimonial-slider-boxarea", 4, "ngFor", "ngForOf"], [1, "testimonial-arrows"], [1, "testimonial-prev-arrow"], [1, "fa-solid", "fa-arrow-left"], [1, "testimonial-next-arrow"], ["ngxSlickItem", "", 1, "testimonial-slider-boxarea"], [1, "d-flex", "align-items-center", "gap-1", "flex-wrap"], [4, "ngFor", "ngForOf"], [1, "testimonial5-all-content"], [1, "content"], ["routerLink", "/our-team"], [1, "fa-solid", "fa-star"]], template: function Testimonial3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Testimonials");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Powerful Praise Hear from Our Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "From homeowners to businesses, ");
      \u0275\u0275element(11, "br", 8);
      \u0275\u0275text(12, " our clients have experienced the ");
      \u0275\u0275element(13, "br", 8);
      \u0275\u0275text(14, " reliability, affordability.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9)(16, "a", 10);
      \u0275\u0275text(17, "View all reviews ");
      \u0275\u0275element(18, "i", 11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 12)(20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "ngx-slick-carousel", 16)(24, "div", 17);
      \u0275\u0275element(25, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 17);
      \u0275\u0275element(27, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17);
      \u0275\u0275element(29, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 17);
      \u0275\u0275element(31, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 17);
      \u0275\u0275element(33, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 17);
      \u0275\u0275element(35, "img", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 19)(37, "ngx-slick-carousel", 20);
      \u0275\u0275template(38, Testimonial3Component_div_38_Template, 11, 2, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 22)(40, "div", 23)(41, "button");
      \u0275\u0275element(42, "i", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 25)(44, "button");
      \u0275\u0275element(45, "i", 11);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275property("config", ctx.sliderForConfig);
      \u0275\u0275advance(14);
      \u0275\u0275property("config", ctx.sliderNavConfig);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c03).constructor(5));
    }
  }, dependencies: [SlickCarouselModule, SlickCarouselComponent, SlickItemDirective, CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Testimonial3Component, [{
    type: Component,
    args: [{ selector: "app-testimonial-3", imports: [SlickCarouselModule, CommonModule, RouterLink], template: `<div class="testimonial2-section-area sp1">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="testimonial-header heading4">
                    <h5 data-aos="fade-left" data-aos-duration="800">Testimonials</h5>
                    <h2 class="tg-element-title">Powerful Praise Hear from Our Customers</h2>
                    <p data-aos="fade-left" data-aos-duration="1000">From homeowners to businesses, <br
                            class="d-lg-block d-none"> our clients have experienced the <br class="d-lg-block d-none">
                        reliability, affordability.</p>
                    <div class="btn-area" data-aos="fade-left" data-aos-duration="1200">
                        <a routerLink="/testimonials" class="header-btn3">View all reviews <i
                                class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-8" data-aos="zoom-out" data-aos-duration="1000">
                <div class="testimonial-sliders">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-md-6">
                            <ngx-slick-carousel class="teimonial-slider-nav-area foter-carousel"
                                [config]="sliderForConfig">
                                <div ngxSlickItem class="testimonial-slider-img">
                                    <img src="assets/img/all-images/testimonial-img6.png" alt="">
                                </div>
                                <div ngxSlickItem class="testimonial-slider-img">
                                    <img src="assets/img/all-images/testimonial-img6.png" alt="">
                                </div>
                                <div ngxSlickItem class="testimonial-slider-img">
                                    <img src="assets/img/all-images/testimonial-img6.png" alt="">
                                </div>
                                <div ngxSlickItem class="testimonial-slider-img">
                                    <img src="assets/img/all-images/testimonial-img6.png" alt="">
                                </div>
                                <div ngxSlickItem class="testimonial-slider-img">
                                    <img src="assets/img/all-images/testimonial-img6.png" alt="">
                                </div>
                                <div ngxSlickItem class="testimonial-slider-img">
                                    <img src="assets/img/all-images/testimonial-img6.png" alt="">
                                </div>
                            </ngx-slick-carousel>
                        </div>
                        <div class="col-lg-8 col-md-6">
                            <ngx-slick-carousel [config]="sliderNavConfig"
                                class="testimonial-content-slider slider-nav1">
                                <div *ngFor="let testimonial of [].constructor(5)" ngxSlickItem
                                    class="testimonial-slider-boxarea">
                                    <ul class="d-flex align-items-center gap-1 flex-wrap">
                                        <li *ngFor="let star of [].constructor(5)">
                                            <i class="fa-solid fa-star"></i>
                                        </li>
                                    </ul>
                                    <div class="testimonial5-all-content">
                                        <p>\u201CDiscover why our customers love us! At Current, we take pride in providing
                                            exceptional electricity services that exceed expectations. But don't just
                                            take our word for it - hear what our satisfied customers have to say. From
                                            homeowners\u201D</p>
                                    </div>
                                    <div class="content">
                                        <a routerLink="/our-team">Junaid Hasan</a>
                                        <p>Happy Client</p>
                                    </div>
                                </div>
                            </ngx-slick-carousel>
                            <div class="testimonial-arrows">
                                <div class="testimonial-prev-arrow">
                                    <button><i class="fa-solid fa-arrow-left"></i></button>
                                </div>
                                <div class="testimonial-next-arrow">
                                    <button><i class="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Testimonial3Component, { className: "Testimonial3Component", filePath: "src/app/views/demo/home-3/components/testimonial-3/testimonial-3.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-3/components/team-3/team-3.component.ts
function Team3Component_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275element(3, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "a", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 15)(10, "div", 16)(11, "a", 17);
    \u0275\u0275element(12, "i", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 19)(14, "ul")(15, "li")(16, "a", 17);
    \u0275\u0275element(17, "i", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li")(19, "a", 17);
    \u0275\u0275element(20, "i", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "li")(22, "a", 17);
    \u0275\u0275element(23, "i", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "li")(25, "a", 17);
    \u0275\u0275element(26, "i", 23);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", member_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r1.role);
  }
}
var Team3Component = class _Team3Component {
  teamMembers = teamMembers2;
  static \u0275fac = function Team3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Team3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Team3Component, selectors: [["app-team-3"]], decls: 13, vars: 1, consts: [[1, "team2-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-6", "m-auto"], [1, "team-header", "heading4", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], ["class", "col-lg-4 col-md-6", "data-aos", "flip-right", "data-aos-duration", "800", 4, "ngFor", "ngForOf"], ["data-aos", "flip-right", "data-aos-duration", "800", 1, "col-lg-4", "col-md-6"], [1, "team-author-boxarea"], [1, "images"], ["alt", "", 3, "src"], [1, "content"], ["routerLink", "/our-team"], [1, "share-area"], [1, "icons"], ["href", "javascript:void(0)"], [1, "fa-solid", "fa-share-nodes"], [1, "list"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-linkedin-in"], [1, "fa-brands", "fa-pinterest-p"]], template: function Team3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Our Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Power Players Meet Our Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, " From our experienced technicians to our knowledgeable customer service representatives, each member of our team plays a crucial");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 2);
      \u0275\u0275template(12, Team3Component_div_12_Template, 27, 3, "div", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.teamMembers);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Team3Component, [{
    type: Component,
    args: [{ selector: "app-team-3", imports: [CommonModule, RouterLink], template: '<div class="team2-section-area sp2">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-6 m-auto">\n                <div class="team-header heading4 text-center">\n                    <h5 data-aos="fade-up" data-aos-duration="800">Our Team</h5>\n                    <h2 class="tg-element-title">Power Players Meet Our Team</h2>\n                    <p data-aos="fade-up" data-aos-duration="1000"> From our experienced technicians to our\n                        knowledgeable customer service representatives, each member of our team plays a crucial</p>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div *ngFor="let member of teamMembers" class="col-lg-4 col-md-6" data-aos="flip-right" data-aos-duration="800">                \n                <div class="team-author-boxarea">\n                    <div class="images">\n                        <img [src]="member.image" alt="">\n                    </div>\n                    <div class="content">\n                        <a routerLink="/our-team">{{member.name}}</a>\n                        <p>{{member.role}}</p>\n                    </div>\n                    <div class="share-area">\n                        <div class="icons">\n                            <a href="javascript:void(0)"><i class="fa-solid fa-share-nodes"></i></a>\n                        </div>\n                        <div class="list">\n                            <ul>\n                                <li><a href="javascript:void(0)"><i class="fa-brands fa-instagram"></i></a></li>\n                                <li><a href="javascript:void(0)"><i class="fa-brands fa-facebook-f"></i></a></li>\n                                <li><a href="javascript:void(0)"><i class="fa-brands fa-linkedin-in"></i></a></li>\n                                <li><a href="javascript:void(0)"><i class="fa-brands fa-pinterest-p"></i></a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Team3Component, { className: "Team3Component", filePath: "src/app/views/demo/home-3/components/team-3/team-3.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-3/components/contact-3/contact-3.component.ts
var Contact3Component = class _Contact3Component {
  static \u0275fac = function Contact3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Contact3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Contact3Component, selectors: [["app-contact-3"]], decls: 89, vars: 0, consts: [[1, "contact2-section-area", "sp1", 2, "background-image", "url(assets/img/all-images/contact-bg2.png)", "background-position", "center", "background-position", "center", "background-repeat", "no-repeat", "background-size", "cover"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "contact-header-area", "heading2"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "space48"], [1, "row"], [1, "col-lg-6", "col-md-6"], ["data-aos", "fade-left", "data-aos-duration", "1000", 1, "contact-auhtor-side"], [1, "icons-text"], [1, "icons"], [1, "fa-solid", "fa-phone"], [1, "text"], ["href", "tel:1234567890"], [1, "fa-solid", "fa-location-dot"], [1, "space48", "d-md-none"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "contact-auhtor-side"], [1, "fa-solid", "fa-envelope"], ["href", "mailto:serebangle@gmail.com "], [1, "fa-brands", "fa-linkedin-in"], ["href", "javascript:void(0)"], ["data-aos", "zoom-in", "data-aos-duration", "1200", 1, "col-lg-6"], [1, "contact-submit-boxarea"], ["action", "https://api.web3forms.com/submit", "method", "POST"], ["type", "hidden", "name", "access_key", "value", "0cd32fff-eda2-4da3-be43-37d47fbb396b"], [1, "input-area"], ["type", "text", "placeholder", "Name", "required", ""], ["type", "number", "placeholder", "Phone", "required", ""], [1, "col-lg-12"], ["type", "email", "placeholder", "Email", "required", ""], ["placeholder", "Describe your inquiry", "cols", "30", "rows", "10", "required", ""], [1, "input-area1"], ["type", "checkbox", "required", ""], ["type", "submit", 1, "header-btn3"], [1, "fa-solid", "fa-arrow-right"]], template: function Contact3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Contact Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Illuminate Your Message Get in Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Have questions or ready to get started with our electricity services? Our team is here to help! Whether you're seeking.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "div", 8);
      \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13);
      \u0275\u0275element(17, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 15)(19, "p");
      \u0275\u0275text(20, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 16);
      \u0275\u0275text(22, "123 456 7890");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(23, "div", 8);
      \u0275\u0275elementStart(24, "div", 12)(25, "div", 13);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 15)(28, "p");
      \u0275\u0275text(29, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "a", 16);
      \u0275\u0275text(31, "8502 Preston Rd. Inglewoo ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(32, "div", 10);
      \u0275\u0275element(33, "div", 18);
      \u0275\u0275elementStart(34, "div", 19)(35, "div", 12)(36, "div", 13);
      \u0275\u0275element(37, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 15)(39, "p");
      \u0275\u0275text(40, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "a", 21);
      \u0275\u0275text(42, "serebangle@gmail.com ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(43, "div", 8);
      \u0275\u0275elementStart(44, "div", 12)(45, "div", 13);
      \u0275\u0275element(46, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 15)(48, "p");
      \u0275\u0275text(49, "Linkedin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "a", 23);
      \u0275\u0275text(51, "Fleexstudio");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(52, "div", 24)(53, "div", 25)(54, "h4");
      \u0275\u0275text(55, "Request A Quote");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "form", 26);
      \u0275\u0275element(57, "input", 27);
      \u0275\u0275elementStart(58, "div", 9)(59, "div", 3)(60, "div", 28)(61, "p");
      \u0275\u0275text(62, "Name (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "input", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 3)(65, "div", 28)(66, "p");
      \u0275\u0275text(67, "Number (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(68, "input", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 31)(70, "div", 28)(71, "p");
      \u0275\u0275text(72, "Email (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(73, "input", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 31)(75, "div", 28)(76, "p");
      \u0275\u0275text(77, "Additional Details (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "textarea", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 31)(80, "div", 34);
      \u0275\u0275element(81, "input", 35);
      \u0275\u0275elementStart(82, "p");
      \u0275\u0275text(83, "I agree with the site privacy policy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div", 31)(85, "div", 34)(86, "button", 36);
      \u0275\u0275text(87, "Submit Now ");
      \u0275\u0275element(88, "i", 37);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Contact3Component, [{
    type: Component,
    args: [{ selector: "app-contact-3", imports: [], template: `<div class="contact2-section-area sp1"
    style="background-image: url(assets/img/all-images/contact-bg2.png); background-position: center; background-position: center; background-repeat: no-repeat; background-size: cover;">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="contact-header-area heading2">
                    <h5 data-aos="fade-left" data-aos-duration="800">Contact Us</h5>
                    <h2 class="tg-element-title">Illuminate Your Message Get in Contact</h2>
                    <p data-aos="fade-left" data-aos-duration="1000">Have questions or ready to get started with our
                        electricity services? Our team is here to help! Whether you're seeking.</p>
                    <div class="space48"></div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="contact-auhtor-side" data-aos="fade-left" data-aos-duration="1000">
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
                                        <a href="tel:1234567890">8502 Preston Rd. Inglewoo </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6">
                            <div class="space48 d-md-none"></div>
                            <div class="contact-auhtor-side" data-aos="fade-left" data-aos-duration="1200">
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

            <div class="col-lg-6" data-aos="zoom-in" data-aos-duration="1200">
                <div class="contact-submit-boxarea">
                    <h4>Request A Quote</h4>
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="0cd32fff-eda2-4da3-be43-37d47fbb396b">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="input-area">
                                    <p>Name (required)</p>
                                    <input type="text" placeholder="Name" required>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="input-area">
                                    <p>Number (required)</p>
                                    <input type="number" placeholder="Phone" required>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="input-area">
                                    <p>Email (required)</p>
                                    <input type="email" placeholder="Email" required>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="input-area">
                                    <p>Additional Details (Optional)</p>
                                    <textarea placeholder="Describe your inquiry" cols="30" rows="10"
                                        required></textarea>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="input-area1">
                                    <input type="checkbox" required>
                                    <p>I agree with the site privacy policy</p>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="input-area1">
                                    <button type="submit" class="header-btn3">Submit Now <i
                                            class="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Contact3Component, { className: "Contact3Component", filePath: "src/app/views/demo/home-3/components/contact-3/contact-3.component.ts", lineNumber: 9 });
})();

// src/app/views/demo/home-3/components/faq-3/faq-3.component.ts
function Faq3Component_For_21_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 22);
  }
}
function Faq3Component_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h2", 17)(2, "button", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, Faq3Component_For_21_div_7_Template, 1, 0, "div", 21);
  }
  if (rf & 2) {
    const faq_r1 = ctx.$implicit;
    const \u0275$index_37_r2 = ctx.$index;
    const \u0275$count_37_r3 = ctx.$count;
    \u0275\u0275property("collapsed", \u0275$index_37_r2 === 0 ? false : true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", faq_r1.question, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r1.answer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(\u0275$index_37_r2 === \u0275$count_37_r3 - 1));
  }
}
var Faq3Component = class _Faq3Component {
  faqs = faqs2;
  static \u0275fac = function Faq3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Faq3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Faq3Component, selectors: [["app-faq-3"]], decls: 22, vars: 1, consts: [[1, "faq2-section-area", "sp1"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-7", "m-auto"], [1, "faq-header-area", "heading4", "text-center"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], [1, "row"], ["data-aos", "zoom-in", "data-aos-duration", "1000", 1, "col-lg-6"], [1, "faq-images"], ["src", "assets/img/all-images/faq-img1.png", "alt", ""], [1, "col-lg-6"], [1, "faq-auhtor-area1"], ["ngbAccordion", "", "id", "accordionFlushExample", 1, "accordion-flush", 3, "closeOthers"], ["ngbAccordionItem", "", "data-aos", "fade-left", "data-aos-duration", "800", 3, "collapsed"], ["ngbAccordionHeader", ""], ["ngbAccordionButton", "", "type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseOne", "aria-expanded", "false", "aria-controls", "flush-collapseOne"], ["ngbAccordionCollapse", "", "id", "flush-collapseOne", "data-bs-parent", "#accordionFlushExample"], ["ngbAccordionBody", ""], ["class", "space20", 4, "ngIf"], [1, "space20"]], template: function Faq3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "FAQ\u2019S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Frequently Best Asked Question?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Take a look at our FAQ section below, and if you don't find the ");
      \u0275\u0275element(11, "br", 8);
      \u0275\u0275text(12, " answer you're looking for, feel free to reach.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "div", 11);
      \u0275\u0275element(16, "img", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "div", 15);
      \u0275\u0275repeaterCreate(20, Faq3Component_For_21_Template, 8, 4, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275property("closeOthers", true);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.faqs);
    }
  }, dependencies: [NgbAccordionModule, NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionBody, NgbAccordionCollapse, CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Faq3Component, [{
    type: Component,
    args: [{ selector: "app-faq-3", imports: [NgbAccordionModule, CommonModule], template: `<div class="faq2-section-area sp1">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7 m-auto">
                <div class="faq-header-area heading4 text-center">
                    <h5 data-aos="fade-left" data-aos-duration="800">FAQ\u2019S</h5>
                    <h2 class="tg-element-title">Frequently Best Asked Question?</h2>
                    <p data-aos="fade-left" data-aos-duration="1000">Take a look at our FAQ section below, and if you
                        don't find the <br class="d-lg-block d-none"> answer you're looking for, feel free to reach.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6" data-aos="zoom-in" data-aos-duration="1000">
                <div class="faq-images">
                    <img src="assets/img/all-images/faq-img1.png" alt="">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="faq-auhtor-area1">
                    <div  ngbAccordion [closeOthers]="true" class="accordion-flush" id="accordionFlushExample">
                        @for (faq of faqs; track $index;let first=$first;let id=$index;let last=$last) {
                            <div  ngbAccordionItem [collapsed]="first ? false : true"  data-aos="fade-left" data-aos-duration="800">
                                <h2 ngbAccordionHeader>
                                    <button ngbAccordionButton type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                      {{faq.question}}
                                    </button>
                                </h2>
                                <div ngbAccordionCollapse id="flush-collapseOne"
                                    data-bs-parent="#accordionFlushExample">
                                    <div ngbAccordionBody>{{faq.answer}}</div>
                                </div>
                            </div>
                            <div *ngIf="!last" class="space20"></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Faq3Component, { className: "Faq3Component", filePath: "src/app/views/demo/home-3/components/faq-3/faq-3.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-3/components/blogs-3/blogs-3.component.ts
var Blogs3Component = class _Blogs3Component {
  static \u0275fac = function Blogs3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Blogs3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Blogs3Component, selectors: [["app-blogs-3"]], decls: 68, vars: 0, consts: [[1, "blog2-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-6", "m-auto"], [1, "blog-header", "heading4", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "800"], ["data-aos", "fade-up", "data-aos-duration", "1000"], ["data-aos", "flip-left", "data-aos-duration", "800", 1, "col-lg-5", "col-md-6"], [1, "blog-auhtor-boxarea"], [1, "img1"], ["src", "assets/img/all-images/blog-img4.png", "alt", ""], [1, "blog-content-area"], ["href", "javascript:void(0)"], [1, "fa-solid", "fa-calendar-days"], [1, "fa-solid", "fa-tag"], ["routerLink", "/blogs/single", 1, "heading"], ["routerLink", "/blogs/single", 1, "learnmore"], [1, "fa-solid", "fa-arrow-right"], ["data-aos", "flip-right", "data-aos-duration", "1000", 1, "col-lg-7", "col-md-6"], [1, "blog-box2"], ["src", "assets/img/all-images/blog-img5.png", "alt", ""], ["src", "assets/img/all-images/blog-img6.png", "alt", ""]], template: function Blogs3Component_Template(rf, ctx) {
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
      \u0275\u0275elementStart(11, "div", 2)(12, "div", 7)(13, "div", 8)(14, "div", 9);
      \u0275\u0275element(15, "img", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 11)(17, "ul")(18, "li")(19, "a", 12);
      \u0275\u0275element(20, "i", 13);
      \u0275\u0275text(21, "April 2,2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 12);
      \u0275\u0275element(24, "i", 14);
      \u0275\u0275text(25, "Electricity Corner");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "a", 15);
      \u0275\u0275text(27, "Electrifying Reads Explore Our Electricity ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 16);
      \u0275\u0275text(29, "Learn more ");
      \u0275\u0275element(30, "i", 17);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "div", 18)(32, "div", 19)(33, "div", 9);
      \u0275\u0275element(34, "img", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 11)(36, "ul")(37, "li")(38, "a", 12);
      \u0275\u0275element(39, "i", 13);
      \u0275\u0275text(40, "April 2,2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 12);
      \u0275\u0275element(43, "i", 14);
      \u0275\u0275text(44, "Electricity Corner");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "a", 15);
      \u0275\u0275text(46, "Electrifying Reads Explore Our Electricity ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "a", 16);
      \u0275\u0275text(48, "Learn more ");
      \u0275\u0275element(49, "i", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 19)(51, "div", 9);
      \u0275\u0275element(52, "img", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 11)(54, "ul")(55, "li")(56, "a", 12);
      \u0275\u0275element(57, "i", 13);
      \u0275\u0275text(58, "April 2,2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "li")(60, "a", 12);
      \u0275\u0275element(61, "i", 14);
      \u0275\u0275text(62, "Electricity Corner");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "a", 15);
      \u0275\u0275text(64, "Electrifying Reads Explore Our Electricity ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "a", 16);
      \u0275\u0275text(66, "Learn more ");
      \u0275\u0275element(67, "i", 17);
      \u0275\u0275elementEnd()()()()()()();
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Blogs3Component, [{
    type: Component,
    args: [{ selector: "app-blogs-3", imports: [RouterLink], template: '<div class="blog2-section-area sp2">\n    <div class="container">\n      <div class="row">\n        <div class="col-lg-6 m-auto">\n          <div class="blog-header heading4 text-center">\n            <h5 data-aos="fade-up" data-aos-duration="800">Our Blog</h5>\n            <h2> Electricity News & Updates</h2>\n            <p data-aos="fade-up" data-aos-duration="1000">From residential households to commercial enterprises, we provide reliable, efficient, and sustainable energy solutions.</p>\n          </div>\n        </div>\n      </div>\n  \n      <div class="row">\n        <div class="col-lg-5 col-md-6" data-aos="flip-left" data-aos-duration="800">\n          <div class="blog-auhtor-boxarea">\n            <div class="img1">\n              <img src="assets/img/all-images/blog-img4.png" alt="">\n            </div>\n             <div class="blog-content-area">\n              <ul>\n                <li><a href="javascript:void(0)"><i class="fa-solid fa-calendar-days"></i>April 2,2024</a></li>\n                <li><a href="javascript:void(0)"><i class="fa-solid fa-tag"></i>Electricity Corner</a></li>\n              </ul>\n              <a routerLink="/blogs/single" class="heading">Electrifying Reads Explore Our Electricity </a>\n              <a routerLink="/blogs/single" class="learnmore">Learn more <i class="fa-solid fa-arrow-right"></i></a>\n             </div>\n          </div>\n        </div>\n  \n        <div class="col-lg-7 col-md-6" data-aos="flip-right" data-aos-duration="1000">\n          <div class=" blog-box2">\n            <div class="img1">\n              <img src="assets/img/all-images/blog-img5.png" alt="">\n            </div>\n             <div class="blog-content-area">\n              <ul>\n                <li><a href="javascript:void(0)"><i class="fa-solid fa-calendar-days"></i>April 2,2024</a></li>\n                <li><a href="javascript:void(0)"><i class="fa-solid fa-tag"></i>Electricity Corner</a></li>\n              </ul>\n              <a routerLink="/blogs/single" class="heading">Electrifying Reads Explore Our Electricity </a>\n              <a routerLink="/blogs/single" class="learnmore">Learn more <i class="fa-solid fa-arrow-right"></i></a>\n            </div>\n          </div>\n  \n          <div class="blog-box2">\n            <div class="img1">\n              <img src="assets/img/all-images/blog-img6.png" alt="">\n            </div>\n             <div class="blog-content-area">\n              <ul>\n                <li><a href="javascript:void(0)"><i class="fa-solid fa-calendar-days"></i>April 2,2024</a></li>\n                <li><a href="javascript:void(0)"><i class="fa-solid fa-tag"></i>Electricity Corner</a></li>\n              </ul>\n              <a routerLink="/blogs/single" class="heading">Electrifying Reads Explore Our Electricity </a>\n              <a routerLink="/blogs/single" class="learnmore">Learn more <i class="fa-solid fa-arrow-right"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Blogs3Component, { className: "Blogs3Component", filePath: "src/app/views/demo/home-3/components/blogs-3/blogs-3.component.ts", lineNumber: 10 });
})();

// src/app/components/footer-2/footer-2.component.ts
var Footer2Component = class _Footer2Component {
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  logo;
  containerClass;
  btnClass;
  static \u0275fac = function Footer2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Footer2Component, selectors: [["app-footer-2"]], inputs: { logo: "logo", containerClass: "containerClass", btnClass: "btnClass" }, decls: 110, vars: 6, consts: [[1, "container"], [1, "row"], [1, "col-lg-12"], [1, "col-lg-6", "m-auto"], [1, "cta-header", "heading2", "text-center"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "d-lg-block", "d-none"], ["action", "#", "data-aos", "fade-up", "data-aos-duration", "1000"], ["type", "email", "placeholder", "Email Address"], ["type", "submit"], [1, "fa-solid", "fa-arrow-right"], [1, "footer-logo-content", "sp4"], [1, "col-lg-3", "col-md-6"], [1, "logo-content"], ["alt", "", 3, "src"], ["href", "javascript:void(0)"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-linkedin-in"], [1, "fa-brands", "fa-youtube"], [1, "col-lg-1", "d-lg-block", "d-none"], [1, "col-lg-2", "col-md-6"], [1, "space30", "d-block", "d-md-none"], [1, "service-heading"], [1, "space30", "d-md-block", "d-lg-none"], ["routerLink", "/home-1"], ["routerLink", "/about"], ["routerLink", "/services/one"], ["routerLink", "/testimonials"], ["routerLink", "/pages/case-left"], [1, "service-heading", "contact"], ["href", "tel:+880123456789"], [1, "icons"], [1, "fa-solid", "fa-phone"], ["href", "mailto:info@mail.com"], [1, "fa-solid", "fa-envelope"], [1, "fa-solid", "fa-location-dot"], [1, "copyright"]], template: function Footer2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h2", 5);
      \u0275\u0275text(7, "Schedule A Free Consultation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9, "Feel free to customize this paragraph to better reflect the specific ");
      \u0275\u0275element(10, "br", 7);
      \u0275\u0275text(11, " services offered by your IT solution & the unique ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "form", 8);
      \u0275\u0275element(13, "input", 9);
      \u0275\u0275elementStart(14, "button", 10);
      \u0275\u0275text(15, "Subscribe Now ");
      \u0275\u0275element(16, "i", 11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 12)(18, "div", 1)(19, "div", 13)(20, "div", 14);
      \u0275\u0275element(21, "img", 15);
      \u0275\u0275elementStart(22, "p");
      \u0275\u0275text(23, "Our goal is to demystify the process, address your concerns, and empower you with the knowledge to embark.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "ul")(25, "li")(26, "a", 16);
      \u0275\u0275element(27, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "li")(29, "a", 16);
      \u0275\u0275element(30, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "li")(32, "a", 16);
      \u0275\u0275element(33, "i", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "li")(35, "a", 16);
      \u0275\u0275element(36, "i", 20);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(37, "div", 21);
      \u0275\u0275elementStart(38, "div", 22);
      \u0275\u0275element(39, "div", 23);
      \u0275\u0275elementStart(40, "div", 24)(41, "h2");
      \u0275\u0275text(42, "Electricity service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "ul")(44, "li")(45, "a", 16);
      \u0275\u0275text(46, "Air Conditioning\xA0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "li")(48, "a", 16);
      \u0275\u0275text(49, "Electrical Panels \xA0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "li")(51, "a", 16);
      \u0275\u0275text(52, "Security System\xA0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "li")(54, "a", 16);
      \u0275\u0275text(55, "\xA0Indoor Lighting\xA0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "li")(57, "a", 16);
      \u0275\u0275text(58, "Electrical Services");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(59, "div", 21);
      \u0275\u0275elementStart(60, "div", 22);
      \u0275\u0275element(61, "div", 25);
      \u0275\u0275elementStart(62, "div", 24)(63, "h2");
      \u0275\u0275text(64, "Quick Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "ul")(66, "li")(67, "a", 26);
      \u0275\u0275text(68, "Home\xA0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "li")(70, "a", 27);
      \u0275\u0275text(71, "About Us \xA0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "li")(73, "a", 28);
      \u0275\u0275text(74, "Service");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "li")(76, "a", 29);
      \u0275\u0275text(77, "\xA0Testimonial");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "li")(79, "a", 30);
      \u0275\u0275text(80, "Contact US");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(81, "div", 13);
      \u0275\u0275element(82, "div", 25);
      \u0275\u0275elementStart(83, "div", 31)(84, "h2");
      \u0275\u0275text(85, "Contact US ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "ul")(87, "li")(88, "a", 32)(89, "span", 33);
      \u0275\u0275element(90, "i", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "span");
      \u0275\u0275text(92, "+880 123 456 789");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(93, "li")(94, "a", 35)(95, "span", 33);
      \u0275\u0275element(96, "i", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "span");
      \u0275\u0275text(98, "info@mail.com\xA0");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(99, "li")(100, "a", 16)(101, "span", 33);
      \u0275\u0275element(102, "i", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "span");
      \u0275\u0275text(104, "8502 Preston Rd. Inglewoo ");
      \u0275\u0275element(105, "br");
      \u0275\u0275text(106, " Maine 98380");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(107, "div", 38)(108, "p");
      \u0275\u0275text(109);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.containerClass);
      \u0275\u0275advance(14);
      \u0275\u0275classMap(ctx.btnClass);
      \u0275\u0275advance(7);
      \u0275\u0275property("src", ctx.logo, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(88);
      \u0275\u0275textInterpolate1("\xA9 Copyright ", ctx.currentYear, " -Current. All Right Reserved");
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer2Component, [{
    type: Component,
    args: [{ selector: "app-footer-2", imports: [RouterLink], template: '<div [class]="containerClass">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-12">\n                <div class="col-lg-6 m-auto">\n                    <div class="cta-header heading2 text-center">\n                        <h2 class="tg-element-title">Schedule A Free Consultation</h2>\n                        <p data-aos="fade-up" data-aos-duration="800">Feel free to customize this paragraph to better\n                            reflect the specific <br class="d-lg-block d-none"> services offered by your IT solution &\n                            the unique </p>\n                        <form action="#" data-aos="fade-up" data-aos-duration="1000">\n                            <input type="email" placeholder="Email Address">\n                            <button type="submit" [class]="btnClass">Subscribe Now <i\n                                    class="fa-solid fa-arrow-right"></i></button>\n                        </form>\n                    </div>\n                </div>\n                <div class="footer-logo-content sp4">\n                    <div class="row">\n                        <div class="col-lg-3 col-md-6">\n                            <div class="logo-content">\n                                <img [src]="logo" alt="">\n                                <p>Our goal is to demystify the process, address your concerns, and empower you with the\n                                    knowledge to embark.</p>\n                                <ul>\n                                    <li><a href="javascript:void(0)"><i class="fa-brands fa-facebook-f"></i></a></li>\n                                    <li><a href="javascript:void(0)"><i class="fa-brands fa-instagram"></i></a></li>\n                                    <li><a href="javascript:void(0)"><i class="fa-brands fa-linkedin-in"></i></a></li>\n                                    <li><a href="javascript:void(0)"><i class="fa-brands fa-youtube"></i></a></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class="col-lg-1 d-lg-block d-none"></div>\n                        <div class="col-lg-2 col-md-6">\n                            <div class="space30 d-block d-md-none"></div>\n                            <div class="service-heading">\n                                <h2>Electricity service</h2>\n                                <ul>\n                                    <li><a href="javascript:void(0)">Air Conditioning\xA0</a></li>\n                                    <li><a href="javascript:void(0)">Electrical Panels \xA0</a></li>\n                                    <li><a href="javascript:void(0)">Security System\xA0</a></li>\n                                    <li><a href="javascript:void(0)">\xA0Indoor Lighting\xA0</a></li>\n                                    <li><a href="javascript:void(0)">Electrical Services</a></li>\n                                </ul>\n                            </div>\n                        </div>\n\n                        <div class="col-lg-1 d-lg-block d-none"></div>\n                        <div class="col-lg-2 col-md-6">\n                            <div class="space30 d-md-block d-lg-none"></div>\n                            <div class="service-heading">\n                                <h2>Quick Links</h2>\n                                <ul>\n                                    <li><a routerLink="/home-1">Home\xA0</a></li>\n                                    <li><a routerLink="/about">About Us \xA0</a></li>\n                                    <li><a routerLink="/services/one">Service</a></li>\n                                    <li><a routerLink="/testimonials">\xA0Testimonial</a></li>\n                                    <li><a routerLink="/pages/case-left">Contact US</a></li>\n                                </ul>\n                            </div>\n                        </div>\n\n                        <div class="col-lg-3 col-md-6">\n                            <div class="space30 d-md-block d-lg-none"></div>\n                            <div class="service-heading contact">\n                                <h2>Contact US </h2>\n                                <ul>\n                                    <li><a href="tel:+880123456789">\n                                            <span class="icons"><i class="fa-solid fa-phone"></i></span><span>+880 123\n                                                456 789</span></a>\n                                    </li>\n                                    <li><a href="mailto:info@mail.com">\n                                            <span class="icons"><i\n                                                    class="fa-solid fa-envelope"></i></span><span>info&#64;mail.com\xA0</span></a>\n                                    </li>\n                                    <li><a href="javascript:void(0)">\n                                            <span class="icons"><i\n                                                    class="fa-solid fa-location-dot"></i></span><span>8502 Preston Rd.\n                                                Inglewoo <br> Maine 98380</span></a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="copyright">\n                    <p>\xA9 Copyright {{currentYear}} -Current. All Right Reserved</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, { logo: [{
    type: Input
  }], containerClass: [{
    type: Input
  }], btnClass: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Footer2Component, { className: "Footer2Component", filePath: "src/app/components/footer-2/footer-2.component.ts", lineNumber: 10 });
})();

// src/app/views/demo/home-3/home-3.component.ts
var Home3Component = class _Home3Component {
  title = "home-3";
  static \u0275fac = function Home3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home3Component, selectors: [["app-home-3"]], decls: 13, vars: 0, consts: [["className", "preloader3", "icon", "assets/img/logo/preloader4.png"], [1, "homepage2-body", "tg-heading-subheading", "animation-style3"], ["btnClass", "header-btn3", "headerClass", "homepage2", "logo", "assets/img/logo/logo2.png", "mobileHeaderClass", "mobile-haeder2", "mobileLogo", "assets/img/logo/logo3.png", "mobileSidebarClass", "mobile-sidebar2"], ["btnClass", "header-btn3", "containerClass", "footer2-section-area", "logo", "assets/img/logo/logo3.png"]], template: function Home3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-loader", 0);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275element(2, "app-topbar", 2)(3, "app-hero-3")(4, "app-about-3")(5, "app-service-3")(6, "app-case-study-3")(7, "app-testimonial-3")(8, "app-team-3")(9, "app-contact-3")(10, "app-faq-3")(11, "app-blogs-3")(12, "app-footer-2", 3);
      \u0275\u0275elementEnd();
    }
  }, dependencies: [LoaderComponent, TopbarComponent, Hero3Component, About3Component, Service3Component, CaseStudy3Component, Testimonial3Component, Team3Component, Contact3Component, Faq3Component, Blogs3Component, Footer2Component], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home3Component, [{
    type: Component,
    args: [{ selector: "app-home-3", imports: [LoaderComponent, TopbarComponent, Hero3Component, About3Component, Service3Component, CaseStudy3Component, Testimonial3Component, Team3Component, Contact3Component, Faq3Component, Blogs3Component, Footer2Component], template: '<app-loader className="preloader3" icon="assets/img/logo/preloader4.png" />\n<div class="homepage2-body tg-heading-subheading animation-style3">\n    <app-topbar btnClass="header-btn3" headerClass="homepage2" logo="assets/img/logo/logo2.png"\n        mobileHeaderClass="mobile-haeder2" mobileLogo="assets/img/logo/logo3.png"\n        mobileSidebarClass="mobile-sidebar2" />\n    <app-hero-3 />\n    <app-about-3 />\n    <app-service-3 />\n    <app-case-study-3 />\n    <app-testimonial-3 />\n    <app-team-3 />\n    <app-contact-3 />\n    <app-faq-3 />\n    <app-blogs-3 />\n    <app-footer-2 btnClass="header-btn3" containerClass="footer2-section-area" logo="assets/img/logo/logo3.png"/>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home3Component, { className: "Home3Component", filePath: "src/app/views/demo/home-3/home-3.component.ts", lineNumber: 21 });
})();

// src/app/views/demo/home-4/components/hero-4/hero-4.component.ts
var Hero4Component = class _Hero4Component {
  static \u0275fac = function Hero4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Hero4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Hero4Component, selectors: [["app-hero-4"]], decls: 26, vars: 0, consts: [[1, "hero3-section-area"], ["src", "assets/img/elements/tower1.png", "alt", "", 1, "tower1", "aniamtion-key-1"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "hero-header-area", "heading5"], [1, "tg-element-title"], [1, "btn-area"], ["routerLink", "/contact-us", 1, "header-btn5"], [1, "fa-solid", "fa-arrow-right"], ["routerLink", "/contact-us", 1, "header-btn6"], [1, "header-images-area"], [1, "header-img"], ["src", "assets/img/all-images/header-img5.png", "alt", ""], [1, "shapes"], ["src", "assets/img/elements/arrow1.png", "alt", "", 1, "arrow1", "aniamtion-key-8"], ["src", "assets/img/elements/lite1.png", "alt", "", 1, "lite1"]], template: function Hero4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5");
      \u0275\u0275text(7, "Current Electricity Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h1", 6);
      \u0275\u0275text(9, "Electricity Services Connected Powered");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p");
      \u0275\u0275text(11, "Whether you're a homeowner, business owner, or community leader, a we're here to light up your life with sustainable energy solutions.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7)(13, "a", 8);
      \u0275\u0275text(14, "Get a Free Estimate ");
      \u0275\u0275element(15, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 10);
      \u0275\u0275text(17, "Discover More ");
      \u0275\u0275element(18, "i", 9);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 4)(20, "div", 11)(21, "div", 12);
      \u0275\u0275element(22, "img", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 14);
      \u0275\u0275element(24, "img", 15)(25, "img", 16);
      \u0275\u0275elementEnd()()()()()();
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Hero4Component, [{
    type: Component,
    args: [{ selector: "app-hero-4", imports: [RouterLink], template: `<div class="hero3-section-area">
    <img src="assets/img/elements/tower1.png" alt="" class="tower1 aniamtion-key-1">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="hero-header-area heading5">
                    <h5>Current Electricity Services</h5>
                    <h1 class="tg-element-title">Electricity Services Connected Powered</h1>
                    <p>Whether you're a homeowner, business owner, or community leader, a we're here to light up your
                        life with sustainable energy solutions.</p>
                    <div class="btn-area">
                        <a routerLink="/contact-us" class="header-btn5">Get a Free Estimate <i
                                class="fa-solid fa-arrow-right"></i></a>
                        <a routerLink="/contact-us" class="header-btn6">Discover More <i
                                class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="header-images-area">
                    <div class="header-img">
                        <img src="assets/img/all-images/header-img5.png" alt="">
                    </div>
                    <div class="shapes">
                        <img src="assets/img/elements/arrow1.png" alt="" class="arrow1 aniamtion-key-8">
                        <img src="assets/img/elements/lite1.png" alt="" class="lite1">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Hero4Component, { className: "Hero4Component", filePath: "src/app/views/demo/home-4/components/hero-4/hero-4.component.ts", lineNumber: 10 });
})();

// src/app/views/demo/home-4/components/about-4/about-4.component.ts
var About4Component = class _About4Component {
  static \u0275fac = function About4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _About4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _About4Component, selectors: [["app-about-4"]], decls: 47, vars: 0, consts: [[1, "about3-section-area", "sp1"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-5"], [1, "about3-header-area", "heading6"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], ["data-aos", "fade-left", "data-aos-duration", "1100", 1, "misson-text"], ["src", "assets/img/icons/check3.svg", "alt", ""], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/services/one", 1, "header-btn5"], [1, "fa-solid", "fa-arrow-right"], [1, "col-lg-1"], [1, "col-lg-6"], [1, "about-images-area"], [1, "row"], [1, "col-lg-6", "col-md-6"], ["data-aos", "zoom-in", "data-aos-duration", "1000", 1, "img1"], [1, "space70", "d-md-block", "d-none"], [1, "space30", "d-md-none", "d-block"], ["src", "assets/img/all-images/about-img5.png", "alt", ""], ["data-aos", "zoom-in", "data-aos-duration", "1200", 1, "img1"], ["src", "assets/img/all-images/about-img6.png", "alt", ""], [1, "about-footer-bottom"], [1, "img"], ["src", "assets/img/icons/star1.svg", "alt", ""], [1, "content"]], template: function About4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Who Are We");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Energize Your Knowledge Get to Know Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "With a commitment to sustainability, innovation, and customer satisfaction, we strive to provide reliable, efficient, and eco-friendly electricity services to homes, businesses.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "p");
      \u0275\u0275text(13, "Our Mission");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "ul")(15, "li");
      \u0275\u0275element(16, "img", 9);
      \u0275\u0275text(17, "Established fact that a reader will be distracted.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "li");
      \u0275\u0275element(19, "img", 9);
      \u0275\u0275text(20, "Sed ut perspiciatis unde omnis iste natus sit.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "li");
      \u0275\u0275element(22, "img", 9);
      \u0275\u0275text(23, "Trusted Electrical Services");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 10)(25, "a", 11);
      \u0275\u0275text(26, "View All Service ");
      \u0275\u0275element(27, "i", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(28, "div", 13);
      \u0275\u0275elementStart(29, "div", 14)(30, "div", 15)(31, "div", 16)(32, "div", 17)(33, "div", 18);
      \u0275\u0275element(34, "div", 19)(35, "div", 20)(36, "img", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 17)(38, "div", 22);
      \u0275\u0275element(39, "div", 20)(40, "img", 23);
      \u0275\u0275elementStart(41, "div", 24)(42, "div", 25);
      \u0275\u0275element(43, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 27)(45, "span");
      \u0275\u0275text(46, "Approved Best Electricity ");
      \u0275\u0275elementEnd()()()()()()()()()()();
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(About4Component, [{
    type: Component,
    args: [{ selector: "app-about-4", imports: [RouterLink], template: '<div class="about3-section-area sp1">\n    <div class="container">\n        <div class="row align-items-center">\n            <div class="col-lg-5">\n                <div class="about3-header-area heading6">\n                    <h5 data-aos="fade-left" data-aos-duration="800">Who Are We</h5>\n                    <h2 class="tg-element-title">Energize Your Knowledge Get to Know Us</h2>\n                    <p data-aos="fade-left" data-aos-duration="1000">With a commitment to sustainability, innovation,\n                        and customer satisfaction, we strive to provide reliable, efficient, and eco-friendly\n                        electricity services to homes, businesses.</p>\n                    <div class="misson-text" data-aos="fade-left" data-aos-duration="1100">\n                        <p>Our Mission</p>\n                        <ul>\n                            <li><img src="assets/img/icons/check3.svg" alt="">Established fact that a reader will be\n                                distracted.</li>\n                            <li><img src="assets/img/icons/check3.svg" alt="">Sed ut perspiciatis unde omnis iste natus\n                                sit.</li>\n                            <li><img src="assets/img/icons/check3.svg" alt="">Trusted Electrical Services</li>\n                        </ul>\n                    </div>\n                    <div class="btn-area" data-aos="fade-left" data-aos-duration="1200">\n                        <a routerLink="/services/one" class="header-btn5">View All Service <i\n                                class="fa-solid fa-arrow-right"></i></a>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-1"></div>\n            <div class="col-lg-6">\n                <div class="about-images-area">\n                    <div class="row">\n                        <div class="col-lg-6 col-md-6">\n                            <div class="img1" data-aos="zoom-in" data-aos-duration="1000">\n                                <div class="space70 d-md-block d-none"></div>\n                                <div class="space30 d-md-none d-block"></div>\n                                <img src="assets/img/all-images/about-img5.png" alt="">\n                            </div>\n                        </div>\n                        <div class="col-lg-6 col-md-6">\n                            <div class="img1" data-aos="zoom-in" data-aos-duration="1200">\n                                <div class="space30 d-md-none d-block"></div>\n                                <img src="assets/img/all-images/about-img6.png" alt="">\n                                <div class="about-footer-bottom">\n                                    <div class="img">\n                                        <img src="assets/img/icons/star1.svg" alt="">\n                                    </div>\n                                    <div class="content">\n                                        <span>Approved Best Electricity </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(About4Component, { className: "About4Component", filePath: "src/app/views/demo/home-4/components/about-4/about-4.component.ts", lineNumber: 10 });
})();

// src/app/views/demo/home-4/components/data.ts
var services2 = [
  {
    id: 1,
    icon: "assets/img/icons/service-icons4.svg",
    title: "Bright Beam Services",
    description: "Our services encompass everything from residential energy solutions to commercial power management.",
    duration: 800
  },
  {
    id: 2,
    icon: "assets/img/icons/service-icons5.svg",
    title: "Renewable Energy Plans",
    description: "With cutting-edge technology and industry expertise, we empower our customers to make informed.",
    duration: 1e3
  },
  {
    id: 3,
    icon: "assets/img/icons/service-icons6.svg",
    title: "Current Control Plans",
    description: "Whether you're looking for reliable electricity supply, energy-efficient solutions, or renewable energy.",
    duration: 1200
  },
  {
    id: 4,
    icon: "assets/img/icons/service-icons7.svg",
    title: "Electra Care Solutions",
    description: "We have you covered. Our team of experts is committed to delivering high-quality services prioritize.",
    duration: 800
  },
  {
    id: 5,
    icon: "assets/img/icons/service-icons8.svg",
    title: "Electra Works Solutions",
    description: "Explore our range of services below and discover how we can help you power your life, business, and future.",
    duration: 1e3
  },
  {
    id: 6,
    icon: "assets/img/icons/service-icons9.svg",
    title: "Efficiency First Services",
    description: "We empower our customers to make informed decisions about their energy needs and optimize their.",
    duration: 1200
  }
];
var cases = [
  {
    image: "assets/img/all-images/case-img4.png",
    title: "Powerful Transformations",
    subtitle: "Electricity & Current",
    duration: 800
  },
  {
    image: "assets/img/all-images/case-img5.png",
    title: "Current Chronicles",
    subtitle: "Electricity & Current",
    duration: 1e3
  },
  {
    image: "assets/img/all-images/case-img6.png",
    title: "Electrifying Experiences",
    subtitle: "Electricity & Current",
    duration: 1200
  }
];
var testimonials2 = [
  {
    image: "assets/img/all-images/testimonial-img7.png",
    name: "Dhruv Jerel",
    role: "Scheduler",
    description: "From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn"
  },
  {
    image: "assets/img/all-images/testimonial-img8.png",
    name: "Alex Ross",
    role: "Demand Planner",
    description: "From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn"
  },
  {
    image: "assets/img/all-images/testimonial-img9.png",
    name: "Tim Witsel",
    role: "Logistics Officer",
    description: "From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn"
  },
  {
    image: "assets/img/all-images/testimonial-img7.png",
    name: "Dhruv Jerel",
    role: "Scheduler",
    description: "From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn"
  },
  {
    image: "assets/img/all-images/testimonial-img8.png",
    name: "Alex Ross",
    role: "Demand Planner",
    description: "From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn"
  },
  {
    image: "assets/img/all-images/testimonial-img9.png",
    name: "Tim Witsel",
    role: "Logistics Officer",
    description: "From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn"
  },
  {
    image: "assets/img/all-images/testimonial-img7.png",
    name: "Dhruv Jerel",
    role: "Scheduler",
    description: "From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn"
  },
  {
    image: "assets/img/all-images/testimonial-img8.png",
    name: "Alex Ross",
    role: "Demand Planner",
    description: "From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn"
  },
  {
    image: "assets/img/all-images/testimonial-img9.png",
    name: "Tim Witsel",
    role: "Logistics Officer",
    description: "From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn"
  }
];
var teamMembers3 = [
  {
    name: "Kore Anderson",
    role: "Team Leader",
    image: "assets/img/all-images/team-img5.png",
    aosDuration: 800
  },
  {
    name: "Sean Williams",
    role: "Client Analyst",
    image: "assets/img/all-images/team-img6.png",
    aosDuration: 1e3
  },
  {
    name: "Tim Robinson",
    role: "Team Manager",
    image: "assets/img/all-images/team-img7.png",
    aosDuration: 1200
  }
];
var blogs2 = [
  {
    date: "16 April 2024",
    author: "Dawid Malan",
    authorImg: "assets/img/icons/auhtor1.svg",
    title: "Electricity Empowerment: Insights & Innovations",
    image: "assets/img/all-images/blog-img7.png",
    aosDuration: 800
  },
  {
    date: "16 April 2024",
    author: "Dawid Malan",
    authorImg: "assets/img/icons/auhtor1.svg",
    title: "Energize Chronicles: Stories from the Energy Frontier",
    image: "assets/img/all-images/blog-img8.png",
    aosDuration: 1e3
  },
  {
    date: "16 April 2024",
    author: "Dawid Malan",
    authorImg: "assets/img/icons/auhtor1.svg",
    title: "Illuminate Intelligence: Bright Ideas in Energy",
    image: "assets/img/all-images/blog-img9.png",
    aosDuration: 1200
  }
];

// src/app/views/demo/home-4/components/service-4/service-4.component.ts
function Service4Component_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275element(3, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "a", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 15);
    \u0275\u0275text(10, " Read More ");
    \u0275\u0275element(11, "i", 16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-aos-duration", item_r1.duration);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r1.icon, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.description);
  }
}
var Service4Component = class _Service4Component {
  services = services2;
  static \u0275fac = function Service4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Service4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Service4Component, selectors: [["app-service-4"]], decls: 13, vars: 1, consts: [[1, "service3-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-6", "m-auto"], [1, "service-header-area", "heading7", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], ["class", "col-lg-4 col-md-6", "data-aos", "zoom-in", 4, "ngFor", "ngForOf"], ["data-aos", "zoom-in", 1, "col-lg-4", "col-md-6"], [1, "service-auhtor-boxarea"], [1, "icons"], ["alt", "", 3, "src"], [1, "content-area"], ["routerLink", "/services/single"], ["routerLink", "/services/single", 1, "readmore"], [1, "fa-solid", "fa-arrow-right"]], template: function Service4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Our Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Trusted Electricity Providers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "From residential households to commercial enterprises, we provide reliable, efficient, and sustainable energy solutions.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 2);
      \u0275\u0275template(12, Service4Component_div_12_Template, 12, 4, "div", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.services);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Service4Component, [{
    type: Component,
    args: [{ selector: "app-service-4", imports: [CommonModule, RouterLink], template: '<div class="service3-section-area sp2">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-6 m-auto">\n                <div class="service-header-area heading7 text-center">\n                    <h5 data-aos="fade-up" data-aos-duration="800">Our Services</h5>\n                    <h2 class="tg-element-title">Trusted Electricity Providers</h2>\n                    <p data-aos="fade-up" data-aos-duration="1000">From residential households to commercial\n                        enterprises, we provide reliable, efficient, and sustainable energy solutions.</p>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-lg-4 col-md-6" *ngFor="let item of services" data-aos="zoom-in"\n                [attr.data-aos-duration]="item.duration">\n                <div class="service-auhtor-boxarea">\n                    <div class="icons">\n                        <img [src]="item.icon" alt="">\n                    </div>\n                    <div class="content-area">\n                        <a routerLink="/services/single">{{ item.title }}</a>\n                        <p>{{ item.description }}</p>\n                        <a routerLink="/services/single" class="readmore">\n                            Read More <i class="fa-solid fa-arrow-right"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Service4Component, { className: "Service4Component", filePath: "src/app/views/demo/home-4/components/service-4/service-4.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-4/components/case-study-4/case-study-4.component.ts
function CaseStudy4Component_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275element(3, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275element(5, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15)(7, "a", 16)(8, "span");
    \u0275\u0275element(9, "i", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 16);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-aos-duration", item_r1.duration);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(item_r1.subtitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.title);
  }
}
var CaseStudy4Component = class _CaseStudy4Component {
  cases = cases;
  static \u0275fac = function CaseStudy4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CaseStudy4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaseStudy4Component, selectors: [["app-case-study-4"]], decls: 13, vars: 1, consts: [[1, "casestudy2-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-7", "m-auto"], [1, "casestudy-header", "text-center", "heading6"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], ["class", "col-lg-4 col-md-6", "data-aos", "zoom-in", 4, "ngFor", "ngForOf"], ["data-aos", "zoom-in", 1, "col-lg-4", "col-md-6"], [1, "case-auhtor-boxarea"], [1, "img1"], ["alt", "", 3, "src"], [1, "case-bg"], ["src", "assets/img/bg/casebg.png", "alt", ""], [1, "content"], ["routerLink", "/case-study-single"], [1, "fa-solid", "fa-arrow-right"]], template: function CaseStudy4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Case Studies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Electricity Service Case Studies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, " Explore real-life examples of our electricity services in action through our case studies. From residential homes to commercial enterprises, ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 2);
      \u0275\u0275template(12, CaseStudy4Component_div_12_Template, 14, 4, "div", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.cases);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaseStudy4Component, [{
    type: Component,
    args: [{ selector: "app-case-study-4", imports: [CommonModule, RouterLink], template: '<div class="casestudy2-section-area sp2">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-7 m-auto">\n                <div class="casestudy-header text-center heading6">\n                    <h5 data-aos="fade-up" data-aos-duration="800">Case Studies</h5>\n                    <h2 class="tg-element-title">Electricity Service Case Studies</h2>\n                    <p data-aos="fade-up" data-aos-duration="1000"> Explore real-life examples of our electricity\n                        services in action through our case studies. From residential homes to commercial enterprises,\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-lg-4 col-md-6" *ngFor="let item of cases" data-aos="zoom-in"\n                [attr.data-aos-duration]="item.duration">\n                <div class="case-auhtor-boxarea">\n                    <div class="img1">\n                        <img [src]="item.image" alt="">\n                    </div>\n                    <div class="case-bg">\n                        <img src="assets/img/bg/casebg.png" alt="">\n                    </div>\n                    <div class="content">\n                        <a routerLink="/case-study-single"><span><i class="fa-solid fa-arrow-right"></i></span></a>\n                        <p>{{ item.subtitle }}</p>\n                        <a routerLink="/case-study-single">{{ item.title }}</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaseStudy4Component, { className: "CaseStudy4Component", filePath: "src/app/views/demo/home-4/components/case-study-4/case-study-4.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-4/components/testimonial-4/testimonial-4.component.ts
var _c04 = () => [1, 2, 3, 4, 5];
function Testimonial4Component_ng_container_16_ng_template_1_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275elementEnd();
  }
}
function Testimonial4Component_ng_container_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275element(2, "img", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "ul", 17);
    \u0275\u0275template(5, Testimonial4Component_ng_container_16_ng_template_1_li_5_Template, 2, 0, "li", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", item_r1.image, \u0275\u0275sanitizeUrl)("alt", item_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(6, _c04));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u201C", item_r1.description, "\u201D");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.role);
  }
}
function Testimonial4Component_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Testimonial4Component_ng_container_16_ng_template_1_Template, 12, 7, "ng-template", 12);
    \u0275\u0275elementContainerEnd();
  }
}
var Testimonial4Component = class _Testimonial4Component {
  testimonials = testimonials2;
  carouselOptions = {
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    mouseDrag: true,
    items: 10,
    autoplay: true,
    smartSpeed: 2e3,
    autoplayTimeout: 3e3,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2
      },
      1e3: {
        items: 3
      }
    }
  };
  static \u0275fac = function Testimonial4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Testimonial4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Testimonial4Component, selectors: [["app-testimonial-4"]], decls: 17, vars: 2, consts: [[1, "testimonial3-section-area", "sp1"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "testimonial3-header", "heading6"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], ["data-aos", "zoom-in", "data-aos-duration", "1000", 1, "col-lg-12"], [1, "testimonial-slider-area", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "testimonial-boxes"], [1, "img1"], [3, "src", "alt"], [1, "content-area"], [1, "d-flex", "gap-1", "align-items-center", "justify-content-center"], ["routerLink", "/our-team"], [1, "fa-solid", "fa-star"]], template: function Testimonial4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Testimonials");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Hear from Our Satisfied Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Discover why our customers love our electricity services! Read testimonials from ");
      \u0275\u0275element(11, "br", 8);
      \u0275\u0275text(12, " satisfied clients who have experienced the reliability, efficiency,");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 2)(14, "div", 9)(15, "owl-carousel-o", 10);
      \u0275\u0275template(16, Testimonial4Component_ng_container_16_Template, 2, 0, "ng-container", 11);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275property("options", ctx.carouselOptions);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.testimonials);
    }
  }, dependencies: [CarouselModule, CarouselComponent, CarouselSlideDirective, CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Testimonial4Component, [{
    type: Component,
    args: [{ selector: "app-testimonial-4", imports: [CarouselModule, CommonModule, RouterLink], template: '<div class="testimonial3-section-area sp1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8 m-auto">\n                <div class="testimonial3-header heading6">\n                    <h5 data-aos="fade-up" data-aos-duration="800">Testimonials</h5>\n                    <h2 class="tg-element-title">Hear from Our Satisfied Customers</h2>\n                    <p data-aos="fade-up" data-aos-duration="1000">Discover why our customers love our electricity services! Read testimonials from <br class="d-lg-block d-none"> satisfied clients who have experienced the reliability, efficiency,</p>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n          <div class="col-lg-12" data-aos="zoom-in" data-aos-duration="1000">\n            <owl-carousel-o [options]="carouselOptions" class="testimonial-slider-area">\n                <ng-container *ngFor="let item of testimonials">\n                  <ng-template carouselSlide>\n                    <div class="testimonial-boxes">\n                      <div class="img1">\n                        <img [src]="item.image" [alt]="item.name">\n                      </div>\n                      <div class="content-area">\n                        <ul class="d-flex gap-1 align-items-center justify-content-center">\n                          <li *ngFor="let star of [1,2,3,4,5]" ><i class="fa-solid fa-star"></i></li>\n                        </ul>\n                        <p>\u201C{{ item.description }}\u201D</p>\n                        <a routerLink="/our-team">{{ item.name }}</a>\n                        <p>{{ item.role }}</p>\n                      </div>\n                    </div>\n                  </ng-template>\n                </ng-container>\n              </owl-carousel-o>\n              \n          </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Testimonial4Component, { className: "Testimonial4Component", filePath: "src/app/views/demo/home-4/components/testimonial-4/testimonial-4.component.ts", lineNumber: 13 });
})();

// src/app/views/demo/home-4/components/team-4/team-4.component.ts
function Team4Component_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275element(3, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "a", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ul")(10, "li")(11, "a", 15);
    \u0275\u0275element(12, "i", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "a", 15);
    \u0275\u0275element(15, "i", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li")(17, "a", 15);
    \u0275\u0275element(18, "i", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "li")(20, "a", 15);
    \u0275\u0275element(21, "i", 19);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-aos", "zoom-in")("data-aos-duration", member_r1.aosDuration);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", member_r1.image, \u0275\u0275sanitizeUrl)("alt", member_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r1.role);
  }
}
var Team4Component = class _Team4Component {
  teamMembers = teamMembers3;
  static \u0275fac = function Team4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Team4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Team4Component, selectors: [["app-team-4"]], decls: 13, vars: 1, consts: [[1, "team3-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-6", "m-auto"], [1, "team-header-area", "text-center", "heading6"], ["data-aos", "fade-up", "data-aos-duration", "800"], ["data-aos", "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [1, "team-auhtor-boxes"], [1, "img1"], [3, "src", "alt"], [1, "content-area"], ["routerLink", "/pages/our-team"], ["href", "javascript:void(0)"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-linkedin-in"], [1, "fa-brands", "fa-behance"]], template: function Team4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Our Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Discover Our Dedicated Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "From our experienced technicians who ensure reliable installations to our knowledgeable customer service representatives who provide.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 2);
      \u0275\u0275template(12, Team4Component_div_12_Template, 22, 6, "div", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.teamMembers);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Team4Component, [{
    type: Component,
    args: [{ selector: "app-team-4", imports: [CommonModule, RouterLink], template: `<div class="team3-section-area sp2">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="team-header-area text-center heading6">
                    <h5 data-aos="fade-up" data-aos-duration="800">Our Team</h5>
                    <h2 data-aos="tg-element-title">Discover Our Dedicated Team</h2>
                    <p data-aos="fade-up" data-aos-duration="1000">From our experienced technicians who ensure reliable
                        installations to our knowledgeable customer service representatives who provide.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div *ngFor="let member of teamMembers" class="col-lg-4 col-md-6" [attr.data-aos]="'zoom-in'"
                [attr.data-aos-duration]="member.aosDuration">
                <div class="team-auhtor-boxes">
                    <div class="img1">
                        <img [src]="member.image" [alt]="member.name">
                    </div>
                    <div class="content-area">
                        <a routerLink="/pages/our-team">{{ member.name }}</a>
                        <p>{{ member.role }}</p>
                        <ul>
                            <li><a href="javascript:void(0)"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="javascript:void(0)"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="javascript:void(0)"><i class="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="javascript:void(0)"><i class="fa-brands fa-behance"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Team4Component, { className: "Team4Component", filePath: "src/app/views/demo/home-4/components/team-4/team-4.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-4/components/contact-4/contact-4.component.ts
var Contact4Component = class _Contact4Component {
  static \u0275fac = function Contact4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Contact4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Contact4Component, selectors: [["app-contact-4"]], decls: 89, vars: 0, consts: [[1, "contact3-section-area", "sp1", 2, "background-image", "url(assets/img/all-images/contact-bg2.png)", "background-position", "center", "background-position", "center", "background-repeat", "no-repeat", "background-size", "cover"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "contact-header-area", "heading7"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "space48"], [1, "row"], [1, "col-lg-6", "col-md-6"], ["data-aos", "fade-left", "data-aos-duration", "1000", 1, "contact-auhtor-side"], [1, "icons-text"], [1, "icons"], [1, "fa-solid", "fa-phone"], [1, "text"], ["href", "tel:1234567890"], [1, "fa-solid", "fa-location-dot"], [1, "space48", "d-md-none"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "contact-auhtor-side"], [1, "fa-solid", "fa-envelope"], ["href", "mailto:serebangle@gmail.com "], [1, "fa-brands", "fa-linkedin-in"], ["href", "javascript:void(0)"], ["data-aos", "zoom-in", "data-aos-duration", "1200", 1, "col-lg-6"], [1, "contact-submit-boxarea"], ["action", "https://api.web3forms.com/submit", "method", "POST"], ["type", "hidden", "name", "access_key", "value", "0cd32fff-eda2-4da3-be43-37d47fbb396b"], [1, "input-area"], ["type", "text", "placeholder", "Name", "required", ""], ["type", "number", "placeholder", "Phone", "required", ""], [1, "col-lg-12"], ["type", "email", "placeholder", "Email", "required", ""], ["placeholder", "Describe your inquiry", "cols", "30", "rows", "10", "required", ""], [1, "input-area1"], ["type", "checkbox", "required", ""], ["type", "submit", 1, "header-btn5"], [1, "fa-solid", "fa-arrow-right"]], template: function Contact4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Contact Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Illuminate Your Message Get in Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Have questions or ready to get started with our electricity services? Our team is here to help! Whether you're seeking.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "div", 8);
      \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13);
      \u0275\u0275element(17, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 15)(19, "p");
      \u0275\u0275text(20, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 16);
      \u0275\u0275text(22, "123 456 7890");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(23, "div", 8);
      \u0275\u0275elementStart(24, "div", 12)(25, "div", 13);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 15)(28, "p");
      \u0275\u0275text(29, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "a", 16);
      \u0275\u0275text(31, "8502 Preston Rd. Inglewoo");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(32, "div", 10);
      \u0275\u0275element(33, "div", 18);
      \u0275\u0275elementStart(34, "div", 19)(35, "div", 12)(36, "div", 13);
      \u0275\u0275element(37, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 15)(39, "p");
      \u0275\u0275text(40, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "a", 21);
      \u0275\u0275text(42, "serebangle@gmail.com ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(43, "div", 8);
      \u0275\u0275elementStart(44, "div", 12)(45, "div", 13);
      \u0275\u0275element(46, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 15)(48, "p");
      \u0275\u0275text(49, "Linkedin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "a", 23);
      \u0275\u0275text(51, "Fleexstudio");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(52, "div", 24)(53, "div", 25)(54, "h4");
      \u0275\u0275text(55, "Request A Quote");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "form", 26);
      \u0275\u0275element(57, "input", 27);
      \u0275\u0275elementStart(58, "div", 9)(59, "div", 3)(60, "div", 28)(61, "p");
      \u0275\u0275text(62, "Name (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "input", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 3)(65, "div", 28)(66, "p");
      \u0275\u0275text(67, "Number (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(68, "input", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 31)(70, "div", 28)(71, "p");
      \u0275\u0275text(72, "Email (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(73, "input", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 31)(75, "div", 28)(76, "p");
      \u0275\u0275text(77, "Additional Details (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "textarea", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 31)(80, "div", 34);
      \u0275\u0275element(81, "input", 35);
      \u0275\u0275elementStart(82, "p");
      \u0275\u0275text(83, "I agree with the site privacy policy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div", 31)(85, "div", 34)(86, "button", 36);
      \u0275\u0275text(87, "Submit Now ");
      \u0275\u0275element(88, "i", 37);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Contact4Component, [{
    type: Component,
    args: [{ selector: "app-contact-4", imports: [], template: `<div class="contact3-section-area sp1"
    style="background-image: url(assets/img/all-images/contact-bg2.png); background-position: center; background-position: center; background-repeat: no-repeat; background-size: cover;">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="contact-header-area heading7">
                    <h5 data-aos="fade-left" data-aos-duration="800">Contact Us</h5>
                    <h2 class="tg-element-title">Illuminate Your Message Get in Contact</h2>
                    <p data-aos="fade-left" data-aos-duration="1000">Have questions or ready to get started with our
                        electricity services? Our team is here to help! Whether you're seeking.</p>
                    <div class="space48"></div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="contact-auhtor-side" data-aos="fade-left" data-aos-duration="1000">
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
                                        <a href="tel:1234567890">8502 Preston Rd. Inglewoo</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6">
                            <div class="space48 d-md-none"></div>
                            <div class="contact-auhtor-side" data-aos="fade-left" data-aos-duration="1200">
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

            <div class="col-lg-6" data-aos="zoom-in" data-aos-duration="1200">
                <div class="contact-submit-boxarea">
                    <h4>Request A Quote</h4>
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="0cd32fff-eda2-4da3-be43-37d47fbb396b">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="input-area">
                                    <p>Name (required)</p>
                                    <input type="text" placeholder="Name" required>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="input-area">
                                    <p>Number (required)</p>
                                    <input type="number" placeholder="Phone" required>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="input-area">
                                    <p>Email (required)</p>
                                    <input type="email" placeholder="Email" required>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="input-area">
                                    <p>Additional Details (Optional)</p>
                                    <textarea placeholder="Describe your inquiry" cols="30" rows="10"
                                        required></textarea>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="input-area1">
                                    <input type="checkbox" required>
                                    <p>I agree with the site privacy policy</p>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="input-area1">
                                    <button type="submit" class="header-btn5">Submit Now <i
                                            class="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Contact4Component, { className: "Contact4Component", filePath: "src/app/views/demo/home-4/components/contact-4/contact-4.component.ts", lineNumber: 9 });
})();

// src/app/views/demo/home-4/components/blogs-4/blogs-4.component.ts
function Blogs4Component_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "a", 14);
    \u0275\u0275element(5, "i", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 16)(8, "a", 14);
    \u0275\u0275element(9, "img", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 18)(12, "a", 19);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 20);
    \u0275\u0275text(15, "Read More ");
    \u0275\u0275element(16, "i", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 22);
    \u0275\u0275element(18, "img", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-aos", "zoom-in")("data-aos-duration", post_r1.aosDuration);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(post_r1.date);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", post_r1.authorImg, \u0275\u0275sanitizeUrl)("alt", post_r1.author);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(post_r1.author);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r1.title);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", post_r1.image, \u0275\u0275sanitizeUrl)("alt", post_r1.title);
  }
}
var Blogs4Component = class _Blogs4Component {
  blogPosts = blogs2;
  static \u0275fac = function Blogs4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Blogs4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Blogs4Component, selectors: [["app-blogs-4"]], decls: 15, vars: 1, consts: [[1, "blog3-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-6", "m-auto"], [1, "blog-header-area", "text-center", "heading6"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [1, "blog-boxes-area"], [1, "tags-area"], [1, "date"], ["href", "javascript:void(0)"], [1, "fa-solid", "fa-calendar-days"], [1, "contact"], [3, "src", "alt"], [1, "content-area"], ["routerLink", "/blogs/single"], ["routerLink", "/blogs/single", 1, "readmore"], [1, "fa-solid", "fa-arrow-right"], [1, "img1"]], template: function Blogs4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Our Latest News");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Your Knowledge into Our Blog");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "From residential households to commercial enterprises, we provide ");
      \u0275\u0275element(11, "br", 8);
      \u0275\u0275text(12, " reliable, efficient, and sustainable energy solutions.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 2);
      \u0275\u0275template(14, Blogs4Component_div_14_Template, 19, 9, "div", 9);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.blogPosts);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Blogs4Component, [{
    type: Component,
    args: [{ selector: "app-blogs-4", imports: [CommonModule, RouterLink], template: `<div class="blog3-section-area sp2">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 m-auto">
          <div class="blog-header-area text-center heading6">
            <h5 data-aos="fade-up" data-aos-duration="800">Our Latest News</h5>
            <h2 class="tg-element-title">Your Knowledge into Our Blog</h2>
            <p data-aos="fade-up" data-aos-duration="1000">From residential households to commercial enterprises, we provide <br class="d-lg-block d-none"> reliable, efficient, and sustainable energy solutions.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div *ngFor="let post of blogPosts" class="col-lg-4 col-md-6" [attr.data-aos]="'zoom-in'" [attr.data-aos-duration]="post.aosDuration">
          <div class="blog-boxes-area">
            <div class="tags-area">
              <div class="date">
                <a href="javascript:void(0)"><i class="fa-solid fa-calendar-days"></i>{{ post.date }}</a>
              </div>
              <div class="contact">
                <a href="javascript:void(0)"><img [src]="post.authorImg" [alt]="post.author">{{ post.author }}</a>
              </div>
            </div>
            <div class="content-area">
              <a routerLink="/blogs/single">{{ post.title }}</a>
              <a routerLink="/blogs/single" class="readmore">Read More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div class="img1">
              <img [src]="post.image" [alt]="post.title">
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Blogs4Component, { className: "Blogs4Component", filePath: "src/app/views/demo/home-4/components/blogs-4/blogs-4.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-4/home-4.component.ts
var Home4Component = class _Home4Component {
  static \u0275fac = function Home4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home4Component, selectors: [["app-home-4"]], decls: 12, vars: 1, consts: [["className", "preloader4", "icon", "assets/img/logo/preloader3.png"], [1, "homepage3-body", "tg-heading-subheading", "animation-style3"], ["headerClass", "homepage3", "btnClass", "header-btn5", "logo", "assets/img/logo/logo4.png", "mobileHeaderClass", "mobile-haeder3", "mobileLogo", "assets/img/logo/logo5.png", "mobileSidebarClass", "mobile-sidebar3", 3, "isAlert"], ["btnClass", "header-btn5", "containerClass", "footer3-section-area", "logo", "assets/img/logo/logo5.png"]], template: function Home4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-loader", 0);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275element(2, "app-topbar", 2)(3, "app-hero-4")(4, "app-about-4")(5, "app-service-4")(6, "app-case-study-4")(7, "app-testimonial-4")(8, "app-team-4")(9, "app-contact-4")(10, "app-blogs-4")(11, "app-footer-2", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("isAlert", true);
    }
  }, dependencies: [LoaderComponent, TopbarComponent, Hero4Component, About4Component, Service4Component, CaseStudy4Component, Testimonial4Component, Team4Component, Contact4Component, Blogs4Component, Footer2Component], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home4Component, [{
    type: Component,
    args: [{ selector: "app-home-4", imports: [LoaderComponent, TopbarComponent, Hero4Component, About4Component, Service4Component, CaseStudy4Component, Testimonial4Component, Team4Component, Contact4Component, Blogs4Component, Footer2Component], template: '<app-loader className="preloader4" icon="assets/img/logo/preloader3.png" />\n<div class="homepage3-body tg-heading-subheading animation-style3">\n    <app-topbar headerClass="homepage3" btnClass="header-btn5" logo="assets/img/logo/logo4.png"\n        mobileHeaderClass="mobile-haeder3" mobileLogo="assets/img/logo/logo5.png" mobileSidebarClass="mobile-sidebar3"\n        [isAlert]="true" />\n    <app-hero-4 />\n    <app-about-4 />\n    <app-service-4 />\n    <app-case-study-4 />\n    <app-testimonial-4 />\n    <app-team-4 />\n    <app-contact-4 />\n    <app-blogs-4 />\n    <app-footer-2 btnClass="header-btn5" containerClass="footer3-section-area" logo="assets/img/logo/logo5.png"/>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home4Component, { className: "Home4Component", filePath: "src/app/views/demo/home-4/home-4.component.ts", lineNumber: 20 });
})();

// src/app/views/demo/home-single-1/components/about/about.component.ts
var AboutComponent = class _AboutComponent {
  static \u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], decls: 39, vars: 0, consts: [[1, "about1-section-area", "sp1"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "about-images-area"], ["data-aos", "zoom-out", "data-aos-duration", "1000", 1, "img1"], ["src", "assets/img/all-images/about-img1.png", "alt", ""], ["data-aos", "zoom-out", "data-aos-duration", "1100", 1, "img2"], ["src", "assets/img/all-images/about-img2.png", "alt", ""], ["data-aos", "zoom-out", "data-aos-duration", "1200", 1, "conter-area"], [1, "counter"], [1, "about-header-area", "heading2"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "space10"], ["data-aos", "fade-left", "data-aos-duration", "1100"], ["src", "assets/img/icons/check1.svg", "alt", ""], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/about", 1, "header-btn1"], [1, "fa-solid", "fa-arrow-right"]], template: function AboutComponent_Template(rf, ctx) {
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
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutComponent, [{
    type: Component,
    args: [{ selector: "app-about", imports: [RouterLink], template: `<div class="about1-section-area sp1">
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/views/demo/home-single-1/components/about/about.component.ts", lineNumber: 10 });
})();

// src/app/views/demo/home-single-1/components/data.ts
var serviceData = [
  {
    duration: 800,
    image: "assets/img/all-images/service-img1.png",
    id: 1,
    title: "Bright Spark Services",
    description: "Explore our range of services below & discover how you power your life"
  },
  {
    duration: 1e3,
    image: "assets/img/all-images/service-img2.png",
    id: 2,
    title: "Energy Ease Packages",
    description: "With cutting-edge technology & industry expertise, we empower"
  },
  {
    duration: 1200,
    image: "assets/img/all-images/service-img3.png",
    id: 3,
    title: "Electra Care Packages",
    description: "Our team of experts is committed to delivering high-quality services"
  }
];
var workData = [
  {
    id: 1,
    icon: "assets/img/icons/work1.svg",
    duration: 800,
    title: "Power Path Unveiling Our Process",
    image: "assets/img/all-images/work-img1.png",
    description: "Our process begins with a thorough assessment of energy needs and goals. Once we understand your requirements, we work closely with you to develop."
  },
  {
    id: 2,
    icon: "assets/img/icons/work2.svg",
    title: "Electro Flow Decoding Our Method",
    duration: 1e3,
    image: "assets/img/all-images/work-img1.png",
    description: "Our process begins with a thorough assessment of energy needs and goals. Once we understand your requirements, we work closely with you to develop."
  },
  {
    id: 3,
    icon: "assets/img/icons/work3.svg",
    title: "Energetic Engine Behind Scenes",
    image: "assets/img/all-images/work-img1.png",
    duration: 1200,
    description: "Our process begins with a thorough assessment of energy needs and goals. Once we understand your requirements, we work closely with you to develop."
  },
  {
    id: 4,
    icon: "assets/img/icons/work4.svg",
    title: "Watt Works Discover Operations",
    duration: 1400,
    image: "assets/img/all-images/work-img1.png",
    description: "Our process begins with a thorough assessment of energy needs and goals. Once we understand your requirements, we work closely with you to develop."
  }
];
var teamMembers4 = [
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
var faqData = [
  {
    question: "How do I sign up for your electricity services?",
    answer: "Whether you're wondering about our pricing plans, process installation , or sustainability initiatives."
  },
  {
    question: "What types of electricity plans do you offer?",
    answer: "Whether you're wondering about our pricing plans, process installation , or sustainability initiatives."
  },
  {
    question: "What are your billing and payment options?",
    answer: "Whether you're wondering about our pricing plans, process installation , or sustainability initiatives."
  },
  {
    question: "How can I track my energy usage with your services?",
    answer: "Whether you're wondering about our pricing plans, process installation , or sustainability initiatives."
  }
];
var blogs3 = [
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

// src/app/views/demo/home-single-1/components/blogs/blogs.component.ts
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
  blogs = blogs3;
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogsComponent, { className: "BlogsComponent", filePath: "src/app/views/demo/home-single-1/components/blogs/blogs.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-single-1/components/brands/brands.component.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrandsComponent, { className: "BrandsComponent", filePath: "src/app/views/demo/home-single-1/components/brands/brands.component.ts", lineNumber: 11 });
})();

// src/app/views/demo/home-single-1/components/contact/contact.component.ts
var ContactComponent = class _ContactComponent {
  static \u0275fac = function ContactComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], decls: 89, vars: 0, consts: [[1, "contact1-section-area", "sp1", 2, "background-image", "url(assets/img/all-images/contact-bg1.png)", "background-position", "center", "background-position", "center", "background-repeat", "no-repeat", "background-size", "cover"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "contact-header-area", "heading2"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "space48"], [1, "row"], [1, "col-lg-6", "col-md-6"], ["data-aos", "fade-left", "data-aos-duration", "1000", 1, "contact-auhtor-side"], [1, "icons-text"], [1, "icons"], [1, "fa-solid", "fa-phone"], [1, "text"], ["href", "tel:1234567890"], [1, "fa-solid", "fa-location-dot"], [1, "space48", "d-md-none"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "contact-auhtor-side"], [1, "fa-solid", "fa-envelope"], ["href", "mailto:serebangle@gmail.com "], [1, "fa-brands", "fa-linkedin-in"], ["href", "javascript:void(0)"], [1, "contact-submit-boxarea"], ["action", "https://api.web3forms.com/submit", "method", "POST"], ["type", "hidden", "name", "access_key", "value", "0cd32fff-eda2-4da3-be43-37d47fbb396b"], [1, "input-area"], ["type", "text", "placeholder", "Name", "required", ""], ["type", "number", "placeholder", "Phone", "required", ""], [1, "col-lg-12"], ["type", "email", "placeholder", "Email", "required", ""], ["placeholder", "Describe your inquiry", "cols", "30", "rows", "10", "required", ""], [1, "input-area1"], ["type", "checkbox", "required", ""], ["type", "submit", 1, "header-btn1"], [1, "fa-solid", "fa-arrow-right"]], template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Contact Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Illuminate Your Message Get in Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Have questions or ready to get started with our electricity services? Our team is here to help! Whether you're seeking.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "div", 8);
      \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13);
      \u0275\u0275element(17, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 15)(19, "p");
      \u0275\u0275text(20, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 16);
      \u0275\u0275text(22, "123 456 7890");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(23, "div", 8);
      \u0275\u0275elementStart(24, "div", 12)(25, "div", 13);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 15)(28, "p");
      \u0275\u0275text(29, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "a", 16);
      \u0275\u0275text(31, "8502 Preston Rd. Inglewoo");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(32, "div", 10);
      \u0275\u0275element(33, "div", 18);
      \u0275\u0275elementStart(34, "div", 19)(35, "div", 12)(36, "div", 13);
      \u0275\u0275element(37, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 15)(39, "p");
      \u0275\u0275text(40, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "a", 21);
      \u0275\u0275text(42, "serebangle@gmail.com ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(43, "div", 8);
      \u0275\u0275elementStart(44, "div", 12)(45, "div", 13);
      \u0275\u0275element(46, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 15)(48, "p");
      \u0275\u0275text(49, "Linkedin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "a", 23);
      \u0275\u0275text(51, "Fleexstudio");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(52, "div", 3)(53, "div", 24)(54, "h4");
      \u0275\u0275text(55, "Request A Quote");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "form", 25);
      \u0275\u0275element(57, "input", 26);
      \u0275\u0275elementStart(58, "div", 9)(59, "div", 3)(60, "div", 27)(61, "p");
      \u0275\u0275text(62, "Name (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "input", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 3)(65, "div", 27)(66, "p");
      \u0275\u0275text(67, "Number (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(68, "input", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 30)(70, "div", 27)(71, "p");
      \u0275\u0275text(72, "Email (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(73, "input", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 30)(75, "div", 27)(76, "p");
      \u0275\u0275text(77, "Additional Details (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "textarea", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 30)(80, "div", 33);
      \u0275\u0275element(81, "input", 34);
      \u0275\u0275elementStart(82, "p");
      \u0275\u0275text(83, "I agree with the site privacy policy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div", 30)(85, "div", 33)(86, "button", 35);
      \u0275\u0275text(87, "Submit Now ");
      \u0275\u0275element(88, "i", 36);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactComponent, [{
    type: Component,
    args: [{ selector: "app-contact", imports: [], template: `<div class="contact1-section-area sp1" style="background-image: url(assets/img/all-images/contact-bg1.png); background-position: center; background-position: center; background-repeat: no-repeat; background-size: cover;">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="contact-header-area heading2">
            <h5 data-aos="fade-left" data-aos-duration="800">Contact Us</h5>
            <h2 class="tg-element-title">Illuminate Your Message Get in Contact</h2>
            <p data-aos="fade-left" data-aos-duration="1000">Have questions or ready to get started with our electricity services? Our team is here to help! Whether you're seeking.</p>
            <div class="space48"></div>
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="contact-auhtor-side" data-aos="fade-left" data-aos-duration="1000"> 
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
                      <a href="tel:1234567890">8502 Preston Rd. Inglewoo</a>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="col-lg-6 col-md-6">
                <div class="space48 d-md-none"></div>
                <div class="contact-auhtor-side" data-aos="fade-left" data-aos-duration="1200">
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
            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="0cd32fff-eda2-4da3-be43-37d47fbb396b">
              <div class="row">
                <div class="col-lg-6">
                  <div class="input-area">
                    <p>Name (required)</p>
                    <input type="text" placeholder="Name" required>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-area">
                    <p>Number (required)</p>
                    <input type="number" placeholder="Phone" required>
                  </div>
                </div>
    
                <div class="col-lg-12">
                  <div class="input-area">
                    <p>Email (required)</p>
                    <input type="email" placeholder="Email" required>
                  </div>
                </div>
    
                <div class="col-lg-12">
                  <div class="input-area">
                    <p>Additional Details  (Optional)</p>
                    <textarea placeholder="Describe your inquiry" cols="30" rows="10" required></textarea>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="input-area1">
                    <input type="checkbox" required>
                    <p>I agree with the site privacy policy</p>
                  </div>
                </div>
    
                <div class="col-lg-12">
                  <div class="input-area1">
                    <button type="submit" class="header-btn1">Submit Now <i class="fa-solid fa-arrow-right"></i></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src/app/views/demo/home-single-1/components/contact/contact.component.ts", lineNumber: 9 });
})();

// src/app/views/demo/home-single-1/components/faqs/faqs.component.ts
function FaqsComponent_For_20_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Whether you're wondering about our pricing plans, process ");
    \u0275\u0275element(1, "br");
    \u0275\u0275text(2, " installation , or sustainability initiatives. ");
  }
}
function FaqsComponent_For_20_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function FaqsComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "h2", 16)(2, "button", 17);
    \u0275\u0275text(3, " How do I sign up for your electricity services? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 18)(5, "div", 19);
    \u0275\u0275template(6, FaqsComponent_For_20_ng_template_6_Template, 3, 0, "ng-template");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, FaqsComponent_For_20_div_7_Template, 1, 0, "div", 20);
  }
  if (rf & 2) {
    const \u0275$index_35_r1 = ctx.$index;
    const \u0275$count_35_r2 = ctx.$count;
    \u0275\u0275property("collapsed", \u0275$index_35_r1 === 0 ? false : true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", !(\u0275$index_35_r1 === \u0275$count_35_r2 - 1));
  }
}
var FaqsComponent = class _FaqsComponent {
  faqData = faqData;
  static \u0275fac = function FaqsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FaqsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqsComponent, selectors: [["app-faqs"]], decls: 21, vars: 1, consts: [[1, "faq1-section-area", "sp1"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-5"], [1, "faq-header-area", "heading2"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/pages/faq", 1, "header-btn1"], [1, "fa-solid", "fa-arrow-right"], [1, "col-lg-1"], [1, "col-lg-6"], [1, "faq-auhtoir-area1"], ["id", "accordionFlushExample", "ngbAccordion", "", 1, "accordion", "accordion-flush", 3, "closeOthers"], ["ngbAccordionItem", "", "data-aos", "fade-left", "data-aos-duration", "800", 1, "accordion-item", 3, "collapsed"], ["ngbAccordionHeader", "", 1, "accordion-header"], ["ngbAccordionButton", "", "type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseOne", "aria-expanded", "false", "aria-controls", "flush-collapseOne", 1, "accordion-button"], ["id", "flush-collapseOne", "data-bs-parent", "#accordionFlushExample", "ngbAccordionCollapse", ""], ["ngbAccordionBody", "", 1, "accordion-body"], ["class", "space20", 4, "ngIf"], [1, "space20"]], template: function FaqsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "FAQ\u2019S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Frequently Best Asked Question?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "That's why we've compiled a list of frequently asked questions to help make the process as smooth as possible for you.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "a", 9);
      \u0275\u0275text(13, "Have Any Questions ");
      \u0275\u0275element(14, "i", 10);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(15, "div", 11);
      \u0275\u0275elementStart(16, "div", 12)(17, "div", 13)(18, "div", 14);
      \u0275\u0275repeaterCreate(19, FaqsComponent_For_20_Template, 8, 2, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("closeOthers", true);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.faqData);
    }
  }, dependencies: [NgbAccordionModule, NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionBody, NgbAccordionCollapse, CommonModule, NgIf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaqsComponent, [{
    type: Component,
    args: [{ selector: "app-faqs", imports: [NgbAccordionModule, CommonModule, RouterLink], template: `<div class="faq1-section-area sp1">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5">
                <div class="faq-header-area heading2">
                    <h5 data-aos="fade-left" data-aos-duration="800">FAQ\u2019S</h5>
                    <h2 class="tg-element-title">Frequently Best Asked Question?</h2>
                    <p data-aos="fade-left" data-aos-duration="1000">That's why we've compiled a list of frequently
                        asked questions to help make the process as smooth as possible for you.</p>
                    <div class="btn-area" data-aos="fade-left" data-aos-duration="1200">
                        <a routerLink="/pages/faq" class="header-btn1">Have Any Questions <i
                                class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-6">
                <div class="faq-auhtoir-area1">
                    <div class="accordion accordion-flush" id="accordionFlushExample" ngbAccordion
                        [closeOthers]="true">
                        @for (faq of faqData; track $index;let first=$first;let id=$index;let last=$last) {
                        <div ngbAccordionItem [collapsed]="first ? false : true" class="accordion-item"
                            data-aos="fade-left" data-aos-duration="800">                                 
                            <h2 class="accordion-header" ngbAccordionHeader>
                                <button ngbAccordionButton class="accordion-button" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    How do I sign up for your electricity services?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" 
                                data-bs-parent="#accordionFlushExample" ngbAccordionCollapse>
                                <div class="accordion-body" ngbAccordionBody>
                                    <ng-template>
                                        Whether you're wondering about our pricing
                                        plans, process
                                        <br> installation , or sustainability initiatives.
                                    </ng-template>
                                </div>
                            </div>
                        </div>
                        <div *ngIf="!last" class="space20"></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqsComponent, { className: "FaqsComponent", filePath: "src/app/views/demo/home-single-1/components/faqs/faqs.component.ts", lineNumber: 13 });
})();

// src/app/views/demo/home-single-1/components/hero/hero.component.ts
var _c05 = () => [1, 2, 3, 4, 5];
function HeroComponent_ng_container_1_ng_template_1_li_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275elementEnd();
  }
}
function HeroComponent_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "img", 4);
    \u0275\u0275elementStart(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "h5");
    \u0275\u0275text(7, "Current Electricity Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h1", 9);
    \u0275\u0275text(9, "Power for Seamless Electricity Solutions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 10);
    \u0275\u0275text(11, " Whether you're a homeowner, business owner, or community leader, we're here to light up your life with sustainable energy solutions that. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 11)(13, "a", 12);
    \u0275\u0275text(14, "Get A Free Estimate ");
    \u0275\u0275element(15, "i", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 14);
    \u0275\u0275text(17, "Discover More ");
    \u0275\u0275element(18, "i", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 15)(20, "div", 16);
    \u0275\u0275element(21, "img", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 18)(23, "ul");
    \u0275\u0275template(24, HeroComponent_ng_container_1_ng_template_1_li_24_Template, 2, 0, "li", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p")(26, "span");
    \u0275\u0275text(27, "4k");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, "Happy Client");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(29, "div", 7)(30, "div", 19)(31, "a", 20);
    \u0275\u0275element(32, "img", 21)(33, "img", 22);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const slide_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", slide_r1.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(2, _c05));
  }
}
function HeroComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HeroComponent_ng_container_1_ng_template_1_Template, 34, 3, "ng-template", 2);
    \u0275\u0275elementContainerEnd();
  }
}
var HeroComponent = class _HeroComponent {
  slides = [
    { img: "assets/img/bg/header-img4.png" },
    { img: "assets/img/bg/header-img2.png" },
    { img: "assets/img/bg/header-img3.png" }
  ];
  carouselOptions = {
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    mouseDrag: false,
    items: 1,
    autoplay: true,
    navText: ["<i class='fa-solid fa-angle-up'></i>", "<i class='fa-solid fa-angle-down'></i>"],
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 2e3,
    autoplayTimeout: 4e3,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1
      },
      1e3: {
        items: 1
      }
    }
  };
  static \u0275fac = function HeroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["app-hero"]], decls: 2, vars: 2, consts: [[1, "slider-header-carousel", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "hero1-section-area"], ["alt", "", 1, "header-img1", 3, "src"], [1, "container"], [1, "row"], [1, "col-lg-6"], [1, "hero-heading-area", "heading1"], [1, "main-heading"], [1, "pera"], [1, "btn-area"], ["routerLink", "/contact", 1, "header-btn1"], [1, "fa-solid", "fa-arrow-right"], ["routerLink", "/contact", 1, "header-btn2"], [1, "header-bottom-images"], [1, "img1"], ["src", "assets/img/all-images/header-bottom.png", "alt", ""], [1, "content"], [1, "circle-arrow"], ["href", "javascript:void(0)"], ["src", "assets/img/elements/circle1.png", "alt", "", 1, "keyframe5", "circle1"], ["src", "assets/img/icons/arrow1.svg", "alt", "", 1, "arrow1"], [1, "fa-solid", "fa-star"]], template: function HeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "owl-carousel-o", 0);
      \u0275\u0275template(1, HeroComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("options", ctx.carouselOptions);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.slides);
    }
  }, dependencies: [NgForOf, CarouselModule, CarouselComponent, CarouselSlideDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroComponent, [{
    type: Component,
    args: [{ selector: "app-hero", imports: [NgForOf, CarouselModule], template: `<owl-carousel-o class="slider-header-carousel" [options]="carouselOptions">
    <ng-container *ngFor="let slide of slides">
      <ng-template carouselSlide>
        <div class="hero1-section-area">
          <img [src]="slide.img" alt="" class="header-img1">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="hero-heading-area heading1">
                  <h5>Current Electricity Services</h5>
                  <h1 class="main-heading">Power for Seamless Electricity Solutions</h1>
                  <p class="pera">
                    Whether you're a homeowner, business owner, or community leader,
                    we're here to light up your life with sustainable energy solutions that.
                  </p>
                  <div class="btn-area">
                    <a routerLink="/contact" class="header-btn1">Get A Free Estimate <i class="fa-solid fa-arrow-right"></i></a>
                    <a routerLink="/contact" class="header-btn2">Discover More <i class="fa-solid fa-arrow-right"></i></a>
                  </div>
                  <div class="header-bottom-images">
                    <div class="img1">
                      <img src="assets/img/all-images/header-bottom.png" alt="">
                    </div>
                    <div class="content">
                      <ul>
                        <li *ngFor="let star of [1,2,3,4,5]"><i class="fa-solid fa-star"></i></li>
                      </ul>
                      <p><span>4k</span>Happy Client</p>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="col-lg-6">
                <div class="circle-arrow">
                  <a href="javascript:void(0)">
                    <img src="assets/img/elements/circle1.png" alt="" class="keyframe5 circle1">
                    <img src="assets/img/icons/arrow1.svg" alt="" class="arrow1">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ng-template>
    </ng-container>
  </owl-carousel-o>
  ` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "src/app/views/demo/home-single-1/components/hero/hero.component.ts", lineNumber: 11 });
})();

// src/app/views/demo/home-single-1/components/pricing-plans/pricing-plans.component.ts
function PricingPlansComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "app-pricing-card", 20);
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
var PricingPlansComponent = class _PricingPlansComponent {
  isMonthly = true;
  pricingPlans = pricingPlans;
  togglePlan() {
    this.isMonthly = !this.isMonthly;
  }
  static \u0275fac = function PricingPlansComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PricingPlansComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingPlansComponent, selectors: [["app-pricing-plans"]], decls: 32, vars: 4, consts: [[1, "compare-palns-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "compare-plan-header", "text-center", "heading2"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "col-12", "text-center"], [1, "plan-toggle-wrap"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "toggle-inner"], ["id", "ce-toggle", "type", "checkbox", 3, "change", "checked"], [1, "custom-toggle"], [1, "t-month"], [1, "t-year"], [1, "col-lg-12"], [1, "tab-content"], ["id", "monthly"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [3, "plan", "isMonthly"]], template: function PricingPlansComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Pricing Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Watt Wise Pricing Best Solutions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "That's why we offer a range of pricing plans designed to suit ");
      \u0275\u0275element(11, "br");
      \u0275\u0275text(12, " individual needs & budget.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 2)(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "input", 11);
      \u0275\u0275listener("change", function PricingPlansComponent_Template_input_change_17_listener() {
        return ctx.togglePlan();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "span", 12);
      \u0275\u0275elementStart(19, "div", 13)(20, "h4");
      \u0275\u0275text(21, "Monthly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 14)(23, "h4");
      \u0275\u0275text(24, "Yearly ");
      \u0275\u0275elementStart(25, "span");
      \u0275\u0275text(26, "(20% Save)");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(27, "div", 15)(28, "div", 16)(29, "div", 17)(30, "div", 2);
      \u0275\u0275template(31, PricingPlansComponent_div_31_Template, 2, 4, "div", 18);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275classMap(ctx.isMonthly ? "active" : "");
      \u0275\u0275advance(2);
      \u0275\u0275property("checked", ctx.isMonthly);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.pricingPlans);
    }
  }, dependencies: [CommonModule, NgForOf, PricingCardComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingPlansComponent, [{
    type: Component,
    args: [{ selector: "app-pricing-plans", imports: [CommonModule, PricingCardComponent], template: `<div class="compare-palns-area sp2">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="compare-plan-header text-center heading2">
                    <h5 data-aos="fade-up" data-aos-duration="800">Pricing Plan</h5>
                    <h2 class="tg-element-title">Watt Wise Pricing Best Solutions</h2>
                    <p data-aos="fade-up" data-aos-duration="1000">That's why we offer a range of pricing plans designed
                        to suit <br> individual needs & budget.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <div class="plan-toggle-wrap" [class]="isMonthly ? 'active' : ''">
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
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingPlansComponent, { className: "PricingPlansComponent", filePath: "src/app/views/demo/home-single-1/components/pricing-plans/pricing-plans.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-single-1/components/services/services.component.ts
function ServicesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275element(3, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 14);
    \u0275\u0275text(8, "Bright Spark Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Explore our range of services below & discover how you power your life");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 15);
    \u0275\u0275text(12, "Learn More ");
    \u0275\u0275element(13, "i", 16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-aos-duration", service_r1.duration);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", service_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("0", service_r1.id, "");
  }
}
var ServicesComponent = class _ServicesComponent {
  services = serviceData;
  static \u0275fac = function ServicesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServicesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesComponent, selectors: [["app-services"]], decls: 13, vars: 1, consts: [[1, "service1-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-6", "m-auto"], [1, "service-header-area", "heading2", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], ["class", "col-lg-4 col-md-6", "data-aos", "zoom-out", 4, "ngFor", "ngForOf"], ["data-aos", "zoom-out", 1, "col-lg-4", "col-md-6"], [1, "service-auhtor-boxarea"], [1, "img1"], ["alt", "", 3, "src"], [1, "content-area"], ["routerLink", "/service-single"], ["routerLink", "/service-single", 1, "readmore"], [1, "fa-solid", "fa-arrow-right"]], template: function ServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Our Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Electricity Service Offerings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "From residential households to commercial enterprises, we provide reliable, efficient, and sustainable energy solutions.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 2);
      \u0275\u0275template(12, ServicesComponent_div_12_Template, 14, 3, "div", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.services);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesComponent, [{
    type: Component,
    args: [{ selector: "app-services", imports: [CommonModule, RouterLink], template: '<div class="service1-section-area sp2">\n    <div class="container">\n      <div class="row">\n        <div class="col-lg-6 m-auto">\n          <div class="service-header-area heading2 text-center">\n            <h5 data-aos="fade-up" data-aos-duration="800">Our Service</h5>\n            <h2 class="tg-element-title">Electricity Service Offerings</h2>\n            <p data-aos="fade-up" data-aos-duration="1000">From residential households to commercial enterprises, we provide reliable, efficient, and sustainable energy solutions.</p>\n          </div>\n        </div>\n      </div>\n  \n      <div class="row">\n        <div *ngFor="let service of services" class="col-lg-4 col-md-6" data-aos="zoom-out" [attr.data-aos-duration]="service.duration">\n          <div class="service-auhtor-boxarea">\n            <div class="img1">\n              <img [src]="service.image" alt="">\n            </div>\n            <div class="content-area">\n              <h3>0{{service.id}}</h3>\n              <a routerLink="/service-single">Bright Spark Services</a>\n              <p>Explore our range of services below & discover how you power your life</p>\n              <a routerLink="/service-single" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>\n            </div>\n          </div>\n        </div>\n  \n      </div>\n    </div>\n  </div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesComponent, { className: "ServicesComponent", filePath: "src/app/views/demo/home-single-1/components/services/services.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-single-1/components/team/team.component.ts
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
  teamMembers = teamMembers4;
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamComponent, { className: "TeamComponent", filePath: "src/app/views/demo/home-single-1/components/team/team.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-single-1/components/testimonial/testimonial.component.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TestimonialComponent, { className: "TestimonialComponent", filePath: "src/app/views/demo/home-single-1/components/testimonial/testimonial.component.ts", lineNumber: 13 });
})();

// src/app/views/demo/home-single-1/components/work/work.component.ts
function WorkComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275element(2, "img", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "a", 33);
    \u0275\u0275text(5, "Power Path Unveiling Our Process");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Our process begins with a thorough assessment of energy needs and goals. Once we understand your requirements, we work closely with you to develop.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 34)(9, "a", 35);
    \u0275\u0275text(10, "Book A Consulation ");
    \u0275\u0275element(11, "i", 36);
    \u0275\u0275elementEnd()()()();
  }
}
function WorkComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 37);
    \u0275\u0275element(2, "img", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "a", 33);
    \u0275\u0275text(5, "Electro Flow Decoding Our Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Our process begins with a thorough assessment of energy needs and goals. Once we understand your requirements, we work closely with you to develop. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 34)(9, "a", 35);
    \u0275\u0275text(10, "Book A Consulation ");
    \u0275\u0275element(11, "i", 36);
    \u0275\u0275elementEnd()()()();
  }
}
function WorkComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 37);
    \u0275\u0275element(2, "img", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "a", 33);
    \u0275\u0275text(5, "Energetic Engine Behind Scenes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Our process begins with a thorough assessment of energy needs and goals. Once we understand your requirements, we work closely with you to develop.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 34)(9, "a", 35);
    \u0275\u0275text(10, "Book A Consulation ");
    \u0275\u0275element(11, "i", 36);
    \u0275\u0275elementEnd()()()();
  }
}
function WorkComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 37);
    \u0275\u0275element(2, "img", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "a", 33);
    \u0275\u0275text(5, "Watt Works Discover Operations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Our process begins with a thorough assessment of energy needs and goals. Once we understand your requirements, we work closely with you to develop.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 34)(9, "a", 35);
    \u0275\u0275text(10, "Book A Consulation ");
    \u0275\u0275element(11, "i", 36);
    \u0275\u0275elementEnd()()()();
  }
}
var WorkComponent = class _WorkComponent {
  active = "tab0";
  tabs = workData;
  static \u0275fac = function WorkComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkComponent, selectors: [["app-work"]], decls: 45, vars: 1, consts: [["nav", "ngbNav"], [1, "work1-section-area", "sp1"], [1, "container"], [1, "row"], [1, "col-lg-4"], [1, "work-header-area", "heading2"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "tabs-list"], ["ngbNav", "", "id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills"], ["ngbNavItem", "", "role", "presentation", "data-aos", "fade-left", "data-aos-duration", "800", 1, "nav-item"], ["ngbNavLink", "", "id", "pills-work1-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-work1", "type", "button", "role", "tab", "aria-controls", "pills-work1", "aria-selected", "true", 1, "nav-link"], [1, "workicons"], ["src", "assets/img/icons/work1.svg", "alt", ""], [1, "worktext"], ["ngbNavContent", ""], ["ngbNavItem", "", "role", "presentation", "data-aos", "fade-left", "data-aos-duration", "1000", 1, "nav-item"], ["ngbNavLink", "", "id", "pills-work2-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-work2", "type", "button", "role", "tab", "aria-controls", "pills-work2", "aria-selected", "false", 1, "nav-link"], ["src", "assets/img/icons/work2.svg", "alt", ""], ["ngbNavItem", "", "role", "presentation", "data-aos", "fade-left", "data-aos-duration", "1200", 1, "nav-item"], ["ngbNavLink", "", "id", "pills-work3-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-work3", "type", "button", "role", "tab", "aria-controls", "pills-work3", "aria-selected", "false", 1, "nav-link"], ["src", "assets/img/icons/work3.svg", "alt", ""], ["ngbNavItem", "", "role", "presentation", "data-aos", "fade-left", "data-aos-duration", "1400", 1, "nav-item"], ["ngbNavLink", "", "id", "pills-work4-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-work4", "type", "button", "role", "tab", "aria-controls", "pills-work4", "aria-selected", "false", 1, "nav-link"], ["src", "assets/img/icons/work4.svg", "alt", ""], [1, "col-lg-8"], [1, "works-author-area"], ["id", "pills-tabContent", 1, "tab-content", 3, "ngbNavOutlet"], [1, "works-side-area"], [1, "images", "reveal"], ["src", "assets/img/all-images/work-img1.png", "alt", ""], [1, "content-area"], ["routerLink", "/case-study-single", 1, "power", "tg-element-title"], [1, "btn-area"], ["routerLink", "/case-study-single", 1, "header-btn1"], [1, "fa-solid", "fa-arrow-right"], [1, "images"]], template: function WorkComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h5", 6);
      \u0275\u0275text(6, "How it work");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 7);
      \u0275\u0275text(8, "How to Work Our Electricity Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 8);
      \u0275\u0275text(10, "Throughout the process, transparency & communication, keeping you informed.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9)(12, "ul", 10, 0)(14, "li", 11)(15, "button", 12)(16, "span", 13);
      \u0275\u0275element(17, "img", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 15);
      \u0275\u0275text(19, "Power Path Unveiling Our Process");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(20, WorkComponent_ng_template_20_Template, 12, 0, "ng-template", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "li", 17)(22, "button", 18)(23, "span", 13);
      \u0275\u0275element(24, "img", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 15);
      \u0275\u0275text(26, "Electro Flow Decoding Our Method");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(27, WorkComponent_ng_template_27_Template, 12, 0, "ng-template", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "li", 20)(29, "button", 21)(30, "span", 13);
      \u0275\u0275element(31, "img", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 15);
      \u0275\u0275text(33, "Energetic Engine Behind Scenes");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(34, WorkComponent_ng_template_34_Template, 12, 0, "ng-template", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "li", 23)(36, "button", 24)(37, "span", 13);
      \u0275\u0275element(38, "img", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 15);
      \u0275\u0275text(40, "Watt Works Discover Operations");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(41, WorkComponent_ng_template_41_Template, 12, 0, "ng-template", 16);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(42, "div", 26)(43, "div", 27);
      \u0275\u0275element(44, "div", 28);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const nav_r1 = \u0275\u0275reference(13);
      \u0275\u0275advance(44);
      \u0275\u0275property("ngbNavOutlet", nav_r1);
    }
  }, dependencies: [CommonModule, NgbNavModule, NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLinkButton, NgbNavLinkBase, NgbNavOutlet, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkComponent, [{
    type: Component,
    args: [{ selector: "app-work", imports: [CommonModule, NgbNavModule, RouterLink], template: '<div class="work1-section-area sp1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-4">\n                <div class="work-header-area heading2">\n                    <h5 data-aos="fade-left" data-aos-duration="800">How it work</h5>\n                    <h2 class="tg-element-title">How to Work Our Electricity Service</h2>\n                    <p data-aos="fade-left" data-aos-duration="1000">Throughout the process, transparency &\n                        communication, keeping you informed.</p>\n\n                    <div class="tabs-list">\n                        <ul ngbNav #nav="ngbNav" class="nav nav-pills" id="pills-tab" role="tablist">\n                            <li class="nav-item" ngbNavItem role="presentation" data-aos="fade-left"\n                                data-aos-duration="800">\n                                <button class="nav-link" ngbNavLink id="pills-work1-tab" data-bs-toggle="pill"\n                                    data-bs-target="#pills-work1" type="button" role="tab" aria-controls="pills-work1"\n                                    aria-selected="true">\n                                    <span class="workicons"><img src="assets/img/icons/work1.svg" alt=""></span>\n                                    <span class="worktext">Power Path Unveiling Our Process</span>\n                                </button>\n                                <ng-template ngbNavContent>\n                                    <div class="works-side-area">\n                                        <div class="images reveal">\n                                            <img src="assets/img/all-images/work-img1.png" alt="">\n                                        </div>\n                                        <div class="content-area">\n                                            <a routerLink="/case-study-single" class="power tg-element-title">Power Path\n                                                Unveiling Our Process</a>\n                                            <p>Our process begins with a thorough assessment of energy needs and goals.\n                                                Once we understand your requirements, we work closely with you to\n                                                develop.</p>\n                                            <div class="btn-area">\n                                                <a routerLink="/case-study-single" class="header-btn1">Book A Consulation <i\n                                                        class="fa-solid fa-arrow-right"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </ng-template>\n                            </li>\n                            <li class="nav-item" ngbNavItem role="presentation" data-aos="fade-left"\n                                data-aos-duration="1000">\n                                <button class="nav-link" ngbNavLink id="pills-work2-tab" data-bs-toggle="pill"\n                                    data-bs-target="#pills-work2" type="button" role="tab" aria-controls="pills-work2"\n                                    aria-selected="false">\n                                    <span class="workicons"><img src="assets/img/icons/work2.svg" alt=""></span>\n                                    <span class="worktext">Electro Flow Decoding Our Method</span>\n                                </button>\n                                <ng-template ngbNavContent>\n                                    <div class="works-side-area">\n                                        <div class="images">\n                                            <img src="assets/img/all-images/work-img1.png" alt="">\n                                        </div>\n                                        <div class="content-area">\n                                            <a routerLink="/case-study-single" class="power tg-element-title">Electro Flow\n                                                Decoding Our\n                                                Method</a>\n                                            <p>Our process begins with a thorough assessment of energy needs and\n                                                goals. Once we\n                                                understand your requirements, we work closely with you to develop.\n                                            </p>\n                                            <div class="btn-area">\n                                                <a routerLink="/case-study-single" class="header-btn1">Book A Consulation <i\n                                                        class="fa-solid fa-arrow-right"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </ng-template>\n                            </li>\n                            <li class="nav-item" ngbNavItem role="presentation" data-aos="fade-left"\n                                data-aos-duration="1200">\n                                <button class="nav-link" ngbNavLink id="pills-work3-tab" data-bs-toggle="pill"\n                                    data-bs-target="#pills-work3" type="button" role="tab" aria-controls="pills-work3"\n                                    aria-selected="false">\n                                    <span class="workicons"><img src="assets/img/icons/work3.svg" alt=""></span>\n                                    <span class="worktext">Energetic Engine Behind Scenes</span>\n                                </button>\n                                <ng-template ngbNavContent>\n                                    <div class="works-side-area">\n                                        <div class="images">\n                                            <img src="assets/img/all-images/work-img1.png" alt="">\n                                        </div>\n                                        <div class="content-area">\n                                            <a routerLink="/case-study-single" class="power tg-element-title">Energetic Engine\n                                                Behind\n                                                Scenes</a>\n                                            <p>Our process begins with a thorough assessment of energy needs and goals.\n                                                Once we\n                                                understand your requirements, we work closely with you to develop.</p>\n                                            <div class="btn-area">\n                                                <a routerLink="/case-study-single" class="header-btn1">Book A Consulation <i\n                                                        class="fa-solid fa-arrow-right"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </ng-template>\n                            </li>\n                            <li class="nav-item" ngbNavItem role="presentation" data-aos="fade-left"\n                                data-aos-duration="1400">\n                                <button class="nav-link" ngbNavLink id="pills-work4-tab" data-bs-toggle="pill"\n                                    data-bs-target="#pills-work4" type="button" role="tab" aria-controls="pills-work4"\n                                    aria-selected="false">\n                                    <span class="workicons"><img src="assets/img/icons/work4.svg" alt=""></span>\n                                    <span class="worktext">Watt Works Discover Operations</span>\n                                </button>\n                                <ng-template ngbNavContent>\n                                    <div class="works-side-area">\n                                        <div class="images">\n                                            <img src="assets/img/all-images/work-img1.png" alt="">\n                                        </div>\n                                        <div class="content-area">\n                                            <a routerLink="/case-study-single" class="power tg-element-title">Watt Works\n                                                Discover\n                                                Operations</a>\n                                            <p>Our process begins with a thorough assessment of energy needs and goals.\n                                                Once we\n                                                understand your requirements, we work closely with you to develop.</p>\n                                            <div class="btn-area">\n                                                <a routerLink="/case-study-single" class="header-btn1">Book A Consulation <i\n                                                        class="fa-solid fa-arrow-right"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </ng-template>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n\n            <div class="col-lg-8">\n                <div class="works-author-area">\n                    <div class="tab-content" id="pills-tabContent" [ngbNavOutlet]="nav">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkComponent, { className: "WorkComponent", filePath: "src/app/views/demo/home-single-1/components/work/work.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-single-1/components/cta/cta.component.ts
var CtaComponent = class _CtaComponent {
  static \u0275fac = function CtaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CtaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CtaComponent, selectors: [["app-cta"]], decls: 19, vars: 0, consts: [[1, "cta1-section-area", "sp4"], [1, "container"], [1, "row"], [1, "col-lg-5"], [1, "cta-header", "heading2"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "800"], ["action", "#", "data-aos", "fade-up", "data-aos-duration", "1000"], ["type", "email", "placeholder", "Email Address"], ["type", "submit", 1, "header-btn1"], [1, "fa-solid", "fa-arrow-right"], [1, "col-lg-1"], [1, "cta-images"], [1, "img1"], ["src", "assets/img/all-images/cta-img1.png", "alt", ""]], template: function CtaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Ready to Power up your Savings and Reliability?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Feel free to customize this paragraph to better reflect the specific services offered by your IT solution & the unique ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "form", 7);
      \u0275\u0275element(10, "input", 8);
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275text(12, "Subscribe Now ");
      \u0275\u0275element(13, "i", 10);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(14, "div", 11);
      \u0275\u0275elementStart(15, "div", 3)(16, "div", 12)(17, "div", 13);
      \u0275\u0275element(18, "img", 14);
      \u0275\u0275elementEnd()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CtaComponent, [{
    type: Component,
    args: [{ selector: "app-cta", imports: [], template: '<div class="cta1-section-area sp4">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-5">\n                <div class="cta-header heading2">\n                    <h2 class="tg-element-title">Ready to Power up your Savings and Reliability?</h2>\n                    <p data-aos="fade-up" data-aos-duration="800">Feel free to customize this paragraph to better\n                        reflect the specific services offered by your IT solution & the unique </p>\n                    <form action="#" data-aos="fade-up" data-aos-duration="1000">\n                        <input type="email" placeholder="Email Address">\n                        <button type="submit" class="header-btn1">Subscribe Now <i\n                                class="fa-solid fa-arrow-right"></i></button>\n                    </form>\n                </div>\n            </div>\n            <div class="col-lg-1"></div>\n            <div class="col-lg-5">\n                <div class="cta-images">\n                    <div class="img1">\n                        <img src="assets/img/all-images/cta-img1.png" alt="">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CtaComponent, { className: "CtaComponent", filePath: "src/app/views/demo/home-single-1/components/cta/cta.component.ts", lineNumber: 9 });
})();

// src/app/core/services/scroll.service.ts
var ScrollService = class _ScrollService {
  router;
  activeSection = "";
  sections = [];
  constructor(router) {
    this.router = router;
    this.listenForFragmentScroll();
    this.listenForManualScroll();
  }
  setSections(sectionIds) {
    this.sections = sectionIds;
  }
  scrollTo(sectionId) {
    this.activeSection = sectionId;
    this.router.navigate([], { fragment: sectionId });
  }
  listenForFragmentScroll() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const fragment = window.location.hash.replace("#", "");
      if (fragment) {
        this.activeSection = fragment;
        setTimeout(() => {
          document.getElementById(fragment)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 100);
      }
    });
  }
  listenForManualScroll() {
    window.addEventListener("scroll", () => {
      let currentSection = this.activeSection;
      for (const sectionId of this.sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
          }
        }
      }
      this.activeSection = currentSection;
    });
  }
  static \u0275fac = function ScrollService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollService)(\u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScrollService, factory: _ScrollService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }], null);
})();

// src/app/components/mobile-nav-item-2/mobile-nav-item-2.component.ts
var _c06 = (a0) => ({ "has-sub hash-has-sub": a0 });
var _c1 = (a0) => ({ "submenu-opened": a0 });
var _c2 = (a0) => ({ "open-sub": a0 });
var _c3 = (a0) => ({ "display": a0 });
function MobileNavItem2Component_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275listener("click", function MobileNavItem2Component_span_3_Template_span_click_0_listener($event) {
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
function MobileNavItem2Component_ul_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-mobile-nav-item-2", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const subItem_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("item", subItem_r3);
  }
}
function MobileNavItem2Component_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 5);
    \u0275\u0275template(1, MobileNavItem2Component_ul_4_ng_container_1_Template, 2, 1, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c2, ctx_r1.item.isOpen))("ngStyle", \u0275\u0275pureFunction1(5, _c3, ctx_r1.item.isOpen ? "block" : "none"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.item.subMenu);
  }
}
var MobileNavItem2Component = class _MobileNavItem2Component {
  item;
  scroll = inject(ScrollService);
  toggleSubMenu(item, event) {
    if (event)
      event.stopPropagation();
    item.isOpen = !item.isOpen;
  }
  static \u0275fac = function MobileNavItem2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MobileNavItem2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MobileNavItem2Component, selectors: [["app-mobile-nav-item-2"]], inputs: { item: "item" }, decls: 5, vars: 9, consts: [[3, "ngClass"], [3, "click", "routerLink"], ["class", "submenu-button", 3, "ngClass", "click", 4, "ngIf"], ["class", "sub-menu", 3, "ngClass", "ngStyle", 4, "ngIf"], [1, "submenu-button", 3, "click", "ngClass"], [1, "sub-menu", 3, "ngClass", "ngStyle"], [4, "ngFor", "ngForOf"], [3, "item"]], template: function MobileNavItem2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "li", 0)(1, "a", 1);
      \u0275\u0275listener("click", function MobileNavItem2Component_Template_a_click_1_listener() {
        return ctx.toggleSubMenu(ctx.item);
      });
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, MobileNavItem2Component_span_3_Template, 2, 3, "span", 2)(4, MobileNavItem2Component_ul_4_Template, 2, 7, "ul", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c06, ctx.item.isOpen));
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
  }, dependencies: [_MobileNavItem2Component, CommonModule, NgClass, NgForOf, NgIf, NgStyle, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileNavItem2Component, [{
    type: Component,
    args: [{ selector: "app-mobile-nav-item-2", imports: [CommonModule, RouterLink], template: `<li [ngClass]="{ 'has-sub hash-has-sub': item.isOpen }">
    <a (click)="toggleSubMenu(item)" [routerLink]="item.link" [class.hash-nav]="item.link === '#'">
        {{ item.title }}
    </a>

    <span *ngIf="item.subMenu" class="submenu-button" [ngClass]="{ 'submenu-opened': item.isOpen }"
        (click)="toggleSubMenu(item, $event)">
        <em></em>
    </span>

    <ul *ngIf="item.subMenu && item.isOpen" class="sub-menu" [ngClass]="{ 'open-sub': item.isOpen }"
        [ngStyle]="{ 'display': item.isOpen ? 'block' : 'none' }">
        <ng-container *ngFor="let subItem of item.subMenu;">
            <app-mobile-nav-item-2 [item]="subItem"></app-mobile-nav-item-2>
        </ng-container>
    </ul>
</li>` }]
  }], null, { item: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MobileNavItem2Component, { className: "MobileNavItem2Component", filePath: "src/app/components/mobile-nav-item-2/mobile-nav-item-2.component.ts", lineNumber: 17 });
})();

// src/app/views/demo/home-single-1/components/single-header-1/single-header-1.component.ts
var _c07 = (a0) => ({ "mobile-menu-active": a0 });
function SingleHeader1Component_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 46);
    \u0275\u0275listener("click", function SingleHeader1Component_li_12_Template_li_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scroll.scrollTo(item_r2));
    });
    \u0275\u0275elementStart(1, "a", 47)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.scroll.activeSection === item_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.toSentenceCase(item_r2));
  }
}
function SingleHeader1Component_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-mobile-nav-item-2", 48);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("item", item_r4);
  }
}
var SingleHeader1Component = class _SingleHeader1Component {
  isMenuOpen = false;
  menuItems = ["about", "service", "works", "testimonials", "team", "blogs"];
  scroll = inject(ScrollService);
  ngOnInit() {
    this.scroll.setSections(this.menuItems);
  }
  toSentenceCase(text) {
    if (!text)
      return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  navItems = [
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
            { "title": "Home Four", "link": "/home-4" },
            { "title": "Home Five", "link": "/home-5" }
          ]
        },
        {
          title: "Landing page",
          subMenu: [
            { "title": "Home One", "link": "/home-single-1" },
            { "title": "Home Two", "link": "/home-single-2" },
            { "title": "Home Three", "link": "/home-single-3" },
            { "title": "Home Four", "link": "/home-single-4" },
            { "title": "Home Five", "link": "/home-single-5" }
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
      "link": "/services"
    },
    {
      "title": "Works",
      "link": "/works"
    },
    {
      "title": "Testimonials",
      "link": "/testimonials"
    },
    {
      "title": "Team",
      "link": "/team"
    },
    {
      "title": "Blogs",
      "link": "/blogs"
    }
  ];
  static \u0275fac = function SingleHeader1Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SingleHeader1Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SingleHeader1Component, selectors: [["app-single-header-1"]], decls: 83, vars: 5, consts: [["id", "header", "stickyScroll", "", 1, "header-area", "homepage1", "header", "header-sticky", "d-none", "d-lg-block"], [1, "container"], [1, "row"], [1, "col-lg-12"], ["id", "navbar-example2", 1, "navbar"], [1, "header-elements"], [1, "site-logo"], ["routerLink", "/home-single-1"], ["src", "assets/img/logo/logo1.png", "alt", ""], [1, "main-menu"], ["class", "nav-item cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "btn-area"], ["routerLink", "/contact-us", 1, "header-btn1"], [1, "fa-solid", "fa-arrow-right"], [1, "mobile-header", "mobile-haeder1", "d-block", "d-lg-none"], [1, "container-fluid"], [1, "col-12"], [1, "mobile-header-elements"], [1, "mobile-logo"], [1, "mobile-nav-icon", "dots-menu", 3, "click"], [1, "fa-solid", "fa-bars"], [1, "mobile-sidebar", "mobile-sidebar1", 3, "ngClass"], [1, "logosicon-area"], [1, "logos"], [1, "menu-close", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "mobile-nav", "mobile-nav1"], [1, "mobile-nav-list", "nav-list1"], [4, "ngFor", "ngForOf"], [1, "allmobilesection"], [1, "single-footer"], [1, "footer1-contact-info"], [1, "contact-info-single"], [1, "contact-info-icon"], [1, "fa-solid", "fa-phone-volume"], [1, "contact-info-text"], ["href", "tel:+3(924)4596512"], [1, "fa-solid", "fa-envelope"], ["href", "mailto:info@example.com"], [1, "fa-solid", "fa-location-dot"], [1, "social-links-mobile-menu"], ["href", "javascript:void(0)"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-linkedin-in"], [1, "fa-brands", "fa-youtube"], [1, "nav-item", "cursor-pointer", 3, "click"], [1, "nav-link"], [3, "item"]], template: function SingleHeader1Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "nav", 4)(6, "div", 5)(7, "div", 6)(8, "a", 7);
      \u0275\u0275element(9, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 9)(11, "ul");
      \u0275\u0275template(12, SingleHeader1Component_li_12_Template, 4, 3, "li", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 11)(14, "a", 12);
      \u0275\u0275text(15, "Contact Us ");
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "div", 17)(21, "div", 18)(22, "a", 7);
      \u0275\u0275element(23, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 19);
      \u0275\u0275listener("click", function SingleHeader1Component_Template_div_click_24_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275element(25, "i", 20);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(26, "div", 21)(27, "div", 22)(28, "div", 23);
      \u0275\u0275element(29, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 24);
      \u0275\u0275listener("click", function SingleHeader1Component_Template_div_click_30_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275element(31, "i", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 26)(33, "ul", 27);
      \u0275\u0275template(34, SingleHeader1Component_ng_container_34_Template, 2, 1, "ng-container", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 29)(36, "a", 12);
      \u0275\u0275text(37, "Get Started ");
      \u0275\u0275element(38, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 30)(40, "h3");
      \u0275\u0275text(41, "Contact Info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 31)(43, "div", 32)(44, "div", 33);
      \u0275\u0275element(45, "i", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 35)(47, "a", 36);
      \u0275\u0275text(48, "+3(924)4596512");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 32)(50, "div", 33);
      \u0275\u0275element(51, "i", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 35)(53, "a", 38);
      \u0275\u0275text(54, "info@example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 30)(56, "h3");
      \u0275\u0275text(57, "Our Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 32)(59, "div", 33);
      \u0275\u0275element(60, "i", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 35)(62, "a", 38);
      \u0275\u0275text(63, "55 East Birchwood Ave.Brooklyn, ");
      \u0275\u0275element(64, "br");
      \u0275\u0275text(65, " New York 11201,United States");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div", 30)(67, "h3");
      \u0275\u0275text(68, "Social Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 40)(70, "ul")(71, "li")(72, "a", 41);
      \u0275\u0275element(73, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li")(75, "a", 41);
      \u0275\u0275element(76, "i", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "li")(78, "a", 41);
      \u0275\u0275element(79, "i", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li")(81, "a", 41);
      \u0275\u0275element(82, "i", 45);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.menuItems);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c07, ctx.isMenuOpen));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.navItems);
    }
  }, dependencies: [RouterLink, StickyScrollDirective, CommonModule, NgClass, NgForOf, MobileNavItem2Component], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SingleHeader1Component, [{
    type: Component,
    args: [{ selector: "app-single-header-1", imports: [RouterLink, StickyScrollDirective, CommonModule, RouterLink, MobileNavItem2Component], template: `<header>
    <div class="header-area homepage1 header header-sticky d-none d-lg-block " id="header" stickyScroll>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <nav id="navbar-example2" class="navbar">
                        <div class="header-elements">
                            <div class="site-logo">
                                <a routerLink="/home-single-1"><img src="assets/img/logo/logo1.png" alt=""></a>
                            </div>
                            <div class="main-menu">
                                <ul>
                                    <li *ngFor="let item of menuItems" (click)="scroll.scrollTo(item)"
                                        class="nav-item cursor-pointer"><a
                                            [class.active]="scroll.activeSection === item"
                                            class="nav-link"><span>{{toSentenceCase(item)}}</span></a></li>
                                </ul>
                            </div>
                            <div class="btn-area">
                                <a routerLink="/contact-us" class="header-btn1">Contact Us <i
                                        class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>

<div class="mobile-header mobile-haeder1 d-block d-lg-none">
    <div class="container-fluid">
        <div class="col-12">
            <div class="mobile-header-elements">
                <div class="mobile-logo">
                    <a routerLink="/home-single-1"><img src="assets/img/logo/logo1.png" alt=""></a>
                </div>
                <div class="mobile-nav-icon dots-menu" (click)="toggleMenu()">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="mobile-sidebar mobile-sidebar1" [ngClass]="{ 'mobile-menu-active': isMenuOpen }">
    <div class="logosicon-area">
        <div class="logos">
            <img src="assets/img/logo/logo1.png" alt="">
        </div>
        <div class="menu-close" (click)="closeMenu()">
            <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
    <div class="mobile-nav mobile-nav1">
        <ul class="mobile-nav-list nav-list1">
            <ng-container *ngFor="let item of navItems;">
                <app-mobile-nav-item-2 [item]="item"></app-mobile-nav-item-2>
            </ng-container>
        </ul>

        <div class="allmobilesection">
            <a routerLink="/contact-us" class="header-btn1">Get Started <i class="fa-solid fa-arrow-right"></i></a>
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
                                <a href="mailto:info@example.com">55 East Birchwood Ave.Brooklyn, <br> New York
                                    11201,United States</a>
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SingleHeader1Component, { className: "SingleHeader1Component", filePath: "src/app/views/demo/home-single-1/components/single-header-1/single-header-1.component.ts", lineNumber: 14 });
})();

// src/app/views/demo/home-single-1/home-single-1.component.ts
var HomeSingle1Component = class _HomeSingle1Component {
  static \u0275fac = function HomeSingle1Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeSingle1Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeSingle1Component, selectors: [["app-home-single-1"]], decls: 15, vars: 0, consts: [[1, "homepage1-body", "tg-heading-subheading", "animation-style3"], ["id", "about"], ["id", "service"], ["id", "works"], ["id", "testimonials"], ["id", "team"], ["id", "faq"], ["id", "blogs"], ["containerClass", "footer1-section-area", "logo", "assets/img/logo/logo1.png"]], template: function HomeSingle1Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-single-header-1")(2, "app-hero")(3, "app-about", 1)(4, "app-services", 2)(5, "app-work", 3)(6, "app-testimonial", 4)(7, "app-team", 5)(8, "app-faqs", 6)(9, "app-contact")(10, "app-pricing-plans")(11, "app-brands")(12, "app-blogs", 7)(13, "app-cta")(14, "app-footer", 8);
      \u0275\u0275elementEnd();
    }
  }, dependencies: [SingleHeader1Component, CtaComponent, FooterComponent, HeroComponent, AboutComponent, ServicesComponent, WorkComponent, TestimonialComponent, TeamComponent, FaqsComponent, ContactComponent, PricingPlansComponent, BrandsComponent, BlogsComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeSingle1Component, [{
    type: Component,
    args: [{ selector: "app-home-single-1", imports: [SingleHeader1Component, CtaComponent, FooterComponent, HeroComponent, AboutComponent, ServicesComponent, WorkComponent, TestimonialComponent, TeamComponent, FaqsComponent, ContactComponent, PricingPlansComponent, BrandsComponent, BlogsComponent], template: '<div class="homepage1-body tg-heading-subheading animation-style3">\n    <app-single-header-1 />\n    <app-hero />\n    <app-about id="about"/>\n    <app-services id="service"/>\n    <app-work id="works"/>\n    <app-testimonial id="testimonials"/>\n    <app-team id="team"/>\n    <app-faqs id="faq"/>\n    <app-contact />\n    <app-pricing-plans />\n    <app-brands />\n    <app-blogs id="blogs"/>\n    <app-cta />\n    <app-footer containerClass="footer1-section-area" logo="assets/img/logo/logo1.png" />\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeSingle1Component, { className: "HomeSingle1Component", filePath: "src/app/views/demo/home-single-1/home-single-1.component.ts", lineNumber: 23 });
})();

// src/app/views/demo/home-single-2/components/single-header-2/single-header-2.component.ts
var _c08 = (a0) => ({ "mobile-menu-active": a0 });
function SingleHeader2Component_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 48);
    \u0275\u0275listener("click", function SingleHeader2Component_li_12_Template_li_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scroll.scrollTo(item_r2));
    });
    \u0275\u0275elementStart(1, "a", 49)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.scroll.activeSection === item_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.toSentenceCase(item_r2));
  }
}
function SingleHeader2Component_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-mobile-nav-item-2", 50);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("item", item_r4);
  }
}
var SingleHeader2Component = class _SingleHeader2Component {
  isMenuOpen = false;
  menuItems = ["about", "case study", "team", "testimonials", "FAQ", "blogs"];
  scroll = inject(ScrollService);
  ngOnInit() {
    this.scroll.setSections(this.menuItems);
  }
  toSentenceCase(text) {
    if (!text)
      return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  navItems = [
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
            { "title": "Home Four", "link": "/home-4" },
            { "title": "Home Five", "link": "/home-5" }
          ]
        },
        {
          title: "Landing page",
          subMenu: [
            { "title": "Home One", "link": "/home-single-1" },
            { "title": "Home Two", "link": "/home-single-2" },
            { "title": "Home Three", "link": "/home-single-3" },
            { "title": "Home Four", "link": "/home-single-4" },
            { "title": "Home Five", "link": "/home-single-5" }
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
      "link": "/services"
    },
    {
      "title": "Works",
      "link": "/works"
    },
    {
      "title": "Testimonials",
      "link": "/testimonials"
    },
    {
      "title": "Team",
      "link": "/team"
    },
    {
      "title": "Blogs",
      "link": "/blogs"
    }
  ];
  static \u0275fac = function SingleHeader2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SingleHeader2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SingleHeader2Component, selectors: [["app-single-header-2"]], decls: 83, vars: 5, consts: [["id", "header", "stickyScroll", "", 1, "header-area", "homepage4", "header", "header-sticky", "d-none", "d-lg-block"], [1, "container"], [1, "row"], [1, "col-lg-12"], ["id", "navbar-example2", 1, "navbar"], [1, "header-elements"], [1, "site-logo"], ["routerLink", "/home-single-2"], ["src", "assets/img/logo/logo6.png", "alt", ""], [1, "main-menu"], ["class", "nav-item cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "btn-area"], ["routerLink", "/contact-us", 1, "header-btn7"], [1, "fa-solid", "fa-arrow-right"], [1, "mobile-header", "mobile-haeder4", "d-block", "d-lg-none"], [1, "container-fluid"], [1, "col-12"], [1, "mobile-header-elements"], [1, "mobile-logo"], ["routerLink", "/home-single-3"], ["src", "assets/img/logo/logo7.png", "alt", ""], [1, "mobile-nav-icon", "dots-menu", 3, "click"], [1, "fa-solid", "fa-bars"], [1, "mobile-sidebar", "mobile-sidebar4", 3, "ngClass"], [1, "logosicon-area"], [1, "logos"], [1, "menu-close", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "mobile-nav", "mobile-nav1"], [1, "mobile-nav-list", "nav-list1"], [4, "ngFor", "ngForOf"], [1, "allmobilesection"], [1, "single-footer"], [1, "footer1-contact-info"], [1, "contact-info-single"], [1, "contact-info-icon"], [1, "fa-solid", "fa-phone-volume"], [1, "contact-info-text"], ["href", "tel:+3(924)4596512"], [1, "fa-solid", "fa-envelope"], ["href", "mailto:info@example.com"], [1, "fa-solid", "fa-location-dot"], [1, "social-links-mobile-menu"], ["href", "javascript:void(0)"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-linkedin-in"], [1, "fa-brands", "fa-youtube"], [1, "nav-item", "cursor-pointer", 3, "click"], [1, "nav-link"], [3, "item"]], template: function SingleHeader2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "nav", 4)(6, "div", 5)(7, "div", 6)(8, "a", 7);
      \u0275\u0275element(9, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 9)(11, "ul");
      \u0275\u0275template(12, SingleHeader2Component_li_12_Template, 4, 3, "li", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 11)(14, "a", 12);
      \u0275\u0275text(15, "Contact Us ");
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "div", 17)(21, "div", 18)(22, "a", 19);
      \u0275\u0275element(23, "img", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 21);
      \u0275\u0275listener("click", function SingleHeader2Component_Template_div_click_24_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275element(25, "i", 22);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(26, "div", 23)(27, "div", 24)(28, "div", 25);
      \u0275\u0275element(29, "img", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 26);
      \u0275\u0275listener("click", function SingleHeader2Component_Template_div_click_30_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275element(31, "i", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 28)(33, "ul", 29);
      \u0275\u0275template(34, SingleHeader2Component_ng_container_34_Template, 2, 1, "ng-container", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 31)(36, "a", 12);
      \u0275\u0275text(37, "Get Started ");
      \u0275\u0275element(38, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 32)(40, "h3");
      \u0275\u0275text(41, "Contact Info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 33)(43, "div", 34)(44, "div", 35);
      \u0275\u0275element(45, "i", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 37)(47, "a", 38);
      \u0275\u0275text(48, "+3(924)4596512");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 34)(50, "div", 35);
      \u0275\u0275element(51, "i", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 37)(53, "a", 40);
      \u0275\u0275text(54, "info@example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 32)(56, "h3");
      \u0275\u0275text(57, "Our Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 34)(59, "div", 35);
      \u0275\u0275element(60, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 37)(62, "a", 40);
      \u0275\u0275text(63, "55 East Birchwood Ave.Brooklyn, ");
      \u0275\u0275element(64, "br");
      \u0275\u0275text(65, " New York 11201,United States");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div", 32)(67, "h3");
      \u0275\u0275text(68, "Social Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 42)(70, "ul")(71, "li")(72, "a", 43);
      \u0275\u0275element(73, "i", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li")(75, "a", 43);
      \u0275\u0275element(76, "i", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "li")(78, "a", 43);
      \u0275\u0275element(79, "i", 46);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li")(81, "a", 43);
      \u0275\u0275element(82, "i", 47);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.menuItems);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c08, ctx.isMenuOpen));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.navItems);
    }
  }, dependencies: [MobileNavItem2Component, CommonModule, NgClass, NgForOf, StickyScrollDirective, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SingleHeader2Component, [{
    type: Component,
    args: [{ selector: "app-single-header-2", imports: [MobileNavItem2Component, CommonModule, StickyScrollDirective, RouterLink], template: `<header>
    <div class="header-area homepage4 header header-sticky d-none d-lg-block " id="header" stickyScroll>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <nav id="navbar-example2" class="navbar">
                        <div class="header-elements">
                            <div class="site-logo">
                                <a routerLink="/home-single-2"><img src="assets/img/logo/logo6.png" alt=""></a>
                            </div>
                            <div class="main-menu">
                                <ul>
                                    <li *ngFor="let item of menuItems" (click)="scroll.scrollTo(item)"
                                        class="nav-item cursor-pointer"><a
                                            [class.active]="scroll.activeSection === item"
                                            class="nav-link"><span>{{toSentenceCase(item)}}</span></a></li>
                                </ul>
                            </div>
                            <div class="btn-area">
                                <a routerLink="/contact-us" class="header-btn7">Contact Us <i
                                        class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>

<div class="mobile-header mobile-haeder4 d-block d-lg-none">
    <div class="container-fluid">
        <div class="col-12">
            <div class="mobile-header-elements">
                <div class="mobile-logo">
                    <a routerLink="/home-single-3"><img src="assets/img/logo/logo7.png" alt=""></a>
                </div>
                <div class="mobile-nav-icon dots-menu" (click)="toggleMenu()">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="mobile-sidebar mobile-sidebar4" [ngClass]="{ 'mobile-menu-active': isMenuOpen }">
    <div class="logosicon-area">
        <div class="logos">
            <img src="assets/img/logo/logo7.png" alt="">
        </div>
        <div class="menu-close" (click)="closeMenu()">
            <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
    <div class="mobile-nav mobile-nav1">
        <ul class="mobile-nav-list nav-list1">
            <ng-container *ngFor="let item of navItems;">
                <app-mobile-nav-item-2 [item]="item"></app-mobile-nav-item-2>
            </ng-container>
        </ul>

        <div class="allmobilesection">
            <a routerLink="/contact-us" class="header-btn7">Get Started <i class="fa-solid fa-arrow-right"></i></a>
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
                                <a href="mailto:info@example.com">55 East Birchwood Ave.Brooklyn, <br> New York
                                    11201,United States</a>
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SingleHeader2Component, { className: "SingleHeader2Component", filePath: "src/app/views/demo/home-single-2/components/single-header-2/single-header-2.component.ts", lineNumber: 14 });
})();

// src/app/views/demo/home-single-2/components/hero-2/hero-2.component.ts
var Hero2Component2 = class _Hero2Component {
  static \u0275fac = function Hero2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Hero2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Hero2Component, selectors: [["app-hero-2"]], decls: 69, vars: 0, consts: [[1, "hero4-section-area"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "hero4-header-textarea"], [1, "col-lg-9", "m-auto"], [1, "header-text", "text-center", "heading8"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/contact-us", 1, "header-btn7"], [1, "fa-solid", "fa-arrow-right"], ["routerLink", "/contact-us", 1, "header-btn8"], [1, "row", "align-items-center"], [1, "col-lg-2"], ["data-aos", "fade-left", "data-aos-duration", "1000", 1, "header-left-side"], ["src", "assets/img/all-images/header-bottom2.png", "alt", "", 1, "bottom2"], [1, "d-flex", "align-items-center", "gap-1", "flex-wrap", "justify-content-lg-start", "justify-content-center"], [1, "fa-solid", "fa-star"], ["src", "assets/img/icons/arrow2.svg", "alt", "", 1, "arrow2"], [1, "percent-electri"], [1, "counter"], [1, "d-lg-block", "d-none"], [1, "col-lg-1"], ["data-aos", "zoom-in", "data-aos-duration", "1000", 1, "col-lg-6"], [1, "header-images"], ["src", "assets/img/all-images/header-img6.png", "alt", "", 1, "header-img6"], ["src", "assets/img/elements/elements1.png", "alt", "", 1, "elements1"], [1, "col-lg-3"], ["data-aos", "fade-right", "data-aos-duration", "1000", 1, "images-text-area"], [1, "content-area"], [1, "icons"], ["src", "assets/img/icons/bizli.svg", "alt", ""], [1, "pera"], [1, "img"], ["src", "assets/img/icons/arrow3.png", "alt", ""], [1, "pera2"]], template: function Hero2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 2)(6, "div", 5)(7, "div", 6)(8, "h5", 7);
      \u0275\u0275text(9, "Current Electricity Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h1", 8);
      \u0275\u0275text(11, "Current Innovation Leading The Way in Electricity Services ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 9)(13, "a", 10);
      \u0275\u0275text(14, "Get a Free Estimate ");
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 12);
      \u0275\u0275text(17, "Discover More ");
      \u0275\u0275element(18, "i", 11);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(19, "div", 13)(20, "div", 14)(21, "div", 15);
      \u0275\u0275element(22, "img", 16);
      \u0275\u0275elementStart(23, "p")(24, "span");
      \u0275\u0275text(25, "4K");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, "Happy Client");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "ul", 17)(28, "li");
      \u0275\u0275element(29, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "li");
      \u0275\u0275element(31, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "li");
      \u0275\u0275element(33, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "li");
      \u0275\u0275element(35, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "li");
      \u0275\u0275element(37, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(38, "img", 19);
      \u0275\u0275elementStart(39, "div", 20)(40, "h3")(41, "span", 21);
      \u0275\u0275text(42, "89");
      \u0275\u0275elementEnd();
      \u0275\u0275text(43, "%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p");
      \u0275\u0275text(45, "Electricity Client ");
      \u0275\u0275element(46, "br", 22);
      \u0275\u0275text(47, " Services Success ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(48, "div", 23);
      \u0275\u0275elementStart(49, "div", 24)(50, "div", 25);
      \u0275\u0275element(51, "img", 26)(52, "img", 27)(53, "img", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 28)(55, "div", 29)(56, "div", 30)(57, "div", 31);
      \u0275\u0275element(58, "img", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 33)(60, "p");
      \u0275\u0275text(61, "Powered by ");
      \u0275\u0275element(62, "br", 22);
      \u0275\u0275text(63, " Electricity Services ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 34);
      \u0275\u0275element(65, "img", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 36)(67, "p");
      \u0275\u0275text(68, "With cutting-edge technology and industry expertise, we empower");
      \u0275\u0275elementEnd()()()()()()()()()();
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Hero2Component2, [{
    type: Component,
    args: [{ selector: "app-hero-2", imports: [RouterLink], template: '<div class="hero4-section-area">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-12">\n                <div class="hero4-header-textarea">\n                    <div class="row">\n                        <div class="col-lg-9 m-auto">\n                            <div class="header-text text-center heading8">\n                                <h5 data-aos="fade-up" data-aos-duration="800">Current Electricity Services</h5>\n                                <h1 class="tg-element-title">Current Innovation Leading The Way in Electricity Services\n                                </h1>\n                                <div class="btn-area" data-aos="fade-up" data-aos-duration="1200">\n                                    <a routerLink="/contact-us" class="header-btn7">Get a Free Estimate <i\n                                            class="fa-solid fa-arrow-right"></i></a>\n                                    <a routerLink="/contact-us" class="header-btn8">Discover More <i\n                                            class="fa-solid fa-arrow-right"></i></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="row align-items-center">\n                        <div class="col-lg-2">\n                            <div class="header-left-side" data-aos="fade-left" data-aos-duration="1000">\n                                <img src="assets/img/all-images/header-bottom2.png" alt="" class="bottom2">\n                                <p><span>4K</span>Happy Client</p>\n                                <ul class="d-flex align-items-center gap-1 flex-wrap justify-content-lg-start justify-content-center">\n                                    <li><i class="fa-solid fa-star"></i></li>\n                                    <li><i class="fa-solid fa-star"></i></li>\n                                    <li><i class="fa-solid fa-star"></i></li>\n                                    <li><i class="fa-solid fa-star"></i></li>\n                                    <li><i class="fa-solid fa-star"></i></li>\n                                </ul>\n                                <img src="assets/img/icons/arrow2.svg" alt="" class="arrow2">\n\n                                <div class="percent-electri">\n                                    <h3><span class="counter">89</span>%</h3>\n                                    <p>Electricity Client <br class="d-lg-block d-none"> Services Success </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-lg-1"></div>\n                        <div class="col-lg-6" data-aos="zoom-in" data-aos-duration="1000">\n                            <div class="header-images">\n                                <img src="assets/img/all-images/header-img6.png" alt="" class="header-img6">\n                                <img src="assets/img/elements/elements1.png" alt="" class="elements1">\n                                <img src="assets/img/icons/arrow2.svg" alt="" class="arrow2">\n                            </div>\n                        </div>\n                        <div class="col-lg-3">\n                            <div class="images-text-area" data-aos="fade-right" data-aos-duration="1000">\n                                <div class="content-area">\n                                    <div class="icons">\n                                        <img src="assets/img/icons/bizli.svg" alt="">\n                                    </div>\n                                    <div class="pera">\n                                        <p>Powered by <br class="d-lg-block d-none"> Electricity Services </p>\n                                    </div>\n                                </div>\n                                <div class="img">\n                                    <img src="assets/img/icons/arrow3.png" alt="">\n                                </div>\n                                <div class="pera2">\n                                    <p>With cutting-edge technology and industry expertise, we empower</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Hero2Component2, { className: "Hero2Component", filePath: "src/app/views/demo/home-single-2/components/hero-2/hero-2.component.ts", lineNumber: 10 });
})();

// src/app/views/demo/home-single-2/components/about-2/about-2.component.ts
function About2Component_div_12_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "h2")(3, "count-up", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "+ ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const counter_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-aos", "zoom-in")("data-aos-duration", counter_r1.duration);
    \u0275\u0275advance(3);
    \u0275\u0275property("countUp", counter_r1.count);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(counter_r1.count);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(counter_r1.label);
  }
}
var About2Component2 = class _About2Component {
  counterData = [
    { count: 450, duration: 1e3, label: "Active Clients" },
    { count: 990, duration: 1200, label: "Electricity Services" },
    { count: 45, duration: 1e3, label: "Team Advisors" },
    { count: 12, duration: 1200, label: "Years of Experienced" }
  ];
  static \u0275fac = function About2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _About2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _About2Component, selectors: [["app-about-2"]], decls: 33, vars: 2, consts: [[1, "about4-section-area", "sp1"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "about-header-area", "heading9"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "row"], ["class", "col-lg-6 col-md-6", 4, "ngFor", "ngForOf"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/about", 1, "header-btn7"], [1, "fa-solid", "fa-arrow-right"], [1, "about-images-area"], ["data-aos", "zoom-in", "data-aos-duration", "1000", 1, "img1"], ["src", "assets/img/all-images/about-img7.png", "alt", ""], ["src", "assets/img/elements/elements2.png", "alt", "", 1, "elements2"], ["data-aos", "zoom-in", "data-aos-duration", "1100", 1, "img2"], ["src", "assets/img/all-images/about-img8.png", "alt", ""], ["data-aos", "zoom-in", "data-aos-duration", "1200", 1, "content-experiance"], [3, "countUp"], [1, "col-lg-6", "col-md-6"], [1, "counter-box"]], template: function About2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "About Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Empowering Communities with Sustainable Energy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Our team of experienced professionals is driven by a shared vision of creating a brighter, cleaner future through innovative technology and unparalleled service.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275template(12, About2Component_div_12_Template2, 8, 5, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 10)(14, "a", 11);
      \u0275\u0275text(15, "About Us");
      \u0275\u0275element(16, "i", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 3)(18, "div", 13)(19, "div", 14);
      \u0275\u0275element(20, "img", 15)(21, "img", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 17);
      \u0275\u0275element(23, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 19)(25, "h3");
      \u0275\u0275text(26, "Our Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "h2")(28, "count-up", 20);
      \u0275\u0275text(29, "12");
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, "+ ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p");
      \u0275\u0275text(32, "Years of Experienced");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.counterData);
      \u0275\u0275advance(16);
      \u0275\u0275property("countUp", 12);
    }
  }, dependencies: [CountUpModule, CountUpDirective, CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(About2Component2, [{
    type: Component,
    args: [{ selector: "app-about-2", imports: [CountUpModule, CommonModule, RouterLink], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="about4-section-area sp1">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="about-header-area heading9">
                    <h5 data-aos="fade-left" data-aos-duration="800">About Us</h5>
                    <h2 class="tg-element-title">Empowering Communities with Sustainable Energy</h2>
                    <p data-aos="fade-left" data-aos-duration="1000">Our team of experienced professionals is driven by
                        a shared vision of creating a brighter, cleaner future through innovative technology and
                        unparalleled service.</p>
                    <div class="row">
                        <div class="col-lg-6 col-md-6" *ngFor="let counter of counterData; let i = index"
                            [attr.data-aos]="'zoom-in'" [attr.data-aos-duration]="counter.duration">
                            <div class="counter-box">
                                <h2>
                                    <count-up [countUp]="counter.count">{{counter.count}}</count-up>+
                                </h2>
                                <p>{{ counter.label }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="btn-area" data-aos="fade-left" data-aos-duration="1200">
                        <a routerLink="/about" class="header-btn7">About Us<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="about-images-area">
                    <div class="img1" data-aos="zoom-in" data-aos-duration="1000">
                        <img src="assets/img/all-images/about-img7.png" alt="">
                        <img src="assets/img/elements/elements2.png" alt="" class="elements2">
                    </div>
                    <div class="img2" data-aos="zoom-in" data-aos-duration="1100">
                        <img src="assets/img/all-images/about-img8.png" alt="">
                    </div>
                    <div class="content-experiance" data-aos="zoom-in" data-aos-duration="1200">
                        <h3>Our Company</h3>
                        <h2>
                            <count-up [countUp]="12">12</count-up>+
                        </h2>
                        <p>Years of Experienced</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(About2Component2, { className: "About2Component", filePath: "src/app/views/demo/home-single-2/components/about-2/about-2.component.ts", lineNumber: 13 });
})();

// src/app/views/demo/home-single-2/components/our-mission/our-mission.component.ts
function OurMissionComponent_ng_template_21_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23);
    \u0275\u0275element(3, "img", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 22)(5, "div", 25)(6, "h3", 7);
    \u0275\u0275text(7, "Empowering a Sustainable Future Electricity Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 26);
    \u0275\u0275text(9, "Through cutting-edge technology, renewable energy solutions, and unwavering dedication, we aim to empower communities, businesses, and individuals alike to embrace cleaner,");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 27);
    \u0275\u0275text(11, "With every connection we make and every service we provide, we are driven by our passion for sustainability and our determination .");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 28)(13, "a", 29);
    \u0275\u0275text(14, "Contact Us");
    \u0275\u0275element(15, "i", 30);
    \u0275\u0275elementEnd()()()()();
  }
}
function OurMissionComponent_ng_template_25_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 31);
    \u0275\u0275element(3, "img", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 22)(5, "div", 25)(6, "h3");
    \u0275\u0275text(7, "Empowering a Sustainable Future Electricity Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Through cutting-edge technology, renewable energy solutions, and unwavering dedication, we aim to empower communities, businesses, and individuals alike to embrace cleaner,");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "With every connection we make and every service we provide, we are driven by our passion for sustainability and our determination .");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 32)(13, "a", 29);
    \u0275\u0275text(14, "Contact Us");
    \u0275\u0275element(15, "i", 30);
    \u0275\u0275elementEnd()()()()();
  }
}
function OurMissionComponent_ng_template_29_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 31);
    \u0275\u0275element(3, "img", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 22)(5, "div", 25)(6, "h3");
    \u0275\u0275text(7, "Empowering a Sustainable Future Electricity Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Through cutting-edge technology, renewable energy solutions, and unwavering dedication, we aim to empower communities, businesses, and individuals alike to embrace cleaner,");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "With every connection we make and every service we provide, we are driven by our passion for sustainability and our determination .");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 32)(13, "a", 29);
    \u0275\u0275text(14, "Contact Us");
    \u0275\u0275element(15, "i", 30);
    \u0275\u0275elementEnd()()()()();
  }
}
var OurMissionComponent2 = class _OurMissionComponent {
  activeTab = 1;
  tabItems = [
    {
      title: "Our Mission",
      img: "assets/img/all-images/mission-img1.png",
      heading: "Empowering a Sustainable Future Electricity Services",
      paragraphs: [
        "Through cutting-edge technology, renewable energy solutions, and unwavering dedication, we aim to empower communities, businesses, and individuals alike to embrace cleaner,",
        "With every connection we make and every service we provide, we are driven by our passion for sustainability and our determination ."
      ]
    },
    {
      title: "Our Vision",
      img: "assets/img/all-images/mission-img1.png",
      heading: "Empowering a Sustainable Future Electricity Services",
      paragraphs: [
        "Through cutting-edge technology, renewable energy solutions, and unwavering dedication, we aim to empower communities, businesses, and individuals alike to embrace cleaner,",
        "With every connection we make and every service we provide, we are driven by our passion for sustainability and our determination ."
      ]
    },
    {
      title: "Our Golds",
      img: "assets/img/all-images/mission-img1.png",
      heading: "Empowering a Sustainable Future Electricity Services",
      paragraphs: [
        "Through cutting-edge technology, renewable energy solutions, and unwavering dedication, we aim to empower communities, businesses, and individuals alike to embrace cleaner,",
        "With every connection we make and every service we provide, we are driven by our passion for sustainability and our determination ."
      ]
    }
  ];
  static \u0275fac = function OurMissionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OurMissionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OurMissionComponent, selectors: [["app-our-mission"]], decls: 31, vars: 5, consts: [["nav", "ngbNav"], [1, "mission-section-area", "sp1"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "mission-header-area", "heading9", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], [1, "col-lg-12"], [1, "tabs-auhtor-area"], ["ngbNav", "", "id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", 3, "activeIdChange", "activeId"], ["role", "presentation", "data-aos", "zoom-in", "data-aos-duration", "800", 1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", "id", "pills-mission1-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-mission1", "type", "button", "role", "tab", "aria-controls", "pills-mission1", "aria-selected", "true", 1, "nav-link"], ["ngbNavContent", ""], ["role", "presentation", "data-aos", "zoom-in", "data-aos-duration", "1000", 1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", "id", "pills-mission2-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-mission2", "type", "button", "role", "tab", "aria-controls", "pills-mission2", "aria-selected", "false", 1, "nav-link"], ["role", "presentation", "data-aos", "zoom-in", "data-aos-duration", "1200", 1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", "id", "pills-mission3-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-mission3", "type", "button", "role", "tab", "aria-controls", "pills-mission3", "aria-selected", "false", 1, "nav-link"], [1, "tab-content", 3, "ngbNavOutlet"], [1, "row", "align-items-center"], [1, "col-lg-6"], ["data-aos", "zoom-in", "data-aos-duration", "1000", 1, "mission-img"], ["src", "assets/img/all-images/mission-img1.png", "alt", ""], [1, "mission-content-area", "heading10"], ["data-aos", "fade-left", "data-aos-duration", "900"], ["data-aos", "fade-left", "data-aos-duration", "1000"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/contact-us", 1, "header-btn7"], [1, "fa-solid", "fa-arrow-right"], [1, "mission-img"], [1, "btn-area"]], template: function OurMissionComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h5", 6);
      \u0275\u0275text(6, "Our Mission");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 7);
      \u0275\u0275text(8, "Our Bold Mission in Electricity Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 8);
      \u0275\u0275text(10, " We are committed to providing innovative electricity services that not only meet the needs of ");
      \u0275\u0275element(11, "br", 9);
      \u0275\u0275text(12, " today but also safeguard the environment for generations to come");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 3)(14, "div", 10)(15, "div", 11)(16, "ul", 12, 0);
      \u0275\u0275twoWayListener("activeIdChange", function OurMissionComponent_Template_ul_activeIdChange_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.activeTab, $event) || (ctx.activeTab = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(18, "li", 13)(19, "button", 14);
      \u0275\u0275text(20, " Our Mission ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, OurMissionComponent_ng_template_21_Template2, 16, 0, "ng-template", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "li", 16)(23, "button", 17);
      \u0275\u0275text(24, " Our Vision ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, OurMissionComponent_ng_template_25_Template2, 16, 0, "ng-template", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "li", 18)(27, "button", 19);
      \u0275\u0275text(28, " Our Golds ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, OurMissionComponent_ng_template_29_Template2, 16, 0, "ng-template", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(30, "div", 20);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const nav_r2 = \u0275\u0275reference(17);
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("activeId", ctx.activeTab);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngbNavItem", 1);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngbNavItem", 2);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngbNavItem", 3);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngbNavOutlet", nav_r2);
    }
  }, dependencies: [NgbNavModule, NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLinkButton, NgbNavLinkBase, NgbNavOutlet, CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OurMissionComponent2, [{
    type: Component,
    args: [{ selector: "app-our-mission", imports: [NgbNavModule, CommonModule, RouterLink], template: '<div class="mission-section-area sp1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8 m-auto">\n                <div class="mission-header-area heading9 text-center">\n                    <h5 data-aos="fade-up" data-aos-duration="800">Our Mission</h5>\n                    <h2 class="tg-element-title">Our Bold Mission in Electricity Services</h2>\n                    <p data-aos="fade-up" data-aos-duration="1000"> We are committed to providing innovative electricity\n                        services that not only meet the needs of <br class="d-lg-block d-none"> today but also safeguard\n                        the environment for generations to come</p>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-lg-12">\n                <div class="tabs-auhtor-area">\n                    <ul ngbNav #nav="ngbNav" [(activeId)]="activeTab" class="nav nav-pills" id="pills-tab"\n                        role="tablist">\n                        <li [ngbNavItem]="1" class="nav-item" role="presentation" data-aos="zoom-in"\n                            data-aos-duration="800">\n                            <button ngbNavLink class="nav-link" id="pills-mission1-tab" data-bs-toggle="pill"\n                                data-bs-target="#pills-mission1" type="button" role="tab" aria-controls="pills-mission1"\n                                aria-selected="true">\n                                Our Mission\n                            </button>\n                            <ng-template ngbNavContent>\n                                    <div class="row align-items-center">\n                                        <div class="col-lg-6">\n                                            <div class="mission-img" data-aos="zoom-in" data-aos-duration="1000">\n                                                <img src="assets/img/all-images/mission-img1.png" alt="">\n                                            </div>\n                                        </div>\n                                        <div class="col-lg-6">\n                                            <div class="mission-content-area heading10">\n                                                <h3 class="tg-element-title">Empowering a Sustainable Future Electricity\n                                                    Services</h3>\n                                                <p data-aos="fade-left" data-aos-duration="900">Through cutting-edge\n                                                    technology, renewable energy solutions, and unwavering dedication,\n                                                    we aim to empower communities, businesses, and individuals alike to\n                                                    embrace cleaner,</p>\n                                                <p data-aos="fade-left" data-aos-duration="1000">With every connection\n                                                    we make and every service we provide, we are driven by our passion\n                                                    for sustainability and our determination .</p>\n                                                <div class="btn-area" data-aos="fade-left" data-aos-duration="1200">\n                                                    <a routerLink="/contact-us" class="header-btn7">Contact Us<i\n                                                            class="fa-solid fa-arrow-right"></i></a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                            </ng-template>\n                        </li>\n                        <li [ngbNavItem]="2" class="nav-item" role="presentation" data-aos="zoom-in"\n                            data-aos-duration="1000">\n                            <button ngbNavLink class="nav-link" id="pills-mission2-tab" data-bs-toggle="pill"\n                                data-bs-target="#pills-mission2" type="button" role="tab" aria-controls="pills-mission2"\n                                aria-selected="false">\n                                Our Vision\n                            </button>\n                            <ng-template ngbNavContent>\n                                    <div class="row align-items-center">\n                                        <div class="col-lg-6">\n                                            <div class="mission-img">\n                                                <img src="assets/img/all-images/mission-img1.png" alt="">\n                                            </div>\n                                        </div>\n                                        <div class="col-lg-6">\n                                            <div class="mission-content-area heading10">\n                                                <h3>Empowering a Sustainable Future Electricity Services</h3>\n                                                <p>Through cutting-edge technology, renewable energy solutions, and\n                                                    unwavering dedication, we aim to empower communities, businesses,\n                                                    and individuals alike to embrace cleaner,</p>\n                                                <p>With every connection we make and every service we provide, we are\n                                                    driven by our passion for sustainability and our determination .</p>\n                                                <div class="btn-area">\n                                                    <a routerLink="/contact-us" class="header-btn7">Contact Us<i\n                                                            class="fa-solid fa-arrow-right"></i></a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                            </ng-template>\n\n                        </li>\n                        <li [ngbNavItem]="3" class="nav-item" role="presentation" data-aos="zoom-in"\n                            data-aos-duration="1200">\n                            <button ngbNavLink class="nav-link" id="pills-mission3-tab" data-bs-toggle="pill"\n                                data-bs-target="#pills-mission3" type="button" role="tab" aria-controls="pills-mission3"\n                                aria-selected="false">\n                                Our Golds\n                            </button>\n                            <ng-template ngbNavContent>\n                           \n                                <div class="row align-items-center">\n                                    <div class="col-lg-6">\n                                        <div class="mission-img">\n                                            <img src="assets/img/all-images/mission-img1.png" alt="">\n                                        </div>\n                                    </div>\n                                    <div class="col-lg-6">\n                                        <div class="mission-content-area heading10">\n                                            <h3>Empowering a Sustainable Future Electricity Services</h3>\n                                            <p>Through cutting-edge technology, renewable energy solutions, and unwavering\n                                                dedication, we aim to empower communities, businesses, and individuals alike\n                                                to embrace cleaner,</p>\n                                            <p>With every connection we make and every service we provide, we are driven by\n                                                our passion for sustainability and our determination .</p>\n                                            <div class="btn-area">\n                                                <a routerLink="/contact-us" class="header-btn7">Contact Us<i\n                                                        class="fa-solid fa-arrow-right"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </li>\n                    </ul>\n                    <div [ngbNavOutlet]="nav" class="tab-content"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OurMissionComponent2, { className: "OurMissionComponent", filePath: "src/app/views/demo/home-single-2/components/our-mission/our-mission.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-single-2/components/data.ts
var caseStudies2 = [
  {
    image: "assets/img/all-images/case-img7.png",
    icon: "assets/img/icons/case-icons1.svg",
    title: "Eco-Electric Chronicles",
    description: "Explore our range of services below & discover how.",
    duration: 800
  },
  {
    image: "assets/img/all-images/case-img8.png",
    icon: "assets/img/icons/case-icons2.svg",
    title: "Bright Spark Services",
    description: "Explore our range of services below & discover how.",
    duration: 1e3
  },
  {
    image: "assets/img/all-images/case-img9.png",
    icon: "assets/img/icons/case-icons3.svg",
    title: "Best Power and Progress",
    description: "Explore our range of services below & discover how.",
    duration: 1200
  }
];
var teamMembers5 = [
  {
    image: "assets/img/all-images/team-img1.png",
    name: "Shoaib Bashir",
    role: "Sales Manager",
    aosDuration: 800
  },
  {
    image: "assets/img/all-images/team-img3.png",
    name: "Reece Toply",
    role: "Team Leader",
    aosDuration: 1200
  },
  {
    image: "assets/img/all-images/team-img4.png",
    name: "Robert Anderson",
    role: "Sales Manager",
    aosDuration: 1400
  }
];
var testimonials3 = [
  {
    rating: 5,
    description: "\u201CDiscover why our customers love our electricity services Read testimonials from satisfied clients who have experienced the reliability, efficiency, and excellence\u201D",
    image: "assets/img/all-images/testimonial-img10.png",
    name: "Richardson",
    role: "Team Leader"
  },
  {
    rating: 5,
    description: "\u201CDiscover why our customers love our electricity services Read testimonials from satisfied clients who have experienced the reliability, efficiency, and excellence\u201D",
    image: "assets/img/all-images/testimonial-img11.png",
    name: "Issuant Sharma",
    role: "Team Leader"
  },
  {
    rating: 5,
    description: "\u201CDiscover why our customers love our electricity services Read testimonials from satisfied clients who have experienced the reliability, efficiency, and excellence\u201D",
    image: "assets/img/all-images/testimonial-img10.png",
    name: "Richardson",
    role: "Team Leader"
  },
  {
    rating: 5,
    description: "\u201CDiscover why our customers love our electricity services Read testimonials from satisfied clients who have experienced the reliability, efficiency, and excellence\u201D",
    image: "assets/img/all-images/testimonial-img11.png",
    name: "Issuant Sharma",
    role: "Team Leader"
  }
];
var faqs3 = [
  {
    question: "What types of electricity plans do you offer?",
    answer: "We understand that navigating the world of electricity services can <br> be daunting, which is why we've compiled this comprehensive."
  },
  {
    question: "How do I sign up for your electricity services?",
    answer: "We understand that navigating the world of electricity services can <br> be daunting, which is why we've compiled this comprehensive."
  },
  {
    question: "What happens if there's a power outage?",
    answer: "We understand that navigating the world of electricity services can <br> be daunting, which is why we've compiled this comprehensive."
  },
  {
    question: "How can I track my energy usage with your services?",
    answer: "We understand that navigating the world of electricity services can <br> be daunting, which is why we've compiled this comprehensive."
  },
  {
    question: "Do you offer any discounts or promotions for new customers?",
    answer: "We understand that navigating the world of electricity services can <br> be daunting, which is why we've compiled this comprehensive."
  },
  {
    question: "What types of electricity plans do you offer?",
    answer: "We understand that navigating the world of electricity services can <br> be daunting, which is why we've compiled this comprehensive."
  }
];
var blogs4 = [
  {
    image: "assets/img/all-images/blog-img10.png",
    title: "Exploring Energy Solutions Eco-Electric Insights",
    description: "Welcome to our electricity services blog! Stay informed and inspired.",
    date: "Apr 20, 2024"
  },
  {
    image: "assets/img/all-images/blog-img11.png",
    title: "Illuminating Energy Trends Power Perspectives",
    description: "Whether you're a homeowner looking to reduce your energy bills, a business",
    date: "Apr 20, 2024"
  },
  {
    image: "assets/img/all-images/blog-img12.png",
    title: "Spark Connections: Engage with Our Energy",
    description: "Join us as we explore topics ranging from renewable energy sources",
    date: "Apr 20, 2024"
  }
];

// src/app/views/demo/home-single-2/components/case-study/case-study.component.ts
function CaseStudyComponent_div_14_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275element(3, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15);
    \u0275\u0275element(6, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 17);
    \u0275\u0275text(12, " Learn More ");
    \u0275\u0275element(13, "i", 18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-aos", "zoom-in")("data-aos-duration", item_r1.duration);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r1.icon, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.description);
  }
}
var CaseStudyComponent2 = class _CaseStudyComponent {
  caseStudies = caseStudies2;
  static \u0275fac = function CaseStudyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CaseStudyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaseStudyComponent, selectors: [["app-case-study"]], decls: 15, vars: 1, consts: [[1, "casestudy4-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "case-header", "text-center", "heading11"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [1, "case-boxes-area"], [1, "img1"], ["alt", "", 3, "src"], [1, "content-area"], [1, "icons"], ["routerLink", "/case-study-single"], ["routerLink", "/case-study-single", 1, "readmore"], [1, "fa-solid", "fa-arrow-right"]], template: function CaseStudyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Case Studies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, " Case Studies in Energy Transformation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "From residential households to commercial enterprises, we provide reliable, efficient, ");
      \u0275\u0275element(11, "br", 8);
      \u0275\u0275text(12, " and sustainable energy solutions.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 2);
      \u0275\u0275template(14, CaseStudyComponent_div_14_Template2, 14, 6, "div", 9);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.caseStudies);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaseStudyComponent2, [{
    type: Component,
    args: [{ selector: "app-case-study", imports: [CommonModule, RouterLink], template: `<div class="casestudy4-section-area sp2">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="case-header text-center heading11">
                    <h5 data-aos="fade-up" data-aos-duration="800">Case Studies</h5>
                    <h2 class="tg-element-title"> Case Studies in Energy Transformation</h2>
                    <p data-aos="fade-up" data-aos-duration="1000">From residential households to commercial
                        enterprises, we provide reliable, efficient, <br class="d-lg-block d-none"> and sustainable
                        energy solutions.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-4 col-md-6" *ngFor="let item of caseStudies" [attr.data-aos]="'zoom-in'"
                [attr.data-aos-duration]="item.duration">
                <div class="case-boxes-area">
                    <div class="img1">
                        <img [src]="item.image" alt="">
                    </div>
                    <div class="content-area">
                        <div class="icons">
                            <img [src]="item.icon" alt="">
                        </div>
                        <a routerLink="/case-study-single">{{ item.title }}</a>
                        <p>{{ item.description }}</p>
                        <a routerLink="/case-study-single" class="readmore">
                            Learn More <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaseStudyComponent2, { className: "CaseStudyComponent", filePath: "src/app/views/demo/home-single-2/components/case-study/case-study.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-single-2/components/team-2/team-2.component.ts
function Team2Component_div_12_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275element(3, "img", 12);
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14)(6, "ul", 15)(7, "li")(8, "a", 16);
    \u0275\u0275element(9, "i", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li")(11, "a", 16);
    \u0275\u0275element(12, "i", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "a", 16);
    \u0275\u0275element(15, "i", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li")(17, "a", 16);
    \u0275\u0275element(18, "i", 20);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(19, "div", 21)(20, "a", 22);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("data-aos-duration", member_r1.aosDuration);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", member_r1.image, \u0275\u0275sanitizeUrl)("alt", member_r1.name);
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate(member_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r1.role);
  }
}
var Team2Component2 = class _Team2Component {
  teamMembers = teamMembers5;
  static \u0275fac = function Team2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Team2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Team2Component, selectors: [["app-team-2"]], decls: 13, vars: 1, consts: [[1, "team4-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-7", "m-auto"], [1, "team-header-area", "heading9", "text-center"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], ["data-aos", "fade-up", 1, "team-auhtor-boxarea"], [1, "images"], [3, "src", "alt"], [1, "team-social-area"], [1, "icons"], [1, "d-flex", "align-items-center", "gap-1", "flex-wrap", "justify-content-center"], ["href", "javascript:void(0)"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-pinterest-p"], [1, "fa-brands", "fa-youtube"], [1, "content-area"], ["routerLink", "/our-team"]], template: function Team2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Our Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Get to Know Our Talented Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, " With a focus on collaboration, innovation, and customer satisfaction, we strive to exceed expectations at every turn.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 2);
      \u0275\u0275template(12, Team2Component_div_12_Template2, 24, 5, "div", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.teamMembers);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Team2Component2, [{
    type: Component,
    args: [{ selector: "app-team-2", imports: [CommonModule, RouterLink], template: '<div class="team4-section-area sp2">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-7 m-auto">\n                <div class="team-header-area heading9 text-center">\n                    <h5 data-aos="fade-left" data-aos-duration="800">Our Team</h5>\n                    <h2 class="tg-element-title">Get to Know Our Talented Team</h2>\n                    <p data-aos="fade-left" data-aos-duration="1000"> With a focus on collaboration, innovation, and\n                        customer satisfaction, we strive to exceed expectations at every turn.</p>\n                </div>\n            </div>\n        </div>\n\n        <div class="row">\n            <div class="col-lg-4 col-md-6" *ngFor="let member of teamMembers">\n                <div class="team-auhtor-boxarea" data-aos="fade-up" [attr.data-aos-duration]="member.aosDuration">\n                    <div class="images">\n                        <img [src]="member.image" [alt]="member.name" />\n                        <div class="team-social-area">\n                            <div class="icons">\n                                <ul class="d-flex align-items-center gap-1 flex-wrap justify-content-center">\n                                    <li><a href="javascript:void(0)"><i class="fa-brands fa-instagram"></i></a></li>\n                                    <li><a href="javascript:void(0)"><i class="fa-brands fa-facebook-f"></i></a></li>\n                                    <li><a href="javascript:void(0)"><i class="fa-brands fa-pinterest-p"></i></a></li>\n                                    <li><a href="javascript:void(0)"><i class="fa-brands fa-youtube"></i></a></li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="content-area">\n                        <a routerLink="/our-team">{{ member.name }}</a>\n                        <p>{{ member.role }}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Team2Component2, { className: "Team2Component", filePath: "src/app/views/demo/home-single-2/components/team-2/team-2.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-single-2/components/testimonial-2/testimonial-2.component.ts
var _c09 = () => [];
function Testimonial2Component_ng_container_19_ng_template_1_li_2_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275elementEnd();
  }
}
function Testimonial2Component_ng_container_19_ng_template_1_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "ul", 17);
    \u0275\u0275template(2, Testimonial2Component_ng_container_19_ng_template_1_li_2_Template2, 2, 0, "li", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "div", 19);
    \u0275\u0275element(7, "img", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 21)(9, "a", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const testimonial_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(6, _c09).constructor(testimonial_r1.rating));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(testimonial_r1.description);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", testimonial_r1.name);
    \u0275\u0275property("src", testimonial_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(testimonial_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(testimonial_r1.role);
  }
}
function Testimonial2Component_ng_container_19_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Testimonial2Component_ng_container_19_ng_template_1_Template2, 13, 7, "ng-template", 15);
    \u0275\u0275elementContainerEnd();
  }
}
var Testimonial2Component2 = class _Testimonial2Component {
  testimonials = testimonials3;
  customOptions = {
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    mouseDrag: true,
    items: 10,
    autoplay: true,
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    smartSpeed: 3e3,
    autoplayTimeout: 4e3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2
      },
      1e3: {
        items: 2
      }
    }
  };
  static \u0275fac = function Testimonial2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Testimonial2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Testimonial2Component, selectors: [["app-testimonial-2"]], decls: 20, vars: 2, consts: [[1, "testimonial4-section-area", "sp1"], [1, "container"], [1, "row"], [1, "col-lg-4"], [1, "testimonial-header", "heading9"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/contact-us", 1, "header-btn7"], [1, "fa-solid", "fa-arrow-right"], [1, "col-lg-8"], [1, "testimonial-slider-boxarea4", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "tesimonial-slider"], [1, "d-flex", "align-items-center", "gap-1", "flex-wrap"], [1, "auhtor-images"], [1, "img1"], [3, "src", "alt"], [1, "text"], ["routerLink", "/our-team"], [1, "fa-solid", "fa-star"]], template: function Testimonial2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Testimonials");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Happy Customers Stories from");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, " Our team of experienced professionals is ");
      \u0275\u0275element(11, "br", 8);
      \u0275\u0275text(12, " driven by a shared vision of creating a ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9)(14, "a", 10);
      \u0275\u0275text(15, "Contact Us ");
      \u0275\u0275element(16, "i", 11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 12)(18, "owl-carousel-o", 13);
      \u0275\u0275template(19, Testimonial2Component_ng_container_19_Template2, 2, 0, "ng-container", 14);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("options", ctx.customOptions);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.testimonials);
    }
  }, dependencies: [CarouselModule, CarouselComponent, CarouselSlideDirective, CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Testimonial2Component2, [{
    type: Component,
    args: [{ selector: "app-testimonial-2", imports: [CarouselModule, CommonModule, RouterLink], template: '<div class="testimonial4-section-area sp1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-4">\n                <div class="testimonial-header heading9">\n                    <h5 data-aos="fade-left" data-aos-duration="800">Testimonials</h5>\n                    <h2 class="tg-element-title">Happy Customers Stories from</h2>\n                    <p data-aos="fade-left" data-aos-duration="1000"> Our team of experienced professionals is <br\n                            class="d-lg-block d-none"> driven by a shared vision of creating a </p>\n                    <div class="btn-area" data-aos="fade-left" data-aos-duration="1200">\n                        <a routerLink="/contact-us" class="header-btn7">Contact Us <i\n                                class="fa-solid fa-arrow-right"></i></a>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-8">\n                <owl-carousel-o [options]="customOptions" class="testimonial-slider-boxarea4">\n                    <ng-container *ngFor="let testimonial of testimonials">\n                        <ng-template carouselSlide>\n                            <div class="tesimonial-slider">\n                                <ul class="d-flex align-items-center gap-1 flex-wrap">\n                                    <li *ngFor="let star of [].constructor(testimonial.rating)">\n                                        <i class="fa-solid fa-star"></i>\n                                    </li>\n                                </ul>\n                                <p>{{ testimonial.description }}</p>\n                                <div class="auhtor-images">\n                                    <div class="img1">\n                                        <img [src]="testimonial.image" alt="{{ testimonial.name }}">\n                                    </div>\n                                    <div class="text">\n                                        <a routerLink="/our-team">{{ testimonial.name }}</a>\n                                        <p>{{ testimonial.role }}</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </ng-container>\n                </owl-carousel-o>\n\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Testimonial2Component2, { className: "Testimonial2Component", filePath: "src/app/views/demo/home-single-2/components/testimonial-2/testimonial-2.component.ts", lineNumber: 13 });
})();

// src/app/views/demo/home-single-2/components/faq-2/faq-2.component.ts
function Faq2Component_For_21_div_7_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function Faq2Component_For_21_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "h2", 16)(2, "button", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 18)(5, "div", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, Faq2Component_For_21_div_7_Template2, 1, 0, "div", 20);
  }
  if (rf & 2) {
    const faq_r1 = ctx.$implicit;
    const \u0275$index_37_r2 = ctx.$index;
    const \u0275$count_37_r3 = ctx.$count;
    \u0275\u0275property("collapsed", \u0275$index_37_r2 === 0 ? false : true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", faq_r1.question, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r1.answer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(\u0275$index_37_r2 === \u0275$count_37_r3 - 1));
  }
}
var Faq2Component2 = class _Faq2Component {
  faqs = faqs3;
  static \u0275fac = function Faq2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Faq2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Faq2Component, selectors: [["app-faq-2"]], decls: 22, vars: 1, consts: [[1, "faq4-section-area", "sp1"], [1, "container"], [1, "row"], [1, "col-lg-7", "m-auto"], [1, "faq-header-area", "heading9", "text-center"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], [1, "col-lg-5"], [1, "faq-images"], ["src", "assets/img/all-images/faq-img2.png", "alt", ""], [1, "col-lg-7"], [1, "faq-auhtoir-area2"], ["ngbAccordion", "", "id", "accordionFlushExample", 1, "accordion", "accordion-flush", 3, "closeOthers"], ["ngbAccordionItem", "", "data-aos", "fade-left", "data-aos-duration", "800", 3, "collapsed"], ["ngbAccordionHeader", ""], ["ngbAccordionButton", "", "type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseOne", "aria-expanded", "false", "aria-controls", "flush-collapseOne"], ["id", "flush-collapseOne", "ngbAccordionCollapse", "", "data-bs-parent", "#accordionFlushExample"], ["ngbAccordionBody", ""], ["class", "space20", 4, "ngIf"], [1, "space20"]], template: function Faq2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "FAQ\u2019S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Electricity Essentials FAQ Section");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Have questions about our electricity services? You're in the right place! Browse ");
      \u0275\u0275element(11, "br", 8);
      \u0275\u0275text(12, " through our frequently asked questions to find answers to common.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 2)(14, "div", 9)(15, "div", 10);
      \u0275\u0275element(16, "img", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "div", 14);
      \u0275\u0275repeaterCreate(20, Faq2Component_For_21_Template2, 8, 4, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275property("closeOthers", true);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.faqs);
    }
  }, dependencies: [NgbAccordionModule, NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionBody, NgbAccordionCollapse, CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Faq2Component2, [{
    type: Component,
    args: [{ selector: "app-faq-2", imports: [NgbAccordionModule, CommonModule], template: `<div class="faq4-section-area sp1">
    <div class="container">
        <div class="row ">
            <div class="col-lg-7 m-auto">
                <div class="faq-header-area heading9 text-center">
                    <h5 data-aos="fade-left" data-aos-duration="800">FAQ\u2019S</h5>
                    <h2 class="tg-element-title">Electricity Essentials FAQ Section</h2>
                    <p data-aos="fade-left" data-aos-duration="1000">Have questions about our electricity services?
                        You're in the right place! Browse <br class="d-lg-block d-none"> through our frequently asked
                        questions to find answers to common.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-5">
                <div class="faq-images">
                    <img src="assets/img/all-images/faq-img2.png" alt="">
                </div>
            </div>
            <div class="col-lg-7">
                <div class="faq-auhtoir-area2">
                    <div ngbAccordion [closeOthers]="true" class="accordion accordion-flush" id="accordionFlushExample">
                        @for (faq of faqs; track $index;let first=$first;let id=$index;let last=$last) {
                            <div ngbAccordionItem [collapsed]="first ? false : true" data-aos="fade-left" data-aos-duration="800">
                                <h2 ngbAccordionHeader>
                                    <button ngbAccordionButton type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                       {{faq.question}}
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" ngbAccordionCollapse
                                    data-bs-parent="#accordionFlushExample">
                                    <div ngbAccordionBody>{{faq.answer}}</div>
                                </div>
                            </div>
                            <div *ngIf="!last" class="space20"></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Faq2Component2, { className: "Faq2Component", filePath: "src/app/views/demo/home-single-2/components/faq-2/faq-2.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-single-2/components/contact-2/contact-2.component.ts
var Contact2Component2 = class _Contact2Component {
  static \u0275fac = function Contact2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Contact2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Contact2Component, selectors: [["app-contact-2"]], decls: 40, vars: 0, consts: [[1, "contact4-section-area", "sp1", 2, "background-image", "url(assets/img/all-images/contact-bg4.png)", "background-position", "center", "background-position", "center", "background-repeat", "no-repeat", "background-size", "cover"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "contact-submit-boxarea"], ["action", "https://api.web3forms.com/submit", "method", "POST"], ["type", "hidden", "name", "access_key", "value", "0cd32fff-eda2-4da3-be43-37d47fbb396b"], [1, "row"], [1, "input-area"], ["type", "text", "placeholder", "Name", "required", ""], ["type", "number", "placeholder", "Phone", "required", ""], [1, "col-lg-12"], ["type", "email", "placeholder", "Email", "required", ""], ["placeholder", "Describe your inquiry", "cols", "30", "rows", "10", "required", ""], [1, "input-area1"], ["type", "checkbox", "required", ""], ["type", "submit", 1, "header-btn7"], [1, "fa-solid", "fa-arrow-right"]], template: function Contact2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4");
      \u0275\u0275text(6, "Request A Quote");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "form", 5);
      \u0275\u0275element(8, "input", 6);
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 3)(11, "div", 8)(12, "p");
      \u0275\u0275text(13, "Name (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 3)(16, "div", 8)(17, "p");
      \u0275\u0275text(18, "Number (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "input", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 11)(21, "div", 8)(22, "p");
      \u0275\u0275text(23, "Email (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 11)(26, "div", 8)(27, "p");
      \u0275\u0275text(28, "Additional Details (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "textarea", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 11)(31, "div", 14);
      \u0275\u0275element(32, "input", 15);
      \u0275\u0275elementStart(33, "p");
      \u0275\u0275text(34, "I agree with the site privacy policy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 11)(36, "div", 14)(37, "button", 16);
      \u0275\u0275text(38, "Submit Now ");
      \u0275\u0275element(39, "i", 17);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Contact2Component2, [{
    type: Component,
    args: [{ selector: "app-contact-2", imports: [], template: '<div class="contact4-section-area sp1" style="background-image: url(assets/img/all-images/contact-bg4.png); background-position: center; background-position: center; background-repeat: no-repeat; background-size: cover;">\n    <div class="container">\n      <div class="row align-items-center">\n        <div class="col-lg-6">\n          <div class="contact-submit-boxarea">\n            <h4>Request A Quote</h4>\n            <form action="https://api.web3forms.com/submit" method="POST">\n              <input type="hidden" name="access_key" value="0cd32fff-eda2-4da3-be43-37d47fbb396b">\n              <div class="row">\n                <div class="col-lg-6">\n                  <div class="input-area">\n                    <p>Name (required)</p>\n                    <input type="text" placeholder="Name" required>\n                  </div>\n                </div>\n                <div class="col-lg-6">\n                  <div class="input-area">\n                    <p>Number (required)</p>\n                    <input type="number" placeholder="Phone" required>\n                  </div>\n                </div>\n    \n                <div class="col-lg-12">\n                  <div class="input-area">\n                    <p>Email (required)</p>\n                    <input type="email" placeholder="Email" required>\n                  </div>\n                </div>\n    \n                <div class="col-lg-12">\n                  <div class="input-area">\n                    <p>Additional Details  (Optional)</p>\n                    <textarea placeholder="Describe your inquiry" cols="30" rows="10" required></textarea>\n                  </div>\n                </div>\n                <div class="col-lg-12">\n                  <div class="input-area1">\n                    <input type="checkbox" required>\n                    <p>I agree with the site privacy policy</p>\n                  </div>\n                </div>\n    \n                <div class="col-lg-12">\n                  <div class="input-area1">\n                    <button type="submit" class="header-btn7">Submit Now <i class="fa-solid fa-arrow-right"></i></button>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Contact2Component2, { className: "Contact2Component", filePath: "src/app/views/demo/home-single-2/components/contact-2/contact-2.component.ts", lineNumber: 9 });
})();

// src/app/views/demo/home-single-2/components/blogs-2/blogs-2.component.ts
function Blogs2Component_div_14_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275element(3, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "a", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ul")(10, "li")(11, "a", 16);
    \u0275\u0275element(12, "i", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "li")(15, "a", 18);
    \u0275\u0275text(16, " Learn More ");
    \u0275\u0275element(17, "i", 19);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275attribute("data-aos", i_r2 % 2 === 0 ? "flip-right" : "flip-left")("data-aos-duration", 800 + i_r2 * 200);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", blog_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(blog_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blog_r1.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(blog_r1.date);
  }
}
var Blogs2Component2 = class _Blogs2Component {
  blogs = blogs4;
  static \u0275fac = function Blogs2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Blogs2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Blogs2Component, selectors: [["app-blogs-2"]], decls: 15, vars: 1, consts: [[1, "blog4-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "blog-header-area", "heading9", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [1, "blog-auhtor-boxesarea"], [1, "img1"], ["alt", "", 3, "src"], [1, "content-area"], ["routerLink", "/single-blog"], ["href", "javascript:void(0)"], [1, "fa-solid", "fa-calendar-days"], ["routerLink", "/single-blog", 1, "learnmore"], [1, "fa-solid", "fa-arrow-right"]], template: function Blogs2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Our Latest News");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Electricity Explained Explore Our Blog");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Our goal is to empower you with the knowledge and insights you need to make informed ");
      \u0275\u0275element(11, "br", 8);
      \u0275\u0275text(12, " decisions about your energy consumption and contribute to a greener");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 2);
      \u0275\u0275template(14, Blogs2Component_div_14_Template2, 18, 6, "div", 9);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.blogs);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Blogs2Component2, [{
    type: Component,
    args: [{ selector: "app-blogs-2", imports: [CommonModule, RouterLink], template: `<div class="blog4-section-area sp2">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="blog-header-area heading9 text-center">
                    <h5 data-aos="fade-up" data-aos-duration="800">Our Latest News</h5>
                    <h2 class="tg-element-title">Electricity Explained Explore Our Blog</h2>
                    <p data-aos="fade-up" data-aos-duration="1000">Our goal is to empower you with the knowledge and
                        insights you need to make informed <br class="d-lg-block d-none"> decisions about your energy
                        consumption and contribute to a greener</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6" *ngFor="let blog of blogs; let i = index"
                [attr.data-aos]="i % 2 === 0 ? 'flip-right' : 'flip-left'" [attr.data-aos-duration]="800 + (i * 200)">
                <div class="blog-auhtor-boxesarea">
                    <div class="img1">
                        <img [src]="blog.image" alt="">
                    </div>
                    <div class="content-area">
                        <a routerLink="/single-blog">{{ blog.title }}</a>
                        <p>{{ blog.description }}</p>
                        <ul>
                            <li><a href="javascript:void(0)"><i class="fa-solid fa-calendar-days"></i>{{ blog.date }}</a></li>
                            <li>
                                <a routerLink="/single-blog" class="learnmore">
                                    Learn More <i class="fa-solid fa-arrow-right"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Blogs2Component2, { className: "Blogs2Component", filePath: "src/app/views/demo/home-single-2/components/blogs-2/blogs-2.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-single-2/components/cta-2/cta-2.component.ts
var Cta2Component2 = class _Cta2Component {
  static \u0275fac = function Cta2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Cta2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Cta2Component, selectors: [["app-cta-2"]], decls: 19, vars: 0, consts: [[1, "cta4-section-area", "sp4"], [1, "container"], [1, "row"], [1, "col-lg-5"], [1, "cta-header", "heading2"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "800"], ["action", "#", "data-aos", "fade-up", "data-aos-duration", "1000"], ["type", "email", "placeholder", "Email Address"], ["type", "submit", 1, "header-btn7"], [1, "fa-solid", "fa-arrow-right"], [1, "col-lg-1"], [1, "cta-images"], [1, "img1"], ["src", "assets/img/all-images/cta-img1.png", "alt", ""]], template: function Cta2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Ready to Power up your Savings and Reliability?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Feel free to customize this paragraph to better reflect the specific services offered by your IT solution & the unique ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "form", 7);
      \u0275\u0275element(10, "input", 8);
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275text(12, "Subscribe Now ");
      \u0275\u0275element(13, "i", 10);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(14, "div", 11);
      \u0275\u0275elementStart(15, "div", 3)(16, "div", 12)(17, "div", 13);
      \u0275\u0275element(18, "img", 14);
      \u0275\u0275elementEnd()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Cta2Component2, [{
    type: Component,
    args: [{ selector: "app-cta-2", imports: [], template: '<div class="cta4-section-area sp4">\n    <div class="container">\n      <div class="row">\n        <div class="col-lg-5">\n          <div class="cta-header heading2">\n            <h2 class="tg-element-title">Ready to Power up your Savings and Reliability?</h2>\n            <p data-aos="fade-up" data-aos-duration="800">Feel free to customize this paragraph to better reflect the specific services offered by your IT solution & the unique </p>\n            <form action="#" data-aos="fade-up" data-aos-duration="1000">\n              <input type="email" placeholder="Email Address">\n              <button type="submit" class="header-btn7">Subscribe Now <i class="fa-solid fa-arrow-right"></i></button>\n            </form>\n          </div>\n        </div>\n        <div class="col-lg-1"></div>\n        <div class="col-lg-5">\n          <div class="cta-images">\n            <div class="img1">\n              <img src="assets/img/all-images/cta-img1.png" alt="">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Cta2Component2, { className: "Cta2Component", filePath: "src/app/views/demo/home-single-2/components/cta-2/cta-2.component.ts", lineNumber: 9 });
})();

// src/app/views/demo/home-single-2/home-single-2.component.ts
var HomeSingle2Component = class _HomeSingle2Component {
  static \u0275fac = function HomeSingle2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeSingle2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeSingle2Component, selectors: [["app-home-single-2"]], decls: 13, vars: 0, consts: [[1, "homepage4-body", "tg-heading-subheading", "animation-style3"], ["id", "about"], ["id", "case-study"], ["id", "team"], ["id", "testimonials"], ["id", "faq"], ["id", "blogs"], ["containerClass", "footer4-section-area", "logo", "assets/img/logo/logo7.png"]], template: function HomeSingle2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-single-header-2")(2, "app-hero-2")(3, "app-about-2", 1)(4, "app-our-mission")(5, "app-case-study", 2)(6, "app-team-2", 3)(7, "app-testimonial-2", 4)(8, "app-faq-2", 5)(9, "app-contact-2")(10, "app-blogs-2", 6)(11, "app-cta-2")(12, "app-footer", 7);
      \u0275\u0275elementEnd();
    }
  }, dependencies: [SingleHeader2Component, Hero2Component2, About2Component2, OurMissionComponent2, CaseStudyComponent2, Team2Component2, Testimonial2Component2, Faq2Component2, Contact2Component2, Blogs2Component2, Cta2Component2, FooterComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeSingle2Component, [{
    type: Component,
    args: [{ selector: "app-home-single-2", imports: [SingleHeader2Component, Hero2Component2, About2Component2, OurMissionComponent2, CaseStudyComponent2, Team2Component2, Testimonial2Component2, Faq2Component2, Contact2Component2, Blogs2Component2, Cta2Component2, FooterComponent], template: '<div class="homepage4-body tg-heading-subheading animation-style3">\n    <app-single-header-2 />\n    <app-hero-2 />\n    <app-about-2 id="about"/>\n    <app-our-mission />\n    <app-case-study id="case-study"/>\n    <app-team-2 id="team"/>\n    <app-testimonial-2 id="testimonials"/>\n    <app-faq-2 id="faq"/>\n    <app-contact-2 />\n    <app-blogs-2 id="blogs"/>\n    <app-cta-2 />\n    <app-footer containerClass="footer4-section-area" logo="assets/img/logo/logo7.png"/>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeSingle2Component, { className: "HomeSingle2Component", filePath: "src/app/views/demo/home-single-2/home-single-2.component.ts", lineNumber: 21 });
})();

// src/app/views/demo/home-single-3/components/single-header-3/single-header-3.component.ts
var _c010 = (a0) => ({ "mobile-menu-active": a0 });
function SingleHeader3Component_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 47);
    \u0275\u0275listener("click", function SingleHeader3Component_li_12_Template_li_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scroll.scrollTo(item_r2));
    });
    \u0275\u0275elementStart(1, "a", 48)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.scroll.activeSection === item_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.toSentenceCase(item_r2));
  }
}
function SingleHeader3Component_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-mobile-nav-item-2", 49);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("item", item_r4);
  }
}
var SingleHeader3Component = class _SingleHeader3Component {
  isMenuOpen = false;
  menuItems = ["about", "services", "case study", "testimonials", "team", "blogs"];
  scroll = inject(ScrollService);
  ngOnInit() {
    this.scroll.setSections(this.menuItems);
  }
  toSentenceCase(text) {
    if (!text)
      return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  navItems = [
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
            { "title": "Home Four", "link": "/home-4" },
            { "title": "Home Five", "link": "/home-5" }
          ]
        },
        {
          title: "Landing page",
          subMenu: [
            { "title": "Home One", "link": "/home-single-1" },
            { "title": "Home Two", "link": "/home-single-2" },
            { "title": "Home Three", "link": "/home-single-3" },
            { "title": "Home Four", "link": "/home-single-4" },
            { "title": "Home Five", "link": "/home-single-5" }
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
      "link": "/services"
    },
    {
      "title": "Works",
      "link": "/works"
    },
    {
      "title": "Testimonials",
      "link": "/testimonials"
    },
    {
      "title": "Team",
      "link": "/team"
    },
    {
      "title": "Blogs",
      "link": "/blogs"
    }
  ];
  static \u0275fac = function SingleHeader3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SingleHeader3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SingleHeader3Component, selectors: [["app-single-header-3"]], decls: 83, vars: 5, consts: [["id", "header", "stickyScroll", "", 1, "header-area", "homepage2", "header", "header-sticky", "d-none", "d-lg-block"], [1, "container"], [1, "row"], [1, "col-lg-12"], ["id", "navbar-example2", 1, "navbar"], [1, "header-elements"], [1, "site-logo"], ["routerLink", "/home-single-3"], ["src", "assets/img/logo/logo2.png", "alt", ""], [1, "main-menu"], ["class", "nav-item cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "btn-area"], ["routerLink", "/contact-us", 1, "header-btn3"], [1, "fa-solid", "fa-arrow-right"], [1, "mobile-header", "mobile-haeder2", "d-block", "d-lg-none"], [1, "container-fluid"], [1, "col-12"], [1, "mobile-header-elements"], [1, "mobile-logo"], ["src", "assets/img/logo/logo3.png", "alt", ""], [1, "mobile-nav-icon", "dots-menu", 3, "click"], [1, "fa-solid", "fa-bars"], [1, "mobile-sidebar", "mobile-sidebar2", 3, "ngClass"], [1, "logosicon-area"], [1, "logos"], [1, "menu-close", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "mobile-nav", "mobile-nav1"], [1, "mobile-nav-list", "nav-list1"], [4, "ngFor", "ngForOf"], [1, "allmobilesection"], [1, "single-footer"], [1, "footer1-contact-info"], [1, "contact-info-single"], [1, "contact-info-icon"], [1, "fa-solid", "fa-phone-volume"], [1, "contact-info-text"], ["href", "tel:+3(924)4596512"], [1, "fa-solid", "fa-envelope"], ["href", "mailto:info@example.com"], [1, "fa-solid", "fa-location-dot"], [1, "social-links-mobile-menu"], ["href", "javascript:void(0)"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-linkedin-in"], [1, "fa-brands", "fa-youtube"], [1, "nav-item", "cursor-pointer", 3, "click"], [1, "nav-link"], [3, "item"]], template: function SingleHeader3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "nav", 4)(6, "div", 5)(7, "div", 6)(8, "a", 7);
      \u0275\u0275element(9, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 9)(11, "ul");
      \u0275\u0275template(12, SingleHeader3Component_li_12_Template, 4, 3, "li", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 11)(14, "a", 12);
      \u0275\u0275text(15, "Contact Us ");
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "div", 17)(21, "div", 18)(22, "a", 7);
      \u0275\u0275element(23, "img", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 20);
      \u0275\u0275listener("click", function SingleHeader3Component_Template_div_click_24_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275element(25, "i", 21);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(26, "div", 22)(27, "div", 23)(28, "div", 24);
      \u0275\u0275element(29, "img", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 25);
      \u0275\u0275listener("click", function SingleHeader3Component_Template_div_click_30_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275element(31, "i", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 27)(33, "ul", 28);
      \u0275\u0275template(34, SingleHeader3Component_ng_container_34_Template, 2, 1, "ng-container", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 30)(36, "a", 12);
      \u0275\u0275text(37, "Get Started ");
      \u0275\u0275element(38, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 31)(40, "h3");
      \u0275\u0275text(41, "Contact Info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 32)(43, "div", 33)(44, "div", 34);
      \u0275\u0275element(45, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 36)(47, "a", 37);
      \u0275\u0275text(48, "+3(924)4596512");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 33)(50, "div", 34);
      \u0275\u0275element(51, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 36)(53, "a", 39);
      \u0275\u0275text(54, "info@example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 31)(56, "h3");
      \u0275\u0275text(57, "Our Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 33)(59, "div", 34);
      \u0275\u0275element(60, "i", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 36)(62, "a", 39);
      \u0275\u0275text(63, "55 East Birchwood Ave.Brooklyn, ");
      \u0275\u0275element(64, "br");
      \u0275\u0275text(65, " New York 11201,United States");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div", 31)(67, "h3");
      \u0275\u0275text(68, "Social Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 41)(70, "ul")(71, "li")(72, "a", 42);
      \u0275\u0275element(73, "i", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li")(75, "a", 42);
      \u0275\u0275element(76, "i", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "li")(78, "a", 42);
      \u0275\u0275element(79, "i", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li")(81, "a", 42);
      \u0275\u0275element(82, "i", 46);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.menuItems);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c010, ctx.isMenuOpen));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.navItems);
    }
  }, dependencies: [StickyScrollDirective, CommonModule, NgClass, NgForOf, MobileNavItem2Component, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SingleHeader3Component, [{
    type: Component,
    args: [{ selector: "app-single-header-3", imports: [StickyScrollDirective, CommonModule, MobileNavItem2Component, RouterLink], template: `<header>
    <div class="header-area homepage2 header header-sticky d-none d-lg-block " id="header" stickyScroll>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <nav id="navbar-example2" class="navbar">
                        <div class="header-elements">
                            <div class="site-logo">
                                <a routerLink="/home-single-3"><img src="assets/img/logo/logo2.png" alt=""></a>
                            </div>
                            <div class="main-menu">
                                <ul>
                                    <li *ngFor="let item of menuItems" (click)="scroll.scrollTo(item)"
                                        class="nav-item cursor-pointer"><a
                                            [class.active]="scroll.activeSection === item"
                                            class="nav-link"><span>{{toSentenceCase(item)}}</span></a></li>
                                </ul>
                            </div>
                            <div class="btn-area">
                                <a routerLink="/contact-us" class="header-btn3">Contact Us <i
                                        class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>

<div class="mobile-header mobile-haeder2 d-block d-lg-none">
    <div class="container-fluid">
        <div class="col-12">
            <div class="mobile-header-elements">
                <div class="mobile-logo">
                    <a routerLink="/home-single-3"><img src="assets/img/logo/logo3.png" alt=""></a>
                </div>
                <div class="mobile-nav-icon dots-menu" (click)="toggleMenu()">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="mobile-sidebar mobile-sidebar2" [ngClass]="{ 'mobile-menu-active': isMenuOpen }">
    <div class="logosicon-area">
        <div class="logos">
            <img src="assets/img/logo/logo3.png" alt="">
        </div>
        <div class="menu-close" (click)="closeMenu()">
            <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
    <div class="mobile-nav mobile-nav1">
        <ul class="mobile-nav-list nav-list1">
            <ng-container *ngFor="let item of navItems;">
                <app-mobile-nav-item-2 [item]="item"></app-mobile-nav-item-2>
            </ng-container>
        </ul>

        <div class="allmobilesection">
            <a routerLink="/contact-us" class="header-btn3">Get Started <i class="fa-solid fa-arrow-right"></i></a>
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
                                <a href="mailto:info@example.com">55 East Birchwood Ave.Brooklyn, <br> New York
                                    11201,United States</a>
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SingleHeader3Component, { className: "SingleHeader3Component", filePath: "src/app/views/demo/home-single-3/components/single-header-3/single-header-3.component.ts", lineNumber: 14 });
})();

// src/app/views/demo/home-single-3/components/hero-3/hero-3.component.ts
var Hero3Component2 = class _Hero3Component {
  sliderConfig = {
    loop: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 9e3,
    cssEase: "linear",
    infinite: true,
    arrows: false,
    touchMove: true,
    swipeToSlide: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: false,
          touchMove: false
        }
      },
      {
        breakpoint: 375,
        settings: {
          autoplay: false,
          touchMove: false
        }
      },
      {
        breakpoint: 320,
        settings: {
          autoplay: false,
          touchMove: false
        }
      }
    ]
  };
  sliderConfig2 = {
    loop: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8e3,
    cssEase: "linear",
    infinite: true,
    arrows: false,
    touchMove: true,
    swipeToSlide: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: false
        }
      },
      {
        breakpoint: 375,
        settings: {
          autoplay: false
        }
      },
      {
        breakpoint: 320,
        settings: {
          autoplay: false
        }
      }
    ]
  };
  static \u0275fac = function Hero3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Hero3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Hero3Component, selectors: [["app-hero-3"]], decls: 99, vars: 5, consts: [[1, "hero2-section-area", 2, "background-image", "url(assets/img/bg/header-bg1.png)", "background-size", "cover", "background-repeat", "no-repeat", "background-position", "center"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "hero-header", "heading3"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/contact-us", 1, "header-btn3", "btn2"], [1, "fa-solid", "fa-arrow-right"], ["routerLink", "/contact-us", 1, "header-btn4"], [1, "counter-header-area"], ["data-aos", "zoom-out", "data-aos-duration", "800", 1, "counter-area"], [3, "countUp"], ["data-aos", "zoom-out", "data-aos-duration", "1000", 1, "counter-area"], ["data-aos", "zoom-out", "data-aos-duration", "1200", 1, "counter-area", "m-0"], [1, "hero2-images-area"], [1, "row"], [1, "col-lg-6", "col-md-6"], [1, "all-images-area", 3, "config"], ["ngxSlickItem", "", 1, "all-images"], [1, "images"], ["src", "assets/img/all-images/header-img1.png", "alt", ""], ["src", "assets/img/all-images/header-img2.png", "alt", ""], [1, "space80", "d-md-block", "d-none"], ["src", "assets/img/elements/circle2.png", "alt", "", 1, "circle2", "keyframe5"], [1, "all-images-area2", 3, "config"], ["ngxSlickItem", "", 1, "all-imges"], ["src", "assets/img/all-images/header-img3.png", "alt", ""], ["src", "assets/img/all-images/header-img4.png", "alt", ""]], template: function Hero3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Current Electricity Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 6);
      \u0275\u0275text(8, "Your Life Reliable Electricity Services.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Whether you're a homeowner, business owner, or community leader, a we're here to light up your life with sustainable energy solutions.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "a", 9);
      \u0275\u0275text(13, "Get A Free Estimate ");
      \u0275\u0275element(14, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 11);
      \u0275\u0275text(16, "Discover More ");
      \u0275\u0275element(17, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 12)(19, "div", 13)(20, "h2")(21, "count-up", 14);
      \u0275\u0275text(22, "40");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, "+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p");
      \u0275\u0275text(25, "Contrives Reached");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 15)(27, "h2")(28, "count-up", 14);
      \u0275\u0275text(29, "450");
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, "+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p");
      \u0275\u0275text(32, "Projects Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 16)(34, "h2")(35, "count-up", 14);
      \u0275\u0275text(36, "235");
      \u0275\u0275elementEnd();
      \u0275\u0275text(37, "+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p");
      \u0275\u0275text(39, "Qualified Sataff");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(40, "div", 3)(41, "div", 17)(42, "div", 18)(43, "div", 19)(44, "ngx-slick-carousel", 20)(45, "div", 21)(46, "div", 22);
      \u0275\u0275element(47, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 22);
      \u0275\u0275element(49, "img", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 21)(51, "div", 22);
      \u0275\u0275element(52, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 22);
      \u0275\u0275element(54, "img", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 21)(56, "div", 22);
      \u0275\u0275element(57, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 22);
      \u0275\u0275element(59, "img", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 21)(61, "div", 22);
      \u0275\u0275element(62, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 22);
      \u0275\u0275element(64, "img", 24);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(65, "div", 19);
      \u0275\u0275element(66, "div", 25)(67, "img", 26);
      \u0275\u0275elementStart(68, "ngx-slick-carousel", 27)(69, "div", 28)(70, "div", 22);
      \u0275\u0275element(71, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 22);
      \u0275\u0275element(73, "img", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 28)(75, "div", 22);
      \u0275\u0275element(76, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 22);
      \u0275\u0275element(78, "img", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 28)(80, "div", 22);
      \u0275\u0275element(81, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 22);
      \u0275\u0275element(83, "img", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 28)(85, "div", 22);
      \u0275\u0275element(86, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 22);
      \u0275\u0275element(88, "img", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 28)(90, "div", 22);
      \u0275\u0275element(91, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 22);
      \u0275\u0275element(93, "img", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 28)(95, "div", 22);
      \u0275\u0275element(96, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 22);
      \u0275\u0275element(98, "img", 30);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275property("countUp", 40);
      \u0275\u0275advance(7);
      \u0275\u0275property("countUp", 450);
      \u0275\u0275advance(7);
      \u0275\u0275property("countUp", 235);
      \u0275\u0275advance(9);
      \u0275\u0275property("config", ctx.sliderConfig);
      \u0275\u0275advance(24);
      \u0275\u0275property("config", ctx.sliderConfig2);
    }
  }, dependencies: [SlickCarouselModule, SlickCarouselComponent, SlickItemDirective, CountUpModule, CountUpDirective, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Hero3Component2, [{
    type: Component,
    args: [{ selector: "app-hero-3", imports: [SlickCarouselModule, CountUpModule, RouterLink], template: `<div class="hero2-section-area" style="background-image: url(assets/img/bg/header-bg1.png); background-size: cover; background-repeat: no-repeat; background-position: center;">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="hero-header heading3">
                    <h5 data-aos="fade-left" data-aos-duration="800">Current Electricity Services</h5>
                    <h1 class="tg-element-title">Your Life Reliable Electricity Services.</h1>
                    <p data-aos="fade-left" data-aos-duration="1000">Whether you're a homeowner, business owner, or community leader, a we're here to light up your life with sustainable energy solutions.</p>
                    <div class="btn-area" data-aos="fade-left" data-aos-duration="1200">
                        <a routerLink="/contact-us" class="header-btn3 btn2">Get A Free Estimate <i class="fa-solid fa-arrow-right"></i></a>
                        <a routerLink="/contact-us" class="header-btn4">Discover More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <div class="counter-header-area">
                        <div class="counter-area" data-aos="zoom-out" data-aos-duration="800">
                            <h2> <count-up [countUp]="40">40</count-up>+</h2>
                            <p>Contrives Reached</p>
                        </div>

                        <div class="counter-area" data-aos="zoom-out" data-aos-duration="1000">
                            <h2><count-up [countUp]="450">450</count-up>+</h2>
                            <p>Projects Completed</p>
                        </div>

                        <div class="counter-area m-0" data-aos="zoom-out" data-aos-duration="1200">
                            <h2><count-up [countUp]="235">235</count-up>+</h2>
                            <p>Qualified Sataff</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="hero2-images-area">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <ngx-slick-carousel [config]="sliderConfig" class="all-images-area">
                              <div ngxSlickItem class="all-images">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img1.png" alt="">
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img2.png" alt="">
                              </div>
                              </div>

                              <div ngxSlickItem class="all-images">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img1.png" alt="">
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img2.png" alt="">
                              </div>
                              </div>

                              <div ngxSlickItem class="all-images">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img1.png" alt="">
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img2.png" alt="">
                              </div>
                              </div>

                              <div ngxSlickItem class="all-images">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img1.png" alt="">
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img2.png" alt="">
                              </div>
                              </div>
                            </ngx-slick-carousel>
                        </div>

                        <div class="col-lg-6 col-md-6">
                            <div class="space80 d-md-block d-none"></div>
                            <img src="assets/img/elements/circle2.png" alt="" class="circle2 keyframe5">
                            <ngx-slick-carousel [config]="sliderConfig2" class="all-images-area2">
                              <div ngxSlickItem class="all-imges">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img3.png" alt=""> 
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img4.png" alt="">
                              </div>
                              </div>
                              <div ngxSlickItem class="all-imges">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img3.png" alt=""> 
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img4.png" alt="">
                              </div>
                              </div>
                              <div ngxSlickItem class="all-imges">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img3.png" alt=""> 
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img4.png" alt="">
                              </div>
                              </div>
                              <div ngxSlickItem class="all-imges">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img3.png" alt=""> 
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img4.png" alt="">
                              </div>
                              </div>
                              <div ngxSlickItem class="all-imges">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img3.png" alt=""> 
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img4.png" alt="">
                              </div>
                              </div>
                              <div ngxSlickItem class="all-imges">
                                <div class="images">
                                  <img src="assets/img/all-images/header-img3.png" alt=""> 
                              </div>
                              <div class="images">
                                  <img src="assets/img/all-images/header-img4.png" alt="" >
                              </div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Hero3Component2, { className: "Hero3Component", filePath: "src/app/views/demo/home-single-3/components/hero-3/hero-3.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-single-3/components/about-3/about-3.component.ts
var _c011 = (a0) => ({ width: a0 });
function About3Component_div_19_Template2(rf, ctx) {
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
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(6, _c011, item_r1.current + "%"));
  }
}
var About3Component2 = class _About3Component {
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
      let i2 = 0;
      const interval = setInterval(() => {
        if (i2 <= item.target) {
          this.progressItems[idx].current = i2;
        } else {
          clearInterval(interval);
        }
        i2++;
      }, speed);
    });
  }
  static \u0275fac = function About3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _About3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _About3Component, selectors: [["app-about-3"]], decls: 24, vars: 1, consts: [[1, "about2-section-area", "sp1"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], ["data-aos", "zoom-out", "data-aos-duration", "1000", 1, "about-images-area"], [1, "img1"], ["src", "assets/img/all-images/about-img3.png", "alt", ""], [1, "img2"], ["src", "assets/img/all-images/about-img4.png", "alt", ""], [1, "about-header-area", "heading4"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "space40"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "progress_bar"], ["class", "progress_bar_item grid-x", 4, "ngFor", "ngForOf"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/about", 1, "header-btn3"], [1, "fa-solid", "fa-arrow-right"], [1, "progress_bar_item", "grid-x"], [1, "item_label"], [1, "item_bar"], [1, "progress", 3, "ngStyle"]], template: function About3Component_Template(rf, ctx) {
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
      \u0275\u0275template(19, About3Component_div_19_Template2, 7, 8, "div", 15);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(About3Component2, [{
    type: Component,
    args: [{ selector: "app-about-3", imports: [CommonModule, RouterLink], template: `<div class="about2-section-area sp1">
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
                <div class="about-header-area heading4">
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
                        <a routerLink="/about" class="header-btn3">Find Out More <i
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(About3Component2, { className: "About3Component", filePath: "src/app/views/demo/home-single-3/components/about-3/about-3.component.ts", lineNumber: 11 });
})();

// src/app/views/demo/home-single-3/components/data.ts
var services3 = [
  {
    id: 1,
    aos: "flip-left",
    duration: 800,
    image: "assets/img/all-images/service-img4.png",
    icon: "assets/img/icons/service-icons1.svg",
    title: "Electra Works Solutions",
    description: "Explore our range of services below and discover how we can help future."
  },
  {
    id: 2,
    aos: "flip-right",
    duration: 1e3,
    image: "assets/img/all-images/service-img5.png",
    icon: "assets/img/icons/service-icons2.svg",
    title: "Bright Beam Solutions",
    description: "Explore our range of services below and discover how we can help future."
  },
  {
    id: 3,
    aos: "flip-left",
    duration: 1200,
    image: "assets/img/all-images/service-img6.png",
    icon: "assets/img/icons/service-icons3.svg",
    title: "Electri Core Services",
    description: "Explore our range of services below and discover how we can help future."
  }
];
var caseStudyData2 = [
  { image: "assets/img/all-images/case-img1.png", subtitle: "Electicity Solutions", title: "Power Navigating" },
  { image: "assets/img/all-images/case-img2.png", subtitle: "Voltage Vision", title: "Power Navigating" },
  { image: "assets/img/all-images/case-img3.png", subtitle: "Wizard Unveiling", title: "Power Navigating" },
  { image: "assets/img/all-images/case-img1.png", subtitle: "Electicity Solutions", title: "Power Navigating" },
  { image: "assets/img/all-images/case-img2.png", subtitle: "Voltage Vision", title: "Power Navigating" },
  { image: "assets/img/all-images/case-img3.png", subtitle: "Wizard Unveiling", title: "Power Navigating" },
  { image: "assets/img/all-images/case-img1.png", subtitle: "Electicity Solutions", title: "Power Navigating" },
  { image: "assets/img/all-images/case-img2.png", subtitle: "Voltage Vision", title: "Power Navigating" },
  { image: "assets/img/all-images/case-img3.png", subtitle: "Wizard Unveiling", title: "Power Navigating" }
];
var teamMembers6 = [
  {
    image: "assets/img/all-images/team-img5.png",
    name: "Kore Anderson",
    role: "Sales Manager",
    aosDuration: 800
  },
  {
    image: "assets/img/all-images/team-img6.png",
    name: "Zara Matheson",
    role: "Team Leader",
    aosDuration: 1200
  },
  {
    image: "assets/img/all-images/team-img7.png",
    name: "Kore Anderson",
    role: "Sales Manager",
    aosDuration: 1400
  }
];
var faqs4 = [
  {
    question: "What types of electricity plans do you offer?",
    answer: `Whether you're wondering about our pricing plans, process
               installation , or sustainability initiatives, we've got Best.`
  },
  {
    question: "How do I sign up for your electricity services?",
    answer: `Whether you're wondering about our pricing plans, process
               installation , or sustainability initiatives, we've got Best.`
  },
  {
    question: "Do you offer renewable energy options?",
    answer: `Whether you're wondering about our pricing plans, process
               installation , or sustainability initiatives, we've got Best.`
  },
  {
    question: "What are your billing and payment options?",
    answer: `Whether you're wondering about our pricing plans, process
               installation , or sustainability initiatives, we've got Best.`
  },
  {
    question: "What happens if there's a power outage?",
    answer: `Whether you're wondering about our pricing plans, process
               installation , or sustainability initiatives, we've got Best.`
  },
  {
    question: "What types of electricity plans do you offer?",
    answer: `Whether you're wondering about our pricing plans, process
               installation , or sustainability initiatives, we've got Best.`
  }
];

// src/app/views/demo/home-single-3/components/service-3/service-3.component.ts
function Service3Component_div_14_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275element(3, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14);
    \u0275\u0275element(5, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15)(7, "a", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 17);
    \u0275\u0275text(12, " Read More ");
    \u0275\u0275element(13, "i", 18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("data-aos", service_r1.aos)("data-aos-duration", service_r1.duration);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", service_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", service_r1.icon, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.description);
  }
}
var Service3Component2 = class _Service3Component {
  services = services3;
  static \u0275fac = function Service3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Service3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Service3Component, selectors: [["app-service-3"]], decls: 15, vars: 1, consts: [[1, "service2-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "service-header-area", "heading4", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [1, "service2-author-boxarea"], [1, "images"], ["alt", "", 3, "src"], [1, "icons"], [1, "service-content"], ["routerLink", "/services/single"], ["routerLink", "/services/single", 1, "readmore"], [1, "fa-solid", "fa-arrow-right"]], template: function Service3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Our Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, " Our Range of Electricity Solutions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Our team of experts is committed to delivering high-quality services that prioritize ");
      \u0275\u0275element(11, "br", 8);
      \u0275\u0275text(12, " reliability, efficiency, and sustainability. With cutting-edge technology.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 2);
      \u0275\u0275template(14, Service3Component_div_14_Template2, 14, 6, "div", 9);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.services);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Service3Component2, [{
    type: Component,
    args: [{ selector: "app-service-3", imports: [CommonModule, RouterLink], template: '<div class="service2-section-area sp2">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8 m-auto">\n                <div class="service-header-area heading4 text-center">\n                    <h5 data-aos="fade-up" data-aos-duration="800">Our Service</h5>\n                    <h2 class="tg-element-title"> Our Range of Electricity Solutions</h2>\n                    <p data-aos="fade-up" data-aos-duration="1000">Our team of experts is committed to delivering\n                        high-quality services that prioritize <br class="d-lg-block d-none"> reliability, efficiency,\n                        and sustainability. With cutting-edge technology.</p>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-lg-4 col-md-6" *ngFor="let service of services">\n              <div class="service2-author-boxarea" [attr.data-aos]="service.aos" [attr.data-aos-duration]="service.duration">\n                <div class="images">\n                  <img [src]="service.image" alt="">\n                </div>\n                <div class="icons">\n                  <img [src]="service.icon" alt="">\n                </div>\n                <div class="service-content">\n                  <a routerLink="/services/single">{{ service.title }}</a>\n                  <p>{{ service.description }}</p>\n                  <a routerLink="/services/single" class="readmore">\n                    Read More <i class="fa-solid fa-arrow-right"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Service3Component2, { className: "Service3Component", filePath: "src/app/views/demo/home-single-3/components/service-3/service-3.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-single-3/components/case-study-3/case-study-3.component.ts
function CaseStudy3Component_ng_container_14_ng_template_1_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275element(2, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16)(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 18)(10, "a", 17)(11, "span");
    \u0275\u0275element(12, "i", 19);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const case_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", case_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(case_r1.subtitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(case_r1.title);
  }
}
function CaseStudy3Component_ng_container_14_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CaseStudy3Component_ng_container_14_ng_template_1_Template2, 13, 3, "ng-template", 11);
    \u0275\u0275elementContainerEnd();
  }
}
var CaseStudy3Component2 = class _CaseStudy3Component {
  caseStudies = caseStudyData2;
  carouselOptions = {
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    mouseDrag: true,
    items: 10,
    autoplay: true,
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    smartSpeed: 2e3,
    autoplayTimeout: 2500,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2
      },
      1e3: {
        items: 3
      }
    }
  };
  static \u0275fac = function CaseStudy3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CaseStudy3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaseStudy3Component, selectors: [["app-case-study-3"]], decls: 15, vars: 2, consts: [[1, "casestudy-section-area", "sp1"], [1, "container"], [1, "row"], [1, "col-lg-6", "m-auto"], [1, "casestudy-header", "heading4", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "col-lg-12"], [1, "casestudy-slider-area", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "case-author-boxarea"], [1, "imges"], ["alt", "", 3, "src"], [1, "case-content"], [1, "text"], ["routerLink", "/case-study-single"], [1, "icons"], [1, "fa-solid", "fa-arrow-right"]], template: function CaseStudy3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Case studies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Electricity Unveiled Explaining Our Service Process");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Once we understand your requirements, our expert team swings into action, customizing a solution that's tailored just for you.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 2)(12, "div", 8)(13, "owl-carousel-o", 9);
      \u0275\u0275template(14, CaseStudy3Component_ng_container_14_Template2, 2, 0, "ng-container", 10);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("options", ctx.carouselOptions);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.caseStudies);
    }
  }, dependencies: [CarouselModule, CarouselComponent, CarouselSlideDirective, CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaseStudy3Component2, [{
    type: Component,
    args: [{ selector: "app-case-study-3", imports: [CarouselModule, CommonModule, RouterLink], template: `<div class="casestudy-section-area sp1">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="casestudy-header heading4 text-center">
                    <h5 data-aos="fade-up" data-aos-duration="800">Case studies</h5>
                    <h2 class="tg-element-title">Electricity Unveiled Explaining Our Service Process</h2>
                    <p data-aos="fade-up" data-aos-duration="1000">Once we understand your requirements, our expert team
                        swings into action, customizing a solution that's tailored just for you.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
                <owl-carousel-o [options]="carouselOptions" class="casestudy-slider-area">
                    <ng-container *ngFor="let case of caseStudies">
                      <ng-template carouselSlide>
                        <div class="case-author-boxarea">
                          <div class="imges">
                            <img [src]="case.image" alt="">
                          </div>
                          <div class="case-content">
                            <div class="text">
                              <p>{{ case.subtitle }}</p>
                              <a routerLink="/case-study-single">{{ case.title }}</a>
                            </div>
                            <div class="icons">
                              <a routerLink="/case-study-single"><span><i class="fa-solid fa-arrow-right"></i></span></a>
                            </div>
                          </div>
                        </div>
                      </ng-template>
                    </ng-container>
                  </owl-carousel-o>
                  
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaseStudy3Component2, { className: "CaseStudy3Component", filePath: "src/app/views/demo/home-single-3/components/case-study-3/case-study-3.component.ts", lineNumber: 13 });
})();

// src/app/views/demo/home-single-3/components/testimonial-3/testimonial-3.component.ts
var _c012 = () => [];
function Testimonial3Component_div_38_li_2_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275elementEnd();
  }
}
function Testimonial3Component_div_38_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "ul", 27);
    \u0275\u0275template(2, Testimonial3Component_div_38_li_2_Template2, 2, 0, "li", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "p");
    \u0275\u0275text(5, "\u201CDiscover why our customers love us! At Current, we take pride in providing exceptional electricity services that exceed expectations. But don't just take our word for it - hear what our satisfied customers have to say. From homeowners\u201D");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 30)(7, "a", 31);
    \u0275\u0275text(8, "Junaid Hasan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Happy Client");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c012).constructor(5));
  }
}
var Testimonial3Component2 = class _Testimonial3Component {
  sliderForConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    nav: true,
    prevArrow: ".testimonial-next-arrow",
    nextArrow: ".testimonial-prev-arrow",
    fade: true,
    loop: true,
    asNavFor: ".slider-nav1"
  };
  sliderNavConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".foter-carousel",
    dots: false,
    arrows: true,
    nav: true,
    loop: true,
    centerMode: false,
    focusOnSelect: true,
    autoplay: true,
    autoplayTimeout: 500,
    prevArrow: ".testimonial-next-arrow",
    nextArrow: ".testimonial-prev-arrow"
  };
  static \u0275fac = function Testimonial3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Testimonial3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Testimonial3Component, selectors: [["app-testimonial-3"]], decls: 46, vars: 4, consts: [[1, "testimonial2-section-area", "sp1"], [1, "container"], [1, "row"], [1, "col-lg-4"], [1, "testimonial-header", "heading4"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/testimonials", 1, "header-btn3"], [1, "fa-solid", "fa-arrow-right"], ["data-aos", "zoom-out", "data-aos-duration", "1000", 1, "col-lg-8"], [1, "testimonial-sliders"], [1, "row", "align-items-center"], [1, "col-lg-4", "col-md-6"], [1, "teimonial-slider-nav-area", "foter-carousel", 3, "config"], ["ngxSlickItem", "", 1, "testimonial-slider-img"], ["src", "assets/img/all-images/testimonial-img6.png", "alt", ""], [1, "col-lg-8", "col-md-6"], [1, "testimonial-content-slider", "slider-nav1", 3, "config"], ["ngxSlickItem", "", "class", "testimonial-slider-boxarea", 4, "ngFor", "ngForOf"], [1, "testimonial-arrows"], [1, "testimonial-prev-arrow"], [1, "fa-solid", "fa-arrow-left"], [1, "testimonial-next-arrow"], ["ngxSlickItem", "", 1, "testimonial-slider-boxarea"], [1, "d-flex", "align-items-center", "gap-1", "flex-wrap"], [4, "ngFor", "ngForOf"], [1, "testimonial5-all-content"], [1, "content"], ["routerLink", "/our-team"], [1, "fa-solid", "fa-star"]], template: function Testimonial3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Testimonials");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Powerful Praise Hear from Our Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "From homeowners to businesses, ");
      \u0275\u0275element(11, "br", 8);
      \u0275\u0275text(12, " our clients have experienced the ");
      \u0275\u0275element(13, "br", 8);
      \u0275\u0275text(14, " reliability, affordability.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9)(16, "a", 10);
      \u0275\u0275text(17, "View all reviews ");
      \u0275\u0275element(18, "i", 11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 12)(20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "ngx-slick-carousel", 16)(24, "div", 17);
      \u0275\u0275element(25, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 17);
      \u0275\u0275element(27, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17);
      \u0275\u0275element(29, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 17);
      \u0275\u0275element(31, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 17);
      \u0275\u0275element(33, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 17);
      \u0275\u0275element(35, "img", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 19)(37, "ngx-slick-carousel", 20);
      \u0275\u0275template(38, Testimonial3Component_div_38_Template2, 11, 2, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 22)(40, "div", 23)(41, "button");
      \u0275\u0275element(42, "i", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 25)(44, "button");
      \u0275\u0275element(45, "i", 11);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275property("config", ctx.sliderForConfig);
      \u0275\u0275advance(14);
      \u0275\u0275property("config", ctx.sliderNavConfig);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c012).constructor(5));
    }
  }, dependencies: [SlickCarouselModule, SlickCarouselComponent, SlickItemDirective, CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Testimonial3Component2, [{
    type: Component,
    args: [{ selector: "app-testimonial-3", imports: [SlickCarouselModule, CommonModule, RouterLink], template: `<div class="testimonial2-section-area sp1">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="testimonial-header heading4">
                    <h5 data-aos="fade-left" data-aos-duration="800">Testimonials</h5>
                    <h2 class="tg-element-title">Powerful Praise Hear from Our Customers</h2>
                    <p data-aos="fade-left" data-aos-duration="1000">From homeowners to businesses, <br
                            class="d-lg-block d-none"> our clients have experienced the <br class="d-lg-block d-none">
                        reliability, affordability.</p>
                    <div class="btn-area" data-aos="fade-left" data-aos-duration="1200">
                        <a routerLink="/testimonials" class="header-btn3">View all reviews <i
                                class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-8" data-aos="zoom-out" data-aos-duration="1000">
                <div class="testimonial-sliders">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-md-6">
                            <ngx-slick-carousel class="teimonial-slider-nav-area foter-carousel"
                                [config]="sliderForConfig">
                                <div ngxSlickItem class="testimonial-slider-img">
                                    <img src="assets/img/all-images/testimonial-img6.png" alt="">
                                </div>
                                <div ngxSlickItem class="testimonial-slider-img">
                                    <img src="assets/img/all-images/testimonial-img6.png" alt="">
                                </div>
                                <div ngxSlickItem class="testimonial-slider-img">
                                    <img src="assets/img/all-images/testimonial-img6.png" alt="">
                                </div>
                                <div ngxSlickItem class="testimonial-slider-img">
                                    <img src="assets/img/all-images/testimonial-img6.png" alt="">
                                </div>
                                <div ngxSlickItem class="testimonial-slider-img">
                                    <img src="assets/img/all-images/testimonial-img6.png" alt="">
                                </div>
                                <div ngxSlickItem class="testimonial-slider-img">
                                    <img src="assets/img/all-images/testimonial-img6.png" alt="">
                                </div>
                            </ngx-slick-carousel>
                        </div>
                        <div class="col-lg-8 col-md-6">
                            <ngx-slick-carousel [config]="sliderNavConfig"
                                class="testimonial-content-slider slider-nav1">
                                <div *ngFor="let testimonial of [].constructor(5)" ngxSlickItem
                                    class="testimonial-slider-boxarea">
                                    <ul class="d-flex align-items-center gap-1 flex-wrap">
                                        <li *ngFor="let star of [].constructor(5)">
                                            <i class="fa-solid fa-star"></i>
                                        </li>
                                    </ul>
                                    <div class="testimonial5-all-content">
                                        <p>\u201CDiscover why our customers love us! At Current, we take pride in providing
                                            exceptional electricity services that exceed expectations. But don't just
                                            take our word for it - hear what our satisfied customers have to say. From
                                            homeowners\u201D</p>
                                    </div>
                                    <div class="content">
                                        <a routerLink="/our-team">Junaid Hasan</a>
                                        <p>Happy Client</p>
                                    </div>
                                </div>
                            </ngx-slick-carousel>
                            <div class="testimonial-arrows">
                                <div class="testimonial-prev-arrow">
                                    <button><i class="fa-solid fa-arrow-left"></i></button>
                                </div>
                                <div class="testimonial-next-arrow">
                                    <button><i class="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Testimonial3Component2, { className: "Testimonial3Component", filePath: "src/app/views/demo/home-single-3/components/testimonial-3/testimonial-3.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-single-3/components/team-3/team-3.component.ts
function Team3Component_div_12_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275element(3, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "a", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 15)(10, "div", 16)(11, "a", 17);
    \u0275\u0275element(12, "i", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 19)(14, "ul")(15, "li")(16, "a", 17);
    \u0275\u0275element(17, "i", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li")(19, "a", 17);
    \u0275\u0275element(20, "i", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "li")(22, "a", 17);
    \u0275\u0275element(23, "i", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "li")(25, "a", 17);
    \u0275\u0275element(26, "i", 23);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", member_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r1.role);
  }
}
var Team3Component2 = class _Team3Component {
  teamMembers = teamMembers6;
  static \u0275fac = function Team3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Team3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Team3Component, selectors: [["app-team-3"]], decls: 13, vars: 1, consts: [[1, "team2-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-6", "m-auto"], [1, "team-header", "heading4", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], ["class", "col-lg-4 col-md-6", "data-aos", "flip-right", "data-aos-duration", "800", 4, "ngFor", "ngForOf"], ["data-aos", "flip-right", "data-aos-duration", "800", 1, "col-lg-4", "col-md-6"], [1, "team-author-boxarea"], [1, "images"], ["alt", "", 3, "src"], [1, "content"], ["routerLink", "/our-team"], [1, "share-area"], [1, "icons"], ["href", "javascript:void(0)"], [1, "fa-solid", "fa-share-nodes"], [1, "list"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-linkedin-in"], [1, "fa-brands", "fa-pinterest-p"]], template: function Team3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Our Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Power Players Meet Our Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, " From our experienced technicians to our knowledgeable customer service representatives, each member of our team plays a crucial");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 2);
      \u0275\u0275template(12, Team3Component_div_12_Template2, 27, 3, "div", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.teamMembers);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Team3Component2, [{
    type: Component,
    args: [{ selector: "app-team-3", imports: [CommonModule, RouterLink], template: '<div class="team2-section-area sp2">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-6 m-auto">\n                <div class="team-header heading4 text-center">\n                    <h5 data-aos="fade-up" data-aos-duration="800">Our Team</h5>\n                    <h2 class="tg-element-title">Power Players Meet Our Team</h2>\n                    <p data-aos="fade-up" data-aos-duration="1000"> From our experienced technicians to our\n                        knowledgeable customer service representatives, each member of our team plays a crucial</p>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div *ngFor="let member of teamMembers" class="col-lg-4 col-md-6" data-aos="flip-right" data-aos-duration="800">                \n                <div class="team-author-boxarea">\n                    <div class="images">\n                        <img [src]="member.image" alt="">\n                    </div>\n                    <div class="content">\n                        <a routerLink="/our-team">{{member.name}}</a>\n                        <p>{{member.role}}</p>\n                    </div>\n                    <div class="share-area">\n                        <div class="icons">\n                            <a href="javascript:void(0)"><i class="fa-solid fa-share-nodes"></i></a>\n                        </div>\n                        <div class="list">\n                            <ul>\n                                <li><a href="javascript:void(0)"><i class="fa-brands fa-instagram"></i></a></li>\n                                <li><a href="javascript:void(0)"><i class="fa-brands fa-facebook-f"></i></a></li>\n                                <li><a href="javascript:void(0)"><i class="fa-brands fa-linkedin-in"></i></a></li>\n                                <li><a href="javascript:void(0)"><i class="fa-brands fa-pinterest-p"></i></a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Team3Component2, { className: "Team3Component", filePath: "src/app/views/demo/home-single-3/components/team-3/team-3.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-single-3/components/contact-3/contact-3.component.ts
var Contact3Component2 = class _Contact3Component {
  static \u0275fac = function Contact3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Contact3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Contact3Component, selectors: [["app-contact-3"]], decls: 89, vars: 0, consts: [[1, "contact2-section-area", "sp1", 2, "background-image", "url(assets/img/all-images/contact-bg2.png)", "background-position", "center", "background-position", "center", "background-repeat", "no-repeat", "background-size", "cover"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "contact-header-area", "heading2"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "space48"], [1, "row"], [1, "col-lg-6", "col-md-6"], ["data-aos", "fade-left", "data-aos-duration", "1000", 1, "contact-auhtor-side"], [1, "icons-text"], [1, "icons"], [1, "fa-solid", "fa-phone"], [1, "text"], ["href", "tel:1234567890"], [1, "fa-solid", "fa-location-dot"], [1, "space48", "d-md-none"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "contact-auhtor-side"], [1, "fa-solid", "fa-envelope"], ["href", "mailto:serebangle@gmail.com "], [1, "fa-brands", "fa-linkedin-in"], ["href", "javascript:void(0)"], ["data-aos", "zoom-in", "data-aos-duration", "1200", 1, "col-lg-6"], [1, "contact-submit-boxarea"], ["action", "https://api.web3forms.com/submit", "method", "POST"], ["type", "hidden", "name", "access_key", "value", "0cd32fff-eda2-4da3-be43-37d47fbb396b"], [1, "input-area"], ["type", "text", "placeholder", "Name", "required", ""], ["type", "number", "placeholder", "Phone", "required", ""], [1, "col-lg-12"], ["type", "email", "placeholder", "Email", "required", ""], ["placeholder", "Describe your inquiry", "cols", "30", "rows", "10", "required", ""], [1, "input-area1"], ["type", "checkbox", "required", ""], ["type", "submit", 1, "header-btn3"], [1, "fa-solid", "fa-arrow-right"]], template: function Contact3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Contact Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Illuminate Your Message Get in Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Have questions or ready to get started with our electricity services? Our team is here to help! Whether you're seeking.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "div", 8);
      \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13);
      \u0275\u0275element(17, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 15)(19, "p");
      \u0275\u0275text(20, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 16);
      \u0275\u0275text(22, "123 456 7890");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(23, "div", 8);
      \u0275\u0275elementStart(24, "div", 12)(25, "div", 13);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 15)(28, "p");
      \u0275\u0275text(29, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "a", 16);
      \u0275\u0275text(31, "8502 Preston Rd. Inglewoo ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(32, "div", 10);
      \u0275\u0275element(33, "div", 18);
      \u0275\u0275elementStart(34, "div", 19)(35, "div", 12)(36, "div", 13);
      \u0275\u0275element(37, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 15)(39, "p");
      \u0275\u0275text(40, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "a", 21);
      \u0275\u0275text(42, "serebangle@gmail.com ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(43, "div", 8);
      \u0275\u0275elementStart(44, "div", 12)(45, "div", 13);
      \u0275\u0275element(46, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 15)(48, "p");
      \u0275\u0275text(49, "Linkedin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "a", 23);
      \u0275\u0275text(51, "Fleexstudio");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(52, "div", 24)(53, "div", 25)(54, "h4");
      \u0275\u0275text(55, "Request A Quote");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "form", 26);
      \u0275\u0275element(57, "input", 27);
      \u0275\u0275elementStart(58, "div", 9)(59, "div", 3)(60, "div", 28)(61, "p");
      \u0275\u0275text(62, "Name (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "input", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 3)(65, "div", 28)(66, "p");
      \u0275\u0275text(67, "Number (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(68, "input", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 31)(70, "div", 28)(71, "p");
      \u0275\u0275text(72, "Email (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(73, "input", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 31)(75, "div", 28)(76, "p");
      \u0275\u0275text(77, "Additional Details (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "textarea", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 31)(80, "div", 34);
      \u0275\u0275element(81, "input", 35);
      \u0275\u0275elementStart(82, "p");
      \u0275\u0275text(83, "I agree with the site privacy policy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div", 31)(85, "div", 34)(86, "button", 36);
      \u0275\u0275text(87, "Submit Now ");
      \u0275\u0275element(88, "i", 37);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Contact3Component2, [{
    type: Component,
    args: [{ selector: "app-contact-3", imports: [], template: `<div class="contact2-section-area sp1"
    style="background-image: url(assets/img/all-images/contact-bg2.png); background-position: center; background-position: center; background-repeat: no-repeat; background-size: cover;">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="contact-header-area heading2">
                    <h5 data-aos="fade-left" data-aos-duration="800">Contact Us</h5>
                    <h2 class="tg-element-title">Illuminate Your Message Get in Contact</h2>
                    <p data-aos="fade-left" data-aos-duration="1000">Have questions or ready to get started with our
                        electricity services? Our team is here to help! Whether you're seeking.</p>
                    <div class="space48"></div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="contact-auhtor-side" data-aos="fade-left" data-aos-duration="1000">
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
                                        <a href="tel:1234567890">8502 Preston Rd. Inglewoo </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6">
                            <div class="space48 d-md-none"></div>
                            <div class="contact-auhtor-side" data-aos="fade-left" data-aos-duration="1200">
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

            <div class="col-lg-6" data-aos="zoom-in" data-aos-duration="1200">
                <div class="contact-submit-boxarea">
                    <h4>Request A Quote</h4>
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="0cd32fff-eda2-4da3-be43-37d47fbb396b">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="input-area">
                                    <p>Name (required)</p>
                                    <input type="text" placeholder="Name" required>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="input-area">
                                    <p>Number (required)</p>
                                    <input type="number" placeholder="Phone" required>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="input-area">
                                    <p>Email (required)</p>
                                    <input type="email" placeholder="Email" required>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="input-area">
                                    <p>Additional Details (Optional)</p>
                                    <textarea placeholder="Describe your inquiry" cols="30" rows="10"
                                        required></textarea>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="input-area1">
                                    <input type="checkbox" required>
                                    <p>I agree with the site privacy policy</p>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="input-area1">
                                    <button type="submit" class="header-btn3">Submit Now <i
                                            class="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Contact3Component2, { className: "Contact3Component", filePath: "src/app/views/demo/home-single-3/components/contact-3/contact-3.component.ts", lineNumber: 9 });
})();

// src/app/views/demo/home-single-3/components/faq-3/faq-3.component.ts
function Faq3Component_For_21_div_7_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 22);
  }
}
function Faq3Component_For_21_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h2", 17)(2, "button", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, Faq3Component_For_21_div_7_Template2, 1, 0, "div", 21);
  }
  if (rf & 2) {
    const faq_r1 = ctx.$implicit;
    const \u0275$index_37_r2 = ctx.$index;
    const \u0275$count_37_r3 = ctx.$count;
    \u0275\u0275property("collapsed", \u0275$index_37_r2 === 0 ? false : true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", faq_r1.question, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r1.answer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(\u0275$index_37_r2 === \u0275$count_37_r3 - 1));
  }
}
var Faq3Component2 = class _Faq3Component {
  faqs = faqs4;
  static \u0275fac = function Faq3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Faq3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Faq3Component, selectors: [["app-faq-3"]], decls: 22, vars: 1, consts: [[1, "faq2-section-area", "sp1"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-7", "m-auto"], [1, "faq-header-area", "heading4", "text-center"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], [1, "row"], ["data-aos", "zoom-in", "data-aos-duration", "1000", 1, "col-lg-6"], [1, "faq-images"], ["src", "assets/img/all-images/faq-img1.png", "alt", ""], [1, "col-lg-6"], [1, "faq-auhtor-area1"], ["ngbAccordion", "", "id", "accordionFlushExample", 1, "accordion-flush", 3, "closeOthers"], ["ngbAccordionItem", "", "data-aos", "fade-left", "data-aos-duration", "800", 3, "collapsed"], ["ngbAccordionHeader", ""], ["ngbAccordionButton", "", "type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseOne", "aria-expanded", "false", "aria-controls", "flush-collapseOne"], ["ngbAccordionCollapse", "", "id", "flush-collapseOne", "data-bs-parent", "#accordionFlushExample"], ["ngbAccordionBody", ""], ["class", "space20", 4, "ngIf"], [1, "space20"]], template: function Faq3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "FAQ\u2019S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Frequently Best Asked Question?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Take a look at our FAQ section below, and if you don't find the ");
      \u0275\u0275element(11, "br", 8);
      \u0275\u0275text(12, " answer you're looking for, feel free to reach.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "div", 11);
      \u0275\u0275element(16, "img", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "div", 15);
      \u0275\u0275repeaterCreate(20, Faq3Component_For_21_Template2, 8, 4, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275property("closeOthers", true);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.faqs);
    }
  }, dependencies: [NgbAccordionModule, NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionBody, NgbAccordionCollapse, CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Faq3Component2, [{
    type: Component,
    args: [{ selector: "app-faq-3", imports: [NgbAccordionModule, CommonModule], template: `<div class="faq2-section-area sp1">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7 m-auto">
                <div class="faq-header-area heading4 text-center">
                    <h5 data-aos="fade-left" data-aos-duration="800">FAQ\u2019S</h5>
                    <h2 class="tg-element-title">Frequently Best Asked Question?</h2>
                    <p data-aos="fade-left" data-aos-duration="1000">Take a look at our FAQ section below, and if you
                        don't find the <br class="d-lg-block d-none"> answer you're looking for, feel free to reach.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6" data-aos="zoom-in" data-aos-duration="1000">
                <div class="faq-images">
                    <img src="assets/img/all-images/faq-img1.png" alt="">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="faq-auhtor-area1">
                    <div  ngbAccordion [closeOthers]="true" class="accordion-flush" id="accordionFlushExample">
                        @for (faq of faqs; track $index;let first=$first;let id=$index;let last=$last) {
                            <div  ngbAccordionItem [collapsed]="first ? false : true"  data-aos="fade-left" data-aos-duration="800">
                                <h2 ngbAccordionHeader>
                                    <button ngbAccordionButton type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                      {{faq.question}}
                                    </button>
                                </h2>
                                <div ngbAccordionCollapse id="flush-collapseOne"
                                    data-bs-parent="#accordionFlushExample">
                                    <div ngbAccordionBody>{{faq.answer}}</div>
                                </div>
                            </div>
                            <div *ngIf="!last" class="space20"></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Faq3Component2, { className: "Faq3Component", filePath: "src/app/views/demo/home-single-3/components/faq-3/faq-3.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-single-3/components/blogs-3/blogs-3.component.ts
var Blogs3Component2 = class _Blogs3Component {
  static \u0275fac = function Blogs3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Blogs3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Blogs3Component, selectors: [["app-blogs-3"]], decls: 68, vars: 0, consts: [[1, "blog2-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-6", "m-auto"], [1, "blog-header", "heading4", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "800"], ["data-aos", "fade-up", "data-aos-duration", "1000"], ["data-aos", "flip-left", "data-aos-duration", "800", 1, "col-lg-5", "col-md-6"], [1, "blog-auhtor-boxarea"], [1, "img1"], ["src", "assets/img/all-images/blog-img4.png", "alt", ""], [1, "blog-content-area"], ["href", "javascript:void(0)"], [1, "fa-solid", "fa-calendar-days"], [1, "fa-solid", "fa-tag"], ["routerLink", "/blogs/single", 1, "heading"], ["routerLink", "/blogs/single", 1, "learnmore"], [1, "fa-solid", "fa-arrow-right"], ["data-aos", "flip-right", "data-aos-duration", "1000", 1, "col-lg-7", "col-md-6"], [1, "blog-box2"], ["src", "assets/img/all-images/blog-img5.png", "alt", ""], ["src", "assets/img/all-images/blog-img6.png", "alt", ""]], template: function Blogs3Component_Template(rf, ctx) {
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
      \u0275\u0275elementStart(11, "div", 2)(12, "div", 7)(13, "div", 8)(14, "div", 9);
      \u0275\u0275element(15, "img", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 11)(17, "ul")(18, "li")(19, "a", 12);
      \u0275\u0275element(20, "i", 13);
      \u0275\u0275text(21, "April 2,2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 12);
      \u0275\u0275element(24, "i", 14);
      \u0275\u0275text(25, "Electricity Corner");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "a", 15);
      \u0275\u0275text(27, "Electrifying Reads Explore Our Electricity ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 16);
      \u0275\u0275text(29, "Learn more ");
      \u0275\u0275element(30, "i", 17);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "div", 18)(32, "div", 19)(33, "div", 9);
      \u0275\u0275element(34, "img", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 11)(36, "ul")(37, "li")(38, "a", 12);
      \u0275\u0275element(39, "i", 13);
      \u0275\u0275text(40, "April 2,2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 12);
      \u0275\u0275element(43, "i", 14);
      \u0275\u0275text(44, "Electricity Corner");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "a", 15);
      \u0275\u0275text(46, "Electrifying Reads Explore Our Electricity ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "a", 16);
      \u0275\u0275text(48, "Learn more ");
      \u0275\u0275element(49, "i", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 19)(51, "div", 9);
      \u0275\u0275element(52, "img", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 11)(54, "ul")(55, "li")(56, "a", 12);
      \u0275\u0275element(57, "i", 13);
      \u0275\u0275text(58, "April 2,2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "li")(60, "a", 12);
      \u0275\u0275element(61, "i", 14);
      \u0275\u0275text(62, "Electricity Corner");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "a", 15);
      \u0275\u0275text(64, "Electrifying Reads Explore Our Electricity ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "a", 16);
      \u0275\u0275text(66, "Learn more ");
      \u0275\u0275element(67, "i", 17);
      \u0275\u0275elementEnd()()()()()()();
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Blogs3Component2, [{
    type: Component,
    args: [{ selector: "app-blogs-3", imports: [RouterLink], template: '<div class="blog2-section-area sp2">\n    <div class="container">\n      <div class="row">\n        <div class="col-lg-6 m-auto">\n          <div class="blog-header heading4 text-center">\n            <h5 data-aos="fade-up" data-aos-duration="800">Our Blog</h5>\n            <h2> Electricity News & Updates</h2>\n            <p data-aos="fade-up" data-aos-duration="1000">From residential households to commercial enterprises, we provide reliable, efficient, and sustainable energy solutions.</p>\n          </div>\n        </div>\n      </div>\n  \n      <div class="row">\n        <div class="col-lg-5 col-md-6" data-aos="flip-left" data-aos-duration="800">\n          <div class="blog-auhtor-boxarea">\n            <div class="img1">\n              <img src="assets/img/all-images/blog-img4.png" alt="">\n            </div>\n             <div class="blog-content-area">\n              <ul>\n                <li><a href="javascript:void(0)"><i class="fa-solid fa-calendar-days"></i>April 2,2024</a></li>\n                <li><a href="javascript:void(0)"><i class="fa-solid fa-tag"></i>Electricity Corner</a></li>\n              </ul>\n              <a routerLink="/blogs/single" class="heading">Electrifying Reads Explore Our Electricity </a>\n              <a routerLink="/blogs/single" class="learnmore">Learn more <i class="fa-solid fa-arrow-right"></i></a>\n             </div>\n          </div>\n        </div>\n  \n        <div class="col-lg-7 col-md-6" data-aos="flip-right" data-aos-duration="1000">\n          <div class=" blog-box2">\n            <div class="img1">\n              <img src="assets/img/all-images/blog-img5.png" alt="">\n            </div>\n             <div class="blog-content-area">\n              <ul>\n                <li><a href="javascript:void(0)"><i class="fa-solid fa-calendar-days"></i>April 2,2024</a></li>\n                <li><a href="javascript:void(0)"><i class="fa-solid fa-tag"></i>Electricity Corner</a></li>\n              </ul>\n              <a routerLink="/blogs/single" class="heading">Electrifying Reads Explore Our Electricity </a>\n              <a routerLink="/blogs/single" class="learnmore">Learn more <i class="fa-solid fa-arrow-right"></i></a>\n            </div>\n          </div>\n  \n          <div class="blog-box2">\n            <div class="img1">\n              <img src="assets/img/all-images/blog-img6.png" alt="">\n            </div>\n             <div class="blog-content-area">\n              <ul>\n                <li><a href="javascript:void(0)"><i class="fa-solid fa-calendar-days"></i>April 2,2024</a></li>\n                <li><a href="javascript:void(0)"><i class="fa-solid fa-tag"></i>Electricity Corner</a></li>\n              </ul>\n              <a routerLink="/blogs/single" class="heading">Electrifying Reads Explore Our Electricity </a>\n              <a routerLink="/blogs/single" class="learnmore">Learn more <i class="fa-solid fa-arrow-right"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Blogs3Component2, { className: "Blogs3Component", filePath: "src/app/views/demo/home-single-3/components/blogs-3/blogs-3.component.ts", lineNumber: 10 });
})();

// src/app/views/demo/home-single-3/home-single-3.component.ts
var HomeSingle3Component = class _HomeSingle3Component {
  static \u0275fac = function HomeSingle3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeSingle3Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeSingle3Component, selectors: [["app-home-single-3"]], decls: 12, vars: 0, consts: [[1, "homepage2-body", "tg-heading-subheading", "animation-style3"], ["id", "about"], ["id", "services"], ["id", "case-study"], ["id", "testimonials"], ["id", "team"], ["id", "blogs"], ["btnClass", "header-btn3", "containerClass", "footer2-section-area", "logo", "assets/img/logo/logo3.png"]], template: function HomeSingle3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-single-header-3")(2, "app-hero-3")(3, "app-about-3", 1)(4, "app-service-3", 2)(5, "app-case-study-3", 3)(6, "app-testimonial-3", 4)(7, "app-team-3", 5)(8, "app-contact-3")(9, "app-faq-3")(10, "app-blogs-3", 6)(11, "app-footer-2", 7);
      \u0275\u0275elementEnd();
    }
  }, dependencies: [SingleHeader3Component, Hero3Component2, About3Component2, Service3Component2, CaseStudy3Component2, Testimonial3Component2, Team3Component2, Contact3Component2, Faq3Component2, Blogs3Component2, Footer2Component], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeSingle3Component, [{
    type: Component,
    args: [{ selector: "app-home-single-3", imports: [SingleHeader3Component, Hero3Component2, About3Component2, Service3Component2, CaseStudy3Component2, Testimonial3Component2, Team3Component2, Contact3Component2, Faq3Component2, Blogs3Component2, Footer2Component], template: '<div class="homepage2-body tg-heading-subheading animation-style3">\n    <app-single-header-3 />\n    <app-hero-3 />\n    <app-about-3 id="about"/>\n    <app-service-3 id="services"/>\n    <app-case-study-3 id="case-study"/>\n    <app-testimonial-3 id="testimonials"/>\n    <app-team-3 id="team"/>\n    <app-contact-3 />\n    <app-faq-3 />\n    <app-blogs-3 id="blogs"/>\n    <app-footer-2 btnClass="header-btn3" containerClass="footer2-section-area" logo="assets/img/logo/logo3.png"/>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeSingle3Component, { className: "HomeSingle3Component", filePath: "src/app/views/demo/home-single-3/home-single-3.component.ts", lineNumber: 20 });
})();

// src/app/views/demo/home-single-4/components/single-header-4/single-header-4.component.ts
var _c013 = (a0) => ({ "mobile-menu-active": a0 });
function SingleHeader4Component_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 47);
    \u0275\u0275listener("click", function SingleHeader4Component_li_12_Template_li_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scroll.scrollTo(item_r2));
    });
    \u0275\u0275elementStart(1, "a", 48)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.scroll.activeSection === item_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.toSentenceCase(item_r2));
  }
}
function SingleHeader4Component_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-mobile-nav-item-2", 49);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("item", item_r4);
  }
}
var SingleHeader4Component = class _SingleHeader4Component {
  isMenuOpen = false;
  menuItems = ["about", "services", "case study", "testimonials", "team", "blogs"];
  scroll = inject(ScrollService);
  ngOnInit() {
    this.scroll.setSections(this.menuItems);
  }
  toSentenceCase(text) {
    if (!text)
      return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  navItems = [
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
            { "title": "Home Four", "link": "/home-4" },
            { "title": "Home Five", "link": "/home-5" }
          ]
        },
        {
          title: "Landing page",
          subMenu: [
            { "title": "Home One", "link": "/home-single-1" },
            { "title": "Home Two", "link": "/home-single-2" },
            { "title": "Home Three", "link": "/home-single-3" },
            { "title": "Home Four", "link": "/home-single-4" },
            { "title": "Home Five", "link": "/home-single-5" }
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
      "link": "/services"
    },
    {
      "title": "case-study",
      "link": "/case-study"
    },
    {
      "title": "Testimonials",
      "link": "/testimonials"
    },
    {
      "title": "Team",
      "link": "/team"
    },
    {
      "title": "Blogs",
      "link": "/blogs"
    }
  ];
  static \u0275fac = function SingleHeader4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SingleHeader4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SingleHeader4Component, selectors: [["app-single-header-4"]], decls: 83, vars: 5, consts: [["id", "header", "stickyScroll", "", 1, "header-area", "homepage3", "header", "header-sticky", "d-none", "d-lg-block"], [1, "container"], [1, "row"], [1, "col-lg-12"], ["id", "navbar-example2", 1, "navbar"], [1, "header-elements"], [1, "site-logo"], ["routerLink", "/home-single-4"], ["src", "assets/img/logo/logo4.png", "alt", ""], [1, "main-menu"], ["class", "nav-item cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "btn-area"], ["routerLink", "/contact-us", 1, "header-btn5"], [1, "fa-solid", "fa-arrow-right"], [1, "mobile-header", "mobile-haeder3", "d-block", "d-lg-none"], [1, "container-fluid"], [1, "col-12"], [1, "mobile-header-elements"], [1, "mobile-logo"], ["src", "assets/img/logo/logo5.png", "alt", ""], [1, "mobile-nav-icon", "dots-menu", 3, "click"], [1, "fa-solid", "fa-bars"], [1, "mobile-sidebar", "mobile-sidebar3", 3, "ngClass"], [1, "logosicon-area"], [1, "logos"], [1, "menu-close", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "mobile-nav", "mobile-nav1"], [1, "mobile-nav-list", "nav-list1"], [4, "ngFor", "ngForOf"], [1, "allmobilesection"], [1, "single-footer"], [1, "footer1-contact-info"], [1, "contact-info-single"], [1, "contact-info-icon"], [1, "fa-solid", "fa-phone-volume"], [1, "contact-info-text"], ["href", "tel:+3(924)4596512"], [1, "fa-solid", "fa-envelope"], ["href", "mailto:info@example.com"], [1, "fa-solid", "fa-location-dot"], [1, "social-links-mobile-menu"], ["href", "javascript:void(0)"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-linkedin-in"], [1, "fa-brands", "fa-youtube"], [1, "nav-item", "cursor-pointer", 3, "click"], [1, "nav-link"], [3, "item"]], template: function SingleHeader4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "nav", 4)(6, "div", 5)(7, "div", 6)(8, "a", 7);
      \u0275\u0275element(9, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 9)(11, "ul");
      \u0275\u0275template(12, SingleHeader4Component_li_12_Template, 4, 3, "li", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 11)(14, "a", 12);
      \u0275\u0275text(15, "Contact Us ");
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "div", 17)(21, "div", 18)(22, "a", 7);
      \u0275\u0275element(23, "img", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 20);
      \u0275\u0275listener("click", function SingleHeader4Component_Template_div_click_24_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275element(25, "i", 21);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(26, "div", 22)(27, "div", 23)(28, "div", 24);
      \u0275\u0275element(29, "img", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 25);
      \u0275\u0275listener("click", function SingleHeader4Component_Template_div_click_30_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275element(31, "i", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 27)(33, "ul", 28);
      \u0275\u0275template(34, SingleHeader4Component_ng_container_34_Template, 2, 1, "ng-container", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 30)(36, "a", 12);
      \u0275\u0275text(37, "Get Started ");
      \u0275\u0275element(38, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 31)(40, "h3");
      \u0275\u0275text(41, "Contact Info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 32)(43, "div", 33)(44, "div", 34);
      \u0275\u0275element(45, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 36)(47, "a", 37);
      \u0275\u0275text(48, "+3(924)4596512");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 33)(50, "div", 34);
      \u0275\u0275element(51, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 36)(53, "a", 39);
      \u0275\u0275text(54, "info@example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 31)(56, "h3");
      \u0275\u0275text(57, "Our Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 33)(59, "div", 34);
      \u0275\u0275element(60, "i", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 36)(62, "a", 39);
      \u0275\u0275text(63, "55 East Birchwood Ave.Brooklyn, ");
      \u0275\u0275element(64, "br");
      \u0275\u0275text(65, " New York 11201,United States");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div", 31)(67, "h3");
      \u0275\u0275text(68, "Social Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 41)(70, "ul")(71, "li")(72, "a", 42);
      \u0275\u0275element(73, "i", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li")(75, "a", 42);
      \u0275\u0275element(76, "i", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "li")(78, "a", 42);
      \u0275\u0275element(79, "i", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li")(81, "a", 42);
      \u0275\u0275element(82, "i", 46);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.menuItems);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c013, ctx.isMenuOpen));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.navItems);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, StickyScrollDirective, MobileNavItem2Component, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SingleHeader4Component, [{
    type: Component,
    args: [{ selector: "app-single-header-4", imports: [CommonModule, StickyScrollDirective, MobileNavItem2Component, RouterLink], template: `<header>
    <div class="header-area homepage3 header header-sticky d-none d-lg-block " id="header" stickyScroll>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <nav id="navbar-example2" class="navbar">
                        <div class="header-elements">
                            <div class="site-logo">
                                <a routerLink="/home-single-4"><img src="assets/img/logo/logo4.png" alt=""></a>
                            </div>
                            <div class="main-menu">
                                <ul>
                                    <li *ngFor="let item of menuItems" (click)="scroll.scrollTo(item)"
                                        class="nav-item cursor-pointer"><a
                                            [class.active]="scroll.activeSection === item"
                                            class="nav-link"><span>{{toSentenceCase(item)}}</span></a></li>
                                </ul>
                            </div>
                            <div class="btn-area">
                                <a routerLink="/contact-us" class="header-btn5">Contact Us <i
                                        class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>

<div class="mobile-header mobile-haeder3 d-block d-lg-none">
    <div class="container-fluid">
        <div class="col-12">
            <div class="mobile-header-elements">
                <div class="mobile-logo">
                    <a routerLink="/home-single-4"><img src="assets/img/logo/logo5.png" alt=""></a>
                </div>
                <div class="mobile-nav-icon dots-menu" (click)="toggleMenu()">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="mobile-sidebar mobile-sidebar3" [ngClass]="{ 'mobile-menu-active': isMenuOpen }">
    <div class="logosicon-area">
        <div class="logos">
            <img src="assets/img/logo/logo5.png" alt="">
        </div>
        <div class="menu-close" (click)="closeMenu()">
            <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
    <div class="mobile-nav mobile-nav1">
        <ul class="mobile-nav-list nav-list1">
            <ng-container *ngFor="let item of navItems;">
                <app-mobile-nav-item-2 [item]="item"></app-mobile-nav-item-2>
            </ng-container>
        </ul>

        <div class="allmobilesection">
            <a routerLink="/contact-us" class="header-btn5">Get Started <i class="fa-solid fa-arrow-right"></i></a>
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
                                <a href="mailto:info@example.com">55 East Birchwood Ave.Brooklyn, <br> New York
                                    11201,United States</a>
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SingleHeader4Component, { className: "SingleHeader4Component", filePath: "src/app/views/demo/home-single-4/components/single-header-4/single-header-4.component.ts", lineNumber: 14 });
})();

// src/app/views/demo/home-single-4/components/hero-4/hero-4.component.ts
var Hero4Component2 = class _Hero4Component {
  static \u0275fac = function Hero4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Hero4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Hero4Component, selectors: [["app-hero-4"]], decls: 26, vars: 0, consts: [[1, "hero3-section-area"], ["src", "assets/img/elements/tower1.png", "alt", "", 1, "tower1", "aniamtion-key-1"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "hero-header-area", "heading5"], [1, "tg-element-title"], [1, "btn-area"], ["routerLink", "/contact-us", 1, "header-btn5"], [1, "fa-solid", "fa-arrow-right"], ["routerLink", "/contact-us", 1, "header-btn6"], [1, "header-images-area"], [1, "header-img"], ["src", "assets/img/all-images/header-img5.png", "alt", ""], [1, "shapes"], ["src", "assets/img/elements/arrow1.png", "alt", "", 1, "arrow1", "aniamtion-key-8"], ["src", "assets/img/elements/lite1.png", "alt", "", 1, "lite1"]], template: function Hero4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5");
      \u0275\u0275text(7, "Current Electricity Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h1", 6);
      \u0275\u0275text(9, "Electricity Services Connected Powered");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p");
      \u0275\u0275text(11, "Whether you're a homeowner, business owner, or community leader, a we're here to light up your life with sustainable energy solutions.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7)(13, "a", 8);
      \u0275\u0275text(14, "Get a Free Estimate ");
      \u0275\u0275element(15, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 10);
      \u0275\u0275text(17, "Discover More ");
      \u0275\u0275element(18, "i", 9);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 4)(20, "div", 11)(21, "div", 12);
      \u0275\u0275element(22, "img", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 14);
      \u0275\u0275element(24, "img", 15)(25, "img", 16);
      \u0275\u0275elementEnd()()()()()();
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Hero4Component2, [{
    type: Component,
    args: [{ selector: "app-hero-4", imports: [RouterLink], template: `<div class="hero3-section-area">
    <img src="assets/img/elements/tower1.png" alt="" class="tower1 aniamtion-key-1">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="hero-header-area heading5">
                    <h5>Current Electricity Services</h5>
                    <h1 class="tg-element-title">Electricity Services Connected Powered</h1>
                    <p>Whether you're a homeowner, business owner, or community leader, a we're here to light up your
                        life with sustainable energy solutions.</p>
                    <div class="btn-area">
                        <a routerLink="/contact-us" class="header-btn5">Get a Free Estimate <i
                                class="fa-solid fa-arrow-right"></i></a>
                        <a routerLink="/contact-us" class="header-btn6">Discover More <i
                                class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="header-images-area">
                    <div class="header-img">
                        <img src="assets/img/all-images/header-img5.png" alt="">
                    </div>
                    <div class="shapes">
                        <img src="assets/img/elements/arrow1.png" alt="" class="arrow1 aniamtion-key-8">
                        <img src="assets/img/elements/lite1.png" alt="" class="lite1">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Hero4Component2, { className: "Hero4Component", filePath: "src/app/views/demo/home-single-4/components/hero-4/hero-4.component.ts", lineNumber: 10 });
})();

// src/app/views/demo/home-single-4/components/about-4/about-4.component.ts
var About4Component2 = class _About4Component {
  static \u0275fac = function About4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _About4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _About4Component, selectors: [["app-about-4"]], decls: 47, vars: 0, consts: [[1, "about3-section-area", "sp1"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-5"], [1, "about3-header-area", "heading6"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], ["data-aos", "fade-left", "data-aos-duration", "1100", 1, "misson-text"], ["src", "assets/img/icons/check3.svg", "alt", ""], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "btn-area"], ["routerLink", "/services/one", 1, "header-btn5"], [1, "fa-solid", "fa-arrow-right"], [1, "col-lg-1"], [1, "col-lg-6"], [1, "about-images-area"], [1, "row"], [1, "col-lg-6", "col-md-6"], ["data-aos", "zoom-in", "data-aos-duration", "1000", 1, "img1"], [1, "space70", "d-md-block", "d-none"], [1, "space30", "d-md-none", "d-block"], ["src", "assets/img/all-images/about-img5.png", "alt", ""], ["data-aos", "zoom-in", "data-aos-duration", "1200", 1, "img1"], ["src", "assets/img/all-images/about-img6.png", "alt", ""], [1, "about-footer-bottom"], [1, "img"], ["src", "assets/img/icons/star1.svg", "alt", ""], [1, "content"]], template: function About4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Who Are We");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Energize Your Knowledge Get to Know Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "With a commitment to sustainability, innovation, and customer satisfaction, we strive to provide reliable, efficient, and eco-friendly electricity services to homes, businesses.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "p");
      \u0275\u0275text(13, "Our Mission");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "ul")(15, "li");
      \u0275\u0275element(16, "img", 9);
      \u0275\u0275text(17, "Established fact that a reader will be distracted.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "li");
      \u0275\u0275element(19, "img", 9);
      \u0275\u0275text(20, "Sed ut perspiciatis unde omnis iste natus sit.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "li");
      \u0275\u0275element(22, "img", 9);
      \u0275\u0275text(23, "Trusted Electrical Services");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 10)(25, "a", 11);
      \u0275\u0275text(26, "View All Service ");
      \u0275\u0275element(27, "i", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(28, "div", 13);
      \u0275\u0275elementStart(29, "div", 14)(30, "div", 15)(31, "div", 16)(32, "div", 17)(33, "div", 18);
      \u0275\u0275element(34, "div", 19)(35, "div", 20)(36, "img", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 17)(38, "div", 22);
      \u0275\u0275element(39, "div", 20)(40, "img", 23);
      \u0275\u0275elementStart(41, "div", 24)(42, "div", 25);
      \u0275\u0275element(43, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 27)(45, "span");
      \u0275\u0275text(46, "Approved Best Electricity ");
      \u0275\u0275elementEnd()()()()()()()()()()();
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(About4Component2, [{
    type: Component,
    args: [{ selector: "app-about-4", imports: [RouterLink], template: '<div class="about3-section-area sp1">\n    <div class="container">\n        <div class="row align-items-center">\n            <div class="col-lg-5">\n                <div class="about3-header-area heading6">\n                    <h5 data-aos="fade-left" data-aos-duration="800">Who Are We</h5>\n                    <h2 class="tg-element-title">Energize Your Knowledge Get to Know Us</h2>\n                    <p data-aos="fade-left" data-aos-duration="1000">With a commitment to sustainability, innovation,\n                        and customer satisfaction, we strive to provide reliable, efficient, and eco-friendly\n                        electricity services to homes, businesses.</p>\n                    <div class="misson-text" data-aos="fade-left" data-aos-duration="1100">\n                        <p>Our Mission</p>\n                        <ul>\n                            <li><img src="assets/img/icons/check3.svg" alt="">Established fact that a reader will be\n                                distracted.</li>\n                            <li><img src="assets/img/icons/check3.svg" alt="">Sed ut perspiciatis unde omnis iste natus\n                                sit.</li>\n                            <li><img src="assets/img/icons/check3.svg" alt="">Trusted Electrical Services</li>\n                        </ul>\n                    </div>\n                    <div class="btn-area" data-aos="fade-left" data-aos-duration="1200">\n                        <a routerLink="/services/one" class="header-btn5">View All Service <i\n                                class="fa-solid fa-arrow-right"></i></a>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-1"></div>\n            <div class="col-lg-6">\n                <div class="about-images-area">\n                    <div class="row">\n                        <div class="col-lg-6 col-md-6">\n                            <div class="img1" data-aos="zoom-in" data-aos-duration="1000">\n                                <div class="space70 d-md-block d-none"></div>\n                                <div class="space30 d-md-none d-block"></div>\n                                <img src="assets/img/all-images/about-img5.png" alt="">\n                            </div>\n                        </div>\n                        <div class="col-lg-6 col-md-6">\n                            <div class="img1" data-aos="zoom-in" data-aos-duration="1200">\n                                <div class="space30 d-md-none d-block"></div>\n                                <img src="assets/img/all-images/about-img6.png" alt="">\n                                <div class="about-footer-bottom">\n                                    <div class="img">\n                                        <img src="assets/img/icons/star1.svg" alt="">\n                                    </div>\n                                    <div class="content">\n                                        <span>Approved Best Electricity </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(About4Component2, { className: "About4Component", filePath: "src/app/views/demo/home-single-4/components/about-4/about-4.component.ts", lineNumber: 10 });
})();

// src/app/views/demo/home-single-4/components/data.ts
var services4 = [
  {
    id: 1,
    icon: "assets/img/icons/service-icons4.svg",
    title: "Bright Beam Services",
    description: "Our services encompass everything from residential energy solutions to commercial power management.",
    duration: 800
  },
  {
    id: 2,
    icon: "assets/img/icons/service-icons5.svg",
    title: "Renewable Energy Plans",
    description: "With cutting-edge technology and industry expertise, we empower our customers to make informed.",
    duration: 1e3
  },
  {
    id: 3,
    icon: "assets/img/icons/service-icons6.svg",
    title: "Current Control Plans",
    description: "Whether you're looking for reliable electricity supply, energy-efficient solutions, or renewable energy.",
    duration: 1200
  },
  {
    id: 4,
    icon: "assets/img/icons/service-icons7.svg",
    title: "Electra Care Solutions",
    description: "We have you covered. Our team of experts is committed to delivering high-quality services prioritize.",
    duration: 800
  },
  {
    id: 5,
    icon: "assets/img/icons/service-icons8.svg",
    title: "Electra Works Solutions",
    description: "Explore our range of services below and discover how we can help you power your life, business, and future.",
    duration: 1e3
  },
  {
    id: 6,
    icon: "assets/img/icons/service-icons9.svg",
    title: "Efficiency First Services",
    description: "We empower our customers to make informed decisions about their energy needs and optimize their.",
    duration: 1200
  }
];
var cases2 = [
  {
    image: "assets/img/all-images/case-img4.png",
    title: "Powerful Transformations",
    subtitle: "Electricity & Current",
    duration: 800
  },
  {
    image: "assets/img/all-images/case-img5.png",
    title: "Current Chronicles",
    subtitle: "Electricity & Current",
    duration: 1e3
  },
  {
    image: "assets/img/all-images/case-img6.png",
    title: "Electrifying Experiences",
    subtitle: "Electricity & Current",
    duration: 1200
  }
];
var testimonials4 = [
  {
    image: "assets/img/all-images/testimonial-img7.png",
    name: "Dhruv Jerel",
    role: "Scheduler",
    description: "From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn"
  },
  {
    image: "assets/img/all-images/testimonial-img8.png",
    name: "Alex Ross",
    role: "Demand Planner",
    description: "From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn"
  },
  {
    image: "assets/img/all-images/testimonial-img9.png",
    name: "Tim Witsel",
    role: "Logistics Officer",
    description: "From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn"
  },
  {
    image: "assets/img/all-images/testimonial-img7.png",
    name: "Dhruv Jerel",
    role: "Scheduler",
    description: "From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn"
  },
  {
    image: "assets/img/all-images/testimonial-img8.png",
    name: "Alex Ross",
    role: "Demand Planner",
    description: "From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn"
  },
  {
    image: "assets/img/all-images/testimonial-img9.png",
    name: "Tim Witsel",
    role: "Logistics Officer",
    description: "From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn"
  },
  {
    image: "assets/img/all-images/testimonial-img7.png",
    name: "Dhruv Jerel",
    role: "Scheduler",
    description: "From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn"
  },
  {
    image: "assets/img/all-images/testimonial-img8.png",
    name: "Alex Ross",
    role: "Demand Planner",
    description: "From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn"
  },
  {
    image: "assets/img/all-images/testimonial-img9.png",
    name: "Tim Witsel",
    role: "Logistics Officer",
    description: "From homeowners to businesses, our customers have benefited from our commitment to providing top-notch service and support. Explore their stories to learn"
  }
];
var teamMembers7 = [
  {
    name: "Kore Anderson",
    role: "Team Leader",
    image: "assets/img/all-images/team-img5.png",
    aosDuration: 800
  },
  {
    name: "Sean Williams",
    role: "Client Analyst",
    image: "assets/img/all-images/team-img6.png",
    aosDuration: 1e3
  },
  {
    name: "Tim Robinson",
    role: "Team Manager",
    image: "assets/img/all-images/team-img7.png",
    aosDuration: 1200
  }
];
var blogs5 = [
  {
    date: "16 April 2024",
    author: "Dawid Malan",
    authorImg: "assets/img/icons/auhtor1.svg",
    title: "Electricity Empowerment: Insights & Innovations",
    image: "assets/img/all-images/blog-img7.png",
    aosDuration: 800
  },
  {
    date: "16 April 2024",
    author: "Dawid Malan",
    authorImg: "assets/img/icons/auhtor1.svg",
    title: "Energize Chronicles: Stories from the Energy Frontier",
    image: "assets/img/all-images/blog-img8.png",
    aosDuration: 1e3
  },
  {
    date: "16 April 2024",
    author: "Dawid Malan",
    authorImg: "assets/img/icons/auhtor1.svg",
    title: "Illuminate Intelligence: Bright Ideas in Energy",
    image: "assets/img/all-images/blog-img9.png",
    aosDuration: 1200
  }
];

// src/app/views/demo/home-single-4/components/service-4/service-4.component.ts
function Service4Component_div_12_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275element(3, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "a", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 15);
    \u0275\u0275text(10, " Read More ");
    \u0275\u0275element(11, "i", 16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-aos-duration", item_r1.duration);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r1.icon, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.description);
  }
}
var Service4Component2 = class _Service4Component {
  services = services4;
  static \u0275fac = function Service4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Service4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Service4Component, selectors: [["app-service-4"]], decls: 13, vars: 1, consts: [[1, "service3-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-6", "m-auto"], [1, "service-header-area", "heading7", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], ["class", "col-lg-4 col-md-6", "data-aos", "zoom-in", 4, "ngFor", "ngForOf"], ["data-aos", "zoom-in", 1, "col-lg-4", "col-md-6"], [1, "service-auhtor-boxarea"], [1, "icons"], ["alt", "", 3, "src"], [1, "content-area"], ["routerLink", "/services/single"], ["routerLink", "/services/single", 1, "readmore"], [1, "fa-solid", "fa-arrow-right"]], template: function Service4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Our Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Trusted Electricity Providers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "From residential households to commercial enterprises, we provide reliable, efficient, and sustainable energy solutions.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 2);
      \u0275\u0275template(12, Service4Component_div_12_Template2, 12, 4, "div", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.services);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Service4Component2, [{
    type: Component,
    args: [{ selector: "app-service-4", imports: [CommonModule, RouterLink], template: '<div class="service3-section-area sp2">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-6 m-auto">\n                <div class="service-header-area heading7 text-center">\n                    <h5 data-aos="fade-up" data-aos-duration="800">Our Services</h5>\n                    <h2 class="tg-element-title">Trusted Electricity Providers</h2>\n                    <p data-aos="fade-up" data-aos-duration="1000">From residential households to commercial\n                        enterprises, we provide reliable, efficient, and sustainable energy solutions.</p>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-lg-4 col-md-6" *ngFor="let item of services" data-aos="zoom-in"\n                [attr.data-aos-duration]="item.duration">\n                <div class="service-auhtor-boxarea">\n                    <div class="icons">\n                        <img [src]="item.icon" alt="">\n                    </div>\n                    <div class="content-area">\n                        <a routerLink="/services/single">{{ item.title }}</a>\n                        <p>{{ item.description }}</p>\n                        <a routerLink="/services/single" class="readmore">\n                            Read More <i class="fa-solid fa-arrow-right"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Service4Component2, { className: "Service4Component", filePath: "src/app/views/demo/home-single-4/components/service-4/service-4.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-single-4/components/case-study-4/case-study-4.component.ts
function CaseStudy4Component_div_12_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275element(3, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275element(5, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15)(7, "a", 16)(8, "span");
    \u0275\u0275element(9, "i", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 16);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-aos-duration", item_r1.duration);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(item_r1.subtitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.title);
  }
}
var CaseStudy4Component2 = class _CaseStudy4Component {
  cases = cases2;
  static \u0275fac = function CaseStudy4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CaseStudy4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaseStudy4Component, selectors: [["app-case-study-4"]], decls: 13, vars: 1, consts: [[1, "casestudy2-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-7", "m-auto"], [1, "casestudy-header", "text-center", "heading6"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], ["class", "col-lg-4 col-md-6", "data-aos", "zoom-in", 4, "ngFor", "ngForOf"], ["data-aos", "zoom-in", 1, "col-lg-4", "col-md-6"], [1, "case-auhtor-boxarea"], [1, "img1"], ["alt", "", 3, "src"], [1, "case-bg"], ["src", "assets/img/bg/casebg.png", "alt", ""], [1, "content"], ["routerLink", "/case-study-single"], [1, "fa-solid", "fa-arrow-right"]], template: function CaseStudy4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Case Studies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Electricity Service Case Studies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, " Explore real-life examples of our electricity services in action through our case studies. From residential homes to commercial enterprises, ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 2);
      \u0275\u0275template(12, CaseStudy4Component_div_12_Template2, 14, 4, "div", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.cases);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaseStudy4Component2, [{
    type: Component,
    args: [{ selector: "app-case-study-4", imports: [CommonModule, RouterLink], template: '<div class="casestudy2-section-area sp2">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-7 m-auto">\n                <div class="casestudy-header text-center heading6">\n                    <h5 data-aos="fade-up" data-aos-duration="800">Case Studies</h5>\n                    <h2 class="tg-element-title">Electricity Service Case Studies</h2>\n                    <p data-aos="fade-up" data-aos-duration="1000"> Explore real-life examples of our electricity\n                        services in action through our case studies. From residential homes to commercial enterprises,\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-lg-4 col-md-6" *ngFor="let item of cases" data-aos="zoom-in"\n                [attr.data-aos-duration]="item.duration">\n                <div class="case-auhtor-boxarea">\n                    <div class="img1">\n                        <img [src]="item.image" alt="">\n                    </div>\n                    <div class="case-bg">\n                        <img src="assets/img/bg/casebg.png" alt="">\n                    </div>\n                    <div class="content">\n                        <a routerLink="/case-study-single"><span><i class="fa-solid fa-arrow-right"></i></span></a>\n                        <p>{{ item.subtitle }}</p>\n                        <a routerLink="/case-study-single">{{ item.title }}</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaseStudy4Component2, { className: "CaseStudy4Component", filePath: "src/app/views/demo/home-single-4/components/case-study-4/case-study-4.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-single-4/components/testimonial-4/testimonial-4.component.ts
var _c014 = () => [1, 2, 3, 4, 5];
function Testimonial4Component_ng_container_16_ng_template_1_li_5_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275elementEnd();
  }
}
function Testimonial4Component_ng_container_16_ng_template_1_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275element(2, "img", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "ul", 17);
    \u0275\u0275template(5, Testimonial4Component_ng_container_16_ng_template_1_li_5_Template2, 2, 0, "li", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", item_r1.image, \u0275\u0275sanitizeUrl)("alt", item_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(6, _c014));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u201C", item_r1.description, "\u201D");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.role);
  }
}
function Testimonial4Component_ng_container_16_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Testimonial4Component_ng_container_16_ng_template_1_Template2, 12, 7, "ng-template", 12);
    \u0275\u0275elementContainerEnd();
  }
}
var Testimonial4Component2 = class _Testimonial4Component {
  testimonials = testimonials4;
  carouselOptions = {
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    mouseDrag: true,
    items: 10,
    autoplay: true,
    smartSpeed: 2e3,
    autoplayTimeout: 3e3,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2
      },
      1e3: {
        items: 3
      }
    }
  };
  static \u0275fac = function Testimonial4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Testimonial4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Testimonial4Component, selectors: [["app-testimonial-4"]], decls: 17, vars: 2, consts: [[1, "testimonial3-section-area", "sp1"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "testimonial3-header", "heading6"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], ["data-aos", "zoom-in", "data-aos-duration", "1000", 1, "col-lg-12"], [1, "testimonial-slider-area", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "testimonial-boxes"], [1, "img1"], [3, "src", "alt"], [1, "content-area"], [1, "d-flex", "gap-1", "align-items-center", "justify-content-center"], ["routerLink", "/our-team"], [1, "fa-solid", "fa-star"]], template: function Testimonial4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Testimonials");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Hear from Our Satisfied Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Discover why our customers love our electricity services! Read testimonials from ");
      \u0275\u0275element(11, "br", 8);
      \u0275\u0275text(12, " satisfied clients who have experienced the reliability, efficiency,");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 2)(14, "div", 9)(15, "owl-carousel-o", 10);
      \u0275\u0275template(16, Testimonial4Component_ng_container_16_Template2, 2, 0, "ng-container", 11);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275property("options", ctx.carouselOptions);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.testimonials);
    }
  }, dependencies: [CarouselModule, CarouselComponent, CarouselSlideDirective, CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Testimonial4Component2, [{
    type: Component,
    args: [{ selector: "app-testimonial-4", imports: [CarouselModule, CommonModule, RouterLink], template: '<div class="testimonial3-section-area sp1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8 m-auto">\n                <div class="testimonial3-header heading6">\n                    <h5 data-aos="fade-up" data-aos-duration="800">Testimonials</h5>\n                    <h2 class="tg-element-title">Hear from Our Satisfied Customers</h2>\n                    <p data-aos="fade-up" data-aos-duration="1000">Discover why our customers love our electricity services! Read testimonials from <br class="d-lg-block d-none"> satisfied clients who have experienced the reliability, efficiency,</p>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n          <div class="col-lg-12" data-aos="zoom-in" data-aos-duration="1000">\n            <owl-carousel-o [options]="carouselOptions" class="testimonial-slider-area">\n                <ng-container *ngFor="let item of testimonials">\n                  <ng-template carouselSlide>\n                    <div class="testimonial-boxes">\n                      <div class="img1">\n                        <img [src]="item.image" [alt]="item.name">\n                      </div>\n                      <div class="content-area">\n                        <ul class="d-flex gap-1 align-items-center justify-content-center">\n                          <li *ngFor="let star of [1,2,3,4,5]" ><i class="fa-solid fa-star"></i></li>\n                        </ul>\n                        <p>\u201C{{ item.description }}\u201D</p>\n                        <a routerLink="/our-team">{{ item.name }}</a>\n                        <p>{{ item.role }}</p>\n                      </div>\n                    </div>\n                  </ng-template>\n                </ng-container>\n              </owl-carousel-o>\n              \n          </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Testimonial4Component2, { className: "Testimonial4Component", filePath: "src/app/views/demo/home-single-4/components/testimonial-4/testimonial-4.component.ts", lineNumber: 13 });
})();

// src/app/views/demo/home-single-4/components/team-4/team-4.component.ts
function Team4Component_div_12_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275element(3, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "a", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ul")(10, "li")(11, "a", 15);
    \u0275\u0275element(12, "i", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "a", 15);
    \u0275\u0275element(15, "i", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li")(17, "a", 15);
    \u0275\u0275element(18, "i", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "li")(20, "a", 15);
    \u0275\u0275element(21, "i", 19);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-aos", "zoom-in")("data-aos-duration", member_r1.aosDuration);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", member_r1.image, \u0275\u0275sanitizeUrl)("alt", member_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r1.role);
  }
}
var Team4Component2 = class _Team4Component {
  teamMembers = teamMembers7;
  static \u0275fac = function Team4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Team4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Team4Component, selectors: [["app-team-4"]], decls: 13, vars: 1, consts: [[1, "team3-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-6", "m-auto"], [1, "team-header-area", "text-center", "heading6"], ["data-aos", "fade-up", "data-aos-duration", "800"], ["data-aos", "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [1, "team-auhtor-boxes"], [1, "img1"], [3, "src", "alt"], [1, "content-area"], ["routerLink", "/pages/our-team"], ["href", "javascript:void(0)"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-linkedin-in"], [1, "fa-brands", "fa-behance"]], template: function Team4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Our Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Discover Our Dedicated Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "From our experienced technicians who ensure reliable installations to our knowledgeable customer service representatives who provide.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 2);
      \u0275\u0275template(12, Team4Component_div_12_Template2, 22, 6, "div", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.teamMembers);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Team4Component2, [{
    type: Component,
    args: [{ selector: "app-team-4", imports: [CommonModule, RouterLink], template: `<div class="team3-section-area sp2">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="team-header-area text-center heading6">
                    <h5 data-aos="fade-up" data-aos-duration="800">Our Team</h5>
                    <h2 data-aos="tg-element-title">Discover Our Dedicated Team</h2>
                    <p data-aos="fade-up" data-aos-duration="1000">From our experienced technicians who ensure reliable
                        installations to our knowledgeable customer service representatives who provide.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div *ngFor="let member of teamMembers" class="col-lg-4 col-md-6" [attr.data-aos]="'zoom-in'"
                [attr.data-aos-duration]="member.aosDuration">
                <div class="team-auhtor-boxes">
                    <div class="img1">
                        <img [src]="member.image" [alt]="member.name">
                    </div>
                    <div class="content-area">
                        <a routerLink="/pages/our-team">{{ member.name }}</a>
                        <p>{{ member.role }}</p>
                        <ul>
                            <li><a href="javascript:void(0)"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="javascript:void(0)"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="javascript:void(0)"><i class="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="javascript:void(0)"><i class="fa-brands fa-behance"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Team4Component2, { className: "Team4Component", filePath: "src/app/views/demo/home-single-4/components/team-4/team-4.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-single-4/components/contact-4/contact-4.component.ts
var Contact4Component2 = class _Contact4Component {
  static \u0275fac = function Contact4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Contact4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Contact4Component, selectors: [["app-contact-4"]], decls: 89, vars: 0, consts: [[1, "contact3-section-area", "sp1", 2, "background-image", "url(assets/img/all-images/contact-bg2.png)", "background-position", "center", "background-position", "center", "background-repeat", "no-repeat", "background-size", "cover"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "contact-header-area", "heading7"], ["data-aos", "fade-left", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-left", "data-aos-duration", "1000"], [1, "space48"], [1, "row"], [1, "col-lg-6", "col-md-6"], ["data-aos", "fade-left", "data-aos-duration", "1000", 1, "contact-auhtor-side"], [1, "icons-text"], [1, "icons"], [1, "fa-solid", "fa-phone"], [1, "text"], ["href", "tel:1234567890"], [1, "fa-solid", "fa-location-dot"], [1, "space48", "d-md-none"], ["data-aos", "fade-left", "data-aos-duration", "1200", 1, "contact-auhtor-side"], [1, "fa-solid", "fa-envelope"], ["href", "mailto:serebangle@gmail.com "], [1, "fa-brands", "fa-linkedin-in"], ["href", "javascript:void(0)"], ["data-aos", "zoom-in", "data-aos-duration", "1200", 1, "col-lg-6"], [1, "contact-submit-boxarea"], ["action", "https://api.web3forms.com/submit", "method", "POST"], ["type", "hidden", "name", "access_key", "value", "0cd32fff-eda2-4da3-be43-37d47fbb396b"], [1, "input-area"], ["type", "text", "placeholder", "Name", "required", ""], ["type", "number", "placeholder", "Phone", "required", ""], [1, "col-lg-12"], ["type", "email", "placeholder", "Email", "required", ""], ["placeholder", "Describe your inquiry", "cols", "30", "rows", "10", "required", ""], [1, "input-area1"], ["type", "checkbox", "required", ""], ["type", "submit", 1, "header-btn5"], [1, "fa-solid", "fa-arrow-right"]], template: function Contact4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Contact Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Illuminate Your Message Get in Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Have questions or ready to get started with our electricity services? Our team is here to help! Whether you're seeking.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "div", 8);
      \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13);
      \u0275\u0275element(17, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 15)(19, "p");
      \u0275\u0275text(20, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 16);
      \u0275\u0275text(22, "123 456 7890");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(23, "div", 8);
      \u0275\u0275elementStart(24, "div", 12)(25, "div", 13);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 15)(28, "p");
      \u0275\u0275text(29, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "a", 16);
      \u0275\u0275text(31, "8502 Preston Rd. Inglewoo");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(32, "div", 10);
      \u0275\u0275element(33, "div", 18);
      \u0275\u0275elementStart(34, "div", 19)(35, "div", 12)(36, "div", 13);
      \u0275\u0275element(37, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 15)(39, "p");
      \u0275\u0275text(40, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "a", 21);
      \u0275\u0275text(42, "serebangle@gmail.com ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(43, "div", 8);
      \u0275\u0275elementStart(44, "div", 12)(45, "div", 13);
      \u0275\u0275element(46, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 15)(48, "p");
      \u0275\u0275text(49, "Linkedin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "a", 23);
      \u0275\u0275text(51, "Fleexstudio");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(52, "div", 24)(53, "div", 25)(54, "h4");
      \u0275\u0275text(55, "Request A Quote");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "form", 26);
      \u0275\u0275element(57, "input", 27);
      \u0275\u0275elementStart(58, "div", 9)(59, "div", 3)(60, "div", 28)(61, "p");
      \u0275\u0275text(62, "Name (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "input", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 3)(65, "div", 28)(66, "p");
      \u0275\u0275text(67, "Number (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(68, "input", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 31)(70, "div", 28)(71, "p");
      \u0275\u0275text(72, "Email (required)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(73, "input", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 31)(75, "div", 28)(76, "p");
      \u0275\u0275text(77, "Additional Details (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "textarea", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 31)(80, "div", 34);
      \u0275\u0275element(81, "input", 35);
      \u0275\u0275elementStart(82, "p");
      \u0275\u0275text(83, "I agree with the site privacy policy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div", 31)(85, "div", 34)(86, "button", 36);
      \u0275\u0275text(87, "Submit Now ");
      \u0275\u0275element(88, "i", 37);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Contact4Component2, [{
    type: Component,
    args: [{ selector: "app-contact-4", imports: [], template: `<div class="contact3-section-area sp1"
    style="background-image: url(assets/img/all-images/contact-bg2.png); background-position: center; background-position: center; background-repeat: no-repeat; background-size: cover;">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="contact-header-area heading7">
                    <h5 data-aos="fade-left" data-aos-duration="800">Contact Us</h5>
                    <h2 class="tg-element-title">Illuminate Your Message Get in Contact</h2>
                    <p data-aos="fade-left" data-aos-duration="1000">Have questions or ready to get started with our
                        electricity services? Our team is here to help! Whether you're seeking.</p>
                    <div class="space48"></div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="contact-auhtor-side" data-aos="fade-left" data-aos-duration="1000">
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
                                        <a href="tel:1234567890">8502 Preston Rd. Inglewoo</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6">
                            <div class="space48 d-md-none"></div>
                            <div class="contact-auhtor-side" data-aos="fade-left" data-aos-duration="1200">
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

            <div class="col-lg-6" data-aos="zoom-in" data-aos-duration="1200">
                <div class="contact-submit-boxarea">
                    <h4>Request A Quote</h4>
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="0cd32fff-eda2-4da3-be43-37d47fbb396b">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="input-area">
                                    <p>Name (required)</p>
                                    <input type="text" placeholder="Name" required>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="input-area">
                                    <p>Number (required)</p>
                                    <input type="number" placeholder="Phone" required>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="input-area">
                                    <p>Email (required)</p>
                                    <input type="email" placeholder="Email" required>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="input-area">
                                    <p>Additional Details (Optional)</p>
                                    <textarea placeholder="Describe your inquiry" cols="30" rows="10"
                                        required></textarea>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="input-area1">
                                    <input type="checkbox" required>
                                    <p>I agree with the site privacy policy</p>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="input-area1">
                                    <button type="submit" class="header-btn5">Submit Now <i
                                            class="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Contact4Component2, { className: "Contact4Component", filePath: "src/app/views/demo/home-single-4/components/contact-4/contact-4.component.ts", lineNumber: 9 });
})();

// src/app/views/demo/home-single-4/components/blogs-4/blogs-4.component.ts
function Blogs4Component_div_14_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "a", 14);
    \u0275\u0275element(5, "i", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 16)(8, "a", 14);
    \u0275\u0275element(9, "img", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 18)(12, "a", 19);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 20);
    \u0275\u0275text(15, "Read More ");
    \u0275\u0275element(16, "i", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 22);
    \u0275\u0275element(18, "img", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-aos", "zoom-in")("data-aos-duration", post_r1.aosDuration);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(post_r1.date);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", post_r1.authorImg, \u0275\u0275sanitizeUrl)("alt", post_r1.author);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(post_r1.author);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r1.title);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", post_r1.image, \u0275\u0275sanitizeUrl)("alt", post_r1.title);
  }
}
var Blogs4Component2 = class _Blogs4Component {
  blogPosts = blogs5;
  static \u0275fac = function Blogs4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Blogs4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Blogs4Component, selectors: [["app-blogs-4"]], decls: 15, vars: 1, consts: [[1, "blog3-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-6", "m-auto"], [1, "blog-header-area", "text-center", "heading6"], ["data-aos", "fade-up", "data-aos-duration", "800"], [1, "tg-element-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "d-lg-block", "d-none"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [1, "blog-boxes-area"], [1, "tags-area"], [1, "date"], ["href", "javascript:void(0)"], [1, "fa-solid", "fa-calendar-days"], [1, "contact"], [3, "src", "alt"], [1, "content-area"], ["routerLink", "/case-study-single"], ["routerLink", "/case-study-single", 1, "readmore"], [1, "fa-solid", "fa-arrow-right"], [1, "img1"]], template: function Blogs4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Our Latest News");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Your Knowledge into Our Blog");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "From residential households to commercial enterprises, we provide ");
      \u0275\u0275element(11, "br", 8);
      \u0275\u0275text(12, " reliable, efficient, and sustainable energy solutions.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 2);
      \u0275\u0275template(14, Blogs4Component_div_14_Template2, 19, 9, "div", 9);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.blogPosts);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Blogs4Component2, [{
    type: Component,
    args: [{ selector: "app-blogs-4", imports: [CommonModule, RouterLink], template: `<div class="blog3-section-area sp2">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 m-auto">
          <div class="blog-header-area text-center heading6">
            <h5 data-aos="fade-up" data-aos-duration="800">Our Latest News</h5>
            <h2 class="tg-element-title">Your Knowledge into Our Blog</h2>
            <p data-aos="fade-up" data-aos-duration="1000">From residential households to commercial enterprises, we provide <br class="d-lg-block d-none"> reliable, efficient, and sustainable energy solutions.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div *ngFor="let post of blogPosts" class="col-lg-4 col-md-6" [attr.data-aos]="'zoom-in'" [attr.data-aos-duration]="post.aosDuration">
          <div class="blog-boxes-area">
            <div class="tags-area">
              <div class="date">
                <a href="javascript:void(0)"><i class="fa-solid fa-calendar-days"></i>{{ post.date }}</a>
              </div>
              <div class="contact">
                <a href="javascript:void(0)"><img [src]="post.authorImg" [alt]="post.author">{{ post.author }}</a>
              </div>
            </div>
            <div class="content-area">
              <a routerLink="/case-study-single">{{ post.title }}</a>
              <a routerLink="/case-study-single" class="readmore">Read More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div class="img1">
              <img [src]="post.image" [alt]="post.title">
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Blogs4Component2, { className: "Blogs4Component", filePath: "src/app/views/demo/home-single-4/components/blogs-4/blogs-4.component.ts", lineNumber: 12 });
})();

// src/app/views/demo/home-single-4/home-single-4.component.ts
var HomeSingle4Component = class _HomeSingle4Component {
  static \u0275fac = function HomeSingle4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeSingle4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeSingle4Component, selectors: [["app-home-single-4"]], decls: 11, vars: 0, consts: [[1, "homepage3-body", "tg-heading-subheading", "animation-style3"], ["id", "about"], ["id", "services"], ["id", "case-study"], ["id", "testimonials"], ["id", "team"], ["id", "blogs"], ["btnClass", "header-btn5", "containerClass", "footer3-section-area", "logo", "assets/img/logo/logo5.png"]], template: function HomeSingle4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-single-header-4")(2, "app-hero-4")(3, "app-about-4", 1)(4, "app-service-4", 2)(5, "app-case-study-4", 3)(6, "app-testimonial-4", 4)(7, "app-team-4", 5)(8, "app-contact-4")(9, "app-blogs-4", 6)(10, "app-footer-2", 7);
      \u0275\u0275elementEnd();
    }
  }, dependencies: [SingleHeader4Component, Hero4Component2, About4Component2, Service4Component2, CaseStudy4Component2, Testimonial4Component2, Team4Component2, Contact4Component2, Blogs4Component2, Footer2Component], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeSingle4Component, [{
    type: Component,
    args: [{ selector: "app-home-single-4", imports: [SingleHeader4Component, Hero4Component2, About4Component2, Service4Component2, CaseStudy4Component2, Testimonial4Component2, Team4Component2, Contact4Component2, Blogs4Component2, Footer2Component], template: '<div class="homepage3-body tg-heading-subheading animation-style3">\n    <app-single-header-4 />\n    <app-hero-4 />\n    <app-about-4 id="about"/>\n    <app-service-4  id="services"/>\n    <app-case-study-4 id="case-study"/>\n    <app-testimonial-4 id="testimonials"/>\n    <app-team-4 id="team"/>\n    <app-contact-4 />\n    <app-blogs-4 id="blogs"/>\n    <app-footer-2 btnClass="header-btn5" containerClass="footer3-section-area" logo="assets/img/logo/logo5.png"/>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeSingle4Component, { className: "HomeSingle4Component", filePath: "src/app/views/demo/home-single-4/home-single-4.component.ts", lineNumber: 19 });
})();

// src/app/views/demo/demo-page.route.ts
var DEMO_PAGE_ROUTES = [
  {
    path: "home-2",
    component: Home2Component,
    data: { title: "home-2" }
  },
  {
    path: "home-3",
    component: Home3Component,
    data: { title: "home-3" }
  },
  {
    path: "home-4",
    component: Home4Component,
    data: { title: "home-4" }
  },
  {
    path: "home-single-1",
    component: HomeSingle1Component,
    data: { title: "home-single-1" }
  },
  {
    path: "home-single-2",
    component: HomeSingle2Component,
    data: { title: "home-single-2" }
  },
  {
    path: "home-single-3",
    component: HomeSingle3Component,
    data: { title: "home-single-3" }
  },
  {
    path: "home-single-4",
    component: HomeSingle4Component,
    data: { title: "home-single-4" }
  }
];
export {
  DEMO_PAGE_ROUTES
};
//# sourceMappingURL=chunk-WCRX5ENW.js.map
