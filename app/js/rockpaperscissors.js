////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
  console.log("Please choose either 'rock', 'paper', or 'scissors'.")
  return prompt();
}
function randomPlay() {
  var randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

// String -> String
function getPlayerMove(move) {
	// Write an expression that operates on a variable called `move`
	// If a `move` has a value, your expression should evaluate to that value.
	// However, if `move` is not specified / is null, your expression should equal `getInput()`.
	return move = move || getInput();
}

// String -> String
function getComputerMove(move) {
	// Write an expression that operates on a variable called `move`
	// If a `move` has a value, your expression should evaluate to that value.
	// However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
	return move = move || randomPlay();
}

// String String -> String
function getWinner(playerMove,computerMove) {
	var winner;
	// Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
	// Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
	// The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
	/* YOUR CODE HERE */
	
	// enumerate the moves. <see Helper Functions below>
	var playerResult = enumerator(playerMove);
	var compResult = enumerator(computerMove);
	
	if (playerResult === compResult) {
		winner = "tie";
	} else if (playerResult === 2 && compResult === 0) {
		winner = "player";
	} else if (compResult === 2 && playerResult === 0) {
		winner = "computer";
	} else if (playerResult < compResult) {
		winner = "player";
	} else {
		winner = "computer";
	}

	return winner;
}

function playToFive() {
	console.log("Let's play Rock, Paper, Scissors");
	var playerWins = 0;
	var computerWins = 0;
	// Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
	/* YOUR CODE HERE */
	var plays = playTo(prompt("Best out of...?"));

	while (playerWins < plays && computerWins < plays) {
		var result = getWinner(getPlayerMove(), getComputerMove());
		if (result === "player") {
			console.log("You won this round! You: " + (playerWins + 1) + ", Computer: " + computerWins + ".");
			playerWins += 1;
		} else if (result === "computer") {
			console.log("Computer won this round! You: " + playerWins + ", Computer: " + (computerWins + 1) + ".");
			computerWins += 1;
		} else {
			console.log("Tie!");
		}
	}

	if (playerWins === plays) {
		console.log("You won the first to " + plays + " games! You: " + playerWins + ", Computer: " + computerWins + ".");
	} else if (computerWins === plays) {
		console.log("Computer won the first to " + plays + " games. You: " + playerWins + ", Computer: " + computerWins + ".")
	}

	return [playerWins, computerWins];
}

//////////////////////
/* Helper Functions */
//////////////////////

// String -> Number[0, 2]
// enumerator returns 0 for rock, 1 for paper, 2 for scissors.
function enumerator (move) {
	switch (move) {
	case 'rock':
		return 0;
	case 'scissors':
		return 1;
	case 'paper':
		return 2;
	}
}

// String -> Natural
// consumes an string from user to determine corresponding number to return.
function playTo (x) {
	return parseInt(x);
}