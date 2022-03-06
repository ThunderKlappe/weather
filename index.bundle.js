/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/APIHandler.js":
/*!***************************!*\
  !*** ./src/APIHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherSearch": () => (/* binding */ weatherSearch)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);



function _getGeoCode(_x) {
  return _getGeoCode2.apply(this, arguments);
}

function _getGeoCode2() {
  _getGeoCode2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(location) {
    var response, place;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!/^[0-9]{5}$/.test(location)) {
              _context.next = 17;
              break;
            }

            _context.prev = 2;
            _context.next = 5;
            return fetch("http://api.openweathermap.org/geo/1.0/zip?zip=".concat(location, ",US&appid=07635fa17157cfd961af367e15eeb273"));

          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();

          case 8:
            place = _context.sent;
            return _context.abrupt("return", place);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);

          case 15:
            _context.next = 30;
            break;

          case 17:
            _context.prev = 17;
            _context.next = 20;
            return fetch("http://api.openweathermap.org/geo/1.0/direct?q=".concat(location, ",US&limit=1&appid=07635fa17157cfd961af367e15eeb273"));

          case 20:
            response = _context.sent;
            _context.next = 23;
            return response.json();

          case 23:
            place = _context.sent;
            return _context.abrupt("return", place[0]);

          case 27:
            _context.prev = 27;
            _context.t1 = _context["catch"](17);
            console.log(_context.t1);

          case 30:
            _context.next = 35;
            break;

          case 32:
            _context.prev = 32;
            _context.t2 = _context["catch"](0);
            console.log(_context.t2);

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 32], [2, 12], [17, 27]]);
  }));
  return _getGeoCode2.apply(this, arguments);
}

function weatherSearch(_x2) {
  return _weatherSearch.apply(this, arguments);
}

function _weatherSearch() {
  _weatherSearch = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(location) {
    var geoCode, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _getGeoCode(location);

          case 3:
            geoCode = _context2.sent;
            _context2.next = 6;
            return fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(geoCode.lat, "&lon=").concat(geoCode.lon, "&APPID=07635fa17157cfd961af367e15eeb273&units=imperial"), {
              mode: "cors"
            });

          case 6:
            response = _context2.sent;
            _context2.next = 9;
            return response.json();

          case 9:
            return _context2.abrupt("return", _context2.sent);

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", false);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return _weatherSearch.apply(this, arguments);
}



/***/ }),

/***/ "./src/BuildPage.js":
/*!**************************!*\
  !*** ./src/BuildPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuildPage": () => (/* binding */ BuildPage)
/* harmony export */ });
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMManip */ "./src/DOMManip.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _city_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./city.json */ "./src/city.json");
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventHandler */ "./src/EventHandler.js");




var BuildPage = function () {
  var buildStartingPage = function buildStartingPage() {
    var header = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "header", "", "Weather");
    var content = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "content");
    var homeContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "home-container", "starting");
    var webLogo = new Image();
    webLogo.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__;
    webLogo.setAttribute("id", "website-logo");
    var searchForm = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("form", "search-form");
    var searchInput = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("input", "search-input", "", "", {
      type: "text"
    }, {
      placeholder: "Enter a US city or zip code"
    });
    searchInput.setAttribute("required", "");
    var searchButton = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("button", "search-button", "", "Search");
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(searchForm, searchInput, searchButton);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(homeContainer, webLogo, searchForm);
    content.appendChild(homeContainer);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(document.body, header, content);
  };

  var makeLoading = function makeLoading() {
    var loadingContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "loading-container");
    var loadingIcon = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("i", "loading-icon", "fa-solid fa-sun");
    loadingContainer.appendChild(loadingIcon);
    document.body.appendChild(loadingContainer);
  };

  var removeLoading = function removeLoading() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#loading-container").remove();
  };

  var _clearSearchBar = function _clearSearchBar() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#search-input").value = "";
  };

  var _minimizeSearch = function _minimizeSearch() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#home-container").classList.add("minimized");

    _clearSearchBar();
  };

  var _clearContent = function _clearContent() {
    var content = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#content");

    if (content.childNodes.length > 1) {
      content.lastElementChild.remove();
    }
  };

  var _buildWeatherPage = function _buildWeatherPage() {
    var content = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#content");

    _clearContent();

    var weatherContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "weather-container", "starting");
    var cityName = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "city-name");
    var weatherDisplay = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "weather-display");
    var weatherDescriptionContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "weather-description-container");
    var weatherIconContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "weather-icon-container");
    var weatherIcon = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("img", "weather-icon");
    var weatherDescription = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "weather-description");
    var currentTempLabel = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "current-temp-label", "weather-info", "Current Temp: ");
    var currentTempDisplay = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("span", "current-temp", "weather-info");
    var feelsLikeLabel = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "feels-like-label", "weather-info", "Feels Like: ");
    var feelsLikeDisplay = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("span", "feels-like", "weather-info");
    var cloudCover = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "cloud-cover", "weather-info");
    var humidity = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "humidity", "weather-info");
    var tempScaleContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "temp-scale-container");
    var tempScaleToggle = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("button", "temp-scale-toggle", "farenheit");
    weatherIconContainer.appendChild(weatherIcon);
    currentTempLabel.appendChild(currentTempDisplay);
    feelsLikeLabel.appendChild(feelsLikeDisplay);
    tempScaleContainer.appendChild(tempScaleToggle);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(weatherDescriptionContainer, weatherIconContainer, weatherDescription);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(weatherDisplay, weatherDescriptionContainer, currentTempLabel, feelsLikeLabel, cloudCover, humidity, tempScaleContainer);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(weatherContainer, cityName, weatherDisplay);
    content.appendChild(weatherContainer);
  };

  var _getCity = function _getCity(weatherInfo) {
    var cityID = weatherInfo.id;

    for (var i = 0; i < _city_json__WEBPACK_IMPORTED_MODULE_2__.length; i++) {
      var city = _city_json__WEBPACK_IMPORTED_MODULE_2__[i];

      if (city.id == cityID) {
        return {
          name: city.name,
          state: city.state
        };
      }
    }
  };

  var _isNightTime = function _isNightTime(timeInfo) {
    var currentTime = Math.floor(new Date().getTime() / 1000);

    if (currentTime < timeInfo.susrise || currentTime > timeInfo.sunset) {
      return true;
    }

    return false;
  };

  var _formatIconContainer = function _formatIconContainer(weatherInfo) {
    var iconContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#weather-icon-container");
    var backgroundColor;
    _isNightTime({
      sunrise: weatherInfo.sys.sunrise,
      sunset: weatherInfo.sys.sunset
    }) ? backgroundColor = "#00101E" : backgroundColor = "#007EFF";
    var cloudCover = weatherInfo.clouds.all;
    iconContainer.style.backgroundColor = backgroundColor;
    iconContainer.firstElementChild.style.backdropFilter = "grayscale(".concat(cloudCover, "%)");
  };

  var _fillInWeatherData = function _fillInWeatherData(weatherInfo) {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#weather-icon").src = "http://openweathermap.org/img/wn/".concat(weatherInfo.weather[0].icon, "@4x.png");

    _formatIconContainer(weatherInfo);

    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#weather-description").textContent = weatherInfo.weather[0].description.toUpperCase();
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#current-temp").innerHTML = "".concat(weatherInfo.main.temp, "&deg;");
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#current-temp").setAttribute("data-temp", weatherInfo.main.temp);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#feels-like").innerHTML = "".concat(weatherInfo.main.feels_like, "&deg;");
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#feels-like").setAttribute("data-temp", weatherInfo.main.feels_like);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#cloud-cover").textContent = "Cloud Cover: ".concat(weatherInfo.clouds.all, "%");
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#humidity").textContent = "Humidity: ".concat(weatherInfo.main.humidity, "%");

    var cityInfo = _getCity(weatherInfo);

    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#city-name").textContent = "".concat(cityInfo.name, ", ").concat(cityInfo.state);
  };

  var displayWeather = function displayWeather(weatherInfo) {
    _minimizeSearch();

    _buildWeatherPage();

    _fillInWeatherData(weatherInfo);

    _EventHandler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.activateTempToggle();
  };

  var _toggleTempButton = function _toggleTempButton() {
    var tempScaleToggle = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#temp-scale-toggle");
    tempScaleToggle.classList.toggle("farenheit");
    tempScaleToggle.classList.toggle("celsius");
  };

  var toggleTemp = function toggleTemp(newTempInfo) {
    var currentTemp = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#current-temp");
    currentTemp.innerHTML = "".concat(newTempInfo.currentTemp, "&deg;");
    currentTemp.setAttribute("data-temp", newTempInfo.currentTemp);
    var feelsLike = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#feels-like");
    feelsLike.innerHTML = "".concat(newTempInfo.feelsLike, "&deg;");
    feelsLike.setAttribute("data-temp", newTempInfo.feelsLike);

    _toggleTempButton();
  };

  return {
    buildStartingPage: buildStartingPage,
    makeLoading: makeLoading,
    removeLoading: removeLoading,
    displayWeather: displayWeather,
    toggleTemp: toggleTemp
  };
}();

