# JavaScript OB
## Clase 1. Introducción a JavaScript
### Intro al curso e instalación de plugins
En la primer clase hablo de la teoría que tipo de lenguaje es Js y recomendó plugins los cuales instalé.

De ellos Quokka es el único que no estaba usando.

![img.png](img.png)

Básicamente, va marcando en tiempo real los errores de código. 

Se debe abrir el archivo en Quokka para que funcione.

![img_1.png](img_1.png)

Luego de usarlo se guarda como un archivo `.Js` y lo transforma en un archivo normal.
### Node y NPM
Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no 
limitándose a ello) basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura 
orientada a eventos y basado en el motor V8 de Google. Fue creado con el enfoque de ser útil en la creación de programas 
de red altamente escalables, como por ejemplo, servidores web. Fue creado por Ryan Dahl en 2009 y su evolución está 
apadrinada por la empresa Joyent, que además tiene contratado a Dahl en plantilla.

Node.js es similar en su propósito a Twisted o Tornado de Python, Perl Object Environment de Perl, libevent o libev de
C, EventMachine de Ruby, vibe.d de D y Java EE de Java existe Apache MINA, Netty, Akka, Vert.x, Grizzly o Xsocket. 
Al contrario que la mayoría del código JavaScript, no se ejecuta en un navegador, sino en el servidor. Node.js 
implementa algunas especificaciones de CommonJS. Node.js incluye un entorno REPL para depuración interactiva.

https://es.wikipedia.org/wiki/Node.js

NPM es el sistema de gestión de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript, bajo 
Artistic License 2.0.

Desde la versión 0.6.3 de Node.js npm es instalado automáticamente con el entorno. npm se ejecuta desde la línea de 
comandos y maneja las dependencias para una aplicación. Además, permite a los usuarios instalar aplicaciones Node.js 
que se encuentran en el repositorio. npm está escrito enteramente en JavaScript y fue desarrollado por Isaac Z. Schlueter
a raíz de la frustración que experimentó mientras trabajaba con CommonJS y considerando las deficiencias de otros 
proyectos similares como PHP (PEAR) y Perl (CPAN)

**_Luego vino la instalación, pero ya lo hice con el curso anterior._**

![img_2.png](img_2.png)

### Primer proyecto Node
Desde el CMD voy a crear una carpeta dentro de la ya creada para esta materia y subida a github.

![img_3.png](img_3.png) 

* El comando `code .` abre el proyecto en VsCode.
* Con `ctrl shift ñ` abro la terminal.
* Con `npm init` creo el paquete `.json`

![img_4.png](img_4.png)

* Donde dice Package name es una pregunta, al poner hola-mundo le digo que ese es el nombre del paquete

![img_5.png](img_5.png)
* Description del proyecto

![img_6.png](img_6.png)
* El `entry point` lo dejo por defecto, va a ser el archivo por defecto a ejecutar.

![img_7.png](img_7.png)

* `Test command:` `jest` acá si quiero puedo usar una librería como jest para testear. por ahora queda vacío.
* `git repository:` lo dejo en blanco (aunque la carpeta si esta en git no subo particularmente ente .json) 
* `keywords: `hola-mundo no entendí muy bien por qué lo usó.
* `author:` Gustavo-MMB
* `license:` (ISC)  Lo dejo como está

![img_8.png](img_8.png)

Luego de aceptar con enter me genera el `.json`

![img_9.png](img_9.png) 

![img_10.png](img_10.png)   

Acá puedo modificar los datos que ingresé
* Creo los archivos **`inex.js`** y `holamundo.js`

![img_11.png](img_11.png)

Una de las formas de ejecutarlo es a través de node, en la terminal escribo: `node + nombre de archivo`

![img_12.png](img_12.png)

![img_13.png](img_13.png)   

#### Esta prueba la hice el dia posterior y antes de cursar lo de UTN

![img_14.png](img_14.png)

![img_15.png](img_15.png)


### Ejecución y comentarios

**Scripts == guiones** Son código que se va a ejecutar 

Desde la terminal podemos ejecutar los scripts del archivo `package.json` por ejemplo con la sentencia:` npm run + monbre del script` 
en este caso de ejemplo solo hay un script que es "test".

![img_16.png](img_16.png)

![img_17.png](img_17.png) 

Lo que vemos es que a través de la terminal nos mostró lo que hay en test, si fuera un script más complejo del mismo 
modo sería ejecutado.

Como ejemplo aunque esto no se usa, inicio desde la terminal node `package.json` al archivo `hola_mundo`. 
Hice que el paquete lo abra.

![img_18.png](img_18.png)  ![img_19.png](img_19.png)

* Lo habitual sería ir al index del proyecto donde estaría el programa.
* Importantísimo anteponer `node` antes del nombre de archivo .js.

![img_20.png](img_20.png) 

![img_21.png](img_21.png)

![img_22.png](img_22.png)

### primer tarea 
La carpeta la cree en windows y deje más espacios en blanco en él `npm init`, luego seguí todos los pasos de esta guía.

![img_23.png](img_23.png)
1. A continuación cree el `index.js` y pegué la frase de saludo de OB.
2. Cree el script start en el paquete `.json` 

![img_24.png](img_24.png)

3. Ejecute el script. con el comando: `npm start`.

![img_25.png](img_25.png)

