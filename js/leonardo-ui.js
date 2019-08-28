(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["leonardoui"] = factory();
	else
		root["leonardoui"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/leonardo-ui/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./leonardo-ui.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/dialog/dialog.js":
/*!*************************************!*\
  !*** ./components/dialog/dialog.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dialog; });
/* harmony import */ var _util_overlay_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/overlay-manager */ "./util/overlay-manager.js");
/* eslint-disable prefer-destructuring */

var ANIMATE_DELAY = 200;
function dialog(options) {
  var content = options.content,
      _options$closeOnEscap = options.closeOnEscape,
      closeOnEscape = _options$closeOnEscap === void 0 ? true : _options$closeOnEscap,
      _onClose = options.onClose;
  var oldOverflow = document.body.style.overflow;
  var element;
  var containerElement; // eslint-disable-line prefer-const

  var modalBackgroundElement; // eslint-disable-line prefer-const

  var overlay = Object(_util_overlay_manager__WEBPACK_IMPORTED_MODULE_0__["createOverlay"])({
    modal: true,
    close: function close(cb) {
      if (document.body.contains(containerElement)) {
        element.classList.add('lui-fade');
        modalBackgroundElement.classList.add('lui-fade');
      }

      setTimeout(function () {
        cb();
      }, ANIMATE_DELAY);
    },
    closeOnEscape: closeOnEscape,
    closeOnOutside: false,
    onClose: function onClose() {
      document.body.style.overflow = oldOverflow;

      if (typeof _onClose === 'function') {
        _onClose();
      }
    }
  });
  containerElement = overlay.element; // eslint-disable-line prefer-const

  containerElement.classList.add('lui-dialog-container');
  containerElement.setAttribute('role', 'dialog');
  containerElement.style.position = 'fixed';
  modalBackgroundElement = overlay.modalBackgroundElement;

  if (typeof content === 'string') {
    var tempContainerElem = document.createElement('div');
    tempContainerElem.innerHTML = content;
    element = tempContainerElem.firstElementChild;
  } else {
    element = content;
  }

  containerElement.appendChild(element);
  element.setAttribute('role', 'document');
  element.classList.add('lui-fade');
  modalBackgroundElement.classList.add('lui-fade');
  document.body.style.overflow = 'hidden';
  overlay.show();
  setTimeout(function () {
    element.classList.remove('lui-fade');
    modalBackgroundElement.classList.remove('lui-fade');
  }, 0);
  return {
    element: element,
    close: function close() {
      overlay.close();
    }
  };
}

/***/ }),

/***/ "./components/popover/popover.js":
/*!***************************************!*\
  !*** ./components/popover/popover.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return popover; });
/* harmony import */ var _util_positioner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/positioner */ "./util/positioner.js");
/* harmony import */ var _util_overlay_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/overlay-manager */ "./util/overlay-manager.js");


var ANIMATE_DELAY = 200;
var ELEM_OFFSET = 10;
var WINDOW_OFFSET = 10;
var EDGE_OFFSET = 10;
var currentId = 0;

var createArrowElement = function createArrowElement(posResult) {
  var elem = document.createElement('div');
  elem.classList.add('lui-popover__arrow');
  elem.classList.add("lui-popover__arrow--".concat(Object(_util_positioner__WEBPACK_IMPORTED_MODULE_0__["oppositeDock"])(posResult.dock)));

  if (posResult.dock === 'top' || posResult.dock === 'bottom') {
    elem.style.left = "".concat(posResult.toPosition.left - posResult.position.left, "px");
  } else {
    elem.style.top = "".concat(posResult.toPosition.top - posResult.position.top, "px");
  }

  return elem;
};

