define(["Phaser",
				"signal/SignalManager",
				"constant/BulletConstants"],
				function(Phaser,
								 SignalManager,
								 BulletConstants) {
	function BulletManager() {
		this._bulletGroup = null;
	}

	BulletManager.prototype.create = function(game) {
		this._bulletGroup = game.add.group();
		this._bulletGroup.enableBody = true;
		this._bulletGroup.physicsBodyType = Phaser.Physics.ARCADE;
		this._bulletGroup.createMultiple(BulletConstants.PLAYER_BULLET_AMOUNT, BulletConstants.PLAYER_BULLET_ID);
		this._bulletGroup.createMultiple(BulletConstants.ENEMY_BULLET_AMOUNT, BulletConstants.ENEMY_BULLET_ID);
		this._bulletGroup.setAll("anchor.x", 0.5);
		this._bulletGroup.setAll("anchor.y", 0.5);
		this._bulletGroup.setAll("outOfBoundsKill", true);
		this._bulletGroup.setAll("checkWorldBounds", true);
		this._addListeners();
	};

	BulletManager.prototype._addListeners = function() {
		SignalManager.playerShot.add(this._resetPlayerBullet, this);
		SignalManager.enemyShot.add(this._resetEnemyBullet, this);
		SignalManager.bulletCollided.add(this._removeBullet, this);
	};
	
	BulletManager.prototype._resetPlayerBullet = function(x, y) {
		this._resetBullet(BulletConstants.PLAYER_BULLET_ID, x, y);
	};
	
	BulletManager.prototype._resetEnemyBullet = function(x, y) {
		this._resetBullet(BulletConstants.ENEMY_BULLET_ID, x - BulletConstants.ENEMY_BULLET_WIDTH, y);
	};

	BulletManager.prototype._resetBullet = function(side, x, y) {
		var bullet = this._bulletGroup.getFirstExists(false, false, x, y, side);
		if(bullet) {
			bullet.body.velocity.x = (side == BulletConstants.PLAYER_BULLET_ID)
					? BulletConstants.BULLET_SPEED
					: -BulletConstants.BULLET_SPEED;
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