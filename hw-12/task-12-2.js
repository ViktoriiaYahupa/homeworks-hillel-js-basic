function counter(startValue, step) {
    let currentValue = startValue;

    return {
        increment: function () {
            currentValue += step;
            return currentValue;
        },

        decrement: function () {
            currentValue -= step;
            return currentValue;
        },

        reset: function () {
            currentValue = startValue
            return currentValue;
        }
    }

};

const myCounter = counter(101, 7);

console.log('increment >', myCounter.increment());
console.log('increment >', myCounter.increment());
console.log('decrement >', myCounter.decrement());
console.log('increment >', myCounter.increment());
console.log('reset > ', myCounter.reset());


