var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
	pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() {
	playerPick('rock');
});
pickPaper.addEventListener('click', function() {
	playerPick('paper');
});
pickScissors.addEventListener('click', function() {
	playerPick('scissors');
});

var gameState = 'notStarted', //started // ended
	player = {
		name: '',
		score: 0
	};
	computer = {
		score: 0
	};

var newGameElem = document.getElementById('js-newGameElement'),
	pickElem = document.getElementById('js-playerPickElement'),
	resultsElem = document.getElementById('js-resultsTableElement');


function setGameElements() {
	switch(gameState) {
		case 'started': 
			newGameElem.style.display = 'none';
			pickElem.style.display = 'block';
			resultsElem.style.display = 'block';
			break;

		case 'ended':
			newGameBtn.innerText = 'Jeszcze raz';
			newGameElem.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none';
			break;
		default:
			newGameElem.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none';
			break;
	}
}

setGameElements();



var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function newGame() {
  player.name = prompt('Please enter your name', 'imie gracza');
  if (player.name) {
    player.score = computer.score = 0;
    playerResultElem.innerHTML = '';
    computerResultElem.innerHTML = '';
    gameState = 'started';
    setGameElements();
    console.log(player.score + ' na poczatku');
    
    playerNameElem.innerHTML = player.name;
    setGamePoints();

  }
}

function playerPick(playerPick) {
  console.log(playerPick);
  var computerPick = getComputerPick();
  
  playerPickElem.innerHTML = playerPick;
  computerPickElem.innerHTML = computerPick;
  
  checkRoundWinner(playerPick, computerPick);
  console.log(player.score + ' - ' + computer.score + ' playerPick');
}

function getComputerPick() {
  var possiblePicks = ['rock', 'paper', 'scissors'];
  return possiblePicks[Math.floor(Math.random()*3)];
}



function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';
  
  var winnerIs = 'player';
  
  if (playerPick == computerPick) {
    winnerIs = 'noone'; //remis
  }
  else if (
    (computerPick == 'rock' && playerPick == 'scissors') ||
    (computerPick == 'scissors' && playerPick == 'paper') ||
    (computerPick == 'paper' && playerPick == 'rock')
  ) {
    winnerIs = 'computer';
  }
  if (winnerIs == 'player') {
    playerResultElem.innerHTML = 'Win!';
    computerResultElem.innerHTML = ':('
    player.score++;
  }
  else if (winnerIs == 'computer') {
    computerResultElem.innerHTML = 'Win!';
    playerResultElem.innerHTML = ':('
    computer.score++;
  }
  setGamePoints();
  checkWinner();

}

function setGamePoints() {
  playerPointsElem.innerHTML = player.score;
  computerPointsElem.innerHTML = computer.score;
}

function checkWinner () {
	if (player.score >= 10) {
		alert(player.name + ' wins!');
		newGame();
	}
	else if (computer.score >= 10) {
		alert('Computer wins!');
		newGame();
	}
	
}







