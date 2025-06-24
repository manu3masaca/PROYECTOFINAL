//Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript'].
// Queremos transformarlas para que cada palabra tenga un prefijo "¡" y un
// sufijo "!". Por ejemplo, la palabra "hola" se debería convertir en "¡hola!".

// Lista original de palabras
let palabras = ['hola', 'mundo', 'javascript'];

// Transformar cada palabra con el prefijo y sufijo
let palabrasTransformadas = palabras.map(function(palabra) {
  return '¡' + palabra + '!';
});

// Mostrar el resultado
console.log(palabrasTransformadas);