define(function() {
	function Sprite() {
		this.inputEnabled = false;
		this.health = 1;
		this.maxHealth = 100;
		this.speed = 0;
		this.body = {
			collideWorldBounds: false,
			velocity: {
				x: 0,
				y: 0
			}
		};
		this.anchor = {
			setTo: function() {}
		};
	}

	return Sprite;
});