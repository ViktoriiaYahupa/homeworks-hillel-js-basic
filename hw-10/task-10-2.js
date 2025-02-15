let cache = new Map();

function sqr(x, cache) {
    if (cache.has(x)) {
        console.log('Знаходимо в кеші вже доданий раніше квадрат числа ' + x);
        return cache.get(x);
    }

    console.log('Обчислюємо квадрат числа ' + x);
    const result = x * x;

    cache.set(x, result)
    return result;
}

console.log(sqr(2, cache));
console.log(sqr(2, cache));
console.log(sqr(3, cache));
console.log(sqr(4, cache));
console.log(sqr(5, cache));
console.log(sqr(4, cache));
console.log(sqr(3, cache));
console.log(sqr(3, cache));
