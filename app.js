const express = require("express");
const path = require("path");
const app = express();
const ruta = path.join(__dirname, "./public")/*ATENTO A ESTOS 2*/




/*Esta funcion comunica el html public, para poder usar css*/
app.use(express.static("public"))/*ATENTO A ESTOS 2*/


/*nos direciona a la raiz y muestra un console.log(Holamundo)*/
app.get("/", (req, res) => {
    res.send("Hola mundo")
})


/*nos muestra un archivo html por el navegador*/
app.get("/otraRuta", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
})



/*Esta función conecta el servidor propio con la nube*/
app.listen(3000, () => {
    console.log('corriendo aplicación...')
})