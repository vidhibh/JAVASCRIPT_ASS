 try{
   console.log("execution starts here");
   Abc;
 }catch(error_object){
    console.log("an error has occurres");
    //console.log(error_object.name);
    //console.log(error_object.message);
   // console.log(error_object.stack);
 }
//catch takes an argument as error object, its syntax: catch(error_object){}
//this catch's argument comes from the try block when an error occurs
// try...catch example
console.log("...................................................................")
function greetUser(username){
    try{
        console.log("hello "+username);
        if(username.length<5){
            throw new Error("username must be at least 5 characters long");
        }
        console.log("welcome "+username);
    }
    catch(error){
        console.log("error caught:", error.message);
    }
    console.log("execution continues...");
}

greetUser("vid");
greetUser("vidhi123");

 //real world use case
 console.log("...................................................................")
function divideTwoNumbers(num1,num2){
   try{
        if(num2===0){
            const err=new Error("division by zero is not allowed");//custom error message
            throw err;
   }
   const result=num1/num2;
    console.log("result is:",result);
  
}
catch(error){
    console.log("Got a math error:", error.message);
    // throw error; //rethrowing the error
}
}
divideTwoNumbers(10,0); 
divideTwoNumbers(10,2);

console.log("...................................................................")
// validatiion form
function validateForm(formdata){
    try{
        if(!formdata.username){
            throw new Error("username is required");
        }
        if(!formdata.email.includes("@")){
            throw new Error("invalid email address");
        }
    }
    catch(error){
        console.error("form validation issues found:", error.message);
    }
}
try{
validateForm({username:"vidhi",email:"vidhiexample.com"});

}
catch(error){
    console.error("error caught in outer block:", error.message);
}
console.log("...................................................................")
// validatiion form

//finally block
function processData(information){
try{
    console.log("processing data...");
    if(!information) throw new Error("information is undefined");
// code that may throw an error
}
catch(error){
   //code to handle error
   console.error("error caught:", error.message);
}
finally{
    // code that will always execute
    console.log("cleanup: closing database connection");
}
}

processData(null);
processData("valid data");


console.log("...................................................................")
console.log("custom error example")

function ValidationError(message){
    if(age<60){
        throw new ValidationError("citizen age must be at least 60 years");
    }
    return "citizen age is valid";
}

try{
    const message=validateCitizen(45);

} 
catch(error){
    console.error(`${error.name}: ${error.message}`);
}
