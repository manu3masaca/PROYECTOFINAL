// Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos saber
// si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo

// Lista de nombres
let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];

// Buscar el nombre 'Laura'
let encontrado = nombres.find(function(nombre) {
  return nombre === 'Laura';
});

// Mostrar el resultado
console.log(encontrado);