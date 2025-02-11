// ambito global bloque y funcion

var a = 2;
var b = 4;
console.log(a);

for (let x = 0; x < 3; x++) {
    console.log(a);
}
//ambito de bloque
function x() {
    console.log(a);
    var a = 3;
    console.log(a);
    console.log(globalThis.a);
    console.log(window.a);

    b = 5;
    console.log(b);
    console.log(window.b);
}

x();
console.log(a);
console.log(b);

//for in for of