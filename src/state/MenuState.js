define(["constant/StateConstants",
		"constant/BackgroundConstants",
		"constant/MenuConstants",
		"constant/SoundConstants",
		"component/Background",
		"signal/SignalManager"],
		function(StateConstants,
				BackgroundConstants,
				MenuConstants,
				SoundConstants,
				Background,
				SignalManager) {
	function MenuState() {
		this.bg = new Background();
	}

	MenuState.prototype.create = function() {
		this.bg.create(this);
		var logo = this.add.sprite(this.world.centerX, 0, MenuConstants.LOGO_ID);
		var startButton = this.add.sprite(this.world.centerX, this.world.centerY, MenuConstants.START_BUTTON_ID);

		logo.anchor.setTo(0.5, 0);
		startButton.anchor.setTo(0.5, 0.5);
		startButton.inputEnabled = true;
		startButton.events.onInputDown.add(this._onStartGame, this);
		SignalManager.playSound.dispatch(SoundConstants.MENU_MUSIC_ID, true);
	};

	MenuState.prototype._onStartGame = function() {
		SignalManager.stopSound.dispatch(SoundConstants.MENU_MUSIC_ID, true);
		this.game.changeStateSignal.dispatch(StateConstants.GAME);
	};

	MenuState.prototype.update = function() {
		this.bg.update(this);
	};

	return MenuState;
});