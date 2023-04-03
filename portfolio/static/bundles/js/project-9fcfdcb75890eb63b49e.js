(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["project"],{

/***/ "./portfolio/static/js/app/project.js":
/*!********************************************!*\
  !*** ./portfolio/static/js/app/project.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_project_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sass/project.scss */ "./portfolio/static/sass/project.scss");
/* harmony import */ var tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/tinymce.min.js */ "./node_modules/tinymce/tinymce.min.js");
/* harmony import */ var tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tinymce_icons_default_icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tinymce/icons/default/icons.js */ "./node_modules/tinymce/icons/default/icons.js");
/* harmony import */ var tinymce_icons_default_icons_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tinymce_icons_default_icons_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tinymce_themes_silver_theme_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tinymce/themes/silver/theme.js */ "./node_modules/tinymce/themes/silver/theme.js");
/* harmony import */ var tinymce_themes_silver_theme_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tinymce_themes_silver_theme_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tinymce_skins_content_default_content_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tinymce/skins/content/default/content.min.css */ "./node_modules/tinymce/skins/content/default/content.min.css");
/* harmony import */ var tinymce_skins_content_default_content_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tinymce/skins/content/default/content.css */ "./node_modules/tinymce/skins/content/default/content.css");
/* harmony import */ var tinymce_skins_ui_oxide_skin_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tinymce/skins/ui/oxide/skin.min.css */ "./node_modules/tinymce/skins/ui/oxide/skin.min.css");
/* harmony import */ var tinymce_skins_ui_oxide_content_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tinymce/skins/ui/oxide/content.min.css */ "./node_modules/tinymce/skins/ui/oxide/content.min.css");
/* harmony import */ var tinymce_models_dom_model_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tinymce/models/dom/model.js */ "./node_modules/tinymce/models/dom/model.js");
/* harmony import */ var tinymce_models_dom_model_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tinymce_models_dom_model_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_axiosFactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/axiosFactory */ "./portfolio/static/js/components/axiosFactory.js");
/* harmony import */ var _components_default__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/default */ "./portfolio/static/js/components/default.js");
/* harmony import */ var _components_projectForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/projectForm */ "./portfolio/static/js/components/projectForm.js");
/* harmony import */ var detect_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! detect-browser */ "./node_modules/detect-browser/es/index.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! htmx.org/dist/htmx */ "./node_modules/htmx.org/dist/htmx.js");
/* harmony import */ var htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/module.esm.js");
/* harmony import */ var _alpinejs_intersect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @alpinejs/intersect */ "./node_modules/@alpinejs/intersect/dist/module.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/ethers.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! izitoast/dist/js/iziToast.min.js */ "./node_modules/izitoast/dist/js/iziToast.min.js");
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! scrollmagic */ "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(scrollmagic__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_21__);


// Select 2
// import "select2/dist/css/select2.min.css";
// import "select2/dist/js/select2.min.js";

// tinymce









// components




// functional imports




// import Mask from "@ryangjchandler/alpine-mask";



// alert messages



// import "flowbite";




// import "@lottiefiles/lottie-player";

// Global Initializations for importedlibraries //
//----------------------------------------------------------
// initialize animejs
window.anime = animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_19__["default"];
window.ScrollMagic = (scrollmagic__WEBPACK_IMPORTED_MODULE_20___default());

// initialize htmx
window.htmx = (htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_13___default());
// // initialize tinymce
window.tinymce = (tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_1___default());
// initialize lottie web and lottie player
window.lottieweb = (lottie_web__WEBPACK_IMPORTED_MODULE_21___default());

// initialize ether js for crypto payment
window.ethers = ethers__WEBPACK_IMPORTED_MODULE_22__;
// initialize axios async post|get request
window.axios = _components_axiosFactory__WEBPACK_IMPORTED_MODULE_9__["default"];
// initialize swiper.js
window.Swiper = swiper__WEBPACK_IMPORTED_MODULE_12__["default"];

// initiailize izitoast alerts
window.iziToast = (izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_18___default());

// set timeout for inactive user
let timer = null;
function resetTimer() {
  // function to reset the timeout
  clearTimeout(timer);
  alpinejs__WEBPACK_IMPORTED_MODULE_14__["default"].store('isInactive', false);
  startTimeout;
}
function startTimeout() {
  // function to start the time out
  timer = setTimeout(timeout, 1000); // 5 seconds
}

function timeout() {
  // function to store the boolean for the time out
  // Set isInactive variable to true
  alpinejs__WEBPACK_IMPORTED_MODULE_14__["default"].store('isInactive', true);
}
startTimeout();
document.addEventListener('mousemove', resetTimer);
document.addEventListener('keyup', resetTimer);
document.addEventListener('scroll', resetTimer);

// default variables
const sw = "/sw.js";
const home = "/";

// detect browser type
const browser = (0,detect_browser__WEBPACK_IMPORTED_MODULE_23__.detect)();

// set service worker link and scope start link
//----------------------------------------------------------

// get global variables from the base.html file for
// push notification and pwa install button
//----------------------------------------------------------
let {
  APPLICATION_SERVER_KEY,
  CREATE_WP_DEVICE,
  SEND_NOTIFICATION
} = window.WEB_PUSH_CFG;

//----------------------------------------------------------

// generate key for push notifications
//----------------------------------------------------------
// https://gist.github.com/Klerith/80abd742d726dd587f4bd5d6a0ab26b6#file-urlbase64touint8array-js
function urlBase64ToUint8Array(base64String) {
  var padding = "=".repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");
  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);
  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

//----------------------------------------------------------
// this is to subscribe to push notification from the browser to the server
//----------------------------------------------------------
async function saveSubscribeObj(subscription) {
  // save subscription to the server
  const subscriptionJson = subscription.toJSON();
  const endpointParts = subscriptionJson.endpoint.split("/");
  const registrationId = endpointParts[endpointParts.length - 1];
  const predata = {
    status_type: "subscribe",
    subscription: subscriptionJson,
    browser: browser.name.toLowerCase(),
    p256dh: subscriptionJson.keys.p256dh,
    auth: subscriptionJson.keys.auth,
    user_agent: navigator.getUserAgent,
    registration_id: registrationId,
    group: "users"
  };
  const data = JSON.stringify(predata);
  await _components_axiosFactory__WEBPACK_IMPORTED_MODULE_9__["default"].post(CREATE_WP_DEVICE, data, {
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": document.head.querySelector('meta[name="csrf-token"]').getAttribute("content")
    }
  }).then(function (response) {
    if (true) {
      toastr__WEBPACK_IMPORTED_MODULE_16___default().success({
        title: "[PUSH NOTIFICATION SUBSCRIPTION]",
        balloon: true,
        position: "topRight",
        animateInside: true,
        message: `Subscription Sent Successfully ${response.statusText}`
      });
    }
    const subscribeNotificationButton = document.getElementById("subscribeNotificationButton");
    subscribeNotificationButton.classList.toggle("hidden", true);
    // if subscription is successfully saved to the server
    // then enable the test notification push button to be visible
    setupTriggerButton(subscription);
  }).catch(function (error) {
    if (true) {
      console.log(error);
      izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_18___default().error({
        title: "[PUSH NOTIFICATION SERVER]",
        balloon: true,
        position: "topRight",
        animateInside: true,
        message: `Notification Subscription ${error.message}`
      });
    }
  });
}

//----------------------------------------------------------

// this function is to send subscription notification to the server
//----------------------------------------------------------
async function subscribe(registration) {
  await registration.pushManager.getSubscription().then(function (subscription) {
    if (subscription) {
      if (true) {
        console.log("subscription exists");
      }
      saveSubscribeObj(subscription);
      setupTriggerButton(subscription);
    }
  });
  const options = {
    userVisibleOnly: true,
    // required by chrome
    applicationServerKey: urlBase64ToUint8Array(APPLICATION_SERVER_KEY)
  };
  await registration.pushManager.subscribe(options).then(
  // requesting to subscribe from the server
  function (subscription) {
    if (true) {
      console.log(`subscription: `, subscription);
      console.log(subscription.endpoint);
    }

    // subscription is now saved to the server
    saveSubscribeObj(subscription);
    if (true) {
      izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_18___default().success({
        title: "[PUSH NOTIFICATION SUBSCRIPTION]",
        balloon: true,
        position: "topRight",
        animateInside: true,
        message: `Subscription Sent Successfully`
      });
    }
  }).catch(error => {
    // if there is an error figure the error and throw an appropraite error message to
    // the user so he knows exactly what is wrong and can move forward or adjust for a
    // device.
    if (true) {
      console.log(error);
      izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_18___default().error({
        title: "[PUSH NOTIFICATION SUBSCRIPTION]",
        balloon: true,
        position: "topRight",
        animateInside: true,
        message: `${error.message}`
      });
    }
  });
}

//----------------------------------------------------------

// The function to trigger the push notification from the browser
//----------------------------------------------------------
// subscribe(reg);
function setupSubscribeButton(reg) {
  if (document.getElementById("subscribeNotificationButton")) {
    const subscribeNotificationButton = document.getElementById("subscribeNotificationButton");
    subscribeNotificationButton.classList.toggle("hidden", false);
    subscribeNotificationButton.classList.toggle("md:hidden", false);
    subscribeNotificationButton.addEventListener("click", () => {
      subscribe(reg);
      console.log("Subscribe Button Set");
    });
  }
}
function disableSubscribeButton() {
  if (document.getElementById("subscribeNotificationButton")) {
    const subscribeNotificationButton = document.getElementById("subscribeNotificationButton");
    subscribeNotificationButton.classList.toggle("hidden", true);
    subscribeNotificationButton.classList.toggle("md:hidden", true);
  }
}

