// createDeck
  function createDeck() {
    var deck = [];
    for (i = 0; i < 10; i++) {
      deck.push(createCard('Warrior'));
    }
    for (i = 0; i < 5; i++) {
      deck.push(createCard('Archer'));
    }
    for (i = 0; i < 3; i++) {
      deck.push(createCard('Farm'));
    }
    return deck;
  };

  Array.prototype.move = function(from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
  };
  
  // shuffle deck
  function shuffleDeck(deck) {
    for(i = 0; i < deck.length; i++) {
      deck.move(i, Math.floor(Math.random() * deck.length));
    }
    return deck;
  };
 
 function drawCard(deck, hand) {
    hand.push(deck.pop());
 };
  
  
