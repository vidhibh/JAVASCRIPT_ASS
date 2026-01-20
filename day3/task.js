// Task 1
let num = 7;
if ((num & 1) == 0) {
    console.log("even");
} else {
    console.log("odd");
}


// Task 2
let age = 20;
if (age >= 18) {
    console.log("Eligible ");
} else {
    console.log("Not eligible ");
}

// Task 3
let monthlysalary = 12300;
let annualsalary = monthlysalary * 12;
let bonus = annualsalary * 20 / 100;
let ctc = annualsalary + bonus;
console.log(ctc);

// Task 4
let color = "Red";
if (color == "Red") {
    console.log("STOP");
} else if (color == "Green") {
    console.log("GO");
} else {
    console.log("Invalid color");
}

// Task 5
let unitsperday = 5;
let costperunit = 150;
let monthlybill = unitsperday * costperunit * 30;
let annualbill = monthlybill * 12;
let discount = annualbill * 20 / 100;
let finalbill = annualbill - discount;
console.log("Monthly Bill:", monthlybill);
console.log("Annual Bill after discount:", finalbill);

// Task 6
let year = 2025;
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log("Leap Year");
} else {
    console.log("Not leap Year");
}

// Task 7
let p = 10;
let q = 25;
let r = 15;
let max;
if (p > q && p > r) {
    max = p;
} else if (q > r) {
    max = q;
} else {
    max = r;
}
console.log("Maximum number is:", max);

// Task 8
let count = 5;
let doubled = count << 1;
console.log("Doubled value:", doubled);
