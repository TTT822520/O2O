var hexcase = 0;
var b64pad = "";
var chrsz = 8;

function hex_md5(a) {
	return binl2hex(core_md5(str2binl(a), a.length * chrsz))
}

function b64_md5(a) {
	return binl2b64(core_md5(str2binl(a), a.length * chrsz))
}

function str_md5(a) {
	return binl2str(core_md5(str2binl(a), a.length * chrsz))
}

function hex_hmac_md5(a, b) {
	return binl2hex(core_hmac_md5(a, b))
}

function b64_hmac_md5(a, b) {
	return binl2b64(core_hmac_md5(a, b))
}

function str_hmac_md5(a, b) {
	return binl2str(core_hmac_md5(a, b))
}

function md5_vm_test() {
	return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72"
}

function core_md5(o, k) {
	o[k >> 5] |= 128 << ((k) % 32);
	o[(((k + 64) >>> 9) << 4) + 14] = k;
	var p = 1732584193;
	var n = -271733879;
	var m = -1732584194;
	var l = 271733878;
	for (var g = 0; g < o.length; g += 16) {
		var j = p;
		var h = n;
		var f = m;
		var e = l;
		p = md5_ff(p, n, m, l, o[g + 0], 7, -680876936);
		l = md5_ff(l, p, n, m, o[g + 1], 12, -389564586);
		m = md5_ff(m, l, p, n, o[g + 2], 17, 606105819);
		n = md5_ff(n, m, l, p, o[g + 3], 22, -1044525330);
		p = md5_ff(p, n, m, l, o[g + 4], 7, -176418897);
		l = md5_ff(l, p, n, m, o[g + 5], 12, 1200080426);
		m = md5_ff(m, l, p, n, o[g + 6], 17, -1473231341);
		n = md5_ff(n, m, l, p, o[g + 7], 22, -45705983);
		p = md5_ff(p, n, m, l, o[g + 8], 7, 1770035416);
		l = md5_ff(l, p, n, m, o[g + 9], 12, -1958414417);
		m = md5_ff(m, l, p, n, o[g + 10], 17, -42063);
		n = md5_ff(n, m, l, p, o[g + 11], 22, -1990404162);
		p = md5_ff(p, n, m, l, o[g + 12], 7, 1804603682);
		l = md5_ff(l, p, n, m, o[g + 13], 12, -40341101);
		m = md5_ff(m, l, p, n, o[g + 14], 17, -1502002290);
		n = md5_ff(n, m, l, p, o[g + 15], 22, 1236535329);
		p = md5_gg(p, n, m, l, o[g + 1], 5, -165796510);
		l = md5_gg(l, p, n, m, o[g + 6], 9, -1069501632);
		m = md5_gg(m, l, p, n, o[g + 11], 14, 643717713);
		n = md5_gg(n, m, l, p, o[g + 0], 20, -373897302);
		p = md5_gg(p, n, m, l, o[g + 5], 5, -701558691);
		l = md5_gg(l, p, n, m, o[g + 10], 9, 38016083);
		m = md5_gg(m, l, p, n, o[g + 15], 14, -660478335);
		n = md5_gg(n, m, l, p, o[g + 4], 20, -405537848);
		p = md5_gg(p, n, m, l, o[g + 9], 5, 568446438);
		l = md5_gg(l, p, n, m, o[g + 14], 9, -1019803690);
		m = md5_gg(m, l, p, n, o[g + 3], 14, -187363961);
		n = md5_gg(n, m, l, p, o[g + 8], 20, 1163531501);
		p = md5_gg(p, n, m, l, o[g + 13], 5, -1444681467);
		l = md5_gg(l, p, n, m, o[g + 2], 9, -51403784);
		m = md5_gg(m, l, p, n, o[g + 7], 14, 1735328473);
		n = md5_gg(n, m, l, p, o[g + 12], 20, -1926607734);
		p = md5_hh(p, n, m, l, o[g + 5], 4, -378558);
		l = md5_hh(l, p, n, m, o[g + 8], 11, -2022574463);
		m = md5_hh(m, l, p, n, o[g + 11], 16, 1839030562);
		n = md5_hh(n, m, l, p, o[g + 14], 23, -35309556);
		p = md5_hh(p, n, m, l, o[g + 1], 4, -1530992060);
		l = md5_hh(l, p, n, m, o[g + 4], 11, 1272893353);
		m = md5_hh(m, l, p, n, o[g + 7], 16, -155497632);
		n = md5_hh(n, m, l, p, o[g + 10], 23, -1094730640);
		p = md5_hh(p, n, m, l, o[g + 13], 4, 681279174);
		l = md5_hh(l, p, n, m, o[g + 0], 11, -358537222);
		m = md5_hh(m, l, p, n, o[g + 3], 16, -722521979);
		n = md5_hh(n, m, l, p, o[g + 6], 23, 76029189);
		p = md5_hh(p, n, m, l, o[g + 9], 4, -640364487);
		l = md5_hh(l, p, n, m, o[g + 12], 11, -421815835);
		m = md5_hh(m, l, p, n, o[g + 15], 16, 530742520);
		n = md5_hh(n, m, l, p, o[g + 2], 23, -995338651);
		p = md5_ii(p, n, m, l, o[g + 0], 6, -198630844);
		l = md5_ii(l, p, n, m, o[g + 7], 10, 1126891415);
		m = md5_ii(m, l, p, n, o[g + 14], 15, -1416354905);
		n = md5_ii(n, m, l, p, o[g + 5], 21, -57434055);
		p = md5_ii(p, n, m, l, o[g + 12], 6, 1700485571);
		l = md5_ii(l, p, n, m, o[g + 3], 10, -1894986606);
		m = md5_ii(m, l, p, n, o[g + 10], 15, -1051523);
		n = md5_ii(n, m, l, p, o[g + 1], 21, -2054922799);
		p = md5_ii(p, n, m, l, o[g + 8], 6, 1873313359);
		l = md5_ii(l, p, n, m, o[g + 15], 10, -30611744);
		m = md5_ii(m, l, p, n, o[g + 6], 15, -1560198380);
		n = md5_ii(n, m, l, p, o[g + 13], 21, 1309151649);
		p = md5_ii(p, n, m, l, o[g + 4], 6, -145523070);
		l = md5_ii(l, p, n, m, o[g + 11], 10, -1120210379);
		m = md5_ii(m, l, p, n, o[g + 2], 15, 718787259);
		n = md5_ii(n, m, l, p, o[g + 9], 21, -343485551);
		p = safe_add(p, j);
		n = safe_add(n, h);
		m = safe_add(m, f);
		l = safe_add(l, e)
	}
	return Array(p, n, m, l)
}

