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

let p = leerFichero("fichero.txt")

p.then(function (contenido) {
    console.log(contenido);
}).catch(function(error){
    console.log("error:", error)
})