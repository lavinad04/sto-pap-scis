let player1Score = 0;
let player2Score = 0;
let round = 1;

function play(player, choice) {
    const options = ['stone', 'paper', 'scissors'];
    const compChoice = options[Math.floor(Math.random() * options.length)];

    let winningPlayer = '';

    if (player === 'player1') {
        if ((choice === 'stone' && compChoice === 'scissors') ||
            (choice === 'scissors' && compChoice === 'paper') ||
            (choice === 'paper' && compChoice === 'stone')) {
                winningPlayer = 'Player 1 wins!';
            player1Score++;
        } else if (choice === compChoice) {
            winningPlayer = "It's a tie!";
        } else {
            winningPlayer = 'Player 2 wins!';
            player2Score++;
        }
    } else if (player === 'player2') {
        if ((choice === 'stone' && compChoice === 'scissors') ||
            (choice === 'scissors' && compChoice === 'paper') ||
            (choice === 'paper' && compChoice === 'stone')) {
                winningPlayer = 'Player 2 wins!';
            player2Score++;
        } else if (choice === compChoice) {
            winningPlayer = "It's a tie!";
        } else {
            winningPlayer = 'Player 1 wins!';
            player1Score++;
        }
    }

    document.getElementById('result').innerText = `Player 1 chose ${choice}, Player 2 chose ${compChoice}. ${winningPlayer}`;
    document.getElementById('player1-score').innerText = player1Score;
    document.getElementById('player2-score').innerText = player2Score;
    
    round++;
    document.getElementById('round').innerText = round;

    if (round >= 6) {
        endGame();
    }
}

function endGame() {
    let winner = '';
    if (player1Score > player2Score) {
        winner = 'Player 1 wins the game!';
    } else if (player1Score < player2Score) {
        winner = 'Player 2 wins the game!';
    } else {
        winner = "It's a tie!";
    }

    document.getElementById('result').innerText = `Game over. ${winner}`;
}
