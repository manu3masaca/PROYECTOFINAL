// Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El programa debe mostrar todos los 
// números pares que se encuentran entre esos dos valores, incluyendo los límites si son pares. Utiliza un ciclo for 
// para recorrer los números entre el inicio y el fin. Si el número inicial es mayor que el final, el programa debe 
// mostrar un mensaje indicando que los valores son inválidos.

const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese dos números enteros
let inicio = parseInt(prompt("Ingrese un número entero: "));
let fin = parseInt(prompt("Ingrese otro número entero: "));

// mostrar los números pares entre inicio y fin
for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// mostrar "error" si el número inicial es mayor que el final
if (inicio > fin) {
    console.log("Los valores ingresados son inválidos, el número inicial no puede ser mayor que el final.");
} 