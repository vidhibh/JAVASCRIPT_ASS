const secretNum=Math.floor(Math.random()*10)+1;
function guessTheNumber(){
   const userprompt=Number(prompt("enter a number between 1 to 10"));
   if(userprompt>10||userprompt<1){
    console.log("not between 1 to 10, fill again");
    guessTheNumber();
   }
   else if(secretNum>userprompt){
    console.log("it is a bit low");
    guessTheNumber();
   }
   else if(secretNum<userprompt){
    console.log("it is a bit high");
    guessTheNumber();
   }

   else if(secretNum===userprompt){
    console.log("yes , your guess is correct");
    

   }
   else{
    console.log("invalid choice");
   }
}
guessTheNumber();