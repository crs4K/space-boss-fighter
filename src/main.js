require(["Phaser",
		 "background/Background",
		 "background/BackgroundConstants",
		 "player/Player",
		 "player/PlayerConstants",
		 "bulletGroup/BulletConstants",
		 "constants/GameConstants"],
		function(Phaser, 
				 Background,
				 BackgroundConstants,
				 Player,
				 PlayerConstants,
				 BulletConstants,
				 GameConstants) {
	var game = new Phaser.Game(GameConstants.WIDTH, GameConstants.HEIGHT, Phaser.CANVAS, '',
			{preload: preload, create: create, update: update});

	var bg = new Background();
	var player = new Player();

	function preload() {
		game.load.image(BackgroundConstants.ID, BackgroundConstants.PATH);
		game.load.image(PlayerConstants.ID, PlayerConstants.PATH);
		game.load.image(BulletConstants.ID, BulletConstants.PATH);
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