class Player {
	constructor(x, y, image_src, hp, attack) {
		this.x = x;
		this.y = y;
		this.width = DIMENSIONS.tile_width;
		this.height = DIMENSIONS.tile_height;
		this.image = new Image();
		this.image.src = image_src;
		this.hp = hp;
		this.attack = attack;
		this.last_move = null;
		this.tick = null;
		this.drawing = true;
	}

	move(keyboard, field) {
		if (this.last_move === null || Date.now() - this.last_move >= 150) {
			let time = this.last_move;
			this.last_move = Date.now();
			if (keyboard.isDown('DOWN')) {
				if (this.y < DIMENSIONS.field_height - 1) {
					this.y += field.field[this.y + 1][this.x].moveable;
				}
			} else if (keyboard.isDown('UP')) {
				if (this.y > 0) {
					this.y -= field.field[this.y - 1][this.x].moveable;
				}
			} else if (keyboard.isDown('LEFT')) {
				if (this.x > 0) {
					this.x -= field.field[this.y][this.x - 1].moveable;
				}
			} else if (keyboard.isDown('RIGHT')) {
				if (this.x < DIMENSIONS.field_width - 1) {
					this.x += field.field[this.y][this.x + 1].moveable;
				}
			} else {
				this.last_move = time;
			}
		}

		return true;
	}

	draw(context) {
		if (this.tick === null || Date.now() - this.tick >= 300) {
			this.drawing = !this.drawing;
			this.tick = Date.now();
		}

		// if (this.drawing) {
			context.drawImage(this.image, this.x * DIMENSIONS.tile_width, this.y * DIMENSIONS.tile_height, this.width, this.height);
		// }
	}
}