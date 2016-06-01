define(["Phaser", "constant/BulletConstants"], function(Phaser, BulletConstants) {
	function BulletGroup(game) {
		Phaser.Group.call(this, game);
	}

	BulletGroup.prototype = Object.create(Phaser.Group.prototype);
	BulletGroup.prototype.constructor = BulletGroup;

	BulletGroup.prototype.initGroup = function(quantity) {
		this.enableBody = true;
		this.physicsBodyType = Phaser.Physics.ARCADE;
		this.createMultiple(quantity, BulletConstants.ID);
		this.setAll("anchor.x", 0.5);
		this.setAll("anchor.y", 0.5);
		this.setAll("outOfBoundsKill", true);
		this.setAll("checkWorldBounds", true);
	};
	
	BulletGroup.prototype.resetBullet = function(x, y) {
		var bullet = this.getFirstExists(false);
		if(bullet) {
			bullet.reset(x, y);
			bullet.body.velocity.x = BulletConstants.SPEED;
		}
	};

	return BulletGroup;
});