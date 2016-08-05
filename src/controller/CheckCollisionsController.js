define(["signal/SignalManager"], function(SignalManager) {
	function CheckCollisionsController(components) {
		this.player = components.player;
		this.enemies = components.enemies;
		this.bullets = components.bullets;
	}

	CheckCollisionsController.prototype.checkCollisions = function(game) {
		game.physics.arcade.overlap(this.player, this.enemies, _playerWithEnemyCollided, null, this);
		game.physics.arcade.overlap(this.bullets, this.enemies, _bulletWithEnemyCollided, null, this);
	};

	function _playerWithEnemyCollided(player, enemy) {
		SignalManager.playerCollided.dispatch();
		SignalManager.enemyCollided.dispatch(enemy);
	}

	function _bulletWithEnemyCollided(bullet, enemy) {
		SignalManager.bulletCollided.dispatch(bullet);
		SignalManager.enemyCollided.dispatch(enemy);
	}

	return CheckCollisionsController;
});