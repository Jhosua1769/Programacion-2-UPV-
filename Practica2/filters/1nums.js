//The .filter() method is a higher-order function in JavaScript that allows you to create a new array containing only elements that meet certain criteria. It iterates over each element of the original array, passing each element through a callback function and that
// 
//  *****  callback function return true or false  ****
// 
// always so that the filter return only the element when the callback its true. 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterEvenNumbers = (number) => {
    return number % 2 === 0; 
}

const evenNumbers = numbers.filter(filterEvenNumbers);
console.log(evenNumbers);


const mixedArray = ['apple', 'b', 'banana', 'c', 'carrot', 'd', 'grape', 'e'];
const filterWords = (item) => {
    return typeof item === 'string' && item.length > 1; 
};


const wordsOnly = mixedArray.filter(filterWords);
console.log(wordsOnly);