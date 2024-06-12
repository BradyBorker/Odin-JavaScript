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

.gameover-modal button:hover {
  box-shadow: 0px 0px 5px 4px rgba(194, 178, 128, 1);
}
`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;;EAEb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE;;;;0EAIwE;EACxE,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE;;;;;GAKC;EACD,0DAA0D;EAC1D,yBAAyB;AAC3B;;AAEA;;;EAGE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA,SAAS;AACT;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;;EAEnB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;;EAElB,kBAAkB;EAClB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;;EAET,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;;EAElB,aAAa;EACb,wCAAwC;EACxC,YAAY;AACd;;AAEA;EACE,kDAAkD;AACpD;;AAEA,4BAA4B;AAC5B;EACE,WAAW;EACX,YAAY;;EAEZ,mGAAmG;EACnG;iBACe;AACjB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;;EAElB,aAAa;EACb,wCAAwC;EACxC,YAAY;AACd;;AAEA,oBAAoB;AACpB;EACE,iBAAiB;;EAEjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;;EAEE,YAAY;EACZ,iBAAiB;;EAEjB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ;kCACgC;AAClC;;AAEA;EACE;kBACgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA,0BAA0B;AAC1B;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,yBAAyB;;EAEzB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA,eAAe;AACf;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,YAAY;;EAEZ,aAAa;AACf;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA,oBAAoB;AACpB;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,wCAAwC;;EAExC,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,kBAAkB;;EAElB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;;EAElB,aAAa;EACb,wCAAwC;EACxC,YAAY;AACd;;AAEA;EACE,kDAAkD;AACpD",
            sourcesContent: [
              '@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");\n\n* {\n  font-family: "IBM Plex Mono", monospace;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu-background {\n  background:\n    radial-gradient(black 15%, transparent 16%) 0 0,\n    radial-gradient(black 15%, transparent 16%) 8px 8px,\n    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px,\n    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 8px 9px;\n  background-color: #282828;\n  background-size: 16px 16px;\n}\n\n.game-background {\n  background: linear-gradient(\n    0deg,\n    rgba(194, 178, 128, 1) 0%,\n    rgba(194, 178, 128, 1) 0%,\n    rgba(35, 137, 218, 1) 20%\n  );\n  box-shadow: inset 0px 0px 23px 12px rgba(194, 178, 128, 1);\n  border: 2px inset #c2b280;\n}\n\n.removed,\n.battleship-container.removed,\n.gameover-modal.removed {\n  display: none;\n}\n\n.hidden {\n  opacity: 0;\n  pointer-events: none;\n}\n\n/* Menu */\n.game-menu-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  padding: 25px;\n}\n\n.game-title-container {\n  font-weight: 700;\n  font-style: normal;\n\n  text-align: center;\n  font-size: 72px;\n  color: #c0c0c0;\n}\n\n.game-mode-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  max-width: 250px;\n}\n\n.game-mode-container button {\n  font-weight: 700;\n  font-style: normal;\n\n  padding: 10px;\n  background-color: rgba(194, 178, 128, 1);\n  color: black;\n}\n\n.game-mode-container button:hover {\n  box-shadow: 0px 0px 5px 4px rgba(194, 178, 128, 1);\n}\n\n/* Battleship Game Buttons */\n.random-ship-placement {\n  width: 35px;\n  height: 35px;\n\n  /* filter: invert(81%) sepia(0%) saturate(94%) hue-rotate(134deg) brightness(93%) contrast(101%); */\n  filter: invert(78%) sepia(15%) saturate(728%) hue-rotate(8deg) brightness(90%)\n    contrast(89%);\n}\n\n.ready-up {\n  font-weight: 700;\n  font-style: normal;\n\n  padding: 10px;\n  background-color: rgba(194, 178, 128, 1);\n  color: black;\n}\n\n/* Battleship Game */\n.battleship-container {\n  max-width: 1200px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.player-boards {\n  display: flex;\n  justify-content: space-between;\n}\n\n.player1-board,\n.player2-board {\n  width: 500px;\n  min-height: 500px;\n\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.tile {\n  border: 1px solid #a8b0b2;\n}\n\n.tile.valid-placement {\n  background-color: #99a3a3;\n}\n\n.tile.ship {\n  background-color: #070809;\n}\n\n.tile.hit {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.tile.hit.sunk {\n  background-color: #dc143c;\n}\n\n.tile.hit img {\n  width: 100%;\n  height: 100%;\n\n  filter: invert(18%) sepia(48%) saturate(5244%) hue-rotate(335deg)\n    brightness(95%) contrast(104%);\n}\n\n.tile.hit.sunk img {\n  filter: invert(7%) sepia(4%) saturate(596%) hue-rotate(170deg) brightness(89%)\n    contrast(107%);\n}\n\n.tile.missed {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: #a8b0b2;\n  opacity: 0.5;\n}\n\n.tile.missed img {\n  width: 100%;\n  height: 100%;\n}\n\n/* Ship pieces container */\n.draggable-ships-container {\n  width: 50px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.ship-container {\n  width: 25px;\n  border: 1px solid white;\n  background-color: #070809;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.ship-body {\n  min-height: 25px;\n  border: 1px solid #a8b0b2;\n  background-color: #070809;\n}\n\n/* Ghost Ship */\n#ghost-ship {\n  position: absolute;\n  top: -1000px;\n}\n\n.horizontal {\n  height: 25px;\n\n  display: flex;\n}\n\n.vertical {\n  width: 25px;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.ghost-ship-body {\n  height: 100%;\n  width: 100%;\n  border: 1px solid #a8b0b2;\n  background-color: #070809;\n}\n\n/* Game Over Modal */\n.gameover-modal {\n  width: 300px;\n  min-height: 100px;\n  padding: 15px;\n  background-color: rgba(194, 178, 128, 1);\n\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.gameover-modal .winner-name {\n  font-size: 32px;\n}\n\n.gameover-modal button {\n  font-weight: 700;\n  font-style: normal;\n\n  padding: 10px;\n  background-color: rgba(194, 178, 128, 1);\n  color: black;\n}\n\n.gameover-modal button:hover {\n  box-shadow: 0px 0px 5px 4px rgba(194, 178, 128, 1);\n}\n',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDZIQUE2SCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQkFBb0I7QUFDek47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvR0FBb0c7QUFDcEc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxRQUFRLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxTQUFTLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxNQUFNLEtBQUssWUFBWSxjQUFjLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxXQUFXLFlBQVksTUFBTSxNQUFNLE9BQU8sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsYUFBYSxXQUFXLFlB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QTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2JhdHRsZXNoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZHJhZ0FuZERyb3AuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcGxhY2VTaGlwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SUJNK1BsZXgrTW9ubzppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggTW9ub1wiLCBtb25vc3BhY2U7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZW51LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOlxuICAgIHJhZGlhbC1ncmFkaWVudChibGFjayAxNSUsIHRyYW5zcGFyZW50IDE2JSkgMCAwLFxuICAgIHJhZGlhbC1ncmFkaWVudChibGFjayAxNSUsIHRyYW5zcGFyZW50IDE2JSkgOHB4IDhweCxcbiAgICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDE1JSwgdHJhbnNwYXJlbnQgMjAlKSAwIDFweCxcbiAgICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDE1JSwgdHJhbnNwYXJlbnQgMjAlKSA4cHggOXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbn1cblxuLmdhbWUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAwZGVnLFxuICAgIHJnYmEoMTk0LCAxNzgsIDEyOCwgMSkgMCUsXG4gICAgcmdiYSgxOTQsIDE3OCwgMTI4LCAxKSAwJSxcbiAgICByZ2JhKDM1LCAxMzcsIDIxOCwgMSkgMjAlXG4gICk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjNweCAxMnB4IHJnYmEoMTk0LCAxNzgsIDEyOCwgMSk7XG4gIGJvcmRlcjogMnB4IGluc2V0ICNjMmIyODA7XG59XG5cbi5yZW1vdmVkLFxuLmJhdHRsZXNoaXAtY29udGFpbmVyLnJlbW92ZWQsXG4uZ2FtZW92ZXItbW9kYWwucmVtb3ZlZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogTWVudSAqL1xuLmdhbWUtbWVudS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5nYW1lLXRpdGxlLWNvbnRhaW5lciB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgY29sb3I6ICNjMGMwYzA7XG59XG5cbi5nYW1lLW1vZGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuXG4gIG1heC13aWR0aDogMjUwcHg7XG59XG5cbi5nYW1lLW1vZGUtY29udGFpbmVyIGJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcblxuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5nYW1lLW1vZGUtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDRweCByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xufVxuXG4vKiBCYXR0bGVzaGlwIEdhbWUgQnV0dG9ucyAqL1xuLnJhbmRvbS1zaGlwLXBsYWNlbWVudCB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG5cbiAgLyogZmlsdGVyOiBpbnZlcnQoODElKSBzZXBpYSgwJSkgc2F0dXJhdGUoOTQlKSBodWUtcm90YXRlKDEzNGRlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDEwMSUpOyAqL1xuICBmaWx0ZXI6IGludmVydCg3OCUpIHNlcGlhKDE1JSkgc2F0dXJhdGUoNzI4JSkgaHVlLXJvdGF0ZSg4ZGVnKSBicmlnaHRuZXNzKDkwJSlcbiAgICBjb250cmFzdCg4OSUpO1xufVxuXG4ucmVhZHktdXAge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG5cbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKiBCYXR0bGVzaGlwIEdhbWUgKi9cbi5iYXR0bGVzaGlwLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLnBsYXllci1ib2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wbGF5ZXIxLWJvYXJkLFxuLnBsYXllcjItYm9hcmQge1xuICB3aWR0aDogNTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLnRpbGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYThiMGIyO1xufVxuXG4udGlsZS52YWxpZC1wbGFjZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTlhM2EzO1xufVxuXG4udGlsZS5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3MDgwOTtcbn1cblxuLnRpbGUuaGl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpbGUuaGl0LnN1bmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMxNDNjO1xufVxuXG4udGlsZS5oaXQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBmaWx0ZXI6IGludmVydCgxOCUpIHNlcGlhKDQ4JSkgc2F0dXJhdGUoNTI0NCUpIGh1ZS1yb3RhdGUoMzM1ZGVnKVxuICAgIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCgxMDQlKTtcbn1cblxuLnRpbGUuaGl0LnN1bmsgaW1nIHtcbiAgZmlsdGVyOiBpbnZlcnQoNyUpIHNlcGlhKDQlKSBzYXR1cmF0ZSg1OTYlKSBodWUtcm90YXRlKDE3MGRlZykgYnJpZ2h0bmVzcyg4OSUpXG4gICAgY29udHJhc3QoMTA3JSk7XG59XG5cbi50aWxlLm1pc3NlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGIwYjI7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnRpbGUubWlzc2VkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIFNoaXAgcGllY2VzIGNvbnRhaW5lciAqL1xuLmRyYWdnYWJsZS1zaGlwcy1jb250YWluZXIge1xuICB3aWR0aDogNTBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uc2hpcC1jb250YWluZXIge1xuICB3aWR0aDogMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzA4MDk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNoaXAtYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhOGIwYjI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzA4MDk7XG59XG5cbi8qIEdob3N0IFNoaXAgKi9cbiNnaG9zdC1zaGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMDAwcHg7XG59XG5cbi5ob3Jpem9udGFsIHtcbiAgaGVpZ2h0OiAyNXB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi52ZXJ0aWNhbCB7XG4gIHdpZHRoOiAyNXB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5naG9zdC1zaGlwLWJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYThiMGIyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwODA5O1xufVxuXG4vKiBHYW1lIE92ZXIgTW9kYWwgKi9cbi5nYW1lb3Zlci1tb2RhbCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk0LCAxNzgsIDEyOCwgMSk7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2FtZW92ZXItbW9kYWwgLndpbm5lci1uYW1lIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4uZ2FtZW92ZXItbW9kYWwgYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuXG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk0LCAxNzgsIDEyOCwgMSk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmdhbWVvdmVyLW1vZGFsIGJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDRweCByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhOztFQUViLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFOzs7OzBFQUl3RTtFQUN4RSx5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0U7Ozs7O0dBS0M7RUFDRCwwREFBMEQ7RUFDMUQseUJBQXlCO0FBQzNCOztBQUVBOzs7RUFHRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOztBQUVBLFNBQVM7QUFDVDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1COztFQUVuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCOztFQUVsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7O0VBRVQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7O0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0VBRVosbUdBQW1HO0VBQ25HO2lCQUNlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2Q7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsaUJBQWlCOztFQUVqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7O0VBRWpCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWjtrQ0FDZ0M7QUFDbEM7O0FBRUE7RUFDRTtrQkFDZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsV0FBVzs7RUFFWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBeUI7O0VBRXpCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTs7RUFFWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXOztFQUVYLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isd0NBQXdDOztFQUV4QyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7O0VBRWxCLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0RBQWtEO0FBQ3BEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUlCTStQbGV4K01vbm86aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJQk0gUGxleCBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZDpcXG4gICAgcmFkaWFsLWdyYWRpZW50KGJsYWNrIDE1JSwgdHJhbnNwYXJlbnQgMTYlKSAwIDAsXFxuICAgIHJhZGlhbC1ncmFkaWVudChibGFjayAxNSUsIHRyYW5zcGFyZW50IDE2JSkgOHB4IDhweCxcXG4gICAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAxNSUsIHRyYW5zcGFyZW50IDIwJSkgMCAxcHgsXFxuICAgIHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMTUlLCB0cmFuc3BhcmVudCAyMCUpIDhweCA5cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XFxufVxcblxcbi5nYW1lLWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAwZGVnLFxcbiAgICByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpIDAlLFxcbiAgICByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpIDAlLFxcbiAgICByZ2JhKDM1LCAxMzcsIDIxOCwgMSkgMjAlXFxuICApO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyM3B4IDEycHggcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcXG4gIGJvcmRlcjogMnB4IGluc2V0ICNjMmIyODA7XFxufVxcblxcbi5yZW1vdmVkLFxcbi5iYXR0bGVzaGlwLWNvbnRhaW5lci5yZW1vdmVkLFxcbi5nYW1lb3Zlci1tb2RhbC5yZW1vdmVkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4vKiBNZW51ICovXFxuLmdhbWUtbWVudS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgcGFkZGluZzogMjVweDtcXG59XFxuXFxuLmdhbWUtdGl0bGUtY29udGFpbmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDcycHg7XFxuICBjb2xvcjogI2MwYzBjMDtcXG59XFxuXFxuLmdhbWUtbW9kZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuXFxuICBtYXgtd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4uZ2FtZS1tb2RlLWNvbnRhaW5lciBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG5cXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZ2FtZS1tb2RlLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNHB4IHJnYmEoMTk0LCAxNzgsIDEyOCwgMSk7XFxufVxcblxcbi8qIEJhdHRsZXNoaXAgR2FtZSBCdXR0b25zICovXFxuLnJhbmRvbS1zaGlwLXBsYWNlbWVudCB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG5cXG4gIC8qIGZpbHRlcjogaW52ZXJ0KDgxJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDk0JSkgaHVlLXJvdGF0ZSgxMzRkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCgxMDElKTsgKi9cXG4gIGZpbHRlcjogaW52ZXJ0KDc4JSkgc2VwaWEoMTUlKSBzYXR1cmF0ZSg3MjglKSBodWUtcm90YXRlKDhkZWcpIGJyaWdodG5lc3MoOTAlKVxcbiAgICBjb250cmFzdCg4OSUpO1xcbn1cXG5cXG4ucmVhZHktdXAge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG5cXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4vKiBCYXR0bGVzaGlwIEdhbWUgKi9cXG4uYmF0dGxlc2hpcC1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5wbGF5ZXItYm9hcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wbGF5ZXIxLWJvYXJkLFxcbi5wbGF5ZXIyLWJvYXJkIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi50aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhOGIwYjI7XFxufVxcblxcbi50aWxlLnZhbGlkLXBsYWNlbWVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTlhM2EzO1xcbn1cXG5cXG4udGlsZS5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzA4MDk7XFxufVxcblxcbi50aWxlLmhpdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aWxlLmhpdC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzE0M2M7XFxufVxcblxcbi50aWxlLmhpdCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBmaWx0ZXI6IGludmVydCgxOCUpIHNlcGlhKDQ4JSkgc2F0dXJhdGUoNTI0NCUpIGh1ZS1yb3RhdGUoMzM1ZGVnKVxcbiAgICBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoMTA0JSk7XFxufVxcblxcbi50aWxlLmhpdC5zdW5rIGltZyB7XFxuICBmaWx0ZXI6IGludmVydCg3JSkgc2VwaWEoNCUpIHNhdHVyYXRlKDU5NiUpIGh1ZS1yb3RhdGUoMTcwZGVnKSBicmlnaHRuZXNzKDg5JSlcXG4gICAgY29udHJhc3QoMTA3JSk7XFxufVxcblxcbi50aWxlLm1pc3NlZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4YjBiMjtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRpbGUubWlzc2VkIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogU2hpcCBwaWVjZXMgY29udGFpbmVyICovXFxuLmRyYWdnYWJsZS1zaGlwcy1jb250YWluZXIge1xcbiAgd2lkdGg6IDUwcHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnNoaXAtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwODA5O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaGlwLWJvZHkge1xcbiAgbWluLWhlaWdodDogMjVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhOGIwYjI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwODA5O1xcbn1cXG5cXG4vKiBHaG9zdCBTaGlwICovXFxuI2dob3N0LXNoaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTAwMHB4O1xcbn1cXG5cXG4uaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udmVydGljYWwge1xcbiAgd2lkdGg6IDI1cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmdob3N0LXNoaXAtYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhOGIwYjI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwODA5O1xcbn1cXG5cXG4vKiBHYW1lIE92ZXIgTW9kYWwgKi9cXG4uZ2FtZW92ZXItbW9kYWwge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lb3Zlci1tb2RhbCAud2lubmVyLW5hbWUge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4uZ2FtZW92ZXItbW9kYWwgYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuXFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmdhbWVvdmVyLW1vZGFsIGJ1dHRvbjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA0cHggcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IGZpbmlzaGVkUGxhY2luZ1NoaXBzLCB7XG4gIGNyZWF0ZVJhbmRvbVNoaXBQbGFjZW1lbnRCdXR0b24sXG4gIHJhbmRvbVNoaXBQbGFjZW1lbnQsXG4gIGNyZWF0ZURyYWdnYWJsZVNoaXBFbGVtZW50cyxcbiAgc3dpdGNoU2hpcE9yaWVudGF0aW9uLFxufSBmcm9tIFwiLi9wbGFjZVNoaXBzXCI7XG5pbXBvcnQge1xuICBkcmFnZ2FibGVGcm9tSW5zaWRlLFxuICBkcm9wcGFibGVGcm9tSW5zaWRlLFxuICBkcm9wcGFibGVGcm9tT3V0c2lkZSxcbiAgZHJvcHBhYmxlSG92ZXJGZWVkYmFjayxcbn0gZnJvbSBcIi4vZHJhZ0FuZERyb3BcIjtcbmltcG9ydCBleHBsb3Npb25TdmcgZnJvbSBcIi4uL2ljb25zL2JvbWItZXhwbG9zaW9uLXN2Zy5zdmdcIjtcbmltcG9ydCBzbWFsbERvdFNnIGZyb20gXCIuLi9pY29ucy9zbWFsbC1kb3Quc3ZnXCI7XG5cbmZ1bmN0aW9uIHN3aXRjaFR1cm4ocGxheWVycykge1xuICBwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgIHBsYXllci5zd2l0Y2hUdXJuKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc0dhbWVPdmVyKHBsYXllcnMpIHtcbiAgY29uc3QgbG9zZXIgPSBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiBwbGF5ZXIuYm9hcmQuYWxsU3VuaygpKTtcbiAgaWYgKGxvc2VyLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBbd2lubmVyXSA9IHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+ICFwbGF5ZXIuYm9hcmQuYWxsU3VuaygpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVvdmVyLW1vZGFsXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJyZW1vdmVkXCIpO1xuICAgIGNvbnN0IG1vZGFsV2lubmVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyLW5hbWVcIik7XG4gICAgbW9kYWxXaW5uZXJOYW1lLnRleHRDb250ZW50ID0gYCR7d2lubmVyLm5hbWV9IFdvbiFgO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWFrZUF0dGFjayhwbGF5ZXJzLCBjb29yZGluYXRlKSB7XG4gIGxldCBbYXR0YWNrZWRQbGF5ZXJdID0gcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gIXBsYXllci5teVR1cm4pO1xuICBsZXQgW2F0dGFja2luZ1BsYXllcl0gPSBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiBwbGF5ZXIubXlUdXJuKTtcblxuICBpZiAoIWF0dGFja2luZ1BsYXllci5pc0h1bWFuKSB7XG4gICAgYXR0YWNraW5nUGxheWVyLmxvZ0F0dGFjayhcbiAgICAgIGF0dGFja2VkUGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSksXG4gICAgICBjb29yZGluYXRlLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgYXR0YWNrZWRQbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcbiAgfVxuXG4gIGlmIChpc0dhbWVPdmVyKHBsYXllcnMpKSB7XG4gICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzLCB7fSwgW10sIHRydWUpO1xuICB9XG4gIHN3aXRjaFR1cm4ocGxheWVycyk7XG4gIHJlbmRlckdhbWVCb2FyZHMocGxheWVycyk7XG5cbiAgLy8gQ29tcHV0ZXIgQXR0YWNrXG4gIFthdHRhY2tlZFBsYXllcl0gPSBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiAhcGxheWVyLm15VHVybik7XG4gIFthdHRhY2tpbmdQbGF5ZXJdID0gcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gcGxheWVyLm15VHVybik7XG4gIGlmICghYXR0YWNraW5nUGxheWVyLmlzSHVtYW4pIHtcbiAgICBjb25zdCBhdHRhY2tDb29yZGluYXRlID0gYXR0YWNraW5nUGxheWVyLmF0dGFjayhhdHRhY2tlZFBsYXllcik7XG4gICAgbWFrZUF0dGFjayhwbGF5ZXJzLCBhdHRhY2tDb29yZGluYXRlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJHYW1lQm9hcmRzKFxuICBwbGF5ZXJzLFxuICBkcmFnRGF0YSA9IHt9LFxuICBwcmVzZXJ2ZWRDb29yZHMgPSBbXSxcbiAgZ2FtZU92ZXIgPSBmYWxzZSxcbikge1xuICBjb25zdCBbcGxheWVyMSwgcGxheWVyMl0gPSBwbGF5ZXJzO1xuICBjb25zdCBwbGF5ZXJWc0NvbXB1dGVyID0gIShwbGF5ZXIxLmlzSHVtYW4gJiYgcGxheWVyMi5pc0h1bWFuKTtcbiAgY29uc3QgcGxheWVyUGxhY2luZ1NoaXBzID0gcGxheWVycy5maW5kKChwbGF5ZXIpID0+ICFwbGF5ZXIuaXNSZWFkeSk7XG5cbiAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgYm9hcmROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllciR7aW5kZXggKyAxfS1ib2FyZGApO1xuICAgIGNvbnN0IGhpdENvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkLmhpdEF0dGFja3M7XG4gICAgY29uc3QgbWlzc2VkQ29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmQubWlzc2VkQXR0YWNrcztcbiAgICBjb25zdCB0aWxlcyA9IFtdO1xuICAgIHBsYXllci5ib2FyZC5zdGF0ZS5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY29sdW1uLCBjb2x1bW5JbmRleCkgPT4ge1xuICAgICAgICBpZiAocHJlc2VydmVkQ29vcmRzLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KFtyb3dJbmRleCwgY29sdW1uSW5kZXhdKSkpIHtcbiAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICBgcCR7aW5kZXggKyAxfS0ke3Jvd0luZGV4fS0ke2NvbHVtbkluZGV4fWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpO1xuXG4gICAgICAgICAgLy8gRHJvcHBhYmxlIHRpbGVcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwbGF5ZXIgPT09IHBsYXllclBsYWNpbmdTaGlwcyAmJlxuICAgICAgICAgICAgcGxheWVyLmlzSHVtYW4gJiZcbiAgICAgICAgICAgIHBsYXllci5ib2FyZC52YWxpZFNoaXBQbGFjZW1lbnQoXG4gICAgICAgICAgICAgIHBsYXllci5ib2FyZC5nZXRDb29yZHNGcm9tU3RhcnRpbmdDb29yZChcbiAgICAgICAgICAgICAgICBbcm93SW5kZXgsIGNvbHVtbkluZGV4XSxcbiAgICAgICAgICAgICAgICBkcmFnRGF0YS5zaGlwLm9yaWVudGF0aW9uLFxuICAgICAgICAgICAgICAgIGRyYWdEYXRhLnNoaXAubGVuZ3RoLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZHJvcHBhYmxlSG92ZXJGZWVkYmFjayh0aWxlLCBkcmFnRGF0YSwgcGxheWVyLCBpbmRleCArIDEpO1xuICAgICAgICAgICAgZHJvcHBhYmxlRnJvbUluc2lkZShcbiAgICAgICAgICAgICAgdGlsZSxcbiAgICAgICAgICAgICAgZHJhZ0RhdGEsXG4gICAgICAgICAgICAgIHBsYXllcixcbiAgICAgICAgICAgICAgcGxheWVycyxcbiAgICAgICAgICAgICAgcmVuZGVyR2FtZUJvYXJkcyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGlsZXMucHVzaCh0aWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJ0aWxlXCIpO1xuICAgICAgICAgIHRpbGUuaWQgPSBgcCR7aW5kZXggKyAxfS0ke3Jvd0luZGV4fS0ke2NvbHVtbkluZGV4fWA7XG5cbiAgICAgICAgICAvLyBEcmFnZ2FibGUgdGlsZVxuICAgICAgICAgIGlmIChjb2x1bW4gJiYgcGxheWVyID09PSBwbGF5ZXJQbGFjaW5nU2hpcHMgJiYgcGxheWVyLmlzSHVtYW4pIHtcbiAgICAgICAgICAgIGRyYWdnYWJsZUZyb21JbnNpZGUodGlsZSwgcGxheWVyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEcm9wcGFibGUgdGlsZVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGRyYWdEYXRhKS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAhY29sdW1uICYmXG4gICAgICAgICAgICBwbGF5ZXIgPT09IHBsYXllclBsYWNpbmdTaGlwcyAmJlxuICAgICAgICAgICAgcGxheWVyLmlzSHVtYW4gJiZcbiAgICAgICAgICAgIHBsYXllci5ib2FyZC52YWxpZFNoaXBQbGFjZW1lbnQoXG4gICAgICAgICAgICAgIHBsYXllci5ib2FyZC5nZXRDb29yZHNGcm9tU3RhcnRpbmdDb29yZChcbiAgICAgICAgICAgICAgICBbcm93SW5kZXgsIGNvbHVtbkluZGV4XSxcbiAgICAgICAgICAgICAgICBkcmFnRGF0YS5zaGlwLm9yaWVudGF0aW9uLFxuICAgICAgICAgICAgICAgIGRyYWdEYXRhLnNoaXAubGVuZ3RoLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZHJvcHBhYmxlSG92ZXJGZWVkYmFjayh0aWxlLCBkcmFnRGF0YSwgcGxheWVyLCBpbmRleCArIDEpO1xuXG4gICAgICAgICAgICBpZiAoZHJhZ0RhdGEub3JpZ2luID09PSBcImluc2lkZUJvYXJkXCIpIHtcbiAgICAgICAgICAgICAgZHJvcHBhYmxlRnJvbUluc2lkZShcbiAgICAgICAgICAgICAgICB0aWxlLFxuICAgICAgICAgICAgICAgIGRyYWdEYXRhLFxuICAgICAgICAgICAgICAgIHBsYXllcixcbiAgICAgICAgICAgICAgICBwbGF5ZXJzLFxuICAgICAgICAgICAgICAgIHJlbmRlckdhbWVCb2FyZHMsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRyYWdEYXRhLm9yaWdpbiA9PT0gXCJvdXRzaWRlQm9hcmRcIikge1xuICAgICAgICAgICAgICBkcm9wcGFibGVGcm9tT3V0c2lkZShcbiAgICAgICAgICAgICAgICB0aWxlLFxuICAgICAgICAgICAgICAgIGRyYWdEYXRhLFxuICAgICAgICAgICAgICAgIHBsYXllcixcbiAgICAgICAgICAgICAgICBwbGF5ZXJzLFxuICAgICAgICAgICAgICAgIHJlbmRlckdhbWVCb2FyZHMsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHVwZGF0ZSBzaGlwJ3Mgb3JpZW50YXRpb25cbiAgICAgICAgICBpZiAoY29sdW1uICYmIHBsYXllci5pc0h1bWFuICYmIHBsYXllciA9PT0gcGxheWVyUGxhY2luZ1NoaXBzKSB7XG4gICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT5cbiAgICAgICAgICAgICAgc3dpdGNoU2hpcE9yaWVudGF0aW9uKGUsIHBsYXllciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcyksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENvbmRpdGlvbnMgZm9yIGRpc3BsYXlpbmcgc2hpcHNcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb2x1bW4gJiZcbiAgICAgICAgICAgIHBsYXllci5pc0h1bWFuICYmXG4gICAgICAgICAgICAocGxheWVyVnNDb21wdXRlciB8fCAhcGxheWVyLmlzUmVhZHkpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENvbmRpdGlvbnMgZm9yIGFsbG93aW5nIGF0dGFjayBvbiB0aWxlXG4gICAgICAgICAgY29uc3QgcmVhZHkgPSBwbGF5ZXJzLmV2ZXJ5KChwKSA9PiBwLmlzUmVhZHkpO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHJlYWR5ICYmXG4gICAgICAgICAgICAhcGxheWVyLm15VHVybiAmJlxuICAgICAgICAgICAgcGxheWVyLmJvYXJkLmlzQXR0YWNrYWJsZShbcm93SW5kZXgsIGNvbHVtbkluZGV4XSkgJiZcbiAgICAgICAgICAgICghcGxheWVyLmlzSHVtYW4gfHwgIXBsYXllclZzQ29tcHV0ZXIpICYmXG4gICAgICAgICAgICAhZ2FtZU92ZXJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBbcm93SW5kZXgsIGNvbHVtbkluZGV4XTtcbiAgICAgICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgbWFrZUF0dGFjayhwbGF5ZXJzLCBjb29yZGluYXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRpbGVzLnB1c2godGlsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGJvYXJkTm9kZS5yZXBsYWNlQ2hpbGRyZW4oLi4udGlsZXMpO1xuXG4gICAgaGl0Q29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGU7XG4gICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHAke2luZGV4ICsgMX0tJHtyb3d9LSR7Y29sdW1ufWApO1xuXG4gICAgICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGltZ0VsZW1lbnQuc3JjID0gZXhwbG9zaW9uU3ZnO1xuICAgICAgdGlsZS5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcblxuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgaWYgKHBsYXllci5ib2FyZC5nZXRTaGlwQXQoY29vcmRpbmF0ZSkuaXNTdW5rKCkpIHtcbiAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBtaXNzZWRDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcCR7aW5kZXggKyAxfS0ke3Jvd30tJHtjb2x1bW59YCk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWRcIik7XG5cbiAgICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1nRWxlbWVudC5zcmMgPSBzbWFsbERvdFNnO1xuICAgICAgdGlsZS5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0R2FtZShwbGF5ZXJzKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImdhbWUtYmFja2dyb3VuZFwiKTtcblxuICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpO1xuICBjb25zdCBiYXR0bGVTaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXR0bGVzaGlwLWNvbnRhaW5lclwiKTtcbiAgYmF0dGxlU2hpcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwicmVtb3ZlZFwiKTtcblxuICBjb25zdCBbcGxheWVyMSwgcGxheWVyMl0gPSBwbGF5ZXJzO1xuICBjcmVhdGVSYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uKHBsYXllcjEsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpO1xuICBjcmVhdGVEcmFnZ2FibGVTaGlwRWxlbWVudHMocGxheWVycywgcmVuZGVyR2FtZUJvYXJkcyk7XG4gIGF3YWl0IGZpbmlzaGVkUGxhY2luZ1NoaXBzKHBsYXllcjEpO1xuICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpO1xuXG4gIGlmIChwbGF5ZXIyLmlzSHVtYW4pIHtcbiAgICBjcmVhdGVSYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uKHBsYXllcjIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpO1xuICAgIGNyZWF0ZURyYWdnYWJsZVNoaXBFbGVtZW50cyhwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKTtcbiAgICBhd2FpdCBmaW5pc2hlZFBsYWNpbmdTaGlwcyhwbGF5ZXIyKTtcbiAgfSBlbHNlIHtcbiAgICByYW5kb21TaGlwUGxhY2VtZW50KHBsYXllcjIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpO1xuICAgIHBsYXllcjIucmVhZHlVcCgpO1xuICB9XG5cbiAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKTtcbn1cbiIsImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZnVuY3Rpb24gZHJhZ2dlZEZyb21JbnNpZGVCb2FyZChlLCBwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpIHtcbiAgY29uc3QgY29vcmRpbmF0ZSA9IGUudGFyZ2V0LmlkXG4gICAgLnNwbGl0KFwiLVwiKVxuICAgIC5zbGljZSgtMilcbiAgICAubWFwKChudW1iZXIpID0+IE51bWJlcihudW1iZXIpKTtcbiAgY29uc3QgdGhlU2hpcCA9IHBsYXllci5ib2FyZC5nZXRTaGlwQXQoY29vcmRpbmF0ZSk7XG5cbiAgY29uc3QgZ2hvc3RTaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ2hvc3RTaGlwLmlkID0gXCJnaG9zdC1zaGlwXCI7XG5cbiAgaWYgKHRoZVNoaXAub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgIGdob3N0U2hpcC5jbGFzc0xpc3QuYWRkKFwidmVydGljYWxcIik7XG4gICAgZ2hvc3RTaGlwLnN0eWxlLmhlaWdodCA9IGAke3RoZVNoaXAubGVuZ3RoICogMjV9cHhgO1xuICB9IGVsc2UgaWYgKHRoZVNoaXAub3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgZ2hvc3RTaGlwLmNsYXNzTGlzdC5hZGQoXCJob3Jpem9udGFsXCIpO1xuICAgIGdob3N0U2hpcC5zdHlsZS53aWR0aCA9IGAke3RoZVNoaXAubGVuZ3RoICogMjV9cHhgO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGVTaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZ2hvc3RTaGlwQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ2hvc3RTaGlwQm9keS5jbGFzc0xpc3QuYWRkKFwiZ2hvc3Qtc2hpcC1ib2R5XCIpO1xuXG4gICAgZ2hvc3RTaGlwLmFwcGVuZENoaWxkKGdob3N0U2hpcEJvZHkpO1xuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnaG9zdFNoaXApO1xuICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoZ2hvc3RTaGlwLCAwLCAwKTtcblxuICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmQuZ2V0U2hpcENvb3JkaW5hdGVzKHRoZVNoaXApO1xuICBjb25zdCBwcmVzZXJ2ZWRDb29yZGluYXRlcyA9IHNoaXBDb29yZGluYXRlcy5tYXAoKGNvb3JkKSA9PlxuICAgIEpTT04uc3RyaW5naWZ5KGNvb3JkKSxcbiAgKTtcblxuICBwbGF5ZXIuYm9hcmQucmVtb3ZlUGxhY2VkU2hpcChzaGlwQ29vcmRpbmF0ZXMpO1xuXG4gIHJlbmRlckdhbWVCb2FyZHMoXG4gICAgcGxheWVycyxcbiAgICB7IG9yaWdpbjogXCJpbnNpZGVCb2FyZFwiLCBzaGlwOiB0aGVTaGlwIH0sXG4gICAgcHJlc2VydmVkQ29vcmRpbmF0ZXMsXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmFnZ2FibGVGcm9tSW5zaWRlKHRpbGUsIHBsYXllciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykge1xuICB0aWxlLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XG4gIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZSkgPT4ge1xuICAgIGRyYWdnZWRGcm9tSW5zaWRlQm9hcmQoZSwgcGxheWVyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKTtcbiAgfSk7XG5cbiAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IGdob3N0U2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2hvc3Qtc2hpcFwiKTtcbiAgICBpZiAoZ2hvc3RTaGlwLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgIGdob3N0U2hpcC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGdob3N0U2hpcCk7XG4gICAgfVxuXG4gICAgaWYgKGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPT09IFwibm9uZVwiKSB7XG4gICAgICBwbGF5ZXIuYm9hcmQucmVzdG9yZVN0YXRlKCk7XG4gICAgICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRyYWdnZWRGcm9tT3V0c2lkZUJvYXJkKGUsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpIHtcbiAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xuICBjb25zdCByZSA9IC9sZW5ndGgtKFxcZCkvO1xuICBsZXQgc2hpcExlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlLnRhcmdldC5jbGFzc0xpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAocmUudGVzdChlLnRhcmdldC5jbGFzc0xpc3RbaV0pKSB7XG4gICAgICBzaGlwTGVuZ3RoID0gTnVtYmVyKGUudGFyZ2V0LmNsYXNzTGlzdFtpXS5zcGxpdChcIi1cIilbMV0pO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGNvbnN0IG5ld1NoaXAgPSBzaGlwKHNoaXBMZW5ndGgpO1xuXG4gIHJlbmRlckdhbWVCb2FyZHMocGxheWVycywgeyBvcmlnaW46IFwib3V0c2lkZUJvYXJkXCIsIHNoaXA6IG5ld1NoaXAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmFnZ2FibGVGcm9tT3V0c2lkZShcbiAgc2hpcENvbnRhaW5lckVsZW1lbnQsXG4gIGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLFxuICBwbGF5ZXJzLFxuICByZW5kZXJHYW1lQm9hcmRzLFxuKSB7XG4gIHNoaXBDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+IHtcbiAgICBkcmFnZ2VkRnJvbU91dHNpZGVCb2FyZChlLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKTtcbiAgfSk7XG5cbiAgc2hpcENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgKGUpID0+IHtcbiAgICBpZiAoZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCAhPT0gXCJub25lXCIpIHtcbiAgICAgIGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGUudGFyZ2V0KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkcm9wcGVkRnJvbUluc2lkZUJvYXJkKFxuICBkcmFnRGF0YSxcbiAgcGxheWVyLFxuICBlLFxuICBwbGF5ZXJzLFxuICByZW5kZXJHYW1lQm9hcmRzLFxuKSB7XG4gIGNvbnN0IHRoZVNoaXAgPSBkcmFnRGF0YS5zaGlwO1xuXG4gIGNvbnN0IHN0YXJ0aW5nQ29vcmRpbmF0ZSA9IGUudGFyZ2V0LmlkXG4gICAgLnNwbGl0KFwiLVwiKVxuICAgIC5zbGljZSgtMilcbiAgICAubWFwKChudW1iZXIpID0+IE51bWJlcihudW1iZXIpKTtcbiAgcGxheWVyLmJvYXJkLnBsYWNlU2hpcCh0aGVTaGlwLCBzdGFydGluZ0Nvb3JkaW5hdGUpO1xuXG4gIHJlbmRlckdhbWVCb2FyZHMocGxheWVycyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcm9wcGFibGVGcm9tSW5zaWRlKFxuICB0aWxlLFxuICBkcmFnRGF0YSxcbiAgcGxheWVyLFxuICBwbGF5ZXJzLFxuICByZW5kZXJHYW1lQm9hcmRzLFxuKSB7XG4gIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcbiAgfSk7XG5cbiAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkcm9wcGVkRnJvbUluc2lkZUJvYXJkKGRyYWdEYXRhLCBwbGF5ZXIsIGUsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZHJvcHBlZEZyb21PdXRzaWRlQm9hcmQoXG4gIGRyYWdEYXRhLFxuICBwbGF5ZXIsXG4gIGUsXG4gIHBsYXllcnMsXG4gIHJlbmRlckdhbWVCb2FyZHMsXG4pIHtcbiAgY29uc3Qgc3RhcnRpbmdDb29yZGluYXRlID0gZS50YXJnZXQuaWRcbiAgICAuc3BsaXQoXCItXCIpXG4gICAgLnNsaWNlKC0yKVxuICAgIC5tYXAoKG51bWJlcikgPT4gTnVtYmVyKG51bWJlcikpO1xuICBwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKGRyYWdEYXRhLnNoaXAsIHN0YXJ0aW5nQ29vcmRpbmF0ZSk7XG5cbiAgaWYgKHBsYXllci5ib2FyZC5hbGxTaGlwc1BsYWNlZCgpKSB7XG4gICAgY29uc3QgcmVhZHlVcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVhZHktdXBcIik7XG4gICAgcmVhZHlVcEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwicmVtb3ZlZFwiKTtcbiAgfVxuXG4gIHJlbmRlckdhbWVCb2FyZHMocGxheWVycyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcm9wcGFibGVGcm9tT3V0c2lkZShcbiAgdGlsZSxcbiAgZHJhZ0RhdGEsXG4gIHBsYXllcixcbiAgcGxheWVycyxcbiAgcmVuZGVyR2FtZUJvYXJkcyxcbikge1xuICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XG4gIH0pO1xuXG4gIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZHJvcHBlZEZyb21PdXRzaWRlQm9hcmQoZHJhZ0RhdGEsIHBsYXllciwgZSwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcyk7XG4gIH0pO1xufVxuXG5jb25zdCBwcmV2aW91c0Nvb3JkaW5hdGVzUXVldWUgPSBbXTtcbmV4cG9ydCBmdW5jdGlvbiBkcm9wcGFibGVIb3ZlckZlZWRiYWNrKHRpbGUsIGRyYWdEYXRhLCBwbGF5ZXIsIHBsYXllckluZGV4KSB7XG4gIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0aW5nQ29vcmRpbmF0ZSA9IGUudGFyZ2V0LmlkXG4gICAgICAuc3BsaXQoXCItXCIpXG4gICAgICAuc2xpY2UoLTIpXG4gICAgICAubWFwKChudW1iZXIpID0+IE51bWJlcihudW1iZXIpKTtcbiAgICBjb25zdCB0aGVTaGlwID0gZHJhZ0RhdGEuc2hpcDtcbiAgICBjb25zdCBhbGxDb29yZGluYXRlcyA9IHBsYXllci5ib2FyZC5nZXRDb29yZHNGcm9tU3RhcnRpbmdDb29yZChcbiAgICAgIHN0YXJ0aW5nQ29vcmRpbmF0ZSxcbiAgICAgIHRoZVNoaXAub3JpZW50YXRpb24sXG4gICAgICB0aGVTaGlwLmxlbmd0aCxcbiAgICApO1xuXG4gICAgYWxsQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGU7XG4gICAgICBjb25zdCBob3ZlcmVkVGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICBgcCR7cGxheWVySW5kZXh9LSR7cm93fS0ke2NvbHVtbn1gLFxuICAgICAgKTtcbiAgICAgIGhvdmVyZWRUaWxlLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZC1wbGFjZW1lbnRcIik7XG4gICAgfSk7XG5cbiAgICB3aGlsZSAocHJldmlvdXNDb29yZGluYXRlc1F1ZXVlLmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCBwcmV2aW91c0Nvb3JkaW5hdGVzID0gcHJldmlvdXNDb29yZGluYXRlc1F1ZXVlLnNoaWZ0KCk7XG4gICAgICBwcmV2aW91c0Nvb3JkaW5hdGVzLmZvckVhY2goKHByZXZDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBKU09OLnBhcnNlKHByZXZDb29yZGluYXRlKTtcbiAgICAgICAgY29uc3QgaG92ZXJlZFRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICBgcCR7cGxheWVySW5kZXh9LSR7cm93fS0ke2NvbHVtbn1gLFxuICAgICAgICApO1xuXG4gICAgICAgIGhvdmVyZWRUaWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJ2YWxpZC1wbGFjZW1lbnRcIik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3Qgc3RyaW5naWZpZWRDb29yZHMgPSBhbGxDb29yZGluYXRlcy5tYXAoKGNvb3JkaW5hdGUpID0+XG4gICAgICBKU09OLnN0cmluZ2lmeShjb29yZGluYXRlKSxcbiAgICApO1xuICAgIHByZXZpb3VzQ29vcmRpbmF0ZXNRdWV1ZS5wdXNoKHN0cmluZ2lmaWVkQ29vcmRzKTtcbiAgfSk7XG5cbiAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsICgpID0+IHtcbiAgICBsZXQgcHJldmlvdXNDb29yZGluYXRlcztcbiAgICBsZXQgY3VycmVudENvb3JkaW5hdGVzO1xuICAgIGlmIChwcmV2aW91c0Nvb3JkaW5hdGVzUXVldWUubGVuZ3RoID4gMSkge1xuICAgICAgcHJldmlvdXNDb29yZGluYXRlcyA9IHByZXZpb3VzQ29vcmRpbmF0ZXNRdWV1ZS5zaGlmdCgpO1xuICAgICAgW2N1cnJlbnRDb29yZGluYXRlc10gPSBwcmV2aW91c0Nvb3JkaW5hdGVzUXVldWU7XG4gICAgfSBlbHNlIGlmIChwcmV2aW91c0Nvb3JkaW5hdGVzUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgW3ByZXZpb3VzQ29vcmRpbmF0ZXNdID0gcHJldmlvdXNDb29yZGluYXRlc1F1ZXVlO1xuICAgIH1cblxuICAgIGlmICghKHByZXZpb3VzQ29vcmRpbmF0ZXMgJiYgY3VycmVudENvb3JkaW5hdGVzKSkge1xuICAgICAgcHJldmlvdXNDb29yZGluYXRlcy5mb3JFYWNoKChwcmV2Q29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gSlNPTi5wYXJzZShwcmV2Q29vcmRpbmF0ZSk7XG4gICAgICAgIGNvbnN0IGhvdmVyZWRUaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgYHAke3BsYXllckluZGV4fS0ke3Jvd30tJHtjb2x1bW59YCxcbiAgICAgICAgKTtcbiAgICAgICAgaG92ZXJlZFRpbGUuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkLXBsYWNlbWVudFwiKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2aW91c0Nvb3JkaW5hdGVzLmZvckVhY2goKHByZXZDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBKU09OLnBhcnNlKHByZXZDb29yZGluYXRlKTtcbiAgICAgICAgY29uc3QgaG92ZXJlZFRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICBgcCR7cGxheWVySW5kZXh9LSR7cm93fS0ke2NvbHVtbn1gLFxuICAgICAgICApO1xuXG4gICAgICAgIGlmICghY3VycmVudENvb3JkaW5hdGVzLmluY2x1ZGVzKHByZXZDb29yZGluYXRlKSkge1xuICAgICAgICAgIGhvdmVyZWRUaWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJ2YWxpZC1wbGFjZW1lbnRcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lQm9hcmQoKSB7XG4gIGNvbnN0IHN0YXRlID0gW107XG4gIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IFtdO1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93ICs9IDEpIHtcbiAgICBzdGF0ZS5wdXNoKFtdKTtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sICs9IDEpIHtcbiAgICAgIHN0YXRlW3Jvd10ucHVzaChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVzdG9yZVN0YXRlID0gKCkgPT4ge1xuICAgIHNoaXBDb29yZGluYXRlcy5mb3JFYWNoKChzaGlwT2JqZWN0KSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBPYmplY3QuY29vcmRpbmF0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IHNoaXBPYmplY3QuY29vcmRpbmF0ZXNbaV07XG4gICAgICAgIGlmIChzdGF0ZVtyb3ddW2NvbHVtbl0gIT09IHNoaXBPYmplY3Quc2hpcCkge1xuICAgICAgICAgIHN0YXRlW3Jvd11bY29sdW1uXSA9IHNoaXBPYmplY3Quc2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkU2hpcFBsYWNlbWVudCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBjb29yZGluYXRlc1tpXTtcbiAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgICAgaWYgKFxuICAgICAgICByb3cgPCAwIHx8XG4gICAgICAgIHJvdyA+IDkgfHxcbiAgICAgICAgY29sdW1uIDwgMCB8fFxuICAgICAgICBjb2x1bW4gPiA5IHx8XG4gICAgICAgIHN0YXRlW3Jvd11bY29sdW1uXVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgZ2V0Q29vcmRzRnJvbVN0YXJ0aW5nQ29vcmQgPSAoXG4gICAgZmlyc3RDb29yZGluYXRlLFxuICAgIG9yaWVudGF0aW9uLFxuICAgIHNoaXBMZW5ndGgsXG4gICkgPT4ge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbZmlyc3RDb29yZGluYXRlWzBdLCBmaXJzdENvb3JkaW5hdGVbMV0gKyBpXSk7XG4gICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbZmlyc3RDb29yZGluYXRlWzBdICsgaSwgZmlyc3RDb29yZGluYXRlWzFdXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBmaXJzdENvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldENvb3Jkc0Zyb21TdGFydGluZ0Nvb3JkKFxuICAgICAgZmlyc3RDb29yZGluYXRlLFxuICAgICAgc2hpcC5vcmllbnRhdGlvbixcbiAgICAgIHNoaXAubGVuZ3RoLFxuICAgICk7XG5cbiAgICBpZiAodmFsaWRTaGlwUGxhY2VtZW50KGNvb3JkaW5hdGVzKSkge1xuICAgICAgY29uc3QgaW5kZXggPSBzaGlwQ29vcmRpbmF0ZXMuZmluZEluZGV4KFxuICAgICAgICAoc2hpcE9iamVjdCkgPT4gc2hpcE9iamVjdC5zaGlwID09PSBzaGlwLFxuICAgICAgKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHNoaXBDb29yZGluYXRlc1tpbmRleF0uY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKHsgc2hpcCwgY29vcmRpbmF0ZXMgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGU7XG4gICAgICAgIHN0YXRlW3Jvd11bY29sdW1uXSA9IHNoaXA7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYWxsU2hpcHNQbGFjZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxhY2VkU2hpcHMgPSBbXTtcbiAgICBzdGF0ZS5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbiAmJiAhcGxhY2VkU2hpcHMuaW5jbHVkZXMoY29sdW1uKSkge1xuICAgICAgICAgIHBsYWNlZFNoaXBzLnB1c2goY29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGxhY2VkU2hpcHMubGVuZ3RoID09PSA1O1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVBsYWNlZFNoaXBzID0gKCkgPT4ge1xuICAgIHN0YXRlLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgIHN0YXRlW3Jvd0luZGV4XVtjb2xJbmRleF0gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHNoaXBDb29yZGluYXRlcy5zcGxpY2UoMCwgc2hpcENvb3JkaW5hdGVzLmxlbmd0aCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUGxhY2VkU2hpcCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgICAgc3RhdGVbcm93XVtjb2x1bW5dID0gZmFsc2U7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UGxhY2VkU2hpcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHNBcnJheSA9IFtdO1xuICAgIHNoaXBDb29yZGluYXRlcy5mb3JFYWNoKChzaGlwT2JqZWN0KSA9PiB7XG4gICAgICBzaGlwc0FycmF5LnB1c2goc2hpcE9iamVjdC5zaGlwKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2hpcHNBcnJheTtcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwQXQgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgIGNvbnN0IHRoZVNoaXAgPSBzdGF0ZVtyb3ddW2NvbHVtbl07XG4gICAgcmV0dXJuIHRoZVNoaXA7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcEhlYWRDb29yZGluYXRlID0gKHNoaXApID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHNoaXBDb29yZGluYXRlcy5maW5kSW5kZXgoXG4gICAgICAoc2hpcE9iamVjdCkgPT4gc2hpcE9iamVjdC5zaGlwID09PSBzaGlwLFxuICAgICk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHJldHVybiBzaGlwQ29vcmRpbmF0ZXNbaW5kZXhdLmNvb3JkaW5hdGVzWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwQ29vcmRpbmF0ZXMgPSAoc2hpcCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gc2hpcENvb3JkaW5hdGVzLmZpbmRJbmRleChcbiAgICAgIChzaGlwT2JqZWN0KSA9PiBzaGlwT2JqZWN0LnNoaXAgPT09IHNoaXAsXG4gICAgKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcmV0dXJuIHNoaXBDb29yZGluYXRlc1tpbmRleF0uY29vcmRpbmF0ZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGhpdEF0dGFja3MgPSBbXTtcbiAgY29uc3QgbWlzc2VkQXR0YWNrcyA9IFtdO1xuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICBjb25zdCBib2FyZFRpbGUgPSBzdGF0ZVtyb3ddW2NvbHVtbl07XG4gICAgaWYgKGJvYXJkVGlsZSkge1xuICAgICAgYm9hcmRUaWxlLmhpdChjb29yZGluYXRlKTtcbiAgICAgIGhpdEF0dGFja3MucHVzaChjb29yZGluYXRlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBtaXNzZWRBdHRhY2tzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkQXR0YWNrID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICByZXR1cm4gcm93ID49IDAgJiYgcm93IDw9IDkgJiYgY29sdW1uID49IDAgJiYgY29sdW1uIDw9IDk7XG4gIH07XG5cbiAgY29uc3QgaXNBdHRhY2thYmxlID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBhbGxBdHRhY2tzID0gaGl0QXR0YWNrc1xuICAgICAgLmNvbmNhdChtaXNzZWRBdHRhY2tzKVxuICAgICAgLm1hcCgoYXR0YWNrKSA9PiBKU09OLnN0cmluZ2lmeShhdHRhY2spKTtcbiAgICByZXR1cm4gKFxuICAgICAgIWFsbEF0dGFja3MuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZSkpICYmXG4gICAgICB2YWxpZEF0dGFjayhjb29yZGluYXRlKVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwcyA9IGdldFBsYWNlZFNoaXBzKCk7XG4gICAgcmV0dXJuIHNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlc3RvcmVTdGF0ZSxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTdW5rLFxuICAgIGlzQXR0YWNrYWJsZSxcbiAgICBhbGxTaGlwc1BsYWNlZCxcbiAgICByZW1vdmVQbGFjZWRTaGlwcyxcbiAgICByZW1vdmVQbGFjZWRTaGlwLFxuICAgIGdldFNoaXBBdCxcbiAgICBnZXRTaGlwSGVhZENvb3JkaW5hdGUsXG4gICAgZ2V0U2hpcENvb3JkaW5hdGVzLFxuICAgIGdldENvb3Jkc0Zyb21TdGFydGluZ0Nvb3JkLFxuICAgIHZhbGlkU2hpcFBsYWNlbWVudCxcbiAgICBzdGF0ZSxcbiAgICBoaXRBdHRhY2tzLFxuICAgIG1pc3NlZEF0dGFja3MsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBodW1hbiwgY29tcHV0ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBkaXNwbGF5TWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuL2JhdHRsZXNoaXBcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheS1hZ2FpblwiKTtcbnBsYXlBZ2FpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhdHRsZXNoaXAtY29udGFpbmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVkXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVvdmVyLW1vZGFsXCIpLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVkXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZ2FtZS1iYWNrZ3JvdW5kXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwibWVudS1iYWNrZ3JvdW5kXCIpO1xuXG4gIGNvbnN0IHBsYXllcjFCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMS1ib2FyZFwiKTtcbiAgd2hpbGUgKHBsYXllcjFCb2FyZC5maXJzdENoaWxkKSB7XG4gICAgcGxheWVyMUJvYXJkLnJlbW92ZUNoaWxkKHBsYXllcjFCb2FyZC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IHBsYXllcjJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMi1ib2FyZFwiKTtcbiAgd2hpbGUgKHBsYXllcjJCb2FyZC5maXJzdENoaWxkKSB7XG4gICAgcGxheWVyMkJvYXJkLnJlbW92ZUNoaWxkKHBsYXllcjJCb2FyZC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5kcmFnZ2FibGUtc2hpcHMtY29udGFpbmVyXCIsXG4gICk7XG4gIHdoaWxlIChkcmFnZ2FibGVTaGlwc0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIucmVtb3ZlQ2hpbGQoZHJhZ2dhYmxlU2hpcHNDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBzdGFydEdhbWUoYXdhaXQgZGlzcGxheU1lbnUoaHVtYW4sIGNvbXB1dGVyKSk7XG59KTtcblxuc3RhcnRHYW1lKGF3YWl0IGRpc3BsYXlNZW51KGh1bWFuLCBjb21wdXRlcikpO1xuIiwiZnVuY3Rpb24gcmVtb3ZlTWVudShib2R5KSB7XG4gIGJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLW1lbnUtY29udGFpbmVyXCIpKTtcbiAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS1iYWNrZ3JvdW5kXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TWVudShodW1hbiwgY29tcHV0ZXIpIHtcbiAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtbWVudS1jb250YWluZXJcIikpIHtcbiAgICBjb25zdCBnYW1lTWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ2FtZU1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdhbWUtbWVudS1jb250YWluZXJcIik7XG4gICAgY29uc3QgZ2FtZVRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYW1lVGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdhbWUtdGl0bGUtY29udGFpbmVyXCIpO1xuICAgIGdhbWVUaXRsZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiQkFUVExFU0hJUFwiO1xuXG4gICAgY29uc3QgZ2FtZU1vZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHB2cE1vZGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHB2cE1vZGVCdG4udGV4dENvbnRlbnQgPSBcIlBsYXllciB2cy4gUGxheWVyXCI7XG4gICAgY29uc3QgcHZjTW9kZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHZjTW9kZUJ0bi50ZXh0Q29udGVudCA9IFwiUGxheWVyIHZzLiBDb21wdXRlclwiO1xuICAgIGdhbWVNb2RlQ29udGFpbmVyLmFwcGVuZENoaWxkKHB2cE1vZGVCdG4pO1xuICAgIGdhbWVNb2RlQ29udGFpbmVyLmFwcGVuZENoaWxkKHB2Y01vZGVCdG4pO1xuXG4gICAgZ2FtZU1vZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdhbWUtbW9kZS1jb250YWluZXJcIik7XG5cbiAgICBnYW1lTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lVGl0bGVDb250YWluZXIpO1xuICAgIGdhbWVNZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVNb2RlQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJtZW51LWJhY2tncm91bmRcIik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChnYW1lTWVudUNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHB2cE1vZGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlTWVudShib2R5KTtcbiAgICAgICAgcmVzb2x2ZShbaHVtYW4odHJ1ZSksIGh1bWFuKCldKTtcbiAgICAgIH0pO1xuXG4gICAgICBwdmNNb2RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZU1lbnUoYm9keSk7XG4gICAgICAgIHJlc29sdmUoW2h1bWFuKHRydWUpLCBjb21wdXRlcigpXSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IGRyYWdnYWJsZUZyb21PdXRzaWRlIH0gZnJvbSBcIi4vZHJhZ0FuZERyb3BcIjtcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCByYW5kb21TdmcgZnJvbSBcIi4uL2ljb25zL3JhbmRvbS1zdmcuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmlzaGVkUGxhY2luZ1NoaXBzKHBsYXllcikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCByZWFkeVVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWFkeS11cFwiKTtcbiAgICByZWFkeVVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICByZWFkeVVwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVkXCIpO1xuICAgICAgcGxheWVyLnJlYWR5VXAoKTtcbiAgICAgIGNvbnN0IHJhbmRvbVNoaXBQbGFjZW1lbnRTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5yYW5kb20tc2hpcC1wbGFjZW1lbnRcIixcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGJhdHRsZVNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5iYXR0bGVzaGlwLWNvbnRhaW5lclwiLFxuICAgICAgKTtcbiAgICAgIGJhdHRsZVNoaXBDb250YWluZXIucmVtb3ZlQ2hpbGQocmFuZG9tU2hpcFBsYWNlbWVudFN2Zyk7XG5cbiAgICAgIGNvbnN0IHJlYWR5VXBCdXR0b25DbG9uZSA9IHJlYWR5VXBCdXR0b24uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgcmVhZHlVcEJ1dHRvbi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyZWFkeVVwQnV0dG9uQ2xvbmUsIHJlYWR5VXBCdXR0b24pO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVNoaXBQbGFjZW1lbnQocGxheWVyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKSB7XG4gIHBsYXllci5ib2FyZC5yZW1vdmVQbGFjZWRTaGlwcygpO1xuICBjb25zdCBzaGlwT3JpZW50YXRpb25zID0gW1wiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCJdO1xuXG4gIFs1LCA0LCAzLCAzLCAyXS5mb3JFYWNoKChsZW5ndGgpID0+IHtcbiAgICBjb25zdCBwbGFjZW1lbnRQb29sID0gW107XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdyArPSAxKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sICs9IDEpIHtcbiAgICAgICAgcGxhY2VtZW50UG9vbC5wdXNoKFtyb3csIGNvbF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbU9yaWVudGF0aW9uID0gc2hpcE9yaWVudGF0aW9uc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcbiAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwbGFjZW1lbnRQb29sLmxlbmd0aCk7XG4gICAgd2hpbGUgKFxuICAgICAgIXBsYXllci5ib2FyZC5wbGFjZVNoaXAoXG4gICAgICAgIHNoaXAobGVuZ3RoLCByYW5kb21PcmllbnRhdGlvbiksXG4gICAgICAgIHBsYWNlbWVudFBvb2xbcmFuZG9tSW5kZXhdLFxuICAgICAgKVxuICAgICkge1xuICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwbGFjZW1lbnRQb29sLmxlbmd0aCk7XG4gICAgfVxuICB9KTtcblxuICBpZiAocGxheWVyLmlzSHVtYW4gJiYgcGxheWVyLmJvYXJkLmFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICBjb25zdCByZWFkeVVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWFkeS11cFwiKTtcbiAgICByZWFkeVVwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJyZW1vdmVkXCIpO1xuICB9XG5cbiAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJhbmRvbVNoaXBQbGFjZW1lbnRCdXR0b24oXG4gIHBsYXllcixcbiAgcGxheWVycyxcbiAgcmVuZGVyR2FtZUJvYXJkcyxcbikge1xuICBjb25zdCByYW5kb21TaGlwUGxhY2VtZW50U3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgcmFuZG9tU2hpcFBsYWNlbWVudFN2Zy5zcmMgPSByYW5kb21Tdmc7XG4gIHJhbmRvbVNoaXBQbGFjZW1lbnRTdmcuY2xhc3NMaXN0LmFkZChcInJhbmRvbS1zaGlwLXBsYWNlbWVudFwiKTtcblxuICBjb25zdCBiYXR0bGVTaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXR0bGVzaGlwLWNvbnRhaW5lclwiKTtcbiAgYmF0dGxlU2hpcENvbnRhaW5lci5wcmVwZW5kKHJhbmRvbVNoaXBQbGFjZW1lbnRTdmcpO1xuXG4gIHJhbmRvbVNoaXBQbGFjZW1lbnRTdmcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgcmFuZG9tU2hpcFBsYWNlbWVudChwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpLFxuICApO1xuICByYW5kb21TaGlwUGxhY2VtZW50U3ZnLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuZHJhZ2dhYmxlLXNoaXBzLWNvbnRhaW5lclwiLFxuICAgICk7XG4gICAgd2hpbGUgKGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEcmFnZ2FibGVTaGlwRWxlbWVudHMocGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykge1xuICBjb25zdCBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuZHJhZ2dhYmxlLXNoaXBzLWNvbnRhaW5lclwiLFxuICApO1xuICBbNSwgNCwgMywgMywgMl0uZm9yRWFjaCgobGVuZ3RoKSA9PiB7XG4gICAgY29uc3Qgc2hpcENvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNoaXBDb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaGlwLWNvbnRhaW5lclwiLCBgbGVuZ3RoLSR7bGVuZ3RofWApO1xuICAgIHNoaXBDb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XG5cbiAgICBkcmFnZ2FibGVGcm9tT3V0c2lkZShcbiAgICAgIHNoaXBDb250YWluZXJFbGVtZW50LFxuICAgICAgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIsXG4gICAgICBwbGF5ZXJzLFxuICAgICAgcmVuZGVyR2FtZUJvYXJkcyxcbiAgICApO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgY29uc3Qgc2hpcEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2hpcEJvZHkuY2xhc3NMaXN0LmFkZChcInNoaXAtYm9keVwiKTtcbiAgICAgIHNoaXBDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHNoaXBCb2R5KTtcbiAgICB9XG5cbiAgICBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQ29udGFpbmVyRWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoU2hpcE9yaWVudGF0aW9uKGUsIHBsYXllciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykge1xuICBjb25zdCBjb29yZGluYXRlID0gZS50YXJnZXQuaWRcbiAgICAuc3BsaXQoXCItXCIpXG4gICAgLnNsaWNlKC0yKVxuICAgIC5tYXAoKG51bWJlcikgPT4gTnVtYmVyKG51bWJlcikpO1xuICBjb25zdCB0aGVTaGlwID0gcGxheWVyLmJvYXJkLmdldFNoaXBBdChjb29yZGluYXRlKTtcbiAgY29uc3Qgc2hpcEhlYWRDb29yZGluYXRlID0gcGxheWVyLmJvYXJkLmdldFNoaXBIZWFkQ29vcmRpbmF0ZSh0aGVTaGlwKTtcbiAgY29uc3Qgc3dpdGNoZWRPcmllbnRhdGlvbiA9XG4gICAgdGhlU2hpcC5vcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsXCI7XG5cbiAgY29uc3Qgc3dpdGNoZWRTaGlwQ29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmRcbiAgICAuZ2V0Q29vcmRzRnJvbVN0YXJ0aW5nQ29vcmQoXG4gICAgICBzaGlwSGVhZENvb3JkaW5hdGUsXG4gICAgICBzd2l0Y2hlZE9yaWVudGF0aW9uLFxuICAgICAgdGhlU2hpcC5sZW5ndGgsXG4gICAgKVxuICAgIC5zbGljZSgxKTtcbiAgaWYgKHBsYXllci5ib2FyZC52YWxpZFNoaXBQbGFjZW1lbnQoc3dpdGNoZWRTaGlwQ29vcmRpbmF0ZXMpKSB7XG4gICAgdGhlU2hpcC5vcmllbnRhdGlvbiA9IHN3aXRjaGVkT3JpZW50YXRpb247XG4gICAgcGxheWVyLmJvYXJkLnJlbW92ZVBsYWNlZFNoaXAocGxheWVyLmJvYXJkLmdldFNoaXBDb29yZGluYXRlcyh0aGVTaGlwKSk7XG4gICAgcGxheWVyLmJvYXJkLnBsYWNlU2hpcCh0aGVTaGlwLCBzaGlwSGVhZENvb3JkaW5hdGUpO1xuXG4gICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBnYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5cbmZ1bmN0aW9uIHBsYXllcigpIHtcbiAgY29uc3QgYm9hcmQgPSBnYW1lQm9hcmQoKTtcblxuICBjb25zdCBpc1JlYWR5ID0gZmFsc2U7XG4gIGNvbnN0IHJlYWR5VXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBzd2l0Y2hUdXJuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubXlUdXJuID0gIXRoaXMubXlUdXJuO1xuICB9O1xuXG4gIHJldHVybiB7IHJlYWR5VXAsIHN3aXRjaFR1cm4sIGJvYXJkLCBpc1JlYWR5IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodW1hbihteVR1cm4gPSBmYWxzZSkge1xuICBjb25zdCBuYW1lID0gbXlUdXJuID8gXCJQbGF5ZXIgMVwiIDogXCJQbGF5ZXIgMlwiO1xuICBjb25zdCBpc0h1bWFuID0gdHJ1ZTtcblxuICByZXR1cm4geyAuLi5wbGF5ZXIoKSwgaXNIdW1hbiwgbXlUdXJuLCBuYW1lIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlcihteVR1cm4gPSBmYWxzZSkge1xuICBjb25zdCBuYW1lID0gXCJQbGF5ZXIgMlwiO1xuICBjb25zdCBpc0h1bWFuID0gZmFsc2U7XG5cbiAgbGV0IGluaXRpYWxIaXQgPSBudWxsO1xuICBsZXQgcHJldmlvdXNBdHRhY2tIaXQgPSBmYWxzZTtcbiAgbGV0IGhpdEhpc3RvcnkgPSBbXTtcbiAgbGV0IGF0dGFja1N0YWNrID0gW107XG4gIGNvbnN0IGF0dGFjayA9IGZ1bmN0aW9uIChvcHBvbmVudCkge1xuICAgIGlmIChpbml0aWFsSGl0KSB7XG4gICAgICBjb25zdCBhdHRhY2tlZFNoaXAgPSBvcHBvbmVudC5ib2FyZC5nZXRTaGlwQXQoaW5pdGlhbEhpdCk7XG4gICAgICBpZiAoYXR0YWNrZWRTaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIGNvbnN0IHN1bmtTaGlwQ29vcmRpbmF0ZXMgPSBhdHRhY2tlZFNoaXAuaGl0Q29vcmRpbmF0ZXMubWFwKFxuICAgICAgICAgIChoaXRDb29yZGluYXRlKSA9PiBKU09OLnN0cmluZ2lmeShoaXRDb29yZGluYXRlKSxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgaGl0SGlzdG9yeS5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgaWYgKCFzdW5rU2hpcENvb3JkaW5hdGVzLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGUpKSkge1xuICAgICAgICAgICAgcmVtYWluaW5nQ29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBoaXRIaXN0b3J5ID0gcmVtYWluaW5nQ29vcmRpbmF0ZXM7XG4gICAgICAgIGF0dGFja1N0YWNrID0gW107XG5cbiAgICAgICAgaWYgKGhpdEhpc3RvcnkubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICBpbml0aWFsSGl0ID0gaGl0SGlzdG9yeS5wb3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbml0aWFsSGl0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbml0aWFsSGl0ICYmIGF0dGFja1N0YWNrLmxlbmd0aCA9PT0gMCAmJiBoaXRIaXN0b3J5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgcG9zc2libGVBdHRhY2tzID0gW107XG4gICAgICBwb3NzaWJsZUF0dGFja3MucHVzaChbaW5pdGlhbEhpdFswXSwgaW5pdGlhbEhpdFsxXSArIDFdKTtcbiAgICAgIHBvc3NpYmxlQXR0YWNrcy5wdXNoKFtpbml0aWFsSGl0WzBdLCBpbml0aWFsSGl0WzFdIC0gMV0pO1xuICAgICAgcG9zc2libGVBdHRhY2tzLnB1c2goW2luaXRpYWxIaXRbMF0gKyAxLCBpbml0aWFsSGl0WzFdXSk7XG4gICAgICBwb3NzaWJsZUF0dGFja3MucHVzaChbaW5pdGlhbEhpdFswXSAtIDEsIGluaXRpYWxIaXRbMV1dKTtcbiAgICAgIHBvc3NpYmxlQXR0YWNrcy5mb3JFYWNoKChwb3NzaWJsZUF0dGFjaykgPT4ge1xuICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmQuaXNBdHRhY2thYmxlKHBvc3NpYmxlQXR0YWNrKSkge1xuICAgICAgICAgIGF0dGFja1N0YWNrLnB1c2gocG9zc2libGVBdHRhY2spO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGluaXRpYWxIaXQgJiYgaGl0SGlzdG9yeS5sZW5ndGggPj0gMSAmJiBwcmV2aW91c0F0dGFja0hpdCkge1xuICAgICAgY29uc3QgbGFzdEhpdCA9IGhpdEhpc3RvcnlbaGl0SGlzdG9yeS5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnN0IHgxID0gaW5pdGlhbEhpdFsxXTtcbiAgICAgIGNvbnN0IHkxID0gaW5pdGlhbEhpdFswXTtcbiAgICAgIGNvbnN0IHgyID0gbGFzdEhpdFsxXTtcbiAgICAgIGNvbnN0IHkyID0gbGFzdEhpdFswXTtcblxuICAgICAgY29uc3QgeERpZmYgPSB4MSAtIHgyO1xuICAgICAgY29uc3QgeURpZmYgPSB5MSAtIHkyO1xuXG4gICAgICBpZiAoeERpZmYgPCAwKSB7XG4gICAgICAgIC8vIHJpZ2h0XG4gICAgICAgIGNvbnN0IHJpZ2h0T25lID0gW2xhc3RIaXRbMF0sIGxhc3RIaXRbMV0gKyAxXTtcbiAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkLmlzQXR0YWNrYWJsZShyaWdodE9uZSkpIHtcbiAgICAgICAgICBhdHRhY2tTdGFjay5wdXNoKHJpZ2h0T25lKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh4RGlmZiA+IDApIHtcbiAgICAgICAgLy8gbGVmdFxuICAgICAgICBjb25zdCBsZWZ0T25lID0gW2xhc3RIaXRbMF0sIGxhc3RIaXRbMV0gLSAxXTtcbiAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkLmlzQXR0YWNrYWJsZShsZWZ0T25lKSkge1xuICAgICAgICAgIGF0dGFja1N0YWNrLnB1c2gobGVmdE9uZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoeURpZmYgPCAwKSB7XG4gICAgICAgIC8vIHVwXG4gICAgICAgIGNvbnN0IHVwT25lID0gW2xhc3RIaXRbMF0gKyAxLCBsYXN0SGl0WzFdXTtcbiAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkLmlzQXR0YWNrYWJsZSh1cE9uZSkpIHtcbiAgICAgICAgICBhdHRhY2tTdGFjay5wdXNoKHVwT25lKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh5RGlmZiA+IDApIHtcbiAgICAgICAgLy8gZG93blxuICAgICAgICBjb25zdCBkb3duT25lID0gW2xhc3RIaXRbMF0gLSAxLCBsYXN0SGl0WzFdXTtcbiAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkLmlzQXR0YWNrYWJsZShkb3duT25lKSkge1xuICAgICAgICAgIGF0dGFja1N0YWNrLnB1c2goZG93bk9uZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXR0YWNrU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGF0dGFja1N0YWNrLnBvcCgpO1xuICAgIH1cbiAgICBpZiAoYXR0YWNrU3RhY2subGVuZ3RoIDw9IDApIHtcbiAgICAgIGNvbnN0IGF0dGFja1Bvb2wgPSBbXTtcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3cgKz0gMSkge1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sICs9IDEpIHtcbiAgICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmQuaXNBdHRhY2thYmxlKFtyb3csIGNvbF0pKSB7XG4gICAgICAgICAgICBhdHRhY2tQb29sLnB1c2goW3JvdywgY29sXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGF0dGFja1Bvb2wubGVuZ3RoIC0gMSkpO1xuICAgICAgY29uc3QgcmFuZG9tQXR0YWNrID0gYXR0YWNrUG9vbFtyYW5kb21JbmRleF07XG4gICAgICByZXR1cm4gcmFuZG9tQXR0YWNrO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgbG9nQXR0YWNrID0gKGlzSGl0LCBjb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKGlzSGl0ICYmICFpbml0aWFsSGl0KSB7XG4gICAgICBpbml0aWFsSGl0ID0gY29vcmRpbmF0ZTtcbiAgICAgIHByZXZpb3VzQXR0YWNrSGl0ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGlzSGl0KSB7XG4gICAgICBoaXRIaXN0b3J5LnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICBwcmV2aW91c0F0dGFja0hpdCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZXZpb3VzQXR0YWNrSGl0ID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IC4uLnBsYXllcigpLCBhdHRhY2ssIGxvZ0F0dGFjaywgaXNIdW1hbiwgbXlUdXJuLCBuYW1lIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlwKGxlbmd0aCwgb3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCIpIHtcbiAgY29uc3QgaGl0Q29vcmRpbmF0ZXMgPSBbXTtcblxuICBjb25zdCBoaXQgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGhpdENvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgcmV0dXJuIGhpdENvb3JkaW5hdGVzO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IGxlbmd0aCAtIGhpdENvb3JkaW5hdGVzLmxlbmd0aCA8PSAwO1xuXG4gIHJldHVybiB7IGxlbmd0aCwgb3JpZW50YXRpb24sIGhpdENvb3JkaW5hdGVzLCBoaXQsIGlzU3VuayB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInZhciB3ZWJwYWNrUXVldWVzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBxdWV1ZXNcIikgOiBcIl9fd2VicGFja19xdWV1ZXNfX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgd2VicGFja0Vycm9yID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBlcnJvclwiKSA6IFwiX193ZWJwYWNrX2Vycm9yX19cIjtcbnZhciByZXNvbHZlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUgJiYgcXVldWUuZCA8IDEpIHtcblx0XHRxdWV1ZS5kID0gMTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gLTEpO1xuXHR2YXIgZGVwUXVldWVzID0gbmV3IFNldCgpO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSByZXNvbHZlO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAocXVldWUgJiYgZm4ocXVldWUpLCBkZXBRdWV1ZXMuZm9yRWFjaChmbiksIHByb21pc2VbXCJjYXRjaFwiXSh4ID0+IHt9KSk7XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0Ym9keSgoZGVwcykgPT4ge1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuO1xuXHRcdHZhciBnZXRSZXN1bHQgPSAoKSA9PiAoY3VycmVudERlcHMubWFwKChkKSA9PiB7XG5cdFx0XHRpZihkW3dlYnBhY2tFcnJvcl0pIHRocm93IGRbd2VicGFja0Vycm9yXTtcblx0XHRcdHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTtcblx0XHR9KSlcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKGdldFJlc3VsdCkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR2YXIgZm5RdWV1ZSA9IChxKSA9PiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkgJiYgKGRlcFF1ZXVlcy5hZGQocSksIHEgJiYgIXEuZCAmJiAoZm4ucisrLCBxLnB1c2goZm4pKSkpO1xuXHRcdFx0Y3VycmVudERlcHMubWFwKChkZXApID0+IChkZXBbd2VicGFja1F1ZXVlc10oZm5RdWV1ZSkpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiBnZXRSZXN1bHQoKTtcblx0fSwgKGVycikgPT4gKChlcnIgPyByZWplY3QocHJvbWlzZVt3ZWJwYWNrRXJyb3JdID0gZXJyKSA6IG91dGVyUmVzb2x2ZShleHBvcnRzKSksIHJlc29sdmVRdWV1ZShxdWV1ZSkpKTtcblx0cXVldWUgJiYgcXVldWUuZCA8IDAgJiYgKHF1ZXVlLmQgPSAwKTtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
