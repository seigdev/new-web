(function (modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
    });
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    module.l = true;
    return module.exports;
  }
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
  };
  __webpack_require__.t = function (value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule)
      return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", { enumerable: true, value: value });
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    return ns;
  };
  __webpack_require__.n = function (module) {
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module["default"];
          }
        : function getModuleExports() {
            return module;
          };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "/";
  return __webpack_require__((__webpack_require__.s = 0));
})({
  "./src/js/app.js": /*!***********************!*\
!*** ./src/js/app.js ***!
\***********************/ /*!no static exports found*/ function (
    module,
    exports
  ) {
    window.addEventListener("load", async () => {
      var Loader = document.querySelector(".Loader");
      setTimeout(() => Loader.classList.add("hidden"), 3000);
    });
    $(document).ready(function () {
      $(".btn-drop").click(function () {
        $(".tabs-ul").toggleClass("tab-drop-open");
      });
    });
    $(document).ready(function () {
      $(".tab-1").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">All</p>'
        );
      });
      $(".tab-2").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">Photography</p>'
        );
      });
      $(".tab-3").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">Video</p>'
        );
      });
      $(".tab-4").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">Illustrations</p>'
        );
      });
      $(".tab-5").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">Digital Art</p>'
        );
      });
      $(".tab-6").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">Domains</p>'
        );
      });
      $(".tab-1, .tab-2, .tab-3, .tab-4, .tab-5, .tab-6").click(function () {
        $(".tabs-ul").removeClass("tab-drop-open");
      });
    });
    $(document).ready(function () {
      $(".tab-7").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">On Sale</p>'
        );
      });
      $(".tab-8").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">Following</p>'
        );
      });
      $(".tab-9").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">Followers</p>'
        );
      });
      $(".tab-7, .tab-8, .tab-9").click(function () {
        $(".tabs-ul").removeClass("tab-drop-open");
      });
    });
    $(document).ready(function () {
      $(".tab-10").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">Getting Started</p>'
        );
      });
      $(".tab-11").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">Artworks & Creator</p>'
        );
      });
      $(".tab-12").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">Connect Wallet</p>'
        );
      });
      $(".tab-13").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">Create, Sell & Connect</p>'
        );
      });
      $(".tab-14").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">Faqs</p>'
        );
      });
      $(".tab-10, .tab-11, .tab-12, .tab-13, .tab-14").click(function () {
        $(".tabs-ul").removeClass("tab-drop-open");
      });
    });
    $(document).ready(function () {
      $(".tab-15").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">For Creator</p>'
        );
      });
      $(".tab-16").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">For Collector</p>'
        );
      });
      $(".tab-15, .tab-16").click(function () {
        $(".tabs-ul").removeClass("tab-drop-open");
      });
    });
    $(document).ready(function () {
      $(".tab-17").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">Blue Mode</p>'
        );
      });
      $(".tab-18").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">Dark Mode</p>'
        );
      });
      $(".tab-19").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">Grey Mode</p>'
        );
      });
      $(".tab-20").click(function () {
        $(".btn-drop .btn-drop-inr").replaceWith(
          '<p class="btn-drop-inr heading-SB">Light Mode</p>'
        );
      });
      $(".tab-17, .tab-18, .tab-19, .tab-20").click(function () {
        $(".tabs-ul").removeClass("tab-drop-open");
      });
    });
    $("[data-countdown]").each(function () {
      var $this = $(this),
        finalDate = $(this).data("countdown");
      $this.countdown(finalDate, function (event) {
        $this.html(event.strftime("%H : %M : %S"));
      });
    });
    $(document).ready(function () {
      $(".icon-notification-otr").click(function () {
        $(".notification-drop").toggleClass("notification-drop-open");
      });
      $(".nav-a").click(function () {
        $(".notification-drop").removeClass("notification-drop-open");
      });
      $(".profile-nav").click(function () {
        $(".notification-drop").removeClass("notification-drop-open");
      });
    });
    $(document).ready(function () {
      $(".profile-nav").click(function () {
        $(".profile-pop-otr").toggleClass("profile-pop-open");
      });
      $(".nav-a").click(function () {
        $(".profile-pop-otr").removeClass("profile-pop-open");
      });
      $(".notification-main").click(function () {
        $(".profile-pop-otr").removeClass("profile-pop-open");
      });
    });
    $(document).ready(function () {
      $(".burger-icon-otr").click(function () {
        $(".overlay-content").addClass("overlay-open");
        $(".notification-drop").removeClass("notification-drop-open");
        $(".profile-pop-otr").removeClass("profile-pop-open");
      });
      $(".close-icon-otr").click(function () {
        $(".overlay-content").removeClass("overlay-open");
      });
    });
    $(document).ready(function () {
      $(".heart-icon-otr").click(function () {
        $(".heart-icon").toggleClass("ri-heart-line");
        $(".heart-icon").toggleClass("ri-heart-fill");
      });
    });
    $(".tab-link").click(function () {
      var tabID = $(this).attr("data-tab");
      $(this).addClass("active").siblings().removeClass("active");
      $("#tab-" + tabID)
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
    $("#live-auctions").owlCarousel({
      loop: false,
      margin: 24,
      dots: false,
      autoplay: false,
      nav: true,
      navText: [
        "<img src='/assets/img/ArrowLeft.svg'>",
        "<img src='/assets/img/ArrowRight.svg'>",
      ],
      responsive: {
        0: { items: 1, nav: false, dots: true },
        600: { items: 2 },
        992: { items: 3 },
        1300: { items: 4 },
      },
    });
    $("#Hero3").owlCarousel({
      items: 1,
      margin: 10,
      dots: true,
      autoplay: true,
      smartSpeed: 450,
      nav: false,
    });
    $(document).ready(function () {
      $(".heart1").click(function () {
        $(".heart-1").toggleClass("ri-heart-line");
        $(".heart-1").toggleClass("ri-heart-fill");
      });
      $(".heart2").click(function () {
        $(".heart-2").toggleClass("ri-heart-line");
        $(".heart-2").toggleClass("ri-heart-fill");
      });
      $(".heart3").click(function () {
        $(".heart-3").toggleClass("ri-heart-line");
        $(".heart-3").toggleClass("ri-heart-fill");
      });
      $(".heart4").click(function () {
        $(".heart-4").toggleClass("ri-heart-line");
        $(".heart-4").toggleClass("ri-heart-fill");
      });
      $(".heart5").click(function () {
        $(".heart-5").toggleClass("ri-heart-line");
        $(".heart-5").toggleClass("ri-heart-fill");
      });
      $(".heart6").click(function () {
        $(".heart-6").toggleClass("ri-heart-line");
        $(".heart-6").toggleClass("ri-heart-fill");
      });
      $(".heart7").click(function () {
        $(".heart-7").toggleClass("ri-heart-line");
        $(".heart-7").toggleClass("ri-heart-fill");
      });
      $(".heart8").click(function () {
        $(".heart-8").toggleClass("ri-heart-line");
        $(".heart-8").toggleClass("ri-heart-fill");
      });
      $(".heart9").click(function () {
        $(".heart-9").toggleClass("ri-heart-line");
        $(".heart-9").toggleClass("ri-heart-fill");
      });
      $(".heart10").click(function () {
        $(".heart-10").toggleClass("ri-heart-line");
        $(".heart-10").toggleClass("ri-heart-fill");
      });
      $(".heart11").click(function () {
        $(".heart-11").toggleClass("ri-heart-line");
        $(".heart-11").toggleClass("ri-heart-fill");
      });
      $(".heart12").click(function () {
        $(".heart-12").toggleClass("ri-heart-line");
        $(".heart-12").toggleClass("ri-heart-fill");
      });
    });
    $("#popular-artwork").owlCarousel({
      loop: false,
      margin: 24,
      dots: false,
      autoplay: false,
      nav: true,
      navText: [
        "<img src='/assets/img/ArrowLeft.svg'>",
        "<img src='/assets/img/ArrowRight.svg'>",
      ],
      responsive: {
        0: { items: 1, nav: false, dots: true },
        575: { items: 1 },
        768: { items: 2 },
        992: { items: 2 },
        1100: { items: 2 },
        1200: { items: 3 },
      },
    });
    $("#clock").countdown("2021/10/10", function (event) {
      $("#days").html(event.strftime("%D"));
      $("#hours").html(event.strftime("%H"));
      $("#minutes").html(event.strftime("%M"));
      $("#seconds").html(event.strftime("%S"));
    });
    $(document).ready(function () {
      $(".icon-share-otr").click(function () {
        $(".share-pop").toggleClass("share-pop-open");
      });
    });
    $(document).ready(function () {
      $(".btn-1").click(function () {
        $(".filter-1").toggleClass("filter-active");
      });
      $(".btn-2").click(function () {
        $(".filter-2").toggleClass("filter-active");
      });
      $(".btn-3").click(function () {
        $(".filter-3").toggleClass("filter-active");
      });
      $(".btn-4").click(function () {
        $(".filter-4").toggleClass("filter-active");
      });
      $(".btn-5").click(function () {
        $(".filter-5").toggleClass("filter-active");
      });
      $(".btn-6").click(function () {
        $(".filter-6").toggleClass("filter-active");
      });
      $(".btn-7").click(function () {
        $(".filter-7").toggleClass("filter-active");
      });
      $(".btn-8").click(function () {
        $(".filter-8").toggleClass("filter-active");
      });
      $(".btn-9").click(function () {
        $(".filter-9").toggleClass("filter-active");
      });
      $(".clear-filter").click(function () {
        $(".button").removeClass("filter-active");
      });
    });
    $(document).ready(function () {
      $(".boxx-2").click(function () {
        $(".boxx-2").toggleClass("active-border");
        $(".boxx-3").removeClass("active-border");
        $(".boxx-4").removeClass("active-border");
      });
      $(".boxx-3").click(function () {
        $(".boxx-3").toggleClass("active-border");
        $(".boxx-2").removeClass("active-border");
        $(".boxx-4").removeClass("active-border");
      });
      $(".boxx-4").click(function () {
        $(".boxx-4").toggleClass("active-border");
        $(".boxx-3").removeClass("active-border");
        $(".boxx-2").removeClass("active-border");
      });
    });
    $(document).ready(function () {
      $(".togle4").click(function () {
        $(this).toggleClass("togle-open");
        $(".togle5").removeClass("togle-open");
        $(".togle6").removeClass("togle-open");
      });
      $(".togle5").click(function () {
        $(this).toggleClass("togle-open");
        $(".togle4").removeClass("togle-open");
        $(".togle6").removeClass("togle-open");
      });
      $(".togle6").click(function () {
        $(this).toggleClass("togle-open");
        $(".togle5").removeClass("togle-open");
        $(".togle4").removeClass("togle-open");
      });
    });
  },
  "./src/scss/app.scss": /*!***************************!*\
!*** ./src/scss/app.scss ***!
\***************************/ /*!no static exports found*/ function (
    module,
    exports
  ) {},
  0: /*!*************************************************!*\
!*** multi ./src/js/app.js ./src/scss/app.scss ***!
\*************************************************/ /*!no static exports found*/ function (
    module,
    exports,
    __webpack_require__
  ) {
    __webpack_require__(
      /*!F:\Ansarians\ethernal-all\Ethernal\src\js\app.js*/ "./src/js/app.js"
    );
    module.exports = __webpack_require__(
      /*!F:\Ansarians\ethernal-all\Ethernal\src\scss\app.scss*/ "./src/scss/app.scss"
    );
  },
});
