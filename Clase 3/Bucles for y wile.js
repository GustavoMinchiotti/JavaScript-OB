//! Bucles for y while

//* for (inicialización, condición, actualización) {comienza con el valor 1, un ejemplo de condición puede ser mientras i sea menor que 10, entonces al final de cada iteración a "i" le suma 1}

// i = i + 1
// i += 1
// i++

for (let i = 0; i < 10; i++) {
  // Esto es el bucle
  console.log(i);
}

for (let i = 0; i < 10; i += 2) {
  //* acá va a sumar de a 2
  // Esto es el bucle
  console.log(i);
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];
for (let i = 0; i < lista.length; i++) {
  // mientras i sea menor que el largo de la lista va sumar uno, así la recorro.
  console.log(lista[i] * 2);
}

//? Estructura for...of  para cada uno de los datos iterables de una estructura: arrays, strings, NodeList, etc.

for (let valor of lista) {
  console.log(valor);
}

//? Estructura forEach

// Esta es una función flecha, tomé la variable valor e itere dentro de ella.
// es también una callback function, ejecuta un función al terminar otra en el orden que le de yo y no en el que se crearon.

lista.forEach((valor) => {
  console.log(valor);
});

//? Estructura for...in

let persona = {
  nombre: "Gorka",
  apellido: "Villar",
  edad: 34,
  isDeveloper: true,
};
console.log(persona.nombre); // esta es la manera común de acceder a un atributo

let prop = "edad"; //* acá estoy creando una variable, le asigno edad como string que representa a su homónima dentro del objeto.
console.log(persona[prop]); //* con esta sintaxis "[prop]" accedo a la variable prop dentro del objeto

for (let propiedad in persona) {
  console.log(propiedad); //* accedo al nombre del atributo
  console.log(persona[propiedad]); //* accedo al valor del atributo
}

//! Bucles While
// se ejecuta mientras se cumpla la condición   ***cuidado con los bucles infinitos***

let i = 0;
let max = 10;
while (i < max) {
  console.log(i);
  i++;
}

j = 3;
//? Do...while
// siempre se ejecuta al menos una vez y después evalúa la condición.

do {
  console.log("Estoy en el do while");
} while (j < max);
