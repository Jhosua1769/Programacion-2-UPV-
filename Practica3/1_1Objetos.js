var unCoche = {
    color : "rojo",
    precio : 1234.56
    }

  
console.log( unCoche )
console.log( unCoche.color )
console.log( unCoche.precio )


//funciones

var obj = {
    valor : 1234,
    metodo : function( a ) {
    return this.valor * a
    },
    incrementar : function() {
    this.valor++
    }
} // obj


obj.incrementar()
var r = obj.metodo( 2 )
console.log( r )


const paresPuntos = [{x1:1, x2: 2},{x1:2, x2:3}];

for(x of paresPuntos){

    console.log(x.x1);
    console.log(x.x2);
} 


//goes through their indexes or propeties in objects
for(const key in paresPuntos){

    console.log(key);

}


console.log(paresPuntos[0].x2);



const Punto = {x:1, y:2};

console.log(Punto.x);