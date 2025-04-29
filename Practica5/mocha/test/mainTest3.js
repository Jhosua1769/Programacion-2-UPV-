const Punto = require('../Punto.js')
var assert = require ('assert')

// ––––––––––––––
// main ()
// ––––––––––––––
// descripción los test que hacemos aquí
describe( "Prueba Diferencia()",
    
function () {


    let p1 = new Punto(1, 0);
    let p2 = new Punto(2, 0);
    let p3;
    let diferencia;


    // ––––––––––––––––––––-
    // it(): test concreto
    it( "la diferencia de p1 a p2 es ( -1, 0)", function(
        hecho ){

        p3 = new Punto(-1, 0);
        diferencia = p1.diferencia(p2)
        
        assert.equal( diferencia.getX(), p3.getX() )
        assert.equal( diferencia.getY(), p3.getY() )

        hecho()
    }) // it
    
    // ––––––––––––––––––––-
    // it(): test concreto
    it( "la diferencia de p2 a p1 es", function(
        hecho ){

        p3 = new Punto(1, 0);
        diferencia = p2.diferencia(p3);

        assert.equal( diferencia.getX(), p3.getX() )
        assert.equal( diferencia.getY(), p3.getY() )
        hecho()
    }) // it
    

    // ––––––––––––––––––––-
    // it(): test concreto
    it( "la diferencia de p1 a p1 es 0", function(
        hecho ){

        p3 = new Punto(0, 0);
        diferencia = p1.diferencia(p1);

        assert.equal( diferencia.getX(), p3.getX() )
        assert.equal( diferencia.getY(), p3.getY() )

        hecho()
    }) // it
    
} ) // describe