function popover() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$closeOnEscap = options.closeOnEscape,
      closeOnEscape = _options$closeOnEscap === void 0 ? true : _options$closeOnEscap,
      _options$dock = options.dock,
      dock = _options$dock === void 0 ? 'bottom' : _options$dock,
      alignTo = options.alignTo,
      content = options.content,
      _onClose = options.onClose;
  var containerElement;
  var element;
  var overlay = Object(_util_overlay_manager__WEBPACK_IMPORTED_MODULE_1__["createOverlay"])({
    modal: false,
    close: function close(cb) {
      if (document.body.contains(element)) {
        element.classList.add('lui-fade');
      }

      setTimeout(function () {
        cb();
      }, ANIMATE_DELAY);
    },
    closeOnEscape: closeOnEscape,
    closeOnOutside: true,
    onClose: function onClose() {
      if (typeof _onClose === 'function') {
        _onClose();
      }

      if (alignTo instanceof Element && document.body.contains(alignTo)) {
        alignTo.setAttribute('aria-expanded', 'false');
        alignTo.removeAttribute('aria-controls');
      }
    }
  });
  containerElement = overlay.element; // eslint-disable-line prefer-const

  if (typeof content === 'string') {
    var tempContainerElem = document.createElement('div');
    tempContainerElem.innerHTML = content;
    element = tempContainerElem.firstElementChild;
  } else {
    element = content;
  }

  containerElement.appendChild(element);
  var id = "lui-popover-".concat(++currentId);
  element.setAttribute('id', id);
  element.setAttribute('role', 'dialog');
  element.classList.add('lui-fade');
  var posResult;

  if (alignTo instanceof Element) {
    posResult = Object(_util_positioner__WEBPACK_IMPORTED_MODULE_0__["positionToElement"])(element, alignTo, dock, {
      offset: ELEM_OFFSET,
      minWindowOffset: WINDOW_OFFSET,
      minEdgeOffset: EDGE_OFFSET
    });
    alignTo.setAttribute('aria-controls', id);
    alignTo.setAttribute('aria-expanded', 'true');
  } else {
    posResult = Object(_util_positioner__WEBPACK_IMPORTED_MODULE_0__["positionToCoordinate"])(element, alignTo.top, alignTo.left, dock, {
      offset: ELEM_OFFSET,
      minWindowOffset: WINDOW_OFFSET,
      minEdgeOffset: EDGE_OFFSET
    });
  }

  containerElement.style.left = "".concat(posResult.position.left, "px");
  containerElement.style.top = "".concat(posResult.position.top, "px");
  containerElement.style.position = 'absolute';
  element.appendChild(createArrowElement(posResult));
  overlay.show();
  setTimeout(function () {
    element.classList.remove('lui-fade');
  }, 0);
  return {
    element: element,
    close: function close() {
      overlay.close();
    }
  };
}

/***/ }),

/***/ "./components/tabset/tabset.js":
/*!*************************************!*\
  !*** ./components/tabset/tabset.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tabset; });
function tabset() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var element = options.element;
  var tabs = []; // eslint-disable-line prefer-const

  var activate = function activate(index) {
    tabs.forEach(function (tab, i) {
      if (i === index) {
        tab.element.classList.add('lui-active');
        tab.contentElements.forEach(function (ce) {
          ce.style.display = tab.display; // eslint-disable-line no-param-reassign
        });
      } else {
        tab.element.classList.remove('lui-active');
        tab.contentElements.forEach(function (ce) {
          ce.style.display = 'none'; // eslint-disable-line no-param-reassign
        });
      }
    });
  };

  var close = function close() {
    tabs.forEach(function (tab) {
      return tab.element.removeEventListener('click', tab.listener);
    });
    tabs.splice(0, tabs.length - 1);
  };

  Array.prototype.slice.call(element.querySelectorAll('[data-tab-id]')).forEach(function (tabElement, index) {
    var id = tabElement.getAttribute('data-tab-id');
    var listener = tabElement.addEventListener('click', function ()
    /* event */
    {
      activate(index);
    });
    tabs.push({
      id: id,
      index: index,
      element: tabElement,
      contentElements: Array.prototype.slice.call(document.querySelectorAll("[data-tab-content=\"".concat(id, "\"]"))),
      display: tabElement.style.display,
      listener: listener
    });
  });
  activate(0);
  return {
    element: element,
    activate: activate,
    close: close
  };
}

/***/ }),

/***/ "./components/tooltip/tooltip.js":
/*!***************************************!*\
  !*** ./components/tooltip/tooltip.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tooltip; });
/* harmony import */ var _util_positioner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/positioner */ "./util/positioner.js");
/* harmony import */ var _util_overlay_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/overlay-manager */ "./util/overlay-manager.js");


var ANIMATE_DELAY = 50;
var ELEM_OFFSET = 10;
var WINDOW_OFFSET = 10;
var EDGE_OFFSET = 10;
var currentId = 0;

