var Background = function(game) {
	var _game = game;
	var _view;
	var _velocity = -0.5;

	function create() {
		_view = _game.add.tileSprite(0, 0, 800, 600, "bg");
	}

	function update() {
		_view.tilePosition.x += _velocity;
	}

	return {
		create: create,
		update: update
	};
};