define(["BackgroundConstants", "GameConstants"], function(BackgroundConstants, GameConstants){
	function Background(game) {
		this._game = game;
		this._view = null;
	}

	Background.prototype.create = function() {
		this._view = this._game.add.tileSprite(BackgroundConstants.X, BackgroundConstants.Y, 
				GameConstants.WIDTH, GameConstants.HEIGHT, BackgroundConstants.ID);
	};

	Background.prototype.update = function() {
		this._view.tilePosition.x += BackgroundConstants.VELOCITY;
	};

	return Background;
});