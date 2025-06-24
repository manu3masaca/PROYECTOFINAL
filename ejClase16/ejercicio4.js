//Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de
// sumarlos todos juntos. Es decir, deberías obtener 1 + 2 + 3 + 4. Al finalizar,
// imprime el total en la consola.

// Lista de números
let numeros = [1, 2, 3, 4];

// Sumar todos los números
let sumaTotal = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0); // 0 es el valor inicial del acumulador

// Mostrar el total en la consola
console.log(sumaTotal);