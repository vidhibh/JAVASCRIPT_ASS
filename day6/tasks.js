
function cels_to_fahre(celsius){
    return celsius*(9/5)+32;
}

function maxx(a,b){
    return (a>b?a:b);
}
function ispalindrome(word,left,right){
    if(left>=right)return true;
    return((word[left]===word[right])&& (ispalindrome(word,left+1,right-1)));
}

function factorialofnumber(num){
    if(num===1||num===0){
        return 1;
    }

    return num*factorialofnumber(num-1);
}

let num=(str)=> {//count_vowels
  let cnt=0;
  for(let i of str){
      if(i=='a' || i=='e' || i=='i'|| i=='o'|| i=='u'){
         cnt++;
      }

  }
  return cnt;
}

function capitalizeletter(str){
    let arr=str.split(" ");
    let n=arr.length;
    for(let i=0;i<n;i++){
       
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}

//iife
let name="vidhi";
(function(str){
    console.log(str);
})(name);

// callback function

function func1(funct2){
    return funct2();

}
func1(function(){
    console.log("callback function");
})

console.log(cels_to_fahre(0));           // 32
console.log(maxx(10, 20));               // 20
console.log(ispalindrome("madam", 0, 4));// true
console.log(factorialofnumber(5));       // 120
console.log(num("education"));           // count vowels
console.log(capitalizeletter("hello world from js")); 

// IIFE already runs


// callback usage
func1(function () {
    console.log("callback function");
});

