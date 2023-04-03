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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxDQUFDLEdBQUcsQ0FBQztVQUNoQjNLLGtFQUE0QixHQUFHLEtBQUs7VUFDcENTLCtFQUFnQixDQUFDO1lBQ2JvRSxLQUFLLEVBQUUsb0JBQW9CO1lBQzNCSSxPQUFPLEVBQUVULFFBQVEsQ0FBQ1QsSUFBSSxDQUFDa0I7VUFDM0IsQ0FBQyxDQUFDO1VBQ0YsTUFBTTdFLDhEQUFTLENBQ1gsS0FBSyxFQUNKLGFBQVlvRSxRQUFRLENBQUNULElBQUksQ0FBQ3VJLE1BQU0sQ0FBQ0MsSUFBSyxHQUFFLEVBQ3pDO1lBQ0lDLE1BQU0sRUFBRSxTQUFTO1lBQ2pCQyxJQUFJLEVBQUU7VUFDVixDQUFDLENBQ0o7VUFDRHpNLHVEQUFpQixHQUFHLElBQUk7UUFDNUIsQ0FBQyxNQUFNO1VBQ0h5SyxXQUFXLENBQUNQLEtBQUssRUFBRztVQUNwQlEsY0FBYyxDQUFDUSxTQUFTLEdBQUksR0FBRVQsV0FBVyxDQUFDUCxLQUFNLEdBQUU7VUFDbEQsSUFBSSxDQUFDZ0MsV0FBVyxDQUFDQyxPQUFPLEVBQUVDLFNBQVMsQ0FBQztRQUN4QztNQUNKLENBQUMsQ0FBQyxDQUNENUcsS0FBSyxDQUFFQyxLQUFLLElBQUs7UUFDZHpGLGtFQUE0QixHQUFHLEtBQUs7UUFDcENTLDZFQUFjLENBQUM7VUFDWG9FLEtBQUssRUFBRSwyQkFBMkI7VUFDbENJLE9BQU8sRUFBRVEsS0FBSyxDQUFDUjtRQUNuQixDQUFDLENBQUM7UUFDRixJQUFJLENBQUM4RixnQkFBZ0IsR0FBRyxLQUFLO01BQ2pDLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQztBQUNMOzs7Ozs7Ozs7Ozs7QUNuSEE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wb3J0Zm9saW8vc3RhdGljL2pzL2FwcC9wcm9qZWN0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3BvcnRmb2xpby9zdGF0aWMvanMvY29tcG9uZW50cy9heGlvc0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vcG9ydGZvbGlvL3N0YXRpYy9qcy9jb21wb25lbnRzL3Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3BvcnRmb2xpby9zdGF0aWMvc2Fzcy9wcm9qZWN0LnNjc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2lnbm9yZWR8L2hvbWUvZGFya2NvZHIvd3d3L2Rhcmtjb2RyL3BvcnRmb2xpby9ub2RlX21vZHVsZXMvYm4uanMvbGlifGJ1ZmZlciJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi8uLi9zYXNzL3Byb2plY3Quc2Nzc1wiO1xuXG4vLyBTZWxlY3QgMlxuLy8gaW1wb3J0IFwic2VsZWN0Mi9kaXN0L2Nzcy9zZWxlY3QyLm1pbi5jc3NcIjtcbi8vIGltcG9ydCBcInNlbGVjdDIvZGlzdC9qcy9zZWxlY3QyLm1pbi5qc1wiO1xuXG4vLyB0aW55bWNlXG5pbXBvcnQgdGlueW1jZSBmcm9tIFwidGlueW1jZS90aW55bWNlLm1pbi5qc1wiO1xuaW1wb3J0IFwidGlueW1jZS9pY29ucy9kZWZhdWx0L2ljb25zLmpzXCI7XG5pbXBvcnQgXCJ0aW55bWNlL3RoZW1lcy9zaWx2ZXIvdGhlbWUuanNcIjtcbmltcG9ydCBcInRpbnltY2Uvc2tpbnMvY29udGVudC9kZWZhdWx0L2NvbnRlbnQubWluLmNzc1wiO1xuaW1wb3J0IFwidGlueW1jZS9za2lucy9jb250ZW50L2RlZmF1bHQvY29udGVudC5jc3NcIjtcbmltcG9ydCBcInRpbnltY2Uvc2tpbnMvdWkvb3hpZGUvc2tpbi5taW4uY3NzXCI7XG5pbXBvcnQgXCJ0aW55bWNlL3NraW5zL3VpL294aWRlL2NvbnRlbnQubWluLmNzc1wiO1xuaW1wb3J0IFwidGlueW1jZS9tb2RlbHMvZG9tL21vZGVsLmpzXCI7XG5cbi8vIGNvbXBvbmVudHNcbmltcG9ydCBheGlvcyBmcm9tIFwiLi4vY29tcG9uZW50cy9heGlvc0ZhY3RvcnlcIjtcbmltcG9ydCBJbml0aWFsaXplIGZyb20gXCIuLi9jb21wb25lbnRzL2RlZmF1bHRcIjtcbmltcG9ydCBQcm9qZWN0UHJvY2Vzc2luZyBmcm9tICcuLi9jb21wb25lbnRzL3Byb2plY3RGb3JtJztcblxuLy8gZnVuY3Rpb25hbCBpbXBvcnRzXG5pbXBvcnQgeyBkZXRlY3QgfSBmcm9tIFwiZGV0ZWN0LWJyb3dzZXJcIjtcbmltcG9ydCBTd2lwZXIgZnJvbSBcInN3aXBlclwiO1xuaW1wb3J0IGh0bXggZnJvbSBcImh0bXgub3JnL2Rpc3QvaHRteFwiO1xuaW1wb3J0IEFscGluZSBmcm9tIFwiYWxwaW5lanNcIjtcbi8vIGltcG9ydCBNYXNrIGZyb20gXCJAcnlhbmdqY2hhbmRsZXIvYWxwaW5lLW1hc2tcIjtcbmltcG9ydCBpbnRlcnNlY3QgZnJvbSBcIkBhbHBpbmVqcy9pbnRlcnNlY3RcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcblxuLy8gYWxlcnQgbWVzc2FnZXNcbmltcG9ydCB0b2FzdHIgZnJvbSBcInRvYXN0clwiO1xuaW1wb3J0IFwiaXppdG9hc3QvZGlzdC9jc3MvaXppVG9hc3QubWluLmNzc1wiO1xuaW1wb3J0IGl6aVRvYXN0IGZyb20gXCJpeml0b2FzdC9kaXN0L2pzL2l6aVRvYXN0Lm1pbi5qc1wiO1xuLy8gaW1wb3J0IFwiZmxvd2JpdGVcIjtcblxuaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzL2xpYi9hbmltZS5lcy5qc1wiO1xuaW1wb3J0IFNjcm9sbE1hZ2ljIGZyb20gXCJzY3JvbGxtYWdpY1wiO1xuXG5pbXBvcnQgbG90dGlld2ViIGZyb20gXCJsb3R0aWUtd2ViXCI7XG4vLyBpbXBvcnQgXCJAbG90dGllZmlsZXMvbG90dGllLXBsYXllclwiO1xuXG4vLyBHbG9iYWwgSW5pdGlhbGl6YXRpb25zIGZvciBpbXBvcnRlZGxpYnJhcmllcyAvL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbml0aWFsaXplIGFuaW1lanNcbndpbmRvdy5hbmltZSA9IGFuaW1lO1xud2luZG93LlNjcm9sbE1hZ2ljID0gU2Nyb2xsTWFnaWM7XG5cbi8vIGluaXRpYWxpemUgaHRteFxud2luZG93Lmh0bXggPSBodG14O1xuLy8gLy8gaW5pdGlhbGl6ZSB0aW55bWNlXG53aW5kb3cudGlueW1jZSA9IHRpbnltY2U7XG4vLyBpbml0aWFsaXplIGxvdHRpZSB3ZWIgYW5kIGxvdHRpZSBwbGF5ZXJcbndpbmRvdy5sb3R0aWV3ZWIgPSBsb3R0aWV3ZWI7XG5cbi8vIGluaXRpYWxpemUgZXRoZXIganMgZm9yIGNyeXB0byBwYXltZW50XG53aW5kb3cuZXRoZXJzID0gZXRoZXJzO1xuLy8gaW5pdGlhbGl6ZSBheGlvcyBhc3luYyBwb3N0fGdldCByZXF1ZXN0XG53aW5kb3cuYXhpb3MgPSBheGlvcztcbi8vIGluaXRpYWxpemUgc3dpcGVyLmpzXG53aW5kb3cuU3dpcGVyID0gU3dpcGVyO1xuXG4vLyBpbml0aWFpbGl6ZSBpeml0b2FzdCBhbGVydHNcbndpbmRvdy5pemlUb2FzdCA9IGl6aVRvYXN0O1xuXG4vLyBzZXQgdGltZW91dCBmb3IgaW5hY3RpdmUgdXNlclxubGV0IHRpbWVyID0gbnVsbDtcbmZ1bmN0aW9uIHJlc2V0VGltZXIoKSB7XG4gIC8vIGZ1bmN0aW9uIHRvIHJlc2V0IHRoZSB0aW1lb3V0XG4gIGNsZWFyVGltZW91dCh0aW1lcik7XG4gIEFscGluZS5zdG9yZSgnaXNJbmFjdGl2ZScsIGZhbHNlKTtcbiAgc3RhcnRUaW1lb3V0O1xufVxuXG5mdW5jdGlvbiBzdGFydFRpbWVvdXQoKSB7XG4gIC8vIGZ1bmN0aW9uIHRvIHN0YXJ0IHRoZSB0aW1lIG91dFxuICB0aW1lciA9IHNldFRpbWVvdXQodGltZW91dCwgMTAwMCk7IC8vIDUgc2Vjb25kc1xufVxuXG5mdW5jdGlvbiB0aW1lb3V0KCkge1xuICAvLyBmdW5jdGlvbiB0byBzdG9yZSB0aGUgYm9vbGVhbiBmb3IgdGhlIHRpbWUgb3V0XG4gIC8vIFNldCBpc0luYWN0aXZlIHZhcmlhYmxlIHRvIHRydWVcbiAgQWxwaW5lLnN0b3JlKCdpc0luYWN0aXZlJywgdHJ1ZSk7XG59XG5cbnN0YXJ0VGltZW91dCgpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcmVzZXRUaW1lcik7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHJlc2V0VGltZXIpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcmVzZXRUaW1lcik7XG5cbi8vIGRlZmF1bHQgdmFyaWFibGVzXG5jb25zdCBzdyA9IFwiL3N3LmpzXCI7XG5jb25zdCBob21lID0gXCIvXCI7XG5cbi8vIGRldGVjdCBicm93c2VyIHR5cGVcbmNvbnN0IGJyb3dzZXIgPSBkZXRlY3QoKTtcblxuLy8gc2V0IHNlcnZpY2Ugd29ya2VyIGxpbmsgYW5kIHNjb3BlIHN0YXJ0IGxpbmtcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBnZXQgZ2xvYmFsIHZhcmlhYmxlcyBmcm9tIHRoZSBiYXNlLmh0bWwgZmlsZSBmb3Jcbi8vIHB1c2ggbm90aWZpY2F0aW9uIGFuZCBwd2EgaW5zdGFsbCBidXR0b25cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxubGV0IHsgQVBQTElDQVRJT05fU0VSVkVSX0tFWSwgQ1JFQVRFX1dQX0RFVklDRSwgU0VORF9OT1RJRklDQVRJT04gfSA9XG4gIHdpbmRvdy5XRUJfUFVTSF9DRkc7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBnZW5lcmF0ZSBrZXkgZm9yIHB1c2ggbm90aWZpY2F0aW9uc1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9LbGVyaXRoLzgwYWJkNzQyZDcyNmRkNTg3ZjRiZDVkNmEwYWIyNmI2I2ZpbGUtdXJsYmFzZTY0dG91aW50OGFycmF5LWpzXG5mdW5jdGlvbiB1cmxCYXNlNjRUb1VpbnQ4QXJyYXkoYmFzZTY0U3RyaW5nKSB7XG4gIHZhciBwYWRkaW5nID0gXCI9XCIucmVwZWF0KCg0IC0gKGJhc2U2NFN0cmluZy5sZW5ndGggJSA0KSkgJSA0KTtcbiAgdmFyIGJhc2U2NCA9IChiYXNlNjRTdHJpbmcgKyBwYWRkaW5nKS5yZXBsYWNlKC9cXC0vZywgXCIrXCIpLnJlcGxhY2UoL18vZywgXCIvXCIpO1xuXG4gIHZhciByYXdEYXRhID0gd2luZG93LmF0b2IoYmFzZTY0KTtcbiAgdmFyIG91dHB1dEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkocmF3RGF0YS5sZW5ndGgpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3RGF0YS5sZW5ndGg7ICsraSkge1xuICAgIG91dHB1dEFycmF5W2ldID0gcmF3RGF0YS5jaGFyQ29kZUF0KGkpO1xuICB9XG4gIHJldHVybiBvdXRwdXRBcnJheTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB0aGlzIGlzIHRvIHN1YnNjcmliZSB0byBwdXNoIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBicm93c2VyIHRvIHRoZSBzZXJ2ZXJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYXN5bmMgZnVuY3Rpb24gc2F2ZVN1YnNjcmliZU9iaihzdWJzY3JpcHRpb24pIHtcbiAgLy8gc2F2ZSBzdWJzY3JpcHRpb24gdG8gdGhlIHNlcnZlclxuICBjb25zdCBzdWJzY3JpcHRpb25Kc29uID0gc3Vic2NyaXB0aW9uLnRvSlNPTigpO1xuICBjb25zdCBlbmRwb2ludFBhcnRzID0gc3Vic2NyaXB0aW9uSnNvbi5lbmRwb2ludC5zcGxpdChcIi9cIik7XG4gIGNvbnN0IHJlZ2lzdHJhdGlvbklkID0gZW5kcG9pbnRQYXJ0c1tlbmRwb2ludFBhcnRzLmxlbmd0aCAtIDFdO1xuXG4gIGNvbnN0IHByZWRhdGEgPSB7XG4gICAgc3RhdHVzX3R5cGU6IFwic3Vic2NyaWJlXCIsXG4gICAgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb25Kc29uLFxuICAgIGJyb3dzZXI6IGJyb3dzZXIubmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgIHAyNTZkaDogc3Vic2NyaXB0aW9uSnNvbi5rZXlzLnAyNTZkaCxcbiAgICBhdXRoOiBzdWJzY3JpcHRpb25Kc29uLmtleXMuYXV0aCxcbiAgICB1c2VyX2FnZW50OiBuYXZpZ2F0b3IuZ2V0VXNlckFnZW50LFxuICAgIHJlZ2lzdHJhdGlvbl9pZDogcmVnaXN0cmF0aW9uSWQsXG4gICAgZ3JvdXA6IFwidXNlcnNcIixcbiAgfTtcblxuICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkocHJlZGF0YSk7XG5cbiAgYXdhaXQgYXhpb3NcbiAgICAucG9zdChDUkVBVEVfV1BfREVWSUNFLCBkYXRhLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIlgtQ1NSRlRva2VuXCI6IGRvY3VtZW50LmhlYWRcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpXG4gICAgICAgICAgLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIiksXG4gICAgICB9LFxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICB0b2FzdHIuc3VjY2Vzcyh7XG4gICAgICAgICAgdGl0bGU6IFwiW1BVU0ggTk9USUZJQ0FUSU9OIFNVQlNDUklQVElPTl1cIixcbiAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiBgU3Vic2NyaXB0aW9uIFNlbnQgU3VjY2Vzc2Z1bGx5ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIFwic3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uXCJcbiAgICAgICk7XG4gICAgICBzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiLCB0cnVlKTtcbiAgICAgIC8vIGlmIHN1YnNjcmlwdGlvbiBpcyBzdWNjZXNzZnVsbHkgc2F2ZWQgdG8gdGhlIHNlcnZlclxuICAgICAgLy8gdGhlbiBlbmFibGUgdGhlIHRlc3Qgbm90aWZpY2F0aW9uIHB1c2ggYnV0dG9uIHRvIGJlIHZpc2libGVcbiAgICAgIHNldHVwVHJpZ2dlckJ1dHRvbihzdWJzY3JpcHRpb24pO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgdGl0bGU6IFwiW1BVU0ggTk9USUZJQ0FUSU9OIFNFUlZFUl1cIixcbiAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiBgTm90aWZpY2F0aW9uIFN1YnNjcmlwdGlvbiAke2Vycm9yLm1lc3NhZ2V9YCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0aGlzIGZ1bmN0aW9uIGlzIHRvIHNlbmQgc3Vic2NyaXB0aW9uIG5vdGlmaWNhdGlvbiB0byB0aGUgc2VydmVyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmFzeW5jIGZ1bmN0aW9uIHN1YnNjcmliZShyZWdpc3RyYXRpb24pIHtcbiAgYXdhaXQgcmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyXG4gICAgLmdldFN1YnNjcmlwdGlvbigpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic3Vic2NyaXB0aW9uIGV4aXN0c1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNhdmVTdWJzY3JpYmVPYmooc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgc2V0dXBUcmlnZ2VyQnV0dG9uKHN1YnNjcmlwdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB1c2VyVmlzaWJsZU9ubHk6IHRydWUsIC8vIHJlcXVpcmVkIGJ5IGNocm9tZVxuICAgIGFwcGxpY2F0aW9uU2VydmVyS2V5OiB1cmxCYXNlNjRUb1VpbnQ4QXJyYXkoQVBQTElDQVRJT05fU0VSVkVSX0tFWSksXG4gIH07XG5cbiAgYXdhaXQgcmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyXG4gICAgLnN1YnNjcmliZShvcHRpb25zKVxuICAgIC50aGVuKFxuICAgICAgLy8gcmVxdWVzdGluZyB0byBzdWJzY3JpYmUgZnJvbSB0aGUgc2VydmVyXG4gICAgICBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYHN1YnNjcmlwdGlvbjogYCwgc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzdWJzY3JpcHRpb24uZW5kcG9pbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3Vic2NyaXB0aW9uIGlzIG5vdyBzYXZlZCB0byB0aGUgc2VydmVyXG4gICAgICAgIHNhdmVTdWJzY3JpYmVPYmooc3Vic2NyaXB0aW9uKTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICAgIGl6aVRvYXN0LnN1Y2Nlc3Moe1xuICAgICAgICAgICAgdGl0bGU6IFwiW1BVU0ggTk9USUZJQ0FUSU9OIFNVQlNDUklQVElPTl1cIixcbiAgICAgICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBTdWJzY3JpcHRpb24gU2VudCBTdWNjZXNzZnVsbHlgLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVycm9yIGZpZ3VyZSB0aGUgZXJyb3IgYW5kIHRocm93IGFuIGFwcHJvcHJhaXRlIGVycm9yIG1lc3NhZ2UgdG9cbiAgICAgIC8vIHRoZSB1c2VyIHNvIGhlIGtub3dzIGV4YWN0bHkgd2hhdCBpcyB3cm9uZyBhbmQgY2FuIG1vdmUgZm9yd2FyZCBvciBhZGp1c3QgZm9yIGFcbiAgICAgIC8vIGRldmljZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICAgIHRpdGxlOiBcIltQVVNIIE5PVElGSUNBVElPTiBTVUJTQ1JJUFRJT05dXCIsXG4gICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgbWVzc2FnZTogYCR7ZXJyb3IubWVzc2FnZX1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFRoZSBmdW5jdGlvbiB0byB0cmlnZ2VyIHRoZSBwdXNoIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBicm93c2VyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHN1YnNjcmliZShyZWcpO1xuZnVuY3Rpb24gc2V0dXBTdWJzY3JpYmVCdXR0b24ocmVnKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvblwiKSkge1xuICAgIGNvbnN0IHN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b25cIlxuICAgICk7XG4gICAgc3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIiwgZmFsc2UpO1xuICAgIHN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwibWQ6aGlkZGVuXCIsIGZhbHNlKTtcbiAgICBzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHN1YnNjcmliZShyZWcpO1xuICAgICAgY29uc29sZS5sb2coXCJTdWJzY3JpYmUgQnV0dG9uIFNldFwiKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNhYmxlU3Vic2NyaWJlQnV0dG9uKCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b25cIikpIHtcbiAgICBjb25zdCBzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwic3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uXCJcbiAgICApO1xuICAgIHN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIsIHRydWUpO1xuICAgIHN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwibWQ6aGlkZGVuXCIsIHRydWUpO1xuICB9XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhpcyBmdW5jdGlvbiBpcyBmb3IgYSB1c2VyIHRvIHRlc3QgdGhlIHB1c2ggbm90aWZpY2F0aW9uXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmFzeW5jIGZ1bmN0aW9uIHNldHVwVHJpZ2dlckJ1dHRvbihzdWJzY3JpcHRpb24pIHtcbiAgY29uc3Qgc3ViSnNvbiA9IHN1YnNjcmlwdGlvbi50b0pTT04oKTtcbiAgY29uc3QgZW5kcG9pbnRQYXJ0cyA9IHN1Ykpzb24uZW5kcG9pbnQuc3BsaXQoXCIvXCIpO1xuICBjb25zdCByZWdpc3RyYXRpb25JZCA9IGVuZHBvaW50UGFydHNbZW5kcG9pbnRQYXJ0cy5sZW5ndGggLSAxXTtcbiAgY29uc3QgcHJlZGF0YSA9IHtcbiAgICByZWdpc3RyYXRpb25faWQ6IHJlZ2lzdHJhdGlvbklkLFxuICAgIGF1dGg6IHN1Ykpzb24ua2V5cy5hdXRoLFxuICAgIGhlYWQ6IFwiSmVycnkgU2F5cyDwn5SKIFwiLFxuICAgIGJvZHk6IFwiVGhpcyBpcyBob3cgcHVzaCBub3RpZmljYXRpb25zIGZyb20gbXkgc2l0ZSB3aWxsIGJlIHNob3duIG9uIHlvdXIgZGV2aWNlcy5cIixcbiAgfTtcblxuICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkocHJlZGF0YSk7XG5cbiAgYXdhaXQgYXhpb3NcbiAgICAucG9zdChTRU5EX05PVElGSUNBVElPTiwgZGF0YSwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbihhc3luYyBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGF3YWl0IGl6aVRvYXN0LmluZm8oe1xuICAgICAgICB0aXRsZTogXCJbUFVTSCBOT1RJRklDQVRJT04gVEVTVCBTVUNDRVNTRlVMXVwiLFxuICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaChhc3luYyBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgYXdhaXQgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICB0aXRsZTogXCJbUFVTSCBOT1RJRklDQVRJT04gVEVTVCBFUlJPUl1cIixcbiAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgbWVzc2FnZTogZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWwsXG4gICAgfSk7XG4gICAgfSk7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRW5kIHB1c2ggbm90aWZpY2F0aW9uIGJ1dHRvblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGVuYWJsZSBzZXJ2aWNlIHdvcmtlciwgdGhlbiB3aGVuIHNlcnZpY2Ugd29ya2VyIGlzIGVuYWJsZWQgcmVxdWVzdFxuLy8gcGVybWlzc2lvbiBmb3IgcHVzaCBub3RpZmljYXRpb24gYW5kIGxvY2F0aW9uIHNlcnZpY2VzIGZyb20gdGhlIGJyb3dzZXJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgICAucmVnaXN0ZXIoc3csIHsgc2NvcGU6IGhvbWUgfSlcbiAgICAgIC50aGVuKChyZWdpc3RyYXRpb24pID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2Ugd29ya2VyIHJlZ2lzdGVyYXRpb24gc3VjY2VlZGVkOiBcIiwgcmVnaXN0cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oZnVuY3Rpb24gYXN5bmMocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgaW5pdGlhbGlzZVN0YXRlKHJlZ2lzdHJhdGlvbik7XG4gICAgICAgICAgaWYgKHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2Ugd29ya2VyIGluc3RhbGxpbmdcIik7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZWdpc3RyYXRpb24ud2FpdGluZykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIHdvcmtlciBpbnN0YWxsZWRcIik7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZWdpc3RyYXRpb24uYWN0aXZlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2Ugd29ya2VyIGFjdGl2ZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgICAgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICAgICAgdGl0bGU6IFwiW1NFUlZJQ0UgV09SS0VSXVwiLFxuICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJTZXJ2aWNlIFdvcmtlciBGYWlsZWQgdG8gUmVnaXN0ZXJcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSk7XG59XG5cbmNvbnN0IGluaXRpYWxpc2VTdGF0ZSA9IChyZWcpID0+IHtcbiAgaWYgKCFyZWcuc2hvd05vdGlmaWNhdGlvbikge1xuICAgIGl6aVRvYXN0LmVycm9yKHtcbiAgICAgIHRpdGxlOiBcIltQVVNIIE5PVElGSUNBVElPTiBVTlNVUFBPUlRFRF1cIixcbiAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiU2hvd2luZyA8c3Ryb25nPlBVU0ggTk9USUZJQ0FUSU9OUzwvc3Ryb25nPiBpcyB1bnN1cHBvcnRlZFwiLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChyZWcuc2hvd05vdGlmaWNhdGlvbikge1xuICAgIGRpc2FibGVTdWJzY3JpYmVCdXR0b24oKTtcbiAgfVxuXG4gIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gXCJkZW5pZWRcIikge1xuICAgIGl6aVRvYXN0Lndhcm5pbmcoe1xuICAgICAgdGl0bGU6IFwiW1BVU0ggTk9USUZJQ0FUSU9OIERFTklFRF1cIixcbiAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgIFwiWW91IHByZXZlbnRlZCB1cyBmcm9tIHNod29pbmcgbm90aWZpY2F0aW9ucy4gTWFudWFsbHkgY2hlY2sgaWYgeW91IGhhdmUgcHJldmVudGVkIHB1c2ggbm90aWZjYXRpb24gZnJvbSB1cy5cIixcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gIT09IFwiZGVuaWVkXCIpIHtcbiAgICBkaXNhYmxlU3Vic2NyaWJlQnV0dG9uKCk7XG4gIH1cblxuICBpZiAoIShcIlB1c2hNYW5hZ2VyXCIgaW4gd2luZG93KSkge1xuICAgIGl6aVRvYXN0LmluZm8oe1xuICAgICAgdGl0bGU6IFwiW1BVU0ggQk5PVElGSUNBVElPTiBVTkFWQUlMQkFMRV1cIixcbiAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiUHVzaCBub3RpZmljYXRpb24gaXMgbm90IGFsbG93ZWQgaW4geW91ciBicm93c2VyLlwiLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChcIlB1c2hNYW5hZ2VyXCIgaW4gd2luZG93KSB7XG4gICAgZGlzYWJsZVN1YnNjcmliZUJ1dHRvbigpO1xuICB9XG5cbiAgcmVnLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpLnRoZW4oKHN1YikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0cmF0aW9uIE9iamVjdFwiLCByZWcpO1xuICAgIGlmICghc3ViIHx8IHN1YiA9PT0gbnVsbCkge1xuICAgICAgc2V0dXBTdWJzY3JpYmVCdXR0b24ocmVnKTtcbiAgICB9IGVsc2UgaWYgKHN1YiAhPT0gbnVsbCB8fCBzdWIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU3Vic2NyaWJlIEFscmVhZHkgRG9uZVwiKTtcbiAgICAgIC8vIHNldHVwVHJpZ2dlckJ1dHRvbihzdWIpO1xuICAgICAgZGlzYWJsZVN1YnNjcmliZUJ1dHRvbigpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBBbHBpbmUgSlMgU2NyaXB0c1xuQWxwaW5lLnBsdWdpbihpbnRlcnNlY3QpO1xuLy8gQWxwaW5lLnBsdWdpbihNYXNrKTtcblxud2luZG93LkFscGluZSA9IEFscGluZTtcbi8vIEFscGluZS5kYXRhKFwiU2lnbnVwRm9ybVwiLCBTaWdudXBGb3JtKTtcbi8vIEFscGluZS5kYXRhKFwiQ29uZmlybUVtYWlsRm9ybVwiLCBDb25maXJtRW1haWxGb3JtKTtcbi8vIEFscGluZS5kYXRhKFwiTG9naW5Gb3JtXCIsIExvZ2luRm9ybSk7XG4vLyBBbHBpbmUuZGF0YShcIlBDaGFuZ2VGb3JtXCIsIFBDaGFuZ2VGb3JtKTtcbi8vIEFscGluZS5kYXRhKFwiUmVzZXRQYXNzd29yZEZvcm1cIiwgUmVzZXRQYXNzd29yZEZvcm0pO1xuLy8gQWxwaW5lLmRhdGEoXCJTdWJzY3JpcHRpb25Gb3JtXCIsIFN1YnNjcmlwdGlvbkZvcm0pO1xuLy8gQWxwaW5lLmRhdGEoXCJHb29nbGVcIiwgR29vZ2xlKTtcbkFscGluZS5kYXRhKFwiRGVmYXVsdFwiLCBJbml0aWFsaXplKTtcbkFscGluZS5kYXRhKFwiUHJvamVjdFwiLCBQcm9qZWN0UHJvY2Vzc2luZyk7XG4vLyBBbHBpbmUuZGF0YShcIlVzZXJEZXRhaWxcIiwgVXNlckRldGFpbCk7XG4vLyBBbHBpbmUuZGF0YSgnQ29udGFjdEZvcm0nLCBDb250YWN0Rm9ybSksXG4vLyBBbHBpbmUuZGF0YSgnU3RpY2t5TmF2JywgU3RpY2t5TmF2KTtcbi8vIEFscGluZS5kYXRhKCdDaGFydEpzJywgQ2hhcnRKcyk7XG5BbHBpbmUuc3RhcnQoKTtcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVFJJR0dFUiBJTlNUQUxMIEJVVFRPTiBGT1IgUFJPR1JFU1NJVkUgV0VCIEFQUExJQ0FUSU9OXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNoZWNrIGlmIHRoZSBQV0EgaXMgYWxyZWFkeSBpbnN0YWxsZWQgb3Igbm90XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihkaXNwbGF5LW1vZGU6IHN0YW5kYWxvbmUpXCIpLm1hdGNoZXMpIHtcbiAgY29uc29sZS5sb2coXCJQV0EgaXMgYWxyZWFkeSBpbnN0YWxsZWRcIik7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZGVmZXJyZWRQcm9tcHRcIik7XG59IGVsc2Uge1xuICBjb25zb2xlLmxvZyhcIlBXQSBpcyBub3QgaW5zdGFsbGVkXCIpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZWluc3RhbGxwcm9tcHRcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwi8J+RjVtQV0FdXCIsIFwiYmVmb3JlaW5zdGFsbHByb21wdFwiLCBKU09OLnN0cmluZ2lmeShldmVudCkpO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgQ2hyb21lIDY3IGFuZCBlYXJsaWVyIGZyb20gYXV0b21hdGljYWxseSBzaG93aW5nIHRoZSBwcm9tcHRcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICAvLyBTdGFzaCB0aGUgZXZlbnQgc28gaXQgY2FuIGJlIHRyaWdnZXJlZCBsYXRlci5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGVmZXJyZWRQcm9tcHRcIiwgSlNPTi5zdHJpbmdpZnkoZXZlbnQpKTtcbiAgICAgIHdpbmRvdy5kZWZlcnJlZFByb21wdCA9IGV2ZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIShcImRlZmVycmVkUHJvbXB0XCIgaW4gbG9jYWxTdG9yYWdlKSkge1xuICAgICAgICBzZWxmLmNsb3NlSW5zdGFsbFByb21wdCA9IHRydWU7XG4gICAgICAgIHNlbGYuc2hvd0luc3RhbGxGbG9hdEljb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8vIGxvYWQgc3RhdGljIHNjcmlwdCBmaWxlcyBhZnRlciBodG14IGxvYWRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuW1xuICAvLyBcImh0bXg6b25Mb2FkXCIsXG4gIC8vIFwiaHRteDpsb2FkXCIsXG4gIC8vIFwiaHRteDphZnRlclNldHRsZVwiLFxuICBcImh0bXg6YWZ0ZXJTd2FwXCIsXG4gIC8vIFwiaHRteDphZnRlck9uTG9hZFwiLFxuXS5mb3JFYWNoKChldnQpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LmFuaW1lID0gYW5pbWU7XG4gICAgd2luZG93LnNjcm9sbE1hZ2ljID0gU2Nyb2xsTWFnaWM7XG4gICAgd2luZG93Lml6aVRvYXN0ID0gaXppVG9hc3Q7XG4gICAgLy8gLy8gaW5pdGlhbGl6ZSB0aW55bWNlXG4gICAgd2luZG93LnRpbnltY2UgPSB0aW55bWNlO1xuICAgIC8vIGluaXRpYWxpemUgbG90dGllIHdlYiBhbmQgbG90dGllIHBsYXllclxuICAgIHdpbmRvdy5sb3R0aWV3ZWIgPSBsb3R0aWV3ZWI7XG5cbiAgICAvLyBpbml0aWFsaXplIGV0aGVyIGpzIGZvciBjcnlwdG8gcGF5bWVudFxuICAgIHdpbmRvdy5ldGhlcnMgPSBldGhlcnM7XG4gICAgLy8gaW5pdGlhbGl6ZSBheGlvcyBhc3luYyBwb3N0fGdldCByZXF1ZXN0XG4gICAgd2luZG93LmF4aW9zID0gYXhpb3M7XG4gICAgLy8gaW5pdGlhbGl6ZSBzd2lwZXIuanNcbiAgICB3aW5kb3cuU3dpcGVyID0gU3dpcGVyO1xuICAgIC8vIGluaXRpYWlsaXplIGl6aXRvYXN0IGFsZXJ0c1xuXG4gICAgY29uc3QgY291bnRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvdW50ZXJcIik7XG4gICAgY29uc3QgY2FyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJcIik7XG5cbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcblxuICAgIC8vIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25zdCcpKXtcbiAgICAvLyAgIGxvdHRpZXdlYi5sb2FkQW5pbWF0aW9uKHtcbiAgICAvLyAgICAgY29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uc3QnKSxcbiAgICAvLyAgICAgcGF0aDogXCIvc3RhdGljL3ZlbmRvcnMvaW1hZ2VzL2xvdHRpZS91bmRlci1jb25zdHJ1Y3Rpb24uanNvblwiLFxuICAgIC8vICAgICByZW5kZXJlcjogJ3N2ZycsXG4gICAgLy8gICAgIGxvb3A6IHRydWUsXG4gICAgLy8gICAgIGF1dG9QbGF5OiB0cnVlLFxuICAgIC8vICAgICBuYW1lOiAnVW5kZXIgQ29uc3RydWN0aW9uJ1xuICAgIC8vICAgfSk7XG4gICAgLy8gfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRDb3VudGluZygpIHtcbiAgICAgIGlmIChjb3VudGVycykge1xuICAgICAgICBjb3VudGVycy5mb3JFYWNoKChjb3VudGVyKSA9PiB7XG4gICAgICAgICAgYW5pbWUoe1xuICAgICAgICAgICAgdGFyZ2V0czogY291bnRlcixcbiAgICAgICAgICAgIGlubmVySFRNTDogWzAsIGNvdW50ZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb3VudFwiKV0sXG4gICAgICAgICAgICBlYXNpbmc6IFwiZWFzZUluT3V0U2luZVwiLFxuICAgICAgICAgICAgcm91bmQ6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogNDAwMCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZUhvd3MoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob3dcIikpIHtcbiAgICAgICAgYW5pbWUoe1xuICAgICAgICAgIHRhcmdldHM6IFwiLmhvd1wiLFxuICAgICAgICAgIHRyYW5zbGF0ZVg6IDU2LFxuICAgICAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRTaW5lXCIsXG4gICAgICAgICAgZHVyYXRpb246IDgwMCxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIGRlbGF5OiBhbmltZS5zdGFnZ2VyKDIwMCwgeyBzdGFydDogNTAwIH0pLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudFRyaWdnZXJcIikpIHtcbiAgICAgIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG4gICAgICAgIHRyaWdnZXJFbGVtZW50OiBcIiNjb3VudFRyaWdnZXJcIixcbiAgICAgICAgdHJpZ2dlckhvb2s6IFwib25FbnRlclwiLFxuICAgICAgICBkdXJhdGlvbjogXCIxMDAlXCIsXG4gICAgICAgIHJldmVyc2U6IGZhbHNlLFxuICAgICAgICBvZmZzZXQ6IDUwLFxuICAgICAgfSlcbiAgICAgICAgLm9uKFwiZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHN0YXJ0Q291bnRpbmcoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZFRvKGNvbnRyb2xsZXIpO1xuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYWNrXCIpKSB7XG4gICAgICBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xuICAgICAgICB0cmlnZ2VyRWxlbWVudDogXCIjdHJhY2tcIixcbiAgICAgICAgdHJpZ2dlckhvb2s6IFwib25FbnRlclwiLFxuICAgICAgICBkdXJhdGlvbjogXCIxMDAlXCIsXG4gICAgICAgIHJldmVyc2U6IHRydWUsXG4gICAgICAgIG9mZnNldDogNTAsXG4gICAgICB9KVxuICAgICAgICAub24oXCJlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2FyRHJpdmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZFRvKGNvbnRyb2xsZXIpO1xuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvd3NcIikpIHtcbiAgICAgIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG4gICAgICAgIHRyaWdnZXJFbGVtZW50OiBcIiNob3dzXCIsXG4gICAgICAgIHRyaWdnZXJIb29rOiBcIm9uRW50ZXJcIixcbiAgICAgICAgZHVyYXRpb246IFwiMTAwJVwiLFxuICAgICAgICByZXZlcnNlOiBmYWxzZSxcbiAgICAgICAgb2Zmc2V0OiAxMDAsXG4gICAgICB9KVxuICAgICAgICAub24oXCJlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYW5pbWF0ZUhvd3MoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZFRvKGNvbnRyb2xsZXIpO1xuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmludHJvXCIpKSB7XG4gICAgICBhbmltZSh7XG4gICAgICAgIHRhcmdldHM6IFwiLmludHJvXCIsXG4gICAgICAgIHRyYW5zbGF0ZVg6IC01NixcbiAgICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFNpbmVcIixcbiAgICAgICAgZHVyYXRpb246IDgwMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZGVsYXk6IGFuaW1lLnN0YWdnZXIoMjAwLCB7IHN0YXJ0OiA1MDAgfSksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYXJEcml2ZSgpIHtcbiAgICAgIGlmIChjYXIpIHtcbiAgICAgICAgYW5pbWUoe1xuICAgICAgICAgIHRhcmdldHM6IFwiI2NhclwiLFxuICAgICAgICAgIHRyYW5zbGF0ZVg6IHtcbiAgICAgICAgICAgIHZhbHVlOiBcIi0xMDB2d1wiLFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlYXNpbmc6IFwiZWFzZUluT3V0U2luZVwiLFxuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgZGVsYXk6IGFuaW1lLnN0YWdnZXIoMjAwLCB7IHN0YXJ0OiA1MDAgfSksXG4gICAgICAgICAgZGlyZWN0aW9uOiBcIm5vcm1hbFwiLFxuICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vIGNvbnN0IGF4aW9zX3Nlc3Npb24gPSBheGlvcy5jcmVhdGUoe1xuLy8gICAgIHhzcmZDb29raWVOYW1lIDogJ2NzcmZ0b2tlbicsXG4vLyAgICAgeHNyZkhlYWRlck5hbWUgOiBcIlgtQ1NSRlRva2VuXCIsXG4vLyAgICAgd2l0aENyZWRlbnRpYWxzIDogdHJ1ZSxcbi8vICAgICB0aW1lb3V0IDogMTUwMDBcbi8vIH0pO1xuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbmF4aW9zLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gJ2NzcmZ0b2tlbic7XG5heGlvcy5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9IFwiWC1DU1JGVG9rZW5cIjtcbmF4aW9zLmRlZmF1bHRzLnRpbWVvdXQgPSAyNTAwMDtcblxuZXhwb3J0IGRlZmF1bHQgYXhpb3M7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcIi4vYXhpb3NGYWN0b3J5XCI7XG5pbXBvcnQgaXppVG9hc3QgZnJvbSBcIml6aXRvYXN0L2Rpc3QvanMvaXppVG9hc3QubWluLmpzXCI7IC8vIHlvdSBoYXZlIGFjY2VzcyB0byBpemlUb2FzdCBub3dcbmltcG9ydCBodG14IGZyb20gXCJodG14Lm9yZy9kaXN0L2h0bXhcIjtcblxuaW1wb3J0IEluaXRpYWxpemUgZnJvbSBcIi4vZGVmYXVsdFwiO1xuXG5jb25zdCBwcm9ncmVzc2JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NcIik7XG5jb25zdCBwcm9ncmFzc0Ftb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NMYWJlbFwiKTtcblxuLy8gZnVuY3Rpb24gdG8gc2ltdWxhdGUgc2xlZXAgb3BlcmF0aW9uIG9uIGFuIGV2ZW50XG5mdW5jdGlvbiBzbGVlcChtcykge1xuICAgIHJldHVybiBuZXcgd2luZG93LlByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UHJvY2Vzc2luZygpIHtcbiAgICByZXR1cm4ge1xuXG4gICAgICAgIHByamVjdFByb2Nlc3Npbmc6IGZhbHNlLFxuXG4gICAgICAgIGFzeW5jIHN1Ym1pdFByb2plY3QoKSB7XG4gICAgICAgICAgICB0aGlzLnByamVjdFByb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICAgICAgSW5pdGlhbGl6ZS5wcm9jZXNzaW5nUmVxdWVzdCA9IHRydWU7XG4gICAgICAgICAgICBwcm9ncmVzc2Jhci52YWx1ZSA9IDA7XG4gICAgICAgICAgICBwcm9ncmFzc0Ftb3VudC5pbm5lclRleHQgPSAnMCUnO1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IHRoaXMuJHJlZnMuZm9ybTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGZvcm1FbGVtZW50LmFjdGlvbjtcbiAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1FbGVtZW50KTtcblxuICAgICAgICAgICAgYXdhaXQgZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltuYW1lXVwiKS5mb3JFYWNoKChmaWVsZEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZihmaWVsZEVsZW1lbnQubmFtZSA9PT0gXCJpc19wdWJsaXNoZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRFbGVtZW50LnZhbHVlID09PSAnb24nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKGZpZWxkRWxlbWVudC5uYW1lLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKGZpZWxkRWxlbWVudC5uYW1lLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkRWxlbWVudC50eXBlID09PSBcInRleHRhcmVhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRhcmVhID0gZmllbGRFbGVtZW50LmlkO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZEVsZW1lbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucGFyZW50LnRpbnltY2UuZ2V0KHRleHRhcmVhKS5nZXRDb250ZW50KClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChmaWVsZEVsZW1lbnQubmFtZSwgZmllbGRFbGVtZW50LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS5kaXIoZGF0YSk7XG5cbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYWN0aW9uLCBkYXRhKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgdGFza19pZCA9IHJlc3BvbnNlLmRhdGEudGFza19pZDtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBjYWNoZV9rZXkgPSByZXNwb25zZS5kYXRhLmNhY2hlX2tleTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBtZXNzYWdlID0gcmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKXtcbiAgICAgICAgICAgICAgICAgICAgaXppVG9hc3Quc3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJQUk9KRUNUIEFEREVEXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlByb2plY3QgU3VjY2Vzc2Z1bGx5IEFkZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJqZWN0UHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc2Jhci52YWx1ZSA9IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jhc3NBbW91bnQuaW5uZXJUZXh0ID0gJzEwMCUnO1xuICAgICAgICAgICAgICAgICAgICBJbml0aWFsaXplLnByb2Nlc3NpbmdSZXF1ZXN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2hlY2tTdGF0dXModGFza19pZCwgY2FjaGVfa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGl6aVRvYXN0LmVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUFJPSkVDVCBVUExPQURJTkcgRkFJTEVEXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnByamVjdFByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0sXG5cblxuICAgICAgICBhc3luYyBjaGVja1N0YXR1cyh0YXNrX2lkLCBjYWNoZV9rZXkpIHtcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9qZWN0cy9jaGVjay1wcm9jZXNzaW5nLyR7dGFza19pZH0vJHtjYWNoZV9rZXl9L2ApXG4gICAgICAgICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NiYXIudmFsdWUgPSAxMDA7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyYXNzQW1vdW50LmlubmVyVGV4dCA9ICcxMDAlJztcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoNTAwKTtcbiAgICAgICAgICAgICAgICAgICAgSW5pdGlhbGl6ZS5wcm9jZXNzaW5nUmVxdWVzdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpemlUb2FzdC5zdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlBST0pFQ1QgUFJPQ0VTU0lOR1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBodG14LmFqYXgoXG4gICAgICAgICAgICAgICAgICAgICAgICAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGAvcHJvamVjdHMvJHtyZXNwb25zZS5kYXRhLm9iamVjdC5zbHVnfS9gLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCIjZGV0YWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhcDogXCJpbm5lckhUTUxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgSW5pdGlhbGl6ZS5kZXRhaWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzYmFyLnZhbHVlICsrO1xuICAgICAgICAgICAgICAgICAgICBwcm9ncmFzc0Ftb3VudC5pbm5lclRleHQgPSBgJHtwcm9ncmVzc2Jhci52YWx1ZX0lYDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1N0YXR1cyh0YXNrX2lkLCBjYWNoZV9rZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgSW5pdGlhbGl6ZS5wcm9jZXNzaW5nUmVxdWVzdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGl6aVRvYXN0LmVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUFJPSkVDVCBQUk9DRVNTSU5HIEZBSUxFRFwiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmplY3RQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbInRpbnltY2UiLCJheGlvcyIsIkluaXRpYWxpemUiLCJQcm9qZWN0UHJvY2Vzc2luZyIsImRldGVjdCIsIlN3aXBlciIsImh0bXgiLCJBbHBpbmUiLCJpbnRlcnNlY3QiLCJldGhlcnMiLCJ0b2FzdHIiLCJpemlUb2FzdCIsImFuaW1lIiwiU2Nyb2xsTWFnaWMiLCJsb3R0aWV3ZWIiLCJ3aW5kb3ciLCJ0aW1lciIsInJlc2V0VGltZXIiLCJjbGVhclRpbWVvdXQiLCJzdG9yZSIsInN0YXJ0VGltZW91dCIsInNldFRpbWVvdXQiLCJ0aW1lb3V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic3ciLCJob21lIiwiYnJvd3NlciIsIkFQUExJQ0FUSU9OX1NFUlZFUl9LRVkiLCJDUkVBVEVfV1BfREVWSUNFIiwiU0VORF9OT1RJRklDQVRJT04iLCJXRUJfUFVTSF9DRkciLCJ1cmxCYXNlNjRUb1VpbnQ4QXJyYXkiLCJiYXNlNjRTdHJpbmciLCJwYWRkaW5nIiwicmVwZWF0IiwibGVuZ3RoIiwiYmFzZTY0IiwicmVwbGFjZSIsInJhd0RhdGEiLCJhdG9iIiwib3V0cHV0QXJyYXkiLCJVaW50OEFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJzYXZlU3Vic2NyaWJlT2JqIiwic3Vic2NyaXB0aW9uIiwic3Vic2NyaXB0aW9uSnNvbiIsInRvSlNPTiIsImVuZHBvaW50UGFydHMiLCJlbmRwb2ludCIsInNwbGl0IiwicmVnaXN0cmF0aW9uSWQiLCJwcmVkYXRhIiwic3RhdHVzX3R5cGUiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJwMjU2ZGgiLCJrZXlzIiwiYXV0aCIsInVzZXJfYWdlbnQiLCJuYXZpZ2F0b3IiLCJnZXRVc2VyQWdlbnQiLCJyZWdpc3RyYXRpb25faWQiLCJncm91cCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdCIsImhlYWRlcnMiLCJoZWFkIiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInRoZW4iLCJyZXNwb25zZSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInN1Y2Nlc3MiLCJ0aXRsZSIsImJhbGxvb24iLCJwb3NpdGlvbiIsImFuaW1hdGVJbnNpZGUiLCJtZXNzYWdlIiwic3RhdHVzVGV4dCIsInN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic2V0dXBUcmlnZ2VyQnV0dG9uIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdWJzY3JpYmUiLCJyZWdpc3RyYXRpb24iLCJwdXNoTWFuYWdlciIsImdldFN1YnNjcmlwdGlvbiIsIm9wdGlvbnMiLCJ1c2VyVmlzaWJsZU9ubHkiLCJhcHBsaWNhdGlvblNlcnZlcktleSIsInNldHVwU3Vic2NyaWJlQnV0dG9uIiwicmVnIiwiZGlzYWJsZVN1YnNjcmliZUJ1dHRvbiIsInN1Ykpzb24iLCJib2R5IiwiaW5mbyIsImRldGFpbCIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInNjb3BlIiwicmVhZHkiLCJhc3luYyIsImluaXRpYWxpc2VTdGF0ZSIsImluc3RhbGxpbmciLCJ3YWl0aW5nIiwiYWN0aXZlIiwiZXJyIiwic2hvd05vdGlmaWNhdGlvbiIsIk5vdGlmaWNhdGlvbiIsInBlcm1pc3Npb24iLCJ3YXJuaW5nIiwic3ViIiwicGx1Z2luIiwic3RhcnQiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0SXRlbSIsImRlZmVycmVkUHJvbXB0Iiwic2VsZiIsImNsb3NlSW5zdGFsbFByb21wdCIsInNob3dJbnN0YWxsRmxvYXRJY29uIiwiZm9yRWFjaCIsImV2dCIsInNjcm9sbE1hZ2ljIiwiY291bnRlcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FyIiwiY29udHJvbGxlciIsIkNvbnRyb2xsZXIiLCJzdGFydENvdW50aW5nIiwiY291bnRlciIsInRhcmdldHMiLCJpbm5lckhUTUwiLCJlYXNpbmciLCJyb3VuZCIsImR1cmF0aW9uIiwiYW5pbWF0ZUhvd3MiLCJ0cmFuc2xhdGVYIiwib3BhY2l0eSIsImRlbGF5Iiwic3RhZ2dlciIsIlNjZW5lIiwidHJpZ2dlckVsZW1lbnQiLCJ0cmlnZ2VySG9vayIsInJldmVyc2UiLCJvZmZzZXQiLCJvbiIsImFkZFRvIiwiY2FyRHJpdmUiLCJ2YWx1ZSIsImRpcmVjdGlvbiIsImxvb3AiLCJkZWZhdWx0cyIsIndpdGhDcmVkZW50aWFscyIsInhzcmZDb29raWVOYW1lIiwieHNyZkhlYWRlck5hbWUiLCJwcm9ncmVzc2JhciIsInByb2dyYXNzQW1vdW50Iiwic2xlZXAiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicHJqZWN0UHJvY2Vzc2luZyIsInN1Ym1pdFByb2plY3QiLCJwcm9jZXNzaW5nUmVxdWVzdCIsImlubmVyVGV4dCIsImZvcm1FbGVtZW50IiwiJHJlZnMiLCJmb3JtIiwiYWN0aW9uIiwiRm9ybURhdGEiLCJmaWVsZEVsZW1lbnQiLCJhcHBlbmQiLCJ0eXBlIiwidGV4dGFyZWEiLCJpZCIsInBhcmVudCIsImdldCIsImdldENvbnRlbnQiLCJkaXIiLCJzdGF0dXMiLCJjaGVja1N0YXR1cyIsInRhc2tfaWQiLCJjYWNoZV9rZXkiLCJhamF4Iiwib2JqZWN0Iiwic2x1ZyIsInRhcmdldCIsInN3YXAiXSwic291cmNlUm9vdCI6IiJ9