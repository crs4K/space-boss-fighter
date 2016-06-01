define(["constants/StateConstants"], function(StateConstants) {
	function PreloaderState() {
	}

	PreloaderState.prototype.create = function() {
		this.game.changeStateSignal.dispatch(StateConstants.MENU);
	};

	return PreloaderState;
});