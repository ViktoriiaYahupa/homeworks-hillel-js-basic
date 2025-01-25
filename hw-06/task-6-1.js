function doubleLetter(str) {
    let result = '';

    for (let i = 0; i <= (str.length - 1); i++) {
        let letter = '';
        //console.log(str[i]);

        letter = letter + str[i];
        result += letter.repeat(2);
    }
    return result;
}
let str = prompt('Внесіть дані у строку');
console.log('entered string > ', str);
const result = doubleLetter(str);
console.log('doubled letters string >  ', result);
