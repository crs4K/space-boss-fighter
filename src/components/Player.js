define(function(){
	function Player(game) {
		this._game = game;
		this._view = null;
		this._keys = null;

		this._speed = 150;
		this._maxHealth = 3;
	}

	Player.prototype.create = function() {
		this._view = this._game.add.sprite(100, 200, "player");
		
		this._game.physics.enable(this._view, Phaser.Physics.ARCADE);
		this._view.body.collideWorldBounds = true;
		this._view.inputEnabled = true;
		
		this._view.speed = this._speed;
		this._view.health = this._maxHealth;
		this._view.maxHealth = this._maxHealth;

		this._keys = this._game.input.keyboard.createCursorKeys();
	};

	Player.prototype.update = function() {
		addMovement();
	};

	function addMovement() {
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
	}

	return Player;
});