//----------------------------------------------------------
// This function is for a user to test the push notification
//----------------------------------------------------------
async function setupTriggerButton(subscription) {
  const subJson = subscription.toJSON();
  const endpointParts = subJson.endpoint.split("/");
  const registrationId = endpointParts[endpointParts.length - 1];
  const predata = {
    registration_id: registrationId,
    auth: subJson.keys.auth,
    head: "Jerry Says 🔊 ",
    body: "This is how push notifications from my site will be shown on your devices."
  };
  const data = JSON.stringify(predata);
  await _components_axiosFactory__WEBPACK_IMPORTED_MODULE_9__["default"].post(SEND_NOTIFICATION, data, {
    headers: {
      "Content-Type": "application/json"
    }
  }).then(async function (response) {
    await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_18___default().info({
      title: "[PUSH NOTIFICATION TEST SUCCESSFUL]",
      balloon: true,
      position: "topRight",
      animateInside: true,
      message: response.data.message
    });
  }).catch(async function (error) {
    await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_18___default().error({
      title: "[PUSH NOTIFICATION TEST ERROR]",
      balloon: true,
      position: "topRight",
      animateInside: true,
      message: error.response.data.detail
    });
  });
}

//----------------------------------------------------------
// End push notification button
//----------------------------------------------------------

// enable service worker, then when service worker is enabled request
// permission for push notification and location services from the browser
//----------------------------------------------------------
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(sw, {
      scope: home
    }).then(registration => {
      if (true) {
        console.log("Service worker registeration succeeded: ", registration);
      }
      navigator.serviceWorker.ready.then(function async(registration) {
        initialiseState(registration);
        if (registration.installing) {
          console.log("Service worker installing");
        } else if (registration.waiting) {
          console.log("Service worker installed");
        } else if (registration.active) {
          console.log("Service worker active");
        }
      });
    }).catch(err => {
      if (true) {
        izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_18___default().error({
          title: "[SERVICE WORKER]",
          balloon: true,
          position: "topRight",
          animateInside: true,
          message: "Service Worker Failed to Register"
        });
        console.log(err);
      }
    });
  });
}
const initialiseState = reg => {
  if (!reg.showNotification) {
    izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_18___default().error({
      title: "[PUSH NOTIFICATION UNSUPPORTED]",
      balloon: true,
      position: "topRight",
      animateInside: true,
      message: "Showing <strong>PUSH NOTIFICATIONS</strong> is unsupported"
    });
    return;
  } else if (reg.showNotification) {
    disableSubscribeButton();
  }
  if (Notification.permission === "denied") {
    izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_18___default().warning({
      title: "[PUSH NOTIFICATION DENIED]",
      balloon: true,
      position: "topRight",
      animateInside: true,
      message: "You prevented us from shwoing notifications. Manually check if you have prevented push notifcation from us."
    });
    return;
  } else if (Notification.permission !== "denied") {
    disableSubscribeButton();
  }
  if (!("PushManager" in window)) {
    izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_18___default().info({
      title: "[PUSH BNOTIFICATION UNAVAILBALE]",
      balloon: true,
      position: "topRight",
      animateInside: true,
      message: "Push notification is not allowed in your browser."
    });
    return;
  } else if ("PushManager" in window) {
    disableSubscribeButton();
  }
  reg.pushManager.getSubscription().then(sub => {
    console.log("Registration Object", reg);
    if (!sub || sub === null) {
      setupSubscribeButton(reg);
    } else if (sub !== null || sub) {
      console.log("Subscribe Already Done");
      // setupTriggerButton(sub);
      disableSubscribeButton();
    }
  });
};

// Alpine JS Scripts
alpinejs__WEBPACK_IMPORTED_MODULE_14__["default"].plugin(_alpinejs_intersect__WEBPACK_IMPORTED_MODULE_15__["default"]);
// Alpine.plugin(Mask);

window.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_14__["default"];
// Alpine.data("SignupForm", SignupForm);
// Alpine.data("ConfirmEmailForm", ConfirmEmailForm);
// Alpine.data("LoginForm", LoginForm);
// Alpine.data("PChangeForm", PChangeForm);
// Alpine.data("ResetPasswordForm", ResetPasswordForm);
// Alpine.data("SubscriptionForm", SubscriptionForm);
// Alpine.data("Google", Google);
alpinejs__WEBPACK_IMPORTED_MODULE_14__["default"].data("Default", _components_default__WEBPACK_IMPORTED_MODULE_10__["default"]);
alpinejs__WEBPACK_IMPORTED_MODULE_14__["default"].data("Project", _components_projectForm__WEBPACK_IMPORTED_MODULE_11__["default"]);
// Alpine.data("UserDetail", UserDetail);
// Alpine.data('ContactForm', ContactForm),
// Alpine.data('StickyNav', StickyNav);
// Alpine.data('ChartJs', ChartJs);
alpinejs__WEBPACK_IMPORTED_MODULE_14__["default"].start();
//----------------------------------------------------------

// -----------------------------------------------------------------
// TRIGGER INSTALL BUTTON FOR PROGRESSIVE WEB APPLICATION
// ------------------------------------------------------------------
// check if the PWA is already installed or not
//----------------------------------------------------------
if (window.matchMedia("(display-mode: standalone)").matches) {
  console.log("PWA is already installed");
  localStorage.removeItem("deferredPrompt");
} else {
  console.log("PWA is not installed");
  window.addEventListener("beforeinstallprompt", event => {
    if (true) {
      console.log("👍[PWA]", "beforeinstallprompt", JSON.stringify(event));
    }

    // Prevent Chrome 67 and earlier from automatically showing the prompt
    event.preventDefault();
    if (event) {
      // Stash the event so it can be triggered later.
      localStorage.setItem("deferredPrompt", JSON.stringify(event));
      window.deferredPrompt = event;
    } else {
      if (!("deferredPrompt" in localStorage)) {
        self.closeInstallPrompt = true;
        self.showInstallFloatIcon = true;
      }
    }
  });
}

// load static script files after htmx loads
//----------------------------------------------------------

[
// "htmx:onLoad",
// "htmx:load",
// "htmx:afterSettle",
"htmx:afterSwap"
// "htmx:afterOnLoad",
].forEach(evt => {
  window.addEventListener(evt, function () {
    window.anime = animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_19__["default"];
    window.scrollMagic = (scrollmagic__WEBPACK_IMPORTED_MODULE_20___default());
    window.iziToast = (izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_18___default());
    // // initialize tinymce
    window.tinymce = (tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_1___default());
    // initialize lottie web and lottie player
    window.lottieweb = (lottie_web__WEBPACK_IMPORTED_MODULE_21___default());

    // initialize ether js for crypto payment
    window.ethers = ethers__WEBPACK_IMPORTED_MODULE_22__;
    // initialize axios async post|get request
    window.axios = _components_axiosFactory__WEBPACK_IMPORTED_MODULE_9__["default"];
    // initialize swiper.js
    window.Swiper = swiper__WEBPACK_IMPORTED_MODULE_12__["default"];
    // initiailize izitoast alerts

    const counters = document.querySelectorAll(".counter");
    const car = document.getElementById("car");
    const controller = new (scrollmagic__WEBPACK_IMPORTED_MODULE_20___default().Controller)();

    // if(document.getElementById('const')){
    //   lottieweb.loadAnimation({
    //     container: document.getElementById('const'),
    //     path: "/static/vendors/images/lottie/under-construction.json",
    //     renderer: 'svg',
    //     loop: true,
    //     autoPlay: true,
    //     name: 'Under Construction'
    //   });
    // }

    function startCounting() {
      if (counters) {
        counters.forEach(counter => {
          (0,animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_19__["default"])({
            targets: counter,
            innerHTML: [0, counter.getAttribute("data-count")],
            easing: "easeInOutSine",
            round: 1,
            duration: 4000
          });
        });
      }
    }
    function animateHows() {
      if (document.querySelectorAll(".how")) {
        (0,animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_19__["default"])({
          targets: ".how",
          translateX: 56,
          easing: "easeInOutSine",
          duration: 800,
          opacity: 1,
          delay: animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_19__["default"].stagger(200, {
            start: 500
          })
        });
      }
    }
    if (document.getElementById("countTrigger")) {
      new (scrollmagic__WEBPACK_IMPORTED_MODULE_20___default().Scene)({
        triggerElement: "#countTrigger",
        triggerHook: "onEnter",
        duration: "100%",
        reverse: false,
        offset: 50
      }).on("enter", function () {
        startCounting();
      }).addTo(controller);
    }
    if (document.getElementById("track")) {
      new (scrollmagic__WEBPACK_IMPORTED_MODULE_20___default().Scene)({
        triggerElement: "#track",
        triggerHook: "onEnter",
        duration: "100%",
        reverse: true,
        offset: 50
      }).on("enter", function () {
        carDrive();
      }).addTo(controller);
    }
    if (document.getElementById("hows")) {
      new (scrollmagic__WEBPACK_IMPORTED_MODULE_20___default().Scene)({
        triggerElement: "#hows",
        triggerHook: "onEnter",
        duration: "100%",
        reverse: false,
        offset: 100
      }).on("enter", function () {
        animateHows();
      }).addTo(controller);
    }
    if (document.querySelectorAll(".intro")) {
      (0,animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_19__["default"])({
        targets: ".intro",
        translateX: -56,
        easing: "easeInOutSine",
        duration: 800,
        opacity: 1,
        delay: animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_19__["default"].stagger(200, {
          start: 500
        })
      });
    }
    function carDrive() {
      if (car) {
        (0,animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_19__["default"])({
          targets: "#car",
          translateX: {
            value: "-100vw",
            duration: 5000
          },
          easing: "easeInOutSine",
          opacity: 1,
          delay: animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_19__["default"].stagger(200, {
            start: 500
          }),
          direction: "normal",
          loop: false
        });
      }
    }
  });
});

/***/ }),

