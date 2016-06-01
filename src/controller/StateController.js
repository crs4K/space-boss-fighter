define(["Phaser",
		"constant/GameConstants",
		"constant/StateConstants",
		"state/BootState",
		"state/PreloaderState",
		"state/MenuState",
		"state/OptionsState",
		"state/GameState",
		"state/GameOverState"],
		function(Phaser,
				GameConstants,
				StateConstants,
				BootState,
				PreloaderState,
				MenuState,
				OptionsState,
				GameState,
				GameOverState) {

	function StateController() {}

	StateController.execute = function() {
		var game = new Phaser.Game(GameConstants.WIDTH, GameConstants.HEIGHT, Phaser.CANVAS);
		
		initStates();
		game.changeStateSignal = new Phaser.Signal();
		game.changeStateSignal.add(onChangeState, this);
		game.state.start(StateConstants.BOOT);

		function onChangeState(state) {
			game.state.start(state);
		}

		function initStates() {
			game.state.add(StateConstants.BOOT, BootState);
			game.state.add(StateConstants.PRELOADER, PreloaderState);
			game.state.add(StateConstants.MENU, MenuState);
			game.state.add(StateConstants.OPTIONS, OptionsState);
			game.state.add(StateConstants.GAME, GameState);
			game.state.add(StateConstants.GAME_OVER, GameOverState);
		}
	};

	return StateController;
});