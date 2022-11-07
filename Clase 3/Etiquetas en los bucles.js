// break y continue
//! labels nos permiten nombrar los bucles for o while. --- nos pueden ayudar en caso de querer usar break y continue a controlarlos mejor
// tampoco es una forma correcta de hacerlo pero esa modo de ejemplo
//* la etiqueta es con esa sintaxis "bucleDecenas: " antes del while 

let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
  bucleUnidades: while (true) {
    console.log(`El número actual es: ${decenas}${unidades}`);
    unidades++;
    if (unidades === 10) {
      unidades = 0;
      break bucleUnidades; // con la etiqueta bucleUnidades le digo que es lo que corta o donde. va a llegar a 10 y salir
    }
    if (decenas === 2) {
      break bucleDecenas; // acá llega a 2 decenas y sale de los 2 bucles
    }
  }
  decenas++;
}
console.log("Ya hemos terminado");