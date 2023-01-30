//! Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

//* creo un array
const nombresFamiliaArray = ["Ayelén","Indira","Charo","Gustavo"];
//* lo convierto en set
const nombresFamiliaSet = new Set (nombresFamiliaArray);
//* agrego duplicado
nombresFamiliaSet.add("Gustavo"); // no lo muestra
//* agrego en el original Javascript también
nombresFamiliaSet.add("Javascript")

console.log(nombresFamiliaSet);
