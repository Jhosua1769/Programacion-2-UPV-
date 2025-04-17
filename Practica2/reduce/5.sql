CREATE TABLE Clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    telefono VARCHAR(20)
    -- Otros campos según sea necesario
);


CREATE TABLE Habitaciones (
    id_habitacion INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(50) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    disponible BOOLEAN DEFAULT TRUE
    -- Otros campos según sea necesario
);


CREATE TABLE Reservas (
    id_reserva INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    id_habitacion INT,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente),
    FOREIGN KEY (id_habitacion) REFERENCES Habitaciones(id_habitacion)
    -- Otros campos según sea necesario
);


SELECT precio FROM Habitaciones WHERE id_habitacion = 1;

SELECT id_habitacion, tipo FROM Habitaciones
WHERE disponible = TRUE
AND id_habitacion NOT IN (
    SELECT id_habitacion FROM Reservas
    WHERE fecha_inicio <= '2024-06-30' AND fecha_fin >= '2024-07-05'
);
