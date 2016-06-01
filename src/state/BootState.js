define(["constant/StateConstants"], function(StateConstants) {
	function BootState() {
	}

	BootState.prototype.create = function() {
		this.game.changeStateSignal.dispatch(StateConstants.PRELOADER);
	};

	return BootState;
});