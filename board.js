function createBoard() {
  var board = Create2DArray(9);
  for (i = 0; i < 9; i++) {
    for (j = 0; j < 3; j++) {
      board[i,j] = {};
      if (i < 3) {
        board[i,j].build = 'PLAYER';
      }
      if (i < 4) {
        board[i,j].units = 'PLAYER';
      }
      if (i >= 6) {
        board[i,j].build = 'ENEMY';
      } 
      if (i >=5) {
        board[i,j].units = 'ENEMY';
      }
    }
  }
   
  board[1,1].card = createCard('Village', 'PLAYER');
  board[1,7].card = createCard('Village', 'ENEMY');
  
  return board;
};

function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
};
