define(["Phaser",
	  "component/Background",
	  "component/Player",
	  "component/BulletManager",
	  "component/EnemyManager",
	  "component/ExplosionManager",
	  "constant/BackgroundConstants",
	  "constant/PlayerConstants",
	  "constant/EnemyConstants",
	  "constant/BulletConstants",
	  "constant/StateConstants",
	  "controller/CheckCollisionsController"],
		function(Phaser, 
				Background,
				Player,
				BulletManager,
				EnemyManager,
				ExplosionManager,
				BackgroundConstants,
				PlayerConstants,
				EnemyConstants,
				BulletConstants,
				StateConstants,
				CheckCollisionsController) {

	function GameState() {
		this.bg = new Background();
		this.player = new Player();
		this.enemyManager = new EnemyManager();
		this.bulletManager = new BulletManager();
		this.explosionManager = new ExplosionManager();
		this.checkCollisionsController = null;
	}

	GameState.prototype.create = function() {
		this.bg.create(this);
		this.player.create(this);
		this.enemyManager.create(this);
		this.bulletManager.create(this);
		this.explosionManager.create(this);
		this.checkCollisionsController = new CheckCollisionsController(this._getComponentsViews());
	};

	GameState.prototype._getComponentsViews = function() {
		return {
			player: this.player.getSpriteToCheckCollisions(),
			enemies: this.enemyManager.getGroupToCheckCollisions(),
			bullets: this.bulletManager.getGroupToCheckCollisions()
		};
	};

	GameState.prototype.update = function() {
		this.bg.update();
		this.player.update();
		this.enemyManager.update();
		this.checkCollisionsController.checkCollisions(this);
	};

	return GameState;
});