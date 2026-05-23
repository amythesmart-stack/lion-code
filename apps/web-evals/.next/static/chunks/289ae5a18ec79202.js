;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	72998,
	(e, r, t) => {
		"use strict"
		Object.defineProperty(t, "__esModule", { value: !0 }),
			Object.defineProperty(t, "warnOnce", {
				enumerable: !0,
				get: function () {
					return a
				},
			})
		let a = (e) => {}
	},
	72714,
	(e) => {
		"use strict"
		let r = (0, e.i(13699).default)("file-text", [
			["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
			["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
			["path", { d: "M10 9H8", key: "b1mrlr" }],
			["path", { d: "M16 13H8", key: "t4e002" }],
			["path", { d: "M16 17H8", key: "z1uh3a" }],
		])
		e.s(["FileText", () => r], 72714)
	},
	62929,
	(e) => {
		"use strict"
		let r = (0, e.i(13699).default)("layers", [
			[
				"path",
				{
					d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
					key: "zw3jo",
				},
			],
			["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12", key: "1wduqc" }],
			["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17", key: "kqbvx6" }],
		])
		e.s(["Layers", () => r], 62929)
	},
	35200,
	(e) => {
		"use strict"
		let r = (0, e.i(13699).default)("list", [
			["path", { d: "M3 12h.01", key: "nlz23k" }],
			["path", { d: "M3 18h.01", key: "1tta3j" }],
			["path", { d: "M3 6h.01", key: "1rqtza" }],
			["path", { d: "M8 12h13", key: "1za7za" }],
			["path", { d: "M8 18h13", key: "1lx6n3" }],
			["path", { d: "M8 6h13", key: "ik3vkj" }],
		])
		e.s(["List", () => r], 35200)
	},
	52677,
	(e) => {
		"use strict"
		let r = (0, e.i(13699).default)("loader-circle", [
			["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
		])
		e.s(["LoaderCircle", () => r], 52677)
	},
	83452,
	(e) => {
		"use strict"
		let r = (0, e.i(13699).default)("copy", [
			["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
			["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }],
		])
		e.s(["Copy", () => r], 83452)
	},
	61278,
	(e) => {
		"use strict"
		let r = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
		e.s([
			"formatCurrency",
			0,
			(e) => r.format(e),
			"formatDateTime",
			0,
			(e) =>
				new Intl.DateTimeFormat("en-US", {
					month: "short",
					day: "numeric",
					hour: "numeric",
					minute: "2-digit",
					hour12: !0,
				}).format(e),
			"formatDuration",
			0,
			(e) => {
				let r = Math.floor(e / 1e3),
					t = Math.floor(r / 3600),
					a = Math.floor((r % 3600) / 60)
						.toString()
						.padStart(2, "0"),
					i = (r % 60).toString().padStart(2, "0")
				return `${t}:${a}:${i}`
			},
			"formatTokens",
			0,
			(e) => {
				if (e < 1e3) return e.toString()
				if (e < 1e6) {
					let r = Math.round(e / 1e3)
					return r >= 1e3 ? "1.0M" : `${r}k`
				}
				if (e < 1e9) {
					let r = Math.round(e / 1e5) / 10
					return r >= 1e3 ? "1.0B" : `${r.toFixed(1)}M`
				}
				return `${(e / 1e9).toFixed(1)}B`
			},
			"formatToolUsageSuccessRate",
			0,
			(e) => (0 === e.attempts ? "0%" : `${Math.round(((e.attempts - e.failures) / e.attempts) * 100)}%`),
		])
	},
	57392,
	(e) => {
		"use strict"
		var r = e.i(6609)
		e.s(["X", () => r.default])
	},
	80757,
	(e, r, t) => {
		"use strict"
		Object.defineProperty(t, "__esModule", { value: !0 })
		var a = {
			callServer: function () {
				return n.callServer
			},
			createServerReference: function () {
				return o.createServerReference
			},
			findSourceMapURL: function () {
				return s.findSourceMapURL
			},
		}
		for (var i in a) Object.defineProperty(t, i, { enumerable: !0, get: a[i] })
		let n = e.r(49412),
			s = e.r(504),
			o = e.r(87362)
	},
	16464,
	67346,
	(e) => {
		"use strict"
		var r = e.i(8026),
			t = e.i(16853),
			a = e.i(94237),
			i = e.i(46030)
		let n = (0, a.cva)(
			"inline-flex items-center justify-center rounded-sm border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
			{
				variants: {
					variant: {
						default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
						secondary:
							"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
						destructive:
							"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/70",
						outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
					},
				},
				defaultVariants: { variant: "default" },
			},
		)
		function s({ className: e, variant: a, asChild: s = !1, ...o }) {
			let l = s ? t.Slot : "span"
			return (0, r.jsx)(l, { "data-slot": "badge", className: (0, i.cn)(n({ variant: a }), e), ...o })
		}
		function o({ className: e, type: t, ...a }) {
			return (0, r.jsx)("input", {
				type: t,
				"data-slot": "input",
				className: (0, i.cn)(
					"file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-sm px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
					"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
					"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
					"border border-input bg-input",
					e,
				),
				...a,
			})
		}
		e.s(["Badge", () => s], 16464), e.s(["Input", () => o], 67346)
	},
	99171,
	(e, r, t) => {
		;((t, a) => {
			if ("function" == typeof define && define.amd) {
				let r
				void 0 !== (r = a()) && e.v(r)
			} else r.exports ? (r.exports = a()) : (t.fuzzysort = a())
		})(e.e, (e) => {
			"use strict"
			var r,
				t,
				a,
				i,
				n = (e) => {
					"number" == typeof e ? (e = "" + e) : "string" != typeof e && (e = "")
					var r = x(e)
					return l(e, { _targetLower: r._lower, _targetLowerCodes: r.lowerCodes, _bitflags: r.bitflags })
				}
			class s {
				get indexes() {
					return this._indexes.slice(0, this._indexes.len).sort((e, r) => e - r)
				}
				set indexes(e) {
					return (this._indexes = e)
				}
				highlight(e, r) {
					return ((e, r = "<b>", t = "</b>") => {
						for (
							var a = "function" == typeof r ? r : void 0,
								i = e.target,
								n = i.length,
								s = e.indexes,
								o = "",
								l = 0,
								c = 0,
								d = !1,
								u = [],
								f = 0;
							f < n;
							++f
						) {
							var v = i[f]
							if (s[c] === f) {
								if ((++c, d || ((d = !0), a ? (u.push(o), (o = "")) : (o += r)), c === s.length)) {
									a
										? ((o += v), u.push(a(o, l++)), (o = ""), u.push(i.substr(f + 1)))
										: (o += v + t + i.substr(f + 1))
									break
								}
							} else d && ((d = !1), a ? (u.push(a(o, l++)), (o = "")) : (o += t))
							o += v
						}
						return a ? u : o
					})(this, e, r)
				}
				get score() {
					return c(this._score)
				}
				set score(e) {
					this._score = d(e)
				}
			}
			class o extends Array {
				get score() {
					return c(this._score)
				}
				set score(e) {
					this._score = d(e)
				}
			}
			var l = (e, r) => {
					let t = new s()
					return (
						(t.target = e),
						(t.obj = r.obj ?? T),
						(t._score = r._score ?? B),
						(t._indexes = r._indexes ?? []),
						(t._targetLower = r._targetLower ?? ""),
						(t._targetLowerCodes = r._targetLowerCodes ?? T),
						(t._nextBeginningIndexes = r._nextBeginningIndexes ?? T),
						(t._bitflags = r._bitflags ?? 0),
						t
					)
				},
				c = (e) => (e === B ? 0 : e > 1 ? e : Math.E ** -(((-e + 1) ** 0.04307 - 1) * 2)),
				d = (e) => (0 === e ? B : e > 1 ? e : 1 - Math.pow(-(Math.log(e) / 2) + 1, 1 / 0.04307)),
				u = (e) => {
					"number" == typeof e ? (e = "" + e) : "string" != typeof e && (e = "")
					var r = x((e = e.trim())),
						t = []
					if (r.containsSpace) {
						var a = e.split(/\s+/)
						a = [...new Set(a)]
						for (var i = 0; i < a.length; i++)
							if ("" !== a[i]) {
								var n = x(a[i])
								t.push({ lowerCodes: n.lowerCodes, _lower: a[i].toLowerCase(), containsSpace: !1 })
							}
					}
					return {
						lowerCodes: r.lowerCodes,
						_lower: r._lower,
						containsSpace: r.containsSpace,
						bitflags: r.bitflags,
						spaceSearches: t,
					}
				},
				f = (e) => {
					if (e.length > 999) return n(e)
					var r = m.get(e)
					return void 0 !== r || ((r = n(e)), m.set(e, r)), r
				},
				v = (e) => {
					if (e.length > 999) return u(e)
					var r = y.get(e)
					return void 0 !== r || ((r = u(e)), y.set(e, r)), r
				},
				g = (e, r, t = !1, a = !1) => {
					if (!1 === t && e.containsSpace) return h(e, r, a)
					for (
						var i = e._lower,
							n = e.lowerCodes,
							o = n[0],
							l = r._targetLowerCodes,
							c = n.length,
							d = l.length,
							u = 0,
							f = 0,
							v = 0;
						;

					) {
						var g = o === l[f]
						if (g) {
							if (((_[v++] = f), ++u === c)) break
							o = n[u]
						}
						if (++f >= d) return T
					}
					var u = 0,
						p = !1,
						x = 0,
						m = r._nextBeginningIndexes
					m === T && (m = r._nextBeginningIndexes = b(r.target))
					var y = 0
					if ((f = 0 === _[0] ? 0 : m[_[0] - 1]) !== d)
						for (;;)
							if (f >= d) {
								if (u <= 0 || ++y > 200) break
								--u, (f = m[k[--x]])
							} else {
								var g = n[u] === l[f]
								if (g) {
									if (((k[x++] = f), ++u === c)) {
										p = !0
										break
									}
									++f
								} else f = m[f]
							}
					var w = c <= 1 ? -1 : r._targetLower.indexOf(i, _[0]),
						j = !!~w,
						M = !!j && (0 === w || r._nextBeginningIndexes[w - 1] === w)
					if (j && !M) {
						for (var S = 0; S < m.length; S = m[S])
							if (!(S <= w)) {
								for (var C = 0; C < c && n[C] === r._targetLowerCodes[S + C]; C++);
								if (C === c) {
									;(w = S), (M = !0)
									break
								}
							}
					}
					var N = (e) => {
						for (var r = 0, t = 0, a = 1; a < c; ++a) e[a] - e[a - 1] != 1 && ((r -= e[a]), ++t)
						if (
							((r -= (12 + (e[c - 1] - e[0] - (c - 1))) * t), 0 !== e[0] && (r -= e[0] * e[0] * 0.2), p)
						) {
							for (var i = 1, a = m[0]; a < d; a = m[a]) ++i
							i > 24 && (r *= (i - 24) * 10)
						} else r *= 1e3
						return (
							(r -= (d - c) / 2), j && (r /= 1 + c * c * 1), M && (r /= 1 + c * c * 1), (r -= (d - c) / 2)
						)
					}
					if (p)
						if (M) {
							for (var S = 0; S < c; ++S) _[S] = w + S
							var z = _,
								L = N(_)
						} else
							var z = k,
								L = N(k)
					else {
						if (j) for (var S = 0; S < c; ++S) _[S] = w + S
						var z = _,
							L = N(z)
					}
					r._score = L
					for (var S = 0; S < c; ++S) r._indexes[S] = z[S]
					r._indexes.len = c
					let B = new s()
					return (B.target = r.target), (B._score = r._score), (B._indexes = r._indexes), B
				},
				h = (e, r, t) => {
					for (
						var a = new Set(),
							i = 0,
							n = T,
							s = 0,
							o = e.spaceSearches,
							l = o.length,
							c = 0,
							d = () => {
								for (let e = c - 1; e >= 0; e--) r._nextBeginningIndexes[w[2 * e + 0]] = w[2 * e + 1]
							},
							u = !1,
							f = 0;
						f < l;
						++f
					) {
						if (((M[f] = B), (n = g(o[f], r)), t)) {
							if (n === T) continue
							u = !0
						} else if (n === T) return d(), T
						if (f !== l - 1) {
							var v = n._indexes,
								h = !0
							for (let e = 0; e < v.len - 1; e++)
								if (v[e + 1] - v[e] != 1) {
									h = !1
									break
								}
							if (h) {
								var p = v[v.len - 1] + 1,
									x = r._nextBeginningIndexes[p - 1]
								for (let e = p - 1; e >= 0 && x === r._nextBeginningIndexes[e]; e--)
									(r._nextBeginningIndexes[e] = p), (w[2 * c + 0] = e), (w[2 * c + 1] = x), c++
							}
						}
						;(i += n._score / l),
							(M[f] = n._score / l),
							n._indexes[0] < s && (i -= (s - n._indexes[0]) * 2),
							(s = n._indexes[0])
						for (var b = 0; b < n._indexes.len; ++b) a.add(n._indexes[b])
					}
					if (t && !u) return T
					d()
					var m = g(e, r, !0)
					if (m !== T && m._score > i) {
						if (t) for (var f = 0; f < l; ++f) M[f] = m._score / l
						return m
					}
					t && (n = r), (n._score = i)
					var f = 0
					for (let e of a) n._indexes[f++] = e
					return (n._indexes.len = f), n
				},
				p = (e) => e.replace(/\p{Script=Latin}+/gu, (e) => e.normalize("NFD")).replace(/[\u0300-\u036f]/g, ""),
				x = (e) => {
					for (var r = (e = p(e)).length, t = e.toLowerCase(), a = [], i = 0, n = !1, s = 0; s < r; ++s) {
						var o = (a[s] = t.charCodeAt(s))
						if (32 === o) {
							n = !0
							continue
						}
						i |= 1 << (o >= 97 && o <= 122 ? o - 97 : o >= 48 && o <= 57 ? 26 : o <= 127 ? 30 : 31)
					}
					return { lowerCodes: a, bitflags: i, containsSpace: n, _lower: t }
				},
				b = (e) => {
					for (
						var r = (e = p(e)).length,
							t = ((e) => {
								for (var r = e.length, t = [], a = 0, i = !1, n = !1, s = 0; s < r; ++s) {
									var o = e.charCodeAt(s),
										l = o >= 65 && o <= 90,
										c = l || (o >= 97 && o <= 122) || (o >= 48 && o <= 57),
										d = (l && !i) || !n || !c
									;(i = l), (n = c), d && (t[a++] = s)
								}
								return t
							})(e),
							a = [],
							i = t[0],
							n = 0,
							s = 0;
						s < r;
						++s
					)
						i > s ? (a[s] = i) : ((i = t[++n]), (a[s] = void 0 === i ? r : i))
					return a
				},
				m = new Map(),
				y = new Map(),
				_ = [],
				k = [],
				w = [],
				j = [],
				M = [],
				S = [],
				C = [],
				N = (e, r) => {
					var t = e[r]
					if (void 0 !== t) return t
					if ("function" == typeof r) return r(e)
					var a = r
					Array.isArray(r) || (a = r.split("."))
					for (var i = a.length, n = -1; e && ++n < i; ) e = e[a[n]]
					return e
				},
				z = (e) => "object" == typeof e && "number" == typeof e._bitflags,
				L = 1 / 0,
				B = -1 / 0,
				I = []
			I.total = 0
			var T = null,
				A = n(""),
				P =
					((r = []),
					(t = 0),
					(a = {}),
					(i = (e) => {
						for (var a = 0, i = r[a], n = 1; n < t; ) {
							var s = n + 1
							;(a = n),
								s < t && r[s]._score < r[n]._score && (a = s),
								(r[(a - 1) >> 1] = r[a]),
								(n = 1 + (a << 1))
						}
						for (var o = (a - 1) >> 1; a > 0 && i._score < r[o]._score; o = ((a = o) - 1) >> 1) r[a] = r[o]
						r[a] = i
					}),
					(a.add = (e) => {
						var a = t
						r[t++] = e
						for (var i = (a - 1) >> 1; a > 0 && e._score < r[i]._score; i = ((a = i) - 1) >> 1) r[a] = r[i]
						r[a] = e
					}),
					(a.poll = (e) => {
						if (0 !== t) {
							var a = r[0]
							return (r[0] = r[--t]), i(), a
						}
					}),
					(a.peek = (e) => {
						if (0 !== t) return r[0]
					}),
					(a.replaceTop = (e) => {
						;(r[0] = e), i()
					}),
					a)
			return {
				single: (e, r) => {
					if (!e || !r) return T
					var t = v(e)
					z(r) || (r = f(r))
					var a = t.bitflags
					return (a & r._bitflags) !== a ? T : g(t, r)
				},
				go: (e, r, t) => {
					if (!e)
						return t?.all
							? ((e, r) => {
									var t = []
									t.total = e.length
									var a = r?.limit || L
									if (r?.key)
										for (var i = 0; i < e.length; i++) {
											var n = e[i],
												s = N(n, r.key)
											if (s != T) {
												z(s) || (s = f(s))
												var c = l(s.target, { _score: s._score, obj: n })
												if ((t.push(c), t.length >= a)) break
											}
										}
									else if (r?.keys)
										for (var i = 0; i < e.length; i++) {
											for (
												var n = e[i], d = new o(r.keys.length), u = r.keys.length - 1;
												u >= 0;
												--u
											) {
												var s = N(n, r.keys[u])
												if (!s) {
													d[u] = A
													continue
												}
												z(s) || (s = f(s)), (s._score = B), (s._indexes.len = 0), (d[u] = s)
											}
											if (((d.obj = n), (d._score = B), t.push(d), t.length >= a)) break
										}
									else
										for (var i = 0; i < e.length; i++) {
											var s = e[i]
											if (
												s != T &&
												(z(s) || (s = f(s)),
												(s._score = B),
												(s._indexes.len = 0),
												t.push(s),
												t.length >= a)
											)
												break
										}
									return t
								})(r, t)
							: I
					var a = v(e),
						i = a.bitflags,
						n = a.containsSpace,
						s = d(t?.threshold || 0),
						c = t?.limit || L,
						u = 0,
						h = 0,
						p = r.length
					function x(e) {
						u < c ? (P.add(e), ++u) : (++h, e._score > P.peek()._score && P.replaceTop(e))
					}
					if (t?.key)
						for (var b = t.key, m = 0; m < p; ++m) {
							var y = r[m],
								_ = N(y, b)
							if (_ && (z(_) || (_ = f(_)), (i & _._bitflags) === i)) {
								var k = g(a, _)
								k !== T && (k._score < s || ((k.obj = y), x(k)))
							}
						}
					else if (t?.keys) {
						var w = t.keys,
							R = w.length
						e: for (var m = 0; m < p; ++m) {
							for (var y = r[m], U = 0, D = 0; D < R; ++D) {
								var b = w[D],
									_ = N(y, b)
								if (!_) {
									S[D] = A
									continue
								}
								z(_) || (_ = f(_)), (S[D] = _), (U |= _._bitflags)
							}
							if ((i & U) === i) {
								if (n) for (let e = 0; e < a.spaceSearches.length; e++) j[e] = B
								for (var D = 0; D < R; ++D) {
									if ((_ = S[D]) === A || ((C[D] = g(a, _, !1, n)), C[D] === T)) {
										C[D] = A
										continue
									}
									if (n)
										for (let e = 0; e < a.spaceSearches.length; e++) {
											if (M[e] > -1e3 && j[e] > B) {
												var O = (j[e] + M[e]) / 4
												O > j[e] && (j[e] = O)
											}
											M[e] > j[e] && (j[e] = M[e])
										}
								}
								if (n) {
									for (let e = 0; e < a.spaceSearches.length; e++) if (j[e] === B) continue e
								} else {
									var F = !1
									for (let e = 0; e < R; e++)
										if (C[e]._score !== B) {
											F = !0
											break
										}
									if (!F) continue
								}
								var $ = new o(R)
								for (let e = 0; e < R; e++) $[e] = C[e]
								if (n) {
									var q = 0
									for (let e = 0; e < a.spaceSearches.length; e++) q += j[e]
								} else {
									var q = B
									for (let e = 0; e < R; e++) {
										var k = $[e]
										if (k._score > -1e3 && q > B) {
											var O = (q + k._score) / 4
											O > q && (q = O)
										}
										k._score > q && (q = k._score)
									}
								}
								if ((($.obj = y), ($._score = q), t?.scoreFn)) {
									if (!(q = t.scoreFn($))) continue
									$._score = q = d(q)
								}
								q < s || x($)
							}
						}
					} else
						for (var m = 0; m < p; ++m) {
							var _ = r[m]
							if (_ && (z(_) || (_ = f(_)), (i & _._bitflags) === i)) {
								var k = g(a, _)
								k !== T && (k._score < s || x(k))
							}
						}
					if (0 === u) return I
					for (var H = Array(u), m = u - 1; m >= 0; --m) H[m] = P.poll()
					return (H.total = u + h), H
				},
				prepare: n,
				cleanup: () => {
					m.clear(), y.clear()
				},
			}
		})
	},
	68418,
	(e) => {
		"use strict"
		let r = (0, e.i(13699).default)("chevrons-up-down", [
			["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
			["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }],
		])
		e.s(["ChevronsUpDown", () => r], 68418)
	},
	72666,
	44501,
	47110,
	(e) => {
		"use strict"
		e.i(46748)
		var r = e.i(16464)
		e.i(71330), e.i(60251)
		var t = e.i(62785)
		e.i(72583), e.i(52661), e.i(710), e.i(7675), e.i(67346), e.i(64514)
		var a = e.i(8026),
			i = e.i(10008),
			n = e.i(94237),
			s = e.i(99171),
			o = e.i(74310),
			l = e.i(57392),
			c = e.i(68418),
			d = e.i(46030),
			u = e.i(91376)
		let f = (0, n.cva)("px-2 py-1", {
				variants: {
					variant: {
						default: "border-foreground/10 text-foreground bg-card hover:bg-card/80",
						secondary: "border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80",
						destructive:
							"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
						inverted: "bg-background",
					},
				},
				defaultVariants: { variant: "default" },
			}),
			v = i.forwardRef(
				(
					{
						options: e,
						onValueChange: n,
						variant: v,
						value: g,
						defaultValue: h = [],
						placeholder: p = "Select options",
						maxCount: x = 3,
						modalPopover: b = !1,
						popoverAutoWidth: m = !1,
						footer: y,
						className: _,
						...k
					},
					w,
				) => {
					let [j, M] = i.useState(h),
						[S, C] = i.useState(!1),
						N = void 0 !== g,
						z = N ? g : j,
						L = i.useCallback(
							(e) => {
								N || M(e), n(e)
							},
							[N, n],
						),
						B = (e) => {
							L(z.includes(e) ? z.filter((r) => r !== e) : [...z, e])
						},
						I = i.useRef(new Map()),
						T = i.useRef(""),
						A = i.useCallback(
							(r, t) => {
								if (T.current !== t)
									for (let {
										obj: { value: r },
										score: a,
									} of ((T.current = t), I.current.clear(), s.default.go(t, e, { key: "label" })))
										I.current.set(r, a)
								return "all" === r ? 0.01 * (I.current.size > 1) : (I.current.get(r) ?? 0)
							},
							[e],
						)
					return (0, a.jsxs)(u.Popover, {
						open: S,
						onOpenChange: C,
						modal: b,
						children: [
							(0, a.jsx)(u.PopoverTrigger, {
								asChild: !0,
								children: (0, a.jsx)("div", {
									ref: w,
									...k,
									onClick: () => {
										C((e) => !e)
									},
									className: (0, d.cn)(
										"flex w-full rounded-sm min-h-9 h-auto items-center justify-between [&_svg]:pointer-events-auto",
										"font-medium border border-input bg-input hover:opacity-80 cursor-pointer",
										_,
									),
									children:
										z.length > 0
											? (0, a.jsx)("div", {
													className: "flex justify-between items-center w-full",
													children: (0, a.jsxs)("div", {
														className: "flex flex-wrap items-center gap-1 p-1",
														children: [
															z.slice(0, x).map((t) =>
																(0, a.jsx)(
																	r.Badge,
																	{
																		className: (0, d.cn)(f({ variant: v })),
																		children: (0, a.jsxs)("div", {
																			className: "flex items-center gap-1.5",
																			children: [
																				(0, a.jsx)("div", {
																					children: e.find(
																						(e) => e.value === t,
																					)?.label,
																				}),
																				(0, a.jsx)("div", {
																					onClick: (e) => {
																						e.stopPropagation(), B(t)
																					},
																					className: "cursor-pointer",
																					children: (0, a.jsx)(l.X, {
																						className:
																							"size-4 rounded-full p-0.5 bg-accent/5",
																					}),
																				}),
																			],
																		}),
																	},
																	t,
																),
															),
															z.length > x &&
																(0, a.jsx)(r.Badge, {
																	className: (0, d.cn)(
																		"text-ring",
																		f({ variant: v }),
																	),
																	children: (0, a.jsxs)("div", {
																		className: "flex items-center gap-1.5",
																		children: [
																			(0, a.jsx)("div", {
																				children: `+ ${z.length - x} more`,
																			}),
																			(0, a.jsx)("div", {
																				onClick: (e) => {
																					e.stopPropagation(),
																						L(z.slice(0, x))
																				},
																				className: "cursor-pointer",
																				children: (0, a.jsx)(l.X, {
																					className:
																						"size-4 rounded-full p-0.5 bg-ring/5",
																				}),
																			}),
																		],
																	}),
																}),
														],
													}),
												})
											: (0, a.jsxs)("div", {
													className: "flex items-center justify-between w-full mx-auto",
													children: [
														(0, a.jsx)("span", {
															className: "text-muted-foreground mx-3",
															children: p,
														}),
														(0, a.jsx)(c.ChevronsUpDown, {
															className: "opacity-50 size-4 mx-2",
														}),
													],
												}),
								}),
							}),
							(0, a.jsxs)(u.PopoverContent, {
								className: (0, d.cn)("p-0", m ? "w-auto" : "w-[var(--radix-popover-trigger-width)]"),
								align: "start",
								onEscapeKeyDown: () => C(!1),
								children: [
									(0, a.jsxs)(t.Command, {
										filter: A,
										children: [
											(0, a.jsx)(t.CommandInput, {
												placeholder: "Search",
												onKeyDown: (e) => {
													if ("Enter" === e.key) C(!0)
													else if ("Backspace" === e.key && !e.currentTarget.value) {
														if (!z.length) return
														L(z.slice(0, -1))
													}
												},
											}),
											(0, a.jsxs)(t.CommandList, {
												children: [
													(0, a.jsx)(t.CommandEmpty, { children: "No results found." }),
													(0, a.jsxs)(t.CommandGroup, {
														children: [
															e.map((e) =>
																(0, a.jsxs)(
																	t.CommandItem,
																	{
																		value: e.value,
																		onSelect: () => B(e.value),
																		className: "flex items-center justify-between",
																		children: [
																			(0, a.jsx)("span", { children: e.label }),
																			(0, a.jsx)(o.Check, {
																				className: (0, d.cn)(
																					"text-accent group-data-[selected=true]:text-accent-foreground size-4",
																					{
																						"opacity-0": !z.includes(
																							e.value,
																						),
																					},
																				),
																			}),
																		],
																	},
																	e.value,
																),
															),
															(0, a.jsx)(
																t.CommandItem,
																{
																	value: "all",
																	onSelect: () => {
																		let e = Array.from(I.current.keys())
																		z.length === e.length &&
																		z.sort().join(",") === e.sort().join(",")
																			? L([])
																			: L(e)
																	},
																	className: "flex items-center justify-between",
																	children: (0, a.jsx)("span", {
																		children: "Select All",
																	}),
																},
																"all",
															),
														],
													}),
												],
											}),
										],
									}),
									y && (0, a.jsx)("div", { className: "border-t p-2", children: y }),
								],
							}),
						],
					})
				},
			)
		function g({ className: e, ...r }) {
			return (0, a.jsx)("textarea", {
				"data-slot": "textarea",
				className: (0, d.cn)(
					"placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-sm px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
					"border border-input bg-input",
					e,
				),
				...r,
			})
		}
		;(v.displayName = "MultiSelect"),
			e.s(["MultiSelect", 0, v], 44501),
			e.i(92817),
			e.i(83694),
			e.i(66781),
			e.i(9486),
			e.i(81186),
			e.i(77853),
			e.i(94725),
			e.s(["Textarea", () => g], 47110),
			e.i(23706),
			e.s([], 72666)
	},
	94206,
	(e) => {
		"use strict"
		let r = (0, e.i(13699).default)("plus", [
			["path", { d: "M5 12h14", key: "1ays0h" }],
			["path", { d: "M12 5v14", key: "s699le" }],
		])
		e.s(["Plus", () => r], 94206)
	},
	15801,
	(e) => {
		"use strict"
		let r = (0, e.i(13699).default)("rocket", [
			[
				"path",
				{
					d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
					key: "m3kijz",
				},
			],
			[
				"path",
				{
					d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
					key: "1fmvmk",
				},
			],
			["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
			["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
		])
		e.s(["Rocket", () => r], 15801)
	},
	93897,
	(e) => {
		"use strict"
		let r = (0, e.i(13699).default)("terminal", [
			["path", { d: "M12 19h8", key: "baeox8" }],
			["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }],
		])
		e.s(["Terminal", () => r], 93897)
	},
])
