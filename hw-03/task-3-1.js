let someNumber = +prompt("Введіть число");

const messageMultipleOfThree = "Fizz";
const messageMultipleOfFive = "Buzz";
const messageIfIsNan = "Введено не коректні дані";

if (isNaN(someNumber)) {
  console.log(messageIfIsNan);
} else {
  if (someNumber % 3 === 0 && someNumber % 5 === 0) {
    console.log(messageMultipleOfThree + messageMultipleOfFive);
  } else {
    if (someNumber % 3 === 0 && someNumber % 5 !== 0) {
      console.log(messageMultipleOfThree);
    } else {
      if (someNumber % 5 === 0 && someNumber % 3 !== 0) {
        console.log(messageMultipleOfFive);
      }
    }
  }
}
