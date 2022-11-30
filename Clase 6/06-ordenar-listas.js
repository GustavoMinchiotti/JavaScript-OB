//! .sort() -> MODIFICA EL ARRAY

const array = [2, 5, 9, 15, 1, 2, 0, 4];

console.log(array);

array.sort((a, b) => {
  if (a < b) {
    return -1;     //* le digo si a < b me de un -1 esto hace que el num en ese índice sea menor y se ordene primero
  } else if (a > b) {
    return +1;  // acá lo pone después
  } else {
    // a === b
    return 0; // acá no lo mueve
  }
});

console.log(array, " Orden ascendente");

//? Ordenar únicamente arrays numéricos
const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546];

arrayNumerico.sort((a, b) => b - a);

console.log(arrayNumerico);

//? Interesante en arrays de objetos
const listaObjetos = [
  { nombre: "Leire", edad: 35 },
  { nombre: "Gorka", edad: 34 },
  { nombre: "Miguel", edad: 28 },
  { nombre: "Lucía", edad: 3 },
  { nombre: "Amaia", edad: 29 },
];

// listaObjetos.sort((a, b) => {
//     if (a.edad < b.edad) {
//         return -1
//     } else if (a.edad > b.edad) {
//         return +1
//     } else {
//         return 0
//     }
// })
listaObjetos.sort((a, b) => a.edad - b.edad);

console.log(listaObjetos);
