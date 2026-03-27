//dom
//dom is a lightweight library for DOM manipulation and traversal
//to install: npm install dom-lite
//it creates something called a dom tree, which is a simplified representation of the actual DOM
//it allows you to select elements, modify their attributes, and traverse the tree structure
//dom is actually a programming interface for HTML and XML documents

// types of dom
//document:IT represents the entire HTML or XML document
console.log(document);
//node:-It is the basic unit of the dom tree

//element:IT represents an HTML or XML element

//nodelist:it is a collection of nodes

//htmlcollection:it is a collection of HTML elements

//namenodemap:it is a collection of attributes of an element

//Accessing DOM Elements
let titleElem=document.getElementById("heading");
console.log(titleElem);

//by class name
let items=document.getElementsByClassName("info");
console.log(items);//collection:-arrays
console.log(items[0],items[1]);
[...items].forEach((val) => {
    console.log(val);
})

let pTagElems=document.getElementsByTagName("p");
console.log(pTagElems);//

//selectors- Query selector and query selector all
//query selector =querySelector()

let paras=document.querySelectorAll("p.info");
console.log("using query selector all",paras);//nodelist


let hOne=document.querySelector("#vidhi");
console.log(hOne);

function highlightText(){
    console.log("about to highlight the text..");
    let elements=document.querySelectorAll("p.info");

   elements.forEach((element)=>{
    console.log(element.style.backgroundColor="yellow");
})



}

