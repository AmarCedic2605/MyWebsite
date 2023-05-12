var board = Array(9).fill(null);
var currentPlayer = 'X';

document.querySelectorAll('.cell').forEach((cell, i) => {
  cell.addEventListener('click', function() {
    if (!board[i]) {
      board[i] = currentPlayer;
      cell.textContent = currentPlayer;
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  });
});

document.getElementById('reset-button').addEventListener('click', function() {
 
