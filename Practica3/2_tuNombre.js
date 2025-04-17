// crea un fichero de texto

var fs = require( "fs" )
fs.writeFile( "nombre.txt", "josue", function( err ) {
    if( err ) {
        console.log( "hubo un problema al escribir en hola.txt" )
    }
}) 

// leer un fichero de texto

var fs = require( "fs" )
fs.readFile( "nombre.txt", "utf8", function( err, contenido ) {
    if( err ) {
        console.log( "hubo un problema al leer de hola.txt" )
        return
    }

    console.log( contenido )
})