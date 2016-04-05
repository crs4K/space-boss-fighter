define(["player/Player", "base/Sprite", "base/Keyboard"], function(Player, Sprite, Keyboard) {
	function PlayerMock() {
		Player.call(this);
		this._view = new Sprite();
		this._keys = new Keyboard();
	}
	PlayerMock.prototype = Object.create(Player.prototype);

	return PlayerMock;
});