var createArrowElement = function createArrowElement(posResult) {
  var elem = document.createElement('div');
  elem.classList.add('lui-tooltip__arrow');
  elem.classList.add("lui-tooltip__arrow--".concat(Object(_util_positioner__WEBPACK_IMPORTED_MODULE_0__["oppositeDock"])(posResult.dock)));

  if (posResult.dock === 'top' || posResult.dock === 'bottom') {
    elem.style.left = "".concat(posResult.toPosition.left - posResult.position.left, "px");
  } else {
    elem.style.top = "".concat(posResult.toPosition.top - posResult.position.top, "px");
  }

  return elem;
};

function tooltip(options) {
  var alignTo = options.alignTo,
      dock = options.dock,
      content = options.content;
  var title;
  var element;
  var containerElement;

  if (typeof content === 'string') {
    var tempContainerElem = document.createElement('div');
    tempContainerElem.innerHTML = content;
    element = tempContainerElem.firstElementChild;
  } else if (content instanceof Element) {
    element = content;
  } else {
    title = alignTo.getAttribute('title');

    if (!title) {
      // Do not show if the title is empty
      return {
        element: null,
        close: function close() {}
      };
    }

    element = document.createElement('div');
    element.appendChild(document.createTextNode(title));
  }

  var id = "lui-tooltip-".concat(++currentId);
  var overlay = Object(_util_overlay_manager__WEBPACK_IMPORTED_MODULE_1__["createOverlay"])({
    closeOnOutside: false,
    close: function close(cb) {
      if (document.body.contains(element)) {
        element.classList.add('lui-fade');
      }

      setTimeout(function () {
        if (alignTo instanceof Element && document.body.contains(alignTo)) {
          if (title) {
            alignTo.setAttribute('title', title);
          }

          alignTo.removeAttribute('aria-describedby');
        }

        cb();
      }, ANIMATE_DELAY);
    }
  });
  containerElement = overlay.element; // eslint-disable-line prefer-const

  element.classList.add('lui-tooltip');
  element.classList.add('lui-fade');
  element.setAttribute('id', id);
  element.setAttribute('role', 'tooltip');
  containerElement.appendChild(element);
  var posResult;

  if (alignTo instanceof Element) {
    posResult = Object(_util_positioner__WEBPACK_IMPORTED_MODULE_0__["positionToElement"])(element, alignTo, dock, {
      offset: ELEM_OFFSET,
      minWindowOffset: WINDOW_OFFSET,
      minEdgeOffset: EDGE_OFFSET
    });
  } else {
    posResult = Object(_util_positioner__WEBPACK_IMPORTED_MODULE_0__["positionToCoordinate"])(element, alignTo.top, alignTo.left, dock, {
      offset: ELEM_OFFSET,
      minWindowOffset: WINDOW_OFFSET,
      minEdgeOffset: EDGE_OFFSET
    });
  }

  containerElement.style.left = "".concat(posResult.position.left, "px");
  containerElement.style.top = "".concat(posResult.position.top, "px");
  containerElement.style.position = 'absolute';
  element.appendChild(createArrowElement(posResult));

  if (title) {
    alignTo.setAttribute('title', '');
  }

  if (alignTo instanceof Element) {
    alignTo.setAttribute('aria-describedby', id);
  }

  overlay.show();
  setTimeout(function () {
    element.classList.remove('lui-fade');
  }, 0);
  return {
    element: element,
    close: function close() {
      overlay.close();
    }
  };
}

/***/ }),

/***/ "./leonardo-ui.js":
/*!************************!*\
  !*** ./leonardo-ui.js ***!
  \************************/
/*! exports provided: dialog, popover, tabset, tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dialog/dialog */ "./components/dialog/dialog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dialog", function() { return _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_popover_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/popover/popover */ "./components/popover/popover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popover", function() { return _components_popover_popover__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_tabset_tabset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tabset/tabset */ "./components/tabset/tabset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tabset", function() { return _components_tabset_tabset__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tooltip/tooltip */ "./components/tooltip/tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tooltip", function() { return _components_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _leonardo_ui_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leonardo-ui.less */ "./leonardo-ui.less");
/* harmony import */ var _leonardo_ui_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_leonardo_ui_less__WEBPACK_IMPORTED_MODULE_4__);



 // Import LESS




/***/ }),

/***/ "./leonardo-ui.less":
/*!**************************!*\
  !*** ./leonardo-ui.less ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/overlay-manager.js":
/*!*********************************!*\
  !*** ./util/overlay-manager.js ***!
  \*********************************/
