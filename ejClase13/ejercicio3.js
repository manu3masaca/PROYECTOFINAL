// Declara una variable global llamada saludoGlobal con el valor "Hola desde el
// scope global". Luego, crea una función llamada mostrarMensaje que declare
// una variable local llamada saludoLocal con el valor "Hola desde el scope
// local" y que imprima ambos mensajes.

// crear variable global
let saludoGlobal = "Hola desde el scope global";

// crear función que declare una variable local
function mostrarMensaje() {
    let saludoLocal = "Hola desde el scope local";
    console.log(saludoGlobal); // imprimir variable global
    console.log(saludoLocal); // imprimir variable local
}

// llamar a la función
mostrarMensaje(); // "Hola desde el scope global" "Hola desde el scope local"

