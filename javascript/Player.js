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
	}

	move(keyboard) {
		if (this.last_move === null || Date.now() - this.last_move >= 500) {
			if (keyboard.isDown('DOWN')) {
				this.y += (this.y < DIMENSIONS.field_height - 1 ? 1 : 0);
			} else if (keyboard.isDown('UP')) {
				this.y -= (this.y > 0 ? 1 : 0);
			} else if (keyboard.isDown('LEFT')) {
				this.x -= (this.x > 0 ? 1 : 0);
			} else if (keyboard.isDown('RIGHT')) {
				this.x += (this.x < DIMENSIONS.field_width - 1 ? 1 : 0);
			}

			this.last_move = Date.now();
		}
	}

	draw(context) {
		context.drawImage(this.image, this.x * DIMENSIONS.tile_width, this.y * DIMENSIONS.tile_height, this.width, this.height);
	}
}