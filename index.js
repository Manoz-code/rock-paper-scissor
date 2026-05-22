

 
const selectorContainer = document.querySelector(".selector");
const displayResult = document.querySelector(".display p");
const userScoreDisplay = document.querySelector(".user-score span");
const computerScoreDisplay = document.querySelector(".computer-score span");

// initilize the score
let userScore = 0;
let computerScore = 0;
let gamePlayed = 0;
let userSelectedChoice = ""
//User Choice
const handleUserChoice = (e)=>{
  
    const li = e.target.closest("li");
    if(!li) return;
    const userChoice = li.textContent;
    userSelectedChoice = userChoice
   
   
}


// Computer Choice
const handleComputerChoice = ()=>{
    const getComputerChoice = Math.floor(Math.random() * 3);
     if(getComputerChoice === 0){
        return "rock";
     }else if(getComputerChoice === 1){
        return "paper";
     }else{
        return "scissor"
     }
};



// Play Game
const playGame = ()=>{
    const userChoice = userSelectedChoice.toLocaleLowerCase();
    const computerChoice = handleComputerChoice();
 

    if(userChoice === computerChoice){
        displayResult.textContent = "The game is Draw.";
        return displayResult;
    }

   if(userChoice === "rock" && computerChoice === "paper" ||
    userChoice === "paper" && computerChoice === "scissor"||
     userChoice === "paper" && computerChoice === "rock"
   ){
         displayResult.textContent = `You lose the game ${computerChoice} beats your ${userChoice}`;
         computerScore++;
         computerScoreDisplay.textContent = computerScore;
     
   }else{
         displayResult.textContent = `You won the game your ${userChoice} beats the ${computerChoice}`;
         userScore++;
         userScoreDisplay.textContent = userScore;
   }
trackGame()

}


// Track Game;
function trackGame(){
    
    if(userScore === 5 && computerScore < 5){
       alert(`FINAL RESULT : YOU WON THE GAME AGAINST COMPUTER.`);
       location.reload()

    }else if(userScore < 5 && computerScore === 5){
        alert("OPPS! YOU LOSE THE GAME.")
        location.reload();
    }
   
}


selectorContainer.addEventListener("click",handleUserChoice);
selectorContainer.addEventListener("click",playGame);
