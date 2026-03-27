
const arr = new Array(12, 13); //[12, 13]
const arr2 = new Array(12); //[ <12 empty items> ]

const ret=arr2.push(14,13);// push returns the new length of the array
console.log(arr2);
//vidhibhardwaj@vidhis-MacBook-Air day15 % node index.js
//[ <12 empty items>, 14, 13 ]
//vidhibhardwaj@vidhis-MacBook-Air day15 % 

console.log(ret); //14, which is the new length of the array
console.log(arr2.length); //14

const ret2=arr2.push(15);
console.log()
//unshift()->at the beginning of the array
const arr3=[1,2,3];
const ret3=arr3.unshift(4,5);
console.log(arr3);

arr3.unshift(3);
console.log(arr3);

arr3.push(2,8);
console.log(arr3);

console.log("......................................................")
console.log("Removing elements from array")


//pop()->removes the last element from the array and returns that element
const arr4=[1,2,3,4,5];
const ret4=arr4.pop();//return the removed element
console.log(arr4);
console.log(ret4);

console.log("......................................................")
console.log("shift method");
//shift()->removes the first element from the array and returns that element
const arr5=[1,2,3,4,5];
const ret5=arr5.shift();//return the removed element
console.log(arr5);      //[ 2, 3, 4, 5 ]
console.log(ret5);  //1

//clone: slice()
const arr6=[1,2,3,4,5];
const arr7=arr6.slice();//cloning the array
console.log(arr7); //[ 1, 2, 3, 4, 5 ]

const arr8=arr6.slice(2);//starting from index 2 to end
console.log(arr8); //[ 3, 4, 5 ]

const arr9=arr6.slice(1,4);//starting from index 1 to index 4-1
console.log(arr9); //[ 2, 3, 4 ]

const arr10=arr6.slice(-3);//last 3 elements
console.log(arr10); //[ 3, 4, 5 ]

const arr11=arr6.slice(2,-1);//from index 2 to last but before one element
console.log(arr11); //[ 3, 4 ]

//determine whether a variable is an array or not
console.log("......................................................")
console.log("Array.isArray method");
console.log(Array.isArray(arr6)); //true
console.log(Array.isArray({name:"vidhi"})); //false         
console.log(Array.isArray("vidhi")); //false
console.log(Array.isArray(123)); //false
console.log(Array.isArray(undefined)); //false
console.log(Array.isArray(null)); //false       
console.log(Array.isArray(function(){})); //false

//ARRAY DESTRUCTURING
console.log("......................................................")
console.log("Array Destructuring");
const myArr=[10,20,30,40,50];
const [a,b,c,d,e]=myArr;
console.log(a);

console.log(b);

console.log(c);             
console.log(d);

console.log(e);

//SKIPPING A VALUE
const myArr2=[100,200,300,400,500];
const [p,,q,,r]=myArr2;
console.log(p);
console.log(q);             
console.log(r);
console.log("......................................................")
console.log("Nested Destructuring");
//NESTED DESTRUCTURING
const myArr3=[1,2,[3,4]];
const [i,j,[k,l]]=myArr3;
console.log(i);
console.log(j);
console.log(k);
console.log(l);

//more examples of nested array destructuring
const myArr4=[1,2,[3,4,[5,6]]];
const [x,y,[z,w,[u,v]]]=myArr4;
console.log(x);
console.log(y);
console.log(z);
console.log(w);
console.log(u);
console.log(v);

//rest parameter
const myArr5=[10,20,30,40,50,60];
const [m,...n]=myArr5;
console.log(m);//10
console.log(n);//[ 20, 30, 40, 50, 60 ]

const myArr6=[100,200,300,400,500,600];
const [g,h,...f]=myArr6;
console.log(g);
console.log(h);
console.log(f);     
//spread operator
console.log("......................................................")
console.log("Spread Operator");
const arr12=[1,2,3];  
const arr13=[4,5,6];
const combinedArr=[...arr12,...arr13];
console.log(combinedArr); //[ 1, 2, 3, 4, 5, 6 ]

