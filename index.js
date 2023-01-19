const { conexion } = require("./Database/database.js");
const express = require("express");
const cors = require("cors");

//Inicializacion de la app
console.log("Iniciando la conexión")

//Conexión a la base de datos
conexion();

//Crear servidor Node
const app = express();
const puerto = 3900;
// app.use(express.static('public'));

//Configuramos cors, usamos el middleware de cors
app.use(cors());

//Convertir cuerpo a json
app.use(express.json());


//Rutas
app.get("/json",(req, res) => {
    console.log("Se ha realizado una petición a index.html");
    // res.sendFile(__dirname+"/index.html");
    res.status(200).send([{
        "Titulo":"Cars 2",
        "Genero":"Carreras",
        "Anio":"2010"
    },
    {
        "Titulo":"Cars 2",
        "Genero":"Carreras",
        "Anio":"2010"
    }]);
})

app.get("/",(req, res) => {
    console.log("Se ha realizado una petición a index.html");
    res.sendFile(__dirname+"/index.html");
})
// Crear servidor y escuchar peticiones HTTP
app.listen(puerto,"127.0.0.1", () => {
    console.log("Servidor corriendo en el puerto "+puerto);
});
