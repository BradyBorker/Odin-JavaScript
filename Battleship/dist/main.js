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

.tile:hover {
    background-color: lightblue;
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

#drag-ghost {
    position: absolute;
    top: -1000px;
    width: 25px;

    display: flex;
    flex-direction: column;
}

.ghost-ship-body {
    height: 100%;
    border: 1px solid white;
    background-color: black;
}

/* Cloned Boards */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;;IAEnB,8BAA8B;IAC9B,kHAAkH;IAClH,0DAA0D;IAC1D,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI;AACJ;;AAEA,SAAS;AACT;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA,oBAAoB;AACpB;IACI,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;;IAEI,YAAY;IACZ,iBAAiB;;IAEjB,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA,0BAA0B;AAC1B;IACI,WAAW;;IAEX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,uBAAuB;;IAEvB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;;IAEX,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA,kBAAkB","sourcesContent":["body {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    background: rgb(194, 178, 128);\n    background: linear-gradient(0deg, rgba(194, 178, 128, 1) 0%, rgba(194, 178, 128, 1) 0%, rgba(35, 137, 218, 1) 20%);\n    box-shadow: inset 0px 0px 23px 12px rgba(194, 178, 128, 1);\n    border: 2px inset #C2B280;\n}\n\n.removed {\n    display: none;\n}\n\n.hidden {\n    opacity: 0;\n    pointer-events: none;\n}\n\n.moving {\n    background-color: rgba(35, 137, 218, 1)\n}\n\n/* Menu */\n.game-mode-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n/* Battleship Game */\n.battleship-container {\n    max-width: 1200px;\n    position: relative;\n    z-index: 2;\n}\n\n.player-boards {\n    display: flex;\n    justify-content: space-between;\n}\n\n.player1-board,\n.player2-board {\n    width: 500px;\n    min-height: 500px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.tile {\n    border: 1px solid #005b72;\n}\n\n.tile:hover {\n    background-color: lightblue;\n}\n\n.tile.ship {\n    background-color: black;\n}\n\n.tile.hit {\n    background-color: red;\n}\n\n.tile.missed {\n    background-color: yellow;\n}\n\n/* Ship pieces container */\n.draggable-ships-container {\n    width: 50px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n}\n\n.ship-container {\n    width: 25px;\n    border: 1px solid white;\n    background-color: black;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.ship-body {\n    min-height: 25px;\n    border: 1px solid white;\n    background-color: black;\n}\n\n#drag-ghost {\n    position: absolute;\n    top: -1000px;\n    width: 25px;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.ghost-ship-body {\n    height: 100%;\n    border: 1px solid white;\n    background-color: black;\n}\n\n/* Cloned Boards */"],"sourceRoot":""}]);
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
                    const preservedCoordinate = preservedCoords.find((coord) => coord === JSON.stringify([rowIndex, columnIndex]))
                    const [preserveRow, preserveColumn] = JSON.parse(preservedCoordinate);
                    const tile = document.getElementById(`p${index + 1}-${preserveRow}-${preserveColumn}`)
                    tile.classList.remove('ship');

                    tiles.push(tile)
                } else {
                    const tile = document.createElement('div');
                    tile.classList.add('tile');
                    tile.id = `p${index + 1}-${rowIndex}-${columnIndex}`

                    // Draggable tile
                    if (column && player === playerPlacingShips && player.isHuman) {
                        tile.setAttribute('draggable', 'true');
                        tile.addEventListener('dragstart', (e) => {
                            (0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.draggedFromInsideBoard)(e, player, players, renderGameBoards);
                        })

                        tile.addEventListener('dragend', (e) => {
                            const ghostShip = document.querySelector('#drag-ghost')
                            if (ghostShip.parentElement) {
                                ghostShip.parentElement.removeChild(ghostShip);
                            }
                            console.log(e.dataTransfer.dropEffect)
                            if (e.dataTransfer.dropEffect === 'none') {
                                player.board.restoreState();
                                renderGameBoards(players);
                            }
                            console.log('end')
                        })
                    }

                    // Droppable tile
                    if (Object.keys(dragData).length > 0 && !column && player === playerPlacingShips && player.isHuman && player.board.validShipPlacement(player.board.getCoordsFromStartingCoord([rowIndex, columnIndex], dragData.shipOrientation, dragData.shipLength))) {
                        tile.addEventListener('dragover', (e) => {
                            e.preventDefault();
                            e.dataTransfer.dropEffect = 'move';
                        })

                        tile.addEventListener('drop', (e) => {
                            e.preventDefault();
                            if (dragData.origin === 'outsideBoard') {
                                (0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.droppedFromOutsideBoard)(dragData, player, e, players, renderGameBoards);
                            } else if (dragData.origin === 'insideBoard') {
                                // Find ship, remove from board, place on board
                                (0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.droppedFromInsideBoard)(dragData, player, e, players, renderGameBoards);
                            }
                        })
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
    ;(0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.createDraggableShipElements)(player1, players, renderGameBoards)
    await (0,_placeShips__WEBPACK_IMPORTED_MODULE_0__["default"])(player1)
    renderGameBoards(players)

    if (player2.isHuman) {
        (0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.createRandomShipPlacementButton)(player2, players, renderGameBoards)
        ;(0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.createDraggableShipElements)(player2, players, renderGameBoards)
        await (0,_placeShips__WEBPACK_IMPORTED_MODULE_0__["default"])(player2);
    } else {
        (0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.randomShipPlacement)(player2, players, renderGameBoards)
        player2.readyUp();
    }
    renderGameBoards(players)
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
/* harmony export */   draggedFromInsideBoard: () => (/* binding */ draggedFromInsideBoard),
/* harmony export */   droppedFromInsideBoard: () => (/* binding */ droppedFromInsideBoard),
/* harmony export */   droppedFromOutsideBoard: () => (/* binding */ droppedFromOutsideBoard),
/* harmony export */   randomShipPlacement: () => (/* binding */ randomShipPlacement)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


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

function displayReadyUpButton() {
    const readyUpButton = document.querySelector('.ready-up');
    readyUpButton.classList.remove('removed');
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
        while (!player.board.placeShip((0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length, randomOrientation), placementPool[randomIndex])) {
            randomIndex = Math.floor(Math.random() * placementPool.length)
        }

    })

    if (player.isHuman && player.board.allShipsPlaced()) {
        displayReadyUpButton();
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

function draggedFromInsideBoard(e, player, players, renderGameBoards) {
    const coordinate = e.target.id.split('-').slice(-2).map((number) => Number(number));
    const theShip = player.board.getShipAt(coordinate);

    const ghostShip = document.createElement('div');
    ghostShip.id = 'drag-ghost';
    ghostShip.style.height = `${theShip.length * 25}px`;

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

function droppedFromInsideBoard(dragData, player, e, players, renderGameBoards) {
    const theShip = dragData.ship

    const startingCoordinate = e.target.id.split('-').slice(-2).map((number) => Number(number));
    player.board.placeShip(theShip, startingCoordinate)

    renderGameBoards(players);
}

function draggedFromOutsideBoard(e, players, renderGameBoards) {
    e.dataTransfer.dropEffect = 'move'
    const re = /length-(\d)/;
    for (let i = 0; i < e.target.classList.length; i += 1) {
        if (re.test(e.target.classList[i])) {
            e.dataTransfer.setData('text/plain', e.target.classList[i].split('-')[1]);
            break
        }
    }

    renderGameBoards(players, { 'origin': 'outsideBoard', 'shipLength': Number(e.dataTransfer.getData('text/plain')), 'shipOrientation': 'vertical' })
}

function droppedFromOutsideBoard(dragData, player, e, players, renderGameBoards) {
    const startingCoordinate = e.target.id.split('-').slice(-2).map((number) => Number(number));
    player.board.placeShip((0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(dragData.shipLength, dragData.shipOrientation), startingCoordinate)

    if (player.board.allShipsPlaced()) {
        displayReadyUpButton();
    }

    renderGameBoards(players);
}

function createDraggableShipElements(player, players, renderGameBoards) {
    const draggableShipsContainer = document.querySelector('.draggable-ships-container');
    [5, 4, 3, 3, 2].forEach((length) => {
        const shipContainerElement = document.createElement('div');
        shipContainerElement.classList.add('ship-container', `length-${length}`);
        shipContainerElement.setAttribute('draggable', 'true');

        shipContainerElement.addEventListener('dragstart', (e) => {
            draggedFromOutsideBoard(e, players, renderGameBoards);
        });

        shipContainerElement.addEventListener('dragend', (e) => {
            if (e.dataTransfer.dropEffect !== 'none') {
                draggableShipsContainer.removeChild(e.target)
            }
        })

        for (let index = 0; index < length; index += 1) {
            const shipBody = document.createElement('div');
            shipBody.classList.add('ship-body');
            shipContainerElement.appendChild(shipBody);
        }

        draggableShipsContainer.appendChild(shipContainerElement);
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxDQUFDO1dBQ0Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBLHNHQUFzRztXQUN0RztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7Ozs7O1dDaEVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvYmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9wbGFjZVNoaXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk0LCAxNzgsIDEyOCk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTk0LCAxNzgsIDEyOCwgMSkgMCUsIHJnYmEoMTk0LCAxNzgsIDEyOCwgMSkgMCUsIHJnYmEoMzUsIDEzNywgMjE4LCAxKSAyMCUpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjNweCAxMnB4IHJnYmEoMTk0LCAxNzgsIDEyOCwgMSk7XG4gICAgYm9yZGVyOiAycHggaW5zZXQgI0MyQjI4MDtcbn1cblxuLnJlbW92ZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oaWRkZW4ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5tb3Zpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzUsIDEzNywgMjE4LCAxKVxufVxuXG4vKiBNZW51ICovXG4uZ2FtZS1tb2RlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuLyogQmF0dGxlc2hpcCBHYW1lICovXG4uYmF0dGxlc2hpcC1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4ucGxheWVyLWJvYXJkcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wbGF5ZXIxLWJvYXJkLFxuLnBsYXllcjItYm9hcmQge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi50aWxlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA1YjcyO1xufVxuXG4udGlsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufVxuXG4udGlsZS5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnRpbGUuaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi50aWxlLm1pc3NlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4vKiBTaGlwIHBpZWNlcyBjb250YWluZXIgKi9cbi5kcmFnZ2FibGUtc2hpcHMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNTBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLnNoaXAtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNoaXAtYm9keSB7XG4gICAgbWluLWhlaWdodDogMjVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuI2RyYWctZ2hvc3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xMDAwcHg7XG4gICAgd2lkdGg6IDI1cHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5naG9zdC1zaGlwLWJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLyogQ2xvbmVkIEJvYXJkcyAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLDhCQUE4QjtJQUM5QixrSEFBa0g7SUFDbEgsMERBQTBEO0lBQzFELHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjs7SUFFakIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUEsMEJBQTBCO0FBQzFCO0lBQ0ksV0FBVzs7SUFFWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix1QkFBdUI7O0lBRXZCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVzs7SUFFWCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUEsa0JBQWtCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk0LCAxNzgsIDEyOCk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpIDAlLCByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpIDAlLCByZ2JhKDM1LCAxMzcsIDIxOCwgMSkgMjAlKTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyM3B4IDEycHggcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcXG4gICAgYm9yZGVyOiAycHggaW5zZXQgI0MyQjI4MDtcXG59XFxuXFxuLnJlbW92ZWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5tb3Zpbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM1LCAxMzcsIDIxOCwgMSlcXG59XFxuXFxuLyogTWVudSAqL1xcbi5nYW1lLW1vZGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiBCYXR0bGVzaGlwIEdhbWUgKi9cXG4uYmF0dGxlc2hpcC1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnBsYXllcjEtYm9hcmQsXFxuLnBsYXllcjItYm9hcmQge1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi50aWxlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwNWI3MjtcXG59XFxuXFxuLnRpbGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbi50aWxlLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRpbGUuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udGlsZS5taXNzZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi8qIFNoaXAgcGllY2VzIGNvbnRhaW5lciAqL1xcbi5kcmFnZ2FibGUtc2hpcHMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaGlwLWJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbiNkcmFnLWdob3N0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0xMDAwcHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZ2hvc3Qtc2hpcC1ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIENsb25lZCBCb2FyZHMgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgZmluaXNoZWRQbGFjaW5nU2hpcHMsIHsgY3JlYXRlUmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbiwgcmFuZG9tU2hpcFBsYWNlbWVudCwgY3JlYXRlRHJhZ2dhYmxlU2hpcEVsZW1lbnRzLCBkcm9wcGVkRnJvbU91dHNpZGVCb2FyZCwgZHJhZ2dlZEZyb21JbnNpZGVCb2FyZCwgZHJvcHBlZEZyb21JbnNpZGVCb2FyZCB9IGZyb20gXCIuL3BsYWNlU2hpcHNcIjtcblxuZnVuY3Rpb24gc3dpdGNoVHVybihwbGF5ZXJzKSB7XG4gICAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgICAgcGxheWVyLnN3aXRjaFR1cm4oKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBpc0dhbWVPdmVyKHBsYXllcnMpIHtcbiAgICBjb25zdCBsb3NlciA9IHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+IHBsYXllci5ib2FyZC5hbGxTdW5rKCkpO1xuICAgIGlmIChsb3Nlci5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IFt3aW5uZXJdID0gcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gIXBsYXllci5ib2FyZC5hbGxTdW5rKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhgV2lubmVyOiAke3dpbm5lci5uYW1lfWApXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1ha2VBdHRhY2socGxheWVycywgY29vcmRpbmF0ZSkge1xuICAgIGxldCBbYXR0YWNrZWRQbGF5ZXJdID0gcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gIXBsYXllci5teVR1cm4pO1xuICAgIGxldCBbYXR0YWNraW5nUGxheWVyXSA9IHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+IHBsYXllci5teVR1cm4pO1xuXG4gICAgaWYgKCFhdHRhY2tpbmdQbGF5ZXIuaXNIdW1hbikge1xuICAgICAgICBhdHRhY2tpbmdQbGF5ZXIubG9nQXR0YWNrKGF0dGFja2VkUGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSksIGNvb3JkaW5hdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGF0dGFja2VkUGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGlzR2FtZU92ZXIocGxheWVycykpIHtcbiAgICAgICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzLCB7fSwgW10sIHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaFR1cm4ocGxheWVycyk7XG4gICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKTtcblxuICAgIC8vIENvbXB1dGVyIEF0dGFja1xuICAgIFthdHRhY2tlZFBsYXllcl0gPSBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiAhcGxheWVyLm15VHVybik7XG4gICAgW2F0dGFja2luZ1BsYXllcl0gPSBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiBwbGF5ZXIubXlUdXJuKTtcbiAgICBpZiAoIWF0dGFja2luZ1BsYXllci5pc0h1bWFuKSB7XG4gICAgICAgIGNvbnN0IGF0dGFja0Nvb3JkaW5hdGUgPSBhdHRhY2tpbmdQbGF5ZXIuYXR0YWNrKGF0dGFja2VkUGxheWVyKTtcbiAgICAgICAgbWFrZUF0dGFjayhwbGF5ZXJzLCBhdHRhY2tDb29yZGluYXRlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckdhbWVCb2FyZHMocGxheWVycywgZHJhZ0RhdGEgPSB7fSwgcHJlc2VydmVkQ29vcmRzID0gW10sIGdhbWVPdmVyID0gZmFsc2UpIHtcbiAgICBjb25zdCBbcGxheWVyMSwgcGxheWVyMl0gPSBwbGF5ZXJzXG4gICAgY29uc3QgcGxheWVyVnNDb21wdXRlciA9ICEocGxheWVyMS5pc0h1bWFuICYmIHBsYXllcjIuaXNIdW1hbilcbiAgICBjb25zdCBwbGF5ZXJQbGFjaW5nU2hpcHMgPSBwbGF5ZXJzLmZpbmQoKHBsYXllcikgPT4gIXBsYXllci5pc1JlYWR5KTtcblxuICAgIHBsYXllcnMuZm9yRWFjaCgocGxheWVyLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBib2FyZE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyJHtpbmRleCArIDF9LWJvYXJkYCk7XG4gICAgICAgIGNvbnN0IGhpdENvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkLmhpdEF0dGFja3M7XG4gICAgICAgIGNvbnN0IG1pc3NlZENvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkLm1pc3NlZEF0dGFja3M7XG4gICAgICAgIGNvbnN0IHRpbGVzID0gW107XG4gICAgICAgIHBsYXllci5ib2FyZC5zdGF0ZS5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sdW1uLCBjb2x1bW5JbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcmVzZXJ2ZWRDb29yZHMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0pKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVzZXJ2ZWRDb29yZGluYXRlID0gcHJlc2VydmVkQ29vcmRzLmZpbmQoKGNvb3JkKSA9PiBjb29yZCA9PT0gSlNPTi5zdHJpbmdpZnkoW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0pKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbcHJlc2VydmVSb3csIHByZXNlcnZlQ29sdW1uXSA9IEpTT04ucGFyc2UocHJlc2VydmVkQ29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcCR7aW5kZXggKyAxfS0ke3ByZXNlcnZlUm93fS0ke3ByZXNlcnZlQ29sdW1ufWApXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRpbGVzLnB1c2godGlsZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgICAgICB0aWxlLmlkID0gYHAke2luZGV4ICsgMX0tJHtyb3dJbmRleH0tJHtjb2x1bW5JbmRleH1gXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRHJhZ2dhYmxlIHRpbGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtbiAmJiBwbGF5ZXIgPT09IHBsYXllclBsYWNpbmdTaGlwcyAmJiBwbGF5ZXIuaXNIdW1hbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dlZEZyb21JbnNpZGVCb2FyZChlLCBwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnaG9zdFNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJhZy1naG9zdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdob3N0U2hpcC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdob3N0U2hpcC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGdob3N0U2hpcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuYm9hcmQucmVzdG9yZVN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckdhbWVCb2FyZHMocGxheWVycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbmQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIERyb3BwYWJsZSB0aWxlXG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkcmFnRGF0YSkubGVuZ3RoID4gMCAmJiAhY29sdW1uICYmIHBsYXllciA9PT0gcGxheWVyUGxhY2luZ1NoaXBzICYmIHBsYXllci5pc0h1bWFuICYmIHBsYXllci5ib2FyZC52YWxpZFNoaXBQbGFjZW1lbnQocGxheWVyLmJvYXJkLmdldENvb3Jkc0Zyb21TdGFydGluZ0Nvb3JkKFtyb3dJbmRleCwgY29sdW1uSW5kZXhdLCBkcmFnRGF0YS5zaGlwT3JpZW50YXRpb24sIGRyYWdEYXRhLnNoaXBMZW5ndGgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZHJhZ0RhdGEub3JpZ2luID09PSAnb3V0c2lkZUJvYXJkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wcGVkRnJvbU91dHNpZGVCb2FyZChkcmFnRGF0YSwgcGxheWVyLCBlLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRyYWdEYXRhLm9yaWdpbiA9PT0gJ2luc2lkZUJvYXJkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHNoaXAsIHJlbW92ZSBmcm9tIGJvYXJkLCBwbGFjZSBvbiBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wcGVkRnJvbUluc2lkZUJvYXJkKGRyYWdEYXRhLCBwbGF5ZXIsIGUsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBDb25kaXRpb25zIGZvciBkaXNwbGF5aW5nIHNoaXBzXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW4gJiYgcGxheWVyLmlzSHVtYW4gJiYgKHBsYXllclZzQ29tcHV0ZXIgfHwgIXBsYXllci5pc1JlYWR5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbmRpdGlvbnMgZm9yIGFsbG93aW5nIGF0dGFjayBvbiB0aWxlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWR5ID0gcGxheWVycy5ldmVyeSgocCkgPT4gcC5pc1JlYWR5KVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVhZHkgJiYgIXBsYXllci5teVR1cm4gJiYgcGxheWVyLmJvYXJkLmlzQXR0YWNrYWJsZShbcm93SW5kZXgsIGNvbHVtbkluZGV4XSkgJiYgKCFwbGF5ZXIuaXNIdW1hbiB8fCAhcGxheWVyVnNDb21wdXRlcikgJiYgIWdhbWVPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0gW3Jvd0luZGV4LCBjb2x1bW5JbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZUF0dGFjayhwbGF5ZXJzLCBjb29yZGluYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRpbGVzLnB1c2godGlsZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBib2FyZE5vZGUucmVwbGFjZUNoaWxkcmVuKC4uLnRpbGVzKTtcblxuICAgICAgICBoaXRDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcCR7aW5kZXggKyAxfS0ke3Jvd30tJHtjb2x1bW59YCk7XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICB9KVxuICAgICAgICBtaXNzZWRDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcCR7aW5kZXggKyAxfS0ke3Jvd30tJHtjb2x1bW59YCk7XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0R2FtZShwbGF5ZXJzKSB7XG4gICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKVxuICAgIGNvbnN0IGJhdHRsZVNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlc2hpcC1jb250YWluZXInKTtcbiAgICBiYXR0bGVTaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZWQnKTtcblxuICAgIGNvbnN0IFtwbGF5ZXIxLCBwbGF5ZXIyXSA9IHBsYXllcnNcbiAgICBjcmVhdGVSYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uKHBsYXllcjEsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpXG4gICAgY3JlYXRlRHJhZ2dhYmxlU2hpcEVsZW1lbnRzKHBsYXllcjEsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpXG4gICAgYXdhaXQgZmluaXNoZWRQbGFjaW5nU2hpcHMocGxheWVyMSlcbiAgICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpXG5cbiAgICBpZiAocGxheWVyMi5pc0h1bWFuKSB7XG4gICAgICAgIGNyZWF0ZVJhbmRvbVNoaXBQbGFjZW1lbnRCdXR0b24ocGxheWVyMiwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcylcbiAgICAgICAgY3JlYXRlRHJhZ2dhYmxlU2hpcEVsZW1lbnRzKHBsYXllcjIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpXG4gICAgICAgIGF3YWl0IGZpbmlzaGVkUGxhY2luZ1NoaXBzKHBsYXllcjIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJhbmRvbVNoaXBQbGFjZW1lbnQocGxheWVyMiwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcylcbiAgICAgICAgcGxheWVyMi5yZWFkeVVwKCk7XG4gICAgfVxuICAgIHJlbmRlckdhbWVCb2FyZHMocGxheWVycylcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lQm9hcmQoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBbXTtcbiAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93ICs9IDEpIHtcbiAgICAgICAgc3RhdGUucHVzaChbXSk7XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wgKz0gMSkge1xuICAgICAgICAgICAgc3RhdGVbcm93XS5wdXNoKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlc3RvcmVTdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgc2hpcENvb3JkaW5hdGVzLmZvckVhY2goKHNoaXBPYmplY3QpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcE9iamVjdC5jb29yZGluYXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBzaGlwT2JqZWN0LmNvb3JkaW5hdGVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZVtyb3ddW2NvbHVtbl0gIT09IHNoaXBPYmplY3Quc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZVtyb3ddW2NvbHVtbl0gPSBzaGlwT2JqZWN0LnNoaXBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWRTaGlwUGxhY2VtZW50ID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBjb29yZGluYXRlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgICAgICAgICAgaWYgKHJvdyA8IDAgfHwgcm93ID4gOSB8fCBjb2x1bW4gPCAwIHx8IGNvbHVtbiA+IDkgfHwgc3RhdGVbcm93XVtjb2x1bW5dKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDb29yZHNGcm9tU3RhcnRpbmdDb29yZCA9IChmaXJzdENvb3JkaW5hdGUsIG9yaWVudGF0aW9uLCBzaGlwTGVuZ3RoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbZmlyc3RDb29yZGluYXRlWzBdLCBmaXJzdENvb3JkaW5hdGVbMV0gKyBpXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbZmlyc3RDb29yZGluYXRlWzBdICsgaSwgZmlyc3RDb29yZGluYXRlWzFdXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXNcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgZmlyc3RDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q29vcmRzRnJvbVN0YXJ0aW5nQ29vcmQoZmlyc3RDb29yZGluYXRlLCBzaGlwLm9yaWVudGF0aW9uLCBzaGlwLmxlbmd0aCk7XG5cbiAgICAgICAgaWYgKHZhbGlkU2hpcFBsYWNlbWVudChjb29yZGluYXRlcykpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc2hpcENvb3JkaW5hdGVzLmZpbmRJbmRleCgoc2hpcE9iamVjdCkgPT4gc2hpcE9iamVjdC5zaGlwID09PSBzaGlwKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgc2hpcENvb3JkaW5hdGVzW2luZGV4XS5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaCh7ICdzaGlwJzogc2hpcCwgJ2Nvb3JkaW5hdGVzJzogY29vcmRpbmF0ZXMgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgICAgICAgICAgICBzdGF0ZVtyb3ddW2NvbHVtbl0gPSBzaGlwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgYWxsU2hpcHNQbGFjZWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYWNlZFNoaXBzID0gW107XG4gICAgICAgIHN0YXRlLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb2x1bW4gJiYgIXBsYWNlZFNoaXBzLmluY2x1ZGVzKGNvbHVtbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VkU2hpcHMucHVzaChjb2x1bW4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcGxhY2VkU2hpcHMubGVuZ3RoID09PSA1O1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVBsYWNlZFNoaXBzID0gKCkgPT4ge1xuICAgICAgICBzdGF0ZS5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlW3Jvd0luZGV4XVtjb2xJbmRleF0gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHNoaXBDb29yZGluYXRlcy5zcGxpY2UoMCwgc2hpcENvb3JkaW5hdGVzLmxlbmd0aClcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQbGFjZWRTaGlwID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgICAgICAgICAgc3RhdGVbcm93XVtjb2x1bW5dID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UGxhY2VkU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzQXJyYXkgPSBbXTtcbiAgICAgICAgc2hpcENvb3JkaW5hdGVzLmZvckVhY2goKHNoaXBPYmplY3QpID0+IHtcbiAgICAgICAgICAgIHNoaXBzQXJyYXkucHVzaChzaGlwT2JqZWN0LnNoaXApO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gc2hpcHNBcnJheTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaGlwQXQgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgICAgY29uc3QgdGhlU2hpcCA9IHN0YXRlW3Jvd11bY29sdW1uXTtcbiAgICAgICAgcmV0dXJuIHRoZVNoaXBcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaGlwSGVhZENvb3JkaW5hdGUgPSAoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHNoaXBDb29yZGluYXRlcy5maW5kSW5kZXgoKHNoaXBPYmplY3QpID0+IHNoaXBPYmplY3Quc2hpcCA9PT0gc2hpcCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gc2hpcENvb3JkaW5hdGVzW2luZGV4XS5jb29yZGluYXRlc1swXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2hpcENvb3JkaW5hdGVzID0gKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzaGlwQ29vcmRpbmF0ZXMuZmluZEluZGV4KChzaGlwT2JqZWN0KSA9PiBzaGlwT2JqZWN0LnNoaXAgPT09IHNoaXApO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBDb29yZGluYXRlc1tpbmRleF0uY29vcmRpbmF0ZXNcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGhpdEF0dGFja3MgPSBbXTtcbiAgICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgICAgICBjb25zdCBib2FyZFRpbGUgPSBzdGF0ZVtyb3ddW2NvbHVtbl07XG4gICAgICAgIGlmIChib2FyZFRpbGUpIHtcbiAgICAgICAgICAgIGJvYXJkVGlsZS5oaXQoY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICBoaXRBdHRhY2tzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIG1pc3NlZEF0dGFja3MucHVzaChjb29yZGluYXRlKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZEF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgICAgICByZXR1cm4gcm93ID49IDAgJiYgcm93IDw9IDkgJiYgY29sdW1uID49IDAgJiYgY29sdW1uIDw9IDk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNBdHRhY2thYmxlID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgYWxsQXR0YWNrcyA9IGhpdEF0dGFja3MuY29uY2F0KG1pc3NlZEF0dGFja3MpLm1hcCgoYXR0YWNrKSA9PiBKU09OLnN0cmluZ2lmeShhdHRhY2spKTtcbiAgICAgICAgcmV0dXJuICFhbGxBdHRhY2tzLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGUpKSAmJiB2YWxpZEF0dGFjayhjb29yZGluYXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gZ2V0UGxhY2VkU2hpcHMoKTtcbiAgICAgICAgcmV0dXJuIHNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKVxuICAgIH1cblxuICAgIHJldHVybiB7IHJlc3RvcmVTdGF0ZSwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTdW5rLCBpc0F0dGFja2FibGUsIGFsbFNoaXBzUGxhY2VkLCByZW1vdmVQbGFjZWRTaGlwcywgcmVtb3ZlUGxhY2VkU2hpcCwgZ2V0U2hpcEF0LCBnZXRTaGlwSGVhZENvb3JkaW5hdGUsIGdldFNoaXBDb29yZGluYXRlcywgZ2V0Q29vcmRzRnJvbVN0YXJ0aW5nQ29vcmQsIHZhbGlkU2hpcFBsYWNlbWVudCwgc3RhdGUsIGhpdEF0dGFja3MsIG1pc3NlZEF0dGFja3MgfVxufVxuIiwiaW1wb3J0IHsgaHVtYW4sIGNvbXB1dGVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgZGlzcGxheU1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi9iYXR0bGVzaGlwXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4vKlxuMS4gTWVudSBzY3JlZW4gKFBsYXllciB2IFBsYXllciwgUGxheWVyIHYgQ29tcHV0ZXIpXG4xYS4gTmV3IGdhbWUgdnMgbG9hZCBnYW1lIGZlYXR1cmVcbjIuIFxuKi9cblxuLy8gQ2FsbGVkIG9uIHJlZnJlc2ggaWYgdGhlcmUgaXMgbm90aGluZyBpbiBsb2NhbCBzdG9yYWdlXG4vLyBPciBvbiAnUGxheSBhZ2FpbicgYnV0dG9uXG5zdGFydEdhbWUoYXdhaXQgZGlzcGxheU1lbnUoaHVtYW4sIGNvbXB1dGVyKSkiLCJmdW5jdGlvbiByZW1vdmVNZW51KGJvZHkpIHtcbiAgICBib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW1vZGUtY29udGFpbmVyJykpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlNZW51KGh1bWFuLCBjb21wdXRlcikge1xuICAgIGNvbnN0IGdhbWVNb2RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHZwTW9kZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHB2cE1vZGVCdG4udGV4dENvbnRlbnQgPSAnUGxheWVyIHZzLiBQbGF5ZXInO1xuICAgIGNvbnN0IHB2Y01vZGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwdmNNb2RlQnRuLnRleHRDb250ZW50ID0gJ1BsYXllciB2cy4gQ29tcHV0ZXInO1xuICAgIGdhbWVNb2RlQ29udGFpbmVyLmFwcGVuZENoaWxkKHB2cE1vZGVCdG4pO1xuICAgIGdhbWVNb2RlQ29udGFpbmVyLmFwcGVuZENoaWxkKHB2Y01vZGVCdG4pO1xuXG4gICAgZ2FtZU1vZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZS1tb2RlLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGdhbWVNb2RlQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBwdnBNb2RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlTWVudShib2R5KVxuICAgICAgICAgICAgcmVzb2x2ZShbaHVtYW4odHJ1ZSksIGh1bWFuKCldKTtcbiAgICAgICAgfSlcblxuICAgICAgICBwdmNNb2RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlTWVudShib2R5KVxuICAgICAgICAgICAgcmVzb2x2ZShbaHVtYW4odHJ1ZSksIGNvbXB1dGVyKCldKTtcbiAgICAgICAgfSlcbiAgICB9KVxufSIsImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluaXNoZWRQbGFjaW5nU2hpcHMocGxheWVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWR5VXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVhZHktdXAnKTtcbiAgICAgICAgcmVhZHlVcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlYWR5VXBCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVtb3ZlZCcpO1xuICAgICAgICAgICAgcGxheWVyLnJlYWR5VXAoKTtcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgICAgICBjb25zdCByYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbS1zaGlwLXBsYWNlbWVudCcpO1xuICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChyYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uKTtcblxuICAgICAgICAgICAgY29uc3QgcmVhZHlVcEJ1dHRvbkNsb25lID0gcmVhZHlVcEJ1dHRvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICByZWFkeVVwQnV0dG9uLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHJlYWR5VXBCdXR0b25DbG9uZSwgcmVhZHlVcEJ1dHRvbik7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheVJlYWR5VXBCdXR0b24oKSB7XG4gICAgY29uc3QgcmVhZHlVcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWFkeS11cCcpO1xuICAgIHJlYWR5VXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlZCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tU2hpcFBsYWNlbWVudChwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpIHtcbiAgICBwbGF5ZXIuYm9hcmQucmVtb3ZlUGxhY2VkU2hpcHMoKTtcbiAgICBjb25zdCBzaGlwT3JpZW50YXRpb25zID0gWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ107XG5cbiAgICBbNSwgNCwgMywgMywgMl0uZm9yRWFjaCgobGVuZ3RoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYWNlbWVudFBvb2wgPSBbXVxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93ICs9IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wgKz0gMSkge1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudFBvb2wucHVzaChbcm93LCBjb2xdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJhbmRvbU9yaWVudGF0aW9uID0gc2hpcE9yaWVudGF0aW9uc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcbiAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGxhY2VtZW50UG9vbC5sZW5ndGgpXG4gICAgICAgIHdoaWxlICghcGxheWVyLmJvYXJkLnBsYWNlU2hpcChzaGlwKGxlbmd0aCwgcmFuZG9tT3JpZW50YXRpb24pLCBwbGFjZW1lbnRQb29sW3JhbmRvbUluZGV4XSkpIHtcbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGxhY2VtZW50UG9vbC5sZW5ndGgpXG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICBpZiAocGxheWVyLmlzSHVtYW4gJiYgcGxheWVyLmJvYXJkLmFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICAgICAgZGlzcGxheVJlYWR5VXBCdXR0b24oKTtcbiAgICB9XG5cbiAgICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uKHBsYXllciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykge1xuICAgIGNvbnN0IHJhbmRvbVNoaXBQbGFjZW1lbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgcmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyYW5kb20tc2hpcC1wbGFjZW1lbnQnKTtcbiAgICByYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uLnRleHRDb250ZW50ID0gJ1JhbmRvbWl6ZSBTaGlwcyEnXG4gICAgYm9keS5hcHBlbmRDaGlsZChyYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uKTtcblxuICAgIHJhbmRvbVNoaXBQbGFjZW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByYW5kb21TaGlwUGxhY2VtZW50KHBsYXllciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykpXG4gICAgcmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dhYmxlLXNoaXBzLWNvbnRhaW5lcicpO1xuICAgICAgICB3aGlsZSAoZHJhZ2dhYmxlU2hpcHNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIucmVtb3ZlQ2hpbGQoZHJhZ2dhYmxlU2hpcHNDb250YWluZXIuZmlyc3RDaGlsZClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmFnZ2VkRnJvbUluc2lkZUJvYXJkKGUsIHBsYXllciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykge1xuICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBlLnRhcmdldC5pZC5zcGxpdCgnLScpLnNsaWNlKC0yKS5tYXAoKG51bWJlcikgPT4gTnVtYmVyKG51bWJlcikpO1xuICAgIGNvbnN0IHRoZVNoaXAgPSBwbGF5ZXIuYm9hcmQuZ2V0U2hpcEF0KGNvb3JkaW5hdGUpO1xuXG4gICAgY29uc3QgZ2hvc3RTaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2hvc3RTaGlwLmlkID0gJ2RyYWctZ2hvc3QnO1xuICAgIGdob3N0U2hpcC5zdHlsZS5oZWlnaHQgPSBgJHt0aGVTaGlwLmxlbmd0aCAqIDI1fXB4YDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlU2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBnaG9zdFNoaXBCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZ2hvc3RTaGlwQm9keS5jbGFzc0xpc3QuYWRkKCdnaG9zdC1zaGlwLWJvZHknKTtcbiAgICAgICAgZ2hvc3RTaGlwLmFwcGVuZENoaWxkKGdob3N0U2hpcEJvZHkpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2hvc3RTaGlwKTtcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoZ2hvc3RTaGlwLCAwLCAwKTtcblxuICAgIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IHBsYXllci5ib2FyZC5nZXRTaGlwQ29vcmRpbmF0ZXModGhlU2hpcCk7XG4gICAgY29uc3QgcHJlc2VydmVkQ29vcmRpbmF0ZXMgPSBzaGlwQ29vcmRpbmF0ZXMubWFwKChjb29yZCkgPT4gSlNPTi5zdHJpbmdpZnkoY29vcmQpKTtcblxuICAgIHBsYXllci5ib2FyZC5yZW1vdmVQbGFjZWRTaGlwKHNoaXBDb29yZGluYXRlcyk7XG5cbiAgICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMsIHsgJ29yaWdpbic6ICdpbnNpZGVCb2FyZCcsICdzaGlwJzogdGhlU2hpcCB9LCBwcmVzZXJ2ZWRDb29yZGluYXRlcylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyb3BwZWRGcm9tSW5zaWRlQm9hcmQoZHJhZ0RhdGEsIHBsYXllciwgZSwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykge1xuICAgIGNvbnN0IHRoZVNoaXAgPSBkcmFnRGF0YS5zaGlwXG5cbiAgICBjb25zdCBzdGFydGluZ0Nvb3JkaW5hdGUgPSBlLnRhcmdldC5pZC5zcGxpdCgnLScpLnNsaWNlKC0yKS5tYXAoKG51bWJlcikgPT4gTnVtYmVyKG51bWJlcikpO1xuICAgIHBsYXllci5ib2FyZC5wbGFjZVNoaXAodGhlU2hpcCwgc3RhcnRpbmdDb29yZGluYXRlKVxuXG4gICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKTtcbn1cblxuZnVuY3Rpb24gZHJhZ2dlZEZyb21PdXRzaWRlQm9hcmQoZSwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykge1xuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICBjb25zdCByZSA9IC9sZW5ndGgtKFxcZCkvO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZS50YXJnZXQuY2xhc3NMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChyZS50ZXN0KGUudGFyZ2V0LmNsYXNzTGlzdFtpXSkpIHtcbiAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBlLnRhcmdldC5jbGFzc0xpc3RbaV0uc3BsaXQoJy0nKVsxXSk7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzLCB7ICdvcmlnaW4nOiAnb3V0c2lkZUJvYXJkJywgJ3NoaXBMZW5ndGgnOiBOdW1iZXIoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpKSwgJ3NoaXBPcmllbnRhdGlvbic6ICd2ZXJ0aWNhbCcgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyb3BwZWRGcm9tT3V0c2lkZUJvYXJkKGRyYWdEYXRhLCBwbGF5ZXIsIGUsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpIHtcbiAgICBjb25zdCBzdGFydGluZ0Nvb3JkaW5hdGUgPSBlLnRhcmdldC5pZC5zcGxpdCgnLScpLnNsaWNlKC0yKS5tYXAoKG51bWJlcikgPT4gTnVtYmVyKG51bWJlcikpO1xuICAgIHBsYXllci5ib2FyZC5wbGFjZVNoaXAoc2hpcChkcmFnRGF0YS5zaGlwTGVuZ3RoLCBkcmFnRGF0YS5zaGlwT3JpZW50YXRpb24pLCBzdGFydGluZ0Nvb3JkaW5hdGUpXG5cbiAgICBpZiAocGxheWVyLmJvYXJkLmFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICAgICAgZGlzcGxheVJlYWR5VXBCdXR0b24oKTtcbiAgICB9XG5cbiAgICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRHJhZ2dhYmxlU2hpcEVsZW1lbnRzKHBsYXllciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykge1xuICAgIGNvbnN0IGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnYWJsZS1zaGlwcy1jb250YWluZXInKTtcbiAgICBbNSwgNCwgMywgMywgMl0uZm9yRWFjaCgobGVuZ3RoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXBDb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NoaXAtY29udGFpbmVyJywgYGxlbmd0aC0ke2xlbmd0aH1gKTtcbiAgICAgICAgc2hpcENvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuXG4gICAgICAgIHNoaXBDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XG4gICAgICAgICAgICBkcmFnZ2VkRnJvbU91dHNpZGVCb2FyZChlLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2hpcENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIucmVtb3ZlQ2hpbGQoZS50YXJnZXQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNoaXBCb2R5LmNsYXNzTGlzdC5hZGQoJ3NoaXAtYm9keScpO1xuICAgICAgICAgICAgc2hpcENvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoc2hpcEJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcENvbnRhaW5lckVsZW1lbnQpO1xuICAgIH0pXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcblxuZnVuY3Rpb24gcGxheWVyKCkge1xuICAgIGNvbnN0IGJvYXJkID0gZ2FtZUJvYXJkKCk7XG5cbiAgICBjb25zdCBpc1JlYWR5ID0gZmFsc2VcbiAgICBjb25zdCByZWFkeVVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHN3aXRjaFR1cm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubXlUdXJuID0gIXRoaXMubXlUdXJuO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlYWR5VXAsIHN3aXRjaFR1cm4sIGJvYXJkLCBpc1JlYWR5IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh1bWFuKG15VHVybiA9IGZhbHNlKSB7XG4gICAgY29uc3QgbmFtZSA9IG15VHVybiA/ICdQbGF5ZXIgMScgOiAnUGxheWVyIDInXG4gICAgY29uc3QgaXNIdW1hbiA9IHRydWU7XG5cbiAgICByZXR1cm4geyAuLi5wbGF5ZXIoKSwgaXNIdW1hbiwgbXlUdXJuLCBuYW1lIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVyKG15VHVybiA9IGZhbHNlKSB7XG4gICAgY29uc3QgbmFtZSA9ICdQbGF5ZXIgMic7XG4gICAgY29uc3QgaXNIdW1hbiA9IGZhbHNlO1xuXG4gICAgbGV0IGluaXRpYWxIaXQgPSBudWxsO1xuICAgIGxldCBwcmV2aW91c0F0dGFja0hpdCA9IGZhbHNlO1xuICAgIGxldCBoaXRIaXN0b3J5ID0gW107XG4gICAgbGV0IGF0dGFja1N0YWNrID0gW107XG4gICAgY29uc3QgYXR0YWNrID0gZnVuY3Rpb24gKG9wcG9uZW50KSB7XG4gICAgICAgIGlmIChpbml0aWFsSGl0KSB7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2tlZFNoaXAgPSBvcHBvbmVudC5ib2FyZC5nZXRTaGlwQXQoaW5pdGlhbEhpdCk7XG4gICAgICAgICAgICBpZiAoYXR0YWNrZWRTaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3Vua1NoaXBDb29yZGluYXRlcyA9IGF0dGFja2VkU2hpcC5oaXRDb29yZGluYXRlcy5tYXAoKGhpdENvb3JkaW5hdGUpID0+IEpTT04uc3RyaW5naWZ5KGhpdENvb3JkaW5hdGUpKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZW1haW5pbmdDb29yZGluYXRlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGhpdEhpc3RvcnkuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXN1bmtTaGlwQ29vcmRpbmF0ZXMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBoaXRIaXN0b3J5ID0gcmVtYWluaW5nQ29vcmRpbmF0ZXM7XG4gICAgICAgICAgICAgICAgYXR0YWNrU3RhY2sgPSBbXTtcblxuICAgICAgICAgICAgICAgIGlmIChoaXRIaXN0b3J5Lmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxIaXQgPSBoaXRIaXN0b3J5LnBvcCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxIaXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbml0aWFsSGl0ICYmIGF0dGFja1N0YWNrLmxlbmd0aCA9PT0gMCAmJiBoaXRIaXN0b3J5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgcG9zc2libGVBdHRhY2tzID0gW11cbiAgICAgICAgICAgIHBvc3NpYmxlQXR0YWNrcy5wdXNoKFtpbml0aWFsSGl0WzBdLCBpbml0aWFsSGl0WzFdICsgMV0pO1xuICAgICAgICAgICAgcG9zc2libGVBdHRhY2tzLnB1c2goW2luaXRpYWxIaXRbMF0sIGluaXRpYWxIaXRbMV0gLSAxXSk7XG4gICAgICAgICAgICBwb3NzaWJsZUF0dGFja3MucHVzaChbaW5pdGlhbEhpdFswXSArIDEsIGluaXRpYWxIaXRbMV1dKTtcbiAgICAgICAgICAgIHBvc3NpYmxlQXR0YWNrcy5wdXNoKFtpbml0aWFsSGl0WzBdIC0gMSwgaW5pdGlhbEhpdFsxXV0pO1xuICAgICAgICAgICAgcG9zc2libGVBdHRhY2tzLmZvckVhY2goKHBvc3NpYmxlQXR0YWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkLmlzQXR0YWNrYWJsZShwb3NzaWJsZUF0dGFjaykpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrU3RhY2sucHVzaChwb3NzaWJsZUF0dGFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsSGl0ICYmIGhpdEhpc3RvcnkubGVuZ3RoID49IDEgJiYgcHJldmlvdXNBdHRhY2tIaXQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0hpdCA9IGhpdEhpc3RvcnlbaGl0SGlzdG9yeS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGNvbnN0IHgxID0gaW5pdGlhbEhpdFsxXTtcbiAgICAgICAgICAgIGNvbnN0IHkxID0gaW5pdGlhbEhpdFswXTtcbiAgICAgICAgICAgIGNvbnN0IHgyID0gbmV3SGl0WzFdO1xuICAgICAgICAgICAgY29uc3QgeTIgPSBuZXdIaXRbMF07XG5cbiAgICAgICAgICAgIGNvbnN0IHhEaWZmID0geDEgLSB4MjtcbiAgICAgICAgICAgIGNvbnN0IHlEaWZmID0geTEgLSB5MjtcblxuICAgICAgICAgICAgaWYgKHhEaWZmIDwgMCkge1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0XG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHRPbmUgPSBbbmV3SGl0WzBdLCBuZXdIaXRbMV0gKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmQuaXNBdHRhY2thYmxlKHJpZ2h0T25lKSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2tTdGFjay5wdXNoKHJpZ2h0T25lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHhEaWZmID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0T25lID0gW25ld0hpdFswXSwgbmV3SGl0WzFdIC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkLmlzQXR0YWNrYWJsZShsZWZ0T25lKSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2tTdGFjay5wdXNoKGxlZnRPbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeURpZmYgPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBcbiAgICAgICAgICAgICAgICBjb25zdCB1cE9uZSA9IFtuZXdIaXRbMF0gKyAxLCBuZXdIaXRbMV1dXG4gICAgICAgICAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkLmlzQXR0YWNrYWJsZSh1cE9uZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrU3RhY2sucHVzaCh1cE9uZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh5RGlmZiA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBkb3duXG4gICAgICAgICAgICAgICAgY29uc3QgZG93bk9uZSA9IFtuZXdIaXRbMF0gLSAxLCBuZXdIaXRbMV1dO1xuICAgICAgICAgICAgICAgIGlmIChvcHBvbmVudC5ib2FyZC5pc0F0dGFja2FibGUoZG93bk9uZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrU3RhY2sucHVzaChkb3duT25lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXR0YWNrU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGF0dGFja1N0YWNrLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdHRhY2tTdGFjay5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgY29uc3QgYXR0YWNrUG9vbCA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93ICs9IDEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkLmlzQXR0YWNrYWJsZShbcm93LCBjb2xdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrUG9vbC5wdXNoKFtyb3csIGNvbF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChhdHRhY2tQb29sLmxlbmd0aCAtIDEpKVxuICAgICAgICAgICAgY29uc3QgcmFuZG9tQXR0YWNrID0gYXR0YWNrUG9vbFtyYW5kb21JbmRleF07XG4gICAgICAgICAgICByZXR1cm4gcmFuZG9tQXR0YWNrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgbG9nQXR0YWNrID0gKGlzSGl0LCBjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGlmIChpc0hpdCAmJiAhaW5pdGlhbEhpdCkge1xuICAgICAgICAgICAgaW5pdGlhbEhpdCA9IGNvb3JkaW5hdGU7XG4gICAgICAgICAgICBwcmV2aW91c0F0dGFja0hpdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNIaXQpIHtcbiAgICAgICAgICAgIGhpdEhpc3RvcnkucHVzaChjb29yZGluYXRlKTtcbiAgICAgICAgICAgIHByZXZpb3VzQXR0YWNrSGl0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByZXZpb3VzQXR0YWNrSGl0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyAuLi5wbGF5ZXIoKSwgYXR0YWNrLCBsb2dBdHRhY2ssIGlzSHVtYW4sIG15VHVybiwgbmFtZSB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hpcChsZW5ndGgsIG9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJykge1xuICAgIGNvbnN0IGhpdENvb3JkaW5hdGVzID0gW107XG5cbiAgICBjb25zdCBoaXQgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBoaXRDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICAgIHJldHVybiBoaXRDb29yZGluYXRlc1xuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IChsZW5ndGggLSBoaXRDb29yZGluYXRlcy5sZW5ndGgpIDw9IDBcblxuICAgIHJldHVybiB7IGxlbmd0aCwgb3JpZW50YXRpb24sIGhpdENvb3JkaW5hdGVzLCBoaXQsIGlzU3VuayB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInZhciB3ZWJwYWNrUXVldWVzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBxdWV1ZXNcIikgOiBcIl9fd2VicGFja19xdWV1ZXNfX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgd2VicGFja0Vycm9yID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBlcnJvclwiKSA6IFwiX193ZWJwYWNrX2Vycm9yX19cIjtcbnZhciByZXNvbHZlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUgJiYgcXVldWUuZCA8IDEpIHtcblx0XHRxdWV1ZS5kID0gMTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gLTEpO1xuXHR2YXIgZGVwUXVldWVzID0gbmV3IFNldCgpO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSByZXNvbHZlO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAocXVldWUgJiYgZm4ocXVldWUpLCBkZXBRdWV1ZXMuZm9yRWFjaChmbiksIHByb21pc2VbXCJjYXRjaFwiXSh4ID0+IHt9KSk7XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0Ym9keSgoZGVwcykgPT4ge1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuO1xuXHRcdHZhciBnZXRSZXN1bHQgPSAoKSA9PiAoY3VycmVudERlcHMubWFwKChkKSA9PiB7XG5cdFx0XHRpZihkW3dlYnBhY2tFcnJvcl0pIHRocm93IGRbd2VicGFja0Vycm9yXTtcblx0XHRcdHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTtcblx0XHR9KSlcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKGdldFJlc3VsdCkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR2YXIgZm5RdWV1ZSA9IChxKSA9PiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkgJiYgKGRlcFF1ZXVlcy5hZGQocSksIHEgJiYgIXEuZCAmJiAoZm4ucisrLCBxLnB1c2goZm4pKSkpO1xuXHRcdFx0Y3VycmVudERlcHMubWFwKChkZXApID0+IChkZXBbd2VicGFja1F1ZXVlc10oZm5RdWV1ZSkpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiBnZXRSZXN1bHQoKTtcblx0fSwgKGVycikgPT4gKChlcnIgPyByZWplY3QocHJvbWlzZVt3ZWJwYWNrRXJyb3JdID0gZXJyKSA6IG91dGVyUmVzb2x2ZShleHBvcnRzKSksIHJlc29sdmVRdWV1ZShxdWV1ZSkpKTtcblx0cXVldWUgJiYgcXVldWUuZCA8IDAgJiYgKHF1ZXVlLmQgPSAwKTtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=