/***/ }),

/***/ "./src/DOMManip.js":
/*!*************************!*\
  !*** ./src/DOMManip.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMManip": () => (/* binding */ DOMManip)
/* harmony export */ });
var DOMManip = function () {
  //shorthand to get elements easier
  var getElement = function getElement(selector) {
    return document.querySelector(selector);
  };

  var getElements = function getElements(selector) {
    return document.querySelectorAll(selector);
  }; //shorthand to make a new element and add attributes to it


  var makeNewElement = function makeNewElement(type) {
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var HTMLClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var text = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    var newElem = document.createElement(type);

    if (id != "") {
      newElem.setAttribute("id", id);
    }

    if (HTMLClass != "") {
      newElem.setAttribute("class", HTMLClass);
    }

    newElem.textContent = text;

    for (var _len = arguments.length, attributes = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      attributes[_key - 4] = arguments[_key];
    }

    if (attributes.length > 0) {
      attributes.forEach(function (att) {
        return newElem.setAttribute(Object.keys(att)[0], att[Object.keys(att)]);
      });
    }

    return newElem;
  }; //adds all of the DOM elements to a parent


  var appendChildren = function appendChildren(parent) {
    for (var _len2 = arguments.length, children = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      children[_key2 - 1] = arguments[_key2];
    }

    children.forEach(function (child) {
      return parent.appendChild(child);
    });
  }; //inserts a DOM element after another element


  var insertAfter = function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }; //clears out all child nodes of an element, skips as many elements as requested


  var removeAllChildren = function removeAllChildren(element) {
    var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    for (var i = element.childNodes.length; i > skip; i--) {
      element.childNodes[i - 1].remove();
    }
  };

  return {
    getElement: getElement,
    getElements: getElements,
    makeNewElement: makeNewElement,
    appendChildren: appendChildren,
    insertAfter: insertAfter,
    removeAllChildren: removeAllChildren
  };
}();

/***/ }),

/***/ "./src/EventHandler.js":
/*!*****************************!*\
  !*** ./src/EventHandler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventHandler": () => (/* binding */ EventHandler)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMManip */ "./src/DOMManip.js");


var EventHandler = function () {
  var activateSearch = function activateSearch() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.getElement("#search-button").addEventListener("click", ___WEBPACK_IMPORTED_MODULE_0__.weatherFunctions.search);
  };

  var activateTempToggle = function activateTempToggle() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.getElement("#temp-scale-toggle").addEventListener("click", ___WEBPACK_IMPORTED_MODULE_0__.weatherFunctions.convertTemp);
  };

  return {
    activateSearch: activateSearch,
    activateTempToggle: activateTempToggle
  };
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherFunctions": () => (/* binding */ weatherFunctions)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _APIHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./APIHandler */ "./src/APIHandler.js");
/* harmony import */ var _BuildPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BuildPage */ "./src/BuildPage.js");
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EventHandler */ "./src/EventHandler.js");
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOMManip */ "./src/DOMManip.js");







var weatherFunctions = function () {
  var _markInvalid = function _markInvalid(elem) {
    elem.classList.add("invalid");
  };

  var _removeInvalid = function _removeInvalid(elem) {
    elem.classList.remove("invalid");
  };

  var _checkValidity = function _checkValidity() {
    var searchInput = _DOMManip__WEBPACK_IMPORTED_MODULE_6__.DOMManip.getElement("#search-input");
    searchInput.setCustomValidity("");

    if (searchInput.value == "") {
      searchInput.setCustomValidity("Please enter your a US City or Zip Code");
      searchInput.reportValidity();

      _markInvalid(searchInput);

      return false;
    }

    _removeInvalid(searchInput);

    return true;
  };

  function search(_x) {
    return _search.apply(this, arguments);
  }

  function _search() {
    _search = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var searchTerm, searchResults;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (!_checkValidity()) {
                _context.next = 16;
                break;
              }

              _context.prev = 2;
              searchTerm = _DOMManip__WEBPACK_IMPORTED_MODULE_6__.DOMManip.getElement("#search-input").value;
              _BuildPage__WEBPACK_IMPORTED_MODULE_4__.BuildPage.makeLoading();
              _context.next = 7;
              return (0,_APIHandler__WEBPACK_IMPORTED_MODULE_3__.weatherSearch)(searchTerm);

            case 7:
              searchResults = _context.sent;
              _context.next = 10;
              return _BuildPage__WEBPACK_IMPORTED_MODULE_4__.BuildPage.removeLoading();

            case 10:
              if (searchResults) {
                _BuildPage__WEBPACK_IMPORTED_MODULE_4__.BuildPage.displayWeather(searchResults);
              } else {
                console.log("Couldn't find it");
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 13]]);
    }));
    return _search.apply(this, arguments);
  }

  var _convertToCelsius = function _convertToCelsius(fTemp) {
    return Math.round((fTemp - 32) * (5 / 9) * 100) / 100;
  };

  var _convertToFarenheit = function _convertToFarenheit(cTemp) {
    return Math.round((cTemp * (9 / 5) + 32) * 100) / 100;
  };

  var convertTemp = function convertTemp() {
    var currentTemp = _DOMManip__WEBPACK_IMPORTED_MODULE_6__.DOMManip.getElement("#current-temp").dataset.temp;
    var feelsLike = _DOMManip__WEBPACK_IMPORTED_MODULE_6__.DOMManip.getElement("#feels-like").dataset.temp;

    if (_DOMManip__WEBPACK_IMPORTED_MODULE_6__.DOMManip.getElement("#temp-scale-toggle").classList.contains("farenheit")) {
      _BuildPage__WEBPACK_IMPORTED_MODULE_4__.BuildPage.toggleTemp({
        currentTemp: _convertToCelsius(currentTemp),
        feelsLike: _convertToCelsius(feelsLike)
      });
    } else {
      _BuildPage__WEBPACK_IMPORTED_MODULE_4__.BuildPage.toggleTemp({
        currentTemp: _convertToFarenheit(currentTemp),
        feelsLike: _convertToFarenheit(feelsLike)
      });
    }
  };

  return {
    search: search,
    convertTemp: convertTemp
  };
}();

