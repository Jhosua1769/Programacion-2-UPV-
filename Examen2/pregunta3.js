async function verificarIncrementoDirecto(array) {
    for (let i = 0; i < array.length - 1; i++) {
        const actual = array[i];
        const siguiente = array[i + 1];

        if (siguiente.h < actual.h) return false;
        if (siguiente.h === actual.h && siguiente.m < actual.m) return false;
        if (siguiente.h === actual.h && siguiente.m === actual.m && siguiente.s <= actual.s) return false;
    }

    return true;
}


// –––––––––––––––––––––––––––––––---------------------------------------
// array[objetos] -> verificarReloj2() -> bool (versión con promesa)
// –––––––––––––––––––––––––––––––---------------------------------------


async function verificarReloj2(array) {
    if (array.length < 2) return true;
    
    const tiempos = array.map(obj => {
        
        return obj.h * 3600 + obj.m * 60 + obj.s;
    
    });
    
   
    const resultado = tiempos.reduce((acc, _, i, arr) => {
        if (i < arr.length - 1 && arr[i + 1] <= arr[i]) {
            return false;
        }
        return acc;
    }, true);
    
    return resultado;
}


// –––––––––––––––––––––––––––––––------------------------------------------
// array[objetos] -> verificarIncrementoFor() -> bool (versión con promesa)
// –––––––––––––––––––––––––––––––------------------------------------------

async function verificarIncrementoFor(array) {
        
    for (let i = 0; i < array.length - 1; i++) {


        const current = array[i].h * 3600 + array[i].m * 60 + array[i].s;
        const next = array[i + 1].h * 3600 + array[i + 1].m * 60 + array[i + 1].s;
        
        if (next <= current) {
            return false;
        }
    }
    
    return true;
}

// Función main simplificada
async function main() {

    const esperado = [
        { h: 1, m: 0, s: 0 },
        { h: 1, m: 0, s: 1 },
        { h: 1, m: 1, s: 0 },
        { h: 2, m: 0, s: 0 }
    ];
    
    // Verificamos con el array esperado
    const resultadoMetodos = await verificarReloj2(esperado);
    const resultadoFor = await verificarIncrementoFor(esperado);
    
    console.log(resultadoMetodos ? " " : "error");
    console.log(resultadoFor ? " " : "error");
        

}

main();