function rockpaperscissorgame(){

    console.log("hii, lets get start with rock paper scissor game");

    const userChoicePrompt=prompt("Enter Rock, paper, scissors");
    let userChoice=userChoicePrompt.toLowerCase();
    
    let computerChoice;
    const randomNumber=Math.floor(Math.random()*3)+1;
    
    if(randomNumber===1){
        computerChoice="rock";
    }
    else if(randomNumber===2){
        computerChoice="paper";
    }
    else{
        computerChoice="scissors";
    }
    console.log("users selected", userChoice);
    console.log("computer selected", computerChoice);
    if((userChoice==="rock"&&computerChoice==="scissors")||(userChoice==="paper"&&computerChoice==="rock")||(userChoice==="scissors"&&computerChoice==="paper")){
        console.log("You the user win, Yay!!");
     
    }
     else if((userChoice==="scissors"&&computerChoice==="rock")||(userChoice==="rock"&&computerChoice==="paper")||(userChoice==="paper"&&computerChoice==="scissors")){
        console.log("sorry!!, you lose");
     }
     else if(userChoice===computerChoice){
        console.log("the game is tie");
     }
      else{
        console.log("sorry invalid choice");
      }
    const playAgainPrompt=prompt("Do you. want to play Again? (yes/no)");
    const playAgain=playAgainPrompt?playAgainPrompt.toLocaleLowerCase():"no";
    if(playAgain==="yes"){
       rockpaperscissorgame();
    }
    else{
        console.log("thanks and bye");
    }


}
rockpaperscissorgame();