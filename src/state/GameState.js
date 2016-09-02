define(["Phaser",
	  "component/Background",
	  "component/Player",
	  "component/BulletManager",
	  "component/EnemyManager",
	  "component/ExplosionManager",
	  "component/Panel",
	  "constant/BackgroundConstants",
	  "constant/PlayerConstants",
	  "constant/EnemyConstants",
	  "constant/BulletConstants",
	  "constant/StateConstants",
	  "constant/SoundConstants",
	  "signal/SignalManager",
	  "controller/CheckCollisionsController"],
		function(Phaser, 
				Background,
				Player,
				BulletManager,
				EnemyManager,
				ExplosionManager,
				Panel,
				BackgroundConstants,
				PlayerConstants,
				EnemyConstants,
				BulletConstants,
				StateConstants,
				SoundConstants,
				SignalManager,
				CheckCollisionsController) {

	function GameState() {
		this.bg = new Background();
		this.player = new Player();
		this.enemyManager = new EnemyManager();
		this.bulletManager = new BulletManager();
		this.explosionManager = new ExplosionManager();
		this.panel = new Panel();
		this.checkCollisionsController = null;
	}

	GameState.prototype.create = function() {
		this.bg.create(this);
		this.player.create(this);
		this.enemyManager.create(this);
		this.bulletManager.create(this);
		this.explosionManager.create(this);
		this.panel.create(this);
		this.checkCollisionsController = new CheckCollisionsController(this._getComponentsViews());
		SignalManager.playSound.dispatch(SoundConstants.BACKGROUND_MUSIC_ID, true);
		SignalManager.playerDied.add(this._onGameOver, this);
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
		this.checkCollisionsController.execute(this);
	};

	GameState.prototype._onGameOver = function() {
		SignalManager.stopSound.dispatch(SoundConstants.BACKGROUND_MUSIC_ID, true);
		this.game.changeStateSignal.dispatch(StateConstants.GAME_OVER);	
	};

	return GameState;
});