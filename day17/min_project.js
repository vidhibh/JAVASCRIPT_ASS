function filterList(){
    let inputElem=document.getElementById("searchInput");
    const input=inputElem.value;
    const items=document.querySelectorAll("ul#itemList li");// node list
    //for class selector in querySelector=> we will use tag.classname
    // for id selector in querySelector => we will  use (tag #id name)
    items.forEach((item)=>{
       item.style.backgroundColor= item.innerText.toLowerCase().includes(input.toLowerCase())?"green" : "";
       
    })

        /*
       items.forEach((item)=>{
       item.style.display= item.innerText.toLowerCase().includes(input.toLowerCase())?"block" : "none";
       
    })
    } 
    */

    
}