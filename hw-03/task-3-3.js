let yourAge = +prompt("Вкажіть свій вік");

const alertIfNan = "Вкажіть коректні дані";
const messageRik = "Вам " + yourAge + " рік";
const messageRoky = "Вам " + yourAge + " роки";
const messageRokiv = "Вам " + yourAge + " років";


if (isNaN(yourAge)) {
    console.log(alertIfNan);
} else if (
    yourAge === 11 ||
    yourAge === 12 ||
    yourAge === 13 ||
    yourAge === 14
) {
    console.log(messageRokiv);
} else if (yourAge === 1 || yourAge % 10 === 1) {
    console.log(messageRik);
} else if (
    yourAge === 2 ||
    yourAge % 10 === 2 ||
    yourAge === 3 ||
    yourAge % 10 === 3 ||
    yourAge === 4 ||
    yourAge % 10 === 4
) {
    console.log(messageRoky);
} else {
    console.log(messageRokiv);
}
