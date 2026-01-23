//Nested Function accessing parent variable
function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }

    inner();
}

outer();
//variable inside loop
function testLoop() {
    for (let i = 0; i < 3; i++) {
        let num = i;
        console.log(num);
    }

    // console.log(num); // Error
}

testLoop();

//Accessing variable of another function
function first() {
    let secret = "hidden";
}

function second() {
    // console.log(secret); // Error
}

first();
second();
