/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/aritmetica.js":
/*!******************************!*\
  !*** ./src/js/aritmetica.js ***!
  \******************************/
/*! exports provided: sumar, restar, multiplicar, dividir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumar", function() { return sumar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restar", function() { return restar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplicar", function() { return multiplicar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dividir", function() { return dividir; });
/**
 * @fileOverview aritmetica.js
 * @author Nono Karames
 * @version 1.0.0
 */
var sumar = function sumar(a, b) {
  return a + b;
};
var restar = function restar(a, b) {
  return a - b;
};
var multiplicar = function multiplicar(a, b) {
  return a * b;
};
var dividir = function dividir(a, b) {
  return a / b;
};

/***/ }),

/***/ "./src/js/humano.js":
/*!**************************!*\
  !*** ./src/js/humano.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @fileOverview humano.js
 * @author Nono Karames
 * @version 1.0.0
 */

/**
 * @class Humano
 * @classdesc Descripcion de la clase
 */
var Humano =
/*#__PURE__*/
function () {
  /**
   * @description Descripcion del constructor
   * @param   {[string]}  _sexo  [descripcion para _sexo]
   * @param   {[number]}  _edad  [descripcion para _edad]
   */
  function Humano(_sexo, _edad) {
    _classCallCheck(this, Humano);

    this.sexo = _sexo;
    this.edad = _edad;
  }
  /**
   * @function getSexo
   * @description Descripción de la función
   * @return  {[string]}  [descripcion del return]
   */


  _createClass(Humano, [{
    key: "getSexo",
    value: function getSexo() {
      return this.sexo;
    }
    /**
     * [getEdad description]
     *
     * @return  {[number]}  [return description]
     */

  }, {
    key: "getEdad",
    value: function getEdad() {
      return this.edad;
    }
  }]);

  return Humano;
}(); // Exportación de la clase


/* harmony default export */ __webpack_exports__["default"] = (Humano);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aritmetica__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aritmetica */ "./src/js/aritmetica.js");
/* harmony import */ var _humano__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./humano */ "./src/js/humano.js");
/* harmony import */ var _mensajes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mensajes */ "./src/js/mensajes.js");
/* harmony import */ var _saludo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saludo */ "./src/js/saludo.js");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_5__);
/**
 * @fileOverview main.js
 * @author Nono Karames
 * @version 1.0.0
 */
// Importación de módulos



 // Importación de estilos


 // Ejecutando funciones from aritmetica.js');

var VALOR_1 = 9;
var VALOR_2 = 11;
console.log("Valor Numero 1: ".concat(VALOR_1, " - Valor Numero 2: ").concat(VALOR_2));
console.log("SUMA: ".concat(Object(_aritmetica__WEBPACK_IMPORTED_MODULE_0__["sumar"])(VALOR_1, VALOR_2)));
console.log("RESTA: ".concat(Object(_aritmetica__WEBPACK_IMPORTED_MODULE_0__["restar"])(VALOR_1, VALOR_2)));
console.log("MULTIPLICACION: ".concat(Object(_aritmetica__WEBPACK_IMPORTED_MODULE_0__["multiplicar"])(VALOR_1, VALOR_2)));
console.log("DIVISION: ".concat(Object(_aritmetica__WEBPACK_IMPORTED_MODULE_0__["dividir"])(VALOR_1, VALOR_2))); // EventListener ejecuta mostrarAlerta from mensajes.js

var btnAlerta = document.getElementById('btn-alerta');
btnAlerta.addEventListener('click', _mensajes__WEBPACK_IMPORTED_MODULE_2__["default"]); // Ejecutando saludar() from saludo.js'

console.log(Object(_saludo__WEBPACK_IMPORTED_MODULE_3__["default"])()); // Template Literals

var PERSONA = 'Armando Bronca Segura';
console.log("Hola ".concat(PERSONA)); // Comprobaciones ES para Babel

(function (win, doc) {
  console.log('ARROW FUNCTION');
  console.log(doc);
  console.log(win);
})(window, document);

console.log('ARROW FUNCTION Y MAP');
var a = [2, 4, 6, 8, 10];
console.log(a);
var r = a.map(function (n) {
  return n * n;
});
console.log(r); // Clases

console.log('CLASES JS'); // Instanciación y salida

var Maria = new _humano__WEBPACK_IMPORTED_MODULE_1__["default"]('Hembra', 20);
var David = new _humano__WEBPACK_IMPORTED_MODULE_1__["default"]('Varon', 30);
console.log(Maria.getEdad(), Maria.getSexo());
console.log(David.getEdad(), David.getSexo());

/***/ }),

/***/ "./src/js/mensajes.js":
/*!****************************!*\
  !*** ./src/js/mensajes.js ***!
  \****************************/
/*! exports provided: mostrarAlerta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mostrarAlerta", function() { return mostrarAlerta; });
/**
 * @fileOverview mensajes.js
 * @author Nono Karames
 * @version 1.0.0
 */
var mostrarAlerta = function mostrarAlerta() {
  alert('Hola Mundo');
};

/***/ }),

/***/ "./src/js/saludo.js":
/*!**************************!*\
  !*** ./src/js/saludo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @fileOverview saludo.js
 * @author Nono Karames
 * @version 1.0.0
 */
var saludar = function saludar() {
  var nombre = 'Nono Karames';
  var mensaje = "Saludos ".concat(nombre);
  return mensaje;
};

/* harmony default export */ __webpack_exports__["default"] = (saludar);

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map