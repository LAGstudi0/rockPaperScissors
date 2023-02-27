const result = document.querySelector(".result");
// get a random number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// make the computer choose between rock, paper, scissor
function getComputerChoice()  {
    var computerResponseInt = getRandomInt(1, 3);
    console.log(computerResponseInt);
    var computerAnswer;
    if(computerResponseInt == 1)    {
        computerAnswer = "rock";
    }
    else if(computerResponseInt == 2)    {
        computerAnswer = "paper";
    }
    else    {
        computerAnswer = "scissor";
    }
    return computerAnswer;
}
// start a for loop that last five rounds
// ask the user what option they want 
    // make a function that can check if the user input is equal to rock, paper or scissor 
    // make that the input of the user is case sensitive 

// compare user input with computer input and decide winner
function gameRound1(userGuess, computerChoice)   {
    var computerChoice; 
    var userGuess;
    var result;
    
    if (userGuess.toLowerCase() == computerChoice)    {
        // draw
        return result = "Its a draw because " + userGuess + " cannot beat " + computerChoice;
    }
    else if(computerChoice === "paper" && userGuess.toLowerCase() === "scissor" || computerChoice === "scissor" && userGuess.toLowerCase() === "rock" || computerChoice === "rock" && userGuess.toLowerCase() === "paper")    {
        // user win
        return result = "You win!, " + userGuess + " beats " + computerChoice;
    }

    else{
        // computer win
        return result = "You lose! " + computerChoice + " beats " + userGuess;
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
        let sign = prompt("What's your choice?");
        var computerDecision = getComputerChoice();
        alert(gameRound1(sign, computerDecision));
    }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(gameRound1(playerSelection, computerSelection));
game();
    // if user input and computer input is the same, it means there is a draw, add plus one to the variable round
    // if user selects paper and computer selects rock, user win, start the loop and add one to the variable that counts the rounds.
    // if user selects rock and computer selects scissors, user win, start the loop and add one to the variable that counts the rounds.
    // if user selects scissor and computer selects paper, user win, start the loop and add one to the variable that counts the rounds.
    // if none of the above happens that means that the computer won, add one to the round variable.
    // if computer has won 3 games the loop stops
    // if user has won 3 games the loop stops
    

// Every time the user wins or lose it will get stored in the variable and it will get printed in the end.
// function to change the text
function changeText(theText)   {
    var element = document.getElementById("result");
    element.innerHTML = theText;
}
