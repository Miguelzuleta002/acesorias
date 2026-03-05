const TipoProyecto = require('../models/TipoProyecto');

// Create
exports.crearTipoProyecto = async (req, res) => {
    try {
        const nuevoTipoProyecto = new TipoProyecto(req.body);
        await nuevoTipoProyecto.save();
        res.status(201).json(nuevoTipoProyecto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al crear el Tipo de Proyecto' });
    }
};

// List
exports.obtenerTipoProyectos = async (req, res) => {
    try {
        const tipos = await TipoProyecto.find();
        res.json(tipos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al obtener los Tipos de Proyecto' });
    }
};

// Update
exports.actualizarTipoProyecto = async (req, res) => {
    try {
        const { nombre } = req.body;
        let tipoProyecto = await TipoProyecto.findById(req.params.id);

        if (!tipoProyecto) {
            return res.status(404).json({ msg: 'No existe el tipo de proyecto' });
        }

        tipoProyecto.nombre = nombre;
        tipoProyecto.fechaActualizacion = Date.now();

        tipoProyecto = await TipoProyecto.findByIdAndUpdate(req.params.id, tipoProyecto, { new: true });
        res.json(tipoProyecto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al actualizar el Tipo de Proyecto' });
    }
};
