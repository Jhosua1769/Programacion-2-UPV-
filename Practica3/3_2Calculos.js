// –––––––––––––––––––––––––
// -> texto
//
// media(texto, mostrar) 
// 
// -> { hora: N, temperatura: R }
//
// Calcula la temperatura media a partir de un archivo JSON
// y devuelve un objeto con la hora actual y la temperatura media.
// –––––––––––––––––––––––––
function media(texto, mostrar) {
    convertirJSON(texto, function (err, datos) {
        if (err) {
            console.error("Error en media:", err.message);
            mostrar(err, null);
            return;
        }

        let suma = 0;
        for (let i = 0; i < datos.length; i++) {
            suma += datos[i].temperatura;
        }

        const resultado = {
            hora: new Date().toLocaleTimeString(),
            temperatura: suma / datos.length
        };

        mostrar(null, resultado);
    });
}

// –––––––––––––––––––––––––
// -> texto
//
// tempMax(texto, mostrar) -> { hora: N, temperatura: R }
//
// Devuelve el objeto con la temperatura más alta del archivo.
// –––––––––––––––––––––––––
function tempMax(texto, mostrar) {
    convertirJSON(texto, function (err, datos) {
        if (err) {
            console.error("Error en tempMax:", err.message);
            mostrar(err, null);
            return;
        }

        let maxTemp = datos[0];
        for (let i = 1; i < datos.length; i++) {
            if (datos[i].temperatura > maxTemp.temperatura) {
                maxTemp = datos[i];
            }
        }

        mostrar(null, maxTemp);
    });
}

// –––––––––––––––––––––––––
// -> texto
//
// tempMin(texto, mostrar) -> { hora: N, temperatura: R }
//
// Devuelve el objeto con la temperatura más baja del archivo.
// –––––––––––––––––––––––––
function tempMin(texto, mostrar) {
    convertirJSON(texto, function (err, datos) {
        if (err) {
            console.error("Error en tempMin:", err.message);
            mostrar(err, null);
            return;
        }

        let minTemp = datos[0];
        for (let i = 1; i < datos.length; i++) {
            if (datos[i].temperatura < minTemp.temperatura) {
                minTemp = datos[i];
            }
        }

        mostrar(null, minTemp);
    });
}

// –––––––––––––––––––––––––
// -> texto
//
// convertirJSON(texto, callback) -> [{ hora: N, temperatura: R }]
//
// Lee un archivo y convierte su contenido en un arreglo de objetos JSON.
// –––––––––––––––––––––––––
function convertirJSON(texto, callback) {
    const fs = require("fs");

    fs.readFile(texto, "utf8", function (err, contenido) {
        if (err) {
            console.error("Error leyendo el archivo:", err.message);
            callback(err, null);
            return;
        }

        try {
            let datos = JSON.parse(contenido);
            callback(null, datos);
        } catch (parseError) {
            console.error("Error al parsear JSON:", parseError.message);
            callback(parseError, null);
        }
    });
}

// –––––––––––––––––––––––––
// main – ejemplos de uso
// –––––––––––––––––––––––––

const archivo = "datos.txt"; 

media(archivo, function (err, datos) {
    if (err) return;
    console.log("Media:", datos);
});

tempMax(archivo, function (err, datos) {
    if (err) return;
    console.log("Temperatura Máxima:", datos);
});

tempMin(archivo, function (err, datos) {
    if (err) return;
    console.log("Temperatura Mínima:", datos);
});
