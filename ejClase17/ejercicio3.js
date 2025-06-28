//A partir del siguiente array de productos, escriba la función
// ‘gestionarProductos’ que realice las siguientes tareas:
// 1. Añada un nuevo producto al array.
// 2. Elimine el último producto del array.
// 3. Encuentre el índice de un producto específico. En este punto
// pueden usar forEach o investigar el método “findIndex()”
// /Global_Objects/Array/findIndex
// 4. Verifique si existe un producto con precio mayor a 50. Para esto
// investigar el método “.some()”
// Global_Objects/Array/some
// 5. Devuelva una cadena de nombres de productos separados por
// comas.

// Array inicial de productos
let productos = [
  { nombre: "Lapicero", precio: 5 },
  { nombre: "Cuaderno", precio: 15 },
  { nombre: "Calculadora", precio: 45 },
  { nombre: "Mochila", precio: 60 }
];

// Función para gestionar productos
function gestionarProductos(lista) {
  // 1. Añadir un nuevo producto
  lista.push({ nombre: "Regla", precio: 8 });

  // 2. Eliminar el último producto
  lista.pop();

  // 3. Encontrar el índice de un producto específico (por ejemplo "Cuaderno")
  let indiceCuaderno = lista.findIndex(producto => producto.nombre === "Cuaderno");

  // 4. Verificar si existe un producto con precio mayor a 50
  let hayProductoCaro = lista.some(producto => producto.precio > 50);

  // 5. Devolver una cadena con los nombres de productos separados por comas
  let nombresProductos = lista.map(producto => producto.nombre).join(", ");

  // Retornar resultados
  return {
    indiceCuaderno: indiceCuaderno,
    hayProductoCaro: hayProductoCaro,
    nombres: nombresProductos
  };
}

// Ejecutar la función y mostrar el resultado
let resultado = gestionarProductos(productos);
console.log(resultado);