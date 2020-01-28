(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ "./assets/scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_timeline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/timeline.js */ "./assets/js/components/timeline.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_bottombox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/_bottombox */ "./assets/js/components/_bottombox.js");
/* harmony import */ var _components_bottombox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_bottombox__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single scss file (app.scss in this case)



 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ }),

/***/ "./assets/js/components/_bottombox.js":
/*!********************************************!*\
  !*** ./assets/js/components/_bottombox.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/js/components/timeline.js":
/*!******************************************!*\
  !*** ./assets/js/components/timeline.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_7__);








var dayCounter = 0;
var checker = false;
var currentDates = [];
var totalMinuteData = {
  "sleep": 0,
  "work": 0,
  "travel": 0,
  "study": 0,
  "eat": 0,
  "hobby": 0,
  "wash": 0,
  "rest": 0
};
var dates = document.querySelectorAll(".dateBox");
var arrows = document.querySelectorAll(".arrows");
var today = document.querySelectorAll(".today");
var eventsButton = document.getElementById('showNextEvents');
var eventAdd = document.getElementById('eventAdd');
var dataMaker = document.getElementById('showChart');
setDate(dayCounter);
today[0].addEventListener('click', function (e) {
  document.getElementById('dataTarget').innerText = "";
  clearDates(currentDates);
  dayCounter = 0;
  checker = false;
  setDate(dayCounter);
});
arrows.forEach(function (element, i) {
  element.addEventListener('click', function (e) {
    clearDates(currentDates);

    switch (i) {
      case 0:
        dayCounter--;
        checker = true;
        setDate(dayCounter);
        showMinutesGraphic();
        break;

      case 1:
        dayCounter++;
        checker = true;
        setDate(dayCounter);
        showMinutesGraphic();
        break;

      default:
        break;
    }

    e.target.style.textShadow = "0 0 20px orange"; // reset the color after a short delay

    setTimeout(function () {
      e.target.style.textShadow = "";
    }, 500);
  }, false);
});
dates.forEach(function (element, i) {
  element.addEventListener('click', function (e) {
    showMinutesGraphic();
  });
});
eventsButton.addEventListener('click', function (e) {
  if (document.getElementById('eventMaker')) {
    document.getElementById('showEvents').innerHTML = "";
  }

  if (document.getElementById('eventAddTarget')) {
    document.getElementById('eventAddTarget').innerHTML = "";
  }

  if (document.getElementById('dataTarget')) {
    document.getElementById('dataTarget').innerHTML = "";
  }

  var template = document.getElementById('eventMaker');
  var clone = template.content.cloneNode(true);
  document.getElementById('showEvents').appendChild(clone);
});
eventAdd.addEventListener('click', function () {
  if (document.getElementById('eventMaker')) {
    document.getElementById('showEvents').innerHTML = "";
  }

  if (document.getElementById('eventAddTarget')) {
    document.getElementById('eventAddTarget').innerHTML = "";
  }

  if (document.getElementById('dataTarget')) {
    document.getElementById('dataTarget').innerHTML = "";
  }

  if (document.getElementById('eventForm')) {
    document.getElementById('eventAddTarget').innerHTML = "";
  }

  var temp = document.getElementById('eventForm');
  var clone = temp.content.cloneNode(true);
  document.getElementById('eventAddTarget').appendChild(clone);
  var monthSelect = document.getElementById("event_maker_start_date_month");
  var monthStop = document.getElementById("event_maker_stop_date_month");
  monthSelect.addEventListener('change', function (e) {
    monthStop.options[monthStop.selectedIndex].value = monthSelect.options[monthSelect.selectedIndex].value;
    monthStop.options[monthStop.selectedIndex].innerText = monthSelect.options[monthSelect.selectedIndex].innerText;
  });
  var daySelector = document.getElementById('event_maker_start_date_day');
  var dayStopSelector = document.getElementById('event_maker_stop_date_day');
  daySelector.addEventListener('change', function (e) {
    dayStopSelector.options[dayStopSelector.selectedIndex].value = daySelector.options[daySelector.selectedIndex].value;
    dayStopSelector.options[dayStopSelector.selectedIndex].innerText = daySelector.options[daySelector.selectedIndex].innerText;
  });
  var yearSelector = document.getElementById('event_maker_start_date_year');
  var yearStopSelector = document.getElementById('event_maker_stop_date_year');
  yearSelector.addEventListener('change', function (e) {
    yearStopSelector.options[yearStopSelector.selectedIndex].value = yearSelector.options[yearSelector.selectedIndex].value;
    yearStopSelector.options[yearStopSelector.selectedIndex].innerText = yearSelector.options[yearSelector.selectedIndex].innerText;
  });
  var startHour = document.getElementById('event_maker_start_time_hour');
  var stopHour = document.getElementById('event_maker_stop_time_hour');
  startHour.addEventListener('change', function (e) {
    stopHour.options[stopHour.selectedIndex].value = startHour.options[startHour.selectedIndex].value;
    stopHour.options[stopHour.selectedIndex].innerText = startHour.options[startHour.selectedIndex].innerText;
  });
  var startMin = document.getElementById('event_maker_start_time_minute');
  var stopMin = document.getElementById('event_maker_stop_time_minute');
  startMin.addEventListener('change', function (e) {
    stopMin.options[stopMin.selectedIndex].value = startMin.options[startMin.selectedIndex].value;
    stopMin.options[stopMin.selectedIndex].innerText = startMin.options[startMin.selectedIndex].innerText;
  });
});
dataMaker.addEventListener('click', function () {
  if (document.getElementById('eventMaker')) {
    document.getElementById('showEvents').innerHTML = "";
  }

  if (document.getElementById('eventAddTarget')) {
    document.getElementById('eventAddTarget').innerHTML = "";
  }

  if (document.getElementById('dataTarget')) {
    document.getElementById('dataTarget').innerHTML = "";
  }

  if (document.getElementById('pieChart')) {
    document.getElementById('dateTarget').innerHTML = "";
  }

  var temp = document.getElementById('data');
  var clone = temp.content.cloneNode(true);
  document.getElementById('dataTarget').appendChild(clone);
  var canvas = document.getElementById('pieChart');
  makeChart(canvas, totalMinuteData);
});

function setDate() {
  var temp = [];
  var homemadeDateObject = {
    'date': 0,
    'month': 0,
    'year': 0
  };
  var numberMonth = 0;
  dates.forEach(function (element, index) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var date = new Date();
    var year = date.getFullYear();
    date.setDate(date.getDate() + dayCounter);

    switch (index) {
      case 0:
        date.setDate(date.getDate() - 3);
        document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
        break;

      case 1:
        date.setDate(date.getDate() - 2);
        document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
        break;

      case 2:
        date.setDate(date.getDate() - 1);
        document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
        break;

      case 3:
        date.setDate(date.getDate());
        document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
        document.getElementById('month').innerText = months[date.getMonth()];
        document.getElementById('year').innerText = date.getFullYear().toString();
        break;

      case 4:
        date.setDate(date.getDate() + 1);
        document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
        break;

      case 5:
        date.setDate(date.getDate() + 2);
        document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
        break;

      case 6:
        date.setDate(date.getDate() + 3);
        document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
        break;

      default:
        break;
    }

    currentDates[index] = parseInt(element.innerText);
    temp[index] = homemadeDateObject = {
      'date': parseInt(element.innerText),
      'month': numberMonth,
      'year': year
    };
  });
}

function clearDates(_currentDates) {
  _currentDates = [];
  document.querySelectorAll('.targetGraph').forEach(function (element) {
    element.innerText = "";
  });
}

function setDates(dateNumber) {
  var minuteBoxes = document.querySelectorAll('.minuteBox');
  var currentIndex = 0;
  var minuteCounter = 0;
  minuteBoxes.forEach(function (element, index) {
    if (minuteCounter > 1439) {
      minuteCounter = 0;
      currentIndex++;
    }

    element.id = currentDates[currentIndex] + minuteCounter.toString();
    minuteCounter++;
  });
}

function showMinutesGraphic() {
  if (document.querySelectorAll(".targetGraph")) {
    document.querySelectorAll('.minPixs').forEach(function (element) {
      element.innerHTML = [];
    });
  }

  document.querySelectorAll('.minPixs').forEach(function (element) {
    currentDates.push(element.innerText);
    var template = document.querySelector('#expandedDates');
    var clone = template.content.cloneNode(true);
    element.appendChild(clone);
  });
  setDates(currentDates);
  checker = true;
  setBoxes(motherfile);

  if (document.getElementById('pieChart')) {
    makeChart(document.getElementById('pieChart'), totalMinuteData);
  }
}

function setBoxes(motherfile) {
  var currentSelectedDates = document.querySelectorAll('.dateNumber');
  totalMinuteData = {
    "sleep": 0,
    "work": 0,
    "travel": 0,
    "study": 0,
    "eat": 0,
    "hobby": 0,
    "wash": 0,
    "rest": 0
  };
  motherfile.forEach(function (userDateEvents) {
    currentSelectedDates.forEach(function (dateNumbersDisplayed) {
      if (userDateEvents.date === parseInt(dateNumbersDisplayed.getAttribute('data-day')) && userDateEvents.month === parseInt(dateNumbersDisplayed.getAttribute('data-month')) && userDateEvents.year === parseInt(dateNumbersDisplayed.getAttribute('data-year'))) {
        totalMinuteData[userDateEvents.activity] += userDateEvents.totalMinutes;
        var box = userDateEvents.startRelative;

        while (box >= userDateEvents.startRelative && box < userDateEvents.endRelative) {
          var banana = userDateEvents['date'];
          var muffin = box.toString();
          var bananaMuffin = banana + muffin;
          document.getElementById(bananaMuffin).classList.add(userDateEvents.activity);
          box++;
        }
      }
    });
  });
}

function makeChart(canvas, totalMinuteData) {
  document.getElementById('studyTotal').innerText = totalMinuteData['study'] + ' minutes';
  document.getElementById('sleepTotal').innerText = totalMinuteData['sleep'] + ' minutes';
  document.getElementById('washTotal').innerText = totalMinuteData['wash'] + ' minutes';
  document.getElementById('travelTotal').innerText = totalMinuteData['travel'] + ' minutes';
  document.getElementById('hobbyTotal').innerText = totalMinuteData['hobby'] + ' minutes';
  document.getElementById('workTotal').innerText = totalMinuteData['work'] + ' minutes';
  document.getElementById('eatTotal').innerText = totalMinuteData['eat'] + ' minutes';
  document.getElementById('restTotal').innerText = totalMinuteData['rest'] + ' minutes';
  var ctx = canvas.getContext('2d');
  var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_7___default.a(ctx, {
    type: 'pie',
    data: {
      labels: ['Study', 'Sleep', 'Wash', 'Travel', 'Hobby', 'Work', 'Eat', 'Rest'],
      datasets: [{
        label: '7 Day Activity Totals',
        data: [totalMinuteData['study'], totalMinuteData['sleep'], totalMinuteData['wash'], totalMinuteData['travel'], totalMinuteData['hobby'], totalMinuteData['work'], totalMinuteData['eat'], totalMinuteData['rest']],
        backgroundColor: ['hsla(245, 100%, 50%, 1)', 'hsla(0, 100%, 50%, 1)', 'rgba(83, 105, 43, 1)', 'hsla(300, 100%, 50%, 1)', 'hsla(50, 100%, 50%, 1)', 'hsla(180, 100%, 50%, 1)', 'hsla(125, 100%, 50%, 1)', 'rgba(128, 128, 128, 1)'],
        borderColor: ['hsla(245, 100%, 50%, 1)', 'hsla(0, 100%, 50%, 1)', 'rgba(83, 105, 43, 1)', 'hsla(300, 100%, 50%, 1)', 'hsla(50, 100%, 50%, 1)', 'hsla(180, 100%, 50%, 1)', 'hsla(125, 100%, 50%, 1)', 'rgba(128, 128, 128, 1)'],
        borderWidth: 2
      }]
    }
  });
}

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3RpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZGF5Q291bnRlciIsImNoZWNrZXIiLCJjdXJyZW50RGF0ZXMiLCJ0b3RhbE1pbnV0ZURhdGEiLCJkYXRlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImFycm93cyIsInRvZGF5IiwiZXZlbnRzQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJldmVudEFkZCIsImRhdGFNYWtlciIsInNldERhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImlubmVyVGV4dCIsImNsZWFyRGF0ZXMiLCJmb3JFYWNoIiwiZWxlbWVudCIsImkiLCJzaG93TWludXRlc0dyYXBoaWMiLCJ0YXJnZXQiLCJzdHlsZSIsInRleHRTaGFkb3ciLCJzZXRUaW1lb3V0IiwiaW5uZXJIVE1MIiwidGVtcGxhdGUiLCJjbG9uZSIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsInRlbXAiLCJtb250aFNlbGVjdCIsIm1vbnRoU3RvcCIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidmFsdWUiLCJkYXlTZWxlY3RvciIsImRheVN0b3BTZWxlY3RvciIsInllYXJTZWxlY3RvciIsInllYXJTdG9wU2VsZWN0b3IiLCJzdGFydEhvdXIiLCJzdG9wSG91ciIsInN0YXJ0TWluIiwic3RvcE1pbiIsImNhbnZhcyIsIm1ha2VDaGFydCIsImhvbWVtYWRlRGF0ZU9iamVjdCIsIm51bWJlck1vbnRoIiwiaW5kZXgiLCJtb250aHMiLCJkYXRlIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsImdldERhdGUiLCJzZXRBdHRyaWJ1dGUiLCJ0b1N0cmluZyIsImdldE1vbnRoIiwicGFyc2VJbnQiLCJfY3VycmVudERhdGVzIiwic2V0RGF0ZXMiLCJkYXRlTnVtYmVyIiwibWludXRlQm94ZXMiLCJjdXJyZW50SW5kZXgiLCJtaW51dGVDb3VudGVyIiwiaWQiLCJwdXNoIiwicXVlcnlTZWxlY3RvciIsInNldEJveGVzIiwibW90aGVyZmlsZSIsImN1cnJlbnRTZWxlY3RlZERhdGVzIiwidXNlckRhdGVFdmVudHMiLCJkYXRlTnVtYmVyc0Rpc3BsYXllZCIsImdldEF0dHJpYnV0ZSIsIm1vbnRoIiwiYWN0aXZpdHkiLCJ0b3RhbE1pbnV0ZXMiLCJib3giLCJzdGFydFJlbGF0aXZlIiwiZW5kUmVsYXRpdmUiLCJiYW5hbmEiLCJtdWZmaW4iLCJiYW5hbmFNdWZmaW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJjdHgiLCJnZXRDb250ZXh0IiwibXlDaGFydCIsIkNoYXJ0IiwidHlwZSIsImRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7Q0FFQTtBQUNBOztBQUVBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtREFBWixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBLElBQUlDLFVBQVUsR0FBRyxDQUFqQjtBQUNBLElBQUlDLE9BQU8sR0FBRyxLQUFkO0FBQ0EsSUFBSUMsWUFBWSxHQUFHLEVBQW5CO0FBQ0EsSUFBSUMsZUFBZSxHQUFHO0FBQ2xCLFdBQVMsQ0FEUztBQUVsQixVQUFRLENBRlU7QUFHbEIsWUFBVSxDQUhRO0FBSWxCLFdBQVMsQ0FKUztBQUtsQixTQUFPLENBTFc7QUFNbEIsV0FBUyxDQU5TO0FBT2xC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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIHNjc3MgZmlsZSAoYXBwLnNjc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcblxuaW1wb3J0ICcuL2NvbXBvbmVudHMvdGltZWxpbmUuanMnXG5pbXBvcnQgJ2Jvb3RzdHJhcCdcbmltcG9ydCAnLi9jb21wb25lbnRzL19ib3R0b21ib3gnXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnNvbGUubG9nKCdIZWxsbyBXZWJwYWNrIEVuY29yZSEgRWRpdCBtZSBpbiBhc3NldHMvanMvYXBwLmpzJyk7XG4iLCJpbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMnXG5cbmxldCBkYXlDb3VudGVyID0gMDtcbmxldCBjaGVja2VyID0gZmFsc2U7XG5sZXQgY3VycmVudERhdGVzID0gW107XG5sZXQgdG90YWxNaW51dGVEYXRhID0ge1xuICAgIFwic2xlZXBcIjogMCxcbiAgICBcIndvcmtcIjogMCxcbiAgICBcInRyYXZlbFwiOiAwLFxuICAgIFwic3R1ZHlcIjogMCxcbiAgICBcImVhdFwiOiAwLFxuICAgIFwiaG9iYnlcIjogMCxcbiAgICBcIndhc2hcIjogMCxcbiAgICBcInJlc3RcIjogMCxcbn07XG5cbmNvbnN0IGRhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXRlQm94XCIpO1xuY29uc3QgYXJyb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hcnJvd3NcIik7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kYXlcIik7XG5jb25zdCBldmVudHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd05leHRFdmVudHMnKTtcbmNvbnN0IGV2ZW50QWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50QWRkJyk7XG5jb25zdCBkYXRhTWFrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd0NoYXJ0Jyk7XG5cbnNldERhdGUoZGF5Q291bnRlcik7XG5cblxuXG5cblxudG9kYXlbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhVGFyZ2V0JykuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBjbGVhckRhdGVzKGN1cnJlbnREYXRlcyk7XG5cbiAgICBkYXlDb3VudGVyID0gMDtcbiAgICBjaGVja2VyID0gZmFsc2U7XG4gICAgc2V0RGF0ZShkYXlDb3VudGVyKTtcbn0pO1xuXG5hcnJvd3MuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaSkge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGNsZWFyRGF0ZXMoY3VycmVudERhdGVzKTtcblxuICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBkYXlDb3VudGVyLS07XG4gICAgICAgICAgICAgICAgY2hlY2tlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0RGF0ZShkYXlDb3VudGVyKTtcbiAgICAgICAgICAgICAgICBzaG93TWludXRlc0dyYXBoaWMoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGRheUNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICBjaGVja2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXREYXRlKGRheUNvdW50ZXIpO1xuICAgICAgICAgICAgICAgIHNob3dNaW51dGVzR3JhcGhpYygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZS50YXJnZXQuc3R5bGUudGV4dFNoYWRvdyA9IFwiMCAwIDIwcHggb3JhbmdlXCI7XG5cbiAgICAgICAgLy8gcmVzZXQgdGhlIGNvbG9yIGFmdGVyIGEgc2hvcnQgZGVsYXlcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnRleHRTaGFkb3cgPSBcIlwiO1xuICAgICAgICB9LCA1MDApO1xuICAgIH0sIGZhbHNlKTtcblxufSk7XG5cbmRhdGVzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGkpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblxuICAgICAgICBzaG93TWludXRlc0dyYXBoaWMoKTtcblxuICAgIH0pXG59KTtcblxuXG5ldmVudHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnRNYWtlcicpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93RXZlbnRzJykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudEFkZFRhcmdldCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudEFkZFRhcmdldCcpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YVRhcmdldCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhVGFyZ2V0JykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50TWFrZXInKTtcbiAgICBsZXQgY2xvbmUgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd0V2ZW50cycpLmFwcGVuZENoaWxkKGNsb25lKTtcblxuXG59KTtcblxuXG5ldmVudEFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnRNYWtlcicpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93RXZlbnRzJykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudEFkZFRhcmdldCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudEFkZFRhcmdldCcpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YVRhcmdldCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhVGFyZ2V0JykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudEZvcm0nKSkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnRBZGRUYXJnZXQnKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50Rm9ybScpO1xuICAgIGxldCBjbG9uZSA9IHRlbXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50QWRkVGFyZ2V0JykuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuXG4gICAgY29uc3QgbW9udGhTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV2ZW50X21ha2VyX3N0YXJ0X2RhdGVfbW9udGhcIik7XG4gICAgbGV0IG1vbnRoU3RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXZlbnRfbWFrZXJfc3RvcF9kYXRlX21vbnRoXCIpO1xuXG4gICAgbW9udGhTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIG1vbnRoU3RvcC5vcHRpb25zW21vbnRoU3RvcC5zZWxlY3RlZEluZGV4XS52YWx1ZSA9IG1vbnRoU2VsZWN0Lm9wdGlvbnNbbW9udGhTZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG5cblxuICAgICAgICBtb250aFN0b3Aub3B0aW9uc1ttb250aFN0b3Auc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0ID0gbW9udGhTZWxlY3Qub3B0aW9uc1ttb250aFNlbGVjdC5zZWxlY3RlZEluZGV4XS5pbm5lclRleHQ7XG4gICAgfSlcblxuICAgIGNvbnN0IGRheVNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50X21ha2VyX3N0YXJ0X2RhdGVfZGF5Jyk7XG4gICAgbGV0IGRheVN0b3BTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudF9tYWtlcl9zdG9wX2RhdGVfZGF5Jyk7XG5cbiAgICBkYXlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZGF5U3RvcFNlbGVjdG9yLm9wdGlvbnNbZGF5U3RvcFNlbGVjdG9yLnNlbGVjdGVkSW5kZXhdLnZhbHVlID0gZGF5U2VsZWN0b3Iub3B0aW9uc1tkYXlTZWxlY3Rvci5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgZGF5U3RvcFNlbGVjdG9yLm9wdGlvbnNbZGF5U3RvcFNlbGVjdG9yLnNlbGVjdGVkSW5kZXhdLmlubmVyVGV4dCA9IGRheVNlbGVjdG9yLm9wdGlvbnNbZGF5U2VsZWN0b3Iuc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0O1xuXG5cbiAgICB9KTtcblxuICAgIGNvbnN0IHllYXJTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudF9tYWtlcl9zdGFydF9kYXRlX3llYXInKTtcbiAgICBsZXQgeWVhclN0b3BTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudF9tYWtlcl9zdG9wX2RhdGVfeWVhcicpO1xuICAgIHllYXJTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgeWVhclN0b3BTZWxlY3Rvci5vcHRpb25zW3llYXJTdG9wU2VsZWN0b3Iuc2VsZWN0ZWRJbmRleF0udmFsdWUgPSB5ZWFyU2VsZWN0b3Iub3B0aW9uc1t5ZWFyU2VsZWN0b3Iuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIHllYXJTdG9wU2VsZWN0b3Iub3B0aW9uc1t5ZWFyU3RvcFNlbGVjdG9yLnNlbGVjdGVkSW5kZXhdLmlubmVyVGV4dCA9IHllYXJTZWxlY3Rvci5vcHRpb25zW3llYXJTZWxlY3Rvci5zZWxlY3RlZEluZGV4XS5pbm5lclRleHQ7XG5cbiAgICB9KTtcblxuICAgIGNvbnN0IHN0YXJ0SG91ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudF9tYWtlcl9zdGFydF90aW1lX2hvdXInKTtcbiAgICBsZXQgc3RvcEhvdXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnRfbWFrZXJfc3RvcF90aW1lX2hvdXInKTtcbiAgICBzdGFydEhvdXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIHN0b3BIb3VyLm9wdGlvbnNbc3RvcEhvdXIuc2VsZWN0ZWRJbmRleF0udmFsdWUgPSBzdGFydEhvdXIub3B0aW9uc1tzdGFydEhvdXIuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIHN0b3BIb3VyLm9wdGlvbnNbc3RvcEhvdXIuc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0ID0gc3RhcnRIb3VyLm9wdGlvbnNbc3RhcnRIb3VyLnNlbGVjdGVkSW5kZXhdLmlubmVyVGV4dDtcblxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3RhcnRNaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnRfbWFrZXJfc3RhcnRfdGltZV9taW51dGUnKTtcbiAgICBsZXQgc3RvcE1pbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudF9tYWtlcl9zdG9wX3RpbWVfbWludXRlJyk7XG4gICAgc3RhcnRNaW4uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIHN0b3BNaW4ub3B0aW9uc1tzdG9wTWluLnNlbGVjdGVkSW5kZXhdLnZhbHVlID0gc3RhcnRNaW4ub3B0aW9uc1tzdGFydE1pbi5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgc3RvcE1pbi5vcHRpb25zW3N0b3BNaW4uc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0ID0gc3RhcnRNaW4ub3B0aW9uc1tzdGFydE1pbi5zZWxlY3RlZEluZGV4XS5pbm5lclRleHQ7XG5cbiAgICB9KTtcblxufSk7XG5cblxuXG5cbmRhdGFNYWtlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudE1ha2VyJykpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dFdmVudHMnKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50QWRkVGFyZ2V0JykpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50QWRkVGFyZ2V0JykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhVGFyZ2V0JykpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGFUYXJnZXQnKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpZUNoYXJ0JykpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVUYXJnZXQnKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGEnKTtcbiAgICBsZXQgY2xvbmUgPSB0ZW1wLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhVGFyZ2V0JykuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGllQ2hhcnQnKTtcbiAgICBtYWtlQ2hhcnQoY2FudmFzLCB0b3RhbE1pbnV0ZURhdGEpO1xuXG59KTtcblxuZnVuY3Rpb24gc2V0RGF0ZSgpIHtcbmxldCB0ZW1wID0gW107XG5sZXQgaG9tZW1hZGVEYXRlT2JqZWN0ID0geydkYXRlJzogMCwgJ21vbnRoJzogMCwgJ3llYXInOiAwfTtcbmxldCBudW1iZXJNb250aCA9IDA7XG4gICAgZGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgbW9udGhzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG5cbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZGF5Q291bnRlcik7XG5cbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIDMpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLmlubmVyVGV4dCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS1kYXknLCBkYXRlLmdldERhdGUoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9udGgnLCBkYXRlLmdldE1vbnRoKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLXllYXInLCBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSAyKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5pbm5lclRleHQgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGF5JywgZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLW1vbnRoJywgZGF0ZS5nZXRNb250aCgpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS15ZWFyJywgZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gMSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uaW5uZXJUZXh0ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLWRheScsIGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS1tb250aCcsIGRhdGUuZ2V0TW9udGgoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEteWVhcicsIGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uaW5uZXJUZXh0ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLWRheScsIGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS1tb250aCcsIGRhdGUuZ2V0TW9udGgoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEteWVhcicsIGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb250aCcpLmlubmVyVGV4dCA9IG1vbnRoc1tkYXRlLmdldE1vbnRoKCldO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5ZWFyJykuaW5uZXJUZXh0ID0gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLmlubmVyVGV4dCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS1kYXknLCBkYXRlLmdldERhdGUoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9udGgnLCBkYXRlLmdldE1vbnRoKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLXllYXInLCBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAyKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5pbm5lclRleHQgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGF5JywgZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLW1vbnRoJywgZGF0ZS5nZXRNb250aCgpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS15ZWFyJywgZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uaW5uZXJUZXh0ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLWRheScsIGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS1tb250aCcsIGRhdGUuZ2V0TW9udGgoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEteWVhcicsIGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnREYXRlc1tpbmRleF0gPSBwYXJzZUludChlbGVtZW50LmlubmVyVGV4dCk7XG4gICAgICAgIHRlbXBbaW5kZXhdID0gaG9tZW1hZGVEYXRlT2JqZWN0ID0geydkYXRlJzogcGFyc2VJbnQoZWxlbWVudC5pbm5lclRleHQpLCAnbW9udGgnOiBudW1iZXJNb250aCwgJ3llYXInOiB5ZWFyfTtcblxuXG4gICAgfSk7XG5cbn1cblxuZnVuY3Rpb24gY2xlYXJEYXRlcyhfY3VycmVudERhdGVzKXtcbiAgICBfY3VycmVudERhdGVzID0gW107XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhcmdldEdyYXBoJykuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmlubmVyVGV4dCA9IFwiXCI7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldERhdGVzKGRhdGVOdW1iZXIpIHtcbiAgICBsZXQgbWludXRlQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWludXRlQm94Jyk7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBsZXQgbWludXRlQ291bnRlciA9IDA7XG4gICAgbWludXRlQm94ZXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKG1pbnV0ZUNvdW50ZXIgPiAxNDM5KSB7XG4gICAgICAgICAgICBtaW51dGVDb3VudGVyID0gMDtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5pZCA9IGN1cnJlbnREYXRlc1tjdXJyZW50SW5kZXhdICsgbWludXRlQ291bnRlci50b1N0cmluZygpO1xuICAgICAgICBtaW51dGVDb3VudGVyKys7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dNaW51dGVzR3JhcGhpYygpIHtcblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhcmdldEdyYXBoXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5taW5QaXhzJykuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gW107XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5taW5QaXhzJykuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBjdXJyZW50RGF0ZXMucHVzaChlbGVtZW50LmlubmVyVGV4dCk7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleHBhbmRlZERhdGVzJyk7XG4gICAgICAgIGxldCBjbG9uZSA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICB9KTtcblxuICAgIHNldERhdGVzKGN1cnJlbnREYXRlcyk7XG4gICAgY2hlY2tlciA9IHRydWU7XG4gICAgc2V0Qm94ZXMobW90aGVyZmlsZSk7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWVDaGFydCcpKSB7XG4gICAgICAgIG1ha2VDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGllQ2hhcnQnKSwgdG90YWxNaW51dGVEYXRhKTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gc2V0Qm94ZXMobW90aGVyZmlsZSkge1xuICAgIGNvbnN0IGN1cnJlbnRTZWxlY3RlZERhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKTtcbiAgICB0b3RhbE1pbnV0ZURhdGEgPSB7XG4gICAgICAgIFwic2xlZXBcIjogMCxcbiAgICAgICAgXCJ3b3JrXCI6IDAsXG4gICAgICAgIFwidHJhdmVsXCI6IDAsXG4gICAgICAgIFwic3R1ZHlcIjogMCxcbiAgICAgICAgXCJlYXRcIjogMCxcbiAgICAgICAgXCJob2JieVwiOiAwLFxuICAgICAgICBcIndhc2hcIjogMCxcbiAgICAgICAgXCJyZXN0XCI6IDAsXG4gICAgfTtcbiAgICBtb3RoZXJmaWxlLmZvckVhY2goZnVuY3Rpb24odXNlckRhdGVFdmVudHMpIHtcbiAgICAgICAgY3VycmVudFNlbGVjdGVkRGF0ZXMuZm9yRWFjaChmdW5jdGlvbihkYXRlTnVtYmVyc0Rpc3BsYXllZCl7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJEYXRlRXZlbnRzLmRhdGUgPT09IHBhcnNlSW50KGRhdGVOdW1iZXJzRGlzcGxheWVkLmdldEF0dHJpYnV0ZSgnZGF0YS1kYXknKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgdXNlckRhdGVFdmVudHMubW9udGggPT09IHBhcnNlSW50KGRhdGVOdW1iZXJzRGlzcGxheWVkLmdldEF0dHJpYnV0ZSgnZGF0YS1tb250aCcpKSAmJlxuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0ZUV2ZW50cy55ZWFyID09PSBwYXJzZUludChkYXRlTnVtYmVyc0Rpc3BsYXllZC5nZXRBdHRyaWJ1dGUoJ2RhdGEteWVhcicpKSkge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbE1pbnV0ZURhdGFbdXNlckRhdGVFdmVudHMuYWN0aXZpdHldICs9IHVzZXJEYXRlRXZlbnRzLnRvdGFsTWludXRlcztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJveCA9IHVzZXJEYXRlRXZlbnRzLnN0YXJ0UmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUoYm94ID49IHVzZXJEYXRlRXZlbnRzLnN0YXJ0UmVsYXRpdmUgJiYgYm94IDwgKHVzZXJEYXRlRXZlbnRzLmVuZFJlbGF0aXZlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmFuYW5hID0gdXNlckRhdGVFdmVudHNbJ2RhdGUnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG11ZmZpbiA9IGJveC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmFuYW5hTXVmZmluID0gYmFuYW5hICsgbXVmZmluO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYW5hbmFNdWZmaW4pLmNsYXNzTGlzdC5hZGQodXNlckRhdGVFdmVudHMuYWN0aXZpdHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3grKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxufVxuXG5mdW5jdGlvbiBtYWtlQ2hhcnQgKGNhbnZhcywgdG90YWxNaW51dGVEYXRhKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0dWR5VG90YWwnKS5pbm5lclRleHQgPSB0b3RhbE1pbnV0ZURhdGFbJ3N0dWR5J10rJyBtaW51dGVzJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xlZXBUb3RhbCcpLmlubmVyVGV4dCA9IHRvdGFsTWludXRlRGF0YVsnc2xlZXAnXSsnIG1pbnV0ZXMnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3YXNoVG90YWwnKS5pbm5lclRleHQgPSB0b3RhbE1pbnV0ZURhdGFbJ3dhc2gnXSsnIG1pbnV0ZXMnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmF2ZWxUb3RhbCcpLmlubmVyVGV4dCA9IHRvdGFsTWludXRlRGF0YVsndHJhdmVsJ10rJyBtaW51dGVzJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9iYnlUb3RhbCcpLmlubmVyVGV4dCA9IHRvdGFsTWludXRlRGF0YVsnaG9iYnknXSsnIG1pbnV0ZXMnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3JrVG90YWwnKS5pbm5lclRleHQgPSB0b3RhbE1pbnV0ZURhdGFbJ3dvcmsnXSsnIG1pbnV0ZXMnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYXRUb3RhbCcpLmlubmVyVGV4dCA9IHRvdGFsTWludXRlRGF0YVsnZWF0J10rJyBtaW51dGVzJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdFRvdGFsJykuaW5uZXJUZXh0ID0gdG90YWxNaW51dGVEYXRhWydyZXN0J10rJyBtaW51dGVzJztcblxuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGxhYmVsczogWydTdHVkeScsICdTbGVlcCcsICdXYXNoJywgJ1RyYXZlbCcsICdIb2JieScsICdXb3JrJywgJ0VhdCcsICdSZXN0J10sXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICBsYWJlbDogJzcgRGF5IEFjdGl2aXR5IFRvdGFscycsXG4gICAgICAgICAgICAgICAgZGF0YTogW3RvdGFsTWludXRlRGF0YVsnc3R1ZHknXSwgdG90YWxNaW51dGVEYXRhWydzbGVlcCddLCB0b3RhbE1pbnV0ZURhdGFbJ3dhc2gnXSwgdG90YWxNaW51dGVEYXRhWyd0cmF2ZWwnXSwgdG90YWxNaW51dGVEYXRhWydob2JieSddLCB0b3RhbE1pbnV0ZURhdGFbJ3dvcmsnXSwgdG90YWxNaW51dGVEYXRhWydlYXQnXSwgdG90YWxNaW51dGVEYXRhWydyZXN0J11dLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgICAgICAgICAgICAnaHNsYSgyNDUsIDEwMCUsIDUwJSwgMSknLFxuICAgICAgICAgICAgICAgICAgICAnaHNsYSgwLCAxMDAlLCA1MCUsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoODMsIDEwNSwgNDMsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hzbGEoMzAwLCAxMDAlLCA1MCUsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hzbGEoNTAsIDEwMCUsIDUwJSwgMSknLFxuICAgICAgICAgICAgICAgICAgICAnaHNsYSgxODAsIDEwMCUsIDUwJSwgMSknLFxuICAgICAgICAgICAgICAgICAgICAnaHNsYSgxMjUsIDEwMCUsIDUwJSwgMSknLFxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjgsIDEyOCwgMTI4LCAxKSdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBbXG4gICAgICAgICAgICAgICAgICAgICdoc2xhKDI0NSwgMTAwJSwgNTAlLCAxKScsXG4gICAgICAgICAgICAgICAgICAgICdoc2xhKDAsIDEwMCUsIDUwJSwgMSknLFxuICAgICAgICAgICAgICAgICAgICAncmdiYSg4MywgMTA1LCA0MywgMSknLFxuICAgICAgICAgICAgICAgICAgICAnaHNsYSgzMDAsIDEwMCUsIDUwJSwgMSknLFxuICAgICAgICAgICAgICAgICAgICAnaHNsYSg1MCwgMTAwJSwgNTAlLCAxKScsXG4gICAgICAgICAgICAgICAgICAgICdoc2xhKDE4MCwgMTAwJSwgNTAlLCAxKScsXG4gICAgICAgICAgICAgICAgICAgICdoc2xhKDEyNSwgMTAwJSwgNTAlLCAxKScsXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyOCwgMTI4LCAxMjgsIDEpJ1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLVNHXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tU0cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiXSwic291cmNlUm9vdCI6IiJ9