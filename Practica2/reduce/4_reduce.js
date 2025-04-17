function fr(accu, cvalue) {
    console.log(`Evaluando cvalue: ${JSON.stringify(cvalue)}, accu: ${accu}`);

    if (cvalue["t"] > accu) {

        // if (accu === null) {
        //     console.log(`cvalue: ${cvalue["t"]}`);
        //     return cvalue["t"];
        // }
        
        if (cvalue["t"] < accu) {
            // console.log('');
            // console.log(`cvalue["t"]: ${cvalue["t"]} es menor que accu: ${accu}, retornando cvalue["t"]`);
            // console.log('');
            return cvalue["t"];
        } else {
            // console.log('');
            // console.log(`cvalue["t"]: ${cvalue["t"]} no es menor que accu: ${accu}, retornando accu`);
            // console.log('');
            return accu;
        }
    } else {
        // console.log(`cvalue["t"]: ${cvalue["t"]} no es mayor que accu: ${accu}, retornando accu`);
        return accu;
    }
}

const data = [
    {"punto": {"x": 2.0, "y": 5.0}, "t": 5},
    {"punto": {"x": 1.0, "y": 9.0}, "t": 2},
    {"punto": {"x": 2.5, "y": 2.0}, "t": 0},
    {"punto": {"x": 9.0, "y": 5.0}, "t": 1},
    {"punto": {"x": 2.0, "y": 5.0}, "t": 6},
    {"punto": {"x": 2.0, "y": 5.0}, "t": 13},
    {"punto": {"x": 2.0, "y": 5.0}, "t": 12}
];

// Valor inicial es 2
const startingValue = 12;

// Usamos reduce para encontrar el siguiente valor más alto de t después de startingValue
const result = filteredData.reduce((accu, cvalue) => fr(accu, cvalue), null);

console.log("Resultado final:", result); // La salida debería ser el siguiente valor de t mayor que 2, que es 5
