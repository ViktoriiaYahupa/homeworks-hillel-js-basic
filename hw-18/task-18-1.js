function sumArrayPromise(arr) {
    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }

            resolve(sum);
        }, 3000);
    });
};

sumArrayPromise([1, 2, 3, 4, 5])
    .then(function (result) {
        console.log('sum >', result);
    })

