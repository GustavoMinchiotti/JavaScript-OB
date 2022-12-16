// Crea un archivo JS que contenga las siguientes líneas

//// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

//// - Modifica la lista de la compra y añádele "Aceite de Girasol"

// //- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

//// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

//// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

//// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

//// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

//// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

//// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

//! - Una variable que contenga la lista de la compra (mínimo 5 elementos)

let listaCompras = [
  "bife",
  "milanesas",
  "aceite de oliva",
  "manteca",
  "cerveza monasterio",
];

listaCompras.splice(5, 0, "Aceite de Girasol"); // - Modifica la lista de la compra y añádele "Aceite de Girasol"
console.log(listaCompras);

listaCompras.pop(); // - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
console.log(listaCompras);

//! - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const listaPelis = [
  { titulo: "The godfather", director: "Francis Ford Coppola", fecha: 1972 },
  { titulo: "Bram Stoker's Dracula", director: "Francis Ford Coppola", fecha: 1992 },
  { titulo: "Avengers: Endgame", director: " Anthony & Joe Russo", fecha: 2019 },
];

/* Filtering the list of movies to only include movies released before 2010. */
const antesDe2010 = listaPelis.filter((antes) => antes.fecha < 2010);   // - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
console.log(antesDe2010);

const directores = listaPelis.map((dire, i) => `Director película nº ${i+1}  ${dire.director}`);    // - lista con los directores (utilizando map)--- (`) sólo con esta funciona
console.log(directores);

const pelis = listaPelis.map((peli,i) => `Película nº ${i+1}: ${peli.titulo}`);    // - lista que contenga los títulos de la lista de películas original (utilizando map)
console.log(pelis);

const concatenada = pelis.concat(directores);    // - lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
console.log(concatenada);

const conFactorPropagacion = [...directores, ...pelis];     // - lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
console.log(conFactorPropagacion);
