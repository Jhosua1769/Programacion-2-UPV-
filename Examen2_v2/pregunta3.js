// –––––––––––––––––––––––––––––––-----------------------------------------------------------------
// [{ h: N, m: N, s: N, clock: [N] }] 
// --> 
// verificarReloj2() 
// --> 
// V o F
// –––––––––––––––––––––––––––––––-----------------------------------------------------------------


function verificarReloj1(datos){

    return datos.reduce((accu, element, i) => {

        if(i < datos.length-1){
            
            let clock1 = element;
            let clock2 = datos[i+1];

            console.log(clock1)
            console.log(clock2)

            if(clock1.h > clock2.h)  accu = 0;

            if(clock1.m > clock2.m && clock1.h === clock2.h) accu = 0;

            if(clock1.s >= clock2.s && clock1.h === clock2.h && clock1.m === clock2.m) accu = 0;

        }

        return accu;
        
    }, 1)

}

//main

let datos = [
    { h: 12, m: 32, s: 16, clock: [12, 32, 16] },
    { h: 12, m: 37, s: 25, clock: [12, 32, 16] },
    { h: 12, m: 37, s: 25, clock: [12, 32, 16] },
    { h: 12, m: 37, s: 25, clock: [12, 32, 16] }
];

if(verificarReloj1(datos) != 0){
    console.log("error");
}
