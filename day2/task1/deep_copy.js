let person={name:"vidhi",
    address:{city:"faridabad"}
}
function deepcopy(obj){
    if(obj==null|| typeof(obj)!="object"){
        return obj;
    }

    let cp=Array.isArray(obj)?[]:{};

    for(let key in obj){
        cp[key]=deepcopy(obj(key));
    }
    return cp;
}
function shallowcopy(obj){
    let cp={...ob};
    return cp;
}
let person2=deepcopy(person);
person2.address.city="delhi";
document.write("deep copy changes change only one");
document.write(person2.address.city);
document.write(person1.address.city);

let person3=shallowcopy(person);

person3.address.city="delhi";
document.write("shallow copy changes will change both");
document.write(person2.address.city);
document.write(person1.address.city);