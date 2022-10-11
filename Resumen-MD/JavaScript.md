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

### Ejecución y comentarios
