//Para este ejercicio vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único. Rojo: 505
// Verde 505
// IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el método “push” en los Arrays. 

//generar las funciones
function sumarDiagonalRoja(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][i]; // Suma los valores de la diagonal roja
    }
    return suma;
}

function marcarDiagonalVerde(matriz) {
    let diagonalVerde = [];
    for (let i = 0; i < matriz.length; i++) {
        diagonalVerde.push(matriz[i][matriz.length - 1 - i]); // Agrega los valores de la diagonal verde
    }
    return diagonalVerde;
}

// Definir la matriz
let matriz = [
      [255, 0, 505,],
      [0, 0, 0],
      [0, 0, 250]
];
    
// Llamar a las funciones y mostrar los resultados
let sumaRoja = sumarDiagonalRoja(matriz);
let diagonalVerde = marcarDiagonalVerde(matriz);
console.log("Suma de la diagonal roja: " + sumaRoja); // Debería ser 505
console.log("Valores de la diagonal verde: " + diagonalVerde.join(", ")); // Debería ser 505

