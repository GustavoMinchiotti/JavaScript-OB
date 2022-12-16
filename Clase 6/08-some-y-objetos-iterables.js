//! .some()
// some significa alguno, a diferencia del every en el que todos deben cumplir una condición con some alcanza con que la cumplan algunos.

const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2];

const res = array.some((valor) => valor < -0);

console.log("res    " + res);

const existe = array.some((valor) => valor === 9);

console.log("existe     " + existe);

const listaObjetos = [
  { nombre: "Leire", edad: 35 },
  { nombre: "Gorka", edad: 34 },
  { nombre: "Miguel", edad: 28 },
  { nombre: "Lucía", edad: 3 },
  { nombre: "Amaia", edad: 29 },
];

const existeJuan = listaObjetos.some((persona) => persona.nombre === "Juan"); // Con esta sintaxis pregunto si existe un determinado elemento en el objeto

console.log("existeJuan     " + existeJuan);

//! Cómo obtener una lista a partir de un objeto iterable

const str = "Hola soy Gorka";
console.log("Elemento 5     " + str[5]);

const ar_str = Array.from(str); // todos los objetos del array --- from es un método del constructor Array
console.log(ar_str);

const set = new Set([2, 3, "hola", 4]); // set es iterador de números
const ar_set = Array.from(set);
console.log(ar_set);

const keys = array.keys(); // me dice que es un objeto iterable
console.log(keys);

const ar_keys = Array.from(keys); //
console.log(ar_keys);
