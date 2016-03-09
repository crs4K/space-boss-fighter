define(function(){
	function Background(game) {
		this._game = game;
		this._view = null;
		this._velocity = -0.5;
	}

	Background.prototype.create = function() {
		this._view = this._game.add.tileSprite(0, 0, 800, 600, "bg");
	};

	Background.prototype.update = function() {
		this._view.tilePosition.x += this._velocity;
	};

	return Background;
});