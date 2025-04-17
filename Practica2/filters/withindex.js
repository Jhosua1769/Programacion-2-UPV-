const arr = [5, 10, 15, 20, 25];
const result = arr.filter((value, index) => {
    return value > 10 && index % 2 === 0;  // Filter values greater than 10 and at even indices
});
console.log(result);  // Output: [15, 25]
