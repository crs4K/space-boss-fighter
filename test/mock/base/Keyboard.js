define(function() {
	function Keyboard() {
		this.up = {isDown: false};
		this.down = {isDown: false};
		this.left = {isDown: false};
		this.right = {isDown: false};
	}

	return Keyboard;
});