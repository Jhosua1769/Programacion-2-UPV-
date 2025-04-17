// The .reduce() method is a higher-order function in JavaScript that allows you to iterate over an array and accumulate a single result based on a callback function.
// It processes each element of the array, carrying forward an accumulated value (also known as the accumulator).
//
// The callback function takes two main arguments: 
// 1. **accumulator** - The running total or accumulated value from previous iterations.
// 2. **currentValue** - The current element of the array being processed.
//
// The callback function returns the updated accumulator, which is then used in the next iteration.
// The final accumulated result is returned by the .reduce() method.



const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0
);
// console.log(sum); 


//longer version
const number = [1, 2, 3, 4, 5];
const sumReducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
};


const sums = number.reduce(sumReducer, 0);

// console.log(sums); 



const arrays = [[1, 2], [3, 4], [5, 6]];
const flattened = arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
// console.log(flattened); 



const numbers2 = [10, 20, 30, 40, 50];
const average = numbers2.reduce((accumulator, currentValue, index, array) => {
  accumulator += currentValue;
  if (index === array.length - 1) {
    return accumulator / array.length;
  } else {
    return accumulator;
  }
}, 0);
// console.log(average); // Output: 30


const arrays3 = [[1, 2], [3, 4], [5, 6]];
const result = arrays3.reduce((accumulator, currentValue) => {
  accumulator.count += currentValue.length;
  accumulator.values = accumulator.values.concat(currentValue);
  return accumulator;
}, { count: 0, values: [] });
// console.log(result); // Output: { count: 6, values: [1, 2, 3, 4, 5, 6] }

// In this example, the initialValue is 10, so during the first iteration of the callback function, accumulator will be 10, and currentValue will be 1. This allows you to start the reduction process from a specified initial value. If you omit the initialValue, the first element of the array becomes the initial value for the accumulator.

const array = [1, 2, 3, 4, 5];

const initialValue2 = 10;

const sum9 = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue2);

// console.log(sum9); 

const ar = [1, 2, 3, 4, 5];

const i = 10;

const s = array.reduce((accumulator, currentValue) => accumulator + currentValue, i);
// product
const product = ar.reduce((accumulator, currentValue) => accumulator * currentValue, i);
// merged

const concatenated = ar.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
// custom operation
const customOperation = ar.reduce((accumulator, currentValue, index) => {
  return accumulator + currentValue * index; 
}, i);


// console.log(concatenated)

// const ar = [1, 2, 3, 4, 5];

// const i = 10;

// const s = array.reduce((accumulator, currentValue) => accumulator + currentValue, i);

// console.log(s);

// Usando funcion en vez de metodo




