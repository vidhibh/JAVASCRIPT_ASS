let a = 12;
let b = 5;

let firstname = "vidhi"
let lastname = "bhardwaj"

console.log(firstname + lastname) 

console.log(a + b);
console.log(a - b);
console.log(b - a);
console.log(a * b);
console.log(a / b);
console.log(a ** b)
console.log(a % b)

let count = 5;
console.log(count--) 
console.log(count)

console.log(--count) 




let x = 10;
 x += 5; 
 x -=3; 
 x *= 2; 
 x /= 4; 
console.log(0 == false)
console.log(3 == '3')
console.log(3 != '3')

console.log(3 === '3')

console.log(null === null)
console.log(undefined === undefined)



let obj1 = {'name': 'tapaScript'} 
let obj2 = {'name': 'tapaScript'} 

console.log(obj1 === obj2)
console.log(obj1 !== obj2)

console.log(false && false); 
console.log(true && false); // false
console.log(true && true); // true
console.log(false && true); // false

console.log("Cow" && "Horse"); // "Horse"



console.log(false || false); // false
console.log(true || false); // true
console.log(true || true); // true
console.log(false || true); // true

console.log("Cow" || "Horse"); 

console.log(!false);

let a1 = null ?? 1; // 1
let a2 = undefined ?? 3 //3
const a3 = false ?? "tapaScript" 
const a4 = 0 ?? "tapas" 


let age = 23;
age >= 60 ? "Senior " : "Non Senior ";


typeof "tapas"; 
typeof false; 

let size = 100;
typeof size;

const numbers = [1,2,3,4]
typeof numbers; 

typeof null; 

//arr object is an instane of Array class
//p1 object is an instance of person class

let arr=[1,4,3];
console.log(arr instanceof Array);//true
console.log(arr instanceof Object);// true

//object example
let person={
    name:"vidhi"
};
console.log(person instanceof Object);//true

//constructor function example

function Person(name){
    this.name=name;
}

let p1=new Person("vidhi");
console.log(p1 instanceof Person);  //true
console.log(p1 instanceof Object);  //true


// class example

class Animal{
    constructor(name){
        this.name=name
    }
}
let dog=new Animal("puppy");

console.log(dog instanceof Animal);//true
console.log(dog instanceof Animal);//true

console.log([] instanceof(Array));
console.log(typeof []); //object