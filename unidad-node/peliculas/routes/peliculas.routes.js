import express from "express"
import * as controllerPelicula from "../controllers/peliculas.controller.js"

const route = express.Router()

route.get("/", controllerPelicula.getHome)
route.get("/peliculas", controllerPelicula.getPeliculas)
route.get("/peliculas/nuevo", controllerPelicula.nuevaPelicula)
route.post("/peliculas/nuevo", controllerPelicula.agregarPelicula)
route.get("/peliculas/eliminar/:id", controllerPelicula.eliminarPelicula)
route.get("/peliculas/:id", controllerPelicula.getPeliculaId) 
route.get("/borradas", controllerPelicula.getPeliculasBorradas)
route.get("/borradas/restaurar/:id", controllerPelicula.restaurarPelicula)
//route.delete("/peliculas/:id", controllerPelicula.eliminarPelicula)

export default route