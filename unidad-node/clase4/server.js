import http from "http"
import { readFile } from "fs"
import { crearPagina, crearListadoProductos } from "./pages/utils.js"



// Create a local server to receive data from
const server = http.createServer(function(request, response) {
    console.log("Servidor Funcionando", request.url); // Print the URL of the request
    switch(request.url) {
        case "/":
            response.write( crearPagina("HOME", "<h1>Home</h1>"));
            response.end()
            break;
        case "/materia":
            response.write( crearPagina("MATERIA", "<h1>Aplicaciones hibridas</h1>"));
            response.end()
            break;
        case "/profesor":
            response.write( crearPagina("PROFESOR", "<h1>Yo</h1>"));
            response.end()
            break;
        case "/productos":
            readFile("./data/productos.json", "utf-8", (err, data) => {
                if (err) {
                    response.write("<h1>Error al leer el archivo</h1>");
                } else {
                    const productos = JSON.parse(data);
                    response.write( crearListadoProductos(productos) );
                    
                }
                response.end()
            });
            break;
        case "/pagina-web":
            readFile("./test.html", "utf-8", (err, data) => {
                if (err) {
                    response.write("<h1>Error al leer el archivo</h1>");
                } else {
                    response.write(data);
                }
                response.end()
            });
            break
        case "/test.css":
            readFile("./test.css", "utf-8", (err, data) => {
                if (err) {
                    response.write("<h1>Error al leer el archivo</h1>");
                } else {
                    response.write(data);
                }
                response.end()
            });
            break
        case "/favicon.ico":
            readFile("./favicon.ico", (err, data) => {
                if (err) {
                    response.write("<h1>Error al leer el archivo</h1>");
                } else {
                    response.write(data);
                }
                response.end()
            });
            break
        default:
            response.write("<h1>Pagina no encontrada</h1>");
            response.end()
            break;
    }
    //response.end()
}); // Create a servers -> 

server.listen(2024); // Listen to port 8000