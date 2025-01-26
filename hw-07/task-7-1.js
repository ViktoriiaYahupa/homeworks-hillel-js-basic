const originalArray = [1, 2, 3, 4, 5];
console.log('original array >', originalArray);

function reverseArray(originalArray) {

    let reversedArray = [];

    for (let i = originalArray.length - 1; i >= 0; i--) {
        reversedArray += originalArray[i];
        console.log(originalArray[i]);
    }
    return reversedArray.split('');
}
let result = reverseArray(originalArray);
console.log('reversed array >', result);




//****************************************************************************/

// let userInput = prompt("Введіть перелік даних, розділяючи їх комами :");

// const originalArray = userInput.split(',');
// console.log('original array > ', originalArray);

// const reversedArray = originalArray.reverse();
// console.log('reversed array > ', reversedArray);
