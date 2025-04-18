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



//main

    const esperado = [
        { h: 12, m: 32, s: 16, clock: [null, 30, 45] },
        { h: 12, m: 37, s: 25, clock: [null, 37, 25] }
    ];


    let p = leerFichero("datos.txt")

    p.then(function (datos) {
        
        for (let i = 0; i < datos.length; i++) {
           
            if(datos[i].h !=esperado[i].h ||
            datos[i].m != esperado[i].m ||
            datos[i].s != esperado[i].s ||
            datos[i].clock[1] != esperado[i].clock[1])
            {
                console.log("error")
            }


        }



    }).catch(function(error){
        console.log("error:", error)
    })