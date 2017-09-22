function drawDeckHand(deck, hand, ctx) {
	drawField(ctx, 0, 4, { name: deck.length.toString() }, null);
	for(i = 0; i < hand.length; i++) {
		drawField(ctx, 2 + i, 4, hand[i], null);
	}
}

function drawBoard(ctx, board) {
	for(i = 0; i < 9; i++) {
		for(j = 0; j < 3; j++) {
			drawField(ctx, i, j, board[i][j].card, board[i][j]);
		}
	}
}

function drawGold(ctx, gold) {
	ctx.font = "bold 25px Arial";
	ctx.textAlign="center"; 
	ctx.fillStyle = "orange";
	ctx.fillText(gold.toString(), 35 + 1*60, 40 + 4*60);
}

function drawSelection(ctx, x, y) {
	if (index) {
		ctx.beginPath();
		ctx.lineWidth = 3;
		ctx.strokeStyle = "yellow";
		ctx.rect(10 + x*60 ,10 + y*60,50,50); 
		ctx.stroke();
	}
}

function drawField(ctx, x, y, card, field) {
	ctx.beginPath();
	ctx.lineWidth = getWidth(card, field);
	ctx.strokeStyle = getColor(card, field);
	ctx.rect(10 + x*60 ,10 + y*60,50,50); 
	ctx.stroke();
	if (card) {
		ctx.font = "bold 25px Arial";
		ctx.textAlign="center"; 
		ctx.fillStyle = card.owner ? (card.owner == 'PLAYER' ? 'green' : 'red') : "black";
		ctx.fillText(card.name.substring(0,2).toUpperCase(), 35 + x*60, 40 + y*60);
	}
}

function getWidth(card, field) {
	if (card) { return 3; }
	if (field.build) { return 2; }
	return 1;
}

function getColor(card, field) {
	if (card && card.owner) {
		return card.owner == 'PLAYER' ? "green" : "red";
	}
	if (field) {
		if(field.build) {
			return field.build == 'PLAYER' ? "darkgreen" : "darkred";
		}
		if (field.units) {
			return field.units == 'PLAYER' ? "darkgreen" : "darkred";
		}
		return "black";
	}
	return "black";
}
