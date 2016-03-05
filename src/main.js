var game = new Phaser.Game(800, 600, Phaser.CANVAS, '',
		{preload: preload, create: create, update: update});

var bg = new Background(game);

function preload() {
	game.load.image("bg", "assets/img/bg.gif");
}

function create() {
	bg.create();
}

function update() {
	bg.update();
}