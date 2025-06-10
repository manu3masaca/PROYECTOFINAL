//Escribe un programa que solicite al usuario ingresar una contraseña. Si la contraseña es incorrecta, debe volver a
//pedirla hasta que el usuario ingrese la correcta. La contraseña correcta es "1234". usar estructura do while.

const prompt = require('prompt-sync')();

// Definimos la contraseña correcta
const claveCorrecta = "1234";

// Inicializamos la variable para almacenar la contraseña ingresada
let claveIngresada = "";

// Usamos un bucle do while
do {
    // Pedimos al usuario que ingrese la contraseña
    claveIngresada = prompt("Ingrese la contraseña: ");
    
    // Verificamos si la contraseña ingresada es correcta
    if (claveIngresada !== claveCorrecta) {
        console.log("Contraseña incorrecta, intente nuevamente.");
    }
}

while (claveIngresada !== claveCorrecta);

// Imprimimos un mensaje de éxito

console.log("te damos la bienvenida");