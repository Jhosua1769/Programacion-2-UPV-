// –––––––––––––––––––––––––––––––-
// R -> porDos() -> R (versión con callback)
// –––––––––––––––––––––––––––––––-
function porDos( n, callback ) {

    setTimeout( function () {

        callback( n*2 )

    }, 1000 )

    } // ()
    // –––––––––––––––––––––––––––––––-
    // main()
    // –––––––––––––––––––––––––––––––-
    // Algoritmo:
    // a <- calcular el doble 3
    // b <- calcular el doble 4
    // c <- calcular el doble 5
    // Sumar a+b+c 24
    porDos( 3, function( a ) {
        porDos( 4, function( b ) {
            porDos( 5, function( c ) {
                console.log( a+b+c )
            })
        })
    })

