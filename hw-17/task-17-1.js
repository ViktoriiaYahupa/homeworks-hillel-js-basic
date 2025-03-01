function randomDelayPrint(message) {
    for (let i = 0; i < message.length; i++) {
        let delayTime = parseInt(Math.random() * 1000);

        setTimeout(function () {
            console.log('символ  > ', message[i], ' затримка  >', delayTime + 'мс');

        }, delayTime);
    }
};

let message = prompt('Введіть рядок, який хочети вивести з затримкою');

if (message !== null) {
    randomDelayPrint(message)
}