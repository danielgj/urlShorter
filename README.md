# Acortador de URLS

Este repositorio contiene el código fuente de una solución software que implementa un servicio de generación de URL's cortas.

Se describe adicionalmente el proceso por el que se llega al código final, desde el análisis de requerimientos, el diseño de la arquitectura y la elección del stack final. Para analizar los pasos hasta llegar a la solución final, se pueden revisar los distintos commits en el repositorio.

Se añaden instrucciones acerca de cómo ejecutar ambos proyectos (API y Web) y lanzar la suite de tests.

## Análisis de requerimientos

El primer paso para analizar cómo construir un acortador de URLs es entender cómo estos funcionan: El proceso es sencillo:

1. Se almacena un registro en una base de datos al que se asocia un identificador corto a una URL.
2. Se genera una URL que incluya ese identificador corto y asociada al dominio del proveedor del servicio de acortamiento.
3. Cuando se hace una petición al dominio del proveedor del servicio con un identificador concreto, se consulta en la BD la URL asociada y se devuelve una redirección a la URL asociada (Status 301).

Dejando de lado (momentaneamente) cómo generar un identificador unívoco y lo suficientemente corto, queda claro que una solución de este estilo debe contar con un API que permita dar de alta una nueva URL y manejar las peticiones a la URL corta así como algún tipo de interfaz web para facilitar el alta de nuevas URLs cortas.

## Arquitectura

La arquitectura a alto nivel de los componentes y su interconexión queda reflejada en la siguiente imagen:

![alt Arquitectura](https://i0.wp.com/danielgarciajones.files.wordpress.com/2018/07/arch.png?ssl=1&w=450 "Arquitectura Solución")


## Stack tecnológico

Se emplea un stack tecnológico basado en frameworks y librerías Open Source. Se describe a continuación el stack para los componentes principales de la solución.

### API

Se apuesta por una solución Node.js con Express. Como BD se utilizará MongoDB (proveida por el servicio cloud mlab):

- Express.js
- Pug para las vistas
- Wagner (inyección de dependencias)
- Mongoose (ORM)
- Mocha / Chai / Superagent para los tests
- Gulp para automatizar las tareas de testing

### Web

Puesto que actualmente me encuentro aprendiendo React.js, he decidio apostar por el framework para construir el interfaz web:

- React.js
- Redux
- Bootstrap (para el estilo de la web ya que no se utiliza en este caso su funcionalidad javascript)

Aún no he implementado testing de la web React pero la idea es utilizar Jest cuando lo realice ya que existe bastante documentación al respecto.

## Temas pendientes

Son varios los temas a mejora en la versión actual de la solución:

- Permitir copiar al portapapeles la URL corta generada
- Generación de IDs cortos: actualmente simplemente devuelvo el ID de la BD MongoDB que no parace ser suficientemente corto.
- UX / UI del componente web
- Testing del componente web

## Ejecución del proyecto

Para poder ejecutar la solución es necesario levantar el API, configurar la web para atacar a la URL del API y levantar a su vez la aplicación web. Se describe a continuación como realizar cada uno de estos pasos.

### API

El API se levanta con el comando `npm start`. por defecto corre en el puerto 3000.

Se puede verificar si está funcionando correctamente accediendo en el navegador a la siguiente URL:

http://IP-O-DOMINIO-DEL-SERVIDOR:3000

Si se quieren ejecutar los tests, con el API levantado, basta con ejecutar el comando `npm test`. El resultado de la ejecución de los tests se muestra por consola.

### Web

La web puede ejecutarse en modo desarrollo ejecutando el comando `npm start`.

La web puede empaquetarse para su distribución a producción ejecutando el comando `npm run build`. El resultado, listo para su despliegue en producción se almacena en la carpeta `build`.

Para ejecutar los tests de la web (aunque de momento no hay ninguno más allá del que se crea por defecto) hay que ejecutar el comando `npm test`. Los resultados de los tests se muestran por consola.

*NOTA:* Para que la web funcione correctamente hay que setear la URL del api en el fichero web/src/_constants/urlConstants.js:

````javascript
const URL_BASE = 'VALOR_URL_API';
````

## Créditos

Desarrollado por Daniel García Jones

- Web: https://danielgarciajones.com
- Github: http://github.com/danielgj
- Twitter: @danielgarjones

