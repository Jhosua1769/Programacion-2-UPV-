async function leerMedicones(texto) {
    var fs = require("fs");
    fs.readFile("mediciones.txt", "utf8", function(err, contenido) {
        if (err) {
            console.log("error");
            // Assuming calculo is not defined, remove this line
            return;
        }

        let datos = JSON.parse(contenido);
        console.log(datos);
    });
}

async function guardarMedicones(texto) {
    var fs = require("fs");
    fs.readFile("mediciones.txt", "utf8", function(err, contenido) {
        if (err) {
            console.log("error");
            // Assuming calculo is not defined, remove this line
            return;
        }

        let datos = JSON.parse(contenido);

        return datos;
    });
}


async function ids(texto, devolver){

    let datos = await guardarMedicones(texto);

    // let ids = datos.reduce((accu, element) => {

    //     accu.push(element.id);
        
    //     return accu;
    // }, [])
   
    devolver(datos);


}

async function main() {


    // await leerMedicones("mediciones.txt");


    let datos = await ids("mediciones.txt");
    
    console.log(datos);
}

main();
