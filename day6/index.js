//default parameters
function calc(a,b=0){
    return (2*(a+b))
}
const val=calc(2);
console.log(val);

//rest parameter=>when number of parameters are not defined
function calculateThis(x , y , ...rest){
     console.log(x,y,rest);
}
calculateThis(1,3,5,6,7,8);

//nested function
function outer(){
    return function inner(){
        console.log("inner")
    }
}
let retf=outer();
console.log(retf);  // inner(){console.log("inner")}
console.log(retf()); // inner

//callback function

function foo(func){//taking function as its parameter and to execute this function will use paranthesis with this function
   func();
}

foo(function(){
    console.log("buzz")
})

//callbak here working same like

const buz=function(){
    console.log("buz")
}
foo(buz);

//pure fuunction
let name="vidhi";

function funct1(msg){
    return name+msg;
}

console.log(funct1("this is msg"));
name="bhardwaj"
console.log(funct1("this is my second msg"));

//higher order function=> can pass the argument as its argument or we can return it inside a function

function getcamera(camera){
     camera();
}

getcamera(function(){
    console.log("sony")
})

function returnfunc(){
    return function(){
        console.log("hello");
    }
}

// Arrow function
let greetme=()=>{
    console.log("printing hello");
}
 greetme();

 //immediately invoked function 
( function(count){
    console.log("IIFE")
 })(1)


 // call stack
 // function definition=> funct1(){}
 //function calling/execution=> funct1();