const arr14=[...arr12, ...[7,8,9], ...arr13];
console.log(arr14); //[ 1, 2, 3, 7, 8, 9, 4, 5, 6 ]

const arr15=[...arr12,...arr13,[10,11,23],234];
console.log(arr15); //[ 1, 2, 3, 4, 5, 6, [ 10, 11, 23 ], 234 ]

//copying an array
const originalArr=[1,2,3,4,5];
const copiedArr=[...originalArr];
console.log(copiedArr); //[ 1, 2, 3, 4, 5 ]     

copiedArr===originalArr; //false
//why because both are different arrays in memory


//in arrays , length is property not a method
const arr16=[1,2,3,4,5];
console.log(arr16.length); //5  

//concat method
const arr17=[1,2,3];
const arr18=[4,5,6];
const newArr=arr17.concat(arr18);
console.log(newArr); //[ 1, 2, 3, 4, 5, 6 ]

const newArr2=arr17.concat([7,8,9],arr18);
console.log(newArr2); //[ 1, 2, 3, 7, 8, 9, 4, 5, 6 ]
//original arrays are not modified
console.log(arr17); //[ 1, 2, 3 ]
console.log(arr18); //[ 4, 5, 6 ]       

//join method
const arr19=[1,2,3,4,5];
const str=arr19.join();
console.log(str); //1,2,3,4,5

const str2=arr19.join(" - ");
console.log(str2); //1 - 2 - 3 - 4 - 5          

//fill method
const arr20=[1,2,3,4,5];
arr20.fill(0);
console.log(arr20); //[ 0, 0, 0, 0, 0 ]

const arr21=[1,2,3,4,5];
arr21.fill(9,1);//from index 1 to end
arr21.fill(9,1,4);//from index 1 to index 4-1
console.log(arr21); //[ 1, 9, 9, 9, 9 ]

const arr22=[1,2,3,4,5];
arr22.fill(7,1,4);
console.log(arr22); //[ 1, 7, 7, 7, 5 ]

//reverse method
const arr23=[1,2,3,4,5];
arr23.reverse();
console.log(arr23); //[ 5, 4, 3, 2, 1 ]

//indexOf method
const arr24=[10,20,30,40,50,20];
const index1=arr24.indexOf(20);
console.log(index1); //1

const index2=arr24.indexOf(20,2);
console.log(index2); //5

const index3=arr24.indexOf(100);
console.log(index3); //-1       

//splice method: adds/removes elements from an array
console.log("......................................................")
console.log("Splice Method");
const arr25=[1,2,3,4,5];  
//arr.splice(startIndex, deleteCount, item1, item2, ...);              
const splicedElements=arr25.splice(1,2,10,11,12);//from index 1, remove 2 elements, add 10,11,12
console.log(arr25); //[ 1, 10, 11, 12, 4, 5 ]
console.log(splicedElements); //[ 2, 3 ]        
const arr26=[1,2,3,4,5];
const splicedElements2=arr26.splice(2);//from index 2 to end it removes all elements
console.log(arr26);//[ 1, 2 ]
console.log(splicedElements2);
//arr26 is now [ 1, 2 ]
//splicedElements2 is now [ 3, 4, 5 ]

const arr27=[1,2,3,4,5];
const splicedElements3=arr27.splice(0,3);//from index 0, remove 3 elements
console.log(arr27);//[ 4, 5 ]
console.log(splicedElements3);
//arr27 is now [ 4, 5 ]
//splicedElements3 is now [ 1, 2, 3 ]

const arr28=[1,2,3,4,5];
const splicedElements4=arr28.splice(2,0,10,11);
console.log(arr28);
console.log(splicedElements4);
//arr28 is now [ 1, 2, 10, 11, 3, 4, 5 ]
//splicedElements4 is now [ ]
//no elements were removed
//elements were added at index 2
//SUMMARY OF splice(startIndex, deleteCount, item1, item2, ...)
//startIndex: index at which to start changing the array
//deleteCount: number of elements to remove from startIndex
//item1, item2, ... : elements to add to the array at startIndex

