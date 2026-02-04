//to create a promise we have a constructor function promise , take a callback function as argument
/*let promise = new Promise(function(resolve,reject){
 
});
//executor function
function(resolve, reject){
    //logic goes here
    resolve()
    reject()
    resolve()
}*/
//state-
   //pending: initially when the executor function starts the execution
   //fulfilled: when the promise is resolved
   //rejected: when the promise is rejected
//result-
   //undefined: initially when the state value is pending
   //value: when resolve(value) is called
   // error: when reject(error) is called


   //promise1
   let promise1=new Promise(function(resolve,reject){
         resolve("hey, i am done");
   });

   //rejected
   let promise2=new Promise(function(resolve,reject){
  //      reject("something is not right");
   })

   // how a user knows whether a promise gets fulfilled or get rejected
   //we have .then , .catch and .finally for the same

   //.then():- to handle the resolved promise and sometimes to handle the rejected promises too, takes too arguments

let loading=false;
const promisee=new Promise(function(resolve,reject){
    resolve("i am resolved...");
    reject("error");  
        });

promisee.then(
    (resolved_result)=>{console.log(resolved_result)},
    
   //  (error)=>{console.error(error)} or .catch
).catch((error)=>{console.error(error)}).finally(()=>{
    loading=false;
})


console.log(".....................promise chain..............................")

//rule1: Every promise gives you a .then() 
// ===================== PROMISE COMBINATORS =====================

// Promise.all()
// -> takes an array of promises
// -> resolves when ALL promises resolve
// -> rejects immediately if ANY promise rejects
// -> result is an array of resolved values (in same order)

// use-case: multiple dependent async tasks (all must succeed)

let p1 = Promise.resolve("Data from API 1");
let p2 = Promise.resolve("Data from API 2");
let p3 = Promise.resolve("Data from API 3");

Promise.all([p1, p2, p3])
    .then((results) => {
        console.log(results); 
        // ["Data from API 1", "Data from API 2", "Data from API 3"]
    })
    .catch((error) => {
        console.error(error); // runs if ANY promise fails
    });


// ---------------------------------------------------------------

// Promise.any()
// -> takes an array of promises
// -> resolves when ANY ONE promise resolves
// -> ignores rejected promises
// -> rejects ONLY if ALL promises reject
// -> result is the first fulfilled value

// use-case: fallback APIs, fastest successful response

let p4 = Promise.reject("Server 1 down");
let p5 = Promise.resolve("Server 2 success");
let p6 = Promise.reject("Server 3 down");

Promise.any([p4, p5, p6])
    .then((result) => {
        console.log(result); 
        // "Server 2 success"
    })
    .catch((error) => {
        console.error(error);
        // AggregateError: All promises were rejected
    });




// Promise.all()
// - fails fast
// - rejection reason = first rejected promise

// Promise.any()
// - succeeds fast
// - rejection error = AggregateError
// - useful when only ONE success is enough
