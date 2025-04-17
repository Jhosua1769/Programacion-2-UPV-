// ------------------------------------------------
// Autor: Josue Bellota
// Fecha: 02/19/2025
// ------------------------------------------------


// ------------------------------------------------
// ------------------------------------------------
// lista: <R>
//
// ->
// caracteres()
// -> 
//
// lista: <R>
// ---------------------------------------------------------------------------
// descripción: cuenta los caracteres de cada palabra en una lista de palabras
// ----------------------------------------------------------------------------

function caracteres(palabras){

    let conteo = 0;

    palabras.map((element) => {

        palabra = element.split("");

        conteo = conteo + palabra.reduce((accu, element, index) => {

            accu = accu + 1;

            return accu;

        }, 0);
    })

    return conteo;
}


//main

let letras = caracteres(["hola", "como"]);

if(letras != 8){
    console.log("error");
}


