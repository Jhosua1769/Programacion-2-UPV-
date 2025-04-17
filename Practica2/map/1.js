
// and .map you use when you modify or change the elements of an array 

const mixedArray = ['pepe','perro', 'gato', '2'];

const change = (element) => {
    
    if(typeof element === 'string'){
        return element.length;
    }
} 

const print = mixedArray.map(change);
console.log(print);



const arr = [10, 20, 30];
const result = arr.map((value, index) => {
    return value + index;  // Adding the value with its index
});
console.log(result);  // Output: [10, 21, 32]



