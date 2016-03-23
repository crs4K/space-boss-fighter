require(["src/configs/config"], function() {
	require(["Phaser",
			 "Background",
			 "Player",
			 "BackgroundConstants",
			 "PlayerConstants",
			 "GameConstants"],
			function(Phaser, 
					 Background,
					 Player,
					 BackgroundConstants,
					 PlayerConstants,
					 GameConstants) {
		var game = new Phaser.Game(GameConstants.WIDTH, GameConstants.HEIGHT, Phaser.CANVAS, '',
				{preload: preload, create: create, update: update});

		var bg = new Background();
		var player = new Player();

		function preload() {
			game.load.image(BackgroundConstants.ID, BackgroundConstants.PATH);
			game.load.image(PlayerConstants.ID, PlayerConstants.PATH);
		}

		function create() {
			bg.create(game);
			player.create(game);
		}

		function update() {
			bg.update();
			player.update();
		}
	});
});