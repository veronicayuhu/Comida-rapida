var express = require('express');
var mongoose = require("mongoose");

var app = express();



mongoose.connect('mongodb://localhost:27017/comidarapida', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db  = mongoose.connection;

db.on("error", () => {
    console.log("ERROR no se puede conectar al servidor");
});

db.on("open", () => {
    console.log("Conexion exitosa");
});

var port = 8000;
app.listen(port, () => {
  console.log("Corriendo en el puerto " + port);
});
 


