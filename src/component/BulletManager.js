define(["Phaser",
				"signal/SignalManager",
				"constant/BulletConstants"],
				function(Phaser,
								 SignalManager,
								 BulletConstants) {
	function BulletManager() {
		this._bulletGroup;
	}

	BulletManager.prototype.create = function(game) {
		this._bulletGroup = game.add.group();
		this._bulletGroup.enableBody = true;
		this._bulletGroup.physicsBodyType = Phaser.Physics.ARCADE;
		this._bulletGroup.createMultiple(BulletConstants.BULLETS_QUANTITY, BulletConstants.ID);
		this._bulletGroup.setAll("anchor.x", 0.5);
		this._bulletGroup.setAll("anchor.y", 0.5);
		this._bulletGroup.setAll("outOfBoundsKill", true);
		this._bulletGroup.setAll("checkWorldBounds", true);
		this._addListeners();
	};

	BulletManager.prototype._addListeners = function() {
		SignalManager.playerShot.add(this._resetBullet, this);
		SignalManager.bulletCollided.add(this._removeBullet, this);
	}
	
	BulletManager.prototype._resetBullet = function(x, y) {
		var bullet = this._bulletGroup.getFirstExists(false);
		if(bullet) {
			bullet.reset(x, y);
			bullet.body.velocity.x = BulletConstants.SPEED;
		}
	};

	BulletManager.prototype._removeBullet = function(bullet) {
		bullet.kill();
	};

	BulletManager.prototype.getGroupToCheckCollisions = function() {
		return this._bulletGroup;
	};

	return BulletManager;
});