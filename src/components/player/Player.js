define(["PlayerConstants"], function(PlayerConstants){
	function Player() {
		this._view = null;
		this._keys = null;
	}

	Player.prototype.create = function(game) {
		this._view = game.add.sprite(PlayerConstants.X, PlayerConstants.Y, PlayerConstants.ID);
		
		game.physics.enable(this._view, Phaser.Physics.ARCADE);
		this._view.body.collideWorldBounds = true;
		this._view.inputEnabled = true;
		
		this._view.speed = PlayerConstants.SPEED;
		this._view.health = PlayerConstants.MAX_HEALTH;
		this._view.maxHealth = PlayerConstants.MAX_HEALTH;

		this._keys = game.input.keyboard.createCursorKeys();
	};

	Player.prototype.update = function() {
		this._addMovement();
	};

	Player.prototype._addMovement = function() {
		if(this._keys.up.isDown) {
			this._view.body.velocity.y = -this._view.speed;
		} else if(this._keys.down.isDown) {
			this._view.body.velocity.y = this._view.speed;
		} else {
			this._view.body.velocity.y = 0;
		}

		 if(this._keys.left.isDown) {
			this._view.body.velocity.x = -this._view.speed;
		} else if(this._keys.right.isDown) {
			this._view.body.velocity.x = this._view.speed;
		} else {
			this._view.body.velocity.x = 0;
		}
	};

	return Player;
});