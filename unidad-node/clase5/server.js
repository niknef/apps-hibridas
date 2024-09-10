import express from 'express'; // Importamos express
import path from 'path'; // Importamos path -> nos permite trabajar con rutas de archivos


const app = express(); // Creamos una instancia de express
//para aplicar un middleware
app.use(express.static('public')); // Le decimos a express que la carpeta public es estática
app.use(express.urlencoded({ extended: true })); // Middleware para leer los datos de un formulario


app.get('/', (req, res) => { // Definimos una ruta
    //res.send("Hola Mundo"); // Enviamos una respuesta
    res.sendFile(path.resolve("public/index.html")); // Enviamos un archivo usamos path.resolve para obtener la ruta absoluta
});

app.get('/saludo', (req, res) => { // Definimos una ruta
    console.log(req.query); // Obtenemos los parámetros de la URL
})

app.post('/saludo', (req, res) => { // Definimos una ruta
    console.log(req.body); // el body es el contenido del formulario
})

app.listen(2024, () => console.log("Servidor funcionando")); // Iniciamos el servidor en el puerto 2024