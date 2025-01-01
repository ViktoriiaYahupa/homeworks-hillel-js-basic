let year = +prompt("Вкажіть рік у форматі РРРР");

const messageIsNan = "Введено не коректні дані";

if (isNaN(year)) {
  console.log(messageIsNan);
} else {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Рік високосний");
  } else {
    console.log("Рік не високосний");
  }
}
