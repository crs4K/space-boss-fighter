define(["constant/StateConstants"], function(StateConstants) {
	function MenuState() {
	}

	MenuState.prototype.create = function() {
		this.game.changeStateSignal.dispatch(StateConstants.GAME);
	};

	return MenuState;
});