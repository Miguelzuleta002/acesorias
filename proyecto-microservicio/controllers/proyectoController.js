const Proyecto = require('../models/Proyecto');

exports.crearProyecto = async (req, res) => {
    try {
        const nuevoProyecto = new Proyecto(req.body);
        await nuevoProyecto.save();
        res.status(201).json(nuevoProyecto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al crear el Proyecto' });
    }
};

exports.obtenerProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.find().populate('cliente tipoProyecto universidad etapa');
        res.json(proyectos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al obtener los Proyectos' });
    }
};

exports.actualizarProyecto = async (req, res) => {
    try {
        const { titulo, fechaIniciacion, fechaEntrega, valor, cliente, tipoProyecto, universidad, etapa } = req.body;
        let proyecto = await Proyecto.findById(req.params.id);

        if (!proyecto) {
            return res.status(404).json({ msg: 'No existe el proyecto' });
        }

        if (titulo) proyecto.titulo = titulo;
        if (fechaIniciacion) proyecto.fechaIniciacion = fechaIniciacion;
        if (fechaEntrega) proyecto.fechaEntrega = fechaEntrega;
        if (valor) proyecto.valor = valor;
        if (cliente) proyecto.cliente = cliente;
        if (tipoProyecto) proyecto.tipoProyecto = tipoProyecto;
        if (universidad) proyecto.universidad = universidad;
        if (etapa) proyecto.etapa = etapa;
        proyecto.fechaActualizacion = Date.now();

        proyecto = await Proyecto.findByIdAndUpdate(req.params.id, proyecto, { new: true });
        res.json(proyecto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al actualizar el proyecto' });
    }
};
