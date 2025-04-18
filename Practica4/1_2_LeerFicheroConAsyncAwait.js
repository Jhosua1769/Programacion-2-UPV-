// –––––––––––––––––––––––––––––––-------------------------------
// texto -> leerFichero() -> texto | error (versión con async await)
// –––––––––––––––––––––––––––––––-------------------------------

async function leerFichero(texto){

    var fs = require( "fs" )

    fs.readFile(texto, "utf8", function( err, contenido ) {

        if( err ) {

            return;

        }

        return contenido;

    }) 

}