/***/ "./portfolio/static/js/components/axiosFactory.js":
/*!********************************************************!*\
  !*** ./portfolio/static/js/components/axiosFactory.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


// const axios_session = axios.create({
//     xsrfCookieName : 'csrftoken',
//     xsrfHeaderName : "X-CSRFToken",
//     withCredentials : true,
//     timeout : 15000
// });
(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = true;
(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.xsrfCookieName) = 'csrftoken';
(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.xsrfHeaderName) = "X-CSRFToken";
(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.timeout) = 25000;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((axios__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./portfolio/static/js/components/default.js":
/*!***************************************************!*\
  !*** ./portfolio/static/js/components/default.js ***!
  \***************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/darkcodr/www/darkcodr/portfolio/portfolio/static/js/components/default.js: Unexpected token, expected \",\" (71:4)\n\n\u001b[0m \u001b[90m 69 |\u001b[39m     read\u001b[33m:\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 70 |\u001b[39m     open\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 71 |\u001b[39m     updateOrCreate\u001b[33m:\u001b[39m \u001b[36mfalse\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 72 |\u001b[39m     processingRequest\u001b[33m:\u001b[39m \u001b[36mfalse\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 73 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 74 |\u001b[39m     \u001b[90m// necessary variables\u001b[39m\u001b[0m\n    at instantiate (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:653:32)\n    at constructor (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:947:12)\n    at Parser.raise (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:3261:19)\n    at Parser.unexpected (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:3291:16)\n    at Parser.expect (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:3633:28)\n    at Parser.parseObjectLike (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:11637:14)\n    at Parser.parseExprAtom (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:11157:23)\n    at Parser.parseExprSubscripts (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:10870:23)\n    at Parser.parseUpdate (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:10853:21)\n    at Parser.parseMaybeUnary (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:10829:23)\n    at Parser.parseMaybeUnaryOrPrivate (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:10667:61)\n    at Parser.parseExprOps (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:10672:23)\n    at Parser.parseMaybeConditional (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:10649:23)\n    at Parser.parseMaybeAssign (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:10610:21)\n    at Parser.parseExpressionBase (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:10564:23)\n    at /home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:10560:39\n    at Parser.allowInAnd (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:12250:16)\n    at Parser.parseExpression (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:10560:17)\n    at Parser.parseReturnStatement (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:12930:28)\n    at Parser.parseStatementContent (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:12577:21)\n    at Parser.parseStatementLike (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:12544:17)\n    at Parser.parseStatementListItem (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:12524:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:13116:61)\n    at Parser.parseBlockBody (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:13109:10)\n    at Parser.parseBlock (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:13097:10)\n    at Parser.parseFunctionBody (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:11922:24)\n    at Parser.parseFunctionBodyAndFinish (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:11908:10)\n    at /home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:13252:12\n    at Parser.withSmartMixTopicForbiddingContext (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:12232:14)\n    at Parser.parseFunction (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:13251:10)\n    at Parser.parseExportDefaultExpression (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:13736:19)\n    at Parser.parseExport (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:13663:25)\n    at Parser.parseStatementContent (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:12656:27)\n    at Parser.parseStatementLike (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:12544:17)\n    at Parser.parseModuleItem (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:12521:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:13116:36)\n    at Parser.parseBlockBody (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:13109:10)\n    at Parser.parseProgram (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:12435:10)\n    at Parser.parseTopLevel (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:12425:25)\n    at Parser.parse (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:14245:10)\n    at parse (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/parser/lib/index.js:14286:38)\n    at parser (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/core/lib/parser/index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/core/lib/transformation/normalize-file.js:64:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/core/lib/transformation/index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (/home/darkcodr/www/darkcodr/portfolio/node_modules/@babel/core/lib/transform.js:22:41)\n    at transform.next (<anonymous>)\n    at step (/home/darkcodr/www/darkcodr/portfolio/node_modules/gensync/index.js:261:32)");

/***/ }),

/***/ "./portfolio/static/js/components/projectForm.js":
/*!*******************************************************!*\
  !*** ./portfolio/static/js/components/projectForm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectProcessing)
/* harmony export */ });
/* harmony import */ var _axiosFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axiosFactory */ "./portfolio/static/js/components/axiosFactory.js");
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast/dist/js/iziToast.min.js */ "./node_modules/izitoast/dist/js/iziToast.min.js");
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! htmx.org/dist/htmx */ "./node_modules/htmx.org/dist/htmx.js");
/* harmony import */ var htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default */ "./portfolio/static/js/components/default.js");

 // you have access to iziToast now


const progressbar = document.getElementById("progress");
const prograssAmount = document.getElementById("progressLabel");

