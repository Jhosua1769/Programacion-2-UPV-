// [{ km: R, m: R, cm: R}]  
// --> 
// mayorDiferencia()  
// --> 
// [{ dif: R, t1: N, t2: N}] 


function mayorDiferencia(distancias) {

  const kmTramos = distancias.map((d) =>{

    d = d.km + d.m / 1000 + d.cm / 100000;
    return d;
    
  });



  let maxDif = 0;
  let obj = {dif: maxDif, t1: 0, t2: 1 };

  for (let i = 0; i < kmTramos.length - 1; i++) {

    const dif = Math.abs(kmTramos[i + 1] - kmTramos[i]);

    if (dif > maxDif) {
        
        maxDif = dif;
        obj.dif = maxDif;
        obj.t1 = i;
        obj.t2 = i+1;
    }
  }

  return obj;
}


const recorrido = [
  { km: 2, m: 300, cm: 50 },   // 2.3005 km
  { km: 1, m: 500, cm: 0 },    // 1.5 km
  { km: 0, m: 750, cm: 25 },   // 0.75025 km
  { km: 3, m: 0, cm: 0 }       // 3 km
];

console.log(mayorDiferencia(recorrido));
// Resultado esperado: [{ dif: 2.24975, t1: 2, t2: 3 }]
