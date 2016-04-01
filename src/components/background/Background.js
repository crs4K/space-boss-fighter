define(["background/BackgroundConstants", "constants/GameConstants"], function(BackgroundConstants, GameConstants){
	function Background() {
		this._view = null;
	}

	Background.prototype.create = function(game) {
		this._view = game.add.tileSprite(BackgroundConstants.X, BackgroundConstants.Y, 
				GameConstants.WIDTH, GameConstants.HEIGHT, BackgroundConstants.ID);
	};

	Background.prototype.update = function() {
		this._view.tilePosition.x += BackgroundConstants.VELOCITY;
	};

	return Background;
});