function md5_cmn(h, e, d, c, g, f) {
	return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
}

function md5_ff(g, f, k, j, e, i, h) {
	return md5_cmn((f & k) | ((~f) & j), g, f, e, i, h)
}

function md5_gg(g, f, k, j, e, i, h) {
	return md5_cmn((f & j) | (k & (~j)), g, f, e, i, h)
}

function md5_hh(g, f, k, j, e, i, h) {
	return md5_cmn(f ^ k ^ j, g, f, e, i, h)
}

function md5_ii(g, f, k, j, e, i, h) {
	return md5_cmn(k ^ (f | (~j)), g, f, e, i, h)
}

function core_hmac_md5(c, f) {
	var e = str2binl(c);
	if (e.length > 16) {
		e = core_md5(e, c.length * chrsz)
	}
	var a = Array(16),
		d = Array(16);
	for (var b = 0; b < 16; b++) {
		a[b] = e[b] ^ 909522486;
		d[b] = e[b] ^ 1549556828
	}
	var g = core_md5(a.concat(str2binl(f)), 512 + f.length * chrsz);
	return core_md5(d.concat(g), 512 + 128)
}

function safe_add(a, d) {
	var c = (a & 65535) + (d & 65535);
	var b = (a >> 16) + (d >> 16) + (c >> 16);
	return (b << 16) | (c & 65535)
}

