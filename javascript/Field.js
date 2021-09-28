const FIELDS_SPRITE = {
	'1': 'images/grass1.jpg',
	'2': 'images/grass2.jpg',
	'3': 'images/tree1.jpg',
	'4': 'images/tree2.jpg',
	'5': 'images/water1.jpg',
	'6': 'images/water2.jpg',
	'7': 'images/earth.jpg',
}

class Field {
	constructor(width, height) {
		this.field = []
		this.width = width;
		this.height = height;
	}

	init() {
		for (let i = 0; i < this.width; i++) {
			this.field.push([]);
			for (let j = 0; j < this.height; j++) {
				if (Math.random() > 0.8) {
					if (Math.random() > 0.5) {
						this.field[i][j] = new Tile(i * DIMENSIONS.tile_width, j * DIMENSIONS.tile_height, FIELDS_SPRITE['3']);
					} else {
						this.field[i][j] = new Tile(i * DIMENSIONS.tile_width, j * DIMENSIONS.tile_height, FIELDS_SPRITE['4']);
					}
				} else if(Math.random() > 0.99) {
					if (Math.random() > 0.5) {
						this.field[i][j] = new Tile(i * DIMENSIONS.tile_width, j * DIMENSIONS.tile_height, FIELDS_SPRITE['5']);
					} else {
						this.field[i][j] = new Tile(i * DIMENSIONS.tile_width, j * DIMENSIONS.tile_height, FIELDS_SPRITE['6']);
					}
				} else if(Math.random() > 0.9) {
					this.field[i][j] = new Tile(i * DIMENSIONS.tile_width, j * DIMENSIONS.tile_height, FIELDS_SPRITE['7']);
				} else {
					if(Math.random() > 0.5) {
						this.field[i][j] = new Tile(i * DIMENSIONS.tile_width, j * DIMENSIONS.tile_height, FIELDS_SPRITE['1']);
					} else {
						this.field[i][j] = new Tile(i * DIMENSIONS.tile_width, j * DIMENSIONS.tile_height, FIELDS_SPRITE['2']);
					}
				}
			}
		}

	}

	draw(context) {
		for (let i in this.field) {
			for (let j in this.field[i]) {
				this.field[i][j].draw(context);
			}
		}
	}
}