// const http = require('http'); // Protocolo HTTP
import http from "http"
// const productos = require("./data/productos.js")  //commonjs
// const pages = require("./pages/utils.js")
import productos from "./data/productos.js"
import { crearPagina, crearListadoProductos } from "./pages/utils.js"
// Create a local server to receive data from
const server = http.createServer(function(request, response) {
    console.log("Servidor Funcionando", request.url); // Print the URL of the request
    switch(request.url) {
        case "/":
            response.write( crearPagina("HOME", "<h1>Home</h1>"));
            break;
        case "/materia":
            response.write( crearPagina("MATERIA", "<h1>Aplicaciones hibridas</h1>"));
            break;
        case "/profesor":
            response.write( crearPagina("PROFESOR", "<h1>Yo</h1>"));
            break;
        case "/productos":
            response.write( crearPagina("PRODUCTOS", crearListadoProductos(productos)) )
            break;
        default:
            response.write("<h1>Pagina no encontrada</h1>");
            break;
    }
    response.end()
}); // Create a servers -> 

server.listen(2024); // Listen to port 8000