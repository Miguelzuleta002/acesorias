const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Add the other models so Mongoose knows about them for population
require('./models/TipoProyecto');
require('./models/Cliente');
require('./models/Universidad');
require('./models/Etapa');
require('./models/Proyecto');

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Microservicio Proyectos IUDigital is running');
});

// Define Routes
app.use('/api/proyectos', require('./routes/proyecto'));

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Microservice started on port ${PORT}`);
});
