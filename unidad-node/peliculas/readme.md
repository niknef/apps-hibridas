# API REST DE PELICULAS

## INSTALACIÓN
- npm init -y
- npm i nodemon -D
- npm install express

- activamos el module para ESM 

### PROCESO DE CREACION:
-Realizamos la instalacion de los primeros 3 pasos
- configuramos el package.json

#### CREACION DEL SERVER CON EXPRESS

--Importamos express desde express
import express from 'express';

-- Creamos una app de express
const app = express();

-- Traemos el directorio / y le imprimo un hola mundo
app.get('/', (req, res) => {
    res.send('Hello World!');
});

-- creamos el server en el puerto 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

app.use( express.urlencoded({ extended: true }) ); 

se utiliza para analizar los datos enviados en el cuerpo de las solicitudes HTTP, especialmente en las solicitudes POST o PUT, donde se envían datos desde un formulario HTML.

app.use( express.static("public") )
Sirve archivos estáticos desde la carpeta public
#### CREAMOS NUESTRO JSON DE PELICULAS
- lo hacemos dentro de nuestra carpeta - data

#### CREAMOS CARPETA PUBLIC
- Donde vamos a poner los archivos estaticos, como la carpeta img
-carpeta css


#### VAMOS A ARMAR NUESTRA ARQ MCV
-Carpera views -> Vistas
##### peliculas.view.js

-- FUNCION crearPagina
    A esta le pasamos el titulo de la pagina que estemos parados y el contenido

    en esta creamos la estructura basica de nuestro html
    
    y dejamosen nuestro body el ${contenido} para luego agregar el contenido dependiendo lo que necesitemos

--FUNCION crearCardsPeliculas
    a esta le pasamos peliculas
    y nos arma junto a boostrap una estructura de cars con cada una de las peliculas
    
    pero antes verifica si hay peliculas despinubles, si no las hay imprime un no hay peliculas

    y si teiene peliculas procede a hacer un forEach para recorrer peliculas y crear una card con cada pelicula

    despues hacemos otro foreach para recorrer los generos y crear badges por cada generlo

    y retornamos el html

-- Funcion crearDetallePeliculas
    a esta funcion le pasamos la pelicula por id 

    creamos un detalle con los datos de la pelicula que queremos ver, con un boton de volver hacia atras


-- hacemos export para luego poder importarlas en otras paginas

#### CREAMOS LA CARPETA SERVICES
##### Creamos nuestro peliculas.service.js
 import {readFile} from 'fs/promises'; 

  esto lo importamos para poder leer el archivo de manera asincronica

  import path from 'path'; 
  Importamos el módulo path de Node.js para trabajar con rutas de archivos y directorios

- funcion getPeliculas que nos trae el array de peliculas de nuestro json, lo parsea y lo guarda en peliculas, y un catch para los errores

- funcion getPeliculaID buscar una película específica por su ID, usa el || para evitar el undefined y nos retorna los valores en pelicula

#### CREAMOS LA CARPETA CONTROLLERS
##### Creamos nuestro peliculas.controller.js

Importamos las funciones del archivo peliculas.service.js, donde tengo la lógica relacionada con la obtención de datos (en este caso, las películas).

tambien imporamos las funciones del archivo peliculas.view.js, donde tenemos funciones para generar la vista HTML (como crearPagina y crearCardsPeliculas).

----usamos getPeliculas donde:
peliculaService.getPeliculas() -> llama a una funcion del servicio, para obtener la lista de peliculas de nuestro json
 
con el then nos da los datos cuando la promesa se resuelva

-generamos la vista con
peliculaView.crearPagina("Listado de peliculas", peliculaView.crearCardsPeliculas(peliculas)):
donde estamos pasando el titulo y rtambien el contenido que es gracias a la funcion crearCardsPeliculas

Finalmente, envío esa página generada como respuesta al cliente con res.send(), que es una función de Express para enviar respuestas HTTP.

---- getPeliculaId
console.log(req.params.id);:

Imprimimos en la consola el id de la película que se pasa como parámetro en la URL. para  verificar qué id se está recibiendo.

peliculaService.getPeliculaId(req.params.id):

Llamamos a una función del servicio (peliculaService.getPeliculaId) para obtener los detalles de la película con el id proporcionado en los parámetros de la URL (req.params.id).
Esta función devoluelve una promesa

Una vez que la promesa se resuelve, recibimos el objeto de la película en la variable pelicula.

Envías esta página HTML completa como respuesta al cliente con res.send().

#### CREAMOS LA CARPETA ROUTES
##### Creamos nuestro peliculas.routes.js
import express from "express";
importamos express para usar el route: express.Router se usa para definir rutas en tu aplicación.

import * as controllerPelicula from "../controllers/peliculas.controller.js";

Importamos todas las funciones de controlador desde el archivo peliculas.controller.js. Estas funciones manejarán la lógica para las rutas definidas.

const route = express.Router();

Creamos una instancia de Router que nos permite definir rutas en un archivo separado en lugar de hacerlo todo en el archivo principal de tu aplicación. Esto ayuda a mantener el código organizado.

route.get("/peliculas", controllerPelicula.getPeliculas);

Definimos una ruta GET /peliculas que llama a la función getPeliculas del controlador controllerPelicula. Esta función manejará las solicitudes a esta URL y responderá con la lista de películas.

route.get("/peliculas/:id", controllerPelicula.getPeliculaId);

hacemos lo mismo pero para ir a los detalles de las peliculas

export default route;

Exportamos la instancia de Router que has creado para que pueda ser importada y utilizada en otros archivos, típicamente en el archivo principal de la aplicación donde configuras las rutas de la aplicación.

### VOLVEMOS AL SERVER.JS
import peliculasRoute from "./routes/peliculas.routes.js"
 donde impoortamos nuestras rutas desde nuestro peliculas.routes.js

app.use(peliculasRoute) para usar las rutas que manejamos desde la otra carpeta

### Ahora vamos a agregar las funcion de nueva pelicula

#### agregamos un boton en nuestras lista para poder agregar una nueva ´pelicula

#### agregamos la vista en route

#### agregamos la funcion en nuestro controller 

#### creamos nuestro formulario en nuestra views


### 

En nuestro servicio creamos una funcion para agregar datos de la pelicula y agregar si nos mandan una pelicula nueva



## tenemos que decirle a nuestro nodemon que no le preste atencion a los json

"dev": "nodemon server.js --ignore '*.json'"