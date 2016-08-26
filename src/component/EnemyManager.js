define(["Phaser",
		"constant/EnemyConstants",
		"signal/SignalManager"],
		function(Phaser,
				EnemyConstants,
				SignalManager) {
	function EnemyManager() {
		this._enemyGroup = null;
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
	
	EnemyManager.prototype.update = function() {
		var enemy = this._enemyGroup.getFirstExists(false);
		if(enemy) {
			enemy.reset(enemy.game.world.width + enemy.game.world.randomX, enemy.game.rnd.integerInRange(enemy.height/2, enemy.game.world.height - enemy.height/2));
			enemy.body.velocity.x = -EnemyConstants.SPEED;
		}
	};

	EnemyManager.prototype._addListeners = function() {
		SignalManager.enemyCollided.add(this._explodeEnemy, this);
	};

	EnemyManager.prototype._explodeEnemy = function(enemy) {
		SignalManager.explode.dispatch(enemy.x, enemy.y);
		enemy.kill();
	};

	EnemyManager.prototype.getGroupToCheckCollisions = function() {
		return this._enemyGroup;
	};

	return EnemyManager;
});