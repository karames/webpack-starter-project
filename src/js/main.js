/**
 * @fileOverview main.js
 * @author Nono Karames
 * @version 1.0.0
 */

// Importación de funciones, módulos y estilos
import {
  mostrarAlerta,
} from './mensajes';

import {
  saludar,
} from './saludo';

import {
  sumar,
  restar,
  multiplicar,
  dividir,
} from './aritmetica';

// Importación de estilos
import '../css/styles.css';
import '../scss/main.scss';

// EventListener ejecuta mostrarAlera from mensajes.js
const btnAlerta = document.getElementById('btn-alerta');
btnAlerta.addEventListener('click', mostrarAlerta);

// Ejecutando saludar() from saludo.js'
console.log(saludar());

// Ejecutando funciones from aritmetica.js');
const VALOR_1 = 9;
const VALOR_2 = 11;
console.log(`Numero 1: ${VALOR_1} - Numero 2: ${VALOR_2}`);
console.log(`SUMA: ${sumar(VALOR_1, VALOR_2)}`);
console.log(`RESTA: ${restar(VALOR_1, VALOR_2)}`);
console.log(`MULTIPLICACION: ${multiplicar(VALOR_1, VALOR_2)}`);
console.log(`DIVISION: ${dividir(VALOR_1, VALOR_2)}`);

// Template Literals
const PERSONA = 'Armando Bronca Segura';
console.log(`Hola ${PERSONA}`);

// Comprobaciones ES para Babel
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
console.log('CLASES JS');
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
