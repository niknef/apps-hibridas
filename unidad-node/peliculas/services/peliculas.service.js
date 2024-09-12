import { readFile, writeFile } from "fs/promises"
import path from 'path'; 

function getPeliculas(eliminados = false) {
    return readFile(path.resolve("data/peliculas.json"), { encoding: 'utf8' })
        .then((peliculas) => eliminados ? JSON.parse(peliculas) : JSON.parse(peliculas).filter( pelicula => !pelicula.eliminado ) )
        .catch((error) => {
            console.error("Error leyendo o parseando el archivo de películas:", error);
            return [];
        });
};

function getPeliculaId(id){
    return getPeliculas().then( peliculas => {
        return peliculas.find( pelicula => pelicula.id == id ) || {}
    } )
};

function agregarPelicula(pelicula){

    return getPeliculas().then( async peliculas => {
        const nuevaPelicula = {
            id: peliculas.length + 1,
            ...pelicula
        }
        peliculas.push(nuevaPelicula)
        await writeFile("./data/peliculas.json", JSON.stringify(peliculas))
        return nuevaPelicula
    })
}

function eliminarPelicula(id) {
    return getPeliculas(true)
        .then(async peliculas => {
            const peliculasActualizadas = peliculas.map(pelicula => {
                if (pelicula.id == id) {
                    return {
                        ...pelicula,
                        eliminado: true
                    };
                }
                return pelicula; // Devuelve la película sin modificar si no coincide el id
            });

            await writeFile("./data/peliculas.json", JSON.stringify(peliculasActualizadas));
            return id;
        });
}

export {
    getPeliculaId,
    getPeliculas,
    agregarPelicula,
    eliminarPelicula
};
