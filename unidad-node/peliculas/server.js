import express from 'express';
import peliculasRoute from "./routes/peliculas.routes.js"
const app = express(); 

app.use( express.static("public") )
app.use( express.urlencoded({ extended: true }) ); 

app.use(peliculasRoute);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});