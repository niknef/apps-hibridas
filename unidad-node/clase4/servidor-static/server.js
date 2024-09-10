// const http = require('http'); // Protocolo HTTP
import http from "http"
import { read, readFile } from "fs";
// const productos = require("./data/productos.js")  //commonjs
// const pages = require("./pages/utils.js")
// import productos from "./data/productos.js"
import { crearPagina, crearListadoProductos } from "./pages/utils.js"
// Create a local server to receive data from

/* EJEMPLO CALLBACK */
// function sumar(a,b, callback){
//     callback(a + b)
// }
// sumar(2,3, (resultado) => resultado * 2 )

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
            readFile("./data/productos.json","utf-8", (err, data) => {
                if (err) throw err;
                const productos = JSON.parse(data)
                response.write(crearPagina("productos", crearListadoProductos(productos)))
                response.end()
            })
            //response.write( crearPagina("PRODUCTOS", crearListadoProductos(productos)) )
            break;
        case "/pagina-web":
            readFile("./test.html","utf-8", (err, data) => {
                if (err) throw err;
                response.write(data)
                response.end()
            })
            //response.write( crearPagina("PRODUCTOS", crearListadoProductos(productos)) )
            break;
        case "/test.css":
            readFile("./test.css","utf-8", (err, data) => {
                if (err) throw err;
                response.write(data)
                response.end()
            })
            break;
        case "/favicon.ico":
            readFile("./calabaza.png", (err, data) => {
                if (err) throw err;
                response.write(data)
                response.end()
            })
            break;
        case "/calabaza.png":
            readFile("./calabaza.png", (err, data) => {
                if (err) throw err;
                    response.write(data)
                    response.end()
                })
        break;            
        default:
            response.write("<h1>Pagina no encontrada</h1>");
            response.end()
            break;
    }
    // response.end()
}); // Create a servers -> 

server.listen(2024); // Listen to port 8000