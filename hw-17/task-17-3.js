function intervalRace(functions, t) {
    let results = [];

    let currentTime = 0;

    for (let i = 0; i < functions.length; i++) {
        setTimeout(function () {
            let result = functions[i]();
            results.push(result);

            if (i === functions.length - 1) {
                console.log(results);

            }
        }, currentTime);

        currentTime += t;
    }
};

let functions = [
    function () {
        let a = 1;
        let b = 3;
        return (a + b);
    },
    function () {
        let a = 110;
        let b = 4;
        return (a - b);
    },
    function () {
        let a = 12;
        let b = 51;
        return (a * b);
    }
];

intervalRace(functions, 1500);