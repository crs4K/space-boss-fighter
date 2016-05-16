define(["player/PlayerConstants", "bullet/BulletConstants"], function(PlayerConstants, BulletConstants){
	function Player() {
		this._view = null;
		this._keys = null;
		this._bulletPool = null;
	}

	Player.prototype.create = function(game) {
		this._view = game.add.sprite(PlayerConstants.X, PlayerConstants.Y, PlayerConstants.ID);
		this._initBulletPool(game);
		this._createKeys(game);
		
		game.physics.enable(this._view, Phaser.Physics.ARCADE);
		this._initView();
	};

	Player.prototype.update = function() {
		this._move();
	};

	Player.prototype._createKeys = function(game) {
		this._keys = game.input.keyboard.createCursorKeys();
		this._keys.fire = game.input.keyboard.addKey(Phaser.KeyCode.X);
		this._keys.fire.onDown.add(this._shoot, this);
	};

	Player.prototype._initView = function() {
		this._view.body.collideWorldBounds = true;
		this._view.inputEnabled = true;
		this._view.speed = PlayerConstants.SPEED;
		this._view.health = PlayerConstants.MAX_HEALTH;
		this._view.maxHealth = PlayerConstants.MAX_HEALTH;
		this._view.anchor.setTo(0.5, 0.5);
	};

	Player.prototype._initBulletPool = function(game) {
		this._bulletPool = game.add.group();

		this._bulletPool.enableBody = true;
		this._bulletPool.physicsBodyType = Phaser.Physics.ARCADE;

		this._bulletPool.createMultiple(20, BulletConstants.ID);
		this._bulletPool.setAll("anchor.x", 0.5);
		this._bulletPool.setAll("anchor.y", 0.5);
		this._bulletPool.setAll("outOfBoundsKill", true);
		this._bulletPool.setAll("checkWorldBounds", true);
	};

	Player.prototype._move = function() {
		this._view.body.velocity.x = 0;
		this._view.body.velocity.y = 0;

		if(this._keys.up.isDown) {
			this._view.body.velocity.y = -this._view.speed;
		} else if(this._keys.down.isDown) {
			this._view.body.velocity.y = this._view.speed;
		}

		if(this._keys.left.isDown) {
			this._view.body.velocity.x = -this._view.speed;
		} else if(this._keys.right.isDown) {
			this._view.body.velocity.x = this._view.speed;
		}
	};

	Player.prototype._shoot = function() {
		var bullet = this._bulletPool.getFirstExists(false);
		bullet.reset(this._view.x + this._view.width, this._view.y);
		bullet.body.velocity.x = BulletConstants.SPEED;
	};

	return Player;
});