//Simula una cola de atención al cliente donde los clientes llegan y son
// atendidos uno por uno. Tienes una lista inicial de clientes en espera y un
// bucle que los atiende de a uno. Realiza lo siguiente:
// 1. Mientras haya clientes en la cola, atiende a cada uno y muéstralo por
// consola.
// 2. Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un
// mensaje especial.
// 3. Al final, muestra cuántos clientes fueron atendidos en total.
// Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].

// Lista inicial de clientes en espera
let clientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];

// Contador de clientes atendidos
let atendidos = 0;

// Mientras haya clientes en la cola
while (clientes.length > 0) {
  // Atender al primer cliente (FIFO)
  let cliente = clientes.shift();
  atendidos++;

  // Verificar si es VIP
  if (cliente === "VIP") {
    console.log(`Atendiendo a ${cliente} con PRIORIDAD especial.`);
  } else {
    console.log(`Atendiendo a ${cliente}.`);
  }
}

// Mostrar total de clientes atendidos
console.log(`Total de clientes atendidos: ${atendidos}`);