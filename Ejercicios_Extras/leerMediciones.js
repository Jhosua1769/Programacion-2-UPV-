var fs = require("fs");

function leerMedicones(texto, calculo) {
   
    fs.readFile(texto, "utf8", function(err, contenido) {
        if (err) {
            console.log("error", err.message);
            calculo(err, null);
            return;
        }

        try {
            let datos = JSON.parse(contenido);
            calculo(null, datos);
        } catch (parseError) {
            console.log("JSON parse error");
            calculo(parseError, null);
        }
    });
}

leerMedicones("mediciones.txt", function(err, datos) {
    if (err) {
        console.log("error");
        return;
    }
    
    console.log(datos)
});