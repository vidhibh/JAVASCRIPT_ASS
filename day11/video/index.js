function outer(){
    let x=10;
    function inner(){
        console.log(x);
    }
    inner();
}
const func=outer();   //my outer function execution is over here 

//but now
console.log(func());  // here we can still access the function here


function outerCount(){
    let cnt=0;
    return function innerCount(){
        cnt++;
        console.log(cnt);
    }
}

const retval=outerCount();
retval(); //1
retval(); //2
retval(); //3

//count is not revealed outside the function because of closure
//but the inner function remembers the updation done on its outer funtion variable=> so this is the memory of a closure
//data encapsulation

//more exampl
function createBankAccount(initialBalance){
    let balance= initialBalance;


    return{
        "deposit":(amount)=>{
          balance=balance+amount;
          console.log("deposited" , amount, "current balance", balance);

        },

        "withdraw":(amount)=>{
            if(amount>balance){
                console.warn("insufficient balance to withdraw");
            }
            
            else{
            balance=balance+amount;
            console.log("deposited" , amount, "current balance", balance);
}
        },
        "checkBalance":()=>console.log("current balance", balance),
    }

    

}

const tapaScriptAccount= createBankAccount(100);
console.log(tapaScriptAccount.deposit(300));


//closure in event handler
function setupButton(){
    let clickCount=0;
    document.getElementById("myBuuton").addEventListener("click", function(){
        clickCount++;
        console.log('button clicked ${clickCount} times');
    });
}
setupButton();