//at method
console.log("......................................................")
console.log("At Method");
const arr29=[10,20,30,40,50];
console.log(arr29.at(2)); //30
console.log(arr29.at(-1)); //50
console.log(arr29.at(-3)); //30             
//equivalent to arr29[arr29.length -3]
console.log(arr29[2]); //30
console.log(arr29[arr29.length -1]); //50
console.log(arr29[arr29.length -3]); //30   
//difference between at() and [] operator is that at() can take negative indices directly
//whereas with [] operator we need to calculate the positive index using length property

//toReverse method
console.log("......................................................")
console.log("toReversed Method");
const arr30=[1,2,3,4,5];
const reversedArr=arr30.toReversed();
console.log(reversedArr); //[ 5, 4, 3, 2, 1 ]
console.log(arr30); //[ 1, 2, 3, 4, 5 ]
//original array is not modified    
//toReversed() returns a new array which is the reversed version of the original array

//toSorted method
console.log("......................................................")
console.log("toSorted Method");
const arr31=[3,1,4,5,2];
const sortedArr=arr31.toSorted();
console.log(sortedArr); //[ 1, 2, 3, 4, 5 ]
console.log(arr31); //[ 3, 1, 4, 5, 2 ]
//original array is not modified
//toSorted() returns a new array which is the sorted version of the original array  
//default sort is ascending order

//toSpliced method
console.log("......................................................")
console.log("toSpliced Method");
const arr32=[1,2,3,4,5];
const splicedArr=arr32.toSpliced(1,2,10,11,12);
console.log(splicedArr);
//splicedArr is [ 1, 10, 11, 12, 4, 5 ]
console.log(arr32);
//arr32 is [ 1, 2, 3, 4, 5 ]
//original array is not modified
//toSpliced() returns a new array with the specified changes applied
//SUMMARY OF toSpliced(startIndex, deleteCount, item1, item2, ...)
//startIndex: index at which to start changing the array
//deleteCount: number of elements to remove from startIndex
//item1, item2, ... : elements to add to the array at startIndex

//with() method
console.log("......................................................")
console.log("with Method");    
//arr.with(index, value); 
const arr33=[10,20,30,40,50];
const newArr3=arr33.with(2,99);
console.log(newArr3);
//newArr3 is [ 10, 20, 99, 40, 50 ]
console.log(arr33);
//arr33 is [ 10, 20, 30, 40, 50 ]
//original array is not modified
//with() returns a new array with the element at the specified index replaced with the new value    

//ARRAY-LIKE AND USAGES
console.log("......................................................")
console.log("Array-Like Objects and Usages");
//ARRAY-LIKE OBJECTS
//An array-like object is an object that has indexed properties and a length property, similar to an array, but does not have array methods.
//Examples of array-like objects include the arguments object in functions, NodeList objects returned by DOM methods, and strings.

//Example 1: Converting arguments object to an array
function example1() {
    console.log("Example 1: Converting arguments object to an array");
    const argsArray = Array.from(arguments);
    console.log(argsArray);
}
example1(1, 2, 3, 4, 5); //[ 1, 2, 3, 4, 5 ]

//Example 2: Converting NodeList to an array        
function example2() {
    console.log("Example 2: Converting NodeList to an array");
    // Simulating a NodeList using a simple object for demonstration
    const nodeList = {
        0: 'div',
        1: 'span',
        2: 'p',
        length: 3
    };
    const nodesArray = Array.from(nodeList);//converting array-like object to array
    console.log(nodesArray);//[ 'div', 'span', 'p' ]
}
example2(); //[ 'div', 'span', 'p' ]

//Example 3: Converting a string to an array of characters
function example3() {
    console.log("Example 3: Converting a string to an array of characters");
    const str = "Hello";
    const charArray = Array.from(str);
    console.log(charArray);
}
//Array.from(str)
example3(); //[ 'H', 'e', 'l', 'l', 'o' ]

