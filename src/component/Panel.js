define(["constant/PanelConstants",
		"constant/PlayerConstants",
		"signal/SignalManager"],
		function(PanelConstants,
				PlayerConstants,
				SignalManager) {

	function Panel() {
		this.health = null;
		this.points = null;
	}

	Panel.prototype.create = function(game) {
		game.add.sprite(PanelConstants.LIFE_X, PanelConstants.LIFE_Y, PanelConstants.LIFE_ID);
		game.add.sprite(PanelConstants.CROSS_X, PanelConstants.CROSS_Y, PanelConstants.CROSS_ID);

		this.health = game.add.text(PanelConstants.HEALTH_X, PanelConstants.HEALTH_Y, PlayerConstants.MAX_HEALTH,
				PanelConstants.TEXT_STYLE);
		this.points = game.add.text(PanelConstants.POINTS_X, PanelConstants.POINTS_Y, 0,
				PanelConstants.TEXT_STYLE);
		
		this._addListeners();
	};

	Panel.prototype._addListeners = function() {
		SignalManager.updateHealth.add(this._updateHealth, this);
		SignalManager.updatePoints.add(this._updatePoints, this);
	};

	Panel.prototype._updateHealth = function(health) {
		this.health.text = health;
	};

	Panel.prototype._updatePoints = function() {
		this.points.text++;
	};

	return Panel;
});