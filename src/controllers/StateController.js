define(["Phaser",
		"constants/GameConstants",
		"state/BootState",
		"state/PreloaderState",
		"state/MenuState",
		"state/OptionsState",
		"state/GameState",
		"state/GameOverState"],
		function(Phaser,
				GameConstants,
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
		game.state.start("Boot");

		function onChangeState(state) {
			game.state.start(state);
		}

		function initStates() {
			game.state.add("Boot", BootState);
			game.state.add("Preloader", PreloaderState);
			game.state.add("Menu", MenuState);
			game.state.add("Options", OptionsState);
			game.state.add("Game", GameState);
			game.state.add("GameOver", GameOverState);
		}
	};

	return StateController;
});