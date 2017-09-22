// createDeck
  function createDeck(owner) {
    var deck = [];
    for (i = 0; i < 3; i++) {
      deck.push(createCard('Warrior', owner));
    }
    for (i = 0; i < 3; i++) {
      deck.push(createCard('Archer', owner));
    }
    for (i = 0; i < 3; i++) {
      deck.push(createCard('Farm', owner));
    }
    deck.push(createCard('Call to Arms', owner));
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
   if (deck.length > 0) {
     hand.push(deck.pop());
   }
 };
  
  