var initPage = function () {
  _BuildPage__WEBPACK_IMPORTED_MODULE_4__.BuildPage.buildStartingPage();
  _EventHandler__WEBPACK_IMPORTED_MODULE_5__.EventHandler.activateSearch();
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #effffd;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #1f1f1f;\n}\n\n#header {\n    height: 72px;\n    background-color: #42c2ff;\n    color: #effffd;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: -webkit-fill-available;\n    background-color: inherit;\n    min-height: inherit;\n}\n\n#home-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 310px;\n    width: 50vw;\n    z-index: 2;\n    transition: 1s;\n    position: fixed;\n    top: 0;\n    right: 0;\n    padding: 200px 25% 0px 0px;\n}\n#home-container.minimized {\n    padding: 0px 15px;\n    width: 250px;\n}\n#home-container.minimized #search-input {\n    font-size: 12px;\n}\n#home-container.minimized #search-button {\n    font-size: 12px;\n    padding: 1px;\n    width: 55px;\n}\n\n#website-logo {\n    width: 100%;\n}\n#search-form {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    max-width: 415px;\n    align-items: center;\n    gap: 5px;\n    top: -150px;\n    right: 0;\n}\n\n#search-input {\n    font-size: 28px;\n    width: 100%;\n}\n#search-input.invalid {\n    background-color: #ffacac;\n    border: 2px solid #ff6464;\n}\n#search-button {\n    background-color: #85f4ff;\n    color: #1f1f1f;\n    font-size: 18px;\n    border-radius: 30px;\n    border: 2px solid #42c2ff;\n    padding: 4px 10px;\n    width: 100px;\n}\nbutton:hover {\n    filter: brightness(80%);\n}\nbutton:active {\n    filter: brightness(60%);\n}\n\n#loading-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 40%;\n    left: 50%;\n    background-color: #85f4ff;\n    height: 125px;\n    width: 125px;\n    border: 2px solid #1f1f1f;\n    border-radius: 30px;\n    z-index: 3;\n}\n#loading-icon {\n    font-size: 100px;\n    color: #ffd205;\n    animation: load-anim 2s ease-in-out 0s infinite;\n}\n\n#weather-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: inherit;\n    min-height: inherit;\n    width: 75%;\n    position: fixed;\n    transition: 0.3s ease-out;\n}\n\n#city-name {\n    margin-top: 225px;\n    font-size: 60px;\n    color: #1f1f1f;\n}\n#weather-display {\n    display: flex;\n    flex-direction: column;\n    border-radius: 30px;\n    border: 2px solid #1f1f1f;\n    background-color: #fafafa;\n    padding: 35px 50px 35px 50px;\n    gap: 15px;\n    height: 525px;\n    width: inherit;\n}\n#weather-description-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 50px;\n    margin-bottom: 15px;\n}\n#weather-icon-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 15px;\n    border: 2px solid #1f1f1f;\n    height: 175px;\n    width: 175px;\n}\n#weather-icon {\n    filter: drop-shadow(2px 0px 0 black) drop-shadow(0px 2px 0 black) drop-shadow(-2px -0px 0 black)\n        drop-shadow(-0px -2px 0 black);\n    width: 200px;\n    height: 200px;\n}\n#weather-description {\n    font-size: 40px;\n}\n.weather-info {\n    font-size: 30px;\n}\n#temp-scale-container {\n    display: flex;\n    flex: 1;\n    justify-content: flex-end;\n    align-items: flex-end;\n}\n\n#temp-scale-toggle {\n    font-size: 30px;\n    height: 50px;\n    width: 50px;\n    border-radius: 50px;\n    text-align: center;\n    padding: 5px;\n}\n.farenheit {\n    background-color: #f7c3c3;\n    color: #521212;\n    border: 2px solid #521212;\n}\n.farenheit::before {\n    content: \"F\";\n}\n.celsius {\n    background-color: #c3dbf7;\n    color: #123052;\n    border: 2px solid #123052;\n}\n.celsius::before {\n    content: \"C\";\n}\n\n@keyframes load-anim {\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,4DAA4D;IAC5D,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,WAAW;IACX,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,WAAW;IACX,UAAU;IACV,cAAc;IACd,eAAe;IACf,MAAM;IACN,QAAQ;IACR,0BAA0B;AAC9B;AACA;IACI,iBAAiB;IACjB,YAAY;AAChB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;IACf,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,WAAW;AACf;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,gBAAgB;IAChB,mBAAmB;IACnB,QAAQ;IACR,WAAW;IACX,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf,WAAW;AACf;AACA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,mBAAmB;IACnB,yBAAyB;IACzB,iBAAiB;IACjB,YAAY;AAChB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,yBAAyB;IACzB,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,UAAU;AACd;AACA;IACI,gBAAgB;IAChB,cAAc;IACd,+CAA+C;AACnD;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,UAAU;IACV,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,cAAc;AAClB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB;IACzB,yBAAyB;IACzB,4BAA4B;IAC5B,SAAS;IACT,aAAa;IACb,cAAc;AAClB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;IACzB,aAAa;IACb,YAAY;AAChB;AACA;IACI;sCACkC;IAClC,YAAY;IACZ,aAAa;AACjB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,OAAO;IACP,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,yBAAyB;IACzB,cAAc;IACd,yBAAyB;AAC7B;AACA;IACI,YAAY;AAChB;AACA;IACI,yBAAyB;IACzB,cAAc;IACd,yBAAyB;AAC7B;AACA;IACI,YAAY;AAChB;;AAEA;IACI;QACI,uBAAuB;IAC3B;IACA;QACI,yBAAyB;IAC7B;AACJ","sourcesContent":["body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #effffd;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #1f1f1f;\n}\n\n#header {\n    height: 72px;\n    background-color: #42c2ff;\n    color: #effffd;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: -webkit-fill-available;\n    background-color: inherit;\n    min-height: inherit;\n}\n\n#home-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 310px;\n    width: 50vw;\n    z-index: 2;\n    transition: 1s;\n    position: fixed;\n    top: 0;\n    right: 0;\n    padding: 200px 25% 0px 0px;\n}\n#home-container.minimized {\n    padding: 0px 15px;\n    width: 250px;\n}\n#home-container.minimized #search-input {\n    font-size: 12px;\n}\n#home-container.minimized #search-button {\n    font-size: 12px;\n    padding: 1px;\n    width: 55px;\n}\n\n#website-logo {\n    width: 100%;\n}\n#search-form {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    max-width: 415px;\n    align-items: center;\n    gap: 5px;\n    top: -150px;\n    right: 0;\n}\n\n#search-input {\n    font-size: 28px;\n    width: 100%;\n}\n#search-input.invalid {\n    background-color: #ffacac;\n    border: 2px solid #ff6464;\n}\n#search-button {\n    background-color: #85f4ff;\n    color: #1f1f1f;\n    font-size: 18px;\n    border-radius: 30px;\n    border: 2px solid #42c2ff;\n    padding: 4px 10px;\n    width: 100px;\n}\nbutton:hover {\n    filter: brightness(80%);\n}\nbutton:active {\n    filter: brightness(60%);\n}\n\n#loading-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 40%;\n    left: 50%;\n    background-color: #85f4ff;\n    height: 125px;\n    width: 125px;\n    border: 2px solid #1f1f1f;\n    border-radius: 30px;\n    z-index: 3;\n}\n#loading-icon {\n    font-size: 100px;\n    color: #ffd205;\n    animation: load-anim 2s ease-in-out 0s infinite;\n}\n\n#weather-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: inherit;\n    min-height: inherit;\n    width: 75%;\n    position: fixed;\n    transition: 0.3s ease-out;\n}\n\n#city-name {\n    margin-top: 225px;\n    font-size: 60px;\n    color: #1f1f1f;\n}\n#weather-display {\n    display: flex;\n    flex-direction: column;\n    border-radius: 30px;\n    border: 2px solid #1f1f1f;\n    background-color: #fafafa;\n    padding: 35px 50px 35px 50px;\n    gap: 15px;\n    height: 525px;\n    width: inherit;\n}\n#weather-description-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 50px;\n    margin-bottom: 15px;\n}\n#weather-icon-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 15px;\n    border: 2px solid #1f1f1f;\n    height: 175px;\n    width: 175px;\n}\n#weather-icon {\n    filter: drop-shadow(2px 0px 0 black) drop-shadow(0px 2px 0 black) drop-shadow(-2px -0px 0 black)\n        drop-shadow(-0px -2px 0 black);\n    width: 200px;\n    height: 200px;\n}\n#weather-description {\n    font-size: 40px;\n}\n.weather-info {\n    font-size: 30px;\n}\n#temp-scale-container {\n    display: flex;\n    flex: 1;\n    justify-content: flex-end;\n    align-items: flex-end;\n}\n\n#temp-scale-toggle {\n    font-size: 30px;\n    height: 50px;\n    width: 50px;\n    border-radius: 50px;\n    text-align: center;\n    padding: 5px;\n}\n.farenheit {\n    background-color: #f7c3c3;\n    color: #521212;\n    border: 2px solid #521212;\n}\n.farenheit::before {\n    content: \"F\";\n}\n.celsius {\n    background-color: #c3dbf7;\n    color: #123052;\n    border: 2px solid #123052;\n}\n.celsius::before {\n    content: \"C\";\n}\n\n@keyframes load-anim {\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "152e49aa23e72f9aa0ed.png";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./src/city.json":
/*!***********************!*\
  !*** ./src/city.json ***!
  \***********************/
/***/ ((module) => {

"use strict";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixNQUFNO0FBQ04sZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFD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QUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9BUElIYW5kbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvQnVpbGRQYWdlLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvRE9NTWFuaXAuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9FdmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImFzeW5jIGZ1bmN0aW9uIF9nZXRHZW9Db2RlKGxvY2F0aW9uKSB7XG4gICAgbGV0IHJlc3BvbnNlO1xuICAgIGxldCBwbGFjZTtcbiAgICB0cnkge1xuICAgICAgICBpZiAoL15bMC05XXs1fSQvLnRlc3QobG9jYXRpb24pKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICAgICAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL3ppcD96aXA9JHtsb2NhdGlvbn0sVVMmYXBwaWQ9MDc2MzVmYTE3MTU3Y2ZkOTYxYWYzNjdlMTVlZWIyNzNgXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBwbGFjZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxhY2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgICAgICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9ufSxVUyZsaW1pdD0xJmFwcGlkPTA3NjM1ZmExNzE1N2NmZDk2MWFmMzY3ZTE1ZWViMjczYFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcGxhY2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsYWNlWzBdO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gd2VhdGhlclNlYXJjaChsb2NhdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCBnZW9Db2RlID0gYXdhaXQgX2dldEdlb0NvZGUobG9jYXRpb24pO1xuXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2dlb0NvZGUubGF0fSZsb249JHtnZW9Db2RlLmxvbn0mQVBQSUQ9MDc2MzVmYTE3MTU3Y2ZkOTYxYWYzNjdlMTVlZWIyNzMmdW5pdHM9aW1wZXJpYWxgLFxuICAgICAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IHdlYXRoZXJTZWFyY2ggfTtcbiIsImltcG9ydCB7IERPTU1hbmlwIH0gZnJvbSBcIi4vRE9NTWFuaXBcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuaW1wb3J0IGNpdHlEYXRhIGZyb20gXCIuL2NpdHkuanNvblwiO1xuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vRXZlbnRIYW5kbGVyXCI7XG5cbmV4cG9ydCBjb25zdCBCdWlsZFBhZ2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGJ1aWxkU3RhcnRpbmdQYWdlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImhlYWRlclwiLCBcIlwiLCBcIldlYXRoZXJcIik7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImNvbnRlbnRcIik7XG4gICAgICAgIGNvbnN0IGhvbWVDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImhvbWUtY29udGFpbmVyXCIsIFwic3RhcnRpbmdcIik7XG5cbiAgICAgICAgY29uc3Qgd2ViTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB3ZWJMb2dvLnNyYyA9IGxvZ287XG4gICAgICAgIHdlYkxvZ28uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWJzaXRlLWxvZ29cIik7XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoRm9ybSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZm9ybVwiLCBcInNlYXJjaC1mb3JtXCIpO1xuICAgICAgICBjb25zdCBzZWFyY2hJbnB1dCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICAgXCJzZWFyY2gtaW5wdXRcIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgeyBwbGFjZWhvbGRlcjogXCJFbnRlciBhIFVTIGNpdHkgb3IgemlwIGNvZGVcIiB9XG4gICAgICAgICk7XG4gICAgICAgIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgICAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcInNlYXJjaC1idXR0b25cIiwgXCJcIiwgXCJTZWFyY2hcIik7XG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKHNlYXJjaEZvcm0sIHNlYXJjaElucHV0LCBzZWFyY2hCdXR0b24pO1xuXG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGhvbWVDb250YWluZXIsIHdlYkxvZ28sIHNlYXJjaEZvcm0pO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVDb250YWluZXIpO1xuXG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGRvY3VtZW50LmJvZHksIGhlYWRlciwgY29udGVudCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VMb2FkaW5nID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2FkaW5nQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJsb2FkaW5nLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgbG9hZGluZ0ljb24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImlcIiwgXCJsb2FkaW5nLWljb25cIiwgXCJmYS1zb2xpZCBmYS1zdW5cIik7XG4gICAgICAgIGxvYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZGluZ0ljb24pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvYWRpbmdDb250YWluZXIpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlTG9hZGluZyA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNsb2FkaW5nLWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcbiAgICB9O1xuICAgIGNvbnN0IF9jbGVhclNlYXJjaEJhciA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzZWFyY2gtaW5wdXRcIikudmFsdWUgPSBcIlwiO1xuICAgIH07XG4gICAgY29uc3QgX21pbmltaXplU2VhcmNoID0gKCkgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI2hvbWUtY29udGFpbmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJtaW5pbWl6ZWRcIik7XG4gICAgICAgIF9jbGVhclNlYXJjaEJhcigpO1xuICAgIH07XG5cbiAgICBjb25zdCBfY2xlYXJDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjb250ZW50XCIpO1xuICAgICAgICBpZiAoY29udGVudC5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnRlbnQubGFzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgX2J1aWxkV2VhdGhlclBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI2NvbnRlbnRcIik7XG4gICAgICAgIF9jbGVhckNvbnRlbnQoKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwid2VhdGhlci1jb250YWluZXJcIiwgXCJzdGFydGluZ1wiKTtcbiAgICAgICAgY29uc3QgY2l0eU5hbWUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImNpdHktbmFtZVwiKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRpc3BsYXkgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIndlYXRoZXItZGlzcGxheVwiKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ3ZWF0aGVyLWRlc2NyaXB0aW9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckljb25Db250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIndlYXRoZXItaWNvbi1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJJY29uID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJpbWdcIiwgXCJ3ZWF0aGVyLWljb25cIik7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwid2VhdGhlci1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgY29uc3QgY3VycmVudFRlbXBMYWJlbCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFwiY3VycmVudC10ZW1wLWxhYmVsXCIsXG4gICAgICAgICAgICBcIndlYXRoZXItaW5mb1wiLFxuICAgICAgICAgICAgXCJDdXJyZW50IFRlbXA6IFwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZW1wRGlzcGxheSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwic3BhblwiLCBcImN1cnJlbnQtdGVtcFwiLCBcIndlYXRoZXItaW5mb1wiKTtcbiAgICAgICAgY29uc3QgZmVlbHNMaWtlTGFiZWwgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBcImZlZWxzLWxpa2UtbGFiZWxcIixcbiAgICAgICAgICAgIFwid2VhdGhlci1pbmZvXCIsXG4gICAgICAgICAgICBcIkZlZWxzIExpa2U6IFwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGZlZWxzTGlrZURpc3BsYXkgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcInNwYW5cIiwgXCJmZWVscy1saWtlXCIsIFwid2VhdGhlci1pbmZvXCIpO1xuICAgICAgICBjb25zdCBjbG91ZENvdmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjbG91ZC1jb3ZlclwiLCBcIndlYXRoZXItaW5mb1wiKTtcbiAgICAgICAgY29uc3QgaHVtaWRpdHkgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImh1bWlkaXR5XCIsIFwid2VhdGhlci1pbmZvXCIpO1xuICAgICAgICBjb25zdCB0ZW1wU2NhbGVDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInRlbXAtc2NhbGUtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCB0ZW1wU2NhbGVUb2dnbGUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcInRlbXAtc2NhbGUtdG9nZ2xlXCIsIFwiZmFyZW5oZWl0XCIpO1xuICAgICAgICB3ZWF0aGVySWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XG4gICAgICAgIGN1cnJlbnRUZW1wTGFiZWwuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXBEaXNwbGF5KTtcbiAgICAgICAgZmVlbHNMaWtlTGFiZWwuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlRGlzcGxheSk7XG4gICAgICAgIHRlbXBTY2FsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wU2NhbGVUb2dnbGUpO1xuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbih3ZWF0aGVyRGVzY3JpcHRpb25Db250YWluZXIsIHdlYXRoZXJJY29uQ29udGFpbmVyLCB3ZWF0aGVyRGVzY3JpcHRpb24pO1xuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihcbiAgICAgICAgICAgIHdlYXRoZXJEaXNwbGF5LFxuICAgICAgICAgICAgd2VhdGhlckRlc2NyaXB0aW9uQ29udGFpbmVyLFxuICAgICAgICAgICAgY3VycmVudFRlbXBMYWJlbCxcbiAgICAgICAgICAgIGZlZWxzTGlrZUxhYmVsLFxuICAgICAgICAgICAgY2xvdWRDb3ZlcixcbiAgICAgICAgICAgIGh1bWlkaXR5LFxuICAgICAgICAgICAgdGVtcFNjYWxlQ29udGFpbmVyXG4gICAgICAgICk7XG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKHdlYXRoZXJDb250YWluZXIsIGNpdHlOYW1lLCB3ZWF0aGVyRGlzcGxheSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VhdGhlckNvbnRhaW5lcik7XG4gICAgfTtcbiAgICBjb25zdCBfZ2V0Q2l0eSA9IHdlYXRoZXJJbmZvID0+IHtcbiAgICAgICAgY29uc3QgY2l0eUlEID0gd2VhdGhlckluZm8uaWQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2l0eURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaXR5ID0gY2l0eURhdGFbaV07XG4gICAgICAgICAgICBpZiAoY2l0eS5pZCA9PSBjaXR5SUQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiBjaXR5Lm5hbWUsIHN0YXRlOiBjaXR5LnN0YXRlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IF9pc05pZ2h0VGltZSA9IHRpbWVJbmZvID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgICAgIGlmIChjdXJyZW50VGltZSA8IHRpbWVJbmZvLnN1c3Jpc2UgfHwgY3VycmVudFRpbWUgPiB0aW1lSW5mby5zdW5zZXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIGNvbnN0IF9mb3JtYXRJY29uQ29udGFpbmVyID0gd2VhdGhlckluZm8gPT4ge1xuICAgICAgICBjb25zdCBpY29uQ29udGFpbmVyID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiN3ZWF0aGVyLWljb24tY29udGFpbmVyXCIpO1xuICAgICAgICBsZXQgYmFja2dyb3VuZENvbG9yO1xuICAgICAgICBfaXNOaWdodFRpbWUoeyBzdW5yaXNlOiB3ZWF0aGVySW5mby5zeXMuc3VucmlzZSwgc3Vuc2V0OiB3ZWF0aGVySW5mby5zeXMuc3Vuc2V0IH0pXG4gICAgICAgICAgICA/IChiYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDEwMUVcIilcbiAgICAgICAgICAgIDogKGJhY2tncm91bmRDb2xvciA9IFwiIzAwN0VGRlwiKTtcbiAgICAgICAgY29uc3QgY2xvdWRDb3ZlciA9IHdlYXRoZXJJbmZvLmNsb3Vkcy5hbGw7XG4gICAgICAgIGljb25Db250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xuICAgICAgICBpY29uQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gYGdyYXlzY2FsZSgke2Nsb3VkQ292ZXJ9JSlgO1xuICAgIH07XG4gICAgY29uc3QgX2ZpbGxJbldlYXRoZXJEYXRhID0gd2VhdGhlckluZm8gPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFxuICAgICAgICAgICAgXCIjd2VhdGhlci1pY29uXCJcbiAgICAgICAgKS5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVySW5mby53ZWF0aGVyWzBdLmljb259QDR4LnBuZ2A7XG4gICAgICAgIF9mb3JtYXRJY29uQ29udGFpbmVyKHdlYXRoZXJJbmZvKTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiN3ZWF0aGVyLWRlc2NyaXB0aW9uXCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIHdlYXRoZXJJbmZvLndlYXRoZXJbMF0uZGVzY3JpcHRpb24udG9VcHBlckNhc2UoKTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjdXJyZW50LXRlbXBcIikuaW5uZXJIVE1MID0gYCR7d2VhdGhlckluZm8ubWFpbi50ZW1wfSZkZWc7YDtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjdXJyZW50LXRlbXBcIikuc2V0QXR0cmlidXRlKFwiZGF0YS10ZW1wXCIsIHdlYXRoZXJJbmZvLm1haW4udGVtcCk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjZmVlbHMtbGlrZVwiKS5pbm5lckhUTUwgPSBgJHt3ZWF0aGVySW5mby5tYWluLmZlZWxzX2xpa2V9JmRlZztgO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI2ZlZWxzLWxpa2VcIikuc2V0QXR0cmlidXRlKFwiZGF0YS10ZW1wXCIsIHdlYXRoZXJJbmZvLm1haW4uZmVlbHNfbGlrZSk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjY2xvdWQtY292ZXJcIikudGV4dENvbnRlbnQgPSBgQ2xvdWQgQ292ZXI6ICR7d2VhdGhlckluZm8uY2xvdWRzLmFsbH0lYDtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNodW1pZGl0eVwiKS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHt3ZWF0aGVySW5mby5tYWluLmh1bWlkaXR5fSVgO1xuICAgICAgICBjb25zdCBjaXR5SW5mbyA9IF9nZXRDaXR5KHdlYXRoZXJJbmZvKTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjaXR5LW5hbWVcIikudGV4dENvbnRlbnQgPSBgJHtjaXR5SW5mby5uYW1lfSwgJHtjaXR5SW5mby5zdGF0ZX1gO1xuICAgIH07XG4gICAgY29uc3QgZGlzcGxheVdlYXRoZXIgPSB3ZWF0aGVySW5mbyA9PiB7XG4gICAgICAgIF9taW5pbWl6ZVNlYXJjaCgpO1xuICAgICAgICBfYnVpbGRXZWF0aGVyUGFnZSgpO1xuICAgICAgICBfZmlsbEluV2VhdGhlckRhdGEod2VhdGhlckluZm8pO1xuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVUZW1wVG9nZ2xlKCk7XG4gICAgfTtcbiAgICBjb25zdCBfdG9nZ2xlVGVtcEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcFNjYWxlVG9nZ2xlID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiN0ZW1wLXNjYWxlLXRvZ2dsZVwiKTtcbiAgICAgICAgdGVtcFNjYWxlVG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoXCJmYXJlbmhlaXRcIik7XG4gICAgICAgIHRlbXBTY2FsZVRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKFwiY2Vsc2l1c1wiKTtcbiAgICB9O1xuICAgIGNvbnN0IHRvZ2dsZVRlbXAgPSBuZXdUZW1wSW5mbyA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjdXJyZW50LXRlbXBcIik7XG4gICAgICAgIGN1cnJlbnRUZW1wLmlubmVySFRNTCA9IGAke25ld1RlbXBJbmZvLmN1cnJlbnRUZW1wfSZkZWc7YDtcbiAgICAgICAgY3VycmVudFRlbXAuc2V0QXR0cmlidXRlKFwiZGF0YS10ZW1wXCIsIG5ld1RlbXBJbmZvLmN1cnJlbnRUZW1wKTtcbiAgICAgICAgY29uc3QgZmVlbHNMaWtlID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNmZWVscy1saWtlXCIpO1xuICAgICAgICBmZWVsc0xpa2UuaW5uZXJIVE1MID0gYCR7bmV3VGVtcEluZm8uZmVlbHNMaWtlfSZkZWc7YDtcbiAgICAgICAgZmVlbHNMaWtlLnNldEF0dHJpYnV0ZShcImRhdGEtdGVtcFwiLCBuZXdUZW1wSW5mby5mZWVsc0xpa2UpO1xuICAgICAgICBfdG9nZ2xlVGVtcEJ1dHRvbigpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBidWlsZFN0YXJ0aW5nUGFnZSwgbWFrZUxvYWRpbmcsIHJlbW92ZUxvYWRpbmcsIGRpc3BsYXlXZWF0aGVyLCB0b2dnbGVUZW1wIH07XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IERPTU1hbmlwID0gKCgpID0+IHtcbiAgICAvL3Nob3J0aGFuZCB0byBnZXQgZWxlbWVudHMgZWFzaWVyXG4gICAgY29uc3QgZ2V0RWxlbWVudCA9IHNlbGVjdG9yID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGNvbnN0IGdldEVsZW1lbnRzID0gc2VsZWN0b3IgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgICAvL3Nob3J0aGFuZCB0byBtYWtlIGEgbmV3IGVsZW1lbnQgYW5kIGFkZCBhdHRyaWJ1dGVzIHRvIGl0XG4gICAgY29uc3QgbWFrZU5ld0VsZW1lbnQgPSAodHlwZSwgaWQgPSBcIlwiLCBIVE1MQ2xhc3MgPSBcIlwiLCB0ZXh0ID0gXCJcIiwgLi4uYXR0cmlidXRlcykgPT4ge1xuICAgICAgICBjb25zdCBuZXdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgaWYgKGlkICE9IFwiXCIpIHtcbiAgICAgICAgICAgIG5ld0VsZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChIVE1MQ2xhc3MgIT0gXCJcIikge1xuICAgICAgICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBIVE1MQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICAgIG5ld0VsZW0udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBpZiAoYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0ID0+IG5ld0VsZW0uc2V0QXR0cmlidXRlKE9iamVjdC5rZXlzKGF0dClbMF0sIGF0dFtPYmplY3Qua2V5cyhhdHQpXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld0VsZW07XG4gICAgfTtcblxuICAgIC8vYWRkcyBhbGwgb2YgdGhlIERPTSBlbGVtZW50cyB0byBhIHBhcmVudFxuICAgIGNvbnN0IGFwcGVuZENoaWxkcmVuID0gKHBhcmVudCwgLi4uY2hpbGRyZW4pID0+IHtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgICB9O1xuXG4gICAgLy9pbnNlcnRzIGEgRE9NIGVsZW1lbnQgYWZ0ZXIgYW5vdGhlciBlbGVtZW50XG4gICAgY29uc3QgaW5zZXJ0QWZ0ZXIgPSAobmV3Tm9kZSwgZXhpc3RpbmdOb2RlKSA9PiB7XG4gICAgICAgIGV4aXN0aW5nTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCBleGlzdGluZ05vZGUubmV4dFNpYmxpbmcpO1xuICAgIH07XG5cbiAgICAvL2NsZWFycyBvdXQgYWxsIGNoaWxkIG5vZGVzIG9mIGFuIGVsZW1lbnQsIHNraXBzIGFzIG1hbnkgZWxlbWVudHMgYXMgcmVxdWVzdGVkXG4gICAgY29uc3QgcmVtb3ZlQWxsQ2hpbGRyZW4gPSAoZWxlbWVudCwgc2tpcCA9IDApID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkgPiBza2lwOyBpLS0pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1tpIC0gMV0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0RWxlbWVudCwgZ2V0RWxlbWVudHMsIG1ha2VOZXdFbGVtZW50LCBhcHBlbmRDaGlsZHJlbiwgaW5zZXJ0QWZ0ZXIsIHJlbW92ZUFsbENoaWxkcmVuIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgd2VhdGhlckZ1bmN0aW9ucyB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBET01NYW5pcCB9IGZyb20gXCIuL0RPTU1hbmlwXCI7XG5cbmV4cG9ydCBjb25zdCBFdmVudEhhbmRsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2YXRlU2VhcmNoID0gKCkgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI3NlYXJjaC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHdlYXRoZXJGdW5jdGlvbnMuc2VhcmNoKTtcbiAgICB9O1xuICAgIGNvbnN0IGFjdGl2YXRlVGVtcFRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiN0ZW1wLXNjYWxlLXRvZ2dsZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgd2VhdGhlckZ1bmN0aW9ucy5jb252ZXJ0VGVtcCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGFjdGl2YXRlU2VhcmNoLCBhY3RpdmF0ZVRlbXBUb2dnbGUgfTtcbn0pKCk7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgd2VhdGhlclNlYXJjaCB9IGZyb20gXCIuL0FQSUhhbmRsZXJcIjtcbmltcG9ydCB7IEJ1aWxkUGFnZSB9IGZyb20gXCIuL0J1aWxkUGFnZVwiO1xuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgeyBET01NYW5pcCB9IGZyb20gXCIuL0RPTU1hbmlwXCI7XG5cbmV4cG9ydCBjb25zdCB3ZWF0aGVyRnVuY3Rpb25zID0gKCgpID0+IHtcbiAgICBjb25zdCBfbWFya0ludmFsaWQgPSBlbGVtID0+IHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICB9O1xuICAgIGNvbnN0IF9yZW1vdmVJbnZhbGlkID0gZWxlbSA9PiB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRcIik7XG4gICAgfTtcbiAgICBjb25zdCBfY2hlY2tWYWxpZGl0eSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHNlYXJjaElucHV0ID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzZWFyY2gtaW5wdXRcIik7XG4gICAgICAgIHNlYXJjaElucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgICBpZiAoc2VhcmNoSW5wdXQudmFsdWUgPT0gXCJcIikge1xuICAgICAgICAgICAgc2VhcmNoSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJQbGVhc2UgZW50ZXIgeW91ciBhIFVTIENpdHkgb3IgWmlwIENvZGVcIik7XG4gICAgICAgICAgICBzZWFyY2hJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgX21hcmtJbnZhbGlkKHNlYXJjaElucHV0KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBfcmVtb3ZlSW52YWxpZChzZWFyY2hJbnB1dCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBhc3luYyBmdW5jdGlvbiBzZWFyY2goZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChfY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaFRlcm0gPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI3NlYXJjaC1pbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBCdWlsZFBhZ2UubWFrZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHRzID0gYXdhaXQgd2VhdGhlclNlYXJjaChzZWFyY2hUZXJtKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBCdWlsZFBhZ2UucmVtb3ZlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hSZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIEJ1aWxkUGFnZS5kaXNwbGF5V2VhdGhlcihzZWFyY2hSZXN1bHRzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvdWxkbid0IGZpbmQgaXRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBfY29udmVydFRvQ2Vsc2l1cyA9IGZUZW1wID0+IE1hdGgucm91bmQoKGZUZW1wIC0gMzIpICogKDUgLyA5KSAqIDEwMCkgLyAxMDA7XG4gICAgY29uc3QgX2NvbnZlcnRUb0ZhcmVuaGVpdCA9IGNUZW1wID0+IE1hdGgucm91bmQoKGNUZW1wICogKDkgLyA1KSArIDMyKSAqIDEwMCkgLyAxMDA7XG4gICAgY29uc3QgY29udmVydFRlbXAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjdXJyZW50LXRlbXBcIikuZGF0YXNldC50ZW1wO1xuICAgICAgICBjb25zdCBmZWVsc0xpa2UgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI2ZlZWxzLWxpa2VcIikuZGF0YXNldC50ZW1wO1xuICAgICAgICBpZiAoRE9NTWFuaXAuZ2V0RWxlbWVudChcIiN0ZW1wLXNjYWxlLXRvZ2dsZVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJmYXJlbmhlaXRcIikpIHtcbiAgICAgICAgICAgIEJ1aWxkUGFnZS50b2dnbGVUZW1wKHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGVtcDogX2NvbnZlcnRUb0NlbHNpdXMoY3VycmVudFRlbXApLFxuICAgICAgICAgICAgICAgIGZlZWxzTGlrZTogX2NvbnZlcnRUb0NlbHNpdXMoZmVlbHNMaWtlKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQnVpbGRQYWdlLnRvZ2dsZVRlbXAoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUZW1wOiBfY29udmVydFRvRmFyZW5oZWl0KGN1cnJlbnRUZW1wKSxcbiAgICAgICAgICAgICAgICBmZWVsc0xpa2U6IF9jb252ZXJ0VG9GYXJlbmhlaXQoZmVlbHNMaWtlKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7IHNlYXJjaCwgY29udmVydFRlbXAgfTtcbn0pKCk7XG5cbmNvbnN0IGluaXRQYWdlID0gKCgpID0+IHtcbiAgICBCdWlsZFBhZ2UuYnVpbGRTdGFydGluZ1BhZ2UoKTtcbiAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVTZWFyY2goKTtcbn0pKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmZmZkO1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjMWYxZjFmO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJjMmZmO1xcbiAgICBjb2xvcjogI2VmZmZmZDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuI2hvbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzEwcHg7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB0cmFuc2l0aW9uOiAxcztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBwYWRkaW5nOiAyMDBweCAyNSUgMHB4IDBweDtcXG59XFxuI2hvbWUtY29udGFpbmVyLm1pbmltaXplZCB7XFxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxufVxcbiNob21lLWNvbnRhaW5lci5taW5pbWl6ZWQgI3NlYXJjaC1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuI2hvbWUtY29udGFpbmVyLm1pbmltaXplZCAjc2VhcmNoLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICB3aWR0aDogNTVweDtcXG59XFxuXFxuI3dlYnNpdGUtbG9nbyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4jc2VhcmNoLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtd2lkdGg6IDQxNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgdG9wOiAtMTUwcHg7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG4jc2VhcmNoLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuI3NlYXJjaC1pbnB1dC5pbnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWNhYztcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmNjQ2NDtcXG59XFxuI3NlYXJjaC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODVmNGZmO1xcbiAgICBjb2xvcjogIzFmMWYxZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNDJjMmZmO1xcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXG59XFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg2MCUpO1xcbn1cXG5cXG4jbG9hZGluZy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODVmNGZmO1xcbiAgICBoZWlnaHQ6IDEyNXB4O1xcbiAgICB3aWR0aDogMTI1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxZjFmMWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcbiNsb2FkaW5nLWljb24ge1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbiAgICBjb2xvcjogI2ZmZDIwNTtcXG4gICAgYW5pbWF0aW9uOiBsb2FkLWFuaW0gMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGU7XFxufVxcblxcbiN3ZWF0aGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcXG59XFxuXFxuI2NpdHktbmFtZSB7XFxuICAgIG1hcmdpbi10b3A6IDIyNXB4O1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIGNvbG9yOiAjMWYxZjFmO1xcbn1cXG4jd2VhdGhlci1kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFmMWYxZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gICAgcGFkZGluZzogMzVweCA1MHB4IDM1cHggNTBweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDUyNXB4O1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG59XFxuI3dlYXRoZXItZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuI3dlYXRoZXItaWNvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFmMWYxZjtcXG4gICAgaGVpZ2h0OiAxNzVweDtcXG4gICAgd2lkdGg6IDE3NXB4O1xcbn1cXG4jd2VhdGhlci1pY29uIHtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMHB4IDAgYmxhY2spIGRyb3Atc2hhZG93KDBweCAycHggMCBibGFjaykgZHJvcC1zaGFkb3coLTJweCAtMHB4IDAgYmxhY2spXFxuICAgICAgICBkcm9wLXNoYWRvdygtMHB4IC0ycHggMCBibGFjayk7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG59XFxuI3dlYXRoZXItZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcbi53ZWF0aGVyLWluZm8ge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcbiN0ZW1wLXNjYWxlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuI3RlbXAtc2NhbGUtdG9nZ2xlIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuLmZhcmVuaGVpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2MzYzM7XFxuICAgIGNvbG9yOiAjNTIxMjEyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTIxMjEyO1xcbn1cXG4uZmFyZW5oZWl0OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiRlxcXCI7XFxufVxcbi5jZWxzaXVzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MzZGJmNztcXG4gICAgY29sb3I6ICMxMjMwNTI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxMjMwNTI7XFxufVxcbi5jZWxzaXVzOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiQ1xcXCI7XFxufVxcblxcbkBrZXlmcmFtZXMgbG9hZC1hbmltIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qiw0REFBNEQ7SUFDNUQsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLGVBQWU7SUFDZixNQUFNO0lBQ04sUUFBUTtJQUNSLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixXQUFXO0lBQ1gsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixTQUFTO0lBQ1QsYUFBYTtJQUNiLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFDQTtJQUNJO3NDQUNrQztJQUNsQyxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLE9BQU87SUFDUCx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmZmZmQ7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICMxZjFmMWY7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MmMyZmY7XFxuICAgIGNvbG9yOiAjZWZmZmZkO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4jaG9tZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMTBweDtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHRyYW5zaXRpb246IDFzO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHBhZGRpbmc6IDIwMHB4IDI1JSAwcHggMHB4O1xcbn1cXG4jaG9tZS1jb250YWluZXIubWluaW1pemVkIHtcXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG59XFxuI2hvbWUtY29udGFpbmVyLm1pbmltaXplZCAjc2VhcmNoLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4jaG9tZS1jb250YWluZXIubWluaW1pemVkICNzZWFyY2gtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxcHg7XFxuICAgIHdpZHRoOiA1NXB4O1xcbn1cXG5cXG4jd2Vic2l0ZS1sb2dvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbiNzZWFyY2gtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1heC13aWR0aDogNDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICB0b3A6IC0xNTBweDtcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbiNzZWFyY2gtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4jc2VhcmNoLWlucHV0LmludmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhY2FjO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmY2NDY0O1xcbn1cXG4jc2VhcmNoLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NWY0ZmY7XFxuICAgIGNvbG9yOiAjMWYxZjFmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0MmMyZmY7XFxuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcbn1cXG5idXR0b246YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDYwJSk7XFxufVxcblxcbiNsb2FkaW5nLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NWY0ZmY7XFxuICAgIGhlaWdodDogMTI1cHg7XFxuICAgIHdpZHRoOiAxMjVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFmMWYxZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuI2xvYWRpbmctaWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxuICAgIGNvbG9yOiAjZmZkMjA1O1xcbiAgICBhbmltYXRpb246IGxvYWQtYW5pbSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZTtcXG59XFxuXFxuI3dlYXRoZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG4jY2l0eS1uYW1lIHtcXG4gICAgbWFyZ2luLXRvcDogMjI1cHg7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgY29sb3I6ICMxZjFmMWY7XFxufVxcbiN3ZWF0aGVyLWRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMWYxZjFmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgICBwYWRkaW5nOiAzNXB4IDUwcHggMzVweCA1MHB4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGhlaWdodDogNTI1cHg7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbn1cXG4jd2VhdGhlci1kZXNjcmlwdGlvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4jd2VhdGhlci1pY29uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMWYxZjFmO1xcbiAgICBoZWlnaHQ6IDE3NXB4O1xcbiAgICB3aWR0aDogMTc1cHg7XFxufVxcbiN3ZWF0aGVyLWljb24ge1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAwcHggMCBibGFjaykgZHJvcC1zaGFkb3coMHB4IDJweCAwIGJsYWNrKSBkcm9wLXNoYWRvdygtMnB4IC0wcHggMCBibGFjaylcXG4gICAgICAgIGRyb3Atc2hhZG93KC0wcHggLTJweCAwIGJsYWNrKTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG4jd2VhdGhlci1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuLndlYXRoZXItaW5mbyB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuI3RlbXAtc2NhbGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4jdGVtcC1zY2FsZS10b2dnbGUge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG4uZmFyZW5oZWl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3YzNjMztcXG4gICAgY29sb3I6ICM1MjEyMTI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1MjEyMTI7XFxufVxcbi5mYXJlbmhlaXQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJGXFxcIjtcXG59XFxuLmNlbHNpdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNkYmY3O1xcbiAgICBjb2xvcjogIzEyMzA1MjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzEyMzA1MjtcXG59XFxuLmNlbHNpdXM6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJDXFxcIjtcXG59XFxuXFxuQGtleWZyYW1lcyBsb2FkLWFuaW0ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIl9nZXRHZW9Db2RlIiwibG9jYXRpb24iLCJ0ZXN0IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJwbGFjZSIsImNvbnNvbGUiLCJsb2ciLCJ3ZWF0aGVyU2VhcmNoIiwiZ2VvQ29kZSIsImxhdCIsImxvbiIsIm1vZGUiLCJET01NYW5pcCIsImxvZ28iLCJjaXR5RGF0YSIsIkV2ZW50SGFuZGxlciIsIkJ1aWxkUGFnZSIsImJ1aWxkU3RhcnRpbmdQYWdlIiwiaGVhZGVyIiwibWFrZU5ld0VsZW1lbnQiLCJjb250ZW50IiwiaG9tZUNvbnRhaW5lciIsIndlYkxvZ28iLCJJbWFnZSIsInNyYyIsInNldEF0dHJpYnV0ZSIsInNlYXJjaEZvcm0iLCJzZWFyY2hJbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInNlYXJjaEJ1dHRvbiIsImFwcGVuZENoaWxkcmVuIiwiYXBwZW5kQ2hpbGQiLCJkb2N1bWVudCIsImJvZHkiLCJtYWtlTG9hZGluZyIsImxvYWRpbmdDb250YWluZXIiLCJsb2FkaW5nSWNvbiIsInJlbW92ZUxvYWRpbmciLCJnZXRFbGVtZW50IiwicmVtb3ZlIiwiX2NsZWFyU2VhcmNoQmFyIiwidmFsdWUiLCJfbWluaW1pemVTZWFyY2giLCJjbGFzc0xpc3QiLCJhZGQiLCJfY2xlYXJDb250ZW50IiwiY2hpbGROb2RlcyIsImxlbmd0aCIsImxhc3RFbGVtZW50Q2hpbGQiLCJfYnVpbGRXZWF0aGVyUGFnZSIsIndlYXRoZXJDb250YWluZXIiLCJjaXR5TmFtZSIsIndlYXRoZXJEaXNwbGF5Iiwid2VhdGhlckRlc2NyaXB0aW9uQ29udGFpbmVyIiwid2VhdGhlckljb25Db250YWluZXIiLCJ3ZWF0aGVySWNvbiIsIndlYXRoZXJEZXNjcmlwdGlvbiIsImN1cnJlbnRUZW1wTGFiZWwiLCJjdXJyZW50VGVtcERpc3BsYXkiLCJmZWVsc0xpa2VMYWJlbCIsImZlZWxzTGlrZURpc3BsYXkiLCJjbG91ZENvdmVyIiwiaHVtaWRpdHkiLCJ0ZW1wU2NhbGVDb250YWluZXIiLCJ0ZW1wU2NhbGVUb2dnbGUiLCJfZ2V0Q2l0eSIsIndlYXRoZXJJbmZvIiwiY2l0eUlEIiwiaWQiLCJpIiwiY2l0eSIsIm5hbWUiLCJzdGF0ZSIsIl9pc05pZ2h0VGltZSIsInRpbWVJbmZvIiwiY3VycmVudFRpbWUiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwiZ2V0VGltZSIsInN1c3Jpc2UiLCJzdW5zZXQiLCJfZm9ybWF0SWNvbkNvbnRhaW5lciIsImljb25Db250YWluZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdW5yaXNlIiwic3lzIiwiY2xvdWRzIiwiYWxsIiwic3R5bGUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImJhY2tkcm9wRmlsdGVyIiwiX2ZpbGxJbldlYXRoZXJEYXRhIiwid2VhdGhlciIsImljb24iLCJ0ZXh0Q29udGVudCIsImRlc2NyaXB0aW9uIiwidG9VcHBlckNhc2UiLCJpbm5lckhUTUwiLCJtYWluIiwidGVtcCIsImZlZWxzX2xpa2UiLCJjaXR5SW5mbyIsImRpc3BsYXlXZWF0aGVyIiwiYWN0aXZhdGVUZW1wVG9nZ2xlIiwiX3RvZ2dsZVRlbXBCdXR0b24iLCJ0b2dnbGUiLCJ0b2dnbGVUZW1wIiwibmV3VGVtcEluZm8iLCJjdXJyZW50VGVtcCIsImZlZWxzTGlrZSIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIkhUTUxDbGFzcyIsInRleHQiLCJuZXdFbGVtIiwiY3JlYXRlRWxlbWVudCIsImF0dHJpYnV0ZXMiLCJmb3JFYWNoIiwiYXR0IiwiT2JqZWN0Iiwia2V5cyIsInBhcmVudCIsImNoaWxkcmVuIiwiY2hpbGQiLCJpbnNlcnRBZnRlciIsIm5ld05vZGUiLCJleGlzdGluZ05vZGUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJyZW1vdmVBbGxDaGlsZHJlbiIsImVsZW1lbnQiLCJza2lwIiwid2VhdGhlckZ1bmN0aW9ucyIsImFjdGl2YXRlU2VhcmNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlYXJjaCIsImNvbnZlcnRUZW1wIiwiX21hcmtJbnZhbGlkIiwiZWxlbSIsIl9yZW1vdmVJbnZhbGlkIiwiX2NoZWNrVmFsaWRpdHkiLCJzZXRDdXN0b21WYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VhcmNoVGVybSIsInNlYXJjaFJlc3VsdHMiLCJfY29udmVydFRvQ2Vsc2l1cyIsImZUZW1wIiwicm91bmQiLCJfY29udmVydFRvRmFyZW5oZWl0IiwiY1RlbXAiLCJkYXRhc2V0IiwiY29udGFpbnMiLCJpbml0UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=