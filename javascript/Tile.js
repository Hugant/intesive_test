class Tile {
	constructor(x, y, image_src) {
		this.x = x;
		this.y = y;
		this.width = DIMENSIONS.tile_width;
		this.height = DIMENSIONS.tile_height;
		this.image = new Image();
		this.image.src = image_src;
	}

	draw(context) {
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
	}
}