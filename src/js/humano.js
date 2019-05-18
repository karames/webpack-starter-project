/**
 * @fileOverview humano.js
 * @author Nono Karames
 * @version 1.0.0
 */

/**
 * @class Humano
 * @classdesc Descripcion de la clase
 */
class Humano {
  /**
   * @description Descripcion del constructor
   * @param   {[string]}  _sexo  [descripcion para _sexo]
   * @param   {[number]}  _edad  [descripcion para _edad]
   */
  constructor(_sexo, _edad) {
    this.sexo = _sexo;
    this.edad = _edad;
  }
  /**
   * @function getSexo
   * @description Descripción de la función
   * @return  {[string]}  [descripcion del return]
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

// Exportación de la clase
export default Humano;
