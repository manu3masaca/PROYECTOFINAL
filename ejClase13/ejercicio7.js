//Declara una variable global llamada horaActual (puedes asignarle un valor
// fijo). Crea una función declarada llamada mostrarSaludo que imprima
// "Buenos días" si la hora es menor a 12, "Buenas tardes" si es menor a 18, o
// "Buenas noches" en cualquier otro caso.

//declarar variable
let horaActual = ("8:20"); 

//crear funcion 
function mostrarSaludo() {
    //convertir hora a numero
    let hora = parseInt(horaActual.split(":")[0]);
    
    //condicionales para imprimir el saludo correspondiente
    if (hora < 12) {
        console.log("Buenos días");
    } else if (hora < 18) {
        console.log("Buenas tardes");
    } else {
        console.log("Buenas noches");
    }
}

//llamar a la funcion
mostrarSaludo(); // "Buenos días"
