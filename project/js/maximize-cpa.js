var bounds; // This is the variable who stores the bounds when the window is maximised.

function maximizeWindow () {
	if (navigator.appVersion.indexOf("Win") != -1) { // Windows + Google = bad things.
		if (! (chrome.app.window.current().getBounds().left == 0  
			&& chrome.app.window.current().getBounds().top == 0
			&& chrome.app.window.current().getBounds().width == screen.availWidth
			&& chrome.app.window.current().getBounds().height == screen.availHeight)
			&& ! chrome.app.window.current().isMaximized()) {
			bounds = chrome.app.window.current().getBounds();
			chrome.app.window.current().setBounds({ left: 0, top: 0, width: screen.availWidth, height: screen.availHeight });
		}
		else // Restore the last bounds.
			chrome.app.window.current().setBounds(bounds);
	}
	else {
		if (! chrome.app.window.current().isMaximized()) { // Maximize.
			chrome.app.window.current().maximize();
		}
		else // Restore the last bounds.
			chrome.app.window.current().restore();
	}
}