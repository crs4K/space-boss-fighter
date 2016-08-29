define(["signal/SignalManager", "constant/SoundConstants"], function(SignalManager, SoundConstants) {
	function SoundManager() {
		this._sounds = {};
	}

	SoundManager.prototype.create = function(game) {
		this._sounds.backgroundMusic = game.add.sound(SoundConstants.BACKGROUND_MUSIC_ID);
		this._sounds.menuMusic = game.add.sound(SoundConstants.MENU_MUSIC_ID);
		this._sounds.shotSound = game.add.sound(SoundConstants.SHOT_ID);
		this._sounds.hitSound = game.add.sound(SoundConstants.HIT_ID);
		this._sounds.explosionSound = game.add.sound(SoundConstants.EXPLOSION_ID);
		this._sounds.loseSound = game.add.sound(SoundConstants.LOSE_ID);
		this._sounds.clickSound = game.add.sound(SoundConstants.CLICK_ID);
		this._addListeners();
	};

	SoundManager.prototype._addListeners = function() {
		SignalManager.playSound.add(this._play, this);
		SignalManager.stopSound.add(this._stop, this);
	};

	SoundManager.prototype._play = function(soundID, loop) {
		var sound = this._getSoundById(soundID);
		console.log(sound);
			console.log(sound.isDecoded);
		if(sound.isDecoded) {
			if(sound.isPlaying) {
				sound.stop();
			}
			sound.loop = loop;
			sound.play();
		}
	};

	SoundManager.prototype._stop = function(soundID) {
		var sound = this._getSoundById(soundID);
		sound.stop();
	};

	SoundManager.prototype._getSoundById = function(soundID) {
		for(var sound in this._sounds) {
			if(this._sounds[sound].key === soundID) {
				return this._sounds[sound];
			}
		}
	};

	return SoundManager;
});