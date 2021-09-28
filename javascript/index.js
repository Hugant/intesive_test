const DIMENSIONS = {
	'width': 1000,
	'height': 800,
	'tile_width': 33.333,
	'tile_height': 33.333,
	'field_width': 30,
	'field_height': 24
}


let username = null;
let level = null;

let game = null;

window.onload = function() {
	game = new Game();
	game.init('canvas', DIMENSIONS.width, DIMENSIONS.height);
	game.start();
}

document.getElementById('button').onclick = function() {
	username = document.getElementById('username').value;
	level = parseInt(document.getElementById('level').value);
	game.start();
	console.log(username);
	console.log(level);
}