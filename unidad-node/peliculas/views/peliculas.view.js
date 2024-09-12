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

function crearHome() {
    let html = `
            <div class="container text-center mt-5">
                <h1 class="mb-4">MANEJADOR DE PELÍCULAS</h1>
                <div class="d-flex justify-content-center gap-3">
                    <a class="btn btn-primary" href="/peliculas">Mis Películas</a>
                    <a class="btn btn-success" href="/peliculas/nuevo">Agregar Película</a>
                    <a class="btn btn-danger" href="/peliculas/borradas">Borradas</a>
                </div>
            </div>
            
    `;
    return html;
};

function crearCardsPeliculas(peliculas, botonEliminar = true) {
    let html = `
    <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
    <h1 class="mb-0">Películas</h1>
    <div class="d-flex flex-row gap-2">
    <a class="btn btn-primary" href="/peliculas/nuevo">Agregar Película</a>
    <a href='/' class="btn btn-secondary text-white fw-semibold">Volver</a>
    </div>
    </div>
        <div class="row justify-content-center g-4">`;
    
    if (peliculas.length === 0) {
        html += `<p>No hay películas disponibles.</p>`;
    } else {
        peliculas.forEach(pelicula => {
            html += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card h-100">
                    <img src="../img/${pelicula.img}" class="card-img-top" alt="${pelicula.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${pelicula.nombre}</h5>
                        <p class="card-text">Año: ${pelicula.anio}</p>
                        <div>`;
            
            // Recorrer géneros y crear badges
            pelicula.genero.forEach(g => {
                html += `<span class="badge text-bg-info">${g}</span> `;
            });

            html += `</div>
                    <div class="d-flex flex-wrap mt-2 align-items-center gap-2">
                        <a href="${pelicula.trailer}" target="_blank" class="btn btn-primary flex-grow-1">Trailer</a>
                        <a class="btn btn-secondary flex-grow-1" href='/peliculas/${pelicula.id}' >Detalle</a>`;
                        if (botonEliminar) {
                            html += `<a class="btn btn-danger flex-grow-1" href='/peliculas/eliminar/${pelicula.id}' >Eliminar</a>`;
                        }else{
                            html += `<a class="btn btn-success flex-grow-1" href='/peliculas/borradas/restaurar/${pelicula.id}' >Restaurar</a>`;
                        }
                        html += `</div>
                        
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
            <div class="d-flex flex-wrap mt-2 align-items-center gap-2">
                
                <a href="${pelicula.trailer}" class="btn btn-info btn-lg mt-2 w-50 text-white fw-semibold">Trailer</a>
                <a href='/peliculas/eliminar/${pelicula.id}' class="btn btn-danger btn-lg mt-2 w-50 text-white fw-semibold">Eliminar</a>
                <a href='/peliculas' class="btn btn-secondary btn-lg mt-2 w-50 text-white fw-semibold">Volver</a>
            </div>
        </div>
    </div>`;

    return html;
};

function nuevaPelicula() {
    let html = `
    <div class="container mt-5 mb-5 p-4 bg-light border rounded shadow-sm">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="text-center text-primary">Agregar Nueva Película</h2>
        <a href='/' class="btn btn-secondary text-white fw-semibold">Volver</a>
    </div>   
        <form action="/peliculas/nuevo" method="POST">

            <div class="form-group">
                <label for="nombre">Nombre de la Película</label>
                <input type="text" class="form-control" id="nombre" name="nombre" required>
            </div>

            <div class="form-group">
                <label for="anio">Año de Lanzamiento</label>
                <input type="number" class="form-control" id="anio" name="anio" min="1900" max="2099" required>
            </div>

            <div class="form-group">
                <label for="genero">Género(s)</label>
                <select class="form-control" id="genero" name="genero[]" multiple required>
                    <option value="Acción">Acción</option>
                    <option value="Aventura">Aventura</option>
                    <option value="Ciencia Ficción">Ciencia Ficción</option>
                    <option value="Crimen">Crimen</option>
                    <option value="Drama">Drama</option>
                    <option value="Fantasía">Fantasía</option>
                    <option value="Romance">Romance</option>
                    <option value="Suspenso">Suspenso</option>
                    <option value="Catástrofes">Catástrofes</option>
                </select>
                <small class="form-text text-muted">Mantén presionada la tecla Ctrl para seleccionar varios géneros.</small>
            </div>

            <div class="form-group">
                <label for="img">Nombre de img de la Película</label>
                <input type="text" class="form-control" id="img" name="img" value="avatar.webp">
            </div>
            
            <div class="form-group">
                <label for="trailer">URL del Trailer</label>
                <input type="url" class="form-control" id="trailer" name="trailer" required>
            </div>

            <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary btn-block mt-3">Agregar Película</button>
            </div>
        </form>
        </div>`;
    return html;
    }
export default {
    crearHome,
    crearPagina,
    crearCardsPeliculas,
    crearDetallePelicula,
    nuevaPelicula
};
export {
    crearHome,
    crearPagina,
    crearCardsPeliculas,
    crearDetallePelicula,
    nuevaPelicula
};