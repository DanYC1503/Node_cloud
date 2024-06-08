const { Client } = require('pg');
const connectionData = require('../config/connection');
const { createUsuario, getAllUsuarios, updateUsuario, deleteUsuario } = require('../operaciones/operaciones');

const client = new Client(connectionData);

async function runOperations() {
    try {
        await client.connect();

        // Create a new usuario
        const newUsuario = await createUsuario({
            nombre: 'Neli Suarez',
            direccion: 'Manuel ARturo Cisneros',
            cedula: '1752773521',
            telefono: '097-925-1007'
        });
        console.log('Nuevo usuario:', newUsuario);

        // Get all usuarios
        const usuarios = await getAllUsuarios();
        console.log('All usuarios:', usuarios);

        // Update an existing usuario
        const updatedUsuario = await updateUsuario(1, {
            nombre: 'Peter Parker',
            direccion: 'Monay Shopping',
            cedula: '0102940822',
            telefono: '098-468-7303'
        });
        console.log('Actualizado usuario:', updatedUsuario);

        // Delete an usuario
        await deleteUsuario(2);
        console.log('Usuario with ID 2 deleted');
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        await client.end();
    }
}

module.exports = runOperations;