## Clase 2 Sintaxis variables y palabras reservadas de JS
### Tipado en JS y tipos primitivos
https://www.w3schools.com/js/js_typeof.asp

**Tipado inferido** la variable será definida al momento de ser interpretada. Entre sus **ventajas** está la velocidad para 
escribir el código y entre las **desventajas** que el ide no nos va a dar error si cambiamos por ejemplo un string a int, 
puede ocasionar problemas.

Los tipos en Js tienen 2 grandes grupos: primitivos y objetos.

**_Primitivos:_** 
1. Número (con o sin decimal, no hay float en JS)
2. String
3. Booleano
4. Nulo (crea una variable con un espacio vacío en memoria)
5. Indefinido

**_Objetos:_**

![img_26.png](img_26.png)

### Declaración de variables y escritura dinámica
4 Ways to Declare a JavaScript Variable:
* Using var
* Using let
* Using const
* Using nothing

**When to Use JavaScript var?**

Always declare JavaScript variables with var,let, or const.

The var keyword is used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

If you want your code to run in older browsers, you must use var.

**When to Use JavaScript const?**

If you want a general rule: always declare variables with const.

If you think the value of the variable can change, use let.

**JavaScript Identifiers**

All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

* Names can contain letters, digits, underscores, and dollar signs.
* Names must begin with a letter.
* Names can also begin with $ and _ (but we will not use it in this tutorial).
* Names are case-sensitive (y and Y are different variables).
* Reserved words (like JavaScript keywords) cannot be used as names.

![img_27.png](img_27.png)

Si afecto una variable declarada con var dentro de una función por ejemplo esta cambia de manera global. 

Si afecto una variable declarada con let dentro de una función esta solo cambia dentro de la misma.

### Notación en JavaScript
Detalles en el código.

### Listas, Objetos y Fechas en JS
#### Listas
Las listas se declaran de 2 maneras detalles en el código.

![img_28.png](img_28.png)

![img_29.png](img_29.png)

En el caso lista3 al poner 4 me crea una lista vacía con 4 posiciones.

![img_30.png](img_30.png) Agrego valores dentro del array ![img_31.png](img_31.png)

#### importante no podia abrir la carpeta con espacio porque eran necesarias las comillas
![img_32.png](img_32.png)

*///

![img_33.png](img_33.png)

Me costó mucho hacer correr el script en la terminal, con _**npm** no pude_ luego de agregarlo correctamente a la carpeta 
Clase 1 y al `.Json` ahora lo voy a correr de carpeta para probar si funciona en Clase 2 que es donde debe ir.
* Lo cambié de carpeta y funcionó 
* Sin estar agregado al archivo `Package.json` funciona igual
* Por último si estoy fuera de la carpeta del archivo asi sea la carpeta superior NO funciona.

#### Objetos
https://www.w3schools.com/js/js_objects.asp HAY UNA BUENA EXPLICACIÓN DE THIS

In real life, a car is an object.

A car has properties like weight and color, and methods like start and stop:

![img_34.png](img_34.png)   

* All cars have the same properties, but the property values differ from car to car.

* All cars have the same methods, but the methods are performed at different times.

* Objects are variables too. But objects can contain many values.

* This code assigns many values (Fiat, 500, white) to a variable named car:
`const car = {type:"Fiat", model:"500", color:"white"};`

Object Definition

You define (and create) a JavaScript object with an object literal: const person = 
`{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};`

Spaces and line breaks are not important. An object definition can span multiple lines: 

![img_39.png](img_39.png)

**Accessing Object Properties**

You can access object properties in two ways:

* `objectName.propertyName`
* `objectName["propertyName"]`

![img_36.png](img_36.png)

**Object Methods**

Objects can also have methods.

Methods are actions that can be performed on objects.

Methods are stored in properties as function definitions.

![img_35.png](img_35.png)

![img_37.png](img_37.png)   

![img_38.png](img_38.png)   

In the example above, `this` refers to the person object.
(I.E.== O SEA) `this.firstName` means the _firstName_ property of _this._
I.E.` this.firstName` means the _firstName_ property of _person_.

![img_40.png](img_40.png)

![img_41.png](img_41.png)

 **Accessing Object Methods**   
 
You access an object method with the following syntax: `objectName.methodName()` ejemplo `name = person.fullName();`

Si olvidamos los paréntesis devuelve la definición de la función "la fórmula"

**En el ejemplo de la clase creamos un objeto con distintos tipos de atributos, string, arrays, objeto dentro de objeto.
Luego accedí al array y al obj. dentro del obj.**

![img_42.png](img_42.png) 
![img_43.png](img_43.png)

Agrego un atributo desde fuera y modifico otro.

![img_44.png](img_44.png) ![img_45.png](img_45.png)

#### Fechas
Según el profesor son difíciles de trabajar conviene usar librerías como: Momento.js

https://www.w3schools.com/js/js_dates.asp

JavaScript Date Output

By default, JavaScript will use the browser's time zone and display a date as a full text string:

**Mon Oct 17 2022 11:32:36 GMT-0300 (hora estándar de Argentina)**

![img_46.png](img_46.png)

Los números

![img_47.png](img_47.png)

![img_48.png](img_48.png)

![img_49.png](img_49.png)

Clase 

![img_50.png](img_50.png)

![img_51.png](img_51.png)

