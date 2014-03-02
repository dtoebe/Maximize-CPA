window.onload = function () {
	var maximizeButton = document.getElementById("maximize");
	var closeButton = document.getElementById("close");

	maximizeButton.onclick = function () {
		maximizeWindow();
		if (maximizeButton.innerHTML == "Maximize the window")
			maximizeButton.innerHTML = "Come back to normal size"
		else {
			maximizeButton.innerHTML = "Maximize the window"
		}
	};

	closeButton.onclick = function () {
		chrome.app.window.current().close();
	};
}