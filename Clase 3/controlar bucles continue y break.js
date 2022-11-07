//? Casos muy específicos - break, continue .. recomienda no usarlo por ser una mala práctica

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
  if (lista[i] === 3) {
    continue; //* con continue va a volver a leer y pasar de largo la condición
    //* en este caso no lee a 3 y sigue en el bucle
  }

  let j = 50;
  const k = 100;
  console.log(lista[i]);
  //   console.log(j);
  //   console.log(k);

  if (lista[i] > 5) {
    //* en esta condición digo: si es mayor a 5 corta y sale del bucle
    break;
  }
}

//? Cuál es el ámbito de un bucle --- lo que dice en la clase y se ve en quokka es que si declaro con var el scope es global con let es dentro del bucle
// console.log(k);
// console.log(i);
// console.log(j);
