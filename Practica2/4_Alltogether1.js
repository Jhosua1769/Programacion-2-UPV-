// ------------------------------------------------
// Autor: Josue Bellota
// Fecha: 02/19/2025
// ------------------------------------------------


// ------------------------------------------------
// ------------------------------------------------
// lista: <R>
//
// ->
// Alrevez_v1()
// -> 
//
// lista: <R>
// ------------------------------------------------
// ------------------------------------------------
function Alrevez_v1(lista) {
    for (let i = 0; i < lista.length; i++) {

        let palabra = lista[i].split(""); 
        let p = palabra.length - 1;

        for (let j = 0; j < palabra.length / 2; j++) { 

            let temp = palabra[j];
            palabra[j] = palabra[p - j];
            palabra[p - j] = temp;
        }

        lista[i] = palabra.join(""); 
    }

    return lista;
}
// ------------------------------------------------
// ------------------------------------------------
// lista: <R>
// reducir(null, [] -> null) 
//
// ->
// Alrevez_v2()
// -> 
//
// lista: <R>
// ------------------------------------------------
// ------------------------------------------------

function Alrevez_v2(lista) {

    for (let i = 0; i < lista.length; i++) {

        let palabra = lista[i].split(""); 
        let p = palabra.length - 1;

        let revertido = palabra.reduce(function(accu, currentValue, index){


            if(index >= palabra.length/2){
                return palabra;
            }

            
            let temp = palabra[index];
            palabra[index] = palabra[p - index];
            palabra[p - index] = temp;

            console.log(palabra);


       
        }, []); 


        lista[i] = revertido.join(""); 
    }

    return lista;
}



function Alrevez_v3(lista){

    

    lista.map(function(palabra, i){

        let ultimo = palabra.length-1;
        
        palabra = palabra.split("");

        for (let j = 0; j < palabra.length / 2; j++) {
            let temp = palabra[j];
            palabra[j] = palabra[ultimo - j];
            palabra[ultimo - j] = temp;
        }
      
        lista[i] = palabra.join("")

    })

    return lista;
}


function Alrevez_v444(lista) {
    // Usamos map para obtener la longitud de cada palabra y reduce para sumarlas
    return lista
        .map(function (palabra) {
            return palabra.length; // Obtenemos la cantidad de letras de cada palabra
        })
        .reduce(function (total, cantidad) {
            return total + cantidad; // Sumamos todas las cantidades
        }, 0);
}


let lista = Alrevez_v444(["hola", "como"]);

let esp = ["aloh", "omoc"];

for (let i = 0; i < lista.length; i++) {
   


        console.log("error");

    
}
