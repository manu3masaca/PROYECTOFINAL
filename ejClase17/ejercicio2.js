//Pide al usuario que ingrese una oración. Luego, escribe la función
// “procesarOracion” que haga lo siguiente:
// 1. Quite los espacios en blanco al principio y al final.
// 2. Divida la oración en palabras.
// 3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar
// “/a/g” que indica que se debe buscar todas las apariciones del
// carácter 'a' en la cadena (la bandera g es para global, lo que
// significa que reemplazará todas las apariciones, no solo la primera).
// 4. Encuentre la posición de la primera aparición de la palabra
// "javascript". De no aparecer retornar -1
// 5. Convierta la oración a una cadena de palabras separadas por
// guiones.

const prompt = require('prompt-sync')();

// 1. Pedir al usuario que ingrese una oración
let oracion = prompt("Ingresa una oración:");

// 2. Función para procesar la oración
function procesarOracion(texto) {
  // a. Quitar espacios al principio y al final
  let oracionLimpia = texto.trim();

  // b. Dividir la oración en palabras
  let palabras = oracionLimpia.split(" ");

  // c. Reemplazar todas las 'a' por '@'
  let oracionReemplazada = oracionLimpia.replace(/a/g, "@");

  // d. Buscar la primera aparición de "javascript"
  let posicion = oracionLimpia.toLowerCase().indexOf("javascript");

  // e. Convertir la oración en palabras separadas por guiones
  let oracionConGuiones = palabras.join("-");

  // Resultado final
  return {
    original: texto,
    limpia: oracionLimpia,
    reemplazada: oracionReemplazada,
    posicionJavascript: posicion,
    conGuiones: oracionConGuiones
  };
}

// 3. Ejecutar la función y mostrar el resultado
let resultado = procesarOracion(oracion);
console.log(resultado);