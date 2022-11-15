/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
	"use strict";
	var t = [],
		r = Object.getPrototypeOf,
		s = t.slice,
		g = t.flat ? function(e) {
			return t.flat.call(e)
		} : function(e) {
			return t.concat.apply([], e)
		},
		u = t.push,
		i = t.indexOf,
		n = {},
		o = n.toString,
		v = n.hasOwnProperty,
		a = v.toString,
		l = a.call(Object),
		y = {},
		m = function(e) {
			return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
		},
		x = function(e) {
			return null != e && e === e.window
		},
		E = C.document,
		c = {
			type: !0,
			src: !0,
			nonce: !0,
			noModule: !0
		};

	function b(e, t, n) {
		var r, i, o = (n = n || E)
			.createElement("script");
		if (o.text = e, t)
			for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
		n.head.appendChild(o)
			.parentNode.removeChild(o)
	}

	function w(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
	}
	var f = "3.6.0",
		S = function(e, t) {
			return new S.fn.init(e, t)
		};

	function p(e) {
		var t = !!e && "length" in e && e.length,
			n = w(e);
		return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
	}
	S.fn = S.prototype = {
		jquery: f,
		constructor: S,
		length: 0,
		toArray: function() {
			return s.call(this)
		},
		get: function(e) {
			return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function(e) {
			var t = S.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function(e) {
			return S.each(this, e)
		},
		map: function(n) {
			return this.pushStack(S.map(this, function(e, t) {
				return n.call(e, t, e)
			}))
		},
		slice: function() {
			return this.pushStack(s.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		even: function() {
			return this.pushStack(S.grep(this, function(e, t) {
				return (t + 1) % 2
			}))
		},
		odd: function() {
			return this.pushStack(S.grep(this, function(e, t) {
				return t % 2
			}))
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= n && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: u,
		sort: t.sort,
		splice: t.splice
	}, S.extend = S.fn.extend = function() {
		var e, t, n, r, i, o, a = arguments[0] || {},
			s = 1,
			u = arguments.length,
			l = !1;
		for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
			if (null != (e = arguments[s]))
				for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
		return a
	}, S.extend({
		expando: "jQuery" + (f + Math.random())
			.replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isPlainObject: function(e) {
			var t, n;
			return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		globalEval: function(e, t, n) {
			b(e, {
				nonce: t && t.nonce
			}, n)
		},
		each: function(e, t) {
			var n, r = 0;
			if (p(e)) {
				for (n = e.length; r < n; r++)
					if (!1 === t.call(e[r], r, e[r])) break
			} else
				for (r in e)
					if (!1 === t.call(e[r], r, e[r])) break;
			return e
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : i.call(t, e, n)
		},
		merge: function(e, t) {
			for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
			return r
		},
		map: function(e, t, n) {
			var r, i, o = 0,
				a = [];
			if (p(e))
				for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
			else
				for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
			return g(a)
		},
		guid: 1,
		support: y
	}), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
		n["[object " + t + "]"] = t.toLowerCase()
	});
	var d = function(n) {
		var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
			p = n.document,
			k = 0,
			r = 0,
			m = ue(),
			x = ue(),
			A = ue(),
			N = ue(),
			j = function(e, t) {
				return e === t && (l = !0), 0
			},
			D = {}.hasOwnProperty,
			t = [],
			q = t.pop,
			L = t.push,
			H = t.push,
			O = t.slice,
			P = function(e, t) {
				for (var n = 0, r = e.length; n < r; n++)
					if (e[n] === t) return n;
				return -1
			},
			R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			M = "[\\x20\\t\\r\\n\\f]",
			I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
			W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
			F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
			B = new RegExp(M + "+", "g"),
			$ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
			_ = new RegExp("^" + M + "*," + M + "*"),
			z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
			U = new RegExp(M + "|>"),
			X = new RegExp(F),
			V = new RegExp("^" + I + "$"),
			G = {
				ID: new RegExp("^#(" + I + ")"),
				CLASS: new RegExp("^\\.(" + I + ")"),
				TAG: new RegExp("^(" + I + "|[*])"),
				ATTR: new RegExp("^" + W),
				PSEUDO: new RegExp("^" + F),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + R + ")$", "i"),
				needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
			},
			Y = /HTML$/i,
			Q = /^(?:input|select|textarea|button)$/i,
			J = /^h\d$/i,
			K = /^[^{]+\{\s*\[native \w/,
			Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ee = /[+~]/,
			te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
			ne = function(e, t) {
				var n = "0x" + e.slice(1) - 65536;
				return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
			},
			re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			ie = function(e, t) {
				return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1)
					.toString(16) + " " : "\\" + e
			},
			oe = function() {
				T()
			},
			ae = be(function(e) {
				return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
		} catch (e) {
			H = {
				apply: t.length ? function(e, t) {
					L.apply(e, O.call(t))
				} : function(e, t) {
					var n = e.length,
						r = 0;
					while (e[n++] = t[r++]);
					e.length = n - 1
				}
			}
		}

		function se(t, e, n, r) {
			var i, o, a, s, u, l, c, f = e && e.ownerDocument,
				p = e ? e.nodeType : 9;
			if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
			if (!r && (T(e), e = e || C, E)) {
				if (11 !== p && (u = Z.exec(t)))
					if (i = u[1]) {
						if (9 === p) {
							if (!(a = e.getElementById(i))) return n;
							if (a.id === i) return n.push(a), n
						} else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
					} else {
						if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
						if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
					} if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
					if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
						(f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t))
							.length;
						while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
						c = l.join(",")
					}
					try {
						return H.apply(n, f.querySelectorAll(c)), n
					} catch (e) {
						N(t, !0)
					} finally {
						s === S && e.removeAttribute("id")
					}
				}
			}
			return g(t.replace($, "$1"), e, n, r)
		}

		function ue() {
			var r = [];
			return function e(t, n) {
				return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
			}
		}

		function le(e) {
			return e[S] = !0, e
		}

		function ce(e) {
			var t = C.createElement("fieldset");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function fe(e, t) {
			var n = e.split("|"),
				r = n.length;
			while (r--) b.attrHandle[n[r]] = t
		}

		function pe(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (r) return r;
			if (n)
				while (n = n.nextSibling)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function de(t) {
			return function(e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}

		function he(n) {
			return function(e) {
				var t = e.nodeName.toLowerCase();
				return ("input" === t || "button" === t) && e.type === n
			}
		}

		function ge(t) {
			return function(e) {
				return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
			}
		}

		function ve(a) {
			return le(function(o) {
				return o = +o, le(function(e, t) {
					var n, r = a([], e.length, o),
						i = r.length;
					while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
				})
			})
		}

		function ye(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}
		for (e in d = se.support = {}, i = se.isXML = function(e) {
				var t = e && e.namespaceURI,
					n = e && (e.ownerDocument || e)
					.documentElement;
				return !Y.test(t || n && n.nodeName || "HTML")
			}, T = se.setDocument = function(e) {
				var t, n, r = e ? e.ownerDocument || e : p;
				return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r)
					.documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) {
						return a.appendChild(e)
							.appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div")
							.length
					}), d.attributes = ce(function(e) {
						return e.className = "i", !e.getAttribute("className")
					}), d.getElementsByTagName = ce(function(e) {
						return e.appendChild(C.createComment("")), !e.getElementsByTagName("*")
							.length
					}), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
						return a.appendChild(e)
							.id = S, !C.getElementsByName || !C.getElementsByName(S)
							.length
					}), d.getById ? (b.filter.ID = function(e) {
						var t = e.replace(te, ne);
						return function(e) {
							return e.getAttribute("id") === t
						}
					}, b.find.ID = function(e, t) {
						if ("undefined" != typeof t.getElementById && E) {
							var n = t.getElementById(e);
							return n ? [n] : []
						}
					}) : (b.filter.ID = function(e) {
						var n = e.replace(te, ne);
						return function(e) {
							var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
							return t && t.value === n
						}
					}, b.find.ID = function(e, t) {
						if ("undefined" != typeof t.getElementById && E) {
							var n, r, i, o = t.getElementById(e);
							if (o) {
								if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
								i = t.getElementsByName(e), r = 0;
								while (o = i[r++])
									if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
							}
							return []
						}
					}), b.find.TAG = d.getElementsByTagName ? function(e, t) {
						return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
					} : function(e, t) {
						var n, r = [],
							i = 0,
							o = t.getElementsByTagName(e);
						if ("*" === e) {
							while (n = o[i++]) 1 === n.nodeType && r.push(n);
							return r
						}
						return o
					}, b.find.CLASS = d.getElementsByClassName && function(e, t) {
						if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
					}, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
						var t;
						a.appendChild(e)
							.innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']")
							.length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]")
							.length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]")
							.length || v.push("~="), (t = C.createElement("input"))
							.setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']")
							.length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked")
							.length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*")
							.length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
					}), ce(function(e) {
						e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
						var t = C.createElement("input");
						t.setAttribute("type", "hidden"), e.appendChild(t)
							.setAttribute("name", "D"), e.querySelectorAll("[name=d]")
							.length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled")
							.length && v.push(":enabled", ":disabled"), a.appendChild(e)
							.disabled = !0, 2 !== e.querySelectorAll(":disabled")
							.length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
					})), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
						d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
					}), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
						var n = 9 === e.nodeType ? e.documentElement : e,
							r = t && t.parentNode;
						return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
					} : function(e, t) {
						if (t)
							while (t = t.parentNode)
								if (t === e) return !0;
						return !1
					}, j = t ? function(e, t) {
						if (e === t) return l = !0, 0;
						var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
						return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
					} : function(e, t) {
						if (e === t) return l = !0, 0;
						var n, r = 0,
							i = e.parentNode,
							o = t.parentNode,
							a = [e],
							s = [t];
						if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
						if (i === o) return pe(e, t);
						n = e;
						while (n = n.parentNode) a.unshift(n);
						n = t;
						while (n = n.parentNode) s.unshift(n);
						while (a[r] === s[r]) r++;
						return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
					}), C
			}, se.matches = function(e, t) {
				return se(e, null, null, t)
			}, se.matchesSelector = function(e, t) {
				if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
					var n = c.call(e, t);
					if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch (e) {
					N(t, !0)
				}
				return 0 < se(t, C, null, [e])
					.length
			}, se.contains = function(e, t) {
				return (e.ownerDocument || e) != C && T(e), y(e, t)
			}, se.attr = function(e, t) {
				(e.ownerDocument || e) != C && T(e);
				var n = b.attrHandle[t.toLowerCase()],
					r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
				return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}, se.escape = function(e) {
				return (e + "")
					.replace(re, ie)
			}, se.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, se.uniqueSort = function(e) {
				var t, n = [],
					r = 0,
					i = 0;
				if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
					while (t = e[i++]) t === e[i] && (r = n.push(i));
					while (r--) e.splice(n[r], 1)
				}
				return u = null, e
			}, o = se.getText = function(e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
					} else if (3 === i || 4 === i) return e.nodeValue
				} else
					while (t = e[r++]) n += o(t);
				return n
			}, (b = se.selectors = {
				cacheLength: 50,
				createPseudo: le,
				match: G,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "")
							.replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(te, ne)
							.toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = m[e + " "];
						return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
							return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function(n, r, i) {
						return function(e) {
							var t = se.attr(e, n);
							return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ")
								.indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
						}
					},
					CHILD: function(h, e, t, g, v) {
						var y = "nth" !== h.slice(0, 3),
							m = "last" !== h.slice(-4),
							x = "of-type" === e;
						return 1 === g && 0 === v ? function(e) {
							return !!e.parentNode
						} : function(e, t, n) {
							var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
								c = e.parentNode,
								f = x && e.nodeName.toLowerCase(),
								p = !n && !x,
								d = !1;
							if (c) {
								if (y) {
									while (l) {
										a = e;
										while (a = a[l])
											if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
										u = l = "only" === h && !u && "nextSibling"
									}
									return !0
								}
								if (u = [m ? c.firstChild : c.lastChild], m && p) {
									d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
									while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
										if (1 === a.nodeType && ++d && a === e) {
											i[h] = [k, s, d];
											break
										}
								} else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
									while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
										if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
								return (d -= v) === g || d % g == 0 && 0 <= d / g
							}
						}
					},
					PSEUDO: function(e, o) {
						var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
						return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
							var n, r = a(e, o),
								i = r.length;
							while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
						}) : function(e) {
							return a(e, 0, t)
						}) : a
					}
				},
				pseudos: {
					not: le(function(e) {
						var r = [],
							i = [],
							s = f(e.replace($, "$1"));
						return s[S] ? le(function(e, t, n, r) {
							var i, o = s(e, null, r, []),
								a = e.length;
							while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
						}) : function(e, t, n) {
							return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
						}
					}),
					has: le(function(t) {
						return function(e) {
							return 0 < se(t, e)
								.length
						}
					}),
					contains: le(function(t) {
						return t = t.replace(te, ne),
							function(e) {
								return -1 < (e.textContent || o(e))
									.indexOf(t)
							}
					}),
					lang: le(function(n) {
						return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne)
							.toLowerCase(),
							function(e) {
								var t;
								do {
									if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
								} while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
							}
					}),
					target: function(e) {
						var t = n.location && n.location.hash;
						return t && t.slice(1) === e.id
					},
					root: function(e) {
						return e === a
					},
					focus: function(e) {
						return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: ge(!1),
					disabled: ge(!0),
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !b.pseudos.empty(e)
					},
					header: function(e) {
						return J.test(e.nodeName)
					},
					input: function(e) {
						return Q.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: ve(function() {
						return [0]
					}),
					last: ve(function(e, t) {
						return [t - 1]
					}),
					eq: ve(function(e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: ve(function(e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e
					}),
					odd: ve(function(e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e
					}),
					lt: ve(function(e, t, n) {
						for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
						return e
					}),
					gt: ve(function(e, t, n) {
						for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
						return e
					})
				}
			})
			.pseudos.nth = b.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) b.pseudos[e] = de(e);
		for (e in {
			submit: !0,
			reset: !0
		}) b.pseudos[e] = he(e);

		function me() {}

		function xe(e) {
			for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
			return r
		}

		function be(s, e, t) {
			var u = e.dir,
				l = e.next,
				c = l || u,
				f = t && "parentNode" === c,
				p = r++;
			return e.first ? function(e, t, n) {
				while (e = e[u])
					if (1 === e.nodeType || f) return s(e, t, n);
				return !1
			} : function(e, t, n) {
				var r, i, o, a = [k, p];
				if (n) {
					while (e = e[u])
						if ((1 === e.nodeType || f) && s(e, t, n)) return !0
				} else
					while (e = e[u])
						if (1 === e.nodeType || f)
							if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
							else {
								if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
								if ((i[c] = a)[2] = s(e, t, n)) return !0
							} return !1
			}
		}

		function we(i) {
			return 1 < i.length ? function(e, t, n) {
				var r = i.length;
				while (r--)
					if (!i[r](e, t, n)) return !1;
				return !0
			} : i[0]
		}

		function Te(e, t, n, r, i) {
			for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
			return a
		}

		function Ce(d, h, g, v, y, e) {
			return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) {
				var i, o, a, s = [],
					u = [],
					l = t.length,
					c = e || function(e, t, n) {
						for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
						return n
					}(h || "*", n.nodeType ? [n] : n, []),
					f = !d || !e && h ? c : Te(c, s, d, n, r),
					p = g ? y || (e ? d : l || v) ? [] : t : f;
				if (g && g(f, p, n, r), v) {
					i = Te(p, u), v(i, [], n, r), o = i.length;
					while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
				}
				if (e) {
					if (y || d) {
						if (y) {
							i = [], o = p.length;
							while (o--)(a = p[o]) && i.push(f[o] = a);
							y(null, p = [], i, r)
						}
						o = p.length;
						while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
					}
				} else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
			})
		}

		function Ee(e) {
			for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
				return e === i
			}, a, !0), l = be(function(e) {
				return -1 < P(i, e)
			}, a, !0), c = [function(e, t, n) {
				var r = !o && (n || t !== w) || ((i = t)
					.nodeType ? u(e, t, n) : l(e, t, n));
				return i = null, r
			}]; s < r; s++)
				if (t = b.relative[e[s].type]) c = [be(we(c), t)];
				else {
					if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
						for (n = ++s; n < r; n++)
							if (b.relative[e[n].type]) break;
						return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1)
								.concat({
									value: " " === e[s - 2].type ? "*" : ""
								}))
							.replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
					}
					c.push(t)
				} return we(c)
		}
		return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
				var n, r, i, o, a, s, u, l = x[e + " "];
				if (l) return t ? 0 : l.slice(0);
				a = e, s = [], u = b.preFilter;
				while (a) {
					for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
						value: n,
						type: r[0].replace($, " ")
					}), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
						value: n,
						type: o,
						matches: r
					}), a = a.slice(n.length));
					if (!n) break
				}
				return t ? a.length : a ? se.error(e) : x(e, s)
					.slice(0)
			}, f = se.compile = function(e, t) {
				var n, v, y, m, x, r, i = [],
					o = [],
					a = A[e + " "];
				if (!a) {
					t || (t = h(e)), n = t.length;
					while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
					(a = A(e, (v = o, m = 0 < (y = i)
						.length, x = 0 < v.length, r = function(e, t, n, r, i) {
							var o, a, s, u = 0,
								l = "0",
								c = e && [],
								f = [],
								p = w,
								d = e || x && b.find.TAG("*", i),
								h = k += null == p ? 1 : Math.random() || .1,
								g = d.length;
							for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
								if (x && o) {
									a = 0, t || o.ownerDocument == C || (T(o), n = !E);
									while (s = v[a++])
										if (s(o, t || C, n)) {
											r.push(o);
											break
										} i && (k = h)
								}
								m && ((o = !s && o) && u--, e && c.push(o))
							}
							if (u += l, m && l !== u) {
								a = 0;
								while (s = y[a++]) s(c, f, t, n);
								if (e) {
									if (0 < u)
										while (l--) c[l] || f[l] || (f[l] = q.call(r));
									f = Te(f)
								}
								H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
							}
							return i && (k = h, w = p), c
						}, m ? le(r) : r)))
					.selector = e
				}
				return a
			}, g = se.select = function(e, t, n, r) {
				var i, o, a, s, u, l = "function" == typeof e && e,
					c = !r && h(e = l.selector || e);
				if (n = n || [], 1 === c.length) {
					if (2 < (o = c[0] = c[0].slice(0))
						.length && "ID" === (a = o[0])
						.type && 9 === t.nodeType && E && b.relative[o[1].type]) {
						if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
						l && (t = t.parentNode), e = e.slice(o.shift()
							.value.length)
					}
					i = G.needsContext.test(e) ? 0 : o.length;
					while (i--) {
						if (a = o[i], b.relative[s = a.type]) break;
						if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
							if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
							break
						}
					}
				}
				return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
			}, d.sortStable = S.split("")
			.sort(j)
			.join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
				return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
			}), ce(function(e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || fe("type|href|height|width", function(e, t, n) {
				if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), d.attributes && ce(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || fe("value", function(e, t, n) {
				if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
			}), ce(function(e) {
				return null == e.getAttribute("disabled")
			}) || fe(R, function(e, t, n) {
				var r;
				if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}), se
	}(C);
	S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
	var h = function(e, t, n) {
			var r = [],
				i = void 0 !== n;
			while ((e = e[t]) && 9 !== e.nodeType)
				if (1 === e.nodeType) {
					if (i && S(e)
						.is(n)) break;
					r.push(e)
				} return r
		},
		T = function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		k = S.expr.match.needsContext;

	function A(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function j(e, n, r) {
		return m(n) ? S.grep(e, function(e, t) {
			return !!n.call(e, t, e) !== r
		}) : n.nodeType ? S.grep(e, function(e) {
			return e === n !== r
		}) : "string" != typeof n ? S.grep(e, function(e) {
			return -1 < i.call(n, e) !== r
		}) : S.filter(n, e, r)
	}
	S.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, S.fn.extend({
		find: function(e) {
			var t, n, r = this.length,
				i = this;
			if ("string" != typeof e) return this.pushStack(S(e)
				.filter(function() {
					for (t = 0; t < r; t++)
						if (S.contains(i[t], this)) return !0
				}));
			for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
			return 1 < r ? S.uniqueSort(n) : n
		},
		filter: function(e) {
			return this.pushStack(j(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(j(this, e || [], !0))
		},
		is: function(e) {
			return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
				.length
		}
	});
	var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(S.fn.init = function(e, t, n) {
		var r, i;
		if (!e) return this;
		if (n = n || D, "string" == typeof e) {
			if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n)
				.find(e) : this.constructor(t)
				.find(e);
			if (r[1]) {
				if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
					for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
				return this
			}
			return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
		}
		return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
	})
	.prototype = S.fn, D = S(E);
	var L = /^(?:parents|prev(?:Until|All))/,
		H = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function O(e, t) {
		while ((e = e[t]) && 1 !== e.nodeType);
		return e
	}
	S.fn.extend({
		has: function(e) {
			var t = S(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; e < n; e++)
					if (S.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				o = [],
				a = "string" != typeof e && S(e);
			if (!k.test(e))
				for (; r < i; r++)
					for (n = this[r]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
							o.push(n);
							break
						} return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first()
				.prevAll()
				.length : -1
		},
		add: function(e, t) {
			return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), S.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return h(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return h(e, "parentNode", n)
		},
		next: function(e) {
			return O(e, "nextSibling")
		},
		prev: function(e) {
			return O(e, "previousSibling")
		},
		nextAll: function(e) {
			return h(e, "nextSibling")
		},
		prevAll: function(e) {
			return h(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return h(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return h(e, "previousSibling", n)
		},
		siblings: function(e) {
			return T((e.parentNode || {})
				.firstChild, e)
		},
		children: function(e) {
			return T(e.firstChild)
		},
		contents: function(e) {
			return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
		}
	}, function(r, i) {
		S.fn[r] = function(e, t) {
			var n = S.map(this, i, e);
			return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
		}
	});
	var P = /[^\x20\t\r\n\f]+/g;

	function R(e) {
		return e
	}

	function M(e) {
		throw e
	}

	function I(e, t, n, r) {
		var i;
		try {
			e && m(i = e.promise) ? i.call(e)
				.done(t)
				.fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}
	S.Callbacks = function(r) {
		var e, n;
		r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) {
			n[t] = !0
		}), n) : S.extend({}, r);
		var i, t, o, a, s = [],
			u = [],
			l = -1,
			c = function() {
				for (a = a || r.once, o = i = !0; u.length; l = -1) {
					t = u.shift();
					while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
				}
				r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
			},
			f = {
				add: function() {
					return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
						S.each(e, function(e, t) {
							m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
						})
					}(arguments), t && !i && c()), this
				},
				remove: function() {
					return S.each(arguments, function(e, t) {
						var n;
						while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
					}), this
				},
				has: function(e) {
					return e ? -1 < S.inArray(e, s) : 0 < s.length
				},
				empty: function() {
					return s && (s = []), this
				},
				disable: function() {
					return a = u = [], s = t = "", this
				},
				disabled: function() {
					return !s
				},
				lock: function() {
					return a = u = [], t || i || (s = t = ""), this
				},
				locked: function() {
					return !!a
				},
				fireWith: function(e, t) {
					return a || (t = [e, (t = t || [])
						.slice ? t.slice() : t
					], u.push(t), i || c()), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!o
				}
			};
		return f
	}, S.extend({
		Deferred: function(e) {
			var o = [
					["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
					["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
				],
				i = "pending",
				a = {
					state: function() {
						return i
					},
					always: function() {
						return s.done(arguments)
							.fail(arguments), this
					},
					"catch": function(e) {
						return a.then(null, e)
					},
					pipe: function() {
						var i = arguments;
						return S.Deferred(function(r) {
								S.each(o, function(e, t) {
									var n = m(i[t[4]]) && i[t[4]];
									s[t[1]](function() {
										var e = n && n.apply(this, arguments);
										e && m(e.promise) ? e.promise()
											.progress(r.notify)
											.done(r.resolve)
											.fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
									})
								}), i = null
							})
							.promise()
					},
					then: function(t, n, r) {
						var u = 0;

						function l(i, o, a, s) {
							return function() {
								var n = this,
									r = arguments,
									e = function() {
										var e, t;
										if (!(i < u)) {
											if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
											t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
										}
									},
									t = s ? e : function() {
										try {
											e()
										} catch (e) {
											S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
										}
									};
								i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
							}
						}
						return S.Deferred(function(e) {
								o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
							})
							.promise()
					},
					promise: function(e) {
						return null != e ? S.extend(e, a) : a
					}
				},
				s = {};
			return S.each(o, function(e, t) {
				var n = t[2],
					r = t[5];
				a[t[1]] = n.add, r && n.add(function() {
					i = r
				}, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
					return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
				}, s[t[0] + "With"] = n.fireWith
			}), a.promise(s), e && e.call(s, s), s
		},
		when: function(e) {
			var n = arguments.length,
				t = n,
				r = Array(t),
				i = s.call(arguments),
				o = S.Deferred(),
				a = function(t) {
					return function(e) {
						r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
					}
				};
			if (n <= 1 && (I(e, o.done(a(t))
				.resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
			while (t--) I(i[t], a(t), o.reject);
			return o.promise()
		}
	});
	var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	S.Deferred.exceptionHook = function(e, t) {
		C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
	}, S.readyException = function(e) {
		C.setTimeout(function() {
			throw e
		})
	};
	var F = S.Deferred();

	function B() {
		E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
	}
	S.fn.ready = function(e) {
		return F.then(e)["catch"](function(e) {
			S.readyException(e)
		}), this
	}, S.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(e) {
			(!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
		}
	}), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
	var $ = function(e, t, n, r, i, o, a) {
			var s = 0,
				u = e.length,
				l = null == n;
			if ("object" === w(n))
				for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
			else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
				return l.call(S(e), n)
			})), t))
				for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
		},
		_ = /^-ms-/,
		z = /-([a-z])/g;

	function U(e, t) {
		return t.toUpperCase()
	}

	function X(e) {
		return e.replace(_, "ms-")
			.replace(z, U)
	}
	var V = function(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	};

	function G() {
		this.expando = S.expando + G.uid++
	}
	G.uid = 1, G.prototype = {
		cache: function(e) {
			var t = e[this.expando];
			return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, n) {
			var r, i = this.cache(e);
			if ("string" == typeof t) i[X(t)] = n;
			else
				for (r in t) i[X(r)] = t[r];
			return i
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
		},
		access: function(e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, r = e[this.expando];
			if (void 0 !== r) {
				if (void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || [])
						.length;
					while (n--) delete r[t[n]]
				}(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			var t = e[this.expando];
			return void 0 !== t && !S.isEmptyObject(t)
		}
	};
	var Y = new G,
		Q = new G,
		J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		K = /[A-Z]/g;

	function Z(e, t, n) {
		var r, i;
		if (void 0 === n && 1 === e.nodeType)
			if (r = "data-" + t.replace(K, "-$&")
				.toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
				try {
					n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
				} catch (e) {}
				Q.set(e, t, n)
			} else n = void 0;
		return n
	}
	S.extend({
		hasData: function(e) {
			return Q.hasData(e) || Y.hasData(e)
		},
		data: function(e, t, n) {
			return Q.access(e, t, n)
		},
		removeData: function(e, t) {
			Q.remove(e, t)
		},
		_data: function(e, t, n) {
			return Y.access(e, t, n)
		},
		_removeData: function(e, t) {
			Y.remove(e, t)
		}
	}), S.fn.extend({
		data: function(n, e) {
			var t, r, i, o = this[0],
				a = o && o.attributes;
			if (void 0 === n) {
				if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
					t = a.length;
					while (t--) a[t] && 0 === (r = a[t].name)
						.indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
					Y.set(o, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof n ? this.each(function() {
				Q.set(this, n)
			}) : $(this, function(e) {
				var t;
				if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
				this.each(function() {
					Q.set(this, n, e)
				})
			}, null, e, 1 < arguments.length, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				Q.remove(this, e)
			})
		}
	}), S.extend({
		queue: function(e, t, n) {
			var r;
			if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = S.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = S._queueHooks(e, t);
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
				S.dequeue(e, t)
			}, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return Y.get(e, n) || Y.access(e, n, {
				empty: S.Callbacks("once memory")
					.add(function() {
						Y.remove(e, [t + "queue", n])
					})
			})
		}
	}), S.fn.extend({
		queue: function(t, n) {
			var e = 2;
			return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
				var e = S.queue(this, t, n);
				S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				S.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = S.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--r || i.resolveWith(o, [o])
				};
			"string" != typeof e && (t = e, e = void 0), e = e || "fx";
			while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
			return s(), i.promise(t)
		}
	});
	var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
		ne = ["Top", "Right", "Bottom", "Left"],
		re = E.documentElement,
		ie = function(e) {
			return S.contains(e.ownerDocument, e)
		},
		oe = {
			composed: !0
		};
	re.getRootNode && (ie = function(e) {
		return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
	});
	var ae = function(e, t) {
		return "none" === (e = t || e)
			.style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
	};

	function se(e, t, n, r) {
		var i, o, a = 20,
			s = r ? function() {
				return r.cur()
			} : function() {
				return S.css(e, t, "")
			},
			u = s(),
			l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
			c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
		if (c && c[3] !== l) {
			u /= 2, l = l || c[3], c = +u || 1;
			while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
			c *= 2, S.style(e, t, c + l), n = n || []
		}
		return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
	}
	var ue = {};

	function le(e, t) {
		for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c])
			.style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r)
				.ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
		for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
		return e
	}
	S.fn.extend({
		show: function() {
			return le(this, !0)
		},
		hide: function() {
			return le(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				ae(this) ? S(this)
					.show() : S(this)
					.hide()
			})
		}
	});
	var ce, fe, pe = /^(?:checkbox|radio)$/i,
		de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		he = /^$|^module$|\/(?:java|ecma)script/i;
	ce = E.createDocumentFragment()
		.appendChild(E.createElement("div")), (fe = E.createElement("input"))
		.setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0)
		.cloneNode(!0)
		.lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0)
		.lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
	var ge = {
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: [0, "", ""]
	};

	function ve(e, t) {
		var n;
		return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
	}

	function ye(e, t) {
		for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
	}
	ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
	var me = /<|&#?\w+;/;

	function xe(e, t, n, r, i) {
		for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
			if ((o = e[d]) || 0 === o)
				if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
				else if (me.test(o)) {
			a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
			while (c--) a = a.lastChild;
			S.merge(p, a.childNodes), (a = f.firstChild)
				.textContent = ""
		} else p.push(t.createTextNode(o));
		f.textContent = "", d = 0;
		while (o = p[d++])
			if (r && -1 < S.inArray(o, r)) i && i.push(o);
			else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
			c = 0;
			while (o = a[c++]) he.test(o.type || "") && n.push(o)
		}
		return f
	}
	var be = /^([^.]*)(?:\.(.+)|)/;

	function we() {
		return !0
	}

	function Te() {
		return !1
	}

	function Ce(e, t) {
		return e === function() {
			try {
				return E.activeElement
			} catch (e) {}
		}() == ("focus" === t)
	}

	function Ee(e, t, n, r, i, o) {
		var a, s;
		if ("object" == typeof t) {
			for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
			return e
		}
		if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
		else if (!i) return e;
		return 1 === o && (a = i, (i = function(e) {
				return S()
					.off(e), a.apply(this, arguments)
			})
			.guid = a.guid || (a.guid = S.guid++)), e.each(function() {
			S.event.add(this, t, i, r, n)
		})
	}

	function Se(e, i, o) {
		o ? (Y.set(e, i, !1), S.event.add(e, i, {
			namespace: !1,
			handler: function(e) {
				var t, n, r = Y.get(this, i);
				if (1 & e.isTrigger && this[i]) {
					if (r.length)(S.event.special[i] || {})
						.delegateType && e.stopPropagation();
					else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
				} else r.length && (Y.set(this, i, {
					value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
				}), e.stopImmediatePropagation())
			}
		})) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
	}
	S.event = {
		global: {},
		add: function(t, e, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
			if (V(t)) {
				n.handler && (n = (o = n)
						.handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
						return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
					}), l = (e = (e || "")
						.match(P) || [""])
					.length;
				while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "")
					.split(".")
					.sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
						type: d,
						origType: g,
						data: r,
						handler: n,
						guid: n.guid,
						selector: i,
						needsContext: i && S.expr.match.needsContext.test(i),
						namespace: h.join(".")
					}, o), (p = u[d]) || ((p = u[d] = [])
						.delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
			}
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
			if (v && (u = v.events)) {
				l = (t = (t || "")
						.match(P) || [""])
					.length;
				while (l--)
					if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "")
						.split(".")
						.sort(), d) {
						f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
						while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
						a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
					} else
						for (d in u) S.event.remove(e, d + t[l], n, r, !0);
				S.isEmptyObject(u) && Y.remove(e, "handle events")
			}
		},
		dispatch: function(e) {
			var t, n, r, i, o, a, s = new Array(arguments.length),
				u = S.event.fix(e),
				l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
				c = S.event.special[u.type] || {};
			for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
			if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
				a = S.event.handlers.call(this, u, l), t = 0;
				while ((i = a[t++]) && !u.isPropagationStopped()) {
					u.currentTarget = i.elem, n = 0;
					while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {})
							.handle || o.handler)
						.apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
				}
				return c.postDispatch && c.postDispatch.call(this, u), u.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, a, s = [],
				u = t.delegateCount,
				l = e.target;
			if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
				for (; l !== this; l = l.parentNode || this)
					if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
						for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n])
							.selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this)
							.index(l) : S.find(i, this, null, [l])
							.length), a[i] && o.push(r);
						o.length && s.push({
							elem: l,
							handlers: o
						})
					} return l = this, u < t.length && s.push({
				elem: l,
				handlers: t.slice(u)
			}), s
		},
		addProp: function(t, e) {
			Object.defineProperty(S.Event.prototype, t, {
				enumerable: !0,
				configurable: !0,
				get: m(e) ? function() {
					if (this.originalEvent) return e(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[t]
				},
				set: function(e) {
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e
					})
				}
			})
		},
		fix: function(e) {
			return e[S.expando] ? e : new S.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				setup: function(e) {
					var t = this || e;
					return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1
				},
				trigger: function(e) {
					var t = this || e;
					return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
				},
				_default: function(e) {
					var t = e.target;
					return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, S.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, S.Event = function(e, t) {
		if (!(this instanceof S.Event)) return new S.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
	}, S.Event.prototype = {
		constructor: S.Event,
		isDefaultPrevented: Te,
		isPropagationStopped: Te,
		isImmediatePropagationStopped: Te,
		isSimulated: !1,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, S.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		"char": !0,
		code: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: !0
	}, S.event.addProp), S.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		S.event.special[e] = {
			setup: function() {
				return Se(this, e, Ce), !1
			},
			trigger: function() {
				return Se(this, e), !0
			},
			_default: function() {
				return !0
			},
			delegateType: t
		}
	}), S.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, i) {
		S.event.special[e] = {
			delegateType: i,
			bindType: i,
			handle: function(e) {
				var t, n = e.relatedTarget,
					r = e.handleObj;
				return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
			}
		}
	}), S.fn.extend({
		on: function(e, t, n, r) {
			return Ee(this, e, t, n, r)
		},
		one: function(e, t, n, r) {
			return Ee(this, e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget)
				.off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() {
				S.event.remove(this, e, n, t)
			})
		}
	});
	var ke = /<script|<style|<link/i,
		Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function je(e, t) {
		return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e)
			.children("tbody")[0] || e
	}

	function De(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function qe(e) {
		return "true/" === (e.type || "")
			.slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}

	function Le(e, t) {
		var n, r, i, o, a, s;
		if (1 === t.nodeType) {
			if (Y.hasData(e) && (s = Y.get(e)
				.events))
				for (i in Y.remove(t, "handle events"), s)
					for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
			Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
		}
	}

	function He(n, r, i, o) {
		r = g(r);
		var e, t, a, s, u, l, c = 0,
			f = n.length,
			p = f - 1,
			d = r[0],
			h = m(d);
		if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function(e) {
			var t = n.eq(e);
			h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
		});
		if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o))
			.firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
			for (s = (a = S.map(ve(e, "script"), De))
				.length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
			if (s)
				for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "")
					.toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
						nonce: u.nonce || u.getAttribute("nonce")
					}, l) : b(u.textContent.replace(Ne, ""), u, l))
		}
		return n
	}

	function Oe(e, t, n) {
		for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
		return e
	}
	S.extend({
		htmlPrefilter: function(e) {
			return e
		},
		clone: function(e, t, n) {
			var r, i, o, a, s, u, l, c = e.cloneNode(!0),
				f = ie(e);
			if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
				for (a = ve(c), r = 0, i = (o = ve(e))
					.length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
			if (t)
				if (n)
					for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
				else Le(e, c);
			return 0 < (a = ve(c, "script"))
				.length && ye(a, !f && ve(e, "script")), c
		},
		cleanData: function(e) {
			for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
				if (V(n)) {
					if (t = n[Y.expando]) {
						if (t.events)
							for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
						n[Y.expando] = void 0
					}
					n[Q.expando] && (n[Q.expando] = void 0)
				}
		}
	}), S.fn.extend({
		detach: function(e) {
			return Oe(this, e, !0)
		},
		remove: function(e) {
			return Oe(this, e)
		},
		text: function(e) {
			return $(this, function(e) {
				return void 0 === e ? S.text(this) : this.empty()
					.each(function() {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
					})
			}, null, e, arguments.length)
		},
		append: function() {
			return He(this, arguments, function(e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e)
					.appendChild(e)
			})
		},
		prepend: function() {
			return He(this, arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = je(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return He(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return He(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return S.clone(this, e, t)
			})
		},
		html: function(e) {
			return $(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = S.htmlPrefilter(e);
					try {
						for (; n < r; n++) 1 === (t = this[n] || {})
							.nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty()
					.append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var n = [];
			return He(this, arguments, function(e) {
				var t = this.parentNode;
				S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
			}, n)
		}
	}), S.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, a) {
		S.fn[e] = function(e) {
			for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
			return this.pushStack(n)
		}
	});
	var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
		Re = function(e) {
			var t = e.ownerDocument.defaultView;
			return t && t.opener || (t = C), t.getComputedStyle(e)
		},
		Me = function(e, t, n) {
			var r, i, o = {};
			for (i in t) o[i] = e.style[i], e.style[i] = t[i];
			for (i in r = n.call(e), t) e.style[i] = o[i];
			return r
		},
		Ie = new RegExp(ne.join("|"), "i");

	function We(e, t, n) {
		var r, i, o, a, s = e.style;
		return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
	}

	function Fe(e, t) {
		return {
			get: function() {
				if (!e()) return (this.get = t)
					.apply(this, arguments);
				delete this.get
			}
		}
	}! function() {
		function e() {
			if (l) {
				u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u)
					.appendChild(l);
				var e = C.getComputedStyle(l);
				n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
			}
		}

		function t(e) {
			return Math.round(parseFloat(e))
		}
		var n, r, i, o, a, s, u = E.createElement("div"),
			l = E.createElement("div");
		l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0)
			.style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
				boxSizingReliable: function() {
					return e(), r
				},
				pixelBoxStyles: function() {
					return e(), o
				},
				pixelPosition: function() {
					return e(), n
				},
				reliableMarginLeft: function() {
					return e(), s
				},
				scrollboxSize: function() {
					return e(), i
				},
				reliableTrDimensions: function() {
					var e, t, n, r;
					return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e)
						.appendChild(t)
						.appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
				}
			}))
	}();
	var Be = ["Webkit", "Moz", "ms"],
		$e = E.createElement("div")
		.style,
		_e = {};

	function ze(e) {
		var t = S.cssProps[e] || _e[e];
		return t || (e in $e ? e : _e[e] = function(e) {
			var t = e[0].toUpperCase() + e.slice(1),
				n = Be.length;
			while (n--)
				if ((e = Be[n] + t) in $e) return e
		}(e) || e)
	}
	var Ue = /^(none|table(?!-c[ea]).+)/,
		Xe = /^--/,
		Ve = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ge = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function Ye(e, t, n) {
		var r = te.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
	}

	function Qe(e, t, n, r, i, o) {
		var a = "width" === t ? 1 : 0,
			s = 0,
			u = 0;
		if (n === (r ? "border" : "content")) return 0;
		for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
		return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
	}

	function Je(e, t, n) {
		var r = Re(e),
			i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
			o = i,
			a = We(e, t, r),
			s = "offset" + t[0].toUpperCase() + t.slice(1);
		if (Pe.test(a)) {
			if (!n) return a;
			a = "auto"
		}
		return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects()
			.length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
	}

	function Ke(e, t, n, r, i) {
		return new Ke.prototype.init(e, t, n, r, i)
	}
	S.extend({
			cssHooks: {
				opacity: {
					get: function(e, t) {
						if (t) {
							var n = We(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				animationIterationCount: !0,
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				gridArea: !0,
				gridColumn: !0,
				gridColumnEnd: !0,
				gridColumnStart: !0,
				gridRow: !0,
				gridRowEnd: !0,
				gridRowStart: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {},
			style: function(e, t, n, r) {
				if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var i, o, a, s = X(t),
						u = Xe.test(t),
						l = e.style;
					if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
					"string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
				}
			},
			css: function(e, t, n, r) {
				var i, o, a, s = X(t);
				return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
			}
		}), S.each(["height", "width"], function(e, u) {
			S.cssHooks[u] = {
				get: function(e, t, n) {
					if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects()
						.length && e.getBoundingClientRect()
						.width ? Je(e, u, n) : Me(e, Ve, function() {
							return Je(e, u, n)
						})
				},
				set: function(e, t, n) {
					var r, i = Re(e),
						o = !y.scrollboxSize() && "absolute" === i.position,
						a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
						s = n ? Qe(e, u, n, a, i) : 0;
					return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s)
				}
			}
		}), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e, t) {
			if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect()
				.left - Me(e, {
					marginLeft: 0
				}, function() {
					return e.getBoundingClientRect()
						.left
				})) + "px"
		}), S.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(i, o) {
			S.cssHooks[i + o] = {
				expand: function(e) {
					for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
					return n
				}
			}, "margin" !== i && (S.cssHooks[i + o].set = Ye)
		}), S.fn.extend({
			css: function(e, t) {
				return $(this, function(e, t, n) {
					var r, i, o = {},
						a = 0;
					if (Array.isArray(t)) {
						for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
						return o
					}
					return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
				}, e, t, 1 < arguments.length)
			}
		}), ((S.Tween = Ke)
			.prototype = {
				constructor: Ke,
				init: function(e, t, n, r, i, o) {
					this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
				},
				cur: function() {
					var e = Ke.propHooks[this.prop];
					return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
				},
				run: function(e) {
					var t, n = Ke.propHooks[this.prop];
					return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
				}
			})
		.init.prototype = Ke.prototype, (Ke.propHooks = {
			_default: {
				get: function(e) {
					var t;
					return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
				},
				set: function(e) {
					S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
				}
			}
		})
		.scrollTop = Ke.propHooks.scrollLeft = {
			set: function(e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, S.easing = {
			linear: function(e) {
				return e
			},
			swing: function(e) {
				return .5 - Math.cos(e * Math.PI) / 2
			},
			_default: "swing"
		}, S.fx = Ke.prototype.init, S.fx.step = {};
	var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
		it = /queueHooks$/;

	function ot() {
		et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick())
	}

	function at() {
		return C.setTimeout(function() {
			Ze = void 0
		}), Ze = Date.now()
	}

	function st(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function ut(e, t, n) {
		for (var r, i = (lt.tweeners[t] || [])
			.concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function lt(o, e, t) {
		var n, a, r = 0,
			i = lt.prefilters.length,
			s = S.Deferred()
			.always(function() {
				delete u.elem
			}),
			u = function() {
				if (a) return !1;
				for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
				return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
			},
			l = s.promise({
				elem: o,
				props: S.extend({}, e),
				opts: S.extend(!0, {
					specialEasing: {},
					easing: S.easing._default
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: Ze || at(),
				duration: t.duration,
				tweens: [],
				createTween: function(e, t) {
					var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
					return l.tweens.push(n), n
				},
				stop: function(e) {
					var t = 0,
						n = e ? l.tweens.length : 0;
					if (a) return this;
					for (a = !0; t < n; t++) l.tweens[t].run(1);
					return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
				}
			}),
			c = l.props;
		for (! function(e, t) {
			var n, r, i, o, a;
			for (n in e)
				if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
					for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
				else t[r] = i
		}(c, l.opts.specialEasing); r < i; r++)
			if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue)
				.stop = n.stop.bind(n)), n;
		return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress)
			.done(l.opts.done, l.opts.complete)
			.fail(l.opts.fail)
			.always(l.opts.always), S.fx.timer(S.extend(u, {
				elem: o,
				anim: l,
				queue: l.opts.queue
			})), l
	}
	S.Animation = S.extend(lt, {
			tweeners: {
				"*": [function(e, t) {
					var n = this.createTween(e, t);
					return se(n.elem, e, te.exec(t), n), n
				}]
			},
			tweener: function(e, t) {
				m(e) ? (t = e, e = ["*"]) : e = e.match(P);
				for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
			},
			prefilters: [function(e, t, n) {
				var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
					p = this,
					d = {},
					h = e.style,
					g = e.nodeType && ae(e),
					v = Y.get(e, "fxshow");
				for (r in n.queue || (null == (a = S._queueHooks(e, "fx"))
					.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
						a.unqueued || s()
					}), a.unqueued++, p.always(function() {
						p.always(function() {
							a.unqueued--, S.queue(e, "fx")
								.length || a.empty.fire()
						})
					})), t)
					if (i = t[r], rt.test(i)) {
						if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
							if ("show" !== i || !v || void 0 === v[r]) continue;
							g = !0
						}
						d[r] = v && v[r] || S.style(e, r)
					} if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
					for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
						h.display = l
					}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
						h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
					})), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
						display: l
					}), o && (v.hidden = !g), g && le([e], !0), p.done(function() {
						for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
					})), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
			}],
			prefilter: function(e, t) {
				t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
			}
		}), S.speed = function(e, t, n) {
			var r = e && "object" == typeof e ? S.extend({}, e) : {
				complete: n || !n && t || m(e) && e,
				duration: e,
				easing: n && t || t && !m(t) && t
			};
			return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
				m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
			}, r
		}, S.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter(ae)
					.css("opacity", 0)
					.show()
					.end()
					.animate({
						opacity: t
					}, e, n, r)
			},
			animate: function(t, e, n, r) {
				var i = S.isEmptyObject(t),
					o = S.speed(e, n, r),
					a = function() {
						var e = lt(this, S.extend({}, t), o);
						(i || Y.get(this, "finish")) && e.stop(!0)
					};
				return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
			},
			stop: function(i, e, o) {
				var a = function(e) {
					var t = e.stop;
					delete e.stop, t(o)
				};
				return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
					var e = !0,
						t = null != i && i + "queueHooks",
						n = S.timers,
						r = Y.get(this);
					if (t) r[t] && r[t].stop && a(r[t]);
					else
						for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
					for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
					!e && o || S.dequeue(this, i)
				})
			},
			finish: function(a) {
				return !1 !== a && (a = a || "fx"), this.each(function() {
					var e, t = Y.get(this),
						n = t[a + "queue"],
						r = t[a + "queueHooks"],
						i = S.timers,
						o = n ? n.length : 0;
					for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
					for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
					delete t.finish
				})
			}
		}), S.each(["toggle", "show", "hide"], function(e, r) {
			var i = S.fn[r];
			S.fn[r] = function(e, t, n) {
				return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
			}
		}), S.each({
			slideDown: st("show"),
			slideUp: st("hide"),
			slideToggle: st("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, r) {
			S.fn[e] = function(e, t, n) {
				return this.animate(r, e, t, n)
			}
		}), S.timers = [], S.fx.tick = function() {
			var e, t = 0,
				n = S.timers;
			for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
			n.length || S.fx.stop(), Ze = void 0
		}, S.fx.timer = function(e) {
			S.timers.push(e), S.fx.start()
		}, S.fx.interval = 13, S.fx.start = function() {
			et || (et = !0, ot())
		}, S.fx.stop = function() {
			et = null
		}, S.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, S.fn.delay = function(r, e) {
			return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
				var n = C.setTimeout(e, r);
				t.stop = function() {
					C.clearTimeout(n)
				}
			})
		}, tt = E.createElement("input"), nt = E.createElement("select")
		.appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input"))
		.value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
	var ct, ft = S.expr.attrHandle;
	S.fn.extend({
		attr: function(e, t) {
			return $(this, S.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function(e) {
			return this.each(function() {
				S.removeAttr(this, e)
			})
		}
	}), S.extend({
		attr: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!y.radioValue && "radio" === t && A(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var n, r = 0,
				i = t && t.match(P);
			if (i && 1 === e.nodeType)
				while (n = i[r++]) e.removeAttribute(n)
		}
	}), ct = {
		set: function(e, t, n) {
			return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var a = ft[t] || S.find.attr;
		ft[t] = function(e, t, n) {
			var r, i, o = t.toLowerCase();
			return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r
		}
	});
	var pt = /^(?:input|select|textarea|button)$/i,
		dt = /^(?:a|area)$/i;

	function ht(e) {
		return (e.match(P) || [])
			.join(" ")
	}

	function gt(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function vt(e) {
		return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
	}
	S.fn.extend({
		prop: function(e, t) {
			return $(this, S.prop, e, t, 1 < arguments.length)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[S.propFix[e] || e]
			})
		}
	}), S.extend({
		prop: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = S.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), y.optSelected || (S.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		S.propFix[this.toLowerCase()] = this
	}), S.fn.extend({
		addClass: function(t) {
			var e, n, r, i, o, a, s, u = 0;
			if (m(t)) return this.each(function(e) {
				S(this)
					.addClass(t.call(this, e, gt(this)))
			});
			if ((e = vt(t))
				.length)
				while (n = this[u++])
					if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
						a = 0;
						while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
						i !== (s = ht(r)) && n.setAttribute("class", s)
					} return this
		},
		removeClass: function(t) {
			var e, n, r, i, o, a, s, u = 0;
			if (m(t)) return this.each(function(e) {
				S(this)
					.removeClass(t.call(this, e, gt(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ((e = vt(t))
				.length)
				while (n = this[u++])
					if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
						a = 0;
						while (o = e[a++])
							while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
						i !== (s = ht(r)) && n.setAttribute("class", s)
					} return this
		},
		toggleClass: function(i, t) {
			var o = typeof i,
				a = "string" === o || Array.isArray(i);
			return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
				S(this)
					.toggleClass(i.call(this, e, gt(this), t), t)
			}) : this.each(function() {
				var e, t, n, r;
				if (a) {
					t = 0, n = S(this), r = vt(i);
					while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
				} else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
			})
		},
		hasClass: function(e) {
			var t, n, r = 0;
			t = " " + e + " ";
			while (n = this[r++])
				if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ")
					.indexOf(t)) return !0;
			return !1
		}
	});
	var yt = /\r/g;
	S.fn.extend({
		val: function(n) {
			var r, e, i, t = this[0];
			return arguments.length ? (i = m(n), this.each(function(e) {
				var t;
				1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this)
					.val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
					return null == e ? "" : e + ""
				})), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
			})) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
		}
	}), S.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = S.find.attr(e, "value");
					return null != t ? t : ht(S.text(e))
				}
			},
			select: {
				get: function(e) {
					var t, n, r, i = e.options,
						o = e.selectedIndex,
						a = "select-one" === e.type,
						s = a ? null : [],
						u = a ? o + 1 : i.length;
					for (r = o < 0 ? u : a ? o : 0; r < u; r++)
						if (((n = i[r])
							.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
							if (t = S(n)
								.val(), a) return t;
							s.push(t)
						} return s
				},
				set: function(e, t) {
					var n, r, i = e.options,
						o = S.makeArray(t),
						a = i.length;
					while (a--)((r = i[a])
						.selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), S.each(["radio", "checkbox"], function() {
		S.valHooks[this] = {
			set: function(e, t) {
				if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e)
					.val(), t)
			}
		}, y.checkOn || (S.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), y.focusin = "onfocusin" in C;
	var mt = /^(?:focusinfocus|focusoutblur)$/,
		xt = function(e) {
			e.stopPropagation()
		};
	S.extend(S.event, {
		trigger: function(e, t, n, r) {
			var i, o, a, s, u, l, c, f, p = [n || E],
				d = v.call(e, "type") ? e.type : e,
				h = v.call(e, "namespace") ? e.namespace.split(".") : [];
			if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split("."))
					.shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e))
				.isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
				if (!r && !c.noBubble && !x(n)) {
					for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
					a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
				}
				i = 0;
				while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
				return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result
			}
		},
		simulate: function(e, t, n) {
			var r = S.extend(new S.Event, n, {
				type: e,
				isSimulated: !0
			});
			S.event.trigger(r, null, t)
		}
	}), S.fn.extend({
		trigger: function(e, t) {
			return this.each(function() {
				S.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return S.event.trigger(e, t, n, !0)
		}
	}), y.focusin || S.each({
		focus: "focusin",
		blur: "focusout"
	}, function(n, r) {
		var i = function(e) {
			S.event.simulate(r, e.target, S.event.fix(e))
		};
		S.event.special[r] = {
			setup: function() {
				var e = this.ownerDocument || this.document || this,
					t = Y.access(e, r);
				t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
			},
			teardown: function() {
				var e = this.ownerDocument || this.document || this,
					t = Y.access(e, r) - 1;
				t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
			}
		}
	});
	var bt = C.location,
		wt = {
			guid: Date.now()
		},
		Tt = /\?/;
	S.parseXML = function(e) {
		var t, n;
		if (!e || "string" != typeof e) return null;
		try {
			t = (new C.DOMParser)
				.parseFromString(e, "text/xml")
		} catch (e) {}
		return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) {
				return e.textContent
			})
			.join("\n") : e)), t
	};
	var Ct = /\[\]$/,
		Et = /\r?\n/g,
		St = /^(?:submit|button|image|reset|file)$/i,
		kt = /^(?:input|select|textarea|keygen)/i;

	function At(n, e, r, i) {
		var t;
		if (Array.isArray(e)) S.each(e, function(e, t) {
			r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
		});
		else if (r || "object" !== w(e)) i(n, e);
		else
			for (t in e) At(n + "[" + t + "]", e[t], r, i)
	}
	S.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				var n = m(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (null == e) return "";
		if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
			i(this.name, this.value)
		});
		else
			for (n in e) At(n, e[n], t, i);
		return r.join("&")
	}, S.fn.extend({
		serialize: function() {
			return S.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
					var e = S.prop(this, "elements");
					return e ? S.makeArray(e) : this
				})
				.filter(function() {
					var e = this.type;
					return this.name && !S(this)
						.is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
				})
				.map(function(e, t) {
					var n = S(this)
						.val();
					return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
						return {
							name: t.name,
							value: e.replace(Et, "\r\n")
						}
					}) : {
						name: t.name,
						value: n.replace(Et, "\r\n")
					}
				})
				.get()
		}
	});
	var Nt = /%20/g,
		jt = /#.*$/,
		Dt = /([?&])_=[^&]*/,
		qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Lt = /^(?:GET|HEAD)$/,
		Ht = /^\/\//,
		Ot = {},
		Pt = {},
		Rt = "*/".concat("*"),
		Mt = E.createElement("a");

	function It(o) {
		return function(e, t) {
			"string" != typeof e && (t = e, e = "*");
			var n, r = 0,
				i = e.toLowerCase()
				.match(P) || [];
			if (m(t))
				while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || [])
						.unshift(t)) : (o[n] = o[n] || [])
					.push(t)
		}
	}

	function Wt(t, i, o, a) {
		var s = {},
			u = t === Pt;

		function l(e) {
			var r;
			return s[e] = !0, S.each(t[e] || [], function(e, t) {
				var n = t(i, o, a);
				return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
			}), r
		}
		return l(i.dataTypes[0]) || !s["*"] && l("*")
	}

	function Ft(e, t) {
		var n, r, i = S.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && S.extend(!0, e, r), e
	}
	Mt.href = bt.href, S.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: bt.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Rt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": S.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
		},
		ajaxPrefilter: It(Ot),
		ajaxTransport: It(Pt),
		ajax: function(e, t) {
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
				y = v.context || v,
				m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
				x = S.Deferred(),
				b = S.Callbacks("once memory"),
				w = v.statusCode || {},
				a = {},
				s = {},
				u = "canceled",
				T = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (h) {
							if (!n) {
								n = {};
								while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || [])
									.concat(t[2])
							}
							t = n[e.toLowerCase() + " "]
						}
						return null == t ? null : t.join(", ")
					},
					getAllResponseHeaders: function() {
						return h ? p : null
					},
					setRequestHeader: function(e, t) {
						return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
					},
					overrideMimeType: function(e) {
						return null == h && (v.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (h) T.always(e[T.status]);
							else
								for (t in e) w[t] = [w[t], e[t]];
						return this
					},
					abort: function(e) {
						var t = e || u;
						return c && c.abort(t), l(0, t), this
					}
				};
			if (x.promise(T), v.url = ((e || v.url || bt.href) + "")
				.replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*")
				.toLowerCase()
				.match(P) || [""], null == v.crossDomain) {
				r = E.createElement("a");
				try {
					r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
				} catch (e) {
					v.crossDomain = !0
				}
			}
			if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;
			for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "")
				.indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
			if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
			if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
				if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
				v.async && 0 < v.timeout && (d = C.setTimeout(function() {
					T.abort("timeout")
				}, v.timeout));
				try {
					h = !1, c.send(a, l)
				} catch (e) {
					if (h) throw e;
					l(-1, e)
				}
			} else l(-1, "No Transport");

			function l(e, t, n, r) {
				var i, o, a, s, u, l = t;
				h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
					var r, i, o, a, s = e.contents,
						u = e.dataTypes;
					while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
					if (r)
						for (i in s)
							if (s[i] && s[i].test(r)) {
								u.unshift(i);
								break
							} if (u[0] in n) o = u[0];
					else {
						for (i in n) {
							if (!u[0] || e.converters[i + " " + u[0]]) {
								o = i;
								break
							}
							a || (a = i)
						}
						o = o || a
					}
					if (o) return o !== u[0] && u.unshift(o), n[o]
				}(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
					var i, o, a, s, u, l = {},
						c = e.dataTypes.slice();
					if (c[1])
						for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
					o = c.shift();
					while (o)
						if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
							if ("*" === o) o = u;
							else if ("*" !== u && u !== o) {
						if (!(a = l[u + " " + o] || l["* " + o]))
							for (i in l)
								if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
									!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
									break
								} if (!0 !== a)
							if (a && e["throws"]) t = a(t);
							else try {
								t = a(t)
							} catch (e) {
								return {
									state: "parsererror",
									error: a ? e : "No conversion from " + u + " to " + o
								}
							}
					}
					return {
						state: "success",
						data: t
					}
				}(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
			}
			return T
		},
		getJSON: function(e, t, n) {
			return S.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return S.get(e, void 0, t, "script")
		}
	}), S.each(["get", "post"], function(e, i) {
		S[i] = function(e, t, n, r) {
			return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
				url: e,
				type: i,
				dataType: r,
				data: t,
				success: n
			}, S.isPlainObject(e) && e))
		}
	}), S.ajaxPrefilter(function(e) {
		var t;
		for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
	}), S._evalUrl = function(e, t, n) {
		return S.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			converters: {
				"text script": function() {}
			},
			dataFilter: function(e) {
				S.globalEval(e, t, n)
			}
		})
	}, S.fn.extend({
		wrapAll: function(e) {
			var t;
			return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument)
				.eq(0)
				.clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					var e = this;
					while (e.firstElementChild) e = e.firstElementChild;
					return e
				})
				.append(this)), this
		},
		wrapInner: function(n) {
			return m(n) ? this.each(function(e) {
				S(this)
					.wrapInner(n.call(this, e))
			}) : this.each(function() {
				var e = S(this),
					t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		},
		wrap: function(t) {
			var n = m(t);
			return this.each(function(e) {
				S(this)
					.wrapAll(n ? t.call(this, e) : t)
			})
		},
		unwrap: function(e) {
			return this.parent(e)
				.not("body")
				.each(function() {
					S(this)
						.replaceWith(this.childNodes)
				}), this
		}
	}), S.expr.pseudos.hidden = function(e) {
		return !S.expr.pseudos.visible(e)
	}, S.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects()
			.length)
	}, S.ajaxSettings.xhr = function() {
		try {
			return new C.XMLHttpRequest
		} catch (e) {}
	};
	var Bt = {
			0: 200,
			1223: 204
		},
		$t = S.ajaxSettings.xhr();
	y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function(i) {
		var o, a;
		if (y.cors || $t && !i.crossDomain) return {
			send: function(e, t) {
				var n, r = i.xhr();
				if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
					for (n in i.xhrFields) r[n] = i.xhrFields[n];
				for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
				o = function(e) {
					return function() {
						o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
							binary: r.response
						} : {
							text: r.responseText
						}, r.getAllResponseHeaders()))
					}
				}, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
					4 === r.readyState && C.setTimeout(function() {
						o && a()
					})
				}, o = o("abort");
				try {
					r.send(i.hasContent && i.data || null)
				} catch (e) {
					if (o) throw e
				}
			},
			abort: function() {
				o && o()
			}
		}
	}), S.ajaxPrefilter(function(e) {
		e.crossDomain && (e.contents.script = !1)
	}), S.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return S.globalEval(e), e
			}
		}
	}), S.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), S.ajaxTransport("script", function(n) {
		var r, i;
		if (n.crossDomain || n.scriptAttrs) return {
			send: function(e, t) {
				r = S("<script>")
					.attr(n.scriptAttrs || {})
					.prop({
						charset: n.scriptCharset,
						src: n.url
					})
					.on("load error", i = function(e) {
						r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
					}), E.head.appendChild(r[0])
			},
			abort: function() {
				i && i()
			}
		}
	});
	var _t, zt = [],
		Ut = /(=)\?(?=&|$)|\?\?/;
	S.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = zt.pop() || S.expando + "_" + wt.guid++;
			return this[e] = !0, e
		}
	}), S.ajaxPrefilter("json jsonp", function(e, t, n) {
		var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "")
			.indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
		if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
			return o || S.error(r + " was not called"), o[0]
		}, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
			o = arguments
		}, n.always(function() {
			void 0 === i ? S(C)
				.removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0
		}), "script"
	}), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("")
			.body)
		.innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function(e, t, n) {
		return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument(""))
				.createElement("base"))
			.href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o)
			.remove(), S.merge([], i.childNodes)));
		var r, i, o
	}, S.fn.load = function(e, t, n) {
		var r, i, o, a = this,
			s = e.indexOf(" ");
		return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
				url: e,
				type: i || "GET",
				dataType: "html",
				data: t
			})
			.done(function(e) {
				o = arguments, a.html(r ? S("<div>")
					.append(S.parseHTML(e))
					.find(r) : e)
			})
			.always(n && function(e, t) {
				a.each(function() {
					n.apply(this, o || [e.responseText, t, e])
				})
			}), this
	}, S.expr.pseudos.animated = function(t) {
		return S.grep(S.timers, function(e) {
				return t === e.elem
			})
			.length
	}, S.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, a, s, u, l = S.css(e, "position"),
				c = S(e),
				f = {};
			"static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u)
				.indexOf("auto") ? (a = (r = c.position())
					.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
		}
	}, S.fn.extend({
		offset: function(t) {
			if (arguments.length) return void 0 === t ? this : this.each(function(e) {
				S.offset.setOffset(this, t, e)
			});
			var e, n, r = this[0];
			return r ? r.getClientRects()
				.length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
					top: e.top + n.pageYOffset,
					left: e.left + n.pageXOffset
				}) : {
					top: 0,
					left: 0
				} : void 0
		},
		position: function() {
			if (this[0]) {
				var e, t, n, r = this[0],
					i = {
						top: 0,
						left: 0
					};
				if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
				else {
					t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
					while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
					e && e !== r && 1 === e.nodeType && ((i = S(e)
							.offset())
						.top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
				}
				return {
					top: t.top - i.top - S.css(r, "marginTop", !0),
					left: t.left - i.left - S.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var e = this.offsetParent;
				while (e && "static" === S.css(e, "position")) e = e.offsetParent;
				return e || re
			})
		}
	}), S.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, i) {
		var o = "pageYOffset" === i;
		S.fn[t] = function(e) {
			return $(this, function(e, t, n) {
				var r;
				if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
				r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
			}, t, e, arguments.length)
		}
	}), S.each(["top", "left"], function(e, n) {
		S.cssHooks[n] = Fe(y.pixelPosition, function(e, t) {
			if (t) return t = We(e, n), Pe.test(t) ? S(e)
				.position()[n] + "px" : t
		})
	}), S.each({
		Height: "height",
		Width: "width"
	}, function(a, s) {
		S.each({
			padding: "inner" + a,
			content: s,
			"": "outer" + a
		}, function(r, o) {
			S.fn[o] = function(e, t) {
				var n = arguments.length && (r || "boolean" != typeof e),
					i = r || (!0 === e || !0 === t ? "margin" : "border");
				return $(this, function(e, t, n) {
					var r;
					return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
				}, s, n ? e : void 0, n)
			}
		})
	}), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		S.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), S.fn.extend({
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		},
		hover: function(e, t) {
			return this.mouseenter(e)
				.mouseleave(t || e)
		}
	}), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
		S.fn[n] = function(e, t) {
			return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
		}
	});
	var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	S.proxy = function(e, t) {
		var n, r, i;
		if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
				return e.apply(t || this, r.concat(s.call(arguments)))
			})
			.guid = e.guid = e.guid || S.guid++, i
	}, S.holdReady = function(e) {
		e ? S.readyWait++ : S.ready(!0)
	}, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) {
		var t = S.type(e);
		return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
	}, S.trim = function(e) {
		return null == e ? "" : (e + "")
			.replace(Xt, "")
	}, "function" == typeof define && define.amd && define("jquery", [], function() {
		return S
	});
	var Vt = C.jQuery,
		Gt = C.$;
	return S.noConflict = function(e) {
		return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S
	}, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});

