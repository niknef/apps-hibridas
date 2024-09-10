function crearPagina(titulo, contenido){
    let html = `
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${titulo}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
            
        </head>
        <body>
            ${contenido}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossorigin="anonymous"></script>
        </body>
    </html>
    `
    return html
};

function crearCardsPeliculas(peliculas) {
    let html = `
    <div class="container py-4">
    <a class="btn btn-primary" href='/peliculas/nuevo' >Agregar Pelicula</a>
        <div class="row justify-content-center g-4">`;

    if (peliculas.length === 0) {
        html += `<p>No hay películas disponibles.</p>`;
    } else {
        peliculas.forEach(pelicula => {
            html += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card h-100">
                    <img src="./img/${pelicula.img}" class="card-img-top" alt="${pelicula.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${pelicula.nombre}</h5>
                        <p class="card-text">Año: ${pelicula.anio}</p>
                        <div>`;
            
            // Recorrer géneros y crear badges
            pelicula.genero.forEach(g => {
                html += `<span class="badge text-bg-info">${g}</span> `;
            });

            html += `</div>
                    <div class="d-flex flex-row mt-2 align-middle gap-2">
                        <a href="${pelicula.trailer}" target="_blank" class="btn btn-primary">Ver trailer</a>
                        <a class="btn btn-secondary" href='/peliculas/${pelicula.id}' >Detalle</a>
                    </div>
                    </div>
                </div>
            </div>`;
        });
    }

    html += `
        </div>
    </div>`;

    return html;
};

function crearDetallePelicula(pelicula) {
    let html = `
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <img src="../img/${pelicula.img}" alt="${pelicula.nombre}" class="img-fluid rounded-2">
            </div>
            <div class="col-md-6">
                <h1>${pelicula.nombre}</h1>
                <h2>Año: ${pelicula.anio}</h2>
                `;
            
            
            pelicula.genero.forEach(g => {
                html += `<span class="badge text-bg-info">${g}</span> `;
            });
            
            html += `
                <p><strong>Trailer:</strong> <a href="${pelicula.trailer}" target="_blank">Ver trailer</a></p>
                
                <a href='/peliculas' class="btn btn-info btn-lg mt-2 w-50 text-white fw-semibold">Volver</a>
            </div>
        </div>
    </div>`;

    return html;
};

function nuevaPelicula(){
    let html = ` <div class="container mt-5">
    <h2>Agregar Nueva Película</h2>
    <form action='/peliculas/nuevo' method='post'>
        <div class="form-group">
            <label for="nombre">Nombre de la película</label>
            <input type="text" class="form-control" id="nombre" placeholder="Ingresa el nombre de la película" required>
        </div>
        <div class="form-group">
            <label for="anio">Año</label>
            <input type="number" class="form-control" id="anio" placeholder="Ingresa el año de lanzamiento" required>
        </div>
        <div class="form-group">
            <label for="genero">Género</label>
            <select multiple class="form-control" id="genero" required>
                <option>Acción</option>
                <option>Aventura</option>
                <option>Romance</option>
                <option>Crimen</option>
                <option>Suspenso</option>
                <option>Ciencia Ficción</option>
                <option>Catástrofes</option>
                <option>Drama</option>
                <option>Fantasía</option>
            </select>
            <small class="form-text text-muted">Mantén presionada la tecla Ctrl (Cmd en Mac) para seleccionar múltiples géneros.</small>
        </div>
        <div class="form-group">
            <label for="img">Imagen</label>
            <input type="file" class="form-control-file" id="img">
            <small class="form-text text-muted">Si no cargas ninguna imagen, se usará una imagen por defecto.</small>
        </div>
        <div class="form-group">
            <label for="trailer">URL del Trailer</label>
            <input type="url" class="form-control" id="trailer" placeholder="Ingresa la URL del trailer" required>
        </div>
        <button type="submit" class="btn btn-primary">Agregar Película</button>
    </form>
</div>`;
    return html
}

export default {
    crearPagina,
    crearCardsPeliculas,
    crearDetallePelicula,
    nuevaPelicula
};
export {
    crearPagina,
    crearCardsPeliculas,
    crearDetallePelicula,
    nuevaPelicula
};