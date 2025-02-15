function logArguments(fn) {

    return function (...args) {
        console.log('передані аргументи >', args);

        return fn.apply(this, args);
    }
}


function sum(a, b, c) {
    return a + b + c;
}

const decoratedSum = logArguments(sum);

const result = decoratedSum(3, 7, 17);
console.log('result > ', result);
