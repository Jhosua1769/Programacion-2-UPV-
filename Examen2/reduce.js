
async function mayorIntervaloReduce(array) {
  
    
    return aray.slice(1).reduce((maxIntervalo, currentObj, index) => {
        const current = currentObj.h * 3600 + currentObj.m * 60 + currentObj.s;
        const previous = array[index].h * 3600 + array[index].m * 60 + array[index].s;
        const intervalo = current - previous;
        return Math.max(maxIntervalo, intervalo);
    }, 0);
}