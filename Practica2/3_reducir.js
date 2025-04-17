// ------------------------------------------------
// Autor: Josue Bellota
// Fecha: 02/13/2025
// ------------------------------------------------


// ------------------------------------------------
// ------------------------------------------------
// lista: <R>
//
// ->
// reducir()
// -> 
//
// lista2: <R>
// ------------------------------------------------
// ------------------------------------------------



function reducir2(lista){
    
    return lista.reduce((acumulador, vActual) => {
     
        if(condition(vActual)){
            acumulador.push(vActual)
        }

        return acumulador
    }, []);

}



function reducir2(lista){
    
    let producto = lista.reduce((acumulador, vActual) => {
        acumulador = acumulador * vActual;

        return acumulador;
    }, 1);


    return producto;
}
// ------------------------------------------------
// ------------------------------------------------
// lista: <R>
// reducccion(<R1>, <R2> -> <R3>) 
//
// ->
// reducir()
// -> 
//
// lista2: <R>
// ------------------------------------------------
// ------------------------------------------------

function reducir(lista, acumulador, reduccion){
    
    for (let i = 0; i < lista.length; i++) {
        
        acumulador = reduccion(acumulador, lista[i]);
        
    }

    return acumulador;
}

// ------------------------------------------------
// ------------------------------------------------
// acumulador: R 
// valorActual: R 
//
// ->
// reduccion()
// -> 
//
// acumulador: R 
// ------------------------------------------------
// ------------------------------------------------

function reducccion(acumulador, valorActual){
         
        acumulador = acumulador * valorActual;
           

    return acumulador;
}

//main

let lista = [1,2,3,4,5];

let res = reducir2(lista);

if (res != 120){
    console.log("error");
}


