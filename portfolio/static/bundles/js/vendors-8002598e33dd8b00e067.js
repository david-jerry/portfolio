(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["vendors"],{

/***/ "./portfolio/static/js/app/vendors.js":
/*!********************************************!*\
  !*** ./portfolio/static/js/app/vendors.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
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
/* harmony import */ var detect_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! detect-browser */ "./node_modules/detect-browser/es/index.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! htmx.org/dist/htmx */ "./node_modules/htmx.org/dist/htmx.js");
/* harmony import */ var htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/module.esm.js");
/* harmony import */ var _alpinejs_intersect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @alpinejs/intersect */ "./node_modules/@alpinejs/intersect/dist/module.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/ethers.js");
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! izitoast/dist/js/iziToast.min.js */ "./node_modules/izitoast/dist/js/iziToast.min.js");
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! scrollmagic */ "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(scrollmagic__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _lottiefiles_lottie_player__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @lottiefiles/lottie-player */ "./node_modules/@lottiefiles/lottie-player/dist/lottie-player.esm.js");


// Select 2
// import "select2/dist/css/select2.min.css";
// import "select2/dist/js/select2.min.js";

// tinymce









// components



// functional imports




// import Mask from "@ryangjchandler/alpine-mask";



// import "flowbite";
/* Project specific Javascript goes here. */




// initialize animejs
window.anime = animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_16__["default"];
window.scrollMagic = (scrollmagic__WEBPACK_IMPORTED_MODULE_17___default());
window.iziToast = (izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_15___default());


// Global Initializations for importedlibraries //
//----------------------------------------------------------
// initialize htmx
window.htmx = (htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_12___default());
// // initialize tinymce
window.tinymce = (tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_1___default());
// initialize lottie web and lottie player
window.lottieweb = (lottie_web__WEBPACK_IMPORTED_MODULE_18___default());

// initialize ether js for crypto payment
window.ethers = ethers__WEBPACK_IMPORTED_MODULE_20__;
// initialize axios async post|get request
window.axios = _components_axiosFactory__WEBPACK_IMPORTED_MODULE_9__["default"];
// initialize swiper.js
window.Swiper = swiper__WEBPACK_IMPORTED_MODULE_11__["default"];
// initiailize izitoast alerts
window.iziToast = (izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_15___default());

// Alpine JS Scripts
alpinejs__WEBPACK_IMPORTED_MODULE_13__["default"].plugin(_alpinejs_intersect__WEBPACK_IMPORTED_MODULE_14__["default"]);
// Alpine.plugin(Mask);

window.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_13__["default"];
// Alpine.data("SignupForm", SignupForm);
// Alpine.data("ConfirmEmailForm", ConfirmEmailForm);
// Alpine.data("LoginForm", LoginForm);
// Alpine.data("PChangeForm", PChangeForm);
// Alpine.data("ResetPasswordForm", ResetPasswordForm);
// Alpine.data("SubscriptionForm", SubscriptionForm);
// Alpine.data("Google", Google);
alpinejs__WEBPACK_IMPORTED_MODULE_13__["default"].data("Default", _components_default__WEBPACK_IMPORTED_MODULE_10__["default"]);
// Alpine.data("UpdateForm", UpdateForm);
// Alpine.data("UserDetail", UserDetail);
// Alpine.data('ContactForm', ContactForm),
// Alpine.data('StickyNav', StickyNav);
// Alpine.data('ChartJs', ChartJs);
alpinejs__WEBPACK_IMPORTED_MODULE_13__["default"].start();
//----------------------------------------------------------

