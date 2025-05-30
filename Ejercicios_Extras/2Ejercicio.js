function distanciaKm(distancias) {
    return distancias
    .map( (e) =>{

        e = e.km + e.m / 1000 + e.cm / 100000;
        return e;
    }) 
    .reduce((accu, element) =>{
        
        accu = accu  + element;

        return accu;

    }, 0);  
}

const recorrido = [
  { km: 2, m: 300, cm: 50 },
  { km: 1, m: 500, cm: 0 },
  { km: 0, m: 750, cm: 25 }
];

console.log(distanciaKm(recorrido));  // Km: 4.55025
