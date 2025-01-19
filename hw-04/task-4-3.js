const height = +prompt("Enter three height");

let row = "";

if (height > 1) {

    for (let i = 1; i <= height; i++) {

        for (let space = 1; space <= (height - i); space++) {
            row = row + " ";
        }

        for (let star = 1; star <= 2 * i - 1; star++) {
            row = row + "*";
        }
        row = row + "\n";
    }
}

console.log(row);