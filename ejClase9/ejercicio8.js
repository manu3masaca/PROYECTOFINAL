//Pide al usuario que ingrese las longitudes de los tres lados de un
//triángulo. Determina y muestra si el triángulo es equilátero, isósceles o
//escaleno. (Investiga sobre los triángulos para determinar la formula)

const prompt = require("prompt-sync")({ sigint: true });
function determinarTipoDeTriangulo(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
      return "Triángulo Equilátero";
    } else if (a === b || b === c || a === c) {
      return "Triángulo Isósceles";
    } else {
      return "Triángulo Escaleno";
    }
  } else {
    return "No es un triángulo válido";
  }
}

//pedir datos y mostrar respuesta
let a = parseInt(prompt("ingrese longitud de primer lado: "));
let b = parseInt(prompt("ingrese longitud de segundo lado: "));;
let c = parseInt(prompt("ingrese longitud de tercer lado: "));;
console.log( determinarTipoDeTriangulo(a, b, c));