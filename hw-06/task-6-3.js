function camelCase(str, separator) {
    str = str.split(" ");
    console.log('splitted string > ', str);

    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }

    return ((str.join('')).toLowerCase().substring(0, 1)) +
        (str.join('').slice(1));
};

let str = prompt('Внесіть дані');
console.log('original string > ', str);

console.log('camelCase string > ', camelCase(str));
