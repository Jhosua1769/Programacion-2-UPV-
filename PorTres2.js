// ------------------------------------------------
// Autor: Josue Bellota
// Fecha: 02/07/2025
// ------------------------------------------------

// ------------------------------------------------
// 
// <R>
// ->
// porTres()
// -> 
// <R>
// ------------------------------------------------
// ------------------------------------------------



function porTres(callback, n){

    r = n*3;

    console.log("waiting 3 sec")

    callback();
    
}

function wait() {
    setTimeout(function() {
       
    }, 3000);
}


//main

let r;

setTimeout(function() {

    porTres(wait, 3);

    if (r !=9) {
        console.log("error");
    }

    console.log("ok")

}, 3000);


