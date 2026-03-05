const mongoose = require('mongoose');

const EtapaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        enum: ['anteproyecto', 'entrega parcial 1', 'entrega parcial 2', 'entrega final'],
        required: true,
        unique: true
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

module.exports = mongoose.model('Etapa', EtapaSchema);
