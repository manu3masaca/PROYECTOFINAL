//Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. Luego, solicita al usuario
//ingresar un nombre y verifica si ese nombre se encuentra en el array. (Pueden desglosar en pasos el código si eso 
// les facilita su desarrollo)
// usar aarays y condicionales.

const prompt = require('prompt-sync')();

// 1. Crear un array vacío para almacenar los nombres.
let nombres = [];

// 2. Usar un bucle for para solicitar al usuario que ingrese 5 nombres.
for (let i = 0; i < 5; i++) {
    let nombre = prompt(`Ingrese el nombre ${i + 1}: `);
    nombres.push(nombre); // Agrega el nombre al array

}

// 3. Solicitar al usuario que ingrese un nombre para buscar en el array.
let nombreBuscado = prompt("Ingrese el nombre a buscar: ");

// 4. Verificar si el nombre ingresado se encuentra en el array.
let encontrado = false;
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].toLowerCase() === nombreBuscado.toLowerCase()) {
        encontrado = true; // Si se encuentra, cambiamos la variable a true
        break; // Salimos del bucle si encontramos el nombre
    }
}

// 5. Imprimir un mensaje indicando si el nombre fue encontrado o no.
if (encontrado) {
    console.log(`El nombre "${nombreBuscado}" se ha encontrado.`);
    }
else console.log(`El nombre "${nombreBuscado}" no se ha encontrado.`);
