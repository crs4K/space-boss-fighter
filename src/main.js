require(["src/pathConfig"], function() {
	require(["Phaser", "Background", "Player"], function(Phaser, Background, Player) {
		var game = new Phaser.Game(800, 600, Phaser.CANVAS, '',
				{preload: preload, create: create, update: update});

		var bg = new Background(game);
		var player = new Player(game);

		function preload() {
			game.load.image("bg", "assets/img/bg.gif");
			game.load.image("player", "assets/img/playerShip.png");
		}

		function create() {
			bg.create();
			player.create();
		}

		function update() {
			bg.update();
			player.update();
		}
	});
});