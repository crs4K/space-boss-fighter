define(["mock/PlayerMock", "constant/PlayerConstants"], function(PlayerMock, PlayerConstants) {
	describe("Player", function() {
		var player = new PlayerMock();

		it("has initialized view", function() {
			player.initView();

			expect(player.view.body.collideWorldBounds).toBe(true);
			expect(player.view.inputEnabled).toBe(true);
			expect(player.view.speed).toEqual(PlayerConstants.SPEED);
			expect(player.view.health).toEqual(PlayerConstants.MAX_HEALTH);
			expect(player.view.maxHealth).toEqual(PlayerConstants.MAX_HEALTH);
		});

		it("isn't moving if nothing is pressed", function() {
			player.update();

			expect(player.view.body.velocity.x).toEqual(0);
			expect(player.view.body.velocity.y).toEqual(0);
		});

		describe("is moving", function() {
			afterEach(function() {
				player.keys.up.isDown = false;
				player.keys.down.isDown = false;
				player.keys.left.isDown = false;
				player.keys.right.isDown = false;
			});

			it("up when up key is pressed", function() {
				player.keys.up.isDown = true;
				player.update();

				expect(player.view.body.velocity.y).toEqual(-PlayerConstants.SPEED);
			});

			it("down when down key is pressed", function() {
				player.keys.down.isDown = true;
				player.update();

				expect(player.view.body.velocity.y).toEqual(PlayerConstants.SPEED);
			});

			it("left when left key is pressed", function() {
				player.keys.left.isDown = true;
				player.update();

				expect(player.view.body.velocity.x).toEqual(-PlayerConstants.SPEED);
			});

			it("right when right key is pressed", function() {
				player.keys.right.isDown = true;
				player.update();

				expect(player.view.body.velocity.x).toEqual(PlayerConstants.SPEED);
			});
		});
	});
});