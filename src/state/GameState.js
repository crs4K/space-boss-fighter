define(["Phaser",
	  "component/Background",
	  "component/Player",
	  "component/BulletManager",
	  "component/EnemyManager",
	  "constant/BackgroundConstants",
	  "constant/PlayerConstants",
	  "constant/EnemyConstants",
	  "constant/BulletConstants",
	  "constant/StateConstants"],
		function(Phaser, 
				Background,
				Player,
				BulletManager,
				EnemyManager,
				BackgroundConstants,
				PlayerConstants,
				EnemyConstants,
				BulletConstants,
				StateConstants) {

	function GameState() {
		this.bg = new Background();
		this.player = new Player();
		this.bulletManager = new BulletManager();
		this.enemyManager = new EnemyManager();
	}

	GameState.prototype.create = function() {
		this.bg.create(this);
		this.player.create(this);
		this.bulletManager.create(this);
		this.enemyManager.create(this);
	};

	GameState.prototype.update = function() {
		this.bg.update();
		this.player.update();
		this.enemyManager.resetEnemy(this.world.width + this.world.randomX, this.world.randomY);
	};

	return GameState;
});