require(["src/configs/config"], function() {
	require(["Phaser",
			 "Background",
			 "Player",
			 "BackgroundConstants",
			 "PlayerConstants",
			 "GameConstants",
			 "BulletConstants"],
			function(Phaser, 
					 Background,
					 Player,
					 BackgroundConstants,
					 PlayerConstants,
					 GameConstants,
					 BulletConstants) {
		var game = new Phaser.Game(GameConstants.WIDTH, GameConstants.HEIGHT, Phaser.CANVAS, '',
				{preload: preload, create: create, update: update});

		var bg = new Background(game);
		var player = new Player(game);

		function preload() {
			game.load.image(BackgroundConstants.ID, BackgroundConstants.PATH);
			game.load.image(PlayerConstants.ID, PlayerConstants.PATH);
			game.load.image(BulletConstants.ID, BulletConstants.PATH);
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