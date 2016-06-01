define(function() {
	function BootState() {
	}

	BootState.prototype.create = function() {
		console.log("Boot");
		this.game.changeStateSignal.dispatch("Preloader");
	};

	return BootState;
});