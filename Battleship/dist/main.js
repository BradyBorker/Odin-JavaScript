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
                    const tile = document.getElementById(`p${index + 1}-${rowIndex}-${columnIndex}`)
                    tile.classList.remove('ship');

                    if (player === playerPlacingShips && player.isHuman && player.board.validShipPlacement(player.board.getCoordsFromStartingCoord([rowIndex, columnIndex], dragData.ship.orientation, dragData.ship.length))) {
                        tile.addEventListener('dragover', (e) => {
                            e.preventDefault();
                            e.dataTransfer.dropEffect = 'move';
                        })

                        tile.addEventListener('drop', (e) => {
                            e.preventDefault();
                            (0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.droppedFromInsideBoard)(dragData, player, e, players, renderGameBoards);
                        })
                    }

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
                        })
                    }

                    // Droppable tile
                    if (dragData.origin === 'insideBoard') {
                        if (Object.keys(dragData).length > 0 && !column && player === playerPlacingShips && player.isHuman && player.board.validShipPlacement(player.board.getCoordsFromStartingCoord([rowIndex, columnIndex], dragData.ship.orientation, dragData.ship.length))) {
                            tile.addEventListener('dragover', (e) => {
                                e.preventDefault();
                                e.dataTransfer.dropEffect = 'move';
                            })

                            tile.addEventListener('drop', (e) => {
                                e.preventDefault();
                                (0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.droppedFromInsideBoard)(dragData, player, e, players, renderGameBoards);
                            })
                        }
                    } else if (dragData.origin === 'outsideBoard') {
                        if (Object.keys(dragData).length > 0 && !column && player === playerPlacingShips && player.isHuman && player.board.validShipPlacement(player.board.getCoordsFromStartingCoord([rowIndex, columnIndex], dragData.shipOrientation, dragData.shipLength))) {
                            tile.addEventListener('dragover', (e) => {
                                e.preventDefault();
                                e.dataTransfer.dropEffect = 'move';
                            })

                            tile.addEventListener('drop', (e) => {
                                e.preventDefault();
                                (0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.droppedFromOutsideBoard)(dragData, player, e, players, renderGameBoards);
                            })
                        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLENBQUM7V0FDRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0Esc0dBQXNHO1dBQ3RHO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQSxFQUFFO1dBQ0Y7V0FDQTs7Ozs7V0NoRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9iYXR0bGVzaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3BsYWNlU2hpcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJhY2tncm91bmQ6IHJnYigxOTQsIDE3OCwgMTI4KTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxOTQsIDE3OCwgMTI4LCAxKSAwJSwgcmdiYSgxOTQsIDE3OCwgMTI4LCAxKSAwJSwgcmdiYSgzNSwgMTM3LCAyMTgsIDEpIDIwJSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyM3B4IDEycHggcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcbiAgICBib3JkZXI6IDJweCBpbnNldCAjQzJCMjgwO1xufVxuXG4ucmVtb3ZlZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpZGRlbiB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm1vdmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNSwgMTM3LCAyMTgsIDEpXG59XG5cbi8qIE1lbnUgKi9cbi5nYW1lLW1vZGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4vKiBCYXR0bGVzaGlwIEdhbWUgKi9cbi5iYXR0bGVzaGlwLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbi5wbGF5ZXItYm9hcmRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBsYXllcjEtYm9hcmQsXG4ucGxheWVyMi1ib2FyZCB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLnRpbGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDViNzI7XG59XG5cbi50aWxlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG59XG5cbi50aWxlLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4udGlsZS5oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnRpbGUubWlzc2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi8qIFNoaXAgcGllY2VzIGNvbnRhaW5lciAqL1xuLmRyYWdnYWJsZS1zaGlwcy1jb250YWluZXIge1xuICAgIHdpZHRoOiA1MHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uc2hpcC1jb250YWluZXIge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2hpcC1ib2R5IHtcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4jZHJhZy1naG9zdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEwMDBweDtcbiAgICB3aWR0aDogMjVweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmdob3N0LXNoaXAtYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4vKiBDbG9uZWQgQm9hcmRzICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixhQUFhOztJQUViLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsOEJBQThCO0lBQzlCLGtIQUFrSDtJQUNsSCwwREFBMEQ7SUFDMUQseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBLFNBQVM7QUFDVDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osaUJBQWlCOztJQUVqQixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQSwwQkFBMEI7QUFDMUI7SUFDSSxXQUFXOztJQUVYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHVCQUF1Qjs7SUFFdkIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXOztJQUVYLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQSxrQkFBa0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYigxOTQsIDE3OCwgMTI4KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTk0LCAxNzgsIDEyOCwgMSkgMCUsIHJnYmEoMTk0LCAxNzgsIDEyOCwgMSkgMCUsIHJnYmEoMzUsIDEzNywgMjE4LCAxKSAyMCUpO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDIzcHggMTJweCByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xcbiAgICBib3JkZXI6IDJweCBpbnNldCAjQzJCMjgwO1xcbn1cXG5cXG4ucmVtb3ZlZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm1vdmluZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzUsIDEzNywgMjE4LCAxKVxcbn1cXG5cXG4vKiBNZW51ICovXFxuLmdhbWUtbW9kZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIEJhdHRsZXNoaXAgR2FtZSAqL1xcbi5iYXR0bGVzaGlwLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5wbGF5ZXItYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucGxheWVyMS1ib2FyZCxcXG4ucGxheWVyMi1ib2FyZCB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgbWluLWhlaWdodDogNTAwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLnRpbGUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA1YjcyO1xcbn1cXG5cXG4udGlsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLnRpbGUuc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGlsZS5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi50aWxlLm1pc3NlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLyogU2hpcCBwaWVjZXMgY29udGFpbmVyICovXFxuLmRyYWdnYWJsZS1zaGlwcy1jb250YWluZXIge1xcbiAgICB3aWR0aDogNTBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNoaXAtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNoaXAtYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuI2RyYWctZ2hvc3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTEwMDBweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5naG9zdC1zaGlwLWJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLyogQ2xvbmVkIEJvYXJkcyAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCBmaW5pc2hlZFBsYWNpbmdTaGlwcywgeyBjcmVhdGVSYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uLCByYW5kb21TaGlwUGxhY2VtZW50LCBjcmVhdGVEcmFnZ2FibGVTaGlwRWxlbWVudHMsIGRyb3BwZWRGcm9tT3V0c2lkZUJvYXJkLCBkcmFnZ2VkRnJvbUluc2lkZUJvYXJkLCBkcm9wcGVkRnJvbUluc2lkZUJvYXJkIH0gZnJvbSBcIi4vcGxhY2VTaGlwc1wiO1xuXG5mdW5jdGlvbiBzd2l0Y2hUdXJuKHBsYXllcnMpIHtcbiAgICBwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgICBwbGF5ZXIuc3dpdGNoVHVybigpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGlzR2FtZU92ZXIocGxheWVycykge1xuICAgIGNvbnN0IGxvc2VyID0gcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gcGxheWVyLmJvYXJkLmFsbFN1bmsoKSk7XG4gICAgaWYgKGxvc2VyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgW3dpbm5lcl0gPSBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiAhcGxheWVyLmJvYXJkLmFsbFN1bmsoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBXaW5uZXI6ICR7d2lubmVyLm5hbWV9YClcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWFrZUF0dGFjayhwbGF5ZXJzLCBjb29yZGluYXRlKSB7XG4gICAgbGV0IFthdHRhY2tlZFBsYXllcl0gPSBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiAhcGxheWVyLm15VHVybik7XG4gICAgbGV0IFthdHRhY2tpbmdQbGF5ZXJdID0gcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gcGxheWVyLm15VHVybik7XG5cbiAgICBpZiAoIWF0dGFja2luZ1BsYXllci5pc0h1bWFuKSB7XG4gICAgICAgIGF0dGFja2luZ1BsYXllci5sb2dBdHRhY2soYXR0YWNrZWRQbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSwgY29vcmRpbmF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXR0YWNrZWRQbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcbiAgICB9XG5cbiAgICBpZiAoaXNHYW1lT3ZlcihwbGF5ZXJzKSkge1xuICAgICAgICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMsIHt9LCBbXSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpdGNoVHVybihwbGF5ZXJzKTtcbiAgICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpO1xuXG4gICAgLy8gQ29tcHV0ZXIgQXR0YWNrXG4gICAgW2F0dGFja2VkUGxheWVyXSA9IHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+ICFwbGF5ZXIubXlUdXJuKTtcbiAgICBbYXR0YWNraW5nUGxheWVyXSA9IHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+IHBsYXllci5teVR1cm4pO1xuICAgIGlmICghYXR0YWNraW5nUGxheWVyLmlzSHVtYW4pIHtcbiAgICAgICAgY29uc3QgYXR0YWNrQ29vcmRpbmF0ZSA9IGF0dGFja2luZ1BsYXllci5hdHRhY2soYXR0YWNrZWRQbGF5ZXIpO1xuICAgICAgICBtYWtlQXR0YWNrKHBsYXllcnMsIGF0dGFja0Nvb3JkaW5hdGUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzLCBkcmFnRGF0YSA9IHt9LCBwcmVzZXJ2ZWRDb29yZHMgPSBbXSwgZ2FtZU92ZXIgPSBmYWxzZSkge1xuICAgIGNvbnN0IFtwbGF5ZXIxLCBwbGF5ZXIyXSA9IHBsYXllcnNcbiAgICBjb25zdCBwbGF5ZXJWc0NvbXB1dGVyID0gIShwbGF5ZXIxLmlzSHVtYW4gJiYgcGxheWVyMi5pc0h1bWFuKVxuICAgIGNvbnN0IHBsYXllclBsYWNpbmdTaGlwcyA9IHBsYXllcnMuZmluZCgocGxheWVyKSA9PiAhcGxheWVyLmlzUmVhZHkpO1xuXG4gICAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGJvYXJkTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXIke2luZGV4ICsgMX0tYm9hcmRgKTtcbiAgICAgICAgY29uc3QgaGl0Q29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmQuaGl0QXR0YWNrcztcbiAgICAgICAgY29uc3QgbWlzc2VkQ29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmQubWlzc2VkQXR0YWNrcztcbiAgICAgICAgY29uc3QgdGlsZXMgPSBbXTtcbiAgICAgICAgcGxheWVyLmJvYXJkLnN0YXRlLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChjb2x1bW4sIGNvbHVtbkluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXNlcnZlZENvb3Jkcy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShbcm93SW5kZXgsIGNvbHVtbkluZGV4XSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcCR7aW5kZXggKyAxfS0ke3Jvd0luZGV4fS0ke2NvbHVtbkluZGV4fWApXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIgPT09IHBsYXllclBsYWNpbmdTaGlwcyAmJiBwbGF5ZXIuaXNIdW1hbiAmJiBwbGF5ZXIuYm9hcmQudmFsaWRTaGlwUGxhY2VtZW50KHBsYXllci5ib2FyZC5nZXRDb29yZHNGcm9tU3RhcnRpbmdDb29yZChbcm93SW5kZXgsIGNvbHVtbkluZGV4XSwgZHJhZ0RhdGEuc2hpcC5vcmllbnRhdGlvbiwgZHJhZ0RhdGEuc2hpcC5sZW5ndGgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wcGVkRnJvbUluc2lkZUJvYXJkKGRyYWdEYXRhLCBwbGF5ZXIsIGUsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRpbGVzLnB1c2godGlsZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgICAgICB0aWxlLmlkID0gYHAke2luZGV4ICsgMX0tJHtyb3dJbmRleH0tJHtjb2x1bW5JbmRleH1gXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRHJhZ2dhYmxlIHRpbGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtbiAmJiBwbGF5ZXIgPT09IHBsYXllclBsYWNpbmdTaGlwcyAmJiBwbGF5ZXIuaXNIdW1hbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dlZEZyb21JbnNpZGVCb2FyZChlLCBwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnaG9zdFNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJhZy1naG9zdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdob3N0U2hpcC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdob3N0U2hpcC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGdob3N0U2hpcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuYm9hcmQucmVzdG9yZVN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckdhbWVCb2FyZHMocGxheWVycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIERyb3BwYWJsZSB0aWxlXG4gICAgICAgICAgICAgICAgICAgIGlmIChkcmFnRGF0YS5vcmlnaW4gPT09ICdpbnNpZGVCb2FyZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkcmFnRGF0YSkubGVuZ3RoID4gMCAmJiAhY29sdW1uICYmIHBsYXllciA9PT0gcGxheWVyUGxhY2luZ1NoaXBzICYmIHBsYXllci5pc0h1bWFuICYmIHBsYXllci5ib2FyZC52YWxpZFNoaXBQbGFjZW1lbnQocGxheWVyLmJvYXJkLmdldENvb3Jkc0Zyb21TdGFydGluZ0Nvb3JkKFtyb3dJbmRleCwgY29sdW1uSW5kZXhdLCBkcmFnRGF0YS5zaGlwLm9yaWVudGF0aW9uLCBkcmFnRGF0YS5zaGlwLmxlbmd0aCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wcGVkRnJvbUluc2lkZUJvYXJkKGRyYWdEYXRhLCBwbGF5ZXIsIGUsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZHJhZ0RhdGEub3JpZ2luID09PSAnb3V0c2lkZUJvYXJkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRyYWdEYXRhKS5sZW5ndGggPiAwICYmICFjb2x1bW4gJiYgcGxheWVyID09PSBwbGF5ZXJQbGFjaW5nU2hpcHMgJiYgcGxheWVyLmlzSHVtYW4gJiYgcGxheWVyLmJvYXJkLnZhbGlkU2hpcFBsYWNlbWVudChwbGF5ZXIuYm9hcmQuZ2V0Q29vcmRzRnJvbVN0YXJ0aW5nQ29vcmQoW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0sIGRyYWdEYXRhLnNoaXBPcmllbnRhdGlvbiwgZHJhZ0RhdGEuc2hpcExlbmd0aCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wcGVkRnJvbU91dHNpZGVCb2FyZChkcmFnRGF0YSwgcGxheWVyLCBlLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29uZGl0aW9ucyBmb3IgZGlzcGxheWluZyBzaGlwc1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sdW1uICYmIHBsYXllci5pc0h1bWFuICYmIChwbGF5ZXJWc0NvbXB1dGVyIHx8ICFwbGF5ZXIuaXNSZWFkeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBDb25kaXRpb25zIGZvciBhbGxvd2luZyBhdHRhY2sgb24gdGlsZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkeSA9IHBsYXllcnMuZXZlcnkoKHApID0+IHAuaXNSZWFkeSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWR5ICYmICFwbGF5ZXIubXlUdXJuICYmIHBsYXllci5ib2FyZC5pc0F0dGFja2FibGUoW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0pICYmICghcGxheWVyLmlzSHVtYW4gfHwgIXBsYXllclZzQ29tcHV0ZXIpICYmICFnYW1lT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IFtyb3dJbmRleCwgY29sdW1uSW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VBdHRhY2socGxheWVycywgY29vcmRpbmF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aWxlcy5wdXNoKHRpbGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgYm9hcmROb2RlLnJlcGxhY2VDaGlsZHJlbiguLi50aWxlcyk7XG5cbiAgICAgICAgaGl0Q29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGU7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHAke2luZGV4ICsgMX0tJHtyb3d9LSR7Y29sdW1ufWApO1xuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgfSlcbiAgICAgICAgbWlzc2VkQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGU7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHAke2luZGV4ICsgMX0tJHtyb3d9LSR7Y29sdW1ufWApO1xuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzdGFydEdhbWUocGxheWVycykge1xuICAgIHJlbmRlckdhbWVCb2FyZHMocGxheWVycylcbiAgICBjb25zdCBiYXR0bGVTaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZXNoaXAtY29udGFpbmVyJyk7XG4gICAgYmF0dGxlU2hpcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVkJyk7XG5cbiAgICBjb25zdCBbcGxheWVyMSwgcGxheWVyMl0gPSBwbGF5ZXJzXG4gICAgY3JlYXRlUmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbihwbGF5ZXIxLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKVxuICAgIGNyZWF0ZURyYWdnYWJsZVNoaXBFbGVtZW50cyhwbGF5ZXIxLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKVxuICAgIGF3YWl0IGZpbmlzaGVkUGxhY2luZ1NoaXBzKHBsYXllcjEpXG4gICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKVxuXG4gICAgaWYgKHBsYXllcjIuaXNIdW1hbikge1xuICAgICAgICBjcmVhdGVSYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uKHBsYXllcjIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpXG4gICAgICAgIGNyZWF0ZURyYWdnYWJsZVNoaXBFbGVtZW50cyhwbGF5ZXIyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKVxuICAgICAgICBhd2FpdCBmaW5pc2hlZFBsYWNpbmdTaGlwcyhwbGF5ZXIyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByYW5kb21TaGlwUGxhY2VtZW50KHBsYXllcjIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpXG4gICAgICAgIHBsYXllcjIucmVhZHlVcCgpO1xuICAgIH1cbiAgICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZUJvYXJkKCkge1xuICAgIGNvbnN0IHN0YXRlID0gW107XG4gICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW107XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdyArPSAxKSB7XG4gICAgICAgIHN0YXRlLnB1c2goW10pO1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sICs9IDEpIHtcbiAgICAgICAgICAgIHN0YXRlW3Jvd10ucHVzaChmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZXN0b3JlU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIHNoaXBDb29yZGluYXRlcy5mb3JFYWNoKChzaGlwT2JqZWN0KSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBPYmplY3QuY29vcmRpbmF0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gc2hpcE9iamVjdC5jb29yZGluYXRlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVbcm93XVtjb2x1bW5dICE9PSBzaGlwT2JqZWN0LnNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVbcm93XVtjb2x1bW5dID0gc2hpcE9iamVjdC5zaGlwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkU2hpcFBsYWNlbWVudCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0gY29vcmRpbmF0ZXNbaV07XG4gICAgICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgICAgICAgIGlmIChyb3cgPCAwIHx8IHJvdyA+IDkgfHwgY29sdW1uIDwgMCB8fCBjb2x1bW4gPiA5IHx8IHN0YXRlW3Jvd11bY29sdW1uXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q29vcmRzRnJvbVN0YXJ0aW5nQ29vcmQgPSAoZmlyc3RDb29yZGluYXRlLCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCkgPT4ge1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW2ZpcnN0Q29vcmRpbmF0ZVswXSwgZmlyc3RDb29yZGluYXRlWzFdICsgaV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW2ZpcnN0Q29vcmRpbmF0ZVswXSArIGksIGZpcnN0Q29vcmRpbmF0ZVsxXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzXG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIGZpcnN0Q29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldENvb3Jkc0Zyb21TdGFydGluZ0Nvb3JkKGZpcnN0Q29vcmRpbmF0ZSwgc2hpcC5vcmllbnRhdGlvbiwgc2hpcC5sZW5ndGgpO1xuXG4gICAgICAgIGlmICh2YWxpZFNoaXBQbGFjZW1lbnQoY29vcmRpbmF0ZXMpKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHNoaXBDb29yZGluYXRlcy5maW5kSW5kZXgoKHNoaXBPYmplY3QpID0+IHNoaXBPYmplY3Quc2hpcCA9PT0gc2hpcCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHNoaXBDb29yZGluYXRlc1tpbmRleF0uY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goeyAnc2hpcCc6IHNoaXAsICdjb29yZGluYXRlcyc6IGNvb3JkaW5hdGVzIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGU7XG4gICAgICAgICAgICAgICAgc3RhdGVbcm93XVtjb2x1bW5dID0gc2hpcDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGFsbFNoaXBzUGxhY2VkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwbGFjZWRTaGlwcyA9IFtdO1xuICAgICAgICBzdGF0ZS5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uICYmICFwbGFjZWRTaGlwcy5pbmNsdWRlcyhjb2x1bW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlZFNoaXBzLnB1c2goY29sdW1uKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHBsYWNlZFNoaXBzLmxlbmd0aCA9PT0gNTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQbGFjZWRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgc3RhdGUuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKGNvbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZVtyb3dJbmRleF1bY29sSW5kZXhdID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBzaGlwQ29vcmRpbmF0ZXMuc3BsaWNlKDAsIHNoaXBDb29yZGluYXRlcy5sZW5ndGgpXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUGxhY2VkU2hpcCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgICAgICAgIHN0YXRlW3Jvd11bY29sdW1uXSA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGdldFBsYWNlZFNoaXBzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwc0FycmF5ID0gW107XG4gICAgICAgIHNoaXBDb29yZGluYXRlcy5mb3JFYWNoKChzaGlwT2JqZWN0KSA9PiB7XG4gICAgICAgICAgICBzaGlwc0FycmF5LnB1c2goc2hpcE9iamVjdC5zaGlwKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHNoaXBzQXJyYXk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2hpcEF0ID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGU7XG4gICAgICAgIGNvbnN0IHRoZVNoaXAgPSBzdGF0ZVtyb3ddW2NvbHVtbl07XG4gICAgICAgIHJldHVybiB0aGVTaGlwXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2hpcEhlYWRDb29yZGluYXRlID0gKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzaGlwQ29vcmRpbmF0ZXMuZmluZEluZGV4KChzaGlwT2JqZWN0KSA9PiBzaGlwT2JqZWN0LnNoaXAgPT09IHNoaXApO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBDb29yZGluYXRlc1tpbmRleF0uY29vcmRpbmF0ZXNbMF1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGdldFNoaXBDb29yZGluYXRlcyA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2hpcENvb3JkaW5hdGVzLmZpbmRJbmRleCgoc2hpcE9iamVjdCkgPT4gc2hpcE9iamVjdC5zaGlwID09PSBzaGlwKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwQ29vcmRpbmF0ZXNbaW5kZXhdLmNvb3JkaW5hdGVzXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBoaXRBdHRhY2tzID0gW107XG4gICAgY29uc3QgbWlzc2VkQXR0YWNrcyA9IFtdO1xuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgICAgY29uc3QgYm9hcmRUaWxlID0gc3RhdGVbcm93XVtjb2x1bW5dO1xuICAgICAgICBpZiAoYm9hcmRUaWxlKSB7XG4gICAgICAgICAgICBib2FyZFRpbGUuaGl0KGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgaGl0QXR0YWNrcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBtaXNzZWRBdHRhY2tzLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWRBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgICAgcmV0dXJuIHJvdyA+PSAwICYmIHJvdyA8PSA5ICYmIGNvbHVtbiA+PSAwICYmIGNvbHVtbiA8PSA5O1xuICAgIH1cblxuICAgIGNvbnN0IGlzQXR0YWNrYWJsZSA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbEF0dGFja3MgPSBoaXRBdHRhY2tzLmNvbmNhdChtaXNzZWRBdHRhY2tzKS5tYXAoKGF0dGFjaykgPT4gSlNPTi5zdHJpbmdpZnkoYXR0YWNrKSk7XG4gICAgICAgIHJldHVybiAhYWxsQXR0YWNrcy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShjb29yZGluYXRlKSkgJiYgdmFsaWRBdHRhY2soY29vcmRpbmF0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwcyA9IGdldFBsYWNlZFNoaXBzKCk7XG4gICAgICAgIHJldHVybiBzaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSlcbiAgICB9XG5cbiAgICByZXR1cm4geyByZXN0b3JlU3RhdGUsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU3VuaywgaXNBdHRhY2thYmxlLCBhbGxTaGlwc1BsYWNlZCwgcmVtb3ZlUGxhY2VkU2hpcHMsIHJlbW92ZVBsYWNlZFNoaXAsIGdldFNoaXBBdCwgZ2V0U2hpcEhlYWRDb29yZGluYXRlLCBnZXRTaGlwQ29vcmRpbmF0ZXMsIGdldENvb3Jkc0Zyb21TdGFydGluZ0Nvb3JkLCB2YWxpZFNoaXBQbGFjZW1lbnQsIHN0YXRlLCBoaXRBdHRhY2tzLCBtaXNzZWRBdHRhY2tzIH1cbn1cbiIsImltcG9ydCB7IGh1bWFuLCBjb21wdXRlciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGRpc3BsYXlNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4vYmF0dGxlc2hpcFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuLypcbjEuIE1lbnUgc2NyZWVuIChQbGF5ZXIgdiBQbGF5ZXIsIFBsYXllciB2IENvbXB1dGVyKVxuMWEuIE5ldyBnYW1lIHZzIGxvYWQgZ2FtZSBmZWF0dXJlXG4yLiBcbiovXG5cbi8vIENhbGxlZCBvbiByZWZyZXNoIGlmIHRoZXJlIGlzIG5vdGhpbmcgaW4gbG9jYWwgc3RvcmFnZVxuLy8gT3Igb24gJ1BsYXkgYWdhaW4nIGJ1dHRvblxuc3RhcnRHYW1lKGF3YWl0IGRpc3BsYXlNZW51KGh1bWFuLCBjb21wdXRlcikpIiwiZnVuY3Rpb24gcmVtb3ZlTWVudShib2R5KSB7XG4gICAgYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1tb2RlLWNvbnRhaW5lcicpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TWVudShodW1hbiwgY29tcHV0ZXIpIHtcbiAgICBjb25zdCBnYW1lTW9kZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHB2cE1vZGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwdnBNb2RlQnRuLnRleHRDb250ZW50ID0gJ1BsYXllciB2cy4gUGxheWVyJztcbiAgICBjb25zdCBwdmNNb2RlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHZjTW9kZUJ0bi50ZXh0Q29udGVudCA9ICdQbGF5ZXIgdnMuIENvbXB1dGVyJztcbiAgICBnYW1lTW9kZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwdnBNb2RlQnRuKTtcbiAgICBnYW1lTW9kZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwdmNNb2RlQnRuKTtcblxuICAgIGdhbWVNb2RlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dhbWUtbW9kZS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChnYW1lTW9kZUNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgcHZwTW9kZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZU1lbnUoYm9keSlcbiAgICAgICAgICAgIHJlc29sdmUoW2h1bWFuKHRydWUpLCBodW1hbigpXSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcHZjTW9kZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZU1lbnUoYm9keSlcbiAgICAgICAgICAgIHJlc29sdmUoW2h1bWFuKHRydWUpLCBjb21wdXRlcigpXSk7XG4gICAgICAgIH0pXG4gICAgfSlcbn0iLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmlzaGVkUGxhY2luZ1NoaXBzKHBsYXllcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCByZWFkeVVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlYWR5LXVwJyk7XG4gICAgICAgIHJlYWR5VXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZWFkeVVwQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWQnKTtcbiAgICAgICAgICAgIHBsYXllci5yZWFkeVVwKCk7XG4gICAgICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5kb20tc2hpcC1wbGFjZW1lbnQnKTtcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQocmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlYWR5VXBCdXR0b25DbG9uZSA9IHJlYWR5VXBCdXR0b24uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgcmVhZHlVcEJ1dHRvbi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyZWFkeVVwQnV0dG9uQ2xvbmUsIHJlYWR5VXBCdXR0b24pO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlSZWFkeVVwQnV0dG9uKCkge1xuICAgIGNvbnN0IHJlYWR5VXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVhZHktdXAnKTtcbiAgICByZWFkeVVwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZWQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVNoaXBQbGFjZW1lbnQocGxheWVyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKSB7XG4gICAgcGxheWVyLmJvYXJkLnJlbW92ZVBsYWNlZFNoaXBzKCk7XG4gICAgY29uc3Qgc2hpcE9yaWVudGF0aW9ucyA9IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddO1xuXG4gICAgWzUsIDQsIDMsIDMsIDJdLmZvckVhY2goKGxlbmd0aCkgPT4ge1xuICAgICAgICBjb25zdCBwbGFjZW1lbnRQb29sID0gW11cbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdyArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sICs9IDEpIHtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnRQb29sLnB1c2goW3JvdywgY29sXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByYW5kb21PcmllbnRhdGlvbiA9IHNoaXBPcmllbnRhdGlvbnNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBsYWNlbWVudFBvb2wubGVuZ3RoKVxuICAgICAgICB3aGlsZSAoIXBsYXllci5ib2FyZC5wbGFjZVNoaXAoc2hpcChsZW5ndGgsIHJhbmRvbU9yaWVudGF0aW9uKSwgcGxhY2VtZW50UG9vbFtyYW5kb21JbmRleF0pKSB7XG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBsYWNlbWVudFBvb2wubGVuZ3RoKVxuICAgICAgICB9XG5cbiAgICB9KVxuXG4gICAgaWYgKHBsYXllci5pc0h1bWFuICYmIHBsYXllci5ib2FyZC5hbGxTaGlwc1BsYWNlZCgpKSB7XG4gICAgICAgIGRpc3BsYXlSZWFkeVVwQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbihwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpIHtcbiAgICBjb25zdCByYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIHJhbmRvbVNoaXBQbGFjZW1lbnRCdXR0b24uY2xhc3NMaXN0LmFkZCgncmFuZG9tLXNoaXAtcGxhY2VtZW50Jyk7XG4gICAgcmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbi50ZXh0Q29udGVudCA9ICdSYW5kb21pemUgU2hpcHMhJ1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQocmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbik7XG5cbiAgICByYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmFuZG9tU2hpcFBsYWNlbWVudChwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpKVxuICAgIHJhbmRvbVNoaXBQbGFjZW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnYWJsZS1zaGlwcy1jb250YWluZXInKTtcbiAgICAgICAgd2hpbGUgKGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhZ2dlZEZyb21JbnNpZGVCb2FyZChlLCBwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpIHtcbiAgICBjb25zdCBjb29yZGluYXRlID0gZS50YXJnZXQuaWQuc3BsaXQoJy0nKS5zbGljZSgtMikubWFwKChudW1iZXIpID0+IE51bWJlcihudW1iZXIpKTtcbiAgICBjb25zdCB0aGVTaGlwID0gcGxheWVyLmJvYXJkLmdldFNoaXBBdChjb29yZGluYXRlKTtcblxuICAgIGNvbnN0IGdob3N0U2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdob3N0U2hpcC5pZCA9ICdkcmFnLWdob3N0JztcbiAgICBnaG9zdFNoaXAuc3R5bGUuaGVpZ2h0ID0gYCR7dGhlU2hpcC5sZW5ndGggKiAyNX1weGA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoZVNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgZ2hvc3RTaGlwQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGdob3N0U2hpcEJvZHkuY2xhc3NMaXN0LmFkZCgnZ2hvc3Qtc2hpcC1ib2R5Jyk7XG4gICAgICAgIGdob3N0U2hpcC5hcHBlbmRDaGlsZChnaG9zdFNoaXBCb2R5KTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdob3N0U2hpcCk7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGdob3N0U2hpcCwgMCwgMCk7XG5cbiAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmQuZ2V0U2hpcENvb3JkaW5hdGVzKHRoZVNoaXApO1xuICAgIGNvbnN0IHByZXNlcnZlZENvb3JkaW5hdGVzID0gc2hpcENvb3JkaW5hdGVzLm1hcCgoY29vcmQpID0+IEpTT04uc3RyaW5naWZ5KGNvb3JkKSk7XG5cbiAgICBwbGF5ZXIuYm9hcmQucmVtb3ZlUGxhY2VkU2hpcChzaGlwQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzLCB7ICdvcmlnaW4nOiAnaW5zaWRlQm9hcmQnLCAnc2hpcCc6IHRoZVNoaXAgfSwgcHJlc2VydmVkQ29vcmRpbmF0ZXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcm9wcGVkRnJvbUluc2lkZUJvYXJkKGRyYWdEYXRhLCBwbGF5ZXIsIGUsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpIHtcbiAgICBjb25zdCB0aGVTaGlwID0gZHJhZ0RhdGEuc2hpcFxuXG4gICAgY29uc3Qgc3RhcnRpbmdDb29yZGluYXRlID0gZS50YXJnZXQuaWQuc3BsaXQoJy0nKS5zbGljZSgtMikubWFwKChudW1iZXIpID0+IE51bWJlcihudW1iZXIpKTtcbiAgICBwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKHRoZVNoaXAsIHN0YXJ0aW5nQ29vcmRpbmF0ZSlcblxuICAgIHJlbmRlckdhbWVCb2FyZHMocGxheWVycyk7XG59XG5cbmZ1bmN0aW9uIGRyYWdnZWRGcm9tT3V0c2lkZUJvYXJkKGUsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpIHtcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG4gICAgY29uc3QgcmUgPSAvbGVuZ3RoLShcXGQpLztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUudGFyZ2V0LmNsYXNzTGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAocmUudGVzdChlLnRhcmdldC5jbGFzc0xpc3RbaV0pKSB7XG4gICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZS50YXJnZXQuY2xhc3NMaXN0W2ldLnNwbGl0KCctJylbMV0pO1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckdhbWVCb2FyZHMocGxheWVycywgeyAnb3JpZ2luJzogJ291dHNpZGVCb2FyZCcsICdzaGlwTGVuZ3RoJzogTnVtYmVyKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKSksICdzaGlwT3JpZW50YXRpb24nOiAndmVydGljYWwnIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcm9wcGVkRnJvbU91dHNpZGVCb2FyZChkcmFnRGF0YSwgcGxheWVyLCBlLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKSB7XG4gICAgY29uc3Qgc3RhcnRpbmdDb29yZGluYXRlID0gZS50YXJnZXQuaWQuc3BsaXQoJy0nKS5zbGljZSgtMikubWFwKChudW1iZXIpID0+IE51bWJlcihudW1iZXIpKTtcbiAgICBwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKHNoaXAoZHJhZ0RhdGEuc2hpcExlbmd0aCwgZHJhZ0RhdGEuc2hpcE9yaWVudGF0aW9uKSwgc3RhcnRpbmdDb29yZGluYXRlKVxuXG4gICAgaWYgKHBsYXllci5ib2FyZC5hbGxTaGlwc1BsYWNlZCgpKSB7XG4gICAgICAgIGRpc3BsYXlSZWFkeVVwQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURyYWdnYWJsZVNoaXBFbGVtZW50cyhwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpIHtcbiAgICBjb25zdCBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2FibGUtc2hpcHMtY29udGFpbmVyJyk7XG4gICAgWzUsIDQsIDMsIDMsIDJdLmZvckVhY2goKGxlbmd0aCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwQ29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaGlwLWNvbnRhaW5lcicsIGBsZW5ndGgtJHtsZW5ndGh9YCk7XG4gICAgICAgIHNoaXBDb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcblxuICAgICAgICBzaGlwQ29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZHJhZ2dlZEZyb21PdXRzaWRlQm9hcmQoZSwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoaXBDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGUudGFyZ2V0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzaGlwQm9keS5jbGFzc0xpc3QuYWRkKCdzaGlwLWJvZHknKTtcbiAgICAgICAgICAgIHNoaXBDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHNoaXBCb2R5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBDb250YWluZXJFbGVtZW50KTtcbiAgICB9KVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBnYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5cbmZ1bmN0aW9uIHBsYXllcigpIHtcbiAgICBjb25zdCBib2FyZCA9IGdhbWVCb2FyZCgpO1xuXG4gICAgY29uc3QgaXNSZWFkeSA9IGZhbHNlXG4gICAgY29uc3QgcmVhZHlVcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzd2l0Y2hUdXJuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm15VHVybiA9ICF0aGlzLm15VHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4geyByZWFkeVVwLCBzd2l0Y2hUdXJuLCBib2FyZCwgaXNSZWFkeSB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodW1hbihteVR1cm4gPSBmYWxzZSkge1xuICAgIGNvbnN0IG5hbWUgPSBteVR1cm4gPyAnUGxheWVyIDEnIDogJ1BsYXllciAyJ1xuICAgIGNvbnN0IGlzSHVtYW4gPSB0cnVlO1xuXG4gICAgcmV0dXJuIHsgLi4ucGxheWVyKCksIGlzSHVtYW4sIG15VHVybiwgbmFtZSB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlcihteVR1cm4gPSBmYWxzZSkge1xuICAgIGNvbnN0IG5hbWUgPSAnUGxheWVyIDInO1xuICAgIGNvbnN0IGlzSHVtYW4gPSBmYWxzZTtcblxuICAgIGxldCBpbml0aWFsSGl0ID0gbnVsbDtcbiAgICBsZXQgcHJldmlvdXNBdHRhY2tIaXQgPSBmYWxzZTtcbiAgICBsZXQgaGl0SGlzdG9yeSA9IFtdO1xuICAgIGxldCBhdHRhY2tTdGFjayA9IFtdO1xuICAgIGNvbnN0IGF0dGFjayA9IGZ1bmN0aW9uIChvcHBvbmVudCkge1xuICAgICAgICBpZiAoaW5pdGlhbEhpdCkge1xuICAgICAgICAgICAgY29uc3QgYXR0YWNrZWRTaGlwID0gb3Bwb25lbnQuYm9hcmQuZ2V0U2hpcEF0KGluaXRpYWxIaXQpO1xuICAgICAgICAgICAgaWYgKGF0dGFja2VkU2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1bmtTaGlwQ29vcmRpbmF0ZXMgPSBhdHRhY2tlZFNoaXAuaGl0Q29vcmRpbmF0ZXMubWFwKChoaXRDb29yZGluYXRlKSA9PiBKU09OLnN0cmluZ2lmeShoaXRDb29yZGluYXRlKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBoaXRIaXN0b3J5LmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdW5rU2hpcENvb3JkaW5hdGVzLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGUpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nQ29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaGl0SGlzdG9yeSA9IHJlbWFpbmluZ0Nvb3JkaW5hdGVzO1xuICAgICAgICAgICAgICAgIGF0dGFja1N0YWNrID0gW107XG5cbiAgICAgICAgICAgICAgICBpZiAoaGl0SGlzdG9yeS5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsSGl0ID0gaGl0SGlzdG9yeS5wb3AoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsSGl0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5pdGlhbEhpdCAmJiBhdHRhY2tTdGFjay5sZW5ndGggPT09IDAgJiYgaGl0SGlzdG9yeS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxlQXR0YWNrcyA9IFtdXG4gICAgICAgICAgICBwb3NzaWJsZUF0dGFja3MucHVzaChbaW5pdGlhbEhpdFswXSwgaW5pdGlhbEhpdFsxXSArIDFdKTtcbiAgICAgICAgICAgIHBvc3NpYmxlQXR0YWNrcy5wdXNoKFtpbml0aWFsSGl0WzBdLCBpbml0aWFsSGl0WzFdIC0gMV0pO1xuICAgICAgICAgICAgcG9zc2libGVBdHRhY2tzLnB1c2goW2luaXRpYWxIaXRbMF0gKyAxLCBpbml0aWFsSGl0WzFdXSk7XG4gICAgICAgICAgICBwb3NzaWJsZUF0dGFja3MucHVzaChbaW5pdGlhbEhpdFswXSAtIDEsIGluaXRpYWxIaXRbMV1dKTtcbiAgICAgICAgICAgIHBvc3NpYmxlQXR0YWNrcy5mb3JFYWNoKChwb3NzaWJsZUF0dGFjaykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvcHBvbmVudC5ib2FyZC5pc0F0dGFja2FibGUocG9zc2libGVBdHRhY2spKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFja1N0YWNrLnB1c2gocG9zc2libGVBdHRhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbEhpdCAmJiBoaXRIaXN0b3J5Lmxlbmd0aCA+PSAxICYmIHByZXZpb3VzQXR0YWNrSGl0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdIaXQgPSBoaXRIaXN0b3J5W2hpdEhpc3RvcnkubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBjb25zdCB4MSA9IGluaXRpYWxIaXRbMV07XG4gICAgICAgICAgICBjb25zdCB5MSA9IGluaXRpYWxIaXRbMF07XG4gICAgICAgICAgICBjb25zdCB4MiA9IG5ld0hpdFsxXTtcbiAgICAgICAgICAgIGNvbnN0IHkyID0gbmV3SGl0WzBdO1xuXG4gICAgICAgICAgICBjb25zdCB4RGlmZiA9IHgxIC0geDI7XG4gICAgICAgICAgICBjb25zdCB5RGlmZiA9IHkxIC0geTI7XG5cbiAgICAgICAgICAgIGlmICh4RGlmZiA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyByaWdodFxuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0T25lID0gW25ld0hpdFswXSwgbmV3SGl0WzFdICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkLmlzQXR0YWNrYWJsZShyaWdodE9uZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrU3RhY2sucHVzaChyaWdodE9uZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh4RGlmZiA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBsZWZ0XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdE9uZSA9IFtuZXdIaXRbMF0sIG5ld0hpdFsxXSAtIDFdO1xuICAgICAgICAgICAgICAgIGlmIChvcHBvbmVudC5ib2FyZC5pc0F0dGFja2FibGUobGVmdE9uZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrU3RhY2sucHVzaChsZWZ0T25lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHlEaWZmIDwgMCkge1xuICAgICAgICAgICAgICAgIC8vIHVwXG4gICAgICAgICAgICAgICAgY29uc3QgdXBPbmUgPSBbbmV3SGl0WzBdICsgMSwgbmV3SGl0WzFdXVxuICAgICAgICAgICAgICAgIGlmIChvcHBvbmVudC5ib2FyZC5pc0F0dGFja2FibGUodXBPbmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFja1N0YWNrLnB1c2godXBPbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeURpZmYgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gZG93blxuICAgICAgICAgICAgICAgIGNvbnN0IGRvd25PbmUgPSBbbmV3SGl0WzBdIC0gMSwgbmV3SGl0WzFdXTtcbiAgICAgICAgICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmQuaXNBdHRhY2thYmxlKGRvd25PbmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFja1N0YWNrLnB1c2goZG93bk9uZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0dGFja1N0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRhY2tTdGFjay5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0YWNrU3RhY2subGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dGFja1Bvb2wgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdyArPSAxKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHBvbmVudC5ib2FyZC5pc0F0dGFja2FibGUoW3JvdywgY29sXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja1Bvb2wucHVzaChbcm93LCBjb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoYXR0YWNrUG9vbC5sZW5ndGggLSAxKSlcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUF0dGFjayA9IGF0dGFja1Bvb2xbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgcmV0dXJuIHJhbmRvbUF0dGFja1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGxvZ0F0dGFjayA9IChpc0hpdCwgY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBpZiAoaXNIaXQgJiYgIWluaXRpYWxIaXQpIHtcbiAgICAgICAgICAgIGluaXRpYWxIaXQgPSBjb29yZGluYXRlO1xuICAgICAgICAgICAgcHJldmlvdXNBdHRhY2tIaXQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGlzSGl0KSB7XG4gICAgICAgICAgICBoaXRIaXN0b3J5LnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICBwcmV2aW91c0F0dGFja0hpdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcmV2aW91c0F0dGFja0hpdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgLi4ucGxheWVyKCksIGF0dGFjaywgbG9nQXR0YWNrLCBpc0h1bWFuLCBteVR1cm4sIG5hbWUgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoaXAobGVuZ3RoLCBvcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCcpIHtcbiAgICBjb25zdCBoaXRDb29yZGluYXRlcyA9IFtdO1xuXG4gICAgY29uc3QgaGl0ID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgaGl0Q29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlKVxuICAgICAgICByZXR1cm4gaGl0Q29vcmRpbmF0ZXNcbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiAobGVuZ3RoIC0gaGl0Q29vcmRpbmF0ZXMubGVuZ3RoKSA8PSAwXG5cbiAgICByZXR1cm4geyBsZW5ndGgsIG9yaWVudGF0aW9uLCBoaXRDb29yZGluYXRlcywgaGl0LCBpc1N1bmsgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJ2YXIgd2VicGFja1F1ZXVlcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgcXVldWVzXCIpIDogXCJfX3dlYnBhY2tfcXVldWVzX19cIjtcbnZhciB3ZWJwYWNrRXhwb3J0cyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXhwb3J0c1wiKSA6IFwiX193ZWJwYWNrX2V4cG9ydHNfX1wiO1xudmFyIHdlYnBhY2tFcnJvciA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXJyb3JcIikgOiBcIl9fd2VicGFja19lcnJvcl9fXCI7XG52YXIgcmVzb2x2ZVF1ZXVlID0gKHF1ZXVlKSA9PiB7XG5cdGlmKHF1ZXVlICYmIHF1ZXVlLmQgPCAxKSB7XG5cdFx0cXVldWUuZCA9IDE7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0pKTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSA/IGZuLnIrKyA6IGZuKCkpKTtcblx0fVxufVxudmFyIHdyYXBEZXBzID0gKGRlcHMpID0+IChkZXBzLm1hcCgoZGVwKSA9PiB7XG5cdGlmKGRlcCAhPT0gbnVsbCAmJiB0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKSB7XG5cdFx0aWYoZGVwW3dlYnBhY2tRdWV1ZXNdKSByZXR1cm4gZGVwO1xuXHRcdGlmKGRlcC50aGVuKSB7XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHRcdHF1ZXVlLmQgPSAwO1xuXHRcdFx0ZGVwLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFeHBvcnRzXSA9IHI7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9LCAoZSkgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0Vycm9yXSA9IGU7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdG9ialt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKGZuKHF1ZXVlKSk7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0fVxuXHR2YXIgcmV0ID0ge307XG5cdHJldFt3ZWJwYWNrUXVldWVzXSA9IHggPT4ge307XG5cdHJldFt3ZWJwYWNrRXhwb3J0c10gPSBkZXA7XG5cdHJldHVybiByZXQ7XG59KSk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmEgPSAobW9kdWxlLCBib2R5LCBoYXNBd2FpdCkgPT4ge1xuXHR2YXIgcXVldWU7XG5cdGhhc0F3YWl0ICYmICgocXVldWUgPSBbXSkuZCA9IC0xKTtcblx0dmFyIGRlcFF1ZXVlcyA9IG5ldyBTZXQoKTtcblx0dmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblx0dmFyIGN1cnJlbnREZXBzO1xuXHR2YXIgb3V0ZXJSZXNvbHZlO1xuXHR2YXIgcmVqZWN0O1xuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWopID0+IHtcblx0XHRyZWplY3QgPSByZWo7XG5cdFx0b3V0ZXJSZXNvbHZlID0gcmVzb2x2ZTtcblx0fSk7XG5cdHByb21pc2Vbd2VicGFja0V4cG9ydHNdID0gZXhwb3J0cztcblx0cHJvbWlzZVt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKHF1ZXVlICYmIGZuKHF1ZXVlKSwgZGVwUXVldWVzLmZvckVhY2goZm4pLCBwcm9taXNlW1wiY2F0Y2hcIl0oeCA9PiB7fSkpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IHByb21pc2U7XG5cdGJvZHkoKGRlcHMpID0+IHtcblx0XHRjdXJyZW50RGVwcyA9IHdyYXBEZXBzKGRlcHMpO1xuXHRcdHZhciBmbjtcblx0XHR2YXIgZ2V0UmVzdWx0ID0gKCkgPT4gKGN1cnJlbnREZXBzLm1hcCgoZCkgPT4ge1xuXHRcdFx0aWYoZFt3ZWJwYWNrRXJyb3JdKSB0aHJvdyBkW3dlYnBhY2tFcnJvcl07XG5cdFx0XHRyZXR1cm4gZFt3ZWJwYWNrRXhwb3J0c107XG5cdFx0fSkpXG5cdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0Zm4gPSAoKSA9PiAocmVzb2x2ZShnZXRSZXN1bHQpKTtcblx0XHRcdGZuLnIgPSAwO1xuXHRcdFx0dmFyIGZuUXVldWUgPSAocSkgPT4gKHEgIT09IHF1ZXVlICYmICFkZXBRdWV1ZXMuaGFzKHEpICYmIChkZXBRdWV1ZXMuYWRkKHEpLCBxICYmICFxLmQgJiYgKGZuLnIrKywgcS5wdXNoKGZuKSkpKTtcblx0XHRcdGN1cnJlbnREZXBzLm1hcCgoZGVwKSA9PiAoZGVwW3dlYnBhY2tRdWV1ZXNdKGZuUXVldWUpKSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZuLnIgPyBwcm9taXNlIDogZ2V0UmVzdWx0KCk7XG5cdH0sIChlcnIpID0+ICgoZXJyID8gcmVqZWN0KHByb21pc2Vbd2VicGFja0Vycm9yXSA9IGVycikgOiBvdXRlclJlc29sdmUoZXhwb3J0cykpLCByZXNvbHZlUXVldWUocXVldWUpKSk7XG5cdHF1ZXVlICYmIHF1ZXVlLmQgPCAwICYmIChxdWV1ZS5kID0gMCk7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9