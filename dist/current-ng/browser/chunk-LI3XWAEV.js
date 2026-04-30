import {
  BreadcrumbComponent
} from "./chunk-3LW2JTQP.js";
import {
  RouterLink
} from "./chunk-FVGVLSI5.js";
import {
  CommonModule,
  Component,
  Input,
  NgForOf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
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

// src/app/components/cards/blog-card/blog-card.component.ts
var BlogCardComponent = class _BlogCardComponent {
  blog;
  static \u0275fac = function BlogCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogCardComponent, selectors: [["app-blog-card"]], inputs: { blog: "blog" }, decls: 21, vars: 5, consts: [[1, "blog-auhtor-boxarea"], [1, "img1"], ["alt", "", 3, "src"], [1, "blog-position"], ["routerLink", "/blogs/single", 1, "heading"], [1, "blog-content-area"], ["href", "javascript:void(0)"], [1, "fa-solid", "fa-calendar-days"], [1, "fa-solid", "fa-tag"], ["routerLink", "/blogs/single", 1, "learnmore"], [1, "fa-solid", "fa-arrow-right"]], template: function BlogCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "a", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5)(7, "ul")(8, "li")(9, "a", 6);
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li")(13, "a", 6);
      \u0275\u0275element(14, "i", 8);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "p");
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "a", 9);
      \u0275\u0275text(19, "Learn more ");
      \u0275\u0275element(20, "i", 10);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("src", ctx.blog.image, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.blog.title, " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.blog.date);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.blog.authorRole);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.blog.description);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogCardComponent, [{
    type: Component,
    args: [{ selector: "app-blog-card", imports: [RouterLink], template: '<div class="blog-auhtor-boxarea">\n    <div class="img1">\n        <img [src]="blog.image" alt="">\n    </div>\n    <div class="blog-position">\n        <a routerLink="/blogs/single" class="heading">{{blog.title}} </a>\n        <div class="blog-content-area">\n            <ul>\n                <li><a href="javascript:void(0)"><i class="fa-solid fa-calendar-days"></i>{{blog.date}}</a></li>\n                <li><a href="javascript:void(0)"><i class="fa-solid fa-tag"></i>{{blog.authorRole}}</a></li>\n            </ul>\n            <p>{{blog.description}}</p>\n            <a routerLink="/blogs/single" class="learnmore">Learn more <i class="fa-solid fa-arrow-right"></i></a>\n        </div>\n    </div>\n</div>' }]
  }], null, { blog: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogCardComponent, { className: "BlogCardComponent", filePath: "src/app/components/cards/blog-card/blog-card.component.ts", lineNumber: 11 });
})();

