const En = new Uint32Array(65536),
Sn = (t, e) => {
	if (t.length < e.length) {
		const n = e;
		e = t,
		t = n
	}
	return 0 === e.length ? t.length : t.length <= 32 ? ((t, e) => {
		const n = t.length,
			i = e.length,
			r = 1 << n - 1;
		let s = -1,
			o = 0,
			a = n,
			c = n;
		for (; c--;)
			En[t.charCodeAt(c)] |= 1 << c;
		for (c = 0; c < i; c++) {
			let t = En[e.charCodeAt(c)];
			const n = t | o;
			t |= (t & s) + s ^ s,
			o |= ~(t | s),
			s &= t,
			o & r && a++,
			s & r && a--,
			o = o << 1 | 1,
			s = s << 1 | ~(n | o),
			o &= n
		}
		for (c = n; c--;)
			En[t.charCodeAt(c)] = 0;
		return a
	})(t, e) : ((t, e) => {
		const n = e.length,
			i = t.length,
			r = [],
			s = [],
			o = Math.ceil(n / 32),
			a = Math.ceil(i / 32);
		for (let t = 0; t < o; t++)
			s[t] = -1,
			r[t] = 0;
		let c = 0;
		for (; c < a - 1; c++) {
			let o = 0,
				a = -1;
			const l = 32 * c,
				u = Math.min(32, i) + l;
			for (let e = l; e < u; e++)
				En[t.charCodeAt(e)] |= 1 << e;
			for (let t = 0; t < n; t++) {
				const n = En[e.charCodeAt(t)],
					i = s[t / 32 | 0] >>> t & 1,
					c = r[t / 32 | 0] >>> t & 1,
					l = n | o,
					u = ((n | c) & a) + a ^ a | n | c;
				let h = o | ~(u | a),
					d = a & u;
				h >>> 31 ^ i && (s[t / 32 | 0] ^= 1 << t),
				d >>> 31 ^ c && (r[t / 32 | 0] ^= 1 << t),
				h = h << 1 | i,
				d = d << 1 | c,
				a = d | ~(l | h),
				o = h & l
			}
			for (let e = l; e < u; e++)
				En[t.charCodeAt(e)] = 0
		}
		let l = 0,
			u = -1;
		const h = 32 * c,
			d = Math.min(32, i - h) + h;
		for (let e = h; e < d; e++)
			En[t.charCodeAt(e)] |= 1 << e;
		let f = i;
		for (let t = 0; t < n; t++) {
			const n = En[e.charCodeAt(t)],
				o = s[t / 32 | 0] >>> t & 1,
				a = r[t / 32 | 0] >>> t & 1,
				c = n | l,
				h = ((n | a) & u) + u ^ u | n | a;
			let d = l | ~(h | u),
				m = u & h;
			f += d >>> i - 1 & 1,
			f -= m >>> i - 1 & 1,
			d >>> 31 ^ o && (s[t / 32 | 0] ^= 1 << t),
			m >>> 31 ^ a && (r[t / 32 | 0] ^= 1 << t),
			d = d << 1 | o,
			m = m << 1 | a,
			u = m | ~(c | d),
			l = d & c
		}
		for (let e = h; e < d; e++)
			En[t.charCodeAt(e)] = 0;
		return f
	})(t, e)
};

const e = document.getElementById("four-oh-four-suggestion");
if (null != e) {
	const t = new XMLHttpRequest;
	t.onload = () => {
		if (200 === t.status) {
			const n = t.responseXML,
				i = Array.from(n.querySelectorAll("urlset > url > loc")).map((t => t.textContent)),
				r = new URL(((t, e) => {
					let n = 1 / 0,
						i = 0;
					for (let r = 0; r < e.length; r++) {
						const s = Sn(t, e[r]);
						s < n && (n = s, i = r)
					}
					return e[i]
				})(window.location.href, i));
			e.innerHTML = `Closest match is <a href="${r.href}">${r.pathname}</a>`
		} else
			e.innerHTML = 'Try the index <a href="/">/</a>'
	},
	t.open("GET", `${window.location.protocol}//${window.location.host}/sitemap.xml`),
	t.send()
}
