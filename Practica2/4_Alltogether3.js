// ------------------------------------------------
// Autor: Josue Bellota
// Fecha: 02/20/2025
// ------------------------------------------------



// ------------------------------------------------
// palabras: [String]
//
// ->
// function() or method()
// -> 
//
// conteo: <int>
// ------------------------------------------------------------------
// descripción: devuelve la cantidad de palabras con mas de 5 letras
// -------------------------------------------------------------------




function cinco_letras(palabras){

    let conteo = 0;

    conteo = conteo + palabras.reduce((accu, cValue, i)=> {

        let letra = palabras[i].split("");

        if(letra.length >= 5){

            accu =  accu + 1;
        }

        return accu;
    }, 0);

    return conteo;
}

//main

let palabras = cinco_letras(["hola", "comos"]);

if(palabras != 1){
    console.log("error");
}