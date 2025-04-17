// const number = [1, 2, 3, 4, 5];
// const sumReducer = (accumulator, currentValue) => {
//     return accumulator + currentValue;
// };
// const sums = number.reduce(sumReducer, 1);


// console.log(sums);


const objetos = [{x: 1}, {x: 2}, {x: 3}, {x: 4}, {x: 5}];

const sumReducer = (accumulator, currentValue) => {

    console.log('accu: ' + accumulator);
    console.log('currentValue: ' + currentValue.x);

    return accumulator + currentValue.x;

};

const sums = objetos.reduce(sumReducer, 10);

console.log('resultado', sums);
