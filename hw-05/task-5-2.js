function isPalindrome(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    if (reversedString == str) {
        return true;
    } else {
        return false;
    }
}
let str = prompt('Внесіть дані для перевірки');
console.log(str);

const result = isPalindrome(str);
console.log("is palindrom > ", result);