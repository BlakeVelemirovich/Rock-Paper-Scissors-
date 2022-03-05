let playerWin = 0;
let computerWin = 0;

function computerPlay() {
		
	let choices = ['rock', 'paper', 'scissors'];
	let computerSelection = choices[Math.floor(Math.random() * choices.length)];
	return computerSelection;
}

function singleRound() {
	
	let playerSelection = prompt("Rock, Paper, or Scissors?: ");
	let computerSelection = computerPlay();
	
	if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
		playerWin ++;
		console.log("Player wins round!");
	}

	else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")) {
		computerWin ++;
		console.log("Computer wins round!");
	}
	else {
		console.log("Tie!");
	}
}

/* function game() {

	for (let i = 0; i < 5; i++) {
		singleRound(); 
	}

	if (playerWin > computerWin){
		console.log("Player wins!");
	}
	else if (computerWin > playerWin){
		console.log("Computer wins!");
	}
	else {
		console.log("Tie!");
	}
}

game(); */
