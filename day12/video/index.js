const prompt=
user={
    name: "Alice",
    age: 30,
    "is a": "developer",
    city: "New York",
}
console.log(user);
console.log(user["is a"]);

delete user["name"];
delete user.city;

const somekey="is a";
console.log(user[somekey]);  //wrong if i write user.somekey



// dynamically takes an key input from a user
//let car=prompt("which is your favorite car?");
//let favcars={
//    [car]:5
//}
//console.log(favcars);


//constructor function
function Car(name, model){
    this.name=name;
    this.model=model;
}

const bmw= new Car("BMW",2020);
const audiCar=new Car("Audi",2021);
console.log(bmw);
console.log(bmw instanceof Car);


//using object constructor

let Person=new Object();

Person.name="John";
Person.age=25;
console.log(Person);

//factory function
function createUser(name,age){
    return {
        name,age,
        greet(){
            console.log(this.name+" says hello");
        },
         
    }
}
const user1=createUser("Bob",28);
user1.greet();
const user2=createUser("Alice",32);


let profile={
    firstName:"Jane",
    lastName:"Doe",
    get fullName(){
        return this.firstName+" "+this.lastName;
    },
    salary:undefined
}
console.log(profile.salary); //undefined
console.log(!profile.salary); //true
if(!profile.salary){
    console.log("salary does not exist");}

if("salary" in profile){
    console.log("salary exists");
}

for(let key in profile){
    console.log(key,profile[key]);
}

for(let key of Object.keys(profile)){
    console.log(key);
}

for(let value of Object.values(profile)){
    console.log(value);
}

for(let [key,value] of Object.entries(profile)){
    console.log(key,value);
}
console.log(Object.keys(profile));
console.log(Object.values(profile));
console.log(Object.entries(profile));

//static object methods

//object.assign
const target={
    p:1,a:2}

const source={
    a:3,b:5}

const returnedObj=Object.assign(target,source);
console.log(returnedObj);

const obj={name:"vidhi"};
const obj2=Object.assign({},obj);
console.log(obj2);



//converting object to array
const myobj={
    a:"apple",
    b:32,
};


const myArr=Object.entries(myobj);
console.log(myArr);

const entries=new Map([['foo', 'bar'], ['baz', 42]]);

//converting array to object
const objFromArr=Object.fromEntries(entries);
console.log(objFromArr);

//object.freeze(obj), or Object.seal(obj)//can reassign but cant add new one
//Object.isFrozen(obj)

//........................................................
// Object Destructuring

console.log("Object Destructuring");

const student={
    name:"Emma",
    age:22,
    course:"Computer Science",

    address:{
        street:"123 Main St",
        city:"New York"
    }
};

//traditional way
//const name=student.name;
//const age=student.age;
//const course=student.course;

//destructuring way
const {name,age,course ,meal="pizza"}=student;
console.log(name,age,course,meal);

//renaming while destructuring
const {name:n,age:a,course:c}=student;
console.log(n,a,c);

const {address,numerOfaddressHints=address.length}=student;
console.log(address,numerOfaddressHints);

const {address:{street}}=student;


// destructuring in function parameters
// instead of function displayStudent({student)
function displayStudent({name,age,course}){
    console.log(`Name: ${name}, Age: ${age}, Course: ${course}`);
}
displayStudent(student);

//........................................................
//destructuring function's return value

function getStudentInfo(){
    return {
        name:"Liam",
        age:24,
        course:"Mathematics"
    };
}

const {name:studentName,age:studentAge,course:studentCourse}=getStudentInfo();
console.log(studentName,studentAge,studentCourse);



//........................................................
const students = [
    { name:"Ava", age:21 },
    { name:"Noah", age:23 },
    { name:"Sophia", age:22 }
];

for (let {name, age} of students) {
    console.log(name, age);
}


//........................................................
//optional chaining
console.log("Optional Chaining");

const employee={
    id:101,
    personalDetails:{
        name:"Olivia",
        address:{
            street:"456 Elm St",
            city:"Los Angeles"
        }
    }
};

console.log(employee.personalDetails?.address?.city);
console.log(employee.jobDetails?.position);

