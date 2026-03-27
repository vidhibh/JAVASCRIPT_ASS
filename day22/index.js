console.log(".......synchronous........");
console.log("start");
console.log("middle");
console.log("End");


console.log("......asynchronous......");
console.log("start");
//wait here
setTimeout(()=>{
   console.log("middle")
}, 2000);

console.log("End");

//multiple ways to achieve asynchronous
// 1. callback
//2.promises
//3. async/ await keywords
//4.combining all we will see in the event loop

//1 callback:function passed as an argument to another function
function fn(arg){
   arg();
}
fn(function(){
   console.log("hello");
})

