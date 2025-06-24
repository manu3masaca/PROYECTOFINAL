// Tienes una lista de nombres de personas: ['Lucía', 'Ana', 'María', 'Luis', 'José',
// 'Pablo']. Queremos realizar varias tareas con esta lista:
// o Primero, filtra los nombres que tengan menos de 5 letras.
// o Luego, transforma los nombres resultantes para que estén en
// mayúsculas.
// o Finalmente, construye una frase que diga: "Los nombres
// seleccionados son: [nombres]", donde [nombres] sea la lista resultante
// unida por comas.
// Al final, imprime la frase en la consola.

// Lista original de nombres
let nombres = ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo'];

// Filtrar nombres con menos de 5 letras
let nombresCortos = nombres.filter(nombre => nombre.length < 5);

// Transformar a mayúsculas
let nombresMayus = nombresCortos.map(nombre => nombre.toUpperCase());

// Construir la frase
let frase = `Los nombres seleccionados son: ${nombresMayus.join(', ')}`;

// Imprimir la frase
console.log(frase);