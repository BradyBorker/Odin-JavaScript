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
  background: linear-gradient(
    0deg,
    rgba(194, 178, 128, 1) 0%,
    rgba(194, 178, 128, 1) 0%,
    rgba(35, 137, 218, 1) 20%
  );
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
  filter: invert(78%) sepia(15%) saturate(728%) hue-rotate(8deg) brightness(90%)
    contrast(89%);
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

  filter: invert(18%) sepia(48%) saturate(5244%) hue-rotate(335deg)
    brightness(95%) contrast(104%);
}

.tile.hit.sunk img {
  filter: invert(7%) sepia(4%) saturate(596%) hue-rotate(170deg) brightness(89%)
    contrast(107%);
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
`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;;EAEb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE;;;;0EAIwE;EACxE,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE;;;;;GAKC;EACD,0DAA0D;EAC1D,yBAAyB;AAC3B;;AAEA;;;EAGE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA,SAAS;AACT;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;;EAEnB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;;EAElB,kBAAkB;EAClB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;;EAET,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;;EAElB,aAAa;EACb,wCAAwC;EACxC,YAAY;AACd;;AAEA;EACE,kDAAkD;AACpD;;AAEA,4BAA4B;AAC5B;EACE,WAAW;EACX,YAAY;;EAEZ,mGAAmG;EACnG;iBACe;AACjB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;;EAElB,aAAa;EACb,wCAAwC;EACxC,YAAY;AACd;;AAEA,oBAAoB;AACpB;EACE,iBAAiB;;EAEjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;;EAEE,YAAY;EACZ,iBAAiB;;EAEjB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ;kCACgC;AAClC;;AAEA;EACE;kBACgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA,0BAA0B;AAC1B;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,yBAAyB;;EAEzB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA,eAAe;AACf;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,YAAY;;EAEZ,aAAa;AACf;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA,oBAAoB;AACpB;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,wCAAwC;;EAExC,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,kBAAkB;;EAElB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;;EAElB,aAAa;EACb,wCAAwC;EACxC,YAAY;AACd",
            sourcesContent: [
              '@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");\n\n* {\n  font-family: "IBM Plex Mono", monospace;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu-background {\n  background:\n    radial-gradient(black 15%, transparent 16%) 0 0,\n    radial-gradient(black 15%, transparent 16%) 8px 8px,\n    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px,\n    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 8px 9px;\n  background-color: #282828;\n  background-size: 16px 16px;\n}\n\n.game-background {\n  background: linear-gradient(\n    0deg,\n    rgba(194, 178, 128, 1) 0%,\n    rgba(194, 178, 128, 1) 0%,\n    rgba(35, 137, 218, 1) 20%\n  );\n  box-shadow: inset 0px 0px 23px 12px rgba(194, 178, 128, 1);\n  border: 2px inset #c2b280;\n}\n\n.removed,\n.battleship-container.removed,\n.gameover-modal.removed {\n  display: none;\n}\n\n.hidden {\n  opacity: 0;\n  pointer-events: none;\n}\n\n/* Menu */\n.game-menu-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  padding: 25px;\n}\n\n.game-title-container {\n  font-weight: 700;\n  font-style: normal;\n\n  text-align: center;\n  font-size: 72px;\n  color: #c0c0c0;\n}\n\n.game-mode-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  max-width: 250px;\n}\n\n.game-mode-container button {\n  font-weight: 700;\n  font-style: normal;\n\n  padding: 10px;\n  background-color: rgba(194, 178, 128, 1);\n  color: black;\n}\n\n.game-mode-container button:hover {\n  box-shadow: 0px 0px 5px 4px rgba(194, 178, 128, 1);\n}\n\n/* Battleship Game Buttons */\n.random-ship-placement {\n  width: 35px;\n  height: 35px;\n\n  /* filter: invert(81%) sepia(0%) saturate(94%) hue-rotate(134deg) brightness(93%) contrast(101%); */\n  filter: invert(78%) sepia(15%) saturate(728%) hue-rotate(8deg) brightness(90%)\n    contrast(89%);\n}\n\n.ready-up {\n  font-weight: 700;\n  font-style: normal;\n\n  padding: 10px;\n  background-color: rgba(194, 178, 128, 1);\n  color: black;\n}\n\n/* Battleship Game */\n.battleship-container {\n  max-width: 1200px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.player-boards {\n  display: flex;\n  justify-content: space-between;\n}\n\n.player1-board,\n.player2-board {\n  width: 500px;\n  min-height: 500px;\n\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.tile {\n  border: 1px solid #a8b0b2;\n}\n\n.tile.valid-placement {\n  background-color: #99a3a3;\n}\n\n.tile.ship {\n  background-color: #070809;\n}\n\n.tile.hit {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.tile.hit.sunk {\n  background-color: #dc143c;\n}\n\n.tile.hit img {\n  width: 100%;\n  height: 100%;\n\n  filter: invert(18%) sepia(48%) saturate(5244%) hue-rotate(335deg)\n    brightness(95%) contrast(104%);\n}\n\n.tile.hit.sunk img {\n  filter: invert(7%) sepia(4%) saturate(596%) hue-rotate(170deg) brightness(89%)\n    contrast(107%);\n}\n\n.tile.missed {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: #a8b0b2;\n  opacity: 0.5;\n}\n\n.tile.missed img {\n  width: 100%;\n  height: 100%;\n}\n\n/* Ship pieces container */\n.draggable-ships-container {\n  width: 50px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.ship-container {\n  width: 25px;\n  border: 1px solid white;\n  background-color: #070809;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.ship-body {\n  min-height: 25px;\n  border: 1px solid #a8b0b2;\n  background-color: #070809;\n}\n\n/* Ghost Ship */\n#ghost-ship {\n  position: absolute;\n  top: -1000px;\n}\n\n.horizontal {\n  height: 25px;\n\n  display: flex;\n}\n\n.vertical {\n  width: 25px;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.ghost-ship-body {\n  height: 100%;\n  width: 100%;\n  border: 1px solid #a8b0b2;\n  background-color: #070809;\n}\n\n/* Game Over Modal */\n.gameover-modal {\n  width: 300px;\n  min-height: 100px;\n  padding: 15px;\n  background-color: rgba(194, 178, 128, 1);\n\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.gameover-modal .winner-name {\n  font-size: 32px;\n}\n\n.gameover-modal button {\n  font-weight: 700;\n  font-style: normal;\n\n  padding: 10px;\n  background-color: rgba(194, 178, 128, 1);\n  color: black;\n}\n',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDZIQUE2SCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQkFBb0I7QUFDek47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvR0FBb0c7QUFDcEc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFFBQVEsT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFNBQVMsS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLE1BQU0sS0FBSyxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFdBQVcsWUFBWSxNQUFNLE1BQU0sT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FB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Ozs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9iYXR0bGVzaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2RyYWdBbmREcm9wLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3BsYWNlU2hpcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUlCTStQbGV4K01vbm86aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IE1vbm9cIiwgbW9ub3NwYWNlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVudS1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDpcbiAgICByYWRpYWwtZ3JhZGllbnQoYmxhY2sgMTUlLCB0cmFuc3BhcmVudCAxNiUpIDAgMCxcbiAgICByYWRpYWwtZ3JhZGllbnQoYmxhY2sgMTUlLCB0cmFuc3BhcmVudCAxNiUpIDhweCA4cHgsXG4gICAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAxNSUsIHRyYW5zcGFyZW50IDIwJSkgMCAxcHgsXG4gICAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAxNSUsIHRyYW5zcGFyZW50IDIwJSkgOHB4IDlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcbiAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG59XG5cbi5nYW1lLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMGRlZyxcbiAgICByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpIDAlLFxuICAgIHJnYmEoMTk0LCAxNzgsIDEyOCwgMSkgMCUsXG4gICAgcmdiYSgzNSwgMTM3LCAyMTgsIDEpIDIwJVxuICApO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDIzcHggMTJweCByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xuICBib3JkZXI6IDJweCBpbnNldCAjYzJiMjgwO1xufVxuXG4ucmVtb3ZlZCxcbi5iYXR0bGVzaGlwLWNvbnRhaW5lci5yZW1vdmVkLFxuLmdhbWVvdmVyLW1vZGFsLnJlbW92ZWQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qIE1lbnUgKi9cbi5nYW1lLW1lbnUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4uZ2FtZS10aXRsZS1jb250YWluZXIge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG5cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDcycHg7XG4gIGNvbG9yOiAjYzBjMGMwO1xufVxuXG4uZ2FtZS1tb2RlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcblxuICBtYXgtd2lkdGg6IDI1MHB4O1xufVxuXG4uZ2FtZS1tb2RlLWNvbnRhaW5lciBidXR0b24ge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG5cbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZ2FtZS1tb2RlLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA0cHggcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcbn1cblxuLyogQmF0dGxlc2hpcCBHYW1lIEJ1dHRvbnMgKi9cbi5yYW5kb20tc2hpcC1wbGFjZW1lbnQge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuXG4gIC8qIGZpbHRlcjogaW52ZXJ0KDgxJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDk0JSkgaHVlLXJvdGF0ZSgxMzRkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCgxMDElKTsgKi9cbiAgZmlsdGVyOiBpbnZlcnQoNzglKSBzZXBpYSgxNSUpIHNhdHVyYXRlKDcyOCUpIGh1ZS1yb3RhdGUoOGRlZykgYnJpZ2h0bmVzcyg5MCUpXG4gICAgY29udHJhc3QoODklKTtcbn1cblxuLnJlYWR5LXVwIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuXG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk0LCAxNzgsIDEyOCwgMSk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogQmF0dGxlc2hpcCBHYW1lICovXG4uYmF0dGxlc2hpcC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5wbGF5ZXItYm9hcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucGxheWVyMS1ib2FyZCxcbi5wbGF5ZXIyLWJvYXJkIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtaW4taGVpZ2h0OiA1MDBweDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi50aWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E4YjBiMjtcbn1cblxuLnRpbGUudmFsaWQtcGxhY2VtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5YTNhMztcbn1cblxuLnRpbGUuc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzA4MDk7XG59XG5cbi50aWxlLmhpdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aWxlLmhpdC5zdW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMTQzYztcbn1cblxuLnRpbGUuaGl0IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSg0OCUpIHNhdHVyYXRlKDUyNDQlKSBodWUtcm90YXRlKDMzNWRlZylcbiAgICBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoMTA0JSk7XG59XG5cbi50aWxlLmhpdC5zdW5rIGltZyB7XG4gIGZpbHRlcjogaW52ZXJ0KDclKSBzZXBpYSg0JSkgc2F0dXJhdGUoNTk2JSkgaHVlLXJvdGF0ZSgxNzBkZWcpIGJyaWdodG5lc3MoODklKVxuICAgIGNvbnRyYXN0KDEwNyUpO1xufVxuXG4udGlsZS5taXNzZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThiMGIyO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi50aWxlLm1pc3NlZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBTaGlwIHBpZWNlcyBjb250YWluZXIgKi9cbi5kcmFnZ2FibGUtc2hpcHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDUwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLnNoaXAtY29udGFpbmVyIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwODA5O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaGlwLWJvZHkge1xuICBtaW4taGVpZ2h0OiAyNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYThiMGIyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwODA5O1xufVxuXG4vKiBHaG9zdCBTaGlwICovXG4jZ2hvc3Qtc2hpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTAwMHB4O1xufVxuXG4uaG9yaXpvbnRhbCB7XG4gIGhlaWdodDogMjVweDtcblxuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udmVydGljYWwge1xuICB3aWR0aDogMjVweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZ2hvc3Qtc2hpcC1ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E4YjBiMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3MDgwOTtcbn1cblxuLyogR2FtZSBPdmVyIE1vZGFsICovXG4uZ2FtZW92ZXItbW9kYWwge1xuICB3aWR0aDogMzAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdhbWVvdmVyLW1vZGFsIC53aW5uZXItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLmdhbWVvdmVyLW1vZGFsIGJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcblxuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xuICBjb2xvcjogYmxhY2s7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx1Q0FB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O0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SUJNK1BsZXgrTW9ubzppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIklCTSBQbGV4IE1vbm9cXFwiLCBtb25vc3BhY2U7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kOlxcbiAgICByYWRpYWwtZ3JhZGllbnQoYmxhY2sgMTUlLCB0cmFuc3BhcmVudCAxNiUpIDAgMCxcXG4gICAgcmFkaWFsLWdyYWRpZW50KGJsYWNrIDE1JSwgdHJhbnNwYXJlbnQgMTYlKSA4cHggOHB4LFxcbiAgICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDE1JSwgdHJhbnNwYXJlbnQgMjAlKSAwIDFweCxcXG4gICAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAxNSUsIHRyYW5zcGFyZW50IDIwJSkgOHB4IDlweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcXG59XFxuXFxuLmdhbWUtYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDBkZWcsXFxuICAgIHJnYmEoMTk0LCAxNzgsIDEyOCwgMSkgMCUsXFxuICAgIHJnYmEoMTk0LCAxNzgsIDEyOCwgMSkgMCUsXFxuICAgIHJnYmEoMzUsIDEzNywgMjE4LCAxKSAyMCVcXG4gICk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDIzcHggMTJweCByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xcbiAgYm9yZGVyOiAycHggaW5zZXQgI2MyYjI4MDtcXG59XFxuXFxuLnJlbW92ZWQsXFxuLmJhdHRsZXNoaXAtY29udGFpbmVyLnJlbW92ZWQsXFxuLmdhbWVvdmVyLW1vZGFsLnJlbW92ZWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi8qIE1lbnUgKi9cXG4uZ2FtZS1tZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nOiAyNXB4O1xcbn1cXG5cXG4uZ2FtZS10aXRsZS1jb250YWluZXIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG5cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNzJweDtcXG4gIGNvbG9yOiAjYzBjMGMwO1xcbn1cXG5cXG4uZ2FtZS1tb2RlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG5cXG4gIG1heC13aWR0aDogMjUwcHg7XFxufVxcblxcbi5nYW1lLW1vZGUtY29udGFpbmVyIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcblxcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk0LCAxNzgsIDEyOCwgMSk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5nYW1lLW1vZGUtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA0cHggcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcXG59XFxuXFxuLyogQmF0dGxlc2hpcCBHYW1lIEJ1dHRvbnMgKi9cXG4ucmFuZG9tLXNoaXAtcGxhY2VtZW50IHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcblxcbiAgLyogZmlsdGVyOiBpbnZlcnQoODElKSBzZXBpYSgwJSkgc2F0dXJhdGUoOTQlKSBodWUtcm90YXRlKDEzNGRlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDEwMSUpOyAqL1xcbiAgZmlsdGVyOiBpbnZlcnQoNzglKSBzZXBpYSgxNSUpIHNhdHVyYXRlKDcyOCUpIGh1ZS1yb3RhdGUoOGRlZykgYnJpZ2h0bmVzcyg5MCUpXFxuICAgIGNvbnRyYXN0KDg5JSk7XFxufVxcblxcbi5yZWFkeS11cCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcblxcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk0LCAxNzgsIDEyOCwgMSk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIEJhdHRsZXNoaXAgR2FtZSAqL1xcbi5iYXR0bGVzaGlwLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnBsYXllci1ib2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnBsYXllcjEtYm9hcmQsXFxuLnBsYXllcjItYm9hcmQge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLnRpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2E4YjBiMjtcXG59XFxuXFxuLnRpbGUudmFsaWQtcGxhY2VtZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OWEzYTM7XFxufVxcblxcbi50aWxlLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3MDgwOTtcXG59XFxuXFxuLnRpbGUuaGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpbGUuaGl0LnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMTQzYztcXG59XFxuXFxuLnRpbGUuaGl0IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGZpbHRlcjogaW52ZXJ0KDE4JSkgc2VwaWEoNDglKSBzYXR1cmF0ZSg1MjQ0JSkgaHVlLXJvdGF0ZSgzMzVkZWcpXFxuICAgIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCgxMDQlKTtcXG59XFxuXFxuLnRpbGUuaGl0LnN1bmsgaW1nIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDclKSBzZXBpYSg0JSkgc2F0dXJhdGUoNTk2JSkgaHVlLXJvdGF0ZSgxNzBkZWcpIGJyaWdodG5lc3MoODklKVxcbiAgICBjb250cmFzdCgxMDclKTtcXG59XFxuXFxuLnRpbGUubWlzc2VkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThiMGIyO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udGlsZS5taXNzZWQgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBTaGlwIHBpZWNlcyBjb250YWluZXIgKi9cXG4uZHJhZ2dhYmxlLXNoaXBzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNTBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzA4MDk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNoaXAtYm9keSB7XFxuICBtaW4taGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2E4YjBiMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzA4MDk7XFxufVxcblxcbi8qIEdob3N0IFNoaXAgKi9cXG4jZ2hvc3Qtc2hpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMDAwcHg7XFxufVxcblxcbi5ob3Jpem9udGFsIHtcXG4gIGhlaWdodDogMjVweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi52ZXJ0aWNhbCB7XFxuICB3aWR0aDogMjVweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZ2hvc3Qtc2hpcC1ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2E4YjBiMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzA4MDk7XFxufVxcblxcbi8qIEdhbWUgT3ZlciBNb2RhbCAqL1xcbi5nYW1lb3Zlci1tb2RhbCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVvdmVyLW1vZGFsIC53aW5uZXItbmFtZSB7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbi5nYW1lb3Zlci1tb2RhbCBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG5cXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgZmluaXNoZWRQbGFjaW5nU2hpcHMsIHtcbiAgY3JlYXRlUmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbixcbiAgcmFuZG9tU2hpcFBsYWNlbWVudCxcbiAgY3JlYXRlRHJhZ2dhYmxlU2hpcEVsZW1lbnRzLFxuICBzd2l0Y2hTaGlwT3JpZW50YXRpb24sXG59IGZyb20gXCIuL3BsYWNlU2hpcHNcIjtcbmltcG9ydCB7XG4gIGRyYWdnYWJsZUZyb21JbnNpZGUsXG4gIGRyb3BwYWJsZUZyb21JbnNpZGUsXG4gIGRyb3BwYWJsZUZyb21PdXRzaWRlLFxuICBkcm9wcGFibGVIb3ZlckZlZWRiYWNrLFxufSBmcm9tIFwiLi9kcmFnQW5kRHJvcFwiO1xuaW1wb3J0IGV4cGxvc2lvblN2ZyBmcm9tIFwiLi4vaWNvbnMvYm9tYi1leHBsb3Npb24tc3ZnLnN2Z1wiO1xuaW1wb3J0IHNtYWxsRG90U2cgZnJvbSBcIi4uL2ljb25zL3NtYWxsLWRvdC5zdmdcIjtcblxuZnVuY3Rpb24gc3dpdGNoVHVybihwbGF5ZXJzKSB7XG4gIHBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgcGxheWVyLnN3aXRjaFR1cm4oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzR2FtZU92ZXIocGxheWVycykge1xuICBjb25zdCBsb3NlciA9IHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+IHBsYXllci5ib2FyZC5hbGxTdW5rKCkpO1xuICBpZiAobG9zZXIubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IFt3aW5uZXJdID0gcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gIXBsYXllci5ib2FyZC5hbGxTdW5rKCkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZW92ZXItbW9kYWxcIikuY2xhc3NMaXN0LnJlbW92ZShcInJlbW92ZWRcIik7XG4gICAgY29uc3QgbW9kYWxXaW5uZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5uZXItbmFtZVwiKTtcbiAgICBtb2RhbFdpbm5lck5hbWUudGV4dENvbnRlbnQgPSBgJHt3aW5uZXIubmFtZX0gV29uIWA7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtYWtlQXR0YWNrKHBsYXllcnMsIGNvb3JkaW5hdGUpIHtcbiAgbGV0IFthdHRhY2tlZFBsYXllcl0gPSBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiAhcGxheWVyLm15VHVybik7XG4gIGxldCBbYXR0YWNraW5nUGxheWVyXSA9IHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+IHBsYXllci5teVR1cm4pO1xuXG4gIGlmICghYXR0YWNraW5nUGxheWVyLmlzSHVtYW4pIHtcbiAgICBhdHRhY2tpbmdQbGF5ZXIubG9nQXR0YWNrKFxuICAgICAgYXR0YWNrZWRQbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSxcbiAgICAgIGNvb3JkaW5hdGUsXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBhdHRhY2tlZFBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xuICB9XG5cbiAgaWYgKGlzR2FtZU92ZXIocGxheWVycykpIHtcbiAgICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMsIHt9LCBbXSwgdHJ1ZSk7XG4gIH1cbiAgc3dpdGNoVHVybihwbGF5ZXJzKTtcbiAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKTtcblxuICAvLyBDb21wdXRlciBBdHRhY2tcbiAgW2F0dGFja2VkUGxheWVyXSA9IHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+ICFwbGF5ZXIubXlUdXJuKTtcbiAgW2F0dGFja2luZ1BsYXllcl0gPSBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiBwbGF5ZXIubXlUdXJuKTtcbiAgaWYgKCFhdHRhY2tpbmdQbGF5ZXIuaXNIdW1hbikge1xuICAgIGNvbnN0IGF0dGFja0Nvb3JkaW5hdGUgPSBhdHRhY2tpbmdQbGF5ZXIuYXR0YWNrKGF0dGFja2VkUGxheWVyKTtcbiAgICBtYWtlQXR0YWNrKHBsYXllcnMsIGF0dGFja0Nvb3JkaW5hdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckdhbWVCb2FyZHMoXG4gIHBsYXllcnMsXG4gIGRyYWdEYXRhID0ge30sXG4gIHByZXNlcnZlZENvb3JkcyA9IFtdLFxuICBnYW1lT3ZlciA9IGZhbHNlLFxuKSB7XG4gIGNvbnN0IFtwbGF5ZXIxLCBwbGF5ZXIyXSA9IHBsYXllcnM7XG4gIGNvbnN0IHBsYXllclZzQ29tcHV0ZXIgPSAhKHBsYXllcjEuaXNIdW1hbiAmJiBwbGF5ZXIyLmlzSHVtYW4pO1xuICBjb25zdCBwbGF5ZXJQbGFjaW5nU2hpcHMgPSBwbGF5ZXJzLmZpbmQoKHBsYXllcikgPT4gIXBsYXllci5pc1JlYWR5KTtcblxuICBwbGF5ZXJzLmZvckVhY2goKHBsYXllciwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBib2FyZE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyJHtpbmRleCArIDF9LWJvYXJkYCk7XG4gICAgY29uc3QgaGl0Q29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmQuaGl0QXR0YWNrcztcbiAgICBjb25zdCBtaXNzZWRDb29yZGluYXRlcyA9IHBsYXllci5ib2FyZC5taXNzZWRBdHRhY2tzO1xuICAgIGNvbnN0IHRpbGVzID0gW107XG4gICAgcGxheWVyLmJvYXJkLnN0YXRlLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChjb2x1bW4sIGNvbHVtbkluZGV4KSA9PiB7XG4gICAgICAgIGlmIChwcmVzZXJ2ZWRDb29yZHMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0pKSkge1xuICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgIGBwJHtpbmRleCArIDF9LSR7cm93SW5kZXh9LSR7Y29sdW1uSW5kZXh9YCxcbiAgICAgICAgICApO1xuICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG5cbiAgICAgICAgICAvLyBEcm9wcGFibGUgdGlsZVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHBsYXllciA9PT0gcGxheWVyUGxhY2luZ1NoaXBzICYmXG4gICAgICAgICAgICBwbGF5ZXIuaXNIdW1hbiAmJlxuICAgICAgICAgICAgcGxheWVyLmJvYXJkLnZhbGlkU2hpcFBsYWNlbWVudChcbiAgICAgICAgICAgICAgcGxheWVyLmJvYXJkLmdldENvb3Jkc0Zyb21TdGFydGluZ0Nvb3JkKFxuICAgICAgICAgICAgICAgIFtyb3dJbmRleCwgY29sdW1uSW5kZXhdLFxuICAgICAgICAgICAgICAgIGRyYWdEYXRhLnNoaXAub3JpZW50YXRpb24sXG4gICAgICAgICAgICAgICAgZHJhZ0RhdGEuc2hpcC5sZW5ndGgsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBkcm9wcGFibGVIb3ZlckZlZWRiYWNrKHRpbGUsIGRyYWdEYXRhLCBwbGF5ZXIsIGluZGV4ICsgMSk7XG4gICAgICAgICAgICBkcm9wcGFibGVGcm9tSW5zaWRlKFxuICAgICAgICAgICAgICB0aWxlLFxuICAgICAgICAgICAgICBkcmFnRGF0YSxcbiAgICAgICAgICAgICAgcGxheWVyLFxuICAgICAgICAgICAgICBwbGF5ZXJzLFxuICAgICAgICAgICAgICByZW5kZXJHYW1lQm9hcmRzLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aWxlcy5wdXNoKHRpbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcInRpbGVcIik7XG4gICAgICAgICAgdGlsZS5pZCA9IGBwJHtpbmRleCArIDF9LSR7cm93SW5kZXh9LSR7Y29sdW1uSW5kZXh9YDtcblxuICAgICAgICAgIC8vIERyYWdnYWJsZSB0aWxlXG4gICAgICAgICAgaWYgKGNvbHVtbiAmJiBwbGF5ZXIgPT09IHBsYXllclBsYWNpbmdTaGlwcyAmJiBwbGF5ZXIuaXNIdW1hbikge1xuICAgICAgICAgICAgZHJhZ2dhYmxlRnJvbUluc2lkZSh0aWxlLCBwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERyb3BwYWJsZSB0aWxlXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZHJhZ0RhdGEpLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICFjb2x1bW4gJiZcbiAgICAgICAgICAgIHBsYXllciA9PT0gcGxheWVyUGxhY2luZ1NoaXBzICYmXG4gICAgICAgICAgICBwbGF5ZXIuaXNIdW1hbiAmJlxuICAgICAgICAgICAgcGxheWVyLmJvYXJkLnZhbGlkU2hpcFBsYWNlbWVudChcbiAgICAgICAgICAgICAgcGxheWVyLmJvYXJkLmdldENvb3Jkc0Zyb21TdGFydGluZ0Nvb3JkKFxuICAgICAgICAgICAgICAgIFtyb3dJbmRleCwgY29sdW1uSW5kZXhdLFxuICAgICAgICAgICAgICAgIGRyYWdEYXRhLnNoaXAub3JpZW50YXRpb24sXG4gICAgICAgICAgICAgICAgZHJhZ0RhdGEuc2hpcC5sZW5ndGgsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBkcm9wcGFibGVIb3ZlckZlZWRiYWNrKHRpbGUsIGRyYWdEYXRhLCBwbGF5ZXIsIGluZGV4ICsgMSk7XG5cbiAgICAgICAgICAgIGlmIChkcmFnRGF0YS5vcmlnaW4gPT09IFwiaW5zaWRlQm9hcmRcIikge1xuICAgICAgICAgICAgICBkcm9wcGFibGVGcm9tSW5zaWRlKFxuICAgICAgICAgICAgICAgIHRpbGUsXG4gICAgICAgICAgICAgICAgZHJhZ0RhdGEsXG4gICAgICAgICAgICAgICAgcGxheWVyLFxuICAgICAgICAgICAgICAgIHBsYXllcnMsXG4gICAgICAgICAgICAgICAgcmVuZGVyR2FtZUJvYXJkcyxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZHJhZ0RhdGEub3JpZ2luID09PSBcIm91dHNpZGVCb2FyZFwiKSB7XG4gICAgICAgICAgICAgIGRyb3BwYWJsZUZyb21PdXRzaWRlKFxuICAgICAgICAgICAgICAgIHRpbGUsXG4gICAgICAgICAgICAgICAgZHJhZ0RhdGEsXG4gICAgICAgICAgICAgICAgcGxheWVyLFxuICAgICAgICAgICAgICAgIHBsYXllcnMsXG4gICAgICAgICAgICAgICAgcmVuZGVyR2FtZUJvYXJkcyxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gdXBkYXRlIHNoaXAncyBvcmllbnRhdGlvblxuICAgICAgICAgIGlmIChjb2x1bW4gJiYgcGxheWVyLmlzSHVtYW4gJiYgcGxheWVyID09PSBwbGF5ZXJQbGFjaW5nU2hpcHMpIHtcbiAgICAgICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PlxuICAgICAgICAgICAgICBzd2l0Y2hTaGlwT3JpZW50YXRpb24oZSwgcGxheWVyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ29uZGl0aW9ucyBmb3IgZGlzcGxheWluZyBzaGlwc1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNvbHVtbiAmJlxuICAgICAgICAgICAgcGxheWVyLmlzSHVtYW4gJiZcbiAgICAgICAgICAgIChwbGF5ZXJWc0NvbXB1dGVyIHx8ICFwbGF5ZXIuaXNSZWFkeSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ29uZGl0aW9ucyBmb3IgYWxsb3dpbmcgYXR0YWNrIG9uIHRpbGVcbiAgICAgICAgICBjb25zdCByZWFkeSA9IHBsYXllcnMuZXZlcnkoKHApID0+IHAuaXNSZWFkeSk7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcmVhZHkgJiZcbiAgICAgICAgICAgICFwbGF5ZXIubXlUdXJuICYmXG4gICAgICAgICAgICBwbGF5ZXIuYm9hcmQuaXNBdHRhY2thYmxlKFtyb3dJbmRleCwgY29sdW1uSW5kZXhdKSAmJlxuICAgICAgICAgICAgKCFwbGF5ZXIuaXNIdW1hbiB8fCAhcGxheWVyVnNDb21wdXRlcikgJiZcbiAgICAgICAgICAgICFnYW1lT3ZlclxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IFtyb3dJbmRleCwgY29sdW1uSW5kZXhdO1xuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICBtYWtlQXR0YWNrKHBsYXllcnMsIGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGlsZXMucHVzaCh0aWxlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgYm9hcmROb2RlLnJlcGxhY2VDaGlsZHJlbiguLi50aWxlcyk7XG5cbiAgICBoaXRDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcCR7aW5kZXggKyAxfS0ke3Jvd30tJHtjb2x1bW59YCk7XG5cbiAgICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1nRWxlbWVudC5zcmMgPSBleHBsb3Npb25Tdmc7XG4gICAgICB0aWxlLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xuXG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICBpZiAocGxheWVyLmJvYXJkLmdldFNoaXBBdChjb29yZGluYXRlKS5pc1N1bmsoKSkge1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG1pc3NlZENvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwJHtpbmRleCArIDF9LSR7cm93fS0ke2NvbHVtbn1gKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcIm1pc3NlZFwiKTtcblxuICAgICAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBpbWdFbGVtZW50LnNyYyA9IHNtYWxsRG90U2c7XG4gICAgICB0aWxlLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc3RhcnRHYW1lKHBsYXllcnMpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1iYWNrZ3JvdW5kXCIpO1xuXG4gIHJlbmRlckdhbWVCb2FyZHMocGxheWVycyk7XG4gIGNvbnN0IGJhdHRsZVNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhdHRsZXNoaXAtY29udGFpbmVyXCIpO1xuICBiYXR0bGVTaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJyZW1vdmVkXCIpO1xuXG4gIGNvbnN0IFtwbGF5ZXIxLCBwbGF5ZXIyXSA9IHBsYXllcnM7XG4gIGNyZWF0ZVJhbmRvbVNoaXBQbGFjZW1lbnRCdXR0b24ocGxheWVyMSwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcyk7XG4gIGNyZWF0ZURyYWdnYWJsZVNoaXBFbGVtZW50cyhwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKTtcbiAgYXdhaXQgZmluaXNoZWRQbGFjaW5nU2hpcHMocGxheWVyMSk7XG4gIHJlbmRlckdhbWVCb2FyZHMocGxheWVycyk7XG5cbiAgaWYgKHBsYXllcjIuaXNIdW1hbikge1xuICAgIGNyZWF0ZVJhbmRvbVNoaXBQbGFjZW1lbnRCdXR0b24ocGxheWVyMiwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcyk7XG4gICAgY3JlYXRlRHJhZ2dhYmxlU2hpcEVsZW1lbnRzKHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpO1xuICAgIGF3YWl0IGZpbmlzaGVkUGxhY2luZ1NoaXBzKHBsYXllcjIpO1xuICB9IGVsc2Uge1xuICAgIHJhbmRvbVNoaXBQbGFjZW1lbnQocGxheWVyMiwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcyk7XG4gICAgcGxheWVyMi5yZWFkeVVwKCk7XG4gIH1cblxuICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpO1xufVxuIiwiaW1wb3J0IHNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5mdW5jdGlvbiBkcmFnZ2VkRnJvbUluc2lkZUJvYXJkKGUsIHBsYXllciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykge1xuICBjb25zdCBjb29yZGluYXRlID0gZS50YXJnZXQuaWRcbiAgICAuc3BsaXQoXCItXCIpXG4gICAgLnNsaWNlKC0yKVxuICAgIC5tYXAoKG51bWJlcikgPT4gTnVtYmVyKG51bWJlcikpO1xuICBjb25zdCB0aGVTaGlwID0gcGxheWVyLmJvYXJkLmdldFNoaXBBdChjb29yZGluYXRlKTtcblxuICBjb25zdCBnaG9zdFNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBnaG9zdFNoaXAuaWQgPSBcImdob3N0LXNoaXBcIjtcblxuICBpZiAodGhlU2hpcC5vcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgZ2hvc3RTaGlwLmNsYXNzTGlzdC5hZGQoXCJ2ZXJ0aWNhbFwiKTtcbiAgICBnaG9zdFNoaXAuc3R5bGUuaGVpZ2h0ID0gYCR7dGhlU2hpcC5sZW5ndGggKiAyNX1weGA7XG4gIH0gZWxzZSBpZiAodGhlU2hpcC5vcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICBnaG9zdFNoaXAuY2xhc3NMaXN0LmFkZChcImhvcml6b250YWxcIik7XG4gICAgZ2hvc3RTaGlwLnN0eWxlLndpZHRoID0gYCR7dGhlU2hpcC5sZW5ndGggKiAyNX1weGA7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoZVNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBnaG9zdFNoaXBCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnaG9zdFNoaXBCb2R5LmNsYXNzTGlzdC5hZGQoXCJnaG9zdC1zaGlwLWJvZHlcIik7XG5cbiAgICBnaG9zdFNoaXAuYXBwZW5kQ2hpbGQoZ2hvc3RTaGlwQm9keSk7XG4gIH1cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdob3N0U2hpcCk7XG4gIGUuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShnaG9zdFNoaXAsIDAsIDApO1xuXG4gIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IHBsYXllci5ib2FyZC5nZXRTaGlwQ29vcmRpbmF0ZXModGhlU2hpcCk7XG4gIGNvbnN0IHByZXNlcnZlZENvb3JkaW5hdGVzID0gc2hpcENvb3JkaW5hdGVzLm1hcCgoY29vcmQpID0+XG4gICAgSlNPTi5zdHJpbmdpZnkoY29vcmQpLFxuICApO1xuXG4gIHBsYXllci5ib2FyZC5yZW1vdmVQbGFjZWRTaGlwKHNoaXBDb29yZGluYXRlcyk7XG5cbiAgcmVuZGVyR2FtZUJvYXJkcyhcbiAgICBwbGF5ZXJzLFxuICAgIHsgb3JpZ2luOiBcImluc2lkZUJvYXJkXCIsIHNoaXA6IHRoZVNoaXAgfSxcbiAgICBwcmVzZXJ2ZWRDb29yZGluYXRlcyxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdnYWJsZUZyb21JbnNpZGUodGlsZSwgcGxheWVyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKSB7XG4gIHRpbGUuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcbiAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChlKSA9PiB7XG4gICAgZHJhZ2dlZEZyb21JbnNpZGVCb2FyZChlLCBwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpO1xuICB9KTtcblxuICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIChlKSA9PiB7XG4gICAgY29uc3QgZ2hvc3RTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnaG9zdC1zaGlwXCIpO1xuICAgIGlmIChnaG9zdFNoaXAucGFyZW50RWxlbWVudCkge1xuICAgICAgZ2hvc3RTaGlwLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZ2hvc3RTaGlwKTtcbiAgICB9XG5cbiAgICBpZiAoZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9PT0gXCJub25lXCIpIHtcbiAgICAgIHBsYXllci5ib2FyZC5yZXN0b3JlU3RhdGUoKTtcbiAgICAgIHJlbmRlckdhbWVCb2FyZHMocGxheWVycyk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZHJhZ2dlZEZyb21PdXRzaWRlQm9hcmQoZSwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykge1xuICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XG4gIGNvbnN0IHJlID0gL2xlbmd0aC0oXFxkKS87XG4gIGxldCBzaGlwTGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGUudGFyZ2V0LmNsYXNzTGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChyZS50ZXN0KGUudGFyZ2V0LmNsYXNzTGlzdFtpXSkpIHtcbiAgICAgIHNoaXBMZW5ndGggPSBOdW1iZXIoZS50YXJnZXQuY2xhc3NMaXN0W2ldLnNwbGl0KFwiLVwiKVsxXSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgY29uc3QgbmV3U2hpcCA9IHNoaXAoc2hpcExlbmd0aCk7XG5cbiAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzLCB7IG9yaWdpbjogXCJvdXRzaWRlQm9hcmRcIiwgc2hpcDogbmV3U2hpcCB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdnYWJsZUZyb21PdXRzaWRlKFxuICBzaGlwQ29udGFpbmVyRWxlbWVudCxcbiAgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIsXG4gIHBsYXllcnMsXG4gIHJlbmRlckdhbWVCb2FyZHMsXG4pIHtcbiAgc2hpcENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZSkgPT4ge1xuICAgIGRyYWdnZWRGcm9tT3V0c2lkZUJvYXJkKGUsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpO1xuICB9KTtcblxuICBzaGlwQ29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ICE9PSBcIm5vbmVcIikge1xuICAgICAgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIucmVtb3ZlQ2hpbGQoZS50YXJnZXQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRyb3BwZWRGcm9tSW5zaWRlQm9hcmQoXG4gIGRyYWdEYXRhLFxuICBwbGF5ZXIsXG4gIGUsXG4gIHBsYXllcnMsXG4gIHJlbmRlckdhbWVCb2FyZHMsXG4pIHtcbiAgY29uc3QgdGhlU2hpcCA9IGRyYWdEYXRhLnNoaXA7XG5cbiAgY29uc3Qgc3RhcnRpbmdDb29yZGluYXRlID0gZS50YXJnZXQuaWRcbiAgICAuc3BsaXQoXCItXCIpXG4gICAgLnNsaWNlKC0yKVxuICAgIC5tYXAoKG51bWJlcikgPT4gTnVtYmVyKG51bWJlcikpO1xuICBwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKHRoZVNoaXAsIHN0YXJ0aW5nQ29vcmRpbmF0ZSk7XG5cbiAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyb3BwYWJsZUZyb21JbnNpZGUoXG4gIHRpbGUsXG4gIGRyYWdEYXRhLFxuICBwbGF5ZXIsXG4gIHBsYXllcnMsXG4gIHJlbmRlckdhbWVCb2FyZHMsXG4pIHtcbiAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xuICB9KTtcblxuICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRyb3BwZWRGcm9tSW5zaWRlQm9hcmQoZHJhZ0RhdGEsIHBsYXllciwgZSwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkcm9wcGVkRnJvbU91dHNpZGVCb2FyZChcbiAgZHJhZ0RhdGEsXG4gIHBsYXllcixcbiAgZSxcbiAgcGxheWVycyxcbiAgcmVuZGVyR2FtZUJvYXJkcyxcbikge1xuICBjb25zdCBzdGFydGluZ0Nvb3JkaW5hdGUgPSBlLnRhcmdldC5pZFxuICAgIC5zcGxpdChcIi1cIilcbiAgICAuc2xpY2UoLTIpXG4gICAgLm1hcCgobnVtYmVyKSA9PiBOdW1iZXIobnVtYmVyKSk7XG4gIHBsYXllci5ib2FyZC5wbGFjZVNoaXAoZHJhZ0RhdGEuc2hpcCwgc3RhcnRpbmdDb29yZGluYXRlKTtcblxuICBpZiAocGxheWVyLmJvYXJkLmFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICBjb25zdCByZWFkeVVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWFkeS11cFwiKTtcbiAgICByZWFkeVVwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJyZW1vdmVkXCIpO1xuICB9XG5cbiAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyb3BwYWJsZUZyb21PdXRzaWRlKFxuICB0aWxlLFxuICBkcmFnRGF0YSxcbiAgcGxheWVyLFxuICBwbGF5ZXJzLFxuICByZW5kZXJHYW1lQm9hcmRzLFxuKSB7XG4gIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcbiAgfSk7XG5cbiAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkcm9wcGVkRnJvbU91dHNpZGVCb2FyZChkcmFnRGF0YSwgcGxheWVyLCBlLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKTtcbiAgfSk7XG59XG5cbmNvbnN0IHByZXZpb3VzQ29vcmRpbmF0ZXNRdWV1ZSA9IFtdO1xuZXhwb3J0IGZ1bmN0aW9uIGRyb3BwYWJsZUhvdmVyRmVlZGJhY2sodGlsZSwgZHJhZ0RhdGEsIHBsYXllciwgcGxheWVySW5kZXgpIHtcbiAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIChlKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRpbmdDb29yZGluYXRlID0gZS50YXJnZXQuaWRcbiAgICAgIC5zcGxpdChcIi1cIilcbiAgICAgIC5zbGljZSgtMilcbiAgICAgIC5tYXAoKG51bWJlcikgPT4gTnVtYmVyKG51bWJlcikpO1xuICAgIGNvbnN0IHRoZVNoaXAgPSBkcmFnRGF0YS5zaGlwO1xuICAgIGNvbnN0IGFsbENvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkLmdldENvb3Jkc0Zyb21TdGFydGluZ0Nvb3JkKFxuICAgICAgc3RhcnRpbmdDb29yZGluYXRlLFxuICAgICAgdGhlU2hpcC5vcmllbnRhdGlvbixcbiAgICAgIHRoZVNoaXAubGVuZ3RoLFxuICAgICk7XG5cbiAgICBhbGxDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgIGNvbnN0IGhvdmVyZWRUaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIGBwJHtwbGF5ZXJJbmRleH0tJHtyb3d9LSR7Y29sdW1ufWAsXG4gICAgICApO1xuICAgICAgaG92ZXJlZFRpbGUuY2xhc3NMaXN0LmFkZChcInZhbGlkLXBsYWNlbWVudFwiKTtcbiAgICB9KTtcblxuICAgIHdoaWxlIChwcmV2aW91c0Nvb3JkaW5hdGVzUXVldWUubGVuZ3RoID49IDIpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzQ29vcmRpbmF0ZXMgPSBwcmV2aW91c0Nvb3JkaW5hdGVzUXVldWUuc2hpZnQoKTtcbiAgICAgIHByZXZpb3VzQ29vcmRpbmF0ZXMuZm9yRWFjaCgocHJldkNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IEpTT04ucGFyc2UocHJldkNvb3JkaW5hdGUpO1xuICAgICAgICBjb25zdCBob3ZlcmVkVGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgIGBwJHtwbGF5ZXJJbmRleH0tJHtyb3d9LSR7Y29sdW1ufWAsXG4gICAgICAgICk7XG5cbiAgICAgICAgaG92ZXJlZFRpbGUuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkLXBsYWNlbWVudFwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBzdHJpbmdpZmllZENvb3JkcyA9IGFsbENvb3JkaW5hdGVzLm1hcCgoY29vcmRpbmF0ZSkgPT5cbiAgICAgIEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGUpLFxuICAgICk7XG4gICAgcHJldmlvdXNDb29yZGluYXRlc1F1ZXVlLnB1c2goc3RyaW5naWZpZWRDb29yZHMpO1xuICB9KTtcblxuICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgKCkgPT4ge1xuICAgIGxldCBwcmV2aW91c0Nvb3JkaW5hdGVzO1xuICAgIGxldCBjdXJyZW50Q29vcmRpbmF0ZXM7XG4gICAgaWYgKHByZXZpb3VzQ29vcmRpbmF0ZXNRdWV1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBwcmV2aW91c0Nvb3JkaW5hdGVzID0gcHJldmlvdXNDb29yZGluYXRlc1F1ZXVlLnNoaWZ0KCk7XG4gICAgICBbY3VycmVudENvb3JkaW5hdGVzXSA9IHByZXZpb3VzQ29vcmRpbmF0ZXNRdWV1ZTtcbiAgICB9IGVsc2UgaWYgKHByZXZpb3VzQ29vcmRpbmF0ZXNRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBbcHJldmlvdXNDb29yZGluYXRlc10gPSBwcmV2aW91c0Nvb3JkaW5hdGVzUXVldWU7XG4gICAgfVxuXG4gICAgaWYgKCEocHJldmlvdXNDb29yZGluYXRlcyAmJiBjdXJyZW50Q29vcmRpbmF0ZXMpKSB7XG4gICAgICBwcmV2aW91c0Nvb3JkaW5hdGVzLmZvckVhY2goKHByZXZDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBKU09OLnBhcnNlKHByZXZDb29yZGluYXRlKTtcbiAgICAgICAgY29uc3QgaG92ZXJlZFRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICBgcCR7cGxheWVySW5kZXh9LSR7cm93fS0ke2NvbHVtbn1gLFxuICAgICAgICApO1xuICAgICAgICBob3ZlcmVkVGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWQtcGxhY2VtZW50XCIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZXZpb3VzQ29vcmRpbmF0ZXMuZm9yRWFjaCgocHJldkNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IEpTT04ucGFyc2UocHJldkNvb3JkaW5hdGUpO1xuICAgICAgICBjb25zdCBob3ZlcmVkVGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgIGBwJHtwbGF5ZXJJbmRleH0tJHtyb3d9LSR7Y29sdW1ufWAsXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFjdXJyZW50Q29vcmRpbmF0ZXMuaW5jbHVkZXMocHJldkNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgaG92ZXJlZFRpbGUuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkLXBsYWNlbWVudFwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVCb2FyZCgpIHtcbiAgY29uc3Qgc3RhdGUgPSBbXTtcbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW107XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3cgKz0gMSkge1xuICAgIHN0YXRlLnB1c2goW10pO1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wgKz0gMSkge1xuICAgICAgc3RhdGVbcm93XS5wdXNoKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCByZXN0b3JlU3RhdGUgPSAoKSA9PiB7XG4gICAgc2hpcENvb3JkaW5hdGVzLmZvckVhY2goKHNoaXBPYmplY3QpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcE9iamVjdC5jb29yZGluYXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gc2hpcE9iamVjdC5jb29yZGluYXRlc1tpXTtcbiAgICAgICAgaWYgKHN0YXRlW3Jvd11bY29sdW1uXSAhPT0gc2hpcE9iamVjdC5zaGlwKSB7XG4gICAgICAgICAgc3RhdGVbcm93XVtjb2x1bW5dID0gc2hpcE9iamVjdC5zaGlwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdmFsaWRTaGlwUGxhY2VtZW50ID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZGluYXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGNvb3JkaW5hdGVzW2ldO1xuICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGU7XG4gICAgICBpZiAoXG4gICAgICAgIHJvdyA8IDAgfHxcbiAgICAgICAgcm93ID4gOSB8fFxuICAgICAgICBjb2x1bW4gPCAwIHx8XG4gICAgICAgIGNvbHVtbiA+IDkgfHxcbiAgICAgICAgc3RhdGVbcm93XVtjb2x1bW5dXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBnZXRDb29yZHNGcm9tU3RhcnRpbmdDb29yZCA9IChcbiAgICBmaXJzdENvb3JkaW5hdGUsXG4gICAgb3JpZW50YXRpb24sXG4gICAgc2hpcExlbmd0aCxcbiAgKSA9PiB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBjb29yZGluYXRlcy5wdXNoKFtmaXJzdENvb3JkaW5hdGVbMF0sIGZpcnN0Q29vcmRpbmF0ZVsxXSArIGldKTtcbiAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBjb29yZGluYXRlcy5wdXNoKFtmaXJzdENvb3JkaW5hdGVbMF0gKyBpLCBmaXJzdENvb3JkaW5hdGVbMV1dKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIGZpcnN0Q29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q29vcmRzRnJvbVN0YXJ0aW5nQ29vcmQoXG4gICAgICBmaXJzdENvb3JkaW5hdGUsXG4gICAgICBzaGlwLm9yaWVudGF0aW9uLFxuICAgICAgc2hpcC5sZW5ndGgsXG4gICAgKTtcblxuICAgIGlmICh2YWxpZFNoaXBQbGFjZW1lbnQoY29vcmRpbmF0ZXMpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHNoaXBDb29yZGluYXRlcy5maW5kSW5kZXgoXG4gICAgICAgIChzaGlwT2JqZWN0KSA9PiBzaGlwT2JqZWN0LnNoaXAgPT09IHNoaXAsXG4gICAgICApO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgc2hpcENvb3JkaW5hdGVzW2luZGV4XS5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goeyBzaGlwLCBjb29yZGluYXRlcyB9KTtcbiAgICAgIH1cblxuICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgICAgc3RhdGVbcm93XVtjb2x1bW5dID0gc2hpcDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1BsYWNlZCA9ICgpID0+IHtcbiAgICBjb25zdCBwbGFjZWRTaGlwcyA9IFtdO1xuICAgIHN0YXRlLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICBpZiAoY29sdW1uICYmICFwbGFjZWRTaGlwcy5pbmNsdWRlcyhjb2x1bW4pKSB7XG4gICAgICAgICAgcGxhY2VkU2hpcHMucHVzaChjb2x1bW4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwbGFjZWRTaGlwcy5sZW5ndGggPT09IDU7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUGxhY2VkU2hpcHMgPSAoKSA9PiB7XG4gICAgc3RhdGUuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGNvbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgc3RhdGVbcm93SW5kZXhdW2NvbEluZGV4XSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc2hpcENvb3JkaW5hdGVzLnNwbGljZSgwLCBzaGlwQ29vcmRpbmF0ZXMubGVuZ3RoKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQbGFjZWRTaGlwID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGU7XG4gICAgICBzdGF0ZVtyb3ddW2NvbHVtbl0gPSBmYWxzZTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRQbGFjZWRTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwc0FycmF5ID0gW107XG4gICAgc2hpcENvb3JkaW5hdGVzLmZvckVhY2goKHNoaXBPYmplY3QpID0+IHtcbiAgICAgIHNoaXBzQXJyYXkucHVzaChzaGlwT2JqZWN0LnNoaXApO1xuICAgIH0pO1xuICAgIHJldHVybiBzaGlwc0FycmF5O1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBBdCA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGU7XG4gICAgY29uc3QgdGhlU2hpcCA9IHN0YXRlW3Jvd11bY29sdW1uXTtcbiAgICByZXR1cm4gdGhlU2hpcDtcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwSGVhZENvb3JkaW5hdGUgPSAoc2hpcCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gc2hpcENvb3JkaW5hdGVzLmZpbmRJbmRleChcbiAgICAgIChzaGlwT2JqZWN0KSA9PiBzaGlwT2JqZWN0LnNoaXAgPT09IHNoaXAsXG4gICAgKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcmV0dXJuIHNoaXBDb29yZGluYXRlc1tpbmRleF0uY29vcmRpbmF0ZXNbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBDb29yZGluYXRlcyA9IChzaGlwKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBzaGlwQ29vcmRpbmF0ZXMuZmluZEluZGV4KFxuICAgICAgKHNoaXBPYmplY3QpID0+IHNoaXBPYmplY3Quc2hpcCA9PT0gc2hpcCxcbiAgICApO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gc2hpcENvb3JkaW5hdGVzW2luZGV4XS5jb29yZGluYXRlcztcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaGl0QXR0YWNrcyA9IFtdO1xuICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgIGNvbnN0IGJvYXJkVGlsZSA9IHN0YXRlW3Jvd11bY29sdW1uXTtcbiAgICBpZiAoYm9hcmRUaWxlKSB7XG4gICAgICBib2FyZFRpbGUuaGl0KGNvb3JkaW5hdGUpO1xuICAgICAgaGl0QXR0YWNrcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG1pc3NlZEF0dGFja3MucHVzaChjb29yZGluYXRlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgdmFsaWRBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgIHJldHVybiByb3cgPj0gMCAmJiByb3cgPD0gOSAmJiBjb2x1bW4gPj0gMCAmJiBjb2x1bW4gPD0gOTtcbiAgfTtcblxuICBjb25zdCBpc0F0dGFja2FibGUgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IGFsbEF0dGFja3MgPSBoaXRBdHRhY2tzXG4gICAgICAuY29uY2F0KG1pc3NlZEF0dGFja3MpXG4gICAgICAubWFwKChhdHRhY2spID0+IEpTT04uc3RyaW5naWZ5KGF0dGFjaykpO1xuICAgIHJldHVybiAoXG4gICAgICAhYWxsQXR0YWNrcy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShjb29yZGluYXRlKSkgJiZcbiAgICAgIHZhbGlkQXR0YWNrKGNvb3JkaW5hdGUpXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gZ2V0UGxhY2VkU2hpcHMoKTtcbiAgICByZXR1cm4gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVzdG9yZVN0YXRlLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFsbFN1bmssXG4gICAgaXNBdHRhY2thYmxlLFxuICAgIGFsbFNoaXBzUGxhY2VkLFxuICAgIHJlbW92ZVBsYWNlZFNoaXBzLFxuICAgIHJlbW92ZVBsYWNlZFNoaXAsXG4gICAgZ2V0U2hpcEF0LFxuICAgIGdldFNoaXBIZWFkQ29vcmRpbmF0ZSxcbiAgICBnZXRTaGlwQ29vcmRpbmF0ZXMsXG4gICAgZ2V0Q29vcmRzRnJvbVN0YXJ0aW5nQ29vcmQsXG4gICAgdmFsaWRTaGlwUGxhY2VtZW50LFxuICAgIHN0YXRlLFxuICAgIGhpdEF0dGFja3MsXG4gICAgbWlzc2VkQXR0YWNrcyxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGh1bWFuLCBjb21wdXRlciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGRpc3BsYXlNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4vYmF0dGxlc2hpcFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgcGxheUFnYWluQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5LWFnYWluXCIpO1xucGxheUFnYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmF0dGxlc2hpcC1jb250YWluZXJcIikuY2xhc3NMaXN0LmFkZChcInJlbW92ZWRcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZW92ZXItbW9kYWxcIikuY2xhc3NMaXN0LmFkZChcInJlbW92ZWRcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJnYW1lLWJhY2tncm91bmRcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJhY2tncm91bmRcIik7XG5cbiAgY29uc3QgcGxheWVyMUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIxLWJvYXJkXCIpO1xuICB3aGlsZSAocGxheWVyMUJvYXJkLmZpcnN0Q2hpbGQpIHtcbiAgICBwbGF5ZXIxQm9hcmQucmVtb3ZlQ2hpbGQocGxheWVyMUJvYXJkLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgY29uc3QgcGxheWVyMkJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIyLWJvYXJkXCIpO1xuICB3aGlsZSAocGxheWVyMkJvYXJkLmZpcnN0Q2hpbGQpIHtcbiAgICBwbGF5ZXIyQm9hcmQucmVtb3ZlQ2hpbGQocGxheWVyMkJvYXJkLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgY29uc3QgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmRyYWdnYWJsZS1zaGlwcy1jb250YWluZXJcIixcbiAgKTtcbiAgd2hpbGUgKGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lci5yZW1vdmVDaGlsZChkcmFnZ2FibGVTaGlwc0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxuXG4gIHN0YXJ0R2FtZShhd2FpdCBkaXNwbGF5TWVudShodW1hbiwgY29tcHV0ZXIpKTtcbn0pO1xuXG5zdGFydEdhbWUoYXdhaXQgZGlzcGxheU1lbnUoaHVtYW4sIGNvbXB1dGVyKSk7XG4iLCJmdW5jdGlvbiByZW1vdmVNZW51KGJvZHkpIHtcbiAgYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtbWVudS1jb250YWluZXJcIikpO1xuICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LWJhY2tncm91bmRcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlNZW51KGh1bWFuLCBjb21wdXRlcikge1xuICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1tZW51LWNvbnRhaW5lclwiKSkge1xuICAgIGNvbnN0IGdhbWVNZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYW1lTWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1tZW51LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBnYW1lVGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbWVUaXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ2FtZS10aXRsZS1jb250YWluZXJcIik7XG4gICAgZ2FtZVRpdGxlQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJCQVRUTEVTSElQXCI7XG5cbiAgICBjb25zdCBnYW1lTW9kZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHZwTW9kZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHZwTW9kZUJ0bi50ZXh0Q29udGVudCA9IFwiUGxheWVyIHZzLiBQbGF5ZXJcIjtcbiAgICBjb25zdCBwdmNNb2RlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwdmNNb2RlQnRuLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgdnMuIENvbXB1dGVyXCI7XG4gICAgZ2FtZU1vZGVDb250YWluZXIuYXBwZW5kQ2hpbGQocHZwTW9kZUJ0bik7XG4gICAgZ2FtZU1vZGVDb250YWluZXIuYXBwZW5kQ2hpbGQocHZjTW9kZUJ0bik7XG5cbiAgICBnYW1lTW9kZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1tb2RlLWNvbnRhaW5lclwiKTtcblxuICAgIGdhbWVNZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVUaXRsZUNvbnRhaW5lcik7XG4gICAgZ2FtZU1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZU1vZGVDb250YWluZXIpO1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcIm1lbnUtYmFja2dyb3VuZFwiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGdhbWVNZW51Q29udGFpbmVyKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcHZwTW9kZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZW1vdmVNZW51KGJvZHkpO1xuICAgICAgICByZXNvbHZlKFtodW1hbih0cnVlKSwgaHVtYW4oKV0pO1xuICAgICAgfSk7XG5cbiAgICAgIHB2Y01vZGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlTWVudShib2R5KTtcbiAgICAgICAgcmVzb2x2ZShbaHVtYW4odHJ1ZSksIGNvbXB1dGVyKCldKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgZHJhZ2dhYmxlRnJvbU91dHNpZGUgfSBmcm9tIFwiLi9kcmFnQW5kRHJvcFwiO1xuaW1wb3J0IHNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHJhbmRvbVN2ZyBmcm9tIFwiLi4vaWNvbnMvcmFuZG9tLXN2Zy5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluaXNoZWRQbGFjaW5nU2hpcHMocGxheWVyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IHJlYWR5VXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlYWR5LXVwXCIpO1xuICAgIHJlYWR5VXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHJlYWR5VXBCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlbW92ZWRcIik7XG4gICAgICBwbGF5ZXIucmVhZHlVcCgpO1xuICAgICAgY29uc3QgcmFuZG9tU2hpcFBsYWNlbWVudFN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLnJhbmRvbS1zaGlwLXBsYWNlbWVudFwiLFxuICAgICAgKTtcblxuICAgICAgY29uc3QgYmF0dGxlU2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLmJhdHRsZXNoaXAtY29udGFpbmVyXCIsXG4gICAgICApO1xuICAgICAgYmF0dGxlU2hpcENvbnRhaW5lci5yZW1vdmVDaGlsZChyYW5kb21TaGlwUGxhY2VtZW50U3ZnKTtcblxuICAgICAgY29uc3QgcmVhZHlVcEJ1dHRvbkNsb25lID0gcmVhZHlVcEJ1dHRvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICByZWFkeVVwQnV0dG9uLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHJlYWR5VXBCdXR0b25DbG9uZSwgcmVhZHlVcEJ1dHRvbik7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tU2hpcFBsYWNlbWVudChwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpIHtcbiAgcGxheWVyLmJvYXJkLnJlbW92ZVBsYWNlZFNoaXBzKCk7XG4gIGNvbnN0IHNoaXBPcmllbnRhdGlvbnMgPSBbXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl07XG5cbiAgWzUsIDQsIDMsIDMsIDJdLmZvckVhY2goKGxlbmd0aCkgPT4ge1xuICAgIGNvbnN0IHBsYWNlbWVudFBvb2wgPSBbXTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wgKz0gMSkge1xuICAgICAgICBwbGFjZW1lbnRQb29sLnB1c2goW3JvdywgY29sXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9tT3JpZW50YXRpb24gPSBzaGlwT3JpZW50YXRpb25zW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldO1xuICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBsYWNlbWVudFBvb2wubGVuZ3RoKTtcbiAgICB3aGlsZSAoXG4gICAgICAhcGxheWVyLmJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgc2hpcChsZW5ndGgsIHJhbmRvbU9yaWVudGF0aW9uKSxcbiAgICAgICAgcGxhY2VtZW50UG9vbFtyYW5kb21JbmRleF0sXG4gICAgICApXG4gICAgKSB7XG4gICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBsYWNlbWVudFBvb2wubGVuZ3RoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChwbGF5ZXIuaXNIdW1hbiAmJiBwbGF5ZXIuYm9hcmQuYWxsU2hpcHNQbGFjZWQoKSkge1xuICAgIGNvbnN0IHJlYWR5VXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlYWR5LXVwXCIpO1xuICAgIHJlYWR5VXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInJlbW92ZWRcIik7XG4gIH1cblxuICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbihcbiAgcGxheWVyLFxuICBwbGF5ZXJzLFxuICByZW5kZXJHYW1lQm9hcmRzLFxuKSB7XG4gIGNvbnN0IHJhbmRvbVNoaXBQbGFjZW1lbnRTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICByYW5kb21TaGlwUGxhY2VtZW50U3ZnLnNyYyA9IHJhbmRvbVN2ZztcbiAgcmFuZG9tU2hpcFBsYWNlbWVudFN2Zy5jbGFzc0xpc3QuYWRkKFwicmFuZG9tLXNoaXAtcGxhY2VtZW50XCIpO1xuXG4gIGNvbnN0IGJhdHRsZVNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhdHRsZXNoaXAtY29udGFpbmVyXCIpO1xuICBiYXR0bGVTaGlwQ29udGFpbmVyLnByZXBlbmQocmFuZG9tU2hpcFBsYWNlbWVudFN2Zyk7XG5cbiAgcmFuZG9tU2hpcFBsYWNlbWVudFN2Zy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICByYW5kb21TaGlwUGxhY2VtZW50KHBsYXllciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcyksXG4gICk7XG4gIHJhbmRvbVNoaXBQbGFjZW1lbnRTdmcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5kcmFnZ2FibGUtc2hpcHMtY29udGFpbmVyXCIsXG4gICAgKTtcbiAgICB3aGlsZSAoZHJhZ2dhYmxlU2hpcHNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIucmVtb3ZlQ2hpbGQoZHJhZ2dhYmxlU2hpcHNDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURyYWdnYWJsZVNoaXBFbGVtZW50cyhwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKSB7XG4gIGNvbnN0IGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5kcmFnZ2FibGUtc2hpcHMtY29udGFpbmVyXCIsXG4gICk7XG4gIFs1LCA0LCAzLCAzLCAyXS5mb3JFYWNoKChsZW5ndGgpID0+IHtcbiAgICBjb25zdCBzaGlwQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2hpcENvbnRhaW5lckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNoaXAtY29udGFpbmVyXCIsIGBsZW5ndGgtJHtsZW5ndGh9YCk7XG4gICAgc2hpcENvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcblxuICAgIGRyYWdnYWJsZUZyb21PdXRzaWRlKFxuICAgICAgc2hpcENvbnRhaW5lckVsZW1lbnQsXG4gICAgICBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lcixcbiAgICAgIHBsYXllcnMsXG4gICAgICByZW5kZXJHYW1lQm9hcmRzLFxuICAgICk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICBjb25zdCBzaGlwQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzaGlwQm9keS5jbGFzc0xpc3QuYWRkKFwic2hpcC1ib2R5XCIpO1xuICAgICAgc2hpcENvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoc2hpcEJvZHkpO1xuICAgIH1cblxuICAgIGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBDb250YWluZXJFbGVtZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzd2l0Y2hTaGlwT3JpZW50YXRpb24oZSwgcGxheWVyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKSB7XG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBlLnRhcmdldC5pZFxuICAgIC5zcGxpdChcIi1cIilcbiAgICAuc2xpY2UoLTIpXG4gICAgLm1hcCgobnVtYmVyKSA9PiBOdW1iZXIobnVtYmVyKSk7XG4gIGNvbnN0IHRoZVNoaXAgPSBwbGF5ZXIuYm9hcmQuZ2V0U2hpcEF0KGNvb3JkaW5hdGUpO1xuICBjb25zdCBzaGlwSGVhZENvb3JkaW5hdGUgPSBwbGF5ZXIuYm9hcmQuZ2V0U2hpcEhlYWRDb29yZGluYXRlKHRoZVNoaXApO1xuICBjb25zdCBzd2l0Y2hlZE9yaWVudGF0aW9uID1cbiAgICB0aGVTaGlwLm9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWxcIjtcblxuICBjb25zdCBzd2l0Y2hlZFNoaXBDb29yZGluYXRlcyA9IHBsYXllci5ib2FyZFxuICAgIC5nZXRDb29yZHNGcm9tU3RhcnRpbmdDb29yZChcbiAgICAgIHNoaXBIZWFkQ29vcmRpbmF0ZSxcbiAgICAgIHN3aXRjaGVkT3JpZW50YXRpb24sXG4gICAgICB0aGVTaGlwLmxlbmd0aCxcbiAgICApXG4gICAgLnNsaWNlKDEpO1xuICBpZiAocGxheWVyLmJvYXJkLnZhbGlkU2hpcFBsYWNlbWVudChzd2l0Y2hlZFNoaXBDb29yZGluYXRlcykpIHtcbiAgICB0aGVTaGlwLm9yaWVudGF0aW9uID0gc3dpdGNoZWRPcmllbnRhdGlvbjtcbiAgICBwbGF5ZXIuYm9hcmQucmVtb3ZlUGxhY2VkU2hpcChwbGF5ZXIuYm9hcmQuZ2V0U2hpcENvb3JkaW5hdGVzKHRoZVNoaXApKTtcbiAgICBwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKHRoZVNoaXAsIHNoaXBIZWFkQ29vcmRpbmF0ZSk7XG5cbiAgICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcblxuZnVuY3Rpb24gcGxheWVyKCkge1xuICBjb25zdCBib2FyZCA9IGdhbWVCb2FyZCgpO1xuXG4gIGNvbnN0IGlzUmVhZHkgPSBmYWxzZTtcbiAgY29uc3QgcmVhZHlVcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHN3aXRjaFR1cm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5teVR1cm4gPSAhdGhpcy5teVR1cm47XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVhZHlVcCwgc3dpdGNoVHVybiwgYm9hcmQsIGlzUmVhZHkgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh1bWFuKG15VHVybiA9IGZhbHNlKSB7XG4gIGNvbnN0IG5hbWUgPSBteVR1cm4gPyBcIlBsYXllciAxXCIgOiBcIlBsYXllciAyXCI7XG4gIGNvbnN0IGlzSHVtYW4gPSB0cnVlO1xuXG4gIHJldHVybiB7IC4uLnBsYXllcigpLCBpc0h1bWFuLCBteVR1cm4sIG5hbWUgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVyKG15VHVybiA9IGZhbHNlKSB7XG4gIGNvbnN0IG5hbWUgPSBcIlBsYXllciAyXCI7XG4gIGNvbnN0IGlzSHVtYW4gPSBmYWxzZTtcblxuICBsZXQgaW5pdGlhbEhpdCA9IG51bGw7XG4gIGxldCBwcmV2aW91c0F0dGFja0hpdCA9IGZhbHNlO1xuICBsZXQgaGl0SGlzdG9yeSA9IFtdO1xuICBsZXQgYXR0YWNrU3RhY2sgPSBbXTtcbiAgY29uc3QgYXR0YWNrID0gZnVuY3Rpb24gKG9wcG9uZW50KSB7XG4gICAgaWYgKGluaXRpYWxIaXQpIHtcbiAgICAgIGNvbnN0IGF0dGFja2VkU2hpcCA9IG9wcG9uZW50LmJvYXJkLmdldFNoaXBBdChpbml0aWFsSGl0KTtcbiAgICAgIGlmIChhdHRhY2tlZFNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgY29uc3Qgc3Vua1NoaXBDb29yZGluYXRlcyA9IGF0dGFja2VkU2hpcC5oaXRDb29yZGluYXRlcy5tYXAoXG4gICAgICAgICAgKGhpdENvb3JkaW5hdGUpID0+IEpTT04uc3RyaW5naWZ5KGhpdENvb3JkaW5hdGUpLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCByZW1haW5pbmdDb29yZGluYXRlcyA9IFtdO1xuICAgICAgICBoaXRIaXN0b3J5LmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICBpZiAoIXN1bmtTaGlwQ29vcmRpbmF0ZXMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZSkpKSB7XG4gICAgICAgICAgICByZW1haW5pbmdDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGhpdEhpc3RvcnkgPSByZW1haW5pbmdDb29yZGluYXRlcztcbiAgICAgICAgYXR0YWNrU3RhY2sgPSBbXTtcblxuICAgICAgICBpZiAoaGl0SGlzdG9yeS5sZW5ndGggPj0gMSkge1xuICAgICAgICAgIGluaXRpYWxIaXQgPSBoaXRIaXN0b3J5LnBvcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGluaXRpYWxIaXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGluaXRpYWxIaXQgJiYgYXR0YWNrU3RhY2subGVuZ3RoID09PSAwICYmIGhpdEhpc3RvcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBwb3NzaWJsZUF0dGFja3MgPSBbXTtcbiAgICAgIHBvc3NpYmxlQXR0YWNrcy5wdXNoKFtpbml0aWFsSGl0WzBdLCBpbml0aWFsSGl0WzFdICsgMV0pO1xuICAgICAgcG9zc2libGVBdHRhY2tzLnB1c2goW2luaXRpYWxIaXRbMF0sIGluaXRpYWxIaXRbMV0gLSAxXSk7XG4gICAgICBwb3NzaWJsZUF0dGFja3MucHVzaChbaW5pdGlhbEhpdFswXSArIDEsIGluaXRpYWxIaXRbMV1dKTtcbiAgICAgIHBvc3NpYmxlQXR0YWNrcy5wdXNoKFtpbml0aWFsSGl0WzBdIC0gMSwgaW5pdGlhbEhpdFsxXV0pO1xuICAgICAgcG9zc2libGVBdHRhY2tzLmZvckVhY2goKHBvc3NpYmxlQXR0YWNrKSA9PiB7XG4gICAgICAgIGlmIChvcHBvbmVudC5ib2FyZC5pc0F0dGFja2FibGUocG9zc2libGVBdHRhY2spKSB7XG4gICAgICAgICAgYXR0YWNrU3RhY2sucHVzaChwb3NzaWJsZUF0dGFjayk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaW5pdGlhbEhpdCAmJiBoaXRIaXN0b3J5Lmxlbmd0aCA+PSAxICYmIHByZXZpb3VzQXR0YWNrSGl0KSB7XG4gICAgICBjb25zdCBsYXN0SGl0ID0gaGl0SGlzdG9yeVtoaXRIaXN0b3J5Lmxlbmd0aCAtIDFdO1xuICAgICAgY29uc3QgeDEgPSBpbml0aWFsSGl0WzFdO1xuICAgICAgY29uc3QgeTEgPSBpbml0aWFsSGl0WzBdO1xuICAgICAgY29uc3QgeDIgPSBsYXN0SGl0WzFdO1xuICAgICAgY29uc3QgeTIgPSBsYXN0SGl0WzBdO1xuXG4gICAgICBjb25zdCB4RGlmZiA9IHgxIC0geDI7XG4gICAgICBjb25zdCB5RGlmZiA9IHkxIC0geTI7XG5cbiAgICAgIGlmICh4RGlmZiA8IDApIHtcbiAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgY29uc3QgcmlnaHRPbmUgPSBbbGFzdEhpdFswXSwgbGFzdEhpdFsxXSArIDFdO1xuICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmQuaXNBdHRhY2thYmxlKHJpZ2h0T25lKSkge1xuICAgICAgICAgIGF0dGFja1N0YWNrLnB1c2gocmlnaHRPbmUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHhEaWZmID4gMCkge1xuICAgICAgICAvLyBsZWZ0XG4gICAgICAgIGNvbnN0IGxlZnRPbmUgPSBbbGFzdEhpdFswXSwgbGFzdEhpdFsxXSAtIDFdO1xuICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmQuaXNBdHRhY2thYmxlKGxlZnRPbmUpKSB7XG4gICAgICAgICAgYXR0YWNrU3RhY2sucHVzaChsZWZ0T25lKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh5RGlmZiA8IDApIHtcbiAgICAgICAgLy8gdXBcbiAgICAgICAgY29uc3QgdXBPbmUgPSBbbGFzdEhpdFswXSArIDEsIGxhc3RIaXRbMV1dO1xuICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmQuaXNBdHRhY2thYmxlKHVwT25lKSkge1xuICAgICAgICAgIGF0dGFja1N0YWNrLnB1c2godXBPbmUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHlEaWZmID4gMCkge1xuICAgICAgICAvLyBkb3duXG4gICAgICAgIGNvbnN0IGRvd25PbmUgPSBbbGFzdEhpdFswXSAtIDEsIGxhc3RIaXRbMV1dO1xuICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmQuaXNBdHRhY2thYmxlKGRvd25PbmUpKSB7XG4gICAgICAgICAgYXR0YWNrU3RhY2sucHVzaChkb3duT25lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhdHRhY2tTdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gYXR0YWNrU3RhY2sucG9wKCk7XG4gICAgfVxuICAgIGlmIChhdHRhY2tTdGFjay5sZW5ndGggPD0gMCkge1xuICAgICAgY29uc3QgYXR0YWNrUG9vbCA9IFtdO1xuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdyArPSAxKSB7XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wgKz0gMSkge1xuICAgICAgICAgIGlmIChvcHBvbmVudC5ib2FyZC5pc0F0dGFja2FibGUoW3JvdywgY29sXSkpIHtcbiAgICAgICAgICAgIGF0dGFja1Bvb2wucHVzaChbcm93LCBjb2xdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoYXR0YWNrUG9vbC5sZW5ndGggLSAxKSk7XG4gICAgICBjb25zdCByYW5kb21BdHRhY2sgPSBhdHRhY2tQb29sW3JhbmRvbUluZGV4XTtcbiAgICAgIHJldHVybiByYW5kb21BdHRhY2s7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBsb2dBdHRhY2sgPSAoaXNIaXQsIGNvb3JkaW5hdGUpID0+IHtcbiAgICBpZiAoaXNIaXQgJiYgIWluaXRpYWxIaXQpIHtcbiAgICAgIGluaXRpYWxIaXQgPSBjb29yZGluYXRlO1xuICAgICAgcHJldmlvdXNBdHRhY2tIaXQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoaXNIaXQpIHtcbiAgICAgIGhpdEhpc3RvcnkucHVzaChjb29yZGluYXRlKTtcbiAgICAgIHByZXZpb3VzQXR0YWNrSGl0ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJldmlvdXNBdHRhY2tIaXQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgLi4ucGxheWVyKCksIGF0dGFjaywgbG9nQXR0YWNrLCBpc0h1bWFuLCBteVR1cm4sIG5hbWUgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoaXAobGVuZ3RoLCBvcmllbnRhdGlvbiA9IFwidmVydGljYWxcIikge1xuICBjb25zdCBoaXRDb29yZGluYXRlcyA9IFtdO1xuXG4gIGNvbnN0IGhpdCA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgaGl0Q29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlKTtcbiAgICByZXR1cm4gaGl0Q29vcmRpbmF0ZXM7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gbGVuZ3RoIC0gaGl0Q29vcmRpbmF0ZXMubGVuZ3RoIDw9IDA7XG5cbiAgcmV0dXJuIHsgbGVuZ3RoLCBvcmllbnRhdGlvbiwgaGl0Q29vcmRpbmF0ZXMsIGhpdCwgaXNTdW5rIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwidmFyIHdlYnBhY2tRdWV1ZXMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiBxdWV1ZS5kIDwgMSkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrUXVldWVzXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRxdWV1ZS5kID0gMDtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFcnJvcl0gPSBlO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAtMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9LCAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSkpO1xuXHRxdWV1ZSAmJiBxdWV1ZS5kIDwgMCAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
