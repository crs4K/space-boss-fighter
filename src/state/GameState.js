define(["Phaser",
	  "component/Background",
	  "component/Player",
	  "component/EnemyGroup",
	  "constant/BackgroundConstants",
	  "constant/PlayerConstants",
	  "constant/EnemyConstants",
	  "constant/BulletConstants",
	  "constant/StateConstants"],
		function(Phaser, 
				Background,
				Player,
				EnemyGroup,
				BackgroundConstants,
				PlayerConstants,
				EnemyConstants,
				BulletConstants,
				StateConstants) {

	function GameState() {
		this.bg = new Background();
		this.player = new Player();
		this.enemyGroup = null;
	}

	GameState.prototype.create = function() {
		this.bg.create(this);
		this.player.create(this);
		this.enemyGroup = new EnemyGroup(this);
		this.enemyGroup.initGroup(EnemyConstants.ENEMIES_QUANTITY);
	};

	GameState.prototype.update = function() {
		this.bg.update();
		this.player.update();
		this.enemyGroup.resetEnemy(this.world.width + this.world.randomX, this.world.randomY);
	};

	return GameState;
});