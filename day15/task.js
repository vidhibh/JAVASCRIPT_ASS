// T-001
let arr1 = new Array(1,2,3,4,5);

// T-002
let arr2 = new Array(3);

// T-003
let arr3 = [10,20,30,40,50,60];
console.log(arr3[3]);

// T-004
for(let i=0;i<arr3.length;i++){
  if(i%2!=0){
    console.log(arr3[i]);
  }
}

// T-005
arr3.unshift(5);
arr3.push(70);

// T-006
arr3.shift();
arr3.pop();

// T-007
let foods=["Pizza","Burger","Pasta","Fries","Sandwich","Biryani","Noodles","Salad","Cake","Icecream"];
let sixthFood = foods[5];
console.log(sixthFood);

// T-008
let last8=[];
for(let i=2;i<foods.length;i++){
  last8.push(foods[i]);
}
console.log(last8);

// T-009
let clone=[];
for(let i=0;i<foods.length;i++){
  clone.push(foods[i]);
}

// T-010
clone.length=0;

// T-011
let nums=[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<nums.length;i++){
  if(nums[i]==5){
    nums.length=6;
  }
}
console.log(nums);

// T-012
let arr12=[1,2,3,4,5];
while(arr12.length>0){
  arr12.pop();
}

// T-013
let arr13=[1,2,3];
arr13.length=0;

// T-014
let empty1=[];
let empty2=[];
console.log(empty1.concat(empty2));

// T-015
let words=["apple","banana","mango"];
for(let i=0;i<words.length;i++){
  if(words[i].includes("app")){
    console.log(true);
  }
}

// T-016
let a=[1,2,3,4];
console.log(a.slice(1,3));
a.splice(1,2);
console.log(a);

// T-017
let alphaNum=["a1","c3","b2"];
let asc=[];
for(let i=0;i<alphaNum.length;i++){
  asc.push(alphaNum[i]);
}
asc.sort();
console.log(asc);

// T-018
let sparse=new Array(5);
let dense=[1,2,3,4,5];

// T-019
let filled=new Array(5);
for(let i=0;i<filled.length;i++){
  filled[i]=0;
}

// T-020
console.log(foods.toString());

const employees=[
{id:1,name:"Alice",departmentId:1,salary:5000},
{id:2,name:"Bob",departmentId:2,salary:7000},
{id:3,name:"Charlie",departmentId:3,salary:4500},
{id:4,name:"Diana",departmentId:1,salary:5500},
{id:5,name:"Edward",departmentId:2,salary:8000},
{id:6,name:"Fiona",departmentId:4,salary:6000},
{id:7,name:"George",departmentId:3,salary:5200},
{id:8,name:"Helen",departmentId:4,salary:7200},
{id:9,name:"Ian",departmentId:2,salary:4800},
{id:10,name:"Jane",departmentId:1,salary:5100},
];

const departments=[
{id:1,name:"HR"},
{id:2,name:"Engineering"},
{id:3,name:"Marketing"},
{id:4,name:"Sales"},
];

// T-021
for(let i=0;i<employees.length;i++){
  if(employees[i].departmentId==2){
    console.log(employees[i]);
  }
}

// T-022
for(let i=0;i<employees.length;i++){
  for(let j=0;j<departments.length;j++){
    if(employees[i].departmentId==departments[j].id){
      console.log(employees[i].name+" ("+departments[j].name+")");
    }
  }
}

// T-023
let maxSalary=0;
for(let i=0;i<employees.length;i++){
  if(employees[i].salary>maxSalary){
    maxSalary=employees[i].salary;
  }
}
console.log(maxSalary);

// T-024
let found=false;
for(let i=0;i<employees.length;i++){
  if(employees[i].departmentId==4){
    found=true;
  }
}
console.log(found);

// T-025
for(let i=0;i<employees.length;i++){
  if(employees[i].salary>6000){
    console.log(employees[i]);
  }
}

// T-026
for(let i=0;i<employees.length;i++){
  console.log(employees[i].name);
}

// T-027
let totalSalary=0;
for(let i=0;i<employees.length;i++){
  totalSalary+=employees[i].salary;
}
console.log(totalSalary);

// T-028
let less=false;
for(let i=0;i<employees.length;i++){
  if(employees[i].salary<5000){
    less=true;
  }
}
console.log(less);

// T-029
for(let i=0;i<employees.length;i++){
  if(employees[i].salary==5100){
    console.log(employees[i]);
    break;
  }
}

// T-030
for(let i=employees.length-1;i>=0;i--){
  if(employees[i].departmentId==1){
    console.log(employees[i]);
    break;
  }
}

// T-031
for(let i=0;i<employees.length;i++){
  if(employees[i].departmentId==3){
    console.log(employees[i]);
    break;
  }
}

// T-032
let all=true;
for(let i=0;i<employees.length;i++){
  if(employees[i].salary<=4000){
    all=false;
  }
}
console.log(all);

// T-033
for(let i=0;i<employees.length;i++){
  if(employees[i].departmentId==4 || employees[i].departmentId==1){
    console.log(employees[i]);
    break;
  }
}

// T-034
let valid=true;
for(let i=0;i<employees.length;i++){
  let match=false;
  for(let j=0;j<departments.length;j++){
    if(employees[i].departmentId==departments[j].id){
      match=true;
    }
  }
  if(!match){
    valid=false;
  }
}
console.log(valid);

