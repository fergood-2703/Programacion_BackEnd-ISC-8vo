/* REFLEXIÓN - EJERCICIO 1.3

1. ¿Cuál es la diferencia fundamental entre un módulo nativo (como 'fs') y 
un módulo de NPM (como "sillyname') en cuanto a su origen e instalación?

Es que los nativos es ya vienen integrados en Node.js y se pueden usar sin 
descargar nada, en cambio los de NPM como sillyname y superheroes son 
creados por otras personas y a fuerza se necesita descargarlos
------------------------------------------------------------------------------------------------

2. Investigando la sintaxis: ¿Qué diferencia existe entre 'require' (CommonJS)
y 'import' (ES Modules)? Considera el momento en que se cargan los módulos.

La diferencia es que el 'require' carga los módulos línea por línea hasta 
que el código los necesite, en cambio el 'import' desde el inicio escanea todo 
el archivo y carga todo antes de empezar a correr el código
------------------------------------------------------------------------------------------------

3. Sobre el archivo 'package.json':

a) ¿Por qué es vital compartir este archivo pero NO la carpeta 'node_modules' 
al subir a un repositorio?

Porque el 'package.json' contiene las librerías que usa el proyecto y no pesa nada, 
en cambio 'node_modules' tiene todos los archivos de las librerías, pesa mucho 
y subirlo a GitHub es innecesario, aparte los archivos de 'node_modules' pueden 
variar dependiendo de si usas Mac o Windows
----

b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo tiene el 
package.json?

Node lo lee, ve la lista de las librerías que necesita el proyecto y las descarga 
automáticamente, básicamente vuelve a crear la carpeta node_modules para 
que el proyecto funcione sin problemas
----

*/