// set service worker link and scope start link
//----------------------------------------------------------
const sw = "/sw.js";
const home = "/";
// detect browser type
const browser = (0,detect_browser__WEBPACK_IMPORTED_MODULE_21__.detect)();

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
      izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_15___default().success({
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
      izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_15___default().error({
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
      izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_15___default().success({
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
      izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_15___default().error({
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
    await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_15___default().info({
      title: "[PUSH NOTIFICATION TEST SUCCESSFUL]",
      balloon: true,
      position: "topRight",
      animateInside: true,
      message: response.data.message
    });
  }).catch(async function (error) {
    await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_15___default().error({
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
  window.addEventListener("load", async () => {
    navigator.serviceWorker.addEventListener("install", event => {
      if (true) {
        console.log(event);
      }

      // Show the PWA installation prompt
      window.addEventListener("beforeinstallprompt", promptEvent => {
        promptEvent.preventDefault();
        self.installPrompt = alpinejs__WEBPACK_IMPORTED_MODULE_13__["default"].store("installPrompt", promptEvent);
      });
    });
    await navigator.serviceWorker.register(sw, {
      scope: home
    }).then(async registration => {
      if (true) {
        console.log("Service worker registeration succeeded: ", registration);
      }
      await navigator.serviceWorker.ready.then(function async(registration) {
        if (true) {
          console.log("Service worker is active: ", registration.active);
        }
        initialiseState(registration);
      });
    }).catch(err => {
      if (true) {
        izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_15___default().error({
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
    izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_15___default().error({
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
    izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_15___default().warning({
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
    izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_15___default().info({
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

//----------------------------------------------------------

["htmx:onLoad", "htmx:load", "load", "htmx:afterSettle", "htmx:afterSwap", "htmx:afterOnLoad", "htmx:afterRequest"].forEach(evt => {
  window.addEventListener(evt, function () {
    window.anime = animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_16__["default"];
    window.scrollMagic = (scrollmagic__WEBPACK_IMPORTED_MODULE_17___default());
    window.iziToast = (izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_15___default());
    // // initialize tinymce
    window.tinymce = (tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_1___default());
    // initialize lottie web and lottie player
    window.lottieweb = (lottie_web__WEBPACK_IMPORTED_MODULE_18___default());

    // initialize ether js for crypto payment
    window.ethers = ethers__WEBPACK_IMPORTED_MODULE_20__;
    // initialize axios async post|get request
    window.axios = _components_axiosFactory__WEBPACK_IMPORTED_MODULE_9__["default"];
    // initialize swiper.js
    window.Swiper = swiper__WEBPACK_IMPORTED_MODULE_11__["default"];
    // initiailize izitoast alerts

    const counters = document.querySelectorAll(".counter");
    const car = document.getElementById("car");
    const controller = new (scrollmagic__WEBPACK_IMPORTED_MODULE_17___default().Controller)();

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
          (0,animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_16__["default"])({
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
        (0,animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_16__["default"])({
          targets: ".how",
          translateX: 56,
          easing: "easeInOutSine",
          duration: 800,
          opacity: 1,
          delay: animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_16__["default"].stagger(200, {
            start: 500
          })
        });
      }
    }
    if (document.getElementById("countTrigger")) {
      new (scrollmagic__WEBPACK_IMPORTED_MODULE_17___default().Scene)({
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
      new (scrollmagic__WEBPACK_IMPORTED_MODULE_17___default().Scene)({
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
      new (scrollmagic__WEBPACK_IMPORTED_MODULE_17___default().Scene)({
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
      (0,animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_16__["default"])({
        targets: ".intro",
        translateX: -56,
        easing: "easeInOutSine",
        duration: 800,
        opacity: 1,
        delay: animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_16__["default"].stagger(200, {
          start: 500
        })
      });
    }
    function carDrive() {
      if (car) {
        (0,animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_16__["default"])({
          targets: "#car",
          translateX: {
            value: "-100vw",
            duration: 5000
          },
          easing: "easeInOutSine",
          opacity: 1,
          delay: animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_16__["default"].stagger(200, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
/* harmony import */ var _axiosFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axiosFactory */ "./portfolio/static/js/components/axiosFactory.js");
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast/dist/js/iziToast.min.js */ "./node_modules/izitoast/dist/js/iziToast.min.js");
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! htmx.org/dist/htmx */ "./node_modules/htmx.org/dist/htmx.js");
/* harmony import */ var htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/module.esm.js");
/* eslint-disable no-unused-vars */

 // you have access to iziToast now



// function to simulate sleep operation on an event
function sleep(ms) {
  return new window.Promise(resolve => setTimeout(resolve, ms));
}

// function to get cookies name else return an empty string
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// function to set a cookie to a value and set an expiry date
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// function to delete a cookie by its cookie name
function deleteCookie(cname) {
  const d = new Date();
  d.setTime(d.getTime() - 365 * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=;" + expires + ";path=/";
}

// get cookie for accepted policies
const acceptPrivacyPolicy = getCookie("acceptPrivacyPolicy");
const acceptCookiePolicy = getCookie("acceptCookiePolicy");
const acceptSocialSharePolicy = getCookie("acceptSocialSharePolicy");
const acceptSocialOAuthPolicy = getCookie("acceptSocialSharePolicy");
const acceptGPSPolicy = getCookie("acceptCookiePolicy");
const acceptNotificationsPolicy = getCookie("acceptCookiePolicy");
const acceptAdvertsPolicy = getCookie("acceptCookiePolicy");
function Initialize() {
  return {
    installPrompt: null,
    fullScreen:  false || "fullscreen" in localStorage,
    darkMode: "darkMode" in localStorage,
    shareable: null,
    detail: false,
    navbarFixed: false,
    prevOffset: 0,
    acceptSocialShare: false,
    acceptSocialAuth: false,
    acceptGPS: false,
    acceptNotifications: false,
    acceptTerms: false,
    acceptPolicy: false,
    acceptAdverts: false,
    Init() {
      // get the response for a page and on get request swap the title for this
      // and the description meta tag with the detail present here
      this.htmxAfterSwab;

      // set an initial state of the header section
      this.navbarScrollEffect;

      // checking if there is a global store to install a PWA
      this.installPWASettings;

      // enable sharing by default else disable sharing on initial loading of a web page
      this.shareableSettings;
    },
    htmxAfterSwab() {
      htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_2___default().on("htmx:afterSwap", function (evt) {
        console.log("htmx oob swab events: ", evt);
        if (evt.detail.target.id === "main") {
          var title = document.querySelector("title");
          var author = document.querySelector('meta[name="author"]');
          var description = document.querySelector('meta[name="description"]');
          if (title) {
            var newTitle = evt.detail.target.querySelector("title");
            if (newTitle) {
              title.textContent = newTitle.textContent;
            }
          }
          if (author) {
            var newAuthor = evt.detail.target.querySelector('meta[name="author"]');
            if (newAuthor) {
              author.setAttribute("content", newAuthor.getAttribute("content"));
            }
          }
          if (description) {
            var newDescription = evt.detail.target.querySelector('meta[name="description"]');
            if (newDescription) {
              description.setAttribute("content", newDescription.getAttribute("content"));
            }
          }
          var url = evt.detail.xhr.responseURL;
          if (url) {
            window.history.pushState(null, "", url);
          }
        }
      });
    },
    navbarScrollEffect() {
      const offset = window.pageYOffset;
      const navbar = document.querySelector("#header");
      const content = document.querySelector("#main");
      if (offset > 10 && !this.isNavbarFixed) {
        navbar.classList.add("fixed");
        content.style.marginTop = `${navbar.offsetHeight}px`;
        this.isNavbarFixed = true;
      }
      if (offset === 0 && this.isNavbarFixed) {
        navbar.classList.remove("fixed");
        content.style.marginTop = 0;
        this.isNavbarFixed = false;
      }
      if (offset > this.prevOffset && this.isNavbarFixed) {
        navbar.classList.add("hidden");
        content.style.marginTop = 0;
      }
      if (offset < this.prevOffset && this.isNavbarFixed) {
        navbar.classList.remove("hidden");
        content.style.marginTop = `${navbar.offsetHeight}px`;
      }
      this.prevOffset = offset;
    },
    openDetail(url) {
      // Whenever a detail page is clicked this fires up to open a modal with details for the item
      let link = `${location.origin}{url}`;
      htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_2___default().ajax("GET", link, {
        target: "#detail",
        swap: "innerHTML"
      });
      this.detail = true;
    },
    shareableSettings() {
      const acceptSocialSharePolicy = ("acceptSocialSharePolicy" in localStorage);
      if (this.shareable === null && !acceptSocialSharePolicy) {
        localStorage.setItem("acceptSocialSharePolicy", "true");
      } else if (this.shareable === false && acceptSocialSharePolicy) {
        localStorage.removeItem('acceptSocialSharePolicy');
      } else if (this.shareable === true && acceptSocialSharePolicy) {
        localStorage.setItem("acceptSocialSharePolicy", "true");
      }
    },
    async shareURL(url, title) {
      // share a url using the HTML5 Web APIs
      if ("acceptSocialSharePolicy" in localStorage) {
        if (title === undefined) {
          title = document.title;
        } else {
          title;
        }
        const link = `${location.host}${url}`;
        if (navigator.share) {
          await navigator.share({
            title: title,
            text: `Check out this link from ${location.host}: \n${title.toUpperCase()}.`,
            url: link
          }).then(async () => await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().success({
            title: "[SOCIAL SHARE]",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: `Successfully shared: ${title.toUpperCase()}`
          })).catch(async error => await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().error({
            title: "[SOCIAL SHARE ERROR]",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: error.message
          }));
        }
      } else {
        return;
      }
    },
    enableDarkMode() {
      // Whenever the user explicitly chooses dark mode
      localStorage.setItem("darkMode", "true");
      document.documentElement.classList.add("dark");
      this.darkMode = true;
    },
    disableDarkMode() {
      // Whenever the user explicitly chooses light mode
      localStorage.removeItem("darkMode");
      document.documentElement.classList.remove("dark");
      this.darkMode = false;
    },
    acceptAllPolicies() {
      localStorage.acceptPrivacyPolicy = true;
      localStorage.acceptCookiePolicy = true;
      localStorage.acceptSocialSharePolicy = true;
      localStorage.acceptSocialOAuthPolicy = true;
      localStorage.acceptGPSPolicy = true;
      localStorage.acceptNotificationsPolicy = true;
      localStorage.acceptAdvertsPolicy = true;
    },
    installPWASettings() {
      if (!self.installPrompt) {
        this.installPrompt = null;
      } else {
        console.log(self.installPrompt);
        this.installPrompt = self.installPrompt;
      }
    },
    installPWA() {
      // open the browser PWA install popup prompt
      this.installPrompt.prompt();

      // based on the users choice do something
      this.installPrompt.userChoice.then(choice => {
        console.log(choice);
      });

      // if the users choice is to install the PWA set the prompt key to null to remove the popup
      this.installPrompt = null;

      // once the app is installed send an alert thanking them and stating the benefits they get using the PWA
      window.addEventListener("appinstalled", event => {
        if (true) {
          console.log("👍[PWA] Installed State: ", event);
        }
        izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().info({
          title: `[SERVICE WORKER]`,
          balloon: true,
          position: "topRight",
          animateInside: true,
          message: "Thank you for installing the web app. This offers you offline capabilities to use my site when you are out of data."
        });
      });
    },
    canclePWA() {
      // this cnloses the PWA initial prompt
      this.installPrompt = null;
    },
    switchFullscreenMode() {
      this.fullScreen = !this.fullScreen;
      if (document.fullscreenElement || document.mozFullScreenElement || document.msFullScreenElement || document.webkitFullScreenElement) {
        document.exitFullscreen();
        localStorage.removeItem("fullscreen");
      } else {
        document.documentElement.requestFullscreen();
        localStorage.setItem("fullscreen", "true");
      }
    }
  };
}

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_alpinejs_intersect_dist_module_esm_js-node_modules_lottiefiles_lottie-pl-c2aee0"], () => (__webpack_exec__("./portfolio/static/js/app/vendors.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlCLEVBQUU7UUFDNUNyRSxZQUFZLENBQUM4QyxPQUFPLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQztNQUM1QztJQUNGO0VBQ0YsQ0FBQztBQUNIOzs7Ozs7Ozs7O0FDMVRBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8vcG9ydGZvbGlvL3BvcnRmb2xpby8uL3BvcnRmb2xpby9zdGF0aWMvanMvYXBwL3ZlbmRvcnMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8vcG9ydGZvbGlvL3BvcnRmb2xpby8uL3BvcnRmb2xpby9zdGF0aWMvanMvY29tcG9uZW50cy9heGlvc0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8vcG9ydGZvbGlvL3BvcnRmb2xpby8uL3BvcnRmb2xpby9zdGF0aWMvanMvY29tcG9uZW50cy9kZWZhdWx0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby9wb3J0Zm9saW8vcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8vaWdub3JlZHwvaG9tZS9kYXJrY29kci93d3cvZGFya2NvZHIvcG9ydGZvbGlvL25vZGVfbW9kdWxlcy9ibi5qcy9saWJ8YnVmZmVyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIml6aXRvYXN0L2Rpc3QvY3NzL2l6aVRvYXN0Lm1pbi5jc3NcIjtcblxuLy8gU2VsZWN0IDJcbi8vIGltcG9ydCBcInNlbGVjdDIvZGlzdC9jc3Mvc2VsZWN0Mi5taW4uY3NzXCI7XG4vLyBpbXBvcnQgXCJzZWxlY3QyL2Rpc3QvanMvc2VsZWN0Mi5taW4uanNcIjtcblxuLy8gdGlueW1jZVxuaW1wb3J0IHRpbnltY2UgZnJvbSBcInRpbnltY2UvdGlueW1jZS5taW4uanNcIjtcbmltcG9ydCBcInRpbnltY2UvaWNvbnMvZGVmYXVsdC9pY29ucy5qc1wiO1xuaW1wb3J0IFwidGlueW1jZS90aGVtZXMvc2lsdmVyL3RoZW1lLmpzXCI7XG5pbXBvcnQgXCJ0aW55bWNlL3NraW5zL2NvbnRlbnQvZGVmYXVsdC9jb250ZW50Lm1pbi5jc3NcIjtcbmltcG9ydCBcInRpbnltY2Uvc2tpbnMvY29udGVudC9kZWZhdWx0L2NvbnRlbnQuY3NzXCI7XG5pbXBvcnQgXCJ0aW55bWNlL3NraW5zL3VpL294aWRlL3NraW4ubWluLmNzc1wiO1xuaW1wb3J0IFwidGlueW1jZS9za2lucy91aS9veGlkZS9jb250ZW50Lm1pbi5jc3NcIjtcbmltcG9ydCBcInRpbnltY2UvbW9kZWxzL2RvbS9tb2RlbC5qc1wiO1xuXG4vLyBjb21wb25lbnRzXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvYXhpb3NGYWN0b3J5XCI7XG5pbXBvcnQgSW5pdGlhbGl6ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9kZWZhdWx0XCI7XG5cbi8vIGZ1bmN0aW9uYWwgaW1wb3J0c1xuaW1wb3J0IHsgZGV0ZWN0IH0gZnJvbSBcImRldGVjdC1icm93c2VyXCI7XG5pbXBvcnQgU3dpcGVyIGZyb20gXCJzd2lwZXJcIjtcbmltcG9ydCBodG14IGZyb20gXCJodG14Lm9yZy9kaXN0L2h0bXhcIjtcbmltcG9ydCBBbHBpbmUgZnJvbSBcImFscGluZWpzXCI7XG4vLyBpbXBvcnQgTWFzayBmcm9tIFwiQHJ5YW5namNoYW5kbGVyL2FscGluZS1tYXNrXCI7XG5pbXBvcnQgaW50ZXJzZWN0IGZyb20gXCJAYWxwaW5lanMvaW50ZXJzZWN0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5cbmltcG9ydCBpemlUb2FzdCBmcm9tIFwiaXppdG9hc3QvZGlzdC9qcy9pemlUb2FzdC5taW4uanNcIjtcbi8vIGltcG9ydCBcImZsb3diaXRlXCI7XG4vKiBQcm9qZWN0IHNwZWNpZmljIEphdmFzY3JpcHQgZ29lcyBoZXJlLiAqL1xuaW1wb3J0IFwiaXppdG9hc3QvZGlzdC9jc3MvaXppVG9hc3QubWluLmNzc1wiO1xuXG5pbXBvcnQgYW5pbWUgZnJvbSBcImFuaW1lanMvbGliL2FuaW1lLmVzLmpzXCI7XG5pbXBvcnQgU2Nyb2xsTWFnaWMgZnJvbSBcInNjcm9sbG1hZ2ljXCI7XG5cbi8vIGluaXRpYWxpemUgYW5pbWVqc1xud2luZG93LmFuaW1lID0gYW5pbWU7XG53aW5kb3cuc2Nyb2xsTWFnaWMgPSBTY3JvbGxNYWdpYztcbndpbmRvdy5pemlUb2FzdCA9IGl6aVRvYXN0O1xuXG5pbXBvcnQgbG90dGlld2ViIGZyb20gXCJsb3R0aWUtd2ViXCI7XG5pbXBvcnQgXCJAbG90dGllZmlsZXMvbG90dGllLXBsYXllclwiO1xuLy8gR2xvYmFsIEluaXRpYWxpemF0aW9ucyBmb3IgaW1wb3J0ZWRsaWJyYXJpZXMgLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5pdGlhbGl6ZSBodG14XG53aW5kb3cuaHRteCA9IGh0bXg7XG4vLyAvLyBpbml0aWFsaXplIHRpbnltY2VcbndpbmRvdy50aW55bWNlID0gdGlueW1jZTtcbi8vIGluaXRpYWxpemUgbG90dGllIHdlYiBhbmQgbG90dGllIHBsYXllclxud2luZG93LmxvdHRpZXdlYiA9IGxvdHRpZXdlYjtcblxuLy8gaW5pdGlhbGl6ZSBldGhlciBqcyBmb3IgY3J5cHRvIHBheW1lbnRcbndpbmRvdy5ldGhlcnMgPSBldGhlcnM7XG4vLyBpbml0aWFsaXplIGF4aW9zIGFzeW5jIHBvc3R8Z2V0IHJlcXVlc3RcbndpbmRvdy5heGlvcyA9IGF4aW9zO1xuLy8gaW5pdGlhbGl6ZSBzd2lwZXIuanNcbndpbmRvdy5Td2lwZXIgPSBTd2lwZXI7XG4vLyBpbml0aWFpbGl6ZSBpeml0b2FzdCBhbGVydHNcbndpbmRvdy5pemlUb2FzdCA9IGl6aVRvYXN0O1xuXG4vLyBBbHBpbmUgSlMgU2NyaXB0c1xuQWxwaW5lLnBsdWdpbihpbnRlcnNlY3QpO1xuLy8gQWxwaW5lLnBsdWdpbihNYXNrKTtcblxud2luZG93LkFscGluZSA9IEFscGluZTtcbi8vIEFscGluZS5kYXRhKFwiU2lnbnVwRm9ybVwiLCBTaWdudXBGb3JtKTtcbi8vIEFscGluZS5kYXRhKFwiQ29uZmlybUVtYWlsRm9ybVwiLCBDb25maXJtRW1haWxGb3JtKTtcbi8vIEFscGluZS5kYXRhKFwiTG9naW5Gb3JtXCIsIExvZ2luRm9ybSk7XG4vLyBBbHBpbmUuZGF0YShcIlBDaGFuZ2VGb3JtXCIsIFBDaGFuZ2VGb3JtKTtcbi8vIEFscGluZS5kYXRhKFwiUmVzZXRQYXNzd29yZEZvcm1cIiwgUmVzZXRQYXNzd29yZEZvcm0pO1xuLy8gQWxwaW5lLmRhdGEoXCJTdWJzY3JpcHRpb25Gb3JtXCIsIFN1YnNjcmlwdGlvbkZvcm0pO1xuLy8gQWxwaW5lLmRhdGEoXCJHb29nbGVcIiwgR29vZ2xlKTtcbkFscGluZS5kYXRhKFwiRGVmYXVsdFwiLCBJbml0aWFsaXplKTtcbi8vIEFscGluZS5kYXRhKFwiVXBkYXRlRm9ybVwiLCBVcGRhdGVGb3JtKTtcbi8vIEFscGluZS5kYXRhKFwiVXNlckRldGFpbFwiLCBVc2VyRGV0YWlsKTtcbi8vIEFscGluZS5kYXRhKCdDb250YWN0Rm9ybScsIENvbnRhY3RGb3JtKSxcbi8vIEFscGluZS5kYXRhKCdTdGlja3lOYXYnLCBTdGlja3lOYXYpO1xuLy8gQWxwaW5lLmRhdGEoJ0NoYXJ0SnMnLCBDaGFydEpzKTtcbkFscGluZS5zdGFydCgpO1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIHNldCBzZXJ2aWNlIHdvcmtlciBsaW5rIGFuZCBzY29wZSBzdGFydCBsaW5rXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNvbnN0IHN3ID0gXCIvc3cuanNcIjtcbmNvbnN0IGhvbWUgPSBcIi9cIjtcbi8vIGRldGVjdCBicm93c2VyIHR5cGVcbmNvbnN0IGJyb3dzZXIgPSBkZXRlY3QoKTtcblxuLy8gZ2V0IGdsb2JhbCB2YXJpYWJsZXMgZnJvbSB0aGUgYmFzZS5odG1sIGZpbGUgZm9yXG4vLyBwdXNoIG5vdGlmaWNhdGlvbiBhbmQgcHdhIGluc3RhbGwgYnV0dG9uXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmxldCB7IEFQUExJQ0FUSU9OX1NFUlZFUl9LRVksIENSRUFURV9XUF9ERVZJQ0UsIFNFTkRfTk9USUZJQ0FUSU9OIH0gPVxuICB3aW5kb3cuV0VCX1BVU0hfQ0ZHO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gZ2VuZXJhdGUga2V5IGZvciBwdXNoIG5vdGlmaWNhdGlvbnNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vS2xlcml0aC84MGFiZDc0MmQ3MjZkZDU4N2Y0YmQ1ZDZhMGFiMjZiNiNmaWxlLXVybGJhc2U2NHRvdWludDhhcnJheS1qc1xuZnVuY3Rpb24gdXJsQmFzZTY0VG9VaW50OEFycmF5KGJhc2U2NFN0cmluZykge1xuICB2YXIgcGFkZGluZyA9IFwiPVwiLnJlcGVhdCgoNCAtIChiYXNlNjRTdHJpbmcubGVuZ3RoICUgNCkpICUgNCk7XG4gIHZhciBiYXNlNjQgPSAoYmFzZTY0U3RyaW5nICsgcGFkZGluZykucmVwbGFjZSgvXFwtL2csIFwiK1wiKS5yZXBsYWNlKC9fL2csIFwiL1wiKTtcblxuICB2YXIgcmF3RGF0YSA9IHdpbmRvdy5hdG9iKGJhc2U2NCk7XG4gIHZhciBvdXRwdXRBcnJheSA9IG5ldyBVaW50OEFycmF5KHJhd0RhdGEubGVuZ3RoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJhd0RhdGEubGVuZ3RoOyArK2kpIHtcbiAgICBvdXRwdXRBcnJheVtpXSA9IHJhd0RhdGEuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gb3V0cHV0QXJyYXk7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdGhpcyBpcyB0byBzdWJzY3JpYmUgdG8gcHVzaCBub3RpZmljYXRpb24gZnJvbSB0aGUgYnJvd3NlciB0byB0aGUgc2VydmVyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmFzeW5jIGZ1bmN0aW9uIHNhdmVTdWJzY3JpYmVPYmooc3Vic2NyaXB0aW9uKSB7XG4gIC8vIHNhdmUgc3Vic2NyaXB0aW9uIHRvIHRoZSBzZXJ2ZXJcbiAgY29uc3Qgc3Vic2NyaXB0aW9uSnNvbiA9IHN1YnNjcmlwdGlvbi50b0pTT04oKTtcbiAgY29uc3QgZW5kcG9pbnRQYXJ0cyA9IHN1YnNjcmlwdGlvbkpzb24uZW5kcG9pbnQuc3BsaXQoXCIvXCIpO1xuICBjb25zdCByZWdpc3RyYXRpb25JZCA9IGVuZHBvaW50UGFydHNbZW5kcG9pbnRQYXJ0cy5sZW5ndGggLSAxXTtcblxuICBjb25zdCBwcmVkYXRhID0ge1xuICAgIHN0YXR1c190eXBlOiBcInN1YnNjcmliZVwiLFxuICAgIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uSnNvbixcbiAgICBicm93c2VyOiBicm93c2VyLm5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICBwMjU2ZGg6IHN1YnNjcmlwdGlvbkpzb24ua2V5cy5wMjU2ZGgsXG4gICAgYXV0aDogc3Vic2NyaXB0aW9uSnNvbi5rZXlzLmF1dGgsXG4gICAgdXNlcl9hZ2VudDogbmF2aWdhdG9yLmdldFVzZXJBZ2VudCxcbiAgICByZWdpc3RyYXRpb25faWQ6IHJlZ2lzdHJhdGlvbklkLFxuICAgIGdyb3VwOiBcInVzZXJzXCIsXG4gIH07XG5cbiAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHByZWRhdGEpO1xuXG4gIGF3YWl0IGF4aW9zXG4gICAgLnBvc3QoQ1JFQVRFX1dQX0RFVklDRSwgZGF0YSwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJYLUNTUkZUb2tlblwiOiBkb2N1bWVudC5oZWFkXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKVxuICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpLFxuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgaXppVG9hc3Quc3VjY2Vzcyh7XG4gICAgICAgICAgdGl0bGU6IFwiW1BVU0ggTk9USUZJQ0FUSU9OIFNVQlNDUklQVElPTl1cIixcbiAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiBgU3Vic2NyaXB0aW9uIFNlbnQgU3VjY2Vzc2Z1bGx5ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIFwic3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uXCJcbiAgICAgICk7XG4gICAgICBzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiLCB0cnVlKTtcbiAgICAgIC8vIGlmIHN1YnNjcmlwdGlvbiBpcyBzdWNjZXNzZnVsbHkgc2F2ZWQgdG8gdGhlIHNlcnZlclxuICAgICAgLy8gdGhlbiBlbmFibGUgdGhlIHRlc3Qgbm90aWZpY2F0aW9uIHB1c2ggYnV0dG9uIHRvIGJlIHZpc2libGVcbiAgICAgIHNldHVwVHJpZ2dlckJ1dHRvbihzdWJzY3JpcHRpb24pO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgdGl0bGU6IFwiW1BVU0ggTk9USUZJQ0FUSU9OIFNFUlZFUl1cIixcbiAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiBgTm90aWZpY2F0aW9uIFN1YnNjcmlwdGlvbiAke2Vycm9yLm1lc3NhZ2V9YCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0aGlzIGZ1bmN0aW9uIGlzIHRvIHNlbmQgc3Vic2NyaXB0aW9uIG5vdGlmaWNhdGlvbiB0byB0aGUgc2VydmVyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmFzeW5jIGZ1bmN0aW9uIHN1YnNjcmliZShyZWdpc3RyYXRpb24pIHtcbiAgYXdhaXQgcmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyXG4gICAgLmdldFN1YnNjcmlwdGlvbigpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic3Vic2NyaXB0aW9uIGV4aXN0c1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNhdmVTdWJzY3JpYmVPYmooc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgc2V0dXBUcmlnZ2VyQnV0dG9uKHN1YnNjcmlwdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB1c2VyVmlzaWJsZU9ubHk6IHRydWUsIC8vIHJlcXVpcmVkIGJ5IGNocm9tZVxuICAgIGFwcGxpY2F0aW9uU2VydmVyS2V5OiB1cmxCYXNlNjRUb1VpbnQ4QXJyYXkoQVBQTElDQVRJT05fU0VSVkVSX0tFWSksXG4gIH07XG5cbiAgYXdhaXQgcmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyXG4gICAgLnN1YnNjcmliZShvcHRpb25zKVxuICAgIC50aGVuKFxuICAgICAgLy8gcmVxdWVzdGluZyB0byBzdWJzY3JpYmUgZnJvbSB0aGUgc2VydmVyXG4gICAgICBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYHN1YnNjcmlwdGlvbjogYCwgc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzdWJzY3JpcHRpb24uZW5kcG9pbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3Vic2NyaXB0aW9uIGlzIG5vdyBzYXZlZCB0byB0aGUgc2VydmVyXG4gICAgICAgIHNhdmVTdWJzY3JpYmVPYmooc3Vic2NyaXB0aW9uKTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICAgIGl6aVRvYXN0LnN1Y2Nlc3Moe1xuICAgICAgICAgICAgdGl0bGU6IFwiW1BVU0ggTk9USUZJQ0FUSU9OIFNVQlNDUklQVElPTl1cIixcbiAgICAgICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBTdWJzY3JpcHRpb24gU2VudCBTdWNjZXNzZnVsbHlgLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVycm9yIGZpZ3VyZSB0aGUgZXJyb3IgYW5kIHRocm93IGFuIGFwcHJvcHJhaXRlIGVycm9yIG1lc3NhZ2UgdG9cbiAgICAgIC8vIHRoZSB1c2VyIHNvIGhlIGtub3dzIGV4YWN0bHkgd2hhdCBpcyB3cm9uZyBhbmQgY2FuIG1vdmUgZm9yd2FyZCBvciBhZGp1c3QgZm9yIGFcbiAgICAgIC8vIGRldmljZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICAgIHRpdGxlOiBcIltQVVNIIE5PVElGSUNBVElPTiBTVUJTQ1JJUFRJT05dXCIsXG4gICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgbWVzc2FnZTogYCR7ZXJyb3IubWVzc2FnZX1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFRoZSBmdW5jdGlvbiB0byB0cmlnZ2VyIHRoZSBwdXNoIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBicm93c2VyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHN1YnNjcmliZShyZWcpO1xuZnVuY3Rpb24gc2V0dXBTdWJzY3JpYmVCdXR0b24ocmVnKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvblwiKSkge1xuICAgIGNvbnN0IHN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b25cIlxuICAgICk7XG4gICAgc3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIiwgZmFsc2UpO1xuICAgIHN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc3Vic2NyaWJlKHJlZyk7XG4gICAgICBjb25zb2xlLmxvZyhcIlN1YnNjcmliZSBCdXR0b24gU2V0XCIpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVTdWJzY3JpYmVCdXR0b24oKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvblwiKSkge1xuICAgIGNvbnN0IHN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b25cIlxuICAgICk7XG4gICAgc3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIiwgdHJ1ZSk7XG4gIH1cbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGZvciBhIHVzZXIgdG8gdGVzdCB0aGUgcHVzaCBub3RpZmljYXRpb25cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYXN5bmMgZnVuY3Rpb24gc2V0dXBUcmlnZ2VyQnV0dG9uKHN1YnNjcmlwdGlvbikge1xuICBjb25zdCBzdWJKc29uID0gc3Vic2NyaXB0aW9uLnRvSlNPTigpO1xuICBjb25zdCBlbmRwb2ludFBhcnRzID0gc3ViSnNvbi5lbmRwb2ludC5zcGxpdChcIi9cIik7XG4gIGNvbnN0IHJlZ2lzdHJhdGlvbklkID0gZW5kcG9pbnRQYXJ0c1tlbmRwb2ludFBhcnRzLmxlbmd0aCAtIDFdO1xuICBjb25zdCBwcmVkYXRhID0ge1xuICAgIHJlZ2lzdHJhdGlvbl9pZDogcmVnaXN0cmF0aW9uSWQsXG4gICAgYXV0aDogc3ViSnNvbi5rZXlzLmF1dGgsXG4gICAgaGVhZDogXCJKZXJyeSBTYXlzIPCflIogXCIsXG4gICAgYm9keTogXCJUaGlzIGlzIGhvdyBwdXNoIG5vdGlmaWNhdGlvbnMgZnJvbSBteSBzaXRlIHdpbGwgYmUgc2hvd24gb24geW91ciBkZXZpY2VzLlwiLFxuICB9O1xuXG4gIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShwcmVkYXRhKTtcblxuICBhd2FpdCBheGlvc1xuICAgIC5wb3N0KFNFTkRfTk9USUZJQ0FUSU9OLCBkYXRhLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKGFzeW5jIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgYXdhaXQgaXppVG9hc3QuaW5mbyh7XG4gICAgICAgIHRpdGxlOiBcIltQVVNIIE5PVElGSUNBVElPTiBURVNUIFNVQ0NFU1NGVUxdXCIsXG4gICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKGFzeW5jIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgYXdhaXQgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICB0aXRsZTogXCJbUFVTSCBOT1RJRklDQVRJT04gVEVTVCBFUlJPUl1cIixcbiAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgbWVzc2FnZTogZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWwsXG4gICAgICB9KTtcbiAgICB9KTtcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRW5kIHB1c2ggbm90aWZpY2F0aW9uIGJ1dHRvblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGVuYWJsZSBzZXJ2aWNlIHdvcmtlciwgdGhlbiB3aGVuIHNlcnZpY2Ugd29ya2VyIGlzIGVuYWJsZWQgcmVxdWVzdFxuLy8gcGVybWlzc2lvbiBmb3IgcHVzaCBub3RpZmljYXRpb24gYW5kIGxvY2F0aW9uIHNlcnZpY2VzIGZyb20gdGhlIGJyb3dzZXJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgYXN5bmMgKCkgPT4ge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnN0YWxsXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICAvLyBTaG93IHRoZSBQV0EgaW5zdGFsbGF0aW9uIHByb21wdFxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVpbnN0YWxscHJvbXB0XCIsIChwcm9tcHRFdmVudCkgPT4ge1xuICAgICAgICBwcm9tcHRFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZWxmLmluc3RhbGxQcm9tcHQgPSBBbHBpbmUuc3RvcmUoXCJpbnN0YWxsUHJvbXB0XCIsIHByb21wdEV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAgIC5yZWdpc3RlcihzdywgeyBzY29wZTogaG9tZSB9KVxuICAgICAgLnRoZW4oYXN5bmMgKHJlZ2lzdHJhdGlvbikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSB3b3JrZXIgcmVnaXN0ZXJhdGlvbiBzdWNjZWVkZWQ6IFwiLCByZWdpc3RyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihmdW5jdGlvbiBhc3luYyhyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIHdvcmtlciBpcyBhY3RpdmU6IFwiLCByZWdpc3RyYXRpb24uYWN0aXZlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbml0aWFsaXNlU3RhdGUocmVnaXN0cmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgICBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgICB0aXRsZTogXCJbU0VSVklDRSBXT1JLRVJdXCIsXG4gICAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlNlcnZpY2UgV29ya2VyIEZhaWxlZCB0byBSZWdpc3RlclwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9KTtcbn1cblxuY29uc3QgaW5pdGlhbGlzZVN0YXRlID0gKHJlZykgPT4ge1xuICBpZiAoIXJlZy5zaG93Tm90aWZpY2F0aW9uKSB7XG4gICAgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgdGl0bGU6IFwiW1BVU0ggTk9USUZJQ0FUSU9OIFVOU1VQUE9SVEVEXVwiLFxuICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJTaG93aW5nIDxzdHJvbmc+UFVTSCBOT1RJRklDQVRJT05TPC9zdHJvbmc+IGlzIHVuc3VwcG9ydGVkXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKHJlZy5zaG93Tm90aWZpY2F0aW9uKSB7XG4gICAgZGlzYWJsZVN1YnNjcmliZUJ1dHRvbigpO1xuICB9XG5cbiAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImRlbmllZFwiKSB7XG4gICAgaXppVG9hc3Qud2FybmluZyh7XG4gICAgICB0aXRsZTogXCJbUFVTSCBOT1RJRklDQVRJT04gREVOSUVEXVwiLFxuICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgXCJZb3UgcHJldmVudGVkIHVzIGZyb20gc2h3b2luZyBub3RpZmljYXRpb25zLiBNYW51YWxseSBjaGVjayBpZiB5b3UgaGF2ZSBwcmV2ZW50ZWQgcHVzaCBub3RpZmNhdGlvbiBmcm9tIHVzLlwiLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiAhPT0gXCJkZW5pZWRcIikge1xuICAgIGRpc2FibGVTdWJzY3JpYmVCdXR0b24oKTtcbiAgfVxuXG4gIGlmICghKFwiUHVzaE1hbmFnZXJcIiBpbiB3aW5kb3cpKSB7XG4gICAgaXppVG9hc3QuaW5mbyh7XG4gICAgICB0aXRsZTogXCJbUFVTSCBCTk9USUZJQ0FUSU9OIFVOQVZBSUxCQUxFXVwiLFxuICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJQdXNoIG5vdGlmaWNhdGlvbiBpcyBub3QgYWxsb3dlZCBpbiB5b3VyIGJyb3dzZXIuXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKFwiUHVzaE1hbmFnZXJcIiBpbiB3aW5kb3cpIHtcbiAgICBkaXNhYmxlU3Vic2NyaWJlQnV0dG9uKCk7XG4gIH1cblxuICByZWcucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCkudGhlbigoc3ViKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJSZWdpc3RyYXRpb24gT2JqZWN0XCIsIHJlZyk7XG4gICAgaWYgKCFzdWIgfHwgc3ViID09PSBudWxsKSB7XG4gICAgICBzZXR1cFN1YnNjcmliZUJ1dHRvbihyZWcpO1xuICAgIH0gZWxzZSBpZiAoc3ViICE9PSBudWxsIHx8IHN1Yikge1xuICAgICAgY29uc29sZS5sb2coXCJTdWJzY3JpYmUgQWxyZWFkeSBEb25lXCIpO1xuICAgICAgLy8gc2V0dXBUcmlnZ2VyQnV0dG9uKHN1Yik7XG4gICAgICBkaXNhYmxlU3Vic2NyaWJlQnV0dG9uKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5bXG4gIFwiaHRteDpvbkxvYWRcIixcbiAgXCJodG14OmxvYWRcIixcbiAgXCJsb2FkXCIsXG4gIFwiaHRteDphZnRlclNldHRsZVwiLFxuICBcImh0bXg6YWZ0ZXJTd2FwXCIsXG4gIFwiaHRteDphZnRlck9uTG9hZFwiLFxuICBcImh0bXg6YWZ0ZXJSZXF1ZXN0XCIsXG5dLmZvckVhY2goKGV2dCkgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cuYW5pbWUgPSBhbmltZTtcbiAgICB3aW5kb3cuc2Nyb2xsTWFnaWMgPSBTY3JvbGxNYWdpYztcbiAgICB3aW5kb3cuaXppVG9hc3QgPSBpemlUb2FzdDtcbiAgICAvLyAvLyBpbml0aWFsaXplIHRpbnltY2VcbiAgICB3aW5kb3cudGlueW1jZSA9IHRpbnltY2U7XG4gICAgLy8gaW5pdGlhbGl6ZSBsb3R0aWUgd2ViIGFuZCBsb3R0aWUgcGxheWVyXG4gICAgd2luZG93LmxvdHRpZXdlYiA9IGxvdHRpZXdlYjtcblxuICAgIC8vIGluaXRpYWxpemUgZXRoZXIganMgZm9yIGNyeXB0byBwYXltZW50XG4gICAgd2luZG93LmV0aGVycyA9IGV0aGVycztcbiAgICAvLyBpbml0aWFsaXplIGF4aW9zIGFzeW5jIHBvc3R8Z2V0IHJlcXVlc3RcbiAgICB3aW5kb3cuYXhpb3MgPSBheGlvcztcbiAgICAvLyBpbml0aWFsaXplIHN3aXBlci5qc1xuICAgIHdpbmRvdy5Td2lwZXIgPSBTd2lwZXI7XG4gICAgLy8gaW5pdGlhaWxpemUgaXppdG9hc3QgYWxlcnRzXG5cblxuICAgIGNvbnN0IGNvdW50ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb3VudGVyXCIpO1xuICAgIGNvbnN0IGNhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyXCIpO1xuXG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XG5cbiAgICAvLyBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uc3QnKSl7XG4gICAgLy8gICBsb3R0aWV3ZWIubG9hZEFuaW1hdGlvbih7XG4gICAgLy8gICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnN0JyksXG4gICAgLy8gICAgIHBhdGg6IFwiL3N0YXRpYy92ZW5kb3JzL2ltYWdlcy9sb3R0aWUvdW5kZXItY29uc3RydWN0aW9uLmpzb25cIixcbiAgICAvLyAgICAgcmVuZGVyZXI6ICdzdmcnLFxuICAgIC8vICAgICBsb29wOiB0cnVlLFxuICAgIC8vICAgICBhdXRvUGxheTogdHJ1ZSxcbiAgICAvLyAgICAgbmFtZTogJ1VuZGVyIENvbnN0cnVjdGlvbidcbiAgICAvLyAgIH0pO1xuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnRpbmcoKSB7XG4gICAgICBpZiAoY291bnRlcnMpIHtcbiAgICAgICAgY291bnRlcnMuZm9yRWFjaCgoY291bnRlcikgPT4ge1xuICAgICAgICAgIGFuaW1lKHtcbiAgICAgICAgICAgIHRhcmdldHM6IGNvdW50ZXIsXG4gICAgICAgICAgICBpbm5lckhUTUw6IFswLCBjb3VudGVyLmdldEF0dHJpYnV0ZShcImRhdGEtY291bnRcIildLFxuICAgICAgICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFNpbmVcIixcbiAgICAgICAgICAgIHJvdW5kOiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDQwMDAsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGVIb3dzKCkge1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG93XCIpKSB7XG4gICAgICAgIGFuaW1lKHtcbiAgICAgICAgICB0YXJnZXRzOiBcIi5ob3dcIixcbiAgICAgICAgICB0cmFuc2xhdGVYOiA1NixcbiAgICAgICAgICBlYXNpbmc6IFwiZWFzZUluT3V0U2luZVwiLFxuICAgICAgICAgIGR1cmF0aW9uOiA4MDAsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcigyMDAsIHsgc3RhcnQ6IDUwMCB9KSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRUcmlnZ2VyXCIpKSB7XG4gICAgICBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xuICAgICAgICB0cmlnZ2VyRWxlbWVudDogXCIjY291bnRUcmlnZ2VyXCIsXG4gICAgICAgIHRyaWdnZXJIb29rOiBcIm9uRW50ZXJcIixcbiAgICAgICAgZHVyYXRpb246IFwiMTAwJVwiLFxuICAgICAgICByZXZlcnNlOiBmYWxzZSxcbiAgICAgICAgb2Zmc2V0OiA1MCxcbiAgICAgIH0pXG4gICAgICAgIC5vbihcImVudGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzdGFydENvdW50aW5nKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRUbyhjb250cm9sbGVyKTtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFja1wiKSkge1xuICAgICAgbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcbiAgICAgICAgdHJpZ2dlckVsZW1lbnQ6IFwiI3RyYWNrXCIsXG4gICAgICAgIHRyaWdnZXJIb29rOiBcIm9uRW50ZXJcIixcbiAgICAgICAgZHVyYXRpb246IFwiMTAwJVwiLFxuICAgICAgICByZXZlcnNlOiB0cnVlLFxuICAgICAgICBvZmZzZXQ6IDUwLFxuICAgICAgfSlcbiAgICAgICAgLm9uKFwiZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhckRyaXZlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRUbyhjb250cm9sbGVyKTtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob3dzXCIpKSB7XG4gICAgICBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xuICAgICAgICB0cmlnZ2VyRWxlbWVudDogXCIjaG93c1wiLFxuICAgICAgICB0cmlnZ2VySG9vazogXCJvbkVudGVyXCIsXG4gICAgICAgIGR1cmF0aW9uOiBcIjEwMCVcIixcbiAgICAgICAgcmV2ZXJzZTogZmFsc2UsXG4gICAgICAgIG9mZnNldDogMTAwLFxuICAgICAgfSlcbiAgICAgICAgLm9uKFwiZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFuaW1hdGVIb3dzKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRUbyhjb250cm9sbGVyKTtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnRyb1wiKSkge1xuICAgICAgYW5pbWUoe1xuICAgICAgICB0YXJnZXRzOiBcIi5pbnRyb1wiLFxuICAgICAgICB0cmFuc2xhdGVYOiAtNTYsXG4gICAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRTaW5lXCIsXG4gICAgICAgIGR1cmF0aW9uOiA4MDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGRlbGF5OiBhbmltZS5zdGFnZ2VyKDIwMCwgeyBzdGFydDogNTAwIH0pLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FyRHJpdmUoKSB7XG4gICAgICBpZiAoY2FyKSB7XG4gICAgICAgIGFuaW1lKHtcbiAgICAgICAgICB0YXJnZXRzOiBcIiNjYXJcIixcbiAgICAgICAgICB0cmFuc2xhdGVYOiB7XG4gICAgICAgICAgICB2YWx1ZTogXCItMTAwdndcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFNpbmVcIixcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIGRlbGF5OiBhbmltZS5zdGFnZ2VyKDIwMCwgeyBzdGFydDogNTAwIH0pLFxuICAgICAgICAgIGRpcmVjdGlvbjogXCJub3JtYWxcIixcbiAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG4vLyBjb25zdCBheGlvc19zZXNzaW9uID0gYXhpb3MuY3JlYXRlKHtcbi8vICAgICB4c3JmQ29va2llTmFtZSA6ICdjc3JmdG9rZW4nLFxuLy8gICAgIHhzcmZIZWFkZXJOYW1lIDogXCJYLUNTUkZUb2tlblwiLFxuLy8gICAgIHdpdGhDcmVkZW50aWFscyA6IHRydWUsXG4vLyAgICAgdGltZW91dCA6IDE1MDAwXG4vLyB9KTtcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5heGlvcy5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9ICdjc3JmdG9rZW4nO1xuYXhpb3MuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSBcIlgtQ1NSRlRva2VuXCI7XG5heGlvcy5kZWZhdWx0cy50aW1lb3V0ID0gMjUwMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGF4aW9zO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBheGlvcyBmcm9tIFwiLi9heGlvc0ZhY3RvcnlcIjtcbmltcG9ydCBpemlUb2FzdCBmcm9tIFwiaXppdG9hc3QvZGlzdC9qcy9pemlUb2FzdC5taW4uanNcIjsgLy8geW91IGhhdmUgYWNjZXNzIHRvIGl6aVRvYXN0IG5vd1xuaW1wb3J0IGh0bXggZnJvbSBcImh0bXgub3JnL2Rpc3QvaHRteFwiO1xuaW1wb3J0IEFscGluZSBmcm9tIFwiYWxwaW5lanNcIjtcblxuLy8gZnVuY3Rpb24gdG8gc2ltdWxhdGUgc2xlZXAgb3BlcmF0aW9uIG9uIGFuIGV2ZW50XG5mdW5jdGlvbiBzbGVlcChtcykge1xuICByZXR1cm4gbmV3IHdpbmRvdy5Qcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGdldCBjb29raWVzIG5hbWUgZWxzZSByZXR1cm4gYW4gZW1wdHkgc3RyaW5nXG5mdW5jdGlvbiBnZXRDb29raWUoY25hbWUpIHtcbiAgbGV0IG5hbWUgPSBjbmFtZSArIFwiPVwiO1xuICBsZXQgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGMgPSBjYVtpXTtcbiAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gXCIgXCIpIHtcbiAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcbiAgICB9XG4gICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XG4gICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFwiXCI7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIHNldCBhIGNvb2tpZSB0byBhIHZhbHVlIGFuZCBzZXQgYW4gZXhwaXJ5IGRhdGVcbmZ1bmN0aW9uIHNldENvb2tpZShjbmFtZSwgY3ZhbHVlLCBleGRheXMpIHtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gIGQuc2V0VGltZShkLmdldFRpbWUoKSArIGV4ZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICBsZXQgZXhwaXJlcyA9IFwiZXhwaXJlcz1cIiArIGQudG9VVENTdHJpbmcoKTtcbiAgZG9jdW1lbnQuY29va2llID0gY25hbWUgKyBcIj1cIiArIGN2YWx1ZSArIFwiO1wiICsgZXhwaXJlcyArIFwiO3BhdGg9L1wiO1xufVxuXG4vLyBmdW5jdGlvbiB0byBkZWxldGUgYSBjb29raWUgYnkgaXRzIGNvb2tpZSBuYW1lXG5mdW5jdGlvbiBkZWxldGVDb29raWUoY25hbWUpIHtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gIGQuc2V0VGltZShkLmdldFRpbWUoKSAtIDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICBsZXQgZXhwaXJlcyA9IFwiZXhwaXJlcz1cIiArIGQudG9VVENTdHJpbmcoKTtcbiAgZG9jdW1lbnQuY29va2llID0gY25hbWUgKyBcIj07XCIgKyBleHBpcmVzICsgXCI7cGF0aD0vXCI7XG59XG5cbi8vIGdldCBjb29raWUgZm9yIGFjY2VwdGVkIHBvbGljaWVzXG5jb25zdCBhY2NlcHRQcml2YWN5UG9saWN5ID0gZ2V0Q29va2llKFwiYWNjZXB0UHJpdmFjeVBvbGljeVwiKTtcbmNvbnN0IGFjY2VwdENvb2tpZVBvbGljeSA9IGdldENvb2tpZShcImFjY2VwdENvb2tpZVBvbGljeVwiKTtcbmNvbnN0IGFjY2VwdFNvY2lhbFNoYXJlUG9saWN5ID0gZ2V0Q29va2llKFwiYWNjZXB0U29jaWFsU2hhcmVQb2xpY3lcIik7XG5jb25zdCBhY2NlcHRTb2NpYWxPQXV0aFBvbGljeSA9IGdldENvb2tpZShcImFjY2VwdFNvY2lhbFNoYXJlUG9saWN5XCIpO1xuY29uc3QgYWNjZXB0R1BTUG9saWN5ID0gZ2V0Q29va2llKFwiYWNjZXB0Q29va2llUG9saWN5XCIpO1xuY29uc3QgYWNjZXB0Tm90aWZpY2F0aW9uc1BvbGljeSA9IGdldENvb2tpZShcImFjY2VwdENvb2tpZVBvbGljeVwiKTtcbmNvbnN0IGFjY2VwdEFkdmVydHNQb2xpY3kgPSBnZXRDb29raWUoXCJhY2NlcHRDb29raWVQb2xpY3lcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluaXRpYWxpemUoKSB7XG4gIHJldHVybiB7XG4gICAgaW5zdGFsbFByb21wdDogbnVsbCxcbiAgICBmdWxsU2NyZWVuOiBmYWxzZSB8fCAoXCJmdWxsc2NyZWVuXCIgaW4gbG9jYWxTdG9yYWdlKSxcbiAgICBkYXJrTW9kZTogKFwiZGFya01vZGVcIiBpbiBsb2NhbFN0b3JhZ2UpLFxuICAgIHNoYXJlYWJsZTogbnVsbCxcbiAgICBkZXRhaWw6IGZhbHNlLFxuICAgIG5hdmJhckZpeGVkOiBmYWxzZSxcbiAgICBwcmV2T2Zmc2V0OiAwLFxuXG4gICAgYWNjZXB0U29jaWFsU2hhcmU6IGZhbHNlLFxuICAgIGFjY2VwdFNvY2lhbEF1dGg6IGZhbHNlLFxuICAgIGFjY2VwdEdQUzogZmFsc2UsXG4gICAgYWNjZXB0Tm90aWZpY2F0aW9uczogZmFsc2UsXG4gICAgYWNjZXB0VGVybXM6IGZhbHNlLFxuICAgIGFjY2VwdFBvbGljeTogZmFsc2UsXG4gICAgYWNjZXB0QWR2ZXJ0czogZmFsc2UsXG5cbiAgICBJbml0KCkge1xuICAgICAgLy8gZ2V0IHRoZSByZXNwb25zZSBmb3IgYSBwYWdlIGFuZCBvbiBnZXQgcmVxdWVzdCBzd2FwIHRoZSB0aXRsZSBmb3IgdGhpc1xuICAgICAgLy8gYW5kIHRoZSBkZXNjcmlwdGlvbiBtZXRhIHRhZyB3aXRoIHRoZSBkZXRhaWwgcHJlc2VudCBoZXJlXG4gICAgICB0aGlzLmh0bXhBZnRlclN3YWI7XG5cbiAgICAgIC8vIHNldCBhbiBpbml0aWFsIHN0YXRlIG9mIHRoZSBoZWFkZXIgc2VjdGlvblxuICAgICAgdGhpcy5uYXZiYXJTY3JvbGxFZmZlY3Q7XG5cbiAgICAgIC8vIGNoZWNraW5nIGlmIHRoZXJlIGlzIGEgZ2xvYmFsIHN0b3JlIHRvIGluc3RhbGwgYSBQV0FcbiAgICAgIHRoaXMuaW5zdGFsbFBXQVNldHRpbmdzO1xuXG4gICAgICAvLyBlbmFibGUgc2hhcmluZyBieSBkZWZhdWx0IGVsc2UgZGlzYWJsZSBzaGFyaW5nIG9uIGluaXRpYWwgbG9hZGluZyBvZiBhIHdlYiBwYWdlXG4gICAgICB0aGlzLnNoYXJlYWJsZVNldHRpbmdzO1xuICAgIH0sXG5cbiAgICBodG14QWZ0ZXJTd2FiKCkge1xuICAgICAgaHRteC5vbihcImh0bXg6YWZ0ZXJTd2FwXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJodG14IG9vYiBzd2FiIGV2ZW50czogXCIsIGV2dCk7XG4gICAgICAgIGlmIChldnQuZGV0YWlsLnRhcmdldC5pZCA9PT0gXCJtYWluXCIpIHtcbiAgICAgICAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGl0bGVcIik7XG4gICAgICAgICAgdmFyIGF1dGhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImF1dGhvclwiXScpO1xuICAgICAgICAgIHZhciBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImRlc2NyaXB0aW9uXCJdJyk7XG5cbiAgICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgIHZhciBuZXdUaXRsZSA9IGV2dC5kZXRhaWwudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKTtcbiAgICAgICAgICAgIGlmIChuZXdUaXRsZSkge1xuICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5ld1RpdGxlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhdXRob3IpIHtcbiAgICAgICAgICAgIHZhciBuZXdBdXRob3IgPSBldnQuZGV0YWlsLnRhcmdldC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAnbWV0YVtuYW1lPVwiYXV0aG9yXCJdJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChuZXdBdXRob3IpIHtcbiAgICAgICAgICAgICAgYXV0aG9yLnNldEF0dHJpYnV0ZShcImNvbnRlbnRcIiwgbmV3QXV0aG9yLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdmFyIG5ld0Rlc2NyaXB0aW9uID0gZXZ0LmRldGFpbC50YXJnZXQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgJ21ldGFbbmFtZT1cImRlc2NyaXB0aW9uXCJdJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgXCJjb250ZW50XCIsXG4gICAgICAgICAgICAgICAgbmV3RGVzY3JpcHRpb24uZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciB1cmwgPSBldnQuZGV0YWlsLnhoci5yZXNwb25zZVVSTDtcbiAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgXCJcIiwgdXJsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBuYXZiYXJTY3JvbGxFZmZlY3QoKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG5cbiAgICAgIGlmIChvZmZzZXQgPiAxMCAmJiAhdGhpcy5pc05hdmJhckZpeGVkKSB7XG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwiZml4ZWRcIik7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gYCR7bmF2YmFyLm9mZnNldEhlaWdodH1weGA7XG4gICAgICAgIHRoaXMuaXNOYXZiYXJGaXhlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChvZmZzZXQgPT09IDAgJiYgdGhpcy5pc05hdmJhckZpeGVkKSB7XG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwiZml4ZWRcIik7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gMDtcbiAgICAgICAgdGhpcy5pc05hdmJhckZpeGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChvZmZzZXQgPiB0aGlzLnByZXZPZmZzZXQgJiYgdGhpcy5pc05hdmJhckZpeGVkKSB7XG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBjb250ZW50LnN0eWxlLm1hcmdpblRvcCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChvZmZzZXQgPCB0aGlzLnByZXZPZmZzZXQgJiYgdGhpcy5pc05hdmJhckZpeGVkKSB7XG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICBjb250ZW50LnN0eWxlLm1hcmdpblRvcCA9IGAke25hdmJhci5vZmZzZXRIZWlnaHR9cHhgO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByZXZPZmZzZXQgPSBvZmZzZXQ7XG4gICAgfSxcblxuICAgIG9wZW5EZXRhaWwodXJsKSB7XG4gICAgICAvLyBXaGVuZXZlciBhIGRldGFpbCBwYWdlIGlzIGNsaWNrZWQgdGhpcyBmaXJlcyB1cCB0byBvcGVuIGEgbW9kYWwgd2l0aCBkZXRhaWxzIGZvciB0aGUgaXRlbVxuICAgICAgbGV0IGxpbmsgPSBgJHtsb2NhdGlvbi5vcmlnaW59e3VybH1gO1xuICAgICAgaHRteC5hamF4KFwiR0VUXCIsIGxpbmssIHtcbiAgICAgICAgdGFyZ2V0OiBcIiNkZXRhaWxcIixcbiAgICAgICAgc3dhcDogXCJpbm5lckhUTUxcIixcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kZXRhaWwgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBzaGFyZWFibGVTZXR0aW5ncygpIHtcbiAgICAgIGNvbnN0IGFjY2VwdFNvY2lhbFNoYXJlUG9saWN5ID0gKFwiYWNjZXB0U29jaWFsU2hhcmVQb2xpY3lcIiBpbiBsb2NhbFN0b3JhZ2UpO1xuXG4gICAgICBpZiAodGhpcy5zaGFyZWFibGUgPT09IG51bGwgJiYgIWFjY2VwdFNvY2lhbFNoYXJlUG9saWN5KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjZXB0U29jaWFsU2hhcmVQb2xpY3lcIiwgXCJ0cnVlXCIpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdGhpcy5zaGFyZWFibGUgPT09IGZhbHNlICYmIGFjY2VwdFNvY2lhbFNoYXJlUG9saWN5XG4gICAgICApIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY2VwdFNvY2lhbFNoYXJlUG9saWN5Jyk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLnNoYXJlYWJsZSA9PT0gdHJ1ZSAmJiBhY2NlcHRTb2NpYWxTaGFyZVBvbGljeVxuICAgICAgKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjZXB0U29jaWFsU2hhcmVQb2xpY3lcIiwgXCJ0cnVlXCIpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyBzaGFyZVVSTCh1cmwsIHRpdGxlKSB7XG4gICAgICAvLyBzaGFyZSBhIHVybCB1c2luZyB0aGUgSFRNTDUgV2ViIEFQSXNcbiAgICAgIGlmIChcImFjY2VwdFNvY2lhbFNoYXJlUG9saWN5XCIgaW4gbG9jYWxTdG9yYWdlKSB7XG4gICAgICAgIGlmICh0aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGl0bGUgPSBkb2N1bWVudC50aXRsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBgJHtsb2NhdGlvbi5ob3N0fSR7dXJsfWA7XG4gICAgICAgIGlmIChuYXZpZ2F0b3Iuc2hhcmUpIHtcbiAgICAgICAgICBhd2FpdCBuYXZpZ2F0b3JcbiAgICAgICAgICAgIC5zaGFyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgdGV4dDogYENoZWNrIG91dCB0aGlzIGxpbmsgZnJvbSAke1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhvc3RcbiAgICAgICAgICAgICAgfTogXFxuJHt0aXRsZS50b1VwcGVyQ2FzZSgpfS5gLFxuICAgICAgICAgICAgICB1cmw6IGxpbmssXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgIGFzeW5jICgpID0+XG4gICAgICAgICAgICAgICAgYXdhaXQgaXppVG9hc3Quc3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJbU09DSUFMIFNIQVJFXVwiLFxuICAgICAgICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYFN1Y2Nlc3NmdWxseSBzaGFyZWQ6ICR7dGl0bGUudG9VcHBlckNhc2UoKX1gLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgICAgIGFzeW5jIChlcnJvcikgPT5cbiAgICAgICAgICAgICAgICBhd2FpdCBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJbU09DSUFMIFNIQVJFIEVSUk9SXVwiLFxuICAgICAgICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbmFibGVEYXJrTW9kZSgpIHtcbiAgICAgIC8vIFdoZW5ldmVyIHRoZSB1c2VyIGV4cGxpY2l0bHkgY2hvb3NlcyBkYXJrIG1vZGVcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGFya01vZGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xuICAgICAgdGhpcy5kYXJrTW9kZSA9IHRydWU7XG4gICAgfSxcblxuICAgIGRpc2FibGVEYXJrTW9kZSgpIHtcbiAgICAgIC8vIFdoZW5ldmVyIHRoZSB1c2VyIGV4cGxpY2l0bHkgY2hvb3NlcyBsaWdodCBtb2RlXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImRhcmtNb2RlXCIpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpO1xuICAgICAgdGhpcy5kYXJrTW9kZSA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBhY2NlcHRBbGxQb2xpY2llcygpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5hY2NlcHRQcml2YWN5UG9saWN5ID0gdHJ1ZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5hY2NlcHRDb29raWVQb2xpY3kgPSB0cnVlO1xuICAgICAgbG9jYWxTdG9yYWdlLmFjY2VwdFNvY2lhbFNoYXJlUG9saWN5ID0gdHJ1ZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5hY2NlcHRTb2NpYWxPQXV0aFBvbGljeSA9IHRydWU7XG4gICAgICBsb2NhbFN0b3JhZ2UuYWNjZXB0R1BTUG9saWN5ID0gdHJ1ZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5hY2NlcHROb3RpZmljYXRpb25zUG9saWN5ID0gdHJ1ZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5hY2NlcHRBZHZlcnRzUG9saWN5ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgaW5zdGFsbFBXQVNldHRpbmdzKCkge1xuICAgICAgaWYgKCFzZWxmLmluc3RhbGxQcm9tcHQpIHtcbiAgICAgICAgdGhpcy5pbnN0YWxsUHJvbXB0ID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGYuaW5zdGFsbFByb21wdCk7XG4gICAgICAgIHRoaXMuaW5zdGFsbFByb21wdCA9IHNlbGYuaW5zdGFsbFByb21wdDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaW5zdGFsbFBXQSgpIHtcbiAgICAgIC8vIG9wZW4gdGhlIGJyb3dzZXIgUFdBIGluc3RhbGwgcG9wdXAgcHJvbXB0XG4gICAgICB0aGlzLmluc3RhbGxQcm9tcHQucHJvbXB0KCk7XG5cbiAgICAgIC8vIGJhc2VkIG9uIHRoZSB1c2VycyBjaG9pY2UgZG8gc29tZXRoaW5nXG4gICAgICB0aGlzLmluc3RhbGxQcm9tcHQudXNlckNob2ljZS50aGVuKChjaG9pY2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY2hvaWNlKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBpZiB0aGUgdXNlcnMgY2hvaWNlIGlzIHRvIGluc3RhbGwgdGhlIFBXQSBzZXQgdGhlIHByb21wdCBrZXkgdG8gbnVsbCB0byByZW1vdmUgdGhlIHBvcHVwXG4gICAgICB0aGlzLmluc3RhbGxQcm9tcHQgPSBudWxsO1xuXG4gICAgICAvLyBvbmNlIHRoZSBhcHAgaXMgaW5zdGFsbGVkIHNlbmQgYW4gYWxlcnQgdGhhbmtpbmcgdGhlbSBhbmQgc3RhdGluZyB0aGUgYmVuZWZpdHMgdGhleSBnZXQgdXNpbmcgdGhlIFBXQVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJhcHBpbnN0YWxsZWRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCLwn5GNW1BXQV0gSW5zdGFsbGVkIFN0YXRlOiBcIiwgZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXppVG9hc3QuaW5mbyh7XG4gICAgICAgICAgdGl0bGU6IGBbU0VSVklDRSBXT1JLRVJdYCxcbiAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgXCJUaGFuayB5b3UgZm9yIGluc3RhbGxpbmcgdGhlIHdlYiBhcHAuIFRoaXMgb2ZmZXJzIHlvdSBvZmZsaW5lIGNhcGFiaWxpdGllcyB0byB1c2UgbXkgc2l0ZSB3aGVuIHlvdSBhcmUgb3V0IG9mIGRhdGEuXCIsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNhbmNsZVBXQSgpIHtcbiAgICAgIC8vIHRoaXMgY25sb3NlcyB0aGUgUFdBIGluaXRpYWwgcHJvbXB0XG4gICAgICB0aGlzLmluc3RhbGxQcm9tcHQgPSBudWxsO1xuICAgIH0sXG5cblxuICAgIHN3aXRjaEZ1bGxzY3JlZW5Nb2RlKCkge1xuICAgICAgdGhpcy5mdWxsU2NyZWVuID0gIXRoaXMuZnVsbFNjcmVlbjtcbiAgICAgIGlmIChcbiAgICAgICAgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgfHxcbiAgICAgICAgZG9jdW1lbnQubW96RnVsbFNjcmVlbkVsZW1lbnQgfHxcbiAgICAgICAgZG9jdW1lbnQubXNGdWxsU2NyZWVuRWxlbWVudCB8fFxuICAgICAgICBkb2N1bWVudC53ZWJraXRGdWxsU2NyZWVuRWxlbWVudFxuICAgICAgKSB7XG4gICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZnVsbHNjcmVlblwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZ1bGxzY3JlZW5cIiwgXCJ0cnVlXCIpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsidGlueW1jZSIsImF4aW9zIiwiSW5pdGlhbGl6ZSIsImRldGVjdCIsIlN3aXBlciIsImh0bXgiLCJBbHBpbmUiLCJpbnRlcnNlY3QiLCJldGhlcnMiLCJpemlUb2FzdCIsImFuaW1lIiwiU2Nyb2xsTWFnaWMiLCJ3aW5kb3ciLCJzY3JvbGxNYWdpYyIsImxvdHRpZXdlYiIsInBsdWdpbiIsImRhdGEiLCJzdGFydCIsInN3IiwiaG9tZSIsImJyb3dzZXIiLCJBUFBMSUNBVElPTl9TRVJWRVJfS0VZIiwiQ1JFQVRFX1dQX0RFVklDRSIsIlNFTkRfTk9USUZJQ0FUSU9OIiwiV0VCX1BVU0hfQ0ZHIiwidXJsQmFzZTY0VG9VaW50OEFycmF5IiwiYmFzZTY0U3RyaW5nIiwicGFkZGluZyIsInJlcGVhdCIsImxlbmd0aCIsImJhc2U2NCIsInJlcGxhY2UiLCJyYXdEYXRhIiwiYXRvYiIsIm91dHB1dEFycmF5IiwiVWludDhBcnJheSIsImkiLCJjaGFyQ29kZUF0Iiwic2F2ZVN1YnNjcmliZU9iaiIsInN1YnNjcmlwdGlvbiIsInN1YnNjcmlwdGlvbkpzb24iLCJ0b0pTT04iLCJlbmRwb2ludFBhcnRzIiwiZW5kcG9pbnQiLCJzcGxpdCIsInJlZ2lzdHJhdGlvbklkIiwicHJlZGF0YSIsInN0YXR1c190eXBlIiwibmFtZSIsInRvTG93ZXJDYXNlIiwicDI1NmRoIiwia2V5cyIsImF1dGgiLCJ1c2VyX2FnZW50IiwibmF2aWdhdG9yIiwiZ2V0VXNlckFnZW50IiwicmVnaXN0cmF0aW9uX2lkIiwiZ3JvdXAiLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdCIsImhlYWRlcnMiLCJkb2N1bWVudCIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwidGhlbiIsInJlc3BvbnNlIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwic3VjY2VzcyIsInRpdGxlIiwiYmFsbG9vbiIsInBvc2l0aW9uIiwiYW5pbWF0ZUluc2lkZSIsIm1lc3NhZ2UiLCJzdGF0dXNUZXh0Iiwic3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzZXR1cFRyaWdnZXJCdXR0b24iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN1YnNjcmliZSIsInJlZ2lzdHJhdGlvbiIsInB1c2hNYW5hZ2VyIiwiZ2V0U3Vic2NyaXB0aW9uIiwib3B0aW9ucyIsInVzZXJWaXNpYmxlT25seSIsImFwcGxpY2F0aW9uU2VydmVyS2V5Iiwic2V0dXBTdWJzY3JpYmVCdXR0b24iLCJyZWciLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzYWJsZVN1YnNjcmliZUJ1dHRvbiIsInN1Ykpzb24iLCJib2R5IiwiaW5mbyIsImRldGFpbCIsInNlcnZpY2VXb3JrZXIiLCJldmVudCIsInByb21wdEV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZWxmIiwiaW5zdGFsbFByb21wdCIsInN0b3JlIiwicmVnaXN0ZXIiLCJzY29wZSIsInJlYWR5IiwiYXN5bmMiLCJhY3RpdmUiLCJpbml0aWFsaXNlU3RhdGUiLCJlcnIiLCJzaG93Tm90aWZpY2F0aW9uIiwiTm90aWZpY2F0aW9uIiwicGVybWlzc2lvbiIsIndhcm5pbmciLCJzdWIiLCJmb3JFYWNoIiwiZXZ0IiwiY291bnRlcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FyIiwiY29udHJvbGxlciIsIkNvbnRyb2xsZXIiLCJzdGFydENvdW50aW5nIiwiY291bnRlciIsInRhcmdldHMiLCJpbm5lckhUTUwiLCJlYXNpbmciLCJyb3VuZCIsImR1cmF0aW9uIiwiYW5pbWF0ZUhvd3MiLCJ0cmFuc2xhdGVYIiwib3BhY2l0eSIsImRlbGF5Iiwic3RhZ2dlciIsIlNjZW5lIiwidHJpZ2dlckVsZW1lbnQiLCJ0cmlnZ2VySG9vayIsInJldmVyc2UiLCJvZmZzZXQiLCJvbiIsImFkZFRvIiwiY2FyRHJpdmUiLCJ2YWx1ZSIsImRpcmVjdGlvbiIsImxvb3AiLCJkZWZhdWx0cyIsIndpdGhDcmVkZW50aWFscyIsInhzcmZDb29raWVOYW1lIiwieHNyZkhlYWRlck5hbWUiLCJ0aW1lb3V0Iiwic2xlZXAiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImdldENvb2tpZSIsImNuYW1lIiwiY2EiLCJjb29raWUiLCJjIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsInNldENvb2tpZSIsImN2YWx1ZSIsImV4ZGF5cyIsImQiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJleHBpcmVzIiwidG9VVENTdHJpbmciLCJkZWxldGVDb29raWUiLCJhY2NlcHRQcml2YWN5UG9saWN5IiwiYWNjZXB0Q29va2llUG9saWN5IiwiYWNjZXB0U29jaWFsU2hhcmVQb2xpY3kiLCJhY2NlcHRTb2NpYWxPQXV0aFBvbGljeSIsImFjY2VwdEdQU1BvbGljeSIsImFjY2VwdE5vdGlmaWNhdGlvbnNQb2xpY3kiLCJhY2NlcHRBZHZlcnRzUG9saWN5IiwiZnVsbFNjcmVlbiIsImxvY2FsU3RvcmFnZSIsImRhcmtNb2RlIiwic2hhcmVhYmxlIiwibmF2YmFyRml4ZWQiLCJwcmV2T2Zmc2V0IiwiYWNjZXB0U29jaWFsU2hhcmUiLCJhY2NlcHRTb2NpYWxBdXRoIiwiYWNjZXB0R1BTIiwiYWNjZXB0Tm90aWZpY2F0aW9ucyIsImFjY2VwdFRlcm1zIiwiYWNjZXB0UG9saWN5IiwiYWNjZXB0QWR2ZXJ0cyIsIkluaXQiLCJodG14QWZ0ZXJTd2FiIiwibmF2YmFyU2Nyb2xsRWZmZWN0IiwiaW5zdGFsbFBXQVNldHRpbmdzIiwic2hhcmVhYmxlU2V0dGluZ3MiLCJ0YXJnZXQiLCJpZCIsImF1dGhvciIsImRlc2NyaXB0aW9uIiwibmV3VGl0bGUiLCJ0ZXh0Q29udGVudCIsIm5ld0F1dGhvciIsInNldEF0dHJpYnV0ZSIsIm5ld0Rlc2NyaXB0aW9uIiwidXJsIiwieGhyIiwicmVzcG9uc2VVUkwiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwicGFnZVlPZmZzZXQiLCJuYXZiYXIiLCJjb250ZW50IiwiaXNOYXZiYXJGaXhlZCIsImFkZCIsInN0eWxlIiwibWFyZ2luVG9wIiwib2Zmc2V0SGVpZ2h0IiwicmVtb3ZlIiwib3BlbkRldGFpbCIsImxpbmsiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImFqYXgiLCJzd2FwIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJzaGFyZVVSTCIsInVuZGVmaW5lZCIsImhvc3QiLCJzaGFyZSIsInRleHQiLCJ0b1VwcGVyQ2FzZSIsImVuYWJsZURhcmtNb2RlIiwiZG9jdW1lbnRFbGVtZW50IiwiZGlzYWJsZURhcmtNb2RlIiwiYWNjZXB0QWxsUG9saWNpZXMiLCJpbnN0YWxsUFdBIiwicHJvbXB0IiwidXNlckNob2ljZSIsImNob2ljZSIsImNhbmNsZVBXQSIsInN3aXRjaEZ1bGxzY3JlZW5Nb2RlIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJtb3pGdWxsU2NyZWVuRWxlbWVudCIsIm1zRnVsbFNjcmVlbkVsZW1lbnQiLCJ3ZWJraXRGdWxsU2NyZWVuRWxlbWVudCIsImV4aXRGdWxsc2NyZWVuIiwicmVxdWVzdEZ1bGxzY3JlZW4iXSwic291cmNlUm9vdCI6IiJ9