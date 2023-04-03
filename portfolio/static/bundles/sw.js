/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/workbox-cacheable-response/CacheableResponse.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-cacheable-response/CacheableResponse.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheableResponse": () => (/* binding */ CacheableResponse)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-cacheable-response/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * This class allows you to set up rules determining what
 * status codes and/or headers need to be present in order for a
 * [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)
 * to be considered cacheable.
 *
 * @memberof workbox-cacheable-response
 */
class CacheableResponse {
  /**
   * To construct a new CacheableResponse instance you must provide at least
   * one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(config = {}) {
    if (true) {
      if (!(config.statuses || config.headers)) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('statuses-or-headers-required', {
          moduleName: 'workbox-cacheable-response',
          className: 'CacheableResponse',
          funcName: 'constructor'
        });
      }
      if (config.statuses) {
        workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(config.statuses, {
          moduleName: 'workbox-cacheable-response',
          className: 'CacheableResponse',
          funcName: 'constructor',
          paramName: 'config.statuses'
        });
      }
      if (config.headers) {
        workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(config.headers, 'object', {
          moduleName: 'workbox-cacheable-response',
          className: 'CacheableResponse',
          funcName: 'constructor',
          paramName: 'config.headers'
        });
      }
    }
    this._statuses = config.statuses;
    this._headers = config.headers;
  }
  /**
   * Checks a response to see whether it's cacheable or not, based on this
   * object's configuration.
   *
   * @param {Response} response The response whose cacheability is being
   * checked.
   * @return {boolean} `true` if the `Response` is cacheable, and `false`
   * otherwise.
   */
  isResponseCacheable(response) {
    if (true) {
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(response, Response, {
        moduleName: 'workbox-cacheable-response',
        className: 'CacheableResponse',
        funcName: 'isResponseCacheable',
        paramName: 'response'
      });
    }
    let cacheable = true;
    if (this._statuses) {
      cacheable = this._statuses.includes(response.status);
    }
    if (this._headers && cacheable) {
      cacheable = Object.keys(this._headers).some(headerName => {
        return response.headers.get(headerName) === this._headers[headerName];
      });
    }
    if (true) {
      if (!cacheable) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`The request for ` + `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(response.url)}' returned a response that does ` + `not meet the criteria for being cached.`);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View cacheability criteria here.`);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Cacheable statuses: ` + JSON.stringify(this._statuses));
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Cacheable headers: ` + JSON.stringify(this._headers, null, 2));
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        const logFriendlyHeaders = {};
        response.headers.forEach((value, key) => {
          logFriendlyHeaders[key] = value;
        });
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response status and headers here.`);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Response status: ${response.status}`);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Response headers: ` + JSON.stringify(logFriendlyHeaders, null, 2));
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View full response details here.`);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response.headers);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
      }
    }
    return cacheable;
  }
}


/***/ }),

/***/ "./node_modules/workbox-cacheable-response/CacheableResponsePlugin.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-cacheable-response/CacheableResponsePlugin.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheableResponsePlugin": () => (/* binding */ CacheableResponsePlugin)
/* harmony export */ });
/* harmony import */ var _CacheableResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheableResponse.js */ "./node_modules/workbox-cacheable-response/CacheableResponse.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-cacheable-response/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * A class implementing the `cacheWillUpdate` lifecycle callback. This makes it
 * easier to add in cacheability checks to requests made via Workbox's built-in
 * strategies.
 *
 * @memberof workbox-cacheable-response
 */
class CacheableResponsePlugin {
  /**
   * To construct a new CacheableResponsePlugin instance you must provide at
   * least one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(config) {
    /**
     * @param {Object} options
     * @param {Response} options.response
     * @return {Response|null}
     * @private
     */
    this.cacheWillUpdate = async ({
      response
    }) => {
      if (this._cacheableResponse.isResponseCacheable(response)) {
        return response;
      }
      return null;
    };
    this._cacheableResponse = new _CacheableResponse_js__WEBPACK_IMPORTED_MODULE_0__.CacheableResponse(config);
  }
}


/***/ }),

/***/ "./node_modules/workbox-cacheable-response/_version.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-cacheable-response/_version.js ***!
  \*************************************************************/
/***/ (() => {



// @ts-ignore
try {
  self['workbox:cacheable-response:6.5.3'] && _();
} catch (e) {}

/***/ }),

/***/ "./node_modules/workbox-cacheable-response/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-cacheable-response/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheableResponse": () => (/* reexport safe */ _CacheableResponse_js__WEBPACK_IMPORTED_MODULE_0__.CacheableResponse),
/* harmony export */   "CacheableResponsePlugin": () => (/* reexport safe */ _CacheableResponsePlugin_js__WEBPACK_IMPORTED_MODULE_1__.CacheableResponsePlugin)
/* harmony export */ });
/* harmony import */ var _CacheableResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheableResponse.js */ "./node_modules/workbox-cacheable-response/CacheableResponse.js");
/* harmony import */ var _CacheableResponsePlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CacheableResponsePlugin.js */ "./node_modules/workbox-cacheable-response/CacheableResponsePlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-cacheable-response/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * @module workbox-cacheable-response
 */


/***/ }),

/***/ "./node_modules/workbox-core/_private/Deferred.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-core/_private/Deferred.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deferred": () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/WorkboxError.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/WorkboxError.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkboxError": () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(errorCode, details) {
    const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
    super(message);
    this.name = errorCode;
    this.details = details;
  }
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/assert.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/assert.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
  if (!Array.isArray(value)) {
    throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
  }
};
const hasMethod = (object, expectedMethod, details) => {
  const type = typeof object[expectedMethod];
  if (type !== 'function') {
    details['expectedMethod'] = expectedMethod;
    throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
  }
};
const isType = (object, expectedType, details) => {
  if (typeof object !== expectedType) {
    details['expectedType'] = expectedType;
    throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
  }
};
const isInstance = (object,
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
  if (!(object instanceof expectedClass)) {
    details['expectedClassName'] = expectedClass.name;
    throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
  }
};
const isOneOf = (value, validValues, details) => {
  if (!validValues.includes(value)) {
    details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
    throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
  }
};
const isArrayOfClass = (value,
// Need general type to do check later.
expectedClass,
// eslint-disable-line
details) => {
  const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
  if (!Array.isArray(value)) {
    throw error;
  }
  for (const item of value) {
    if (!(item instanceof expectedClass)) {
      throw error;
    }
  }
};
const finalAssertExports =  false ? 0 : {
  hasMethod,
  isArray,
  isInstance,
  isOneOf,
  isType,
  isArrayOfClass
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheMatchIgnoreParams": () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
  const strippedURL = new URL(fullURL);
  for (const param of ignoreParams) {
    strippedURL.searchParams.delete(param);
  }
  return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
  const strippedRequestURL = stripParams(request.url, ignoreParams);
  // If the request doesn't include any ignored params, match as normal.
  if (request.url === strippedRequestURL) {
    return cache.match(request, matchOptions);
  }
  // Otherwise, match by comparing keys
  const keysOptions = Object.assign(Object.assign({}, matchOptions), {
    ignoreSearch: true
  });
  const cacheKeys = await cache.keys(request, keysOptions);
  for (const cacheKey of cacheKeys) {
    const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
    if (strippedRequestURL === strippedCacheKeyURL) {
      return cache.match(cacheKey, matchOptions);
    }
  }
  return;
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheNames.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheNames.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheNames": () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
  googleAnalytics: 'googleAnalytics',
  precache: 'precache-v2',
  prefix: 'workbox',
  runtime: 'runtime',
  suffix: typeof registration !== 'undefined' ? registration.scope : ''
};
const _createCacheName = cacheName => {
  return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix].filter(value => value && value.length > 0).join('-');
};
const eachCacheNameDetail = fn => {
  for (const key of Object.keys(_cacheNameDetails)) {
    fn(key);
  }
};
const cacheNames = {
  updateDetails: details => {
    eachCacheNameDetail(key => {
      if (typeof details[key] === 'string') {
        _cacheNameDetails[key] = details[key];
      }
    });
  },
  getGoogleAnalyticsName: userCacheName => {
    return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
  },
  getPrecacheName: userCacheName => {
    return userCacheName || _createCacheName(_cacheNameDetails.precache);
  },
  getPrefix: () => {
    return _cacheNameDetails.prefix;
  },
  getRuntimeName: userCacheName => {
    return userCacheName || _createCacheName(_cacheNameDetails.runtime);
  },
  getSuffix: () => {
    return _cacheNameDetails.suffix;
  }
};

/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canConstructResponseFromBodyStream": () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
  if (supportStatus === undefined) {
    const testResponse = new Response('');
    if ('body' in testResponse) {
      try {
        new Response(testResponse.body);
        supportStatus = true;
      } catch (error) {
        supportStatus = false;
      }
    }
    supportStatus = false;
  }
  return supportStatus;
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/dontWaitFor.js":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-core/_private/dontWaitFor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dontWaitFor": () => (/* binding */ dontWaitFor)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A helper function that prevents a promise from being flagged as unused.
 *
 * @private
 **/
function dontWaitFor(promise) {
  // Effective no-op.
  void promise.then(() => {});
}

/***/ }),

/***/ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeQuotaErrorCallbacks": () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
  if (true) {
    _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` + `callbacks to clean up caches.`);
  }
  for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
    await callback();
    if (true) {
      _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
    }
  }
  if (true) {
    _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
  }
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/getFriendlyURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFriendlyURL": () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = url => {
  const urlObj = new URL(String(url), location.href);
  // See https://github.com/GoogleChrome/workbox/issues/2323
  // We want to include everything, except for the origin if it's same-origin.
  return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/logger.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger =  false ? 0 : (() => {
  // Don't overwrite this value if it's already set.
  // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
  if (!('__WB_DISABLE_DEV_LOGS' in self)) {
    self.__WB_DISABLE_DEV_LOGS = false;
  }
  let inGroup = false;
  const methodToColorMap = {
    debug: `#7f8c8d`,
    log: `#2ecc71`,
    warn: `#f39c12`,
    error: `#c0392b`,
    groupCollapsed: `#3498db`,
    groupEnd: null // No colored prefix on groupEnd
  };

  const print = function (method, args) {
    if (self.__WB_DISABLE_DEV_LOGS) {
      return;
    }
    if (method === 'groupCollapsed') {
      // Safari doesn't print all console.groupCollapsed() arguments:
      // https://bugs.webkit.org/show_bug.cgi?id=182754
      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        console[method](...args);
        return;
      }
    }
    const styles = [`background: ${methodToColorMap[method]}`, `border-radius: 0.5em`, `color: white`, `font-weight: bold`, `padding: 2px 0.5em`];
    // When in a group, the workbox prefix is not displayed.
    const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
    console[method](...logPrefix, ...args);
    if (method === 'groupCollapsed') {
      inGroup = true;
    }
    if (method === 'groupEnd') {
      inGroup = false;
    }
  };
  // eslint-disable-next-line @typescript-eslint/ban-types
  const api = {};
  const loggerMethods = Object.keys(methodToColorMap);
  for (const key of loggerMethods) {
    const method = key;
    api[method] = (...args) => {
      print(method, args);
    };
  }
  return api;
})();


/***/ }),

/***/ "./node_modules/workbox-core/_private/timeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-core/_private/timeout.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeout": () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/***/ }),

/***/ "./node_modules/workbox-core/_private/waitUntil.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-core/_private/waitUntil.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitUntil": () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
  const returnPromise = asyncFn();
  event.waitUntil(returnPromise);
  return returnPromise;
}


/***/ }),

/***/ "./node_modules/workbox-core/_version.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_version.js ***!
  \***********************************************/
/***/ (() => {



// @ts-ignore
try {
  self['workbox:core:6.5.3'] && _();
} catch (e) {}

/***/ }),

/***/ "./node_modules/workbox-core/copyResponse.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/copyResponse.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyResponse": () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
  let origin = null;
  // If response.url isn't set, assume it's cross-origin and keep origin null.
  if (response.url) {
    const responseURL = new URL(response.url);
    origin = responseURL.origin;
  }
  if (origin !== self.location.origin) {
    throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', {
      origin
    });
  }
  const clonedResponse = response.clone();
  // Create a fresh `ResponseInit` object by cloning the headers.
  const responseInit = {
    headers: new Headers(clonedResponse.headers),
    status: clonedResponse.status,
    statusText: clonedResponse.statusText
  };
  // Apply any user modifications.
  const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
  // Create the new response from the body stream and `ResponseInit`
  // modifications. Note: not all browsers support the Response.body stream,
  // so fall back to reading the entire body into memory as a blob.
  const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)() ? clonedResponse.body : await clonedResponse.blob();
  return new Response(body, modifiedResponseInit);
}


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messageGenerator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messageGenerator": () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
  let msg = code;
  if (args.length > 0) {
    msg += ` :: ${JSON.stringify(args)}`;
  }
  return msg;
};
const generatorFunction = (code, details = {}) => {
  const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
  if (!message) {
    throw new Error(`Unable to find message for code '${code}'.`);
  }
  return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;

/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messages.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messages.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
  'invalid-value': ({
    paramName,
    validValueDescription,
    value
  }) => {
    if (!paramName || !validValueDescription) {
      throw new Error(`Unexpected input to 'invalid-value' error.`);
    }
    return `The '${paramName}' parameter was given a value with an ` + `unexpected value. ${validValueDescription} Received a value of ` + `${JSON.stringify(value)}.`;
  },
  'not-an-array': ({
    moduleName,
    className,
    funcName,
    paramName
  }) => {
    if (!moduleName || !className || !funcName || !paramName) {
      throw new Error(`Unexpected input to 'not-an-array' error.`);
    }
    return `The parameter '${paramName}' passed into ` + `'${moduleName}.${className}.${funcName}()' must be an array.`;
  },
  'incorrect-type': ({
    expectedType,
    paramName,
    moduleName,
    className,
    funcName
  }) => {
    if (!expectedType || !paramName || !moduleName || !funcName) {
      throw new Error(`Unexpected input to 'incorrect-type' error.`);
    }
    const classNameStr = className ? `${className}.` : '';
    return `The parameter '${paramName}' passed into ` + `'${moduleName}.${classNameStr}` + `${funcName}()' must be of type ${expectedType}.`;
  },
  'incorrect-class': ({
    expectedClassName,
    paramName,
    moduleName,
    className,
    funcName,
    isReturnValueProblem
  }) => {
    if (!expectedClassName || !moduleName || !funcName) {
      throw new Error(`Unexpected input to 'incorrect-class' error.`);
    }
    const classNameStr = className ? `${className}.` : '';
    if (isReturnValueProblem) {
      return `The return value from ` + `'${moduleName}.${classNameStr}${funcName}()' ` + `must be an instance of class ${expectedClassName}.`;
    }
    return `The parameter '${paramName}' passed into ` + `'${moduleName}.${classNameStr}${funcName}()' ` + `must be an instance of class ${expectedClassName}.`;
  },
  'missing-a-method': ({
    expectedMethod,
    paramName,
    moduleName,
    className,
    funcName
  }) => {
    if (!expectedMethod || !paramName || !moduleName || !className || !funcName) {
      throw new Error(`Unexpected input to 'missing-a-method' error.`);
    }
    return `${moduleName}.${className}.${funcName}() expected the ` + `'${paramName}' parameter to expose a '${expectedMethod}' method.`;
  },
  'add-to-cache-list-unexpected-type': ({
    entry
  }) => {
    return `An unexpected entry was passed to ` + `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` + `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` + `strings with one or more characters, objects with a url property or ` + `Request objects.`;
  },
  'add-to-cache-list-conflicting-entries': ({
    firstEntry,
    secondEntry
  }) => {
    if (!firstEntry || !secondEntry) {
      throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
    }
    return `Two of the entries passed to ` + `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` + `${firstEntry} but different revision details. Workbox is ` + `unable to cache and version the asset correctly. Please remove one ` + `of the entries.`;
  },
  'plugin-error-request-will-fetch': ({
    thrownErrorMessage
  }) => {
    if (!thrownErrorMessage) {
      throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
    }
    return `An error was thrown by a plugins 'requestWillFetch()' method. ` + `The thrown error message was: '${thrownErrorMessage}'.`;
  },
  'invalid-cache-name': ({
    cacheNameId,
    value
  }) => {
    if (!cacheNameId) {
      throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
    }
    return `You must provide a name containing at least one character for ` + `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` + `'${JSON.stringify(value)}'`;
  },
  'unregister-route-but-not-found-with-method': ({
    method
  }) => {
    if (!method) {
      throw new Error(`Unexpected input to ` + `'unregister-route-but-not-found-with-method' error.`);
    }
    return `The route you're trying to unregister was not  previously ` + `registered for the method type '${method}'.`;
  },
  'unregister-route-route-not-registered': () => {
    return `The route you're trying to unregister was not previously ` + `registered.`;
  },
  'queue-replay-failed': ({
    name
  }) => {
    return `Replaying the background sync queue '${name}' failed.`;
  },
  'duplicate-queue-name': ({
    name
  }) => {
    return `The Queue name '${name}' is already being used. ` + `All instances of backgroundSync.Queue must be given unique names.`;
  },
  'expired-test-without-max-age': ({
    methodName,
    paramName
  }) => {
    return `The '${methodName}()' method can only be used when the ` + `'${paramName}' is used in the constructor.`;
  },
  'unsupported-route-type': ({
    moduleName,
    className,
    funcName,
    paramName
  }) => {
    return `The supplied '${paramName}' parameter was an unsupported type. ` + `Please check the docs for ${moduleName}.${className}.${funcName} for ` + `valid input types.`;
  },
  'not-array-of-class': ({
    value,
    expectedClass,
    moduleName,
    className,
    funcName,
    paramName
  }) => {
    return `The supplied '${paramName}' parameter must be an array of ` + `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` + `Please check the call to ${moduleName}.${className}.${funcName}() ` + `to fix the issue.`;
  },
  'max-entries-or-age-required': ({
    moduleName,
    className,
    funcName
  }) => {
    return `You must define either config.maxEntries or config.maxAgeSeconds` + `in ${moduleName}.${className}.${funcName}`;
  },
  'statuses-or-headers-required': ({
    moduleName,
    className,
    funcName
  }) => {
    return `You must define either config.statuses or config.headers` + `in ${moduleName}.${className}.${funcName}`;
  },
  'invalid-string': ({
    moduleName,
    funcName,
    paramName
  }) => {
    if (!paramName || !moduleName || !funcName) {
      throw new Error(`Unexpected input to 'invalid-string' error.`);
    }
    return `When using strings, the '${paramName}' parameter must start with ` + `'http' (for cross-origin matches) or '/' (for same-origin matches). ` + `Please see the docs for ${moduleName}.${funcName}() for ` + `more info.`;
  },
  'channel-name-required': () => {
    return `You must provide a channelName to construct a ` + `BroadcastCacheUpdate instance.`;
  },
  'invalid-responses-are-same-args': () => {
    return `The arguments passed into responsesAreSame() appear to be ` + `invalid. Please ensure valid Responses are used.`;
  },
  'expire-custom-caches-only': () => {
    return `You must provide a 'cacheName' property when using the ` + `expiration plugin with a runtime caching strategy.`;
  },
  'unit-must-be-bytes': ({
    normalizedRangeHeader
  }) => {
    if (!normalizedRangeHeader) {
      throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
    }
    return `The 'unit' portion of the Range header must be set to 'bytes'. ` + `The Range header provided was "${normalizedRangeHeader}"`;
  },
  'single-range-only': ({
    normalizedRangeHeader
  }) => {
    if (!normalizedRangeHeader) {
      throw new Error(`Unexpected input to 'single-range-only' error.`);
    }
    return `Multiple ranges are not supported. Please use a  single start ` + `value, and optional end value. The Range header provided was ` + `"${normalizedRangeHeader}"`;
  },
  'invalid-range-values': ({
    normalizedRangeHeader
  }) => {
    if (!normalizedRangeHeader) {
      throw new Error(`Unexpected input to 'invalid-range-values' error.`);
    }
    return `The Range header is missing both start and end values. At least ` + `one of those values is needed. The Range header provided was ` + `"${normalizedRangeHeader}"`;
  },
  'no-range-header': () => {
    return `No Range header was found in the Request provided.`;
  },
  'range-not-satisfiable': ({
    size,
    start,
    end
  }) => {
    return `The start (${start}) and end (${end}) values in the Range are ` + `not satisfiable by the cached response, which is ${size} bytes.`;
  },
  'attempt-to-cache-non-get-request': ({
    url,
    method
  }) => {
    return `Unable to cache '${url}' because it is a '${method}' request and ` + `only 'GET' requests can be cached.`;
  },
  'cache-put-with-no-response': ({
    url
  }) => {
    return `There was an attempt to cache '${url}' but the response was not ` + `defined.`;
  },
  'no-response': ({
    url,
    error
  }) => {
    let message = `The strategy could not generate a response for '${url}'.`;
    if (error) {
      message += ` The underlying error is ${error}.`;
    }
    return message;
  },
  'bad-precaching-response': ({
    url,
    status
  }) => {
    return `The precaching request for '${url}' failed` + (status ? ` with an HTTP status of ${status}.` : `.`);
  },
  'non-precached-url': ({
    url
  }) => {
    return `createHandlerBoundToURL('${url}') was called, but that URL is ` + `not precached. Please pass in a URL that is precached instead.`;
  },
  'add-to-cache-list-conflicting-integrities': ({
    url
  }) => {
    return `Two of the entries passed to ` + `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` + `${url} with different integrity values. Please remove one of them.`;
  },
  'missing-precache-entry': ({
    cacheName,
    url
  }) => {
    return `Unable to find a precached response in ${cacheName} for ${url}.`;
  },
  'cross-origin-copy-response': ({
    origin
  }) => {
    return `workbox-core.copyResponse() can only be used with same-origin ` + `responses. It was passed a response with origin ${origin}.`;
  },
  'opaque-streams-source': ({
    type
  }) => {
    const message = `One of the workbox-streams sources resulted in an ` + `'${type}' response.`;
    if (type === 'opaqueredirect') {
      return `${message} Please do not use a navigation request that results ` + `in a redirect as a source.`;
    }
    return `${message} Please ensure your sources are CORS-enabled.`;
  }
};

/***/ }),

/***/ "./node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quotaErrorCallbacks": () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();


/***/ }),

/***/ "./node_modules/workbox-core/registerQuotaErrorCallback.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/registerQuotaErrorCallback.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerQuotaErrorCallback": () => (/* binding */ registerQuotaErrorCallback)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _private_assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds a function to the set of quotaErrorCallbacks that will be executed if
 * there's a quota error.
 *
 * @param {Function} callback
 * @memberof workbox-core
 */
// Can't change Function type
// eslint-disable-next-line @typescript-eslint/ban-types
function registerQuotaErrorCallback(callback) {
  if (true) {
    _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert.isType(callback, 'function', {
      moduleName: 'workbox-core',
      funcName: 'register',
      paramName: 'callback'
    });
  }
  _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_2__.quotaErrorCallbacks.add(callback);
  if (true) {
    _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Registered a callback to respond to quota errors.', callback);
  }
}


/***/ }),

/***/ "./node_modules/workbox-expiration/CacheExpiration.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-expiration/CacheExpiration.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheExpiration": () => (/* binding */ CacheExpiration)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/dontWaitFor.js */ "./node_modules/workbox-core/_private/dontWaitFor.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _models_CacheTimestampsModel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/CacheTimestampsModel.js */ "./node_modules/workbox-expiration/models/CacheTimestampsModel.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-expiration/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * The `CacheExpiration` class allows you define an expiration and / or
 * limit on the number of responses stored in a
 * [`Cache`](https://developer.mozilla.org/en-US/docs/Web/API/Cache).
 *
 * @memberof workbox-expiration
 */
class CacheExpiration {
  /**
   * To construct a new CacheExpiration instance you must provide at least
   * one of the `config` properties.
   *
   * @param {string} cacheName Name of the cache to apply restrictions to.
   * @param {Object} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   */
  constructor(cacheName, config = {}) {
    this._isRunning = false;
    this._rerunRequested = false;
    if (true) {
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(cacheName, 'string', {
        moduleName: 'workbox-expiration',
        className: 'CacheExpiration',
        funcName: 'constructor',
        paramName: 'cacheName'
      });
      if (!(config.maxEntries || config.maxAgeSeconds)) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('max-entries-or-age-required', {
          moduleName: 'workbox-expiration',
          className: 'CacheExpiration',
          funcName: 'constructor'
        });
      }
      if (config.maxEntries) {
        workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(config.maxEntries, 'number', {
          moduleName: 'workbox-expiration',
          className: 'CacheExpiration',
          funcName: 'constructor',
          paramName: 'config.maxEntries'
        });
      }
      if (config.maxAgeSeconds) {
        workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(config.maxAgeSeconds, 'number', {
          moduleName: 'workbox-expiration',
          className: 'CacheExpiration',
          funcName: 'constructor',
          paramName: 'config.maxAgeSeconds'
        });
      }
    }
    this._maxEntries = config.maxEntries;
    this._maxAgeSeconds = config.maxAgeSeconds;
    this._matchOptions = config.matchOptions;
    this._cacheName = cacheName;
    this._timestampModel = new _models_CacheTimestampsModel_js__WEBPACK_IMPORTED_MODULE_4__.CacheTimestampsModel(cacheName);
  }
  /**
   * Expires entries for the given cache and given criteria.
   */
  async expireEntries() {
    if (this._isRunning) {
      this._rerunRequested = true;
      return;
    }
    this._isRunning = true;
    const minTimestamp = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1000 : 0;
    const urlsExpired = await this._timestampModel.expireEntries(minTimestamp, this._maxEntries);
    // Delete URLs from the cache
    const cache = await self.caches.open(this._cacheName);
    for (const url of urlsExpired) {
      await cache.delete(url, this._matchOptions);
    }
    if (true) {
      if (urlsExpired.length > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.groupCollapsed(`Expired ${urlsExpired.length} ` + `${urlsExpired.length === 1 ? 'entry' : 'entries'} and removed ` + `${urlsExpired.length === 1 ? 'it' : 'them'} from the ` + `'${this._cacheName}' cache.`);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`Expired the following ${urlsExpired.length === 1 ? 'URL' : 'URLs'}:`);
        urlsExpired.forEach(url => workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`    ${url}`));
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.groupEnd();
      } else {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.debug(`Cache expiration ran and found no entries to remove.`);
      }
    }
    this._isRunning = false;
    if (this._rerunRequested) {
      this._rerunRequested = false;
      (0,workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_1__.dontWaitFor)(this.expireEntries());
    }
  }
  /**
   * Update the timestamp for the given URL. This ensures the when
   * removing entries based on maximum entries, most recently used
   * is accurate or when expiring, the timestamp is up-to-date.
   *
   * @param {string} url
   */
  async updateTimestamp(url) {
    if (true) {
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(url, 'string', {
        moduleName: 'workbox-expiration',
        className: 'CacheExpiration',
        funcName: 'updateTimestamp',
        paramName: 'url'
      });
    }
    await this._timestampModel.setTimestamp(url, Date.now());
  }
  /**
   * Can be used to check if a URL has expired or not before it's used.
   *
   * This requires a look up from IndexedDB, so can be slow.
   *
   * Note: This method will not remove the cached entry, call
   * `expireEntries()` to remove indexedDB and Cache entries.
   *
   * @param {string} url
   * @return {boolean}
   */
  async isURLExpired(url) {
    if (!this._maxAgeSeconds) {
      if (true) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError(`expired-test-without-max-age`, {
          methodName: 'isURLExpired',
          paramName: 'maxAgeSeconds'
        });
      }
      return false;
    } else {
      const timestamp = await this._timestampModel.getTimestamp(url);
      const expireOlderThan = Date.now() - this._maxAgeSeconds * 1000;
      return timestamp !== undefined ? timestamp < expireOlderThan : true;
    }
  }
  /**
   * Removes the IndexedDB object store used to keep track of cache expiration
   * metadata.
   */
  async delete() {
    // Make sure we don't attempt another rerun if we're called in the middle of
    // a cache expiration.
    this._rerunRequested = false;
    await this._timestampModel.expireEntries(Infinity); // Expires all.
  }
}



/***/ }),

/***/ "./node_modules/workbox-expiration/ExpirationPlugin.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-expiration/ExpirationPlugin.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpirationPlugin": () => (/* binding */ ExpirationPlugin)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/dontWaitFor.js */ "./node_modules/workbox-core/_private/dontWaitFor.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_registerQuotaErrorCallback_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/registerQuotaErrorCallback.js */ "./node_modules/workbox-core/registerQuotaErrorCallback.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CacheExpiration.js */ "./node_modules/workbox-expiration/CacheExpiration.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-expiration/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









/**
 * This plugin can be used in a `workbox-strategy` to regularly enforce a
 * limit on the age and / or the number of cached requests.
 *
 * It can only be used with `workbox-strategy` instances that have a
 * [custom `cacheName` property set](/web/tools/workbox/guides/configure-workbox#custom_cache_names_in_strategies).
 * In other words, it can't be used to expire entries in strategy that uses the
 * default runtime cache name.
 *
 * Whenever a cached response is used or updated, this plugin will look
 * at the associated cache and remove any old or extra responses.
 *
 * When using `maxAgeSeconds`, responses may be used *once* after expiring
 * because the expiration clean up will not have occurred until *after* the
 * cached response has been used. If the response has a "Date" header, then
 * a light weight expiration check is performed and the response will not be
 * used immediately.
 *
 * When using `maxEntries`, the entry least-recently requested will be removed
 * from the cache first.
 *
 * @memberof workbox-expiration
 */
class ExpirationPlugin {
  /**
   * @param {ExpirationPluginOptions} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
   * automatic deletion if the available storage quota has been exceeded.
   */
  constructor(config = {}) {
    /**
     * A "lifecycle" callback that will be triggered automatically by the
     * `workbox-strategies` handlers when a `Response` is about to be returned
     * from a [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache) to
     * the handler. It allows the `Response` to be inspected for freshness and
     * prevents it from being used if the `Response`'s `Date` header value is
     * older than the configured `maxAgeSeconds`.
     *
     * @param {Object} options
     * @param {string} options.cacheName Name of the cache the response is in.
     * @param {Response} options.cachedResponse The `Response` object that's been
     *     read from a cache and whose freshness should be checked.
     * @return {Response} Either the `cachedResponse`, if it's
     *     fresh, or `null` if the `Response` is older than `maxAgeSeconds`.
     *
     * @private
     */
    this.cachedResponseWillBeUsed = async ({
      event,
      request,
      cacheName,
      cachedResponse
    }) => {
      if (!cachedResponse) {
        return null;
      }
      const isFresh = this._isResponseDateFresh(cachedResponse);
      // Expire entries to ensure that even if the expiration date has
      // expired, it'll only be used once.
      const cacheExpiration = this._getCacheExpiration(cacheName);
      (0,workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_2__.dontWaitFor)(cacheExpiration.expireEntries());
      // Update the metadata for the request URL to the current timestamp,
      // but don't `await` it as we don't want to block the response.
      const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
      if (event) {
        try {
          event.waitUntil(updateTimestampDone);
        } catch (error) {
          if (true) {
            // The event may not be a fetch event; only log the URL if it is.
            if ('request' in event) {
              workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__.logger.warn(`Unable to ensure service worker stays alive when ` + `updating cache entry for ` + `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(event.request.url)}'.`);
            }
          }
        }
      }
      return isFresh ? cachedResponse : null;
    };
    /**
     * A "lifecycle" callback that will be triggered automatically by the
     * `workbox-strategies` handlers when an entry is added to a cache.
     *
     * @param {Object} options
     * @param {string} options.cacheName Name of the cache that was updated.
     * @param {string} options.request The Request for the cached entry.
     *
     * @private
     */
    this.cacheDidUpdate = async ({
      cacheName,
      request
    }) => {
      if (true) {
        workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(cacheName, 'string', {
          moduleName: 'workbox-expiration',
          className: 'Plugin',
          funcName: 'cacheDidUpdate',
          paramName: 'cacheName'
        });
        workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
          moduleName: 'workbox-expiration',
          className: 'Plugin',
          funcName: 'cacheDidUpdate',
          paramName: 'request'
        });
      }
      const cacheExpiration = this._getCacheExpiration(cacheName);
      await cacheExpiration.updateTimestamp(request.url);
      await cacheExpiration.expireEntries();
    };
    if (true) {
      if (!(config.maxEntries || config.maxAgeSeconds)) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__.WorkboxError('max-entries-or-age-required', {
          moduleName: 'workbox-expiration',
          className: 'Plugin',
          funcName: 'constructor'
        });
      }
      if (config.maxEntries) {
        workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(config.maxEntries, 'number', {
          moduleName: 'workbox-expiration',
          className: 'Plugin',
          funcName: 'constructor',
          paramName: 'config.maxEntries'
        });
      }
      if (config.maxAgeSeconds) {
        workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(config.maxAgeSeconds, 'number', {
          moduleName: 'workbox-expiration',
          className: 'Plugin',
          funcName: 'constructor',
          paramName: 'config.maxAgeSeconds'
        });
      }
    }
    this._config = config;
    this._maxAgeSeconds = config.maxAgeSeconds;
    this._cacheExpirations = new Map();
    if (config.purgeOnQuotaError) {
      (0,workbox_core_registerQuotaErrorCallback_js__WEBPACK_IMPORTED_MODULE_5__.registerQuotaErrorCallback)(() => this.deleteCacheAndMetadata());
    }
  }
  /**
   * A simple helper method to return a CacheExpiration instance for a given
   * cache name.
   *
   * @param {string} cacheName
   * @return {CacheExpiration}
   *
   * @private
   */
  _getCacheExpiration(cacheName) {
    if (cacheName === workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getRuntimeName()) {
      throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__.WorkboxError('expire-custom-caches-only');
    }
    let cacheExpiration = this._cacheExpirations.get(cacheName);
    if (!cacheExpiration) {
      cacheExpiration = new _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_7__.CacheExpiration(cacheName, this._config);
      this._cacheExpirations.set(cacheName, cacheExpiration);
    }
    return cacheExpiration;
  }
  /**
   * @param {Response} cachedResponse
   * @return {boolean}
   *
   * @private
   */
  _isResponseDateFresh(cachedResponse) {
    if (!this._maxAgeSeconds) {
      // We aren't expiring by age, so return true, it's fresh
      return true;
    }
    // Check if the 'date' header will suffice a quick expiration check.
    // See https://github.com/GoogleChromeLabs/sw-toolbox/issues/164 for
    // discussion.
    const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
    if (dateHeaderTimestamp === null) {
      // Unable to parse date, so assume it's fresh.
      return true;
    }
    // If we have a valid headerTime, then our response is fresh iff the
    // headerTime plus maxAgeSeconds is greater than the current time.
    const now = Date.now();
    return dateHeaderTimestamp >= now - this._maxAgeSeconds * 1000;
  }
  /**
   * This method will extract the data header and parse it into a useful
   * value.
   *
   * @param {Response} cachedResponse
   * @return {number|null}
   *
   * @private
   */
  _getDateHeaderTimestamp(cachedResponse) {
    if (!cachedResponse.headers.has('date')) {
      return null;
    }
    const dateHeader = cachedResponse.headers.get('date');
    const parsedDate = new Date(dateHeader);
    const headerTime = parsedDate.getTime();
    // If the Date header was invalid for some reason, parsedDate.getTime()
    // will return NaN.
    if (isNaN(headerTime)) {
      return null;
    }
    return headerTime;
  }
  /**
   * This is a helper method that performs two operations:
   *
   * - Deletes *all* the underlying Cache instances associated with this plugin
   * instance, by calling caches.delete() on your behalf.
   * - Deletes the metadata from IndexedDB used to keep track of expiration
   * details for each Cache instance.
   *
   * When using cache expiration, calling this method is preferable to calling
   * `caches.delete()` directly, since this will ensure that the IndexedDB
   * metadata is also cleanly removed and open IndexedDB instances are deleted.
   *
   * Note that if you're *not* using cache expiration for a given cache, calling
   * `caches.delete()` and passing in the cache's name should be sufficient.
   * There is no Workbox-specific method needed for cleanup in that case.
   */
  async deleteCacheAndMetadata() {
    // Do this one at a time instead of all at once via `Promise.all()` to
    // reduce the chance of inconsistency if a promise rejects.
    for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
      await self.caches.delete(cacheName);
      await cacheExpiration.delete();
    }
    // Reset this._cacheExpirations to its initial state.
    this._cacheExpirations = new Map();
  }
}


/***/ }),

/***/ "./node_modules/workbox-expiration/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-expiration/_version.js ***!
  \*****************************************************/
/***/ (() => {



// @ts-ignore
try {
  self['workbox:expiration:6.5.3'] && _();
} catch (e) {}

/***/ }),

/***/ "./node_modules/workbox-expiration/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-expiration/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheExpiration": () => (/* reexport safe */ _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_0__.CacheExpiration),
/* harmony export */   "ExpirationPlugin": () => (/* reexport safe */ _ExpirationPlugin_js__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin)
/* harmony export */ });
/* harmony import */ var _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheExpiration.js */ "./node_modules/workbox-expiration/CacheExpiration.js");
/* harmony import */ var _ExpirationPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpirationPlugin.js */ "./node_modules/workbox-expiration/ExpirationPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-expiration/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * @module workbox-expiration
 */


/***/ }),

/***/ "./node_modules/workbox-expiration/models/CacheTimestampsModel.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-expiration/models/CacheTimestampsModel.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheTimestampsModel": () => (/* binding */ CacheTimestampsModel)
/* harmony export */ });
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/index.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-expiration/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const DB_NAME = 'workbox-expiration';
const CACHE_OBJECT_STORE = 'cache-entries';
const normalizeURL = unNormalizedUrl => {
  const url = new URL(unNormalizedUrl, location.href);
  url.hash = '';
  return url.href;
};
/**
 * Returns the timestamp model.
 *
 * @private
 */
class CacheTimestampsModel {
  /**
   *
   * @param {string} cacheName
   *
   * @private
   */
  constructor(cacheName) {
    this._db = null;
    this._cacheName = cacheName;
  }
  /**
   * Performs an upgrade of indexedDB.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDb(db) {
    // TODO(philipwalton): EdgeHTML doesn't support arrays as a keyPath, so we
    // have to use the `id` keyPath here and create our own values (a
    // concatenation of `url + cacheName`) instead of simply using
    // `keyPath: ['url', 'cacheName']`, which is supported in other browsers.
    const objStore = db.createObjectStore(CACHE_OBJECT_STORE, {
      keyPath: 'id'
    });
    // TODO(philipwalton): once we don't have to support EdgeHTML, we can
    // create a single index with the keyPath `['cacheName', 'timestamp']`
    // instead of doing both these indexes.
    objStore.createIndex('cacheName', 'cacheName', {
      unique: false
    });
    objStore.createIndex('timestamp', 'timestamp', {
      unique: false
    });
  }
  /**
   * Performs an upgrade of indexedDB and deletes deprecated DBs.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDbAndDeleteOldDbs(db) {
    this._upgradeDb(db);
    if (this._cacheName) {
      void (0,idb__WEBPACK_IMPORTED_MODULE_0__.deleteDB)(this._cacheName);
    }
  }
  /**
   * @param {string} url
   * @param {number} timestamp
   *
   * @private
   */
  async setTimestamp(url, timestamp) {
    url = normalizeURL(url);
    const entry = {
      url,
      timestamp,
      cacheName: this._cacheName,
      // Creating an ID from the URL and cache name won't be necessary once
      // Edge switches to Chromium and all browsers we support work with
      // array keyPaths.
      id: this._getId(url)
    };
    const db = await this.getDb();
    const tx = db.transaction(CACHE_OBJECT_STORE, 'readwrite', {
      durability: 'relaxed'
    });
    await tx.store.put(entry);
    await tx.done;
  }
  /**
   * Returns the timestamp stored for a given URL.
   *
   * @param {string} url
   * @return {number | undefined}
   *
   * @private
   */
  async getTimestamp(url) {
    const db = await this.getDb();
    const entry = await db.get(CACHE_OBJECT_STORE, this._getId(url));
    return entry === null || entry === void 0 ? void 0 : entry.timestamp;
  }
  /**
   * Iterates through all the entries in the object store (from newest to
   * oldest) and removes entries once either `maxCount` is reached or the
   * entry's timestamp is less than `minTimestamp`.
   *
   * @param {number} minTimestamp
   * @param {number} maxCount
   * @return {Array<string>}
   *
   * @private
   */
  async expireEntries(minTimestamp, maxCount) {
    const db = await this.getDb();
    let cursor = await db.transaction(CACHE_OBJECT_STORE).store.index('timestamp').openCursor(null, 'prev');
    const entriesToDelete = [];
    let entriesNotDeletedCount = 0;
    while (cursor) {
      const result = cursor.value;
      // TODO(philipwalton): once we can use a multi-key index, we
      // won't have to check `cacheName` here.
      if (result.cacheName === this._cacheName) {
        // Delete an entry if it's older than the max age or
        // if we already have the max number allowed.
        if (minTimestamp && result.timestamp < minTimestamp || maxCount && entriesNotDeletedCount >= maxCount) {
          // TODO(philipwalton): we should be able to delete the
          // entry right here, but doing so causes an iteration
          // bug in Safari stable (fixed in TP). Instead we can
          // store the keys of the entries to delete, and then
          // delete the separate transactions.
          // https://github.com/GoogleChrome/workbox/issues/1978
          // cursor.delete();
          // We only need to return the URL, not the whole entry.
          entriesToDelete.push(cursor.value);
        } else {
          entriesNotDeletedCount++;
        }
      }
      cursor = await cursor.continue();
    }
    // TODO(philipwalton): once the Safari bug in the following issue is fixed,
    // we should be able to remove this loop and do the entry deletion in the
    // cursor loop above:
    // https://github.com/GoogleChrome/workbox/issues/1978
    const urlsDeleted = [];
    for (const entry of entriesToDelete) {
      await db.delete(CACHE_OBJECT_STORE, entry.id);
      urlsDeleted.push(entry.url);
    }
    return urlsDeleted;
  }
  /**
   * Takes a URL and returns an ID that will be unique in the object store.
   *
   * @param {string} url
   * @return {string}
   *
   * @private
   */
  _getId(url) {
    // Creating an ID from the URL and cache name won't be necessary once
    // Edge switches to Chromium and all browsers we support work with
    // array keyPaths.
    return this._cacheName + '|' + normalizeURL(url);
  }
  /**
   * Returns an open connection to the database.
   *
   * @private
   */
  async getDb() {
    if (!this._db) {
      this._db = await (0,idb__WEBPACK_IMPORTED_MODULE_0__.openDB)(DB_NAME, 1, {
        upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
      });
    }
    return this._db;
  }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheController.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheController.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
  /**
   * Create a new PrecacheController.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] The cache to use for precaching.
   * @param {string} [options.plugins] Plugins to use when precaching as well
   * as responding to fetch events for precached assets.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor({
    cacheName,
    plugins = [],
    fallbackToNetwork = true
  } = {}) {
    this._urlsToCacheKeys = new Map();
    this._urlsToCacheModes = new Map();
    this._cacheKeysToIntegrities = new Map();
    this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
      cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
      plugins: [...plugins, new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({
        precacheController: this
      })],
      fallbackToNetwork
    });
    // Bind the install and activate methods to the instance.
    this.install = this.install.bind(this);
    this.activate = this.activate.bind(this);
  }
  /**
   * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
   * used to cache assets and respond to fetch events.
   */
  get strategy() {
    return this._strategy;
  }
  /**
   * Adds items to the precache list, removing any duplicates and
   * stores the files in the
   * {@link workbox-core.cacheNames|"precache cache"} when the service
   * worker installs.
   *
   * This method can be called multiple times.
   *
   * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
   */
  precache(entries) {
    this.addToCacheList(entries);
    if (!this._installAndActiveListenersAdded) {
      self.addEventListener('install', this.install);
      self.addEventListener('activate', this.activate);
      this._installAndActiveListenersAdded = true;
    }
  }
  /**
   * This method will add items to the precache list, removing duplicates
   * and ensuring the information is valid.
   *
   * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
   *     Array of entries to precache.
   */
  addToCacheList(entries) {
    if (true) {
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
        moduleName: 'workbox-precaching',
        className: 'PrecacheController',
        funcName: 'addToCacheList',
        paramName: 'entries'
      });
    }
    const urlsToWarnAbout = [];
    for (const entry of entries) {
      // See https://github.com/GoogleChrome/workbox/issues/2259
      if (typeof entry === 'string') {
        urlsToWarnAbout.push(entry);
      } else if (entry && entry.revision === undefined) {
        urlsToWarnAbout.push(entry.url);
      }
      const {
        cacheKey,
        url
      } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
      const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
      if (this._urlsToCacheKeys.has(url) && this._urlsToCacheKeys.get(url) !== cacheKey) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
          firstEntry: this._urlsToCacheKeys.get(url),
          secondEntry: cacheKey
        });
      }
      if (typeof entry !== 'string' && entry.integrity) {
        if (this._cacheKeysToIntegrities.has(cacheKey) && this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
          throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
            url
          });
        }
        this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
      }
      this._urlsToCacheKeys.set(url, cacheKey);
      this._urlsToCacheModes.set(url, cacheMode);
      if (urlsToWarnAbout.length > 0) {
        const warningMessage = `Workbox is precaching URLs without revision ` + `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` + `Learn more at https://bit.ly/wb-precache`;
        if (false) {} else {
          workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
        }
      }
    }
  }
  /**
   * Precaches new and updated assets. Call this method from the service worker
   * install event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.InstallResult>}
   */
  install(event) {
    // waitUntil returns Promise<any>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
      const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
      this.strategy.plugins.push(installReportPlugin);
      // Cache entries one at a time.
      // See https://github.com/GoogleChrome/workbox/issues/2528
      for (const [url, cacheKey] of this._urlsToCacheKeys) {
        const integrity = this._cacheKeysToIntegrities.get(cacheKey);
        const cacheMode = this._urlsToCacheModes.get(url);
        const request = new Request(url, {
          integrity,
          cache: cacheMode,
          credentials: 'same-origin'
        });
        await Promise.all(this.strategy.handleAll({
          params: {
            cacheKey
          },
          request,
          event
        }));
      }
      const {
        updatedURLs,
        notUpdatedURLs
      } = installReportPlugin;
      if (true) {
        (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
      }
      return {
        updatedURLs,
        notUpdatedURLs
      };
    });
  }
  /**
   * Deletes assets that are no longer present in the current precache manifest.
   * Call this method from the service worker activate event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.CleanupResult>}
   */
  activate(event) {
    // waitUntil returns Promise<any>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
      const cache = await self.caches.open(this.strategy.cacheName);
      const currentlyCachedRequests = await cache.keys();
      const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
      const deletedURLs = [];
      for (const request of currentlyCachedRequests) {
        if (!expectedCacheKeys.has(request.url)) {
          await cache.delete(request);
          deletedURLs.push(request.url);
        }
      }
      if (true) {
        (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
      }
      return {
        deletedURLs
      };
    });
  }
  /**
   * Returns a mapping of a precached URL to the corresponding cache key, taking
   * into account the revision information for the URL.
   *
   * @return {Map<string, string>} A URL to cache key mapping.
   */
  getURLsToCacheKeys() {
    return this._urlsToCacheKeys;
  }
  /**
   * Returns a list of all the URLs that have been precached by the current
   * service worker.
   *
   * @return {Array<string>} The precached URLs.
   */
  getCachedURLs() {
    return [...this._urlsToCacheKeys.keys()];
  }
  /**
   * Returns the cache key used for storing a given URL. If that URL is
   * unversioned, like `/index.html', then the cache key will be the original
   * URL with a search parameter appended to it.
   *
   * @param {string} url A URL whose cache key you want to look up.
   * @return {string} The versioned URL that corresponds to a cache key
   * for the original URL, or undefined if that URL isn't precached.
   */
  getCacheKeyForURL(url) {
    const urlObject = new URL(url, location.href);
    return this._urlsToCacheKeys.get(urlObject.href);
  }
  /**
   * @param {string} url A cache key whose SRI you want to look up.
   * @return {string} The subresource integrity associated with the cache key,
   * or undefined if it's not set.
   */
  getIntegrityForCacheKey(cacheKey) {
    return this._cacheKeysToIntegrities.get(cacheKey);
  }
  /**
   * This acts as a drop-in replacement for
   * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
   * with the following differences:
   *
   * - It knows what the name of the precache is, and only checks in that cache.
   * - It allows you to pass in an "original" URL without versioning parameters,
   * and it will automatically look up the correct cache key for the currently
   * active revision of that URL.
   *
   * E.g., `matchPrecache('index.html')` will find the correct precached
   * response for the currently active service worker, even if the actual cache
   * key is `'/index.html?__WB_REVISION__=1234abcd'`.
   *
   * @param {string|Request} request The key (without revisioning parameters)
   * to look up in the precache.
   * @return {Promise<Response|undefined>}
   */
  async matchPrecache(request) {
    const url = request instanceof Request ? request.url : request;
    const cacheKey = this.getCacheKeyForURL(url);
    if (cacheKey) {
      const cache = await self.caches.open(this.strategy.cacheName);
      return cache.match(cacheKey);
    }
    return undefined;
  }
  /**
   * Returns a function that looks up `url` in the precache (taking into
   * account revision information), and returns the corresponding `Response`.
   *
   * @param {string} url The precached URL which will be used to lookup the
   * `Response`.
   * @return {workbox-routing~handlerCallback}
   */
  createHandlerBoundToURL(url) {
    const cacheKey = this.getCacheKeyForURL(url);
    if (!cacheKey) {
      throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', {
        url
      });
    }
    return options => {
      options.request = new Request(url);
      options.params = Object.assign({
        cacheKey
      }, options.params);
      return this.strategy.handle(options);
    };
  }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheRoute.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheRoute.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheRoute": () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
  /**
   * @param {PrecacheController} precacheController A `PrecacheController`
   * instance used to both match requests and respond to fetch events.
   * @param {Object} [options] Options to control how requests are matched
   * against the list of precached URLs.
   * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
   * check cache entries for a URLs ending with '/' to see if there is a hit when
   * appending the `directoryIndex` value.
   * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
   * array of regex's to remove search params when looking for a cache match.
   * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
   * check the cache for the URL with a `.html` added to the end of the end.
   * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
   * This is a function that should take a URL and return an array of
   * alternative URLs that should be checked for precache matches.
   */
  constructor(precacheController, options) {
    const match = ({
      request
    }) => {
      const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
      for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
        const cacheKey = urlsToCacheKeys.get(possibleURL);
        if (cacheKey) {
          const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
          return {
            cacheKey,
            integrity
          };
        }
      }
      if (true) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
      }
      return;
    };
    super(match, precacheController.strategy);
  }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheStrategy.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheStrategy": () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
  /**
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
   * of all fetch() requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor(options = {}) {
    options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
    super(options);
    this._fallbackToNetwork = options.fallbackToNetwork === false ? false : true;
    // Redirected responses cannot be used to satisfy a navigation request, so
    // any redirected response must be "copied" rather than cloned, so the new
    // response doesn't contain the `redirected` flag. See:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
    this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    const response = await handler.cacheMatch(request);
    if (response) {
      return response;
    }
    // If this is an `install` event for an entry that isn't already cached,
    // then populate the cache.
    if (handler.event && handler.event.type === 'install') {
      return await this._handleInstall(request, handler);
    }
    // Getting here means something went wrong. An entry that should have been
    // precached wasn't found in the cache.
    return await this._handleFetch(request, handler);
  }
  async _handleFetch(request, handler) {
    let response;
    const params = handler.params || {};
    // Fall back to the network if we're configured to do so.
    if (this._fallbackToNetwork) {
      if (true) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` + `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` + `found. Falling back to the network.`);
      }
      const integrityInManifest = params.integrity;
      const integrityInRequest = request.integrity;
      const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
      // Do not add integrity if the original request is no-cors
      // See https://github.com/GoogleChrome/workbox/issues/3096
      response = await handler.fetch(new Request(request, {
        integrity: request.mode !== 'no-cors' ? integrityInRequest || integrityInManifest : undefined
      }));
      // It's only "safe" to repair the cache if we're using SRI to guarantee
      // that the response matches the precache manifest's expectations,
      // and there's either a) no integrity property in the incoming request
      // or b) there is an integrity, and it matches the precache manifest.
      // See https://github.com/GoogleChrome/workbox/issues/2858
      // Also if the original request users no-cors we don't use integrity.
      // See https://github.com/GoogleChrome/workbox/issues/3096
      if (integrityInManifest && noIntegrityConflict && request.mode !== 'no-cors') {
        this._useDefaultCacheabilityPluginIfNeeded();
        const wasCached = await handler.cachePut(request, response.clone());
        if (true) {
          if (wasCached) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` + `was used to "repair" the precache.`);
          }
        }
      }
    } else {
      // This shouldn't normally happen, but there are edge cases:
      // https://github.com/GoogleChrome/workbox/issues/1441
      throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
        cacheName: this.cacheName,
        url: request.url
      });
    }
    if (true) {
      const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
      // Workbox is going to handle the route.
      // print the routing details to the console.
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
    }
    return response;
  }
  async _handleInstall(request, handler) {
    this._useDefaultCacheabilityPluginIfNeeded();
    const response = await handler.fetch(request);
    // Make sure we defer cachePut() until after we know the response
    // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
    const wasCached = await handler.cachePut(request, response.clone());
    if (!wasCached) {
      // Throwing here will lead to the `install` handler failing, which
      // we want to do if *any* of the responses aren't safe to cache.
      throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
        url: request.url,
        status: response.status
      });
    }
    return response;
  }
  /**
   * This method is complex, as there a number of things to account for:
   *
   * The `plugins` array can be set at construction, and/or it might be added to
   * to at any time before the strategy is used.
   *
   * At the time the strategy is used (i.e. during an `install` event), there
   * needs to be at least one plugin that implements `cacheWillUpdate` in the
   * array, other than `copyRedirectedCacheableResponsesPlugin`.
   *
   * - If this method is called and there are no suitable `cacheWillUpdate`
   * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
   *
   * - If this method is called and there is exactly one `cacheWillUpdate`, then
   * we don't have to do anything (this might be a previously added
   * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
   *
   * - If this method is called and there is more than one `cacheWillUpdate`,
   * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
   * we need to remove it. (This situation is unlikely, but it could happen if
   * the strategy is used multiple times, the first without a `cacheWillUpdate`,
   * and then later on after manually adding a custom `cacheWillUpdate`.)
   *
   * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
   *
   * @private
   */
  _useDefaultCacheabilityPluginIfNeeded() {
    let defaultPluginIndex = null;
    let cacheWillUpdatePluginCount = 0;
    for (const [index, plugin] of this.plugins.entries()) {
      // Ignore the copy redirected plugin when determining what to do.
      if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
        continue;
      }
      // Save the default plugin's index, in case it needs to be removed.
      if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
        defaultPluginIndex = index;
      }
      if (plugin.cacheWillUpdate) {
        cacheWillUpdatePluginCount++;
      }
    }
    if (cacheWillUpdatePluginCount === 0) {
      this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
    } else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
      // Only remove the default plugin; multiple custom plugins are allowed.
      this.plugins.splice(defaultPluginIndex, 1);
    }
    // Nothing needs to be done if cacheWillUpdatePluginCount is 1
  }
}

PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
  async cacheWillUpdate({
    response
  }) {
    if (!response || response.status >= 400) {
      return null;
    }
    return response;
  }
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
  async cacheWillUpdate({
    response
  }) {
    return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
  }
};


/***/ }),

/***/ "./node_modules/workbox-precaching/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/_version.js ***!
  \*****************************************************/
/***/ (() => {



// @ts-ignore
try {
  self['workbox:precaching:6.5.3'] && _();
} catch (e) {}

/***/ }),

/***/ "./node_modules/workbox-precaching/addRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/addRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRoute": () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
  const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
  const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
  (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}


/***/ }),

/***/ "./node_modules/workbox-precaching/matchPrecache.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/matchPrecache.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchPrecache": () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
  const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
  return precacheController.matchPrecache(request);
}


/***/ }),

/***/ "./node_modules/workbox-precaching/precache.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/precache.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precache": () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
  const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
  precacheController.precache(entries);
}


/***/ }),

/***/ "./node_modules/workbox-precaching/precacheAndRoute.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precacheAndRoute": () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
  (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
  (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!*************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheCacheKeyPlugin": () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
  constructor({
    precacheController
  }) {
    this.cacheKeyWillBeUsed = async ({
      request,
      params
    }) => {
      // Params is type any, can't change right now.
      /* eslint-disable */
      const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) || this._precacheController.getCacheKeyForURL(request.url);
      /* eslint-enable */
      return cacheKey ? new Request(cacheKey, {
        headers: request.headers
      }) : request;
    };
    this._precacheController = precacheController;
  }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!******************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheInstallReportPlugin": () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
  constructor() {
    this.updatedURLs = [];
    this.notUpdatedURLs = [];
    this.handlerWillStart = async ({
      request,
      state
    }) => {
      // TODO: `state` should never be undefined...
      if (state) {
        state.originalRequest = request;
      }
    };
    this.cachedResponseWillBeUsed = async ({
      event,
      state,
      cachedResponse
    }) => {
      if (event.type === 'install') {
        if (state && state.originalRequest && state.originalRequest instanceof Request) {
          // TODO: `state` should never be undefined...
          const url = state.originalRequest.url;
          if (cachedResponse) {
            this.notUpdatedURLs.push(url);
          } else {
            this.updatedURLs.push(url);
          }
        }
      }
      return cachedResponse;
    };
  }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCacheKey": () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
  if (!entry) {
    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', {
      entry
    });
  }
  // If a precache manifest entry is a string, it's assumed to be a versioned
  // URL, like '/app.abcd1234.js'. Return as-is.
  if (typeof entry === 'string') {
    const urlObject = new URL(entry, location.href);
    return {
      cacheKey: urlObject.href,
      url: urlObject.href
    };
  }
  const {
    revision,
    url
  } = entry;
  if (!url) {
    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', {
      entry
    });
  }
  // If there's just a URL and no revision, then it's also assumed to be a
  // versioned URL.
  if (!revision) {
    const urlObject = new URL(url, location.href);
    return {
      cacheKey: urlObject.href,
      url: urlObject.href
    };
  }
  // Otherwise, construct a properly versioned URL using the custom Workbox
  // search parameter along with the revision info.
  const cacheKeyURL = new URL(url, location.href);
  const originalURL = new URL(url, location.href);
  cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
  return {
    cacheKey: cacheKeyURL.href,
    url: originalURL.href
  };
}

/***/ }),

/***/ "./node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateURLVariations": () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, {
  ignoreURLParametersMatching = [/^utm_/, /^fbclid$/],
  directoryIndex = 'index.html',
  cleanURLs = true,
  urlManipulation
} = {}) {
  const urlObject = new URL(url, location.href);
  urlObject.hash = '';
  yield urlObject.href;
  const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
  yield urlWithoutIgnoredParams.href;
  if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
    const directoryURL = new URL(urlWithoutIgnoredParams.href);
    directoryURL.pathname += directoryIndex;
    yield directoryURL.href;
  }
  if (cleanURLs) {
    const cleanURL = new URL(urlWithoutIgnoredParams.href);
    cleanURL.pathname += '.html';
    yield cleanURL.href;
  }
  if (urlManipulation) {
    const additionalURLs = urlManipulation({
      url: urlObject
    });
    for (const urlToAttempt of additionalURLs) {
      yield urlToAttempt.href;
    }
  }
}

/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!********************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreatePrecacheController": () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
  if (!precacheController) {
    precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
  }
  return precacheController;
};

/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printCleanupDetails": () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
  workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
  for (const url of deletedURLs) {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
  }
  workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
  const deletionCount = deletedURLs.length;
  if (deletionCount > 0) {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` + `${deletionCount} cached ` + `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
    logGroup('Deleted Cache Requests', deletedURLs);
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
  }
}

/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printInstallDetails": () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
  if (urls.length === 0) {
    return;
  }
  workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
  for (const url of urls) {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
  }
  workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
  const precachedCount = urlsToPrecache.length;
  const alreadyPrecachedCount = urlsAlreadyPrecached.length;
  if (precachedCount || alreadyPrecachedCount) {
    let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
    if (alreadyPrecachedCount > 0) {
      message += ` ${alreadyPrecachedCount} ` + `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
    _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
    _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
  }
}

/***/ }),

/***/ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeIgnoredSearchParams": () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
  // Convert the iterable into an array at the start of the loop to make sure
  // deletion doesn't mess up iteration.
  for (const paramName of [...urlObject.searchParams.keys()]) {
    if (ignoreURLParametersMatching.some(regExp => regExp.test(paramName))) {
      urlObject.searchParams.delete(paramName);
    }
  }
  return urlObject;
}

/***/ }),

/***/ "./node_modules/workbox-recipes/_version.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-recipes/_version.js ***!
  \**************************************************/
/***/ (() => {



// @ts-ignore
try {
  self['workbox:recipes:6.5.3'] && _();
} catch (e) {}

/***/ }),

/***/ "./node_modules/workbox-recipes/googleFontsCache.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-recipes/googleFontsCache.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "googleFontsCache": () => (/* binding */ googleFontsCache)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var workbox_strategies_StaleWhileRevalidate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-strategies/StaleWhileRevalidate.js */ "./node_modules/workbox-strategies/StaleWhileRevalidate.js");
/* harmony import */ var workbox_strategies_CacheFirst_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-strategies/CacheFirst.js */ "./node_modules/workbox-strategies/CacheFirst.js");
/* harmony import */ var workbox_cacheable_response_CacheableResponsePlugin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-cacheable-response/CacheableResponsePlugin.js */ "./node_modules/workbox-cacheable-response/CacheableResponsePlugin.js");
/* harmony import */ var workbox_expiration_ExpirationPlugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-expiration/ExpirationPlugin.js */ "./node_modules/workbox-expiration/ExpirationPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-recipes/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An implementation of the [Google fonts]{@link https://developers.google.com/web/tools/workbox/guides/common-recipes#google_fonts} caching recipe
 *
 * @memberof workbox-recipes
 *
 * @param {Object} [options]
 * @param {string} [options.cachePrefix] Cache prefix for caching stylesheets and webfonts. Defaults to google-fonts
 * @param {number} [options.maxAgeSeconds] Maximum age, in seconds, that font entries will be cached for. Defaults to 1 year
 * @param {number} [options.maxEntries] Maximum number of fonts that will be cached. Defaults to 30
 */
function googleFontsCache(options = {}) {
  const sheetCacheName = `${options.cachePrefix || 'google-fonts'}-stylesheets`;
  const fontCacheName = `${options.cachePrefix || 'google-fonts'}-webfonts`;
  const maxAgeSeconds = options.maxAgeSeconds || 60 * 60 * 24 * 365;
  const maxEntries = options.maxEntries || 30;
  // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
  (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(({
    url
  }) => url.origin === 'https://fonts.googleapis.com', new workbox_strategies_StaleWhileRevalidate_js__WEBPACK_IMPORTED_MODULE_1__.StaleWhileRevalidate({
    cacheName: sheetCacheName
  }));
  // Cache the underlying font files with a cache-first strategy for 1 year.
  (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(({
    url
  }) => url.origin === 'https://fonts.gstatic.com', new workbox_strategies_CacheFirst_js__WEBPACK_IMPORTED_MODULE_2__.CacheFirst({
    cacheName: fontCacheName,
    plugins: [new workbox_cacheable_response_CacheableResponsePlugin_js__WEBPACK_IMPORTED_MODULE_3__.CacheableResponsePlugin({
      statuses: [0, 200]
    }), new workbox_expiration_ExpirationPlugin_js__WEBPACK_IMPORTED_MODULE_4__.ExpirationPlugin({
      maxAgeSeconds,
      maxEntries
    })]
  }));
}


/***/ }),

/***/ "./node_modules/workbox-recipes/imageCache.js":
/*!****************************************************!*\
  !*** ./node_modules/workbox-recipes/imageCache.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imageCache": () => (/* binding */ imageCache)
/* harmony export */ });
/* harmony import */ var _warmStrategyCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmStrategyCache */ "./node_modules/workbox-recipes/warmStrategyCache.js");
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var workbox_strategies_CacheFirst_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-strategies/CacheFirst.js */ "./node_modules/workbox-strategies/CacheFirst.js");
/* harmony import */ var workbox_cacheable_response_CacheableResponsePlugin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-cacheable-response/CacheableResponsePlugin.js */ "./node_modules/workbox-cacheable-response/CacheableResponsePlugin.js");
/* harmony import */ var workbox_expiration_ExpirationPlugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-expiration/ExpirationPlugin.js */ "./node_modules/workbox-expiration/ExpirationPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-recipes/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An implementation of the [image caching recipe]{@link https://developers.google.com/web/tools/workbox/guides/common-recipes#caching_images}
 *
 * @memberof workbox-recipes
 *
 * @param {Object} [options]
 * @param {string} [options.cacheName] Name for cache. Defaults to images
 * @param {RouteMatchCallback} [options.matchCallback] Workbox callback function to call to match to. Defaults to request.destination === 'image';
 * @param {number} [options.maxAgeSeconds] Maximum age, in seconds, that font entries will be cached for. Defaults to 30 days
 * @param {number} [options.maxEntries] Maximum number of images that will be cached. Defaults to 60
 * @param {WorkboxPlugin[]} [options.plugins] Additional plugins to use for this recipe
 * @param {string[]} [options.warmCache] Paths to call to use to warm this cache
 */
function imageCache(options = {}) {
  const defaultMatchCallback = ({
    request
  }) => request.destination === 'image';
  const cacheName = options.cacheName || 'images';
  const matchCallback = options.matchCallback || defaultMatchCallback;
  const maxAgeSeconds = options.maxAgeSeconds || 30 * 24 * 60 * 60;
  const maxEntries = options.maxEntries || 60;
  const plugins = options.plugins || [];
  plugins.push(new workbox_cacheable_response_CacheableResponsePlugin_js__WEBPACK_IMPORTED_MODULE_3__.CacheableResponsePlugin({
    statuses: [0, 200]
  }));
  plugins.push(new workbox_expiration_ExpirationPlugin_js__WEBPACK_IMPORTED_MODULE_4__.ExpirationPlugin({
    maxEntries,
    maxAgeSeconds
  }));
  const strategy = new workbox_strategies_CacheFirst_js__WEBPACK_IMPORTED_MODULE_2__.CacheFirst({
    cacheName,
    plugins
  });
  (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_1__.registerRoute)(matchCallback, strategy);
  // Warms the cache
  if (options.warmCache) {
    (0,_warmStrategyCache__WEBPACK_IMPORTED_MODULE_0__.warmStrategyCache)({
      urls: options.warmCache,
      strategy
    });
  }
}


/***/ }),

/***/ "./node_modules/workbox-recipes/index.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-recipes/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "googleFontsCache": () => (/* reexport safe */ _googleFontsCache__WEBPACK_IMPORTED_MODULE_0__.googleFontsCache),
/* harmony export */   "imageCache": () => (/* reexport safe */ _imageCache__WEBPACK_IMPORTED_MODULE_1__.imageCache),
/* harmony export */   "offlineFallback": () => (/* reexport safe */ _offlineFallback__WEBPACK_IMPORTED_MODULE_4__.offlineFallback),
/* harmony export */   "pageCache": () => (/* reexport safe */ _pageCache__WEBPACK_IMPORTED_MODULE_3__.pageCache),
/* harmony export */   "staticResourceCache": () => (/* reexport safe */ _staticResourceCache__WEBPACK_IMPORTED_MODULE_2__.staticResourceCache),
/* harmony export */   "warmStrategyCache": () => (/* reexport safe */ _warmStrategyCache__WEBPACK_IMPORTED_MODULE_5__.warmStrategyCache)
/* harmony export */ });
/* harmony import */ var _googleFontsCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./googleFontsCache */ "./node_modules/workbox-recipes/googleFontsCache.js");
/* harmony import */ var _imageCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageCache */ "./node_modules/workbox-recipes/imageCache.js");
/* harmony import */ var _staticResourceCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staticResourceCache */ "./node_modules/workbox-recipes/staticResourceCache.js");
/* harmony import */ var _pageCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageCache */ "./node_modules/workbox-recipes/pageCache.js");
/* harmony import */ var _offlineFallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./offlineFallback */ "./node_modules/workbox-recipes/offlineFallback.js");
/* harmony import */ var _warmStrategyCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./warmStrategyCache */ "./node_modules/workbox-recipes/warmStrategyCache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-recipes/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * @module workbox-recipes
 */


/***/ }),

/***/ "./node_modules/workbox-recipes/offlineFallback.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-recipes/offlineFallback.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "offlineFallback": () => (/* binding */ offlineFallback)
/* harmony export */ });
/* harmony import */ var workbox_routing_setCatchHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/setCatchHandler.js */ "./node_modules/workbox-routing/setCatchHandler.js");
/* harmony import */ var workbox_precaching_matchPrecache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-precaching/matchPrecache.js */ "./node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-recipes/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * An implementation of the [comprehensive fallbacks recipe]{@link https://developers.google.com/web/tools/workbox/guides/advanced-recipes#comprehensive_fallbacks}. Be sure to include the fallbacks in your precache injection
 *
 * @memberof workbox-recipes
 *
 * @param {Object} [options]
 * @param {string} [options.pageFallback] Precache name to match for pag fallbacks. Defaults to offline.html
 * @param {string} [options.imageFallback] Precache name to match for image fallbacks.
 * @param {string} [options.fontFallback] Precache name to match for font fallbacks.
 */
function offlineFallback(options = {}) {
  const pageFallback = options.pageFallback || 'offline.html';
  const imageFallback = options.imageFallback || false;
  const fontFallback = options.fontFallback || false;
  self.addEventListener('install', event => {
    const files = [pageFallback];
    if (imageFallback) {
      files.push(imageFallback);
    }
    if (fontFallback) {
      files.push(fontFallback);
    }
    event.waitUntil(self.caches.open('workbox-offline-fallbacks').then(cache => cache.addAll(files)));
  });
  const handler = async options => {
    const dest = options.request.destination;
    const cache = await self.caches.open('workbox-offline-fallbacks');
    if (dest === 'document') {
      const match = (await (0,workbox_precaching_matchPrecache_js__WEBPACK_IMPORTED_MODULE_1__.matchPrecache)(pageFallback)) || (await cache.match(pageFallback));
      return match || Response.error();
    }
    if (dest === 'image' && imageFallback !== false) {
      const match = (await (0,workbox_precaching_matchPrecache_js__WEBPACK_IMPORTED_MODULE_1__.matchPrecache)(imageFallback)) || (await cache.match(imageFallback));
      return match || Response.error();
    }
    if (dest === 'font' && fontFallback !== false) {
      const match = (await (0,workbox_precaching_matchPrecache_js__WEBPACK_IMPORTED_MODULE_1__.matchPrecache)(fontFallback)) || (await cache.match(fontFallback));
      return match || Response.error();
    }
    return Response.error();
  };
  (0,workbox_routing_setCatchHandler_js__WEBPACK_IMPORTED_MODULE_0__.setCatchHandler)(handler);
}


/***/ }),

/***/ "./node_modules/workbox-recipes/pageCache.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-recipes/pageCache.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageCache": () => (/* binding */ pageCache)
/* harmony export */ });
/* harmony import */ var _warmStrategyCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmStrategyCache */ "./node_modules/workbox-recipes/warmStrategyCache.js");
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var workbox_strategies_NetworkFirst_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-strategies/NetworkFirst.js */ "./node_modules/workbox-strategies/NetworkFirst.js");
/* harmony import */ var workbox_cacheable_response_CacheableResponsePlugin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-cacheable-response/CacheableResponsePlugin.js */ "./node_modules/workbox-cacheable-response/CacheableResponsePlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-recipes/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * An implementation of a page caching recipe with a network timeout
 *
 * @memberof workbox-recipes
 *
 * @param {Object} [options]
 * @param {string} [options.cacheName] Name for cache. Defaults to pages
 * @param {RouteMatchCallback} [options.matchCallback] Workbox callback function to call to match to. Defaults to request.mode === 'navigate';
 * @param {number} [options.networkTimoutSeconds] Maximum amount of time, in seconds, to wait on the network before falling back to cache. Defaults to 3
 * @param {WorkboxPlugin[]} [options.plugins] Additional plugins to use for this recipe
 * @param {string[]} [options.warmCache] Paths to call to use to warm this cache
 */
function pageCache(options = {}) {
  const defaultMatchCallback = ({
    request
  }) => request.mode === 'navigate';
  const cacheName = options.cacheName || 'pages';
  const matchCallback = options.matchCallback || defaultMatchCallback;
  const networkTimeoutSeconds = options.networkTimeoutSeconds || 3;
  const plugins = options.plugins || [];
  plugins.push(new workbox_cacheable_response_CacheableResponsePlugin_js__WEBPACK_IMPORTED_MODULE_3__.CacheableResponsePlugin({
    statuses: [0, 200]
  }));
  const strategy = new workbox_strategies_NetworkFirst_js__WEBPACK_IMPORTED_MODULE_2__.NetworkFirst({
    networkTimeoutSeconds,
    cacheName,
    plugins
  });
  // Registers the route
  (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_1__.registerRoute)(matchCallback, strategy);
  // Warms the cache
  if (options.warmCache) {
    (0,_warmStrategyCache__WEBPACK_IMPORTED_MODULE_0__.warmStrategyCache)({
      urls: options.warmCache,
      strategy
    });
  }
}


/***/ }),

/***/ "./node_modules/workbox-recipes/staticResourceCache.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-recipes/staticResourceCache.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "staticResourceCache": () => (/* binding */ staticResourceCache)
/* harmony export */ });
/* harmony import */ var _warmStrategyCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmStrategyCache */ "./node_modules/workbox-recipes/warmStrategyCache.js");
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var workbox_strategies_StaleWhileRevalidate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-strategies/StaleWhileRevalidate.js */ "./node_modules/workbox-strategies/StaleWhileRevalidate.js");
/* harmony import */ var workbox_cacheable_response_CacheableResponsePlugin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-cacheable-response/CacheableResponsePlugin.js */ "./node_modules/workbox-cacheable-response/CacheableResponsePlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-recipes/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * An implementation of the [CSS and JavaScript files recipe]{@link https://developers.google.com/web/tools/workbox/guides/common-recipes#cache_css_and_javascript_files}
 *
 * @memberof workbox-recipes
 *
 * @param {Object} [options]
 * @param {string} [options.cacheName] Name for cache. Defaults to static-resources
 * @param {RouteMatchCallback} [options.matchCallback] Workbox callback function to call to match to. Defaults to request.destination === 'style' || request.destination === 'script' || request.destination === 'worker';
 * @param {WorkboxPlugin[]} [options.plugins] Additional plugins to use for this recipe
 * @param {string[]} [options.warmCache] Paths to call to use to warm this cache
 */
function staticResourceCache(options = {}) {
  const defaultMatchCallback = ({
    request
  }) => request.destination === 'style' || request.destination === 'script' || request.destination === 'worker';
  const cacheName = options.cacheName || 'static-resources';
  const matchCallback = options.matchCallback || defaultMatchCallback;
  const plugins = options.plugins || [];
  plugins.push(new workbox_cacheable_response_CacheableResponsePlugin_js__WEBPACK_IMPORTED_MODULE_3__.CacheableResponsePlugin({
    statuses: [0, 200]
  }));
  const strategy = new workbox_strategies_StaleWhileRevalidate_js__WEBPACK_IMPORTED_MODULE_2__.StaleWhileRevalidate({
    cacheName,
    plugins
  });
  (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_1__.registerRoute)(matchCallback, strategy);
  // Warms the cache
  if (options.warmCache) {
    (0,_warmStrategyCache__WEBPACK_IMPORTED_MODULE_0__.warmStrategyCache)({
      urls: options.warmCache,
      strategy
    });
  }
}


/***/ }),

/***/ "./node_modules/workbox-recipes/warmStrategyCache.js":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-recipes/warmStrategyCache.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "warmStrategyCache": () => (/* binding */ warmStrategyCache)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-recipes/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @memberof workbox-recipes
 
 * @param {Object} options
 * @param {string[]} options.urls Paths to warm the strategy's cache with
 * @param {Strategy} options.strategy Strategy to use
 */
function warmStrategyCache(options) {
  self.addEventListener('install', event => {
    const done = options.urls.map(path => options.strategy.handleAll({
      event,
      request: new Request(path)
    })[1]);
    event.waitUntil(Promise.all(done));
  });
}


/***/ }),

/***/ "./node_modules/workbox-routing/NavigationRoute.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/NavigationRoute.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationRoute": () => (/* binding */ NavigationRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * NavigationRoute makes it easy to create a
 * {@link workbox-routing.Route} that matches for browser
 * [navigation requests]{@link https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests}.
 *
 * It will only match incoming Requests whose
 * {@link https://fetch.spec.whatwg.org/#concept-request-mode|mode}
 * is set to `navigate`.
 *
 * You can optionally only apply this route to a subset of navigation requests
 * by using one or both of the `denylist` and `allowlist` parameters.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class NavigationRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
  /**
   * If both `denylist` and `allowlist` are provided, the `denylist` will
   * take precedence and the request will not match this route.
   *
   * The regular expressions in `allowlist` and `denylist`
   * are matched against the concatenated
   * [`pathname`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname}
   * and [`search`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search}
   * portions of the requested URL.
   *
   * *Note*: These RegExps may be evaluated against every destination URL during
   * a navigation. Avoid using
   * [complex RegExps](https://github.com/GoogleChrome/workbox/issues/3077),
   * or else your users may see delays when navigating your site.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {Object} options
   * @param {Array<RegExp>} [options.denylist] If any of these patterns match,
   * the route will not handle the request (even if a allowlist RegExp matches).
   * @param {Array<RegExp>} [options.allowlist=[/./]] If any of these patterns
   * match the URL's pathname and search parameter, the route will handle the
   * request (assuming the denylist doesn't match).
   */
  constructor(handler, {
    allowlist = [/./],
    denylist = []
  } = {}) {
    if (true) {
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArrayOfClass(allowlist, RegExp, {
        moduleName: 'workbox-routing',
        className: 'NavigationRoute',
        funcName: 'constructor',
        paramName: 'options.allowlist'
      });
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArrayOfClass(denylist, RegExp, {
        moduleName: 'workbox-routing',
        className: 'NavigationRoute',
        funcName: 'constructor',
        paramName: 'options.denylist'
      });
    }
    super(options => this._match(options), handler);
    this._allowlist = allowlist;
    this._denylist = denylist;
  }
  /**
   * Routes match handler.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {Request} options.request
   * @return {boolean}
   *
   * @private
   */
  _match({
    url,
    request
  }) {
    if (request && request.mode !== 'navigate') {
      return false;
    }
    const pathnameAndSearch = url.pathname + url.search;
    for (const regExp of this._denylist) {
      if (regExp.test(pathnameAndSearch)) {
        if (true) {
          workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The navigation route ${pathnameAndSearch} is not ` + `being used, since the URL matches this denylist pattern: ` + `${regExp.toString()}`);
        }
        return false;
      }
    }
    if (this._allowlist.some(regExp => regExp.test(pathnameAndSearch))) {
      if (true) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The navigation route ${pathnameAndSearch} ` + `is being used.`);
      }
      return true;
    }
    if (true) {
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The navigation route ${pathnameAndSearch} is not ` + `being used, since the URL being navigated to doesn't ` + `match the allowlist.`);
    }
    return false;
  }
}


/***/ }),

/***/ "./node_modules/workbox-routing/RegExpRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-routing/RegExpRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegExpRoute": () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * {@link workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(regExp, handler, method) {
    if (true) {
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
        moduleName: 'workbox-routing',
        className: 'RegExpRoute',
        funcName: 'constructor',
        paramName: 'pattern'
      });
    }
    const match = ({
      url
    }) => {
      const result = regExp.exec(url.href);
      // Return immediately if there's no match.
      if (!result) {
        return;
      }
      // Require that the match start at the first character in the URL string
      // if it's a cross-origin request.
      // See https://github.com/GoogleChrome/workbox/issues/281 for the context
      // behind this behavior.
      if (url.origin !== location.origin && result.index !== 0) {
        if (true) {
          workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` + `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` + `handle cross-origin requests if they match the entire URL.`);
        }
        return;
      }
      // If the route matches, but there aren't any capture groups defined, then
      // this will return [], which is truthy and therefore sufficient to
      // indicate a match.
      // If there are capture groups, then it will return their values.
      return result.slice(1);
    };
    super(match, handler, method);
  }
}


/***/ }),

/***/ "./node_modules/workbox-routing/Route.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-routing/Route.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
  /**
   * Constructor for Route class.
   *
   * @param {workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
    if (true) {
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
        moduleName: 'workbox-routing',
        className: 'Route',
        funcName: 'constructor',
        paramName: 'match'
      });
      if (method) {
        workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, {
          paramName: 'method'
        });
      }
    }
    // These values are referenced directly by Router so cannot be
    // altered by minificaton.
    this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    this.match = match;
    this.method = method;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(handler) {
    this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
  }
}


/***/ }),

/***/ "./node_modules/workbox-routing/Router.js":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/Router.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = new Map();
    this._defaultHandlerMap = new Map();
  }
  /**
   * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }
  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('fetch', event => {
      const {
        request
      } = event;
      const responsePromise = this.handleRequest({
        request,
        event
      });
      if (responsePromise) {
        event.respondWith(responsePromise);
      }
    });
  }
  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
  addCacheListener() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('message', event => {
      // event.data is type 'any'
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (event.data && event.data.type === 'CACHE_URLS') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const {
          payload
        } = event.data;
        if (true) {
          workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
        }
        const requestPromises = Promise.all(payload.urlsToCache.map(entry => {
          if (typeof entry === 'string') {
            entry = [entry];
          }
          const request = new Request(...entry);
          return this.handleRequest({
            request,
            event
          });
          // TODO(philipwalton): TypeScript errors without this typecast for
          // some reason (probably a bug). The real type here should work but
          // doesn't: `Array<Promise<Response> | undefined>`.
        })); // TypeScript
        event.waitUntil(requestPromises);
        // If a MessageChannel was used, reply to the message on success.
        if (event.ports && event.ports[0]) {
          void requestPromises.then(() => event.ports[0].postMessage(true));
        }
      }
    });
  }
  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle.
   * @param {ExtendableEvent} options.event The event that triggered the
   *     request.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
  handleRequest({
    request,
    event
  }) {
    if (true) {
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
        moduleName: 'workbox-routing',
        className: 'Router',
        funcName: 'handleRequest',
        paramName: 'options.request'
      });
    }
    const url = new URL(request.url, location.href);
    if (!url.protocol.startsWith('http')) {
      if (true) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
      }
      return;
    }
    const sameOrigin = url.origin === location.origin;
    const {
      params,
      route
    } = this.findMatchingRoute({
      event,
      request,
      sameOrigin,
      url
    });
    let handler = route && route.handler;
    const debugMessages = [];
    if (true) {
      if (handler) {
        debugMessages.push([`Found a route to handle this request:`, route]);
        if (params) {
          debugMessages.push([`Passing the following params to the route's handler:`, params]);
        }
      }
    }
    // If we don't have a handler because there was no matching route, then
    // fall back to defaultHandler if that's defined.
    const method = request.method;
    if (!handler && this._defaultHandlerMap.has(method)) {
      if (true) {
        debugMessages.push(`Failed to find a matching route. Falling ` + `back to the default handler for ${method}.`);
      }
      handler = this._defaultHandlerMap.get(method);
    }
    if (!handler) {
      if (true) {
        // No handler so Workbox will do nothing. If logs is set of debug
        // i.e. verbose, we should print out this information.
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
      }
      return;
    }
    if (true) {
      // We have a handler, meaning Workbox is going to handle the route.
      // print the routing details to the console.
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
      debugMessages.forEach(msg => {
        if (Array.isArray(msg)) {
          workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
        } else {
          workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
        }
      });
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
    }
    // Wrap in try and catch in case the handle method throws a synchronous
    // error. It should still callback to the catch handler.
    let responsePromise;
    try {
      responsePromise = handler.handle({
        url,
        request,
        event,
        params
      });
    } catch (err) {
      responsePromise = Promise.reject(err);
    }
    // Get route's catch handler, if it exists
    const catchHandler = route && route.catchHandler;
    if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
      responsePromise = responsePromise.catch(async err => {
        // If there's a route catch handler, process that first
        if (catchHandler) {
          if (true) {
            // Still include URL here as it will be async from the console group
            // and may not make sense without the URL
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` + ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
          }
          try {
            return await catchHandler.handle({
              url,
              request,
              event,
              params
            });
          } catch (catchErr) {
            if (catchErr instanceof Error) {
              err = catchErr;
            }
          }
        }
        if (this._catchHandler) {
          if (true) {
            // Still include URL here as it will be async from the console group
            // and may not make sense without the URL
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` + ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
          }
          return this._catchHandler.handle({
            url,
            request,
            event
          });
        }
        throw err;
      });
    }
    return responsePromise;
  }
  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {boolean} options.sameOrigin The result of comparing `url.origin`
   *     against the current origin.
   * @param {Request} options.request The request to match.
   * @param {Event} options.event The corresponding event.
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({
    url,
    sameOrigin,
    request,
    event
  }) {
    const routes = this._routes.get(request.method) || [];
    for (const route of routes) {
      let params;
      // route.match returns type any, not possible to change right now.
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const matchResult = route.match({
        url,
        sameOrigin,
        request,
        event
      });
      if (matchResult) {
        if (true) {
          // Warn developers that using an async matchCallback is almost always
          // not the right thing to do.
          if (matchResult instanceof Promise) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` + `matchCallback function was used. Please convert the ` + `following route to use a synchronous matchCallback function:`, route);
          }
        }
        // See https://github.com/GoogleChrome/workbox/issues/2079
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        params = matchResult;
        if (Array.isArray(params) && params.length === 0) {
          // Instead of passing an empty array in as params, use undefined.
          params = undefined;
        } else if (matchResult.constructor === Object &&
        // eslint-disable-line
        Object.keys(matchResult).length === 0) {
          // Instead of passing an empty object in as params, use undefined.
          params = undefined;
        } else if (typeof matchResult === 'boolean') {
          // For the boolean value true (rather than just something truth-y),
          // don't set params.
          // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
          params = undefined;
        }
        // Return early if have a match.
        return {
          route,
          params
        };
      }
    }
    // If no match was found above, return and empty object.
    return {};
  }
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to associate with this
   * default handler. Each method has its own default.
   */
  setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
    this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(handler) {
    this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
  }
  /**
   * Registers a route with the router.
   *
   * @param {workbox-routing.Route} route The route to register.
   */
  registerRoute(route) {
    if (true) {
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
        moduleName: 'workbox-routing',
        className: 'Router',
        funcName: 'registerRoute',
        paramName: 'route'
      });
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
        moduleName: 'workbox-routing',
        className: 'Router',
        funcName: 'registerRoute',
        paramName: 'route'
      });
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
        moduleName: 'workbox-routing',
        className: 'Router',
        funcName: 'registerRoute',
        paramName: 'route'
      });
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
        moduleName: 'workbox-routing',
        className: 'Router',
        funcName: 'registerRoute',
        paramName: 'route.handler'
      });
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
        moduleName: 'workbox-routing',
        className: 'Router',
        funcName: 'registerRoute',
        paramName: 'route.method'
      });
    }
    if (!this._routes.has(route.method)) {
      this._routes.set(route.method, []);
    }
    // Give precedence to all of the earlier routes by adding this additional
    // route to the end of the array.
    this._routes.get(route.method).push(route);
  }
  /**
   * Unregisters a route with the router.
   *
   * @param {workbox-routing.Route} route The route to unregister.
   */
  unregisterRoute(route) {
    if (!this._routes.has(route.method)) {
      throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
        method: route.method
      });
    }
    const routeIndex = this._routes.get(route.method).indexOf(route);
    if (routeIndex > -1) {
      this._routes.get(route.method).splice(routeIndex, 1);
    } else {
      throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
    }
  }
}


/***/ }),

/***/ "./node_modules/workbox-routing/_version.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-routing/_version.js ***!
  \**************************************************/
/***/ (() => {



// @ts-ignore
try {
  self['workbox:routing:6.5.3'] && _();
} catch (e) {}

/***/ }),

/***/ "./node_modules/workbox-routing/index.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-routing/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationRoute": () => (/* reexport safe */ _NavigationRoute_js__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute),
/* harmony export */   "RegExpRoute": () => (/* reexport safe */ _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_1__.RegExpRoute),
/* harmony export */   "Route": () => (/* reexport safe */ _Route_js__WEBPACK_IMPORTED_MODULE_3__.Route),
/* harmony export */   "Router": () => (/* reexport safe */ _Router_js__WEBPACK_IMPORTED_MODULE_4__.Router),
/* harmony export */   "registerRoute": () => (/* reexport safe */ _registerRoute_js__WEBPACK_IMPORTED_MODULE_2__.registerRoute),
/* harmony export */   "setCatchHandler": () => (/* reexport safe */ _setCatchHandler_js__WEBPACK_IMPORTED_MODULE_5__.setCatchHandler),
/* harmony export */   "setDefaultHandler": () => (/* reexport safe */ _setDefaultHandler_js__WEBPACK_IMPORTED_MODULE_6__.setDefaultHandler)
/* harmony export */ });
/* harmony import */ var _NavigationRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationRoute.js */ "./node_modules/workbox-routing/NavigationRoute.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _registerRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router.js */ "./node_modules/workbox-routing/Router.js");
/* harmony import */ var _setCatchHandler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setCatchHandler.js */ "./node_modules/workbox-routing/setCatchHandler.js");
/* harmony import */ var _setDefaultHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setDefaultHandler.js */ "./node_modules/workbox-routing/setDefaultHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_7__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * @module workbox-routing
 */


/***/ }),

/***/ "./node_modules/workbox-routing/registerRoute.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-routing/registerRoute.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerRoute": () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
  let route;
  if (typeof capture === 'string') {
    const captureUrl = new URL(capture, location.href);
    if (true) {
      if (!(capture.startsWith('/') || capture.startsWith('http'))) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
          moduleName: 'workbox-routing',
          funcName: 'registerRoute',
          paramName: 'capture'
        });
      }
      // We want to check if Express-style wildcards are in the pathname only.
      // TODO: Remove this log message in v4.
      const valueToCheck = capture.startsWith('http') ? captureUrl.pathname : capture;
      // See https://github.com/pillarjs/path-to-regexp#parameters
      const wildcards = '[*:?+]';
      if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` + `character (${wildcards}). Strings are now always interpreted as ` + `exact matches; use a RegExp for partial or wildcard matches.`);
      }
    }
    const matchCallback = ({
      url
    }) => {
      if (true) {
        if (url.pathname === captureUrl.pathname && url.origin !== captureUrl.origin) {
          workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` + `${url.toString()}. This route will only handle cross-origin requests ` + `if they match the entire URL.`);
        }
      }
      return url.href === captureUrl.href;
    };
    // If `capture` is a string then `handler` and `method` must be present.
    route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
  } else if (capture instanceof RegExp) {
    // If `capture` is a `RegExp` then `handler` and `method` must be present.
    route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
  } else if (typeof capture === 'function') {
    // If `capture` is a function then `handler` and `method` must be present.
    route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
  } else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
    route = capture;
  } else {
    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
      moduleName: 'workbox-routing',
      funcName: 'registerRoute',
      paramName: 'capture'
    });
  }
  const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
  defaultRouter.registerRoute(route);
  return route;
}


/***/ }),

/***/ "./node_modules/workbox-routing/setCatchHandler.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/setCatchHandler.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCatchHandler": () => (/* binding */ setCatchHandler)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * If a Route throws an error while handling a request, this `handler`
 * will be called and given a chance to provide a response.
 *
 * @param {workbox-routing~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 *
 * @memberof workbox-routing
 */
function setCatchHandler(handler) {
  const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreateDefaultRouter)();
  defaultRouter.setCatchHandler(handler);
}


/***/ }),

/***/ "./node_modules/workbox-routing/setDefaultHandler.js":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-routing/setDefaultHandler.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setDefaultHandler": () => (/* binding */ setDefaultHandler)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Define a default `handler` that's called when no routes explicitly
 * match the incoming request.
 *
 * Without a default handler, unmatched requests will go against the
 * network as if there were no service worker present.
 *
 * @param {workbox-routing~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 *
 * @memberof workbox-routing
 */
function setDefaultHandler(handler) {
  const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreateDefaultRouter)();
  defaultRouter.setDefaultHandler(handler);
}


/***/ }),

/***/ "./node_modules/workbox-routing/utils/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/utils/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMethod": () => (/* binding */ defaultMethod),
/* harmony export */   "validMethods": () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = ['DELETE', 'GET', 'HEAD', 'PATCH', 'POST', 'PUT'];

/***/ }),

/***/ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreateDefaultRouter": () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
  if (!defaultRouter) {
    defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
    // The helpers that use the default Router assume these listeners exist.
    defaultRouter.addFetchListener();
    defaultRouter.addCacheListener();
  }
  return defaultRouter;
};

/***/ }),

/***/ "./node_modules/workbox-routing/utils/normalizeHandler.js":
/*!****************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeHandler": () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = handler => {
  if (handler && typeof handler === 'object') {
    if (true) {
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
        moduleName: 'workbox-routing',
        className: 'Route',
        funcName: 'constructor',
        paramName: 'handler'
      });
    }
    return handler;
  } else {
    if (true) {
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
        moduleName: 'workbox-routing',
        className: 'Route',
        funcName: 'constructor',
        paramName: 'handler'
      });
    }
    return {
      handle: handler
    };
  }
};

/***/ }),

/***/ "./node_modules/workbox-strategies/CacheFirst.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-strategies/CacheFirst.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheFirst": () => (/* binding */ CacheFirst)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An implementation of a [cache-first](https://developer.chrome.com/docs/workbox/caching-strategies-overview/#cache-first-falling-back-to-network)
 * request strategy.
 *
 * A cache first strategy is useful for assets that have been revisioned,
 * such as URLs like `/styles/example.a8f5f1.css`, since they
 * can be cached for long periods of time.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-strategies
 */
class CacheFirst extends _Strategy_js__WEBPACK_IMPORTED_MODULE_3__.Strategy {
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    const logs = [];
    if (true) {
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
        moduleName: 'workbox-strategies',
        className: this.constructor.name,
        funcName: 'makeRequest',
        paramName: 'request'
      });
    }
    let response = await handler.cacheMatch(request);
    let error = undefined;
    if (!response) {
      if (true) {
        logs.push(`No response found in the '${this.cacheName}' cache. ` + `Will respond with a network request.`);
      }
      try {
        response = await handler.fetchAndCachePut(request);
      } catch (err) {
        if (err instanceof Error) {
          error = err;
        }
      }
      if (true) {
        if (response) {
          logs.push(`Got response from network.`);
        } else {
          logs.push(`Unable to get a response from the network.`);
        }
      }
    } else {
      if (true) {
        logs.push(`Found a cached response in the '${this.cacheName}' cache.`);
      }
    }
    if (true) {
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_4__.messages.strategyStart(this.constructor.name, request));
      for (const log of logs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(log);
      }
      _utils_messages_js__WEBPACK_IMPORTED_MODULE_4__.messages.printFinalResponse(response);
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupEnd();
    }
    if (!response) {
      throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('no-response', {
        url: request.url,
        error
      });
    }
    return response;
  }
}


/***/ }),

/***/ "./node_modules/workbox-strategies/CacheOnly.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-strategies/CacheOnly.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheOnly": () => (/* binding */ CacheOnly)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An implementation of a [cache-only](https://developer.chrome.com/docs/workbox/caching-strategies-overview/#cache-only)
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins](https://developer.chrome.com/docs/workbox/using-plugins/).
 *
 * If there is no cache match, this will throw a `WorkboxError` exception.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-strategies
 */
class CacheOnly extends _Strategy_js__WEBPACK_IMPORTED_MODULE_3__.Strategy {
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    if (true) {
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
        moduleName: 'workbox-strategies',
        className: this.constructor.name,
        funcName: 'makeRequest',
        paramName: 'request'
      });
    }
    const response = await handler.cacheMatch(request);
    if (true) {
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_4__.messages.strategyStart(this.constructor.name, request));
      if (response) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`Found a cached response in the '${this.cacheName}' ` + `cache.`);
        _utils_messages_js__WEBPACK_IMPORTED_MODULE_4__.messages.printFinalResponse(response);
      } else {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`No response found in the '${this.cacheName}' cache.`);
      }
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupEnd();
    }
    if (!response) {
      throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('no-response', {
        url: request.url
      });
    }
    return response;
  }
}


/***/ }),

/***/ "./node_modules/workbox-strategies/NetworkFirst.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-strategies/NetworkFirst.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkFirst": () => (/* binding */ NetworkFirst)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/cacheOkAndOpaquePlugin.js */ "./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [network first](https://developer.chrome.com/docs/workbox/caching-strategies-overview/#network-first-falling-back-to-cache)
 * request strategy.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses](https://developer.chrome.com/docs/workbox/caching-resources-during-runtime/#opaque-responses).
 * Opaque responses are are cross-origin requests where the response doesn't
 * support [CORS](https://enable-cors.org/).
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-strategies
 */
class NetworkFirst extends _Strategy_js__WEBPACK_IMPORTED_MODULE_4__.Strategy {
  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will fallback to the cache.
   *
   * This option can be used to combat
   * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
   * scenarios.
   */
  constructor(options = {}) {
    super(options);
    // If this instance contains no plugins with a 'cacheWillUpdate' callback,
    // prepend the `cacheOkAndOpaquePlugin` plugin to the plugins list.
    if (!this.plugins.some(p => 'cacheWillUpdate' in p)) {
      this.plugins.unshift(_plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_3__.cacheOkAndOpaquePlugin);
    }
    this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
    if (true) {
      if (this._networkTimeoutSeconds) {
        workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(this._networkTimeoutSeconds, 'number', {
          moduleName: 'workbox-strategies',
          className: this.constructor.name,
          funcName: 'constructor',
          paramName: 'networkTimeoutSeconds'
        });
      }
    }
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    const logs = [];
    if (true) {
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
        moduleName: 'workbox-strategies',
        className: this.constructor.name,
        funcName: 'handle',
        paramName: 'makeRequest'
      });
    }
    const promises = [];
    let timeoutId;
    if (this._networkTimeoutSeconds) {
      const {
        id,
        promise
      } = this._getTimeoutPromise({
        request,
        logs,
        handler
      });
      timeoutId = id;
      promises.push(promise);
    }
    const networkPromise = this._getNetworkPromise({
      timeoutId,
      request,
      logs,
      handler
    });
    promises.push(networkPromise);
    const response = await handler.waitUntil((async () => {
      // Promise.race() will resolve as soon as the first promise resolves.
      return (await handler.waitUntil(Promise.race(promises))) || (
      // If Promise.race() resolved with null, it might be due to a network
      // timeout + a cache miss. If that were to happen, we'd rather wait until
      // the networkPromise resolves instead of returning null.
      // Note that it's fine to await an already-resolved promise, so we don't
      // have to check to see if it's still "in flight".
      await networkPromise);
    })());
    if (true) {
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.strategyStart(this.constructor.name, request));
      for (const log of logs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(log);
      }
      _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.printFinalResponse(response);
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupEnd();
    }
    if (!response) {
      throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('no-response', {
        url: request.url
      });
    }
    return response;
  }
  /**
   * @param {Object} options
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs array
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
  _getTimeoutPromise({
    request,
    logs,
    handler
  }) {
    let timeoutId;
    const timeoutPromise = new Promise(resolve => {
      const onNetworkTimeout = async () => {
        if (true) {
          logs.push(`Timing out the network response at ` + `${this._networkTimeoutSeconds} seconds.`);
        }
        resolve(await handler.cacheMatch(request));
      };
      timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1000);
    });
    return {
      promise: timeoutPromise,
      id: timeoutId
    };
  }
  /**
   * @param {Object} options
   * @param {number|undefined} options.timeoutId
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs Array.
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
  async _getNetworkPromise({
    timeoutId,
    request,
    logs,
    handler
  }) {
    let error;
    let response;
    try {
      response = await handler.fetchAndCachePut(request);
    } catch (fetchError) {
      if (fetchError instanceof Error) {
        error = fetchError;
      }
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (true) {
      if (response) {
        logs.push(`Got response from network.`);
      } else {
        logs.push(`Unable to get a response from the network. Will respond ` + `with a cached response.`);
      }
    }
    if (error || !response) {
      response = await handler.cacheMatch(request);
      if (true) {
        if (response) {
          logs.push(`Found a cached response in the '${this.cacheName}'` + ` cache.`);
        } else {
          logs.push(`No response found in the '${this.cacheName}' cache.`);
        }
      }
    }
    return response;
  }
}


/***/ }),

/***/ "./node_modules/workbox-strategies/NetworkOnly.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-strategies/NetworkOnly.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkOnly": () => (/* binding */ NetworkOnly)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [network-only](https://developer.chrome.com/docs/workbox/caching-strategies-overview/#network-only)
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins](https://developer.chrome.com/docs/workbox/using-plugins/).
 *
 * If the network request fails, this will throw a `WorkboxError` exception.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-strategies
 */
class NetworkOnly extends _Strategy_js__WEBPACK_IMPORTED_MODULE_4__.Strategy {
  /**
   * @param {Object} [options]
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will result in a network error.
   */
  constructor(options = {}) {
    super(options);
    this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    if (true) {
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
        moduleName: 'workbox-strategies',
        className: this.constructor.name,
        funcName: '_handle',
        paramName: 'request'
      });
    }
    let error = undefined;
    let response;
    try {
      const promises = [handler.fetch(request)];
      if (this._networkTimeoutSeconds) {
        const timeoutPromise = (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_2__.timeout)(this._networkTimeoutSeconds * 1000);
        promises.push(timeoutPromise);
      }
      response = await Promise.race(promises);
      if (!response) {
        throw new Error(`Timed out the network response after ` + `${this._networkTimeoutSeconds} seconds.`);
      }
    } catch (err) {
      if (err instanceof Error) {
        error = err;
      }
    }
    if (true) {
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.strategyStart(this.constructor.name, request));
      if (response) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`Got response from network.`);
      } else {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`Unable to get a response from the network.`);
      }
      _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.printFinalResponse(response);
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupEnd();
    }
    if (!response) {
      throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('no-response', {
        url: request.url,
        error
      });
    }
    return response;
  }
}


/***/ }),

/***/ "./node_modules/workbox-strategies/StaleWhileRevalidate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-strategies/StaleWhileRevalidate.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaleWhileRevalidate": () => (/* binding */ StaleWhileRevalidate)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/cacheOkAndOpaquePlugin.js */ "./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [stale-while-revalidate](https://developer.chrome.com/docs/workbox/caching-strategies-overview/#stale-while-revalidate)
 * request strategy.
 *
 * Resources are requested from both the cache and the network in parallel.
 * The strategy will respond with the cached version if available, otherwise
 * wait for the network response. The cache is updated with the network response
 * with each successful request.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses](https://developer.chrome.com/docs/workbox/caching-resources-during-runtime/#opaque-responses).
 * Opaque responses are cross-origin requests where the response doesn't
 * support [CORS](https://enable-cors.org/).
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-strategies
 */
class StaleWhileRevalidate extends _Strategy_js__WEBPACK_IMPORTED_MODULE_4__.Strategy {
  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   */
  constructor(options = {}) {
    super(options);
    // If this instance contains no plugins with a 'cacheWillUpdate' callback,
    // prepend the `cacheOkAndOpaquePlugin` plugin to the plugins list.
    if (!this.plugins.some(p => 'cacheWillUpdate' in p)) {
      this.plugins.unshift(_plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_3__.cacheOkAndOpaquePlugin);
    }
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    const logs = [];
    if (true) {
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
        moduleName: 'workbox-strategies',
        className: this.constructor.name,
        funcName: 'handle',
        paramName: 'request'
      });
    }
    const fetchAndCachePromise = handler.fetchAndCachePut(request).catch(() => {
      // Swallow this error because a 'no-response' error will be thrown in
      // main handler return flow. This will be in the `waitUntil()` flow.
    });
    void handler.waitUntil(fetchAndCachePromise);
    let response = await handler.cacheMatch(request);
    let error;
    if (response) {
      if (true) {
        logs.push(`Found a cached response in the '${this.cacheName}'` + ` cache. Will update with the network response in the background.`);
      }
    } else {
      if (true) {
        logs.push(`No response found in the '${this.cacheName}' cache. ` + `Will wait for the network response.`);
      }
      try {
        // NOTE(philipwalton): Really annoying that we have to type cast here.
        // https://github.com/microsoft/TypeScript/issues/20006
        response = await fetchAndCachePromise;
      } catch (err) {
        if (err instanceof Error) {
          error = err;
        }
      }
    }
    if (true) {
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.strategyStart(this.constructor.name, request));
      for (const log of logs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(log);
      }
      _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.printFinalResponse(response);
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupEnd();
    }
    if (!response) {
      throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('no-response', {
        url: request.url,
        error
      });
    }
    return response;
  }
}


/***/ }),

/***/ "./node_modules/workbox-strategies/Strategy.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/Strategy.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strategy": () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  constructor(options = {}) {
    /**
     * Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     *
     * @type {string}
     */
    this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
    /**
     * The list
     * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * used by this strategy.
     *
     * @type {Array<Object>}
     */
    this.plugins = options.plugins || [];
    /**
     * Values passed along to the
     * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
     * of all fetch() requests made by this strategy.
     *
     * @type {Object}
     */
    this.fetchOptions = options.fetchOptions;
    /**
     * The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     *
     * @type {Object}
     */
    this.matchOptions = options.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * {@link workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */
  handle(options) {
    const [responseDone] = this.handleAll(options);
    return responseDone;
  }
  /**
   * Similar to {@link workbox-strategies.Strategy~handle}, but
   * instead of just returning a `Promise` that resolves to a `Response` it
   * it will return an tuple of `[response, done]` promises, where the former
   * (`response`) is equivalent to what `handle()` returns, and the latter is a
   * Promise that will resolve once any promises that were added to
   * `event.waitUntil()` as part of performing the strategy have completed.
   *
   * You can await the `done` promise to ensure any extra work performed by
   * the strategy (usually caching responses) completes successfully.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   * @return {Array<Promise>} A tuple of [response, done]
   *     promises that can be used to determine when the response resolves as
   *     well as when the handler has completed all its work.
   */
  handleAll(options) {
    // Allow for flexible options to be passed.
    if (options instanceof FetchEvent) {
      options = {
        event: options,
        request: options.request
      };
    }
    const event = options.event;
    const request = typeof options.request === 'string' ? new Request(options.request) : options.request;
    const params = 'params' in options ? options.params : undefined;
    const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, {
      event,
      request,
      params
    });
    const responseDone = this._getResponse(handler, request, event);
    const handlerDone = this._awaitComplete(responseDone, handler, request, event);
    // Return an array of promises, suitable for use with Promise.all().
    return [responseDone, handlerDone];
  }
  async _getResponse(handler, request, event) {
    await handler.runCallbacks('handlerWillStart', {
      event,
      request
    });
    let response = undefined;
    try {
      response = await this._handle(request, handler);
      // The "official" Strategy subclasses all throw this error automatically,
      // but in case a third-party Strategy doesn't, ensure that we have a
      // consistent failure when there's no response or an error response.
      if (!response || response.type === 'error') {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', {
          url: request.url
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        for (const callback of handler.iterateCallbacks('handlerDidError')) {
          response = await callback({
            error,
            event,
            request
          });
          if (response) {
            break;
          }
        }
      }
      if (!response) {
        throw error;
      } else if (true) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` + `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` + `a handlerDidError plugin.`);
      }
    }
    for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
      response = await callback({
        event,
        request,
        response
      });
    }
    return response;
  }
  async _awaitComplete(responseDone, handler, request, event) {
    let response;
    let error;
    try {
      response = await responseDone;
    } catch (error) {
      // Ignore errors, as response errors should be caught via the `response`
      // promise above. The `done` promise will only throw for errors in
      // promises passed to `handler.waitUntil()`.
    }
    try {
      await handler.runCallbacks('handlerDidRespond', {
        event,
        request,
        response
      });
      await handler.doneWaiting();
    } catch (waitUntilError) {
      if (waitUntilError instanceof Error) {
        error = waitUntilError;
      }
    }
    await handler.runCallbacks('handlerDidComplete', {
      event,
      request,
      response,
      error: error
    });
    handler.destroy();
    if (error) {
      throw error;
    }
  }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */

/***/ }),

/***/ "./node_modules/workbox-strategies/StrategyHandler.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-strategies/StrategyHandler.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrategyHandler": () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
  return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params] The return value from the
   *     {@link workbox-routing~matchCallback} (if applicable).
   */
  constructor(strategy, options) {
    this._cacheKeys = {};
    /**
     * The request the strategy is performing (passed to the strategy's
     * `handle()` or `handleAll()` method).
     * @name request
     * @instance
     * @type {Request}
     * @memberof workbox-strategies.StrategyHandler
     */
    /**
     * The event associated with this request.
     * @name event
     * @instance
     * @type {ExtendableEvent}
     * @memberof workbox-strategies.StrategyHandler
     */
    /**
     * A `URL` instance of `request.url` (if passed to the strategy's
     * `handle()` or `handleAll()` method).
     * Note: the `url` param will be present if the strategy was invoked
     * from a workbox `Route` object.
     * @name url
     * @instance
     * @type {URL|undefined}
     * @memberof workbox-strategies.StrategyHandler
     */
    /**
     * A `param` value (if passed to the strategy's
     * `handle()` or `handleAll()` method).
     * Note: the `param` param will be present if the strategy was invoked
     * from a workbox `Route` object and the
     * {@link workbox-routing~matchCallback} returned
     * a truthy value (it will be that value).
     * @name params
     * @instance
     * @type {*|undefined}
     * @memberof workbox-strategies.StrategyHandler
     */
    if (true) {
      workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
        moduleName: 'workbox-strategies',
        className: 'StrategyHandler',
        funcName: 'constructor',
        paramName: 'options.event'
      });
    }
    Object.assign(this, options);
    this.event = options.event;
    this._strategy = strategy;
    this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
    this._extendLifetimePromises = [];
    // Copy the plugins list (since it's mutable on the strategy),
    // so any mutations don't affect this handler instance.
    this._plugins = [...strategy.plugins];
    this._pluginStateMap = new Map();
    for (const plugin of this._plugins) {
      this._pluginStateMap.set(plugin, {});
    }
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */
  async fetch(input) {
    const {
      event
    } = this;
    let request = toRequest(input);
    if (request.mode === 'navigate' && event instanceof FetchEvent && event.preloadResponse) {
      const possiblePreloadResponse = await event.preloadResponse;
      if (possiblePreloadResponse) {
        if (true) {
          workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` + `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
        }
        return possiblePreloadResponse;
      }
    }
    // If there is a fetchDidFail plugin, we need to save a clone of the
    // original request before it's either modified by a requestWillFetch
    // plugin or before the original request's body is consumed via fetch().
    const originalRequest = this.hasCallback('fetchDidFail') ? request.clone() : null;
    try {
      for (const cb of this.iterateCallbacks('requestWillFetch')) {
        request = await cb({
          request: request.clone(),
          event
        });
      }
    } catch (err) {
      if (err instanceof Error) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
          thrownErrorMessage: err.message
        });
      }
    }
    // The request can be altered by plugins with `requestWillFetch` making
    // the original request (most likely from a `fetch` event) different
    // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
    const pluginFilteredRequest = request.clone();
    try {
      let fetchResponse;
      // See https://github.com/GoogleChrome/workbox/issues/1796
      fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
      if (true) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` + `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` + `status '${fetchResponse.status}'.`);
      }
      for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
        fetchResponse = await callback({
          event,
          request: pluginFilteredRequest,
          response: fetchResponse
        });
      }
      return fetchResponse;
    } catch (error) {
      if (true) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` + `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
      }
      // `originalRequest` will only exist if a `fetchDidFail` callback
      // is being used (see above).
      if (originalRequest) {
        await this.runCallbacks('fetchDidFail', {
          error: error,
          event,
          originalRequest: originalRequest.clone(),
          request: pluginFilteredRequest.clone()
        });
      }
      throw error;
    }
  }
  /**
   * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
   * the response generated by `this.fetch()`.
   *
   * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
   * so you do not have to manually call `waitUntil()` on the event.
   *
   * @param {Request|string} input The request or URL to fetch and cache.
   * @return {Promise<Response>}
   */
  async fetchAndCachePut(input) {
    const response = await this.fetch(input);
    const responseClone = response.clone();
    void this.waitUntil(this.cachePut(input, responseClone));
    return response;
  }
  /**
   * Matches a request from the cache (and invokes any applicable plugin
   * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
   * defined on the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cachedResponseWillByUsed()
   *
   * @param {Request|string} key The Request or URL to use as the cache key.
   * @return {Promise<Response|undefined>} A matching response, if found.
   */
  async cacheMatch(key) {
    const request = toRequest(key);
    let cachedResponse;
    const {
      cacheName,
      matchOptions
    } = this._strategy;
    const effectiveRequest = await this.getCacheKey(request, 'read');
    const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), {
      cacheName
    });
    cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
    if (true) {
      if (cachedResponse) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
      } else {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
      }
    }
    for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
      cachedResponse = (await callback({
        cacheName,
        matchOptions,
        cachedResponse,
        request: effectiveRequest,
        event: this.event
      })) || undefined;
    }
    return cachedResponse;
  }
  /**
   * Puts a request/response pair in the cache (and invokes any applicable
   * plugin callback methods) using the `cacheName` and `plugins` defined on
   * the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cacheWillUpdate()
   * - cacheDidUpdate()
   *
   * @param {Request|string} key The request or URL to use as the cache key.
   * @param {Response} response The response to cache.
   * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
   * not be cached, and `true` otherwise.
   */
  async cachePut(key, response) {
    const request = toRequest(key);
    // Run in the next task to avoid blocking other cache reads.
    // https://github.com/w3c/ServiceWorker/issues/1397
    await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
    const effectiveRequest = await this.getCacheKey(request, 'write');
    if (true) {
      if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
          url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
          method: effectiveRequest.method
        });
      }
      // See https://github.com/GoogleChrome/workbox/issues/2818
      const vary = response.headers.get('Vary');
      if (vary) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` + `has a 'Vary: ${vary}' header. ` + `Consider setting the {ignoreVary: true} option on your strategy ` + `to ensure cache matching and deletion works as expected.`);
      }
    }
    if (!response) {
      if (true) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` + `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
      }
      throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
        url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)
      });
    }
    const responseToCache = await this._ensureResponseSafeToCache(response);
    if (!responseToCache) {
      if (true) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` + `will not be cached.`, responseToCache);
      }
      return false;
    }
    const {
      cacheName,
      matchOptions
    } = this._strategy;
    const cache = await self.caches.open(cacheName);
    const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
    const oldResponse = hasCacheUpdateCallback ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
    // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
    // feature. Consider into ways to only add this behavior if using
    // precaching.
    cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions) : null;
    if (true) {
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` + `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
    }
    try {
      await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
    } catch (error) {
      if (error instanceof Error) {
        // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
        if (error.name === 'QuotaExceededError') {
          await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
        }
        throw error;
      }
    }
    for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
      await callback({
        cacheName,
        oldResponse,
        newResponse: responseToCache.clone(),
        request: effectiveRequest,
        event: this.event
      });
    }
    return true;
  }
  /**
   * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
   * executes any of those callbacks found in sequence. The final `Request`
   * object returned by the last plugin is treated as the cache key for cache
   * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
   * been registered, the passed request is returned unmodified
   *
   * @param {Request} request
   * @param {string} mode
   * @return {Promise<Request>}
   */
  async getCacheKey(request, mode) {
    const key = `${request.url} | ${mode}`;
    if (!this._cacheKeys[key]) {
      let effectiveRequest = request;
      for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
        effectiveRequest = toRequest(await callback({
          mode,
          request: effectiveRequest,
          event: this.event,
          // params has a type any can't change right now.
          params: this.params // eslint-disable-line
        }));
      }

      this._cacheKeys[key] = effectiveRequest;
    }
    return this._cacheKeys[key];
  }
  /**
   * Returns true if the strategy has at least one plugin with the given
   * callback.
   *
   * @param {string} name The name of the callback to check for.
   * @return {boolean}
   */
  hasCallback(name) {
    for (const plugin of this._strategy.plugins) {
      if (name in plugin) {
        return true;
      }
    }
    return false;
  }
  /**
   * Runs all plugin callbacks matching the given name, in order, passing the
   * given param object (merged ith the current plugin state) as the only
   * argument.
   *
   * Note: since this method runs all plugins, it's not suitable for cases
   * where the return value of a callback needs to be applied prior to calling
   * the next callback. See
   * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
   * below for how to handle that case.
   *
   * @param {string} name The name of the callback to run within each plugin.
   * @param {Object} param The object to pass as the first (and only) param
   *     when executing each callback. This object will be merged with the
   *     current plugin state prior to callback execution.
   */
  async runCallbacks(name, param) {
    for (const callback of this.iterateCallbacks(name)) {
      // TODO(philipwalton): not sure why `any` is needed. It seems like
      // this should work with `as WorkboxPluginCallbackParam[C]`.
      await callback(param);
    }
  }
  /**
   * Accepts a callback and returns an iterable of matching plugin callbacks,
   * where each callback is wrapped with the current handler state (i.e. when
   * you call each callback, whatever object parameter you pass it will
   * be merged with the plugin's current state).
   *
   * @param {string} name The name fo the callback to run
   * @return {Array<Function>}
   */
  *iterateCallbacks(name) {
    for (const plugin of this._strategy.plugins) {
      if (typeof plugin[name] === 'function') {
        const state = this._pluginStateMap.get(plugin);
        const statefulCallback = param => {
          const statefulParam = Object.assign(Object.assign({}, param), {
            state
          });
          // TODO(philipwalton): not sure why `any` is needed. It seems like
          // this should work with `as WorkboxPluginCallbackParam[C]`.
          return plugin[name](statefulParam);
        };
        yield statefulCallback;
      }
    }
  }
  /**
   * Adds a promise to the
   * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
   * of the event event associated with the request being handled (usually a
   * `FetchEvent`).
   *
   * Note: you can await
   * {@link workbox-strategies.StrategyHandler~doneWaiting}
   * to know when all added promises have settled.
   *
   * @param {Promise} promise A promise to add to the extend lifetime promises
   *     of the event that triggered the request.
   */
  waitUntil(promise) {
    this._extendLifetimePromises.push(promise);
    return promise;
  }
  /**
   * Returns a promise that resolves once all promises passed to
   * {@link workbox-strategies.StrategyHandler~waitUntil}
   * have settled.
   *
   * Note: any work done after `doneWaiting()` settles should be manually
   * passed to an event's `waitUntil()` method (not this handler's
   * `waitUntil()` method), otherwise the service worker thread my be killed
   * prior to your work completing.
   */
  async doneWaiting() {
    let promise;
    while (promise = this._extendLifetimePromises.shift()) {
      await promise;
    }
  }
  /**
   * Stops running the strategy and immediately resolves any pending
   * `waitUntil()` promises.
   */
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  /**
   * This method will call cacheWillUpdate on the available plugins (or use
   * status === 200) to determine if the Response is safe and valid to cache.
   *
   * @param {Request} options.request
   * @param {Response} options.response
   * @return {Promise<Response|undefined>}
   *
   * @private
   */
  async _ensureResponseSafeToCache(response) {
    let responseToCache = response;
    let pluginsUsed = false;
    for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
      responseToCache = (await callback({
        request: this.request,
        response: responseToCache,
        event: this.event
      })) || undefined;
      pluginsUsed = true;
      if (!responseToCache) {
        break;
      }
    }
    if (!pluginsUsed) {
      if (responseToCache && responseToCache.status !== 200) {
        responseToCache = undefined;
      }
      if (true) {
        if (responseToCache) {
          if (responseToCache.status !== 200) {
            if (responseToCache.status === 0) {
              workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` + `is an opaque response. The caching strategy that you're ` + `using will not cache opaque responses by default.`);
            } else {
              workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` + `returned a status code of '${response.status}' and won't ` + `be cached as a result.`);
            }
          }
        }
      }
    }
    return responseToCache;
  }
}


/***/ }),

/***/ "./node_modules/workbox-strategies/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/_version.js ***!
  \*****************************************************/
/***/ (() => {



// @ts-ignore
try {
  self['workbox:strategies:6.5.3'] && _();
} catch (e) {}

/***/ }),

/***/ "./node_modules/workbox-strategies/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-strategies/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheFirst": () => (/* reexport safe */ _CacheFirst_js__WEBPACK_IMPORTED_MODULE_0__.CacheFirst),
/* harmony export */   "CacheOnly": () => (/* reexport safe */ _CacheOnly_js__WEBPACK_IMPORTED_MODULE_1__.CacheOnly),
/* harmony export */   "NetworkFirst": () => (/* reexport safe */ _NetworkFirst_js__WEBPACK_IMPORTED_MODULE_2__.NetworkFirst),
/* harmony export */   "NetworkOnly": () => (/* reexport safe */ _NetworkOnly_js__WEBPACK_IMPORTED_MODULE_3__.NetworkOnly),
/* harmony export */   "StaleWhileRevalidate": () => (/* reexport safe */ _StaleWhileRevalidate_js__WEBPACK_IMPORTED_MODULE_4__.StaleWhileRevalidate),
/* harmony export */   "Strategy": () => (/* reexport safe */ _Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy),
/* harmony export */   "StrategyHandler": () => (/* reexport safe */ _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_6__.StrategyHandler)
/* harmony export */ });
/* harmony import */ var _CacheFirst_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheFirst.js */ "./node_modules/workbox-strategies/CacheFirst.js");
/* harmony import */ var _CacheOnly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CacheOnly.js */ "./node_modules/workbox-strategies/CacheOnly.js");
/* harmony import */ var _NetworkFirst_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NetworkFirst.js */ "./node_modules/workbox-strategies/NetworkFirst.js");
/* harmony import */ var _NetworkOnly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NetworkOnly.js */ "./node_modules/workbox-strategies/NetworkOnly.js");
/* harmony import */ var _StaleWhileRevalidate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StaleWhileRevalidate.js */ "./node_modules/workbox-strategies/StaleWhileRevalidate.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_7__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * There are common caching strategies that most service workers will need
 * and use. This module provides simple implementations of these strategies.
 *
 * @module workbox-strategies
 */


/***/ }),

/***/ "./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js":
/*!***************************************************************************!*\
  !*** ./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheOkAndOpaquePlugin": () => (/* binding */ cacheOkAndOpaquePlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const cacheOkAndOpaquePlugin = {
  /**
   * Returns a valid response (to allow caching) if the status is 200 (OK) or
   * 0 (opaque).
   *
   * @param {Object} options
   * @param {Response} options.response
   * @return {Response|null}
   *
   * @private
   */
  cacheWillUpdate: async ({
    response
  }) => {
    if (response.status === 200 || response.status === 0) {
      return response;
    }
    return null;
  }
};

/***/ }),

/***/ "./node_modules/workbox-strategies/utils/messages.js":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-strategies/utils/messages.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



const messages = {
  strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url)}'`,
  printFinalResponse: response => {
    if (response) {
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`View the final response here.`);
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(response || '[No response returned]');
      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
  }
};

/***/ }),

/***/ "./node_modules/workbox-cacheable-response/index.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-cacheable-response/index.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheableResponse": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.CacheableResponse),
/* harmony export */   "CacheableResponsePlugin": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.CacheableResponsePlugin)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-cacheable-response/index.js");


/***/ }),

/***/ "./node_modules/workbox-expiration/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-expiration/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheExpiration": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.CacheExpiration),
/* harmony export */   "ExpirationPlugin": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.ExpirationPlugin)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-expiration/index.js");


/***/ }),

/***/ "./node_modules/workbox-recipes/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/workbox-recipes/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "googleFontsCache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.googleFontsCache),
/* harmony export */   "imageCache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.imageCache),
/* harmony export */   "offlineFallback": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.offlineFallback),
/* harmony export */   "pageCache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.pageCache),
/* harmony export */   "staticResourceCache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.staticResourceCache),
/* harmony export */   "warmStrategyCache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.warmStrategyCache)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-recipes/index.js");


/***/ }),

/***/ "./node_modules/workbox-routing/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute),
/* harmony export */   "RegExpRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.RegExpRoute),
/* harmony export */   "Route": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Route),
/* harmony export */   "Router": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Router),
/* harmony export */   "registerRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute),
/* harmony export */   "setCatchHandler": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.setCatchHandler),
/* harmony export */   "setDefaultHandler": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.setDefaultHandler)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-routing/index.js");


/***/ }),

/***/ "./node_modules/workbox-strategies/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-strategies/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheFirst": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.CacheFirst),
/* harmony export */   "CacheOnly": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.CacheOnly),
/* harmony export */   "NetworkFirst": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.NetworkFirst),
/* harmony export */   "NetworkOnly": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.NetworkOnly),
/* harmony export */   "StaleWhileRevalidate": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.StaleWhileRevalidate),
/* harmony export */   "Strategy": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Strategy),
/* harmony export */   "StrategyHandler": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.StrategyHandler)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-strategies/index.js");


/***/ }),

/***/ "./node_modules/idb/build/index.js":
/*!*****************************************!*\
  !*** ./node_modules/idb/build/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteDB": () => (/* binding */ deleteDB),
/* harmony export */   "openDB": () => (/* binding */ openDB),
/* harmony export */   "unwrap": () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   "wrap": () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)
/* harmony export */ });
/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-idb-value.js */ "./node_modules/idb/build/wrap-idb-value.js");



/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version, {
  blocked,
  upgrade,
  blocking,
  terminated
} = {}) {
  const request = indexedDB.open(name, version);
  const openPromise = (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);
  if (upgrade) {
    request.addEventListener('upgradeneeded', event => {
      upgrade((0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction), event);
    });
  }
  if (blocked) {
    request.addEventListener('blocked', event => blocked(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    event.oldVersion, event.newVersion, event));
  }
  openPromise.then(db => {
    if (terminated) db.addEventListener('close', () => terminated());
    if (blocking) {
      db.addEventListener('versionchange', event => blocking(event.oldVersion, event.newVersion, event));
    }
  }).catch(() => {});
  return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name, {
  blocked
} = {}) {
  const request = indexedDB.deleteDatabase(name);
  if (blocked) {
    request.addEventListener('blocked', event => blocked(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    event.oldVersion, event));
  }
  return (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(() => undefined);
}
const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
const writeMethods = ['put', 'add', 'delete', 'clear'];
const cachedMethods = new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === 'string')) {
    return;
  }
  if (cachedMethods.get(prop)) return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, '');
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (
  // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
  !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
    return;
  }
  const method = async function (storeName, ...args) {
    // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
    const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
    let target = tx.store;
    if (useIndex) target = target.index(args.shift());
    // Must reject if op rejects.
    // If it's a write operation, must reject if tx.done rejects.
    // Must reject with op rejection first.
    // Must resolve with op value.
    // Must handle both promises (no unhandled rejections)
    return (await Promise.all([target[targetFuncName](...args), isWrite && tx.done]))[0];
  };
  cachedMethods.set(prop, method);
  return method;
}
(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)(oldTraps => ({
  ...oldTraps,
  get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
  has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));


/***/ }),

/***/ "./node_modules/idb/build/wrap-idb-value.js":
/*!**************************************************!*\
  !*** ./node_modules/idb/build/wrap-idb-value.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ reverseTransformCache),
/* harmony export */   "i": () => (/* binding */ instanceOfAny),
/* harmony export */   "r": () => (/* binding */ replaceTraps),
/* harmony export */   "u": () => (/* binding */ unwrap),
/* harmony export */   "w": () => (/* binding */ wrap)
/* harmony export */ });
const instanceOfAny = (object, constructors) => constructors.some(c => object instanceof c);
let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey]);
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = () => {
      request.removeEventListener('success', success);
      request.removeEventListener('error', error);
    };
    const success = () => {
      resolve(wrap(request.result));
      unlisten();
    };
    const error = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener('success', success);
    request.addEventListener('error', error);
  });
  promise.then(value => {
    // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
    // (see wrapFunction).
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    }
    // Catching to avoid "Uncaught Promise exceptions"
  }).catch(() => {});
  // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
  // is because we create many promises from a single IDBRequest.
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  // Early bail if we've already created a done promise for this transaction.
  if (transactionDoneMap.has(tx)) return;
  const done = new Promise((resolve, reject) => {
    const unlisten = () => {
      tx.removeEventListener('complete', complete);
      tx.removeEventListener('error', error);
      tx.removeEventListener('abort', error);
    };
    const complete = () => {
      resolve();
      unlisten();
    };
    const error = () => {
      reject(tx.error || new DOMException('AbortError', 'AbortError'));
      unlisten();
    };
    tx.addEventListener('complete', complete);
    tx.addEventListener('error', error);
    tx.addEventListener('abort', error);
  });
  // Cache it for later retrieval.
  transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
  get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      // Special handling for transaction.done.
      if (prop === 'done') return transactionDoneMap.get(target);
      // Polyfill for objectStoreNames because of Edge.
      if (prop === 'objectStoreNames') {
        return target.objectStoreNames || transactionStoreNamesMap.get(target);
      }
      // Make tx.store return the only store in the transaction, or undefined if there are many.
      if (prop === 'store') {
        return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    // Else transform whatever we get back.
    return wrap(target[prop]);
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has(target, prop) {
    if (target instanceof IDBTransaction && (prop === 'done' || prop === 'store')) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  // Due to expected object equality (which is enforced by the caching in `wrap`), we
  // only create one new func per func.
  // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
  if (func === IDBDatabase.prototype.transaction && !('objectStoreNames' in IDBTransaction.prototype)) {
    return function (storeNames, ...args) {
      const tx = func.call(unwrap(this), storeNames, ...args);
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap(tx);
    };
  }
  // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
  // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
  // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
  // with real promises, so each advance methods returns a new promise for the cursor object, or
  // undefined if the end of the cursor has been reached.
  if (getCursorAdvanceMethods().includes(func)) {
    return function (...args) {
      // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
      // the original object.
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }
  return function (...args) {
    // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
    // the original object.
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === 'function') return wrapFunction(value);
  // This doesn't return, it just creates a 'done' promise for the transaction,
  // which is later returned for transaction.done (see idbObjectHandler).
  if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
  // Return the same value back if we're not going to transform it.
  return value;
}
function wrap(value) {
  // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
  // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
  if (value instanceof IDBRequest) return promisifyRequest(value);
  // If we've already transformed this value before, reuse the transformed value.
  // This is faster, but it also provides object equality.
  if (transformCache.has(value)) return transformCache.get(value);
  const newValue = transformCachableValue(value);
  // Not all types are transformed.
  // These may be primitive types, so they can't be WeakMap keys.
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
const unwrap = value => reverseTransformCache.get(value);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./portfolio/static/js/sw.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching_precacheAndRoute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching/precacheAndRoute */ "./node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var workbox_recipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-recipes */ "./node_modules/workbox-recipes/index.mjs");
/* harmony import */ var workbox_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing */ "./node_modules/workbox-routing/index.mjs");
/* harmony import */ var workbox_strategies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-strategies */ "./node_modules/workbox-strategies/index.mjs");
/* harmony import */ var workbox_cacheable_response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-cacheable-response */ "./node_modules/workbox-cacheable-response/index.mjs");
/* harmony import */ var workbox_expiration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-expiration */ "./node_modules/workbox-expiration/index.mjs");


// import { setCatchHandler, setDefaultHandler, registerRoute } from 'workbox-routing';
// import { NetworkOnly, StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';




const manifest = [{'revision':'9aa081bf04b0cc0b396741346d0b5411','url':'/static/bundles/assets/android-chrome-144x144.png'},{'revision':'eff7ec44ea62f196467185b5fb395a3f','url':'/static/bundles/assets/android-chrome-192x192.png'},{'revision':'714d0cd63ad2300621fa1dc1ec10e00f','url':'/static/bundles/assets/android-chrome-256x256.png'},{'revision':'043c02db81db187ce4e0d317221f2361','url':'/static/bundles/assets/android-chrome-36x36.png'},{'revision':'81339766ddedf63d458c177e3d2c64a7','url':'/static/bundles/assets/android-chrome-384x384.png'},{'revision':'7a6d45e6e2b3b38c68e50c7feec5b3da','url':'/static/bundles/assets/android-chrome-48x48.png'},{'revision':'18e1b1acd009172c53a2bdf3589d12d9','url':'/static/bundles/assets/android-chrome-512x512.png'},{'revision':'d1af0f5f78e3848463a414c45bfcfdd9','url':'/static/bundles/assets/android-chrome-72x72.png'},{'revision':'b0981cb0ad4b94c68897f0c774ae70a9','url':'/static/bundles/assets/android-chrome-96x96.png'},{'revision':'93d978870f6df361facf7609fc886642','url':'/static/bundles/assets/apple-touch-icon-1024x1024.png'},{'revision':'ac2076a47e992a860e03621ed0a1a158','url':'/static/bundles/assets/apple-touch-icon-114x114.png'},{'revision':'8b957fd2f81c1e6d9df909ed2a5370ac','url':'/static/bundles/assets/apple-touch-icon-120x120.png'},{'revision':'b534e163843ea70d2b4ae73008d20bf8','url':'/static/bundles/assets/apple-touch-icon-144x144.png'},{'revision':'3950017fd5787e984e40f8c74cb23f4c','url':'/static/bundles/assets/apple-touch-icon-152x152.png'},{'revision':'35f3e32f0da6b33966b74db7609fae01','url':'/static/bundles/assets/apple-touch-icon-167x167.png'},{'revision':'7deeab69c111a8a85accad43cb47d9dd','url':'/static/bundles/assets/apple-touch-icon-180x180.png'},{'revision':'074280a0ecc029d4a304a24cf90f4b0d','url':'/static/bundles/assets/apple-touch-icon-57x57.png'},{'revision':'f3c67902f2e92f8d6eda165a1384cf97','url':'/static/bundles/assets/apple-touch-icon-60x60.png'},{'revision':'995a3f1dbe845b955c3936b97c4a8aa5','url':'/static/bundles/assets/apple-touch-icon-72x72.png'},{'revision':'945b07066505bcb97ffc668dbf2e3285','url':'/static/bundles/assets/apple-touch-icon-76x76.png'},{'revision':'7deeab69c111a8a85accad43cb47d9dd','url':'/static/bundles/assets/apple-touch-icon-precomposed.png'},{'revision':'7deeab69c111a8a85accad43cb47d9dd','url':'/static/bundles/assets/apple-touch-icon.png'},{'revision':'ac855251e86a3f59b314f78cbb355554','url':'/static/bundles/assets/browserconfig.xml'},{'revision':'20e01b6efb11692c0f289ca2c67c1fbe','url':'/static/bundles/assets/favicon-16x16.png'},{'revision':'0b18ef26448e488531859ae709978ff8','url':'/static/bundles/assets/favicon-32x32.png'},{'revision':'7a6d45e6e2b3b38c68e50c7feec5b3da','url':'/static/bundles/assets/favicon-48x48.png'},{'revision':'f9afc8fc7ab182c68a5538e06094a847','url':'/static/bundles/assets/favicon.ico'},{'revision':'ebf86de8d5da83ef7055f352f142bbe1','url':'/static/bundles/assets/firefox_app_128x128.png'},{'revision':'512f909ab4aa939c077f78b8aa40c79e','url':'/static/bundles/assets/firefox_app_512x512.png'},{'revision':'091579635f7fe7a3c716260c42e865fd','url':'/static/bundles/assets/firefox_app_60x60.png'},{'revision':'c0cbc63a61e5a5749d683674628e2467','url':'/static/bundles/assets/manifest.json'},{'revision':'ad71116472d5c6df58004bde0a3c7918','url':'/static/bundles/assets/manifest.webapp'},{'revision':'9aa081bf04b0cc0b396741346d0b5411','url':'/static/bundles/assets/mstile-144x144.png'},{'revision':'f8d72d460370adfb05bc93d5ae23d36b','url':'/static/bundles/assets/mstile-150x150.png'},{'revision':'80ac203eef42ab4acde0ee6736ef4c4d','url':'/static/bundles/assets/mstile-310x150.png'},{'revision':'18632e41610623338de7ceb237ec16e1','url':'/static/bundles/assets/mstile-310x310.png'},{'revision':'803aec00fadce60534b08eead74166a9','url':'/static/bundles/assets/mstile-70x70.png'},{'revision':null,'url':'/static/bundles/css/project.47f23d6c4ba0572c6615.css'},{'revision':null,'url':'/static/bundles/css/vendors-node_modules_alpinejs_intersect_dist_module_esm_js-node_modules_alpinejs_dist_module_-b1cb38.5695f9812719b2efeb14.css'},{'revision':'f6b10350158593ef7901403daa64c5c4','url':'/static/bundles/images/bg/dark-bg.jpeg'},{'revision':'9c406e364082e2f31a207ed753b13546','url':'/static/bundles/images/bg/light-bg.jpeg'},{'revision':'db8484ec5181804ffc205ad9b9fa890e','url':'/static/bundles/images/favicons/cookies.svg'},{'revision':'a66bc42b4e8afc2b6e422cef779c1785','url':'/static/bundles/images/favicons/favicon.ico'},{'revision':'d6b0cd24a010d2ecc1c51059c4a8064d','url':'/static/bundles/images/favicons/hire-me-icon.svg'},{'revision':'b57f03db95e6e41dbc1591472560799c','url':'/static/bundles/images/favicons/logo-light.png'},{'revision':'e25b60b79e41fcc931343af87cd4ae8b','url':'/static/bundles/images/favicons/logo.png'},{'revision':'96a152a2780f77b8516836ca1de94d25','url':'/static/bundles/images/favicons/privacy.svg'},{'revision':'017017e70d3909ee2814bde824415b98','url':'/static/bundles/images/fonts/facebook-light.svg'},{'revision':'44d330650989ebee7c5f873795652de0','url':'/static/bundles/images/fonts/instagram.svg'},{'revision':'974eb6c5430e0e74a323f46fe8271271','url':'/static/bundles/images/fonts/linkedin-light.svg'},{'revision':'2f403c5088314413b9fea29c9a433edd','url':'/static/bundles/images/fonts/skype-light.svg'},{'revision':'3d1eb6048b5abe6b5fdcc77f3c5ad106','url':'/static/bundles/images/fonts/twitter-light.svg'},{'revision':'b2ec957f665f03ad3d11cf5b7ccb0bcf','url':'/static/bundles/images/logos/Htmx.svg'},{'revision':'931c23ad8c5b042d583e70a9419308c1','url':'/static/bundles/images/logos/celery.svg'},{'revision':'80bc910e99350a466adfca32dfcab19e','url':'/static/bundles/images/logos/css.svg'},{'revision':'384ad99903293e87f01f49214db88050','url':'/static/bundles/images/logos/dartlang.svg'},{'revision':'e94a9dda249944ef61c4000dd1c4c727','url':'/static/bundles/images/logos/docker.png'},{'revision':'b77a278f3896de0236d5686862e69a9f','url':'/static/bundles/images/logos/docker.svg'},{'revision':'3fd21138c218e8d8d531e094c225fdd5','url':'/static/bundles/images/logos/fastapi.svg'},{'revision':'1c4f37801e58491b4778dcece69baadd','url':'/static/bundles/images/logos/figma.svg'},{'revision':'59a662c262bb9fae1751abe4d13abb84','url':'/static/bundles/images/logos/flutterio.svg'},{'revision':'35b0c13c1ea5ac3e912df079e86b5d4b','url':'/static/bundles/images/logos/heroku.svg'},{'revision':'9f2e1637c83e37e8f555044e12324734','url':'/static/bundles/images/logos/html5.svg'},{'revision':'cf696c5bf3a1ae3912a410304e9cd526','url':'/static/bundles/images/logos/illustrator.svg'},{'revision':'0d4d788a9a77e51b6930d05bf6b5e34f','url':'/static/bundles/images/logos/javascript.svg'},{'revision':'038f0f990f8ebbac7f981d34f6a132e9','url':'/static/bundles/images/logos/linux.svg'},{'revision':'ce756188f8cec48ed678bf47355ccf48','url':'/static/bundles/images/logos/mongodb.svg'},{'revision':'78d3a4b1edc15d38509c69ecfe6beb84','url':'/static/bundles/images/logos/mysql.svg'},{'revision':'df7a642559c44beb7bab6fa48025ec27','url':'/static/bundles/images/logos/ogpme.svg'},{'revision':'7c6cf29f431681cc68b7665bf63ca85e','url':'/static/bundles/images/logos/postgresql.svg'},{'revision':'f37754ebbdd47159e4d8d382466c474e','url':'/static/bundles/images/logos/postman.svg'},{'revision':'ffc01dcc015f573d0f1d831fb7b6cbca','url':'/static/bundles/images/logos/python.svg'},{'revision':'49b6adf911e80cc1fb8c1dce04b44e00','url':'/static/bundles/images/logos/redis.svg'},{'revision':'7a3d475ba74b6944ccf8ed854961c98c','url':'/static/bundles/images/logos/sentryio.svg'},{'revision':'73668736c44e3d7f8c82be6cc7cd5b1f','url':'/static/bundles/images/logos/tailwindcss.svg'},{'revision':'b727180d8d6eef0737a1db1faa63616d','url':'/static/bundles/images/logos/vuejs.svg'},{'revision':'1310ad87482dd07e827bdbcfd4b3565d','url':'/static/bundles/images/logos/webpack.svg'},{'revision':'fcdd9c5bfa24d6125ee0092aaea472fe','url':'/static/bundles/images/me/dark-me.png'},{'revision':'c4f9c3b40665aa9fb1ed46b16dee25cf','url':'/static/bundles/images/me/light-me.png'},{'revision':'64712444232c268c11781a514b9f32e1','url':'/static/bundles/images/me/me.png'},{'revision':'33aea254e7b914a7d7e6b4e02905aea3','url':'/static/bundles/images/patterns/bg-curve.svg'},{'revision':'3034018bdebc87dc1c05014130063834','url':'/static/bundles/images/patterns/bottom-curve.svg'},{'revision':'2a98a8aee1dc0fceda0b92f1eec242fa','url':'/static/bundles/images/patterns/dark-bottom-r-section-patterns.svg'},{'revision':'473707db3a64ce16840eb032b70235ed','url':'/static/bundles/images/patterns/dark-dots.svg'},{'revision':'b1170566c9324eeb444fd3d58e99eaa7','url':'/static/bundles/images/patterns/dark-top-l-section-patterns.svg'},{'revision':'38951ba7d3ed60361c09c46fa4c36e17','url':'/static/bundles/images/patterns/light-bottom-r-section-patterns.svg'},{'revision':'2e6d0dddcb58025dbd8faaf03a2ece19','url':'/static/bundles/images/patterns/light-circle-dots.svg'},{'revision':'2efd26f22e6a29a0afb33d1d4ad333e2','url':'/static/bundles/images/patterns/light-dots.svg'},{'revision':'f982ffd0e1fe37e3c6bb761094bb91c8','url':'/static/bundles/images/patterns/light-square-dots.svg'},{'revision':'3235418abd9e3d1f2821755ce480ebfb','url':'/static/bundles/images/patterns/light-top-l-section-patterns.svg'},{'revision':'627fccd8488bb19513507b60b4d804a2','url':'/static/bundles/images/patterns/simple-dots.svg'},{'revision':'a737017fcd44118e4b50b5a6985531c2','url':'/static/bundles/index.html'},{'revision':null,'url':'/static/bundles/js/project-2a1685a21ed80391ef11.js'},{'revision':null,'url':'/static/bundles/js/runtime-2a1685a21ed80391ef11.js'},{'revision':null,'url':'/static/bundles/js/vendors-node_modules_alpinejs_intersect_dist_module_esm_js-node_modules_alpinejs_dist_module_-b1cb38-2a1685a21ed80391ef11.js'}];
if (manifest) {
  // console.log("precaching: ", manifest);
  (0,workbox_precaching_precacheAndRoute__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)(manifest);
}

// https://web.dev/offline-fallback-page/
// const CACHE_NAME = 'offline-html';
// const FALLBACK_HTML_URL = "/offline/";

// cache all the pages of the website serving the cached pages before network if they are not available
const pageCache = new workbox_strategies__WEBPACK_IMPORTED_MODULE_3__.NetworkFirst({
  cacheName: "page-cache",
  plugins: [new workbox_cacheable_response__WEBPACK_IMPORTED_MODULE_4__.CacheableResponsePlugin({
    statuses: [0, 200]
  }), new workbox_expiration__WEBPACK_IMPORTED_MODULE_5__.ExpirationPlugin({
    maxAgeSeconds: 30 * 24 * 60 * 60
  })]
});
(0,workbox_recipes__WEBPACK_IMPORTED_MODULE_1__.googleFontsCache)();
(0,workbox_recipes__WEBPACK_IMPORTED_MODULE_1__.staticResourceCache)();
(0,workbox_recipes__WEBPACK_IMPORTED_MODULE_1__.imageCache)();
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_2__.registerRoute)(_ref => {
  let {
    url
  } = _ref;
  return url.origin === "https://unpkg.com";
}, new workbox_strategies__WEBPACK_IMPORTED_MODULE_3__.StaleWhileRevalidate({
  cacheName: `unpkg`,
  plugins: [new workbox_cacheable_response__WEBPACK_IMPORTED_MODULE_4__.CacheableResponsePlugin({
    statuses: [0, 200]
  }), new workbox_expiration__WEBPACK_IMPORTED_MODULE_5__.ExpirationPlugin({
    maxEntries: 20
  })]
}));
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_2__.registerRoute)(_ref2 => {
  let {
    url
  } = _ref2;
  return url.origin === "https://cdnjs.cloudflare.com";
}, new workbox_strategies__WEBPACK_IMPORTED_MODULE_3__.StaleWhileRevalidate({
  cacheName: `cdnjs`,
  plugins: [new workbox_cacheable_response__WEBPACK_IMPORTED_MODULE_4__.CacheableResponsePlugin({
    statuses: [0, 200]
  }), new workbox_expiration__WEBPACK_IMPORTED_MODULE_5__.ExpirationPlugin({
    maxEntries: 20
  })]
}));
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_2__.registerRoute)(_ref3 => {
  let {
    url
  } = _ref3;
  return url.origin === "https://map.googleapis.com";
}, new workbox_strategies__WEBPACK_IMPORTED_MODULE_3__.StaleWhileRevalidate({
  cacheName: `google-map`,
  plugins: [new workbox_cacheable_response__WEBPACK_IMPORTED_MODULE_4__.CacheableResponsePlugin({
    statuses: [0, 200]
  }), new workbox_expiration__WEBPACK_IMPORTED_MODULE_5__.ExpirationPlugin({
    maxEntries: 20
  })]
}));
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_2__.registerRoute)(_ref4 => {
  let {
    url
  } = _ref4;
  return url.origin === "https://api.tiles.mapbox.com";
}, new workbox_strategies__WEBPACK_IMPORTED_MODULE_3__.StaleWhileRevalidate({
  cacheName: `mapbox-map`,
  plugins: [new workbox_cacheable_response__WEBPACK_IMPORTED_MODULE_4__.CacheableResponsePlugin({
    statuses: [0, 200]
  }), new workbox_expiration__WEBPACK_IMPORTED_MODULE_5__.ExpirationPlugin({
    maxEntries: 20
  })]
}));
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_2__.registerRoute)(_ref5 => {
  let {
    url
  } = _ref5;
  return url.pathname.startsWith("/users/");
}, new workbox_strategies__WEBPACK_IMPORTED_MODULE_3__.NetworkFirst());
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_2__.registerRoute)(_ref6 => {
  let {
    url
  } = _ref6;
  return url.pathname.startsWith("/accounts/");
}, new workbox_strategies__WEBPACK_IMPORTED_MODULE_3__.NetworkFirst());
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_2__.registerRoute)(_ref7 => {
  let {
    url
  } = _ref7;
  return url.pathname.startsWith("/accounts/google/");
}, new workbox_strategies__WEBPACK_IMPORTED_MODULE_3__.NetworkOnly());
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_2__.registerRoute)(_ref8 => {
  let {
    url
  } = _ref8;
  return url.pathname.startsWith("/accounts/facebook/");
}, new workbox_strategies__WEBPACK_IMPORTED_MODULE_3__.NetworkOnly());
(0,workbox_recipes__WEBPACK_IMPORTED_MODULE_1__.warmStrategyCache)({
  urls: ["/", "/offline", "/about", "/accounts/login", "/accounts/signup", "/accounts/email", "/robots.txt"],
  strategy: pageCache
});
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_2__.registerRoute)(_ref9 => {
  let {
    request
  } = _ref9;
  return request.mode === "navigate";
}, pageCache);

// offlineFallback({
//   pageFallback: FALLBACK_HTML_URL,
// });

// push services
const LOGO_URL = "/static/bundles/assets/favicon-48x48.png";

// get notification title
let getTitle = function (title) {
  if (title === "") {
    title = "erry Says 🔈";
  }
  return title;
};

// sip install if waiting takes too long
self.addEventListener("install", function (event) {
  self.skipWaiting();
  console.log(event);
});

// register event listener for the 'push' event.
self.addEventListener("push", function (event) {
  // Retrieve the textual payload from event.data (a PushMessageData object).
  // Other formats are supported (ArrayBuffer, Blob, JSON), check out the documentation
  // on https://developer.mozilla.org/en-US/docs/Web/API/PushMessageData.
  let notificationTitle = "";
  let notificationOptions = {};
  let notificationBody = "";
  let notificationTag = "";
  try {
    // Push is a JSON
    const responseJson = event.data.json();
    notificationTitle = getTitle(responseJson.head.toUpperCase());
    notificationBody = responseJson.body;
    notificationTag = responseJson.tag;
    if (responseJson.url !== undefined) {
      notificationOptions = {
        body: responseJson.body,
        icon: LOGO_URL,
        data: {
          url: responseJson.url ? responseJson.url : window.location.origin
        },
        actions: [{
          action: "open_url",
          title: "Open Link"
        }],
        vibrate: [200, 100, 200, 100, 200, 100, 200]
      };
    } else {
      notificationOptions = {
        body: responseJson.body,
        icon: LOGO_URL,
        vibrate: [200, 100, 200, 100, 200, 100, 200]
      };
    }
  } catch (err) {
    // Push is a simple text (usually debugging)
    notificationOptions = {
      icon: LOGO_URL,
      body: event.data.text()
    };
  }

  // Keep the service worker alive until the notification is created.
  event.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions));

  // Optional: Comunicating with our js application. Send a signal
  self.clients.matchAll({
    includeUncontrolled: true,
    type: "window"
  }).then(function (clients) {
    clients.forEach(function (client) {
      client.postMessage({
        data: notificationTag,
        data_title: notificationTitle,
        data_body: notificationBody
      });
    });
  });
});
self.addEventListener("notificationclick", function (event) {
  // Android doesn't close the notification when you click it
  // See http://crbug.com/463146
  event.notification.close();
  // Check if there's already a tab open with this URL.
  // If yes: focus on the tab.
  // If no: open a tab with the URL.
  event.waitUntil(self.clients.matchAll({
    type: "window",
    includeUncontrolled: true
  }).then(function (windowClients) {
    for (var i = 0; i < windowClients.length; i++) {
      var client = windowClients[i];
      if ("focus" in client) {
        return client.focus();
      }
    }
  }));
  if (event.notification.data !== null) {
    event.waitUntil(event.preventDefault(), self.clients.openWindow(event.notification.data.url));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDckIsT0FBT0EsTUFBTSxDQUFDTSxLQUFLLEVBQUU7TUFDdkI7SUFDRjtFQUNGLENBQUMsQ0FBQyxDQUNMO0VBQ0QsSUFBSWxnQixLQUFLLENBQUMrZixZQUFZLENBQUNuTSxJQUFJLEtBQUssSUFBSSxFQUFFO0lBQ3BDNVQsS0FBSyxDQUFDRCxTQUFTLENBQ2JDLEtBQUssQ0FBQ21nQixjQUFjLEVBQUUsRUFDdEIvbUIsSUFBSSxDQUFDcW1CLE9BQU8sQ0FBQ1csVUFBVSxDQUFDcGdCLEtBQUssQ0FBQytmLFlBQVksQ0FBQ25NLElBQUksQ0FBQ3BiLEdBQUcsQ0FBQyxDQUNyRDtFQUNIO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2UvQ2FjaGVhYmxlUmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlL0NhY2hlYWJsZVJlc3BvbnNlUGx1Z2luLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZS9fdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9EZWZlcnJlZC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTWF0Y2hJZ25vcmVQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2RvbnRXYWl0Rm9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL3RpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS93YWl0VW50aWwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL2NvcHlSZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL21vZGVscy9tZXNzYWdlcy9tZXNzYWdlR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvbW9kZWxzL21lc3NhZ2VzL21lc3NhZ2VzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvbW9kZWxzL3F1b3RhRXJyb3JDYWxsYmFja3MuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9yZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1leHBpcmF0aW9uL0NhY2hlRXhwaXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1leHBpcmF0aW9uL0V4cGlyYXRpb25QbHVnaW4uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtZXhwaXJhdGlvbi9fdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1leHBpcmF0aW9uL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LWV4cGlyYXRpb24vbW9kZWxzL0NhY2hlVGltZXN0YW1wc01vZGVsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvUHJlY2FjaGVDb250cm9sbGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvUHJlY2FjaGVSb3V0ZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL1ByZWNhY2hlU3RyYXRlZ3kuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9fdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL2FkZFJvdXRlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvbWF0Y2hQcmVjYWNoZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3ByZWNhY2hlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvcHJlY2FjaGVBbmRSb3V0ZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL1ByZWNhY2hlQ2FjaGVLZXlQbHVnaW4uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9QcmVjYWNoZUluc3RhbGxSZXBvcnRQbHVnaW4uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9jcmVhdGVDYWNoZUtleS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL2dlbmVyYXRlVVJMVmFyaWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvcHJpbnRDbGVhbnVwRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL3ByaW50SW5zdGFsbERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9yZW1vdmVJZ25vcmVkU2VhcmNoUGFyYW1zLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJlY2lwZXMvX3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcmVjaXBlcy9nb29nbGVGb250c0NhY2hlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJlY2lwZXMvaW1hZ2VDYWNoZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1yZWNpcGVzL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJlY2lwZXMvb2ZmbGluZUZhbGxiYWNrLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJlY2lwZXMvcGFnZUNhY2hlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJlY2lwZXMvc3RhdGljUmVzb3VyY2VDYWNoZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1yZWNpcGVzL3dhcm1TdHJhdGVneUNhY2hlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvTmF2aWdhdGlvblJvdXRlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvUmVnRXhwUm91dGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9Sb3V0ZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL1JvdXRlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL192ZXJzaW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9yZWdpc3RlclJvdXRlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvc2V0Q2F0Y2hIYW5kbGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvc2V0RGVmYXVsdEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy91dGlscy9nZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy91dGlscy9ub3JtYWxpemVIYW5kbGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvQ2FjaGVGaXJzdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL0NhY2hlT25seS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL05ldHdvcmtGaXJzdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL05ldHdvcmtPbmx5LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvU3RhbGVXaGlsZVJldmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9TdHJhdGVneS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL1N0cmF0ZWd5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL192ZXJzaW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9wbHVnaW5zL2NhY2hlT2tBbmRPcGFxdWVQbHVnaW4uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy91dGlscy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2UvaW5kZXgubWpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LWV4cGlyYXRpb24vaW5kZXgubWpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJlY2lwZXMvaW5kZXgubWpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvaW5kZXgubWpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvaW5kZXgubWpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9pZGIvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2lkYi9idWlsZC93cmFwLWlkYi12YWx1ZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vcG9ydGZvbGlvL3N0YXRpYy9qcy9zdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBUaGlzIGNsYXNzIGFsbG93cyB5b3UgdG8gc2V0IHVwIHJ1bGVzIGRldGVybWluaW5nIHdoYXRcbiAqIHN0YXR1cyBjb2RlcyBhbmQvb3IgaGVhZGVycyBuZWVkIHRvIGJlIHByZXNlbnQgaW4gb3JkZXIgZm9yIGFcbiAqIFtgUmVzcG9uc2VgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUmVzcG9uc2UpXG4gKiB0byBiZSBjb25zaWRlcmVkIGNhY2hlYWJsZS5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2VcbiAqL1xuY2xhc3MgQ2FjaGVhYmxlUmVzcG9uc2Uge1xuICAgIC8qKlxuICAgICAqIFRvIGNvbnN0cnVjdCBhIG5ldyBDYWNoZWFibGVSZXNwb25zZSBpbnN0YW5jZSB5b3UgbXVzdCBwcm92aWRlIGF0IGxlYXN0XG4gICAgICogb25lIG9mIHRoZSBgY29uZmlnYCBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogSWYgYm90aCBgc3RhdHVzZXNgIGFuZCBgaGVhZGVyc2AgYXJlIHNwZWNpZmllZCwgdGhlbiBib3RoIGNvbmRpdGlvbnMgbXVzdFxuICAgICAqIGJlIG1ldCBmb3IgdGhlIGBSZXNwb25zZWAgdG8gYmUgY29uc2lkZXJlZCBjYWNoZWFibGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbY29uZmlnLnN0YXR1c2VzXSBPbmUgb3IgbW9yZSBzdGF0dXMgY29kZXMgdGhhdCBhXG4gICAgICogYFJlc3BvbnNlYCBjYW4gaGF2ZSBhbmQgYmUgY29uc2lkZXJlZCBjYWNoZWFibGUuXG4gICAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLHN0cmluZz59IFtjb25maWcuaGVhZGVyc10gQSBtYXBwaW5nIG9mIGhlYWRlciBuYW1lc1xuICAgICAqIGFuZCBleHBlY3RlZCB2YWx1ZXMgdGhhdCBhIGBSZXNwb25zZWAgY2FuIGhhdmUgYW5kIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICAgICAqIElmIG11bHRpcGxlIGhlYWRlcnMgYXJlIHByb3ZpZGVkLCBvbmx5IG9uZSBuZWVkcyB0byBiZSBwcmVzZW50LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoIShjb25maWcuc3RhdHVzZXMgfHwgY29uZmlnLmhlYWRlcnMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignc3RhdHVzZXMtb3ItaGVhZGVycy1yZXF1aXJlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVhYmxlUmVzcG9uc2UnLFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWcuc3RhdHVzZXMpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNBcnJheShjb25maWcuc3RhdHVzZXMsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVhYmxlUmVzcG9uc2UnLFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnY29uZmlnLnN0YXR1c2VzJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWcuaGVhZGVycykge1xuICAgICAgICAgICAgICAgIGFzc2VydC5pc1R5cGUoY29uZmlnLmhlYWRlcnMsICdvYmplY3QnLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZScsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlYWJsZVJlc3BvbnNlJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5oZWFkZXJzJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGF0dXNlcyA9IGNvbmZpZy5zdGF0dXNlcztcbiAgICAgICAgdGhpcy5faGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVja3MgYSByZXNwb25zZSB0byBzZWUgd2hldGhlciBpdCdzIGNhY2hlYWJsZSBvciBub3QsIGJhc2VkIG9uIHRoaXNcbiAgICAgKiBvYmplY3QncyBjb25maWd1cmF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZXNwb25zZX0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlIHdob3NlIGNhY2hlYWJpbGl0eSBpcyBiZWluZ1xuICAgICAqIGNoZWNrZWQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSBgUmVzcG9uc2VgIGlzIGNhY2hlYWJsZSwgYW5kIGBmYWxzZWBcbiAgICAgKiBvdGhlcndpc2UuXG4gICAgICovXG4gICAgaXNSZXNwb25zZUNhY2hlYWJsZShyZXNwb25zZSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVzcG9uc2UsIFJlc3BvbnNlLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZWFibGVSZXNwb25zZScsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdpc1Jlc3BvbnNlQ2FjaGVhYmxlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyZXNwb25zZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2FjaGVhYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXR1c2VzKSB7XG4gICAgICAgICAgICBjYWNoZWFibGUgPSB0aGlzLl9zdGF0dXNlcy5pbmNsdWRlcyhyZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9oZWFkZXJzICYmIGNhY2hlYWJsZSkge1xuICAgICAgICAgICAgY2FjaGVhYmxlID0gT2JqZWN0LmtleXModGhpcy5faGVhZGVycykuc29tZSgoaGVhZGVyTmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5oZWFkZXJzLmdldChoZWFkZXJOYW1lKSA9PT0gdGhpcy5faGVhZGVyc1toZWFkZXJOYW1lXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlYWJsZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVGhlIHJlcXVlc3QgZm9yIGAgK1xuICAgICAgICAgICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwocmVzcG9uc2UudXJsKX0nIHJldHVybmVkIGEgcmVzcG9uc2UgdGhhdCBkb2VzIGAgK1xuICAgICAgICAgICAgICAgICAgICBgbm90IG1lZXQgdGhlIGNyaXRlcmlhIGZvciBiZWluZyBjYWNoZWQuYCk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IGNhY2hlYWJpbGl0eSBjcml0ZXJpYSBoZXJlLmApO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYENhY2hlYWJsZSBzdGF0dXNlczogYCArIEpTT04uc3RyaW5naWZ5KHRoaXMuX3N0YXR1c2VzKSk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgQ2FjaGVhYmxlIGhlYWRlcnM6IGAgKyBKU09OLnN0cmluZ2lmeSh0aGlzLl9oZWFkZXJzLCBudWxsLCAyKSk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9nRnJpZW5kbHlIZWFkZXJzID0ge307XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuaGVhZGVycy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ0ZyaWVuZGx5SGVhZGVyc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IHJlc3BvbnNlIHN0YXR1cyBhbmQgaGVhZGVycyBoZXJlLmApO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYFJlc3BvbnNlIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgUmVzcG9uc2UgaGVhZGVyczogYCArIEpTT04uc3RyaW5naWZ5KGxvZ0ZyaWVuZGx5SGVhZGVycywgbnVsbCwgMikpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyBmdWxsIHJlc3BvbnNlIGRldGFpbHMgaGVyZS5gKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKHJlc3BvbnNlLmhlYWRlcnMpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWNoZWFibGU7XG4gICAgfVxufVxuZXhwb3J0IHsgQ2FjaGVhYmxlUmVzcG9uc2UgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IENhY2hlYWJsZVJlc3BvbnNlLCB9IGZyb20gJy4vQ2FjaGVhYmxlUmVzcG9uc2UuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQSBjbGFzcyBpbXBsZW1lbnRpbmcgdGhlIGBjYWNoZVdpbGxVcGRhdGVgIGxpZmVjeWNsZSBjYWxsYmFjay4gVGhpcyBtYWtlcyBpdFxuICogZWFzaWVyIHRvIGFkZCBpbiBjYWNoZWFiaWxpdHkgY2hlY2tzIHRvIHJlcXVlc3RzIG1hZGUgdmlhIFdvcmtib3gncyBidWlsdC1pblxuICogc3RyYXRlZ2llcy5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2VcbiAqL1xuY2xhc3MgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4ge1xuICAgIC8qKlxuICAgICAqIFRvIGNvbnN0cnVjdCBhIG5ldyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbiBpbnN0YW5jZSB5b3UgbXVzdCBwcm92aWRlIGF0XG4gICAgICogbGVhc3Qgb25lIG9mIHRoZSBgY29uZmlnYCBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogSWYgYm90aCBgc3RhdHVzZXNgIGFuZCBgaGVhZGVyc2AgYXJlIHNwZWNpZmllZCwgdGhlbiBib3RoIGNvbmRpdGlvbnMgbXVzdFxuICAgICAqIGJlIG1ldCBmb3IgdGhlIGBSZXNwb25zZWAgdG8gYmUgY29uc2lkZXJlZCBjYWNoZWFibGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbY29uZmlnLnN0YXR1c2VzXSBPbmUgb3IgbW9yZSBzdGF0dXMgY29kZXMgdGhhdCBhXG4gICAgICogYFJlc3BvbnNlYCBjYW4gaGF2ZSBhbmQgYmUgY29uc2lkZXJlZCBjYWNoZWFibGUuXG4gICAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLHN0cmluZz59IFtjb25maWcuaGVhZGVyc10gQSBtYXBwaW5nIG9mIGhlYWRlciBuYW1lc1xuICAgICAqIGFuZCBleHBlY3RlZCB2YWx1ZXMgdGhhdCBhIGBSZXNwb25zZWAgY2FuIGhhdmUgYW5kIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICAgICAqIElmIG11bHRpcGxlIGhlYWRlcnMgYXJlIHByb3ZpZGVkLCBvbmx5IG9uZSBuZWVkcyB0byBiZSBwcmVzZW50LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICogQHBhcmFtIHtSZXNwb25zZX0gb3B0aW9ucy5yZXNwb25zZVxuICAgICAgICAgKiBAcmV0dXJuIHtSZXNwb25zZXxudWxsfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jYWNoZVdpbGxVcGRhdGUgPSBhc3luYyAoeyByZXNwb25zZSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2FjaGVhYmxlUmVzcG9uc2UuaXNSZXNwb25zZUNhY2hlYWJsZShyZXNwb25zZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fY2FjaGVhYmxlUmVzcG9uc2UgPSBuZXcgQ2FjaGVhYmxlUmVzcG9uc2UoY29uZmlnKTtcbiAgICB9XG59XG5leHBvcnQgeyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbiB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBAdHMtaWdub3JlXG50cnkge1xuICAgIHNlbGZbJ3dvcmtib3g6Y2FjaGVhYmxlLXJlc3BvbnNlOjYuNS4zJ10gJiYgXygpO1xufVxuY2F0Y2ggKGUpIHsgfVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgQ2FjaGVhYmxlUmVzcG9uc2UsIH0gZnJvbSAnLi9DYWNoZWFibGVSZXNwb25zZS5qcyc7XG5pbXBvcnQgeyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbiB9IGZyb20gJy4vQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4uanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQG1vZHVsZSB3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZVxuICovXG5leHBvcnQgeyBDYWNoZWFibGVSZXNwb25zZSwgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4gfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBUaGUgRGVmZXJyZWQgY2xhc3MgY29tcG9zZXMgUHJvbWlzZXMgaW4gYSB3YXkgdGhhdCBhbGxvd3MgZm9yIHRoZW0gdG8gYmVcbiAqIHJlc29sdmVkIG9yIHJlamVjdGVkIGZyb20gb3V0c2lkZSB0aGUgY29uc3RydWN0b3IuIEluIG1vc3QgY2FzZXMgcHJvbWlzZXNcbiAqIHNob3VsZCBiZSB1c2VkIGRpcmVjdGx5LCBidXQgRGVmZXJyZWRzIGNhbiBiZSBuZWNlc3Nhcnkgd2hlbiB0aGUgbG9naWMgdG9cbiAqIHJlc29sdmUgYSBwcm9taXNlIG11c3QgYmUgc2VwYXJhdGUuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgRGVmZXJyZWQge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwcm9taXNlIGFuZCBleHBvc2VzIGl0cyByZXNvbHZlIGFuZCByZWplY3QgZnVuY3Rpb25zIGFzIG1ldGhvZHMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IHsgRGVmZXJyZWQgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IG1lc3NhZ2VHZW5lcmF0b3IgfSBmcm9tICcuLi9tb2RlbHMvbWVzc2FnZXMvbWVzc2FnZUdlbmVyYXRvci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogV29ya2JveCBlcnJvcnMgc2hvdWxkIGJlIHRocm93biB3aXRoIHRoaXMgY2xhc3MuXG4gKiBUaGlzIGFsbG93cyB1c2UgdG8gZW5zdXJlIHRoZSB0eXBlIGVhc2lseSBpbiB0ZXN0cyxcbiAqIGhlbHBzIGRldmVsb3BlcnMgaWRlbnRpZnkgZXJyb3JzIGZyb20gd29ya2JveFxuICogZWFzaWx5IGFuZCBhbGxvd3MgdXNlIHRvIG9wdGltaXNlIGVycm9yXG4gKiBtZXNzYWdlcyBjb3JyZWN0bHkuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgV29ya2JveEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yQ29kZSBUaGUgZXJyb3IgY29kZSB0aGF0XG4gICAgICogaWRlbnRpZmllcyB0aGlzIHBhcnRpY3VsYXIgZXJyb3IuXG4gICAgICogQHBhcmFtIHtPYmplY3Q9fSBkZXRhaWxzIEFueSByZWxldmFudCBhcmd1bWVudHNcbiAgICAgKiB0aGF0IHdpbGwgaGVscCBkZXZlbG9wZXJzIGlkZW50aWZ5IGlzc3VlcyBzaG91bGRcbiAgICAgKiBiZSBhZGRlZCBhcyBhIGtleSBvbiB0aGUgY29udGV4dCBvYmplY3QuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlLCBkZXRhaWxzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlR2VuZXJhdG9yKGVycm9yQ29kZSwgZGV0YWlscyk7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBlcnJvckNvZGU7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gICAgfVxufVxuZXhwb3J0IHsgV29ya2JveEVycm9yIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICcuLi9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKlxuICogVGhpcyBtZXRob2QgdGhyb3dzIGlmIHRoZSBzdXBwbGllZCB2YWx1ZSBpcyBub3QgYW4gYXJyYXkuXG4gKiBUaGUgZGVzdHJ1Y3RlZCB2YWx1ZXMgYXJlIHJlcXVpcmVkIHRvIHByb2R1Y2UgYSBtZWFuaW5nZnVsIGVycm9yIGZvciB1c2Vycy5cbiAqIFRoZSBkZXN0cnVjdGVkIGFuZCByZXN0cnVjdHVyZWQgb2JqZWN0IGlzIHNvIGl0J3MgY2xlYXIgd2hhdCBpc1xuICogbmVlZGVkLlxuICovXG5jb25zdCBpc0FycmF5ID0gKHZhbHVlLCBkZXRhaWxzKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdub3QtYW4tYXJyYXknLCBkZXRhaWxzKTtcbiAgICB9XG59O1xuY29uc3QgaGFzTWV0aG9kID0gKG9iamVjdCwgZXhwZWN0ZWRNZXRob2QsIGRldGFpbHMpID0+IHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIG9iamVjdFtleHBlY3RlZE1ldGhvZF07XG4gICAgaWYgKHR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGV0YWlsc1snZXhwZWN0ZWRNZXRob2QnXSA9IGV4cGVjdGVkTWV0aG9kO1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdtaXNzaW5nLWEtbWV0aG9kJywgZGV0YWlscyk7XG4gICAgfVxufTtcbmNvbnN0IGlzVHlwZSA9IChvYmplY3QsIGV4cGVjdGVkVHlwZSwgZGV0YWlscykgPT4ge1xuICAgIGlmICh0eXBlb2Ygb2JqZWN0ICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgZGV0YWlsc1snZXhwZWN0ZWRUeXBlJ10gPSBleHBlY3RlZFR5cGU7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2luY29ycmVjdC10eXBlJywgZGV0YWlscyk7XG4gICAgfVxufTtcbmNvbnN0IGlzSW5zdGFuY2UgPSAob2JqZWN0LCBcbi8vIE5lZWQgdGhlIGdlbmVyYWwgdHlwZSB0byBkbyB0aGUgY2hlY2sgbGF0ZXIuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuZXhwZWN0ZWRDbGFzcywgZGV0YWlscykgPT4ge1xuICAgIGlmICghKG9iamVjdCBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIGRldGFpbHNbJ2V4cGVjdGVkQ2xhc3NOYW1lJ10gPSBleHBlY3RlZENsYXNzLm5hbWU7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2luY29ycmVjdC1jbGFzcycsIGRldGFpbHMpO1xuICAgIH1cbn07XG5jb25zdCBpc09uZU9mID0gKHZhbHVlLCB2YWxpZFZhbHVlcywgZGV0YWlscykgPT4ge1xuICAgIGlmICghdmFsaWRWYWx1ZXMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgIGRldGFpbHNbJ3ZhbGlkVmFsdWVEZXNjcmlwdGlvbiddID0gYFZhbGlkIHZhbHVlcyBhcmUgJHtKU09OLnN0cmluZ2lmeSh2YWxpZFZhbHVlcyl9LmA7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2ludmFsaWQtdmFsdWUnLCBkZXRhaWxzKTtcbiAgICB9XG59O1xuY29uc3QgaXNBcnJheU9mQ2xhc3MgPSAodmFsdWUsIFxuLy8gTmVlZCBnZW5lcmFsIHR5cGUgdG8gZG8gY2hlY2sgbGF0ZXIuXG5leHBlY3RlZENsYXNzLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5kZXRhaWxzKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgV29ya2JveEVycm9yKCdub3QtYXJyYXktb2YtY2xhc3MnLCBkZXRhaWxzKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgICAgaWYgKCEoaXRlbSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBmaW5hbEFzc2VydEV4cG9ydHMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG4gICAgPyBudWxsXG4gICAgOiB7XG4gICAgICAgIGhhc01ldGhvZCxcbiAgICAgICAgaXNBcnJheSxcbiAgICAgICAgaXNJbnN0YW5jZSxcbiAgICAgICAgaXNPbmVPZixcbiAgICAgICAgaXNUeXBlLFxuICAgICAgICBpc0FycmF5T2ZDbGFzcyxcbiAgICB9O1xuZXhwb3J0IHsgZmluYWxBc3NlcnRFeHBvcnRzIGFzIGFzc2VydCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuZnVuY3Rpb24gc3RyaXBQYXJhbXMoZnVsbFVSTCwgaWdub3JlUGFyYW1zKSB7XG4gICAgY29uc3Qgc3RyaXBwZWRVUkwgPSBuZXcgVVJMKGZ1bGxVUkwpO1xuICAgIGZvciAoY29uc3QgcGFyYW0gb2YgaWdub3JlUGFyYW1zKSB7XG4gICAgICAgIHN0cmlwcGVkVVJMLnNlYXJjaFBhcmFtcy5kZWxldGUocGFyYW0pO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaXBwZWRVUkwuaHJlZjtcbn1cbi8qKlxuICogTWF0Y2hlcyBhbiBpdGVtIGluIHRoZSBjYWNoZSwgaWdub3Jpbmcgc3BlY2lmaWMgVVJMIHBhcmFtcy4gVGhpcyBpcyBzaW1pbGFyXG4gKiB0byB0aGUgYGlnbm9yZVNlYXJjaGAgb3B0aW9uLCBidXQgaXQgYWxsb3dzIHlvdSB0byBpZ25vcmUganVzdCBzcGVjaWZpY1xuICogcGFyYW1zICh3aGlsZSBjb250aW51aW5nIHRvIG1hdGNoIG9uIHRoZSBvdGhlcnMpLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0NhY2hlfSBjYWNoZVxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gKiBAcGFyYW0ge09iamVjdH0gbWF0Y2hPcHRpb25zXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGlnbm9yZVBhcmFtc1xuICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZXx1bmRlZmluZWQ+fVxuICovXG5hc3luYyBmdW5jdGlvbiBjYWNoZU1hdGNoSWdub3JlUGFyYW1zKGNhY2hlLCByZXF1ZXN0LCBpZ25vcmVQYXJhbXMsIG1hdGNoT3B0aW9ucykge1xuICAgIGNvbnN0IHN0cmlwcGVkUmVxdWVzdFVSTCA9IHN0cmlwUGFyYW1zKHJlcXVlc3QudXJsLCBpZ25vcmVQYXJhbXMpO1xuICAgIC8vIElmIHRoZSByZXF1ZXN0IGRvZXNuJ3QgaW5jbHVkZSBhbnkgaWdub3JlZCBwYXJhbXMsIG1hdGNoIGFzIG5vcm1hbC5cbiAgICBpZiAocmVxdWVzdC51cmwgPT09IHN0cmlwcGVkUmVxdWVzdFVSTCkge1xuICAgICAgICByZXR1cm4gY2FjaGUubWF0Y2gocmVxdWVzdCwgbWF0Y2hPcHRpb25zKTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCBtYXRjaCBieSBjb21wYXJpbmcga2V5c1xuICAgIGNvbnN0IGtleXNPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBtYXRjaE9wdGlvbnMpLCB7IGlnbm9yZVNlYXJjaDogdHJ1ZSB9KTtcbiAgICBjb25zdCBjYWNoZUtleXMgPSBhd2FpdCBjYWNoZS5rZXlzKHJlcXVlc3QsIGtleXNPcHRpb25zKTtcbiAgICBmb3IgKGNvbnN0IGNhY2hlS2V5IG9mIGNhY2hlS2V5cykge1xuICAgICAgICBjb25zdCBzdHJpcHBlZENhY2hlS2V5VVJMID0gc3RyaXBQYXJhbXMoY2FjaGVLZXkudXJsLCBpZ25vcmVQYXJhbXMpO1xuICAgICAgICBpZiAoc3RyaXBwZWRSZXF1ZXN0VVJMID09PSBzdHJpcHBlZENhY2hlS2V5VVJMKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGUubWF0Y2goY2FjaGVLZXksIG1hdGNoT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xufVxuZXhwb3J0IHsgY2FjaGVNYXRjaElnbm9yZVBhcmFtcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBfY2FjaGVOYW1lRGV0YWlscyA9IHtcbiAgICBnb29nbGVBbmFseXRpY3M6ICdnb29nbGVBbmFseXRpY3MnLFxuICAgIHByZWNhY2hlOiAncHJlY2FjaGUtdjInLFxuICAgIHByZWZpeDogJ3dvcmtib3gnLFxuICAgIHJ1bnRpbWU6ICdydW50aW1lJyxcbiAgICBzdWZmaXg6IHR5cGVvZiByZWdpc3RyYXRpb24gIT09ICd1bmRlZmluZWQnID8gcmVnaXN0cmF0aW9uLnNjb3BlIDogJycsXG59O1xuY29uc3QgX2NyZWF0ZUNhY2hlTmFtZSA9IChjYWNoZU5hbWUpID0+IHtcbiAgICByZXR1cm4gW19jYWNoZU5hbWVEZXRhaWxzLnByZWZpeCwgY2FjaGVOYW1lLCBfY2FjaGVOYW1lRGV0YWlscy5zdWZmaXhdXG4gICAgICAgIC5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPiAwKVxuICAgICAgICAuam9pbignLScpO1xufTtcbmNvbnN0IGVhY2hDYWNoZU5hbWVEZXRhaWwgPSAoZm4pID0+IHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhfY2FjaGVOYW1lRGV0YWlscykpIHtcbiAgICAgICAgZm4oa2V5KTtcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IGNhY2hlTmFtZXMgPSB7XG4gICAgdXBkYXRlRGV0YWlsczogKGRldGFpbHMpID0+IHtcbiAgICAgICAgZWFjaENhY2hlTmFtZURldGFpbCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRldGFpbHNba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBfY2FjaGVOYW1lRGV0YWlsc1trZXldID0gZGV0YWlsc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldEdvb2dsZUFuYWx5dGljc05hbWU6ICh1c2VyQ2FjaGVOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VyQ2FjaGVOYW1lIHx8IF9jcmVhdGVDYWNoZU5hbWUoX2NhY2hlTmFtZURldGFpbHMuZ29vZ2xlQW5hbHl0aWNzKTtcbiAgICB9LFxuICAgIGdldFByZWNhY2hlTmFtZTogKHVzZXJDYWNoZU5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZXJDYWNoZU5hbWUgfHwgX2NyZWF0ZUNhY2hlTmFtZShfY2FjaGVOYW1lRGV0YWlscy5wcmVjYWNoZSk7XG4gICAgfSxcbiAgICBnZXRQcmVmaXg6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9jYWNoZU5hbWVEZXRhaWxzLnByZWZpeDtcbiAgICB9LFxuICAgIGdldFJ1bnRpbWVOYW1lOiAodXNlckNhY2hlTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gdXNlckNhY2hlTmFtZSB8fCBfY3JlYXRlQ2FjaGVOYW1lKF9jYWNoZU5hbWVEZXRhaWxzLnJ1bnRpbWUpO1xuICAgIH0sXG4gICAgZ2V0U3VmZml4OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfY2FjaGVOYW1lRGV0YWlscy5zdWZmaXg7XG4gICAgfSxcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmxldCBzdXBwb3J0U3RhdHVzO1xuLyoqXG4gKiBBIHV0aWxpdHkgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0c1xuICogY29uc3RydWN0aW5nIGEgbmV3IGBSZXNwb25zZWAgZnJvbSBhIGByZXNwb25zZS5ib2R5YCBzdHJlYW0uXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgLCBpZiB0aGUgY3VycmVudCBicm93c2VyIGNhbiBzdWNjZXNzZnVsbHlcbiAqICAgICBjb25zdHJ1Y3QgYSBgUmVzcG9uc2VgIGZyb20gYSBgcmVzcG9uc2UuYm9keWAgc3RyZWFtLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtKCkge1xuICAgIGlmIChzdXBwb3J0U3RhdHVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgdGVzdFJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKCcnKTtcbiAgICAgICAgaWYgKCdib2R5JyBpbiB0ZXN0UmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbmV3IFJlc3BvbnNlKHRlc3RSZXNwb25zZS5ib2R5KTtcbiAgICAgICAgICAgICAgICBzdXBwb3J0U3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHN1cHBvcnRTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdXBwb3J0U3RhdHVzID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0U3RhdHVzO1xufVxuZXhwb3J0IHsgY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiB0aGF0IHByZXZlbnRzIGEgcHJvbWlzZSBmcm9tIGJlaW5nIGZsYWdnZWQgYXMgdW51c2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiovXG5leHBvcnQgZnVuY3Rpb24gZG9udFdhaXRGb3IocHJvbWlzZSkge1xuICAgIC8vIEVmZmVjdGl2ZSBuby1vcC5cbiAgICB2b2lkIHByb21pc2UudGhlbigoKSA9PiB7IH0pO1xufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IHF1b3RhRXJyb3JDYWxsYmFja3MgfSBmcm9tICcuLi9tb2RlbHMvcXVvdGFFcnJvckNhbGxiYWNrcy5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogUnVucyBhbGwgb2YgdGhlIGNhbGxiYWNrIGZ1bmN0aW9ucywgb25lIGF0IGEgdGltZSBzZXF1ZW50aWFsbHksIGluIHRoZSBvcmRlclxuICogaW4gd2hpY2ggdGhleSB3ZXJlIHJlZ2lzdGVyZWQuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtY29yZVxuICogQHByaXZhdGVcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhgQWJvdXQgdG8gcnVuICR7cXVvdGFFcnJvckNhbGxiYWNrcy5zaXplfSBgICtcbiAgICAgICAgICAgIGBjYWxsYmFja3MgdG8gY2xlYW4gdXAgY2FjaGVzLmApO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHF1b3RhRXJyb3JDYWxsYmFja3MpIHtcbiAgICAgICAgYXdhaXQgY2FsbGJhY2soKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5sb2coY2FsbGJhY2ssICdpcyBjb21wbGV0ZS4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIubG9nKCdGaW5pc2hlZCBydW5uaW5nIGNhbGxiYWNrcy4nKTtcbiAgICB9XG59XG5leHBvcnQgeyBleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBnZXRGcmllbmRseVVSTCA9ICh1cmwpID0+IHtcbiAgICBjb25zdCB1cmxPYmogPSBuZXcgVVJMKFN0cmluZyh1cmwpLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yMzIzXG4gICAgLy8gV2Ugd2FudCB0byBpbmNsdWRlIGV2ZXJ5dGhpbmcsIGV4Y2VwdCBmb3IgdGhlIG9yaWdpbiBpZiBpdCdzIHNhbWUtb3JpZ2luLlxuICAgIHJldHVybiB1cmxPYmouaHJlZi5yZXBsYWNlKG5ldyBSZWdFeHAoYF4ke2xvY2F0aW9uLm9yaWdpbn1gKSwgJycpO1xufTtcbmV4cG9ydCB7IGdldEZyaWVuZGx5VVJMIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBsb2dnZXIgPSAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgID8gbnVsbFxuICAgIDogKCgpID0+IHtcbiAgICAgICAgLy8gRG9uJ3Qgb3ZlcndyaXRlIHRoaXMgdmFsdWUgaWYgaXQncyBhbHJlYWR5IHNldC5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9wdWxsLzIyODQjaXNzdWVjb21tZW50LTU2MDQ3MDkyM1xuICAgICAgICBpZiAoISgnX19XQl9ESVNBQkxFX0RFVl9MT0dTJyBpbiBzZWxmKSkge1xuICAgICAgICAgICAgc2VsZi5fX1dCX0RJU0FCTEVfREVWX0xPR1MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5Hcm91cCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBtZXRob2RUb0NvbG9yTWFwID0ge1xuICAgICAgICAgICAgZGVidWc6IGAjN2Y4YzhkYCxcbiAgICAgICAgICAgIGxvZzogYCMyZWNjNzFgLFxuICAgICAgICAgICAgd2FybjogYCNmMzljMTJgLFxuICAgICAgICAgICAgZXJyb3I6IGAjYzAzOTJiYCxcbiAgICAgICAgICAgIGdyb3VwQ29sbGFwc2VkOiBgIzM0OThkYmAsXG4gICAgICAgICAgICBncm91cEVuZDogbnVsbCwgLy8gTm8gY29sb3JlZCBwcmVmaXggb24gZ3JvdXBFbmRcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcHJpbnQgPSBmdW5jdGlvbiAobWV0aG9kLCBhcmdzKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5fX1dCX0RJU0FCTEVfREVWX0xPR1MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSAnZ3JvdXBDb2xsYXBzZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gU2FmYXJpIGRvZXNuJ3QgcHJpbnQgYWxsIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoKSBhcmd1bWVudHM6XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE4Mjc1NFxuICAgICAgICAgICAgICAgIGlmICgvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVbbWV0aG9kXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IFtcbiAgICAgICAgICAgICAgICBgYmFja2dyb3VuZDogJHttZXRob2RUb0NvbG9yTWFwW21ldGhvZF19YCxcbiAgICAgICAgICAgICAgICBgYm9yZGVyLXJhZGl1czogMC41ZW1gLFxuICAgICAgICAgICAgICAgIGBjb2xvcjogd2hpdGVgLFxuICAgICAgICAgICAgICAgIGBmb250LXdlaWdodDogYm9sZGAsXG4gICAgICAgICAgICAgICAgYHBhZGRpbmc6IDJweCAwLjVlbWAsXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgLy8gV2hlbiBpbiBhIGdyb3VwLCB0aGUgd29ya2JveCBwcmVmaXggaXMgbm90IGRpc3BsYXllZC5cbiAgICAgICAgICAgIGNvbnN0IGxvZ1ByZWZpeCA9IGluR3JvdXAgPyBbXSA6IFsnJWN3b3JrYm94Jywgc3R5bGVzLmpvaW4oJzsnKV07XG4gICAgICAgICAgICBjb25zb2xlW21ldGhvZF0oLi4ubG9nUHJlZml4LCAuLi5hcmdzKTtcbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdncm91cENvbGxhcHNlZCcpIHtcbiAgICAgICAgICAgICAgICBpbkdyb3VwID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdncm91cEVuZCcpIHtcbiAgICAgICAgICAgICAgICBpbkdyb3VwID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG4gICAgICAgIGNvbnN0IGFwaSA9IHt9O1xuICAgICAgICBjb25zdCBsb2dnZXJNZXRob2RzID0gT2JqZWN0LmtleXMobWV0aG9kVG9Db2xvck1hcCk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGxvZ2dlck1ldGhvZHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IGtleTtcbiAgICAgICAgICAgIGFwaVttZXRob2RdID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICBwcmludChtZXRob2QsIGFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXBpO1xuICAgIH0pKCkpO1xuZXhwb3J0IHsgbG9nZ2VyIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgYW5kIHRoZSBwYXNzZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cbiAqIFRoaXMgdXRpbGl0eSBpcyBhbiBhc3luYy9hd2FpdC1mcmllbmRseSB2ZXJzaW9uIG9mIGBzZXRUaW1lb3V0YC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbXNcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGltZW91dChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBIHV0aWxpdHkgbWV0aG9kIHRoYXQgbWFrZXMgaXQgZWFzaWVyIHRvIHVzZSBgZXZlbnQud2FpdFVudGlsYCB3aXRoXG4gKiBhc3luYyBmdW5jdGlvbnMgYW5kIHJldHVybiB0aGUgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXN5bmNGblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiB3YWl0VW50aWwoZXZlbnQsIGFzeW5jRm4pIHtcbiAgICBjb25zdCByZXR1cm5Qcm9taXNlID0gYXN5bmNGbigpO1xuICAgIGV2ZW50LndhaXRVbnRpbChyZXR1cm5Qcm9taXNlKTtcbiAgICByZXR1cm4gcmV0dXJuUHJvbWlzZTtcbn1cbmV4cG9ydCB7IHdhaXRVbnRpbCB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBAdHMtaWdub3JlXG50cnkge1xuICAgIHNlbGZbJ3dvcmtib3g6Y29yZTo2LjUuMyddICYmIF8oKTtcbn1cbmNhdGNoIChlKSB7IH1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGNhbkNvbnN0cnVjdFJlc3BvbnNlRnJvbUJvZHlTdHJlYW0gfSBmcm9tICcuL19wcml2YXRlL2NhbkNvbnN0cnVjdFJlc3BvbnNlRnJvbUJvZHlTdHJlYW0uanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnLi9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQWxsb3dzIGRldmVsb3BlcnMgdG8gY29weSBhIHJlc3BvbnNlIGFuZCBtb2RpZnkgaXRzIGBoZWFkZXJzYCwgYHN0YXR1c2AsXG4gKiBvciBgc3RhdHVzVGV4dGAgdmFsdWVzICh0aGUgdmFsdWVzIHNldHRhYmxlIHZpYSBhXG4gKiBbYFJlc3BvbnNlSW5pdGBde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9SZXNwb25zZS9SZXNwb25zZSNTeW50YXh9XG4gKiBvYmplY3QgaW4gdGhlIGNvbnN0cnVjdG9yKS5cbiAqIFRvIG1vZGlmeSB0aGVzZSB2YWx1ZXMsIHBhc3MgYSBmdW5jdGlvbiBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGF0XG4gKiBmdW5jdGlvbiB3aWxsIGJlIGludm9rZWQgd2l0aCBhIHNpbmdsZSBvYmplY3Qgd2l0aCB0aGUgcmVzcG9uc2UgcHJvcGVydGllc1xuICogYHtoZWFkZXJzLCBzdGF0dXMsIHN0YXR1c1RleHR9YC4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGlzIGZ1bmN0aW9uIHdpbGxcbiAqIGJlIHVzZWQgYXMgdGhlIGBSZXNwb25zZUluaXRgIGZvciB0aGUgbmV3IGBSZXNwb25zZWAuIFRvIGNoYW5nZSB0aGUgdmFsdWVzXG4gKiBlaXRoZXIgbW9kaWZ5IHRoZSBwYXNzZWQgcGFyYW1ldGVyKHMpIGFuZCByZXR1cm4gaXQsIG9yIHJldHVybiBhIHRvdGFsbHlcbiAqIG5ldyBvYmplY3QuXG4gKlxuICogVGhpcyBtZXRob2QgaXMgaW50ZW50aW9uYWxseSBsaW1pdGVkIHRvIHNhbWUtb3JpZ2luIHJlc3BvbnNlcywgcmVnYXJkbGVzcyBvZlxuICogd2hldGhlciBDT1JTIHdhcyB1c2VkIG9yIG5vdC5cbiAqXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNwb25zZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gbW9kaWZpZXJcbiAqIEBtZW1iZXJvZiB3b3JrYm94LWNvcmVcbiAqL1xuYXN5bmMgZnVuY3Rpb24gY29weVJlc3BvbnNlKHJlc3BvbnNlLCBtb2RpZmllcikge1xuICAgIGxldCBvcmlnaW4gPSBudWxsO1xuICAgIC8vIElmIHJlc3BvbnNlLnVybCBpc24ndCBzZXQsIGFzc3VtZSBpdCdzIGNyb3NzLW9yaWdpbiBhbmQga2VlcCBvcmlnaW4gbnVsbC5cbiAgICBpZiAocmVzcG9uc2UudXJsKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlVVJMID0gbmV3IFVSTChyZXNwb25zZS51cmwpO1xuICAgICAgICBvcmlnaW4gPSByZXNwb25zZVVSTC5vcmlnaW47XG4gICAgfVxuICAgIGlmIChvcmlnaW4gIT09IHNlbGYubG9jYXRpb24ub3JpZ2luKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2Nyb3NzLW9yaWdpbi1jb3B5LXJlc3BvbnNlJywgeyBvcmlnaW4gfSk7XG4gICAgfVxuICAgIGNvbnN0IGNsb25lZFJlc3BvbnNlID0gcmVzcG9uc2UuY2xvbmUoKTtcbiAgICAvLyBDcmVhdGUgYSBmcmVzaCBgUmVzcG9uc2VJbml0YCBvYmplY3QgYnkgY2xvbmluZyB0aGUgaGVhZGVycy5cbiAgICBjb25zdCByZXNwb25zZUluaXQgPSB7XG4gICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKGNsb25lZFJlc3BvbnNlLmhlYWRlcnMpLFxuICAgICAgICBzdGF0dXM6IGNsb25lZFJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogY2xvbmVkUmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICB9O1xuICAgIC8vIEFwcGx5IGFueSB1c2VyIG1vZGlmaWNhdGlvbnMuXG4gICAgY29uc3QgbW9kaWZpZWRSZXNwb25zZUluaXQgPSBtb2RpZmllciA/IG1vZGlmaWVyKHJlc3BvbnNlSW5pdCkgOiByZXNwb25zZUluaXQ7XG4gICAgLy8gQ3JlYXRlIHRoZSBuZXcgcmVzcG9uc2UgZnJvbSB0aGUgYm9keSBzdHJlYW0gYW5kIGBSZXNwb25zZUluaXRgXG4gICAgLy8gbW9kaWZpY2F0aW9ucy4gTm90ZTogbm90IGFsbCBicm93c2VycyBzdXBwb3J0IHRoZSBSZXNwb25zZS5ib2R5IHN0cmVhbSxcbiAgICAvLyBzbyBmYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgZW50aXJlIGJvZHkgaW50byBtZW1vcnkgYXMgYSBibG9iLlxuICAgIGNvbnN0IGJvZHkgPSBjYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtKClcbiAgICAgICAgPyBjbG9uZWRSZXNwb25zZS5ib2R5XG4gICAgICAgIDogYXdhaXQgY2xvbmVkUmVzcG9uc2UuYmxvYigpO1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoYm9keSwgbW9kaWZpZWRSZXNwb25zZUluaXQpO1xufVxuZXhwb3J0IHsgY29weVJlc3BvbnNlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBtZXNzYWdlcyB9IGZyb20gJy4vbWVzc2FnZXMuanMnO1xuaW1wb3J0ICcuLi8uLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBmYWxsYmFjayA9IChjb2RlLCAuLi5hcmdzKSA9PiB7XG4gICAgbGV0IG1zZyA9IGNvZGU7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBtc2cgKz0gYCA6OiAke0pTT04uc3RyaW5naWZ5KGFyZ3MpfWA7XG4gICAgfVxuICAgIHJldHVybiBtc2c7XG59O1xuY29uc3QgZ2VuZXJhdG9yRnVuY3Rpb24gPSAoY29kZSwgZGV0YWlscyA9IHt9KSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IG1lc3NhZ2VzW2NvZGVdO1xuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBmaW5kIG1lc3NhZ2UgZm9yIGNvZGUgJyR7Y29kZX0nLmApO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZShkZXRhaWxzKTtcbn07XG5leHBvcnQgY29uc3QgbWVzc2FnZUdlbmVyYXRvciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBmYWxsYmFjayA6IGdlbmVyYXRvckZ1bmN0aW9uO1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi8uLi9fdmVyc2lvbi5qcyc7XG5leHBvcnQgY29uc3QgbWVzc2FnZXMgPSB7XG4gICAgJ2ludmFsaWQtdmFsdWUnOiAoeyBwYXJhbU5hbWUsIHZhbGlkVmFsdWVEZXNjcmlwdGlvbiwgdmFsdWUgfSkgPT4ge1xuICAgICAgICBpZiAoIXBhcmFtTmFtZSB8fCAhdmFsaWRWYWx1ZURlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ2ludmFsaWQtdmFsdWUnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYFRoZSAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgd2FzIGdpdmVuIGEgdmFsdWUgd2l0aCBhbiBgICtcbiAgICAgICAgICAgIGB1bmV4cGVjdGVkIHZhbHVlLiAke3ZhbGlkVmFsdWVEZXNjcmlwdGlvbn0gUmVjZWl2ZWQgYSB2YWx1ZSBvZiBgICtcbiAgICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KHZhbHVlKX0uYCk7XG4gICAgfSxcbiAgICAnbm90LWFuLWFycmF5JzogKHsgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSwgcGFyYW1OYW1lIH0pID0+IHtcbiAgICAgICAgaWYgKCFtb2R1bGVOYW1lIHx8ICFjbGFzc05hbWUgfHwgIWZ1bmNOYW1lIHx8ICFwYXJhbU5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnbm90LWFuLWFycmF5JyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGBUaGUgcGFyYW1ldGVyICcke3BhcmFtTmFtZX0nIHBhc3NlZCBpbnRvIGAgK1xuICAgICAgICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSgpJyBtdXN0IGJlIGFuIGFycmF5LmApO1xuICAgIH0sXG4gICAgJ2luY29ycmVjdC10eXBlJzogKHsgZXhwZWN0ZWRUeXBlLCBwYXJhbU5hbWUsIG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUsIH0pID0+IHtcbiAgICAgICAgaWYgKCFleHBlY3RlZFR5cGUgfHwgIXBhcmFtTmFtZSB8fCAhbW9kdWxlTmFtZSB8fCAhZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW5jb3JyZWN0LXR5cGUnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZVN0ciA9IGNsYXNzTmFtZSA/IGAke2NsYXNzTmFtZX0uYCA6ICcnO1xuICAgICAgICByZXR1cm4gKGBUaGUgcGFyYW1ldGVyICcke3BhcmFtTmFtZX0nIHBhc3NlZCBpbnRvIGAgK1xuICAgICAgICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lU3RyfWAgK1xuICAgICAgICAgICAgYCR7ZnVuY05hbWV9KCknIG11c3QgYmUgb2YgdHlwZSAke2V4cGVjdGVkVHlwZX0uYCk7XG4gICAgfSxcbiAgICAnaW5jb3JyZWN0LWNsYXNzJzogKHsgZXhwZWN0ZWRDbGFzc05hbWUsIHBhcmFtTmFtZSwgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSwgaXNSZXR1cm5WYWx1ZVByb2JsZW0sIH0pID0+IHtcbiAgICAgICAgaWYgKCFleHBlY3RlZENsYXNzTmFtZSB8fCAhbW9kdWxlTmFtZSB8fCAhZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW5jb3JyZWN0LWNsYXNzJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWVTdHIgPSBjbGFzc05hbWUgPyBgJHtjbGFzc05hbWV9LmAgOiAnJztcbiAgICAgICAgaWYgKGlzUmV0dXJuVmFsdWVQcm9ibGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gKGBUaGUgcmV0dXJuIHZhbHVlIGZyb20gYCArXG4gICAgICAgICAgICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lU3RyfSR7ZnVuY05hbWV9KCknIGAgK1xuICAgICAgICAgICAgICAgIGBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGNsYXNzICR7ZXhwZWN0ZWRDbGFzc05hbWV9LmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYFRoZSBwYXJhbWV0ZXIgJyR7cGFyYW1OYW1lfScgcGFzc2VkIGludG8gYCArXG4gICAgICAgICAgICBgJyR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWVTdHJ9JHtmdW5jTmFtZX0oKScgYCArXG4gICAgICAgICAgICBgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBjbGFzcyAke2V4cGVjdGVkQ2xhc3NOYW1lfS5gKTtcbiAgICB9LFxuICAgICdtaXNzaW5nLWEtbWV0aG9kJzogKHsgZXhwZWN0ZWRNZXRob2QsIHBhcmFtTmFtZSwgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSwgfSkgPT4ge1xuICAgICAgICBpZiAoIWV4cGVjdGVkTWV0aG9kIHx8XG4gICAgICAgICAgICAhcGFyYW1OYW1lIHx8XG4gICAgICAgICAgICAhbW9kdWxlTmFtZSB8fFxuICAgICAgICAgICAgIWNsYXNzTmFtZSB8fFxuICAgICAgICAgICAgIWZ1bmNOYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ21pc3NpbmctYS1tZXRob2QnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYCR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9KCkgZXhwZWN0ZWQgdGhlIGAgK1xuICAgICAgICAgICAgYCcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciB0byBleHBvc2UgYSAnJHtleHBlY3RlZE1ldGhvZH0nIG1ldGhvZC5gKTtcbiAgICB9LFxuICAgICdhZGQtdG8tY2FjaGUtbGlzdC11bmV4cGVjdGVkLXR5cGUnOiAoeyBlbnRyeSB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoYEFuIHVuZXhwZWN0ZWQgZW50cnkgd2FzIHBhc3NlZCB0byBgICtcbiAgICAgICAgICAgIGAnd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlci5hZGRUb0NhY2hlTGlzdCgpJyBUaGUgZW50cnkgYCArXG4gICAgICAgICAgICBgJyR7SlNPTi5zdHJpbmdpZnkoZW50cnkpfScgaXNuJ3Qgc3VwcG9ydGVkLiBZb3UgbXVzdCBzdXBwbHkgYW4gYXJyYXkgb2YgYCArXG4gICAgICAgICAgICBgc3RyaW5ncyB3aXRoIG9uZSBvciBtb3JlIGNoYXJhY3RlcnMsIG9iamVjdHMgd2l0aCBhIHVybCBwcm9wZXJ0eSBvciBgICtcbiAgICAgICAgICAgIGBSZXF1ZXN0IG9iamVjdHMuYCk7XG4gICAgfSxcbiAgICAnYWRkLXRvLWNhY2hlLWxpc3QtY29uZmxpY3RpbmctZW50cmllcyc6ICh7IGZpcnN0RW50cnksIHNlY29uZEVudHJ5IH0pID0+IHtcbiAgICAgICAgaWYgKCFmaXJzdEVudHJ5IHx8ICFzZWNvbmRFbnRyeSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvIGAgKyBgJ2FkZC10by1jYWNoZS1saXN0LWR1cGxpY2F0ZS1lbnRyaWVzJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGBUd28gb2YgdGhlIGVudHJpZXMgcGFzc2VkIHRvIGAgK1xuICAgICAgICAgICAgYCd3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyLmFkZFRvQ2FjaGVMaXN0KCknIGhhZCB0aGUgVVJMIGAgK1xuICAgICAgICAgICAgYCR7Zmlyc3RFbnRyeX0gYnV0IGRpZmZlcmVudCByZXZpc2lvbiBkZXRhaWxzLiBXb3JrYm94IGlzIGAgK1xuICAgICAgICAgICAgYHVuYWJsZSB0byBjYWNoZSBhbmQgdmVyc2lvbiB0aGUgYXNzZXQgY29ycmVjdGx5LiBQbGVhc2UgcmVtb3ZlIG9uZSBgICtcbiAgICAgICAgICAgIGBvZiB0aGUgZW50cmllcy5gKTtcbiAgICB9LFxuICAgICdwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoJzogKHsgdGhyb3duRXJyb3JNZXNzYWdlIH0pID0+IHtcbiAgICAgICAgaWYgKCF0aHJvd25FcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byBgICsgYCdwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoJywgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChgQW4gZXJyb3Igd2FzIHRocm93biBieSBhIHBsdWdpbnMgJ3JlcXVlc3RXaWxsRmV0Y2goKScgbWV0aG9kLiBgICtcbiAgICAgICAgICAgIGBUaGUgdGhyb3duIGVycm9yIG1lc3NhZ2Ugd2FzOiAnJHt0aHJvd25FcnJvck1lc3NhZ2V9Jy5gKTtcbiAgICB9LFxuICAgICdpbnZhbGlkLWNhY2hlLW5hbWUnOiAoeyBjYWNoZU5hbWVJZCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICBpZiAoIWNhY2hlTmFtZUlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGEgJ2NhY2hlTmFtZUlkJyBmb3IgZXJyb3IgJ2ludmFsaWQtY2FjaGUtbmFtZSdgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGBZb3UgbXVzdCBwcm92aWRlIGEgbmFtZSBjb250YWluaW5nIGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXIgZm9yIGAgK1xuICAgICAgICAgICAgYHNldENhY2hlRGV0YWlscyh7JHtjYWNoZU5hbWVJZH06ICcuLi4nfSkuIFJlY2VpdmVkIGEgdmFsdWUgb2YgYCArXG4gICAgICAgICAgICBgJyR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfSdgKTtcbiAgICB9LFxuICAgICd1bnJlZ2lzdGVyLXJvdXRlLWJ1dC1ub3QtZm91bmQtd2l0aC1tZXRob2QnOiAoeyBtZXRob2QgfSkgPT4ge1xuICAgICAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvIGAgK1xuICAgICAgICAgICAgICAgIGAndW5yZWdpc3Rlci1yb3V0ZS1idXQtbm90LWZvdW5kLXdpdGgtbWV0aG9kJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGBUaGUgcm91dGUgeW91J3JlIHRyeWluZyB0byB1bnJlZ2lzdGVyIHdhcyBub3QgIHByZXZpb3VzbHkgYCArXG4gICAgICAgICAgICBgcmVnaXN0ZXJlZCBmb3IgdGhlIG1ldGhvZCB0eXBlICcke21ldGhvZH0nLmApO1xuICAgIH0sXG4gICAgJ3VucmVnaXN0ZXItcm91dGUtcm91dGUtbm90LXJlZ2lzdGVyZWQnOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoYFRoZSByb3V0ZSB5b3UncmUgdHJ5aW5nIHRvIHVucmVnaXN0ZXIgd2FzIG5vdCBwcmV2aW91c2x5IGAgK1xuICAgICAgICAgICAgYHJlZ2lzdGVyZWQuYCk7XG4gICAgfSxcbiAgICAncXVldWUtcmVwbGF5LWZhaWxlZCc6ICh7IG5hbWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFJlcGxheWluZyB0aGUgYmFja2dyb3VuZCBzeW5jIHF1ZXVlICcke25hbWV9JyBmYWlsZWQuYDtcbiAgICB9LFxuICAgICdkdXBsaWNhdGUtcXVldWUtbmFtZSc6ICh7IG5hbWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKGBUaGUgUXVldWUgbmFtZSAnJHtuYW1lfScgaXMgYWxyZWFkeSBiZWluZyB1c2VkLiBgICtcbiAgICAgICAgICAgIGBBbGwgaW5zdGFuY2VzIG9mIGJhY2tncm91bmRTeW5jLlF1ZXVlIG11c3QgYmUgZ2l2ZW4gdW5pcXVlIG5hbWVzLmApO1xuICAgIH0sXG4gICAgJ2V4cGlyZWQtdGVzdC13aXRob3V0LW1heC1hZ2UnOiAoeyBtZXRob2ROYW1lLCBwYXJhbU5hbWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKGBUaGUgJyR7bWV0aG9kTmFtZX0oKScgbWV0aG9kIGNhbiBvbmx5IGJlIHVzZWQgd2hlbiB0aGUgYCArXG4gICAgICAgICAgICBgJyR7cGFyYW1OYW1lfScgaXMgdXNlZCBpbiB0aGUgY29uc3RydWN0b3IuYCk7XG4gICAgfSxcbiAgICAndW5zdXBwb3J0ZWQtcm91dGUtdHlwZSc6ICh7IG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUsIHBhcmFtTmFtZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoYFRoZSBzdXBwbGllZCAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgd2FzIGFuIHVuc3VwcG9ydGVkIHR5cGUuIGAgK1xuICAgICAgICAgICAgYFBsZWFzZSBjaGVjayB0aGUgZG9jcyBmb3IgJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0gZm9yIGAgK1xuICAgICAgICAgICAgYHZhbGlkIGlucHV0IHR5cGVzLmApO1xuICAgIH0sXG4gICAgJ25vdC1hcnJheS1vZi1jbGFzcyc6ICh7IHZhbHVlLCBleHBlY3RlZENsYXNzLCBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWUsIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChgVGhlIHN1cHBsaWVkICcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciBtdXN0IGJlIGFuIGFycmF5IG9mIGAgK1xuICAgICAgICAgICAgYCcke2V4cGVjdGVkQ2xhc3N9JyBvYmplY3RzLiBSZWNlaXZlZCAnJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9LCcuIGAgK1xuICAgICAgICAgICAgYFBsZWFzZSBjaGVjayB0aGUgY2FsbCB0byAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSgpIGAgK1xuICAgICAgICAgICAgYHRvIGZpeCB0aGUgaXNzdWUuYCk7XG4gICAgfSxcbiAgICAnbWF4LWVudHJpZXMtb3ItYWdlLXJlcXVpcmVkJzogKHsgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoYFlvdSBtdXN0IGRlZmluZSBlaXRoZXIgY29uZmlnLm1heEVudHJpZXMgb3IgY29uZmlnLm1heEFnZVNlY29uZHNgICtcbiAgICAgICAgICAgIGBpbiAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfWApO1xuICAgIH0sXG4gICAgJ3N0YXR1c2VzLW9yLWhlYWRlcnMtcmVxdWlyZWQnOiAoeyBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChgWW91IG11c3QgZGVmaW5lIGVpdGhlciBjb25maWcuc3RhdHVzZXMgb3IgY29uZmlnLmhlYWRlcnNgICtcbiAgICAgICAgICAgIGBpbiAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfWApO1xuICAgIH0sXG4gICAgJ2ludmFsaWQtc3RyaW5nJzogKHsgbW9kdWxlTmFtZSwgZnVuY05hbWUsIHBhcmFtTmFtZSB9KSA9PiB7XG4gICAgICAgIGlmICghcGFyYW1OYW1lIHx8ICFtb2R1bGVOYW1lIHx8ICFmdW5jTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbnZhbGlkLXN0cmluZycgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChgV2hlbiB1c2luZyBzdHJpbmdzLCB0aGUgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIG11c3Qgc3RhcnQgd2l0aCBgICtcbiAgICAgICAgICAgIGAnaHR0cCcgKGZvciBjcm9zcy1vcmlnaW4gbWF0Y2hlcykgb3IgJy8nIChmb3Igc2FtZS1vcmlnaW4gbWF0Y2hlcykuIGAgK1xuICAgICAgICAgICAgYFBsZWFzZSBzZWUgdGhlIGRvY3MgZm9yICR7bW9kdWxlTmFtZX0uJHtmdW5jTmFtZX0oKSBmb3IgYCArXG4gICAgICAgICAgICBgbW9yZSBpbmZvLmApO1xuICAgIH0sXG4gICAgJ2NoYW5uZWwtbmFtZS1yZXF1aXJlZCc6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChgWW91IG11c3QgcHJvdmlkZSBhIGNoYW5uZWxOYW1lIHRvIGNvbnN0cnVjdCBhIGAgK1xuICAgICAgICAgICAgYEJyb2FkY2FzdENhY2hlVXBkYXRlIGluc3RhbmNlLmApO1xuICAgIH0sXG4gICAgJ2ludmFsaWQtcmVzcG9uc2VzLWFyZS1zYW1lLWFyZ3MnOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoYFRoZSBhcmd1bWVudHMgcGFzc2VkIGludG8gcmVzcG9uc2VzQXJlU2FtZSgpIGFwcGVhciB0byBiZSBgICtcbiAgICAgICAgICAgIGBpbnZhbGlkLiBQbGVhc2UgZW5zdXJlIHZhbGlkIFJlc3BvbnNlcyBhcmUgdXNlZC5gKTtcbiAgICB9LFxuICAgICdleHBpcmUtY3VzdG9tLWNhY2hlcy1vbmx5JzogKCkgPT4ge1xuICAgICAgICByZXR1cm4gKGBZb3UgbXVzdCBwcm92aWRlIGEgJ2NhY2hlTmFtZScgcHJvcGVydHkgd2hlbiB1c2luZyB0aGUgYCArXG4gICAgICAgICAgICBgZXhwaXJhdGlvbiBwbHVnaW4gd2l0aCBhIHJ1bnRpbWUgY2FjaGluZyBzdHJhdGVneS5gKTtcbiAgICB9LFxuICAgICd1bml0LW11c3QtYmUtYnl0ZXMnOiAoeyBub3JtYWxpemVkUmFuZ2VIZWFkZXIgfSkgPT4ge1xuICAgICAgICBpZiAoIW5vcm1hbGl6ZWRSYW5nZUhlYWRlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICd1bml0LW11c3QtYmUtYnl0ZXMnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYFRoZSAndW5pdCcgcG9ydGlvbiBvZiB0aGUgUmFuZ2UgaGVhZGVyIG11c3QgYmUgc2V0IHRvICdieXRlcycuIGAgK1xuICAgICAgICAgICAgYFRoZSBSYW5nZSBoZWFkZXIgcHJvdmlkZWQgd2FzIFwiJHtub3JtYWxpemVkUmFuZ2VIZWFkZXJ9XCJgKTtcbiAgICB9LFxuICAgICdzaW5nbGUtcmFuZ2Utb25seSc6ICh7IG5vcm1hbGl6ZWRSYW5nZUhlYWRlciB9KSA9PiB7XG4gICAgICAgIGlmICghbm9ybWFsaXplZFJhbmdlSGVhZGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ3NpbmdsZS1yYW5nZS1vbmx5JyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGBNdWx0aXBsZSByYW5nZXMgYXJlIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSB1c2UgYSAgc2luZ2xlIHN0YXJ0IGAgK1xuICAgICAgICAgICAgYHZhbHVlLCBhbmQgb3B0aW9uYWwgZW5kIHZhbHVlLiBUaGUgUmFuZ2UgaGVhZGVyIHByb3ZpZGVkIHdhcyBgICtcbiAgICAgICAgICAgIGBcIiR7bm9ybWFsaXplZFJhbmdlSGVhZGVyfVwiYCk7XG4gICAgfSxcbiAgICAnaW52YWxpZC1yYW5nZS12YWx1ZXMnOiAoeyBub3JtYWxpemVkUmFuZ2VIZWFkZXIgfSkgPT4ge1xuICAgICAgICBpZiAoIW5vcm1hbGl6ZWRSYW5nZUhlYWRlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbnZhbGlkLXJhbmdlLXZhbHVlcycgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChgVGhlIFJhbmdlIGhlYWRlciBpcyBtaXNzaW5nIGJvdGggc3RhcnQgYW5kIGVuZCB2YWx1ZXMuIEF0IGxlYXN0IGAgK1xuICAgICAgICAgICAgYG9uZSBvZiB0aG9zZSB2YWx1ZXMgaXMgbmVlZGVkLiBUaGUgUmFuZ2UgaGVhZGVyIHByb3ZpZGVkIHdhcyBgICtcbiAgICAgICAgICAgIGBcIiR7bm9ybWFsaXplZFJhbmdlSGVhZGVyfVwiYCk7XG4gICAgfSxcbiAgICAnbm8tcmFuZ2UtaGVhZGVyJzogKCkgPT4ge1xuICAgICAgICByZXR1cm4gYE5vIFJhbmdlIGhlYWRlciB3YXMgZm91bmQgaW4gdGhlIFJlcXVlc3QgcHJvdmlkZWQuYDtcbiAgICB9LFxuICAgICdyYW5nZS1ub3Qtc2F0aXNmaWFibGUnOiAoeyBzaXplLCBzdGFydCwgZW5kIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChgVGhlIHN0YXJ0ICgke3N0YXJ0fSkgYW5kIGVuZCAoJHtlbmR9KSB2YWx1ZXMgaW4gdGhlIFJhbmdlIGFyZSBgICtcbiAgICAgICAgICAgIGBub3Qgc2F0aXNmaWFibGUgYnkgdGhlIGNhY2hlZCByZXNwb25zZSwgd2hpY2ggaXMgJHtzaXplfSBieXRlcy5gKTtcbiAgICB9LFxuICAgICdhdHRlbXB0LXRvLWNhY2hlLW5vbi1nZXQtcmVxdWVzdCc6ICh7IHVybCwgbWV0aG9kIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChgVW5hYmxlIHRvIGNhY2hlICcke3VybH0nIGJlY2F1c2UgaXQgaXMgYSAnJHttZXRob2R9JyByZXF1ZXN0IGFuZCBgICtcbiAgICAgICAgICAgIGBvbmx5ICdHRVQnIHJlcXVlc3RzIGNhbiBiZSBjYWNoZWQuYCk7XG4gICAgfSxcbiAgICAnY2FjaGUtcHV0LXdpdGgtbm8tcmVzcG9uc2UnOiAoeyB1cmwgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKGBUaGVyZSB3YXMgYW4gYXR0ZW1wdCB0byBjYWNoZSAnJHt1cmx9JyBidXQgdGhlIHJlc3BvbnNlIHdhcyBub3QgYCArXG4gICAgICAgICAgICBgZGVmaW5lZC5gKTtcbiAgICB9LFxuICAgICduby1yZXNwb25zZSc6ICh7IHVybCwgZXJyb3IgfSkgPT4ge1xuICAgICAgICBsZXQgbWVzc2FnZSA9IGBUaGUgc3RyYXRlZ3kgY291bGQgbm90IGdlbmVyYXRlIGEgcmVzcG9uc2UgZm9yICcke3VybH0nLmA7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgbWVzc2FnZSArPSBgIFRoZSB1bmRlcmx5aW5nIGVycm9yIGlzICR7ZXJyb3J9LmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfSxcbiAgICAnYmFkLXByZWNhY2hpbmctcmVzcG9uc2UnOiAoeyB1cmwsIHN0YXR1cyB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoYFRoZSBwcmVjYWNoaW5nIHJlcXVlc3QgZm9yICcke3VybH0nIGZhaWxlZGAgK1xuICAgICAgICAgICAgKHN0YXR1cyA/IGAgd2l0aCBhbiBIVFRQIHN0YXR1cyBvZiAke3N0YXR1c30uYCA6IGAuYCkpO1xuICAgIH0sXG4gICAgJ25vbi1wcmVjYWNoZWQtdXJsJzogKHsgdXJsIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChgY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwoJyR7dXJsfScpIHdhcyBjYWxsZWQsIGJ1dCB0aGF0IFVSTCBpcyBgICtcbiAgICAgICAgICAgIGBub3QgcHJlY2FjaGVkLiBQbGVhc2UgcGFzcyBpbiBhIFVSTCB0aGF0IGlzIHByZWNhY2hlZCBpbnN0ZWFkLmApO1xuICAgIH0sXG4gICAgJ2FkZC10by1jYWNoZS1saXN0LWNvbmZsaWN0aW5nLWludGVncml0aWVzJzogKHsgdXJsIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChgVHdvIG9mIHRoZSBlbnRyaWVzIHBhc3NlZCB0byBgICtcbiAgICAgICAgICAgIGAnd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlci5hZGRUb0NhY2hlTGlzdCgpJyBoYWQgdGhlIFVSTCBgICtcbiAgICAgICAgICAgIGAke3VybH0gd2l0aCBkaWZmZXJlbnQgaW50ZWdyaXR5IHZhbHVlcy4gUGxlYXNlIHJlbW92ZSBvbmUgb2YgdGhlbS5gKTtcbiAgICB9LFxuICAgICdtaXNzaW5nLXByZWNhY2hlLWVudHJ5JzogKHsgY2FjaGVOYW1lLCB1cmwgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFVuYWJsZSB0byBmaW5kIGEgcHJlY2FjaGVkIHJlc3BvbnNlIGluICR7Y2FjaGVOYW1lfSBmb3IgJHt1cmx9LmA7XG4gICAgfSxcbiAgICAnY3Jvc3Mtb3JpZ2luLWNvcHktcmVzcG9uc2UnOiAoeyBvcmlnaW4gfSkgPT4ge1xuICAgICAgICByZXR1cm4gKGB3b3JrYm94LWNvcmUuY29weVJlc3BvbnNlKCkgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIHNhbWUtb3JpZ2luIGAgK1xuICAgICAgICAgICAgYHJlc3BvbnNlcy4gSXQgd2FzIHBhc3NlZCBhIHJlc3BvbnNlIHdpdGggb3JpZ2luICR7b3JpZ2lufS5gKTtcbiAgICB9LFxuICAgICdvcGFxdWUtc3RyZWFtcy1zb3VyY2UnOiAoeyB0eXBlIH0pID0+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBPbmUgb2YgdGhlIHdvcmtib3gtc3RyZWFtcyBzb3VyY2VzIHJlc3VsdGVkIGluIGFuIGAgK1xuICAgICAgICAgICAgYCcke3R5cGV9JyByZXNwb25zZS5gO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ29wYXF1ZXJlZGlyZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIChgJHttZXNzYWdlfSBQbGVhc2UgZG8gbm90IHVzZSBhIG5hdmlnYXRpb24gcmVxdWVzdCB0aGF0IHJlc3VsdHMgYCArXG4gICAgICAgICAgICAgICAgYGluIGEgcmVkaXJlY3QgYXMgYSBzb3VyY2UuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke21lc3NhZ2V9IFBsZWFzZSBlbnN1cmUgeW91ciBzb3VyY2VzIGFyZSBDT1JTLWVuYWJsZWQuYDtcbiAgICB9LFxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLy8gQ2FsbGJhY2tzIHRvIGJlIGV4ZWN1dGVkIHdoZW5ldmVyIHRoZXJlJ3MgYSBxdW90YSBlcnJvci5cbi8vIENhbid0IGNoYW5nZSBGdW5jdGlvbiB0eXBlIHJpZ2h0IG5vdy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5jb25zdCBxdW90YUVycm9yQ2FsbGJhY2tzID0gbmV3IFNldCgpO1xuZXhwb3J0IHsgcXVvdGFFcnJvckNhbGxiYWNrcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnLi9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgcXVvdGFFcnJvckNhbGxiYWNrcyB9IGZyb20gJy4vbW9kZWxzL3F1b3RhRXJyb3JDYWxsYmFja3MuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQWRkcyBhIGZ1bmN0aW9uIHRvIHRoZSBzZXQgb2YgcXVvdGFFcnJvckNhbGxiYWNrcyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgaWZcbiAqIHRoZXJlJ3MgYSBxdW90YSBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQG1lbWJlcm9mIHdvcmtib3gtY29yZVxuICovXG4vLyBDYW4ndCBjaGFuZ2UgRnVuY3Rpb24gdHlwZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmZ1bmN0aW9uIHJlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgYXNzZXJ0LmlzVHlwZShjYWxsYmFjaywgJ2Z1bmN0aW9uJywge1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtY29yZScsXG4gICAgICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyJyxcbiAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NhbGxiYWNrJyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHF1b3RhRXJyb3JDYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIubG9nKCdSZWdpc3RlcmVkIGEgY2FsbGJhY2sgdG8gcmVzcG9uZCB0byBxdW90YSBlcnJvcnMuJywgY2FsbGJhY2spO1xuICAgIH1cbn1cbmV4cG9ydCB7IHJlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGRvbnRXYWl0Rm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2RvbnRXYWl0Rm9yLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBDYWNoZVRpbWVzdGFtcHNNb2RlbCB9IGZyb20gJy4vbW9kZWxzL0NhY2hlVGltZXN0YW1wc01vZGVsLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRoZSBgQ2FjaGVFeHBpcmF0aW9uYCBjbGFzcyBhbGxvd3MgeW91IGRlZmluZSBhbiBleHBpcmF0aW9uIGFuZCAvIG9yXG4gKiBsaW1pdCBvbiB0aGUgbnVtYmVyIG9mIHJlc3BvbnNlcyBzdG9yZWQgaW4gYVxuICogW2BDYWNoZWBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYWNoZSkuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtZXhwaXJhdGlvblxuICovXG5jbGFzcyBDYWNoZUV4cGlyYXRpb24ge1xuICAgIC8qKlxuICAgICAqIFRvIGNvbnN0cnVjdCBhIG5ldyBDYWNoZUV4cGlyYXRpb24gaW5zdGFuY2UgeW91IG11c3QgcHJvdmlkZSBhdCBsZWFzdFxuICAgICAqIG9uZSBvZiB0aGUgYGNvbmZpZ2AgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYWNoZU5hbWUgTmFtZSBvZiB0aGUgY2FjaGUgdG8gYXBwbHkgcmVzdHJpY3Rpb25zIHRvLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5tYXhFbnRyaWVzXSBUaGUgbWF4aW11bSBudW1iZXIgb2YgZW50cmllcyB0byBjYWNoZS5cbiAgICAgKiBFbnRyaWVzIHVzZWQgdGhlIGxlYXN0IHdpbGwgYmUgcmVtb3ZlZCBhcyB0aGUgbWF4aW11bSBpcyByZWFjaGVkLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLm1heEFnZVNlY29uZHNdIFRoZSBtYXhpbXVtIGFnZSBvZiBhbiBlbnRyeSBiZWZvcmVcbiAgICAgKiBpdCdzIHRyZWF0ZWQgYXMgc3RhbGUgYW5kIHJlbW92ZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWcubWF0Y2hPcHRpb25zXSBUaGUgW2BDYWNoZVF1ZXJ5T3B0aW9uc2BdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYWNoZS9kZWxldGUjUGFyYW1ldGVycylcbiAgICAgKiB0aGF0IHdpbGwgYmUgdXNlZCB3aGVuIGNhbGxpbmcgYGRlbGV0ZSgpYCBvbiB0aGUgY2FjaGUuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2FjaGVOYW1lLCBjb25maWcgPSB7fSkge1xuICAgICAgICB0aGlzLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmVydW5SZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc1R5cGUoY2FjaGVOYW1lLCAnc3RyaW5nJywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnY2FjaGVOYW1lJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCEoY29uZmlnLm1heEVudHJpZXMgfHwgY29uZmlnLm1heEFnZVNlY29uZHMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbWF4LWVudHJpZXMtb3ItYWdlLXJlcXVpcmVkJywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVFeHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLm1heEVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNUeXBlKGNvbmZpZy5tYXhFbnRyaWVzLCAnbnVtYmVyJywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVFeHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5tYXhFbnRyaWVzJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWcubWF4QWdlU2Vjb25kcykge1xuICAgICAgICAgICAgICAgIGFzc2VydC5pc1R5cGUoY29uZmlnLm1heEFnZVNlY29uZHMsICdudW1iZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZUV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnY29uZmlnLm1heEFnZVNlY29uZHMnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21heEVudHJpZXMgPSBjb25maWcubWF4RW50cmllcztcbiAgICAgICAgdGhpcy5fbWF4QWdlU2Vjb25kcyA9IGNvbmZpZy5tYXhBZ2VTZWNvbmRzO1xuICAgICAgICB0aGlzLl9tYXRjaE9wdGlvbnMgPSBjb25maWcubWF0Y2hPcHRpb25zO1xuICAgICAgICB0aGlzLl9jYWNoZU5hbWUgPSBjYWNoZU5hbWU7XG4gICAgICAgIHRoaXMuX3RpbWVzdGFtcE1vZGVsID0gbmV3IENhY2hlVGltZXN0YW1wc01vZGVsKGNhY2hlTmFtZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4cGlyZXMgZW50cmllcyBmb3IgdGhlIGdpdmVuIGNhY2hlIGFuZCBnaXZlbiBjcml0ZXJpYS5cbiAgICAgKi9cbiAgICBhc3luYyBleHBpcmVFbnRyaWVzKCkge1xuICAgICAgICBpZiAodGhpcy5faXNSdW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXJ1blJlcXVlc3RlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgbWluVGltZXN0YW1wID0gdGhpcy5fbWF4QWdlU2Vjb25kc1xuICAgICAgICAgICAgPyBEYXRlLm5vdygpIC0gdGhpcy5fbWF4QWdlU2Vjb25kcyAqIDEwMDBcbiAgICAgICAgICAgIDogMDtcbiAgICAgICAgY29uc3QgdXJsc0V4cGlyZWQgPSBhd2FpdCB0aGlzLl90aW1lc3RhbXBNb2RlbC5leHBpcmVFbnRyaWVzKG1pblRpbWVzdGFtcCwgdGhpcy5fbWF4RW50cmllcyk7XG4gICAgICAgIC8vIERlbGV0ZSBVUkxzIGZyb20gdGhlIGNhY2hlXG4gICAgICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgc2VsZi5jYWNoZXMub3Blbih0aGlzLl9jYWNoZU5hbWUpO1xuICAgICAgICBmb3IgKGNvbnN0IHVybCBvZiB1cmxzRXhwaXJlZCkge1xuICAgICAgICAgICAgYXdhaXQgY2FjaGUuZGVsZXRlKHVybCwgdGhpcy5fbWF0Y2hPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHVybHNFeHBpcmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYEV4cGlyZWQgJHt1cmxzRXhwaXJlZC5sZW5ndGh9IGAgK1xuICAgICAgICAgICAgICAgICAgICBgJHt1cmxzRXhwaXJlZC5sZW5ndGggPT09IDEgPyAnZW50cnknIDogJ2VudHJpZXMnfSBhbmQgcmVtb3ZlZCBgICtcbiAgICAgICAgICAgICAgICAgICAgYCR7dXJsc0V4cGlyZWQubGVuZ3RoID09PSAxID8gJ2l0JyA6ICd0aGVtJ30gZnJvbSB0aGUgYCArXG4gICAgICAgICAgICAgICAgICAgIGAnJHt0aGlzLl9jYWNoZU5hbWV9JyBjYWNoZS5gKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBFeHBpcmVkIHRoZSBmb2xsb3dpbmcgJHt1cmxzRXhwaXJlZC5sZW5ndGggPT09IDEgPyAnVVJMJyA6ICdVUkxzJ306YCk7XG4gICAgICAgICAgICAgICAgdXJsc0V4cGlyZWQuZm9yRWFjaCgodXJsKSA9PiBsb2dnZXIubG9nKGAgICAgJHt1cmx9YCkpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBDYWNoZSBleHBpcmF0aW9uIHJhbiBhbmQgZm91bmQgbm8gZW50cmllcyB0byByZW1vdmUuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9yZXJ1blJlcXVlc3RlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVydW5SZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGRvbnRXYWl0Rm9yKHRoaXMuZXhwaXJlRW50cmllcygpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHRpbWVzdGFtcCBmb3IgdGhlIGdpdmVuIFVSTC4gVGhpcyBlbnN1cmVzIHRoZSB3aGVuXG4gICAgICogcmVtb3ZpbmcgZW50cmllcyBiYXNlZCBvbiBtYXhpbXVtIGVudHJpZXMsIG1vc3QgcmVjZW50bHkgdXNlZFxuICAgICAqIGlzIGFjY3VyYXRlIG9yIHdoZW4gZXhwaXJpbmcsIHRoZSB0aW1lc3RhbXAgaXMgdXAtdG8tZGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICBhc3luYyB1cGRhdGVUaW1lc3RhbXAodXJsKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNUeXBlKHVybCwgJ3N0cmluZycsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZUV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAndXBkYXRlVGltZXN0YW1wJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICd1cmwnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5fdGltZXN0YW1wTW9kZWwuc2V0VGltZXN0YW1wKHVybCwgRGF0ZS5ub3coKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbiBiZSB1c2VkIHRvIGNoZWNrIGlmIGEgVVJMIGhhcyBleHBpcmVkIG9yIG5vdCBiZWZvcmUgaXQncyB1c2VkLlxuICAgICAqXG4gICAgICogVGhpcyByZXF1aXJlcyBhIGxvb2sgdXAgZnJvbSBJbmRleGVkREIsIHNvIGNhbiBiZSBzbG93LlxuICAgICAqXG4gICAgICogTm90ZTogVGhpcyBtZXRob2Qgd2lsbCBub3QgcmVtb3ZlIHRoZSBjYWNoZWQgZW50cnksIGNhbGxcbiAgICAgKiBgZXhwaXJlRW50cmllcygpYCB0byByZW1vdmUgaW5kZXhlZERCIGFuZCBDYWNoZSBlbnRyaWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgYXN5bmMgaXNVUkxFeHBpcmVkKHVybCkge1xuICAgICAgICBpZiAoIXRoaXMuX21heEFnZVNlY29uZHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcihgZXhwaXJlZC10ZXN0LXdpdGhvdXQtbWF4LWFnZWAsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kTmFtZTogJ2lzVVJMRXhwaXJlZCcsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ21heEFnZVNlY29uZHMnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gYXdhaXQgdGhpcy5fdGltZXN0YW1wTW9kZWwuZ2V0VGltZXN0YW1wKHVybCk7XG4gICAgICAgICAgICBjb25zdCBleHBpcmVPbGRlclRoYW4gPSBEYXRlLm5vdygpIC0gdGhpcy5fbWF4QWdlU2Vjb25kcyAqIDEwMDA7XG4gICAgICAgICAgICByZXR1cm4gdGltZXN0YW1wICE9PSB1bmRlZmluZWQgPyB0aW1lc3RhbXAgPCBleHBpcmVPbGRlclRoYW4gOiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIEluZGV4ZWREQiBvYmplY3Qgc3RvcmUgdXNlZCB0byBrZWVwIHRyYWNrIG9mIGNhY2hlIGV4cGlyYXRpb25cbiAgICAgKiBtZXRhZGF0YS5cbiAgICAgKi9cbiAgICBhc3luYyBkZWxldGUoKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCBhdHRlbXB0IGFub3RoZXIgcmVydW4gaWYgd2UncmUgY2FsbGVkIGluIHRoZSBtaWRkbGUgb2ZcbiAgICAgICAgLy8gYSBjYWNoZSBleHBpcmF0aW9uLlxuICAgICAgICB0aGlzLl9yZXJ1blJlcXVlc3RlZCA9IGZhbHNlO1xuICAgICAgICBhd2FpdCB0aGlzLl90aW1lc3RhbXBNb2RlbC5leHBpcmVFbnRyaWVzKEluZmluaXR5KTsgLy8gRXhwaXJlcyBhbGwuXG4gICAgfVxufVxuZXhwb3J0IHsgQ2FjaGVFeHBpcmF0aW9uIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGNhY2hlTmFtZXMgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5qcyc7XG5pbXBvcnQgeyBkb250V2FpdEZvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9kb250V2FpdEZvci5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IHJlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrIH0gZnJvbSAnd29ya2JveC1jb3JlL3JlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHsgQ2FjaGVFeHBpcmF0aW9uIH0gZnJvbSAnLi9DYWNoZUV4cGlyYXRpb24uanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogVGhpcyBwbHVnaW4gY2FuIGJlIHVzZWQgaW4gYSBgd29ya2JveC1zdHJhdGVneWAgdG8gcmVndWxhcmx5IGVuZm9yY2UgYVxuICogbGltaXQgb24gdGhlIGFnZSBhbmQgLyBvciB0aGUgbnVtYmVyIG9mIGNhY2hlZCByZXF1ZXN0cy5cbiAqXG4gKiBJdCBjYW4gb25seSBiZSB1c2VkIHdpdGggYHdvcmtib3gtc3RyYXRlZ3lgIGluc3RhbmNlcyB0aGF0IGhhdmUgYVxuICogW2N1c3RvbSBgY2FjaGVOYW1lYCBwcm9wZXJ0eSBzZXRdKC93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvY29uZmlndXJlLXdvcmtib3gjY3VzdG9tX2NhY2hlX25hbWVzX2luX3N0cmF0ZWdpZXMpLlxuICogSW4gb3RoZXIgd29yZHMsIGl0IGNhbid0IGJlIHVzZWQgdG8gZXhwaXJlIGVudHJpZXMgaW4gc3RyYXRlZ3kgdGhhdCB1c2VzIHRoZVxuICogZGVmYXVsdCBydW50aW1lIGNhY2hlIG5hbWUuXG4gKlxuICogV2hlbmV2ZXIgYSBjYWNoZWQgcmVzcG9uc2UgaXMgdXNlZCBvciB1cGRhdGVkLCB0aGlzIHBsdWdpbiB3aWxsIGxvb2tcbiAqIGF0IHRoZSBhc3NvY2lhdGVkIGNhY2hlIGFuZCByZW1vdmUgYW55IG9sZCBvciBleHRyYSByZXNwb25zZXMuXG4gKlxuICogV2hlbiB1c2luZyBgbWF4QWdlU2Vjb25kc2AsIHJlc3BvbnNlcyBtYXkgYmUgdXNlZCAqb25jZSogYWZ0ZXIgZXhwaXJpbmdcbiAqIGJlY2F1c2UgdGhlIGV4cGlyYXRpb24gY2xlYW4gdXAgd2lsbCBub3QgaGF2ZSBvY2N1cnJlZCB1bnRpbCAqYWZ0ZXIqIHRoZVxuICogY2FjaGVkIHJlc3BvbnNlIGhhcyBiZWVuIHVzZWQuIElmIHRoZSByZXNwb25zZSBoYXMgYSBcIkRhdGVcIiBoZWFkZXIsIHRoZW5cbiAqIGEgbGlnaHQgd2VpZ2h0IGV4cGlyYXRpb24gY2hlY2sgaXMgcGVyZm9ybWVkIGFuZCB0aGUgcmVzcG9uc2Ugd2lsbCBub3QgYmVcbiAqIHVzZWQgaW1tZWRpYXRlbHkuXG4gKlxuICogV2hlbiB1c2luZyBgbWF4RW50cmllc2AsIHRoZSBlbnRyeSBsZWFzdC1yZWNlbnRseSByZXF1ZXN0ZWQgd2lsbCBiZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBjYWNoZSBmaXJzdC5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1leHBpcmF0aW9uXG4gKi9cbmNsYXNzIEV4cGlyYXRpb25QbHVnaW4ge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RXhwaXJhdGlvblBsdWdpbk9wdGlvbnN9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLm1heEVudHJpZXNdIFRoZSBtYXhpbXVtIG51bWJlciBvZiBlbnRyaWVzIHRvIGNhY2hlLlxuICAgICAqIEVudHJpZXMgdXNlZCB0aGUgbGVhc3Qgd2lsbCBiZSByZW1vdmVkIGFzIHRoZSBtYXhpbXVtIGlzIHJlYWNoZWQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcubWF4QWdlU2Vjb25kc10gVGhlIG1heGltdW0gYWdlIG9mIGFuIGVudHJ5IGJlZm9yZVxuICAgICAqIGl0J3MgdHJlYXRlZCBhcyBzdGFsZSBhbmQgcmVtb3ZlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2NvbmZpZy5tYXRjaE9wdGlvbnNdIFRoZSBbYENhY2hlUXVlcnlPcHRpb25zYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhY2hlL2RlbGV0ZSNQYXJhbWV0ZXJzKVxuICAgICAqIHRoYXQgd2lsbCBiZSB1c2VkIHdoZW4gY2FsbGluZyBgZGVsZXRlKClgIG9uIHRoZSBjYWNoZS5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtjb25maWcucHVyZ2VPblF1b3RhRXJyb3JdIFdoZXRoZXIgdG8gb3B0IHRoaXMgY2FjaGUgaW4gdG9cbiAgICAgKiBhdXRvbWF0aWMgZGVsZXRpb24gaWYgdGhlIGF2YWlsYWJsZSBzdG9yYWdlIHF1b3RhIGhhcyBiZWVuIGV4Y2VlZGVkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIFwibGlmZWN5Y2xlXCIgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIHRyaWdnZXJlZCBhdXRvbWF0aWNhbGx5IGJ5IHRoZVxuICAgICAgICAgKiBgd29ya2JveC1zdHJhdGVnaWVzYCBoYW5kbGVycyB3aGVuIGEgYFJlc3BvbnNlYCBpcyBhYm91dCB0byBiZSByZXR1cm5lZFxuICAgICAgICAgKiBmcm9tIGEgW0NhY2hlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FjaGUpIHRvXG4gICAgICAgICAqIHRoZSBoYW5kbGVyLiBJdCBhbGxvd3MgdGhlIGBSZXNwb25zZWAgdG8gYmUgaW5zcGVjdGVkIGZvciBmcmVzaG5lc3MgYW5kXG4gICAgICAgICAqIHByZXZlbnRzIGl0IGZyb20gYmVpbmcgdXNlZCBpZiB0aGUgYFJlc3BvbnNlYCdzIGBEYXRlYCBoZWFkZXIgdmFsdWUgaXNcbiAgICAgICAgICogb2xkZXIgdGhhbiB0aGUgY29uZmlndXJlZCBgbWF4QWdlU2Vjb25kc2AuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNhY2hlTmFtZSBOYW1lIG9mIHRoZSBjYWNoZSB0aGUgcmVzcG9uc2UgaXMgaW4uXG4gICAgICAgICAqIEBwYXJhbSB7UmVzcG9uc2V9IG9wdGlvbnMuY2FjaGVkUmVzcG9uc2UgVGhlIGBSZXNwb25zZWAgb2JqZWN0IHRoYXQncyBiZWVuXG4gICAgICAgICAqICAgICByZWFkIGZyb20gYSBjYWNoZSBhbmQgd2hvc2UgZnJlc2huZXNzIHNob3VsZCBiZSBjaGVja2VkLlxuICAgICAgICAgKiBAcmV0dXJuIHtSZXNwb25zZX0gRWl0aGVyIHRoZSBgY2FjaGVkUmVzcG9uc2VgLCBpZiBpdCdzXG4gICAgICAgICAqICAgICBmcmVzaCwgb3IgYG51bGxgIGlmIHRoZSBgUmVzcG9uc2VgIGlzIG9sZGVyIHRoYW4gYG1heEFnZVNlY29uZHNgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jYWNoZWRSZXNwb25zZVdpbGxCZVVzZWQgPSBhc3luYyAoeyBldmVudCwgcmVxdWVzdCwgY2FjaGVOYW1lLCBjYWNoZWRSZXNwb25zZSwgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjYWNoZWRSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXNGcmVzaCA9IHRoaXMuX2lzUmVzcG9uc2VEYXRlRnJlc2goY2FjaGVkUmVzcG9uc2UpO1xuICAgICAgICAgICAgLy8gRXhwaXJlIGVudHJpZXMgdG8gZW5zdXJlIHRoYXQgZXZlbiBpZiB0aGUgZXhwaXJhdGlvbiBkYXRlIGhhc1xuICAgICAgICAgICAgLy8gZXhwaXJlZCwgaXQnbGwgb25seSBiZSB1c2VkIG9uY2UuXG4gICAgICAgICAgICBjb25zdCBjYWNoZUV4cGlyYXRpb24gPSB0aGlzLl9nZXRDYWNoZUV4cGlyYXRpb24oY2FjaGVOYW1lKTtcbiAgICAgICAgICAgIGRvbnRXYWl0Rm9yKGNhY2hlRXhwaXJhdGlvbi5leHBpcmVFbnRyaWVzKCkpO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBtZXRhZGF0YSBmb3IgdGhlIHJlcXVlc3QgVVJMIHRvIHRoZSBjdXJyZW50IHRpbWVzdGFtcCxcbiAgICAgICAgICAgIC8vIGJ1dCBkb24ndCBgYXdhaXRgIGl0IGFzIHdlIGRvbid0IHdhbnQgdG8gYmxvY2sgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgY29uc3QgdXBkYXRlVGltZXN0YW1wRG9uZSA9IGNhY2hlRXhwaXJhdGlvbi51cGRhdGVUaW1lc3RhbXAocmVxdWVzdC51cmwpO1xuICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQud2FpdFVudGlsKHVwZGF0ZVRpbWVzdGFtcERvbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBldmVudCBtYXkgbm90IGJlIGEgZmV0Y2ggZXZlbnQ7IG9ubHkgbG9nIHRoZSBVUkwgaWYgaXQgaXMuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ3JlcXVlc3QnIGluIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oYFVuYWJsZSB0byBlbnN1cmUgc2VydmljZSB3b3JrZXIgc3RheXMgYWxpdmUgd2hlbiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHVwZGF0aW5nIGNhY2hlIGVudHJ5IGZvciBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKGV2ZW50LnJlcXVlc3QudXJsKX0nLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlzRnJlc2ggPyBjYWNoZWRSZXNwb25zZSA6IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIFwibGlmZWN5Y2xlXCIgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIHRyaWdnZXJlZCBhdXRvbWF0aWNhbGx5IGJ5IHRoZVxuICAgICAgICAgKiBgd29ya2JveC1zdHJhdGVnaWVzYCBoYW5kbGVycyB3aGVuIGFuIGVudHJ5IGlzIGFkZGVkIHRvIGEgY2FjaGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNhY2hlTmFtZSBOYW1lIG9mIHRoZSBjYWNoZSB0aGF0IHdhcyB1cGRhdGVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IFRoZSBSZXF1ZXN0IGZvciB0aGUgY2FjaGVkIGVudHJ5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jYWNoZURpZFVwZGF0ZSA9IGFzeW5jICh7IGNhY2hlTmFtZSwgcmVxdWVzdCwgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNUeXBlKGNhY2hlTmFtZSwgJ3N0cmluZycsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1BsdWdpbicsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY2FjaGVEaWRVcGRhdGUnLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdjYWNoZU5hbWUnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1BsdWdpbicsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY2FjaGVEaWRVcGRhdGUnLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyZXF1ZXN0JyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlRXhwaXJhdGlvbiA9IHRoaXMuX2dldENhY2hlRXhwaXJhdGlvbihjYWNoZU5hbWUpO1xuICAgICAgICAgICAgYXdhaXQgY2FjaGVFeHBpcmF0aW9uLnVwZGF0ZVRpbWVzdGFtcChyZXF1ZXN0LnVybCk7XG4gICAgICAgICAgICBhd2FpdCBjYWNoZUV4cGlyYXRpb24uZXhwaXJlRW50cmllcygpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKCEoY29uZmlnLm1heEVudHJpZXMgfHwgY29uZmlnLm1heEFnZVNlY29uZHMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbWF4LWVudHJpZXMtb3ItYWdlLXJlcXVpcmVkJywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLm1heEVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNUeXBlKGNvbmZpZy5tYXhFbnRyaWVzLCAnbnVtYmVyJywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5tYXhFbnRyaWVzJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWcubWF4QWdlU2Vjb25kcykge1xuICAgICAgICAgICAgICAgIGFzc2VydC5pc1R5cGUoY29uZmlnLm1heEFnZVNlY29uZHMsICdudW1iZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnY29uZmlnLm1heEFnZVNlY29uZHMnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5fbWF4QWdlU2Vjb25kcyA9IGNvbmZpZy5tYXhBZ2VTZWNvbmRzO1xuICAgICAgICB0aGlzLl9jYWNoZUV4cGlyYXRpb25zID0gbmV3IE1hcCgpO1xuICAgICAgICBpZiAoY29uZmlnLnB1cmdlT25RdW90YUVycm9yKSB7XG4gICAgICAgICAgICByZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjaygoKSA9PiB0aGlzLmRlbGV0ZUNhY2hlQW5kTWV0YWRhdGEoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBzaW1wbGUgaGVscGVyIG1ldGhvZCB0byByZXR1cm4gYSBDYWNoZUV4cGlyYXRpb24gaW5zdGFuY2UgZm9yIGEgZ2l2ZW5cbiAgICAgKiBjYWNoZSBuYW1lLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNhY2hlTmFtZVxuICAgICAqIEByZXR1cm4ge0NhY2hlRXhwaXJhdGlvbn1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2dldENhY2hlRXhwaXJhdGlvbihjYWNoZU5hbWUpIHtcbiAgICAgICAgaWYgKGNhY2hlTmFtZSA9PT0gY2FjaGVOYW1lcy5nZXRSdW50aW1lTmFtZSgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdleHBpcmUtY3VzdG9tLWNhY2hlcy1vbmx5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNhY2hlRXhwaXJhdGlvbiA9IHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMuZ2V0KGNhY2hlTmFtZSk7XG4gICAgICAgIGlmICghY2FjaGVFeHBpcmF0aW9uKSB7XG4gICAgICAgICAgICBjYWNoZUV4cGlyYXRpb24gPSBuZXcgQ2FjaGVFeHBpcmF0aW9uKGNhY2hlTmFtZSwgdGhpcy5fY29uZmlnKTtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMuc2V0KGNhY2hlTmFtZSwgY2FjaGVFeHBpcmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FjaGVFeHBpcmF0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSBjYWNoZWRSZXNwb25zZVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9pc1Jlc3BvbnNlRGF0ZUZyZXNoKGNhY2hlZFJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghdGhpcy5fbWF4QWdlU2Vjb25kcykge1xuICAgICAgICAgICAgLy8gV2UgYXJlbid0IGV4cGlyaW5nIGJ5IGFnZSwgc28gcmV0dXJuIHRydWUsIGl0J3MgZnJlc2hcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSAnZGF0ZScgaGVhZGVyIHdpbGwgc3VmZmljZSBhIHF1aWNrIGV4cGlyYXRpb24gY2hlY2suXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9zdy10b29sYm94L2lzc3Vlcy8xNjQgZm9yXG4gICAgICAgIC8vIGRpc2N1c3Npb24uXG4gICAgICAgIGNvbnN0IGRhdGVIZWFkZXJUaW1lc3RhbXAgPSB0aGlzLl9nZXREYXRlSGVhZGVyVGltZXN0YW1wKGNhY2hlZFJlc3BvbnNlKTtcbiAgICAgICAgaWYgKGRhdGVIZWFkZXJUaW1lc3RhbXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIFVuYWJsZSB0byBwYXJzZSBkYXRlLCBzbyBhc3N1bWUgaXQncyBmcmVzaC5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSB2YWxpZCBoZWFkZXJUaW1lLCB0aGVuIG91ciByZXNwb25zZSBpcyBmcmVzaCBpZmYgdGhlXG4gICAgICAgIC8vIGhlYWRlclRpbWUgcGx1cyBtYXhBZ2VTZWNvbmRzIGlzIGdyZWF0ZXIgdGhhbiB0aGUgY3VycmVudCB0aW1lLlxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm4gZGF0ZUhlYWRlclRpbWVzdGFtcCA+PSBub3cgLSB0aGlzLl9tYXhBZ2VTZWNvbmRzICogMTAwMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBleHRyYWN0IHRoZSBkYXRhIGhlYWRlciBhbmQgcGFyc2UgaXQgaW50byBhIHVzZWZ1bFxuICAgICAqIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZXNwb25zZX0gY2FjaGVkUmVzcG9uc2VcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ8bnVsbH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2dldERhdGVIZWFkZXJUaW1lc3RhbXAoY2FjaGVkUmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCFjYWNoZWRSZXNwb25zZS5oZWFkZXJzLmhhcygnZGF0ZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRlSGVhZGVyID0gY2FjaGVkUmVzcG9uc2UuaGVhZGVycy5nZXQoJ2RhdGUnKTtcbiAgICAgICAgY29uc3QgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKGRhdGVIZWFkZXIpO1xuICAgICAgICBjb25zdCBoZWFkZXJUaW1lID0gcGFyc2VkRGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgIC8vIElmIHRoZSBEYXRlIGhlYWRlciB3YXMgaW52YWxpZCBmb3Igc29tZSByZWFzb24sIHBhcnNlZERhdGUuZ2V0VGltZSgpXG4gICAgICAgIC8vIHdpbGwgcmV0dXJuIE5hTi5cbiAgICAgICAgaWYgKGlzTmFOKGhlYWRlclRpbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGVhZGVyVGltZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBhIGhlbHBlciBtZXRob2QgdGhhdCBwZXJmb3JtcyB0d28gb3BlcmF0aW9uczpcbiAgICAgKlxuICAgICAqIC0gRGVsZXRlcyAqYWxsKiB0aGUgdW5kZXJseWluZyBDYWNoZSBpbnN0YW5jZXMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgcGx1Z2luXG4gICAgICogaW5zdGFuY2UsIGJ5IGNhbGxpbmcgY2FjaGVzLmRlbGV0ZSgpIG9uIHlvdXIgYmVoYWxmLlxuICAgICAqIC0gRGVsZXRlcyB0aGUgbWV0YWRhdGEgZnJvbSBJbmRleGVkREIgdXNlZCB0byBrZWVwIHRyYWNrIG9mIGV4cGlyYXRpb25cbiAgICAgKiBkZXRhaWxzIGZvciBlYWNoIENhY2hlIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogV2hlbiB1c2luZyBjYWNoZSBleHBpcmF0aW9uLCBjYWxsaW5nIHRoaXMgbWV0aG9kIGlzIHByZWZlcmFibGUgdG8gY2FsbGluZ1xuICAgICAqIGBjYWNoZXMuZGVsZXRlKClgIGRpcmVjdGx5LCBzaW5jZSB0aGlzIHdpbGwgZW5zdXJlIHRoYXQgdGhlIEluZGV4ZWREQlxuICAgICAqIG1ldGFkYXRhIGlzIGFsc28gY2xlYW5seSByZW1vdmVkIGFuZCBvcGVuIEluZGV4ZWREQiBpbnN0YW5jZXMgYXJlIGRlbGV0ZWQuXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgaWYgeW91J3JlICpub3QqIHVzaW5nIGNhY2hlIGV4cGlyYXRpb24gZm9yIGEgZ2l2ZW4gY2FjaGUsIGNhbGxpbmdcbiAgICAgKiBgY2FjaGVzLmRlbGV0ZSgpYCBhbmQgcGFzc2luZyBpbiB0aGUgY2FjaGUncyBuYW1lIHNob3VsZCBiZSBzdWZmaWNpZW50LlxuICAgICAqIFRoZXJlIGlzIG5vIFdvcmtib3gtc3BlY2lmaWMgbWV0aG9kIG5lZWRlZCBmb3IgY2xlYW51cCBpbiB0aGF0IGNhc2UuXG4gICAgICovXG4gICAgYXN5bmMgZGVsZXRlQ2FjaGVBbmRNZXRhZGF0YSgpIHtcbiAgICAgICAgLy8gRG8gdGhpcyBvbmUgYXQgYSB0aW1lIGluc3RlYWQgb2YgYWxsIGF0IG9uY2UgdmlhIGBQcm9taXNlLmFsbCgpYCB0b1xuICAgICAgICAvLyByZWR1Y2UgdGhlIGNoYW5jZSBvZiBpbmNvbnNpc3RlbmN5IGlmIGEgcHJvbWlzZSByZWplY3RzLlxuICAgICAgICBmb3IgKGNvbnN0IFtjYWNoZU5hbWUsIGNhY2hlRXhwaXJhdGlvbl0gb2YgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucykge1xuICAgICAgICAgICAgYXdhaXQgc2VsZi5jYWNoZXMuZGVsZXRlKGNhY2hlTmFtZSk7XG4gICAgICAgICAgICBhd2FpdCBjYWNoZUV4cGlyYXRpb24uZGVsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzZXQgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucyB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cbiAgICAgICAgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICB9XG59XG5leHBvcnQgeyBFeHBpcmF0aW9uUGx1Z2luIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIEB0cy1pZ25vcmVcbnRyeSB7XG4gICAgc2VsZlsnd29ya2JveDpleHBpcmF0aW9uOjYuNS4zJ10gJiYgXygpO1xufVxuY2F0Y2ggKGUpIHsgfVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgQ2FjaGVFeHBpcmF0aW9uIH0gZnJvbSAnLi9DYWNoZUV4cGlyYXRpb24uanMnO1xuaW1wb3J0IHsgRXhwaXJhdGlvblBsdWdpbiB9IGZyb20gJy4vRXhwaXJhdGlvblBsdWdpbi5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBAbW9kdWxlIHdvcmtib3gtZXhwaXJhdGlvblxuICovXG5leHBvcnQgeyBDYWNoZUV4cGlyYXRpb24sIEV4cGlyYXRpb25QbHVnaW4gfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IG9wZW5EQiwgZGVsZXRlREIgfSBmcm9tICdpZGInO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBEQl9OQU1FID0gJ3dvcmtib3gtZXhwaXJhdGlvbic7XG5jb25zdCBDQUNIRV9PQkpFQ1RfU1RPUkUgPSAnY2FjaGUtZW50cmllcyc7XG5jb25zdCBub3JtYWxpemVVUkwgPSAodW5Ob3JtYWxpemVkVXJsKSA9PiB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCh1bk5vcm1hbGl6ZWRVcmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgIHVybC5oYXNoID0gJyc7XG4gICAgcmV0dXJuIHVybC5ocmVmO1xufTtcbi8qKlxuICogUmV0dXJucyB0aGUgdGltZXN0YW1wIG1vZGVsLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIENhY2hlVGltZXN0YW1wc01vZGVsIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYWNoZU5hbWVcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2FjaGVOYW1lKSB7XG4gICAgICAgIHRoaXMuX2RiID0gbnVsbDtcbiAgICAgICAgdGhpcy5fY2FjaGVOYW1lID0gY2FjaGVOYW1lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhbiB1cGdyYWRlIG9mIGluZGV4ZWREQi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SURCUERhdGFiYXNlPENhY2hlRGJTY2hlbWE+fSBkYlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfdXBncmFkZURiKGRiKSB7XG4gICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogRWRnZUhUTUwgZG9lc24ndCBzdXBwb3J0IGFycmF5cyBhcyBhIGtleVBhdGgsIHNvIHdlXG4gICAgICAgIC8vIGhhdmUgdG8gdXNlIHRoZSBgaWRgIGtleVBhdGggaGVyZSBhbmQgY3JlYXRlIG91ciBvd24gdmFsdWVzIChhXG4gICAgICAgIC8vIGNvbmNhdGVuYXRpb24gb2YgYHVybCArIGNhY2hlTmFtZWApIGluc3RlYWQgb2Ygc2ltcGx5IHVzaW5nXG4gICAgICAgIC8vIGBrZXlQYXRoOiBbJ3VybCcsICdjYWNoZU5hbWUnXWAsIHdoaWNoIGlzIHN1cHBvcnRlZCBpbiBvdGhlciBicm93c2Vycy5cbiAgICAgICAgY29uc3Qgb2JqU3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShDQUNIRV9PQkpFQ1RfU1RPUkUsIHsga2V5UGF0aDogJ2lkJyB9KTtcbiAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBvbmNlIHdlIGRvbid0IGhhdmUgdG8gc3VwcG9ydCBFZGdlSFRNTCwgd2UgY2FuXG4gICAgICAgIC8vIGNyZWF0ZSBhIHNpbmdsZSBpbmRleCB3aXRoIHRoZSBrZXlQYXRoIGBbJ2NhY2hlTmFtZScsICd0aW1lc3RhbXAnXWBcbiAgICAgICAgLy8gaW5zdGVhZCBvZiBkb2luZyBib3RoIHRoZXNlIGluZGV4ZXMuXG4gICAgICAgIG9ialN0b3JlLmNyZWF0ZUluZGV4KCdjYWNoZU5hbWUnLCAnY2FjaGVOYW1lJywgeyB1bmlxdWU6IGZhbHNlIH0pO1xuICAgICAgICBvYmpTdG9yZS5jcmVhdGVJbmRleCgndGltZXN0YW1wJywgJ3RpbWVzdGFtcCcsIHsgdW5pcXVlOiBmYWxzZSB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYW4gdXBncmFkZSBvZiBpbmRleGVkREIgYW5kIGRlbGV0ZXMgZGVwcmVjYXRlZCBEQnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0lEQlBEYXRhYmFzZTxDYWNoZURiU2NoZW1hPn0gZGJcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3VwZ3JhZGVEYkFuZERlbGV0ZU9sZERicyhkYikge1xuICAgICAgICB0aGlzLl91cGdyYWRlRGIoZGIpO1xuICAgICAgICBpZiAodGhpcy5fY2FjaGVOYW1lKSB7XG4gICAgICAgICAgICB2b2lkIGRlbGV0ZURCKHRoaXMuX2NhY2hlTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lc3RhbXBcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgc2V0VGltZXN0YW1wKHVybCwgdGltZXN0YW1wKSB7XG4gICAgICAgIHVybCA9IG5vcm1hbGl6ZVVSTCh1cmwpO1xuICAgICAgICBjb25zdCBlbnRyeSA9IHtcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgIGNhY2hlTmFtZTogdGhpcy5fY2FjaGVOYW1lLFxuICAgICAgICAgICAgLy8gQ3JlYXRpbmcgYW4gSUQgZnJvbSB0aGUgVVJMIGFuZCBjYWNoZSBuYW1lIHdvbid0IGJlIG5lY2Vzc2FyeSBvbmNlXG4gICAgICAgICAgICAvLyBFZGdlIHN3aXRjaGVzIHRvIENocm9taXVtIGFuZCBhbGwgYnJvd3NlcnMgd2Ugc3VwcG9ydCB3b3JrIHdpdGhcbiAgICAgICAgICAgIC8vIGFycmF5IGtleVBhdGhzLlxuICAgICAgICAgICAgaWQ6IHRoaXMuX2dldElkKHVybCksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGRiID0gYXdhaXQgdGhpcy5nZXREYigpO1xuICAgICAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKENBQ0hFX09CSkVDVF9TVE9SRSwgJ3JlYWR3cml0ZScsIHtcbiAgICAgICAgICAgIGR1cmFiaWxpdHk6ICdyZWxheGVkJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHR4LnN0b3JlLnB1dChlbnRyeSk7XG4gICAgICAgIGF3YWl0IHR4LmRvbmU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRpbWVzdGFtcCBzdG9yZWQgZm9yIGEgZ2l2ZW4gVVJMLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge251bWJlciB8IHVuZGVmaW5lZH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgZ2V0VGltZXN0YW1wKHVybCkge1xuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IHRoaXMuZ2V0RGIoKTtcbiAgICAgICAgY29uc3QgZW50cnkgPSBhd2FpdCBkYi5nZXQoQ0FDSEVfT0JKRUNUX1NUT1JFLCB0aGlzLl9nZXRJZCh1cmwpKTtcbiAgICAgICAgcmV0dXJuIGVudHJ5ID09PSBudWxsIHx8IGVudHJ5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbnRyeS50aW1lc3RhbXA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEl0ZXJhdGVzIHRocm91Z2ggYWxsIHRoZSBlbnRyaWVzIGluIHRoZSBvYmplY3Qgc3RvcmUgKGZyb20gbmV3ZXN0IHRvXG4gICAgICogb2xkZXN0KSBhbmQgcmVtb3ZlcyBlbnRyaWVzIG9uY2UgZWl0aGVyIGBtYXhDb3VudGAgaXMgcmVhY2hlZCBvciB0aGVcbiAgICAgKiBlbnRyeSdzIHRpbWVzdGFtcCBpcyBsZXNzIHRoYW4gYG1pblRpbWVzdGFtcGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluVGltZXN0YW1wXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heENvdW50XG4gICAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgZXhwaXJlRW50cmllcyhtaW5UaW1lc3RhbXAsIG1heENvdW50KSB7XG4gICAgICAgIGNvbnN0IGRiID0gYXdhaXQgdGhpcy5nZXREYigpO1xuICAgICAgICBsZXQgY3Vyc29yID0gYXdhaXQgZGJcbiAgICAgICAgICAgIC50cmFuc2FjdGlvbihDQUNIRV9PQkpFQ1RfU1RPUkUpXG4gICAgICAgICAgICAuc3RvcmUuaW5kZXgoJ3RpbWVzdGFtcCcpXG4gICAgICAgICAgICAub3BlbkN1cnNvcihudWxsLCAncHJldicpO1xuICAgICAgICBjb25zdCBlbnRyaWVzVG9EZWxldGUgPSBbXTtcbiAgICAgICAgbGV0IGVudHJpZXNOb3REZWxldGVkQ291bnQgPSAwO1xuICAgICAgICB3aGlsZSAoY3Vyc29yKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjdXJzb3IudmFsdWU7XG4gICAgICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IG9uY2Ugd2UgY2FuIHVzZSBhIG11bHRpLWtleSBpbmRleCwgd2VcbiAgICAgICAgICAgIC8vIHdvbid0IGhhdmUgdG8gY2hlY2sgYGNhY2hlTmFtZWAgaGVyZS5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuY2FjaGVOYW1lID09PSB0aGlzLl9jYWNoZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBEZWxldGUgYW4gZW50cnkgaWYgaXQncyBvbGRlciB0aGFuIHRoZSBtYXggYWdlIG9yXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYWxyZWFkeSBoYXZlIHRoZSBtYXggbnVtYmVyIGFsbG93ZWQuXG4gICAgICAgICAgICAgICAgaWYgKChtaW5UaW1lc3RhbXAgJiYgcmVzdWx0LnRpbWVzdGFtcCA8IG1pblRpbWVzdGFtcCkgfHxcbiAgICAgICAgICAgICAgICAgICAgKG1heENvdW50ICYmIGVudHJpZXNOb3REZWxldGVkQ291bnQgPj0gbWF4Q291bnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogd2Ugc2hvdWxkIGJlIGFibGUgdG8gZGVsZXRlIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBlbnRyeSByaWdodCBoZXJlLCBidXQgZG9pbmcgc28gY2F1c2VzIGFuIGl0ZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyBidWcgaW4gU2FmYXJpIHN0YWJsZSAoZml4ZWQgaW4gVFApLiBJbnN0ZWFkIHdlIGNhblxuICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUga2V5cyBvZiB0aGUgZW50cmllcyB0byBkZWxldGUsIGFuZCB0aGVuXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgc2VwYXJhdGUgdHJhbnNhY3Rpb25zLlxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE5NzhcbiAgICAgICAgICAgICAgICAgICAgLy8gY3Vyc29yLmRlbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBvbmx5IG5lZWQgdG8gcmV0dXJuIHRoZSBVUkwsIG5vdCB0aGUgd2hvbGUgZW50cnkuXG4gICAgICAgICAgICAgICAgICAgIGVudHJpZXNUb0RlbGV0ZS5wdXNoKGN1cnNvci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbnRyaWVzTm90RGVsZXRlZENvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3Vyc29yID0gYXdhaXQgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBvbmNlIHRoZSBTYWZhcmkgYnVnIGluIHRoZSBmb2xsb3dpbmcgaXNzdWUgaXMgZml4ZWQsXG4gICAgICAgIC8vIHdlIHNob3VsZCBiZSBhYmxlIHRvIHJlbW92ZSB0aGlzIGxvb3AgYW5kIGRvIHRoZSBlbnRyeSBkZWxldGlvbiBpbiB0aGVcbiAgICAgICAgLy8gY3Vyc29yIGxvb3AgYWJvdmU6XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTk3OFxuICAgICAgICBjb25zdCB1cmxzRGVsZXRlZCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXNUb0RlbGV0ZSkge1xuICAgICAgICAgICAgYXdhaXQgZGIuZGVsZXRlKENBQ0hFX09CSkVDVF9TVE9SRSwgZW50cnkuaWQpO1xuICAgICAgICAgICAgdXJsc0RlbGV0ZWQucHVzaChlbnRyeS51cmwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmxzRGVsZXRlZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGFrZXMgYSBVUkwgYW5kIHJldHVybnMgYW4gSUQgdGhhdCB3aWxsIGJlIHVuaXF1ZSBpbiB0aGUgb2JqZWN0IHN0b3JlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2dldElkKHVybCkge1xuICAgICAgICAvLyBDcmVhdGluZyBhbiBJRCBmcm9tIHRoZSBVUkwgYW5kIGNhY2hlIG5hbWUgd29uJ3QgYmUgbmVjZXNzYXJ5IG9uY2VcbiAgICAgICAgLy8gRWRnZSBzd2l0Y2hlcyB0byBDaHJvbWl1bSBhbmQgYWxsIGJyb3dzZXJzIHdlIHN1cHBvcnQgd29yayB3aXRoXG4gICAgICAgIC8vIGFycmF5IGtleVBhdGhzLlxuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVOYW1lICsgJ3wnICsgbm9ybWFsaXplVVJMKHVybCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb3BlbiBjb25uZWN0aW9uIHRvIHRoZSBkYXRhYmFzZS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgZ2V0RGIoKSB7XG4gICAgICAgIGlmICghdGhpcy5fZGIpIHtcbiAgICAgICAgICAgIHRoaXMuX2RiID0gYXdhaXQgb3BlbkRCKERCX05BTUUsIDEsIHtcbiAgICAgICAgICAgICAgICB1cGdyYWRlOiB0aGlzLl91cGdyYWRlRGJBbmREZWxldGVPbGREYnMuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kYjtcbiAgICB9XG59XG5leHBvcnQgeyBDYWNoZVRpbWVzdGFtcHNNb2RlbCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IHdhaXRVbnRpbCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS93YWl0VW50aWwuanMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FjaGVLZXkgfSBmcm9tICcuL3V0aWxzL2NyZWF0ZUNhY2hlS2V5LmpzJztcbmltcG9ydCB7IFByZWNhY2hlSW5zdGFsbFJlcG9ydFBsdWdpbiB9IGZyb20gJy4vdXRpbHMvUHJlY2FjaGVJbnN0YWxsUmVwb3J0UGx1Z2luLmpzJztcbmltcG9ydCB7IFByZWNhY2hlQ2FjaGVLZXlQbHVnaW4gfSBmcm9tICcuL3V0aWxzL1ByZWNhY2hlQ2FjaGVLZXlQbHVnaW4uanMnO1xuaW1wb3J0IHsgcHJpbnRDbGVhbnVwRGV0YWlscyB9IGZyb20gJy4vdXRpbHMvcHJpbnRDbGVhbnVwRGV0YWlscy5qcyc7XG5pbXBvcnQgeyBwcmludEluc3RhbGxEZXRhaWxzIH0gZnJvbSAnLi91dGlscy9wcmludEluc3RhbGxEZXRhaWxzLmpzJztcbmltcG9ydCB7IFByZWNhY2hlU3RyYXRlZ3kgfSBmcm9tICcuL1ByZWNhY2hlU3RyYXRlZ3kuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogUGVyZm9ybXMgZWZmaWNpZW50IHByZWNhY2hpbmcgb2YgYXNzZXRzLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuY2xhc3MgUHJlY2FjaGVDb250cm9sbGVyIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgUHJlY2FjaGVDb250cm9sbGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYWNoZU5hbWVdIFRoZSBjYWNoZSB0byB1c2UgZm9yIHByZWNhY2hpbmcuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnBsdWdpbnNdIFBsdWdpbnMgdG8gdXNlIHdoZW4gcHJlY2FjaGluZyBhcyB3ZWxsXG4gICAgICogYXMgcmVzcG9uZGluZyB0byBmZXRjaCBldmVudHMgZm9yIHByZWNhY2hlZCBhc3NldHMuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5mYWxsYmFja1RvTmV0d29yaz10cnVlXSBXaGV0aGVyIHRvIGF0dGVtcHQgdG9cbiAgICAgKiBnZXQgdGhlIHJlc3BvbnNlIGZyb20gdGhlIG5ldHdvcmsgaWYgdGhlcmUncyBhIHByZWNhY2hlIG1pc3MuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeyBjYWNoZU5hbWUsIHBsdWdpbnMgPSBbXSwgZmFsbGJhY2tUb05ldHdvcmsgPSB0cnVlLCB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVLZXlzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl91cmxzVG9DYWNoZU1vZGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9jYWNoZUtleXNUb0ludGVncml0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9zdHJhdGVneSA9IG5ldyBQcmVjYWNoZVN0cmF0ZWd5KHtcbiAgICAgICAgICAgIGNhY2hlTmFtZTogY2FjaGVOYW1lcy5nZXRQcmVjYWNoZU5hbWUoY2FjaGVOYW1lKSxcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAuLi5wbHVnaW5zLFxuICAgICAgICAgICAgICAgIG5ldyBQcmVjYWNoZUNhY2hlS2V5UGx1Z2luKHsgcHJlY2FjaGVDb250cm9sbGVyOiB0aGlzIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZhbGxiYWNrVG9OZXR3b3JrLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQmluZCB0aGUgaW5zdGFsbCBhbmQgYWN0aXZhdGUgbWV0aG9kcyB0byB0aGUgaW5zdGFuY2UuXG4gICAgICAgIHRoaXMuaW5zdGFsbCA9IHRoaXMuaW5zdGFsbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlID0gdGhpcy5hY3RpdmF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7d29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlU3RyYXRlZ3l9IFRoZSBzdHJhdGVneSBjcmVhdGVkIGJ5IHRoaXMgY29udHJvbGxlciBhbmRcbiAgICAgKiB1c2VkIHRvIGNhY2hlIGFzc2V0cyBhbmQgcmVzcG9uZCB0byBmZXRjaCBldmVudHMuXG4gICAgICovXG4gICAgZ2V0IHN0cmF0ZWd5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RyYXRlZ3k7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgaXRlbXMgdG8gdGhlIHByZWNhY2hlIGxpc3QsIHJlbW92aW5nIGFueSBkdXBsaWNhdGVzIGFuZFxuICAgICAqIHN0b3JlcyB0aGUgZmlsZXMgaW4gdGhlXG4gICAgICoge0BsaW5rIHdvcmtib3gtY29yZS5jYWNoZU5hbWVzfFwicHJlY2FjaGUgY2FjaGVcIn0gd2hlbiB0aGUgc2VydmljZVxuICAgICAqIHdvcmtlciBpbnN0YWxscy5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdHxzdHJpbmc+fSBbZW50cmllcz1bXV0gQXJyYXkgb2YgZW50cmllcyB0byBwcmVjYWNoZS5cbiAgICAgKi9cbiAgICBwcmVjYWNoZShlbnRyaWVzKSB7XG4gICAgICAgIHRoaXMuYWRkVG9DYWNoZUxpc3QoZW50cmllcyk7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFsbEFuZEFjdGl2ZUxpc3RlbmVyc0FkZGVkKSB7XG4gICAgICAgICAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCB0aGlzLmluc3RhbGwpO1xuICAgICAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIHRoaXMuYWN0aXZhdGUpO1xuICAgICAgICAgICAgdGhpcy5faW5zdGFsbEFuZEFjdGl2ZUxpc3RlbmVyc0FkZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIGFkZCBpdGVtcyB0byB0aGUgcHJlY2FjaGUgbGlzdCwgcmVtb3ZpbmcgZHVwbGljYXRlc1xuICAgICAqIGFuZCBlbnN1cmluZyB0aGUgaW5mb3JtYXRpb24gaXMgdmFsaWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5PHdvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXIuUHJlY2FjaGVFbnRyeXxzdHJpbmc+fSBlbnRyaWVzXG4gICAgICogICAgIEFycmF5IG9mIGVudHJpZXMgdG8gcHJlY2FjaGUuXG4gICAgICovXG4gICAgYWRkVG9DYWNoZUxpc3QoZW50cmllcykge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzQXJyYXkoZW50cmllcywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXByZWNhY2hpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1ByZWNhY2hlQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdhZGRUb0NhY2hlTGlzdCcsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnZW50cmllcycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1cmxzVG9XYXJuQWJvdXQgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yMjU5XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHVybHNUb1dhcm5BYm91dC5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVudHJ5ICYmIGVudHJ5LnJldmlzaW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB1cmxzVG9XYXJuQWJvdXQucHVzaChlbnRyeS51cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBjYWNoZUtleSwgdXJsIH0gPSBjcmVhdGVDYWNoZUtleShlbnRyeSk7XG4gICAgICAgICAgICBjb25zdCBjYWNoZU1vZGUgPSB0eXBlb2YgZW50cnkgIT09ICdzdHJpbmcnICYmIGVudHJ5LnJldmlzaW9uID8gJ3JlbG9hZCcgOiAnZGVmYXVsdCc7XG4gICAgICAgICAgICBpZiAodGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmhhcyh1cmwpICYmXG4gICAgICAgICAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmdldCh1cmwpICE9PSBjYWNoZUtleSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2FkZC10by1jYWNoZS1saXN0LWNvbmZsaWN0aW5nLWVudHJpZXMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0RW50cnk6IHRoaXMuX3VybHNUb0NhY2hlS2V5cy5nZXQodXJsKSxcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kRW50cnk6IGNhY2hlS2V5LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gJ3N0cmluZycgJiYgZW50cnkuaW50ZWdyaXR5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlS2V5c1RvSW50ZWdyaXRpZXMuaGFzKGNhY2hlS2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleXNUb0ludGVncml0aWVzLmdldChjYWNoZUtleSkgIT09IGVudHJ5LmludGVncml0eSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdhZGQtdG8tY2FjaGUtbGlzdC1jb25mbGljdGluZy1pbnRlZ3JpdGllcycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5c1RvSW50ZWdyaXRpZXMuc2V0KGNhY2hlS2V5LCBlbnRyeS5pbnRlZ3JpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVLZXlzLnNldCh1cmwsIGNhY2hlS2V5KTtcbiAgICAgICAgICAgIHRoaXMuX3VybHNUb0NhY2hlTW9kZXMuc2V0KHVybCwgY2FjaGVNb2RlKTtcbiAgICAgICAgICAgIGlmICh1cmxzVG9XYXJuQWJvdXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhcm5pbmdNZXNzYWdlID0gYFdvcmtib3ggaXMgcHJlY2FjaGluZyBVUkxzIHdpdGhvdXQgcmV2aXNpb24gYCArXG4gICAgICAgICAgICAgICAgICAgIGBpbmZvOiAke3VybHNUb1dhcm5BYm91dC5qb2luKCcsICcpfVxcblRoaXMgaXMgZ2VuZXJhbGx5IE5PVCBzYWZlLiBgICtcbiAgICAgICAgICAgICAgICAgICAgYExlYXJuIG1vcmUgYXQgaHR0cHM6Ly9iaXQubHkvd2ItcHJlY2FjaGVgO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSBjb25zb2xlIGRpcmVjdGx5IHRvIGRpc3BsYXkgdGhpcyB3YXJuaW5nIHdpdGhvdXQgYmxvYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gYnVuZGxlIHNpemVzIGJ5IHB1bGxpbmcgaW4gYWxsIG9mIHRoZSBsb2dnZXIgY29kZWJhc2UgaW4gcHJvZC5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlY2FjaGVzIG5ldyBhbmQgdXBkYXRlZCBhc3NldHMuIENhbGwgdGhpcyBtZXRob2QgZnJvbSB0aGUgc2VydmljZSB3b3JrZXJcbiAgICAgKiBpbnN0YWxsIGV2ZW50LlxuICAgICAqXG4gICAgICogTm90ZTogdGhpcyBtZXRob2QgY2FsbHMgYGV2ZW50LndhaXRVbnRpbCgpYCBmb3IgeW91LCBzbyB5b3UgZG8gbm90IG5lZWRcbiAgICAgKiB0byBjYWxsIGl0IHlvdXJzZWxmIGluIHlvdXIgZXZlbnQgaGFuZGxlcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHdvcmtib3gtcHJlY2FjaGluZy5JbnN0YWxsUmVzdWx0Pn1cbiAgICAgKi9cbiAgICBpbnN0YWxsKGV2ZW50KSB7XG4gICAgICAgIC8vIHdhaXRVbnRpbCByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cbiAgICAgICAgcmV0dXJuIHdhaXRVbnRpbChldmVudCwgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5zdGFsbFJlcG9ydFBsdWdpbiA9IG5ldyBQcmVjYWNoZUluc3RhbGxSZXBvcnRQbHVnaW4oKTtcbiAgICAgICAgICAgIHRoaXMuc3RyYXRlZ3kucGx1Z2lucy5wdXNoKGluc3RhbGxSZXBvcnRQbHVnaW4pO1xuICAgICAgICAgICAgLy8gQ2FjaGUgZW50cmllcyBvbmUgYXQgYSB0aW1lLlxuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjUyOFxuICAgICAgICAgICAgZm9yIChjb25zdCBbdXJsLCBjYWNoZUtleV0gb2YgdGhpcy5fdXJsc1RvQ2FjaGVLZXlzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW50ZWdyaXR5ID0gdGhpcy5fY2FjaGVLZXlzVG9JbnRlZ3JpdGllcy5nZXQoY2FjaGVLZXkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlTW9kZSA9IHRoaXMuX3VybHNUb0NhY2hlTW9kZXMuZ2V0KHVybCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCwge1xuICAgICAgICAgICAgICAgICAgICBpbnRlZ3JpdHksXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlOiBjYWNoZU1vZGUsXG4gICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRoaXMuc3RyYXRlZ3kuaGFuZGxlQWxsKHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGNhY2hlS2V5IH0sXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXBkYXRlZFVSTHMsIG5vdFVwZGF0ZWRVUkxzIH0gPSBpbnN0YWxsUmVwb3J0UGx1Z2luO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBwcmludEluc3RhbGxEZXRhaWxzKHVwZGF0ZWRVUkxzLCBub3RVcGRhdGVkVVJMcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyB1cGRhdGVkVVJMcywgbm90VXBkYXRlZFVSTHMgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYXNzZXRzIHRoYXQgYXJlIG5vIGxvbmdlciBwcmVzZW50IGluIHRoZSBjdXJyZW50IHByZWNhY2hlIG1hbmlmZXN0LlxuICAgICAqIENhbGwgdGhpcyBtZXRob2QgZnJvbSB0aGUgc2VydmljZSB3b3JrZXIgYWN0aXZhdGUgZXZlbnQuXG4gICAgICpcbiAgICAgKiBOb3RlOiB0aGlzIG1ldGhvZCBjYWxscyBgZXZlbnQud2FpdFVudGlsKClgIGZvciB5b3UsIHNvIHlvdSBkbyBub3QgbmVlZFxuICAgICAqIHRvIGNhbGwgaXQgeW91cnNlbGYgaW4geW91ciBldmVudCBoYW5kbGVycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBldmVudFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8d29ya2JveC1wcmVjYWNoaW5nLkNsZWFudXBSZXN1bHQ+fVxuICAgICAqL1xuICAgIGFjdGl2YXRlKGV2ZW50KSB7XG4gICAgICAgIC8vIHdhaXRVbnRpbCByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cbiAgICAgICAgcmV0dXJuIHdhaXRVbnRpbChldmVudCwgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FjaGUgPSBhd2FpdCBzZWxmLmNhY2hlcy5vcGVuKHRoaXMuc3RyYXRlZ3kuY2FjaGVOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRseUNhY2hlZFJlcXVlc3RzID0gYXdhaXQgY2FjaGUua2V5cygpO1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRDYWNoZUtleXMgPSBuZXcgU2V0KHRoaXMuX3VybHNUb0NhY2hlS2V5cy52YWx1ZXMoKSk7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVkVVJMcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCByZXF1ZXN0IG9mIGN1cnJlbnRseUNhY2hlZFJlcXVlc3RzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFleHBlY3RlZENhY2hlS2V5cy5oYXMocmVxdWVzdC51cmwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGNhY2hlLmRlbGV0ZShyZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlZFVSTHMucHVzaChyZXF1ZXN0LnVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBwcmludENsZWFudXBEZXRhaWxzKGRlbGV0ZWRVUkxzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGRlbGV0ZWRVUkxzIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbWFwcGluZyBvZiBhIHByZWNhY2hlZCBVUkwgdG8gdGhlIGNvcnJlc3BvbmRpbmcgY2FjaGUga2V5LCB0YWtpbmdcbiAgICAgKiBpbnRvIGFjY291bnQgdGhlIHJldmlzaW9uIGluZm9ybWF0aW9uIGZvciB0aGUgVVJMLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TWFwPHN0cmluZywgc3RyaW5nPn0gQSBVUkwgdG8gY2FjaGUga2V5IG1hcHBpbmcuXG4gICAgICovXG4gICAgZ2V0VVJMc1RvQ2FjaGVLZXlzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXJsc1RvQ2FjaGVLZXlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBhbGwgdGhlIFVSTHMgdGhhdCBoYXZlIGJlZW4gcHJlY2FjaGVkIGJ5IHRoZSBjdXJyZW50XG4gICAgICogc2VydmljZSB3b3JrZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fSBUaGUgcHJlY2FjaGVkIFVSTHMuXG4gICAgICovXG4gICAgZ2V0Q2FjaGVkVVJMcygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLl91cmxzVG9DYWNoZUtleXMua2V5cygpXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2FjaGUga2V5IHVzZWQgZm9yIHN0b3JpbmcgYSBnaXZlbiBVUkwuIElmIHRoYXQgVVJMIGlzXG4gICAgICogdW52ZXJzaW9uZWQsIGxpa2UgYC9pbmRleC5odG1sJywgdGhlbiB0aGUgY2FjaGUga2V5IHdpbGwgYmUgdGhlIG9yaWdpbmFsXG4gICAgICogVVJMIHdpdGggYSBzZWFyY2ggcGFyYW1ldGVyIGFwcGVuZGVkIHRvIGl0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBBIFVSTCB3aG9zZSBjYWNoZSBrZXkgeW91IHdhbnQgdG8gbG9vayB1cC5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSB2ZXJzaW9uZWQgVVJMIHRoYXQgY29ycmVzcG9uZHMgdG8gYSBjYWNoZSBrZXlcbiAgICAgKiBmb3IgdGhlIG9yaWdpbmFsIFVSTCwgb3IgdW5kZWZpbmVkIGlmIHRoYXQgVVJMIGlzbid0IHByZWNhY2hlZC5cbiAgICAgKi9cbiAgICBnZXRDYWNoZUtleUZvclVSTCh1cmwpIHtcbiAgICAgICAgY29uc3QgdXJsT2JqZWN0ID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmdldCh1cmxPYmplY3QuaHJlZik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgQSBjYWNoZSBrZXkgd2hvc2UgU1JJIHlvdSB3YW50IHRvIGxvb2sgdXAuXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgc3VicmVzb3VyY2UgaW50ZWdyaXR5IGFzc29jaWF0ZWQgd2l0aCB0aGUgY2FjaGUga2V5LFxuICAgICAqIG9yIHVuZGVmaW5lZCBpZiBpdCdzIG5vdCBzZXQuXG4gICAgICovXG4gICAgZ2V0SW50ZWdyaXR5Rm9yQ2FjaGVLZXkoY2FjaGVLZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlS2V5c1RvSW50ZWdyaXRpZXMuZ2V0KGNhY2hlS2V5KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBhY3RzIGFzIGEgZHJvcC1pbiByZXBsYWNlbWVudCBmb3JcbiAgICAgKiBbYGNhY2hlLm1hdGNoKClgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FjaGUvbWF0Y2gpXG4gICAgICogd2l0aCB0aGUgZm9sbG93aW5nIGRpZmZlcmVuY2VzOlxuICAgICAqXG4gICAgICogLSBJdCBrbm93cyB3aGF0IHRoZSBuYW1lIG9mIHRoZSBwcmVjYWNoZSBpcywgYW5kIG9ubHkgY2hlY2tzIGluIHRoYXQgY2FjaGUuXG4gICAgICogLSBJdCBhbGxvd3MgeW91IHRvIHBhc3MgaW4gYW4gXCJvcmlnaW5hbFwiIFVSTCB3aXRob3V0IHZlcnNpb25pbmcgcGFyYW1ldGVycyxcbiAgICAgKiBhbmQgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGxvb2sgdXAgdGhlIGNvcnJlY3QgY2FjaGUga2V5IGZvciB0aGUgY3VycmVudGx5XG4gICAgICogYWN0aXZlIHJldmlzaW9uIG9mIHRoYXQgVVJMLlxuICAgICAqXG4gICAgICogRS5nLiwgYG1hdGNoUHJlY2FjaGUoJ2luZGV4Lmh0bWwnKWAgd2lsbCBmaW5kIHRoZSBjb3JyZWN0IHByZWNhY2hlZFxuICAgICAqIHJlc3BvbnNlIGZvciB0aGUgY3VycmVudGx5IGFjdGl2ZSBzZXJ2aWNlIHdvcmtlciwgZXZlbiBpZiB0aGUgYWN0dWFsIGNhY2hlXG4gICAgICoga2V5IGlzIGAnL2luZGV4Lmh0bWw/X19XQl9SRVZJU0lPTl9fPTEyMzRhYmNkJ2AuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xSZXF1ZXN0fSByZXF1ZXN0IFRoZSBrZXkgKHdpdGhvdXQgcmV2aXNpb25pbmcgcGFyYW1ldGVycylcbiAgICAgKiB0byBsb29rIHVwIGluIHRoZSBwcmVjYWNoZS5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlfHVuZGVmaW5lZD59XG4gICAgICovXG4gICAgYXN5bmMgbWF0Y2hQcmVjYWNoZShyZXF1ZXN0KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHJlcXVlc3QgaW5zdGFuY2VvZiBSZXF1ZXN0ID8gcmVxdWVzdC51cmwgOiByZXF1ZXN0O1xuICAgICAgICBjb25zdCBjYWNoZUtleSA9IHRoaXMuZ2V0Q2FjaGVLZXlGb3JVUkwodXJsKTtcbiAgICAgICAgaWYgKGNhY2hlS2V5KSB7XG4gICAgICAgICAgICBjb25zdCBjYWNoZSA9IGF3YWl0IHNlbGYuY2FjaGVzLm9wZW4odGhpcy5zdHJhdGVneS5jYWNoZU5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlLm1hdGNoKGNhY2hlS2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBsb29rcyB1cCBgdXJsYCBpbiB0aGUgcHJlY2FjaGUgKHRha2luZyBpbnRvXG4gICAgICogYWNjb3VudCByZXZpc2lvbiBpbmZvcm1hdGlvbiksIGFuZCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIGBSZXNwb25zZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBwcmVjYWNoZWQgVVJMIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBsb29rdXAgdGhlXG4gICAgICogYFJlc3BvbnNlYC5cbiAgICAgKiBAcmV0dXJuIHt3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfVxuICAgICAqL1xuICAgIGNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMKHVybCkge1xuICAgICAgICBjb25zdCBjYWNoZUtleSA9IHRoaXMuZ2V0Q2FjaGVLZXlGb3JVUkwodXJsKTtcbiAgICAgICAgaWYgKCFjYWNoZUtleSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm9uLXByZWNhY2hlZC11cmwnLCB7IHVybCB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIG9wdGlvbnMucmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCk7XG4gICAgICAgICAgICBvcHRpb25zLnBhcmFtcyA9IE9iamVjdC5hc3NpZ24oeyBjYWNoZUtleSB9LCBvcHRpb25zLnBhcmFtcyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJhdGVneS5oYW5kbGUob3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0IHsgUHJlY2FjaGVDb250cm9sbGVyIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IGdldEZyaWVuZGx5VVJMIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnd29ya2JveC1yb3V0aW5nL1JvdXRlLmpzJztcbmltcG9ydCB7IGdlbmVyYXRlVVJMVmFyaWF0aW9ucyB9IGZyb20gJy4vdXRpbHMvZ2VuZXJhdGVVUkxWYXJpYXRpb25zLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEEgc3ViY2xhc3Mgb2Yge0BsaW5rIHdvcmtib3gtcm91dGluZy5Sb3V0ZX0gdGhhdCB0YWtlcyBhXG4gKiB7QGxpbmsgd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlcn1cbiAqIGluc3RhbmNlIGFuZCB1c2VzIGl0IHRvIG1hdGNoIGluY29taW5nIHJlcXVlc3RzIGFuZCBoYW5kbGUgZmV0Y2hpbmdcbiAqIHJlc3BvbnNlcyBmcm9tIHRoZSBwcmVjYWNoZS5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1wcmVjYWNoaW5nXG4gKiBAZXh0ZW5kcyB3b3JrYm94LXJvdXRpbmcuUm91dGVcbiAqL1xuY2xhc3MgUHJlY2FjaGVSb3V0ZSBleHRlbmRzIFJvdXRlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1ByZWNhY2hlQ29udHJvbGxlcn0gcHJlY2FjaGVDb250cm9sbGVyIEEgYFByZWNhY2hlQ29udHJvbGxlcmBcbiAgICAgKiBpbnN0YW5jZSB1c2VkIHRvIGJvdGggbWF0Y2ggcmVxdWVzdHMgYW5kIHJlc3BvbmQgdG8gZmV0Y2ggZXZlbnRzLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9ucyB0byBjb250cm9sIGhvdyByZXF1ZXN0cyBhcmUgbWF0Y2hlZFxuICAgICAqIGFnYWluc3QgdGhlIGxpc3Qgb2YgcHJlY2FjaGVkIFVSTHMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmRpcmVjdG9yeUluZGV4PWluZGV4Lmh0bWxdIFRoZSBgZGlyZWN0b3J5SW5kZXhgIHdpbGxcbiAgICAgKiBjaGVjayBjYWNoZSBlbnRyaWVzIGZvciBhIFVSTHMgZW5kaW5nIHdpdGggJy8nIHRvIHNlZSBpZiB0aGVyZSBpcyBhIGhpdCB3aGVuXG4gICAgICogYXBwZW5kaW5nIHRoZSBgZGlyZWN0b3J5SW5kZXhgIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7QXJyYXk8UmVnRXhwPn0gW29wdGlvbnMuaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nPVsvXnV0bV8vLCAvXmZiY2xpZCQvXV0gQW5cbiAgICAgKiBhcnJheSBvZiByZWdleCdzIHRvIHJlbW92ZSBzZWFyY2ggcGFyYW1zIHdoZW4gbG9va2luZyBmb3IgYSBjYWNoZSBtYXRjaC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNsZWFuVVJMcz10cnVlXSBUaGUgYGNsZWFuVVJMc2Agb3B0aW9uIHdpbGxcbiAgICAgKiBjaGVjayB0aGUgY2FjaGUgZm9yIHRoZSBVUkwgd2l0aCBhIGAuaHRtbGAgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgZW5kLlxuICAgICAqIEBwYXJhbSB7d29ya2JveC1wcmVjYWNoaW5nfnVybE1hbmlwdWxhdGlvbn0gW29wdGlvbnMudXJsTWFuaXB1bGF0aW9uXVxuICAgICAqIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHNob3VsZCB0YWtlIGEgVVJMIGFuZCByZXR1cm4gYW4gYXJyYXkgb2ZcbiAgICAgKiBhbHRlcm5hdGl2ZSBVUkxzIHRoYXQgc2hvdWxkIGJlIGNoZWNrZWQgZm9yIHByZWNhY2hlIG1hdGNoZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJlY2FjaGVDb250cm9sbGVyLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gKHsgcmVxdWVzdCwgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJsc1RvQ2FjaGVLZXlzID0gcHJlY2FjaGVDb250cm9sbGVyLmdldFVSTHNUb0NhY2hlS2V5cygpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwb3NzaWJsZVVSTCBvZiBnZW5lcmF0ZVVSTFZhcmlhdGlvbnMocmVxdWVzdC51cmwsIG9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVLZXkgPSB1cmxzVG9DYWNoZUtleXMuZ2V0KHBvc3NpYmxlVVJMKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW50ZWdyaXR5ID0gcHJlY2FjaGVDb250cm9sbGVyLmdldEludGVncml0eUZvckNhY2hlS2V5KGNhY2hlS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgY2FjaGVLZXksIGludGVncml0eSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBQcmVjYWNoaW5nIGRpZCBub3QgZmluZCBhIG1hdGNoIGZvciBgICsgZ2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgc3VwZXIobWF0Y2gsIHByZWNhY2hlQ29udHJvbGxlci5zdHJhdGVneSk7XG4gICAgfVxufVxuZXhwb3J0IHsgUHJlY2FjaGVSb3V0ZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgY29weVJlc3BvbnNlIH0gZnJvbSAnd29ya2JveC1jb3JlL2NvcHlSZXNwb25zZS5qcyc7XG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IFN0cmF0ZWd5IH0gZnJvbSAnd29ya2JveC1zdHJhdGVnaWVzL1N0cmF0ZWd5LmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEEge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneX0gaW1wbGVtZW50YXRpb25cbiAqIHNwZWNpZmljYWxseSBkZXNpZ25lZCB0byB3b3JrIHdpdGhcbiAqIHtAbGluayB3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyfVxuICogdG8gYm90aCBjYWNoZSBhbmQgZmV0Y2ggcHJlY2FjaGVkIGFzc2V0cy5cbiAqXG4gKiBOb3RlOiBhbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGlzIGNyZWF0ZWQgYXV0b21hdGljYWxseSB3aGVuIGNyZWF0aW5nIGFcbiAqIGBQcmVjYWNoZUNvbnRyb2xsZXJgOyBpdCdzIGdlbmVyYWxseSBub3QgbmVjZXNzYXJ5IHRvIGNyZWF0ZSB0aGlzIHlvdXJzZWxmLlxuICpcbiAqIEBleHRlbmRzIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneVxuICogQG1lbWJlcm9mIHdvcmtib3gtcHJlY2FjaGluZ1xuICovXG5jbGFzcyBQcmVjYWNoZVN0cmF0ZWd5IGV4dGVuZHMgU3RyYXRlZ3kge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYWNoZU5hbWVdIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIHRoZSBjYWNoZSBuYW1lcyBwcm92aWRlZCBieVxuICAgICAqIHtAbGluayB3b3JrYm94LWNvcmUuY2FjaGVOYW1lc30uXG4gICAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zXSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN8UGx1Z2luc31cbiAgICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmZldGNoT3B0aW9uc10gVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvZmV0Y2gjUGFyYW1ldGVyc3xpbml0fVxuICAgICAqIG9mIGFsbCBmZXRjaCgpIHJlcXVlc3RzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMubWF0Y2hPcHRpb25zXSBUaGVcbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnN8Q2FjaGVRdWVyeU9wdGlvbnN9XG4gICAgICogZm9yIGFueSBgY2FjaGUubWF0Y2goKWAgb3IgYGNhY2hlLnB1dCgpYCBjYWxscyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5mYWxsYmFja1RvTmV0d29yaz10cnVlXSBXaGV0aGVyIHRvIGF0dGVtcHQgdG9cbiAgICAgKiBnZXQgdGhlIHJlc3BvbnNlIGZyb20gdGhlIG5ldHdvcmsgaWYgdGhlcmUncyBhIHByZWNhY2hlIG1pc3MuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIG9wdGlvbnMuY2FjaGVOYW1lID0gY2FjaGVOYW1lcy5nZXRQcmVjYWNoZU5hbWUob3B0aW9ucy5jYWNoZU5hbWUpO1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZmFsbGJhY2tUb05ldHdvcmsgPVxuICAgICAgICAgICAgb3B0aW9ucy5mYWxsYmFja1RvTmV0d29yayA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIC8vIFJlZGlyZWN0ZWQgcmVzcG9uc2VzIGNhbm5vdCBiZSB1c2VkIHRvIHNhdGlzZnkgYSBuYXZpZ2F0aW9uIHJlcXVlc3QsIHNvXG4gICAgICAgIC8vIGFueSByZWRpcmVjdGVkIHJlc3BvbnNlIG11c3QgYmUgXCJjb3BpZWRcIiByYXRoZXIgdGhhbiBjbG9uZWQsIHNvIHRoZSBuZXdcbiAgICAgICAgLy8gcmVzcG9uc2UgZG9lc24ndCBjb250YWluIHRoZSBgcmVkaXJlY3RlZGAgZmxhZy4gU2VlOlxuICAgICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02NjkzNjMmZGVzYz0yI2MxXG4gICAgICAgIHRoaXMucGx1Z2lucy5wdXNoKFByZWNhY2hlU3RyYXRlZ3kuY29weVJlZGlyZWN0ZWRDYWNoZWFibGVSZXNwb25zZXNQbHVnaW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IHJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICAgKiBAcGFyYW0ge3dvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9IGhhbmRsZXIgVGhlIGV2ZW50IHRoYXRcbiAgICAgKiAgICAgdHJpZ2dlcmVkIHRoZSByZXF1ZXN0LlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgICAqL1xuICAgIGFzeW5jIF9oYW5kbGUocmVxdWVzdCwgaGFuZGxlcikge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuY2FjaGVNYXRjaChyZXF1ZXN0KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhbiBgaW5zdGFsbGAgZXZlbnQgZm9yIGFuIGVudHJ5IHRoYXQgaXNuJ3QgYWxyZWFkeSBjYWNoZWQsXG4gICAgICAgIC8vIHRoZW4gcG9wdWxhdGUgdGhlIGNhY2hlLlxuICAgICAgICBpZiAoaGFuZGxlci5ldmVudCAmJiBoYW5kbGVyLmV2ZW50LnR5cGUgPT09ICdpbnN0YWxsJykge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2hhbmRsZUluc3RhbGwocmVxdWVzdCwgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0dGluZyBoZXJlIG1lYW5zIHNvbWV0aGluZyB3ZW50IHdyb25nLiBBbiBlbnRyeSB0aGF0IHNob3VsZCBoYXZlIGJlZW5cbiAgICAgICAgLy8gcHJlY2FjaGVkIHdhc24ndCBmb3VuZCBpbiB0aGUgY2FjaGUuXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9oYW5kbGVGZXRjaChyZXF1ZXN0LCBoYW5kbGVyKTtcbiAgICB9XG4gICAgYXN5bmMgX2hhbmRsZUZldGNoKHJlcXVlc3QsIGhhbmRsZXIpIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSAoaGFuZGxlci5wYXJhbXMgfHwge30pO1xuICAgICAgICAvLyBGYWxsIGJhY2sgdG8gdGhlIG5ldHdvcmsgaWYgd2UncmUgY29uZmlndXJlZCB0byBkbyBzby5cbiAgICAgICAgaWYgKHRoaXMuX2ZhbGxiYWNrVG9OZXR3b3JrKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKGBUaGUgcHJlY2FjaGVkIHJlc3BvbnNlIGZvciBgICtcbiAgICAgICAgICAgICAgICAgICAgYCR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfSBpbiAke3RoaXMuY2FjaGVOYW1lfSB3YXMgbm90IGAgK1xuICAgICAgICAgICAgICAgICAgICBgZm91bmQuIEZhbGxpbmcgYmFjayB0byB0aGUgbmV0d29yay5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGludGVncml0eUluTWFuaWZlc3QgPSBwYXJhbXMuaW50ZWdyaXR5O1xuICAgICAgICAgICAgY29uc3QgaW50ZWdyaXR5SW5SZXF1ZXN0ID0gcmVxdWVzdC5pbnRlZ3JpdHk7XG4gICAgICAgICAgICBjb25zdCBub0ludGVncml0eUNvbmZsaWN0ID0gIWludGVncml0eUluUmVxdWVzdCB8fCBpbnRlZ3JpdHlJblJlcXVlc3QgPT09IGludGVncml0eUluTWFuaWZlc3Q7XG4gICAgICAgICAgICAvLyBEbyBub3QgYWRkIGludGVncml0eSBpZiB0aGUgb3JpZ2luYWwgcmVxdWVzdCBpcyBuby1jb3JzXG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8zMDk2XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuZmV0Y2gobmV3IFJlcXVlc3QocmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIGludGVncml0eTogcmVxdWVzdC5tb2RlICE9PSAnbm8tY29ycydcbiAgICAgICAgICAgICAgICAgICAgPyBpbnRlZ3JpdHlJblJlcXVlc3QgfHwgaW50ZWdyaXR5SW5NYW5pZmVzdFxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIC8vIEl0J3Mgb25seSBcInNhZmVcIiB0byByZXBhaXIgdGhlIGNhY2hlIGlmIHdlJ3JlIHVzaW5nIFNSSSB0byBndWFyYW50ZWVcbiAgICAgICAgICAgIC8vIHRoYXQgdGhlIHJlc3BvbnNlIG1hdGNoZXMgdGhlIHByZWNhY2hlIG1hbmlmZXN0J3MgZXhwZWN0YXRpb25zLFxuICAgICAgICAgICAgLy8gYW5kIHRoZXJlJ3MgZWl0aGVyIGEpIG5vIGludGVncml0eSBwcm9wZXJ0eSBpbiB0aGUgaW5jb21pbmcgcmVxdWVzdFxuICAgICAgICAgICAgLy8gb3IgYikgdGhlcmUgaXMgYW4gaW50ZWdyaXR5LCBhbmQgaXQgbWF0Y2hlcyB0aGUgcHJlY2FjaGUgbWFuaWZlc3QuXG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yODU4XG4gICAgICAgICAgICAvLyBBbHNvIGlmIHRoZSBvcmlnaW5hbCByZXF1ZXN0IHVzZXJzIG5vLWNvcnMgd2UgZG9uJ3QgdXNlIGludGVncml0eS5cbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzMwOTZcbiAgICAgICAgICAgIGlmIChpbnRlZ3JpdHlJbk1hbmlmZXN0ICYmXG4gICAgICAgICAgICAgICAgbm9JbnRlZ3JpdHlDb25mbGljdCAmJlxuICAgICAgICAgICAgICAgIHJlcXVlc3QubW9kZSAhPT0gJ25vLWNvcnMnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlRGVmYXVsdENhY2hlYWJpbGl0eVBsdWdpbklmTmVlZGVkKCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FzQ2FjaGVkID0gYXdhaXQgaGFuZGxlci5jYWNoZVB1dChyZXF1ZXN0LCByZXNwb25zZS5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2FzQ2FjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBBIHJlc3BvbnNlIGZvciAke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYHdhcyB1c2VkIHRvIFwicmVwYWlyXCIgdGhlIHByZWNhY2hlLmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVGhpcyBzaG91bGRuJ3Qgbm9ybWFsbHkgaGFwcGVuLCBidXQgdGhlcmUgYXJlIGVkZ2UgY2FzZXM6XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE0NDFcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ21pc3NpbmctcHJlY2FjaGUtZW50cnknLCB7XG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lOiB0aGlzLmNhY2hlTmFtZSxcbiAgICAgICAgICAgICAgICB1cmw6IHJlcXVlc3QudXJsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gcGFyYW1zLmNhY2hlS2V5IHx8IChhd2FpdCBoYW5kbGVyLmdldENhY2hlS2V5KHJlcXVlc3QsICdyZWFkJykpO1xuICAgICAgICAgICAgLy8gV29ya2JveCBpcyBnb2luZyB0byBoYW5kbGUgdGhlIHJvdXRlLlxuICAgICAgICAgICAgLy8gcHJpbnQgdGhlIHJvdXRpbmcgZGV0YWlscyB0byB0aGUgY29uc29sZS5cbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgUHJlY2FjaGluZyBpcyByZXNwb25kaW5nIHRvOiBgICsgZ2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpKTtcbiAgICAgICAgICAgIGxvZ2dlci5sb2coYFNlcnZpbmcgdGhlIHByZWNhY2hlZCB1cmw6ICR7Z2V0RnJpZW5kbHlVUkwoY2FjaGVLZXkgaW5zdGFuY2VvZiBSZXF1ZXN0ID8gY2FjaGVLZXkudXJsIDogY2FjaGVLZXkpfWApO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IHJlcXVlc3QgZGV0YWlscyBoZXJlLmApO1xuICAgICAgICAgICAgbG9nZ2VyLmxvZyhyZXF1ZXN0KTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IHJlc3BvbnNlIGRldGFpbHMgaGVyZS5gKTtcbiAgICAgICAgICAgIGxvZ2dlci5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIGFzeW5jIF9oYW5kbGVJbnN0YWxsKHJlcXVlc3QsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fdXNlRGVmYXVsdENhY2hlYWJpbGl0eVBsdWdpbklmTmVlZGVkKCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5mZXRjaChyZXF1ZXN0KTtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRlZmVyIGNhY2hlUHV0KCkgdW50aWwgYWZ0ZXIgd2Uga25vdyB0aGUgcmVzcG9uc2VcbiAgICAgICAgLy8gc2hvdWxkIGJlIGNhY2hlZDsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjczN1xuICAgICAgICBjb25zdCB3YXNDYWNoZWQgPSBhd2FpdCBoYW5kbGVyLmNhY2hlUHV0KHJlcXVlc3QsIHJlc3BvbnNlLmNsb25lKCkpO1xuICAgICAgICBpZiAoIXdhc0NhY2hlZCkge1xuICAgICAgICAgICAgLy8gVGhyb3dpbmcgaGVyZSB3aWxsIGxlYWQgdG8gdGhlIGBpbnN0YWxsYCBoYW5kbGVyIGZhaWxpbmcsIHdoaWNoXG4gICAgICAgICAgICAvLyB3ZSB3YW50IHRvIGRvIGlmICphbnkqIG9mIHRoZSByZXNwb25zZXMgYXJlbid0IHNhZmUgdG8gY2FjaGUuXG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdiYWQtcHJlY2FjaGluZy1yZXNwb25zZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6IHJlcXVlc3QudXJsLFxuICAgICAgICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjb21wbGV4LCBhcyB0aGVyZSBhIG51bWJlciBvZiB0aGluZ3MgdG8gYWNjb3VudCBmb3I6XG4gICAgICpcbiAgICAgKiBUaGUgYHBsdWdpbnNgIGFycmF5IGNhbiBiZSBzZXQgYXQgY29uc3RydWN0aW9uLCBhbmQvb3IgaXQgbWlnaHQgYmUgYWRkZWQgdG9cbiAgICAgKiB0byBhdCBhbnkgdGltZSBiZWZvcmUgdGhlIHN0cmF0ZWd5IGlzIHVzZWQuXG4gICAgICpcbiAgICAgKiBBdCB0aGUgdGltZSB0aGUgc3RyYXRlZ3kgaXMgdXNlZCAoaS5lLiBkdXJpbmcgYW4gYGluc3RhbGxgIGV2ZW50KSwgdGhlcmVcbiAgICAgKiBuZWVkcyB0byBiZSBhdCBsZWFzdCBvbmUgcGx1Z2luIHRoYXQgaW1wbGVtZW50cyBgY2FjaGVXaWxsVXBkYXRlYCBpbiB0aGVcbiAgICAgKiBhcnJheSwgb3RoZXIgdGhhbiBgY29weVJlZGlyZWN0ZWRDYWNoZWFibGVSZXNwb25zZXNQbHVnaW5gLlxuICAgICAqXG4gICAgICogLSBJZiB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgYW5kIHRoZXJlIGFyZSBubyBzdWl0YWJsZSBgY2FjaGVXaWxsVXBkYXRlYFxuICAgICAqIHBsdWdpbnMsIHdlIG5lZWQgdG8gYWRkIGBkZWZhdWx0UHJlY2FjaGVDYWNoZWFiaWxpdHlQbHVnaW5gLlxuICAgICAqXG4gICAgICogLSBJZiB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgYW5kIHRoZXJlIGlzIGV4YWN0bHkgb25lIGBjYWNoZVdpbGxVcGRhdGVgLCB0aGVuXG4gICAgICogd2UgZG9uJ3QgaGF2ZSB0byBkbyBhbnl0aGluZyAodGhpcyBtaWdodCBiZSBhIHByZXZpb3VzbHkgYWRkZWRcbiAgICAgKiBgZGVmYXVsdFByZWNhY2hlQ2FjaGVhYmlsaXR5UGx1Z2luYCwgb3IgaXQgbWlnaHQgYmUgYSBjdXN0b20gcGx1Z2luKS5cbiAgICAgKlxuICAgICAqIC0gSWYgdGhpcyBtZXRob2QgaXMgY2FsbGVkIGFuZCB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIGBjYWNoZVdpbGxVcGRhdGVgLFxuICAgICAqIHRoZW4gd2UgbmVlZCB0byBjaGVjayBpZiBvbmUgaXMgYGRlZmF1bHRQcmVjYWNoZUNhY2hlYWJpbGl0eVBsdWdpbmAuIElmIHNvLFxuICAgICAqIHdlIG5lZWQgdG8gcmVtb3ZlIGl0LiAoVGhpcyBzaXR1YXRpb24gaXMgdW5saWtlbHksIGJ1dCBpdCBjb3VsZCBoYXBwZW4gaWZcbiAgICAgKiB0aGUgc3RyYXRlZ3kgaXMgdXNlZCBtdWx0aXBsZSB0aW1lcywgdGhlIGZpcnN0IHdpdGhvdXQgYSBgY2FjaGVXaWxsVXBkYXRlYCxcbiAgICAgKiBhbmQgdGhlbiBsYXRlciBvbiBhZnRlciBtYW51YWxseSBhZGRpbmcgYSBjdXN0b20gYGNhY2hlV2lsbFVwZGF0ZWAuKVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjczNyBmb3IgbW9yZSBjb250ZXh0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfdXNlRGVmYXVsdENhY2hlYWJpbGl0eVBsdWdpbklmTmVlZGVkKCkge1xuICAgICAgICBsZXQgZGVmYXVsdFBsdWdpbkluZGV4ID0gbnVsbDtcbiAgICAgICAgbGV0IGNhY2hlV2lsbFVwZGF0ZVBsdWdpbkNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBbaW5kZXgsIHBsdWdpbl0gb2YgdGhpcy5wbHVnaW5zLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgLy8gSWdub3JlIHRoZSBjb3B5IHJlZGlyZWN0ZWQgcGx1Z2luIHdoZW4gZGV0ZXJtaW5pbmcgd2hhdCB0byBkby5cbiAgICAgICAgICAgIGlmIChwbHVnaW4gPT09IFByZWNhY2hlU3RyYXRlZ3kuY29weVJlZGlyZWN0ZWRDYWNoZWFibGVSZXNwb25zZXNQbHVnaW4pIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNhdmUgdGhlIGRlZmF1bHQgcGx1Z2luJ3MgaW5kZXgsIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVtb3ZlZC5cbiAgICAgICAgICAgIGlmIChwbHVnaW4gPT09IFByZWNhY2hlU3RyYXRlZ3kuZGVmYXVsdFByZWNhY2hlQ2FjaGVhYmlsaXR5UGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdFBsdWdpbkluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGx1Z2luLmNhY2hlV2lsbFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNhY2hlV2lsbFVwZGF0ZVBsdWdpbkNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhY2hlV2lsbFVwZGF0ZVBsdWdpbkNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbnMucHVzaChQcmVjYWNoZVN0cmF0ZWd5LmRlZmF1bHRQcmVjYWNoZUNhY2hlYWJpbGl0eVBsdWdpbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2FjaGVXaWxsVXBkYXRlUGx1Z2luQ291bnQgPiAxICYmIGRlZmF1bHRQbHVnaW5JbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gT25seSByZW1vdmUgdGhlIGRlZmF1bHQgcGx1Z2luOyBtdWx0aXBsZSBjdXN0b20gcGx1Z2lucyBhcmUgYWxsb3dlZC5cbiAgICAgICAgICAgIHRoaXMucGx1Z2lucy5zcGxpY2UoZGVmYXVsdFBsdWdpbkluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3RoaW5nIG5lZWRzIHRvIGJlIGRvbmUgaWYgY2FjaGVXaWxsVXBkYXRlUGx1Z2luQ291bnQgaXMgMVxuICAgIH1cbn1cblByZWNhY2hlU3RyYXRlZ3kuZGVmYXVsdFByZWNhY2hlQ2FjaGVhYmlsaXR5UGx1Z2luID0ge1xuICAgIGFzeW5jIGNhY2hlV2lsbFVwZGF0ZSh7IHJlc3BvbnNlIH0pIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS5zdGF0dXMgPj0gNDAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSxcbn07XG5QcmVjYWNoZVN0cmF0ZWd5LmNvcHlSZWRpcmVjdGVkQ2FjaGVhYmxlUmVzcG9uc2VzUGx1Z2luID0ge1xuICAgIGFzeW5jIGNhY2hlV2lsbFVwZGF0ZSh7IHJlc3BvbnNlIH0pIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnJlZGlyZWN0ZWQgPyBhd2FpdCBjb3B5UmVzcG9uc2UocmVzcG9uc2UpIDogcmVzcG9uc2U7XG4gICAgfSxcbn07XG5leHBvcnQgeyBQcmVjYWNoZVN0cmF0ZWd5IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIEB0cy1pZ25vcmVcbnRyeSB7XG4gICAgc2VsZlsnd29ya2JveDpwcmVjYWNoaW5nOjYuNS4zJ10gJiYgXygpO1xufVxuY2F0Y2ggKGUpIHsgfVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IHJlZ2lzdGVyUm91dGUgfSBmcm9tICd3b3JrYm94LXJvdXRpbmcvcmVnaXN0ZXJSb3V0ZS5qcyc7XG5pbXBvcnQgeyBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHsgUHJlY2FjaGVSb3V0ZSB9IGZyb20gJy4vUHJlY2FjaGVSb3V0ZS5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBZGQgYSBgZmV0Y2hgIGxpc3RlbmVyIHRvIHRoZSBzZXJ2aWNlIHdvcmtlciB0aGF0IHdpbGxcbiAqIHJlc3BvbmQgdG9cbiAqIFtuZXR3b3JrIHJlcXVlc3RzXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvU2VydmljZV9Xb3JrZXJfQVBJL1VzaW5nX1NlcnZpY2VfV29ya2VycyNDdXN0b21fcmVzcG9uc2VzX3RvX3JlcXVlc3RzfVxuICogd2l0aCBwcmVjYWNoZWQgYXNzZXRzLlxuICpcbiAqIFJlcXVlc3RzIGZvciBhc3NldHMgdGhhdCBhcmVuJ3QgcHJlY2FjaGVkLCB0aGUgYEZldGNoRXZlbnRgIHdpbGwgbm90IGJlXG4gKiByZXNwb25kZWQgdG8sIGFsbG93aW5nIHRoZSBldmVudCB0byBmYWxsIHRocm91Z2ggdG8gb3RoZXIgYGZldGNoYCBldmVudFxuICogbGlzdGVuZXJzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gU2VlIHRoZSB7QGxpbmsgd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlUm91dGV9XG4gKiBvcHRpb25zLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gYWRkUm91dGUob3B0aW9ucykge1xuICAgIGNvbnN0IHByZWNhY2hlQ29udHJvbGxlciA9IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgY29uc3QgcHJlY2FjaGVSb3V0ZSA9IG5ldyBQcmVjYWNoZVJvdXRlKHByZWNhY2hlQ29udHJvbGxlciwgb3B0aW9ucyk7XG4gICAgcmVnaXN0ZXJSb3V0ZShwcmVjYWNoZVJvdXRlKTtcbn1cbmV4cG9ydCB7IGFkZFJvdXRlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY2FsbHNcbiAqIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXIjbWF0Y2hQcmVjYWNoZX0gb24gdGhlIGRlZmF1bHRcbiAqIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXJ9IGluc3RhbmNlLlxuICpcbiAqIElmIHlvdSBhcmUgY3JlYXRpbmcgeW91ciBvd24ge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlcn0sIHRoZW4gY2FsbFxuICoge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlciNtYXRjaFByZWNhY2hlfSBvbiB0aGF0IGluc3RhbmNlLFxuICogaW5zdGVhZCBvZiB1c2luZyB0aGlzIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfFJlcXVlc3R9IHJlcXVlc3QgVGhlIGtleSAod2l0aG91dCByZXZpc2lvbmluZyBwYXJhbWV0ZXJzKVxuICogdG8gbG9vayB1cCBpbiB0aGUgcHJlY2FjaGUuXG4gKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlfHVuZGVmaW5lZD59XG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcHJlY2FjaGluZ1xuICovXG5mdW5jdGlvbiBtYXRjaFByZWNhY2hlKHJlcXVlc3QpIHtcbiAgICBjb25zdCBwcmVjYWNoZUNvbnRyb2xsZXIgPSBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlcigpO1xuICAgIHJldHVybiBwcmVjYWNoZUNvbnRyb2xsZXIubWF0Y2hQcmVjYWNoZShyZXF1ZXN0KTtcbn1cbmV4cG9ydCB7IG1hdGNoUHJlY2FjaGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyIH0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBZGRzIGl0ZW1zIHRvIHRoZSBwcmVjYWNoZSBsaXN0LCByZW1vdmluZyBhbnkgZHVwbGljYXRlcyBhbmRcbiAqIHN0b3JlcyB0aGUgZmlsZXMgaW4gdGhlXG4gKiB7QGxpbmsgd29ya2JveC1jb3JlLmNhY2hlTmFtZXN8XCJwcmVjYWNoZSBjYWNoZVwifSB3aGVuIHRoZSBzZXJ2aWNlXG4gKiB3b3JrZXIgaW5zdGFsbHMuXG4gKlxuICogVGhpcyBtZXRob2QgY2FuIGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBQbGVhc2Ugbm90ZTogVGhpcyBtZXRob2QgKip3aWxsIG5vdCoqIHNlcnZlIGFueSBvZiB0aGUgY2FjaGVkIGZpbGVzIGZvciB5b3UuXG4gKiBJdCBvbmx5IHByZWNhY2hlcyBmaWxlcy4gVG8gcmVzcG9uZCB0byBhIG5ldHdvcmsgcmVxdWVzdCB5b3UgY2FsbFxuICoge0BsaW5rIHdvcmtib3gtcHJlY2FjaGluZy5hZGRSb3V0ZX0uXG4gKlxuICogSWYgeW91IGhhdmUgYSBzaW5nbGUgYXJyYXkgb2YgZmlsZXMgdG8gcHJlY2FjaGUsIHlvdSBjYW4ganVzdCBjYWxsXG4gKiB7QGxpbmsgd29ya2JveC1wcmVjYWNoaW5nLnByZWNhY2hlQW5kUm91dGV9LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0fHN0cmluZz59IFtlbnRyaWVzPVtdXSBBcnJheSBvZiBlbnRyaWVzIHRvIHByZWNhY2hlLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gcHJlY2FjaGUoZW50cmllcykge1xuICAgIGNvbnN0IHByZWNhY2hlQ29udHJvbGxlciA9IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgcHJlY2FjaGVDb250cm9sbGVyLnByZWNhY2hlKGVudHJpZXMpO1xufVxuZXhwb3J0IHsgcHJlY2FjaGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFkZFJvdXRlIH0gZnJvbSAnLi9hZGRSb3V0ZS5qcyc7XG5pbXBvcnQgeyBwcmVjYWNoZSB9IGZyb20gJy4vcHJlY2FjaGUuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogVGhpcyBtZXRob2Qgd2lsbCBhZGQgZW50cmllcyB0byB0aGUgcHJlY2FjaGUgbGlzdCBhbmQgYWRkIGEgcm91dGUgdG9cbiAqIHJlc3BvbmQgdG8gZmV0Y2ggZXZlbnRzLlxuICpcbiAqIFRoaXMgaXMgYSBjb252ZW5pZW5jZSBtZXRob2QgdGhhdCB3aWxsIGNhbGxcbiAqIHtAbGluayB3b3JrYm94LXByZWNhY2hpbmcucHJlY2FjaGV9IGFuZFxuICoge0BsaW5rIHdvcmtib3gtcHJlY2FjaGluZy5hZGRSb3V0ZX0gaW4gYSBzaW5nbGUgY2FsbC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdHxzdHJpbmc+fSBlbnRyaWVzIEFycmF5IG9mIGVudHJpZXMgdG8gcHJlY2FjaGUuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIFNlZSB0aGVcbiAqIHtAbGluayB3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVSb3V0ZX0gb3B0aW9ucy5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmZ1bmN0aW9uIHByZWNhY2hlQW5kUm91dGUoZW50cmllcywgb3B0aW9ucykge1xuICAgIHByZWNhY2hlKGVudHJpZXMpO1xuICAgIGFkZFJvdXRlKG9wdGlvbnMpO1xufVxuZXhwb3J0IHsgcHJlY2FjaGVBbmRSb3V0ZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEEgcGx1Z2luLCBkZXNpZ25lZCB0byBiZSB1c2VkIHdpdGggUHJlY2FjaGVDb250cm9sbGVyLCB0byB0cmFuc2xhdGUgVVJMcyBpbnRvXG4gKiB0aGUgY29ycmVzcG9uZGluZyBjYWNoZSBrZXksIGJhc2VkIG9uIHRoZSBjdXJyZW50IHJldmlzaW9uIGluZm8uXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgUHJlY2FjaGVDYWNoZUtleVBsdWdpbiB7XG4gICAgY29uc3RydWN0b3IoeyBwcmVjYWNoZUNvbnRyb2xsZXIgfSkge1xuICAgICAgICB0aGlzLmNhY2hlS2V5V2lsbEJlVXNlZCA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcywgfSkgPT4ge1xuICAgICAgICAgICAgLy8gUGFyYW1zIGlzIHR5cGUgYW55LCBjYW4ndCBjaGFuZ2UgcmlnaHQgbm93LlxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gKHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5jYWNoZUtleSkgfHxcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVjYWNoZUNvbnRyb2xsZXIuZ2V0Q2FjaGVLZXlGb3JVUkwocmVxdWVzdC51cmwpO1xuICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlS2V5XG4gICAgICAgICAgICAgICAgPyBuZXcgUmVxdWVzdChjYWNoZUtleSwgeyBoZWFkZXJzOiByZXF1ZXN0LmhlYWRlcnMgfSlcbiAgICAgICAgICAgICAgICA6IHJlcXVlc3Q7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3ByZWNhY2hlQ29udHJvbGxlciA9IHByZWNhY2hlQ29udHJvbGxlcjtcbiAgICB9XG59XG5leHBvcnQgeyBQcmVjYWNoZUNhY2hlS2V5UGx1Z2luIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogQSBwbHVnaW4sIGRlc2lnbmVkIHRvIGJlIHVzZWQgd2l0aCBQcmVjYWNoZUNvbnRyb2xsZXIsIHRvIGRldGVybWluZSB0aGVcbiAqIG9mIGFzc2V0cyB0aGF0IHdlcmUgdXBkYXRlZCAob3Igbm90IHVwZGF0ZWQpIGR1cmluZyB0aGUgaW5zdGFsbCBldmVudC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBQcmVjYWNoZUluc3RhbGxSZXBvcnRQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZWRVUkxzID0gW107XG4gICAgICAgIHRoaXMubm90VXBkYXRlZFVSTHMgPSBbXTtcbiAgICAgICAgdGhpcy5oYW5kbGVyV2lsbFN0YXJ0ID0gYXN5bmMgKHsgcmVxdWVzdCwgc3RhdGUsIH0pID0+IHtcbiAgICAgICAgICAgIC8vIFRPRE86IGBzdGF0ZWAgc2hvdWxkIG5ldmVyIGJlIHVuZGVmaW5lZC4uLlxuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUub3JpZ2luYWxSZXF1ZXN0ID0gcmVxdWVzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jYWNoZWRSZXNwb25zZVdpbGxCZVVzZWQgPSBhc3luYyAoeyBldmVudCwgc3RhdGUsIGNhY2hlZFJlc3BvbnNlLCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2luc3RhbGwnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlICYmXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLm9yaWdpbmFsUmVxdWVzdCAmJlxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5vcmlnaW5hbFJlcXVlc3QgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGBzdGF0ZWAgc2hvdWxkIG5ldmVyIGJlIHVuZGVmaW5lZC4uLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBzdGF0ZS5vcmlnaW5hbFJlcXVlc3QudXJsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FjaGVkUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90VXBkYXRlZFVSTHMucHVzaCh1cmwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVkVVJMcy5wdXNoKHVybCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkUmVzcG9uc2U7XG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0IHsgUHJlY2FjaGVJbnN0YWxsUmVwb3J0UGx1Z2luIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLy8gTmFtZSBvZiB0aGUgc2VhcmNoIHBhcmFtZXRlciB1c2VkIHRvIHN0b3JlIHJldmlzaW9uIGluZm8uXG5jb25zdCBSRVZJU0lPTl9TRUFSQ0hfUEFSQU0gPSAnX19XQl9SRVZJU0lPTl9fJztcbi8qKlxuICogQ29udmVydHMgYSBtYW5pZmVzdCBlbnRyeSBpbnRvIGEgdmVyc2lvbmVkIFVSTCBzdWl0YWJsZSBmb3IgcHJlY2FjaGluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxzdHJpbmd9IGVudHJ5XG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgVVJMIHdpdGggdmVyc2lvbmluZyBpbmZvLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYWNoZUtleShlbnRyeSkge1xuICAgIGlmICghZW50cnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignYWRkLXRvLWNhY2hlLWxpc3QtdW5leHBlY3RlZC10eXBlJywgeyBlbnRyeSB9KTtcbiAgICB9XG4gICAgLy8gSWYgYSBwcmVjYWNoZSBtYW5pZmVzdCBlbnRyeSBpcyBhIHN0cmluZywgaXQncyBhc3N1bWVkIHRvIGJlIGEgdmVyc2lvbmVkXG4gICAgLy8gVVJMLCBsaWtlICcvYXBwLmFiY2QxMjM0LmpzJy4gUmV0dXJuIGFzLWlzLlxuICAgIGlmICh0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IHVybE9iamVjdCA9IG5ldyBVUkwoZW50cnksIGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2FjaGVLZXk6IHVybE9iamVjdC5ocmVmLFxuICAgICAgICAgICAgdXJsOiB1cmxPYmplY3QuaHJlZixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyByZXZpc2lvbiwgdXJsIH0gPSBlbnRyeTtcbiAgICBpZiAoIXVybCkge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdhZGQtdG8tY2FjaGUtbGlzdC11bmV4cGVjdGVkLXR5cGUnLCB7IGVudHJ5IH0pO1xuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIGp1c3QgYSBVUkwgYW5kIG5vIHJldmlzaW9uLCB0aGVuIGl0J3MgYWxzbyBhc3N1bWVkIHRvIGJlIGFcbiAgICAvLyB2ZXJzaW9uZWQgVVJMLlxuICAgIGlmICghcmV2aXNpb24pIHtcbiAgICAgICAgY29uc3QgdXJsT2JqZWN0ID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2FjaGVLZXk6IHVybE9iamVjdC5ocmVmLFxuICAgICAgICAgICAgdXJsOiB1cmxPYmplY3QuaHJlZixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCBjb25zdHJ1Y3QgYSBwcm9wZXJseSB2ZXJzaW9uZWQgVVJMIHVzaW5nIHRoZSBjdXN0b20gV29ya2JveFxuICAgIC8vIHNlYXJjaCBwYXJhbWV0ZXIgYWxvbmcgd2l0aCB0aGUgcmV2aXNpb24gaW5mby5cbiAgICBjb25zdCBjYWNoZUtleVVSTCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICBjb25zdCBvcmlnaW5hbFVSTCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICBjYWNoZUtleVVSTC5zZWFyY2hQYXJhbXMuc2V0KFJFVklTSU9OX1NFQVJDSF9QQVJBTSwgcmV2aXNpb24pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNhY2hlS2V5OiBjYWNoZUtleVVSTC5ocmVmLFxuICAgICAgICB1cmw6IG9yaWdpbmFsVVJMLmhyZWYsXG4gICAgfTtcbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IHJlbW92ZUlnbm9yZWRTZWFyY2hQYXJhbXMgfSBmcm9tICcuL3JlbW92ZUlnbm9yZWRTZWFyY2hQYXJhbXMuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEdlbmVyYXRvciBmdW5jdGlvbiB0aGF0IHlpZWxkcyBwb3NzaWJsZSB2YXJpYXRpb25zIG9uIHRoZSBvcmlnaW5hbCBVUkwgdG9cbiAqIGNoZWNrLCBvbmUgYXQgYSB0aW1lLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBnZW5lcmF0ZVVSTFZhcmlhdGlvbnModXJsLCB7IGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZyA9IFsvXnV0bV8vLCAvXmZiY2xpZCQvXSwgZGlyZWN0b3J5SW5kZXggPSAnaW5kZXguaHRtbCcsIGNsZWFuVVJMcyA9IHRydWUsIHVybE1hbmlwdWxhdGlvbiwgfSA9IHt9KSB7XG4gICAgY29uc3QgdXJsT2JqZWN0ID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgIHVybE9iamVjdC5oYXNoID0gJyc7XG4gICAgeWllbGQgdXJsT2JqZWN0LmhyZWY7XG4gICAgY29uc3QgdXJsV2l0aG91dElnbm9yZWRQYXJhbXMgPSByZW1vdmVJZ25vcmVkU2VhcmNoUGFyYW1zKHVybE9iamVjdCwgaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nKTtcbiAgICB5aWVsZCB1cmxXaXRob3V0SWdub3JlZFBhcmFtcy5ocmVmO1xuICAgIGlmIChkaXJlY3RvcnlJbmRleCAmJiB1cmxXaXRob3V0SWdub3JlZFBhcmFtcy5wYXRobmFtZS5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeVVSTCA9IG5ldyBVUkwodXJsV2l0aG91dElnbm9yZWRQYXJhbXMuaHJlZik7XG4gICAgICAgIGRpcmVjdG9yeVVSTC5wYXRobmFtZSArPSBkaXJlY3RvcnlJbmRleDtcbiAgICAgICAgeWllbGQgZGlyZWN0b3J5VVJMLmhyZWY7XG4gICAgfVxuICAgIGlmIChjbGVhblVSTHMpIHtcbiAgICAgICAgY29uc3QgY2xlYW5VUkwgPSBuZXcgVVJMKHVybFdpdGhvdXRJZ25vcmVkUGFyYW1zLmhyZWYpO1xuICAgICAgICBjbGVhblVSTC5wYXRobmFtZSArPSAnLmh0bWwnO1xuICAgICAgICB5aWVsZCBjbGVhblVSTC5ocmVmO1xuICAgIH1cbiAgICBpZiAodXJsTWFuaXB1bGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxVUkxzID0gdXJsTWFuaXB1bGF0aW9uKHsgdXJsOiB1cmxPYmplY3QgfSk7XG4gICAgICAgIGZvciAoY29uc3QgdXJsVG9BdHRlbXB0IG9mIGFkZGl0aW9uYWxVUkxzKSB7XG4gICAgICAgICAgICB5aWVsZCB1cmxUb0F0dGVtcHQuaHJlZjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IFByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4uL1ByZWNhY2hlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmxldCBwcmVjYWNoZUNvbnRyb2xsZXI7XG4vKipcbiAqIEByZXR1cm4ge1ByZWNhY2hlQ29udHJvbGxlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlciA9ICgpID0+IHtcbiAgICBpZiAoIXByZWNhY2hlQ29udHJvbGxlcikge1xuICAgICAgICBwcmVjYWNoZUNvbnRyb2xsZXIgPSBuZXcgUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgfVxuICAgIHJldHVybiBwcmVjYWNoZUNvbnRyb2xsZXI7XG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwVGl0bGVcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gZGVsZXRlZFVSTHNcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBsb2dHcm91cCA9IChncm91cFRpdGxlLCBkZWxldGVkVVJMcykgPT4ge1xuICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChncm91cFRpdGxlKTtcbiAgICBmb3IgKGNvbnN0IHVybCBvZiBkZWxldGVkVVJMcykge1xuICAgICAgICBsb2dnZXIubG9nKHVybCk7XG4gICAgfVxuICAgIGxvZ2dlci5ncm91cEVuZCgpO1xufTtcbi8qKlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBkZWxldGVkVVJMc1xuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmludENsZWFudXBEZXRhaWxzKGRlbGV0ZWRVUkxzKSB7XG4gICAgY29uc3QgZGVsZXRpb25Db3VudCA9IGRlbGV0ZWRVUkxzLmxlbmd0aDtcbiAgICBpZiAoZGVsZXRpb25Db3VudCA+IDApIHtcbiAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBEdXJpbmcgcHJlY2FjaGluZyBjbGVhbnVwLCBgICtcbiAgICAgICAgICAgIGAke2RlbGV0aW9uQ291bnR9IGNhY2hlZCBgICtcbiAgICAgICAgICAgIGByZXF1ZXN0JHtkZWxldGlvbkNvdW50ID09PSAxID8gJyB3YXMnIDogJ3Mgd2VyZSd9IGRlbGV0ZWQuYCk7XG4gICAgICAgIGxvZ0dyb3VwKCdEZWxldGVkIENhY2hlIFJlcXVlc3RzJywgZGVsZXRlZFVSTHMpO1xuICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG59XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXBUaXRsZVxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB1cmxzXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gX25lc3RlZEdyb3VwKGdyb3VwVGl0bGUsIHVybHMpIHtcbiAgICBpZiAodXJscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoZ3JvdXBUaXRsZSk7XG4gICAgZm9yIChjb25zdCB1cmwgb2YgdXJscykge1xuICAgICAgICBsb2dnZXIubG9nKHVybCk7XG4gICAgfVxuICAgIGxvZ2dlci5ncm91cEVuZCgpO1xufVxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHVybHNUb1ByZWNhY2hlXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHVybHNBbHJlYWR5UHJlY2FjaGVkXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByaW50SW5zdGFsbERldGFpbHModXJsc1RvUHJlY2FjaGUsIHVybHNBbHJlYWR5UHJlY2FjaGVkKSB7XG4gICAgY29uc3QgcHJlY2FjaGVkQ291bnQgPSB1cmxzVG9QcmVjYWNoZS5sZW5ndGg7XG4gICAgY29uc3QgYWxyZWFkeVByZWNhY2hlZENvdW50ID0gdXJsc0FscmVhZHlQcmVjYWNoZWQubGVuZ3RoO1xuICAgIGlmIChwcmVjYWNoZWRDb3VudCB8fCBhbHJlYWR5UHJlY2FjaGVkQ291bnQpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBgUHJlY2FjaGluZyAke3ByZWNhY2hlZENvdW50fSBmaWxlJHtwcmVjYWNoZWRDb3VudCA9PT0gMSA/ICcnIDogJ3MnfS5gO1xuICAgICAgICBpZiAoYWxyZWFkeVByZWNhY2hlZENvdW50ID4gMCkge1xuICAgICAgICAgICAgbWVzc2FnZSArPVxuICAgICAgICAgICAgICAgIGAgJHthbHJlYWR5UHJlY2FjaGVkQ291bnR9IGAgK1xuICAgICAgICAgICAgICAgICAgICBgZmlsZSR7YWxyZWFkeVByZWNhY2hlZENvdW50ID09PSAxID8gJyBpcycgOiAncyBhcmUnfSBhbHJlYWR5IGNhY2hlZC5gO1xuICAgICAgICB9XG4gICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChtZXNzYWdlKTtcbiAgICAgICAgX25lc3RlZEdyb3VwKGBWaWV3IG5ld2x5IHByZWNhY2hlZCBVUkxzLmAsIHVybHNUb1ByZWNhY2hlKTtcbiAgICAgICAgX25lc3RlZEdyb3VwKGBWaWV3IHByZXZpb3VzbHkgcHJlY2FjaGVkIFVSTHMuYCwgdXJsc0FscmVhZHlQcmVjYWNoZWQpO1xuICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG59XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogUmVtb3ZlcyBhbnkgVVJMIHNlYXJjaCBwYXJhbWV0ZXJzIHRoYXQgc2hvdWxkIGJlIGlnbm9yZWQuXG4gKlxuICogQHBhcmFtIHtVUkx9IHVybE9iamVjdCBUaGUgb3JpZ2luYWwgVVJMLlxuICogQHBhcmFtIHtBcnJheTxSZWdFeHA+fSBpZ25vcmVVUkxQYXJhbWV0ZXJzTWF0Y2hpbmcgUmVnRXhwcyB0byB0ZXN0IGFnYWluc3RcbiAqIGVhY2ggc2VhcmNoIHBhcmFtZXRlciBuYW1lLiBNYXRjaGVzIG1lYW4gdGhhdCB0aGUgc2VhcmNoIHBhcmFtZXRlciBzaG91bGQgYmVcbiAqIGlnbm9yZWQuXG4gKiBAcmV0dXJuIHtVUkx9IFRoZSBVUkwgd2l0aCBhbnkgaWdub3JlZCBzZWFyY2ggcGFyYW1ldGVycyByZW1vdmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJZ25vcmVkU2VhcmNoUGFyYW1zKHVybE9iamVjdCwgaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nID0gW10pIHtcbiAgICAvLyBDb252ZXJ0IHRoZSBpdGVyYWJsZSBpbnRvIGFuIGFycmF5IGF0IHRoZSBzdGFydCBvZiB0aGUgbG9vcCB0byBtYWtlIHN1cmVcbiAgICAvLyBkZWxldGlvbiBkb2Vzbid0IG1lc3MgdXAgaXRlcmF0aW9uLlxuICAgIGZvciAoY29uc3QgcGFyYW1OYW1lIG9mIFsuLi51cmxPYmplY3Quc2VhcmNoUGFyYW1zLmtleXMoKV0pIHtcbiAgICAgICAgaWYgKGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZy5zb21lKChyZWdFeHApID0+IHJlZ0V4cC50ZXN0KHBhcmFtTmFtZSkpKSB7XG4gICAgICAgICAgICB1cmxPYmplY3Quc2VhcmNoUGFyYW1zLmRlbGV0ZShwYXJhbU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxPYmplY3Q7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIEB0cy1pZ25vcmVcbnRyeSB7XG4gICAgc2VsZlsnd29ya2JveDpyZWNpcGVzOjYuNS4zJ10gJiYgXygpO1xufVxuY2F0Y2ggKGUpIHsgfVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgcmVnaXN0ZXJSb3V0ZSB9IGZyb20gJ3dvcmtib3gtcm91dGluZy9yZWdpc3RlclJvdXRlLmpzJztcbmltcG9ydCB7IFN0YWxlV2hpbGVSZXZhbGlkYXRlIH0gZnJvbSAnd29ya2JveC1zdHJhdGVnaWVzL1N0YWxlV2hpbGVSZXZhbGlkYXRlLmpzJztcbmltcG9ydCB7IENhY2hlRmlyc3QgfSBmcm9tICd3b3JrYm94LXN0cmF0ZWdpZXMvQ2FjaGVGaXJzdC5qcyc7XG5pbXBvcnQgeyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbiB9IGZyb20gJ3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlL0NhY2hlYWJsZVJlc3BvbnNlUGx1Z2luLmpzJztcbmltcG9ydCB7IEV4cGlyYXRpb25QbHVnaW4gfSBmcm9tICd3b3JrYm94LWV4cGlyYXRpb24vRXhwaXJhdGlvblBsdWdpbi5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgW0dvb2dsZSBmb250c117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL2NvbW1vbi1yZWNpcGVzI2dvb2dsZV9mb250c30gY2FjaGluZyByZWNpcGVcbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1yZWNpcGVzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhY2hlUHJlZml4XSBDYWNoZSBwcmVmaXggZm9yIGNhY2hpbmcgc3R5bGVzaGVldHMgYW5kIHdlYmZvbnRzLiBEZWZhdWx0cyB0byBnb29nbGUtZm9udHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhBZ2VTZWNvbmRzXSBNYXhpbXVtIGFnZSwgaW4gc2Vjb25kcywgdGhhdCBmb250IGVudHJpZXMgd2lsbCBiZSBjYWNoZWQgZm9yLiBEZWZhdWx0cyB0byAxIHllYXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhFbnRyaWVzXSBNYXhpbXVtIG51bWJlciBvZiBmb250cyB0aGF0IHdpbGwgYmUgY2FjaGVkLiBEZWZhdWx0cyB0byAzMFxuICovXG5mdW5jdGlvbiBnb29nbGVGb250c0NhY2hlKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHNoZWV0Q2FjaGVOYW1lID0gYCR7b3B0aW9ucy5jYWNoZVByZWZpeCB8fCAnZ29vZ2xlLWZvbnRzJ30tc3R5bGVzaGVldHNgO1xuICAgIGNvbnN0IGZvbnRDYWNoZU5hbWUgPSBgJHtvcHRpb25zLmNhY2hlUHJlZml4IHx8ICdnb29nbGUtZm9udHMnfS13ZWJmb250c2A7XG4gICAgY29uc3QgbWF4QWdlU2Vjb25kcyA9IG9wdGlvbnMubWF4QWdlU2Vjb25kcyB8fCA2MCAqIDYwICogMjQgKiAzNjU7XG4gICAgY29uc3QgbWF4RW50cmllcyA9IG9wdGlvbnMubWF4RW50cmllcyB8fCAzMDtcbiAgICAvLyBDYWNoZSB0aGUgR29vZ2xlIEZvbnRzIHN0eWxlc2hlZXRzIHdpdGggYSBzdGFsZS13aGlsZS1yZXZhbGlkYXRlIHN0cmF0ZWd5LlxuICAgIHJlZ2lzdGVyUm91dGUoKHsgdXJsIH0pID0+IHVybC5vcmlnaW4gPT09ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tJywgbmV3IFN0YWxlV2hpbGVSZXZhbGlkYXRlKHtcbiAgICAgICAgY2FjaGVOYW1lOiBzaGVldENhY2hlTmFtZSxcbiAgICB9KSk7XG4gICAgLy8gQ2FjaGUgdGhlIHVuZGVybHlpbmcgZm9udCBmaWxlcyB3aXRoIGEgY2FjaGUtZmlyc3Qgc3RyYXRlZ3kgZm9yIDEgeWVhci5cbiAgICByZWdpc3RlclJvdXRlKCh7IHVybCB9KSA9PiB1cmwub3JpZ2luID09PSAnaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbScsIG5ldyBDYWNoZUZpcnN0KHtcbiAgICAgICAgY2FjaGVOYW1lOiBmb250Q2FjaGVOYW1lLFxuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICBuZXcgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4oe1xuICAgICAgICAgICAgICAgIHN0YXR1c2VzOiBbMCwgMjAwXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbmV3IEV4cGlyYXRpb25QbHVnaW4oe1xuICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHMsXG4gICAgICAgICAgICAgICAgbWF4RW50cmllcyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgIH0pKTtcbn1cbmV4cG9ydCB7IGdvb2dsZUZvbnRzQ2FjaGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IHdhcm1TdHJhdGVneUNhY2hlIH0gZnJvbSAnLi93YXJtU3RyYXRlZ3lDYWNoZSc7XG5pbXBvcnQgeyByZWdpc3RlclJvdXRlIH0gZnJvbSAnd29ya2JveC1yb3V0aW5nL3JlZ2lzdGVyUm91dGUuanMnO1xuaW1wb3J0IHsgQ2FjaGVGaXJzdCB9IGZyb20gJ3dvcmtib3gtc3RyYXRlZ2llcy9DYWNoZUZpcnN0LmpzJztcbmltcG9ydCB7IENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luIH0gZnJvbSAnd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2UvQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4uanMnO1xuaW1wb3J0IHsgRXhwaXJhdGlvblBsdWdpbiB9IGZyb20gJ3dvcmtib3gtZXhwaXJhdGlvbi9FeHBpcmF0aW9uUGx1Z2luLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIHRoZSBbaW1hZ2UgY2FjaGluZyByZWNpcGVde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy9jb21tb24tcmVjaXBlcyNjYWNoaW5nX2ltYWdlc31cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1yZWNpcGVzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhY2hlTmFtZV0gTmFtZSBmb3IgY2FjaGUuIERlZmF1bHRzIHRvIGltYWdlc1xuICogQHBhcmFtIHtSb3V0ZU1hdGNoQ2FsbGJhY2t9IFtvcHRpb25zLm1hdGNoQ2FsbGJhY2tdIFdvcmtib3ggY2FsbGJhY2sgZnVuY3Rpb24gdG8gY2FsbCB0byBtYXRjaCB0by4gRGVmYXVsdHMgdG8gcmVxdWVzdC5kZXN0aW5hdGlvbiA9PT0gJ2ltYWdlJztcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhBZ2VTZWNvbmRzXSBNYXhpbXVtIGFnZSwgaW4gc2Vjb25kcywgdGhhdCBmb250IGVudHJpZXMgd2lsbCBiZSBjYWNoZWQgZm9yLiBEZWZhdWx0cyB0byAzMCBkYXlzXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4RW50cmllc10gTWF4aW11bSBudW1iZXIgb2YgaW1hZ2VzIHRoYXQgd2lsbCBiZSBjYWNoZWQuIERlZmF1bHRzIHRvIDYwXG4gKiBAcGFyYW0ge1dvcmtib3hQbHVnaW5bXX0gW29wdGlvbnMucGx1Z2luc10gQWRkaXRpb25hbCBwbHVnaW5zIHRvIHVzZSBmb3IgdGhpcyByZWNpcGVcbiAqIEBwYXJhbSB7c3RyaW5nW119IFtvcHRpb25zLndhcm1DYWNoZV0gUGF0aHMgdG8gY2FsbCB0byB1c2UgdG8gd2FybSB0aGlzIGNhY2hlXG4gKi9cbmZ1bmN0aW9uIGltYWdlQ2FjaGUob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgZGVmYXVsdE1hdGNoQ2FsbGJhY2sgPSAoeyByZXF1ZXN0IH0pID0+IHJlcXVlc3QuZGVzdGluYXRpb24gPT09ICdpbWFnZSc7XG4gICAgY29uc3QgY2FjaGVOYW1lID0gb3B0aW9ucy5jYWNoZU5hbWUgfHwgJ2ltYWdlcyc7XG4gICAgY29uc3QgbWF0Y2hDYWxsYmFjayA9IG9wdGlvbnMubWF0Y2hDYWxsYmFjayB8fCBkZWZhdWx0TWF0Y2hDYWxsYmFjaztcbiAgICBjb25zdCBtYXhBZ2VTZWNvbmRzID0gb3B0aW9ucy5tYXhBZ2VTZWNvbmRzIHx8IDMwICogMjQgKiA2MCAqIDYwO1xuICAgIGNvbnN0IG1heEVudHJpZXMgPSBvcHRpb25zLm1heEVudHJpZXMgfHwgNjA7XG4gICAgY29uc3QgcGx1Z2lucyA9IG9wdGlvbnMucGx1Z2lucyB8fCBbXTtcbiAgICBwbHVnaW5zLnB1c2gobmV3IENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luKHtcbiAgICAgICAgc3RhdHVzZXM6IFswLCAyMDBdLFxuICAgIH0pKTtcbiAgICBwbHVnaW5zLnB1c2gobmV3IEV4cGlyYXRpb25QbHVnaW4oe1xuICAgICAgICBtYXhFbnRyaWVzLFxuICAgICAgICBtYXhBZ2VTZWNvbmRzLFxuICAgIH0pKTtcbiAgICBjb25zdCBzdHJhdGVneSA9IG5ldyBDYWNoZUZpcnN0KHtcbiAgICAgICAgY2FjaGVOYW1lLFxuICAgICAgICBwbHVnaW5zLFxuICAgIH0pO1xuICAgIHJlZ2lzdGVyUm91dGUobWF0Y2hDYWxsYmFjaywgc3RyYXRlZ3kpO1xuICAgIC8vIFdhcm1zIHRoZSBjYWNoZVxuICAgIGlmIChvcHRpb25zLndhcm1DYWNoZSkge1xuICAgICAgICB3YXJtU3RyYXRlZ3lDYWNoZSh7IHVybHM6IG9wdGlvbnMud2FybUNhY2hlLCBzdHJhdGVneSB9KTtcbiAgICB9XG59XG5leHBvcnQgeyBpbWFnZUNhY2hlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBnb29nbGVGb250c0NhY2hlIH0gZnJvbSAnLi9nb29nbGVGb250c0NhY2hlJztcbmltcG9ydCB7IGltYWdlQ2FjaGUgfSBmcm9tICcuL2ltYWdlQ2FjaGUnO1xuaW1wb3J0IHsgc3RhdGljUmVzb3VyY2VDYWNoZSwgfSBmcm9tICcuL3N0YXRpY1Jlc291cmNlQ2FjaGUnO1xuaW1wb3J0IHsgcGFnZUNhY2hlIH0gZnJvbSAnLi9wYWdlQ2FjaGUnO1xuaW1wb3J0IHsgb2ZmbGluZUZhbGxiYWNrIH0gZnJvbSAnLi9vZmZsaW5lRmFsbGJhY2snO1xuaW1wb3J0IHsgd2FybVN0cmF0ZWd5Q2FjaGUgfSBmcm9tICcuL3dhcm1TdHJhdGVneUNhY2hlJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEBtb2R1bGUgd29ya2JveC1yZWNpcGVzXG4gKi9cbmV4cG9ydCB7IGdvb2dsZUZvbnRzQ2FjaGUsIGltYWdlQ2FjaGUsIG9mZmxpbmVGYWxsYmFjaywgcGFnZUNhY2hlLCBzdGF0aWNSZXNvdXJjZUNhY2hlLCB3YXJtU3RyYXRlZ3lDYWNoZSwgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IHNldENhdGNoSGFuZGxlciB9IGZyb20gJ3dvcmtib3gtcm91dGluZy9zZXRDYXRjaEhhbmRsZXIuanMnO1xuaW1wb3J0IHsgbWF0Y2hQcmVjYWNoZSB9IGZyb20gJ3dvcmtib3gtcHJlY2FjaGluZy9tYXRjaFByZWNhY2hlLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIHRoZSBbY29tcHJlaGVuc2l2ZSBmYWxsYmFja3MgcmVjaXBlXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvYWR2YW5jZWQtcmVjaXBlcyNjb21wcmVoZW5zaXZlX2ZhbGxiYWNrc30uIEJlIHN1cmUgdG8gaW5jbHVkZSB0aGUgZmFsbGJhY2tzIGluIHlvdXIgcHJlY2FjaGUgaW5qZWN0aW9uXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcmVjaXBlc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5wYWdlRmFsbGJhY2tdIFByZWNhY2hlIG5hbWUgdG8gbWF0Y2ggZm9yIHBhZyBmYWxsYmFja3MuIERlZmF1bHRzIHRvIG9mZmxpbmUuaHRtbFxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmltYWdlRmFsbGJhY2tdIFByZWNhY2hlIG5hbWUgdG8gbWF0Y2ggZm9yIGltYWdlIGZhbGxiYWNrcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5mb250RmFsbGJhY2tdIFByZWNhY2hlIG5hbWUgdG8gbWF0Y2ggZm9yIGZvbnQgZmFsbGJhY2tzLlxuICovXG5mdW5jdGlvbiBvZmZsaW5lRmFsbGJhY2sob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgcGFnZUZhbGxiYWNrID0gb3B0aW9ucy5wYWdlRmFsbGJhY2sgfHwgJ29mZmxpbmUuaHRtbCc7XG4gICAgY29uc3QgaW1hZ2VGYWxsYmFjayA9IG9wdGlvbnMuaW1hZ2VGYWxsYmFjayB8fCBmYWxzZTtcbiAgICBjb25zdCBmb250RmFsbGJhY2sgPSBvcHRpb25zLmZvbnRGYWxsYmFjayB8fCBmYWxzZTtcbiAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBbcGFnZUZhbGxiYWNrXTtcbiAgICAgICAgaWYgKGltYWdlRmFsbGJhY2spIHtcbiAgICAgICAgICAgIGZpbGVzLnB1c2goaW1hZ2VGYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvbnRGYWxsYmFjaykge1xuICAgICAgICAgICAgZmlsZXMucHVzaChmb250RmFsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LndhaXRVbnRpbChzZWxmLmNhY2hlc1xuICAgICAgICAgICAgLm9wZW4oJ3dvcmtib3gtb2ZmbGluZS1mYWxsYmFja3MnKVxuICAgICAgICAgICAgLnRoZW4oKGNhY2hlKSA9PiBjYWNoZS5hZGRBbGwoZmlsZXMpKSk7XG4gICAgfSk7XG4gICAgY29uc3QgaGFuZGxlciA9IGFzeW5jIChvcHRpb25zKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc3QgPSBvcHRpb25zLnJlcXVlc3QuZGVzdGluYXRpb247XG4gICAgICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgc2VsZi5jYWNoZXMub3Blbignd29ya2JveC1vZmZsaW5lLWZhbGxiYWNrcycpO1xuICAgICAgICBpZiAoZGVzdCA9PT0gJ2RvY3VtZW50Jykge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSAoYXdhaXQgbWF0Y2hQcmVjYWNoZShwYWdlRmFsbGJhY2spKSB8fFxuICAgICAgICAgICAgICAgIChhd2FpdCBjYWNoZS5tYXRjaChwYWdlRmFsbGJhY2spKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaCB8fCBSZXNwb25zZS5lcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZXN0ID09PSAnaW1hZ2UnICYmIGltYWdlRmFsbGJhY2sgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IChhd2FpdCBtYXRjaFByZWNhY2hlKGltYWdlRmFsbGJhY2spKSB8fFxuICAgICAgICAgICAgICAgIChhd2FpdCBjYWNoZS5tYXRjaChpbWFnZUZhbGxiYWNrKSk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2ggfHwgUmVzcG9uc2UuZXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVzdCA9PT0gJ2ZvbnQnICYmIGZvbnRGYWxsYmFjayAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gKGF3YWl0IG1hdGNoUHJlY2FjaGUoZm9udEZhbGxiYWNrKSkgfHxcbiAgICAgICAgICAgICAgICAoYXdhaXQgY2FjaGUubWF0Y2goZm9udEZhbGxiYWNrKSk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2ggfHwgUmVzcG9uc2UuZXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVzcG9uc2UuZXJyb3IoKTtcbiAgICB9O1xuICAgIHNldENhdGNoSGFuZGxlcihoYW5kbGVyKTtcbn1cbmV4cG9ydCB7IG9mZmxpbmVGYWxsYmFjayB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgd2FybVN0cmF0ZWd5Q2FjaGUgfSBmcm9tICcuL3dhcm1TdHJhdGVneUNhY2hlJztcbmltcG9ydCB7IHJlZ2lzdGVyUm91dGUgfSBmcm9tICd3b3JrYm94LXJvdXRpbmcvcmVnaXN0ZXJSb3V0ZS5qcyc7XG5pbXBvcnQgeyBOZXR3b3JrRmlyc3QgfSBmcm9tICd3b3JrYm94LXN0cmF0ZWdpZXMvTmV0d29ya0ZpcnN0LmpzJztcbmltcG9ydCB7IENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luIH0gZnJvbSAnd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2UvQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4uanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYSBwYWdlIGNhY2hpbmcgcmVjaXBlIHdpdGggYSBuZXR3b3JrIHRpbWVvdXRcbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1yZWNpcGVzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhY2hlTmFtZV0gTmFtZSBmb3IgY2FjaGUuIERlZmF1bHRzIHRvIHBhZ2VzXG4gKiBAcGFyYW0ge1JvdXRlTWF0Y2hDYWxsYmFja30gW29wdGlvbnMubWF0Y2hDYWxsYmFja10gV29ya2JveCBjYWxsYmFjayBmdW5jdGlvbiB0byBjYWxsIHRvIG1hdGNoIHRvLiBEZWZhdWx0cyB0byByZXF1ZXN0Lm1vZGUgPT09ICduYXZpZ2F0ZSc7XG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubmV0d29ya1RpbW91dFNlY29uZHNdIE1heGltdW0gYW1vdW50IG9mIHRpbWUsIGluIHNlY29uZHMsIHRvIHdhaXQgb24gdGhlIG5ldHdvcmsgYmVmb3JlIGZhbGxpbmcgYmFjayB0byBjYWNoZS4gRGVmYXVsdHMgdG8gM1xuICogQHBhcmFtIHtXb3JrYm94UGx1Z2luW119IFtvcHRpb25zLnBsdWdpbnNdIEFkZGl0aW9uYWwgcGx1Z2lucyB0byB1c2UgZm9yIHRoaXMgcmVjaXBlXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbb3B0aW9ucy53YXJtQ2FjaGVdIFBhdGhzIHRvIGNhbGwgdG8gdXNlIHRvIHdhcm0gdGhpcyBjYWNoZVxuICovXG5mdW5jdGlvbiBwYWdlQ2FjaGUob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgZGVmYXVsdE1hdGNoQ2FsbGJhY2sgPSAoeyByZXF1ZXN0IH0pID0+IHJlcXVlc3QubW9kZSA9PT0gJ25hdmlnYXRlJztcbiAgICBjb25zdCBjYWNoZU5hbWUgPSBvcHRpb25zLmNhY2hlTmFtZSB8fCAncGFnZXMnO1xuICAgIGNvbnN0IG1hdGNoQ2FsbGJhY2sgPSBvcHRpb25zLm1hdGNoQ2FsbGJhY2sgfHwgZGVmYXVsdE1hdGNoQ2FsbGJhY2s7XG4gICAgY29uc3QgbmV0d29ya1RpbWVvdXRTZWNvbmRzID0gb3B0aW9ucy5uZXR3b3JrVGltZW91dFNlY29uZHMgfHwgMztcbiAgICBjb25zdCBwbHVnaW5zID0gb3B0aW9ucy5wbHVnaW5zIHx8IFtdO1xuICAgIHBsdWdpbnMucHVzaChuZXcgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4oe1xuICAgICAgICBzdGF0dXNlczogWzAsIDIwMF0sXG4gICAgfSkpO1xuICAgIGNvbnN0IHN0cmF0ZWd5ID0gbmV3IE5ldHdvcmtGaXJzdCh7XG4gICAgICAgIG5ldHdvcmtUaW1lb3V0U2Vjb25kcyxcbiAgICAgICAgY2FjaGVOYW1lLFxuICAgICAgICBwbHVnaW5zLFxuICAgIH0pO1xuICAgIC8vIFJlZ2lzdGVycyB0aGUgcm91dGVcbiAgICByZWdpc3RlclJvdXRlKG1hdGNoQ2FsbGJhY2ssIHN0cmF0ZWd5KTtcbiAgICAvLyBXYXJtcyB0aGUgY2FjaGVcbiAgICBpZiAob3B0aW9ucy53YXJtQ2FjaGUpIHtcbiAgICAgICAgd2FybVN0cmF0ZWd5Q2FjaGUoeyB1cmxzOiBvcHRpb25zLndhcm1DYWNoZSwgc3RyYXRlZ3kgfSk7XG4gICAgfVxufVxuZXhwb3J0IHsgcGFnZUNhY2hlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyB3YXJtU3RyYXRlZ3lDYWNoZSB9IGZyb20gJy4vd2FybVN0cmF0ZWd5Q2FjaGUnO1xuaW1wb3J0IHsgcmVnaXN0ZXJSb3V0ZSB9IGZyb20gJ3dvcmtib3gtcm91dGluZy9yZWdpc3RlclJvdXRlLmpzJztcbmltcG9ydCB7IFN0YWxlV2hpbGVSZXZhbGlkYXRlIH0gZnJvbSAnd29ya2JveC1zdHJhdGVnaWVzL1N0YWxlV2hpbGVSZXZhbGlkYXRlLmpzJztcbmltcG9ydCB7IENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luIH0gZnJvbSAnd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2UvQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4uanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIFtDU1MgYW5kIEphdmFTY3JpcHQgZmlsZXMgcmVjaXBlXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvY29tbW9uLXJlY2lwZXMjY2FjaGVfY3NzX2FuZF9qYXZhc2NyaXB0X2ZpbGVzfVxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXJlY2lwZXNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FjaGVOYW1lXSBOYW1lIGZvciBjYWNoZS4gRGVmYXVsdHMgdG8gc3RhdGljLXJlc291cmNlc1xuICogQHBhcmFtIHtSb3V0ZU1hdGNoQ2FsbGJhY2t9IFtvcHRpb25zLm1hdGNoQ2FsbGJhY2tdIFdvcmtib3ggY2FsbGJhY2sgZnVuY3Rpb24gdG8gY2FsbCB0byBtYXRjaCB0by4gRGVmYXVsdHMgdG8gcmVxdWVzdC5kZXN0aW5hdGlvbiA9PT0gJ3N0eWxlJyB8fCByZXF1ZXN0LmRlc3RpbmF0aW9uID09PSAnc2NyaXB0JyB8fCByZXF1ZXN0LmRlc3RpbmF0aW9uID09PSAnd29ya2VyJztcbiAqIEBwYXJhbSB7V29ya2JveFBsdWdpbltdfSBbb3B0aW9ucy5wbHVnaW5zXSBBZGRpdGlvbmFsIHBsdWdpbnMgdG8gdXNlIGZvciB0aGlzIHJlY2lwZVxuICogQHBhcmFtIHtzdHJpbmdbXX0gW29wdGlvbnMud2FybUNhY2hlXSBQYXRocyB0byBjYWxsIHRvIHVzZSB0byB3YXJtIHRoaXMgY2FjaGVcbiAqL1xuZnVuY3Rpb24gc3RhdGljUmVzb3VyY2VDYWNoZShvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBkZWZhdWx0TWF0Y2hDYWxsYmFjayA9ICh7IHJlcXVlc3QgfSkgPT4gcmVxdWVzdC5kZXN0aW5hdGlvbiA9PT0gJ3N0eWxlJyB8fFxuICAgICAgICByZXF1ZXN0LmRlc3RpbmF0aW9uID09PSAnc2NyaXB0JyB8fFxuICAgICAgICByZXF1ZXN0LmRlc3RpbmF0aW9uID09PSAnd29ya2VyJztcbiAgICBjb25zdCBjYWNoZU5hbWUgPSBvcHRpb25zLmNhY2hlTmFtZSB8fCAnc3RhdGljLXJlc291cmNlcyc7XG4gICAgY29uc3QgbWF0Y2hDYWxsYmFjayA9IG9wdGlvbnMubWF0Y2hDYWxsYmFjayB8fCBkZWZhdWx0TWF0Y2hDYWxsYmFjaztcbiAgICBjb25zdCBwbHVnaW5zID0gb3B0aW9ucy5wbHVnaW5zIHx8IFtdO1xuICAgIHBsdWdpbnMucHVzaChuZXcgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4oe1xuICAgICAgICBzdGF0dXNlczogWzAsIDIwMF0sXG4gICAgfSkpO1xuICAgIGNvbnN0IHN0cmF0ZWd5ID0gbmV3IFN0YWxlV2hpbGVSZXZhbGlkYXRlKHtcbiAgICAgICAgY2FjaGVOYW1lLFxuICAgICAgICBwbHVnaW5zLFxuICAgIH0pO1xuICAgIHJlZ2lzdGVyUm91dGUobWF0Y2hDYWxsYmFjaywgc3RyYXRlZ3kpO1xuICAgIC8vIFdhcm1zIHRoZSBjYWNoZVxuICAgIGlmIChvcHRpb25zLndhcm1DYWNoZSkge1xuICAgICAgICB3YXJtU3RyYXRlZ3lDYWNoZSh7IHVybHM6IG9wdGlvbnMud2FybUNhY2hlLCBzdHJhdGVneSB9KTtcbiAgICB9XG59XG5leHBvcnQgeyBzdGF0aWNSZXNvdXJjZUNhY2hlIH07XG4iLCJpbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1yZWNpcGVzXG4gXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtzdHJpbmdbXX0gb3B0aW9ucy51cmxzIFBhdGhzIHRvIHdhcm0gdGhlIHN0cmF0ZWd5J3MgY2FjaGUgd2l0aFxuICogQHBhcmFtIHtTdHJhdGVneX0gb3B0aW9ucy5zdHJhdGVneSBTdHJhdGVneSB0byB1c2VcbiAqL1xuZnVuY3Rpb24gd2FybVN0cmF0ZWd5Q2FjaGUob3B0aW9ucykge1xuICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBkb25lID0gb3B0aW9ucy51cmxzLm1hcCgocGF0aCkgPT4gb3B0aW9ucy5zdHJhdGVneS5oYW5kbGVBbGwoe1xuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICByZXF1ZXN0OiBuZXcgUmVxdWVzdChwYXRoKSxcbiAgICAgICAgfSlbMV0pO1xuICAgICAgICBldmVudC53YWl0VW50aWwoUHJvbWlzZS5hbGwoZG9uZSkpO1xuICAgIH0pO1xufVxuZXhwb3J0IHsgd2FybVN0cmF0ZWd5Q2FjaGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJy4vUm91dGUuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogTmF2aWdhdGlvblJvdXRlIG1ha2VzIGl0IGVhc3kgdG8gY3JlYXRlIGFcbiAqIHtAbGluayB3b3JrYm94LXJvdXRpbmcuUm91dGV9IHRoYXQgbWF0Y2hlcyBmb3IgYnJvd3NlclxuICogW25hdmlnYXRpb24gcmVxdWVzdHNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvcHJpbWVycy9zZXJ2aWNlLXdvcmtlcnMvaGlnaC1wZXJmb3JtYW5jZS1sb2FkaW5nI2ZpcnN0X3doYXRfYXJlX25hdmlnYXRpb25fcmVxdWVzdHN9LlxuICpcbiAqIEl0IHdpbGwgb25seSBtYXRjaCBpbmNvbWluZyBSZXF1ZXN0cyB3aG9zZVxuICoge0BsaW5rIGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LXJlcXVlc3QtbW9kZXxtb2RlfVxuICogaXMgc2V0IHRvIGBuYXZpZ2F0ZWAuXG4gKlxuICogWW91IGNhbiBvcHRpb25hbGx5IG9ubHkgYXBwbHkgdGhpcyByb3V0ZSB0byBhIHN1YnNldCBvZiBuYXZpZ2F0aW9uIHJlcXVlc3RzXG4gKiBieSB1c2luZyBvbmUgb3IgYm90aCBvZiB0aGUgYGRlbnlsaXN0YCBhbmQgYGFsbG93bGlzdGAgcGFyYW1ldGVycy5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1yb3V0aW5nXG4gKiBAZXh0ZW5kcyB3b3JrYm94LXJvdXRpbmcuUm91dGVcbiAqL1xuY2xhc3MgTmF2aWdhdGlvblJvdXRlIGV4dGVuZHMgUm91dGUge1xuICAgIC8qKlxuICAgICAqIElmIGJvdGggYGRlbnlsaXN0YCBhbmQgYGFsbG93bGlzdGAgYXJlIHByb3ZpZGVkLCB0aGUgYGRlbnlsaXN0YCB3aWxsXG4gICAgICogdGFrZSBwcmVjZWRlbmNlIGFuZCB0aGUgcmVxdWVzdCB3aWxsIG5vdCBtYXRjaCB0aGlzIHJvdXRlLlxuICAgICAqXG4gICAgICogVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgaW4gYGFsbG93bGlzdGAgYW5kIGBkZW55bGlzdGBcbiAgICAgKiBhcmUgbWF0Y2hlZCBhZ2FpbnN0IHRoZSBjb25jYXRlbmF0ZWRcbiAgICAgKiBbYHBhdGhuYW1lYF17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxIeXBlcmxpbmtFbGVtZW50VXRpbHMvcGF0aG5hbWV9XG4gICAgICogYW5kIFtgc2VhcmNoYF17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxIeXBlcmxpbmtFbGVtZW50VXRpbHMvc2VhcmNofVxuICAgICAqIHBvcnRpb25zIG9mIHRoZSByZXF1ZXN0ZWQgVVJMLlxuICAgICAqXG4gICAgICogKk5vdGUqOiBUaGVzZSBSZWdFeHBzIG1heSBiZSBldmFsdWF0ZWQgYWdhaW5zdCBldmVyeSBkZXN0aW5hdGlvbiBVUkwgZHVyaW5nXG4gICAgICogYSBuYXZpZ2F0aW9uLiBBdm9pZCB1c2luZ1xuICAgICAqIFtjb21wbGV4IFJlZ0V4cHNdKGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMzA3NyksXG4gICAgICogb3IgZWxzZSB5b3VyIHVzZXJzIG1heSBzZWUgZGVsYXlzIHdoZW4gbmF2aWdhdGluZyB5b3VyIHNpdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0FycmF5PFJlZ0V4cD59IFtvcHRpb25zLmRlbnlsaXN0XSBJZiBhbnkgb2YgdGhlc2UgcGF0dGVybnMgbWF0Y2gsXG4gICAgICogdGhlIHJvdXRlIHdpbGwgbm90IGhhbmRsZSB0aGUgcmVxdWVzdCAoZXZlbiBpZiBhIGFsbG93bGlzdCBSZWdFeHAgbWF0Y2hlcykuXG4gICAgICogQHBhcmFtIHtBcnJheTxSZWdFeHA+fSBbb3B0aW9ucy5hbGxvd2xpc3Q9Wy8uL11dIElmIGFueSBvZiB0aGVzZSBwYXR0ZXJuc1xuICAgICAqIG1hdGNoIHRoZSBVUkwncyBwYXRobmFtZSBhbmQgc2VhcmNoIHBhcmFtZXRlciwgdGhlIHJvdXRlIHdpbGwgaGFuZGxlIHRoZVxuICAgICAqIHJlcXVlc3QgKGFzc3VtaW5nIHRoZSBkZW55bGlzdCBkb2Vzbid0IG1hdGNoKS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihoYW5kbGVyLCB7IGFsbG93bGlzdCA9IFsvLi9dLCBkZW55bGlzdCA9IFtdIH0gPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzQXJyYXlPZkNsYXNzKGFsbG93bGlzdCwgUmVnRXhwLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnTmF2aWdhdGlvblJvdXRlJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdvcHRpb25zLmFsbG93bGlzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzc2VydC5pc0FycmF5T2ZDbGFzcyhkZW55bGlzdCwgUmVnRXhwLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnTmF2aWdhdGlvblJvdXRlJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdvcHRpb25zLmRlbnlsaXN0JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKChvcHRpb25zKSA9PiB0aGlzLl9tYXRjaChvcHRpb25zKSwgaGFuZGxlcik7XG4gICAgICAgIHRoaXMuX2FsbG93bGlzdCA9IGFsbG93bGlzdDtcbiAgICAgICAgdGhpcy5fZGVueWxpc3QgPSBkZW55bGlzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUm91dGVzIG1hdGNoIGhhbmRsZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7VVJMfSBvcHRpb25zLnVybFxuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX21hdGNoKHsgdXJsLCByZXF1ZXN0IH0pIHtcbiAgICAgICAgaWYgKHJlcXVlc3QgJiYgcmVxdWVzdC5tb2RlICE9PSAnbmF2aWdhdGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGF0aG5hbWVBbmRTZWFyY2ggPSB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ0V4cCBvZiB0aGlzLl9kZW55bGlzdCkge1xuICAgICAgICAgICAgaWYgKHJlZ0V4cC50ZXN0KHBhdGhuYW1lQW5kU2VhcmNoKSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYFRoZSBuYXZpZ2F0aW9uIHJvdXRlICR7cGF0aG5hbWVBbmRTZWFyY2h9IGlzIG5vdCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBiZWluZyB1c2VkLCBzaW5jZSB0aGUgVVJMIG1hdGNoZXMgdGhpcyBkZW55bGlzdCBwYXR0ZXJuOiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke3JlZ0V4cC50b1N0cmluZygpfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2FsbG93bGlzdC5zb21lKChyZWdFeHApID0+IHJlZ0V4cC50ZXN0KHBhdGhuYW1lQW5kU2VhcmNoKSkpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBUaGUgbmF2aWdhdGlvbiByb3V0ZSAke3BhdGhuYW1lQW5kU2VhcmNofSBgICsgYGlzIGJlaW5nIHVzZWQuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLmxvZyhgVGhlIG5hdmlnYXRpb24gcm91dGUgJHtwYXRobmFtZUFuZFNlYXJjaH0gaXMgbm90IGAgK1xuICAgICAgICAgICAgICAgIGBiZWluZyB1c2VkLCBzaW5jZSB0aGUgVVJMIGJlaW5nIG5hdmlnYXRlZCB0byBkb2Vzbid0IGAgK1xuICAgICAgICAgICAgICAgIGBtYXRjaCB0aGUgYWxsb3dsaXN0LmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgeyBOYXZpZ2F0aW9uUm91dGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJy4vUm91dGUuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogUmVnRXhwUm91dGUgbWFrZXMgaXQgZWFzeSB0byBjcmVhdGUgYSByZWd1bGFyIGV4cHJlc3Npb24gYmFzZWRcbiAqIHtAbGluayB3b3JrYm94LXJvdXRpbmcuUm91dGV9LlxuICpcbiAqIEZvciBzYW1lLW9yaWdpbiByZXF1ZXN0cyB0aGUgUmVnRXhwIG9ubHkgbmVlZHMgdG8gbWF0Y2ggcGFydCBvZiB0aGUgVVJMLiBGb3JcbiAqIHJlcXVlc3RzIGFnYWluc3QgdGhpcmQtcGFydHkgc2VydmVycywgeW91IG11c3QgZGVmaW5lIGEgUmVnRXhwIHRoYXQgbWF0Y2hlc1xuICogdGhlIHN0YXJ0IG9mIHRoZSBVUkwuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcm91dGluZ1xuICogQGV4dGVuZHMgd29ya2JveC1yb3V0aW5nLlJvdXRlXG4gKi9cbmNsYXNzIFJlZ0V4cFJvdXRlIGV4dGVuZHMgUm91dGUge1xuICAgIC8qKlxuICAgICAqIElmIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gY29udGFpbnNcbiAgICAgKiBbY2FwdHVyZSBncm91cHNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1JlZ0V4cCNncm91cGluZy1iYWNrLXJlZmVyZW5jZXN9LFxuICAgICAqIHRoZSBjYXB0dXJlZCB2YWx1ZXMgd2lsbCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICoge0BsaW5rIHdvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGBwYXJhbXNgXG4gICAgICogYXJndW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlZ0V4cH0gcmVnRXhwIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdCBVUkxzLlxuICAgICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZD0nR0VUJ10gVGhlIEhUVFAgbWV0aG9kIHRvIG1hdGNoIHRoZSBSb3V0ZVxuICAgICAqIGFnYWluc3QuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVnRXhwLCBoYW5kbGVyLCBtZXRob2QpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlZ0V4cCwgUmVnRXhwLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUmVnRXhwUm91dGUnLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ3BhdHRlcm4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF0Y2ggPSAoeyB1cmwgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVnRXhwLmV4ZWModXJsLmhyZWYpO1xuICAgICAgICAgICAgLy8gUmV0dXJuIGltbWVkaWF0ZWx5IGlmIHRoZXJlJ3Mgbm8gbWF0Y2guXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlcXVpcmUgdGhhdCB0aGUgbWF0Y2ggc3RhcnQgYXQgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiB0aGUgVVJMIHN0cmluZ1xuICAgICAgICAgICAgLy8gaWYgaXQncyBhIGNyb3NzLW9yaWdpbiByZXF1ZXN0LlxuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjgxIGZvciB0aGUgY29udGV4dFxuICAgICAgICAgICAgLy8gYmVoaW5kIHRoaXMgYmVoYXZpb3IuXG4gICAgICAgICAgICBpZiAodXJsLm9yaWdpbiAhPT0gbG9jYXRpb24ub3JpZ2luICYmIHJlc3VsdC5pbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiAnJHtyZWdFeHAudG9TdHJpbmcoKX0nIG9ubHkgcGFydGlhbGx5IG1hdGNoZWQgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgYWdhaW5zdCB0aGUgY3Jvc3Mtb3JpZ2luIFVSTCAnJHt1cmwudG9TdHJpbmcoKX0nLiBSZWdFeHBSb3V0ZSdzIHdpbGwgb25seSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBoYW5kbGUgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIGlmIHRoZXkgbWF0Y2ggdGhlIGVudGlyZSBVUkwuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSByb3V0ZSBtYXRjaGVzLCBidXQgdGhlcmUgYXJlbid0IGFueSBjYXB0dXJlIGdyb3VwcyBkZWZpbmVkLCB0aGVuXG4gICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmV0dXJuIFtdLCB3aGljaCBpcyB0cnV0aHkgYW5kIHRoZXJlZm9yZSBzdWZmaWNpZW50IHRvXG4gICAgICAgICAgICAvLyBpbmRpY2F0ZSBhIG1hdGNoLlxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIGNhcHR1cmUgZ3JvdXBzLCB0aGVuIGl0IHdpbGwgcmV0dXJuIHRoZWlyIHZhbHVlcy5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuc2xpY2UoMSk7XG4gICAgICAgIH07XG4gICAgICAgIHN1cGVyKG1hdGNoLCBoYW5kbGVyLCBtZXRob2QpO1xuICAgIH1cbn1cbmV4cG9ydCB7IFJlZ0V4cFJvdXRlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGRlZmF1bHRNZXRob2QsIHZhbGlkTWV0aG9kcyB9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IG5vcm1hbGl6ZUhhbmRsZXIgfSBmcm9tICcuL3V0aWxzL25vcm1hbGl6ZUhhbmRsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQSBgUm91dGVgIGNvbnNpc3RzIG9mIGEgcGFpciBvZiBjYWxsYmFjayBmdW5jdGlvbnMsIFwibWF0Y2hcIiBhbmQgXCJoYW5kbGVyXCIuXG4gKiBUaGUgXCJtYXRjaFwiIGNhbGxiYWNrIGRldGVybWluZSBpZiBhIHJvdXRlIHNob3VsZCBiZSB1c2VkIHRvIFwiaGFuZGxlXCIgYVxuICogcmVxdWVzdCBieSByZXR1cm5pbmcgYSBub24tZmFsc3kgdmFsdWUgaWYgaXQgY2FuLiBUaGUgXCJoYW5kbGVyXCIgY2FsbGJhY2tcbiAqIGlzIGNhbGxlZCB3aGVuIHRoZXJlIGlzIGEgbWF0Y2ggYW5kIHNob3VsZCByZXR1cm4gYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXNcbiAqIHRvIGEgYFJlc3BvbnNlYC5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1yb3V0aW5nXG4gKi9cbmNsYXNzIFJvdXRlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgUm91dGUgY2xhc3MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35tYXRjaENhbGxiYWNrfSBtYXRjaFxuICAgICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHJvdXRlIG1hdGNoZXMgYSBnaXZlblxuICAgICAqIGBmZXRjaGAgZXZlbnQgYnkgcmV0dXJuaW5nIGEgbm9uLWZhbHN5IHZhbHVlLlxuICAgICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXNvbHZpbmcgdG8gYSBSZXNwb25zZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZD0nR0VUJ10gVGhlIEhUVFAgbWV0aG9kIHRvIG1hdGNoIHRoZSBSb3V0ZVxuICAgICAqIGFnYWluc3QuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobWF0Y2gsIGhhbmRsZXIsIG1ldGhvZCA9IGRlZmF1bHRNZXRob2QpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc1R5cGUobWF0Y2gsICdmdW5jdGlvbicsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZScsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnbWF0Y2gnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzT25lT2YobWV0aG9kLCB2YWxpZE1ldGhvZHMsIHsgcGFyYW1OYW1lOiAnbWV0aG9kJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUaGVzZSB2YWx1ZXMgYXJlIHJlZmVyZW5jZWQgZGlyZWN0bHkgYnkgUm91dGVyIHNvIGNhbm5vdCBiZVxuICAgICAgICAvLyBhbHRlcmVkIGJ5IG1pbmlmaWNhdG9uLlxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBub3JtYWxpemVIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICB0aGlzLm1hdGNoID0gbWF0Y2g7XG4gICAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nLWhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXNvbHZpbmcgdG8gYSBSZXNwb25zZVxuICAgICAqL1xuICAgIHNldENhdGNoSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuY2F0Y2hIYW5kbGVyID0gbm9ybWFsaXplSGFuZGxlcihoYW5kbGVyKTtcbiAgICB9XG59XG5leHBvcnQgeyBSb3V0ZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgeyBkZWZhdWx0TWV0aG9kIH0gZnJvbSAnLi91dGlscy9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBub3JtYWxpemVIYW5kbGVyIH0gZnJvbSAnLi91dGlscy9ub3JtYWxpemVIYW5kbGVyLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogVGhlIFJvdXRlciBjYW4gYmUgdXNlZCB0byBwcm9jZXNzIGEgYEZldGNoRXZlbnRgIHVzaW5nIG9uZSBvciBtb3JlXG4gKiB7QGxpbmsgd29ya2JveC1yb3V0aW5nLlJvdXRlfSwgcmVzcG9uZGluZyB3aXRoIGEgYFJlc3BvbnNlYCBpZlxuICogYSBtYXRjaGluZyByb3V0ZSBleGlzdHMuXG4gKlxuICogSWYgbm8gcm91dGUgbWF0Y2hlcyBhIGdpdmVuIGEgcmVxdWVzdCwgdGhlIFJvdXRlciB3aWxsIHVzZSBhIFwiZGVmYXVsdFwiXG4gKiBoYW5kbGVyIGlmIG9uZSBpcyBkZWZpbmVkLlxuICpcbiAqIFNob3VsZCB0aGUgbWF0Y2hpbmcgUm91dGUgdGhyb3cgYW4gZXJyb3IsIHRoZSBSb3V0ZXIgd2lsbCB1c2UgYSBcImNhdGNoXCJcbiAqIGhhbmRsZXIgaWYgb25lIGlzIGRlZmluZWQgdG8gZ3JhY2VmdWxseSBkZWFsIHdpdGggaXNzdWVzIGFuZCByZXNwb25kIHdpdGggYVxuICogUmVxdWVzdC5cbiAqXG4gKiBJZiBhIHJlcXVlc3QgbWF0Y2hlcyBtdWx0aXBsZSByb3V0ZXMsIHRoZSAqKmVhcmxpZXN0KiogcmVnaXN0ZXJlZCByb3V0ZSB3aWxsXG4gKiBiZSB1c2VkIHRvIHJlc3BvbmQgdG8gdGhlIHJlcXVlc3QuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcm91dGluZ1xuICovXG5jbGFzcyBSb3V0ZXIge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGEgbmV3IFJvdXRlci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcm91dGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0SGFuZGxlck1hcCA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7TWFwPHN0cmluZywgQXJyYXk8d29ya2JveC1yb3V0aW5nLlJvdXRlPj59IHJvdXRlcyBBIGBNYXBgIG9mIEhUVFBcbiAgICAgKiBtZXRob2QgbmFtZSAoJ0dFVCcsIGV0Yy4pIHRvIGFuIGFycmF5IG9mIGFsbCB0aGUgY29ycmVzcG9uZGluZyBgUm91dGVgXG4gICAgICogaW5zdGFuY2VzIHRoYXQgYXJlIHJlZ2lzdGVyZWQuXG4gICAgICovXG4gICAgZ2V0IHJvdXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdXRlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGZldGNoIGV2ZW50IGxpc3RlbmVyIHRvIHJlc3BvbmQgdG8gZXZlbnRzIHdoZW4gYSByb3V0ZSBtYXRjaGVzXG4gICAgICogdGhlIGV2ZW50J3MgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBhZGRGZXRjaExpc3RlbmVyKCkge1xuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yODM1NyNpc3N1ZWNvbW1lbnQtNDM2NDg0NzA1XG4gICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCAoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHJlcXVlc3QgfSA9IGV2ZW50O1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VQcm9taXNlID0gdGhpcy5oYW5kbGVSZXF1ZXN0KHsgcmVxdWVzdCwgZXZlbnQgfSk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2VQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucmVzcG9uZFdpdGgocmVzcG9uc2VQcm9taXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbWVzc2FnZSBldmVudCBsaXN0ZW5lciBmb3IgVVJMcyB0byBjYWNoZSBmcm9tIHRoZSB3aW5kb3cuXG4gICAgICogVGhpcyBpcyB1c2VmdWwgdG8gY2FjaGUgcmVzb3VyY2VzIGxvYWRlZCBvbiB0aGUgcGFnZSBwcmlvciB0byB3aGVuIHRoZVxuICAgICAqIHNlcnZpY2Ugd29ya2VyIHN0YXJ0ZWQgY29udHJvbGxpbmcgaXQuXG4gICAgICpcbiAgICAgKiBUaGUgZm9ybWF0IG9mIHRoZSBtZXNzYWdlIGRhdGEgc2VudCBmcm9tIHRoZSB3aW5kb3cgc2hvdWxkIGJlIGFzIGZvbGxvd3MuXG4gICAgICogV2hlcmUgdGhlIGB1cmxzVG9DYWNoZWAgYXJyYXkgbWF5IGNvbnNpc3Qgb2YgVVJMIHN0cmluZ3Mgb3IgYW4gYXJyYXkgb2ZcbiAgICAgKiBVUkwgc3RyaW5nICsgYHJlcXVlc3RJbml0YCBvYmplY3QgKHRoZSBzYW1lIGFzIHlvdSdkIHBhc3MgdG8gYGZldGNoKClgKS5cbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIHtcbiAgICAgKiAgIHR5cGU6ICdDQUNIRV9VUkxTJyxcbiAgICAgKiAgIHBheWxvYWQ6IHtcbiAgICAgKiAgICAgdXJsc1RvQ2FjaGU6IFtcbiAgICAgKiAgICAgICAnLi9zY3JpcHQxLmpzJyxcbiAgICAgKiAgICAgICAnLi9zY3JpcHQyLmpzJyxcbiAgICAgKiAgICAgICBbJy4vc2NyaXB0My5qcycsIHttb2RlOiAnbm8tY29ycyd9XSxcbiAgICAgKiAgICAgXSxcbiAgICAgKiAgIH0sXG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGFkZENhY2hlTGlzdGVuZXIoKSB7XG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI4MzU3I2lzc3VlY29tbWVudC00MzY0ODQ3MDVcbiAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKChldmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gZXZlbnQuZGF0YSBpcyB0eXBlICdhbnknXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSAmJiBldmVudC5kYXRhLnR5cGUgPT09ICdDQUNIRV9VUkxTJykge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBheWxvYWQgfSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBDYWNoaW5nIFVSTHMgZnJvbSB0aGUgd2luZG93YCwgcGF5bG9hZC51cmxzVG9DYWNoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RQcm9taXNlcyA9IFByb21pc2UuYWxsKHBheWxvYWQudXJsc1RvQ2FjaGUubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBbZW50cnldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCguLi5lbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlcXVlc3QoeyByZXF1ZXN0LCBldmVudCB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBUeXBlU2NyaXB0IGVycm9ycyB3aXRob3V0IHRoaXMgdHlwZWNhc3QgZm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvbWUgcmVhc29uIChwcm9iYWJseSBhIGJ1ZykuIFRoZSByZWFsIHR5cGUgaGVyZSBzaG91bGQgd29yayBidXRcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9lc24ndDogYEFycmF5PFByb21pc2U8UmVzcG9uc2U+IHwgdW5kZWZpbmVkPmAuXG4gICAgICAgICAgICAgICAgfSkpOyAvLyBUeXBlU2NyaXB0XG4gICAgICAgICAgICAgICAgZXZlbnQud2FpdFVudGlsKHJlcXVlc3RQcm9taXNlcyk7XG4gICAgICAgICAgICAgICAgLy8gSWYgYSBNZXNzYWdlQ2hhbm5lbCB3YXMgdXNlZCwgcmVwbHkgdG8gdGhlIG1lc3NhZ2Ugb24gc3VjY2Vzcy5cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQucG9ydHMgJiYgZXZlbnQucG9ydHNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdm9pZCByZXF1ZXN0UHJvbWlzZXMudGhlbigoKSA9PiBldmVudC5wb3J0c1swXS5wb3N0TWVzc2FnZSh0cnVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGx5IHRoZSByb3V0aW5nIHJ1bGVzIHRvIGEgRmV0Y2hFdmVudCBvYmplY3QgdG8gZ2V0IGEgUmVzcG9uc2UgZnJvbSBhblxuICAgICAqIGFwcHJvcHJpYXRlIFJvdXRlJ3MgaGFuZGxlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3QgVGhlIHJlcXVlc3QgdG8gaGFuZGxlLlxuICAgICAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBvcHRpb25zLmV2ZW50IFRoZSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGVcbiAgICAgKiAgICAgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPnx1bmRlZmluZWR9IEEgcHJvbWlzZSBpcyByZXR1cm5lZCBpZiBhXG4gICAgICogICAgIHJlZ2lzdGVyZWQgcm91dGUgY2FuIGhhbmRsZSB0aGUgcmVxdWVzdC4gSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmdcbiAgICAgKiAgICAgcm91dGUgYW5kIHRoZXJlJ3Mgbm8gYGRlZmF1bHRIYW5kbGVyYCwgYHVuZGVmaW5lZGAgaXMgcmV0dXJuZWQuXG4gICAgICovXG4gICAgaGFuZGxlUmVxdWVzdCh7IHJlcXVlc3QsIGV2ZW50LCB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2hhbmRsZVJlcXVlc3QnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ29wdGlvbnMucmVxdWVzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKCF1cmwucHJvdG9jb2wuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgV29ya2JveCBSb3V0ZXIgb25seSBzdXBwb3J0cyBVUkxzIHRoYXQgc3RhcnQgd2l0aCAnaHR0cCcuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2FtZU9yaWdpbiA9IHVybC5vcmlnaW4gPT09IGxvY2F0aW9uLm9yaWdpbjtcbiAgICAgICAgY29uc3QgeyBwYXJhbXMsIHJvdXRlIH0gPSB0aGlzLmZpbmRNYXRjaGluZ1JvdXRlKHtcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgIHNhbWVPcmlnaW4sXG4gICAgICAgICAgICB1cmwsXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgaGFuZGxlciA9IHJvdXRlICYmIHJvdXRlLmhhbmRsZXI7XG4gICAgICAgIGNvbnN0IGRlYnVnTWVzc2FnZXMgPSBbXTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgZGVidWdNZXNzYWdlcy5wdXNoKFtgRm91bmQgYSByb3V0ZSB0byBoYW5kbGUgdGhpcyByZXF1ZXN0OmAsIHJvdXRlXSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z01lc3NhZ2VzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgYFBhc3NpbmcgdGhlIGZvbGxvd2luZyBwYXJhbXMgdG8gdGhlIHJvdXRlJ3MgaGFuZGxlcjpgLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIGhhbmRsZXIgYmVjYXVzZSB0aGVyZSB3YXMgbm8gbWF0Y2hpbmcgcm91dGUsIHRoZW5cbiAgICAgICAgLy8gZmFsbCBiYWNrIHRvIGRlZmF1bHRIYW5kbGVyIGlmIHRoYXQncyBkZWZpbmVkLlxuICAgICAgICBjb25zdCBtZXRob2QgPSByZXF1ZXN0Lm1ldGhvZDtcbiAgICAgICAgaWYgKCFoYW5kbGVyICYmIHRoaXMuX2RlZmF1bHRIYW5kbGVyTWFwLmhhcyhtZXRob2QpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGRlYnVnTWVzc2FnZXMucHVzaChgRmFpbGVkIHRvIGZpbmQgYSBtYXRjaGluZyByb3V0ZS4gRmFsbGluZyBgICtcbiAgICAgICAgICAgICAgICAgICAgYGJhY2sgdG8gdGhlIGRlZmF1bHQgaGFuZGxlciBmb3IgJHttZXRob2R9LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlciA9IHRoaXMuX2RlZmF1bHRIYW5kbGVyTWFwLmdldChtZXRob2QpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAvLyBObyBoYW5kbGVyIHNvIFdvcmtib3ggd2lsbCBkbyBub3RoaW5nLiBJZiBsb2dzIGlzIHNldCBvZiBkZWJ1Z1xuICAgICAgICAgICAgICAgIC8vIGkuZS4gdmVyYm9zZSwgd2Ugc2hvdWxkIHByaW50IG91dCB0aGlzIGluZm9ybWF0aW9uLlxuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgTm8gcm91dGUgZm91bmQgZm9yOiAke2dldEZyaWVuZGx5VVJMKHVybCl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBoYW5kbGVyLCBtZWFuaW5nIFdvcmtib3ggaXMgZ29pbmcgdG8gaGFuZGxlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgIC8vIHByaW50IHRoZSByb3V0aW5nIGRldGFpbHMgdG8gdGhlIGNvbnNvbGUuXG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFJvdXRlciBpcyByZXNwb25kaW5nIHRvOiAke2dldEZyaWVuZGx5VVJMKHVybCl9YCk7XG4gICAgICAgICAgICBkZWJ1Z01lc3NhZ2VzLmZvckVhY2goKG1zZykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1zZykpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyguLi5tc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhtc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV3JhcCBpbiB0cnkgYW5kIGNhdGNoIGluIGNhc2UgdGhlIGhhbmRsZSBtZXRob2QgdGhyb3dzIGEgc3luY2hyb25vdXNcbiAgICAgICAgLy8gZXJyb3IuIEl0IHNob3VsZCBzdGlsbCBjYWxsYmFjayB0byB0aGUgY2F0Y2ggaGFuZGxlci5cbiAgICAgICAgbGV0IHJlc3BvbnNlUHJvbWlzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlUHJvbWlzZSA9IGhhbmRsZXIuaGFuZGxlKHsgdXJsLCByZXF1ZXN0LCBldmVudCwgcGFyYW1zIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlUHJvbWlzZSA9IFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHJvdXRlJ3MgY2F0Y2ggaGFuZGxlciwgaWYgaXQgZXhpc3RzXG4gICAgICAgIGNvbnN0IGNhdGNoSGFuZGxlciA9IHJvdXRlICYmIHJvdXRlLmNhdGNoSGFuZGxlcjtcbiAgICAgICAgaWYgKHJlc3BvbnNlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgJiZcbiAgICAgICAgICAgICh0aGlzLl9jYXRjaEhhbmRsZXIgfHwgY2F0Y2hIYW5kbGVyKSkge1xuICAgICAgICAgICAgcmVzcG9uc2VQcm9taXNlID0gcmVzcG9uc2VQcm9taXNlLmNhdGNoKGFzeW5jIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcm91dGUgY2F0Y2ggaGFuZGxlciwgcHJvY2VzcyB0aGF0IGZpcnN0XG4gICAgICAgICAgICAgICAgaWYgKGNhdGNoSGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RpbGwgaW5jbHVkZSBVUkwgaGVyZSBhcyBpdCB3aWxsIGJlIGFzeW5jIGZyb20gdGhlIGNvbnNvbGUgZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBtYXkgbm90IG1ha2Ugc2Vuc2Ugd2l0aG91dCB0aGUgVVJMXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYEVycm9yIHRocm93biB3aGVuIHJlc3BvbmRpbmcgdG86IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgJHtnZXRGcmllbmRseVVSTCh1cmwpfS4gRmFsbGluZyBiYWNrIHRvIHJvdXRlJ3MgQ2F0Y2ggSGFuZGxlci5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgRXJyb3IgdGhyb3duIGJ5OmAsIHJvdXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjYXRjaEhhbmRsZXIuaGFuZGxlKHsgdXJsLCByZXF1ZXN0LCBldmVudCwgcGFyYW1zIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChjYXRjaEVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGNoRXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIgPSBjYXRjaEVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2F0Y2hIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGlsbCBpbmNsdWRlIFVSTCBoZXJlIGFzIGl0IHdpbGwgYmUgYXN5bmMgZnJvbSB0aGUgY29uc29sZSBncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIG1heSBub3QgbWFrZSBzZW5zZSB3aXRob3V0IHRoZSBVUkxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgRXJyb3IgdGhyb3duIHdoZW4gcmVzcG9uZGluZyB0bzogYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCAke2dldEZyaWVuZGx5VVJMKHVybCl9LiBGYWxsaW5nIGJhY2sgdG8gZ2xvYmFsIENhdGNoIEhhbmRsZXIuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoYEVycm9yIHRocm93biBieTpgLCByb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYXRjaEhhbmRsZXIuaGFuZGxlKHsgdXJsLCByZXF1ZXN0LCBldmVudCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlUHJvbWlzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGEgcmVxdWVzdCBhbmQgVVJMIChhbmQgb3B0aW9uYWxseSBhbiBldmVudCkgYWdhaW5zdCB0aGUgbGlzdCBvZlxuICAgICAqIHJlZ2lzdGVyZWQgcm91dGVzLCBhbmQgaWYgdGhlcmUncyBhIG1hdGNoLCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nXG4gICAgICogcm91dGUgYWxvbmcgd2l0aCBhbnkgcGFyYW1zIGdlbmVyYXRlZCBieSB0aGUgbWF0Y2guXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7VVJMfSBvcHRpb25zLnVybFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5zYW1lT3JpZ2luIFRoZSByZXN1bHQgb2YgY29tcGFyaW5nIGB1cmwub3JpZ2luYFxuICAgICAqICAgICBhZ2FpbnN0IHRoZSBjdXJyZW50IG9yaWdpbi5cbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdCBUaGUgcmVxdWVzdCB0byBtYXRjaC5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBvcHRpb25zLmV2ZW50IFRoZSBjb3JyZXNwb25kaW5nIGV2ZW50LlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggYHJvdXRlYCBhbmQgYHBhcmFtc2AgcHJvcGVydGllcy5cbiAgICAgKiAgICAgVGhleSBhcmUgcG9wdWxhdGVkIGlmIGEgbWF0Y2hpbmcgcm91dGUgd2FzIGZvdW5kIG9yIGB1bmRlZmluZWRgXG4gICAgICogICAgIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBmaW5kTWF0Y2hpbmdSb3V0ZSh7IHVybCwgc2FtZU9yaWdpbiwgcmVxdWVzdCwgZXZlbnQsIH0pIHtcbiAgICAgICAgY29uc3Qgcm91dGVzID0gdGhpcy5fcm91dGVzLmdldChyZXF1ZXN0Lm1ldGhvZCkgfHwgW107XG4gICAgICAgIGZvciAoY29uc3Qgcm91dGUgb2Ygcm91dGVzKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1zO1xuICAgICAgICAgICAgLy8gcm91dGUubWF0Y2ggcmV0dXJucyB0eXBlIGFueSwgbm90IHBvc3NpYmxlIHRvIGNoYW5nZSByaWdodCBub3cuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG4gICAgICAgICAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHJvdXRlLm1hdGNoKHsgdXJsLCBzYW1lT3JpZ2luLCByZXF1ZXN0LCBldmVudCB9KTtcbiAgICAgICAgICAgIGlmIChtYXRjaFJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdhcm4gZGV2ZWxvcGVycyB0aGF0IHVzaW5nIGFuIGFzeW5jIG1hdGNoQ2FsbGJhY2sgaXMgYWxtb3N0IGFsd2F5c1xuICAgICAgICAgICAgICAgICAgICAvLyBub3QgdGhlIHJpZ2h0IHRoaW5nIHRvIGRvLlxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hSZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIud2FybihgV2hpbGUgcm91dGluZyAke2dldEZyaWVuZGx5VVJMKHVybCl9LCBhbiBhc3luYyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgbWF0Y2hDYWxsYmFjayBmdW5jdGlvbiB3YXMgdXNlZC4gUGxlYXNlIGNvbnZlcnQgdGhlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBmb2xsb3dpbmcgcm91dGUgdG8gdXNlIGEgc3luY2hyb25vdXMgbWF0Y2hDYWxsYmFjayBmdW5jdGlvbjpgLCByb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjA3OVxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSBtYXRjaFJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXMpICYmIHBhcmFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5zdGVhZCBvZiBwYXNzaW5nIGFuIGVtcHR5IGFycmF5IGluIGFzIHBhcmFtcywgdXNlIHVuZGVmaW5lZC5cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFJlc3VsdC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobWF0Y2hSZXN1bHQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbnN0ZWFkIG9mIHBhc3NpbmcgYW4gZW1wdHkgb2JqZWN0IGluIGFzIHBhcmFtcywgdXNlIHVuZGVmaW5lZC5cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgbWF0Y2hSZXN1bHQgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgdGhlIGJvb2xlYW4gdmFsdWUgdHJ1ZSAocmF0aGVyIHRoYW4ganVzdCBzb21ldGhpbmcgdHJ1dGgteSksXG4gICAgICAgICAgICAgICAgICAgIC8vIGRvbid0IHNldCBwYXJhbXMuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvcHVsbC8yMTM0I2lzc3VlY29tbWVudC01MTM5MjQzNTNcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gZWFybHkgaWYgaGF2ZSBhIG1hdGNoLlxuICAgICAgICAgICAgICAgIHJldHVybiB7IHJvdXRlLCBwYXJhbXMgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBubyBtYXRjaCB3YXMgZm91bmQgYWJvdmUsIHJldHVybiBhbmQgZW1wdHkgb2JqZWN0LlxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlZmluZSBhIGRlZmF1bHQgYGhhbmRsZXJgIHRoYXQncyBjYWxsZWQgd2hlbiBubyByb3V0ZXMgZXhwbGljaXRseVxuICAgICAqIG1hdGNoIHRoZSBpbmNvbWluZyByZXF1ZXN0LlxuICAgICAqXG4gICAgICogRWFjaCBIVFRQIG1ldGhvZCAoJ0dFVCcsICdQT1NUJywgZXRjLikgZ2V0cyBpdHMgb3duIGRlZmF1bHQgaGFuZGxlci5cbiAgICAgKlxuICAgICAqIFdpdGhvdXQgYSBkZWZhdWx0IGhhbmRsZXIsIHVubWF0Y2hlZCByZXF1ZXN0cyB3aWxsIGdvIGFnYWluc3QgdGhlXG4gICAgICogbmV0d29yayBhcyBpZiB0aGVyZSB3ZXJlIG5vIHNlcnZpY2Ugd29ya2VyIHByZXNlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFttZXRob2Q9J0dFVCddIFRoZSBIVFRQIG1ldGhvZCB0byBhc3NvY2lhdGUgd2l0aCB0aGlzXG4gICAgICogZGVmYXVsdCBoYW5kbGVyLiBFYWNoIG1ldGhvZCBoYXMgaXRzIG93biBkZWZhdWx0LlxuICAgICAqL1xuICAgIHNldERlZmF1bHRIYW5kbGVyKGhhbmRsZXIsIG1ldGhvZCA9IGRlZmF1bHRNZXRob2QpIHtcbiAgICAgICAgdGhpcy5fZGVmYXVsdEhhbmRsZXJNYXAuc2V0KG1ldGhvZCwgbm9ybWFsaXplSGFuZGxlcihoYW5kbGVyKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIGEgUm91dGUgdGhyb3dzIGFuIGVycm9yIHdoaWxlIGhhbmRsaW5nIGEgcmVxdWVzdCwgdGhpcyBgaGFuZGxlcmBcbiAgICAgKiB3aWxsIGJlIGNhbGxlZCBhbmQgZ2l2ZW4gYSBjaGFuY2UgdG8gcHJvdmlkZSBhIHJlc3BvbnNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICAgICAqL1xuICAgIHNldENhdGNoSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX2NhdGNoSGFuZGxlciA9IG5vcm1hbGl6ZUhhbmRsZXIoaGFuZGxlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIHJvdXRlIHdpdGggdGhlIHJvdXRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nLlJvdXRlfSByb3V0ZSBUaGUgcm91dGUgdG8gcmVnaXN0ZXIuXG4gICAgICovXG4gICAgcmVnaXN0ZXJSb3V0ZShyb3V0ZSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShyb3V0ZSwgJ29iamVjdCcsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncm91dGUnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhc3NlcnQuaGFzTWV0aG9kKHJvdXRlLCAnbWF0Y2gnLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ3JvdXRlJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShyb3V0ZS5oYW5kbGVyLCAnb2JqZWN0Jywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzc2VydC5oYXNNZXRob2Qocm91dGUuaGFuZGxlciwgJ2hhbmRsZScsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncm91dGUuaGFuZGxlcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzc2VydC5pc1R5cGUocm91dGUubWV0aG9kLCAnc3RyaW5nJywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZS5tZXRob2QnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9yb3V0ZXMuaGFzKHJvdXRlLm1ldGhvZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlcy5zZXQocm91dGUubWV0aG9kLCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2l2ZSBwcmVjZWRlbmNlIHRvIGFsbCBvZiB0aGUgZWFybGllciByb3V0ZXMgYnkgYWRkaW5nIHRoaXMgYWRkaXRpb25hbFxuICAgICAgICAvLyByb3V0ZSB0byB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAgICAgICAgdGhpcy5fcm91dGVzLmdldChyb3V0ZS5tZXRob2QpLnB1c2gocm91dGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVycyBhIHJvdXRlIHdpdGggdGhlIHJvdXRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nLlJvdXRlfSByb3V0ZSBUaGUgcm91dGUgdG8gdW5yZWdpc3Rlci5cbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyUm91dGUocm91dGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9yb3V0ZXMuaGFzKHJvdXRlLm1ldGhvZCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ3VucmVnaXN0ZXItcm91dGUtYnV0LW5vdC1mb3VuZC13aXRoLW1ldGhvZCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IHJvdXRlLm1ldGhvZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlSW5kZXggPSB0aGlzLl9yb3V0ZXMuZ2V0KHJvdXRlLm1ldGhvZCkuaW5kZXhPZihyb3V0ZSk7XG4gICAgICAgIGlmIChyb3V0ZUluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlcy5nZXQocm91dGUubWV0aG9kKS5zcGxpY2Uocm91dGVJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCd1bnJlZ2lzdGVyLXJvdXRlLXJvdXRlLW5vdC1yZWdpc3RlcmVkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgeyBSb3V0ZXIgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gQHRzLWlnbm9yZVxudHJ5IHtcbiAgICBzZWxmWyd3b3JrYm94OnJvdXRpbmc6Ni41LjMnXSAmJiBfKCk7XG59XG5jYXRjaCAoZSkgeyB9XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBOYXZpZ2F0aW9uUm91dGUsIH0gZnJvbSAnLi9OYXZpZ2F0aW9uUm91dGUuanMnO1xuaW1wb3J0IHsgUmVnRXhwUm91dGUgfSBmcm9tICcuL1JlZ0V4cFJvdXRlLmpzJztcbmltcG9ydCB7IHJlZ2lzdGVyUm91dGUgfSBmcm9tICcuL3JlZ2lzdGVyUm91dGUuanMnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICcuL1JvdXRlLmpzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4vUm91dGVyLmpzJztcbmltcG9ydCB7IHNldENhdGNoSGFuZGxlciB9IGZyb20gJy4vc2V0Q2F0Y2hIYW5kbGVyLmpzJztcbmltcG9ydCB7IHNldERlZmF1bHRIYW5kbGVyIH0gZnJvbSAnLi9zZXREZWZhdWx0SGFuZGxlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBAbW9kdWxlIHdvcmtib3gtcm91dGluZ1xuICovXG5leHBvcnQgeyBOYXZpZ2F0aW9uUm91dGUsIFJlZ0V4cFJvdXRlLCByZWdpc3RlclJvdXRlLCBSb3V0ZSwgUm91dGVyLCBzZXRDYXRjaEhhbmRsZXIsIHNldERlZmF1bHRIYW5kbGVyLCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnLi9Sb3V0ZS5qcyc7XG5pbXBvcnQgeyBSZWdFeHBSb3V0ZSB9IGZyb20gJy4vUmVnRXhwUm91dGUuanMnO1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyIH0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogRWFzaWx5IHJlZ2lzdGVyIGEgUmVnRXhwLCBzdHJpbmcsIG9yIGZ1bmN0aW9uIHdpdGggYSBjYWNoaW5nXG4gKiBzdHJhdGVneSB0byBhIHNpbmdsZXRvbiBSb3V0ZXIgaW5zdGFuY2UuXG4gKlxuICogVGhpcyBtZXRob2Qgd2lsbCBnZW5lcmF0ZSBhIFJvdXRlIGZvciB5b3UgaWYgbmVlZGVkIGFuZFxuICogY2FsbCB7QGxpbmsgd29ya2JveC1yb3V0aW5nLlJvdXRlciNyZWdpc3RlclJvdXRlfS5cbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cHxzdHJpbmd8d29ya2JveC1yb3V0aW5nLlJvdXRlfm1hdGNoQ2FsbGJhY2t8d29ya2JveC1yb3V0aW5nLlJvdXRlfSBjYXB0dXJlXG4gKiBJZiB0aGUgY2FwdHVyZSBwYXJhbSBpcyBhIGBSb3V0ZWAsIGFsbCBvdGhlciBhcmd1bWVudHMgd2lsbCBiZSBpZ25vcmVkLlxuICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBbaGFuZGxlcl0gQSBjYWxsYmFja1xuICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS4gVGhpcyBwYXJhbWV0ZXJcbiAqIGlzIHJlcXVpcmVkIGlmIGBjYXB0dXJlYCBpcyBub3QgYSBgUm91dGVgIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kPSdHRVQnXSBUaGUgSFRUUCBtZXRob2QgdG8gbWF0Y2ggdGhlIFJvdXRlXG4gKiBhZ2FpbnN0LlxuICogQHJldHVybiB7d29ya2JveC1yb3V0aW5nLlJvdXRlfSBUaGUgZ2VuZXJhdGVkIGBSb3V0ZWAuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcm91dGluZ1xuICovXG5mdW5jdGlvbiByZWdpc3RlclJvdXRlKGNhcHR1cmUsIGhhbmRsZXIsIG1ldGhvZCkge1xuICAgIGxldCByb3V0ZTtcbiAgICBpZiAodHlwZW9mIGNhcHR1cmUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IGNhcHR1cmVVcmwgPSBuZXcgVVJMKGNhcHR1cmUsIGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKCEoY2FwdHVyZS5zdGFydHNXaXRoKCcvJykgfHwgY2FwdHVyZS5zdGFydHNXaXRoKCdodHRwJykpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW52YWxpZC1zdHJpbmcnLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdjYXB0dXJlJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlIHdhbnQgdG8gY2hlY2sgaWYgRXhwcmVzcy1zdHlsZSB3aWxkY2FyZHMgYXJlIGluIHRoZSBwYXRobmFtZSBvbmx5LlxuICAgICAgICAgICAgLy8gVE9ETzogUmVtb3ZlIHRoaXMgbG9nIG1lc3NhZ2UgaW4gdjQuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVRvQ2hlY2sgPSBjYXB0dXJlLnN0YXJ0c1dpdGgoJ2h0dHAnKVxuICAgICAgICAgICAgICAgID8gY2FwdHVyZVVybC5wYXRobmFtZVxuICAgICAgICAgICAgICAgIDogY2FwdHVyZTtcbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAjcGFyYW1ldGVyc1xuICAgICAgICAgICAgY29uc3Qgd2lsZGNhcmRzID0gJ1sqOj8rXSc7XG4gICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChgJHt3aWxkY2FyZHN9YCkuZXhlYyh2YWx1ZVRvQ2hlY2spKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBUaGUgJyRjYXB0dXJlJyBwYXJhbWV0ZXIgY29udGFpbnMgYW4gRXhwcmVzcy1zdHlsZSB3aWxkY2FyZCBgICtcbiAgICAgICAgICAgICAgICAgICAgYGNoYXJhY3RlciAoJHt3aWxkY2FyZHN9KS4gU3RyaW5ncyBhcmUgbm93IGFsd2F5cyBpbnRlcnByZXRlZCBhcyBgICtcbiAgICAgICAgICAgICAgICAgICAgYGV4YWN0IG1hdGNoZXM7IHVzZSBhIFJlZ0V4cCBmb3IgcGFydGlhbCBvciB3aWxkY2FyZCBtYXRjaGVzLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hdGNoQ2FsbGJhY2sgPSAoeyB1cmwgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodXJsLnBhdGhuYW1lID09PSBjYXB0dXJlVXJsLnBhdGhuYW1lICYmXG4gICAgICAgICAgICAgICAgICAgIHVybC5vcmlnaW4gIT09IGNhcHR1cmVVcmwub3JpZ2luKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgJHtjYXB0dXJlfSBvbmx5IHBhcnRpYWxseSBtYXRjaGVzIHRoZSBjcm9zcy1vcmlnaW4gVVJMIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCR7dXJsLnRvU3RyaW5nKCl9LiBUaGlzIHJvdXRlIHdpbGwgb25seSBoYW5kbGUgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGlmIHRoZXkgbWF0Y2ggdGhlIGVudGlyZSBVUkwuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVybC5ocmVmID09PSBjYXB0dXJlVXJsLmhyZWY7XG4gICAgICAgIH07XG4gICAgICAgIC8vIElmIGBjYXB0dXJlYCBpcyBhIHN0cmluZyB0aGVuIGBoYW5kbGVyYCBhbmQgYG1ldGhvZGAgbXVzdCBiZSBwcmVzZW50LlxuICAgICAgICByb3V0ZSA9IG5ldyBSb3V0ZShtYXRjaENhbGxiYWNrLCBoYW5kbGVyLCBtZXRob2QpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjYXB0dXJlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIC8vIElmIGBjYXB0dXJlYCBpcyBhIGBSZWdFeHBgIHRoZW4gYGhhbmRsZXJgIGFuZCBgbWV0aG9kYCBtdXN0IGJlIHByZXNlbnQuXG4gICAgICAgIHJvdXRlID0gbmV3IFJlZ0V4cFJvdXRlKGNhcHR1cmUsIGhhbmRsZXIsIG1ldGhvZCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBjYXB0dXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIElmIGBjYXB0dXJlYCBpcyBhIGZ1bmN0aW9uIHRoZW4gYGhhbmRsZXJgIGFuZCBgbWV0aG9kYCBtdXN0IGJlIHByZXNlbnQuXG4gICAgICAgIHJvdXRlID0gbmV3IFJvdXRlKGNhcHR1cmUsIGhhbmRsZXIsIG1ldGhvZCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNhcHR1cmUgaW5zdGFuY2VvZiBSb3V0ZSkge1xuICAgICAgICByb3V0ZSA9IGNhcHR1cmU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCd1bnN1cHBvcnRlZC1yb3V0ZS10eXBlJywge1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICAgICAgcGFyYW1OYW1lOiAnY2FwdHVyZScsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBkZWZhdWx0Um91dGVyID0gZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyKCk7XG4gICAgZGVmYXVsdFJvdXRlci5yZWdpc3RlclJvdXRlKHJvdXRlKTtcbiAgICByZXR1cm4gcm91dGU7XG59XG5leHBvcnQgeyByZWdpc3RlclJvdXRlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlRGVmYXVsdFJvdXRlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBJZiBhIFJvdXRlIHRocm93cyBhbiBlcnJvciB3aGlsZSBoYW5kbGluZyBhIHJlcXVlc3QsIHRoaXMgYGhhbmRsZXJgXG4gKiB3aWxsIGJlIGNhbGxlZCBhbmQgZ2l2ZW4gYSBjaGFuY2UgdG8gcHJvdmlkZSBhIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXJvdXRpbmdcbiAqL1xuZnVuY3Rpb24gc2V0Q2F0Y2hIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBjb25zdCBkZWZhdWx0Um91dGVyID0gZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyKCk7XG4gICAgZGVmYXVsdFJvdXRlci5zZXRDYXRjaEhhbmRsZXIoaGFuZGxlcik7XG59XG5leHBvcnQgeyBzZXRDYXRjaEhhbmRsZXIgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGdldE9yQ3JlYXRlRGVmYXVsdFJvdXRlciB9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIERlZmluZSBhIGRlZmF1bHQgYGhhbmRsZXJgIHRoYXQncyBjYWxsZWQgd2hlbiBubyByb3V0ZXMgZXhwbGljaXRseVxuICogbWF0Y2ggdGhlIGluY29taW5nIHJlcXVlc3QuXG4gKlxuICogV2l0aG91dCBhIGRlZmF1bHQgaGFuZGxlciwgdW5tYXRjaGVkIHJlcXVlc3RzIHdpbGwgZ28gYWdhaW5zdCB0aGVcbiAqIG5ldHdvcmsgYXMgaWYgdGhlcmUgd2VyZSBubyBzZXJ2aWNlIHdvcmtlciBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXJvdXRpbmdcbiAqL1xuZnVuY3Rpb24gc2V0RGVmYXVsdEhhbmRsZXIoaGFuZGxlcikge1xuICAgIGNvbnN0IGRlZmF1bHRSb3V0ZXIgPSBnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIoKTtcbiAgICBkZWZhdWx0Um91dGVyLnNldERlZmF1bHRIYW5kbGVyKGhhbmRsZXIpO1xufVxuZXhwb3J0IHsgc2V0RGVmYXVsdEhhbmRsZXIgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBIVFRQIG1ldGhvZCwgJ0dFVCcsIHVzZWQgd2hlbiB0aGVyZSdzIG5vIHNwZWNpZmljIG1ldGhvZFxuICogY29uZmlndXJlZCBmb3IgYSByb3V0ZS5cbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0TWV0aG9kID0gJ0dFVCc7XG4vKipcbiAqIFRoZSBsaXN0IG9mIHZhbGlkIEhUVFAgbWV0aG9kcyBhc3NvY2lhdGVkIHdpdGggcmVxdWVzdHMgdGhhdCBjb3VsZCBiZSByb3V0ZWQuXG4gKlxuICogQHR5cGUge0FycmF5PHN0cmluZz59XG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkTWV0aG9kcyA9IFtcbiAgICAnREVMRVRFJyxcbiAgICAnR0VUJyxcbiAgICAnSEVBRCcsXG4gICAgJ1BBVENIJyxcbiAgICAnUE9TVCcsXG4gICAgJ1BVVCcsXG5dO1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vUm91dGVyLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xubGV0IGRlZmF1bHRSb3V0ZXI7XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIHNpbmdsZXRvbiBSb3V0ZXIgaW5zdGFuY2UgaWYgb25lIGRvZXMgbm90IGV4aXN0LiBJZiBvbmVcbiAqIGRvZXMgYWxyZWFkeSBleGlzdCwgdGhhdCBpbnN0YW5jZSBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHJldHVybiB7Um91dGVyfVxuICovXG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyID0gKCkgPT4ge1xuICAgIGlmICghZGVmYXVsdFJvdXRlcikge1xuICAgICAgICBkZWZhdWx0Um91dGVyID0gbmV3IFJvdXRlcigpO1xuICAgICAgICAvLyBUaGUgaGVscGVycyB0aGF0IHVzZSB0aGUgZGVmYXVsdCBSb3V0ZXIgYXNzdW1lIHRoZXNlIGxpc3RlbmVycyBleGlzdC5cbiAgICAgICAgZGVmYXVsdFJvdXRlci5hZGRGZXRjaExpc3RlbmVyKCk7XG4gICAgICAgIGRlZmF1bHRSb3V0ZXIuYWRkQ2FjaGVMaXN0ZW5lcigpO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFJvdXRlcjtcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCl8T2JqZWN0fSBoYW5kbGVyIEVpdGhlciBhIGZ1bmN0aW9uLCBvciBhbiBvYmplY3Qgd2l0aCBhXG4gKiAnaGFuZGxlJyBtZXRob2QuXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIGEgaGFuZGxlIG1ldGhvZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplSGFuZGxlciA9IChoYW5kbGVyKSA9PiB7XG4gICAgaWYgKGhhbmRsZXIgJiYgdHlwZW9mIGhhbmRsZXIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaGFzTWV0aG9kKGhhbmRsZXIsICdoYW5kbGUnLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGUnLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2hhbmRsZXInLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShoYW5kbGVyLCAnZnVuY3Rpb24nLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGUnLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2hhbmRsZXInLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgaGFuZGxlOiBoYW5kbGVyIH07XG4gICAgfVxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IFN0cmF0ZWd5IH0gZnJvbSAnLi9TdHJhdGVneS5qcyc7XG5pbXBvcnQgeyBtZXNzYWdlcyB9IGZyb20gJy4vdXRpbHMvbWVzc2FnZXMuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYSBbY2FjaGUtZmlyc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L2NhY2hpbmctc3RyYXRlZ2llcy1vdmVydmlldy8jY2FjaGUtZmlyc3QtZmFsbGluZy1iYWNrLXRvLW5ldHdvcmspXG4gKiByZXF1ZXN0IHN0cmF0ZWd5LlxuICpcbiAqIEEgY2FjaGUgZmlyc3Qgc3RyYXRlZ3kgaXMgdXNlZnVsIGZvciBhc3NldHMgdGhhdCBoYXZlIGJlZW4gcmV2aXNpb25lZCxcbiAqIHN1Y2ggYXMgVVJMcyBsaWtlIGAvc3R5bGVzL2V4YW1wbGUuYThmNWYxLmNzc2AsIHNpbmNlIHRoZXlcbiAqIGNhbiBiZSBjYWNoZWQgZm9yIGxvbmcgcGVyaW9kcyBvZiB0aW1lLlxuICpcbiAqIElmIHRoZSBuZXR3b3JrIHJlcXVlc3QgZmFpbHMsIGFuZCB0aGVyZSBpcyBubyBjYWNoZSBtYXRjaCwgdGhpcyB3aWxsIHRocm93XG4gKiBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgQ2FjaGVGaXJzdCBleHRlbmRzIFN0cmF0ZWd5IHtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IHJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICAgKiBAcGFyYW0ge3dvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9IGhhbmRsZXIgVGhlIGV2ZW50IHRoYXRcbiAgICAgKiAgICAgdHJpZ2dlcmVkIHRoZSByZXF1ZXN0LlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgICAqL1xuICAgIGFzeW5jIF9oYW5kbGUocmVxdWVzdCwgaGFuZGxlcikge1xuICAgICAgICBjb25zdCBsb2dzID0gW107XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdtYWtlUmVxdWVzdCcsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmNhY2hlTWF0Y2gocmVxdWVzdCk7XG4gICAgICAgIGxldCBlcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dzLnB1c2goYE5vIHJlc3BvbnNlIGZvdW5kIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nIGNhY2hlLiBgICtcbiAgICAgICAgICAgICAgICAgICAgYFdpbGwgcmVzcG9uZCB3aXRoIGEgbmV0d29yayByZXF1ZXN0LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuZmV0Y2hBbmRDYWNoZVB1dChyZXF1ZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBHb3QgcmVzcG9uc2UgZnJvbSBuZXR3b3JrLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBVbmFibGUgdG8gZ2V0IGEgcmVzcG9uc2UgZnJvbSB0aGUgbmV0d29yay5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ3MucHVzaChgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfScgY2FjaGUuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChtZXNzYWdlcy5zdHJhdGVneVN0YXJ0KHRoaXMuY29uc3RydWN0b3IubmFtZSwgcmVxdWVzdCkpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBsb2cgb2YgbG9ncykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2cobG9nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lc3NhZ2VzLnByaW50RmluYWxSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCduby1yZXNwb25zZScsIHsgdXJsOiByZXF1ZXN0LnVybCwgZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbn1cbmV4cG9ydCB7IENhY2hlRmlyc3QgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IFN0cmF0ZWd5IH0gZnJvbSAnLi9TdHJhdGVneS5qcyc7XG5pbXBvcnQgeyBtZXNzYWdlcyB9IGZyb20gJy4vdXRpbHMvbWVzc2FnZXMuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYSBbY2FjaGUtb25seV0oaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kb2NzL3dvcmtib3gvY2FjaGluZy1zdHJhdGVnaWVzLW92ZXJ2aWV3LyNjYWNoZS1vbmx5KVxuICogcmVxdWVzdCBzdHJhdGVneS5cbiAqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWZ1bCBpZiB5b3Ugd2FudCB0byB0YWtlIGFkdmFudGFnZSBvZiBhbnlcbiAqIFtXb3JrYm94IHBsdWdpbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L3VzaW5nLXBsdWdpbnMvKS5cbiAqXG4gKiBJZiB0aGVyZSBpcyBubyBjYWNoZSBtYXRjaCwgdGhpcyB3aWxsIHRocm93IGEgYFdvcmtib3hFcnJvcmAgZXhjZXB0aW9uLlxuICpcbiAqIEBleHRlbmRzIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneVxuICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBDYWNoZU9ubHkgZXh0ZW5kcyBTdHJhdGVneSB7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSByZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHt3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyIFRoZSBldmVudCB0aGF0XG4gICAgICogICAgIHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBfaGFuZGxlKHJlcXVlc3QsIGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ21ha2VSZXF1ZXN0JyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyZXF1ZXN0JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5jYWNoZU1hdGNoKHJlcXVlc3QpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCByZXF1ZXN0KSk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBGb3VuZCBhIGNhY2hlZCByZXNwb25zZSBpbiB0aGUgJyR7dGhpcy5jYWNoZU5hbWV9JyBgICsgYGNhY2hlLmApO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnByaW50RmluYWxSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBObyByZXNwb25zZSBmb3VuZCBpbiB0aGUgJyR7dGhpcy5jYWNoZU5hbWV9JyBjYWNoZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywgeyB1cmw6IHJlcXVlc3QudXJsIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG59XG5leHBvcnQgeyBDYWNoZU9ubHkgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IGNhY2hlT2tBbmRPcGFxdWVQbHVnaW4gfSBmcm9tICcuL3BsdWdpbnMvY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbi5qcyc7XG5pbXBvcnQgeyBTdHJhdGVneSB9IGZyb20gJy4vU3RyYXRlZ3kuanMnO1xuaW1wb3J0IHsgbWVzc2FnZXMgfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGFcbiAqIFtuZXR3b3JrIGZpcnN0XShodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RvY3Mvd29ya2JveC9jYWNoaW5nLXN0cmF0ZWdpZXMtb3ZlcnZpZXcvI25ldHdvcmstZmlyc3QtZmFsbGluZy1iYWNrLXRvLWNhY2hlKVxuICogcmVxdWVzdCBzdHJhdGVneS5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGlzIHN0cmF0ZWd5IHdpbGwgY2FjaGUgcmVzcG9uc2VzIHdpdGggYSAyMDAgc3RhdHVzIGNvZGUgYXNcbiAqIHdlbGwgYXMgW29wYXF1ZSByZXNwb25zZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L2NhY2hpbmctcmVzb3VyY2VzLWR1cmluZy1ydW50aW1lLyNvcGFxdWUtcmVzcG9uc2VzKS5cbiAqIE9wYXF1ZSByZXNwb25zZXMgYXJlIGFyZSBjcm9zcy1vcmlnaW4gcmVxdWVzdHMgd2hlcmUgdGhlIHJlc3BvbnNlIGRvZXNuJ3RcbiAqIHN1cHBvcnQgW0NPUlNdKGh0dHBzOi8vZW5hYmxlLWNvcnMub3JnLykuXG4gKlxuICogSWYgdGhlIG5ldHdvcmsgcmVxdWVzdCBmYWlscywgYW5kIHRoZXJlIGlzIG5vIGNhY2hlIG1hdGNoLCB0aGlzIHdpbGwgdGhyb3dcbiAqIGEgYFdvcmtib3hFcnJvcmAgZXhjZXB0aW9uLlxuICpcbiAqIEBleHRlbmRzIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneVxuICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBOZXR3b3JrRmlyc3QgZXh0ZW5kcyBTdHJhdGVneSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYWNoZU5hbWVdIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAgICoge0BsaW5rIHdvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnNdIFtQbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc31cbiAgICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmZldGNoT3B0aW9uc10gVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICAgKiBbYGluaXRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzKVxuICAgICAqIG9mIFtub24tbmF2aWdhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2KVxuICAgICAqIGBmZXRjaCgpYCByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm1hdGNoT3B0aW9uc10gW2BDYWNoZVF1ZXJ5T3B0aW9uc2BdKGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNkaWN0ZGVmLWNhY2hlcXVlcnlvcHRpb25zKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5uZXR3b3JrVGltZW91dFNlY29uZHNdIElmIHNldCwgYW55IG5ldHdvcmsgcmVxdWVzdHNcbiAgICAgKiB0aGF0IGZhaWwgdG8gcmVzcG9uZCB3aXRoaW4gdGhlIHRpbWVvdXQgd2lsbCBmYWxsYmFjayB0byB0aGUgY2FjaGUuXG4gICAgICpcbiAgICAgKiBUaGlzIG9wdGlvbiBjYW4gYmUgdXNlZCB0byBjb21iYXRcbiAgICAgKiBcIltsaWUtZmlde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvcGVyZm9ybWFuY2UvcG9vci1jb25uZWN0aXZpdHkvI2xpZS1maX1cIlxuICAgICAqIHNjZW5hcmlvcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIC8vIElmIHRoaXMgaW5zdGFuY2UgY29udGFpbnMgbm8gcGx1Z2lucyB3aXRoIGEgJ2NhY2hlV2lsbFVwZGF0ZScgY2FsbGJhY2ssXG4gICAgICAgIC8vIHByZXBlbmQgdGhlIGBjYWNoZU9rQW5kT3BhcXVlUGx1Z2luYCBwbHVnaW4gdG8gdGhlIHBsdWdpbnMgbGlzdC5cbiAgICAgICAgaWYgKCF0aGlzLnBsdWdpbnMuc29tZSgocCkgPT4gJ2NhY2hlV2lsbFVwZGF0ZScgaW4gcCkpIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2lucy51bnNoaWZ0KGNhY2hlT2tBbmRPcGFxdWVQbHVnaW4pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcyA9IG9wdGlvbnMubmV0d29ya1RpbWVvdXRTZWNvbmRzIHx8IDA7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZSh0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMsICdudW1iZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ25ldHdvcmtUaW1lb3V0U2Vjb25kcycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSByZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHt3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyIFRoZSBldmVudCB0aGF0XG4gICAgICogICAgIHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBfaGFuZGxlKHJlcXVlc3QsIGhhbmRsZXIpIHtcbiAgICAgICAgY29uc3QgbG9ncyA9IFtdO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnaGFuZGxlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdtYWtlUmVxdWVzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICBsZXQgdGltZW91dElkO1xuICAgICAgICBpZiAodGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzKSB7XG4gICAgICAgICAgICBjb25zdCB7IGlkLCBwcm9taXNlIH0gPSB0aGlzLl9nZXRUaW1lb3V0UHJvbWlzZSh7IHJlcXVlc3QsIGxvZ3MsIGhhbmRsZXIgfSk7XG4gICAgICAgICAgICB0aW1lb3V0SWQgPSBpZDtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV0d29ya1Byb21pc2UgPSB0aGlzLl9nZXROZXR3b3JrUHJvbWlzZSh7XG4gICAgICAgICAgICB0aW1lb3V0SWQsXG4gICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgbG9ncyxcbiAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgIH0pO1xuICAgICAgICBwcm9taXNlcy5wdXNoKG5ldHdvcmtQcm9taXNlKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLndhaXRVbnRpbCgoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgLy8gUHJvbWlzZS5yYWNlKCkgd2lsbCByZXNvbHZlIGFzIHNvb24gYXMgdGhlIGZpcnN0IHByb21pc2UgcmVzb2x2ZXMuXG4gICAgICAgICAgICByZXR1cm4gKChhd2FpdCBoYW5kbGVyLndhaXRVbnRpbChQcm9taXNlLnJhY2UocHJvbWlzZXMpKSkgfHxcbiAgICAgICAgICAgICAgICAvLyBJZiBQcm9taXNlLnJhY2UoKSByZXNvbHZlZCB3aXRoIG51bGwsIGl0IG1pZ2h0IGJlIGR1ZSB0byBhIG5ldHdvcmtcbiAgICAgICAgICAgICAgICAvLyB0aW1lb3V0ICsgYSBjYWNoZSBtaXNzLiBJZiB0aGF0IHdlcmUgdG8gaGFwcGVuLCB3ZSdkIHJhdGhlciB3YWl0IHVudGlsXG4gICAgICAgICAgICAgICAgLy8gdGhlIG5ldHdvcmtQcm9taXNlIHJlc29sdmVzIGluc3RlYWQgb2YgcmV0dXJuaW5nIG51bGwuXG4gICAgICAgICAgICAgICAgLy8gTm90ZSB0aGF0IGl0J3MgZmluZSB0byBhd2FpdCBhbiBhbHJlYWR5LXJlc29sdmVkIHByb21pc2UsIHNvIHdlIGRvbid0XG4gICAgICAgICAgICAgICAgLy8gaGF2ZSB0byBjaGVjayB0byBzZWUgaWYgaXQncyBzdGlsbCBcImluIGZsaWdodFwiLlxuICAgICAgICAgICAgICAgIChhd2FpdCBuZXR3b3JrUHJvbWlzZSkpO1xuICAgICAgICB9KSgpKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChtZXNzYWdlcy5zdHJhdGVneVN0YXJ0KHRoaXMuY29uc3RydWN0b3IubmFtZSwgcmVxdWVzdCkpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBsb2cgb2YgbG9ncykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2cobG9nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lc3NhZ2VzLnByaW50RmluYWxSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCduby1yZXNwb25zZScsIHsgdXJsOiByZXF1ZXN0LnVybCB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3RcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvcHRpb25zLmxvZ3MgQSByZWZlcmVuY2UgdG8gdGhlIGxvZ3MgYXJyYXlcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBvcHRpb25zLmV2ZW50XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9nZXRUaW1lb3V0UHJvbWlzZSh7IHJlcXVlc3QsIGxvZ3MsIGhhbmRsZXIsIH0pIHtcbiAgICAgICAgbGV0IHRpbWVvdXRJZDtcbiAgICAgICAgY29uc3QgdGltZW91dFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb25OZXR3b3JrVGltZW91dCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBsb2dzLnB1c2goYFRpbWluZyBvdXQgdGhlIG5ldHdvcmsgcmVzcG9uc2UgYXQgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHN9IHNlY29uZHMuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUoYXdhaXQgaGFuZGxlci5jYWNoZU1hdGNoKHJlcXVlc3QpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KG9uTmV0d29ya1RpbWVvdXQsIHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcyAqIDEwMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb21pc2U6IHRpbWVvdXRQcm9taXNlLFxuICAgICAgICAgICAgaWQ6IHRpbWVvdXRJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge251bWJlcnx1bmRlZmluZWR9IG9wdGlvbnMudGltZW91dElkXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3RcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvcHRpb25zLmxvZ3MgQSByZWZlcmVuY2UgdG8gdGhlIGxvZ3MgQXJyYXkuXG4gICAgICogQHBhcmFtIHtFdmVudH0gb3B0aW9ucy5ldmVudFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBfZ2V0TmV0d29ya1Byb21pc2UoeyB0aW1lb3V0SWQsIHJlcXVlc3QsIGxvZ3MsIGhhbmRsZXIsIH0pIHtcbiAgICAgICAgbGV0IGVycm9yO1xuICAgICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuZmV0Y2hBbmRDYWNoZVB1dChyZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZmV0Y2hFcnJvcikge1xuICAgICAgICAgICAgaWYgKGZldGNoRXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGVycm9yID0gZmV0Y2hFcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZW91dElkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBHb3QgcmVzcG9uc2UgZnJvbSBuZXR3b3JrLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBVbmFibGUgdG8gZ2V0IGEgcmVzcG9uc2UgZnJvbSB0aGUgbmV0d29yay4gV2lsbCByZXNwb25kIGAgK1xuICAgICAgICAgICAgICAgICAgICBgd2l0aCBhIGNhY2hlZCByZXNwb25zZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgfHwgIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuY2FjaGVNYXRjaChyZXF1ZXN0KTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ3MucHVzaChgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfSdgICsgYCBjYWNoZS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ3MucHVzaChgTm8gcmVzcG9uc2UgZm91bmQgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfScgY2FjaGUuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG59XG5leHBvcnQgeyBOZXR3b3JrRmlyc3QgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL3RpbWVvdXQuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBTdHJhdGVneSB9IGZyb20gJy4vU3RyYXRlZ3kuanMnO1xuaW1wb3J0IHsgbWVzc2FnZXMgfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGFcbiAqIFtuZXR3b3JrLW9ubHldKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L2NhY2hpbmctc3RyYXRlZ2llcy1vdmVydmlldy8jbmV0d29yay1vbmx5KVxuICogcmVxdWVzdCBzdHJhdGVneS5cbiAqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWZ1bCBpZiB5b3Ugd2FudCB0byB0YWtlIGFkdmFudGFnZSBvZiBhbnlcbiAqIFtXb3JrYm94IHBsdWdpbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L3VzaW5nLXBsdWdpbnMvKS5cbiAqXG4gKiBJZiB0aGUgbmV0d29yayByZXF1ZXN0IGZhaWxzLCB0aGlzIHdpbGwgdGhyb3cgYSBgV29ya2JveEVycm9yYCBleGNlcHRpb24uXG4gKlxuICogQGV4dGVuZHMgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5XG4gKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIE5ldHdvcmtPbmx5IGV4dGVuZHMgU3RyYXRlZ3kge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnNdIFtQbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc31cbiAgICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmZldGNoT3B0aW9uc10gVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICAgKiBbYGluaXRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzKVxuICAgICAqIG9mIFtub24tbmF2aWdhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2KVxuICAgICAqIGBmZXRjaCgpYCByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm5ldHdvcmtUaW1lb3V0U2Vjb25kc10gSWYgc2V0LCBhbnkgbmV0d29yayByZXF1ZXN0c1xuICAgICAqIHRoYXQgZmFpbCB0byByZXNwb25kIHdpdGhpbiB0aGUgdGltZW91dCB3aWxsIHJlc3VsdCBpbiBhIG5ldHdvcmsgZXJyb3IuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMgPSBvcHRpb25zLm5ldHdvcmtUaW1lb3V0U2Vjb25kcyB8fCAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IHJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICAgKiBAcGFyYW0ge3dvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9IGhhbmRsZXIgVGhlIGV2ZW50IHRoYXRcbiAgICAgKiAgICAgdHJpZ2dlcmVkIHRoZSByZXF1ZXN0LlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgICAqL1xuICAgIGFzeW5jIF9oYW5kbGUocmVxdWVzdCwgaGFuZGxlcikge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnX2hhbmRsZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgIGxldCByZXNwb25zZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gW1xuICAgICAgICAgICAgICAgIGhhbmRsZXIuZmV0Y2gocmVxdWVzdCksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgaWYgKHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRQcm9taXNlID0gdGltZW91dCh0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMgKiAxMDAwKTtcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRpbWVvdXRQcm9taXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgUHJvbWlzZS5yYWNlKHByb21pc2VzKTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRpbWVkIG91dCB0aGUgbmV0d29yayByZXNwb25zZSBhZnRlciBgICtcbiAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzfSBzZWNvbmRzLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQobWVzc2FnZXMuc3RyYXRlZ3lTdGFydCh0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHJlcXVlc3QpKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYEdvdCByZXNwb25zZSBmcm9tIG5ldHdvcmsuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBVbmFibGUgdG8gZ2V0IGEgcmVzcG9uc2UgZnJvbSB0aGUgbmV0d29yay5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lc3NhZ2VzLnByaW50RmluYWxSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCduby1yZXNwb25zZScsIHsgdXJsOiByZXF1ZXN0LnVybCwgZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbn1cbmV4cG9ydCB7IE5ldHdvcmtPbmx5IH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBjYWNoZU9rQW5kT3BhcXVlUGx1Z2luIH0gZnJvbSAnLi9wbHVnaW5zL2NhY2hlT2tBbmRPcGFxdWVQbHVnaW4uanMnO1xuaW1wb3J0IHsgU3RyYXRlZ3kgfSBmcm9tICcuL1N0cmF0ZWd5LmpzJztcbmltcG9ydCB7IG1lc3NhZ2VzIH0gZnJvbSAnLi91dGlscy9tZXNzYWdlcy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBhXG4gKiBbc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZV0oaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kb2NzL3dvcmtib3gvY2FjaGluZy1zdHJhdGVnaWVzLW92ZXJ2aWV3LyNzdGFsZS13aGlsZS1yZXZhbGlkYXRlKVxuICogcmVxdWVzdCBzdHJhdGVneS5cbiAqXG4gKiBSZXNvdXJjZXMgYXJlIHJlcXVlc3RlZCBmcm9tIGJvdGggdGhlIGNhY2hlIGFuZCB0aGUgbmV0d29yayBpbiBwYXJhbGxlbC5cbiAqIFRoZSBzdHJhdGVneSB3aWxsIHJlc3BvbmQgd2l0aCB0aGUgY2FjaGVkIHZlcnNpb24gaWYgYXZhaWxhYmxlLCBvdGhlcndpc2VcbiAqIHdhaXQgZm9yIHRoZSBuZXR3b3JrIHJlc3BvbnNlLiBUaGUgY2FjaGUgaXMgdXBkYXRlZCB3aXRoIHRoZSBuZXR3b3JrIHJlc3BvbnNlXG4gKiB3aXRoIGVhY2ggc3VjY2Vzc2Z1bCByZXF1ZXN0LlxuICpcbiAqIEJ5IGRlZmF1bHQsIHRoaXMgc3RyYXRlZ3kgd2lsbCBjYWNoZSByZXNwb25zZXMgd2l0aCBhIDIwMCBzdGF0dXMgY29kZSBhc1xuICogd2VsbCBhcyBbb3BhcXVlIHJlc3BvbnNlc10oaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kb2NzL3dvcmtib3gvY2FjaGluZy1yZXNvdXJjZXMtZHVyaW5nLXJ1bnRpbWUvI29wYXF1ZS1yZXNwb25zZXMpLlxuICogT3BhcXVlIHJlc3BvbnNlcyBhcmUgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIHdoZXJlIHRoZSByZXNwb25zZSBkb2Vzbid0XG4gKiBzdXBwb3J0IFtDT1JTXShodHRwczovL2VuYWJsZS1jb3JzLm9yZy8pLlxuICpcbiAqIElmIHRoZSBuZXR3b3JrIHJlcXVlc3QgZmFpbHMsIGFuZCB0aGVyZSBpcyBubyBjYWNoZSBtYXRjaCwgdGhpcyB3aWxsIHRocm93XG4gKiBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgU3RhbGVXaGlsZVJldmFsaWRhdGUgZXh0ZW5kcyBTdHJhdGVneSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYWNoZU5hbWVdIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAgICoge0BsaW5rIHdvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnNdIFtQbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc31cbiAgICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmZldGNoT3B0aW9uc10gVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICAgKiBbYGluaXRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzKVxuICAgICAqIG9mIFtub24tbmF2aWdhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2KVxuICAgICAqIGBmZXRjaCgpYCByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm1hdGNoT3B0aW9uc10gW2BDYWNoZVF1ZXJ5T3B0aW9uc2BdKGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNkaWN0ZGVmLWNhY2hlcXVlcnlvcHRpb25zKVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgLy8gSWYgdGhpcyBpbnN0YW5jZSBjb250YWlucyBubyBwbHVnaW5zIHdpdGggYSAnY2FjaGVXaWxsVXBkYXRlJyBjYWxsYmFjayxcbiAgICAgICAgLy8gcHJlcGVuZCB0aGUgYGNhY2hlT2tBbmRPcGFxdWVQbHVnaW5gIHBsdWdpbiB0byB0aGUgcGx1Z2lucyBsaXN0LlxuICAgICAgICBpZiAoIXRoaXMucGx1Z2lucy5zb21lKChwKSA9PiAnY2FjaGVXaWxsVXBkYXRlJyBpbiBwKSkge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW5zLnVuc2hpZnQoY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSByZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHt3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyIFRoZSBldmVudCB0aGF0XG4gICAgICogICAgIHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBfaGFuZGxlKHJlcXVlc3QsIGhhbmRsZXIpIHtcbiAgICAgICAgY29uc3QgbG9ncyA9IFtdO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnaGFuZGxlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyZXF1ZXN0JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZldGNoQW5kQ2FjaGVQcm9taXNlID0gaGFuZGxlci5mZXRjaEFuZENhY2hlUHV0KHJlcXVlc3QpLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIC8vIFN3YWxsb3cgdGhpcyBlcnJvciBiZWNhdXNlIGEgJ25vLXJlc3BvbnNlJyBlcnJvciB3aWxsIGJlIHRocm93biBpblxuICAgICAgICAgICAgLy8gbWFpbiBoYW5kbGVyIHJldHVybiBmbG93LiBUaGlzIHdpbGwgYmUgaW4gdGhlIGB3YWl0VW50aWwoKWAgZmxvdy5cbiAgICAgICAgfSk7XG4gICAgICAgIHZvaWQgaGFuZGxlci53YWl0VW50aWwoZmV0Y2hBbmRDYWNoZVByb21pc2UpO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmNhY2hlTWF0Y2gocmVxdWVzdCk7XG4gICAgICAgIGxldCBlcnJvcjtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ3MucHVzaChgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfSdgICtcbiAgICAgICAgICAgICAgICAgICAgYCBjYWNoZS4gV2lsbCB1cGRhdGUgd2l0aCB0aGUgbmV0d29yayByZXNwb25zZSBpbiB0aGUgYmFja2dyb3VuZC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBObyByZXNwb25zZSBmb3VuZCBpbiB0aGUgJyR7dGhpcy5jYWNoZU5hbWV9JyBjYWNoZS4gYCArXG4gICAgICAgICAgICAgICAgICAgIGBXaWxsIHdhaXQgZm9yIHRoZSBuZXR3b3JrIHJlc3BvbnNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBOT1RFKHBoaWxpcHdhbHRvbik6IFJlYWxseSBhbm5veWluZyB0aGF0IHdlIGhhdmUgdG8gdHlwZSBjYXN0IGhlcmUuXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yMDAwNlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gKGF3YWl0IGZldGNoQW5kQ2FjaGVQcm9taXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQobWVzc2FnZXMuc3RyYXRlZ3lTdGFydCh0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHJlcXVlc3QpKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbG9nIG9mIGxvZ3MpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGxvZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXNzYWdlcy5wcmludEZpbmFsUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7IHVybDogcmVxdWVzdC51cmwsIGVycm9yIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG59XG5leHBvcnQgeyBTdGFsZVdoaWxlUmV2YWxpZGF0ZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgY2FjaGVOYW1lcyB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgeyBTdHJhdGVneUhhbmRsZXIgfSBmcm9tICcuL1N0cmF0ZWd5SGFuZGxlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBbiBhYnN0cmFjdCBiYXNlIGNsYXNzIHRoYXQgYWxsIG90aGVyIHN0cmF0ZWd5IGNsYXNzZXMgbXVzdCBleHRlbmQgZnJvbTpcbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIFN0cmF0ZWd5IHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBzdHJhdGVneSBhbmQgc2V0cyBhbGwgZG9jdW1lbnRlZCBvcHRpb25cbiAgICAgKiBwcm9wZXJ0aWVzIGFzIHB1YmxpYyBpbnN0YW5jZSBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogTm90ZTogaWYgYSBjdXN0b20gc3RyYXRlZ3kgY2xhc3MgZXh0ZW5kcyB0aGUgYmFzZSBTdHJhdGVneSBjbGFzcyBhbmQgZG9lc1xuICAgICAqIG5vdCBuZWVkIG1vcmUgdGhhbiB0aGVzZSBwcm9wZXJ0aWVzLCBpdCBkb2VzIG5vdCBuZWVkIHRvIGRlZmluZSBpdHMgb3duXG4gICAgICogY29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhY2hlTmFtZV0gQ2FjaGUgbmFtZSB0byBzdG9yZSBhbmQgcmV0cmlldmVcbiAgICAgKiByZXF1ZXN0cy4gRGVmYXVsdHMgdG8gdGhlIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAgICoge0BsaW5rIHdvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnNdIFtQbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc31cbiAgICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmZldGNoT3B0aW9uc10gVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICAgKiBbYGluaXRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzKVxuICAgICAqIG9mIFtub24tbmF2aWdhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2KVxuICAgICAqIGBmZXRjaCgpYCByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm1hdGNoT3B0aW9uc10gVGhlXG4gICAgICogW2BDYWNoZVF1ZXJ5T3B0aW9uc2Bde0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNkaWN0ZGVmLWNhY2hlcXVlcnlvcHRpb25zfVxuICAgICAqIGZvciBhbnkgYGNhY2hlLm1hdGNoKClgIG9yIGBjYWNoZS5wdXQoKWAgY2FsbHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2FjaGUgbmFtZSB0byBzdG9yZSBhbmQgcmV0cmlldmVcbiAgICAgICAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIHRoZSBjYWNoZSBuYW1lcyBwcm92aWRlZCBieVxuICAgICAgICAgKiB7QGxpbmsgd29ya2JveC1jb3JlLmNhY2hlTmFtZXN9LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jYWNoZU5hbWUgPSBjYWNoZU5hbWVzLmdldFJ1bnRpbWVOYW1lKG9wdGlvbnMuY2FjaGVOYW1lKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBsaXN0XG4gICAgICAgICAqIFtQbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc31cbiAgICAgICAgICogdXNlZCBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8T2JqZWN0Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucGx1Z2lucyA9IG9wdGlvbnMucGx1Z2lucyB8fCBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAgICAgICAqIFtgaW5pdGBde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnN9XG4gICAgICAgICAqIG9mIGFsbCBmZXRjaCgpIHJlcXVlc3RzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZmV0Y2hPcHRpb25zID0gb3B0aW9ucy5mZXRjaE9wdGlvbnM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGVcbiAgICAgICAgICogW2BDYWNoZVF1ZXJ5T3B0aW9uc2Bde0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNkaWN0ZGVmLWNhY2hlcXVlcnlvcHRpb25zfVxuICAgICAgICAgKiBmb3IgYW55IGBjYWNoZS5tYXRjaCgpYCBvciBgY2FjaGUucHV0KClgIGNhbGxzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubWF0Y2hPcHRpb25zID0gb3B0aW9ucy5tYXRjaE9wdGlvbnM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm0gYSByZXF1ZXN0IHN0cmF0ZWd5IGFuZCByZXR1cm5zIGEgYFByb21pc2VgIHRoYXQgd2lsbCByZXNvbHZlIHdpdGhcbiAgICAgKiBhIGBSZXNwb25zZWAsIGludm9raW5nIGFsbCByZWxldmFudCBwbHVnaW4gY2FsbGJhY2tzLlxuICAgICAqXG4gICAgICogV2hlbiBhIHN0cmF0ZWd5IGluc3RhbmNlIGlzIHJlZ2lzdGVyZWQgd2l0aCBhIFdvcmtib3hcbiAgICAgKiB7QGxpbmsgd29ya2JveC1yb3V0aW5nLlJvdXRlfSwgdGhpcyBtZXRob2QgaXMgYXV0b21hdGljYWxseVxuICAgICAqIGNhbGxlZCB3aGVuIHRoZSByb3V0ZSBtYXRjaGVzLlxuICAgICAqXG4gICAgICogQWx0ZXJuYXRpdmVseSwgdGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgaW4gYSBzdGFuZGFsb25lIGBGZXRjaEV2ZW50YFxuICAgICAqIGxpc3RlbmVyIGJ5IHBhc3NpbmcgaXQgdG8gYGV2ZW50LnJlc3BvbmRXaXRoKClgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGZXRjaEV2ZW50fE9iamVjdH0gb3B0aW9ucyBBIGBGZXRjaEV2ZW50YCBvciBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgKiAgICAgcHJvcGVydGllcyBsaXN0ZWQgYmVsb3cuXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAgICAgKiAgICAgcmVxdWVzdC5cbiAgICAgKiBAcGFyYW0ge1VSTH0gW29wdGlvbnMudXJsXVxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnMucGFyYW1zXVxuICAgICAqL1xuICAgIGhhbmRsZShvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IFtyZXNwb25zZURvbmVdID0gdGhpcy5oYW5kbGVBbGwob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiByZXNwb25zZURvbmU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNpbWlsYXIgdG8ge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneX5oYW5kbGV9LCBidXRcbiAgICAgKiBpbnN0ZWFkIG9mIGp1c3QgcmV0dXJuaW5nIGEgYFByb21pc2VgIHRoYXQgcmVzb2x2ZXMgdG8gYSBgUmVzcG9uc2VgIGl0XG4gICAgICogaXQgd2lsbCByZXR1cm4gYW4gdHVwbGUgb2YgYFtyZXNwb25zZSwgZG9uZV1gIHByb21pc2VzLCB3aGVyZSB0aGUgZm9ybWVyXG4gICAgICogKGByZXNwb25zZWApIGlzIGVxdWl2YWxlbnQgdG8gd2hhdCBgaGFuZGxlKClgIHJldHVybnMsIGFuZCB0aGUgbGF0dGVyIGlzIGFcbiAgICAgKiBQcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uY2UgYW55IHByb21pc2VzIHRoYXQgd2VyZSBhZGRlZCB0b1xuICAgICAqIGBldmVudC53YWl0VW50aWwoKWAgYXMgcGFydCBvZiBwZXJmb3JtaW5nIHRoZSBzdHJhdGVneSBoYXZlIGNvbXBsZXRlZC5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gYXdhaXQgdGhlIGBkb25lYCBwcm9taXNlIHRvIGVuc3VyZSBhbnkgZXh0cmEgd29yayBwZXJmb3JtZWQgYnlcbiAgICAgKiB0aGUgc3RyYXRlZ3kgKHVzdWFsbHkgY2FjaGluZyByZXNwb25zZXMpIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ZldGNoRXZlbnR8T2JqZWN0fSBvcHRpb25zIEEgYEZldGNoRXZlbnRgIG9yIGFuIG9iamVjdCB3aXRoIHRoZVxuICAgICAqICAgICBwcm9wZXJ0aWVzIGxpc3RlZCBiZWxvdy5cbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBvcHRpb25zLnJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICAgKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gb3B0aW9ucy5ldmVudCBUaGUgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICAgICAqICAgICByZXF1ZXN0LlxuICAgICAqIEBwYXJhbSB7VVJMfSBbb3B0aW9ucy51cmxdXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9ucy5wYXJhbXNdXG4gICAgICogQHJldHVybiB7QXJyYXk8UHJvbWlzZT59IEEgdHVwbGUgb2YgW3Jlc3BvbnNlLCBkb25lXVxuICAgICAqICAgICBwcm9taXNlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGRldGVybWluZSB3aGVuIHRoZSByZXNwb25zZSByZXNvbHZlcyBhc1xuICAgICAqICAgICB3ZWxsIGFzIHdoZW4gdGhlIGhhbmRsZXIgaGFzIGNvbXBsZXRlZCBhbGwgaXRzIHdvcmsuXG4gICAgICovXG4gICAgaGFuZGxlQWxsKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gQWxsb3cgZm9yIGZsZXhpYmxlIG9wdGlvbnMgdG8gYmUgcGFzc2VkLlxuICAgICAgICBpZiAob3B0aW9ucyBpbnN0YW5jZW9mIEZldGNoRXZlbnQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgZXZlbnQ6IG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogb3B0aW9ucy5yZXF1ZXN0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBldmVudCA9IG9wdGlvbnMuZXZlbnQ7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0eXBlb2Ygb3B0aW9ucy5yZXF1ZXN0ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgPyBuZXcgUmVxdWVzdChvcHRpb25zLnJlcXVlc3QpXG4gICAgICAgICAgICA6IG9wdGlvbnMucmVxdWVzdDtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gJ3BhcmFtcycgaW4gb3B0aW9ucyA/IG9wdGlvbnMucGFyYW1zIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gbmV3IFN0cmF0ZWd5SGFuZGxlcih0aGlzLCB7IGV2ZW50LCByZXF1ZXN0LCBwYXJhbXMgfSk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRG9uZSA9IHRoaXMuX2dldFJlc3BvbnNlKGhhbmRsZXIsIHJlcXVlc3QsIGV2ZW50KTtcbiAgICAgICAgY29uc3QgaGFuZGxlckRvbmUgPSB0aGlzLl9hd2FpdENvbXBsZXRlKHJlc3BvbnNlRG9uZSwgaGFuZGxlciwgcmVxdWVzdCwgZXZlbnQpO1xuICAgICAgICAvLyBSZXR1cm4gYW4gYXJyYXkgb2YgcHJvbWlzZXMsIHN1aXRhYmxlIGZvciB1c2Ugd2l0aCBQcm9taXNlLmFsbCgpLlxuICAgICAgICByZXR1cm4gW3Jlc3BvbnNlRG9uZSwgaGFuZGxlckRvbmVdO1xuICAgIH1cbiAgICBhc3luYyBfZ2V0UmVzcG9uc2UoaGFuZGxlciwgcmVxdWVzdCwgZXZlbnQpIHtcbiAgICAgICAgYXdhaXQgaGFuZGxlci5ydW5DYWxsYmFja3MoJ2hhbmRsZXJXaWxsU3RhcnQnLCB7IGV2ZW50LCByZXF1ZXN0IH0pO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2hhbmRsZShyZXF1ZXN0LCBoYW5kbGVyKTtcbiAgICAgICAgICAgIC8vIFRoZSBcIm9mZmljaWFsXCIgU3RyYXRlZ3kgc3ViY2xhc3NlcyBhbGwgdGhyb3cgdGhpcyBlcnJvciBhdXRvbWF0aWNhbGx5LFxuICAgICAgICAgICAgLy8gYnV0IGluIGNhc2UgYSB0aGlyZC1wYXJ0eSBTdHJhdGVneSBkb2Vzbid0LCBlbnN1cmUgdGhhdCB3ZSBoYXZlIGFcbiAgICAgICAgICAgIC8vIGNvbnNpc3RlbnQgZmFpbHVyZSB3aGVuIHRoZXJlJ3Mgbm8gcmVzcG9uc2Ugb3IgYW4gZXJyb3IgcmVzcG9uc2UuXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlIHx8IHJlc3BvbnNlLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCduby1yZXNwb25zZScsIHsgdXJsOiByZXF1ZXN0LnVybCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBoYW5kbGVyLml0ZXJhdGVDYWxsYmFja3MoJ2hhbmRsZXJEaWRFcnJvcicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgY2FsbGJhY2soeyBlcnJvciwgZXZlbnQsIHJlcXVlc3QgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgV2hpbGUgcmVzcG9uZGluZyB0byAnJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9JywgYCArXG4gICAgICAgICAgICAgICAgICAgIGBhbiAke2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci50b1N0cmluZygpIDogJyd9IGVycm9yIG9jY3VycmVkLiBVc2luZyBhIGZhbGxiYWNrIHJlc3BvbnNlIHByb3ZpZGVkIGJ5IGAgK1xuICAgICAgICAgICAgICAgICAgICBgYSBoYW5kbGVyRGlkRXJyb3IgcGx1Z2luLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgaGFuZGxlci5pdGVyYXRlQ2FsbGJhY2tzKCdoYW5kbGVyV2lsbFJlc3BvbmQnKSkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBjYWxsYmFjayh7IGV2ZW50LCByZXF1ZXN0LCByZXNwb25zZSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIGFzeW5jIF9hd2FpdENvbXBsZXRlKHJlc3BvbnNlRG9uZSwgaGFuZGxlciwgcmVxdWVzdCwgZXZlbnQpIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlRG9uZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSBlcnJvcnMsIGFzIHJlc3BvbnNlIGVycm9ycyBzaG91bGQgYmUgY2F1Z2h0IHZpYSB0aGUgYHJlc3BvbnNlYFxuICAgICAgICAgICAgLy8gcHJvbWlzZSBhYm92ZS4gVGhlIGBkb25lYCBwcm9taXNlIHdpbGwgb25seSB0aHJvdyBmb3IgZXJyb3JzIGluXG4gICAgICAgICAgICAvLyBwcm9taXNlcyBwYXNzZWQgdG8gYGhhbmRsZXIud2FpdFVudGlsKClgLlxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBoYW5kbGVyLnJ1bkNhbGxiYWNrcygnaGFuZGxlckRpZFJlc3BvbmQnLCB7XG4gICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXdhaXQgaGFuZGxlci5kb25lV2FpdGluZygpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoICh3YWl0VW50aWxFcnJvcikge1xuICAgICAgICAgICAgaWYgKHdhaXRVbnRpbEVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IHdhaXRVbnRpbEVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGhhbmRsZXIucnVuQ2FsbGJhY2tzKCdoYW5kbGVyRGlkQ29tcGxldGUnLCB7XG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgfSk7XG4gICAgICAgIGhhbmRsZXIuZGVzdHJveSgpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IHsgU3RyYXRlZ3kgfTtcbi8qKlxuICogQ2xhc3NlcyBleHRlbmRpbmcgdGhlIGBTdHJhdGVneWAgYmFzZWQgY2xhc3Mgc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCxcbiAqIGFuZCBsZXZlcmFnZSB0aGUge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9XG4gKiBhcmcgdG8gcGVyZm9ybSBhbGwgZmV0Y2hpbmcgYW5kIGNhY2hlIGxvZ2ljLCB3aGljaCB3aWxsIGVuc3VyZSBhbGwgcmVsZXZhbnRcbiAqIGNhY2hlLCBjYWNoZSBvcHRpb25zLCBmZXRjaCBvcHRpb25zIGFuZCBwbHVnaW5zIGFyZSB1c2VkIChwZXIgdGhlIGN1cnJlbnRcbiAqIHN0cmF0ZWd5IGluc3RhbmNlKS5cbiAqXG4gKiBAbmFtZSBfaGFuZGxlXG4gKiBAaW5zdGFuY2VcbiAqIEBhYnN0cmFjdFxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1JlcXVlc3R9IHJlcXVlc3RcbiAqIEBwYXJhbSB7d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn0gaGFuZGxlclxuICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneVxuICovXG4iLCIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGNhY2hlTWF0Y2hJZ25vcmVQYXJhbXMgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVNYXRjaElnbm9yZVBhcmFtcy5qcyc7XG5pbXBvcnQgeyBEZWZlcnJlZCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9EZWZlcnJlZC5qcyc7XG5pbXBvcnQgeyBleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcyB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9leGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcy5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IHRpbWVvdXQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvdGltZW91dC5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5mdW5jdGlvbiB0b1JlcXVlc3QoaW5wdXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyA/IG5ldyBSZXF1ZXN0KGlucHV0KSA6IGlucHV0O1xufVxuLyoqXG4gKiBBIGNsYXNzIGNyZWF0ZWQgZXZlcnkgdGltZSBhIFN0cmF0ZWd5IGluc3RhbmNlIGluc3RhbmNlIGNhbGxzXG4gKiB7QGxpbmsgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5fmhhbmRsZX0gb3JcbiAqIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3l+aGFuZGxlQWxsfSB0aGF0IHdyYXBzIGFsbCBmZXRjaCBhbmRcbiAqIGNhY2hlIGFjdGlvbnMgYXJvdW5kIHBsdWdpbiBjYWxsYmFja3MgYW5kIGtlZXBzIHRyYWNrIG9mIHdoZW4gdGhlIHN0cmF0ZWd5XG4gKiBpcyBcImRvbmVcIiAoaS5lLiBhbGwgYWRkZWQgYGV2ZW50LndhaXRVbnRpbCgpYCBwcm9taXNlcyBoYXZlIHJlc29sdmVkKS5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIFN0cmF0ZWd5SGFuZGxlciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBhc3NvY2lhdGVkIHdpdGggdGhlIHBhc3NlZCBzdHJhdGVneSBhbmQgZXZlbnRcbiAgICAgKiB0aGF0J3MgaGFuZGxpbmcgdGhlIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBUaGUgY29uc3RydWN0b3IgYWxzbyBpbml0aWFsaXplcyB0aGUgc3RhdGUgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byBlYWNoIG9mXG4gICAgICogdGhlIHBsdWdpbnMgaGFuZGxpbmcgdGhpcyByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHt3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3l9IHN0cmF0ZWd5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBvcHRpb25zLnJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICAgKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gb3B0aW9ucy5ldmVudCBUaGUgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICAgICAqICAgICByZXF1ZXN0LlxuICAgICAqIEBwYXJhbSB7VVJMfSBbb3B0aW9ucy51cmxdXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9ucy5wYXJhbXNdIFRoZSByZXR1cm4gdmFsdWUgZnJvbSB0aGVcbiAgICAgKiAgICAge0BsaW5rIHdvcmtib3gtcm91dGluZ35tYXRjaENhbGxiYWNrfSAoaWYgYXBwbGljYWJsZSkuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc3RyYXRlZ3ksIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fY2FjaGVLZXlzID0ge307XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcmVxdWVzdCB0aGUgc3RyYXRlZ3kgaXMgcGVyZm9ybWluZyAocGFzc2VkIHRvIHRoZSBzdHJhdGVneSdzXG4gICAgICAgICAqIGBoYW5kbGUoKWAgb3IgYGhhbmRsZUFsbCgpYCBtZXRob2QpLlxuICAgICAgICAgKiBAbmFtZSByZXF1ZXN0XG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSB7UmVxdWVzdH1cbiAgICAgICAgICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJcbiAgICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgcmVxdWVzdC5cbiAgICAgICAgICogQG5hbWUgZXZlbnRcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlIHtFeHRlbmRhYmxlRXZlbnR9XG4gICAgICAgICAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyXG4gICAgICAgICAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBgVVJMYCBpbnN0YW5jZSBvZiBgcmVxdWVzdC51cmxgIChpZiBwYXNzZWQgdG8gdGhlIHN0cmF0ZWd5J3NcbiAgICAgICAgICogYGhhbmRsZSgpYCBvciBgaGFuZGxlQWxsKClgIG1ldGhvZCkuXG4gICAgICAgICAqIE5vdGU6IHRoZSBgdXJsYCBwYXJhbSB3aWxsIGJlIHByZXNlbnQgaWYgdGhlIHN0cmF0ZWd5IHdhcyBpbnZva2VkXG4gICAgICAgICAqIGZyb20gYSB3b3JrYm94IGBSb3V0ZWAgb2JqZWN0LlxuICAgICAgICAgKiBAbmFtZSB1cmxcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlIHtVUkx8dW5kZWZpbmVkfVxuICAgICAgICAgKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlclxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYHBhcmFtYCB2YWx1ZSAoaWYgcGFzc2VkIHRvIHRoZSBzdHJhdGVneSdzXG4gICAgICAgICAqIGBoYW5kbGUoKWAgb3IgYGhhbmRsZUFsbCgpYCBtZXRob2QpLlxuICAgICAgICAgKiBOb3RlOiB0aGUgYHBhcmFtYCBwYXJhbSB3aWxsIGJlIHByZXNlbnQgaWYgdGhlIHN0cmF0ZWd5IHdhcyBpbnZva2VkXG4gICAgICAgICAqIGZyb20gYSB3b3JrYm94IGBSb3V0ZWAgb2JqZWN0IGFuZCB0aGVcbiAgICAgICAgICoge0BsaW5rIHdvcmtib3gtcm91dGluZ35tYXRjaENhbGxiYWNrfSByZXR1cm5lZFxuICAgICAgICAgKiBhIHRydXRoeSB2YWx1ZSAoaXQgd2lsbCBiZSB0aGF0IHZhbHVlKS5cbiAgICAgICAgICogQG5hbWUgcGFyYW1zXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSB7Knx1bmRlZmluZWR9XG4gICAgICAgICAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyXG4gICAgICAgICAqL1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2Uob3B0aW9ucy5ldmVudCwgRXh0ZW5kYWJsZUV2ZW50LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnU3RyYXRlZ3lIYW5kbGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdvcHRpb25zLmV2ZW50JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZXZlbnQgPSBvcHRpb25zLmV2ZW50O1xuICAgICAgICB0aGlzLl9zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICAgICAgICB0aGlzLl9oYW5kbGVyRGVmZXJyZWQgPSBuZXcgRGVmZXJyZWQoKTtcbiAgICAgICAgdGhpcy5fZXh0ZW5kTGlmZXRpbWVQcm9taXNlcyA9IFtdO1xuICAgICAgICAvLyBDb3B5IHRoZSBwbHVnaW5zIGxpc3QgKHNpbmNlIGl0J3MgbXV0YWJsZSBvbiB0aGUgc3RyYXRlZ3kpLFxuICAgICAgICAvLyBzbyBhbnkgbXV0YXRpb25zIGRvbid0IGFmZmVjdCB0aGlzIGhhbmRsZXIgaW5zdGFuY2UuXG4gICAgICAgIHRoaXMuX3BsdWdpbnMgPSBbLi4uc3RyYXRlZ3kucGx1Z2luc107XG4gICAgICAgIHRoaXMuX3BsdWdpblN0YXRlTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiB0aGlzLl9wbHVnaW5zKSB7XG4gICAgICAgICAgICB0aGlzLl9wbHVnaW5TdGF0ZU1hcC5zZXQocGx1Z2luLCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ldmVudC53YWl0VW50aWwodGhpcy5faGFuZGxlckRlZmVycmVkLnByb21pc2UpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGZXRjaGVzIGEgZ2l2ZW4gcmVxdWVzdCAoYW5kIGludm9rZXMgYW55IGFwcGxpY2FibGUgcGx1Z2luIGNhbGxiYWNrXG4gICAgICogbWV0aG9kcykgdXNpbmcgdGhlIGBmZXRjaE9wdGlvbnNgIChmb3Igbm9uLW5hdmlnYXRpb24gcmVxdWVzdHMpIGFuZFxuICAgICAqIGBwbHVnaW5zYCBkZWZpbmVkIG9uIHRoZSBgU3RyYXRlZ3lgIG9iamVjdC5cbiAgICAgKlxuICAgICAqIFRoZSBmb2xsb3dpbmcgcGx1Z2luIGxpZmVjeWNsZSBtZXRob2RzIGFyZSBpbnZva2VkIHdoZW4gdXNpbmcgdGhpcyBtZXRob2Q6XG4gICAgICogLSBgcmVxdWVzdFdpbGxGZXRjaCgpYFxuICAgICAqIC0gYGZldGNoRGlkU3VjY2VlZCgpYFxuICAgICAqIC0gYGZldGNoRGlkRmFpbCgpYFxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gaW5wdXQgVGhlIFVSTCBvciByZXF1ZXN0IHRvIGZldGNoLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgICAqL1xuICAgIGFzeW5jIGZldGNoKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgZXZlbnQgfSA9IHRoaXM7XG4gICAgICAgIGxldCByZXF1ZXN0ID0gdG9SZXF1ZXN0KGlucHV0KTtcbiAgICAgICAgaWYgKHJlcXVlc3QubW9kZSA9PT0gJ25hdmlnYXRlJyAmJlxuICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBGZXRjaEV2ZW50ICYmXG4gICAgICAgICAgICBldmVudC5wcmVsb2FkUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlID0gKGF3YWl0IGV2ZW50LnByZWxvYWRSZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAocG9zc2libGVQcmVsb2FkUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBVc2luZyBhIHByZWxvYWRlZCBuYXZpZ2F0aW9uIHJlc3BvbnNlIGZvciBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAnJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9J2ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zc2libGVQcmVsb2FkUmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBmZXRjaERpZEZhaWwgcGx1Z2luLCB3ZSBuZWVkIHRvIHNhdmUgYSBjbG9uZSBvZiB0aGVcbiAgICAgICAgLy8gb3JpZ2luYWwgcmVxdWVzdCBiZWZvcmUgaXQncyBlaXRoZXIgbW9kaWZpZWQgYnkgYSByZXF1ZXN0V2lsbEZldGNoXG4gICAgICAgIC8vIHBsdWdpbiBvciBiZWZvcmUgdGhlIG9yaWdpbmFsIHJlcXVlc3QncyBib2R5IGlzIGNvbnN1bWVkIHZpYSBmZXRjaCgpLlxuICAgICAgICBjb25zdCBvcmlnaW5hbFJlcXVlc3QgPSB0aGlzLmhhc0NhbGxiYWNrKCdmZXRjaERpZEZhaWwnKVxuICAgICAgICAgICAgPyByZXF1ZXN0LmNsb25lKClcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2Igb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdyZXF1ZXN0V2lsbEZldGNoJykpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0ID0gYXdhaXQgY2IoeyByZXF1ZXN0OiByZXF1ZXN0LmNsb25lKCksIGV2ZW50IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ3BsdWdpbi1lcnJvci1yZXF1ZXN0LXdpbGwtZmV0Y2gnLCB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93bkVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHJlcXVlc3QgY2FuIGJlIGFsdGVyZWQgYnkgcGx1Z2lucyB3aXRoIGByZXF1ZXN0V2lsbEZldGNoYCBtYWtpbmdcbiAgICAgICAgLy8gdGhlIG9yaWdpbmFsIHJlcXVlc3QgKG1vc3QgbGlrZWx5IGZyb20gYSBgZmV0Y2hgIGV2ZW50KSBkaWZmZXJlbnRcbiAgICAgICAgLy8gZnJvbSB0aGUgUmVxdWVzdCB3ZSBtYWtlLiBQYXNzIGJvdGggdG8gYGZldGNoRGlkRmFpbGAgdG8gYWlkIGRlYnVnZ2luZy5cbiAgICAgICAgY29uc3QgcGx1Z2luRmlsdGVyZWRSZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGZldGNoUmVzcG9uc2U7XG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2XG4gICAgICAgICAgICBmZXRjaFJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCwgcmVxdWVzdC5tb2RlID09PSAnbmF2aWdhdGUnID8gdW5kZWZpbmVkIDogdGhpcy5fc3RyYXRlZ3kuZmV0Y2hPcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBOZXR3b3JrIHJlcXVlc3QgZm9yIGAgK1xuICAgICAgICAgICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfScgcmV0dXJuZWQgYSByZXNwb25zZSB3aXRoIGAgK1xuICAgICAgICAgICAgICAgICAgICBgc3RhdHVzICcke2ZldGNoUmVzcG9uc2Uuc3RhdHVzfScuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcygnZmV0Y2hEaWRTdWNjZWVkJykpIHtcbiAgICAgICAgICAgICAgICBmZXRjaFJlc3BvbnNlID0gYXdhaXQgY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcGx1Z2luRmlsdGVyZWRSZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogZmV0Y2hSZXNwb25zZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmZXRjaFJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBOZXR3b3JrIHJlcXVlc3QgZm9yIGAgK1xuICAgICAgICAgICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfScgdGhyZXcgYW4gZXJyb3IuYCwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYG9yaWdpbmFsUmVxdWVzdGAgd2lsbCBvbmx5IGV4aXN0IGlmIGEgYGZldGNoRGlkRmFpbGAgY2FsbGJhY2tcbiAgICAgICAgICAgIC8vIGlzIGJlaW5nIHVzZWQgKHNlZSBhYm92ZSkuXG4gICAgICAgICAgICBpZiAob3JpZ2luYWxSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5ydW5DYWxsYmFja3MoJ2ZldGNoRGlkRmFpbCcsIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxSZXF1ZXN0OiBvcmlnaW5hbFJlcXVlc3QuY2xvbmUoKSxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcGx1Z2luRmlsdGVyZWRSZXF1ZXN0LmNsb25lKCksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxscyBgdGhpcy5mZXRjaCgpYCBhbmQgKGluIHRoZSBiYWNrZ3JvdW5kKSBydW5zIGB0aGlzLmNhY2hlUHV0KClgIG9uXG4gICAgICogdGhlIHJlc3BvbnNlIGdlbmVyYXRlZCBieSBgdGhpcy5mZXRjaCgpYC5cbiAgICAgKlxuICAgICAqIFRoZSBjYWxsIHRvIGB0aGlzLmNhY2hlUHV0KClgIGF1dG9tYXRpY2FsbHkgaW52b2tlcyBgdGhpcy53YWl0VW50aWwoKWAsXG4gICAgICogc28geW91IGRvIG5vdCBoYXZlIHRvIG1hbnVhbGx5IGNhbGwgYHdhaXRVbnRpbCgpYCBvbiB0aGUgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBpbnB1dCBUaGUgcmVxdWVzdCBvciBVUkwgdG8gZmV0Y2ggYW5kIGNhY2hlLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgICAqL1xuICAgIGFzeW5jIGZldGNoQW5kQ2FjaGVQdXQoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmZldGNoKGlucHV0KTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VDbG9uZSA9IHJlc3BvbnNlLmNsb25lKCk7XG4gICAgICAgIHZvaWQgdGhpcy53YWl0VW50aWwodGhpcy5jYWNoZVB1dChpbnB1dCwgcmVzcG9uc2VDbG9uZSkpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1hdGNoZXMgYSByZXF1ZXN0IGZyb20gdGhlIGNhY2hlIChhbmQgaW52b2tlcyBhbnkgYXBwbGljYWJsZSBwbHVnaW5cbiAgICAgKiBjYWxsYmFjayBtZXRob2RzKSB1c2luZyB0aGUgYGNhY2hlTmFtZWAsIGBtYXRjaE9wdGlvbnNgLCBhbmQgYHBsdWdpbnNgXG4gICAgICogZGVmaW5lZCBvbiB0aGUgc3RyYXRlZ3kgb2JqZWN0LlxuICAgICAqXG4gICAgICogVGhlIGZvbGxvd2luZyBwbHVnaW4gbGlmZWN5Y2xlIG1ldGhvZHMgYXJlIGludm9rZWQgd2hlbiB1c2luZyB0aGlzIG1ldGhvZDpcbiAgICAgKiAtIGNhY2hlS2V5V2lsbEJ5VXNlZCgpXG4gICAgICogLSBjYWNoZWRSZXNwb25zZVdpbGxCeVVzZWQoKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30ga2V5IFRoZSBSZXF1ZXN0IG9yIFVSTCB0byB1c2UgYXMgdGhlIGNhY2hlIGtleS5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlfHVuZGVmaW5lZD59IEEgbWF0Y2hpbmcgcmVzcG9uc2UsIGlmIGZvdW5kLlxuICAgICAqL1xuICAgIGFzeW5jIGNhY2hlTWF0Y2goa2V5KSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0b1JlcXVlc3Qoa2V5KTtcbiAgICAgICAgbGV0IGNhY2hlZFJlc3BvbnNlO1xuICAgICAgICBjb25zdCB7IGNhY2hlTmFtZSwgbWF0Y2hPcHRpb25zIH0gPSB0aGlzLl9zdHJhdGVneTtcbiAgICAgICAgY29uc3QgZWZmZWN0aXZlUmVxdWVzdCA9IGF3YWl0IHRoaXMuZ2V0Q2FjaGVLZXkocmVxdWVzdCwgJ3JlYWQnKTtcbiAgICAgICAgY29uc3QgbXVsdGlNYXRjaE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG1hdGNoT3B0aW9ucyksIHsgY2FjaGVOYW1lIH0pO1xuICAgICAgICBjYWNoZWRSZXNwb25zZSA9IGF3YWl0IGNhY2hlcy5tYXRjaChlZmZlY3RpdmVSZXF1ZXN0LCBtdWx0aU1hdGNoT3B0aW9ucyk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYEZvdW5kIGEgY2FjaGVkIHJlc3BvbnNlIGluICcke2NhY2hlTmFtZX0nLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBObyBjYWNoZWQgcmVzcG9uc2UgZm91bmQgaW4gJyR7Y2FjaGVOYW1lfScuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2NhY2hlZFJlc3BvbnNlV2lsbEJlVXNlZCcpKSB7XG4gICAgICAgICAgICBjYWNoZWRSZXNwb25zZSA9XG4gICAgICAgICAgICAgICAgKGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBtYXRjaE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlZFJlc3BvbnNlLFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiBlZmZlY3RpdmVSZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgICAgICAgICAgICB9KSkgfHwgdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWNoZWRSZXNwb25zZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHV0cyBhIHJlcXVlc3QvcmVzcG9uc2UgcGFpciBpbiB0aGUgY2FjaGUgKGFuZCBpbnZva2VzIGFueSBhcHBsaWNhYmxlXG4gICAgICogcGx1Z2luIGNhbGxiYWNrIG1ldGhvZHMpIHVzaW5nIHRoZSBgY2FjaGVOYW1lYCBhbmQgYHBsdWdpbnNgIGRlZmluZWQgb25cbiAgICAgKiB0aGUgc3RyYXRlZ3kgb2JqZWN0LlxuICAgICAqXG4gICAgICogVGhlIGZvbGxvd2luZyBwbHVnaW4gbGlmZWN5Y2xlIG1ldGhvZHMgYXJlIGludm9rZWQgd2hlbiB1c2luZyB0aGlzIG1ldGhvZDpcbiAgICAgKiAtIGNhY2hlS2V5V2lsbEJ5VXNlZCgpXG4gICAgICogLSBjYWNoZVdpbGxVcGRhdGUoKVxuICAgICAqIC0gY2FjaGVEaWRVcGRhdGUoKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30ga2V5IFRoZSByZXF1ZXN0IG9yIFVSTCB0byB1c2UgYXMgdGhlIGNhY2hlIGtleS5cbiAgICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNwb25zZSBUaGUgcmVzcG9uc2UgdG8gY2FjaGUuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn0gYGZhbHNlYCBpZiBhIGNhY2hlV2lsbFVwZGF0ZSBjYXVzZWQgdGhlIHJlc3BvbnNlXG4gICAgICogbm90IGJlIGNhY2hlZCwgYW5kIGB0cnVlYCBvdGhlcndpc2UuXG4gICAgICovXG4gICAgYXN5bmMgY2FjaGVQdXQoa2V5LCByZXNwb25zZSkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdG9SZXF1ZXN0KGtleSk7XG4gICAgICAgIC8vIFJ1biBpbiB0aGUgbmV4dCB0YXNrIHRvIGF2b2lkIGJsb2NraW5nIG90aGVyIGNhY2hlIHJlYWRzLlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdzNjL1NlcnZpY2VXb3JrZXIvaXNzdWVzLzEzOTdcbiAgICAgICAgYXdhaXQgdGltZW91dCgwKTtcbiAgICAgICAgY29uc3QgZWZmZWN0aXZlUmVxdWVzdCA9IGF3YWl0IHRoaXMuZ2V0Q2FjaGVLZXkocmVxdWVzdCwgJ3dyaXRlJyk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoZWZmZWN0aXZlUmVxdWVzdC5tZXRob2QgJiYgZWZmZWN0aXZlUmVxdWVzdC5tZXRob2QgIT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignYXR0ZW1wdC10by1jYWNoZS1ub24tZ2V0LXJlcXVlc3QnLCB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogZ2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGVmZmVjdGl2ZVJlcXVlc3QubWV0aG9kLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjgxOFxuICAgICAgICAgICAgY29uc3QgdmFyeSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdWYXJ5Jyk7XG4gICAgICAgICAgICBpZiAodmFyeSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgVGhlIHJlc3BvbnNlIGZvciAke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0gYCArXG4gICAgICAgICAgICAgICAgICAgIGBoYXMgYSAnVmFyeTogJHt2YXJ5fScgaGVhZGVyLiBgICtcbiAgICAgICAgICAgICAgICAgICAgYENvbnNpZGVyIHNldHRpbmcgdGhlIHtpZ25vcmVWYXJ5OiB0cnVlfSBvcHRpb24gb24geW91ciBzdHJhdGVneSBgICtcbiAgICAgICAgICAgICAgICAgICAgYHRvIGVuc3VyZSBjYWNoZSBtYXRjaGluZyBhbmQgZGVsZXRpb24gd29ya3MgYXMgZXhwZWN0ZWQuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoYENhbm5vdCBjYWNoZSBub24tZXhpc3RlbnQgcmVzcG9uc2UgZm9yIGAgK1xuICAgICAgICAgICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpfScuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdjYWNoZS1wdXQtd2l0aC1uby1yZXNwb25zZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlVG9DYWNoZSA9IGF3YWl0IHRoaXMuX2Vuc3VyZVJlc3BvbnNlU2FmZVRvQ2FjaGUocmVzcG9uc2UpO1xuICAgICAgICBpZiAoIXJlc3BvbnNlVG9DYWNoZSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYFJlc3BvbnNlICcke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0nIGAgK1xuICAgICAgICAgICAgICAgICAgICBgd2lsbCBub3QgYmUgY2FjaGVkLmAsIHJlc3BvbnNlVG9DYWNoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBjYWNoZU5hbWUsIG1hdGNoT3B0aW9ucyB9ID0gdGhpcy5fc3RyYXRlZ3k7XG4gICAgICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgc2VsZi5jYWNoZXMub3BlbihjYWNoZU5hbWUpO1xuICAgICAgICBjb25zdCBoYXNDYWNoZVVwZGF0ZUNhbGxiYWNrID0gdGhpcy5oYXNDYWxsYmFjaygnY2FjaGVEaWRVcGRhdGUnKTtcbiAgICAgICAgY29uc3Qgb2xkUmVzcG9uc2UgPSBoYXNDYWNoZVVwZGF0ZUNhbGxiYWNrXG4gICAgICAgICAgICA/IGF3YWl0IGNhY2hlTWF0Y2hJZ25vcmVQYXJhbXMoXG4gICAgICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IHRoZSBgX19XQl9SRVZJU0lPTl9fYCBwYXJhbSBpcyBhIHByZWNhY2hpbmdcbiAgICAgICAgICAgIC8vIGZlYXR1cmUuIENvbnNpZGVyIGludG8gd2F5cyB0byBvbmx5IGFkZCB0aGlzIGJlaGF2aW9yIGlmIHVzaW5nXG4gICAgICAgICAgICAvLyBwcmVjYWNoaW5nLlxuICAgICAgICAgICAgY2FjaGUsIGVmZmVjdGl2ZVJlcXVlc3QuY2xvbmUoKSwgWydfX1dCX1JFVklTSU9OX18nXSwgbWF0Y2hPcHRpb25zKVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBVcGRhdGluZyB0aGUgJyR7Y2FjaGVOYW1lfScgY2FjaGUgd2l0aCBhIG5ldyBSZXNwb25zZSBgICtcbiAgICAgICAgICAgICAgICBgZm9yICR7Z2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgY2FjaGUucHV0KGVmZmVjdGl2ZVJlcXVlc3QsIGhhc0NhY2hlVXBkYXRlQ2FsbGJhY2sgPyByZXNwb25zZVRvQ2FjaGUuY2xvbmUoKSA6IHJlc3BvbnNlVG9DYWNoZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NRXhjZXB0aW9uI2V4Y2VwdGlvbi1RdW90YUV4Y2VlZGVkRXJyb3JcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2NhY2hlRGlkVXBkYXRlJykpIHtcbiAgICAgICAgICAgIGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICBjYWNoZU5hbWUsXG4gICAgICAgICAgICAgICAgb2xkUmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgbmV3UmVzcG9uc2U6IHJlc3BvbnNlVG9DYWNoZS5jbG9uZSgpLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IGVmZmVjdGl2ZVJlcXVlc3QsXG4gICAgICAgICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHRoZSBsaXN0IG9mIHBsdWdpbnMgZm9yIHRoZSBgY2FjaGVLZXlXaWxsQmVVc2VkYCBjYWxsYmFjaywgYW5kXG4gICAgICogZXhlY3V0ZXMgYW55IG9mIHRob3NlIGNhbGxiYWNrcyBmb3VuZCBpbiBzZXF1ZW5jZS4gVGhlIGZpbmFsIGBSZXF1ZXN0YFxuICAgICAqIG9iamVjdCByZXR1cm5lZCBieSB0aGUgbGFzdCBwbHVnaW4gaXMgdHJlYXRlZCBhcyB0aGUgY2FjaGUga2V5IGZvciBjYWNoZVxuICAgICAqIHJlYWRzIGFuZC9vciB3cml0ZXMuIElmIG5vIGBjYWNoZUtleVdpbGxCZVVzZWRgIHBsdWdpbiBjYWxsYmFja3MgaGF2ZVxuICAgICAqIGJlZW4gcmVnaXN0ZXJlZCwgdGhlIHBhc3NlZCByZXF1ZXN0IGlzIHJldHVybmVkIHVubW9kaWZpZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxdWVzdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXF1ZXN0Pn1cbiAgICAgKi9cbiAgICBhc3luYyBnZXRDYWNoZUtleShyZXF1ZXN0LCBtb2RlKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke3JlcXVlc3QudXJsfSB8ICR7bW9kZX1gO1xuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlS2V5c1trZXldKSB7XG4gICAgICAgICAgICBsZXQgZWZmZWN0aXZlUmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcygnY2FjaGVLZXlXaWxsQmVVc2VkJykpIHtcbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVSZXF1ZXN0ID0gdG9SZXF1ZXN0KGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogZWZmZWN0aXZlUmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIC8vIHBhcmFtcyBoYXMgYSB0eXBlIGFueSBjYW4ndCBjaGFuZ2UgcmlnaHQgbm93LlxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMucGFyYW1zLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY2FjaGVLZXlzW2tleV0gPSBlZmZlY3RpdmVSZXF1ZXN0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZUtleXNba2V5XTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBzdHJhdGVneSBoYXMgYXQgbGVhc3Qgb25lIHBsdWdpbiB3aXRoIHRoZSBnaXZlblxuICAgICAqIGNhbGxiYWNrLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNhbGxiYWNrIHRvIGNoZWNrIGZvci5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGhhc0NhbGxiYWNrKG5hbWUpIHtcbiAgICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgdGhpcy5fc3RyYXRlZ3kucGx1Z2lucykge1xuICAgICAgICAgICAgaWYgKG5hbWUgaW4gcGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSdW5zIGFsbCBwbHVnaW4gY2FsbGJhY2tzIG1hdGNoaW5nIHRoZSBnaXZlbiBuYW1lLCBpbiBvcmRlciwgcGFzc2luZyB0aGVcbiAgICAgKiBnaXZlbiBwYXJhbSBvYmplY3QgKG1lcmdlZCBpdGggdGhlIGN1cnJlbnQgcGx1Z2luIHN0YXRlKSBhcyB0aGUgb25seVxuICAgICAqIGFyZ3VtZW50LlxuICAgICAqXG4gICAgICogTm90ZTogc2luY2UgdGhpcyBtZXRob2QgcnVucyBhbGwgcGx1Z2lucywgaXQncyBub3Qgc3VpdGFibGUgZm9yIGNhc2VzXG4gICAgICogd2hlcmUgdGhlIHJldHVybiB2YWx1ZSBvZiBhIGNhbGxiYWNrIG5lZWRzIHRvIGJlIGFwcGxpZWQgcHJpb3IgdG8gY2FsbGluZ1xuICAgICAqIHRoZSBuZXh0IGNhbGxiYWNrLiBTZWVcbiAgICAgKiB7QGxpbmsgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlciNpdGVyYXRlQ2FsbGJhY2tzfVxuICAgICAqIGJlbG93IGZvciBob3cgdG8gaGFuZGxlIHRoYXQgY2FzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjYWxsYmFjayB0byBydW4gd2l0aGluIGVhY2ggcGx1Z2luLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbSBUaGUgb2JqZWN0IHRvIHBhc3MgYXMgdGhlIGZpcnN0IChhbmQgb25seSkgcGFyYW1cbiAgICAgKiAgICAgd2hlbiBleGVjdXRpbmcgZWFjaCBjYWxsYmFjay4gVGhpcyBvYmplY3Qgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGVcbiAgICAgKiAgICAgY3VycmVudCBwbHVnaW4gc3RhdGUgcHJpb3IgdG8gY2FsbGJhY2sgZXhlY3V0aW9uLlxuICAgICAqL1xuICAgIGFzeW5jIHJ1bkNhbGxiYWNrcyhuYW1lLCBwYXJhbSkge1xuICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcyhuYW1lKSkge1xuICAgICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBub3Qgc3VyZSB3aHkgYGFueWAgaXMgbmVlZGVkLiBJdCBzZWVtcyBsaWtlXG4gICAgICAgICAgICAvLyB0aGlzIHNob3VsZCB3b3JrIHdpdGggYGFzIFdvcmtib3hQbHVnaW5DYWxsYmFja1BhcmFtW0NdYC5cbiAgICAgICAgICAgIGF3YWl0IGNhbGxiYWNrKHBhcmFtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBY2NlcHRzIGEgY2FsbGJhY2sgYW5kIHJldHVybnMgYW4gaXRlcmFibGUgb2YgbWF0Y2hpbmcgcGx1Z2luIGNhbGxiYWNrcyxcbiAgICAgKiB3aGVyZSBlYWNoIGNhbGxiYWNrIGlzIHdyYXBwZWQgd2l0aCB0aGUgY3VycmVudCBoYW5kbGVyIHN0YXRlIChpLmUuIHdoZW5cbiAgICAgKiB5b3UgY2FsbCBlYWNoIGNhbGxiYWNrLCB3aGF0ZXZlciBvYmplY3QgcGFyYW1ldGVyIHlvdSBwYXNzIGl0IHdpbGxcbiAgICAgKiBiZSBtZXJnZWQgd2l0aCB0aGUgcGx1Z2luJ3MgY3VycmVudCBzdGF0ZSkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBmbyB0aGUgY2FsbGJhY2sgdG8gcnVuXG4gICAgICogQHJldHVybiB7QXJyYXk8RnVuY3Rpb24+fVxuICAgICAqL1xuICAgICppdGVyYXRlQ2FsbGJhY2tzKG5hbWUpIHtcbiAgICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgdGhpcy5fc3RyYXRlZ3kucGx1Z2lucykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwbHVnaW5bbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX3BsdWdpblN0YXRlTWFwLmdldChwbHVnaW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlZnVsQ2FsbGJhY2sgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVmdWxQYXJhbSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcGFyYW0pLCB7IHN0YXRlIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IG5vdCBzdXJlIHdoeSBgYW55YCBpcyBuZWVkZWQuIEl0IHNlZW1zIGxpa2VcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBzaG91bGQgd29yayB3aXRoIGBhcyBXb3JrYm94UGx1Z2luQ2FsbGJhY2tQYXJhbVtDXWAuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwbHVnaW5bbmFtZV0oc3RhdGVmdWxQYXJhbSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB5aWVsZCBzdGF0ZWZ1bENhbGxiYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBwcm9taXNlIHRvIHRoZVxuICAgICAqIFtleHRlbmQgbGlmZXRpbWUgcHJvbWlzZXNde0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNleHRlbmRhYmxlZXZlbnQtZXh0ZW5kLWxpZmV0aW1lLXByb21pc2VzfVxuICAgICAqIG9mIHRoZSBldmVudCBldmVudCBhc3NvY2lhdGVkIHdpdGggdGhlIHJlcXVlc3QgYmVpbmcgaGFuZGxlZCAodXN1YWxseSBhXG4gICAgICogYEZldGNoRXZlbnRgKS5cbiAgICAgKlxuICAgICAqIE5vdGU6IHlvdSBjYW4gYXdhaXRcbiAgICAgKiB7QGxpbmsgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn5kb25lV2FpdGluZ31cbiAgICAgKiB0byBrbm93IHdoZW4gYWxsIGFkZGVkIHByb21pc2VzIGhhdmUgc2V0dGxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UHJvbWlzZX0gcHJvbWlzZSBBIHByb21pc2UgdG8gYWRkIHRvIHRoZSBleHRlbmQgbGlmZXRpbWUgcHJvbWlzZXNcbiAgICAgKiAgICAgb2YgdGhlIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIHRoZSByZXF1ZXN0LlxuICAgICAqL1xuICAgIHdhaXRVbnRpbChwcm9taXNlKSB7XG4gICAgICAgIHRoaXMuX2V4dGVuZExpZmV0aW1lUHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgb25jZSBhbGwgcHJvbWlzZXMgcGFzc2VkIHRvXG4gICAgICoge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ+d2FpdFVudGlsfVxuICAgICAqIGhhdmUgc2V0dGxlZC5cbiAgICAgKlxuICAgICAqIE5vdGU6IGFueSB3b3JrIGRvbmUgYWZ0ZXIgYGRvbmVXYWl0aW5nKClgIHNldHRsZXMgc2hvdWxkIGJlIG1hbnVhbGx5XG4gICAgICogcGFzc2VkIHRvIGFuIGV2ZW50J3MgYHdhaXRVbnRpbCgpYCBtZXRob2QgKG5vdCB0aGlzIGhhbmRsZXInc1xuICAgICAqIGB3YWl0VW50aWwoKWAgbWV0aG9kKSwgb3RoZXJ3aXNlIHRoZSBzZXJ2aWNlIHdvcmtlciB0aHJlYWQgbXkgYmUga2lsbGVkXG4gICAgICogcHJpb3IgdG8geW91ciB3b3JrIGNvbXBsZXRpbmcuXG4gICAgICovXG4gICAgYXN5bmMgZG9uZVdhaXRpbmcoKSB7XG4gICAgICAgIGxldCBwcm9taXNlO1xuICAgICAgICB3aGlsZSAoKHByb21pc2UgPSB0aGlzLl9leHRlbmRMaWZldGltZVByb21pc2VzLnNoaWZ0KCkpKSB7XG4gICAgICAgICAgICBhd2FpdCBwcm9taXNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0b3BzIHJ1bm5pbmcgdGhlIHN0cmF0ZWd5IGFuZCBpbW1lZGlhdGVseSByZXNvbHZlcyBhbnkgcGVuZGluZ1xuICAgICAqIGB3YWl0VW50aWwoKWAgcHJvbWlzZXMuXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlckRlZmVycmVkLnJlc29sdmUobnVsbCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgY2FsbCBjYWNoZVdpbGxVcGRhdGUgb24gdGhlIGF2YWlsYWJsZSBwbHVnaW5zIChvciB1c2VcbiAgICAgKiBzdGF0dXMgPT09IDIwMCkgdG8gZGV0ZXJtaW5lIGlmIHRoZSBSZXNwb25zZSBpcyBzYWZlIGFuZCB2YWxpZCB0byBjYWNoZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0XG4gICAgICogQHBhcmFtIHtSZXNwb25zZX0gb3B0aW9ucy5yZXNwb25zZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2V8dW5kZWZpbmVkPn1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgX2Vuc3VyZVJlc3BvbnNlU2FmZVRvQ2FjaGUocmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlVG9DYWNoZSA9IHJlc3BvbnNlO1xuICAgICAgICBsZXQgcGx1Z2luc1VzZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2NhY2hlV2lsbFVwZGF0ZScpKSB7XG4gICAgICAgICAgICByZXNwb25zZVRvQ2FjaGUgPVxuICAgICAgICAgICAgICAgIChhd2FpdCBjYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHRoaXMucmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlVG9DYWNoZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgICAgICAgICAgfSkpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHBsdWdpbnNVc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2VUb0NhY2hlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwbHVnaW5zVXNlZCkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlVG9DYWNoZSAmJiByZXNwb25zZVRvQ2FjaGUuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZVRvQ2FjaGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlVG9DYWNoZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlVG9DYWNoZS5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIud2FybihgVGhlIHJlc3BvbnNlIGZvciAnJHt0aGlzLnJlcXVlc3QudXJsfScgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBpcyBhbiBvcGFxdWUgcmVzcG9uc2UuIFRoZSBjYWNoaW5nIHN0cmF0ZWd5IHRoYXQgeW91J3JlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdXNpbmcgd2lsbCBub3QgY2FjaGUgb3BhcXVlIHJlc3BvbnNlcyBieSBkZWZhdWx0LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBUaGUgcmVzcG9uc2UgZm9yICcke3RoaXMucmVxdWVzdC51cmx9JyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHJldHVybmVkIGEgc3RhdHVzIGNvZGUgb2YgJyR7cmVzcG9uc2Uuc3RhdHVzfScgYW5kIHdvbid0IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYmUgY2FjaGVkIGFzIGEgcmVzdWx0LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZVRvQ2FjaGU7XG4gICAgfVxufVxuZXhwb3J0IHsgU3RyYXRlZ3lIYW5kbGVyIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIEB0cy1pZ25vcmVcbnRyeSB7XG4gICAgc2VsZlsnd29ya2JveDpzdHJhdGVnaWVzOjYuNS4zJ10gJiYgXygpO1xufVxuY2F0Y2ggKGUpIHsgfVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgQ2FjaGVGaXJzdCB9IGZyb20gJy4vQ2FjaGVGaXJzdC5qcyc7XG5pbXBvcnQgeyBDYWNoZU9ubHkgfSBmcm9tICcuL0NhY2hlT25seS5qcyc7XG5pbXBvcnQgeyBOZXR3b3JrRmlyc3QgfSBmcm9tICcuL05ldHdvcmtGaXJzdC5qcyc7XG5pbXBvcnQgeyBOZXR3b3JrT25seSB9IGZyb20gJy4vTmV0d29ya09ubHkuanMnO1xuaW1wb3J0IHsgU3RhbGVXaGlsZVJldmFsaWRhdGUgfSBmcm9tICcuL1N0YWxlV2hpbGVSZXZhbGlkYXRlLmpzJztcbmltcG9ydCB7IFN0cmF0ZWd5IH0gZnJvbSAnLi9TdHJhdGVneS5qcyc7XG5pbXBvcnQgeyBTdHJhdGVneUhhbmRsZXIgfSBmcm9tICcuL1N0cmF0ZWd5SGFuZGxlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBUaGVyZSBhcmUgY29tbW9uIGNhY2hpbmcgc3RyYXRlZ2llcyB0aGF0IG1vc3Qgc2VydmljZSB3b3JrZXJzIHdpbGwgbmVlZFxuICogYW5kIHVzZS4gVGhpcyBtb2R1bGUgcHJvdmlkZXMgc2ltcGxlIGltcGxlbWVudGF0aW9ucyBvZiB0aGVzZSBzdHJhdGVnaWVzLlxuICpcbiAqIEBtb2R1bGUgd29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmV4cG9ydCB7IENhY2hlRmlyc3QsIENhY2hlT25seSwgTmV0d29ya0ZpcnN0LCBOZXR3b3JrT25seSwgU3RhbGVXaGlsZVJldmFsaWRhdGUsIFN0cmF0ZWd5LCBTdHJhdGVneUhhbmRsZXIsIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmV4cG9ydCBjb25zdCBjYWNoZU9rQW5kT3BhcXVlUGx1Z2luID0ge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSB2YWxpZCByZXNwb25zZSAodG8gYWxsb3cgY2FjaGluZykgaWYgdGhlIHN0YXR1cyBpcyAyMDAgKE9LKSBvclxuICAgICAqIDAgKG9wYXF1ZSkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7UmVzcG9uc2V9IG9wdGlvbnMucmVzcG9uc2VcbiAgICAgKiBAcmV0dXJuIHtSZXNwb25zZXxudWxsfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjYWNoZVdpbGxVcGRhdGU6IGFzeW5jICh7IHJlc3BvbnNlIH0pID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmV4cG9ydCBjb25zdCBtZXNzYWdlcyA9IHtcbiAgICBzdHJhdGVneVN0YXJ0OiAoc3RyYXRlZ3lOYW1lLCByZXF1ZXN0KSA9PiBgVXNpbmcgJHtzdHJhdGVneU5hbWV9IHRvIHJlc3BvbmQgdG8gJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfSdgLFxuICAgIHByaW50RmluYWxSZXNwb25zZTogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IHRoZSBmaW5hbCByZXNwb25zZSBoZXJlLmApO1xuICAgICAgICAgICAgbG9nZ2VyLmxvZyhyZXNwb25zZSB8fCAnW05vIHJlc3BvbnNlIHJldHVybmVkXScpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXguanMnOyIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXguanMnOyIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXguanMnOyIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXguanMnOyIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXguanMnOyIsImltcG9ydCB7IHcgYXMgd3JhcCwgciBhcyByZXBsYWNlVHJhcHMgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcbmV4cG9ydCB7IHUgYXMgdW53cmFwLCB3IGFzIHdyYXAgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcblxuLyoqXG4gKiBPcGVuIGEgZGF0YWJhc2UuXG4gKlxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZGF0YWJhc2UuXG4gKiBAcGFyYW0gdmVyc2lvbiBTY2hlbWEgdmVyc2lvbi5cbiAqIEBwYXJhbSBjYWxsYmFja3MgQWRkaXRpb25hbCBjYWxsYmFja3MuXG4gKi9cbmZ1bmN0aW9uIG9wZW5EQihuYW1lLCB2ZXJzaW9uLCB7IGJsb2NrZWQsIHVwZ3JhZGUsIGJsb2NraW5nLCB0ZXJtaW5hdGVkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihuYW1lLCB2ZXJzaW9uKTtcbiAgICBjb25zdCBvcGVuUHJvbWlzZSA9IHdyYXAocmVxdWVzdCk7XG4gICAgaWYgKHVwZ3JhZGUpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCd1cGdyYWRlbmVlZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB1cGdyYWRlKHdyYXAocmVxdWVzdC5yZXN1bHQpLCBldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCB3cmFwKHJlcXVlc3QudHJhbnNhY3Rpb24pLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYmxvY2tlZCkge1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoZXZlbnQpID0+IGJsb2NrZWQoXG4gICAgICAgIC8vIENhc3RpbmcgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC1ET00tbGliLWdlbmVyYXRvci9wdWxsLzE0MDVcbiAgICAgICAgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgZXZlbnQpKTtcbiAgICB9XG4gICAgb3BlblByb21pc2VcbiAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgIGlmICh0ZXJtaW5hdGVkKVxuICAgICAgICAgICAgZGIuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoKSA9PiB0ZXJtaW5hdGVkKCkpO1xuICAgICAgICBpZiAoYmxvY2tpbmcpIHtcbiAgICAgICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ3ZlcnNpb25jaGFuZ2UnLCAoZXZlbnQpID0+IGJsb2NraW5nKGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIGV2ZW50KSk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB9KTtcbiAgICByZXR1cm4gb3BlblByb21pc2U7XG59XG4vKipcbiAqIERlbGV0ZSBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICovXG5mdW5jdGlvbiBkZWxldGVEQihuYW1lLCB7IGJsb2NrZWQgfSA9IHt9KSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShuYW1lKTtcbiAgICBpZiAoYmxvY2tlZCkge1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoZXZlbnQpID0+IGJsb2NrZWQoXG4gICAgICAgIC8vIENhc3RpbmcgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC1ET00tbGliLWdlbmVyYXRvci9wdWxsLzE0MDVcbiAgICAgICAgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyYXAocmVxdWVzdCkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xufVxuXG5jb25zdCByZWFkTWV0aG9kcyA9IFsnZ2V0JywgJ2dldEtleScsICdnZXRBbGwnLCAnZ2V0QWxsS2V5cycsICdjb3VudCddO1xuY29uc3Qgd3JpdGVNZXRob2RzID0gWydwdXQnLCAnYWRkJywgJ2RlbGV0ZScsICdjbGVhciddO1xuY29uc3QgY2FjaGVkTWV0aG9kcyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHtcbiAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBJREJEYXRhYmFzZSAmJlxuICAgICAgICAhKHByb3AgaW4gdGFyZ2V0KSAmJlxuICAgICAgICB0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApKVxuICAgICAgICByZXR1cm4gY2FjaGVkTWV0aG9kcy5nZXQocHJvcCk7XG4gICAgY29uc3QgdGFyZ2V0RnVuY05hbWUgPSBwcm9wLnJlcGxhY2UoL0Zyb21JbmRleCQvLCAnJyk7XG4gICAgY29uc3QgdXNlSW5kZXggPSBwcm9wICE9PSB0YXJnZXRGdW5jTmFtZTtcbiAgICBjb25zdCBpc1dyaXRlID0gd3JpdGVNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKTtcbiAgICBpZiAoXG4gICAgLy8gQmFpbCBpZiB0aGUgdGFyZ2V0IGRvZXNuJ3QgZXhpc3Qgb24gdGhlIHRhcmdldC4gRWcsIGdldEFsbCBpc24ndCBpbiBFZGdlLlxuICAgICEodGFyZ2V0RnVuY05hbWUgaW4gKHVzZUluZGV4ID8gSURCSW5kZXggOiBJREJPYmplY3RTdG9yZSkucHJvdG90eXBlKSB8fFxuICAgICAgICAhKGlzV3JpdGUgfHwgcmVhZE1ldGhvZHMuaW5jbHVkZXModGFyZ2V0RnVuY05hbWUpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1ldGhvZCA9IGFzeW5jIGZ1bmN0aW9uIChzdG9yZU5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gaXNXcml0ZSA/ICdyZWFkd3JpdGUnIDogdW5kZWZpbmVkIGd6aXBwcyBiZXR0ZXIsIGJ1dCBmYWlscyBpbiBFZGdlIDooXG4gICAgICAgIGNvbnN0IHR4ID0gdGhpcy50cmFuc2FjdGlvbihzdG9yZU5hbWUsIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6ICdyZWFkb25seScpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdHguc3RvcmU7XG4gICAgICAgIGlmICh1c2VJbmRleClcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5pbmRleChhcmdzLnNoaWZ0KCkpO1xuICAgICAgICAvLyBNdXN0IHJlamVjdCBpZiBvcCByZWplY3RzLlxuICAgICAgICAvLyBJZiBpdCdzIGEgd3JpdGUgb3BlcmF0aW9uLCBtdXN0IHJlamVjdCBpZiB0eC5kb25lIHJlamVjdHMuXG4gICAgICAgIC8vIE11c3QgcmVqZWN0IHdpdGggb3AgcmVqZWN0aW9uIGZpcnN0LlxuICAgICAgICAvLyBNdXN0IHJlc29sdmUgd2l0aCBvcCB2YWx1ZS5cbiAgICAgICAgLy8gTXVzdCBoYW5kbGUgYm90aCBwcm9taXNlcyAobm8gdW5oYW5kbGVkIHJlamVjdGlvbnMpXG4gICAgICAgIHJldHVybiAoYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGFyZ2V0W3RhcmdldEZ1bmNOYW1lXSguLi5hcmdzKSxcbiAgICAgICAgICAgIGlzV3JpdGUgJiYgdHguZG9uZSxcbiAgICAgICAgXSkpWzBdO1xuICAgIH07XG4gICAgY2FjaGVkTWV0aG9kcy5zZXQocHJvcCwgbWV0aG9kKTtcbiAgICByZXR1cm4gbWV0aG9kO1xufVxucmVwbGFjZVRyYXBzKChvbGRUcmFwcykgPT4gKHtcbiAgICAuLi5vbGRUcmFwcyxcbiAgICBnZXQ6ICh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSA9PiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlciksXG4gICAgaGFzOiAodGFyZ2V0LCBwcm9wKSA9PiAhIWdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHx8IG9sZFRyYXBzLmhhcyh0YXJnZXQsIHByb3ApLFxufSkpO1xuXG5leHBvcnQgeyBkZWxldGVEQiwgb3BlbkRCIH07XG4iLCJjb25zdCBpbnN0YW5jZU9mQW55ID0gKG9iamVjdCwgY29uc3RydWN0b3JzKSA9PiBjb25zdHJ1Y3RvcnMuc29tZSgoYykgPT4gb2JqZWN0IGluc3RhbmNlb2YgYyk7XG5cbmxldCBpZGJQcm94eWFibGVUeXBlcztcbmxldCBjdXJzb3JBZHZhbmNlTWV0aG9kcztcbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0SWRiUHJveHlhYmxlVHlwZXMoKSB7XG4gICAgcmV0dXJuIChpZGJQcm94eWFibGVUeXBlcyB8fFxuICAgICAgICAoaWRiUHJveHlhYmxlVHlwZXMgPSBbXG4gICAgICAgICAgICBJREJEYXRhYmFzZSxcbiAgICAgICAgICAgIElEQk9iamVjdFN0b3JlLFxuICAgICAgICAgICAgSURCSW5kZXgsXG4gICAgICAgICAgICBJREJDdXJzb3IsXG4gICAgICAgICAgICBJREJUcmFuc2FjdGlvbixcbiAgICAgICAgXSkpO1xufVxuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpIHtcbiAgICByZXR1cm4gKGN1cnNvckFkdmFuY2VNZXRob2RzIHx8XG4gICAgICAgIChjdXJzb3JBZHZhbmNlTWV0aG9kcyA9IFtcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuYWR2YW5jZSxcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWUsXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlUHJpbWFyeUtleSxcbiAgICAgICAgXSkpO1xufVxuY29uc3QgY3Vyc29yUmVxdWVzdE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2FjdGlvbkRvbmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgICAgICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUod3JhcChyZXF1ZXN0LnJlc3VsdCkpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICB9KTtcbiAgICBwcm9taXNlXG4gICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICAvLyBTaW5jZSBjdXJzb3JpbmcgcmV1c2VzIHRoZSBJREJSZXF1ZXN0ICgqc2lnaCopLCB3ZSBjYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsXG4gICAgICAgIC8vIChzZWUgd3JhcEZ1bmN0aW9uKS5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCQ3Vyc29yKSB7XG4gICAgICAgICAgICBjdXJzb3JSZXF1ZXN0TWFwLnNldCh2YWx1ZSwgcmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2F0Y2hpbmcgdG8gYXZvaWQgXCJVbmNhdWdodCBQcm9taXNlIGV4Y2VwdGlvbnNcIlxuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIC8vIFRoaXMgbWFwcGluZyBleGlzdHMgaW4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlIGJ1dCBkb2Vzbid0IGRvZXNuJ3QgZXhpc3QgaW4gdHJhbnNmb3JtQ2FjaGUuIFRoaXNcbiAgICAvLyBpcyBiZWNhdXNlIHdlIGNyZWF0ZSBtYW55IHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdC5cbiAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KHByb21pc2UsIHJlcXVlc3QpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuZnVuY3Rpb24gY2FjaGVEb25lUHJvbWlzZUZvclRyYW5zYWN0aW9uKHR4KSB7XG4gICAgLy8gRWFybHkgYmFpbCBpZiB3ZSd2ZSBhbHJlYWR5IGNyZWF0ZWQgYSBkb25lIHByb21pc2UgZm9yIHRoaXMgdHJhbnNhY3Rpb24uXG4gICAgaWYgKHRyYW5zYWN0aW9uRG9uZU1hcC5oYXModHgpKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgZG9uZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QodHguZXJyb3IgfHwgbmV3IERPTUV4Y2VwdGlvbignQWJvcnRFcnJvcicsICdBYm9ydEVycm9yJykpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGVycm9yKTtcbiAgICB9KTtcbiAgICAvLyBDYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsLlxuICAgIHRyYW5zYWN0aW9uRG9uZU1hcC5zZXQodHgsIGRvbmUpO1xufVxubGV0IGlkYlByb3h5VHJhcHMgPSB7XG4gICAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciB0cmFuc2FjdGlvbi5kb25lLlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdkb25lJylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb25Eb25lTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgLy8gUG9seWZpbGwgZm9yIG9iamVjdFN0b3JlTmFtZXMgYmVjYXVzZSBvZiBFZGdlLlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdvYmplY3RTdG9yZU5hbWVzJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQub2JqZWN0U3RvcmVOYW1lcyB8fCB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHR4LnN0b3JlIHJldHVybiB0aGUgb25seSBzdG9yZSBpbiB0aGUgdHJhbnNhY3Rpb24sIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBhcmUgbWFueS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3RvcmUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgOiByZWNlaXZlci5vYmplY3RTdG9yZShyZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFbHNlIHRyYW5zZm9ybSB3aGF0ZXZlciB3ZSBnZXQgYmFjay5cbiAgICAgICAgcmV0dXJuIHdyYXAodGFyZ2V0W3Byb3BdKTtcbiAgICB9LFxuICAgIHNldCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uICYmXG4gICAgICAgICAgICAocHJvcCA9PT0gJ2RvbmUnIHx8IHByb3AgPT09ICdzdG9yZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQ7XG4gICAgfSxcbn07XG5mdW5jdGlvbiByZXBsYWNlVHJhcHMoY2FsbGJhY2spIHtcbiAgICBpZGJQcm94eVRyYXBzID0gY2FsbGJhY2soaWRiUHJveHlUcmFwcyk7XG59XG5mdW5jdGlvbiB3cmFwRnVuY3Rpb24oZnVuYykge1xuICAgIC8vIER1ZSB0byBleHBlY3RlZCBvYmplY3QgZXF1YWxpdHkgKHdoaWNoIGlzIGVuZm9yY2VkIGJ5IHRoZSBjYWNoaW5nIGluIGB3cmFwYCksIHdlXG4gICAgLy8gb25seSBjcmVhdGUgb25lIG5ldyBmdW5jIHBlciBmdW5jLlxuICAgIC8vIEVkZ2UgZG9lc24ndCBzdXBwb3J0IG9iamVjdFN0b3JlTmFtZXMgKGJvb28pLCBzbyB3ZSBwb2x5ZmlsbCBpdCBoZXJlLlxuICAgIGlmIChmdW5jID09PSBJREJEYXRhYmFzZS5wcm90b3R5cGUudHJhbnNhY3Rpb24gJiZcbiAgICAgICAgISgnb2JqZWN0U3RvcmVOYW1lcycgaW4gSURCVHJhbnNhY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHN0b3JlTmFtZXMsIC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHR4ID0gZnVuYy5jYWxsKHVud3JhcCh0aGlzKSwgc3RvcmVOYW1lcywgLi4uYXJncyk7XG4gICAgICAgICAgICB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAuc2V0KHR4LCBzdG9yZU5hbWVzLnNvcnQgPyBzdG9yZU5hbWVzLnNvcnQoKSA6IFtzdG9yZU5hbWVzXSk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcCh0eCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIEN1cnNvciBtZXRob2RzIGFyZSBzcGVjaWFsLCBhcyB0aGUgYmVoYXZpb3VyIGlzIGEgbGl0dGxlIG1vcmUgZGlmZmVyZW50IHRvIHN0YW5kYXJkIElEQi4gSW5cbiAgICAvLyBJREIsIHlvdSBhZHZhbmNlIHRoZSBjdXJzb3IgYW5kIHdhaXQgZm9yIGEgbmV3ICdzdWNjZXNzJyBvbiB0aGUgSURCUmVxdWVzdCB0aGF0IGdhdmUgeW91IHRoZVxuICAgIC8vIGN1cnNvci4gSXQncyBraW5kYSBsaWtlIGEgcHJvbWlzZSB0aGF0IGNhbiByZXNvbHZlIHdpdGggbWFueSB2YWx1ZXMuIFRoYXQgZG9lc24ndCBtYWtlIHNlbnNlXG4gICAgLy8gd2l0aCByZWFsIHByb21pc2VzLCBzbyBlYWNoIGFkdmFuY2UgbWV0aG9kcyByZXR1cm5zIGEgbmV3IHByb21pc2UgZm9yIHRoZSBjdXJzb3Igb2JqZWN0LCBvclxuICAgIC8vIHVuZGVmaW5lZCBpZiB0aGUgZW5kIG9mIHRoZSBjdXJzb3IgaGFzIGJlZW4gcmVhY2hlZC5cbiAgICBpZiAoZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKS5pbmNsdWRlcyhmdW5jKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAgICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgICAgICBmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcChjdXJzb3JSZXF1ZXN0TWFwLmdldCh0aGlzKSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm94eSBhcyAndGhpcycgY2F1c2VzIElMTEVHQUwgSU5WT0NBVElPTiwgc28gd2UgdXNlXG4gICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgIHJldHVybiB3cmFwKGZ1bmMuYXBwbHkodW53cmFwKHRoaXMpLCBhcmdzKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKVxuICAgICAgICByZXR1cm4gd3JhcEZ1bmN0aW9uKHZhbHVlKTtcbiAgICAvLyBUaGlzIGRvZXNuJ3QgcmV0dXJuLCBpdCBqdXN0IGNyZWF0ZXMgYSAnZG9uZScgcHJvbWlzZSBmb3IgdGhlIHRyYW5zYWN0aW9uLFxuICAgIC8vIHdoaWNoIGlzIGxhdGVyIHJldHVybmVkIGZvciB0cmFuc2FjdGlvbi5kb25lIChzZWUgaWRiT2JqZWN0SGFuZGxlcikuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pXG4gICAgICAgIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih2YWx1ZSk7XG4gICAgaWYgKGluc3RhbmNlT2ZBbnkodmFsdWUsIGdldElkYlByb3h5YWJsZVR5cGVzKCkpKVxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHZhbHVlLCBpZGJQcm94eVRyYXBzKTtcbiAgICAvLyBSZXR1cm4gdGhlIHNhbWUgdmFsdWUgYmFjayBpZiB3ZSdyZSBub3QgZ29pbmcgdG8gdHJhbnNmb3JtIGl0LlxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHdyYXAodmFsdWUpIHtcbiAgICAvLyBXZSBzb21ldGltZXMgZ2VuZXJhdGUgbXVsdGlwbGUgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0IChlZyB3aGVuIGN1cnNvcmluZyksIGJlY2F1c2VcbiAgICAvLyBJREIgaXMgd2VpcmQgYW5kIGEgc2luZ2xlIElEQlJlcXVlc3QgY2FuIHlpZWxkIG1hbnkgcmVzcG9uc2VzLCBzbyB0aGVzZSBjYW4ndCBiZSBjYWNoZWQuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCUmVxdWVzdClcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3QodmFsdWUpO1xuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgdHJhbnNmb3JtZWQgdGhpcyB2YWx1ZSBiZWZvcmUsIHJldXNlIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZS5cbiAgICAvLyBUaGlzIGlzIGZhc3RlciwgYnV0IGl0IGFsc28gcHJvdmlkZXMgb2JqZWN0IGVxdWFsaXR5LlxuICAgIGlmICh0cmFuc2Zvcm1DYWNoZS5oYXModmFsdWUpKVxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWUpO1xuICAgIC8vIE5vdCBhbGwgdHlwZXMgYXJlIHRyYW5zZm9ybWVkLlxuICAgIC8vIFRoZXNlIG1heSBiZSBwcmltaXRpdmUgdHlwZXMsIHNvIHRoZXkgY2FuJ3QgYmUgV2Vha01hcCBrZXlzLlxuICAgIGlmIChuZXdWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdHJhbnNmb3JtQ2FjaGUuc2V0KHZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQobmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuY29uc3QgdW53cmFwID0gKHZhbHVlKSA9PiByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcblxuZXhwb3J0IHsgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlIGFzIGEsIGluc3RhbmNlT2ZBbnkgYXMgaSwgcmVwbGFjZVRyYXBzIGFzIHIsIHVud3JhcCBhcyB1LCB3cmFwIGFzIHcgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwcmVjYWNoZUFuZFJvdXRlIH0gZnJvbSBcIndvcmtib3gtcHJlY2FjaGluZy9wcmVjYWNoZUFuZFJvdXRlXCI7XG5pbXBvcnQge1xuICB3YXJtU3RyYXRlZ3lDYWNoZSxcbiAgZ29vZ2xlRm9udHNDYWNoZSxcbiAgc3RhdGljUmVzb3VyY2VDYWNoZSxcbiAgLy8gb2ZmbGluZUZhbGxiYWNrLFxuICBpbWFnZUNhY2hlLFxufSBmcm9tIFwid29ya2JveC1yZWNpcGVzXCI7XG4vLyBpbXBvcnQgeyBzZXRDYXRjaEhhbmRsZXIsIHNldERlZmF1bHRIYW5kbGVyLCByZWdpc3RlclJvdXRlIH0gZnJvbSAnd29ya2JveC1yb3V0aW5nJztcbi8vIGltcG9ydCB7IE5ldHdvcmtPbmx5LCBTdGFsZVdoaWxlUmV2YWxpZGF0ZSwgQ2FjaGVGaXJzdCB9IGZyb20gJ3dvcmtib3gtc3RyYXRlZ2llcyc7XG5pbXBvcnQgeyByZWdpc3RlclJvdXRlIH0gZnJvbSBcIndvcmtib3gtcm91dGluZ1wiO1xuaW1wb3J0IHtcbiAgU3RhbGVXaGlsZVJldmFsaWRhdGUsXG4gIE5ldHdvcmtGaXJzdCxcbiAgTmV0d29ya09ubHksXG59IGZyb20gXCJ3b3JrYm94LXN0cmF0ZWdpZXNcIjtcbmltcG9ydCB7IENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luIH0gZnJvbSBcIndvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBFeHBpcmF0aW9uUGx1Z2luIH0gZnJvbSBcIndvcmtib3gtZXhwaXJhdGlvblwiO1xuXG5jb25zdCBtYW5pZmVzdCA9IHNlbGYuX19XQl9NQU5JRkVTVDtcbmlmIChtYW5pZmVzdCkge1xuXG4gIC8vIGNvbnNvbGUubG9nKFwicHJlY2FjaGluZzogXCIsIG1hbmlmZXN0KTtcbiAgcHJlY2FjaGVBbmRSb3V0ZShtYW5pZmVzdCk7XG59XG5cbi8vIGh0dHBzOi8vd2ViLmRldi9vZmZsaW5lLWZhbGxiYWNrLXBhZ2UvXG4vLyBjb25zdCBDQUNIRV9OQU1FID0gJ29mZmxpbmUtaHRtbCc7XG4vLyBjb25zdCBGQUxMQkFDS19IVE1MX1VSTCA9IFwiL29mZmxpbmUvXCI7XG5cbi8vIGNhY2hlIGFsbCB0aGUgcGFnZXMgb2YgdGhlIHdlYnNpdGUgc2VydmluZyB0aGUgY2FjaGVkIHBhZ2VzIGJlZm9yZSBuZXR3b3JrIGlmIHRoZXkgYXJlIG5vdCBhdmFpbGFibGVcbmNvbnN0IHBhZ2VDYWNoZSA9IG5ldyBOZXR3b3JrRmlyc3Qoe1xuICBjYWNoZU5hbWU6IFwicGFnZS1jYWNoZVwiLFxuICBwbHVnaW5zOiBbXG4gICAgbmV3IENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luKHtcbiAgICAgIHN0YXR1c2VzOiBbMCwgMjAwXSxcbiAgICB9KSxcbiAgICBuZXcgRXhwaXJhdGlvblBsdWdpbih7XG4gICAgICBtYXhBZ2VTZWNvbmRzOiAzMCAqIDI0ICogNjAgKiA2MCxcbiAgICB9KSxcbiAgXSxcbn0pO1xuXG5nb29nbGVGb250c0NhY2hlKCk7XG5zdGF0aWNSZXNvdXJjZUNhY2hlKCk7XG5pbWFnZUNhY2hlKCk7XG5cbnJlZ2lzdGVyUm91dGUoXG4gICh7IHVybCB9KSA9PiB1cmwub3JpZ2luID09PSBcImh0dHBzOi8vdW5wa2cuY29tXCIsXG4gIG5ldyBTdGFsZVdoaWxlUmV2YWxpZGF0ZSh7XG4gICAgY2FjaGVOYW1lOiBgdW5wa2dgLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIG5ldyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbih7XG4gICAgICAgIHN0YXR1c2VzOiBbMCwgMjAwXSxcbiAgICAgIH0pLFxuICAgICAgbmV3IEV4cGlyYXRpb25QbHVnaW4oeyBtYXhFbnRyaWVzOiAyMCB9KSxcbiAgICBdLFxuICB9KVxuKTtcblxucmVnaXN0ZXJSb3V0ZShcbiAgKHsgdXJsIH0pID0+IHVybC5vcmlnaW4gPT09IFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbVwiLFxuICBuZXcgU3RhbGVXaGlsZVJldmFsaWRhdGUoe1xuICAgIGNhY2hlTmFtZTogYGNkbmpzYCxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBuZXcgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4oe1xuICAgICAgICBzdGF0dXNlczogWzAsIDIwMF0sXG4gICAgICB9KSxcbiAgICAgIG5ldyBFeHBpcmF0aW9uUGx1Z2luKHsgbWF4RW50cmllczogMjAgfSksXG4gICAgXSxcbiAgfSlcbik7XG5cbnJlZ2lzdGVyUm91dGUoXG4gICh7IHVybCB9KSA9PiB1cmwub3JpZ2luID09PSBcImh0dHBzOi8vbWFwLmdvb2dsZWFwaXMuY29tXCIsXG4gIG5ldyBTdGFsZVdoaWxlUmV2YWxpZGF0ZSh7XG4gICAgY2FjaGVOYW1lOiBgZ29vZ2xlLW1hcGAsXG4gICAgcGx1Z2luczogW1xuICAgICAgbmV3IENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luKHtcbiAgICAgICAgc3RhdHVzZXM6IFswLCAyMDBdLFxuICAgICAgfSksXG4gICAgICBuZXcgRXhwaXJhdGlvblBsdWdpbih7IG1heEVudHJpZXM6IDIwIH0pLFxuICAgIF0sXG4gIH0pXG4pO1xuXG5yZWdpc3RlclJvdXRlKFxuICAoeyB1cmwgfSkgPT4gdXJsLm9yaWdpbiA9PT0gXCJodHRwczovL2FwaS50aWxlcy5tYXBib3guY29tXCIsXG4gIG5ldyBTdGFsZVdoaWxlUmV2YWxpZGF0ZSh7XG4gICAgY2FjaGVOYW1lOiBgbWFwYm94LW1hcGAsXG4gICAgcGx1Z2luczogW1xuICAgICAgbmV3IENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luKHtcbiAgICAgICAgc3RhdHVzZXM6IFswLCAyMDBdLFxuICAgICAgfSksXG4gICAgICBuZXcgRXhwaXJhdGlvblBsdWdpbih7IG1heEVudHJpZXM6IDIwIH0pLFxuICAgIF0sXG4gIH0pXG4pO1xuXG5yZWdpc3RlclJvdXRlKFxuICAoeyB1cmwgfSkgPT4gdXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvdXNlcnMvXCIpLFxuICBuZXcgTmV0d29ya0ZpcnN0KClcbik7XG5cbnJlZ2lzdGVyUm91dGUoXG4gICh7IHVybCB9KSA9PiB1cmwucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9hY2NvdW50cy9cIiksXG4gIG5ldyBOZXR3b3JrRmlyc3QoKVxuKTtcblxucmVnaXN0ZXJSb3V0ZShcbiAgKHsgdXJsIH0pID0+IHVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2FjY291bnRzL2dvb2dsZS9cIiksXG4gIG5ldyBOZXR3b3JrT25seSgpXG4pO1xucmVnaXN0ZXJSb3V0ZShcbiAgKHsgdXJsIH0pID0+IHVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2FjY291bnRzL2ZhY2Vib29rL1wiKSxcbiAgbmV3IE5ldHdvcmtPbmx5KClcbik7XG5cbndhcm1TdHJhdGVneUNhY2hlKHtcbiAgdXJsczogW1xuICAgIFwiL1wiLFxuICAgIFwiL29mZmxpbmVcIixcbiAgICBcIi9hYm91dFwiLFxuICAgIFwiL2FjY291bnRzL2xvZ2luXCIsXG4gICAgXCIvYWNjb3VudHMvc2lnbnVwXCIsXG4gICAgXCIvYWNjb3VudHMvZW1haWxcIixcbiAgICBcIi9yb2JvdHMudHh0XCIsXG4gIF0sXG4gIHN0cmF0ZWd5OiBwYWdlQ2FjaGUsXG59KTtcblxucmVnaXN0ZXJSb3V0ZSgoeyByZXF1ZXN0IH0pID0+IHJlcXVlc3QubW9kZSA9PT0gXCJuYXZpZ2F0ZVwiLCBwYWdlQ2FjaGUpO1xuXG4vLyBvZmZsaW5lRmFsbGJhY2soe1xuLy8gICBwYWdlRmFsbGJhY2s6IEZBTExCQUNLX0hUTUxfVVJMLFxuLy8gfSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gcHVzaCBzZXJ2aWNlc1xuY29uc3QgTE9HT19VUkwgPSBcIi9zdGF0aWMvYnVuZGxlcy9hc3NldHMvZmF2aWNvbi00OHg0OC5wbmdcIjtcblxuLy8gZ2V0IG5vdGlmaWNhdGlvbiB0aXRsZVxubGV0IGdldFRpdGxlID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gIGlmICh0aXRsZSA9PT0gXCJcIikge1xuICAgIHRpdGxlID0gXCJlcnJ5IFNheXMg8J+UiFwiO1xuICB9XG4gIHJldHVybiB0aXRsZTtcbn07XG5cbi8vIHNpcCBpbnN0YWxsIGlmIHdhaXRpbmcgdGFrZXMgdG9vIGxvbmdcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImluc3RhbGxcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHNlbGYuc2tpcFdhaXRpbmcoKTtcbiAgY29uc29sZS5sb2coZXZlbnQpO1xufSk7XG5cbi8vIHJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgJ3B1c2gnIGV2ZW50Llxuc2VsZi5hZGRFdmVudExpc3RlbmVyKFwicHVzaFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gUmV0cmlldmUgdGhlIHRleHR1YWwgcGF5bG9hZCBmcm9tIGV2ZW50LmRhdGEgKGEgUHVzaE1lc3NhZ2VEYXRhIG9iamVjdCkuXG4gIC8vIE90aGVyIGZvcm1hdHMgYXJlIHN1cHBvcnRlZCAoQXJyYXlCdWZmZXIsIEJsb2IsIEpTT04pLCBjaGVjayBvdXQgdGhlIGRvY3VtZW50YXRpb25cbiAgLy8gb24gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1B1c2hNZXNzYWdlRGF0YS5cbiAgbGV0IG5vdGlmaWNhdGlvblRpdGxlID0gXCJcIjtcbiAgbGV0IG5vdGlmaWNhdGlvbk9wdGlvbnMgPSB7fTtcbiAgbGV0IG5vdGlmaWNhdGlvbkJvZHkgPSBcIlwiO1xuICBsZXQgbm90aWZpY2F0aW9uVGFnID0gXCJcIjtcblxuICB0cnkge1xuICAgIC8vIFB1c2ggaXMgYSBKU09OXG4gICAgY29uc3QgcmVzcG9uc2VKc29uID0gZXZlbnQuZGF0YS5qc29uKCk7XG5cbiAgICBub3RpZmljYXRpb25UaXRsZSA9IGdldFRpdGxlKHJlc3BvbnNlSnNvbi5oZWFkLnRvVXBwZXJDYXNlKCkpO1xuICAgIG5vdGlmaWNhdGlvbkJvZHkgPSByZXNwb25zZUpzb24uYm9keTtcbiAgICBub3RpZmljYXRpb25UYWcgPSByZXNwb25zZUpzb24udGFnO1xuXG4gICAgaWYgKHJlc3BvbnNlSnNvbi51cmwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcbiAgICAgICAgYm9keTogcmVzcG9uc2VKc29uLmJvZHksXG4gICAgICAgIGljb246IExPR09fVVJMLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdXJsOiByZXNwb25zZUpzb24udXJsID8gcmVzcG9uc2VKc29uLnVybCA6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGlvbnM6IFt7IGFjdGlvbjogXCJvcGVuX3VybFwiLCB0aXRsZTogXCJPcGVuIExpbmtcIiB9XSxcbiAgICAgICAgdmlicmF0ZTogWzIwMCwgMTAwLCAyMDAsIDEwMCwgMjAwLCAxMDAsIDIwMF0sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBub3RpZmljYXRpb25PcHRpb25zID0ge1xuICAgICAgICBib2R5OiByZXNwb25zZUpzb24uYm9keSxcbiAgICAgICAgaWNvbjogTE9HT19VUkwsXG4gICAgICAgIHZpYnJhdGU6IFsyMDAsIDEwMCwgMjAwLCAxMDAsIDIwMCwgMTAwLCAyMDBdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyKSB7XG5cbiAgICAvLyBQdXNoIGlzIGEgc2ltcGxlIHRleHQgKHVzdWFsbHkgZGVidWdnaW5nKVxuICAgIG5vdGlmaWNhdGlvbk9wdGlvbnMgPSB7XG4gICAgICBpY29uOiBMT0dPX1VSTCxcbiAgICAgIGJvZHk6IGV2ZW50LmRhdGEudGV4dCgpLFxuICAgIH07XG5cbiAgfVxuXG4gIC8vIEtlZXAgdGhlIHNlcnZpY2Ugd29ya2VyIGFsaXZlIHVudGlsIHRoZSBub3RpZmljYXRpb24gaXMgY3JlYXRlZC5cbiAgZXZlbnQud2FpdFVudGlsKFxuICAgIHNlbGYucmVnaXN0cmF0aW9uLnNob3dOb3RpZmljYXRpb24obm90aWZpY2F0aW9uVGl0bGUsIG5vdGlmaWNhdGlvbk9wdGlvbnMpXG4gICk7XG5cbiAgLy8gT3B0aW9uYWw6IENvbXVuaWNhdGluZyB3aXRoIG91ciBqcyBhcHBsaWNhdGlvbi4gU2VuZCBhIHNpZ25hbFxuICBzZWxmLmNsaWVudHNcbiAgICAubWF0Y2hBbGwoeyBpbmNsdWRlVW5jb250cm9sbGVkOiB0cnVlLCB0eXBlOiBcIndpbmRvd1wiIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKGNsaWVudHMpIHtcbiAgICAgIGNsaWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2xpZW50KSB7XG4gICAgICAgIGNsaWVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgZGF0YTogbm90aWZpY2F0aW9uVGFnLFxuICAgICAgICAgIGRhdGFfdGl0bGU6IG5vdGlmaWNhdGlvblRpdGxlLFxuICAgICAgICAgIGRhdGFfYm9keTogbm90aWZpY2F0aW9uQm9keSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJub3RpZmljYXRpb25jbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gQW5kcm9pZCBkb2Vzbid0IGNsb3NlIHRoZSBub3RpZmljYXRpb24gd2hlbiB5b3UgY2xpY2sgaXRcbiAgLy8gU2VlIGh0dHA6Ly9jcmJ1Zy5jb20vNDYzMTQ2XG4gIGV2ZW50Lm5vdGlmaWNhdGlvbi5jbG9zZSgpO1xuICAvLyBDaGVjayBpZiB0aGVyZSdzIGFscmVhZHkgYSB0YWIgb3BlbiB3aXRoIHRoaXMgVVJMLlxuICAvLyBJZiB5ZXM6IGZvY3VzIG9uIHRoZSB0YWIuXG4gIC8vIElmIG5vOiBvcGVuIGEgdGFiIHdpdGggdGhlIFVSTC5cbiAgZXZlbnQud2FpdFVudGlsKFxuICAgIHNlbGYuY2xpZW50c1xuICAgICAgLm1hdGNoQWxsKHsgdHlwZTogXCJ3aW5kb3dcIiwgaW5jbHVkZVVuY29udHJvbGxlZDogdHJ1ZSB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHdpbmRvd0NsaWVudHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3aW5kb3dDbGllbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNsaWVudCA9IHdpbmRvd0NsaWVudHNbaV07XG4gICAgICAgICAgaWYgKFwiZm9jdXNcIiBpbiBjbGllbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGllbnQuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICk7XG4gIGlmIChldmVudC5ub3RpZmljYXRpb24uZGF0YSAhPT0gbnVsbCkge1xuICAgIGV2ZW50LndhaXRVbnRpbChcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCksXG4gICAgICBzZWxmLmNsaWVudHMub3BlbldpbmRvdyhldmVudC5ub3RpZmljYXRpb24uZGF0YS51cmwpXG4gICAgKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiYXNzZXJ0IiwiV29ya2JveEVycm9yIiwiZ2V0RnJpZW5kbHlVUkwiLCJsb2dnZXIiLCJDYWNoZWFibGVSZXNwb25zZSIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwic3RhdHVzZXMiLCJoZWFkZXJzIiwibW9kdWxlTmFtZSIsImNsYXNzTmFtZSIsImZ1bmNOYW1lIiwiaXNBcnJheSIsInBhcmFtTmFtZSIsImlzVHlwZSIsIl9zdGF0dXNlcyIsIl9oZWFkZXJzIiwiaXNSZXNwb25zZUNhY2hlYWJsZSIsInJlc3BvbnNlIiwiaXNJbnN0YW5jZSIsIlJlc3BvbnNlIiwiY2FjaGVhYmxlIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsImhlYWRlck5hbWUiLCJnZXQiLCJncm91cENvbGxhcHNlZCIsInVybCIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJncm91cEVuZCIsImxvZ0ZyaWVuZGx5SGVhZGVycyIsImZvckVhY2giLCJ2YWx1ZSIsImtleSIsIkNhY2hlYWJsZVJlc3BvbnNlUGx1Z2luIiwiY2FjaGVXaWxsVXBkYXRlIiwiX2NhY2hlYWJsZVJlc3BvbnNlIiwic2VsZiIsIl8iLCJlIiwiRGVmZXJyZWQiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtZXNzYWdlR2VuZXJhdG9yIiwiRXJyb3IiLCJlcnJvckNvZGUiLCJkZXRhaWxzIiwibWVzc2FnZSIsIm5hbWUiLCJBcnJheSIsImhhc01ldGhvZCIsIm9iamVjdCIsImV4cGVjdGVkTWV0aG9kIiwidHlwZSIsImV4cGVjdGVkVHlwZSIsImV4cGVjdGVkQ2xhc3MiLCJpc09uZU9mIiwidmFsaWRWYWx1ZXMiLCJpc0FycmF5T2ZDbGFzcyIsImVycm9yIiwiaXRlbSIsImZpbmFsQXNzZXJ0RXhwb3J0cyIsInN0cmlwUGFyYW1zIiwiZnVsbFVSTCIsImlnbm9yZVBhcmFtcyIsInN0cmlwcGVkVVJMIiwiVVJMIiwicGFyYW0iLCJzZWFyY2hQYXJhbXMiLCJkZWxldGUiLCJocmVmIiwiY2FjaGVNYXRjaElnbm9yZVBhcmFtcyIsImNhY2hlIiwicmVxdWVzdCIsIm1hdGNoT3B0aW9ucyIsInN0cmlwcGVkUmVxdWVzdFVSTCIsIm1hdGNoIiwia2V5c09wdGlvbnMiLCJhc3NpZ24iLCJpZ25vcmVTZWFyY2giLCJjYWNoZUtleXMiLCJjYWNoZUtleSIsInN0cmlwcGVkQ2FjaGVLZXlVUkwiLCJfY2FjaGVOYW1lRGV0YWlscyIsImdvb2dsZUFuYWx5dGljcyIsInByZWNhY2hlIiwicHJlZml4IiwicnVudGltZSIsInN1ZmZpeCIsInJlZ2lzdHJhdGlvbiIsInNjb3BlIiwiX2NyZWF0ZUNhY2hlTmFtZSIsImNhY2hlTmFtZSIsImZpbHRlciIsImxlbmd0aCIsImpvaW4iLCJlYWNoQ2FjaGVOYW1lRGV0YWlsIiwiZm4iLCJjYWNoZU5hbWVzIiwidXBkYXRlRGV0YWlscyIsImdldEdvb2dsZUFuYWx5dGljc05hbWUiLCJ1c2VyQ2FjaGVOYW1lIiwiZ2V0UHJlY2FjaGVOYW1lIiwiZ2V0UHJlZml4IiwiZ2V0UnVudGltZU5hbWUiLCJnZXRTdWZmaXgiLCJzdXBwb3J0U3RhdHVzIiwiY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbSIsInVuZGVmaW5lZCIsInRlc3RSZXNwb25zZSIsImJvZHkiLCJkb250V2FpdEZvciIsInRoZW4iLCJxdW90YUVycm9yQ2FsbGJhY2tzIiwiZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MiLCJzaXplIiwiY2FsbGJhY2siLCJ1cmxPYmoiLCJTdHJpbmciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJSZWdFeHAiLCJvcmlnaW4iLCJfX1dCX0RJU0FCTEVfREVWX0xPR1MiLCJpbkdyb3VwIiwibWV0aG9kVG9Db2xvck1hcCIsImRlYnVnIiwid2FybiIsInByaW50IiwibWV0aG9kIiwiYXJncyIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJjb25zb2xlIiwic3R5bGVzIiwibG9nUHJlZml4IiwiYXBpIiwibG9nZ2VyTWV0aG9kcyIsInRpbWVvdXQiLCJtcyIsInNldFRpbWVvdXQiLCJ3YWl0VW50aWwiLCJldmVudCIsImFzeW5jRm4iLCJyZXR1cm5Qcm9taXNlIiwiY29weVJlc3BvbnNlIiwibW9kaWZpZXIiLCJyZXNwb25zZVVSTCIsImNsb25lZFJlc3BvbnNlIiwiY2xvbmUiLCJyZXNwb25zZUluaXQiLCJIZWFkZXJzIiwic3RhdHVzVGV4dCIsIm1vZGlmaWVkUmVzcG9uc2VJbml0IiwiYmxvYiIsIm1lc3NhZ2VzIiwiZmFsbGJhY2siLCJjb2RlIiwibXNnIiwiZ2VuZXJhdG9yRnVuY3Rpb24iLCJpbnZhbGlkLXZhbHVlIiwidmFsaWRWYWx1ZURlc2NyaXB0aW9uIiwibm90LWFuLWFycmF5IiwiaW5jb3JyZWN0LXR5cGUiLCJjbGFzc05hbWVTdHIiLCJpbmNvcnJlY3QtY2xhc3MiLCJleHBlY3RlZENsYXNzTmFtZSIsImlzUmV0dXJuVmFsdWVQcm9ibGVtIiwibWlzc2luZy1hLW1ldGhvZCIsImFkZC10by1jYWNoZS1saXN0LXVuZXhwZWN0ZWQtdHlwZSIsImVudHJ5IiwiYWRkLXRvLWNhY2hlLWxpc3QtY29uZmxpY3RpbmctZW50cmllcyIsImZpcnN0RW50cnkiLCJzZWNvbmRFbnRyeSIsInBsdWdpbi1lcnJvci1yZXF1ZXN0LXdpbGwtZmV0Y2giLCJ0aHJvd25FcnJvck1lc3NhZ2UiLCJpbnZhbGlkLWNhY2hlLW5hbWUiLCJjYWNoZU5hbWVJZCIsInVucmVnaXN0ZXItcm91dGUtYnV0LW5vdC1mb3VuZC13aXRoLW1ldGhvZCIsInVucmVnaXN0ZXItcm91dGUtcm91dGUtbm90LXJlZ2lzdGVyZWQiLCJxdWV1ZS1yZXBsYXktZmFpbGVkIiwiZHVwbGljYXRlLXF1ZXVlLW5hbWUiLCJleHBpcmVkLXRlc3Qtd2l0aG91dC1tYXgtYWdlIiwibWV0aG9kTmFtZSIsInVuc3VwcG9ydGVkLXJvdXRlLXR5cGUiLCJub3QtYXJyYXktb2YtY2xhc3MiLCJtYXgtZW50cmllcy1vci1hZ2UtcmVxdWlyZWQiLCJzdGF0dXNlcy1vci1oZWFkZXJzLXJlcXVpcmVkIiwiaW52YWxpZC1zdHJpbmciLCJjaGFubmVsLW5hbWUtcmVxdWlyZWQiLCJpbnZhbGlkLXJlc3BvbnNlcy1hcmUtc2FtZS1hcmdzIiwiZXhwaXJlLWN1c3RvbS1jYWNoZXMtb25seSIsInVuaXQtbXVzdC1iZS1ieXRlcyIsIm5vcm1hbGl6ZWRSYW5nZUhlYWRlciIsInNpbmdsZS1yYW5nZS1vbmx5IiwiaW52YWxpZC1yYW5nZS12YWx1ZXMiLCJuby1yYW5nZS1oZWFkZXIiLCJyYW5nZS1ub3Qtc2F0aXNmaWFibGUiLCJzdGFydCIsImVuZCIsImF0dGVtcHQtdG8tY2FjaGUtbm9uLWdldC1yZXF1ZXN0IiwiY2FjaGUtcHV0LXdpdGgtbm8tcmVzcG9uc2UiLCJuby1yZXNwb25zZSIsImJhZC1wcmVjYWNoaW5nLXJlc3BvbnNlIiwibm9uLXByZWNhY2hlZC11cmwiLCJhZGQtdG8tY2FjaGUtbGlzdC1jb25mbGljdGluZy1pbnRlZ3JpdGllcyIsIm1pc3NpbmctcHJlY2FjaGUtZW50cnkiLCJjcm9zcy1vcmlnaW4tY29weS1yZXNwb25zZSIsIm9wYXF1ZS1zdHJlYW1zLXNvdXJjZSIsIlNldCIsInJlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrIiwiYWRkIiwiQ2FjaGVUaW1lc3RhbXBzTW9kZWwiLCJDYWNoZUV4cGlyYXRpb24iLCJfaXNSdW5uaW5nIiwiX3JlcnVuUmVxdWVzdGVkIiwibWF4RW50cmllcyIsIm1heEFnZVNlY29uZHMiLCJfbWF4RW50cmllcyIsIl9tYXhBZ2VTZWNvbmRzIiwiX21hdGNoT3B0aW9ucyIsIl9jYWNoZU5hbWUiLCJfdGltZXN0YW1wTW9kZWwiLCJleHBpcmVFbnRyaWVzIiwibWluVGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInVybHNFeHBpcmVkIiwiY2FjaGVzIiwib3BlbiIsInVwZGF0ZVRpbWVzdGFtcCIsInNldFRpbWVzdGFtcCIsImlzVVJMRXhwaXJlZCIsInRpbWVzdGFtcCIsImdldFRpbWVzdGFtcCIsImV4cGlyZU9sZGVyVGhhbiIsIkluZmluaXR5IiwiRXhwaXJhdGlvblBsdWdpbiIsImNhY2hlZFJlc3BvbnNlV2lsbEJlVXNlZCIsImNhY2hlZFJlc3BvbnNlIiwiaXNGcmVzaCIsIl9pc1Jlc3BvbnNlRGF0ZUZyZXNoIiwiY2FjaGVFeHBpcmF0aW9uIiwiX2dldENhY2hlRXhwaXJhdGlvbiIsInVwZGF0ZVRpbWVzdGFtcERvbmUiLCJjYWNoZURpZFVwZGF0ZSIsIlJlcXVlc3QiLCJfY29uZmlnIiwiX2NhY2hlRXhwaXJhdGlvbnMiLCJNYXAiLCJwdXJnZU9uUXVvdGFFcnJvciIsImRlbGV0ZUNhY2hlQW5kTWV0YWRhdGEiLCJzZXQiLCJkYXRlSGVhZGVyVGltZXN0YW1wIiwiX2dldERhdGVIZWFkZXJUaW1lc3RhbXAiLCJoYXMiLCJkYXRlSGVhZGVyIiwicGFyc2VkRGF0ZSIsImhlYWRlclRpbWUiLCJnZXRUaW1lIiwiaXNOYU4iLCJvcGVuREIiLCJkZWxldGVEQiIsIkRCX05BTUUiLCJDQUNIRV9PQkpFQ1RfU1RPUkUiLCJub3JtYWxpemVVUkwiLCJ1bk5vcm1hbGl6ZWRVcmwiLCJoYXNoIiwiX2RiIiwiX3VwZ3JhZGVEYiIsImRiIiwib2JqU3RvcmUiLCJjcmVhdGVPYmplY3RTdG9yZSIsImtleVBhdGgiLCJjcmVhdGVJbmRleCIsInVuaXF1ZSIsIl91cGdyYWRlRGJBbmREZWxldGVPbGREYnMiLCJpZCIsIl9nZXRJZCIsImdldERiIiwidHgiLCJ0cmFuc2FjdGlvbiIsImR1cmFiaWxpdHkiLCJzdG9yZSIsInB1dCIsImRvbmUiLCJtYXhDb3VudCIsImN1cnNvciIsImluZGV4Iiwib3BlbkN1cnNvciIsImVudHJpZXNUb0RlbGV0ZSIsImVudHJpZXNOb3REZWxldGVkQ291bnQiLCJyZXN1bHQiLCJwdXNoIiwiY29udGludWUiLCJ1cmxzRGVsZXRlZCIsInVwZ3JhZGUiLCJiaW5kIiwiY3JlYXRlQ2FjaGVLZXkiLCJQcmVjYWNoZUluc3RhbGxSZXBvcnRQbHVnaW4iLCJQcmVjYWNoZUNhY2hlS2V5UGx1Z2luIiwicHJpbnRDbGVhbnVwRGV0YWlscyIsInByaW50SW5zdGFsbERldGFpbHMiLCJQcmVjYWNoZVN0cmF0ZWd5IiwiUHJlY2FjaGVDb250cm9sbGVyIiwicGx1Z2lucyIsImZhbGxiYWNrVG9OZXR3b3JrIiwiX3VybHNUb0NhY2hlS2V5cyIsIl91cmxzVG9DYWNoZU1vZGVzIiwiX2NhY2hlS2V5c1RvSW50ZWdyaXRpZXMiLCJfc3RyYXRlZ3kiLCJwcmVjYWNoZUNvbnRyb2xsZXIiLCJpbnN0YWxsIiwiYWN0aXZhdGUiLCJzdHJhdGVneSIsImVudHJpZXMiLCJhZGRUb0NhY2hlTGlzdCIsIl9pbnN0YWxsQW5kQWN0aXZlTGlzdGVuZXJzQWRkZWQiLCJhZGRFdmVudExpc3RlbmVyIiwidXJsc1RvV2FybkFib3V0IiwicmV2aXNpb24iLCJjYWNoZU1vZGUiLCJpbnRlZ3JpdHkiLCJ3YXJuaW5nTWVzc2FnZSIsImluc3RhbGxSZXBvcnRQbHVnaW4iLCJjcmVkZW50aWFscyIsImFsbCIsImhhbmRsZUFsbCIsInBhcmFtcyIsInVwZGF0ZWRVUkxzIiwibm90VXBkYXRlZFVSTHMiLCJjdXJyZW50bHlDYWNoZWRSZXF1ZXN0cyIsImV4cGVjdGVkQ2FjaGVLZXlzIiwidmFsdWVzIiwiZGVsZXRlZFVSTHMiLCJnZXRVUkxzVG9DYWNoZUtleXMiLCJnZXRDYWNoZWRVUkxzIiwiZ2V0Q2FjaGVLZXlGb3JVUkwiLCJ1cmxPYmplY3QiLCJnZXRJbnRlZ3JpdHlGb3JDYWNoZUtleSIsIm1hdGNoUHJlY2FjaGUiLCJjcmVhdGVIYW5kbGVyQm91bmRUb1VSTCIsIm9wdGlvbnMiLCJoYW5kbGUiLCJSb3V0ZSIsImdlbmVyYXRlVVJMVmFyaWF0aW9ucyIsIlByZWNhY2hlUm91dGUiLCJ1cmxzVG9DYWNoZUtleXMiLCJwb3NzaWJsZVVSTCIsIlN0cmF0ZWd5IiwiX2ZhbGxiYWNrVG9OZXR3b3JrIiwiY29weVJlZGlyZWN0ZWRDYWNoZWFibGVSZXNwb25zZXNQbHVnaW4iLCJfaGFuZGxlIiwiaGFuZGxlciIsImNhY2hlTWF0Y2giLCJfaGFuZGxlSW5zdGFsbCIsIl9oYW5kbGVGZXRjaCIsImludGVncml0eUluTWFuaWZlc3QiLCJpbnRlZ3JpdHlJblJlcXVlc3QiLCJub0ludGVncml0eUNvbmZsaWN0IiwiZmV0Y2giLCJtb2RlIiwiX3VzZURlZmF1bHRDYWNoZWFiaWxpdHlQbHVnaW5JZk5lZWRlZCIsIndhc0NhY2hlZCIsImNhY2hlUHV0IiwiZ2V0Q2FjaGVLZXkiLCJkZWZhdWx0UGx1Z2luSW5kZXgiLCJjYWNoZVdpbGxVcGRhdGVQbHVnaW5Db3VudCIsInBsdWdpbiIsImRlZmF1bHRQcmVjYWNoZUNhY2hlYWJpbGl0eVBsdWdpbiIsInNwbGljZSIsInJlZGlyZWN0ZWQiLCJyZWdpc3RlclJvdXRlIiwiZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIiLCJhZGRSb3V0ZSIsInByZWNhY2hlUm91dGUiLCJwcmVjYWNoZUFuZFJvdXRlIiwiY2FjaGVLZXlXaWxsQmVVc2VkIiwiX3ByZWNhY2hlQ29udHJvbGxlciIsImhhbmRsZXJXaWxsU3RhcnQiLCJzdGF0ZSIsIm9yaWdpbmFsUmVxdWVzdCIsIlJFVklTSU9OX1NFQVJDSF9QQVJBTSIsImNhY2hlS2V5VVJMIiwib3JpZ2luYWxVUkwiLCJyZW1vdmVJZ25vcmVkU2VhcmNoUGFyYW1zIiwiaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nIiwiZGlyZWN0b3J5SW5kZXgiLCJjbGVhblVSTHMiLCJ1cmxNYW5pcHVsYXRpb24iLCJ1cmxXaXRob3V0SWdub3JlZFBhcmFtcyIsInBhdGhuYW1lIiwiZW5kc1dpdGgiLCJkaXJlY3RvcnlVUkwiLCJjbGVhblVSTCIsImFkZGl0aW9uYWxVUkxzIiwidXJsVG9BdHRlbXB0IiwibG9nR3JvdXAiLCJncm91cFRpdGxlIiwiZGVsZXRpb25Db3VudCIsIl9uZXN0ZWRHcm91cCIsInVybHMiLCJ1cmxzVG9QcmVjYWNoZSIsInVybHNBbHJlYWR5UHJlY2FjaGVkIiwicHJlY2FjaGVkQ291bnQiLCJhbHJlYWR5UHJlY2FjaGVkQ291bnQiLCJyZWdFeHAiLCJTdGFsZVdoaWxlUmV2YWxpZGF0ZSIsIkNhY2hlRmlyc3QiLCJnb29nbGVGb250c0NhY2hlIiwic2hlZXRDYWNoZU5hbWUiLCJjYWNoZVByZWZpeCIsImZvbnRDYWNoZU5hbWUiLCJ3YXJtU3RyYXRlZ3lDYWNoZSIsImltYWdlQ2FjaGUiLCJkZWZhdWx0TWF0Y2hDYWxsYmFjayIsImRlc3RpbmF0aW9uIiwibWF0Y2hDYWxsYmFjayIsIndhcm1DYWNoZSIsInN0YXRpY1Jlc291cmNlQ2FjaGUiLCJwYWdlQ2FjaGUiLCJvZmZsaW5lRmFsbGJhY2siLCJzZXRDYXRjaEhhbmRsZXIiLCJwYWdlRmFsbGJhY2siLCJpbWFnZUZhbGxiYWNrIiwiZm9udEZhbGxiYWNrIiwiZmlsZXMiLCJhZGRBbGwiLCJkZXN0IiwiTmV0d29ya0ZpcnN0IiwibmV0d29ya1RpbWVvdXRTZWNvbmRzIiwibWFwIiwicGF0aCIsIk5hdmlnYXRpb25Sb3V0ZSIsImFsbG93bGlzdCIsImRlbnlsaXN0IiwiX21hdGNoIiwiX2FsbG93bGlzdCIsIl9kZW55bGlzdCIsInBhdGhuYW1lQW5kU2VhcmNoIiwic2VhcmNoIiwidG9TdHJpbmciLCJSZWdFeHBSb3V0ZSIsImV4ZWMiLCJzbGljZSIsImRlZmF1bHRNZXRob2QiLCJ2YWxpZE1ldGhvZHMiLCJub3JtYWxpemVIYW5kbGVyIiwiY2F0Y2hIYW5kbGVyIiwiUm91dGVyIiwiX3JvdXRlcyIsIl9kZWZhdWx0SGFuZGxlck1hcCIsInJvdXRlcyIsImFkZEZldGNoTGlzdGVuZXIiLCJyZXNwb25zZVByb21pc2UiLCJoYW5kbGVSZXF1ZXN0IiwicmVzcG9uZFdpdGgiLCJhZGRDYWNoZUxpc3RlbmVyIiwiZGF0YSIsInBheWxvYWQiLCJ1cmxzVG9DYWNoZSIsInJlcXVlc3RQcm9taXNlcyIsInBvcnRzIiwicG9zdE1lc3NhZ2UiLCJwcm90b2NvbCIsInN0YXJ0c1dpdGgiLCJzYW1lT3JpZ2luIiwicm91dGUiLCJmaW5kTWF0Y2hpbmdSb3V0ZSIsImRlYnVnTWVzc2FnZXMiLCJlcnIiLCJfY2F0Y2hIYW5kbGVyIiwiY2F0Y2giLCJjYXRjaEVyciIsIm1hdGNoUmVzdWx0Iiwic2V0RGVmYXVsdEhhbmRsZXIiLCJ1bnJlZ2lzdGVyUm91dGUiLCJyb3V0ZUluZGV4IiwiaW5kZXhPZiIsImdldE9yQ3JlYXRlRGVmYXVsdFJvdXRlciIsImNhcHR1cmUiLCJjYXB0dXJlVXJsIiwidmFsdWVUb0NoZWNrIiwid2lsZGNhcmRzIiwiZGVmYXVsdFJvdXRlciIsImxvZ3MiLCJmZXRjaEFuZENhY2hlUHV0Iiwic3RyYXRlZ3lTdGFydCIsInByaW50RmluYWxSZXNwb25zZSIsIkNhY2hlT25seSIsImNhY2hlT2tBbmRPcGFxdWVQbHVnaW4iLCJwIiwidW5zaGlmdCIsIl9uZXR3b3JrVGltZW91dFNlY29uZHMiLCJwcm9taXNlcyIsInRpbWVvdXRJZCIsIl9nZXRUaW1lb3V0UHJvbWlzZSIsIm5ldHdvcmtQcm9taXNlIiwiX2dldE5ldHdvcmtQcm9taXNlIiwicmFjZSIsInRpbWVvdXRQcm9taXNlIiwib25OZXR3b3JrVGltZW91dCIsImZldGNoRXJyb3IiLCJjbGVhclRpbWVvdXQiLCJOZXR3b3JrT25seSIsImZldGNoQW5kQ2FjaGVQcm9taXNlIiwiU3RyYXRlZ3lIYW5kbGVyIiwiZmV0Y2hPcHRpb25zIiwicmVzcG9uc2VEb25lIiwiRmV0Y2hFdmVudCIsIl9nZXRSZXNwb25zZSIsImhhbmRsZXJEb25lIiwiX2F3YWl0Q29tcGxldGUiLCJydW5DYWxsYmFja3MiLCJpdGVyYXRlQ2FsbGJhY2tzIiwiZG9uZVdhaXRpbmciLCJ3YWl0VW50aWxFcnJvciIsImRlc3Ryb3kiLCJ0b1JlcXVlc3QiLCJpbnB1dCIsIl9jYWNoZUtleXMiLCJFeHRlbmRhYmxlRXZlbnQiLCJfaGFuZGxlckRlZmVycmVkIiwiX2V4dGVuZExpZmV0aW1lUHJvbWlzZXMiLCJfcGx1Z2lucyIsIl9wbHVnaW5TdGF0ZU1hcCIsInByZWxvYWRSZXNwb25zZSIsInBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlIiwiaGFzQ2FsbGJhY2siLCJjYiIsInBsdWdpbkZpbHRlcmVkUmVxdWVzdCIsImZldGNoUmVzcG9uc2UiLCJyZXNwb25zZUNsb25lIiwiZWZmZWN0aXZlUmVxdWVzdCIsIm11bHRpTWF0Y2hPcHRpb25zIiwidmFyeSIsInJlc3BvbnNlVG9DYWNoZSIsIl9lbnN1cmVSZXNwb25zZVNhZmVUb0NhY2hlIiwiaGFzQ2FjaGVVcGRhdGVDYWxsYmFjayIsIm9sZFJlc3BvbnNlIiwibmV3UmVzcG9uc2UiLCJzdGF0ZWZ1bENhbGxiYWNrIiwic3RhdGVmdWxQYXJhbSIsInNoaWZ0IiwicGx1Z2luc1VzZWQiLCJzdHJhdGVneU5hbWUiLCJ3Iiwid3JhcCIsInIiLCJyZXBsYWNlVHJhcHMiLCJ1IiwidW53cmFwIiwidmVyc2lvbiIsImJsb2NrZWQiLCJibG9ja2luZyIsInRlcm1pbmF0ZWQiLCJpbmRleGVkREIiLCJvcGVuUHJvbWlzZSIsIm9sZFZlcnNpb24iLCJuZXdWZXJzaW9uIiwiZGVsZXRlRGF0YWJhc2UiLCJyZWFkTWV0aG9kcyIsIndyaXRlTWV0aG9kcyIsImNhY2hlZE1ldGhvZHMiLCJnZXRNZXRob2QiLCJ0YXJnZXQiLCJwcm9wIiwiSURCRGF0YWJhc2UiLCJ0YXJnZXRGdW5jTmFtZSIsInVzZUluZGV4IiwiaXNXcml0ZSIsIklEQkluZGV4IiwiSURCT2JqZWN0U3RvcmUiLCJwcm90b3R5cGUiLCJzdG9yZU5hbWUiLCJvbGRUcmFwcyIsInJlY2VpdmVyIiwiaW5zdGFuY2VPZkFueSIsImNvbnN0cnVjdG9ycyIsImMiLCJpZGJQcm94eWFibGVUeXBlcyIsImN1cnNvckFkdmFuY2VNZXRob2RzIiwiZ2V0SWRiUHJveHlhYmxlVHlwZXMiLCJJREJDdXJzb3IiLCJJREJUcmFuc2FjdGlvbiIsImdldEN1cnNvckFkdmFuY2VNZXRob2RzIiwiYWR2YW5jZSIsImNvbnRpbnVlUHJpbWFyeUtleSIsImN1cnNvclJlcXVlc3RNYXAiLCJXZWFrTWFwIiwidHJhbnNhY3Rpb25Eb25lTWFwIiwidHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwIiwidHJhbnNmb3JtQ2FjaGUiLCJyZXZlcnNlVHJhbnNmb3JtQ2FjaGUiLCJwcm9taXNpZnlSZXF1ZXN0IiwidW5saXN0ZW4iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3VjY2VzcyIsImNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbiIsImNvbXBsZXRlIiwiRE9NRXhjZXB0aW9uIiwiaWRiUHJveHlUcmFwcyIsIm9iamVjdFN0b3JlTmFtZXMiLCJvYmplY3RTdG9yZSIsIndyYXBGdW5jdGlvbiIsImZ1bmMiLCJzdG9yZU5hbWVzIiwiY2FsbCIsInNvcnQiLCJhcHBseSIsInRyYW5zZm9ybUNhY2hhYmxlVmFsdWUiLCJQcm94eSIsIklEQlJlcXVlc3QiLCJuZXdWYWx1ZSIsImEiLCJpIiwibWFuaWZlc3QiLCJfX1dCX01BTklGRVNUIiwiX3JlZiIsIl9yZWYyIiwiX3JlZjMiLCJfcmVmNCIsIl9yZWY1IiwiX3JlZjYiLCJfcmVmNyIsIl9yZWY4IiwiX3JlZjkiLCJMT0dPX1VSTCIsImdldFRpdGxlIiwidGl0bGUiLCJza2lwV2FpdGluZyIsIm5vdGlmaWNhdGlvblRpdGxlIiwibm90aWZpY2F0aW9uT3B0aW9ucyIsIm5vdGlmaWNhdGlvbkJvZHkiLCJub3RpZmljYXRpb25UYWciLCJyZXNwb25zZUpzb24iLCJqc29uIiwiaGVhZCIsInRvVXBwZXJDYXNlIiwidGFnIiwiaWNvbiIsIndpbmRvdyIsImFjdGlvbnMiLCJhY3Rpb24iLCJ2aWJyYXRlIiwidGV4dCIsInNob3dOb3RpZmljYXRpb24iLCJjbGllbnRzIiwibWF0Y2hBbGwiLCJpbmNsdWRlVW5jb250cm9sbGVkIiwiY2xpZW50IiwiZGF0YV90aXRsZSIsImRhdGFfYm9keSIsIm5vdGlmaWNhdGlvbiIsImNsb3NlIiwid2luZG93Q2xpZW50cyIsImZvY3VzIiwicHJldmVudERlZmF1bHQiLCJvcGVuV2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==