define(["constant/StateConstants",
		"constant/MenuConstants",
		"component/Background"],
		function(StateConstants,
				MenuConstants,
				Background) {
	function GameOverState() {
		this.bg = new Background();
	}

	GameOverState.prototype.create = function() {
		this.bg.create(this);
		var gameOver = this.add.sprite(this.world.centerX, this.world.centerY, MenuConstants.GAME_OVER_ID);
		var text = this.add.text(this.world.centerX, this.world.centerY, StateConstants.GAME_OVER_TEXT,
				{fill: StateConstants.GAME_OVER_TEXT_COLOR,});

		gameOver.anchor.setTo(0.5, 1);
		text.anchor.setTo(0.5, 0);

		this.input.onDown.add(this._goToMenu, this);
	};

	GameOverState.prototype._goToMenu = function() {
		this.game.changeStateSignal.dispatch(StateConstants.MENU);	
	};

	GameOverState.prototype.update = function() {
		this.bg.update(this);
	};

	return GameOverState;
});