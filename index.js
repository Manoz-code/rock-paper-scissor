console.log("welcome to game");

// initilize the score
let userScore = 0;
let computerScore = 0;
let gamePlayed = 0;
// Computer Choice
const computerChoice = ()=>{
    const getComputerChoice = Math.floor(Math.random() * 3);
    console.log(getComputerChoice)
     if(getComputerChoice === 0){
        return "rock";
     }else if(getComputerChoice === 1){
        return "paper";
     }else{
        return "scissor"
     }
};

// User Choice
const userChoice = ()=>{
    const getUserChoice = prompt("Type your choice");
    return getUserChoice.toLowerCase().trim();

   
}

// Play Game
const playGame = ()=>{
    const userSelectedChoice = userChoice();
    const computerSelectedChoice = computerChoice();
   

    if(userSelectedChoice === computerSelectedChoice) return alert("The game is Draw.")

   if(userSelectedChoice === "rock" && computerSelectedChoice === "paper" ||
    userSelectedChoice === "paper" && computerSelectedChoice === "scissor"||
     userSelectedChoice === "paper" && computerSelectedChoice === "rock"
   ){
         computerScore++;
        alert( `OOPS, YOU LOSE YOUR ${userSelectedChoice} HAS BEEN BEATEN BY ${computerSelectedChoice}`)
   }else{
    userScore++;
    alert(`CONGRATS...YOU WON YOUR ${userSelectedChoice} BEATS THE ${computerSelectedChoice}`)
   }

}

// Track Game
const trackGame = () => {

    if (gamePlayed < 5) {

        gamePlayed++;
        playGame();
        trackGame();

    } else {

        alert(`Game Over
User Score: ${userScore}
Computer Score: ${computerScore}`);
    }
};

trackGame();