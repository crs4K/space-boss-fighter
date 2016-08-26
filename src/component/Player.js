define(["signal/SignalManager",
				"constant/PlayerConstants"],
				function(SignalManager,
								 PlayerConstants){
					
	function Player() {
		this._view = null;
		this._controls = null;
	}

	Player.prototype.create = function(game) {
		this._view = game.add.sprite(PlayerConstants.X, PlayerConstants.Y, PlayerConstants.ID);

		this._createKeys(game);
		
		game.physics.enable(this._view, Phaser.Physics.ARCADE);
		this._initView();
		this._addListeners();
	};

	Player.prototype._createKeys = function(game) {
		this._controls = game.input.keyboard.createCursorKeys();
		this._controls.fire = game.input.keyboard.addKey(Phaser.KeyCode.X);
		this._controls.fire.onDown.add(this._shoot, this);
	};

	Player.prototype._initView = function() {
		this._view.body.collideWorldBounds = true;
		this._view.inputEnabled = true;
		this._view.speed = PlayerConstants.SPEED;
		this._view.health = PlayerConstants.MAX_HEALTH;
		this._view.maxHealth = PlayerConstants.MAX_HEALTH;
		this._view.anchor.setTo(0.5, 0.5);
	};

	Player.prototype._addListeners = function() {
		SignalManager.playerCollided.add(this._hitPlayer, this);
	};

	Player.prototype._hitPlayer = function(damage) {
		if(this._view.health > damage) {
			this._view.damage(damage);
		} else {
			SignalManager.explode.dispatch(this._view.x, this._view.y);
			this._view.kill();
		}
	};

	Player.prototype.update = function() {
		this._move();
	};

	Player.prototype._move = function() {
		this._view.body.velocity.x = 0;
		this._view.body.velocity.y = 0;

		if(this._controls.up.isDown) {
			this._view.body.velocity.y = -this._view.speed;
		} else if(this._controls.down.isDown) {
			this._view.body.velocity.y = this._view.speed;
		}

		if(this._controls.left.isDown) {
			this._view.body.velocity.x = -this._view.speed;
		} else if(this._controls.right.isDown) {
			this._view.body.velocity.x = this._view.speed;
		}
	};

	Player.prototype._shoot = function() {
		SignalManager.playerShot.dispatch(this._view.x + this._view.width, this._view.y);
	};

	Player.prototype.getSpriteToCheckCollisions = function() {
		return this._view;
	};

	return Player;
});