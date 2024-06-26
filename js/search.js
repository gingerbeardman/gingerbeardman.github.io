document.addEventListener("DOMContentLoaded", function() {
	MSn = (t, e) => {
		return e.indexOf(t)
	};
	
	const e = document.getElementById("search-results");
	let results = ""
	if (null != e) {
		const t = new XMLHttpRequest;
		const query = window.location.search.substr(3).replaceAll('+','-')
		if ( query != "" && document.getElementById("query") ) {
			document.getElementById("query").value = query
			t.onload = () => {
				if (200 === t.status) {
					const n = t.responseXML,
						i = Array.from(n.querySelectorAll("urlset > url > loc")).map((t => t.textContent)),
						r = new URL(((t, e) => {
							let n = 1 / 0,
								i = 0;
							for (let r = 0; r < e.length; r++) {
								const partial = e[r];
								if ( e[r].indexOf('page/') == -1 && e[r].indexOf('tag/') == -1 ) {
									const s = MSn(t, partial);
									if (s != -1) {
										link = new URL(e[r])
										if ( link.pathname != "/" && link.pathname.indexOf(".html") == -1 ) {
											results = `<li><a href="${link.href}">${link.pathname}</a></li>` + results
										}
									}
								}
							}
							return e[i]
						})(query.toLowerCase(), i));
					if ( results != "" ) {
						e.innerHTML = `<p>Results (most recent first):</p><ul>${results}</ul>`
						$('#query').focus();
						document.title = 'Searching "'+ query +'" ⌘I  Get Info';
					} else {
						e.innerHTML = "<p>Zero, zilch, zip, nada, nothing.</p><p><a href=\"https://www.google.co.uk/search?q="+ encodeURIComponent(query + " site:blog.gingerbeardman.com") +"\">Search the blog with the same query using Google</a>.</p>"
					}
				} else
					e.innerHTML = 'Try the index <a href="/">/</a>'
			},
			t.open("GET", `${window.location.protocol}//${window.location.host}/sitemap.xml`),
			t.send()
		}
	}
});
