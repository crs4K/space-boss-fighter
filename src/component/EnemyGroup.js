define(["Phaser", "constant/EnemyConstants"], function(Phaser, EnemyConstants) {
	function EnemyGroup(game) {
		Phaser.Group.call(this, game);
	}

	EnemyGroup.prototype = Object.create(Phaser.Group.prototype);
	EnemyGroup.prototype.constructor = EnemyGroup;

	EnemyGroup.prototype.initGroup = function(quantity) {
		this.enableBody = true;
		this.physicsBodyType = Phaser.Physics.ARCADE;
		this.createMultiple(quantity, EnemyConstants.ID);
		this.setAll("anchor.x", 0.5);
		this.setAll("anchor.y", 0.5);
		this.setAll("outOfBoundsKill", true);
		this.setAll("checkWorldBounds", true);
	};
	
	EnemyGroup.prototype.resetEnemy = function(x, y) {
		var enemy = this.getFirstExists(false);
		if(enemy) {
			enemy.reset(x, y);
			enemy.body.velocity.x = -EnemyConstants.SPEED;
		}
	};

	return EnemyGroup;
});