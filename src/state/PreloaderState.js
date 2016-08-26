define(["constant/StateConstants",
		"constant/BackgroundConstants",
		"constant/PlayerConstants",
		"constant/EnemyConstants",
		"constant/BulletConstants",
		"constant/ExplosionConstants",
		"constant/PanelConstants"],
		function(StateConstants,
				BackgroundConstants,
				PlayerConstants,
				EnemyConstants,
				BulletConstants,
				ExplosionConstants,
				PanelConstants) {
	
	function PreloaderState() {
	}

	PreloaderState.prototype.preload = function() {
		this.load.image(BackgroundConstants.ID, BackgroundConstants.PATH);
		this.load.image(PlayerConstants.ID, PlayerConstants.PATH);
		this.load.image(EnemyConstants.ID, EnemyConstants.PATH);
		this.load.image(BulletConstants.PLAYER_BULLET_ID, BulletConstants.PLAYER_BULLET_PATH);
		this.load.image(BulletConstants.ENEMY_BULLET_ID, BulletConstants.ENEMY_BULLET_PATH);
		this.load.spritesheet(ExplosionConstants.ID, ExplosionConstants.PATH, ExplosionConstants.FRAME_WIDTH, ExplosionConstants.FRAME_HEIGHT);
		this.load.image(PanelConstants.LIFE_ID, PanelConstants.LIFE_PATH);
		this.load.image(PanelConstants.CROSS_ID, PanelConstants.CROSS_PATH);
	};

	PreloaderState.prototype.create = function() {
		this.game.changeStateSignal.dispatch(StateConstants.MENU);
	};

	return PreloaderState;
});