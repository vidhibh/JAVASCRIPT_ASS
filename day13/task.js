console.log(this);

let person = {
    name: "Vidhi",
    showThis: function () {
        console.log(this);
    }
};
person.showThis();

function show() {
    console.log(this);
}
show();

let arrowFn = () => {
    console.log(this);
};
arrowFn();

let user = {
    name: "Vidhi",
    arrowMethod: () => {
        console.log(this);
    }
};
user.arrowMethod();

function Person(name) {
    this.name = name;
    console.log(this);
}
let p1 = new Person("Vidhi");
console.log(p1.name);