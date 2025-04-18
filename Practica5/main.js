// ––––––––––––––-
// main.js
// ––––––––––––––-


// ––––––––––––––-
// requires
// ––––––––––––––-
var bib = require( "./bib.js" )
const Punto = require( "./Punto.js" )


// ––––––––––––––-
// main ()
// ––––––––––––––- 
var a = bib.porDos( 8 )
console.log( a )

var p1 = new Punto( 3, 4 )
console.log( p1.getX() )