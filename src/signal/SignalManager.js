define(["Phaser"], function(Phaser) {
	return {
		playerShot: new Phaser.Signal(),
		enemyShot: new Phaser.Signal(),
		explode: new Phaser.Signal(),

		playerCollided: new Phaser.Signal(),
		enemyCollided: new Phaser.Signal(),
		bulletCollided: new Phaser.Signal(),

		updateHealth: new Phaser.Signal(),
		updatePoints: new Phaser.Signal(),

		playSound: new Phaser.Signal(),
		stopSound: new Phaser.Signal()
	};
});