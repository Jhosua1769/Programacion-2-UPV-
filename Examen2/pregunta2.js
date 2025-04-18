// –––––––––––––––––––––––––––––––---------------------------------------
// texto -> leerFichero() -> lista<objeto> | error (versión con promesa)
// –––––––––––––––––––––––––––––––---------------------------------------

function leerFichero(texto) {

    let prom = new Promise ( function (resolver, rechazar){

        var fs = require( "fs" )

        fs.readFile(texto, "utf8", function( err, contenido ) {

            if( err ) {
                rechazar(err);  
            }

            let datos = JSON.parse(contenido)

            resolver(datos);
        }) 
    })

    return prom;
}


// –––––––––––––––––––––––––––––––---------------------------------------
// array[objetos] -> verificarReloj1() -> bool (versión con promesa)
// –––––––––––––––––––––––––––––––---------------------------------------

async function verificarReloj1(array) {

    let resultados = array.map((reloj, index) => {


        const valores = [reloj.h, reloj.m, reloj.s];
        const clock = reloj.clock;

        let iguales = true;

        
        if (valores[0] !== clock[0]) {
            iguales = false;
        }

        if (valores[1] !== clock[1]) {
            iguales = false;
        }

        if (valores[2] !== clock[2]) {
            iguales = false;
        }

        return iguales;
    });

    return resultados.every(r => r === true);
}



async function main() {
   
    let datos  = await leerFichero("datos.txt");
    

    let r = await verificarReloj1(datos);

    if(r != true){
        console.log("error")
    }
}

main();