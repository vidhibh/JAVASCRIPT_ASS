function handleClick(greeting){
    console.log("button clicked");
}
const mybtn2=document.getElementById("btn2");
mybtn2.onclick=function(){
    console.log("My Button 2 Clicked");

};

// better way add event listener
let counter=0;
const myBtn2Elem=document.getElementById("btn3");
const handleEvents=function(){//3 parameter, 1st is what kind of event you are dealing with,2nd what happens when that event happens, 3rd
   console.log("counter",counter);
   counter++;
}
//myBtn2Elem.onclick=handleClick("hola");//undefine
//myBtn2Elem.onclick=()=>handleClick("hola");//wrap it in another function

myBtn2Elem.addEventListener("click",handleEvents
);
//removing the event listenr
myBtn2Elem.removeEventListener("click",handleEvents
);
//
const searchElement=document.getElementById("search-id")
function handleChange(event){
    console.log("events");
}


searchElement.addEventListener("change",handleChange)

//custom events

//step1:create a custom event
const myEvent=new CustomEvent("myownEvent",{
    detail:{
        username:"tapascript",
        role:"admin"
    },
});


//step2:Listen to the custom Event

document.addEventListener("myownEvent",(e)=>{
    console.log(`user login detected ${e.detail.username}`)
});
//step3:dispatching the custom event
document.dispatchEvent(myEvent);

function loginUser(username){
    const event= new CustomEvent("userLoggedIn",{
       detail:{username}
    });

    document.dispatchEvent(event);
}

document.addEventListener("userLoggedIn",(e)=>{
    const user=e.detail.username;
    document.getElementById("welcome").textContent=`welcome,${user}`;

})