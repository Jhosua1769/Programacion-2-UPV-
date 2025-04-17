// –––––––––––––––––––––––––
// medirTemperatura() -> JSON{ hora: N, temperatura: R }
//
// Realiza una medida de temperatura y
// devuelve el valor junto con la hora
// –––––––––––––––––––––––––
function medirTemperatura() {
    //
    // completar: devolver un objeto con dos campos:
    // hora, con la hora actual; y
    // temperatura, un valor aleatorio entre 15 y 20
    //

    let ahora = new Date();
    let h = ahora.getHours().toString(); 
    let m = ahora.getMinutes().toString();
    let horaFormato = h + m;
    let hora = Number(horaFormato); 


    let min = 15; 
    let max = 20; 
    let temperatura = Math.floor(Math.random() * (max - min + 1)) + min;

    return ({
        hora: hora,
        temperatura: temperatura
    });

} // ()

// ––––––––––––––––––––––––––––-
// cuantas:N -> tomarMediciones() -> Lista<JSON{hora:N, temperatura:R}>
//
// Toma la cantidad de mediciones indicadas llamando
// cada segundo a medirTemperatura()
// ––––––––––––––––––––––––––––-

function tomarMediciones( cuantas, mediciones, callback ) {

    if( cuantas == 0 ) {
        callback( mediciones )

        return;

    }

    mediciones.push( medirTemperatura() )

    setTimeout( function() {

        tomarMediciones( cuantas-1, mediciones, callback )

    }, 1000 )
} // ()

function convertirJSON(mediciones, generarFichero) {
   
    var texto = JSON.stringify(mediciones);
    generarFichero(texto);
    

}


function generarFichero(texto) {
   
   var fs = require( "fs" )
   fs.writeFile( "datos.txt", texto, function( err ) {
       if( err ) {
           console.log( "error al generar fichero" )
       }
   }); 

   leerFichero();
    
}

function leerFichero() {
   
    var fs = require( "fs" )
    fs.readFile( "datos.txt", "utf8", function( err, contenido ) {
        
        if( err ) {
            console.log( "error al leer el fichero" )
            return;
        }

        console.log( contenido )
    });
     
 }

// –––––––––––––––––––––––––
// main()
// –––––––––––––––––––––––––




//
// completar: llamar a tomarMediciones() para que nos devuelva
// 7 medidas de temperatura y guardar lo que nos devuelve
// en el ficheor "datos.txt" (habiendo convertido los datos
// a JSON previamente)
//


var medidas = []

tomarMediciones(7, medidas, function(mediciones){

    convertirJSON(mediciones, generarFichero);
});
