const readline = require("readline");
const rl1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [];
let n;
let i = 0;

rl1.question("enter array size: ", function (input) {
  n = Number(input);
  takeElements(); 
});

function takeElements() {
  if (i === n) {
    for (let curr of arr) {
      if (curr % 100 === 0 && curr !== 0) {
        console.log(curr + " is multiple of 100");
      } else {
        console.log(curr + " is not multiple of 100");
      }
    }
    rl1.close();
    return;
  }

  rl1.question("enter " + i + " element: ", function (input) {
    arr.push(Number(input));
    i++;
    takeElements(); 
  });
}

// Task 3
let a = 10;
let b = 5;
let operator = "+";

switch (operator) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b);
        break;
    case "%":
        console.log(a % b);
        break;
    default:
        console.log("Invalid operator");
}

// Task 4
let age = 65;

if (age < 18) {
    console.log("Ticket Price: $3");
} else if (age >= 18 && age <= 60) {
    console.log("Ticket Price: $10");
} else {
    console.log("Ticket Price: $8");
}

// Task 5
let month = "March";

switch (month) {
    case "March":
    case "April":
        console.log("Aries");
        break;
    case "April":
    case "May":
        console.log("Taurus");
        break;
    case "May":
    case "June":
        console.log("Gemini");
        break;
    case "June":
    case "July":
        console.log("Cancer");
        break;
    case "July":
    case "August":
        console.log("Leo");
        break;
    case "August":
    case "September":
        console.log("Virgo");
        break;
    case "September":
    case "October":
        console.log("Libra");
        break;
    case "October":
    case "November":
        console.log("Scorpio");
        break;
    case "November":
    case "December":
        console.log("Sagittarius");
        break;
    case "December":
    case "January":
        console.log("Capricorn");
        break;
    case "January":
    case "February":
        console.log("Aquarius");
        break;
    case "February":
    case "March":
        console.log("Pisces");
        break;
    default:
        console.log("Invalid month");
}

// Task 6
let x = 5;
let y = 6;
let z = 7;

if (x == y && y == z) {
    console.log("Equilateral Triangle");
} else if (x == y || y == z || x == z) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}
