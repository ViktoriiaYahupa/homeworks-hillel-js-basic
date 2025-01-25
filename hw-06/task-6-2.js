//*************з циклом*******************************

function padString(str, length, symbol, toLeft) {
    if (str.length >= length) {
        return str;

    } else {
        let diff = length - str.length; //difference
        let symbols = '';

        for (let i = 0; i < diff; i++) {
            symbols = symbols + symbol;
        }

        if (toLeft) {
            return symbols + str;
        } else {
            return str + symbols;
        }
    }
};

let str = prompt('enter a string :');
console.log("початковий рядок >", str);

let length = prompt('enter target length :');
console.log("очікувана довжина рядка >", length);

let symbol = prompt('enter type of symbol to pad the string :');
console.log("символ для доповнення рядка >", symbol);

const result = padString(str, length, symbol, toLeft = false);
console.log('result >', result);



// *****************без циклу**************************************************

// function padString(str, length, symbol, toLeft) {
//     if (str.length >= length) {
//         return str;

//     } else {
//         let diff = length - str.length; //difference

//         if (toLeft) {
//             return symbol.repeat(diff) + str;
//         } else {
//             return str + symbol.repeat(diff);
//         }
//     }
// };

// let str = prompt('enter a string :');
// console.log("початковий рядок >", str);

// let length = prompt('enter target length :');
// console.log("очікувана довжина рядка >", length);

// let symbol = prompt('enter type of symbol to pad the string :');
// console.log("символ для доповнення рядка >", symbol);

// const result = padString(str, length, symbol, toLeft = false);
// console.log('result >', result);

