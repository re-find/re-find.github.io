var el = document.getElementsByTagName('body')[0];
el.innerHTML = el.innerHTML.replace(/«/g, '<span class="slaquo"> </span> <span class="hlaquo"> «</span>')
el.innerHTML = el.innerHTML.replace(/\(/g, '<span class="sbrace"> </span> <span class="hbrace"> (</span>')

window.addEventListener('load', function(e) {
	window.applicationCache.addEventListener('updateready', function(e) {
		if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
			window.location.reload();
		}
	}, false);
}, false);