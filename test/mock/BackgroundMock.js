define(["background/Background", "base/TileSprite"], function(Background, TileSprite) {
	function BackgroundMock() {
		Background.call(this);
		this._view = new TileSprite();
	}
	BackgroundMock.prototype = Object.create(Background.prototype);

	return BackgroundMock;
});