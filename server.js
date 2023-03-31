//1. crear el archivo server.js - listo
//2. Inicializar NPM - listo
//3. Instalar express y solicitar - listo
//4. método listen para asignar puerto
//5. método get para recibir la solicitud - listo
//6. método de respuesta - response 


const express = require('express');
const app = express();

// home
app.get("/", function(request, response){
    //response.send("Hola mundo, estoy en twitch! ");
    response.sendFile(__dirname + "/home.html");
});



// home
app.get("/contacto", function(request, response){
    //response.send("Página de contacto ");
    response.sendFile(__dirname + "/contacto.html");
});






// puerto 3000 - http://localhost:3000/
app.listen(3000, function(){
    // haz algo
    console.log("Puerto 3000 inicializado");
});
