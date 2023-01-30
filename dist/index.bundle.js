/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleProjectInput": () => (/* binding */ toggleProjectInput),
/* harmony export */   "toggleTaskInput": () => (/* binding */ toggleTaskInput)
/* harmony export */ });
function toggleProjectInput() {
  const inputProjectForm = document.querySelector(".inputFormProject");
  const inputScreenProject = document.querySelector(".inputScreenProject");
  inputProjectForm.classList.toggle("active");
  inputScreenProject.classList.toggle("active");
}
function toggleTaskInput() {
  const inputFormTask = document.querySelector(".inputFormTask");
  const inputScreenTask = document.querySelector(".inputScreenTask");
  inputFormTask.classList.toggle("active");
  inputScreenTask.classList.toggle("active");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, object) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      ;
      target[property] = object[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(object) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, object);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRoundingMethod": () => (/* binding */ getRoundingMethod)
/* harmony export */ });
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function trunc(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE

};
var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dateLeft, dateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js");





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight));
  var result; // Check for the difference of less than month

  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }

    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }

    result = sign * (difference - Number(isLastMonthNotFull));
  } // Prevent negative zero


  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");



/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / 1000;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistance/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../differenceInMonths/index.js */ "./node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");










var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate, options) {
  var _ref, _options$locale;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(options), {
    addSuffix: Boolean(options === null || options === void 0 ? void 0 : options.addSuffix),
    comparison: comparison
  });
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
  }

  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options !== null && options !== void 0 && options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLastDayOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/esm/endOfDay/index.js");
/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endOfMonth/index.js */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */

function isLastDayOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() === (0,_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/subDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subDays)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */

function subDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/subDays/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");

const test = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(), 3), new Date(), {
  addSuffix: true
});


// start project modal
const newItemButton = document.querySelector(".newProjectButton");
newItemButton.addEventListener("click", _dom_js__WEBPACK_IMPORTED_MODULE_2__.toggleProjectInput);
// end project modal
const inputScreenProject = document.querySelector(".inputScreenProject");
inputScreenProject.addEventListener("click", _dom_js__WEBPACK_IMPORTED_MODULE_2__.toggleProjectInput);

// start task modal
const newTaskButton = document.querySelector(".newTaskButton");
newTaskButton.addEventListener("click", _dom_js__WEBPACK_IMPORTED_MODULE_2__.toggleTaskInput);
// end project modal
const inputScreenTask = document.querySelector(".inputScreenTask");
inputScreenTask.addEventListener("click", _dom_js__WEBPACK_IMPORTED_MODULE_2__.toggleTaskInput);
let currentProjectIndex = 0; // start on inbox

// create project array
let projectList = [{
  projectTitle: "weekend",
  projectDescription: "plans for the weekend",
  projectTaskList: [{
    taskTitle: "go shopping",
    taskDescription: "go to rewe",
    taskDate: "01.03.23",
    taskPriority: "low",
    taskProject: "weekend"
  }, {
    taskTitle: "Sports",
    taskDescription: "stay fit",
    taskDate: "14.11.23",
    taskPriority: "high",
    taskProject: "weekend"
  }, {
    taskTitle: "Study Korean",
    taskDescription: "Maeil jonseup haeyo",
    taskDate: "14.11.23",
    taskPriority: "high",
    taskProject: "weekend"
  }],
  projectTaskListCompleted: [{
    taskTitle: "study javascript",
    taskDescription: "easy",
    taskDate: "14.11.21",
    taskPriority: "high",
    taskProject: "weekend"
  }]
}, {
  projectTitle: "this week",
  projectDescription: "plans for the week",
  projectTaskList: [{
    taskTitle: "go to work",
    taskDescription: "5 times",
    taskDate: "01.03.23",
    taskPriority: "low",
    taskProject: "this week"
  }, {
    taskTitle: "learn React",
    taskDescription: "lets go",
    taskDate: "14.11.23",
    taskPriority: "high",
    taskProject: "this week"
  }, {
    taskTitle: "Study Korean",
    taskDescription: "Anyonghasaeyo",
    taskDate: "14.11.23",
    taskPriority: "high",
    taskProject: "this week"
  }],
  projectTaskListCompleted: [{
    taskTitle: "study CSS",
    taskDescription: "easy",
    taskDate: "14.11.21",
    taskPriority: "high",
    taskProject: "this week"
  }]
}];

// event listener on project submit
const projectSubmitButton = document.querySelector(".projectSubmitButton");
projectSubmitButton.addEventListener("click", () => {
  let newProject = createProject();
  projectList.push(newProject);
  paintProjects();
  console.log(projectList);
  updateProjectSelect();
  setStorage();
});
// event listener on task submit
const taskSubmitButton = document.querySelector(".taskSubmitButton");
taskSubmitButton.addEventListener("click", () => {
  let newTask = createTask();

  // clear input fields
  taskTitle.value = "";
  taskDescription.value = "";

  // decide to which project the task should be pushed
  for (let i = 0; i < projectList.length; i++) {
    if (projectList.at(i).projectTitle === newTask.taskProject) {
      projectList[i].projectTaskList.push(newTask);
    }
  }
  displayTasks();
  setStorage();
});
function updateProjectSelect() {
  const taskProjectSelect = document.querySelector("#taskProject");
  // delete current options
  while (taskProjectSelect.lastChild) {
    taskProjectSelect.removeChild(taskProjectSelect.lastChild);
  }

  // fill project select in task modal with all active projects
  projectList.forEach(element => {
    let projectOption = document.createElement("option");
    projectOption.value = element.projectTitle;
    projectOption.textContent = element.projectTitle;
    taskProjectSelect.appendChild(projectOption);
  });
}

// create task object
function createTask(title, description, dueDate, priority) {
  const taskTitle = document.querySelector("#taskTitle");
  const taskDescription = document.querySelector("#taskDescription");
  const taskDate = document.querySelector("#taskDate");
  const taskPriority = document.querySelector("#taskPriority");
  const taskProject = document.querySelector("#taskProject");
  const newTask = {
    taskTitle: taskTitle.value,
    taskDescription: taskDescription.value,
    taskDate: taskDate.value,
    taskPriority: taskPriority.value,
    taskProject: taskProject.value,
    taskCompleted: false
  };
  return newTask;
}

// display tasks of selected project
function displayTasks() {
  const taskList = document.querySelector(".taskList");
  // remove existing tasks
  while (taskList.lastChild) {
    taskList.removeChild(taskList.lastChild);
  }
  // add all tasks in projectTaskList
  projectList[currentProjectIndex].projectTaskList.forEach((element, index) => {
    let newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add("task");
    // task header
    let newTaskHeader = document.createElement("div");
    newTaskHeader.classList.add("taskHeader");
    // task left
    let newTaskLeft = document.createElement("div");
    newTaskLeft.classList.add("taskLeft");
    // task button
    let newTaskButton = document.createElement("div");
    // add eventlistener for deleting task
    newTaskButton.addEventListener("click", function () {
      // add function to toggle complete status here!
      // newTaskDiv.classList.toggle("taskCompleted")

      // toggle class between completedTaskList and taskList
      toggleTaskCompleted(element, index);
      // repaint the taskList
      displayTasks();
      // create them in the dropdown
      displayTasksCompleted();
      // update completed task number
      completedTaskCounter();
      setStorage();
    });
    newTaskButton.classList.add("taskButton");
    newTaskLeft.appendChild(newTaskButton);
    // task text
    let newTaskText = document.createElement("div");
    newTaskText.classList.add("taskText");
    newTaskText.textContent = element.taskTitle;
    newTaskLeft.appendChild(newTaskText);
    newTaskHeader.append(newTaskLeft);
    // task right
    let newTaskRight = document.createElement("div");
    newTaskRight.classList.add("taskRight");
    newTaskRight.textContent = element.taskDate;
    // dateInput
    const dateInput = document.createElement("input");
    dateInput.classList.add("dateInput");
    dateInput.type = "date";
    dateInput.addEventListener("input", e => {
      // save the date to the corresponding task in projectList
      element.taskDate = dateInput.value;
      // refresh tasks
      displayTasks();
      // save to local storage
      setStorage();
    });
    newTaskHeader.append(dateInput);
    //add eventlistener to newTaskRight
    newTaskRight.addEventListener("click", function () {
      toggleDateInput(newTaskRight, dateInput);
    });
    newTaskHeader.append(newTaskRight);
    newTaskDiv.append(newTaskHeader);

    // append concealed further task infos
    let newTaskExpand = document.createElement("div");
    newTaskExpand.classList.add("taskExpand");
    newTaskExpand.textContent = element.taskDescription;

    // add trash icon
    let trashIconTask = document.createElement("img");
    trashIconTask.classList.add("trashIcon");
    trashIconTask.src = "trash-icon.png";
    // add project delete eventlistener
    trashIconTask.addEventListener("click", e => {
      // stop the event from propagationg up
      e.stopPropagation();
      // remove task from projectList.projectTaskList
      projectList[currentProjectIndex].projectTaskList.splice(index, 1);
      // repaint content
      displayTasks();
      // update storage
      setStorage();
    });
    newTaskExpand.append(trashIconTask);
    newTaskDiv.append(newTaskExpand);
    taskList.append(newTaskDiv);

    // add eventlistener to task
    newTaskDiv.addEventListener("mouseover", function () {
      displayFullTask(newTaskExpand);
    });
    newTaskDiv.addEventListener("mouseout", function () {
      displayFullTask(newTaskExpand);
    });
  });
}
function toggleDateInput(newTaskRight, dateInput) {
  newTaskRight.classList.toggle("taskDateInvisible");
  dateInput.classList.toggle("taskInputVisible");
}
function displayTasksCompleted() {
  const taskListCompleted = document.querySelector(".contentCompletedExpand");
  // remove existing tasks
  while (taskListCompleted.lastChild) {
    taskListCompleted.removeChild(taskListCompleted.lastChild);
  }
  // add all tasks in projectTaskList
  projectList[currentProjectIndex].projectTaskListCompleted.forEach((element, index) => {
    let newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add("task");
    newTaskDiv.classList.add("taskCompleted");
    // task header
    let newTaskHeader = document.createElement("div");
    newTaskHeader.classList.add("taskHeader");
    // task left
    let newTaskLeft = document.createElement("div");
    newTaskLeft.classList.add("taskLeft");
    // task button
    let newTaskButton = document.createElement("div");
    // add eventlistener for deleting task
    newTaskButton.addEventListener("click", function () {
      toggleTaskCompleted(element, index);
      displayTasksCompleted();
      // update completed task number
      completedTaskCounter();
      displayTasks();
      setStorage();
    });
    newTaskButton.classList.add("taskButton");
    newTaskLeft.appendChild(newTaskButton);
    // task text
    let newTaskText = document.createElement("div");
    newTaskText.classList.add("taskText");
    newTaskText.textContent = element.taskTitle;
    newTaskLeft.appendChild(newTaskText);
    newTaskHeader.append(newTaskLeft);
    // task right
    let newTaskRight = document.createElement("div");
    newTaskRight.classList.add("taskRight");
    newTaskRight.textContent = element.taskDate;
    newTaskHeader.append(newTaskRight);
    newTaskDiv.append(newTaskHeader);

    // append concealed further task infos
    let newTaskExpand = document.createElement("div");
    newTaskExpand.classList.add("taskExpand");
    newTaskExpand.textContent = element.taskDescription;

    // add trash icon
    let trashIconTask = document.createElement("img");
    trashIconTask.classList.add("trashIcon");
    trashIconTask.src = "trash-icon.png";
    // add project delete eventlistener
    trashIconTask.addEventListener("click", e => {
      // stop the event from propagationg up
      e.stopPropagation();
      // remove task from projectList.projectTaskList
      projectList[currentProjectIndex].projectTaskListCompleted.splice(index, 1);
      // repaint completed tasks
      displayTasksCompleted();
      // update completed task number
      completedTaskCounter();
      // update storage
      setStorage();
    });
    newTaskExpand.append(trashIconTask);
    newTaskDiv.append(newTaskExpand);
    taskListCompleted.append(newTaskDiv);

    // add eventlistener to task
    newTaskDiv.addEventListener("mouseover", function () {
      displayFullTask(newTaskExpand);
    });
    newTaskDiv.addEventListener("mouseout", function () {
      displayFullTask(newTaskExpand);
    });
  });
}

