// Task 3
function createButton() {
    let count = 0;

    let btn = document.createElement("button");
    btn.innerText = "Click me";

    btn.addEventListener("click", function () {
        count++;
        console.log("Button clicked", count, "times");
    });

    document.body.appendChild(btn);
}

createButton();

// Task 4
function createMultiplier(multiplier) {
    return function (num) {
        return num * multiplier;
    };
}

let double = createMultiplier(2);
console.log(double(5));

let triple = createMultiplier(3);
console.log(triple(4));


let updateUser = createUser();
updateUser();
updateUser();

// Task 6
function counterFactory() {
    let count=0;
    return{
        increment:()=>{
            count++;
            console.log(count);
        }
,
        decrement:()=>{
         count--;
         console.log(count);
        }
        ,

        reset:()=>{
            count=0;
            console.log(count);
        }
    }
}

let funct=counterFactory();
funct.increment();
funct.increment();
funct.increment();
funct.increment();
funct.decrement();
funct.decrement();
funct.reset();
