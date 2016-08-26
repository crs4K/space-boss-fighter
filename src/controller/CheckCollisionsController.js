define(["signal/SignalManager", "constant/EnemyConstants"], function(SignalManager, EnemyConstants) {
	function CheckCollisionsController(components) {
		this.player = components.player;
		this.enemies = components.enemies;
		this.bullets = components.bullets;
	}

	CheckCollisionsController.prototype.execute = function(game) {
		game.physics.arcade.overlap(this.player, this.enemies, _playerWithEnemyCollided, null, this);
		game.physics.arcade.overlap(this.player, this.bullets, _bulletWithPlayerCollided, null, this);
		game.physics.arcade.overlap(this.bullets, this.enemies, _bulletWithEnemyCollided, null, this);
	};

	function _playerWithEnemyCollided(player, enemy) {
		SignalManager.playerCollided.dispatch(EnemyConstants.DAMAGE);
		SignalManager.enemyCollided.dispatch(enemy);
	}

	function _bulletWithPlayerCollided(player, bullet) {
		SignalManager.playerCollided.dispatch(EnemyConstants.DAMAGE);
		SignalManager.bulletCollided.dispatch(bullet);
	}

	function _bulletWithEnemyCollided(bullet, enemy) {
		SignalManager.bulletCollided.dispatch(bullet);
		SignalManager.enemyCollided.dispatch(enemy);
	}

	return CheckCollisionsController;
});