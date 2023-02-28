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


// check who won.
function checkHumanWinner(userGuess, computerChoice)    {
    let humanPoint;
    if (userGuess.toLowerCase() == computerChoice)    {
        
        return humanPoint = 0;
    }
    else if(computerChoice === "paper" && userGuess.toLowerCase() === "scissor" || computerChoice === "scissor" && userGuess.toLowerCase() === "rock" || computerChoice === "rock" && userGuess.toLowerCase() === "paper")    {
        // user win
        return humanPoint = 1;
    }

    else{
        // computer win
        return humanPoint = 0;
    }
}

function checkRobotWinner(userGuess, computerChoice)    {
    let computerPoint;
    if (userGuess.toLowerCase() == computerChoice)    {
        // draw
        return computerPoint = 0;
    }
    else if(computerChoice === "paper" && userGuess.toLowerCase() === "scissor" || computerChoice === "scissor" && userGuess.toLowerCase() === "rock" || computerChoice === "rock" && userGuess.toLowerCase() === "paper")    {
        // user win
        return computerPoint = 0;
    }

    else{
        // computer win
        return computerPoint = 1;
    }
}


// Add logic to the buttons

// adds text to the website
const body = document.querySelector('body');
const div = document.createElement('div');
div.classList.add('new');

let computerDecision;
let humanPoint = 0;
let computerPoint = 0;
// logic for rock button
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    // return console.log(gameRound1("rock", getComputerChoice()));
    const rockChoice = document.createElement('p');
    rockChoice.classList.add('rockChoice');
    computerDecision = getComputerChoice();
    rockChoice.textContent = gameRound1("rock", computerDecision);
    humanPoint = humanPoint + checkHumanWinner('rock', computerDecision);
    computerPoint = computerPoint + checkRobotWinner('rock', computerDecision);
    const resultR = document.createElement('p');
    resultR.classList.add('resultR');
    resultR.textContent = "Human: " + humanPoint + " Robot: " + computerPoint;
    div.appendChild(resultR);
    div.appendChild(rockChoice);
});

// logic for paper button
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    // return console.log(gameRound1("paper", getComputerChoice()));
    const paperChoice = document.createElement('p');
    paperChoice.classList.add('paperChoice');
    computerDecision = getComputerChoice();
    paperChoice.textContent = gameRound1("paper", computerDecision);
    humanPoint = humanPoint + checkHumanWinner('paper', computerDecision);
    computerPoint = computerPoint + checkRobotWinner('paper', computerDecision);
    const resultP = document.createElement('p');
    resultP.classList.add('resultP');
    resultP.textContent = "Human: " + humanPoint + " Robot: " + computerPoint;
    div.appendChild(resultP);
    div.appendChild(paperChoice);
});

// logic for scissors button
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    // return console.log(gameRound1("scissors", getComputerChoice()));
    const scissorsChoice = document.createElement('p');
    scissorsChoice.classList.add('scissorsChoice');
    computerDecision = getComputerChoice();
    scissorsChoice.textContent = gameRound1("scissors", computerDecision);
    humanPoint = humanPoint + checkHumanWinner('scissors', computerDecision);
    computerPoint = computerPoint + checkRobotWinner('scissors', computerDecision);
    const resultS = document.createElement('p');
    resultS.classList.add('resultS');
    resultS.textContent = "Human: " + humanPoint + " Robot: " + computerPoint;
    div.appendChild(resultS);
    div.appendChild(scissorsChoice);
});

// adds the div to the website
body.appendChild(div);

