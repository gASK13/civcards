// card types
  function createCard(type, owner) {
    var card = {};
    if (type == 'Warrior') {
      card.name = 'Warrior';
      card.type = 'UNIT';
      card.cost = 2;
    } else if (type == 'Farm') {
      card.name = 'Farm';
      card.type = 'BUILDING';
      card.subtype = 'PRODUCTION';
      card.cost = 3;
      card.effect = function(player) { 
         player.gold++;
      };
    } else if (type == 'Archer') {
      card.name = 'Archer';
      card.type = 'UNIT';
      card.cost = 2;
    } else if (type == 'Village') {
      card.name = 'Village';
      card.type = 'BUILDING';
      card.subtype = 'CITY';
      card.cost = 0;
    } else if (type == 'Call to Arms') {
      card.name = 'Call to Arms';
      card.type = 'EVENT';
      card.cost = 1;
      card.effect = function(player) { 
        player.deck.push(createCard('Recruit', player.player));
        player.deck.push(createCard('Recruit', player.player));
        player.deck.push(createCard('Recruit', player.player));
      };
    } else if (type == 'Recruit') {
      card.name = 'Recruit';
      card.type = 'UNIT';
      card.cost = 1;
    }
    
    card.owner = owner;
    return card;

  };
