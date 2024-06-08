CREATE TABLE usuarios (
    codigo SERIAL PRIMARY KEY,
    nombre VARCHAR NOT NULL,
    direccion VARCHAR NOT NULL,
    cedula VARCHAR NOT NULL UNIQUE,
    telefono VARCHAR NOT NULL
);


INSERT INTO usuarios (nombre, direccion, cedula, telefono) VALUES ('Daniel Yanza', 'Calle 123', '1234567890', '555-1234');
INSERT INTO usuarios (nombre, direccion, cedula, telefono) VALUES ('Nelioska Granda', 'Avenida 456', '0987654321', '555-5678');
INSERT INTO usuarios (nombre, direccion, cedula, telefono) VALUES ('Samantha Suarez', 'Plaza 789', '1357924680', '555-9876');