// this function handels the task complete
function toggleTaskCompleted(element, index) {
  console.log(element, index);

  // find projectList index of project that contains current task
  let clickedProjectIndex;
  for (let i = 0; i < projectList.length; i++) {
    if (projectList[i].projectTitle === element.taskProject) {
      console.log("the projectList index is: " + i);
      clickedProjectIndex = i;
    }
  }
  // this is the version uncompleted->completed
  if (element.taskCompleted) {
    // remove task from projectTaskListCompleted
    projectList[clickedProjectIndex].projectTaskListCompleted.splice(index, 1);
    // add task to projectTaskListCompleted
    projectList[clickedProjectIndex].projectTaskList.push(element);
    // set task as uncompleted
    element.taskCompleted = false;
    console.log(projectList[clickedProjectIndex]);
  } else {
    // this is the version completed->uncompleted
    //remove task from project
    projectList[clickedProjectIndex].projectTaskList.splice(index, 1);
    // add task to projectTaskListCompleted
    projectList[clickedProjectIndex].projectTaskListCompleted.push(element);
    // set task as completed
    element.taskCompleted = true;
    console.log(projectList[clickedProjectIndex]);
  }
}
function displayFullTask(task) {
  task.classList.toggle("taskExpandActive");
}
function displayCurrentProjectTitle() {
  if (projectList.length === 0) {
    alert("no projects left");
  } else {
    // update contentProjectTitle
    const contentProjectTitle = document.querySelector(".contentProjectTitle");
    contentProjectTitle.textContent = projectList[currentProjectIndex].projectTitle;
  }
}

// create project object
function createProject() {
  const projectTitle = document.querySelector("#projectTitle");
  const projectDescription = document.querySelector("#projectDescription");
  const newProject = {
    projectTitle: projectTitle.value,
    projectDescription: projectDescription.value,
    projectTaskList: [],
    projectTaskListCompleted: []
  };
  // clear input fields
  projectTitle.value = "";
  projectDescription.value = "";
  return newProject;
}
function paintProjects() {
  const projectMenuList = document.querySelector(".projectsList");
  // remove existing projects
  while (projectMenuList.lastChild) {
    projectMenuList.removeChild(projectMenuList.lastChild);
  }
  // add all items in projectList array
  projectList.forEach((element, index) => {
    let listItem = document.createElement("div");
    listItem.textContent = element.projectTitle;
    listItem.classList.add("menuProject");
    listItem.dataset.projectId = index;
    listItem.addEventListener("click", () => {
      // change currentProjectIndex on click
      currentProjectIndex = index;
      displayCurrentProjectTitle();
      displayTasks();
      displayTasksCompleted();
      completedTaskCounter(currentProjectIndex);
    });
    // append concealed further project infos
    let newProjectExpand = document.createElement("div");
    newProjectExpand.classList.add("projectExpand");
    newProjectExpand.textContent = element.projectDescription;
    // add trash icon
    let trashIcon = document.createElement("img");
    trashIcon.classList.add("trashIcon");
    trashIcon.src = "trash-icon.png";
    // add project delete eventlistener
    trashIcon.addEventListener("click", e => {
      // stop the event from propagationg up
      e.stopPropagation();
      // remove project from projectList
      projectList.splice(index, 1);
      // change currentProjectIndex
      console.log(currentProjectIndex);
      if (currentProjectIndex !== 0) {
        currentProjectIndex--;
      }
      console.log(currentProjectIndex);
      // repaint project menu
      paintProjects();
      // repaint content
      displayCurrentProjectTitle();
      displayTasks();
      // update project select in modal
      updateProjectSelect();
      // update completed task number
      completedTaskCounter();
      // update the completed tasks
      displayTasksCompleted();
      // update storage
      setStorage();
    });
    newProjectExpand.append(trashIcon);
    listItem.append(newProjectExpand);

    // add eventlistener for hover expand
    listItem.addEventListener("mouseover", function () {
      displayFullProject(newProjectExpand);
    });
    listItem.addEventListener("mouseout", function () {
      displayFullProject(newProjectExpand);
    });
    projectMenuList.appendChild(listItem);
  });
}
function displayFullProject(project) {
  project.classList.toggle("projectExpandActive");
}
function displayMobileMenu() {
  const burgerMenu = document.querySelector(".burgerMenu");
  const menu = document.querySelector(".menu");
  const line1 = document.querySelector('.line1');
  const line2 = document.querySelector('.line2');
  const line3 = document.querySelector('.line3');
  burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("menuMobileActive");
    burgerMenu.classList.toggle("toggle");
  });
}
const contentCompletedHeaderIcon = document.querySelector(".contentCompletedHeaderIcon");
contentCompletedHeaderIcon.addEventListener("click", toggleCompletedIcon);
function toggleCompletedIcon() {
  // activate icon
  contentCompletedHeaderIcon.classList.toggle("completedDropdownActive");
  // activate dropdown
  const contentCompletedExpand = document.querySelector(".contentCompletedExpand");
  contentCompletedExpand.classList.toggle("completedDropdownActive");
}
function completedTaskCounter() {
  const contentCompletedNumber = document.querySelector(".contentCompletedNumber");
  contentCompletedNumber.textContent = projectList[currentProjectIndex].projectTaskListCompleted.length;
}

// initial filling of previously empty storage
function setStorage() {
  // localStorage only accepts string datatype
  // object (projectList) needs to be converted to JSON
  localStorage.setItem("projectList", JSON.stringify(projectList));
}
// edit existing storage
function getStorage() {
  let localStorageReturn = JSON.parse(localStorage.getItem('projectList'));
  console.log(localStorageReturn);
  return localStorageReturn;
}

// check if local storage is populated
if (!localStorage.getItem('projectList')) {
  setStorage();
} else {
  // update projectList to local storage content
  projectList = getStorage();
}
// initial update of content
paintProjects();
updateProjectSelect();
displayCurrentProjectTitle();
displayTasks();
displayMobileMenu();
displayTasksCompleted();
completedTaskCounter();

