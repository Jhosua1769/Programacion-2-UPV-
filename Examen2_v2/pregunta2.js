// –––––––––––––––––––––––––––––––-----------------------------------------------------------------
// [{ h: N, m: N, s: N, clock: [N] }] 
// --> 
// verificarReloj1() 
// --> 
// V o F
// –––––––––––––––––––––––––––––––-----------------------------------------------------------------


function verificarReloj1(datos){

    return datos.reduce((accu, element) => {

        if(element.h != element.clock[0] || element.m != element.clock[1] || element.s != element.clock[2]) accu = 0;

        return accu;

    }, 1)

}

//main

let datos = [
    { h: 12, m: 32, s: 16, clock: [12, 32, 16] },
    { h: 12, m: 37, s: 25, clock: [12, 37, 25] }
];

if(verificarReloj1(datos) != 1){
    console.log("error");
}