// function to simulate sleep operation on an event
function sleep(ms) {
  return new window.Promise(resolve => setTimeout(resolve, ms));
}
function ProjectProcessing() {
  return {
    prjectProcessing: false,
    async submitProject() {
      this.prjectProcessing = true;
      _default__WEBPACK_IMPORTED_MODULE_3__["default"].processingRequest = true;
      progressbar.value = 0;
      prograssAmount.innerText = '0%';
      const formElement = this.$refs.form;
      const action = formElement.action;
      let data = new FormData(formElement);
      await formElement.querySelectorAll("[name]").forEach(fieldElement => {
        if (fieldElement.name === "is_published") {
          if (fieldElement.value === 'on') {
            data.append(fieldElement.name, true);
          } else {
            data.append(fieldElement.name, false);
          }
        } else if (fieldElement.type === "textarea") {
          let textarea = fieldElement.id;
          data.append(fieldElement.name, window.parent.tinymce.get(textarea).getContent());
        } else {
          data.append(fieldElement.name, fieldElement.value);
        }
      });
      console.dir(data);
      await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].post(action, data).then(response => {
        // const task_id = response.data.task_id;
        // const cache_key = response.data.cache_key;
        // const message = response.data.message;

        if (response.status === 201) {
          izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().success({
            title: "PROJECT ADDED",
            message: "Project Successfully Added"
          });
          // this.prjectProcessing = false;
          progressbar.value = 100;
          prograssAmount.innerText = '100%';
          _default__WEBPACK_IMPORTED_MODULE_3__["default"].processingRequest = false;
          // this.checkStatus(task_id, cache_key);
        }
      }).catch(error => {
        izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().error({
          title: "PROJECT UPLOADING FAILED",
          message: error.message
        });
        // this.prjectProcessing = false;
      });
    },

    async checkStatus(task_id, cache_key) {
      await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/api/projects/check-processing/${task_id}/${cache_key}/`).then(async response => {
        if (response.status === 201) {
          progressbar.value = 100;
          prograssAmount.innerText = '100%';
          await sleep(500);
          _default__WEBPACK_IMPORTED_MODULE_3__["default"].processingRequest = false;
          izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().success({
            title: "PROJECT PROCESSING",
            message: response.data.message
          });
          await htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_2___default().ajax('GET', `/projects/${response.data.object.slug}/`, {
            target: "#detail",
            swap: "innerHTML"
          });
          _default__WEBPACK_IMPORTED_MODULE_3__["default"].detail = true;
        } else {
          progressbar.value++;
          prograssAmount.innerText = `${progressbar.value}%`;
          this.checkStatus(task_id, cache_key);
        }
      }).catch(error => {
        _default__WEBPACK_IMPORTED_MODULE_3__["default"].processingRequest = false;
        izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().error({
          title: "PROJECT PROCESSING FAILED",
          message: error.message
        });
        this.prjectProcessing = false;
      });
    }
  };
}

/***/ }),

/***/ "./portfolio/static/sass/project.scss":
/*!********************************************!*\
  !*** ./portfolio/static/sass/project.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "?8131":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_alpinejs_intersect_dist_module_esm_js-node_modules_alpinejs_dist_module_-b1cb38"], () => (__webpack_exec__("./portfolio/static/js/app/project.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxDQUFDLEdBQUcsQ0FBQztVQUNoQjNLLGtFQUE0QixHQUFHLEtBQUs7VUFDcENTLCtFQUFnQixDQUFDO1lBQ2JvRSxLQUFLLEVBQUUsb0JBQW9CO1lBQzNCSSxPQUFPLEVBQUVULFFBQVEsQ0FBQ1QsSUFBSSxDQUFDa0I7VUFDM0IsQ0FBQyxDQUFDO1VBQ0YsTUFBTTdFLDhEQUFTLENBQ1gsS0FBSyxFQUNKLGFBQVlvRSxRQUFRLENBQUNULElBQUksQ0FBQ3VJLE1BQU0sQ0FBQ0MsSUFBSyxHQUFFLEVBQ3pDO1lBQ0lDLE1BQU0sRUFBRSxTQUFTO1lBQ2pCQyxJQUFJLEVBQUU7VUFDVixDQUFDLENBQ0o7VUFDRHpNLHVEQUFpQixHQUFHLElBQUk7UUFDNUIsQ0FBQyxNQUFNO1VBQ0h5SyxXQUFXLENBQUNQLEtBQUssRUFBRztVQUNwQlEsY0FBYyxDQUFDUSxTQUFTLEdBQUksR0FBRVQsV0FBVyxDQUFDUCxLQUFNLEdBQUU7VUFDbEQsSUFBSSxDQUFDZ0MsV0FBVyxDQUFDQyxPQUFPLEVBQUVDLFNBQVMsQ0FBQztRQUN4QztNQUNKLENBQUMsQ0FBQyxDQUNENUcsS0FBSyxDQUFFQyxLQUFLLElBQUs7UUFDZHpGLGtFQUE0QixHQUFHLEtBQUs7UUFDcENTLDZFQUFjLENBQUM7VUFDWG9FLEtBQUssRUFBRSwyQkFBMkI7VUFDbENJLE9BQU8sRUFBRVEsS0FBSyxDQUFDUjtRQUNuQixDQUFDLENBQUM7UUFDRixJQUFJLENBQUM4RixnQkFBZ0IsR0FBRyxLQUFLO01BQ2pDLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQztBQUNMOzs7Ozs7Ozs7Ozs7QUNuSEE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vcG9ydGZvbGlvLy4vcG9ydGZvbGlvL3N0YXRpYy9qcy9hcHAvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vcG9ydGZvbGlvLy4vcG9ydGZvbGlvL3N0YXRpYy9qcy9jb21wb25lbnRzL2F4aW9zRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vcG9ydGZvbGlvLy4vcG9ydGZvbGlvL3N0YXRpYy9qcy9jb21wb25lbnRzL3Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby9wb3J0Zm9saW8vLi9wb3J0Zm9saW8vc3RhdGljL3Nhc3MvcHJvamVjdC5zY3NzIiwid2VicGFjazovL3BvcnRmb2xpby9wb3J0Zm9saW8vaWdub3JlZHwvaG9tZS9kYXJrY29kci93d3cvZGFya2NvZHIvcG9ydGZvbGlvL25vZGVfbW9kdWxlcy9ibi5qcy9saWJ8YnVmZmVyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uLy4uL3Nhc3MvcHJvamVjdC5zY3NzXCI7XG5cbi8vIFNlbGVjdCAyXG4vLyBpbXBvcnQgXCJzZWxlY3QyL2Rpc3QvY3NzL3NlbGVjdDIubWluLmNzc1wiO1xuLy8gaW1wb3J0IFwic2VsZWN0Mi9kaXN0L2pzL3NlbGVjdDIubWluLmpzXCI7XG5cbi8vIHRpbnltY2VcbmltcG9ydCB0aW55bWNlIGZyb20gXCJ0aW55bWNlL3RpbnltY2UubWluLmpzXCI7XG5pbXBvcnQgXCJ0aW55bWNlL2ljb25zL2RlZmF1bHQvaWNvbnMuanNcIjtcbmltcG9ydCBcInRpbnltY2UvdGhlbWVzL3NpbHZlci90aGVtZS5qc1wiO1xuaW1wb3J0IFwidGlueW1jZS9za2lucy9jb250ZW50L2RlZmF1bHQvY29udGVudC5taW4uY3NzXCI7XG5pbXBvcnQgXCJ0aW55bWNlL3NraW5zL2NvbnRlbnQvZGVmYXVsdC9jb250ZW50LmNzc1wiO1xuaW1wb3J0IFwidGlueW1jZS9za2lucy91aS9veGlkZS9za2luLm1pbi5jc3NcIjtcbmltcG9ydCBcInRpbnltY2Uvc2tpbnMvdWkvb3hpZGUvY29udGVudC5taW4uY3NzXCI7XG5pbXBvcnQgXCJ0aW55bWNlL21vZGVscy9kb20vbW9kZWwuanNcIjtcblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi9jb21wb25lbnRzL2F4aW9zRmFjdG9yeVwiO1xuaW1wb3J0IEluaXRpYWxpemUgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGVmYXVsdFwiO1xuaW1wb3J0IFByb2plY3RQcm9jZXNzaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvcHJvamVjdEZvcm0nO1xuXG4vLyBmdW5jdGlvbmFsIGltcG9ydHNcbmltcG9ydCB7IGRldGVjdCB9IGZyb20gXCJkZXRlY3QtYnJvd3NlclwiO1xuaW1wb3J0IFN3aXBlciBmcm9tIFwic3dpcGVyXCI7XG5pbXBvcnQgaHRteCBmcm9tIFwiaHRteC5vcmcvZGlzdC9odG14XCI7XG5pbXBvcnQgQWxwaW5lIGZyb20gXCJhbHBpbmVqc1wiO1xuLy8gaW1wb3J0IE1hc2sgZnJvbSBcIkByeWFuZ2pjaGFuZGxlci9hbHBpbmUtbWFza1wiO1xuaW1wb3J0IGludGVyc2VjdCBmcm9tIFwiQGFscGluZWpzL2ludGVyc2VjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuXG4vLyBhbGVydCBtZXNzYWdlc1xuaW1wb3J0IHRvYXN0ciBmcm9tIFwidG9hc3RyXCI7XG5pbXBvcnQgXCJpeml0b2FzdC9kaXN0L2Nzcy9pemlUb2FzdC5taW4uY3NzXCI7XG5pbXBvcnQgaXppVG9hc3QgZnJvbSBcIml6aXRvYXN0L2Rpc3QvanMvaXppVG9hc3QubWluLmpzXCI7XG4vLyBpbXBvcnQgXCJmbG93Yml0ZVwiO1xuXG5pbXBvcnQgYW5pbWUgZnJvbSBcImFuaW1lanMvbGliL2FuaW1lLmVzLmpzXCI7XG5pbXBvcnQgU2Nyb2xsTWFnaWMgZnJvbSBcInNjcm9sbG1hZ2ljXCI7XG5cbmltcG9ydCBsb3R0aWV3ZWIgZnJvbSBcImxvdHRpZS13ZWJcIjtcbi8vIGltcG9ydCBcIkBsb3R0aWVmaWxlcy9sb3R0aWUtcGxheWVyXCI7XG5cbi8vIEdsb2JhbCBJbml0aWFsaXphdGlvbnMgZm9yIGltcG9ydGVkbGlicmFyaWVzIC8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGluaXRpYWxpemUgYW5pbWVqc1xud2luZG93LmFuaW1lID0gYW5pbWU7XG53aW5kb3cuU2Nyb2xsTWFnaWMgPSBTY3JvbGxNYWdpYztcblxuLy8gaW5pdGlhbGl6ZSBodG14XG53aW5kb3cuaHRteCA9IGh0bXg7XG4vLyAvLyBpbml0aWFsaXplIHRpbnltY2VcbndpbmRvdy50aW55bWNlID0gdGlueW1jZTtcbi8vIGluaXRpYWxpemUgbG90dGllIHdlYiBhbmQgbG90dGllIHBsYXllclxud2luZG93LmxvdHRpZXdlYiA9IGxvdHRpZXdlYjtcblxuLy8gaW5pdGlhbGl6ZSBldGhlciBqcyBmb3IgY3J5cHRvIHBheW1lbnRcbndpbmRvdy5ldGhlcnMgPSBldGhlcnM7XG4vLyBpbml0aWFsaXplIGF4aW9zIGFzeW5jIHBvc3R8Z2V0IHJlcXVlc3RcbndpbmRvdy5heGlvcyA9IGF4aW9zO1xuLy8gaW5pdGlhbGl6ZSBzd2lwZXIuanNcbndpbmRvdy5Td2lwZXIgPSBTd2lwZXI7XG5cbi8vIGluaXRpYWlsaXplIGl6aXRvYXN0IGFsZXJ0c1xud2luZG93Lml6aVRvYXN0ID0gaXppVG9hc3Q7XG5cbi8vIHNldCB0aW1lb3V0IGZvciBpbmFjdGl2ZSB1c2VyXG5sZXQgdGltZXIgPSBudWxsO1xuZnVuY3Rpb24gcmVzZXRUaW1lcigpIHtcbiAgLy8gZnVuY3Rpb24gdG8gcmVzZXQgdGhlIHRpbWVvdXRcbiAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgQWxwaW5lLnN0b3JlKCdpc0luYWN0aXZlJywgZmFsc2UpO1xuICBzdGFydFRpbWVvdXQ7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0VGltZW91dCgpIHtcbiAgLy8gZnVuY3Rpb24gdG8gc3RhcnQgdGhlIHRpbWUgb3V0XG4gIHRpbWVyID0gc2V0VGltZW91dCh0aW1lb3V0LCAxMDAwKTsgLy8gNSBzZWNvbmRzXG59XG5cbmZ1bmN0aW9uIHRpbWVvdXQoKSB7XG4gIC8vIGZ1bmN0aW9uIHRvIHN0b3JlIHRoZSBib29sZWFuIGZvciB0aGUgdGltZSBvdXRcbiAgLy8gU2V0IGlzSW5hY3RpdmUgdmFyaWFibGUgdG8gdHJ1ZVxuICBBbHBpbmUuc3RvcmUoJ2lzSW5hY3RpdmUnLCB0cnVlKTtcbn1cblxuc3RhcnRUaW1lb3V0KCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCByZXNldFRpbWVyKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgcmVzZXRUaW1lcik7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCByZXNldFRpbWVyKTtcblxuLy8gZGVmYXVsdCB2YXJpYWJsZXNcbmNvbnN0IHN3ID0gXCIvc3cuanNcIjtcbmNvbnN0IGhvbWUgPSBcIi9cIjtcblxuLy8gZGV0ZWN0IGJyb3dzZXIgdHlwZVxuY29uc3QgYnJvd3NlciA9IGRldGVjdCgpO1xuXG4vLyBzZXQgc2VydmljZSB3b3JrZXIgbGluayBhbmQgc2NvcGUgc3RhcnQgbGlua1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGdldCBnbG9iYWwgdmFyaWFibGVzIGZyb20gdGhlIGJhc2UuaHRtbCBmaWxlIGZvclxuLy8gcHVzaCBub3RpZmljYXRpb24gYW5kIHB3YSBpbnN0YWxsIGJ1dHRvblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5sZXQgeyBBUFBMSUNBVElPTl9TRVJWRVJfS0VZLCBDUkVBVEVfV1BfREVWSUNFLCBTRU5EX05PVElGSUNBVElPTiB9ID1cbiAgd2luZG93LldFQl9QVVNIX0NGRztcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGdlbmVyYXRlIGtleSBmb3IgcHVzaCBub3RpZmljYXRpb25zXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0tsZXJpdGgvODBhYmQ3NDJkNzI2ZGQ1ODdmNGJkNWQ2YTBhYjI2YjYjZmlsZS11cmxiYXNlNjR0b3VpbnQ4YXJyYXktanNcbmZ1bmN0aW9uIHVybEJhc2U2NFRvVWludDhBcnJheShiYXNlNjRTdHJpbmcpIHtcbiAgdmFyIHBhZGRpbmcgPSBcIj1cIi5yZXBlYXQoKDQgLSAoYmFzZTY0U3RyaW5nLmxlbmd0aCAlIDQpKSAlIDQpO1xuICB2YXIgYmFzZTY0ID0gKGJhc2U2NFN0cmluZyArIHBhZGRpbmcpLnJlcGxhY2UoL1xcLS9nLCBcIitcIikucmVwbGFjZSgvXy9nLCBcIi9cIik7XG5cbiAgdmFyIHJhd0RhdGEgPSB3aW5kb3cuYXRvYihiYXNlNjQpO1xuICB2YXIgb3V0cHV0QXJyYXkgPSBuZXcgVWludDhBcnJheShyYXdEYXRhLmxlbmd0aCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByYXdEYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgb3V0cHV0QXJyYXlbaV0gPSByYXdEYXRhLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIG91dHB1dEFycmF5O1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHRoaXMgaXMgdG8gc3Vic2NyaWJlIHRvIHB1c2ggbm90aWZpY2F0aW9uIGZyb20gdGhlIGJyb3dzZXIgdG8gdGhlIHNlcnZlclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5hc3luYyBmdW5jdGlvbiBzYXZlU3Vic2NyaWJlT2JqKHN1YnNjcmlwdGlvbikge1xuICAvLyBzYXZlIHN1YnNjcmlwdGlvbiB0byB0aGUgc2VydmVyXG4gIGNvbnN0IHN1YnNjcmlwdGlvbkpzb24gPSBzdWJzY3JpcHRpb24udG9KU09OKCk7XG4gIGNvbnN0IGVuZHBvaW50UGFydHMgPSBzdWJzY3JpcHRpb25Kc29uLmVuZHBvaW50LnNwbGl0KFwiL1wiKTtcbiAgY29uc3QgcmVnaXN0cmF0aW9uSWQgPSBlbmRwb2ludFBhcnRzW2VuZHBvaW50UGFydHMubGVuZ3RoIC0gMV07XG5cbiAgY29uc3QgcHJlZGF0YSA9IHtcbiAgICBzdGF0dXNfdHlwZTogXCJzdWJzY3JpYmVcIixcbiAgICBzdWJzY3JpcHRpb246IHN1YnNjcmlwdGlvbkpzb24sXG4gICAgYnJvd3NlcjogYnJvd3Nlci5uYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgcDI1NmRoOiBzdWJzY3JpcHRpb25Kc29uLmtleXMucDI1NmRoLFxuICAgIGF1dGg6IHN1YnNjcmlwdGlvbkpzb24ua2V5cy5hdXRoLFxuICAgIHVzZXJfYWdlbnQ6IG5hdmlnYXRvci5nZXRVc2VyQWdlbnQsXG4gICAgcmVnaXN0cmF0aW9uX2lkOiByZWdpc3RyYXRpb25JZCxcbiAgICBncm91cDogXCJ1c2Vyc1wiLFxuICB9O1xuXG4gIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShwcmVkYXRhKTtcblxuICBhd2FpdCBheGlvc1xuICAgIC5wb3N0KENSRUFURV9XUF9ERVZJQ0UsIGRhdGEsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwiWC1DU1JGVG9rZW5cIjogZG9jdW1lbnQuaGVhZFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJylcbiAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKHtcbiAgICAgICAgICB0aXRsZTogXCJbUFVTSCBOT1RJRklDQVRJT04gU1VCU0NSSVBUSU9OXVwiLFxuICAgICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgIG1lc3NhZ2U6IGBTdWJzY3JpcHRpb24gU2VudCBTdWNjZXNzZnVsbHkgJHtyZXNwb25zZS5zdGF0dXNUZXh0fWAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgXCJzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b25cIlxuICAgICAgKTtcbiAgICAgIHN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIsIHRydWUpO1xuICAgICAgLy8gaWYgc3Vic2NyaXB0aW9uIGlzIHN1Y2Nlc3NmdWxseSBzYXZlZCB0byB0aGUgc2VydmVyXG4gICAgICAvLyB0aGVuIGVuYWJsZSB0aGUgdGVzdCBub3RpZmljYXRpb24gcHVzaCBidXR0b24gdG8gYmUgdmlzaWJsZVxuICAgICAgc2V0dXBUcmlnZ2VyQnV0dG9uKHN1YnNjcmlwdGlvbik7XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIGl6aVRvYXN0LmVycm9yKHtcbiAgICAgICAgICB0aXRsZTogXCJbUFVTSCBOT1RJRklDQVRJT04gU0VSVkVSXVwiLFxuICAgICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgIG1lc3NhZ2U6IGBOb3RpZmljYXRpb24gU3Vic2NyaXB0aW9uICR7ZXJyb3IubWVzc2FnZX1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIHRoaXMgZnVuY3Rpb24gaXMgdG8gc2VuZCBzdWJzY3JpcHRpb24gbm90aWZpY2F0aW9uIHRvIHRoZSBzZXJ2ZXJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYXN5bmMgZnVuY3Rpb24gc3Vic2NyaWJlKHJlZ2lzdHJhdGlvbikge1xuICBhd2FpdCByZWdpc3RyYXRpb24ucHVzaE1hbmFnZXJcbiAgICAuZ2V0U3Vic2NyaXB0aW9uKClcbiAgICAudGhlbihmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJzdWJzY3JpcHRpb24gZXhpc3RzXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2F2ZVN1YnNjcmliZU9iaihzdWJzY3JpcHRpb24pO1xuICAgICAgICBzZXR1cFRyaWdnZXJCdXR0b24oc3Vic2NyaXB0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHVzZXJWaXNpYmxlT25seTogdHJ1ZSwgLy8gcmVxdWlyZWQgYnkgY2hyb21lXG4gICAgYXBwbGljYXRpb25TZXJ2ZXJLZXk6IHVybEJhc2U2NFRvVWludDhBcnJheShBUFBMSUNBVElPTl9TRVJWRVJfS0VZKSxcbiAgfTtcblxuICBhd2FpdCByZWdpc3RyYXRpb24ucHVzaE1hbmFnZXJcbiAgICAuc3Vic2NyaWJlKG9wdGlvbnMpXG4gICAgLnRoZW4oXG4gICAgICAvLyByZXF1ZXN0aW5nIHRvIHN1YnNjcmliZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgIGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgc3Vic2NyaXB0aW9uOiBgLCBzdWJzY3JpcHRpb24pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHN1YnNjcmlwdGlvbi5lbmRwb2ludCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdWJzY3JpcHRpb24gaXMgbm93IHNhdmVkIHRvIHRoZSBzZXJ2ZXJcbiAgICAgICAgc2F2ZVN1YnNjcmliZU9iaihzdWJzY3JpcHRpb24pO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgICAgaXppVG9hc3Quc3VjY2Vzcyh7XG4gICAgICAgICAgICB0aXRsZTogXCJbUFVTSCBOT1RJRklDQVRJT04gU1VCU0NSSVBUSU9OXVwiLFxuICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogYFN1YnNjcmlwdGlvbiBTZW50IFN1Y2Nlc3NmdWxseWAsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZXJyb3IgZmlndXJlIHRoZSBlcnJvciBhbmQgdGhyb3cgYW4gYXBwcm9wcmFpdGUgZXJyb3IgbWVzc2FnZSB0b1xuICAgICAgLy8gdGhlIHVzZXIgc28gaGUga25vd3MgZXhhY3RseSB3aGF0IGlzIHdyb25nIGFuZCBjYW4gbW92ZSBmb3J3YXJkIG9yIGFkanVzdCBmb3IgYVxuICAgICAgLy8gZGV2aWNlLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgdGl0bGU6IFwiW1BVU0ggTk9USUZJQ0FUSU9OIFNVQlNDUklQVElPTl1cIixcbiAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiBgJHtlcnJvci5tZXNzYWdlfWAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVGhlIGZ1bmN0aW9uIHRvIHRyaWdnZXIgdGhlIHB1c2ggbm90aWZpY2F0aW9uIGZyb20gdGhlIGJyb3dzZXJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gc3Vic2NyaWJlKHJlZyk7XG5mdW5jdGlvbiBzZXR1cFN1YnNjcmliZUJ1dHRvbihyZWcpIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uXCIpKSB7XG4gICAgY29uc3Qgc3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcInN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvblwiXG4gICAgKTtcbiAgICBzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiLCBmYWxzZSk7XG4gICAgc3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJtZDpoaWRkZW5cIiwgZmFsc2UpO1xuICAgIHN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc3Vic2NyaWJlKHJlZyk7XG4gICAgICBjb25zb2xlLmxvZyhcIlN1YnNjcmliZSBCdXR0b24gU2V0XCIpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVTdWJzY3JpYmVCdXR0b24oKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvblwiKSkge1xuICAgIGNvbnN0IHN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b25cIlxuICAgICk7XG4gICAgc3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIiwgdHJ1ZSk7XG4gICAgc3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJtZDpoaWRkZW5cIiwgdHJ1ZSk7XG4gIH1cbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGZvciBhIHVzZXIgdG8gdGVzdCB0aGUgcHVzaCBub3RpZmljYXRpb25cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYXN5bmMgZnVuY3Rpb24gc2V0dXBUcmlnZ2VyQnV0dG9uKHN1YnNjcmlwdGlvbikge1xuICBjb25zdCBzdWJKc29uID0gc3Vic2NyaXB0aW9uLnRvSlNPTigpO1xuICBjb25zdCBlbmRwb2ludFBhcnRzID0gc3ViSnNvbi5lbmRwb2ludC5zcGxpdChcIi9cIik7XG4gIGNvbnN0IHJlZ2lzdHJhdGlvbklkID0gZW5kcG9pbnRQYXJ0c1tlbmRwb2ludFBhcnRzLmxlbmd0aCAtIDFdO1xuICBjb25zdCBwcmVkYXRhID0ge1xuICAgIHJlZ2lzdHJhdGlvbl9pZDogcmVnaXN0cmF0aW9uSWQsXG4gICAgYXV0aDogc3ViSnNvbi5rZXlzLmF1dGgsXG4gICAgaGVhZDogXCJKZXJyeSBTYXlzIPCflIogXCIsXG4gICAgYm9keTogXCJUaGlzIGlzIGhvdyBwdXNoIG5vdGlmaWNhdGlvbnMgZnJvbSBteSBzaXRlIHdpbGwgYmUgc2hvd24gb24geW91ciBkZXZpY2VzLlwiLFxuICB9O1xuXG4gIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShwcmVkYXRhKTtcblxuICBhd2FpdCBheGlvc1xuICAgIC5wb3N0KFNFTkRfTk9USUZJQ0FUSU9OLCBkYXRhLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKGFzeW5jIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgYXdhaXQgaXppVG9hc3QuaW5mbyh7XG4gICAgICAgIHRpdGxlOiBcIltQVVNIIE5PVElGSUNBVElPTiBURVNUIFNVQ0NFU1NGVUxdXCIsXG4gICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKGFzeW5jIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBhd2FpdCBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgIHRpdGxlOiBcIltQVVNIIE5PVElGSUNBVElPTiBURVNUIEVSUk9SXVwiLFxuICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICBtZXNzYWdlOiBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbCxcbiAgICB9KTtcbiAgICB9KTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFbmQgcHVzaCBub3RpZmljYXRpb24gYnV0dG9uXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gZW5hYmxlIHNlcnZpY2Ugd29ya2VyLCB0aGVuIHdoZW4gc2VydmljZSB3b3JrZXIgaXMgZW5hYmxlZCByZXF1ZXN0XG4vLyBwZXJtaXNzaW9uIGZvciBwdXNoIG5vdGlmaWNhdGlvbiBhbmQgbG9jYXRpb24gc2VydmljZXMgZnJvbSB0aGUgYnJvd3NlclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAgIC5yZWdpc3RlcihzdywgeyBzY29wZTogaG9tZSB9KVxuICAgICAgLnRoZW4oKHJlZ2lzdHJhdGlvbikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSB3b3JrZXIgcmVnaXN0ZXJhdGlvbiBzdWNjZWVkZWQ6IFwiLCByZWdpc3RyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihmdW5jdGlvbiBhc3luYyhyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICBpbml0aWFsaXNlU3RhdGUocmVnaXN0cmF0aW9uKTtcbiAgICAgICAgICBpZiAocmVnaXN0cmF0aW9uLmluc3RhbGxpbmcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSB3b3JrZXIgaW5zdGFsbGluZ1wiKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlZ2lzdHJhdGlvbi53YWl0aW5nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2Ugd29ya2VyIGluc3RhbGxlZFwiKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlZ2lzdHJhdGlvbi5hY3RpdmUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSB3b3JrZXIgYWN0aXZlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgICBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgICB0aXRsZTogXCJbU0VSVklDRSBXT1JLRVJdXCIsXG4gICAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlNlcnZpY2UgV29ya2VyIEZhaWxlZCB0byBSZWdpc3RlclwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9KTtcbn1cblxuY29uc3QgaW5pdGlhbGlzZVN0YXRlID0gKHJlZykgPT4ge1xuICBpZiAoIXJlZy5zaG93Tm90aWZpY2F0aW9uKSB7XG4gICAgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgdGl0bGU6IFwiW1BVU0ggTk9USUZJQ0FUSU9OIFVOU1VQUE9SVEVEXVwiLFxuICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJTaG93aW5nIDxzdHJvbmc+UFVTSCBOT1RJRklDQVRJT05TPC9zdHJvbmc+IGlzIHVuc3VwcG9ydGVkXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKHJlZy5zaG93Tm90aWZpY2F0aW9uKSB7XG4gICAgZGlzYWJsZVN1YnNjcmliZUJ1dHRvbigpO1xuICB9XG5cbiAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImRlbmllZFwiKSB7XG4gICAgaXppVG9hc3Qud2FybmluZyh7XG4gICAgICB0aXRsZTogXCJbUFVTSCBOT1RJRklDQVRJT04gREVOSUVEXVwiLFxuICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgXCJZb3UgcHJldmVudGVkIHVzIGZyb20gc2h3b2luZyBub3RpZmljYXRpb25zLiBNYW51YWxseSBjaGVjayBpZiB5b3UgaGF2ZSBwcmV2ZW50ZWQgcHVzaCBub3RpZmNhdGlvbiBmcm9tIHVzLlwiLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiAhPT0gXCJkZW5pZWRcIikge1xuICAgIGRpc2FibGVTdWJzY3JpYmVCdXR0b24oKTtcbiAgfVxuXG4gIGlmICghKFwiUHVzaE1hbmFnZXJcIiBpbiB3aW5kb3cpKSB7XG4gICAgaXppVG9hc3QuaW5mbyh7XG4gICAgICB0aXRsZTogXCJbUFVTSCBCTk9USUZJQ0FUSU9OIFVOQVZBSUxCQUxFXVwiLFxuICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJQdXNoIG5vdGlmaWNhdGlvbiBpcyBub3QgYWxsb3dlZCBpbiB5b3VyIGJyb3dzZXIuXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKFwiUHVzaE1hbmFnZXJcIiBpbiB3aW5kb3cpIHtcbiAgICBkaXNhYmxlU3Vic2NyaWJlQnV0dG9uKCk7XG4gIH1cblxuICByZWcucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCkudGhlbigoc3ViKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJSZWdpc3RyYXRpb24gT2JqZWN0XCIsIHJlZyk7XG4gICAgaWYgKCFzdWIgfHwgc3ViID09PSBudWxsKSB7XG4gICAgICBzZXR1cFN1YnNjcmliZUJ1dHRvbihyZWcpO1xuICAgIH0gZWxzZSBpZiAoc3ViICE9PSBudWxsIHx8IHN1Yikge1xuICAgICAgY29uc29sZS5sb2coXCJTdWJzY3JpYmUgQWxyZWFkeSBEb25lXCIpO1xuICAgICAgLy8gc2V0dXBUcmlnZ2VyQnV0dG9uKHN1Yik7XG4gICAgICBkaXNhYmxlU3Vic2NyaWJlQnV0dG9uKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIEFscGluZSBKUyBTY3JpcHRzXG5BbHBpbmUucGx1Z2luKGludGVyc2VjdCk7XG4vLyBBbHBpbmUucGx1Z2luKE1hc2spO1xuXG53aW5kb3cuQWxwaW5lID0gQWxwaW5lO1xuLy8gQWxwaW5lLmRhdGEoXCJTaWdudXBGb3JtXCIsIFNpZ251cEZvcm0pO1xuLy8gQWxwaW5lLmRhdGEoXCJDb25maXJtRW1haWxGb3JtXCIsIENvbmZpcm1FbWFpbEZvcm0pO1xuLy8gQWxwaW5lLmRhdGEoXCJMb2dpbkZvcm1cIiwgTG9naW5Gb3JtKTtcbi8vIEFscGluZS5kYXRhKFwiUENoYW5nZUZvcm1cIiwgUENoYW5nZUZvcm0pO1xuLy8gQWxwaW5lLmRhdGEoXCJSZXNldFBhc3N3b3JkRm9ybVwiLCBSZXNldFBhc3N3b3JkRm9ybSk7XG4vLyBBbHBpbmUuZGF0YShcIlN1YnNjcmlwdGlvbkZvcm1cIiwgU3Vic2NyaXB0aW9uRm9ybSk7XG4vLyBBbHBpbmUuZGF0YShcIkdvb2dsZVwiLCBHb29nbGUpO1xuQWxwaW5lLmRhdGEoXCJEZWZhdWx0XCIsIEluaXRpYWxpemUpO1xuQWxwaW5lLmRhdGEoXCJQcm9qZWN0XCIsIFByb2plY3RQcm9jZXNzaW5nKTtcbi8vIEFscGluZS5kYXRhKFwiVXNlckRldGFpbFwiLCBVc2VyRGV0YWlsKTtcbi8vIEFscGluZS5kYXRhKCdDb250YWN0Rm9ybScsIENvbnRhY3RGb3JtKSxcbi8vIEFscGluZS5kYXRhKCdTdGlja3lOYXYnLCBTdGlja3lOYXYpO1xuLy8gQWxwaW5lLmRhdGEoJ0NoYXJ0SnMnLCBDaGFydEpzKTtcbkFscGluZS5zdGFydCgpO1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUUklHR0VSIElOU1RBTEwgQlVUVE9OIEZPUiBQUk9HUkVTU0lWRSBXRUIgQVBQTElDQVRJT05cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY2hlY2sgaWYgdGhlIFBXQSBpcyBhbHJlYWR5IGluc3RhbGxlZCBvciBub3Rcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKGRpc3BsYXktbW9kZTogc3RhbmRhbG9uZSlcIikubWF0Y2hlcykge1xuICBjb25zb2xlLmxvZyhcIlBXQSBpcyBhbHJlYWR5IGluc3RhbGxlZFwiKTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJkZWZlcnJlZFByb21wdFwiKTtcbn0gZWxzZSB7XG4gIGNvbnNvbGUubG9nKFwiUFdBIGlzIG5vdCBpbnN0YWxsZWRcIik7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlaW5zdGFsbHByb21wdFwiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgY29uc29sZS5sb2coXCLwn5GNW1BXQV1cIiwgXCJiZWZvcmVpbnN0YWxscHJvbXB0XCIsIEpTT04uc3RyaW5naWZ5KGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLy8gUHJldmVudCBDaHJvbWUgNjcgYW5kIGVhcmxpZXIgZnJvbSBhdXRvbWF0aWNhbGx5IHNob3dpbmcgdGhlIHByb21wdFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIC8vIFN0YXNoIHRoZSBldmVudCBzbyBpdCBjYW4gYmUgdHJpZ2dlcmVkIGxhdGVyLlxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkZWZlcnJlZFByb21wdFwiLCBKU09OLnN0cmluZ2lmeShldmVudCkpO1xuICAgICAgd2luZG93LmRlZmVycmVkUHJvbXB0ID0gZXZlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghKFwiZGVmZXJyZWRQcm9tcHRcIiBpbiBsb2NhbFN0b3JhZ2UpKSB7XG4gICAgICAgIHNlbGYuY2xvc2VJbnN0YWxsUHJvbXB0ID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5zaG93SW5zdGFsbEZsb2F0SWNvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLy8gbG9hZCBzdGF0aWMgc2NyaXB0IGZpbGVzIGFmdGVyIGh0bXggbG9hZHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5bXG4gIC8vIFwiaHRteDpvbkxvYWRcIixcbiAgLy8gXCJodG14OmxvYWRcIixcbiAgLy8gXCJodG14OmFmdGVyU2V0dGxlXCIsXG4gIFwiaHRteDphZnRlclN3YXBcIixcbiAgLy8gXCJodG14OmFmdGVyT25Mb2FkXCIsXG5dLmZvckVhY2goKGV2dCkgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cuYW5pbWUgPSBhbmltZTtcbiAgICB3aW5kb3cuc2Nyb2xsTWFnaWMgPSBTY3JvbGxNYWdpYztcbiAgICB3aW5kb3cuaXppVG9hc3QgPSBpemlUb2FzdDtcbiAgICAvLyAvLyBpbml0aWFsaXplIHRpbnltY2VcbiAgICB3aW5kb3cudGlueW1jZSA9IHRpbnltY2U7XG4gICAgLy8gaW5pdGlhbGl6ZSBsb3R0aWUgd2ViIGFuZCBsb3R0aWUgcGxheWVyXG4gICAgd2luZG93LmxvdHRpZXdlYiA9IGxvdHRpZXdlYjtcblxuICAgIC8vIGluaXRpYWxpemUgZXRoZXIganMgZm9yIGNyeXB0byBwYXltZW50XG4gICAgd2luZG93LmV0aGVycyA9IGV0aGVycztcbiAgICAvLyBpbml0aWFsaXplIGF4aW9zIGFzeW5jIHBvc3R8Z2V0IHJlcXVlc3RcbiAgICB3aW5kb3cuYXhpb3MgPSBheGlvcztcbiAgICAvLyBpbml0aWFsaXplIHN3aXBlci5qc1xuICAgIHdpbmRvdy5Td2lwZXIgPSBTd2lwZXI7XG4gICAgLy8gaW5pdGlhaWxpemUgaXppdG9hc3QgYWxlcnRzXG5cbiAgICBjb25zdCBjb3VudGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY291bnRlclwiKTtcbiAgICBjb25zdCBjYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhclwiKTtcblxuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcigpO1xuXG4gICAgLy8gaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnN0Jykpe1xuICAgIC8vICAgbG90dGlld2ViLmxvYWRBbmltYXRpb24oe1xuICAgIC8vICAgICBjb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25zdCcpLFxuICAgIC8vICAgICBwYXRoOiBcIi9zdGF0aWMvdmVuZG9ycy9pbWFnZXMvbG90dGllL3VuZGVyLWNvbnN0cnVjdGlvbi5qc29uXCIsXG4gICAgLy8gICAgIHJlbmRlcmVyOiAnc3ZnJyxcbiAgICAvLyAgICAgbG9vcDogdHJ1ZSxcbiAgICAvLyAgICAgYXV0b1BsYXk6IHRydWUsXG4gICAgLy8gICAgIG5hbWU6ICdVbmRlciBDb25zdHJ1Y3Rpb24nXG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG5cbiAgICBmdW5jdGlvbiBzdGFydENvdW50aW5nKCkge1xuICAgICAgaWYgKGNvdW50ZXJzKSB7XG4gICAgICAgIGNvdW50ZXJzLmZvckVhY2goKGNvdW50ZXIpID0+IHtcbiAgICAgICAgICBhbmltZSh7XG4gICAgICAgICAgICB0YXJnZXRzOiBjb3VudGVyLFxuICAgICAgICAgICAgaW5uZXJIVE1MOiBbMCwgY291bnRlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvdW50XCIpXSxcbiAgICAgICAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRTaW5lXCIsXG4gICAgICAgICAgICByb3VuZDogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAwLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlSG93cygpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvd1wiKSkge1xuICAgICAgICBhbmltZSh7XG4gICAgICAgICAgdGFyZ2V0czogXCIuaG93XCIsXG4gICAgICAgICAgdHJhbnNsYXRlWDogNTYsXG4gICAgICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFNpbmVcIixcbiAgICAgICAgICBkdXJhdGlvbjogODAwLFxuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgZGVsYXk6IGFuaW1lLnN0YWdnZXIoMjAwLCB7IHN0YXJ0OiA1MDAgfSksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50VHJpZ2dlclwiKSkge1xuICAgICAgbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcbiAgICAgICAgdHJpZ2dlckVsZW1lbnQ6IFwiI2NvdW50VHJpZ2dlclwiLFxuICAgICAgICB0cmlnZ2VySG9vazogXCJvbkVudGVyXCIsXG4gICAgICAgIGR1cmF0aW9uOiBcIjEwMCVcIixcbiAgICAgICAgcmV2ZXJzZTogZmFsc2UsXG4gICAgICAgIG9mZnNldDogNTAsXG4gICAgICB9KVxuICAgICAgICAub24oXCJlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3RhcnRDb3VudGluZygpO1xuICAgICAgICB9KVxuICAgICAgICAuYWRkVG8oY29udHJvbGxlcik7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhY2tcIikpIHtcbiAgICAgIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG4gICAgICAgIHRyaWdnZXJFbGVtZW50OiBcIiN0cmFja1wiLFxuICAgICAgICB0cmlnZ2VySG9vazogXCJvbkVudGVyXCIsXG4gICAgICAgIGR1cmF0aW9uOiBcIjEwMCVcIixcbiAgICAgICAgcmV2ZXJzZTogdHJ1ZSxcbiAgICAgICAgb2Zmc2V0OiA1MCxcbiAgICAgIH0pXG4gICAgICAgIC5vbihcImVudGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYXJEcml2ZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuYWRkVG8oY29udHJvbGxlcik7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG93c1wiKSkge1xuICAgICAgbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcbiAgICAgICAgdHJpZ2dlckVsZW1lbnQ6IFwiI2hvd3NcIixcbiAgICAgICAgdHJpZ2dlckhvb2s6IFwib25FbnRlclwiLFxuICAgICAgICBkdXJhdGlvbjogXCIxMDAlXCIsXG4gICAgICAgIHJldmVyc2U6IGZhbHNlLFxuICAgICAgICBvZmZzZXQ6IDEwMCxcbiAgICAgIH0pXG4gICAgICAgIC5vbihcImVudGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhbmltYXRlSG93cygpO1xuICAgICAgICB9KVxuICAgICAgICAuYWRkVG8oY29udHJvbGxlcik7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW50cm9cIikpIHtcbiAgICAgIGFuaW1lKHtcbiAgICAgICAgdGFyZ2V0czogXCIuaW50cm9cIixcbiAgICAgICAgdHJhbnNsYXRlWDogLTU2LFxuICAgICAgICBlYXNpbmc6IFwiZWFzZUluT3V0U2luZVwiLFxuICAgICAgICBkdXJhdGlvbjogODAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcigyMDAsIHsgc3RhcnQ6IDUwMCB9KSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhckRyaXZlKCkge1xuICAgICAgaWYgKGNhcikge1xuICAgICAgICBhbmltZSh7XG4gICAgICAgICAgdGFyZ2V0czogXCIjY2FyXCIsXG4gICAgICAgICAgdHJhbnNsYXRlWDoge1xuICAgICAgICAgICAgdmFsdWU6IFwiLTEwMHZ3XCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRTaW5lXCIsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcigyMDAsIHsgc3RhcnQ6IDUwMCB9KSxcbiAgICAgICAgICBkaXJlY3Rpb246IFwibm9ybWFsXCIsXG4gICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuLy8gY29uc3QgYXhpb3Nfc2Vzc2lvbiA9IGF4aW9zLmNyZWF0ZSh7XG4vLyAgICAgeHNyZkNvb2tpZU5hbWUgOiAnY3NyZnRva2VuJyxcbi8vICAgICB4c3JmSGVhZGVyTmFtZSA6IFwiWC1DU1JGVG9rZW5cIixcbi8vICAgICB3aXRoQ3JlZGVudGlhbHMgOiB0cnVlLFxuLy8gICAgIHRpbWVvdXQgOiAxNTAwMFxuLy8gfSk7XG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuYXhpb3MuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUgPSAnY3NyZnRva2VuJztcbmF4aW9zLmRlZmF1bHRzLnhzcmZIZWFkZXJOYW1lID0gXCJYLUNTUkZUb2tlblwiO1xuYXhpb3MuZGVmYXVsdHMudGltZW91dCA9IDI1MDAwO1xuXG5leHBvcnQgZGVmYXVsdCBheGlvcztcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiLi9heGlvc0ZhY3RvcnlcIjtcbmltcG9ydCBpemlUb2FzdCBmcm9tIFwiaXppdG9hc3QvZGlzdC9qcy9pemlUb2FzdC5taW4uanNcIjsgLy8geW91IGhhdmUgYWNjZXNzIHRvIGl6aVRvYXN0IG5vd1xuaW1wb3J0IGh0bXggZnJvbSBcImh0bXgub3JnL2Rpc3QvaHRteFwiO1xuXG5pbXBvcnQgSW5pdGlhbGl6ZSBmcm9tIFwiLi9kZWZhdWx0XCI7XG5cbmNvbnN0IHByb2dyZXNzYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc1wiKTtcbmNvbnN0IHByb2dyYXNzQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc0xhYmVsXCIpO1xuXG4vLyBmdW5jdGlvbiB0byBzaW11bGF0ZSBzbGVlcCBvcGVyYXRpb24gb24gYW4gZXZlbnRcbmZ1bmN0aW9uIHNsZWVwKG1zKSB7XG4gICAgcmV0dXJuIG5ldyB3aW5kb3cuUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RQcm9jZXNzaW5nKCkge1xuICAgIHJldHVybiB7XG5cbiAgICAgICAgcHJqZWN0UHJvY2Vzc2luZzogZmFsc2UsXG5cbiAgICAgICAgYXN5bmMgc3VibWl0UHJvamVjdCgpIHtcbiAgICAgICAgICAgIHRoaXMucHJqZWN0UHJvY2Vzc2luZyA9IHRydWU7XG4gICAgICAgICAgICBJbml0aWFsaXplLnByb2Nlc3NpbmdSZXF1ZXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHByb2dyZXNzYmFyLnZhbHVlID0gMDtcbiAgICAgICAgICAgIHByb2dyYXNzQW1vdW50LmlubmVyVGV4dCA9ICcwJSc7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gdGhpcy4kcmVmcy5mb3JtO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gZm9ybUVsZW1lbnQuYWN0aW9uO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUVsZW1lbnQpO1xuXG4gICAgICAgICAgICBhd2FpdCBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWVdXCIpLmZvckVhY2goKGZpZWxkRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGZpZWxkRWxlbWVudC5uYW1lID09PSBcImlzX3B1Ymxpc2hlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZEVsZW1lbnQudmFsdWUgPT09ICdvbicpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoZmllbGRFbGVtZW50Lm5hbWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoZmllbGRFbGVtZW50Lm5hbWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGRFbGVtZW50LnR5cGUgPT09IFwidGV4dGFyZWFcIikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dGFyZWEgPSBmaWVsZEVsZW1lbnQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRWxlbWVudC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wYXJlbnQudGlueW1jZS5nZXQodGV4dGFyZWEpLmdldENvbnRlbnQoKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKGZpZWxkRWxlbWVudC5uYW1lLCBmaWVsZEVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLmRpcihkYXRhKTtcblxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdChhY3Rpb24sIGRhdGEpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCB0YXNrX2lkID0gcmVzcG9uc2UuZGF0YS50YXNrX2lkO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGNhY2hlX2tleSA9IHJlc3BvbnNlLmRhdGEuY2FjaGVfa2V5O1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG1lc3NhZ2UgPSByZXNwb25zZS5kYXRhLm1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpe1xuICAgICAgICAgICAgICAgICAgICBpemlUb2FzdC5zdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlBST0pFQ1QgQURERURcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUHJvamVjdCBTdWNjZXNzZnVsbHkgQWRkZWRcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcmplY3RQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzYmFyLnZhbHVlID0gMTAwO1xuICAgICAgICAgICAgICAgICAgICBwcm9ncmFzc0Ftb3VudC5pbm5lclRleHQgPSAnMTAwJSc7XG4gICAgICAgICAgICAgICAgICAgIEluaXRpYWxpemUucHJvY2Vzc2luZ1JlcXVlc3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jaGVja1N0YXR1cyh0YXNrX2lkLCBjYWNoZV9rZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJQUk9KRUNUIFVQTE9BRElORyBGQUlMRURcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMucHJqZWN0UHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSxcblxuXG4gICAgICAgIGFzeW5jIGNoZWNrU3RhdHVzKHRhc2tfaWQsIGNhY2hlX2tleSkge1xuICAgICAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2plY3RzL2NoZWNrLXByb2Nlc3NpbmcvJHt0YXNrX2lkfS8ke2NhY2hlX2tleX0vYClcbiAgICAgICAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc2Jhci52YWx1ZSA9IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jhc3NBbW91bnQuaW5uZXJUZXh0ID0gJzEwMCUnO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCg1MDApO1xuICAgICAgICAgICAgICAgICAgICBJbml0aWFsaXplLnByb2Nlc3NpbmdSZXF1ZXN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGl6aVRvYXN0LnN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUFJPSkVDVCBQUk9DRVNTSU5HXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGh0bXguYWpheChcbiAgICAgICAgICAgICAgICAgICAgICAgICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYC9wcm9qZWN0cy8ke3Jlc3BvbnNlLmRhdGEub2JqZWN0LnNsdWd9L2AsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIiNkZXRhaWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FwOiBcImlubmVySFRNTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBJbml0aWFsaXplLmRldGFpbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NiYXIudmFsdWUgKys7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyYXNzQW1vdW50LmlubmVyVGV4dCA9IGAke3Byb2dyZXNzYmFyLnZhbHVlfSVgO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3RhdHVzKHRhc2tfaWQsIGNhY2hlX2tleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBJbml0aWFsaXplLnByb2Nlc3NpbmdSZXF1ZXN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJQUk9KRUNUIFBST0NFU1NJTkcgRkFJTEVEXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnByamVjdFByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsidGlueW1jZSIsImF4aW9zIiwiSW5pdGlhbGl6ZSIsIlByb2plY3RQcm9jZXNzaW5nIiwiZGV0ZWN0IiwiU3dpcGVyIiwiaHRteCIsIkFscGluZSIsImludGVyc2VjdCIsImV0aGVycyIsInRvYXN0ciIsIml6aVRvYXN0IiwiYW5pbWUiLCJTY3JvbGxNYWdpYyIsImxvdHRpZXdlYiIsIndpbmRvdyIsInRpbWVyIiwicmVzZXRUaW1lciIsImNsZWFyVGltZW91dCIsInN0b3JlIiwic3RhcnRUaW1lb3V0Iiwic2V0VGltZW91dCIsInRpbWVvdXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdyIsImhvbWUiLCJicm93c2VyIiwiQVBQTElDQVRJT05fU0VSVkVSX0tFWSIsIkNSRUFURV9XUF9ERVZJQ0UiLCJTRU5EX05PVElGSUNBVElPTiIsIldFQl9QVVNIX0NGRyIsInVybEJhc2U2NFRvVWludDhBcnJheSIsImJhc2U2NFN0cmluZyIsInBhZGRpbmciLCJyZXBlYXQiLCJsZW5ndGgiLCJiYXNlNjQiLCJyZXBsYWNlIiwicmF3RGF0YSIsImF0b2IiLCJvdXRwdXRBcnJheSIsIlVpbnQ4QXJyYXkiLCJpIiwiY2hhckNvZGVBdCIsInNhdmVTdWJzY3JpYmVPYmoiLCJzdWJzY3JpcHRpb24iLCJzdWJzY3JpcHRpb25Kc29uIiwidG9KU09OIiwiZW5kcG9pbnRQYXJ0cyIsImVuZHBvaW50Iiwic3BsaXQiLCJyZWdpc3RyYXRpb25JZCIsInByZWRhdGEiLCJzdGF0dXNfdHlwZSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsInAyNTZkaCIsImtleXMiLCJhdXRoIiwidXNlcl9hZ2VudCIsIm5hdmlnYXRvciIsImdldFVzZXJBZ2VudCIsInJlZ2lzdHJhdGlvbl9pZCIsImdyb3VwIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0IiwiaGVhZGVycyIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwidGhlbiIsInJlc3BvbnNlIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwic3VjY2VzcyIsInRpdGxlIiwiYmFsbG9vbiIsInBvc2l0aW9uIiwiYW5pbWF0ZUluc2lkZSIsIm1lc3NhZ2UiLCJzdGF0dXNUZXh0Iiwic3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzZXR1cFRyaWdnZXJCdXR0b24iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN1YnNjcmliZSIsInJlZ2lzdHJhdGlvbiIsInB1c2hNYW5hZ2VyIiwiZ2V0U3Vic2NyaXB0aW9uIiwib3B0aW9ucyIsInVzZXJWaXNpYmxlT25seSIsImFwcGxpY2F0aW9uU2VydmVyS2V5Iiwic2V0dXBTdWJzY3JpYmVCdXR0b24iLCJyZWciLCJkaXNhYmxlU3Vic2NyaWJlQnV0dG9uIiwic3ViSnNvbiIsImJvZHkiLCJpbmZvIiwiZGV0YWlsIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwic2NvcGUiLCJyZWFkeSIsImFzeW5jIiwiaW5pdGlhbGlzZVN0YXRlIiwiaW5zdGFsbGluZyIsIndhaXRpbmciLCJhY3RpdmUiLCJlcnIiLCJzaG93Tm90aWZpY2F0aW9uIiwiTm90aWZpY2F0aW9uIiwicGVybWlzc2lvbiIsIndhcm5pbmciLCJzdWIiLCJwbHVnaW4iLCJzdGFydCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRJdGVtIiwiZGVmZXJyZWRQcm9tcHQiLCJzZWxmIiwiY2xvc2VJbnN0YWxsUHJvbXB0Iiwic2hvd0luc3RhbGxGbG9hdEljb24iLCJmb3JFYWNoIiwiZXZ0Iiwic2Nyb2xsTWFnaWMiLCJjb3VudGVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYXIiLCJjb250cm9sbGVyIiwiQ29udHJvbGxlciIsInN0YXJ0Q291bnRpbmciLCJjb3VudGVyIiwidGFyZ2V0cyIsImlubmVySFRNTCIsImVhc2luZyIsInJvdW5kIiwiZHVyYXRpb24iLCJhbmltYXRlSG93cyIsInRyYW5zbGF0ZVgiLCJvcGFjaXR5IiwiZGVsYXkiLCJzdGFnZ2VyIiwiU2NlbmUiLCJ0cmlnZ2VyRWxlbWVudCIsInRyaWdnZXJIb29rIiwicmV2ZXJzZSIsIm9mZnNldCIsIm9uIiwiYWRkVG8iLCJjYXJEcml2ZSIsInZhbHVlIiwiZGlyZWN0aW9uIiwibG9vcCIsImRlZmF1bHRzIiwid2l0aENyZWRlbnRpYWxzIiwieHNyZkNvb2tpZU5hbWUiLCJ4c3JmSGVhZGVyTmFtZSIsInByb2dyZXNzYmFyIiwicHJvZ3Jhc3NBbW91bnQiLCJzbGVlcCIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwcmplY3RQcm9jZXNzaW5nIiwic3VibWl0UHJvamVjdCIsInByb2Nlc3NpbmdSZXF1ZXN0IiwiaW5uZXJUZXh0IiwiZm9ybUVsZW1lbnQiLCIkcmVmcyIsImZvcm0iLCJhY3Rpb24iLCJGb3JtRGF0YSIsImZpZWxkRWxlbWVudCIsImFwcGVuZCIsInR5cGUiLCJ0ZXh0YXJlYSIsImlkIiwicGFyZW50IiwiZ2V0IiwiZ2V0Q29udGVudCIsImRpciIsInN0YXR1cyIsImNoZWNrU3RhdHVzIiwidGFza19pZCIsImNhY2hlX2tleSIsImFqYXgiLCJvYmplY3QiLCJzbHVnIiwidGFyZ2V0Iiwic3dhcCJdLCJzb3VyY2VSb290IjoiIn0=