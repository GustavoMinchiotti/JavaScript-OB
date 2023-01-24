// Sets o conjuntos (en castellano)
const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola", { id: 5 }, "hola"];

const miSet = new Set(array);

console.log(array);
console.log(miSet); //* una de las características de los sets es que no nos permiten almacenar valores repetidos

// .add()
miSet.add(9);
console.log(miSet);
miSet.add(4);
console.log(miSet);

// .delete()
miSet.delete("hola");
console.log(miSet);

// .clear()
// miSet.clear() //* borra el contenido
// console.log(miSet)

// .has() //* nos dice si tiene un valor dentro
// console.log(array.includes(2)) //* igual al has pero para los arrays
console.log(miSet.has(40));

// .size //* medida del set
console.log(miSet.size);

miSet.forEach((valor) => {  //* con este método iteramos los sets
  console.log(valor + " iteración del set con .forEach");
});

const it_miSet = miSet.values();
console.log("obtener valores luego de iterar " + it_miSet);

const ar_miSet = [...miSet];    //? con el factor de propagación [...] convierto un set en array y con esto me aseguro de que el mismo no tiene valores repetidos
console.log(ar_miSet[1] + " convertido en array muestro índice 2");