function bit_rol(a, b) {
	return (a << b) | (a >>> (32 - b))
}

function str2binl(d) {
	var c = Array();
	var a = (1 << chrsz) - 1;
	for (var b = 0; b < d.length * chrsz; b += chrsz) {
		c[b >> 5] |= (d.charCodeAt(b / chrsz) & a) << (b % 32)
	}
	return c
}

function binl2str(c) {
	var d = "";
	var a = (1 << chrsz) - 1;
	for (var b = 0; b < c.length * 32; b += chrsz) {
		d += String.fromCharCode((c[b >> 5] >>> (b % 32)) & a)
	}
	return d
}

function binl2hex(c) {
	var b = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
	var d = "";
	for (var a = 0; a < c.length * 4; a++) {
		d += b.charAt((c[a >> 2] >> ((a % 4) * 8 + 4)) & 15) + b.charAt((c[a >> 2] >> ((a % 4) * 8)) & 15)
	}
	return d
}

function binl2b64(d) {
	var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var f = "";
	for (var b = 0; b < d.length * 4; b += 3) {
		var e = (((d[b >> 2] >> 8 * (b % 4)) & 255) << 16) | (((d[b + 1 >> 2] >> 8 * ((b + 1) % 4)) & 255) << 8) | ((d[b + 2 >> 2] >> 8 * ((b + 2) % 4)) & 255);
		for (var a = 0; a < 4; a++) {
			if (b * 8 + a * 6 > d.length * 32) {
				f += b64pad
			} else {
				f += c.charAt((e >> 6 * (3 - a)) & 63)
			}
		}
	}
	return f
}
var hexcase = 0;
var b64pad = "";
var chrsz = 8;

function hex_md5(a) {
	return binl2hex(core_md5(str2binl(a), a.length * chrsz))
}

function b64_md5(a) {
	return binl2b64(core_md5(str2binl(a), a.length * chrsz))
}

function str_md5(a) {
	return binl2str(core_md5(str2binl(a), a.length * chrsz))
}

function hex_hmac_md5(a, b) {
	return binl2hex(core_hmac_md5(a, b))
}

function b64_hmac_md5(a, b) {
	return binl2b64(core_hmac_md5(a, b))
}

function str_hmac_md5(a, b) {
	return binl2str(core_hmac_md5(a, b))
}

function md5_vm_test() {
	return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72"
}

