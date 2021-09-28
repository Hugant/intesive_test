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

document.getElementById('coords').onclick = function() {
	tbody = document.getElementById('tbody');
	tbody.insertAdjacentHTML('beforeend', '<tr><td>' + game.player.x + '</td><td>' + game.player.y + '</td>' +
		'<td><button class="plus">+</button></td></tr>');
}