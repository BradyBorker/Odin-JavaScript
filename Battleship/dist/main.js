/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `body {
    margin: 0;
    padding: 0;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: rgb(194, 178, 128);
    background: linear-gradient(0deg, rgba(194, 178, 128, 1) 0%, rgba(194, 178, 128, 1) 0%, rgba(35, 137, 218, 1) 20%);
    box-shadow: inset 0px 0px 23px 12px rgba(194, 178, 128, 1);
    border: 2px inset #C2B280;
}

.removed {
    display: none;
}

.hidden {
    opacity: 0;
    pointer-events: none;
}

.moving {
    background-color: rgba(35, 137, 218, 1)
}

/* Menu */
.game-mode-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

/* Battleship Game */
.battleship-container {
    max-width: 1200px;
    position: relative;
    z-index: 2;
}

.player-boards {
    display: flex;
    justify-content: space-between;
}

.player1-board,
.player2-board {
    width: 500px;
    min-height: 500px;

    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
}

.tile {
    border: 1px solid #005b72;
}

.tile.valid-placement {
    background-color: darkblue;
}

.tile.ship {
    background-color: black;
}

.tile.hit {
    background-color: red;
}

.tile.missed {
    background-color: yellow;
}

/* Ship pieces container */
.draggable-ships-container {
    width: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.ship-container {
    width: 25px;
    border: 1px solid white;
    background-color: black;

    display: flex;
    flex-direction: column;
}

.ship-body {
    min-height: 25px;
    border: 1px solid white;
    background-color: black;
}

/* Ghost Ship */

#ghost-ship {
    position: absolute;
    top: -1000px;
}

.horizontal {
    height: 25px;

    display: flex;
}

.vertical {
    width: 25px;

    display: flex;
    flex-direction: column;
}

.ghost-ship-body {
    height: 100%;
    width: 100%;
    border: 1px solid white;
    background-color: black;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;;IAEnB,8BAA8B;IAC9B,kHAAkH;IAClH,0DAA0D;IAC1D,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI;AACJ;;AAEA,SAAS;AACT;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA,oBAAoB;AACpB;IACI,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;;IAEI,YAAY;IACZ,iBAAiB;;IAEjB,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA,0BAA0B;AAC1B;IACI,WAAW;;IAEX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,uBAAuB;;IAEvB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA,eAAe;;AAEf;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,YAAY;;IAEZ,aAAa;AACjB;;AAEA;IACI,WAAW;;IAEX,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,uBAAuB;AAC3B","sourcesContent":["body {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    background: rgb(194, 178, 128);\n    background: linear-gradient(0deg, rgba(194, 178, 128, 1) 0%, rgba(194, 178, 128, 1) 0%, rgba(35, 137, 218, 1) 20%);\n    box-shadow: inset 0px 0px 23px 12px rgba(194, 178, 128, 1);\n    border: 2px inset #C2B280;\n}\n\n.removed {\n    display: none;\n}\n\n.hidden {\n    opacity: 0;\n    pointer-events: none;\n}\n\n.moving {\n    background-color: rgba(35, 137, 218, 1)\n}\n\n/* Menu */\n.game-mode-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n/* Battleship Game */\n.battleship-container {\n    max-width: 1200px;\n    position: relative;\n    z-index: 2;\n}\n\n.player-boards {\n    display: flex;\n    justify-content: space-between;\n}\n\n.player1-board,\n.player2-board {\n    width: 500px;\n    min-height: 500px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.tile {\n    border: 1px solid #005b72;\n}\n\n.tile.valid-placement {\n    background-color: darkblue;\n}\n\n.tile.ship {\n    background-color: black;\n}\n\n.tile.hit {\n    background-color: red;\n}\n\n.tile.missed {\n    background-color: yellow;\n}\n\n/* Ship pieces container */\n.draggable-ships-container {\n    width: 50px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n}\n\n.ship-container {\n    width: 25px;\n    border: 1px solid white;\n    background-color: black;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.ship-body {\n    min-height: 25px;\n    border: 1px solid white;\n    background-color: black;\n}\n\n/* Ghost Ship */\n\n#ghost-ship {\n    position: absolute;\n    top: -1000px;\n}\n\n.horizontal {\n    height: 25px;\n\n    display: flex;\n}\n\n.vertical {\n    width: 25px;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.ghost-ship-body {\n    height: 100%;\n    width: 100%;\n    border: 1px solid white;\n    background-color: black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/battleship.js":
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _placeShips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeShips */ "./src/placeShips.js");
/* harmony import */ var _dragAndDrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragAndDrop */ "./src/dragAndDrop.js");
/* eslint-disable no-use-before-define */



function switchTurn(players) {
    players.forEach((player) => {
        player.switchTurn();
    })
}

function isGameOver(players) {
    const loser = players.filter((player) => player.board.allSunk());
    if (loser.length > 0) {
        const [winner] = players.filter((player) => !player.board.allSunk());
        console.log(`Winner: ${winner.name}`)
        return true;
    }
    return false;
}

function makeAttack(players, coordinate) {
    let [attackedPlayer] = players.filter((player) => !player.myTurn);
    let [attackingPlayer] = players.filter((player) => player.myTurn);

    if (!attackingPlayer.isHuman) {
        attackingPlayer.logAttack(attackedPlayer.board.receiveAttack(coordinate), coordinate);
    } else {
        attackedPlayer.board.receiveAttack(coordinate);
    }

    if (isGameOver(players)) {
        renderGameBoards(players, {}, [], true);
        return;
    }
    switchTurn(players);
    renderGameBoards(players);

    // Computer Attack
    [attackedPlayer] = players.filter((player) => !player.myTurn);
    [attackingPlayer] = players.filter((player) => player.myTurn);
    if (!attackingPlayer.isHuman) {
        const attackCoordinate = attackingPlayer.attack(attackedPlayer);
        makeAttack(players, attackCoordinate);
    }
}

function renderGameBoards(players, dragData = {}, preservedCoords = [], gameOver = false) {
    const [player1, player2] = players
    const playerVsComputer = !(player1.isHuman && player2.isHuman)
    const playerPlacingShips = players.find((player) => !player.isReady);

    players.forEach((player, index) => {
        const boardNode = document.querySelector(`.player${index + 1}-board`);
        const hitCoordinates = player.board.hitAttacks;
        const missedCoordinates = player.board.missedAttacks;
        const tiles = [];
        player.board.state.forEach((row, rowIndex) => {
            row.forEach((column, columnIndex) => {
                if (preservedCoords.includes(JSON.stringify([rowIndex, columnIndex]))) {
                    const tile = document.getElementById(`p${index + 1}-${rowIndex}-${columnIndex}`)
                    tile.classList.remove('ship');

                    // Droppable tile
                    if (player === playerPlacingShips && player.isHuman && player.board.validShipPlacement(player.board.getCoordsFromStartingCoord([rowIndex, columnIndex], dragData.ship.orientation, dragData.ship.length))) {
                        (0,_dragAndDrop__WEBPACK_IMPORTED_MODULE_1__.droppableHoverFeedback)(tile, dragData, player, index + 1)
                        ;(0,_dragAndDrop__WEBPACK_IMPORTED_MODULE_1__.droppableFromInside)(tile, dragData, player, players, renderGameBoards)
                    }

                    tiles.push(tile)
                } else {
                    const tile = document.createElement('div');
                    tile.classList.add('tile');
                    tile.id = `p${index + 1}-${rowIndex}-${columnIndex}`

                    // Draggable tile
                    if (column && player === playerPlacingShips && player.isHuman) {
                        (0,_dragAndDrop__WEBPACK_IMPORTED_MODULE_1__.draggableFromInside)(tile, player, players, renderGameBoards)
                    }

                    // Droppable tile
                    if (Object.keys(dragData).length > 0 && !column && player === playerPlacingShips && player.isHuman && player.board.validShipPlacement(player.board.getCoordsFromStartingCoord([rowIndex, columnIndex], dragData.ship.orientation, dragData.ship.length))) {
                        (0,_dragAndDrop__WEBPACK_IMPORTED_MODULE_1__.droppableHoverFeedback)(tile, dragData, player, index + 1);

                        if (dragData.origin === 'insideBoard') {
                            (0,_dragAndDrop__WEBPACK_IMPORTED_MODULE_1__.droppableFromInside)(tile, dragData, player, players, renderGameBoards)
                        } else if (dragData.origin === 'outsideBoard') {
                            (0,_dragAndDrop__WEBPACK_IMPORTED_MODULE_1__.droppableFromOutside)(tile, dragData, player, players, renderGameBoards)
                        }
                    }

                    // Add event listener to update ship's orientation
                    if (column && player.isHuman && player === playerPlacingShips) {
                        tile.addEventListener('click', (e) => (0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.switchShipOrientation)(e, player, players, renderGameBoards));
                    }

                    // Conditions for displaying ships
                    if (column && player.isHuman && (playerVsComputer || !player.isReady)) {
                        tile.classList.add('ship')
                    }

                    // Conditions for allowing attack on tile
                    const ready = players.every((p) => p.isReady)
                    if (ready && !player.myTurn && player.board.isAttackable([rowIndex, columnIndex]) && (!player.isHuman || !playerVsComputer) && !gameOver) {
                        const coordinate = [rowIndex, columnIndex]
                        tile.addEventListener('click', () => {
                            makeAttack(players, coordinate)
                        })
                    }

                    tiles.push(tile)
                }
            })
        })
        boardNode.replaceChildren(...tiles);

        hitCoordinates.forEach((coordinate) => {
            const [row, column] = coordinate;
            const tile = document.getElementById(`p${index + 1}-${row}-${column}`);
            tile.classList.add('hit');
        })
        missedCoordinates.forEach((coordinate) => {
            const [row, column] = coordinate;
            const tile = document.getElementById(`p${index + 1}-${row}-${column}`);
            tile.classList.add('missed');
        })
    })
}

async function startGame(players) {
    renderGameBoards(players)
    const battleShipContainer = document.querySelector('.battleship-container');
    battleShipContainer.classList.remove('removed');

    const [player1, player2] = players
    ;(0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.createRandomShipPlacementButton)(player1, players, renderGameBoards)
    ;(0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.createDraggableShipElements)(players, renderGameBoards)
    await (0,_placeShips__WEBPACK_IMPORTED_MODULE_0__["default"])(player1)
    renderGameBoards(players)

    if (player2.isHuman) {
        (0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.createRandomShipPlacementButton)(player2, players, renderGameBoards)
        ;(0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.createDraggableShipElements)(players, renderGameBoards)
        await (0,_placeShips__WEBPACK_IMPORTED_MODULE_0__["default"])(player2);
    } else {
        (0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.randomShipPlacement)(player2, players, renderGameBoards)
        player2.readyUp();
    }

    renderGameBoards(players)
}

/***/ }),

/***/ "./src/dragAndDrop.js":
/*!****************************!*\
  !*** ./src/dragAndDrop.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   draggableFromInside: () => (/* binding */ draggableFromInside),
/* harmony export */   draggableFromOutside: () => (/* binding */ draggableFromOutside),
/* harmony export */   droppableFromInside: () => (/* binding */ droppableFromInside),
/* harmony export */   droppableFromOutside: () => (/* binding */ droppableFromOutside),
/* harmony export */   droppableHoverFeedback: () => (/* binding */ droppableHoverFeedback)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


function draggedFromInsideBoard(e, player, players, renderGameBoards) {
    const coordinate = e.target.id.split('-').slice(-2).map((number) => Number(number));
    const theShip = player.board.getShipAt(coordinate);

    const ghostShip = document.createElement('div');
    ghostShip.id = 'ghost-ship'

    if (theShip.orientation === 'vertical') {
        ghostShip.classList.add('vertical');
        ghostShip.style.height = `${theShip.length * 25}px`;
    } else if (theShip.orientation === 'horizontal') {
        ghostShip.classList.add('horizontal');
        ghostShip.style.width = `${theShip.length * 25}px`;
    }


    for (let i = 0; i < theShip.length; i += 1) {
        const ghostShipBody = document.createElement('div')
        ghostShipBody.classList.add('ghost-ship-body');

        ghostShip.appendChild(ghostShipBody);
    }

    document.body.appendChild(ghostShip);
    e.dataTransfer.setDragImage(ghostShip, 0, 0);

    const shipCoordinates = player.board.getShipCoordinates(theShip);
    const preservedCoordinates = shipCoordinates.map((coord) => JSON.stringify(coord));

    player.board.removePlacedShip(shipCoordinates);

    renderGameBoards(players, { 'origin': 'insideBoard', 'ship': theShip }, preservedCoordinates)
}

function draggableFromInside(tile, player, players, renderGameBoards) {
    tile.setAttribute('draggable', 'true');
    tile.addEventListener('dragstart', (e) => {
        draggedFromInsideBoard(e, player, players, renderGameBoards);
    })

    tile.addEventListener('dragend', (e) => {
        const ghostShip = document.querySelector('#ghost-ship')
        if (ghostShip.parentElement) {
            ghostShip.parentElement.removeChild(ghostShip);
        }

        if (e.dataTransfer.dropEffect === 'none') {
            player.board.restoreState();
            renderGameBoards(players);
        }
    })
}

function draggedFromOutsideBoard(e, players, renderGameBoards) {
    e.dataTransfer.dropEffect = 'move'
    const re = /length-(\d)/;
    let shipLength;
    for (let i = 0; i < e.target.classList.length; i += 1) {
        if (re.test(e.target.classList[i])) {
            shipLength = Number(e.target.classList[i].split('-')[1])
            break
        }
    }
    const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(shipLength)

    renderGameBoards(players, { 'origin': 'outsideBoard', 'ship': newShip })
}

function draggableFromOutside(shipContainerElement, draggableShipsContainer, players, renderGameBoards) {
    shipContainerElement.addEventListener('dragstart', (e) => {
        draggedFromOutsideBoard(e, players, renderGameBoards);
    });

    shipContainerElement.addEventListener('dragend', (e) => {
        if (e.dataTransfer.dropEffect !== 'none') {
            draggableShipsContainer.removeChild(e.target)
        }
    })
}

function droppedFromInsideBoard(dragData, player, e, players, renderGameBoards) {
    const theShip = dragData.ship

    const startingCoordinate = e.target.id.split('-').slice(-2).map((number) => Number(number));
    player.board.placeShip(theShip, startingCoordinate)

    renderGameBoards(players);
}

function droppableFromInside(tile, dragData, player, players, renderGameBoards) {
    tile.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    })

    tile.addEventListener('drop', (e) => {
        e.preventDefault();
        droppedFromInsideBoard(dragData, player, e, players, renderGameBoards);
    })
}

function droppedFromOutsideBoard(dragData, player, e, players, renderGameBoards) {
    const startingCoordinate = e.target.id.split('-').slice(-2).map((number) => Number(number));
    player.board.placeShip(dragData.ship, startingCoordinate);

    if (player.board.allShipsPlaced()) {
        const readyUpButton = document.querySelector('.ready-up');
        readyUpButton.classList.remove('removed');
    }

    renderGameBoards(players);
}

function droppableFromOutside(tile, dragData, player, players, renderGameBoards) {
    tile.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    })

    tile.addEventListener('drop', (e) => {
        e.preventDefault();
        droppedFromOutsideBoard(dragData, player, e, players, renderGameBoards);
    })
}

const previousCoordinatesQueue = [];
function droppableHoverFeedback(tile, dragData, player, playerIndex) {
    tile.addEventListener('dragenter', (e) => {
        const startingCoordinate = e.target.id.split('-').slice(-2).map((number) => Number(number));
        const theShip = dragData.ship;
        const allCoordinates = player.board.getCoordsFromStartingCoord(startingCoordinate, theShip.orientation, theShip.length);

        allCoordinates.forEach((coordinate) => {
            const [row, column] = coordinate;
            const hoveredTile = document.getElementById(`p${playerIndex}-${row}-${column}`);
            hoveredTile.classList.add('valid-placement');
        })

        while (previousCoordinatesQueue.length >= 2) {
            previousCoordinatesQueue.shift()
        }
        const stringifiedCoords = allCoordinates.map((coordinate) => JSON.stringify(coordinate))
        previousCoordinatesQueue.push(stringifiedCoords)
    })

    tile.addEventListener('dragleave', () => {
        let previousCoordinates;
        let currentCoordinates;
        if (previousCoordinatesQueue.length > 1) {
            previousCoordinates = previousCoordinatesQueue.shift();
            [currentCoordinates] = previousCoordinatesQueue;
        } else if (previousCoordinatesQueue.length > 0) {
            [previousCoordinates] = previousCoordinatesQueue;
        }

        if (!(previousCoordinates && currentCoordinates)) {
            previousCoordinates.forEach((prevCoordinate) => {
                const [row, column] = JSON.parse(prevCoordinate);
                const hoveredTile = document.getElementById(`p${playerIndex}-${row}-${column}`);
                hoveredTile.classList.remove('valid-placement');
            })
        } else {
            previousCoordinates.forEach((prevCoordinate) => {
                const [row, column] = JSON.parse(prevCoordinate);
                const hoveredTile = document.getElementById(`p${playerIndex}-${row}-${column}`);

                if (!currentCoordinates.includes(prevCoordinate)) {
                    hoveredTile.classList.remove('valid-placement');
                }
            })
        }
    })
}

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameBoard)
/* harmony export */ });
function gameBoard() {
    const state = [];
    const shipCoordinates = [];
    for (let row = 0; row < 10; row += 1) {
        state.push([]);
        for (let col = 0; col < 10; col += 1) {
            state[row].push(false);
        }
    }

    const restoreState = () => {
        shipCoordinates.forEach((shipObject) => {
            for (let i = 0; i < shipObject.coordinates.length; i += 1) {
                const [row, column] = shipObject.coordinates[i];
                if (state[row][column] !== shipObject.ship) {
                    state[row][column] = shipObject.ship
                }
            }
        })
    }

    const validShipPlacement = (coordinates) => {
        for (let i = 0; i < coordinates.length; i += 1) {
            const coordinate = coordinates[i];
            const [row, column] = coordinate;
            if (row < 0 || row > 9 || column < 0 || column > 9 || state[row][column]) {
                return false
            }
        }
        return true
    }

    const getCoordsFromStartingCoord = (firstCoordinate, orientation, shipLength) => {
        const coordinates = []
        for (let i = 0; i < shipLength; i += 1) {
            if (orientation === 'horizontal') {
                coordinates.push([firstCoordinate[0], firstCoordinate[1] + i]);
            } else if (orientation === 'vertical') {
                coordinates.push([firstCoordinate[0] + i, firstCoordinate[1]]);
            }
        }

        return coordinates
    }

    const placeShip = (ship, firstCoordinate) => {
        const coordinates = getCoordsFromStartingCoord(firstCoordinate, ship.orientation, ship.length);

        if (validShipPlacement(coordinates)) {
            const index = shipCoordinates.findIndex((shipObject) => shipObject.ship === ship);
            if (index > -1) {
                shipCoordinates[index].coordinates = coordinates;
            } else {
                shipCoordinates.push({ 'ship': ship, 'coordinates': coordinates });
            }

            coordinates.forEach((coordinate) => {
                const [row, column] = coordinate;
                state[row][column] = ship;
            })
            return true
        }
        return false
    }

    const allShipsPlaced = () => {
        const placedShips = [];
        state.forEach((row) => {
            row.forEach((column) => {
                if (column && !placedShips.includes(column)) {
                    placedShips.push(column)
                }
            })
        })

        return placedShips.length === 5;
    }

    const removePlacedShips = () => {
        state.forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                state[rowIndex][colIndex] = false;
            })
        })
        shipCoordinates.splice(0, shipCoordinates.length)
    }

    const removePlacedShip = (coordinates) => {
        coordinates.forEach((coordinate) => {
            const [row, column] = coordinate;
            state[row][column] = false;
        })
    }

    const getPlacedShips = () => {
        const shipsArray = [];
        shipCoordinates.forEach((shipObject) => {
            shipsArray.push(shipObject.ship);
        })
        return shipsArray;
    }

    const getShipAt = (coordinate) => {
        const [row, column] = coordinate;
        const theShip = state[row][column];
        return theShip
    }

    const getShipHeadCoordinate = (ship) => {
        const index = shipCoordinates.findIndex((shipObject) => shipObject.ship === ship);
        if (index > -1) {
            return shipCoordinates[index].coordinates[0]
        }

        return false
    }

    const getShipCoordinates = (ship) => {
        const index = shipCoordinates.findIndex((shipObject) => shipObject.ship === ship);
        if (index > -1) {
            return shipCoordinates[index].coordinates
        }

        return false
    }

    const hitAttacks = [];
    const missedAttacks = [];
    const receiveAttack = (coordinate) => {
        const [row, column] = coordinate;
        const boardTile = state[row][column];
        if (boardTile) {
            boardTile.hit(coordinate);
            hitAttacks.push(coordinate);
            return true
        }
        missedAttacks.push(coordinate)
        return false
    }

    const validAttack = (coordinate) => {
        const [row, column] = coordinate;
        return row >= 0 && row <= 9 && column >= 0 && column <= 9;
    }

    const isAttackable = (coordinate) => {
        const allAttacks = hitAttacks.concat(missedAttacks).map((attack) => JSON.stringify(attack));
        return !allAttacks.includes(JSON.stringify(coordinate)) && validAttack(coordinate)
    }

    const allSunk = () => {
        const ships = getPlacedShips();
        return ships.every((ship) => ship.isSunk())
    }

    return { restoreState, placeShip, receiveAttack, allSunk, isAttackable, allShipsPlaced, removePlacedShips, removePlacedShip, getShipAt, getShipHeadCoordinate, getShipCoordinates, getCoordsFromStartingCoord, validShipPlacement, state, hitAttacks, missedAttacks }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./battleship */ "./src/battleship.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





/*
1. Menu screen (Player v Player, Player v Computer)
1a. New game vs load game feature
2. 
*/

// Called on refresh if there is nothing in local storage
// Or on 'Play again' button
(0,_battleship__WEBPACK_IMPORTED_MODULE_2__["default"])(await (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])(_player__WEBPACK_IMPORTED_MODULE_0__.human, _player__WEBPACK_IMPORTED_MODULE_0__.computer))
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayMenu)
/* harmony export */ });
function removeMenu(body) {
    body.removeChild(document.querySelector('.game-mode-container'))
}

function displayMenu(human, computer) {
    const gameModeContainer = document.createElement('div');
    const pvpModeBtn = document.createElement('button');
    pvpModeBtn.textContent = 'Player vs. Player';
    const pvcModeBtn = document.createElement('button');
    pvcModeBtn.textContent = 'Player vs. Computer';
    gameModeContainer.appendChild(pvpModeBtn);
    gameModeContainer.appendChild(pvcModeBtn);

    gameModeContainer.classList.add('game-mode-container');

    const body = document.querySelector('body');
    body.appendChild(gameModeContainer);

    return new Promise((resolve) => {
        pvpModeBtn.addEventListener('click', () => {
            removeMenu(body)
            resolve([human(true), human()]);
        })

        pvcModeBtn.addEventListener('click', () => {
            removeMenu(body)
            resolve([human(true), computer()]);
        })
    })
}

/***/ }),

/***/ "./src/placeShips.js":
/*!***************************!*\
  !*** ./src/placeShips.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDraggableShipElements: () => (/* binding */ createDraggableShipElements),
/* harmony export */   createRandomShipPlacementButton: () => (/* binding */ createRandomShipPlacementButton),
/* harmony export */   "default": () => (/* binding */ finishedPlacingShips),
/* harmony export */   randomShipPlacement: () => (/* binding */ randomShipPlacement),
/* harmony export */   switchShipOrientation: () => (/* binding */ switchShipOrientation)
/* harmony export */ });
/* harmony import */ var _dragAndDrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragAndDrop */ "./src/dragAndDrop.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");




function finishedPlacingShips(player) {
    return new Promise((resolve) => {
        const readyUpButton = document.querySelector('.ready-up');
        readyUpButton.addEventListener('click', () => {
            readyUpButton.classList.add('removed');
            player.readyUp();
            const body = document.querySelector('body');
            const randomShipPlacementButton = document.querySelector('.random-ship-placement');
            body.removeChild(randomShipPlacementButton);

            const readyUpButtonClone = readyUpButton.cloneNode(true);
            readyUpButton.parentNode.replaceChild(readyUpButtonClone, readyUpButton);
            resolve();
        })
    })
}

function randomShipPlacement(player, players, renderGameBoards) {
    player.board.removePlacedShips();
    const shipOrientations = ['horizontal', 'vertical'];

    [5, 4, 3, 3, 2].forEach((length) => {
        const placementPool = []
        for (let row = 0; row < 10; row += 1) {
            for (let col = 0; col < 10; col += 1) {
                placementPool.push([row, col]);
            }
        }

        const randomOrientation = shipOrientations[Math.round(Math.random())];
        let randomIndex = Math.floor(Math.random() * placementPool.length)
        while (!player.board.placeShip((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(length, randomOrientation), placementPool[randomIndex])) {
            randomIndex = Math.floor(Math.random() * placementPool.length)
        }

    })

    if (player.isHuman && player.board.allShipsPlaced()) {
        const readyUpButton = document.querySelector('.ready-up');
        readyUpButton.classList.remove('removed');
    }

    renderGameBoards(players)
}

function createRandomShipPlacementButton(player, players, renderGameBoards) {
    const randomShipPlacementButton = document.createElement('button');
    const body = document.querySelector('body')
    randomShipPlacementButton.classList.add('random-ship-placement');
    randomShipPlacementButton.textContent = 'Randomize Ships!'
    body.appendChild(randomShipPlacementButton);

    randomShipPlacementButton.addEventListener('click', () => randomShipPlacement(player, players, renderGameBoards))
    randomShipPlacementButton.addEventListener('click', () => {
        const draggableShipsContainer = document.querySelector('.draggable-ships-container');
        while (draggableShipsContainer.firstChild) {
            draggableShipsContainer.removeChild(draggableShipsContainer.firstChild)
        }
    })
}

function createDraggableShipElements(players, renderGameBoards) {
    const draggableShipsContainer = document.querySelector('.draggable-ships-container');
    [5, 4, 3, 3, 2].forEach((length) => {
        const shipContainerElement = document.createElement('div');
        shipContainerElement.classList.add('ship-container', `length-${length}`);
        shipContainerElement.setAttribute('draggable', 'true');

        (0,_dragAndDrop__WEBPACK_IMPORTED_MODULE_0__.draggableFromOutside)(shipContainerElement, draggableShipsContainer, players, renderGameBoards)

        for (let index = 0; index < length; index += 1) {
            const shipBody = document.createElement('div');
            shipBody.classList.add('ship-body');
            shipContainerElement.appendChild(shipBody);
        }

        draggableShipsContainer.appendChild(shipContainerElement);
    })
}

function switchShipOrientation(e, player, players, renderGameBoards) {
    const coordinate = e.target.id.split('-').slice(-2).map((number) => Number(number));
    const theShip = player.board.getShipAt(coordinate);
    const shipHeadCoordinate = player.board.getShipHeadCoordinate(theShip);
    const switchedOrientation = theShip.orientation === 'vertical' ? 'horizontal' : 'vertical';

    const switchedShipCoordinates = player.board.getCoordsFromStartingCoord(shipHeadCoordinate, switchedOrientation, theShip.length).slice(1);
    if (player.board.validShipPlacement(switchedShipCoordinates)) {
        theShip.orientation = switchedOrientation;
        player.board.removePlacedShip(player.board.getShipCoordinates(theShip));
        player.board.placeShip(theShip, shipHeadCoordinate);

        renderGameBoards(players);
    }
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computer: () => (/* binding */ computer),
/* harmony export */   human: () => (/* binding */ human)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */


function player() {
    const board = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();

    const isReady = false
    const readyUp = function () {
        this.isReady = true;
    }

    const switchTurn = function () {
        this.myTurn = !this.myTurn;
    }

    return { readyUp, switchTurn, board, isReady }
}

function human(myTurn = false) {
    const name = myTurn ? 'Player 1' : 'Player 2'
    const isHuman = true;

    return { ...player(), isHuman, myTurn, name }
}

function computer(myTurn = false) {
    const name = 'Player 2';
    const isHuman = false;

    let initialHit = null;
    let previousAttackHit = false;
    let hitHistory = [];
    let attackStack = [];
    const attack = function (opponent) {
        if (initialHit) {
            const attackedShip = opponent.board.getShipAt(initialHit);
            if (attackedShip.isSunk()) {
                const sunkShipCoordinates = attackedShip.hitCoordinates.map((hitCoordinate) => JSON.stringify(hitCoordinate));
                const remainingCoordinates = [];
                hitHistory.forEach((coordinate) => {
                    if (!sunkShipCoordinates.includes(JSON.stringify(coordinate))) {
                        remainingCoordinates.push(coordinate);
                    }
                })
                hitHistory = remainingCoordinates;
                attackStack = [];

                if (hitHistory.length >= 1) {
                    initialHit = hitHistory.pop();
                } else {
                    initialHit = null;
                }
            }
        }

        if (initialHit && attackStack.length === 0 && hitHistory.length === 0) {
            const possibleAttacks = []
            possibleAttacks.push([initialHit[0], initialHit[1] + 1]);
            possibleAttacks.push([initialHit[0], initialHit[1] - 1]);
            possibleAttacks.push([initialHit[0] + 1, initialHit[1]]);
            possibleAttacks.push([initialHit[0] - 1, initialHit[1]]);
            possibleAttacks.forEach((possibleAttack) => {
                if (opponent.board.isAttackable(possibleAttack)) {
                    attackStack.push(possibleAttack);
                }
            })
        } else if (initialHit && hitHistory.length >= 1 && previousAttackHit) {
            const newHit = hitHistory[hitHistory.length - 1];
            const x1 = initialHit[1];
            const y1 = initialHit[0];
            const x2 = newHit[1];
            const y2 = newHit[0];

            const xDiff = x1 - x2;
            const yDiff = y1 - y2;

            if (xDiff < 0) {
                // right
                const rightOne = [newHit[0], newHit[1] + 1];
                if (opponent.board.isAttackable(rightOne)) {
                    attackStack.push(rightOne);
                }
            } else if (xDiff > 0) {
                // left
                const leftOne = [newHit[0], newHit[1] - 1];
                if (opponent.board.isAttackable(leftOne)) {
                    attackStack.push(leftOne);
                }
            } else if (yDiff < 0) {
                // up
                const upOne = [newHit[0] + 1, newHit[1]]
                if (opponent.board.isAttackable(upOne)) {
                    attackStack.push(upOne);
                }
            } else if (yDiff > 0) {
                // down
                const downOne = [newHit[0] - 1, newHit[1]];
                if (opponent.board.isAttackable(downOne)) {
                    attackStack.push(downOne);
                }
            }
        }

        if (attackStack.length > 0) {
            return attackStack.pop();
        }
        if (attackStack.length <= 0) {
            const attackPool = []
            for (let row = 0; row < 10; row += 1) {
                for (let col = 0; col < 10; col += 1) {
                    if (opponent.board.isAttackable([row, col])) {
                        attackPool.push([row, col]);
                    }
                }
            }

            const randomIndex = Math.floor(Math.random() * (attackPool.length - 1))
            const randomAttack = attackPool[randomIndex];
            return randomAttack
        }
        return false
    }

    const logAttack = (isHit, coordinate) => {
        if (isHit && !initialHit) {
            initialHit = coordinate;
            previousAttackHit = true;
        } else if (isHit) {
            hitHistory.push(coordinate);
            previousAttackHit = true;
        } else {
            previousAttackHit = false;
        }
    }

    return { ...player(), attack, logAttack, isHuman, myTurn, name }
}

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ship)
/* harmony export */ });
function ship(length, orientation = 'vertical') {
    const hitCoordinates = [];

    const hit = (coordinate) => {
        hitCoordinates.push(coordinate)
        return hitCoordinates
    }

    const isSunk = () => (length - hitCoordinates.length) <= 0

    return { length, orientation, hitCoordinates, hit, isSunk }
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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxDQUFDO1dBQ0Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBLHNHQUFzRztXQUN0RztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7Ozs7O1dDaEVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvYmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9kcmFnQW5kRHJvcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9wbGFjZVNoaXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk0LCAxNzgsIDEyOCk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTk0LCAxNzgsIDEyOCwgMSkgMCUsIHJnYmEoMTk0LCAxNzgsIDEyOCwgMSkgMCUsIHJnYmEoMzUsIDEzNywgMjE4LCAxKSAyMCUpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjNweCAxMnB4IHJnYmEoMTk0LCAxNzgsIDEyOCwgMSk7XG4gICAgYm9yZGVyOiAycHggaW5zZXQgI0MyQjI4MDtcbn1cblxuLnJlbW92ZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oaWRkZW4ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5tb3Zpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzUsIDEzNywgMjE4LCAxKVxufVxuXG4vKiBNZW51ICovXG4uZ2FtZS1tb2RlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuLyogQmF0dGxlc2hpcCBHYW1lICovXG4uYmF0dGxlc2hpcC1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4ucGxheWVyLWJvYXJkcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wbGF5ZXIxLWJvYXJkLFxuLnBsYXllcjItYm9hcmQge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi50aWxlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA1YjcyO1xufVxuXG4udGlsZS52YWxpZC1wbGFjZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xufVxuXG4udGlsZS5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnRpbGUuaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi50aWxlLm1pc3NlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4vKiBTaGlwIHBpZWNlcyBjb250YWluZXIgKi9cbi5kcmFnZ2FibGUtc2hpcHMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNTBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLnNoaXAtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNoaXAtYm9keSB7XG4gICAgbWluLWhlaWdodDogMjVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLyogR2hvc3QgU2hpcCAqL1xuXG4jZ2hvc3Qtc2hpcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEwMDBweDtcbn1cblxuLmhvcml6b250YWwge1xuICAgIGhlaWdodDogMjVweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi52ZXJ0aWNhbCB7XG4gICAgd2lkdGg6IDI1cHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5naG9zdC1zaGlwLWJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7O0lBRWIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQiw4QkFBOEI7SUFDOUIsa0hBQWtIO0lBQ2xILDBEQUEwRDtJQUMxRCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUEsU0FBUztBQUNUO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7O0lBRWpCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLFdBQVc7O0lBRVgsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsdUJBQXVCOztJQUV2QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUEsZUFBZTs7QUFFZjtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTs7SUFFWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVzs7SUFFWCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk0LCAxNzgsIDEyOCk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpIDAlLCByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpIDAlLCByZ2JhKDM1LCAxMzcsIDIxOCwgMSkgMjAlKTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyM3B4IDEycHggcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcXG4gICAgYm9yZGVyOiAycHggaW5zZXQgI0MyQjI4MDtcXG59XFxuXFxuLnJlbW92ZWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5tb3Zpbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM1LCAxMzcsIDIxOCwgMSlcXG59XFxuXFxuLyogTWVudSAqL1xcbi5nYW1lLW1vZGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiBCYXR0bGVzaGlwIEdhbWUgKi9cXG4uYmF0dGxlc2hpcC1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnBsYXllcjEtYm9hcmQsXFxuLnBsYXllcjItYm9hcmQge1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi50aWxlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwNWI3MjtcXG59XFxuXFxuLnRpbGUudmFsaWQtcGxhY2VtZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxufVxcblxcbi50aWxlLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRpbGUuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udGlsZS5taXNzZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi8qIFNoaXAgcGllY2VzIGNvbnRhaW5lciAqL1xcbi5kcmFnZ2FibGUtc2hpcHMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaGlwLWJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIEdob3N0IFNoaXAgKi9cXG5cXG4jZ2hvc3Qtc2hpcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMTAwMHB4O1xcbn1cXG5cXG4uaG9yaXpvbnRhbCB7XFxuICAgIGhlaWdodDogMjVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnZlcnRpY2FsIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5naG9zdC1zaGlwLWJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCBmaW5pc2hlZFBsYWNpbmdTaGlwcywgeyBjcmVhdGVSYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uLCByYW5kb21TaGlwUGxhY2VtZW50LCBjcmVhdGVEcmFnZ2FibGVTaGlwRWxlbWVudHMsIHN3aXRjaFNoaXBPcmllbnRhdGlvbiB9IGZyb20gXCIuL3BsYWNlU2hpcHNcIjtcbmltcG9ydCB7IGRyYWdnYWJsZUZyb21JbnNpZGUsIGRyb3BwYWJsZUZyb21JbnNpZGUsIGRyb3BwYWJsZUZyb21PdXRzaWRlLCBkcm9wcGFibGVIb3ZlckZlZWRiYWNrIH0gZnJvbSBcIi4vZHJhZ0FuZERyb3BcIjtcblxuZnVuY3Rpb24gc3dpdGNoVHVybihwbGF5ZXJzKSB7XG4gICAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgICAgcGxheWVyLnN3aXRjaFR1cm4oKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBpc0dhbWVPdmVyKHBsYXllcnMpIHtcbiAgICBjb25zdCBsb3NlciA9IHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+IHBsYXllci5ib2FyZC5hbGxTdW5rKCkpO1xuICAgIGlmIChsb3Nlci5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IFt3aW5uZXJdID0gcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gIXBsYXllci5ib2FyZC5hbGxTdW5rKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhgV2lubmVyOiAke3dpbm5lci5uYW1lfWApXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1ha2VBdHRhY2socGxheWVycywgY29vcmRpbmF0ZSkge1xuICAgIGxldCBbYXR0YWNrZWRQbGF5ZXJdID0gcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gIXBsYXllci5teVR1cm4pO1xuICAgIGxldCBbYXR0YWNraW5nUGxheWVyXSA9IHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+IHBsYXllci5teVR1cm4pO1xuXG4gICAgaWYgKCFhdHRhY2tpbmdQbGF5ZXIuaXNIdW1hbikge1xuICAgICAgICBhdHRhY2tpbmdQbGF5ZXIubG9nQXR0YWNrKGF0dGFja2VkUGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSksIGNvb3JkaW5hdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGF0dGFja2VkUGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGlzR2FtZU92ZXIocGxheWVycykpIHtcbiAgICAgICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzLCB7fSwgW10sIHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaFR1cm4ocGxheWVycyk7XG4gICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKTtcblxuICAgIC8vIENvbXB1dGVyIEF0dGFja1xuICAgIFthdHRhY2tlZFBsYXllcl0gPSBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiAhcGxheWVyLm15VHVybik7XG4gICAgW2F0dGFja2luZ1BsYXllcl0gPSBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiBwbGF5ZXIubXlUdXJuKTtcbiAgICBpZiAoIWF0dGFja2luZ1BsYXllci5pc0h1bWFuKSB7XG4gICAgICAgIGNvbnN0IGF0dGFja0Nvb3JkaW5hdGUgPSBhdHRhY2tpbmdQbGF5ZXIuYXR0YWNrKGF0dGFja2VkUGxheWVyKTtcbiAgICAgICAgbWFrZUF0dGFjayhwbGF5ZXJzLCBhdHRhY2tDb29yZGluYXRlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckdhbWVCb2FyZHMocGxheWVycywgZHJhZ0RhdGEgPSB7fSwgcHJlc2VydmVkQ29vcmRzID0gW10sIGdhbWVPdmVyID0gZmFsc2UpIHtcbiAgICBjb25zdCBbcGxheWVyMSwgcGxheWVyMl0gPSBwbGF5ZXJzXG4gICAgY29uc3QgcGxheWVyVnNDb21wdXRlciA9ICEocGxheWVyMS5pc0h1bWFuICYmIHBsYXllcjIuaXNIdW1hbilcbiAgICBjb25zdCBwbGF5ZXJQbGFjaW5nU2hpcHMgPSBwbGF5ZXJzLmZpbmQoKHBsYXllcikgPT4gIXBsYXllci5pc1JlYWR5KTtcblxuICAgIHBsYXllcnMuZm9yRWFjaCgocGxheWVyLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBib2FyZE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyJHtpbmRleCArIDF9LWJvYXJkYCk7XG4gICAgICAgIGNvbnN0IGhpdENvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkLmhpdEF0dGFja3M7XG4gICAgICAgIGNvbnN0IG1pc3NlZENvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkLm1pc3NlZEF0dGFja3M7XG4gICAgICAgIGNvbnN0IHRpbGVzID0gW107XG4gICAgICAgIHBsYXllci5ib2FyZC5zdGF0ZS5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sdW1uLCBjb2x1bW5JbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcmVzZXJ2ZWRDb29yZHMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0pKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHAke2luZGV4ICsgMX0tJHtyb3dJbmRleH0tJHtjb2x1bW5JbmRleH1gKVxuICAgICAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBEcm9wcGFibGUgdGlsZVxuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyID09PSBwbGF5ZXJQbGFjaW5nU2hpcHMgJiYgcGxheWVyLmlzSHVtYW4gJiYgcGxheWVyLmJvYXJkLnZhbGlkU2hpcFBsYWNlbWVudChwbGF5ZXIuYm9hcmQuZ2V0Q29vcmRzRnJvbVN0YXJ0aW5nQ29vcmQoW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0sIGRyYWdEYXRhLnNoaXAub3JpZW50YXRpb24sIGRyYWdEYXRhLnNoaXAubGVuZ3RoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BwYWJsZUhvdmVyRmVlZGJhY2sodGlsZSwgZHJhZ0RhdGEsIHBsYXllciwgaW5kZXggKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcHBhYmxlRnJvbUluc2lkZSh0aWxlLCBkcmFnRGF0YSwgcGxheWVyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGlsZXMucHVzaCh0aWxlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpbGUuaWQgPSBgcCR7aW5kZXggKyAxfS0ke3Jvd0luZGV4fS0ke2NvbHVtbkluZGV4fWBcblxuICAgICAgICAgICAgICAgICAgICAvLyBEcmFnZ2FibGUgdGlsZVxuICAgICAgICAgICAgICAgICAgICBpZiAoY29sdW1uICYmIHBsYXllciA9PT0gcGxheWVyUGxhY2luZ1NoaXBzICYmIHBsYXllci5pc0h1bWFuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVGcm9tSW5zaWRlKHRpbGUsIHBsYXllciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcylcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIERyb3BwYWJsZSB0aWxlXG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkcmFnRGF0YSkubGVuZ3RoID4gMCAmJiAhY29sdW1uICYmIHBsYXllciA9PT0gcGxheWVyUGxhY2luZ1NoaXBzICYmIHBsYXllci5pc0h1bWFuICYmIHBsYXllci5ib2FyZC52YWxpZFNoaXBQbGFjZW1lbnQocGxheWVyLmJvYXJkLmdldENvb3Jkc0Zyb21TdGFydGluZ0Nvb3JkKFtyb3dJbmRleCwgY29sdW1uSW5kZXhdLCBkcmFnRGF0YS5zaGlwLm9yaWVudGF0aW9uLCBkcmFnRGF0YS5zaGlwLmxlbmd0aCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wcGFibGVIb3ZlckZlZWRiYWNrKHRpbGUsIGRyYWdEYXRhLCBwbGF5ZXIsIGluZGV4ICsgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkcmFnRGF0YS5vcmlnaW4gPT09ICdpbnNpZGVCb2FyZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wcGFibGVGcm9tSW5zaWRlKHRpbGUsIGRyYWdEYXRhLCBwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRyYWdEYXRhLm9yaWdpbiA9PT0gJ291dHNpZGVCb2FyZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wcGFibGVGcm9tT3V0c2lkZSh0aWxlLCBkcmFnRGF0YSwgcGxheWVyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHVwZGF0ZSBzaGlwJ3Mgb3JpZW50YXRpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtbiAmJiBwbGF5ZXIuaXNIdW1hbiAmJiBwbGF5ZXIgPT09IHBsYXllclBsYWNpbmdTaGlwcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBzd2l0Y2hTaGlwT3JpZW50YXRpb24oZSwgcGxheWVyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBDb25kaXRpb25zIGZvciBkaXNwbGF5aW5nIHNoaXBzXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW4gJiYgcGxheWVyLmlzSHVtYW4gJiYgKHBsYXllclZzQ29tcHV0ZXIgfHwgIXBsYXllci5pc1JlYWR5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbmRpdGlvbnMgZm9yIGFsbG93aW5nIGF0dGFjayBvbiB0aWxlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWR5ID0gcGxheWVycy5ldmVyeSgocCkgPT4gcC5pc1JlYWR5KVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVhZHkgJiYgIXBsYXllci5teVR1cm4gJiYgcGxheWVyLmJvYXJkLmlzQXR0YWNrYWJsZShbcm93SW5kZXgsIGNvbHVtbkluZGV4XSkgJiYgKCFwbGF5ZXIuaXNIdW1hbiB8fCAhcGxheWVyVnNDb21wdXRlcikgJiYgIWdhbWVPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0gW3Jvd0luZGV4LCBjb2x1bW5JbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZUF0dGFjayhwbGF5ZXJzLCBjb29yZGluYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRpbGVzLnB1c2godGlsZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBib2FyZE5vZGUucmVwbGFjZUNoaWxkcmVuKC4uLnRpbGVzKTtcblxuICAgICAgICBoaXRDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcCR7aW5kZXggKyAxfS0ke3Jvd30tJHtjb2x1bW59YCk7XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICB9KVxuICAgICAgICBtaXNzZWRDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcCR7aW5kZXggKyAxfS0ke3Jvd30tJHtjb2x1bW59YCk7XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0R2FtZShwbGF5ZXJzKSB7XG4gICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKVxuICAgIGNvbnN0IGJhdHRsZVNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlc2hpcC1jb250YWluZXInKTtcbiAgICBiYXR0bGVTaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZWQnKTtcblxuICAgIGNvbnN0IFtwbGF5ZXIxLCBwbGF5ZXIyXSA9IHBsYXllcnNcbiAgICBjcmVhdGVSYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uKHBsYXllcjEsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpXG4gICAgY3JlYXRlRHJhZ2dhYmxlU2hpcEVsZW1lbnRzKHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpXG4gICAgYXdhaXQgZmluaXNoZWRQbGFjaW5nU2hpcHMocGxheWVyMSlcbiAgICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpXG5cbiAgICBpZiAocGxheWVyMi5pc0h1bWFuKSB7XG4gICAgICAgIGNyZWF0ZVJhbmRvbVNoaXBQbGFjZW1lbnRCdXR0b24ocGxheWVyMiwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcylcbiAgICAgICAgY3JlYXRlRHJhZ2dhYmxlU2hpcEVsZW1lbnRzKHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpXG4gICAgICAgIGF3YWl0IGZpbmlzaGVkUGxhY2luZ1NoaXBzKHBsYXllcjIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJhbmRvbVNoaXBQbGFjZW1lbnQocGxheWVyMiwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcylcbiAgICAgICAgcGxheWVyMi5yZWFkeVVwKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKVxufSIsImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZnVuY3Rpb24gZHJhZ2dlZEZyb21JbnNpZGVCb2FyZChlLCBwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpIHtcbiAgICBjb25zdCBjb29yZGluYXRlID0gZS50YXJnZXQuaWQuc3BsaXQoJy0nKS5zbGljZSgtMikubWFwKChudW1iZXIpID0+IE51bWJlcihudW1iZXIpKTtcbiAgICBjb25zdCB0aGVTaGlwID0gcGxheWVyLmJvYXJkLmdldFNoaXBBdChjb29yZGluYXRlKTtcblxuICAgIGNvbnN0IGdob3N0U2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdob3N0U2hpcC5pZCA9ICdnaG9zdC1zaGlwJ1xuXG4gICAgaWYgKHRoZVNoaXAub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgZ2hvc3RTaGlwLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgICAgIGdob3N0U2hpcC5zdHlsZS5oZWlnaHQgPSBgJHt0aGVTaGlwLmxlbmd0aCAqIDI1fXB4YDtcbiAgICB9IGVsc2UgaWYgKHRoZVNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBnaG9zdFNoaXAuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICAgICAgICBnaG9zdFNoaXAuc3R5bGUud2lkdGggPSBgJHt0aGVTaGlwLmxlbmd0aCAqIDI1fXB4YDtcbiAgICB9XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlU2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBnaG9zdFNoaXBCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZ2hvc3RTaGlwQm9keS5jbGFzc0xpc3QuYWRkKCdnaG9zdC1zaGlwLWJvZHknKTtcblxuICAgICAgICBnaG9zdFNoaXAuYXBwZW5kQ2hpbGQoZ2hvc3RTaGlwQm9keSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnaG9zdFNoaXApO1xuICAgIGUuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShnaG9zdFNoaXAsIDAsIDApO1xuXG4gICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkLmdldFNoaXBDb29yZGluYXRlcyh0aGVTaGlwKTtcbiAgICBjb25zdCBwcmVzZXJ2ZWRDb29yZGluYXRlcyA9IHNoaXBDb29yZGluYXRlcy5tYXAoKGNvb3JkKSA9PiBKU09OLnN0cmluZ2lmeShjb29yZCkpO1xuXG4gICAgcGxheWVyLmJvYXJkLnJlbW92ZVBsYWNlZFNoaXAoc2hpcENvb3JkaW5hdGVzKTtcblxuICAgIHJlbmRlckdhbWVCb2FyZHMocGxheWVycywgeyAnb3JpZ2luJzogJ2luc2lkZUJvYXJkJywgJ3NoaXAnOiB0aGVTaGlwIH0sIHByZXNlcnZlZENvb3JkaW5hdGVzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhZ2dhYmxlRnJvbUluc2lkZSh0aWxlLCBwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpIHtcbiAgICB0aWxlLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XG4gICAgICAgIGRyYWdnZWRGcm9tSW5zaWRlQm9hcmQoZSwgcGxheWVyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKTtcbiAgICB9KVxuXG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgZ2hvc3RTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dob3N0LXNoaXAnKVxuICAgICAgICBpZiAoZ2hvc3RTaGlwLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGdob3N0U2hpcC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGdob3N0U2hpcCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBwbGF5ZXIuYm9hcmQucmVzdG9yZVN0YXRlKCk7XG4gICAgICAgICAgICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZHJhZ2dlZEZyb21PdXRzaWRlQm9hcmQoZSwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykge1xuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICBjb25zdCByZSA9IC9sZW5ndGgtKFxcZCkvO1xuICAgIGxldCBzaGlwTGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZS50YXJnZXQuY2xhc3NMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChyZS50ZXN0KGUudGFyZ2V0LmNsYXNzTGlzdFtpXSkpIHtcbiAgICAgICAgICAgIHNoaXBMZW5ndGggPSBOdW1iZXIoZS50YXJnZXQuY2xhc3NMaXN0W2ldLnNwbGl0KCctJylbMV0pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG5ld1NoaXAgPSBzaGlwKHNoaXBMZW5ndGgpXG5cbiAgICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMsIHsgJ29yaWdpbic6ICdvdXRzaWRlQm9hcmQnLCAnc2hpcCc6IG5ld1NoaXAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdnYWJsZUZyb21PdXRzaWRlKHNoaXBDb250YWluZXJFbGVtZW50LCBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykge1xuICAgIHNoaXBDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XG4gICAgICAgIGRyYWdnZWRGcm9tT3V0c2lkZUJvYXJkKGUsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpO1xuICAgIH0pO1xuXG4gICAgc2hpcENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgIGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGUudGFyZ2V0KVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZHJvcHBlZEZyb21JbnNpZGVCb2FyZChkcmFnRGF0YSwgcGxheWVyLCBlLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKSB7XG4gICAgY29uc3QgdGhlU2hpcCA9IGRyYWdEYXRhLnNoaXBcblxuICAgIGNvbnN0IHN0YXJ0aW5nQ29vcmRpbmF0ZSA9IGUudGFyZ2V0LmlkLnNwbGl0KCctJykuc2xpY2UoLTIpLm1hcCgobnVtYmVyKSA9PiBOdW1iZXIobnVtYmVyKSk7XG4gICAgcGxheWVyLmJvYXJkLnBsYWNlU2hpcCh0aGVTaGlwLCBzdGFydGluZ0Nvb3JkaW5hdGUpXG5cbiAgICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJvcHBhYmxlRnJvbUluc2lkZSh0aWxlLCBkcmFnRGF0YSwgcGxheWVyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKSB7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcbiAgICB9KVxuXG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkcm9wcGVkRnJvbUluc2lkZUJvYXJkKGRyYWdEYXRhLCBwbGF5ZXIsIGUsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRyb3BwZWRGcm9tT3V0c2lkZUJvYXJkKGRyYWdEYXRhLCBwbGF5ZXIsIGUsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpIHtcbiAgICBjb25zdCBzdGFydGluZ0Nvb3JkaW5hdGUgPSBlLnRhcmdldC5pZC5zcGxpdCgnLScpLnNsaWNlKC0yKS5tYXAoKG51bWJlcikgPT4gTnVtYmVyKG51bWJlcikpO1xuICAgIHBsYXllci5ib2FyZC5wbGFjZVNoaXAoZHJhZ0RhdGEuc2hpcCwgc3RhcnRpbmdDb29yZGluYXRlKTtcblxuICAgIGlmIChwbGF5ZXIuYm9hcmQuYWxsU2hpcHNQbGFjZWQoKSkge1xuICAgICAgICBjb25zdCByZWFkeVVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlYWR5LXVwJyk7XG4gICAgICAgIHJlYWR5VXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlZCcpO1xuICAgIH1cblxuICAgIHJlbmRlckdhbWVCb2FyZHMocGxheWVycyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcm9wcGFibGVGcm9tT3V0c2lkZSh0aWxlLCBkcmFnRGF0YSwgcGxheWVyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKSB7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcbiAgICB9KVxuXG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkcm9wcGVkRnJvbU91dHNpZGVCb2FyZChkcmFnRGF0YSwgcGxheWVyLCBlLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKTtcbiAgICB9KVxufVxuXG5jb25zdCBwcmV2aW91c0Nvb3JkaW5hdGVzUXVldWUgPSBbXTtcbmV4cG9ydCBmdW5jdGlvbiBkcm9wcGFibGVIb3ZlckZlZWRiYWNrKHRpbGUsIGRyYWdEYXRhLCBwbGF5ZXIsIHBsYXllckluZGV4KSB7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBzdGFydGluZ0Nvb3JkaW5hdGUgPSBlLnRhcmdldC5pZC5zcGxpdCgnLScpLnNsaWNlKC0yKS5tYXAoKG51bWJlcikgPT4gTnVtYmVyKG51bWJlcikpO1xuICAgICAgICBjb25zdCB0aGVTaGlwID0gZHJhZ0RhdGEuc2hpcDtcbiAgICAgICAgY29uc3QgYWxsQ29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmQuZ2V0Q29vcmRzRnJvbVN0YXJ0aW5nQ29vcmQoc3RhcnRpbmdDb29yZGluYXRlLCB0aGVTaGlwLm9yaWVudGF0aW9uLCB0aGVTaGlwLmxlbmd0aCk7XG5cbiAgICAgICAgYWxsQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGU7XG4gICAgICAgICAgICBjb25zdCBob3ZlcmVkVGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwJHtwbGF5ZXJJbmRleH0tJHtyb3d9LSR7Y29sdW1ufWApO1xuICAgICAgICAgICAgaG92ZXJlZFRpbGUuY2xhc3NMaXN0LmFkZCgndmFsaWQtcGxhY2VtZW50Jyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgd2hpbGUgKHByZXZpb3VzQ29vcmRpbmF0ZXNRdWV1ZS5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgcHJldmlvdXNDb29yZGluYXRlc1F1ZXVlLnNoaWZ0KClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHJpbmdpZmllZENvb3JkcyA9IGFsbENvb3JkaW5hdGVzLm1hcCgoY29vcmRpbmF0ZSkgPT4gSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZSkpXG4gICAgICAgIHByZXZpb3VzQ29vcmRpbmF0ZXNRdWV1ZS5wdXNoKHN0cmluZ2lmaWVkQ29vcmRzKVxuICAgIH0pXG5cbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsICgpID0+IHtcbiAgICAgICAgbGV0IHByZXZpb3VzQ29vcmRpbmF0ZXM7XG4gICAgICAgIGxldCBjdXJyZW50Q29vcmRpbmF0ZXM7XG4gICAgICAgIGlmIChwcmV2aW91c0Nvb3JkaW5hdGVzUXVldWUubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcHJldmlvdXNDb29yZGluYXRlcyA9IHByZXZpb3VzQ29vcmRpbmF0ZXNRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgW2N1cnJlbnRDb29yZGluYXRlc10gPSBwcmV2aW91c0Nvb3JkaW5hdGVzUXVldWU7XG4gICAgICAgIH0gZWxzZSBpZiAocHJldmlvdXNDb29yZGluYXRlc1F1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIFtwcmV2aW91c0Nvb3JkaW5hdGVzXSA9IHByZXZpb3VzQ29vcmRpbmF0ZXNRdWV1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKHByZXZpb3VzQ29vcmRpbmF0ZXMgJiYgY3VycmVudENvb3JkaW5hdGVzKSkge1xuICAgICAgICAgICAgcHJldmlvdXNDb29yZGluYXRlcy5mb3JFYWNoKChwcmV2Q29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBKU09OLnBhcnNlKHByZXZDb29yZGluYXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBob3ZlcmVkVGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwJHtwbGF5ZXJJbmRleH0tJHtyb3d9LSR7Y29sdW1ufWApO1xuICAgICAgICAgICAgICAgIGhvdmVyZWRUaWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkLXBsYWNlbWVudCcpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByZXZpb3VzQ29vcmRpbmF0ZXMuZm9yRWFjaCgocHJldkNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gSlNPTi5wYXJzZShwcmV2Q29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaG92ZXJlZFRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcCR7cGxheWVySW5kZXh9LSR7cm93fS0ke2NvbHVtbn1gKTtcblxuICAgICAgICAgICAgICAgIGlmICghY3VycmVudENvb3JkaW5hdGVzLmluY2x1ZGVzKHByZXZDb29yZGluYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBob3ZlcmVkVGlsZS5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZC1wbGFjZW1lbnQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lQm9hcmQoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBbXTtcbiAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93ICs9IDEpIHtcbiAgICAgICAgc3RhdGUucHVzaChbXSk7XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wgKz0gMSkge1xuICAgICAgICAgICAgc3RhdGVbcm93XS5wdXNoKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlc3RvcmVTdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgc2hpcENvb3JkaW5hdGVzLmZvckVhY2goKHNoaXBPYmplY3QpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcE9iamVjdC5jb29yZGluYXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBzaGlwT2JqZWN0LmNvb3JkaW5hdGVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZVtyb3ddW2NvbHVtbl0gIT09IHNoaXBPYmplY3Quc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZVtyb3ddW2NvbHVtbl0gPSBzaGlwT2JqZWN0LnNoaXBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWRTaGlwUGxhY2VtZW50ID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBjb29yZGluYXRlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgICAgICAgICAgaWYgKHJvdyA8IDAgfHwgcm93ID4gOSB8fCBjb2x1bW4gPCAwIHx8IGNvbHVtbiA+IDkgfHwgc3RhdGVbcm93XVtjb2x1bW5dKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDb29yZHNGcm9tU3RhcnRpbmdDb29yZCA9IChmaXJzdENvb3JkaW5hdGUsIG9yaWVudGF0aW9uLCBzaGlwTGVuZ3RoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbZmlyc3RDb29yZGluYXRlWzBdLCBmaXJzdENvb3JkaW5hdGVbMV0gKyBpXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbZmlyc3RDb29yZGluYXRlWzBdICsgaSwgZmlyc3RDb29yZGluYXRlWzFdXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXNcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgZmlyc3RDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q29vcmRzRnJvbVN0YXJ0aW5nQ29vcmQoZmlyc3RDb29yZGluYXRlLCBzaGlwLm9yaWVudGF0aW9uLCBzaGlwLmxlbmd0aCk7XG5cbiAgICAgICAgaWYgKHZhbGlkU2hpcFBsYWNlbWVudChjb29yZGluYXRlcykpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc2hpcENvb3JkaW5hdGVzLmZpbmRJbmRleCgoc2hpcE9iamVjdCkgPT4gc2hpcE9iamVjdC5zaGlwID09PSBzaGlwKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgc2hpcENvb3JkaW5hdGVzW2luZGV4XS5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaCh7ICdzaGlwJzogc2hpcCwgJ2Nvb3JkaW5hdGVzJzogY29vcmRpbmF0ZXMgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgICAgICAgICAgICBzdGF0ZVtyb3ddW2NvbHVtbl0gPSBzaGlwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgYWxsU2hpcHNQbGFjZWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYWNlZFNoaXBzID0gW107XG4gICAgICAgIHN0YXRlLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb2x1bW4gJiYgIXBsYWNlZFNoaXBzLmluY2x1ZGVzKGNvbHVtbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VkU2hpcHMucHVzaChjb2x1bW4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcGxhY2VkU2hpcHMubGVuZ3RoID09PSA1O1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVBsYWNlZFNoaXBzID0gKCkgPT4ge1xuICAgICAgICBzdGF0ZS5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlW3Jvd0luZGV4XVtjb2xJbmRleF0gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHNoaXBDb29yZGluYXRlcy5zcGxpY2UoMCwgc2hpcENvb3JkaW5hdGVzLmxlbmd0aClcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQbGFjZWRTaGlwID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgICAgICAgICAgc3RhdGVbcm93XVtjb2x1bW5dID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UGxhY2VkU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzQXJyYXkgPSBbXTtcbiAgICAgICAgc2hpcENvb3JkaW5hdGVzLmZvckVhY2goKHNoaXBPYmplY3QpID0+IHtcbiAgICAgICAgICAgIHNoaXBzQXJyYXkucHVzaChzaGlwT2JqZWN0LnNoaXApO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gc2hpcHNBcnJheTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaGlwQXQgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgICAgY29uc3QgdGhlU2hpcCA9IHN0YXRlW3Jvd11bY29sdW1uXTtcbiAgICAgICAgcmV0dXJuIHRoZVNoaXBcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaGlwSGVhZENvb3JkaW5hdGUgPSAoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHNoaXBDb29yZGluYXRlcy5maW5kSW5kZXgoKHNoaXBPYmplY3QpID0+IHNoaXBPYmplY3Quc2hpcCA9PT0gc2hpcCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gc2hpcENvb3JkaW5hdGVzW2luZGV4XS5jb29yZGluYXRlc1swXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2hpcENvb3JkaW5hdGVzID0gKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzaGlwQ29vcmRpbmF0ZXMuZmluZEluZGV4KChzaGlwT2JqZWN0KSA9PiBzaGlwT2JqZWN0LnNoaXAgPT09IHNoaXApO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBDb29yZGluYXRlc1tpbmRleF0uY29vcmRpbmF0ZXNcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGhpdEF0dGFja3MgPSBbXTtcbiAgICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgICAgICBjb25zdCBib2FyZFRpbGUgPSBzdGF0ZVtyb3ddW2NvbHVtbl07XG4gICAgICAgIGlmIChib2FyZFRpbGUpIHtcbiAgICAgICAgICAgIGJvYXJkVGlsZS5oaXQoY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICBoaXRBdHRhY2tzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIG1pc3NlZEF0dGFja3MucHVzaChjb29yZGluYXRlKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZEF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgICAgICByZXR1cm4gcm93ID49IDAgJiYgcm93IDw9IDkgJiYgY29sdW1uID49IDAgJiYgY29sdW1uIDw9IDk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNBdHRhY2thYmxlID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgYWxsQXR0YWNrcyA9IGhpdEF0dGFja3MuY29uY2F0KG1pc3NlZEF0dGFja3MpLm1hcCgoYXR0YWNrKSA9PiBKU09OLnN0cmluZ2lmeShhdHRhY2spKTtcbiAgICAgICAgcmV0dXJuICFhbGxBdHRhY2tzLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGUpKSAmJiB2YWxpZEF0dGFjayhjb29yZGluYXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gZ2V0UGxhY2VkU2hpcHMoKTtcbiAgICAgICAgcmV0dXJuIHNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKVxuICAgIH1cblxuICAgIHJldHVybiB7IHJlc3RvcmVTdGF0ZSwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTdW5rLCBpc0F0dGFja2FibGUsIGFsbFNoaXBzUGxhY2VkLCByZW1vdmVQbGFjZWRTaGlwcywgcmVtb3ZlUGxhY2VkU2hpcCwgZ2V0U2hpcEF0LCBnZXRTaGlwSGVhZENvb3JkaW5hdGUsIGdldFNoaXBDb29yZGluYXRlcywgZ2V0Q29vcmRzRnJvbVN0YXJ0aW5nQ29vcmQsIHZhbGlkU2hpcFBsYWNlbWVudCwgc3RhdGUsIGhpdEF0dGFja3MsIG1pc3NlZEF0dGFja3MgfVxufVxuIiwiaW1wb3J0IHsgaHVtYW4sIGNvbXB1dGVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgZGlzcGxheU1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi9iYXR0bGVzaGlwXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4vKlxuMS4gTWVudSBzY3JlZW4gKFBsYXllciB2IFBsYXllciwgUGxheWVyIHYgQ29tcHV0ZXIpXG4xYS4gTmV3IGdhbWUgdnMgbG9hZCBnYW1lIGZlYXR1cmVcbjIuIFxuKi9cblxuLy8gQ2FsbGVkIG9uIHJlZnJlc2ggaWYgdGhlcmUgaXMgbm90aGluZyBpbiBsb2NhbCBzdG9yYWdlXG4vLyBPciBvbiAnUGxheSBhZ2FpbicgYnV0dG9uXG5zdGFydEdhbWUoYXdhaXQgZGlzcGxheU1lbnUoaHVtYW4sIGNvbXB1dGVyKSkiLCJmdW5jdGlvbiByZW1vdmVNZW51KGJvZHkpIHtcbiAgICBib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW1vZGUtY29udGFpbmVyJykpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlNZW51KGh1bWFuLCBjb21wdXRlcikge1xuICAgIGNvbnN0IGdhbWVNb2RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHZwTW9kZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHB2cE1vZGVCdG4udGV4dENvbnRlbnQgPSAnUGxheWVyIHZzLiBQbGF5ZXInO1xuICAgIGNvbnN0IHB2Y01vZGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwdmNNb2RlQnRuLnRleHRDb250ZW50ID0gJ1BsYXllciB2cy4gQ29tcHV0ZXInO1xuICAgIGdhbWVNb2RlQ29udGFpbmVyLmFwcGVuZENoaWxkKHB2cE1vZGVCdG4pO1xuICAgIGdhbWVNb2RlQ29udGFpbmVyLmFwcGVuZENoaWxkKHB2Y01vZGVCdG4pO1xuXG4gICAgZ2FtZU1vZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZS1tb2RlLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGdhbWVNb2RlQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBwdnBNb2RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlTWVudShib2R5KVxuICAgICAgICAgICAgcmVzb2x2ZShbaHVtYW4odHJ1ZSksIGh1bWFuKCldKTtcbiAgICAgICAgfSlcblxuICAgICAgICBwdmNNb2RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlTWVudShib2R5KVxuICAgICAgICAgICAgcmVzb2x2ZShbaHVtYW4odHJ1ZSksIGNvbXB1dGVyKCldKTtcbiAgICAgICAgfSlcbiAgICB9KVxufSIsImltcG9ydCB7IGRyYWdnYWJsZUZyb21PdXRzaWRlIH0gZnJvbSBcIi4vZHJhZ0FuZERyb3BcIjtcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5pc2hlZFBsYWNpbmdTaGlwcyhwbGF5ZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZHlVcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWFkeS11cCcpO1xuICAgICAgICByZWFkeVVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVhZHlVcEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmVkJyk7XG4gICAgICAgICAgICBwbGF5ZXIucmVhZHlVcCgpO1xuICAgICAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVNoaXBQbGFjZW1lbnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9tLXNoaXAtcGxhY2VtZW50Jyk7XG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKHJhbmRvbVNoaXBQbGFjZW1lbnRCdXR0b24pO1xuXG4gICAgICAgICAgICBjb25zdCByZWFkeVVwQnV0dG9uQ2xvbmUgPSByZWFkeVVwQnV0dG9uLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIHJlYWR5VXBCdXR0b24ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocmVhZHlVcEJ1dHRvbkNsb25lLCByZWFkeVVwQnV0dG9uKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tU2hpcFBsYWNlbWVudChwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpIHtcbiAgICBwbGF5ZXIuYm9hcmQucmVtb3ZlUGxhY2VkU2hpcHMoKTtcbiAgICBjb25zdCBzaGlwT3JpZW50YXRpb25zID0gWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ107XG5cbiAgICBbNSwgNCwgMywgMywgMl0uZm9yRWFjaCgobGVuZ3RoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYWNlbWVudFBvb2wgPSBbXVxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93ICs9IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wgKz0gMSkge1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudFBvb2wucHVzaChbcm93LCBjb2xdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJhbmRvbU9yaWVudGF0aW9uID0gc2hpcE9yaWVudGF0aW9uc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcbiAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGxhY2VtZW50UG9vbC5sZW5ndGgpXG4gICAgICAgIHdoaWxlICghcGxheWVyLmJvYXJkLnBsYWNlU2hpcChzaGlwKGxlbmd0aCwgcmFuZG9tT3JpZW50YXRpb24pLCBwbGFjZW1lbnRQb29sW3JhbmRvbUluZGV4XSkpIHtcbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGxhY2VtZW50UG9vbC5sZW5ndGgpXG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICBpZiAocGxheWVyLmlzSHVtYW4gJiYgcGxheWVyLmJvYXJkLmFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICAgICAgY29uc3QgcmVhZHlVcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWFkeS11cCcpO1xuICAgICAgICByZWFkeVVwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZWQnKTtcbiAgICB9XG5cbiAgICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uKHBsYXllciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykge1xuICAgIGNvbnN0IHJhbmRvbVNoaXBQbGFjZW1lbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgcmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyYW5kb20tc2hpcC1wbGFjZW1lbnQnKTtcbiAgICByYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uLnRleHRDb250ZW50ID0gJ1JhbmRvbWl6ZSBTaGlwcyEnXG4gICAgYm9keS5hcHBlbmRDaGlsZChyYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uKTtcblxuICAgIHJhbmRvbVNoaXBQbGFjZW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByYW5kb21TaGlwUGxhY2VtZW50KHBsYXllciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykpXG4gICAgcmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dhYmxlLXNoaXBzLWNvbnRhaW5lcicpO1xuICAgICAgICB3aGlsZSAoZHJhZ2dhYmxlU2hpcHNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIucmVtb3ZlQ2hpbGQoZHJhZ2dhYmxlU2hpcHNDb250YWluZXIuZmlyc3RDaGlsZClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEcmFnZ2FibGVTaGlwRWxlbWVudHMocGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykge1xuICAgIGNvbnN0IGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnYWJsZS1zaGlwcy1jb250YWluZXInKTtcbiAgICBbNSwgNCwgMywgMywgMl0uZm9yRWFjaCgobGVuZ3RoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXBDb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NoaXAtY29udGFpbmVyJywgYGxlbmd0aC0ke2xlbmd0aH1gKTtcbiAgICAgICAgc2hpcENvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuXG4gICAgICAgIGRyYWdnYWJsZUZyb21PdXRzaWRlKHNoaXBDb250YWluZXJFbGVtZW50LCBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcylcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc2hpcEJvZHkuY2xhc3NMaXN0LmFkZCgnc2hpcC1ib2R5Jyk7XG4gICAgICAgICAgICBzaGlwQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzaGlwQm9keSk7XG4gICAgICAgIH1cblxuICAgICAgICBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQ29udGFpbmVyRWxlbWVudCk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFNoaXBPcmllbnRhdGlvbihlLCBwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpIHtcbiAgICBjb25zdCBjb29yZGluYXRlID0gZS50YXJnZXQuaWQuc3BsaXQoJy0nKS5zbGljZSgtMikubWFwKChudW1iZXIpID0+IE51bWJlcihudW1iZXIpKTtcbiAgICBjb25zdCB0aGVTaGlwID0gcGxheWVyLmJvYXJkLmdldFNoaXBBdChjb29yZGluYXRlKTtcbiAgICBjb25zdCBzaGlwSGVhZENvb3JkaW5hdGUgPSBwbGF5ZXIuYm9hcmQuZ2V0U2hpcEhlYWRDb29yZGluYXRlKHRoZVNoaXApO1xuICAgIGNvbnN0IHN3aXRjaGVkT3JpZW50YXRpb24gPSB0aGVTaGlwLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcblxuICAgIGNvbnN0IHN3aXRjaGVkU2hpcENvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkLmdldENvb3Jkc0Zyb21TdGFydGluZ0Nvb3JkKHNoaXBIZWFkQ29vcmRpbmF0ZSwgc3dpdGNoZWRPcmllbnRhdGlvbiwgdGhlU2hpcC5sZW5ndGgpLnNsaWNlKDEpO1xuICAgIGlmIChwbGF5ZXIuYm9hcmQudmFsaWRTaGlwUGxhY2VtZW50KHN3aXRjaGVkU2hpcENvb3JkaW5hdGVzKSkge1xuICAgICAgICB0aGVTaGlwLm9yaWVudGF0aW9uID0gc3dpdGNoZWRPcmllbnRhdGlvbjtcbiAgICAgICAgcGxheWVyLmJvYXJkLnJlbW92ZVBsYWNlZFNoaXAocGxheWVyLmJvYXJkLmdldFNoaXBDb29yZGluYXRlcyh0aGVTaGlwKSk7XG4gICAgICAgIHBsYXllci5ib2FyZC5wbGFjZVNoaXAodGhlU2hpcCwgc2hpcEhlYWRDb29yZGluYXRlKTtcblxuICAgICAgICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpO1xuICAgIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuXG5mdW5jdGlvbiBwbGF5ZXIoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBnYW1lQm9hcmQoKTtcblxuICAgIGNvbnN0IGlzUmVhZHkgPSBmYWxzZVxuICAgIGNvbnN0IHJlYWR5VXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc3dpdGNoVHVybiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5teVR1cm4gPSAhdGhpcy5teVR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcmVhZHlVcCwgc3dpdGNoVHVybiwgYm9hcmQsIGlzUmVhZHkgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaHVtYW4obXlUdXJuID0gZmFsc2UpIHtcbiAgICBjb25zdCBuYW1lID0gbXlUdXJuID8gJ1BsYXllciAxJyA6ICdQbGF5ZXIgMidcbiAgICBjb25zdCBpc0h1bWFuID0gdHJ1ZTtcblxuICAgIHJldHVybiB7IC4uLnBsYXllcigpLCBpc0h1bWFuLCBteVR1cm4sIG5hbWUgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZXIobXlUdXJuID0gZmFsc2UpIHtcbiAgICBjb25zdCBuYW1lID0gJ1BsYXllciAyJztcbiAgICBjb25zdCBpc0h1bWFuID0gZmFsc2U7XG5cbiAgICBsZXQgaW5pdGlhbEhpdCA9IG51bGw7XG4gICAgbGV0IHByZXZpb3VzQXR0YWNrSGl0ID0gZmFsc2U7XG4gICAgbGV0IGhpdEhpc3RvcnkgPSBbXTtcbiAgICBsZXQgYXR0YWNrU3RhY2sgPSBbXTtcbiAgICBjb25zdCBhdHRhY2sgPSBmdW5jdGlvbiAob3Bwb25lbnQpIHtcbiAgICAgICAgaWYgKGluaXRpYWxIaXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dGFja2VkU2hpcCA9IG9wcG9uZW50LmJvYXJkLmdldFNoaXBBdChpbml0aWFsSGl0KTtcbiAgICAgICAgICAgIGlmIChhdHRhY2tlZFNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdW5rU2hpcENvb3JkaW5hdGVzID0gYXR0YWNrZWRTaGlwLmhpdENvb3JkaW5hdGVzLm1hcCgoaGl0Q29vcmRpbmF0ZSkgPT4gSlNPTi5zdHJpbmdpZnkoaGl0Q29vcmRpbmF0ZSkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ0Nvb3JkaW5hdGVzID0gW107XG4gICAgICAgICAgICAgICAgaGl0SGlzdG9yeS5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc3Vua1NoaXBDb29yZGluYXRlcy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShjb29yZGluYXRlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ0Nvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGhpdEhpc3RvcnkgPSByZW1haW5pbmdDb29yZGluYXRlcztcbiAgICAgICAgICAgICAgICBhdHRhY2tTdGFjayA9IFtdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhpdEhpc3RvcnkubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbEhpdCA9IGhpdEhpc3RvcnkucG9wKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbEhpdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluaXRpYWxIaXQgJiYgYXR0YWNrU3RhY2subGVuZ3RoID09PSAwICYmIGhpdEhpc3RvcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NzaWJsZUF0dGFja3MgPSBbXVxuICAgICAgICAgICAgcG9zc2libGVBdHRhY2tzLnB1c2goW2luaXRpYWxIaXRbMF0sIGluaXRpYWxIaXRbMV0gKyAxXSk7XG4gICAgICAgICAgICBwb3NzaWJsZUF0dGFja3MucHVzaChbaW5pdGlhbEhpdFswXSwgaW5pdGlhbEhpdFsxXSAtIDFdKTtcbiAgICAgICAgICAgIHBvc3NpYmxlQXR0YWNrcy5wdXNoKFtpbml0aWFsSGl0WzBdICsgMSwgaW5pdGlhbEhpdFsxXV0pO1xuICAgICAgICAgICAgcG9zc2libGVBdHRhY2tzLnB1c2goW2luaXRpYWxIaXRbMF0gLSAxLCBpbml0aWFsSGl0WzFdXSk7XG4gICAgICAgICAgICBwb3NzaWJsZUF0dGFja3MuZm9yRWFjaCgocG9zc2libGVBdHRhY2spID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmQuaXNBdHRhY2thYmxlKHBvc3NpYmxlQXR0YWNrKSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2tTdGFjay5wdXNoKHBvc3NpYmxlQXR0YWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxIaXQgJiYgaGl0SGlzdG9yeS5sZW5ndGggPj0gMSAmJiBwcmV2aW91c0F0dGFja0hpdCkge1xuICAgICAgICAgICAgY29uc3QgbmV3SGl0ID0gaGl0SGlzdG9yeVtoaXRIaXN0b3J5Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgY29uc3QgeDEgPSBpbml0aWFsSGl0WzFdO1xuICAgICAgICAgICAgY29uc3QgeTEgPSBpbml0aWFsSGl0WzBdO1xuICAgICAgICAgICAgY29uc3QgeDIgPSBuZXdIaXRbMV07XG4gICAgICAgICAgICBjb25zdCB5MiA9IG5ld0hpdFswXTtcblxuICAgICAgICAgICAgY29uc3QgeERpZmYgPSB4MSAtIHgyO1xuICAgICAgICAgICAgY29uc3QgeURpZmYgPSB5MSAtIHkyO1xuXG4gICAgICAgICAgICBpZiAoeERpZmYgPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgICAgICAgICBjb25zdCByaWdodE9uZSA9IFtuZXdIaXRbMF0sIG5ld0hpdFsxXSArIDFdO1xuICAgICAgICAgICAgICAgIGlmIChvcHBvbmVudC5ib2FyZC5pc0F0dGFja2FibGUocmlnaHRPbmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFja1N0YWNrLnB1c2gocmlnaHRPbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeERpZmYgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gbGVmdFxuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRPbmUgPSBbbmV3SGl0WzBdLCBuZXdIaXRbMV0gLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmQuaXNBdHRhY2thYmxlKGxlZnRPbmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFja1N0YWNrLnB1c2gobGVmdE9uZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh5RGlmZiA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyB1cFxuICAgICAgICAgICAgICAgIGNvbnN0IHVwT25lID0gW25ld0hpdFswXSArIDEsIG5ld0hpdFsxXV1cbiAgICAgICAgICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmQuaXNBdHRhY2thYmxlKHVwT25lKSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2tTdGFjay5wdXNoKHVwT25lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHlEaWZmID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIGRvd25cbiAgICAgICAgICAgICAgICBjb25zdCBkb3duT25lID0gW25ld0hpdFswXSAtIDEsIG5ld0hpdFsxXV07XG4gICAgICAgICAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkLmlzQXR0YWNrYWJsZShkb3duT25lKSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2tTdGFjay5wdXNoKGRvd25PbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRhY2tTdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrU3RhY2sucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dGFja1N0YWNrLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2tQb29sID0gW11cbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3cgKz0gMSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmQuaXNBdHRhY2thYmxlKFtyb3csIGNvbF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tQb29sLnB1c2goW3JvdywgY29sXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGF0dGFja1Bvb2wubGVuZ3RoIC0gMSkpXG4gICAgICAgICAgICBjb25zdCByYW5kb21BdHRhY2sgPSBhdHRhY2tQb29sW3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgIHJldHVybiByYW5kb21BdHRhY2tcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBsb2dBdHRhY2sgPSAoaXNIaXQsIGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgaWYgKGlzSGl0ICYmICFpbml0aWFsSGl0KSB7XG4gICAgICAgICAgICBpbml0aWFsSGl0ID0gY29vcmRpbmF0ZTtcbiAgICAgICAgICAgIHByZXZpb3VzQXR0YWNrSGl0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0hpdCkge1xuICAgICAgICAgICAgaGl0SGlzdG9yeS5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgcHJldmlvdXNBdHRhY2tIaXQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJldmlvdXNBdHRhY2tIaXQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IC4uLnBsYXllcigpLCBhdHRhY2ssIGxvZ0F0dGFjaywgaXNIdW1hbiwgbXlUdXJuLCBuYW1lIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlwKGxlbmd0aCwgb3JpZW50YXRpb24gPSAndmVydGljYWwnKSB7XG4gICAgY29uc3QgaGl0Q29vcmRpbmF0ZXMgPSBbXTtcblxuICAgIGNvbnN0IGhpdCA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGhpdENvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgICAgcmV0dXJuIGhpdENvb3JkaW5hdGVzXG4gICAgfVxuXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4gKGxlbmd0aCAtIGhpdENvb3JkaW5hdGVzLmxlbmd0aCkgPD0gMFxuXG4gICAgcmV0dXJuIHsgbGVuZ3RoLCBvcmllbnRhdGlvbiwgaGl0Q29vcmRpbmF0ZXMsIGhpdCwgaXNTdW5rIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwidmFyIHdlYnBhY2tRdWV1ZXMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiBxdWV1ZS5kIDwgMSkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrUXVldWVzXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRxdWV1ZS5kID0gMDtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFcnJvcl0gPSBlO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAtMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9LCAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSkpO1xuXHRxdWV1ZSAmJiBxdWV1ZS5kIDwgMCAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==