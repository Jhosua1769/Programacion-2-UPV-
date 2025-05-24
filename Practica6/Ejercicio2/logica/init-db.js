// -------------------------------------------------------------------------------
// -- si la base de datos no esta creada ejecuta este script---(node init-db.js)--
// -------------------------------------------------------------------------------


// init-db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// Configuración
const DB_PATH = path.resolve(__dirname, '../bd/datos.db');
const DB_SCHEMA = `
    CREATE TABLE IF NOT EXISTS Persona (
        dni TEXT PRIMARY KEY,
        nombre TEXT NOT NULL,
        apellidos TEXT NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS Asignatura (
        codigo TEXT PRIMARY KEY,
        nombre TEXT NOT NULL,
        creditos INTEGER NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS Matricula (
        dni TEXT,
        codigo TEXT,
        PRIMARY KEY (dni, codigo),
        FOREIGN KEY (dni) REFERENCES Persona(dni),
        FOREIGN KEY (codigo) REFERENCES Asignatura(codigo)
    );
`;

// Función para inicializar la base de datos
function initDatabase() {
    return new Promise((resolve, reject) => {
        // Crear directorio si no existe
        if (!fs.existsSync(path.dirname(DB_PATH))) {
            fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
        }

        // Conectar a la base de datos
        const db = new sqlite3.Database(DB_PATH, (err) => {
            if (err) return reject(err);
            
            // Ejecutar el esquema SQL
            db.exec(DB_SCHEMA, (err) => {
                if (err) return reject(err);
                
                db.close((err) => {
                    if (err) return reject(err);
                    console.log(`Base de datos inicializada correctamente en: ${DB_PATH}`);
                    resolve();
                });
            });
        });
    });
}

// Ejecutar la inicialización
initDatabase()
    .then(() => process.exit(0))
    .catch(err => {
        console.error('Error al inicializar la base de datos:', err);
        process.exit(1);
    });