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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3RpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZGF5Q291bnRlciIsImNoZWNrZXIiLCJjdXJyZW50RGF0ZXMiLCJ0b3RhbE1pbnV0ZURhdGEiLCJkYXRlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImFycm93cyIsInRvZGF5IiwiZXZlbnRzQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJldmVudEFkZCIsImRhdGFNYWtlciIsInNldERhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImlubmVyVGV4dCIsImNsZWFyRGF0ZXMiLCJmb3JFYWNoIiwiZWxlbWVudCIsImkiLCJzaG93TWludXRlc0dyYXBoaWMiLCJ0YXJnZXQiLCJzdHlsZSIsInRleHRTaGFkb3ciLCJzZXRUaW1lb3V0IiwiaW5uZXJIVE1MIiwidGVtcGxhdGUiLCJjbG9uZSIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsInRlbXAiLCJtb250aFNlbGVjdCIsIm1vbnRoU3RvcCIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidmFsdWUiLCJkYXlTZWxlY3RvciIsImRheVN0b3BTZWxlY3RvciIsInllYXJTZWxlY3RvciIsInllYXJTdG9wU2VsZWN0b3IiLCJzdGFydEhvdXIiLCJzdG9wSG91ciIsInN0YXJ0TWluIiwic3RvcE1pbiIsImNhbnZhcyIsIm1ha2VDaGFydCIsImhvbWVtYWRlRGF0ZU9iamVjdCIsIm51bWJlck1vbnRoIiwiaW5kZXgiLCJtb250aHMiLCJkYXRlIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsImdldERhdGUiLCJzZXRBdHRyaWJ1dGUiLCJ0b1N0cmluZyIsImdldE1vbnRoIiwicGFyc2VJbnQiLCJfY3VycmVudERhdGVzIiwic2V0RGF0ZXMiLCJkYXRlTnVtYmVyIiwibWludXRlQm94ZXMiLCJjdXJyZW50SW5kZXgiLCJtaW51dGVDb3VudGVyIiwiaWQiLCJwdXNoIiwicXVlcnlTZWxlY3RvciIsInNldEJveGVzIiwibW90aGVyZmlsZSIsImN1cnJlbnRTZWxlY3RlZERhdGVzIiwidXNlckRhdGVFdmVudHMiLCJkYXRlTnVtYmVyc0Rpc3BsYXllZCIsImdldEF0dHJpYnV0ZSIsIm1vbnRoIiwiYWN0aXZpdHkiLCJ0b3RhbE1pbnV0ZXMiLCJib3giLCJzdGFydFJlbGF0aXZlIiwiZW5kUmVsYXRpdmUiLCJiYW5hbmEiLCJtdWZmaW4iLCJiYW5hbmFNdWZmaW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJjdHgiLCJnZXRDb250ZXh0IiwibXlDaGFydCIsIkNoYXJ0IiwidHlwZSIsImRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7Q0FFQTtBQUNBOztBQUVBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtREFBWixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBLElBQUlDLFVBQVUsR0FBRyxDQUFqQjtBQUNBLElBQUlDLE9BQU8sR0FBRyxLQUFkO0FBQ0EsSUFBSUMsWUFBWSxHQUFHLEVBQW5CO0FBQ0EsSUFBSUMsZUFBZSxHQUFHO0FBQ2xCLFdBQVMsQ0FEUztBQUVsQixVQUFRLENBRlU7QUFHbEIsWUFBVSxDQUhRO0FBSWxCLFdBQVMsQ0FKUztBQUtsQixTQUFPLENBTFc7QUFNbEIsV0FBUyxDQU5TO0FBT2xCLFVBQVEsQ0FQVTtBQVFsQixVQUFRO0FBUlUsQ0FBdEI7QUFXQSxJQUFNQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsVUFBMUIsQ0FBZDtBQUNBLElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixDQUFmO0FBQ0EsSUFBTUUsS0FBSyxHQUFHSCxRQUFRLENBQUNDLGdCQUFULENBQTBCLFFBQTFCLENBQWQ7QUFDQSxJQUFNRyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixnQkFBeEIsQ0FBckI7QUFDQSxJQUFNQyxRQUFRLEdBQUdOLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixVQUF4QixDQUFqQjtBQUNBLElBQU1FLFNBQVMsR0FBR1AsUUFBUSxDQUFDSyxjQUFULENBQXdCLFdBQXhCLENBQWxCO0FBRUFHLE9BQU8sQ0FBQ2IsVUFBRCxDQUFQO0FBTUFRLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU00sZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBVUMsQ0FBVixFQUFhO0FBQzVDVixVQUFRLENBQUNLLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NNLFNBQXRDLEdBQWtELEVBQWxEO0FBQ0FDLFlBQVUsQ0FBQ2YsWUFBRCxDQUFWO0FBRUFGLFlBQVUsR0FBRyxDQUFiO0FBQ0FDLFNBQU8sR0FBRyxLQUFWO0FBQ0FZLFNBQU8sQ0FBQ2IsVUFBRCxDQUFQO0FBQ0gsQ0FQRDtBQVNBTyxNQUFNLENBQUNXLE9BQVAsQ0FBZSxVQUFVQyxPQUFWLEVBQW1CQyxDQUFuQixFQUFzQjtBQUNqQ0QsU0FBTyxDQUFDTCxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFVQyxDQUFWLEVBQWE7QUFFM0NFLGNBQVUsQ0FBQ2YsWUFBRCxDQUFWOztBQUVBLFlBQVFrQixDQUFSO0FBQ0ksV0FBSyxDQUFMO0FBQ0lwQixrQkFBVTtBQUNWQyxlQUFPLEdBQUcsSUFBVjtBQUNBWSxlQUFPLENBQUNiLFVBQUQsQ0FBUDtBQUNBcUIsMEJBQWtCO0FBQ2xCOztBQUVKLFdBQUssQ0FBTDtBQUNJckIsa0JBQVU7QUFDVkMsZUFBTyxHQUFHLElBQVY7QUFDQVksZUFBTyxDQUFDYixVQUFELENBQVA7QUFDQXFCLDBCQUFrQjtBQUNsQjs7QUFFSjtBQUNJO0FBaEJSOztBQW1CQU4sS0FBQyxDQUFDTyxNQUFGLENBQVNDLEtBQVQsQ0FBZUMsVUFBZixHQUE0QixpQkFBNUIsQ0F2QjJDLENBeUIzQzs7QUFDQUMsY0FBVSxDQUFDLFlBQVc7QUFDbEJWLE9BQUMsQ0FBQ08sTUFBRixDQUFTQyxLQUFULENBQWVDLFVBQWYsR0FBNEIsRUFBNUI7QUFDSCxLQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0gsR0E3QkQsRUE2QkcsS0E3Qkg7QUErQkgsQ0FoQ0Q7QUFrQ0FwQixLQUFLLENBQUNjLE9BQU4sQ0FBYyxVQUFVQyxPQUFWLEVBQW1CQyxDQUFuQixFQUFzQjtBQUNoQ0QsU0FBTyxDQUFDTCxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFVQyxDQUFWLEVBQWE7QUFFM0NNLHNCQUFrQjtBQUVyQixHQUpEO0FBS0gsQ0FORDtBQVNBWixZQUFZLENBQUNLLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQVVDLENBQVYsRUFBYTtBQUNoRCxNQUFJVixRQUFRLENBQUNLLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBSixFQUEyQztBQUN2Q0wsWUFBUSxDQUFDSyxjQUFULENBQXdCLFlBQXhCLEVBQXNDZ0IsU0FBdEMsR0FBa0QsRUFBbEQ7QUFDSDs7QUFDRCxNQUFJckIsUUFBUSxDQUFDSyxjQUFULENBQXdCLGdCQUF4QixDQUFKLEVBQStDO0FBQzNDTCxZQUFRLENBQUNLLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDZ0IsU0FBMUMsR0FBc0QsRUFBdEQ7QUFDSDs7QUFDRCxNQUFJckIsUUFBUSxDQUFDSyxjQUFULENBQXdCLFlBQXhCLENBQUosRUFBMkM7QUFDdkNMLFlBQVEsQ0FBQ0ssY0FBVCxDQUF3QixZQUF4QixFQUFzQ2dCLFNBQXRDLEdBQWtELEVBQWxEO0FBQ0g7O0FBQ0QsTUFBSUMsUUFBUSxHQUFHdEIsUUFBUSxDQUFDSyxjQUFULENBQXdCLFlBQXhCLENBQWY7QUFDQSxNQUFJa0IsS0FBSyxHQUFHRCxRQUFRLENBQUNFLE9BQVQsQ0FBaUJDLFNBQWpCLENBQTJCLElBQTNCLENBQVo7QUFDQXpCLFVBQVEsQ0FBQ0ssY0FBVCxDQUF3QixZQUF4QixFQUFzQ3FCLFdBQXRDLENBQWtESCxLQUFsRDtBQUdILENBZkQ7QUFrQkFqQixRQUFRLENBQUNHLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQVk7QUFFM0MsTUFBSVQsUUFBUSxDQUFDSyxjQUFULENBQXdCLFlBQXhCLENBQUosRUFBMkM7QUFDdkNMLFlBQVEsQ0FBQ0ssY0FBVCxDQUF3QixZQUF4QixFQUFzQ2dCLFNBQXRDLEdBQWtELEVBQWxEO0FBQ0g7O0FBQ0QsTUFBSXJCLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixnQkFBeEIsQ0FBSixFQUErQztBQUMzQ0wsWUFBUSxDQUFDSyxjQUFULENBQXdCLGdCQUF4QixFQUEwQ2dCLFNBQTFDLEdBQXNELEVBQXREO0FBQ0g7O0FBQ0QsTUFBSXJCLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixZQUF4QixDQUFKLEVBQTJDO0FBQ3ZDTCxZQUFRLENBQUNLLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NnQixTQUF0QyxHQUFrRCxFQUFsRDtBQUNIOztBQUNELE1BQUlyQixRQUFRLENBQUNLLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBSixFQUEwQztBQUN0Q0wsWUFBUSxDQUFDSyxjQUFULENBQXdCLGdCQUF4QixFQUEwQ2dCLFNBQTFDLEdBQXNELEVBQXREO0FBQ0g7O0FBQ0QsTUFBTU0sSUFBSSxHQUFHM0IsUUFBUSxDQUFDSyxjQUFULENBQXdCLFdBQXhCLENBQWI7QUFDQSxNQUFJa0IsS0FBSyxHQUFHSSxJQUFJLENBQUNILE9BQUwsQ0FBYUMsU0FBYixDQUF1QixJQUF2QixDQUFaO0FBQ0F6QixVQUFRLENBQUNLLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDcUIsV0FBMUMsQ0FBc0RILEtBQXREO0FBRUEsTUFBTUssV0FBVyxHQUFHNUIsUUFBUSxDQUFDSyxjQUFULENBQXdCLDhCQUF4QixDQUFwQjtBQUNBLE1BQUl3QixTQUFTLEdBQUc3QixRQUFRLENBQUNLLGNBQVQsQ0FBd0IsNkJBQXhCLENBQWhCO0FBRUF1QixhQUFXLENBQUNuQixnQkFBWixDQUE2QixRQUE3QixFQUF1QyxVQUFTQyxDQUFULEVBQVc7QUFDOUNtQixhQUFTLENBQUNDLE9BQVYsQ0FBa0JELFNBQVMsQ0FBQ0UsYUFBNUIsRUFBMkNDLEtBQTNDLEdBQW1ESixXQUFXLENBQUNFLE9BQVosQ0FBb0JGLFdBQVcsQ0FBQ0csYUFBaEMsRUFBK0NDLEtBQWxHO0FBR0FILGFBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsU0FBUyxDQUFDRSxhQUE1QixFQUEyQ3BCLFNBQTNDLEdBQXVEaUIsV0FBVyxDQUFDRSxPQUFaLENBQW9CRixXQUFXLENBQUNHLGFBQWhDLEVBQStDcEIsU0FBdEc7QUFDSCxHQUxEO0FBT0EsTUFBTXNCLFdBQVcsR0FBR2pDLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3Qiw0QkFBeEIsQ0FBcEI7QUFDQSxNQUFJNkIsZUFBZSxHQUFHbEMsUUFBUSxDQUFDSyxjQUFULENBQXdCLDJCQUF4QixDQUF0QjtBQUVBNEIsYUFBVyxDQUFDeEIsZ0JBQVosQ0FBNkIsUUFBN0IsRUFBdUMsVUFBU0MsQ0FBVCxFQUFXO0FBQzlDd0IsbUJBQWUsQ0FBQ0osT0FBaEIsQ0FBd0JJLGVBQWUsQ0FBQ0gsYUFBeEMsRUFBdURDLEtBQXZELEdBQStEQyxXQUFXLENBQUNILE9BQVosQ0FBb0JHLFdBQVcsQ0FBQ0YsYUFBaEMsRUFBK0NDLEtBQTlHO0FBQ0FFLG1CQUFlLENBQUNKLE9BQWhCLENBQXdCSSxlQUFlLENBQUNILGFBQXhDLEVBQXVEcEIsU0FBdkQsR0FBbUVzQixXQUFXLENBQUNILE9BQVosQ0FBb0JHLFdBQVcsQ0FBQ0YsYUFBaEMsRUFBK0NwQixTQUFsSDtBQUdILEdBTEQ7QUFPQSxNQUFNd0IsWUFBWSxHQUFHbkMsUUFBUSxDQUFDSyxjQUFULENBQXdCLDZCQUF4QixDQUFyQjtBQUNBLE1BQUkrQixnQkFBZ0IsR0FBR3BDLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3Qiw0QkFBeEIsQ0FBdkI7QUFDQThCLGNBQVksQ0FBQzFCLGdCQUFiLENBQThCLFFBQTlCLEVBQXdDLFVBQVNDLENBQVQsRUFBVztBQUMvQzBCLG9CQUFnQixDQUFDTixPQUFqQixDQUF5Qk0sZ0JBQWdCLENBQUNMLGFBQTFDLEVBQXlEQyxLQUF6RCxHQUFpRUcsWUFBWSxDQUFDTCxPQUFiLENBQXFCSyxZQUFZLENBQUNKLGFBQWxDLEVBQWlEQyxLQUFsSDtBQUNBSSxvQkFBZ0IsQ0FBQ04sT0FBakIsQ0FBeUJNLGdCQUFnQixDQUFDTCxhQUExQyxFQUF5RHBCLFNBQXpELEdBQXFFd0IsWUFBWSxDQUFDTCxPQUFiLENBQXFCSyxZQUFZLENBQUNKLGFBQWxDLEVBQWlEcEIsU0FBdEg7QUFFSCxHQUpEO0FBTUEsTUFBTTBCLFNBQVMsR0FBR3JDLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3Qiw2QkFBeEIsQ0FBbEI7QUFDQSxNQUFJaUMsUUFBUSxHQUFHdEMsUUFBUSxDQUFDSyxjQUFULENBQXdCLDRCQUF4QixDQUFmO0FBQ0FnQyxXQUFTLENBQUM1QixnQkFBVixDQUEyQixRQUEzQixFQUFxQyxVQUFTQyxDQUFULEVBQVc7QUFDNUM0QixZQUFRLENBQUNSLE9BQVQsQ0FBaUJRLFFBQVEsQ0FBQ1AsYUFBMUIsRUFBeUNDLEtBQXpDLEdBQWlESyxTQUFTLENBQUNQLE9BQVYsQ0FBa0JPLFNBQVMsQ0FBQ04sYUFBNUIsRUFBMkNDLEtBQTVGO0FBQ0FNLFlBQVEsQ0FBQ1IsT0FBVCxDQUFpQlEsUUFBUSxDQUFDUCxhQUExQixFQUF5Q3BCLFNBQXpDLEdBQXFEMEIsU0FBUyxDQUFDUCxPQUFWLENBQWtCTyxTQUFTLENBQUNOLGFBQTVCLEVBQTJDcEIsU0FBaEc7QUFFSCxHQUpEO0FBTUEsTUFBTTRCLFFBQVEsR0FBR3ZDLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QiwrQkFBeEIsQ0FBakI7QUFDQSxNQUFJbUMsT0FBTyxHQUFHeEMsUUFBUSxDQUFDSyxjQUFULENBQXdCLDhCQUF4QixDQUFkO0FBQ0FrQyxVQUFRLENBQUM5QixnQkFBVCxDQUEwQixRQUExQixFQUFvQyxVQUFTQyxDQUFULEVBQVc7QUFDM0M4QixXQUFPLENBQUNWLE9BQVIsQ0FBZ0JVLE9BQU8sQ0FBQ1QsYUFBeEIsRUFBdUNDLEtBQXZDLEdBQStDTyxRQUFRLENBQUNULE9BQVQsQ0FBaUJTLFFBQVEsQ0FBQ1IsYUFBMUIsRUFBeUNDLEtBQXhGO0FBQ0FRLFdBQU8sQ0FBQ1YsT0FBUixDQUFnQlUsT0FBTyxDQUFDVCxhQUF4QixFQUF1Q3BCLFNBQXZDLEdBQW1ENEIsUUFBUSxDQUFDVCxPQUFULENBQWlCUyxRQUFRLENBQUNSLGFBQTFCLEVBQXlDcEIsU0FBNUY7QUFFSCxHQUpEO0FBTUgsQ0E5REQ7QUFtRUFKLFNBQVMsQ0FBQ0UsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBVTtBQUMxQyxNQUFJVCxRQUFRLENBQUNLLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBSixFQUEyQztBQUN2Q0wsWUFBUSxDQUFDSyxjQUFULENBQXdCLFlBQXhCLEVBQXNDZ0IsU0FBdEMsR0FBa0QsRUFBbEQ7QUFDSDs7QUFDRCxNQUFJckIsUUFBUSxDQUFDSyxjQUFULENBQXdCLGdCQUF4QixDQUFKLEVBQStDO0FBQzNDTCxZQUFRLENBQUNLLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDZ0IsU0FBMUMsR0FBc0QsRUFBdEQ7QUFDSDs7QUFDRCxNQUFJckIsUUFBUSxDQUFDSyxjQUFULENBQXdCLFlBQXhCLENBQUosRUFBMkM7QUFDdkNMLFlBQVEsQ0FBQ0ssY0FBVCxDQUF3QixZQUF4QixFQUFzQ2dCLFNBQXRDLEdBQWtELEVBQWxEO0FBQ0g7O0FBQ0QsTUFBSXJCLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixVQUF4QixDQUFKLEVBQXlDO0FBQ3JDTCxZQUFRLENBQUNLLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NnQixTQUF0QyxHQUFrRCxFQUFsRDtBQUNIOztBQUNELE1BQU1NLElBQUksR0FBRzNCLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixNQUF4QixDQUFiO0FBQ0EsTUFBSWtCLEtBQUssR0FBR0ksSUFBSSxDQUFDSCxPQUFMLENBQWFDLFNBQWIsQ0FBdUIsSUFBdkIsQ0FBWjtBQUNBekIsVUFBUSxDQUFDSyxjQUFULENBQXdCLFlBQXhCLEVBQXNDcUIsV0FBdEMsQ0FBa0RILEtBQWxEO0FBQ0EsTUFBSWtCLE1BQU0sR0FBR3pDLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixVQUF4QixDQUFiO0FBQ0FxQyxXQUFTLENBQUNELE1BQUQsRUFBUzNDLGVBQVQsQ0FBVDtBQUVILENBbkJEOztBQXFCQSxTQUFTVSxPQUFULEdBQW1CO0FBQ25CLE1BQUltQixJQUFJLEdBQUcsRUFBWDtBQUNBLE1BQUlnQixrQkFBa0IsR0FBRztBQUFDLFlBQVEsQ0FBVDtBQUFZLGFBQVMsQ0FBckI7QUFBd0IsWUFBUTtBQUFoQyxHQUF6QjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxDQUFsQjtBQUNJN0MsT0FBSyxDQUFDYyxPQUFOLENBQWMsVUFBVUMsT0FBVixFQUFtQitCLEtBQW5CLEVBQTBCO0FBQ3BDLFFBQU1DLE1BQU0sR0FBRyxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLE9BQXhCLEVBQWlDLE9BQWpDLEVBQTBDLEtBQTFDLEVBQWlELE1BQWpELEVBQXlELE1BQXpELEVBQWlFLFFBQWpFLEVBQTJFLFdBQTNFLEVBQXdGLFNBQXhGLEVBQW1HLFVBQW5HLEVBQStHLFVBQS9HLENBQWY7QUFFQSxRQUFJQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixFQUFYO0FBQ0EsUUFBSUMsSUFBSSxHQUFHRixJQUFJLENBQUNHLFdBQUwsRUFBWDtBQUNBSCxRQUFJLENBQUN2QyxPQUFMLENBQWF1QyxJQUFJLENBQUNJLE9BQUwsS0FBaUJ4RCxVQUE5Qjs7QUFFQSxZQUFRa0QsS0FBUjtBQUNJLFdBQUssQ0FBTDtBQUNJRSxZQUFJLENBQUN2QyxPQUFMLENBQWF1QyxJQUFJLENBQUNJLE9BQUwsS0FBaUIsQ0FBOUI7QUFDQW5ELGdCQUFRLENBQUNDLGdCQUFULENBQTBCLGFBQTFCLEVBQXlDNEMsS0FBekMsRUFBZ0RsQyxTQUFoRCxHQUE0RG9DLElBQUksQ0FBQ0ksT0FBTCxFQUE1RDtBQUNBbkQsZ0JBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsYUFBMUIsRUFBeUM0QyxLQUF6QyxFQUFnRE8sWUFBaEQsQ0FBNkQsVUFBN0QsRUFBeUVMLElBQUksQ0FBQ0ksT0FBTCxHQUFlRSxRQUFmLEVBQXpFO0FBQ0FyRCxnQkFBUSxDQUFDQyxnQkFBVCxDQUEwQixhQUExQixFQUF5QzRDLEtBQXpDLEVBQWdETyxZQUFoRCxDQUE2RCxZQUE3RCxFQUEyRUwsSUFBSSxDQUFDTyxRQUFMLEdBQWdCRCxRQUFoQixFQUEzRTtBQUNBckQsZ0JBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsYUFBMUIsRUFBeUM0QyxLQUF6QyxFQUFnRE8sWUFBaEQsQ0FBNkQsV0FBN0QsRUFBMEVMLElBQUksQ0FBQ0csV0FBTCxHQUFtQkcsUUFBbkIsRUFBMUU7QUFDQTs7QUFFSixXQUFLLENBQUw7QUFDSU4sWUFBSSxDQUFDdkMsT0FBTCxDQUFhdUMsSUFBSSxDQUFDSSxPQUFMLEtBQWlCLENBQTlCO0FBQ0FuRCxnQkFBUSxDQUFDQyxnQkFBVCxDQUEwQixhQUExQixFQUF5QzRDLEtBQXpDLEVBQWdEbEMsU0FBaEQsR0FBNERvQyxJQUFJLENBQUNJLE9BQUwsRUFBNUQ7QUFDQW5ELGdCQUFRLENBQUNDLGdCQUFULENBQTBCLGFBQTFCLEVBQXlDNEMsS0FBekMsRUFBZ0RPLFlBQWhELENBQTZELFVBQTdELEVBQXlFTCxJQUFJLENBQUNJLE9BQUwsR0FBZUUsUUFBZixFQUF6RTtBQUNBckQsZ0JBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsYUFBMUIsRUFBeUM0QyxLQUF6QyxFQUFnRE8sWUFBaEQsQ0FBNkQsWUFBN0QsRUFBMkVMLElBQUksQ0FBQ08sUUFBTCxHQUFnQkQsUUFBaEIsRUFBM0U7QUFDQXJELGdCQUFRLENBQUNDLGdCQUFULENBQTBCLGFBQTFCLEVBQXlDNEMsS0FBekMsRUFBZ0RPLFlBQWhELENBQTZELFdBQTdELEVBQTBFTCxJQUFJLENBQUNHLFdBQUwsR0FBbUJHLFFBQW5CLEVBQTFFO0FBQ0E7O0FBRUosV0FBSyxDQUFMO0FBQ0lOLFlBQUksQ0FBQ3ZDLE9BQUwsQ0FBYXVDLElBQUksQ0FBQ0ksT0FBTCxLQUFpQixDQUE5QjtBQUNBbkQsZ0JBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsYUFBMUIsRUFBeUM0QyxLQUF6QyxFQUFnRGxDLFNBQWhELEdBQTREb0MsSUFBSSxDQUFDSSxPQUFMLEVBQTVEO0FBQ0FuRCxnQkFBUSxDQUFDQyxnQkFBVCxDQUEwQixhQUExQixFQUF5QzRDLEtBQXpDLEVBQWdETyxZQUFoRCxDQUE2RCxVQUE3RCxFQUF5RUwsSUFBSSxDQUFDSSxPQUFMLEdBQWVFLFFBQWYsRUFBekU7QUFDQXJELGdCQUFRLENBQUNDLGdCQUFULENBQTBCLGFBQTFCLEVBQXlDNEMsS0FBekMsRUFBZ0RPLFlBQWhELENBQTZELFlBQTdELEVBQTJFTCxJQUFJLENBQUNPLFFBQUwsR0FBZ0JELFFBQWhCLEVBQTNFO0FBQ0FyRCxnQkFBUSxDQUFDQyxnQkFBVCxDQUEwQixhQUExQixFQUF5QzRDLEtBQXpDLEVBQWdETyxZQUFoRCxDQUE2RCxXQUE3RCxFQUEwRUwsSUFBSSxDQUFDRyxXQUFMLEdBQW1CRyxRQUFuQixFQUExRTtBQUNBOztBQUVKLFdBQUssQ0FBTDtBQUNJTixZQUFJLENBQUN2QyxPQUFMLENBQWF1QyxJQUFJLENBQUNJLE9BQUwsRUFBYjtBQUNBbkQsZ0JBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsYUFBMUIsRUFBeUM0QyxLQUF6QyxFQUFnRGxDLFNBQWhELEdBQTREb0MsSUFBSSxDQUFDSSxPQUFMLEVBQTVEO0FBQ0FuRCxnQkFBUSxDQUFDQyxnQkFBVCxDQUEwQixhQUExQixFQUF5QzRDLEtBQXpDLEVBQWdETyxZQUFoRCxDQUE2RCxVQUE3RCxFQUF5RUwsSUFBSSxDQUFDSSxPQUFMLEdBQWVFLFFBQWYsRUFBekU7QUFDQXJELGdCQUFRLENBQUNDLGdCQUFULENBQTBCLGFBQTFCLEVBQXlDNEMsS0FBekMsRUFBZ0RPLFlBQWhELENBQTZELFlBQTdELEVBQTJFTCxJQUFJLENBQUNPLFFBQUwsR0FBZ0JELFFBQWhCLEVBQTNFO0FBQ0FyRCxnQkFBUSxDQUFDQyxnQkFBVCxDQUEwQixhQUExQixFQUF5QzRDLEtBQXpDLEVBQWdETyxZQUFoRCxDQUE2RCxXQUE3RCxFQUEwRUwsSUFBSSxDQUFDRyxXQUFMLEdBQW1CRyxRQUFuQixFQUExRTtBQUVBckQsZ0JBQVEsQ0FBQ0ssY0FBVCxDQUF3QixPQUF4QixFQUFpQ00sU0FBakMsR0FBNkNtQyxNQUFNLENBQUNDLElBQUksQ0FBQ08sUUFBTCxFQUFELENBQW5EO0FBQ0F0RCxnQkFBUSxDQUFDSyxjQUFULENBQXdCLE1BQXhCLEVBQWdDTSxTQUFoQyxHQUE0Q29DLElBQUksQ0FBQ0csV0FBTCxHQUFtQkcsUUFBbkIsRUFBNUM7QUFFQTs7QUFFSixXQUFLLENBQUw7QUFDSU4sWUFBSSxDQUFDdkMsT0FBTCxDQUFhdUMsSUFBSSxDQUFDSSxPQUFMLEtBQWlCLENBQTlCO0FBQ0FuRCxnQkFBUSxDQUFDQyxnQkFBVCxDQUEwQixhQUExQixFQUF5QzRDLEtBQXpDLEVBQWdEbEMsU0FBaEQsR0FBNERvQyxJQUFJLENBQUNJLE9BQUwsRUFBNUQ7QUFDQW5ELGdCQUFRLENBQUNDLGdCQUFULENBQTBCLGFBQTFCLEVBQXlDNEMsS0FBekMsRUFBZ0RPLFlBQWhELENBQTZELFVBQTdELEVBQXlFTCxJQUFJLENBQUNJLE9BQUwsR0FBZUUsUUFBZixFQUF6RTtBQUNBckQsZ0JBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsYUFBMUIsRUFBeUM0QyxLQUF6QyxFQUFnRE8sWUFBaEQsQ0FBNkQsWUFBN0QsRUFBMkVMLElBQUksQ0FBQ08sUUFBTCxHQUFnQkQsUUFBaEIsRUFBM0U7QUFDQXJELGdCQUFRLENBQUNDLGdCQUFULENBQTBCLGFBQTFCLEVBQXlDNEMsS0FBekMsRUFBZ0RPLFlBQWhELENBQTZELFdBQTdELEVBQTBFTCxJQUFJLENBQUNHLFdBQUwsR0FBbUJHLFFBQW5CLEVBQTFFO0FBQ0E7O0FBRUosV0FBSyxDQUFMO0FBQ0lOLFlBQUksQ0FBQ3ZDLE9BQUwsQ0FBYXVDLElBQUksQ0FBQ0ksT0FBTCxLQUFpQixDQUE5QjtBQUNBbkQsZ0JBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsYUFBMUIsRUFBeUM0QyxLQUF6QyxFQUFnRGxDLFNBQWhELEdBQTREb0MsSUFBSSxDQUFDSSxPQUFMLEVBQTVEO0FBQ0FuRCxnQkFBUSxDQUFDQyxnQkFBVCxDQUEwQixhQUExQixFQUF5QzRDLEtBQXpDLEVBQWdETyxZQUFoRCxDQUE2RCxVQUE3RCxFQUF5RUwsSUFBSSxDQUFDSSxPQUFMLEdBQWVFLFFBQWYsRUFBekU7QUFDQXJELGdCQUFRLENBQUNDLGdCQUFULENBQTBCLGFBQTFCLEVBQXlDNEMsS0FBekMsRUFBZ0RPLFlBQWhELENBQTZELFlBQTdELEVBQTJFTCxJQUFJLENBQUNPLFFBQUwsR0FBZ0JELFFBQWhCLEVBQTNFO0FBQ0FyRCxnQkFBUSxDQUFDQyxnQkFBVCxDQUEwQixhQUExQixFQUF5QzRDLEtBQXpDLEVBQWdETyxZQUFoRCxDQUE2RCxXQUE3RCxFQUEwRUwsSUFBSSxDQUFDRyxXQUFMLEdBQW1CRyxRQUFuQixFQUExRTtBQUNBOztBQUVKLFdBQUssQ0FBTDtBQUNJTixZQUFJLENBQUN2QyxPQUFMLENBQWF1QyxJQUFJLENBQUNJLE9BQUwsS0FBaUIsQ0FBOUI7QUFDQW5ELGdCQUFRLENBQUNDLGdCQUFULENBQTBCLGFBQTFCLEVBQXlDNEMsS0FBekMsRUFBZ0RsQyxTQUFoRCxHQUE0RG9DLElBQUksQ0FBQ0ksT0FBTCxFQUE1RDtBQUNBbkQsZ0JBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsYUFBMUIsRUFBeUM0QyxLQUF6QyxFQUFnRE8sWUFBaEQsQ0FBNkQsVUFBN0QsRUFBeUVMLElBQUksQ0FBQ0ksT0FBTCxHQUFlRSxRQUFmLEVBQXpFO0FBQ0FyRCxnQkFBUSxDQUFDQyxnQkFBVCxDQUEwQixhQUExQixFQUF5QzRDLEtBQXpDLEVBQWdETyxZQUFoRCxDQUE2RCxZQUE3RCxFQUEyRUwsSUFBSSxDQUFDTyxRQUFMLEdBQWdCRCxRQUFoQixFQUEzRTtBQUNBckQsZ0JBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsYUFBMUIsRUFBeUM0QyxLQUF6QyxFQUFnRE8sWUFBaEQsQ0FBNkQsV0FBN0QsRUFBMEVMLElBQUksQ0FBQ0csV0FBTCxHQUFtQkcsUUFBbkIsRUFBMUU7QUFDQTs7QUFFSjtBQUNJO0FBOURSOztBQWlFQXhELGdCQUFZLENBQUNnRCxLQUFELENBQVosR0FBc0JVLFFBQVEsQ0FBQ3pDLE9BQU8sQ0FBQ0gsU0FBVCxDQUE5QjtBQUNBZ0IsUUFBSSxDQUFDa0IsS0FBRCxDQUFKLEdBQWNGLGtCQUFrQixHQUFHO0FBQUMsY0FBUVksUUFBUSxDQUFDekMsT0FBTyxDQUFDSCxTQUFULENBQWpCO0FBQXNDLGVBQVNpQyxXQUEvQztBQUE0RCxjQUFRSztBQUFwRSxLQUFuQztBQUdILEdBNUVEO0FBOEVIOztBQUVELFNBQVNyQyxVQUFULENBQW9CNEMsYUFBcEIsRUFBa0M7QUFDOUJBLGVBQWEsR0FBRyxFQUFoQjtBQUNBeEQsVUFBUSxDQUFDQyxnQkFBVCxDQUEwQixjQUExQixFQUEwQ1ksT0FBMUMsQ0FBa0QsVUFBVUMsT0FBVixFQUFtQjtBQUNqRUEsV0FBTyxDQUFDSCxTQUFSLEdBQW9CLEVBQXBCO0FBQ0gsR0FGRDtBQUdIOztBQUVELFNBQVM4QyxRQUFULENBQWtCQyxVQUFsQixFQUE4QjtBQUMxQixNQUFJQyxXQUFXLEdBQUczRCxRQUFRLENBQUNDLGdCQUFULENBQTBCLFlBQTFCLENBQWxCO0FBQ0EsTUFBSTJELFlBQVksR0FBRyxDQUFuQjtBQUVBLE1BQUlDLGFBQWEsR0FBRyxDQUFwQjtBQUNBRixhQUFXLENBQUM5QyxPQUFaLENBQW9CLFVBQVVDLE9BQVYsRUFBbUIrQixLQUFuQixFQUEwQjtBQUMxQyxRQUFJZ0IsYUFBYSxHQUFHLElBQXBCLEVBQTBCO0FBQ3RCQSxtQkFBYSxHQUFHLENBQWhCO0FBQ0FELGtCQUFZO0FBQ2Y7O0FBRUQ5QyxXQUFPLENBQUNnRCxFQUFSLEdBQWFqRSxZQUFZLENBQUMrRCxZQUFELENBQVosR0FBNkJDLGFBQWEsQ0FBQ1IsUUFBZCxFQUExQztBQUNBUSxpQkFBYTtBQUNoQixHQVJEO0FBU0g7O0FBRUQsU0FBUzdDLGtCQUFULEdBQThCO0FBRTFCLE1BQUloQixRQUFRLENBQUNDLGdCQUFULENBQTBCLGNBQTFCLENBQUosRUFBK0M7QUFDM0NELFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsVUFBMUIsRUFBc0NZLE9BQXRDLENBQThDLFVBQVNDLE9BQVQsRUFBaUI7QUFDM0RBLGFBQU8sQ0FBQ08sU0FBUixHQUFvQixFQUFwQjtBQUNILEtBRkQ7QUFHSDs7QUFFRHJCLFVBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsVUFBMUIsRUFBc0NZLE9BQXRDLENBQThDLFVBQVVDLE9BQVYsRUFBbUI7QUFDN0RqQixnQkFBWSxDQUFDa0UsSUFBYixDQUFrQmpELE9BQU8sQ0FBQ0gsU0FBMUI7QUFDQSxRQUFJVyxRQUFRLEdBQUd0QixRQUFRLENBQUNnRSxhQUFULENBQXVCLGdCQUF2QixDQUFmO0FBQ0EsUUFBSXpDLEtBQUssR0FBR0QsUUFBUSxDQUFDRSxPQUFULENBQWlCQyxTQUFqQixDQUEyQixJQUEzQixDQUFaO0FBQ0FYLFdBQU8sQ0FBQ1ksV0FBUixDQUFvQkgsS0FBcEI7QUFDSCxHQUxEO0FBT0FrQyxVQUFRLENBQUM1RCxZQUFELENBQVI7QUFDQUQsU0FBTyxHQUFHLElBQVY7QUFDQXFFLFVBQVEsQ0FBQ0MsVUFBRCxDQUFSOztBQUNBLE1BQUlsRSxRQUFRLENBQUNLLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBSixFQUF5QztBQUNyQ3FDLGFBQVMsQ0FBQzFDLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixVQUF4QixDQUFELEVBQXNDUCxlQUF0QyxDQUFUO0FBQ0g7QUFDSjs7QUFHRCxTQUFTbUUsUUFBVCxDQUFrQkMsVUFBbEIsRUFBOEI7QUFDMUIsTUFBTUMsb0JBQW9CLEdBQUduRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGFBQTFCLENBQTdCO0FBQ0FILGlCQUFlLEdBQUc7QUFDZCxhQUFTLENBREs7QUFFZCxZQUFRLENBRk07QUFHZCxjQUFVLENBSEk7QUFJZCxhQUFTLENBSks7QUFLZCxXQUFPLENBTE87QUFNZCxhQUFTLENBTks7QUFPZCxZQUFRLENBUE07QUFRZCxZQUFRO0FBUk0sR0FBbEI7QUFVQW9FLFlBQVUsQ0FBQ3JELE9BQVgsQ0FBbUIsVUFBU3VELGNBQVQsRUFBeUI7QUFDeENELHdCQUFvQixDQUFDdEQsT0FBckIsQ0FBNkIsVUFBU3dELG9CQUFULEVBQThCO0FBQ25ELFVBQUlELGNBQWMsQ0FBQ3JCLElBQWYsS0FBd0JRLFFBQVEsQ0FBQ2Msb0JBQW9CLENBQUNDLFlBQXJCLENBQWtDLFVBQWxDLENBQUQsQ0FBaEMsSUFDQUYsY0FBYyxDQUFDRyxLQUFmLEtBQXlCaEIsUUFBUSxDQUFDYyxvQkFBb0IsQ0FBQ0MsWUFBckIsQ0FBa0MsWUFBbEMsQ0FBRCxDQURqQyxJQUVBRixjQUFjLENBQUNuQixJQUFmLEtBQXdCTSxRQUFRLENBQUNjLG9CQUFvQixDQUFDQyxZQUFyQixDQUFrQyxXQUFsQyxDQUFELENBRnBDLEVBRXNGO0FBQ2xGeEUsdUJBQWUsQ0FBQ3NFLGNBQWMsQ0FBQ0ksUUFBaEIsQ0FBZixJQUE0Q0osY0FBYyxDQUFDSyxZQUEzRDtBQUNBLFlBQUlDLEdBQUcsR0FBR04sY0FBYyxDQUFDTyxhQUF6Qjs7QUFDUSxlQUFNRCxHQUFHLElBQUlOLGNBQWMsQ0FBQ08sYUFBdEIsSUFBdUNELEdBQUcsR0FBSU4sY0FBYyxDQUFDUSxXQUFuRSxFQUFpRjtBQUM3RSxjQUFJQyxNQUFNLEdBQUdULGNBQWMsQ0FBQyxNQUFELENBQTNCO0FBQ0EsY0FBSVUsTUFBTSxHQUFHSixHQUFHLENBQUNyQixRQUFKLEVBQWI7QUFDQSxjQUFJMEIsWUFBWSxHQUFHRixNQUFNLEdBQUdDLE1BQTVCO0FBQ0E5RSxrQkFBUSxDQUFDSyxjQUFULENBQXdCMEUsWUFBeEIsRUFBc0NDLFNBQXRDLENBQWdEQyxHQUFoRCxDQUFvRGIsY0FBYyxDQUFDSSxRQUFuRTtBQUNBRSxhQUFHO0FBQ047QUFDWjtBQUNSLEtBZEQ7QUFlSCxHQWhCRDtBQWtCSDs7QUFFRCxTQUFTaEMsU0FBVCxDQUFvQkQsTUFBcEIsRUFBNEIzQyxlQUE1QixFQUE2QztBQUN6Q0UsVUFBUSxDQUFDSyxjQUFULENBQXdCLFlBQXhCLEVBQXNDTSxTQUF0QyxHQUFrRGIsZUFBZSxDQUFDLE9BQUQsQ0FBZixHQUF5QixVQUEzRTtBQUNBRSxVQUFRLENBQUNLLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NNLFNBQXRDLEdBQWtEYixlQUFlLENBQUMsT0FBRCxDQUFmLEdBQXlCLFVBQTNFO0FBQ0FFLFVBQVEsQ0FBQ0ssY0FBVCxDQUF3QixXQUF4QixFQUFxQ00sU0FBckMsR0FBaURiLGVBQWUsQ0FBQyxNQUFELENBQWYsR0FBd0IsVUFBekU7QUFDQUUsVUFBUSxDQUFDSyxjQUFULENBQXdCLGFBQXhCLEVBQXVDTSxTQUF2QyxHQUFtRGIsZUFBZSxDQUFDLFFBQUQsQ0FBZixHQUEwQixVQUE3RTtBQUNBRSxVQUFRLENBQUNLLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NNLFNBQXRDLEdBQWtEYixlQUFlLENBQUMsT0FBRCxDQUFmLEdBQXlCLFVBQTNFO0FBQ0FFLFVBQVEsQ0FBQ0ssY0FBVCxDQUF3QixXQUF4QixFQUFxQ00sU0FBckMsR0FBaURiLGVBQWUsQ0FBQyxNQUFELENBQWYsR0FBd0IsVUFBekU7QUFDQUUsVUFBUSxDQUFDSyxjQUFULENBQXdCLFVBQXhCLEVBQW9DTSxTQUFwQyxHQUFnRGIsZUFBZSxDQUFDLEtBQUQsQ0FBZixHQUF1QixVQUF2RTtBQUNBRSxVQUFRLENBQUNLLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNNLFNBQXJDLEdBQWlEYixlQUFlLENBQUMsTUFBRCxDQUFmLEdBQXdCLFVBQXpFO0FBRUEsTUFBSW9GLEdBQUcsR0FBR3pDLE1BQU0sQ0FBQzBDLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxJQUFJQywrQ0FBSixDQUFVSCxHQUFWLEVBQWU7QUFDekJJLFFBQUksRUFBRSxLQURtQjtBQUV6QkMsUUFBSSxFQUFFO0FBQ0ZDLFlBQU0sRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE1BQW5CLEVBQTJCLFFBQTNCLEVBQXFDLE9BQXJDLEVBQThDLE1BQTlDLEVBQXNELEtBQXRELEVBQTZELE1BQTdELENBRE47QUFFRkMsY0FBUSxFQUFFLENBQUM7QUFDUEMsYUFBSyxFQUFFLHVCQURBO0FBRVBILFlBQUksRUFBRSxDQUFDekYsZUFBZSxDQUFDLE9BQUQsQ0FBaEIsRUFBMkJBLGVBQWUsQ0FBQyxPQUFELENBQTFDLEVBQXFEQSxlQUFlLENBQUMsTUFBRCxDQUFwRSxFQUE4RUEsZUFBZSxDQUFDLFFBQUQsQ0FBN0YsRUFBeUdBLGVBQWUsQ0FBQyxPQUFELENBQXhILEVBQW1JQSxlQUFlLENBQUMsTUFBRCxDQUFsSixFQUE0SkEsZUFBZSxDQUFDLEtBQUQsQ0FBM0ssRUFBb0xBLGVBQWUsQ0FBQyxNQUFELENBQW5NLENBRkM7QUFHUDZGLHVCQUFlLEVBQUUsQ0FDYix5QkFEYSxFQUViLHVCQUZhLEVBR2Isc0JBSGEsRUFJYix5QkFKYSxFQUtiLHdCQUxhLEVBTWIseUJBTmEsRUFPYix5QkFQYSxFQVFiLHdCQVJhLENBSFY7QUFhUEMsbUJBQVcsRUFBRSxDQUNULHlCQURTLEVBRVQsdUJBRlMsRUFHVCxzQkFIUyxFQUlULHlCQUpTLEVBS1Qsd0JBTFMsRUFNVCx5QkFOUyxFQU9ULHlCQVBTLEVBUVQsd0JBUlMsQ0FiTjtBQXVCUEMsbUJBQVcsRUFBRTtBQXZCTixPQUFEO0FBRlI7QUFGbUIsR0FBZixDQUFkO0FBZ0NILEM7Ozs7Ozs7Ozs7O0FDellELHVDOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIHNjc3MgZmlsZSAoYXBwLnNjc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcblxuaW1wb3J0ICcuL2NvbXBvbmVudHMvdGltZWxpbmUuanMnXG5pbXBvcnQgJ2Jvb3RzdHJhcCdcbmltcG9ydCAnLi9jb21wb25lbnRzL19ib3R0b21ib3gnXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnNvbGUubG9nKCdIZWxsbyBXZWJwYWNrIEVuY29yZSEgRWRpdCBtZSBpbiBhc3NldHMvanMvYXBwLmpzJyk7XG4iLCJpbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMnXG5cbmxldCBkYXlDb3VudGVyID0gMDtcbmxldCBjaGVja2VyID0gZmFsc2U7XG5sZXQgY3VycmVudERhdGVzID0gW107XG5sZXQgdG90YWxNaW51dGVEYXRhID0ge1xuICAgIFwic2xlZXBcIjogMCxcbiAgICBcIndvcmtcIjogMCxcbiAgICBcInRyYXZlbFwiOiAwLFxuICAgIFwic3R1ZHlcIjogMCxcbiAgICBcImVhdFwiOiAwLFxuICAgIFwiaG9iYnlcIjogMCxcbiAgICBcIndhc2hcIjogMCxcbiAgICBcInJlc3RcIjogMCxcbn07XG5cbmNvbnN0IGRhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXRlQm94XCIpO1xuY29uc3QgYXJyb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hcnJvd3NcIik7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kYXlcIik7XG5jb25zdCBldmVudHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd05leHRFdmVudHMnKTtcbmNvbnN0IGV2ZW50QWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50QWRkJyk7XG5jb25zdCBkYXRhTWFrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd0NoYXJ0Jyk7XG5cbnNldERhdGUoZGF5Q291bnRlcik7XG5cblxuXG5cblxudG9kYXlbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhVGFyZ2V0JykuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBjbGVhckRhdGVzKGN1cnJlbnREYXRlcyk7XG5cbiAgICBkYXlDb3VudGVyID0gMDtcbiAgICBjaGVja2VyID0gZmFsc2U7XG4gICAgc2V0RGF0ZShkYXlDb3VudGVyKTtcbn0pO1xuXG5hcnJvd3MuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaSkge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGNsZWFyRGF0ZXMoY3VycmVudERhdGVzKTtcblxuICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBkYXlDb3VudGVyLS07XG4gICAgICAgICAgICAgICAgY2hlY2tlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0RGF0ZShkYXlDb3VudGVyKTtcbiAgICAgICAgICAgICAgICBzaG93TWludXRlc0dyYXBoaWMoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGRheUNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICBjaGVja2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXREYXRlKGRheUNvdW50ZXIpO1xuICAgICAgICAgICAgICAgIHNob3dNaW51dGVzR3JhcGhpYygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZS50YXJnZXQuc3R5bGUudGV4dFNoYWRvdyA9IFwiMCAwIDIwcHggb3JhbmdlXCI7XG5cbiAgICAgICAgLy8gcmVzZXQgdGhlIGNvbG9yIGFmdGVyIGEgc2hvcnQgZGVsYXlcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnRleHRTaGFkb3cgPSBcIlwiO1xuICAgICAgICB9LCA1MDApO1xuICAgIH0sIGZhbHNlKTtcblxufSk7XG5cbmRhdGVzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGkpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblxuICAgICAgICBzaG93TWludXRlc0dyYXBoaWMoKTtcblxuICAgIH0pXG59KTtcblxuXG5ldmVudHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnRNYWtlcicpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93RXZlbnRzJykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudEFkZFRhcmdldCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudEFkZFRhcmdldCcpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YVRhcmdldCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhVGFyZ2V0JykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50TWFrZXInKTtcbiAgICBsZXQgY2xvbmUgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd0V2ZW50cycpLmFwcGVuZENoaWxkKGNsb25lKTtcblxuXG59KTtcblxuXG5ldmVudEFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnRNYWtlcicpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93RXZlbnRzJykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudEFkZFRhcmdldCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudEFkZFRhcmdldCcpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YVRhcmdldCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhVGFyZ2V0JykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudEZvcm0nKSkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnRBZGRUYXJnZXQnKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50Rm9ybScpO1xuICAgIGxldCBjbG9uZSA9IHRlbXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50QWRkVGFyZ2V0JykuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuXG4gICAgY29uc3QgbW9udGhTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV2ZW50X21ha2VyX3N0YXJ0X2RhdGVfbW9udGhcIik7XG4gICAgbGV0IG1vbnRoU3RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXZlbnRfbWFrZXJfc3RvcF9kYXRlX21vbnRoXCIpO1xuXG4gICAgbW9udGhTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIG1vbnRoU3RvcC5vcHRpb25zW21vbnRoU3RvcC5zZWxlY3RlZEluZGV4XS52YWx1ZSA9IG1vbnRoU2VsZWN0Lm9wdGlvbnNbbW9udGhTZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG5cblxuICAgICAgICBtb250aFN0b3Aub3B0aW9uc1ttb250aFN0b3Auc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0ID0gbW9udGhTZWxlY3Qub3B0aW9uc1ttb250aFNlbGVjdC5zZWxlY3RlZEluZGV4XS5pbm5lclRleHQ7XG4gICAgfSlcblxuICAgIGNvbnN0IGRheVNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50X21ha2VyX3N0YXJ0X2RhdGVfZGF5Jyk7XG4gICAgbGV0IGRheVN0b3BTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudF9tYWtlcl9zdG9wX2RhdGVfZGF5Jyk7XG5cbiAgICBkYXlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZGF5U3RvcFNlbGVjdG9yLm9wdGlvbnNbZGF5U3RvcFNlbGVjdG9yLnNlbGVjdGVkSW5kZXhdLnZhbHVlID0gZGF5U2VsZWN0b3Iub3B0aW9uc1tkYXlTZWxlY3Rvci5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgZGF5U3RvcFNlbGVjdG9yLm9wdGlvbnNbZGF5U3RvcFNlbGVjdG9yLnNlbGVjdGVkSW5kZXhdLmlubmVyVGV4dCA9IGRheVNlbGVjdG9yLm9wdGlvbnNbZGF5U2VsZWN0b3Iuc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0O1xuXG5cbiAgICB9KTtcblxuICAgIGNvbnN0IHllYXJTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudF9tYWtlcl9zdGFydF9kYXRlX3llYXInKTtcbiAgICBsZXQgeWVhclN0b3BTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudF9tYWtlcl9zdG9wX2RhdGVfeWVhcicpO1xuICAgIHllYXJTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgeWVhclN0b3BTZWxlY3Rvci5vcHRpb25zW3llYXJTdG9wU2VsZWN0b3Iuc2VsZWN0ZWRJbmRleF0udmFsdWUgPSB5ZWFyU2VsZWN0b3Iub3B0aW9uc1t5ZWFyU2VsZWN0b3Iuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIHllYXJTdG9wU2VsZWN0b3Iub3B0aW9uc1t5ZWFyU3RvcFNlbGVjdG9yLnNlbGVjdGVkSW5kZXhdLmlubmVyVGV4dCA9IHllYXJTZWxlY3Rvci5vcHRpb25zW3llYXJTZWxlY3Rvci5zZWxlY3RlZEluZGV4XS5pbm5lclRleHQ7XG5cbiAgICB9KTtcblxuICAgIGNvbnN0IHN0YXJ0SG91ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudF9tYWtlcl9zdGFydF90aW1lX2hvdXInKTtcbiAgICBsZXQgc3RvcEhvdXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnRfbWFrZXJfc3RvcF90aW1lX2hvdXInKTtcbiAgICBzdGFydEhvdXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIHN0b3BIb3VyLm9wdGlvbnNbc3RvcEhvdXIuc2VsZWN0ZWRJbmRleF0udmFsdWUgPSBzdGFydEhvdXIub3B0aW9uc1tzdGFydEhvdXIuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIHN0b3BIb3VyLm9wdGlvbnNbc3RvcEhvdXIuc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0ID0gc3RhcnRIb3VyLm9wdGlvbnNbc3RhcnRIb3VyLnNlbGVjdGVkSW5kZXhdLmlubmVyVGV4dDtcblxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3RhcnRNaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnRfbWFrZXJfc3RhcnRfdGltZV9taW51dGUnKTtcbiAgICBsZXQgc3RvcE1pbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudF9tYWtlcl9zdG9wX3RpbWVfbWludXRlJyk7XG4gICAgc3RhcnRNaW4uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIHN0b3BNaW4ub3B0aW9uc1tzdG9wTWluLnNlbGVjdGVkSW5kZXhdLnZhbHVlID0gc3RhcnRNaW4ub3B0aW9uc1tzdGFydE1pbi5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgc3RvcE1pbi5vcHRpb25zW3N0b3BNaW4uc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0ID0gc3RhcnRNaW4ub3B0aW9uc1tzdGFydE1pbi5zZWxlY3RlZEluZGV4XS5pbm5lclRleHQ7XG5cbiAgICB9KTtcblxufSk7XG5cblxuXG5cbmRhdGFNYWtlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudE1ha2VyJykpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dFdmVudHMnKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50QWRkVGFyZ2V0JykpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50QWRkVGFyZ2V0JykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhVGFyZ2V0JykpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGFUYXJnZXQnKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpZUNoYXJ0JykpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVUYXJnZXQnKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGEnKTtcbiAgICBsZXQgY2xvbmUgPSB0ZW1wLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhVGFyZ2V0JykuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGllQ2hhcnQnKTtcbiAgICBtYWtlQ2hhcnQoY2FudmFzLCB0b3RhbE1pbnV0ZURhdGEpO1xuXG59KTtcblxuZnVuY3Rpb24gc2V0RGF0ZSgpIHtcbmxldCB0ZW1wID0gW107XG5sZXQgaG9tZW1hZGVEYXRlT2JqZWN0ID0geydkYXRlJzogMCwgJ21vbnRoJzogMCwgJ3llYXInOiAwfTtcbmxldCBudW1iZXJNb250aCA9IDA7XG4gICAgZGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgbW9udGhzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG5cbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZGF5Q291bnRlcik7XG5cbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIDMpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLmlubmVyVGV4dCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS1kYXknLCBkYXRlLmdldERhdGUoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9udGgnLCBkYXRlLmdldE1vbnRoKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLXllYXInLCBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSAyKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5pbm5lclRleHQgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGF5JywgZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLW1vbnRoJywgZGF0ZS5nZXRNb250aCgpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS15ZWFyJywgZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gMSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uaW5uZXJUZXh0ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLWRheScsIGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS1tb250aCcsIGRhdGUuZ2V0TW9udGgoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEteWVhcicsIGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uaW5uZXJUZXh0ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLWRheScsIGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS1tb250aCcsIGRhdGUuZ2V0TW9udGgoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEteWVhcicsIGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb250aCcpLmlubmVyVGV4dCA9IG1vbnRoc1tkYXRlLmdldE1vbnRoKCldO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5ZWFyJykuaW5uZXJUZXh0ID0gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLmlubmVyVGV4dCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS1kYXknLCBkYXRlLmdldERhdGUoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9udGgnLCBkYXRlLmdldE1vbnRoKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLXllYXInLCBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAyKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5pbm5lclRleHQgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGF5JywgZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLW1vbnRoJywgZGF0ZS5nZXRNb250aCgpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS15ZWFyJywgZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uaW5uZXJUZXh0ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLWRheScsIGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS1tb250aCcsIGRhdGUuZ2V0TW9udGgoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEteWVhcicsIGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnREYXRlc1tpbmRleF0gPSBwYXJzZUludChlbGVtZW50LmlubmVyVGV4dCk7XG4gICAgICAgIHRlbXBbaW5kZXhdID0gaG9tZW1hZGVEYXRlT2JqZWN0ID0geydkYXRlJzogcGFyc2VJbnQoZWxlbWVudC5pbm5lclRleHQpLCAnbW9udGgnOiBudW1iZXJNb250aCwgJ3llYXInOiB5ZWFyfTtcblxuXG4gICAgfSk7XG5cbn1cblxuZnVuY3Rpb24gY2xlYXJEYXRlcyhfY3VycmVudERhdGVzKXtcbiAgICBfY3VycmVudERhdGVzID0gW107XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhcmdldEdyYXBoJykuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmlubmVyVGV4dCA9IFwiXCI7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldERhdGVzKGRhdGVOdW1iZXIpIHtcbiAgICBsZXQgbWludXRlQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWludXRlQm94Jyk7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBsZXQgbWludXRlQ291bnRlciA9IDA7XG4gICAgbWludXRlQm94ZXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKG1pbnV0ZUNvdW50ZXIgPiAxNDM5KSB7XG4gICAgICAgICAgICBtaW51dGVDb3VudGVyID0gMDtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5pZCA9IGN1cnJlbnREYXRlc1tjdXJyZW50SW5kZXhdICsgbWludXRlQ291bnRlci50b1N0cmluZygpO1xuICAgICAgICBtaW51dGVDb3VudGVyKys7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dNaW51dGVzR3JhcGhpYygpIHtcbiAgICBcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXJnZXRHcmFwaFwiKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWluUGl4cycpLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCl7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IFtdO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWluUGl4cycpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgY3VycmVudERhdGVzLnB1c2goZWxlbWVudC5pbm5lclRleHQpO1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwYW5kZWREYXRlcycpO1xuICAgICAgICBsZXQgY2xvbmUgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgfSk7XG5cbiAgICBzZXREYXRlcyhjdXJyZW50RGF0ZXMpO1xuICAgIGNoZWNrZXIgPSB0cnVlO1xuICAgIHNldEJveGVzKG1vdGhlcmZpbGUpO1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGllQ2hhcnQnKSkge1xuICAgICAgICBtYWtlQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpZUNoYXJ0JyksIHRvdGFsTWludXRlRGF0YSk7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHNldEJveGVzKG1vdGhlcmZpbGUpIHtcbiAgICBjb25zdCBjdXJyZW50U2VsZWN0ZWREYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJyk7XG4gICAgdG90YWxNaW51dGVEYXRhID0ge1xuICAgICAgICBcInNsZWVwXCI6IDAsXG4gICAgICAgIFwid29ya1wiOiAwLFxuICAgICAgICBcInRyYXZlbFwiOiAwLFxuICAgICAgICBcInN0dWR5XCI6IDAsXG4gICAgICAgIFwiZWF0XCI6IDAsXG4gICAgICAgIFwiaG9iYnlcIjogMCxcbiAgICAgICAgXCJ3YXNoXCI6IDAsXG4gICAgICAgIFwicmVzdFwiOiAwLFxuICAgIH07XG4gICAgbW90aGVyZmlsZS5mb3JFYWNoKGZ1bmN0aW9uKHVzZXJEYXRlRXZlbnRzKSB7XG4gICAgICAgIGN1cnJlbnRTZWxlY3RlZERhdGVzLmZvckVhY2goZnVuY3Rpb24oZGF0ZU51bWJlcnNEaXNwbGF5ZWQpe1xuICAgICAgICAgICAgICAgIGlmICh1c2VyRGF0ZUV2ZW50cy5kYXRlID09PSBwYXJzZUludChkYXRlTnVtYmVyc0Rpc3BsYXllZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGF5JykpICYmXG4gICAgICAgICAgICAgICAgICAgIHVzZXJEYXRlRXZlbnRzLm1vbnRoID09PSBwYXJzZUludChkYXRlTnVtYmVyc0Rpc3BsYXllZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9udGgnKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgdXNlckRhdGVFdmVudHMueWVhciA9PT0gcGFyc2VJbnQoZGF0ZU51bWJlcnNEaXNwbGF5ZWQuZ2V0QXR0cmlidXRlKCdkYXRhLXllYXInKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG90YWxNaW51dGVEYXRhW3VzZXJEYXRlRXZlbnRzLmFjdGl2aXR5XSArPSB1c2VyRGF0ZUV2ZW50cy50b3RhbE1pbnV0ZXM7XG4gICAgICAgICAgICAgICAgICAgIGxldCBib3ggPSB1c2VyRGF0ZUV2ZW50cy5zdGFydFJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlKGJveCA+PSB1c2VyRGF0ZUV2ZW50cy5zdGFydFJlbGF0aXZlICYmIGJveCA8ICh1c2VyRGF0ZUV2ZW50cy5lbmRSZWxhdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJhbmFuYSA9IHVzZXJEYXRlRXZlbnRzWydkYXRlJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtdWZmaW4gPSBib3gudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJhbmFuYU11ZmZpbiA9IGJhbmFuYSArIG11ZmZpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmFuYW5hTXVmZmluKS5jbGFzc0xpc3QuYWRkKHVzZXJEYXRlRXZlbnRzLmFjdGl2aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn1cblxuZnVuY3Rpb24gbWFrZUNoYXJ0IChjYW52YXMsIHRvdGFsTWludXRlRGF0YSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHVkeVRvdGFsJykuaW5uZXJUZXh0ID0gdG90YWxNaW51dGVEYXRhWydzdHVkeSddKycgbWludXRlcyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsZWVwVG90YWwnKS5pbm5lclRleHQgPSB0b3RhbE1pbnV0ZURhdGFbJ3NsZWVwJ10rJyBtaW51dGVzJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FzaFRvdGFsJykuaW5uZXJUZXh0ID0gdG90YWxNaW51dGVEYXRhWyd3YXNoJ10rJyBtaW51dGVzJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhdmVsVG90YWwnKS5pbm5lclRleHQgPSB0b3RhbE1pbnV0ZURhdGFbJ3RyYXZlbCddKycgbWludXRlcyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvYmJ5VG90YWwnKS5pbm5lclRleHQgPSB0b3RhbE1pbnV0ZURhdGFbJ2hvYmJ5J10rJyBtaW51dGVzJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya1RvdGFsJykuaW5uZXJUZXh0ID0gdG90YWxNaW51dGVEYXRhWyd3b3JrJ10rJyBtaW51dGVzJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWF0VG90YWwnKS5pbm5lclRleHQgPSB0b3RhbE1pbnV0ZURhdGFbJ2VhdCddKycgbWludXRlcyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RUb3RhbCcpLmlubmVyVGV4dCA9IHRvdGFsTWludXRlRGF0YVsncmVzdCddKycgbWludXRlcyc7XG5cbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBsYWJlbHM6IFsnU3R1ZHknLCAnU2xlZXAnLCAnV2FzaCcsICdUcmF2ZWwnLCAnSG9iYnknLCAnV29yaycsICdFYXQnLCAnUmVzdCddLFxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICc3IERheSBBY3Rpdml0eSBUb3RhbHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFt0b3RhbE1pbnV0ZURhdGFbJ3N0dWR5J10sIHRvdGFsTWludXRlRGF0YVsnc2xlZXAnXSwgdG90YWxNaW51dGVEYXRhWyd3YXNoJ10sIHRvdGFsTWludXRlRGF0YVsndHJhdmVsJ10sIHRvdGFsTWludXRlRGF0YVsnaG9iYnknXSwgdG90YWxNaW51dGVEYXRhWyd3b3JrJ10sIHRvdGFsTWludXRlRGF0YVsnZWF0J10sIHRvdGFsTWludXRlRGF0YVsncmVzdCddXSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICAgICAgICAgICAgJ2hzbGEoMjQ1LCAxMDAlLCA1MCUsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hzbGEoMCwgMTAwJSwgNTAlLCAxKScsXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDgzLCAxMDUsIDQzLCAxKScsXG4gICAgICAgICAgICAgICAgICAgICdoc2xhKDMwMCwgMTAwJSwgNTAlLCAxKScsXG4gICAgICAgICAgICAgICAgICAgICdoc2xhKDUwLCAxMDAlLCA1MCUsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hzbGEoMTgwLCAxMDAlLCA1MCUsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hzbGEoMTI1LCAxMDAlLCA1MCUsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTI4LCAxMjgsIDEyOCwgMSknXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogW1xuICAgICAgICAgICAgICAgICAgICAnaHNsYSgyNDUsIDEwMCUsIDUwJSwgMSknLFxuICAgICAgICAgICAgICAgICAgICAnaHNsYSgwLCAxMDAlLCA1MCUsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoODMsIDEwNSwgNDMsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hzbGEoMzAwLCAxMDAlLCA1MCUsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hzbGEoNTAsIDEwMCUsIDUwJSwgMSknLFxuICAgICAgICAgICAgICAgICAgICAnaHNsYSgxODAsIDEwMCUsIDUwJSwgMSknLFxuICAgICAgICAgICAgICAgICAgICAnaHNsYSgxMjUsIDEwMCUsIDUwJSwgMSknLFxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjgsIDEyOCwgMTI4LCAxKSdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgIH0pO1xuXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==