// src/app/views/blogs/blog-1/blog-1.component.ts
function Blog1Component_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "app-blog-card", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("blog", blog_r1);
  }
}
var Blog1Component = class _Blog1Component {
  blogs = [
    {
      image: "assets/img/all-images/blog-img1.png",
      title: "Electrifying Reads Explore Our Electricity",
      description: "Are you considering studying abroad and embarking on an visa to",
      date: "April 2, 2024",
      authorRole: "Electricity Corner"
    },
    {
      image: "assets/img/all-images/blog-img2.png",
      title: "Empowering Energy Dive into Our Electricity",
      description: "From understanding our pricing plans to learning about our renewable",
      date: "April 2, 2024",
      authorRole: "Electricity Corner"
    },
    {
      image: "assets/img/all-images/blog-img3.png",
      title: "Electricity Explained: Bloggin Power of Tomorrow",
      description: "We're committed to ensuring that you have all the information you need.",
      date: "April 2, 2024",
      authorRole: "Electricity Corner"
    },
    {
      image: "assets/img/all-images/blog-img13.png",
      title: "Eco-Electric Edits Your Source Energy News",
      description: "So, grab a cup of coffee, explore our articles, and join us on a journey",
      date: "April 2, 2024",
      authorRole: "Electricity Corner"
    },
    {
      image: "assets/img/all-images/blog-img14.png",
      title: "Empowerment Energy Unleash Your Potential",
      description: "Our team of experts is dedicated to delivering valuable content that",
      date: "April 2, 2024",
      authorRole: "Electricity Corner"
    },
    {
      image: "assets/img/all-images/blog-img15.png",
      title: "Voltage Views Illuminating Energy Perspectives",
      description: "Dive into our blog to discover a wide range of topics, including energy",
      date: "April 2, 2024",
      authorRole: "Electricity Corner"
    },
    {
      image: "assets/img/all-images/blog-img16.png",
      title: "Wired Wisdom: Insights from the Energy Experts",
      description: "Our team of experts is committed to providing you with accurate,",
      date: "April 2, 2024",
      authorRole: "Electricity Corner"
    },
    {
      image: "assets/img/all-images/blog-img17.png",
      title: "Bright Ideas: Unveiling Energy Innovations",
      description: "With regular updates and new articles published, there's always something",
      date: "April 2, 2024",
      authorRole: "Electricity Corner"
    },
    {
      image: "assets/img/all-images/blog-img18.png",
      title: "Spark Solutions: Exploring Energy Innovations",
      description: "So, whether you're a seasoned energy enthusiast or just starting",
      date: "April 2, 2024",
      authorRole: "Electricity Corner"
    }
  ];
  static \u0275fac = function Blog1Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Blog1Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Blog1Component, selectors: [["app-blog-1"]], decls: 13, vars: 1, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-4", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["title", "Our Blog"], [1, "blog1-section-area", "sp1"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [3, "blog"]], template: function Blog1Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Our Blog");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 3);
      \u0275\u0275template(12, Blog1Component_div_12_Template, 2, 1, "div", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.blogs);
    }
  }, dependencies: [BreadcrumbComponent, CommonModule, NgForOf, BlogCardComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Blog1Component, [{
    type: Component,
    args: [{ selector: "app-blog-1", imports: [BreadcrumbComponent, CommonModule, BlogCardComponent], template: '<div class="hero1-section-area about-bg-area">\n    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-4 m-auto">\n                <div class="hero-heading-area heading1 text-center">\n                    <h1>Our Blog</h1>\n                    <app-breadcrumb title="Our Blog" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="blog1-section-area sp1">\n    <div class="container">\n        <div class="row">\n            <div *ngFor="let blog of blogs" class="col-lg-4 col-md-6">\n                <app-blog-card [blog]="blog"/>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Blog1Component, { className: "Blog1Component", filePath: "src/app/views/blogs/blog-1/blog-1.component.ts", lineNumber: 13 });
})();

// src/app/views/blogs/components/blogs-sidebar/blogs-sidebar.component.ts
function BlogsSidebarComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 26);
    \u0275\u0275element(2, "img", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28)(4, "a", 7);
    \u0275\u0275element(5, "i", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 30);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const post_r1 = ctx.$implicit;
    const isLast_r2 = ctx.last;
    \u0275\u0275classMapInterpolate1("recent-single-posts ", (tmp_3_0 = isLast_r2) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "pb-0 border-0", "");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", post_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", post_r1.date, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r1.title);
  }
}
var BlogsSidebarComponent = class _BlogsSidebarComponent {
  recentPosts = [
    {
      image: "assets/img/all-images/blog-img18.png",
      date: "20 Apr, 2024",
      title: "Empowering Energy Dive into Our Electricity"
    },
    {
      image: "assets/img/all-images/blog-img19.png",
      date: "20 Apr, 2024",
      title: "Bright Ideas: Unveiling Energy Innovations"
    },
    {
      image: "assets/img/all-images/blog-img20.png",
      date: "20 Apr, 2024",
      title: "Voltage Views lluminating Energy Perspectives"
    },
    {
      image: "assets/img/all-images/blog-img21.png",
      date: "20 Apr, 2024",
      title: "Spark Solutions Exploring Energy Innovations"
    }
  ];
  static \u0275fac = function BlogsSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogsSidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogsSidebarComponent, selectors: [["app-blogs-sidebar"]], decls: 106, vars: 1, consts: [[1, "blog-auhtor-side-area"], [1, "search-boxarea"], ["action", "#"], ["type", "text", "placeholder", "Search here...."], ["type", "submit"], [1, "fa-solid", "fa-magnifying-glass"], [1, "blog-author-list"], ["href", "javascript:void(0)"], [1, "fa-solid", "fa-arrow-right"], [1, "recent-posts-area"], [3, "class", 4, "ngFor", "ngForOf"], [1, "helping-area"], [1, "d-lg-block", "d-none"], [1, "btn-area"], ["href", "tel:+917052101786", 1, "header-btn1"], [1, "fa-solid", "fa-phone-volume"], [1, "tags-area"], [1, "download-broucher"], ["href", "javascript:void(0)", 1, "header-btn1"], ["src", "assets/img/icons/download1.svg", "alt", ""], ["href", "javascript:void(0)", 1, "header-btn2"], [1, "social-icons"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-linkedin-in"], [1, "fa-brands", "fa-pinterest-p"], [1, "img1"], ["alt", "", 3, "src"], [1, "content"], [1, "fa-solid", "fa-calendar-days"], ["routerLink", "/blogs/single", 1, "heading"]], template: function BlogsSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
      \u0275\u0275text(3, "Search Post");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "form", 2);
      \u0275\u0275element(5, "input", 3);
      \u0275\u0275elementStart(6, "button", 4);
      \u0275\u0275element(7, "i", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 6)(9, "h3");
      \u0275\u0275text(10, "Our Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul")(12, "li")(13, "a", 7);
      \u0275\u0275text(14, "Voltage Vision ");
      \u0275\u0275element(15, "i", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li")(17, "a", 7);
      \u0275\u0275text(18, "Power Grid Expansion ");
      \u0275\u0275element(19, "i", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "li")(21, "a", 7);
      \u0275\u0275text(22, "Best Power and Progress ");
      \u0275\u0275element(23, "i", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "li")(25, "a", 7);
      \u0275\u0275text(26, "Electrifying Results ");
      \u0275\u0275element(27, "i", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "li")(29, "a", 7);
      \u0275\u0275text(30, "Voltage Wave Energy ");
      \u0275\u0275element(31, "i", 8);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(32, "div", 9)(33, "h3");
      \u0275\u0275text(34, "Recent Posts");
      \u0275\u0275elementEnd();
      \u0275\u0275template(35, BlogsSidebarComponent_div_35_Template, 9, 6, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 11)(37, "h3");
      \u0275\u0275text(38, "If You Need Any Help ");
      \u0275\u0275element(39, "br", 12);
      \u0275\u0275text(40, " Contact With Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 13)(42, "a", 14);
      \u0275\u0275element(43, "i", 15);
      \u0275\u0275text(44, "+91 705 2101 786");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 16)(46, "h3");
      \u0275\u0275text(47, "Our Tags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "ul")(49, "li")(50, "a", 7);
      \u0275\u0275text(51, "Electricity ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 7);
      \u0275\u0275text(54, "Creative ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "li")(56, "a", 7);
      \u0275\u0275text(57, "Design ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "ul")(59, "li")(60, "a", 7);
      \u0275\u0275text(61, "Art ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "li")(63, "a", 7);
      \u0275\u0275text(64, "Development ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "li")(66, "a", 7);
      \u0275\u0275text(67, "Image ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "ul")(69, "li")(70, "a", 7);
      \u0275\u0275text(71, "People ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "li")(73, "a", 7);
      \u0275\u0275text(74, "Tech ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "li")(76, "a", 7);
      \u0275\u0275text(77, "3D Images ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(78, "div", 17)(79, "h3");
      \u0275\u0275text(80, "Download Brochure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p");
      \u0275\u0275text(82, "We also offer innovative solar financing packages, ensuring that the transition.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "div", 13)(84, "a", 18);
      \u0275\u0275element(85, "img", 19);
      \u0275\u0275text(86, "Pdf Download");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "a", 20);
      \u0275\u0275element(88, "img", 19);
      \u0275\u0275text(89, "Doc Download");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "div", 21)(91, "h3");
      \u0275\u0275text(92, "Follow Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "ul")(94, "li")(95, "a", 7);
      \u0275\u0275element(96, "i", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "li")(98, "a", 7);
      \u0275\u0275element(99, "i", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "li")(101, "a", 7);
      \u0275\u0275element(102, "i", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "li")(104, "a", 7);
      \u0275\u0275element(105, "i", 25);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(35);
      \u0275\u0275property("ngForOf", ctx.recentPosts);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogsSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-blogs-sidebar", imports: [CommonModule, RouterLink], template: `<div class="blog-auhtor-side-area">
    <div class="search-boxarea">
        <h3>Search Post</h3>
        <form action="#">
            <input type="text" placeholder="Search here....">
            <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
    </div>
    <div class="blog-author-list">
        <h3>Our Categories</h3>
        <ul>
            <li><a href="javascript:void(0)">Voltage Vision <i class="fa-solid fa-arrow-right"></i></a></li>
            <li><a href="javascript:void(0)">Power Grid Expansion <i class="fa-solid fa-arrow-right"></i></a></li>
            <li><a href="javascript:void(0)">Best Power and Progress <i class="fa-solid fa-arrow-right"></i></a></li>
            <li><a href="javascript:void(0)">Electrifying Results <i class="fa-solid fa-arrow-right"></i></a></li>
            <li><a href="javascript:void(0)">Voltage Wave Energy <i class="fa-solid fa-arrow-right"></i></a></li>
        </ul>
    </div>
    <div class="recent-posts-area">
        <h3>Recent Posts</h3>
        <div *ngFor="let post of recentPosts;let isLast=last" class="recent-single-posts {{isLast ?? 'pb-0 border-0'}}">
            <div class="img1">
                <img [src]="post.image" alt="">
            </div>
            <div class="content">
                <a href="javascript:void(0)"><i class="fa-solid fa-calendar-days"></i> {{post.date}}</a>
                <a routerLink="/blogs/single" class="heading">{{post.title}}</a>
            </div>
        </div>
    </div>
    <div class="helping-area">
        <h3>If You Need Any Help <br class="d-lg-block d-none"> Contact With Us</h3>
        <div class="btn-area">
            <a href="tel:+917052101786" class="header-btn1"><i class="fa-solid fa-phone-volume"></i>+91 705 2101 786</a>
        </div>
    </div>
    <div class="tags-area">
        <h3>Our Tags</h3>
        <ul>
            <li><a href="javascript:void(0)">Electricity </a></li>
            <li><a href="javascript:void(0)">Creative </a></li>
            <li><a href="javascript:void(0)">Design </a></li>
        </ul>
        <ul>
            <li><a href="javascript:void(0)">Art </a></li>
            <li><a href="javascript:void(0)">Development </a></li>
            <li><a href="javascript:void(0)">Image </a></li>
        </ul>
        <ul>
            <li><a href="javascript:void(0)">People </a></li>
            <li><a href="javascript:void(0)">Tech </a></li>
            <li><a href="javascript:void(0)">3D Images </a></li>
        </ul>
    </div>

    <div class="download-broucher">
        <h3>Download Brochure</h3>
        <p>We also offer innovative solar financing packages, ensuring that the transition.</p>
        <div class="btn-area">
            <a href="javascript:void(0)" class="header-btn1"><img src="assets/img/icons/download1.svg" alt="">Pdf Download</a>
            <a href="javascript:void(0)" class="header-btn2"><img src="assets/img/icons/download1.svg" alt="">Doc Download</a>
        </div>
    </div>

    <div class="social-icons">
        <h3>Follow Us</h3>
        <ul>
            <li><a href="javascript:void(0)"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="javascript:void(0)"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="javascript:void(0)"><i class="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="javascript:void(0)"><i class="fa-brands fa-pinterest-p"></i></a></li>
        </ul>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogsSidebarComponent, { className: "BlogsSidebarComponent", filePath: "src/app/views/blogs/components/blogs-sidebar/blogs-sidebar.component.ts", lineNumber: 11 });
})();

// src/app/views/blogs/blog-sidebar/blog-sidebar.component.ts
function BlogSidebarComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "div", 26);
    \u0275\u0275element(3, "img", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28)(5, "div", 29)(6, "ul")(7, "li")(8, "a", 30);
    \u0275\u0275element(9, "i", 31);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "li")(12, "a", 30);
    \u0275\u0275element(13, "i", 32);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "a", 33);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "div", 34);
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "div", 35);
    \u0275\u0275elementStart(21, "a", 36);
    \u0275\u0275text(22, "Learn more ");
    \u0275\u0275element(23, "i", 37);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", blog_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(blog_r1.author);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(blog_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", blog_r1.title, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(blog_r1.description);
  }
}
var BlogSidebarComponent = class _BlogSidebarComponent {
  blogs = [
    {
      image: "assets/img/all-images/blog-img1.png",
      author: "Ben Stokes",
      date: "April 2, 2024",
      title: "Electrifying Reads Explore Our Electricity",
      description: "Our team of experts is dedicated to delivering valuable content that empowers you to make informed decisions about your energy usage, while also showcasing the latest developments in the field. Whether you're a homeowner, business owner Whether you're interested in learning how to reduce your carbon"
    },
    {
      image: "assets/img/all-images/blog-img2.png",
      author: "Ben White",
      date: "April 2, 2024",
      title: "Empowering Energy Dive into Our Electricity",
      description: "Welcome to our comprehensive electricity services blog, where we delve deep into the world of energy to bring you valuable insights, practical tips, and thought-provoking discussions. Our blog covers a diverse range of topics, from the latest advancements.Whether you're interested in learning how to reduce your carbon footprint."
    },
    {
      image: "assets/img/all-images/blog-img3.png",
      author: "Ben Cutting",
      date: "April 2, 2024",
      title: "Electricity Explained: Bloggin Power of Tomorrow",
      description: "With regular updates and new articles published, there's always something fresh and exciting to discover in our blog. So, whether you're a seasoned energy enthusiast or just starting your journey towards a greener future, join us as we explore. Whether you're interested in learning how to reduce."
    }
  ];
  static \u0275fac = function BlogSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogSidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogSidebarComponent, selectors: [["app-blog-sidebar"]], decls: 42, vars: 1, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["subTitle", "Blog Sidebar", "title", "Our Blog"], [1, "blog-leftside-section-area", "sp1"], [1, "col-lg-8"], [1, "blog1-section-area"], ["class", "col-lg-12 col-md-12", 4, "ngFor", "ngForOf"], [1, "col-lg-12"], [1, "pagination-area"], [1, "page"], [1, "pagination"], [1, "page-item"], ["href", "javascript:void(0)", "aria-label", "Previous", 1, "page-link"], [1, "fa-solid", "fa-angles-left"], ["href", "javascript:void(0)", 1, "page-link", "active"], ["href", "javascript:void(0)", 1, "page-link"], ["href", "javascript:void(0)", "aria-label", "Next", 1, "page-link"], [1, "fa-solid", "fa-angles-right"], [1, "space50", "d-lg-none", "d-block"], [1, "col-lg-4"], [1, "col-lg-12", "col-md-12"], [1, "blog-auhtor-boxarea"], [1, "img1"], ["alt", "", 3, "src"], [1, "blog-position"], [1, "blog-content-area"], ["href", "javascript:void(0)"], [1, "fa-solid", "fa-user"], [1, "fa-solid", "fa-calendar-days"], ["routerLink", "/blogs/single", 1, "heading"], [1, "space16"], [1, "space24"], ["routerLink", "/blogs/single", 1, "header-btn1"], [1, "fa-solid", "fa-arrow-right"]], template: function BlogSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Empowering Energy Dive into Our Electricity");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 3)(12, "div", 8)(13, "div", 9)(14, "div", 2)(15, "div", 3);
      \u0275\u0275template(16, BlogSidebarComponent_div_16_Template, 24, 5, "div", 10);
      \u0275\u0275elementStart(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "ul", 14)(21, "li", 15)(22, "a", 16);
      \u0275\u0275element(23, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "li", 15)(25, "a", 18);
      \u0275\u0275text(26, "1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "li", 15)(28, "a", 19);
      \u0275\u0275text(29, "2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "li", 15)(31, "a", 19);
      \u0275\u0275text(32, "...");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "li", 15)(34, "a", 19);
      \u0275\u0275text(35, "12");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "li", 15)(37, "a", 20);
      \u0275\u0275element(38, "i", 21);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(39, "div", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "div", 23);
      \u0275\u0275element(41, "app-blogs-sidebar");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275property("ngForOf", ctx.blogs);
    }
  }, dependencies: [BreadcrumbComponent, BlogsSidebarComponent, CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-blog-sidebar", imports: [BreadcrumbComponent, BlogsSidebarComponent, CommonModule, RouterLink], template: '<div class="hero1-section-area about-bg-area">\n    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8 m-auto">\n                <div class="hero-heading-area heading1 text-center">\n                    <h1>Empowering Energy Dive into Our Electricity</h1>\n                    <app-breadcrumb subTitle="Blog Sidebar" title="Our Blog" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="blog-leftside-section-area sp1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8">\n                <div class="blog1-section-area">\n                    <div class="container">\n                        <div class="row">\n                            <div *ngFor="let blog of blogs" class="col-lg-12 col-md-12">\n                                <div class="blog-auhtor-boxarea">\n                                    <div class="img1">\n                                        <img [src]="blog.image" alt="">\n                                    </div>\n                                    <div class="blog-position">\n                                        <div class="blog-content-area">\n                                            <ul>\n                                                <li><a href="javascript:void(0)"><i class="fa-solid fa-user"></i>{{blog.author}}</a></li>\n                                                <li><a href="javascript:void(0)"><i class="fa-solid fa-calendar-days"></i>{{blog.date}}</a></li>\n                                            </ul>\n                                            <a routerLink="/blogs/single" class="heading">{{blog.title}} </a>\n                                            <div class="space16"></div>\n                                            <p>{{blog.description}}</p>\n                                            <div class="space24"></div>\n                                            <a routerLink="/blogs/single" class="header-btn1">Learn more <i\n                                                    class="fa-solid fa-arrow-right"></i></a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <div class="col-lg-12">\n                                <div class="pagination-area">\n                                    <div class="page">\n                                        <ul class="pagination">\n                                            <li class="page-item">\n                                                <a class="page-link" href="javascript:void(0)" aria-label="Previous"><i\n                                                        class="fa-solid fa-angles-left"></i></a>\n                                            </li>\n                                            <li class="page-item"><a class="page-link active" href="javascript:void(0)">1</a></li>\n                                            <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>\n                                            <li class="page-item"><a class="page-link" href="javascript:void(0)">...</a></li>\n                                            <li class="page-item"><a class="page-link" href="javascript:void(0)">12</a></li>\n                                            <li class="page-item">\n                                                <a class="page-link" href="javascript:void(0)" aria-label="Next"><i\n                                                        class="fa-solid fa-angles-right"></i></a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="space50 d-lg-none d-block"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-4">\n                <app-blogs-sidebar />\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogSidebarComponent, { className: "BlogSidebarComponent", filePath: "src/app/views/blogs/blog-sidebar/blog-sidebar.component.ts", lineNumber: 14 });
})();

