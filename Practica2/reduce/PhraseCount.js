

function count(phrase) {
    
    let count = 0;
    const words = phrase.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        for (let j = 0; j < word.length; j++) {

            if (word[j].match(/[a-zA-Z]/)) {
                count++;
            }
        }
    }
    return count;
}

// Example usage
var frase = ["Es", "ahora", "tu", "oportunidad", "para", "aprovechar", "este", "día"];
const letterCount = count(phrase);
console.log("The phrase has " + letterCount + " letters.");
