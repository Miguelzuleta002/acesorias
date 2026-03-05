const Cliente = require('../models/Cliente');

exports.crearCliente = async (req, res) => {
    try {
        const nuevoCliente = new Cliente(req.body);
        await nuevoCliente.save();
        res.status(201).json(nuevoCliente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al crear el cliente' });
    }
};

exports.obtenerClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al obtener clientes' });
    }
};

exports.actualizarCliente = async (req, res) => {
    try {
        const { nombre, email } = req.body;
        let cliente = await Cliente.findById(req.params.id);

        if (!cliente) {
            return res.status(404).json({ msg: 'No existe el cliente' });
        }

        if (nombre) cliente.nombre = nombre;
        if (email) cliente.email = email;
        cliente.fechaActualizacion = Date.now();

        cliente = await Cliente.findByIdAndUpdate(req.params.id, cliente, { new: true });
        res.json(cliente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al actualizar el cliente' });
    }
};
