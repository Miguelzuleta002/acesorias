const mongoose = require('mongoose');

const TipoProyectoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        enum: ['ensayo', 'artículo', 'monografía', 'trabajo final de pregrado', 'trabajo final de especialización'],
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

module.exports = mongoose.model('TipoProyecto', TipoProyectoSchema);
