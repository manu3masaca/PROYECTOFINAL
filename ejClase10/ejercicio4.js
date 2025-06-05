//1.Declara una variable llamada verdadero y asígnale un dato de tipo booleano (true o false).
//2.Declara una variable llamada texto y asígnale un string de tu elección (puedes usar cualquier mensaje que prefieras).
//3.Declara una variable llamada numero y asígnale un dato numérico (puedes usar cualquier número entero o decimal).
//4.Declara una variable llamada nada y asígnale un valor que represente la ausencia de valor en JavaScript.

//despues 
// 1.Realiza una operación matemática usando la variable número, por ejemplo, suma o resta con otro número de tu elección.
// 2.Concatena el “string” de la variable texto con otro mensaje adicional.
// 3.Verifica si la variable “verdadero” es true o false y muestra un mensaje diferente según el resultado.
// 4.Implementa una condición para verificar si la variable nada es null y muestra un mensaje si es así.

// declarar las variables
let verdadero = true;
let texto = "hola como estas";
let numero = 22;
let nada = "";

// realzar pruebas

let resultadoOperacion = numero + 10; // suma 10 al numero
let textoConcatenado = texto + " , espero que bien"; // concatena un mensaje al texto
let mensajeVerdadero = verdadero ? "verdadero" : "falso"; // verifica si verdadero es true o false
let mensajeNada = nada === "" ? "no hay valor" : "tiene un valor"; // verifica si nada es null

// mostrar los resultados
console.log(textoConcatenado)
console.log("22 + 10 = " + resultadoOperacion); 
console.log("verdadero siempre es " + mensajeVerdadero);
console.log("y cuando no hay nada, " + mensajeNada);