function core_md5(o, k) {
	o[k >> 5] |= 128 << ((k) % 32);
	o[(((k + 64) >>> 9) << 4) + 14] = k;
	var p = 1732584193;
	var n = -271733879;
	var m = -1732584194;
	var l = 271733878;
	for (var g = 0; g < o.length; g += 16) {
		var j = p;
		var h = n;
		var f = m;
		var e = l;
		p = md5_ff(p, n, m, l, o[g + 0], 7, -680876936);
		l = md5_ff(l, p, n, m, o[g + 1], 12, -389564586);
		m = md5_ff(m, l, p, n, o[g + 2], 17, 606105819);
		n = md5_ff(n, m, l, p, o[g + 3], 22, -1044525330);
		p = md5_ff(p, n, m, l, o[g + 4], 7, -176418897);
		l = md5_ff(l, p, n, m, o[g + 5], 12, 1200080426);
		m = md5_ff(m, l, p, n, o[g + 6], 17, -1473231341);
		n = md5_ff(n, m, l, p, o[g + 7], 22, -45705983);
		p = md5_ff(p, n, m, l, o[g + 8], 7, 1770035416);
		l = md5_ff(l, p, n, m, o[g + 9], 12, -1958414417);
		m = md5_ff(m, l, p, n, o[g + 10], 17, -42063);
		n = md5_ff(n, m, l, p, o[g + 11], 22, -1990404162);
		p = md5_ff(p, n, m, l, o[g + 12], 7, 1804603682);
		l = md5_ff(l, p, n, m, o[g + 13], 12, -40341101);
		m = md5_ff(m, l, p, n, o[g + 14], 17, -1502002290);
		n = md5_ff(n, m, l, p, o[g + 15], 22, 1236535329);
		p = md5_gg(p, n, m, l, o[g + 1], 5, -165796510);
		l = md5_gg(l, p, n, m, o[g + 6], 9, -1069501632);
		m = md5_gg(m, l, p, n, o[g + 11], 14, 643717713);
		n = md5_gg(n, m, l, p, o[g + 0], 20, -373897302);
		p = md5_gg(p, n, m, l, o[g + 5], 5, -701558691);
		l = md5_gg(l, p, n, m, o[g + 10], 9, 38016083);
		m = md5_gg(m, l, p, n, o[g + 15], 14, -660478335);
		n = md5_gg(n, m, l, p, o[g + 4], 20, -405537848);
		p = md5_gg(p, n, m, l, o[g + 9], 5, 568446438);
		l = md5_gg(l, p, n, m, o[g + 14], 9, -1019803690);
		m = md5_gg(m, l, p, n, o[g + 3], 14, -187363961);
		n = md5_gg(n, m, l, p, o[g + 8], 20, 1163531501);
		p = md5_gg(p, n, m, l, o[g + 13], 5, -1444681467);
		l = md5_gg(l, p, n, m, o[g + 2], 9, -51403784);
		m = md5_gg(m, l, p, n, o[g + 7], 14, 1735328473);
		n = md5_gg(n, m, l, p, o[g + 12], 20, -1926607734);
		p = md5_hh(p, n, m, l, o[g + 5], 4, -378558);
		l = md5_hh(l, p, n, m, o[g + 8], 11, -2022574463);
		m = md5_hh(m, l, p, n, o[g + 11], 16, 1839030562);
		n = md5_hh(n, m, l, p, o[g + 14], 23, -35309556);
		p = md5_hh(p, n, m, l, o[g + 1], 4, -1530992060);
		l = md5_hh(l, p, n, m, o[g + 4], 11, 1272893353);
		m = md5_hh(m, l, p, n, o[g + 7], 16, -155497632);
		n = md5_hh(n, m, l, p, o[g + 10], 23, -1094730640);
		p = md5_hh(p, n, m, l, o[g + 13], 4, 681279174);
		l = md5_hh(l, p, n, m, o[g + 0], 11, -358537222);
		m = md5_hh(m, l, p, n, o[g + 3], 16, -722521979);
		n = md5_hh(n, m, l, p, o[g + 6], 23, 76029189);
		p = md5_hh(p, n, m, l, o[g + 9], 4, -640364487);
		l = md5_hh(l, p, n, m, o[g + 12], 11, -421815835);
		m = md5_hh(m, l, p, n, o[g + 15], 16, 530742520);
		n = md5_hh(n, m, l, p, o[g + 2], 23, -995338651);
		p = md5_ii(p, n, m, l, o[g + 0], 6, -198630844);
		l = md5_ii(l, p, n, m, o[g + 7], 10, 1126891415);
		m = md5_ii(m, l, p, n, o[g + 14], 15, -1416354905);
		n = md5_ii(n, m, l, p, o[g + 5], 21, -57434055);
		p = md5_ii(p, n, m, l, o[g + 12], 6, 1700485571);
		l = md5_ii(l, p, n, m, o[g + 3], 10, -1894986606);
		m = md5_ii(m, l, p, n, o[g + 10], 15, -1051523);
		n = md5_ii(n, m, l, p, o[g + 1], 21, -2054922799);
		p = md5_ii(p, n, m, l, o[g + 8], 6, 1873313359);
		l = md5_ii(l, p, n, m, o[g + 15], 10, -30611744);
		m = md5_ii(m, l, p, n, o[g + 6], 15, -1560198380);
		n = md5_ii(n, m, l, p, o[g + 13], 21, 1309151649);
		p = md5_ii(p, n, m, l, o[g + 4], 6, -145523070);
		l = md5_ii(l, p, n, m, o[g + 11], 10, -1120210379);
		m = md5_ii(m, l, p, n, o[g + 2], 15, 718787259);
		n = md5_ii(n, m, l, p, o[g + 9], 21, -343485551);
		p = safe_add(p, j);
		n = safe_add(n, h);
		m = safe_add(m, f);
		l = safe_add(l, e)
	}
	return Array(p, n, m, l)
}

