// Define the colors and values
let colors = ["Red", "Green", "Yellow", "Blue"];
let values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Skip", "Reverse", "Draw Two"];

// Create the main deck
let deck = [];

// Add the number and special cards
for(let color of colors) {
    for(let value of values) {
        let card = {color: color, value: value};
        deck.push(card);

        // There are two of each card in each color except for the zero card
        if(value !== "0") {
            deck.push(card);
        }
    }
}

// Add the wild cards
for(let i = 0; i < 4; i++) {
    deck.push({color: "Wild", value: "Change Color"});
    deck.push({color: "Wild", value: "Draw Four"});
}

// Now deck is a full Uno deck
console.log(deck);

document.getElementById('reset-button').addEventListener('click', function() {
    let card = document.createElement('div');
    card.className = 'card';
    card.textContent = 'Uno';
    document.getElementById('uno-game').appendChild(card);
});
