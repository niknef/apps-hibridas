import express from "express"
import * as controllerPelicula from "../controllers/peliculas.controller.js"

const route = express.Router()

route.get("/", controllerPelicula.getHome)
route.get("/peliculas", controllerPelicula.getPeliculas)
route.get("/peliculas/nuevo", controllerPelicula.nuevaPelicula)
route.post("/peliculas/nuevo", controllerPelicula.agregarPelicula)
route.get("/peliculas/borradas", controllerPelicula.getPeliculasBorradas)
route.get("/peliculas/eliminar/:id", controllerPelicula.eliminarPelicula)
route.get("/peliculas/borradas/restaurar/:id", controllerPelicula.restaurarPelicula)
route.get("/peliculas/:id", controllerPelicula.getPeliculaId) 


//route.delete("/peliculas/:id", controllerPelicula.eliminarPelicula)

export default route