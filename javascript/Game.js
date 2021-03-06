class Game {
	constructor() {
		this.canvas = null;
		this.context = null;
		this.keyboard = null;

		this.isPause = false;
		this.player_step = true;

		this.player = null;
		this.enemies = null;
	}

	init(canvas_id, width, height) {
		this.canvas = document.getElementById(canvas_id);
		this.canvas.width = width;
		this.canvas.height = height;
		this.context = this.canvas.getContext('2d');
		this.keyboard = new Keyboard();
		this.keyboard.init();

		this.field = new Field(DIMENSIONS.field_width, DIMENSIONS.field_height);
		this.field.init();

		this.player = new Player(3, 3, 'images/hero.png', 5, 1)

		this.enemies = [new Goblin(20, 25)]
	}

	start() {
		if (!game.isPause) {
			game.engine();
			window.requestAnimationFrame(game.start);
		}
	}

	pause() {
		this.isPause = !this.isPause;
		window.requestAnimationFrame(game.start);
	}

	engine() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.field.draw(this.context);
		this.player.draw(this.context);

		for (let enemy of this.enemies) {
			enemy.draw(this.context);
		}


		if (this.player_step) {
			this.player_step = this.player.move(this.keyboard, this.field);
		} else {
			for (let enemy of this.enemies) {
				enemy.move(this.player.x, this.player.y);
			}
			this.player_step = true;
		}


	}
}