import http from 'http'; // Importamos el modulo http
import {readFile} from 'fs'; // importamos el modulo readFile del modulo fs

// Creamos un servidor local para recibir datos
const server = http.createServer(function(req, res) {
    console.log("Server Funcionando", req.url); // Imprimimos la URL de la solicitud
    switch (req.url) {
        case "/":
            readFile("./pages/index.html", "utf-8", (err, data) => {
                if (err) throw err;
                res.write(data)
                res.end()
            });
            break;
        case "/contacto":
            readFile("./pages/contact.html", "utf-8", (err, data) => {
                if (err) throw err;
                res.write(data)
                res.end()
            });
            break;
        case "/style.css":
            readFile("./css/style.css", "utf-8", (err, data) => {
                if (err) throw err;
                res.write(data)
                res.end()
            });
            break;
        case "/biceporange.jpeg":
            readFile("./img/biceporange.jpeg", (err, data) => {
                if (err) throw err;
                res.write(data)
                res.end()
            });
            break;
        case "/billielow1.jpeg":
            readFile("./img/billielow1.jpeg", (err, data) => {
                if (err) throw err;
                res.write(data)
                res.end()
            });
            break;
                
        case "/cargo.jpeg":
            readFile("./img/cargo.jpeg", (err, data) => {
                if (err) throw err;
                res.write(data)
                res.end()
             });
            break;
        case "/redondocrew1.jpeg":
            readFile("./img/redondocrew1.jpeg", (err, data) => {
                if (err) throw err;
                res.write(data)
                res.end()
            });
            break;
        case "/thusis.jpeg":
            readFile("./img/thusis.jpeg", (err, data) => {
                if (err) throw err;
                res.write(data)
                res.end()
            });
            break;
        case "/favicon.ico":
            readFile("./logo-mu.jpg", (err, data) => {
                if (err) throw err;
                res.write(data)
                res.end()
            });
            break;
        default:
            res.setHeader('Content-Type', 'text/html');
            res.write("<h1>Pagina no encontrada - 404</h1>");
            res.end();
            break;
    }
});

server.listen(2024, () => {
    console.log("Servidor escuchando en el puerto 2024");
});