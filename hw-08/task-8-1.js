const words = ["apple", "banaNA", "kiWi", "ORANGE"];
console.log('origin array >', words);

function capitalizeString(words) {

    const capitalizedWords = [];

    for (let i = 0; i < words.length; i++) {

        let word = words[i];
        let firstLetter = word[0].toUpperCase();
        let otherLetters = word.slice(1).toLowerCase();

        const capitalizedWord = firstLetter + otherLetters;
        capitalizedWords.push(capitalizedWord)

    }
    return capitalizedWords;
};

console.log('new array >', capitalizeString(words));

