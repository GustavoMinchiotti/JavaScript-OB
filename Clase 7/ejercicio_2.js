//! Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

// - Una variable que obtenga tu edad a partir del objeto anterior

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

//*objeto Yo
const Gus = {
  nombre: "Gustavo",
  apellido: "Minchiotti",
  edad: 43,
  altura: 187,
  eresDesarrollador: true,
};
//* variable edad
let edad = Gus.edad;

console.log(Gus);
console.log("Edad: ", edad);

//* lista con Gus mas dos amigos
//const amigos = [{Gus},{nombre:"Christian", apellido:"Oriolani", edad:42, altura:184, eresDesarrollador:false}]; //*en este caso no me ordenaba porque pasaba Gus como objeto dentro del objeto

const amigos = [
  {
    nombre: "Gustavo",
    apellido: "Minchiotti",
    edad: 43,
    altura: 187,
    eresDesarrollador: true,
  },
  {
    nombre: "Christian",
    apellido: "Oriolani",
    edad: 42,
    altura: 184,
    eresDesarrollador: false,
  },
  {
    nombre: "Eduardo",
    apellido: "Catania",
    edad: 50,
    altura: 181,
    eresDesarrollador: true,
  },
];

let orden = amigos.sort((a, b) => a.edad - b.edad);
console.log(orden);

console.log(amigos);
