// Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. Queremos
// saber cuántas letras hay en total entre todas las palabras. Por ejemplo, 'sol'
// tiene 3 letras, 'luna' tiene 4, y 'estrella' tiene 8. La suma total debería ser 15.

// Lista de palabras
let palabras = ['sol', 'luna', 'estrella'];

// Sumar la longitud de todas las palabras
let totalLetras = palabras.reduce(function(acumulador, palabra) {
  return acumulador + palabra.length;
}, 0);

// Mostrar el resultado
console.log(totalLetras);