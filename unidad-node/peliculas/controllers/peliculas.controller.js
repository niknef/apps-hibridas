import * as peliculaService from "../services/peliculas.service.js"
import * as peliculaView from "../views/peliculas.view.js"


const getHome = (req, res) => {
    res.send(peliculaView.crearPagina("Home", peliculaView.crearHome()))
};
const getPeliculas = (req, res)=>{
    peliculaService.getPeliculas()
        .then(peliculas => {
            res.send(peliculaView.crearPagina("Listado de peliculas", peliculaView.crearCardsPeliculas(peliculas)))
        })
};

const getPeliculaId = (req, res) => {
    console.log(req.params.id)
    peliculaService.getPeliculaId(req.params.id)
        .then( pelicula => res.send( peliculaView.crearPagina("Detalle", peliculaView.crearDetallePelicula(pelicula)) ) )
};

const nuevaPelicula = (req, res) => {
    res.send( peliculaView.crearPagina("Nueva pelicula", peliculaView.nuevaPelicula() ) )
}

const agregarPelicula = (req, res) => {
    peliculaService.agregarPelicula(req.body)
    // .then( (pelicula) => res.send( peliculaView.crearPagina("Nueva pelicula", `<p>id: ${pelicula.id} <br> Titulo: ${pelicula.nombre}</p>`  ) ) )
    .then( ( pelicula ) => res.redirect("/peliculas") )
    .catch( (err) => res.send(peliculaView.crearPagina("Error Al agregar una pelicula", `<p>${err}</p>`)) )
}

const eliminarPelicula = (req, res) => {
    peliculaService.eliminarPelicula(req.params.id)
        // .then( ( pelicula ) => res.send( peliculaView.crearPagina("Pelicula Eliminada", `<p>id: ${pelicula.id} <br> Titulo: ${pelicula.titulo}</p>`  ) ) )
        .then( ( id ) => res.redirect("/peliculas") )
        .catch( (err) => res.send(peliculaView.crearPagina("Error Al eliminar una pelicula", `<p>${err}</p>`)) )
}

const getPeliculasBorradas = (req, res) => {
    peliculaService.getPeliculasBorradas()
        .then(peliculas => {
            res.send(peliculaView.crearPagina("Películas Borradas", peliculaView.crearCardsPeliculas(peliculas, false)))
        })
        .catch(err => {
            res.send(peliculaView.crearPagina("Error", `<p>${err}</p>`))
        });
};

const restaurarPelicula = (req, res) => {
    peliculaService.restaurarPelicula(req.params.id)
        .then( ( id ) => res.redirect("/peliculas/borradas") )
        .catch( (err) => res.send(peliculaView.crearPagina("Error Al restaurar una pelicula", `<p>${err}</p>`)) )
}
export {
    getHome,
    getPeliculaId,
    getPeliculas,
    nuevaPelicula,
    agregarPelicula,
    eliminarPelicula,
    getPeliculasBorradas, 
    restaurarPelicula
}