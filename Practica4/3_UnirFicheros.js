// –––––––––––––––––––––––––––––––-------------------------------
// texto -> leerFichero() -> texto | error (versión con promesa)
// –––––––––––––––––––––––––––––––-------------------------------

function leerFichero(texto){

    let prom = new Promise ( function (resolver, rechazar){

        var fs = require( "fs" )

        fs.readFile(texto, "utf8", function( err, contenido ) {

            if( err ) {
                rechazar(err);
            }

            resolver(contenido);
        }) 
    })

    return prom;
}


// –––––––––––––––––––––––––––––––-------------------------------
// contenido: texto, nombre: texto -> leerFichero() -> 0 | error (versión con promesa)
// –––––––––––––––––––––––––––––––-------------------------------

function escribirFichero(nombre, contenido){

    let promise = new Promise((resolver, rechazar) => {

        var fs = require( "fs" )
            fs.writeFile( nombre, contenido, function( err ) {
            if( err ) {
                rechazar(err);
            }

            resolver(null);
        }) 

    })

    return promise;
}


async function UnirFicheros (fichero1, fichero2, destino){

    let contenido1 = await leerFichero(fichero1)
    let contenido2 = await leerFichero(fichero2)

    let contenido3 = contenido1+contenido2;

    let exito = await escribirFichero(destino, contenido3)

    return exito;

}

async function main(){


    await escribirFichero("fichero1", "hola")
    await escribirFichero("fichero2", "como")

    let exito = await UnirFicheros("fichero1", "fichero2", "fichero3");

    if(exito != null){
        console.log("error");
    }
}

main();