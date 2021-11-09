/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/filter.js":
/*!***********************!*\
  !*** ./app/filter.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {\n  // Filter\n  var filter = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-filter]\");\n  filter.on(\"click\", function (event) {\n    event.preventDefault();\n    var cat = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(\"filter\");\n\n    if (cat == \"all\") {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-cat]\").removeClass(\"hide\");\n    } else {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-cat]\").each(function () {\n        var workCat = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(\"cat\");\n\n        if (workCat != cat) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass(\"hide\");\n        } else {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass(\"hide\");\n        }\n      });\n    }\n  });\n})());\n\n//# sourceURL=webpack:///./app/filter.js?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ \"../node_modules/slick-carousel/slick/slick.js\");\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ \"./app/filter.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ \"./app/modal.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider.js */ \"./app/slider.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav */ \"./app/nav.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme */ \"./app/theme.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/modal.js":
/*!**********************!*\
  !*** ./app/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {\n  // Modal\n  var modalCall = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-modal]\");\n  var modalClose = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-close]\");\n  var slider = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".modal-work__slider\");\n  modalCall.on(\"click\", function (event) {\n    event.preventDefault();\n    var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);\n    var modalId = $this.data(\"modal\");\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(modalId).addClass(\"show\");\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"body\").addClass(\"no-scroll\"); // Animation\n\n    setTimeout(function () {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(modalId).find(\".modal__dialog\").css({\n        transform: \"rotateX(0)\"\n      });\n    }, 200);\n    setTimeout(function () {\n      slider.slick(\"setPosition\");\n    }, 25);\n    slider.slick(\"setPosition\");\n  });\n  modalClose.on(\"click\", function (event) {\n    event.preventDefault();\n    var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);\n    var modalParent = $this.parents(\".modal\");\n    modalParent.find(\".modal__dialog\").css({\n      transform: \"rotateX(90deg)\"\n    }); // Animation\n\n    setTimeout(function () {\n      modalParent.removeClass(\"show\");\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"body\").removeClass(\"no-scroll\");\n    }, 200);\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".modal\").on(\"click\", function (event) {\n    event.stopPropagation();\n    var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);\n    $this.find(\".modal__dialog\").css({\n      transform: \"rotateX(90deg)\"\n    }); // Animation\n\n    setTimeout(function () {\n      $this.removeClass(\"show\");\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"body\").removeClass(\"no-scroll\");\n    }, 200);\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".modal__dialog\").on(\"click\", function (event) {\n    event.stopPropagation();\n  });\n})());\n\n//# sourceURL=webpack:///./app/modal.js?");

/***/ }),

/***/ "./app/nav.js":
/*!********************!*\
  !*** ./app/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {\n  var cursor = 0;\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".burger\").on(\"click\", onHandleMenu);\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".nav\").on(\"click\", onHandleMenu);\n\n  function onHandleMenu() {\n    var $burger = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".burger__inner\");\n    var $nav = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".nav\");\n    $burger.toggleClass(\"menu\");\n    $burger.toggleClass(\"close\");\n\n    switch (cursor) {\n      case 0:\n        $nav.removeClass(\"transition\");\n        $nav.toggleClass(\"left\");\n        cursor = 1;\n        return;\n\n      case 1:\n        $nav.toggleClass(\"left\");\n        $nav.toggleClass(\"right\");\n        cursor = 2;\n        return;\n\n      case 2:\n        $nav.toggleClass(\"right\");\n        $nav.toggleClass(\"left\");\n        cursor = 3;\n        return;\n\n      default:\n        $nav.addClass(\"transition\");\n        $nav.toggleClass(\"left\");\n        cursor = 0;\n    }\n  }\n})());\n\n//# sourceURL=webpack:///./app/nav.js?");

/***/ }),

/***/ "./app/slider.js":
/*!***********************!*\
  !*** ./app/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {\n  var slider = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".modal-work__slider\");\n  slider.on(\"click\", function (event) {\n    event.stopPropagation();\n  });\n  slider.slick({\n    infinite: true,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    fade: false,\n    arrows: false,\n    dots: true\n  });\n  var slickButtonBack = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#slick-slide-control00\");\n  var slickButtonNext = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#slick-slide-control01\");\n  slickButtonBack.on(\"click\", function () {\n    slickButtonBack.css({\n      backgroundColor: \"#fff\"\n    });\n    slickButtonNext.css({\n      backgroundColor: \"transparent\"\n    });\n  });\n  slickButtonNext.on(\"click\", function () {\n    slickButtonBack.css({\n      backgroundColor: \"transparent\"\n    });\n    slickButtonNext.css({\n      backgroundColor: \"#fff\"\n    });\n  });\n\n  window.onresize = function () {\n    slider.slick(\"setPosition\");\n  };\n})());\n\n//# sourceURL=webpack:///./app/slider.js?");

/***/ }),

/***/ "./app/theme.js":
/*!**********************!*\
  !*** ./app/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\nvar sun = \"<i class=\\\"fas fa-sun\\\" />\";\nvar moon = \"<i class=\\\"far fa-moon\\\" />\";\nvar storageName = 'theme-webpack-portfolio';\nvar initTheme = localStorage.getItem(storageName);\nvar theme = {\n  current: initTheme || \"light\"\n};\nvar $themeBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".header__theme-btn\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {\n  var getTheme = function getTheme() {\n    var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"light\";\n    return \"assets/theme/\".concat(theme, \".css\");\n  };\n\n  var template = function template() {\n    var _icons = {\n      dark: moon,\n      light: sun\n    };\n    return _icons[theme.current];\n  };\n\n  var $styleSheet = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[href=\\\"\".concat(getTheme(), \"\\\"]\"));\n  $themeBtn.on(\"click\", function () {\n    theme.current = theme.current === \"light\" ? \"dark\" : \"light\";\n    setTheme(template());\n  });\n\n  function setTheme(template) {\n    $styleSheet.attr(\"href\", getTheme(theme.current));\n    localStorage.setItem(storageName, theme.current);\n    $themeBtn.html(template);\n  }\n\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on(\"load\", function () {\n    setTheme(template());\n  });\n})());\n\n//# sourceURL=webpack:///./app/theme.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_slick-carousel_slick_slick_js"], () => (__webpack_require__("./app/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;