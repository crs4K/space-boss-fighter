define(["constant/ExplosionConstants",
		"signal/SignalManager"], 
		function(ExplosionConstants,
				SignalManager) {
	function ExplosionManager() {
		this._explosionGroup = null;
	}

	ExplosionManager.prototype.create = function(game) {
		this._explosionGroup = game.add.group();
		this._explosionGroup.createMultiple(ExplosionConstants.EXPLOSIONS_QUANTITY, ExplosionConstants.ID);
		this._explosionGroup.setAll("anchor.x", 0.5);
		this._explosionGroup.setAll("anchor.y", 0.5);
		this._addListeners();
	};


	ExplosionManager.prototype._addListeners = function() {
		SignalManager.explode.add(this._resetExplosion, this);
	};

	ExplosionManager.prototype._resetExplosion = function(obj) {
		var explosion = this._explosionGroup.getFirstExists(false);
		if(explosion) {
			explosion.animations.add(ExplosionConstants.EXPLOSION_ANIMATION);
			explosion.reset(obj.x, obj.y);
			explosion.animations.play(ExplosionConstants.EXPLOSION_ANIMATION, null, false, true);
			obj.kill();
		}
	};

	return ExplosionManager;
});