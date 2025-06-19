//Para este ejercicio deberán definir un objeto literal “deportista”, con los
// siguientes atributos: nombre, energía, experiencia.
// Ademas queremos poder pedirle al deportista que entrene. Para esto,
// nuestro trabajo va a ser realizar una función “entrenarHoras.”
// La función entrenarHoras tiene las siguientes tres características:
// ✔ Recibe por parámetro la cantidad de horas.
// ✔ Resta a su energía (this.energia) la cantidad de horas x 5.
// ✔ Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
// Una vez definida la función, podemos ejecutar el código y ver cómo va
// variando la energía y experiencia del deportista por consola.

// Definimos el objeto literal deportista
let deportista = {
  nombre: "Laura",
  energia: 100,
  experiencia: 50,

  // Método para entrenar
  entrenarHoras: function(horas) {
    this.energia -= horas * 5;
    this.experiencia += horas * 2;

    console.log(`Después de entrenar ${horas} horas:`);
    console.log(`Energía: ${this.energia}`);
    console.log(`Experiencia: ${this.experiencia}`);
  }
};

// Probamos el método entrenarHoras
console.log("Estado inicial del deportista:");
console.log(`Nombre: ${deportista.nombre}`);
console.log(`Energía: ${deportista.energia}`);
console.log(`Experiencia: ${deportista.experiencia}`);

// Llamamos al método con, por ejemplo, 3 horas de entrenamiento
deportista.entrenarHoras(3);
