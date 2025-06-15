function computerMove() {
  const ranNum = Math.random ();
  let computerMove = '';

  if (ranNum < 1/3) {
    computerMove = 'rock'
  }
  else if (ranNum < 2/3) {
    computerMove = 'paper'
  }
  else {
      computerMove = 'scissors'
  };

  return  computerMove;
};

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties:0
}

updateScore();

function game(playerMove) {
  const computerChoice = computerMove();
  let result = '';

  if (playerMove === 'rock') {
    if (computerChoice === 'rock') {
      result = "It's a Tie!"
    }
    else if (computerChoice === 'paper') {
      result = 'You Lose!'
    }
    else {
      result = 'You Win!'
    };
  }
  else if (playerMove === 'paper') {
    if (computerChoice === 'rock') {
      result = "You Win!"
    }
    else if (computerChoice === 'paper') {
      result = "It's a Tie!"
    }
    else {
      result = 'You Lose!'
    };
  }
  else {
    if (computerChoice === 'rock') {
      result = "You Lose!"
    }
    else if (computerChoice === 'paper') {
      result = "You Win!";
    }
    else {
      result = 'You Tie!';
    };
  };
  
  if (result === 'You Win!') {
    score.wins++
  }
  else if (result === 'You Lose!') {
    score.loses++
  }
  else {
    score.ties++
  };

  localStorage.setItem('score', JSON.stringify(score))

  document.querySelector('.result').innerHTML = `Result - ${result}`
  document.querySelector('.moves').innerHTML = `Player Move - ${playerMove}<br>Computer Move - ${computerChoice}`
  updateScore()

  return result;
};

function updateScore () {
  document.querySelector('.score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties ${score.ties}.`
}

document.getElementById('rock').onclick = function () {
  game('rock')
}
document.getElementById('paper').onclick = function () {
  game('paper')
}
document.getElementById('scissors').onclick = function () {
  game('scissors')
}

document.getElementById('reset').onclick = function () {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScore();
  document.querySelector('.result').innerHTML = `Result - `;
  document.querySelector('.moves').innerHTML = `Player Move - <br>Computer Move - `

}