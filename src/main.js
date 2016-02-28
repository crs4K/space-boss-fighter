var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', {preload: preload, create: create, update: update});

var bg;

function preload() {
	game.load.image("bg", "assets/img/bg.gif");
}

function create() {
	bg = game.add.tileSprite(0, 0, 800, 600, "bg");
}

function update() {
	bg.tilePosition.x -= 0.5;
}