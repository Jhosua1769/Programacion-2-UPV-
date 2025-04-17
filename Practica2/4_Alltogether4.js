// ------------------------------------------------
// Autor: Josue Bellota
// Fecha: 02/20/2025
// ------------------------------------------------



// ------------------------------------------------
// ------------------------------------------------
// ps: [String]
//
// ->
// comb()
// -> 
//
// comb: String
// ------------------------------------------------
// descripción: devuelve una palabra resutante de 
// palabras mas pequeñas
// ------------------------------------------------


function comb(ps) {
    let comb = "";
    ps.map((p, i) =>{

        let palabra = p.split("");

        if(palabra.length <= 3){

            ps[i] = palabra.join("");
            

            comb = comb + ps[i];
        }
    });

    return comb;
}

//main

let palabras = ["es", "com", "pepa"];

let res = comb(palabras);

if(res != "escom"){
    console.log("error");
}




