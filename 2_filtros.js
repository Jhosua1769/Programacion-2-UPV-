// ------------------------------------------------
// 
// <inicio: R>
// <fin: R>
//
// ->
// ()sumar
// -> 

// <total: R>
// ------------------------------------------------
// ------------------------------------------------

function sumar(inicio, fin, condition) {

    var total = 0;
    for (let i = inicio; i <=fin; i++) {
        
        if (condition(i)) {
            
            total = total + i; 
        }
        
    }

    return total;
}

//main()

var s = sumar(1, 10, function(e){

    //divisible entre 3 entre el 1 y el 10
    if (e % 3 == 0) {
        
        return true;
    }
    return false;
    
});

console.log(s);

// ¿Qué hace la función sumar()?
// suma los numeros que sean divisibles entre 3

// ¿Es asíncrona la función sumar()
// tengo entendido que debido a que no 
