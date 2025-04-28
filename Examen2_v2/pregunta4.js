// –––––––––––––––––––––––––––––––-----------------------------------------------------------------
// [{ h: N, m: N, s: N, clock: [N] }] 
// --> 
// verificarReloj2() 
// --> 
// N
// –––––––––––––––––––––––––––––––-----------------------------------------------------------------


function verificarReloj1(datos){

    return datos.reduce((accu, element, i) => {

        if(i < datos.length-1) {
            
            let clock1 = element;
            let clock2 = datos[i+1];

            let m1 = (clock1.h * 3600) + (clock1.m * 60) + (clock1.s);
            let m2 = (clock2.h * 3600) + (clock2.m * 60) + (clock2.s);

            let int = m2-m1;

            if(int > accu){

                accu = int;
            }
            
        }

        return accu;
    }, 0)

}

//main

let datos = [
    { h: 12, m: 37, s: 16, clock: [12, 32, 16] },
    { h: 12, m: 37, s: 17, clock: [12, 32, 16] },
    { h: 12, m: 37, s: 18, clock: [12, 32, 16] },
    { h: 12, m: 37, s: 20, clock: [12, 32, 16] }
];

if(verificarReloj1(datos) != 2){
    console.log("error");
}
