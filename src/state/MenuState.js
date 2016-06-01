define(function() {
	function MenuState() {
	}

	MenuState.prototype.create = function() {
		console.log("Menu");
		this.game.changeStateSignal.dispatch("Game");
	};

	return MenuState;
});