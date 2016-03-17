require(["src/pathConfig"], function() {
	require(["Phaser", "Background", "Player", "BackgroundConstants", "PlayerConstants", "GameConstants"],
			function(Phaser, Background, Player, BackgroundConstants, PlayerConstants, GameConstants) {
		var game = new Phaser.Game(GameConstants.WIDTH, GameConstants.HEIGHT, Phaser.CANVAS, '',
				{preload: preload, create: create, update: update});

		var bg = new Background(game);
		var player = new Player(game);

		function preload() {
			game.load.image(BackgroundConstants.ID, BackgroundConstants.PATH);
			game.load.image(PlayerConstants.ID, PlayerConstants.PATH);
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