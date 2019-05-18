/**
 * @fileOverview mensajes.js
 * @author Nono Karames
 * @version 1.0.0
 */

const mostrarAlerta = () => {
  console.log('Salida de datos JSON por consola');
  const datos = fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
  return datos;
};

export default mostrarAlerta;
