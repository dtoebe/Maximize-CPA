chrome.app.runtime.onLaunched.addListener(
	function() {
		chrome.app.window.create("index.html", {
		    bounds: {
		      	width: Math.round(screen.width * 0.3),
		      	height: Math.round(screen.height * 0.3)
		    },
		    minWidth: 400,
		    minHeight: 220,
		    frame : "none"
		});
	}
);