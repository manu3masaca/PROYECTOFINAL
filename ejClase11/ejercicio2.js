// Vamos a programar un semáforo. Escribe un programa que le pida al usuario ingresar un color del semáforo: rojo, 
// amarillo o verde. Dependiendo del color ingresado, el programa debe imprimir un mensaje con la acción correspondiente:
// •	Rojo: "Alto, no puedes avanzar."
// •	Amarillo: "Precaución, prepárate para avanzar."
// •	Verde: "Avanza con seguridad."
// Si el usuario ingresa un color inválido, el programa debe mostrar un mensaje: "Color no reconocido, ingresa rojo, 
// amarillo o verde."
// Utiliza un switch para resolver este ejercicio.

const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese un color 
let colorSemaforo = prompt("Ingrese un color del semáforo (rojo, amarillo, verde): ").toLowerCase();

// Analizar el color ingresado y mostrar el mensaje correspondiente
switch (colorSemaforo) {
    case 'rojo':
        console.log("Alto, no puede pasar.");
        break;
    case 'amarillo':
        console.log("Precaución, prepárese para avanzar.");
        break;
    case 'verde':
        console.log("puede pasar");
        break;
    default :
        console.log("Color no reconocido, ingrese rojo, amarillo o verde.");
        break;
}

