//Solicita al usuario una edad y usa una función flecha para clasificarla en
//niño, adolescente, adulto o adulto mayor.

const prompt = require('prompt-sync')();

// Solicita la edad al usuario
let edad = parseInt(prompt("Ingrese su edad: "));

// Función flecha para clasificar la edad
const clasificarEdad = (edad) => {
  if (edad >= 0 && edad <= 12) {
    return "Niño";
  } else if (edad >= 13 && edad <= 17) {
    return "Adolescente";
  } else if (edad >= 18 && edad <= 59) {
    return "Adulto";
  } else if (edad >= 60) {
    return "Adulto mayor";
  } else {
    return "Edad no válida";
  }
};

// Clasifica y muestra el resultado
let clasificacion = clasificarEdad(edad);
console.log(`Según su edad, usted es: ${clasificacion}`);
