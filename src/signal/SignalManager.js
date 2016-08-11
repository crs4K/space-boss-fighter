define(["Phaser"], function(Phaser) {
	return {
		playerShot: new Phaser.Signal(),
		explode: new Phaser.Signal(),

		playerCollided: new Phaser.Signal(),
		enemyCollided: new Phaser.Signal(),
		bulletCollided: new Phaser.Signal()
	};
});