/*! exports provided: removeOverlay, createOverlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeOverlay", function() { return removeOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOverlay", function() { return createOverlay; });
var ESCAPE_KEY = 27;
var stack = [];
var keyListener = null;

var addKeyListener = function addKeyListener() {
  keyListener = function keyListener(event) {
    if (event.keyCode === ESCAPE_KEY) {
      // Close the dialog on top of the stack
      for (var i = stack.length - 1; i >= 0; i--) {
        if (stack[i].closeOnEscape === false) {
          break;
        } else if (stack[i].closeOnEscape === true) {
          stack[i].close();
          break;
        }
      }
    }
  };

  window.addEventListener('keyup', keyListener);
};

function removeOverlay(overlay) {
  for (var i = 0; i < stack.length; i++) {
    if (overlay === stack[i]) {
      document.body.removeChild(overlay.element);
      stack.splice(i, 1);
      return;
    }
  }
}
function createOverlay() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!keyListener) {
    addKeyListener();
  }

  var element = document.createElement('div');
  element.style.visibility = 'hidden';
  document.body.appendChild(element);
  var _options$modal = options.modal,
      modal = _options$modal === void 0 ? false : _options$modal,
      onClose = options.onClose,
      close = options.close,
      _options$closeOnEscap = options.closeOnEscape,
      closeOnEscape = _options$closeOnEscap === void 0 ? false : _options$closeOnEscap,
      _options$closeOnOutsi = options.closeOnOutside,
      closeOnOutside = _options$closeOnOutsi === void 0 ? false : _options$closeOnOutsi;
  var overlay = {
    closeOnEscape: closeOnEscape,
    element: element,
    show: function show() {
      element.style.visibility = '';
    }
  };

  overlay.close = function () {
    close(function () {
      removeOverlay(overlay);

      if (typeof onClose === 'function') {
        onClose();
      }

      if (closeOnOutside) {
        document.removeEventListener('mousedown', overlay.onMouseDown);
        document.removeEventListener('touchstart', overlay.onTouchStart);
      }
    });
  };

  if (closeOnOutside) {
    overlay.onMouseDown = function (e) {
      if (!overlay.element.contains(e.target)) {
        overlay.close();
      }
    };

    overlay.onTouchStart = function (e) {
      if (overlay.element.contains(e.target)) {
        overlay.close();
      }
    };

    document.addEventListener('mousedown', overlay.onMouseDown);
    document.addEventListener('touchstart', overlay.onTouchStart);
  }

  stack.push(overlay);
  var res = {
    element: overlay.element,
    show: overlay.show,
    close: overlay.close
  };

  if (modal) {
    var overlayBGElem = document.createElement('div');
    overlayBGElem.classList.add('lui-modal-background');
    element.appendChild(overlayBGElem);
    res.modalBackgroundElement = overlayBGElem;
  } // Return the public API


  return res;
}

/***/ }),

/***/ "./util/positioner.js":
/*!****************************!*\
  !*** ./util/positioner.js ***!
  \****************************/
