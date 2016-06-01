define(["Phaser",
	  "background/Background",
	  "background/BackgroundConstants",
	  "player/Player",
	  "player/PlayerConstants",
	  "enemyGroup/EnemyGroup",
	  "enemyGroup/EnemyConstants",
	  "bulletGroup/BulletConstants",
	  "constants/StateConstants"],
		function(Phaser, 
				Background,
				BackgroundConstants,
				Player,
				PlayerConstants,
				EnemyGroup,
				EnemyConstants,
				BulletConstants,
				StateConstants) {

	function GameState() {
		this.bg = new Background();
		this.player = new Player();
		this.enemyGroup = null;
	}

	GameState.prototype.preload = function() {
		this.game.load.image(BackgroundConstants.ID, BackgroundConstants.PATH);
		this.game.load.image(PlayerConstants.ID, PlayerConstants.PATH);
		this.game.load.image(EnemyConstants.ID, EnemyConstants.PATH);
		this.game.load.image(BulletConstants.ID, BulletConstants.PATH);
	};

	GameState.prototype.create = function() {
		this.bg.create(this.game);
		this.player.create(this.game);
		this.enemyGroup = new EnemyGroup(this.game);
		this.enemyGroup.initGroup(EnemyConstants.ENEMIES_QUANTITY);
	};

	GameState.prototype.update = function() {
		this.bg.update();
		this.player.update();
		this.enemyGroup.resetEnemy(this.game.world.width + this.game.world.randomX, this.game.world.randomY);
	};

	return GameState;
});