/*!
 * Bootstrap v5.2.0 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self)
		.bootstrap = e()
}(this, (function() {
	"use strict";
	const t = "transitionend",
		e = t => {
			let e = t.getAttribute("data-bs-target");
			if (!e || "#" === e) {
				let i = t.getAttribute("href");
				if (!i || !i.includes("#") && !i.startsWith(".")) return null;
				i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null
			}
			return e
		},
		i = t => {
			const i = e(t);
			return i && document.querySelector(i) ? i : null
		},
		n = t => {
			const i = e(t);
			return i ? document.querySelector(i) : null
		},
		s = e => {
			e.dispatchEvent(new Event(t))
		},
		o = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
		r = t => o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null,
		a = t => {
			if (!o(t) || 0 === t.getClientRects()
				.length) return !1;
			const e = "visible" === getComputedStyle(t)
				.getPropertyValue("visibility"),
				i = t.closest("details:not([open])");
			if (!i) return e;
			if (i !== t) {
				const e = t.closest("summary");
				if (e && e.parentNode !== i) return !1;
				if (null === e) return !1
			}
			return e
		},
		l = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
		c = t => {
			if (!document.documentElement.attachShadow) return null;
			if ("function" == typeof t.getRootNode) {
				const e = t.getRootNode();
				return e instanceof ShadowRoot ? e : null
			}
			return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null
		},
		h = () => {},
		d = t => {
			t.offsetHeight
		},
		u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
		f = [],
		p = () => "rtl" === document.documentElement.dir,
		g = t => {
			var e;
			e = () => {
				const e = u();
				if (e) {
					const i = t.NAME,
						n = e.fn[i];
					e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface)
				}
			}, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", (() => {
				for (const t of f) t()
			})), f.push(e)) : e()
		},
		m = t => {
			"function" == typeof t && t()
		},
		_ = (e, i, n = !0) => {
			if (!n) return void m(e);
			const o = (t => {
				if (!t) return 0;
				let {
					transitionDuration: e,
					transitionDelay: i
				} = window.getComputedStyle(t);
				const n = Number.parseFloat(e),
					s = Number.parseFloat(i);
				return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
			})(i) + 5;
			let r = !1;
			const a = ({
				target: n
			}) => {
				n === i && (r = !0, i.removeEventListener(t, a), m(e))
			};
			i.addEventListener(t, a), setTimeout((() => {
				r || s(i)
			}), o)
		},
		b = (t, e, i, n) => {
			const s = t.length;
			let o = t.indexOf(e);
			return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))])
		},
		v = /[^.]*(?=\..*)\.|.*/,
		y = /\..*/,
		w = /::\d+$/,
		A = {};
	let E = 1;
	const T = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		},
		C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

	function O(t, e) {
		return e && `${e}::${E++}` || t.uidEvent || E++
	}

	function x(t) {
		const e = O(t);
		return t.uidEvent = e, A[e] = A[e] || {}, A[e]
	}

	function k(t, e, i = null) {
		return Object.values(t)
			.find((t => t.callable === e && t.delegationSelector === i))
	}

	function L(t, e, i) {
		const n = "string" == typeof e,
			s = n ? i : e || i;
		let o = N(t);
		return C.has(o) || (o = t), [n, s, o]
	}

	function D(t, e, i, n, s) {
		if ("string" != typeof e || !t) return;
		let [o, r, a] = L(e, i, n);
		if (e in T) {
			const t = t => function(e) {
				if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
			};
			r = t(r)
		}
		const l = x(t),
			c = l[a] || (l[a] = {}),
			h = k(c, r, o ? i : null);
		if (h) return void(h.oneOff = h.oneOff && s);
		const d = O(r, e.replace(v, "")),
			u = o ? function(t, e, i) {
				return function n(s) {
					const o = t.querySelectorAll(e);
					for (let {
						target: r
					} = s; r && r !== this; r = r.parentNode)
						for (const a of o)
							if (a === r) return j(s, {
								delegateTarget: r
							}), n.oneOff && P.off(t, s.type, e, i), i.apply(r, [s])
				}
			}(t, i, r) : function(t, e) {
				return function i(n) {
					return j(n, {
						delegateTarget: t
					}), i.oneOff && P.off(t, n.type, e), e.apply(t, [n])
				}
			}(t, r);
		u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
	}

	function S(t, e, i, n, s) {
		const o = k(e[i], n, s);
		o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
	}

	function I(t, e, i, n) {
		const s = e[i] || {};
		for (const o of Object.keys(s))
			if (o.includes(n)) {
				const n = s[o];
				S(t, e, i, n.callable, n.delegationSelector)
			}
	}

	function N(t) {
		return t = t.replace(y, ""), T[t] || t
	}
	const P = {
		on(t, e, i, n) {
			D(t, e, i, n, !1)
		},
		one(t, e, i, n) {
			D(t, e, i, n, !0)
		},
		off(t, e, i, n) {
			if ("string" != typeof e || !t) return;
			const [s, o, r] = L(e, i, n), a = r !== e, l = x(t), c = l[r] || {}, h = e.startsWith(".");
			if (void 0 === o) {
				if (h)
					for (const i of Object.keys(l)) I(t, l, i, e.slice(1));
				for (const i of Object.keys(c)) {
					const n = i.replace(w, "");
					if (!a || e.includes(n)) {
						const e = c[i];
						S(t, l, r, e.callable, e.delegationSelector)
					}
				}
			} else {
				if (!Object.keys(c)
					.length) return;
				S(t, l, r, o, s ? i : null)
			}
		},
		trigger(t, e, i) {
			if ("string" != typeof e || !t) return null;
			const n = u();
			let s = null,
				o = !0,
				r = !0,
				a = !1;
			e !== N(e) && n && (s = n.Event(e, i), n(t)
				.trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
			let l = new Event(e, {
				bubbles: o,
				cancelable: !0
			});
			return l = j(l, i), a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l
		}
	};

	function j(t, e) {
		for (const [i, n] of Object.entries(e || {})) try {
			t[i] = n
		} catch (e) {
			Object.defineProperty(t, i, {
				configurable: !0,
				get: () => n
			})
		}
		return t
	}
	const M = new Map,
		H = {
			set(t, e, i) {
				M.has(t) || M.set(t, new Map);
				const n = M.get(t);
				n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
			},
			get: (t, e) => M.has(t) && M.get(t)
				.get(e) || null,
			remove(t, e) {
				if (!M.has(t)) return;
				const i = M.get(t);
				i.delete(e), 0 === i.size && M.delete(t)
			}
		};

	function $(t) {
		if ("true" === t) return !0;
		if ("false" === t) return !1;
		if (t === Number(t)
			.toString()) return Number(t);
		if ("" === t || "null" === t) return null;
		if ("string" != typeof t) return t;
		try {
			return JSON.parse(decodeURIComponent(t))
		} catch (e) {
			return t
		}
	}

	function W(t) {
		return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
	}
	const B = {
		setDataAttribute(t, e, i) {
			t.setAttribute(`data-bs-${W(e)}`, i)
		},
		removeDataAttribute(t, e) {
			t.removeAttribute(`data-bs-${W(e)}`)
		},
		getDataAttributes(t) {
			if (!t) return {};
			const e = {},
				i = Object.keys(t.dataset)
				.filter((t => t.startsWith("bs") && !t.startsWith("bsConfig")));
			for (const n of i) {
				let i = n.replace(/^bs/, "");
				i = i.charAt(0)
					.toLowerCase() + i.slice(1, i.length), e[i] = $(t.dataset[n])
			}
			return e
		},
		getDataAttribute: (t, e) => $(t.getAttribute(`data-bs-${W(e)}`))
	};
	class F {
		static get Default() {
			return {}
		}
		static get DefaultType() {
			return {}
		}
		static get NAME() {
			throw new Error('You have to implement the static method "NAME", for each component!')
		}
		_getConfig(t) {
			return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
		}
		_configAfterMerge(t) {
			return t
		}
		_mergeConfigObj(t, e) {
			const i = o(e) ? B.getDataAttribute(e, "config") : {};
			return {
				...this.constructor.Default,
				..."object" == typeof i ? i : {},
				...o(e) ? B.getDataAttributes(e) : {},
				..."object" == typeof t ? t : {}
			}
		}
		_typeCheckConfig(t, e = this.constructor.DefaultType) {
			for (const n of Object.keys(e)) {
				const s = e[n],
					r = t[n],
					a = o(r) ? "element" : null == (i = r) ? `${i}` : Object.prototype.toString.call(i)
					.match(/\s([a-z]+)/i)[1].toLowerCase();
				if (!new RegExp(s)
					.test(a)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)
			}
			var i
		}
	}
	class z extends F {
		constructor(t, e) {
			super(), (t = r(t)) && (this._element = t, this._config = this._getConfig(e), H.set(this._element, this.constructor.DATA_KEY, this))
		}
		dispose() {
			H.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY);
			for (const t of Object.getOwnPropertyNames(this)) this[t] = null
		}
		_queueCallback(t, e, i = !0) {
			_(t, e, i)
		}
		_getConfig(t) {
			return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
		}
		static getInstance(t) {
			return H.get(r(t), this.DATA_KEY)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
		}
		static get VERSION() {
			return "5.2.0"
		}
		static get DATA_KEY() {
			return `bs.${this.NAME}`
		}
		static get EVENT_KEY() {
			return `.${this.DATA_KEY}`
		}
		static eventName(t) {
			return `${t}${this.EVENT_KEY}`
		}
	}
	const R = (t, e = "hide") => {
		const i = `click.dismiss${t.EVENT_KEY}`,
			s = t.NAME;
		P.on(document, i, `[data-bs-dismiss="${s}"]`, (function(i) {
			if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
			const o = n(this) || this.closest(`.${s}`);
			t.getOrCreateInstance(o)[e]()
		}))
	};
	class q extends z {
		static get NAME() {
			return "alert"
		}
		close() {
			if (P.trigger(this._element, "close.bs.alert")
				.defaultPrevented) return;
			this._element.classList.remove("show");
			const t = this._element.classList.contains("fade");
			this._queueCallback((() => this._destroyElement()), this._element, t)
		}
		_destroyElement() {
			this._element.remove(), P.trigger(this._element, "closed.bs.alert"), this.dispose()
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = q.getOrCreateInstance(this);
				if ("string" == typeof t) {
					if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
					e[t](this)
				}
			}))
		}
	}
	R(q, "close"), g(q);
	const V = '[data-bs-toggle="button"]';
	class K extends z {
		static get NAME() {
			return "button"
		}
		toggle() {
			this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = K.getOrCreateInstance(this);
				"toggle" === t && e[t]()
			}))
		}
	}
	P.on(document, "click.bs.button.data-api", V, (t => {
		t.preventDefault();
		const e = t.target.closest(V);
		K.getOrCreateInstance(e)
			.toggle()
	})), g(K);
	const Q = {
			find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
			findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
			children: (t, e) => [].concat(...t.children)
				.filter((t => t.matches(e))),
			parents(t, e) {
				const i = [];
				let n = t.parentNode.closest(e);
				for (; n;) i.push(n), n = n.parentNode.closest(e);
				return i
			},
			prev(t, e) {
				let i = t.previousElementSibling;
				for (; i;) {
					if (i.matches(e)) return [i];
					i = i.previousElementSibling
				}
				return []
			},
			next(t, e) {
				let i = t.nextElementSibling;
				for (; i;) {
					if (i.matches(e)) return [i];
					i = i.nextElementSibling
				}
				return []
			},
			focusableChildren(t) {
				const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`))
					.join(",");
				return this.find(e, t)
					.filter((t => !l(t) && a(t)))
			}
		},
		X = {
			endCallback: null,
			leftCallback: null,
			rightCallback: null
		},
		Y = {
			endCallback: "(function|null)",
			leftCallback: "(function|null)",
			rightCallback: "(function|null)"
		};
	class U extends F {
		constructor(t, e) {
			super(), this._element = t, t && U.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
		}
		static get Default() {
			return X
		}
		static get DefaultType() {
			return Y
		}
		static get NAME() {
			return "swipe"
		}
		dispose() {
			P.off(this._element, ".bs.swipe")
		}
		_start(t) {
			this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
		}
		_end(t) {
			this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), m(this._config.endCallback)
		}
		_move(t) {
			this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
		}
		_handleSwipe() {
			const t = Math.abs(this._deltaX);
			if (t <= 40) return;
			const e = t / this._deltaX;
			this._deltaX = 0, e && m(e > 0 ? this._config.rightCallback : this._config.leftCallback)
		}
		_initEvents() {
			this._supportPointerEvents ? (P.on(this._element, "pointerdown.bs.swipe", (t => this._start(t))), P.on(this._element, "pointerup.bs.swipe", (t => this._end(t))), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.swipe", (t => this._start(t))), P.on(this._element, "touchmove.bs.swipe", (t => this._move(t))), P.on(this._element, "touchend.bs.swipe", (t => this._end(t))))
		}
		_eventIsPointerPenTouch(t) {
			return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
		}
		static isSupported() {
			return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
		}
	}
	const G = "next",
		J = "prev",
		Z = "left",
		tt = "right",
		et = "slid.bs.carousel",
		it = "carousel",
		nt = "active",
		st = {
			ArrowLeft: tt,
			ArrowRight: Z
		},
		ot = {
			interval: 5e3,
			keyboard: !0,
			pause: "hover",
			ride: !1,
			touch: !0,
			wrap: !0
		},
		rt = {
			interval: "(number|boolean)",
			keyboard: "boolean",
			pause: "(string|boolean)",
			ride: "(boolean|string)",
			touch: "boolean",
			wrap: "boolean"
		};
	class at extends z {
		constructor(t, e) {
			super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = Q.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === it && this.cycle()
		}
		static get Default() {
			return ot
		}
		static get DefaultType() {
			return rt
		}
		static get NAME() {
			return "carousel"
		}
		next() {
			this._slide(G)
		}
		nextWhenVisible() {
			!document.hidden && a(this._element) && this.next()
		}
		prev() {
			this._slide(J)
		}
		pause() {
			this._isSliding && s(this._element), this._clearInterval()
		}
		cycle() {
			this._clearInterval(), this._updateInterval(), this._interval = setInterval((() => this.nextWhenVisible()), this._config.interval)
		}
		_maybeEnableCycle() {
			this._config.ride && (this._isSliding ? P.one(this._element, et, (() => this.cycle())) : this.cycle())
		}
		to(t) {
			const e = this._getItems();
			if (t > e.length - 1 || t < 0) return;
			if (this._isSliding) return void P.one(this._element, et, (() => this.to(t)));
			const i = this._getItemIndex(this._getActive());
			if (i === t) return;
			const n = t > i ? G : J;
			this._slide(n, e[t])
		}
		dispose() {
			this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
		}
		_configAfterMerge(t) {
			return t.defaultInterval = t.interval, t
		}
		_addEventListeners() {
			this._config.keyboard && P.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))), "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", (() => this.pause())), P.on(this._element, "mouseleave.bs.carousel", (() => this._maybeEnableCycle()))), this._config.touch && U.isSupported() && this._addTouchEventListeners()
		}
		_addTouchEventListeners() {
			for (const t of Q.find(".carousel-item img", this._element)) P.on(t, "dragstart.bs.carousel", (t => t.preventDefault()));
			const t = {
				leftCallback: () => this._slide(this._directionToOrder(Z)),
				rightCallback: () => this._slide(this._directionToOrder(tt)),
				endCallback: () => {
					"hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.interval))
				}
			};
			this._swipeHelper = new U(this._element, t)
		}
		_keydown(t) {
			if (/input|textarea/i.test(t.target.tagName)) return;
			const e = st[t.key];
			e && (t.preventDefault(), this._slide(this._directionToOrder(e)))
		}
		_getItemIndex(t) {
			return this._getItems()
				.indexOf(t)
		}
		_setActiveIndicatorElement(t) {
			if (!this._indicatorsElement) return;
			const e = Q.findOne(".active", this._indicatorsElement);
			e.classList.remove(nt), e.removeAttribute("aria-current");
			const i = Q.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
			i && (i.classList.add(nt), i.setAttribute("aria-current", "true"))
		}
		_updateInterval() {
			const t = this._activeElement || this._getActive();
			if (!t) return;
			const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
			this._config.interval = e || this._config.defaultInterval
		}
		_slide(t, e = null) {
			if (this._isSliding) return;
			const i = this._getActive(),
				n = t === G,
				s = e || b(this._getItems(), i, n, this._config.wrap);
			if (s === i) return;
			const o = this._getItemIndex(s),
				r = e => P.trigger(this._element, e, {
					relatedTarget: s,
					direction: this._orderToDirection(t),
					from: this._getItemIndex(i),
					to: o
				});
			if (r("slide.bs.carousel")
				.defaultPrevented) return;
			if (!i || !s) return;
			const a = Boolean(this._interval);
			this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
			const l = n ? "carousel-item-start" : "carousel-item-end",
				c = n ? "carousel-item-next" : "carousel-item-prev";
			s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback((() => {
				s.classList.remove(l, c), s.classList.add(nt), i.classList.remove(nt, c, l), this._isSliding = !1, r(et)
			}), i, this._isAnimated()), a && this.cycle()
		}
		_isAnimated() {
			return this._element.classList.contains("slide")
		}
		_getActive() {
			return Q.findOne(".active.carousel-item", this._element)
		}
		_getItems() {
			return Q.find(".carousel-item", this._element)
		}
		_clearInterval() {
			this._interval && (clearInterval(this._interval), this._interval = null)
		}
		_directionToOrder(t) {
			return p() ? t === Z ? J : G : t === Z ? G : J
		}
		_orderToDirection(t) {
			return p() ? t === J ? Z : tt : t === J ? tt : Z
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = at.getOrCreateInstance(this, t);
				if ("number" != typeof t) {
					if ("string" == typeof t) {
						if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
						e[t]()
					}
				} else e.to(t)
			}))
		}
	}
	P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", (function(t) {
		const e = n(this);
		if (!e || !e.classList.contains(it)) return;
		t.preventDefault();
		const i = at.getOrCreateInstance(e),
			s = this.getAttribute("data-bs-slide-to");
		return s ? (i.to(s), void i._maybeEnableCycle()) : "next" === B.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle())
	})), P.on(window, "load.bs.carousel.data-api", (() => {
		const t = Q.find('[data-bs-ride="carousel"]');
		for (const e of t) at.getOrCreateInstance(e)
	})), g(at);
	const lt = "show",
		ct = "collapse",
		ht = "collapsing",
		dt = '[data-bs-toggle="collapse"]',
		ut = {
			parent: null,
			toggle: !0
		},
		ft = {
			parent: "(null|element)",
			toggle: "boolean"
		};
	class pt extends z {
		constructor(t, e) {
			super(t, e), this._isTransitioning = !1, this._triggerArray = [];
			const n = Q.find(dt);
			for (const t of n) {
				const e = i(t),
					n = Q.find(e)
					.filter((t => t === this._element));
				null !== e && n.length && this._triggerArray.push(t)
			}
			this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
		}
		static get Default() {
			return ut
		}
		static get DefaultType() {
			return ft
		}
		static get NAME() {
			return "collapse"
		}
		toggle() {
			this._isShown() ? this.hide() : this.show()
		}
		show() {
			if (this._isTransitioning || this._isShown()) return;
			let t = [];
			if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing")
				.filter((t => t !== this._element))
				.map((t => pt.getOrCreateInstance(t, {
					toggle: !1
				})))), t.length && t[0]._isTransitioning) return;
			if (P.trigger(this._element, "show.bs.collapse")
				.defaultPrevented) return;
			for (const e of t) e.hide();
			const e = this._getDimension();
			this._element.classList.remove(ct), this._element.classList.add(ht), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
			const i = `scroll${e[0].toUpperCase()+e.slice(1)}`;
			this._queueCallback((() => {
				this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ct, lt), this._element.style[e] = "", P.trigger(this._element, "shown.bs.collapse")
			}), this._element, !0), this._element.style[e] = `${this._element[i]}px`
		}
		hide() {
			if (this._isTransitioning || !this._isShown()) return;
			if (P.trigger(this._element, "hide.bs.collapse")
				.defaultPrevented) return;
			const t = this._getDimension();
			this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, d(this._element), this._element.classList.add(ht), this._element.classList.remove(ct, lt);
			for (const t of this._triggerArray) {
				const e = n(t);
				e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
			}
			this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback((() => {
				this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ct), P.trigger(this._element, "hidden.bs.collapse")
			}), this._element, !0)
		}
		_isShown(t = this._element) {
			return t.classList.contains(lt)
		}
		_configAfterMerge(t) {
			return t.toggle = Boolean(t.toggle), t.parent = r(t.parent), t
		}
		_getDimension() {
			return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
		}
		_initializeChildren() {
			if (!this._config.parent) return;
			const t = this._getFirstLevelChildren(dt);
			for (const e of t) {
				const t = n(e);
				t && this._addAriaAndCollapsedClass([e], this._isShown(t))
			}
		}
		_getFirstLevelChildren(t) {
			const e = Q.find(":scope .collapse .collapse", this._config.parent);
			return Q.find(t, this._config.parent)
				.filter((t => !e.includes(t)))
		}
		_addAriaAndCollapsedClass(t, e) {
			if (t.length)
				for (const i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e)
		}
		static jQueryInterface(t) {
			const e = {};
			return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each((function() {
				const i = pt.getOrCreateInstance(this, e);
				if ("string" == typeof t) {
					if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
					i[t]()
				}
			}))
		}
	}
	P.on(document, "click.bs.collapse.data-api", dt, (function(t) {
		("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
		const e = i(this),
			n = Q.find(e);
		for (const t of n) pt.getOrCreateInstance(t, {
				toggle: !1
			})
			.toggle()
	})), g(pt);
	var gt = "top",
		mt = "bottom",
		_t = "right",
		bt = "left",
		vt = "auto",
		yt = [gt, mt, _t, bt],
		wt = "start",
		At = "end",
		Et = "clippingParents",
		Tt = "viewport",
		Ct = "popper",
		Ot = "reference",
		xt = yt.reduce((function(t, e) {
			return t.concat([e + "-" + wt, e + "-" + At])
		}), []),
		kt = [].concat(yt, [vt])
		.reduce((function(t, e) {
			return t.concat([e, e + "-" + wt, e + "-" + At])
		}), []),
		Lt = "beforeRead",
		Dt = "read",
		St = "afterRead",
		It = "beforeMain",
		Nt = "main",
		Pt = "afterMain",
		jt = "beforeWrite",
		Mt = "write",
		Ht = "afterWrite",
		$t = [Lt, Dt, St, It, Nt, Pt, jt, Mt, Ht];

	function Wt(t) {
		return t ? (t.nodeName || "")
			.toLowerCase() : null
	}

	function Bt(t) {
		if (null == t) return window;
		if ("[object Window]" !== t.toString()) {
			var e = t.ownerDocument;
			return e && e.defaultView || window
		}
		return t
	}

	function Ft(t) {
		return t instanceof Bt(t)
			.Element || t instanceof Element
	}

	function zt(t) {
		return t instanceof Bt(t)
			.HTMLElement || t instanceof HTMLElement
	}

	function Rt(t) {
		return "undefined" != typeof ShadowRoot && (t instanceof Bt(t)
			.ShadowRoot || t instanceof ShadowRoot)
	}
	const qt = {
		name: "applyStyles",
		enabled: !0,
		phase: "write",
		fn: function(t) {
			var e = t.state;
			Object.keys(e.elements)
				.forEach((function(t) {
					var i = e.styles[t] || {},
						n = e.attributes[t] || {},
						s = e.elements[t];
					zt(s) && Wt(s) && (Object.assign(s.style, i), Object.keys(n)
						.forEach((function(t) {
							var e = n[t];
							!1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
						})))
				}))
		},
		effect: function(t) {
			var e = t.state,
				i = {
					popper: {
						position: e.options.strategy,
						left: "0",
						top: "0",
						margin: "0"
					},
					arrow: {
						position: "absolute"
					},
					reference: {}
				};
			return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
				function() {
					Object.keys(e.elements)
						.forEach((function(t) {
							var n = e.elements[t],
								s = e.attributes[t] || {},
								o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t])
								.reduce((function(t, e) {
									return t[e] = "", t
								}), {});
							zt(n) && Wt(n) && (Object.assign(n.style, o), Object.keys(s)
								.forEach((function(t) {
									n.removeAttribute(t)
								})))
						}))
				}
		},
		requires: ["computeStyles"]
	};

	function Vt(t) {
		return t.split("-")[0]
	}
	var Kt = Math.max,
		Qt = Math.min,
		Xt = Math.round;

	function Yt(t, e) {
		void 0 === e && (e = !1);
		var i = t.getBoundingClientRect(),
			n = 1,
			s = 1;
		if (zt(t) && e) {
			var o = t.offsetHeight,
				r = t.offsetWidth;
			r > 0 && (n = Xt(i.width) / r || 1), o > 0 && (s = Xt(i.height) / o || 1)
		}
		return {
			width: i.width / n,
			height: i.height / s,
			top: i.top / s,
			right: i.right / n,
			bottom: i.bottom / s,
			left: i.left / n,
			x: i.left / n,
			y: i.top / s
		}
	}

	function Ut(t) {
		var e = Yt(t),
			i = t.offsetWidth,
			n = t.offsetHeight;
		return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
			x: t.offsetLeft,
			y: t.offsetTop,
			width: i,
			height: n
		}
	}

	function Gt(t, e) {
		var i = e.getRootNode && e.getRootNode();
		if (t.contains(e)) return !0;
		if (i && Rt(i)) {
			var n = e;
			do {
				if (n && t.isSameNode(n)) return !0;
				n = n.parentNode || n.host
			} while (n)
		}
		return !1
	}

	function Jt(t) {
		return Bt(t)
			.getComputedStyle(t)
	}

	function Zt(t) {
		return ["table", "td", "th"].indexOf(Wt(t)) >= 0
	}

	function te(t) {
		return ((Ft(t) ? t.ownerDocument : t.document) || window.document)
			.documentElement
	}

	function ee(t) {
		return "html" === Wt(t) ? t : t.assignedSlot || t.parentNode || (Rt(t) ? t.host : null) || te(t)
	}

	function ie(t) {
		return zt(t) && "fixed" !== Jt(t)
			.position ? t.offsetParent : null
	}

	function ne(t) {
		for (var e = Bt(t), i = ie(t); i && Zt(i) && "static" === Jt(i)
			.position;) i = ie(i);
		return i && ("html" === Wt(i) || "body" === Wt(i) && "static" === Jt(i)
			.position) ? e : i || function(t) {
			var e = -1 !== navigator.userAgent.toLowerCase()
				.indexOf("firefox");
			if (-1 !== navigator.userAgent.indexOf("Trident") && zt(t) && "fixed" === Jt(t)
				.position) return null;
			var i = ee(t);
			for (Rt(i) && (i = i.host); zt(i) && ["html", "body"].indexOf(Wt(i)) < 0;) {
				var n = Jt(i);
				if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
				i = i.parentNode
			}
			return null
		}(t) || e
	}

	function se(t) {
		return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
	}

	function oe(t, e, i) {
		return Kt(t, Qt(e, i))
	}

	function re(t) {
		return Object.assign({}, {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}, t)
	}

	function ae(t, e) {
		return e.reduce((function(e, i) {
			return e[i] = t, e
		}), {})
	}
	const le = {
		name: "arrow",
		enabled: !0,
		phase: "main",
		fn: function(t) {
			var e, i = t.state,
				n = t.name,
				s = t.options,
				o = i.elements.arrow,
				r = i.modifiersData.popperOffsets,
				a = Vt(i.placement),
				l = se(a),
				c = [bt, _t].indexOf(a) >= 0 ? "height" : "width";
			if (o && r) {
				var h = function(t, e) {
						return re("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, {
							placement: e.placement
						})) : t) ? t : ae(t, yt))
					}(s.padding, i),
					d = Ut(o),
					u = "y" === l ? gt : bt,
					f = "y" === l ? mt : _t,
					p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
					g = r[l] - i.rects.reference[l],
					m = ne(o),
					_ = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
					b = p / 2 - g / 2,
					v = h[u],
					y = _ - d[c] - h[f],
					w = _ / 2 - d[c] / 2 + b,
					A = oe(v, w, y),
					E = l;
				i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e)
			}
		},
		effect: function(t) {
			var e = t.state,
				i = t.options.element,
				n = void 0 === i ? "[data-popper-arrow]" : i;
			null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Gt(e.elements.popper, n) && (e.elements.arrow = n)
		},
		requires: ["popperOffsets"],
		requiresIfExists: ["preventOverflow"]
	};

	function ce(t) {
		return t.split("-")[1]
	}
	var he = {
		top: "auto",
		right: "auto",
		bottom: "auto",
		left: "auto"
	};

	function de(t) {
		var e, i = t.popper,
			n = t.popperRect,
			s = t.placement,
			o = t.variation,
			r = t.offsets,
			a = t.position,
			l = t.gpuAcceleration,
			c = t.adaptive,
			h = t.roundOffsets,
			d = t.isFixed,
			u = r.x,
			f = void 0 === u ? 0 : u,
			p = r.y,
			g = void 0 === p ? 0 : p,
			m = "function" == typeof h ? h({
				x: f,
				y: g
			}) : {
				x: f,
				y: g
			};
		f = m.x, g = m.y;
		var _ = r.hasOwnProperty("x"),
			b = r.hasOwnProperty("y"),
			v = bt,
			y = gt,
			w = window;
		if (c) {
			var A = ne(i),
				E = "clientHeight",
				T = "clientWidth";
			A === Bt(i) && "static" !== Jt(A = te(i))
				.position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === gt || (s === bt || s === _t) && o === At) && (y = mt, g -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, g *= l ? 1 : -1), s !== bt && (s !== gt && s !== mt || o !== At) || (v = _t, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1)
		}
		var C, O = Object.assign({
				position: a
			}, c && he),
			x = !0 === h ? function(t) {
				var e = t.x,
					i = t.y,
					n = window.devicePixelRatio || 1;
				return {
					x: Xt(e * n) / n || 0,
					y: Xt(i * n) / n || 0
				}
			}({
				x: f,
				y: g
			}) : {
				x: f,
				y: g
			};
		return f = x.x, g = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + g + "px)" : "translate3d(" + f + "px, " + g + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? g + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e))
	}
	const ue = {
		name: "computeStyles",
		enabled: !0,
		phase: "beforeWrite",
		fn: function(t) {
			var e = t.state,
				i = t.options,
				n = i.gpuAcceleration,
				s = void 0 === n || n,
				o = i.adaptive,
				r = void 0 === o || o,
				a = i.roundOffsets,
				l = void 0 === a || a,
				c = {
					placement: Vt(e.placement),
					variation: ce(e.placement),
					popper: e.elements.popper,
					popperRect: e.rects.popper,
					gpuAcceleration: s,
					isFixed: "fixed" === e.options.strategy
				};
			null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, de(Object.assign({}, c, {
				offsets: e.modifiersData.popperOffsets,
				position: e.options.strategy,
				adaptive: r,
				roundOffsets: l
			})))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, de(Object.assign({}, c, {
				offsets: e.modifiersData.arrow,
				position: "absolute",
				adaptive: !1,
				roundOffsets: l
			})))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
				"data-popper-placement": e.placement
			})
		},
		data: {}
	};
	var fe = {
		passive: !0
	};
	const pe = {
		name: "eventListeners",
		enabled: !0,
		phase: "write",
		fn: function() {},
		effect: function(t) {
			var e = t.state,
				i = t.instance,
				n = t.options,
				s = n.scroll,
				o = void 0 === s || s,
				r = n.resize,
				a = void 0 === r || r,
				l = Bt(e.elements.popper),
				c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
			return o && c.forEach((function(t) {
					t.addEventListener("scroll", i.update, fe)
				})), a && l.addEventListener("resize", i.update, fe),
				function() {
					o && c.forEach((function(t) {
						t.removeEventListener("scroll", i.update, fe)
					})), a && l.removeEventListener("resize", i.update, fe)
				}
		},
		data: {}
	};
	var ge = {
		left: "right",
		right: "left",
		bottom: "top",
		top: "bottom"
	};

	function me(t) {
		return t.replace(/left|right|bottom|top/g, (function(t) {
			return ge[t]
		}))
	}
	var _e = {
		start: "end",
		end: "start"
	};

	function be(t) {
		return t.replace(/start|end/g, (function(t) {
			return _e[t]
		}))
	}

	function ve(t) {
		var e = Bt(t);
		return {
			scrollLeft: e.pageXOffset,
			scrollTop: e.pageYOffset
		}
	}

	function ye(t) {
		return Yt(te(t))
			.left + ve(t)
			.scrollLeft
	}

	function we(t) {
		var e = Jt(t),
			i = e.overflow,
			n = e.overflowX,
			s = e.overflowY;
		return /auto|scroll|overlay|hidden/.test(i + s + n)
	}

	function Ae(t) {
		return ["html", "body", "#document"].indexOf(Wt(t)) >= 0 ? t.ownerDocument.body : zt(t) && we(t) ? t : Ae(ee(t))
	}

	function Ee(t, e) {
		var i;
		void 0 === e && (e = []);
		var n = Ae(t),
			s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
			o = Bt(n),
			r = s ? [o].concat(o.visualViewport || [], we(n) ? n : []) : n,
			a = e.concat(r);
		return s ? a : a.concat(Ee(ee(r)))
	}

	function Te(t) {
		return Object.assign({}, t, {
			left: t.x,
			top: t.y,
			right: t.x + t.width,
			bottom: t.y + t.height
		})
	}

	function Ce(t, e) {
		return e === Tt ? Te(function(t) {
			var e = Bt(t),
				i = te(t),
				n = e.visualViewport,
				s = i.clientWidth,
				o = i.clientHeight,
				r = 0,
				a = 0;
			return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
				width: s,
				height: o,
				x: r + ye(t),
				y: a
			}
		}(t)) : Ft(e) ? function(t) {
			var e = Yt(t);
			return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
		}(e) : Te(function(t) {
			var e, i = te(t),
				n = ve(t),
				s = null == (e = t.ownerDocument) ? void 0 : e.body,
				o = Kt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
				r = Kt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
				a = -n.scrollLeft + ye(t),
				l = -n.scrollTop;
			return "rtl" === Jt(s || i)
				.direction && (a += Kt(i.clientWidth, s ? s.clientWidth : 0) - o), {
					width: o,
					height: r,
					x: a,
					y: l
				}
		}(te(t)))
	}

	function Oe(t) {
		var e, i = t.reference,
			n = t.element,
			s = t.placement,
			o = s ? Vt(s) : null,
			r = s ? ce(s) : null,
			a = i.x + i.width / 2 - n.width / 2,
			l = i.y + i.height / 2 - n.height / 2;
		switch (o) {
			case gt:
				e = {
					x: a,
					y: i.y - n.height
				};
				break;
			case mt:
				e = {
					x: a,
					y: i.y + i.height
				};
				break;
			case _t:
				e = {
					x: i.x + i.width,
					y: l
				};
				break;
			case bt:
				e = {
					x: i.x - n.width,
					y: l
				};
				break;
			default:
				e = {
					x: i.x,
					y: i.y
				}
		}
		var c = o ? se(o) : null;
		if (null != c) {
			var h = "y" === c ? "height" : "width";
			switch (r) {
				case wt:
					e[c] = e[c] - (i[h] / 2 - n[h] / 2);
					break;
				case At:
					e[c] = e[c] + (i[h] / 2 - n[h] / 2)
			}
		}
		return e
	}

	function xe(t, e) {
		void 0 === e && (e = {});
		var i = e,
			n = i.placement,
			s = void 0 === n ? t.placement : n,
			o = i.boundary,
			r = void 0 === o ? Et : o,
			a = i.rootBoundary,
			l = void 0 === a ? Tt : a,
			c = i.elementContext,
			h = void 0 === c ? Ct : c,
			d = i.altBoundary,
			u = void 0 !== d && d,
			f = i.padding,
			p = void 0 === f ? 0 : f,
			g = re("number" != typeof p ? p : ae(p, yt)),
			m = h === Ct ? Ot : Ct,
			_ = t.rects.popper,
			b = t.elements[u ? m : h],
			v = function(t, e, i) {
				var n = "clippingParents" === e ? function(t) {
						var e = Ee(ee(t)),
							i = ["absolute", "fixed"].indexOf(Jt(t)
								.position) >= 0 && zt(t) ? ne(t) : t;
						return Ft(i) ? e.filter((function(t) {
							return Ft(t) && Gt(t, i) && "body" !== Wt(t)
						})) : []
					}(t) : [].concat(e),
					s = [].concat(n, [i]),
					o = s[0],
					r = s.reduce((function(e, i) {
						var n = Ce(t, i);
						return e.top = Kt(n.top, e.top), e.right = Qt(n.right, e.right), e.bottom = Qt(n.bottom, e.bottom), e.left = Kt(n.left, e.left), e
					}), Ce(t, o));
				return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
			}(Ft(b) ? b : b.contextElement || te(t.elements.popper), r, l),
			y = Yt(t.elements.reference),
			w = Oe({
				reference: y,
				element: _,
				strategy: "absolute",
				placement: s
			}),
			A = Te(Object.assign({}, _, w)),
			E = h === Ct ? A : y,
			T = {
				top: v.top - E.top + g.top,
				bottom: E.bottom - v.bottom + g.bottom,
				left: v.left - E.left + g.left,
				right: E.right - v.right + g.right
			},
			C = t.modifiersData.offset;
		if (h === Ct && C) {
			var O = C[s];
			Object.keys(T)
				.forEach((function(t) {
					var e = [_t, mt].indexOf(t) >= 0 ? 1 : -1,
						i = [gt, mt].indexOf(t) >= 0 ? "y" : "x";
					T[t] += O[i] * e
				}))
		}
		return T
	}

	function ke(t, e) {
		void 0 === e && (e = {});
		var i = e,
			n = i.placement,
			s = i.boundary,
			o = i.rootBoundary,
			r = i.padding,
			a = i.flipVariations,
			l = i.allowedAutoPlacements,
			c = void 0 === l ? kt : l,
			h = ce(n),
			d = h ? a ? xt : xt.filter((function(t) {
				return ce(t) === h
			})) : yt,
			u = d.filter((function(t) {
				return c.indexOf(t) >= 0
			}));
		0 === u.length && (u = d);
		var f = u.reduce((function(e, i) {
			return e[i] = xe(t, {
				placement: i,
				boundary: s,
				rootBoundary: o,
				padding: r
			})[Vt(i)], e
		}), {});
		return Object.keys(f)
			.sort((function(t, e) {
				return f[t] - f[e]
			}))
	}
	const Le = {
		name: "flip",
		enabled: !0,
		phase: "main",
		fn: function(t) {
			var e = t.state,
				i = t.options,
				n = t.name;
			if (!e.modifiersData[n]._skip) {
				for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, g = i.allowedAutoPlacements, m = e.options.placement, _ = Vt(m), b = l || (_ !== m && p ? function(t) {
						if (Vt(t) === vt) return [];
						var e = me(t);
						return [be(t), e, be(e)]
					}(m) : [me(m)]), v = [m].concat(b)
					.reduce((function(t, i) {
						return t.concat(Vt(i) === vt ? ke(e, {
							placement: i,
							boundary: h,
							rootBoundary: d,
							padding: c,
							flipVariations: p,
							allowedAutoPlacements: g
						}) : i)
					}), []), y = e.rects.reference, w = e.rects.popper, A = new Map, E = !0, T = v[0], C = 0; C < v.length; C++) {
					var O = v[C],
						x = Vt(O),
						k = ce(O) === wt,
						L = [gt, mt].indexOf(x) >= 0,
						D = L ? "width" : "height",
						S = xe(e, {
							placement: O,
							boundary: h,
							rootBoundary: d,
							altBoundary: u,
							padding: c
						}),
						I = L ? k ? _t : bt : k ? mt : gt;
					y[D] > w[D] && (I = me(I));
					var N = me(I),
						P = [];
					if (o && P.push(S[x] <= 0), a && P.push(S[I] <= 0, S[N] <= 0), P.every((function(t) {
						return t
					}))) {
						T = O, E = !1;
						break
					}
					A.set(O, P)
				}
				if (E)
					for (var j = function(t) {
						var e = v.find((function(e) {
							var i = A.get(e);
							if (i) return i.slice(0, t)
								.every((function(t) {
									return t
								}))
						}));
						if (e) return T = e, "break"
					}, M = p ? 3 : 1; M > 0 && "break" !== j(M); M--);
				e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0)
			}
		},
		requiresIfExists: ["offset"],
		data: {
			_skip: !1
		}
	};

	function De(t, e, i) {
		return void 0 === i && (i = {
			x: 0,
			y: 0
		}), {
			top: t.top - e.height - i.y,
			right: t.right - e.width + i.x,
			bottom: t.bottom - e.height + i.y,
			left: t.left - e.width - i.x
		}
	}

	function Se(t) {
		return [gt, _t, mt, bt].some((function(e) {
			return t[e] >= 0
		}))
	}
	const Ie = {
			name: "hide",
			enabled: !0,
			phase: "main",
			requiresIfExists: ["preventOverflow"],
			fn: function(t) {
				var e = t.state,
					i = t.name,
					n = e.rects.reference,
					s = e.rects.popper,
					o = e.modifiersData.preventOverflow,
					r = xe(e, {
						elementContext: "reference"
					}),
					a = xe(e, {
						altBoundary: !0
					}),
					l = De(r, n),
					c = De(a, s, o),
					h = Se(l),
					d = Se(c);
				e.modifiersData[i] = {
					referenceClippingOffsets: l,
					popperEscapeOffsets: c,
					isReferenceHidden: h,
					hasPopperEscaped: d
				}, e.attributes.popper = Object.assign({}, e.attributes.popper, {
					"data-popper-reference-hidden": h,
					"data-popper-escaped": d
				})
			}
		},
		Ne = {
			name: "offset",
			enabled: !0,
			phase: "main",
			requires: ["popperOffsets"],
			fn: function(t) {
				var e = t.state,
					i = t.options,
					n = t.name,
					s = i.offset,
					o = void 0 === s ? [0, 0] : s,
					r = kt.reduce((function(t, i) {
						return t[i] = function(t, e, i) {
							var n = Vt(t),
								s = [bt, gt].indexOf(n) >= 0 ? -1 : 1,
								o = "function" == typeof i ? i(Object.assign({}, e, {
									placement: t
								})) : i,
								r = o[0],
								a = o[1];
							return r = r || 0, a = (a || 0) * s, [bt, _t].indexOf(n) >= 0 ? {
								x: a,
								y: r
							} : {
								x: r,
								y: a
							}
						}(i, e.rects, o), t
					}), {}),
					a = r[e.placement],
					l = a.x,
					c = a.y;
				null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r
			}
		},
		Pe = {
			name: "popperOffsets",
			enabled: !0,
			phase: "read",
			fn: function(t) {
				var e = t.state,
					i = t.name;
				e.modifiersData[i] = Oe({
					reference: e.rects.reference,
					element: e.rects.popper,
					strategy: "absolute",
					placement: e.placement
				})
			},
			data: {}
		},
		je = {
			name: "preventOverflow",
			enabled: !0,
			phase: "main",
			fn: function(t) {
				var e = t.state,
					i = t.options,
					n = t.name,
					s = i.mainAxis,
					o = void 0 === s || s,
					r = i.altAxis,
					a = void 0 !== r && r,
					l = i.boundary,
					c = i.rootBoundary,
					h = i.altBoundary,
					d = i.padding,
					u = i.tether,
					f = void 0 === u || u,
					p = i.tetherOffset,
					g = void 0 === p ? 0 : p,
					m = xe(e, {
						boundary: l,
						rootBoundary: c,
						padding: d,
						altBoundary: h
					}),
					_ = Vt(e.placement),
					b = ce(e.placement),
					v = !b,
					y = se(_),
					w = "x" === y ? "y" : "x",
					A = e.modifiersData.popperOffsets,
					E = e.rects.reference,
					T = e.rects.popper,
					C = "function" == typeof g ? g(Object.assign({}, e.rects, {
						placement: e.placement
					})) : g,
					O = "number" == typeof C ? {
						mainAxis: C,
						altAxis: C
					} : Object.assign({
						mainAxis: 0,
						altAxis: 0
					}, C),
					x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
					k = {
						x: 0,
						y: 0
					};
				if (A) {
					if (o) {
						var L, D = "y" === y ? gt : bt,
							S = "y" === y ? mt : _t,
							I = "y" === y ? "height" : "width",
							N = A[y],
							P = N + m[D],
							j = N - m[S],
							M = f ? -T[I] / 2 : 0,
							H = b === wt ? E[I] : T[I],
							$ = b === wt ? -T[I] : -E[I],
							W = e.elements.arrow,
							B = f && W ? Ut(W) : {
								width: 0,
								height: 0
							},
							F = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
								top: 0,
								right: 0,
								bottom: 0,
								left: 0
							},
							z = F[D],
							R = F[S],
							q = oe(0, E[I], B[I]),
							V = v ? E[I] / 2 - M - q - z - O.mainAxis : H - q - z - O.mainAxis,
							K = v ? -E[I] / 2 + M + q + R + O.mainAxis : $ + q + R + O.mainAxis,
							Q = e.elements.arrow && ne(e.elements.arrow),
							X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
							Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
							U = N + K - Y,
							G = oe(f ? Qt(P, N + V - Y - X) : P, N, f ? Kt(j, U) : j);
						A[y] = G, k[y] = G - N
					}
					if (a) {
						var J, Z = "x" === y ? gt : bt,
							tt = "x" === y ? mt : _t,
							et = A[w],
							it = "y" === w ? "height" : "width",
							nt = et + m[Z],
							st = et - m[tt],
							ot = -1 !== [gt, bt].indexOf(_),
							rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
							at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
							lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
							ct = f && ot ? function(t, e, i) {
								var n = oe(t, e, i);
								return n > i ? i : n
							}(at, et, lt) : oe(f ? at : nt, et, f ? lt : st);
						A[w] = ct, k[w] = ct - et
					}
					e.modifiersData[n] = k
				}
			},
			requiresIfExists: ["offset"]
		};

	function Me(t, e, i) {
		void 0 === i && (i = !1);
		var n, s, o = zt(e),
			r = zt(e) && function(t) {
				var e = t.getBoundingClientRect(),
					i = Xt(e.width) / t.offsetWidth || 1,
					n = Xt(e.height) / t.offsetHeight || 1;
				return 1 !== i || 1 !== n
			}(e),
			a = te(e),
			l = Yt(t, r),
			c = {
				scrollLeft: 0,
				scrollTop: 0
			},
			h = {
				x: 0,
				y: 0
			};
		return (o || !o && !i) && (("body" !== Wt(e) || we(a)) && (c = (n = e) !== Bt(n) && zt(n) ? {
			scrollLeft: (s = n)
				.scrollLeft,
			scrollTop: s.scrollTop
		} : ve(n)), zt(e) ? ((h = Yt(e, !0))
			.x += e.clientLeft, h.y += e.clientTop) : a && (h.x = ye(a))), {
			x: l.left + c.scrollLeft - h.x,
			y: l.top + c.scrollTop - h.y,
			width: l.width,
			height: l.height
		}
	}

	function He(t) {
		var e = new Map,
			i = new Set,
			n = [];

		function s(t) {
			i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || [])
				.forEach((function(t) {
					if (!i.has(t)) {
						var n = e.get(t);
						n && s(n)
					}
				})), n.push(t)
		}
		return t.forEach((function(t) {
			e.set(t.name, t)
		})), t.forEach((function(t) {
			i.has(t.name) || s(t)
		})), n
	}
	var $e = {
		placement: "bottom",
		modifiers: [],
		strategy: "absolute"
	};

	function We() {
		for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
		return !e.some((function(t) {
			return !(t && "function" == typeof t.getBoundingClientRect)
		}))
	}

	function Be(t) {
		void 0 === t && (t = {});
		var e = t,
			i = e.defaultModifiers,
			n = void 0 === i ? [] : i,
			s = e.defaultOptions,
			o = void 0 === s ? $e : s;
		return function(t, e, i) {
			void 0 === i && (i = o);
			var s, r, a = {
					placement: "bottom",
					orderedModifiers: [],
					options: Object.assign({}, $e, o),
					modifiersData: {},
					elements: {
						reference: t,
						popper: e
					},
					attributes: {},
					styles: {}
				},
				l = [],
				c = !1,
				h = {
					state: a,
					setOptions: function(i) {
						var s = "function" == typeof i ? i(a.options) : i;
						d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
							reference: Ft(t) ? Ee(t) : t.contextElement ? Ee(t.contextElement) : [],
							popper: Ee(e)
						};
						var r, c, u = function(t) {
							var e = He(t);
							return $t.reduce((function(t, i) {
								return t.concat(e.filter((function(t) {
									return t.phase === i
								})))
							}), [])
						}((r = [].concat(n, a.options.modifiers), c = r.reduce((function(t, e) {
								var i = t[e.name];
								return t[e.name] = i ? Object.assign({}, i, e, {
									options: Object.assign({}, i.options, e.options),
									data: Object.assign({}, i.data, e.data)
								}) : e, t
							}), {}), Object.keys(c)
							.map((function(t) {
								return c[t]
							}))));
						return a.orderedModifiers = u.filter((function(t) {
							return t.enabled
						})), a.orderedModifiers.forEach((function(t) {
							var e = t.name,
								i = t.options,
								n = void 0 === i ? {} : i,
								s = t.effect;
							if ("function" == typeof s) {
								var o = s({
									state: a,
									name: e,
									instance: h,
									options: n
								});
								l.push(o || function() {})
							}
						})), h.update()
					},
					forceUpdate: function() {
						if (!c) {
							var t = a.elements,
								e = t.reference,
								i = t.popper;
							if (We(e, i)) {
								a.rects = {
									reference: Me(e, ne(i), "fixed" === a.options.strategy),
									popper: Ut(i)
								}, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(t) {
									return a.modifiersData[t.name] = Object.assign({}, t.data)
								}));
								for (var n = 0; n < a.orderedModifiers.length; n++)
									if (!0 !== a.reset) {
										var s = a.orderedModifiers[n],
											o = s.fn,
											r = s.options,
											l = void 0 === r ? {} : r,
											d = s.name;
										"function" == typeof o && (a = o({
											state: a,
											options: l,
											name: d,
											instance: h
										}) || a)
									} else a.reset = !1, n = -1
							}
						}
					},
					update: (s = function() {
						return new Promise((function(t) {
							h.forceUpdate(), t(a)
						}))
					}, function() {
						return r || (r = new Promise((function(t) {
							Promise.resolve()
								.then((function() {
									r = void 0, t(s())
								}))
						}))), r
					}),
					destroy: function() {
						d(), c = !0
					}
				};
			if (!We(t, e)) return h;

			function d() {
				l.forEach((function(t) {
					return t()
				})), l = []
			}
			return h.setOptions(i)
				.then((function(t) {
					!c && i.onFirstUpdate && i.onFirstUpdate(t)
				})), h
		}
	}
	var Fe = Be(),
		ze = Be({
			defaultModifiers: [pe, Pe, ue, qt]
		}),
		Re = Be({
			defaultModifiers: [pe, Pe, ue, qt, Ne, Le, je, le, Ie]
		});
	const qe = Object.freeze(Object.defineProperty({
			__proto__: null,
			popperGenerator: Be,
			detectOverflow: xe,
			createPopperBase: Fe,
			createPopper: Re,
			createPopperLite: ze,
			top: gt,
			bottom: mt,
			right: _t,
			left: bt,
			auto: vt,
			basePlacements: yt,
			start: wt,
			end: At,
			clippingParents: Et,
			viewport: Tt,
			popper: Ct,
			reference: Ot,
			variationPlacements: xt,
			placements: kt,
			beforeRead: Lt,
			read: Dt,
			afterRead: St,
			beforeMain: It,
			main: Nt,
			afterMain: Pt,
			beforeWrite: jt,
			write: Mt,
			afterWrite: Ht,
			modifierPhases: $t,
			applyStyles: qt,
			arrow: le,
			computeStyles: ue,
			eventListeners: pe,
			flip: Le,
			hide: Ie,
			offset: Ne,
			popperOffsets: Pe,
			preventOverflow: je
		}, Symbol.toStringTag, {
			value: "Module"
		})),
		Ve = "dropdown",
		Ke = "ArrowUp",
		Qe = "ArrowDown",
		Xe = "click.bs.dropdown.data-api",
		Ye = "keydown.bs.dropdown.data-api",
		Ue = "show",
		Ge = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
		Je = `${Ge}.show`,
		Ze = ".dropdown-menu",
		ti = p() ? "top-end" : "top-start",
		ei = p() ? "top-start" : "top-end",
		ii = p() ? "bottom-end" : "bottom-start",
		ni = p() ? "bottom-start" : "bottom-end",
		si = p() ? "left-start" : "right-start",
		oi = p() ? "right-start" : "left-start",
		ri = {
			autoClose: !0,
			boundary: "clippingParents",
			display: "dynamic",
			offset: [0, 2],
			popperConfig: null,
			reference: "toggle"
		},
		ai = {
			autoClose: "(boolean|string)",
			boundary: "(string|element)",
			display: "string",
			offset: "(array|string|function)",
			popperConfig: "(null|object|function)",
			reference: "(string|element|object)"
		};
	class li extends z {
		constructor(t, e) {
			super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = Q.findOne(Ze, this._parent), this._inNavbar = this._detectNavbar()
			if(!this._menu) {
				this._menu = this._element
			}
			console.log(this._menu)
			console.log(Q.findOne(Ze, this._parent))
			console.log(Q.findOne(Ze, this._parent))
		}
		static get Default() {
			return ri
		}
		static get DefaultType() {
			return ai
		}
		static get NAME() {
			return Ve
		}
		toggle() {
			return this._isShown() ? this.hide() : this.show()
		}
		show() {
			if (l(this._element) || this._isShown()) return;
			const t = {
				relatedTarget: this._element
			};
			if (!P.trigger(this._element, "show.bs.dropdown", t)
				.defaultPrevented) {
				if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
					for (const t of [].concat(...document.body.children)) P.on(t, "mouseover", h);
				this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Ue), this._element.classList.add(Ue), P.trigger(this._element, "shown.bs.dropdown", t)
			}
		}
		hide() {
			if (l(this._element) || !this._isShown()) return;
			const t = {
				relatedTarget: this._element
			};
			this._completeHide(t)
		}
		dispose() {
			this._popper && this._popper.destroy(), super.dispose()
		}
		update() {
			this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
		}
		_completeHide(t) {
			if (!P.trigger(this._element, "hide.bs.dropdown", t)
				.defaultPrevented) {
				if ("ontouchstart" in document.documentElement)
					for (const t of [].concat(...document.body.children)) P.off(t, "mouseover", h);
				this._popper && this._popper.destroy(), this._menu.classList.remove(Ue), this._element.classList.remove(Ue), this._element.setAttribute("aria-expanded", "false"), B.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, "hidden.bs.dropdown", t)
			}
		}
		_getConfig(t) {
			if ("object" == typeof(t = super._getConfig(t))
				.reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Ve.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
			return t
		}
		_createPopper() {
			if (void 0 === qe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
			let t = this._element;
			"parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
			const e = this._getPopperConfig();
			this._popper = Re(t, this._menu, e)
		}
		_isShown() {
			return this._menu.classList.contains(Ue)
		}
		_getPlacement() {
			const t = this._parent;
			if (t.classList.contains("dropend")) return si;
			if (t.classList.contains("dropstart")) return oi;
			if (t.classList.contains("dropup-center")) return "top";
			if (t.classList.contains("dropdown-center")) return "bottom";
			const e = "end" === getComputedStyle(this._menu)
				.getPropertyValue("--bs-position")
				.trim();
			return t.classList.contains("dropup") ? e ? ei : ti : e ? ni : ii
		}
		_detectNavbar() {
			return null !== this._element.closest(".navbar")
		}
		_getOffset() {
			const {
				offset: t
			} = this._config;
			return "string" == typeof t ? t.split(",")
				.map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
		}
		_getPopperConfig() {
			const t = {
				placement: this._getPlacement(),
				modifiers: [{
					name: "preventOverflow",
					options: {
						boundary: this._config.boundary
					}
				}, {
					name: "offset",
					options: {
						offset: this._getOffset()
					}
				}]
			};
			return (this._inNavbar || "static" === this._config.display) && (B.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
				name: "applyStyles",
				enabled: !1
			}]), {
				...t,
				..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
			}
		}
		_selectMenuItem({
			key: t,
			target: e
		}) {
			const i = Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu)
				.filter((t => a(t)));
			i.length && b(i, e, t === Qe, !i.includes(e))
				.focus()
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = li.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t]()
				}
			}))
		}
		static clearMenus(t) {
			if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
			const e = Q.find(Je);
			for (const i of e) {
				const e = li.getInstance(i);
				if (!e || !1 === e._config.autoClose) continue;
				const n = t.composedPath(),
					s = n.includes(e._menu);
				if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s) continue;
				if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
				const o = {
					relatedTarget: e._element
				};
				"click" === t.type && (o.clickEvent = t), e._completeHide(o)
			}
		}
		static dataApiKeydownHandler(t) {
			const e = /input|textarea/i.test(t.target.tagName),
				i = "Escape" === t.key,
				n = [Ke, Qe].includes(t.key);
			if (!n && !i) return;
			if (e && !i) return;
			t.preventDefault();
			const s = Q.findOne(Ge, t.delegateTarget.parentNode),
				o = li.getOrCreateInstance(s);
			if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
			o._isShown() && (t.stopPropagation(), o.hide(), s.focus())
		}
	}
	P.on(document, Ye, Ge, li.dataApiKeydownHandler), P.on(document, Ye, Ze, li.dataApiKeydownHandler), P.on(document, Xe, li.clearMenus), P.on(document, "keyup.bs.dropdown.data-api", li.clearMenus), P.on(document, Xe, Ge, (function(t) {
		t.preventDefault(), li.getOrCreateInstance(this)
			.toggle()
	})), g(li);
	const ci = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
		hi = ".sticky-top",
		di = "padding-right",
		ui = "margin-right";
	class fi {
		constructor() {
			this._element = document.body
		}
		getWidth() {
			const t = document.documentElement.clientWidth;
			return Math.abs(window.innerWidth - t)
		}
		hide() {
			const t = this.getWidth();
			this._disableOverFlow(), this._setElementAttributes(this._element, di, (e => e + t)), this._setElementAttributes(ci, di, (e => e + t)), this._setElementAttributes(hi, ui, (e => e - t))
		}
		reset() {
			this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, di), this._resetElementAttributes(ci, di), this._resetElementAttributes(hi, ui)
		}
		isOverflowing() {
			return this.getWidth() > 0
		}
		_disableOverFlow() {
			this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
		}
		_setElementAttributes(t, e, i) {
			const n = this.getWidth();
			this._applyManipulationCallback(t, (t => {
				if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
				this._saveInitialAttribute(t, e);
				const s = window.getComputedStyle(t)
					.getPropertyValue(e);
				t.style.setProperty(e, `${i(Number.parseFloat(s))}px`)
			}))
		}
		_saveInitialAttribute(t, e) {
			const i = t.style.getPropertyValue(e);
			i && B.setDataAttribute(t, e, i)
		}
		_resetElementAttributes(t, e) {
			this._applyManipulationCallback(t, (t => {
				const i = B.getDataAttribute(t, e);
				null !== i ? (B.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e)
			}))
		}
		_applyManipulationCallback(t, e) {
			if (o(t)) e(t);
			else
				for (const i of Q.find(t, this._element)) e(i)
		}
	}
	const pi = "show",
		gi = "mousedown.bs.backdrop",
		mi = {
			className: "modal-backdrop",
			clickCallback: null,
			isAnimated: !1,
			isVisible: !0,
			rootElement: "body"
		},
		_i = {
			className: "string",
			clickCallback: "(function|null)",
			isAnimated: "boolean",
			isVisible: "boolean",
			rootElement: "(element|string)"
		};
	class bi extends F {
		constructor(t) {
			super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null
		}
		static get Default() {
			return mi
		}
		static get DefaultType() {
			return _i
		}
		static get NAME() {
			return "backdrop"
		}
		show(t) {
			if (!this._config.isVisible) return void m(t);
			this._append();
			const e = this._getElement();
			this._config.isAnimated && d(e), e.classList.add(pi), this._emulateAnimation((() => {
				m(t)
			}))
		}
		hide(t) {
			this._config.isVisible ? (this._getElement()
				.classList.remove(pi), this._emulateAnimation((() => {
					this.dispose(), m(t)
				}))) : m(t)
		}
		dispose() {
			this._isAppended && (P.off(this._element, gi), this._element.remove(), this._isAppended = !1)
		}
		_getElement() {
			if (!this._element) {
				const t = document.createElement("div");
				t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
			}
			return this._element
		}
		_configAfterMerge(t) {
			return t.rootElement = r(t.rootElement), t
		}
		_append() {
			if (this._isAppended) return;
			const t = this._getElement();
			this._config.rootElement.append(t), P.on(t, gi, (() => {
				m(this._config.clickCallback)
			})), this._isAppended = !0
		}
		_emulateAnimation(t) {
			_(t, this._getElement(), this._config.isAnimated)
		}
	}
	const vi = ".bs.focustrap",
		yi = "backward",
		wi = {
			autofocus: !0,
			trapElement: null
		},
		Ai = {
			autofocus: "boolean",
			trapElement: "element"
		};
	class Ei extends F {
		constructor(t) {
			super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
		}
		static get Default() {
			return wi
		}
		static get DefaultType() {
			return Ai
		}
		static get NAME() {
			return "focustrap"
		}
		activate() {
			this._isActive || (this._config.autofocus && this._config.trapElement.focus(), P.off(document, vi), P.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))), P.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))), this._isActive = !0)
		}
		deactivate() {
			this._isActive && (this._isActive = !1, P.off(document, vi))
		}
		_handleFocusin(t) {
			const {
				trapElement: e
			} = this._config;
			if (t.target === document || t.target === e || e.contains(t.target)) return;
			const i = Q.focusableChildren(e);
			0 === i.length ? e.focus() : this._lastTabNavDirection === yi ? i[i.length - 1].focus() : i[0].focus()
		}
		_handleKeydown(t) {
			"Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? yi : "forward")
		}
	}
	const Ti = "hidden.bs.modal",
		Ci = "show.bs.modal",
		Oi = "modal-open",
		xi = "show",
		ki = "modal-static",
		Li = {
			backdrop: !0,
			focus: !0,
			keyboard: !0
		},
		Di = {
			backdrop: "(boolean|string)",
			focus: "boolean",
			keyboard: "boolean"
		};
	class Si extends z {
		constructor(t, e) {
			super(t, e), this._dialog = Q.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new fi, this._addEventListeners()
		}
		static get Default() {
			return Li
		}
		static get DefaultType() {
			return Di
		}
		static get NAME() {
			return "modal"
		}
		toggle(t) {
			return this._isShown ? this.hide() : this.show(t)
		}
		show(t) {
			this._isShown || this._isTransitioning || P.trigger(this._element, Ci, {
					relatedTarget: t
				})
				.defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Oi), this._adjustDialog(), this._backdrop.show((() => this._showElement(t))))
		}
		hide() {
			this._isShown && !this._isTransitioning && (P.trigger(this._element, "hide.bs.modal")
				.defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(xi), this._queueCallback((() => this._hideModal()), this._element, this._isAnimated())))
		}
		dispose() {
			for (const t of [window, this._dialog]) P.off(t, ".bs.modal");
			this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
		}
		handleUpdate() {
			this._adjustDialog()
		}
		_initializeBackDrop() {
			return new bi({
				isVisible: Boolean(this._config.backdrop),
				isAnimated: this._isAnimated()
			})
		}
		_initializeFocusTrap() {
			return new Ei({
				trapElement: this._element
			})
		}
		_showElement(t) {
			document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
			const e = Q.findOne(".modal-body", this._dialog);
			e && (e.scrollTop = 0), d(this._element), this._element.classList.add(xi), this._queueCallback((() => {
				this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, P.trigger(this._element, "shown.bs.modal", {
					relatedTarget: t
				})
			}), this._dialog, this._isAnimated())
		}
		_addEventListeners() {
			P.on(this._element, "keydown.dismiss.bs.modal", (t => {
				if ("Escape" === t.key) return this._config.keyboard ? (t.preventDefault(), void this.hide()) : void this._triggerBackdropTransition()
			})), P.on(window, "resize.bs.modal", (() => {
				this._isShown && !this._isTransitioning && this._adjustDialog()
			})), P.on(this._element, "mousedown.dismiss.bs.modal", (t => {
				t.target === t.currentTarget && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
			}))
		}
		_hideModal() {
			this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
				document.body.classList.remove(Oi), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, Ti)
			}))
		}
		_isAnimated() {
			return this._element.classList.contains("fade")
		}
		_triggerBackdropTransition() {
			if (P.trigger(this._element, "hidePrevented.bs.modal")
				.defaultPrevented) return;
			const t = this._element.scrollHeight > document.documentElement.clientHeight,
				e = this._element.style.overflowY;
			"hidden" === e || this._element.classList.contains(ki) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(ki), this._queueCallback((() => {
				this._element.classList.remove(ki), this._queueCallback((() => {
					this._element.style.overflowY = e
				}), this._dialog)
			}), this._dialog), this._element.focus())
		}
		_adjustDialog() {
			const t = this._element.scrollHeight > document.documentElement.clientHeight,
				e = this._scrollBar.getWidth(),
				i = e > 0;
			if (i && !t) {
				const t = p() ? "paddingLeft" : "paddingRight";
				this._element.style[t] = `${e}px`
			}
			if (!i && t) {
				const t = p() ? "paddingRight" : "paddingLeft";
				this._element.style[t] = `${e}px`
			}
		}
		_resetAdjustments() {
			this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
		}
		static jQueryInterface(t, e) {
			return this.each((function() {
				const i = Si.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
					i[t](e)
				}
			}))
		}
	}
	P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
		const e = n(this);
		["A", "AREA"].includes(this.tagName) && t.preventDefault(), P.one(e, Ci, (t => {
			t.defaultPrevented || P.one(e, Ti, (() => {
				a(this) && this.focus()
			}))
		}));
		const i = Q.findOne(".modal.show");
		i && Si.getInstance(i)
			.hide(), Si.getOrCreateInstance(e)
			.toggle(this)
	})), R(Si), g(Si);
	const Ii = "show",
		Ni = "showing",
		Pi = "hiding",
		ji = ".offcanvas.show",
		Mi = "hidePrevented.bs.offcanvas",
		Hi = "hidden.bs.offcanvas",
		$i = {
			backdrop: !0,
			keyboard: !0,
			scroll: !1
		},
		Wi = {
			backdrop: "(boolean|string)",
			keyboard: "boolean",
			scroll: "boolean"
		};
	class Bi extends z {
		constructor(t, e) {
			super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
		}
		static get Default() {
			return $i
		}
		static get DefaultType() {
			return Wi
		}
		static get NAME() {
			return "offcanvas"
		}
		toggle(t) {
			return this._isShown ? this.hide() : this.show(t)
		}
		show(t) {
			this._isShown || P.trigger(this._element, "show.bs.offcanvas", {
					relatedTarget: t
				})
				.defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new fi)
					.hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Ni), this._queueCallback((() => {
						this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Ii), this._element.classList.remove(Ni), P.trigger(this._element, "shown.bs.offcanvas", {
							relatedTarget: t
						})
					}), this._element, !0))
		}
		hide() {
			this._isShown && (P.trigger(this._element, "hide.bs.offcanvas")
				.defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Pi), this._backdrop.hide(), this._queueCallback((() => {
					this._element.classList.remove(Ii, Pi), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new fi)
						.reset(), P.trigger(this._element, Hi)
				}), this._element, !0)))
		}
		dispose() {
			this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
		}
		_initializeBackDrop() {
			const t = Boolean(this._config.backdrop);
			return new bi({
				className: "offcanvas-backdrop",
				isVisible: t,
				isAnimated: !0,
				rootElement: this._element.parentNode,
				clickCallback: t ? () => {
					"static" !== this._config.backdrop ? this.hide() : P.trigger(this._element, Mi)
				} : null
			})
		}
		_initializeFocusTrap() {
			return new Ei({
				trapElement: this._element
			})
		}
		_addEventListeners() {
			P.on(this._element, "keydown.dismiss.bs.offcanvas", (t => {
				"Escape" === t.key && (this._config.keyboard ? this.hide() : P.trigger(this._element, Mi))
			}))
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = Bi.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
					e[t](this)
				}
			}))
		}
	}
	P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
		const e = n(this);
		if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return;
		P.one(e, Hi, (() => {
			a(this) && this.focus()
		}));
		const i = Q.findOne(ji);
		i && i !== e && Bi.getInstance(i)
			.hide(), Bi.getOrCreateInstance(e)
			.toggle(this)
	})), P.on(window, "load.bs.offcanvas.data-api", (() => {
		for (const t of Q.find(ji)) Bi.getOrCreateInstance(t)
			.show()
	})), P.on(window, "resize.bs.offcanvas", (() => {
		for (const t of Q.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t)
			.position && Bi.getOrCreateInstance(t)
			.hide()
	})), R(Bi), g(Bi);
	const Fi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
		zi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
		Ri = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
		qi = (t, e) => {
			const i = t.nodeName.toLowerCase();
			return e.includes(i) ? !Fi.has(i) || Boolean(zi.test(t.nodeValue) || Ri.test(t.nodeValue)) : e.filter((t => t instanceof RegExp))
				.some((t => t.test(i)))
		},
		Vi = {
			"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
			a: ["target", "href", "title", "rel"],
			area: [],
			b: [],
			br: [],
			col: [],
			code: [],
			div: [],
			em: [],
			hr: [],
			h1: [],
			h2: [],
			h3: [],
			h4: [],
			h5: [],
			h6: [],
			i: [],
			img: ["src", "srcset", "alt", "title", "width", "height"],
			li: [],
			ol: [],
			p: [],
			pre: [],
			s: [],
			small: [],
			span: [],
			sub: [],
			sup: [],
			strong: [],
			u: [],
			ul: []
		},
		Ki = {
			allowList: Vi,
			content: {},
			extraClass: "",
			html: !1,
			sanitize: !0,
			sanitizeFn: null,
			template: "<div></div>"
		},
		Qi = {
			allowList: "object",
			content: "object",
			extraClass: "(string|function)",
			html: "boolean",
			sanitize: "boolean",
			sanitizeFn: "(null|function)",
			template: "string"
		},
		Xi = {
			entry: "(string|element|function|null)",
			selector: "(string|element)"
		};
	class Yi extends F {
		constructor(t) {
			super(), this._config = this._getConfig(t)
		}
		static get Default() {
			return Ki
		}
		static get DefaultType() {
			return Qi
		}
		static get NAME() {
			return "TemplateFactory"
		}
		getContent() {
			return Object.values(this._config.content)
				.map((t => this._resolvePossibleFunction(t)))
				.filter(Boolean)
		}
		hasContent() {
			return this.getContent()
				.length > 0
		}
		changeContent(t) {
			return this._checkContent(t), this._config.content = {
				...this._config.content,
				...t
			}, this
		}
		toHtml() {
			const t = document.createElement("div");
			t.innerHTML = this._maybeSanitize(this._config.template);
			for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e);
			const e = t.children[0],
				i = this._resolvePossibleFunction(this._config.extraClass);
			return i && e.classList.add(...i.split(" ")), e
		}
		_typeCheckConfig(t) {
			super._typeCheckConfig(t), this._checkContent(t.content)
		}
		_checkContent(t) {
			for (const [e, i] of Object.entries(t)) super._typeCheckConfig({
				selector: e,
				entry: i
			}, Xi)
		}
		_setContent(t, e, i) {
			const n = Q.findOne(i, t);
			n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove())
		}
		_maybeSanitize(t) {
			return this._config.sanitize ? function(t, e, i) {
				if (!t.length) return t;
				if (i && "function" == typeof i) return i(t);
				const n = (new window.DOMParser)
					.parseFromString(t, "text/html"),
					s = [].concat(...n.body.querySelectorAll("*"));
				for (const t of s) {
					const i = t.nodeName.toLowerCase();
					if (!Object.keys(e)
						.includes(i)) {
						t.remove();
						continue
					}
					const n = [].concat(...t.attributes),
						s = [].concat(e["*"] || [], e[i] || []);
					for (const e of n) qi(e, s) || t.removeAttribute(e.nodeName)
				}
				return n.body.innerHTML
			}(t, this._config.allowList, this._config.sanitizeFn) : t
		}
		_resolvePossibleFunction(t) {
			return "function" == typeof t ? t(this) : t
		}
		_putElementInTemplate(t, e) {
			if (this._config.html) return e.innerHTML = "", void e.append(t);
			e.textContent = t.textContent
		}
	}
	const Ui = new Set(["sanitize", "allowList", "sanitizeFn"]),
		Gi = "fade",
		Ji = "show",
		Zi = ".modal",
		tn = "hide.bs.modal",
		en = "hover",
		nn = "focus",
		sn = {
			AUTO: "auto",
			TOP: "top",
			RIGHT: p() ? "left" : "right",
			BOTTOM: "bottom",
			LEFT: p() ? "right" : "left"
		},
		on = {
			allowList: Vi,
			animation: !0,
			boundary: "clippingParents",
			container: !1,
			customClass: "",
			delay: 0,
			fallbackPlacements: ["top", "right", "bottom", "left"],
			html: !1,
			offset: [0, 0],
			placement: "top",
			popperConfig: null,
			sanitize: !0,
			sanitizeFn: null,
			selector: !1,
			template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
			title: "",
			trigger: "hover focus"
		},
		rn = {
			allowList: "object",
			animation: "boolean",
			boundary: "(string|element)",
			container: "(string|element|boolean)",
			customClass: "(string|function)",
			delay: "(number|object)",
			fallbackPlacements: "array",
			html: "boolean",
			offset: "(array|string|function)",
			placement: "(string|function)",
			popperConfig: "(null|object|function)",
			sanitize: "boolean",
			sanitizeFn: "(null|function)",
			selector: "(string|boolean)",
			template: "string",
			title: "(string|element|function)",
			trigger: "string"
		};
	class an extends z {
		constructor(t, e) {
			if (void 0 === qe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
			super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = !1, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners()
		}
		static get Default() {
			return on
		}
		static get DefaultType() {
			return rn
		}
		static get NAME() {
			return "tooltip"
		}
		enable() {
			this._isEnabled = !0
		}
		disable() {
			this._isEnabled = !1
		}
		toggleEnabled() {
			this._isEnabled = !this._isEnabled
		}
		toggle(t) {
			if (this._isEnabled) {
				if (t) {
					const e = this._initializeOnDelegatedTarget(t);
					return e._activeTrigger.click = !e._activeTrigger.click, void(e._isWithActiveTrigger() ? e._enter() : e._leave())
				}
				this._isShown() ? this._leave() : this._enter()
			}
		}
		dispose() {
			clearTimeout(this._timeout), P.off(this._element.closest(Zi), tn, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose()
		}
		show() {
			if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
			if (!this._isWithContent() || !this._isEnabled) return;
			const t = P.trigger(this._element, this.constructor.eventName("show")),
				e = (c(this._element) || this._element.ownerDocument.documentElement)
				.contains(this._element);
			if (t.defaultPrevented || !e) return;
			this.tip && (this.tip.remove(), this.tip = null);
			const i = this._getTipElement();
			this._element.setAttribute("aria-describedby", i.getAttribute("id"));
			const {
				container: n
			} = this._config;
			if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), P.trigger(this._element, this.constructor.eventName("inserted"))), this._popper ? this._popper.update() : this._popper = this._createPopper(i), i.classList.add(Ji), "ontouchstart" in document.documentElement)
				for (const t of [].concat(...document.body.children)) P.on(t, "mouseover", h);
			this._queueCallback((() => {
				const t = this._isHovered;
				this._isHovered = !1, P.trigger(this._element, this.constructor.eventName("shown")), t && this._leave()
			}), this.tip, this._isAnimated())
		}
		hide() {
			if (!this._isShown()) return;
			if (P.trigger(this._element, this.constructor.eventName("hide"))
				.defaultPrevented) return;
			const t = this._getTipElement();
			if (t.classList.remove(Ji), "ontouchstart" in document.documentElement)
				for (const t of [].concat(...document.body.children)) P.off(t, "mouseover", h);
			this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = !1, this._queueCallback((() => {
				this._isWithActiveTrigger() || (this._isHovered || t.remove(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.eventName("hidden")), this._disposePopper())
			}), this.tip, this._isAnimated())
		}
		update() {
			this._popper && this._popper.update()
		}
		_isWithContent() {
			return Boolean(this._getTitle())
		}
		_getTipElement() {
			return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
		}
		_createTipElement(t) {
			const e = this._getTemplateFactory(t)
				.toHtml();
			if (!e) return null;
			e.classList.remove(Gi, Ji), e.classList.add(`bs-${this.constructor.NAME}-auto`);
			const i = (t => {
					do {
						t += Math.floor(1e6 * Math.random())
					} while (document.getElementById(t));
					return t
				})(this.constructor.NAME)
				.toString();
			return e.setAttribute("id", i), this._isAnimated() && e.classList.add(Gi), e
		}
		setContent(t) {
			this._newContent = t, this._isShown() && (this._disposePopper(), this.show())
		}
		_getTemplateFactory(t) {
			return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Yi({
				...this._config,
				content: t,
				extraClass: this._resolvePossibleFunction(this._config.customClass)
			}), this._templateFactory
		}
		_getContentForTemplate() {
			return {
				".tooltip-inner": this._getTitle()
			}
		}
		_getTitle() {
			return this._resolvePossibleFunction(this._config.title) || this._config.originalTitle
		}
		_initializeOnDelegatedTarget(t) {
			return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
		}
		_isAnimated() {
			return this._config.animation || this.tip && this.tip.classList.contains(Gi)
		}
		_isShown() {
			return this.tip && this.tip.classList.contains(Ji)
		}
		_createPopper(t) {
			const e = "function" == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement,
				i = sn[e.toUpperCase()];
			return Re(this._element, t, this._getPopperConfig(i))
		}
		_getOffset() {
			const {
				offset: t
			} = this._config;
			return "string" == typeof t ? t.split(",")
				.map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
		}
		_resolvePossibleFunction(t) {
			return "function" == typeof t ? t.call(this._element) : t
		}
		_getPopperConfig(t) {
			const e = {
				placement: t,
				modifiers: [{
					name: "flip",
					options: {
						fallbackPlacements: this._config.fallbackPlacements
					}
				}, {
					name: "offset",
					options: {
						offset: this._getOffset()
					}
				}, {
					name: "preventOverflow",
					options: {
						boundary: this._config.boundary
					}
				}, {
					name: "arrow",
					options: {
						element: `.${this.constructor.NAME}-arrow`
					}
				}, {
					name: "preSetPlacement",
					enabled: !0,
					phase: "beforeMain",
					fn: t => {
						this._getTipElement()
							.setAttribute("data-popper-placement", t.state.placement)
					}
				}]
			};
			return {
				...e,
				..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
			}
		}
		_setListeners() {
			const t = this._config.trigger.split(" ");
			for (const e of t)
				if ("click" === e) P.on(this._element, this.constructor.eventName("click"), this._config.selector, (t => this.toggle(t)));
				else if ("manual" !== e) {
				const t = e === en ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
					i = e === en ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
				P.on(this._element, t, this._config.selector, (t => {
					const e = this._initializeOnDelegatedTarget(t);
					e._activeTrigger["focusin" === t.type ? nn : en] = !0, e._enter()
				})), P.on(this._element, i, this._config.selector, (t => {
					const e = this._initializeOnDelegatedTarget(t);
					e._activeTrigger["focusout" === t.type ? nn : en] = e._element.contains(t.relatedTarget), e._leave()
				}))
			}
			this._hideModalHandler = () => {
				this._element && this.hide()
			}, P.on(this._element.closest(Zi), tn, this._hideModalHandler), this._config.selector ? this._config = {
				...this._config,
				trigger: "manual",
				selector: ""
			} : this._fixTitle()
		}
		_fixTitle() {
			const t = this._config.originalTitle;
			t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.removeAttribute("title"))
		}
		_enter() {
			this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout((() => {
				this._isHovered && this.show()
			}), this._config.delay.show))
		}
		_leave() {
			this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => {
				this._isHovered || this.hide()
			}), this._config.delay.hide))
		}
		_setTimeout(t, e) {
			clearTimeout(this._timeout), this._timeout = setTimeout(t, e)
		}
		_isWithActiveTrigger() {
			return Object.values(this._activeTrigger)
				.includes(!0)
		}
		_getConfig(t) {
			const e = B.getDataAttributes(this._element);
			for (const t of Object.keys(e)) Ui.has(t) && delete e[t];
			return t = {
				...e,
				..."object" == typeof t && t ? t : {}
			}, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
		}
		_configAfterMerge(t) {
			return t.container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
				show: t.delay,
				hide: t.delay
			}), t.originalTitle = this._element.getAttribute("title") || "", "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t
		}
		_getDelegateConfig() {
			const t = {};
			for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
			return t
		}
		_disposePopper() {
			this._popper && (this._popper.destroy(), this._popper = null)
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = an.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t]()
				}
			}))
		}
	}
	g(an);
	const ln = {
			...an.Default,
			content: "",
			offset: [0, 8],
			placement: "right",
			template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
			trigger: "click"
		},
		cn = {
			...an.DefaultType,
			content: "(null|string|element|function)"
		};
	class hn extends an {
		static get Default() {
			return ln
		}
		static get DefaultType() {
			return cn
		}
		static get NAME() {
			return "popover"
		}
		_isWithContent() {
			return this._getTitle() || this._getContent()
		}
		_getContentForTemplate() {
			return {
				".popover-header": this._getTitle(),
				".popover-body": this._getContent()
			}
		}
		_getContent() {
			return this._resolvePossibleFunction(this._config.content)
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = hn.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t]()
				}
			}))
		}
	}
	g(hn);
	const dn = "click.bs.scrollspy",
		un = "active",
		fn = "[href]",
		pn = {
			offset: null,
			rootMargin: "0px 0px -25%",
			smoothScroll: !1,
			target: null
		},
		gn = {
			offset: "(number|null)",
			rootMargin: "string",
			smoothScroll: "boolean",
			target: "element"
		};
	class mn extends z {
		constructor(t, e) {
			super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element)
				.overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
					visibleEntryTop: 0,
					parentScrollTop: 0
				}, this.refresh()
		}
		static get Default() {
			return pn
		}
		static get DefaultType() {
			return gn
		}
		static get NAME() {
			return "scrollspy"
		}
		refresh() {
			this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
			for (const t of this._observableSections.values()) this._observer.observe(t)
		}
		dispose() {
			this._observer.disconnect(), super.dispose()
		}
		_configAfterMerge(t) {
			return t.target = r(t.target) || document.body, t
		}
		_maybeEnableSmoothScroll() {
			this._config.smoothScroll && (P.off(this._config.target, dn), P.on(this._config.target, dn, fn, (t => {
				const e = this._observableSections.get(t.target.hash);
				if (e) {
					t.preventDefault();
					const i = this._rootElement || window,
						n = e.offsetTop - this._element.offsetTop;
					if (i.scrollTo) return void i.scrollTo({
						top: n,
						behavior: "smooth"
					});
					i.scrollTop = n
				}
			})))
		}
		_getNewObserver() {
			const t = {
				root: this._rootElement,
				threshold: [.1, .5, 1],
				rootMargin: this._getRootMargin()
			};
			return new IntersectionObserver((t => this._observerCallback(t)), t)
		}
		_observerCallback(t) {
			const e = t => this._targetLinks.get(`#${t.target.id}`),
				i = t => {
					this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t))
				},
				n = (this._rootElement || document.documentElement)
				.scrollTop,
				s = n >= this._previousScrollData.parentScrollTop;
			this._previousScrollData.parentScrollTop = n;
			for (const o of t) {
				if (!o.isIntersecting) {
					this._activeTarget = null, this._clearActiveClass(e(o));
					continue
				}
				const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
				if (s && t) {
					if (i(o), !n) return
				} else s || t || i(o)
			}
		}
		_getRootMargin() {
			return this._config.offset ? `${this._config.offset}px 0px -30%` : this._config.rootMargin
		}
		_initializeTargetsAndObservables() {
			this._targetLinks = new Map, this._observableSections = new Map;
			const t = Q.find(fn, this._config.target);
			for (const e of t) {
				if (!e.hash || l(e)) continue;
				const t = Q.findOne(e.hash, this._element);
				a(t) && (this._targetLinks.set(e.hash, e), this._observableSections.set(e.hash, t))
			}
		}
		_process(t) {
			this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(un), this._activateParents(t), P.trigger(this._element, "activate.bs.scrollspy", {
				relatedTarget: t
			}))
		}
		_activateParents(t) {
			if (t.classList.contains("dropdown-item")) Q.findOne(".dropdown-toggle", t.closest(".dropdown"))
				.classList.add(un);
			else
				for (const e of Q.parents(t, ".nav, .list-group"))
					for (const t of Q.prev(e, ".nav-link, .nav-item > .nav-link, .list-group-item")) t.classList.add(un)
		}
		_clearActiveClass(t) {
			t.classList.remove(un);
			const e = Q.find("[href].active", t);
			for (const t of e) t.classList.remove(un)
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = mn.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
					e[t]()
				}
			}))
		}
	}
	P.on(window, "load.bs.scrollspy.data-api", (() => {
		for (const t of Q.find('[data-bs-spy="scroll"]')) mn.getOrCreateInstance(t)
	})), g(mn);
	const _n = "ArrowLeft",
		bn = "ArrowRight",
		vn = "ArrowUp",
		yn = "ArrowDown",
		wn = "active",
		An = "fade",
		En = "show",
		Tn = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
		Cn = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Tn}`;
	class On extends z {
		constructor(t) {
			super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), P.on(this._element, "keydown.bs.tab", (t => this._keydown(t))))
		}
		static get NAME() {
			return "tab"
		}
		show() {
			const t = this._element;
			if (this._elemIsActive(t)) return;
			const e = this._getActiveElem(),
				i = e ? P.trigger(e, "hide.bs.tab", {
					relatedTarget: t
				}) : null;
			P.trigger(t, "show.bs.tab", {
					relatedTarget: e
				})
				.defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e))
		}
		_activate(t, e) {
			t && (t.classList.add(wn), this._activate(n(t)), this._queueCallback((() => {
				"tab" === t.getAttribute("role") ? (t.focus(), t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), P.trigger(t, "shown.bs.tab", {
					relatedTarget: e
				})) : t.classList.add(En)
			}), t, t.classList.contains(An)))
		}
		_deactivate(t, e) {
			t && (t.classList.remove(wn), t.blur(), this._deactivate(n(t)), this._queueCallback((() => {
				"tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), P.trigger(t, "hidden.bs.tab", {
					relatedTarget: e
				})) : t.classList.remove(En)
			}), t, t.classList.contains(An)))
		}
		_keydown(t) {
			if (![_n, bn, vn, yn].includes(t.key)) return;
			t.stopPropagation(), t.preventDefault();
			const e = [bn, yn].includes(t.key),
				i = b(this._getChildren()
					.filter((t => !l(t))), t.target, e, !0);
			i && On.getOrCreateInstance(i)
				.show()
		}
		_getChildren() {
			return Q.find(Cn, this._parent)
		}
		_getActiveElem() {
			return this._getChildren()
				.find((t => this._elemIsActive(t))) || null
		}
		_setInitialAttributes(t, e) {
			this._setAttributeIfNotExists(t, "role", "tablist");
			for (const t of e) this._setInitialAttributesOnChild(t)
		}
		_setInitialAttributesOnChild(t) {
			t = this._getInnerElement(t);
			const e = this._elemIsActive(t),
				i = this._getOuterElement(t);
			t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t)
		}
		_setInitialAttributesOnTargetPanel(t) {
			const e = n(t);
			e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`))
		}
		_toggleDropDown(t, e) {
			const i = this._getOuterElement(t);
			if (!i.classList.contains("dropdown")) return;
			const n = (t, n) => {
				const s = Q.findOne(t, i);
				s && s.classList.toggle(n, e)
			};
			n(".dropdown-toggle", wn), n(".dropdown-menu", En), n(".dropdown-item", wn), i.setAttribute("aria-expanded", e)
		}
		_setAttributeIfNotExists(t, e, i) {
			t.hasAttribute(e) || t.setAttribute(e, i)
		}
		_elemIsActive(t) {
			return t.classList.contains(wn)
		}
		_getInnerElement(t) {
			return t.matches(Cn) ? t : Q.findOne(Cn, t)
		}
		_getOuterElement(t) {
			return t.closest(".nav-item, .list-group-item") || t
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = On.getOrCreateInstance(this);
				if ("string" == typeof t) {
					if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
					e[t]()
				}
			}))
		}
	}
	P.on(document, "click.bs.tab", Tn, (function(t) {
		["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || On.getOrCreateInstance(this)
			.show()
	})), P.on(window, "load.bs.tab", (() => {
		for (const t of Q.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) On.getOrCreateInstance(t)
	})), g(On);
	const xn = "hide",
		kn = "show",
		Ln = "showing",
		Dn = {
			animation: "boolean",
			autohide: "boolean",
			delay: "number"
		},
		Sn = {
			animation: !0,
			autohide: !0,
			delay: 5e3
		};
	class In extends z {
		constructor(t, e) {
			super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
		}
		static get Default() {
			return Sn
		}
		static get DefaultType() {
			return Dn
		}
		static get NAME() {
			return "toast"
		}
		show() {
			P.trigger(this._element, "show.bs.toast")
				.defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(xn), d(this._element), this._element.classList.add(kn, Ln), this._queueCallback((() => {
					this._element.classList.remove(Ln), P.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
				}), this._element, this._config.animation))
		}
		hide() {
			this.isShown() && (P.trigger(this._element, "hide.bs.toast")
				.defaultPrevented || (this._element.classList.add(Ln), this._queueCallback((() => {
					this._element.classList.add(xn), this._element.classList.remove(Ln, kn), P.trigger(this._element, "hidden.bs.toast")
				}), this._element, this._config.animation)))
		}
		dispose() {
			this._clearTimeout(), this.isShown() && this._element.classList.remove(kn), super.dispose()
		}
		isShown() {
			return this._element.classList.contains(kn)
		}
		_maybeScheduleHide() {
			this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
				this.hide()
			}), this._config.delay)))
		}
		_onInteraction(t, e) {
			switch (t.type) {
				case "mouseover":
				case "mouseout":
					this._hasMouseInteraction = e;
					break;
				case "focusin":
				case "focusout":
					this._hasKeyboardInteraction = e
			}
			if (e) return void this._clearTimeout();
			const i = t.relatedTarget;
			this._element === i || this._element.contains(i) || this._maybeScheduleHide()
		}
		_setListeners() {
			P.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(t, !0))), P.on(this._element, "mouseout.bs.toast", (t => this._onInteraction(t, !1))), P.on(this._element, "focusin.bs.toast", (t => this._onInteraction(t, !0))), P.on(this._element, "focusout.bs.toast", (t => this._onInteraction(t, !1)))
		}
		_clearTimeout() {
			clearTimeout(this._timeout), this._timeout = null
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = In.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t](this)
				}
			}))
		}
	}
	return R(In), g(In), {
		Alert: q,
		Button: K,
		Carousel: at,
		Collapse: pt,
		Dropdown: li,
		Modal: Si,
		Offcanvas: Bi,
		Popover: hn,
		ScrollSpy: mn,
		Tab: On,
		Toast: In,
		Tooltip: an
	}
}));
//# sourceMappingURL=bootstrap.bundle.min.js.map
/**
 * SimpleBar.js - v5.3.8
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self)
		.SimpleBar = e()
}(this, (function() {
	"use strict";
	var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

	function e(t, e) {
		return t(e = {
			exports: {}
		}, e.exports), e.exports
	}
	var r, n, i = function(t) {
			return t && t.Math == Math && t
		},
		o = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof t && t) || function() {
			return this
		}() || Function("return this")(),
		s = Object.defineProperty,
		a = function(t, e) {
			try {
				s(o, t, {
					value: e,
					configurable: !0,
					writable: !0
				})
			} catch (r) {
				o[t] = e
			}
			return e
		},
		c = o["__core-js_shared__"] || a("__core-js_shared__", {}),
		l = e((function(t) {
			(t.exports = function(t, e) {
				return c[t] || (c[t] = void 0 !== e ? e : {})
			})("versions", [])
			.push({
				version: "3.22.6",
				mode: "global",
				copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
				license: "https://github.com/zloirock/core-js/blob/v3.22.6/LICENSE",
				source: "https://github.com/zloirock/core-js"
			})
		})),
		u = function(t) {
			try {
				return !!t()
			} catch (t) {
				return !0
			}
		},
		f = !u((function() {
			var t = function() {}.bind();
			return "function" != typeof t || t.hasOwnProperty("prototype")
		})),
		h = Function.prototype,
		d = h.bind,
		p = h.call,
		v = f && d.bind(p, p),
		g = f ? function(t) {
			return t && v(t)
		} : function(t) {
			return t && function() {
				return p.apply(t, arguments)
			}
		},
		b = o.TypeError,
		y = function(t) {
			if (null == t) throw b("Can't call method on " + t);
			return t
		},
		m = o.Object,
		x = function(t) {
			return m(y(t))
		},
		E = g({}.hasOwnProperty),
		w = Object.hasOwn || function(t, e) {
			return E(x(t), e)
		},
		O = 0,
		S = Math.random(),
		A = g(1..toString),
		k = function(t) {
			return "Symbol(" + (void 0 === t ? "" : t) + ")_" + A(++O + S, 36)
		},
		T = function(t) {
			return "function" == typeof t
		},
		L = function(t) {
			return T(t) ? t : void 0
		},
		R = function(t, e) {
			return arguments.length < 2 ? L(o[t]) : o[t] && o[t][e]
		},
		_ = R("navigator", "userAgent") || "",
		j = o.process,
		z = o.Deno,
		M = j && j.versions || z && z.version,
		C = M && M.v8;
	C && (n = (r = C.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !n && _ && (!(r = _.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = _.match(/Chrome\/(\d+)/)) && (n = +r[1]);
	var N = n,
		W = !!Object.getOwnPropertySymbols && !u((function() {
			var t = Symbol();
			return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && N && N < 41
		})),
		I = W && !Symbol.sham && "symbol" == typeof Symbol.iterator,
		P = l("wks"),
		B = o.Symbol,
		D = B && B.for,
		F = I ? B : B && B.withoutSetter || k,
		V = function(t) {
			if (!w(P, t) || !W && "string" != typeof P[t]) {
				var e = "Symbol." + t;
				W && w(B, t) ? P[t] = B[t] : P[t] = I && D ? D(e) : F(e)
			}
			return P[t]
		},
		$ = {};
	$[V("toStringTag")] = "z";
	var X = "[object z]" === String($),
		H = !u((function() {
			return 7 != Object.defineProperty({}, 1, {
				get: function() {
					return 7
				}
			})[1]
		})),
		q = function(t) {
			return "object" == typeof t ? null !== t : T(t)
		},
		Y = o.document,
		G = q(Y) && q(Y.createElement),
		U = function(t) {
			return G ? Y.createElement(t) : {}
		},
		K = !H && !u((function() {
			return 7 != Object.defineProperty(U("div"), "a", {
					get: function() {
						return 7
					}
				})
				.a
		})),
		J = H && u((function() {
			return 42 != Object.defineProperty((function() {}), "prototype", {
					value: 42,
					writable: !1
				})
				.prototype
		})),
		Q = o.String,
		Z = o.TypeError,
		tt = function(t) {
			if (q(t)) return t;
			throw Z(Q(t) + " is not an object")
		},
		et = Function.prototype.call,
		rt = f ? et.bind(et) : function() {
			return et.apply(et, arguments)
		},
		nt = g({}.isPrototypeOf),
		it = o.Object,
		ot = I ? function(t) {
			return "symbol" == typeof t
		} : function(t) {
			var e = R("Symbol");
			return T(e) && nt(e.prototype, it(t))
		},
		st = o.String,
		at = function(t) {
			try {
				return st(t)
			} catch (t) {
				return "Object"
			}
		},
		ct = o.TypeError,
		lt = function(t) {
			if (T(t)) return t;
			throw ct(at(t) + " is not a function")
		},
		ut = function(t, e) {
			var r = t[e];
			return null == r ? void 0 : lt(r)
		},
		ft = o.TypeError,
		ht = o.TypeError,
		dt = V("toPrimitive"),
		pt = function(t, e) {
			if (!q(t) || ot(t)) return t;
			var r, n = ut(t, dt);
			if (n) {
				if (void 0 === e && (e = "default"), r = rt(n, t, e), !q(r) || ot(r)) return r;
				throw ht("Can't convert object to primitive value")
			}
			return void 0 === e && (e = "number"),
				function(t, e) {
					var r, n;
					if ("string" === e && T(r = t.toString) && !q(n = rt(r, t))) return n;
					if (T(r = t.valueOf) && !q(n = rt(r, t))) return n;
					if ("string" !== e && T(r = t.toString) && !q(n = rt(r, t))) return n;
					throw ft("Can't convert object to primitive value")
				}(t, e)
		},
		vt = function(t) {
			var e = pt(t, "string");
			return ot(e) ? e : e + ""
		},
		gt = o.TypeError,
		bt = Object.defineProperty,
		yt = Object.getOwnPropertyDescriptor,
		mt = {
			f: H ? J ? function(t, e, r) {
				if (tt(t), e = vt(e), tt(r), "function" == typeof t && "prototype" === e && "value" in r && "writable" in r && !r.writable) {
					var n = yt(t, e);
					n && n.writable && (t[e] = r.value, r = {
						configurable: "configurable" in r ? r.configurable : n.configurable,
						enumerable: "enumerable" in r ? r.enumerable : n.enumerable,
						writable: !1
					})
				}
				return bt(t, e, r)
			} : bt : function(t, e, r) {
				if (tt(t), e = vt(e), tt(r), K) try {
					return bt(t, e, r)
				} catch (t) {}
				if ("get" in r || "set" in r) throw gt("Accessors not supported");
				return "value" in r && (t[e] = r.value), t
			}
		},
		xt = function(t, e) {
			return {
				enumerable: !(1 & t),
				configurable: !(2 & t),
				writable: !(4 & t),
				value: e
			}
		},
		Et = H ? function(t, e, r) {
			return mt.f(t, e, xt(1, r))
		} : function(t, e, r) {
			return t[e] = r, t
		},
		wt = Function.prototype,
		Ot = H && Object.getOwnPropertyDescriptor,
		St = w(wt, "name"),
		At = {
			EXISTS: St,
			PROPER: St && "something" === function() {}.name,
			CONFIGURABLE: St && (!H || H && Ot(wt, "name")
				.configurable)
		},
		kt = g(Function.toString);
	T(c.inspectSource) || (c.inspectSource = function(t) {
		return kt(t)
	});
	var Tt, Lt, Rt, _t = c.inspectSource,
		jt = o.WeakMap,
		zt = T(jt) && /native code/.test(_t(jt)),
		Mt = l("keys"),
		Ct = function(t) {
			return Mt[t] || (Mt[t] = k(t))
		},
		Nt = {},
		Wt = o.TypeError,
		It = o.WeakMap;
	if (zt || c.state) {
		var Pt = c.state || (c.state = new It),
			Bt = g(Pt.get),
			Dt = g(Pt.has),
			Ft = g(Pt.set);
		Tt = function(t, e) {
			if (Dt(Pt, t)) throw new Wt("Object already initialized");
			return e.facade = t, Ft(Pt, t, e), e
		}, Lt = function(t) {
			return Bt(Pt, t) || {}
		}, Rt = function(t) {
			return Dt(Pt, t)
		}
	} else {
		var Vt = Ct("state");
		Nt[Vt] = !0, Tt = function(t, e) {
			if (w(t, Vt)) throw new Wt("Object already initialized");
			return e.facade = t, Et(t, Vt, e), e
		}, Lt = function(t) {
			return w(t, Vt) ? t[Vt] : {}
		}, Rt = function(t) {
			return w(t, Vt)
		}
	}
	var $t = {
			set: Tt,
			get: Lt,
			has: Rt,
			enforce: function(t) {
				return Rt(t) ? Lt(t) : Tt(t, {})
			},
			getterFor: function(t) {
				return function(e) {
					var r;
					if (!q(e) || (r = Lt(e))
						.type !== t) throw Wt("Incompatible receiver, " + t + " required");
					return r
				}
			}
		},
		Xt = e((function(t) {
			var e = At.CONFIGURABLE,
				r = $t.enforce,
				n = $t.get,
				i = Object.defineProperty,
				o = H && !u((function() {
					return 8 !== i((function() {}), "length", {
							value: 8
						})
						.length
				})),
				s = String(String)
				.split("String"),
				a = t.exports = function(t, n, a) {
					if ("Symbol(" === String(n)
						.slice(0, 7) && (n = "[" + String(n)
							.replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), a && a.getter && (n = "get " + n), a && a.setter && (n = "set " + n), (!w(t, "name") || e && t.name !== n) && i(t, "name", {
							value: n,
							configurable: !0
						}), o && a && w(a, "arity") && t.length !== a.arity && i(t, "length", {
							value: a.arity
						}), a && w(a, "constructor") && a.constructor) {
						if (H) try {
							i(t, "prototype", {
								writable: !1
							})
						} catch (t) {}
					} else t.prototype = void 0;
					var c = r(t);
					return w(c, "source") || (c.source = s.join("string" == typeof n ? n : "")), t
				};
			Function.prototype.toString = a((function() {
				return T(this) && n(this)
					.source || _t(this)
			}), "toString")
		})),
		Ht = function(t, e, r, n) {
			n || (n = {});
			var i = n.enumerable,
				o = void 0 !== n.name ? n.name : e;
			return T(r) && Xt(r, o, n), n.global ? i ? t[e] = r : a(e, r) : (n.unsafe ? t[e] && (i = !0) : delete t[e], i ? t[e] = r : Et(t, e, r)), t
		},
		qt = g({}.toString),
		Yt = g("".slice),
		Gt = function(t) {
			return Yt(qt(t), 8, -1)
		},
		Ut = V("toStringTag"),
		Kt = o.Object,
		Jt = "Arguments" == Gt(function() {
			return arguments
		}()),
		Qt = X ? Gt : function(t) {
			var e, r, n;
			return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = function(t, e) {
				try {
					return t[e]
				} catch (t) {}
			}(e = Kt(t), Ut)) ? r : Jt ? Gt(e) : "Object" == (n = Gt(e)) && T(e.callee) ? "Arguments" : n
		},
		Zt = X ? {}.toString : function() {
			return "[object " + Qt(this) + "]"
		};
	X || Ht(Object.prototype, "toString", Zt, {
		unsafe: !0
	});
	var te = {
			CSSRuleList: 0,
			CSSStyleDeclaration: 0,
			CSSValueList: 0,
			ClientRectList: 0,
			DOMRectList: 0,
			DOMStringList: 0,
			DOMTokenList: 1,
			DataTransferItemList: 0,
			FileList: 0,
			HTMLAllCollection: 0,
			HTMLCollection: 0,
			HTMLFormElement: 0,
			HTMLSelectElement: 0,
			MediaList: 0,
			MimeTypeArray: 0,
			NamedNodeMap: 0,
			NodeList: 1,
			PaintRequestList: 0,
			Plugin: 0,
			PluginArray: 0,
			SVGLengthList: 0,
			SVGNumberList: 0,
			SVGPathSegList: 0,
			SVGPointList: 0,
			SVGStringList: 0,
			SVGTransformList: 0,
			SourceBufferList: 0,
			StyleSheetList: 0,
			TextTrackCueList: 0,
			TextTrackList: 0,
			TouchList: 0
		},
		ee = U("span")
		.classList,
		re = ee && ee.constructor && ee.constructor.prototype,
		ne = re === Object.prototype ? void 0 : re,
		ie = g(g.bind),
		oe = function(t, e) {
			return lt(t), void 0 === e ? t : f ? ie(t, e) : function() {
				return t.apply(e, arguments)
			}
		},
		se = o.Object,
		ae = g("".split),
		ce = u((function() {
			return !se("z")
				.propertyIsEnumerable(0)
		})) ? function(t) {
			return "String" == Gt(t) ? ae(t, "") : se(t)
		} : se,
		le = Math.ceil,
		ue = Math.floor,
		fe = Math.trunc || function(t) {
			var e = +t;
			return (e > 0 ? ue : le)(e)
		},
		he = function(t) {
			var e = +t;
			return e != e || 0 === e ? 0 : fe(e)
		},
		de = Math.min,
		pe = function(t) {
			return t > 0 ? de(he(t), 9007199254740991) : 0
		},
		ve = function(t) {
			return pe(t.length)
		},
		ge = Array.isArray || function(t) {
			return "Array" == Gt(t)
		},
		be = function() {},
		ye = [],
		me = R("Reflect", "construct"),
		xe = /^\s*(?:class|function)\b/,
		Ee = g(xe.exec),
		we = !xe.exec(be),
		Oe = function(t) {
			if (!T(t)) return !1;
			try {
				return me(be, ye, t), !0
			} catch (t) {
				return !1
			}
		},
		Se = function(t) {
			if (!T(t)) return !1;
			switch (Qt(t)) {
				case "AsyncFunction":
				case "GeneratorFunction":
				case "AsyncGeneratorFunction":
					return !1
			}
			try {
				return we || !!Ee(xe, _t(t))
			} catch (t) {
				return !0
			}
		};
	Se.sham = !0;
	var Ae = !me || u((function() {
			var t;
			return Oe(Oe.call) || !Oe(Object) || !Oe((function() {
				t = !0
			})) || t
		})) ? Se : Oe,
		ke = V("species"),
		Te = o.Array,
		Le = function(t, e) {
			return new(function(t) {
				var e;
				return ge(t) && (e = t.constructor, (Ae(e) && (e === Te || ge(e.prototype)) || q(e) && null === (e = e[ke])) && (e = void 0)), void 0 === e ? Te : e
			}(t))(0 === e ? 0 : e)
		},
		Re = g([].push),
		_e = function(t) {
			var e = 1 == t,
				r = 2 == t,
				n = 3 == t,
				i = 4 == t,
				o = 6 == t,
				s = 7 == t,
				a = 5 == t || o;
			return function(c, l, u, f) {
				for (var h, d, p = x(c), v = ce(p), g = oe(l, u), b = ve(v), y = 0, m = f || Le, E = e ? m(c, b) : r || s ? m(c, 0) : void 0; b > y; y++)
					if ((a || y in v) && (d = g(h = v[y], y, p), t))
						if (e) E[y] = d;
						else if (d) switch (t) {
					case 3:
						return !0;
					case 5:
						return h;
					case 6:
						return y;
					case 2:
						Re(E, h)
				} else switch (t) {
					case 4:
						return !1;
					case 7:
						Re(E, h)
				}
				return o ? -1 : n || i ? i : E
			}
		},
		je = {
			forEach: _e(0),
			map: _e(1),
			filter: _e(2),
			some: _e(3),
			every: _e(4),
			find: _e(5),
			findIndex: _e(6),
			filterReject: _e(7)
		},
		ze = function(t, e) {
			var r = [][t];
			return !!r && u((function() {
				r.call(null, e || function() {
					return 1
				}, 1)
			}))
		},
		Me = je.forEach,
		Ce = ze("forEach") ? [].forEach : function(t) {
			return Me(this, t, arguments.length > 1 ? arguments[1] : void 0)
		},
		Ne = function(t) {
			if (t && t.forEach !== Ce) try {
				Et(t, "forEach", Ce)
			} catch (e) {
				t.forEach = Ce
			}
		};
	for (var We in te) te[We] && Ne(o[We] && o[We].prototype);
	Ne(ne);
	var Ie = !("undefined" == typeof window || !window.document || !window.document.createElement),
		Pe = {}.propertyIsEnumerable,
		Be = Object.getOwnPropertyDescriptor,
		De = {
			f: Be && !Pe.call({
				1: 2
			}, 1) ? function(t) {
				var e = Be(this, t);
				return !!e && e.enumerable
			} : Pe
		},
		Fe = function(t) {
			return ce(y(t))
		},
		Ve = Object.getOwnPropertyDescriptor,
		$e = {
			f: H ? Ve : function(t, e) {
				if (t = Fe(t), e = vt(e), K) try {
					return Ve(t, e)
				} catch (t) {}
				if (w(t, e)) return xt(!rt(De.f, t, e), t[e])
			}
		},
		Xe = Math.max,
		He = Math.min,
		qe = function(t, e) {
			var r = he(t);
			return r < 0 ? Xe(r + e, 0) : He(r, e)
		},
		Ye = function(t) {
			return function(e, r, n) {
				var i, o = Fe(e),
					s = ve(o),
					a = qe(n, s);
				if (t && r != r) {
					for (; s > a;)
						if ((i = o[a++]) != i) return !0
				} else
					for (; s > a; a++)
						if ((t || a in o) && o[a] === r) return t || a || 0;
				return !t && -1
			}
		},
		Ge = {
			includes: Ye(!0),
			indexOf: Ye(!1)
		}.indexOf,
		Ue = g([].push),
		Ke = function(t, e) {
			var r, n = Fe(t),
				i = 0,
				o = [];
			for (r in n) !w(Nt, r) && w(n, r) && Ue(o, r);
			for (; e.length > i;) w(n, r = e[i++]) && (~Ge(o, r) || Ue(o, r));
			return o
		},
		Je = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
		Qe = Je.concat("length", "prototype"),
		Ze = {
			f: Object.getOwnPropertyNames || function(t) {
				return Ke(t, Qe)
			}
		},
		tr = {
			f: Object.getOwnPropertySymbols
		},
		er = g([].concat),
		rr = R("Reflect", "ownKeys") || function(t) {
			var e = Ze.f(tt(t)),
				r = tr.f;
			return r ? er(e, r(t)) : e
		},
		nr = function(t, e, r) {
			for (var n = rr(e), i = mt.f, o = $e.f, s = 0; s < n.length; s++) {
				var a = n[s];
				w(t, a) || r && w(r, a) || i(t, a, o(e, a))
			}
		},
		ir = /#|\.prototype\./,
		or = function(t, e) {
			var r = ar[sr(t)];
			return r == lr || r != cr && (T(e) ? u(e) : !!e)
		},
		sr = or.normalize = function(t) {
			return String(t)
				.replace(ir, ".")
				.toLowerCase()
		},
		ar = or.data = {},
		cr = or.NATIVE = "N",
		lr = or.POLYFILL = "P",
		ur = or,
		fr = $e.f,
		hr = function(t, e) {
			var r, n, i, s, c, l = t.target,
				u = t.global,
				f = t.stat;
			if (r = u ? o : f ? o[l] || a(l, {}) : (o[l] || {})
				.prototype)
				for (n in e) {
					if (s = e[n], i = t.dontCallGetSet ? (c = fr(r, n)) && c.value : r[n], !ur(u ? n : l + (f ? "." : "#") + n, t.forced) && void 0 !== i) {
						if (typeof s == typeof i) continue;
						nr(s, i)
					}(t.sham || i && i.sham) && Et(s, "sham", !0), Ht(r, n, s, t)
				}
		},
		dr = o.String,
		pr = function(t) {
			if ("Symbol" === Qt(t)) throw TypeError("Cannot convert a Symbol value to a string");
			return dr(t)
		},
		vr = "\t\n\v\f\r                　\u2028\u2029\ufeff",
		gr = g("".replace),
		br = "[" + vr + "]",
		yr = RegExp("^" + br + br + "*"),
		mr = RegExp(br + br + "*$"),
		xr = function(t) {
			return function(e) {
				var r = pr(y(e));
				return 1 & t && (r = gr(r, yr, "")), 2 & t && (r = gr(r, mr, "")), r
			}
		},
		Er = {
			start: xr(1),
			end: xr(2),
			trim: xr(3)
		}.trim,
		wr = o.parseInt,
		Or = o.Symbol,
		Sr = Or && Or.iterator,
		Ar = /^[+-]?0x/i,
		kr = g(Ar.exec),
		Tr = 8 !== wr(vr + "08") || 22 !== wr(vr + "0x16") || Sr && !u((function() {
			wr(Object(Sr))
		})) ? function(t, e) {
			var r = Er(pr(t));
			return wr(r, e >>> 0 || (kr(Ar, r) ? 16 : 10))
		} : wr;
	hr({
		global: !0,
		forced: parseInt != Tr
	}, {
		parseInt: Tr
	});
	var Lr = Object.keys || function(t) {
			return Ke(t, Je)
		},
		Rr = Object.assign,
		_r = Object.defineProperty,
		jr = g([].concat),
		zr = !Rr || u((function() {
			if (H && 1 !== Rr({
					b: 1
				}, Rr(_r({}, "a", {
					enumerable: !0,
					get: function() {
						_r(this, "b", {
							value: 3,
							enumerable: !1
						})
					}
				}), {
					b: 2
				}))
				.b) return !0;
			var t = {},
				e = {},
				r = Symbol();
			return t[r] = 7, "abcdefghijklmnopqrst".split("")
				.forEach((function(t) {
					e[t] = t
				})), 7 != Rr({}, t)[r] || "abcdefghijklmnopqrst" != Lr(Rr({}, e))
				.join("")
		})) ? function(t, e) {
			for (var r = x(t), n = arguments.length, i = 1, o = tr.f, s = De.f; n > i;)
				for (var a, c = ce(arguments[i++]), l = o ? jr(Lr(c), o(c)) : Lr(c), u = l.length, f = 0; u > f;) a = l[f++], H && !rt(s, c, a) || (r[a] = c[a]);
			return r
		} : Rr;
	hr({
		target: "Object",
		stat: !0,
		arity: 2,
		forced: Object.assign !== zr
	}, {
		assign: zr
	});
	var Mr, Cr = V("species"),
		Nr = je.filter,
		Wr = (Mr = "filter", N >= 51 || !u((function() {
			var t = [];
			return (t.constructor = {})[Cr] = function() {
					return {
						foo: 1
					}
				}, 1 !== t[Mr](Boolean)
				.foo
		})));
	hr({
		target: "Array",
		proto: !0,
		forced: !Wr
	}, {
		filter: function(t) {
			return Nr(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var Ir, Pr = {
			f: H && !J ? Object.defineProperties : function(t, e) {
				tt(t);
				for (var r, n = Fe(e), i = Lr(e), o = i.length, s = 0; o > s;) mt.f(t, r = i[s++], n[r]);
				return t
			}
		},
		Br = R("document", "documentElement"),
		Dr = Ct("IE_PROTO"),
		Fr = function() {},
		Vr = function(t) {
			return "<script>" + t + "<\/script>"
		},
		$r = function(t) {
			t.write(Vr("")), t.close();
			var e = t.parentWindow.Object;
			return t = null, e
		},
		Xr = function() {
			try {
				Ir = new ActiveXObject("htmlfile")
			} catch (t) {}
			var t, e;
			Xr = "undefined" != typeof document ? document.domain && Ir ? $r(Ir) : ((e = U("iframe"))
				.style.display = "none", Br.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document)
				.open(), t.write(Vr("document.F=Object")), t.close(), t.F) : $r(Ir);
			for (var r = Je.length; r--;) delete Xr.prototype[Je[r]];
			return Xr()
		};
	Nt[Dr] = !0;
	var Hr = Object.create || function(t, e) {
			var r;
			return null !== t ? (Fr.prototype = tt(t), r = new Fr, Fr.prototype = null, r[Dr] = t) : r = Xr(), void 0 === e ? r : Pr.f(r, e)
		},
		qr = mt.f,
		Yr = V("unscopables"),
		Gr = Array.prototype;
	null == Gr[Yr] && qr(Gr, Yr, {
		configurable: !0,
		value: Hr(null)
	});
	var Ur, Kr, Jr, Qr = function(t) {
			Gr[Yr][t] = !0
		},
		Zr = {},
		tn = !u((function() {
			function t() {}
			return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
		})),
		en = Ct("IE_PROTO"),
		rn = o.Object,
		nn = rn.prototype,
		on = tn ? rn.getPrototypeOf : function(t) {
			var e = x(t);
			if (w(e, en)) return e[en];
			var r = e.constructor;
			return T(r) && e instanceof r ? r.prototype : e instanceof rn ? nn : null
		},
		sn = V("iterator"),
		an = !1;
	[].keys && ("next" in (Jr = [].keys()) ? (Kr = on(on(Jr))) !== Object.prototype && (Ur = Kr) : an = !0), (null == Ur || u((function() {
		var t = {};
		return Ur[sn].call(t) !== t
	}))) && (Ur = {}), T(Ur[sn]) || Ht(Ur, sn, (function() {
		return this
	}));
	var cn = {
			IteratorPrototype: Ur,
			BUGGY_SAFARI_ITERATORS: an
		},
		ln = mt.f,
		un = V("toStringTag"),
		fn = function(t, e, r) {
			t && !r && (t = t.prototype), t && !w(t, un) && ln(t, un, {
				configurable: !0,
				value: e
			})
		},
		hn = cn.IteratorPrototype,
		dn = function() {
			return this
		},
		pn = o.String,
		vn = o.TypeError,
		gn = Object.setPrototypeOf || ("__proto__" in {} ? function() {
			var t, e = !1,
				r = {};
			try {
				(t = g(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")
					.set))(r, []), e = r instanceof Array
			} catch (t) {}
			return function(r, n) {
				return tt(r),
					function(t) {
						if ("object" == typeof t || T(t)) return t;
						throw vn("Can't set " + pn(t) + " as a prototype")
					}(n), e ? t(r, n) : r.__proto__ = n, r
			}
		}() : void 0),
		bn = At.PROPER,
		yn = At.CONFIGURABLE,
		mn = cn.IteratorPrototype,
		xn = cn.BUGGY_SAFARI_ITERATORS,
		En = V("iterator"),
		wn = function() {
			return this
		},
		On = function(t, e, r, n, i, o, s) {
			! function(t, e, r, n) {
				var i = e + " Iterator";
				t.prototype = Hr(hn, {
					next: xt(+!n, r)
				}), fn(t, i, !1), Zr[i] = dn
			}(r, e, n);
			var a, c, l, u = function(t) {
					if (t === i && v) return v;
					if (!xn && t in d) return d[t];
					switch (t) {
						case "keys":
						case "values":
						case "entries":
							return function() {
								return new r(this, t)
							}
					}
					return function() {
						return new r(this)
					}
				},
				f = e + " Iterator",
				h = !1,
				d = t.prototype,
				p = d[En] || d["@@iterator"] || i && d[i],
				v = !xn && p || u(i),
				g = "Array" == e && d.entries || p;
			if (g && (a = on(g.call(new t))) !== Object.prototype && a.next && (on(a) !== mn && (gn ? gn(a, mn) : T(a[En]) || Ht(a, En, wn)), fn(a, f, !0)), bn && "values" == i && p && "values" !== p.name && (yn ? Et(d, "name", "values") : (h = !0, v = function() {
				return rt(p, this)
			})), i)
				if (c = {
					values: u("values"),
					keys: o ? v : u("keys"),
					entries: u("entries")
				}, s)
					for (l in c)(xn || h || !(l in d)) && Ht(d, l, c[l]);
				else hr({
					target: e,
					proto: !0,
					forced: xn || h
				}, c);
			return d[En] !== v && Ht(d, En, v, {
				name: i
			}), Zr[e] = v, c
		},
		Sn = mt.f,
		An = $t.set,
		kn = $t.getterFor("Array Iterator"),
		Tn = On(Array, "Array", (function(t, e) {
			An(this, {
				type: "Array Iterator",
				target: Fe(t),
				index: 0,
				kind: e
			})
		}), (function() {
			var t = kn(this),
				e = t.target,
				r = t.kind,
				n = t.index++;
			return !e || n >= e.length ? (t.target = void 0, {
				value: void 0,
				done: !0
			}) : "keys" == r ? {
				value: n,
				done: !1
			} : "values" == r ? {
				value: e[n],
				done: !1
			} : {
				value: [n, e[n]],
				done: !1
			}
		}), "values"),
		Ln = Zr.Arguments = Zr.Array;
	if (Qr("keys"), Qr("values"), Qr("entries"), H && "values" !== Ln.name) try {
		Sn(Ln, "name", {
			value: "values"
		})
	} catch (t) {}
	var Rn = g("".charAt),
		_n = g("".charCodeAt),
		jn = g("".slice),
		zn = function(t) {
			return function(e, r) {
				var n, i, o = pr(y(e)),
					s = he(r),
					a = o.length;
				return s < 0 || s >= a ? t ? "" : void 0 : (n = _n(o, s)) < 55296 || n > 56319 || s + 1 === a || (i = _n(o, s + 1)) < 56320 || i > 57343 ? t ? Rn(o, s) : n : t ? jn(o, s, s + 2) : i - 56320 + (n - 55296 << 10) + 65536
			}
		},
		Mn = {
			codeAt: zn(!1),
			charAt: zn(!0)
		},
		Cn = Mn.charAt,
		Nn = $t.set,
		Wn = $t.getterFor("String Iterator");
	On(String, "String", (function(t) {
		Nn(this, {
			type: "String Iterator",
			string: pr(t),
			index: 0
		})
	}), (function() {
		var t, e = Wn(this),
			r = e.string,
			n = e.index;
		return n >= r.length ? {
			value: void 0,
			done: !0
		} : (t = Cn(r, n), e.index += t.length, {
			value: t,
			done: !1
		})
	}));
	var In = function(t, e, r) {
			for (var n in e) Ht(t, n, e[n], r);
			return t
		},
		Pn = o.Array,
		Bn = Math.max,
		Dn = Ze.f,
		Fn = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
		Vn = function(t) {
			try {
				return Dn(t)
			} catch (t) {
				return function(t, e, r) {
					for (var n, i, o, s, a = ve(t), c = qe(e, a), l = qe(void 0 === r ? a : r, a), u = Pn(Bn(l - c, 0)), f = 0; c < l; c++, f++) n = u, i = f, o = t[c], s = void 0, (s = vt(i)) in n ? mt.f(n, s, xt(0, o)) : n[s] = o;
					return u.length = f, u
				}(Fn)
			}
		},
		$n = {
			f: function(t) {
				return Fn && "Window" == Gt(t) ? Vn(t) : Dn(Fe(t))
			}
		},
		Xn = u((function() {
			if ("function" == typeof ArrayBuffer) {
				var t = new ArrayBuffer(8);
				Object.isExtensible(t) && Object.defineProperty(t, "a", {
					value: 8
				})
			}
		})),
		Hn = Object.isExtensible,
		qn = u((function() {
			Hn(1)
		})) || Xn ? function(t) {
			return !!q(t) && ((!Xn || "ArrayBuffer" != Gt(t)) && (!Hn || Hn(t)))
		} : Hn,
		Yn = !u((function() {
			return Object.isExtensible(Object.preventExtensions({}))
		})),
		Gn = e((function(t) {
			var e = mt.f,
				r = !1,
				n = k("meta"),
				i = 0,
				o = function(t) {
					e(t, n, {
						value: {
							objectID: "O" + i++,
							weakData: {}
						}
					})
				},
				s = t.exports = {
					enable: function() {
						s.enable = function() {}, r = !0;
						var t = Ze.f,
							e = g([].splice),
							i = {};
						i[n] = 1, t(i)
							.length && (Ze.f = function(r) {
								for (var i = t(r), o = 0, s = i.length; o < s; o++)
									if (i[o] === n) {
										e(i, o, 1);
										break
									} return i
							}, hr({
								target: "Object",
								stat: !0,
								forced: !0
							}, {
								getOwnPropertyNames: $n.f
							}))
					},
					fastKey: function(t, e) {
						if (!q(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
						if (!w(t, n)) {
							if (!qn(t)) return "F";
							if (!e) return "E";
							o(t)
						}
						return t[n].objectID
					},
					getWeakData: function(t, e) {
						if (!w(t, n)) {
							if (!qn(t)) return !0;
							if (!e) return !1;
							o(t)
						}
						return t[n].weakData
					},
					onFreeze: function(t) {
						return Yn && r && qn(t) && !w(t, n) && o(t), t
					}
				};
			Nt[n] = !0
		})),
		Un = (Gn.enable, Gn.fastKey, Gn.getWeakData, Gn.onFreeze, V("iterator")),
		Kn = Array.prototype,
		Jn = V("iterator"),
		Qn = function(t) {
			if (null != t) return ut(t, Jn) || ut(t, "@@iterator") || Zr[Qt(t)]
		},
		Zn = o.TypeError,
		ti = function(t, e, r) {
			var n, i;
			tt(t);
			try {
				if (!(n = ut(t, "return"))) {
					if ("throw" === e) throw r;
					return r
				}
				n = rt(n, t)
			} catch (t) {
				i = !0, n = t
			}
			if ("throw" === e) throw r;
			if (i) throw n;
			return tt(n), r
		},
		ei = o.TypeError,
		ri = function(t, e) {
			this.stopped = t, this.result = e
		},
		ni = ri.prototype,
		ii = function(t, e, r) {
			var n, i, o, s, a, c, l, u, f = r && r.that,
				h = !(!r || !r.AS_ENTRIES),
				d = !(!r || !r.IS_ITERATOR),
				p = !(!r || !r.INTERRUPTED),
				v = oe(e, f),
				g = function(t) {
					return n && ti(n, "normal", t), new ri(!0, t)
				},
				b = function(t) {
					return h ? (tt(t), p ? v(t[0], t[1], g) : v(t[0], t[1])) : p ? v(t, g) : v(t)
				};
			if (d) n = t;
			else {
				if (!(i = Qn(t))) throw ei(at(t) + " is not iterable");
				if (void 0 !== (u = i) && (Zr.Array === u || Kn[Un] === u)) {
					for (o = 0, s = ve(t); s > o; o++)
						if ((a = b(t[o])) && nt(ni, a)) return a;
					return new ri(!1)
				}
				n = function(t, e) {
					var r = arguments.length < 2 ? Qn(t) : e;
					if (lt(r)) return tt(rt(r, t));
					throw Zn(at(t) + " is not iterable")
				}(t, i)
			}
			for (c = n.next; !(l = rt(c, n))
				.done;) {
				try {
					a = b(l.value)
				} catch (t) {
					ti(n, "throw", t)
				}
				if ("object" == typeof a && a && nt(ni, a)) return a
			}
			return new ri(!1)
		},
		oi = o.TypeError,
		si = function(t, e) {
			if (nt(e, t)) return t;
			throw oi("Incorrect invocation")
		},
		ai = V("iterator"),
		ci = !1;
	try {
		var li = 0,
			ui = {
				next: function() {
					return {
						done: !!li++
					}
				},
				return: function() {
					ci = !0
				}
			};
		ui[ai] = function() {
			return this
		}, Array.from(ui, (function() {
			throw 2
		}))
	} catch (t) {}
	var fi = Gn.getWeakData,
		hi = $t.set,
		di = $t.getterFor,
		pi = je.find,
		vi = je.findIndex,
		gi = g([].splice),
		bi = 0,
		yi = function(t) {
			return t.frozen || (t.frozen = new mi)
		},
		mi = function() {
			this.entries = []
		},
		xi = function(t, e) {
			return pi(t.entries, (function(t) {
				return t[0] === e
			}))
		};
	mi.prototype = {
		get: function(t) {
			var e = xi(this, t);
			if (e) return e[1]
		},
		has: function(t) {
			return !!xi(this, t)
		},
		set: function(t, e) {
			var r = xi(this, t);
			r ? r[1] = e : this.entries.push([t, e])
		},
		delete: function(t) {
			var e = vi(this.entries, (function(e) {
				return e[0] === t
			}));
			return ~e && gi(this.entries, e, 1), !!~e
		}
	};
	var Ei, wi = {
			getConstructor: function(t, e, r, n) {
				var i = t((function(t, i) {
						si(t, o), hi(t, {
							type: e,
							id: bi++,
							frozen: void 0
						}), null != i && ii(i, t[n], {
							that: t,
							AS_ENTRIES: r
						})
					})),
					o = i.prototype,
					s = di(e),
					a = function(t, e, r) {
						var n = s(t),
							i = fi(tt(e), !0);
						return !0 === i ? yi(n)
							.set(e, r) : i[n.id] = r, t
					};
				return In(o, {
					delete: function(t) {
						var e = s(this);
						if (!q(t)) return !1;
						var r = fi(t);
						return !0 === r ? yi(e)
							.delete(t) : r && w(r, e.id) && delete r[e.id]
					},
					has: function(t) {
						var e = s(this);
						if (!q(t)) return !1;
						var r = fi(t);
						return !0 === r ? yi(e)
							.has(t) : r && w(r, e.id)
					}
				}), In(o, r ? {
					get: function(t) {
						var e = s(this);
						if (q(t)) {
							var r = fi(t);
							return !0 === r ? yi(e)
								.get(t) : r ? r[e.id] : void 0
						}
					},
					set: function(t, e) {
						return a(this, t, e)
					}
				} : {
					add: function(t) {
						return a(this, t, !0)
					}
				}), i
			}
		},
		Oi = $t.enforce,
		Si = !o.ActiveXObject && "ActiveXObject" in o,
		Ai = function(t) {
			return function() {
				return t(this, arguments.length ? arguments[0] : void 0)
			}
		},
		ki = function(t, e, r) {
			var n = -1 !== t.indexOf("Map"),
				i = -1 !== t.indexOf("Weak"),
				s = n ? "set" : "add",
				a = o[t],
				c = a && a.prototype,
				l = a,
				f = {},
				h = function(t) {
					var e = g(c[t]);
					Ht(c, t, "add" == t ? function(t) {
						return e(this, 0 === t ? 0 : t), this
					} : "delete" == t ? function(t) {
						return !(i && !q(t)) && e(this, 0 === t ? 0 : t)
					} : "get" == t ? function(t) {
						return i && !q(t) ? void 0 : e(this, 0 === t ? 0 : t)
					} : "has" == t ? function(t) {
						return !(i && !q(t)) && e(this, 0 === t ? 0 : t)
					} : function(t, r) {
						return e(this, 0 === t ? 0 : t, r), this
					})
				};
			if (ur(t, !T(a) || !(i || c.forEach && !u((function() {
				(new a)
				.entries()
					.next()
			}))))) l = r.getConstructor(e, t, n, s), Gn.enable();
			else if (ur(t, !0)) {
				var d = new l,
					p = d[s](i ? {} : -0, 1) != d,
					v = u((function() {
						d.has(1)
					})),
					b = function(t, e) {
						if (!e && !ci) return !1;
						var r = !1;
						try {
							var n = {};
							n[ai] = function() {
								return {
									next: function() {
										return {
											done: r = !0
										}
									}
								}
							}, t(n)
						} catch (t) {}
						return r
					}((function(t) {
						new a(t)
					})),
					y = !i && u((function() {
						for (var t = new a, e = 5; e--;) t[s](e, e);
						return !t.has(-0)
					}));
				b || ((l = e((function(t, e) {
						si(t, c);
						var r = function(t, e, r) {
							var n, i;
							return gn && T(n = e.constructor) && n !== r && q(i = n.prototype) && i !== r.prototype && gn(t, i), t
						}(new a, t, l);
						return null != e && ii(e, r[s], {
							that: r,
							AS_ENTRIES: n
						}), r
					})))
					.prototype = c, c.constructor = l), (v || y) && (h("delete"), h("has"), n && h("get")), (y || p) && h(s), i && c.clear && delete c.clear
			}
			return f[t] = l, hr({
				global: !0,
				constructor: !0,
				forced: l != a
			}, f), fn(l, t), i || r.setStrong(l, t, n), l
		}("WeakMap", Ai, wi);
	if (zt && Si) {
		Ei = wi.getConstructor(Ai, "WeakMap", !0), Gn.enable();
		var Ti = ki.prototype,
			Li = g(Ti.delete),
			Ri = g(Ti.has),
			_i = g(Ti.get),
			ji = g(Ti.set);
		In(Ti, {
			delete: function(t) {
				if (q(t) && !qn(t)) {
					var e = Oi(this);
					return e.frozen || (e.frozen = new Ei), Li(this, t) || e.frozen.delete(t)
				}
				return Li(this, t)
			},
			has: function(t) {
				if (q(t) && !qn(t)) {
					var e = Oi(this);
					return e.frozen || (e.frozen = new Ei), Ri(this, t) || e.frozen.has(t)
				}
				return Ri(this, t)
			},
			get: function(t) {
				if (q(t) && !qn(t)) {
					var e = Oi(this);
					return e.frozen || (e.frozen = new Ei), Ri(this, t) ? _i(this, t) : e.frozen.get(t)
				}
				return _i(this, t)
			},
			set: function(t, e) {
				if (q(t) && !qn(t)) {
					var r = Oi(this);
					r.frozen || (r.frozen = new Ei), Ri(this, t) ? ji(this, t, e) : r.frozen.set(t, e)
				} else ji(this, t, e);
				return this
			}
		})
	}
	var zi = V("iterator"),
		Mi = V("toStringTag"),
		Ci = Tn.values,
		Ni = function(t, e) {
			if (t) {
				if (t[zi] !== Ci) try {
					Et(t, zi, Ci)
				} catch (e) {
					t[zi] = Ci
				}
				if (t[Mi] || Et(t, Mi, e), te[e])
					for (var r in Tn)
						if (t[r] !== Tn[r]) try {
							Et(t, r, Tn[r])
						} catch (e) {
							t[r] = Tn[r]
						}
			}
		};
	for (var Wi in te) Ni(o[Wi] && o[Wi].prototype, Wi);
	Ni(ne, "DOMTokenList");
	var Ii = /^\s+|\s+$/g,
		Pi = /^[-+]0x[0-9a-f]+$/i,
		Bi = /^0b[01]+$/i,
		Di = /^0o[0-7]+$/i,
		Fi = parseInt,
		Vi = "object" == typeof t && t && t.Object === Object && t,
		$i = "object" == typeof self && self && self.Object === Object && self,
		Xi = Vi || $i || Function("return this")(),
		Hi = Object.prototype.toString,
		qi = Math.max,
		Yi = Math.min,
		Gi = function() {
			return Xi.Date.now()
		};

	function Ui(t, e, r) {
		var n, i, o, s, a, c, l = 0,
			u = !1,
			f = !1,
			h = !0;
		if ("function" != typeof t) throw new TypeError("Expected a function");

		function d(e) {
			var r = n,
				o = i;
			return n = i = void 0, l = e, s = t.apply(o, r)
		}

		function p(t) {
			return l = t, a = setTimeout(g, e), u ? d(t) : s
		}

		function v(t) {
			var r = t - c;
			return void 0 === c || r >= e || r < 0 || f && t - l >= o
		}

		function g() {
			var t = Gi();
			if (v(t)) return b(t);
			a = setTimeout(g, function(t) {
				var r = e - (t - c);
				return f ? Yi(r, o - (t - l)) : r
			}(t))
		}

		function b(t) {
			return a = void 0, h && n ? d(t) : (n = i = void 0, s)
		}

		function y() {
			var t = Gi(),
				r = v(t);
			if (n = arguments, i = this, c = t, r) {
				if (void 0 === a) return p(c);
				if (f) return a = setTimeout(g, e), d(c)
			}
			return void 0 === a && (a = setTimeout(g, e)), s
		}
		return e = Ji(e) || 0, Ki(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? qi(Ji(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function() {
			void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0
		}, y.flush = function() {
			return void 0 === a ? s : b(Gi())
		}, y
	}

	function Ki(t) {
		var e = typeof t;
		return !!t && ("object" == e || "function" == e)
	}

	function Ji(t) {
		if ("number" == typeof t) return t;
		if (function(t) {
			return "symbol" == typeof t || function(t) {
				return !!t && "object" == typeof t
			}(t) && "[object Symbol]" == Hi.call(t)
		}(t)) return NaN;
		if (Ki(t)) {
			var e = "function" == typeof t.valueOf ? t.valueOf() : t;
			t = Ki(e) ? e + "" : e
		}
		if ("string" != typeof t) return 0 === t ? t : +t;
		t = t.replace(Ii, "");
		var r = Bi.test(t);
		return r || Di.test(t) ? Fi(t.slice(2), r ? 2 : 8) : Pi.test(t) ? NaN : +t
	}
	var Qi = function(t, e, r) {
			var n = !0,
				i = !0;
			if ("function" != typeof t) throw new TypeError("Expected a function");
			return Ki(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), Ui(t, e, {
				leading: n,
				maxWait: e,
				trailing: i
			})
		},
		Zi = /^\s+|\s+$/g,
		to = /^[-+]0x[0-9a-f]+$/i,
		eo = /^0b[01]+$/i,
		ro = /^0o[0-7]+$/i,
		no = parseInt,
		io = "object" == typeof t && t && t.Object === Object && t,
		oo = "object" == typeof self && self && self.Object === Object && self,
		so = io || oo || Function("return this")(),
		ao = Object.prototype.toString,
		co = Math.max,
		lo = Math.min,
		uo = function() {
			return so.Date.now()
		};

	function fo(t) {
		var e = typeof t;
		return !!t && ("object" == e || "function" == e)
	}

	function ho(t) {
		if ("number" == typeof t) return t;
		if (function(t) {
			return "symbol" == typeof t || function(t) {
				return !!t && "object" == typeof t
			}(t) && "[object Symbol]" == ao.call(t)
		}(t)) return NaN;
		if (fo(t)) {
			var e = "function" == typeof t.valueOf ? t.valueOf() : t;
			t = fo(e) ? e + "" : e
		}
		if ("string" != typeof t) return 0 === t ? t : +t;
		t = t.replace(Zi, "");
		var r = eo.test(t);
		return r || ro.test(t) ? no(t.slice(2), r ? 2 : 8) : to.test(t) ? NaN : +t
	}
	var po = function(t, e, r) {
			var n, i, o, s, a, c, l = 0,
				u = !1,
				f = !1,
				h = !0;
			if ("function" != typeof t) throw new TypeError("Expected a function");

			function d(e) {
				var r = n,
					o = i;
				return n = i = void 0, l = e, s = t.apply(o, r)
			}

			function p(t) {
				return l = t, a = setTimeout(g, e), u ? d(t) : s
			}

			function v(t) {
				var r = t - c;
				return void 0 === c || r >= e || r < 0 || f && t - l >= o
			}

			function g() {
				var t = uo();
				if (v(t)) return b(t);
				a = setTimeout(g, function(t) {
					var r = e - (t - c);
					return f ? lo(r, o - (t - l)) : r
				}(t))
			}

			function b(t) {
				return a = void 0, h && n ? d(t) : (n = i = void 0, s)
			}

			function y() {
				var t = uo(),
					r = v(t);
				if (n = arguments, i = this, c = t, r) {
					if (void 0 === a) return p(c);
					if (f) return a = setTimeout(g, e), d(c)
				}
				return void 0 === a && (a = setTimeout(g, e)), s
			}
			return e = ho(e) || 0, fo(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? co(ho(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function() {
				void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0
			}, y.flush = function() {
				return void 0 === a ? s : b(uo())
			}, y
		},
		vo = /^\[object .+?Constructor\]$/,
		go = "object" == typeof t && t && t.Object === Object && t,
		bo = "object" == typeof self && self && self.Object === Object && self,
		yo = go || bo || Function("return this")();
	var mo = Array.prototype,
		xo = Function.prototype,
		Eo = Object.prototype,
		wo = yo["__core-js_shared__"],
		Oo = function() {
			var t = /[^.]+$/.exec(wo && wo.keys && wo.keys.IE_PROTO || "");
			return t ? "Symbol(src)_1." + t : ""
		}(),
		So = xo.toString,
		Ao = Eo.hasOwnProperty,
		ko = Eo.toString,
		To = RegExp("^" + So.call(Ao)
			.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
			.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
		Lo = mo.splice,
		Ro = Io(yo, "Map"),
		_o = Io(Object, "create");

	function jo(t) {
		var e = -1,
			r = t ? t.length : 0;
		for (this.clear(); ++e < r;) {
			var n = t[e];
			this.set(n[0], n[1])
		}
	}

	function zo(t) {
		var e = -1,
			r = t ? t.length : 0;
		for (this.clear(); ++e < r;) {
			var n = t[e];
			this.set(n[0], n[1])
		}
	}

	function Mo(t) {
		var e = -1,
			r = t ? t.length : 0;
		for (this.clear(); ++e < r;) {
			var n = t[e];
			this.set(n[0], n[1])
		}
	}

	function Co(t, e) {
		for (var r, n, i = t.length; i--;)
			if ((r = t[i][0]) === (n = e) || r != r && n != n) return i;
		return -1
	}

	function No(t) {
		return !(!Bo(t) || (e = t, Oo && Oo in e)) && (function(t) {
				var e = Bo(t) ? ko.call(t) : "";
				return "[object Function]" == e || "[object GeneratorFunction]" == e
			}(t) || function(t) {
				var e = !1;
				if (null != t && "function" != typeof t.toString) try {
					e = !!(t + "")
				} catch (t) {}
				return e
			}(t) ? To : vo)
			.test(function(t) {
				if (null != t) {
					try {
						return So.call(t)
					} catch (t) {}
					try {
						return t + ""
					} catch (t) {}
				}
				return ""
			}(t));
		var e
	}

	function Wo(t, e) {
		var r, n, i = t.__data__;
		return ("string" == (n = typeof(r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof e ? "string" : "hash"] : i.map
	}

	function Io(t, e) {
		var r = function(t, e) {
			return null == t ? void 0 : t[e]
		}(t, e);
		return No(r) ? r : void 0
	}

	function Po(t, e) {
		if ("function" != typeof t || e && "function" != typeof e) throw new TypeError("Expected a function");
		var r = function() {
			var n = arguments,
				i = e ? e.apply(this, n) : n[0],
				o = r.cache;
			if (o.has(i)) return o.get(i);
			var s = t.apply(this, n);
			return r.cache = o.set(i, s), s
		};
		return r.cache = new(Po.Cache || Mo), r
	}

	function Bo(t) {
		var e = typeof t;
		return !!t && ("object" == e || "function" == e)
	}
	jo.prototype.clear = function() {
		this.__data__ = _o ? _o(null) : {}
	}, jo.prototype.delete = function(t) {
		return this.has(t) && delete this.__data__[t]
	}, jo.prototype.get = function(t) {
		var e = this.__data__;
		if (_o) {
			var r = e[t];
			return "__lodash_hash_undefined__" === r ? void 0 : r
		}
		return Ao.call(e, t) ? e[t] : void 0
	}, jo.prototype.has = function(t) {
		var e = this.__data__;
		return _o ? void 0 !== e[t] : Ao.call(e, t)
	}, jo.prototype.set = function(t, e) {
		return this.__data__[t] = _o && void 0 === e ? "__lodash_hash_undefined__" : e, this
	}, zo.prototype.clear = function() {
		this.__data__ = []
	}, zo.prototype.delete = function(t) {
		var e = this.__data__,
			r = Co(e, t);
		return !(r < 0) && (r == e.length - 1 ? e.pop() : Lo.call(e, r, 1), !0)
	}, zo.prototype.get = function(t) {
		var e = this.__data__,
			r = Co(e, t);
		return r < 0 ? void 0 : e[r][1]
	}, zo.prototype.has = function(t) {
		return Co(this.__data__, t) > -1
	}, zo.prototype.set = function(t, e) {
		var r = this.__data__,
			n = Co(r, t);
		return n < 0 ? r.push([t, e]) : r[n][1] = e, this
	}, Mo.prototype.clear = function() {
		this.__data__ = {
			hash: new jo,
			map: new(Ro || zo),
			string: new jo
		}
	}, Mo.prototype.delete = function(t) {
		return Wo(this, t)
			.delete(t)
	}, Mo.prototype.get = function(t) {
		return Wo(this, t)
			.get(t)
	}, Mo.prototype.has = function(t) {
		return Wo(this, t)
			.has(t)
	}, Mo.prototype.set = function(t, e) {
		return Wo(this, t)
			.set(t, e), this
	}, Po.Cache = Mo;
	var Do, Fo = Po,
		Vo = [],
		$o = "ResizeObserver loop completed with undelivered notifications.";
	! function(t) {
		t.BORDER_BOX = "border-box", t.CONTENT_BOX = "content-box", t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
	}(Do || (Do = {}));
	var Xo, Ho = function(t) {
			return Object.freeze(t)
		},
		qo = function(t, e) {
			this.inlineSize = t, this.blockSize = e, Ho(this)
		},
		Yo = function() {
			function t(t, e, r, n) {
				return this.x = t, this.y = e, this.width = r, this.height = n, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Ho(this)
			}
			return t.prototype.toJSON = function() {
				var t = this;
				return {
					x: t.x,
					y: t.y,
					top: t.top,
					right: t.right,
					bottom: t.bottom,
					left: t.left,
					width: t.width,
					height: t.height
				}
			}, t.fromRect = function(e) {
				return new t(e.x, e.y, e.width, e.height)
			}, t
		}(),
		Go = function(t) {
			return t instanceof SVGElement && "getBBox" in t
		},
		Uo = function(t) {
			if (Go(t)) {
				var e = t.getBBox(),
					r = e.width,
					n = e.height;
				return !r && !n
			}
			var i = t,
				o = i.offsetWidth,
				s = i.offsetHeight;
			return !(o || s || t.getClientRects()
				.length)
		},
		Ko = function(t) {
			var e, r;
			if (t instanceof Element) return !0;
			var n = null === (r = null === (e = t) || void 0 === e ? void 0 : e.ownerDocument) || void 0 === r ? void 0 : r.defaultView;
			return !!(n && t instanceof n.Element)
		},
		Jo = "undefined" != typeof window ? window : {},
		Qo = new WeakMap,
		Zo = /auto|scroll/,
		ts = /^tb|vertical/,
		es = /msie|trident/i.test(Jo.navigator && Jo.navigator.userAgent),
		rs = function(t) {
			return parseFloat(t || "0")
		},
		ns = function(t, e, r) {
			return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = !1), new qo((r ? e : t) || 0, (r ? t : e) || 0)
		},
		is = Ho({
			devicePixelContentBoxSize: ns(),
			borderBoxSize: ns(),
			contentBoxSize: ns(),
			contentRect: new Yo(0, 0, 0, 0)
		}),
		os = function(t, e) {
			if (void 0 === e && (e = !1), Qo.has(t) && !e) return Qo.get(t);
			if (Uo(t)) return Qo.set(t, is), is;
			var r = getComputedStyle(t),
				n = Go(t) && t.ownerSVGElement && t.getBBox(),
				i = !es && "border-box" === r.boxSizing,
				o = ts.test(r.writingMode || ""),
				s = !n && Zo.test(r.overflowY || ""),
				a = !n && Zo.test(r.overflowX || ""),
				c = n ? 0 : rs(r.paddingTop),
				l = n ? 0 : rs(r.paddingRight),
				u = n ? 0 : rs(r.paddingBottom),
				f = n ? 0 : rs(r.paddingLeft),
				h = n ? 0 : rs(r.borderTopWidth),
				d = n ? 0 : rs(r.borderRightWidth),
				p = n ? 0 : rs(r.borderBottomWidth),
				v = f + l,
				g = c + u,
				b = (n ? 0 : rs(r.borderLeftWidth)) + d,
				y = h + p,
				m = a ? t.offsetHeight - y - t.clientHeight : 0,
				x = s ? t.offsetWidth - b - t.clientWidth : 0,
				E = i ? v + b : 0,
				w = i ? g + y : 0,
				O = n ? n.width : rs(r.width) - E - x,
				S = n ? n.height : rs(r.height) - w - m,
				A = O + v + x + b,
				k = S + g + m + y,
				T = Ho({
					devicePixelContentBoxSize: ns(Math.round(O * devicePixelRatio), Math.round(S * devicePixelRatio), o),
					borderBoxSize: ns(A, k, o),
					contentBoxSize: ns(O, S, o),
					contentRect: new Yo(f, c, O, S)
				});
			return Qo.set(t, T), T
		},
		ss = function(t, e, r) {
			var n = os(t, r),
				i = n.borderBoxSize,
				o = n.contentBoxSize,
				s = n.devicePixelContentBoxSize;
			switch (e) {
				case Do.DEVICE_PIXEL_CONTENT_BOX:
					return s;
				case Do.BORDER_BOX:
					return i;
				default:
					return o
			}
		},
		as = function(t) {
			var e = os(t);
			this.target = t, this.contentRect = e.contentRect, this.borderBoxSize = Ho([e.borderBoxSize]), this.contentBoxSize = Ho([e.contentBoxSize]), this.devicePixelContentBoxSize = Ho([e.devicePixelContentBoxSize])
		},
		cs = function(t) {
			if (Uo(t)) return 1 / 0;
			for (var e = 0, r = t.parentNode; r;) e += 1, r = r.parentNode;
			return e
		},
		ls = function() {
			var t = 1 / 0,
				e = [];
			Vo.forEach((function(r) {
				if (0 !== r.activeTargets.length) {
					var n = [];
					r.activeTargets.forEach((function(e) {
						var r = new as(e.target),
							i = cs(e.target);
						n.push(r), e.lastReportedSize = ss(e.target, e.observedBox), i < t && (t = i)
					})), e.push((function() {
						r.callback.call(r.observer, n, r.observer)
					})), r.activeTargets.splice(0, r.activeTargets.length)
				}
			}));
			for (var r = 0, n = e; r < n.length; r++) {
				(0, n[r])()
			}
			return t
		},
		us = function(t) {
			Vo.forEach((function(e) {
				e.activeTargets.splice(0, e.activeTargets.length), e.skippedTargets.splice(0, e.skippedTargets.length), e.observationTargets.forEach((function(r) {
					r.isActive() && (cs(r.target) > t ? e.activeTargets.push(r) : e.skippedTargets.push(r))
				}))
			}))
		},
		fs = function() {
			var t, e = 0;
			for (us(e); Vo.some((function(t) {
				return t.activeTargets.length > 0
			}));) e = ls(), us(e);
			return Vo.some((function(t) {
				return t.skippedTargets.length > 0
			})) && ("function" == typeof ErrorEvent ? t = new ErrorEvent("error", {
				message: $o
			}) : ((t = document.createEvent("Event"))
				.initEvent("error", !1, !1), t.message = $o), window.dispatchEvent(t)), e > 0
		},
		hs = [],
		ds = function(t) {
			if (!Xo) {
				var e = 0,
					r = document.createTextNode("");
				new MutationObserver((function() {
						return hs.splice(0)
							.forEach((function(t) {
								return t()
							}))
					}))
					.observe(r, {
						characterData: !0
					}), Xo = function() {
						r.textContent = "" + (e ? e-- : e++)
					}
			}
			hs.push(t), Xo()
		},
		ps = 0,
		vs = {
			attributes: !0,
			characterData: !0,
			childList: !0,
			subtree: !0
		},
		gs = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
		bs = function(t) {
			return void 0 === t && (t = 0), Date.now() + t
		},
		ys = !1,
		ms = new(function() {
			function t() {
				var t = this;
				this.stopped = !0, this.listener = function() {
					return t.schedule()
				}
			}
			return t.prototype.run = function(t) {
				var e = this;
				if (void 0 === t && (t = 250), !ys) {
					ys = !0;
					var r, n = bs(t);
					r = function() {
						var r = !1;
						try {
							r = fs()
						} finally {
							if (ys = !1, t = n - bs(), !ps) return;
							r ? e.run(1e3) : t > 0 ? e.run(t) : e.start()
						}
					}, ds((function() {
						requestAnimationFrame(r)
					}))
				}
			}, t.prototype.schedule = function() {
				this.stop(), this.run()
			}, t.prototype.observe = function() {
				var t = this,
					e = function() {
						return t.observer && t.observer.observe(document.body, vs)
					};
				document.body ? e() : Jo.addEventListener("DOMContentLoaded", e)
			}, t.prototype.start = function() {
				var t = this;
				this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), gs.forEach((function(e) {
					return Jo.addEventListener(e, t.listener, !0)
				})))
			}, t.prototype.stop = function() {
				var t = this;
				this.stopped || (this.observer && this.observer.disconnect(), gs.forEach((function(e) {
					return Jo.removeEventListener(e, t.listener, !0)
				})), this.stopped = !0)
			}, t
		}()),
		xs = function(t) {
			!ps && t > 0 && ms.start(), !(ps += t) && ms.stop()
		},
		Es = function() {
			function t(t, e) {
				this.target = t, this.observedBox = e || Do.CONTENT_BOX, this.lastReportedSize = {
					inlineSize: 0,
					blockSize: 0
				}
			}
			return t.prototype.isActive = function() {
				var t, e = ss(this.target, this.observedBox, !0);
				return t = this.target, Go(t) || function(t) {
						switch (t.tagName) {
							case "INPUT":
								if ("image" !== t.type) break;
							case "VIDEO":
							case "AUDIO":
							case "EMBED":
							case "OBJECT":
							case "CANVAS":
							case "IFRAME":
							case "IMG":
								return !0
						}
						return !1
					}(t) || "inline" !== getComputedStyle(t)
					.display || (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize
			}, t
		}(),
		ws = function(t, e) {
			this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = e
		},
		Os = new WeakMap,
		Ss = function(t, e) {
			for (var r = 0; r < t.length; r += 1)
				if (t[r].target === e) return r;
			return -1
		},
		As = function() {
			function t() {}
			return t.connect = function(t, e) {
				var r = new ws(t, e);
				Os.set(t, r)
			}, t.observe = function(t, e, r) {
				var n = Os.get(t),
					i = 0 === n.observationTargets.length;
				Ss(n.observationTargets, e) < 0 && (i && Vo.push(n), n.observationTargets.push(new Es(e, r && r.box)), xs(1), ms.schedule())
			}, t.unobserve = function(t, e) {
				var r = Os.get(t),
					n = Ss(r.observationTargets, e),
					i = 1 === r.observationTargets.length;
				n >= 0 && (i && Vo.splice(Vo.indexOf(r), 1), r.observationTargets.splice(n, 1), xs(-1))
			}, t.disconnect = function(t) {
				var e = this,
					r = Os.get(t);
				r.observationTargets.slice()
					.forEach((function(r) {
						return e.unobserve(t, r.target)
					})), r.activeTargets.splice(0, r.activeTargets.length)
			}, t
		}(),
		ks = function() {
			function t(t) {
				if (0 === arguments.length) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
				if ("function" != typeof t) throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
				As.connect(this, t)
			}
			return t.prototype.observe = function(t, e) {
				if (0 === arguments.length) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
				if (!Ko(t)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
				As.observe(this, t, e)
			}, t.prototype.unobserve = function(t) {
				if (0 === arguments.length) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
				if (!Ko(t)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
				As.unobserve(this, t)
			}, t.prototype.disconnect = function() {
				As.disconnect(this)
			}, t.toString = function() {
				return "function ResizeObserver () { [polyfill code] }"
			}, t
		}(),
		Ts = o.TypeError,
		Ls = function(t) {
			return function(e, r, n, i) {
				lt(r);
				var o = x(e),
					s = ce(o),
					a = ve(o),
					c = t ? a - 1 : 0,
					l = t ? -1 : 1;
				if (n < 2)
					for (;;) {
						if (c in s) {
							i = s[c], c += l;
							break
						}
						if (c += l, t ? c < 0 : a <= c) throw Ts("Reduce of empty array with no initial value")
					}
				for (; t ? c >= 0 : a > c; c += l) c in s && (i = r(i, s[c], c, o));
				return i
			}
		},
		Rs = {
			left: Ls(!1),
			right: Ls(!0)
		},
		_s = "process" == Gt(o.process),
		js = Rs.left,
		zs = ze("reduce");
	hr({
		target: "Array",
		proto: !0,
		forced: !zs || !_s && N > 79 && N < 83
	}, {
		reduce: function(t) {
			var e = arguments.length;
			return js(this, t, e, e > 1 ? arguments[1] : void 0)
		}
	});
	var Ms, Cs, Ns = function() {
			var t = tt(this),
				e = "";
			return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
		},
		Ws = o.RegExp,
		Is = u((function() {
			var t = Ws("a", "y");
			return t.lastIndex = 2, null != t.exec("abcd")
		})),
		Ps = Is || u((function() {
			return !Ws("a", "y")
				.sticky
		})),
		Bs = {
			BROKEN_CARET: Is || u((function() {
				var t = Ws("^r", "gy");
				return t.lastIndex = 2, null != t.exec("str")
			})),
			MISSED_STICKY: Ps,
			UNSUPPORTED_Y: Is
		},
		Ds = o.RegExp,
		Fs = u((function() {
			var t = Ds(".", "s");
			return !(t.dotAll && t.exec("\n") && "s" === t.flags)
		})),
		Vs = o.RegExp,
		$s = u((function() {
			var t = Vs("(?<a>b)", "g");
			return "b" !== t.exec("b")
				.groups.a || "bc" !== "b".replace(t, "$<a>c")
		})),
		Xs = $t.get,
		Hs = l("native-string-replace", String.prototype.replace),
		qs = RegExp.prototype.exec,
		Ys = qs,
		Gs = g("".charAt),
		Us = g("".indexOf),
		Ks = g("".replace),
		Js = g("".slice),
		Qs = (Cs = /b*/g, rt(qs, Ms = /a/, "a"), rt(qs, Cs, "a"), 0 !== Ms.lastIndex || 0 !== Cs.lastIndex),
		Zs = Bs.BROKEN_CARET,
		ta = void 0 !== /()??/.exec("")[1];
	(Qs || ta || Zs || Fs || $s) && (Ys = function(t) {
		var e, r, n, i, o, s, a, c = this,
			l = Xs(c),
			u = pr(t),
			f = l.raw;
		if (f) return f.lastIndex = c.lastIndex, e = rt(Ys, f, u), c.lastIndex = f.lastIndex, e;
		var h = l.groups,
			d = Zs && c.sticky,
			p = rt(Ns, c),
			v = c.source,
			g = 0,
			b = u;
		if (d && (p = Ks(p, "y", ""), -1 === Us(p, "g") && (p += "g"), b = Js(u, c.lastIndex), c.lastIndex > 0 && (!c.multiline || c.multiline && "\n" !== Gs(u, c.lastIndex - 1)) && (v = "(?: " + v + ")", b = " " + b, g++), r = new RegExp("^(?:" + v + ")", p)), ta && (r = new RegExp("^" + v + "$(?!\\s)", p)), Qs && (n = c.lastIndex), i = rt(qs, d ? r : c, b), d ? i ? (i.input = Js(i.input, g), i[0] = Js(i[0], g), i.index = c.lastIndex, c.lastIndex += i[0].length) : c.lastIndex = 0 : Qs && i && (c.lastIndex = c.global ? i.index + i[0].length : n), ta && i && i.length > 1 && rt(Hs, i[0], r, (function() {
			for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (i[o] = void 0)
		})), i && h)
			for (i.groups = s = Hr(null), o = 0; o < h.length; o++) s[(a = h[o])[0]] = i[a[1]];
		return i
	});
	var ea = Ys;
	hr({
		target: "RegExp",
		proto: !0,
		forced: /./.exec !== ea
	}, {
		exec: ea
	});
	var ra = V("species"),
		na = RegExp.prototype,
		ia = function(t, e, r, n) {
			var i = V(t),
				o = !u((function() {
					var e = {};
					return e[i] = function() {
						return 7
					}, 7 != "" [t](e)
				})),
				s = o && !u((function() {
					var e = !1,
						r = /a/;
					return "split" === t && ((r = {})
						.constructor = {}, r.constructor[ra] = function() {
							return r
						}, r.flags = "", r[i] = /./ [i]), r.exec = function() {
						return e = !0, null
					}, r[i](""), !e
				}));
			if (!o || !s || r) {
				var a = g(/./ [i]),
					c = e(i, "" [t], (function(t, e, r, n, i) {
						var s = g(t),
							c = e.exec;
						return c === ea || c === na.exec ? o && !i ? {
							done: !0,
							value: a(e, r, n)
						} : {
							done: !0,
							value: s(r, e, n)
						} : {
							done: !1
						}
					}));
				Ht(String.prototype, t, c[0]), Ht(na, i, c[1])
			}
			n && Et(na[i], "sham", !0)
		},
		oa = Mn.charAt,
		sa = function(t, e, r) {
			return e + (r ? oa(t, e)
				.length : 1)
		},
		aa = o.TypeError,
		ca = function(t, e) {
			var r = t.exec;
			if (T(r)) {
				var n = rt(r, t, e);
				return null !== n && tt(n), n
			}
			if ("RegExp" === Gt(t)) return rt(ea, t, e);
			throw aa("RegExp#exec called on incompatible receiver")
		};
	ia("match", (function(t, e, r) {
		return [function(e) {
			var r = y(this),
				n = null == e ? void 0 : ut(e, t);
			return n ? rt(n, e, r) : new RegExp(e)[t](pr(r))
		}, function(t) {
			var n = tt(this),
				i = pr(t),
				o = r(e, n, i);
			if (o.done) return o.value;
			if (!n.global) return ca(n, i);
			var s = n.unicode;
			n.lastIndex = 0;
			for (var a, c = [], l = 0; null !== (a = ca(n, i));) {
				var u = pr(a[0]);
				c[l] = u, "" === u && (n.lastIndex = sa(i, pe(n.lastIndex), s)), l++
			}
			return 0 === l ? null : c
		}]
	}));
	var la = At.EXISTS,
		ua = mt.f,
		fa = Function.prototype,
		ha = g(fa.toString),
		da = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
		pa = g(da.exec);
	H && !la && ua(fa, "name", {
		configurable: !0,
		get: function() {
			try {
				return pa(da, ha(this))[1]
			} catch (t) {
				return ""
			}
		}
	});
	var va = Function.prototype,
		ga = va.apply,
		ba = va.call,
		ya = "object" == typeof Reflect && Reflect.apply || (f ? ba.bind(ga) : function() {
			return ba.apply(ga, arguments)
		}),
		ma = Math.floor,
		xa = g("".charAt),
		Ea = g("".replace),
		wa = g("".slice),
		Oa = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
		Sa = /\$([$&'`]|\d{1,2})/g,
		Aa = function(t, e, r, n, i, o) {
			var s = r + t.length,
				a = n.length,
				c = Sa;
			return void 0 !== i && (i = x(i), c = Oa), Ea(o, c, (function(o, c) {
				var l;
				switch (xa(c, 0)) {
					case "$":
						return "$";
					case "&":
						return t;
					case "`":
						return wa(e, 0, r);
					case "'":
						return wa(e, s);
					case "<":
						l = i[wa(c, 1, -1)];
						break;
					default:
						var u = +c;
						if (0 === u) return o;
						if (u > a) {
							var f = ma(u / 10);
							return 0 === f ? o : f <= a ? void 0 === n[f - 1] ? xa(c, 1) : n[f - 1] + xa(c, 1) : o
						}
						l = n[u - 1]
				}
				return void 0 === l ? "" : l
			}))
		},
		ka = V("replace"),
		Ta = Math.max,
		La = Math.min,
		Ra = g([].concat),
		_a = g([].push),
		ja = g("".indexOf),
		za = g("".slice),
		Ma = "$0" === "a".replace(/./, "$0"),
		Ca = !!/./ [ka] && "" === /./ [ka]("a", "$0");
	ia("replace", (function(t, e, r) {
		var n = Ca ? "$" : "$0";
		return [function(t, r) {
			var n = y(this),
				i = null == t ? void 0 : ut(t, ka);
			return i ? rt(i, t, n, r) : rt(e, pr(n), t, r)
		}, function(t, i) {
			var o = tt(this),
				s = pr(t);
			if ("string" == typeof i && -1 === ja(i, n) && -1 === ja(i, "$<")) {
				var a = r(e, o, s, i);
				if (a.done) return a.value
			}
			var c = T(i);
			c || (i = pr(i));
			var l = o.global;
			if (l) {
				var u = o.unicode;
				o.lastIndex = 0
			}
			for (var f = [];;) {
				var h = ca(o, s);
				if (null === h) break;
				if (_a(f, h), !l) break;
				"" === pr(h[0]) && (o.lastIndex = sa(s, pe(o.lastIndex), u))
			}
			for (var d, p = "", v = 0, g = 0; g < f.length; g++) {
				for (var b = pr((h = f[g])[0]), y = Ta(La(he(h.index), s.length), 0), m = [], x = 1; x < h.length; x++) _a(m, void 0 === (d = h[x]) ? d : String(d));
				var E = h.groups;
				if (c) {
					var w = Ra([b], m, y, s);
					void 0 !== E && _a(w, E);
					var O = pr(ya(i, void 0, w))
				} else O = Aa(b, s, y, m, E, i);
				y >= v && (p += za(s, v, y) + O, v = y + b.length)
			}
			return p + za(s, v)
		}]
	}), !!u((function() {
		var t = /./;
		return t.exec = function() {
			var t = [];
			return t.groups = {
				a: "7"
			}, t
		}, "7" !== "".replace(t, "$<a>")
	})) || !Ma || Ca);
	var Na = function(t) {
		return Array.prototype.reduce.call(t, (function(t, e) {
			var r = e.name.match(/data-simplebar-(.+)/);
			if (r) {
				var n = r[1].replace(/\W+(.)/g, (function(t, e) {
					return e.toUpperCase()
				}));
				switch (e.value) {
					case "true":
						t[n] = !0;
						break;
					case "false":
						t[n] = !1;
						break;
					case void 0:
						t[n] = !0;
						break;
					default:
						t[n] = e.value
				}
			}
			return t
		}), {})
	};

	function Wa(t) {
		return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window
	}

	function Ia(t) {
		return t && t.ownerDocument ? t.ownerDocument : document
	}
	var Pa = null,
		Ba = null;

	function Da(t) {
		if (null === Pa) {
			var e = Ia(t);
			if (void 0 === e) return Pa = 0;
			var r = e.body,
				n = e.createElement("div");
			n.classList.add("simplebar-hide-scrollbar"), r.appendChild(n);
			var i = n.getBoundingClientRect()
				.right;
			r.removeChild(n), Pa = i
		}
		return Pa
	}
	Ie && window.addEventListener("resize", (function() {
		Ba !== window.devicePixelRatio && (Ba = window.devicePixelRatio, Pa = null)
	}));
	var Fa = function() {
		function t(e, r) {
			var n = this;
			this.onScroll = function() {
				var t = Wa(n.el);
				n.scrollXTicking || (t.requestAnimationFrame(n.scrollX), n.scrollXTicking = !0), n.scrollYTicking || (t.requestAnimationFrame(n.scrollY), n.scrollYTicking = !0)
			}, this.scrollX = function() {
				n.axis.x.isOverflowing && (n.showScrollbar("x"), n.positionScrollbar("x")), n.scrollXTicking = !1
			}, this.scrollY = function() {
				n.axis.y.isOverflowing && (n.showScrollbar("y"), n.positionScrollbar("y")), n.scrollYTicking = !1
			}, this.onMouseEnter = function() {
				n.showScrollbar("x"), n.showScrollbar("y")
			}, this.onMouseMove = function(t) {
				n.mouseX = t.clientX, n.mouseY = t.clientY, (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseMoveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseMoveForAxis("y")
			}, this.onMouseLeave = function() {
				n.onMouseMove.cancel(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseLeaveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseLeaveForAxis("y"), n.mouseX = -1, n.mouseY = -1
			}, this.onWindowResize = function() {
				n.scrollbarWidth = n.getScrollbarWidth(), n.hideNativeScrollbar()
			}, this.hideScrollbars = function() {
				n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.track.rect) || (n.axis.y.scrollbar.el.classList.remove(n.classNames.visible), n.axis.y.isVisible = !1), n.isWithinBounds(n.axis.x.track.rect) || (n.axis.x.scrollbar.el.classList.remove(n.classNames.visible), n.axis.x.isVisible = !1)
			}, this.onPointerEvent = function(t) {
				var e, r;
				n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && (e = n.isWithinBounds(n.axis.x.track.rect)), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && (r = n.isWithinBounds(n.axis.y.track.rect)), (e || r) && (t.preventDefault(), t.stopPropagation(), "mousedown" === t.type && (e && (n.axis.x.scrollbar.rect = n.axis.x.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.x.scrollbar.rect) ? n.onDragStart(t, "x") : n.onTrackClick(t, "x")), r && (n.axis.y.scrollbar.rect = n.axis.y.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.scrollbar.rect) ? n.onDragStart(t, "y") : n.onTrackClick(t, "y"))))
			}, this.drag = function(e) {
				var r = n.axis[n.draggedAxis].track,
					i = r.rect[n.axis[n.draggedAxis].sizeAttr],
					o = n.axis[n.draggedAxis].scrollbar,
					s = n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr],
					a = parseInt(n.elStyles[n.axis[n.draggedAxis].sizeAttr], 10);
				e.preventDefault(), e.stopPropagation();
				var c = (("y" === n.draggedAxis ? e.pageY : e.pageX) - r.rect[n.axis[n.draggedAxis].offsetAttr] - n.axis[n.draggedAxis].dragOffset) / (i - o.size) * (s - a);
				"x" === n.draggedAxis && (c = n.isRtl && t.getRtlHelpers()
					.isRtlScrollbarInverted ? c - (i + o.size) : c, c = n.isRtl && t.getRtlHelpers()
					.isRtlScrollingInverted ? -c : c), n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = c
			}, this.onEndDrag = function(t) {
				var e = Ia(n.el),
					r = Wa(n.el);
				t.preventDefault(), t.stopPropagation(), n.el.classList.remove(n.classNames.dragging), e.removeEventListener("mousemove", n.drag, !0), e.removeEventListener("mouseup", n.onEndDrag, !0), n.removePreventClickId = r.setTimeout((function() {
					e.removeEventListener("click", n.preventClick, !0), e.removeEventListener("dblclick", n.preventClick, !0), n.removePreventClickId = null
				}))
			}, this.preventClick = function(t) {
				t.preventDefault(), t.stopPropagation()
			}, this.el = e, this.minScrollbarWidth = 20, this.options = Object.assign({}, t.defaultOptions, r), this.classNames = Object.assign({}, t.defaultOptions.classNames, this.options.classNames), this.axis = {
				x: {
					scrollOffsetAttr: "scrollLeft",
					sizeAttr: "width",
					scrollSizeAttr: "scrollWidth",
					offsetSizeAttr: "offsetWidth",
					offsetAttr: "left",
					overflowAttr: "overflowX",
					dragOffset: 0,
					isOverflowing: !0,
					isVisible: !1,
					forceVisible: !1,
					track: {},
					scrollbar: {}
				},
				y: {
					scrollOffsetAttr: "scrollTop",
					sizeAttr: "height",
					scrollSizeAttr: "scrollHeight",
					offsetSizeAttr: "offsetHeight",
					offsetAttr: "top",
					overflowAttr: "overflowY",
					dragOffset: 0,
					isOverflowing: !0,
					isVisible: !1,
					forceVisible: !1,
					track: {},
					scrollbar: {}
				}
			}, this.removePreventClickId = null, t.instances.has(this.el) || (this.recalculate = Qi(this.recalculate.bind(this), 64), this.onMouseMove = Qi(this.onMouseMove.bind(this), 64), this.hideScrollbars = po(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = po(this.onWindowResize.bind(this), 64, {
				leading: !0
			}), t.getRtlHelpers = Fo(t.getRtlHelpers), this.init())
		}
		t.getRtlHelpers = function() {
			var e = document.createElement("div");
			e.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
			var r = e.firstElementChild;
			document.body.appendChild(r);
			var n = r.firstElementChild;
			r.scrollLeft = 0;
			var i = t.getOffset(r),
				o = t.getOffset(n);
			r.scrollLeft = 999;
			var s = t.getOffset(n);
			return {
				isRtlScrollingInverted: i.left !== o.left && o.left - s.left != 0,
				isRtlScrollbarInverted: i.left !== o.left
			}
		}, t.getOffset = function(t) {
			var e = t.getBoundingClientRect(),
				r = Ia(t),
				n = Wa(t);
			return {
				top: e.top + (n.pageYOffset || r.documentElement.scrollTop),
				left: e.left + (n.pageXOffset || r.documentElement.scrollLeft)
			}
		};
		var e = t.prototype;
		return e.init = function() {
			t.instances.set(this.el, this), Ie && (this.initDOM(), this.setAccessibilityAttributes(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners())
		}, e.initDOM = function() {
			var t = this;
			if (Array.prototype.filter.call(this.el.children, (function(e) {
					return e.classList.contains(t.classNames.wrapper)
				}))
				.length) this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper), this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl), this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
			else {
				for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
				this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl)
			}
			if (!this.axis.x.track.el || !this.axis.y.track.el) {
				var e = document.createElement("div"),
					r = document.createElement("div");
				e.classList.add(this.classNames.track), r.classList.add(this.classNames.scrollbar), e.appendChild(r), this.axis.x.track.el = e.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = e.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el)
			}
			this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar), this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)), this.el.setAttribute("data-simplebar", "init")
		}, e.setAccessibilityAttributes = function() {
			var t = this.options.ariaLabel || "scrollable content";
			this.contentWrapperEl.setAttribute("tabindex", "0"), this.contentWrapperEl.setAttribute("role", "region"), this.contentWrapperEl.setAttribute("aria-label", t)
		}, e.initListeners = function() {
			var t = this,
				e = Wa(this.el);
			this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function(e) {
				t.el.addEventListener(e, t.onPointerEvent, !0)
			})), ["touchstart", "touchend", "touchmove"].forEach((function(e) {
				t.el.addEventListener(e, t.onPointerEvent, {
					capture: !0,
					passive: !0
				})
			})), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.addEventListener("scroll", this.onScroll), e.addEventListener("resize", this.onWindowResize);
			var r = !1,
				n = e.ResizeObserver || ks;
			this.resizeObserver = new n((function() {
				r && t.recalculate()
			})), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), e.requestAnimationFrame((function() {
				r = !0
			})), this.mutationObserver = new e.MutationObserver(this.recalculate), this.mutationObserver.observe(this.contentEl, {
				childList: !0,
				subtree: !0,
				characterData: !0
			})
		}, e.recalculate = function() {
			var t = Wa(this.el);
			this.elStyles = t.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction;
			var e = this.heightAutoObserverEl.offsetHeight <= 1,
				r = this.heightAutoObserverEl.offsetWidth <= 1,
				n = this.contentEl.offsetWidth,
				i = this.contentWrapperEl.offsetWidth,
				o = this.elStyles.overflowX,
				s = this.elStyles.overflowY;
			this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft, this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
			var a = this.contentEl.scrollHeight,
				c = this.contentEl.scrollWidth;
			this.contentWrapperEl.style.height = e ? "auto" : "100%", this.placeholderEl.style.width = r ? n + "px" : "auto", this.placeholderEl.style.height = a + "px";
			var l = this.contentWrapperEl.offsetHeight;
			this.axis.x.isOverflowing = c > n, this.axis.y.isOverflowing = a > l, this.axis.x.isOverflowing = "hidden" !== o && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== s && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar();
			var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
				f = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
			this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > i - f, this.axis.y.isOverflowing = this.axis.y.isOverflowing && a > l - u, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px", this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px", this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y")
		}, e.getScrollbarSize = function(t) {
			if (void 0 === t && (t = "y"), !this.axis[t].isOverflowing) return 0;
			var e, r = this.contentEl[this.axis[t].scrollSizeAttr],
				n = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
				i = n / r;
			return e = Math.max(~~(i * n), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (e = Math.min(e, this.options.scrollbarMaxSize)), e
		}, e.positionScrollbar = function(e) {
			if (void 0 === e && (e = "y"), this.axis[e].isOverflowing) {
				var r = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
					n = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
					i = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
					o = this.axis[e].scrollbar,
					s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
					a = (s = "x" === e && this.isRtl && t.getRtlHelpers()
						.isRtlScrollingInverted ? -s : s) / (r - i),
					c = ~~((n - o.size) * a);
				c = "x" === e && this.isRtl && t.getRtlHelpers()
					.isRtlScrollbarInverted ? c + (n - o.size) : c, o.el.style.transform = "x" === e ? "translate3d(" + c + "px, 0, 0)" : "translate3d(0, " + c + "px, 0)"
			}
		}, e.toggleTrackVisibility = function(t) {
			void 0 === t && (t = "y");
			var e = this.axis[t].track.el,
				r = this.axis[t].scrollbar.el;
			this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll") : (e.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden"), this.axis[t].isOverflowing ? r.style.display = "block" : r.style.display = "none"
		}, e.hideNativeScrollbar = function() {
			this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0
		}, e.onMouseMoveForAxis = function(t) {
			void 0 === t && (t = "y"), this.axis[t].track.rect = this.axis[t].track.el.getBoundingClientRect(), this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[t].scrollbar.rect) ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[t].track.rect) ? (this.showScrollbar(t), this.axis[t].track.el.classList.add(this.classNames.hover)) : this.axis[t].track.el.classList.remove(this.classNames.hover)
		}, e.onMouseLeaveForAxis = function(t) {
			void 0 === t && (t = "y"), this.axis[t].track.el.classList.remove(this.classNames.hover), this.axis[t].scrollbar.el.classList.remove(this.classNames.hover)
		}, e.showScrollbar = function(t) {
			void 0 === t && (t = "y");
			var e = this.axis[t].scrollbar.el;
			this.axis[t].isVisible || (e.classList.add(this.classNames.visible), this.axis[t].isVisible = !0), this.options.autoHide && this.hideScrollbars()
		}, e.onDragStart = function(t, e) {
			void 0 === e && (e = "y");
			var r = Ia(this.el),
				n = Wa(this.el),
				i = this.axis[e].scrollbar,
				o = "y" === e ? t.pageY : t.pageX;
			this.axis[e].dragOffset = o - i.rect[this.axis[e].offsetAttr], this.draggedAxis = e, this.el.classList.add(this.classNames.dragging), r.addEventListener("mousemove", this.drag, !0), r.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (r.addEventListener("click", this.preventClick, !0), r.addEventListener("dblclick", this.preventClick, !0)) : (n.clearTimeout(this.removePreventClickId), this.removePreventClickId = null)
		}, e.onTrackClick = function(t, e) {
			var r = this;
			if (void 0 === e && (e = "y"), this.options.clickOnTrack) {
				var n = Wa(this.el);
				this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect();
				var i = this.axis[e].scrollbar.rect[this.axis[e].offsetAttr],
					o = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
					s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
					a = ("y" === e ? this.mouseY - i : this.mouseX - i) < 0 ? -1 : 1,
					c = -1 === a ? s - o : s + o;
				! function t() {
					var i, o; - 1 === a ? s > c && (s -= r.options.clickOnTrackSpeed, r.contentWrapperEl.scrollTo(((i = {})[r.axis[e].offsetAttr] = s, i)), n.requestAnimationFrame(t)) : s < c && (s += r.options.clickOnTrackSpeed, r.contentWrapperEl.scrollTo(((o = {})[r.axis[e].offsetAttr] = s, o)), n.requestAnimationFrame(t))
				}()
			}
		}, e.getContentElement = function() {
			return this.contentEl
		}, e.getScrollElement = function() {
			return this.contentWrapperEl
		}, e.getScrollbarWidth = function() {
			try {
				return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
					.display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : Da(this.el)
			} catch (t) {
				return Da(this.el)
			}
		}, e.removeListeners = function() {
			var t = this,
				e = Wa(this.el);
			this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function(e) {
				t.el.removeEventListener(e, t.onPointerEvent, !0)
			})), ["touchstart", "touchend", "touchmove"].forEach((function(e) {
				t.el.removeEventListener(e, t.onPointerEvent, {
					capture: !0,
					passive: !0
				})
			})), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel()
		}, e.unMount = function() {
			this.removeListeners(), t.instances.delete(this.el)
		}, e.isWithinBounds = function(t) {
			return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height
		}, e.findChild = function(t, e) {
			var r = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
			return Array.prototype.filter.call(t.children, (function(t) {
				return r.call(t, e)
			}))[0]
		}, t
	}();
	return Fa.defaultOptions = {
		autoHide: !0,
		forceVisible: !1,
		clickOnTrack: !0,
		clickOnTrackSpeed: 40,
		classNames: {
			contentEl: "simplebar-content",
			contentWrapper: "simplebar-content-wrapper",
			offset: "simplebar-offset",
			mask: "simplebar-mask",
			wrapper: "simplebar-wrapper",
			placeholder: "simplebar-placeholder",
			scrollbar: "simplebar-scrollbar",
			track: "simplebar-track",
			heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
			heightAutoObserverEl: "simplebar-height-auto-observer",
			visible: "simplebar-visible",
			horizontal: "simplebar-horizontal",
			vertical: "simplebar-vertical",
			hover: "simplebar-hover",
			dragging: "simplebar-dragging"
		},
		scrollbarMinSize: 25,
		scrollbarMaxSize: 0,
		timeout: 1e3
	}, Fa.instances = new WeakMap, Fa.initDOMLoadedElements = function() {
		document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), (function(t) {
			"init" === t.getAttribute("data-simplebar") || Fa.instances.has(t) || new Fa(t, Na(t.attributes))
		}))
	}, Fa.removeObserver = function() {
		this.globalObserver.disconnect()
	}, Fa.initHtmlApi = function() {
		this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(Fa.handleMutations), this.globalObserver.observe(document, {
			childList: !0,
			subtree: !0
		})), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements))
	}, Fa.handleMutations = function(t) {
		t.forEach((function(t) {
			Array.prototype.forEach.call(t.addedNodes, (function(t) {
				1 === t.nodeType && (t.hasAttribute("data-simplebar") ? !Fa.instances.has(t) && document.documentElement.contains(t) && new Fa(t, Na(t.attributes)) : Array.prototype.forEach.call(t.querySelectorAll("[data-simplebar]"), (function(t) {
					"init" !== t.getAttribute("data-simplebar") && !Fa.instances.has(t) && document.documentElement.contains(t) && new Fa(t, Na(t.attributes))
				})))
			})), Array.prototype.forEach.call(t.removedNodes, (function(t) {
				1 === t.nodeType && ("init" === t.getAttribute("data-simplebar") ? Fa.instances.has(t) && !document.documentElement.contains(t) && Fa.instances.get(t)
					.unMount() : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'), (function(t) {
						Fa.instances.has(t) && !document.documentElement.contains(t) && Fa.instances.get(t)
							.unMount()
					})))
			}))
		}))
	}, Fa.getOptions = Na, Ie && Fa.initHtmlApi(), Fa
}));