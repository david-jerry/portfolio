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
/* eslint-disable no-unused-vars */

 // you have access to iziToast now

const exdays = 30 * 24 * 60 * 60;

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
  d.setTime(d.getTime() + exdays);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/; domain=" + location.hostname + "; SameSite=Strict; Secure";
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
const acceptNecessary = getCookie("acceptNecessary") || true;
const acceptAnalytics = getCookie("acceptAnalytics");
const acceptGPSPolicy = getCookie("acceptGPSPolicy");
const acceptMarketing = getCookie("acceptMarketing");
const acceptFunctionality = getCookie("acceptFunctionality");
function Initialize() {
  return {
    isInactive: false,
    active: 'all',
    read: 0,
    open: 'all',
    updateOrCreate: false,
    processingRequest: false,
    // necessary variables
    openFloatIcon: false,
    viewCookiesList: false,
    closeCookieModal: acceptPrivacyPolicy && acceptCookiePolicy && acceptNecessary && acceptAnalytics && acceptGPSPolicy && acceptMarketing && acceptFunctionality,
    installPrompt: null,
    deferredPrompt: null,
    closeInstallPrompt: "closeInstallPrompt" in localStorage,
    showInstallFloatIcon: !("showInstallFloatIcon" in localStorage),
    fullScreen: false,
    darkMode: "darkMode" in localStorage,
    shareable: null,
    // detail variables for all detail view request
    detail: false,
    // navbar variables
    navbarFixed: false,
    prevOffset: 0,
    // consent variables
    acceptNecessary: acceptNecessary,
    acceptAnalytics: acceptAnalytics,
    acceptGPS: acceptGPSPolicy,
    acceptMarketing: acceptMarketing,
    acceptCookiePolicy: acceptCookiePolicy,
    acceptPolicy: acceptPrivacyPolicy,
    acceptFunctionality: acceptFunctionality,
    Init() {
      // get the response for a page and on get request swap the title for this
      // and the description meta tag with the detail present here
      // this.htmxAfterSwab;

      // set an initial state of the header section
      this.navbarScrollEffect;

      // checking if there is a global store to install a PWA
      this.installPWASettings;

      // enable sharing by default else disable sharing on initial loading of a web page
      this.shareableSettings;
    },
    scrollToElement(id) {
      document.getElementById(`${id}`).scrollIntoView({
        behavior: "smooth"
      });
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
      if (offset > 2 && !this.isNavbarFixed) {
        navbar.classList.remove("relative");
        navbar.classList.add("fixed");
        content.style.marginTop = `${navbar.offsetHeight}px`;
        this.isNavbarFixed = true;
      }
      if (offset === 0 && this.isNavbarFixed) {
        navbar.classList.remove("fixed");
        navbar.classList.add("relative");
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
      let link = url;
      htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_2___default().ajax("GET", link, {
        target: "#detail",
        swap: "innerHTML"
      });
      this.detail = true;
    },
    openUpdateCreate(url) {
      this.updateOrCreate = true;
      htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_2___default().ajax('GET', url, {
        target: "#updateOrCreate",
        swap: "innerHTML"
      });
    },
    shareableSettings() {
      const acceptSocialSharePolicy = ("acceptSocialSharePolicy" in localStorage);
      if (this.shareable === null && !acceptSocialSharePolicy) {
        localStorage.setItem("acceptSocialSharePolicy", "true");
      } else if (this.shareable === false && acceptSocialSharePolicy) {
        localStorage.removeItem("acceptSocialSharePolicy");
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
      setCookie("acceptPrivacyPolicy", true, exdays);
      setCookie("acceptCookiePolicy", true, exdays);
      setCookie("acceptNecessary", true, exdays);
      setCookie("acceptAnalytics", true, exdays);
      setCookie("acceptGPSPolicy", true, exdays);
      setCookie("acceptMarketing", true, exdays);
      setCookie("acceptFunctionality", true, exdays);
      this.closeCookieModal = true;
    },
    installPWASettings() {
      let prompt = localStorage.getItem("deferredPrompt");
      let pwa = JSON.parse(prompt);
      console.log(pwa);
      if (pwa === null) {
        this.closeInstallPrompt = true;
        this.showInstallFloatIcon = true;
      }
    },
    installPWA() {
      let prompt = localStorage.getItem("deferredPrompt");
      const pwa = JSON.parse(prompt);
      // this closes the PWA initial prompt
      if (pwa) {
        // open the browser PWA install popup prompt
        window.deferredPrompt.prompt();

        // inspect what the user chose to do with the install prompt
        window.deferredPrompt.userChoice.then(choiceResult => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the install prompt");
            this.closeInstallPrompt = true;
            this.showInstallFloatIcon = false;
          } else {
            console.log("User dismissed the install prompt");
            this.closeInstallPrompt = true;
            this.showInstallFloatIcon = true;
          }
        });
      }

      // once the app is installed send an alert thanking them and stating the benefits they get using the PWA
      // listen for the app installed listener to know if the app has been installed
      //----------------------------------------------------------
      window.addEventListener("appinstalled", event => {
        if (true) {
          console.log("👍 [PWA INSTALLED STATE]: ", event);
        }
        this.closeInstallPrompt = true;
        this.showInstallFloatIcon = false;
        izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().info({
          title: `👍 [PWA INSTALLED]`,
          balloon: true,
          position: "topRight",
          animateInside: true,
          message: "Thank you for installing the web app. This offers you offline capabilities to use my site when you are out of data."
        });
      });
      //----------------------------------------------------------
    },

    canclePWA() {
      // localStorage.removeItem("beforeinstallprompt");
      this.closeInstallPrompt = true;
      this.showInstallFloatIcon = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLEtBQUs7UUFDcENTLDZFQUFjLENBQUM7VUFDWG9FLEtBQUssRUFBRSwyQkFBMkI7VUFDbENJLE9BQU8sRUFBRVEsS0FBSyxDQUFDUjtRQUNuQixDQUFDLENBQUM7UUFDRixJQUFJLENBQUN3TSxnQkFBZ0IsR0FBRyxLQUFLO01BQ2pDLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQztBQUNMOzs7Ozs7Ozs7Ozs7QUNuSEE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8vcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8vcG9ydGZvbGlvL3BvcnRmb2xpby8uL3BvcnRmb2xpby9zdGF0aWMvanMvYXBwL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8vcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8vcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8vLi9wb3J0Zm9saW8vc3RhdGljL2pzL2NvbXBvbmVudHMvYXhpb3NGYWN0b3J5LmpzIiwid2VicGFjazovL3BvcnRmb2xpby9wb3J0Zm9saW8vcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8vcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8vcG9ydGZvbGlvLy4vcG9ydGZvbGlvL3N0YXRpYy9qcy9jb21wb25lbnRzL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8vcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8vcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8vLi9wb3J0Zm9saW8vc3RhdGljL2pzL2NvbXBvbmVudHMvcHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8vcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8vcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8vLi9wb3J0Zm9saW8vc3RhdGljL3Nhc3MvcHJvamVjdC5zY3NzIiwid2VicGFjazovL3BvcnRmb2xpby9wb3J0Zm9saW8vcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8vcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8vcG9ydGZvbGlvL2lnbm9yZWR8L2hvbWUvZGFya2NvZHIvd3d3L2Rhcmtjb2RyL3BvcnRmb2xpby9ub2RlX21vZHVsZXMvYm4uanMvbGlifGJ1ZmZlciJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi8uLi9zYXNzL3Byb2plY3Quc2Nzc1wiO1xuXG4vLyBTZWxlY3QgMlxuLy8gaW1wb3J0IFwic2VsZWN0Mi9kaXN0L2Nzcy9zZWxlY3QyLm1pbi5jc3NcIjtcbi8vIGltcG9ydCBcInNlbGVjdDIvZGlzdC9qcy9zZWxlY3QyLm1pbi5qc1wiO1xuXG4vLyB0aW55bWNlXG5pbXBvcnQgdGlueW1jZSBmcm9tIFwidGlueW1jZS90aW55bWNlLm1pbi5qc1wiO1xuaW1wb3J0IFwidGlueW1jZS9pY29ucy9kZWZhdWx0L2ljb25zLmpzXCI7XG5pbXBvcnQgXCJ0aW55bWNlL3RoZW1lcy9zaWx2ZXIvdGhlbWUuanNcIjtcbmltcG9ydCBcInRpbnltY2Uvc2tpbnMvY29udGVudC9kZWZhdWx0L2NvbnRlbnQubWluLmNzc1wiO1xuaW1wb3J0IFwidGlueW1jZS9za2lucy9jb250ZW50L2RlZmF1bHQvY29udGVudC5jc3NcIjtcbmltcG9ydCBcInRpbnltY2Uvc2tpbnMvdWkvb3hpZGUvc2tpbi5taW4uY3NzXCI7XG5pbXBvcnQgXCJ0aW55bWNlL3NraW5zL3VpL294aWRlL2NvbnRlbnQubWluLmNzc1wiO1xuaW1wb3J0IFwidGlueW1jZS9tb2RlbHMvZG9tL21vZGVsLmpzXCI7XG5cbi8vIGNvbXBvbmVudHNcbmltcG9ydCBheGlvcyBmcm9tIFwiLi4vY29tcG9uZW50cy9heGlvc0ZhY3RvcnlcIjtcbmltcG9ydCBJbml0aWFsaXplIGZyb20gXCIuLi9jb21wb25lbnRzL2RlZmF1bHRcIjtcbmltcG9ydCBQcm9qZWN0UHJvY2Vzc2luZyBmcm9tICcuLi9jb21wb25lbnRzL3Byb2plY3RGb3JtJztcblxuLy8gZnVuY3Rpb25hbCBpbXBvcnRzXG5pbXBvcnQgeyBkZXRlY3QgfSBmcm9tIFwiZGV0ZWN0LWJyb3dzZXJcIjtcbmltcG9ydCBTd2lwZXIgZnJvbSBcInN3aXBlclwiO1xuaW1wb3J0IGh0bXggZnJvbSBcImh0bXgub3JnL2Rpc3QvaHRteFwiO1xuaW1wb3J0IEFscGluZSBmcm9tIFwiYWxwaW5lanNcIjtcbi8vIGltcG9ydCBNYXNrIGZyb20gXCJAcnlhbmdqY2hhbmRsZXIvYWxwaW5lLW1hc2tcIjtcbmltcG9ydCBpbnRlcnNlY3QgZnJvbSBcIkBhbHBpbmVqcy9pbnRlcnNlY3RcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcblxuLy8gYWxlcnQgbWVzc2FnZXNcbmltcG9ydCB0b2FzdHIgZnJvbSBcInRvYXN0clwiO1xuaW1wb3J0IFwiaXppdG9hc3QvZGlzdC9jc3MvaXppVG9hc3QubWluLmNzc1wiO1xuaW1wb3J0IGl6aVRvYXN0IGZyb20gXCJpeml0b2FzdC9kaXN0L2pzL2l6aVRvYXN0Lm1pbi5qc1wiO1xuLy8gaW1wb3J0IFwiZmxvd2JpdGVcIjtcblxuaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzL2xpYi9hbmltZS5lcy5qc1wiO1xuaW1wb3J0IFNjcm9sbE1hZ2ljIGZyb20gXCJzY3JvbGxtYWdpY1wiO1xuXG5pbXBvcnQgbG90dGlld2ViIGZyb20gXCJsb3R0aWUtd2ViXCI7XG4vLyBpbXBvcnQgXCJAbG90dGllZmlsZXMvbG90dGllLXBsYXllclwiO1xuXG4vLyBHbG9iYWwgSW5pdGlhbGl6YXRpb25zIGZvciBpbXBvcnRlZGxpYnJhcmllcyAvL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbml0aWFsaXplIGFuaW1lanNcbndpbmRvdy5hbmltZSA9IGFuaW1lO1xud2luZG93LlNjcm9sbE1hZ2ljID0gU2Nyb2xsTWFnaWM7XG5cbi8vIGluaXRpYWxpemUgaHRteFxud2luZG93Lmh0bXggPSBodG14O1xuLy8gLy8gaW5pdGlhbGl6ZSB0aW55bWNlXG53aW5kb3cudGlueW1jZSA9IHRpbnltY2U7XG4vLyBpbml0aWFsaXplIGxvdHRpZSB3ZWIgYW5kIGxvdHRpZSBwbGF5ZXJcbndpbmRvdy5sb3R0aWV3ZWIgPSBsb3R0aWV3ZWI7XG5cbi8vIGluaXRpYWxpemUgZXRoZXIganMgZm9yIGNyeXB0byBwYXltZW50XG53aW5kb3cuZXRoZXJzID0gZXRoZXJzO1xuLy8gaW5pdGlhbGl6ZSBheGlvcyBhc3luYyBwb3N0fGdldCByZXF1ZXN0XG53aW5kb3cuYXhpb3MgPSBheGlvcztcbi8vIGluaXRpYWxpemUgc3dpcGVyLmpzXG53aW5kb3cuU3dpcGVyID0gU3dpcGVyO1xuXG4vLyBpbml0aWFpbGl6ZSBpeml0b2FzdCBhbGVydHNcbndpbmRvdy5pemlUb2FzdCA9IGl6aVRvYXN0O1xuXG4vLyBzZXQgdGltZW91dCBmb3IgaW5hY3RpdmUgdXNlclxubGV0IHRpbWVyID0gbnVsbDtcbmZ1bmN0aW9uIHJlc2V0VGltZXIoKSB7XG4gIC8vIGZ1bmN0aW9uIHRvIHJlc2V0IHRoZSB0aW1lb3V0XG4gIGNsZWFyVGltZW91dCh0aW1lcik7XG4gIEFscGluZS5zdG9yZSgnaXNJbmFjdGl2ZScsIGZhbHNlKTtcbiAgc3RhcnRUaW1lb3V0O1xufVxuXG5mdW5jdGlvbiBzdGFydFRpbWVvdXQoKSB7XG4gIC8vIGZ1bmN0aW9uIHRvIHN0YXJ0IHRoZSB0aW1lIG91dFxuICB0aW1lciA9IHNldFRpbWVvdXQodGltZW91dCwgMTAwMCk7IC8vIDUgc2Vjb25kc1xufVxuXG5mdW5jdGlvbiB0aW1lb3V0KCkge1xuICAvLyBmdW5jdGlvbiB0byBzdG9yZSB0aGUgYm9vbGVhbiBmb3IgdGhlIHRpbWUgb3V0XG4gIC8vIFNldCBpc0luYWN0aXZlIHZhcmlhYmxlIHRvIHRydWVcbiAgQWxwaW5lLnN0b3JlKCdpc0luYWN0aXZlJywgdHJ1ZSk7XG59XG5cbnN0YXJ0VGltZW91dCgpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcmVzZXRUaW1lcik7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHJlc2V0VGltZXIpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcmVzZXRUaW1lcik7XG5cbi8vIGRlZmF1bHQgdmFyaWFibGVzXG5jb25zdCBzdyA9IFwiL3N3LmpzXCI7XG5jb25zdCBob21lID0gXCIvXCI7XG5cbi8vIGRldGVjdCBicm93c2VyIHR5cGVcbmNvbnN0IGJyb3dzZXIgPSBkZXRlY3QoKTtcblxuLy8gc2V0IHNlcnZpY2Ugd29ya2VyIGxpbmsgYW5kIHNjb3BlIHN0YXJ0IGxpbmtcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBnZXQgZ2xvYmFsIHZhcmlhYmxlcyBmcm9tIHRoZSBiYXNlLmh0bWwgZmlsZSBmb3Jcbi8vIHB1c2ggbm90aWZpY2F0aW9uIGFuZCBwd2EgaW5zdGFsbCBidXR0b25cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxubGV0IHsgQVBQTElDQVRJT05fU0VSVkVSX0tFWSwgQ1JFQVRFX1dQX0RFVklDRSwgU0VORF9OT1RJRklDQVRJT04gfSA9XG4gIHdpbmRvdy5XRUJfUFVTSF9DRkc7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBnZW5lcmF0ZSBrZXkgZm9yIHB1c2ggbm90aWZpY2F0aW9uc1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9LbGVyaXRoLzgwYWJkNzQyZDcyNmRkNTg3ZjRiZDVkNmEwYWIyNmI2I2ZpbGUtdXJsYmFzZTY0dG91aW50OGFycmF5LWpzXG5mdW5jdGlvbiB1cmxCYXNlNjRUb1VpbnQ4QXJyYXkoYmFzZTY0U3RyaW5nKSB7XG4gIHZhciBwYWRkaW5nID0gXCI9XCIucmVwZWF0KCg0IC0gKGJhc2U2NFN0cmluZy5sZW5ndGggJSA0KSkgJSA0KTtcbiAgdmFyIGJhc2U2NCA9IChiYXNlNjRTdHJpbmcgKyBwYWRkaW5nKS5yZXBsYWNlKC9cXC0vZywgXCIrXCIpLnJlcGxhY2UoL18vZywgXCIvXCIpO1xuXG4gIHZhciByYXdEYXRhID0gd2luZG93LmF0b2IoYmFzZTY0KTtcbiAgdmFyIG91dHB1dEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkocmF3RGF0YS5sZW5ndGgpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3RGF0YS5sZW5ndGg7ICsraSkge1xuICAgIG91dHB1dEFycmF5W2ldID0gcmF3RGF0YS5jaGFyQ29kZUF0KGkpO1xuICB9XG4gIHJldHVybiBvdXRwdXRBcnJheTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB0aGlzIGlzIHRvIHN1YnNjcmliZSB0byBwdXNoIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBicm93c2VyIHRvIHRoZSBzZXJ2ZXJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYXN5bmMgZnVuY3Rpb24gc2F2ZVN1YnNjcmliZU9iaihzdWJzY3JpcHRpb24pIHtcbiAgLy8gc2F2ZSBzdWJzY3JpcHRpb24gdG8gdGhlIHNlcnZlclxuICBjb25zdCBzdWJzY3JpcHRpb25Kc29uID0gc3Vic2NyaXB0aW9uLnRvSlNPTigpO1xuICBjb25zdCBlbmRwb2ludFBhcnRzID0gc3Vic2NyaXB0aW9uSnNvbi5lbmRwb2ludC5zcGxpdChcIi9cIik7XG4gIGNvbnN0IHJlZ2lzdHJhdGlvbklkID0gZW5kcG9pbnRQYXJ0c1tlbmRwb2ludFBhcnRzLmxlbmd0aCAtIDFdO1xuXG4gIGNvbnN0IHByZWRhdGEgPSB7XG4gICAgc3RhdHVzX3R5cGU6IFwic3Vic2NyaWJlXCIsXG4gICAgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb25Kc29uLFxuICAgIGJyb3dzZXI6IGJyb3dzZXIubmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgIHAyNTZkaDogc3Vic2NyaXB0aW9uSnNvbi5rZXlzLnAyNTZkaCxcbiAgICBhdXRoOiBzdWJzY3JpcHRpb25Kc29uLmtleXMuYXV0aCxcbiAgICB1c2VyX2FnZW50OiBuYXZpZ2F0b3IuZ2V0VXNlckFnZW50LFxuICAgIHJlZ2lzdHJhdGlvbl9pZDogcmVnaXN0cmF0aW9uSWQsXG4gICAgZ3JvdXA6IFwidXNlcnNcIixcbiAgfTtcblxuICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkocHJlZGF0YSk7XG5cbiAgYXdhaXQgYXhpb3NcbiAgICAucG9zdChDUkVBVEVfV1BfREVWSUNFLCBkYXRhLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIlgtQ1NSRlRva2VuXCI6IGRvY3VtZW50LmhlYWRcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpXG4gICAgICAgICAgLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIiksXG4gICAgICB9LFxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICB0b2FzdHIuc3VjY2Vzcyh7XG4gICAgICAgICAgdGl0bGU6IFwiW1BVU0ggTk9USUZJQ0FUSU9OIFNVQlNDUklQVElPTl1cIixcbiAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiBgU3Vic2NyaXB0aW9uIFNlbnQgU3VjY2Vzc2Z1bGx5ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIFwic3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uXCJcbiAgICAgICk7XG4gICAgICBzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiLCB0cnVlKTtcbiAgICAgIC8vIGlmIHN1YnNjcmlwdGlvbiBpcyBzdWNjZXNzZnVsbHkgc2F2ZWQgdG8gdGhlIHNlcnZlclxuICAgICAgLy8gdGhlbiBlbmFibGUgdGhlIHRlc3Qgbm90aWZpY2F0aW9uIHB1c2ggYnV0dG9uIHRvIGJlIHZpc2libGVcbiAgICAgIHNldHVwVHJpZ2dlckJ1dHRvbihzdWJzY3JpcHRpb24pO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgdGl0bGU6IFwiW1BVU0ggTk9USUZJQ0FUSU9OIFNFUlZFUl1cIixcbiAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiBgTm90aWZpY2F0aW9uIFN1YnNjcmlwdGlvbiAke2Vycm9yLm1lc3NhZ2V9YCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0aGlzIGZ1bmN0aW9uIGlzIHRvIHNlbmQgc3Vic2NyaXB0aW9uIG5vdGlmaWNhdGlvbiB0byB0aGUgc2VydmVyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmFzeW5jIGZ1bmN0aW9uIHN1YnNjcmliZShyZWdpc3RyYXRpb24pIHtcbiAgYXdhaXQgcmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyXG4gICAgLmdldFN1YnNjcmlwdGlvbigpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic3Vic2NyaXB0aW9uIGV4aXN0c1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNhdmVTdWJzY3JpYmVPYmooc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgc2V0dXBUcmlnZ2VyQnV0dG9uKHN1YnNjcmlwdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB1c2VyVmlzaWJsZU9ubHk6IHRydWUsIC8vIHJlcXVpcmVkIGJ5IGNocm9tZVxuICAgIGFwcGxpY2F0aW9uU2VydmVyS2V5OiB1cmxCYXNlNjRUb1VpbnQ4QXJyYXkoQVBQTElDQVRJT05fU0VSVkVSX0tFWSksXG4gIH07XG5cbiAgYXdhaXQgcmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyXG4gICAgLnN1YnNjcmliZShvcHRpb25zKVxuICAgIC50aGVuKFxuICAgICAgLy8gcmVxdWVzdGluZyB0byBzdWJzY3JpYmUgZnJvbSB0aGUgc2VydmVyXG4gICAgICBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYHN1YnNjcmlwdGlvbjogYCwgc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzdWJzY3JpcHRpb24uZW5kcG9pbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3Vic2NyaXB0aW9uIGlzIG5vdyBzYXZlZCB0byB0aGUgc2VydmVyXG4gICAgICAgIHNhdmVTdWJzY3JpYmVPYmooc3Vic2NyaXB0aW9uKTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICAgIGl6aVRvYXN0LnN1Y2Nlc3Moe1xuICAgICAgICAgICAgdGl0bGU6IFwiW1BVU0ggTk9USUZJQ0FUSU9OIFNVQlNDUklQVElPTl1cIixcbiAgICAgICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBTdWJzY3JpcHRpb24gU2VudCBTdWNjZXNzZnVsbHlgLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVycm9yIGZpZ3VyZSB0aGUgZXJyb3IgYW5kIHRocm93IGFuIGFwcHJvcHJhaXRlIGVycm9yIG1lc3NhZ2UgdG9cbiAgICAgIC8vIHRoZSB1c2VyIHNvIGhlIGtub3dzIGV4YWN0bHkgd2hhdCBpcyB3cm9uZyBhbmQgY2FuIG1vdmUgZm9yd2FyZCBvciBhZGp1c3QgZm9yIGFcbiAgICAgIC8vIGRldmljZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICAgIHRpdGxlOiBcIltQVVNIIE5PVElGSUNBVElPTiBTVUJTQ1JJUFRJT05dXCIsXG4gICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgbWVzc2FnZTogYCR7ZXJyb3IubWVzc2FnZX1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFRoZSBmdW5jdGlvbiB0byB0cmlnZ2VyIHRoZSBwdXNoIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBicm93c2VyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHN1YnNjcmliZShyZWcpO1xuZnVuY3Rpb24gc2V0dXBTdWJzY3JpYmVCdXR0b24ocmVnKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvblwiKSkge1xuICAgIGNvbnN0IHN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b25cIlxuICAgICk7XG4gICAgc3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIiwgZmFsc2UpO1xuICAgIHN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwibWQ6aGlkZGVuXCIsIGZhbHNlKTtcbiAgICBzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHN1YnNjcmliZShyZWcpO1xuICAgICAgY29uc29sZS5sb2coXCJTdWJzY3JpYmUgQnV0dG9uIFNldFwiKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNhYmxlU3Vic2NyaWJlQnV0dG9uKCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b25cIikpIHtcbiAgICBjb25zdCBzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwic3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uXCJcbiAgICApO1xuICAgIHN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIsIHRydWUpO1xuICAgIHN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwibWQ6aGlkZGVuXCIsIHRydWUpO1xuICB9XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhpcyBmdW5jdGlvbiBpcyBmb3IgYSB1c2VyIHRvIHRlc3QgdGhlIHB1c2ggbm90aWZpY2F0aW9uXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmFzeW5jIGZ1bmN0aW9uIHNldHVwVHJpZ2dlckJ1dHRvbihzdWJzY3JpcHRpb24pIHtcbiAgY29uc3Qgc3ViSnNvbiA9IHN1YnNjcmlwdGlvbi50b0pTT04oKTtcbiAgY29uc3QgZW5kcG9pbnRQYXJ0cyA9IHN1Ykpzb24uZW5kcG9pbnQuc3BsaXQoXCIvXCIpO1xuICBjb25zdCByZWdpc3RyYXRpb25JZCA9IGVuZHBvaW50UGFydHNbZW5kcG9pbnRQYXJ0cy5sZW5ndGggLSAxXTtcbiAgY29uc3QgcHJlZGF0YSA9IHtcbiAgICByZWdpc3RyYXRpb25faWQ6IHJlZ2lzdHJhdGlvbklkLFxuICAgIGF1dGg6IHN1Ykpzb24ua2V5cy5hdXRoLFxuICAgIGhlYWQ6IFwiSmVycnkgU2F5cyDwn5SKIFwiLFxuICAgIGJvZHk6IFwiVGhpcyBpcyBob3cgcHVzaCBub3RpZmljYXRpb25zIGZyb20gbXkgc2l0ZSB3aWxsIGJlIHNob3duIG9uIHlvdXIgZGV2aWNlcy5cIixcbiAgfTtcblxuICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkocHJlZGF0YSk7XG5cbiAgYXdhaXQgYXhpb3NcbiAgICAucG9zdChTRU5EX05PVElGSUNBVElPTiwgZGF0YSwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbihhc3luYyBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGF3YWl0IGl6aVRvYXN0LmluZm8oe1xuICAgICAgICB0aXRsZTogXCJbUFVTSCBOT1RJRklDQVRJT04gVEVTVCBTVUNDRVNTRlVMXVwiLFxuICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaChhc3luYyBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgYXdhaXQgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICB0aXRsZTogXCJbUFVTSCBOT1RJRklDQVRJT04gVEVTVCBFUlJPUl1cIixcbiAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgbWVzc2FnZTogZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWwsXG4gICAgfSk7XG4gICAgfSk7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRW5kIHB1c2ggbm90aWZpY2F0aW9uIGJ1dHRvblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGVuYWJsZSBzZXJ2aWNlIHdvcmtlciwgdGhlbiB3aGVuIHNlcnZpY2Ugd29ya2VyIGlzIGVuYWJsZWQgcmVxdWVzdFxuLy8gcGVybWlzc2lvbiBmb3IgcHVzaCBub3RpZmljYXRpb24gYW5kIGxvY2F0aW9uIHNlcnZpY2VzIGZyb20gdGhlIGJyb3dzZXJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgICAucmVnaXN0ZXIoc3csIHsgc2NvcGU6IGhvbWUgfSlcbiAgICAgIC50aGVuKChyZWdpc3RyYXRpb24pID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2Ugd29ya2VyIHJlZ2lzdGVyYXRpb24gc3VjY2VlZGVkOiBcIiwgcmVnaXN0cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oZnVuY3Rpb24gYXN5bmMocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgaW5pdGlhbGlzZVN0YXRlKHJlZ2lzdHJhdGlvbik7XG4gICAgICAgICAgaWYgKHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2Ugd29ya2VyIGluc3RhbGxpbmdcIik7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZWdpc3RyYXRpb24ud2FpdGluZykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIHdvcmtlciBpbnN0YWxsZWRcIik7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZWdpc3RyYXRpb24uYWN0aXZlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2Ugd29ya2VyIGFjdGl2ZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgICAgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICAgICAgdGl0bGU6IFwiW1NFUlZJQ0UgV09SS0VSXVwiLFxuICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJTZXJ2aWNlIFdvcmtlciBGYWlsZWQgdG8gUmVnaXN0ZXJcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSk7XG59XG5cbmNvbnN0IGluaXRpYWxpc2VTdGF0ZSA9IChyZWcpID0+IHtcbiAgaWYgKCFyZWcuc2hvd05vdGlmaWNhdGlvbikge1xuICAgIGl6aVRvYXN0LmVycm9yKHtcbiAgICAgIHRpdGxlOiBcIltQVVNIIE5PVElGSUNBVElPTiBVTlNVUFBPUlRFRF1cIixcbiAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiU2hvd2luZyA8c3Ryb25nPlBVU0ggTk9USUZJQ0FUSU9OUzwvc3Ryb25nPiBpcyB1bnN1cHBvcnRlZFwiLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChyZWcuc2hvd05vdGlmaWNhdGlvbikge1xuICAgIGRpc2FibGVTdWJzY3JpYmVCdXR0b24oKTtcbiAgfVxuXG4gIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gXCJkZW5pZWRcIikge1xuICAgIGl6aVRvYXN0Lndhcm5pbmcoe1xuICAgICAgdGl0bGU6IFwiW1BVU0ggTk9USUZJQ0FUSU9OIERFTklFRF1cIixcbiAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgIFwiWW91IHByZXZlbnRlZCB1cyBmcm9tIHNod29pbmcgbm90aWZpY2F0aW9ucy4gTWFudWFsbHkgY2hlY2sgaWYgeW91IGhhdmUgcHJldmVudGVkIHB1c2ggbm90aWZjYXRpb24gZnJvbSB1cy5cIixcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gIT09IFwiZGVuaWVkXCIpIHtcbiAgICBkaXNhYmxlU3Vic2NyaWJlQnV0dG9uKCk7XG4gIH1cblxuICBpZiAoIShcIlB1c2hNYW5hZ2VyXCIgaW4gd2luZG93KSkge1xuICAgIGl6aVRvYXN0LmluZm8oe1xuICAgICAgdGl0bGU6IFwiW1BVU0ggQk5PVElGSUNBVElPTiBVTkFWQUlMQkFMRV1cIixcbiAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiUHVzaCBub3RpZmljYXRpb24gaXMgbm90IGFsbG93ZWQgaW4geW91ciBicm93c2VyLlwiLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChcIlB1c2hNYW5hZ2VyXCIgaW4gd2luZG93KSB7XG4gICAgZGlzYWJsZVN1YnNjcmliZUJ1dHRvbigpO1xuICB9XG5cbiAgcmVnLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpLnRoZW4oKHN1YikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0cmF0aW9uIE9iamVjdFwiLCByZWcpO1xuICAgIGlmICghc3ViIHx8IHN1YiA9PT0gbnVsbCkge1xuICAgICAgc2V0dXBTdWJzY3JpYmVCdXR0b24ocmVnKTtcbiAgICB9IGVsc2UgaWYgKHN1YiAhPT0gbnVsbCB8fCBzdWIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU3Vic2NyaWJlIEFscmVhZHkgRG9uZVwiKTtcbiAgICAgIC8vIHNldHVwVHJpZ2dlckJ1dHRvbihzdWIpO1xuICAgICAgZGlzYWJsZVN1YnNjcmliZUJ1dHRvbigpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBBbHBpbmUgSlMgU2NyaXB0c1xuQWxwaW5lLnBsdWdpbihpbnRlcnNlY3QpO1xuLy8gQWxwaW5lLnBsdWdpbihNYXNrKTtcblxud2luZG93LkFscGluZSA9IEFscGluZTtcbi8vIEFscGluZS5kYXRhKFwiU2lnbnVwRm9ybVwiLCBTaWdudXBGb3JtKTtcbi8vIEFscGluZS5kYXRhKFwiQ29uZmlybUVtYWlsRm9ybVwiLCBDb25maXJtRW1haWxGb3JtKTtcbi8vIEFscGluZS5kYXRhKFwiTG9naW5Gb3JtXCIsIExvZ2luRm9ybSk7XG4vLyBBbHBpbmUuZGF0YShcIlBDaGFuZ2VGb3JtXCIsIFBDaGFuZ2VGb3JtKTtcbi8vIEFscGluZS5kYXRhKFwiUmVzZXRQYXNzd29yZEZvcm1cIiwgUmVzZXRQYXNzd29yZEZvcm0pO1xuLy8gQWxwaW5lLmRhdGEoXCJTdWJzY3JpcHRpb25Gb3JtXCIsIFN1YnNjcmlwdGlvbkZvcm0pO1xuLy8gQWxwaW5lLmRhdGEoXCJHb29nbGVcIiwgR29vZ2xlKTtcbkFscGluZS5kYXRhKFwiRGVmYXVsdFwiLCBJbml0aWFsaXplKTtcbkFscGluZS5kYXRhKFwiUHJvamVjdFwiLCBQcm9qZWN0UHJvY2Vzc2luZyk7XG4vLyBBbHBpbmUuZGF0YShcIlVzZXJEZXRhaWxcIiwgVXNlckRldGFpbCk7XG4vLyBBbHBpbmUuZGF0YSgnQ29udGFjdEZvcm0nLCBDb250YWN0Rm9ybSksXG4vLyBBbHBpbmUuZGF0YSgnU3RpY2t5TmF2JywgU3RpY2t5TmF2KTtcbi8vIEFscGluZS5kYXRhKCdDaGFydEpzJywgQ2hhcnRKcyk7XG5BbHBpbmUuc3RhcnQoKTtcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVFJJR0dFUiBJTlNUQUxMIEJVVFRPTiBGT1IgUFJPR1JFU1NJVkUgV0VCIEFQUExJQ0FUSU9OXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNoZWNrIGlmIHRoZSBQV0EgaXMgYWxyZWFkeSBpbnN0YWxsZWQgb3Igbm90XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihkaXNwbGF5LW1vZGU6IHN0YW5kYWxvbmUpXCIpLm1hdGNoZXMpIHtcbiAgY29uc29sZS5sb2coXCJQV0EgaXMgYWxyZWFkeSBpbnN0YWxsZWRcIik7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZGVmZXJyZWRQcm9tcHRcIik7XG59IGVsc2Uge1xuICBjb25zb2xlLmxvZyhcIlBXQSBpcyBub3QgaW5zdGFsbGVkXCIpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZWluc3RhbGxwcm9tcHRcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwi8J+RjVtQV0FdXCIsIFwiYmVmb3JlaW5zdGFsbHByb21wdFwiLCBKU09OLnN0cmluZ2lmeShldmVudCkpO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgQ2hyb21lIDY3IGFuZCBlYXJsaWVyIGZyb20gYXV0b21hdGljYWxseSBzaG93aW5nIHRoZSBwcm9tcHRcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICAvLyBTdGFzaCB0aGUgZXZlbnQgc28gaXQgY2FuIGJlIHRyaWdnZXJlZCBsYXRlci5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGVmZXJyZWRQcm9tcHRcIiwgSlNPTi5zdHJpbmdpZnkoZXZlbnQpKTtcbiAgICAgIHdpbmRvdy5kZWZlcnJlZFByb21wdCA9IGV2ZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIShcImRlZmVycmVkUHJvbXB0XCIgaW4gbG9jYWxTdG9yYWdlKSkge1xuICAgICAgICBzZWxmLmNsb3NlSW5zdGFsbFByb21wdCA9IHRydWU7XG4gICAgICAgIHNlbGYuc2hvd0luc3RhbGxGbG9hdEljb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8vIGxvYWQgc3RhdGljIHNjcmlwdCBmaWxlcyBhZnRlciBodG14IGxvYWRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuW1xuICAvLyBcImh0bXg6b25Mb2FkXCIsXG4gIC8vIFwiaHRteDpsb2FkXCIsXG4gIC8vIFwiaHRteDphZnRlclNldHRsZVwiLFxuICBcImh0bXg6YWZ0ZXJTd2FwXCIsXG4gIC8vIFwiaHRteDphZnRlck9uTG9hZFwiLFxuXS5mb3JFYWNoKChldnQpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LmFuaW1lID0gYW5pbWU7XG4gICAgd2luZG93LnNjcm9sbE1hZ2ljID0gU2Nyb2xsTWFnaWM7XG4gICAgd2luZG93Lml6aVRvYXN0ID0gaXppVG9hc3Q7XG4gICAgLy8gLy8gaW5pdGlhbGl6ZSB0aW55bWNlXG4gICAgd2luZG93LnRpbnltY2UgPSB0aW55bWNlO1xuICAgIC8vIGluaXRpYWxpemUgbG90dGllIHdlYiBhbmQgbG90dGllIHBsYXllclxuICAgIHdpbmRvdy5sb3R0aWV3ZWIgPSBsb3R0aWV3ZWI7XG5cbiAgICAvLyBpbml0aWFsaXplIGV0aGVyIGpzIGZvciBjcnlwdG8gcGF5bWVudFxuICAgIHdpbmRvdy5ldGhlcnMgPSBldGhlcnM7XG4gICAgLy8gaW5pdGlhbGl6ZSBheGlvcyBhc3luYyBwb3N0fGdldCByZXF1ZXN0XG4gICAgd2luZG93LmF4aW9zID0gYXhpb3M7XG4gICAgLy8gaW5pdGlhbGl6ZSBzd2lwZXIuanNcbiAgICB3aW5kb3cuU3dpcGVyID0gU3dpcGVyO1xuICAgIC8vIGluaXRpYWlsaXplIGl6aXRvYXN0IGFsZXJ0c1xuXG4gICAgY29uc3QgY291bnRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvdW50ZXJcIik7XG4gICAgY29uc3QgY2FyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJcIik7XG5cbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcblxuICAgIC8vIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25zdCcpKXtcbiAgICAvLyAgIGxvdHRpZXdlYi5sb2FkQW5pbWF0aW9uKHtcbiAgICAvLyAgICAgY29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uc3QnKSxcbiAgICAvLyAgICAgcGF0aDogXCIvc3RhdGljL3ZlbmRvcnMvaW1hZ2VzL2xvdHRpZS91bmRlci1jb25zdHJ1Y3Rpb24uanNvblwiLFxuICAgIC8vICAgICByZW5kZXJlcjogJ3N2ZycsXG4gICAgLy8gICAgIGxvb3A6IHRydWUsXG4gICAgLy8gICAgIGF1dG9QbGF5OiB0cnVlLFxuICAgIC8vICAgICBuYW1lOiAnVW5kZXIgQ29uc3RydWN0aW9uJ1xuICAgIC8vICAgfSk7XG4gICAgLy8gfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRDb3VudGluZygpIHtcbiAgICAgIGlmIChjb3VudGVycykge1xuICAgICAgICBjb3VudGVycy5mb3JFYWNoKChjb3VudGVyKSA9PiB7XG4gICAgICAgICAgYW5pbWUoe1xuICAgICAgICAgICAgdGFyZ2V0czogY291bnRlcixcbiAgICAgICAgICAgIGlubmVySFRNTDogWzAsIGNvdW50ZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb3VudFwiKV0sXG4gICAgICAgICAgICBlYXNpbmc6IFwiZWFzZUluT3V0U2luZVwiLFxuICAgICAgICAgICAgcm91bmQ6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogNDAwMCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZUhvd3MoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob3dcIikpIHtcbiAgICAgICAgYW5pbWUoe1xuICAgICAgICAgIHRhcmdldHM6IFwiLmhvd1wiLFxuICAgICAgICAgIHRyYW5zbGF0ZVg6IDU2LFxuICAgICAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRTaW5lXCIsXG4gICAgICAgICAgZHVyYXRpb246IDgwMCxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIGRlbGF5OiBhbmltZS5zdGFnZ2VyKDIwMCwgeyBzdGFydDogNTAwIH0pLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudFRyaWdnZXJcIikpIHtcbiAgICAgIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG4gICAgICAgIHRyaWdnZXJFbGVtZW50OiBcIiNjb3VudFRyaWdnZXJcIixcbiAgICAgICAgdHJpZ2dlckhvb2s6IFwib25FbnRlclwiLFxuICAgICAgICBkdXJhdGlvbjogXCIxMDAlXCIsXG4gICAgICAgIHJldmVyc2U6IGZhbHNlLFxuICAgICAgICBvZmZzZXQ6IDUwLFxuICAgICAgfSlcbiAgICAgICAgLm9uKFwiZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHN0YXJ0Q291bnRpbmcoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZFRvKGNvbnRyb2xsZXIpO1xuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYWNrXCIpKSB7XG4gICAgICBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xuICAgICAgICB0cmlnZ2VyRWxlbWVudDogXCIjdHJhY2tcIixcbiAgICAgICAgdHJpZ2dlckhvb2s6IFwib25FbnRlclwiLFxuICAgICAgICBkdXJhdGlvbjogXCIxMDAlXCIsXG4gICAgICAgIHJldmVyc2U6IHRydWUsXG4gICAgICAgIG9mZnNldDogNTAsXG4gICAgICB9KVxuICAgICAgICAub24oXCJlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2FyRHJpdmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZFRvKGNvbnRyb2xsZXIpO1xuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvd3NcIikpIHtcbiAgICAgIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG4gICAgICAgIHRyaWdnZXJFbGVtZW50OiBcIiNob3dzXCIsXG4gICAgICAgIHRyaWdnZXJIb29rOiBcIm9uRW50ZXJcIixcbiAgICAgICAgZHVyYXRpb246IFwiMTAwJVwiLFxuICAgICAgICByZXZlcnNlOiBmYWxzZSxcbiAgICAgICAgb2Zmc2V0OiAxMDAsXG4gICAgICB9KVxuICAgICAgICAub24oXCJlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYW5pbWF0ZUhvd3MoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZFRvKGNvbnRyb2xsZXIpO1xuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmludHJvXCIpKSB7XG4gICAgICBhbmltZSh7XG4gICAgICAgIHRhcmdldHM6IFwiLmludHJvXCIsXG4gICAgICAgIHRyYW5zbGF0ZVg6IC01NixcbiAgICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFNpbmVcIixcbiAgICAgICAgZHVyYXRpb246IDgwMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZGVsYXk6IGFuaW1lLnN0YWdnZXIoMjAwLCB7IHN0YXJ0OiA1MDAgfSksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYXJEcml2ZSgpIHtcbiAgICAgIGlmIChjYXIpIHtcbiAgICAgICAgYW5pbWUoe1xuICAgICAgICAgIHRhcmdldHM6IFwiI2NhclwiLFxuICAgICAgICAgIHRyYW5zbGF0ZVg6IHtcbiAgICAgICAgICAgIHZhbHVlOiBcIi0xMDB2d1wiLFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlYXNpbmc6IFwiZWFzZUluT3V0U2luZVwiLFxuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgZGVsYXk6IGFuaW1lLnN0YWdnZXIoMjAwLCB7IHN0YXJ0OiA1MDAgfSksXG4gICAgICAgICAgZGlyZWN0aW9uOiBcIm5vcm1hbFwiLFxuICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vIGNvbnN0IGF4aW9zX3Nlc3Npb24gPSBheGlvcy5jcmVhdGUoe1xuLy8gICAgIHhzcmZDb29raWVOYW1lIDogJ2NzcmZ0b2tlbicsXG4vLyAgICAgeHNyZkhlYWRlck5hbWUgOiBcIlgtQ1NSRlRva2VuXCIsXG4vLyAgICAgd2l0aENyZWRlbnRpYWxzIDogdHJ1ZSxcbi8vICAgICB0aW1lb3V0IDogMTUwMDBcbi8vIH0pO1xuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbmF4aW9zLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gJ2NzcmZ0b2tlbic7XG5heGlvcy5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9IFwiWC1DU1JGVG9rZW5cIjtcbmF4aW9zLmRlZmF1bHRzLnRpbWVvdXQgPSAyNTAwMDtcblxuZXhwb3J0IGRlZmF1bHQgYXhpb3M7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IGF4aW9zIGZyb20gXCIuL2F4aW9zRmFjdG9yeVwiO1xuaW1wb3J0IGl6aVRvYXN0IGZyb20gXCJpeml0b2FzdC9kaXN0L2pzL2l6aVRvYXN0Lm1pbi5qc1wiOyAvLyB5b3UgaGF2ZSBhY2Nlc3MgdG8gaXppVG9hc3Qgbm93XG5pbXBvcnQgaHRteCBmcm9tIFwiaHRteC5vcmcvZGlzdC9odG14XCI7XG5cbmNvbnN0IGV4ZGF5cyA9IDMwICogMjQgKiA2MCAqIDYwO1xuXG4vLyBmdW5jdGlvbiB0byBzaW11bGF0ZSBzbGVlcCBvcGVyYXRpb24gb24gYW4gZXZlbnRcbmZ1bmN0aW9uIHNsZWVwKG1zKSB7XG4gIHJldHVybiBuZXcgd2luZG93LlByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuLy8gZnVuY3Rpb24gdG8gZ2V0IGNvb2tpZXMgbmFtZSBlbHNlIHJldHVybiBhbiBlbXB0eSBzdHJpbmdcbmZ1bmN0aW9uIGdldENvb2tpZShjbmFtZSkge1xuICBsZXQgbmFtZSA9IGNuYW1lICsgXCI9XCI7XG4gIGxldCBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgYyA9IGNhW2ldO1xuICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PSBcIiBcIikge1xuICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xuICAgIH1cbiAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09IDApIHtcbiAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gXCJcIjtcbn1cblxuLy8gZnVuY3Rpb24gdG8gc2V0IGEgY29va2llIHRvIGEgdmFsdWUgYW5kIHNldCBhbiBleHBpcnkgZGF0ZVxuZnVuY3Rpb24gc2V0Q29va2llKGNuYW1lLCBjdmFsdWUsIGV4ZGF5cykge1xuICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgZXhkYXlzKTtcbiAgbGV0IGV4cGlyZXMgPSBcImV4cGlyZXM9XCIgKyBkLnRvVVRDU3RyaW5nKCk7XG4gIGRvY3VtZW50LmNvb2tpZSA9XG4gICAgY25hbWUgK1xuICAgIFwiPVwiICtcbiAgICBjdmFsdWUgK1xuICAgIFwiO1wiICtcbiAgICBleHBpcmVzICtcbiAgICBcIjtwYXRoPS87IGRvbWFpbj1cIiArXG4gICAgbG9jYXRpb24uaG9zdG5hbWUgK1xuICAgIFwiOyBTYW1lU2l0ZT1TdHJpY3Q7IFNlY3VyZVwiO1xufVxuXG4vLyBmdW5jdGlvbiB0byBkZWxldGUgYSBjb29raWUgYnkgaXRzIGNvb2tpZSBuYW1lXG5mdW5jdGlvbiBkZWxldGVDb29raWUoY25hbWUpIHtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gIGQuc2V0VGltZShkLmdldFRpbWUoKSAtIDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICBsZXQgZXhwaXJlcyA9IFwiZXhwaXJlcz1cIiArIGQudG9VVENTdHJpbmcoKTtcbiAgZG9jdW1lbnQuY29va2llID0gY25hbWUgKyBcIj07XCIgKyBleHBpcmVzICsgXCI7cGF0aD0vXCI7XG59XG5cbi8vIGdldCBjb29raWUgZm9yIGFjY2VwdGVkIHBvbGljaWVzXG5jb25zdCBhY2NlcHRQcml2YWN5UG9saWN5ID0gZ2V0Q29va2llKFwiYWNjZXB0UHJpdmFjeVBvbGljeVwiKTtcbmNvbnN0IGFjY2VwdENvb2tpZVBvbGljeSA9IGdldENvb2tpZShcImFjY2VwdENvb2tpZVBvbGljeVwiKTtcbmNvbnN0IGFjY2VwdE5lY2Vzc2FyeSA9IGdldENvb2tpZShcImFjY2VwdE5lY2Vzc2FyeVwiKSB8fCB0cnVlO1xuY29uc3QgYWNjZXB0QW5hbHl0aWNzID0gZ2V0Q29va2llKFwiYWNjZXB0QW5hbHl0aWNzXCIpO1xuY29uc3QgYWNjZXB0R1BTUG9saWN5ID0gZ2V0Q29va2llKFwiYWNjZXB0R1BTUG9saWN5XCIpO1xuY29uc3QgYWNjZXB0TWFya2V0aW5nID0gZ2V0Q29va2llKFwiYWNjZXB0TWFya2V0aW5nXCIpO1xuY29uc3QgYWNjZXB0RnVuY3Rpb25hbGl0eSA9IGdldENvb2tpZShcImFjY2VwdEZ1bmN0aW9uYWxpdHlcIik7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluaXRpYWxpemUoKSB7XG4gIHJldHVybiB7XG4gICAgaXNJbmFjdGl2ZTogZmFsc2UsXG4gICAgYWN0aXZlOidhbGwnLFxuICAgIHJlYWQ6MCxcbiAgICBvcGVuOidhbGwnLFxuICAgIHVwZGF0ZU9yQ3JlYXRlOiBmYWxzZSxcbiAgICBwcm9jZXNzaW5nUmVxdWVzdDogZmFsc2UsXG5cbiAgICAvLyBuZWNlc3NhcnkgdmFyaWFibGVzXG4gICAgb3BlbkZsb2F0SWNvbjogZmFsc2UsXG4gICAgdmlld0Nvb2tpZXNMaXN0OiBmYWxzZSxcbiAgICBjbG9zZUNvb2tpZU1vZGFsOiAoXG4gICAgICBhY2NlcHRQcml2YWN5UG9saWN5ICYmXG4gICAgICBhY2NlcHRDb29raWVQb2xpY3kgJiZcbiAgICAgIGFjY2VwdE5lY2Vzc2FyeSAmJlxuICAgICAgYWNjZXB0QW5hbHl0aWNzICYmXG4gICAgICBhY2NlcHRHUFNQb2xpY3kgJiZcbiAgICAgIGFjY2VwdE1hcmtldGluZyAmJlxuICAgICAgYWNjZXB0RnVuY3Rpb25hbGl0eVxuICAgICksXG4gICAgaW5zdGFsbFByb21wdDogbnVsbCxcbiAgICBkZWZlcnJlZFByb21wdDogbnVsbCxcbiAgICBjbG9zZUluc3RhbGxQcm9tcHQ6IFwiY2xvc2VJbnN0YWxsUHJvbXB0XCIgaW4gbG9jYWxTdG9yYWdlLFxuICAgIHNob3dJbnN0YWxsRmxvYXRJY29uOiAhKFwic2hvd0luc3RhbGxGbG9hdEljb25cIiBpbiBsb2NhbFN0b3JhZ2UpLFxuICAgIGZ1bGxTY3JlZW46IGZhbHNlLFxuICAgIGRhcmtNb2RlOiBcImRhcmtNb2RlXCIgaW4gbG9jYWxTdG9yYWdlLFxuICAgIHNoYXJlYWJsZTogbnVsbCxcblxuICAgIC8vIGRldGFpbCB2YXJpYWJsZXMgZm9yIGFsbCBkZXRhaWwgdmlldyByZXF1ZXN0XG4gICAgZGV0YWlsOiBmYWxzZSxcblxuICAgIC8vIG5hdmJhciB2YXJpYWJsZXNcbiAgICBuYXZiYXJGaXhlZDogZmFsc2UsXG4gICAgcHJldk9mZnNldDogMCxcblxuICAgIC8vIGNvbnNlbnQgdmFyaWFibGVzXG4gICAgYWNjZXB0TmVjZXNzYXJ5OiBhY2NlcHROZWNlc3NhcnksXG4gICAgYWNjZXB0QW5hbHl0aWNzOiBhY2NlcHRBbmFseXRpY3MsXG4gICAgYWNjZXB0R1BTOiBhY2NlcHRHUFNQb2xpY3ksXG4gICAgYWNjZXB0TWFya2V0aW5nOiBhY2NlcHRNYXJrZXRpbmcsXG4gICAgYWNjZXB0Q29va2llUG9saWN5OiBhY2NlcHRDb29raWVQb2xpY3ksXG4gICAgYWNjZXB0UG9saWN5OiBhY2NlcHRQcml2YWN5UG9saWN5LFxuICAgIGFjY2VwdEZ1bmN0aW9uYWxpdHk6IGFjY2VwdEZ1bmN0aW9uYWxpdHksXG5cbiAgICBJbml0KCkge1xuICAgICAgLy8gZ2V0IHRoZSByZXNwb25zZSBmb3IgYSBwYWdlIGFuZCBvbiBnZXQgcmVxdWVzdCBzd2FwIHRoZSB0aXRsZSBmb3IgdGhpc1xuICAgICAgLy8gYW5kIHRoZSBkZXNjcmlwdGlvbiBtZXRhIHRhZyB3aXRoIHRoZSBkZXRhaWwgcHJlc2VudCBoZXJlXG4gICAgICAvLyB0aGlzLmh0bXhBZnRlclN3YWI7XG5cbiAgICAgIC8vIHNldCBhbiBpbml0aWFsIHN0YXRlIG9mIHRoZSBoZWFkZXIgc2VjdGlvblxuICAgICAgdGhpcy5uYXZiYXJTY3JvbGxFZmZlY3Q7XG5cbiAgICAgIC8vIGNoZWNraW5nIGlmIHRoZXJlIGlzIGEgZ2xvYmFsIHN0b3JlIHRvIGluc3RhbGwgYSBQV0FcbiAgICAgIHRoaXMuaW5zdGFsbFBXQVNldHRpbmdzO1xuXG4gICAgICAvLyBlbmFibGUgc2hhcmluZyBieSBkZWZhdWx0IGVsc2UgZGlzYWJsZSBzaGFyaW5nIG9uIGluaXRpYWwgbG9hZGluZyBvZiBhIHdlYiBwYWdlXG4gICAgICB0aGlzLnNoYXJlYWJsZVNldHRpbmdzO1xuICAgIH0sXG5cbiAgICBzY3JvbGxUb0VsZW1lbnQoaWQpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pO1xuICAgIH0sXG5cbiAgICBodG14QWZ0ZXJTd2FiKCkge1xuICAgICAgaHRteC5vbihcImh0bXg6YWZ0ZXJTd2FwXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJodG14IG9vYiBzd2FiIGV2ZW50czogXCIsIGV2dCk7XG4gICAgICAgIGlmIChldnQuZGV0YWlsLnRhcmdldC5pZCA9PT0gXCJtYWluXCIpIHtcbiAgICAgICAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGl0bGVcIik7XG4gICAgICAgICAgdmFyIGF1dGhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImF1dGhvclwiXScpO1xuICAgICAgICAgIHZhciBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImRlc2NyaXB0aW9uXCJdJyk7XG5cbiAgICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgIHZhciBuZXdUaXRsZSA9IGV2dC5kZXRhaWwudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKTtcbiAgICAgICAgICAgIGlmIChuZXdUaXRsZSkge1xuICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5ld1RpdGxlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhdXRob3IpIHtcbiAgICAgICAgICAgIHZhciBuZXdBdXRob3IgPSBldnQuZGV0YWlsLnRhcmdldC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAnbWV0YVtuYW1lPVwiYXV0aG9yXCJdJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChuZXdBdXRob3IpIHtcbiAgICAgICAgICAgICAgYXV0aG9yLnNldEF0dHJpYnV0ZShcImNvbnRlbnRcIiwgbmV3QXV0aG9yLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdmFyIG5ld0Rlc2NyaXB0aW9uID0gZXZ0LmRldGFpbC50YXJnZXQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgJ21ldGFbbmFtZT1cImRlc2NyaXB0aW9uXCJdJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgXCJjb250ZW50XCIsXG4gICAgICAgICAgICAgICAgbmV3RGVzY3JpcHRpb24uZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciB1cmwgPSBldnQuZGV0YWlsLnhoci5yZXNwb25zZVVSTDtcbiAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgXCJcIiwgdXJsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cblxuXG4gICAgbmF2YmFyU2Nyb2xsRWZmZWN0KCkge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIik7XG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuXG4gICAgICBpZiAob2Zmc2V0ID4gMiAmJiAhdGhpcy5pc05hdmJhckZpeGVkKSB7XG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwicmVsYXRpdmVcIik7XG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwiZml4ZWRcIik7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gYCR7bmF2YmFyLm9mZnNldEhlaWdodH1weGA7XG4gICAgICAgIHRoaXMuaXNOYXZiYXJGaXhlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChvZmZzZXQgPT09IDAgJiYgdGhpcy5pc05hdmJhckZpeGVkKSB7XG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwiZml4ZWRcIik7XG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwicmVsYXRpdmVcIik7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gMDtcbiAgICAgICAgdGhpcy5pc05hdmJhckZpeGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChvZmZzZXQgPiB0aGlzLnByZXZPZmZzZXQgJiYgdGhpcy5pc05hdmJhckZpeGVkKSB7XG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBjb250ZW50LnN0eWxlLm1hcmdpblRvcCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChvZmZzZXQgPCB0aGlzLnByZXZPZmZzZXQgJiYgdGhpcy5pc05hdmJhckZpeGVkKSB7XG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICBjb250ZW50LnN0eWxlLm1hcmdpblRvcCA9IGAke25hdmJhci5vZmZzZXRIZWlnaHR9cHhgO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByZXZPZmZzZXQgPSBvZmZzZXQ7XG4gICAgfSxcblxuICAgIG9wZW5EZXRhaWwodXJsKSB7XG4gICAgICAvLyBXaGVuZXZlciBhIGRldGFpbCBwYWdlIGlzIGNsaWNrZWQgdGhpcyBmaXJlcyB1cCB0byBvcGVuIGEgbW9kYWwgd2l0aCBkZXRhaWxzIGZvciB0aGUgaXRlbVxuICAgICAgbGV0IGxpbmsgPSB1cmw7XG4gICAgICBodG14LmFqYXgoXCJHRVRcIiwgbGluaywge1xuICAgICAgICB0YXJnZXQ6IFwiI2RldGFpbFwiLFxuICAgICAgICBzd2FwOiBcImlubmVySFRNTFwiLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmRldGFpbCA9IHRydWU7XG4gICAgfSxcblxuICAgIG9wZW5VcGRhdGVDcmVhdGUodXJsKSB7XG4gICAgICB0aGlzLnVwZGF0ZU9yQ3JlYXRlID0gdHJ1ZTtcbiAgICAgIGh0bXguYWpheCgnR0VUJywgdXJsLCB7XG4gICAgICAgIHRhcmdldDogXCIjdXBkYXRlT3JDcmVhdGVcIixcbiAgICAgICAgc3dhcDogXCJpbm5lckhUTUxcIixcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzaGFyZWFibGVTZXR0aW5ncygpIHtcbiAgICAgIGNvbnN0IGFjY2VwdFNvY2lhbFNoYXJlUG9saWN5ID0gXCJhY2NlcHRTb2NpYWxTaGFyZVBvbGljeVwiIGluIGxvY2FsU3RvcmFnZTtcblxuICAgICAgaWYgKHRoaXMuc2hhcmVhYmxlID09PSBudWxsICYmICFhY2NlcHRTb2NpYWxTaGFyZVBvbGljeSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY2VwdFNvY2lhbFNoYXJlUG9saWN5XCIsIFwidHJ1ZVwiKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaGFyZWFibGUgPT09IGZhbHNlICYmIGFjY2VwdFNvY2lhbFNoYXJlUG9saWN5KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYWNjZXB0U29jaWFsU2hhcmVQb2xpY3lcIik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2hhcmVhYmxlID09PSB0cnVlICYmIGFjY2VwdFNvY2lhbFNoYXJlUG9saWN5KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjZXB0U29jaWFsU2hhcmVQb2xpY3lcIiwgXCJ0cnVlXCIpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyBzaGFyZVVSTCh1cmwsIHRpdGxlKSB7XG4gICAgICAvLyBzaGFyZSBhIHVybCB1c2luZyB0aGUgSFRNTDUgV2ViIEFQSXNcbiAgICAgIGlmIChcImFjY2VwdFNvY2lhbFNoYXJlUG9saWN5XCIgaW4gbG9jYWxTdG9yYWdlKSB7XG4gICAgICAgIGlmICh0aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGl0bGUgPSBkb2N1bWVudC50aXRsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBgJHtsb2NhdGlvbi5ob3N0fSR7dXJsfWA7XG4gICAgICAgIGlmIChuYXZpZ2F0b3Iuc2hhcmUpIHtcbiAgICAgICAgICBhd2FpdCBuYXZpZ2F0b3JcbiAgICAgICAgICAgIC5zaGFyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgdGV4dDogYENoZWNrIG91dCB0aGlzIGxpbmsgZnJvbSAke1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhvc3RcbiAgICAgICAgICAgICAgfTogXFxuJHt0aXRsZS50b1VwcGVyQ2FzZSgpfS5gLFxuICAgICAgICAgICAgICB1cmw6IGxpbmssXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgIGFzeW5jICgpID0+XG4gICAgICAgICAgICAgICAgYXdhaXQgaXppVG9hc3Quc3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJbU09DSUFMIFNIQVJFXVwiLFxuICAgICAgICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYFN1Y2Nlc3NmdWxseSBzaGFyZWQ6ICR7dGl0bGUudG9VcHBlckNhc2UoKX1gLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgICAgIGFzeW5jIChlcnJvcikgPT5cbiAgICAgICAgICAgICAgICBhd2FpdCBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJbU09DSUFMIFNIQVJFIEVSUk9SXVwiLFxuICAgICAgICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbmFibGVEYXJrTW9kZSgpIHtcbiAgICAgIC8vIFdoZW5ldmVyIHRoZSB1c2VyIGV4cGxpY2l0bHkgY2hvb3NlcyBkYXJrIG1vZGVcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGFya01vZGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xuICAgICAgdGhpcy5kYXJrTW9kZSA9IHRydWU7XG4gICAgfSxcblxuICAgIGRpc2FibGVEYXJrTW9kZSgpIHtcbiAgICAgIC8vIFdoZW5ldmVyIHRoZSB1c2VyIGV4cGxpY2l0bHkgY2hvb3NlcyBsaWdodCBtb2RlXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImRhcmtNb2RlXCIpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpO1xuICAgICAgdGhpcy5kYXJrTW9kZSA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBhY2NlcHRBbGxQb2xpY2llcygpIHtcbiAgICAgIHNldENvb2tpZShcImFjY2VwdFByaXZhY3lQb2xpY3lcIiwgdHJ1ZSwgZXhkYXlzKTtcbiAgICAgIHNldENvb2tpZShcImFjY2VwdENvb2tpZVBvbGljeVwiLCB0cnVlLCBleGRheXMpO1xuICAgICAgc2V0Q29va2llKFwiYWNjZXB0TmVjZXNzYXJ5XCIsIHRydWUsIGV4ZGF5cyk7XG4gICAgICBzZXRDb29raWUoXCJhY2NlcHRBbmFseXRpY3NcIiwgdHJ1ZSwgZXhkYXlzKTtcbiAgICAgIHNldENvb2tpZShcImFjY2VwdEdQU1BvbGljeVwiLCB0cnVlLCBleGRheXMpO1xuICAgICAgc2V0Q29va2llKFwiYWNjZXB0TWFya2V0aW5nXCIsIHRydWUsIGV4ZGF5cyk7XG4gICAgICBzZXRDb29raWUoXCJhY2NlcHRGdW5jdGlvbmFsaXR5XCIsIHRydWUsIGV4ZGF5cyk7XG5cbiAgICAgIHRoaXMuY2xvc2VDb29raWVNb2RhbCA9IHRydWU7XG4gICAgfSxcblxuICAgIGluc3RhbGxQV0FTZXR0aW5ncygpIHtcbiAgICAgIGxldCBwcm9tcHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRlZmVycmVkUHJvbXB0XCIpO1xuICAgICAgbGV0IHB3YSA9IEpTT04ucGFyc2UocHJvbXB0KTtcbiAgICAgIGNvbnNvbGUubG9nKHB3YSk7XG4gICAgICBpZihwd2EgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5jbG9zZUluc3RhbGxQcm9tcHQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dJbnN0YWxsRmxvYXRJY29uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaW5zdGFsbFBXQSgpIHtcbiAgICAgIGxldCBwcm9tcHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRlZmVycmVkUHJvbXB0XCIpO1xuICAgICAgY29uc3QgcHdhID0gSlNPTi5wYXJzZShwcm9tcHQpO1xuICAgICAgLy8gdGhpcyBjbG9zZXMgdGhlIFBXQSBpbml0aWFsIHByb21wdFxuICAgICAgaWYgKHB3YSkge1xuICAgICAgICAvLyBvcGVuIHRoZSBicm93c2VyIFBXQSBpbnN0YWxsIHBvcHVwIHByb21wdFxuICAgICAgICB3aW5kb3cuZGVmZXJyZWRQcm9tcHQucHJvbXB0KCk7XG5cbiAgICAgICAgLy8gaW5zcGVjdCB3aGF0IHRoZSB1c2VyIGNob3NlIHRvIGRvIHdpdGggdGhlIGluc3RhbGwgcHJvbXB0XG4gICAgICAgIHdpbmRvdy5kZWZlcnJlZFByb21wdC51c2VyQ2hvaWNlLnRoZW4oKGNob2ljZVJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmIChjaG9pY2VSZXN1bHQub3V0Y29tZSA9PT0gXCJhY2NlcHRlZFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgYWNjZXB0ZWQgdGhlIGluc3RhbGwgcHJvbXB0XCIpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZUluc3RhbGxQcm9tcHQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zaG93SW5zdGFsbEZsb2F0SWNvbiA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgZGlzbWlzc2VkIHRoZSBpbnN0YWxsIHByb21wdFwiKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VJbnN0YWxsUHJvbXB0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0luc3RhbGxGbG9hdEljb24gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIG9uY2UgdGhlIGFwcCBpcyBpbnN0YWxsZWQgc2VuZCBhbiBhbGVydCB0aGFua2luZyB0aGVtIGFuZCBzdGF0aW5nIHRoZSBiZW5lZml0cyB0aGV5IGdldCB1c2luZyB0aGUgUFdBXG4gICAgICAvLyBsaXN0ZW4gZm9yIHRoZSBhcHAgaW5zdGFsbGVkIGxpc3RlbmVyIHRvIGtub3cgaWYgdGhlIGFwcCBoYXMgYmVlbiBpbnN0YWxsZWRcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJhcHBpbnN0YWxsZWRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCLwn5GNIFtQV0EgSU5TVEFMTEVEIFNUQVRFXTogXCIsIGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xvc2VJbnN0YWxsUHJvbXB0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93SW5zdGFsbEZsb2F0SWNvbiA9IGZhbHNlO1xuXG4gICAgICAgIGl6aVRvYXN0LmluZm8oe1xuICAgICAgICAgIHRpdGxlOiBg8J+RjSBbUFdBIElOU1RBTExFRF1gLFxuICAgICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICBcIlRoYW5rIHlvdSBmb3IgaW5zdGFsbGluZyB0aGUgd2ViIGFwcC4gVGhpcyBvZmZlcnMgeW91IG9mZmxpbmUgY2FwYWJpbGl0aWVzIHRvIHVzZSBteSBzaXRlIHdoZW4geW91IGFyZSBvdXQgb2YgZGF0YS5cIixcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIH0sXG5cbiAgICBjYW5jbGVQV0EoKSB7XG4gICAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImJlZm9yZWluc3RhbGxwcm9tcHRcIik7XG4gICAgICB0aGlzLmNsb3NlSW5zdGFsbFByb21wdCA9IHRydWU7XG4gICAgICB0aGlzLnNob3dJbnN0YWxsRmxvYXRJY29uID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgc3dpdGNoRnVsbHNjcmVlbk1vZGUoKSB7XG4gICAgICB0aGlzLmZ1bGxTY3JlZW4gPSAhdGhpcy5mdWxsU2NyZWVuO1xuICAgICAgaWYgKFxuICAgICAgICBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCB8fFxuICAgICAgICBkb2N1bWVudC5tb3pGdWxsU2NyZWVuRWxlbWVudCB8fFxuICAgICAgICBkb2N1bWVudC5tc0Z1bGxTY3JlZW5FbGVtZW50IHx8XG4gICAgICAgIGRvY3VtZW50LndlYmtpdEZ1bGxTY3JlZW5FbGVtZW50XG4gICAgICApIHtcbiAgICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJmdWxsc2NyZWVuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZnVsbHNjcmVlblwiLCBcInRydWVcIik7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tIFwiLi9heGlvc0ZhY3RvcnlcIjtcbmltcG9ydCBpemlUb2FzdCBmcm9tIFwiaXppdG9hc3QvZGlzdC9qcy9pemlUb2FzdC5taW4uanNcIjsgLy8geW91IGhhdmUgYWNjZXNzIHRvIGl6aVRvYXN0IG5vd1xuaW1wb3J0IGh0bXggZnJvbSBcImh0bXgub3JnL2Rpc3QvaHRteFwiO1xuXG5pbXBvcnQgSW5pdGlhbGl6ZSBmcm9tIFwiLi9kZWZhdWx0XCI7XG5cbmNvbnN0IHByb2dyZXNzYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc1wiKTtcbmNvbnN0IHByb2dyYXNzQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc0xhYmVsXCIpO1xuXG4vLyBmdW5jdGlvbiB0byBzaW11bGF0ZSBzbGVlcCBvcGVyYXRpb24gb24gYW4gZXZlbnRcbmZ1bmN0aW9uIHNsZWVwKG1zKSB7XG4gICAgcmV0dXJuIG5ldyB3aW5kb3cuUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RQcm9jZXNzaW5nKCkge1xuICAgIHJldHVybiB7XG5cbiAgICAgICAgcHJqZWN0UHJvY2Vzc2luZzogZmFsc2UsXG5cbiAgICAgICAgYXN5bmMgc3VibWl0UHJvamVjdCgpIHtcbiAgICAgICAgICAgIHRoaXMucHJqZWN0UHJvY2Vzc2luZyA9IHRydWU7XG4gICAgICAgICAgICBJbml0aWFsaXplLnByb2Nlc3NpbmdSZXF1ZXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHByb2dyZXNzYmFyLnZhbHVlID0gMDtcbiAgICAgICAgICAgIHByb2dyYXNzQW1vdW50LmlubmVyVGV4dCA9ICcwJSc7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gdGhpcy4kcmVmcy5mb3JtO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gZm9ybUVsZW1lbnQuYWN0aW9uO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUVsZW1lbnQpO1xuXG4gICAgICAgICAgICBhd2FpdCBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWVdXCIpLmZvckVhY2goKGZpZWxkRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGZpZWxkRWxlbWVudC5uYW1lID09PSBcImlzX3B1Ymxpc2hlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZEVsZW1lbnQudmFsdWUgPT09ICdvbicpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoZmllbGRFbGVtZW50Lm5hbWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoZmllbGRFbGVtZW50Lm5hbWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGRFbGVtZW50LnR5cGUgPT09IFwidGV4dGFyZWFcIikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dGFyZWEgPSBmaWVsZEVsZW1lbnQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRWxlbWVudC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wYXJlbnQudGlueW1jZS5nZXQodGV4dGFyZWEpLmdldENvbnRlbnQoKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKGZpZWxkRWxlbWVudC5uYW1lLCBmaWVsZEVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLmRpcihkYXRhKTtcblxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdChhY3Rpb24sIGRhdGEpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCB0YXNrX2lkID0gcmVzcG9uc2UuZGF0YS50YXNrX2lkO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGNhY2hlX2tleSA9IHJlc3BvbnNlLmRhdGEuY2FjaGVfa2V5O1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG1lc3NhZ2UgPSByZXNwb25zZS5kYXRhLm1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpe1xuICAgICAgICAgICAgICAgICAgICBpemlUb2FzdC5zdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlBST0pFQ1QgQURERURcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUHJvamVjdCBTdWNjZXNzZnVsbHkgQWRkZWRcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcmplY3RQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzYmFyLnZhbHVlID0gMTAwO1xuICAgICAgICAgICAgICAgICAgICBwcm9ncmFzc0Ftb3VudC5pbm5lclRleHQgPSAnMTAwJSc7XG4gICAgICAgICAgICAgICAgICAgIEluaXRpYWxpemUucHJvY2Vzc2luZ1JlcXVlc3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jaGVja1N0YXR1cyh0YXNrX2lkLCBjYWNoZV9rZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJQUk9KRUNUIFVQTE9BRElORyBGQUlMRURcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMucHJqZWN0UHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSxcblxuXG4gICAgICAgIGFzeW5jIGNoZWNrU3RhdHVzKHRhc2tfaWQsIGNhY2hlX2tleSkge1xuICAgICAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2plY3RzL2NoZWNrLXByb2Nlc3NpbmcvJHt0YXNrX2lkfS8ke2NhY2hlX2tleX0vYClcbiAgICAgICAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc2Jhci52YWx1ZSA9IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jhc3NBbW91bnQuaW5uZXJUZXh0ID0gJzEwMCUnO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCg1MDApO1xuICAgICAgICAgICAgICAgICAgICBJbml0aWFsaXplLnByb2Nlc3NpbmdSZXF1ZXN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGl6aVRvYXN0LnN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUFJPSkVDVCBQUk9DRVNTSU5HXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGh0bXguYWpheChcbiAgICAgICAgICAgICAgICAgICAgICAgICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYC9wcm9qZWN0cy8ke3Jlc3BvbnNlLmRhdGEub2JqZWN0LnNsdWd9L2AsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIiNkZXRhaWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FwOiBcImlubmVySFRNTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBJbml0aWFsaXplLmRldGFpbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NiYXIudmFsdWUgKys7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyYXNzQW1vdW50LmlubmVyVGV4dCA9IGAke3Byb2dyZXNzYmFyLnZhbHVlfSVgO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3RhdHVzKHRhc2tfaWQsIGNhY2hlX2tleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBJbml0aWFsaXplLnByb2Nlc3NpbmdSZXF1ZXN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJQUk9KRUNUIFBST0NFU1NJTkcgRkFJTEVEXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnByamVjdFByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsidGlueW1jZSIsImF4aW9zIiwiSW5pdGlhbGl6ZSIsIlByb2plY3RQcm9jZXNzaW5nIiwiZGV0ZWN0IiwiU3dpcGVyIiwiaHRteCIsIkFscGluZSIsImludGVyc2VjdCIsImV0aGVycyIsInRvYXN0ciIsIml6aVRvYXN0IiwiYW5pbWUiLCJTY3JvbGxNYWdpYyIsImxvdHRpZXdlYiIsIndpbmRvdyIsInRpbWVyIiwicmVzZXRUaW1lciIsImNsZWFyVGltZW91dCIsInN0b3JlIiwic3RhcnRUaW1lb3V0Iiwic2V0VGltZW91dCIsInRpbWVvdXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdyIsImhvbWUiLCJicm93c2VyIiwiQVBQTElDQVRJT05fU0VSVkVSX0tFWSIsIkNSRUFURV9XUF9ERVZJQ0UiLCJTRU5EX05PVElGSUNBVElPTiIsIldFQl9QVVNIX0NGRyIsInVybEJhc2U2NFRvVWludDhBcnJheSIsImJhc2U2NFN0cmluZyIsInBhZGRpbmciLCJyZXBlYXQiLCJsZW5ndGgiLCJiYXNlNjQiLCJyZXBsYWNlIiwicmF3RGF0YSIsImF0b2IiLCJvdXRwdXRBcnJheSIsIlVpbnQ4QXJyYXkiLCJpIiwiY2hhckNvZGVBdCIsInNhdmVTdWJzY3JpYmVPYmoiLCJzdWJzY3JpcHRpb24iLCJzdWJzY3JpcHRpb25Kc29uIiwidG9KU09OIiwiZW5kcG9pbnRQYXJ0cyIsImVuZHBvaW50Iiwic3BsaXQiLCJyZWdpc3RyYXRpb25JZCIsInByZWRhdGEiLCJzdGF0dXNfdHlwZSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsInAyNTZkaCIsImtleXMiLCJhdXRoIiwidXNlcl9hZ2VudCIsIm5hdmlnYXRvciIsImdldFVzZXJBZ2VudCIsInJlZ2lzdHJhdGlvbl9pZCIsImdyb3VwIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0IiwiaGVhZGVycyIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwidGhlbiIsInJlc3BvbnNlIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwic3VjY2VzcyIsInRpdGxlIiwiYmFsbG9vbiIsInBvc2l0aW9uIiwiYW5pbWF0ZUluc2lkZSIsIm1lc3NhZ2UiLCJzdGF0dXNUZXh0Iiwic3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzZXR1cFRyaWdnZXJCdXR0b24iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN1YnNjcmliZSIsInJlZ2lzdHJhdGlvbiIsInB1c2hNYW5hZ2VyIiwiZ2V0U3Vic2NyaXB0aW9uIiwib3B0aW9ucyIsInVzZXJWaXNpYmxlT25seSIsImFwcGxpY2F0aW9uU2VydmVyS2V5Iiwic2V0dXBTdWJzY3JpYmVCdXR0b24iLCJyZWciLCJkaXNhYmxlU3Vic2NyaWJlQnV0dG9uIiwic3ViSnNvbiIsImJvZHkiLCJpbmZvIiwiZGV0YWlsIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwic2NvcGUiLCJyZWFkeSIsImFzeW5jIiwiaW5pdGlhbGlzZVN0YXRlIiwiaW5zdGFsbGluZyIsIndhaXRpbmciLCJhY3RpdmUiLCJlcnIiLCJzaG93Tm90aWZpY2F0aW9uIiwiTm90aWZpY2F0aW9uIiwicGVybWlzc2lvbiIsIndhcm5pbmciLCJzdWIiLCJwbHVnaW4iLCJzdGFydCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRJdGVtIiwiZGVmZXJyZWRQcm9tcHQiLCJzZWxmIiwiY2xvc2VJbnN0YWxsUHJvbXB0Iiwic2hvd0luc3RhbGxGbG9hdEljb24iLCJmb3JFYWNoIiwiZXZ0Iiwic2Nyb2xsTWFnaWMiLCJjb3VudGVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYXIiLCJjb250cm9sbGVyIiwiQ29udHJvbGxlciIsInN0YXJ0Q291bnRpbmciLCJjb3VudGVyIiwidGFyZ2V0cyIsImlubmVySFRNTCIsImVhc2luZyIsInJvdW5kIiwiZHVyYXRpb24iLCJhbmltYXRlSG93cyIsInRyYW5zbGF0ZVgiLCJvcGFjaXR5IiwiZGVsYXkiLCJzdGFnZ2VyIiwiU2NlbmUiLCJ0cmlnZ2VyRWxlbWVudCIsInRyaWdnZXJIb29rIiwicmV2ZXJzZSIsIm9mZnNldCIsIm9uIiwiYWRkVG8iLCJjYXJEcml2ZSIsInZhbHVlIiwiZGlyZWN0aW9uIiwibG9vcCIsImRlZmF1bHRzIiwid2l0aENyZWRlbnRpYWxzIiwieHNyZkNvb2tpZU5hbWUiLCJ4c3JmSGVhZGVyTmFtZSIsImV4ZGF5cyIsInNsZWVwIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsImdldENvb2tpZSIsImNuYW1lIiwiY2EiLCJjb29raWUiLCJjIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsInNldENvb2tpZSIsImN2YWx1ZSIsImQiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJleHBpcmVzIiwidG9VVENTdHJpbmciLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwiZGVsZXRlQ29va2llIiwiYWNjZXB0UHJpdmFjeVBvbGljeSIsImFjY2VwdENvb2tpZVBvbGljeSIsImFjY2VwdE5lY2Vzc2FyeSIsImFjY2VwdEFuYWx5dGljcyIsImFjY2VwdEdQU1BvbGljeSIsImFjY2VwdE1hcmtldGluZyIsImFjY2VwdEZ1bmN0aW9uYWxpdHkiLCJpc0luYWN0aXZlIiwicmVhZCIsIm9wZW4iLCJ1cGRhdGVPckNyZWF0ZSIsInByb2Nlc3NpbmdSZXF1ZXN0Iiwib3BlbkZsb2F0SWNvbiIsInZpZXdDb29raWVzTGlzdCIsImNsb3NlQ29va2llTW9kYWwiLCJpbnN0YWxsUHJvbXB0IiwiZnVsbFNjcmVlbiIsImRhcmtNb2RlIiwic2hhcmVhYmxlIiwibmF2YmFyRml4ZWQiLCJwcmV2T2Zmc2V0IiwiYWNjZXB0R1BTIiwiYWNjZXB0UG9saWN5IiwiSW5pdCIsIm5hdmJhclNjcm9sbEVmZmVjdCIsImluc3RhbGxQV0FTZXR0aW5ncyIsInNoYXJlYWJsZVNldHRpbmdzIiwic2Nyb2xsVG9FbGVtZW50IiwiaWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiaHRteEFmdGVyU3dhYiIsInRhcmdldCIsImF1dGhvciIsImRlc2NyaXB0aW9uIiwibmV3VGl0bGUiLCJ0ZXh0Q29udGVudCIsIm5ld0F1dGhvciIsInNldEF0dHJpYnV0ZSIsIm5ld0Rlc2NyaXB0aW9uIiwidXJsIiwieGhyIiwicmVzcG9uc2VVUkwiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwicGFnZVlPZmZzZXQiLCJuYXZiYXIiLCJjb250ZW50IiwiaXNOYXZiYXJGaXhlZCIsInJlbW92ZSIsImFkZCIsInN0eWxlIiwibWFyZ2luVG9wIiwib2Zmc2V0SGVpZ2h0Iiwib3BlbkRldGFpbCIsImxpbmsiLCJhamF4Iiwic3dhcCIsIm9wZW5VcGRhdGVDcmVhdGUiLCJhY2NlcHRTb2NpYWxTaGFyZVBvbGljeSIsInNoYXJlVVJMIiwidW5kZWZpbmVkIiwiaG9zdCIsInNoYXJlIiwidGV4dCIsInRvVXBwZXJDYXNlIiwiZW5hYmxlRGFya01vZGUiLCJkb2N1bWVudEVsZW1lbnQiLCJkaXNhYmxlRGFya01vZGUiLCJhY2NlcHRBbGxQb2xpY2llcyIsInByb21wdCIsImdldEl0ZW0iLCJwd2EiLCJwYXJzZSIsImluc3RhbGxQV0EiLCJ1c2VyQ2hvaWNlIiwiY2hvaWNlUmVzdWx0Iiwib3V0Y29tZSIsImNhbmNsZVBXQSIsInN3aXRjaEZ1bGxzY3JlZW5Nb2RlIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJtb3pGdWxsU2NyZWVuRWxlbWVudCIsIm1zRnVsbFNjcmVlbkVsZW1lbnQiLCJ3ZWJraXRGdWxsU2NyZWVuRWxlbWVudCIsImV4aXRGdWxsc2NyZWVuIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJwcm9ncmVzc2JhciIsInByb2dyYXNzQW1vdW50IiwicHJqZWN0UHJvY2Vzc2luZyIsInN1Ym1pdFByb2plY3QiLCJpbm5lclRleHQiLCJmb3JtRWxlbWVudCIsIiRyZWZzIiwiZm9ybSIsImFjdGlvbiIsIkZvcm1EYXRhIiwiZmllbGRFbGVtZW50IiwiYXBwZW5kIiwidHlwZSIsInRleHRhcmVhIiwicGFyZW50IiwiZ2V0IiwiZ2V0Q29udGVudCIsImRpciIsInN0YXR1cyIsImNoZWNrU3RhdHVzIiwidGFza19pZCIsImNhY2hlX2tleSIsIm9iamVjdCIsInNsdWciXSwic291cmNlUm9vdCI6IiJ9