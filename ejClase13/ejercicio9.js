// Crea una función declarada llamada contarHasta que reciba un número y
// use un bucle para imprimir todos los números desde 1 hasta ese número.

// Declara la función
function contarHasta(numero) {
    // Bucle para contar desde 1 hasta el número dado
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
}

// Llama a la función y muestra el resultado
contarHasta(5); // 1, 2, 3, 4, 5
contarHasta(3); // 1, 2, 3