define(["Phaser", "constant/EnemyConstants"], function(Phaser, EnemyConstants) {
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
	};

	EnemyManager.prototype.update = function() {
		
	};
	
	EnemyManager.prototype.resetEnemy = function(x, y) {
		var enemy = this._enemyGroup.getFirstExists(false);
		if(enemy) {
			enemy.reset(x, y);
			enemy.body.velocity.x = -EnemyConstants.SPEED;
		}
	};

	return EnemyManager;
});