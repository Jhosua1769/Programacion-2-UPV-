// –––––––––––––––––––––––––––––––-------------------------------
// contenido: texto, nombre:texto5 -> leerFichero() -> 0 | error (versión con promesa)
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


//main

let p = escribirFichero("fichero1", "hola")

p.then( function (a){

    if(a === null){
        console.log("todo correcto")
    }
}).catch( function (a){

    console.log("error", a)
})