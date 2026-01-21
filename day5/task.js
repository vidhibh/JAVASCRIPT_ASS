// Task 1
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern = pattern + "* ";
    }
    console.log(pattern);
}

// Task 2
let n = 3;
for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}

// Task 3
let sum = 0;
for (let i = 1; i <= 500; i++) {
    if (i % 2 !== 0) {
        sum = sum + i;
    }
}
console.log(sum);

// Task 4
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        continue;
    }
    console.log(i);
}

// Task 5
let num = 6789;
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

console.log(reverse);
