const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
    res.send('API REST Asesorías IUDigital is running');
});

// Define Routes
app.use('/api/tipoproyectos', require('./routes/tipoProyecto'));
app.use('/api/clientes', require('./routes/cliente'));
app.use('/api/universidades', require('./routes/universidad'));
app.use('/api/etapas', require('./routes/etapa'));
app.use('/api/proyectos', require('./routes/proyecto'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