// src/app/views/blogs/components/blog-content/blog-content.component.ts
function BlogContentComponent_For_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
    \u0275\u0275elementStart(1, "div")(2, "div", 37)(3, "div", 38)(4, "div", 1);
    \u0275\u0275element(5, "img", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 40)(7, "a", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 41);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 42)(12, "a");
    \u0275\u0275element(13, "img", 43);
    \u0275\u0275text(14, "Reply");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(15, "div", 5);
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    const \u0275$index_130_r2 = ctx.$index;
    \u0275\u0275classMap(\u0275$index_130_r2 === 0 ? "space16" : "space32");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("comments-boxarea ", comment_r1.isReply ? "boxarea2" : "", "");
    \u0275\u0275advance(4);
    \u0275\u0275property("src", comment_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(comment_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(comment_r1.date);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(comment_r1.text);
  }
}
var BlogContentComponent = class _BlogContentComponent {
  comments = [
    {
      image: "assets/img/all-images/blog-img26.png",
      name: "Matthew Larson",
      date: "15 March, 2023",
      text: `Welcome to our comprehensive electricity services blog, where we delve deep into the
            world of energy to bring you valuable insights, practical tips, and thought-provoking
            discussions. Introductory sentence, sets the tone for the blog's`
    },
    {
      image: "assets/img/all-images/blog-img27.png",
      name: "Shakib Mahmud",
      date: "15 March, 2023",
      isReply: true,
      text: `Our blog covers a diverse range of topics, from the latest advancements in renewable
            energy technology to energy efficiency hacks for your home or business. Whether you're
            interested in learning how to reduce`
    },
    {
      image: "assets/img/all-images/blog-img28.png",
      name: "Matthew Anderson",
      date: "15 March, 2023",
      text: `Our team of experts is committed to providing you with accurate, relevant, and engaging
            content that empowers you to take control of your energy consumption and make informed
            decisions there's always something fresh`
    }
  ];
  get commentCount() {
    return this.comments.filter((c) => !c.isReply).length;
  }
  static \u0275fac = function BlogContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogContentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogContentComponent, selectors: [["app-blog-content"]], decls: 105, vars: 1, consts: [[1, "blog-left-heading", "heading2"], [1, "img1"], ["src", "assets/img/all-images/blog-img23.png", "alt", ""], [1, "space48"], [1, "left-heading2", "heading2"], [1, "space16"], [1, "space18"], [1, "row"], [1, "col-lg-6", "col-md-6"], [1, "space30"], ["src", "assets/img/all-images/blog-img24.png", "alt", ""], ["src", "assets/img/all-images/blog-img25.png", "alt", ""], [1, "space32"], [1, "tags-share-area"], [1, "tags"], ["href", "javascript:void(0)"], [1, "share"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-linkedin-in"], [1, "fa-brands", "fa-youtube"], [1, "fa-brands", "fa-instagram"], [1, "heading2"], [1, "contact-submit-boxarea"], ["action", "https://api.web3forms.com/submit", "method", "POST"], ["type", "hidden", "name", "access_key", "value", "0cd32fff-eda2-4da3-be43-37d47fbb396b"], [1, "col-lg-6"], [1, "input-area"], ["type", "text", "placeholder", "First Name", "required", ""], ["type", "text", "placeholder", "Last Name", "required", ""], ["type", "email", "placeholder", "Email", "required", ""], ["type", "number", "placeholder", "Phone", "required", ""], [1, "col-lg-12"], ["type", "text", "placeholder", "Subject", "required", ""], ["placeholder", "Message", "cols", "30", "rows", "10", "required", ""], [1, "input-area1"], ["type", "submit", 1, "header-btn1"], [1, "fa-solid", "fa-arrow-right"], [1, "comment-auhtor-box"], [1, "all-content"], ["alt", "", 3, "src"], [1, "content-area"], ["href", "javascript:void(0)", 1, "date"], [1, "reply"], ["src", "assets/img/icons/share.svg", "alt", ""]], template: function BlogContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(3, "div", 3);
      \u0275\u0275elementStart(4, "div", 4)(5, "h3");
      \u0275\u0275text(6, "Electricity Services That Illuminate Your World:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "div", 5);
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "Our team of experts is dedicated to delivering valuable content that empowers you to make informed decisions about your energy usage, while also showcasing the latest developments in the field. Whether you're a homeowner, business owner");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "div", 5);
      \u0275\u0275elementStart(11, "p");
      \u0275\u0275text(12, "Passionate about sustainability, our blog has something for everyone. So, grab a cup of coffee, explore our articles, and join us on a journey to a brighter, more sustainable future.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(13, "div", 3);
      \u0275\u0275elementStart(14, "div", 4)(15, "h3");
      \u0275\u0275text(16, "Empower Your World: Unleash the Power");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "div", 5);
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19, "Welcome to our comprehensive electricity services blog, where we delve deep into the world of energy to bring you valuable insights, practical tips, and thought-provoking discussions. Our blog covers a diverse range of topics, from the latest advancements");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "div", 5);
      \u0275\u0275elementStart(21, "p");
      \u0275\u0275text(22, "Whether you're interested in learning how to reduce your carbon footprint, exploring the benefits of solar power, or staying up-to-date with industry news and regulations, ");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "div", 6);
      \u0275\u0275elementStart(24, "div", 7)(25, "div", 8);
      \u0275\u0275element(26, "div", 9);
      \u0275\u0275elementStart(27, "div", 1);
      \u0275\u0275element(28, "img", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 8);
      \u0275\u0275element(30, "div", 9);
      \u0275\u0275elementStart(31, "div", 1);
      \u0275\u0275element(32, "img", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(33, "div", 12);
      \u0275\u0275elementStart(34, "p");
      \u0275\u0275text(35, "With regular updates and new articles published, there's always something fresh and exciting to discover in our blog. So, whether you're a seasoned energy enthusiast or just starting your journey towards a greener future, join us as we explore");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "div", 3);
      \u0275\u0275elementStart(37, "div", 13)(38, "div", 14)(39, "h4");
      \u0275\u0275text(40, "Our Tags:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "ul")(42, "li")(43, "a", 15);
      \u0275\u0275text(44, "Science");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 15);
      \u0275\u0275text(47, "creative");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "li")(49, "a", 15);
      \u0275\u0275text(50, "development");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div", 16)(52, "h4");
      \u0275\u0275text(53, "Share:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "ul")(55, "li")(56, "a", 15);
      \u0275\u0275element(57, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 15);
      \u0275\u0275element(60, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 15);
      \u0275\u0275element(63, "i", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li")(65, "a", 15);
      \u0275\u0275element(66, "i", 20);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(67, "div", 3);
      \u0275\u0275elementStart(68, "div", 21)(69, "h3");
      \u0275\u0275text(70);
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(71, BlogContentComponent_For_72_Template, 18, 10, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275element(73, "div", 12);
      \u0275\u0275elementStart(74, "div", 22)(75, "h4");
      \u0275\u0275text(76, "Leave a Reply");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "p");
      \u0275\u0275text(78, " Welcome to a space where every click brings you closer to a world powered ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "form", 23);
      \u0275\u0275element(80, "input", 24);
      \u0275\u0275elementStart(81, "div", 7)(82, "div", 25)(83, "div", 26);
      \u0275\u0275element(84, "input", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 25)(86, "div", 26);
      \u0275\u0275element(87, "input", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 25)(89, "div", 26);
      \u0275\u0275element(90, "input", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 25)(92, "div", 26);
      \u0275\u0275element(93, "input", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 31)(95, "div", 26);
      \u0275\u0275element(96, "input", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 31)(98, "div", 26);
      \u0275\u0275element(99, "textarea", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "div", 31)(101, "div", 34)(102, "button", 35);
      \u0275\u0275text(103, "Submit Now ");
      \u0275\u0275element(104, "i", 36);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(70);
      \u0275\u0275textInterpolate1("Comments (", ctx.commentCount, ")");
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.comments);
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogContentComponent, [{
    type: Component,
    args: [{ selector: "app-blog-content", imports: [CommonModule], template: `<div class="blog-left-heading heading2">
    <div class="img1">
        <img src="assets/img/all-images/blog-img23.png" alt="">
    </div>
</div>
<div class="space48"></div>
<div class="left-heading2 heading2">
    <h3>Electricity Services That Illuminate Your World:</h3>
    <div class="space16"></div>
    <p>Our team of experts is dedicated to delivering valuable content that empowers you to make
        informed decisions about your energy usage, while also showcasing the latest developments in
        the field. Whether you're a homeowner, business owner</p>
    <div class="space16"></div>
    <p>Passionate about sustainability, our blog has something for everyone. So, grab a cup of
        coffee, explore our articles, and join us on a journey to a brighter, more sustainable
        future.</p>
</div>
<div class="space48"></div>
<div class="left-heading2 heading2">
    <h3>Empower Your World: Unleash the Power</h3>
    <div class="space16"></div>
    <p>Welcome to our comprehensive electricity services blog, where we delve deep into the world of
        energy to bring you valuable insights, practical tips, and thought-provoking discussions.
        Our blog covers a diverse range of topics, from the latest advancements</p>
    <div class="space16"></div>
    <p>Whether you're interested in learning how to reduce your carbon footprint, exploring the
        benefits of solar power, or staying up-to-date with industry news and regulations, </p>
</div>
<div class="space18"></div>
<div class="row">
    <div class="col-lg-6 col-md-6">
        <div class="space30"></div>
        <div class="img1">
            <img src="assets/img/all-images/blog-img24.png" alt="">
        </div>
    </div>
    <div class="col-lg-6 col-md-6">
        <div class="space30"></div>
        <div class="img1">
            <img src="assets/img/all-images/blog-img25.png" alt="">
        </div>
    </div>
</div>
<div class="space32"></div>
<p>With regular updates and new articles published, there's always something fresh and exciting to
    discover in our blog. So, whether you're a seasoned energy enthusiast or just starting your
    journey towards a greener future, join us as we explore</p>
<div class="space48"></div>
<div class="tags-share-area">
    <div class="tags">
        <h4>Our Tags:</h4>
        <ul>
            <li><a href="javascript:void(0)">Science</a></li>
            <li><a href="javascript:void(0)">creative</a></li>
            <li><a href="javascript:void(0)">development</a></li>
        </ul>
    </div>
    <div class="share">
        <h4>Share:</h4>
        <ul>
            <li><a href="javascript:void(0)"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="javascript:void(0)"><i class="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="javascript:void(0)"><i class="fa-brands fa-youtube"></i></a></li>
            <li><a href="javascript:void(0)"><i class="fa-brands fa-instagram"></i></a></li>
        </ul>
    </div>
</div>
<div class="space48"></div>

<div class="heading2">
    <h3>Comments ({{ commentCount }})</h3>
    @for (comment of comments; track $index;let first=$first) {
    <div class="{{first ? 'space16' : 'space32'}}"></div>
    <div class="comments-boxarea {{comment.isReply ? 'boxarea2' : ''}}">
        <div class="comment-auhtor-box">
            <div class="all-content">
                <div class="img1">
                    <img [src]="comment.image" alt="">
                </div>
                <div class="content-area">
                    <a href="javascript:void(0)">{{ comment.name }}</a>
                    <a href="javascript:void(0)" class="date">{{ comment.date }}</a>
                </div>
            </div>
            <div class="reply">
                <a><img src="assets/img/icons/share.svg" alt="">Reply</a>
            </div>
        </div>
        <div class="space16"></div>
        <p>{{ comment.text }}</p>
    </div>
    }
</div>

<div class="space32"></div>
<div class="contact-submit-boxarea">
    <h4>Leave a Reply</h4>
    <p> Welcome to a space where every click brings you closer to a world powered </p>
    <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="0cd32fff-eda2-4da3-be43-37d47fbb396b">
        <div class="row">
            <div class="col-lg-6">
                <div class="input-area">
                    <input type="text" placeholder="First Name" required>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="input-area">
                    <input type="text" placeholder="Last Name" required>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="input-area">
                    <input type="email" placeholder="Email" required>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="input-area">
                    <input type="number" placeholder="Phone" required>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="input-area">
                    <input type="text" placeholder="Subject" required>
                </div>
            </div>

            <div class="col-lg-12">
                <div class="input-area">
                    <textarea placeholder="Message" cols="30" rows="10" required></textarea>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="input-area1">
                    <button type="submit" class="header-btn1">Submit Now <i
                            class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    </form>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogContentComponent, { className: "BlogContentComponent", filePath: "src/app/views/blogs/components/blog-content/blog-content.component.ts", lineNumber: 10 });
})();

// src/app/views/blogs/components/our-blogs/our-blogs.component.ts
function OurBlogsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-blog-card", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("blog", blog_r1);
  }
}
var OurBlogsComponent = class _OurBlogsComponent {
  blogPosts = [
    {
      image: "assets/img/all-images/blog-img1.png",
      title: "Electrifying Reads Explore Our Electricity",
      date: "April 2, 2024",
      authorRole: "Electricity Corner",
      description: "Are you considering studying abroad and embarking on an visa to"
    },
    {
      image: "assets/img/all-images/blog-img2.png",
      title: "Empowering Energy Dive into Our Electricity",
      date: "April 2, 2024",
      authorRole: "Electricity Corner",
      description: "From understanding our pricing plans to learning about our renewable"
    },
    {
      image: "assets/img/all-images/blog-img3.png",
      title: "Electricity Explained: Bloggin Power of Tomorrow",
      date: "April 2, 2024",
      authorRole: "Electricity Corner",
      description: "We're committed to ensuring that you have all the information you need."
    }
  ];
  static \u0275fac = function OurBlogsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OurBlogsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OurBlogsComponent, selectors: [["app-our-blogs"]], decls: 9, vars: 1, consts: [[1, "blog1-section-area", "sp2"], [1, "container"], [1, "row"], [1, "col-lg-6", "m-auto"], [1, "blog-header", "heading2", "text-center"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [3, "blog"]], template: function OurBlogsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      \u0275\u0275text(6, "Read More Our Blogs");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(7, "div", 2);
      \u0275\u0275template(8, OurBlogsComponent_div_8_Template, 2, 1, "div", 5);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.blogPosts);
    }
  }, dependencies: [CommonModule, NgForOf, BlogCardComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OurBlogsComponent, [{
    type: Component,
    args: [{ selector: "app-our-blogs", imports: [CommonModule, BlogCardComponent], template: '<div class="blog1-section-area sp2">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-6 m-auto">\n                <div class="blog-header heading2 text-center">\n                    <h2>Read More Our Blogs</h2>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div *ngFor="let blog of blogPosts" class="col-lg-4 col-md-6">\n                <app-blog-card [blog]="blog" />\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OurBlogsComponent, { className: "OurBlogsComponent", filePath: "src/app/views/blogs/components/our-blogs/our-blogs.component.ts", lineNumber: 12 });
})();

// src/app/views/blogs/blog-left/blog-left.component.ts
var BlogLeftComponent = class _BlogLeftComponent {
  static \u0275fac = function BlogLeftComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogLeftComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogLeftComponent, selectors: [["app-blog-left"]], decls: 18, vars: 0, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["subTitle", "mpowering Energy Dive into Our\n                    Electricity", "title", "Our Blog"], [1, "blog-leftside-section-area", "sp8"], [1, "col-lg-4"], [1, "col-lg-8"], [1, "blog-leftside-area", "heading2"]], template: function BlogLeftComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Empowering Energy Dive into Our Electricity");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 3)(12, "div", 8);
      \u0275\u0275element(13, "app-blogs-sidebar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9)(15, "div", 10);
      \u0275\u0275element(16, "app-blog-content");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(17, "app-our-blogs");
    }
  }, dependencies: [BreadcrumbComponent, BlogsSidebarComponent, BlogContentComponent, OurBlogsComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogLeftComponent, [{
    type: Component,
    args: [{ selector: "app-blog-left", imports: [BreadcrumbComponent, BlogsSidebarComponent, BlogContentComponent, OurBlogsComponent], template: '<div class="hero1-section-area about-bg-area">\n    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8 m-auto">\n                <div class="hero-heading-area heading1 text-center">\n                    <h1>Empowering Energy Dive into Our Electricity</h1>\n                    <app-breadcrumb subTitle="mpowering Energy Dive into Our\n                    Electricity" title="Our Blog" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="blog-leftside-section-area sp8">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-4">\n                <app-blogs-sidebar />\n            </div>\n\n            <div class="col-lg-8">\n                <div class="blog-leftside-area heading2">\n                    <app-blog-content />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-our-blogs />' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogLeftComponent, { className: "BlogLeftComponent", filePath: "src/app/views/blogs/blog-left/blog-left.component.ts", lineNumber: 13 });
})();

// src/app/views/blogs/blog-right/blog-right.component.ts
var BlogRightComponent = class _BlogRightComponent {
  static \u0275fac = function BlogRightComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogRightComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogRightComponent, selectors: [["app-blog-right"]], decls: 18, vars: 0, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["subTitle", "Empowering Energy Dive into Our Electricity", "title", "Our Blog"], [1, "blog-leftside-section-area", "sp8"], [1, "col-lg-8"], [1, "blog-leftside-area", "heading2", "blog-rightside"], [1, "col-lg-4"]], template: function BlogRightComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Empowering Energy Dive into Our Electricity");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 3)(12, "div", 8)(13, "div", 9);
      \u0275\u0275element(14, "app-blog-content");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10);
      \u0275\u0275element(16, "app-blogs-sidebar");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(17, "app-our-blogs");
    }
  }, dependencies: [BreadcrumbComponent, BlogsSidebarComponent, BlogContentComponent, OurBlogsComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogRightComponent, [{
    type: Component,
    args: [{ selector: "app-blog-right", imports: [BreadcrumbComponent, BlogsSidebarComponent, BlogContentComponent, OurBlogsComponent], template: '<div class="hero1-section-area about-bg-area">\n    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8 m-auto">\n                <div class="hero-heading-area heading1 text-center">\n                    <h1>Empowering Energy Dive into Our Electricity</h1>\n                    <app-breadcrumb subTitle="Empowering Energy Dive into Our Electricity" title="Our Blog" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="blog-leftside-section-area sp8">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8">\n                <div class="blog-leftside-area heading2 blog-rightside">\n                    <app-blog-content />\n                </div>\n            </div>\n            <div class="col-lg-4">\n                <app-blogs-sidebar />\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-our-blogs />' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogRightComponent, { className: "BlogRightComponent", filePath: "src/app/views/blogs/blog-right/blog-right.component.ts", lineNumber: 13 });
})();

// src/app/views/blogs/blog-single/blog-single.component.ts
var BlogSingleComponent = class _BlogSingleComponent {
  static \u0275fac = function BlogSingleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogSingleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogSingleComponent, selectors: [["app-blog-single"]], decls: 16, vars: 0, consts: [[1, "hero1-section-area", "about-bg-area"], ["src", "assets/img/bg/header-img1.png", "alt", "", 1, "header-img1"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "hero-heading-area", "heading1", "text-center"], ["subTitle", "Empowering Energy Dive into Our Electricity", "title", "Our Blog"], [1, "blog-leftside-section-area", "sp8"], [1, "blog-leftside-area", "heading2", "blog-singleside"]], template: function BlogSingleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Empowering Energy Dive into Our Electricity");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-breadcrumb", 6);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 3)(12, "div", 4)(13, "div", 8);
      \u0275\u0275element(14, "app-blog-content");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(15, "app-our-blogs");
    }
  }, dependencies: [BreadcrumbComponent, BlogContentComponent, OurBlogsComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogSingleComponent, [{
    type: Component,
    args: [{ selector: "app-blog-single", imports: [BreadcrumbComponent, BlogContentComponent, OurBlogsComponent], template: '<div class="hero1-section-area about-bg-area">\n    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8 m-auto">\n                <div class="hero-heading-area heading1 text-center">\n                    <h1>Empowering Energy Dive into Our Electricity</h1>\n                    <app-breadcrumb subTitle="Empowering Energy Dive into Our Electricity" title="Our Blog" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="blog-leftside-section-area sp8">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8 m-auto">\n                <div class="blog-leftside-area heading2 blog-singleside">\n                    <app-blog-content />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-our-blogs />' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogSingleComponent, { className: "BlogSingleComponent", filePath: "src/app/views/blogs/blog-single/blog-single.component.ts", lineNumber: 12 });
})();

// src/app/views/blogs/blogs.route.ts
var BLOGS_ROUTES = [
  {
    path: "blogs/one",
    component: Blog1Component,
    data: { title: "Blog One" }
  },
  {
    path: "blogs/sidebar",
    component: BlogSidebarComponent,
    data: { title: "Blog Sidebar" }
  },
  {
    path: "blogs/left",
    component: BlogLeftComponent,
    data: { title: "Blog Left" }
  },
  {
    path: "blogs/right",
    component: BlogRightComponent,
    data: { title: "Blog Right" }
  },
  {
    path: "blogs/single",
    component: BlogSingleComponent,
    data: { title: "Blog Single" }
  }
];
export {
  BLOGS_ROUTES
};
//# sourceMappingURL=chunk-LI3XWAEV.js.map
