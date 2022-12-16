//! Trabajar con métodos más avanzados
//! .map() .filter() .reduce()

const array = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"];

const val = array.forEach((v) => {
  console.log(v);
  return 4; // a modo de ejemplo NO devuelve nada porque la función forEach es para iterar
});
console.log(
  "tratando de utilizar esta variable ---- ",
  val,
  " ---- vacío debido a que forEach era solo para iterar"
);

const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`);
console.log(" Usando Func. map  ", newArray);

console.log(  "--------------------------------------------------------------------------------------");

const listaObjetos = [
  { nombre: "Leire", edad: 35 },
  { nombre: "Gorka", edad: 34 },
  { nombre: "Miguel", edad: 28 },
  { nombre: "Lucía", edad: 3 },
  { nombre: "Amaia", edad: 29 },
];

//* Ejemplo de filtro, manera antigua "filtra a los mayores de 30 "
// const personasMayores = listaObjetos.filter((obj) => {
//   if (obj.edad > 30) {
//     return true;
//   } else {
//     return false;
//   }
// });

//* filtro optimizado
const personasMayores = listaObjetos.filter((obj) => obj.edad > 30);    // Filtra a los mayores de 30 ¿cómo? crea una variable la filtra itera cada índice filtra cada objeto 
console.log(" Usando Func. filter  ", personasMayores);

const nuevaLista = listaObjetos.filter((obj) => obj.nombre !== "Miguel"); // filtra a Miguel y devuelve a todos los demás
console.log(" Usando Func. filter  ", nuevaLista);

console.log( "--------------------------------------------------------------------------------------");

//* función reduce()
//? Este ejemplo muy exagerado es para ver como se van modificando los distintos argumentos en cada iteración

const valores = [3, 56, 23, 5, 90, 100];

const suma = valores.reduce((acumulado, current, i, arrayOriginal) => {
  console.log("acumulado ",acumulado);  // Comienza con el valor del indice 0 y en esta var se van a acumular los valores
  console.log("current ",current);
  console.log("índice ", i);
  console.log("arrayOriginal ",arrayOriginal);
  return acumulado + current;
});
console.log("Fuera de la iteración Suma: ",suma);
