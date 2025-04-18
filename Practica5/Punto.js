// ––––––––––––––––-
// Punto.js
// ––––––––––––––––-
module.exports = class Punto {
    // - - - - - - - - - - - - - - -
    // - - - - - - - - - - - - - - -
    constructor( x, y ) {

        this.x = x
        this.y = y
    }

    // - - - - - - - - - - - - - - -
    // - - - - - - - - - - - - - - -
    getX () {

        return this.x
    }
    
    // - - - - - - - - - - - - - - -
    // - - - - - - - - - - - - - - -
    getY () {
        
        return this.y
    }


    // - - - - - - - - - - - - - -
    // Punto –>
    //
    //     distancia() <–
    //
    // R <–
    // - - - - - - - - - - - - - -

    distancia( otro ) {
        var dx = this.x - otro.x
        var dy = this.y - otro.y
        return Math.sqrt( (dx*dx) + (dy*dy) )
    }

        
    // - - - - - - - - - - - - - -
    // Punto –>
    //
    //     diferencia() <–
    //
    // Punto <–
    // - - - - - - - - - - - - - -
    // la diferencia de otros dos a y b, siendo nuevo = ((a.x − b.x),(a.y − b.y)).

    diferencia( otro ) {

        var dx = this.x - otro.x
        var dy = this.y - otro.y

        return new Punto(dx, dy)
    }



} // class