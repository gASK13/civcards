// card types
  function createCard(type) {
    var card = {};
    if (type == 'Warrior') {
      card.name = 'Warrior';
      card.type = 'UNIT';
      card.cost = 1;
    } else if (type == 'Farm') {
      card.name = 'Farm';
      card.type = 'BUILDING';
      card.subtype = 'PRODUCTION';
      card.cost = 3;
    } else if (type == 'Archer') {
      card.name = 'Archer';
      card.type = 'UNIT';
      card.cost = 2;
    }
    return card;

  };
