//Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba
//una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.
// La fórmula para convertir Celsius a Fahrenheit es: F = C * 9/5 + 32

//declara la funcion
function convertirCelsiusAFahrenheit(celsius) {
    //convierte la temperatura de Celsius a Fahrenheit
    let fahrenheit = celsius * 9 / 5 + 32;
    
    //devuelve el resultado
    return fahrenheit;
}

//llama a la funcion y muestra el resultado
console.log(convertirCelsiusAFahrenheit(0)); // 32
console.log(convertirCelsiusAFahrenheit(100)); // 212
console.log(convertirCelsiusAFahrenheit(37)); // 98.6