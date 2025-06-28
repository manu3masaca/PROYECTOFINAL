//Pide al usuario que ingrese una lista de nombres separados por comas.
// Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”,
// “Pablo” y “Pedro”.
// Luego, escribe la función “transformarYAnalizarNombres”que realice las
// siguientes tareas:
// 1. Quite los espacios en blanco alrededor de cada nombre.
// 2. Verifique si existe el nombre "Juan".
// 3. Reemplace todos los nombres "María" por "Ana".
// 4. Encuentre el índice del nombre "Pedro".
// 5. Devuelva una cadena de nombres en orden alfabético separados
// por puntos. Investigar el método “.sort()”

const prompt = require('prompt-sync')();

// 1. Pedir al usuario que ingrese una lista de nombres separados por comas
let entrada = prompt("Ingresa los nombres separados por comas (ej: Julian, Maria, Malena, Andrea, Pablo, Pedro):");

// 2. Función para procesar los nombres
function transformarYAnalizarNombres(cadena) {
  // a. Dividir la cadena en nombres y quitar espacios extra
  let nombres = cadena.split(",").map(nombre => nombre.trim());

  // b. Verificar si existe el nombre "Juan"
  let existeJuan = nombres.includes("Juan");

  // c. Reemplazar todos los "Maria" o "María" por "Ana"
  nombres = nombres.map(nombre => {
    return nombre.toLowerCase() === "maria" || nombre === "María" ? "Ana" : nombre;
  });

  // d. Encontrar el índice del nombre "Pedro"
  let indicePedro = nombres.indexOf("Pedro");

  // e. Ordenar los nombres alfabéticamente y unirlos con puntos
  let nombresOrdenados = nombres.sort().join(".");

  // Devolver el resultado
  return {
    nombresOriginales: cadena,
    nombresLimpios: nombres,
    contieneJuan: existeJuan,
    indiceDePedro: indicePedro,
    nombresFinal: nombresOrdenados
  };
}

// 3. Ejecutar la función y mostrar el resultado en consola
let resultado = transformarYAnalizarNombres(entrada);
console.log(resultado);

