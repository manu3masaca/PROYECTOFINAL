// Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. Luego, pide al usuario que adivine 
// el número hasta 3 intentos. Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación 
// y detén los intentos restantes. Si no acierta después de los 3 intentos, muestra el número secreto. Usa un for para 
// resolver este ejercicio.

const prompt = require('prompt-sync')();

// Generar un número al azar entre 1 y 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

// pedir al usuario que adivine el número hasta 3 intentos
let numero = parseInt(prompt("Adivina el número secreto entre 1 y 10, tienes 3 intentos: "));
let intentos = 3;

// iniciar el ciclo para los intentos
for (let i = 1; i <= intentos; i++) {
    if (numero === numeroSecreto) {
        console.log("¡Felicidades! Adivinaste el número secreto: " + numeroSecreto);
        break; 
    } else if (i < intentos) {
        console.log("No es correcto. Te quedan " + (intentos - i) + " intentos.");
        numero = parseInt(prompt("Inténtalo de nuevo: "));
    } else {console.log("Lo siento, has perdido. El número secreto era: " + numeroSecreto);
    }
}