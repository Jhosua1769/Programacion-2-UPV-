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

var p1 = new Punto( 1, 0 )
var p2 = new Punto( 2, 1 )

console.log( p1.getX() )


var p3 = p1.diferencia(p2);

console.log(p3);