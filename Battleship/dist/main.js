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
    gap: 10px;
}

.ship-container {
    flex: 1;
    width: 25px;
    border: 1px solid white;
    background-color: black;

    display: flex;
    flex-direction: column;
}

.ship-body {
    height: 25px;
    border: 1px solid white;
    background-color: black;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;;IAEnB,8BAA8B;IAC9B,kHAAkH;IAClH,0DAA0D;IAC1D,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;AACd;;AAEA,SAAS;AACT;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA,oBAAoB;AACpB;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;;IAEI,YAAY;IACZ,iBAAiB;;IAEjB,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA,0BAA0B;AAC1B;IACI,WAAW;;IAEX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,OAAO;IACP,WAAW;IACX,uBAAuB;IACvB,uBAAuB;;IAEvB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,uBAAuB;AAC3B","sourcesContent":["body {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    background: rgb(194, 178, 128);\n    background: linear-gradient(0deg, rgba(194, 178, 128, 1) 0%, rgba(194, 178, 128, 1) 0%, rgba(35, 137, 218, 1) 20%);\n    box-shadow: inset 0px 0px 23px 12px rgba(194, 178, 128, 1);\n    border: 2px inset #C2B280;\n}\n\n.removed {\n    display: none;\n}\n\n.hidden {\n    opacity: 0;\n}\n\n/* Menu */\n.game-mode-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n/* Battleship Game */\n.battleship-container {\n    max-width: 1200px;\n}\n\n.player-boards {\n    display: flex;\n    justify-content: space-between;\n}\n\n.player1-board,\n.player2-board {\n    width: 500px;\n    min-height: 500px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.tile {\n    border: 1px solid #005b72;\n}\n\n.tile:hover {\n    background-color: lightblue;\n}\n\n.tile.ship {\n    background-color: black;\n}\n\n.tile.hit {\n    background-color: red;\n}\n\n.tile.missed {\n    background-color: yellow;\n}\n\n/* Ship pieces container */\n.draggable-ships-container {\n    width: 50px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n.ship-container {\n    flex: 1;\n    width: 25px;\n    border: 1px solid white;\n    background-color: black;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.ship-body {\n    height: 25px;\n    border: 1px solid white;\n    background-color: black;\n}"],"sourceRoot":""}]);
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
        renderGameBoards(players, true);
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

function renderGameBoards(players, gameOver = false) {
    const [player1, player2] = players
    const playerVsComputer = !(player1.isHuman && player2.isHuman)

    players.forEach((player, index) => {
        const boardNode = document.querySelector(`.player${index + 1}-board`);
        const hitCoordinates = player.board.hitAttacks;
        const missedCoordinates = player.board.missedAttacks;
        const tiles = [];

        player.board.state.forEach((row, rowIndex) => {
            row.forEach((column, columnIndex) => {
                const tile = document.createElement('div');
                tile.classList.add('tile');
                tile.id = `${index + 1}-${rowIndex}-${columnIndex}`
                if (column && player.isHuman && (playerVsComputer || !player.isReady)) {
                    tile.classList.add('ship')
                }

                const ready = players.every((p) => p.isReady)
                if (ready && !player.myTurn && player.board.isAttackable([rowIndex, columnIndex]) && (!player.isHuman || !playerVsComputer) && !gameOver) {
                    const coordinate = [rowIndex, columnIndex]
                    tile.addEventListener('click', () => {
                        makeAttack(players, coordinate)
                    })
                }

                tiles.push(tile)
            })
        })
        boardNode.replaceChildren(...tiles);

        hitCoordinates.forEach((coordinate) => {
            const [row, column] = coordinate;
            const tile = document.getElementById(`${index + 1}-${row}-${column}`);
            tile.classList.add('hit');
        })
        missedCoordinates.forEach((coordinate) => {
            const [row, column] = coordinate;
            const tile = document.getElementById(`${index + 1}-${row}-${column}`);
            tile.classList.add('missed');
        })
    })
}

async function startGame(players, ship) {
    renderGameBoards(players)
    const battleShipContainer = document.querySelector('.battleship-container');
    battleShipContainer.classList.remove('removed');

    const [player1, player2] = players
    ;(0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.createRandomShipPlacementButton)(player1, ship, players, renderGameBoards)
    ;(0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.createDraggableShipElements)(player1, ship, players, renderGameBoards)
    await (0,_placeShips__WEBPACK_IMPORTED_MODULE_0__["default"])(player1)

    if (player2.isHuman) {
        (0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.createRandomShipPlacementButton)(player2, ship, players, renderGameBoards)
        ;(0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.createDraggableShipElements)(player2, ship, players, renderGameBoards)
        await (0,_placeShips__WEBPACK_IMPORTED_MODULE_0__["default"])(player2);
    } else {
        (0,_placeShips__WEBPACK_IMPORTED_MODULE_0__.randomShipPlacement)(player2, ship, players, renderGameBoards)
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
    for (let row = 0; row < 10; row += 1) {
        state.push([]);
        for (let col = 0; col < 10; col += 1) {
            state[row].push(false);
        }
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

    // TODO: Probably remove: shipCoordinates, getPlacedShips, getShipCoordinates
    // TODO: Keep track of firstCoordinate!
    const shipCoordinates = [];
    const placeShip = (ship, firstCoordinate) => {
        const coordinates = []
        for (let i = 0; i < ship.length; i += 1) {
            if (ship.orientation === 'horizontal') {
                coordinates.push([firstCoordinate[0], firstCoordinate[1] + i])
            } else if (ship.orientation === 'vertical') {
                coordinates.push([firstCoordinate[0] + i, firstCoordinate[1]])
            }
        }

        if (validShipPlacement(coordinates)) {
            const index = shipCoordinates.findIndex((shipObject) => shipObject.ship === ship);
            if (index > -1) {
                shipCoordinates[index].coordinate = coordinates;
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

    const areAllShipsPlaced = () => {
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

    const getPlacedShips = () => {
        const shipsArray = [];
        shipCoordinates.forEach((shipObject) => {
            shipsArray.push(shipObject.ship);
        })
        return shipsArray;
    }

    const getShip = (coordinate) => {
        const [row, column] = coordinate;
        const theShip = state[row][column];
        return theShip
    }

    const getShipHeadCoordinate = (ship) => {
        /* for (let index = 0; index < shipCoordinates.length; index += 1) {
            const shipObject = shipCoordinates[index]
            if (shipObject.ship === ship) {
                return shipObject.coordinates[0]
            }
        } */
        const index = shipCoordinates.findIndex((shipObject) => shipObject.ship === ship);
        if (index > -1) {
            return shipCoordinates[index].coordinates[0]
        }

        return false
    }

    const getShipCoordinates = (ship) => {
        /* for (let index = 0; index < shipCoordinates.length; index += 1) {
            const shipObject = shipCoordinates[index]
            if (shipObject.ship === ship) {
                return shipObject.coordinates
            }
        } */
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

    return { placeShip, receiveAttack, allSunk, isAttackable, areAllShipsPlaced, removePlacedShips, getShip, getShipHeadCoordinate, getShipCoordinates, state, shipCoordinates, hitAttacks, missedAttacks }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./battleship */ "./src/battleship.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






/*
1. Menu screen (Player v Player, Player v Computer)
1a. New game vs load game feature
2. 
*/

// Called on refresh if there is nothing in local storage
// Or on 'Play again' button
(0,_battleship__WEBPACK_IMPORTED_MODULE_3__["default"])(await (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])(_player__WEBPACK_IMPORTED_MODULE_1__.human, _player__WEBPACK_IMPORTED_MODULE_1__.computer), _ship__WEBPACK_IMPORTED_MODULE_0__["default"])
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
/* harmony export */   randomShipPlacement: () => (/* binding */ randomShipPlacement)
/* harmony export */ });
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

function randomShipPlacement(player, ship, players, renderGameBoards) {
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
        while (!player.board.placeShip(ship(length, randomOrientation), placementPool[randomIndex])) {
            randomIndex = Math.floor(Math.random() * placementPool.length)
        }

    })

    if (player.isHuman && player.board.areAllShipsPlaced()) {
        const readyUpButton = document.querySelector('.ready-up');
        readyUpButton.classList.remove('removed');
    }

    renderGameBoards(players)
}


function createRandomShipPlacementButton(player, ship, players, renderGameBoards) {
    const randomShipPlacementButton = document.createElement('button');
    const body = document.querySelector('body')
    randomShipPlacementButton.classList.add('random-ship-placement');
    randomShipPlacementButton.textContent = 'Randomize Ships!'
    body.appendChild(randomShipPlacementButton);

    randomShipPlacementButton.addEventListener('click', () => randomShipPlacement(player, ship, players, renderGameBoards))
    randomShipPlacementButton.addEventListener('click', () => {
        const draggableShipsContainer = document.querySelector('.draggable-ships-container');
        while (draggableShipsContainer.firstChild) {
            draggableShipsContainer.removeChild(draggableShipsContainer.firstChild)
        }
    })
}

// TODO:
// Add ships to ship-placement-container
// Allow them to be draggable but not droppable
// give class to ships: length-#
// For Board:
//  Make ships draggable and droppable
function createDraggableShipElements(player, ship, players, renderGameBoards) {
    const draggableShipsContainer = document.querySelector('.draggable-ships-container');
    [5, 4, 3, 3, 2].forEach((length) => {
        const shipContainerElement = document.createElement('div');
        shipContainerElement.classList.add('ship-container', `length-${length}`);

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

    return { readyUp, board, isReady }
}
// TODO: Test switchTurn and readyUp

function human(myTurn = false) {
    const name = myTurn ? 'Player 1' : 'Player 2'
    const isHuman = true;

    const switchTurn = function () {
        this.myTurn = !this.myTurn;
    }

    return { ...player(), switchTurn, isHuman, myTurn, name }
}

function computer(myTurn = false) {
    const name = 'Player 2';
    const isHuman = false;

    const switchTurn = function () {
        this.myTurn = !this.myTurn;
    }

    let initialHit = null;
    let previousAttackHit = false;
    let hitHistory = [];
    let attackStack = [];
    const attack = function (opponent) {
        if (initialHit) {
            const attackedShip = opponent.board.getShip(initialHit);
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

    return { ...player(), attack, switchTurn, logAttack, isHuman, myTurn, name }
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
function ship(length, orientation = 'horizontal') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQSxzR0FBc0c7V0FDdEc7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBLEVBQUU7V0FDRjtXQUNBOzs7OztXQ2hFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2JhdHRsZXNoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcGxhY2VTaGlwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYmFja2dyb3VuZDogcmdiKDE5NCwgMTc4LCAxMjgpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpIDAlLCByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpIDAlLCByZ2JhKDM1LCAxMzcsIDIxOCwgMSkgMjAlKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDIzcHggMTJweCByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xuICAgIGJvcmRlcjogMnB4IGluc2V0ICNDMkIyODA7XG59XG5cbi5yZW1vdmVkIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGlkZGVuIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4vKiBNZW51ICovXG4uZ2FtZS1tb2RlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuLyogQmF0dGxlc2hpcCBHYW1lICovXG4uYmF0dGxlc2hpcC1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xufVxuXG4ucGxheWVyLWJvYXJkcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wbGF5ZXIxLWJvYXJkLFxuLnBsYXllcjItYm9hcmQge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi50aWxlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA1YjcyO1xufVxuXG4udGlsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufVxuXG4udGlsZS5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnRpbGUuaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi50aWxlLm1pc3NlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4vKiBTaGlwIHBpZWNlcyBjb250YWluZXIgKi9cbi5kcmFnZ2FibGUtc2hpcHMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNTBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLnNoaXAtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2hpcC1ib2R5IHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixhQUFhOztJQUViLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsOEJBQThCO0lBQzlCLGtIQUFrSDtJQUNsSCwwREFBMEQ7SUFDMUQseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7O0lBRWpCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLFdBQVc7O0lBRVgsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksT0FBTztJQUNQLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsdUJBQXVCOztJQUV2QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYigxOTQsIDE3OCwgMTI4KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTk0LCAxNzgsIDEyOCwgMSkgMCUsIHJnYmEoMTk0LCAxNzgsIDEyOCwgMSkgMCUsIHJnYmEoMzUsIDEzNywgMjE4LCAxKSAyMCUpO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDIzcHggMTJweCByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xcbiAgICBib3JkZXI6IDJweCBpbnNldCAjQzJCMjgwO1xcbn1cXG5cXG4ucmVtb3ZlZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4vKiBNZW51ICovXFxuLmdhbWUtbW9kZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIEJhdHRsZXNoaXAgR2FtZSAqL1xcbi5iYXR0bGVzaGlwLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnBsYXllcjEtYm9hcmQsXFxuLnBsYXllcjItYm9hcmQge1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi50aWxlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwNWI3MjtcXG59XFxuXFxuLnRpbGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbi50aWxlLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRpbGUuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udGlsZS5taXNzZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi8qIFNoaXAgcGllY2VzIGNvbnRhaW5lciAqL1xcbi5kcmFnZ2FibGUtc2hpcHMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNoaXAtY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNoaXAtYm9keSB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgZmluaXNoZWRQbGFjaW5nU2hpcHMsIHsgY3JlYXRlUmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbiwgcmFuZG9tU2hpcFBsYWNlbWVudCwgY3JlYXRlRHJhZ2dhYmxlU2hpcEVsZW1lbnRzIH0gZnJvbSBcIi4vcGxhY2VTaGlwc1wiO1xuXG5mdW5jdGlvbiBzd2l0Y2hUdXJuKHBsYXllcnMpIHtcbiAgICBwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgICBwbGF5ZXIuc3dpdGNoVHVybigpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGlzR2FtZU92ZXIocGxheWVycykge1xuICAgIGNvbnN0IGxvc2VyID0gcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gcGxheWVyLmJvYXJkLmFsbFN1bmsoKSk7XG4gICAgaWYgKGxvc2VyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgW3dpbm5lcl0gPSBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiAhcGxheWVyLmJvYXJkLmFsbFN1bmsoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBXaW5uZXI6ICR7d2lubmVyLm5hbWV9YClcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWFrZUF0dGFjayhwbGF5ZXJzLCBjb29yZGluYXRlKSB7XG4gICAgbGV0IFthdHRhY2tlZFBsYXllcl0gPSBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiAhcGxheWVyLm15VHVybik7XG4gICAgbGV0IFthdHRhY2tpbmdQbGF5ZXJdID0gcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gcGxheWVyLm15VHVybik7XG5cbiAgICBpZiAoIWF0dGFja2luZ1BsYXllci5pc0h1bWFuKSB7XG4gICAgICAgIGF0dGFja2luZ1BsYXllci5sb2dBdHRhY2soYXR0YWNrZWRQbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSwgY29vcmRpbmF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXR0YWNrZWRQbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcbiAgICB9XG5cbiAgICBpZiAoaXNHYW1lT3ZlcihwbGF5ZXJzKSkge1xuICAgICAgICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMsIHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaFR1cm4ocGxheWVycyk7XG4gICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKTtcblxuICAgIC8vIENvbXB1dGVyIEF0dGFja1xuICAgIFthdHRhY2tlZFBsYXllcl0gPSBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiAhcGxheWVyLm15VHVybik7XG4gICAgW2F0dGFja2luZ1BsYXllcl0gPSBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiBwbGF5ZXIubXlUdXJuKTtcbiAgICBpZiAoIWF0dGFja2luZ1BsYXllci5pc0h1bWFuKSB7XG4gICAgICAgIGNvbnN0IGF0dGFja0Nvb3JkaW5hdGUgPSBhdHRhY2tpbmdQbGF5ZXIuYXR0YWNrKGF0dGFja2VkUGxheWVyKTtcbiAgICAgICAgbWFrZUF0dGFjayhwbGF5ZXJzLCBhdHRhY2tDb29yZGluYXRlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckdhbWVCb2FyZHMocGxheWVycywgZ2FtZU92ZXIgPSBmYWxzZSkge1xuICAgIGNvbnN0IFtwbGF5ZXIxLCBwbGF5ZXIyXSA9IHBsYXllcnNcbiAgICBjb25zdCBwbGF5ZXJWc0NvbXB1dGVyID0gIShwbGF5ZXIxLmlzSHVtYW4gJiYgcGxheWVyMi5pc0h1bWFuKVxuXG4gICAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGJvYXJkTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXIke2luZGV4ICsgMX0tYm9hcmRgKTtcbiAgICAgICAgY29uc3QgaGl0Q29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmQuaGl0QXR0YWNrcztcbiAgICAgICAgY29uc3QgbWlzc2VkQ29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmQubWlzc2VkQXR0YWNrcztcbiAgICAgICAgY29uc3QgdGlsZXMgPSBbXTtcblxuICAgICAgICBwbGF5ZXIuYm9hcmQuc3RhdGUuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKGNvbHVtbiwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5pZCA9IGAke2luZGV4ICsgMX0tJHtyb3dJbmRleH0tJHtjb2x1bW5JbmRleH1gXG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbiAmJiBwbGF5ZXIuaXNIdW1hbiAmJiAocGxheWVyVnNDb21wdXRlciB8fCAhcGxheWVyLmlzUmVhZHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZHkgPSBwbGF5ZXJzLmV2ZXJ5KChwKSA9PiBwLmlzUmVhZHkpXG4gICAgICAgICAgICAgICAgaWYgKHJlYWR5ICYmICFwbGF5ZXIubXlUdXJuICYmIHBsYXllci5ib2FyZC5pc0F0dGFja2FibGUoW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0pICYmICghcGxheWVyLmlzSHVtYW4gfHwgIXBsYXllclZzQ29tcHV0ZXIpICYmICFnYW1lT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0gW3Jvd0luZGV4LCBjb2x1bW5JbmRleF1cbiAgICAgICAgICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VBdHRhY2socGxheWVycywgY29vcmRpbmF0ZSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aWxlcy5wdXNoKHRpbGUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBib2FyZE5vZGUucmVwbGFjZUNoaWxkcmVuKC4uLnRpbGVzKTtcblxuICAgICAgICBoaXRDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpbmRleCArIDF9LSR7cm93fS0ke2NvbHVtbn1gKTtcbiAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgIH0pXG4gICAgICAgIG1pc3NlZENvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2luZGV4ICsgMX0tJHtyb3d9LSR7Y29sdW1ufWApO1xuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzdGFydEdhbWUocGxheWVycywgc2hpcCkge1xuICAgIHJlbmRlckdhbWVCb2FyZHMocGxheWVycylcbiAgICBjb25zdCBiYXR0bGVTaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZXNoaXAtY29udGFpbmVyJyk7XG4gICAgYmF0dGxlU2hpcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVkJyk7XG5cbiAgICBjb25zdCBbcGxheWVyMSwgcGxheWVyMl0gPSBwbGF5ZXJzXG4gICAgY3JlYXRlUmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbihwbGF5ZXIxLCBzaGlwLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKVxuICAgIGNyZWF0ZURyYWdnYWJsZVNoaXBFbGVtZW50cyhwbGF5ZXIxLCBzaGlwLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKVxuICAgIGF3YWl0IGZpbmlzaGVkUGxhY2luZ1NoaXBzKHBsYXllcjEpXG5cbiAgICBpZiAocGxheWVyMi5pc0h1bWFuKSB7XG4gICAgICAgIGNyZWF0ZVJhbmRvbVNoaXBQbGFjZW1lbnRCdXR0b24ocGxheWVyMiwgc2hpcCwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcylcbiAgICAgICAgY3JlYXRlRHJhZ2dhYmxlU2hpcEVsZW1lbnRzKHBsYXllcjIsIHNoaXAsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpXG4gICAgICAgIGF3YWl0IGZpbmlzaGVkUGxhY2luZ1NoaXBzKHBsYXllcjIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJhbmRvbVNoaXBQbGFjZW1lbnQocGxheWVyMiwgc2hpcCwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcylcbiAgICAgICAgcGxheWVyMi5yZWFkeVVwKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVCb2FyZCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IFtdO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3cgKz0gMSkge1xuICAgICAgICBzdGF0ZS5wdXNoKFtdKTtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCArPSAxKSB7XG4gICAgICAgICAgICBzdGF0ZVtyb3ddLnB1c2goZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWRTaGlwUGxhY2VtZW50ID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBjb29yZGluYXRlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgICAgICAgICAgaWYgKHJvdyA8IDAgfHwgcm93ID4gOSB8fCBjb2x1bW4gPCAwIHx8IGNvbHVtbiA+IDkgfHwgc3RhdGVbcm93XVtjb2x1bW5dKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBQcm9iYWJseSByZW1vdmU6IHNoaXBDb29yZGluYXRlcywgZ2V0UGxhY2VkU2hpcHMsIGdldFNoaXBDb29yZGluYXRlc1xuICAgIC8vIFRPRE86IEtlZXAgdHJhY2sgb2YgZmlyc3RDb29yZGluYXRlIVxuICAgIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IFtdO1xuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBmaXJzdENvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKFtmaXJzdENvb3JkaW5hdGVbMF0sIGZpcnN0Q29vcmRpbmF0ZVsxXSArIGldKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbZmlyc3RDb29yZGluYXRlWzBdICsgaSwgZmlyc3RDb29yZGluYXRlWzFdXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZFNoaXBQbGFjZW1lbnQoY29vcmRpbmF0ZXMpKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHNoaXBDb29yZGluYXRlcy5maW5kSW5kZXgoKHNoaXBPYmplY3QpID0+IHNoaXBPYmplY3Quc2hpcCA9PT0gc2hpcCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHNoaXBDb29yZGluYXRlc1tpbmRleF0uY29vcmRpbmF0ZSA9IGNvb3JkaW5hdGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaCh7ICdzaGlwJzogc2hpcCwgJ2Nvb3JkaW5hdGVzJzogY29vcmRpbmF0ZXMgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgICAgICAgICAgICBzdGF0ZVtyb3ddW2NvbHVtbl0gPSBzaGlwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgYXJlQWxsU2hpcHNQbGFjZWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYWNlZFNoaXBzID0gW107XG4gICAgICAgIHN0YXRlLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb2x1bW4gJiYgIXBsYWNlZFNoaXBzLmluY2x1ZGVzKGNvbHVtbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VkU2hpcHMucHVzaChjb2x1bW4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcGxhY2VkU2hpcHMubGVuZ3RoID09PSA1O1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVBsYWNlZFNoaXBzID0gKCkgPT4ge1xuICAgICAgICBzdGF0ZS5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlW3Jvd0luZGV4XVtjb2xJbmRleF0gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHNoaXBDb29yZGluYXRlcy5zcGxpY2UoMCwgc2hpcENvb3JkaW5hdGVzLmxlbmd0aClcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQbGFjZWRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHNBcnJheSA9IFtdO1xuICAgICAgICBzaGlwQ29vcmRpbmF0ZXMuZm9yRWFjaCgoc2hpcE9iamVjdCkgPT4ge1xuICAgICAgICAgICAgc2hpcHNBcnJheS5wdXNoKHNoaXBPYmplY3Quc2hpcCk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBzaGlwc0FycmF5O1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNoaXAgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgICAgY29uc3QgdGhlU2hpcCA9IHN0YXRlW3Jvd11bY29sdW1uXTtcbiAgICAgICAgcmV0dXJuIHRoZVNoaXBcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaGlwSGVhZENvb3JkaW5hdGUgPSAoc2hpcCkgPT4ge1xuICAgICAgICAvKiBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcENvb3JkaW5hdGVzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcE9iamVjdCA9IHNoaXBDb29yZGluYXRlc1tpbmRleF1cbiAgICAgICAgICAgIGlmIChzaGlwT2JqZWN0LnNoaXAgPT09IHNoaXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hpcE9iamVjdC5jb29yZGluYXRlc1swXVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICovXG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2hpcENvb3JkaW5hdGVzLmZpbmRJbmRleCgoc2hpcE9iamVjdCkgPT4gc2hpcE9iamVjdC5zaGlwID09PSBzaGlwKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwQ29vcmRpbmF0ZXNbaW5kZXhdLmNvb3JkaW5hdGVzWzBdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaGlwQ29vcmRpbmF0ZXMgPSAoc2hpcCkgPT4ge1xuICAgICAgICAvKiBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcENvb3JkaW5hdGVzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcE9iamVjdCA9IHNoaXBDb29yZGluYXRlc1tpbmRleF1cbiAgICAgICAgICAgIGlmIChzaGlwT2JqZWN0LnNoaXAgPT09IHNoaXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hpcE9iamVjdC5jb29yZGluYXRlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICovXG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2hpcENvb3JkaW5hdGVzLmZpbmRJbmRleCgoc2hpcE9iamVjdCkgPT4gc2hpcE9iamVjdC5zaGlwID09PSBzaGlwKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwQ29vcmRpbmF0ZXNbaW5kZXhdLmNvb3JkaW5hdGVzXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBoaXRBdHRhY2tzID0gW107XG4gICAgY29uc3QgbWlzc2VkQXR0YWNrcyA9IFtdO1xuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgICAgY29uc3QgYm9hcmRUaWxlID0gc3RhdGVbcm93XVtjb2x1bW5dO1xuICAgICAgICBpZiAoYm9hcmRUaWxlKSB7XG4gICAgICAgICAgICBib2FyZFRpbGUuaGl0KGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgaGl0QXR0YWNrcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBtaXNzZWRBdHRhY2tzLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWRBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgICAgcmV0dXJuIHJvdyA+PSAwICYmIHJvdyA8PSA5ICYmIGNvbHVtbiA+PSAwICYmIGNvbHVtbiA8PSA5O1xuICAgIH1cblxuICAgIGNvbnN0IGlzQXR0YWNrYWJsZSA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbEF0dGFja3MgPSBoaXRBdHRhY2tzLmNvbmNhdChtaXNzZWRBdHRhY2tzKS5tYXAoKGF0dGFjaykgPT4gSlNPTi5zdHJpbmdpZnkoYXR0YWNrKSk7XG4gICAgICAgIHJldHVybiAhYWxsQXR0YWNrcy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShjb29yZGluYXRlKSkgJiYgdmFsaWRBdHRhY2soY29vcmRpbmF0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwcyA9IGdldFBsYWNlZFNoaXBzKCk7XG4gICAgICAgIHJldHVybiBzaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSlcbiAgICB9XG5cbiAgICByZXR1cm4geyBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGFsbFN1bmssIGlzQXR0YWNrYWJsZSwgYXJlQWxsU2hpcHNQbGFjZWQsIHJlbW92ZVBsYWNlZFNoaXBzLCBnZXRTaGlwLCBnZXRTaGlwSGVhZENvb3JkaW5hdGUsIGdldFNoaXBDb29yZGluYXRlcywgc3RhdGUsIHNoaXBDb29yZGluYXRlcywgaGl0QXR0YWNrcywgbWlzc2VkQXR0YWNrcyB9XG59XG4iLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBodW1hbiwgY29tcHV0ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBkaXNwbGF5TWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuL2JhdHRsZXNoaXBcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbi8qXG4xLiBNZW51IHNjcmVlbiAoUGxheWVyIHYgUGxheWVyLCBQbGF5ZXIgdiBDb21wdXRlcilcbjFhLiBOZXcgZ2FtZSB2cyBsb2FkIGdhbWUgZmVhdHVyZVxuMi4gXG4qL1xuXG4vLyBDYWxsZWQgb24gcmVmcmVzaCBpZiB0aGVyZSBpcyBub3RoaW5nIGluIGxvY2FsIHN0b3JhZ2Vcbi8vIE9yIG9uICdQbGF5IGFnYWluJyBidXR0b25cbnN0YXJ0R2FtZShhd2FpdCBkaXNwbGF5TWVudShodW1hbiwgY29tcHV0ZXIpLCBzaGlwKSIsImZ1bmN0aW9uIHJlbW92ZU1lbnUoYm9keSkge1xuICAgIGJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtbW9kZS1jb250YWluZXInKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheU1lbnUoaHVtYW4sIGNvbXB1dGVyKSB7XG4gICAgY29uc3QgZ2FtZU1vZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwdnBNb2RlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHZwTW9kZUJ0bi50ZXh0Q29udGVudCA9ICdQbGF5ZXIgdnMuIFBsYXllcic7XG4gICAgY29uc3QgcHZjTW9kZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHB2Y01vZGVCdG4udGV4dENvbnRlbnQgPSAnUGxheWVyIHZzLiBDb21wdXRlcic7XG4gICAgZ2FtZU1vZGVDb250YWluZXIuYXBwZW5kQ2hpbGQocHZwTW9kZUJ0bik7XG4gICAgZ2FtZU1vZGVDb250YWluZXIuYXBwZW5kQ2hpbGQocHZjTW9kZUJ0bik7XG5cbiAgICBnYW1lTW9kZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lLW1vZGUtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2FtZU1vZGVDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHB2cE1vZGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVNZW51KGJvZHkpXG4gICAgICAgICAgICByZXNvbHZlKFtodW1hbih0cnVlKSwgaHVtYW4oKV0pO1xuICAgICAgICB9KVxuXG4gICAgICAgIHB2Y01vZGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVNZW51KGJvZHkpXG4gICAgICAgICAgICByZXNvbHZlKFtodW1hbih0cnVlKSwgY29tcHV0ZXIoKV0pO1xuICAgICAgICB9KVxuICAgIH0pXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluaXNoZWRQbGFjaW5nU2hpcHMocGxheWVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWR5VXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVhZHktdXAnKTtcbiAgICAgICAgcmVhZHlVcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlYWR5VXBCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVtb3ZlZCcpO1xuICAgICAgICAgICAgcGxheWVyLnJlYWR5VXAoKTtcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgICAgICBjb25zdCByYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbS1zaGlwLXBsYWNlbWVudCcpO1xuICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChyYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uKTtcblxuICAgICAgICAgICAgY29uc3QgcmVhZHlVcEJ1dHRvbkNsb25lID0gcmVhZHlVcEJ1dHRvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICByZWFkeVVwQnV0dG9uLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHJlYWR5VXBCdXR0b25DbG9uZSwgcmVhZHlVcEJ1dHRvbik7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVNoaXBQbGFjZW1lbnQocGxheWVyLCBzaGlwLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKSB7XG4gICAgcGxheWVyLmJvYXJkLnJlbW92ZVBsYWNlZFNoaXBzKCk7XG4gICAgY29uc3Qgc2hpcE9yaWVudGF0aW9ucyA9IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddO1xuXG4gICAgWzUsIDQsIDMsIDMsIDJdLmZvckVhY2goKGxlbmd0aCkgPT4ge1xuICAgICAgICBjb25zdCBwbGFjZW1lbnRQb29sID0gW11cbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdyArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sICs9IDEpIHtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnRQb29sLnB1c2goW3JvdywgY29sXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByYW5kb21PcmllbnRhdGlvbiA9IHNoaXBPcmllbnRhdGlvbnNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBsYWNlbWVudFBvb2wubGVuZ3RoKVxuICAgICAgICB3aGlsZSAoIXBsYXllci5ib2FyZC5wbGFjZVNoaXAoc2hpcChsZW5ndGgsIHJhbmRvbU9yaWVudGF0aW9uKSwgcGxhY2VtZW50UG9vbFtyYW5kb21JbmRleF0pKSB7XG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBsYWNlbWVudFBvb2wubGVuZ3RoKVxuICAgICAgICB9XG5cbiAgICB9KVxuXG4gICAgaWYgKHBsYXllci5pc0h1bWFuICYmIHBsYXllci5ib2FyZC5hcmVBbGxTaGlwc1BsYWNlZCgpKSB7XG4gICAgICAgIGNvbnN0IHJlYWR5VXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVhZHktdXAnKTtcbiAgICAgICAgcmVhZHlVcEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVkJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uKHBsYXllciwgc2hpcCwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykge1xuICAgIGNvbnN0IHJhbmRvbVNoaXBQbGFjZW1lbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgcmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyYW5kb20tc2hpcC1wbGFjZW1lbnQnKTtcbiAgICByYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uLnRleHRDb250ZW50ID0gJ1JhbmRvbWl6ZSBTaGlwcyEnXG4gICAgYm9keS5hcHBlbmRDaGlsZChyYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uKTtcblxuICAgIHJhbmRvbVNoaXBQbGFjZW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByYW5kb21TaGlwUGxhY2VtZW50KHBsYXllciwgc2hpcCwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykpXG4gICAgcmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dhYmxlLXNoaXBzLWNvbnRhaW5lcicpO1xuICAgICAgICB3aGlsZSAoZHJhZ2dhYmxlU2hpcHNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIucmVtb3ZlQ2hpbGQoZHJhZ2dhYmxlU2hpcHNDb250YWluZXIuZmlyc3RDaGlsZClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8vIFRPRE86XG4vLyBBZGQgc2hpcHMgdG8gc2hpcC1wbGFjZW1lbnQtY29udGFpbmVyXG4vLyBBbGxvdyB0aGVtIHRvIGJlIGRyYWdnYWJsZSBidXQgbm90IGRyb3BwYWJsZVxuLy8gZ2l2ZSBjbGFzcyB0byBzaGlwczogbGVuZ3RoLSNcbi8vIEZvciBCb2FyZDpcbi8vICBNYWtlIHNoaXBzIGRyYWdnYWJsZSBhbmQgZHJvcHBhYmxlXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRHJhZ2dhYmxlU2hpcEVsZW1lbnRzKHBsYXllciwgc2hpcCwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykge1xuICAgIGNvbnN0IGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnYWJsZS1zaGlwcy1jb250YWluZXInKTtcbiAgICBbNSwgNCwgMywgMywgMl0uZm9yRWFjaCgobGVuZ3RoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXBDb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NoaXAtY29udGFpbmVyJywgYGxlbmd0aC0ke2xlbmd0aH1gKTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc2hpcEJvZHkuY2xhc3NMaXN0LmFkZCgnc2hpcC1ib2R5Jyk7XG4gICAgICAgICAgICBzaGlwQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzaGlwQm9keSk7XG4gICAgICAgIH1cblxuICAgICAgICBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQ29udGFpbmVyRWxlbWVudCk7XG4gICAgfSlcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcblxuZnVuY3Rpb24gcGxheWVyKCkge1xuICAgIGNvbnN0IGJvYXJkID0gZ2FtZUJvYXJkKCk7XG5cbiAgICBjb25zdCBpc1JlYWR5ID0gZmFsc2VcbiAgICBjb25zdCByZWFkeVVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlYWR5VXAsIGJvYXJkLCBpc1JlYWR5IH1cbn1cbi8vIFRPRE86IFRlc3Qgc3dpdGNoVHVybiBhbmQgcmVhZHlVcFxuXG5leHBvcnQgZnVuY3Rpb24gaHVtYW4obXlUdXJuID0gZmFsc2UpIHtcbiAgICBjb25zdCBuYW1lID0gbXlUdXJuID8gJ1BsYXllciAxJyA6ICdQbGF5ZXIgMidcbiAgICBjb25zdCBpc0h1bWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0IHN3aXRjaFR1cm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubXlUdXJuID0gIXRoaXMubXlUdXJuO1xuICAgIH1cblxuICAgIHJldHVybiB7IC4uLnBsYXllcigpLCBzd2l0Y2hUdXJuLCBpc0h1bWFuLCBteVR1cm4sIG5hbWUgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZXIobXlUdXJuID0gZmFsc2UpIHtcbiAgICBjb25zdCBuYW1lID0gJ1BsYXllciAyJztcbiAgICBjb25zdCBpc0h1bWFuID0gZmFsc2U7XG5cbiAgICBjb25zdCBzd2l0Y2hUdXJuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm15VHVybiA9ICF0aGlzLm15VHVybjtcbiAgICB9XG5cbiAgICBsZXQgaW5pdGlhbEhpdCA9IG51bGw7XG4gICAgbGV0IHByZXZpb3VzQXR0YWNrSGl0ID0gZmFsc2U7XG4gICAgbGV0IGhpdEhpc3RvcnkgPSBbXTtcbiAgICBsZXQgYXR0YWNrU3RhY2sgPSBbXTtcbiAgICBjb25zdCBhdHRhY2sgPSBmdW5jdGlvbiAob3Bwb25lbnQpIHtcbiAgICAgICAgaWYgKGluaXRpYWxIaXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dGFja2VkU2hpcCA9IG9wcG9uZW50LmJvYXJkLmdldFNoaXAoaW5pdGlhbEhpdCk7XG4gICAgICAgICAgICBpZiAoYXR0YWNrZWRTaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3Vua1NoaXBDb29yZGluYXRlcyA9IGF0dGFja2VkU2hpcC5oaXRDb29yZGluYXRlcy5tYXAoKGhpdENvb3JkaW5hdGUpID0+IEpTT04uc3RyaW5naWZ5KGhpdENvb3JkaW5hdGUpKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZW1haW5pbmdDb29yZGluYXRlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGhpdEhpc3RvcnkuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXN1bmtTaGlwQ29vcmRpbmF0ZXMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBoaXRIaXN0b3J5ID0gcmVtYWluaW5nQ29vcmRpbmF0ZXM7XG4gICAgICAgICAgICAgICAgYXR0YWNrU3RhY2sgPSBbXTtcblxuICAgICAgICAgICAgICAgIGlmIChoaXRIaXN0b3J5Lmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxIaXQgPSBoaXRIaXN0b3J5LnBvcCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxIaXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbml0aWFsSGl0ICYmIGF0dGFja1N0YWNrLmxlbmd0aCA9PT0gMCAmJiBoaXRIaXN0b3J5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgcG9zc2libGVBdHRhY2tzID0gW11cbiAgICAgICAgICAgIHBvc3NpYmxlQXR0YWNrcy5wdXNoKFtpbml0aWFsSGl0WzBdLCBpbml0aWFsSGl0WzFdICsgMV0pO1xuICAgICAgICAgICAgcG9zc2libGVBdHRhY2tzLnB1c2goW2luaXRpYWxIaXRbMF0sIGluaXRpYWxIaXRbMV0gLSAxXSk7XG4gICAgICAgICAgICBwb3NzaWJsZUF0dGFja3MucHVzaChbaW5pdGlhbEhpdFswXSArIDEsIGluaXRpYWxIaXRbMV1dKTtcbiAgICAgICAgICAgIHBvc3NpYmxlQXR0YWNrcy5wdXNoKFtpbml0aWFsSGl0WzBdIC0gMSwgaW5pdGlhbEhpdFsxXV0pO1xuICAgICAgICAgICAgcG9zc2libGVBdHRhY2tzLmZvckVhY2goKHBvc3NpYmxlQXR0YWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkLmlzQXR0YWNrYWJsZShwb3NzaWJsZUF0dGFjaykpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrU3RhY2sucHVzaChwb3NzaWJsZUF0dGFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsSGl0ICYmIGhpdEhpc3RvcnkubGVuZ3RoID49IDEgJiYgcHJldmlvdXNBdHRhY2tIaXQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0hpdCA9IGhpdEhpc3RvcnlbaGl0SGlzdG9yeS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGNvbnN0IHgxID0gaW5pdGlhbEhpdFsxXTtcbiAgICAgICAgICAgIGNvbnN0IHkxID0gaW5pdGlhbEhpdFswXTtcbiAgICAgICAgICAgIGNvbnN0IHgyID0gbmV3SGl0WzFdO1xuICAgICAgICAgICAgY29uc3QgeTIgPSBuZXdIaXRbMF07XG5cbiAgICAgICAgICAgIGNvbnN0IHhEaWZmID0geDEgLSB4MjtcbiAgICAgICAgICAgIGNvbnN0IHlEaWZmID0geTEgLSB5MjtcblxuICAgICAgICAgICAgaWYgKHhEaWZmIDwgMCkge1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0XG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHRPbmUgPSBbbmV3SGl0WzBdLCBuZXdIaXRbMV0gKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmQuaXNBdHRhY2thYmxlKHJpZ2h0T25lKSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2tTdGFjay5wdXNoKHJpZ2h0T25lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHhEaWZmID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0T25lID0gW25ld0hpdFswXSwgbmV3SGl0WzFdIC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkLmlzQXR0YWNrYWJsZShsZWZ0T25lKSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2tTdGFjay5wdXNoKGxlZnRPbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeURpZmYgPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBcbiAgICAgICAgICAgICAgICBjb25zdCB1cE9uZSA9IFtuZXdIaXRbMF0gKyAxLCBuZXdIaXRbMV1dXG4gICAgICAgICAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkLmlzQXR0YWNrYWJsZSh1cE9uZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrU3RhY2sucHVzaCh1cE9uZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh5RGlmZiA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBkb3duXG4gICAgICAgICAgICAgICAgY29uc3QgZG93bk9uZSA9IFtuZXdIaXRbMF0gLSAxLCBuZXdIaXRbMV1dO1xuICAgICAgICAgICAgICAgIGlmIChvcHBvbmVudC5ib2FyZC5pc0F0dGFja2FibGUoZG93bk9uZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrU3RhY2sucHVzaChkb3duT25lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXR0YWNrU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGF0dGFja1N0YWNrLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdHRhY2tTdGFjay5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgY29uc3QgYXR0YWNrUG9vbCA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93ICs9IDEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkLmlzQXR0YWNrYWJsZShbcm93LCBjb2xdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrUG9vbC5wdXNoKFtyb3csIGNvbF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChhdHRhY2tQb29sLmxlbmd0aCAtIDEpKVxuICAgICAgICAgICAgY29uc3QgcmFuZG9tQXR0YWNrID0gYXR0YWNrUG9vbFtyYW5kb21JbmRleF07XG4gICAgICAgICAgICByZXR1cm4gcmFuZG9tQXR0YWNrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgbG9nQXR0YWNrID0gKGlzSGl0LCBjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGlmIChpc0hpdCAmJiAhaW5pdGlhbEhpdCkge1xuICAgICAgICAgICAgaW5pdGlhbEhpdCA9IGNvb3JkaW5hdGU7XG4gICAgICAgICAgICBwcmV2aW91c0F0dGFja0hpdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNIaXQpIHtcbiAgICAgICAgICAgIGhpdEhpc3RvcnkucHVzaChjb29yZGluYXRlKTtcbiAgICAgICAgICAgIHByZXZpb3VzQXR0YWNrSGl0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByZXZpb3VzQXR0YWNrSGl0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyAuLi5wbGF5ZXIoKSwgYXR0YWNrLCBzd2l0Y2hUdXJuLCBsb2dBdHRhY2ssIGlzSHVtYW4sIG15VHVybiwgbmFtZSB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hpcChsZW5ndGgsIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnKSB7XG4gICAgY29uc3QgaGl0Q29vcmRpbmF0ZXMgPSBbXTtcblxuICAgIGNvbnN0IGhpdCA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGhpdENvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgICAgcmV0dXJuIGhpdENvb3JkaW5hdGVzXG4gICAgfVxuXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4gKGxlbmd0aCAtIGhpdENvb3JkaW5hdGVzLmxlbmd0aCkgPD0gMFxuXG4gICAgcmV0dXJuIHsgbGVuZ3RoLCBvcmllbnRhdGlvbiwgaGl0Q29vcmRpbmF0ZXMsIGhpdCwgaXNTdW5rIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwidmFyIHdlYnBhY2tRdWV1ZXMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiBxdWV1ZS5kIDwgMSkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrUXVldWVzXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRxdWV1ZS5kID0gMDtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFcnJvcl0gPSBlO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAtMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9LCAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSkpO1xuXHRxdWV1ZSAmJiBxdWV1ZS5kIDwgMCAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==