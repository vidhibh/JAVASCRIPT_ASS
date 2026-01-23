//this at global level points to the window object
//this at function level points to the object that called the function
//this at object method points to the object itself
//this at class method points to the instance of the class
//this at arrow function points to the surrounding lexical context
//this at event handler points to the element that received the event
//this at strict mode points to undefined in functions
//this at global level in node.js points to module.exports
//this at module level in node.js points to module.exports
//this at class static method points to the class itself
//this at call/apply/bind points to the first argument passed to these methods
//this at setTimeout/setInterval points to the global object (window in browsers, global in Node.js)
//this at object constructor points to the newly created object
//this at proxy handler points to the proxy object itself




console.log(this);
console.log("this at global level", this);
//inside of an object-> implicit binding
const obj = {
  name: "Object",
  getName: function () {
    console.log("this at object method", this);
    return this.name;
  },

  getfullName: () => {
    console.log("this at arrow function in object method", this);
    return this.name;
  }
};

obj.getName(); //this points to obj 

obj.getfullName(); //this points to the global object (window in browsers, global in Node.js)


//this inside a standalone function-> default binding
function standaloneFunction() {
  console.log("this at function level", this);
}
standaloneFunction(); //this points to the global object (window in browsers, global in Node.js)            

//this inside an arrow function-> lexical binding
const arrowFunction = () => {
  console.log("this at arrow function level", this);
};
arrowFunction(); //this points to the surrounding lexical context (global object here)      

//explicit binding using call, apply, bind
const anotherObj = {
  name: "Another Object"
};

function showName() {
  console.log("this at call/apply/bind", this);
  return this.name;
}

showName.call(anotherObj); //this points to anotherObj
showName.apply(anotherObj); //this points to anotherObj

const boundFunction = showName.bind(anotherObj);
boundFunction(); //this points to anotherObj        

// call method
function greeting() {
    console.log("this at call method", this);
    console.log(`Hello, ${this.name} from ${this.address}`);
}
const user={
    name:'tapascript',
    address:'All of you'
};

const people={
    name:"tapas"
}
const hobby=["sleeping","coding"];
//function.call(object, arg1, arg2, ...);
greeting.call(user);//call is used to invoke the function and we can pass arguments one by one after the first argument

const likes=function(hobby1,hobby2){
    console.log("this at call method with arguments", this);
}

likes.call(people,"Reading","Traveling");

likes.apply(people,hobby);//apply is used to invoke the function and we can pass arguments as an array after the first argument

//bind returns a new function 
const boundGreet=greeting.bind(user);
boundGreet();//this points to user object

const boundLikes=likes.bind(people,"Gaming","Hiking");
boundLikes();//this points to people object

