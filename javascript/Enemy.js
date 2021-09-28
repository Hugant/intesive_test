class Enemy {
	constructor(x, y, hp, attack, image_src) {
		this.x = x;
		this.y = y;
		this.hp = hp;
		this.attack = attack;
		this.image = new Image();
		this.image.src = image_src;

		if (this.constructor === Enemy) {
			throw "Can't instantiate abstract class 'Enemy'.";
		}
	}

	move(player_x, player_y) {
		let dx = player_x - this.x;
		let dy = player_y - this.y;

		if (Math.abs(dx) >= Math.abs(dy)) {
			this.x += dx / Math.abs(dx);
		} else if (Math.abs(dx) < Math.abs(dy)) {
			this.y += dy / Math.abs(dy);
		}
	}

	draw(context) {
		context.drawImage(this.image, this.x * DIMENSIONS.tile_width, this.y * DIMENSIONS.tile_height,
			DIMENSIONS.tile_width, DIMENSIONS.tile_height);
	}

}

class Goblin extends Enemy {
	constructor(x, y) {
		super(x, y, 1, 1, 'images/goblin1.png');
	}
}