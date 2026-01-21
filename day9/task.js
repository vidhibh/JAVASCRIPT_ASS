{

    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a); // undefined
    console.log(b); // ReferenceError
    console.log(c); // ReferenceError
}
//Variable and Function Hoisting
console.log(x);
var x = 5;
let y = 10;

sayHello();

function sayHello() {
    console.log("Hello");
}



var sayHi = function () {
    console.log("Hi");
};
