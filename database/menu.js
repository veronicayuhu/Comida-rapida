var mongoose = require("mongoose");

var menuSchema = new mongoose.Schema({
    nombre: { 
        type: String,
        required: [true, 'El nombre es necesario']
    },
    precio:{
        type: Number,
        required: [true, 'El precio es necesario']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es necesaria']
    },
    fechaRegistro: {
        type: Date,
        required: true
    },
    fotoProducto: {
        type: String,
        required: false
    },
    disponible: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model("Menu", menuSchema);

