// В математичних термінах послідовність чисел Фібоначчі Fn визначається як рекурентне співвідношення:
// F(n) = F(n-1) + F(n-2)
// із початковими значеннями:
// F(1) = 1, F(2) = 1
// або
// F(0) = 0, F(1) = 1
// ***************** F(2) = F(2-1) + F(2-2)   ===>  F(2) = F(1) + F(0)


function numbersOfFibonachi(num) {
    if (num < 2) {
        return num;
    } else {
        return numbersOfFibonachi(num - 1) + numbersOfFibonachi(num - 2);
    };
};

let num = 12;

for (let i = 0; i <= num; i++) {
    console.log('послідовність чисел Фібоначчі: ', i + '-е', ' >', numbersOfFibonachi(i));
};

console.log(num + '-е число Фібоначчі >', numbersOfFibonachi(num));
