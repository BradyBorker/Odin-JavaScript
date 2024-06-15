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
  box-shadow: 0px 0px 5px 4px #c0c0cc;
}
`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;;EAEb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE;;;;0EAIwE;EACxE,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE;;;;;GAKC;EACD,0DAA0D;EAC1D,yBAAyB;AAC3B;;AAEA;;;EAGE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA,SAAS;AACT;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;;EAEnB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;;EAElB,kBAAkB;EAClB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;;EAET,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;;EAElB,aAAa;EACb,wCAAwC;EACxC,YAAY;AACd;;AAEA;EACE,kDAAkD;AACpD;;AAEA,4BAA4B;AAC5B;EACE,WAAW;EACX,YAAY;;EAEZ,mGAAmG;EACnG;iBACe;AACjB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;;EAElB,aAAa;EACb,wCAAwC;EACxC,YAAY;AACd;;AAEA,oBAAoB;AACpB;EACE,iBAAiB;;EAEjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;;EAEE,YAAY;EACZ,iBAAiB;;EAEjB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ;kCACgC;AAClC;;AAEA;EACE;kBACgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA,0BAA0B;AAC1B;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,yBAAyB;;EAEzB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA,eAAe;AACf;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,YAAY;;EAEZ,aAAa;AACf;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA,oBAAoB;AACpB;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,wCAAwC;;EAExC,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,kBAAkB;;EAElB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;;EAElB,aAAa;EACb,wCAAwC;EACxC,YAAY;AACd;;AAEA;EACE,mCAAmC;AACrC",
            sourcesContent: [
              '@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");\n\n* {\n  font-family: "IBM Plex Mono", monospace;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu-background {\n  background:\n    radial-gradient(black 15%, transparent 16%) 0 0,\n    radial-gradient(black 15%, transparent 16%) 8px 8px,\n    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px,\n    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 8px 9px;\n  background-color: #282828;\n  background-size: 16px 16px;\n}\n\n.game-background {\n  background: linear-gradient(\n    0deg,\n    rgba(194, 178, 128, 1) 0%,\n    rgba(194, 178, 128, 1) 0%,\n    rgba(35, 137, 218, 1) 20%\n  );\n  box-shadow: inset 0px 0px 23px 12px rgba(194, 178, 128, 1);\n  border: 2px inset #c2b280;\n}\n\n.removed,\n.battleship-container.removed,\n.gameover-modal.removed {\n  display: none;\n}\n\n.hidden {\n  opacity: 0;\n  pointer-events: none;\n}\n\n/* Menu */\n.game-menu-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  padding: 25px;\n}\n\n.game-title-container {\n  font-weight: 700;\n  font-style: normal;\n\n  text-align: center;\n  font-size: 72px;\n  color: #c0c0c0;\n}\n\n.game-mode-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  max-width: 250px;\n}\n\n.game-mode-container button {\n  font-weight: 700;\n  font-style: normal;\n\n  padding: 10px;\n  background-color: rgba(194, 178, 128, 1);\n  color: black;\n}\n\n.game-mode-container button:hover {\n  box-shadow: 0px 0px 5px 4px rgba(194, 178, 128, 1);\n}\n\n/* Battleship Game Buttons */\n.random-ship-placement {\n  width: 35px;\n  height: 35px;\n\n  /* filter: invert(81%) sepia(0%) saturate(94%) hue-rotate(134deg) brightness(93%) contrast(101%); */\n  filter: invert(78%) sepia(15%) saturate(728%) hue-rotate(8deg) brightness(90%)\n    contrast(89%);\n}\n\n.ready-up {\n  font-weight: 700;\n  font-style: normal;\n\n  padding: 10px;\n  background-color: rgba(194, 178, 128, 1);\n  color: black;\n}\n\n/* Battleship Game */\n.battleship-container {\n  max-width: 1200px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.player-boards {\n  display: flex;\n  justify-content: space-between;\n}\n\n.player1-board,\n.player2-board {\n  width: 500px;\n  min-height: 500px;\n\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.tile {\n  border: 1px solid #a8b0b2;\n}\n\n.tile.valid-placement {\n  background-color: #99a3a3;\n}\n\n.tile.ship {\n  background-color: #070809;\n}\n\n.tile.hit {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.tile.hit.sunk {\n  background-color: #dc143c;\n}\n\n.tile.hit img {\n  width: 100%;\n  height: 100%;\n\n  filter: invert(18%) sepia(48%) saturate(5244%) hue-rotate(335deg)\n    brightness(95%) contrast(104%);\n}\n\n.tile.hit.sunk img {\n  filter: invert(7%) sepia(4%) saturate(596%) hue-rotate(170deg) brightness(89%)\n    contrast(107%);\n}\n\n.tile.missed {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: #a8b0b2;\n  opacity: 0.5;\n}\n\n.tile.missed img {\n  width: 100%;\n  height: 100%;\n}\n\n/* Ship pieces container */\n.draggable-ships-container {\n  width: 50px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.ship-container {\n  width: 25px;\n  border: 1px solid white;\n  background-color: #070809;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.ship-body {\n  min-height: 25px;\n  border: 1px solid #a8b0b2;\n  background-color: #070809;\n}\n\n/* Ghost Ship */\n#ghost-ship {\n  position: absolute;\n  top: -1000px;\n}\n\n.horizontal {\n  height: 25px;\n\n  display: flex;\n}\n\n.vertical {\n  width: 25px;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.ghost-ship-body {\n  height: 100%;\n  width: 100%;\n  border: 1px solid #a8b0b2;\n  background-color: #070809;\n}\n\n/* Game Over Modal */\n.gameover-modal {\n  width: 300px;\n  min-height: 100px;\n  padding: 15px;\n  background-color: rgba(194, 178, 128, 1);\n\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.gameover-modal .winner-name {\n  font-size: 32px;\n}\n\n.gameover-modal button {\n  font-weight: 700;\n  font-style: normal;\n\n  padding: 10px;\n  background-color: rgba(194, 178, 128, 1);\n  color: black;\n}\n\n.gameover-modal button:hover {\n  box-shadow: 0px 0px 5px 4px #c0c0cc;\n}\n',
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

          const isHitAt = (coordinate) =>
            hitAttacks
              .map((attack) => JSON.stringify(attack))
              .includes(JSON.stringify(coordinate));

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
            isHitAt,
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
                previousAttackHit = false;

                if (hitHistory.length >= 1) {
                  initialHit = hitHistory.pop();
                } else {
                  initialHit = null;
                }
              }
            }

            if (initialHit && previousAttackHit) {
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
            } else if (initialHit && attackStack.length <= 0) {
              let upOne = [initialHit[0] + 1, initialHit[1]];
              while (
                opponent.board.isHitAt(upOne) &&
                !opponent.board.getShipAt(upOne).isSunk()
              ) {
                upOne = [upOne[0] + 1, upOne[1]];
              }
              if (opponent.board.isAttackable(upOne)) {
                attackStack.push(upOne);
              }

              let downOne = [initialHit[0] - 1, initialHit[1]];
              while (
                opponent.board.isHitAt(downOne) &&
                !opponent.board.getShipAt(downOne).isSunk()
              ) {
                downOne = [downOne[0] + 1, downOne[1]];
              }
              if (opponent.board.isAttackable(downOne)) {
                attackStack.push(downOne);
              }

              let rightOne = [initialHit[0], initialHit[1] + 1];
              while (
                opponent.board.isHitAt(rightOne) &&
                !opponent.board.getShipAt(rightOne).isSunk()
              ) {
                rightOne = [rightOne[0], rightOne[1] + 1];
              }
              if (opponent.board.isAttackable(rightOne)) {
                attackStack.push(rightOne);
              }

              let leftOne = [initialHit[0], initialHit[1] - 1];
              while (
                opponent.board.isHitAt(leftOne) &&
                !opponent.board.getShipAt(leftOne).isSunk()
              ) {
                leftOne = [leftOne[0] + 1, leftOne[1]];
              }
              if (opponent.board.isAttackable(leftOne)) {
                attackStack.push(leftOne);
              }
            }

            if (attackStack.length > 0) {
              const attackCoord = attackStack.pop();

              return attackCoord;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDZIQUE2SCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQkFBb0I7QUFDek47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvR0FBb0c7QUFDcEc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxRQUFRLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxTQUFTLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxNQUFNLEtBQUssWUFBWSxjQUFjLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxXQUFXLFlBQVksTUFBTSxNQUFNLE9BQU8sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsYUFBYSxXQUFXLFlB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBLEVBQUU7V0FDRjtXQUNBOzs7OztXQ2hFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9iYXR0bGVzaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2RyYWdBbmREcm9wLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3BsYWNlU2hpcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUlCTStQbGV4K01vbm86aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IE1vbm9cIiwgbW9ub3NwYWNlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVudS1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDpcbiAgICByYWRpYWwtZ3JhZGllbnQoYmxhY2sgMTUlLCB0cmFuc3BhcmVudCAxNiUpIDAgMCxcbiAgICByYWRpYWwtZ3JhZGllbnQoYmxhY2sgMTUlLCB0cmFuc3BhcmVudCAxNiUpIDhweCA4cHgsXG4gICAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAxNSUsIHRyYW5zcGFyZW50IDIwJSkgMCAxcHgsXG4gICAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAxNSUsIHRyYW5zcGFyZW50IDIwJSkgOHB4IDlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcbiAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG59XG5cbi5nYW1lLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMGRlZyxcbiAgICByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpIDAlLFxuICAgIHJnYmEoMTk0LCAxNzgsIDEyOCwgMSkgMCUsXG4gICAgcmdiYSgzNSwgMTM3LCAyMTgsIDEpIDIwJVxuICApO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDIzcHggMTJweCByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xuICBib3JkZXI6IDJweCBpbnNldCAjYzJiMjgwO1xufVxuXG4ucmVtb3ZlZCxcbi5iYXR0bGVzaGlwLWNvbnRhaW5lci5yZW1vdmVkLFxuLmdhbWVvdmVyLW1vZGFsLnJlbW92ZWQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qIE1lbnUgKi9cbi5nYW1lLW1lbnUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4uZ2FtZS10aXRsZS1jb250YWluZXIge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG5cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDcycHg7XG4gIGNvbG9yOiAjYzBjMGMwO1xufVxuXG4uZ2FtZS1tb2RlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcblxuICBtYXgtd2lkdGg6IDI1MHB4O1xufVxuXG4uZ2FtZS1tb2RlLWNvbnRhaW5lciBidXR0b24ge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG5cbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZ2FtZS1tb2RlLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA0cHggcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcbn1cblxuLyogQmF0dGxlc2hpcCBHYW1lIEJ1dHRvbnMgKi9cbi5yYW5kb20tc2hpcC1wbGFjZW1lbnQge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuXG4gIC8qIGZpbHRlcjogaW52ZXJ0KDgxJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDk0JSkgaHVlLXJvdGF0ZSgxMzRkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCgxMDElKTsgKi9cbiAgZmlsdGVyOiBpbnZlcnQoNzglKSBzZXBpYSgxNSUpIHNhdHVyYXRlKDcyOCUpIGh1ZS1yb3RhdGUoOGRlZykgYnJpZ2h0bmVzcyg5MCUpXG4gICAgY29udHJhc3QoODklKTtcbn1cblxuLnJlYWR5LXVwIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuXG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk0LCAxNzgsIDEyOCwgMSk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogQmF0dGxlc2hpcCBHYW1lICovXG4uYmF0dGxlc2hpcC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5wbGF5ZXItYm9hcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucGxheWVyMS1ib2FyZCxcbi5wbGF5ZXIyLWJvYXJkIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtaW4taGVpZ2h0OiA1MDBweDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi50aWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E4YjBiMjtcbn1cblxuLnRpbGUudmFsaWQtcGxhY2VtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5YTNhMztcbn1cblxuLnRpbGUuc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzA4MDk7XG59XG5cbi50aWxlLmhpdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aWxlLmhpdC5zdW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMTQzYztcbn1cblxuLnRpbGUuaGl0IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSg0OCUpIHNhdHVyYXRlKDUyNDQlKSBodWUtcm90YXRlKDMzNWRlZylcbiAgICBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoMTA0JSk7XG59XG5cbi50aWxlLmhpdC5zdW5rIGltZyB7XG4gIGZpbHRlcjogaW52ZXJ0KDclKSBzZXBpYSg0JSkgc2F0dXJhdGUoNTk2JSkgaHVlLXJvdGF0ZSgxNzBkZWcpIGJyaWdodG5lc3MoODklKVxuICAgIGNvbnRyYXN0KDEwNyUpO1xufVxuXG4udGlsZS5taXNzZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThiMGIyO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi50aWxlLm1pc3NlZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBTaGlwIHBpZWNlcyBjb250YWluZXIgKi9cbi5kcmFnZ2FibGUtc2hpcHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDUwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLnNoaXAtY29udGFpbmVyIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwODA5O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaGlwLWJvZHkge1xuICBtaW4taGVpZ2h0OiAyNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYThiMGIyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwODA5O1xufVxuXG4vKiBHaG9zdCBTaGlwICovXG4jZ2hvc3Qtc2hpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTAwMHB4O1xufVxuXG4uaG9yaXpvbnRhbCB7XG4gIGhlaWdodDogMjVweDtcblxuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udmVydGljYWwge1xuICB3aWR0aDogMjVweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZ2hvc3Qtc2hpcC1ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E4YjBiMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3MDgwOTtcbn1cblxuLyogR2FtZSBPdmVyIE1vZGFsICovXG4uZ2FtZW92ZXItbW9kYWwge1xuICB3aWR0aDogMzAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdhbWVvdmVyLW1vZGFsIC53aW5uZXItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLmdhbWVvdmVyLW1vZGFsIGJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcblxuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5nYW1lb3Zlci1tb2RhbCBidXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA0cHggI2MwYzBjYztcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTs7RUFFYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTs7OzswRUFJd0U7RUFDeEUseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFOzs7OztHQUtDO0VBQ0QsMERBQTBEO0VBQzFELHlCQUF5QjtBQUMzQjs7QUFFQTs7O0VBR0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjs7RUFFbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTOztFQUVULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7O0VBRWxCLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0RBQWtEO0FBQ3BEOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLFdBQVc7RUFDWCxZQUFZOztFQUVaLG1HQUFtRztFQUNuRztpQkFDZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7O0VBRWxCLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMsWUFBWTtBQUNkOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGlCQUFpQjs7RUFFakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osaUJBQWlCOztFQUVqQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0VBRVo7a0NBQ2dDO0FBQ2xDOztBQUVBO0VBQ0U7a0JBQ2dCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLFdBQVc7O0VBRVgsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIseUJBQXlCOztFQUV6QixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUEsZUFBZTtBQUNmO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7O0VBRVosYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVzs7RUFFWCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHdDQUF3Qzs7RUFFeEMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixrQkFBa0I7O0VBRWxCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCOztFQUVsQixhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JQk0rUGxleCtNb25vOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSUJNIFBsZXggTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQ6XFxuICAgIHJhZGlhbC1ncmFkaWVudChibGFjayAxNSUsIHRyYW5zcGFyZW50IDE2JSkgMCAwLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoYmxhY2sgMTUlLCB0cmFuc3BhcmVudCAxNiUpIDhweCA4cHgsXFxuICAgIHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMTUlLCB0cmFuc3BhcmVudCAyMCUpIDAgMXB4LFxcbiAgICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDE1JSwgdHJhbnNwYXJlbnQgMjAlKSA4cHggOXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xcbn1cXG5cXG4uZ2FtZS1iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMGRlZyxcXG4gICAgcmdiYSgxOTQsIDE3OCwgMTI4LCAxKSAwJSxcXG4gICAgcmdiYSgxOTQsIDE3OCwgMTI4LCAxKSAwJSxcXG4gICAgcmdiYSgzNSwgMTM3LCAyMTgsIDEpIDIwJVxcbiAgKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjNweCAxMnB4IHJnYmEoMTk0LCAxNzgsIDEyOCwgMSk7XFxuICBib3JkZXI6IDJweCBpbnNldCAjYzJiMjgwO1xcbn1cXG5cXG4ucmVtb3ZlZCxcXG4uYmF0dGxlc2hpcC1jb250YWluZXIucmVtb3ZlZCxcXG4uZ2FtZW92ZXItbW9kYWwucmVtb3ZlZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLyogTWVudSAqL1xcbi5nYW1lLW1lbnUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIHBhZGRpbmc6IDI1cHg7XFxufVxcblxcbi5nYW1lLXRpdGxlLWNvbnRhaW5lciB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcblxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA3MnB4O1xcbiAgY29sb3I6ICNjMGMwYzA7XFxufVxcblxcbi5nYW1lLW1vZGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcblxcbiAgbWF4LXdpZHRoOiAyNTBweDtcXG59XFxuXFxuLmdhbWUtbW9kZS1jb250YWluZXIgYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuXFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmdhbWUtbW9kZS1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDRweCByZ2JhKDE5NCwgMTc4LCAxMjgsIDEpO1xcbn1cXG5cXG4vKiBCYXR0bGVzaGlwIEdhbWUgQnV0dG9ucyAqL1xcbi5yYW5kb20tc2hpcC1wbGFjZW1lbnQge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuXFxuICAvKiBmaWx0ZXI6IGludmVydCg4MSUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg5NCUpIGh1ZS1yb3RhdGUoMTM0ZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoMTAxJSk7ICovXFxuICBmaWx0ZXI6IGludmVydCg3OCUpIHNlcGlhKDE1JSkgc2F0dXJhdGUoNzI4JSkgaHVlLXJvdGF0ZSg4ZGVnKSBicmlnaHRuZXNzKDkwJSlcXG4gICAgY29udHJhc3QoODklKTtcXG59XFxuXFxuLnJlYWR5LXVwIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuXFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsIDE3OCwgMTI4LCAxKTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLyogQmF0dGxlc2hpcCBHYW1lICovXFxuLmJhdHRsZXNoaXAtY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucGxheWVyMS1ib2FyZCxcXG4ucGxheWVyMi1ib2FyZCB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4udGlsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYThiMGIyO1xcbn1cXG5cXG4udGlsZS52YWxpZC1wbGFjZW1lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5YTNhMztcXG59XFxuXFxuLnRpbGUuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwODA5O1xcbn1cXG5cXG4udGlsZS5oaXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGlsZS5oaXQuc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMxNDNjO1xcbn1cXG5cXG4udGlsZS5oaXQgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSg0OCUpIHNhdHVyYXRlKDUyNDQlKSBodWUtcm90YXRlKDMzNWRlZylcXG4gICAgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDEwNCUpO1xcbn1cXG5cXG4udGlsZS5oaXQuc3VuayBpbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoNyUpIHNlcGlhKDQlKSBzYXR1cmF0ZSg1OTYlKSBodWUtcm90YXRlKDE3MGRlZykgYnJpZ2h0bmVzcyg4OSUpXFxuICAgIGNvbnRyYXN0KDEwNyUpO1xcbn1cXG5cXG4udGlsZS5taXNzZWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGIwYjI7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50aWxlLm1pc3NlZCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIFNoaXAgcGllY2VzIGNvbnRhaW5lciAqL1xcbi5kcmFnZ2FibGUtc2hpcHMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA1MHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMjVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3MDgwOTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2hpcC1ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDI1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYThiMGIyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3MDgwOTtcXG59XFxuXFxuLyogR2hvc3QgU2hpcCAqL1xcbiNnaG9zdC1zaGlwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTEwMDBweDtcXG59XFxuXFxuLmhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAyNXB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnZlcnRpY2FsIHtcXG4gIHdpZHRoOiAyNXB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5naG9zdC1zaGlwLWJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYThiMGIyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3MDgwOTtcXG59XFxuXFxuLyogR2FtZSBPdmVyIE1vZGFsICovXFxuLmdhbWVvdmVyLW1vZGFsIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk0LCAxNzgsIDEyOCwgMSk7XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZW92ZXItbW9kYWwgLndpbm5lci1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuLmdhbWVvdmVyLW1vZGFsIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcblxcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk0LCAxNzgsIDEyOCwgMSk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5nYW1lb3Zlci1tb2RhbCBidXR0b246aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNHB4ICNjMGMwY2M7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCBmaW5pc2hlZFBsYWNpbmdTaGlwcywge1xuICBjcmVhdGVSYW5kb21TaGlwUGxhY2VtZW50QnV0dG9uLFxuICByYW5kb21TaGlwUGxhY2VtZW50LFxuICBjcmVhdGVEcmFnZ2FibGVTaGlwRWxlbWVudHMsXG4gIHN3aXRjaFNoaXBPcmllbnRhdGlvbixcbn0gZnJvbSBcIi4vcGxhY2VTaGlwc1wiO1xuaW1wb3J0IHtcbiAgZHJhZ2dhYmxlRnJvbUluc2lkZSxcbiAgZHJvcHBhYmxlRnJvbUluc2lkZSxcbiAgZHJvcHBhYmxlRnJvbU91dHNpZGUsXG4gIGRyb3BwYWJsZUhvdmVyRmVlZGJhY2ssXG59IGZyb20gXCIuL2RyYWdBbmREcm9wXCI7XG5pbXBvcnQgZXhwbG9zaW9uU3ZnIGZyb20gXCIuLi9pY29ucy9ib21iLWV4cGxvc2lvbi1zdmcuc3ZnXCI7XG5pbXBvcnQgc21hbGxEb3RTZyBmcm9tIFwiLi4vaWNvbnMvc21hbGwtZG90LnN2Z1wiO1xuXG5mdW5jdGlvbiBzd2l0Y2hUdXJuKHBsYXllcnMpIHtcbiAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICBwbGF5ZXIuc3dpdGNoVHVybigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNHYW1lT3ZlcihwbGF5ZXJzKSB7XG4gIGNvbnN0IGxvc2VyID0gcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gcGxheWVyLmJvYXJkLmFsbFN1bmsoKSk7XG4gIGlmIChsb3Nlci5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgW3dpbm5lcl0gPSBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiAhcGxheWVyLmJvYXJkLmFsbFN1bmsoKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lb3Zlci1tb2RhbFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicmVtb3ZlZFwiKTtcbiAgICBjb25zdCBtb2RhbFdpbm5lck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lci1uYW1lXCIpO1xuICAgIG1vZGFsV2lubmVyTmFtZS50ZXh0Q29udGVudCA9IGAke3dpbm5lci5uYW1lfSBXb24hYDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1ha2VBdHRhY2socGxheWVycywgY29vcmRpbmF0ZSkge1xuICBsZXQgW2F0dGFja2VkUGxheWVyXSA9IHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+ICFwbGF5ZXIubXlUdXJuKTtcbiAgbGV0IFthdHRhY2tpbmdQbGF5ZXJdID0gcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gcGxheWVyLm15VHVybik7XG5cbiAgaWYgKCFhdHRhY2tpbmdQbGF5ZXIuaXNIdW1hbikge1xuICAgIGF0dGFja2luZ1BsYXllci5sb2dBdHRhY2soXG4gICAgICBhdHRhY2tlZFBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpLFxuICAgICAgY29vcmRpbmF0ZSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGF0dGFja2VkUGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XG4gIH1cblxuICBpZiAoaXNHYW1lT3ZlcihwbGF5ZXJzKSkge1xuICAgIHJlbmRlckdhbWVCb2FyZHMocGxheWVycywge30sIFtdLCB0cnVlKTtcbiAgfVxuICBzd2l0Y2hUdXJuKHBsYXllcnMpO1xuICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpO1xuXG4gIC8vIENvbXB1dGVyIEF0dGFja1xuICBbYXR0YWNrZWRQbGF5ZXJdID0gcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gIXBsYXllci5teVR1cm4pO1xuICBbYXR0YWNraW5nUGxheWVyXSA9IHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+IHBsYXllci5teVR1cm4pO1xuICBpZiAoIWF0dGFja2luZ1BsYXllci5pc0h1bWFuKSB7XG4gICAgY29uc3QgYXR0YWNrQ29vcmRpbmF0ZSA9IGF0dGFja2luZ1BsYXllci5hdHRhY2soYXR0YWNrZWRQbGF5ZXIpO1xuICAgIG1ha2VBdHRhY2socGxheWVycywgYXR0YWNrQ29vcmRpbmF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyR2FtZUJvYXJkcyhcbiAgcGxheWVycyxcbiAgZHJhZ0RhdGEgPSB7fSxcbiAgcHJlc2VydmVkQ29vcmRzID0gW10sXG4gIGdhbWVPdmVyID0gZmFsc2UsXG4pIHtcbiAgY29uc3QgW3BsYXllcjEsIHBsYXllcjJdID0gcGxheWVycztcbiAgY29uc3QgcGxheWVyVnNDb21wdXRlciA9ICEocGxheWVyMS5pc0h1bWFuICYmIHBsYXllcjIuaXNIdW1hbik7XG4gIGNvbnN0IHBsYXllclBsYWNpbmdTaGlwcyA9IHBsYXllcnMuZmluZCgocGxheWVyKSA9PiAhcGxheWVyLmlzUmVhZHkpO1xuXG4gIHBsYXllcnMuZm9yRWFjaCgocGxheWVyLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXIke2luZGV4ICsgMX0tYm9hcmRgKTtcbiAgICBjb25zdCBoaXRDb29yZGluYXRlcyA9IHBsYXllci5ib2FyZC5oaXRBdHRhY2tzO1xuICAgIGNvbnN0IG1pc3NlZENvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkLm1pc3NlZEF0dGFja3M7XG4gICAgY29uc3QgdGlsZXMgPSBbXTtcbiAgICBwbGF5ZXIuYm9hcmQuc3RhdGUuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGNvbHVtbiwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHByZXNlcnZlZENvb3Jkcy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShbcm93SW5kZXgsIGNvbHVtbkluZGV4XSkpKSB7XG4gICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgYHAke2luZGV4ICsgMX0tJHtyb3dJbmRleH0tJHtjb2x1bW5JbmRleH1gLFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKTtcblxuICAgICAgICAgIC8vIERyb3BwYWJsZSB0aWxlXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcGxheWVyID09PSBwbGF5ZXJQbGFjaW5nU2hpcHMgJiZcbiAgICAgICAgICAgIHBsYXllci5pc0h1bWFuICYmXG4gICAgICAgICAgICBwbGF5ZXIuYm9hcmQudmFsaWRTaGlwUGxhY2VtZW50KFxuICAgICAgICAgICAgICBwbGF5ZXIuYm9hcmQuZ2V0Q29vcmRzRnJvbVN0YXJ0aW5nQ29vcmQoXG4gICAgICAgICAgICAgICAgW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0sXG4gICAgICAgICAgICAgICAgZHJhZ0RhdGEuc2hpcC5vcmllbnRhdGlvbixcbiAgICAgICAgICAgICAgICBkcmFnRGF0YS5zaGlwLmxlbmd0aCxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGRyb3BwYWJsZUhvdmVyRmVlZGJhY2sodGlsZSwgZHJhZ0RhdGEsIHBsYXllciwgaW5kZXggKyAxKTtcbiAgICAgICAgICAgIGRyb3BwYWJsZUZyb21JbnNpZGUoXG4gICAgICAgICAgICAgIHRpbGUsXG4gICAgICAgICAgICAgIGRyYWdEYXRhLFxuICAgICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICAgIHBsYXllcnMsXG4gICAgICAgICAgICAgIHJlbmRlckdhbWVCb2FyZHMsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRpbGVzLnB1c2godGlsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwidGlsZVwiKTtcbiAgICAgICAgICB0aWxlLmlkID0gYHAke2luZGV4ICsgMX0tJHtyb3dJbmRleH0tJHtjb2x1bW5JbmRleH1gO1xuXG4gICAgICAgICAgLy8gRHJhZ2dhYmxlIHRpbGVcbiAgICAgICAgICBpZiAoY29sdW1uICYmIHBsYXllciA9PT0gcGxheWVyUGxhY2luZ1NoaXBzICYmIHBsYXllci5pc0h1bWFuKSB7XG4gICAgICAgICAgICBkcmFnZ2FibGVGcm9tSW5zaWRlKHRpbGUsIHBsYXllciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRHJvcHBhYmxlIHRpbGVcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkcmFnRGF0YSkubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgIWNvbHVtbiAmJlxuICAgICAgICAgICAgcGxheWVyID09PSBwbGF5ZXJQbGFjaW5nU2hpcHMgJiZcbiAgICAgICAgICAgIHBsYXllci5pc0h1bWFuICYmXG4gICAgICAgICAgICBwbGF5ZXIuYm9hcmQudmFsaWRTaGlwUGxhY2VtZW50KFxuICAgICAgICAgICAgICBwbGF5ZXIuYm9hcmQuZ2V0Q29vcmRzRnJvbVN0YXJ0aW5nQ29vcmQoXG4gICAgICAgICAgICAgICAgW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0sXG4gICAgICAgICAgICAgICAgZHJhZ0RhdGEuc2hpcC5vcmllbnRhdGlvbixcbiAgICAgICAgICAgICAgICBkcmFnRGF0YS5zaGlwLmxlbmd0aCxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGRyb3BwYWJsZUhvdmVyRmVlZGJhY2sodGlsZSwgZHJhZ0RhdGEsIHBsYXllciwgaW5kZXggKyAxKTtcblxuICAgICAgICAgICAgaWYgKGRyYWdEYXRhLm9yaWdpbiA9PT0gXCJpbnNpZGVCb2FyZFwiKSB7XG4gICAgICAgICAgICAgIGRyb3BwYWJsZUZyb21JbnNpZGUoXG4gICAgICAgICAgICAgICAgdGlsZSxcbiAgICAgICAgICAgICAgICBkcmFnRGF0YSxcbiAgICAgICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICAgICAgcGxheWVycyxcbiAgICAgICAgICAgICAgICByZW5kZXJHYW1lQm9hcmRzLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkcmFnRGF0YS5vcmlnaW4gPT09IFwib3V0c2lkZUJvYXJkXCIpIHtcbiAgICAgICAgICAgICAgZHJvcHBhYmxlRnJvbU91dHNpZGUoXG4gICAgICAgICAgICAgICAgdGlsZSxcbiAgICAgICAgICAgICAgICBkcmFnRGF0YSxcbiAgICAgICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICAgICAgcGxheWVycyxcbiAgICAgICAgICAgICAgICByZW5kZXJHYW1lQm9hcmRzLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB1cGRhdGUgc2hpcCdzIG9yaWVudGF0aW9uXG4gICAgICAgICAgaWYgKGNvbHVtbiAmJiBwbGF5ZXIuaXNIdW1hbiAmJiBwbGF5ZXIgPT09IHBsYXllclBsYWNpbmdTaGlwcykge1xuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+XG4gICAgICAgICAgICAgIHN3aXRjaFNoaXBPcmllbnRhdGlvbihlLCBwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDb25kaXRpb25zIGZvciBkaXNwbGF5aW5nIHNoaXBzXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29sdW1uICYmXG4gICAgICAgICAgICBwbGF5ZXIuaXNIdW1hbiAmJlxuICAgICAgICAgICAgKHBsYXllclZzQ29tcHV0ZXIgfHwgIXBsYXllci5pc1JlYWR5KVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDb25kaXRpb25zIGZvciBhbGxvd2luZyBhdHRhY2sgb24gdGlsZVxuICAgICAgICAgIGNvbnN0IHJlYWR5ID0gcGxheWVycy5ldmVyeSgocCkgPT4gcC5pc1JlYWR5KTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICByZWFkeSAmJlxuICAgICAgICAgICAgIXBsYXllci5teVR1cm4gJiZcbiAgICAgICAgICAgIHBsYXllci5ib2FyZC5pc0F0dGFja2FibGUoW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0pICYmXG4gICAgICAgICAgICAoIXBsYXllci5pc0h1bWFuIHx8ICFwbGF5ZXJWc0NvbXB1dGVyKSAmJlxuICAgICAgICAgICAgIWdhbWVPdmVyXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0gW3Jvd0luZGV4LCBjb2x1bW5JbmRleF07XG4gICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgIG1ha2VBdHRhY2socGxheWVycywgY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aWxlcy5wdXNoKHRpbGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBib2FyZE5vZGUucmVwbGFjZUNoaWxkcmVuKC4uLnRpbGVzKTtcblxuICAgIGhpdENvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwJHtpbmRleCArIDF9LSR7cm93fS0ke2NvbHVtbn1gKTtcblxuICAgICAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBpbWdFbGVtZW50LnNyYyA9IGV4cGxvc2lvblN2ZztcbiAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XG5cbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgIGlmIChwbGF5ZXIuYm9hcmQuZ2V0U2hpcEF0KGNvb3JkaW5hdGUpLmlzU3VuaygpKSB7XG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcInN1bmtcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbWlzc2VkQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGU7XG4gICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHAke2luZGV4ICsgMX0tJHtyb3d9LSR7Y29sdW1ufWApO1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO1xuXG4gICAgICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGltZ0VsZW1lbnQuc3JjID0gc21hbGxEb3RTZztcbiAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzdGFydEdhbWUocGxheWVycykge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJnYW1lLWJhY2tncm91bmRcIik7XG5cbiAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKTtcbiAgY29uc3QgYmF0dGxlU2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmF0dGxlc2hpcC1jb250YWluZXJcIik7XG4gIGJhdHRsZVNoaXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInJlbW92ZWRcIik7XG5cbiAgY29uc3QgW3BsYXllcjEsIHBsYXllcjJdID0gcGxheWVycztcbiAgY3JlYXRlUmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbihwbGF5ZXIxLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKTtcbiAgY3JlYXRlRHJhZ2dhYmxlU2hpcEVsZW1lbnRzKHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpO1xuICBhd2FpdCBmaW5pc2hlZFBsYWNpbmdTaGlwcyhwbGF5ZXIxKTtcbiAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKTtcblxuICBpZiAocGxheWVyMi5pc0h1bWFuKSB7XG4gICAgY3JlYXRlUmFuZG9tU2hpcFBsYWNlbWVudEJ1dHRvbihwbGF5ZXIyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKTtcbiAgICBjcmVhdGVEcmFnZ2FibGVTaGlwRWxlbWVudHMocGxheWVycywgcmVuZGVyR2FtZUJvYXJkcyk7XG4gICAgYXdhaXQgZmluaXNoZWRQbGFjaW5nU2hpcHMocGxheWVyMik7XG4gIH0gZWxzZSB7XG4gICAgcmFuZG9tU2hpcFBsYWNlbWVudChwbGF5ZXIyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKTtcbiAgICBwbGF5ZXIyLnJlYWR5VXAoKTtcbiAgfVxuXG4gIHJlbmRlckdhbWVCb2FyZHMocGxheWVycyk7XG59XG4iLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmZ1bmN0aW9uIGRyYWdnZWRGcm9tSW5zaWRlQm9hcmQoZSwgcGxheWVyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKSB7XG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBlLnRhcmdldC5pZFxuICAgIC5zcGxpdChcIi1cIilcbiAgICAuc2xpY2UoLTIpXG4gICAgLm1hcCgobnVtYmVyKSA9PiBOdW1iZXIobnVtYmVyKSk7XG4gIGNvbnN0IHRoZVNoaXAgPSBwbGF5ZXIuYm9hcmQuZ2V0U2hpcEF0KGNvb3JkaW5hdGUpO1xuXG4gIGNvbnN0IGdob3N0U2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdob3N0U2hpcC5pZCA9IFwiZ2hvc3Qtc2hpcFwiO1xuXG4gIGlmICh0aGVTaGlwLm9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICBnaG9zdFNoaXAuY2xhc3NMaXN0LmFkZChcInZlcnRpY2FsXCIpO1xuICAgIGdob3N0U2hpcC5zdHlsZS5oZWlnaHQgPSBgJHt0aGVTaGlwLmxlbmd0aCAqIDI1fXB4YDtcbiAgfSBlbHNlIGlmICh0aGVTaGlwLm9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgIGdob3N0U2hpcC5jbGFzc0xpc3QuYWRkKFwiaG9yaXpvbnRhbFwiKTtcbiAgICBnaG9zdFNoaXAuc3R5bGUud2lkdGggPSBgJHt0aGVTaGlwLmxlbmd0aCAqIDI1fXB4YDtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlU2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGdob3N0U2hpcEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdob3N0U2hpcEJvZHkuY2xhc3NMaXN0LmFkZChcImdob3N0LXNoaXAtYm9keVwiKTtcblxuICAgIGdob3N0U2hpcC5hcHBlbmRDaGlsZChnaG9zdFNoaXBCb2R5KTtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2hvc3RTaGlwKTtcbiAgZS5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGdob3N0U2hpcCwgMCwgMCk7XG5cbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkLmdldFNoaXBDb29yZGluYXRlcyh0aGVTaGlwKTtcbiAgY29uc3QgcHJlc2VydmVkQ29vcmRpbmF0ZXMgPSBzaGlwQ29vcmRpbmF0ZXMubWFwKChjb29yZCkgPT5cbiAgICBKU09OLnN0cmluZ2lmeShjb29yZCksXG4gICk7XG5cbiAgcGxheWVyLmJvYXJkLnJlbW92ZVBsYWNlZFNoaXAoc2hpcENvb3JkaW5hdGVzKTtcblxuICByZW5kZXJHYW1lQm9hcmRzKFxuICAgIHBsYXllcnMsXG4gICAgeyBvcmlnaW46IFwiaW5zaWRlQm9hcmRcIiwgc2hpcDogdGhlU2hpcCB9LFxuICAgIHByZXNlcnZlZENvb3JkaW5hdGVzLFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhZ2dhYmxlRnJvbUluc2lkZSh0aWxlLCBwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpIHtcbiAgdGlsZS5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xuICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+IHtcbiAgICBkcmFnZ2VkRnJvbUluc2lkZUJvYXJkKGUsIHBsYXllciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcyk7XG4gIH0pO1xuXG4gIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgKGUpID0+IHtcbiAgICBjb25zdCBnaG9zdFNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dob3N0LXNoaXBcIik7XG4gICAgaWYgKGdob3N0U2hpcC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICBnaG9zdFNoaXAucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChnaG9zdFNoaXApO1xuICAgIH1cblxuICAgIGlmIChlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID09PSBcIm5vbmVcIikge1xuICAgICAgcGxheWVyLmJvYXJkLnJlc3RvcmVTdGF0ZSgpO1xuICAgICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkcmFnZ2VkRnJvbU91dHNpZGVCb2FyZChlLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKSB7XG4gIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcbiAgY29uc3QgcmUgPSAvbGVuZ3RoLShcXGQpLztcbiAgbGV0IHNoaXBMZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZS50YXJnZXQuY2xhc3NMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHJlLnRlc3QoZS50YXJnZXQuY2xhc3NMaXN0W2ldKSkge1xuICAgICAgc2hpcExlbmd0aCA9IE51bWJlcihlLnRhcmdldC5jbGFzc0xpc3RbaV0uc3BsaXQoXCItXCIpWzFdKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBjb25zdCBuZXdTaGlwID0gc2hpcChzaGlwTGVuZ3RoKTtcblxuICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMsIHsgb3JpZ2luOiBcIm91dHNpZGVCb2FyZFwiLCBzaGlwOiBuZXdTaGlwIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhZ2dhYmxlRnJvbU91dHNpZGUoXG4gIHNoaXBDb250YWluZXJFbGVtZW50LFxuICBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lcixcbiAgcGxheWVycyxcbiAgcmVuZGVyR2FtZUJvYXJkcyxcbikge1xuICBzaGlwQ29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChlKSA9PiB7XG4gICAgZHJhZ2dlZEZyb21PdXRzaWRlQm9hcmQoZSwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcyk7XG4gIH0pO1xuXG4gIHNoaXBDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIChlKSA9PiB7XG4gICAgaWYgKGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgIT09IFwibm9uZVwiKSB7XG4gICAgICBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lci5yZW1vdmVDaGlsZChlLnRhcmdldCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZHJvcHBlZEZyb21JbnNpZGVCb2FyZChcbiAgZHJhZ0RhdGEsXG4gIHBsYXllcixcbiAgZSxcbiAgcGxheWVycyxcbiAgcmVuZGVyR2FtZUJvYXJkcyxcbikge1xuICBjb25zdCB0aGVTaGlwID0gZHJhZ0RhdGEuc2hpcDtcblxuICBjb25zdCBzdGFydGluZ0Nvb3JkaW5hdGUgPSBlLnRhcmdldC5pZFxuICAgIC5zcGxpdChcIi1cIilcbiAgICAuc2xpY2UoLTIpXG4gICAgLm1hcCgobnVtYmVyKSA9PiBOdW1iZXIobnVtYmVyKSk7XG4gIHBsYXllci5ib2FyZC5wbGFjZVNoaXAodGhlU2hpcCwgc3RhcnRpbmdDb29yZGluYXRlKTtcblxuICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJvcHBhYmxlRnJvbUluc2lkZShcbiAgdGlsZSxcbiAgZHJhZ0RhdGEsXG4gIHBsYXllcixcbiAgcGxheWVycyxcbiAgcmVuZGVyR2FtZUJvYXJkcyxcbikge1xuICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XG4gIH0pO1xuXG4gIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZHJvcHBlZEZyb21JbnNpZGVCb2FyZChkcmFnRGF0YSwgcGxheWVyLCBlLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRyb3BwZWRGcm9tT3V0c2lkZUJvYXJkKFxuICBkcmFnRGF0YSxcbiAgcGxheWVyLFxuICBlLFxuICBwbGF5ZXJzLFxuICByZW5kZXJHYW1lQm9hcmRzLFxuKSB7XG4gIGNvbnN0IHN0YXJ0aW5nQ29vcmRpbmF0ZSA9IGUudGFyZ2V0LmlkXG4gICAgLnNwbGl0KFwiLVwiKVxuICAgIC5zbGljZSgtMilcbiAgICAubWFwKChudW1iZXIpID0+IE51bWJlcihudW1iZXIpKTtcbiAgcGxheWVyLmJvYXJkLnBsYWNlU2hpcChkcmFnRGF0YS5zaGlwLCBzdGFydGluZ0Nvb3JkaW5hdGUpO1xuXG4gIGlmIChwbGF5ZXIuYm9hcmQuYWxsU2hpcHNQbGFjZWQoKSkge1xuICAgIGNvbnN0IHJlYWR5VXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlYWR5LXVwXCIpO1xuICAgIHJlYWR5VXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInJlbW92ZWRcIik7XG4gIH1cblxuICByZW5kZXJHYW1lQm9hcmRzKHBsYXllcnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJvcHBhYmxlRnJvbU91dHNpZGUoXG4gIHRpbGUsXG4gIGRyYWdEYXRhLFxuICBwbGF5ZXIsXG4gIHBsYXllcnMsXG4gIHJlbmRlckdhbWVCb2FyZHMsXG4pIHtcbiAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xuICB9KTtcblxuICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRyb3BwZWRGcm9tT3V0c2lkZUJvYXJkKGRyYWdEYXRhLCBwbGF5ZXIsIGUsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpO1xuICB9KTtcbn1cblxuY29uc3QgcHJldmlvdXNDb29yZGluYXRlc1F1ZXVlID0gW107XG5leHBvcnQgZnVuY3Rpb24gZHJvcHBhYmxlSG92ZXJGZWVkYmFjayh0aWxlLCBkcmFnRGF0YSwgcGxheWVyLCBwbGF5ZXJJbmRleCkge1xuICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgKGUpID0+IHtcbiAgICBjb25zdCBzdGFydGluZ0Nvb3JkaW5hdGUgPSBlLnRhcmdldC5pZFxuICAgICAgLnNwbGl0KFwiLVwiKVxuICAgICAgLnNsaWNlKC0yKVxuICAgICAgLm1hcCgobnVtYmVyKSA9PiBOdW1iZXIobnVtYmVyKSk7XG4gICAgY29uc3QgdGhlU2hpcCA9IGRyYWdEYXRhLnNoaXA7XG4gICAgY29uc3QgYWxsQ29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmQuZ2V0Q29vcmRzRnJvbVN0YXJ0aW5nQ29vcmQoXG4gICAgICBzdGFydGluZ0Nvb3JkaW5hdGUsXG4gICAgICB0aGVTaGlwLm9yaWVudGF0aW9uLFxuICAgICAgdGhlU2hpcC5sZW5ndGgsXG4gICAgKTtcblxuICAgIGFsbENvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgICAgY29uc3QgaG92ZXJlZFRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgYHAke3BsYXllckluZGV4fS0ke3Jvd30tJHtjb2x1bW59YCxcbiAgICAgICk7XG4gICAgICBob3ZlcmVkVGlsZS5jbGFzc0xpc3QuYWRkKFwidmFsaWQtcGxhY2VtZW50XCIpO1xuICAgIH0pO1xuXG4gICAgd2hpbGUgKHByZXZpb3VzQ29vcmRpbmF0ZXNRdWV1ZS5sZW5ndGggPj0gMikge1xuICAgICAgY29uc3QgcHJldmlvdXNDb29yZGluYXRlcyA9IHByZXZpb3VzQ29vcmRpbmF0ZXNRdWV1ZS5zaGlmdCgpO1xuICAgICAgcHJldmlvdXNDb29yZGluYXRlcy5mb3JFYWNoKChwcmV2Q29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gSlNPTi5wYXJzZShwcmV2Q29vcmRpbmF0ZSk7XG4gICAgICAgIGNvbnN0IGhvdmVyZWRUaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgYHAke3BsYXllckluZGV4fS0ke3Jvd30tJHtjb2x1bW59YCxcbiAgICAgICAgKTtcblxuICAgICAgICBob3ZlcmVkVGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWQtcGxhY2VtZW50XCIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHN0cmluZ2lmaWVkQ29vcmRzID0gYWxsQ29vcmRpbmF0ZXMubWFwKChjb29yZGluYXRlKSA9PlxuICAgICAgSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZSksXG4gICAgKTtcbiAgICBwcmV2aW91c0Nvb3JkaW5hdGVzUXVldWUucHVzaChzdHJpbmdpZmllZENvb3Jkcyk7XG4gIH0pO1xuXG4gIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCAoKSA9PiB7XG4gICAgbGV0IHByZXZpb3VzQ29vcmRpbmF0ZXM7XG4gICAgbGV0IGN1cnJlbnRDb29yZGluYXRlcztcbiAgICBpZiAocHJldmlvdXNDb29yZGluYXRlc1F1ZXVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIHByZXZpb3VzQ29vcmRpbmF0ZXMgPSBwcmV2aW91c0Nvb3JkaW5hdGVzUXVldWUuc2hpZnQoKTtcbiAgICAgIFtjdXJyZW50Q29vcmRpbmF0ZXNdID0gcHJldmlvdXNDb29yZGluYXRlc1F1ZXVlO1xuICAgIH0gZWxzZSBpZiAocHJldmlvdXNDb29yZGluYXRlc1F1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIFtwcmV2aW91c0Nvb3JkaW5hdGVzXSA9IHByZXZpb3VzQ29vcmRpbmF0ZXNRdWV1ZTtcbiAgICB9XG5cbiAgICBpZiAoIShwcmV2aW91c0Nvb3JkaW5hdGVzICYmIGN1cnJlbnRDb29yZGluYXRlcykpIHtcbiAgICAgIHByZXZpb3VzQ29vcmRpbmF0ZXMuZm9yRWFjaCgocHJldkNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IEpTT04ucGFyc2UocHJldkNvb3JkaW5hdGUpO1xuICAgICAgICBjb25zdCBob3ZlcmVkVGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgIGBwJHtwbGF5ZXJJbmRleH0tJHtyb3d9LSR7Y29sdW1ufWAsXG4gICAgICAgICk7XG4gICAgICAgIGhvdmVyZWRUaWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJ2YWxpZC1wbGFjZW1lbnRcIik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJldmlvdXNDb29yZGluYXRlcy5mb3JFYWNoKChwcmV2Q29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gSlNPTi5wYXJzZShwcmV2Q29vcmRpbmF0ZSk7XG4gICAgICAgIGNvbnN0IGhvdmVyZWRUaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgYHAke3BsYXllckluZGV4fS0ke3Jvd30tJHtjb2x1bW59YCxcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIWN1cnJlbnRDb29yZGluYXRlcy5pbmNsdWRlcyhwcmV2Q29vcmRpbmF0ZSkpIHtcbiAgICAgICAgICBob3ZlcmVkVGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWQtcGxhY2VtZW50XCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZUJvYXJkKCkge1xuICBjb25zdCBzdGF0ZSA9IFtdO1xuICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdyArPSAxKSB7XG4gICAgc3RhdGUucHVzaChbXSk7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCArPSAxKSB7XG4gICAgICBzdGF0ZVtyb3ddLnB1c2goZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlc3RvcmVTdGF0ZSA9ICgpID0+IHtcbiAgICBzaGlwQ29vcmRpbmF0ZXMuZm9yRWFjaCgoc2hpcE9iamVjdCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwT2JqZWN0LmNvb3JkaW5hdGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBzaGlwT2JqZWN0LmNvb3JkaW5hdGVzW2ldO1xuICAgICAgICBpZiAoc3RhdGVbcm93XVtjb2x1bW5dICE9PSBzaGlwT2JqZWN0LnNoaXApIHtcbiAgICAgICAgICBzdGF0ZVtyb3ddW2NvbHVtbl0gPSBzaGlwT2JqZWN0LnNoaXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB2YWxpZFNoaXBQbGFjZW1lbnQgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb29yZGluYXRlID0gY29vcmRpbmF0ZXNbaV07XG4gICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgIGlmIChcbiAgICAgICAgcm93IDwgMCB8fFxuICAgICAgICByb3cgPiA5IHx8XG4gICAgICAgIGNvbHVtbiA8IDAgfHxcbiAgICAgICAgY29sdW1uID4gOSB8fFxuICAgICAgICBzdGF0ZVtyb3ddW2NvbHVtbl1cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGdldENvb3Jkc0Zyb21TdGFydGluZ0Nvb3JkID0gKFxuICAgIGZpcnN0Q29vcmRpbmF0ZSxcbiAgICBvcmllbnRhdGlvbixcbiAgICBzaGlwTGVuZ3RoLFxuICApID0+IHtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW2ZpcnN0Q29vcmRpbmF0ZVswXSwgZmlyc3RDb29yZGluYXRlWzFdICsgaV0pO1xuICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW2ZpcnN0Q29vcmRpbmF0ZVswXSArIGksIGZpcnN0Q29vcmRpbmF0ZVsxXV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgZmlyc3RDb29yZGluYXRlKSA9PiB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBnZXRDb29yZHNGcm9tU3RhcnRpbmdDb29yZChcbiAgICAgIGZpcnN0Q29vcmRpbmF0ZSxcbiAgICAgIHNoaXAub3JpZW50YXRpb24sXG4gICAgICBzaGlwLmxlbmd0aCxcbiAgICApO1xuXG4gICAgaWYgKHZhbGlkU2hpcFBsYWNlbWVudChjb29yZGluYXRlcykpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc2hpcENvb3JkaW5hdGVzLmZpbmRJbmRleChcbiAgICAgICAgKHNoaXBPYmplY3QpID0+IHNoaXBPYmplY3Quc2hpcCA9PT0gc2hpcCxcbiAgICAgICk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBzaGlwQ29vcmRpbmF0ZXNbaW5kZXhdLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaCh7IHNoaXAsIGNvb3JkaW5hdGVzIH0pO1xuICAgICAgfVxuXG4gICAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZGluYXRlO1xuICAgICAgICBzdGF0ZVtyb3ddW2NvbHVtbl0gPSBzaGlwO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzUGxhY2VkID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYWNlZFNoaXBzID0gW107XG4gICAgc3RhdGUuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4gJiYgIXBsYWNlZFNoaXBzLmluY2x1ZGVzKGNvbHVtbikpIHtcbiAgICAgICAgICBwbGFjZWRTaGlwcy5wdXNoKGNvbHVtbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBsYWNlZFNoaXBzLmxlbmd0aCA9PT0gNTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQbGFjZWRTaGlwcyA9ICgpID0+IHtcbiAgICBzdGF0ZS5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY29sLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICBzdGF0ZVtyb3dJbmRleF1bY29sSW5kZXhdID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzaGlwQ29vcmRpbmF0ZXMuc3BsaWNlKDAsIHNoaXBDb29yZGluYXRlcy5sZW5ndGgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVBsYWNlZFNoaXAgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICAgIHN0YXRlW3Jvd11bY29sdW1uXSA9IGZhbHNlO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldFBsYWNlZFNoaXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzQXJyYXkgPSBbXTtcbiAgICBzaGlwQ29vcmRpbmF0ZXMuZm9yRWFjaCgoc2hpcE9iamVjdCkgPT4ge1xuICAgICAgc2hpcHNBcnJheS5wdXNoKHNoaXBPYmplY3Quc2hpcCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNoaXBzQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcEF0ID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmRpbmF0ZTtcbiAgICBjb25zdCB0aGVTaGlwID0gc3RhdGVbcm93XVtjb2x1bW5dO1xuICAgIHJldHVybiB0aGVTaGlwO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBIZWFkQ29vcmRpbmF0ZSA9IChzaGlwKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBzaGlwQ29vcmRpbmF0ZXMuZmluZEluZGV4KFxuICAgICAgKHNoaXBPYmplY3QpID0+IHNoaXBPYmplY3Quc2hpcCA9PT0gc2hpcCxcbiAgICApO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gc2hpcENvb3JkaW5hdGVzW2luZGV4XS5jb29yZGluYXRlc1swXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcENvb3JkaW5hdGVzID0gKHNoaXApID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHNoaXBDb29yZGluYXRlcy5maW5kSW5kZXgoXG4gICAgICAoc2hpcE9iamVjdCkgPT4gc2hpcE9iamVjdC5zaGlwID09PSBzaGlwLFxuICAgICk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHJldHVybiBzaGlwQ29vcmRpbmF0ZXNbaW5kZXhdLmNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBoaXRBdHRhY2tzID0gW107XG4gIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGU7XG4gICAgY29uc3QgYm9hcmRUaWxlID0gc3RhdGVbcm93XVtjb2x1bW5dO1xuICAgIGlmIChib2FyZFRpbGUpIHtcbiAgICAgIGJvYXJkVGlsZS5oaXQoY29vcmRpbmF0ZSk7XG4gICAgICBoaXRBdHRhY2tzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbWlzc2VkQXR0YWNrcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCB2YWxpZEF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGNvb3JkaW5hdGU7XG4gICAgcmV0dXJuIHJvdyA+PSAwICYmIHJvdyA8PSA5ICYmIGNvbHVtbiA+PSAwICYmIGNvbHVtbiA8PSA5O1xuICB9O1xuXG4gIGNvbnN0IGlzQXR0YWNrYWJsZSA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgY29uc3QgYWxsQXR0YWNrcyA9IGhpdEF0dGFja3NcbiAgICAgIC5jb25jYXQobWlzc2VkQXR0YWNrcylcbiAgICAgIC5tYXAoKGF0dGFjaykgPT4gSlNPTi5zdHJpbmdpZnkoYXR0YWNrKSk7XG4gICAgcmV0dXJuIChcbiAgICAgICFhbGxBdHRhY2tzLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGUpKSAmJlxuICAgICAgdmFsaWRBdHRhY2soY29vcmRpbmF0ZSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGlzSGl0QXQgPSAoY29vcmRpbmF0ZSkgPT5cbiAgICBoaXRBdHRhY2tzXG4gICAgICAubWFwKChhdHRhY2spID0+IEpTT04uc3RyaW5naWZ5KGF0dGFjaykpXG4gICAgICAuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZSkpO1xuXG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBnZXRQbGFjZWRTaGlwcygpO1xuICAgIHJldHVybiBzaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0b3JlU3RhdGUsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU3VuayxcbiAgICBpc0F0dGFja2FibGUsXG4gICAgYWxsU2hpcHNQbGFjZWQsXG4gICAgcmVtb3ZlUGxhY2VkU2hpcHMsXG4gICAgcmVtb3ZlUGxhY2VkU2hpcCxcbiAgICBnZXRTaGlwQXQsXG4gICAgZ2V0U2hpcEhlYWRDb29yZGluYXRlLFxuICAgIGdldFNoaXBDb29yZGluYXRlcyxcbiAgICBnZXRDb29yZHNGcm9tU3RhcnRpbmdDb29yZCxcbiAgICB2YWxpZFNoaXBQbGFjZW1lbnQsXG4gICAgaXNIaXRBdCxcbiAgICBzdGF0ZSxcbiAgICBoaXRBdHRhY2tzLFxuICAgIG1pc3NlZEF0dGFja3MsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBodW1hbiwgY29tcHV0ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBkaXNwbGF5TWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuL2JhdHRsZXNoaXBcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheS1hZ2FpblwiKTtcbnBsYXlBZ2FpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhdHRsZXNoaXAtY29udGFpbmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVkXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVvdmVyLW1vZGFsXCIpLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVkXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZ2FtZS1iYWNrZ3JvdW5kXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwibWVudS1iYWNrZ3JvdW5kXCIpO1xuXG4gIGNvbnN0IHBsYXllcjFCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMS1ib2FyZFwiKTtcbiAgd2hpbGUgKHBsYXllcjFCb2FyZC5maXJzdENoaWxkKSB7XG4gICAgcGxheWVyMUJvYXJkLnJlbW92ZUNoaWxkKHBsYXllcjFCb2FyZC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IHBsYXllcjJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMi1ib2FyZFwiKTtcbiAgd2hpbGUgKHBsYXllcjJCb2FyZC5maXJzdENoaWxkKSB7XG4gICAgcGxheWVyMkJvYXJkLnJlbW92ZUNoaWxkKHBsYXllcjJCb2FyZC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5kcmFnZ2FibGUtc2hpcHMtY29udGFpbmVyXCIsXG4gICk7XG4gIHdoaWxlIChkcmFnZ2FibGVTaGlwc0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIucmVtb3ZlQ2hpbGQoZHJhZ2dhYmxlU2hpcHNDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBzdGFydEdhbWUoYXdhaXQgZGlzcGxheU1lbnUoaHVtYW4sIGNvbXB1dGVyKSk7XG59KTtcblxuc3RhcnRHYW1lKGF3YWl0IGRpc3BsYXlNZW51KGh1bWFuLCBjb21wdXRlcikpO1xuIiwiZnVuY3Rpb24gcmVtb3ZlTWVudShib2R5KSB7XG4gIGJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLW1lbnUtY29udGFpbmVyXCIpKTtcbiAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS1iYWNrZ3JvdW5kXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TWVudShodW1hbiwgY29tcHV0ZXIpIHtcbiAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtbWVudS1jb250YWluZXJcIikpIHtcbiAgICBjb25zdCBnYW1lTWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ2FtZU1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdhbWUtbWVudS1jb250YWluZXJcIik7XG4gICAgY29uc3QgZ2FtZVRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYW1lVGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdhbWUtdGl0bGUtY29udGFpbmVyXCIpO1xuICAgIGdhbWVUaXRsZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiQkFUVExFU0hJUFwiO1xuXG4gICAgY29uc3QgZ2FtZU1vZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHB2cE1vZGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHB2cE1vZGVCdG4udGV4dENvbnRlbnQgPSBcIlBsYXllciB2cy4gUGxheWVyXCI7XG4gICAgY29uc3QgcHZjTW9kZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHZjTW9kZUJ0bi50ZXh0Q29udGVudCA9IFwiUGxheWVyIHZzLiBDb21wdXRlclwiO1xuICAgIGdhbWVNb2RlQ29udGFpbmVyLmFwcGVuZENoaWxkKHB2cE1vZGVCdG4pO1xuICAgIGdhbWVNb2RlQ29udGFpbmVyLmFwcGVuZENoaWxkKHB2Y01vZGVCdG4pO1xuXG4gICAgZ2FtZU1vZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdhbWUtbW9kZS1jb250YWluZXJcIik7XG5cbiAgICBnYW1lTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lVGl0bGVDb250YWluZXIpO1xuICAgIGdhbWVNZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVNb2RlQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJtZW51LWJhY2tncm91bmRcIik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChnYW1lTWVudUNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHB2cE1vZGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlTWVudShib2R5KTtcbiAgICAgICAgcmVzb2x2ZShbaHVtYW4odHJ1ZSksIGh1bWFuKCldKTtcbiAgICAgIH0pO1xuXG4gICAgICBwdmNNb2RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZU1lbnUoYm9keSk7XG4gICAgICAgIHJlc29sdmUoW2h1bWFuKHRydWUpLCBjb21wdXRlcigpXSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IGRyYWdnYWJsZUZyb21PdXRzaWRlIH0gZnJvbSBcIi4vZHJhZ0FuZERyb3BcIjtcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCByYW5kb21TdmcgZnJvbSBcIi4uL2ljb25zL3JhbmRvbS1zdmcuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmlzaGVkUGxhY2luZ1NoaXBzKHBsYXllcikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCByZWFkeVVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWFkeS11cFwiKTtcbiAgICByZWFkeVVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICByZWFkeVVwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVkXCIpO1xuICAgICAgcGxheWVyLnJlYWR5VXAoKTtcbiAgICAgIGNvbnN0IHJhbmRvbVNoaXBQbGFjZW1lbnRTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5yYW5kb20tc2hpcC1wbGFjZW1lbnRcIixcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGJhdHRsZVNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5iYXR0bGVzaGlwLWNvbnRhaW5lclwiLFxuICAgICAgKTtcbiAgICAgIGJhdHRsZVNoaXBDb250YWluZXIucmVtb3ZlQ2hpbGQocmFuZG9tU2hpcFBsYWNlbWVudFN2Zyk7XG5cbiAgICAgIGNvbnN0IHJlYWR5VXBCdXR0b25DbG9uZSA9IHJlYWR5VXBCdXR0b24uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgcmVhZHlVcEJ1dHRvbi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyZWFkeVVwQnV0dG9uQ2xvbmUsIHJlYWR5VXBCdXR0b24pO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVNoaXBQbGFjZW1lbnQocGxheWVyLCBwbGF5ZXJzLCByZW5kZXJHYW1lQm9hcmRzKSB7XG4gIHBsYXllci5ib2FyZC5yZW1vdmVQbGFjZWRTaGlwcygpO1xuICBjb25zdCBzaGlwT3JpZW50YXRpb25zID0gW1wiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCJdO1xuXG4gIFs1LCA0LCAzLCAzLCAyXS5mb3JFYWNoKChsZW5ndGgpID0+IHtcbiAgICBjb25zdCBwbGFjZW1lbnRQb29sID0gW107XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdyArPSAxKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sICs9IDEpIHtcbiAgICAgICAgcGxhY2VtZW50UG9vbC5wdXNoKFtyb3csIGNvbF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbU9yaWVudGF0aW9uID0gc2hpcE9yaWVudGF0aW9uc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcbiAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwbGFjZW1lbnRQb29sLmxlbmd0aCk7XG4gICAgd2hpbGUgKFxuICAgICAgIXBsYXllci5ib2FyZC5wbGFjZVNoaXAoXG4gICAgICAgIHNoaXAobGVuZ3RoLCByYW5kb21PcmllbnRhdGlvbiksXG4gICAgICAgIHBsYWNlbWVudFBvb2xbcmFuZG9tSW5kZXhdLFxuICAgICAgKVxuICAgICkge1xuICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwbGFjZW1lbnRQb29sLmxlbmd0aCk7XG4gICAgfVxuICB9KTtcblxuICBpZiAocGxheWVyLmlzSHVtYW4gJiYgcGxheWVyLmJvYXJkLmFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICBjb25zdCByZWFkeVVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWFkeS11cFwiKTtcbiAgICByZWFkeVVwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJyZW1vdmVkXCIpO1xuICB9XG5cbiAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJhbmRvbVNoaXBQbGFjZW1lbnRCdXR0b24oXG4gIHBsYXllcixcbiAgcGxheWVycyxcbiAgcmVuZGVyR2FtZUJvYXJkcyxcbikge1xuICBjb25zdCByYW5kb21TaGlwUGxhY2VtZW50U3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgcmFuZG9tU2hpcFBsYWNlbWVudFN2Zy5zcmMgPSByYW5kb21Tdmc7XG4gIHJhbmRvbVNoaXBQbGFjZW1lbnRTdmcuY2xhc3NMaXN0LmFkZChcInJhbmRvbS1zaGlwLXBsYWNlbWVudFwiKTtcblxuICBjb25zdCBiYXR0bGVTaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXR0bGVzaGlwLWNvbnRhaW5lclwiKTtcbiAgYmF0dGxlU2hpcENvbnRhaW5lci5wcmVwZW5kKHJhbmRvbVNoaXBQbGFjZW1lbnRTdmcpO1xuXG4gIHJhbmRvbVNoaXBQbGFjZW1lbnRTdmcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgcmFuZG9tU2hpcFBsYWNlbWVudChwbGF5ZXIsIHBsYXllcnMsIHJlbmRlckdhbWVCb2FyZHMpLFxuICApO1xuICByYW5kb21TaGlwUGxhY2VtZW50U3ZnLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuZHJhZ2dhYmxlLXNoaXBzLWNvbnRhaW5lclwiLFxuICAgICk7XG4gICAgd2hpbGUgKGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEcmFnZ2FibGVTaGlwRWxlbWVudHMocGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykge1xuICBjb25zdCBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuZHJhZ2dhYmxlLXNoaXBzLWNvbnRhaW5lclwiLFxuICApO1xuICBbNSwgNCwgMywgMywgMl0uZm9yRWFjaCgobGVuZ3RoKSA9PiB7XG4gICAgY29uc3Qgc2hpcENvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNoaXBDb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaGlwLWNvbnRhaW5lclwiLCBgbGVuZ3RoLSR7bGVuZ3RofWApO1xuICAgIHNoaXBDb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XG5cbiAgICBkcmFnZ2FibGVGcm9tT3V0c2lkZShcbiAgICAgIHNoaXBDb250YWluZXJFbGVtZW50LFxuICAgICAgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIsXG4gICAgICBwbGF5ZXJzLFxuICAgICAgcmVuZGVyR2FtZUJvYXJkcyxcbiAgICApO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgY29uc3Qgc2hpcEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2hpcEJvZHkuY2xhc3NMaXN0LmFkZChcInNoaXAtYm9keVwiKTtcbiAgICAgIHNoaXBDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHNoaXBCb2R5KTtcbiAgICB9XG5cbiAgICBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQ29udGFpbmVyRWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoU2hpcE9yaWVudGF0aW9uKGUsIHBsYXllciwgcGxheWVycywgcmVuZGVyR2FtZUJvYXJkcykge1xuICBjb25zdCBjb29yZGluYXRlID0gZS50YXJnZXQuaWRcbiAgICAuc3BsaXQoXCItXCIpXG4gICAgLnNsaWNlKC0yKVxuICAgIC5tYXAoKG51bWJlcikgPT4gTnVtYmVyKG51bWJlcikpO1xuICBjb25zdCB0aGVTaGlwID0gcGxheWVyLmJvYXJkLmdldFNoaXBBdChjb29yZGluYXRlKTtcbiAgY29uc3Qgc2hpcEhlYWRDb29yZGluYXRlID0gcGxheWVyLmJvYXJkLmdldFNoaXBIZWFkQ29vcmRpbmF0ZSh0aGVTaGlwKTtcbiAgY29uc3Qgc3dpdGNoZWRPcmllbnRhdGlvbiA9XG4gICAgdGhlU2hpcC5vcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsXCI7XG5cbiAgY29uc3Qgc3dpdGNoZWRTaGlwQ29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmRcbiAgICAuZ2V0Q29vcmRzRnJvbVN0YXJ0aW5nQ29vcmQoXG4gICAgICBzaGlwSGVhZENvb3JkaW5hdGUsXG4gICAgICBzd2l0Y2hlZE9yaWVudGF0aW9uLFxuICAgICAgdGhlU2hpcC5sZW5ndGgsXG4gICAgKVxuICAgIC5zbGljZSgxKTtcbiAgaWYgKHBsYXllci5ib2FyZC52YWxpZFNoaXBQbGFjZW1lbnQoc3dpdGNoZWRTaGlwQ29vcmRpbmF0ZXMpKSB7XG4gICAgdGhlU2hpcC5vcmllbnRhdGlvbiA9IHN3aXRjaGVkT3JpZW50YXRpb247XG4gICAgcGxheWVyLmJvYXJkLnJlbW92ZVBsYWNlZFNoaXAocGxheWVyLmJvYXJkLmdldFNoaXBDb29yZGluYXRlcyh0aGVTaGlwKSk7XG4gICAgcGxheWVyLmJvYXJkLnBsYWNlU2hpcCh0aGVTaGlwLCBzaGlwSGVhZENvb3JkaW5hdGUpO1xuXG4gICAgcmVuZGVyR2FtZUJvYXJkcyhwbGF5ZXJzKTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBnYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5cbmZ1bmN0aW9uIHBsYXllcigpIHtcbiAgY29uc3QgYm9hcmQgPSBnYW1lQm9hcmQoKTtcblxuICBjb25zdCBpc1JlYWR5ID0gZmFsc2U7XG4gIGNvbnN0IHJlYWR5VXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBzd2l0Y2hUdXJuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubXlUdXJuID0gIXRoaXMubXlUdXJuO1xuICB9O1xuXG4gIHJldHVybiB7IHJlYWR5VXAsIHN3aXRjaFR1cm4sIGJvYXJkLCBpc1JlYWR5IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodW1hbihteVR1cm4gPSBmYWxzZSkge1xuICBjb25zdCBuYW1lID0gbXlUdXJuID8gXCJQbGF5ZXIgMVwiIDogXCJQbGF5ZXIgMlwiO1xuICBjb25zdCBpc0h1bWFuID0gdHJ1ZTtcblxuICByZXR1cm4geyAuLi5wbGF5ZXIoKSwgaXNIdW1hbiwgbXlUdXJuLCBuYW1lIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlcihteVR1cm4gPSBmYWxzZSkge1xuICBjb25zdCBuYW1lID0gXCJQbGF5ZXIgMlwiO1xuICBjb25zdCBpc0h1bWFuID0gZmFsc2U7XG5cbiAgbGV0IGluaXRpYWxIaXQgPSBudWxsO1xuICBsZXQgcHJldmlvdXNBdHRhY2tIaXQgPSBmYWxzZTtcbiAgbGV0IGhpdEhpc3RvcnkgPSBbXTtcbiAgbGV0IGF0dGFja1N0YWNrID0gW107XG4gIGNvbnN0IGF0dGFjayA9IGZ1bmN0aW9uIChvcHBvbmVudCkge1xuICAgIGlmIChpbml0aWFsSGl0KSB7XG4gICAgICBjb25zdCBhdHRhY2tlZFNoaXAgPSBvcHBvbmVudC5ib2FyZC5nZXRTaGlwQXQoaW5pdGlhbEhpdCk7XG4gICAgICBpZiAoYXR0YWNrZWRTaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIGNvbnN0IHN1bmtTaGlwQ29vcmRpbmF0ZXMgPSBhdHRhY2tlZFNoaXAuaGl0Q29vcmRpbmF0ZXMubWFwKFxuICAgICAgICAgIChoaXRDb29yZGluYXRlKSA9PiBKU09OLnN0cmluZ2lmeShoaXRDb29yZGluYXRlKSxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgaGl0SGlzdG9yeS5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgaWYgKCFzdW5rU2hpcENvb3JkaW5hdGVzLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGUpKSkge1xuICAgICAgICAgICAgcmVtYWluaW5nQ29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBoaXRIaXN0b3J5ID0gcmVtYWluaW5nQ29vcmRpbmF0ZXM7XG4gICAgICAgIGF0dGFja1N0YWNrID0gW107XG4gICAgICAgIHByZXZpb3VzQXR0YWNrSGl0ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGhpdEhpc3RvcnkubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICBpbml0aWFsSGl0ID0gaGl0SGlzdG9yeS5wb3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbml0aWFsSGl0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbml0aWFsSGl0ICYmIHByZXZpb3VzQXR0YWNrSGl0KSB7XG4gICAgICBjb25zdCBsYXN0SGl0ID0gaGl0SGlzdG9yeVtoaXRIaXN0b3J5Lmxlbmd0aCAtIDFdO1xuICAgICAgY29uc3QgeDEgPSBpbml0aWFsSGl0WzFdO1xuICAgICAgY29uc3QgeTEgPSBpbml0aWFsSGl0WzBdO1xuICAgICAgY29uc3QgeDIgPSBsYXN0SGl0WzFdO1xuICAgICAgY29uc3QgeTIgPSBsYXN0SGl0WzBdO1xuXG4gICAgICBjb25zdCB4RGlmZiA9IHgxIC0geDI7XG4gICAgICBjb25zdCB5RGlmZiA9IHkxIC0geTI7XG5cbiAgICAgIGlmICh4RGlmZiA8IDApIHtcbiAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgY29uc3QgcmlnaHRPbmUgPSBbbGFzdEhpdFswXSwgbGFzdEhpdFsxXSArIDFdO1xuICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmQuaXNBdHRhY2thYmxlKHJpZ2h0T25lKSkge1xuICAgICAgICAgIGF0dGFja1N0YWNrLnB1c2gocmlnaHRPbmUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHhEaWZmID4gMCkge1xuICAgICAgICAvLyBsZWZ0XG4gICAgICAgIGNvbnN0IGxlZnRPbmUgPSBbbGFzdEhpdFswXSwgbGFzdEhpdFsxXSAtIDFdO1xuICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmQuaXNBdHRhY2thYmxlKGxlZnRPbmUpKSB7XG4gICAgICAgICAgYXR0YWNrU3RhY2sucHVzaChsZWZ0T25lKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh5RGlmZiA8IDApIHtcbiAgICAgICAgLy8gdXBcbiAgICAgICAgY29uc3QgdXBPbmUgPSBbbGFzdEhpdFswXSArIDEsIGxhc3RIaXRbMV1dO1xuICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmQuaXNBdHRhY2thYmxlKHVwT25lKSkge1xuICAgICAgICAgIGF0dGFja1N0YWNrLnB1c2godXBPbmUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHlEaWZmID4gMCkge1xuICAgICAgICAvLyBkb3duXG4gICAgICAgIGNvbnN0IGRvd25PbmUgPSBbbGFzdEhpdFswXSAtIDEsIGxhc3RIaXRbMV1dO1xuICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmQuaXNBdHRhY2thYmxlKGRvd25PbmUpKSB7XG4gICAgICAgICAgYXR0YWNrU3RhY2sucHVzaChkb3duT25lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5pdGlhbEhpdCAmJiBhdHRhY2tTdGFjay5sZW5ndGggPD0gMCkge1xuICAgICAgbGV0IHVwT25lID0gW2luaXRpYWxIaXRbMF0gKyAxLCBpbml0aWFsSGl0WzFdXTtcbiAgICAgIHdoaWxlIChcbiAgICAgICAgb3Bwb25lbnQuYm9hcmQuaXNIaXRBdCh1cE9uZSkgJiZcbiAgICAgICAgIW9wcG9uZW50LmJvYXJkLmdldFNoaXBBdCh1cE9uZSkuaXNTdW5rKClcbiAgICAgICkge1xuICAgICAgICB1cE9uZSA9IFt1cE9uZVswXSArIDEsIHVwT25lWzFdXTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHBvbmVudC5ib2FyZC5pc0F0dGFja2FibGUodXBPbmUpKSB7XG4gICAgICAgIGF0dGFja1N0YWNrLnB1c2godXBPbmUpO1xuICAgICAgfVxuXG4gICAgICBsZXQgZG93bk9uZSA9IFtpbml0aWFsSGl0WzBdIC0gMSwgaW5pdGlhbEhpdFsxXV07XG4gICAgICB3aGlsZSAoXG4gICAgICAgIG9wcG9uZW50LmJvYXJkLmlzSGl0QXQoZG93bk9uZSkgJiZcbiAgICAgICAgIW9wcG9uZW50LmJvYXJkLmdldFNoaXBBdChkb3duT25lKS5pc1N1bmsoKVxuICAgICAgKSB7XG4gICAgICAgIGRvd25PbmUgPSBbZG93bk9uZVswXSArIDEsIGRvd25PbmVbMV1dO1xuICAgICAgfVxuICAgICAgaWYgKG9wcG9uZW50LmJvYXJkLmlzQXR0YWNrYWJsZShkb3duT25lKSkge1xuICAgICAgICBhdHRhY2tTdGFjay5wdXNoKGRvd25PbmUpO1xuICAgICAgfVxuXG4gICAgICBsZXQgcmlnaHRPbmUgPSBbaW5pdGlhbEhpdFswXSwgaW5pdGlhbEhpdFsxXSArIDFdO1xuICAgICAgd2hpbGUgKFxuICAgICAgICBvcHBvbmVudC5ib2FyZC5pc0hpdEF0KHJpZ2h0T25lKSAmJlxuICAgICAgICAhb3Bwb25lbnQuYm9hcmQuZ2V0U2hpcEF0KHJpZ2h0T25lKS5pc1N1bmsoKVxuICAgICAgKSB7XG4gICAgICAgIHJpZ2h0T25lID0gW3JpZ2h0T25lWzBdLCByaWdodE9uZVsxXSArIDFdO1xuICAgICAgfVxuICAgICAgaWYgKG9wcG9uZW50LmJvYXJkLmlzQXR0YWNrYWJsZShyaWdodE9uZSkpIHtcbiAgICAgICAgYXR0YWNrU3RhY2sucHVzaChyaWdodE9uZSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBsZWZ0T25lID0gW2luaXRpYWxIaXRbMF0sIGluaXRpYWxIaXRbMV0gLSAxXTtcbiAgICAgIHdoaWxlIChcbiAgICAgICAgb3Bwb25lbnQuYm9hcmQuaXNIaXRBdChsZWZ0T25lKSAmJlxuICAgICAgICAhb3Bwb25lbnQuYm9hcmQuZ2V0U2hpcEF0KGxlZnRPbmUpLmlzU3VuaygpXG4gICAgICApIHtcbiAgICAgICAgbGVmdE9uZSA9IFtsZWZ0T25lWzBdICsgMSwgbGVmdE9uZVsxXV07XG4gICAgICB9XG4gICAgICBpZiAob3Bwb25lbnQuYm9hcmQuaXNBdHRhY2thYmxlKGxlZnRPbmUpKSB7XG4gICAgICAgIGF0dGFja1N0YWNrLnB1c2gobGVmdE9uZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGF0dGFja1N0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGF0dGFja0Nvb3JkID0gYXR0YWNrU3RhY2sucG9wKCk7XG5cbiAgICAgIHJldHVybiBhdHRhY2tDb29yZDtcbiAgICB9XG5cbiAgICBpZiAoYXR0YWNrU3RhY2subGVuZ3RoIDw9IDApIHtcbiAgICAgIGNvbnN0IGF0dGFja1Bvb2wgPSBbXTtcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3cgKz0gMSkge1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sICs9IDEpIHtcbiAgICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmQuaXNBdHRhY2thYmxlKFtyb3csIGNvbF0pKSB7XG4gICAgICAgICAgICBhdHRhY2tQb29sLnB1c2goW3JvdywgY29sXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGF0dGFja1Bvb2wubGVuZ3RoIC0gMSkpO1xuICAgICAgY29uc3QgcmFuZG9tQXR0YWNrID0gYXR0YWNrUG9vbFtyYW5kb21JbmRleF07XG4gICAgICByZXR1cm4gcmFuZG9tQXR0YWNrO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgbG9nQXR0YWNrID0gKGlzSGl0LCBjb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKGlzSGl0ICYmICFpbml0aWFsSGl0KSB7XG4gICAgICBpbml0aWFsSGl0ID0gY29vcmRpbmF0ZTtcbiAgICB9IGVsc2UgaWYgKGlzSGl0KSB7XG4gICAgICBoaXRIaXN0b3J5LnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICBwcmV2aW91c0F0dGFja0hpdCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZXZpb3VzQXR0YWNrSGl0ID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IC4uLnBsYXllcigpLCBhdHRhY2ssIGxvZ0F0dGFjaywgaXNIdW1hbiwgbXlUdXJuLCBuYW1lIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlwKGxlbmd0aCwgb3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCIpIHtcbiAgY29uc3QgaGl0Q29vcmRpbmF0ZXMgPSBbXTtcblxuICBjb25zdCBoaXQgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGhpdENvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgcmV0dXJuIGhpdENvb3JkaW5hdGVzO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IGxlbmd0aCAtIGhpdENvb3JkaW5hdGVzLmxlbmd0aCA8PSAwO1xuXG4gIHJldHVybiB7IGxlbmd0aCwgb3JpZW50YXRpb24sIGhpdENvb3JkaW5hdGVzLCBoaXQsIGlzU3VuayB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInZhciB3ZWJwYWNrUXVldWVzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBxdWV1ZXNcIikgOiBcIl9fd2VicGFja19xdWV1ZXNfX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgd2VicGFja0Vycm9yID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBlcnJvclwiKSA6IFwiX193ZWJwYWNrX2Vycm9yX19cIjtcbnZhciByZXNvbHZlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUgJiYgcXVldWUuZCA8IDEpIHtcblx0XHRxdWV1ZS5kID0gMTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gLTEpO1xuXHR2YXIgZGVwUXVldWVzID0gbmV3IFNldCgpO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSByZXNvbHZlO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAocXVldWUgJiYgZm4ocXVldWUpLCBkZXBRdWV1ZXMuZm9yRWFjaChmbiksIHByb21pc2VbXCJjYXRjaFwiXSh4ID0+IHt9KSk7XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0Ym9keSgoZGVwcykgPT4ge1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuO1xuXHRcdHZhciBnZXRSZXN1bHQgPSAoKSA9PiAoY3VycmVudERlcHMubWFwKChkKSA9PiB7XG5cdFx0XHRpZihkW3dlYnBhY2tFcnJvcl0pIHRocm93IGRbd2VicGFja0Vycm9yXTtcblx0XHRcdHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTtcblx0XHR9KSlcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKGdldFJlc3VsdCkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR2YXIgZm5RdWV1ZSA9IChxKSA9PiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkgJiYgKGRlcFF1ZXVlcy5hZGQocSksIHEgJiYgIXEuZCAmJiAoZm4ucisrLCBxLnB1c2goZm4pKSkpO1xuXHRcdFx0Y3VycmVudERlcHMubWFwKChkZXApID0+IChkZXBbd2VicGFja1F1ZXVlc10oZm5RdWV1ZSkpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiBnZXRSZXN1bHQoKTtcblx0fSwgKGVycikgPT4gKChlcnIgPyByZWplY3QocHJvbWlzZVt3ZWJwYWNrRXJyb3JdID0gZXJyKSA6IG91dGVyUmVzb2x2ZShleHBvcnRzKSksIHJlc29sdmVRdWV1ZShxdWV1ZSkpKTtcblx0cXVldWUgJiYgcXVldWUuZCA8IDAgJiYgKHF1ZXVlLmQgPSAwKTtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
