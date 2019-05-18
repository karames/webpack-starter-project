/**
 * @fileOverview main.js
 * @author Nono Karames
 * @version 1.0.0
 */

// Importación de módulos
import {
  sumar,
  restar,
  multiplicar,
  dividir,
} from './aritmetica';

import Humano from './humano';
import mostrarAlerta from './mensajes';
import saludar from './saludo';

// Importación de estilos
import '../css/styles.css';
import '../scss/main.scss';

// Ejecutando funciones from aritmetica.js');
const VALOR_1 = 9;
const VALOR_2 = 11;
console.log(`Valor Numero 1: ${VALOR_1} - Valor Numero 2: ${VALOR_2}`);
console.log(`SUMA: ${sumar(VALOR_1, VALOR_2)}`);
console.log(`RESTA: ${restar(VALOR_1, VALOR_2)}`);
console.log(`MULTIPLICACION: ${multiplicar(VALOR_1, VALOR_2)}`);
console.log(`DIVISION: ${dividir(VALOR_1, VALOR_2)}`);

// EventListener ejecuta mostrarAlerta from mensajes.js
const btnAlerta = document.getElementById('btn-alerta');
btnAlerta.addEventListener('click', mostrarAlerta);

// Ejecutando saludar() from saludo.js'
console.log(saludar());

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

// Instanciación y salida
const Maria = new Humano('Hembra', 20);
const David = new Humano('Varon', 30);
console.log(Maria.getEdad(), Maria.getSexo());
console.log(David.getEdad(), David.getSexo());