//Example 4: Using spread operator to convert array-like object to an array
function example4() {
    console.log("Example 4: Using spread operator to convert array-like object to an array");
    const arrayLike = {
        0: 'a',
        1: 'b',
        2: 'c',
        length: 3
    };
    const arr = [...arrayLike];
    console.log(arr);
}
example4(); //[ 'a', 'b', 'c' ]

//These examples demonstrate how to work with array-like objects and convert them into actual arrays for easier manipulation using array methods.       

//array.from() method
console.log("......................................................")
console.log("Array.from Method");
//Array.from() creates a new, shallow-copied Array instance from an array-like or iterable object.
const str3="Vidhi";
const arr34=Array.from(str3);
console.log(arr34); //[ 'V', 'i', 'd', 'h', 'i' ]

const set=new Set([1,2,3,4,5]);
const arr35=Array.from(set);
console.log(arr35); //[ 1, 2, 3, 4, 5 ]

const map=new Map([[1,'a'],[2,'b'],[3,'c']]);//here each element is an array of [key, value]
const arr36=Array.from(map);
console.log(arr36); //[ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ]    
const arrLike={0:'x',1:'y',2:'z',length:3};
const arr37=Array.from(arrLike);
console.log(arr37); //[ 'x', 'y', 'z' ]

//Array.from() with mapping function
const arr38=Array.from([1,2,3,4,5], x=>x*2);
console.log(arr38); //[ 2, 4, 6, 8, 10 ]

const arr39=Array.from('hello', ch=>ch.toUpperCase());
console.log(arr39); //[ 'H', 'E', 'L', 'L', 'O' ]
//Array.from() is useful for converting array-like objects and iterables into arrays, as well as applying transformations during the conversion process.

//Array.of() method
console.log("......................................................")
console.log("Array.of Method");
//Array.of() creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
const arr40=Array.of(1,2,3,4,5);
console.log(arr40); //[ 1, 2, 3, 4, 5 ]

const arr41=Array.of('a','b','c');
console.log(arr41); //[ 'a', 'b', 'c' ]

const arr42=Array.of();
console.log(arr42); //[]

const arr43=Array.of(10);
console.log(arr43); //[ 10 ]
//Array.of() is useful for creating arrays when the number of elements is known and you want to avoid the special behavior of the Array constructor with a single numeric argument.     

//array.fromAsync() method  
console.log("......................................................")
console.log("Array.fromAsync Method");
//Array.fromAsync() creates a new, shallow-copied Array instance from an array-like or iterable object, handling asynchronous operations.
async function exampleFromAsync() {
    const asyncIterable = {
        async *[Symbol.asyncIterator]() {
            yield 1;
            yield 2;
            yield 3;
        }
    };

    const arr = await Array.fromAsync(asyncIterable);
    console.log(arr); //[ 1, 2, 3 ]
}
exampleFromAsync();
//Array.fromAsync() is useful for working with asynchronous data sources and converting them into arrays for further processing.        

//filter method
console.log("......................................................")
console.log("Filter Method");   
const arr44=[10,15,20,25,30];
const filteredArr=arr44.filter(x=>x>18);
console.log(filteredArr); //[ 20, 25, 30 ]
//filter() creates a new array with all elements that pass the test implemented by the provided function.       
//original array is not modified
console.log(arr44); //[ 10, 15, 20, 25, 30 ]

//map method
console.log("......................................................")
console.log("Map Method");
const arr45=[1,2,3,4,5];
const mappedArr=arr45.map(x=>x*3);      
console.log(mappedArr); //[ 3, 6, 9, 12, 15 ]
//map() creates a new array populated with the results of calling a provided function on every element in the calling array.
//original array is not modified
console.log(arr45); //[ 1, 2, 3, 4, 5 ]

//reduce method     
console.log("......................................................")
console.log("Reduce Method");
const arr46=[1,2,3,4,5];
const sum=arr46.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(sum); //15
//reduce() executes a reducer function on each element of the array, resulting in a single output value.
//original array is not modified
console.log(arr46); //[ 1, 2, 3, 4, 5 ]

