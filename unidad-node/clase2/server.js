const http = require('http'); //protocolo  

// Create a local server to receive data from
const server = http.createServer(function(req, res) { //request(objeto que tiene lo necesario para recibir la informacion del cliente) y response ( objeto que tiene todo lo necesario para responderle al cliente que rcibi esa informacion)
    
    console.log('Server is running', req.url); //imprimimos en consola que el server esta corriendo y la url que se esta solicitando
    
    res.writeHead(200, {'Content-Type': 'text/html'}); //escribimos en la respuesta que todo esta bien y que el contenido es de tipo texto html

    if(req.url === '/'){ //si la url es igual a / entonces
        
        console.log('Home page'); //imprimimos en consola Home page	
        
        res.write('<h1>Home page</h1>'); //escribimos en la respuesta Home page
    }
    
    if(req.url === '/about'){ //si la url es igual a /about entonces
        
        console.log('About page'); //imprimimos en consola About page
        
        res.write('<h1>About page</h1>'); //escribimos en la respuesta About page
    }
    
    res.end() //terminamos la respuesta
}); //creamos el server 

server.listen(8000); //le decimos al server que escuche en el puerto 8000