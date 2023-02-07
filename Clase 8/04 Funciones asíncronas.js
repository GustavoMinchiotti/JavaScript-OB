// Funciones asíncronas

function miAsinc() {
  //? trabajamos con datos externos y pasamos a depender de sus tiempos...
  // Hace una llamada a una base de datos externa --- no conocemos su calidad
  // Puede darnos algún error
}

const miPromesa = new Promise((resolve, reject) => {
//* el 1er parámetro (resolve) es una función dummy siempre va a tener éxito
const i = Math.floor(Math.random() * 2); // esta función al ser random cada vez que modifique algo en este archivo puede dar error o no
  if (i !== 0) {        // Si está todo correcto
    resolve();
  } else {
    reject();
  }
});

//! así ejecuto la promesa

miPromesa
  .then(() => console.log("Se ha ejecutado de forma correcta")) // los mensajes se explican solos
  .catch(() => console.log("ERROR")) // gestión de errores
  .finally(() => console.log("Yo me ejecuto siempre")); // trabaja de manera independiente

// async await
