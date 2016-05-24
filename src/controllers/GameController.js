define(["Phaser",
	  "background/Background",
	  "background/BackgroundConstants",
	  "player/Player",
	  "player/PlayerConstants",
	  "enemyGroup/EnemyGroup",
	  "enemyGroup/EnemyConstants",
	  "bulletGroup/BulletConstants",
	  "constants/GameConstants"],
		function(Phaser, 
				Background,
				BackgroundConstants,
				Player,
				PlayerConstants,
				EnemyGroup,
				EnemyConstants,
				BulletConstants,
				GameConstants) {

	function GameController() {}

	GameController.execute = function() {
		var game = new Phaser.Game(GameConstants.WIDTH, GameConstants.HEIGHT, Phaser.CANVAS, '',
			{preload: preload, create: create, update: update});

		var bg = new Background();
		var player = new Player();
		var enemyGroup;

		function preload() {
			game.load.image(BackgroundConstants.ID, BackgroundConstants.PATH);
			game.load.image(PlayerConstants.ID, PlayerConstants.PATH);
			game.load.image(EnemyConstants.ID, EnemyConstants.PATH);
			game.load.image(BulletConstants.ID, BulletConstants.PATH);
		}

		function create() {
			bg.create(game);
			player.create(game);
			enemyGroup = new EnemyGroup(game);
			enemyGroup.initGroup(EnemyConstants.ENEMIES_QUANTITY);
		}

		function update() {
			bg.update();
			player.update();
			enemyGroup.resetEnemy(game.world.width + game.world.randomX, game.world.randomY);
		}
	};

	return GameController;
});