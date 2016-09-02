define(["constant/StateConstants",
		"constant/PlayerConstants",
		"constant/BulletConstants"],
		function(StateConstants,
				PlayerConstants,
				BulletConstants) {
	function BootState() {
	}

	BootState.prototype.preload = function() {
		this.load.image(PlayerConstants.ID, PlayerConstants.PATH);
		this.load.image(BulletConstants.PLAYER_BULLET_ID, BulletConstants.PLAYER_BULLET_PATH);
	};

	BootState.prototype.create = function() {
		this.game.changeStateSignal.dispatch(StateConstants.PRELOADER);
	};

	return BootState;
});