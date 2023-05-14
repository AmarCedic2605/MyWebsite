document.getElementById('reset-button').addEventListener('click', function() {
    let card = document.createElement('div');
    card.className = 'card';
    card.textContent = 'Uno';
    document.getElementById('uno-game').appendChild(card);
  });
  