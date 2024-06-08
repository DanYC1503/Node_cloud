const express = require('express');
const router = express.Router();
const { createUsuario, getAllUsuarios, updateUsuario, deleteUsuario } = require('../operaciones/operaciones.js');


// Route to create a new usuario
router.post('/node/usuarios', (req, res) => {
    try {
        const newUsuario = createUsuario(req.body);
        res.json(newUsuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to get all usuarios
router.get('/node/usuarios/list', async (req, res) => {
    try {
        const usuarios = await getAllUsuarios();  // Await the result of getAllUsuarios
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to update an existing usuario
router.put('/node/usuarios/:id',  (req, res) => {
    const id = req.params.id;
    try {
        const updatedUsuario =  updateUsuario(id, req.body);
        res.json(updatedUsuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to delete an usuario
router.delete('/node/usuarios/:id', async (req, res) => {
    const id = parseInt(req.params.id); // Parse id to integer
    try {
        await deleteUsuario(id); // Make sure to use await
        res.json({ message: 'Usuario deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
