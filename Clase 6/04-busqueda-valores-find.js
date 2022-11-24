//! Iterar los valores de una lista

const array = ["hola", 2, 5, 90, false, undefined];

//? Forma antigua (poco eficiente)
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//? Forma ES6 (más eficiente) .forEach()
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19];
arrayNums.forEach((valor) => {
  suma += valor;
  console.log("Variable valor dentro de la función:  ", valor, " Va iterando");
});
console.log("Suma ", suma); //resultado de la función

//? Búsqueda de un valor dentro de una lista .find()
// Quiero encontrar el elemento 90
const variable = array.find((valor) => {
  if (valor === 90) {
    return true;
  }
});

console.log(variable);

/* Creating an array of objects. */
const listaObjetos = [
  { nombre: "Leire", edad: 35 },
  { nombre: "Gorka", edad: 34 },
  { nombre: "Miguel", edad: 28 },
  { nombre: "Lucía", edad: 3 },
  { nombre: "Amaia", edad: 29 },
];

// const objeto = listaObjetos.find(o => {
//     if (o.nombre === "Miguel") {
//         return true
//     }
// })


const objeto = listaObjetos.find((o) => o.nombre === "Miguel"); // manera mas sintáctica si "o" es igual a Miguel devuelve true y puedo seguir operando
console.log(objeto.edad);  // ya almacenado el obj Miguel pregunto la edad

const { edad } = listaObjetos.find((o) => o.nombre === "Lucía"); // acá toma {edad} entre {} porque sabemos que es parte de un objeto 
console.log(edad); //* accede a la propiedad edad del objeto que esta devolviendo el método .find
