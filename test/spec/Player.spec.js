define(["mock/PlayerMock", "player/PlayerConstants"], function(PlayerMock, PlayerConstants) {
	describe("Player", function() {
		var player = new PlayerMock();

		it("has initialized view", function() {
			player._initView();

			expect(player._view.body.collideWorldBounds).toBe(true);
			expect(player._view.inputEnabled).toBe(true);
			expect(player._view.speed).toEqual(PlayerConstants.SPEED);
			expect(player._view.health).toEqual(PlayerConstants.MAX_HEALTH);
			expect(player._view.maxHealth).toEqual(PlayerConstants.MAX_HEALTH);
		});

		it("isn't moving if nothing is pressed", function() {
			player._move();

			expect(player._view.body.velocity.x).toEqual(0);
			expect(player._view.body.velocity.y).toEqual(0);
		});

		describe("is moving", function() {
			afterEach(function() {
				player._keys.up.isDown = false;
				player._keys.down.isDown = false;
				player._keys.left.isDown = false;
				player._keys.right.isDown = false;
			});

			it("up when up key is pressed", function() {
				player._keys.up.isDown = true;
				player._move();

				expect(player._view.body.velocity.y).toEqual(-PlayerConstants.SPEED);
			});

			it("down when down key is pressed", function() {
				player._keys.down.isDown = true;
				player._move();

				expect(player._view.body.velocity.y).toEqual(PlayerConstants.SPEED);
			});

			it("left when left key is pressed", function() {
				player._keys.left.isDown = true;
				player._move();

				expect(player._view.body.velocity.x).toEqual(-PlayerConstants.SPEED);
			});

			it("right when right key is pressed", function() {
				player._keys.right.isDown = true;
				player._move();

				expect(player._view.body.velocity.x).toEqual(PlayerConstants.SPEED);
			});
		});
	});
});