var Player = function(game) {
	var _game = game;
	var _view;
	var _keys;

	var _speed = 150;
	var _maxHealth = 3;

	function create() {
		_view = _game.add.sprite(100, 200, "player");
		
		_game.physics.enable(_view, Phaser.Physics.ARCADE);
		_view.body.collideWorldBounds = true;
		_view.inputEnabled = true;
		
		_view.speed = _speed;
		_view.health = _maxHealth;
		_view.maxHealth = _maxHealth;

		_keys = _game.input.keyboard.createCursorKeys();
	}

	function update() {
		addMovement();
	}

	function addMovement() {
		if(_keys.up.isDown) {
			_view.body.velocity.y = -_view.speed;
		} else if(_keys.down.isDown) {
			_view.body.velocity.y = _view.speed;
		} else {
			_view.body.velocity.y = 0;
		}

		 if(_keys.left.isDown) {
			_view.body.velocity.x = -_view.speed;
		} else if(_keys.right.isDown) {
			_view.body.velocity.x = _view.speed;
		} else {
			_view.body.velocity.x = 0;
		}
	}

	return {
		create: create,
		update: update
	};
};