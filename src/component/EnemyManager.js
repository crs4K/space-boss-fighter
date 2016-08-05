define(["Phaser",
		"constant/EnemyConstants",
		"signal/SignalManager"],
		function(Phaser,
				EnemyConstants,
				SignalManager) {
	function EnemyManager() {
		this._enemyGroup;
	}

	EnemyManager.prototype.create = function(game) {
		this._enemyGroup = game.add.group();
		this._enemyGroup.enableBody = true;
		this._enemyGroup.physicsBodyType = Phaser.Physics.ARCADE;
		this._enemyGroup.createMultiple(EnemyConstants.ENEMIES_QUANTITY, EnemyConstants.ID);
		this._enemyGroup.setAll("anchor.x", 0.5);
		this._enemyGroup.setAll("anchor.y", 0.5);
		this._enemyGroup.setAll("outOfBoundsKill", true);
		this._enemyGroup.setAll("checkWorldBounds", true);
		this._addListeners();
	};

	EnemyManager.prototype._addListeners = function() {
		SignalManager.enemyCollided.add(this._explodeEnemy, this);
	};

	EnemyManager.prototype._explodeEnemy = function(enemy) {
		enemy.kill();
	};
	
	EnemyManager.prototype.resetEnemy = function(game) {
		var enemy = this._enemyGroup.getFirstExists(false);
		if(enemy) {
			enemy.reset(game.world.width + game.world.randomX, game.rnd.integerInRange(enemy.height/2, game.world.height - enemy.height/2));
			enemy.body.velocity.x = -EnemyConstants.SPEED;
		}
	};

	EnemyManager.prototype.getGroupToCheckCollisions = function() {
		return this._enemyGroup;
	};

	return EnemyManager;
});