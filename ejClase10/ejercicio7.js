// Declara dos variables con valores iniciales y luego intercambia sus valores. Muestra los valores antes y después
// del intercambio en la consola.
// Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea),
// eres libre de elegir el que desees

// Declarar variables:
let primerValor = 5;
let segundoValor = 10;

// Mostrar valores
console.log("numeros iniciales: " + primerValor + " y " + segundoValor);

// Intercambiar valores usando una variable temporal:
let valorTemporal = primerValor;
primerValor = segundoValor;
segundoValor = valorTemporal;

// Mostrar valores después del intercambio
console.log("numeros intercambiados: " + primerValor + " y " + segundoValor);
