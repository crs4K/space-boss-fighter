define(["constant/StateConstants",
		"constant/BackgroundConstants",
		"constant/PlayerConstants",
		"constant/EnemyConstants",
		"constant/BulletConstants"],
		function(StateConstants,
				BackgroundConstants,
				PlayerConstants,
				EnemyConstants,
				BulletConstants) {
	
	function PreloaderState() {
	}

	PreloaderState.prototype.preload = function() {
		this.load.image(BackgroundConstants.ID, BackgroundConstants.PATH);
		this.load.image(PlayerConstants.ID, PlayerConstants.PATH);
		this.load.image(EnemyConstants.ID, EnemyConstants.PATH);
		this.load.image(BulletConstants.ID, BulletConstants.PATH);
	};

	PreloaderState.prototype.create = function() {
		this.game.changeStateSignal.dispatch(StateConstants.MENU);
	};

	return PreloaderState;
});