//dom manipulations
//creating elements
//const pElem=document.createElement("pelem");
//pElem.innerText="dynamically added text";
//document.body.appendChild(pElem);
//console.log(pElem);

//inserting an elmente'
const span=document.createElement("span");
span.innerText="i am a span";
const pElemm=document.querySelector("p");
console.log(pElemm.nextElementSibling)
document.body.insertBefore(span,pElemm.nextElementSibling);

//modifying content
{
    pElemm.innerHTML="<u>Hello How</u> are you doing?"
}
  //remove elements
{
  
    let list=document.getElementById("myList");
    const itemToRemove=list.children[0];
    list.removeChild(itemToRemove);
    
}
//