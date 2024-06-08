const { Client } = require('pg');
const connectionData = require('../config/connection.js');

// Function to establish a database connection
async function connect() {
    const client = new Client(connectionData)
    await client.connect();
    return client;
}

// Function to disconnect from the database
async function disconnect(client) {
    await client.end();
}

// Function to create a new usuario
async function createUsuario(usuarioData) {
    const client = await connect();
    try {
        const { nombre, direccion, cedula, telefono } = usuarioData;
        const query = 'INSERT INTO usuarios (nombre, direccion, cedula, telefono) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [nombre, direccion, cedula, telefono];
        const result = await client.query(query, values);
        return result.rows[0];
    } finally {
        await disconnect(client);
    }
}


async function getAllUsuarios() {
    const client = await connect();
    try {
        const query = 'SELECT * FROM usuarios';
        const result = await client.query(query);  // Await the query result
        return result.rows;
    } finally {
        await disconnect(client);
    }
}

// Function to update a usuario
async function updateUsuario(id, usuarioData) {
    const client = await connect();
    try {
        const { nombre, direccion, cedula, telefono } = usuarioData;
        const query = 'UPDATE usuarios SET nombre = $1, direccion = $2, cedula = $3, telefono = $4 WHERE codigo = $5 RETURNING *';
        const values = [nombre, direccion, cedula, telefono, id];
        const result = await client.query(query, values);
        return result.rows[0];
    } finally {
        await disconnect(client);
    }
}

// Function to delete a usuario
async function deleteUsuario(id) {
    const client = await connect();
    try {
        const query = 'DELETE FROM usuarios WHERE codigo = $1';
        await client.query(query, [parseInt(id)]); // Ensure the id is an integer
    } catch (error) {
        console.error('Error deleting usuario:', error);
        throw error;
    } finally {
        await disconnect(client);
    }
}

module.exports = {
    createUsuario,
    getAllUsuarios,
    updateUsuario,
    deleteUsuario
};
