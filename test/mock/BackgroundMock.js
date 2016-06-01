define(["component/Background", "base/TileSprite"], function(Background, TileSprite) {
	function BackgroundMock() {
		Background.call(this);
		this._view = new TileSprite();
	}
	BackgroundMock.prototype = Object.create(Background.prototype);
	BackgroundMock.prototype.constructor = BackgroundMock;

	Object.defineProperty(BackgroundMock.prototype, "view", {
		get: function() {
			return this._view;
		}
	});

	return BackgroundMock;
});