let board = [];
let currentPlayer = 'red';

// initialize the board
for(let i = 0; i < 6; i++) {
  board[i] = [];
  for(let j = 0; j < 7; j++) {
    board[i][j] = null;
  }
}

// handle cell clicks
let cells = document.getElementsByClassName('cell');
for(let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function() {
    let column = i % 7;
    for(let row = 5; row >= 0; row--) {
      if(!board[row][column]) {
        board[row][column] = currentPlayer;
        cells[row * 7 + column].style.backgroundColor = currentPlayer;
        currentPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
        break;
      }
    }
  });
}

// reset the game
document.getElementById('reset-button').addEventListener('click', function() {
  board = [];
  for(let i = 0; i < 6; i++) {
    board[i] = [];
    for(let j = 0; j < 7; j++) {
      board[i][j] = null;
    }
  }
  for(let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = '#fff';
  }
  currentPlayer = 'red';
});
