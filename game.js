let playerWin = 5;
let computerWin = 5;
const playerLives = document.querySelector('.playerLives');
const computerLives = document.querySelector('.computerLives');
const heraldText = document.querySelector('.heraldText');

function computerPlay() {
		
	let choices = ['rock', 'paper', 'scissors'];
	let computerSelection = choices[Math.floor(Math.random() * choices.length)];
	return computerSelection;
}

function singleRound(playerSelection) {
	
	let computerSelection = computerPlay();

	// If player wins, computer loses one life
	if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
		computerWin --;
		computerLives.textContent = `Computer lives: ${computerWin}`;
		heraldText.textContent = 'The rogue mage is struck!'
		console.log("Player wins round!");
	}

	// If computer wins, player loses one life
	else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")) {
		playerWin --;
		playerLives.textContent = `Player lives: ${playerWin}`;
		console.log("Computer wins round!");
	}
	else {
		heraldText.textContent = 'Spells clash, mana is burned but for now both casters remain unharmed! Manifest your art quickly lest you be the canvas';
		console.log("Tie!"); 
	} 

	// Player wins when the computer has 0 lives
	if (computerWin === 0) {
		const victorySpeech = document.createTextNode(' They now grovel at your feet, no doubt hoping for an inkling of your mercy');
		heraldText.appendChild(victorySpeech);
	}

	// Computer wins when the player has 0 lives
	if (playerWin === 0) {
		const lossSpeech = document.createTextNode(' And now your strength wanes... The art of war has failed! Apperate quickly while there is still time or face the consequences of your actions!');
		heraldText.appendChild(lossSpeech);
	}
}

let buttonPlayerChoice = document.querySelectorAll('button');

buttonPlayerChoice.forEach(button => {
	button.addEventListener('click', function() {
		singleRound(button.value);
	});
});


// Old function for playing 5 rounds in the console before UI update
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