//find method
console.log("......................................................")
console.log("Find Method");
const arr47=[10,20,30,40,50];
const foundElement=arr47.find(x=>x>25);
console.log(foundElement);
//30    
//find() returns the value of the first element in the array that satisfies the provided testing function.  
//original array is not modified
console.log(arr47); //[ 10, 20, 30, 40, 50 ]

//findIndex method
console.log("......................................................")
console.log("FindIndex Method");
const arr48=[10,20,30,40,50];
const foundIndex=arr48.findIndex(x=>x>25);
console.log(foundIndex);
//2
//findIndex() returns the index of the first element in the array that satisfies the provided testing function.  
//original array is not modified
console.log(arr48); //[ 10, 20, 30, 40, 50 ]    

//some method
console.log("......................................................")
console.log("Some Method");
const arr49=[1,2,3,4,5];
const hasEvenNumber=arr49.some(x=>x%2===0);
console.log(hasEvenNumber);
//true
//some() tests whether at least one element in the array passes the test implemented by the provided function.  
//original array is not modified
console.log(arr49); //[ 1, 2, 3, 4, 5 ]

//every method
console.log("......................................................")
console.log("Every Method");
const arr50=[2,4,6,8,10];
const allEvenNumbers=arr50.every(x=>x%2===0);
console.log(allEvenNumbers);
//true
//every() tests whether all elements in the array pass the test implemented by the provided function.  
//original array is not modified
console.log(arr50); //[ 2, 4, 6, 8, 10 ]    

//forEach method
console.log("......................................................")
console.log("forEach Method");
const arr51=[1,2,3,4,5];
arr51.forEach((element,index)=>{
    console.log(`Element at index ${index} is ${element}`);
}); 
//arr.forEach()=> syntax is arr.forEach(callback(currentValue, index, array), thisArg)
//currentValue: The current element being processed in the array.
//index(Optional): The index of the current element being processed in the array.
//array(Optional): The array that forEach() is being applied to.
//thisArg(Optional): Value to use as this when executing callback.
//Output:
//Element at index 0 is 1
//Element at index 1 is 2
//Element at index 2 is 3
//Element at index 3 is 4
//Element at index 4 is 5
//forEach() executes a provided function once for each array element.  
//original array is not modified
console.log(arr51); //[ 1, 2, 3, 4, 5 ]    

//flat method
console.log("......................................................")
console.log("Flat Method");     
//map
const arr52=[1,2,[3,4],[5,6]];
const mappedArr2=arr52.map(x=>x*2);
console.log(mappedArr2);        
//[ 2, 4, [ 6, 8 ], [ 10, 12 ] ]
//flat
const arr53=[1,2,[3,4],[5,6]];
const flattenedArr=arr53.flat();
console.log(flattenedArr);      
//[ 1, 2, 3, 4, 5, 6 ]
//flat() creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//original array is not modified
console.log(arr53); //[ 1, 2, [ 3, 4 ], [ 5, 6 ] ]
//flatMap: combines map and flat methods
const arr54=[1,2,3];
const flatMappedArr=arr54.flatMap(x=>[x, x*2]);//for each element x, it creates an array [x, x*2] and then flattens the result
console.log(flatMappedArr);
//[ 1, 2, 2, 4, 3, 6 ]
//flatMap() first maps each element using a mapping function, then flattens the result into a new array.
//original array is not modified
console.log(arr54); //[ 1, 2, 3 ]   
//SUMMARY
//map(): transforms each element and returns a new array of the same length.
//flat(): flattens nested arrays into a single array up to a specified depth.
//flatMap(): combines mapping and flattening in one step, returning a new flattened array.      

Object.assign()
console.log("......................................................")
console.log("Object.assign Method");
const target={a:1,b:2};
const source1={b:3,c:4};
const source2={d:5};
const returnedTarget=Object.assign(target,source1,source2);
console.log(target); //{ a: 1, b: 3, c: 4, d: 5 }
console.log(returnedTarget); //{ a: 1, b: 3, c: 4, d: 5 }
//Object.assign() copies the values of all enumerable own properties from one or more source objects to a target object.
//It returns the modified target object.