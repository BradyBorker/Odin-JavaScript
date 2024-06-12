/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js",
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js",
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          "@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap);",
        ]);
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `* {
    font-family: "IBM Plex Mono", monospace;
}

body {
    margin: 0;
    padding: 0;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.menu-background {
    background:
        radial-gradient(black 15%, transparent 16%) 0 0,
        radial-gradient(black 15%, transparent 16%) 8px 8px,
        radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px,
        radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 8px 9px;
    background-color: #282828;
    background-size: 16px 16px;
}

.game-background {
    background: linear-gradient(0deg,
            rgba(194, 178, 128, 1) 0%,
            rgba(194, 178, 128, 1) 0%,
            rgba(35, 137, 218, 1) 20%);
    box-shadow: inset 0px 0px 23px 12px rgba(194, 178, 128, 1);
    border: 2px inset #c2b280;
}

.removed,
.battleship-container.removed,
.gameover-modal.removed {
    display: none;
}

.hidden {
    opacity: 0;
    pointer-events: none;
}

/* Menu */
.game-menu-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 25px;
}

.game-title-container {
    font-weight: 700;
    font-style: normal;

    text-align: center;
    font-size: 72px;
    color: #c0c0c0;
}

.game-mode-container {
    display: flex;
    flex-direction: column;
    gap: 10px;

    max-width: 250px;
}

.game-mode-container button {
    font-weight: 700;
    font-style: normal;

    padding: 10px;
    background-color: rgba(194, 178, 128, 1);
    color: black;
}

.game-mode-container button:hover {
    box-shadow: 0px 0px 5px 4px rgba(194, 178, 128, 1);
}

/* Battleship Game Buttons */
.random-ship-placement {
    width: 35px;
    height: 35px;

    /* filter: invert(81%) sepia(0%) saturate(94%) hue-rotate(134deg) brightness(93%) contrast(101%); */
    filter: invert(78%) sepia(15%) saturate(728%) hue-rotate(8deg) brightness(90%) contrast(89%);
}

.ready-up {
    font-weight: 700;
    font-style: normal;

    padding: 10px;
    background-color: rgba(194, 178, 128, 1);
    color: black;
}

/* Battleship Game */
.battleship-container {
    max-width: 1200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
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
    border: 1px solid #a8b0b2;
}

.tile.valid-placement {
    background-color: #99a3a3;
}

.tile.ship {
    background-color: #070809;
}

.tile.hit {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.tile.hit.sunk {
    background-color: #dc143c;
}

.tile.hit img {
    width: 100%;
    height: 100%;

    filter: invert(18%) sepia(48%) saturate(5244%) hue-rotate(335deg) brightness(95%) contrast(104%);
}

.tile.hit.sunk img {
    filter: invert(7%) sepia(4%) saturate(596%) hue-rotate(170deg) brightness(89%) contrast(107%);
}

.tile.missed {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #a8b0b2;
    opacity: 0.5;
}

.tile.missed img {
    width: 100%;
    height: 100%;
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
    background-color: #070809;

    display: flex;
    flex-direction: column;
}

.ship-body {
    min-height: 25px;
    border: 1px solid #a8b0b2;
    background-color: #070809;
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
    border: 1px solid #a8b0b2;
    background-color: #070809;
}

/* Game Over Modal */
.gameover-modal {
    width: 300px;
    min-height: 100px;
    padding: 15px;
    background-color: rgba(194, 178, 128, 1);

    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.gameover-modal .winner-name {
    font-size: 32px;
}

.gameover-modal button {
    font-weight: 700;
    font-style: normal;

    padding: 10px;
    background-color: rgba(194, 178, 128, 1);
    color: black;
}

.gameover-modal button:hover {
    box-shadow: 0px 0px 5px 4px #c0c0cc;
}`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,SAAS;IACT,UAAU;IACV,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI;;;;8EAI0E;IAC1E,yBAAyB;IACzB,0BAA0B;AAC9B;;AAEA;IACI;;;sCAGkC;IAClC,0DAA0D;IAC1D,yBAAyB;AAC7B;;AAEA;;;IAGI,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,oBAAoB;AACxB;;AAEA,SAAS;AACT;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;;IAElB,kBAAkB;IAClB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;;IAElB,aAAa;IACb,wCAAwC;IACxC,YAAY;AAChB;;AAEA;IACI,kDAAkD;AACtD;;AAEA,4BAA4B;AAC5B;IACI,WAAW;IACX,YAAY;;IAEZ,mGAAmG;IACnG,4FAA4F;AAChG;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;;IAElB,aAAa;IACb,wCAAwC;IACxC,YAAY;AAChB;;AAEA,oBAAoB;AACpB;IACI,iBAAiB;;IAEjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;;IAEI,YAAY;IACZ,iBAAiB;;IAEjB,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,gGAAgG;AACpG;;AAEA;IACI,6FAA6F;AACjG;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA,0BAA0B;AAC1B;IACI,WAAW;;IAEX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,yBAAyB;;IAEzB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA,eAAe;AACf;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,YAAY;;IAEZ,aAAa;AACjB;;AAEA;IACI,WAAW;;IAEX,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA,oBAAoB;AACpB;IACI,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,wCAAwC;;IAExC,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,kBAAkB;;IAElB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;;IAElB,aAAa;IACb,wCAAwC;IACxC,YAAY;AAChB;;AAEA;IACI,mCAAmC;AACvC",
            sourcesContent: [
              '@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");\n\n* {\n    font-family: "IBM Plex Mono", monospace;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu-background {\n    background:\n        radial-gradient(black 15%, transparent 16%) 0 0,\n        radial-gradient(black 15%, transparent 16%) 8px 8px,\n        radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px,\n        radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 8px 9px;\n    background-color: #282828;\n    background-size: 16px 16px;\n}\n\n.game-background {\n    background: linear-gradient(0deg,\n            rgba(194, 178, 128, 1) 0%,\n            rgba(194, 178, 128, 1) 0%,\n            rgba(35, 137, 218, 1) 20%);\n    box-shadow: inset 0px 0px 23px 12px rgba(194, 178, 128, 1);\n    border: 2px inset #c2b280;\n}\n\n.removed,\n.battleship-container.removed,\n.gameover-modal.removed {\n    display: none;\n}\n\n.hidden {\n    opacity: 0;\n    pointer-events: none;\n}\n\n/* Menu */\n.game-menu-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    padding: 25px;\n}\n\n.game-title-container {\n    font-weight: 700;\n    font-style: normal;\n\n    text-align: center;\n    font-size: 72px;\n    color: #c0c0c0;\n}\n\n.game-mode-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n    max-width: 250px;\n}\n\n.game-mode-container button {\n    font-weight: 700;\n    font-style: normal;\n\n    padding: 10px;\n    background-color: rgba(194, 178, 128, 1);\n    color: black;\n}\n\n.game-mode-container button:hover {\n    box-shadow: 0px 0px 5px 4px rgba(194, 178, 128, 1);\n}\n\n/* Battleship Game Buttons */\n.random-ship-placement {\n    width: 35px;\n    height: 35px;\n\n    /* filter: invert(81%) sepia(0%) saturate(94%) hue-rotate(134deg) brightness(93%) contrast(101%); */\n    filter: invert(78%) sepia(15%) saturate(728%) hue-rotate(8deg) brightness(90%) contrast(89%);\n}\n\n.ready-up {\n    font-weight: 700;\n    font-style: normal;\n\n    padding: 10px;\n    background-color: rgba(194, 178, 128, 1);\n    color: black;\n}\n\n/* Battleship Game */\n.battleship-container {\n    max-width: 1200px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n.player-boards {\n    display: flex;\n    justify-content: space-between;\n}\n\n.player1-board,\n.player2-board {\n    width: 500px;\n    min-height: 500px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.tile {\n    border: 1px solid #a8b0b2;\n}\n\n.tile.valid-placement {\n    background-color: #99a3a3;\n}\n\n.tile.ship {\n    background-color: #070809;\n}\n\n.tile.hit {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.tile.hit.sunk {\n    background-color: #dc143c;\n}\n\n.tile.hit img {\n    width: 100%;\n    height: 100%;\n\n    filter: invert(18%) sepia(48%) saturate(5244%) hue-rotate(335deg) brightness(95%) contrast(104%);\n}\n\n.tile.hit.sunk img {\n    filter: invert(7%) sepia(4%) saturate(596%) hue-rotate(170deg) brightness(89%) contrast(107%);\n}\n\n.tile.missed {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background-color: #a8b0b2;\n    opacity: 0.5;\n}\n\n.tile.missed img {\n    width: 100%;\n    height: 100%;\n}\n\n/* Ship pieces container */\n.draggable-ships-container {\n    width: 50px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n}\n\n.ship-container {\n    width: 25px;\n    border: 1px solid white;\n    background-color: #070809;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.ship-body {\n    min-height: 25px;\n    border: 1px solid #a8b0b2;\n    background-color: #070809;\n}\n\n/* Ghost Ship */\n#ghost-ship {\n    position: absolute;\n    top: -1000px;\n}\n\n.horizontal {\n    height: 25px;\n\n    display: flex;\n}\n\n.vertical {\n    width: 25px;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.ghost-ship-body {\n    height: 100%;\n    width: 100%;\n    border: 1px solid #a8b0b2;\n    background-color: #070809;\n}\n\n/* Game Over Modal */\n.gameover-modal {\n    width: 300px;\n    min-height: 100px;\n    padding: 15px;\n    background-color: rgba(194, 178, 128, 1);\n\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    text-align: center;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.gameover-modal .winner-name {\n    font-size: 32px;\n}\n\n.gameover-modal button {\n    font-weight: 700;\n    font-style: normal;\n\n    padding: 10px;\n    background-color: rgba(194, 178, 128, 1);\n    color: black;\n}\n\n.gameover-modal button:hover {\n    box-shadow: 0px 0px 5px 4px #c0c0cc;\n}',
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
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
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {",
                );
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
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping))),
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64,
              );
            var sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css",
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head",
          );
        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
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
              layer: item[5],
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
                references: 1,
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
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }
              api.update((obj = newObj));
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

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};

        /* istanbul ignore next  */
        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target);

            // Special case to return head of iframe instead of iframe itself
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          }
          target.appendChild(style);
        }
        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }
        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;
          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
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
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {",
            );
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
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */",
              );
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
              remove: function remove() {},
            };
          }
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }
        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./src/battleship.js":
      /*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ startGame,
          /* harmony export */
        });
        /* harmony import */ var _placeShips__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./placeShips */ "./src/placeShips.js");
        /* harmony import */ var _dragAndDrop__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./dragAndDrop */ "./src/dragAndDrop.js");
        /* harmony import */ var _icons_bomb_explosion_svg_svg__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../icons/bomb-explosion-svg.svg */ "./icons/bomb-explosion-svg.svg",
          );
        /* harmony import */ var _icons_small_dot_svg__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../icons/small-dot.svg */ "./icons/small-dot.svg",
          );
        /* eslint-disable no-use-before-define */

        function switchTurn(players) {
          players.forEach((player) => {
            player.switchTurn();
          });
        }

        function isGameOver(players) {
          const loser = players.filter((player) => player.board.allSunk());
          if (loser.length > 0) {
            const [winner] = players.filter(
              (player) => !player.board.allSunk(),
            );
            document
              .querySelector(".gameover-modal")
              .classList.remove("removed");
            const modalWinnerName = document.querySelector(".winner-name");
            modalWinnerName.textContent = `${winner.name} Won!`;
            return true;
          }
          return false;
        }

        function makeAttack(players, coordinate) {
          let [attackedPlayer] = players.filter((player) => !player.myTurn);
          let [attackingPlayer] = players.filter((player) => player.myTurn);

          if (!attackingPlayer.isHuman) {
            attackingPlayer.logAttack(
              attackedPlayer.board.receiveAttack(coordinate),
              coordinate,
            );
          } else {
            attackedPlayer.board.receiveAttack(coordinate);
          }

          if (isGameOver(players)) {
            renderGameBoards(players, {}, [], true);
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

        function renderGameBoards(
          players,
          dragData = {},
          preservedCoords = [],
          gameOver = false,
        ) {
          const [player1, player2] = players;
          const playerVsComputer = !(player1.isHuman && player2.isHuman);
          const playerPlacingShips = players.find((player) => !player.isReady);

          players.forEach((player, index) => {
            const boardNode = document.querySelector(
              `.player${index + 1}-board`,
            );
            const hitCoordinates = player.board.hitAttacks;
            const missedCoordinates = player.board.missedAttacks;
            const tiles = [];
            player.board.state.forEach((row, rowIndex) => {
              row.forEach((column, columnIndex) => {
                if (
                  preservedCoords.includes(
                    JSON.stringify([rowIndex, columnIndex]),
                  )
                ) {
                  const tile = document.getElementById(
                    `p${index + 1}-${rowIndex}-${columnIndex}`,
                  );
                  tile.classList.remove("ship");

                  // Droppable tile
                  if (
                    player === playerPlacingShips &&
                    player.isHuman &&
                    player.board.validShipPlacement(
                      player.board.getCoordsFromStartingCoord(
                        [rowIndex, columnIndex],
                        dragData.ship.orientation,
                        dragData.ship.length,
                      ),
                    )
                  ) {
                    (0,
                    _dragAndDrop__WEBPACK_IMPORTED_MODULE_1__.droppableHoverFeedback)(
                      tile,
                      dragData,
                      player,
                      index + 1,
                    );
                    (0,
                    _dragAndDrop__WEBPACK_IMPORTED_MODULE_1__.droppableFromInside)(
                      tile,
                      dragData,
                      player,
                      players,
                      renderGameBoards,
                    );
                  }

                  tiles.push(tile);
                } else {
                  const tile = document.createElement("div");
                  tile.classList.add("tile");
                  tile.id = `p${index + 1}-${rowIndex}-${columnIndex}`;

                  // Draggable tile
                  if (
                    column &&
                    player === playerPlacingShips &&
                    player.isHuman
                  ) {
                    (0,
                    _dragAndDrop__WEBPACK_IMPORTED_MODULE_1__.draggableFromInside)(
                      tile,
                      player,
                      players,
                      renderGameBoards,
                    );
                  }

                  // Droppable tile
                  if (
                    Object.keys(dragData).length > 0 &&
                    !column &&
                    player === playerPlacingShips &&
                    player.isHuman &&
                    player.board.validShipPlacement(
                      player.board.getCoordsFromStartingCoord(
                        [rowIndex, columnIndex],
                        dragData.ship.orientation,
                        dragData.ship.length,
                      ),
                    )
                  ) {
                    (0,
                    _dragAndDrop__WEBPACK_IMPORTED_MODULE_1__.droppableHoverFeedback)(
                      tile,
                      dragData,
                      player,
                      index + 1,
                    );

                    if (dragData.origin === "insideBoard") {
                      (0,
                      _dragAndDrop__WEBPACK_IMPORTED_MODULE_1__.droppableFromInside)(
                        tile,
                        dragData,
                        player,
                        players,
                        renderGameBoards,
                      );
                    } else if (dragData.origin === "outsideBoard") {
                      (0,
                      _dragAndDrop__WEBPACK_IMPORTED_MODULE_1__.droppableFromOutside)(
                        tile,
                        dragData,
                        player,
                        players,
                        renderGameBoards,
                      );
                    }
                  }

                  // Add event listener to update ship's orientation
                  if (
                    column &&
                    player.isHuman &&
                    player === playerPlacingShips
                  ) {
                    tile.addEventListener("click", (e) =>
                      (0,
                      _placeShips__WEBPACK_IMPORTED_MODULE_0__.switchShipOrientation)(
                        e,
                        player,
                        players,
                        renderGameBoards,
                      ),
                    );
                  }

                  // Conditions for displaying ships
                  if (
                    column &&
                    player.isHuman &&
                    (playerVsComputer || !player.isReady)
                  ) {
                    tile.classList.add("ship");
                  }

                  // Conditions for allowing attack on tile
                  const ready = players.every((p) => p.isReady);
                  if (
                    ready &&
                    !player.myTurn &&
                    player.board.isAttackable([rowIndex, columnIndex]) &&
                    (!player.isHuman || !playerVsComputer) &&
                    !gameOver
                  ) {
                    const coordinate = [rowIndex, columnIndex];
                    tile.addEventListener("click", () => {
                      makeAttack(players, coordinate);
                    });
                  }

                  tiles.push(tile);
                }
              });
            });
            boardNode.replaceChildren(...tiles);

            hitCoordinates.forEach((coordinate) => {
              const [row, column] = coordinate;
              const tile = document.getElementById(
                `p${index + 1}-${row}-${column}`,
              );

              const imgElement = document.createElement("img");
              imgElement.src =
                _icons_bomb_explosion_svg_svg__WEBPACK_IMPORTED_MODULE_2__;
              tile.appendChild(imgElement);

              tile.classList.add("hit");
              if (player.board.getShipAt(coordinate).isSunk()) {
                tile.classList.add("sunk");
              }
            });
            missedCoordinates.forEach((coordinate) => {
              const [row, column] = coordinate;
              const tile = document.getElementById(
                `p${index + 1}-${row}-${column}`,
              );
              tile.classList.add("missed");

              const imgElement = document.createElement("img");
              imgElement.src =
                _icons_small_dot_svg__WEBPACK_IMPORTED_MODULE_3__;
              tile.appendChild(imgElement);
            });
          });
        }

        async function startGame(players) {
          document.body.classList.add("game-background");

          renderGameBoards(players);
          const battleShipContainer = document.querySelector(
            ".battleship-container",
          );
          battleShipContainer.classList.remove("removed");

          const [player1, player2] = players;
          (0,
          _placeShips__WEBPACK_IMPORTED_MODULE_0__.createRandomShipPlacementButton)(
            player1,
            players,
            renderGameBoards,
          );
          (0,
          _placeShips__WEBPACK_IMPORTED_MODULE_0__.createDraggableShipElements)(
            players,
            renderGameBoards,
          );
          await (0, _placeShips__WEBPACK_IMPORTED_MODULE_0__["default"])(
            player1,
          );
          renderGameBoards(players);

          if (player2.isHuman) {
            (0,
            _placeShips__WEBPACK_IMPORTED_MODULE_0__.createRandomShipPlacementButton)(
              player2,
              players,
              renderGameBoards,
            );
            (0,
            _placeShips__WEBPACK_IMPORTED_MODULE_0__.createDraggableShipElements)(
              players,
              renderGameBoards,
            );
            await (0, _placeShips__WEBPACK_IMPORTED_MODULE_0__["default"])(
              player2,
            );
          } else {
            (0, _placeShips__WEBPACK_IMPORTED_MODULE_0__.randomShipPlacement)(
              player2,
              players,
              renderGameBoards,
            );
            player2.readyUp();
          }

          renderGameBoards(players);
        }

        /***/
      },

    /***/ "./src/dragAndDrop.js":
      /*!****************************!*\
  !*** ./src/dragAndDrop.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ draggableFromInside: () =>
            /* binding */ draggableFromInside,
          /* harmony export */ draggableFromOutside: () =>
            /* binding */ draggableFromOutside,
          /* harmony export */ droppableFromInside: () =>
            /* binding */ droppableFromInside,
          /* harmony export */ droppableFromOutside: () =>
            /* binding */ droppableFromOutside,
          /* harmony export */ droppableHoverFeedback: () =>
            /* binding */ droppableHoverFeedback,
          /* harmony export */
        });
        /* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./ship */ "./src/ship.js");

        function draggedFromInsideBoard(e, player, players, renderGameBoards) {
          const coordinate = e.target.id
            .split("-")
            .slice(-2)
            .map((number) => Number(number));
          const theShip = player.board.getShipAt(coordinate);

          const ghostShip = document.createElement("div");
          ghostShip.id = "ghost-ship";

          if (theShip.orientation === "vertical") {
            ghostShip.classList.add("vertical");
            ghostShip.style.height = `${theShip.length * 25}px`;
          } else if (theShip.orientation === "horizontal") {
            ghostShip.classList.add("horizontal");
            ghostShip.style.width = `${theShip.length * 25}px`;
          }

          for (let i = 0; i < theShip.length; i += 1) {
            const ghostShipBody = document.createElement("div");
            ghostShipBody.classList.add("ghost-ship-body");

            ghostShip.appendChild(ghostShipBody);
          }

          document.body.appendChild(ghostShip);
          e.dataTransfer.setDragImage(ghostShip, 0, 0);

          const shipCoordinates = player.board.getShipCoordinates(theShip);
          const preservedCoordinates = shipCoordinates.map((coord) =>
            JSON.stringify(coord),
          );

          player.board.removePlacedShip(shipCoordinates);

          renderGameBoards(
            players,
            { origin: "insideBoard", ship: theShip },
            preservedCoordinates,
          );
        }

        function draggableFromInside(tile, player, players, renderGameBoards) {
          tile.setAttribute("draggable", "true");
          tile.addEventListener("dragstart", (e) => {
            draggedFromInsideBoard(e, player, players, renderGameBoards);
          });

          tile.addEventListener("dragend", (e) => {
            const ghostShip = document.querySelector("#ghost-ship");
            if (ghostShip.parentElement) {
              ghostShip.parentElement.removeChild(ghostShip);
            }

            if (e.dataTransfer.dropEffect === "none") {
              player.board.restoreState();
              renderGameBoards(players);
            }
          });
        }

        function draggedFromOutsideBoard(e, players, renderGameBoards) {
          e.dataTransfer.dropEffect = "move";
          const re = /length-(\d)/;
          let shipLength;
          for (let i = 0; i < e.target.classList.length; i += 1) {
            if (re.test(e.target.classList[i])) {
              shipLength = Number(e.target.classList[i].split("-")[1]);
              break;
            }
          }
          const newShip = (0, _ship__WEBPACK_IMPORTED_MODULE_0__["default"])(
            shipLength,
          );

          renderGameBoards(players, { origin: "outsideBoard", ship: newShip });
        }

        function draggableFromOutside(
          shipContainerElement,
          draggableShipsContainer,
          players,
          renderGameBoards,
        ) {
          shipContainerElement.addEventListener("dragstart", (e) => {
            draggedFromOutsideBoard(e, players, renderGameBoards);
          });

          shipContainerElement.addEventListener("dragend", (e) => {
            if (e.dataTransfer.dropEffect !== "none") {
              draggableShipsContainer.removeChild(e.target);
            }
          });
        }

        function droppedFromInsideBoard(
          dragData,
          player,
          e,
          players,
          renderGameBoards,
        ) {
          const theShip = dragData.ship;

          const startingCoordinate = e.target.id
            .split("-")
            .slice(-2)
            .map((number) => Number(number));
          player.board.placeShip(theShip, startingCoordinate);

          renderGameBoards(players);
        }

        function droppableFromInside(
          tile,
          dragData,
          player,
          players,
          renderGameBoards,
        ) {
          tile.addEventListener("dragover", (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
          });

          tile.addEventListener("drop", (e) => {
            e.preventDefault();
            droppedFromInsideBoard(
              dragData,
              player,
              e,
              players,
              renderGameBoards,
            );
          });
        }

        function droppedFromOutsideBoard(
          dragData,
          player,
          e,
          players,
          renderGameBoards,
        ) {
          const startingCoordinate = e.target.id
            .split("-")
            .slice(-2)
            .map((number) => Number(number));
          player.board.placeShip(dragData.ship, startingCoordinate);

          if (player.board.allShipsPlaced()) {
            const readyUpButton = document.querySelector(".ready-up");
            readyUpButton.classList.remove("removed");
          }

          renderGameBoards(players);
        }

        function droppableFromOutside(
          tile,
          dragData,
          player,
          players,
          renderGameBoards,
        ) {
          tile.addEventListener("dragover", (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
          });

          tile.addEventListener("drop", (e) => {
            e.preventDefault();
            droppedFromOutsideBoard(
              dragData,
              player,
              e,
              players,
              renderGameBoards,
            );
          });
        }

        const previousCoordinatesQueue = [];
        function droppableHoverFeedback(tile, dragData, player, playerIndex) {
          tile.addEventListener("dragenter", (e) => {
            const startingCoordinate = e.target.id
              .split("-")
              .slice(-2)
              .map((number) => Number(number));
            const theShip = dragData.ship;
            const allCoordinates = player.board.getCoordsFromStartingCoord(
              startingCoordinate,
              theShip.orientation,
              theShip.length,
            );

            allCoordinates.forEach((coordinate) => {
              const [row, column] = coordinate;
              const hoveredTile = document.getElementById(
                `p${playerIndex}-${row}-${column}`,
              );
              hoveredTile.classList.add("valid-placement");
            });

            while (previousCoordinatesQueue.length >= 2) {
              const previousCoordinates = previousCoordinatesQueue.shift();
              previousCoordinates.forEach((prevCoordinate) => {
                const [row, column] = JSON.parse(prevCoordinate);
                const hoveredTile = document.getElementById(
                  `p${playerIndex}-${row}-${column}`,
                );

                hoveredTile.classList.remove("valid-placement");
              });
            }
            const stringifiedCoords = allCoordinates.map((coordinate) =>
              JSON.stringify(coordinate),
            );
            previousCoordinatesQueue.push(stringifiedCoords);
          });

          tile.addEventListener("dragleave", () => {
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
                const hoveredTile = document.getElementById(
                  `p${playerIndex}-${row}-${column}`,
                );
                hoveredTile.classList.remove("valid-placement");
              });
            } else {
              previousCoordinates.forEach((prevCoordinate) => {
                const [row, column] = JSON.parse(prevCoordinate);
                const hoveredTile = document.getElementById(
                  `p${playerIndex}-${row}-${column}`,
                );

                if (!currentCoordinates.includes(prevCoordinate)) {
                  hoveredTile.classList.remove("valid-placement");
                }
              });
            }
          });
        }

        /***/
      },

    /***/ "./src/gameBoard.js":
      /*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ gameBoard,
          /* harmony export */
        });
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
                  state[row][column] = shipObject.ship;
                }
              }
            });
          };

          const validShipPlacement = (coordinates) => {
            for (let i = 0; i < coordinates.length; i += 1) {
              const coordinate = coordinates[i];
              const [row, column] = coordinate;
              if (
                row < 0 ||
                row > 9 ||
                column < 0 ||
                column > 9 ||
                state[row][column]
              ) {
                return false;
              }
            }
            return true;
          };

          const getCoordsFromStartingCoord = (
            firstCoordinate,
            orientation,
            shipLength,
          ) => {
            const coordinates = [];
            for (let i = 0; i < shipLength; i += 1) {
              if (orientation === "horizontal") {
                coordinates.push([firstCoordinate[0], firstCoordinate[1] + i]);
              } else if (orientation === "vertical") {
                coordinates.push([firstCoordinate[0] + i, firstCoordinate[1]]);
              }
            }

            return coordinates;
          };

          const placeShip = (ship, firstCoordinate) => {
            const coordinates = getCoordsFromStartingCoord(
              firstCoordinate,
              ship.orientation,
              ship.length,
            );

            if (validShipPlacement(coordinates)) {
              const index = shipCoordinates.findIndex(
                (shipObject) => shipObject.ship === ship,
              );
              if (index > -1) {
                shipCoordinates[index].coordinates = coordinates;
              } else {
                shipCoordinates.push({ ship, coordinates });
              }

              coordinates.forEach((coordinate) => {
                const [row, column] = coordinate;
                state[row][column] = ship;
              });
              return true;
            }
            return false;
          };

          const allShipsPlaced = () => {
            const placedShips = [];
            state.forEach((row) => {
              row.forEach((column) => {
                if (column && !placedShips.includes(column)) {
                  placedShips.push(column);
                }
              });
            });

            return placedShips.length === 5;
          };

          const removePlacedShips = () => {
            state.forEach((row, rowIndex) => {
              row.forEach((col, colIndex) => {
                state[rowIndex][colIndex] = false;
              });
            });
            shipCoordinates.splice(0, shipCoordinates.length);
          };

          const removePlacedShip = (coordinates) => {
            coordinates.forEach((coordinate) => {
              const [row, column] = coordinate;
              state[row][column] = false;
            });
          };

          const getPlacedShips = () => {
            const shipsArray = [];
            shipCoordinates.forEach((shipObject) => {
              shipsArray.push(shipObject.ship);
            });
            return shipsArray;
          };

          const getShipAt = (coordinate) => {
            const [row, column] = coordinate;
            const theShip = state[row][column];
            return theShip;
          };

          const getShipHeadCoordinate = (ship) => {
            const index = shipCoordinates.findIndex(
              (shipObject) => shipObject.ship === ship,
            );
            if (index > -1) {
              return shipCoordinates[index].coordinates[0];
            }

            return false;
          };

          const getShipCoordinates = (ship) => {
            const index = shipCoordinates.findIndex(
              (shipObject) => shipObject.ship === ship,
            );
            if (index > -1) {
              return shipCoordinates[index].coordinates;
            }

            return false;
          };

          const hitAttacks = [];
          const missedAttacks = [];
          const receiveAttack = (coordinate) => {
            const [row, column] = coordinate;
            const boardTile = state[row][column];
            if (boardTile) {
              boardTile.hit(coordinate);
              hitAttacks.push(coordinate);
              return true;
            }
            missedAttacks.push(coordinate);
            return false;
          };

          const validAttack = (coordinate) => {
            const [row, column] = coordinate;
            return row >= 0 && row <= 9 && column >= 0 && column <= 9;
          };

          const isAttackable = (coordinate) => {
            const allAttacks = hitAttacks
              .concat(missedAttacks)
              .map((attack) => JSON.stringify(attack));
            return (
              !allAttacks.includes(JSON.stringify(coordinate)) &&
              validAttack(coordinate)
            );
          };

          const allSunk = () => {
            const ships = getPlacedShips();
            return ships.every((ship) => ship.isSunk());
          };

          return {
            restoreState,
            placeShip,
            receiveAttack,
            allSunk,
            isAttackable,
            allShipsPlaced,
            removePlacedShips,
            removePlacedShip,
            getShipAt,
            getShipHeadCoordinate,
            getShipCoordinates,
            getCoordsFromStartingCoord,
            validShipPlacement,
            state,
            hitAttacks,
            missedAttacks,
          };
        }

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.a(
          module,
          async (
            __webpack_handle_async_dependencies__,
            __webpack_async_result__,
          ) => {
            try {
              __webpack_require__.r(__webpack_exports__);
              /* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ =
                __webpack_require__(/*! ./player */ "./src/player.js");
              /* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ =
                __webpack_require__(/*! ./menu */ "./src/menu.js");
              /* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_2__ =
                __webpack_require__(/*! ./battleship */ "./src/battleship.js");
              /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ =
                __webpack_require__(/*! ./style.css */ "./src/style.css");

              const playAgainButton = document.querySelector(".play-again");
              playAgainButton.addEventListener("click", async () => {
                document
                  .querySelector(".battleship-container")
                  .classList.add("removed");
                document
                  .querySelector(".gameover-modal")
                  .classList.add("removed");
                document
                  .querySelector("body")
                  .classList.remove("game-background");
                document.querySelector("body").classList.add("menu-background");

                const player1Board = document.querySelector(".player1-board");
                while (player1Board.firstChild) {
                  player1Board.removeChild(player1Board.firstChild);
                }

                const player2Board = document.querySelector(".player2-board");
                while (player2Board.firstChild) {
                  player2Board.removeChild(player2Board.firstChild);
                }

                const draggableShipsContainer = document.querySelector(
                  ".draggable-ships-container",
                );
                while (draggableShipsContainer.firstChild) {
                  draggableShipsContainer.removeChild(
                    draggableShipsContainer.firstChild,
                  );
                }

                (0, _battleship__WEBPACK_IMPORTED_MODULE_2__["default"])(
                  await (0, _menu__WEBPACK_IMPORTED_MODULE_1__["default"])(
                    _player__WEBPACK_IMPORTED_MODULE_0__.human,
                    _player__WEBPACK_IMPORTED_MODULE_0__.computer,
                  ),
                );
              });

              (0, _battleship__WEBPACK_IMPORTED_MODULE_2__["default"])(
                await (0, _menu__WEBPACK_IMPORTED_MODULE_1__["default"])(
                  _player__WEBPACK_IMPORTED_MODULE_0__.human,
                  _player__WEBPACK_IMPORTED_MODULE_0__.computer,
                ),
              );

              __webpack_async_result__();
            } catch (e) {
              __webpack_async_result__(e);
            }
          },
          1,
        );

        /***/
      },

    /***/ "./src/menu.js":
      /*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ displayMenu,
          /* harmony export */
        });
        function removeMenu(body) {
          body.removeChild(document.querySelector(".game-menu-container"));
          body.classList.remove("menu-background");
        }

        function displayMenu(human, computer) {
          if (!document.querySelector(".game-menu-container")) {
            const gameMenuContainer = document.createElement("div");
            gameMenuContainer.classList.add("game-menu-container");
            const gameTitleContainer = document.createElement("div");
            gameTitleContainer.classList.add("game-title-container");
            gameTitleContainer.textContent = "BATTLESHIP";

            const gameModeContainer = document.createElement("div");
            const pvpModeBtn = document.createElement("button");
            pvpModeBtn.textContent = "Player vs. Player";
            const pvcModeBtn = document.createElement("button");
            pvcModeBtn.textContent = "Player vs. Computer";
            gameModeContainer.appendChild(pvpModeBtn);
            gameModeContainer.appendChild(pvcModeBtn);

            gameModeContainer.classList.add("game-mode-container");

            gameMenuContainer.appendChild(gameTitleContainer);
            gameMenuContainer.appendChild(gameModeContainer);

            const body = document.querySelector("body");
            body.classList.add("menu-background");
            body.appendChild(gameMenuContainer);

            return new Promise((resolve) => {
              pvpModeBtn.addEventListener("click", () => {
                removeMenu(body);
                resolve([human(true), human()]);
              });

              pvcModeBtn.addEventListener("click", () => {
                removeMenu(body);
                resolve([human(true), computer()]);
              });
            });
          }
          return true;
        }

        /***/
      },

    /***/ "./src/placeShips.js":
      /*!***************************!*\
  !*** ./src/placeShips.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ createDraggableShipElements: () =>
            /* binding */ createDraggableShipElements,
          /* harmony export */ createRandomShipPlacementButton: () =>
            /* binding */ createRandomShipPlacementButton,
          /* harmony export */ default: () =>
            /* binding */ finishedPlacingShips,
          /* harmony export */ randomShipPlacement: () =>
            /* binding */ randomShipPlacement,
          /* harmony export */ switchShipOrientation: () =>
            /* binding */ switchShipOrientation,
          /* harmony export */
        });
        /* harmony import */ var _dragAndDrop__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./dragAndDrop */ "./src/dragAndDrop.js");
        /* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./ship */ "./src/ship.js");
        /* harmony import */ var _icons_random_svg_svg__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../icons/random-svg.svg */ "./icons/random-svg.svg",
          );

        function finishedPlacingShips(player) {
          return new Promise((resolve) => {
            const readyUpButton = document.querySelector(".ready-up");
            readyUpButton.addEventListener("click", () => {
              readyUpButton.classList.add("removed");
              player.readyUp();
              const randomShipPlacementSvg = document.querySelector(
                ".random-ship-placement",
              );

              const battleShipContainer = document.querySelector(
                ".battleship-container",
              );
              battleShipContainer.removeChild(randomShipPlacementSvg);

              const readyUpButtonClone = readyUpButton.cloneNode(true);
              readyUpButton.parentNode.replaceChild(
                readyUpButtonClone,
                readyUpButton,
              );
              resolve();
            });
          });
        }

        function randomShipPlacement(player, players, renderGameBoards) {
          player.board.removePlacedShips();
          const shipOrientations = ["horizontal", "vertical"];

          [5, 4, 3, 3, 2].forEach((length) => {
            const placementPool = [];
            for (let row = 0; row < 10; row += 1) {
              for (let col = 0; col < 10; col += 1) {
                placementPool.push([row, col]);
              }
            }

            const randomOrientation =
              shipOrientations[Math.round(Math.random())];
            let randomIndex = Math.floor(Math.random() * placementPool.length);
            while (
              !player.board.placeShip(
                (0, _ship__WEBPACK_IMPORTED_MODULE_1__["default"])(
                  length,
                  randomOrientation,
                ),
                placementPool[randomIndex],
              )
            ) {
              randomIndex = Math.floor(Math.random() * placementPool.length);
            }
          });

          if (player.isHuman && player.board.allShipsPlaced()) {
            const readyUpButton = document.querySelector(".ready-up");
            readyUpButton.classList.remove("removed");
          }

          renderGameBoards(players);
        }

        function createRandomShipPlacementButton(
          player,
          players,
          renderGameBoards,
        ) {
          const randomShipPlacementSvg = document.createElement("img");
          randomShipPlacementSvg.src =
            _icons_random_svg_svg__WEBPACK_IMPORTED_MODULE_2__;
          randomShipPlacementSvg.classList.add("random-ship-placement");

          const battleShipContainer = document.querySelector(
            ".battleship-container",
          );
          battleShipContainer.prepend(randomShipPlacementSvg);

          randomShipPlacementSvg.addEventListener("click", () =>
            randomShipPlacement(player, players, renderGameBoards),
          );
          randomShipPlacementSvg.addEventListener("click", () => {
            const draggableShipsContainer = document.querySelector(
              ".draggable-ships-container",
            );
            while (draggableShipsContainer.firstChild) {
              draggableShipsContainer.removeChild(
                draggableShipsContainer.firstChild,
              );
            }
          });
        }

        function createDraggableShipElements(players, renderGameBoards) {
          const draggableShipsContainer = document.querySelector(
            ".draggable-ships-container",
          );
          [5, 4, 3, 3, 2].forEach((length) => {
            const shipContainerElement = document.createElement("div");
            shipContainerElement.classList.add(
              "ship-container",
              `length-${length}`,
            );
            shipContainerElement.setAttribute("draggable", "true");

            (0, _dragAndDrop__WEBPACK_IMPORTED_MODULE_0__.draggableFromOutside)(
              shipContainerElement,
              draggableShipsContainer,
              players,
              renderGameBoards,
            );

            for (let index = 0; index < length; index += 1) {
              const shipBody = document.createElement("div");
              shipBody.classList.add("ship-body");
              shipContainerElement.appendChild(shipBody);
            }

            draggableShipsContainer.appendChild(shipContainerElement);
          });
        }

        function switchShipOrientation(e, player, players, renderGameBoards) {
          const coordinate = e.target.id
            .split("-")
            .slice(-2)
            .map((number) => Number(number));
          const theShip = player.board.getShipAt(coordinate);
          const shipHeadCoordinate =
            player.board.getShipHeadCoordinate(theShip);
          const switchedOrientation =
            theShip.orientation === "vertical" ? "horizontal" : "vertical";

          const switchedShipCoordinates = player.board
            .getCoordsFromStartingCoord(
              shipHeadCoordinate,
              switchedOrientation,
              theShip.length,
            )
            .slice(1);
          if (player.board.validShipPlacement(switchedShipCoordinates)) {
            theShip.orientation = switchedOrientation;
            player.board.removePlacedShip(
              player.board.getShipCoordinates(theShip),
            );
            player.board.placeShip(theShip, shipHeadCoordinate);

            renderGameBoards(players);
          }
        }

        /***/
      },

    /***/ "./src/player.js":
      /*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ computer: () => /* binding */ computer,
          /* harmony export */ human: () => /* binding */ human,
          /* harmony export */
        });
        /* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
        /* eslint-disable func-names */
        /* eslint-disable no-param-reassign */

        function player() {
          const board = (0,
          _gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();

          const isReady = false;
          const readyUp = function () {
            this.isReady = true;
          };

          const switchTurn = function () {
            this.myTurn = !this.myTurn;
          };

          return { readyUp, switchTurn, board, isReady };
        }

        function human(myTurn = false) {
          const name = myTurn ? "Player 1" : "Player 2";
          const isHuman = true;

          return { ...player(), isHuman, myTurn, name };
        }

        function computer(myTurn = false) {
          const name = "Player 2";
          const isHuman = false;

          let initialHit = null;
          let previousAttackHit = false;
          let hitHistory = [];
          let attackStack = [];
          const attack = function (opponent) {
            if (initialHit) {
              const attackedShip = opponent.board.getShipAt(initialHit);
              if (attackedShip.isSunk()) {
                const sunkShipCoordinates = attackedShip.hitCoordinates.map(
                  (hitCoordinate) => JSON.stringify(hitCoordinate),
                );
                const remainingCoordinates = [];
                hitHistory.forEach((coordinate) => {
                  if (
                    !sunkShipCoordinates.includes(JSON.stringify(coordinate))
                  ) {
                    remainingCoordinates.push(coordinate);
                  }
                });
                hitHistory = remainingCoordinates;
                attackStack = [];

                if (hitHistory.length >= 1) {
                  initialHit = hitHistory.pop();
                } else {
                  initialHit = null;
                }
              }
            }

            if (
              initialHit &&
              attackStack.length === 0 &&
              hitHistory.length === 0
            ) {
              const possibleAttacks = [];
              possibleAttacks.push([initialHit[0], initialHit[1] + 1]);
              possibleAttacks.push([initialHit[0], initialHit[1] - 1]);
              possibleAttacks.push([initialHit[0] + 1, initialHit[1]]);
              possibleAttacks.push([initialHit[0] - 1, initialHit[1]]);
              possibleAttacks.forEach((possibleAttack) => {
                if (opponent.board.isAttackable(possibleAttack)) {
                  attackStack.push(possibleAttack);
                }
              });
            } else if (
              initialHit &&
              hitHistory.length >= 1 &&
              previousAttackHit
            ) {
              const lastHit = hitHistory[hitHistory.length - 1];
              const x1 = initialHit[1];
              const y1 = initialHit[0];
              const x2 = lastHit[1];
              const y2 = lastHit[0];

              const xDiff = x1 - x2;
              const yDiff = y1 - y2;

              if (xDiff < 0) {
                // right
                const rightOne = [lastHit[0], lastHit[1] + 1];
                if (opponent.board.isAttackable(rightOne)) {
                  attackStack.push(rightOne);
                }
              } else if (xDiff > 0) {
                // left
                const leftOne = [lastHit[0], lastHit[1] - 1];
                if (opponent.board.isAttackable(leftOne)) {
                  attackStack.push(leftOne);
                }
              } else if (yDiff < 0) {
                // up
                const upOne = [lastHit[0] + 1, lastHit[1]];
                if (opponent.board.isAttackable(upOne)) {
                  attackStack.push(upOne);
                }
              } else if (yDiff > 0) {
                // down
                const downOne = [lastHit[0] - 1, lastHit[1]];
                if (opponent.board.isAttackable(downOne)) {
                  attackStack.push(downOne);
                }
              }
            }

            if (attackStack.length > 0) {
              return attackStack.pop();
            }
            if (attackStack.length <= 0) {
              const attackPool = [];
              for (let row = 0; row < 10; row += 1) {
                for (let col = 0; col < 10; col += 1) {
                  if (opponent.board.isAttackable([row, col])) {
                    attackPool.push([row, col]);
                  }
                }
              }

              const randomIndex = Math.floor(
                Math.random() * (attackPool.length - 1),
              );
              const randomAttack = attackPool[randomIndex];
              return randomAttack;
            }
            return false;
          };

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
          };

          return { ...player(), attack, logAttack, isHuman, myTurn, name };
        }

        /***/
      },

    /***/ "./src/ship.js":
      /*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ ship,
          /* harmony export */
        });
        function ship(length, orientation = "vertical") {
          const hitCoordinates = [];

          const hit = (coordinate) => {
            hitCoordinates.push(coordinate);
            return hitCoordinates;
          };

          const isSunk = () => length - hitCoordinates.length <= 0;

          return { length, orientation, hitCoordinates, hit, isSunk };
        }

        /***/
      },

    /***/ "./icons/bomb-explosion-svg.svg":
      /*!**************************************!*\
  !*** ./icons/bomb-explosion-svg.svg ***!
  \**************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "d9d596012aa2487e72a8.svg";

        /***/
      },

    /***/ "./icons/random-svg.svg":
      /*!******************************!*\
  !*** ./icons/random-svg.svg ***!
  \******************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "30295e602ac1d1ba415f.svg";

        /***/
      },

    /***/ "./icons/small-dot.svg":
      /*!*****************************!*\
  !*** ./icons/small-dot.svg ***!
  \*****************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "3bae9a24a2d57df0ed7a.svg";

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/async module */
  /******/ (() => {
    /******/ var webpackQueues =
      typeof Symbol === "function"
        ? Symbol("webpack queues")
        : "__webpack_queues__";
    /******/ var webpackExports =
      typeof Symbol === "function"
        ? Symbol("webpack exports")
        : "__webpack_exports__";
    /******/ var webpackError =
      typeof Symbol === "function"
        ? Symbol("webpack error")
        : "__webpack_error__";
    /******/ var resolveQueue = (queue) => {
      /******/ if (queue && queue.d < 1) {
        /******/ queue.d = 1;
        /******/ queue.forEach((fn) => fn.r--);
        /******/ queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
        /******/
      }
      /******/
    };
    /******/ var wrapDeps = (deps) =>
      deps.map((dep) => {
        /******/ if (dep !== null && typeof dep === "object") {
          /******/ if (dep[webpackQueues]) return dep;
          /******/ if (dep.then) {
            /******/ var queue = [];
            /******/ queue.d = 0;
            /******/ dep.then(
              (r) => {
                /******/ obj[webpackExports] = r;
                /******/ resolveQueue(queue);
                /******/
              },
              (e) => {
                /******/ obj[webpackError] = e;
                /******/ resolveQueue(queue);
                /******/
              },
            );
            /******/ var obj = {};
            /******/ obj[webpackQueues] = (fn) => fn(queue);
            /******/ return obj;
            /******/
          }
          /******/
        }
        /******/ var ret = {};
        /******/ ret[webpackQueues] = (x) => {};
        /******/ ret[webpackExports] = dep;
        /******/ return ret;
        /******/
      });
    /******/ __webpack_require__.a = (module, body, hasAwait) => {
      /******/ var queue;
      /******/ hasAwait && ((queue = []).d = -1);
      /******/ var depQueues = new Set();
      /******/ var exports = module.exports;
      /******/ var currentDeps;
      /******/ var outerResolve;
      /******/ var reject;
      /******/ var promise = new Promise((resolve, rej) => {
        /******/ reject = rej;
        /******/ outerResolve = resolve;
        /******/
      });
      /******/ promise[webpackExports] = exports;
      /******/ promise[webpackQueues] = (fn) => (
        queue && fn(queue), depQueues.forEach(fn), promise["catch"]((x) => {})
      );
      /******/ module.exports = promise;
      /******/ body(
        (deps) => {
          /******/ currentDeps = wrapDeps(deps);
          /******/ var fn;
          /******/ var getResult = () =>
            currentDeps.map((d) => {
              /******/ if (d[webpackError]) throw d[webpackError];
              /******/ return d[webpackExports];
              /******/
            });
          /******/ var promise = new Promise((resolve) => {
            /******/ fn = () => resolve(getResult);
            /******/ fn.r = 0;
            /******/ var fnQueue = (q) =>
              q !== queue &&
              !depQueues.has(q) &&
              (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn)));
            /******/ currentDeps.map((dep) => dep[webpackQueues](fnQueue));
            /******/
          });
          /******/ return fn.r ? promise : getResult();
          /******/
        },
        (err) => (
          err ? reject((promise[webpackError] = err)) : outerResolve(exports),
          resolveQueue(queue)
        ),
      );
      /******/ queue && queue.d < 0 && (queue.d = 0);
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1;
          /******/ while (
            i > -1 &&
            (!scriptUrl || !/^http(s?):/.test(scriptUrl))
          )
            scriptUrl = scripts[i--].src;
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module used 'module' so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDZIQUE2SCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQkFBb0I7QUFDek47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNHQUFzRztBQUN0RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFFBQVEsT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLE9BQU8sS0FBSyxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtB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QSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsK0JBQStCLG1CQUFtQjtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7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QUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvYmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9kcmFnQW5kRHJvcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9wbGFjZVNoaXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JQk0rUGxleCtNb25vOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IE1vbm9cIiwgbW9ub3NwYWNlO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZW51LWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQ6XG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChibGFjayAxNSUsIHRyYW5zcGFyZW50IDE2JSkgMCAwLFxuICAgICAgICByYWRpYWwtZ3JhZGllbnQoYmxhY2sgMTUlLCB0cmFuc3BhcmVudCAxNiUpIDhweCA4cHgsXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMTUlLCB0cmFuc3BhcmVudCAyMCUpIDAgMXB4LFxuICAgICAgICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDE1JSwgdHJhbnNwYXJlbnQgMjAlKSA4cHggOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG59XG5cbi5nYW1lLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLFxuICAgICAgICAgICAgcmdiYSgxOTQsIDE3OCwgMTI4LCAxKSAwJSxcbiAgICAgICAgICAgIHJnYmEoMTk0LCAxNzgsIDEyOCwgMSkgMCUsXG4gICAgICAgICAgICByZ2JhKDM1LCAxMzcsIDIxOCwgMSkgMjAlKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDIzcHggMTJweCByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xuICAgIGJvcmRlcjogMnB4IGluc2V0ICNjMmIyODA7XG59XG5cbi5yZW1vdmVkLFxuLmJhdHRsZXNoaXAtY29udGFpbmVyLnJlbW92ZWQsXG4uZ2FtZW92ZXItbW9kYWwucmVtb3ZlZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpZGRlbiB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogTWVudSAqL1xuLmdhbWUtbWVudS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgcGFkZGluZzogMjVweDtcbn1cblxuLmdhbWUtdGl0bGUtY29udGFpbmVyIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDcycHg7XG4gICAgY29sb3I6ICNjMGMwYzA7XG59XG5cbi5nYW1lLW1vZGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbn1cblxuLmdhbWUtbW9kZS1jb250YWluZXIgYnV0dG9uIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcblxuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5nYW1lLW1vZGUtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNHB4IHJnYmEoMTk0LCAxNzgsIDEyOCwgMSk7XG59XG5cbi8qIEJhdHRsZXNoaXAgR2FtZSBCdXR0b25zICovXG4ucmFuZG9tLXNoaXAtcGxhY2VtZW50IHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG5cbiAgICAvKiBmaWx0ZXI6IGludmVydCg4MSUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg5NCUpIGh1ZS1yb3RhdGUoMTM0ZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoMTAxJSk7ICovXG4gICAgZmlsdGVyOiBpbnZlcnQoNzglKSBzZXBpYSgxNSUpIHNhdHVyYXRlKDcyOCUpIGh1ZS1yb3RhdGUoOGRlZykgYnJpZ2h0bmVzcyg5MCUpIGNvbnRyYXN0KDg5JSk7XG59XG5cbi5yZWFkeS11cCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG5cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk0LCAxNzgsIDEyOCwgMSk7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4vKiBCYXR0bGVzaGlwIEdhbWUgKi9cbi5iYXR0bGVzaGlwLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5wbGF5ZXItYm9hcmRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBsYXllcjEtYm9hcmQsXG4ucGxheWVyMi1ib2FyZCB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLnRpbGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhOGIwYjI7XG59XG5cbi50aWxlLnZhbGlkLXBsYWNlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5YTNhMztcbn1cblxuLnRpbGUuc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3MDgwOTtcbn1cblxuLnRpbGUuaGl0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpbGUuaGl0LnN1bmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzE0M2M7XG59XG5cbi50aWxlLmhpdCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGZpbHRlcjogaW52ZXJ0KDE4JSkgc2VwaWEoNDglKSBzYXR1cmF0ZSg1MjQ0JSkgaHVlLXJvdGF0ZSgzMzVkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCgxMDQlKTtcbn1cblxuLnRpbGUuaGl0LnN1bmsgaW1nIHtcbiAgICBmaWx0ZXI6IGludmVydCg3JSkgc2VwaWEoNCUpIHNhdHVyYXRlKDU5NiUpIGh1ZS1yb3RhdGUoMTcwZGVnKSBicmlnaHRuZXNzKDg5JSkgY29udHJhc3QoMTA3JSk7XG59XG5cbi50aWxlLm1pc3NlZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E4YjBiMjtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi50aWxlLm1pc3NlZCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLyogU2hpcCBwaWVjZXMgY29udGFpbmVyICovXG4uZHJhZ2dhYmxlLXNoaXBzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5zaGlwLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3MDgwOTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNoaXAtYm9keSB7XG4gICAgbWluLWhlaWdodDogMjVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYThiMGIyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzA4MDk7XG59XG5cbi8qIEdob3N0IFNoaXAgKi9cbiNnaG9zdC1zaGlwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTAwMHB4O1xufVxuXG4uaG9yaXpvbnRhbCB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnZlcnRpY2FsIHtcbiAgICB3aWR0aDogMjVweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmdob3N0LXNoaXAtYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhOGIwYjI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3MDgwOTtcbn1cblxuLyogR2FtZSBPdmVyIE1vZGFsICovXG4uZ2FtZW92ZXItbW9kYWwge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk0LCAxNzgsIDEyOCwgMSk7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5nYW1lb3Zlci1tb2RhbCAud2lubmVyLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLmdhbWVvdmVyLW1vZGFsIGJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG5cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk0LCAxNzgsIDEyOCwgMSk7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uZ2FtZW92ZXItbW9kYWwgYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA0cHggI2MwYzBjYztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7O0lBRWIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7Ozs7OEVBSTBFO0lBQzFFLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSTs7O3NDQUdrQztJQUNsQywwREFBMEQ7SUFDMUQseUJBQXlCO0FBQzdCOztBQUVBOzs7SUFHSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9CQUFvQjtBQUN4Qjs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7SUFFbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7O0lBRWxCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUzs7SUFFVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCOztJQUVsQixhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrREFBa0Q7QUFDdEQ7O0FBRUEsNEJBQTRCO0FBQzVCO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0lBRVosbUdBQW1HO0lBQ25HLDRGQUE0RjtBQUNoRzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMsWUFBWTtBQUNoQjs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxpQkFBaUI7O0lBRWpCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjs7SUFFakIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztJQUVaLGdHQUFnRztBQUNwRzs7QUFFQTtJQUNJLDZGQUE2RjtBQUNqRzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLFdBQVc7O0lBRVgsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIseUJBQXlCOztJQUV6QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUEsZUFBZTtBQUNmO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZOztJQUVaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXOztJQUVYLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isd0NBQXdDOztJQUV4QyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JQk0rUGxleCtNb25vOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJQk0gUGxleCBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtYmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQ6XFxuICAgICAgICByYWRpYWwtZ3JhZGllbnQoYmxhY2sgMTUlLCB0cmFuc3BhcmVudCAxNiUpIDAgMCxcXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChibGFjayAxNSUsIHRyYW5zcGFyZW50IDE2JSkgOHB4IDhweCxcXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMTUlLCB0cmFuc3BhcmVudCAyMCUpIDAgMXB4LFxcbiAgICAgICAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAxNSUsIHRyYW5zcGFyZW50IDIwJSkgOHB4IDlweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XFxufVxcblxcbi5nYW1lLWJhY2tncm91bmQge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZyxcXG4gICAgICAgICAgICByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpIDAlLFxcbiAgICAgICAgICAgIHJnYmEoMTk0LCAxNzgsIDEyOCwgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgzNSwgMTM3LCAyMTgsIDEpIDIwJSk7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjNweCAxMnB4IHJnYmEoMTk0LCAxNzgsIDEyOCwgMSk7XFxuICAgIGJvcmRlcjogMnB4IGluc2V0ICNjMmIyODA7XFxufVxcblxcbi5yZW1vdmVkLFxcbi5iYXR0bGVzaGlwLWNvbnRhaW5lci5yZW1vdmVkLFxcbi5nYW1lb3Zlci1tb2RhbC5yZW1vdmVkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4vKiBNZW51ICovXFxuLmdhbWUtbWVudS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nOiAyNXB4O1xcbn1cXG5cXG4uZ2FtZS10aXRsZS1jb250YWluZXIge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcbiAgICBjb2xvcjogI2MwYzBjMDtcXG59XFxuXFxuLmdhbWUtbW9kZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxufVxcblxcbi5nYW1lLW1vZGUtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG5cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZ2FtZS1tb2RlLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA0cHggcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcXG59XFxuXFxuLyogQmF0dGxlc2hpcCBHYW1lIEJ1dHRvbnMgKi9cXG4ucmFuZG9tLXNoaXAtcGxhY2VtZW50IHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG5cXG4gICAgLyogZmlsdGVyOiBpbnZlcnQoODElKSBzZXBpYSgwJSkgc2F0dXJhdGUoOTQlKSBodWUtcm90YXRlKDEzNGRlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDEwMSUpOyAqL1xcbiAgICBmaWx0ZXI6IGludmVydCg3OCUpIHNlcGlhKDE1JSkgc2F0dXJhdGUoNzI4JSkgaHVlLXJvdGF0ZSg4ZGVnKSBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoODklKTtcXG59XFxuXFxuLnJlYWR5LXVwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcblxcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIEJhdHRsZXNoaXAgR2FtZSAqL1xcbi5iYXR0bGVzaGlwLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wbGF5ZXItYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucGxheWVyMS1ib2FyZCxcXG4ucGxheWVyMi1ib2FyZCB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgbWluLWhlaWdodDogNTAwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLnRpbGUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYThiMGIyO1xcbn1cXG5cXG4udGlsZS52YWxpZC1wbGFjZW1lbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTlhM2EzO1xcbn1cXG5cXG4udGlsZS5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3MDgwOTtcXG59XFxuXFxuLnRpbGUuaGl0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpbGUuaGl0LnN1bmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMxNDNjO1xcbn1cXG5cXG4udGlsZS5oaXQgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSg0OCUpIHNhdHVyYXRlKDUyNDQlKSBodWUtcm90YXRlKDMzNWRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDEwNCUpO1xcbn1cXG5cXG4udGlsZS5oaXQuc3VuayBpbWcge1xcbiAgICBmaWx0ZXI6IGludmVydCg3JSkgc2VwaWEoNCUpIHNhdHVyYXRlKDU5NiUpIGh1ZS1yb3RhdGUoMTcwZGVnKSBicmlnaHRuZXNzKDg5JSkgY29udHJhc3QoMTA3JSk7XFxufVxcblxcbi50aWxlLm1pc3NlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThiMGIyO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50aWxlLm1pc3NlZCBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBTaGlwIHBpZWNlcyBjb250YWluZXIgKi9cXG4uZHJhZ2dhYmxlLXNoaXBzLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA1MHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzA4MDk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaGlwLWJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYThiMGIyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwODA5O1xcbn1cXG5cXG4vKiBHaG9zdCBTaGlwICovXFxuI2dob3N0LXNoaXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTEwMDBweDtcXG59XFxuXFxuLmhvcml6b250YWwge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi52ZXJ0aWNhbCB7XFxuICAgIHdpZHRoOiAyNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZ2hvc3Qtc2hpcC1ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2E4YjBiMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3MDgwOTtcXG59XFxuXFxuLyogR2FtZSBPdmVyIE1vZGFsICovXFxuLmdhbWVvdmVyLW1vZGFsIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVvdmVyLW1vZGFsIC53aW5uZXItbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuLmdhbWVvdmVyLW1vZGFsIGJ1dHRvbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG5cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZ2FtZW92ZXItbW9kYWwgYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNHB4ICNjMGMwY2M7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCBmaW5pc2hlZFBsYWNpbmdTaGlwcywge1xuICBjcmVhdGVSYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uLFxuICByYW5kb21TaGlwUGxhY2VtZW50LFxuICBjcmVhdGVEcmFnZ2FibGVTaGlwRWxlbWVudHMsXG4gIHN3aXRjaFNoaXBPcmllbnRhdGlvbixcbn0gZnJvbSBcIi4vcGxhY2VTaGlwc1wiO1xuaW1wb3J0IHtcbiAgZHJhZ2dhYmxlRnJvbUluc2lkZSxcbiAgZHJvcHBhYmxlRnJvbUluc2lkZSxcbiAgZHJvcHBhYmxlRnJvbU91dHNpZGUsXG4gIGRyb3BwYWJsZUhvdmVyRmVlZGJhY2ssXG59IGZyb20gXCIuL2RyYWdBbmREcm9wXCI7XG5pbXBvcnQgZXhwbG9zaW9uU3ZnIGZyb20gXCIuLi9pY29ucy9ib21iLWV4cGxvc2lvbi1zdmcuc3ZnXCI7XG5pbXBvcnQgc21hbGxEb3RTZyBmcm9tIFwiLi4vaWNvbnMvc21hbGwtZG90LnN2Z1wiO1xuXG5mdW5jdGlvbiBzd2l0Y2hUdXJuKHBsYXllcnMpIHtcbiAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICBwbGF5ZXIuc3dpdGNoVHVybigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNHYW1lT3ZlcihwbGF5ZXJzKSB7XG4gIGNvbnN0IGxvc2VyID0gcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gcGxheWVyLmJvYXJkLmFsbFN1bmsoKSk7XG4gIGlmIChsb3Nlci5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgW3dpbm5lcl0gPSBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiAhcGxheWVyLmJvYXJkLmFsbFN1bmsoKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lb3Zlci1tb2RhbFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicmVtb3ZlZFwiKTtcbiAgICBjb25zdCBtb2RhbFdpbm5lck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lci1uYW1lXCIpO1xuICAgIG1vZGFsV2lubmVyTmFtZS50ZXh0Q29udGVudCA9IGAke3dpbm5lci5uYW1lfSBXb24hYDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1ha2VBdHRhY2socGxheWVycywgY29vcmRpbmF0ZSkge1xuICBsZXQgW2F0dGFja2VkUGxheWVyXSA9IHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+ICFwbGF5ZXIubXlUdXJuKTtcbiAgbGV0IFthdHRhY2tpbmdQbGF5ZXJdID0gcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gcGxheWVyLm15VHVybik7XG5cbiAgaWYgKCFhdHRhY2tpbmdQbGF5ZXIuaXNIdW1hbikge1xuICAgIGF0dGFja2luZ1BsYXllci5sb2dBdHRhY2soXG4gICAgICBhdHRhY2tlZFBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpLFxuICAgICAgY29vcmRpbmF0ZSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGF0dGFja2VkUGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XG4gIH1cblxuICBpZiAoaXNHYW1lT3ZlcihwbGF5ZXJzKSkge1xuICAgIHJlbmRlckdhbWVCb2FyZHMocGxheWVycywge30sIFtdLCB0cnVlKTtcbiAgfVxuICBzd2l0Y2hUdXJuKHBsYXllcnMpO1xuICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpO1xuXG4gIC8vIENvbXB1dGVyIEF0dGFja1xuICBbYXR0YWNrZWRQbGF5ZXJdID0gcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gIXBsYXllci5teVR1cm4pO1xuICBbYXR0YWNraW5nUGxheWVyXSA9IHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+IHBsYXllci5teVR1cm4pO1xuICBpZiAoIWF0dGFja2luZ1BsYXllci5pc0h1bWFuKSB7XG4gICAgY29uc3QgYXR0YWNrQ29vcmRpbmF0ZSA9IGF0dGFja2luZ1BsYXllci5hdHRhY2soYXR0YWNrZWRQbGF5ZXIpO1xuICAgIG1ha2VBdHRhY2socGxheWVycywgYXR0YWNrQ29vcmRpbmF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyR2FtZUJvYXJkcyhcbiAgcGxheWVycyxcbiAgZHJhZ0RhdGEgPSB7fSxcbiAgcHJlc2VydmVkQ29vcmRzID0gW10sXG4gIGdhbWVPdmVyID0gZmFsc2UsXG4pIHtcbiAgY29uc3QgW3BsYXllcjEsIHBsYXllcjJdID0gcGxheWVycztcbiAgY29uc3QgcGxheWVyVnNDb21wdXRlciA9ICEocGxheWVyMS5pc0h1bWFuICYmIHBsYXllcjIuaXNIdW1hbik7XG4gIGNvbnN0IHBsYXllclBsYWNpbmdTaGlwcyA9IHBsYXllcnMuZmluZCgocGxheWVyKSA9PiAhcGxheWVyLmlzUmVhZHkpO1xuXG4gIHBsYXllcnMuZm9yRWFjaCgocGxheWVyLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXIke2luZGV4ICsgMX0tYm9hcmRgKTtcbiAgICBjb25zdCBoaXRDb29yZGluYXRlcyA9IHBsYXllci5ib2FyZC5oaXRBdHRhY2tzO1xuICAgIGNvbnN0IG1pc3NlZENvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkLm1pc3NlZEF0dGFja3M7XG4gICAgY29uc3QgdGlsZXMgPSBbXTtcbiAgICBwbGF5ZXIuYm9hcmQuc3RhdGUuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGNvbHVtbiwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHByZXNlcnZlZENvb3Jkcy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShbcm93SW5kZXgsIGNvbHVtbkluZGV4XSkpKSB7XG4gICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgYHAke2luZGV4ICsgMX0tJHtyb3dJbmRleH0tJHtjb2x1bW5JbmRleH1gLFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKTtcblxuICAgICAgICAgIC8vIERyb3BwYWJsZSB0aWxlXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcGxheWVyID09PSBwbGF5ZXJQbGFjaW5nU2hpcHMgJiZcbiAgICAgICAgICAgIHBsYXllci5pc0h1bWFuICYmXG4gICAgICAgICAgICBwbGF5ZXIuYm9hcmQudmFsaWRTaGlwUGxhY2VtZW50KFxuICAgICAgICAgICAgICBwbGF5ZXIuYm9hcmQuZ2V0Q29vcmRzRnJvbVN0YXJ0aW5nQ29vcmQoXG4gICAgICAgICAgICAgICAgW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0sXG4gICAgICAgICAgICAgICAgZHJhZ0RhdGEuc2hpcC5vcmllbnRhdGlvbixcbiAgICAgICAgICAgICAgICBkcmFnRGF0YS5zaGlwLmxlbmd0aCxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGRyb3BwYWJsZUhvdmVyRmVlZGJhY2sodGlsZSwgZHJhZ0RhdGEsIHBsYXllciwgaW5kZXggKyAxKTtcbiAgICAgICAgICAgIGRyb3BwYWJsZUZyb21JbnNpZGUoXG4gICAgICAgICAgICAgIHRpbGUsXG4gICAgICAgICAgICAgIGRyYWdEYXRhLFxuICAgICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICAgIHBsYXllcnMsXG4gICAgICAgICAgICAgIHJlbmRlckdhbWVCb2FyZHMsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRpbGVzLnB1c2godGlsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwidGlsZVwiKTtcbiAgICAgICAgICB0aWxlLmlkID0gYHAke2luZGV4ICsgMX0tJHtyb3dJbmRleH0tJHtjb2x1bW5JbmRleH1gO1xuXG4gICAgICAgICAgLy8gRHJhZ2dhYmxlIHRpbGVcbiAgICAgICAgICBpZiAoY29sdW1uICYmIHBsYXllciA9PT0gcGxheWVyUGxhY2luZ1NoaXBzICYmIHBsYXllci5pc0h1bWFuKSB7XG4gICAgICAgICAgICBkcmFnZ2FibGVGcm9tSW5zaWRlKHRpbGUsIHBsYXllciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRHJvcHBhYmxlIHRpbGVcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkcmFnRGF0YSkubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgIWNvbHVtbiAmJlxuICAgICAgICAgICAgcGxheWVyID09PSBwbGF5ZXJQbGFjaW5nU2hpcHMgJiZcbiAgICAgICAgICAgIHBsYXllci5pc0h1bWFuICYmXG4gICAgICAgICAgICBwbGF5ZXIuYm9hcmQudmFsaWRTaGlwUGxhY2VtZW50KFxuICAgICAgICAgICAgICBwbGF5ZXIuYm9hcmQuZ2V0Q29vcmRzRnJvbVN0YXJ0aW5nQ29vcmQoXG4gICAgICAgICAgICAgICAgW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0sXG4gICAgICAgICAgICAgICAgZHJhZ0RhdGEuc2hpcC5vcmllbnRhdGlvbixcbiAgICAgICAgICAgICAgICBkcmFnRGF0YS5zaGlwLmxlbmd0aCxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGRyb3BwYWJsZUhvdmVyRmVlZGJhY2sodGlsZSwgZHJhZ0RhdGEsIHBsYXllciwgaW5kZXggKyAxKTtcblxuICAgICAgICAgICAgaWYgKGRyYWdEYXRhLm9yaWdpbiA9PT0gXCJpbnNpZGVCb2FyZFwiKSB7XG4gICAgICAgICAgICAgIGRyb3BwYWJsZUZyb21JbnNpZGUoXG4gICAgICAgICAgICAgICAgdGlsZSxcbiAgICAgICAgICAgICAgICBkcmFnRGF0YSxcbiAgICAgICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICAgICAgcGxheWVycyxcbiAgICAgICAgICAgICAgICByZW5kZXJHYW1lQm9hcmRzLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkcmFnRGF0YS5vcmlnaW4gPT09IFwib3V0c2lkZUJvYXJkXCIpIHtcbiAgICAgICAgICAgICAgZHJvcHBhYmxlRnJvbU91dHNpZGUoXG4gICAgICAgICAgICAgICAgdGlsZSxcbiAgICAgICAgICAgICAgICBkcmFnRGF0YSxcbiAgICAgICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICAgICAgcGxheWVycyxcbiAgICAgICAgICAgICAgICByZW5kZXJHYW1lQm9hcmRzLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB1cGRhdGUgc2hpcCdzIG9yaWVudGF0aW9uXG4gICAgICAgICAgaWYgKGNvbHVtbiAmJiBwbGF5ZXIuaXNIdW1hbiAmJiBwbGF5ZXIgPT09IHBsYXllclBsYWNpbmdTaGlwcykge1xuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+XG4gICAgICAgICAgICAgIHN3aXRjaFNoaXBPcmllbnRhdGlvbihlLCBwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDb25kaXRpb25zIGZvciBkaXNwbGF5aW5nIHNoaXBzXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29sdW1uICYmXG4gICAgICAgICAgICBwbGF5ZXIuaXNIdW1hbiAmJlxuICAgICAgICAgICAgKHBsYXllclZzQ29tcHV0ZXIgfHwgIXBsYXllci5pc1JlYWR5KVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDb25kaXRpb25zIGZvciBhbGxvd2luZyBhdHRhY2sgb24gdGlsZVxuICAgICAgICAgIGNvbnN0IHJlYWR5ID0gcGxheWVycy5ldmVyeSgocCkgPT4gcC5pc1JlYWR5KTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICByZWFkeSAmJlxuICAgICAgICAgICAgIXBsYXllci5teVR1cm4gJiZcbiAgICAgICAgICAgIHBsYXllci5ib2FyZC5pc0F0dGFja2FibGUoW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0pICYmXG4gICAgICAgICAgICAoIXBsYXllci5pc0h1bWFuIHx8ICFwbGF5ZXJWc0NvbXB1dGVyKSAmJlxuICAgICAgICAgICAgIWdhbWVPdmVyXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0gW3Jvd0luZGV4LCBjb2x1bW5JbmRleF07XG4gICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgIG1ha2VBdHRhY2socGxheWVycywgY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aWxlcy5wdXNoKHRpbGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBib2FyZE5vZGUucmVwbGFjZUNoaWxkcmVuKC4uLnRpbGVzKTtcblxuICAgIGhpdENvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwJHtpbmRleCArIDF9LSR7cm93fS0ke2NvbHVtbn1gKTtcblxuICAgICAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBpbWdFbGVtZW50LnNyYyA9IGV4cGxvc2lvblN2ZztcbiAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XG5cbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgIGlmIChwbGF5ZXIuYm9hcmQuZ2V0U2hpcEF0KGNvb3JkaW5hdGUpLmlzU3VuaygpKSB7XG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcInN1bmtcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbWlzc2VkQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGU7XG4gICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHAke2luZGV4ICsgMX0tJHtyb3d9LSR7Y29sdW1ufWApO1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO1xuXG4gICAgICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGltZ0VsZW1lbnQuc3JjID0gc21hbGxEb3RTZztcbiAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzdGFydEdhbWUocGxheWVycykge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJnYW1lLWJhY2tncm91bmRcIik7XG5cbiAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKTtcbiAgY29uc3QgYmF0dGxlU2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmF0dGxlc2hpcC1jb250YWluZXJcIik7XG4gIGJhdHRsZVNoaXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInJlbW92ZWRcIik7XG5cbiAgY29uc3QgW3BsYXllcjEsIHBsYXllcjJdID0gcGxheWVycztcbiAgY3JlYXRlUmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbihwbGF5ZXIxLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKTtcbiAgY3JlYXRlRHJhZ2dhYmxlU2hpcEVsZW1lbnRzKHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpO1xuICBhd2FpdCBmaW5pc2hlZFBsYWNpbmdTaGlwcyhwbGF5ZXIxKTtcbiAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKTtcblxuICBpZiAocGxheWVyMi5pc0h1bWFuKSB7XG4gICAgY3JlYXRlUmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbihwbGF5ZXIyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKTtcbiAgICBjcmVhdGVEcmFnZ2FibGVTaGlwRWxlbWVudHMocGxheWVycywgcmVuZGVyR2FtZUJvYXJkcyk7XG4gICAgYXdhaXQgZmluaXNoZWRQbGFjaW5nU2hpcHMocGxheWVyMik7XG4gIH0gZWxzZSB7XG4gICAgcmFuZG9tU2hpcFBsYWNlbWVudChwbGF5ZXIyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKTtcbiAgICBwbGF5ZXIyLnJlYWR5VXAoKTtcbiAgfVxuXG4gIHJlbmRlckdhbWVCb2FyZHMocGxheWVycyk7XG59XG4iLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmZ1bmN0aW9uIGRyYWdnZWRGcm9tSW5zaWRlQm9hcmQoZSwgcGxheWVyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKSB7XG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBlLnRhcmdldC5pZFxuICAgIC5zcGxpdChcIi1cIilcbiAgICAuc2xpY2UoLTIpXG4gICAgLm1hcCgobnVtYmVyKSA9PiBOdW1iZXIobnVtYmVyKSk7XG4gIGNvbnN0IHRoZVNoaXAgPSBwbGF5ZXIuYm9hcmQuZ2V0U2hpcEF0KGNvb3JkaW5hdGUpO1xuXG4gIGNvbnN0IGdob3N0U2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdob3N0U2hpcC5pZCA9IFwiZ2hvc3Qtc2hpcFwiO1xuXG4gIGlmICh0aGVTaGlwLm9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICBnaG9zdFNoaXAuY2xhc3NMaXN0LmFkZChcInZlcnRpY2FsXCIpO1xuICAgIGdob3N0U2hpcC5zdHlsZS5oZWlnaHQgPSBgJHt0aGVTaGlwLmxlbmd0aCAqIDI1fXB4YDtcbiAgfSBlbHNlIGlmICh0aGVTaGlwLm9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgIGdob3N0U2hpcC5jbGFzc0xpc3QuYWRkKFwiaG9yaXpvbnRhbFwiKTtcbiAgICBnaG9zdFNoaXAuc3R5bGUud2lkdGggPSBgJHt0aGVTaGlwLmxlbmd0aCAqIDI1fXB4YDtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlU2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGdob3N0U2hpcEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdob3N0U2hpcEJvZHkuY2xhc3NMaXN0LmFkZChcImdob3N0LXNoaXAtYm9keVwiKTtcblxuICAgIGdob3N0U2hpcC5hcHBlbmRDaGlsZChnaG9zdFNoaXBCb2R5KTtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2hvc3RTaGlwKTtcbiAgZS5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGdob3N0U2hpcCwgMCwgMCk7XG5cbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkLmdldFNoaXBDb29yZGluYXRlcyh0aGVTaGlwKTtcbiAgY29uc3QgcHJlc2VydmVkQ29vcmRpbmF0ZXMgPSBzaGlwQ29vcmRpbmF0ZXMubWFwKChjb29yZCkgPT5cbiAgICBKU09OLnN0cmluZ2lmeShjb29yZCksXG4gICk7XG5cbiAgcGxheWVyLmJvYXJkLnJlbW92ZVBsYWNlZFNoaXAoc2hpcENvb3JkaW5hdGVzKTtcblxuICByZW5kZXJHYW1lQm9hcmRzKFxuICAgIHBsYXllcnMsXG4gICAgeyBvcmlnaW46IFwiaW5zaWRlQm9hcmRcIiwgc2hpcDogdGhlU2hpcCB9LFxuICAgIHByZXNlcnZlZENvb3JkaW5hdGVzLFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhZ2dhYmxlRnJvbUluc2lkZSh0aWxlLCBwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpIHtcbiAgdGlsZS5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xuICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+IHtcbiAgICBkcmFnZ2VkRnJvbUluc2lkZUJvYXJkKGUsIHBsYXllciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcyk7XG4gIH0pO1xuXG4gIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgKGUpID0+IHtcbiAgICBjb25zdCBnaG9zdFNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dob3N0LXNoaXBcIik7XG4gICAgaWYgKGdob3N0U2hpcC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICBnaG9zdFNoaXAucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChnaG9zdFNoaXApO1xuICAgIH1cblxuICAgIGlmIChlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID09PSBcIm5vbmVcIikge1xuICAgICAgcGxheWVyLmJvYXJkLnJlc3RvcmVTdGF0ZSgpO1xuICAgICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkcmFnZ2VkRnJvbU91dHNpZGVCb2FyZChlLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKSB7XG4gIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcbiAgY29uc3QgcmUgPSAvbGVuZ3RoLShcXGQpLztcbiAgbGV0IHNoaXBMZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZS50YXJnZXQuY2xhc3NMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHJlLnRlc3QoZS50YXJnZXQuY2xhc3NMaXN0W2ldKSkge1xuICAgICAgc2hpcExlbmd0aCA9IE51bWJlcihlLnRhcmdldC5jbGFzc0xpc3RbaV0uc3BsaXQoXCItXCIpWzFdKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBjb25zdCBuZXdTaGlwID0gc2hpcChzaGlwTGVuZ3RoKTtcblxuICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMsIHsgb3JpZ2luOiBcIm91dHNpZGVCb2FyZFwiLCBzaGlwOiBuZXdTaGlwIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhZ2dhYmxlRnJvbU91dHNpZGUoXG4gIHNoaXBDb250YWluZXJFbGVtZW50LFxuICBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lcixcbiAgcGxheWVycyxcbiAgcmVuZGVyR2FtZUJvYXJkcyxcbikge1xuICBzaGlwQ29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChlKSA9PiB7XG4gICAgZHJhZ2dlZEZyb21PdXRzaWRlQm9hcmQoZSwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcyk7XG4gIH0pO1xuXG4gIHNoaXBDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIChlKSA9PiB7XG4gICAgaWYgKGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgIT09IFwibm9uZVwiKSB7XG4gICAgICBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lci5yZW1vdmVDaGlsZChlLnRhcmdldCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZHJvcHBlZEZyb21JbnNpZGVCb2FyZChcbiAgZHJhZ0RhdGEsXG4gIHBsYXllcixcbiAgZSxcbiAgcGxheWVycyxcbiAgcmVuZGVyR2FtZUJvYXJkcyxcbikge1xuICBjb25zdCB0aGVTaGlwID0gZHJhZ0RhdGEuc2hpcDtcblxuICBjb25zdCBzdGFydGluZ0Nvb3JkaW5hdGUgPSBlLnRhcmdldC5pZFxuICAgIC5zcGxpdChcIi1cIilcbiAgICAuc2xpY2UoLTIpXG4gICAgLm1hcCgobnVtYmVyKSA9PiBOdW1iZXIobnVtYmVyKSk7XG4gIHBsYXllci5ib2FyZC5wbGFjZVNoaXAodGhlU2hpcCwgc3RhcnRpbmdDb29yZGluYXRlKTtcblxuICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJvcHBhYmxlRnJvbUluc2lkZShcbiAgdGlsZSxcbiAgZHJhZ0RhdGEsXG4gIHBsYXllcixcbiAgcGxheWVycyxcbiAgcmVuZGVyR2FtZUJvYXJkcyxcbikge1xuICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XG4gIH0pO1xuXG4gIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZHJvcHBlZEZyb21JbnNpZGVCb2FyZChkcmFnRGF0YSwgcGxheWVyLCBlLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRyb3BwZWRGcm9tT3V0c2lkZUJvYXJkKFxuICBkcmFnRGF0YSxcbiAgcGxheWVyLFxuICBlLFxuICBwbGF5ZXJzLFxuICByZW5kZXJHYW1lQm9hcmRzLFxuKSB7XG4gIGNvbnN0IHN0YXJ0aW5nQ29vcmRpbmF0ZSA9IGUudGFyZ2V0LmlkXG4gICAgLnNwbGl0KFwiLVwiKVxuICAgIC5zbGljZSgtMilcbiAgICAubWFwKChudW1iZXIpID0+IE51bWJlcihudW1iZXIpKTtcbiAgcGxheWVyLmJvYXJkLnBsYWNlU2hpcChkcmFnRGF0YS5zaGlwLCBzdGFydGluZ0Nvb3JkaW5hdGUpO1xuXG4gIGlmIChwbGF5ZXIuYm9hcmQuYWxsU2hpcHNQbGFjZWQoKSkge1xuICAgIGNvbnN0IHJlYWR5VXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlYWR5LXVwXCIpO1xuICAgIHJlYWR5VXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInJlbW92ZWRcIik7XG4gIH1cblxuICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJvcHBhYmxlRnJvbU91dHNpZGUoXG4gIHRpbGUsXG4gIGRyYWdEYXRhLFxuICBwbGF5ZXIsXG4gIHBsYXllcnMsXG4gIHJlbmRlckdhbWVCb2FyZHMsXG4pIHtcbiAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xuICB9KTtcblxuICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRyb3BwZWRGcm9tT3V0c2lkZUJvYXJkKGRyYWdEYXRhLCBwbGF5ZXIsIGUsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpO1xuICB9KTtcbn1cblxuY29uc3QgcHJldmlvdXNDb29yZGluYXRlc1F1ZXVlID0gW107XG5leHBvcnQgZnVuY3Rpb24gZHJvcHBhYmxlSG92ZXJGZWVkYmFjayh0aWxlLCBkcmFnRGF0YSwgcGxheWVyLCBwbGF5ZXJJbmRleCkge1xuICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgKGUpID0+IHtcbiAgICBjb25zdCBzdGFydGluZ0Nvb3JkaW5hdGUgPSBlLnRhcmdldC5pZFxuICAgICAgLnNwbGl0KFwiLVwiKVxuICAgICAgLnNsaWNlKC0yKVxuICAgICAgLm1hcCgobnVtYmVyKSA9PiBOdW1iZXIobnVtYmVyKSk7XG4gICAgY29uc3QgdGhlU2hpcCA9IGRyYWdEYXRhLnNoaXA7XG4gICAgY29uc3QgYWxsQ29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmQuZ2V0Q29vcmRzRnJvbVN0YXJ0aW5nQ29vcmQoXG4gICAgICBzdGFydGluZ0Nvb3JkaW5hdGUsXG4gICAgICB0aGVTaGlwLm9yaWVudGF0aW9uLFxuICAgICAgdGhlU2hpcC5sZW5ndGgsXG4gICAgKTtcblxuICAgIGFsbENvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgICAgY29uc3QgaG92ZXJlZFRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgYHAke3BsYXllckluZGV4fS0ke3Jvd30tJHtjb2x1bW59YCxcbiAgICAgICk7XG4gICAgICBob3ZlcmVkVGlsZS5jbGFzc0xpc3QuYWRkKFwidmFsaWQtcGxhY2VtZW50XCIpO1xuICAgIH0pO1xuXG4gICAgd2hpbGUgKHByZXZpb3VzQ29vcmRpbmF0ZXNRdWV1ZS5sZW5ndGggPj0gMikge1xuICAgICAgY29uc3QgcHJldmlvdXNDb29yZGluYXRlcyA9IHByZXZpb3VzQ29vcmRpbmF0ZXNRdWV1ZS5zaGlmdCgpO1xuICAgICAgcHJldmlvdXNDb29yZGluYXRlcy5mb3JFYWNoKChwcmV2Q29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gSlNPTi5wYXJzZShwcmV2Q29vcmRpbmF0ZSk7XG4gICAgICAgIGNvbnN0IGhvdmVyZWRUaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgYHAke3BsYXllckluZGV4fS0ke3Jvd30tJHtjb2x1bW59YCxcbiAgICAgICAgKTtcblxuICAgICAgICBob3ZlcmVkVGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWQtcGxhY2VtZW50XCIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHN0cmluZ2lmaWVkQ29vcmRzID0gYWxsQ29vcmRpbmF0ZXMubWFwKChjb29yZGluYXRlKSA9PlxuICAgICAgSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZSksXG4gICAgKTtcbiAgICBwcmV2aW91c0Nvb3JkaW5hdGVzUXVldWUucHVzaChzdHJpbmdpZmllZENvb3Jkcyk7XG4gIH0pO1xuXG4gIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCAoKSA9PiB7XG4gICAgbGV0IHByZXZpb3VzQ29vcmRpbmF0ZXM7XG4gICAgbGV0IGN1cnJlbnRDb29yZGluYXRlcztcbiAgICBpZiAocHJldmlvdXNDb29yZGluYXRlc1F1ZXVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIHByZXZpb3VzQ29vcmRpbmF0ZXMgPSBwcmV2aW91c0Nvb3JkaW5hdGVzUXVldWUuc2hpZnQoKTtcbiAgICAgIFtjdXJyZW50Q29vcmRpbmF0ZXNdID0gcHJldmlvdXNDb29yZGluYXRlc1F1ZXVlO1xuICAgIH0gZWxzZSBpZiAocHJldmlvdXNDb29yZGluYXRlc1F1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIFtwcmV2aW91c0Nvb3JkaW5hdGVzXSA9IHByZXZpb3VzQ29vcmRpbmF0ZXNRdWV1ZTtcbiAgICB9XG5cbiAgICBpZiAoIShwcmV2aW91c0Nvb3JkaW5hdGVzICYmIGN1cnJlbnRDb29yZGluYXRlcykpIHtcbiAgICAgIHByZXZpb3VzQ29vcmRpbmF0ZXMuZm9yRWFjaCgocHJldkNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IEpTT04ucGFyc2UocHJldkNvb3JkaW5hdGUpO1xuICAgICAgICBjb25zdCBob3ZlcmVkVGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgIGBwJHtwbGF5ZXJJbmRleH0tJHtyb3d9LSR7Y29sdW1ufWAsXG4gICAgICAgICk7XG4gICAgICAgIGhvdmVyZWRUaWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJ2YWxpZC1wbGFjZW1lbnRcIik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJldmlvdXNDb29yZGluYXRlcy5mb3JFYWNoKChwcmV2Q29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gSlNPTi5wYXJzZShwcmV2Q29vcmRpbmF0ZSk7XG4gICAgICAgIGNvbnN0IGhvdmVyZWRUaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgYHAke3BsYXllckluZGV4fS0ke3Jvd30tJHtjb2x1bW59YCxcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIWN1cnJlbnRDb29yZGluYXRlcy5pbmNsdWRlcyhwcmV2Q29vcmRpbmF0ZSkpIHtcbiAgICAgICAgICBob3ZlcmVkVGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWQtcGxhY2VtZW50XCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZUJvYXJkKCkge1xuICBjb25zdCBzdGF0ZSA9IFtdO1xuICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdyArPSAxKSB7XG4gICAgc3RhdGUucHVzaChbXSk7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCArPSAxKSB7XG4gICAgICBzdGF0ZVtyb3ddLnB1c2goZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlc3RvcmVTdGF0ZSA9ICgpID0+IHtcbiAgICBzaGlwQ29vcmRpbmF0ZXMuZm9yRWFjaCgoc2hpcE9iamVjdCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwT2JqZWN0LmNvb3JkaW5hdGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBzaGlwT2JqZWN0LmNvb3JkaW5hdGVzW2ldO1xuICAgICAgICBpZiAoc3RhdGVbcm93XVtjb2x1bW5dICE9PSBzaGlwT2JqZWN0LnNoaXApIHtcbiAgICAgICAgICBzdGF0ZVtyb3ddW2NvbHVtbl0gPSBzaGlwT2JqZWN0LnNoaXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB2YWxpZFNoaXBQbGFjZW1lbnQgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb29yZGluYXRlID0gY29vcmRpbmF0ZXNbaV07XG4gICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgIGlmIChcbiAgICAgICAgcm93IDwgMCB8fFxuICAgICAgICByb3cgPiA5IHx8XG4gICAgICAgIGNvbHVtbiA8IDAgfHxcbiAgICAgICAgY29sdW1uID4gOSB8fFxuICAgICAgICBzdGF0ZVtyb3ddW2NvbHVtbl1cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGdldENvb3Jkc0Zyb21TdGFydGluZ0Nvb3JkID0gKFxuICAgIGZpcnN0Q29vcmRpbmF0ZSxcbiAgICBvcmllbnRhdGlvbixcbiAgICBzaGlwTGVuZ3RoLFxuICApID0+IHtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW2ZpcnN0Q29vcmRpbmF0ZVswXSwgZmlyc3RDb29yZGluYXRlWzFdICsgaV0pO1xuICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW2ZpcnN0Q29vcmRpbmF0ZVswXSArIGksIGZpcnN0Q29vcmRpbmF0ZVsxXV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgZmlyc3RDb29yZGluYXRlKSA9PiB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBnZXRDb29yZHNGcm9tU3RhcnRpbmdDb29yZChcbiAgICAgIGZpcnN0Q29vcmRpbmF0ZSxcbiAgICAgIHNoaXAub3JpZW50YXRpb24sXG4gICAgICBzaGlwLmxlbmd0aCxcbiAgICApO1xuXG4gICAgaWYgKHZhbGlkU2hpcFBsYWNlbWVudChjb29yZGluYXRlcykpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc2hpcENvb3JkaW5hdGVzLmZpbmRJbmRleChcbiAgICAgICAgKHNoaXBPYmplY3QpID0+IHNoaXBPYmplY3Quc2hpcCA9PT0gc2hpcCxcbiAgICAgICk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBzaGlwQ29vcmRpbmF0ZXNbaW5kZXhdLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaCh7IHNoaXAsIGNvb3JkaW5hdGVzIH0pO1xuICAgICAgfVxuXG4gICAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgICAgICBzdGF0ZVtyb3ddW2NvbHVtbl0gPSBzaGlwO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzUGxhY2VkID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYWNlZFNoaXBzID0gW107XG4gICAgc3RhdGUuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4gJiYgIXBsYWNlZFNoaXBzLmluY2x1ZGVzKGNvbHVtbikpIHtcbiAgICAgICAgICBwbGFjZWRTaGlwcy5wdXNoKGNvbHVtbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBsYWNlZFNoaXBzLmxlbmd0aCA9PT0gNTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQbGFjZWRTaGlwcyA9ICgpID0+IHtcbiAgICBzdGF0ZS5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY29sLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICBzdGF0ZVtyb3dJbmRleF1bY29sSW5kZXhdID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzaGlwQ29vcmRpbmF0ZXMuc3BsaWNlKDAsIHNoaXBDb29yZGluYXRlcy5sZW5ndGgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVBsYWNlZFNoaXAgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgIHN0YXRlW3Jvd11bY29sdW1uXSA9IGZhbHNlO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldFBsYWNlZFNoaXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzQXJyYXkgPSBbXTtcbiAgICBzaGlwQ29vcmRpbmF0ZXMuZm9yRWFjaCgoc2hpcE9iamVjdCkgPT4ge1xuICAgICAgc2hpcHNBcnJheS5wdXNoKHNoaXBPYmplY3Quc2hpcCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNoaXBzQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcEF0ID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICBjb25zdCB0aGVTaGlwID0gc3RhdGVbcm93XVtjb2x1bW5dO1xuICAgIHJldHVybiB0aGVTaGlwO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBIZWFkQ29vcmRpbmF0ZSA9IChzaGlwKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBzaGlwQ29vcmRpbmF0ZXMuZmluZEluZGV4KFxuICAgICAgKHNoaXBPYmplY3QpID0+IHNoaXBPYmplY3Quc2hpcCA9PT0gc2hpcCxcbiAgICApO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gc2hpcENvb3JkaW5hdGVzW2luZGV4XS5jb29yZGluYXRlc1swXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcENvb3JkaW5hdGVzID0gKHNoaXApID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHNoaXBDb29yZGluYXRlcy5maW5kSW5kZXgoXG4gICAgICAoc2hpcE9iamVjdCkgPT4gc2hpcE9iamVjdC5zaGlwID09PSBzaGlwLFxuICAgICk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHJldHVybiBzaGlwQ29vcmRpbmF0ZXNbaW5kZXhdLmNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBoaXRBdHRhY2tzID0gW107XG4gIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGU7XG4gICAgY29uc3QgYm9hcmRUaWxlID0gc3RhdGVbcm93XVtjb2x1bW5dO1xuICAgIGlmIChib2FyZFRpbGUpIHtcbiAgICAgIGJvYXJkVGlsZS5oaXQoY29vcmRpbmF0ZSk7XG4gICAgICBoaXRBdHRhY2tzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbWlzc2VkQXR0YWNrcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCB2YWxpZEF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGU7XG4gICAgcmV0dXJuIHJvdyA+PSAwICYmIHJvdyA8PSA5ICYmIGNvbHVtbiA+PSAwICYmIGNvbHVtbiA8PSA5O1xuICB9O1xuXG4gIGNvbnN0IGlzQXR0YWNrYWJsZSA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgY29uc3QgYWxsQXR0YWNrcyA9IGhpdEF0dGFja3NcbiAgICAgIC5jb25jYXQobWlzc2VkQXR0YWNrcylcbiAgICAgIC5tYXAoKGF0dGFjaykgPT4gSlNPTi5zdHJpbmdpZnkoYXR0YWNrKSk7XG4gICAgcmV0dXJuIChcbiAgICAgICFhbGxBdHRhY2tzLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGUpKSAmJlxuICAgICAgdmFsaWRBdHRhY2soY29vcmRpbmF0ZSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBnZXRQbGFjZWRTaGlwcygpO1xuICAgIHJldHVybiBzaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0b3JlU3RhdGUsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU3VuayxcbiAgICBpc0F0dGFja2FibGUsXG4gICAgYWxsU2hpcHNQbGFjZWQsXG4gICAgcmVtb3ZlUGxhY2VkU2hpcHMsXG4gICAgcmVtb3ZlUGxhY2VkU2hpcCxcbiAgICBnZXRTaGlwQXQsXG4gICAgZ2V0U2hpcEhlYWRDb29yZGluYXRlLFxuICAgIGdldFNoaXBDb29yZGluYXRlcyxcbiAgICBnZXRDb29yZHNGcm9tU3RhcnRpbmdDb29yZCxcbiAgICB2YWxpZFNoaXBQbGFjZW1lbnQsXG4gICAgc3RhdGUsXG4gICAgaGl0QXR0YWNrcyxcbiAgICBtaXNzZWRBdHRhY2tzLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgaHVtYW4sIGNvbXB1dGVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgZGlzcGxheU1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi9iYXR0bGVzaGlwXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBwbGF5QWdhaW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXktYWdhaW5cIik7XG5wbGF5QWdhaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXR0bGVzaGlwLWNvbnRhaW5lclwiKS5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlZFwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lb3Zlci1tb2RhbFwiKS5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlZFwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LnJlbW92ZShcImdhbWUtYmFja2dyb3VuZFwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LmFkZChcIm1lbnUtYmFja2dyb3VuZFwiKTtcblxuICBjb25zdCBwbGF5ZXIxQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjEtYm9hcmRcIik7XG4gIHdoaWxlIChwbGF5ZXIxQm9hcmQuZmlyc3RDaGlsZCkge1xuICAgIHBsYXllcjFCb2FyZC5yZW1vdmVDaGlsZChwbGF5ZXIxQm9hcmQuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBjb25zdCBwbGF5ZXIyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjItYm9hcmRcIik7XG4gIHdoaWxlIChwbGF5ZXIyQm9hcmQuZmlyc3RDaGlsZCkge1xuICAgIHBsYXllcjJCb2FyZC5yZW1vdmVDaGlsZChwbGF5ZXIyQm9hcmQuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBjb25zdCBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuZHJhZ2dhYmxlLXNoaXBzLWNvbnRhaW5lclwiLFxuICApO1xuICB3aGlsZSAoZHJhZ2dhYmxlU2hpcHNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgc3RhcnRHYW1lKGF3YWl0IGRpc3BsYXlNZW51KGh1bWFuLCBjb21wdXRlcikpO1xufSk7XG5cbnN0YXJ0R2FtZShhd2FpdCBkaXNwbGF5TWVudShodW1hbiwgY29tcHV0ZXIpKTtcbiIsImZ1bmN0aW9uIHJlbW92ZU1lbnUoYm9keSkge1xuICBib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1tZW51LWNvbnRhaW5lclwiKSk7XG4gIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtYmFja2dyb3VuZFwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheU1lbnUoaHVtYW4sIGNvbXB1dGVyKSB7XG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLW1lbnUtY29udGFpbmVyXCIpKSB7XG4gICAgY29uc3QgZ2FtZU1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbWVNZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW1lbnUtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGdhbWVUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ2FtZVRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lLXRpdGxlLWNvbnRhaW5lclwiKTtcbiAgICBnYW1lVGl0bGVDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkJBVFRMRVNISVBcIjtcblxuICAgIGNvbnN0IGdhbWVNb2RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwdnBNb2RlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwdnBNb2RlQnRuLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgdnMuIFBsYXllclwiO1xuICAgIGNvbnN0IHB2Y01vZGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHB2Y01vZGVCdG4udGV4dENvbnRlbnQgPSBcIlBsYXllciB2cy4gQ29tcHV0ZXJcIjtcbiAgICBnYW1lTW9kZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwdnBNb2RlQnRuKTtcbiAgICBnYW1lTW9kZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwdmNNb2RlQnRuKTtcblxuICAgIGdhbWVNb2RlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW1vZGUtY29udGFpbmVyXCIpO1xuXG4gICAgZ2FtZU1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZVRpdGxlQ29udGFpbmVyKTtcbiAgICBnYW1lTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lTW9kZUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwibWVudS1iYWNrZ3JvdW5kXCIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2FtZU1lbnVDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBwdnBNb2RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZU1lbnUoYm9keSk7XG4gICAgICAgIHJlc29sdmUoW2h1bWFuKHRydWUpLCBodW1hbigpXSk7XG4gICAgICB9KTtcblxuICAgICAgcHZjTW9kZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZW1vdmVNZW51KGJvZHkpO1xuICAgICAgICByZXNvbHZlKFtodW1hbih0cnVlKSwgY29tcHV0ZXIoKV0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBkcmFnZ2FibGVGcm9tT3V0c2lkZSB9IGZyb20gXCIuL2RyYWdBbmREcm9wXCI7XG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgcmFuZG9tU3ZnIGZyb20gXCIuLi9pY29ucy9yYW5kb20tc3ZnLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5pc2hlZFBsYWNpbmdTaGlwcyhwbGF5ZXIpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgcmVhZHlVcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVhZHktdXBcIik7XG4gICAgcmVhZHlVcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcmVhZHlVcEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlZFwiKTtcbiAgICAgIHBsYXllci5yZWFkeVVwKCk7XG4gICAgICBjb25zdCByYW5kb21TaGlwUGxhY2VtZW50U3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIucmFuZG9tLXNoaXAtcGxhY2VtZW50XCIsXG4gICAgICApO1xuXG4gICAgICBjb25zdCBiYXR0bGVTaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIuYmF0dGxlc2hpcC1jb250YWluZXJcIixcbiAgICAgICk7XG4gICAgICBiYXR0bGVTaGlwQ29udGFpbmVyLnJlbW92ZUNoaWxkKHJhbmRvbVNoaXBQbGFjZW1lbnRTdmcpO1xuXG4gICAgICBjb25zdCByZWFkeVVwQnV0dG9uQ2xvbmUgPSByZWFkeVVwQnV0dG9uLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHJlYWR5VXBCdXR0b24ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocmVhZHlVcEJ1dHRvbkNsb25lLCByZWFkeVVwQnV0dG9uKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21TaGlwUGxhY2VtZW50KHBsYXllciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykge1xuICBwbGF5ZXIuYm9hcmQucmVtb3ZlUGxhY2VkU2hpcHMoKTtcbiAgY29uc3Qgc2hpcE9yaWVudGF0aW9ucyA9IFtcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXTtcblxuICBbNSwgNCwgMywgMywgMl0uZm9yRWFjaCgobGVuZ3RoKSA9PiB7XG4gICAgY29uc3QgcGxhY2VtZW50UG9vbCA9IFtdO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3cgKz0gMSkge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCArPSAxKSB7XG4gICAgICAgIHBsYWNlbWVudFBvb2wucHVzaChbcm93LCBjb2xdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21PcmllbnRhdGlvbiA9IHNoaXBPcmllbnRhdGlvbnNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XG4gICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGxhY2VtZW50UG9vbC5sZW5ndGgpO1xuICAgIHdoaWxlIChcbiAgICAgICFwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICBzaGlwKGxlbmd0aCwgcmFuZG9tT3JpZW50YXRpb24pLFxuICAgICAgICBwbGFjZW1lbnRQb29sW3JhbmRvbUluZGV4XSxcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGxhY2VtZW50UG9vbC5sZW5ndGgpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHBsYXllci5pc0h1bWFuICYmIHBsYXllci5ib2FyZC5hbGxTaGlwc1BsYWNlZCgpKSB7XG4gICAgY29uc3QgcmVhZHlVcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVhZHktdXBcIik7XG4gICAgcmVhZHlVcEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwicmVtb3ZlZFwiKTtcbiAgfVxuXG4gIHJlbmRlckdhbWVCb2FyZHMocGxheWVycyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uKFxuICBwbGF5ZXIsXG4gIHBsYXllcnMsXG4gIHJlbmRlckdhbWVCb2FyZHMsXG4pIHtcbiAgY29uc3QgcmFuZG9tU2hpcFBsYWNlbWVudFN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHJhbmRvbVNoaXBQbGFjZW1lbnRTdmcuc3JjID0gcmFuZG9tU3ZnO1xuICByYW5kb21TaGlwUGxhY2VtZW50U3ZnLmNsYXNzTGlzdC5hZGQoXCJyYW5kb20tc2hpcC1wbGFjZW1lbnRcIik7XG5cbiAgY29uc3QgYmF0dGxlU2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmF0dGxlc2hpcC1jb250YWluZXJcIik7XG4gIGJhdHRsZVNoaXBDb250YWluZXIucHJlcGVuZChyYW5kb21TaGlwUGxhY2VtZW50U3ZnKTtcblxuICByYW5kb21TaGlwUGxhY2VtZW50U3ZnLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgIHJhbmRvbVNoaXBQbGFjZW1lbnQocGxheWVyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKSxcbiAgKTtcbiAgcmFuZG9tU2hpcFBsYWNlbWVudFN2Zy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmRyYWdnYWJsZS1zaGlwcy1jb250YWluZXJcIixcbiAgICApO1xuICAgIHdoaWxlIChkcmFnZ2FibGVTaGlwc0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lci5yZW1vdmVDaGlsZChkcmFnZ2FibGVTaGlwc0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRHJhZ2dhYmxlU2hpcEVsZW1lbnRzKHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpIHtcbiAgY29uc3QgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmRyYWdnYWJsZS1zaGlwcy1jb250YWluZXJcIixcbiAgKTtcbiAgWzUsIDQsIDMsIDMsIDJdLmZvckVhY2goKGxlbmd0aCkgPT4ge1xuICAgIGNvbnN0IHNoaXBDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaGlwQ29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2hpcC1jb250YWluZXJcIiwgYGxlbmd0aC0ke2xlbmd0aH1gKTtcbiAgICBzaGlwQ29udGFpbmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xuXG4gICAgZHJhZ2dhYmxlRnJvbU91dHNpZGUoXG4gICAgICBzaGlwQ29udGFpbmVyRWxlbWVudCxcbiAgICAgIGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLFxuICAgICAgcGxheWVycyxcbiAgICAgIHJlbmRlckdhbWVCb2FyZHMsXG4gICAgKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgIGNvbnN0IHNoaXBCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNoaXBCb2R5LmNsYXNzTGlzdC5hZGQoXCJzaGlwLWJvZHlcIik7XG4gICAgICBzaGlwQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzaGlwQm9keSk7XG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcENvbnRhaW5lckVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFNoaXBPcmllbnRhdGlvbihlLCBwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpIHtcbiAgY29uc3QgY29vcmRpbmF0ZSA9IGUudGFyZ2V0LmlkXG4gICAgLnNwbGl0KFwiLVwiKVxuICAgIC5zbGljZSgtMilcbiAgICAubWFwKChudW1iZXIpID0+IE51bWJlcihudW1iZXIpKTtcbiAgY29uc3QgdGhlU2hpcCA9IHBsYXllci5ib2FyZC5nZXRTaGlwQXQoY29vcmRpbmF0ZSk7XG4gIGNvbnN0IHNoaXBIZWFkQ29vcmRpbmF0ZSA9IHBsYXllci5ib2FyZC5nZXRTaGlwSGVhZENvb3JkaW5hdGUodGhlU2hpcCk7XG4gIGNvbnN0IHN3aXRjaGVkT3JpZW50YXRpb24gPVxuICAgIHRoZVNoaXAub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbFwiO1xuXG4gIGNvbnN0IHN3aXRjaGVkU2hpcENvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkXG4gICAgLmdldENvb3Jkc0Zyb21TdGFydGluZ0Nvb3JkKFxuICAgICAgc2hpcEhlYWRDb29yZGluYXRlLFxuICAgICAgc3dpdGNoZWRPcmllbnRhdGlvbixcbiAgICAgIHRoZVNoaXAubGVuZ3RoLFxuICAgIClcbiAgICAuc2xpY2UoMSk7XG4gIGlmIChwbGF5ZXIuYm9hcmQudmFsaWRTaGlwUGxhY2VtZW50KHN3aXRjaGVkU2hpcENvb3JkaW5hdGVzKSkge1xuICAgIHRoZVNoaXAub3JpZW50YXRpb24gPSBzd2l0Y2hlZE9yaWVudGF0aW9uO1xuICAgIHBsYXllci5ib2FyZC5yZW1vdmVQbGFjZWRTaGlwKHBsYXllci5ib2FyZC5nZXRTaGlwQ29vcmRpbmF0ZXModGhlU2hpcCkpO1xuICAgIHBsYXllci5ib2FyZC5wbGFjZVNoaXAodGhlU2hpcCwgc2hpcEhlYWRDb29yZGluYXRlKTtcblxuICAgIHJlbmRlckdhbWVCb2FyZHMocGxheWVycyk7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuXG5mdW5jdGlvbiBwbGF5ZXIoKSB7XG4gIGNvbnN0IGJvYXJkID0gZ2FtZUJvYXJkKCk7XG5cbiAgY29uc3QgaXNSZWFkeSA9IGZhbHNlO1xuICBjb25zdCByZWFkeVVwID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gIH07XG5cbiAgY29uc3Qgc3dpdGNoVHVybiA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm15VHVybiA9ICF0aGlzLm15VHVybjtcbiAgfTtcblxuICByZXR1cm4geyByZWFkeVVwLCBzd2l0Y2hUdXJuLCBib2FyZCwgaXNSZWFkeSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHVtYW4obXlUdXJuID0gZmFsc2UpIHtcbiAgY29uc3QgbmFtZSA9IG15VHVybiA/IFwiUGxheWVyIDFcIiA6IFwiUGxheWVyIDJcIjtcbiAgY29uc3QgaXNIdW1hbiA9IHRydWU7XG5cbiAgcmV0dXJuIHsgLi4ucGxheWVyKCksIGlzSHVtYW4sIG15VHVybiwgbmFtZSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZXIobXlUdXJuID0gZmFsc2UpIHtcbiAgY29uc3QgbmFtZSA9IFwiUGxheWVyIDJcIjtcbiAgY29uc3QgaXNIdW1hbiA9IGZhbHNlO1xuXG4gIGxldCBpbml0aWFsSGl0ID0gbnVsbDtcbiAgbGV0IHByZXZpb3VzQXR0YWNrSGl0ID0gZmFsc2U7XG4gIGxldCBoaXRIaXN0b3J5ID0gW107XG4gIGxldCBhdHRhY2tTdGFjayA9IFtdO1xuICBjb25zdCBhdHRhY2sgPSBmdW5jdGlvbiAob3Bwb25lbnQpIHtcbiAgICBpZiAoaW5pdGlhbEhpdCkge1xuICAgICAgY29uc3QgYXR0YWNrZWRTaGlwID0gb3Bwb25lbnQuYm9hcmQuZ2V0U2hpcEF0KGluaXRpYWxIaXQpO1xuICAgICAgaWYgKGF0dGFja2VkU2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBjb25zdCBzdW5rU2hpcENvb3JkaW5hdGVzID0gYXR0YWNrZWRTaGlwLmhpdENvb3JkaW5hdGVzLm1hcChcbiAgICAgICAgICAoaGl0Q29vcmRpbmF0ZSkgPT4gSlNPTi5zdHJpbmdpZnkoaGl0Q29vcmRpbmF0ZSksXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ0Nvb3JkaW5hdGVzID0gW107XG4gICAgICAgIGhpdEhpc3RvcnkuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgIGlmICghc3Vua1NoaXBDb29yZGluYXRlcy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShjb29yZGluYXRlKSkpIHtcbiAgICAgICAgICAgIHJlbWFpbmluZ0Nvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaGl0SGlzdG9yeSA9IHJlbWFpbmluZ0Nvb3JkaW5hdGVzO1xuICAgICAgICBhdHRhY2tTdGFjayA9IFtdO1xuXG4gICAgICAgIGlmIChoaXRIaXN0b3J5Lmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgaW5pdGlhbEhpdCA9IGhpdEhpc3RvcnkucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5pdGlhbEhpdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5pdGlhbEhpdCAmJiBhdHRhY2tTdGFjay5sZW5ndGggPT09IDAgJiYgaGl0SGlzdG9yeS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHBvc3NpYmxlQXR0YWNrcyA9IFtdO1xuICAgICAgcG9zc2libGVBdHRhY2tzLnB1c2goW2luaXRpYWxIaXRbMF0sIGluaXRpYWxIaXRbMV0gKyAxXSk7XG4gICAgICBwb3NzaWJsZUF0dGFja3MucHVzaChbaW5pdGlhbEhpdFswXSwgaW5pdGlhbEhpdFsxXSAtIDFdKTtcbiAgICAgIHBvc3NpYmxlQXR0YWNrcy5wdXNoKFtpbml0aWFsSGl0WzBdICsgMSwgaW5pdGlhbEhpdFsxXV0pO1xuICAgICAgcG9zc2libGVBdHRhY2tzLnB1c2goW2luaXRpYWxIaXRbMF0gLSAxLCBpbml0aWFsSGl0WzFdXSk7XG4gICAgICBwb3NzaWJsZUF0dGFja3MuZm9yRWFjaCgocG9zc2libGVBdHRhY2spID0+IHtcbiAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkLmlzQXR0YWNrYWJsZShwb3NzaWJsZUF0dGFjaykpIHtcbiAgICAgICAgICBhdHRhY2tTdGFjay5wdXNoKHBvc3NpYmxlQXR0YWNrKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpbml0aWFsSGl0ICYmIGhpdEhpc3RvcnkubGVuZ3RoID49IDEgJiYgcHJldmlvdXNBdHRhY2tIaXQpIHtcbiAgICAgIGNvbnN0IGxhc3RIaXQgPSBoaXRIaXN0b3J5W2hpdEhpc3RvcnkubGVuZ3RoIC0gMV07XG4gICAgICBjb25zdCB4MSA9IGluaXRpYWxIaXRbMV07XG4gICAgICBjb25zdCB5MSA9IGluaXRpYWxIaXRbMF07XG4gICAgICBjb25zdCB4MiA9IGxhc3RIaXRbMV07XG4gICAgICBjb25zdCB5MiA9IGxhc3RIaXRbMF07XG5cbiAgICAgIGNvbnN0IHhEaWZmID0geDEgLSB4MjtcbiAgICAgIGNvbnN0IHlEaWZmID0geTEgLSB5MjtcblxuICAgICAgaWYgKHhEaWZmIDwgMCkge1xuICAgICAgICAvLyByaWdodFxuICAgICAgICBjb25zdCByaWdodE9uZSA9IFtsYXN0SGl0WzBdLCBsYXN0SGl0WzFdICsgMV07XG4gICAgICAgIGlmIChvcHBvbmVudC5ib2FyZC5pc0F0dGFja2FibGUocmlnaHRPbmUpKSB7XG4gICAgICAgICAgYXR0YWNrU3RhY2sucHVzaChyaWdodE9uZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoeERpZmYgPiAwKSB7XG4gICAgICAgIC8vIGxlZnRcbiAgICAgICAgY29uc3QgbGVmdE9uZSA9IFtsYXN0SGl0WzBdLCBsYXN0SGl0WzFdIC0gMV07XG4gICAgICAgIGlmIChvcHBvbmVudC5ib2FyZC5pc0F0dGFja2FibGUobGVmdE9uZSkpIHtcbiAgICAgICAgICBhdHRhY2tTdGFjay5wdXNoKGxlZnRPbmUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHlEaWZmIDwgMCkge1xuICAgICAgICAvLyB1cFxuICAgICAgICBjb25zdCB1cE9uZSA9IFtsYXN0SGl0WzBdICsgMSwgbGFzdEhpdFsxXV07XG4gICAgICAgIGlmIChvcHBvbmVudC5ib2FyZC5pc0F0dGFja2FibGUodXBPbmUpKSB7XG4gICAgICAgICAgYXR0YWNrU3RhY2sucHVzaCh1cE9uZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoeURpZmYgPiAwKSB7XG4gICAgICAgIC8vIGRvd25cbiAgICAgICAgY29uc3QgZG93bk9uZSA9IFtsYXN0SGl0WzBdIC0gMSwgbGFzdEhpdFsxXV07XG4gICAgICAgIGlmIChvcHBvbmVudC5ib2FyZC5pc0F0dGFja2FibGUoZG93bk9uZSkpIHtcbiAgICAgICAgICBhdHRhY2tTdGFjay5wdXNoKGRvd25PbmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGF0dGFja1N0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBhdHRhY2tTdGFjay5wb3AoKTtcbiAgICB9XG4gICAgaWYgKGF0dGFja1N0YWNrLmxlbmd0aCA8PSAwKSB7XG4gICAgICBjb25zdCBhdHRhY2tQb29sID0gW107XG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93ICs9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCArPSAxKSB7XG4gICAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkLmlzQXR0YWNrYWJsZShbcm93LCBjb2xdKSkge1xuICAgICAgICAgICAgYXR0YWNrUG9vbC5wdXNoKFtyb3csIGNvbF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChhdHRhY2tQb29sLmxlbmd0aCAtIDEpKTtcbiAgICAgIGNvbnN0IHJhbmRvbUF0dGFjayA9IGF0dGFja1Bvb2xbcmFuZG9tSW5kZXhdO1xuICAgICAgcmV0dXJuIHJhbmRvbUF0dGFjaztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGxvZ0F0dGFjayA9IChpc0hpdCwgY29vcmRpbmF0ZSkgPT4ge1xuICAgIGlmIChpc0hpdCAmJiAhaW5pdGlhbEhpdCkge1xuICAgICAgaW5pdGlhbEhpdCA9IGNvb3JkaW5hdGU7XG4gICAgICBwcmV2aW91c0F0dGFja0hpdCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChpc0hpdCkge1xuICAgICAgaGl0SGlzdG9yeS5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgcHJldmlvdXNBdHRhY2tIaXQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2aW91c0F0dGFja0hpdCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyAuLi5wbGF5ZXIoKSwgYXR0YWNrLCBsb2dBdHRhY2ssIGlzSHVtYW4sIG15VHVybiwgbmFtZSB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hpcChsZW5ndGgsIG9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiKSB7XG4gIGNvbnN0IGhpdENvb3JkaW5hdGVzID0gW107XG5cbiAgY29uc3QgaGl0ID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICBoaXRDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgIHJldHVybiBoaXRDb29yZGluYXRlcztcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBsZW5ndGggLSBoaXRDb29yZGluYXRlcy5sZW5ndGggPD0gMDtcblxuICByZXR1cm4geyBsZW5ndGgsIG9yaWVudGF0aW9uLCBoaXRDb29yZGluYXRlcywgaGl0LCBpc1N1bmsgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJ2YXIgd2VicGFja1F1ZXVlcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgcXVldWVzXCIpIDogXCJfX3dlYnBhY2tfcXVldWVzX19cIjtcbnZhciB3ZWJwYWNrRXhwb3J0cyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXhwb3J0c1wiKSA6IFwiX193ZWJwYWNrX2V4cG9ydHNfX1wiO1xudmFyIHdlYnBhY2tFcnJvciA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXJyb3JcIikgOiBcIl9fd2VicGFja19lcnJvcl9fXCI7XG52YXIgcmVzb2x2ZVF1ZXVlID0gKHF1ZXVlKSA9PiB7XG5cdGlmKHF1ZXVlICYmIHF1ZXVlLmQgPCAxKSB7XG5cdFx0cXVldWUuZCA9IDE7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0pKTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSA/IGZuLnIrKyA6IGZuKCkpKTtcblx0fVxufVxudmFyIHdyYXBEZXBzID0gKGRlcHMpID0+IChkZXBzLm1hcCgoZGVwKSA9PiB7XG5cdGlmKGRlcCAhPT0gbnVsbCAmJiB0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKSB7XG5cdFx0aWYoZGVwW3dlYnBhY2tRdWV1ZXNdKSByZXR1cm4gZGVwO1xuXHRcdGlmKGRlcC50aGVuKSB7XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHRcdHF1ZXVlLmQgPSAwO1xuXHRcdFx0ZGVwLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFeHBvcnRzXSA9IHI7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9LCAoZSkgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0Vycm9yXSA9IGU7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdG9ialt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKGZuKHF1ZXVlKSk7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0fVxuXHR2YXIgcmV0ID0ge307XG5cdHJldFt3ZWJwYWNrUXVldWVzXSA9IHggPT4ge307XG5cdHJldFt3ZWJwYWNrRXhwb3J0c10gPSBkZXA7XG5cdHJldHVybiByZXQ7XG59KSk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmEgPSAobW9kdWxlLCBib2R5LCBoYXNBd2FpdCkgPT4ge1xuXHR2YXIgcXVldWU7XG5cdGhhc0F3YWl0ICYmICgocXVldWUgPSBbXSkuZCA9IC0xKTtcblx0dmFyIGRlcFF1ZXVlcyA9IG5ldyBTZXQoKTtcblx0dmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblx0dmFyIGN1cnJlbnREZXBzO1xuXHR2YXIgb3V0ZXJSZXNvbHZlO1xuXHR2YXIgcmVqZWN0O1xuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWopID0+IHtcblx0XHRyZWplY3QgPSByZWo7XG5cdFx0b3V0ZXJSZXNvbHZlID0gcmVzb2x2ZTtcblx0fSk7XG5cdHByb21pc2Vbd2VicGFja0V4cG9ydHNdID0gZXhwb3J0cztcblx0cHJvbWlzZVt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKHF1ZXVlICYmIGZuKHF1ZXVlKSwgZGVwUXVldWVzLmZvckVhY2goZm4pLCBwcm9taXNlW1wiY2F0Y2hcIl0oeCA9PiB7fSkpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IHByb21pc2U7XG5cdGJvZHkoKGRlcHMpID0+IHtcblx0XHRjdXJyZW50RGVwcyA9IHdyYXBEZXBzKGRlcHMpO1xuXHRcdHZhciBmbjtcblx0XHR2YXIgZ2V0UmVzdWx0ID0gKCkgPT4gKGN1cnJlbnREZXBzLm1hcCgoZCkgPT4ge1xuXHRcdFx0aWYoZFt3ZWJwYWNrRXJyb3JdKSB0aHJvdyBkW3dlYnBhY2tFcnJvcl07XG5cdFx0XHRyZXR1cm4gZFt3ZWJwYWNrRXhwb3J0c107XG5cdFx0fSkpXG5cdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0Zm4gPSAoKSA9PiAocmVzb2x2ZShnZXRSZXN1bHQpKTtcblx0XHRcdGZuLnIgPSAwO1xuXHRcdFx0dmFyIGZuUXVldWUgPSAocSkgPT4gKHEgIT09IHF1ZXVlICYmICFkZXBRdWV1ZXMuaGFzKHEpICYmIChkZXBRdWV1ZXMuYWRkKHEpLCBxICYmICFxLmQgJiYgKGZuLnIrKywgcS5wdXNoKGZuKSkpKTtcblx0XHRcdGN1cnJlbnREZXBzLm1hcCgoZGVwKSA9PiAoZGVwW3dlYnBhY2tRdWV1ZXNdKGZuUXVldWUpKSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZuLnIgPyBwcm9taXNlIDogZ2V0UmVzdWx0KCk7XG5cdH0sIChlcnIpID0+ICgoZXJyID8gcmVqZWN0KHByb21pc2Vbd2VicGFja0Vycm9yXSA9IGVycikgOiBvdXRlclJlc29sdmUoZXhwb3J0cykpLCByZXNvbHZlUXVldWUocXVldWUpKSk7XG5cdHF1ZXVlICYmIHF1ZXVlLmQgPCAwICYmIChxdWV1ZS5kID0gMCk7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
