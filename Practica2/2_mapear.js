// ------------------------------------------------
// Autor: Josue Bellota
// Fecha: 02/13/2025
// ------------------------------------------------

// ------------------------------------------------
// ------------------------------------------------
// lista: <R>
// cambio(<R1>:<R2> 
//
// ->
// mapear()
// -> 
//
// lista2: <R>
// ------------------------------------------------
// ------------------------------------------------

function mapear(lista, cambio){

    for (let i = 0; i < lista.length; i++) {
        
        lista[i] = cambio(lista[i]);
        
    }

    return lista;
}


function cambio(i){
    return i = i *2;
}

//main 


let lista = [1,2,3];
let esperado = [2,3,4];

lista = mapear(lista);

for (let i = 0; i < lista.length; i++) {
    
    if(esperado[i] != lista[i]){
        console.log("error");
    }
   
}


