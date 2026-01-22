let student={
    name:"Vidhi",
    age:21,
    grades:[{Math:22},{Science:34},{English:45},{Hindi:23},{History:44}]
}
let avg=0;
for(let i in student.grades){
  avg += Object.values(student.grades[i])[0];
}

avg=avg/student.grades.length;
console.log("Average Grade:",avg);


//book store inventory

let bookstore={
   book1:{title:"Book A",author:"Author A",price:200,quantity:5},
   book2:{title:"Book B",author:"Author B",price:150,quantity:3},
   book3:{title:"Book C",author:"Author C",price:300,quantity:2},
   book4:{title:"Book D",author:"Author D",price:250,quantity:4}
}

function checkAvailability(title){
    for(let book in bookstore){
        if(bookstore[book].title===title && bookstore[book].quantity>0){
            console.log("Book is available");
            return;
        }
    }
    console.log("Book is not available");
}
function restockBook(title,quantity){
    for(let book in bookstore){
        if(bookstore[book].title===title){
            bookstore[book].quantity += quantity;
            console.log(`Restocked ${title}. New quantity: ${bookstore[book].quantity}`);
            return;
        }
    }
    console.log("Book not found in inventory");
}

//usage
checkAvailability("Book B");
restockBook("Book B",5);
checkAvailability("Book B");

//Loop and print values using Object destructuiring

const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

for(let {name,address,age} of users){
    console.log(`Name: ${name}, Address: ${address}, Age: ${age}`);
}