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
  NgbNavOutlet
} from "./chunk-6V3XHZEX.js";
import {
  RouterLink
} from "./chunk-FVGVLSI5.js";
import "./chunk-RAPM3SJS.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2UT764MQ.js";

// src/app/views/home-1/components/about/about.component.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/views/home-1/components/about/about.component.ts", lineNumber: 10 });
})();

// src/app/views/home-1/components/data.ts
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

// src/app/views/home-1/components/blogs/blogs.component.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogsComponent, { className: "BlogsComponent", filePath: "src/app/views/home-1/components/blogs/blogs.component.ts", lineNumber: 12 });
})();

// src/app/views/home-1/components/brands/brands.component.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrandsComponent, { className: "BrandsComponent", filePath: "src/app/views/home-1/components/brands/brands.component.ts", lineNumber: 11 });
})();

// src/app/views/home-1/components/contact/contact.component.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src/app/views/home-1/components/contact/contact.component.ts", lineNumber: 9 });
})();

// src/app/views/home-1/components/faqs/faqs.component.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqsComponent, { className: "FaqsComponent", filePath: "src/app/views/home-1/components/faqs/faqs.component.ts", lineNumber: 13 });
})();

// src/app/views/home-1/components/hero/hero.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
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
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(2, _c0));
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "src/app/views/home-1/components/hero/hero.component.ts", lineNumber: 11 });
})();

// src/app/views/home-1/components/pricing-plans/pricing-plans.component.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingPlansComponent, { className: "PricingPlansComponent", filePath: "src/app/views/home-1/components/pricing-plans/pricing-plans.component.ts", lineNumber: 12 });
})();

// src/app/views/home-1/components/services/services.component.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesComponent, { className: "ServicesComponent", filePath: "src/app/views/home-1/components/services/services.component.ts", lineNumber: 12 });
})();

// src/app/views/home-1/components/team/team.component.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamComponent, { className: "TeamComponent", filePath: "src/app/views/home-1/components/team/team.component.ts", lineNumber: 12 });
})();

// src/app/views/home-1/components/testimonial/testimonial.component.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TestimonialComponent, { className: "TestimonialComponent", filePath: "src/app/views/home-1/components/testimonial/testimonial.component.ts", lineNumber: 13 });
})();

// src/app/views/home-1/components/work/work.component.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkComponent, { className: "WorkComponent", filePath: "src/app/views/home-1/components/work/work.component.ts", lineNumber: 12 });
})();

// src/app/views/home-1/home-1.component.ts
var Home1Component = class _Home1Component {
  static \u0275fac = function Home1Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home1Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home1Component, selectors: [["app-home-1"]], decls: 11, vars: 0, consts: [["id", "about"], ["id", "service"], ["id", "works"]], template: function Home1Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-hero")(1, "app-about", 0)(2, "app-services", 1)(3, "app-work", 2)(4, "app-testimonial")(5, "app-team")(6, "app-faqs")(7, "app-contact")(8, "app-pricing-plans")(9, "app-brands")(10, "app-blogs");
    }
  }, dependencies: [HeroComponent, AboutComponent, ServicesComponent, WorkComponent, TestimonialComponent, TeamComponent, FaqsComponent, ContactComponent, PricingPlansComponent, BrandsComponent, BlogsComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home1Component, [{
    type: Component,
    args: [{ selector: "app-home-1", imports: [HeroComponent, AboutComponent, ServicesComponent, WorkComponent, TestimonialComponent, TeamComponent, FaqsComponent, ContactComponent, PricingPlansComponent, BrandsComponent, BlogsComponent], template: '<app-hero />\n<app-about id="about"/>\n<app-services id="service"/>\n<app-work id="works"/>\n<app-testimonial />\n<app-team />\n<app-faqs />\n<app-contact />\n<app-pricing-plans />\n<app-brands />\n<app-blogs />' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home1Component, { className: "Home1Component", filePath: "src/app/views/home-1/home-1.component.ts", lineNumber: 20 });
})();

// src/app/views/views.route.ts
var VIEWS_ROUTES = [
  {
    path: "home-1",
    component: Home1Component,
    data: { title: "home-1" }
  },
  {
    path: "",
    loadChildren: () => import("./chunk-AZIKPPNW.js").then((mod) => mod.CURSOS_ROUTES)
  },
  {
    path: "",
    loadChildren: () => import("./chunk-OZA3HJVE.js").then((mod) => mod.SERVICES_ROUTES)
  },
  {
    path: "",
    loadChildren: () => import("./chunk-LI3XWAEV.js").then((mod) => mod.BLOGS_ROUTES)
  },
  {
    path: "",
    loadChildren: () => import("./chunk-H3AZBMCJ.js").then((mod) => mod.CASE_STUDIES_ROUTES)
  },
  {
    path: "",
    loadChildren: () => import("./chunk-EEOJUAHP.js").then((mod) => mod.OTHER_PAGES_ROUTES)
  }
];
export {
  VIEWS_ROUTES
};
//# sourceMappingURL=chunk-V5SEYNO5.js.map
