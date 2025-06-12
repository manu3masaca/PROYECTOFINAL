// Crea una función expresada llamada calcularFactorial que reciba un número
// y devuelva su factorial.
// Fórmula del factorial: n! = n * (n-1) * (n-2) * ... * 1

// Declara la función
const calcularFactorial = function(numero) {
    if (typeof numero !== 'number' || numero < 0) {
        throw new Error("Por favor, ingresa un número entero no negativo.");
    }
    if (numero === 0 || numero === 1) {
        return 1; // El factorial de 0 y 1 es 1
    }
    for (let i = numero - 1; i >= 1; i--) {
        numero *= i; // Multiplica el número por todos los enteros menores que él
    } 
    return numero;
}

// Devuelve el resultado
console.log(calcularFactorial(5)); // 120