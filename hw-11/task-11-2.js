function validate(sum, validator) {
    return function (...args) {
        for (let i = 0; i < args.length; i++) {
            if (((args[i]) > 0) && (typeof args[i] === 'number')) {
                console.log('Все круто.' + [i + 1] + '-й аргумент додатній');

            } else {
                throw new Error([i + 1] + '-й аргумент > CUSTOM ERROR MESSAGE');
            }
        }
        return sum(...args);
    }
}

function sum(a, b, c) {
    return a + b + c;
}

const decoratedSum = validate(sum);
const result = decoratedSum(1, 225.7, '8');
console.log('result >', result);
