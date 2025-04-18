// –––––––––––––––––––––––––––––––---------------------------------------
// array[objetos] -> mayorIntervalo() -> número (versión con métodos)
// –––––––––––––––––––––––––––––––---------------------------------------

// async function mayorIntervalo(array) {
    
//     const tiempos = array.map(obj => obj.h * 3600 + obj.m * 60 + obj.s);
    
//     const diferencias = tiempos.slice(1).map((tiempo, i) => tiempo - tiempos[i]);
    
//     return Math.max(...diferencias);

// }

// –––––––––––––––––––––––––––––––------------------------------------------
// array[objetos] -> mayorIntervaloFor() -> número (versión con for)
// –––––––––––––––––––––––––––––––------------------------------------------

async function mayorIntervaloFor(array) {

    
    let maxIntervalo = 0;
    
    for (let i = 0; i < array.length - 1; i++) {

        const current = array[i].h * 3600 + array[i].m * 60 + array[i].s;
        const next = array[i + 1].h * 3600 + array[i + 1].m * 60 + array[i + 1].s;
        const intervalo = next - current;
        
        if (intervalo > maxIntervalo) {
            maxIntervalo = intervalo;
        }
    }
    
    return maxIntervalo;
}

async function main() {
    const pruebas = [
        { h: 1, m: 0, s: 0 },
        { h: 1, m: 0, s: 5 },  
        { h: 1, m: 1, s: 0 },  
        { h: 2, m: 0, s: 0 }   
    ];
    
    // Probamos ambas versiones
    const resultadoMetodos = await mayorIntervalo(pruebas);
    const resultadoFor = await mayorIntervaloFor(pruebas);
    
    console.log("Mayor intervalo (métodos):", resultadoMetodos);
    console.log("Mayor intervalo (for):", resultadoFor);

}

main();