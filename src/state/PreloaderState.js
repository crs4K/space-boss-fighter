define(function() {
	function PreloaderState() {
	}

	PreloaderState.prototype.create = function() {
		console.log("Preloader");
		this.game.changeStateSignal.dispatch("Menu");
	};

	return PreloaderState;
});