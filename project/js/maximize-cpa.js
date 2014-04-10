var bounds; // This is the variable who stores the bounds when the window is maximised.

function maximizeWindow () {
	if (navigator.appVersion.indexOf("Win") != -1) {
		if (chrome.app.window.current().getBounds().width < screen.availWidth || 
			chrome.app.window.current().getBounds().height < screen.availHeight) {
			bounds = chrome.app.window.current().getBounds();
			chrome.app.window.current().setBounds({
				left: screen.availLeft, 
				top: screen.availTop, 
			 	width: screen.availWidth, 
			 	height: screen.availHeight 
			});
		}
		else { // Restore the last bounds.
			if (bounds != undefined)
				chrome.app.window.current().setBounds(bounds);
			else
				chrome.app.window.current().setBounds({ // Default "normal" bounds.
					left: ((screen.availWidth - Math.round(screen.width * 0.85)) / 2), 
					top: ((screen.availHeight - Math.round(screen.height * 0.85)) / 2), 
					width: Math.round(screen.width * 0.85), 
					height: Math.round(screen.height * 0.85) 
				});
		}
	}
	else {
		if (! chrome.app.window.current().isMaximized()) // Maximize.
			chrome.app.window.current().maximize();
		else // Restore the last bounds.
			chrome.app.window.current().restore();
	}
}