define(["constant/StateConstants",
		"constant/BackgroundConstants",
		"constant/PlayerConstants",
		"constant/EnemyConstants",
		"constant/BulletConstants",
		"constant/ExplosionConstants",
		"constant/PanelConstants",
		"constant/SoundConstants",
		"component/SoundManager"],
		function(StateConstants,
				BackgroundConstants,
				PlayerConstants,
				EnemyConstants,
				BulletConstants,
				ExplosionConstants,
				PanelConstants,
				SoundConstants,
				SoundManager) {
	
	function PreloaderState() {
		this.soundManager = new SoundManager();
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

		this.load.audio(SoundConstants.BACKGROUND_MUSIC_ID, SoundConstants.BACKGROUND_MUSIC_PATH);
		this.load.audio(SoundConstants.MENU_MUSIC_ID, SoundConstants.MENU_MUSIC_PATH);
		this.load.audio(SoundConstants.SHOT_ID, SoundConstants.SHOT_PATH);
		this.load.audio(SoundConstants.HIT_ID, SoundConstants.HIT_PATH);
		this.load.audio(SoundConstants.EXPLOSION_ID, SoundConstants.EXPLOSION_PATH);
		this.load.audio(SoundConstants.LOSE_ID, SoundConstants.LOSE_PATH);
		this.load.audio(SoundConstants.CLICK_ID, SoundConstants.CLICK_PATH);
	};

	PreloaderState.prototype.create = function() {
		this.soundManager.create(this);
		this.sound.setDecodedCallback([SoundConstants.BACKGROUND_MUSIC_ID,
				SoundConstants.MENU_MUSIC_ID,
				SoundConstants.SHOT_ID,
				SoundConstants.HIT_ID,
				SoundConstants.EXPLOSION_ID,
				SoundConstants.LOSE_ID,
				SoundConstants.CLICK_ID], this._changeState, this);
	};

	PreloaderState.prototype._changeState = function() {
		this.game.changeStateSignal.dispatch(StateConstants.MENU);
	};

	return PreloaderState;
});