const Universidad = require('../models/Universidad');

exports.crearUniversidad = async (req, res) => {
    try {
        const nuevaUniversidad = new Universidad(req.body);
        await nuevaUniversidad.save();
        res.status(201).json(nuevaUniversidad);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al crear la Universidad' });
    }
};

exports.obtenerUniversidades = async (req, res) => {
    try {
        const universidades = await Universidad.find();
        res.json(universidades);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al obtener las Universidades' });
    }
};

exports.actualizarUniversidad = async (req, res) => {
    try {
        const { nombre, direccion, telefono } = req.body;
        let universidad = await Universidad.findById(req.params.id);

        if (!universidad) {
            return res.status(404).json({ msg: 'No existe la universidad' });
        }

        if (nombre) universidad.nombre = nombre;
        if (direccion) universidad.direccion = direccion;
        if (telefono) universidad.telefono = telefono;
        universidad.fechaActualizacion = Date.now();

        universidad = await Universidad.findByIdAndUpdate(req.params.id, universidad, { new: true });
        res.json(universidad);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al actualizar la universidad' });
    }
};
