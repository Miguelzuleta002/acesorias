const mongoose = require('mongoose');

const ProyectoSchema = new mongoose.Schema({
    numero: {
        type: String,
        required: true,
        unique: true
    },
    titulo: {
        type: String,
        required: true
    },
    fechaIniciacion: {
        type: Date,
        required: true
    },
    fechaEntrega: {
        type: Date,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    tipoProyecto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    universidad: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
    },
    etapa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Etapa',
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Proyecto', ProyectoSchema);
