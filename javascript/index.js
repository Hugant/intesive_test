
let username = null;
let level = null;

window.onload = function() {

}

document.getElementById('button').onclick = function() {
	username = document.getElementById('username').value;
	level = parseInt(document.getElementById('level').value);

	console.log(username);
	console.log(level);
}