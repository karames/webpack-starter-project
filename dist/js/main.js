!function(o){var e={};function n(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return o[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=o,n.c=e,n.d=function(o,e,t){n.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:t})},n.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,e){if(1&e&&(o=n(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var r in o)n.d(t,r,function(e){return o[e]}.bind(null,r));return t},n.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(e,"a",e),e},n.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},n.p="",n(n.s=2)}([function(o,e,n){},function(o,e,n){},function(o,e,n){"use strict";n.r(e);function t(o,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}var r=function(){function o(e,n){!function(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),this.sexo=e,this.edad=n}var e,n,r;return e=o,(n=[{key:"getSexo",value:function(){return this.sexo}},{key:"getEdad",value:function(){return this.edad}}])&&t(e.prototype,n),r&&t(e,r),o}(),c=function(){return console.log("Salida de datos JSON por consola"),fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")},l=function(){return"Saludos ".concat("Nono Karames")};n(0),n(1);console.log("Valor Numero 1: ".concat(9," - Valor Numero 2: ").concat(11)),console.log("SUMA: ".concat(function(o,e){return o+e}(9,11))),console.log("RESTA: ".concat(function(o,e){return o-e}(9,11))),console.log("MULTIPLICACION: ".concat(function(o,e){return o*e}(9,11))),console.log("DIVISION: ".concat(function(o,e){return o/e}(9,11))),document.getElementById("btn-alerta").addEventListener("click",c),console.log(l());var a,u;console.log("Hola ".concat("Armando Bronca Segura")),a=window,u=document,console.log("ARROW FUNCTION"),console.log(u),console.log(a),console.log("ARROW FUNCTION Y MAP");var i=[2,4,6,8,10];console.log(i);var s=i.map(function(o){return o*o});console.log(s),console.log("CLASES JS");var f=new r("Hembra",20),d=new r("Varon",30);console.log(f.getEdad(),f.getSexo()),console.log(d.getEdad(),d.getSexo())}]);