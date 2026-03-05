const express = require('express');
const router = express.Router();
const tipoProyectoController = require('../controllers/tipoProyectoController');

// api/tipoproyectos
router.post('/', tipoProyectoController.crearTipoProyecto);
router.get('/', tipoProyectoController.obtenerTipoProyectos);
router.put('/:id', tipoProyectoController.actualizarTipoProyecto);

module.exports = router;
