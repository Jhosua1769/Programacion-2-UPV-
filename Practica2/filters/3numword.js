

const mixedArray = ['apple', 1, 'banana', 2, 'carrot', 3, 'grape', 4];

const filterWords = (item) => {
    return typeof item === 'string'; 
};


const filterNumbers = (item) => {
    return typeof item === 'number'; 
};


const wordsOnly = mixedArray.filter(filterWords);
const numbersOnly = mixedArray.filter(filterNumbers);

console.log(wordsOnly);
console.log(numbersOnly);
