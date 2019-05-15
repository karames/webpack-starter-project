/**
 * @fileOverview main.js
 * @author Nono Karames < karames@gmail.com >
 * @version 1.0.0
 */

console.log('Estamos en app.js');

// Importación de funciones y módulos
console.log('Cargando importaciones JS');
import {saludar} from './contacto';
import {suma, resta, multiplicacion, division} from './funciones';

// Importación de los estilos CSS
// import css from '../css/style-css.css';
console.log('Cargando importaciones CSS|SCSS');
import '../css/styles.css';
import '../scss/main.scss';

console.log('Ejecutando contenido contacto.js');
console.log(saludar());
// console.log(sass);
// console.log(prism);

// Funcionesimportadas desde moduloFunciones.js
console.log('Ejecutando contenido funciones.js');
const VALOR_1 = 9;
const VALOR_2 = 11;
console.log(`Numero 1: ${VALOR_1} - Numero 2: ${VALOR_2}`);
console.log(`SUMA: ${suma(VALOR_1, VALOR_2)}`);
console.log(`RESTA: ${resta(VALOR_1, VALOR_2)}`);
console.log(`MULTIPLICACION: ${multiplicacion(VALOR_1, VALOR_2)}`);
console.log(`DIVISION: ${division(VALOR_1, VALOR_2)}`);

console.log('Ejecutando contenido app.js');
// Template Literals
const persona = 'Armando Bronca Segura';
console.log(`Hola ${persona}`);

const MATEMATICAS = {
  suma: (a, b) => a + b,
  resta: (a, b) => a - b,
  multiplicacion: (a, b) => a * b,
  division: (a, b) => a / b,
};

console.log(MATEMATICAS.suma(1, 2));
console.log(MATEMATICAS.resta(1, 2));
console.log(MATEMATICAS.multiplicacion(1, 2));
console.log(MATEMATICAS.division(1, 2));

// Comprobaciones ES6, ES7 y ES8 para Babel Webpack
((win, doc) => {
  console.log('ARROW FUNCTION');
  console.log(doc);
  console.log(win);
})(window, document);

console.log('ARROW FUNCTION Y MAP');
const a = [2, 4, 6, 8, 10];
console.log(a);
const r = a.map((n) => n * n);
console.log(r);

// Clases
console.log('CLASES JAVASCRIPT');
/**
 * [Humano description]
 */
class Humano {
/**
 * [descripcion del constructor]
 *
 * @param   {[string]}  _sexo  [descripcion para _sexo]
 * @param   {[number]}  _edad  [descripcion para _edad]
 *
 */
  constructor(_sexo, _edad) {
    this.sexo = _sexo;
    this.edad = _edad;
  }
  /**
   * [getSexo description]
   *
   * @return  {[string]}  [return description]
   */
  getSexo() {
    return this.sexo;
  }
  /**
   * [getEdad description]
   *
   * @return  {[number]}  [return description]
   */
  getEdad() {
    return this.edad;
  }
}

// Instanciación y salida
const Maria = new Humano('Hembra', 20);
const David = new Humano('Varon', 30);
console.log(Maria.getEdad(), Maria.getSexo());
console.log(David.getEdad(), David.getSexo());
