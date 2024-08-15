const http = require('http'); 

const productos = [
    {id: 1, nombre: 'Café Expreso', precio: 200},
    {id: 2, nombre: 'Café Americano', precio: 250},
    {id: 3, nombre: 'Café Cortado', precio: 200},
    {id: 4, nombre: 'Café Doble', precio: 250},
    {id: 5, nombre: 'Café Lagrima', precio: 200}
];

const server = http.createServer(function(req, res) { 
    console.log('Server is running', req.url); 
    
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'}); 
    res.write('<h1>Mi espectacular pagína web!</h1>');

    switch (req.url) {
        case '/':
            console.log('Alumno: Nicolas firpo'); 
            res.write('<h2>Alumno: Nicolas firpo</h2>'); 
            break;
        case '/materia':
            console.log('Materia: Aplicaciones hibridas'); 
            res.write('<h2>Materia: Aplicaciones hibridas</h2>'); 
            break;
        case '/profesor':
            console.log('Profesor: Manuel Villafañe'); 
            res.write('<h2>Profesor: Manuel Villafañe</h2>'); 
            break;
        case '/productos':
            console.log('Productos:');
            // res.write(`
            // <h2>Productos:</h2>
            // <ul>
            //     <li>Café Expreso -> 200</li>
            //     <li>Café Americano -> 250</li>
            //     <li>Café Cortado -> 200</li>
            //     <li>Café Doble -> 250</li>
            //     <li>Café Lagrima -> 200</li>
            // </ul>`);

            // res.write('<table>');
            // res.write('<tr><th>id</th><th>Producto</th><th>Precio</th></tr>');
            // res.write('<tr><td>1</td><td>Café Expreso</td><td>200</td></tr>');
            // res.write('<tr><td>2</td><td>Café Americano</td><td>250</td></tr>');
            // res.write('<tr><td>3</td><td>Café Cortado</td><td>200</td></tr>');
            // res.write('<tr><td>4</td><td>Café Doble</td><td>250</td></tr>');
            // res.write('<tr><td>5</td><td>Café Lagrima</td><td>200</td></tr>');
            // res.write('</table>');
            res.write('<table>');
            res.write('<tr><th>id</th><th>Producto</th><th>Precio</th></tr>');
            productos.forEach(producto => {
                res.write(`<tr><td>${producto.id}</td><td>${producto.nombre}</td><td>${producto.precio}</td></tr>`);
            
            });
            res.write('</table>');
            break;
        default:
            console.log('404 -- Not found -- Pagina no encontrada'); 
            res.write('<h2>404 -- Not found -- Pagina no encontrada</h2>'); 
            break;
    }
}); 

server.listen(2023); 