function md5_cmn(h, e, d, c, g, f) {
	return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
}

function md5_ff(g, f, k, j, e, i, h) {
	return md5_cmn((f & k) | ((~f) & j), g, f, e, i, h)
}

function md5_gg(g, f, k, j, e, i, h) {
	return md5_cmn((f & j) | (k & (~j)), g, f, e, i, h)
}

function md5_hh(g, f, k, j, e, i, h) {
	return md5_cmn(f ^ k ^ j, g, f, e, i, h)
}

function md5_ii(g, f, k, j, e, i, h) {
	return md5_cmn(k ^ (f | (~j)), g, f, e, i, h)
}

function core_hmac_md5(c, f) {
	var e = str2binl(c);
	if (e.length > 16) {
		e = core_md5(e, c.length * chrsz)
	}
	var a = Array(16),
		d = Array(16);
	for (var b = 0; b < 16; b++) {
		a[b] = e[b] ^ 909522486;
		d[b] = e[b] ^ 1549556828
	}
	var g = core_md5(a.concat(str2binl(f)), 512 + f.length * chrsz);
	return core_md5(d.concat(g), 512 + 128)
}

function safe_add(a, d) {
	var c = (a & 65535) + (d & 65535);
	var b = (a >> 16) + (d >> 16) + (c >> 16);
	return (b << 16) | (c & 65535)
}

function bit_rol(a, b) {
	return (a << b) | (a >>> (32 - b))
}

function str2binl(d) {
	var c = Array();
	var a = (1 << chrsz) - 1;
	for (var b = 0; b < d.length * chrsz; b += chrsz) {
		c[b >> 5] |= (d.charCodeAt(b / chrsz) & a) << (b % 32)
	}
	return c
}

function binl2str(c) {
	var d = "";
	var a = (1 << chrsz) - 1;
	for (var b = 0; b < c.length * 32; b += chrsz) {
		d += String.fromCharCode((c[b >> 5] >>> (b % 32)) & a)
	}
	return d
}

function binl2hex(c) {
	var b = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
	var d = "";
	for (var a = 0; a < c.length * 4; a++) {
		d += b.charAt((c[a >> 2] >> ((a % 4) * 8 + 4)) & 15) + b.charAt((c[a >> 2] >> ((a % 4) * 8)) & 15)
	}
	return d
}

function binl2b64(d) {
	var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var f = "";
	for (var b = 0; b < d.length * 4; b += 3) {
		var e = (((d[b >> 2] >> 8 * (b % 4)) & 255) << 16) | (((d[b + 1 >> 2] >> 8 * ((b + 1) % 4)) & 255) << 8) | ((d[b + 2 >> 2] >> 8 * ((b + 2) % 4)) & 255);
		for (var a = 0; a < 4; a++) {
			if (b * 8 + a * 6 > d.length * 32) {
				f += b64pad
			} else {
				f += c.charAt((e >> 6 * (3 - a)) & 63)
			}
		}
	}
	return f
};