// T-035
for(let i=0;i<employees.length;i++){
  for(let j=0;j<departments.length;j++){
    if(employees[i].departmentId==departments[j].id){
      console.log(employees[i].name, departments[j].name);
    }
  }
}

// T-036
let names=[];
for(let i=0;i<employees.length;i++){
  names.push(employees[i].name);
}
console.log(names);

// T-037
for(let i=0;i<employees.length;i++){
  employees[i].salary = employees[i].salary * 1.1;
}
console.log(employees);

// T-038
let skills=[
{name:"Alice",skills:["Excel","Management"]},
{name:"Bob",skills:["JS","Node"]}
];
let allSkills=[];
for(let i=0;i<skills.length;i++){
  for(let j=0;j<skills[i].skills.length;j++){
    allSkills.push(skills[i].skills[j]);
  }
}
console.log(allSkills);

// T-039
let engTotal=0;
for(let i=0;i<employees.length;i++){
  if(employees[i].departmentId==2){
    engTotal+=employees[i].salary;
  }
}
console.log(engTotal);

// T-040
console.log("Logic based question");

// T-041
console.log("Unique projects logic");

// T-042
for(let i=0;i<employees.length;i++){
  for(let j=0;j<departments.length;j++){
    if(employees[i].departmentId==departments[j].id){
      console.log(employees[i].name+" - "+departments[j].name);
    }
  }
}

// T-043
for(let i=0;i<employees.length;i++){
  if(employees[i].salary>6000){
    console.log(employees[i].name);
  }
}

// T-044
for(let e of employees){
  console.log(e.name);
}

// T-045
for(let e of employees){
  if(e.salary>5000){
    console.log(e.name);
  }
}

// T-046
for(let e of employees){
  console.log(e.name, e.salary);
}

// T-047
for(let e of employees){
  for(let d of departments){
    if(e.departmentId==d.id){
      console.log(e.name, d.name);
    }
  }
}

// T-048
let index=0;
for(let e of employees){
  console.log(index, e.name);
  index++;
}

// T-049
const arrayLike={0:"First",1:"Second",length:2};
console.log(arrayLike[1]);

// T-050
function toArray(){
  let arr=[];
  for(let i=0;i<arguments.length;i++){
    arr.push(arguments[i]);
  }
  return arr;
}

// T-051
let divs=Array.from(document.querySelectorAll("div"));

// T-052
let merged=[1,2].concat([3,4]);

// T-053
let dup=[];
for(let i=0;i<5;i++){
  dup.push("A");
}

// T-054
let chars=[];
let str="Hello";
for(let i=0;i<str.length;i++){
  chars.push(str[i]);
}

// T-055
console.log("Group by first letter");

// T-057
let nums57=[3,7,3,2,3,8,7,7];
let maxCount=0;
let mostNum=0;
for(let i=0;i<nums57.length;i++){
  let count=0;
  for(let j=0;j<nums57.length;j++){
    if(nums57[i]==nums57[j]){
      count++;
    }
  }
  if(count>maxCount){
    maxCount=count;
    mostNum=nums57[i];
  }
}
console.log(mostNum);

// T-058
let arr58=[5,2,9,1,3,6,8];
arr58.sort((a,b)=>a-b);
let median=arr58[Math.floor(arr58.length/2)];
console.log(median);

// T-059
let pairs=[['a',1],['b',2],['c',3]];
let obj={};
for(let i=0;i<pairs.length;i++){
  obj[pairs[i][0]] = pairs[i][1];
}
console.log(obj);

// T-060
let letters=[['a','b'],['c','d']];
let result=[];
for(let i=0;i<letters.length;i++){
  for(let j=0;j<letters[i].length;j++){
    result.push(letters[i][j].toUpperCase());
  }
}
console.log(result);

// T-061
let fruits61=['apple','banana','apple','mango','banana','banana'];
let countObj={};
for(let i=0;i<fruits61.length;i++){
  let f=fruits61[i];
  if(countObj[f]){
    countObj[f]++;
  }else{
    countObj[f]=1;
  }
}
console.log(countObj);

// T-062
let sliced=['a','b','c','d','e'].slice(1,4);
console.log(sliced);

// T-063
let sorted=[9,3,1,6,8].sort((a,b)=>a-b);
console.log(sorted);

// T-064
let r1=[1,2,3,4,5].reverse();
console.log(r1);

// T-065
const users=[
{name:'Alice',age:55},
{name:'Bob',age:3},
{name:'Charlie',age:25}
];
let adults=[];
let nonAdults=[];
for(let i=0;i<users.length;i++){
  if(users[i].age>=18){
    adults.push(users[i]);
  }else{
    nonAdults.push(users[i]);
  }
}
console.log(adults, nonAdults);

// T-066
let sentence="40 Days of JavaScript by tapaScript is a powerful initiative";
let wordsArr=sentence.split(" ");
let longest="";
for(let i=0;i<wordsArr.length;i++){
  if(wordsArr[i].length>longest.length){
    longest=wordsArr[i];
  }
}
console.log(longest);

// T-067
let common=[];
let arrA=[1,2,3,4];
let arrB=[3,4,5,6];
for(let i=0;i<arrA.length;i++){
  for(let j=0;j<arrB.length;j++){
    if(arrA[i]==arrB[j]){
      common.push(arrA[i]);
    }
  }
}
console.log(common);
