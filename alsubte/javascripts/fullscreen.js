var button = document.getElementById("fullscreenButton");
var area = document.getElementById("fullscreen");

button.onclick = function() {

	if (MetodoPrefijo(document, "FullScreen") || MetodoPrefijo(document, "IsFullScreen")) {
		MetodoPrefijo(document, "CancelFullScreen");
	}
	else {
		MetodoPrefijo(area, "RequestFullScreen");
	}

}

var pfx = ["webkit", "moz", "ms", "o", ""];
function MetodoPrefijo(obj, method) {
	
	var p = 0, m, t;
	while (p < pfx.length && !obj[m]) {
		m = method;
		if (pfx[p] == "") {
			m = m.substr(0,1).toLowerCase() + m.substr(1);
		}
		m = pfx[p] + m;
		t = typeof obj[m];
		if (t != "undefined") {
			pfx = [pfx[p]];
			return (t == "function" ? obj[m]() : obj[m]);
		}
		p++;
	}

}