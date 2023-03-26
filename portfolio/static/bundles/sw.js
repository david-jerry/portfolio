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




const manifest = [{'revision':'9aa081bf04b0cc0b396741346d0b5411','url':'/static/bundles/assets/android-chrome-144x144.png'},{'revision':'eff7ec44ea62f196467185b5fb395a3f','url':'/static/bundles/assets/android-chrome-192x192.png'},{'revision':'714d0cd63ad2300621fa1dc1ec10e00f','url':'/static/bundles/assets/android-chrome-256x256.png'},{'revision':'043c02db81db187ce4e0d317221f2361','url':'/static/bundles/assets/android-chrome-36x36.png'},{'revision':'81339766ddedf63d458c177e3d2c64a7','url':'/static/bundles/assets/android-chrome-384x384.png'},{'revision':'7a6d45e6e2b3b38c68e50c7feec5b3da','url':'/static/bundles/assets/android-chrome-48x48.png'},{'revision':'18e1b1acd009172c53a2bdf3589d12d9','url':'/static/bundles/assets/android-chrome-512x512.png'},{'revision':'d1af0f5f78e3848463a414c45bfcfdd9','url':'/static/bundles/assets/android-chrome-72x72.png'},{'revision':'b0981cb0ad4b94c68897f0c774ae70a9','url':'/static/bundles/assets/android-chrome-96x96.png'},{'revision':'93d978870f6df361facf7609fc886642','url':'/static/bundles/assets/apple-touch-icon-1024x1024.png'},{'revision':'ac2076a47e992a860e03621ed0a1a158','url':'/static/bundles/assets/apple-touch-icon-114x114.png'},{'revision':'8b957fd2f81c1e6d9df909ed2a5370ac','url':'/static/bundles/assets/apple-touch-icon-120x120.png'},{'revision':'b534e163843ea70d2b4ae73008d20bf8','url':'/static/bundles/assets/apple-touch-icon-144x144.png'},{'revision':'3950017fd5787e984e40f8c74cb23f4c','url':'/static/bundles/assets/apple-touch-icon-152x152.png'},{'revision':'35f3e32f0da6b33966b74db7609fae01','url':'/static/bundles/assets/apple-touch-icon-167x167.png'},{'revision':'7deeab69c111a8a85accad43cb47d9dd','url':'/static/bundles/assets/apple-touch-icon-180x180.png'},{'revision':'074280a0ecc029d4a304a24cf90f4b0d','url':'/static/bundles/assets/apple-touch-icon-57x57.png'},{'revision':'f3c67902f2e92f8d6eda165a1384cf97','url':'/static/bundles/assets/apple-touch-icon-60x60.png'},{'revision':'995a3f1dbe845b955c3936b97c4a8aa5','url':'/static/bundles/assets/apple-touch-icon-72x72.png'},{'revision':'945b07066505bcb97ffc668dbf2e3285','url':'/static/bundles/assets/apple-touch-icon-76x76.png'},{'revision':'7deeab69c111a8a85accad43cb47d9dd','url':'/static/bundles/assets/apple-touch-icon-precomposed.png'},{'revision':'7deeab69c111a8a85accad43cb47d9dd','url':'/static/bundles/assets/apple-touch-icon.png'},{'revision':'ac855251e86a3f59b314f78cbb355554','url':'/static/bundles/assets/browserconfig.xml'},{'revision':'20e01b6efb11692c0f289ca2c67c1fbe','url':'/static/bundles/assets/favicon-16x16.png'},{'revision':'0b18ef26448e488531859ae709978ff8','url':'/static/bundles/assets/favicon-32x32.png'},{'revision':'7a6d45e6e2b3b38c68e50c7feec5b3da','url':'/static/bundles/assets/favicon-48x48.png'},{'revision':'f9afc8fc7ab182c68a5538e06094a847','url':'/static/bundles/assets/favicon.ico'},{'revision':'ebf86de8d5da83ef7055f352f142bbe1','url':'/static/bundles/assets/firefox_app_128x128.png'},{'revision':'512f909ab4aa939c077f78b8aa40c79e','url':'/static/bundles/assets/firefox_app_512x512.png'},{'revision':'091579635f7fe7a3c716260c42e865fd','url':'/static/bundles/assets/firefox_app_60x60.png'},{'revision':'c0cbc63a61e5a5749d683674628e2467','url':'/static/bundles/assets/manifest.json'},{'revision':'ad71116472d5c6df58004bde0a3c7918','url':'/static/bundles/assets/manifest.webapp'},{'revision':'9aa081bf04b0cc0b396741346d0b5411','url':'/static/bundles/assets/mstile-144x144.png'},{'revision':'f8d72d460370adfb05bc93d5ae23d36b','url':'/static/bundles/assets/mstile-150x150.png'},{'revision':'80ac203eef42ab4acde0ee6736ef4c4d','url':'/static/bundles/assets/mstile-310x150.png'},{'revision':'18632e41610623338de7ceb237ec16e1','url':'/static/bundles/assets/mstile-310x310.png'},{'revision':'803aec00fadce60534b08eead74166a9','url':'/static/bundles/assets/mstile-70x70.png'},{'revision':null,'url':'/static/bundles/css/project.10e5dfc43f64b80038d9.css'},{'revision':null,'url':'/static/bundles/css/vendors-node_modules_alpinejs_intersect_dist_module_esm_js-node_modules_lottiefiles_lottie-pl-c2aee0.c263e9e9966e571b4bc0.css'},{'revision':'cc32a189c3b96d1bbcf8eb8ef2616ed2','url':'/static/bundles/index.html'},{'revision':null,'url':'/static/bundles/js/project-8002598e33dd8b00e067.js'},{'revision':null,'url':'/static/bundles/js/runtime-8002598e33dd8b00e067.js'},{'revision':null,'url':'/static/bundles/js/vendors-8002598e33dd8b00e067.js'},{'revision':null,'url':'/static/bundles/js/vendors-node_modules_alpinejs_intersect_dist_module_esm_js-node_modules_lottiefiles_lottie-pl-c2aee0-8002598e33dd8b00e067.js'}];
if (manifest) {
  // console.log("precaching: ", manifest);
  (0,workbox_precaching_precacheAndRoute__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)(manifest);
}

// https://web.dev/offline-fallback-page/
// const CACHE_NAME = 'offline-html';
const FALLBACK_HTML_URL = "/offline/";

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
(0,workbox_recipes__WEBPACK_IMPORTED_MODULE_1__.offlineFallback)({
  pageFallback: FALLBACK_HTML_URL
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdLLGFBQWEsQ0FBQ3pDLENBQUMsQ0FBQztNQUM3QixJQUFJLE9BQU8sSUFBSW9DLE1BQU0sRUFBRTtRQUNyQixPQUFPQSxNQUFNLENBQUNNLEtBQUssRUFBRTtNQUN2QjtJQUNGO0VBQ0YsQ0FBQyxDQUFDLENBQ0w7RUFDRCxJQUFJbmdCLEtBQUssQ0FBQ2dnQixZQUFZLENBQUNwTSxJQUFJLEtBQUssSUFBSSxFQUFFO0lBQ3BDNVQsS0FBSyxDQUFDRCxTQUFTLENBQ2JDLEtBQUssQ0FBQ29nQixjQUFjLEVBQUUsRUFDdEJobkIsSUFBSSxDQUFDc21CLE9BQU8sQ0FBQ1csVUFBVSxDQUFDcmdCLEtBQUssQ0FBQ2dnQixZQUFZLENBQUNwTSxJQUFJLENBQUNwYixHQUFHLENBQUMsQ0FDckQ7RUFDSDtBQUNGLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlL0NhY2hlYWJsZVJlc3BvbnNlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZS9DYWNoZWFibGVSZXNwb25zZVBsdWdpbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2UvX3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvRGVmZXJyZWQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU1hdGNoSWdub3JlUGFyYW1zLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2NhbkNvbnN0cnVjdFJlc3BvbnNlRnJvbUJvZHlTdHJlYW0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9kb250V2FpdEZvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2V4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS90aW1lb3V0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvd2FpdFVudGlsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9jb3B5UmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9tb2RlbHMvbWVzc2FnZXMvbWVzc2FnZUdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL21vZGVscy9tZXNzYWdlcy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL21vZGVscy9xdW90YUVycm9yQ2FsbGJhY2tzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtZXhwaXJhdGlvbi9DYWNoZUV4cGlyYXRpb24uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtZXhwaXJhdGlvbi9FeHBpcmF0aW9uUGx1Z2luLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LWV4cGlyYXRpb24vX3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtZXhwaXJhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1leHBpcmF0aW9uL21vZGVscy9DYWNoZVRpbWVzdGFtcHNNb2RlbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL1ByZWNhY2hlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL1ByZWNhY2hlUm91dGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9QcmVjYWNoZVN0cmF0ZWd5LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvX3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9hZGRSb3V0ZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL21hdGNoUHJlY2FjaGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9wcmVjYWNoZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3ByZWNhY2hlQW5kUm91dGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9QcmVjYWNoZUNhY2hlS2V5UGx1Z2luLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvUHJlY2FjaGVJbnN0YWxsUmVwb3J0UGx1Z2luLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvY3JlYXRlQ2FjaGVLZXkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9nZW5lcmF0ZVVSTFZhcmlhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL3ByaW50Q2xlYW51cERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9wcmludEluc3RhbGxEZXRhaWxzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvcmVtb3ZlSWdub3JlZFNlYXJjaFBhcmFtcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1yZWNpcGVzL192ZXJzaW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJlY2lwZXMvZ29vZ2xlRm9udHNDYWNoZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1yZWNpcGVzL2ltYWdlQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcmVjaXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1yZWNpcGVzL29mZmxpbmVGYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1yZWNpcGVzL3BhZ2VDYWNoZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1yZWNpcGVzL3N0YXRpY1Jlc291cmNlQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcmVjaXBlcy93YXJtU3RyYXRlZ3lDYWNoZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL05hdmlnYXRpb25Sb3V0ZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL1JlZ0V4cFJvdXRlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvUm91dGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9fdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvcmVnaXN0ZXJSb3V0ZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL3NldENhdGNoSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL3NldERlZmF1bHRIYW5kbGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvdXRpbHMvZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvdXRpbHMvbm9ybWFsaXplSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL0NhY2hlRmlyc3QuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9DYWNoZU9ubHkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9OZXR3b3JrRmlyc3QuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9OZXR3b3JrT25seS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL1N0YWxlV2hpbGVSZXZhbGlkYXRlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvU3RyYXRlZ3kuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9TdHJhdGVneUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9fdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvcGx1Z2lucy9jYWNoZU9rQW5kT3BhcXVlUGx1Z2luLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvdXRpbHMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1leHBpcmF0aW9uL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1yZWNpcGVzL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9pZGIvYnVpbGQvd3JhcC1pZGItdmFsdWUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby8uL3BvcnRmb2xpby9zdGF0aWMvanMvc3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IGdldEZyaWVuZGx5VVJMIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogVGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIHNldCB1cCBydWxlcyBkZXRlcm1pbmluZyB3aGF0XG4gKiBzdGF0dXMgY29kZXMgYW5kL29yIGhlYWRlcnMgbmVlZCB0byBiZSBwcmVzZW50IGluIG9yZGVyIGZvciBhXG4gKiBbYFJlc3BvbnNlYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Jlc3BvbnNlKVxuICogdG8gYmUgY29uc2lkZXJlZCBjYWNoZWFibGUuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlXG4gKi9cbmNsYXNzIENhY2hlYWJsZVJlc3BvbnNlIHtcbiAgICAvKipcbiAgICAgKiBUbyBjb25zdHJ1Y3QgYSBuZXcgQ2FjaGVhYmxlUmVzcG9uc2UgaW5zdGFuY2UgeW91IG11c3QgcHJvdmlkZSBhdCBsZWFzdFxuICAgICAqIG9uZSBvZiB0aGUgYGNvbmZpZ2AgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIElmIGJvdGggYHN0YXR1c2VzYCBhbmQgYGhlYWRlcnNgIGFyZSBzcGVjaWZpZWQsIHRoZW4gYm90aCBjb25kaXRpb25zIG11c3RcbiAgICAgKiBiZSBtZXQgZm9yIHRoZSBgUmVzcG9uc2VgIHRvIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2NvbmZpZy5zdGF0dXNlc10gT25lIG9yIG1vcmUgc3RhdHVzIGNvZGVzIHRoYXQgYVxuICAgICAqIGBSZXNwb25zZWAgY2FuIGhhdmUgYW5kIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZyxzdHJpbmc+fSBbY29uZmlnLmhlYWRlcnNdIEEgbWFwcGluZyBvZiBoZWFkZXIgbmFtZXNcbiAgICAgKiBhbmQgZXhwZWN0ZWQgdmFsdWVzIHRoYXQgYSBgUmVzcG9uc2VgIGNhbiBoYXZlIGFuZCBiZSBjb25zaWRlcmVkIGNhY2hlYWJsZS5cbiAgICAgKiBJZiBtdWx0aXBsZSBoZWFkZXJzIGFyZSBwcm92aWRlZCwgb25seSBvbmUgbmVlZHMgdG8gYmUgcHJlc2VudC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKCEoY29uZmlnLnN0YXR1c2VzIHx8IGNvbmZpZy5oZWFkZXJzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ3N0YXR1c2VzLW9yLWhlYWRlcnMtcmVxdWlyZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZScsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlYWJsZVJlc3BvbnNlJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLnN0YXR1c2VzKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzQXJyYXkoY29uZmlnLnN0YXR1c2VzLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZScsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlYWJsZVJlc3BvbnNlJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5zdGF0dXNlcycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLmhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNUeXBlKGNvbmZpZy5oZWFkZXJzLCAnb2JqZWN0Jywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2UnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZWFibGVSZXNwb25zZScsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdjb25maWcuaGVhZGVycycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhdHVzZXMgPSBjb25maWcuc3RhdHVzZXM7XG4gICAgICAgIHRoaXMuX2hlYWRlcnMgPSBjb25maWcuaGVhZGVycztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGEgcmVzcG9uc2UgdG8gc2VlIHdoZXRoZXIgaXQncyBjYWNoZWFibGUgb3Igbm90LCBiYXNlZCBvbiB0aGlzXG4gICAgICogb2JqZWN0J3MgY29uZmlndXJhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc3BvbnNlIFRoZSByZXNwb25zZSB3aG9zZSBjYWNoZWFiaWxpdHkgaXMgYmVpbmdcbiAgICAgKiBjaGVja2VkLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgYFJlc3BvbnNlYCBpcyBjYWNoZWFibGUsIGFuZCBgZmFsc2VgXG4gICAgICogb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGlzUmVzcG9uc2VDYWNoZWFibGUocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlc3BvbnNlLCBSZXNwb25zZSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZScsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVhYmxlUmVzcG9uc2UnLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnaXNSZXNwb25zZUNhY2hlYWJsZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncmVzcG9uc2UnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNhY2hlYWJsZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0dXNlcykge1xuICAgICAgICAgICAgY2FjaGVhYmxlID0gdGhpcy5fc3RhdHVzZXMuaW5jbHVkZXMocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faGVhZGVycyAmJiBjYWNoZWFibGUpIHtcbiAgICAgICAgICAgIGNhY2hlYWJsZSA9IE9iamVjdC5rZXlzKHRoaXMuX2hlYWRlcnMpLnNvbWUoKGhlYWRlck5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuaGVhZGVycy5nZXQoaGVhZGVyTmFtZSkgPT09IHRoaXMuX2hlYWRlcnNbaGVhZGVyTmFtZV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKCFjYWNoZWFibGUpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFRoZSByZXF1ZXN0IGZvciBgICtcbiAgICAgICAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlc3BvbnNlLnVybCl9JyByZXR1cm5lZCBhIHJlc3BvbnNlIHRoYXQgZG9lcyBgICtcbiAgICAgICAgICAgICAgICAgICAgYG5vdCBtZWV0IHRoZSBjcml0ZXJpYSBmb3IgYmVpbmcgY2FjaGVkLmApO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyBjYWNoZWFiaWxpdHkgY3JpdGVyaWEgaGVyZS5gKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBDYWNoZWFibGUgc3RhdHVzZXM6IGAgKyBKU09OLnN0cmluZ2lmeSh0aGlzLl9zdGF0dXNlcykpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYENhY2hlYWJsZSBoZWFkZXJzOiBgICsgSlNPTi5zdHJpbmdpZnkodGhpcy5faGVhZGVycywgbnVsbCwgMikpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvZ0ZyaWVuZGx5SGVhZGVycyA9IHt9O1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmhlYWRlcnMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2dGcmllbmRseUhlYWRlcnNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyByZXNwb25zZSBzdGF0dXMgYW5kIGhlYWRlcnMgaGVyZS5gKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBSZXNwb25zZSBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYFJlc3BvbnNlIGhlYWRlcnM6IGAgKyBKU09OLnN0cmluZ2lmeShsb2dGcmllbmRseUhlYWRlcnMsIG51bGwsIDIpKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFZpZXcgZnVsbCByZXNwb25zZSBkZXRhaWxzIGhlcmUuYCk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhyZXNwb25zZS5oZWFkZXJzKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FjaGVhYmxlO1xuICAgIH1cbn1cbmV4cG9ydCB7IENhY2hlYWJsZVJlc3BvbnNlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBDYWNoZWFibGVSZXNwb25zZSwgfSBmcm9tICcuL0NhY2hlYWJsZVJlc3BvbnNlLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEEgY2xhc3MgaW1wbGVtZW50aW5nIHRoZSBgY2FjaGVXaWxsVXBkYXRlYCBsaWZlY3ljbGUgY2FsbGJhY2suIFRoaXMgbWFrZXMgaXRcbiAqIGVhc2llciB0byBhZGQgaW4gY2FjaGVhYmlsaXR5IGNoZWNrcyB0byByZXF1ZXN0cyBtYWRlIHZpYSBXb3JrYm94J3MgYnVpbHQtaW5cbiAqIHN0cmF0ZWdpZXMuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlXG4gKi9cbmNsYXNzIENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luIHtcbiAgICAvKipcbiAgICAgKiBUbyBjb25zdHJ1Y3QgYSBuZXcgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4gaW5zdGFuY2UgeW91IG11c3QgcHJvdmlkZSBhdFxuICAgICAqIGxlYXN0IG9uZSBvZiB0aGUgYGNvbmZpZ2AgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIElmIGJvdGggYHN0YXR1c2VzYCBhbmQgYGhlYWRlcnNgIGFyZSBzcGVjaWZpZWQsIHRoZW4gYm90aCBjb25kaXRpb25zIG11c3RcbiAgICAgKiBiZSBtZXQgZm9yIHRoZSBgUmVzcG9uc2VgIHRvIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2NvbmZpZy5zdGF0dXNlc10gT25lIG9yIG1vcmUgc3RhdHVzIGNvZGVzIHRoYXQgYVxuICAgICAqIGBSZXNwb25zZWAgY2FuIGhhdmUgYW5kIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZyxzdHJpbmc+fSBbY29uZmlnLmhlYWRlcnNdIEEgbWFwcGluZyBvZiBoZWFkZXIgbmFtZXNcbiAgICAgKiBhbmQgZXhwZWN0ZWQgdmFsdWVzIHRoYXQgYSBgUmVzcG9uc2VgIGNhbiBoYXZlIGFuZCBiZSBjb25zaWRlcmVkIGNhY2hlYWJsZS5cbiAgICAgKiBJZiBtdWx0aXBsZSBoZWFkZXJzIGFyZSBwcm92aWRlZCwgb25seSBvbmUgbmVlZHMgdG8gYmUgcHJlc2VudC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqIEBwYXJhbSB7UmVzcG9uc2V9IG9wdGlvbnMucmVzcG9uc2VcbiAgICAgICAgICogQHJldHVybiB7UmVzcG9uc2V8bnVsbH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2FjaGVXaWxsVXBkYXRlID0gYXN5bmMgKHsgcmVzcG9uc2UgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlYWJsZVJlc3BvbnNlLmlzUmVzcG9uc2VDYWNoZWFibGUocmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2NhY2hlYWJsZVJlc3BvbnNlID0gbmV3IENhY2hlYWJsZVJlc3BvbnNlKGNvbmZpZyk7XG4gICAgfVxufVxuZXhwb3J0IHsgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4gfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gQHRzLWlnbm9yZVxudHJ5IHtcbiAgICBzZWxmWyd3b3JrYm94OmNhY2hlYWJsZS1yZXNwb25zZTo2LjUuMyddICYmIF8oKTtcbn1cbmNhdGNoIChlKSB7IH1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IENhY2hlYWJsZVJlc3BvbnNlLCB9IGZyb20gJy4vQ2FjaGVhYmxlUmVzcG9uc2UuanMnO1xuaW1wb3J0IHsgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4gfSBmcm9tICcuL0NhY2hlYWJsZVJlc3BvbnNlUGx1Z2luLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEBtb2R1bGUgd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHsgQ2FjaGVhYmxlUmVzcG9uc2UsIENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogVGhlIERlZmVycmVkIGNsYXNzIGNvbXBvc2VzIFByb21pc2VzIGluIGEgd2F5IHRoYXQgYWxsb3dzIGZvciB0aGVtIHRvIGJlXG4gKiByZXNvbHZlZCBvciByZWplY3RlZCBmcm9tIG91dHNpZGUgdGhlIGNvbnN0cnVjdG9yLiBJbiBtb3N0IGNhc2VzIHByb21pc2VzXG4gKiBzaG91bGQgYmUgdXNlZCBkaXJlY3RseSwgYnV0IERlZmVycmVkcyBjYW4gYmUgbmVjZXNzYXJ5IHdoZW4gdGhlIGxvZ2ljIHRvXG4gKiByZXNvbHZlIGEgcHJvbWlzZSBtdXN0IGJlIHNlcGFyYXRlLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIERlZmVycmVkIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcHJvbWlzZSBhbmQgZXhwb3NlcyBpdHMgcmVzb2x2ZSBhbmQgcmVqZWN0IGZ1bmN0aW9ucyBhcyBtZXRob2RzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCB7IERlZmVycmVkIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBtZXNzYWdlR2VuZXJhdG9yIH0gZnJvbSAnLi4vbW9kZWxzL21lc3NhZ2VzL21lc3NhZ2VHZW5lcmF0b3IuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFdvcmtib3ggZXJyb3JzIHNob3VsZCBiZSB0aHJvd24gd2l0aCB0aGlzIGNsYXNzLlxuICogVGhpcyBhbGxvd3MgdXNlIHRvIGVuc3VyZSB0aGUgdHlwZSBlYXNpbHkgaW4gdGVzdHMsXG4gKiBoZWxwcyBkZXZlbG9wZXJzIGlkZW50aWZ5IGVycm9ycyBmcm9tIHdvcmtib3hcbiAqIGVhc2lseSBhbmQgYWxsb3dzIHVzZSB0byBvcHRpbWlzZSBlcnJvclxuICogbWVzc2FnZXMgY29ycmVjdGx5LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIFdvcmtib3hFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlcnJvckNvZGUgVGhlIGVycm9yIGNvZGUgdGhhdFxuICAgICAqIGlkZW50aWZpZXMgdGhpcyBwYXJ0aWN1bGFyIGVycm9yLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0PX0gZGV0YWlscyBBbnkgcmVsZXZhbnQgYXJndW1lbnRzXG4gICAgICogdGhhdCB3aWxsIGhlbHAgZGV2ZWxvcGVycyBpZGVudGlmeSBpc3N1ZXMgc2hvdWxkXG4gICAgICogYmUgYWRkZWQgYXMgYSBrZXkgb24gdGhlIGNvbnRleHQgb2JqZWN0LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZSwgZGV0YWlscykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gbWVzc2FnZUdlbmVyYXRvcihlcnJvckNvZGUsIGRldGFpbHMpO1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gZXJyb3JDb2RlO1xuICAgICAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICAgIH1cbn1cbmV4cG9ydCB7IFdvcmtib3hFcnJvciB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnLi4vX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLypcbiAqIFRoaXMgbWV0aG9kIHRocm93cyBpZiB0aGUgc3VwcGxpZWQgdmFsdWUgaXMgbm90IGFuIGFycmF5LlxuICogVGhlIGRlc3RydWN0ZWQgdmFsdWVzIGFyZSByZXF1aXJlZCB0byBwcm9kdWNlIGEgbWVhbmluZ2Z1bCBlcnJvciBmb3IgdXNlcnMuXG4gKiBUaGUgZGVzdHJ1Y3RlZCBhbmQgcmVzdHJ1Y3R1cmVkIG9iamVjdCBpcyBzbyBpdCdzIGNsZWFyIHdoYXQgaXNcbiAqIG5lZWRlZC5cbiAqL1xuY29uc3QgaXNBcnJheSA9ICh2YWx1ZSwgZGV0YWlscykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm90LWFuLWFycmF5JywgZGV0YWlscyk7XG4gICAgfVxufTtcbmNvbnN0IGhhc01ldGhvZCA9IChvYmplY3QsIGV4cGVjdGVkTWV0aG9kLCBkZXRhaWxzKSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBvYmplY3RbZXhwZWN0ZWRNZXRob2RdO1xuICAgIGlmICh0eXBlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRldGFpbHNbJ2V4cGVjdGVkTWV0aG9kJ10gPSBleHBlY3RlZE1ldGhvZDtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbWlzc2luZy1hLW1ldGhvZCcsIGRldGFpbHMpO1xuICAgIH1cbn07XG5jb25zdCBpc1R5cGUgPSAob2JqZWN0LCBleHBlY3RlZFR5cGUsIGRldGFpbHMpID0+IHtcbiAgICBpZiAodHlwZW9mIG9iamVjdCAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIGRldGFpbHNbJ2V4cGVjdGVkVHlwZSddID0gZXhwZWN0ZWRUeXBlO1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbmNvcnJlY3QtdHlwZScsIGRldGFpbHMpO1xuICAgIH1cbn07XG5jb25zdCBpc0luc3RhbmNlID0gKG9iamVjdCwgXG4vLyBOZWVkIHRoZSBnZW5lcmFsIHR5cGUgdG8gZG8gdGhlIGNoZWNrIGxhdGVyLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmV4cGVjdGVkQ2xhc3MsIGRldGFpbHMpID0+IHtcbiAgICBpZiAoIShvYmplY3QgaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICBkZXRhaWxzWydleHBlY3RlZENsYXNzTmFtZSddID0gZXhwZWN0ZWRDbGFzcy5uYW1lO1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbmNvcnJlY3QtY2xhc3MnLCBkZXRhaWxzKTtcbiAgICB9XG59O1xuY29uc3QgaXNPbmVPZiA9ICh2YWx1ZSwgdmFsaWRWYWx1ZXMsIGRldGFpbHMpID0+IHtcbiAgICBpZiAoIXZhbGlkVmFsdWVzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICBkZXRhaWxzWyd2YWxpZFZhbHVlRGVzY3JpcHRpb24nXSA9IGBWYWxpZCB2YWx1ZXMgYXJlICR7SlNPTi5zdHJpbmdpZnkodmFsaWRWYWx1ZXMpfS5gO1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbnZhbGlkLXZhbHVlJywgZGV0YWlscyk7XG4gICAgfVxufTtcbmNvbnN0IGlzQXJyYXlPZkNsYXNzID0gKHZhbHVlLCBcbi8vIE5lZWQgZ2VuZXJhbCB0eXBlIHRvIGRvIGNoZWNrIGxhdGVyLlxuZXhwZWN0ZWRDbGFzcywgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuZGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IFdvcmtib3hFcnJvcignbm90LWFycmF5LW9mLWNsYXNzJywgZGV0YWlscyk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICAgIGlmICghKGl0ZW0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgZmluYWxBc3NlcnRFeHBvcnRzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgID8gbnVsbFxuICAgIDoge1xuICAgICAgICBoYXNNZXRob2QsXG4gICAgICAgIGlzQXJyYXksXG4gICAgICAgIGlzSW5zdGFuY2UsXG4gICAgICAgIGlzT25lT2YsXG4gICAgICAgIGlzVHlwZSxcbiAgICAgICAgaXNBcnJheU9mQ2xhc3MsXG4gICAgfTtcbmV4cG9ydCB7IGZpbmFsQXNzZXJ0RXhwb3J0cyBhcyBhc3NlcnQgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmZ1bmN0aW9uIHN0cmlwUGFyYW1zKGZ1bGxVUkwsIGlnbm9yZVBhcmFtcykge1xuICAgIGNvbnN0IHN0cmlwcGVkVVJMID0gbmV3IFVSTChmdWxsVVJMKTtcbiAgICBmb3IgKGNvbnN0IHBhcmFtIG9mIGlnbm9yZVBhcmFtcykge1xuICAgICAgICBzdHJpcHBlZFVSTC5zZWFyY2hQYXJhbXMuZGVsZXRlKHBhcmFtKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmlwcGVkVVJMLmhyZWY7XG59XG4vKipcbiAqIE1hdGNoZXMgYW4gaXRlbSBpbiB0aGUgY2FjaGUsIGlnbm9yaW5nIHNwZWNpZmljIFVSTCBwYXJhbXMuIFRoaXMgaXMgc2ltaWxhclxuICogdG8gdGhlIGBpZ25vcmVTZWFyY2hgIG9wdGlvbiwgYnV0IGl0IGFsbG93cyB5b3UgdG8gaWdub3JlIGp1c3Qgc3BlY2lmaWNcbiAqIHBhcmFtcyAod2hpbGUgY29udGludWluZyB0byBtYXRjaCBvbiB0aGUgb3RoZXJzKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtDYWNoZX0gY2FjaGVcbiAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxdWVzdFxuICogQHBhcmFtIHtPYmplY3R9IG1hdGNoT3B0aW9uc1xuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBpZ25vcmVQYXJhbXNcbiAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2V8dW5kZWZpbmVkPn1cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2FjaGVNYXRjaElnbm9yZVBhcmFtcyhjYWNoZSwgcmVxdWVzdCwgaWdub3JlUGFyYW1zLCBtYXRjaE9wdGlvbnMpIHtcbiAgICBjb25zdCBzdHJpcHBlZFJlcXVlc3RVUkwgPSBzdHJpcFBhcmFtcyhyZXF1ZXN0LnVybCwgaWdub3JlUGFyYW1zKTtcbiAgICAvLyBJZiB0aGUgcmVxdWVzdCBkb2Vzbid0IGluY2x1ZGUgYW55IGlnbm9yZWQgcGFyYW1zLCBtYXRjaCBhcyBub3JtYWwuXG4gICAgaWYgKHJlcXVlc3QudXJsID09PSBzdHJpcHBlZFJlcXVlc3RVUkwpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlLm1hdGNoKHJlcXVlc3QsIG1hdGNoT3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgbWF0Y2ggYnkgY29tcGFyaW5nIGtleXNcbiAgICBjb25zdCBrZXlzT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbWF0Y2hPcHRpb25zKSwgeyBpZ25vcmVTZWFyY2g6IHRydWUgfSk7XG4gICAgY29uc3QgY2FjaGVLZXlzID0gYXdhaXQgY2FjaGUua2V5cyhyZXF1ZXN0LCBrZXlzT3B0aW9ucyk7XG4gICAgZm9yIChjb25zdCBjYWNoZUtleSBvZiBjYWNoZUtleXMpIHtcbiAgICAgICAgY29uc3Qgc3RyaXBwZWRDYWNoZUtleVVSTCA9IHN0cmlwUGFyYW1zKGNhY2hlS2V5LnVybCwgaWdub3JlUGFyYW1zKTtcbiAgICAgICAgaWYgKHN0cmlwcGVkUmVxdWVzdFVSTCA9PT0gc3RyaXBwZWRDYWNoZUtleVVSTCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlLm1hdGNoKGNhY2hlS2V5LCBtYXRjaE9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbn1cbmV4cG9ydCB7IGNhY2hlTWF0Y2hJZ25vcmVQYXJhbXMgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuY29uc3QgX2NhY2hlTmFtZURldGFpbHMgPSB7XG4gICAgZ29vZ2xlQW5hbHl0aWNzOiAnZ29vZ2xlQW5hbHl0aWNzJyxcbiAgICBwcmVjYWNoZTogJ3ByZWNhY2hlLXYyJyxcbiAgICBwcmVmaXg6ICd3b3JrYm94JyxcbiAgICBydW50aW1lOiAncnVudGltZScsXG4gICAgc3VmZml4OiB0eXBlb2YgcmVnaXN0cmF0aW9uICE9PSAndW5kZWZpbmVkJyA/IHJlZ2lzdHJhdGlvbi5zY29wZSA6ICcnLFxufTtcbmNvbnN0IF9jcmVhdGVDYWNoZU5hbWUgPSAoY2FjaGVOYW1lKSA9PiB7XG4gICAgcmV0dXJuIFtfY2FjaGVOYW1lRGV0YWlscy5wcmVmaXgsIGNhY2hlTmFtZSwgX2NhY2hlTmFtZURldGFpbHMuc3VmZml4XVxuICAgICAgICAuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMClcbiAgICAgICAgLmpvaW4oJy0nKTtcbn07XG5jb25zdCBlYWNoQ2FjaGVOYW1lRGV0YWlsID0gKGZuKSA9PiB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoX2NhY2hlTmFtZURldGFpbHMpKSB7XG4gICAgICAgIGZuKGtleSk7XG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBjYWNoZU5hbWVzID0ge1xuICAgIHVwZGF0ZURldGFpbHM6IChkZXRhaWxzKSA9PiB7XG4gICAgICAgIGVhY2hDYWNoZU5hbWVEZXRhaWwoKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkZXRhaWxzW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgX2NhY2hlTmFtZURldGFpbHNba2V5XSA9IGRldGFpbHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXRHb29nbGVBbmFseXRpY3NOYW1lOiAodXNlckNhY2hlTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gdXNlckNhY2hlTmFtZSB8fCBfY3JlYXRlQ2FjaGVOYW1lKF9jYWNoZU5hbWVEZXRhaWxzLmdvb2dsZUFuYWx5dGljcyk7XG4gICAgfSxcbiAgICBnZXRQcmVjYWNoZU5hbWU6ICh1c2VyQ2FjaGVOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VyQ2FjaGVOYW1lIHx8IF9jcmVhdGVDYWNoZU5hbWUoX2NhY2hlTmFtZURldGFpbHMucHJlY2FjaGUpO1xuICAgIH0sXG4gICAgZ2V0UHJlZml4OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfY2FjaGVOYW1lRGV0YWlscy5wcmVmaXg7XG4gICAgfSxcbiAgICBnZXRSdW50aW1lTmFtZTogKHVzZXJDYWNoZU5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZXJDYWNoZU5hbWUgfHwgX2NyZWF0ZUNhY2hlTmFtZShfY2FjaGVOYW1lRGV0YWlscy5ydW50aW1lKTtcbiAgICB9LFxuICAgIGdldFN1ZmZpeDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gX2NhY2hlTmFtZURldGFpbHMuc3VmZml4O1xuICAgIH0sXG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5sZXQgc3VwcG9ydFN0YXR1cztcbi8qKlxuICogQSB1dGlsaXR5IGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHNcbiAqIGNvbnN0cnVjdGluZyBhIG5ldyBgUmVzcG9uc2VgIGZyb20gYSBgcmVzcG9uc2UuYm9keWAgc3RyZWFtLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCwgaWYgdGhlIGN1cnJlbnQgYnJvd3NlciBjYW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgY29uc3RydWN0IGEgYFJlc3BvbnNlYCBmcm9tIGEgYHJlc3BvbnNlLmJvZHlgIHN0cmVhbSwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbSgpIHtcbiAgICBpZiAoc3VwcG9ydFN0YXR1cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHRlc3RSZXNwb25zZSA9IG5ldyBSZXNwb25zZSgnJyk7XG4gICAgICAgIGlmICgnYm9keScgaW4gdGVzdFJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG5ldyBSZXNwb25zZSh0ZXN0UmVzcG9uc2UuYm9keSk7XG4gICAgICAgICAgICAgICAgc3VwcG9ydFN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0U3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3VwcG9ydFN0YXR1cyA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydFN0YXR1cztcbn1cbmV4cG9ydCB7IGNhbkNvbnN0cnVjdFJlc3BvbnNlRnJvbUJvZHlTdHJlYW0gfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gdGhhdCBwcmV2ZW50cyBhIHByb21pc2UgZnJvbSBiZWluZyBmbGFnZ2VkIGFzIHVudXNlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvbnRXYWl0Rm9yKHByb21pc2UpIHtcbiAgICAvLyBFZmZlY3RpdmUgbm8tb3AuXG4gICAgdm9pZCBwcm9taXNlLnRoZW4oKCkgPT4geyB9KTtcbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBxdW90YUVycm9yQ2FsbGJhY2tzIH0gZnJvbSAnLi4vbW9kZWxzL3F1b3RhRXJyb3JDYWxsYmFja3MuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFJ1bnMgYWxsIG9mIHRoZSBjYWxsYmFjayBmdW5jdGlvbnMsIG9uZSBhdCBhIHRpbWUgc2VxdWVudGlhbGx5LCBpbiB0aGUgb3JkZXJcbiAqIGluIHdoaWNoIHRoZXkgd2VyZSByZWdpc3RlcmVkLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LWNvcmVcbiAqIEBwcml2YXRlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5sb2coYEFib3V0IHRvIHJ1biAke3F1b3RhRXJyb3JDYWxsYmFja3Muc2l6ZX0gYCArXG4gICAgICAgICAgICBgY2FsbGJhY2tzIHRvIGNsZWFuIHVwIGNhY2hlcy5gKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBxdW90YUVycm9yQ2FsbGJhY2tzKSB7XG4gICAgICAgIGF3YWl0IGNhbGxiYWNrKCk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBsb2dnZXIubG9nKGNhbGxiYWNrLCAnaXMgY29tcGxldGUuJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmxvZygnRmluaXNoZWQgcnVubmluZyBjYWxsYmFja3MuJyk7XG4gICAgfVxufVxuZXhwb3J0IHsgZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuY29uc3QgZ2V0RnJpZW5kbHlVUkwgPSAodXJsKSA9PiB7XG4gICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTChTdHJpbmcodXJsKSwgbG9jYXRpb24uaHJlZik7XG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjMyM1xuICAgIC8vIFdlIHdhbnQgdG8gaW5jbHVkZSBldmVyeXRoaW5nLCBleGNlcHQgZm9yIHRoZSBvcmlnaW4gaWYgaXQncyBzYW1lLW9yaWdpbi5cbiAgICByZXR1cm4gdXJsT2JqLmhyZWYucmVwbGFjZShuZXcgUmVnRXhwKGBeJHtsb2NhdGlvbi5vcmlnaW59YCksICcnKTtcbn07XG5leHBvcnQgeyBnZXRGcmllbmRseVVSTCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuY29uc3QgbG9nZ2VyID0gKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbiAgICA/IG51bGxcbiAgICA6ICgoKSA9PiB7XG4gICAgICAgIC8vIERvbid0IG92ZXJ3cml0ZSB0aGlzIHZhbHVlIGlmIGl0J3MgYWxyZWFkeSBzZXQuXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvcHVsbC8yMjg0I2lzc3VlY29tbWVudC01NjA0NzA5MjNcbiAgICAgICAgaWYgKCEoJ19fV0JfRElTQUJMRV9ERVZfTE9HUycgaW4gc2VsZikpIHtcbiAgICAgICAgICAgIHNlbGYuX19XQl9ESVNBQkxFX0RFVl9MT0dTID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGluR3JvdXAgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgbWV0aG9kVG9Db2xvck1hcCA9IHtcbiAgICAgICAgICAgIGRlYnVnOiBgIzdmOGM4ZGAsXG4gICAgICAgICAgICBsb2c6IGAjMmVjYzcxYCxcbiAgICAgICAgICAgIHdhcm46IGAjZjM5YzEyYCxcbiAgICAgICAgICAgIGVycm9yOiBgI2MwMzkyYmAsXG4gICAgICAgICAgICBncm91cENvbGxhcHNlZDogYCMzNDk4ZGJgLFxuICAgICAgICAgICAgZ3JvdXBFbmQ6IG51bGwsIC8vIE5vIGNvbG9yZWQgcHJlZml4IG9uIGdyb3VwRW5kXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHByaW50ID0gZnVuY3Rpb24gKG1ldGhvZCwgYXJncykge1xuICAgICAgICAgICAgaWYgKHNlbGYuX19XQl9ESVNBQkxFX0RFVl9MT0dTKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ2dyb3VwQ29sbGFwc2VkJykge1xuICAgICAgICAgICAgICAgIC8vIFNhZmFyaSBkb2Vzbid0IHByaW50IGFsbCBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCkgYXJndW1lbnRzOlxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xODI3NTRcbiAgICAgICAgICAgICAgICBpZiAoL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlW21ldGhvZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdHlsZXMgPSBbXG4gICAgICAgICAgICAgICAgYGJhY2tncm91bmQ6ICR7bWV0aG9kVG9Db2xvck1hcFttZXRob2RdfWAsXG4gICAgICAgICAgICAgICAgYGJvcmRlci1yYWRpdXM6IDAuNWVtYCxcbiAgICAgICAgICAgICAgICBgY29sb3I6IHdoaXRlYCxcbiAgICAgICAgICAgICAgICBgZm9udC13ZWlnaHQ6IGJvbGRgLFxuICAgICAgICAgICAgICAgIGBwYWRkaW5nOiAycHggMC41ZW1gLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIC8vIFdoZW4gaW4gYSBncm91cCwgdGhlIHdvcmtib3ggcHJlZml4IGlzIG5vdCBkaXNwbGF5ZWQuXG4gICAgICAgICAgICBjb25zdCBsb2dQcmVmaXggPSBpbkdyb3VwID8gW10gOiBbJyVjd29ya2JveCcsIHN0eWxlcy5qb2luKCc7JyldO1xuICAgICAgICAgICAgY29uc29sZVttZXRob2RdKC4uLmxvZ1ByZWZpeCwgLi4uYXJncyk7XG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSAnZ3JvdXBDb2xsYXBzZWQnKSB7XG4gICAgICAgICAgICAgICAgaW5Hcm91cCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSAnZ3JvdXBFbmQnKSB7XG4gICAgICAgICAgICAgICAgaW5Hcm91cCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuICAgICAgICBjb25zdCBhcGkgPSB7fTtcbiAgICAgICAgY29uc3QgbG9nZ2VyTWV0aG9kcyA9IE9iamVjdC5rZXlzKG1ldGhvZFRvQ29sb3JNYXApO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBsb2dnZXJNZXRob2RzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXRob2QgPSBrZXk7XG4gICAgICAgICAgICBhcGlbbWV0aG9kXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJpbnQobWV0aG9kLCBhcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFwaTtcbiAgICB9KSgpKTtcbmV4cG9ydCB7IGxvZ2dlciB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGFuZCB0aGUgcGFzc2VkIG51bWJlciBvZiBtaWxsaXNlY29uZHMuXG4gKiBUaGlzIHV0aWxpdHkgaXMgYW4gYXN5bmMvYXdhaXQtZnJpZW5kbHkgdmVyc2lvbiBvZiBgc2V0VGltZW91dGAuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVvdXQobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogQSB1dGlsaXR5IG1ldGhvZCB0aGF0IG1ha2VzIGl0IGVhc2llciB0byB1c2UgYGV2ZW50LndhaXRVbnRpbGAgd2l0aFxuICogYXN5bmMgZnVuY3Rpb25zIGFuZCByZXR1cm4gdGhlIHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzeW5jRm5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gd2FpdFVudGlsKGV2ZW50LCBhc3luY0ZuKSB7XG4gICAgY29uc3QgcmV0dXJuUHJvbWlzZSA9IGFzeW5jRm4oKTtcbiAgICBldmVudC53YWl0VW50aWwocmV0dXJuUHJvbWlzZSk7XG4gICAgcmV0dXJuIHJldHVyblByb21pc2U7XG59XG5leHBvcnQgeyB3YWl0VW50aWwgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gQHRzLWlnbm9yZVxudHJ5IHtcbiAgICBzZWxmWyd3b3JrYm94OmNvcmU6Ni41LjMnXSAmJiBfKCk7XG59XG5jYXRjaCAoZSkgeyB9XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBjYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtIH0gZnJvbSAnLi9fcHJpdmF0ZS9jYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJy4vX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFsbG93cyBkZXZlbG9wZXJzIHRvIGNvcHkgYSByZXNwb25zZSBhbmQgbW9kaWZ5IGl0cyBgaGVhZGVyc2AsIGBzdGF0dXNgLFxuICogb3IgYHN0YXR1c1RleHRgIHZhbHVlcyAodGhlIHZhbHVlcyBzZXR0YWJsZSB2aWEgYVxuICogW2BSZXNwb25zZUluaXRgXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUmVzcG9uc2UvUmVzcG9uc2UjU3ludGF4fVxuICogb2JqZWN0IGluIHRoZSBjb25zdHJ1Y3RvcikuXG4gKiBUbyBtb2RpZnkgdGhlc2UgdmFsdWVzLCBwYXNzIGEgZnVuY3Rpb24gYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhhdFxuICogZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIHdpdGggYSBzaW5nbGUgb2JqZWN0IHdpdGggdGhlIHJlc3BvbnNlIHByb3BlcnRpZXNcbiAqIGB7aGVhZGVycywgc3RhdHVzLCBzdGF0dXNUZXh0fWAuIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhpcyBmdW5jdGlvbiB3aWxsXG4gKiBiZSB1c2VkIGFzIHRoZSBgUmVzcG9uc2VJbml0YCBmb3IgdGhlIG5ldyBgUmVzcG9uc2VgLiBUbyBjaGFuZ2UgdGhlIHZhbHVlc1xuICogZWl0aGVyIG1vZGlmeSB0aGUgcGFzc2VkIHBhcmFtZXRlcihzKSBhbmQgcmV0dXJuIGl0LCBvciByZXR1cm4gYSB0b3RhbGx5XG4gKiBuZXcgb2JqZWN0LlxuICpcbiAqIFRoaXMgbWV0aG9kIGlzIGludGVudGlvbmFsbHkgbGltaXRlZCB0byBzYW1lLW9yaWdpbiByZXNwb25zZXMsIHJlZ2FyZGxlc3Mgb2ZcbiAqIHdoZXRoZXIgQ09SUyB3YXMgdXNlZCBvciBub3QuXG4gKlxuICogQHBhcmFtIHtSZXNwb25zZX0gcmVzcG9uc2VcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG1vZGlmaWVyXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1jb3JlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNvcHlSZXNwb25zZShyZXNwb25zZSwgbW9kaWZpZXIpIHtcbiAgICBsZXQgb3JpZ2luID0gbnVsbDtcbiAgICAvLyBJZiByZXNwb25zZS51cmwgaXNuJ3Qgc2V0LCBhc3N1bWUgaXQncyBjcm9zcy1vcmlnaW4gYW5kIGtlZXAgb3JpZ2luIG51bGwuXG4gICAgaWYgKHJlc3BvbnNlLnVybCkge1xuICAgICAgICBjb25zdCByZXNwb25zZVVSTCA9IG5ldyBVUkwocmVzcG9uc2UudXJsKTtcbiAgICAgICAgb3JpZ2luID0gcmVzcG9uc2VVUkwub3JpZ2luO1xuICAgIH1cbiAgICBpZiAob3JpZ2luICE9PSBzZWxmLmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdjcm9zcy1vcmlnaW4tY29weS1yZXNwb25zZScsIHsgb3JpZ2luIH0pO1xuICAgIH1cbiAgICBjb25zdCBjbG9uZWRSZXNwb25zZSA9IHJlc3BvbnNlLmNsb25lKCk7XG4gICAgLy8gQ3JlYXRlIGEgZnJlc2ggYFJlc3BvbnNlSW5pdGAgb2JqZWN0IGJ5IGNsb25pbmcgdGhlIGhlYWRlcnMuXG4gICAgY29uc3QgcmVzcG9uc2VJbml0ID0ge1xuICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyhjbG9uZWRSZXNwb25zZS5oZWFkZXJzKSxcbiAgICAgICAgc3RhdHVzOiBjbG9uZWRSZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IGNsb25lZFJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgfTtcbiAgICAvLyBBcHBseSBhbnkgdXNlciBtb2RpZmljYXRpb25zLlxuICAgIGNvbnN0IG1vZGlmaWVkUmVzcG9uc2VJbml0ID0gbW9kaWZpZXIgPyBtb2RpZmllcihyZXNwb25zZUluaXQpIDogcmVzcG9uc2VJbml0O1xuICAgIC8vIENyZWF0ZSB0aGUgbmV3IHJlc3BvbnNlIGZyb20gdGhlIGJvZHkgc3RyZWFtIGFuZCBgUmVzcG9uc2VJbml0YFxuICAgIC8vIG1vZGlmaWNhdGlvbnMuIE5vdGU6IG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB0aGUgUmVzcG9uc2UuYm9keSBzdHJlYW0sXG4gICAgLy8gc28gZmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIGVudGlyZSBib2R5IGludG8gbWVtb3J5IGFzIGEgYmxvYi5cbiAgICBjb25zdCBib2R5ID0gY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbSgpXG4gICAgICAgID8gY2xvbmVkUmVzcG9uc2UuYm9keVxuICAgICAgICA6IGF3YWl0IGNsb25lZFJlc3BvbnNlLmJsb2IoKTtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKGJvZHksIG1vZGlmaWVkUmVzcG9uc2VJbml0KTtcbn1cbmV4cG9ydCB7IGNvcHlSZXNwb25zZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbWVzc2FnZXMgfSBmcm9tICcuL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi4vLi4vX3ZlcnNpb24uanMnO1xuY29uc3QgZmFsbGJhY2sgPSAoY29kZSwgLi4uYXJncykgPT4ge1xuICAgIGxldCBtc2cgPSBjb2RlO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbXNnICs9IGAgOjogJHtKU09OLnN0cmluZ2lmeShhcmdzKX1gO1xuICAgIH1cbiAgICByZXR1cm4gbXNnO1xufTtcbmNvbnN0IGdlbmVyYXRvckZ1bmN0aW9uID0gKGNvZGUsIGRldGFpbHMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlc1tjb2RlXTtcbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZmluZCBtZXNzYWdlIGZvciBjb2RlICcke2NvZGV9Jy5gKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2UoZGV0YWlscyk7XG59O1xuZXhwb3J0IGNvbnN0IG1lc3NhZ2VHZW5lcmF0b3IgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gZmFsbGJhY2sgOiBnZW5lcmF0b3JGdW5jdGlvbjtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vLi4vX3ZlcnNpb24uanMnO1xuZXhwb3J0IGNvbnN0IG1lc3NhZ2VzID0ge1xuICAgICdpbnZhbGlkLXZhbHVlJzogKHsgcGFyYW1OYW1lLCB2YWxpZFZhbHVlRGVzY3JpcHRpb24sIHZhbHVlIH0pID0+IHtcbiAgICAgICAgaWYgKCFwYXJhbU5hbWUgfHwgIXZhbGlkVmFsdWVEZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbnZhbGlkLXZhbHVlJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGBUaGUgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIHdhcyBnaXZlbiBhIHZhbHVlIHdpdGggYW4gYCArXG4gICAgICAgICAgICBgdW5leHBlY3RlZCB2YWx1ZS4gJHt2YWxpZFZhbHVlRGVzY3JpcHRpb259IFJlY2VpdmVkIGEgdmFsdWUgb2YgYCArXG4gICAgICAgICAgICBgJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9LmApO1xuICAgIH0sXG4gICAgJ25vdC1hbi1hcnJheSc6ICh7IG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUsIHBhcmFtTmFtZSB9KSA9PiB7XG4gICAgICAgIGlmICghbW9kdWxlTmFtZSB8fCAhY2xhc3NOYW1lIHx8ICFmdW5jTmFtZSB8fCAhcGFyYW1OYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ25vdC1hbi1hcnJheScgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChgVGhlIHBhcmFtZXRlciAnJHtwYXJhbU5hbWV9JyBwYXNzZWQgaW50byBgICtcbiAgICAgICAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0oKScgbXVzdCBiZSBhbiBhcnJheS5gKTtcbiAgICB9LFxuICAgICdpbmNvcnJlY3QtdHlwZSc6ICh7IGV4cGVjdGVkVHlwZSwgcGFyYW1OYW1lLCBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCB9KSA9PiB7XG4gICAgICAgIGlmICghZXhwZWN0ZWRUeXBlIHx8ICFwYXJhbU5hbWUgfHwgIW1vZHVsZU5hbWUgfHwgIWZ1bmNOYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ2luY29ycmVjdC10eXBlJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWVTdHIgPSBjbGFzc05hbWUgPyBgJHtjbGFzc05hbWV9LmAgOiAnJztcbiAgICAgICAgcmV0dXJuIChgVGhlIHBhcmFtZXRlciAnJHtwYXJhbU5hbWV9JyBwYXNzZWQgaW50byBgICtcbiAgICAgICAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZVN0cn1gICtcbiAgICAgICAgICAgIGAke2Z1bmNOYW1lfSgpJyBtdXN0IGJlIG9mIHR5cGUgJHtleHBlY3RlZFR5cGV9LmApO1xuICAgIH0sXG4gICAgJ2luY29ycmVjdC1jbGFzcyc6ICh7IGV4cGVjdGVkQ2xhc3NOYW1lLCBwYXJhbU5hbWUsIG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUsIGlzUmV0dXJuVmFsdWVQcm9ibGVtLCB9KSA9PiB7XG4gICAgICAgIGlmICghZXhwZWN0ZWRDbGFzc05hbWUgfHwgIW1vZHVsZU5hbWUgfHwgIWZ1bmNOYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ2luY29ycmVjdC1jbGFzcycgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lU3RyID0gY2xhc3NOYW1lID8gYCR7Y2xhc3NOYW1lfS5gIDogJyc7XG4gICAgICAgIGlmIChpc1JldHVyblZhbHVlUHJvYmxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIChgVGhlIHJldHVybiB2YWx1ZSBmcm9tIGAgK1xuICAgICAgICAgICAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZVN0cn0ke2Z1bmNOYW1lfSgpJyBgICtcbiAgICAgICAgICAgICAgICBgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBjbGFzcyAke2V4cGVjdGVkQ2xhc3NOYW1lfS5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGBUaGUgcGFyYW1ldGVyICcke3BhcmFtTmFtZX0nIHBhc3NlZCBpbnRvIGAgK1xuICAgICAgICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lU3RyfSR7ZnVuY05hbWV9KCknIGAgK1xuICAgICAgICAgICAgYG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgY2xhc3MgJHtleHBlY3RlZENsYXNzTmFtZX0uYCk7XG4gICAgfSxcbiAgICAnbWlzc2luZy1hLW1ldGhvZCc6ICh7IGV4cGVjdGVkTWV0aG9kLCBwYXJhbU5hbWUsIG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUsIH0pID0+IHtcbiAgICAgICAgaWYgKCFleHBlY3RlZE1ldGhvZCB8fFxuICAgICAgICAgICAgIXBhcmFtTmFtZSB8fFxuICAgICAgICAgICAgIW1vZHVsZU5hbWUgfHxcbiAgICAgICAgICAgICFjbGFzc05hbWUgfHxcbiAgICAgICAgICAgICFmdW5jTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdtaXNzaW5nLWEtbWV0aG9kJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSgpIGV4cGVjdGVkIHRoZSBgICtcbiAgICAgICAgICAgIGAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgdG8gZXhwb3NlIGEgJyR7ZXhwZWN0ZWRNZXRob2R9JyBtZXRob2QuYCk7XG4gICAgfSxcbiAgICAnYWRkLXRvLWNhY2hlLWxpc3QtdW5leHBlY3RlZC10eXBlJzogKHsgZW50cnkgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKGBBbiB1bmV4cGVjdGVkIGVudHJ5IHdhcyBwYXNzZWQgdG8gYCArXG4gICAgICAgICAgICBgJ3dvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXIuYWRkVG9DYWNoZUxpc3QoKScgVGhlIGVudHJ5IGAgK1xuICAgICAgICAgICAgYCcke0pTT04uc3RyaW5naWZ5KGVudHJ5KX0nIGlzbid0IHN1cHBvcnRlZC4gWW91IG11c3Qgc3VwcGx5IGFuIGFycmF5IG9mIGAgK1xuICAgICAgICAgICAgYHN0cmluZ3Mgd2l0aCBvbmUgb3IgbW9yZSBjaGFyYWN0ZXJzLCBvYmplY3RzIHdpdGggYSB1cmwgcHJvcGVydHkgb3IgYCArXG4gICAgICAgICAgICBgUmVxdWVzdCBvYmplY3RzLmApO1xuICAgIH0sXG4gICAgJ2FkZC10by1jYWNoZS1saXN0LWNvbmZsaWN0aW5nLWVudHJpZXMnOiAoeyBmaXJzdEVudHJ5LCBzZWNvbmRFbnRyeSB9KSA9PiB7XG4gICAgICAgIGlmICghZmlyc3RFbnRyeSB8fCAhc2Vjb25kRW50cnkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byBgICsgYCdhZGQtdG8tY2FjaGUtbGlzdC1kdXBsaWNhdGUtZW50cmllcycgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChgVHdvIG9mIHRoZSBlbnRyaWVzIHBhc3NlZCB0byBgICtcbiAgICAgICAgICAgIGAnd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlci5hZGRUb0NhY2hlTGlzdCgpJyBoYWQgdGhlIFVSTCBgICtcbiAgICAgICAgICAgIGAke2ZpcnN0RW50cnl9IGJ1dCBkaWZmZXJlbnQgcmV2aXNpb24gZGV0YWlscy4gV29ya2JveCBpcyBgICtcbiAgICAgICAgICAgIGB1bmFibGUgdG8gY2FjaGUgYW5kIHZlcnNpb24gdGhlIGFzc2V0IGNvcnJlY3RseS4gUGxlYXNlIHJlbW92ZSBvbmUgYCArXG4gICAgICAgICAgICBgb2YgdGhlIGVudHJpZXMuYCk7XG4gICAgfSxcbiAgICAncGx1Z2luLWVycm9yLXJlcXVlc3Qtd2lsbC1mZXRjaCc6ICh7IHRocm93bkVycm9yTWVzc2FnZSB9KSA9PiB7XG4gICAgICAgIGlmICghdGhyb3duRXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gYCArIGAncGx1Z2luLWVycm9yLXJlcXVlc3Qtd2lsbC1mZXRjaCcsIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYEFuIGVycm9yIHdhcyB0aHJvd24gYnkgYSBwbHVnaW5zICdyZXF1ZXN0V2lsbEZldGNoKCknIG1ldGhvZC4gYCArXG4gICAgICAgICAgICBgVGhlIHRocm93biBlcnJvciBtZXNzYWdlIHdhczogJyR7dGhyb3duRXJyb3JNZXNzYWdlfScuYCk7XG4gICAgfSxcbiAgICAnaW52YWxpZC1jYWNoZS1uYW1lJzogKHsgY2FjaGVOYW1lSWQsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgaWYgKCFjYWNoZU5hbWVJZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhICdjYWNoZU5hbWVJZCcgZm9yIGVycm9yICdpbnZhbGlkLWNhY2hlLW5hbWUnYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChgWW91IG11c3QgcHJvdmlkZSBhIG5hbWUgY29udGFpbmluZyBhdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGZvciBgICtcbiAgICAgICAgICAgIGBzZXRDYWNoZURldGFpbHMoeyR7Y2FjaGVOYW1lSWR9OiAnLi4uJ30pLiBSZWNlaXZlZCBhIHZhbHVlIG9mIGAgK1xuICAgICAgICAgICAgYCcke0pTT04uc3RyaW5naWZ5KHZhbHVlKX0nYCk7XG4gICAgfSxcbiAgICAndW5yZWdpc3Rlci1yb3V0ZS1idXQtbm90LWZvdW5kLXdpdGgtbWV0aG9kJzogKHsgbWV0aG9kIH0pID0+IHtcbiAgICAgICAgaWYgKCFtZXRob2QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byBgICtcbiAgICAgICAgICAgICAgICBgJ3VucmVnaXN0ZXItcm91dGUtYnV0LW5vdC1mb3VuZC13aXRoLW1ldGhvZCcgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChgVGhlIHJvdXRlIHlvdSdyZSB0cnlpbmcgdG8gdW5yZWdpc3RlciB3YXMgbm90ICBwcmV2aW91c2x5IGAgK1xuICAgICAgICAgICAgYHJlZ2lzdGVyZWQgZm9yIHRoZSBtZXRob2QgdHlwZSAnJHttZXRob2R9Jy5gKTtcbiAgICB9LFxuICAgICd1bnJlZ2lzdGVyLXJvdXRlLXJvdXRlLW5vdC1yZWdpc3RlcmVkJzogKCkgPT4ge1xuICAgICAgICByZXR1cm4gKGBUaGUgcm91dGUgeW91J3JlIHRyeWluZyB0byB1bnJlZ2lzdGVyIHdhcyBub3QgcHJldmlvdXNseSBgICtcbiAgICAgICAgICAgIGByZWdpc3RlcmVkLmApO1xuICAgIH0sXG4gICAgJ3F1ZXVlLXJlcGxheS1mYWlsZWQnOiAoeyBuYW1lIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBSZXBsYXlpbmcgdGhlIGJhY2tncm91bmQgc3luYyBxdWV1ZSAnJHtuYW1lfScgZmFpbGVkLmA7XG4gICAgfSxcbiAgICAnZHVwbGljYXRlLXF1ZXVlLW5hbWUnOiAoeyBuYW1lIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChgVGhlIFF1ZXVlIG5hbWUgJyR7bmFtZX0nIGlzIGFscmVhZHkgYmVpbmcgdXNlZC4gYCArXG4gICAgICAgICAgICBgQWxsIGluc3RhbmNlcyBvZiBiYWNrZ3JvdW5kU3luYy5RdWV1ZSBtdXN0IGJlIGdpdmVuIHVuaXF1ZSBuYW1lcy5gKTtcbiAgICB9LFxuICAgICdleHBpcmVkLXRlc3Qtd2l0aG91dC1tYXgtYWdlJzogKHsgbWV0aG9kTmFtZSwgcGFyYW1OYW1lIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChgVGhlICcke21ldGhvZE5hbWV9KCknIG1ldGhvZCBjYW4gb25seSBiZSB1c2VkIHdoZW4gdGhlIGAgK1xuICAgICAgICAgICAgYCcke3BhcmFtTmFtZX0nIGlzIHVzZWQgaW4gdGhlIGNvbnN0cnVjdG9yLmApO1xuICAgIH0sXG4gICAgJ3Vuc3VwcG9ydGVkLXJvdXRlLXR5cGUnOiAoeyBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKGBUaGUgc3VwcGxpZWQgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIHdhcyBhbiB1bnN1cHBvcnRlZCB0eXBlLiBgICtcbiAgICAgICAgICAgIGBQbGVhc2UgY2hlY2sgdGhlIGRvY3MgZm9yICR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9IGZvciBgICtcbiAgICAgICAgICAgIGB2YWxpZCBpbnB1dCB0eXBlcy5gKTtcbiAgICB9LFxuICAgICdub3QtYXJyYXktb2YtY2xhc3MnOiAoeyB2YWx1ZSwgZXhwZWN0ZWRDbGFzcywgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSwgcGFyYW1OYW1lLCB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoYFRoZSBzdXBwbGllZCAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgbXVzdCBiZSBhbiBhcnJheSBvZiBgICtcbiAgICAgICAgICAgIGAnJHtleHBlY3RlZENsYXNzfScgb2JqZWN0cy4gUmVjZWl2ZWQgJyR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfSwnLiBgICtcbiAgICAgICAgICAgIGBQbGVhc2UgY2hlY2sgdGhlIGNhbGwgdG8gJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0oKSBgICtcbiAgICAgICAgICAgIGB0byBmaXggdGhlIGlzc3VlLmApO1xuICAgIH0sXG4gICAgJ21heC1lbnRyaWVzLW9yLWFnZS1yZXF1aXJlZCc6ICh7IG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKGBZb3UgbXVzdCBkZWZpbmUgZWl0aGVyIGNvbmZpZy5tYXhFbnRyaWVzIG9yIGNvbmZpZy5tYXhBZ2VTZWNvbmRzYCArXG4gICAgICAgICAgICBgaW4gJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX1gKTtcbiAgICB9LFxuICAgICdzdGF0dXNlcy1vci1oZWFkZXJzLXJlcXVpcmVkJzogKHsgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoYFlvdSBtdXN0IGRlZmluZSBlaXRoZXIgY29uZmlnLnN0YXR1c2VzIG9yIGNvbmZpZy5oZWFkZXJzYCArXG4gICAgICAgICAgICBgaW4gJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX1gKTtcbiAgICB9LFxuICAgICdpbnZhbGlkLXN0cmluZyc6ICh7IG1vZHVsZU5hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWUgfSkgPT4ge1xuICAgICAgICBpZiAoIXBhcmFtTmFtZSB8fCAhbW9kdWxlTmFtZSB8fCAhZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW52YWxpZC1zdHJpbmcnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYFdoZW4gdXNpbmcgc3RyaW5ncywgdGhlICcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciBtdXN0IHN0YXJ0IHdpdGggYCArXG4gICAgICAgICAgICBgJ2h0dHAnIChmb3IgY3Jvc3Mtb3JpZ2luIG1hdGNoZXMpIG9yICcvJyAoZm9yIHNhbWUtb3JpZ2luIG1hdGNoZXMpLiBgICtcbiAgICAgICAgICAgIGBQbGVhc2Ugc2VlIHRoZSBkb2NzIGZvciAke21vZHVsZU5hbWV9LiR7ZnVuY05hbWV9KCkgZm9yIGAgK1xuICAgICAgICAgICAgYG1vcmUgaW5mby5gKTtcbiAgICB9LFxuICAgICdjaGFubmVsLW5hbWUtcmVxdWlyZWQnOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoYFlvdSBtdXN0IHByb3ZpZGUgYSBjaGFubmVsTmFtZSB0byBjb25zdHJ1Y3QgYSBgICtcbiAgICAgICAgICAgIGBCcm9hZGNhc3RDYWNoZVVwZGF0ZSBpbnN0YW5jZS5gKTtcbiAgICB9LFxuICAgICdpbnZhbGlkLXJlc3BvbnNlcy1hcmUtc2FtZS1hcmdzJzogKCkgPT4ge1xuICAgICAgICByZXR1cm4gKGBUaGUgYXJndW1lbnRzIHBhc3NlZCBpbnRvIHJlc3BvbnNlc0FyZVNhbWUoKSBhcHBlYXIgdG8gYmUgYCArXG4gICAgICAgICAgICBgaW52YWxpZC4gUGxlYXNlIGVuc3VyZSB2YWxpZCBSZXNwb25zZXMgYXJlIHVzZWQuYCk7XG4gICAgfSxcbiAgICAnZXhwaXJlLWN1c3RvbS1jYWNoZXMtb25seSc6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChgWW91IG11c3QgcHJvdmlkZSBhICdjYWNoZU5hbWUnIHByb3BlcnR5IHdoZW4gdXNpbmcgdGhlIGAgK1xuICAgICAgICAgICAgYGV4cGlyYXRpb24gcGx1Z2luIHdpdGggYSBydW50aW1lIGNhY2hpbmcgc3RyYXRlZ3kuYCk7XG4gICAgfSxcbiAgICAndW5pdC1tdXN0LWJlLWJ5dGVzJzogKHsgbm9ybWFsaXplZFJhbmdlSGVhZGVyIH0pID0+IHtcbiAgICAgICAgaWYgKCFub3JtYWxpemVkUmFuZ2VIZWFkZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAndW5pdC1tdXN0LWJlLWJ5dGVzJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGBUaGUgJ3VuaXQnIHBvcnRpb24gb2YgdGhlIFJhbmdlIGhlYWRlciBtdXN0IGJlIHNldCB0byAnYnl0ZXMnLiBgICtcbiAgICAgICAgICAgIGBUaGUgUmFuZ2UgaGVhZGVyIHByb3ZpZGVkIHdhcyBcIiR7bm9ybWFsaXplZFJhbmdlSGVhZGVyfVwiYCk7XG4gICAgfSxcbiAgICAnc2luZ2xlLXJhbmdlLW9ubHknOiAoeyBub3JtYWxpemVkUmFuZ2VIZWFkZXIgfSkgPT4ge1xuICAgICAgICBpZiAoIW5vcm1hbGl6ZWRSYW5nZUhlYWRlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdzaW5nbGUtcmFuZ2Utb25seScgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChgTXVsdGlwbGUgcmFuZ2VzIGFyZSBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgdXNlIGEgIHNpbmdsZSBzdGFydCBgICtcbiAgICAgICAgICAgIGB2YWx1ZSwgYW5kIG9wdGlvbmFsIGVuZCB2YWx1ZS4gVGhlIFJhbmdlIGhlYWRlciBwcm92aWRlZCB3YXMgYCArXG4gICAgICAgICAgICBgXCIke25vcm1hbGl6ZWRSYW5nZUhlYWRlcn1cImApO1xuICAgIH0sXG4gICAgJ2ludmFsaWQtcmFuZ2UtdmFsdWVzJzogKHsgbm9ybWFsaXplZFJhbmdlSGVhZGVyIH0pID0+IHtcbiAgICAgICAgaWYgKCFub3JtYWxpemVkUmFuZ2VIZWFkZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW52YWxpZC1yYW5nZS12YWx1ZXMnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYFRoZSBSYW5nZSBoZWFkZXIgaXMgbWlzc2luZyBib3RoIHN0YXJ0IGFuZCBlbmQgdmFsdWVzLiBBdCBsZWFzdCBgICtcbiAgICAgICAgICAgIGBvbmUgb2YgdGhvc2UgdmFsdWVzIGlzIG5lZWRlZC4gVGhlIFJhbmdlIGhlYWRlciBwcm92aWRlZCB3YXMgYCArXG4gICAgICAgICAgICBgXCIke25vcm1hbGl6ZWRSYW5nZUhlYWRlcn1cImApO1xuICAgIH0sXG4gICAgJ25vLXJhbmdlLWhlYWRlcic6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGBObyBSYW5nZSBoZWFkZXIgd2FzIGZvdW5kIGluIHRoZSBSZXF1ZXN0IHByb3ZpZGVkLmA7XG4gICAgfSxcbiAgICAncmFuZ2Utbm90LXNhdGlzZmlhYmxlJzogKHsgc2l6ZSwgc3RhcnQsIGVuZCB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoYFRoZSBzdGFydCAoJHtzdGFydH0pIGFuZCBlbmQgKCR7ZW5kfSkgdmFsdWVzIGluIHRoZSBSYW5nZSBhcmUgYCArXG4gICAgICAgICAgICBgbm90IHNhdGlzZmlhYmxlIGJ5IHRoZSBjYWNoZWQgcmVzcG9uc2UsIHdoaWNoIGlzICR7c2l6ZX0gYnl0ZXMuYCk7XG4gICAgfSxcbiAgICAnYXR0ZW1wdC10by1jYWNoZS1ub24tZ2V0LXJlcXVlc3QnOiAoeyB1cmwsIG1ldGhvZCB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoYFVuYWJsZSB0byBjYWNoZSAnJHt1cmx9JyBiZWNhdXNlIGl0IGlzIGEgJyR7bWV0aG9kfScgcmVxdWVzdCBhbmQgYCArXG4gICAgICAgICAgICBgb25seSAnR0VUJyByZXF1ZXN0cyBjYW4gYmUgY2FjaGVkLmApO1xuICAgIH0sXG4gICAgJ2NhY2hlLXB1dC13aXRoLW5vLXJlc3BvbnNlJzogKHsgdXJsIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChgVGhlcmUgd2FzIGFuIGF0dGVtcHQgdG8gY2FjaGUgJyR7dXJsfScgYnV0IHRoZSByZXNwb25zZSB3YXMgbm90IGAgK1xuICAgICAgICAgICAgYGRlZmluZWQuYCk7XG4gICAgfSxcbiAgICAnbm8tcmVzcG9uc2UnOiAoeyB1cmwsIGVycm9yIH0pID0+IHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBgVGhlIHN0cmF0ZWd5IGNvdWxkIG5vdCBnZW5lcmF0ZSBhIHJlc3BvbnNlIGZvciAnJHt1cmx9Jy5gO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gYCBUaGUgdW5kZXJseWluZyBlcnJvciBpcyAke2Vycm9yfS5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH0sXG4gICAgJ2JhZC1wcmVjYWNoaW5nLXJlc3BvbnNlJzogKHsgdXJsLCBzdGF0dXMgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKGBUaGUgcHJlY2FjaGluZyByZXF1ZXN0IGZvciAnJHt1cmx9JyBmYWlsZWRgICtcbiAgICAgICAgICAgIChzdGF0dXMgPyBgIHdpdGggYW4gSFRUUCBzdGF0dXMgb2YgJHtzdGF0dXN9LmAgOiBgLmApKTtcbiAgICB9LFxuICAgICdub24tcHJlY2FjaGVkLXVybCc6ICh7IHVybCB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoYGNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMKCcke3VybH0nKSB3YXMgY2FsbGVkLCBidXQgdGhhdCBVUkwgaXMgYCArXG4gICAgICAgICAgICBgbm90IHByZWNhY2hlZC4gUGxlYXNlIHBhc3MgaW4gYSBVUkwgdGhhdCBpcyBwcmVjYWNoZWQgaW5zdGVhZC5gKTtcbiAgICB9LFxuICAgICdhZGQtdG8tY2FjaGUtbGlzdC1jb25mbGljdGluZy1pbnRlZ3JpdGllcyc6ICh7IHVybCB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoYFR3byBvZiB0aGUgZW50cmllcyBwYXNzZWQgdG8gYCArXG4gICAgICAgICAgICBgJ3dvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXIuYWRkVG9DYWNoZUxpc3QoKScgaGFkIHRoZSBVUkwgYCArXG4gICAgICAgICAgICBgJHt1cmx9IHdpdGggZGlmZmVyZW50IGludGVncml0eSB2YWx1ZXMuIFBsZWFzZSByZW1vdmUgb25lIG9mIHRoZW0uYCk7XG4gICAgfSxcbiAgICAnbWlzc2luZy1wcmVjYWNoZS1lbnRyeSc6ICh7IGNhY2hlTmFtZSwgdXJsIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBVbmFibGUgdG8gZmluZCBhIHByZWNhY2hlZCByZXNwb25zZSBpbiAke2NhY2hlTmFtZX0gZm9yICR7dXJsfS5gO1xuICAgIH0sXG4gICAgJ2Nyb3NzLW9yaWdpbi1jb3B5LXJlc3BvbnNlJzogKHsgb3JpZ2luIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChgd29ya2JveC1jb3JlLmNvcHlSZXNwb25zZSgpIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBzYW1lLW9yaWdpbiBgICtcbiAgICAgICAgICAgIGByZXNwb25zZXMuIEl0IHdhcyBwYXNzZWQgYSByZXNwb25zZSB3aXRoIG9yaWdpbiAke29yaWdpbn0uYCk7XG4gICAgfSxcbiAgICAnb3BhcXVlLXN0cmVhbXMtc291cmNlJzogKHsgdHlwZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgT25lIG9mIHRoZSB3b3JrYm94LXN0cmVhbXMgc291cmNlcyByZXN1bHRlZCBpbiBhbiBgICtcbiAgICAgICAgICAgIGAnJHt0eXBlfScgcmVzcG9uc2UuYDtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdvcGFxdWVyZWRpcmVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiAoYCR7bWVzc2FnZX0gUGxlYXNlIGRvIG5vdCB1c2UgYSBuYXZpZ2F0aW9uIHJlcXVlc3QgdGhhdCByZXN1bHRzIGAgK1xuICAgICAgICAgICAgICAgIGBpbiBhIHJlZGlyZWN0IGFzIGEgc291cmNlLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHttZXNzYWdlfSBQbGVhc2UgZW5zdXJlIHlvdXIgc291cmNlcyBhcmUgQ09SUy1lbmFibGVkLmA7XG4gICAgfSxcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8vIENhbGxiYWNrcyB0byBiZSBleGVjdXRlZCB3aGVuZXZlciB0aGVyZSdzIGEgcXVvdGEgZXJyb3IuXG4vLyBDYW4ndCBjaGFuZ2UgRnVuY3Rpb24gdHlwZSByaWdodCBub3cuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuY29uc3QgcXVvdGFFcnJvckNhbGxiYWNrcyA9IG5ldyBTZXQoKTtcbmV4cG9ydCB7IHF1b3RhRXJyb3JDYWxsYmFja3MgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJy4vX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IHF1b3RhRXJyb3JDYWxsYmFja3MgfSBmcm9tICcuL21vZGVscy9xdW90YUVycm9yQ2FsbGJhY2tzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFkZHMgYSBmdW5jdGlvbiB0byB0aGUgc2V0IG9mIHF1b3RhRXJyb3JDYWxsYmFja3MgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGlmXG4gKiB0aGVyZSdzIGEgcXVvdGEgZXJyb3IuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBtZW1iZXJvZiB3b3JrYm94LWNvcmVcbiAqL1xuLy8gQ2FuJ3QgY2hhbmdlIEZ1bmN0aW9uIHR5cGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5mdW5jdGlvbiByZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGFzc2VydC5pc1R5cGUoY2FsbGJhY2ssICdmdW5jdGlvbicsIHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNvcmUnLFxuICAgICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlcicsXG4gICAgICAgICAgICBwYXJhbU5hbWU6ICdjYWxsYmFjaycsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBxdW90YUVycm9yQ2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmxvZygnUmVnaXN0ZXJlZCBhIGNhbGxiYWNrIHRvIHJlc3BvbmQgdG8gcXVvdGEgZXJyb3JzLicsIGNhbGxiYWNrKTtcbiAgICB9XG59XG5leHBvcnQgeyByZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjayB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBkb250V2FpdEZvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9kb250V2FpdEZvci5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHsgQ2FjaGVUaW1lc3RhbXBzTW9kZWwgfSBmcm9tICcuL21vZGVscy9DYWNoZVRpbWVzdGFtcHNNb2RlbC5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBUaGUgYENhY2hlRXhwaXJhdGlvbmAgY2xhc3MgYWxsb3dzIHlvdSBkZWZpbmUgYW4gZXhwaXJhdGlvbiBhbmQgLyBvclxuICogbGltaXQgb24gdGhlIG51bWJlciBvZiByZXNwb25zZXMgc3RvcmVkIGluIGFcbiAqIFtgQ2FjaGVgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FjaGUpLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LWV4cGlyYXRpb25cbiAqL1xuY2xhc3MgQ2FjaGVFeHBpcmF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBUbyBjb25zdHJ1Y3QgYSBuZXcgQ2FjaGVFeHBpcmF0aW9uIGluc3RhbmNlIHlvdSBtdXN0IHByb3ZpZGUgYXQgbGVhc3RcbiAgICAgKiBvbmUgb2YgdGhlIGBjb25maWdgIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2FjaGVOYW1lIE5hbWUgb2YgdGhlIGNhY2hlIHRvIGFwcGx5IHJlc3RyaWN0aW9ucyB0by5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcubWF4RW50cmllc10gVGhlIG1heGltdW0gbnVtYmVyIG9mIGVudHJpZXMgdG8gY2FjaGUuXG4gICAgICogRW50cmllcyB1c2VkIHRoZSBsZWFzdCB3aWxsIGJlIHJlbW92ZWQgYXMgdGhlIG1heGltdW0gaXMgcmVhY2hlZC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5tYXhBZ2VTZWNvbmRzXSBUaGUgbWF4aW11bSBhZ2Ugb2YgYW4gZW50cnkgYmVmb3JlXG4gICAgICogaXQncyB0cmVhdGVkIGFzIHN0YWxlIGFuZCByZW1vdmVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnLm1hdGNoT3B0aW9uc10gVGhlIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FjaGUvZGVsZXRlI1BhcmFtZXRlcnMpXG4gICAgICogdGhhdCB3aWxsIGJlIHVzZWQgd2hlbiBjYWxsaW5nIGBkZWxldGUoKWAgb24gdGhlIGNhY2hlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNhY2hlTmFtZSwgY29uZmlnID0ge30pIHtcbiAgICAgICAgdGhpcy5faXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3JlcnVuUmVxdWVzdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNUeXBlKGNhY2hlTmFtZSwgJ3N0cmluZycsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZUV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NhY2hlTmFtZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghKGNvbmZpZy5tYXhFbnRyaWVzIHx8IGNvbmZpZy5tYXhBZ2VTZWNvbmRzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ21heC1lbnRyaWVzLW9yLWFnZS1yZXF1aXJlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZy5tYXhFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShjb25maWcubWF4RW50cmllcywgJ251bWJlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdjb25maWcubWF4RW50cmllcycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLm1heEFnZVNlY29uZHMpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNUeXBlKGNvbmZpZy5tYXhBZ2VTZWNvbmRzLCAnbnVtYmVyJywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVFeHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5tYXhBZ2VTZWNvbmRzJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tYXhFbnRyaWVzID0gY29uZmlnLm1heEVudHJpZXM7XG4gICAgICAgIHRoaXMuX21heEFnZVNlY29uZHMgPSBjb25maWcubWF4QWdlU2Vjb25kcztcbiAgICAgICAgdGhpcy5fbWF0Y2hPcHRpb25zID0gY29uZmlnLm1hdGNoT3B0aW9ucztcbiAgICAgICAgdGhpcy5fY2FjaGVOYW1lID0gY2FjaGVOYW1lO1xuICAgICAgICB0aGlzLl90aW1lc3RhbXBNb2RlbCA9IG5ldyBDYWNoZVRpbWVzdGFtcHNNb2RlbChjYWNoZU5hbWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeHBpcmVzIGVudHJpZXMgZm9yIHRoZSBnaXZlbiBjYWNoZSBhbmQgZ2l2ZW4gY3JpdGVyaWEuXG4gICAgICovXG4gICAgYXN5bmMgZXhwaXJlRW50cmllcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUnVubmluZykge1xuICAgICAgICAgICAgdGhpcy5fcmVydW5SZXF1ZXN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzUnVubmluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IG1pblRpbWVzdGFtcCA9IHRoaXMuX21heEFnZVNlY29uZHNcbiAgICAgICAgICAgID8gRGF0ZS5ub3coKSAtIHRoaXMuX21heEFnZVNlY29uZHMgKiAxMDAwXG4gICAgICAgICAgICA6IDA7XG4gICAgICAgIGNvbnN0IHVybHNFeHBpcmVkID0gYXdhaXQgdGhpcy5fdGltZXN0YW1wTW9kZWwuZXhwaXJlRW50cmllcyhtaW5UaW1lc3RhbXAsIHRoaXMuX21heEVudHJpZXMpO1xuICAgICAgICAvLyBEZWxldGUgVVJMcyBmcm9tIHRoZSBjYWNoZVxuICAgICAgICBjb25zdCBjYWNoZSA9IGF3YWl0IHNlbGYuY2FjaGVzLm9wZW4odGhpcy5fY2FjaGVOYW1lKTtcbiAgICAgICAgZm9yIChjb25zdCB1cmwgb2YgdXJsc0V4cGlyZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IGNhY2hlLmRlbGV0ZSh1cmwsIHRoaXMuX21hdGNoT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh1cmxzRXhwaXJlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBFeHBpcmVkICR7dXJsc0V4cGlyZWQubGVuZ3RofSBgICtcbiAgICAgICAgICAgICAgICAgICAgYCR7dXJsc0V4cGlyZWQubGVuZ3RoID09PSAxID8gJ2VudHJ5JyA6ICdlbnRyaWVzJ30gYW5kIHJlbW92ZWQgYCArXG4gICAgICAgICAgICAgICAgICAgIGAke3VybHNFeHBpcmVkLmxlbmd0aCA9PT0gMSA/ICdpdCcgOiAndGhlbSd9IGZyb20gdGhlIGAgK1xuICAgICAgICAgICAgICAgICAgICBgJyR7dGhpcy5fY2FjaGVOYW1lfScgY2FjaGUuYCk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgRXhwaXJlZCB0aGUgZm9sbG93aW5nICR7dXJsc0V4cGlyZWQubGVuZ3RoID09PSAxID8gJ1VSTCcgOiAnVVJMcyd9OmApO1xuICAgICAgICAgICAgICAgIHVybHNFeHBpcmVkLmZvckVhY2goKHVybCkgPT4gbG9nZ2VyLmxvZyhgICAgICR7dXJsfWApKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgQ2FjaGUgZXhwaXJhdGlvbiByYW4gYW5kIGZvdW5kIG5vIGVudHJpZXMgdG8gcmVtb3ZlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fcmVydW5SZXF1ZXN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlcnVuUmVxdWVzdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBkb250V2FpdEZvcih0aGlzLmV4cGlyZUVudHJpZXMoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB0aW1lc3RhbXAgZm9yIHRoZSBnaXZlbiBVUkwuIFRoaXMgZW5zdXJlcyB0aGUgd2hlblxuICAgICAqIHJlbW92aW5nIGVudHJpZXMgYmFzZWQgb24gbWF4aW11bSBlbnRyaWVzLCBtb3N0IHJlY2VudGx5IHVzZWRcbiAgICAgKiBpcyBhY2N1cmF0ZSBvciB3aGVuIGV4cGlyaW5nLCB0aGUgdGltZXN0YW1wIGlzIHVwLXRvLWRhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICovXG4gICAgYXN5bmMgdXBkYXRlVGltZXN0YW1wKHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZSh1cmwsICdzdHJpbmcnLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVFeHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ3VwZGF0ZVRpbWVzdGFtcCcsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAndXJsJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuX3RpbWVzdGFtcE1vZGVsLnNldFRpbWVzdGFtcCh1cmwsIERhdGUubm93KCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYW4gYmUgdXNlZCB0byBjaGVjayBpZiBhIFVSTCBoYXMgZXhwaXJlZCBvciBub3QgYmVmb3JlIGl0J3MgdXNlZC5cbiAgICAgKlxuICAgICAqIFRoaXMgcmVxdWlyZXMgYSBsb29rIHVwIGZyb20gSW5kZXhlZERCLCBzbyBjYW4gYmUgc2xvdy5cbiAgICAgKlxuICAgICAqIE5vdGU6IFRoaXMgbWV0aG9kIHdpbGwgbm90IHJlbW92ZSB0aGUgY2FjaGVkIGVudHJ5LCBjYWxsXG4gICAgICogYGV4cGlyZUVudHJpZXMoKWAgdG8gcmVtb3ZlIGluZGV4ZWREQiBhbmQgQ2FjaGUgZW50cmllcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGFzeW5jIGlzVVJMRXhwaXJlZCh1cmwpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tYXhBZ2VTZWNvbmRzKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoYGV4cGlyZWQtdGVzdC13aXRob3V0LW1heC1hZ2VgLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZE5hbWU6ICdpc1VSTEV4cGlyZWQnLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdtYXhBZ2VTZWNvbmRzJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IGF3YWl0IHRoaXMuX3RpbWVzdGFtcE1vZGVsLmdldFRpbWVzdGFtcCh1cmwpO1xuICAgICAgICAgICAgY29uc3QgZXhwaXJlT2xkZXJUaGFuID0gRGF0ZS5ub3coKSAtIHRoaXMuX21heEFnZVNlY29uZHMgKiAxMDAwO1xuICAgICAgICAgICAgcmV0dXJuIHRpbWVzdGFtcCAhPT0gdW5kZWZpbmVkID8gdGltZXN0YW1wIDwgZXhwaXJlT2xkZXJUaGFuIDogdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBJbmRleGVkREIgb2JqZWN0IHN0b3JlIHVzZWQgdG8ga2VlcCB0cmFjayBvZiBjYWNoZSBleHBpcmF0aW9uXG4gICAgICogbWV0YWRhdGEuXG4gICAgICovXG4gICAgYXN5bmMgZGVsZXRlKCkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgYXR0ZW1wdCBhbm90aGVyIHJlcnVuIGlmIHdlJ3JlIGNhbGxlZCBpbiB0aGUgbWlkZGxlIG9mXG4gICAgICAgIC8vIGEgY2FjaGUgZXhwaXJhdGlvbi5cbiAgICAgICAgdGhpcy5fcmVydW5SZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgYXdhaXQgdGhpcy5fdGltZXN0YW1wTW9kZWwuZXhwaXJlRW50cmllcyhJbmZpbml0eSk7IC8vIEV4cGlyZXMgYWxsLlxuICAgIH1cbn1cbmV4cG9ydCB7IENhY2hlRXhwaXJhdGlvbiB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHsgZG9udFdhaXRGb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZG9udFdhaXRGb3IuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyByZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjayB9IGZyb20gJ3dvcmtib3gtY29yZS9yZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjay5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IENhY2hlRXhwaXJhdGlvbiB9IGZyb20gJy4vQ2FjaGVFeHBpcmF0aW9uLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRoaXMgcGx1Z2luIGNhbiBiZSB1c2VkIGluIGEgYHdvcmtib3gtc3RyYXRlZ3lgIHRvIHJlZ3VsYXJseSBlbmZvcmNlIGFcbiAqIGxpbWl0IG9uIHRoZSBhZ2UgYW5kIC8gb3IgdGhlIG51bWJlciBvZiBjYWNoZWQgcmVxdWVzdHMuXG4gKlxuICogSXQgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIGB3b3JrYm94LXN0cmF0ZWd5YCBpbnN0YW5jZXMgdGhhdCBoYXZlIGFcbiAqIFtjdXN0b20gYGNhY2hlTmFtZWAgcHJvcGVydHkgc2V0XSgvd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL2NvbmZpZ3VyZS13b3JrYm94I2N1c3RvbV9jYWNoZV9uYW1lc19pbl9zdHJhdGVnaWVzKS5cbiAqIEluIG90aGVyIHdvcmRzLCBpdCBjYW4ndCBiZSB1c2VkIHRvIGV4cGlyZSBlbnRyaWVzIGluIHN0cmF0ZWd5IHRoYXQgdXNlcyB0aGVcbiAqIGRlZmF1bHQgcnVudGltZSBjYWNoZSBuYW1lLlxuICpcbiAqIFdoZW5ldmVyIGEgY2FjaGVkIHJlc3BvbnNlIGlzIHVzZWQgb3IgdXBkYXRlZCwgdGhpcyBwbHVnaW4gd2lsbCBsb29rXG4gKiBhdCB0aGUgYXNzb2NpYXRlZCBjYWNoZSBhbmQgcmVtb3ZlIGFueSBvbGQgb3IgZXh0cmEgcmVzcG9uc2VzLlxuICpcbiAqIFdoZW4gdXNpbmcgYG1heEFnZVNlY29uZHNgLCByZXNwb25zZXMgbWF5IGJlIHVzZWQgKm9uY2UqIGFmdGVyIGV4cGlyaW5nXG4gKiBiZWNhdXNlIHRoZSBleHBpcmF0aW9uIGNsZWFuIHVwIHdpbGwgbm90IGhhdmUgb2NjdXJyZWQgdW50aWwgKmFmdGVyKiB0aGVcbiAqIGNhY2hlZCByZXNwb25zZSBoYXMgYmVlbiB1c2VkLiBJZiB0aGUgcmVzcG9uc2UgaGFzIGEgXCJEYXRlXCIgaGVhZGVyLCB0aGVuXG4gKiBhIGxpZ2h0IHdlaWdodCBleHBpcmF0aW9uIGNoZWNrIGlzIHBlcmZvcm1lZCBhbmQgdGhlIHJlc3BvbnNlIHdpbGwgbm90IGJlXG4gKiB1c2VkIGltbWVkaWF0ZWx5LlxuICpcbiAqIFdoZW4gdXNpbmcgYG1heEVudHJpZXNgLCB0aGUgZW50cnkgbGVhc3QtcmVjZW50bHkgcmVxdWVzdGVkIHdpbGwgYmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgY2FjaGUgZmlyc3QuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtZXhwaXJhdGlvblxuICovXG5jbGFzcyBFeHBpcmF0aW9uUGx1Z2luIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0V4cGlyYXRpb25QbHVnaW5PcHRpb25zfSBjb25maWdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5tYXhFbnRyaWVzXSBUaGUgbWF4aW11bSBudW1iZXIgb2YgZW50cmllcyB0byBjYWNoZS5cbiAgICAgKiBFbnRyaWVzIHVzZWQgdGhlIGxlYXN0IHdpbGwgYmUgcmVtb3ZlZCBhcyB0aGUgbWF4aW11bSBpcyByZWFjaGVkLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLm1heEFnZVNlY29uZHNdIFRoZSBtYXhpbXVtIGFnZSBvZiBhbiBlbnRyeSBiZWZvcmVcbiAgICAgKiBpdCdzIHRyZWF0ZWQgYXMgc3RhbGUgYW5kIHJlbW92ZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWcubWF0Y2hPcHRpb25zXSBUaGUgW2BDYWNoZVF1ZXJ5T3B0aW9uc2BdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYWNoZS9kZWxldGUjUGFyYW1ldGVycylcbiAgICAgKiB0aGF0IHdpbGwgYmUgdXNlZCB3aGVuIGNhbGxpbmcgYGRlbGV0ZSgpYCBvbiB0aGUgY2FjaGUuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbY29uZmlnLnB1cmdlT25RdW90YUVycm9yXSBXaGV0aGVyIHRvIG9wdCB0aGlzIGNhY2hlIGluIHRvXG4gICAgICogYXV0b21hdGljIGRlbGV0aW9uIGlmIHRoZSBhdmFpbGFibGUgc3RvcmFnZSBxdW90YSBoYXMgYmVlbiBleGNlZWRlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBcImxpZmVjeWNsZVwiIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgYXV0b21hdGljYWxseSBieSB0aGVcbiAgICAgICAgICogYHdvcmtib3gtc3RyYXRlZ2llc2AgaGFuZGxlcnMgd2hlbiBhIGBSZXNwb25zZWAgaXMgYWJvdXQgdG8gYmUgcmV0dXJuZWRcbiAgICAgICAgICogZnJvbSBhIFtDYWNoZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhY2hlKSB0b1xuICAgICAgICAgKiB0aGUgaGFuZGxlci4gSXQgYWxsb3dzIHRoZSBgUmVzcG9uc2VgIHRvIGJlIGluc3BlY3RlZCBmb3IgZnJlc2huZXNzIGFuZFxuICAgICAgICAgKiBwcmV2ZW50cyBpdCBmcm9tIGJlaW5nIHVzZWQgaWYgdGhlIGBSZXNwb25zZWAncyBgRGF0ZWAgaGVhZGVyIHZhbHVlIGlzXG4gICAgICAgICAqIG9sZGVyIHRoYW4gdGhlIGNvbmZpZ3VyZWQgYG1heEFnZVNlY29uZHNgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jYWNoZU5hbWUgTmFtZSBvZiB0aGUgY2FjaGUgdGhlIHJlc3BvbnNlIGlzIGluLlxuICAgICAgICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSBvcHRpb25zLmNhY2hlZFJlc3BvbnNlIFRoZSBgUmVzcG9uc2VgIG9iamVjdCB0aGF0J3MgYmVlblxuICAgICAgICAgKiAgICAgcmVhZCBmcm9tIGEgY2FjaGUgYW5kIHdob3NlIGZyZXNobmVzcyBzaG91bGQgYmUgY2hlY2tlZC5cbiAgICAgICAgICogQHJldHVybiB7UmVzcG9uc2V9IEVpdGhlciB0aGUgYGNhY2hlZFJlc3BvbnNlYCwgaWYgaXQnc1xuICAgICAgICAgKiAgICAgZnJlc2gsIG9yIGBudWxsYCBpZiB0aGUgYFJlc3BvbnNlYCBpcyBvbGRlciB0aGFuIGBtYXhBZ2VTZWNvbmRzYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkID0gYXN5bmMgKHsgZXZlbnQsIHJlcXVlc3QsIGNhY2hlTmFtZSwgY2FjaGVkUmVzcG9uc2UsIH0pID0+IHtcbiAgICAgICAgICAgIGlmICghY2FjaGVkUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGlzRnJlc2ggPSB0aGlzLl9pc1Jlc3BvbnNlRGF0ZUZyZXNoKGNhY2hlZFJlc3BvbnNlKTtcbiAgICAgICAgICAgIC8vIEV4cGlyZSBlbnRyaWVzIHRvIGVuc3VyZSB0aGF0IGV2ZW4gaWYgdGhlIGV4cGlyYXRpb24gZGF0ZSBoYXNcbiAgICAgICAgICAgIC8vIGV4cGlyZWQsIGl0J2xsIG9ubHkgYmUgdXNlZCBvbmNlLlxuICAgICAgICAgICAgY29uc3QgY2FjaGVFeHBpcmF0aW9uID0gdGhpcy5fZ2V0Q2FjaGVFeHBpcmF0aW9uKGNhY2hlTmFtZSk7XG4gICAgICAgICAgICBkb250V2FpdEZvcihjYWNoZUV4cGlyYXRpb24uZXhwaXJlRW50cmllcygpKTtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgbWV0YWRhdGEgZm9yIHRoZSByZXF1ZXN0IFVSTCB0byB0aGUgY3VycmVudCB0aW1lc3RhbXAsXG4gICAgICAgICAgICAvLyBidXQgZG9uJ3QgYGF3YWl0YCBpdCBhcyB3ZSBkb24ndCB3YW50IHRvIGJsb2NrIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVRpbWVzdGFtcERvbmUgPSBjYWNoZUV4cGlyYXRpb24udXBkYXRlVGltZXN0YW1wKHJlcXVlc3QudXJsKTtcbiAgICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LndhaXRVbnRpbCh1cGRhdGVUaW1lc3RhbXBEb25lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgZXZlbnQgbWF5IG5vdCBiZSBhIGZldGNoIGV2ZW50OyBvbmx5IGxvZyB0aGUgVVJMIGlmIGl0IGlzLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdyZXF1ZXN0JyBpbiBldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKGBVbmFibGUgdG8gZW5zdXJlIHNlcnZpY2Ugd29ya2VyIHN0YXlzIGFsaXZlIHdoZW4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB1cGRhdGluZyBjYWNoZSBlbnRyeSBmb3IgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAnJHtnZXRGcmllbmRseVVSTChldmVudC5yZXF1ZXN0LnVybCl9Jy5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpc0ZyZXNoID8gY2FjaGVkUmVzcG9uc2UgOiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBcImxpZmVjeWNsZVwiIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgYXV0b21hdGljYWxseSBieSB0aGVcbiAgICAgICAgICogYHdvcmtib3gtc3RyYXRlZ2llc2AgaGFuZGxlcnMgd2hlbiBhbiBlbnRyeSBpcyBhZGRlZCB0byBhIGNhY2hlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jYWNoZU5hbWUgTmFtZSBvZiB0aGUgY2FjaGUgdGhhdCB3YXMgdXBkYXRlZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMucmVxdWVzdCBUaGUgUmVxdWVzdCBmb3IgdGhlIGNhY2hlZCBlbnRyeS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2FjaGVEaWRVcGRhdGUgPSBhc3luYyAoeyBjYWNoZU5hbWUsIHJlcXVlc3QsIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShjYWNoZU5hbWUsICdzdHJpbmcnLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NhY2hlRGlkVXBkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnY2FjaGVOYW1lJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NhY2hlRGlkVXBkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZUV4cGlyYXRpb24gPSB0aGlzLl9nZXRDYWNoZUV4cGlyYXRpb24oY2FjaGVOYW1lKTtcbiAgICAgICAgICAgIGF3YWl0IGNhY2hlRXhwaXJhdGlvbi51cGRhdGVUaW1lc3RhbXAocmVxdWVzdC51cmwpO1xuICAgICAgICAgICAgYXdhaXQgY2FjaGVFeHBpcmF0aW9uLmV4cGlyZUVudHJpZXMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICghKGNvbmZpZy5tYXhFbnRyaWVzIHx8IGNvbmZpZy5tYXhBZ2VTZWNvbmRzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ21heC1lbnRyaWVzLW9yLWFnZS1yZXF1aXJlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1BsdWdpbicsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZy5tYXhFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShjb25maWcubWF4RW50cmllcywgJ251bWJlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1BsdWdpbicsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdjb25maWcubWF4RW50cmllcycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLm1heEFnZVNlY29uZHMpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNUeXBlKGNvbmZpZy5tYXhBZ2VTZWNvbmRzLCAnbnVtYmVyJywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5tYXhBZ2VTZWNvbmRzJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX21heEFnZVNlY29uZHMgPSBjb25maWcubWF4QWdlU2Vjb25kcztcbiAgICAgICAgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgaWYgKGNvbmZpZy5wdXJnZU9uUXVvdGFFcnJvcikge1xuICAgICAgICAgICAgcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2soKCkgPT4gdGhpcy5kZWxldGVDYWNoZUFuZE1ldGFkYXRhKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgc2ltcGxlIGhlbHBlciBtZXRob2QgdG8gcmV0dXJuIGEgQ2FjaGVFeHBpcmF0aW9uIGluc3RhbmNlIGZvciBhIGdpdmVuXG4gICAgICogY2FjaGUgbmFtZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYWNoZU5hbWVcbiAgICAgKiBAcmV0dXJuIHtDYWNoZUV4cGlyYXRpb259XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9nZXRDYWNoZUV4cGlyYXRpb24oY2FjaGVOYW1lKSB7XG4gICAgICAgIGlmIChjYWNoZU5hbWUgPT09IGNhY2hlTmFtZXMuZ2V0UnVudGltZU5hbWUoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignZXhwaXJlLWN1c3RvbS1jYWNoZXMtb25seScpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjYWNoZUV4cGlyYXRpb24gPSB0aGlzLl9jYWNoZUV4cGlyYXRpb25zLmdldChjYWNoZU5hbWUpO1xuICAgICAgICBpZiAoIWNhY2hlRXhwaXJhdGlvbikge1xuICAgICAgICAgICAgY2FjaGVFeHBpcmF0aW9uID0gbmV3IENhY2hlRXhwaXJhdGlvbihjYWNoZU5hbWUsIHRoaXMuX2NvbmZpZyk7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZUV4cGlyYXRpb25zLnNldChjYWNoZU5hbWUsIGNhY2hlRXhwaXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhY2hlRXhwaXJhdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtSZXNwb25zZX0gY2FjaGVkUmVzcG9uc2VcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaXNSZXNwb25zZURhdGVGcmVzaChjYWNoZWRSZXNwb25zZSkge1xuICAgICAgICBpZiAoIXRoaXMuX21heEFnZVNlY29uZHMpIHtcbiAgICAgICAgICAgIC8vIFdlIGFyZW4ndCBleHBpcmluZyBieSBhZ2UsIHNvIHJldHVybiB0cnVlLCBpdCdzIGZyZXNoXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgJ2RhdGUnIGhlYWRlciB3aWxsIHN1ZmZpY2UgYSBxdWljayBleHBpcmF0aW9uIGNoZWNrLlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvc3ctdG9vbGJveC9pc3N1ZXMvMTY0IGZvclxuICAgICAgICAvLyBkaXNjdXNzaW9uLlxuICAgICAgICBjb25zdCBkYXRlSGVhZGVyVGltZXN0YW1wID0gdGhpcy5fZ2V0RGF0ZUhlYWRlclRpbWVzdGFtcChjYWNoZWRSZXNwb25zZSk7XG4gICAgICAgIGlmIChkYXRlSGVhZGVyVGltZXN0YW1wID09PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBVbmFibGUgdG8gcGFyc2UgZGF0ZSwgc28gYXNzdW1lIGl0J3MgZnJlc2guXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdmFsaWQgaGVhZGVyVGltZSwgdGhlbiBvdXIgcmVzcG9uc2UgaXMgZnJlc2ggaWZmIHRoZVxuICAgICAgICAvLyBoZWFkZXJUaW1lIHBsdXMgbWF4QWdlU2Vjb25kcyBpcyBncmVhdGVyIHRoYW4gdGhlIGN1cnJlbnQgdGltZS5cbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuIGRhdGVIZWFkZXJUaW1lc3RhbXAgPj0gbm93IC0gdGhpcy5fbWF4QWdlU2Vjb25kcyAqIDEwMDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgZXh0cmFjdCB0aGUgZGF0YSBoZWFkZXIgYW5kIHBhcnNlIGl0IGludG8gYSB1c2VmdWxcbiAgICAgKiB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVzcG9uc2V9IGNhY2hlZFJlc3BvbnNlXG4gICAgICogQHJldHVybiB7bnVtYmVyfG51bGx9XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9nZXREYXRlSGVhZGVyVGltZXN0YW1wKGNhY2hlZFJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghY2FjaGVkUmVzcG9uc2UuaGVhZGVycy5oYXMoJ2RhdGUnKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0ZUhlYWRlciA9IGNhY2hlZFJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdkYXRlJyk7XG4gICAgICAgIGNvbnN0IHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkYXRlSGVhZGVyKTtcbiAgICAgICAgY29uc3QgaGVhZGVyVGltZSA9IHBhcnNlZERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAvLyBJZiB0aGUgRGF0ZSBoZWFkZXIgd2FzIGludmFsaWQgZm9yIHNvbWUgcmVhc29uLCBwYXJzZWREYXRlLmdldFRpbWUoKVxuICAgICAgICAvLyB3aWxsIHJldHVybiBOYU4uXG4gICAgICAgIGlmIChpc05hTihoZWFkZXJUaW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhlYWRlclRpbWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgYSBoZWxwZXIgbWV0aG9kIHRoYXQgcGVyZm9ybXMgdHdvIG9wZXJhdGlvbnM6XG4gICAgICpcbiAgICAgKiAtIERlbGV0ZXMgKmFsbCogdGhlIHVuZGVybHlpbmcgQ2FjaGUgaW5zdGFuY2VzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHBsdWdpblxuICAgICAqIGluc3RhbmNlLCBieSBjYWxsaW5nIGNhY2hlcy5kZWxldGUoKSBvbiB5b3VyIGJlaGFsZi5cbiAgICAgKiAtIERlbGV0ZXMgdGhlIG1ldGFkYXRhIGZyb20gSW5kZXhlZERCIHVzZWQgdG8ga2VlcCB0cmFjayBvZiBleHBpcmF0aW9uXG4gICAgICogZGV0YWlscyBmb3IgZWFjaCBDYWNoZSBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIFdoZW4gdXNpbmcgY2FjaGUgZXhwaXJhdGlvbiwgY2FsbGluZyB0aGlzIG1ldGhvZCBpcyBwcmVmZXJhYmxlIHRvIGNhbGxpbmdcbiAgICAgKiBgY2FjaGVzLmRlbGV0ZSgpYCBkaXJlY3RseSwgc2luY2UgdGhpcyB3aWxsIGVuc3VyZSB0aGF0IHRoZSBJbmRleGVkREJcbiAgICAgKiBtZXRhZGF0YSBpcyBhbHNvIGNsZWFubHkgcmVtb3ZlZCBhbmQgb3BlbiBJbmRleGVkREIgaW5zdGFuY2VzIGFyZSBkZWxldGVkLlxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IGlmIHlvdSdyZSAqbm90KiB1c2luZyBjYWNoZSBleHBpcmF0aW9uIGZvciBhIGdpdmVuIGNhY2hlLCBjYWxsaW5nXG4gICAgICogYGNhY2hlcy5kZWxldGUoKWAgYW5kIHBhc3NpbmcgaW4gdGhlIGNhY2hlJ3MgbmFtZSBzaG91bGQgYmUgc3VmZmljaWVudC5cbiAgICAgKiBUaGVyZSBpcyBubyBXb3JrYm94LXNwZWNpZmljIG1ldGhvZCBuZWVkZWQgZm9yIGNsZWFudXAgaW4gdGhhdCBjYXNlLlxuICAgICAqL1xuICAgIGFzeW5jIGRlbGV0ZUNhY2hlQW5kTWV0YWRhdGEoKSB7XG4gICAgICAgIC8vIERvIHRoaXMgb25lIGF0IGEgdGltZSBpbnN0ZWFkIG9mIGFsbCBhdCBvbmNlIHZpYSBgUHJvbWlzZS5hbGwoKWAgdG9cbiAgICAgICAgLy8gcmVkdWNlIHRoZSBjaGFuY2Ugb2YgaW5jb25zaXN0ZW5jeSBpZiBhIHByb21pc2UgcmVqZWN0cy5cbiAgICAgICAgZm9yIChjb25zdCBbY2FjaGVOYW1lLCBjYWNoZUV4cGlyYXRpb25dIG9mIHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMpIHtcbiAgICAgICAgICAgIGF3YWl0IHNlbGYuY2FjaGVzLmRlbGV0ZShjYWNoZU5hbWUpO1xuICAgICAgICAgICAgYXdhaXQgY2FjaGVFeHBpcmF0aW9uLmRlbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG4gICAgICAgIHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgfVxufVxuZXhwb3J0IHsgRXhwaXJhdGlvblBsdWdpbiB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBAdHMtaWdub3JlXG50cnkge1xuICAgIHNlbGZbJ3dvcmtib3g6ZXhwaXJhdGlvbjo2LjUuMyddICYmIF8oKTtcbn1cbmNhdGNoIChlKSB7IH1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IENhY2hlRXhwaXJhdGlvbiB9IGZyb20gJy4vQ2FjaGVFeHBpcmF0aW9uLmpzJztcbmltcG9ydCB7IEV4cGlyYXRpb25QbHVnaW4gfSBmcm9tICcuL0V4cGlyYXRpb25QbHVnaW4uanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQG1vZHVsZSB3b3JrYm94LWV4cGlyYXRpb25cbiAqL1xuZXhwb3J0IHsgQ2FjaGVFeHBpcmF0aW9uLCBFeHBpcmF0aW9uUGx1Z2luIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBvcGVuREIsIGRlbGV0ZURCIH0gZnJvbSAnaWRiJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuY29uc3QgREJfTkFNRSA9ICd3b3JrYm94LWV4cGlyYXRpb24nO1xuY29uc3QgQ0FDSEVfT0JKRUNUX1NUT1JFID0gJ2NhY2hlLWVudHJpZXMnO1xuY29uc3Qgbm9ybWFsaXplVVJMID0gKHVuTm9ybWFsaXplZFVybCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodW5Ob3JtYWxpemVkVXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICB1cmwuaGFzaCA9ICcnO1xuICAgIHJldHVybiB1cmwuaHJlZjtcbn07XG4vKipcbiAqIFJldHVybnMgdGhlIHRpbWVzdGFtcCBtb2RlbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBDYWNoZVRpbWVzdGFtcHNNb2RlbCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2FjaGVOYW1lXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNhY2hlTmFtZSkge1xuICAgICAgICB0aGlzLl9kYiA9IG51bGw7XG4gICAgICAgIHRoaXMuX2NhY2hlTmFtZSA9IGNhY2hlTmFtZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYW4gdXBncmFkZSBvZiBpbmRleGVkREIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0lEQlBEYXRhYmFzZTxDYWNoZURiU2NoZW1hPn0gZGJcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3VwZ3JhZGVEYihkYikge1xuICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IEVkZ2VIVE1MIGRvZXNuJ3Qgc3VwcG9ydCBhcnJheXMgYXMgYSBrZXlQYXRoLCBzbyB3ZVxuICAgICAgICAvLyBoYXZlIHRvIHVzZSB0aGUgYGlkYCBrZXlQYXRoIGhlcmUgYW5kIGNyZWF0ZSBvdXIgb3duIHZhbHVlcyAoYVxuICAgICAgICAvLyBjb25jYXRlbmF0aW9uIG9mIGB1cmwgKyBjYWNoZU5hbWVgKSBpbnN0ZWFkIG9mIHNpbXBseSB1c2luZ1xuICAgICAgICAvLyBga2V5UGF0aDogWyd1cmwnLCAnY2FjaGVOYW1lJ11gLCB3aGljaCBpcyBzdXBwb3J0ZWQgaW4gb3RoZXIgYnJvd3NlcnMuXG4gICAgICAgIGNvbnN0IG9ialN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoQ0FDSEVfT0JKRUNUX1NUT1JFLCB7IGtleVBhdGg6ICdpZCcgfSk7XG4gICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogb25jZSB3ZSBkb24ndCBoYXZlIHRvIHN1cHBvcnQgRWRnZUhUTUwsIHdlIGNhblxuICAgICAgICAvLyBjcmVhdGUgYSBzaW5nbGUgaW5kZXggd2l0aCB0aGUga2V5UGF0aCBgWydjYWNoZU5hbWUnLCAndGltZXN0YW1wJ11gXG4gICAgICAgIC8vIGluc3RlYWQgb2YgZG9pbmcgYm90aCB0aGVzZSBpbmRleGVzLlxuICAgICAgICBvYmpTdG9yZS5jcmVhdGVJbmRleCgnY2FjaGVOYW1lJywgJ2NhY2hlTmFtZScsIHsgdW5pcXVlOiBmYWxzZSB9KTtcbiAgICAgICAgb2JqU3RvcmUuY3JlYXRlSW5kZXgoJ3RpbWVzdGFtcCcsICd0aW1lc3RhbXAnLCB7IHVuaXF1ZTogZmFsc2UgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGFuIHVwZ3JhZGUgb2YgaW5kZXhlZERCIGFuZCBkZWxldGVzIGRlcHJlY2F0ZWQgREJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtJREJQRGF0YWJhc2U8Q2FjaGVEYlNjaGVtYT59IGRiXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF91cGdyYWRlRGJBbmREZWxldGVPbGREYnMoZGIpIHtcbiAgICAgICAgdGhpcy5fdXBncmFkZURiKGRiKTtcbiAgICAgICAgaWYgKHRoaXMuX2NhY2hlTmFtZSkge1xuICAgICAgICAgICAgdm9pZCBkZWxldGVEQih0aGlzLl9jYWNoZU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXN0YW1wXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIHNldFRpbWVzdGFtcCh1cmwsIHRpbWVzdGFtcCkge1xuICAgICAgICB1cmwgPSBub3JtYWxpemVVUkwodXJsKTtcbiAgICAgICAgY29uc3QgZW50cnkgPSB7XG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgICBjYWNoZU5hbWU6IHRoaXMuX2NhY2hlTmFtZSxcbiAgICAgICAgICAgIC8vIENyZWF0aW5nIGFuIElEIGZyb20gdGhlIFVSTCBhbmQgY2FjaGUgbmFtZSB3b24ndCBiZSBuZWNlc3Nhcnkgb25jZVxuICAgICAgICAgICAgLy8gRWRnZSBzd2l0Y2hlcyB0byBDaHJvbWl1bSBhbmQgYWxsIGJyb3dzZXJzIHdlIHN1cHBvcnQgd29yayB3aXRoXG4gICAgICAgICAgICAvLyBhcnJheSBrZXlQYXRocy5cbiAgICAgICAgICAgIGlkOiB0aGlzLl9nZXRJZCh1cmwpLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IHRoaXMuZ2V0RGIoKTtcbiAgICAgICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihDQUNIRV9PQkpFQ1RfU1RPUkUsICdyZWFkd3JpdGUnLCB7XG4gICAgICAgICAgICBkdXJhYmlsaXR5OiAncmVsYXhlZCcsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCB0eC5zdG9yZS5wdXQoZW50cnkpO1xuICAgICAgICBhd2FpdCB0eC5kb25lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0aW1lc3RhbXAgc3RvcmVkIGZvciBhIGdpdmVuIFVSTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJuIHtudW1iZXIgfCB1bmRlZmluZWR9XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIGdldFRpbWVzdGFtcCh1cmwpIHtcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCB0aGlzLmdldERiKCk7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgZGIuZ2V0KENBQ0hFX09CSkVDVF9TVE9SRSwgdGhpcy5fZ2V0SWQodXJsKSk7XG4gICAgICAgIHJldHVybiBlbnRyeSA9PT0gbnVsbCB8fCBlbnRyeSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZW50cnkudGltZXN0YW1wO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJdGVyYXRlcyB0aHJvdWdoIGFsbCB0aGUgZW50cmllcyBpbiB0aGUgb2JqZWN0IHN0b3JlIChmcm9tIG5ld2VzdCB0b1xuICAgICAqIG9sZGVzdCkgYW5kIHJlbW92ZXMgZW50cmllcyBvbmNlIGVpdGhlciBgbWF4Q291bnRgIGlzIHJlYWNoZWQgb3IgdGhlXG4gICAgICogZW50cnkncyB0aW1lc3RhbXAgaXMgbGVzcyB0aGFuIGBtaW5UaW1lc3RhbXBgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblRpbWVzdGFtcFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhDb3VudFxuICAgICAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIGV4cGlyZUVudHJpZXMobWluVGltZXN0YW1wLCBtYXhDb3VudCkge1xuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IHRoaXMuZ2V0RGIoKTtcbiAgICAgICAgbGV0IGN1cnNvciA9IGF3YWl0IGRiXG4gICAgICAgICAgICAudHJhbnNhY3Rpb24oQ0FDSEVfT0JKRUNUX1NUT1JFKVxuICAgICAgICAgICAgLnN0b3JlLmluZGV4KCd0aW1lc3RhbXAnKVxuICAgICAgICAgICAgLm9wZW5DdXJzb3IobnVsbCwgJ3ByZXYnKTtcbiAgICAgICAgY29uc3QgZW50cmllc1RvRGVsZXRlID0gW107XG4gICAgICAgIGxldCBlbnRyaWVzTm90RGVsZXRlZENvdW50ID0gMDtcbiAgICAgICAgd2hpbGUgKGN1cnNvcikge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY3Vyc29yLnZhbHVlO1xuICAgICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBvbmNlIHdlIGNhbiB1c2UgYSBtdWx0aS1rZXkgaW5kZXgsIHdlXG4gICAgICAgICAgICAvLyB3b24ndCBoYXZlIHRvIGNoZWNrIGBjYWNoZU5hbWVgIGhlcmUuXG4gICAgICAgICAgICBpZiAocmVzdWx0LmNhY2hlTmFtZSA9PT0gdGhpcy5fY2FjaGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gRGVsZXRlIGFuIGVudHJ5IGlmIGl0J3Mgb2xkZXIgdGhhbiB0aGUgbWF4IGFnZSBvclxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFscmVhZHkgaGF2ZSB0aGUgbWF4IG51bWJlciBhbGxvd2VkLlxuICAgICAgICAgICAgICAgIGlmICgobWluVGltZXN0YW1wICYmIHJlc3VsdC50aW1lc3RhbXAgPCBtaW5UaW1lc3RhbXApIHx8XG4gICAgICAgICAgICAgICAgICAgIChtYXhDb3VudCAmJiBlbnRyaWVzTm90RGVsZXRlZENvdW50ID49IG1heENvdW50KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IHdlIHNob3VsZCBiZSBhYmxlIHRvIGRlbGV0ZSB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gZW50cnkgcmlnaHQgaGVyZSwgYnV0IGRvaW5nIHNvIGNhdXNlcyBhbiBpdGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgLy8gYnVnIGluIFNhZmFyaSBzdGFibGUgKGZpeGVkIGluIFRQKS4gSW5zdGVhZCB3ZSBjYW5cbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIGtleXMgb2YgdGhlIGVudHJpZXMgdG8gZGVsZXRlLCBhbmQgdGhlblxuICAgICAgICAgICAgICAgICAgICAvLyBkZWxldGUgdGhlIHNlcGFyYXRlIHRyYW5zYWN0aW9ucy5cbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xOTc4XG4gICAgICAgICAgICAgICAgICAgIC8vIGN1cnNvci5kZWxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2Ugb25seSBuZWVkIHRvIHJldHVybiB0aGUgVVJMLCBub3QgdGhlIHdob2xlIGVudHJ5LlxuICAgICAgICAgICAgICAgICAgICBlbnRyaWVzVG9EZWxldGUucHVzaChjdXJzb3IudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllc05vdERlbGV0ZWRDb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnNvciA9IGF3YWl0IGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogb25jZSB0aGUgU2FmYXJpIGJ1ZyBpbiB0aGUgZm9sbG93aW5nIGlzc3VlIGlzIGZpeGVkLFxuICAgICAgICAvLyB3ZSBzaG91bGQgYmUgYWJsZSB0byByZW1vdmUgdGhpcyBsb29wIGFuZCBkbyB0aGUgZW50cnkgZGVsZXRpb24gaW4gdGhlXG4gICAgICAgIC8vIGN1cnNvciBsb29wIGFib3ZlOlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE5NzhcbiAgICAgICAgY29uc3QgdXJsc0RlbGV0ZWQgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzVG9EZWxldGUpIHtcbiAgICAgICAgICAgIGF3YWl0IGRiLmRlbGV0ZShDQUNIRV9PQkpFQ1RfU1RPUkUsIGVudHJ5LmlkKTtcbiAgICAgICAgICAgIHVybHNEZWxldGVkLnB1c2goZW50cnkudXJsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXJsc0RlbGV0ZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRha2VzIGEgVVJMIGFuZCByZXR1cm5zIGFuIElEIHRoYXQgd2lsbCBiZSB1bmlxdWUgaW4gdGhlIG9iamVjdCBzdG9yZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9nZXRJZCh1cmwpIHtcbiAgICAgICAgLy8gQ3JlYXRpbmcgYW4gSUQgZnJvbSB0aGUgVVJMIGFuZCBjYWNoZSBuYW1lIHdvbid0IGJlIG5lY2Vzc2FyeSBvbmNlXG4gICAgICAgIC8vIEVkZ2Ugc3dpdGNoZXMgdG8gQ2hyb21pdW0gYW5kIGFsbCBicm93c2VycyB3ZSBzdXBwb3J0IHdvcmsgd2l0aFxuICAgICAgICAvLyBhcnJheSBrZXlQYXRocy5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlTmFtZSArICd8JyArIG5vcm1hbGl6ZVVSTCh1cmwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9wZW4gY29ubmVjdGlvbiB0byB0aGUgZGF0YWJhc2UuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIGdldERiKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2RiKSB7XG4gICAgICAgICAgICB0aGlzLl9kYiA9IGF3YWl0IG9wZW5EQihEQl9OQU1FLCAxLCB7XG4gICAgICAgICAgICAgICAgdXBncmFkZTogdGhpcy5fdXBncmFkZURiQW5kRGVsZXRlT2xkRGJzLmJpbmQodGhpcyksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGI7XG4gICAgfVxufVxuZXhwb3J0IHsgQ2FjaGVUaW1lc3RhbXBzTW9kZWwgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgY2FjaGVOYW1lcyB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyB3YWl0VW50aWwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvd2FpdFVudGlsLmpzJztcbmltcG9ydCB7IGNyZWF0ZUNhY2hlS2V5IH0gZnJvbSAnLi91dGlscy9jcmVhdGVDYWNoZUtleS5qcyc7XG5pbXBvcnQgeyBQcmVjYWNoZUluc3RhbGxSZXBvcnRQbHVnaW4gfSBmcm9tICcuL3V0aWxzL1ByZWNhY2hlSW5zdGFsbFJlcG9ydFBsdWdpbi5qcyc7XG5pbXBvcnQgeyBQcmVjYWNoZUNhY2hlS2V5UGx1Z2luIH0gZnJvbSAnLi91dGlscy9QcmVjYWNoZUNhY2hlS2V5UGx1Z2luLmpzJztcbmltcG9ydCB7IHByaW50Q2xlYW51cERldGFpbHMgfSBmcm9tICcuL3V0aWxzL3ByaW50Q2xlYW51cERldGFpbHMuanMnO1xuaW1wb3J0IHsgcHJpbnRJbnN0YWxsRGV0YWlscyB9IGZyb20gJy4vdXRpbHMvcHJpbnRJbnN0YWxsRGV0YWlscy5qcyc7XG5pbXBvcnQgeyBQcmVjYWNoZVN0cmF0ZWd5IH0gZnJvbSAnLi9QcmVjYWNoZVN0cmF0ZWd5LmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFBlcmZvcm1zIGVmZmljaWVudCBwcmVjYWNoaW5nIG9mIGFzc2V0cy5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmNsYXNzIFByZWNhY2hlQ29udHJvbGxlciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IFByZWNhY2hlQ29udHJvbGxlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FjaGVOYW1lXSBUaGUgY2FjaGUgdG8gdXNlIGZvciBwcmVjYWNoaW5nLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5wbHVnaW5zXSBQbHVnaW5zIHRvIHVzZSB3aGVuIHByZWNhY2hpbmcgYXMgd2VsbFxuICAgICAqIGFzIHJlc3BvbmRpbmcgdG8gZmV0Y2ggZXZlbnRzIGZvciBwcmVjYWNoZWQgYXNzZXRzLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZmFsbGJhY2tUb05ldHdvcms9dHJ1ZV0gV2hldGhlciB0byBhdHRlbXB0IHRvXG4gICAgICogZ2V0IHRoZSByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrIGlmIHRoZXJlJ3MgYSBwcmVjYWNoZSBtaXNzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHsgY2FjaGVOYW1lLCBwbHVnaW5zID0gW10sIGZhbGxiYWNrVG9OZXR3b3JrID0gdHJ1ZSwgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuX3VybHNUb0NhY2hlS2V5cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVNb2RlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fY2FjaGVLZXlzVG9JbnRlZ3JpdGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fc3RyYXRlZ3kgPSBuZXcgUHJlY2FjaGVTdHJhdGVneSh7XG4gICAgICAgICAgICBjYWNoZU5hbWU6IGNhY2hlTmFtZXMuZ2V0UHJlY2FjaGVOYW1lKGNhY2hlTmFtZSksXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgLi4ucGx1Z2lucyxcbiAgICAgICAgICAgICAgICBuZXcgUHJlY2FjaGVDYWNoZUtleVBsdWdpbih7IHByZWNhY2hlQ29udHJvbGxlcjogdGhpcyB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmYWxsYmFja1RvTmV0d29yayxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEJpbmQgdGhlIGluc3RhbGwgYW5kIGFjdGl2YXRlIG1ldGhvZHMgdG8gdGhlIGluc3RhbmNlLlxuICAgICAgICB0aGlzLmluc3RhbGwgPSB0aGlzLmluc3RhbGwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZSA9IHRoaXMuYWN0aXZhdGUuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHR5cGUge3dvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZVN0cmF0ZWd5fSBUaGUgc3RyYXRlZ3kgY3JlYXRlZCBieSB0aGlzIGNvbnRyb2xsZXIgYW5kXG4gICAgICogdXNlZCB0byBjYWNoZSBhc3NldHMgYW5kIHJlc3BvbmQgdG8gZmV0Y2ggZXZlbnRzLlxuICAgICAqL1xuICAgIGdldCBzdHJhdGVneSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmF0ZWd5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGl0ZW1zIHRvIHRoZSBwcmVjYWNoZSBsaXN0LCByZW1vdmluZyBhbnkgZHVwbGljYXRlcyBhbmRcbiAgICAgKiBzdG9yZXMgdGhlIGZpbGVzIGluIHRoZVxuICAgICAqIHtAbGluayB3b3JrYm94LWNvcmUuY2FjaGVOYW1lc3xcInByZWNhY2hlIGNhY2hlXCJ9IHdoZW4gdGhlIHNlcnZpY2VcbiAgICAgKiB3b3JrZXIgaW5zdGFsbHMuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheTxPYmplY3R8c3RyaW5nPn0gW2VudHJpZXM9W11dIEFycmF5IG9mIGVudHJpZXMgdG8gcHJlY2FjaGUuXG4gICAgICovXG4gICAgcHJlY2FjaGUoZW50cmllcykge1xuICAgICAgICB0aGlzLmFkZFRvQ2FjaGVMaXN0KGVudHJpZXMpO1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbGxBbmRBY3RpdmVMaXN0ZW5lcnNBZGRlZCkge1xuICAgICAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgdGhpcy5pbnN0YWxsKTtcbiAgICAgICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCB0aGlzLmFjdGl2YXRlKTtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbGxBbmRBY3RpdmVMaXN0ZW5lcnNBZGRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBhZGQgaXRlbXMgdG8gdGhlIHByZWNhY2hlIGxpc3QsIHJlbW92aW5nIGR1cGxpY2F0ZXNcbiAgICAgKiBhbmQgZW5zdXJpbmcgdGhlIGluZm9ybWF0aW9uIGlzIHZhbGlkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheTx3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyLlByZWNhY2hlRW50cnl8c3RyaW5nPn0gZW50cmllc1xuICAgICAqICAgICBBcnJheSBvZiBlbnRyaWVzIHRvIHByZWNhY2hlLlxuICAgICAqL1xuICAgIGFkZFRvQ2FjaGVMaXN0KGVudHJpZXMpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0FycmF5KGVudHJpZXMsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1wcmVjYWNoaW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdQcmVjYWNoZUNvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnYWRkVG9DYWNoZUxpc3QnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2VudHJpZXMnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXJsc1RvV2FybkFib3V0ID0gW107XG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjI1OVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB1cmxzVG9XYXJuQWJvdXQucHVzaChlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbnRyeSAmJiBlbnRyeS5yZXZpc2lvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdXJsc1RvV2FybkFib3V0LnB1c2goZW50cnkudXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgY2FjaGVLZXksIHVybCB9ID0gY3JlYXRlQ2FjaGVLZXkoZW50cnkpO1xuICAgICAgICAgICAgY29uc3QgY2FjaGVNb2RlID0gdHlwZW9mIGVudHJ5ICE9PSAnc3RyaW5nJyAmJiBlbnRyeS5yZXZpc2lvbiA/ICdyZWxvYWQnIDogJ2RlZmF1bHQnO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3VybHNUb0NhY2hlS2V5cy5oYXModXJsKSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX3VybHNUb0NhY2hlS2V5cy5nZXQodXJsKSAhPT0gY2FjaGVLZXkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdhZGQtdG8tY2FjaGUtbGlzdC1jb25mbGljdGluZy1lbnRyaWVzJywge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdEVudHJ5OiB0aGlzLl91cmxzVG9DYWNoZUtleXMuZ2V0KHVybCksXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZEVudHJ5OiBjYWNoZUtleSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09ICdzdHJpbmcnICYmIGVudHJ5LmludGVncml0eSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYWNoZUtleXNUb0ludGVncml0aWVzLmhhcyhjYWNoZUtleSkgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVLZXlzVG9JbnRlZ3JpdGllcy5nZXQoY2FjaGVLZXkpICE9PSBlbnRyeS5pbnRlZ3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignYWRkLXRvLWNhY2hlLWxpc3QtY29uZmxpY3RpbmctaW50ZWdyaXRpZXMnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleXNUb0ludGVncml0aWVzLnNldChjYWNoZUtleSwgZW50cnkuaW50ZWdyaXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3VybHNUb0NhY2hlS2V5cy5zZXQodXJsLCBjYWNoZUtleSk7XG4gICAgICAgICAgICB0aGlzLl91cmxzVG9DYWNoZU1vZGVzLnNldCh1cmwsIGNhY2hlTW9kZSk7XG4gICAgICAgICAgICBpZiAodXJsc1RvV2FybkFib3V0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YXJuaW5nTWVzc2FnZSA9IGBXb3JrYm94IGlzIHByZWNhY2hpbmcgVVJMcyB3aXRob3V0IHJldmlzaW9uIGAgK1xuICAgICAgICAgICAgICAgICAgICBgaW5mbzogJHt1cmxzVG9XYXJuQWJvdXQuam9pbignLCAnKX1cXG5UaGlzIGlzIGdlbmVyYWxseSBOT1Qgc2FmZS4gYCArXG4gICAgICAgICAgICAgICAgICAgIGBMZWFybiBtb3JlIGF0IGh0dHBzOi8vYml0Lmx5L3diLXByZWNhY2hlYDtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBVc2UgY29uc29sZSBkaXJlY3RseSB0byBkaXNwbGF5IHRoaXMgd2FybmluZyB3aXRob3V0IGJsb2F0aW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1bmRsZSBzaXplcyBieSBwdWxsaW5nIGluIGFsbCBvZiB0aGUgbG9nZ2VyIGNvZGViYXNlIGluIHByb2QuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybih3YXJuaW5nTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIud2Fybih3YXJuaW5nTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZWNhY2hlcyBuZXcgYW5kIHVwZGF0ZWQgYXNzZXRzLiBDYWxsIHRoaXMgbWV0aG9kIGZyb20gdGhlIHNlcnZpY2Ugd29ya2VyXG4gICAgICogaW5zdGFsbCBldmVudC5cbiAgICAgKlxuICAgICAqIE5vdGU6IHRoaXMgbWV0aG9kIGNhbGxzIGBldmVudC53YWl0VW50aWwoKWAgZm9yIHlvdSwgc28geW91IGRvIG5vdCBuZWVkXG4gICAgICogdG8gY2FsbCBpdCB5b3Vyc2VsZiBpbiB5b3VyIGV2ZW50IGhhbmRsZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9IGV2ZW50XG4gICAgICogQHJldHVybiB7UHJvbWlzZTx3b3JrYm94LXByZWNhY2hpbmcuSW5zdGFsbFJlc3VsdD59XG4gICAgICovXG4gICAgaW5zdGFsbChldmVudCkge1xuICAgICAgICAvLyB3YWl0VW50aWwgcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuXG4gICAgICAgIHJldHVybiB3YWl0VW50aWwoZXZlbnQsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluc3RhbGxSZXBvcnRQbHVnaW4gPSBuZXcgUHJlY2FjaGVJbnN0YWxsUmVwb3J0UGx1Z2luKCk7XG4gICAgICAgICAgICB0aGlzLnN0cmF0ZWd5LnBsdWdpbnMucHVzaChpbnN0YWxsUmVwb3J0UGx1Z2luKTtcbiAgICAgICAgICAgIC8vIENhY2hlIGVudHJpZXMgb25lIGF0IGEgdGltZS5cbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzI1MjhcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3VybCwgY2FjaGVLZXldIG9mIHRoaXMuX3VybHNUb0NhY2hlS2V5cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGludGVncml0eSA9IHRoaXMuX2NhY2hlS2V5c1RvSW50ZWdyaXRpZXMuZ2V0KGNhY2hlS2V5KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZU1vZGUgPSB0aGlzLl91cmxzVG9DYWNoZU1vZGVzLmdldCh1cmwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZWdyaXR5LFxuICAgICAgICAgICAgICAgICAgICBjYWNoZTogY2FjaGVNb2RlLFxuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh0aGlzLnN0cmF0ZWd5LmhhbmRsZUFsbCh7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBjYWNoZUtleSB9LFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHVwZGF0ZWRVUkxzLCBub3RVcGRhdGVkVVJMcyB9ID0gaW5zdGFsbFJlcG9ydFBsdWdpbjtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcHJpbnRJbnN0YWxsRGV0YWlscyh1cGRhdGVkVVJMcywgbm90VXBkYXRlZFVSTHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgdXBkYXRlZFVSTHMsIG5vdFVwZGF0ZWRVUkxzIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGFzc2V0cyB0aGF0IGFyZSBubyBsb25nZXIgcHJlc2VudCBpbiB0aGUgY3VycmVudCBwcmVjYWNoZSBtYW5pZmVzdC5cbiAgICAgKiBDYWxsIHRoaXMgbWV0aG9kIGZyb20gdGhlIHNlcnZpY2Ugd29ya2VyIGFjdGl2YXRlIGV2ZW50LlxuICAgICAqXG4gICAgICogTm90ZTogdGhpcyBtZXRob2QgY2FsbHMgYGV2ZW50LndhaXRVbnRpbCgpYCBmb3IgeW91LCBzbyB5b3UgZG8gbm90IG5lZWRcbiAgICAgKiB0byBjYWxsIGl0IHlvdXJzZWxmIGluIHlvdXIgZXZlbnQgaGFuZGxlcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHdvcmtib3gtcHJlY2FjaGluZy5DbGVhbnVwUmVzdWx0Pn1cbiAgICAgKi9cbiAgICBhY3RpdmF0ZShldmVudCkge1xuICAgICAgICAvLyB3YWl0VW50aWwgcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuXG4gICAgICAgIHJldHVybiB3YWl0VW50aWwoZXZlbnQsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgc2VsZi5jYWNoZXMub3Blbih0aGlzLnN0cmF0ZWd5LmNhY2hlTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50bHlDYWNoZWRSZXF1ZXN0cyA9IGF3YWl0IGNhY2hlLmtleXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkQ2FjaGVLZXlzID0gbmV3IFNldCh0aGlzLl91cmxzVG9DYWNoZUtleXMudmFsdWVzKCkpO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlZFVSTHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVxdWVzdCBvZiBjdXJyZW50bHlDYWNoZWRSZXF1ZXN0cykge1xuICAgICAgICAgICAgICAgIGlmICghZXhwZWN0ZWRDYWNoZUtleXMuaGFzKHJlcXVlc3QudXJsKSkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBjYWNoZS5kZWxldGUocmVxdWVzdCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZWRVUkxzLnB1c2gocmVxdWVzdC51cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcHJpbnRDbGVhbnVwRGV0YWlscyhkZWxldGVkVVJMcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBkZWxldGVkVVJMcyB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG1hcHBpbmcgb2YgYSBwcmVjYWNoZWQgVVJMIHRvIHRoZSBjb3JyZXNwb25kaW5nIGNhY2hlIGtleSwgdGFraW5nXG4gICAgICogaW50byBhY2NvdW50IHRoZSByZXZpc2lvbiBpbmZvcm1hdGlvbiBmb3IgdGhlIFVSTC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge01hcDxzdHJpbmcsIHN0cmluZz59IEEgVVJMIHRvIGNhY2hlIGtleSBtYXBwaW5nLlxuICAgICAqL1xuICAgIGdldFVSTHNUb0NhY2hlS2V5cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VybHNUb0NhY2hlS2V5cztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGxpc3Qgb2YgYWxsIHRoZSBVUkxzIHRoYXQgaGF2ZSBiZWVuIHByZWNhY2hlZCBieSB0aGUgY3VycmVudFxuICAgICAqIHNlcnZpY2Ugd29ya2VyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn0gVGhlIHByZWNhY2hlZCBVUkxzLlxuICAgICAqL1xuICAgIGdldENhY2hlZFVSTHMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmtleXMoKV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNhY2hlIGtleSB1c2VkIGZvciBzdG9yaW5nIGEgZ2l2ZW4gVVJMLiBJZiB0aGF0IFVSTCBpc1xuICAgICAqIHVudmVyc2lvbmVkLCBsaWtlIGAvaW5kZXguaHRtbCcsIHRoZW4gdGhlIGNhY2hlIGtleSB3aWxsIGJlIHRoZSBvcmlnaW5hbFxuICAgICAqIFVSTCB3aXRoIGEgc2VhcmNoIHBhcmFtZXRlciBhcHBlbmRlZCB0byBpdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgQSBVUkwgd2hvc2UgY2FjaGUga2V5IHlvdSB3YW50IHRvIGxvb2sgdXAuXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgdmVyc2lvbmVkIFVSTCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEgY2FjaGUga2V5XG4gICAgICogZm9yIHRoZSBvcmlnaW5hbCBVUkwsIG9yIHVuZGVmaW5lZCBpZiB0aGF0IFVSTCBpc24ndCBwcmVjYWNoZWQuXG4gICAgICovXG4gICAgZ2V0Q2FjaGVLZXlGb3JVUkwodXJsKSB7XG4gICAgICAgIGNvbnN0IHVybE9iamVjdCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VybHNUb0NhY2hlS2V5cy5nZXQodXJsT2JqZWN0LmhyZWYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIEEgY2FjaGUga2V5IHdob3NlIFNSSSB5b3Ugd2FudCB0byBsb29rIHVwLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHN1YnJlc291cmNlIGludGVncml0eSBhc3NvY2lhdGVkIHdpdGggdGhlIGNhY2hlIGtleSxcbiAgICAgKiBvciB1bmRlZmluZWQgaWYgaXQncyBub3Qgc2V0LlxuICAgICAqL1xuICAgIGdldEludGVncml0eUZvckNhY2hlS2V5KGNhY2hlS2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZUtleXNUb0ludGVncml0aWVzLmdldChjYWNoZUtleSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgYWN0cyBhcyBhIGRyb3AtaW4gcmVwbGFjZW1lbnQgZm9yXG4gICAgICogW2BjYWNoZS5tYXRjaCgpYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhY2hlL21hdGNoKVxuICAgICAqIHdpdGggdGhlIGZvbGxvd2luZyBkaWZmZXJlbmNlczpcbiAgICAgKlxuICAgICAqIC0gSXQga25vd3Mgd2hhdCB0aGUgbmFtZSBvZiB0aGUgcHJlY2FjaGUgaXMsIGFuZCBvbmx5IGNoZWNrcyBpbiB0aGF0IGNhY2hlLlxuICAgICAqIC0gSXQgYWxsb3dzIHlvdSB0byBwYXNzIGluIGFuIFwib3JpZ2luYWxcIiBVUkwgd2l0aG91dCB2ZXJzaW9uaW5nIHBhcmFtZXRlcnMsXG4gICAgICogYW5kIGl0IHdpbGwgYXV0b21hdGljYWxseSBsb29rIHVwIHRoZSBjb3JyZWN0IGNhY2hlIGtleSBmb3IgdGhlIGN1cnJlbnRseVxuICAgICAqIGFjdGl2ZSByZXZpc2lvbiBvZiB0aGF0IFVSTC5cbiAgICAgKlxuICAgICAqIEUuZy4sIGBtYXRjaFByZWNhY2hlKCdpbmRleC5odG1sJylgIHdpbGwgZmluZCB0aGUgY29ycmVjdCBwcmVjYWNoZWRcbiAgICAgKiByZXNwb25zZSBmb3IgdGhlIGN1cnJlbnRseSBhY3RpdmUgc2VydmljZSB3b3JrZXIsIGV2ZW4gaWYgdGhlIGFjdHVhbCBjYWNoZVxuICAgICAqIGtleSBpcyBgJy9pbmRleC5odG1sP19fV0JfUkVWSVNJT05fXz0xMjM0YWJjZCdgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd8UmVxdWVzdH0gcmVxdWVzdCBUaGUga2V5ICh3aXRob3V0IHJldmlzaW9uaW5nIHBhcmFtZXRlcnMpXG4gICAgICogdG8gbG9vayB1cCBpbiB0aGUgcHJlY2FjaGUuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZXx1bmRlZmluZWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIG1hdGNoUHJlY2FjaGUocmVxdWVzdCkge1xuICAgICAgICBjb25zdCB1cmwgPSByZXF1ZXN0IGluc3RhbmNlb2YgUmVxdWVzdCA/IHJlcXVlc3QudXJsIDogcmVxdWVzdDtcbiAgICAgICAgY29uc3QgY2FjaGVLZXkgPSB0aGlzLmdldENhY2hlS2V5Rm9yVVJMKHVybCk7XG4gICAgICAgIGlmIChjYWNoZUtleSkge1xuICAgICAgICAgICAgY29uc3QgY2FjaGUgPSBhd2FpdCBzZWxmLmNhY2hlcy5vcGVuKHRoaXMuc3RyYXRlZ3kuY2FjaGVOYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZS5tYXRjaChjYWNoZUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgbG9va3MgdXAgYHVybGAgaW4gdGhlIHByZWNhY2hlICh0YWtpbmcgaW50b1xuICAgICAqIGFjY291bnQgcmV2aXNpb24gaW5mb3JtYXRpb24pLCBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBgUmVzcG9uc2VgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgcHJlY2FjaGVkIFVSTCB3aGljaCB3aWxsIGJlIHVzZWQgdG8gbG9va3VwIHRoZVxuICAgICAqIGBSZXNwb25zZWAuXG4gICAgICogQHJldHVybiB7d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja31cbiAgICAgKi9cbiAgICBjcmVhdGVIYW5kbGVyQm91bmRUb1VSTCh1cmwpIHtcbiAgICAgICAgY29uc3QgY2FjaGVLZXkgPSB0aGlzLmdldENhY2hlS2V5Rm9yVVJMKHVybCk7XG4gICAgICAgIGlmICghY2FjaGVLZXkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vbi1wcmVjYWNoZWQtdXJsJywgeyB1cmwgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChvcHRpb25zKSA9PiB7XG4gICAgICAgICAgICBvcHRpb25zLnJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwpO1xuICAgICAgICAgICAgb3B0aW9ucy5wYXJhbXMgPSBPYmplY3QuYXNzaWduKHsgY2FjaGVLZXkgfSwgb3B0aW9ucy5wYXJhbXMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3kuaGFuZGxlKG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydCB7IFByZWNhY2hlQ29udHJvbGxlciB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3dvcmtib3gtcm91dGluZy9Sb3V0ZS5qcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVVSTFZhcmlhdGlvbnMgfSBmcm9tICcuL3V0aWxzL2dlbmVyYXRlVVJMVmFyaWF0aW9ucy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBIHN1YmNsYXNzIG9mIHtAbGluayB3b3JrYm94LXJvdXRpbmcuUm91dGV9IHRoYXQgdGFrZXMgYVxuICoge0BsaW5rIHdvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXJ9XG4gKiBpbnN0YW5jZSBhbmQgdXNlcyBpdCB0byBtYXRjaCBpbmNvbWluZyByZXF1ZXN0cyBhbmQgaGFuZGxlIGZldGNoaW5nXG4gKiByZXNwb25zZXMgZnJvbSB0aGUgcHJlY2FjaGUuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcHJlY2FjaGluZ1xuICogQGV4dGVuZHMgd29ya2JveC1yb3V0aW5nLlJvdXRlXG4gKi9cbmNsYXNzIFByZWNhY2hlUm91dGUgZXh0ZW5kcyBSb3V0ZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtQcmVjYWNoZUNvbnRyb2xsZXJ9IHByZWNhY2hlQ29udHJvbGxlciBBIGBQcmVjYWNoZUNvbnRyb2xsZXJgXG4gICAgICogaW5zdGFuY2UgdXNlZCB0byBib3RoIG1hdGNoIHJlcXVlc3RzIGFuZCByZXNwb25kIHRvIGZldGNoIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMgdG8gY29udHJvbCBob3cgcmVxdWVzdHMgYXJlIG1hdGNoZWRcbiAgICAgKiBhZ2FpbnN0IHRoZSBsaXN0IG9mIHByZWNhY2hlZCBVUkxzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5kaXJlY3RvcnlJbmRleD1pbmRleC5odG1sXSBUaGUgYGRpcmVjdG9yeUluZGV4YCB3aWxsXG4gICAgICogY2hlY2sgY2FjaGUgZW50cmllcyBmb3IgYSBVUkxzIGVuZGluZyB3aXRoICcvJyB0byBzZWUgaWYgdGhlcmUgaXMgYSBoaXQgd2hlblxuICAgICAqIGFwcGVuZGluZyB0aGUgYGRpcmVjdG9yeUluZGV4YCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge0FycmF5PFJlZ0V4cD59IFtvcHRpb25zLmlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZz1bL151dG1fLywgL15mYmNsaWQkL11dIEFuXG4gICAgICogYXJyYXkgb2YgcmVnZXgncyB0byByZW1vdmUgc2VhcmNoIHBhcmFtcyB3aGVuIGxvb2tpbmcgZm9yIGEgY2FjaGUgbWF0Y2guXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5jbGVhblVSTHM9dHJ1ZV0gVGhlIGBjbGVhblVSTHNgIG9wdGlvbiB3aWxsXG4gICAgICogY2hlY2sgdGhlIGNhY2hlIGZvciB0aGUgVVJMIHdpdGggYSBgLmh0bWxgIGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGVuZC5cbiAgICAgKiBAcGFyYW0ge3dvcmtib3gtcHJlY2FjaGluZ351cmxNYW5pcHVsYXRpb259IFtvcHRpb25zLnVybE1hbmlwdWxhdGlvbl1cbiAgICAgKiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCBzaG91bGQgdGFrZSBhIFVSTCBhbmQgcmV0dXJuIGFuIGFycmF5IG9mXG4gICAgICogYWx0ZXJuYXRpdmUgVVJMcyB0aGF0IHNob3VsZCBiZSBjaGVja2VkIGZvciBwcmVjYWNoZSBtYXRjaGVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByZWNhY2hlQ29udHJvbGxlciwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBtYXRjaCA9ICh7IHJlcXVlc3QsIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybHNUb0NhY2hlS2V5cyA9IHByZWNhY2hlQ29udHJvbGxlci5nZXRVUkxzVG9DYWNoZUtleXMoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcG9zc2libGVVUkwgb2YgZ2VuZXJhdGVVUkxWYXJpYXRpb25zKHJlcXVlc3QudXJsLCBvcHRpb25zKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gdXJsc1RvQ2FjaGVLZXlzLmdldChwb3NzaWJsZVVSTCk7XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGludGVncml0eSA9IHByZWNhY2hlQ29udHJvbGxlci5nZXRJbnRlZ3JpdHlGb3JDYWNoZUtleShjYWNoZUtleSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGNhY2hlS2V5LCBpbnRlZ3JpdHkgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgUHJlY2FjaGluZyBkaWQgbm90IGZpbmQgYSBtYXRjaCBmb3IgYCArIGdldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIHN1cGVyKG1hdGNoLCBwcmVjYWNoZUNvbnRyb2xsZXIuc3RyYXRlZ3kpO1xuICAgIH1cbn1cbmV4cG9ydCB7IFByZWNhY2hlUm91dGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGNvcHlSZXNwb25zZSB9IGZyb20gJ3dvcmtib3gtY29yZS9jb3B5UmVzcG9uc2UuanMnO1xuaW1wb3J0IHsgY2FjaGVOYW1lcyB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCB7IGdldEZyaWVuZGx5VVJMIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBTdHJhdGVneSB9IGZyb20gJ3dvcmtib3gtc3RyYXRlZ2llcy9TdHJhdGVneS5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3l9IGltcGxlbWVudGF0aW9uXG4gKiBzcGVjaWZpY2FsbHkgZGVzaWduZWQgdG8gd29yayB3aXRoXG4gKiB7QGxpbmsgd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlcn1cbiAqIHRvIGJvdGggY2FjaGUgYW5kIGZldGNoIHByZWNhY2hlZCBhc3NldHMuXG4gKlxuICogTm90ZTogYW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBpcyBjcmVhdGVkIGF1dG9tYXRpY2FsbHkgd2hlbiBjcmVhdGluZyBhXG4gKiBgUHJlY2FjaGVDb250cm9sbGVyYDsgaXQncyBnZW5lcmFsbHkgbm90IG5lY2Vzc2FyeSB0byBjcmVhdGUgdGhpcyB5b3Vyc2VsZi5cbiAqXG4gKiBAZXh0ZW5kcyB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuY2xhc3MgUHJlY2FjaGVTdHJhdGVneSBleHRlbmRzIFN0cmF0ZWd5IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FjaGVOYW1lXSBDYWNoZSBuYW1lIHRvIHN0b3JlIGFuZCByZXRyaWV2ZVxuICAgICAqIHJlcXVlc3RzLiBEZWZhdWx0cyB0byB0aGUgY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICAgKiB7QGxpbmsgd29ya2JveC1jb3JlLmNhY2hlTmFtZXN9LlxuICAgICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2luc10ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfFBsdWdpbnN9XG4gICAgICogdG8gdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhpcyBjYWNoaW5nIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5mZXRjaE9wdGlvbnNdIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAgICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnN8aW5pdH1cbiAgICAgKiBvZiBhbGwgZmV0Y2goKSByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm1hdGNoT3B0aW9uc10gVGhlXG4gICAgICoge0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNkaWN0ZGVmLWNhY2hlcXVlcnlvcHRpb25zfENhY2hlUXVlcnlPcHRpb25zfVxuICAgICAqIGZvciBhbnkgYGNhY2hlLm1hdGNoKClgIG9yIGBjYWNoZS5wdXQoKWAgY2FsbHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZmFsbGJhY2tUb05ldHdvcms9dHJ1ZV0gV2hldGhlciB0byBhdHRlbXB0IHRvXG4gICAgICogZ2V0IHRoZSByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrIGlmIHRoZXJlJ3MgYSBwcmVjYWNoZSBtaXNzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBvcHRpb25zLmNhY2hlTmFtZSA9IGNhY2hlTmFtZXMuZ2V0UHJlY2FjaGVOYW1lKG9wdGlvbnMuY2FjaGVOYW1lKTtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2ZhbGxiYWNrVG9OZXR3b3JrID1cbiAgICAgICAgICAgIG9wdGlvbnMuZmFsbGJhY2tUb05ldHdvcmsgPT09IGZhbHNlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAvLyBSZWRpcmVjdGVkIHJlc3BvbnNlcyBjYW5ub3QgYmUgdXNlZCB0byBzYXRpc2Z5IGEgbmF2aWdhdGlvbiByZXF1ZXN0LCBzb1xuICAgICAgICAvLyBhbnkgcmVkaXJlY3RlZCByZXNwb25zZSBtdXN0IGJlIFwiY29waWVkXCIgcmF0aGVyIHRoYW4gY2xvbmVkLCBzbyB0aGUgbmV3XG4gICAgICAgIC8vIHJlc3BvbnNlIGRvZXNuJ3QgY29udGFpbiB0aGUgYHJlZGlyZWN0ZWRgIGZsYWcuIFNlZTpcbiAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjY5MzYzJmRlc2M9MiNjMVxuICAgICAgICB0aGlzLnBsdWdpbnMucHVzaChQcmVjYWNoZVN0cmF0ZWd5LmNvcHlSZWRpcmVjdGVkQ2FjaGVhYmxlUmVzcG9uc2VzUGx1Z2luKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSByZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHt3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyIFRoZSBldmVudCB0aGF0XG4gICAgICogICAgIHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBfaGFuZGxlKHJlcXVlc3QsIGhhbmRsZXIpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmNhY2hlTWF0Y2gocmVxdWVzdCk7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYW4gYGluc3RhbGxgIGV2ZW50IGZvciBhbiBlbnRyeSB0aGF0IGlzbid0IGFscmVhZHkgY2FjaGVkLFxuICAgICAgICAvLyB0aGVuIHBvcHVsYXRlIHRoZSBjYWNoZS5cbiAgICAgICAgaWYgKGhhbmRsZXIuZXZlbnQgJiYgaGFuZGxlci5ldmVudC50eXBlID09PSAnaW5zdGFsbCcpIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9oYW5kbGVJbnN0YWxsKHJlcXVlc3QsIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldHRpbmcgaGVyZSBtZWFucyBzb21ldGhpbmcgd2VudCB3cm9uZy4gQW4gZW50cnkgdGhhdCBzaG91bGQgaGF2ZSBiZWVuXG4gICAgICAgIC8vIHByZWNhY2hlZCB3YXNuJ3QgZm91bmQgaW4gdGhlIGNhY2hlLlxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5faGFuZGxlRmV0Y2gocmVxdWVzdCwgaGFuZGxlcik7XG4gICAgfVxuICAgIGFzeW5jIF9oYW5kbGVGZXRjaChyZXF1ZXN0LCBoYW5kbGVyKSB7XG4gICAgICAgIGxldCByZXNwb25zZTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gKGhhbmRsZXIucGFyYW1zIHx8IHt9KTtcbiAgICAgICAgLy8gRmFsbCBiYWNrIHRvIHRoZSBuZXR3b3JrIGlmIHdlJ3JlIGNvbmZpZ3VyZWQgdG8gZG8gc28uXG4gICAgICAgIGlmICh0aGlzLl9mYWxsYmFja1RvTmV0d29yaykge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIud2FybihgVGhlIHByZWNhY2hlZCByZXNwb25zZSBmb3IgYCArXG4gICAgICAgICAgICAgICAgICAgIGAke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0gaW4gJHt0aGlzLmNhY2hlTmFtZX0gd2FzIG5vdCBgICtcbiAgICAgICAgICAgICAgICAgICAgYGZvdW5kLiBGYWxsaW5nIGJhY2sgdG8gdGhlIG5ldHdvcmsuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbnRlZ3JpdHlJbk1hbmlmZXN0ID0gcGFyYW1zLmludGVncml0eTtcbiAgICAgICAgICAgIGNvbnN0IGludGVncml0eUluUmVxdWVzdCA9IHJlcXVlc3QuaW50ZWdyaXR5O1xuICAgICAgICAgICAgY29uc3Qgbm9JbnRlZ3JpdHlDb25mbGljdCA9ICFpbnRlZ3JpdHlJblJlcXVlc3QgfHwgaW50ZWdyaXR5SW5SZXF1ZXN0ID09PSBpbnRlZ3JpdHlJbk1hbmlmZXN0O1xuICAgICAgICAgICAgLy8gRG8gbm90IGFkZCBpbnRlZ3JpdHkgaWYgdGhlIG9yaWdpbmFsIHJlcXVlc3QgaXMgbm8tY29yc1xuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMzA5NlxuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmZldGNoKG5ldyBSZXF1ZXN0KHJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBpbnRlZ3JpdHk6IHJlcXVlc3QubW9kZSAhPT0gJ25vLWNvcnMnXG4gICAgICAgICAgICAgICAgICAgID8gaW50ZWdyaXR5SW5SZXF1ZXN0IHx8IGludGVncml0eUluTWFuaWZlc3RcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAvLyBJdCdzIG9ubHkgXCJzYWZlXCIgdG8gcmVwYWlyIHRoZSBjYWNoZSBpZiB3ZSdyZSB1c2luZyBTUkkgdG8gZ3VhcmFudGVlXG4gICAgICAgICAgICAvLyB0aGF0IHRoZSByZXNwb25zZSBtYXRjaGVzIHRoZSBwcmVjYWNoZSBtYW5pZmVzdCdzIGV4cGVjdGF0aW9ucyxcbiAgICAgICAgICAgIC8vIGFuZCB0aGVyZSdzIGVpdGhlciBhKSBubyBpbnRlZ3JpdHkgcHJvcGVydHkgaW4gdGhlIGluY29taW5nIHJlcXVlc3RcbiAgICAgICAgICAgIC8vIG9yIGIpIHRoZXJlIGlzIGFuIGludGVncml0eSwgYW5kIGl0IG1hdGNoZXMgdGhlIHByZWNhY2hlIG1hbmlmZXN0LlxuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjg1OFxuICAgICAgICAgICAgLy8gQWxzbyBpZiB0aGUgb3JpZ2luYWwgcmVxdWVzdCB1c2VycyBuby1jb3JzIHdlIGRvbid0IHVzZSBpbnRlZ3JpdHkuXG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8zMDk2XG4gICAgICAgICAgICBpZiAoaW50ZWdyaXR5SW5NYW5pZmVzdCAmJlxuICAgICAgICAgICAgICAgIG5vSW50ZWdyaXR5Q29uZmxpY3QgJiZcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm1vZGUgIT09ICduby1jb3JzJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VzZURlZmF1bHRDYWNoZWFiaWxpdHlQbHVnaW5JZk5lZWRlZCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhc0NhY2hlZCA9IGF3YWl0IGhhbmRsZXIuY2FjaGVQdXQocmVxdWVzdCwgcmVzcG9uc2UuY2xvbmUoKSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdhc0NhY2hlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgQSByZXNwb25zZSBmb3IgJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB3YXMgdXNlZCB0byBcInJlcGFpclwiIHRoZSBwcmVjYWNoZS5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoaXMgc2hvdWxkbid0IG5vcm1hbGx5IGhhcHBlbiwgYnV0IHRoZXJlIGFyZSBlZGdlIGNhc2VzOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNDQxXG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdtaXNzaW5nLXByZWNhY2hlLWVudHJ5Jywge1xuICAgICAgICAgICAgICAgIGNhY2hlTmFtZTogdGhpcy5jYWNoZU5hbWUsXG4gICAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0LnVybCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBjYWNoZUtleSA9IHBhcmFtcy5jYWNoZUtleSB8fCAoYXdhaXQgaGFuZGxlci5nZXRDYWNoZUtleShyZXF1ZXN0LCAncmVhZCcpKTtcbiAgICAgICAgICAgIC8vIFdvcmtib3ggaXMgZ29pbmcgdG8gaGFuZGxlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgIC8vIHByaW50IHRoZSByb3V0aW5nIGRldGFpbHMgdG8gdGhlIGNvbnNvbGUuXG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFByZWNhY2hpbmcgaXMgcmVzcG9uZGluZyB0bzogYCArIGdldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKSk7XG4gICAgICAgICAgICBsb2dnZXIubG9nKGBTZXJ2aW5nIHRoZSBwcmVjYWNoZWQgdXJsOiAke2dldEZyaWVuZGx5VVJMKGNhY2hlS2V5IGluc3RhbmNlb2YgUmVxdWVzdCA/IGNhY2hlS2V5LnVybCA6IGNhY2hlS2V5KX1gKTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyByZXF1ZXN0IGRldGFpbHMgaGVyZS5gKTtcbiAgICAgICAgICAgIGxvZ2dlci5sb2cocmVxdWVzdCk7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyByZXNwb25zZSBkZXRhaWxzIGhlcmUuYCk7XG4gICAgICAgICAgICBsb2dnZXIubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICBhc3luYyBfaGFuZGxlSW5zdGFsbChyZXF1ZXN0LCBoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX3VzZURlZmF1bHRDYWNoZWFiaWxpdHlQbHVnaW5JZk5lZWRlZCgpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuZmV0Y2gocmVxdWVzdCk7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkZWZlciBjYWNoZVB1dCgpIHVudGlsIGFmdGVyIHdlIGtub3cgdGhlIHJlc3BvbnNlXG4gICAgICAgIC8vIHNob3VsZCBiZSBjYWNoZWQ7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzI3MzdcbiAgICAgICAgY29uc3Qgd2FzQ2FjaGVkID0gYXdhaXQgaGFuZGxlci5jYWNoZVB1dChyZXF1ZXN0LCByZXNwb25zZS5jbG9uZSgpKTtcbiAgICAgICAgaWYgKCF3YXNDYWNoZWQpIHtcbiAgICAgICAgICAgIC8vIFRocm93aW5nIGhlcmUgd2lsbCBsZWFkIHRvIHRoZSBgaW5zdGFsbGAgaGFuZGxlciBmYWlsaW5nLCB3aGljaFxuICAgICAgICAgICAgLy8gd2Ugd2FudCB0byBkbyBpZiAqYW55KiBvZiB0aGUgcmVzcG9uc2VzIGFyZW4ndCBzYWZlIHRvIGNhY2hlLlxuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignYmFkLXByZWNhY2hpbmctcmVzcG9uc2UnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0LnVybCxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY29tcGxleCwgYXMgdGhlcmUgYSBudW1iZXIgb2YgdGhpbmdzIHRvIGFjY291bnQgZm9yOlxuICAgICAqXG4gICAgICogVGhlIGBwbHVnaW5zYCBhcnJheSBjYW4gYmUgc2V0IGF0IGNvbnN0cnVjdGlvbiwgYW5kL29yIGl0IG1pZ2h0IGJlIGFkZGVkIHRvXG4gICAgICogdG8gYXQgYW55IHRpbWUgYmVmb3JlIHRoZSBzdHJhdGVneSBpcyB1c2VkLlxuICAgICAqXG4gICAgICogQXQgdGhlIHRpbWUgdGhlIHN0cmF0ZWd5IGlzIHVzZWQgKGkuZS4gZHVyaW5nIGFuIGBpbnN0YWxsYCBldmVudCksIHRoZXJlXG4gICAgICogbmVlZHMgdG8gYmUgYXQgbGVhc3Qgb25lIHBsdWdpbiB0aGF0IGltcGxlbWVudHMgYGNhY2hlV2lsbFVwZGF0ZWAgaW4gdGhlXG4gICAgICogYXJyYXksIG90aGVyIHRoYW4gYGNvcHlSZWRpcmVjdGVkQ2FjaGVhYmxlUmVzcG9uc2VzUGx1Z2luYC5cbiAgICAgKlxuICAgICAqIC0gSWYgdGhpcyBtZXRob2QgaXMgY2FsbGVkIGFuZCB0aGVyZSBhcmUgbm8gc3VpdGFibGUgYGNhY2hlV2lsbFVwZGF0ZWBcbiAgICAgKiBwbHVnaW5zLCB3ZSBuZWVkIHRvIGFkZCBgZGVmYXVsdFByZWNhY2hlQ2FjaGVhYmlsaXR5UGx1Z2luYC5cbiAgICAgKlxuICAgICAqIC0gSWYgdGhpcyBtZXRob2QgaXMgY2FsbGVkIGFuZCB0aGVyZSBpcyBleGFjdGx5IG9uZSBgY2FjaGVXaWxsVXBkYXRlYCwgdGhlblxuICAgICAqIHdlIGRvbid0IGhhdmUgdG8gZG8gYW55dGhpbmcgKHRoaXMgbWlnaHQgYmUgYSBwcmV2aW91c2x5IGFkZGVkXG4gICAgICogYGRlZmF1bHRQcmVjYWNoZUNhY2hlYWJpbGl0eVBsdWdpbmAsIG9yIGl0IG1pZ2h0IGJlIGEgY3VzdG9tIHBsdWdpbikuXG4gICAgICpcbiAgICAgKiAtIElmIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhbmQgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSBgY2FjaGVXaWxsVXBkYXRlYCxcbiAgICAgKiB0aGVuIHdlIG5lZWQgdG8gY2hlY2sgaWYgb25lIGlzIGBkZWZhdWx0UHJlY2FjaGVDYWNoZWFiaWxpdHlQbHVnaW5gLiBJZiBzbyxcbiAgICAgKiB3ZSBuZWVkIHRvIHJlbW92ZSBpdC4gKFRoaXMgc2l0dWF0aW9uIGlzIHVubGlrZWx5LCBidXQgaXQgY291bGQgaGFwcGVuIGlmXG4gICAgICogdGhlIHN0cmF0ZWd5IGlzIHVzZWQgbXVsdGlwbGUgdGltZXMsIHRoZSBmaXJzdCB3aXRob3V0IGEgYGNhY2hlV2lsbFVwZGF0ZWAsXG4gICAgICogYW5kIHRoZW4gbGF0ZXIgb24gYWZ0ZXIgbWFudWFsbHkgYWRkaW5nIGEgY3VzdG9tIGBjYWNoZVdpbGxVcGRhdGVgLilcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzI3MzcgZm9yIG1vcmUgY29udGV4dC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3VzZURlZmF1bHRDYWNoZWFiaWxpdHlQbHVnaW5JZk5lZWRlZCgpIHtcbiAgICAgICAgbGV0IGRlZmF1bHRQbHVnaW5JbmRleCA9IG51bGw7XG4gICAgICAgIGxldCBjYWNoZVdpbGxVcGRhdGVQbHVnaW5Db3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgW2luZGV4LCBwbHVnaW5dIG9mIHRoaXMucGx1Z2lucy5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSB0aGUgY29weSByZWRpcmVjdGVkIHBsdWdpbiB3aGVuIGRldGVybWluaW5nIHdoYXQgdG8gZG8uXG4gICAgICAgICAgICBpZiAocGx1Z2luID09PSBQcmVjYWNoZVN0cmF0ZWd5LmNvcHlSZWRpcmVjdGVkQ2FjaGVhYmxlUmVzcG9uc2VzUGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBkZWZhdWx0IHBsdWdpbidzIGluZGV4LCBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlbW92ZWQuXG4gICAgICAgICAgICBpZiAocGx1Z2luID09PSBQcmVjYWNoZVN0cmF0ZWd5LmRlZmF1bHRQcmVjYWNoZUNhY2hlYWJpbGl0eVBsdWdpbikge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRQbHVnaW5JbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsdWdpbi5jYWNoZVdpbGxVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBjYWNoZVdpbGxVcGRhdGVQbHVnaW5Db3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjYWNoZVdpbGxVcGRhdGVQbHVnaW5Db3VudCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW5zLnB1c2goUHJlY2FjaGVTdHJhdGVneS5kZWZhdWx0UHJlY2FjaGVDYWNoZWFiaWxpdHlQbHVnaW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNhY2hlV2lsbFVwZGF0ZVBsdWdpbkNvdW50ID4gMSAmJiBkZWZhdWx0UGx1Z2luSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIE9ubHkgcmVtb3ZlIHRoZSBkZWZhdWx0IHBsdWdpbjsgbXVsdGlwbGUgY3VzdG9tIHBsdWdpbnMgYXJlIGFsbG93ZWQuXG4gICAgICAgICAgICB0aGlzLnBsdWdpbnMuc3BsaWNlKGRlZmF1bHRQbHVnaW5JbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm90aGluZyBuZWVkcyB0byBiZSBkb25lIGlmIGNhY2hlV2lsbFVwZGF0ZVBsdWdpbkNvdW50IGlzIDFcbiAgICB9XG59XG5QcmVjYWNoZVN0cmF0ZWd5LmRlZmF1bHRQcmVjYWNoZUNhY2hlYWJpbGl0eVBsdWdpbiA9IHtcbiAgICBhc3luYyBjYWNoZVdpbGxVcGRhdGUoeyByZXNwb25zZSB9KSB7XG4gICAgICAgIGlmICghcmVzcG9uc2UgfHwgcmVzcG9uc2Uuc3RhdHVzID49IDQwMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0sXG59O1xuUHJlY2FjaGVTdHJhdGVneS5jb3B5UmVkaXJlY3RlZENhY2hlYWJsZVJlc3BvbnNlc1BsdWdpbiA9IHtcbiAgICBhc3luYyBjYWNoZVdpbGxVcGRhdGUoeyByZXNwb25zZSB9KSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5yZWRpcmVjdGVkID8gYXdhaXQgY29weVJlc3BvbnNlKHJlc3BvbnNlKSA6IHJlc3BvbnNlO1xuICAgIH0sXG59O1xuZXhwb3J0IHsgUHJlY2FjaGVTdHJhdGVneSB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBAdHMtaWdub3JlXG50cnkge1xuICAgIHNlbGZbJ3dvcmtib3g6cHJlY2FjaGluZzo2LjUuMyddICYmIF8oKTtcbn1cbmNhdGNoIChlKSB7IH1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyByZWdpc3RlclJvdXRlIH0gZnJvbSAnd29ya2JveC1yb3V0aW5nL3JlZ2lzdGVyUm91dGUuanMnO1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCB7IFByZWNhY2hlUm91dGUgfSBmcm9tICcuL1ByZWNhY2hlUm91dGUuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQWRkIGEgYGZldGNoYCBsaXN0ZW5lciB0byB0aGUgc2VydmljZSB3b3JrZXIgdGhhdCB3aWxsXG4gKiByZXNwb25kIHRvXG4gKiBbbmV0d29yayByZXF1ZXN0c117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NlcnZpY2VfV29ya2VyX0FQSS9Vc2luZ19TZXJ2aWNlX1dvcmtlcnMjQ3VzdG9tX3Jlc3BvbnNlc190b19yZXF1ZXN0c31cbiAqIHdpdGggcHJlY2FjaGVkIGFzc2V0cy5cbiAqXG4gKiBSZXF1ZXN0cyBmb3IgYXNzZXRzIHRoYXQgYXJlbid0IHByZWNhY2hlZCwgdGhlIGBGZXRjaEV2ZW50YCB3aWxsIG5vdCBiZVxuICogcmVzcG9uZGVkIHRvLCBhbGxvd2luZyB0aGUgZXZlbnQgdG8gZmFsbCB0aHJvdWdoIHRvIG90aGVyIGBmZXRjaGAgZXZlbnRcbiAqIGxpc3RlbmVycy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIFNlZSB0aGUge0BsaW5rIHdvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZVJvdXRlfVxuICogb3B0aW9ucy5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmZ1bmN0aW9uIGFkZFJvdXRlKG9wdGlvbnMpIHtcbiAgICBjb25zdCBwcmVjYWNoZUNvbnRyb2xsZXIgPSBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlcigpO1xuICAgIGNvbnN0IHByZWNhY2hlUm91dGUgPSBuZXcgUHJlY2FjaGVSb3V0ZShwcmVjYWNoZUNvbnRyb2xsZXIsIG9wdGlvbnMpO1xuICAgIHJlZ2lzdGVyUm91dGUocHJlY2FjaGVSb3V0ZSk7XG59XG5leHBvcnQgeyBhZGRSb3V0ZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IGNhbGxzXG4gKiB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyI21hdGNoUHJlY2FjaGV9IG9uIHRoZSBkZWZhdWx0XG4gKiB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyfSBpbnN0YW5jZS5cbiAqXG4gKiBJZiB5b3UgYXJlIGNyZWF0aW5nIHlvdXIgb3duIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXJ9LCB0aGVuIGNhbGxcbiAqIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXIjbWF0Y2hQcmVjYWNoZX0gb24gdGhhdCBpbnN0YW5jZSxcbiAqIGluc3RlYWQgb2YgdXNpbmcgdGhpcyBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xSZXF1ZXN0fSByZXF1ZXN0IFRoZSBrZXkgKHdpdGhvdXQgcmV2aXNpb25pbmcgcGFyYW1ldGVycylcbiAqIHRvIGxvb2sgdXAgaW4gdGhlIHByZWNhY2hlLlxuICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZXx1bmRlZmluZWQ+fVxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gbWF0Y2hQcmVjYWNoZShyZXF1ZXN0KSB7XG4gICAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICByZXR1cm4gcHJlY2FjaGVDb250cm9sbGVyLm1hdGNoUHJlY2FjaGUocmVxdWVzdCk7XG59XG5leHBvcnQgeyBtYXRjaFByZWNhY2hlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQWRkcyBpdGVtcyB0byB0aGUgcHJlY2FjaGUgbGlzdCwgcmVtb3ZpbmcgYW55IGR1cGxpY2F0ZXMgYW5kXG4gKiBzdG9yZXMgdGhlIGZpbGVzIGluIHRoZVxuICoge0BsaW5rIHdvcmtib3gtY29yZS5jYWNoZU5hbWVzfFwicHJlY2FjaGUgY2FjaGVcIn0gd2hlbiB0aGUgc2VydmljZVxuICogd29ya2VyIGluc3RhbGxzLlxuICpcbiAqIFRoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMuXG4gKlxuICogUGxlYXNlIG5vdGU6IFRoaXMgbWV0aG9kICoqd2lsbCBub3QqKiBzZXJ2ZSBhbnkgb2YgdGhlIGNhY2hlZCBmaWxlcyBmb3IgeW91LlxuICogSXQgb25seSBwcmVjYWNoZXMgZmlsZXMuIFRvIHJlc3BvbmQgdG8gYSBuZXR3b3JrIHJlcXVlc3QgeW91IGNhbGxcbiAqIHtAbGluayB3b3JrYm94LXByZWNhY2hpbmcuYWRkUm91dGV9LlxuICpcbiAqIElmIHlvdSBoYXZlIGEgc2luZ2xlIGFycmF5IG9mIGZpbGVzIHRvIHByZWNhY2hlLCB5b3UgY2FuIGp1c3QgY2FsbFxuICoge0BsaW5rIHdvcmtib3gtcHJlY2FjaGluZy5wcmVjYWNoZUFuZFJvdXRlfS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdHxzdHJpbmc+fSBbZW50cmllcz1bXV0gQXJyYXkgb2YgZW50cmllcyB0byBwcmVjYWNoZS5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmZ1bmN0aW9uIHByZWNhY2hlKGVudHJpZXMpIHtcbiAgICBjb25zdCBwcmVjYWNoZUNvbnRyb2xsZXIgPSBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlcigpO1xuICAgIHByZWNhY2hlQ29udHJvbGxlci5wcmVjYWNoZShlbnRyaWVzKTtcbn1cbmV4cG9ydCB7IHByZWNhY2hlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhZGRSb3V0ZSB9IGZyb20gJy4vYWRkUm91dGUuanMnO1xuaW1wb3J0IHsgcHJlY2FjaGUgfSBmcm9tICcuL3ByZWNhY2hlLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRoaXMgbWV0aG9kIHdpbGwgYWRkIGVudHJpZXMgdG8gdGhlIHByZWNhY2hlIGxpc3QgYW5kIGFkZCBhIHJvdXRlIHRvXG4gKiByZXNwb25kIHRvIGZldGNoIGV2ZW50cy5cbiAqXG4gKiBUaGlzIGlzIGEgY29udmVuaWVuY2UgbWV0aG9kIHRoYXQgd2lsbCBjYWxsXG4gKiB7QGxpbmsgd29ya2JveC1wcmVjYWNoaW5nLnByZWNhY2hlfSBhbmRcbiAqIHtAbGluayB3b3JrYm94LXByZWNhY2hpbmcuYWRkUm91dGV9IGluIGEgc2luZ2xlIGNhbGwuXG4gKlxuICogQHBhcmFtIHtBcnJheTxPYmplY3R8c3RyaW5nPn0gZW50cmllcyBBcnJheSBvZiBlbnRyaWVzIHRvIHByZWNhY2hlLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBTZWUgdGhlXG4gKiB7QGxpbmsgd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlUm91dGV9IG9wdGlvbnMuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcHJlY2FjaGluZ1xuICovXG5mdW5jdGlvbiBwcmVjYWNoZUFuZFJvdXRlKGVudHJpZXMsIG9wdGlvbnMpIHtcbiAgICBwcmVjYWNoZShlbnRyaWVzKTtcbiAgICBhZGRSb3V0ZShvcHRpb25zKTtcbn1cbmV4cG9ydCB7IHByZWNhY2hlQW5kUm91dGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBIHBsdWdpbiwgZGVzaWduZWQgdG8gYmUgdXNlZCB3aXRoIFByZWNhY2hlQ29udHJvbGxlciwgdG8gdHJhbnNsYXRlIFVSTHMgaW50b1xuICogdGhlIGNvcnJlc3BvbmRpbmcgY2FjaGUga2V5LCBiYXNlZCBvbiB0aGUgY3VycmVudCByZXZpc2lvbiBpbmZvLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIFByZWNhY2hlQ2FjaGVLZXlQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKHsgcHJlY2FjaGVDb250cm9sbGVyIH0pIHtcbiAgICAgICAgdGhpcy5jYWNoZUtleVdpbGxCZVVzZWQgPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMsIH0pID0+IHtcbiAgICAgICAgICAgIC8vIFBhcmFtcyBpcyB0eXBlIGFueSwgY2FuJ3QgY2hhbmdlIHJpZ2h0IG5vdy5cbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgICAgICBjb25zdCBjYWNoZUtleSA9IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuY2FjaGVLZXkpIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlY2FjaGVDb250cm9sbGVyLmdldENhY2hlS2V5Rm9yVVJMKHJlcXVlc3QudXJsKTtcbiAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICAgICAgICAgIHJldHVybiBjYWNoZUtleVxuICAgICAgICAgICAgICAgID8gbmV3IFJlcXVlc3QoY2FjaGVLZXksIHsgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzIH0pXG4gICAgICAgICAgICAgICAgOiByZXF1ZXN0O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9wcmVjYWNoZUNvbnRyb2xsZXIgPSBwcmVjYWNoZUNvbnRyb2xsZXI7XG4gICAgfVxufVxuZXhwb3J0IHsgUHJlY2FjaGVDYWNoZUtleVBsdWdpbiB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEEgcGx1Z2luLCBkZXNpZ25lZCB0byBiZSB1c2VkIHdpdGggUHJlY2FjaGVDb250cm9sbGVyLCB0byBkZXRlcm1pbmUgdGhlXG4gKiBvZiBhc3NldHMgdGhhdCB3ZXJlIHVwZGF0ZWQgKG9yIG5vdCB1cGRhdGVkKSBkdXJpbmcgdGhlIGluc3RhbGwgZXZlbnQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgUHJlY2FjaGVJbnN0YWxsUmVwb3J0UGx1Z2luIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51cGRhdGVkVVJMcyA9IFtdO1xuICAgICAgICB0aGlzLm5vdFVwZGF0ZWRVUkxzID0gW107XG4gICAgICAgIHRoaXMuaGFuZGxlcldpbGxTdGFydCA9IGFzeW5jICh7IHJlcXVlc3QsIHN0YXRlLCB9KSA9PiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBgc3RhdGVgIHNob3VsZCBuZXZlciBiZSB1bmRlZmluZWQuLi5cbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLm9yaWdpbmFsUmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkID0gYXN5bmMgKHsgZXZlbnQsIHN0YXRlLCBjYWNoZWRSZXNwb25zZSwgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdpbnN0YWxsJykge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5vcmlnaW5hbFJlcXVlc3QgJiZcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUub3JpZ2luYWxSZXF1ZXN0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBgc3RhdGVgIHNob3VsZCBuZXZlciBiZSB1bmRlZmluZWQuLi5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gc3RhdGUub3JpZ2luYWxSZXF1ZXN0LnVybDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdFVwZGF0ZWRVUkxzLnB1c2godXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlZFVSTHMucHVzaCh1cmwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFJlc3BvbnNlO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydCB7IFByZWNhY2hlSW5zdGFsbFJlcG9ydFBsdWdpbiB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8vIE5hbWUgb2YgdGhlIHNlYXJjaCBwYXJhbWV0ZXIgdXNlZCB0byBzdG9yZSByZXZpc2lvbiBpbmZvLlxuY29uc3QgUkVWSVNJT05fU0VBUkNIX1BBUkFNID0gJ19fV0JfUkVWSVNJT05fXyc7XG4vKipcbiAqIENvbnZlcnRzIGEgbWFuaWZlc3QgZW50cnkgaW50byBhIHZlcnNpb25lZCBVUkwgc3VpdGFibGUgZm9yIHByZWNhY2hpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8c3RyaW5nfSBlbnRyeVxuICogQHJldHVybiB7c3RyaW5nfSBBIFVSTCB3aXRoIHZlcnNpb25pbmcgaW5mby5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIHdvcmtib3gtcHJlY2FjaGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FjaGVLZXkoZW50cnkpIHtcbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2FkZC10by1jYWNoZS1saXN0LXVuZXhwZWN0ZWQtdHlwZScsIHsgZW50cnkgfSk7XG4gICAgfVxuICAgIC8vIElmIGEgcHJlY2FjaGUgbWFuaWZlc3QgZW50cnkgaXMgYSBzdHJpbmcsIGl0J3MgYXNzdW1lZCB0byBiZSBhIHZlcnNpb25lZFxuICAgIC8vIFVSTCwgbGlrZSAnL2FwcC5hYmNkMTIzNC5qcycuIFJldHVybiBhcy1pcy5cbiAgICBpZiAodHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCB1cmxPYmplY3QgPSBuZXcgVVJMKGVudHJ5LCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhY2hlS2V5OiB1cmxPYmplY3QuaHJlZixcbiAgICAgICAgICAgIHVybDogdXJsT2JqZWN0LmhyZWYsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgcmV2aXNpb24sIHVybCB9ID0gZW50cnk7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignYWRkLXRvLWNhY2hlLWxpc3QtdW5leHBlY3RlZC10eXBlJywgeyBlbnRyeSB9KTtcbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBqdXN0IGEgVVJMIGFuZCBubyByZXZpc2lvbiwgdGhlbiBpdCdzIGFsc28gYXNzdW1lZCB0byBiZSBhXG4gICAgLy8gdmVyc2lvbmVkIFVSTC5cbiAgICBpZiAoIXJldmlzaW9uKSB7XG4gICAgICAgIGNvbnN0IHVybE9iamVjdCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhY2hlS2V5OiB1cmxPYmplY3QuaHJlZixcbiAgICAgICAgICAgIHVybDogdXJsT2JqZWN0LmhyZWYsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgY29uc3RydWN0IGEgcHJvcGVybHkgdmVyc2lvbmVkIFVSTCB1c2luZyB0aGUgY3VzdG9tIFdvcmtib3hcbiAgICAvLyBzZWFyY2ggcGFyYW1ldGVyIGFsb25nIHdpdGggdGhlIHJldmlzaW9uIGluZm8uXG4gICAgY29uc3QgY2FjaGVLZXlVUkwgPSBuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZik7XG4gICAgY29uc3Qgb3JpZ2luYWxVUkwgPSBuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZik7XG4gICAgY2FjaGVLZXlVUkwuc2VhcmNoUGFyYW1zLnNldChSRVZJU0lPTl9TRUFSQ0hfUEFSQU0sIHJldmlzaW9uKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjYWNoZUtleTogY2FjaGVLZXlVUkwuaHJlZixcbiAgICAgICAgdXJsOiBvcmlnaW5hbFVSTC5ocmVmLFxuICAgIH07XG59XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyByZW1vdmVJZ25vcmVkU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi9yZW1vdmVJZ25vcmVkU2VhcmNoUGFyYW1zLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBHZW5lcmF0b3IgZnVuY3Rpb24gdGhhdCB5aWVsZHMgcG9zc2libGUgdmFyaWF0aW9ucyBvbiB0aGUgb3JpZ2luYWwgVVJMIHRvXG4gKiBjaGVjaywgb25lIGF0IGEgdGltZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogZ2VuZXJhdGVVUkxWYXJpYXRpb25zKHVybCwgeyBpZ25vcmVVUkxQYXJhbWV0ZXJzTWF0Y2hpbmcgPSBbL151dG1fLywgL15mYmNsaWQkL10sIGRpcmVjdG9yeUluZGV4ID0gJ2luZGV4Lmh0bWwnLCBjbGVhblVSTHMgPSB0cnVlLCB1cmxNYW5pcHVsYXRpb24sIH0gPSB7fSkge1xuICAgIGNvbnN0IHVybE9iamVjdCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICB1cmxPYmplY3QuaGFzaCA9ICcnO1xuICAgIHlpZWxkIHVybE9iamVjdC5ocmVmO1xuICAgIGNvbnN0IHVybFdpdGhvdXRJZ25vcmVkUGFyYW1zID0gcmVtb3ZlSWdub3JlZFNlYXJjaFBhcmFtcyh1cmxPYmplY3QsIGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZyk7XG4gICAgeWllbGQgdXJsV2l0aG91dElnbm9yZWRQYXJhbXMuaHJlZjtcbiAgICBpZiAoZGlyZWN0b3J5SW5kZXggJiYgdXJsV2l0aG91dElnbm9yZWRQYXJhbXMucGF0aG5hbWUuZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlVUkwgPSBuZXcgVVJMKHVybFdpdGhvdXRJZ25vcmVkUGFyYW1zLmhyZWYpO1xuICAgICAgICBkaXJlY3RvcnlVUkwucGF0aG5hbWUgKz0gZGlyZWN0b3J5SW5kZXg7XG4gICAgICAgIHlpZWxkIGRpcmVjdG9yeVVSTC5ocmVmO1xuICAgIH1cbiAgICBpZiAoY2xlYW5VUkxzKSB7XG4gICAgICAgIGNvbnN0IGNsZWFuVVJMID0gbmV3IFVSTCh1cmxXaXRob3V0SWdub3JlZFBhcmFtcy5ocmVmKTtcbiAgICAgICAgY2xlYW5VUkwucGF0aG5hbWUgKz0gJy5odG1sJztcbiAgICAgICAgeWllbGQgY2xlYW5VUkwuaHJlZjtcbiAgICB9XG4gICAgaWYgKHVybE1hbmlwdWxhdGlvbikge1xuICAgICAgICBjb25zdCBhZGRpdGlvbmFsVVJMcyA9IHVybE1hbmlwdWxhdGlvbih7IHVybDogdXJsT2JqZWN0IH0pO1xuICAgICAgICBmb3IgKGNvbnN0IHVybFRvQXR0ZW1wdCBvZiBhZGRpdGlvbmFsVVJMcykge1xuICAgICAgICAgICAgeWllbGQgdXJsVG9BdHRlbXB0LmhyZWY7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9QcmVjYWNoZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5sZXQgcHJlY2FjaGVDb250cm9sbGVyO1xuLyoqXG4gKiBAcmV0dXJuIHtQcmVjYWNoZUNvbnRyb2xsZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgPSAoKSA9PiB7XG4gICAgaWYgKCFwcmVjYWNoZUNvbnRyb2xsZXIpIHtcbiAgICAgICAgcHJlY2FjaGVDb250cm9sbGVyID0gbmV3IFByZWNhY2hlQ29udHJvbGxlcigpO1xuICAgIH1cbiAgICByZXR1cm4gcHJlY2FjaGVDb250cm9sbGVyO1xufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBncm91cFRpdGxlXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGRlbGV0ZWRVUkxzXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgbG9nR3JvdXAgPSAoZ3JvdXBUaXRsZSwgZGVsZXRlZFVSTHMpID0+IHtcbiAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoZ3JvdXBUaXRsZSk7XG4gICAgZm9yIChjb25zdCB1cmwgb2YgZGVsZXRlZFVSTHMpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyh1cmwpO1xuICAgIH1cbiAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbn07XG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gZGVsZXRlZFVSTHNcbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIHdvcmtib3gtcHJlY2FjaGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRDbGVhbnVwRGV0YWlscyhkZWxldGVkVVJMcykge1xuICAgIGNvbnN0IGRlbGV0aW9uQ291bnQgPSBkZWxldGVkVVJMcy5sZW5ndGg7XG4gICAgaWYgKGRlbGV0aW9uQ291bnQgPiAwKSB7XG4gICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgRHVyaW5nIHByZWNhY2hpbmcgY2xlYW51cCwgYCArXG4gICAgICAgICAgICBgJHtkZWxldGlvbkNvdW50fSBjYWNoZWQgYCArXG4gICAgICAgICAgICBgcmVxdWVzdCR7ZGVsZXRpb25Db3VudCA9PT0gMSA/ICcgd2FzJyA6ICdzIHdlcmUnfSBkZWxldGVkLmApO1xuICAgICAgICBsb2dHcm91cCgnRGVsZXRlZCBDYWNoZSBSZXF1ZXN0cycsIGRlbGV0ZWRVUkxzKTtcbiAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwVGl0bGVcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gdXJsc1xuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIF9uZXN0ZWRHcm91cChncm91cFRpdGxlLCB1cmxzKSB7XG4gICAgaWYgKHVybHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGdyb3VwVGl0bGUpO1xuICAgIGZvciAoY29uc3QgdXJsIG9mIHVybHMpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyh1cmwpO1xuICAgIH1cbiAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbn1cbi8qKlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB1cmxzVG9QcmVjYWNoZVxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB1cmxzQWxyZWFkeVByZWNhY2hlZFxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmludEluc3RhbGxEZXRhaWxzKHVybHNUb1ByZWNhY2hlLCB1cmxzQWxyZWFkeVByZWNhY2hlZCkge1xuICAgIGNvbnN0IHByZWNhY2hlZENvdW50ID0gdXJsc1RvUHJlY2FjaGUubGVuZ3RoO1xuICAgIGNvbnN0IGFscmVhZHlQcmVjYWNoZWRDb3VudCA9IHVybHNBbHJlYWR5UHJlY2FjaGVkLmxlbmd0aDtcbiAgICBpZiAocHJlY2FjaGVkQ291bnQgfHwgYWxyZWFkeVByZWNhY2hlZENvdW50KSB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gYFByZWNhY2hpbmcgJHtwcmVjYWNoZWRDb3VudH0gZmlsZSR7cHJlY2FjaGVkQ291bnQgPT09IDEgPyAnJyA6ICdzJ30uYDtcbiAgICAgICAgaWYgKGFscmVhZHlQcmVjYWNoZWRDb3VudCA+IDApIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgKz1cbiAgICAgICAgICAgICAgICBgICR7YWxyZWFkeVByZWNhY2hlZENvdW50fSBgICtcbiAgICAgICAgICAgICAgICAgICAgYGZpbGUke2FscmVhZHlQcmVjYWNoZWRDb3VudCA9PT0gMSA/ICcgaXMnIDogJ3MgYXJlJ30gYWxyZWFkeSBjYWNoZWQuYDtcbiAgICAgICAgfVxuICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQobWVzc2FnZSk7XG4gICAgICAgIF9uZXN0ZWRHcm91cChgVmlldyBuZXdseSBwcmVjYWNoZWQgVVJMcy5gLCB1cmxzVG9QcmVjYWNoZSk7XG4gICAgICAgIF9uZXN0ZWRHcm91cChgVmlldyBwcmV2aW91c2x5IHByZWNhY2hlZCBVUkxzLmAsIHVybHNBbHJlYWR5UHJlY2FjaGVkKTtcbiAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFJlbW92ZXMgYW55IFVSTCBzZWFyY2ggcGFyYW1ldGVycyB0aGF0IHNob3VsZCBiZSBpZ25vcmVkLlxuICpcbiAqIEBwYXJhbSB7VVJMfSB1cmxPYmplY3QgVGhlIG9yaWdpbmFsIFVSTC5cbiAqIEBwYXJhbSB7QXJyYXk8UmVnRXhwPn0gaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nIFJlZ0V4cHMgdG8gdGVzdCBhZ2FpbnN0XG4gKiBlYWNoIHNlYXJjaCBwYXJhbWV0ZXIgbmFtZS4gTWF0Y2hlcyBtZWFuIHRoYXQgdGhlIHNlYXJjaCBwYXJhbWV0ZXIgc2hvdWxkIGJlXG4gKiBpZ25vcmVkLlxuICogQHJldHVybiB7VVJMfSBUaGUgVVJMIHdpdGggYW55IGlnbm9yZWQgc2VhcmNoIHBhcmFtZXRlcnMgcmVtb3ZlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIHdvcmtib3gtcHJlY2FjaGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSWdub3JlZFNlYXJjaFBhcmFtcyh1cmxPYmplY3QsIGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZyA9IFtdKSB7XG4gICAgLy8gQ29udmVydCB0aGUgaXRlcmFibGUgaW50byBhbiBhcnJheSBhdCB0aGUgc3RhcnQgb2YgdGhlIGxvb3AgdG8gbWFrZSBzdXJlXG4gICAgLy8gZGVsZXRpb24gZG9lc24ndCBtZXNzIHVwIGl0ZXJhdGlvbi5cbiAgICBmb3IgKGNvbnN0IHBhcmFtTmFtZSBvZiBbLi4udXJsT2JqZWN0LnNlYXJjaFBhcmFtcy5rZXlzKCldKSB7XG4gICAgICAgIGlmIChpZ25vcmVVUkxQYXJhbWV0ZXJzTWF0Y2hpbmcuc29tZSgocmVnRXhwKSA9PiByZWdFeHAudGVzdChwYXJhbU5hbWUpKSkge1xuICAgICAgICAgICAgdXJsT2JqZWN0LnNlYXJjaFBhcmFtcy5kZWxldGUocGFyYW1OYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsT2JqZWN0O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBAdHMtaWdub3JlXG50cnkge1xuICAgIHNlbGZbJ3dvcmtib3g6cmVjaXBlczo2LjUuMyddICYmIF8oKTtcbn1cbmNhdGNoIChlKSB7IH1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IHJlZ2lzdGVyUm91dGUgfSBmcm9tICd3b3JrYm94LXJvdXRpbmcvcmVnaXN0ZXJSb3V0ZS5qcyc7XG5pbXBvcnQgeyBTdGFsZVdoaWxlUmV2YWxpZGF0ZSB9IGZyb20gJ3dvcmtib3gtc3RyYXRlZ2llcy9TdGFsZVdoaWxlUmV2YWxpZGF0ZS5qcyc7XG5pbXBvcnQgeyBDYWNoZUZpcnN0IH0gZnJvbSAnd29ya2JveC1zdHJhdGVnaWVzL0NhY2hlRmlyc3QuanMnO1xuaW1wb3J0IHsgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4gfSBmcm9tICd3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZS9DYWNoZWFibGVSZXNwb25zZVBsdWdpbi5qcyc7XG5pbXBvcnQgeyBFeHBpcmF0aW9uUGx1Z2luIH0gZnJvbSAnd29ya2JveC1leHBpcmF0aW9uL0V4cGlyYXRpb25QbHVnaW4uanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIFtHb29nbGUgZm9udHNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy9jb21tb24tcmVjaXBlcyNnb29nbGVfZm9udHN9IGNhY2hpbmcgcmVjaXBlXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcmVjaXBlc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYWNoZVByZWZpeF0gQ2FjaGUgcHJlZml4IGZvciBjYWNoaW5nIHN0eWxlc2hlZXRzIGFuZCB3ZWJmb250cy4gRGVmYXVsdHMgdG8gZ29vZ2xlLWZvbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4QWdlU2Vjb25kc10gTWF4aW11bSBhZ2UsIGluIHNlY29uZHMsIHRoYXQgZm9udCBlbnRyaWVzIHdpbGwgYmUgY2FjaGVkIGZvci4gRGVmYXVsdHMgdG8gMSB5ZWFyXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4RW50cmllc10gTWF4aW11bSBudW1iZXIgb2YgZm9udHMgdGhhdCB3aWxsIGJlIGNhY2hlZC4gRGVmYXVsdHMgdG8gMzBcbiAqL1xuZnVuY3Rpb24gZ29vZ2xlRm9udHNDYWNoZShvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBzaGVldENhY2hlTmFtZSA9IGAke29wdGlvbnMuY2FjaGVQcmVmaXggfHwgJ2dvb2dsZS1mb250cyd9LXN0eWxlc2hlZXRzYDtcbiAgICBjb25zdCBmb250Q2FjaGVOYW1lID0gYCR7b3B0aW9ucy5jYWNoZVByZWZpeCB8fCAnZ29vZ2xlLWZvbnRzJ30td2ViZm9udHNgO1xuICAgIGNvbnN0IG1heEFnZVNlY29uZHMgPSBvcHRpb25zLm1heEFnZVNlY29uZHMgfHwgNjAgKiA2MCAqIDI0ICogMzY1O1xuICAgIGNvbnN0IG1heEVudHJpZXMgPSBvcHRpb25zLm1heEVudHJpZXMgfHwgMzA7XG4gICAgLy8gQ2FjaGUgdGhlIEdvb2dsZSBGb250cyBzdHlsZXNoZWV0cyB3aXRoIGEgc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZSBzdHJhdGVneS5cbiAgICByZWdpc3RlclJvdXRlKCh7IHVybCB9KSA9PiB1cmwub3JpZ2luID09PSAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbScsIG5ldyBTdGFsZVdoaWxlUmV2YWxpZGF0ZSh7XG4gICAgICAgIGNhY2hlTmFtZTogc2hlZXRDYWNoZU5hbWUsXG4gICAgfSkpO1xuICAgIC8vIENhY2hlIHRoZSB1bmRlcmx5aW5nIGZvbnQgZmlsZXMgd2l0aCBhIGNhY2hlLWZpcnN0IHN0cmF0ZWd5IGZvciAxIHllYXIuXG4gICAgcmVnaXN0ZXJSb3V0ZSgoeyB1cmwgfSkgPT4gdXJsLm9yaWdpbiA9PT0gJ2h0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20nLCBuZXcgQ2FjaGVGaXJzdCh7XG4gICAgICAgIGNhY2hlTmFtZTogZm9udENhY2hlTmFtZSxcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgbmV3IENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luKHtcbiAgICAgICAgICAgICAgICBzdGF0dXNlczogWzAsIDIwMF0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5ldyBFeHBpcmF0aW9uUGx1Z2luKHtcbiAgICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzLFxuICAgICAgICAgICAgICAgIG1heEVudHJpZXMsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICB9KSk7XG59XG5leHBvcnQgeyBnb29nbGVGb250c0NhY2hlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyB3YXJtU3RyYXRlZ3lDYWNoZSB9IGZyb20gJy4vd2FybVN0cmF0ZWd5Q2FjaGUnO1xuaW1wb3J0IHsgcmVnaXN0ZXJSb3V0ZSB9IGZyb20gJ3dvcmtib3gtcm91dGluZy9yZWdpc3RlclJvdXRlLmpzJztcbmltcG9ydCB7IENhY2hlRmlyc3QgfSBmcm9tICd3b3JrYm94LXN0cmF0ZWdpZXMvQ2FjaGVGaXJzdC5qcyc7XG5pbXBvcnQgeyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbiB9IGZyb20gJ3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlL0NhY2hlYWJsZVJlc3BvbnNlUGx1Z2luLmpzJztcbmltcG9ydCB7IEV4cGlyYXRpb25QbHVnaW4gfSBmcm9tICd3b3JrYm94LWV4cGlyYXRpb24vRXhwaXJhdGlvblBsdWdpbi5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgW2ltYWdlIGNhY2hpbmcgcmVjaXBlXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvY29tbW9uLXJlY2lwZXMjY2FjaGluZ19pbWFnZXN9XG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcmVjaXBlc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYWNoZU5hbWVdIE5hbWUgZm9yIGNhY2hlLiBEZWZhdWx0cyB0byBpbWFnZXNcbiAqIEBwYXJhbSB7Um91dGVNYXRjaENhbGxiYWNrfSBbb3B0aW9ucy5tYXRjaENhbGxiYWNrXSBXb3JrYm94IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGNhbGwgdG8gbWF0Y2ggdG8uIERlZmF1bHRzIHRvIHJlcXVlc3QuZGVzdGluYXRpb24gPT09ICdpbWFnZSc7XG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4QWdlU2Vjb25kc10gTWF4aW11bSBhZ2UsIGluIHNlY29uZHMsIHRoYXQgZm9udCBlbnRyaWVzIHdpbGwgYmUgY2FjaGVkIGZvci4gRGVmYXVsdHMgdG8gMzAgZGF5c1xuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heEVudHJpZXNdIE1heGltdW0gbnVtYmVyIG9mIGltYWdlcyB0aGF0IHdpbGwgYmUgY2FjaGVkLiBEZWZhdWx0cyB0byA2MFxuICogQHBhcmFtIHtXb3JrYm94UGx1Z2luW119IFtvcHRpb25zLnBsdWdpbnNdIEFkZGl0aW9uYWwgcGx1Z2lucyB0byB1c2UgZm9yIHRoaXMgcmVjaXBlXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbb3B0aW9ucy53YXJtQ2FjaGVdIFBhdGhzIHRvIGNhbGwgdG8gdXNlIHRvIHdhcm0gdGhpcyBjYWNoZVxuICovXG5mdW5jdGlvbiBpbWFnZUNhY2hlKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRNYXRjaENhbGxiYWNrID0gKHsgcmVxdWVzdCB9KSA9PiByZXF1ZXN0LmRlc3RpbmF0aW9uID09PSAnaW1hZ2UnO1xuICAgIGNvbnN0IGNhY2hlTmFtZSA9IG9wdGlvbnMuY2FjaGVOYW1lIHx8ICdpbWFnZXMnO1xuICAgIGNvbnN0IG1hdGNoQ2FsbGJhY2sgPSBvcHRpb25zLm1hdGNoQ2FsbGJhY2sgfHwgZGVmYXVsdE1hdGNoQ2FsbGJhY2s7XG4gICAgY29uc3QgbWF4QWdlU2Vjb25kcyA9IG9wdGlvbnMubWF4QWdlU2Vjb25kcyB8fCAzMCAqIDI0ICogNjAgKiA2MDtcbiAgICBjb25zdCBtYXhFbnRyaWVzID0gb3B0aW9ucy5tYXhFbnRyaWVzIHx8IDYwO1xuICAgIGNvbnN0IHBsdWdpbnMgPSBvcHRpb25zLnBsdWdpbnMgfHwgW107XG4gICAgcGx1Z2lucy5wdXNoKG5ldyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbih7XG4gICAgICAgIHN0YXR1c2VzOiBbMCwgMjAwXSxcbiAgICB9KSk7XG4gICAgcGx1Z2lucy5wdXNoKG5ldyBFeHBpcmF0aW9uUGx1Z2luKHtcbiAgICAgICAgbWF4RW50cmllcyxcbiAgICAgICAgbWF4QWdlU2Vjb25kcyxcbiAgICB9KSk7XG4gICAgY29uc3Qgc3RyYXRlZ3kgPSBuZXcgQ2FjaGVGaXJzdCh7XG4gICAgICAgIGNhY2hlTmFtZSxcbiAgICAgICAgcGx1Z2lucyxcbiAgICB9KTtcbiAgICByZWdpc3RlclJvdXRlKG1hdGNoQ2FsbGJhY2ssIHN0cmF0ZWd5KTtcbiAgICAvLyBXYXJtcyB0aGUgY2FjaGVcbiAgICBpZiAob3B0aW9ucy53YXJtQ2FjaGUpIHtcbiAgICAgICAgd2FybVN0cmF0ZWd5Q2FjaGUoeyB1cmxzOiBvcHRpb25zLndhcm1DYWNoZSwgc3RyYXRlZ3kgfSk7XG4gICAgfVxufVxuZXhwb3J0IHsgaW1hZ2VDYWNoZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgZ29vZ2xlRm9udHNDYWNoZSB9IGZyb20gJy4vZ29vZ2xlRm9udHNDYWNoZSc7XG5pbXBvcnQgeyBpbWFnZUNhY2hlIH0gZnJvbSAnLi9pbWFnZUNhY2hlJztcbmltcG9ydCB7IHN0YXRpY1Jlc291cmNlQ2FjaGUsIH0gZnJvbSAnLi9zdGF0aWNSZXNvdXJjZUNhY2hlJztcbmltcG9ydCB7IHBhZ2VDYWNoZSB9IGZyb20gJy4vcGFnZUNhY2hlJztcbmltcG9ydCB7IG9mZmxpbmVGYWxsYmFjayB9IGZyb20gJy4vb2ZmbGluZUZhbGxiYWNrJztcbmltcG9ydCB7IHdhcm1TdHJhdGVneUNhY2hlIH0gZnJvbSAnLi93YXJtU3RyYXRlZ3lDYWNoZSc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBAbW9kdWxlIHdvcmtib3gtcmVjaXBlc1xuICovXG5leHBvcnQgeyBnb29nbGVGb250c0NhY2hlLCBpbWFnZUNhY2hlLCBvZmZsaW5lRmFsbGJhY2ssIHBhZ2VDYWNoZSwgc3RhdGljUmVzb3VyY2VDYWNoZSwgd2FybVN0cmF0ZWd5Q2FjaGUsIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBzZXRDYXRjaEhhbmRsZXIgfSBmcm9tICd3b3JrYm94LXJvdXRpbmcvc2V0Q2F0Y2hIYW5kbGVyLmpzJztcbmltcG9ydCB7IG1hdGNoUHJlY2FjaGUgfSBmcm9tICd3b3JrYm94LXByZWNhY2hpbmcvbWF0Y2hQcmVjYWNoZS5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgW2NvbXByZWhlbnNpdmUgZmFsbGJhY2tzIHJlY2lwZV17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL2FkdmFuY2VkLXJlY2lwZXMjY29tcHJlaGVuc2l2ZV9mYWxsYmFja3N9LiBCZSBzdXJlIHRvIGluY2x1ZGUgdGhlIGZhbGxiYWNrcyBpbiB5b3VyIHByZWNhY2hlIGluamVjdGlvblxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXJlY2lwZXNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucGFnZUZhbGxiYWNrXSBQcmVjYWNoZSBuYW1lIHRvIG1hdGNoIGZvciBwYWcgZmFsbGJhY2tzLiBEZWZhdWx0cyB0byBvZmZsaW5lLmh0bWxcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5pbWFnZUZhbGxiYWNrXSBQcmVjYWNoZSBuYW1lIHRvIG1hdGNoIGZvciBpbWFnZSBmYWxsYmFja3MuXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuZm9udEZhbGxiYWNrXSBQcmVjYWNoZSBuYW1lIHRvIG1hdGNoIGZvciBmb250IGZhbGxiYWNrcy5cbiAqL1xuZnVuY3Rpb24gb2ZmbGluZUZhbGxiYWNrKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHBhZ2VGYWxsYmFjayA9IG9wdGlvbnMucGFnZUZhbGxiYWNrIHx8ICdvZmZsaW5lLmh0bWwnO1xuICAgIGNvbnN0IGltYWdlRmFsbGJhY2sgPSBvcHRpb25zLmltYWdlRmFsbGJhY2sgfHwgZmFsc2U7XG4gICAgY29uc3QgZm9udEZhbGxiYWNrID0gb3B0aW9ucy5mb250RmFsbGJhY2sgfHwgZmFsc2U7XG4gICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gW3BhZ2VGYWxsYmFja107XG4gICAgICAgIGlmIChpbWFnZUZhbGxiYWNrKSB7XG4gICAgICAgICAgICBmaWxlcy5wdXNoKGltYWdlRmFsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb250RmFsbGJhY2spIHtcbiAgICAgICAgICAgIGZpbGVzLnB1c2goZm9udEZhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC53YWl0VW50aWwoc2VsZi5jYWNoZXNcbiAgICAgICAgICAgIC5vcGVuKCd3b3JrYm94LW9mZmxpbmUtZmFsbGJhY2tzJylcbiAgICAgICAgICAgIC50aGVuKChjYWNoZSkgPT4gY2FjaGUuYWRkQWxsKGZpbGVzKSkpO1xuICAgIH0pO1xuICAgIGNvbnN0IGhhbmRsZXIgPSBhc3luYyAob3B0aW9ucykgPT4ge1xuICAgICAgICBjb25zdCBkZXN0ID0gb3B0aW9ucy5yZXF1ZXN0LmRlc3RpbmF0aW9uO1xuICAgICAgICBjb25zdCBjYWNoZSA9IGF3YWl0IHNlbGYuY2FjaGVzLm9wZW4oJ3dvcmtib3gtb2ZmbGluZS1mYWxsYmFja3MnKTtcbiAgICAgICAgaWYgKGRlc3QgPT09ICdkb2N1bWVudCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gKGF3YWl0IG1hdGNoUHJlY2FjaGUocGFnZUZhbGxiYWNrKSkgfHxcbiAgICAgICAgICAgICAgICAoYXdhaXQgY2FjaGUubWF0Y2gocGFnZUZhbGxiYWNrKSk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2ggfHwgUmVzcG9uc2UuZXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVzdCA9PT0gJ2ltYWdlJyAmJiBpbWFnZUZhbGxiYWNrICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSAoYXdhaXQgbWF0Y2hQcmVjYWNoZShpbWFnZUZhbGxiYWNrKSkgfHxcbiAgICAgICAgICAgICAgICAoYXdhaXQgY2FjaGUubWF0Y2goaW1hZ2VGYWxsYmFjaykpO1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoIHx8IFJlc3BvbnNlLmVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlc3QgPT09ICdmb250JyAmJiBmb250RmFsbGJhY2sgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IChhd2FpdCBtYXRjaFByZWNhY2hlKGZvbnRGYWxsYmFjaykpIHx8XG4gICAgICAgICAgICAgICAgKGF3YWl0IGNhY2hlLm1hdGNoKGZvbnRGYWxsYmFjaykpO1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoIHx8IFJlc3BvbnNlLmVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLmVycm9yKCk7XG4gICAgfTtcbiAgICBzZXRDYXRjaEhhbmRsZXIoaGFuZGxlcik7XG59XG5leHBvcnQgeyBvZmZsaW5lRmFsbGJhY2sgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IHdhcm1TdHJhdGVneUNhY2hlIH0gZnJvbSAnLi93YXJtU3RyYXRlZ3lDYWNoZSc7XG5pbXBvcnQgeyByZWdpc3RlclJvdXRlIH0gZnJvbSAnd29ya2JveC1yb3V0aW5nL3JlZ2lzdGVyUm91dGUuanMnO1xuaW1wb3J0IHsgTmV0d29ya0ZpcnN0IH0gZnJvbSAnd29ya2JveC1zdHJhdGVnaWVzL05ldHdvcmtGaXJzdC5qcyc7XG5pbXBvcnQgeyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbiB9IGZyb20gJ3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlL0NhY2hlYWJsZVJlc3BvbnNlUGx1Z2luLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGEgcGFnZSBjYWNoaW5nIHJlY2lwZSB3aXRoIGEgbmV0d29yayB0aW1lb3V0XG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcmVjaXBlc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYWNoZU5hbWVdIE5hbWUgZm9yIGNhY2hlLiBEZWZhdWx0cyB0byBwYWdlc1xuICogQHBhcmFtIHtSb3V0ZU1hdGNoQ2FsbGJhY2t9IFtvcHRpb25zLm1hdGNoQ2FsbGJhY2tdIFdvcmtib3ggY2FsbGJhY2sgZnVuY3Rpb24gdG8gY2FsbCB0byBtYXRjaCB0by4gRGVmYXVsdHMgdG8gcmVxdWVzdC5tb2RlID09PSAnbmF2aWdhdGUnO1xuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm5ldHdvcmtUaW1vdXRTZWNvbmRzXSBNYXhpbXVtIGFtb3VudCBvZiB0aW1lLCBpbiBzZWNvbmRzLCB0byB3YWl0IG9uIHRoZSBuZXR3b3JrIGJlZm9yZSBmYWxsaW5nIGJhY2sgdG8gY2FjaGUuIERlZmF1bHRzIHRvIDNcbiAqIEBwYXJhbSB7V29ya2JveFBsdWdpbltdfSBbb3B0aW9ucy5wbHVnaW5zXSBBZGRpdGlvbmFsIHBsdWdpbnMgdG8gdXNlIGZvciB0aGlzIHJlY2lwZVxuICogQHBhcmFtIHtzdHJpbmdbXX0gW29wdGlvbnMud2FybUNhY2hlXSBQYXRocyB0byBjYWxsIHRvIHVzZSB0byB3YXJtIHRoaXMgY2FjaGVcbiAqL1xuZnVuY3Rpb24gcGFnZUNhY2hlKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRNYXRjaENhbGxiYWNrID0gKHsgcmVxdWVzdCB9KSA9PiByZXF1ZXN0Lm1vZGUgPT09ICduYXZpZ2F0ZSc7XG4gICAgY29uc3QgY2FjaGVOYW1lID0gb3B0aW9ucy5jYWNoZU5hbWUgfHwgJ3BhZ2VzJztcbiAgICBjb25zdCBtYXRjaENhbGxiYWNrID0gb3B0aW9ucy5tYXRjaENhbGxiYWNrIHx8IGRlZmF1bHRNYXRjaENhbGxiYWNrO1xuICAgIGNvbnN0IG5ldHdvcmtUaW1lb3V0U2Vjb25kcyA9IG9wdGlvbnMubmV0d29ya1RpbWVvdXRTZWNvbmRzIHx8IDM7XG4gICAgY29uc3QgcGx1Z2lucyA9IG9wdGlvbnMucGx1Z2lucyB8fCBbXTtcbiAgICBwbHVnaW5zLnB1c2gobmV3IENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luKHtcbiAgICAgICAgc3RhdHVzZXM6IFswLCAyMDBdLFxuICAgIH0pKTtcbiAgICBjb25zdCBzdHJhdGVneSA9IG5ldyBOZXR3b3JrRmlyc3Qoe1xuICAgICAgICBuZXR3b3JrVGltZW91dFNlY29uZHMsXG4gICAgICAgIGNhY2hlTmFtZSxcbiAgICAgICAgcGx1Z2lucyxcbiAgICB9KTtcbiAgICAvLyBSZWdpc3RlcnMgdGhlIHJvdXRlXG4gICAgcmVnaXN0ZXJSb3V0ZShtYXRjaENhbGxiYWNrLCBzdHJhdGVneSk7XG4gICAgLy8gV2FybXMgdGhlIGNhY2hlXG4gICAgaWYgKG9wdGlvbnMud2FybUNhY2hlKSB7XG4gICAgICAgIHdhcm1TdHJhdGVneUNhY2hlKHsgdXJsczogb3B0aW9ucy53YXJtQ2FjaGUsIHN0cmF0ZWd5IH0pO1xuICAgIH1cbn1cbmV4cG9ydCB7IHBhZ2VDYWNoZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgd2FybVN0cmF0ZWd5Q2FjaGUgfSBmcm9tICcuL3dhcm1TdHJhdGVneUNhY2hlJztcbmltcG9ydCB7IHJlZ2lzdGVyUm91dGUgfSBmcm9tICd3b3JrYm94LXJvdXRpbmcvcmVnaXN0ZXJSb3V0ZS5qcyc7XG5pbXBvcnQgeyBTdGFsZVdoaWxlUmV2YWxpZGF0ZSB9IGZyb20gJ3dvcmtib3gtc3RyYXRlZ2llcy9TdGFsZVdoaWxlUmV2YWxpZGF0ZS5qcyc7XG5pbXBvcnQgeyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbiB9IGZyb20gJ3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlL0NhY2hlYWJsZVJlc3BvbnNlUGx1Z2luLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIHRoZSBbQ1NTIGFuZCBKYXZhU2NyaXB0IGZpbGVzIHJlY2lwZV17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL2NvbW1vbi1yZWNpcGVzI2NhY2hlX2Nzc19hbmRfamF2YXNjcmlwdF9maWxlc31cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1yZWNpcGVzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhY2hlTmFtZV0gTmFtZSBmb3IgY2FjaGUuIERlZmF1bHRzIHRvIHN0YXRpYy1yZXNvdXJjZXNcbiAqIEBwYXJhbSB7Um91dGVNYXRjaENhbGxiYWNrfSBbb3B0aW9ucy5tYXRjaENhbGxiYWNrXSBXb3JrYm94IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGNhbGwgdG8gbWF0Y2ggdG8uIERlZmF1bHRzIHRvIHJlcXVlc3QuZGVzdGluYXRpb24gPT09ICdzdHlsZScgfHwgcmVxdWVzdC5kZXN0aW5hdGlvbiA9PT0gJ3NjcmlwdCcgfHwgcmVxdWVzdC5kZXN0aW5hdGlvbiA9PT0gJ3dvcmtlcic7XG4gKiBAcGFyYW0ge1dvcmtib3hQbHVnaW5bXX0gW29wdGlvbnMucGx1Z2luc10gQWRkaXRpb25hbCBwbHVnaW5zIHRvIHVzZSBmb3IgdGhpcyByZWNpcGVcbiAqIEBwYXJhbSB7c3RyaW5nW119IFtvcHRpb25zLndhcm1DYWNoZV0gUGF0aHMgdG8gY2FsbCB0byB1c2UgdG8gd2FybSB0aGlzIGNhY2hlXG4gKi9cbmZ1bmN0aW9uIHN0YXRpY1Jlc291cmNlQ2FjaGUob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgZGVmYXVsdE1hdGNoQ2FsbGJhY2sgPSAoeyByZXF1ZXN0IH0pID0+IHJlcXVlc3QuZGVzdGluYXRpb24gPT09ICdzdHlsZScgfHxcbiAgICAgICAgcmVxdWVzdC5kZXN0aW5hdGlvbiA9PT0gJ3NjcmlwdCcgfHxcbiAgICAgICAgcmVxdWVzdC5kZXN0aW5hdGlvbiA9PT0gJ3dvcmtlcic7XG4gICAgY29uc3QgY2FjaGVOYW1lID0gb3B0aW9ucy5jYWNoZU5hbWUgfHwgJ3N0YXRpYy1yZXNvdXJjZXMnO1xuICAgIGNvbnN0IG1hdGNoQ2FsbGJhY2sgPSBvcHRpb25zLm1hdGNoQ2FsbGJhY2sgfHwgZGVmYXVsdE1hdGNoQ2FsbGJhY2s7XG4gICAgY29uc3QgcGx1Z2lucyA9IG9wdGlvbnMucGx1Z2lucyB8fCBbXTtcbiAgICBwbHVnaW5zLnB1c2gobmV3IENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luKHtcbiAgICAgICAgc3RhdHVzZXM6IFswLCAyMDBdLFxuICAgIH0pKTtcbiAgICBjb25zdCBzdHJhdGVneSA9IG5ldyBTdGFsZVdoaWxlUmV2YWxpZGF0ZSh7XG4gICAgICAgIGNhY2hlTmFtZSxcbiAgICAgICAgcGx1Z2lucyxcbiAgICB9KTtcbiAgICByZWdpc3RlclJvdXRlKG1hdGNoQ2FsbGJhY2ssIHN0cmF0ZWd5KTtcbiAgICAvLyBXYXJtcyB0aGUgY2FjaGVcbiAgICBpZiAob3B0aW9ucy53YXJtQ2FjaGUpIHtcbiAgICAgICAgd2FybVN0cmF0ZWd5Q2FjaGUoeyB1cmxzOiBvcHRpb25zLndhcm1DYWNoZSwgc3RyYXRlZ3kgfSk7XG4gICAgfVxufVxuZXhwb3J0IHsgc3RhdGljUmVzb3VyY2VDYWNoZSB9O1xuIiwiaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcmVjaXBlc1xuIFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nW119IG9wdGlvbnMudXJscyBQYXRocyB0byB3YXJtIHRoZSBzdHJhdGVneSdzIGNhY2hlIHdpdGhcbiAqIEBwYXJhbSB7U3RyYXRlZ3l9IG9wdGlvbnMuc3RyYXRlZ3kgU3RyYXRlZ3kgdG8gdXNlXG4gKi9cbmZ1bmN0aW9uIHdhcm1TdHJhdGVneUNhY2hlKG9wdGlvbnMpIHtcbiAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZG9uZSA9IG9wdGlvbnMudXJscy5tYXAoKHBhdGgpID0+IG9wdGlvbnMuc3RyYXRlZ3kuaGFuZGxlQWxsKHtcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgcmVxdWVzdDogbmV3IFJlcXVlc3QocGF0aCksXG4gICAgICAgIH0pWzFdKTtcbiAgICAgICAgZXZlbnQud2FpdFVudGlsKFByb21pc2UuYWxsKGRvbmUpKTtcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHdhcm1TdHJhdGVneUNhY2hlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICcuL1JvdXRlLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIE5hdmlnYXRpb25Sb3V0ZSBtYWtlcyBpdCBlYXN5IHRvIGNyZWF0ZSBhXG4gKiB7QGxpbmsgd29ya2JveC1yb3V0aW5nLlJvdXRlfSB0aGF0IG1hdGNoZXMgZm9yIGJyb3dzZXJcbiAqIFtuYXZpZ2F0aW9uIHJlcXVlc3RzXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL3ByaW1lcnMvc2VydmljZS13b3JrZXJzL2hpZ2gtcGVyZm9ybWFuY2UtbG9hZGluZyNmaXJzdF93aGF0X2FyZV9uYXZpZ2F0aW9uX3JlcXVlc3RzfS5cbiAqXG4gKiBJdCB3aWxsIG9ubHkgbWF0Y2ggaW5jb21pbmcgUmVxdWVzdHMgd2hvc2VcbiAqIHtAbGluayBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1yZXF1ZXN0LW1vZGV8bW9kZX1cbiAqIGlzIHNldCB0byBgbmF2aWdhdGVgLlxuICpcbiAqIFlvdSBjYW4gb3B0aW9uYWxseSBvbmx5IGFwcGx5IHRoaXMgcm91dGUgdG8gYSBzdWJzZXQgb2YgbmF2aWdhdGlvbiByZXF1ZXN0c1xuICogYnkgdXNpbmcgb25lIG9yIGJvdGggb2YgdGhlIGBkZW55bGlzdGAgYW5kIGBhbGxvd2xpc3RgIHBhcmFtZXRlcnMuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcm91dGluZ1xuICogQGV4dGVuZHMgd29ya2JveC1yb3V0aW5nLlJvdXRlXG4gKi9cbmNsYXNzIE5hdmlnYXRpb25Sb3V0ZSBleHRlbmRzIFJvdXRlIHtcbiAgICAvKipcbiAgICAgKiBJZiBib3RoIGBkZW55bGlzdGAgYW5kIGBhbGxvd2xpc3RgIGFyZSBwcm92aWRlZCwgdGhlIGBkZW55bGlzdGAgd2lsbFxuICAgICAqIHRha2UgcHJlY2VkZW5jZSBhbmQgdGhlIHJlcXVlc3Qgd2lsbCBub3QgbWF0Y2ggdGhpcyByb3V0ZS5cbiAgICAgKlxuICAgICAqIFRoZSByZWd1bGFyIGV4cHJlc3Npb25zIGluIGBhbGxvd2xpc3RgIGFuZCBgZGVueWxpc3RgXG4gICAgICogYXJlIG1hdGNoZWQgYWdhaW5zdCB0aGUgY29uY2F0ZW5hdGVkXG4gICAgICogW2BwYXRobmFtZWBde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MSHlwZXJsaW5rRWxlbWVudFV0aWxzL3BhdGhuYW1lfVxuICAgICAqIGFuZCBbYHNlYXJjaGBde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MSHlwZXJsaW5rRWxlbWVudFV0aWxzL3NlYXJjaH1cbiAgICAgKiBwb3J0aW9ucyBvZiB0aGUgcmVxdWVzdGVkIFVSTC5cbiAgICAgKlxuICAgICAqICpOb3RlKjogVGhlc2UgUmVnRXhwcyBtYXkgYmUgZXZhbHVhdGVkIGFnYWluc3QgZXZlcnkgZGVzdGluYXRpb24gVVJMIGR1cmluZ1xuICAgICAqIGEgbmF2aWdhdGlvbi4gQXZvaWQgdXNpbmdcbiAgICAgKiBbY29tcGxleCBSZWdFeHBzXShodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzMwNzcpLFxuICAgICAqIG9yIGVsc2UgeW91ciB1c2VycyBtYXkgc2VlIGRlbGF5cyB3aGVuIG5hdmlnYXRpbmcgeW91ciBzaXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtBcnJheTxSZWdFeHA+fSBbb3B0aW9ucy5kZW55bGlzdF0gSWYgYW55IG9mIHRoZXNlIHBhdHRlcm5zIG1hdGNoLFxuICAgICAqIHRoZSByb3V0ZSB3aWxsIG5vdCBoYW5kbGUgdGhlIHJlcXVlc3QgKGV2ZW4gaWYgYSBhbGxvd2xpc3QgUmVnRXhwIG1hdGNoZXMpLlxuICAgICAqIEBwYXJhbSB7QXJyYXk8UmVnRXhwPn0gW29wdGlvbnMuYWxsb3dsaXN0PVsvLi9dXSBJZiBhbnkgb2YgdGhlc2UgcGF0dGVybnNcbiAgICAgKiBtYXRjaCB0aGUgVVJMJ3MgcGF0aG5hbWUgYW5kIHNlYXJjaCBwYXJhbWV0ZXIsIHRoZSByb3V0ZSB3aWxsIGhhbmRsZSB0aGVcbiAgICAgKiByZXF1ZXN0IChhc3N1bWluZyB0aGUgZGVueWxpc3QgZG9lc24ndCBtYXRjaCkuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaGFuZGxlciwgeyBhbGxvd2xpc3QgPSBbLy4vXSwgZGVueWxpc3QgPSBbXSB9ID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0FycmF5T2ZDbGFzcyhhbGxvd2xpc3QsIFJlZ0V4cCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ05hdmlnYXRpb25Sb3V0ZScsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnb3B0aW9ucy5hbGxvd2xpc3QnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhc3NlcnQuaXNBcnJheU9mQ2xhc3MoZGVueWxpc3QsIFJlZ0V4cCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ05hdmlnYXRpb25Sb3V0ZScsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnb3B0aW9ucy5kZW55bGlzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcigob3B0aW9ucykgPT4gdGhpcy5fbWF0Y2gob3B0aW9ucyksIGhhbmRsZXIpO1xuICAgICAgICB0aGlzLl9hbGxvd2xpc3QgPSBhbGxvd2xpc3Q7XG4gICAgICAgIHRoaXMuX2RlbnlsaXN0ID0gZGVueWxpc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJvdXRlcyBtYXRjaCBoYW5kbGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge1VSTH0gb3B0aW9ucy51cmxcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9tYXRjaCh7IHVybCwgcmVxdWVzdCB9KSB7XG4gICAgICAgIGlmIChyZXF1ZXN0ICYmIHJlcXVlc3QubW9kZSAhPT0gJ25hdmlnYXRlJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lQW5kU2VhcmNoID0gdXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaDtcbiAgICAgICAgZm9yIChjb25zdCByZWdFeHAgb2YgdGhpcy5fZGVueWxpc3QpIHtcbiAgICAgICAgICAgIGlmIChyZWdFeHAudGVzdChwYXRobmFtZUFuZFNlYXJjaCkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBUaGUgbmF2aWdhdGlvbiByb3V0ZSAke3BhdGhuYW1lQW5kU2VhcmNofSBpcyBub3QgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgYmVpbmcgdXNlZCwgc2luY2UgdGhlIFVSTCBtYXRjaGVzIHRoaXMgZGVueWxpc3QgcGF0dGVybjogYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtyZWdFeHAudG9TdHJpbmcoKX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9hbGxvd2xpc3Quc29tZSgocmVnRXhwKSA9PiByZWdFeHAudGVzdChwYXRobmFtZUFuZFNlYXJjaCkpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgVGhlIG5hdmlnYXRpb24gcm91dGUgJHtwYXRobmFtZUFuZFNlYXJjaH0gYCArIGBpcyBiZWluZyB1c2VkLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5sb2coYFRoZSBuYXZpZ2F0aW9uIHJvdXRlICR7cGF0aG5hbWVBbmRTZWFyY2h9IGlzIG5vdCBgICtcbiAgICAgICAgICAgICAgICBgYmVpbmcgdXNlZCwgc2luY2UgdGhlIFVSTCBiZWluZyBuYXZpZ2F0ZWQgdG8gZG9lc24ndCBgICtcbiAgICAgICAgICAgICAgICBgbWF0Y2ggdGhlIGFsbG93bGlzdC5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0IHsgTmF2aWdhdGlvblJvdXRlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICcuL1JvdXRlLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFJlZ0V4cFJvdXRlIG1ha2VzIGl0IGVhc3kgdG8gY3JlYXRlIGEgcmVndWxhciBleHByZXNzaW9uIGJhc2VkXG4gKiB7QGxpbmsgd29ya2JveC1yb3V0aW5nLlJvdXRlfS5cbiAqXG4gKiBGb3Igc2FtZS1vcmlnaW4gcmVxdWVzdHMgdGhlIFJlZ0V4cCBvbmx5IG5lZWRzIHRvIG1hdGNoIHBhcnQgb2YgdGhlIFVSTC4gRm9yXG4gKiByZXF1ZXN0cyBhZ2FpbnN0IHRoaXJkLXBhcnR5IHNlcnZlcnMsIHlvdSBtdXN0IGRlZmluZSBhIFJlZ0V4cCB0aGF0IG1hdGNoZXNcbiAqIHRoZSBzdGFydCBvZiB0aGUgVVJMLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXJvdXRpbmdcbiAqIEBleHRlbmRzIHdvcmtib3gtcm91dGluZy5Sb3V0ZVxuICovXG5jbGFzcyBSZWdFeHBSb3V0ZSBleHRlbmRzIFJvdXRlIHtcbiAgICAvKipcbiAgICAgKiBJZiB0aGUgcmVndWxhciBleHByZXNzaW9uIGNvbnRhaW5zXG4gICAgICogW2NhcHR1cmUgZ3JvdXBzXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9SZWdFeHAjZ3JvdXBpbmctYmFjay1yZWZlcmVuY2VzfSxcbiAgICAgKiB0aGUgY2FwdHVyZWQgdmFsdWVzIHdpbGwgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAqIHtAbGluayB3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBgcGFyYW1zYFxuICAgICAqIGFyZ3VtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWdFeHB9IHJlZ0V4cCBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3QgVVJMcy5cbiAgICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFttZXRob2Q9J0dFVCddIFRoZSBIVFRQIG1ldGhvZCB0byBtYXRjaCB0aGUgUm91dGVcbiAgICAgKiBhZ2FpbnN0LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlZ0V4cCwgaGFuZGxlciwgbWV0aG9kKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZWdFeHAsIFJlZ0V4cCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JlZ0V4cFJvdXRlJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdwYXR0ZXJuJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hdGNoID0gKHsgdXJsIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlZ0V4cC5leGVjKHVybC5ocmVmKTtcbiAgICAgICAgICAgIC8vIFJldHVybiBpbW1lZGlhdGVseSBpZiB0aGVyZSdzIG5vIG1hdGNoLlxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXF1aXJlIHRoYXQgdGhlIG1hdGNoIHN0YXJ0IGF0IHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gdGhlIFVSTCBzdHJpbmdcbiAgICAgICAgICAgIC8vIGlmIGl0J3MgYSBjcm9zcy1vcmlnaW4gcmVxdWVzdC5cbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzI4MSBmb3IgdGhlIGNvbnRleHRcbiAgICAgICAgICAgIC8vIGJlaGluZCB0aGlzIGJlaGF2aW9yLlxuICAgICAgICAgICAgaWYgKHVybC5vcmlnaW4gIT09IGxvY2F0aW9uLm9yaWdpbiAmJiByZXN1bHQuaW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYFRoZSByZWd1bGFyIGV4cHJlc3Npb24gJyR7cmVnRXhwLnRvU3RyaW5nKCl9JyBvbmx5IHBhcnRpYWxseSBtYXRjaGVkIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGFnYWluc3QgdGhlIGNyb3NzLW9yaWdpbiBVUkwgJyR7dXJsLnRvU3RyaW5nKCl9Jy4gUmVnRXhwUm91dGUncyB3aWxsIG9ubHkgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgaGFuZGxlIGNyb3NzLW9yaWdpbiByZXF1ZXN0cyBpZiB0aGV5IG1hdGNoIHRoZSBlbnRpcmUgVVJMLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgcm91dGUgbWF0Y2hlcywgYnV0IHRoZXJlIGFyZW4ndCBhbnkgY2FwdHVyZSBncm91cHMgZGVmaW5lZCwgdGhlblxuICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHJldHVybiBbXSwgd2hpY2ggaXMgdHJ1dGh5IGFuZCB0aGVyZWZvcmUgc3VmZmljaWVudCB0b1xuICAgICAgICAgICAgLy8gaW5kaWNhdGUgYSBtYXRjaC5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBjYXB0dXJlIGdyb3VwcywgdGhlbiBpdCB3aWxsIHJldHVybiB0aGVpciB2YWx1ZXMuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnNsaWNlKDEpO1xuICAgICAgICB9O1xuICAgICAgICBzdXBlcihtYXRjaCwgaGFuZGxlciwgbWV0aG9kKTtcbiAgICB9XG59XG5leHBvcnQgeyBSZWdFeHBSb3V0ZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBkZWZhdWx0TWV0aG9kLCB2YWxpZE1ldGhvZHMgfSBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgeyBub3JtYWxpemVIYW5kbGVyIH0gZnJvbSAnLi91dGlscy9ub3JtYWxpemVIYW5kbGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEEgYFJvdXRlYCBjb25zaXN0cyBvZiBhIHBhaXIgb2YgY2FsbGJhY2sgZnVuY3Rpb25zLCBcIm1hdGNoXCIgYW5kIFwiaGFuZGxlclwiLlxuICogVGhlIFwibWF0Y2hcIiBjYWxsYmFjayBkZXRlcm1pbmUgaWYgYSByb3V0ZSBzaG91bGQgYmUgdXNlZCB0byBcImhhbmRsZVwiIGFcbiAqIHJlcXVlc3QgYnkgcmV0dXJuaW5nIGEgbm9uLWZhbHN5IHZhbHVlIGlmIGl0IGNhbi4gVGhlIFwiaGFuZGxlclwiIGNhbGxiYWNrXG4gKiBpcyBjYWxsZWQgd2hlbiB0aGVyZSBpcyBhIG1hdGNoIGFuZCBzaG91bGQgcmV0dXJuIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzXG4gKiB0byBhIGBSZXNwb25zZWAuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcm91dGluZ1xuICovXG5jbGFzcyBSb3V0ZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZm9yIFJvdXRlIGNsYXNzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmd+bWF0Y2hDYWxsYmFja30gbWF0Y2hcbiAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSByb3V0ZSBtYXRjaGVzIGEgZ2l2ZW5cbiAgICAgKiBgZmV0Y2hgIGV2ZW50IGJ5IHJldHVybmluZyBhIG5vbi1mYWxzeSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzb2x2aW5nIHRvIGEgUmVzcG9uc2UuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFttZXRob2Q9J0dFVCddIFRoZSBIVFRQIG1ldGhvZCB0byBtYXRjaCB0aGUgUm91dGVcbiAgICAgKiBhZ2FpbnN0LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG1hdGNoLCBoYW5kbGVyLCBtZXRob2QgPSBkZWZhdWx0TWV0aG9kKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNUeXBlKG1hdGNoLCAnZnVuY3Rpb24nLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGUnLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ21hdGNoJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgIGFzc2VydC5pc09uZU9mKG1ldGhvZCwgdmFsaWRNZXRob2RzLCB7IHBhcmFtTmFtZTogJ21ldGhvZCcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlc2UgdmFsdWVzIGFyZSByZWZlcmVuY2VkIGRpcmVjdGx5IGJ5IFJvdXRlciBzbyBjYW5ub3QgYmVcbiAgICAgICAgLy8gYWx0ZXJlZCBieSBtaW5pZmljYXRvbi5cbiAgICAgICAgdGhpcy5oYW5kbGVyID0gbm9ybWFsaXplSGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgdGhpcy5tYXRjaCA9IG1hdGNoO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZy1oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzb2x2aW5nIHRvIGEgUmVzcG9uc2VcbiAgICAgKi9cbiAgICBzZXRDYXRjaEhhbmRsZXIoaGFuZGxlcikge1xuICAgICAgICB0aGlzLmNhdGNoSGFuZGxlciA9IG5vcm1hbGl6ZUhhbmRsZXIoaGFuZGxlcik7XG4gICAgfVxufVxuZXhwb3J0IHsgUm91dGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgZGVmYXVsdE1ldGhvZCB9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgbm9ybWFsaXplSGFuZGxlciB9IGZyb20gJy4vdXRpbHMvbm9ybWFsaXplSGFuZGxlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRoZSBSb3V0ZXIgY2FuIGJlIHVzZWQgdG8gcHJvY2VzcyBhIGBGZXRjaEV2ZW50YCB1c2luZyBvbmUgb3IgbW9yZVxuICoge0BsaW5rIHdvcmtib3gtcm91dGluZy5Sb3V0ZX0sIHJlc3BvbmRpbmcgd2l0aCBhIGBSZXNwb25zZWAgaWZcbiAqIGEgbWF0Y2hpbmcgcm91dGUgZXhpc3RzLlxuICpcbiAqIElmIG5vIHJvdXRlIG1hdGNoZXMgYSBnaXZlbiBhIHJlcXVlc3QsIHRoZSBSb3V0ZXIgd2lsbCB1c2UgYSBcImRlZmF1bHRcIlxuICogaGFuZGxlciBpZiBvbmUgaXMgZGVmaW5lZC5cbiAqXG4gKiBTaG91bGQgdGhlIG1hdGNoaW5nIFJvdXRlIHRocm93IGFuIGVycm9yLCB0aGUgUm91dGVyIHdpbGwgdXNlIGEgXCJjYXRjaFwiXG4gKiBoYW5kbGVyIGlmIG9uZSBpcyBkZWZpbmVkIHRvIGdyYWNlZnVsbHkgZGVhbCB3aXRoIGlzc3VlcyBhbmQgcmVzcG9uZCB3aXRoIGFcbiAqIFJlcXVlc3QuXG4gKlxuICogSWYgYSByZXF1ZXN0IG1hdGNoZXMgbXVsdGlwbGUgcm91dGVzLCB0aGUgKiplYXJsaWVzdCoqIHJlZ2lzdGVyZWQgcm91dGUgd2lsbFxuICogYmUgdXNlZCB0byByZXNwb25kIHRvIHRoZSByZXF1ZXN0LlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXJvdXRpbmdcbiAqL1xuY2xhc3MgUm91dGVyIHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBhIG5ldyBSb3V0ZXIuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fZGVmYXVsdEhhbmRsZXJNYXAgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge01hcDxzdHJpbmcsIEFycmF5PHdvcmtib3gtcm91dGluZy5Sb3V0ZT4+fSByb3V0ZXMgQSBgTWFwYCBvZiBIVFRQXG4gICAgICogbWV0aG9kIG5hbWUgKCdHRVQnLCBldGMuKSB0byBhbiBhcnJheSBvZiBhbGwgdGhlIGNvcnJlc3BvbmRpbmcgYFJvdXRlYFxuICAgICAqIGluc3RhbmNlcyB0aGF0IGFyZSByZWdpc3RlcmVkLlxuICAgICAqL1xuICAgIGdldCByb3V0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb3V0ZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBmZXRjaCBldmVudCBsaXN0ZW5lciB0byByZXNwb25kIHRvIGV2ZW50cyB3aGVuIGEgcm91dGUgbWF0Y2hlc1xuICAgICAqIHRoZSBldmVudCdzIHJlcXVlc3QuXG4gICAgICovXG4gICAgYWRkRmV0Y2hMaXN0ZW5lcigpIHtcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjgzNTcjaXNzdWVjb21tZW50LTQzNjQ4NDcwNVxuICAgICAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgKChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyByZXF1ZXN0IH0gPSBldmVudDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlUHJvbWlzZSA9IHRoaXMuaGFuZGxlUmVxdWVzdCh7IHJlcXVlc3QsIGV2ZW50IH0pO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnJlc3BvbmRXaXRoKHJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIG1lc3NhZ2UgZXZlbnQgbGlzdGVuZXIgZm9yIFVSTHMgdG8gY2FjaGUgZnJvbSB0aGUgd2luZG93LlxuICAgICAqIFRoaXMgaXMgdXNlZnVsIHRvIGNhY2hlIHJlc291cmNlcyBsb2FkZWQgb24gdGhlIHBhZ2UgcHJpb3IgdG8gd2hlbiB0aGVcbiAgICAgKiBzZXJ2aWNlIHdvcmtlciBzdGFydGVkIGNvbnRyb2xsaW5nIGl0LlxuICAgICAqXG4gICAgICogVGhlIGZvcm1hdCBvZiB0aGUgbWVzc2FnZSBkYXRhIHNlbnQgZnJvbSB0aGUgd2luZG93IHNob3VsZCBiZSBhcyBmb2xsb3dzLlxuICAgICAqIFdoZXJlIHRoZSBgdXJsc1RvQ2FjaGVgIGFycmF5IG1heSBjb25zaXN0IG9mIFVSTCBzdHJpbmdzIG9yIGFuIGFycmF5IG9mXG4gICAgICogVVJMIHN0cmluZyArIGByZXF1ZXN0SW5pdGAgb2JqZWN0ICh0aGUgc2FtZSBhcyB5b3UnZCBwYXNzIHRvIGBmZXRjaCgpYCkuXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiB7XG4gICAgICogICB0eXBlOiAnQ0FDSEVfVVJMUycsXG4gICAgICogICBwYXlsb2FkOiB7XG4gICAgICogICAgIHVybHNUb0NhY2hlOiBbXG4gICAgICogICAgICAgJy4vc2NyaXB0MS5qcycsXG4gICAgICogICAgICAgJy4vc2NyaXB0Mi5qcycsXG4gICAgICogICAgICAgWycuL3NjcmlwdDMuanMnLCB7bW9kZTogJ25vLWNvcnMnfV0sXG4gICAgICogICAgIF0sXG4gICAgICogICB9LFxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBhZGRDYWNoZUxpc3RlbmVyKCkge1xuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yODM1NyNpc3N1ZWNvbW1lbnQtNDM2NDg0NzA1XG4gICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIGV2ZW50LmRhdGEgaXMgdHlwZSAnYW55J1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEgJiYgZXZlbnQuZGF0YS50eXBlID09PSAnQ0FDSEVfVVJMUycpIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXlsb2FkIH0gPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgQ2FjaGluZyBVUkxzIGZyb20gdGhlIHdpbmRvd2AsIHBheWxvYWQudXJsc1RvQ2FjaGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0UHJvbWlzZXMgPSBQcm9taXNlLmFsbChwYXlsb2FkLnVybHNUb0NhY2hlLm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5ID0gW2VudHJ5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoLi4uZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXF1ZXN0KHsgcmVxdWVzdCwgZXZlbnQgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogVHlwZVNjcmlwdCBlcnJvcnMgd2l0aG91dCB0aGlzIHR5cGVjYXN0IGZvclxuICAgICAgICAgICAgICAgICAgICAvLyBzb21lIHJlYXNvbiAocHJvYmFibHkgYSBidWcpLiBUaGUgcmVhbCB0eXBlIGhlcmUgc2hvdWxkIHdvcmsgYnV0XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvZXNuJ3Q6IGBBcnJheTxQcm9taXNlPFJlc3BvbnNlPiB8IHVuZGVmaW5lZD5gLlxuICAgICAgICAgICAgICAgIH0pKTsgLy8gVHlwZVNjcmlwdFxuICAgICAgICAgICAgICAgIGV2ZW50LndhaXRVbnRpbChyZXF1ZXN0UHJvbWlzZXMpO1xuICAgICAgICAgICAgICAgIC8vIElmIGEgTWVzc2FnZUNoYW5uZWwgd2FzIHVzZWQsIHJlcGx5IHRvIHRoZSBtZXNzYWdlIG9uIHN1Y2Nlc3MuXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnBvcnRzICYmIGV2ZW50LnBvcnRzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgcmVxdWVzdFByb21pc2VzLnRoZW4oKCkgPT4gZXZlbnQucG9ydHNbMF0ucG9zdE1lc3NhZ2UodHJ1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBseSB0aGUgcm91dGluZyBydWxlcyB0byBhIEZldGNoRXZlbnQgb2JqZWN0IHRvIGdldCBhIFJlc3BvbnNlIGZyb20gYW5cbiAgICAgKiBhcHByb3ByaWF0ZSBSb3V0ZSdzIGhhbmRsZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0IFRoZSByZXF1ZXN0IHRvIGhhbmRsZS5cbiAgICAgKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gb3B0aW9ucy5ldmVudCBUaGUgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlXG4gICAgICogICAgIHJlcXVlc3QuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT58dW5kZWZpbmVkfSBBIHByb21pc2UgaXMgcmV0dXJuZWQgaWYgYVxuICAgICAqICAgICByZWdpc3RlcmVkIHJvdXRlIGNhbiBoYW5kbGUgdGhlIHJlcXVlc3QuIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nXG4gICAgICogICAgIHJvdXRlIGFuZCB0aGVyZSdzIG5vIGBkZWZhdWx0SGFuZGxlcmAsIGB1bmRlZmluZWRgIGlzIHJldHVybmVkLlxuICAgICAqL1xuICAgIGhhbmRsZVJlcXVlc3QoeyByZXF1ZXN0LCBldmVudCwgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdoYW5kbGVSZXF1ZXN0JyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdvcHRpb25zLnJlcXVlc3QnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCwgbG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICghdXJsLnByb3RvY29sLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYFdvcmtib3ggUm91dGVyIG9ubHkgc3VwcG9ydHMgVVJMcyB0aGF0IHN0YXJ0IHdpdGggJ2h0dHAnLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNhbWVPcmlnaW4gPSB1cmwub3JpZ2luID09PSBsb2NhdGlvbi5vcmlnaW47XG4gICAgICAgIGNvbnN0IHsgcGFyYW1zLCByb3V0ZSB9ID0gdGhpcy5maW5kTWF0Y2hpbmdSb3V0ZSh7XG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICBzYW1lT3JpZ2luLFxuICAgICAgICAgICAgdXJsLFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSByb3V0ZSAmJiByb3V0ZS5oYW5kbGVyO1xuICAgICAgICBjb25zdCBkZWJ1Z01lc3NhZ2VzID0gW107XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIGRlYnVnTWVzc2FnZXMucHVzaChbYEZvdW5kIGEgcm91dGUgdG8gaGFuZGxlIHRoaXMgcmVxdWVzdDpgLCByb3V0ZV0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdNZXNzYWdlcy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBQYXNzaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1zIHRvIHRoZSByb3V0ZSdzIGhhbmRsZXI6YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBoYW5kbGVyIGJlY2F1c2UgdGhlcmUgd2FzIG5vIG1hdGNoaW5nIHJvdXRlLCB0aGVuXG4gICAgICAgIC8vIGZhbGwgYmFjayB0byBkZWZhdWx0SGFuZGxlciBpZiB0aGF0J3MgZGVmaW5lZC5cbiAgICAgICAgY29uc3QgbWV0aG9kID0gcmVxdWVzdC5tZXRob2Q7XG4gICAgICAgIGlmICghaGFuZGxlciAmJiB0aGlzLl9kZWZhdWx0SGFuZGxlck1hcC5oYXMobWV0aG9kKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z01lc3NhZ2VzLnB1c2goYEZhaWxlZCB0byBmaW5kIGEgbWF0Y2hpbmcgcm91dGUuIEZhbGxpbmcgYCArXG4gICAgICAgICAgICAgICAgICAgIGBiYWNrIHRvIHRoZSBkZWZhdWx0IGhhbmRsZXIgZm9yICR7bWV0aG9kfS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZXIgPSB0aGlzLl9kZWZhdWx0SGFuZGxlck1hcC5nZXQobWV0aG9kKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgLy8gTm8gaGFuZGxlciBzbyBXb3JrYm94IHdpbGwgZG8gbm90aGluZy4gSWYgbG9ncyBpcyBzZXQgb2YgZGVidWdcbiAgICAgICAgICAgICAgICAvLyBpLmUuIHZlcmJvc2UsIHdlIHNob3VsZCBwcmludCBvdXQgdGhpcyBpbmZvcm1hdGlvbi5cbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYE5vIHJvdXRlIGZvdW5kIGZvcjogJHtnZXRGcmllbmRseVVSTCh1cmwpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBXZSBoYXZlIGEgaGFuZGxlciwgbWVhbmluZyBXb3JrYm94IGlzIGdvaW5nIHRvIGhhbmRsZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAvLyBwcmludCB0aGUgcm91dGluZyBkZXRhaWxzIHRvIHRoZSBjb25zb2xlLlxuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBSb3V0ZXIgaXMgcmVzcG9uZGluZyB0bzogJHtnZXRGcmllbmRseVVSTCh1cmwpfWApO1xuICAgICAgICAgICAgZGVidWdNZXNzYWdlcy5mb3JFYWNoKChtc2cpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtc2cpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coLi4ubXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2cobXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdyYXAgaW4gdHJ5IGFuZCBjYXRjaCBpbiBjYXNlIHRoZSBoYW5kbGUgbWV0aG9kIHRocm93cyBhIHN5bmNocm9ub3VzXG4gICAgICAgIC8vIGVycm9yLiBJdCBzaG91bGQgc3RpbGwgY2FsbGJhY2sgdG8gdGhlIGNhdGNoIGhhbmRsZXIuXG4gICAgICAgIGxldCByZXNwb25zZVByb21pc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZVByb21pc2UgPSBoYW5kbGVyLmhhbmRsZSh7IHVybCwgcmVxdWVzdCwgZXZlbnQsIHBhcmFtcyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXNwb25zZVByb21pc2UgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldCByb3V0ZSdzIGNhdGNoIGhhbmRsZXIsIGlmIGl0IGV4aXN0c1xuICAgICAgICBjb25zdCBjYXRjaEhhbmRsZXIgPSByb3V0ZSAmJiByb3V0ZS5jYXRjaEhhbmRsZXI7XG4gICAgICAgIGlmIChyZXNwb25zZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlICYmXG4gICAgICAgICAgICAodGhpcy5fY2F0Y2hIYW5kbGVyIHx8IGNhdGNoSGFuZGxlcikpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlUHJvbWlzZSA9IHJlc3BvbnNlUHJvbWlzZS5jYXRjaChhc3luYyAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJvdXRlIGNhdGNoIGhhbmRsZXIsIHByb2Nlc3MgdGhhdCBmaXJzdFxuICAgICAgICAgICAgICAgIGlmIChjYXRjaEhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0aWxsIGluY2x1ZGUgVVJMIGhlcmUgYXMgaXQgd2lsbCBiZSBhc3luYyBmcm9tIHRoZSBjb25zb2xlIGdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgbWF5IG5vdCBtYWtlIHNlbnNlIHdpdGhvdXQgdGhlIFVSTFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBFcnJvciB0aHJvd24gd2hlbiByZXNwb25kaW5nIHRvOiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgICR7Z2V0RnJpZW5kbHlVUkwodXJsKX0uIEZhbGxpbmcgYmFjayB0byByb3V0ZSdzIENhdGNoIEhhbmRsZXIuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoYEVycm9yIHRocm93biBieTpgLCByb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgY2F0Y2hIYW5kbGVyLmhhbmRsZSh7IHVybCwgcmVxdWVzdCwgZXZlbnQsIHBhcmFtcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoY2F0Y2hFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXRjaEVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyID0gY2F0Y2hFcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhdGNoSGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RpbGwgaW5jbHVkZSBVUkwgaGVyZSBhcyBpdCB3aWxsIGJlIGFzeW5jIGZyb20gdGhlIGNvbnNvbGUgZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBtYXkgbm90IG1ha2Ugc2Vuc2Ugd2l0aG91dCB0aGUgVVJMXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYEVycm9yIHRocm93biB3aGVuIHJlc3BvbmRpbmcgdG86IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgJHtnZXRGcmllbmRseVVSTCh1cmwpfS4gRmFsbGluZyBiYWNrIHRvIGdsb2JhbCBDYXRjaCBIYW5kbGVyLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBFcnJvciB0aHJvd24gYnk6YCwgcm91dGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2F0Y2hIYW5kbGVyLmhhbmRsZSh7IHVybCwgcmVxdWVzdCwgZXZlbnQgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZVByb21pc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrcyBhIHJlcXVlc3QgYW5kIFVSTCAoYW5kIG9wdGlvbmFsbHkgYW4gZXZlbnQpIGFnYWluc3QgdGhlIGxpc3Qgb2ZcbiAgICAgKiByZWdpc3RlcmVkIHJvdXRlcywgYW5kIGlmIHRoZXJlJ3MgYSBtYXRjaCwgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZ1xuICAgICAqIHJvdXRlIGFsb25nIHdpdGggYW55IHBhcmFtcyBnZW5lcmF0ZWQgYnkgdGhlIG1hdGNoLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge1VSTH0gb3B0aW9ucy51cmxcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuc2FtZU9yaWdpbiBUaGUgcmVzdWx0IG9mIGNvbXBhcmluZyBgdXJsLm9yaWdpbmBcbiAgICAgKiAgICAgYWdhaW5zdCB0aGUgY3VycmVudCBvcmlnaW4uXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3QgVGhlIHJlcXVlc3QgdG8gbWF0Y2guXG4gICAgICogQHBhcmFtIHtFdmVudH0gb3B0aW9ucy5ldmVudCBUaGUgY29ycmVzcG9uZGluZyBldmVudC5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIGByb3V0ZWAgYW5kIGBwYXJhbXNgIHByb3BlcnRpZXMuXG4gICAgICogICAgIFRoZXkgYXJlIHBvcHVsYXRlZCBpZiBhIG1hdGNoaW5nIHJvdXRlIHdhcyBmb3VuZCBvciBgdW5kZWZpbmVkYFxuICAgICAqICAgICBvdGhlcndpc2UuXG4gICAgICovXG4gICAgZmluZE1hdGNoaW5nUm91dGUoeyB1cmwsIHNhbWVPcmlnaW4sIHJlcXVlc3QsIGV2ZW50LCB9KSB7XG4gICAgICAgIGNvbnN0IHJvdXRlcyA9IHRoaXMuX3JvdXRlcy5nZXQocmVxdWVzdC5tZXRob2QpIHx8IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xuICAgICAgICAgICAgbGV0IHBhcmFtcztcbiAgICAgICAgICAgIC8vIHJvdXRlLm1hdGNoIHJldHVybnMgdHlwZSBhbnksIG5vdCBwb3NzaWJsZSB0byBjaGFuZ2UgcmlnaHQgbm93LlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuICAgICAgICAgICAgY29uc3QgbWF0Y2hSZXN1bHQgPSByb3V0ZS5tYXRjaCh7IHVybCwgc2FtZU9yaWdpbiwgcmVxdWVzdCwgZXZlbnQgfSk7XG4gICAgICAgICAgICBpZiAobWF0Y2hSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBXYXJuIGRldmVsb3BlcnMgdGhhdCB1c2luZyBhbiBhc3luYyBtYXRjaENhbGxiYWNrIGlzIGFsbW9zdCBhbHdheXNcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90IHRoZSByaWdodCB0aGluZyB0byBkby5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoUmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oYFdoaWxlIHJvdXRpbmcgJHtnZXRGcmllbmRseVVSTCh1cmwpfSwgYW4gYXN5bmMgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYG1hdGNoQ2FsbGJhY2sgZnVuY3Rpb24gd2FzIHVzZWQuIFBsZWFzZSBjb252ZXJ0IHRoZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZm9sbG93aW5nIHJvdXRlIHRvIHVzZSBhIHN5bmNocm9ub3VzIG1hdGNoQ2FsbGJhY2sgZnVuY3Rpb246YCwgcm91dGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzIwNzlcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG4gICAgICAgICAgICAgICAgcGFyYW1zID0gbWF0Y2hSZXN1bHQ7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyYW1zKSAmJiBwYXJhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluc3RlYWQgb2YgcGFzc2luZyBhbiBlbXB0eSBhcnJheSBpbiBhcyBwYXJhbXMsIHVzZSB1bmRlZmluZWQuXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hSZXN1bHQuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG1hdGNoUmVzdWx0KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5zdGVhZCBvZiBwYXNzaW5nIGFuIGVtcHR5IG9iamVjdCBpbiBhcyBwYXJhbXMsIHVzZSB1bmRlZmluZWQuXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIG1hdGNoUmVzdWx0ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIHRoZSBib29sZWFuIHZhbHVlIHRydWUgKHJhdGhlciB0aGFuIGp1c3Qgc29tZXRoaW5nIHRydXRoLXkpLFxuICAgICAgICAgICAgICAgICAgICAvLyBkb24ndCBzZXQgcGFyYW1zLlxuICAgICAgICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L3B1bGwvMjEzNCNpc3N1ZWNvbW1lbnQtNTEzOTI0MzUzXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGlmIGhhdmUgYSBtYXRjaC5cbiAgICAgICAgICAgICAgICByZXR1cm4geyByb3V0ZSwgcGFyYW1zIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgbm8gbWF0Y2ggd2FzIGZvdW5kIGFib3ZlLCByZXR1cm4gYW5kIGVtcHR5IG9iamVjdC5cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgYSBkZWZhdWx0IGBoYW5kbGVyYCB0aGF0J3MgY2FsbGVkIHdoZW4gbm8gcm91dGVzIGV4cGxpY2l0bHlcbiAgICAgKiBtYXRjaCB0aGUgaW5jb21pbmcgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEVhY2ggSFRUUCBtZXRob2QgKCdHRVQnLCAnUE9TVCcsIGV0Yy4pIGdldHMgaXRzIG93biBkZWZhdWx0IGhhbmRsZXIuXG4gICAgICpcbiAgICAgKiBXaXRob3V0IGEgZGVmYXVsdCBoYW5kbGVyLCB1bm1hdGNoZWQgcmVxdWVzdHMgd2lsbCBnbyBhZ2FpbnN0IHRoZVxuICAgICAqIG5ldHdvcmsgYXMgaWYgdGhlcmUgd2VyZSBubyBzZXJ2aWNlIHdvcmtlciBwcmVzZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kPSdHRVQnXSBUaGUgSFRUUCBtZXRob2QgdG8gYXNzb2NpYXRlIHdpdGggdGhpc1xuICAgICAqIGRlZmF1bHQgaGFuZGxlci4gRWFjaCBtZXRob2QgaGFzIGl0cyBvd24gZGVmYXVsdC5cbiAgICAgKi9cbiAgICBzZXREZWZhdWx0SGFuZGxlcihoYW5kbGVyLCBtZXRob2QgPSBkZWZhdWx0TWV0aG9kKSB7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRIYW5kbGVyTWFwLnNldChtZXRob2QsIG5vcm1hbGl6ZUhhbmRsZXIoaGFuZGxlcikpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiBhIFJvdXRlIHRocm93cyBhbiBlcnJvciB3aGlsZSBoYW5kbGluZyBhIHJlcXVlc3QsIHRoaXMgYGhhbmRsZXJgXG4gICAgICogd2lsbCBiZSBjYWxsZWQgYW5kIGdpdmVuIGEgY2hhbmNlIHRvIHByb3ZpZGUgYSByZXNwb25zZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS5cbiAgICAgKi9cbiAgICBzZXRDYXRjaEhhbmRsZXIoaGFuZGxlcikge1xuICAgICAgICB0aGlzLl9jYXRjaEhhbmRsZXIgPSBub3JtYWxpemVIYW5kbGVyKGhhbmRsZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSByb3V0ZSB3aXRoIHRoZSByb3V0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZy5Sb3V0ZX0gcm91dGUgVGhlIHJvdXRlIHRvIHJlZ2lzdGVyLlxuICAgICAqL1xuICAgIHJlZ2lzdGVyUm91dGUocm91dGUpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc1R5cGUocm91dGUsICdvYmplY3QnLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ3JvdXRlJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXNzZXJ0Lmhhc01ldGhvZChyb3V0ZSwgJ21hdGNoJywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzc2VydC5pc1R5cGUocm91dGUuaGFuZGxlciwgJ29iamVjdCcsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncm91dGUnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhc3NlcnQuaGFzTWV0aG9kKHJvdXRlLmhhbmRsZXIsICdoYW5kbGUnLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ3JvdXRlLmhhbmRsZXInLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhc3NlcnQuaXNUeXBlKHJvdXRlLm1ldGhvZCwgJ3N0cmluZycsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncm91dGUubWV0aG9kJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fcm91dGVzLmhhcyhyb3V0ZS5tZXRob2QpKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXMuc2V0KHJvdXRlLm1ldGhvZCwgW10pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdpdmUgcHJlY2VkZW5jZSB0byBhbGwgb2YgdGhlIGVhcmxpZXIgcm91dGVzIGJ5IGFkZGluZyB0aGlzIGFkZGl0aW9uYWxcbiAgICAgICAgLy8gcm91dGUgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG4gICAgICAgIHRoaXMuX3JvdXRlcy5nZXQocm91dGUubWV0aG9kKS5wdXNoKHJvdXRlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVW5yZWdpc3RlcnMgYSByb3V0ZSB3aXRoIHRoZSByb3V0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZy5Sb3V0ZX0gcm91dGUgVGhlIHJvdXRlIHRvIHVucmVnaXN0ZXIuXG4gICAgICovXG4gICAgdW5yZWdpc3RlclJvdXRlKHJvdXRlKSB7XG4gICAgICAgIGlmICghdGhpcy5fcm91dGVzLmhhcyhyb3V0ZS5tZXRob2QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCd1bnJlZ2lzdGVyLXJvdXRlLWJ1dC1ub3QtZm91bmQtd2l0aC1tZXRob2QnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiByb3V0ZS5tZXRob2QsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZUluZGV4ID0gdGhpcy5fcm91dGVzLmdldChyb3V0ZS5tZXRob2QpLmluZGV4T2Yocm91dGUpO1xuICAgICAgICBpZiAocm91dGVJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXMuZ2V0KHJvdXRlLm1ldGhvZCkuc3BsaWNlKHJvdXRlSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcigndW5yZWdpc3Rlci1yb3V0ZS1yb3V0ZS1ub3QtcmVnaXN0ZXJlZCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IHsgUm91dGVyIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIEB0cy1pZ25vcmVcbnRyeSB7XG4gICAgc2VsZlsnd29ya2JveDpyb3V0aW5nOjYuNS4zJ10gJiYgXygpO1xufVxuY2F0Y2ggKGUpIHsgfVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgTmF2aWdhdGlvblJvdXRlLCB9IGZyb20gJy4vTmF2aWdhdGlvblJvdXRlLmpzJztcbmltcG9ydCB7IFJlZ0V4cFJvdXRlIH0gZnJvbSAnLi9SZWdFeHBSb3V0ZS5qcyc7XG5pbXBvcnQgeyByZWdpc3RlclJvdXRlIH0gZnJvbSAnLi9yZWdpc3RlclJvdXRlLmpzJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnLi9Sb3V0ZS5qcyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuL1JvdXRlci5qcyc7XG5pbXBvcnQgeyBzZXRDYXRjaEhhbmRsZXIgfSBmcm9tICcuL3NldENhdGNoSGFuZGxlci5qcyc7XG5pbXBvcnQgeyBzZXREZWZhdWx0SGFuZGxlciB9IGZyb20gJy4vc2V0RGVmYXVsdEhhbmRsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQG1vZHVsZSB3b3JrYm94LXJvdXRpbmdcbiAqL1xuZXhwb3J0IHsgTmF2aWdhdGlvblJvdXRlLCBSZWdFeHBSb3V0ZSwgcmVnaXN0ZXJSb3V0ZSwgUm91dGUsIFJvdXRlciwgc2V0Q2F0Y2hIYW5kbGVyLCBzZXREZWZhdWx0SGFuZGxlciwgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJy4vUm91dGUuanMnO1xuaW1wb3J0IHsgUmVnRXhwUm91dGUgfSBmcm9tICcuL1JlZ0V4cFJvdXRlLmpzJztcbmltcG9ydCB7IGdldE9yQ3JlYXRlRGVmYXVsdFJvdXRlciB9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEVhc2lseSByZWdpc3RlciBhIFJlZ0V4cCwgc3RyaW5nLCBvciBmdW5jdGlvbiB3aXRoIGEgY2FjaGluZ1xuICogc3RyYXRlZ3kgdG8gYSBzaW5nbGV0b24gUm91dGVyIGluc3RhbmNlLlxuICpcbiAqIFRoaXMgbWV0aG9kIHdpbGwgZ2VuZXJhdGUgYSBSb3V0ZSBmb3IgeW91IGlmIG5lZWRlZCBhbmRcbiAqIGNhbGwge0BsaW5rIHdvcmtib3gtcm91dGluZy5Sb3V0ZXIjcmVnaXN0ZXJSb3V0ZX0uXG4gKlxuICogQHBhcmFtIHtSZWdFeHB8c3RyaW5nfHdvcmtib3gtcm91dGluZy5Sb3V0ZX5tYXRjaENhbGxiYWNrfHdvcmtib3gtcm91dGluZy5Sb3V0ZX0gY2FwdHVyZVxuICogSWYgdGhlIGNhcHR1cmUgcGFyYW0gaXMgYSBgUm91dGVgLCBhbGwgb3RoZXIgYXJndW1lbnRzIHdpbGwgYmUgaWdub3JlZC5cbiAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gW2hhbmRsZXJdIEEgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuIFRoaXMgcGFyYW1ldGVyXG4gKiBpcyByZXF1aXJlZCBpZiBgY2FwdHVyZWAgaXMgbm90IGEgYFJvdXRlYCBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZD0nR0VUJ10gVGhlIEhUVFAgbWV0aG9kIHRvIG1hdGNoIHRoZSBSb3V0ZVxuICogYWdhaW5zdC5cbiAqIEByZXR1cm4ge3dvcmtib3gtcm91dGluZy5Sb3V0ZX0gVGhlIGdlbmVyYXRlZCBgUm91dGVgLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXJvdXRpbmdcbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJSb3V0ZShjYXB0dXJlLCBoYW5kbGVyLCBtZXRob2QpIHtcbiAgICBsZXQgcm91dGU7XG4gICAgaWYgKHR5cGVvZiBjYXB0dXJlID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCBjYXB0dXJlVXJsID0gbmV3IFVSTChjYXB0dXJlLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICghKGNhcHR1cmUuc3RhcnRzV2l0aCgnLycpIHx8IGNhcHR1cmUuc3RhcnRzV2l0aCgnaHR0cCcpKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2ludmFsaWQtc3RyaW5nJywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnY2FwdHVyZScsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBXZSB3YW50IHRvIGNoZWNrIGlmIEV4cHJlc3Mtc3R5bGUgd2lsZGNhcmRzIGFyZSBpbiB0aGUgcGF0aG5hbWUgb25seS5cbiAgICAgICAgICAgIC8vIFRPRE86IFJlbW92ZSB0aGlzIGxvZyBtZXNzYWdlIGluIHY0LlxuICAgICAgICAgICAgY29uc3QgdmFsdWVUb0NoZWNrID0gY2FwdHVyZS5zdGFydHNXaXRoKCdodHRwJylcbiAgICAgICAgICAgICAgICA/IGNhcHR1cmVVcmwucGF0aG5hbWVcbiAgICAgICAgICAgICAgICA6IGNhcHR1cmU7XG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3BpbGxhcmpzL3BhdGgtdG8tcmVnZXhwI3BhcmFtZXRlcnNcbiAgICAgICAgICAgIGNvbnN0IHdpbGRjYXJkcyA9ICdbKjo/K10nO1xuICAgICAgICAgICAgaWYgKG5ldyBSZWdFeHAoYCR7d2lsZGNhcmRzfWApLmV4ZWModmFsdWVUb0NoZWNrKSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgVGhlICckY2FwdHVyZScgcGFyYW1ldGVyIGNvbnRhaW5zIGFuIEV4cHJlc3Mtc3R5bGUgd2lsZGNhcmQgYCArXG4gICAgICAgICAgICAgICAgICAgIGBjaGFyYWN0ZXIgKCR7d2lsZGNhcmRzfSkuIFN0cmluZ3MgYXJlIG5vdyBhbHdheXMgaW50ZXJwcmV0ZWQgYXMgYCArXG4gICAgICAgICAgICAgICAgICAgIGBleGFjdCBtYXRjaGVzOyB1c2UgYSBSZWdFeHAgZm9yIHBhcnRpYWwgb3Igd2lsZGNhcmQgbWF0Y2hlcy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXRjaENhbGxiYWNrID0gKHsgdXJsIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVybC5wYXRobmFtZSA9PT0gY2FwdHVyZVVybC5wYXRobmFtZSAmJlxuICAgICAgICAgICAgICAgICAgICB1cmwub3JpZ2luICE9PSBjYXB0dXJlVXJsLm9yaWdpbikge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYCR7Y2FwdHVyZX0gb25seSBwYXJ0aWFsbHkgbWF0Y2hlcyB0aGUgY3Jvc3Mtb3JpZ2luIFVSTCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke3VybC50b1N0cmluZygpfS4gVGhpcyByb3V0ZSB3aWxsIG9ubHkgaGFuZGxlIGNyb3NzLW9yaWdpbiByZXF1ZXN0cyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBpZiB0aGV5IG1hdGNoIHRoZSBlbnRpcmUgVVJMLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1cmwuaHJlZiA9PT0gY2FwdHVyZVVybC5ocmVmO1xuICAgICAgICB9O1xuICAgICAgICAvLyBJZiBgY2FwdHVyZWAgaXMgYSBzdHJpbmcgdGhlbiBgaGFuZGxlcmAgYW5kIGBtZXRob2RgIG11c3QgYmUgcHJlc2VudC5cbiAgICAgICAgcm91dGUgPSBuZXcgUm91dGUobWF0Y2hDYWxsYmFjaywgaGFuZGxlciwgbWV0aG9kKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2FwdHVyZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAvLyBJZiBgY2FwdHVyZWAgaXMgYSBgUmVnRXhwYCB0aGVuIGBoYW5kbGVyYCBhbmQgYG1ldGhvZGAgbXVzdCBiZSBwcmVzZW50LlxuICAgICAgICByb3V0ZSA9IG5ldyBSZWdFeHBSb3V0ZShjYXB0dXJlLCBoYW5kbGVyLCBtZXRob2QpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgY2FwdHVyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBJZiBgY2FwdHVyZWAgaXMgYSBmdW5jdGlvbiB0aGVuIGBoYW5kbGVyYCBhbmQgYG1ldGhvZGAgbXVzdCBiZSBwcmVzZW50LlxuICAgICAgICByb3V0ZSA9IG5ldyBSb3V0ZShjYXB0dXJlLCBoYW5kbGVyLCBtZXRob2QpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjYXB0dXJlIGluc3RhbmNlb2YgUm91dGUpIHtcbiAgICAgICAgcm91dGUgPSBjYXB0dXJlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcigndW5zdXBwb3J0ZWQtcm91dGUtdHlwZScsIHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NhcHR1cmUnLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgZGVmYXVsdFJvdXRlciA9IGdldE9yQ3JlYXRlRGVmYXVsdFJvdXRlcigpO1xuICAgIGRlZmF1bHRSb3V0ZXIucmVnaXN0ZXJSb3V0ZShyb3V0ZSk7XG4gICAgcmV0dXJuIHJvdXRlO1xufVxuZXhwb3J0IHsgcmVnaXN0ZXJSb3V0ZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyIH0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogSWYgYSBSb3V0ZSB0aHJvd3MgYW4gZXJyb3Igd2hpbGUgaGFuZGxpbmcgYSByZXF1ZXN0LCB0aGlzIGBoYW5kbGVyYFxuICogd2lsbCBiZSBjYWxsZWQgYW5kIGdpdmVuIGEgY2hhbmNlIHRvIHByb3ZpZGUgYSByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1yb3V0aW5nXG4gKi9cbmZ1bmN0aW9uIHNldENhdGNoSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgY29uc3QgZGVmYXVsdFJvdXRlciA9IGdldE9yQ3JlYXRlRGVmYXVsdFJvdXRlcigpO1xuICAgIGRlZmF1bHRSb3V0ZXIuc2V0Q2F0Y2hIYW5kbGVyKGhhbmRsZXIpO1xufVxuZXhwb3J0IHsgc2V0Q2F0Y2hIYW5kbGVyIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlRGVmYXVsdFJvdXRlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBEZWZpbmUgYSBkZWZhdWx0IGBoYW5kbGVyYCB0aGF0J3MgY2FsbGVkIHdoZW4gbm8gcm91dGVzIGV4cGxpY2l0bHlcbiAqIG1hdGNoIHRoZSBpbmNvbWluZyByZXF1ZXN0LlxuICpcbiAqIFdpdGhvdXQgYSBkZWZhdWx0IGhhbmRsZXIsIHVubWF0Y2hlZCByZXF1ZXN0cyB3aWxsIGdvIGFnYWluc3QgdGhlXG4gKiBuZXR3b3JrIGFzIGlmIHRoZXJlIHdlcmUgbm8gc2VydmljZSB3b3JrZXIgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1yb3V0aW5nXG4gKi9cbmZ1bmN0aW9uIHNldERlZmF1bHRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBjb25zdCBkZWZhdWx0Um91dGVyID0gZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyKCk7XG4gICAgZGVmYXVsdFJvdXRlci5zZXREZWZhdWx0SGFuZGxlcihoYW5kbGVyKTtcbn1cbmV4cG9ydCB7IHNldERlZmF1bHRIYW5kbGVyIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogVGhlIGRlZmF1bHQgSFRUUCBtZXRob2QsICdHRVQnLCB1c2VkIHdoZW4gdGhlcmUncyBubyBzcGVjaWZpYyBtZXRob2RcbiAqIGNvbmZpZ3VyZWQgZm9yIGEgcm91dGUuXG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgZGVmYXVsdE1ldGhvZCA9ICdHRVQnO1xuLyoqXG4gKiBUaGUgbGlzdCBvZiB2YWxpZCBIVFRQIG1ldGhvZHMgYXNzb2NpYXRlZCB3aXRoIHJlcXVlc3RzIHRoYXQgY291bGQgYmUgcm91dGVkLlxuICpcbiAqIEB0eXBlIHtBcnJheTxzdHJpbmc+fVxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCB2YWxpZE1ldGhvZHMgPSBbXG4gICAgJ0RFTEVURScsXG4gICAgJ0dFVCcsXG4gICAgJ0hFQUQnLFxuICAgICdQQVRDSCcsXG4gICAgJ1BPU1QnLFxuICAgICdQVVQnLFxuXTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL1JvdXRlci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmxldCBkZWZhdWx0Um91dGVyO1xuLyoqXG4gKiBDcmVhdGVzIGEgbmV3LCBzaW5nbGV0b24gUm91dGVyIGluc3RhbmNlIGlmIG9uZSBkb2VzIG5vdCBleGlzdC4gSWYgb25lXG4gKiBkb2VzIGFscmVhZHkgZXhpc3QsIHRoYXQgaW5zdGFuY2UgaXMgcmV0dXJuZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEByZXR1cm4ge1JvdXRlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlRGVmYXVsdFJvdXRlciA9ICgpID0+IHtcbiAgICBpZiAoIWRlZmF1bHRSb3V0ZXIpIHtcbiAgICAgICAgZGVmYXVsdFJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbiAgICAgICAgLy8gVGhlIGhlbHBlcnMgdGhhdCB1c2UgdGhlIGRlZmF1bHQgUm91dGVyIGFzc3VtZSB0aGVzZSBsaXN0ZW5lcnMgZXhpc3QuXG4gICAgICAgIGRlZmF1bHRSb3V0ZXIuYWRkRmV0Y2hMaXN0ZW5lcigpO1xuICAgICAgICBkZWZhdWx0Um91dGVyLmFkZENhY2hlTGlzdGVuZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRSb3V0ZXI7XG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbigpfE9iamVjdH0gaGFuZGxlciBFaXRoZXIgYSBmdW5jdGlvbiwgb3IgYW4gb2JqZWN0IHdpdGggYVxuICogJ2hhbmRsZScgbWV0aG9kLlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2l0aCBhIGhhbmRsZSBtZXRob2QuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUhhbmRsZXIgPSAoaGFuZGxlcikgPT4ge1xuICAgIGlmIChoYW5kbGVyICYmIHR5cGVvZiBoYW5kbGVyID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0Lmhhc01ldGhvZChoYW5kbGVyLCAnaGFuZGxlJywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdoYW5kbGVyJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYW5kbGVyO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc1R5cGUoaGFuZGxlciwgJ2Z1bmN0aW9uJywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdoYW5kbGVyJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGhhbmRsZTogaGFuZGxlciB9O1xuICAgIH1cbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBTdHJhdGVneSB9IGZyb20gJy4vU3RyYXRlZ3kuanMnO1xuaW1wb3J0IHsgbWVzc2FnZXMgfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGEgW2NhY2hlLWZpcnN0XShodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RvY3Mvd29ya2JveC9jYWNoaW5nLXN0cmF0ZWdpZXMtb3ZlcnZpZXcvI2NhY2hlLWZpcnN0LWZhbGxpbmctYmFjay10by1uZXR3b3JrKVxuICogcmVxdWVzdCBzdHJhdGVneS5cbiAqXG4gKiBBIGNhY2hlIGZpcnN0IHN0cmF0ZWd5IGlzIHVzZWZ1bCBmb3IgYXNzZXRzIHRoYXQgaGF2ZSBiZWVuIHJldmlzaW9uZWQsXG4gKiBzdWNoIGFzIFVSTHMgbGlrZSBgL3N0eWxlcy9leGFtcGxlLmE4ZjVmMS5jc3NgLCBzaW5jZSB0aGV5XG4gKiBjYW4gYmUgY2FjaGVkIGZvciBsb25nIHBlcmlvZHMgb2YgdGltZS5cbiAqXG4gKiBJZiB0aGUgbmV0d29yayByZXF1ZXN0IGZhaWxzLCBhbmQgdGhlcmUgaXMgbm8gY2FjaGUgbWF0Y2gsIHRoaXMgd2lsbCB0aHJvd1xuICogYSBgV29ya2JveEVycm9yYCBleGNlcHRpb24uXG4gKlxuICogQGV4dGVuZHMgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5XG4gKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIENhY2hlRmlyc3QgZXh0ZW5kcyBTdHJhdGVneSB7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSByZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHt3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyIFRoZSBldmVudCB0aGF0XG4gICAgICogICAgIHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBfaGFuZGxlKHJlcXVlc3QsIGhhbmRsZXIpIHtcbiAgICAgICAgY29uc3QgbG9ncyA9IFtdO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnbWFrZVJlcXVlc3QnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ3JlcXVlc3QnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5jYWNoZU1hdGNoKHJlcXVlc3QpO1xuICAgICAgICBsZXQgZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBObyByZXNwb25zZSBmb3VuZCBpbiB0aGUgJyR7dGhpcy5jYWNoZU5hbWV9JyBjYWNoZS4gYCArXG4gICAgICAgICAgICAgICAgICAgIGBXaWxsIHJlc3BvbmQgd2l0aCBhIG5ldHdvcmsgcmVxdWVzdC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmZldGNoQW5kQ2FjaGVQdXQocmVxdWVzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ3MucHVzaChgR290IHJlc3BvbnNlIGZyb20gbmV0d29yay5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ3MucHVzaChgVW5hYmxlIHRvIGdldCBhIHJlc3BvbnNlIGZyb20gdGhlIG5ldHdvcmsuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dzLnB1c2goYEZvdW5kIGEgY2FjaGVkIHJlc3BvbnNlIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nIGNhY2hlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQobWVzc2FnZXMuc3RyYXRlZ3lTdGFydCh0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHJlcXVlc3QpKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbG9nIG9mIGxvZ3MpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGxvZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXNzYWdlcy5wcmludEZpbmFsUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7IHVybDogcmVxdWVzdC51cmwsIGVycm9yIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG59XG5leHBvcnQgeyBDYWNoZUZpcnN0IH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBTdHJhdGVneSB9IGZyb20gJy4vU3RyYXRlZ3kuanMnO1xuaW1wb3J0IHsgbWVzc2FnZXMgfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGEgW2NhY2hlLW9ubHldKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L2NhY2hpbmctc3RyYXRlZ2llcy1vdmVydmlldy8jY2FjaGUtb25seSlcbiAqIHJlcXVlc3Qgc3RyYXRlZ3kuXG4gKlxuICogVGhpcyBjbGFzcyBpcyB1c2VmdWwgaWYgeW91IHdhbnQgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgYW55XG4gKiBbV29ya2JveCBwbHVnaW5zXShodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RvY3Mvd29ya2JveC91c2luZy1wbHVnaW5zLykuXG4gKlxuICogSWYgdGhlcmUgaXMgbm8gY2FjaGUgbWF0Y2gsIHRoaXMgd2lsbCB0aHJvdyBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgQ2FjaGVPbmx5IGV4dGVuZHMgU3RyYXRlZ3kge1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gcmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgICAqIEBwYXJhbSB7d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn0gaGFuZGxlciBUaGUgZXZlbnQgdGhhdFxuICAgICAqICAgICB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAgICovXG4gICAgYXN5bmMgX2hhbmRsZShyZXF1ZXN0LCBoYW5kbGVyKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdtYWtlUmVxdWVzdCcsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuY2FjaGVNYXRjaChyZXF1ZXN0KTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChtZXNzYWdlcy5zdHJhdGVneVN0YXJ0KHRoaXMuY29uc3RydWN0b3IubmFtZSwgcmVxdWVzdCkpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfScgYCArIGBjYWNoZS5gKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlcy5wcmludEZpbmFsUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgTm8gcmVzcG9uc2UgZm91bmQgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfScgY2FjaGUuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCduby1yZXNwb25zZScsIHsgdXJsOiByZXF1ZXN0LnVybCB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxufVxuZXhwb3J0IHsgQ2FjaGVPbmx5IH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBjYWNoZU9rQW5kT3BhcXVlUGx1Z2luIH0gZnJvbSAnLi9wbHVnaW5zL2NhY2hlT2tBbmRPcGFxdWVQbHVnaW4uanMnO1xuaW1wb3J0IHsgU3RyYXRlZ3kgfSBmcm9tICcuL1N0cmF0ZWd5LmpzJztcbmltcG9ydCB7IG1lc3NhZ2VzIH0gZnJvbSAnLi91dGlscy9tZXNzYWdlcy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBhXG4gKiBbbmV0d29yayBmaXJzdF0oaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kb2NzL3dvcmtib3gvY2FjaGluZy1zdHJhdGVnaWVzLW92ZXJ2aWV3LyNuZXR3b3JrLWZpcnN0LWZhbGxpbmctYmFjay10by1jYWNoZSlcbiAqIHJlcXVlc3Qgc3RyYXRlZ3kuXG4gKlxuICogQnkgZGVmYXVsdCwgdGhpcyBzdHJhdGVneSB3aWxsIGNhY2hlIHJlc3BvbnNlcyB3aXRoIGEgMjAwIHN0YXR1cyBjb2RlIGFzXG4gKiB3ZWxsIGFzIFtvcGFxdWUgcmVzcG9uc2VzXShodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RvY3Mvd29ya2JveC9jYWNoaW5nLXJlc291cmNlcy1kdXJpbmctcnVudGltZS8jb3BhcXVlLXJlc3BvbnNlcykuXG4gKiBPcGFxdWUgcmVzcG9uc2VzIGFyZSBhcmUgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIHdoZXJlIHRoZSByZXNwb25zZSBkb2Vzbid0XG4gKiBzdXBwb3J0IFtDT1JTXShodHRwczovL2VuYWJsZS1jb3JzLm9yZy8pLlxuICpcbiAqIElmIHRoZSBuZXR3b3JrIHJlcXVlc3QgZmFpbHMsIGFuZCB0aGVyZSBpcyBubyBjYWNoZSBtYXRjaCwgdGhpcyB3aWxsIHRocm93XG4gKiBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgTmV0d29ya0ZpcnN0IGV4dGVuZHMgU3RyYXRlZ3kge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FjaGVOYW1lXSBDYWNoZSBuYW1lIHRvIHN0b3JlIGFuZCByZXRyaWV2ZVxuICAgICAqIHJlcXVlc3RzLiBEZWZhdWx0cyB0byBjYWNoZSBuYW1lcyBwcm92aWRlZCBieVxuICAgICAqIHtAbGluayB3b3JrYm94LWNvcmUuY2FjaGVOYW1lc30uXG4gICAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zXSBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAgICogdG8gdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhpcyBjYWNoaW5nIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5mZXRjaE9wdGlvbnNdIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAgICogW2Bpbml0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvZmV0Y2gjUGFyYW1ldGVycylcbiAgICAgKiBvZiBbbm9uLW5hdmlnYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTc5NilcbiAgICAgKiBgZmV0Y2goKWAgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5tYXRjaE9wdGlvbnNdIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXShodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZGljdGRlZi1jYWNoZXF1ZXJ5b3B0aW9ucylcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubmV0d29ya1RpbWVvdXRTZWNvbmRzXSBJZiBzZXQsIGFueSBuZXR3b3JrIHJlcXVlc3RzXG4gICAgICogdGhhdCBmYWlsIHRvIHJlc3BvbmQgd2l0aGluIHRoZSB0aW1lb3V0IHdpbGwgZmFsbGJhY2sgdG8gdGhlIGNhY2hlLlxuICAgICAqXG4gICAgICogVGhpcyBvcHRpb24gY2FuIGJlIHVzZWQgdG8gY29tYmF0XG4gICAgICogXCJbbGllLWZpXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL3BlcmZvcm1hbmNlL3Bvb3ItY29ubmVjdGl2aXR5LyNsaWUtZml9XCJcbiAgICAgKiBzY2VuYXJpb3MuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICAvLyBJZiB0aGlzIGluc3RhbmNlIGNvbnRhaW5zIG5vIHBsdWdpbnMgd2l0aCBhICdjYWNoZVdpbGxVcGRhdGUnIGNhbGxiYWNrLFxuICAgICAgICAvLyBwcmVwZW5kIHRoZSBgY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbmAgcGx1Z2luIHRvIHRoZSBwbHVnaW5zIGxpc3QuXG4gICAgICAgIGlmICghdGhpcy5wbHVnaW5zLnNvbWUoKHApID0+ICdjYWNoZVdpbGxVcGRhdGUnIGluIHApKSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbnMudW5zaGlmdChjYWNoZU9rQW5kT3BhcXVlUGx1Z2luKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMgPSBvcHRpb25zLm5ldHdvcmtUaW1lb3V0U2Vjb25kcyB8fCAwO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcykge1xuICAgICAgICAgICAgICAgIGFzc2VydC5pc1R5cGUodGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzLCAnbnVtYmVyJywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICduZXR3b3JrVGltZW91dFNlY29uZHMnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gcmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgICAqIEBwYXJhbSB7d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn0gaGFuZGxlciBUaGUgZXZlbnQgdGhhdFxuICAgICAqICAgICB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAgICovXG4gICAgYXN5bmMgX2hhbmRsZShyZXF1ZXN0LCBoYW5kbGVyKSB7XG4gICAgICAgIGNvbnN0IGxvZ3MgPSBbXTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2hhbmRsZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnbWFrZVJlcXVlc3QnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgbGV0IHRpbWVvdXRJZDtcbiAgICAgICAgaWYgKHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcykge1xuICAgICAgICAgICAgY29uc3QgeyBpZCwgcHJvbWlzZSB9ID0gdGhpcy5fZ2V0VGltZW91dFByb21pc2UoeyByZXF1ZXN0LCBsb2dzLCBoYW5kbGVyIH0pO1xuICAgICAgICAgICAgdGltZW91dElkID0gaWQ7XG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ldHdvcmtQcm9taXNlID0gdGhpcy5fZ2V0TmV0d29ya1Byb21pc2Uoe1xuICAgICAgICAgICAgdGltZW91dElkLFxuICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgIGxvZ3MsXG4gICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICB9KTtcbiAgICAgICAgcHJvbWlzZXMucHVzaChuZXR3b3JrUHJvbWlzZSk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci53YWl0VW50aWwoKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIC8vIFByb21pc2UucmFjZSgpIHdpbGwgcmVzb2x2ZSBhcyBzb29uIGFzIHRoZSBmaXJzdCBwcm9taXNlIHJlc29sdmVzLlxuICAgICAgICAgICAgcmV0dXJuICgoYXdhaXQgaGFuZGxlci53YWl0VW50aWwoUHJvbWlzZS5yYWNlKHByb21pc2VzKSkpIHx8XG4gICAgICAgICAgICAgICAgLy8gSWYgUHJvbWlzZS5yYWNlKCkgcmVzb2x2ZWQgd2l0aCBudWxsLCBpdCBtaWdodCBiZSBkdWUgdG8gYSBuZXR3b3JrXG4gICAgICAgICAgICAgICAgLy8gdGltZW91dCArIGEgY2FjaGUgbWlzcy4gSWYgdGhhdCB3ZXJlIHRvIGhhcHBlbiwgd2UnZCByYXRoZXIgd2FpdCB1bnRpbFxuICAgICAgICAgICAgICAgIC8vIHRoZSBuZXR3b3JrUHJvbWlzZSByZXNvbHZlcyBpbnN0ZWFkIG9mIHJldHVybmluZyBudWxsLlxuICAgICAgICAgICAgICAgIC8vIE5vdGUgdGhhdCBpdCdzIGZpbmUgdG8gYXdhaXQgYW4gYWxyZWFkeS1yZXNvbHZlZCBwcm9taXNlLCBzbyB3ZSBkb24ndFxuICAgICAgICAgICAgICAgIC8vIGhhdmUgdG8gY2hlY2sgdG8gc2VlIGlmIGl0J3Mgc3RpbGwgXCJpbiBmbGlnaHRcIi5cbiAgICAgICAgICAgICAgICAoYXdhaXQgbmV0d29ya1Byb21pc2UpKTtcbiAgICAgICAgfSkoKSk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQobWVzc2FnZXMuc3RyYXRlZ3lTdGFydCh0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHJlcXVlc3QpKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbG9nIG9mIGxvZ3MpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGxvZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXNzYWdlcy5wcmludEZpbmFsUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7IHVybDogcmVxdWVzdC51cmwgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0XG4gICAgICogQHBhcmFtIHtBcnJheX0gb3B0aW9ucy5sb2dzIEEgcmVmZXJlbmNlIHRvIHRoZSBsb2dzIGFycmF5XG4gICAgICogQHBhcmFtIHtFdmVudH0gb3B0aW9ucy5ldmVudFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0VGltZW91dFByb21pc2UoeyByZXF1ZXN0LCBsb2dzLCBoYW5kbGVyLCB9KSB7XG4gICAgICAgIGxldCB0aW1lb3V0SWQ7XG4gICAgICAgIGNvbnN0IHRpbWVvdXRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9uTmV0d29ya1RpbWVvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBUaW1pbmcgb3V0IHRoZSBuZXR3b3JrIHJlc3BvbnNlIGF0IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzfSBzZWNvbmRzLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKGF3YWl0IGhhbmRsZXIuY2FjaGVNYXRjaChyZXF1ZXN0KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChvbk5ldHdvcmtUaW1lb3V0LCB0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMgKiAxMDAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9taXNlOiB0aW1lb3V0UHJvbWlzZSxcbiAgICAgICAgICAgIGlkOiB0aW1lb3V0SWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtudW1iZXJ8dW5kZWZpbmVkfSBvcHRpb25zLnRpbWVvdXRJZFxuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0XG4gICAgICogQHBhcmFtIHtBcnJheX0gb3B0aW9ucy5sb2dzIEEgcmVmZXJlbmNlIHRvIHRoZSBsb2dzIEFycmF5LlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IG9wdGlvbnMuZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgX2dldE5ldHdvcmtQcm9taXNlKHsgdGltZW91dElkLCByZXF1ZXN0LCBsb2dzLCBoYW5kbGVyLCB9KSB7XG4gICAgICAgIGxldCBlcnJvcjtcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmZldGNoQW5kQ2FjaGVQdXQocmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGZldGNoRXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChmZXRjaEVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGZldGNoRXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGxvZ3MucHVzaChgR290IHJlc3BvbnNlIGZyb20gbmV0d29yay5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ3MucHVzaChgVW5hYmxlIHRvIGdldCBhIHJlc3BvbnNlIGZyb20gdGhlIG5ldHdvcmsuIFdpbGwgcmVzcG9uZCBgICtcbiAgICAgICAgICAgICAgICAgICAgYHdpdGggYSBjYWNoZWQgcmVzcG9uc2UuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIHx8ICFyZXNwb25zZSkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmNhY2hlTWF0Y2gocmVxdWVzdCk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dzLnB1c2goYEZvdW5kIGEgY2FjaGVkIHJlc3BvbnNlIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nYCArIGAgY2FjaGUuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2dzLnB1c2goYE5vIHJlc3BvbnNlIGZvdW5kIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nIGNhY2hlLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxufVxuZXhwb3J0IHsgTmV0d29ya0ZpcnN0IH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgdGltZW91dCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS90aW1lb3V0LmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHsgU3RyYXRlZ3kgfSBmcm9tICcuL1N0cmF0ZWd5LmpzJztcbmltcG9ydCB7IG1lc3NhZ2VzIH0gZnJvbSAnLi91dGlscy9tZXNzYWdlcy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBhXG4gKiBbbmV0d29yay1vbmx5XShodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RvY3Mvd29ya2JveC9jYWNoaW5nLXN0cmF0ZWdpZXMtb3ZlcnZpZXcvI25ldHdvcmstb25seSlcbiAqIHJlcXVlc3Qgc3RyYXRlZ3kuXG4gKlxuICogVGhpcyBjbGFzcyBpcyB1c2VmdWwgaWYgeW91IHdhbnQgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgYW55XG4gKiBbV29ya2JveCBwbHVnaW5zXShodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RvY3Mvd29ya2JveC91c2luZy1wbHVnaW5zLykuXG4gKlxuICogSWYgdGhlIG5ldHdvcmsgcmVxdWVzdCBmYWlscywgdGhpcyB3aWxsIHRocm93IGEgYFdvcmtib3hFcnJvcmAgZXhjZXB0aW9uLlxuICpcbiAqIEBleHRlbmRzIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneVxuICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBOZXR3b3JrT25seSBleHRlbmRzIFN0cmF0ZWd5IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zXSBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAgICogdG8gdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhpcyBjYWNoaW5nIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5mZXRjaE9wdGlvbnNdIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAgICogW2Bpbml0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvZmV0Y2gjUGFyYW1ldGVycylcbiAgICAgKiBvZiBbbm9uLW5hdmlnYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTc5NilcbiAgICAgKiBgZmV0Y2goKWAgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5uZXR3b3JrVGltZW91dFNlY29uZHNdIElmIHNldCwgYW55IG5ldHdvcmsgcmVxdWVzdHNcbiAgICAgKiB0aGF0IGZhaWwgdG8gcmVzcG9uZCB3aXRoaW4gdGhlIHRpbWVvdXQgd2lsbCByZXN1bHQgaW4gYSBuZXR3b3JrIGVycm9yLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzID0gb3B0aW9ucy5uZXR3b3JrVGltZW91dFNlY29uZHMgfHwgMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSByZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHt3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyIFRoZSBldmVudCB0aGF0XG4gICAgICogICAgIHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBfaGFuZGxlKHJlcXVlc3QsIGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ19oYW5kbGUnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ3JlcXVlc3QnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmZldGNoKHJlcXVlc3QpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lb3V0UHJvbWlzZSA9IHRpbWVvdXQodGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzICogMTAwMCk7XG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aW1lb3V0UHJvbWlzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IFByb21pc2UucmFjZShwcm9taXNlcyk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaW1lZCBvdXQgdGhlIG5ldHdvcmsgcmVzcG9uc2UgYWZ0ZXIgYCArXG4gICAgICAgICAgICAgICAgICAgIGAke3RoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kc30gc2Vjb25kcy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCByZXF1ZXN0KSk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBHb3QgcmVzcG9uc2UgZnJvbSBuZXR3b3JrLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgVW5hYmxlIHRvIGdldCBhIHJlc3BvbnNlIGZyb20gdGhlIG5ldHdvcmsuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXNzYWdlcy5wcmludEZpbmFsUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7IHVybDogcmVxdWVzdC51cmwsIGVycm9yIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG59XG5leHBvcnQgeyBOZXR3b3JrT25seSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHsgY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbiB9IGZyb20gJy4vcGx1Z2lucy9jYWNoZU9rQW5kT3BhcXVlUGx1Z2luLmpzJztcbmltcG9ydCB7IFN0cmF0ZWd5IH0gZnJvbSAnLi9TdHJhdGVneS5qcyc7XG5pbXBvcnQgeyBtZXNzYWdlcyB9IGZyb20gJy4vdXRpbHMvbWVzc2FnZXMuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYVxuICogW3N0YWxlLXdoaWxlLXJldmFsaWRhdGVdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L2NhY2hpbmctc3RyYXRlZ2llcy1vdmVydmlldy8jc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZSlcbiAqIHJlcXVlc3Qgc3RyYXRlZ3kuXG4gKlxuICogUmVzb3VyY2VzIGFyZSByZXF1ZXN0ZWQgZnJvbSBib3RoIHRoZSBjYWNoZSBhbmQgdGhlIG5ldHdvcmsgaW4gcGFyYWxsZWwuXG4gKiBUaGUgc3RyYXRlZ3kgd2lsbCByZXNwb25kIHdpdGggdGhlIGNhY2hlZCB2ZXJzaW9uIGlmIGF2YWlsYWJsZSwgb3RoZXJ3aXNlXG4gKiB3YWl0IGZvciB0aGUgbmV0d29yayByZXNwb25zZS4gVGhlIGNhY2hlIGlzIHVwZGF0ZWQgd2l0aCB0aGUgbmV0d29yayByZXNwb25zZVxuICogd2l0aCBlYWNoIHN1Y2Nlc3NmdWwgcmVxdWVzdC5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGlzIHN0cmF0ZWd5IHdpbGwgY2FjaGUgcmVzcG9uc2VzIHdpdGggYSAyMDAgc3RhdHVzIGNvZGUgYXNcbiAqIHdlbGwgYXMgW29wYXF1ZSByZXNwb25zZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L2NhY2hpbmctcmVzb3VyY2VzLWR1cmluZy1ydW50aW1lLyNvcGFxdWUtcmVzcG9uc2VzKS5cbiAqIE9wYXF1ZSByZXNwb25zZXMgYXJlIGNyb3NzLW9yaWdpbiByZXF1ZXN0cyB3aGVyZSB0aGUgcmVzcG9uc2UgZG9lc24ndFxuICogc3VwcG9ydCBbQ09SU10oaHR0cHM6Ly9lbmFibGUtY29ycy5vcmcvKS5cbiAqXG4gKiBJZiB0aGUgbmV0d29yayByZXF1ZXN0IGZhaWxzLCBhbmQgdGhlcmUgaXMgbm8gY2FjaGUgbWF0Y2gsIHRoaXMgd2lsbCB0aHJvd1xuICogYSBgV29ya2JveEVycm9yYCBleGNlcHRpb24uXG4gKlxuICogQGV4dGVuZHMgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5XG4gKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIFN0YWxlV2hpbGVSZXZhbGlkYXRlIGV4dGVuZHMgU3RyYXRlZ3kge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FjaGVOYW1lXSBDYWNoZSBuYW1lIHRvIHN0b3JlIGFuZCByZXRyaWV2ZVxuICAgICAqIHJlcXVlc3RzLiBEZWZhdWx0cyB0byBjYWNoZSBuYW1lcyBwcm92aWRlZCBieVxuICAgICAqIHtAbGluayB3b3JrYm94LWNvcmUuY2FjaGVOYW1lc30uXG4gICAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zXSBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAgICogdG8gdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhpcyBjYWNoaW5nIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5mZXRjaE9wdGlvbnNdIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAgICogW2Bpbml0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvZmV0Y2gjUGFyYW1ldGVycylcbiAgICAgKiBvZiBbbm9uLW5hdmlnYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTc5NilcbiAgICAgKiBgZmV0Y2goKWAgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5tYXRjaE9wdGlvbnNdIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXShodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZGljdGRlZi1jYWNoZXF1ZXJ5b3B0aW9ucylcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIC8vIElmIHRoaXMgaW5zdGFuY2UgY29udGFpbnMgbm8gcGx1Z2lucyB3aXRoIGEgJ2NhY2hlV2lsbFVwZGF0ZScgY2FsbGJhY2ssXG4gICAgICAgIC8vIHByZXBlbmQgdGhlIGBjYWNoZU9rQW5kT3BhcXVlUGx1Z2luYCBwbHVnaW4gdG8gdGhlIHBsdWdpbnMgbGlzdC5cbiAgICAgICAgaWYgKCF0aGlzLnBsdWdpbnMuc29tZSgocCkgPT4gJ2NhY2hlV2lsbFVwZGF0ZScgaW4gcCkpIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2lucy51bnNoaWZ0KGNhY2hlT2tBbmRPcGFxdWVQbHVnaW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gcmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgICAqIEBwYXJhbSB7d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn0gaGFuZGxlciBUaGUgZXZlbnQgdGhhdFxuICAgICAqICAgICB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAgICovXG4gICAgYXN5bmMgX2hhbmRsZShyZXF1ZXN0LCBoYW5kbGVyKSB7XG4gICAgICAgIGNvbnN0IGxvZ3MgPSBbXTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2hhbmRsZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmZXRjaEFuZENhY2hlUHJvbWlzZSA9IGhhbmRsZXIuZmV0Y2hBbmRDYWNoZVB1dChyZXF1ZXN0KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBTd2FsbG93IHRoaXMgZXJyb3IgYmVjYXVzZSBhICduby1yZXNwb25zZScgZXJyb3Igd2lsbCBiZSB0aHJvd24gaW5cbiAgICAgICAgICAgIC8vIG1haW4gaGFuZGxlciByZXR1cm4gZmxvdy4gVGhpcyB3aWxsIGJlIGluIHRoZSBgd2FpdFVudGlsKClgIGZsb3cuXG4gICAgICAgIH0pO1xuICAgICAgICB2b2lkIGhhbmRsZXIud2FpdFVudGlsKGZldGNoQW5kQ2FjaGVQcm9taXNlKTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5jYWNoZU1hdGNoKHJlcXVlc3QpO1xuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dzLnB1c2goYEZvdW5kIGEgY2FjaGVkIHJlc3BvbnNlIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nYCArXG4gICAgICAgICAgICAgICAgICAgIGAgY2FjaGUuIFdpbGwgdXBkYXRlIHdpdGggdGhlIG5ldHdvcmsgcmVzcG9uc2UgaW4gdGhlIGJhY2tncm91bmQuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ3MucHVzaChgTm8gcmVzcG9uc2UgZm91bmQgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfScgY2FjaGUuIGAgK1xuICAgICAgICAgICAgICAgICAgICBgV2lsbCB3YWl0IGZvciB0aGUgbmV0d29yayByZXNwb25zZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gTk9URShwaGlsaXB3YWx0b24pOiBSZWFsbHkgYW5ub3lpbmcgdGhhdCB3ZSBoYXZlIHRvIHR5cGUgY2FzdCBoZXJlLlxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjAwMDZcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IChhd2FpdCBmZXRjaEFuZENhY2hlUHJvbWlzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCByZXF1ZXN0KSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxvZyBvZiBsb2dzKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhsb2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVzc2FnZXMucHJpbnRGaW5hbFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywgeyB1cmw6IHJlcXVlc3QudXJsLCBlcnJvciB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxufVxuZXhwb3J0IHsgU3RhbGVXaGlsZVJldmFsaWRhdGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGNhY2hlTmFtZXMgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgU3RyYXRlZ3lIYW5kbGVyIH0gZnJvbSAnLi9TdHJhdGVneUhhbmRsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQW4gYWJzdHJhY3QgYmFzZSBjbGFzcyB0aGF0IGFsbCBvdGhlciBzdHJhdGVneSBjbGFzc2VzIG11c3QgZXh0ZW5kIGZyb206XG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBTdHJhdGVneSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgc3RyYXRlZ3kgYW5kIHNldHMgYWxsIGRvY3VtZW50ZWQgb3B0aW9uXG4gICAgICogcHJvcGVydGllcyBhcyBwdWJsaWMgaW5zdGFuY2UgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIE5vdGU6IGlmIGEgY3VzdG9tIHN0cmF0ZWd5IGNsYXNzIGV4dGVuZHMgdGhlIGJhc2UgU3RyYXRlZ3kgY2xhc3MgYW5kIGRvZXNcbiAgICAgKiBub3QgbmVlZCBtb3JlIHRoYW4gdGhlc2UgcHJvcGVydGllcywgaXQgZG9lcyBub3QgbmVlZCB0byBkZWZpbmUgaXRzIG93blxuICAgICAqIGNvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYWNoZU5hbWVdIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIHRoZSBjYWNoZSBuYW1lcyBwcm92aWRlZCBieVxuICAgICAqIHtAbGluayB3b3JrYm94LWNvcmUuY2FjaGVOYW1lc30uXG4gICAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zXSBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAgICogdG8gdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhpcyBjYWNoaW5nIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5mZXRjaE9wdGlvbnNdIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAgICogW2Bpbml0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvZmV0Y2gjUGFyYW1ldGVycylcbiAgICAgKiBvZiBbbm9uLW5hdmlnYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTc5NilcbiAgICAgKiBgZmV0Y2goKWAgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5tYXRjaE9wdGlvbnNdIFRoZVxuICAgICAqIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXXtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZGljdGRlZi1jYWNoZXF1ZXJ5b3B0aW9uc31cbiAgICAgKiBmb3IgYW55IGBjYWNoZS5tYXRjaCgpYCBvciBgY2FjaGUucHV0KClgIGNhbGxzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAgICAgICAqIHJlcXVlc3RzLiBEZWZhdWx0cyB0byB0aGUgY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICAgICAgICoge0BsaW5rIHdvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2FjaGVOYW1lID0gY2FjaGVOYW1lcy5nZXRSdW50aW1lTmFtZShvcHRpb25zLmNhY2hlTmFtZSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbGlzdFxuICAgICAgICAgKiBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAgICAgICAqIHVzZWQgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0FycmF5PE9iamVjdD59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBsdWdpbnMgPSBvcHRpb25zLnBsdWdpbnMgfHwgW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgICAgICAgKiBbYGluaXRgXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzfVxuICAgICAgICAgKiBvZiBhbGwgZmV0Y2goKSByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZldGNoT3B0aW9ucyA9IG9wdGlvbnMuZmV0Y2hPcHRpb25zO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlXG4gICAgICAgICAqIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXXtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZGljdGRlZi1jYWNoZXF1ZXJ5b3B0aW9uc31cbiAgICAgICAgICogZm9yIGFueSBgY2FjaGUubWF0Y2goKWAgb3IgYGNhY2hlLnB1dCgpYCBjYWxscyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1hdGNoT3B0aW9ucyA9IG9wdGlvbnMubWF0Y2hPcHRpb25zO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIGEgcmVxdWVzdCBzdHJhdGVneSBhbmQgcmV0dXJucyBhIGBQcm9taXNlYCB0aGF0IHdpbGwgcmVzb2x2ZSB3aXRoXG4gICAgICogYSBgUmVzcG9uc2VgLCBpbnZva2luZyBhbGwgcmVsZXZhbnQgcGx1Z2luIGNhbGxiYWNrcy5cbiAgICAgKlxuICAgICAqIFdoZW4gYSBzdHJhdGVneSBpbnN0YW5jZSBpcyByZWdpc3RlcmVkIHdpdGggYSBXb3JrYm94XG4gICAgICoge0BsaW5rIHdvcmtib3gtcm91dGluZy5Sb3V0ZX0sIHRoaXMgbWV0aG9kIGlzIGF1dG9tYXRpY2FsbHlcbiAgICAgKiBjYWxsZWQgd2hlbiB0aGUgcm91dGUgbWF0Y2hlcy5cbiAgICAgKlxuICAgICAqIEFsdGVybmF0aXZlbHksIHRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIGluIGEgc3RhbmRhbG9uZSBgRmV0Y2hFdmVudGBcbiAgICAgKiBsaXN0ZW5lciBieSBwYXNzaW5nIGl0IHRvIGBldmVudC5yZXNwb25kV2l0aCgpYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RmV0Y2hFdmVudHxPYmplY3R9IG9wdGlvbnMgQSBgRmV0Y2hFdmVudGAgb3IgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICogICAgIHByb3BlcnRpZXMgbGlzdGVkIGJlbG93LlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IG9wdGlvbnMucmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgICAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBvcHRpb25zLmV2ZW50IFRoZSBldmVudCBhc3NvY2lhdGVkIHdpdGggdGhlXG4gICAgICogICAgIHJlcXVlc3QuXG4gICAgICogQHBhcmFtIHtVUkx9IFtvcHRpb25zLnVybF1cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zLnBhcmFtc11cbiAgICAgKi9cbiAgICBoYW5kbGUob3B0aW9ucykge1xuICAgICAgICBjb25zdCBbcmVzcG9uc2VEb25lXSA9IHRoaXMuaGFuZGxlQWxsKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VEb25lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTaW1pbGFyIHRvIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3l+aGFuZGxlfSwgYnV0XG4gICAgICogaW5zdGVhZCBvZiBqdXN0IHJldHVybmluZyBhIGBQcm9taXNlYCB0aGF0IHJlc29sdmVzIHRvIGEgYFJlc3BvbnNlYCBpdFxuICAgICAqIGl0IHdpbGwgcmV0dXJuIGFuIHR1cGxlIG9mIGBbcmVzcG9uc2UsIGRvbmVdYCBwcm9taXNlcywgd2hlcmUgdGhlIGZvcm1lclxuICAgICAqIChgcmVzcG9uc2VgKSBpcyBlcXVpdmFsZW50IHRvIHdoYXQgYGhhbmRsZSgpYCByZXR1cm5zLCBhbmQgdGhlIGxhdHRlciBpcyBhXG4gICAgICogUHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbmNlIGFueSBwcm9taXNlcyB0aGF0IHdlcmUgYWRkZWQgdG9cbiAgICAgKiBgZXZlbnQud2FpdFVudGlsKClgIGFzIHBhcnQgb2YgcGVyZm9ybWluZyB0aGUgc3RyYXRlZ3kgaGF2ZSBjb21wbGV0ZWQuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIGF3YWl0IHRoZSBgZG9uZWAgcHJvbWlzZSB0byBlbnN1cmUgYW55IGV4dHJhIHdvcmsgcGVyZm9ybWVkIGJ5XG4gICAgICogdGhlIHN0cmF0ZWd5ICh1c3VhbGx5IGNhY2hpbmcgcmVzcG9uc2VzKSBjb21wbGV0ZXMgc3VjY2Vzc2Z1bGx5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGZXRjaEV2ZW50fE9iamVjdH0gb3B0aW9ucyBBIGBGZXRjaEV2ZW50YCBvciBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgKiAgICAgcHJvcGVydGllcyBsaXN0ZWQgYmVsb3cuXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAgICAgKiAgICAgcmVxdWVzdC5cbiAgICAgKiBAcGFyYW0ge1VSTH0gW29wdGlvbnMudXJsXVxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnMucGFyYW1zXVxuICAgICAqIEByZXR1cm4ge0FycmF5PFByb21pc2U+fSBBIHR1cGxlIG9mIFtyZXNwb25zZSwgZG9uZV1cbiAgICAgKiAgICAgcHJvbWlzZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBkZXRlcm1pbmUgd2hlbiB0aGUgcmVzcG9uc2UgcmVzb2x2ZXMgYXNcbiAgICAgKiAgICAgd2VsbCBhcyB3aGVuIHRoZSBoYW5kbGVyIGhhcyBjb21wbGV0ZWQgYWxsIGl0cyB3b3JrLlxuICAgICAqL1xuICAgIGhhbmRsZUFsbChvcHRpb25zKSB7XG4gICAgICAgIC8vIEFsbG93IGZvciBmbGV4aWJsZSBvcHRpb25zIHRvIGJlIHBhc3NlZC5cbiAgICAgICAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBGZXRjaEV2ZW50KSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGV2ZW50OiBvcHRpb25zLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IG9wdGlvbnMucmVxdWVzdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXZlbnQgPSBvcHRpb25zLmV2ZW50O1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdHlwZW9mIG9wdGlvbnMucmVxdWVzdCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgID8gbmV3IFJlcXVlc3Qob3B0aW9ucy5yZXF1ZXN0KVxuICAgICAgICAgICAgOiBvcHRpb25zLnJlcXVlc3Q7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9ICdwYXJhbXMnIGluIG9wdGlvbnMgPyBvcHRpb25zLnBhcmFtcyA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IG5ldyBTdHJhdGVneUhhbmRsZXIodGhpcywgeyBldmVudCwgcmVxdWVzdCwgcGFyYW1zIH0pO1xuICAgICAgICBjb25zdCByZXNwb25zZURvbmUgPSB0aGlzLl9nZXRSZXNwb25zZShoYW5kbGVyLCByZXF1ZXN0LCBldmVudCk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJEb25lID0gdGhpcy5fYXdhaXRDb21wbGV0ZShyZXNwb25zZURvbmUsIGhhbmRsZXIsIHJlcXVlc3QsIGV2ZW50KTtcbiAgICAgICAgLy8gUmV0dXJuIGFuIGFycmF5IG9mIHByb21pc2VzLCBzdWl0YWJsZSBmb3IgdXNlIHdpdGggUHJvbWlzZS5hbGwoKS5cbiAgICAgICAgcmV0dXJuIFtyZXNwb25zZURvbmUsIGhhbmRsZXJEb25lXTtcbiAgICB9XG4gICAgYXN5bmMgX2dldFJlc3BvbnNlKGhhbmRsZXIsIHJlcXVlc3QsIGV2ZW50KSB7XG4gICAgICAgIGF3YWl0IGhhbmRsZXIucnVuQ2FsbGJhY2tzKCdoYW5kbGVyV2lsbFN0YXJ0JywgeyBldmVudCwgcmVxdWVzdCB9KTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gdW5kZWZpbmVkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9oYW5kbGUocmVxdWVzdCwgaGFuZGxlcik7XG4gICAgICAgICAgICAvLyBUaGUgXCJvZmZpY2lhbFwiIFN0cmF0ZWd5IHN1YmNsYXNzZXMgYWxsIHRocm93IHRoaXMgZXJyb3IgYXV0b21hdGljYWxseSxcbiAgICAgICAgICAgIC8vIGJ1dCBpbiBjYXNlIGEgdGhpcmQtcGFydHkgU3RyYXRlZ3kgZG9lc24ndCwgZW5zdXJlIHRoYXQgd2UgaGF2ZSBhXG4gICAgICAgICAgICAvLyBjb25zaXN0ZW50IGZhaWx1cmUgd2hlbiB0aGVyZSdzIG5vIHJlc3BvbnNlIG9yIGFuIGVycm9yIHJlc3BvbnNlLlxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7IHVybDogcmVxdWVzdC51cmwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgaGFuZGxlci5pdGVyYXRlQ2FsbGJhY2tzKCdoYW5kbGVyRGlkRXJyb3InKSkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGNhbGxiYWNrKHsgZXJyb3IsIGV2ZW50LCByZXF1ZXN0IH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYFdoaWxlIHJlc3BvbmRpbmcgdG8gJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfScsIGAgK1xuICAgICAgICAgICAgICAgICAgICBgYW4gJHtlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IudG9TdHJpbmcoKSA6ICcnfSBlcnJvciBvY2N1cnJlZC4gVXNpbmcgYSBmYWxsYmFjayByZXNwb25zZSBwcm92aWRlZCBieSBgICtcbiAgICAgICAgICAgICAgICAgICAgYGEgaGFuZGxlckRpZEVycm9yIHBsdWdpbi5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIGhhbmRsZXIuaXRlcmF0ZUNhbGxiYWNrcygnaGFuZGxlcldpbGxSZXNwb25kJykpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgY2FsbGJhY2soeyBldmVudCwgcmVxdWVzdCwgcmVzcG9uc2UgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICBhc3luYyBfYXdhaXRDb21wbGV0ZShyZXNwb25zZURvbmUsIGhhbmRsZXIsIHJlcXVlc3QsIGV2ZW50KSB7XG4gICAgICAgIGxldCByZXNwb25zZTtcbiAgICAgICAgbGV0IGVycm9yO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZURvbmU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgZXJyb3JzLCBhcyByZXNwb25zZSBlcnJvcnMgc2hvdWxkIGJlIGNhdWdodCB2aWEgdGhlIGByZXNwb25zZWBcbiAgICAgICAgICAgIC8vIHByb21pc2UgYWJvdmUuIFRoZSBgZG9uZWAgcHJvbWlzZSB3aWxsIG9ubHkgdGhyb3cgZm9yIGVycm9ycyBpblxuICAgICAgICAgICAgLy8gcHJvbWlzZXMgcGFzc2VkIHRvIGBoYW5kbGVyLndhaXRVbnRpbCgpYC5cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgaGFuZGxlci5ydW5DYWxsYmFja3MoJ2hhbmRsZXJEaWRSZXNwb25kJywge1xuICAgICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZXIuZG9uZVdhaXRpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAod2FpdFVudGlsRXJyb3IpIHtcbiAgICAgICAgICAgIGlmICh3YWl0VW50aWxFcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSB3YWl0VW50aWxFcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBoYW5kbGVyLnJ1bkNhbGxiYWNrcygnaGFuZGxlckRpZENvbXBsZXRlJywge1xuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgIH0pO1xuICAgICAgICBoYW5kbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCB7IFN0cmF0ZWd5IH07XG4vKipcbiAqIENsYXNzZXMgZXh0ZW5kaW5nIHRoZSBgU3RyYXRlZ3lgIGJhc2VkIGNsYXNzIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QsXG4gKiBhbmQgbGV2ZXJhZ2UgdGhlIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfVxuICogYXJnIHRvIHBlcmZvcm0gYWxsIGZldGNoaW5nIGFuZCBjYWNoZSBsb2dpYywgd2hpY2ggd2lsbCBlbnN1cmUgYWxsIHJlbGV2YW50XG4gKiBjYWNoZSwgY2FjaGUgb3B0aW9ucywgZmV0Y2ggb3B0aW9ucyBhbmQgcGx1Z2lucyBhcmUgdXNlZCAocGVyIHRoZSBjdXJyZW50XG4gKiBzdHJhdGVneSBpbnN0YW5jZSkuXG4gKlxuICogQG5hbWUgX2hhbmRsZVxuICogQGluc3RhbmNlXG4gKiBAYWJzdHJhY3RcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gKiBAcGFyYW0ge3dvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9IGhhbmRsZXJcbiAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqL1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBjYWNoZU1hdGNoSWdub3JlUGFyYW1zIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTWF0Y2hJZ25vcmVQYXJhbXMuanMnO1xuaW1wb3J0IHsgRGVmZXJyZWQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvRGVmZXJyZWQuanMnO1xuaW1wb3J0IHsgZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL3RpbWVvdXQuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuZnVuY3Rpb24gdG9SZXF1ZXN0KGlucHV0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgPyBuZXcgUmVxdWVzdChpbnB1dCkgOiBpbnB1dDtcbn1cbi8qKlxuICogQSBjbGFzcyBjcmVhdGVkIGV2ZXJ5IHRpbWUgYSBTdHJhdGVneSBpbnN0YW5jZSBpbnN0YW5jZSBjYWxsc1xuICoge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneX5oYW5kbGV9IG9yXG4gKiB7QGxpbmsgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5fmhhbmRsZUFsbH0gdGhhdCB3cmFwcyBhbGwgZmV0Y2ggYW5kXG4gKiBjYWNoZSBhY3Rpb25zIGFyb3VuZCBwbHVnaW4gY2FsbGJhY2tzIGFuZCBrZWVwcyB0cmFjayBvZiB3aGVuIHRoZSBzdHJhdGVneVxuICogaXMgXCJkb25lXCIgKGkuZS4gYWxsIGFkZGVkIGBldmVudC53YWl0VW50aWwoKWAgcHJvbWlzZXMgaGF2ZSByZXNvbHZlZCkuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBTdHJhdGVneUhhbmRsZXIge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBwYXNzZWQgc3RyYXRlZ3kgYW5kIGV2ZW50XG4gICAgICogdGhhdCdzIGhhbmRsaW5nIHRoZSByZXF1ZXN0LlxuICAgICAqXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIGFsc28gaW5pdGlhbGl6ZXMgdGhlIHN0YXRlIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gZWFjaCBvZlxuICAgICAqIHRoZSBwbHVnaW5zIGhhbmRsaW5nIHRoaXMgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5fSBzdHJhdGVneVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAgICAgKiAgICAgcmVxdWVzdC5cbiAgICAgKiBAcGFyYW0ge1VSTH0gW29wdGlvbnMudXJsXVxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnMucGFyYW1zXSBUaGUgcmV0dXJuIHZhbHVlIGZyb20gdGhlXG4gICAgICogICAgIHtAbGluayB3b3JrYm94LXJvdXRpbmd+bWF0Y2hDYWxsYmFja30gKGlmIGFwcGxpY2FibGUpLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHN0cmF0ZWd5LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlS2V5cyA9IHt9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJlcXVlc3QgdGhlIHN0cmF0ZWd5IGlzIHBlcmZvcm1pbmcgKHBhc3NlZCB0byB0aGUgc3RyYXRlZ3knc1xuICAgICAgICAgKiBgaGFuZGxlKClgIG9yIGBoYW5kbGVBbGwoKWAgbWV0aG9kKS5cbiAgICAgICAgICogQG5hbWUgcmVxdWVzdFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUge1JlcXVlc3R9XG4gICAgICAgICAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyXG4gICAgICAgICAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIHJlcXVlc3QuXG4gICAgICAgICAqIEBuYW1lIGV2ZW50XG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSB7RXh0ZW5kYWJsZUV2ZW50fVxuICAgICAgICAgKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlclxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYFVSTGAgaW5zdGFuY2Ugb2YgYHJlcXVlc3QudXJsYCAoaWYgcGFzc2VkIHRvIHRoZSBzdHJhdGVneSdzXG4gICAgICAgICAqIGBoYW5kbGUoKWAgb3IgYGhhbmRsZUFsbCgpYCBtZXRob2QpLlxuICAgICAgICAgKiBOb3RlOiB0aGUgYHVybGAgcGFyYW0gd2lsbCBiZSBwcmVzZW50IGlmIHRoZSBzdHJhdGVneSB3YXMgaW52b2tlZFxuICAgICAgICAgKiBmcm9tIGEgd29ya2JveCBgUm91dGVgIG9iamVjdC5cbiAgICAgICAgICogQG5hbWUgdXJsXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSB7VVJMfHVuZGVmaW5lZH1cbiAgICAgICAgICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJcbiAgICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGBwYXJhbWAgdmFsdWUgKGlmIHBhc3NlZCB0byB0aGUgc3RyYXRlZ3knc1xuICAgICAgICAgKiBgaGFuZGxlKClgIG9yIGBoYW5kbGVBbGwoKWAgbWV0aG9kKS5cbiAgICAgICAgICogTm90ZTogdGhlIGBwYXJhbWAgcGFyYW0gd2lsbCBiZSBwcmVzZW50IGlmIHRoZSBzdHJhdGVneSB3YXMgaW52b2tlZFxuICAgICAgICAgKiBmcm9tIGEgd29ya2JveCBgUm91dGVgIG9iamVjdCBhbmQgdGhlXG4gICAgICAgICAqIHtAbGluayB3b3JrYm94LXJvdXRpbmd+bWF0Y2hDYWxsYmFja30gcmV0dXJuZWRcbiAgICAgICAgICogYSB0cnV0aHkgdmFsdWUgKGl0IHdpbGwgYmUgdGhhdCB2YWx1ZSkuXG4gICAgICAgICAqIEBuYW1lIHBhcmFtc1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgeyp8dW5kZWZpbmVkfVxuICAgICAgICAgKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlclxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKG9wdGlvbnMuZXZlbnQsIEV4dGVuZGFibGVFdmVudCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1N0cmF0ZWd5SGFuZGxlcicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnb3B0aW9ucy5ldmVudCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmV2ZW50ID0gb3B0aW9ucy5ldmVudDtcbiAgICAgICAgdGhpcy5fc3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgICAgICAgdGhpcy5faGFuZGxlckRlZmVycmVkID0gbmV3IERlZmVycmVkKCk7XG4gICAgICAgIHRoaXMuX2V4dGVuZExpZmV0aW1lUHJvbWlzZXMgPSBbXTtcbiAgICAgICAgLy8gQ29weSB0aGUgcGx1Z2lucyBsaXN0IChzaW5jZSBpdCdzIG11dGFibGUgb24gdGhlIHN0cmF0ZWd5KSxcbiAgICAgICAgLy8gc28gYW55IG11dGF0aW9ucyBkb24ndCBhZmZlY3QgdGhpcyBoYW5kbGVyIGluc3RhbmNlLlxuICAgICAgICB0aGlzLl9wbHVnaW5zID0gWy4uLnN0cmF0ZWd5LnBsdWdpbnNdO1xuICAgICAgICB0aGlzLl9wbHVnaW5TdGF0ZU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgdGhpcy5fcGx1Z2lucykge1xuICAgICAgICAgICAgdGhpcy5fcGx1Z2luU3RhdGVNYXAuc2V0KHBsdWdpbiwge30pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXZlbnQud2FpdFVudGlsKHRoaXMuX2hhbmRsZXJEZWZlcnJlZC5wcm9taXNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRmV0Y2hlcyBhIGdpdmVuIHJlcXVlc3QgKGFuZCBpbnZva2VzIGFueSBhcHBsaWNhYmxlIHBsdWdpbiBjYWxsYmFja1xuICAgICAqIG1ldGhvZHMpIHVzaW5nIHRoZSBgZmV0Y2hPcHRpb25zYCAoZm9yIG5vbi1uYXZpZ2F0aW9uIHJlcXVlc3RzKSBhbmRcbiAgICAgKiBgcGx1Z2luc2AgZGVmaW5lZCBvbiB0aGUgYFN0cmF0ZWd5YCBvYmplY3QuXG4gICAgICpcbiAgICAgKiBUaGUgZm9sbG93aW5nIHBsdWdpbiBsaWZlY3ljbGUgbWV0aG9kcyBhcmUgaW52b2tlZCB3aGVuIHVzaW5nIHRoaXMgbWV0aG9kOlxuICAgICAqIC0gYHJlcXVlc3RXaWxsRmV0Y2goKWBcbiAgICAgKiAtIGBmZXRjaERpZFN1Y2NlZWQoKWBcbiAgICAgKiAtIGBmZXRjaERpZEZhaWwoKWBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IGlucHV0IFRoZSBVUkwgb3IgcmVxdWVzdCB0byBmZXRjaC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBmZXRjaChpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGV2ZW50IH0gPSB0aGlzO1xuICAgICAgICBsZXQgcmVxdWVzdCA9IHRvUmVxdWVzdChpbnB1dCk7XG4gICAgICAgIGlmIChyZXF1ZXN0Lm1vZGUgPT09ICduYXZpZ2F0ZScgJiZcbiAgICAgICAgICAgIGV2ZW50IGluc3RhbmNlb2YgRmV0Y2hFdmVudCAmJlxuICAgICAgICAgICAgZXZlbnQucHJlbG9hZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NzaWJsZVByZWxvYWRSZXNwb25zZSA9IChhd2FpdCBldmVudC5wcmVsb2FkUmVzcG9uc2UpO1xuICAgICAgICAgICAgaWYgKHBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgVXNpbmcgYSBwcmVsb2FkZWQgbmF2aWdhdGlvbiByZXNwb25zZSBmb3IgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfSdgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgZmV0Y2hEaWRGYWlsIHBsdWdpbiwgd2UgbmVlZCB0byBzYXZlIGEgY2xvbmUgb2YgdGhlXG4gICAgICAgIC8vIG9yaWdpbmFsIHJlcXVlc3QgYmVmb3JlIGl0J3MgZWl0aGVyIG1vZGlmaWVkIGJ5IGEgcmVxdWVzdFdpbGxGZXRjaFxuICAgICAgICAvLyBwbHVnaW4gb3IgYmVmb3JlIHRoZSBvcmlnaW5hbCByZXF1ZXN0J3MgYm9keSBpcyBjb25zdW1lZCB2aWEgZmV0Y2goKS5cbiAgICAgICAgY29uc3Qgb3JpZ2luYWxSZXF1ZXN0ID0gdGhpcy5oYXNDYWxsYmFjaygnZmV0Y2hEaWRGYWlsJylcbiAgICAgICAgICAgID8gcmVxdWVzdC5jbG9uZSgpXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNiIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcygncmVxdWVzdFdpbGxGZXRjaCcpKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdCA9IGF3YWl0IGNiKHsgcmVxdWVzdDogcmVxdWVzdC5jbG9uZSgpLCBldmVudCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoJywge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd25FcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSByZXF1ZXN0IGNhbiBiZSBhbHRlcmVkIGJ5IHBsdWdpbnMgd2l0aCBgcmVxdWVzdFdpbGxGZXRjaGAgbWFraW5nXG4gICAgICAgIC8vIHRoZSBvcmlnaW5hbCByZXF1ZXN0IChtb3N0IGxpa2VseSBmcm9tIGEgYGZldGNoYCBldmVudCkgZGlmZmVyZW50XG4gICAgICAgIC8vIGZyb20gdGhlIFJlcXVlc3Qgd2UgbWFrZS4gUGFzcyBib3RoIHRvIGBmZXRjaERpZEZhaWxgIHRvIGFpZCBkZWJ1Z2dpbmcuXG4gICAgICAgIGNvbnN0IHBsdWdpbkZpbHRlcmVkUmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBmZXRjaFJlc3BvbnNlO1xuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTc5NlxuICAgICAgICAgICAgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QsIHJlcXVlc3QubW9kZSA9PT0gJ25hdmlnYXRlJyA/IHVuZGVmaW5lZCA6IHRoaXMuX3N0cmF0ZWd5LmZldGNoT3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgTmV0d29yayByZXF1ZXN0IGZvciBgICtcbiAgICAgICAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nIHJldHVybmVkIGEgcmVzcG9uc2Ugd2l0aCBgICtcbiAgICAgICAgICAgICAgICAgICAgYHN0YXR1cyAnJHtmZXRjaFJlc3BvbnNlLnN0YXR1c30nLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2ZldGNoRGlkU3VjY2VlZCcpKSB7XG4gICAgICAgICAgICAgICAgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHBsdWdpbkZpbHRlcmVkUmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IGZldGNoUmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgTmV0d29yayByZXF1ZXN0IGZvciBgICtcbiAgICAgICAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nIHRocmV3IGFuIGVycm9yLmAsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGBvcmlnaW5hbFJlcXVlc3RgIHdpbGwgb25seSBleGlzdCBpZiBhIGBmZXRjaERpZEZhaWxgIGNhbGxiYWNrXG4gICAgICAgICAgICAvLyBpcyBiZWluZyB1c2VkIChzZWUgYWJvdmUpLlxuICAgICAgICAgICAgaWYgKG9yaWdpbmFsUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucnVuQ2FsbGJhY2tzKCdmZXRjaERpZEZhaWwnLCB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsUmVxdWVzdDogb3JpZ2luYWxSZXF1ZXN0LmNsb25lKCksXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHBsdWdpbkZpbHRlcmVkUmVxdWVzdC5jbG9uZSgpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbHMgYHRoaXMuZmV0Y2goKWAgYW5kIChpbiB0aGUgYmFja2dyb3VuZCkgcnVucyBgdGhpcy5jYWNoZVB1dCgpYCBvblxuICAgICAqIHRoZSByZXNwb25zZSBnZW5lcmF0ZWQgYnkgYHRoaXMuZmV0Y2goKWAuXG4gICAgICpcbiAgICAgKiBUaGUgY2FsbCB0byBgdGhpcy5jYWNoZVB1dCgpYCBhdXRvbWF0aWNhbGx5IGludm9rZXMgYHRoaXMud2FpdFVudGlsKClgLFxuICAgICAqIHNvIHlvdSBkbyBub3QgaGF2ZSB0byBtYW51YWxseSBjYWxsIGB3YWl0VW50aWwoKWAgb24gdGhlIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gaW5wdXQgVGhlIHJlcXVlc3Qgb3IgVVJMIHRvIGZldGNoIGFuZCBjYWNoZS5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBmZXRjaEFuZENhY2hlUHV0KGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mZXRjaChpbnB1dCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlQ2xvbmUgPSByZXNwb25zZS5jbG9uZSgpO1xuICAgICAgICB2b2lkIHRoaXMud2FpdFVudGlsKHRoaXMuY2FjaGVQdXQoaW5wdXQsIHJlc3BvbnNlQ2xvbmUpKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNYXRjaGVzIGEgcmVxdWVzdCBmcm9tIHRoZSBjYWNoZSAoYW5kIGludm9rZXMgYW55IGFwcGxpY2FibGUgcGx1Z2luXG4gICAgICogY2FsbGJhY2sgbWV0aG9kcykgdXNpbmcgdGhlIGBjYWNoZU5hbWVgLCBgbWF0Y2hPcHRpb25zYCwgYW5kIGBwbHVnaW5zYFxuICAgICAqIGRlZmluZWQgb24gdGhlIHN0cmF0ZWd5IG9iamVjdC5cbiAgICAgKlxuICAgICAqIFRoZSBmb2xsb3dpbmcgcGx1Z2luIGxpZmVjeWNsZSBtZXRob2RzIGFyZSBpbnZva2VkIHdoZW4gdXNpbmcgdGhpcyBtZXRob2Q6XG4gICAgICogLSBjYWNoZUtleVdpbGxCeVVzZWQoKVxuICAgICAqIC0gY2FjaGVkUmVzcG9uc2VXaWxsQnlVc2VkKClcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IGtleSBUaGUgUmVxdWVzdCBvciBVUkwgdG8gdXNlIGFzIHRoZSBjYWNoZSBrZXkuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZXx1bmRlZmluZWQ+fSBBIG1hdGNoaW5nIHJlc3BvbnNlLCBpZiBmb3VuZC5cbiAgICAgKi9cbiAgICBhc3luYyBjYWNoZU1hdGNoKGtleSkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdG9SZXF1ZXN0KGtleSk7XG4gICAgICAgIGxldCBjYWNoZWRSZXNwb25zZTtcbiAgICAgICAgY29uc3QgeyBjYWNoZU5hbWUsIG1hdGNoT3B0aW9ucyB9ID0gdGhpcy5fc3RyYXRlZ3k7XG4gICAgICAgIGNvbnN0IGVmZmVjdGl2ZVJlcXVlc3QgPSBhd2FpdCB0aGlzLmdldENhY2hlS2V5KHJlcXVlc3QsICdyZWFkJyk7XG4gICAgICAgIGNvbnN0IG11bHRpTWF0Y2hPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBtYXRjaE9wdGlvbnMpLCB7IGNhY2hlTmFtZSB9KTtcbiAgICAgICAgY2FjaGVkUmVzcG9uc2UgPSBhd2FpdCBjYWNoZXMubWF0Y2goZWZmZWN0aXZlUmVxdWVzdCwgbXVsdGlNYXRjaE9wdGlvbnMpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBGb3VuZCBhIGNhY2hlZCByZXNwb25zZSBpbiAnJHtjYWNoZU5hbWV9Jy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgTm8gY2FjaGVkIHJlc3BvbnNlIGZvdW5kIGluICcke2NhY2hlTmFtZX0nLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdjYWNoZWRSZXNwb25zZVdpbGxCZVVzZWQnKSkge1xuICAgICAgICAgICAgY2FjaGVkUmVzcG9uc2UgPVxuICAgICAgICAgICAgICAgIChhd2FpdCBjYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICBjYWNoZWRSZXNwb25zZSxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogZWZmZWN0aXZlUmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgICAgICAgICAgfSkpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FjaGVkUmVzcG9uc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1dHMgYSByZXF1ZXN0L3Jlc3BvbnNlIHBhaXIgaW4gdGhlIGNhY2hlIChhbmQgaW52b2tlcyBhbnkgYXBwbGljYWJsZVxuICAgICAqIHBsdWdpbiBjYWxsYmFjayBtZXRob2RzKSB1c2luZyB0aGUgYGNhY2hlTmFtZWAgYW5kIGBwbHVnaW5zYCBkZWZpbmVkIG9uXG4gICAgICogdGhlIHN0cmF0ZWd5IG9iamVjdC5cbiAgICAgKlxuICAgICAqIFRoZSBmb2xsb3dpbmcgcGx1Z2luIGxpZmVjeWNsZSBtZXRob2RzIGFyZSBpbnZva2VkIHdoZW4gdXNpbmcgdGhpcyBtZXRob2Q6XG4gICAgICogLSBjYWNoZUtleVdpbGxCeVVzZWQoKVxuICAgICAqIC0gY2FjaGVXaWxsVXBkYXRlKClcbiAgICAgKiAtIGNhY2hlRGlkVXBkYXRlKClcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IGtleSBUaGUgcmVxdWVzdCBvciBVUkwgdG8gdXNlIGFzIHRoZSBjYWNoZSBrZXkuXG4gICAgICogQHBhcmFtIHtSZXNwb25zZX0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlIHRvIGNhY2hlLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IGBmYWxzZWAgaWYgYSBjYWNoZVdpbGxVcGRhdGUgY2F1c2VkIHRoZSByZXNwb25zZVxuICAgICAqIG5vdCBiZSBjYWNoZWQsIGFuZCBgdHJ1ZWAgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGFzeW5jIGNhY2hlUHV0KGtleSwgcmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRvUmVxdWVzdChrZXkpO1xuICAgICAgICAvLyBSdW4gaW4gdGhlIG5leHQgdGFzayB0byBhdm9pZCBibG9ja2luZyBvdGhlciBjYWNoZSByZWFkcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3czYy9TZXJ2aWNlV29ya2VyL2lzc3Vlcy8xMzk3XG4gICAgICAgIGF3YWl0IHRpbWVvdXQoMCk7XG4gICAgICAgIGNvbnN0IGVmZmVjdGl2ZVJlcXVlc3QgPSBhd2FpdCB0aGlzLmdldENhY2hlS2V5KHJlcXVlc3QsICd3cml0ZScpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKGVmZmVjdGl2ZVJlcXVlc3QubWV0aG9kICYmIGVmZmVjdGl2ZVJlcXVlc3QubWV0aG9kICE9PSAnR0VUJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2F0dGVtcHQtdG8tY2FjaGUtbm9uLWdldC1yZXF1ZXN0Jywge1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGdldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBlZmZlY3RpdmVSZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzI4MThcbiAgICAgICAgICAgIGNvbnN0IHZhcnkgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnVmFyeScpO1xuICAgICAgICAgICAgaWYgKHZhcnkpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYFRoZSByZXNwb25zZSBmb3IgJHtnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCl9IGAgK1xuICAgICAgICAgICAgICAgICAgICBgaGFzIGEgJ1Zhcnk6ICR7dmFyeX0nIGhlYWRlci4gYCArXG4gICAgICAgICAgICAgICAgICAgIGBDb25zaWRlciBzZXR0aW5nIHRoZSB7aWdub3JlVmFyeTogdHJ1ZX0gb3B0aW9uIG9uIHlvdXIgc3RyYXRlZ3kgYCArXG4gICAgICAgICAgICAgICAgICAgIGB0byBlbnN1cmUgY2FjaGUgbWF0Y2hpbmcgYW5kIGRlbGV0aW9uIHdvcmtzIGFzIGV4cGVjdGVkLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBDYW5ub3QgY2FjaGUgbm9uLWV4aXN0ZW50IHJlc3BvbnNlIGZvciBgICtcbiAgICAgICAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0nLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignY2FjaGUtcHV0LXdpdGgtbm8tcmVzcG9uc2UnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiBnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNwb25zZVRvQ2FjaGUgPSBhd2FpdCB0aGlzLl9lbnN1cmVSZXNwb25zZVNhZmVUb0NhY2hlKHJlc3BvbnNlKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZVRvQ2FjaGUpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBSZXNwb25zZSAnJHtnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCl9JyBgICtcbiAgICAgICAgICAgICAgICAgICAgYHdpbGwgbm90IGJlIGNhY2hlZC5gLCByZXNwb25zZVRvQ2FjaGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgY2FjaGVOYW1lLCBtYXRjaE9wdGlvbnMgfSA9IHRoaXMuX3N0cmF0ZWd5O1xuICAgICAgICBjb25zdCBjYWNoZSA9IGF3YWl0IHNlbGYuY2FjaGVzLm9wZW4oY2FjaGVOYW1lKTtcbiAgICAgICAgY29uc3QgaGFzQ2FjaGVVcGRhdGVDYWxsYmFjayA9IHRoaXMuaGFzQ2FsbGJhY2soJ2NhY2hlRGlkVXBkYXRlJyk7XG4gICAgICAgIGNvbnN0IG9sZFJlc3BvbnNlID0gaGFzQ2FjaGVVcGRhdGVDYWxsYmFja1xuICAgICAgICAgICAgPyBhd2FpdCBjYWNoZU1hdGNoSWdub3JlUGFyYW1zKFxuICAgICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiB0aGUgYF9fV0JfUkVWSVNJT05fX2AgcGFyYW0gaXMgYSBwcmVjYWNoaW5nXG4gICAgICAgICAgICAvLyBmZWF0dXJlLiBDb25zaWRlciBpbnRvIHdheXMgdG8gb25seSBhZGQgdGhpcyBiZWhhdmlvciBpZiB1c2luZ1xuICAgICAgICAgICAgLy8gcHJlY2FjaGluZy5cbiAgICAgICAgICAgIGNhY2hlLCBlZmZlY3RpdmVSZXF1ZXN0LmNsb25lKCksIFsnX19XQl9SRVZJU0lPTl9fJ10sIG1hdGNoT3B0aW9ucylcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgVXBkYXRpbmcgdGhlICcke2NhY2hlTmFtZX0nIGNhY2hlIHdpdGggYSBuZXcgUmVzcG9uc2UgYCArXG4gICAgICAgICAgICAgICAgYGZvciAke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGNhY2hlLnB1dChlZmZlY3RpdmVSZXF1ZXN0LCBoYXNDYWNoZVVwZGF0ZUNhbGxiYWNrID8gcmVzcG9uc2VUb0NhY2hlLmNsb25lKCkgOiByZXNwb25zZVRvQ2FjaGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTUV4Y2VwdGlvbiNleGNlcHRpb24tUXVvdGFFeGNlZWRlZEVycm9yXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdjYWNoZURpZFVwZGF0ZScpKSB7XG4gICAgICAgICAgICBhd2FpdCBjYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lLFxuICAgICAgICAgICAgICAgIG9sZFJlc3BvbnNlLFxuICAgICAgICAgICAgICAgIG5ld1Jlc3BvbnNlOiByZXNwb25zZVRvQ2FjaGUuY2xvbmUoKSxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiBlZmZlY3RpdmVSZXF1ZXN0LFxuICAgICAgICAgICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrcyB0aGUgbGlzdCBvZiBwbHVnaW5zIGZvciB0aGUgYGNhY2hlS2V5V2lsbEJlVXNlZGAgY2FsbGJhY2ssIGFuZFxuICAgICAqIGV4ZWN1dGVzIGFueSBvZiB0aG9zZSBjYWxsYmFja3MgZm91bmQgaW4gc2VxdWVuY2UuIFRoZSBmaW5hbCBgUmVxdWVzdGBcbiAgICAgKiBvYmplY3QgcmV0dXJuZWQgYnkgdGhlIGxhc3QgcGx1Z2luIGlzIHRyZWF0ZWQgYXMgdGhlIGNhY2hlIGtleSBmb3IgY2FjaGVcbiAgICAgKiByZWFkcyBhbmQvb3Igd3JpdGVzLiBJZiBubyBgY2FjaGVLZXlXaWxsQmVVc2VkYCBwbHVnaW4gY2FsbGJhY2tzIGhhdmVcbiAgICAgKiBiZWVuIHJlZ2lzdGVyZWQsIHRoZSBwYXNzZWQgcmVxdWVzdCBpcyByZXR1cm5lZCB1bm1vZGlmaWVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R9IHJlcXVlc3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVxdWVzdD59XG4gICAgICovXG4gICAgYXN5bmMgZ2V0Q2FjaGVLZXkocmVxdWVzdCwgbW9kZSkge1xuICAgICAgICBjb25zdCBrZXkgPSBgJHtyZXF1ZXN0LnVybH0gfCAke21vZGV9YDtcbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZUtleXNba2V5XSkge1xuICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZVJlcXVlc3QgPSByZXF1ZXN0O1xuICAgICAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2NhY2hlS2V5V2lsbEJlVXNlZCcpKSB7XG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlUmVxdWVzdCA9IHRvUmVxdWVzdChhd2FpdCBjYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IGVmZmVjdGl2ZVJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXJhbXMgaGFzIGEgdHlwZSBhbnkgY2FuJ3QgY2hhbmdlIHJpZ2h0IG5vdy5cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnBhcmFtcywgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5c1trZXldID0gZWZmZWN0aXZlUmVxdWVzdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVLZXlzW2tleV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3RyYXRlZ3kgaGFzIGF0IGxlYXN0IG9uZSBwbHVnaW4gd2l0aCB0aGUgZ2l2ZW5cbiAgICAgKiBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjYWxsYmFjayB0byBjaGVjayBmb3IuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNDYWxsYmFjayhuYW1lKSB7XG4gICAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHRoaXMuX3N0cmF0ZWd5LnBsdWdpbnMpIHtcbiAgICAgICAgICAgIGlmIChuYW1lIGluIHBsdWdpbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUnVucyBhbGwgcGx1Z2luIGNhbGxiYWNrcyBtYXRjaGluZyB0aGUgZ2l2ZW4gbmFtZSwgaW4gb3JkZXIsIHBhc3NpbmcgdGhlXG4gICAgICogZ2l2ZW4gcGFyYW0gb2JqZWN0IChtZXJnZWQgaXRoIHRoZSBjdXJyZW50IHBsdWdpbiBzdGF0ZSkgYXMgdGhlIG9ubHlcbiAgICAgKiBhcmd1bWVudC5cbiAgICAgKlxuICAgICAqIE5vdGU6IHNpbmNlIHRoaXMgbWV0aG9kIHJ1bnMgYWxsIHBsdWdpbnMsIGl0J3Mgbm90IHN1aXRhYmxlIGZvciBjYXNlc1xuICAgICAqIHdoZXJlIHRoZSByZXR1cm4gdmFsdWUgb2YgYSBjYWxsYmFjayBuZWVkcyB0byBiZSBhcHBsaWVkIHByaW9yIHRvIGNhbGxpbmdcbiAgICAgKiB0aGUgbmV4dCBjYWxsYmFjay4gU2VlXG4gICAgICoge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXIjaXRlcmF0ZUNhbGxiYWNrc31cbiAgICAgKiBiZWxvdyBmb3IgaG93IHRvIGhhbmRsZSB0aGF0IGNhc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY2FsbGJhY2sgdG8gcnVuIHdpdGhpbiBlYWNoIHBsdWdpbi5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0gVGhlIG9iamVjdCB0byBwYXNzIGFzIHRoZSBmaXJzdCAoYW5kIG9ubHkpIHBhcmFtXG4gICAgICogICAgIHdoZW4gZXhlY3V0aW5nIGVhY2ggY2FsbGJhY2suIFRoaXMgb2JqZWN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlXG4gICAgICogICAgIGN1cnJlbnQgcGx1Z2luIHN0YXRlIHByaW9yIHRvIGNhbGxiYWNrIGV4ZWN1dGlvbi5cbiAgICAgKi9cbiAgICBhc3luYyBydW5DYWxsYmFja3MobmFtZSwgcGFyYW0pIHtcbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MobmFtZSkpIHtcbiAgICAgICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogbm90IHN1cmUgd2h5IGBhbnlgIGlzIG5lZWRlZC4gSXQgc2VlbXMgbGlrZVxuICAgICAgICAgICAgLy8gdGhpcyBzaG91bGQgd29yayB3aXRoIGBhcyBXb3JrYm94UGx1Z2luQ2FsbGJhY2tQYXJhbVtDXWAuXG4gICAgICAgICAgICBhd2FpdCBjYWxsYmFjayhwYXJhbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQWNjZXB0cyBhIGNhbGxiYWNrIGFuZCByZXR1cm5zIGFuIGl0ZXJhYmxlIG9mIG1hdGNoaW5nIHBsdWdpbiBjYWxsYmFja3MsXG4gICAgICogd2hlcmUgZWFjaCBjYWxsYmFjayBpcyB3cmFwcGVkIHdpdGggdGhlIGN1cnJlbnQgaGFuZGxlciBzdGF0ZSAoaS5lLiB3aGVuXG4gICAgICogeW91IGNhbGwgZWFjaCBjYWxsYmFjaywgd2hhdGV2ZXIgb2JqZWN0IHBhcmFtZXRlciB5b3UgcGFzcyBpdCB3aWxsXG4gICAgICogYmUgbWVyZ2VkIHdpdGggdGhlIHBsdWdpbidzIGN1cnJlbnQgc3RhdGUpLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgZm8gdGhlIGNhbGxiYWNrIHRvIHJ1blxuICAgICAqIEByZXR1cm4ge0FycmF5PEZ1bmN0aW9uPn1cbiAgICAgKi9cbiAgICAqaXRlcmF0ZUNhbGxiYWNrcyhuYW1lKSB7XG4gICAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHRoaXMuX3N0cmF0ZWd5LnBsdWdpbnMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGx1Z2luW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9wbHVnaW5TdGF0ZU1hcC5nZXQocGx1Z2luKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZWZ1bENhbGxiYWNrID0gKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlZnVsUGFyYW0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHBhcmFtKSwgeyBzdGF0ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBub3Qgc3VyZSB3aHkgYGFueWAgaXMgbmVlZGVkLiBJdCBzZWVtcyBsaWtlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgc2hvdWxkIHdvcmsgd2l0aCBgYXMgV29ya2JveFBsdWdpbkNhbGxiYWNrUGFyYW1bQ11gLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGx1Z2luW25hbWVdKHN0YXRlZnVsUGFyYW0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeWllbGQgc3RhdGVmdWxDYWxsYmFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgcHJvbWlzZSB0byB0aGVcbiAgICAgKiBbZXh0ZW5kIGxpZmV0aW1lIHByb21pc2VzXXtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZXh0ZW5kYWJsZWV2ZW50LWV4dGVuZC1saWZldGltZS1wcm9taXNlc31cbiAgICAgKiBvZiB0aGUgZXZlbnQgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSByZXF1ZXN0IGJlaW5nIGhhbmRsZWQgKHVzdWFsbHkgYVxuICAgICAqIGBGZXRjaEV2ZW50YCkuXG4gICAgICpcbiAgICAgKiBOb3RlOiB5b3UgY2FuIGF3YWl0XG4gICAgICoge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ+ZG9uZVdhaXRpbmd9XG4gICAgICogdG8ga25vdyB3aGVuIGFsbCBhZGRlZCBwcm9taXNlcyBoYXZlIHNldHRsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Byb21pc2V9IHByb21pc2UgQSBwcm9taXNlIHRvIGFkZCB0byB0aGUgZXh0ZW5kIGxpZmV0aW1lIHByb21pc2VzXG4gICAgICogICAgIG9mIHRoZSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICAgKi9cbiAgICB3YWl0VW50aWwocHJvbWlzZSkge1xuICAgICAgICB0aGlzLl9leHRlbmRMaWZldGltZVByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uY2UgYWxsIHByb21pc2VzIHBhc3NlZCB0b1xuICAgICAqIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfndhaXRVbnRpbH1cbiAgICAgKiBoYXZlIHNldHRsZWQuXG4gICAgICpcbiAgICAgKiBOb3RlOiBhbnkgd29yayBkb25lIGFmdGVyIGBkb25lV2FpdGluZygpYCBzZXR0bGVzIHNob3VsZCBiZSBtYW51YWxseVxuICAgICAqIHBhc3NlZCB0byBhbiBldmVudCdzIGB3YWl0VW50aWwoKWAgbWV0aG9kIChub3QgdGhpcyBoYW5kbGVyJ3NcbiAgICAgKiBgd2FpdFVudGlsKClgIG1ldGhvZCksIG90aGVyd2lzZSB0aGUgc2VydmljZSB3b3JrZXIgdGhyZWFkIG15IGJlIGtpbGxlZFxuICAgICAqIHByaW9yIHRvIHlvdXIgd29yayBjb21wbGV0aW5nLlxuICAgICAqL1xuICAgIGFzeW5jIGRvbmVXYWl0aW5nKCkge1xuICAgICAgICBsZXQgcHJvbWlzZTtcbiAgICAgICAgd2hpbGUgKChwcm9taXNlID0gdGhpcy5fZXh0ZW5kTGlmZXRpbWVQcm9taXNlcy5zaGlmdCgpKSkge1xuICAgICAgICAgICAgYXdhaXQgcHJvbWlzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdG9wcyBydW5uaW5nIHRoZSBzdHJhdGVneSBhbmQgaW1tZWRpYXRlbHkgcmVzb2x2ZXMgYW55IHBlbmRpbmdcbiAgICAgKiBgd2FpdFVudGlsKClgIHByb21pc2VzLlxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJEZWZlcnJlZC5yZXNvbHZlKG51bGwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIGNhbGwgY2FjaGVXaWxsVXBkYXRlIG9uIHRoZSBhdmFpbGFibGUgcGx1Z2lucyAob3IgdXNlXG4gICAgICogc3RhdHVzID09PSAyMDApIHRvIGRldGVybWluZSBpZiB0aGUgUmVzcG9uc2UgaXMgc2FmZSBhbmQgdmFsaWQgdG8gY2FjaGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdFxuICAgICAqIEBwYXJhbSB7UmVzcG9uc2V9IG9wdGlvbnMucmVzcG9uc2VcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlfHVuZGVmaW5lZD59XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIF9lbnN1cmVSZXNwb25zZVNhZmVUb0NhY2hlKHJlc3BvbnNlKSB7XG4gICAgICAgIGxldCByZXNwb25zZVRvQ2FjaGUgPSByZXNwb25zZTtcbiAgICAgICAgbGV0IHBsdWdpbnNVc2VkID0gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdjYWNoZVdpbGxVcGRhdGUnKSkge1xuICAgICAgICAgICAgcmVzcG9uc2VUb0NhY2hlID1cbiAgICAgICAgICAgICAgICAoYXdhaXQgY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiB0aGlzLnJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiByZXNwb25zZVRvQ2FjaGUsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgICAgICAgICAgIH0pKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICBwbHVnaW5zVXNlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlVG9DYWNoZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghcGx1Z2luc1VzZWQpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUgJiYgcmVzcG9uc2VUb0NhY2hlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUb0NhY2hlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VUb0NhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUuc3RhdHVzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oYFRoZSByZXNwb25zZSBmb3IgJyR7dGhpcy5yZXF1ZXN0LnVybH0nIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaXMgYW4gb3BhcXVlIHJlc3BvbnNlLiBUaGUgY2FjaGluZyBzdHJhdGVneSB0aGF0IHlvdSdyZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHVzaW5nIHdpbGwgbm90IGNhY2hlIG9wYXF1ZSByZXNwb25zZXMgYnkgZGVmYXVsdC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgVGhlIHJlc3BvbnNlIGZvciAnJHt0aGlzLnJlcXVlc3QudXJsfScgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGByZXR1cm5lZCBhIHN0YXR1cyBjb2RlIG9mICcke3Jlc3BvbnNlLnN0YXR1c30nIGFuZCB3b24ndCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGJlIGNhY2hlZCBhcyBhIHJlc3VsdC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2VUb0NhY2hlO1xuICAgIH1cbn1cbmV4cG9ydCB7IFN0cmF0ZWd5SGFuZGxlciB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBAdHMtaWdub3JlXG50cnkge1xuICAgIHNlbGZbJ3dvcmtib3g6c3RyYXRlZ2llczo2LjUuMyddICYmIF8oKTtcbn1cbmNhdGNoIChlKSB7IH1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IENhY2hlRmlyc3QgfSBmcm9tICcuL0NhY2hlRmlyc3QuanMnO1xuaW1wb3J0IHsgQ2FjaGVPbmx5IH0gZnJvbSAnLi9DYWNoZU9ubHkuanMnO1xuaW1wb3J0IHsgTmV0d29ya0ZpcnN0IH0gZnJvbSAnLi9OZXR3b3JrRmlyc3QuanMnO1xuaW1wb3J0IHsgTmV0d29ya09ubHkgfSBmcm9tICcuL05ldHdvcmtPbmx5LmpzJztcbmltcG9ydCB7IFN0YWxlV2hpbGVSZXZhbGlkYXRlIH0gZnJvbSAnLi9TdGFsZVdoaWxlUmV2YWxpZGF0ZS5qcyc7XG5pbXBvcnQgeyBTdHJhdGVneSB9IGZyb20gJy4vU3RyYXRlZ3kuanMnO1xuaW1wb3J0IHsgU3RyYXRlZ3lIYW5kbGVyIH0gZnJvbSAnLi9TdHJhdGVneUhhbmRsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogVGhlcmUgYXJlIGNvbW1vbiBjYWNoaW5nIHN0cmF0ZWdpZXMgdGhhdCBtb3N0IHNlcnZpY2Ugd29ya2VycyB3aWxsIG5lZWRcbiAqIGFuZCB1c2UuIFRoaXMgbW9kdWxlIHByb3ZpZGVzIHNpbXBsZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlc2Ugc3RyYXRlZ2llcy5cbiAqXG4gKiBAbW9kdWxlIHdvcmtib3gtc3RyYXRlZ2llc1xuICovXG5leHBvcnQgeyBDYWNoZUZpcnN0LCBDYWNoZU9ubHksIE5ldHdvcmtGaXJzdCwgTmV0d29ya09ubHksIFN0YWxlV2hpbGVSZXZhbGlkYXRlLCBTdHJhdGVneSwgU3RyYXRlZ3lIYW5kbGVyLCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5leHBvcnQgY29uc3QgY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbiA9IHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdmFsaWQgcmVzcG9uc2UgKHRvIGFsbG93IGNhY2hpbmcpIGlmIHRoZSBzdGF0dXMgaXMgMjAwIChPSykgb3JcbiAgICAgKiAwIChvcGFxdWUpLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSBvcHRpb25zLnJlc3BvbnNlXG4gICAgICogQHJldHVybiB7UmVzcG9uc2V8bnVsbH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY2FjaGVXaWxsVXBkYXRlOiBhc3luYyAoeyByZXNwb25zZSB9KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5leHBvcnQgY29uc3QgbWVzc2FnZXMgPSB7XG4gICAgc3RyYXRlZ3lTdGFydDogKHN0cmF0ZWd5TmFtZSwgcmVxdWVzdCkgPT4gYFVzaW5nICR7c3RyYXRlZ3lOYW1lfSB0byByZXNwb25kIHRvICcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nYCxcbiAgICBwcmludEZpbmFsUmVzcG9uc2U6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyB0aGUgZmluYWwgcmVzcG9uc2UgaGVyZS5gKTtcbiAgICAgICAgICAgIGxvZ2dlci5sb2cocmVzcG9uc2UgfHwgJ1tObyByZXNwb25zZSByZXR1cm5lZF0nKTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICB9XG4gICAgfSxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL2luZGV4LmpzJzsiLCJleHBvcnQgKiBmcm9tICcuL2luZGV4LmpzJzsiLCJleHBvcnQgKiBmcm9tICcuL2luZGV4LmpzJzsiLCJleHBvcnQgKiBmcm9tICcuL2luZGV4LmpzJzsiLCJleHBvcnQgKiBmcm9tICcuL2luZGV4LmpzJzsiLCJpbXBvcnQgeyB3IGFzIHdyYXAsIHIgYXMgcmVwbGFjZVRyYXBzIH0gZnJvbSAnLi93cmFwLWlkYi12YWx1ZS5qcyc7XG5leHBvcnQgeyB1IGFzIHVud3JhcCwgdyBhcyB3cmFwIH0gZnJvbSAnLi93cmFwLWlkYi12YWx1ZS5qcyc7XG5cbi8qKlxuICogT3BlbiBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICogQHBhcmFtIHZlcnNpb24gU2NoZW1hIHZlcnNpb24uXG4gKiBAcGFyYW0gY2FsbGJhY2tzIEFkZGl0aW9uYWwgY2FsbGJhY2tzLlxuICovXG5mdW5jdGlvbiBvcGVuREIobmFtZSwgdmVyc2lvbiwgeyBibG9ja2VkLCB1cGdyYWRlLCBibG9ja2luZywgdGVybWluYXRlZCB9ID0ge30pIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4obmFtZSwgdmVyc2lvbik7XG4gICAgY29uc3Qgb3BlblByb21pc2UgPSB3cmFwKHJlcXVlc3QpO1xuICAgIGlmICh1cGdyYWRlKSB7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigndXBncmFkZW5lZWRlZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdXBncmFkZSh3cmFwKHJlcXVlc3QucmVzdWx0KSwgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgd3JhcChyZXF1ZXN0LnRyYW5zYWN0aW9uKSwgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJsb2NrZWQpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKGV2ZW50KSA9PiBibG9ja2VkKFxuICAgICAgICAvLyBDYXN0aW5nIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQtRE9NLWxpYi1nZW5lcmF0b3IvcHVsbC8xNDA1XG4gICAgICAgIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIGV2ZW50KSk7XG4gICAgfVxuICAgIG9wZW5Qcm9taXNlXG4gICAgICAgIC50aGVuKChkYikgPT4ge1xuICAgICAgICBpZiAodGVybWluYXRlZClcbiAgICAgICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4gdGVybWluYXRlZCgpKTtcbiAgICAgICAgaWYgKGJsb2NraW5nKSB7XG4gICAgICAgICAgICBkYi5hZGRFdmVudExpc3RlbmVyKCd2ZXJzaW9uY2hhbmdlJywgKGV2ZW50KSA9PiBibG9ja2luZyhldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCBldmVudCkpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgcmV0dXJuIG9wZW5Qcm9taXNlO1xufVxuLyoqXG4gKiBEZWxldGUgYSBkYXRhYmFzZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAqL1xuZnVuY3Rpb24gZGVsZXRlREIobmFtZSwgeyBibG9ja2VkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIuZGVsZXRlRGF0YWJhc2UobmFtZSk7XG4gICAgaWYgKGJsb2NrZWQpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKGV2ZW50KSA9PiBibG9ja2VkKFxuICAgICAgICAvLyBDYXN0aW5nIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQtRE9NLWxpYi1nZW5lcmF0b3IvcHVsbC8xNDA1XG4gICAgICAgIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50KSk7XG4gICAgfVxuICAgIHJldHVybiB3cmFwKHJlcXVlc3QpLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcbn1cblxuY29uc3QgcmVhZE1ldGhvZHMgPSBbJ2dldCcsICdnZXRLZXknLCAnZ2V0QWxsJywgJ2dldEFsbEtleXMnLCAnY291bnQnXTtcbmNvbnN0IHdyaXRlTWV0aG9kcyA9IFsncHV0JywgJ2FkZCcsICdkZWxldGUnLCAnY2xlYXInXTtcbmNvbnN0IGNhY2hlZE1ldGhvZHMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB7XG4gICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSURCRGF0YWJhc2UgJiZcbiAgICAgICAgIShwcm9wIGluIHRhcmdldCkgJiZcbiAgICAgICAgdHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjYWNoZWRNZXRob2RzLmdldChwcm9wKSlcbiAgICAgICAgcmV0dXJuIGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApO1xuICAgIGNvbnN0IHRhcmdldEZ1bmNOYW1lID0gcHJvcC5yZXBsYWNlKC9Gcm9tSW5kZXgkLywgJycpO1xuICAgIGNvbnN0IHVzZUluZGV4ID0gcHJvcCAhPT0gdGFyZ2V0RnVuY05hbWU7XG4gICAgY29uc3QgaXNXcml0ZSA9IHdyaXRlTWV0aG9kcy5pbmNsdWRlcyh0YXJnZXRGdW5jTmFtZSk7XG4gICAgaWYgKFxuICAgIC8vIEJhaWwgaWYgdGhlIHRhcmdldCBkb2Vzbid0IGV4aXN0IG9uIHRoZSB0YXJnZXQuIEVnLCBnZXRBbGwgaXNuJ3QgaW4gRWRnZS5cbiAgICAhKHRhcmdldEZ1bmNOYW1lIGluICh1c2VJbmRleCA/IElEQkluZGV4IDogSURCT2JqZWN0U3RvcmUpLnByb3RvdHlwZSkgfHxcbiAgICAgICAgIShpc1dyaXRlIHx8IHJlYWRNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtZXRob2QgPSBhc3luYyBmdW5jdGlvbiAoc3RvcmVOYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIC8vIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6IHVuZGVmaW5lZCBnemlwcHMgYmV0dGVyLCBidXQgZmFpbHMgaW4gRWRnZSA6KFxuICAgICAgICBjb25zdCB0eCA9IHRoaXMudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCBpc1dyaXRlID8gJ3JlYWR3cml0ZScgOiAncmVhZG9ubHknKTtcbiAgICAgICAgbGV0IHRhcmdldCA9IHR4LnN0b3JlO1xuICAgICAgICBpZiAodXNlSW5kZXgpXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQuaW5kZXgoYXJncy5zaGlmdCgpKTtcbiAgICAgICAgLy8gTXVzdCByZWplY3QgaWYgb3AgcmVqZWN0cy5cbiAgICAgICAgLy8gSWYgaXQncyBhIHdyaXRlIG9wZXJhdGlvbiwgbXVzdCByZWplY3QgaWYgdHguZG9uZSByZWplY3RzLlxuICAgICAgICAvLyBNdXN0IHJlamVjdCB3aXRoIG9wIHJlamVjdGlvbiBmaXJzdC5cbiAgICAgICAgLy8gTXVzdCByZXNvbHZlIHdpdGggb3AgdmFsdWUuXG4gICAgICAgIC8vIE11c3QgaGFuZGxlIGJvdGggcHJvbWlzZXMgKG5vIHVuaGFuZGxlZCByZWplY3Rpb25zKVxuICAgICAgICByZXR1cm4gKGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRhcmdldFt0YXJnZXRGdW5jTmFtZV0oLi4uYXJncyksXG4gICAgICAgICAgICBpc1dyaXRlICYmIHR4LmRvbmUsXG4gICAgICAgIF0pKVswXTtcbiAgICB9O1xuICAgIGNhY2hlZE1ldGhvZHMuc2V0KHByb3AsIG1ldGhvZCk7XG4gICAgcmV0dXJuIG1ldGhvZDtcbn1cbnJlcGxhY2VUcmFwcygob2xkVHJhcHMpID0+ICh7XG4gICAgLi4ub2xkVHJhcHMsXG4gICAgZ2V0OiAodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikgPT4gZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpLFxuICAgIGhhczogKHRhcmdldCwgcHJvcCkgPT4gISFnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5oYXModGFyZ2V0LCBwcm9wKSxcbn0pKTtcblxuZXhwb3J0IHsgZGVsZXRlREIsIG9wZW5EQiB9O1xuIiwiY29uc3QgaW5zdGFuY2VPZkFueSA9IChvYmplY3QsIGNvbnN0cnVjdG9ycykgPT4gY29uc3RydWN0b3JzLnNvbWUoKGMpID0+IG9iamVjdCBpbnN0YW5jZW9mIGMpO1xuXG5sZXQgaWRiUHJveHlhYmxlVHlwZXM7XG5sZXQgY3Vyc29yQWR2YW5jZU1ldGhvZHM7XG4vLyBUaGlzIGlzIGEgZnVuY3Rpb24gdG8gcHJldmVudCBpdCB0aHJvd2luZyB1cCBpbiBub2RlIGVudmlyb25tZW50cy5cbmZ1bmN0aW9uIGdldElkYlByb3h5YWJsZVR5cGVzKCkge1xuICAgIHJldHVybiAoaWRiUHJveHlhYmxlVHlwZXMgfHxcbiAgICAgICAgKGlkYlByb3h5YWJsZVR5cGVzID0gW1xuICAgICAgICAgICAgSURCRGF0YWJhc2UsXG4gICAgICAgICAgICBJREJPYmplY3RTdG9yZSxcbiAgICAgICAgICAgIElEQkluZGV4LFxuICAgICAgICAgICAgSURCQ3Vyc29yLFxuICAgICAgICAgICAgSURCVHJhbnNhY3Rpb24sXG4gICAgICAgIF0pKTtcbn1cbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKSB7XG4gICAgcmV0dXJuIChjdXJzb3JBZHZhbmNlTWV0aG9kcyB8fFxuICAgICAgICAoY3Vyc29yQWR2YW5jZU1ldGhvZHMgPSBbXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmFkdmFuY2UsXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlLFxuICAgICAgICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5jb250aW51ZVByaW1hcnlLZXksXG4gICAgICAgIF0pKTtcbn1cbmNvbnN0IGN1cnNvclJlcXVlc3RNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNhY3Rpb25Eb25lTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zYWN0aW9uU3RvcmVOYW1lc01hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgICAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHdyYXAocmVxdWVzdC5yZXN1bHQpKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgc3VjY2Vzcyk7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgfSk7XG4gICAgcHJvbWlzZVxuICAgICAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgLy8gU2luY2UgY3Vyc29yaW5nIHJldXNlcyB0aGUgSURCUmVxdWVzdCAoKnNpZ2gqKSwgd2UgY2FjaGUgaXQgZm9yIGxhdGVyIHJldHJpZXZhbFxuICAgICAgICAvLyAoc2VlIHdyYXBGdW5jdGlvbikuXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQkN1cnNvcikge1xuICAgICAgICAgICAgY3Vyc29yUmVxdWVzdE1hcC5zZXQodmFsdWUsIHJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhdGNoaW5nIHRvIGF2b2lkIFwiVW5jYXVnaHQgUHJvbWlzZSBleGNlcHRpb25zXCJcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAvLyBUaGlzIG1hcHBpbmcgZXhpc3RzIGluIHJldmVyc2VUcmFuc2Zvcm1DYWNoZSBidXQgZG9lc24ndCBkb2Vzbid0IGV4aXN0IGluIHRyYW5zZm9ybUNhY2hlLiBUaGlzXG4gICAgLy8gaXMgYmVjYXVzZSB3ZSBjcmVhdGUgbWFueSBwcm9taXNlcyBmcm9tIGEgc2luZ2xlIElEQlJlcXVlc3QuXG4gICAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChwcm9taXNlLCByZXF1ZXN0KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih0eCkge1xuICAgIC8vIEVhcmx5IGJhaWwgaWYgd2UndmUgYWxyZWFkeSBjcmVhdGVkIGEgZG9uZSBwcm9taXNlIGZvciB0aGlzIHRyYW5zYWN0aW9uLlxuICAgIGlmICh0cmFuc2FjdGlvbkRvbmVNYXAuaGFzKHR4KSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGRvbmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHR4LmVycm9yIHx8IG5ldyBET01FeGNlcHRpb24oJ0Fib3J0RXJyb3InLCAnQWJvcnRFcnJvcicpKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgY29tcGxldGUpO1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gICAgfSk7XG4gICAgLy8gQ2FjaGUgaXQgZm9yIGxhdGVyIHJldHJpZXZhbC5cbiAgICB0cmFuc2FjdGlvbkRvbmVNYXAuc2V0KHR4LCBkb25lKTtcbn1cbmxldCBpZGJQcm94eVRyYXBzID0ge1xuICAgIGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbikge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgdHJhbnNhY3Rpb24uZG9uZS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnZG9uZScpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uRG9uZU1hcC5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIFBvbHlmaWxsIGZvciBvYmplY3RTdG9yZU5hbWVzIGJlY2F1c2Ugb2YgRWRnZS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnb2JqZWN0U3RvcmVOYW1lcycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0Lm9iamVjdFN0b3JlTmFtZXMgfHwgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSB0eC5zdG9yZSByZXR1cm4gdGhlIG9ubHkgc3RvcmUgaW4gdGhlIHRyYW5zYWN0aW9uLCBvciB1bmRlZmluZWQgaWYgdGhlcmUgYXJlIG1hbnkuXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ3N0b3JlJykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzFdXG4gICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIDogcmVjZWl2ZXIub2JqZWN0U3RvcmUocmVjZWl2ZXIub2JqZWN0U3RvcmVOYW1lc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRWxzZSB0cmFuc2Zvcm0gd2hhdGV2ZXIgd2UgZ2V0IGJhY2suXG4gICAgICAgIHJldHVybiB3cmFwKHRhcmdldFtwcm9wXSk7XG4gICAgfSxcbiAgICBzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSkge1xuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBoYXModGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbiAmJlxuICAgICAgICAgICAgKHByb3AgPT09ICdkb25lJyB8fCBwcm9wID09PSAnc3RvcmUnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0O1xuICAgIH0sXG59O1xuZnVuY3Rpb24gcmVwbGFjZVRyYXBzKGNhbGxiYWNrKSB7XG4gICAgaWRiUHJveHlUcmFwcyA9IGNhbGxiYWNrKGlkYlByb3h5VHJhcHMpO1xufVxuZnVuY3Rpb24gd3JhcEZ1bmN0aW9uKGZ1bmMpIHtcbiAgICAvLyBEdWUgdG8gZXhwZWN0ZWQgb2JqZWN0IGVxdWFsaXR5ICh3aGljaCBpcyBlbmZvcmNlZCBieSB0aGUgY2FjaGluZyBpbiBgd3JhcGApLCB3ZVxuICAgIC8vIG9ubHkgY3JlYXRlIG9uZSBuZXcgZnVuYyBwZXIgZnVuYy5cbiAgICAvLyBFZGdlIGRvZXNuJ3Qgc3VwcG9ydCBvYmplY3RTdG9yZU5hbWVzIChib29vKSwgc28gd2UgcG9seWZpbGwgaXQgaGVyZS5cbiAgICBpZiAoZnVuYyA9PT0gSURCRGF0YWJhc2UucHJvdG90eXBlLnRyYW5zYWN0aW9uICYmXG4gICAgICAgICEoJ29iamVjdFN0b3JlTmFtZXMnIGluIElEQlRyYW5zYWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzdG9yZU5hbWVzLCAuLi5hcmdzKSB7XG4gICAgICAgICAgICBjb25zdCB0eCA9IGZ1bmMuY2FsbCh1bndyYXAodGhpcyksIHN0b3JlTmFtZXMsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwLnNldCh0eCwgc3RvcmVOYW1lcy5zb3J0ID8gc3RvcmVOYW1lcy5zb3J0KCkgOiBbc3RvcmVOYW1lc10pO1xuICAgICAgICAgICAgcmV0dXJuIHdyYXAodHgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBDdXJzb3IgbWV0aG9kcyBhcmUgc3BlY2lhbCwgYXMgdGhlIGJlaGF2aW91ciBpcyBhIGxpdHRsZSBtb3JlIGRpZmZlcmVudCB0byBzdGFuZGFyZCBJREIuIEluXG4gICAgLy8gSURCLCB5b3UgYWR2YW5jZSB0aGUgY3Vyc29yIGFuZCB3YWl0IGZvciBhIG5ldyAnc3VjY2Vzcycgb24gdGhlIElEQlJlcXVlc3QgdGhhdCBnYXZlIHlvdSB0aGVcbiAgICAvLyBjdXJzb3IuIEl0J3Mga2luZGEgbGlrZSBhIHByb21pc2UgdGhhdCBjYW4gcmVzb2x2ZSB3aXRoIG1hbnkgdmFsdWVzLiBUaGF0IGRvZXNuJ3QgbWFrZSBzZW5zZVxuICAgIC8vIHdpdGggcmVhbCBwcm9taXNlcywgc28gZWFjaCBhZHZhbmNlIG1ldGhvZHMgcmV0dXJucyBhIG5ldyBwcm9taXNlIGZvciB0aGUgY3Vyc29yIG9iamVjdCwgb3JcbiAgICAvLyB1bmRlZmluZWQgaWYgdGhlIGVuZCBvZiB0aGUgY3Vyc29yIGhhcyBiZWVuIHJlYWNoZWQuXG4gICAgaWYgKGdldEN1cnNvckFkdmFuY2VNZXRob2RzKCkuaW5jbHVkZXMoZnVuYykpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm94eSBhcyAndGhpcycgY2F1c2VzIElMTEVHQUwgSU5WT0NBVElPTiwgc28gd2UgdXNlXG4gICAgICAgICAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgICAgICAgZnVuYy5hcHBseSh1bndyYXAodGhpcyksIGFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIHdyYXAoY3Vyc29yUmVxdWVzdE1hcC5nZXQodGhpcykpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJveHkgYXMgJ3RoaXMnIGNhdXNlcyBJTExFR0FMIElOVk9DQVRJT04sIHNvIHdlIHVzZVxuICAgICAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgICByZXR1cm4gd3JhcChmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncykpO1xuICAgIH07XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgcmV0dXJuIHdyYXBGdW5jdGlvbih2YWx1ZSk7XG4gICAgLy8gVGhpcyBkb2Vzbid0IHJldHVybiwgaXQganVzdCBjcmVhdGVzIGEgJ2RvbmUnIHByb21pc2UgZm9yIHRoZSB0cmFuc2FjdGlvbixcbiAgICAvLyB3aGljaCBpcyBsYXRlciByZXR1cm5lZCBmb3IgdHJhbnNhY3Rpb24uZG9uZSAoc2VlIGlkYk9iamVjdEhhbmRsZXIpLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKVxuICAgICAgICBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odmFsdWUpO1xuICAgIGlmIChpbnN0YW5jZU9mQW55KHZhbHVlLCBnZXRJZGJQcm94eWFibGVUeXBlcygpKSlcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh2YWx1ZSwgaWRiUHJveHlUcmFwcyk7XG4gICAgLy8gUmV0dXJuIHRoZSBzYW1lIHZhbHVlIGJhY2sgaWYgd2UncmUgbm90IGdvaW5nIHRvIHRyYW5zZm9ybSBpdC5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiB3cmFwKHZhbHVlKSB7XG4gICAgLy8gV2Ugc29tZXRpbWVzIGdlbmVyYXRlIG11bHRpcGxlIHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdCAoZWcgd2hlbiBjdXJzb3JpbmcpLCBiZWNhdXNlXG4gICAgLy8gSURCIGlzIHdlaXJkIGFuZCBhIHNpbmdsZSBJREJSZXF1ZXN0IGNhbiB5aWVsZCBtYW55IHJlc3BvbnNlcywgc28gdGhlc2UgY2FuJ3QgYmUgY2FjaGVkLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlJlcXVlc3QpXG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHZhbHVlKTtcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IHRyYW5zZm9ybWVkIHRoaXMgdmFsdWUgYmVmb3JlLCByZXVzZSB0aGUgdHJhbnNmb3JtZWQgdmFsdWUuXG4gICAgLy8gVGhpcyBpcyBmYXN0ZXIsIGJ1dCBpdCBhbHNvIHByb3ZpZGVzIG9iamVjdCBlcXVhbGl0eS5cbiAgICBpZiAodHJhbnNmb3JtQ2FjaGUuaGFzKHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKTtcbiAgICAvLyBOb3QgYWxsIHR5cGVzIGFyZSB0cmFuc2Zvcm1lZC5cbiAgICAvLyBUaGVzZSBtYXkgYmUgcHJpbWl0aXZlIHR5cGVzLCBzbyB0aGV5IGNhbid0IGJlIFdlYWtNYXAga2V5cy5cbiAgICBpZiAobmV3VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRyYW5zZm9ybUNhY2hlLnNldCh2YWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn1cbmNvbnN0IHVud3JhcCA9ICh2YWx1ZSkgPT4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG5cbmV4cG9ydCB7IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSBhcyBhLCBpbnN0YW5jZU9mQW55IGFzIGksIHJlcGxhY2VUcmFwcyBhcyByLCB1bndyYXAgYXMgdSwgd3JhcCBhcyB3IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcHJlY2FjaGVBbmRSb3V0ZSB9IGZyb20gXCJ3b3JrYm94LXByZWNhY2hpbmcvcHJlY2FjaGVBbmRSb3V0ZVwiO1xuaW1wb3J0IHtcbiAgd2FybVN0cmF0ZWd5Q2FjaGUsXG4gIGdvb2dsZUZvbnRzQ2FjaGUsXG4gIHN0YXRpY1Jlc291cmNlQ2FjaGUsXG4gIG9mZmxpbmVGYWxsYmFjayxcbiAgaW1hZ2VDYWNoZSxcbn0gZnJvbSBcIndvcmtib3gtcmVjaXBlc1wiO1xuLy8gaW1wb3J0IHsgc2V0Q2F0Y2hIYW5kbGVyLCBzZXREZWZhdWx0SGFuZGxlciwgcmVnaXN0ZXJSb3V0ZSB9IGZyb20gJ3dvcmtib3gtcm91dGluZyc7XG4vLyBpbXBvcnQgeyBOZXR3b3JrT25seSwgU3RhbGVXaGlsZVJldmFsaWRhdGUsIENhY2hlRmlyc3QgfSBmcm9tICd3b3JrYm94LXN0cmF0ZWdpZXMnO1xuaW1wb3J0IHsgcmVnaXN0ZXJSb3V0ZSB9IGZyb20gXCJ3b3JrYm94LXJvdXRpbmdcIjtcbmltcG9ydCB7XG4gIFN0YWxlV2hpbGVSZXZhbGlkYXRlLFxuICBOZXR3b3JrRmlyc3QsXG4gIE5ldHdvcmtPbmx5LFxufSBmcm9tIFwid29ya2JveC1zdHJhdGVnaWVzXCI7XG5pbXBvcnQgeyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbiB9IGZyb20gXCJ3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZVwiO1xuaW1wb3J0IHsgRXhwaXJhdGlvblBsdWdpbiB9IGZyb20gXCJ3b3JrYm94LWV4cGlyYXRpb25cIjtcblxuY29uc3QgbWFuaWZlc3QgPSBzZWxmLl9fV0JfTUFOSUZFU1Q7XG5pZiAobWFuaWZlc3QpIHtcblxuICAvLyBjb25zb2xlLmxvZyhcInByZWNhY2hpbmc6IFwiLCBtYW5pZmVzdCk7XG4gIHByZWNhY2hlQW5kUm91dGUobWFuaWZlc3QpO1xufVxuXG4vLyBodHRwczovL3dlYi5kZXYvb2ZmbGluZS1mYWxsYmFjay1wYWdlL1xuLy8gY29uc3QgQ0FDSEVfTkFNRSA9ICdvZmZsaW5lLWh0bWwnO1xuY29uc3QgRkFMTEJBQ0tfSFRNTF9VUkwgPSBcIi9vZmZsaW5lL1wiO1xuXG4vLyBjYWNoZSBhbGwgdGhlIHBhZ2VzIG9mIHRoZSB3ZWJzaXRlIHNlcnZpbmcgdGhlIGNhY2hlZCBwYWdlcyBiZWZvcmUgbmV0d29yayBpZiB0aGV5IGFyZSBub3QgYXZhaWxhYmxlXG5jb25zdCBwYWdlQ2FjaGUgPSBuZXcgTmV0d29ya0ZpcnN0KHtcbiAgY2FjaGVOYW1lOiBcInBhZ2UtY2FjaGVcIixcbiAgcGx1Z2luczogW1xuICAgIG5ldyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbih7XG4gICAgICBzdGF0dXNlczogWzAsIDIwMF0sXG4gICAgfSksXG4gICAgbmV3IEV4cGlyYXRpb25QbHVnaW4oe1xuICAgICAgbWF4QWdlU2Vjb25kczogMzAgKiAyNCAqIDYwICogNjAsXG4gICAgfSksXG4gIF0sXG59KTtcblxuZ29vZ2xlRm9udHNDYWNoZSgpO1xuc3RhdGljUmVzb3VyY2VDYWNoZSgpO1xuaW1hZ2VDYWNoZSgpO1xuXG5yZWdpc3RlclJvdXRlKFxuICAoeyB1cmwgfSkgPT4gdXJsLm9yaWdpbiA9PT0gXCJodHRwczovL3VucGtnLmNvbVwiLFxuICBuZXcgU3RhbGVXaGlsZVJldmFsaWRhdGUoe1xuICAgIGNhY2hlTmFtZTogYHVucGtnYCxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBuZXcgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4oe1xuICAgICAgICBzdGF0dXNlczogWzAsIDIwMF0sXG4gICAgICB9KSxcbiAgICAgIG5ldyBFeHBpcmF0aW9uUGx1Z2luKHsgbWF4RW50cmllczogMjAgfSksXG4gICAgXSxcbiAgfSlcbik7XG5cbnJlZ2lzdGVyUm91dGUoXG4gICh7IHVybCB9KSA9PiB1cmwub3JpZ2luID09PSBcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb21cIixcbiAgbmV3IFN0YWxlV2hpbGVSZXZhbGlkYXRlKHtcbiAgICBjYWNoZU5hbWU6IGBjZG5qc2AsXG4gICAgcGx1Z2luczogW1xuICAgICAgbmV3IENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luKHtcbiAgICAgICAgc3RhdHVzZXM6IFswLCAyMDBdLFxuICAgICAgfSksXG4gICAgICBuZXcgRXhwaXJhdGlvblBsdWdpbih7IG1heEVudHJpZXM6IDIwIH0pLFxuICAgIF0sXG4gIH0pXG4pO1xuXG5yZWdpc3RlclJvdXRlKFxuICAoeyB1cmwgfSkgPT4gdXJsLm9yaWdpbiA9PT0gXCJodHRwczovL21hcC5nb29nbGVhcGlzLmNvbVwiLFxuICBuZXcgU3RhbGVXaGlsZVJldmFsaWRhdGUoe1xuICAgIGNhY2hlTmFtZTogYGdvb2dsZS1tYXBgLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIG5ldyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbih7XG4gICAgICAgIHN0YXR1c2VzOiBbMCwgMjAwXSxcbiAgICAgIH0pLFxuICAgICAgbmV3IEV4cGlyYXRpb25QbHVnaW4oeyBtYXhFbnRyaWVzOiAyMCB9KSxcbiAgICBdLFxuICB9KVxuKTtcblxucmVnaXN0ZXJSb3V0ZShcbiAgKHsgdXJsIH0pID0+IHVybC5vcmlnaW4gPT09IFwiaHR0cHM6Ly9hcGkudGlsZXMubWFwYm94LmNvbVwiLFxuICBuZXcgU3RhbGVXaGlsZVJldmFsaWRhdGUoe1xuICAgIGNhY2hlTmFtZTogYG1hcGJveC1tYXBgLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIG5ldyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbih7XG4gICAgICAgIHN0YXR1c2VzOiBbMCwgMjAwXSxcbiAgICAgIH0pLFxuICAgICAgbmV3IEV4cGlyYXRpb25QbHVnaW4oeyBtYXhFbnRyaWVzOiAyMCB9KSxcbiAgICBdLFxuICB9KVxuKTtcblxucmVnaXN0ZXJSb3V0ZShcbiAgKHsgdXJsIH0pID0+IHVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiL3VzZXJzL1wiKSxcbiAgbmV3IE5ldHdvcmtGaXJzdCgpXG4pO1xuXG5yZWdpc3RlclJvdXRlKFxuICAoeyB1cmwgfSkgPT4gdXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvYWNjb3VudHMvXCIpLFxuICBuZXcgTmV0d29ya0ZpcnN0KClcbik7XG5cbnJlZ2lzdGVyUm91dGUoXG4gICh7IHVybCB9KSA9PiB1cmwucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9hY2NvdW50cy9nb29nbGUvXCIpLFxuICBuZXcgTmV0d29ya09ubHkoKVxuKTtcbnJlZ2lzdGVyUm91dGUoXG4gICh7IHVybCB9KSA9PiB1cmwucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9hY2NvdW50cy9mYWNlYm9vay9cIiksXG4gIG5ldyBOZXR3b3JrT25seSgpXG4pO1xuXG53YXJtU3RyYXRlZ3lDYWNoZSh7XG4gIHVybHM6IFtcbiAgICBcIi9cIixcbiAgICBcIi9vZmZsaW5lXCIsXG4gICAgXCIvYWJvdXRcIixcbiAgICBcIi9hY2NvdW50cy9sb2dpblwiLFxuICAgIFwiL2FjY291bnRzL3NpZ251cFwiLFxuICAgIFwiL2FjY291bnRzL2VtYWlsXCIsXG4gICAgXCIvcm9ib3RzLnR4dFwiLFxuICBdLFxuICBzdHJhdGVneTogcGFnZUNhY2hlLFxufSk7XG5cbnJlZ2lzdGVyUm91dGUoKHsgcmVxdWVzdCB9KSA9PiByZXF1ZXN0Lm1vZGUgPT09IFwibmF2aWdhdGVcIiwgcGFnZUNhY2hlKTtcblxub2ZmbGluZUZhbGxiYWNrKHtcbiAgcGFnZUZhbGxiYWNrOiBGQUxMQkFDS19IVE1MX1VSTCxcbn0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIHB1c2ggc2VydmljZXNcbmNvbnN0IExPR09fVVJMID0gXCIvc3RhdGljL2J1bmRsZXMvYXNzZXRzL2Zhdmljb24tNDh4NDgucG5nXCI7XG5cbi8vIGdldCBub3RpZmljYXRpb24gdGl0bGVcbmxldCBnZXRUaXRsZSA9IGZ1bmN0aW9uICh0aXRsZSkge1xuICBpZiAodGl0bGUgPT09IFwiXCIpIHtcbiAgICB0aXRsZSA9IFwiZXJyeSBTYXlzIPCflIhcIjtcbiAgfVxuICByZXR1cm4gdGl0bGU7XG59O1xuXG4vLyBzaXAgaW5zdGFsbCBpZiB3YWl0aW5nIHRha2VzIHRvbyBsb25nXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnN0YWxsXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBzZWxmLnNraXBXYWl0aW5nKCk7XG4gIGNvbnNvbGUubG9nKGV2ZW50KTtcbn0pO1xuXG4vLyByZWdpc3RlciBldmVudCBsaXN0ZW5lciBmb3IgdGhlICdwdXNoJyBldmVudC5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcInB1c2hcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vIFJldHJpZXZlIHRoZSB0ZXh0dWFsIHBheWxvYWQgZnJvbSBldmVudC5kYXRhIChhIFB1c2hNZXNzYWdlRGF0YSBvYmplY3QpLlxuICAvLyBPdGhlciBmb3JtYXRzIGFyZSBzdXBwb3J0ZWQgKEFycmF5QnVmZmVyLCBCbG9iLCBKU09OKSwgY2hlY2sgb3V0IHRoZSBkb2N1bWVudGF0aW9uXG4gIC8vIG9uIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9QdXNoTWVzc2FnZURhdGEuXG4gIGxldCBub3RpZmljYXRpb25UaXRsZSA9IFwiXCI7XG4gIGxldCBub3RpZmljYXRpb25PcHRpb25zID0ge307XG4gIGxldCBub3RpZmljYXRpb25Cb2R5ID0gXCJcIjtcbiAgbGV0IG5vdGlmaWNhdGlvblRhZyA9IFwiXCI7XG5cbiAgdHJ5IHtcbiAgICAvLyBQdXNoIGlzIGEgSlNPTlxuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGV2ZW50LmRhdGEuanNvbigpO1xuXG4gICAgbm90aWZpY2F0aW9uVGl0bGUgPSBnZXRUaXRsZShyZXNwb25zZUpzb24uaGVhZC50b1VwcGVyQ2FzZSgpKTtcbiAgICBub3RpZmljYXRpb25Cb2R5ID0gcmVzcG9uc2VKc29uLmJvZHk7XG4gICAgbm90aWZpY2F0aW9uVGFnID0gcmVzcG9uc2VKc29uLnRhZztcblxuICAgIGlmIChyZXNwb25zZUpzb24udXJsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5vdGlmaWNhdGlvbk9wdGlvbnMgPSB7XG4gICAgICAgIGJvZHk6IHJlc3BvbnNlSnNvbi5ib2R5LFxuICAgICAgICBpY29uOiBMT0dPX1VSTCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHVybDogcmVzcG9uc2VKc29uLnVybCA/IHJlc3BvbnNlSnNvbi51cmwgOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuICAgICAgICB9LFxuICAgICAgICBhY3Rpb25zOiBbeyBhY3Rpb246IFwib3Blbl91cmxcIiwgdGl0bGU6IFwiT3BlbiBMaW5rXCIgfV0sXG4gICAgICAgIHZpYnJhdGU6IFsyMDAsIDEwMCwgMjAwLCAxMDAsIDIwMCwgMTAwLCAyMDBdLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcbiAgICAgICAgYm9keTogcmVzcG9uc2VKc29uLmJvZHksXG4gICAgICAgIGljb246IExPR09fVVJMLFxuICAgICAgICB2aWJyYXRlOiBbMjAwLCAxMDAsIDIwMCwgMTAwLCAyMDAsIDEwMCwgMjAwXSxcbiAgICAgIH07XG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycikge1xuXG4gICAgLy8gUHVzaCBpcyBhIHNpbXBsZSB0ZXh0ICh1c3VhbGx5IGRlYnVnZ2luZylcbiAgICBub3RpZmljYXRpb25PcHRpb25zID0ge1xuICAgICAgaWNvbjogTE9HT19VUkwsXG4gICAgICBib2R5OiBldmVudC5kYXRhLnRleHQoKSxcbiAgICB9O1xuXG4gIH1cblxuICAvLyBLZWVwIHRoZSBzZXJ2aWNlIHdvcmtlciBhbGl2ZSB1bnRpbCB0aGUgbm90aWZpY2F0aW9uIGlzIGNyZWF0ZWQuXG4gIGV2ZW50LndhaXRVbnRpbChcbiAgICBzZWxmLnJlZ2lzdHJhdGlvbi5zaG93Tm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvblRpdGxlLCBub3RpZmljYXRpb25PcHRpb25zKVxuICApO1xuXG4gIC8vIE9wdGlvbmFsOiBDb211bmljYXRpbmcgd2l0aCBvdXIganMgYXBwbGljYXRpb24uIFNlbmQgYSBzaWduYWxcbiAgc2VsZi5jbGllbnRzXG4gICAgLm1hdGNoQWxsKHsgaW5jbHVkZVVuY29udHJvbGxlZDogdHJ1ZSwgdHlwZTogXCJ3aW5kb3dcIiB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChjbGllbnRzKSB7XG4gICAgICBjbGllbnRzLmZvckVhY2goZnVuY3Rpb24gKGNsaWVudCkge1xuICAgICAgICBjbGllbnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIGRhdGE6IG5vdGlmaWNhdGlvblRhZyxcbiAgICAgICAgICBkYXRhX3RpdGxlOiBub3RpZmljYXRpb25UaXRsZSxcbiAgICAgICAgICBkYXRhX2JvZHk6IG5vdGlmaWNhdGlvbkJvZHksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKFwibm90aWZpY2F0aW9uY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vIEFuZHJvaWQgZG9lc24ndCBjbG9zZSB0aGUgbm90aWZpY2F0aW9uIHdoZW4geW91IGNsaWNrIGl0XG4gIC8vIFNlZSBodHRwOi8vY3JidWcuY29tLzQ2MzE0NlxuICBldmVudC5ub3RpZmljYXRpb24uY2xvc2UoKTtcbiAgLy8gQ2hlY2sgaWYgdGhlcmUncyBhbHJlYWR5IGEgdGFiIG9wZW4gd2l0aCB0aGlzIFVSTC5cbiAgLy8gSWYgeWVzOiBmb2N1cyBvbiB0aGUgdGFiLlxuICAvLyBJZiBubzogb3BlbiBhIHRhYiB3aXRoIHRoZSBVUkwuXG4gIGV2ZW50LndhaXRVbnRpbChcbiAgICBzZWxmLmNsaWVudHNcbiAgICAgIC5tYXRjaEFsbCh7IHR5cGU6IFwid2luZG93XCIsIGluY2x1ZGVVbmNvbnRyb2xsZWQ6IHRydWUgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uICh3aW5kb3dDbGllbnRzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd2luZG93Q2xpZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjbGllbnQgPSB3aW5kb3dDbGllbnRzW2ldO1xuICAgICAgICAgIGlmIChcImZvY3VzXCIgaW4gY2xpZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpZW50LmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICApO1xuICBpZiAoZXZlbnQubm90aWZpY2F0aW9uLmRhdGEgIT09IG51bGwpIHtcbiAgICBldmVudC53YWl0VW50aWwoXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpLFxuICAgICAgc2VsZi5jbGllbnRzLm9wZW5XaW5kb3coZXZlbnQubm90aWZpY2F0aW9uLmRhdGEudXJsKVxuICAgICk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImFzc2VydCIsIldvcmtib3hFcnJvciIsImdldEZyaWVuZGx5VVJMIiwibG9nZ2VyIiwiQ2FjaGVhYmxlUmVzcG9uc2UiLCJjb25zdHJ1Y3RvciIsImNvbmZpZyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInN0YXR1c2VzIiwiaGVhZGVycyIsIm1vZHVsZU5hbWUiLCJjbGFzc05hbWUiLCJmdW5jTmFtZSIsImlzQXJyYXkiLCJwYXJhbU5hbWUiLCJpc1R5cGUiLCJfc3RhdHVzZXMiLCJfaGVhZGVycyIsImlzUmVzcG9uc2VDYWNoZWFibGUiLCJyZXNwb25zZSIsImlzSW5zdGFuY2UiLCJSZXNwb25zZSIsImNhY2hlYWJsZSIsImluY2x1ZGVzIiwic3RhdHVzIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJoZWFkZXJOYW1lIiwiZ2V0IiwiZ3JvdXBDb2xsYXBzZWQiLCJ1cmwiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZ3JvdXBFbmQiLCJsb2dGcmllbmRseUhlYWRlcnMiLCJmb3JFYWNoIiwidmFsdWUiLCJrZXkiLCJDYWNoZWFibGVSZXNwb25zZVBsdWdpbiIsImNhY2hlV2lsbFVwZGF0ZSIsIl9jYWNoZWFibGVSZXNwb25zZSIsInNlbGYiLCJfIiwiZSIsIkRlZmVycmVkIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibWVzc2FnZUdlbmVyYXRvciIsIkVycm9yIiwiZXJyb3JDb2RlIiwiZGV0YWlscyIsIm1lc3NhZ2UiLCJuYW1lIiwiQXJyYXkiLCJoYXNNZXRob2QiLCJvYmplY3QiLCJleHBlY3RlZE1ldGhvZCIsInR5cGUiLCJleHBlY3RlZFR5cGUiLCJleHBlY3RlZENsYXNzIiwiaXNPbmVPZiIsInZhbGlkVmFsdWVzIiwiaXNBcnJheU9mQ2xhc3MiLCJlcnJvciIsIml0ZW0iLCJmaW5hbEFzc2VydEV4cG9ydHMiLCJzdHJpcFBhcmFtcyIsImZ1bGxVUkwiLCJpZ25vcmVQYXJhbXMiLCJzdHJpcHBlZFVSTCIsIlVSTCIsInBhcmFtIiwic2VhcmNoUGFyYW1zIiwiZGVsZXRlIiwiaHJlZiIsImNhY2hlTWF0Y2hJZ25vcmVQYXJhbXMiLCJjYWNoZSIsInJlcXVlc3QiLCJtYXRjaE9wdGlvbnMiLCJzdHJpcHBlZFJlcXVlc3RVUkwiLCJtYXRjaCIsImtleXNPcHRpb25zIiwiYXNzaWduIiwiaWdub3JlU2VhcmNoIiwiY2FjaGVLZXlzIiwiY2FjaGVLZXkiLCJzdHJpcHBlZENhY2hlS2V5VVJMIiwiX2NhY2hlTmFtZURldGFpbHMiLCJnb29nbGVBbmFseXRpY3MiLCJwcmVjYWNoZSIsInByZWZpeCIsInJ1bnRpbWUiLCJzdWZmaXgiLCJyZWdpc3RyYXRpb24iLCJzY29wZSIsIl9jcmVhdGVDYWNoZU5hbWUiLCJjYWNoZU5hbWUiLCJmaWx0ZXIiLCJsZW5ndGgiLCJqb2luIiwiZWFjaENhY2hlTmFtZURldGFpbCIsImZuIiwiY2FjaGVOYW1lcyIsInVwZGF0ZURldGFpbHMiLCJnZXRHb29nbGVBbmFseXRpY3NOYW1lIiwidXNlckNhY2hlTmFtZSIsImdldFByZWNhY2hlTmFtZSIsImdldFByZWZpeCIsImdldFJ1bnRpbWVOYW1lIiwiZ2V0U3VmZml4Iiwic3VwcG9ydFN0YXR1cyIsImNhbkNvbnN0cnVjdFJlc3BvbnNlRnJvbUJvZHlTdHJlYW0iLCJ1bmRlZmluZWQiLCJ0ZXN0UmVzcG9uc2UiLCJib2R5IiwiZG9udFdhaXRGb3IiLCJ0aGVuIiwicXVvdGFFcnJvckNhbGxiYWNrcyIsImV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzIiwic2l6ZSIsImNhbGxiYWNrIiwidXJsT2JqIiwiU3RyaW5nIiwibG9jYXRpb24iLCJyZXBsYWNlIiwiUmVnRXhwIiwib3JpZ2luIiwiX19XQl9ESVNBQkxFX0RFVl9MT0dTIiwiaW5Hcm91cCIsIm1ldGhvZFRvQ29sb3JNYXAiLCJkZWJ1ZyIsIndhcm4iLCJwcmludCIsIm1ldGhvZCIsImFyZ3MiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiY29uc29sZSIsInN0eWxlcyIsImxvZ1ByZWZpeCIsImFwaSIsImxvZ2dlck1ldGhvZHMiLCJ0aW1lb3V0IiwibXMiLCJzZXRUaW1lb3V0Iiwid2FpdFVudGlsIiwiZXZlbnQiLCJhc3luY0ZuIiwicmV0dXJuUHJvbWlzZSIsImNvcHlSZXNwb25zZSIsIm1vZGlmaWVyIiwicmVzcG9uc2VVUkwiLCJjbG9uZWRSZXNwb25zZSIsImNsb25lIiwicmVzcG9uc2VJbml0IiwiSGVhZGVycyIsInN0YXR1c1RleHQiLCJtb2RpZmllZFJlc3BvbnNlSW5pdCIsImJsb2IiLCJtZXNzYWdlcyIsImZhbGxiYWNrIiwiY29kZSIsIm1zZyIsImdlbmVyYXRvckZ1bmN0aW9uIiwiaW52YWxpZC12YWx1ZSIsInZhbGlkVmFsdWVEZXNjcmlwdGlvbiIsIm5vdC1hbi1hcnJheSIsImluY29ycmVjdC10eXBlIiwiY2xhc3NOYW1lU3RyIiwiaW5jb3JyZWN0LWNsYXNzIiwiZXhwZWN0ZWRDbGFzc05hbWUiLCJpc1JldHVyblZhbHVlUHJvYmxlbSIsIm1pc3NpbmctYS1tZXRob2QiLCJhZGQtdG8tY2FjaGUtbGlzdC11bmV4cGVjdGVkLXR5cGUiLCJlbnRyeSIsImFkZC10by1jYWNoZS1saXN0LWNvbmZsaWN0aW5nLWVudHJpZXMiLCJmaXJzdEVudHJ5Iiwic2Vjb25kRW50cnkiLCJwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoIiwidGhyb3duRXJyb3JNZXNzYWdlIiwiaW52YWxpZC1jYWNoZS1uYW1lIiwiY2FjaGVOYW1lSWQiLCJ1bnJlZ2lzdGVyLXJvdXRlLWJ1dC1ub3QtZm91bmQtd2l0aC1tZXRob2QiLCJ1bnJlZ2lzdGVyLXJvdXRlLXJvdXRlLW5vdC1yZWdpc3RlcmVkIiwicXVldWUtcmVwbGF5LWZhaWxlZCIsImR1cGxpY2F0ZS1xdWV1ZS1uYW1lIiwiZXhwaXJlZC10ZXN0LXdpdGhvdXQtbWF4LWFnZSIsIm1ldGhvZE5hbWUiLCJ1bnN1cHBvcnRlZC1yb3V0ZS10eXBlIiwibm90LWFycmF5LW9mLWNsYXNzIiwibWF4LWVudHJpZXMtb3ItYWdlLXJlcXVpcmVkIiwic3RhdHVzZXMtb3ItaGVhZGVycy1yZXF1aXJlZCIsImludmFsaWQtc3RyaW5nIiwiY2hhbm5lbC1uYW1lLXJlcXVpcmVkIiwiaW52YWxpZC1yZXNwb25zZXMtYXJlLXNhbWUtYXJncyIsImV4cGlyZS1jdXN0b20tY2FjaGVzLW9ubHkiLCJ1bml0LW11c3QtYmUtYnl0ZXMiLCJub3JtYWxpemVkUmFuZ2VIZWFkZXIiLCJzaW5nbGUtcmFuZ2Utb25seSIsImludmFsaWQtcmFuZ2UtdmFsdWVzIiwibm8tcmFuZ2UtaGVhZGVyIiwicmFuZ2Utbm90LXNhdGlzZmlhYmxlIiwic3RhcnQiLCJlbmQiLCJhdHRlbXB0LXRvLWNhY2hlLW5vbi1nZXQtcmVxdWVzdCIsImNhY2hlLXB1dC13aXRoLW5vLXJlc3BvbnNlIiwibm8tcmVzcG9uc2UiLCJiYWQtcHJlY2FjaGluZy1yZXNwb25zZSIsIm5vbi1wcmVjYWNoZWQtdXJsIiwiYWRkLXRvLWNhY2hlLWxpc3QtY29uZmxpY3RpbmctaW50ZWdyaXRpZXMiLCJtaXNzaW5nLXByZWNhY2hlLWVudHJ5IiwiY3Jvc3Mtb3JpZ2luLWNvcHktcmVzcG9uc2UiLCJvcGFxdWUtc3RyZWFtcy1zb3VyY2UiLCJTZXQiLCJyZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjayIsImFkZCIsIkNhY2hlVGltZXN0YW1wc01vZGVsIiwiQ2FjaGVFeHBpcmF0aW9uIiwiX2lzUnVubmluZyIsIl9yZXJ1blJlcXVlc3RlZCIsIm1heEVudHJpZXMiLCJtYXhBZ2VTZWNvbmRzIiwiX21heEVudHJpZXMiLCJfbWF4QWdlU2Vjb25kcyIsIl9tYXRjaE9wdGlvbnMiLCJfY2FjaGVOYW1lIiwiX3RpbWVzdGFtcE1vZGVsIiwiZXhwaXJlRW50cmllcyIsIm1pblRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJ1cmxzRXhwaXJlZCIsImNhY2hlcyIsIm9wZW4iLCJ1cGRhdGVUaW1lc3RhbXAiLCJzZXRUaW1lc3RhbXAiLCJpc1VSTEV4cGlyZWQiLCJ0aW1lc3RhbXAiLCJnZXRUaW1lc3RhbXAiLCJleHBpcmVPbGRlclRoYW4iLCJJbmZpbml0eSIsIkV4cGlyYXRpb25QbHVnaW4iLCJjYWNoZWRSZXNwb25zZVdpbGxCZVVzZWQiLCJjYWNoZWRSZXNwb25zZSIsImlzRnJlc2giLCJfaXNSZXNwb25zZURhdGVGcmVzaCIsImNhY2hlRXhwaXJhdGlvbiIsIl9nZXRDYWNoZUV4cGlyYXRpb24iLCJ1cGRhdGVUaW1lc3RhbXBEb25lIiwiY2FjaGVEaWRVcGRhdGUiLCJSZXF1ZXN0IiwiX2NvbmZpZyIsIl9jYWNoZUV4cGlyYXRpb25zIiwiTWFwIiwicHVyZ2VPblF1b3RhRXJyb3IiLCJkZWxldGVDYWNoZUFuZE1ldGFkYXRhIiwic2V0IiwiZGF0ZUhlYWRlclRpbWVzdGFtcCIsIl9nZXREYXRlSGVhZGVyVGltZXN0YW1wIiwiaGFzIiwiZGF0ZUhlYWRlciIsInBhcnNlZERhdGUiLCJoZWFkZXJUaW1lIiwiZ2V0VGltZSIsImlzTmFOIiwib3BlbkRCIiwiZGVsZXRlREIiLCJEQl9OQU1FIiwiQ0FDSEVfT0JKRUNUX1NUT1JFIiwibm9ybWFsaXplVVJMIiwidW5Ob3JtYWxpemVkVXJsIiwiaGFzaCIsIl9kYiIsIl91cGdyYWRlRGIiLCJkYiIsIm9ialN0b3JlIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwiY3JlYXRlSW5kZXgiLCJ1bmlxdWUiLCJfdXBncmFkZURiQW5kRGVsZXRlT2xkRGJzIiwiaWQiLCJfZ2V0SWQiLCJnZXREYiIsInR4IiwidHJhbnNhY3Rpb24iLCJkdXJhYmlsaXR5Iiwic3RvcmUiLCJwdXQiLCJkb25lIiwibWF4Q291bnQiLCJjdXJzb3IiLCJpbmRleCIsIm9wZW5DdXJzb3IiLCJlbnRyaWVzVG9EZWxldGUiLCJlbnRyaWVzTm90RGVsZXRlZENvdW50IiwicmVzdWx0IiwicHVzaCIsImNvbnRpbnVlIiwidXJsc0RlbGV0ZWQiLCJ1cGdyYWRlIiwiYmluZCIsImNyZWF0ZUNhY2hlS2V5IiwiUHJlY2FjaGVJbnN0YWxsUmVwb3J0UGx1Z2luIiwiUHJlY2FjaGVDYWNoZUtleVBsdWdpbiIsInByaW50Q2xlYW51cERldGFpbHMiLCJwcmludEluc3RhbGxEZXRhaWxzIiwiUHJlY2FjaGVTdHJhdGVneSIsIlByZWNhY2hlQ29udHJvbGxlciIsInBsdWdpbnMiLCJmYWxsYmFja1RvTmV0d29yayIsIl91cmxzVG9DYWNoZUtleXMiLCJfdXJsc1RvQ2FjaGVNb2RlcyIsIl9jYWNoZUtleXNUb0ludGVncml0aWVzIiwiX3N0cmF0ZWd5IiwicHJlY2FjaGVDb250cm9sbGVyIiwiaW5zdGFsbCIsImFjdGl2YXRlIiwic3RyYXRlZ3kiLCJlbnRyaWVzIiwiYWRkVG9DYWNoZUxpc3QiLCJfaW5zdGFsbEFuZEFjdGl2ZUxpc3RlbmVyc0FkZGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVybHNUb1dhcm5BYm91dCIsInJldmlzaW9uIiwiY2FjaGVNb2RlIiwiaW50ZWdyaXR5Iiwid2FybmluZ01lc3NhZ2UiLCJpbnN0YWxsUmVwb3J0UGx1Z2luIiwiY3JlZGVudGlhbHMiLCJhbGwiLCJoYW5kbGVBbGwiLCJwYXJhbXMiLCJ1cGRhdGVkVVJMcyIsIm5vdFVwZGF0ZWRVUkxzIiwiY3VycmVudGx5Q2FjaGVkUmVxdWVzdHMiLCJleHBlY3RlZENhY2hlS2V5cyIsInZhbHVlcyIsImRlbGV0ZWRVUkxzIiwiZ2V0VVJMc1RvQ2FjaGVLZXlzIiwiZ2V0Q2FjaGVkVVJMcyIsImdldENhY2hlS2V5Rm9yVVJMIiwidXJsT2JqZWN0IiwiZ2V0SW50ZWdyaXR5Rm9yQ2FjaGVLZXkiLCJtYXRjaFByZWNhY2hlIiwiY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwiLCJvcHRpb25zIiwiaGFuZGxlIiwiUm91dGUiLCJnZW5lcmF0ZVVSTFZhcmlhdGlvbnMiLCJQcmVjYWNoZVJvdXRlIiwidXJsc1RvQ2FjaGVLZXlzIiwicG9zc2libGVVUkwiLCJTdHJhdGVneSIsIl9mYWxsYmFja1RvTmV0d29yayIsImNvcHlSZWRpcmVjdGVkQ2FjaGVhYmxlUmVzcG9uc2VzUGx1Z2luIiwiX2hhbmRsZSIsImhhbmRsZXIiLCJjYWNoZU1hdGNoIiwiX2hhbmRsZUluc3RhbGwiLCJfaGFuZGxlRmV0Y2giLCJpbnRlZ3JpdHlJbk1hbmlmZXN0IiwiaW50ZWdyaXR5SW5SZXF1ZXN0Iiwibm9JbnRlZ3JpdHlDb25mbGljdCIsImZldGNoIiwibW9kZSIsIl91c2VEZWZhdWx0Q2FjaGVhYmlsaXR5UGx1Z2luSWZOZWVkZWQiLCJ3YXNDYWNoZWQiLCJjYWNoZVB1dCIsImdldENhY2hlS2V5IiwiZGVmYXVsdFBsdWdpbkluZGV4IiwiY2FjaGVXaWxsVXBkYXRlUGx1Z2luQ291bnQiLCJwbHVnaW4iLCJkZWZhdWx0UHJlY2FjaGVDYWNoZWFiaWxpdHlQbHVnaW4iLCJzcGxpY2UiLCJyZWRpcmVjdGVkIiwicmVnaXN0ZXJSb3V0ZSIsImdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyIiwiYWRkUm91dGUiLCJwcmVjYWNoZVJvdXRlIiwicHJlY2FjaGVBbmRSb3V0ZSIsImNhY2hlS2V5V2lsbEJlVXNlZCIsIl9wcmVjYWNoZUNvbnRyb2xsZXIiLCJoYW5kbGVyV2lsbFN0YXJ0Iiwic3RhdGUiLCJvcmlnaW5hbFJlcXVlc3QiLCJSRVZJU0lPTl9TRUFSQ0hfUEFSQU0iLCJjYWNoZUtleVVSTCIsIm9yaWdpbmFsVVJMIiwicmVtb3ZlSWdub3JlZFNlYXJjaFBhcmFtcyIsImlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZyIsImRpcmVjdG9yeUluZGV4IiwiY2xlYW5VUkxzIiwidXJsTWFuaXB1bGF0aW9uIiwidXJsV2l0aG91dElnbm9yZWRQYXJhbXMiLCJwYXRobmFtZSIsImVuZHNXaXRoIiwiZGlyZWN0b3J5VVJMIiwiY2xlYW5VUkwiLCJhZGRpdGlvbmFsVVJMcyIsInVybFRvQXR0ZW1wdCIsImxvZ0dyb3VwIiwiZ3JvdXBUaXRsZSIsImRlbGV0aW9uQ291bnQiLCJfbmVzdGVkR3JvdXAiLCJ1cmxzIiwidXJsc1RvUHJlY2FjaGUiLCJ1cmxzQWxyZWFkeVByZWNhY2hlZCIsInByZWNhY2hlZENvdW50IiwiYWxyZWFkeVByZWNhY2hlZENvdW50IiwicmVnRXhwIiwiU3RhbGVXaGlsZVJldmFsaWRhdGUiLCJDYWNoZUZpcnN0IiwiZ29vZ2xlRm9udHNDYWNoZSIsInNoZWV0Q2FjaGVOYW1lIiwiY2FjaGVQcmVmaXgiLCJmb250Q2FjaGVOYW1lIiwid2FybVN0cmF0ZWd5Q2FjaGUiLCJpbWFnZUNhY2hlIiwiZGVmYXVsdE1hdGNoQ2FsbGJhY2siLCJkZXN0aW5hdGlvbiIsIm1hdGNoQ2FsbGJhY2siLCJ3YXJtQ2FjaGUiLCJzdGF0aWNSZXNvdXJjZUNhY2hlIiwicGFnZUNhY2hlIiwib2ZmbGluZUZhbGxiYWNrIiwic2V0Q2F0Y2hIYW5kbGVyIiwicGFnZUZhbGxiYWNrIiwiaW1hZ2VGYWxsYmFjayIsImZvbnRGYWxsYmFjayIsImZpbGVzIiwiYWRkQWxsIiwiZGVzdCIsIk5ldHdvcmtGaXJzdCIsIm5ldHdvcmtUaW1lb3V0U2Vjb25kcyIsIm1hcCIsInBhdGgiLCJOYXZpZ2F0aW9uUm91dGUiLCJhbGxvd2xpc3QiLCJkZW55bGlzdCIsIl9tYXRjaCIsIl9hbGxvd2xpc3QiLCJfZGVueWxpc3QiLCJwYXRobmFtZUFuZFNlYXJjaCIsInNlYXJjaCIsInRvU3RyaW5nIiwiUmVnRXhwUm91dGUiLCJleGVjIiwic2xpY2UiLCJkZWZhdWx0TWV0aG9kIiwidmFsaWRNZXRob2RzIiwibm9ybWFsaXplSGFuZGxlciIsImNhdGNoSGFuZGxlciIsIlJvdXRlciIsIl9yb3V0ZXMiLCJfZGVmYXVsdEhhbmRsZXJNYXAiLCJyb3V0ZXMiLCJhZGRGZXRjaExpc3RlbmVyIiwicmVzcG9uc2VQcm9taXNlIiwiaGFuZGxlUmVxdWVzdCIsInJlc3BvbmRXaXRoIiwiYWRkQ2FjaGVMaXN0ZW5lciIsImRhdGEiLCJwYXlsb2FkIiwidXJsc1RvQ2FjaGUiLCJyZXF1ZXN0UHJvbWlzZXMiLCJwb3J0cyIsInBvc3RNZXNzYWdlIiwicHJvdG9jb2wiLCJzdGFydHNXaXRoIiwic2FtZU9yaWdpbiIsInJvdXRlIiwiZmluZE1hdGNoaW5nUm91dGUiLCJkZWJ1Z01lc3NhZ2VzIiwiZXJyIiwiX2NhdGNoSGFuZGxlciIsImNhdGNoIiwiY2F0Y2hFcnIiLCJtYXRjaFJlc3VsdCIsInNldERlZmF1bHRIYW5kbGVyIiwidW5yZWdpc3RlclJvdXRlIiwicm91dGVJbmRleCIsImluZGV4T2YiLCJnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIiLCJjYXB0dXJlIiwiY2FwdHVyZVVybCIsInZhbHVlVG9DaGVjayIsIndpbGRjYXJkcyIsImRlZmF1bHRSb3V0ZXIiLCJsb2dzIiwiZmV0Y2hBbmRDYWNoZVB1dCIsInN0cmF0ZWd5U3RhcnQiLCJwcmludEZpbmFsUmVzcG9uc2UiLCJDYWNoZU9ubHkiLCJjYWNoZU9rQW5kT3BhcXVlUGx1Z2luIiwicCIsInVuc2hpZnQiLCJfbmV0d29ya1RpbWVvdXRTZWNvbmRzIiwicHJvbWlzZXMiLCJ0aW1lb3V0SWQiLCJfZ2V0VGltZW91dFByb21pc2UiLCJuZXR3b3JrUHJvbWlzZSIsIl9nZXROZXR3b3JrUHJvbWlzZSIsInJhY2UiLCJ0aW1lb3V0UHJvbWlzZSIsIm9uTmV0d29ya1RpbWVvdXQiLCJmZXRjaEVycm9yIiwiY2xlYXJUaW1lb3V0IiwiTmV0d29ya09ubHkiLCJmZXRjaEFuZENhY2hlUHJvbWlzZSIsIlN0cmF0ZWd5SGFuZGxlciIsImZldGNoT3B0aW9ucyIsInJlc3BvbnNlRG9uZSIsIkZldGNoRXZlbnQiLCJfZ2V0UmVzcG9uc2UiLCJoYW5kbGVyRG9uZSIsIl9hd2FpdENvbXBsZXRlIiwicnVuQ2FsbGJhY2tzIiwiaXRlcmF0ZUNhbGxiYWNrcyIsImRvbmVXYWl0aW5nIiwid2FpdFVudGlsRXJyb3IiLCJkZXN0cm95IiwidG9SZXF1ZXN0IiwiaW5wdXQiLCJfY2FjaGVLZXlzIiwiRXh0ZW5kYWJsZUV2ZW50IiwiX2hhbmRsZXJEZWZlcnJlZCIsIl9leHRlbmRMaWZldGltZVByb21pc2VzIiwiX3BsdWdpbnMiLCJfcGx1Z2luU3RhdGVNYXAiLCJwcmVsb2FkUmVzcG9uc2UiLCJwb3NzaWJsZVByZWxvYWRSZXNwb25zZSIsImhhc0NhbGxiYWNrIiwiY2IiLCJwbHVnaW5GaWx0ZXJlZFJlcXVlc3QiLCJmZXRjaFJlc3BvbnNlIiwicmVzcG9uc2VDbG9uZSIsImVmZmVjdGl2ZVJlcXVlc3QiLCJtdWx0aU1hdGNoT3B0aW9ucyIsInZhcnkiLCJyZXNwb25zZVRvQ2FjaGUiLCJfZW5zdXJlUmVzcG9uc2VTYWZlVG9DYWNoZSIsImhhc0NhY2hlVXBkYXRlQ2FsbGJhY2siLCJvbGRSZXNwb25zZSIsIm5ld1Jlc3BvbnNlIiwic3RhdGVmdWxDYWxsYmFjayIsInN0YXRlZnVsUGFyYW0iLCJzaGlmdCIsInBsdWdpbnNVc2VkIiwic3RyYXRlZ3lOYW1lIiwidyIsIndyYXAiLCJyIiwicmVwbGFjZVRyYXBzIiwidSIsInVud3JhcCIsInZlcnNpb24iLCJibG9ja2VkIiwiYmxvY2tpbmciLCJ0ZXJtaW5hdGVkIiwiaW5kZXhlZERCIiwib3BlblByb21pc2UiLCJvbGRWZXJzaW9uIiwibmV3VmVyc2lvbiIsImRlbGV0ZURhdGFiYXNlIiwicmVhZE1ldGhvZHMiLCJ3cml0ZU1ldGhvZHMiLCJjYWNoZWRNZXRob2RzIiwiZ2V0TWV0aG9kIiwidGFyZ2V0IiwicHJvcCIsIklEQkRhdGFiYXNlIiwidGFyZ2V0RnVuY05hbWUiLCJ1c2VJbmRleCIsImlzV3JpdGUiLCJJREJJbmRleCIsIklEQk9iamVjdFN0b3JlIiwicHJvdG90eXBlIiwic3RvcmVOYW1lIiwib2xkVHJhcHMiLCJyZWNlaXZlciIsImluc3RhbmNlT2ZBbnkiLCJjb25zdHJ1Y3RvcnMiLCJjIiwiaWRiUHJveHlhYmxlVHlwZXMiLCJjdXJzb3JBZHZhbmNlTWV0aG9kcyIsImdldElkYlByb3h5YWJsZVR5cGVzIiwiSURCQ3Vyc29yIiwiSURCVHJhbnNhY3Rpb24iLCJnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcyIsImFkdmFuY2UiLCJjb250aW51ZVByaW1hcnlLZXkiLCJjdXJzb3JSZXF1ZXN0TWFwIiwiV2Vha01hcCIsInRyYW5zYWN0aW9uRG9uZU1hcCIsInRyYW5zYWN0aW9uU3RvcmVOYW1lc01hcCIsInRyYW5zZm9ybUNhY2hlIiwicmV2ZXJzZVRyYW5zZm9ybUNhY2hlIiwicHJvbWlzaWZ5UmVxdWVzdCIsInVubGlzdGVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN1Y2Nlc3MiLCJjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24iLCJjb21wbGV0ZSIsIkRPTUV4Y2VwdGlvbiIsImlkYlByb3h5VHJhcHMiLCJvYmplY3RTdG9yZU5hbWVzIiwib2JqZWN0U3RvcmUiLCJ3cmFwRnVuY3Rpb24iLCJmdW5jIiwic3RvcmVOYW1lcyIsImNhbGwiLCJzb3J0IiwiYXBwbHkiLCJ0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlIiwiUHJveHkiLCJJREJSZXF1ZXN0IiwibmV3VmFsdWUiLCJhIiwiaSIsIm1hbmlmZXN0IiwiX19XQl9NQU5JRkVTVCIsIkZBTExCQUNLX0hUTUxfVVJMIiwiX3JlZiIsIl9yZWYyIiwiX3JlZjMiLCJfcmVmNCIsIl9yZWY1IiwiX3JlZjYiLCJfcmVmNyIsIl9yZWY4IiwiX3JlZjkiLCJMT0dPX1VSTCIsImdldFRpdGxlIiwidGl0bGUiLCJza2lwV2FpdGluZyIsIm5vdGlmaWNhdGlvblRpdGxlIiwibm90aWZpY2F0aW9uT3B0aW9ucyIsIm5vdGlmaWNhdGlvbkJvZHkiLCJub3RpZmljYXRpb25UYWciLCJyZXNwb25zZUpzb24iLCJqc29uIiwiaGVhZCIsInRvVXBwZXJDYXNlIiwidGFnIiwiaWNvbiIsIndpbmRvdyIsImFjdGlvbnMiLCJhY3Rpb24iLCJ2aWJyYXRlIiwidGV4dCIsInNob3dOb3RpZmljYXRpb24iLCJjbGllbnRzIiwibWF0Y2hBbGwiLCJpbmNsdWRlVW5jb250cm9sbGVkIiwiY2xpZW50IiwiZGF0YV90aXRsZSIsImRhdGFfYm9keSIsIm5vdGlmaWNhdGlvbiIsImNsb3NlIiwid2luZG93Q2xpZW50cyIsImZvY3VzIiwicHJldmVudERlZmF1bHQiLCJvcGVuV2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==