# Asincronismo Platzi
******************************************
### Agregado del curso de platzi de asincronismo:
1. pwd: Saber donde estoy ubicado.
2. mkdir: Creaci贸n de carpeta
3. cd: Moverse a carpetas
4. git init: Inicias Git ***///// creo antes el repo que el json***
5. npm init: Le da nombre, versi贸n, entre otras cosas al proyecto
6. code . : Inicia el editor de c贸digos
7. creo el .gitignore  ***///// simple lo crea y abre para agregar los*** `/node_modules/`
******************************************
### 饾棖饾椆饾棶饾榾饾棽 #饾煵: 饾棨饾槀茅 饾榾饾椉饾椈 饾椆饾椉饾榾 饾棖饾棶饾椆饾椆饾棷饾棶饾棸饾椄饾榾 
Un Callback es una una funci贸n que se pasa como argumento de otra funci贸n y que ser谩 invocada.

鉁忥笍 Ejemplos:

* En VSC crear una carpeta dentro de la carpeta src llamada `callback`
* Crear dentro de la carpeta callback el archivo `index.js`
* Dentro de `index.js` se coloca la estructura de los que ser谩 un `callback`:

![img_59.png](img_59.png)

* Luego se selecciona el c贸digo y al dar click derecho, seleccionar `Run Code` (debe estar instalado la extensi贸n Code Runner).
* Aparece abajo la consola con la salida de la suma de los 2 n煤meros.
* Para el segundo ejemplo, se tiene un `setTimeout` que funciona como un `callback`, en el c贸digo est谩 configurado para 
imprimir el mensaje 2 segundos despu茅s de ejecutar el c贸digo con Run Code:

![img_60.png](img_60.png)

* En el tercer ejemplo tenemos un setTimeout con una funci贸n que se le pasa por argumento:

![img_61.png](img_61.png)

### 饾棖饾椆饾棶饾榾饾棽 #饾煶: 饾棲饾棤饾棢饾棝饾棫饾棫饾棧饾棩饾棽饾椌饾槀饾棽饾榾饾榿饾煶/饾煯饾煭 馃摛

馃摬 XMLHttpRequest es un objeto de JS que permite hacer peticiones hacia servicios en la nube(URLs o APIs).

馃摢 Existen 5 estados en un llamado XMLHttpRequest:

* 0 鈫? Se ha inicializado.
* 1 鈫? Loading (cargando).
* 2 鈫? Se ha cargado.
* 3 鈫? Procesamiento si existe alguna descarga.
* 4 鈫? Completado.

#### M茅todos y propiedades:
`xmlhttp.open()` 鈫? Prepara la petici贸n para ser enviada tomando tres par谩metros: pr贸tocolo, url, as铆ncrono (true).

`xmlhttp.readyState` 鈫? Retorna el estado de la petici贸n.

`xmlhttp.onreadystatechange` 鈫? Un eventHandler que es llamado cuando la propiedad readyState cambia.

`xmlhttp.status` 鈫? Retorna el estado de la respuesta de la petici贸n. (200,400,500)

`xmlhttp.send()` 鈫? Env铆a la petici贸n.

#### Caracter铆sticas del protocolo http:
**Verbos:** Los verbos indican acciones que est谩n asociadas a peticiones y recursos, es decir, sirven para la manipulaci贸n
de recursos cliente/servidor. 

Los Verbos http son:
* **GET** 鈫? Solicita un recurso.
* **HEAD** 鈫? Solicita un recurso pero sin retornar informaci贸n, la estructura de esta petici贸n es igual que get tanto en su 
headers como estatus. Es 煤til cuando vamos a utilizar API, para comprobar si lo que vamos a enviar est谩 correcto y 
puede ser procesado.
* **POST** 鈫? Sirve para la creaci贸n de recursos en el servidor.
* **PUT** 鈫? Actualiza por completo un recurso, reemplaza todas las representaciones actuales del recurso de destino con la 
carga 煤til de la petici贸n.
* **PATCH** 鈫? Actualiza parcialmente un recurso.
* **DELETE** 鈫? Elimina un recurso.

#### Los c贸digos de estados del servidor:
El c贸digo de estado (status codes) sirve para describir el estado de la petici贸n hecha al servidor.
* 1xx 鈫? Indican que la petici贸n fue recibida por el servidor, pero est谩 siendo procesada por el servidor.
* 2xx 鈫? Indican que la petici贸n fue recibida, aceptada y procesada correctamente.
* 3xx 鈫? Indican que hay que tomar acciones adicionales para completar la solicitud.
* 4xx 鈫? Indican errores del lado del cliente que hizo mal una solicitud.
* 5xx 鈫? Indican errores del servidor. Suelen aparecer cuando existe un fallo en la ejecuci贸n en el servidor.

