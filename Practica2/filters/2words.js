
const words = ['apple', 'banana', 'pear', 'grape', 'kiwi', 'orange'];


const filterShortWords = (word) => {
    return word.length <= 4; 
};
const shortWords = words.filter(filterShortWords);

console.log(shortWords);



