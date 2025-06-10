//Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero 
//menores que 1000.

// Usar arrays.
let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4],
];

// Inicializamos la variable suma para almacenar la suma de los números que cumplen la condición.
let suma = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        let numero = matriz[i][j];
        if (numero >= 10 && numero < 1000) {
            suma += numero;
        }
    }
}

// Imprimimos la suma de los números que cumplen la condición.
console.log("La suma de los números mayores o iguales a 10 y menores que 1000 es: " + suma);


