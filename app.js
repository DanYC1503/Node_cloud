const express = require('express');
const app = express();
const usuarioServicios = require('./services/usuario_services');
const runOperations = require('./Dao/gestionDatos');

app.use(express.json());

// Use the routes defined in usuarioServicios
app.use('/api', usuarioServicios);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Call runOperations function to perform CRUD operations
runOperations();
