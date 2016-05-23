define(["mock/BackgroundMock", "background/BackgroundConstants"], function(BackgroundMock, BackgroundConstants) {
	describe("Background", function() {
		var bg = new BackgroundMock();

		it("is moving on update", function() {
			bg.update();
			expect(bg.view.tilePosition.x).toEqual(BackgroundConstants.X + BackgroundConstants.VELOCITY);
		});
	});
});