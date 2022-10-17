//! comentarios a color con la extension Better Comments
//? "\n" Salto de linea en string
// Ejercicio nº2 Open Bootcamp
/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/
let nombre = "Gustavo MMB";
let edad = 43;
let esDev = true;

// const nacString = new Date("May 30 1979");
// const nacimiento = new Date(1979,04,30);
// const nacNúmeros = new Date(1979, 04, 30);

const nacString = new Date("jun 30 1979"); //después de varias pruebas para poder imprimir de manera estética uso este formato y accedo a cada parte del objeto.
//mes como es un array sumo una posición JUN para que de mayo.
const fechaProlijaYear = nacString.getFullYear();
const fechaProMes = nacString.getMonth();
const fechaProDia = nacString.getDate();

const libro = {
  titulo: "La Ilíada",
  autor: "Homero",
  fecha_creation: "1500 a 1200 a.C.",
  url: "https://bit.ly/3EKPBDq",
};

console.log("Hecho por variables independientes");

console.log("");
console.log("");

console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log("¿Eres desarrollador? " + esDev);

// console.log(nacimiento);
// console.log(nacString);
// console.log(nacNúmeros);

console.log(
  "Nacido el día: ",
  +fechaProDia + " mes " + fechaProMes + " año " + fechaProlijaYear
); //*mejorar!!!

//de esta manera imprime el objeto y su contenido como está.
// console.log(libro);

console.log("");
console.log("libro favorito: " + libro.titulo); //*todo esto podia ser concatenado pero preferí hacerlo por línea
console.log("Autor: " + libro.autor);
console.log("Creado: " + libro.fecha_creation);
console.log("Enlace: " + libro.url);

//! Ahora el mismo ejercicio pero todo dentro de un solo objeto.

console.log("");
console.log("");
console.log("un solo objeto con todo dentro" + "\n");
console.log("");

const ejn2 = {
  nombre: "Gustavo MMB",
  edad: 43,
  esDev: true,
  nacString: new Date("jun 30 1979"),
  nace: {
    day30: nacString.getDate(), //* no salia porque olvidé los (), la idea estaba bien.
    mes5: nacString.getMonth(),
    year79: nacString.getFullYear(),
  },
  libroFavorito: {
    titulo: "La Ilíada",
    autor: "Homero",
    fecha_creation: "1500 a 1200 a.C.",
    url: "https://bit.ly/3EKPBDq",
  },
};

console.log(
  ejn2.nombre,
  "\n" + ejn2.edad,
  "\n" + ejn2.esDev,
  "\n" + "Nacido: " + ejn2.nace.day30,
  ejn2.nace.mes5,
  ejn2.nace.year79 +
    "\n" +
    "Libro favorito: " +
    ejn2.libroFavorito.titulo +
    "\n" +
    ejn2.libroFavorito.autor +
    "\n" +
    ejn2.libroFavorito.fecha_creation +
    "\n" +
    ejn2.libroFavorito.url
);
console.log();