/*! exports provided: oppositeDock, createRect, getDockCenterPoint, tryPosition, createTryRect, tryDock, positionToRect, positionToElement, positionToCoordinate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oppositeDock", function() { return oppositeDock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRect", function() { return createRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDockCenterPoint", function() { return getDockCenterPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryPosition", function() { return tryPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTryRect", function() { return createTryRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryDock", function() { return tryDock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionToRect", function() { return positionToRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionToElement", function() { return positionToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionToCoordinate", function() { return positionToCoordinate; });
/* eslint-disable no-mixed-operators, prefer-destructuring */
var oppositeDockMap = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right'
};
function oppositeDock(dock) {
  return oppositeDockMap[dock];
}
function createRect() {
  var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return {
    top: top,
    right: left + width,
    bottom: top + height,
    left: left,
    width: width,
    height: height
  };
}
function getDockCenterPoint(rect, dock) {
  var top;
  var left;

  if (dock === 'top') {
    top = rect.top;
    left = rect.left + rect.width / 2;
  } else if (dock === 'right') {
    top = rect.top + rect.height / 2;
    left = rect.right;
  } else if (dock === 'left') {
    top = rect.top + rect.height / 2;
    left = rect.left;
  } else {
    top = rect.bottom;
    left = rect.left + rect.width / 2;
  }

  return {
    top: top,
    left: left
  };
}
function tryPosition(rect, withinRect) {
  var left = rect.left >= withinRect.left;
  var right = rect.right <= withinRect.right;
  var top = rect.top >= withinRect.top;
  var bottom = rect.bottom <= withinRect.bottom;
  return {
    left: left,
    right: right,
    top: top,
    bottom: bottom
  };
}
function createTryRect(elemRect, toPosition, dock, offset) {
  var top;
  var left;

  if (dock === 'top') {
    top = toPosition.top - elemRect.height - offset;
    left = toPosition.left - elemRect.width / 2;
  } else if (dock === 'right') {
    top = toPosition.top - elemRect.height / 2;
    left = toPosition.left + offset;
  } else if (dock === 'left') {
    top = toPosition.top - elemRect.height / 2;
    left = toPosition.left - elemRect.width - offset;
  } else {
    top = toPosition.top + offset;
    left = toPosition.left - elemRect.width / 2;
  }

  return createRect(top, left, elemRect.width, elemRect.height);
}
function tryDock(elemRect, alignToRect, windowRect, dock) {
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? 0 : _options$offset,
      _options$minWindowOff = options.minWindowOffset,
      minWindowOffset = _options$minWindowOff === void 0 ? 0 : _options$minWindowOff,
      _options$minEdgeOffse = options.minEdgeOffset,
      minEdgeOffset = _options$minEdgeOffse === void 0 ? 0 : _options$minEdgeOffse;
  var windowOffsetRect = createRect(windowRect.top + minWindowOffset, windowRect.left + minWindowOffset, windowRect.width - minWindowOffset * 2, windowRect.height - minWindowOffset * 2);
  var toPosition = getDockCenterPoint(alignToRect, dock);
  var tryRect = createTryRect(elemRect, toPosition, dock, offset);
  var fitResult = tryPosition(tryRect, windowOffsetRect);

  if (dock === 'top' || dock === 'bottom') {
    if (!fitResult.left) {
      tryRect.left = Math.min(windowOffsetRect.left, toPosition.left - minEdgeOffset);
      tryRect.right = tryRect.left + tryRect.width;
      fitResult = tryPosition(tryRect, windowOffsetRect);
    }

    if (!fitResult.right) {
      tryRect.right = Math.max(windowOffsetRect.right, toPosition.left + minEdgeOffset);
      tryRect.left = tryRect.right - tryRect.width;
      fitResult = tryPosition(tryRect, windowOffsetRect);
    }
  } else {
    if (!fitResult.top) {
      tryRect.top = Math.min(windowOffsetRect.top, toPosition.top - minEdgeOffset);
      tryRect.bottom = tryRect.top + tryRect.height;
      fitResult = tryPosition(tryRect, windowOffsetRect);
    }

    if (!fitResult.bottom) {
      tryRect.bottom = Math.max(windowOffsetRect.bottom, toPosition.top + minWindowOffset);
      tryRect.top = tryRect.bottom - tryRect.height;
      fitResult = tryPosition(tryRect, windowOffsetRect);
    }
  }

  return {
    fits: fitResult.top && fitResult.right && fitResult.bottom && fitResult.left,
    dock: dock,
    position: {
      left: tryRect.left,
      top: tryRect.top
    },
    toPosition: getDockCenterPoint(alignToRect, dock)
  };
}
function positionToRect(element, rect) {
  var dock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'bottom';
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var elemRect = element.getBoundingClientRect();
  var windowRect = createRect(0, 0, document.body.scrollWidth, document.body.scrollHeight);
  var docks = Array.isArray(dock) ? dock : [dock];
  var firstResult = null;

  for (var i = 0; i < docks.length; i++) {
    var result = tryDock(elemRect, rect, windowRect, docks[i], options);

    if (result.fits) {
      return result;
    }

    if (i === 0) {
      firstResult = result;
    }
  } // If no fit is found - return the first position


  return firstResult;
}
function positionToElement(element, alignToElement) {
  var dock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'bottom';
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var elementRect = alignToElement.getBoundingClientRect();
  var body = document.body;
  var docEl = document.documentElement;
  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
  var top = elementRect.top + scrollTop - clientTop;
  var left = elementRect.left + scrollLeft - clientLeft;
  var itemRect = createRect(top, left, elementRect.width, elementRect.height);
  return positionToRect(element, itemRect, dock, options);
}
function positionToCoordinate(element, x, y) {
  var dock = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'bottom';
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var rect = {
    top: y,
    bottom: y,
    left: x,
    right: x,
    width: 0,
    height: 0
  };
  return positionToRect(element, rect, dock, options);
}

/***/ })

/******/ });
});
//# sourceMappingURL=leonardo-ui.js.map