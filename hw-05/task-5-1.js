function reverseString(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}
let str = prompt('Внесіть дані / Напишіть повідомлення');
console.log(str);

const result = reverseString(str);
console.log("reversed string > ", result);