define(["component/Player", "base/Sprite", "base/Keyboard"], function(Player, Sprite, Keyboard) {
	function PlayerMock() {
		Player.call(this);
		this._view = new Sprite();
		this._controls = new Keyboard();
	}
	PlayerMock.prototype = Object.create(Player.prototype);
	PlayerMock.prototype.constructor = PlayerMock;

	PlayerMock.prototype.initView = function() {
		this._initView();
	};

	Object.defineProperty(PlayerMock.prototype, "view", {
		get: function() {
			return this._view;
		}
	});

	Object.defineProperty(PlayerMock.prototype, "controls", {
		get: function() {
			return this._controls;
		}
	});

	return PlayerMock;
});