/*
style: 
  display priority in some way
  improve layout on really wide displays
  work on overflow for titles and descriptions


bug: 
  it is not possible to delete all but 1 project
  mobile: inputScreens not covering screen anymore
  if projectDescription is empty the trash icon in project menu moves to the left

todos:
  add inputs on: 
    taskTitle, taskDescription, 
    projectTitle, projectDescription
  add sort function for date
  move all dom manipulation to seperate file

  modals
    style task modal (align inputs)
    add input validation
      this requires the inputs to be coded as forms
      e.preventDefault to prevent the form from being submitted to a nonexistant backend


  readme: 
    babel
    webpack
    

*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBcUIsRUFBRTtBQUN2QkMsb0JBQW9CLEVBQUU7O0FBS3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2stbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdGFzay1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Fzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvY2xvbmVPYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFzay1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFzay1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2stbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2stbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFzay1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2stbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFzay1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFzay1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFzay1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzTGFzdERheU9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFzay1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFzay1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFzay1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2stbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFzay1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFzay1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2stbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2stbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YXNrLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rhc2stbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rhc2stbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rhc2stbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdG9nZ2xlUHJvamVjdElucHV0KCl7XG4gIGNvbnN0IGlucHV0UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0Rm9ybVByb2plY3RcIik7XG4gIGNvbnN0IGlucHV0U2NyZWVuUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRTY3JlZW5Qcm9qZWN0XCIpO1xuXG4gIGlucHV0UHJvamVjdEZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICBpbnB1dFNjcmVlblByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVGFza0lucHV0KCl7XG4gIGNvbnN0IGlucHV0Rm9ybVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0Rm9ybVRhc2tcIik7XG4gIGNvbnN0IGlucHV0U2NyZWVuVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRTY3JlZW5UYXNrXCIpO1xuXG4gIGlucHV0Rm9ybVRhc2suY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICBpbnB1dFNjcmVlblRhc2suY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxufVxuXG5cblxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIG9iamVjdCkge1xuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhc3NpZ24gcmVxdWlyZXMgdGhhdCBpbnB1dCBwYXJhbWV0ZXIgbm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gIH1cblxuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgICA7XG4gICAgICB0YXJnZXRbcHJvcGVydHldID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL2Fzc2lnbi9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiBhc3NpZ24oe30sIG9iamVjdCk7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsInZhciByb3VuZGluZ01hcCA9IHtcbiAgY2VpbDogTWF0aC5jZWlsLFxuICByb3VuZDogTWF0aC5yb3VuZCxcbiAgZmxvb3I6IE1hdGguZmxvb3IsXG4gIHRydW5jOiBmdW5jdGlvbiB0cnVuYyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmNlaWwodmFsdWUpIDogTWF0aC5mbG9vcih2YWx1ZSk7XG4gIH0gLy8gTWF0aC50cnVuYyBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG5cbn07XG52YXIgZGVmYXVsdFJvdW5kaW5nTWV0aG9kID0gJ3RydW5jJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3VuZGluZ01ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIG1ldGhvZCA/IHJvdW5kaW5nTWFwW21ldGhvZF0gOiByb3VuZGluZ01hcFtkZWZhdWx0Um91bmRpbmdNZXRob2RdO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCAxKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgMCwgMzEpXG4gKiApXG4gKiAvLz0+IDhcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHllYXJEaWZmID0gZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIGRhdGVSaWdodC5nZXRGdWxsWWVhcigpO1xuICB2YXIgbW9udGhEaWZmID0gZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIGRhdGVSaWdodC5nZXRNb250aCgpO1xuICByZXR1cm4geWVhckRpZmYgKiAxMiArIG1vbnRoRGlmZjtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaWxsaXNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjIwLjYwMCBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjEuNzAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIxLCA3MDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCA2MDApXG4gKiApXG4gKiAvLz0+IDExMDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkYXRlTGVmdCkuZ2V0VGltZSgpIC0gdG9EYXRlKGRhdGVSaWdodCkuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgaXNMYXN0RGF5T2ZNb250aCBmcm9tIFwiLi4vaXNMYXN0RGF5T2ZNb250aC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5Nb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBmdWxsIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIHVzaW5nIHRydW5jIGFzIGEgZGVmYXVsdCByb3VuZGluZyBtZXRob2QuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBmdWxsIG1vbnRoc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5Nb250aHMobmV3IERhdGUoMjAxNCwgOCwgMSksIG5ldyBEYXRlKDIwMTQsIDAsIDMxKSlcbiAqIC8vPT4gN1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1vbnRocyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHNpZ24gPSBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICB2YXIgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpKTtcbiAgdmFyIHJlc3VsdDsgLy8gQ2hlY2sgZm9yIHRoZSBkaWZmZXJlbmNlIG9mIGxlc3MgdGhhbiBtb250aFxuXG4gIGlmIChkaWZmZXJlbmNlIDwgMSkge1xuICAgIHJlc3VsdCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRhdGVMZWZ0LmdldE1vbnRoKCkgPT09IDEgJiYgZGF0ZUxlZnQuZ2V0RGF0ZSgpID4gMjcpIHtcbiAgICAgIC8vIFRoaXMgd2lsbCBjaGVjayBpZiB0aGUgZGF0ZSBpcyBlbmQgb2YgRmViIGFuZCBhc3NpZ24gYSBoaWdoZXIgZW5kIG9mIG1vbnRoIGRhdGVcbiAgICAgIC8vIHRvIGNvbXBhcmUgaXQgd2l0aCBKYW5cbiAgICAgIGRhdGVMZWZ0LnNldERhdGUoMzApO1xuICAgIH1cblxuICAgIGRhdGVMZWZ0LnNldE1vbnRoKGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBzaWduICogZGlmZmVyZW5jZSk7IC8vIE1hdGguYWJzKGRpZmYgaW4gZnVsbCBtb250aHMgLSBkaWZmIGluIGNhbGVuZGFyIG1vbnRocykgPT09IDEgaWYgbGFzdCBjYWxlbmRhciBtb250aCBpcyBub3QgZnVsbFxuICAgIC8vIElmIHNvLCByZXN1bHQgbXVzdCBiZSBkZWNyZWFzZWQgYnkgMSBpbiBhYnNvbHV0ZSB2YWx1ZVxuXG4gICAgdmFyIGlzTGFzdE1vbnRoTm90RnVsbCA9IGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkgPT09IC1zaWduOyAvLyBDaGVjayBmb3IgY2FzZXMgb2Ygb25lIGZ1bGwgY2FsZW5kYXIgbW9udGhcblxuICAgIGlmIChpc0xhc3REYXlPZk1vbnRoKHRvRGF0ZShkaXJ0eURhdGVMZWZ0KSkgJiYgZGlmZmVyZW5jZSA9PT0gMSAmJiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRhdGVSaWdodCkgPT09IDEpIHtcbiAgICAgIGlzTGFzdE1vbnRoTm90RnVsbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJlc3VsdCA9IHNpZ24gKiAoZGlmZmVyZW5jZSAtIE51bWJlcihpc0xhc3RNb250aE5vdEZ1bGwpKTtcbiAgfSAvLyBQcmV2ZW50IG5lZ2F0aXZlIHplcm9cblxuXG4gIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xufSIsImltcG9ydCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4uL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJblNlY29uZHNcbiAqIEBjYXRlZ29yeSBTZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3RydW5jJ10gLSBhIHJvdW5kaW5nIG1ldGhvZCAoYGNlaWxgLCBgZmxvb3JgLCBgcm91bmRgIG9yIGB0cnVuY2ApXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIHNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MDcuOTk5IGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMC4wMDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCA3LCA5OTkpXG4gKiApXG4gKiAvLz0+IDEyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSAvIDEwMDA7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIG1vbnRoIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDMwIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoICsgMSwgMCk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5Nb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJblNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGNsb25lT2JqZWN0IGZyb20gXCIuLi9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzXCI7XG5pbXBvcnQgYXNzaWduIGZyb20gXCIuLi9fbGliL2Fzc2lnbi9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSU5VVEVTX0lOX0RBWSA9IDE0NDA7XG52YXIgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMgPSAyNTIwO1xudmFyIE1JTlVURVNfSU5fTU9OVEggPSA0MzIwMDtcbnZhciBNSU5VVEVTX0lOX1RXT19NT05USFMgPSA4NjQwMDtcbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIC4uLiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgfFxuICogfCAzMCBzZWNzIC4uLiAxIG1pbiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEgbWludXRlICAgICAgICAgICAgfFxuICogfCAxIG1pbiAzMCBzZWNzIC4uLiA0NCBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi40NF0gbWludXRlcyAgICAgfFxuICogfCA0NCBtaW5zIC4uLiAzMCBzZWNzIC4uLiA4OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgaG91ciAgICAgICAgfFxuICogfCA4OSBtaW5zIDMwIHNlY3MgLi4uIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IFsyLi4yNF0gaG91cnMgfFxuICogfCAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0MSBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICB8IDEgZGF5ICAgICAgICAgICAgICAgfFxuICogfCA0MSBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICB8IFsyLi4zMF0gZGF5cyAgICAgICAgfFxuICogfCAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDEgbW9udGggICAgICAgfFxuICogfCA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDIgbW9udGhzICAgICAgfFxuICogfCA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDEgeXIgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi4xMl0gbW9udGhzICAgICAgfFxuICogfCAxIHlyIC4uLiAxIHlyIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgeWVhciAgICAgICAgfFxuICogfCAxIHlyIDMgbW9udGhzIC4uLiAxIHlyIDkgbW9udGggcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgMSB5ZWFyICAgICAgICAgfFxuICogfCAxIHlyIDkgbW9udGhzIC4uLiAyIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCAyIHllYXJzICAgICAgfFxuICogfCBOIHlycyAuLi4gTiB5cnMgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IE4geWVhcnMgICAgICAgfFxuICogfCBOIHlycyAzIG1vbnRocyAuLi4gTiB5cnMgOSBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgTiB5ZWFycyAgICAgICAgfFxuICogfCBOIHlycyA5IG1vbnRocyAuLi4gTisxIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCBOKzEgeWVhcnMgICAgfFxuICpcbiAqIFdpdGggYG9wdGlvbnMuaW5jbHVkZVNlY29uZHMgPT0gdHJ1ZWA6XG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgfCBSZXN1bHQgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgc2VjcyAuLi4gNSBzZWNzICAgICAgfCBsZXNzIHRoYW4gNSBzZWNvbmRzICB8XG4gKiB8IDUgc2VjcyAuLi4gMTAgc2VjcyAgICAgfCBsZXNzIHRoYW4gMTAgc2Vjb25kcyB8XG4gKiB8IDEwIHNlY3MgLi4uIDIwIHNlY3MgICAgfCBsZXNzIHRoYW4gMjAgc2Vjb25kcyB8XG4gKiB8IDIwIHNlY3MgLi4uIDQwIHNlY3MgICAgfCBoYWxmIGEgbWludXRlICAgICAgICB8XG4gKiB8IDQwIHNlY3MgLi4uIDYwIHNlY3MgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgICB8XG4gKiB8IDYwIHNlY3MgLi4uIDkwIHNlY3MgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgICB8XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBiYXNlRGF0ZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluY2x1ZGVTZWNvbmRzPWZhbHNlXSAtIGRpc3RhbmNlcyBsZXNzIHRoYW4gYSBtaW51dGUgYXJlIG1vcmUgZGV0YWlsZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBpbmRpY2F0ZXMgaWYgdGhlIHNlY29uZCBkYXRlIGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgZmlyc3RcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgYmFzZURhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgSnVseSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1XG4gKiAvLyBhbmQgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDAsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KSxcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMCksXG4gKiAgIHsgaW5jbHVkZVNlY29uZHM6IHRydWUgfVxuICogKVxuICogLy89PiAnbGVzcyB0aGFuIDIwIHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gMSBKYW51YXJ5IDIwMTZcbiAqIC8vIHRvIDEgSmFudWFyeSAyMDE1LCB3aXRoIGEgc3VmZml4P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNSwgMCwgMSksIG5ldyBEYXRlKDIwMTYsIDAsIDEpLCB7XG4gKiAgIGFkZFN1ZmZpeDogdHJ1ZVxuICogfSlcbiAqIC8vPT4gJ2Fib3V0IDEgeWVhciBhZ28nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBBdWd1c3QgMjAxNiBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gRXNwZXJhbnRvP1xuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE2LCA3LCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJ3BsaSBvbCAxIGphcm8nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGU7XG5cbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0RGlzdGFuY2UpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXREaXN0YW5jZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlQXNjKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSk7XG5cbiAgaWYgKGlzTmFOKGNvbXBhcmlzb24pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG5cbiAgdmFyIGxvY2FsaXplT3B0aW9ucyA9IGFzc2lnbihjbG9uZU9iamVjdChvcHRpb25zKSwge1xuICAgIGFkZFN1ZmZpeDogQm9vbGVhbihvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkU3VmZml4KSxcbiAgICBjb21wYXJpc29uOiBjb21wYXJpc29uXG4gIH0pO1xuICB2YXIgZGF0ZUxlZnQ7XG4gIHZhciBkYXRlUmlnaHQ7XG5cbiAgaWYgKGNvbXBhcmlzb24gPiAwKSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gIH1cblxuICB2YXIgc2Vjb25kcyA9IGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7XG4gIHZhciBvZmZzZXRJblNlY29uZHMgPSAoZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlUmlnaHQpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCkpIC8gMTAwMDtcbiAgdmFyIG1pbnV0ZXMgPSBNYXRoLnJvdW5kKChzZWNvbmRzIC0gb2Zmc2V0SW5TZWNvbmRzKSAvIDYwKTtcbiAgdmFyIG1vbnRoczsgLy8gMCB1cCB0byAyIG1pbnNcblxuICBpZiAobWludXRlcyA8IDIpIHtcbiAgICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcykge1xuICAgICAgaWYgKHNlY29uZHMgPCA1KSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCA1LCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDEwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDIwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnaGFsZkFNaW51dGUnLCAwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gLy8gMiBtaW5zIHVwIHRvIDAuNzUgaHJzXG5cbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgNDUpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDAuNzUgaHJzIHVwIHRvIDEuNSBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgOTApIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIDEsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEuNSBocnMgdXAgdG8gMjQgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fREFZKSB7XG4gICAgdmFyIGhvdXJzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gNjApO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgaG91cnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgZGF5IHVwIHRvIDEuNzUgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0FMTU9TVF9UV09fREFZUykge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgMSwgbG9jYWxpemVPcHRpb25zKTsgLy8gMS43NSBkYXlzIHVwIHRvIDMwIGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9NT05USCkge1xuICAgIHZhciBkYXlzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9EQVkpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgZGF5cywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSBtb250aCB1cCB0byAyIG1vbnRoc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX1RXT19NT05USFMpIHtcbiAgICBtb250aHMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhNb250aHMnLCBtb250aHMsIGxvY2FsaXplT3B0aW9ucyk7XG4gIH1cblxuICBtb250aHMgPSBkaWZmZXJlbmNlSW5Nb250aHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7IC8vIDIgbW9udGhzIHVwIHRvIDEyIG1vbnRoc1xuXG4gIGlmIChtb250aHMgPCAxMikge1xuICAgIHZhciBuZWFyZXN0TW9udGggPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TW9udGhzJywgbmVhcmVzdE1vbnRoLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIHllYXIgdXAgdG8gbWF4IERhdGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9udGhzU2luY2VTdGFydE9mWWVhciA9IG1vbnRocyAlIDEyO1xuICAgIHZhciB5ZWFycyA9IE1hdGguZmxvb3IobW9udGhzIC8gMTIpOyAvLyBOIHllYXJzIHVwIHRvIDEgeWVhcnMgMyBtb250aHNcblxuICAgIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgMykge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTsgLy8gTiB5ZWFycyAzIG1vbnRocyB1cCB0byBOIHllYXJzIDkgbW9udGhzXG4gICAgfSBlbHNlIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgOSkge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnb3ZlclhZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyBOIHllYXJzIDkgbW9udGhzIHVwIHRvIE4geWVhciAxMiBtb250aHNcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWxtb3N0WFllYXJzJywgeWVhcnMgKyAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGVuZE9mRGF5IGZyb20gXCIuLi9lbmRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IGVuZE9mTW9udGggZnJvbSBcIi4uL2VuZE9mTW9udGgvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzTGFzdERheU9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMjggRmVicnVhcnkgMjAxNCB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzTGFzdERheU9mTW9udGgobmV3IERhdGUoMjAxNCwgMSwgMjgpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNMYXN0RGF5T2ZNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiBlbmRPZkRheShkYXRlKS5nZXRUaW1lKCkgPT09IGVuZE9mTW9udGgoZGF0ZSkuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IGFkZERheXMgZnJvbSBcIi4uL2FkZERheXMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCAxMCBkYXlzIGZyb20gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1YkRheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBGcmkgQXVnIDIyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJEYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkRGF5cyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGZvcm1hdERpc3RhbmNlLCBzdWJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnXG5jb25zdCB0ZXN0ID0gZm9ybWF0RGlzdGFuY2Uoc3ViRGF5cyhuZXcgRGF0ZSgpLCAzKSwgbmV3IERhdGUoKSwgeyBhZGRTdWZmaXg6IHRydWUgfSlcblxuaW1wb3J0IHt0b2dnbGVQcm9qZWN0SW5wdXQsIHRvZ2dsZVRhc2tJbnB1dH0gZnJvbSAnLi9kb20uanMnO1xuXG5cbi8vIHN0YXJ0IHByb2plY3QgbW9kYWxcbmNvbnN0IG5ld0l0ZW1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1Byb2plY3RCdXR0b25cIilcbm5ld0l0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVByb2plY3RJbnB1dClcbi8vIGVuZCBwcm9qZWN0IG1vZGFsXG5jb25zdCBpbnB1dFNjcmVlblByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0U2NyZWVuUHJvamVjdFwiKVxuaW5wdXRTY3JlZW5Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVQcm9qZWN0SW5wdXQpXG5cbi8vIHN0YXJ0IHRhc2sgbW9kYWxcbmNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1Rhc2tCdXR0b25cIilcbm5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVRhc2tJbnB1dClcbi8vIGVuZCBwcm9qZWN0IG1vZGFsXG5jb25zdCBpbnB1dFNjcmVlblRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0U2NyZWVuVGFza1wiKVxuaW5wdXRTY3JlZW5UYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVUYXNrSW5wdXQpXG5cbmxldCBjdXJyZW50UHJvamVjdEluZGV4ID0gMCAvLyBzdGFydCBvbiBpbmJveFxuXG4vLyBjcmVhdGUgcHJvamVjdCBhcnJheVxubGV0IHByb2plY3RMaXN0ID0gXG5bXG4gIHtcbiAgcHJvamVjdFRpdGxlOiBcIndlZWtlbmRcIiwgXG4gIHByb2plY3REZXNjcmlwdGlvbjogXCJwbGFucyBmb3IgdGhlIHdlZWtlbmRcIiwgXG4gIHByb2plY3RUYXNrTGlzdDogW1xuICAgIHt0YXNrVGl0bGU6IFwiZ28gc2hvcHBpbmdcIiwgXG4gICAgICB0YXNrRGVzY3JpcHRpb246IFwiZ28gdG8gcmV3ZVwiLCBcbiAgICAgIHRhc2tEYXRlOiBcIjAxLjAzLjIzXCIsIFxuICAgICAgdGFza1ByaW9yaXR5OiBcImxvd1wiLCBcbiAgICAgIHRhc2tQcm9qZWN0OiBcIndlZWtlbmRcIn0sIFxuICAgIHt0YXNrVGl0bGU6IFwiU3BvcnRzXCIsIFxuICAgICAgdGFza0Rlc2NyaXB0aW9uOiBcInN0YXkgZml0XCIsIFxuICAgICAgdGFza0RhdGU6IFwiMTQuMTEuMjNcIiwgXG4gICAgICB0YXNrUHJpb3JpdHk6IFwiaGlnaFwiLCBcbiAgICAgIHRhc2tQcm9qZWN0OiBcIndlZWtlbmRcIn0sIFxuICAgIHt0YXNrVGl0bGU6IFwiU3R1ZHkgS29yZWFuXCIsIFxuICAgIHRhc2tEZXNjcmlwdGlvbjogXCJNYWVpbCBqb25zZXVwIGhhZXlvXCIsIFxuICAgIHRhc2tEYXRlOiBcIjE0LjExLjIzXCIsIFxuICAgIHRhc2tQcmlvcml0eTogXCJoaWdoXCIsIFxuICAgIHRhc2tQcm9qZWN0OiBcIndlZWtlbmRcIn1dLCBcbiAgcHJvamVjdFRhc2tMaXN0Q29tcGxldGVkOiBbe1xuICAgIHRhc2tUaXRsZTogXCJzdHVkeSBqYXZhc2NyaXB0XCIsIFxuICAgIHRhc2tEZXNjcmlwdGlvbjogXCJlYXN5XCIsIFxuICAgIHRhc2tEYXRlOiBcIjE0LjExLjIxXCIsIFxuICAgIHRhc2tQcmlvcml0eTogXCJoaWdoXCIsIFxuICAgIHRhc2tQcm9qZWN0OiBcIndlZWtlbmRcIn1dXG4gIH0sXG4gIHtcbiAgcHJvamVjdFRpdGxlOiBcInRoaXMgd2Vla1wiLCBcbiAgcHJvamVjdERlc2NyaXB0aW9uOiBcInBsYW5zIGZvciB0aGUgd2Vla1wiLCBcbiAgcHJvamVjdFRhc2tMaXN0OiBbXG4gICAge3Rhc2tUaXRsZTogXCJnbyB0byB3b3JrXCIsIFxuICAgICAgdGFza0Rlc2NyaXB0aW9uOiBcIjUgdGltZXNcIiwgXG4gICAgICB0YXNrRGF0ZTogXCIwMS4wMy4yM1wiLCBcbiAgICAgIHRhc2tQcmlvcml0eTogXCJsb3dcIiwgXG4gICAgICB0YXNrUHJvamVjdDogXCJ0aGlzIHdlZWtcIn0sIFxuICAgIHt0YXNrVGl0bGU6IFwibGVhcm4gUmVhY3RcIiwgXG4gICAgICB0YXNrRGVzY3JpcHRpb246IFwibGV0cyBnb1wiLCBcbiAgICAgIHRhc2tEYXRlOiBcIjE0LjExLjIzXCIsIFxuICAgICAgdGFza1ByaW9yaXR5OiBcImhpZ2hcIiwgXG4gICAgICB0YXNrUHJvamVjdDogXCJ0aGlzIHdlZWtcIn0sIFxuICAgIHt0YXNrVGl0bGU6IFwiU3R1ZHkgS29yZWFuXCIsIFxuICAgIHRhc2tEZXNjcmlwdGlvbjogXCJBbnlvbmdoYXNhZXlvXCIsIFxuICAgIHRhc2tEYXRlOiBcIjE0LjExLjIzXCIsIFxuICAgIHRhc2tQcmlvcml0eTogXCJoaWdoXCIsIFxuICAgIHRhc2tQcm9qZWN0OiBcInRoaXMgd2Vla1wifV0sIFxuICBwcm9qZWN0VGFza0xpc3RDb21wbGV0ZWQ6IFt7XG4gICAgdGFza1RpdGxlOiBcInN0dWR5IENTU1wiLCBcbiAgICB0YXNrRGVzY3JpcHRpb246IFwiZWFzeVwiLCBcbiAgICB0YXNrRGF0ZTogXCIxNC4xMS4yMVwiLCBcbiAgICB0YXNrUHJpb3JpdHk6IFwiaGlnaFwiLCBcbiAgICB0YXNrUHJvamVjdDogXCJ0aGlzIHdlZWtcIn1dXG4gIH1cbl1cblxuLy8gZXZlbnQgbGlzdGVuZXIgb24gcHJvamVjdCBzdWJtaXRcbmNvbnN0IHByb2plY3RTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RTdWJtaXRCdXR0b25cIilcbnByb2plY3RTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbGV0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KClcbiAgXG4gIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdClcbiAgcGFpbnRQcm9qZWN0cygpXG4gIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KVxuICB1cGRhdGVQcm9qZWN0U2VsZWN0KClcbiAgc2V0U3RvcmFnZSgpXG59KVxuLy8gZXZlbnQgbGlzdGVuZXIgb24gdGFzayBzdWJtaXRcbmNvbnN0IHRhc2tTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tTdWJtaXRCdXR0b25cIilcbnRhc2tTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKClcblxuICAvLyBjbGVhciBpbnB1dCBmaWVsZHNcbiAgdGFza1RpdGxlLnZhbHVlID0gXCJcIlxuICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSBcIlwiXG5cbiAgLy8gZGVjaWRlIHRvIHdoaWNoIHByb2plY3QgdGhlIHRhc2sgc2hvdWxkIGJlIHB1c2hlZFxuICBmb3IobGV0IGk9MDsgaTxwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgaWYocHJvamVjdExpc3QuYXQoaSkucHJvamVjdFRpdGxlPT09bmV3VGFzay50YXNrUHJvamVjdCl7XG4gICAgICBwcm9qZWN0TGlzdFtpXS5wcm9qZWN0VGFza0xpc3QucHVzaChuZXdUYXNrKVxuICAgIH1cbiAgfVxuICBkaXNwbGF5VGFza3MoKVxuICBzZXRTdG9yYWdlKClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RTZWxlY3QoKXtcbiAgY29uc3QgdGFza1Byb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tQcm9qZWN0XCIpXG4gIC8vIGRlbGV0ZSBjdXJyZW50IG9wdGlvbnNcbiAgd2hpbGUodGFza1Byb2plY3RTZWxlY3QubGFzdENoaWxkKXtcbiAgICB0YXNrUHJvamVjdFNlbGVjdC5yZW1vdmVDaGlsZCh0YXNrUHJvamVjdFNlbGVjdC5sYXN0Q2hpbGQpXG4gIH1cblxuICAvLyBmaWxsIHByb2plY3Qgc2VsZWN0IGluIHRhc2sgbW9kYWwgd2l0aCBhbGwgYWN0aXZlIHByb2plY3RzXG4gIHByb2plY3RMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgbGV0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IGVsZW1lbnQucHJvamVjdFRpdGxlXG4gICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJvamVjdFRpdGxlXG4gICAgdGFza1Byb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbilcbiAgICB9KVxufVxuXG5cblxuLy8gY3JlYXRlIHRhc2sgb2JqZWN0XG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpe1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tUaXRsZVwiKVxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEZXNjcmlwdGlvblwiKVxuICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0RhdGVcIilcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrUHJpb3JpdHlcIilcbiAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tQcm9qZWN0XCIpXG5cbiAgY29uc3QgbmV3VGFzayA9IHtcbiAgICB0YXNrVGl0bGUgOiB0YXNrVGl0bGUudmFsdWUsXG4gICAgdGFza0Rlc2NyaXB0aW9uIDogdGFza0Rlc2NyaXB0aW9uLnZhbHVlLFxuICAgIHRhc2tEYXRlIDogdGFza0RhdGUudmFsdWUsXG4gICAgdGFza1ByaW9yaXR5IDogdGFza1ByaW9yaXR5LnZhbHVlLFxuICAgIHRhc2tQcm9qZWN0OiB0YXNrUHJvamVjdC52YWx1ZSxcbiAgICB0YXNrQ29tcGxldGVkOiBmYWxzZSxcbiAgfVxuICByZXR1cm4gbmV3VGFza1xufVxuXG4vLyBkaXNwbGF5IHRhc2tzIG9mIHNlbGVjdGVkIHByb2plY3RcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpe1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0xpc3RcIilcbiAgLy8gcmVtb3ZlIGV4aXN0aW5nIHRhc2tzXG4gIHdoaWxlKHRhc2tMaXN0Lmxhc3RDaGlsZCl7XG4gICAgdGFza0xpc3QucmVtb3ZlQ2hpbGQodGFza0xpc3QubGFzdENoaWxkKVxuICB9XG4gIC8vIGFkZCBhbGwgdGFza3MgaW4gcHJvamVjdFRhc2tMaXN0XG4gIHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrTGlzdC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGxldCBuZXdUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIilcbiAgICAgIC8vIHRhc2sgaGVhZGVyXG4gICAgICBsZXQgbmV3VGFza0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgIG5ld1Rhc2tIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRhc2tIZWFkZXJcIilcbiAgICAgICAgLy8gdGFzayBsZWZ0XG4gICAgICAgIGxldCBuZXdUYXNrTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgbmV3VGFza0xlZnQuY2xhc3NMaXN0LmFkZChcInRhc2tMZWZ0XCIpXG4gICAgICAgICAgLy8gdGFzayBidXR0b25cbiAgICAgICAgICBsZXQgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAvLyBhZGQgZXZlbnRsaXN0ZW5lciBmb3IgZGVsZXRpbmcgdGFza1xuICAgICAgICAgIG5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBhZGQgZnVuY3Rpb24gdG8gdG9nZ2xlIGNvbXBsZXRlIHN0YXR1cyBoZXJlIVxuICAgICAgICAgICAgLy8gbmV3VGFza0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwidGFza0NvbXBsZXRlZFwiKVxuXG5cbiAgICAgICAgICAgIC8vIHRvZ2dsZSBjbGFzcyBiZXR3ZWVuIGNvbXBsZXRlZFRhc2tMaXN0IGFuZCB0YXNrTGlzdFxuICAgICAgICAgICAgdG9nZ2xlVGFza0NvbXBsZXRlZChlbGVtZW50LCBpbmRleClcbiAgICAgICAgICAgIC8vIHJlcGFpbnQgdGhlIHRhc2tMaXN0XG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoKVxuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZW0gaW4gdGhlIGRyb3Bkb3duXG4gICAgICAgICAgICBkaXNwbGF5VGFza3NDb21wbGV0ZWQoKVxuICAgICAgICAgICAgLy8gdXBkYXRlIGNvbXBsZXRlZCB0YXNrIG51bWJlclxuICAgICAgICAgICAgY29tcGxldGVkVGFza0NvdW50ZXIoKVxuICAgICAgICAgICAgc2V0U3RvcmFnZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgICBuZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQnV0dG9uXCIpXG4gICAgICAgICAgbmV3VGFza0xlZnQuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbilcbiAgICAgICAgICAvLyB0YXNrIHRleHRcbiAgICAgICAgICBsZXQgbmV3VGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgbmV3VGFza1RleHQuY2xhc3NMaXN0LmFkZChcInRhc2tUZXh0XCIpXG4gICAgICAgICAgbmV3VGFza1RleHQudGV4dENvbnRlbnQgPSBlbGVtZW50LnRhc2tUaXRsZVxuICAgICAgICAgIG5ld1Rhc2tMZWZ0LmFwcGVuZENoaWxkKG5ld1Rhc2tUZXh0KVxuICAgICAgICBuZXdUYXNrSGVhZGVyLmFwcGVuZChuZXdUYXNrTGVmdClcbiAgICAgICAgICAvLyB0YXNrIHJpZ2h0XG4gICAgICAgICAgbGV0IG5ld1Rhc2tSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICBuZXdUYXNrUmlnaHQuY2xhc3NMaXN0LmFkZChcInRhc2tSaWdodFwiKVxuICAgICAgICAgIG5ld1Rhc2tSaWdodC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGFza0RhdGVcbiAgICAgICAgICAvLyBkYXRlSW5wdXRcbiAgICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICAgICAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImRhdGVJbnB1dFwiKVxuICAgICAgICAgIGRhdGVJbnB1dC50eXBlPSBcImRhdGVcIlxuICAgICAgICAgIGRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIHNhdmUgdGhlIGRhdGUgdG8gdGhlIGNvcnJlc3BvbmRpbmcgdGFzayBpbiBwcm9qZWN0TGlzdFxuICAgICAgICAgICAgZWxlbWVudC50YXNrRGF0ZSA9IGRhdGVJbnB1dC52YWx1ZVxuICAgICAgICAgICAgLy8gcmVmcmVzaCB0YXNrc1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKClcbiAgICAgICAgICAgIC8vIHNhdmUgdG8gbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgc2V0U3RvcmFnZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgbmV3VGFza0hlYWRlci5hcHBlbmQoZGF0ZUlucHV0KVxuICAgICAgICAgIC8vYWRkIGV2ZW50bGlzdGVuZXIgdG8gbmV3VGFza1JpZ2h0XG4gICAgICAgICAgbmV3VGFza1JpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdG9nZ2xlRGF0ZUlucHV0KG5ld1Rhc2tSaWdodCwgZGF0ZUlucHV0KVxuICAgICAgICAgIH0gKVxuICAgICAgICBuZXdUYXNrSGVhZGVyLmFwcGVuZChuZXdUYXNrUmlnaHQpXG4gICAgICBuZXdUYXNrRGl2LmFwcGVuZChuZXdUYXNrSGVhZGVyKVxuICAgICAgXG4gICAgICAvLyBhcHBlbmQgY29uY2VhbGVkIGZ1cnRoZXIgdGFzayBpbmZvc1xuICAgICAgbGV0IG5ld1Rhc2tFeHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICBuZXdUYXNrRXhwYW5kLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRXhwYW5kXCIpXG4gICAgICBuZXdUYXNrRXhwYW5kLnRleHRDb250ZW50ID0gZWxlbWVudC50YXNrRGVzY3JpcHRpb25cbiAgICAgIFxuICAgICAgLy8gYWRkIHRyYXNoIGljb25cbiAgICAgIGxldCB0cmFzaEljb25UYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgdHJhc2hJY29uVGFzay5jbGFzc0xpc3QuYWRkKFwidHJhc2hJY29uXCIpXG4gICAgICB0cmFzaEljb25UYXNrLnNyYyA9IFwidHJhc2gtaWNvbi5wbmdcIlxuICAgICAgLy8gYWRkIHByb2plY3QgZGVsZXRlIGV2ZW50bGlzdGVuZXJcbiAgICAgIHRyYXNoSWNvblRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIC8vIHN0b3AgdGhlIGV2ZW50IGZyb20gcHJvcGFnYXRpb25nIHVwXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIHJlbW92ZSB0YXNrIGZyb20gcHJvamVjdExpc3QucHJvamVjdFRhc2tMaXN0XG4gICAgICAgIHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIC8vIHJlcGFpbnQgY29udGVudFxuICAgICAgICBkaXNwbGF5VGFza3MoKVxuICAgICAgICAvLyB1cGRhdGUgc3RvcmFnZVxuICAgICAgICBzZXRTdG9yYWdlKClcbiAgICAgIH0pXG4gICAgICBuZXdUYXNrRXhwYW5kLmFwcGVuZCh0cmFzaEljb25UYXNrKVxuICAgICAgbmV3VGFza0Rpdi5hcHBlbmQobmV3VGFza0V4cGFuZClcbiAgICB0YXNrTGlzdC5hcHBlbmQobmV3VGFza0RpdilcblxuICAgIC8vIGFkZCBldmVudGxpc3RlbmVyIHRvIHRhc2tcbiAgICBuZXdUYXNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oKXtcbiAgICAgIGRpc3BsYXlGdWxsVGFzayhuZXdUYXNrRXhwYW5kKVxuICAgIH0pXG4gICAgbmV3VGFza0Rpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oKXtcbiAgICAgIGRpc3BsYXlGdWxsVGFzayhuZXdUYXNrRXhwYW5kKVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURhdGVJbnB1dChuZXdUYXNrUmlnaHQsIGRhdGVJbnB1dCl7XG4gIG5ld1Rhc2tSaWdodC5jbGFzc0xpc3QudG9nZ2xlKFwidGFza0RhdGVJbnZpc2libGVcIilcbiAgZGF0ZUlucHV0LmNsYXNzTGlzdC50b2dnbGUoXCJ0YXNrSW5wdXRWaXNpYmxlXCIpXG59XG5cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzQ29tcGxldGVkKCl7XG4gIGNvbnN0IHRhc2tMaXN0Q29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50Q29tcGxldGVkRXhwYW5kXCIpXG4gIC8vIHJlbW92ZSBleGlzdGluZyB0YXNrc1xuICB3aGlsZSh0YXNrTGlzdENvbXBsZXRlZC5sYXN0Q2hpbGQpe1xuICAgIHRhc2tMaXN0Q29tcGxldGVkLnJlbW92ZUNoaWxkKHRhc2tMaXN0Q29tcGxldGVkLmxhc3RDaGlsZClcbiAgfVxuICAvLyBhZGQgYWxsIHRhc2tzIGluIHByb2plY3RUYXNrTGlzdFxuICBwcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdEluZGV4XS5wcm9qZWN0VGFza0xpc3RDb21wbGV0ZWQuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBsZXQgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpXG4gICAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza0NvbXBsZXRlZFwiKVxuICAgICAgLy8gdGFzayBoZWFkZXJcbiAgICAgIGxldCBuZXdUYXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgbmV3VGFza0hlYWRlci5jbGFzc0xpc3QuYWRkKFwidGFza0hlYWRlclwiKVxuICAgICAgICAvLyB0YXNrIGxlZnRcbiAgICAgICAgbGV0IG5ld1Rhc2tMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBuZXdUYXNrTGVmdC5jbGFzc0xpc3QuYWRkKFwidGFza0xlZnRcIilcbiAgICAgICAgICAvLyB0YXNrIGJ1dHRvblxuICAgICAgICAgIGxldCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgIC8vIGFkZCBldmVudGxpc3RlbmVyIGZvciBkZWxldGluZyB0YXNrXG4gICAgICAgICAgbmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRvZ2dsZVRhc2tDb21wbGV0ZWQoZWxlbWVudCwgaW5kZXgpXG4gICAgICAgICAgICBkaXNwbGF5VGFza3NDb21wbGV0ZWQoKVxuICAgICAgICAgICAgLy8gdXBkYXRlIGNvbXBsZXRlZCB0YXNrIG51bWJlclxuICAgICAgICAgICAgY29tcGxldGVkVGFza0NvdW50ZXIoKVxuICAgICAgICAgICAgZGlzcGxheVRhc2tzKClcbiAgICAgICAgICAgIHNldFN0b3JhZ2UoKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgbmV3VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFza0J1dHRvblwiKVxuICAgICAgICAgIG5ld1Rhc2tMZWZ0LmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b24pXG4gICAgICAgICAgLy8gdGFzayB0ZXh0XG4gICAgICAgICAgbGV0IG5ld1Rhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgIG5ld1Rhc2tUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGV4dFwiKVxuICAgICAgICAgIG5ld1Rhc2tUZXh0LnRleHRDb250ZW50ID0gZWxlbWVudC50YXNrVGl0bGVcbiAgICAgICAgICBuZXdUYXNrTGVmdC5hcHBlbmRDaGlsZChuZXdUYXNrVGV4dClcbiAgICAgICAgbmV3VGFza0hlYWRlci5hcHBlbmQobmV3VGFza0xlZnQpXG4gICAgICAgICAgLy8gdGFzayByaWdodFxuICAgICAgICAgIGxldCBuZXdUYXNrUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgbmV3VGFza1JpZ2h0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrUmlnaHRcIilcbiAgICAgICAgICBuZXdUYXNrUmlnaHQudGV4dENvbnRlbnQgPSBlbGVtZW50LnRhc2tEYXRlXG4gICAgICAgIG5ld1Rhc2tIZWFkZXIuYXBwZW5kKG5ld1Rhc2tSaWdodClcbiAgICAgIG5ld1Rhc2tEaXYuYXBwZW5kKG5ld1Rhc2tIZWFkZXIpXG4gICAgICBcbiAgICAgIC8vIGFwcGVuZCBjb25jZWFsZWQgZnVydGhlciB0YXNrIGluZm9zXG4gICAgICBsZXQgbmV3VGFza0V4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgIG5ld1Rhc2tFeHBhbmQuY2xhc3NMaXN0LmFkZChcInRhc2tFeHBhbmRcIilcbiAgICAgIG5ld1Rhc2tFeHBhbmQudGV4dENvbnRlbnQgPSBlbGVtZW50LnRhc2tEZXNjcmlwdGlvblxuICAgICAgXG4gICAgICAvLyBhZGQgdHJhc2ggaWNvblxuICAgICAgbGV0IHRyYXNoSWNvblRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICB0cmFzaEljb25UYXNrLmNsYXNzTGlzdC5hZGQoXCJ0cmFzaEljb25cIilcbiAgICAgIHRyYXNoSWNvblRhc2suc3JjID0gXCJ0cmFzaC1pY29uLnBuZ1wiXG4gICAgICAvLyBhZGQgcHJvamVjdCBkZWxldGUgZXZlbnRsaXN0ZW5lclxuICAgICAgdHJhc2hJY29uVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgLy8gc3RvcCB0aGUgZXZlbnQgZnJvbSBwcm9wYWdhdGlvbmcgdXBcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gcmVtb3ZlIHRhc2sgZnJvbSBwcm9qZWN0TGlzdC5wcm9qZWN0VGFza0xpc3RcbiAgICAgICAgcHJvamVjdExpc3RbY3VycmVudFByb2plY3RJbmRleF0ucHJvamVjdFRhc2tMaXN0Q29tcGxldGVkLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgLy8gcmVwYWludCBjb21wbGV0ZWQgdGFza3NcbiAgICAgICAgZGlzcGxheVRhc2tzQ29tcGxldGVkKClcbiAgICAgICAgLy8gdXBkYXRlIGNvbXBsZXRlZCB0YXNrIG51bWJlclxuICAgICAgICBjb21wbGV0ZWRUYXNrQ291bnRlcigpXG4gICAgICAgIC8vIHVwZGF0ZSBzdG9yYWdlXG4gICAgICAgIHNldFN0b3JhZ2UoKVxuICAgICAgfSlcbiAgICAgIG5ld1Rhc2tFeHBhbmQuYXBwZW5kKHRyYXNoSWNvblRhc2spXG4gICAgICBuZXdUYXNrRGl2LmFwcGVuZChuZXdUYXNrRXhwYW5kKVxuICAgIHRhc2tMaXN0Q29tcGxldGVkLmFwcGVuZChuZXdUYXNrRGl2KVxuXG4gICAgLy8gYWRkIGV2ZW50bGlzdGVuZXIgdG8gdGFza1xuICAgIG5ld1Rhc2tEaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpe1xuICAgICAgZGlzcGxheUZ1bGxUYXNrKG5ld1Rhc2tFeHBhbmQpXG4gICAgfSlcbiAgICBuZXdUYXNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpe1xuICAgICAgZGlzcGxheUZ1bGxUYXNrKG5ld1Rhc2tFeHBhbmQpXG4gICAgfSlcbiAgfSlcbn1cblxuXG5cbi8vIHRoaXMgZnVuY3Rpb24gaGFuZGVscyB0aGUgdGFzayBjb21wbGV0ZVxuZnVuY3Rpb24gdG9nZ2xlVGFza0NvbXBsZXRlZChlbGVtZW50LCBpbmRleCl7XG4gIGNvbnNvbGUubG9nKGVsZW1lbnQsIGluZGV4KVxuXG4gIC8vIGZpbmQgcHJvamVjdExpc3QgaW5kZXggb2YgcHJvamVjdCB0aGF0IGNvbnRhaW5zIGN1cnJlbnQgdGFza1xuICBsZXQgY2xpY2tlZFByb2plY3RJbmRleDtcbiAgZm9yKGxldCBpPTA7IGk8cHJvamVjdExpc3QubGVuZ3RoOyBpKyspe1xuICAgIGlmKHByb2plY3RMaXN0W2ldLnByb2plY3RUaXRsZSA9PT0gZWxlbWVudC50YXNrUHJvamVjdCl7XG4gICAgICBjb25zb2xlLmxvZyhcInRoZSBwcm9qZWN0TGlzdCBpbmRleCBpczogXCIgKyBpKVxuICAgICAgY2xpY2tlZFByb2plY3RJbmRleCA9IGlcbiAgICB9XG4gIH1cbiAgLy8gdGhpcyBpcyB0aGUgdmVyc2lvbiB1bmNvbXBsZXRlZC0+Y29tcGxldGVkXG4gIGlmKGVsZW1lbnQudGFza0NvbXBsZXRlZCl7XG4gICAgLy8gcmVtb3ZlIHRhc2sgZnJvbSBwcm9qZWN0VGFza0xpc3RDb21wbGV0ZWRcbiAgICBwcm9qZWN0TGlzdFtjbGlja2VkUHJvamVjdEluZGV4XS5wcm9qZWN0VGFza0xpc3RDb21wbGV0ZWQuc3BsaWNlKGluZGV4LCAxKVxuICAgIC8vIGFkZCB0YXNrIHRvIHByb2plY3RUYXNrTGlzdENvbXBsZXRlZFxuICAgIHByb2plY3RMaXN0W2NsaWNrZWRQcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrTGlzdC5wdXNoKGVsZW1lbnQpXG4gICAgLy8gc2V0IHRhc2sgYXMgdW5jb21wbGV0ZWRcbiAgICBlbGVtZW50LnRhc2tDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdFtjbGlja2VkUHJvamVjdEluZGV4XSlcbiAgfWVsc2V7IC8vIHRoaXMgaXMgdGhlIHZlcnNpb24gY29tcGxldGVkLT51bmNvbXBsZXRlZFxuICAgIC8vcmVtb3ZlIHRhc2sgZnJvbSBwcm9qZWN0XG4gICAgcHJvamVjdExpc3RbY2xpY2tlZFByb2plY3RJbmRleF0ucHJvamVjdFRhc2tMaXN0LnNwbGljZShpbmRleCwgMSlcbiAgICAvLyBhZGQgdGFzayB0byBwcm9qZWN0VGFza0xpc3RDb21wbGV0ZWRcbiAgICBwcm9qZWN0TGlzdFtjbGlja2VkUHJvamVjdEluZGV4XS5wcm9qZWN0VGFza0xpc3RDb21wbGV0ZWQucHVzaChlbGVtZW50KVxuICAgIC8vIHNldCB0YXNrIGFzIGNvbXBsZXRlZFxuICAgIGVsZW1lbnQudGFza0NvbXBsZXRlZCA9IHRydWU7XG4gICAgY29uc29sZS5sb2cocHJvamVjdExpc3RbY2xpY2tlZFByb2plY3RJbmRleF0pXG4gIH1cbn1cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlGdWxsVGFzayh0YXNrKXtcbiAgdGFzay5jbGFzc0xpc3QudG9nZ2xlKFwidGFza0V4cGFuZEFjdGl2ZVwiKVxufVxuZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRQcm9qZWN0VGl0bGUoKXsgICAgXG4gIGlmKHByb2plY3RMaXN0Lmxlbmd0aD09PTApe1xuICAgIGFsZXJ0KFwibm8gcHJvamVjdHMgbGVmdFwiKVxuICB9ZWxzZXtcbiAgICAvLyB1cGRhdGUgY29udGVudFByb2plY3RUaXRsZVxuICAgIGNvbnN0IGNvbnRlbnRQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRQcm9qZWN0VGl0bGVcIilcbiAgICBjb250ZW50UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdExpc3RbY3VycmVudFByb2plY3RJbmRleF0ucHJvamVjdFRpdGxlXG4gIH1cblxufVxuXG4vLyBjcmVhdGUgcHJvamVjdCBvYmplY3RcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKXtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0VGl0bGVcIilcbiAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0RGVzY3JpcHRpb25cIilcbiAgXG4gIGNvbnN0IG5ld1Byb2plY3QgPSB7XG4gICAgcHJvamVjdFRpdGxlIDogcHJvamVjdFRpdGxlLnZhbHVlLCBcbiAgICBwcm9qZWN0RGVzY3JpcHRpb246IHByb2plY3REZXNjcmlwdGlvbi52YWx1ZSxcbiAgICBwcm9qZWN0VGFza0xpc3QgOiBbXSxcbiAgICBwcm9qZWN0VGFza0xpc3RDb21wbGV0ZWQ6IFtdLFxuICB9XG4gIC8vIGNsZWFyIGlucHV0IGZpZWxkc1xuICBwcm9qZWN0VGl0bGUudmFsdWUgPSBcIlwiXG4gIHByb2plY3REZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCJcblxuICByZXR1cm4gbmV3UHJvamVjdFxufVxuXG5mdW5jdGlvbiBwYWludFByb2plY3RzKCl7XG4gIGNvbnN0IHByb2plY3RNZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNMaXN0XCIpXG4gIC8vIHJlbW92ZSBleGlzdGluZyBwcm9qZWN0c1xuICB3aGlsZShwcm9qZWN0TWVudUxpc3QubGFzdENoaWxkKXtcbiAgICBwcm9qZWN0TWVudUxpc3QucmVtb3ZlQ2hpbGQocHJvamVjdE1lbnVMaXN0Lmxhc3RDaGlsZClcbiAgfVxuICAvLyBhZGQgYWxsIGl0ZW1zIGluIHByb2plY3RMaXN0IGFycmF5XG4gIHByb2plY3RMaXN0LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KT0+IHtcbiAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBlbGVtZW50LnByb2plY3RUaXRsZVxuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51UHJvamVjdFwiKVxuICAgIGxpc3RJdGVtLmRhdGFzZXQucHJvamVjdElkID0gaW5kZXhcbiAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gY2hhbmdlIGN1cnJlbnRQcm9qZWN0SW5kZXggb24gY2xpY2tcbiAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXggPSBpbmRleFxuICAgICAgZGlzcGxheUN1cnJlbnRQcm9qZWN0VGl0bGUoKVxuICAgICAgZGlzcGxheVRhc2tzKClcbiAgICAgIGRpc3BsYXlUYXNrc0NvbXBsZXRlZCgpXG4gICAgICBjb21wbGV0ZWRUYXNrQ291bnRlcihjdXJyZW50UHJvamVjdEluZGV4KVxuICAgIH0pIFxuICAgIC8vIGFwcGVuZCBjb25jZWFsZWQgZnVydGhlciBwcm9qZWN0IGluZm9zXG4gICAgbGV0IG5ld1Byb2plY3RFeHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbmV3UHJvamVjdEV4cGFuZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEV4cGFuZFwiKVxuICAgIG5ld1Byb2plY3RFeHBhbmQudGV4dENvbnRlbnQgPSBlbGVtZW50LnByb2plY3REZXNjcmlwdGlvblxuICAgIC8vIGFkZCB0cmFzaCBpY29uXG4gICAgbGV0IHRyYXNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZChcInRyYXNoSWNvblwiKVxuICAgIHRyYXNoSWNvbi5zcmMgPSBcInRyYXNoLWljb24ucG5nXCJcbiAgICAvLyBhZGQgcHJvamVjdCBkZWxldGUgZXZlbnRsaXN0ZW5lclxuICAgIHRyYXNoSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIC8vIHN0b3AgdGhlIGV2ZW50IGZyb20gcHJvcGFnYXRpb25nIHVwXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gcmVtb3ZlIHByb2plY3QgZnJvbSBwcm9qZWN0TGlzdFxuICAgICAgcHJvamVjdExpc3Quc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAvLyBjaGFuZ2UgY3VycmVudFByb2plY3RJbmRleFxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdEluZGV4KVxuICAgICAgaWYoY3VycmVudFByb2plY3RJbmRleCE9PTApe1xuICAgICAgICBjdXJyZW50UHJvamVjdEluZGV4LS1cbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0SW5kZXgpXG4gICAgICAvLyByZXBhaW50IHByb2plY3QgbWVudVxuICAgICAgcGFpbnRQcm9qZWN0cygpXG4gICAgICAvLyByZXBhaW50IGNvbnRlbnRcbiAgICAgIGRpc3BsYXlDdXJyZW50UHJvamVjdFRpdGxlKClcbiAgICAgIGRpc3BsYXlUYXNrcygpXG4gICAgICAvLyB1cGRhdGUgcHJvamVjdCBzZWxlY3QgaW4gbW9kYWxcbiAgICAgIHVwZGF0ZVByb2plY3RTZWxlY3QoKVxuICAgICAgLy8gdXBkYXRlIGNvbXBsZXRlZCB0YXNrIG51bWJlclxuICAgICAgY29tcGxldGVkVGFza0NvdW50ZXIoKVxuICAgICAgLy8gdXBkYXRlIHRoZSBjb21wbGV0ZWQgdGFza3NcbiAgICAgIGRpc3BsYXlUYXNrc0NvbXBsZXRlZCgpXG4gICAgICAvLyB1cGRhdGUgc3RvcmFnZVxuICAgICAgc2V0U3RvcmFnZSgpXG4gICAgfSlcbiAgICBcbiAgICBuZXdQcm9qZWN0RXhwYW5kLmFwcGVuZCh0cmFzaEljb24pIFxuICAgIGxpc3RJdGVtLmFwcGVuZChuZXdQcm9qZWN0RXhwYW5kKVxuXG4gICAgLy8gYWRkIGV2ZW50bGlzdGVuZXIgZm9yIGhvdmVyIGV4cGFuZFxuICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oKXtcbiAgICAgIGRpc3BsYXlGdWxsUHJvamVjdChuZXdQcm9qZWN0RXhwYW5kKVxuICAgIH0pXG4gICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKCl7XG4gICAgICBkaXNwbGF5RnVsbFByb2plY3QobmV3UHJvamVjdEV4cGFuZClcbiAgICB9KVxuXG4gICAgcHJvamVjdE1lbnVMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKVxuXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RnVsbFByb2plY3QocHJvamVjdCl7XG4gIHByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcInByb2plY3RFeHBhbmRBY3RpdmVcIilcbn1cblxuZnVuY3Rpb24gZGlzcGxheU1vYmlsZU1lbnUoKXtcbiAgY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyTWVudVwiKVxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpXG4gIGNvbnN0IGxpbmUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmUxJyk7XG4gIGNvbnN0IGxpbmUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmUyJyk7XG4gIGNvbnN0IGxpbmUzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmUzJyk7XG5cbiAgYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnVNb2JpbGVBY3RpdmVcIilcbiAgICBidXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJ0b2dnbGVcIilcbiAgfSlcbn1cblxuY29uc3QgY29udGVudENvbXBsZXRlZEhlYWRlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRDb21wbGV0ZWRIZWFkZXJJY29uXCIpXG5jb250ZW50Q29tcGxldGVkSGVhZGVySWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQ29tcGxldGVkSWNvbilcblxuZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGVkSWNvbigpe1xuICAvLyBhY3RpdmF0ZSBpY29uXG4gIGNvbnRlbnRDb21wbGV0ZWRIZWFkZXJJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWREcm9wZG93bkFjdGl2ZVwiKVxuICAvLyBhY3RpdmF0ZSBkcm9wZG93blxuICBjb25zdCBjb250ZW50Q29tcGxldGVkRXhwYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50Q29tcGxldGVkRXhwYW5kXCIpXG4gIGNvbnRlbnRDb21wbGV0ZWRFeHBhbmQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZERyb3Bkb3duQWN0aXZlXCIpXG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlZFRhc2tDb3VudGVyKCl7XG4gIGNvbnN0IGNvbnRlbnRDb21wbGV0ZWROdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRDb21wbGV0ZWROdW1iZXJcIilcbiAgY29udGVudENvbXBsZXRlZE51bWJlci50ZXh0Q29udGVudCA9IHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrTGlzdENvbXBsZXRlZC5sZW5ndGhcbn1cblxuXG5cblxuXG5cbi8vIGluaXRpYWwgZmlsbGluZyBvZiBwcmV2aW91c2x5IGVtcHR5IHN0b3JhZ2VcbmZ1bmN0aW9uIHNldFN0b3JhZ2UoKXtcbiAgLy8gbG9jYWxTdG9yYWdlIG9ubHkgYWNjZXB0cyBzdHJpbmcgZGF0YXR5cGVcbiAgLy8gb2JqZWN0IChwcm9qZWN0TGlzdCkgbmVlZHMgdG8gYmUgY29udmVydGVkIHRvIEpTT05cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpXG59XG4vLyBlZGl0IGV4aXN0aW5nIHN0b3JhZ2VcbmZ1bmN0aW9uIGdldFN0b3JhZ2UoKXtcbiAgbGV0IGxvY2FsU3RvcmFnZVJldHVybiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykpIFxuICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2VSZXR1cm4pXG4gIHJldHVybiBsb2NhbFN0b3JhZ2VSZXR1cm5cbn1cblxuXG4vLyBjaGVjayBpZiBsb2NhbCBzdG9yYWdlIGlzIHBvcHVsYXRlZFxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdExpc3QnKSkge1xuICBzZXRTdG9yYWdlKCk7XG59IGVsc2Uge1xuICAvLyB1cGRhdGUgcHJvamVjdExpc3QgdG8gbG9jYWwgc3RvcmFnZSBjb250ZW50XG4gIHByb2plY3RMaXN0ID0gZ2V0U3RvcmFnZSgpO1xufVxuLy8gaW5pdGlhbCB1cGRhdGUgb2YgY29udGVudFxucGFpbnRQcm9qZWN0cygpXG51cGRhdGVQcm9qZWN0U2VsZWN0KClcbmRpc3BsYXlDdXJyZW50UHJvamVjdFRpdGxlKClcbmRpc3BsYXlUYXNrcygpXG5kaXNwbGF5TW9iaWxlTWVudSgpXG5kaXNwbGF5VGFza3NDb21wbGV0ZWQoKVxuY29tcGxldGVkVGFza0NvdW50ZXIoKVxuXG5cblxuXG4vKlxuc3R5bGU6IFxuICBkaXNwbGF5IHByaW9yaXR5IGluIHNvbWUgd2F5XG4gIGltcHJvdmUgbGF5b3V0IG9uIHJlYWxseSB3aWRlIGRpc3BsYXlzXG4gIHdvcmsgb24gb3ZlcmZsb3cgZm9yIHRpdGxlcyBhbmQgZGVzY3JpcHRpb25zXG5cblxuYnVnOiBcbiAgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGRlbGV0ZSBhbGwgYnV0IDEgcHJvamVjdFxuICBtb2JpbGU6IGlucHV0U2NyZWVucyBub3QgY292ZXJpbmcgc2NyZWVuIGFueW1vcmVcbiAgaWYgcHJvamVjdERlc2NyaXB0aW9uIGlzIGVtcHR5IHRoZSB0cmFzaCBpY29uIGluIHByb2plY3QgbWVudSBtb3ZlcyB0byB0aGUgbGVmdFxuXG50b2RvczpcbiAgYWRkIGlucHV0cyBvbjogXG4gICAgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIFxuICAgIHByb2plY3RUaXRsZSwgcHJvamVjdERlc2NyaXB0aW9uXG4gIGFkZCBzb3J0IGZ1bmN0aW9uIGZvciBkYXRlXG4gIG1vdmUgYWxsIGRvbSBtYW5pcHVsYXRpb24gdG8gc2VwZXJhdGUgZmlsZVxuXG4gIG1vZGFsc1xuICAgIHN0eWxlIHRhc2sgbW9kYWwgKGFsaWduIGlucHV0cylcbiAgICBhZGQgaW5wdXQgdmFsaWRhdGlvblxuICAgICAgdGhpcyByZXF1aXJlcyB0aGUgaW5wdXRzIHRvIGJlIGNvZGVkIGFzIGZvcm1zXG4gICAgICBlLnByZXZlbnREZWZhdWx0IHRvIHByZXZlbnQgdGhlIGZvcm0gZnJvbSBiZWluZyBzdWJtaXR0ZWQgdG8gYSBub25leGlzdGFudCBiYWNrZW5kXG5cblxuICByZWFkbWU6IFxuICAgIGJhYmVsXG4gICAgd2VicGFja1xuICAgIFxuXG4qLyAiXSwibmFtZXMiOlsidG9nZ2xlUHJvamVjdElucHV0IiwiaW5wdXRQcm9qZWN0Rm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlucHV0U2NyZWVuUHJvamVjdCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZVRhc2tJbnB1dCIsImlucHV0Rm9ybVRhc2siLCJpbnB1dFNjcmVlblRhc2siLCJmb3JtYXREaXN0YW5jZSIsInN1YkRheXMiLCJ0ZXN0IiwiRGF0ZSIsImFkZFN1ZmZpeCIsIm5ld0l0ZW1CdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwibmV3VGFza0J1dHRvbiIsImN1cnJlbnRQcm9qZWN0SW5kZXgiLCJwcm9qZWN0TGlzdCIsInByb2plY3RUaXRsZSIsInByb2plY3REZXNjcmlwdGlvbiIsInByb2plY3RUYXNrTGlzdCIsInRhc2tUaXRsZSIsInRhc2tEZXNjcmlwdGlvbiIsInRhc2tEYXRlIiwidGFza1ByaW9yaXR5IiwidGFza1Byb2plY3QiLCJwcm9qZWN0VGFza0xpc3RDb21wbGV0ZWQiLCJwcm9qZWN0U3VibWl0QnV0dG9uIiwibmV3UHJvamVjdCIsImNyZWF0ZVByb2plY3QiLCJwdXNoIiwicGFpbnRQcm9qZWN0cyIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVQcm9qZWN0U2VsZWN0Iiwic2V0U3RvcmFnZSIsInRhc2tTdWJtaXRCdXR0b24iLCJuZXdUYXNrIiwiY3JlYXRlVGFzayIsInZhbHVlIiwiaSIsImxlbmd0aCIsImF0IiwiZGlzcGxheVRhc2tzIiwidGFza1Byb2plY3RTZWxlY3QiLCJsYXN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImZvckVhY2giLCJlbGVtZW50IiwicHJvamVjdE9wdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsInRhc2tDb21wbGV0ZWQiLCJ0YXNrTGlzdCIsImluZGV4IiwibmV3VGFza0RpdiIsImFkZCIsIm5ld1Rhc2tIZWFkZXIiLCJuZXdUYXNrTGVmdCIsInRvZ2dsZVRhc2tDb21wbGV0ZWQiLCJkaXNwbGF5VGFza3NDb21wbGV0ZWQiLCJjb21wbGV0ZWRUYXNrQ291bnRlciIsIm5ld1Rhc2tUZXh0IiwiYXBwZW5kIiwibmV3VGFza1JpZ2h0IiwiZGF0ZUlucHV0IiwidHlwZSIsImUiLCJ0b2dnbGVEYXRlSW5wdXQiLCJuZXdUYXNrRXhwYW5kIiwidHJhc2hJY29uVGFzayIsInNyYyIsInN0b3BQcm9wYWdhdGlvbiIsInNwbGljZSIsImRpc3BsYXlGdWxsVGFzayIsInRhc2tMaXN0Q29tcGxldGVkIiwiY2xpY2tlZFByb2plY3RJbmRleCIsInRhc2siLCJkaXNwbGF5Q3VycmVudFByb2plY3RUaXRsZSIsImFsZXJ0IiwiY29udGVudFByb2plY3RUaXRsZSIsInByb2plY3RNZW51TGlzdCIsImxpc3RJdGVtIiwiZGF0YXNldCIsInByb2plY3RJZCIsIm5ld1Byb2plY3RFeHBhbmQiLCJ0cmFzaEljb24iLCJkaXNwbGF5RnVsbFByb2plY3QiLCJwcm9qZWN0IiwiZGlzcGxheU1vYmlsZU1lbnUiLCJidXJnZXJNZW51IiwibWVudSIsImxpbmUxIiwibGluZTIiLCJsaW5lMyIsImNvbnRlbnRDb21wbGV0ZWRIZWFkZXJJY29uIiwidG9nZ2xlQ29tcGxldGVkSWNvbiIsImNvbnRlbnRDb21wbGV0ZWRFeHBhbmQiLCJjb250ZW50Q29tcGxldGVkTnVtYmVyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRTdG9yYWdlIiwibG9jYWxTdG9yYWdlUmV0dXJuIiwicGFyc2UiLCJnZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==