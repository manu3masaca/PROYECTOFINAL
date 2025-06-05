// Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación
// o división. Según la operación ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario ingresa 
// una operación inválida, el programa debe mostrar un mensaje de error. Usa switch para resolverlo.

const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese dos números + una operación
let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));
let operacion = prompt("Ingrese la operación a realizar en letras ej:(suma, resta, multiplicacion o division): ").toLowerCase();

// imprimir el resultado según la operación ingresada
switch (operacion) {
    case "suma":
        console.log("El resultado es: " + (numero1 + numero2));
        break;
    case "resta":
        console.log("El resultado es: " + (numero1 - numero2));
        break;
    case "multiplicacion":
        console.log("El resultado es: " + (numero1 * numero2));
        break;
    case "division":
        console.log("El resultado es: " + (numero1 / numero2));
        break;
    default: "operación inválida";
        console.log("Error: la operación ingresada no es válida.");
        break;
}
