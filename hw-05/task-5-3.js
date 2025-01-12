// найбільшим спільним дільником двох чисел є їх різниця, або якийсь дільник цієї різниці


function findGCD(a, b) {
    let gcd;
    if (a === 0) {
        gcd = b;
    } else {
        if (b === 0) {
            gcd = a;
        } else {
            while (a !== b) {
                if (a > b) {
                    a = a - b;
                } else {
                    b = b - a;
                }
            }
            gcd = a;
        }
    }
    return gcd;
}

let a = +prompt('Enter first number');
console.log(a);

let b = +prompt('Enter second number');
console.log(b);


const result = findGCD(a, b);
console.log("GCD > ", result);