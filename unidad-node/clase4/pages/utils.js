function crearListadoProductos(productos){
    let html = ""
    html+="<h1>Productos</h1>"
    html+="<table>"
    html+="<tr>"
    html+="<th>ID</th>"
    html+="<th>Nombre</th>"
    html+="<th>Precio</th>"
    html+="</tr>"
    html+="<tr>"
    productos.forEach(producto => {
        html+="<tr>"
        html+="<td>" + producto.id + "</td>"
        html+="<td>" + producto.nombre + "</td>"
        html+="<td>" + producto.precio + "</td>"
        html+="</tr>"
    })
    html+="</tr>"
    return html
}
function crearPagina(titulo, contenido){
    let html = `
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${titulo}</title>
        </head>
        <body>
            <h1>Mi espectacular pagina web</h1>
            ${contenido}
        </body>
    </html>
    `
    return html
}

// module.exports = {
//     crearPagina,
//     crearListadoProductos
// } common.js
export default {
    crearPagina,
    crearListadoProductos
}
export {
    crearPagina,
    crearListadoProductos
}