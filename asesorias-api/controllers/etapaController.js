const Etapa = require('../models/Etapa');

exports.crearEtapa = async (req, res) => {
    try {
        const nuevaEtapa = new Etapa(req.body);
        await nuevaEtapa.save();
        res.status(201).json(nuevaEtapa);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al crear la Etapa' });
    }
};

exports.obtenerEtapas = async (req, res) => {
    try {
        const etapas = await Etapa.find();
        res.json(etapas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al obtener las Etapas' });
    }
};

exports.actualizarEtapa = async (req, res) => {
    try {
        const { nombre } = req.body;
        let etapa = await Etapa.findById(req.params.id);

        if (!etapa) {
            return res.status(404).json({ msg: 'No existe la etapa' });
        }

        if (nombre) etapa.nombre = nombre;
        etapa.fechaActualizacion = Date.now();

        etapa = await Etapa.findByIdAndUpdate(req.params.id, etapa, { new: true });
        res.json(etapa);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al actualizar la etapa' });
    }
};
