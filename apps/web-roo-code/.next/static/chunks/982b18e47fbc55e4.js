;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	1163,
	(t, e, r) => {
		var n = Math.ceil,
			i = Math.max
		e.exports = function (t, e, r, o) {
			for (var a = -1, u = i(n((e - t) / (r || 1)), 0), c = Array(u); u--; ) (c[o ? u : ++a] = t), (t += r)
			return c
		}
	},
	89781,
	(t, e, r) => {
		var n = t.r(94370),
			i = 1 / 0
		e.exports = function (t) {
			return t
				? (t = n(t)) === i || t === -i
					? (t < 0 ? -1 : 1) * 17976931348623157e292
					: t == t
						? t
						: 0
				: 0 === t
					? t
					: 0
		}
	},
	6246,
	(t, e, r) => {
		var n = t.r(1163),
			i = t.r(16110),
			o = t.r(89781)
		e.exports = function (t) {
			return function (e, r, a) {
				return (
					a && "number" != typeof a && i(e, r, a) && (r = a = void 0),
					(e = o(e)),
					void 0 === r ? ((r = e), (e = 0)) : (r = o(r)),
					(a = void 0 === a ? (e < r ? 1 : -1) : o(a)),
					n(e, r, a, t)
				)
			}
		}
	},
	8284,
	(t, e, r) => {
		e.exports = t.r(6246)()
	},
	35305,
	(t, e, r) => {
		"use strict"
		e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
	},
	61227,
	(t, e, r) => {
		"use strict"
		var n = t.r(35305)
		function i() {}
		function o() {}
		;(o.resetWarningCache = i),
			(e.exports = function () {
				function t(t, e, r, i, o, a) {
					if (a !== n) {
						var u = Error(
							"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
						)
						throw ((u.name = "Invariant Violation"), u)
					}
				}
				function e() {
					return t
				}
				t.isRequired = t
				var r = {
					array: t,
					bigint: t,
					bool: t,
					func: t,
					number: t,
					object: t,
					string: t,
					symbol: t,
					any: t,
					arrayOf: e,
					element: t,
					elementType: t,
					instanceOf: e,
					node: t,
					objectOf: e,
					oneOf: e,
					oneOfType: e,
					shape: e,
					exact: e,
					checkPropTypes: o,
					resetWarningCache: i,
				}
				return (r.PropTypes = r), r
			})
	},
	4153,
	(t, e, r) => {
		e.exports = t.r(61227)()
	},
	59318,
	(t, e, r) => {
		var n = t.r(48664)
		e.exports = function (t, e, r) {
			for (var i = -1, o = t.length; ++i < o; ) {
				var a = t[i],
					u = e(a)
				if (null != u && (void 0 === c ? u == u && !n(u) : r(u, c)))
					var c = u,
						l = a
			}
			return l
		}
	},
	80393,
	(t, e, r) => {
		e.exports = function (t, e) {
			return t > e
		}
	},
	87768,
	(t, e, r) => {
		var n = t.r(59318),
			i = t.r(80393),
			o = t.r(13870)
		e.exports = function (t) {
			return t && t.length ? n(t, o, i) : void 0
		}
	},
	89286,
	(t, e, r) => {
		e.exports = function (t, e) {
			return t < e
		}
	},
	19017,
	(t, e, r) => {
		var n = t.r(59318),
			i = t.r(89286),
			o = t.r(13870)
		e.exports = function (t) {
			return t && t.length ? n(t, o, i) : void 0
		}
	},
	85773,
	(t, e, r) => {
		var n = t.r(66536),
			i = t.r(57529),
			o = t.r(92255),
			a = t.r(72098)
		e.exports = function (t, e) {
			return (a(t) ? n : o)(t, i(e, 3))
		}
	},
	97917,
	(t, e, r) => {
		var n = t.r(77735),
			i = t.r(85773)
		e.exports = function (t, e) {
			return n(i(t, e), 1)
		}
	},
	40455,
	(t, e, r) => {
		var n = t.r(33698)
		e.exports = function (t, e) {
			return n(t, e)
		}
	},
	60600,
	(t, e, r) => {
		!(function (r) {
			"use strict"
			var n,
				i = {
					precision: 20,
					rounding: 4,
					toExpNeg: -7,
					toExpPos: 21,
					LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
				},
				o = !0,
				a = "[DecimalError] ",
				u = a + "Invalid argument: ",
				c = a + "Exponent out of range: ",
				l = Math.floor,
				s = Math.pow,
				f = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
				p = l(1286742750677284.5),
				d = {}
			function h(t, e) {
				var r,
					n,
					i,
					a,
					u,
					c,
					l,
					s,
					f = t.constructor,
					p = f.precision
				if (!t.s || !e.s) return e.s || (e = new f(t)), o ? j(e, p) : e
				if (((l = t.d), (s = e.d), (u = t.e), (i = e.e), (l = l.slice()), (a = u - i))) {
					for (
						a < 0 ? ((n = l), (a = -a), (c = s.length)) : ((n = s), (i = u), (c = l.length)),
							a > (c = (u = Math.ceil(p / 7)) > c ? u + 1 : c + 1) && ((a = c), (n.length = 1)),
							n.reverse();
						a--;

					)
						n.push(0)
					n.reverse()
				}
				for ((c = l.length) - (a = s.length) < 0 && ((a = c), (n = s), (s = l), (l = n)), r = 0; a; )
					(r = ((l[--a] = l[a] + s[a] + r) / 1e7) | 0), (l[a] %= 1e7)
				for (r && (l.unshift(r), ++i), c = l.length; 0 == l[--c]; ) l.pop()
				return (e.d = l), (e.e = i), o ? j(e, p) : e
			}
			function y(t, e, r) {
				if (t !== ~~t || t < e || t > r) throw Error(u + t)
			}
			function v(t) {
				var e,
					r,
					n,
					i = t.length - 1,
					o = "",
					a = t[0]
				if (i > 0) {
					for (o += a, e = 1; e < i; e++) (r = 7 - (n = t[e] + "").length) && (o += O(r)), (o += n)
					;(r = 7 - (n = (a = t[e]) + "").length) && (o += O(r))
				} else if (0 === a) return "0"
				for (; a % 10 == 0; ) a /= 10
				return o + a
			}
			;(d.absoluteValue = d.abs =
				function () {
					var t = new this.constructor(this)
					return t.s && (t.s = 1), t
				}),
				(d.comparedTo = d.cmp =
					function (t) {
						var e, r, n, i
						if (((t = new this.constructor(t)), this.s !== t.s)) return this.s || -t.s
						if (this.e !== t.e) return (this.e > t.e) ^ (this.s < 0) ? 1 : -1
						for (e = 0, r = (n = this.d.length) < (i = t.d.length) ? n : i; e < r; ++e)
							if (this.d[e] !== t.d[e]) return (this.d[e] > t.d[e]) ^ (this.s < 0) ? 1 : -1
						return n === i ? 0 : (n > i) ^ (this.s < 0) ? 1 : -1
					}),
				(d.decimalPlaces = d.dp =
					function () {
						var t = this.d.length - 1,
							e = (t - this.e) * 7
						if ((t = this.d[t])) for (; t % 10 == 0; t /= 10) e--
						return e < 0 ? 0 : e
					}),
				(d.dividedBy = d.div =
					function (t) {
						return m(this, new this.constructor(t))
					}),
				(d.dividedToIntegerBy = d.idiv =
					function (t) {
						var e = this.constructor
						return j(m(this, new e(t), 0, 1), e.precision)
					}),
				(d.equals = d.eq =
					function (t) {
						return !this.cmp(t)
					}),
				(d.exponent = function () {
					return g(this)
				}),
				(d.greaterThan = d.gt =
					function (t) {
						return this.cmp(t) > 0
					}),
				(d.greaterThanOrEqualTo = d.gte =
					function (t) {
						return this.cmp(t) >= 0
					}),
				(d.isInteger = d.isint =
					function () {
						return this.e > this.d.length - 2
					}),
				(d.isNegative = d.isneg =
					function () {
						return this.s < 0
					}),
				(d.isPositive = d.ispos =
					function () {
						return this.s > 0
					}),
				(d.isZero = function () {
					return 0 === this.s
				}),
				(d.lessThan = d.lt =
					function (t) {
						return 0 > this.cmp(t)
					}),
				(d.lessThanOrEqualTo = d.lte =
					function (t) {
						return 1 > this.cmp(t)
					}),
				(d.logarithm = d.log =
					function (t) {
						var e,
							r = this.constructor,
							i = r.precision,
							u = i + 5
						if (void 0 === t) t = new r(10)
						else if ((t = new r(t)).s < 1 || t.eq(n)) throw Error(a + "NaN")
						if (this.s < 1) throw Error(a + (this.s ? "NaN" : "-Infinity"))
						return this.eq(n) ? new r(0) : ((o = !1), (e = m(w(this, u), w(t, u), u)), (o = !0), j(e, i))
					}),
				(d.minus = d.sub =
					function (t) {
						return (t = new this.constructor(t)), this.s == t.s ? E(this, t) : h(this, ((t.s = -t.s), t))
					}),
				(d.modulo = d.mod =
					function (t) {
						var e,
							r = this.constructor,
							n = r.precision
						if (!(t = new r(t)).s) throw Error(a + "NaN")
						return this.s
							? ((o = !1), (e = m(this, t, 0, 1).times(t)), (o = !0), this.minus(e))
							: j(new r(this), n)
					}),
				(d.naturalExponential = d.exp =
					function () {
						return b(this)
					}),
				(d.naturalLogarithm = d.ln =
					function () {
						return w(this)
					}),
				(d.negated = d.neg =
					function () {
						var t = new this.constructor(this)
						return (t.s = -t.s || 0), t
					}),
				(d.plus = d.add =
					function (t) {
						return (t = new this.constructor(t)), this.s == t.s ? h(this, t) : E(this, ((t.s = -t.s), t))
					}),
				(d.precision = d.sd =
					function (t) {
						var e, r, n
						if (void 0 !== t && !!t !== t && 1 !== t && 0 !== t) throw Error(u + t)
						if (((e = g(this) + 1), (r = 7 * (n = this.d.length - 1) + 1), (n = this.d[n]))) {
							for (; n % 10 == 0; n /= 10) r--
							for (n = this.d[0]; n >= 10; n /= 10) r++
						}
						return t && e > r ? e : r
					}),
				(d.squareRoot = d.sqrt =
					function () {
						var t,
							e,
							r,
							n,
							i,
							u,
							c,
							s = this.constructor
						if (this.s < 1) {
							if (!this.s) return new s(0)
							throw Error(a + "NaN")
						}
						for (
							t = g(this),
								o = !1,
								0 == (i = Math.sqrt(+this)) || i == 1 / 0
									? (((e = v(this.d)).length + t) % 2 == 0 && (e += "0"),
										(i = Math.sqrt(e)),
										(t = l((t + 1) / 2) - (t < 0 || t % 2)),
										(n = new s(
											(e =
												i == 1 / 0
													? "5e" + t
													: (e = i.toExponential()).slice(0, e.indexOf("e") + 1) + t),
										)))
									: (n = new s(i.toString())),
								i = c = (r = s.precision) + 3;
							;

						)
							if (
								((n = (u = n).plus(m(this, u, c + 2)).times(0.5)),
								v(u.d).slice(0, c) === (e = v(n.d)).slice(0, c))
							) {
								if (((e = e.slice(c - 3, c + 1)), i == c && "4999" == e)) {
									if ((j(u, r + 1, 0), u.times(u).eq(this))) {
										n = u
										break
									}
								} else if ("9999" != e) break
								c += 4
							}
						return (o = !0), j(n, r)
					}),
				(d.times = d.mul =
					function (t) {
						var e,
							r,
							n,
							i,
							a,
							u,
							c,
							l,
							s,
							f = this.constructor,
							p = this.d,
							d = (t = new f(t)).d
						if (!this.s || !t.s) return new f(0)
						for (
							t.s *= this.s,
								r = this.e + t.e,
								(l = p.length) < (s = d.length) &&
									((a = p), (p = d), (d = a), (u = l), (l = s), (s = u)),
								a = [],
								n = u = l + s;
							n--;

						)
							a.push(0)
						for (n = s; --n >= 0; ) {
							for (e = 0, i = l + n; i > n; )
								(c = a[i] + d[n] * p[i - n - 1] + e), (a[i--] = c % 1e7 | 0), (e = (c / 1e7) | 0)
							a[i] = (a[i] + e) % 1e7 | 0
						}
						for (; !a[--u]; ) a.pop()
						return e ? ++r : a.shift(), (t.d = a), (t.e = r), o ? j(t, f.precision) : t
					}),
				(d.toDecimalPlaces = d.todp =
					function (t, e) {
						var r = this,
							n = r.constructor
						return ((r = new n(r)), void 0 === t)
							? r
							: (y(t, 0, 1e9), void 0 === e ? (e = n.rounding) : y(e, 0, 8), j(r, t + g(r) + 1, e))
					}),
				(d.toExponential = function (t, e) {
					var r,
						n = this,
						i = n.constructor
					return (
						void 0 === t
							? (r = P(n, !0))
							: (y(t, 0, 1e9),
								void 0 === e ? (e = i.rounding) : y(e, 0, 8),
								(r = P((n = j(new i(n), t + 1, e)), !0, t + 1))),
						r
					)
				}),
				(d.toFixed = function (t, e) {
					var r,
						n,
						i = this.constructor
					return void 0 === t
						? P(this)
						: (y(t, 0, 1e9),
							void 0 === e ? (e = i.rounding) : y(e, 0, 8),
							(r = P((n = j(new i(this), t + g(this) + 1, e)).abs(), !1, t + g(n) + 1)),
							this.isneg() && !this.isZero() ? "-" + r : r)
				}),
				(d.toInteger = d.toint =
					function () {
						var t = this.constructor
						return j(new t(this), g(this) + 1, t.rounding)
					}),
				(d.toNumber = function () {
					return +this
				}),
				(d.toPower = d.pow =
					function (t) {
						var e,
							r,
							i,
							u,
							c,
							s,
							f = this,
							p = f.constructor,
							d = +(t = new p(t))
						if (!t.s) return new p(n)
						if (!(f = new p(f)).s) {
							if (t.s < 1) throw Error(a + "Infinity")
							return f
						}
						if (f.eq(n)) return f
						if (((i = p.precision), t.eq(n))) return j(f, i)
						if (((s = (e = t.e) >= (r = t.d.length - 1)), (c = f.s), s)) {
							if ((r = d < 0 ? -d : d) <= 0x1fffffffffffff) {
								for (
									u = new p(n), e = Math.ceil(i / 7 + 4), o = !1;
									r % 2 && A((u = u.times(f)).d, e), 0 !== (r = l(r / 2));

								)
									A((f = f.times(f)).d, e)
								return (o = !0), t.s < 0 ? new p(n).div(u) : j(u, i)
							}
						} else if (c < 0) throw Error(a + "NaN")
						return (
							(c = c < 0 && 1 & t.d[Math.max(e, r)] ? -1 : 1),
							(f.s = 1),
							(o = !1),
							(u = t.times(w(f, i + 12))),
							(o = !0),
							((u = b(u)).s = c),
							u
						)
					}),
				(d.toPrecision = function (t, e) {
					var r,
						n,
						i = this,
						o = i.constructor
					return (
						void 0 === t
							? ((r = g(i)), (n = P(i, r <= o.toExpNeg || r >= o.toExpPos)))
							: (y(t, 1, 1e9),
								void 0 === e ? (e = o.rounding) : y(e, 0, 8),
								(r = g((i = j(new o(i), t, e)))),
								(n = P(i, t <= r || r <= o.toExpNeg, t))),
						n
					)
				}),
				(d.toSignificantDigits = d.tosd =
					function (t, e) {
						var r = this.constructor
						return (
							void 0 === t
								? ((t = r.precision), (e = r.rounding))
								: (y(t, 1, 1e9), void 0 === e ? (e = r.rounding) : y(e, 0, 8)),
							j(new r(this), t, e)
						)
					}),
				(d.toString =
					d.valueOf =
					d.val =
					d.toJSON =
						function () {
							var t = g(this),
								e = this.constructor
							return P(this, t <= e.toExpNeg || t >= e.toExpPos)
						})
			var m = (function () {
				function t(t, e) {
					var r,
						n = 0,
						i = t.length
					for (t = t.slice(); i--; ) (r = t[i] * e + n), (t[i] = r % 1e7 | 0), (n = (r / 1e7) | 0)
					return n && t.unshift(n), t
				}
				function e(t, e, r, n) {
					var i, o
					if (r != n) o = r > n ? 1 : -1
					else
						for (i = o = 0; i < r; i++)
							if (t[i] != e[i]) {
								o = t[i] > e[i] ? 1 : -1
								break
							}
					return o
				}
				function r(t, e, r) {
					for (var n = 0; r--; ) (t[r] -= n), (n = +(t[r] < e[r])), (t[r] = 1e7 * n + t[r] - e[r])
					for (; !t[0] && t.length > 1; ) t.shift()
				}
				return function (n, i, o, u) {
					var c,
						l,
						s,
						f,
						p,
						d,
						h,
						y,
						v,
						m,
						b,
						x,
						O,
						w,
						S,
						E,
						P,
						A,
						T = n.constructor,
						k = n.s == i.s ? 1 : -1,
						M = n.d,
						N = i.d
					if (!n.s) return new T(n)
					if (!i.s) throw Error(a + "Division by zero")
					for (
						s = 0, l = n.e - i.e, P = N.length, S = M.length, y = (h = new T(k)).d = [];
						N[s] == (M[s] || 0);

					)
						++s
					if (
						(N[s] > (M[s] || 0) && --l,
						(x = null == o ? (o = T.precision) : u ? o + (g(n) - g(i)) + 1 : o) < 0)
					)
						return new T(0)
					if (((x = (x / 7 + 2) | 0), (s = 0), 1 == P))
						for (f = 0, N = N[0], x++; (s < S || f) && x--; s++)
							(O = 1e7 * f + (M[s] || 0)), (y[s] = (O / N) | 0), (f = O % N | 0)
					else {
						for (
							(f = (1e7 / (N[0] + 1)) | 0) > 1 &&
								((N = t(N, f)), (M = t(M, f)), (P = N.length), (S = M.length)),
								w = P,
								m = (v = M.slice(0, P)).length;
							m < P;

						)
							v[m++] = 0
						;(A = N.slice()).unshift(0), (E = N[0]), N[1] >= 1e7 / 2 && ++E
						do
							(f = 0),
								(c = e(N, v, P, m)) < 0
									? ((b = v[0]),
										P != m && (b = 1e7 * b + (v[1] || 0)),
										(f = (b / E) | 0) > 1
											? (f >= 1e7 && (f = 1e7 - 1),
												(d = (p = t(N, f)).length),
												(m = v.length),
												1 == (c = e(p, v, d, m)) && (f--, r(p, P < d ? A : N, d)))
											: (0 == f && (c = f = 1), (p = N.slice())),
										(d = p.length) < m && p.unshift(0),
										r(v, p, m),
										-1 == c &&
											((m = v.length), (c = e(N, v, P, m)) < 1 && (f++, r(v, P < m ? A : N, m))),
										(m = v.length))
									: 0 === c && (f++, (v = [0])),
								(y[s++] = f),
								c && v[0] ? (v[m++] = M[w] || 0) : ((v = [M[w]]), (m = 1))
						while ((w++ < S || void 0 !== v[0]) && x--)
					}
					return y[0] || y.shift(), (h.e = l), j(h, u ? o + g(h) + 1 : o)
				}
			})()
			function b(t, e) {
				var r,
					i,
					a,
					u,
					l,
					f = 0,
					p = 0,
					d = t.constructor,
					h = d.precision
				if (g(t) > 16) throw Error(c + g(t))
				if (!t.s) return new d(n)
				for (null == e ? ((o = !1), (l = h)) : (l = e), u = new d(0.03125); t.abs().gte(0.1); )
					(t = t.times(u)), (p += 5)
				for (l += ((Math.log(s(2, p)) / Math.LN10) * 2 + 5) | 0, r = i = a = new d(n), d.precision = l; ; ) {
					if (
						((i = j(i.times(t), l)),
						(r = r.times(++f)),
						v((u = a.plus(m(i, r, l))).d).slice(0, l) === v(a.d).slice(0, l))
					) {
						for (; p--; ) a = j(a.times(a), l)
						return (d.precision = h), null == e ? ((o = !0), j(a, h)) : a
					}
					a = u
				}
			}
			function g(t) {
				for (var e = 7 * t.e, r = t.d[0]; r >= 10; r /= 10) e++
				return e
			}
			function x(t, e, r) {
				if (e > t.LN10.sd())
					throw ((o = !0), r && (t.precision = r), Error(a + "LN10 precision limit exceeded"))
				return j(new t(t.LN10), e)
			}
			function O(t) {
				for (var e = ""; t--; ) e += "0"
				return e
			}
			function w(t, e) {
				var r,
					i,
					u,
					c,
					l,
					s,
					f,
					p,
					d,
					h = 1,
					y = t,
					b = y.d,
					O = y.constructor,
					S = O.precision
				if (y.s < 1) throw Error(a + (y.s ? "NaN" : "-Infinity"))
				if (y.eq(n)) return new O(0)
				if ((null == e ? ((o = !1), (p = S)) : (p = e), y.eq(10))) return null == e && (o = !0), x(O, p)
				if (((O.precision = p += 10), (i = (r = v(b)).charAt(0)), !(15e14 > Math.abs((c = g(y))))))
					return (
						(f = x(O, p + 2, S).times(c + "")),
						(y = w(new O(i + "." + r.slice(1)), p - 10).plus(f)),
						(O.precision = S),
						null == e ? ((o = !0), j(y, S)) : y
					)
				for (; (i < 7 && 1 != i) || (1 == i && r.charAt(1) > 3); )
					(i = (r = v((y = y.times(t)).d)).charAt(0)), h++
				for (
					c = g(y),
						i > 1 ? ((y = new O("0." + r)), c++) : (y = new O(i + "." + r.slice(1))),
						s = l = y = m(y.minus(n), y.plus(n), p),
						d = j(y.times(y), p),
						u = 3;
					;

				) {
					if (
						((l = j(l.times(d), p)),
						v((f = s.plus(m(l, new O(u), p))).d).slice(0, p) === v(s.d).slice(0, p))
					)
						return (
							(s = s.times(2)),
							0 !== c && (s = s.plus(x(O, p + 2, S).times(c + ""))),
							(s = m(s, new O(h), p)),
							(O.precision = S),
							null == e ? ((o = !0), j(s, S)) : s
						)
					;(s = f), (u += 2)
				}
			}
			function S(t, e) {
				var r, n, i
				for (
					(r = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
						(n = e.search(/e/i)) > 0
							? (r < 0 && (r = n), (r += +e.slice(n + 1)), (e = e.substring(0, n)))
							: r < 0 && (r = e.length),
						n = 0;
					48 === e.charCodeAt(n);

				)
					++n
				for (i = e.length; 48 === e.charCodeAt(i - 1); ) --i
				if ((e = e.slice(n, i))) {
					if (
						((i -= n),
						(t.e = l((r = r - n - 1) / 7)),
						(t.d = []),
						(n = (r + 1) % 7),
						r < 0 && (n += 7),
						n < i)
					) {
						for (n && t.d.push(+e.slice(0, n)), i -= 7; n < i; ) t.d.push(+e.slice(n, (n += 7)))
						n = 7 - (e = e.slice(n)).length
					} else n -= i
					for (; n--; ) e += "0"
					if ((t.d.push(+e), o && (t.e > p || t.e < -p))) throw Error(c + r)
				} else (t.s = 0), (t.e = 0), (t.d = [0])
				return t
			}
			function j(t, e, r) {
				var n,
					i,
					a,
					u,
					f,
					d,
					h,
					y,
					v = t.d
				for (u = 1, a = v[0]; a >= 10; a /= 10) u++
				if ((n = e - u) < 0) (n += 7), (i = e), (h = v[(y = 0)])
				else {
					if ((y = Math.ceil((n + 1) / 7)) >= (a = v.length)) return t
					for (u = 1, h = a = v[y]; a >= 10; a /= 10) u++
					;(n %= 7), (i = n - 7 + u)
				}
				if (
					(void 0 !== r &&
						((f = (h / (a = s(10, u - i - 1))) % 10 | 0),
						(d = e < 0 || void 0 !== v[y + 1] || h % a),
						(d =
							r < 4
								? (f || d) && (0 == r || r == (t.s < 0 ? 3 : 2))
								: f > 5 ||
									(5 == f &&
										(4 == r ||
											d ||
											(6 == r && (n > 0 ? (i > 0 ? h / s(10, u - i) : 0) : v[y - 1]) % 10 & 1) ||
											r == (t.s < 0 ? 8 : 7))))),
					e < 1 || !v[0])
				)
					return (
						d
							? ((a = g(t)),
								(v.length = 1),
								(e = e - a - 1),
								(v[0] = s(10, (7 - (e % 7)) % 7)),
								(t.e = l(-e / 7) || 0))
							: ((v.length = 1), (v[0] = t.e = t.s = 0)),
						t
					)
				if (
					(0 == n
						? ((v.length = y), (a = 1), y--)
						: ((v.length = y + 1),
							(a = s(10, 7 - n)),
							(v[y] = i > 0 ? ((h / s(10, u - i)) % s(10, i) | 0) * a : 0)),
					d)
				)
					for (;;)
						if (0 == y) {
							1e7 == (v[0] += a) && ((v[0] = 1), ++t.e)
							break
						} else {
							if (((v[y] += a), 1e7 != v[y])) break
							;(v[y--] = 0), (a = 1)
						}
				for (n = v.length; 0 === v[--n]; ) v.pop()
				if (o && (t.e > p || t.e < -p)) throw Error(c + g(t))
				return t
			}
			function E(t, e) {
				var r,
					n,
					i,
					a,
					u,
					c,
					l,
					s,
					f,
					p,
					d = t.constructor,
					h = d.precision
				if (!t.s || !e.s) return e.s ? (e.s = -e.s) : (e = new d(t)), o ? j(e, h) : e
				if (((l = t.d), (p = e.d), (n = e.e), (s = t.e), (l = l.slice()), (u = s - n))) {
					for (
						(f = u < 0) ? ((r = l), (u = -u), (c = p.length)) : ((r = p), (n = s), (c = l.length)),
							u > (i = Math.max(Math.ceil(h / 7), c) + 2) && ((u = i), (r.length = 1)),
							r.reverse(),
							i = u;
						i--;

					)
						r.push(0)
					r.reverse()
				} else {
					for ((f = (i = l.length) < (c = p.length)) && (c = i), i = 0; i < c; i++)
						if (l[i] != p[i]) {
							f = l[i] < p[i]
							break
						}
					u = 0
				}
				for (f && ((r = l), (l = p), (p = r), (e.s = -e.s)), c = l.length, i = p.length - c; i > 0; --i)
					l[c++] = 0
				for (i = p.length; i > u; ) {
					if (l[--i] < p[i]) {
						for (a = i; a && 0 === l[--a]; ) l[a] = 1e7 - 1
						--l[a], (l[i] += 1e7)
					}
					l[i] -= p[i]
				}
				for (; 0 === l[--c]; ) l.pop()
				for (; 0 === l[0]; l.shift()) --n
				return l[0] ? ((e.d = l), (e.e = n), o ? j(e, h) : e) : new d(0)
			}
			function P(t, e, r) {
				var n,
					i = g(t),
					o = v(t.d),
					a = o.length
				return (
					e
						? (r && (n = r - a) > 0
								? (o = o.charAt(0) + "." + o.slice(1) + O(n))
								: a > 1 && (o = o.charAt(0) + "." + o.slice(1)),
							(o = o + (i < 0 ? "e" : "e+") + i))
						: i < 0
							? ((o = "0." + O(-i - 1) + o), r && (n = r - a) > 0 && (o += O(n)))
							: i >= a
								? ((o += O(i + 1 - a)), r && (n = r - i - 1) > 0 && (o = o + "." + O(n)))
								: ((n = i + 1) < a && (o = o.slice(0, n) + "." + o.slice(n)),
									r && (n = r - a) > 0 && (i + 1 === a && (o += "."), (o += O(n)))),
					t.s < 0 ? "-" + o : o
				)
			}
			function A(t, e) {
				if (t.length > e) return (t.length = e), !0
			}
			function T(t) {
				if (!t || "object" != typeof t) throw Error(a + "Object expected")
				var e,
					r,
					n,
					i = ["precision", 1, 1e9, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0]
				for (e = 0; e < i.length; e += 3)
					if (void 0 !== (n = t[(r = i[e])]))
						if (l(n) === n && n >= i[e + 1] && n <= i[e + 2]) this[r] = n
						else throw Error(u + r + ": " + n)
				if (void 0 !== (n = t[(r = "LN10")]))
					if (n == Math.LN10) this[r] = new this(n)
					else throw Error(u + r + ": " + n)
				return this
			}
			if (
				(((i = (function t(e) {
					var r, n, i
					function o(t) {
						if (!(this instanceof o)) return new o(t)
						if (((this.constructor = o), t instanceof o)) {
							;(this.s = t.s), (this.e = t.e), (this.d = (t = t.d) ? t.slice() : t)
							return
						}
						if ("number" == typeof t) {
							if (0 * t != 0) throw Error(u + t)
							if (t > 0) this.s = 1
							else if (t < 0) (t = -t), (this.s = -1)
							else {
								;(this.s = 0), (this.e = 0), (this.d = [0])
								return
							}
							if (t === ~~t && t < 1e7) {
								;(this.e = 0), (this.d = [t])
								return
							}
							return S(this, t.toString())
						}
						if ("string" != typeof t) throw Error(u + t)
						if ((45 === t.charCodeAt(0) ? ((t = t.slice(1)), (this.s = -1)) : (this.s = 1), f.test(t)))
							S(this, t)
						else throw Error(u + t)
					}
					if (
						((o.prototype = d),
						(o.ROUND_UP = 0),
						(o.ROUND_DOWN = 1),
						(o.ROUND_CEIL = 2),
						(o.ROUND_FLOOR = 3),
						(o.ROUND_HALF_UP = 4),
						(o.ROUND_HALF_DOWN = 5),
						(o.ROUND_HALF_EVEN = 6),
						(o.ROUND_HALF_CEIL = 7),
						(o.ROUND_HALF_FLOOR = 8),
						(o.clone = t),
						(o.config = o.set = T),
						void 0 === e && (e = {}),
						e)
					)
						for (r = 0, i = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"]; r < i.length; )
							e.hasOwnProperty((n = i[r++])) || (e[n] = this[n])
					return o.config(e), o
				})(i)).default = i.Decimal =
					i),
				(n = new i(1)),
				"function" == typeof define && define.amd)
			) {
				let e
				t.r, void 0 !== (e = i) && t.v(e)
			} else
				e.exports
					? (e.exports = i)
					: (r || (r = "u" > typeof self && self && self.self == self ? self : Function("return this")()),
						(r.Decimal = i))
		})(t.e)
	},
	30215,
	(t, e, r) => {
		var n = t.r(47474)
		e.exports = function (t, e, r) {
			"__proto__" == e && n ? n(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (t[e] = r)
		}
	},
	54888,
	(t, e, r) => {
		var n = t.r(30215),
			i = t.r(88607),
			o = t.r(57529)
		e.exports = function (t, e) {
			var r = {}
			return (
				(e = o(e, 3)),
				i(t, function (t, i, o) {
					n(r, i, e(t, i, o))
				}),
				r
			)
		}
	},
	86332,
	(t, e, r) => {
		e.exports = function (t, e) {
			for (var r = -1, n = null == t ? 0 : t.length; ++r < n; ) if (!e(t[r], r, t)) return !1
			return !0
		}
	},
	66954,
	(t, e, r) => {
		var n = t.r(35496)
		e.exports = function (t, e) {
			var r = !0
			return (
				n(t, function (t, n, i) {
					return (r = !!e(t, n, i))
				}),
				r
			)
		}
	},
	67735,
	(t, e, r) => {
		var n = t.r(86332),
			i = t.r(66954),
			o = t.r(57529),
			a = t.r(72098),
			u = t.r(16110)
		e.exports = function (t, e, r) {
			var c = a(t) ? n : i
			return r && u(t, e, r) && (e = void 0), c(t, o(e, 3))
		}
	},
	94786,
	(t, e, r) => {
		e.exports = function (t) {
			var e = null == t ? 0 : t.length
			return e ? t[e - 1] : void 0
		}
	},
	30968,
	(t, e, r) => {
		e.exports = t.r(91915)(Object.getPrototypeOf, Object)
	},
	17307,
	(t, e, r) => {
		var n = t.r(23748),
			i = t.r(30968),
			o = t.r(19674),
			a = Object.prototype,
			u = Function.prototype.toString,
			c = a.hasOwnProperty,
			l = u.call(Object)
		e.exports = function (t) {
			if (!o(t) || "[object Object]" != n(t)) return !1
			var e = i(t)
			if (null === e) return !0
			var r = c.call(e, "constructor") && e.constructor
			return "function" == typeof r && r instanceof r && u.call(r) == l
		}
	},
	67997,
	(t, e, r) => {
		var n = t.r(23748),
			i = t.r(19674)
		e.exports = function (t) {
			return !0 === t || !1 === t || (i(t) && "[object Boolean]" == n(t))
		}
	},
	29127,
	(t, e, r) => {
		var n = t.r(35496)
		e.exports = function (t, e) {
			var r
			return (
				n(t, function (t, n, i) {
					return !(r = e(t, n, i))
				}),
				!!r
			)
		}
	},
	22372,
	(t, e, r) => {
		var n = t.r(77484),
			i = t.r(57529),
			o = t.r(29127),
			a = t.r(72098),
			u = t.r(16110)
		e.exports = function (t, e, r) {
			var c = a(t) ? n : o
			return r && u(t, e, r) && (e = void 0), c(t, i(e, 3))
		}
	},
	62023,
	(t, e, r) => {
		var n = t.r(57529),
			i = t.r(7850),
			o = t.r(33089)
		e.exports = function (t) {
			return function (e, r, a) {
				var u = Object(e)
				if (!i(e)) {
					var c = n(r, 3)
					;(e = o(e)),
						(r = function (t) {
							return c(u[t], t, u)
						})
				}
				var l = t(e, r, a)
				return l > -1 ? u[c ? e[l] : l] : void 0
			}
		}
	},
	97125,
	(t, e, r) => {
		var n = t.r(89781)
		e.exports = function (t) {
			var e = n(t),
				r = e % 1
			return e == e ? (r ? e - r : e) : 0
		}
	},
	64962,
	(t, e, r) => {
		var n = t.r(33245),
			i = t.r(57529),
			o = t.r(97125),
			a = Math.max
		e.exports = function (t, e, r) {
			var u = null == t ? 0 : t.length
			if (!u) return -1
			var c = null == r ? 0 : o(r)
			return c < 0 && (c = a(u + c, 0)), n(t, i(e, 3), c)
		}
	},
	21569,
	(t, e, r) => {
		e.exports = t.r(62023)(t.r(64962))
	},
	10482,
	(t, e, r) => {
		"use strict"
		var n = Object.prototype.hasOwnProperty,
			i = "~"
		function o() {}
		function a(t, e, r) {
			;(this.fn = t), (this.context = e), (this.once = r || !1)
		}
		function u(t, e, r, n, o) {
			if ("function" != typeof r) throw TypeError("The listener must be a function")
			var u = new a(r, n || t, o),
				c = i ? i + e : e
			return (
				t._events[c]
					? t._events[c].fn
						? (t._events[c] = [t._events[c], u])
						: t._events[c].push(u)
					: ((t._events[c] = u), t._eventsCount++),
				t
			)
		}
		function c(t, e) {
			0 == --t._eventsCount ? (t._events = new o()) : delete t._events[e]
		}
		function l() {
			;(this._events = new o()), (this._eventsCount = 0)
		}
		Object.create && ((o.prototype = Object.create(null)), new o().__proto__ || (i = !1)),
			(l.prototype.eventNames = function () {
				var t,
					e,
					r = []
				if (0 === this._eventsCount) return r
				for (e in (t = this._events)) n.call(t, e) && r.push(i ? e.slice(1) : e)
				return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
			}),
			(l.prototype.listeners = function (t) {
				var e = i ? i + t : t,
					r = this._events[e]
				if (!r) return []
				if (r.fn) return [r.fn]
				for (var n = 0, o = r.length, a = Array(o); n < o; n++) a[n] = r[n].fn
				return a
			}),
			(l.prototype.listenerCount = function (t) {
				var e = i ? i + t : t,
					r = this._events[e]
				return r ? (r.fn ? 1 : r.length) : 0
			}),
			(l.prototype.emit = function (t, e, r, n, o, a) {
				var u = i ? i + t : t
				if (!this._events[u]) return !1
				var c,
					l,
					s = this._events[u],
					f = arguments.length
				if (s.fn) {
					switch ((s.once && this.removeListener(t, s.fn, void 0, !0), f)) {
						case 1:
							return s.fn.call(s.context), !0
						case 2:
							return s.fn.call(s.context, e), !0
						case 3:
							return s.fn.call(s.context, e, r), !0
						case 4:
							return s.fn.call(s.context, e, r, n), !0
						case 5:
							return s.fn.call(s.context, e, r, n, o), !0
						case 6:
							return s.fn.call(s.context, e, r, n, o, a), !0
					}
					for (l = 1, c = Array(f - 1); l < f; l++) c[l - 1] = arguments[l]
					s.fn.apply(s.context, c)
				} else {
					var p,
						d = s.length
					for (l = 0; l < d; l++)
						switch ((s[l].once && this.removeListener(t, s[l].fn, void 0, !0), f)) {
							case 1:
								s[l].fn.call(s[l].context)
								break
							case 2:
								s[l].fn.call(s[l].context, e)
								break
							case 3:
								s[l].fn.call(s[l].context, e, r)
								break
							case 4:
								s[l].fn.call(s[l].context, e, r, n)
								break
							default:
								if (!c) for (p = 1, c = Array(f - 1); p < f; p++) c[p - 1] = arguments[p]
								s[l].fn.apply(s[l].context, c)
						}
				}
				return !0
			}),
			(l.prototype.on = function (t, e, r) {
				return u(this, t, e, r, !1)
			}),
			(l.prototype.once = function (t, e, r) {
				return u(this, t, e, r, !0)
			}),
			(l.prototype.removeListener = function (t, e, r, n) {
				var o = i ? i + t : t
				if (!this._events[o]) return this
				if (!e) return c(this, o), this
				var a = this._events[o]
				if (a.fn) a.fn !== e || (n && !a.once) || (r && a.context !== r) || c(this, o)
				else {
					for (var u = 0, l = [], s = a.length; u < s; u++)
						(a[u].fn !== e || (n && !a[u].once) || (r && a[u].context !== r)) && l.push(a[u])
					l.length ? (this._events[o] = 1 === l.length ? l[0] : l) : c(this, o)
				}
				return this
			}),
			(l.prototype.removeAllListeners = function (t) {
				var e
				return (
					t
						? ((e = i ? i + t : t), this._events[e] && c(this, e))
						: ((this._events = new o()), (this._eventsCount = 0)),
					this
				)
			}),
			(l.prototype.off = l.prototype.removeListener),
			(l.prototype.addListener = l.prototype.on),
			(l.prefixed = i),
			(l.EventEmitter = l),
			(e.exports = l)
	},
	11336,
	(t) => {
		"use strict"
		let e
		var r,
			n,
			i,
			o,
			a,
			u,
			c,
			l,
			s,
			f,
			p,
			d,
			h,
			y,
			v,
			m,
			b,
			g,
			x,
			O,
			w,
			S,
			j,
			E,
			P = t.i(8026),
			A = t.i(10008)
		let T = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
			k = (t) => (null == t ? "-" : T.format(t)),
			M = (t) => Math.round(100 * t),
			N = (t, e = 0) =>
				null == t
					? "-"
					: t < 1e3
						? t.toString()
						: t < 1e6
							? `${(t / 1e3).toFixed(e)}K`
							: t < 1e9
								? `${(t / 1e6).toFixed(e)}M`
								: `${(t / 1e9).toFixed(e)}B`
		t.i(42506)
		var _ = t.i(32356),
			I = t.i(82679),
			C = t.i(59864),
			D = t.i(59243),
			R = t.i(78889),
			B = t.i(57142),
			L = t.i(66271),
			z = t.i(5763),
			U = class extends R.Subscribable {
				constructor(t, e) {
					super(),
						(this.options = e),
						(this.#t = t),
						(this.#e = null),
						(this.#r = (0, B.pendingThenable)()),
						this.bindMethods(),
						this.setOptions(e)
				}
				#t
				#n = void 0
				#i = void 0
				#o = void 0
				#a
				#u
				#r
				#e
				#c
				#l
				#s
				#f
				#p
				#d
				#h = new Set()
				bindMethods() {
					this.refetch = this.refetch.bind(this)
				}
				onSubscribe() {
					1 === this.listeners.size &&
						(this.#n.addObserver(this),
						F(this.#n, this.options) ? this.#y() : this.updateResult(),
						this.#v())
				}
				onUnsubscribe() {
					this.hasListeners() || this.destroy()
				}
				shouldFetchOnReconnect() {
					return q(this.#n, this.options, this.options.refetchOnReconnect)
				}
				shouldFetchOnWindowFocus() {
					return q(this.#n, this.options, this.options.refetchOnWindowFocus)
				}
				destroy() {
					;(this.listeners = new Set()), this.#m(), this.#b(), this.#n.removeObserver(this)
				}
				setOptions(t) {
					let e = this.options,
						r = this.#n
					if (
						((this.options = this.#t.defaultQueryOptions(t)),
						void 0 !== this.options.enabled &&
							"boolean" != typeof this.options.enabled &&
							"function" != typeof this.options.enabled &&
							"boolean" != typeof (0, L.resolveEnabled)(this.options.enabled, this.#n))
					)
						throw Error("Expected enabled to be a boolean or a callback that returns a boolean")
					this.#g(),
						this.#n.setOptions(this.options),
						e._defaulted &&
							!(0, L.shallowEqualObjects)(this.options, e) &&
							this.#t
								.getQueryCache()
								.notify({ type: "observerOptionsUpdated", query: this.#n, observer: this })
					let n = this.hasListeners()
					n && W(this.#n, r, this.options, e) && this.#y(),
						this.updateResult(),
						n &&
							(this.#n !== r ||
								(0, L.resolveEnabled)(this.options.enabled, this.#n) !==
									(0, L.resolveEnabled)(e.enabled, this.#n) ||
								(0, L.resolveStaleTime)(this.options.staleTime, this.#n) !==
									(0, L.resolveStaleTime)(e.staleTime, this.#n)) &&
							this.#x()
					let i = this.#O()
					n &&
						(this.#n !== r ||
							(0, L.resolveEnabled)(this.options.enabled, this.#n) !==
								(0, L.resolveEnabled)(e.enabled, this.#n) ||
							i !== this.#d) &&
						this.#w(i)
				}
				getOptimisticResult(t) {
					var e, r
					let n = this.#t.getQueryCache().build(this.#t, t),
						i = this.createResult(n, t)
					return (
						(e = this),
						(r = i),
						(0, L.shallowEqualObjects)(e.getCurrentResult(), r) ||
							((this.#o = i), (this.#u = this.options), (this.#a = this.#n.state)),
						i
					)
				}
				getCurrentResult() {
					return this.#o
				}
				trackResult(t, e) {
					return new Proxy(t, {
						get: (t, r) => (
							this.trackProp(r),
							e?.(r),
							"promise" === r &&
								(this.trackProp("data"),
								this.options.experimental_prefetchInRender ||
									"pending" !== this.#r.status ||
									this.#r.reject(Error("experimental_prefetchInRender feature flag is not enabled"))),
							Reflect.get(t, r)
						),
					})
				}
				trackProp(t) {
					this.#h.add(t)
				}
				getCurrentQuery() {
					return this.#n
				}
				refetch({ ...t } = {}) {
					return this.fetch({ ...t })
				}
				fetchOptimistic(t) {
					let e = this.#t.defaultQueryOptions(t),
						r = this.#t.getQueryCache().build(this.#t, e)
					return r.fetch().then(() => this.createResult(r, e))
				}
				fetch(t) {
					return this.#y({ ...t, cancelRefetch: t.cancelRefetch ?? !0 }).then(
						() => (this.updateResult(), this.#o),
					)
				}
				#y(t) {
					this.#g()
					let e = this.#n.fetch(this.options, t)
					return t?.throwOnError || (e = e.catch(L.noop)), e
				}
				#x() {
					this.#m()
					let t = (0, L.resolveStaleTime)(this.options.staleTime, this.#n)
					if (L.isServer || this.#o.isStale || !(0, L.isValidTimeout)(t)) return
					let e = (0, L.timeUntilStale)(this.#o.dataUpdatedAt, t)
					this.#f = z.timeoutManager.setTimeout(() => {
						this.#o.isStale || this.updateResult()
					}, e + 1)
				}
				#O() {
					return (
						("function" == typeof this.options.refetchInterval
							? this.options.refetchInterval(this.#n)
							: this.options.refetchInterval) ?? !1
					)
				}
				#w(t) {
					this.#b(),
						(this.#d = t),
						!L.isServer &&
							!1 !== (0, L.resolveEnabled)(this.options.enabled, this.#n) &&
							(0, L.isValidTimeout)(this.#d) &&
							0 !== this.#d &&
							(this.#p = z.timeoutManager.setInterval(() => {
								;(this.options.refetchIntervalInBackground || I.focusManager.isFocused()) && this.#y()
							}, this.#d))
				}
				#v() {
					this.#x(), this.#w(this.#O())
				}
				#m() {
					this.#f && (z.timeoutManager.clearTimeout(this.#f), (this.#f = void 0))
				}
				#b() {
					this.#p && (z.timeoutManager.clearInterval(this.#p), (this.#p = void 0))
				}
				createResult(t, e) {
					let r,
						n = this.#n,
						i = this.options,
						o = this.#o,
						a = this.#a,
						u = this.#u,
						c = t !== n ? t.state : this.#i,
						{ state: l } = t,
						s = { ...l },
						f = !1
					if (e._optimisticResults) {
						let r = this.hasListeners(),
							o = !r && F(t, e),
							a = r && W(t, n, e, i)
						;(o || a) && (s = { ...s, ...(0, D.fetchState)(l.data, t.options) }),
							"isRestoring" === e._optimisticResults && (s.fetchStatus = "idle")
					}
					let { error: p, errorUpdatedAt: d, status: h } = s
					r = s.data
					let y = !1
					if (void 0 !== e.placeholderData && void 0 === r && "pending" === h) {
						let t
						o?.isPlaceholderData && e.placeholderData === u?.placeholderData
							? ((t = o.data), (y = !0))
							: (t =
									"function" == typeof e.placeholderData
										? e.placeholderData(this.#s?.state.data, this.#s)
										: e.placeholderData),
							void 0 !== t && ((h = "success"), (r = (0, L.replaceData)(o?.data, t, e)), (f = !0))
					}
					if (e.select && void 0 !== r && !y)
						if (o && r === a?.data && e.select === this.#c) r = this.#l
						else
							try {
								;(this.#c = e.select),
									(r = e.select(r)),
									(r = (0, L.replaceData)(o?.data, r, e)),
									(this.#l = r),
									(this.#e = null)
							} catch (t) {
								this.#e = t
							}
					this.#e && ((p = this.#e), (r = this.#l), (d = Date.now()), (h = "error"))
					let v = "fetching" === s.fetchStatus,
						m = "pending" === h,
						b = "error" === h,
						g = m && v,
						x = void 0 !== r,
						O = {
							status: h,
							fetchStatus: s.fetchStatus,
							isPending: m,
							isSuccess: "success" === h,
							isError: b,
							isInitialLoading: g,
							isLoading: g,
							data: r,
							dataUpdatedAt: s.dataUpdatedAt,
							error: p,
							errorUpdatedAt: d,
							failureCount: s.fetchFailureCount,
							failureReason: s.fetchFailureReason,
							errorUpdateCount: s.errorUpdateCount,
							isFetched: s.dataUpdateCount > 0 || s.errorUpdateCount > 0,
							isFetchedAfterMount:
								s.dataUpdateCount > c.dataUpdateCount || s.errorUpdateCount > c.errorUpdateCount,
							isFetching: v,
							isRefetching: v && !m,
							isLoadingError: b && !x,
							isPaused: "paused" === s.fetchStatus,
							isPlaceholderData: f,
							isRefetchError: b && x,
							isStale: H(t, e),
							refetch: this.refetch,
							promise: this.#r,
							isEnabled: !1 !== (0, L.resolveEnabled)(e.enabled, t),
						}
					if (this.options.experimental_prefetchInRender) {
						let e = void 0 !== O.data,
							r = "error" === O.status && !e,
							i = (t) => {
								r ? t.reject(O.error) : e && t.resolve(O.data)
							},
							o = () => {
								i((this.#r = O.promise = (0, B.pendingThenable)()))
							},
							a = this.#r
						switch (a.status) {
							case "pending":
								t.queryHash === n.queryHash && i(a)
								break
							case "fulfilled":
								;(r || O.data !== a.value) && o()
								break
							case "rejected":
								;(r && O.error === a.reason) || o()
						}
					}
					return O
				}
				updateResult() {
					let t = this.#o,
						e = this.createResult(this.#n, this.options)
					if (
						((this.#a = this.#n.state),
						(this.#u = this.options),
						void 0 !== this.#a.data && (this.#s = this.#n),
						(0, L.shallowEqualObjects)(e, t))
					)
						return
					this.#o = e
					let r = () => {
						if (!t) return !0
						let { notifyOnChangeProps: e } = this.options,
							r = "function" == typeof e ? e() : e
						if ("all" === r || (!r && !this.#h.size)) return !0
						let n = new Set(r ?? this.#h)
						return (
							this.options.throwOnError && n.add("error"),
							Object.keys(this.#o).some((e) => this.#o[e] !== t[e] && n.has(e))
						)
					}
					this.#S({ listeners: r() })
				}
				#g() {
					let t = this.#t.getQueryCache().build(this.#t, this.options)
					if (t === this.#n) return
					let e = this.#n
					;(this.#n = t),
						(this.#i = t.state),
						this.hasListeners() && (e?.removeObserver(this), t.addObserver(this))
				}
				onQueryUpdate() {
					this.updateResult(), this.hasListeners() && this.#v()
				}
				#S(t) {
					C.notifyManager.batch(() => {
						t.listeners &&
							this.listeners.forEach((t) => {
								t(this.#o)
							}),
							this.#t.getQueryCache().notify({ query: this.#n, type: "observerResultsUpdated" })
					})
				}
			}
		function F(t, e) {
			return (
				(!1 !== (0, L.resolveEnabled)(e.enabled, t) &&
					void 0 === t.state.data &&
					("error" !== t.state.status || !1 !== e.retryOnMount)) ||
				(void 0 !== t.state.data && q(t, e, e.refetchOnMount))
			)
		}
		function q(t, e, r) {
			if (!1 !== (0, L.resolveEnabled)(e.enabled, t) && "static" !== (0, L.resolveStaleTime)(e.staleTime, t)) {
				let n = "function" == typeof r ? r(t) : r
				return "always" === n || (!1 !== n && H(t, e))
			}
			return !1
		}
		function W(t, e, r, n) {
			return (
				(t !== e || !1 === (0, L.resolveEnabled)(n.enabled, t)) &&
				(!r.suspense || "error" !== t.state.status) &&
				H(t, r)
			)
		}
		function H(t, e) {
			return (
				!1 !== (0, L.resolveEnabled)(e.enabled, t) && t.isStaleByTime((0, L.resolveStaleTime)(e.staleTime, t))
			)
		}
		t.i(53378)
		var $ = t.i(73336),
			X = A.createContext(
				((e = !1),
				{
					clearReset: () => {
						e = !1
					},
					reset: () => {
						e = !0
					},
					isReset: () => e,
				}),
			),
			K = A.createContext(!1)
		K.Provider
		var Q = (t, e, r) =>
			e.fetchOptimistic(t).catch(() => {
				r.clearReset()
			})
		let G = (t) => (t ? 1e6 * parseFloat(t) : void 0),
			V = _.z.object({
				id: _.z.string(),
				name: _.z.string(),
				description: _.z.string(),
				created: _.z.number(),
				context_length: _.z.number(),
				pricing: _.z.object({ prompt: _.z.string().optional(), completion: _.z.string().optional() }),
				top_provider: _.z.object({ max_completion_tokens: _.z.number().nullish() }).optional(),
				architecture: _.z
					.object({
						input_modalities: _.z.array(_.z.string()).nullish(),
						output_modalities: _.z.array(_.z.string()).nullish(),
					})
					.optional(),
			}),
			Y = async () => {
				let t = await fetch("https://openrouter.ai/api/v1/models")
				if (!t.ok) return console.error("Failed to fetch OpenRouter models"), {}
				let e = _.z.object({ data: _.z.array(V) }).safeParse(await t.json())
				return e.success
					? e.data.data
							.filter((t) => !t.architecture?.output_modalities?.includes("image"))
							.sort((t, e) => t.name.localeCompare(e.name))
							.map((t) => ({
								...t,
								modelInfo: {
									maxTokens: t.top_provider?.max_completion_tokens ?? void 0,
									contextWindow: t.context_length,
									inputPrice: G(t.pricing?.prompt),
									outputPrice: G(t.pricing?.completion),
									description: t.description,
									supportsPromptCache: !1,
									supportsImages: t.architecture?.input_modalities?.includes("image") ?? !1,
									supportsThinking: !1,
									tiers: [],
								},
							}))
							.reduce((t, e) => ((t[e.id] = e), t), {})
					: (console.error(e.error), {})
			}
		t.i(8068)
		var Z = t.i(83322),
			J = t.i(50987),
			tt = t.i(63883),
			te = t.i(8284),
			tr = t.i(61317),
			tn = t.i(26431),
			ti = t.i(60174),
			to = t.i(7284)
		function ta(t, e) {
			if (!t) throw Error("Invariant failed")
		}
		var tu = t.i(69086),
			tc = t.i(34215),
			tl = ["children", "className"]
		function ts() {
			return (ts = Object.assign.bind()).apply(this, arguments)
		}
		var tf = A.default.forwardRef(function (t, e) {
				var r = t.children,
					n = t.className,
					i = (function (t, e) {
						if (null == t) return {}
						var r,
							n,
							i = (function (t, e) {
								if (null == t) return {}
								var r = {}
								for (var n in t)
									if (Object.prototype.hasOwnProperty.call(t, n)) {
										if (e.indexOf(n) >= 0) continue
										r[n] = t[n]
									}
								return r
							})(t, e)
						if (Object.getOwnPropertySymbols) {
							var o = Object.getOwnPropertySymbols(t)
							for (n = 0; n < o.length; n++)
								(r = o[n]),
									!(e.indexOf(r) >= 0) &&
										Object.prototype.propertyIsEnumerable.call(t, r) &&
										(i[r] = t[r])
						}
						return i
					})(t, tl),
					o = (0, to.default)("recharts-layer", n)
				return A.default.createElement("g", ts({ className: o }, (0, tc.filterProps)(i, !0), { ref: e }), r)
			}),
			tp = t.i(68436),
			td = t.i(44814),
			th = t.i(5358)
		function ty() {
			return (ty = Object.assign.bind()).apply(this, arguments)
		}
		var tv = function (t) {
				var e = t.cx,
					r = t.cy,
					n = t.r,
					i = t.className,
					o = (0, to.default)("recharts-dot", i)
				return e === +e && r === +r && n === +n
					? A.createElement(
							"circle",
							ty({}, (0, tc.filterProps)(t, !1), (0, th.adaptEventHandlers)(t), {
								className: o,
								cx: e,
								cy: r,
								r: n,
							}),
						)
					: null
			},
			tm = t.i(4153),
			tb = Object.getOwnPropertyNames,
			tg = Object.getOwnPropertySymbols,
			tx = Object.prototype.hasOwnProperty
		function tO(t, e) {
			return function (r, n, i) {
				return t(r, n, i) && e(r, n, i)
			}
		}
		function tw(t) {
			return function (e, r, n) {
				if (!e || !r || "object" != typeof e || "object" != typeof r) return t(e, r, n)
				var i = n.cache,
					o = i.get(e),
					a = i.get(r)
				if (o && a) return o === r && a === e
				i.set(e, r), i.set(r, e)
				var u = t(e, r, n)
				return i.delete(e), i.delete(r), u
			}
		}
		function tS(t) {
			return tb(t).concat(tg(t))
		}
		var tj =
			Object.hasOwn ||
			function (t, e) {
				return tx.call(t, e)
			}
		function tE(t, e) {
			return t === e || (!t && !e && t != t && e != e)
		}
		var tP = Object.getOwnPropertyDescriptor,
			tA = Object.keys
		function tT(t, e, r) {
			var n = t.length
			if (e.length !== n) return !1
			for (; n-- > 0; ) if (!r.equals(t[n], e[n], n, n, t, e, r)) return !1
			return !0
		}
		function tk(t, e) {
			return tE(t.getTime(), e.getTime())
		}
		function tM(t, e) {
			return t.name === e.name && t.message === e.message && t.cause === e.cause && t.stack === e.stack
		}
		function tN(t, e) {
			return t === e
		}
		function t_(t, e, r) {
			var n,
				i,
				o = t.size
			if (o !== e.size) return !1
			if (!o) return !0
			for (var a = Array(o), u = t.entries(), c = 0; (n = u.next()) && !n.done; ) {
				for (var l = e.entries(), s = !1, f = 0; (i = l.next()) && !i.done; ) {
					if (a[f]) {
						f++
						continue
					}
					var p = n.value,
						d = i.value
					if (r.equals(p[0], d[0], c, f, t, e, r) && r.equals(p[1], d[1], p[0], d[0], t, e, r)) {
						s = a[f] = !0
						break
					}
					f++
				}
				if (!s) return !1
				c++
			}
			return !0
		}
		function tI(t, e, r) {
			var n = tA(t),
				i = n.length
			if (tA(e).length !== i) return !1
			for (; i-- > 0; ) if (!tU(t, e, r, n[i])) return !1
			return !0
		}
		function tC(t, e, r) {
			var n,
				i,
				o,
				a = tS(t),
				u = a.length
			if (tS(e).length !== u) return !1
			for (; u-- > 0; )
				if (
					!tU(t, e, r, (n = a[u])) ||
					((i = tP(t, n)),
					(o = tP(e, n)),
					(i || o) &&
						(!i ||
							!o ||
							i.configurable !== o.configurable ||
							i.enumerable !== o.enumerable ||
							i.writable !== o.writable))
				)
					return !1
			return !0
		}
		function tD(t, e) {
			return tE(t.valueOf(), e.valueOf())
		}
		function tR(t, e) {
			return t.source === e.source && t.flags === e.flags
		}
		function tB(t, e, r) {
			var n,
				i,
				o = t.size
			if (o !== e.size) return !1
			if (!o) return !0
			for (var a = Array(o), u = t.values(); (n = u.next()) && !n.done; ) {
				for (var c = e.values(), l = !1, s = 0; (i = c.next()) && !i.done; ) {
					if (!a[s] && r.equals(n.value, i.value, n.value, i.value, t, e, r)) {
						l = a[s] = !0
						break
					}
					s++
				}
				if (!l) return !1
			}
			return !0
		}
		function tL(t, e) {
			var r = t.length
			if (e.length !== r) return !1
			for (; r-- > 0; ) if (t[r] !== e[r]) return !1
			return !0
		}
		function tz(t, e) {
			return (
				t.hostname === e.hostname &&
				t.pathname === e.pathname &&
				t.protocol === e.protocol &&
				t.port === e.port &&
				t.hash === e.hash &&
				t.username === e.username &&
				t.password === e.password
			)
		}
		function tU(t, e, r, n) {
			return (
				(("_owner" === n || "__o" === n || "__v" === n) && (!!t.$$typeof || !!e.$$typeof)) ||
				(tj(e, n) && r.equals(t[n], e[n], n, n, t, e, r))
			)
		}
		var tF = Array.isArray,
			tq = "function" == typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView : null,
			tW = Object.assign,
			tH = Object.prototype.toString.call.bind(Object.prototype.toString),
			t$ = tX()
		function tX(t) {
			void 0 === t && (t = {})
			var e,
				r,
				n,
				i,
				o,
				a,
				u,
				c,
				l,
				s,
				f,
				p,
				d,
				h = t.circular,
				y = t.createInternalComparator,
				v = t.createState,
				m = t.strict,
				b =
					((r = (e = (function (t) {
						var e = t.circular,
							r = t.createCustomConfig,
							n = t.strict,
							i = {
								areArraysEqual: n ? tC : tT,
								areDatesEqual: tk,
								areErrorsEqual: tM,
								areFunctionsEqual: tN,
								areMapsEqual: n ? tO(t_, tC) : t_,
								areNumbersEqual: tE,
								areObjectsEqual: n ? tC : tI,
								arePrimitiveWrappersEqual: tD,
								areRegExpsEqual: tR,
								areSetsEqual: n ? tO(tB, tC) : tB,
								areTypedArraysEqual: n ? tC : tL,
								areUrlsEqual: tz,
							}
						if ((r && (i = tW({}, i, r(i))), e)) {
							var o = tw(i.areArraysEqual),
								a = tw(i.areMapsEqual),
								u = tw(i.areObjectsEqual),
								c = tw(i.areSetsEqual)
							i = tW({}, i, { areArraysEqual: o, areMapsEqual: a, areObjectsEqual: u, areSetsEqual: c })
						}
						return i
					})(t)).areArraysEqual),
					(n = e.areDatesEqual),
					(i = e.areErrorsEqual),
					(o = e.areFunctionsEqual),
					(a = e.areMapsEqual),
					(u = e.areNumbersEqual),
					(c = e.areObjectsEqual),
					(l = e.arePrimitiveWrappersEqual),
					(s = e.areRegExpsEqual),
					(f = e.areSetsEqual),
					(p = e.areTypedArraysEqual),
					(d = e.areUrlsEqual),
					function (t, e, h) {
						if (t === e) return !0
						if (null == t || null == e) return !1
						var y = typeof t
						if (y !== typeof e) return !1
						if ("object" !== y) return "number" === y ? u(t, e, h) : "function" === y && o(t, e, h)
						var v = t.constructor
						if (v !== e.constructor) return !1
						if (v === Object) return c(t, e, h)
						if (tF(t)) return r(t, e, h)
						if (null != tq && tq(t)) return p(t, e, h)
						if (v === Date) return n(t, e, h)
						if (v === RegExp) return s(t, e, h)
						if (v === Map) return a(t, e, h)
						if (v === Set) return f(t, e, h)
						var m = tH(t)
						return "[object Date]" === m
							? n(t, e, h)
							: "[object RegExp]" === m
								? s(t, e, h)
								: "[object Map]" === m
									? a(t, e, h)
									: "[object Set]" === m
										? f(t, e, h)
										: "[object Object]" === m
											? "function" != typeof t.then && "function" != typeof e.then && c(t, e, h)
											: "[object URL]" === m
												? d(t, e, h)
												: "[object Error]" === m
													? i(t, e, h)
													: "[object Arguments]" === m
														? c(t, e, h)
														: ("[object Boolean]" === m ||
																"[object Number]" === m ||
																"[object String]" === m) &&
															l(t, e, h)
					}),
				g = y
					? y(b)
					: function (t, e, r, n, i, o, a) {
							return b(t, e, a)
						}
			return (function (t) {
				var e = t.circular,
					r = t.comparator,
					n = t.createState,
					i = t.equals,
					o = t.strict
				if (n)
					return function (t, a) {
						var u = n(),
							c = u.cache
						return r(t, a, {
							cache: void 0 === c ? (e ? new WeakMap() : void 0) : c,
							equals: i,
							meta: u.meta,
							strict: o,
						})
					}
				if (e)
					return function (t, e) {
						return r(t, e, { cache: new WeakMap(), equals: i, meta: void 0, strict: o })
					}
				var a = { cache: void 0, equals: i, meta: void 0, strict: o }
				return function (t, e) {
					return r(t, e, a)
				}
			})({ circular: void 0 !== h && h, comparator: b, createState: v, equals: g, strict: void 0 !== m && m })
		}
		function tK(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
				r = -1
			requestAnimationFrame(function n(i) {
				if ((r < 0 && (r = i), i - r > e)) t(i), (r = -1)
				else {
					var o
					;(o = n), "u" > typeof requestAnimationFrame && requestAnimationFrame(o)
				}
			})
		}
		function tQ(t) {
			return (tQ =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function tG(t, e) {
			;(null == e || e > t.length) && (e = t.length)
			for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r]
			return n
		}
		function tV(t) {
			return (tV =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function tY(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function tZ(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? tY(Object(r), !0).forEach(function (e) {
							tJ(t, e, r[e])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: tY(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		function tJ(t, e, r) {
			var n
			return (
				((n = (function (t, e) {
					if ("object" !== tV(t) || null === t) return t
					var r = t[Symbol.toPrimitive]
					if (void 0 !== r) {
						var n = r.call(t, e || "default")
						if ("object" !== tV(n)) return n
						throw TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === e ? String : Number)(t)
				})(e, "string")),
				(e = "symbol" === tV(n) ? n : String(n)) in t)
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		tX({ strict: !0 }),
			tX({ circular: !0 }),
			tX({ circular: !0, strict: !0 }),
			tX({
				createInternalComparator: function () {
					return tE
				},
			}),
			tX({
				strict: !0,
				createInternalComparator: function () {
					return tE
				},
			}),
			tX({
				circular: !0,
				createInternalComparator: function () {
					return tE
				},
			}),
			tX({
				circular: !0,
				createInternalComparator: function () {
					return tE
				},
				strict: !0,
			})
		var t0 = function (t) {
				return t
			},
			t1 = function (t, e) {
				return Object.keys(e).reduce(function (r, n) {
					return tZ(tZ({}, r), {}, tJ({}, n, t(n, e[n])))
				}, {})
			},
			t2 = function (t, e, r) {
				return t
					.map(function (t) {
						return ""
							.concat(
								t.replace(/([A-Z])/g, function (t) {
									return "-".concat(t.toLowerCase())
								}),
								" ",
							)
							.concat(e, "ms ")
							.concat(r)
					})
					.join(",")
			},
			t5 = function (t, e, r, n, i, o, a, u) {}
		function t3(t, e) {
			if (t) {
				if ("string" == typeof t) return t6(t, e)
				var r = Object.prototype.toString.call(t).slice(8, -1)
				if (("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r))
					return Array.from(t)
				if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return t6(t, e)
			}
		}
		function t6(t, e) {
			;(null == e || e > t.length) && (e = t.length)
			for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r]
			return n
		}
		var t8 = function (t, e) {
				return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1]
			},
			t4 = function (t, e) {
				return t
					.map(function (t, r) {
						return t * Math.pow(e, r)
					})
					.reduce(function (t, e) {
						return t + e
					})
			},
			t7 = function (t, e) {
				return function (r) {
					return t4(t8(t, e), r)
				}
			},
			t9 = function () {
				for (var t, e, r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i]
				var o = n[0],
					a = n[1],
					u = n[2],
					c = n[3]
				if (1 === n.length)
					switch (n[0]) {
						case "linear":
							;(o = 0), (a = 0), (u = 1), (c = 1)
							break
						case "ease":
							;(o = 0.25), (a = 0.1), (u = 0.25), (c = 1)
							break
						case "ease-in":
							;(o = 0.42), (a = 0), (u = 1), (c = 1)
							break
						case "ease-out":
							;(o = 0.42), (a = 0), (u = 0.58), (c = 1)
							break
						case "ease-in-out":
							;(o = 0), (a = 0), (u = 0.58), (c = 1)
							break
						default:
							var l = n[0].split("(")
							if ("cubic-bezier" === l[0] && 4 === l[1].split(")")[0].split(",").length) {
								var s,
									f =
										(function (t) {
											if (Array.isArray(t)) return t
										})(
											(s = l[1]
												.split(")")[0]
												.split(",")
												.map(function (t) {
													return parseFloat(t)
												})),
										) ||
										(function (t, e) {
											var r =
												null == t
													? null
													: ("u" > typeof Symbol && t[Symbol.iterator]) || t["@@iterator"]
											if (null != r) {
												var n,
													i,
													o,
													a,
													u = [],
													c = !0,
													l = !1
												try {
													;(o = (r = r.call(t)).next), !1
													for (
														;
														!(c = (n = o.call(r)).done) &&
														(u.push(n.value), 4 !== u.length);
														c = !0
													);
												} catch (t) {
													;(l = !0), (i = t)
												} finally {
													try {
														if (
															!c &&
															null != r.return &&
															((a = r.return()), Object(a) !== a)
														)
															return
													} finally {
														if (l) throw i
													}
												}
												return u
											}
										})(s, 4) ||
										t3(s, 4) ||
										(function () {
											throw TypeError(
												"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
											)
										})()
								;(o = f[0]), (a = f[1]), (u = f[2]), (c = f[3])
							} else
								t5(
									!1,
									"[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s",
									n,
								)
					}
				t5(
					[o, u, a, c].every(function (t) {
						return "number" == typeof t && t >= 0 && t <= 1
					}),
					"[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s",
					n,
				)
				var p = t7(o, u),
					d = t7(a, c),
					h =
						((t = o),
						(e = u),
						function (r) {
							var n
							return t4(
								[].concat(
									(function (t) {
										if (Array.isArray(t)) return t6(t)
									})(
										(n = t8(t, e)
											.map(function (t, e) {
												return t * e
											})
											.slice(1)),
									) ||
										(function (t) {
											if (
												("u" > typeof Symbol && null != t[Symbol.iterator]) ||
												null != t["@@iterator"]
											)
												return Array.from(t)
										})(n) ||
										t3(n) ||
										(function () {
											throw TypeError(
												"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
											)
										})(),
									[0],
								),
								r,
							)
						}),
					y = function (t) {
						for (var e = t > 1 ? 1 : t, r = e, n = 0; n < 8; ++n) {
							var i,
								o = p(r) - e,
								a = h(r)
							if (1e-4 > Math.abs(o - e) || a < 1e-4) break
							r = (i = r - o / a) > 1 ? 1 : i < 0 ? 0 : i
						}
						return d(r)
					}
				return (y.isStepper = !1), y
			},
			et = function () {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					e = t.stiff,
					r = void 0 === e ? 100 : e,
					n = t.damping,
					i = void 0 === n ? 8 : n,
					o = t.dt,
					a = void 0 === o ? 17 : o,
					u = function (t, e, n) {
						var o = n + ((-(t - e) * r - n * i) * a) / 1e3,
							u = (n * a) / 1e3 + t
						return 1e-4 > Math.abs(u - e) && 1e-4 > Math.abs(o) ? [e, 0] : [u, o]
					}
				return (u.isStepper = !0), (u.dt = a), u
			},
			ee = function () {
				for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r]
				var n = e[0]
				if ("string" == typeof n)
					switch (n) {
						case "ease":
						case "ease-in-out":
						case "ease-out":
						case "ease-in":
						case "linear":
							return t9(n)
						case "spring":
							return et()
						default:
							if ("cubic-bezier" === n.split("(")[0]) return t9(n)
							t5(
								!1,
								"[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s",
								e,
							)
					}
				return "function" == typeof n
					? n
					: (t5(
							!1,
							"[configEasing]: first argument type should be function or string, instead received %s",
							e,
						),
						null)
			}
		function er(t) {
			return (er =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function en(t) {
			return (
				(function (t) {
					if (Array.isArray(t)) return ec(t)
				})(t) ||
				(function (t) {
					if (("u" > typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"])
						return Array.from(t)
				})(t) ||
				eu(t) ||
				(function () {
					throw TypeError(
						"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function ei(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function eo(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? ei(Object(r), !0).forEach(function (e) {
							ea(t, e, r[e])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: ei(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		function ea(t, e, r) {
			var n
			return (
				((n = (function (t, e) {
					if ("object" !== er(t) || null === t) return t
					var r = t[Symbol.toPrimitive]
					if (void 0 !== r) {
						var n = r.call(t, e || "default")
						if ("object" !== er(n)) return n
						throw TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === e ? String : Number)(t)
				})(e, "string")),
				(e = "symbol" === er(n) ? n : String(n)) in t)
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		function eu(t, e) {
			if (t) {
				if ("string" == typeof t) return ec(t, e)
				var r = Object.prototype.toString.call(t).slice(8, -1)
				if (("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r))
					return Array.from(t)
				if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ec(t, e)
			}
		}
		function ec(t, e) {
			;(null == e || e > t.length) && (e = t.length)
			for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r]
			return n
		}
		var el = function (t, e, r) {
				return t + (e - t) * r
			},
			es = function (t) {
				return t.from !== t.to
			},
			ef = function t(e, r, n) {
				var i = t1(function (t, r) {
					if (es(r)) {
						var n,
							i =
								(function (t) {
									if (Array.isArray(t)) return t
								})((n = e(r.from, r.to, r.velocity))) ||
								(function (t, e) {
									var r =
										null == t
											? null
											: ("u" > typeof Symbol && t[Symbol.iterator]) || t["@@iterator"]
									if (null != r) {
										var n,
											i,
											o,
											a,
											u = [],
											c = !0,
											l = !1
										try {
											;(o = (r = r.call(t)).next), !1
											for (
												;
												!(c = (n = o.call(r)).done) && (u.push(n.value), 2 !== u.length);
												c = !0
											);
										} catch (t) {
											;(l = !0), (i = t)
										} finally {
											try {
												if (!c && null != r.return && ((a = r.return()), Object(a) !== a))
													return
											} finally {
												if (l) throw i
											}
										}
										return u
									}
								})(n, 2) ||
								eu(n, 2) ||
								(function () {
									throw TypeError(
										"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
									)
								})(),
							o = i[0],
							a = i[1]
						return eo(eo({}, r), {}, { from: o, velocity: a })
					}
					return r
				}, r)
				return n < 1
					? t1(function (t, e) {
							return es(e)
								? eo(
										eo({}, e),
										{},
										{ velocity: el(e.velocity, i[t].velocity, n), from: el(e.from, i[t].from, n) },
									)
								: e
						}, r)
					: t(e, i, n - 1)
			}
		let ep = function (t, e, r, n, i) {
			var o,
				a,
				u = [Object.keys(t), Object.keys(e)].reduce(function (t, e) {
					return t.filter(function (t) {
						return e.includes(t)
					})
				}),
				c = u.reduce(function (r, n) {
					return eo(eo({}, r), {}, ea({}, n, [t[n], e[n]]))
				}, {}),
				l = u.reduce(function (r, n) {
					return eo(eo({}, r), {}, ea({}, n, { from: t[n], velocity: 0, to: e[n] }))
				}, {}),
				s = -1,
				f = function () {
					return null
				}
			return (
				(f = r.isStepper
					? function (n) {
							o || (o = n)
							var a = (n - o) / r.dt
							;(l = ef(r, l, a)),
								i(
									eo(
										eo(eo({}, t), e),
										t1(function (t, e) {
											return e.from
										}, l),
									),
								),
								(o = n),
								Object.values(l).filter(es).length && (s = requestAnimationFrame(f))
						}
					: function (o) {
							a || (a = o)
							var u = (o - a) / n,
								l = t1(function (t, e) {
									return el.apply(void 0, en(e).concat([r(u)]))
								}, c)
							if ((i(eo(eo(eo({}, t), e), l)), u < 1)) s = requestAnimationFrame(f)
							else {
								var p = t1(function (t, e) {
									return el.apply(void 0, en(e).concat([r(1)]))
								}, c)
								i(eo(eo(eo({}, t), e), p))
							}
						}),
				function () {
					return (
						requestAnimationFrame(f),
						function () {
							cancelAnimationFrame(s)
						}
					)
				}
			)
		}
		function ed(t) {
			return (ed =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		var eh = [
			"children",
			"begin",
			"duration",
			"attributeName",
			"easing",
			"isActive",
			"steps",
			"from",
			"to",
			"canBegin",
			"onAnimationEnd",
			"shouldReAnimate",
			"onAnimationReStart",
		]
		function ey(t) {
			return (
				(function (t) {
					if (Array.isArray(t)) return ev(t)
				})(t) ||
				(function (t) {
					if (("u" > typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"])
						return Array.from(t)
				})(t) ||
				(function (t, e) {
					if (t) {
						if ("string" == typeof t) return ev(t, void 0)
						var r = Object.prototype.toString.call(t).slice(8, -1)
						if (("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r))
							return Array.from(t)
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
							return ev(t, void 0)
					}
				})(t) ||
				(function () {
					throw TypeError(
						"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function ev(t, e) {
			;(null == e || e > t.length) && (e = t.length)
			for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r]
			return n
		}
		function em(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function eb(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? em(Object(r), !0).forEach(function (e) {
							eg(t, e, r[e])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: em(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		function eg(t, e, r) {
			return (
				(e = ex(e)) in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		function ex(t) {
			var e = (function (t, e) {
				if ("object" !== ed(t) || null === t) return t
				var r = t[Symbol.toPrimitive]
				if (void 0 !== r) {
					var n = r.call(t, e || "default")
					if ("object" !== ed(n)) return n
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === e ? String : Number)(t)
			})(t, "string")
			return "symbol" === ed(e) ? e : String(e)
		}
		function eO(t, e) {
			return (eO = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (t, e) {
						return (t.__proto__ = e), t
					})(t, e)
		}
		function ew(t, e) {
			if (e && ("object" === ed(e) || "function" == typeof e)) return e
			if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined")
			return eS(t)
		}
		function eS(t) {
			if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called")
			return t
		}
		function ej(t) {
			return (ej = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					})(t)
		}
		var eE = (function (t) {
			if ("function" != typeof t && null !== t)
				throw TypeError("Super expression must either be null or a function")
			;(i.prototype = Object.create(t && t.prototype, {
				constructor: { value: i, writable: !0, configurable: !0 },
			})),
				Object.defineProperty(i, "prototype", { writable: !1 }),
				t && eO(i, t)
			var e,
				r,
				n =
					((e = (function () {
						if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1
						if ("function" == typeof Proxy) return !0
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
						} catch (t) {
							return !1
						}
					})()),
					function () {
						var t,
							r = ej(i)
						return (
							(t = e ? Reflect.construct(r, arguments, ej(this).constructor) : r.apply(this, arguments)),
							ew(this, t)
						)
					})
			function i(t, e) {
				if (!(this instanceof i)) throw TypeError("Cannot call a class as a function")
				var r = n.call(this, t, e),
					o = r.props,
					a = o.isActive,
					u = o.attributeName,
					c = o.from,
					l = o.to,
					s = o.steps,
					f = o.children,
					p = o.duration
				if (
					((r.handleStyleChange = r.handleStyleChange.bind(eS(r))),
					(r.changeStyle = r.changeStyle.bind(eS(r))),
					!a || p <= 0)
				)
					return (r.state = { style: {} }), "function" == typeof f && (r.state = { style: l }), ew(r)
				if (s && s.length) r.state = { style: s[0].style }
				else if (c) {
					if ("function" == typeof f) return (r.state = { style: c }), ew(r)
					r.state = { style: u ? eg({}, u, c) : c }
				} else r.state = { style: {} }
				return r
			}
			return (
				(r = [
					{
						key: "componentDidMount",
						value: function () {
							var t = this.props,
								e = t.isActive,
								r = t.canBegin
							;(this.mounted = !0), e && r && this.runAnimation(this.props)
						},
					},
					{
						key: "componentDidUpdate",
						value: function (t) {
							var e = this.props,
								r = e.isActive,
								n = e.canBegin,
								i = e.attributeName,
								o = e.shouldReAnimate,
								a = e.to,
								u = e.from,
								c = this.state.style
							if (n) {
								if (!r) {
									var l = { style: i ? eg({}, i, a) : a }
									this.state && c && ((i && c[i] !== a) || (!i && c !== a)) && this.setState(l)
									return
								}
								if (!t$(t.to, a) || !t.canBegin || !t.isActive) {
									var s = !t.canBegin || !t.isActive
									this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation()
									var f = s || o ? u : t.to
									if (this.state && c) {
										var p = { style: i ? eg({}, i, f) : f }
										;((i && c[i] !== f) || (!i && c !== f)) && this.setState(p)
									}
									this.runAnimation(eb(eb({}, this.props), {}, { from: f, begin: 0 }))
								}
							}
						},
					},
					{
						key: "componentWillUnmount",
						value: function () {
							this.mounted = !1
							var t = this.props.onAnimationEnd
							this.unSubscribe && this.unSubscribe(),
								this.manager && (this.manager.stop(), (this.manager = null)),
								this.stopJSAnimation && this.stopJSAnimation(),
								t && t()
						},
					},
					{
						key: "handleStyleChange",
						value: function (t) {
							this.changeStyle(t)
						},
					},
					{
						key: "changeStyle",
						value: function (t) {
							this.mounted && this.setState({ style: t })
						},
					},
					{
						key: "runJSAnimation",
						value: function (t) {
							var e = this,
								r = t.from,
								n = t.to,
								i = t.duration,
								o = t.easing,
								a = t.begin,
								u = t.onAnimationEnd,
								c = t.onAnimationStart,
								l = ep(r, n, ee(o), i, this.changeStyle)
							this.manager.start([
								c,
								a,
								function () {
									e.stopJSAnimation = l()
								},
								i,
								u,
							])
						},
					},
					{
						key: "runStepAnimation",
						value: function (t) {
							var e = this,
								r = t.steps,
								n = t.begin,
								i = t.onAnimationStart,
								o = r[0],
								a = o.style,
								u = o.duration
							return this.manager.start(
								[i].concat(
									ey(
										r.reduce(
											function (t, n, i) {
												if (0 === i) return t
												var o = n.duration,
													a = n.easing,
													u = void 0 === a ? "ease" : a,
													c = n.style,
													l = n.properties,
													s = n.onAnimationEnd,
													f = i > 0 ? r[i - 1] : n,
													p = l || Object.keys(c)
												if ("function" == typeof u || "spring" === u)
													return [].concat(ey(t), [
														e.runJSAnimation.bind(e, {
															from: f.style,
															to: c,
															duration: o,
															easing: u,
														}),
														o,
													])
												var d = t2(p, o, u),
													h = eb(eb(eb({}, f.style), c), {}, { transition: d })
												return [].concat(ey(t), [h, o, s]).filter(t0)
											},
											[a, Math.max(void 0 === u ? 0 : u, n)],
										),
									),
									[t.onAnimationEnd],
								),
							)
						},
					},
					{
						key: "runAnimation",
						value: function (t) {
							this.manager ||
								(this.manager =
									((e = function () {
										return null
									}),
									(r = !1),
									(n = function t(n) {
										if (!r) {
											if (Array.isArray(n)) {
												if (!n.length) return
												var i =
														(function (t) {
															if (Array.isArray(t)) return t
														})(n) ||
														(function (t) {
															if (
																("u" > typeof Symbol && null != t[Symbol.iterator]) ||
																null != t["@@iterator"]
															)
																return Array.from(t)
														})(n) ||
														(function (t, e) {
															if (t) {
																if ("string" == typeof t) return tG(t, void 0)
																var r = Object.prototype.toString.call(t).slice(8, -1)
																if (
																	("Object" === r &&
																		t.constructor &&
																		(r = t.constructor.name),
																	"Map" === r || "Set" === r)
																)
																	return Array.from(t)
																if (
																	"Arguments" === r ||
																	/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
																)
																	return tG(t, void 0)
															}
														})(n) ||
														(function () {
															throw TypeError(
																"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
															)
														})(),
													o = i[0],
													a = i.slice(1)
												return "number" == typeof o
													? void tK(t.bind(null, a), o)
													: (t(o), void tK(t.bind(null, a)))
											}
											"object" === tQ(n) && e(n), "function" == typeof n && n()
										}
									}),
									{
										stop: function () {
											r = !0
										},
										start: function (t) {
											;(r = !1), n(t)
										},
										subscribe: function (t) {
											return (
												(e = t),
												function () {
													e = function () {
														return null
													}
												}
											)
										},
									}))
							var e,
								r,
								n,
								i = t.begin,
								o = t.duration,
								a = t.attributeName,
								u = t.to,
								c = t.easing,
								l = t.onAnimationStart,
								s = t.onAnimationEnd,
								f = t.steps,
								p = t.children,
								d = this.manager
							if (
								((this.unSubscribe = d.subscribe(this.handleStyleChange)),
								"function" == typeof c || "function" == typeof p || "spring" === c)
							)
								return void this.runJSAnimation(t)
							if (f.length > 1) return void this.runStepAnimation(t)
							var h = a ? eg({}, a, u) : u,
								y = t2(Object.keys(h), o, c)
							d.start([l, i, eb(eb({}, h), {}, { transition: y }), o, s])
						},
					},
					{
						key: "render",
						value: function () {
							var t = this.props,
								e = t.children,
								r = (t.begin, t.duration),
								n = (t.attributeName, t.easing, t.isActive),
								i =
									(t.steps,
									t.from,
									t.to,
									t.canBegin,
									t.onAnimationEnd,
									t.shouldReAnimate,
									t.onAnimationReStart,
									(function (t, e) {
										if (null == t) return {}
										var r,
											n,
											i = (function (t, e) {
												if (null == t) return {}
												var r,
													n,
													i = {},
													o = Object.keys(t)
												for (n = 0; n < o.length; n++)
													(r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r])
												return i
											})(t, e)
										if (Object.getOwnPropertySymbols) {
											var o = Object.getOwnPropertySymbols(t)
											for (n = 0; n < o.length; n++)
												(r = o[n]),
													!(e.indexOf(r) >= 0) &&
														Object.prototype.propertyIsEnumerable.call(t, r) &&
														(i[r] = t[r])
										}
										return i
									})(t, eh)),
								o = A.Children.count(e),
								a = this.state.style
							if ("function" == typeof e) return e(a)
							if (!n || 0 === o || r <= 0) return e
							var u = function (t) {
								var e = t.props,
									r = e.style,
									n = e.className
								return (0, A.cloneElement)(
									t,
									eb(eb({}, i), {}, { style: eb(eb({}, void 0 === r ? {} : r), a), className: n }),
								)
							}
							return 1 === o
								? u(A.Children.only(e))
								: A.default.createElement(
										"div",
										null,
										A.Children.map(e, function (t) {
											return u(t)
										}),
									)
						},
					},
				]),
				(function (t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r]
						;(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(t, ex(n.key), n)
					}
				})(i.prototype, r),
				Object.defineProperty(i, "prototype", { writable: !1 }),
				i
			)
		})(A.PureComponent)
		function eP(t, e) {
			if (null == t) return {}
			var r = {}
			for (var n in t)
				if ({}.hasOwnProperty.call(t, n)) {
					if (-1 !== e.indexOf(n)) continue
					r[n] = t[n]
				}
			return r
		}
		function eA() {
			return (eA = Object.assign.bind()).apply(null, arguments)
		}
		function eT(t, e) {
			return (eT = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (t, e) {
						return (t.__proto__ = e), t
					})(t, e)
		}
		function ek(t, e) {
			;(t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), eT(t, e)
		}
		;(eE.displayName = "Animate"),
			(eE.defaultProps = {
				begin: 0,
				duration: 1e3,
				from: "",
				to: "",
				attributeName: "",
				easing: "ease",
				isActive: !0,
				canBegin: !0,
				steps: [],
				onAnimationEnd: function () {},
				onAnimationStart: function () {},
			}),
			(eE.propTypes = {
				from: tm.default.oneOfType([tm.default.object, tm.default.string]),
				to: tm.default.oneOfType([tm.default.object, tm.default.string]),
				attributeName: tm.default.string,
				duration: tm.default.number,
				begin: tm.default.number,
				easing: tm.default.oneOfType([tm.default.string, tm.default.func]),
				steps: tm.default.arrayOf(
					tm.default.shape({
						duration: tm.default.number.isRequired,
						style: tm.default.object.isRequired,
						easing: tm.default.oneOfType([
							tm.default.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]),
							tm.default.func,
						]),
						properties: tm.default.arrayOf("string"),
						onAnimationEnd: tm.default.func,
					}),
				),
				children: tm.default.oneOfType([tm.default.node, tm.default.func]),
				isActive: tm.default.bool,
				canBegin: tm.default.bool,
				onAnimationEnd: tm.default.func,
				shouldReAnimate: tm.default.bool,
				onAnimationStart: tm.default.func,
				onAnimationReStart: tm.default.func,
			})
		let eM = A.default.createContext(null)
		function eN(t, e) {
			var r = Object.create(null)
			return (
				t &&
					A.Children.map(t, function (t) {
						return t
					}).forEach(function (t) {
						r[t.key] = e && (0, A.isValidElement)(t) ? e(t) : t
					}),
				r
			)
		}
		function e_(t, e, r) {
			return null != r[e] ? r[e] : t.props[e]
		}
		var eI =
				Object.values ||
				function (t) {
					return Object.keys(t).map(function (e) {
						return t[e]
					})
				},
			eC = (function (t) {
				function e(e, r) {
					var n = t.call(this, e, r) || this,
						i = n.handleExited.bind(
							(function (t) {
								if (void 0 === t)
									throw ReferenceError("this hasn't been initialised - super() hasn't been called")
								return t
							})(n),
						)
					return (n.state = { contextValue: { isMounting: !0 }, handleExited: i, firstRender: !0 }), n
				}
				ek(e, t)
				var r = e.prototype
				return (
					(r.componentDidMount = function () {
						;(this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } })
					}),
					(r.componentWillUnmount = function () {
						this.mounted = !1
					}),
					(e.getDerivedStateFromProps = function (t, e) {
						var r,
							n,
							i = e.children,
							o = e.handleExited
						return {
							children: e.firstRender
								? eN(t.children, function (e) {
										return (0, A.cloneElement)(e, {
											onExited: o.bind(null, e),
											in: !0,
											appear: e_(e, "appear", t),
											enter: e_(e, "enter", t),
											exit: e_(e, "exit", t),
										})
									})
								: (Object.keys(
										(n = (function (t, e) {
											function r(r) {
												return r in e ? e[r] : t[r]
											}
											;(t = t || {}), (e = e || {})
											var n,
												i = Object.create(null),
												o = []
											for (var a in t) a in e ? o.length && ((i[a] = o), (o = [])) : o.push(a)
											var u = {}
											for (var c in e) {
												if (i[c])
													for (n = 0; n < i[c].length; n++) {
														var l = i[c][n]
														u[i[c][n]] = r(l)
													}
												u[c] = r(c)
											}
											for (n = 0; n < o.length; n++) u[o[n]] = r(o[n])
											return u
										})(i, (r = eN(t.children)))),
									).forEach(function (e) {
										var a = n[e]
										if ((0, A.isValidElement)(a)) {
											var u = e in i,
												c = e in r,
												l = i[e],
												s = (0, A.isValidElement)(l) && !l.props.in
											c && (!u || s)
												? (n[e] = (0, A.cloneElement)(a, {
														onExited: o.bind(null, a),
														in: !0,
														exit: e_(a, "exit", t),
														enter: e_(a, "enter", t),
													}))
												: c || !u || s
													? c &&
														u &&
														(0, A.isValidElement)(l) &&
														(n[e] = (0, A.cloneElement)(a, {
															onExited: o.bind(null, a),
															in: l.props.in,
															exit: e_(a, "exit", t),
															enter: e_(a, "enter", t),
														}))
													: (n[e] = (0, A.cloneElement)(a, { in: !1 }))
										}
									}),
									n),
							firstRender: !1,
						}
					}),
					(r.handleExited = function (t, e) {
						var r = eN(this.props.children)
						t.key in r ||
							(t.props.onExited && t.props.onExited(e),
							this.mounted &&
								this.setState(function (e) {
									var r = eA({}, e.children)
									return delete r[t.key], { children: r }
								}))
					}),
					(r.render = function () {
						var t = this.props,
							e = t.component,
							r = t.childFactory,
							n = eP(t, ["component", "childFactory"]),
							i = this.state.contextValue,
							o = eI(this.state.children).map(r)
						return (delete n.appear, delete n.enter, delete n.exit, null === e)
							? A.default.createElement(eM.Provider, { value: i }, o)
							: A.default.createElement(eM.Provider, { value: i }, A.default.createElement(e, n, o))
					}),
					e
				)
			})(A.default.Component)
		;(eC.propTypes = {}),
			(eC.defaultProps = {
				component: "div",
				childFactory: function (t) {
					return t
				},
			})
		var eD = t.i(68069),
			eR = "unmounted",
			eB = "exited",
			eL = "entering",
			ez = "entered",
			eU = "exiting",
			eF = (function (t) {
				function e(e, r) {
					var n,
						i = t.call(this, e, r) || this,
						o = r && !r.isMounting ? e.enter : e.appear
					return (
						(i.appearStatus = null),
						e.in
							? o
								? ((n = eB), (i.appearStatus = eL))
								: (n = ez)
							: (n = e.unmountOnExit || e.mountOnEnter ? eR : eB),
						(i.state = { status: n }),
						(i.nextCallback = null),
						i
					)
				}
				ek(e, t),
					(e.getDerivedStateFromProps = function (t, e) {
						return t.in && e.status === eR ? { status: eB } : null
					})
				var r = e.prototype
				return (
					(r.componentDidMount = function () {
						this.updateStatus(!0, this.appearStatus)
					}),
					(r.componentDidUpdate = function (t) {
						var e = null
						if (t !== this.props) {
							var r = this.state.status
							this.props.in ? r !== eL && r !== ez && (e = eL) : (r === eL || r === ez) && (e = eU)
						}
						this.updateStatus(!1, e)
					}),
					(r.componentWillUnmount = function () {
						this.cancelNextCallback()
					}),
					(r.getTimeouts = function () {
						var t,
							e,
							r,
							n = this.props.timeout
						return (
							(t = e = r = n),
							null != n &&
								"number" != typeof n &&
								((t = n.exit), (e = n.enter), (r = void 0 !== n.appear ? n.appear : e)),
							{ exit: t, enter: e, appear: r }
						)
					}),
					(r.updateStatus = function (t, e) {
						if ((void 0 === t && (t = !1), null !== e))
							if ((this.cancelNextCallback(), e === eL)) {
								if (this.props.unmountOnExit || this.props.mountOnEnter) {
									var r = this.props.nodeRef
										? this.props.nodeRef.current
										: eD.default.findDOMNode(this)
									r && r.scrollTop
								}
								this.performEnter(t)
							} else this.performExit()
						else this.props.unmountOnExit && this.state.status === eB && this.setState({ status: eR })
					}),
					(r.performEnter = function (t) {
						var e = this,
							r = this.props.enter,
							n = this.context ? this.context.isMounting : t,
							i = this.props.nodeRef ? [n] : [eD.default.findDOMNode(this), n],
							o = i[0],
							a = i[1],
							u = this.getTimeouts(),
							c = n ? u.appear : u.enter
						;(t || r) && 1
							? (this.props.onEnter(o, a),
								this.safeSetState({ status: eL }, function () {
									e.props.onEntering(o, a),
										e.onTransitionEnd(c, function () {
											e.safeSetState({ status: ez }, function () {
												e.props.onEntered(o, a)
											})
										})
								}))
							: this.safeSetState({ status: ez }, function () {
									e.props.onEntered(o)
								})
					}),
					(r.performExit = function () {
						var t = this,
							e = this.props.exit,
							r = this.getTimeouts(),
							n = this.props.nodeRef ? void 0 : eD.default.findDOMNode(this)
						e
							? (this.props.onExit(n),
								this.safeSetState({ status: eU }, function () {
									t.props.onExiting(n),
										t.onTransitionEnd(r.exit, function () {
											t.safeSetState({ status: eB }, function () {
												t.props.onExited(n)
											})
										})
								}))
							: this.safeSetState({ status: eB }, function () {
									t.props.onExited(n)
								})
					}),
					(r.cancelNextCallback = function () {
						null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null))
					}),
					(r.safeSetState = function (t, e) {
						;(e = this.setNextCallback(e)), this.setState(t, e)
					}),
					(r.setNextCallback = function (t) {
						var e = this,
							r = !0
						return (
							(this.nextCallback = function (n) {
								r && ((r = !1), (e.nextCallback = null), t(n))
							}),
							(this.nextCallback.cancel = function () {
								r = !1
							}),
							this.nextCallback
						)
					}),
					(r.onTransitionEnd = function (t, e) {
						this.setNextCallback(e)
						var r = this.props.nodeRef ? this.props.nodeRef.current : eD.default.findDOMNode(this),
							n = null == t && !this.props.addEndListener
						if (!r || n) return void setTimeout(this.nextCallback, 0)
						if (this.props.addEndListener) {
							var i = this.props.nodeRef ? [this.nextCallback] : [r, this.nextCallback],
								o = i[0],
								a = i[1]
							this.props.addEndListener(o, a)
						}
						null != t && setTimeout(this.nextCallback, t)
					}),
					(r.render = function () {
						var t = this.state.status
						if (t === eR) return null
						var e = this.props,
							r = e.children,
							n =
								(e.in,
								e.mountOnEnter,
								e.unmountOnExit,
								e.appear,
								e.enter,
								e.exit,
								e.timeout,
								e.addEndListener,
								e.onEnter,
								e.onEntering,
								e.onEntered,
								e.onExit,
								e.onExiting,
								e.onExited,
								e.nodeRef,
								eP(e, [
									"children",
									"in",
									"mountOnEnter",
									"unmountOnExit",
									"appear",
									"enter",
									"exit",
									"timeout",
									"addEndListener",
									"onEnter",
									"onEntering",
									"onEntered",
									"onExit",
									"onExiting",
									"onExited",
									"nodeRef",
								]))
						return A.default.createElement(
							eM.Provider,
							{ value: null },
							"function" == typeof r ? r(t, n) : A.default.cloneElement(A.default.Children.only(r), n),
						)
					}),
					e
				)
			})(A.default.Component)
		function eq() {}
		;(eF.contextType = eM),
			(eF.propTypes = {}),
			(eF.defaultProps = {
				in: !1,
				mountOnEnter: !1,
				unmountOnExit: !1,
				appear: !1,
				enter: !0,
				exit: !0,
				onEnter: eq,
				onEntering: eq,
				onEntered: eq,
				onExit: eq,
				onExiting: eq,
				onExited: eq,
			}),
			(eF.UNMOUNTED = eR),
			(eF.EXITED = eB),
			(eF.ENTERING = eL),
			(eF.ENTERED = ez),
			(eF.EXITING = eU)
		var eW = ["children", "appearOptions", "enterOptions", "leaveOptions"]
		function eH(t) {
			return (eH =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function e$() {
			return (e$ = Object.assign.bind()).apply(this, arguments)
		}
		function eX(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function eK(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? eX(Object(r), !0).forEach(function (e) {
							eY(t, e, r[e])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: eX(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		function eQ(t, e) {
			return (eQ = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (t, e) {
						return (t.__proto__ = e), t
					})(t, e)
		}
		function eG(t) {
			if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called")
			return t
		}
		function eV(t) {
			return (eV = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					})(t)
		}
		function eY(t, e, r) {
			return (
				(e = eZ(e)) in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		function eZ(t) {
			var e = (function (t, e) {
				if ("object" !== eH(t) || null === t) return t
				var r = t[Symbol.toPrimitive]
				if (void 0 !== r) {
					var n = r.call(t, e || "default")
					if ("object" !== eH(n)) return n
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === e ? String : Number)(t)
			})(t, "string")
			return "symbol" === eH(e) ? e : String(e)
		}
		var eJ = function () {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					e = t.steps,
					r = t.duration
				return e && e.length
					? e.reduce(function (t, e) {
							return t + (Number.isFinite(e.duration) && e.duration > 0 ? e.duration : 0)
						}, 0)
					: Number.isFinite(r)
						? r
						: 0
			},
			e0 = (function (t) {
				if ("function" != typeof t && null !== t)
					throw TypeError("Super expression must either be null or a function")
				;(i.prototype = Object.create(t && t.prototype, {
					constructor: { value: i, writable: !0, configurable: !0 },
				})),
					Object.defineProperty(i, "prototype", { writable: !1 }),
					t && eQ(i, t)
				var e,
					r,
					n =
						((e = (function () {
							if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1
							if ("function" == typeof Proxy) return !0
							try {
								return (
									Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
								)
							} catch (t) {
								return !1
							}
						})()),
						function () {
							var t,
								r = eV(i)
							return (
								(t = e
									? Reflect.construct(r, arguments, eV(this).constructor)
									: r.apply(this, arguments)),
								(function (t, e) {
									if (e && ("object" === eH(e) || "function" == typeof e)) return e
									if (void 0 !== e)
										throw TypeError("Derived constructors may only return object or undefined")
									return eG(t)
								})(this, t)
							)
						})
				function i() {
					var t
					if (!(this instanceof i)) throw TypeError("Cannot call a class as a function")
					return (
						eY(eG((t = n.call(this))), "handleEnter", function (e, r) {
							var n = t.props,
								i = n.appearOptions,
								o = n.enterOptions
							t.handleStyleActive(r ? i : o)
						}),
						eY(eG(t), "handleExit", function () {
							var e = t.props.leaveOptions
							t.handleStyleActive(e)
						}),
						(t.state = { isActive: !1 }),
						t
					)
				}
				return (
					(r = [
						{
							key: "handleStyleActive",
							value: function (t) {
								if (t) {
									var e = t.onAnimationEnd
										? function () {
												t.onAnimationEnd()
											}
										: null
									this.setState(eK(eK({}, t), {}, { onAnimationEnd: e, isActive: !0 }))
								}
							},
						},
						{
							key: "parseTimeout",
							value: function () {
								var t = this.props,
									e = t.appearOptions,
									r = t.enterOptions,
									n = t.leaveOptions
								return eJ(e) + eJ(r) + eJ(n)
							},
						},
						{
							key: "render",
							value: function () {
								var t = this,
									e = this.props,
									r = e.children,
									n =
										(e.appearOptions,
										e.enterOptions,
										e.leaveOptions,
										(function (t, e) {
											if (null == t) return {}
											var r,
												n,
												i = (function (t, e) {
													if (null == t) return {}
													var r,
														n,
														i = {},
														o = Object.keys(t)
													for (n = 0; n < o.length; n++)
														(r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r])
													return i
												})(t, e)
											if (Object.getOwnPropertySymbols) {
												var o = Object.getOwnPropertySymbols(t)
												for (n = 0; n < o.length; n++)
													(r = o[n]),
														!(e.indexOf(r) >= 0) &&
															Object.prototype.propertyIsEnumerable.call(t, r) &&
															(i[r] = t[r])
											}
											return i
										})(e, eW))
								return A.default.createElement(
									eF,
									e$({}, n, {
										onEnter: this.handleEnter,
										onExit: this.handleExit,
										timeout: this.parseTimeout(),
									}),
									function () {
										return A.default.createElement(eE, t.state, A.Children.only(r))
									},
								)
							},
						},
					]),
					(function (t, e) {
						for (var r = 0; r < e.length; r++) {
							var n = e[r]
							;(n.enumerable = n.enumerable || !1),
								(n.configurable = !0),
								"value" in n && (n.writable = !0),
								Object.defineProperty(t, eZ(n.key), n)
						}
					})(i.prototype, r),
					Object.defineProperty(i, "prototype", { writable: !1 }),
					i
				)
			})(A.Component)
		function e1(t) {
			var e = t.component,
				r = t.children,
				n = t.appear,
				i = t.enter,
				o = t.leave
			return A.default.createElement(
				eC,
				{ component: e },
				A.Children.map(r, function (t, e) {
					return A.default.createElement(
						e0,
						{ appearOptions: n, enterOptions: i, leaveOptions: o, key: "child-".concat(e) },
						t,
					)
				}),
			)
		}
		function e2(t) {
			return (e2 =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function e5() {
			return (e5 = Object.assign.bind()).apply(this, arguments)
		}
		function e3(t, e) {
			;(null == e || e > t.length) && (e = t.length)
			for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r]
			return n
		}
		function e6(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function e8(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? e6(Object(r), !0).forEach(function (e) {
							var n, i, o
							;(n = t),
								(i = e),
								(o = r[e]),
								(i = (function (t) {
									var e = (function (t, e) {
										if ("object" != e2(t) || !t) return t
										var r = t[Symbol.toPrimitive]
										if (void 0 !== r) {
											var n = r.call(t, e || "default")
											if ("object" != e2(n)) return n
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === e ? String : Number)(t)
									})(t, "string")
									return "symbol" == e2(e) ? e : e + ""
								})(i)) in n
									? Object.defineProperty(n, i, {
											value: o,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (n[i] = o)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: e6(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		;(e0.propTypes = {
			appearOptions: tm.default.object,
			enterOptions: tm.default.object,
			leaveOptions: tm.default.object,
			children: tm.default.element,
		}),
			(e1.propTypes = {
				appear: tm.default.object,
				enter: tm.default.object,
				leave: tm.default.object,
				children: tm.default.oneOfType([tm.default.array, tm.default.element]),
				component: tm.default.any,
			}),
			(e1.defaultProps = { component: "span" })
		var e4 = function (t, e, r, n, i) {
				var o,
					a = Math.min(Math.abs(r) / 2, Math.abs(n) / 2),
					u = n >= 0 ? 1 : -1,
					c = r >= 0 ? 1 : -1,
					l = +((n >= 0 && r >= 0) || (n < 0 && r < 0))
				if (a > 0 && i instanceof Array) {
					for (var s = [0, 0, 0, 0], f = 0; f < 4; f++) s[f] = i[f] > a ? a : i[f]
					;(o = "M".concat(t, ",").concat(e + u * s[0])),
						s[0] > 0 &&
							(o += "A "
								.concat(s[0], ",")
								.concat(s[0], ",0,0,")
								.concat(l, ",")
								.concat(t + c * s[0], ",")
								.concat(e)),
						(o += "L ".concat(t + r - c * s[1], ",").concat(e)),
						s[1] > 0 &&
							(o += "A "
								.concat(s[1], ",")
								.concat(s[1], ",0,0,")
								.concat(l, ",\n        ")
								.concat(t + r, ",")
								.concat(e + u * s[1])),
						(o += "L ".concat(t + r, ",").concat(e + n - u * s[2])),
						s[2] > 0 &&
							(o += "A "
								.concat(s[2], ",")
								.concat(s[2], ",0,0,")
								.concat(l, ",\n        ")
								.concat(t + r - c * s[2], ",")
								.concat(e + n)),
						(o += "L ".concat(t + c * s[3], ",").concat(e + n)),
						s[3] > 0 &&
							(o += "A "
								.concat(s[3], ",")
								.concat(s[3], ",0,0,")
								.concat(l, ",\n        ")
								.concat(t, ",")
								.concat(e + n - u * s[3])),
						(o += "Z")
				} else if (a > 0 && i === +i && i > 0) {
					var p = Math.min(a, i)
					o = "M "
						.concat(t, ",")
						.concat(e + u * p, "\n            A ")
						.concat(p, ",")
						.concat(p, ",0,0,")
						.concat(l, ",")
						.concat(t + c * p, ",")
						.concat(e, "\n            L ")
						.concat(t + r - c * p, ",")
						.concat(e, "\n            A ")
						.concat(p, ",")
						.concat(p, ",0,0,")
						.concat(l, ",")
						.concat(t + r, ",")
						.concat(e + u * p, "\n            L ")
						.concat(t + r, ",")
						.concat(e + n - u * p, "\n            A ")
						.concat(p, ",")
						.concat(p, ",0,0,")
						.concat(l, ",")
						.concat(t + r - c * p, ",")
						.concat(e + n, "\n            L ")
						.concat(t + c * p, ",")
						.concat(e + n, "\n            A ")
						.concat(p, ",")
						.concat(p, ",0,0,")
						.concat(l, ",")
						.concat(t, ",")
						.concat(e + n - u * p, " Z")
				} else o = "M ".concat(t, ",").concat(e, " h ").concat(r, " v ").concat(n, " h ").concat(-r, " Z")
				return o
			},
			e7 = function (t, e) {
				if (!t || !e) return !1
				var r = t.x,
					n = t.y,
					i = e.x,
					o = e.y,
					a = e.width,
					u = e.height
				if (Math.abs(a) > 0 && Math.abs(u) > 0) {
					var c = Math.min(i, i + a),
						l = Math.max(i, i + a),
						s = Math.min(o, o + u),
						f = Math.max(o, o + u)
					return r >= c && r <= l && n >= s && n <= f
				}
				return !1
			},
			e9 = {
				x: 0,
				y: 0,
				width: 0,
				height: 0,
				radius: 0,
				isAnimationActive: !1,
				isUpdateAnimationActive: !1,
				animationBegin: 0,
				animationDuration: 1500,
				animationEasing: "ease",
			},
			rt = function (t) {
				var e,
					r = e8(e8({}, e9), t),
					n = (0, A.useRef)(),
					i =
						(function (t) {
							if (Array.isArray(t)) return t
						})((e = (0, A.useState)(-1))) ||
						(function (t, e) {
							var r = null == t ? null : ("u" > typeof Symbol && t[Symbol.iterator]) || t["@@iterator"]
							if (null != r) {
								var n,
									i,
									o,
									a,
									u = [],
									c = !0,
									l = !1
								try {
									;(o = (r = r.call(t)).next), !1
									for (; !(c = (n = o.call(r)).done) && (u.push(n.value), 2 !== u.length); c = !0);
								} catch (t) {
									;(l = !0), (i = t)
								} finally {
									try {
										if (!c && null != r.return && ((a = r.return()), Object(a) !== a)) return
									} finally {
										if (l) throw i
									}
								}
								return u
							}
						})(e, 2) ||
						(function (t, e) {
							if (t) {
								if ("string" == typeof t) return e3(t, 2)
								var r = Object.prototype.toString.call(t).slice(8, -1)
								if (
									("Object" === r && t.constructor && (r = t.constructor.name),
									"Map" === r || "Set" === r)
								)
									return Array.from(t)
								if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
									return e3(t, 2)
							}
						})(e, 2) ||
						(function () {
							throw TypeError(
								"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
							)
						})(),
					o = i[0],
					a = i[1]
				;(0, A.useEffect)(function () {
					if (n.current && n.current.getTotalLength)
						try {
							var t = n.current.getTotalLength()
							t && a(t)
						} catch (t) {}
				}, [])
				var u = r.x,
					c = r.y,
					l = r.width,
					s = r.height,
					f = r.radius,
					p = r.className,
					d = r.animationEasing,
					h = r.animationDuration,
					y = r.animationBegin,
					v = r.isAnimationActive,
					m = r.isUpdateAnimationActive
				if (u !== +u || c !== +c || l !== +l || s !== +s || 0 === l || 0 === s) return null
				var b = (0, to.default)("recharts-rectangle", p)
				return m
					? A.default.createElement(
							eE,
							{
								canBegin: o > 0,
								from: { width: l, height: s, x: u, y: c },
								to: { width: l, height: s, x: u, y: c },
								duration: h,
								animationEasing: d,
								isActive: m,
							},
							function (t) {
								var e = t.width,
									i = t.height,
									a = t.x,
									u = t.y
								return A.default.createElement(
									eE,
									{
										canBegin: o > 0,
										from: "0px ".concat(-1 === o ? 1 : o, "px"),
										to: "".concat(o, "px 0px"),
										attributeName: "strokeDasharray",
										begin: y,
										duration: h,
										isActive: v,
										easing: d,
									},
									A.default.createElement(
										"path",
										e5({}, (0, tc.filterProps)(r, !0), {
											className: b,
											d: e4(a, u, e, i, f),
											ref: n,
										}),
									),
								)
							},
						)
					: A.default.createElement(
							"path",
							e5({}, (0, tc.filterProps)(r, !0), { className: b, d: e4(u, c, l, s, f) }),
						)
			}
		function re(t, e) {
			switch (arguments.length) {
				case 0:
					break
				case 1:
					this.range(t)
					break
				default:
					this.range(e).domain(t)
			}
			return this
		}
		function rr(t, e) {
			switch (arguments.length) {
				case 0:
					break
				case 1:
					"function" == typeof t ? this.interpolator(t) : this.range(t)
					break
				default:
					this.domain(t), "function" == typeof e ? this.interpolator(e) : this.range(e)
			}
			return this
		}
		t.s([], 85899)
		class rn extends Map {
			constructor(t, e = ro) {
				if (
					(super(),
					Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: e } }),
					null != t)
				)
					for (const [e, r] of t) this.set(e, r)
			}
			get(t) {
				return super.get(ri(this, t))
			}
			has(t) {
				return super.has(ri(this, t))
			}
			set(t, e) {
				return super.set(
					(function ({ _intern: t, _key: e }, r) {
						let n = e(r)
						return t.has(n) ? t.get(n) : (t.set(n, r), r)
					})(this, t),
					e,
				)
			}
			delete(t) {
				return super.delete(
					(function ({ _intern: t, _key: e }, r) {
						let n = e(r)
						return t.has(n) && ((r = t.get(n)), t.delete(n)), r
					})(this, t),
				)
			}
		}
		function ri({ _intern: t, _key: e }, r) {
			let n = e(r)
			return t.has(n) ? t.get(n) : r
		}
		function ro(t) {
			return null !== t && "object" == typeof t ? t.valueOf() : t
		}
		let ra = Symbol("implicit")
		function ru() {
			var t = new rn(),
				e = [],
				r = [],
				n = ra
			function i(i) {
				let o = t.get(i)
				if (void 0 === o) {
					if (n !== ra) return n
					t.set(i, (o = e.push(i) - 1))
				}
				return r[o % r.length]
			}
			return (
				(i.domain = function (r) {
					if (!arguments.length) return e.slice()
					for (let n of ((e = []), (t = new rn()), r)) t.has(n) || t.set(n, e.push(n) - 1)
					return i
				}),
				(i.range = function (t) {
					return arguments.length ? ((r = Array.from(t)), i) : r.slice()
				}),
				(i.unknown = function (t) {
					return arguments.length ? ((n = t), i) : n
				}),
				(i.copy = function () {
					return ru(e, r).unknown(n)
				}),
				re.apply(i, arguments),
				i
			)
		}
		function rc() {
			var t,
				e,
				r = ru().unknown(void 0),
				n = r.domain,
				i = r.range,
				o = 0,
				a = 1,
				u = !1,
				c = 0,
				l = 0,
				s = 0.5
			function f() {
				var r = n().length,
					f = a < o,
					p = f ? a : o,
					d = f ? o : a
				;(t = (d - p) / Math.max(1, r - c + 2 * l)),
					u && (t = Math.floor(t)),
					(p += (d - p - t * (r - c)) * s),
					(e = t * (1 - c)),
					u && ((p = Math.round(p)), (e = Math.round(e)))
				var h = (function (t, e, r) {
					;(t *= 1), (e *= 1), (r = (i = arguments.length) < 2 ? ((e = t), (t = 0), 1) : i < 3 ? 1 : +r)
					for (var n = -1, i = 0 | Math.max(0, Math.ceil((e - t) / r)), o = Array(i); ++n < i; )
						o[n] = t + n * r
					return o
				})(r).map(function (e) {
					return p + t * e
				})
				return i(f ? h.reverse() : h)
			}
			return (
				delete r.unknown,
				(r.domain = function (t) {
					return arguments.length ? (n(t), f()) : n()
				}),
				(r.range = function (t) {
					return arguments.length ? (([o, a] = t), (o *= 1), (a *= 1), f()) : [o, a]
				}),
				(r.rangeRound = function (t) {
					return ([o, a] = t), (o *= 1), (a *= 1), (u = !0), f()
				}),
				(r.bandwidth = function () {
					return e
				}),
				(r.step = function () {
					return t
				}),
				(r.round = function (t) {
					return arguments.length ? ((u = !!t), f()) : u
				}),
				(r.padding = function (t) {
					return arguments.length ? ((c = Math.min(1, (l = +t))), f()) : c
				}),
				(r.paddingInner = function (t) {
					return arguments.length ? ((c = Math.min(1, t)), f()) : c
				}),
				(r.paddingOuter = function (t) {
					return arguments.length ? ((l = +t), f()) : l
				}),
				(r.align = function (t) {
					return arguments.length ? ((s = Math.max(0, Math.min(1, t))), f()) : s
				}),
				(r.copy = function () {
					return rc(n(), [o, a]).round(u).paddingInner(c).paddingOuter(l).align(s)
				}),
				re.apply(f(), arguments)
			)
		}
		function rl() {
			return (function t(e) {
				var r = e.copy
				return (
					(e.padding = e.paddingOuter),
					delete e.paddingInner,
					delete e.paddingOuter,
					(e.copy = function () {
						return t(r())
					}),
					e
				)
			})(rc.apply(null, arguments).paddingInner(1))
		}
		var rs = t.i(88701),
			rf = t.i(46406)
		function rp(t) {
			return (rp =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function rd(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function rh(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? rd(Object(r), !0).forEach(function (e) {
							var n, i, o
							;(n = t),
								(i = e),
								(o = r[e]),
								(i = (function (t) {
									var e = (function (t, e) {
										if ("object" != rp(t) || !t) return t
										var r = t[Symbol.toPrimitive]
										if (void 0 !== r) {
											var n = r.call(t, e || "default")
											if ("object" != rp(n)) return n
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === e ? String : Number)(t)
									})(t, "string")
									return "symbol" == rp(e) ? e : e + ""
								})(i)) in n
									? Object.defineProperty(n, i, {
											value: o,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (n[i] = o)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: rd(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		var ry = { widthCache: {}, cacheCount: 0 },
			rv = {
				position: "absolute",
				top: "-20000px",
				left: 0,
				padding: 0,
				margin: 0,
				border: "none",
				whiteSpace: "pre",
			},
			rm = "recharts_measurement_span",
			rb = function (t) {
				var e,
					r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
				if (null == t || rf.Global.isSsr) return { width: 0, height: 0 }
				var n =
						(Object.keys((e = rh({}, r))).forEach(function (t) {
							e[t] || delete e[t]
						}),
						e),
					i = JSON.stringify({ text: t, copyStyle: n })
				if (ry.widthCache[i]) return ry.widthCache[i]
				try {
					var o = document.getElementById(rm)
					o ||
						((o = document.createElement("span")).setAttribute("id", rm),
						o.setAttribute("aria-hidden", "true"),
						document.body.appendChild(o))
					var a = rh(rh({}, rv), n)
					Object.assign(o.style, a), (o.textContent = "".concat(t))
					var u = o.getBoundingClientRect(),
						c = { width: u.width, height: u.height }
					return (
						(ry.widthCache[i] = c), ++ry.cacheCount > 2e3 && ((ry.cacheCount = 0), (ry.widthCache = {})), c
					)
				} catch (t) {
					return { width: 0, height: 0 }
				}
			}
		function rg(t) {
			return (rg =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function rx(t, e) {
			return (
				(function (t) {
					if (Array.isArray(t)) return t
				})(t) ||
				(function (t, e) {
					var r = null == t ? null : ("u" > typeof Symbol && t[Symbol.iterator]) || t["@@iterator"]
					if (null != r) {
						var n,
							i,
							o,
							a,
							u = [],
							c = !0,
							l = !1
						try {
							if (((o = (r = r.call(t)).next), 0 === e)) {
								if (Object(r) !== r) return
								c = !1
							} else for (; !(c = (n = o.call(r)).done) && (u.push(n.value), u.length !== e); c = !0);
						} catch (t) {
							;(l = !0), (i = t)
						} finally {
							try {
								if (!c && null != r.return && ((a = r.return()), Object(a) !== a)) return
							} finally {
								if (l) throw i
							}
						}
						return u
					}
				})(t, e) ||
				(function (t, e) {
					if (t) {
						if ("string" == typeof t) return rO(t, e)
						var r = Object.prototype.toString.call(t).slice(8, -1)
						if (("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r))
							return Array.from(t)
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rO(t, e)
					}
				})(t, e) ||
				(function () {
					throw TypeError(
						"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function rO(t, e) {
			;(null == e || e > t.length) && (e = t.length)
			for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r]
			return n
		}
		function rw(t, e) {
			for (var r = 0; r < e.length; r++) {
				var n = e[r]
				;(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					"value" in n && (n.writable = !0),
					Object.defineProperty(
						t,
						(function (t) {
							var e = (function (t, e) {
								if ("object" != rg(t) || !t) return t
								var r = t[Symbol.toPrimitive]
								if (void 0 !== r) {
									var n = r.call(t, e || "default")
									if ("object" != rg(n)) return n
									throw TypeError("@@toPrimitive must return a primitive value.")
								}
								return ("string" === e ? String : Number)(t)
							})(t, "string")
							return "symbol" == rg(e) ? e : e + ""
						})(n.key),
						n,
					)
			}
		}
		var rS = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
			rj = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
			rE = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
			rP = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
			rA = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 16, in: 96, Q: 96 / 101.6, px: 1 },
			rT = Object.keys(rA),
			rk = (function () {
				var t, e
				function r(t, e) {
					if (!(this instanceof r)) throw TypeError("Cannot call a class as a function")
					;(this.num = t),
						(this.unit = e),
						(this.num = t),
						(this.unit = e),
						Number.isNaN(t) && (this.unit = ""),
						"" === e || rE.test(e) || ((this.num = NaN), (this.unit = "")),
						rT.includes(e) && ((this.num = t * rA[e]), (this.unit = "px"))
				}
				return (
					(t = [
						{
							key: "add",
							value: function (t) {
								return this.unit !== t.unit ? new r(NaN, "") : new r(this.num + t.num, this.unit)
							},
						},
						{
							key: "subtract",
							value: function (t) {
								return this.unit !== t.unit ? new r(NaN, "") : new r(this.num - t.num, this.unit)
							},
						},
						{
							key: "multiply",
							value: function (t) {
								return "" !== this.unit && "" !== t.unit && this.unit !== t.unit
									? new r(NaN, "")
									: new r(this.num * t.num, this.unit || t.unit)
							},
						},
						{
							key: "divide",
							value: function (t) {
								return "" !== this.unit && "" !== t.unit && this.unit !== t.unit
									? new r(NaN, "")
									: new r(this.num / t.num, this.unit || t.unit)
							},
						},
						{
							key: "toString",
							value: function () {
								return "".concat(this.num).concat(this.unit)
							},
						},
						{
							key: "isNaN",
							value: function () {
								return Number.isNaN(this.num)
							},
						},
					]),
					(e = [
						{
							key: "parse",
							value: function (t) {
								var e,
									n = rx(null != (e = rP.exec(t)) ? e : [], 3),
									i = n[1],
									o = n[2]
								return new r(parseFloat(i), null != o ? o : "")
							},
						},
					]),
					t && rw(r.prototype, t),
					e && rw(r, e),
					Object.defineProperty(r, "prototype", { writable: !1 }),
					r
				)
			})()
		function rM(t) {
			if (t.includes("NaN")) return "NaN"
			for (var e = t; e.includes("*") || e.includes("/"); ) {
				var r,
					n = rx(null != (r = rS.exec(e)) ? r : [], 4),
					i = n[1],
					o = n[2],
					a = n[3],
					u = rk.parse(null != i ? i : ""),
					c = rk.parse(null != a ? a : ""),
					l = "*" === o ? u.multiply(c) : u.divide(c)
				if (l.isNaN()) return "NaN"
				e = e.replace(rS, l.toString())
			}
			for (; e.includes("+") || /.-\d+(?:\.\d+)?/.test(e); ) {
				var s,
					f = rx(null != (s = rj.exec(e)) ? s : [], 4),
					p = f[1],
					d = f[2],
					h = f[3],
					y = rk.parse(null != p ? p : ""),
					v = rk.parse(null != h ? h : ""),
					m = "+" === d ? y.add(v) : y.subtract(v)
				if (m.isNaN()) return "NaN"
				e = e.replace(rj, m.toString())
			}
			return e
		}
		var rN = /\(([^()]*)\)/
		function r_(t) {
			var e = (function (t) {
				try {
					var e
					return (
						(e = t.replace(/\s+/g, "")),
						(e = (function (t) {
							for (var e = t; e.includes("("); ) {
								var r = rx(rN.exec(e), 2)[1]
								e = e.replace(rN, rM(r))
							}
							return e
						})(e)),
						(e = rM(e))
					)
				} catch (t) {
					return "NaN"
				}
			})(t.slice(5, -1))
			return "NaN" === e ? "" : e
		}
		var rI = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
			rC = ["dx", "dy", "angle", "className", "breakAll"]
		function rD() {
			return (rD = Object.assign.bind()).apply(this, arguments)
		}
		function rR(t, e) {
			if (null == t) return {}
			var r,
				n,
				i = (function (t, e) {
					if (null == t) return {}
					var r = {}
					for (var n in t)
						if (Object.prototype.hasOwnProperty.call(t, n)) {
							if (e.indexOf(n) >= 0) continue
							r[n] = t[n]
						}
					return r
				})(t, e)
			if (Object.getOwnPropertySymbols) {
				var o = Object.getOwnPropertySymbols(t)
				for (n = 0; n < o.length; n++)
					(r = o[n]),
						!(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
			}
			return i
		}
		function rB(t, e) {
			return (
				(function (t) {
					if (Array.isArray(t)) return t
				})(t) ||
				(function (t, e) {
					var r = null == t ? null : ("u" > typeof Symbol && t[Symbol.iterator]) || t["@@iterator"]
					if (null != r) {
						var n,
							i,
							o,
							a,
							u = [],
							c = !0,
							l = !1
						try {
							if (((o = (r = r.call(t)).next), 0 === e)) {
								if (Object(r) !== r) return
								c = !1
							} else for (; !(c = (n = o.call(r)).done) && (u.push(n.value), u.length !== e); c = !0);
						} catch (t) {
							;(l = !0), (i = t)
						} finally {
							try {
								if (!c && null != r.return && ((a = r.return()), Object(a) !== a)) return
							} finally {
								if (l) throw i
							}
						}
						return u
					}
				})(t, e) ||
				(function (t, e) {
					if (t) {
						if ("string" == typeof t) return rL(t, e)
						var r = Object.prototype.toString.call(t).slice(8, -1)
						if (("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r))
							return Array.from(t)
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rL(t, e)
					}
				})(t, e) ||
				(function () {
					throw TypeError(
						"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function rL(t, e) {
			;(null == e || e > t.length) && (e = t.length)
			for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r]
			return n
		}
		var rz = /[ \f\n\r\t\v\u2028\u2029]+/,
			rU = function (t) {
				var e = t.children,
					r = t.breakAll,
					n = t.style
				try {
					var i = []
					;(0, J.default)(e) || (i = r ? e.toString().split("") : e.toString().split(rz))
					var o = i.map(function (t) {
							return { word: t, width: rb(t, n).width }
						}),
						a = r ? 0 : rb(" ", n).width
					return { wordsWithComputedWidth: o, spaceWidth: a }
				} catch (t) {
					return null
				}
			},
			rF = function (t, e, r, n, i) {
				var o,
					a = t.maxLines,
					u = t.children,
					c = t.style,
					l = t.breakAll,
					s = (0, rs.isNumber)(a),
					f = function () {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
						return t.reduce(function (t, e) {
							var o = e.word,
								a = e.width,
								u = t[t.length - 1]
							return (
								u && (null == n || i || u.width + a + r < Number(n))
									? (u.words.push(o), (u.width += a + r))
									: t.push({ words: [o], width: a }),
								t
							)
						}, [])
					},
					p = f(e)
				if (!s) return p
				for (
					var d = function (t) {
							var e = f(
								rU({ breakAll: l, style: c, children: u.slice(0, t) + "…" }).wordsWithComputedWidth,
							)
							return [
								e.length > a ||
									e.reduce(function (t, e) {
										return t.width > e.width ? t : e
									}).width > Number(n),
								e,
							]
						},
						h = 0,
						y = u.length - 1,
						v = 0;
					h <= y && v <= u.length - 1;

				) {
					var m = Math.floor((h + y) / 2),
						b = rB(d(m - 1), 2),
						g = b[0],
						x = b[1],
						O = rB(d(m), 1)[0]
					if ((g || O || (h = m + 1), g && O && (y = m - 1), !g && O)) {
						o = x
						break
					}
					v++
				}
				return o || p
			},
			rq = function (t) {
				return [{ words: (0, J.default)(t) ? [] : t.toString().split(rz) }]
			},
			rW = function (t) {
				var e = t.width,
					r = t.scaleToFit,
					n = t.children,
					i = t.style,
					o = t.breakAll,
					a = t.maxLines
				if ((e || r) && !rf.Global.isSsr) {
					var u = rU({ breakAll: o, children: n, style: i })
					if (!u) return rq(n)
					var c = u.wordsWithComputedWidth,
						l = u.spaceWidth
					return rF({ breakAll: o, children: n, maxLines: a, style: i }, c, l, e, r)
				}
				return rq(n)
			},
			rH = "#808080",
			r$ = function (t) {
				var e,
					r = t.x,
					n = void 0 === r ? 0 : r,
					i = t.y,
					o = void 0 === i ? 0 : i,
					a = t.lineHeight,
					u = void 0 === a ? "1em" : a,
					c = t.capHeight,
					l = void 0 === c ? "0.71em" : c,
					s = t.scaleToFit,
					f = void 0 !== s && s,
					p = t.textAnchor,
					d = t.verticalAnchor,
					h = t.fill,
					y = void 0 === h ? rH : h,
					v = rR(t, rI),
					m = (0, A.useMemo)(
						function () {
							return rW({
								breakAll: v.breakAll,
								children: v.children,
								maxLines: v.maxLines,
								scaleToFit: f,
								style: v.style,
								width: v.width,
							})
						},
						[v.breakAll, v.children, v.maxLines, f, v.style, v.width],
					),
					b = v.dx,
					g = v.dy,
					x = v.angle,
					O = v.className,
					w = v.breakAll,
					S = rR(v, rC)
				if (!(0, rs.isNumOrStr)(n) || !(0, rs.isNumOrStr)(o)) return null
				var j = n + ((0, rs.isNumber)(b) ? b : 0),
					E = o + ((0, rs.isNumber)(g) ? g : 0)
				switch (void 0 === d ? "end" : d) {
					case "start":
						e = r_("calc(".concat(l, ")"))
						break
					case "middle":
						e = r_(
							"calc("
								.concat((m.length - 1) / 2, " * -")
								.concat(u, " + (")
								.concat(l, " / 2))"),
						)
						break
					default:
						e = r_("calc(".concat(m.length - 1, " * -").concat(u, ")"))
				}
				var P = []
				if (f) {
					var T = m[0].width,
						k = v.width
					P.push("scale(".concat(((0, rs.isNumber)(k) ? k / T : 1) / T, ")"))
				}
				return (
					x && P.push("rotate(".concat(x, ", ").concat(j, ", ").concat(E, ")")),
					P.length && (S.transform = P.join(" ")),
					A.default.createElement(
						"text",
						rD({}, (0, tc.filterProps)(S, !0), {
							x: j,
							y: E,
							className: (0, to.default)("recharts-text", O),
							textAnchor: void 0 === p ? "start" : p,
							fill: y.includes("url") ? rH : y,
						}),
						m.map(function (t, r) {
							var n = t.words.join(w ? "" : " ")
							return A.default.createElement(
								"tspan",
								{ x: j, dy: 0 === r ? e : u, key: "".concat(n, "-").concat(r) },
								n,
							)
						}),
					)
				)
			}
		t.i(85899), t.s([], 71752), t.i(71752)
		let rX = Math.sqrt(50),
			rK = Math.sqrt(10),
			rQ = Math.sqrt(2)
		function rG(t, e, r) {
			let n,
				i,
				o,
				a = (e - t) / Math.max(0, r),
				u = Math.floor(Math.log10(a)),
				c = a / Math.pow(10, u),
				l = c >= rX ? 10 : c >= rK ? 5 : c >= rQ ? 2 : 1
			return (u < 0
				? ((n = Math.round(t * (o = Math.pow(10, -u) / l))),
					(i = Math.round(e * o)),
					n / o < t && ++n,
					i / o > e && --i,
					(o = -o))
				: ((n = Math.round(t / (o = Math.pow(10, u) * l))),
					(i = Math.round(e / o)),
					n * o < t && ++n,
					i * o > e && --i),
			i < n && 0.5 <= r && r < 2)
				? rG(t, e, 2 * r)
				: [n, i, o]
		}
		function rV(t, e, r) {
			if (((e *= 1), (t *= 1), !((r *= 1) > 0))) return []
			if (t === e) return [t]
			let n = e < t,
				[i, o, a] = n ? rG(e, t, r) : rG(t, e, r)
			if (!(o >= i)) return []
			let u = o - i + 1,
				c = Array(u)
			if (n)
				if (a < 0) for (let t = 0; t < u; ++t) c[t] = -((o - t) / a)
				else for (let t = 0; t < u; ++t) c[t] = (o - t) * a
			else if (a < 0) for (let t = 0; t < u; ++t) c[t] = -((i + t) / a)
			else for (let t = 0; t < u; ++t) c[t] = (i + t) * a
			return c
		}
		function rY(t, e, r) {
			return rG((t *= 1), (e *= 1), (r *= 1))[2]
		}
		function rZ(t, e, r) {
			;(e *= 1), (t *= 1), (r *= 1)
			let n = e < t,
				i = n ? rY(e, t, r) : rY(t, e, r)
			return (n ? -1 : 1) * (i < 0 ? -(1 / i) : i)
		}
		function rJ(t, e) {
			return null == t || null == e ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
		}
		function r0(t, e) {
			return null == t || null == e ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
		}
		function r1(t) {
			let e, r, n
			function i(t, n, o = 0, a = t.length) {
				if (o < a) {
					if (0 !== e(n, n)) return a
					do {
						let e = (o + a) >>> 1
						0 > r(t[e], n) ? (o = e + 1) : (a = e)
					} while (o < a)
				}
				return o
			}
			return (
				2 !== t.length
					? ((e = rJ), (r = (e, r) => rJ(t(e), r)), (n = (e, r) => t(e) - r))
					: ((e = t === rJ || t === r0 ? t : r2), (r = t), (n = t)),
				{
					left: i,
					center: function (t, e, r = 0, o = t.length) {
						let a = i(t, e, r, o - 1)
						return a > r && n(t[a - 1], e) > -n(t[a], e) ? a - 1 : a
					},
					right: function (t, n, i = 0, o = t.length) {
						if (i < o) {
							if (0 !== e(n, n)) return o
							do {
								let e = (i + o) >>> 1
								0 >= r(t[e], n) ? (i = e + 1) : (o = e)
							} while (i < o)
						}
						return i
					},
				}
			)
		}
		function r2() {
			return 0
		}
		function r5(t) {
			return null === t ? NaN : +t
		}
		let r3 = r1(rJ),
			r6 = r3.right
		function r8(t, e, r) {
			;(t.prototype = e.prototype = r), (r.constructor = t)
		}
		function r4(t, e) {
			var r = Object.create(t.prototype)
			for (var n in e) r[n] = e[n]
			return r
		}
		function r7() {}
		r3.left, r1(r5).center
		var r9 = "\\s*([+-]?\\d+)\\s*",
			nt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
			ne = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
			nr = /^#([0-9a-f]{3,8})$/,
			nn = RegExp(`^rgb\\(${r9},${r9},${r9}\\)$`),
			ni = RegExp(`^rgb\\(${ne},${ne},${ne}\\)$`),
			no = RegExp(`^rgba\\(${r9},${r9},${r9},${nt}\\)$`),
			na = RegExp(`^rgba\\(${ne},${ne},${ne},${nt}\\)$`),
			nu = RegExp(`^hsl\\(${nt},${ne},${ne}\\)$`),
			nc = RegExp(`^hsla\\(${nt},${ne},${ne},${nt}\\)$`),
			nl = {
				aliceblue: 0xf0f8ff,
				antiquewhite: 0xfaebd7,
				aqua: 65535,
				aquamarine: 8388564,
				azure: 0xf0ffff,
				beige: 0xf5f5dc,
				bisque: 0xffe4c4,
				black: 0,
				blanchedalmond: 0xffebcd,
				blue: 255,
				blueviolet: 9055202,
				brown: 0xa52a2a,
				burlywood: 0xdeb887,
				cadetblue: 6266528,
				chartreuse: 8388352,
				chocolate: 0xd2691e,
				coral: 0xff7f50,
				cornflowerblue: 6591981,
				cornsilk: 0xfff8dc,
				crimson: 0xdc143c,
				cyan: 65535,
				darkblue: 139,
				darkcyan: 35723,
				darkgoldenrod: 0xb8860b,
				darkgray: 0xa9a9a9,
				darkgreen: 25600,
				darkgrey: 0xa9a9a9,
				darkkhaki: 0xbdb76b,
				darkmagenta: 9109643,
				darkolivegreen: 5597999,
				darkorange: 0xff8c00,
				darkorchid: 0x9932cc,
				darkred: 9109504,
				darksalmon: 0xe9967a,
				darkseagreen: 9419919,
				darkslateblue: 4734347,
				darkslategray: 3100495,
				darkslategrey: 3100495,
				darkturquoise: 52945,
				darkviolet: 9699539,
				deeppink: 0xff1493,
				deepskyblue: 49151,
				dimgray: 6908265,
				dimgrey: 6908265,
				dodgerblue: 2003199,
				firebrick: 0xb22222,
				floralwhite: 0xfffaf0,
				forestgreen: 2263842,
				fuchsia: 0xff00ff,
				gainsboro: 0xdcdcdc,
				ghostwhite: 0xf8f8ff,
				gold: 0xffd700,
				goldenrod: 0xdaa520,
				gray: 8421504,
				green: 32768,
				greenyellow: 0xadff2f,
				grey: 8421504,
				honeydew: 0xf0fff0,
				hotpink: 0xff69b4,
				indianred: 0xcd5c5c,
				indigo: 4915330,
				ivory: 0xfffff0,
				khaki: 0xf0e68c,
				lavender: 0xe6e6fa,
				lavenderblush: 0xfff0f5,
				lawngreen: 8190976,
				lemonchiffon: 0xfffacd,
				lightblue: 0xadd8e6,
				lightcoral: 0xf08080,
				lightcyan: 0xe0ffff,
				lightgoldenrodyellow: 0xfafad2,
				lightgray: 0xd3d3d3,
				lightgreen: 9498256,
				lightgrey: 0xd3d3d3,
				lightpink: 0xffb6c1,
				lightsalmon: 0xffa07a,
				lightseagreen: 2142890,
				lightskyblue: 8900346,
				lightslategray: 7833753,
				lightslategrey: 7833753,
				lightsteelblue: 0xb0c4de,
				lightyellow: 0xffffe0,
				lime: 65280,
				limegreen: 3329330,
				linen: 0xfaf0e6,
				magenta: 0xff00ff,
				maroon: 8388608,
				mediumaquamarine: 6737322,
				mediumblue: 205,
				mediumorchid: 0xba55d3,
				mediumpurple: 9662683,
				mediumseagreen: 3978097,
				mediumslateblue: 8087790,
				mediumspringgreen: 64154,
				mediumturquoise: 4772300,
				mediumvioletred: 0xc71585,
				midnightblue: 1644912,
				mintcream: 0xf5fffa,
				mistyrose: 0xffe4e1,
				moccasin: 0xffe4b5,
				navajowhite: 0xffdead,
				navy: 128,
				oldlace: 0xfdf5e6,
				olive: 8421376,
				olivedrab: 7048739,
				orange: 0xffa500,
				orangered: 0xff4500,
				orchid: 0xda70d6,
				palegoldenrod: 0xeee8aa,
				palegreen: 0x98fb98,
				paleturquoise: 0xafeeee,
				palevioletred: 0xdb7093,
				papayawhip: 0xffefd5,
				peachpuff: 0xffdab9,
				peru: 0xcd853f,
				pink: 0xffc0cb,
				plum: 0xdda0dd,
				powderblue: 0xb0e0e6,
				purple: 8388736,
				rebeccapurple: 6697881,
				red: 0xff0000,
				rosybrown: 0xbc8f8f,
				royalblue: 4286945,
				saddlebrown: 9127187,
				salmon: 0xfa8072,
				sandybrown: 0xf4a460,
				seagreen: 3050327,
				seashell: 0xfff5ee,
				sienna: 0xa0522d,
				silver: 0xc0c0c0,
				skyblue: 8900331,
				slateblue: 6970061,
				slategray: 7372944,
				slategrey: 7372944,
				snow: 0xfffafa,
				springgreen: 65407,
				steelblue: 4620980,
				tan: 0xd2b48c,
				teal: 32896,
				thistle: 0xd8bfd8,
				tomato: 0xff6347,
				turquoise: 4251856,
				violet: 0xee82ee,
				wheat: 0xf5deb3,
				white: 0xffffff,
				whitesmoke: 0xf5f5f5,
				yellow: 0xffff00,
				yellowgreen: 0x9acd32,
			}
		function ns() {
			return this.rgb().formatHex()
		}
		function nf() {
			return this.rgb().formatRgb()
		}
		function np(t) {
			var e, r
			return (
				(t = (t + "").trim().toLowerCase()),
				(e = nr.exec(t))
					? ((r = e[1].length),
						(e = parseInt(e[1], 16)),
						6 === r
							? nd(e)
							: 3 === r
								? new nv(
										((e >> 8) & 15) | ((e >> 4) & 240),
										((e >> 4) & 15) | (240 & e),
										((15 & e) << 4) | (15 & e),
										1,
									)
								: 8 === r
									? nh((e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, (255 & e) / 255)
									: 4 === r
										? nh(
												((e >> 12) & 15) | ((e >> 8) & 240),
												((e >> 8) & 15) | ((e >> 4) & 240),
												((e >> 4) & 15) | (240 & e),
												(((15 & e) << 4) | (15 & e)) / 255,
											)
										: null)
					: (e = nn.exec(t))
						? new nv(e[1], e[2], e[3], 1)
						: (e = ni.exec(t))
							? new nv((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, 1)
							: (e = no.exec(t))
								? nh(e[1], e[2], e[3], e[4])
								: (e = na.exec(t))
									? nh((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, e[4])
									: (e = nu.exec(t))
										? nw(e[1], e[2] / 100, e[3] / 100, 1)
										: (e = nc.exec(t))
											? nw(e[1], e[2] / 100, e[3] / 100, e[4])
											: nl.hasOwnProperty(t)
												? nd(nl[t])
												: "transparent" === t
													? new nv(NaN, NaN, NaN, 0)
													: null
			)
		}
		function nd(t) {
			return new nv((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1)
		}
		function nh(t, e, r, n) {
			return n <= 0 && (t = e = r = NaN), new nv(t, e, r, n)
		}
		function ny(t, e, r, n) {
			var i
			return 1 == arguments.length
				? ((i = t) instanceof r7 || (i = np(i)), i)
					? new nv((i = i.rgb()).r, i.g, i.b, i.opacity)
					: new nv()
				: new nv(t, e, r, null == n ? 1 : n)
		}
		function nv(t, e, r, n) {
			;(this.r = +t), (this.g = +e), (this.b = +r), (this.opacity = +n)
		}
		function nm() {
			return `#${nO(this.r)}${nO(this.g)}${nO(this.b)}`
		}
		function nb() {
			let t = ng(this.opacity)
			return `${1 === t ? "rgb(" : "rgba("}${nx(this.r)}, ${nx(this.g)}, ${nx(this.b)}${1 === t ? ")" : `, ${t})`}`
		}
		function ng(t) {
			return isNaN(t) ? 1 : Math.max(0, Math.min(1, t))
		}
		function nx(t) {
			return Math.max(0, Math.min(255, Math.round(t) || 0))
		}
		function nO(t) {
			return ((t = nx(t)) < 16 ? "0" : "") + t.toString(16)
		}
		function nw(t, e, r, n) {
			return (
				n <= 0 ? (t = e = r = NaN) : r <= 0 || r >= 1 ? (t = e = NaN) : e <= 0 && (t = NaN), new nj(t, e, r, n)
			)
		}
		function nS(t) {
			if (t instanceof nj) return new nj(t.h, t.s, t.l, t.opacity)
			if ((t instanceof r7 || (t = np(t)), !t)) return new nj()
			if (t instanceof nj) return t
			var e = (t = t.rgb()).r / 255,
				r = t.g / 255,
				n = t.b / 255,
				i = Math.min(e, r, n),
				o = Math.max(e, r, n),
				a = NaN,
				u = o - i,
				c = (o + i) / 2
			return (
				u
					? ((a = e === o ? (r - n) / u + (r < n) * 6 : r === o ? (n - e) / u + 2 : (e - r) / u + 4),
						(u /= c < 0.5 ? o + i : 2 - o - i),
						(a *= 60))
					: (u = c > 0 && c < 1 ? 0 : a),
				new nj(a, u, c, t.opacity)
			)
		}
		function nj(t, e, r, n) {
			;(this.h = +t), (this.s = +e), (this.l = +r), (this.opacity = +n)
		}
		function nE(t) {
			return (t = (t || 0) % 360) < 0 ? t + 360 : t
		}
		function nP(t) {
			return Math.max(0, Math.min(1, t || 0))
		}
		function nA(t, e, r) {
			return (t < 60 ? e + ((r - e) * t) / 60 : t < 180 ? r : t < 240 ? e + ((r - e) * (240 - t)) / 60 : e) * 255
		}
		function nT(t, e, r, n, i) {
			var o = t * t,
				a = o * t
			return ((1 - 3 * t + 3 * o - a) * e + (4 - 6 * o + 3 * a) * r + (1 + 3 * t + 3 * o - 3 * a) * n + a * i) / 6
		}
		r8(r7, np, {
			copy(t) {
				return Object.assign(new this.constructor(), this, t)
			},
			displayable() {
				return this.rgb().displayable()
			},
			hex: ns,
			formatHex: ns,
			formatHex8: function () {
				return this.rgb().formatHex8()
			},
			formatHsl: function () {
				return nS(this).formatHsl()
			},
			formatRgb: nf,
			toString: nf,
		}),
			r8(
				nv,
				ny,
				r4(r7, {
					brighter(t) {
						return (
							(t = null == t ? 1.4285714285714286 : Math.pow(1.4285714285714286, t)),
							new nv(this.r * t, this.g * t, this.b * t, this.opacity)
						)
					},
					darker(t) {
						return (
							(t = null == t ? 0.7 : Math.pow(0.7, t)),
							new nv(this.r * t, this.g * t, this.b * t, this.opacity)
						)
					},
					rgb() {
						return this
					},
					clamp() {
						return new nv(nx(this.r), nx(this.g), nx(this.b), ng(this.opacity))
					},
					displayable() {
						return (
							-0.5 <= this.r &&
							this.r < 255.5 &&
							-0.5 <= this.g &&
							this.g < 255.5 &&
							-0.5 <= this.b &&
							this.b < 255.5 &&
							0 <= this.opacity &&
							this.opacity <= 1
						)
					},
					hex: nm,
					formatHex: nm,
					formatHex8: function () {
						return `#${nO(this.r)}${nO(this.g)}${nO(this.b)}${nO((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`
					},
					formatRgb: nb,
					toString: nb,
				}),
			),
			r8(
				nj,
				function (t, e, r, n) {
					return 1 == arguments.length ? nS(t) : new nj(t, e, r, null == n ? 1 : n)
				},
				r4(r7, {
					brighter(t) {
						return (
							(t = null == t ? 1.4285714285714286 : Math.pow(1.4285714285714286, t)),
							new nj(this.h, this.s, this.l * t, this.opacity)
						)
					},
					darker(t) {
						return (
							(t = null == t ? 0.7 : Math.pow(0.7, t)), new nj(this.h, this.s, this.l * t, this.opacity)
						)
					},
					rgb() {
						var t = (this.h % 360) + (this.h < 0) * 360,
							e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
							r = this.l,
							n = r + (r < 0.5 ? r : 1 - r) * e,
							i = 2 * r - n
						return new nv(
							nA(t >= 240 ? t - 240 : t + 120, i, n),
							nA(t, i, n),
							nA(t < 120 ? t + 240 : t - 120, i, n),
							this.opacity,
						)
					},
					clamp() {
						return new nj(nE(this.h), nP(this.s), nP(this.l), ng(this.opacity))
					},
					displayable() {
						return (
							((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
							0 <= this.l &&
							this.l <= 1 &&
							0 <= this.opacity &&
							this.opacity <= 1
						)
					},
					formatHsl() {
						let t = ng(this.opacity)
						return `${1 === t ? "hsl(" : "hsla("}${nE(this.h)}, ${100 * nP(this.s)}%, ${100 * nP(this.l)}%${1 === t ? ")" : `, ${t})`}`
					},
				}),
			)
		let nk = (t) => () => t
		function nM(t, e) {
			var r = e - t
			return r
				? function (e) {
						return t + e * r
					}
				: nk(isNaN(t) ? e : t)
		}
		let nN = (function t(e) {
			var r,
				n =
					1 == (r = +e)
						? nM
						: function (t, e) {
								var n, i, o
								return e - t
									? ((n = t),
										(i = e),
										(n = Math.pow(n, (o = r))),
										(i = Math.pow(i, o) - n),
										(o = 1 / o),
										function (t) {
											return Math.pow(n + t * i, o)
										})
									: nk(isNaN(t) ? e : t)
							}
			function i(t, e) {
				var r = n((t = ny(t)).r, (e = ny(e)).r),
					i = n(t.g, e.g),
					o = n(t.b, e.b),
					a = nM(t.opacity, e.opacity)
				return function (e) {
					return (t.r = r(e)), (t.g = i(e)), (t.b = o(e)), (t.opacity = a(e)), t + ""
				}
			}
			return (i.gamma = t), i
		})(1)
		function n_(t) {
			return function (e) {
				var r,
					n,
					i = e.length,
					o = Array(i),
					a = Array(i),
					u = Array(i)
				for (r = 0; r < i; ++r) (n = ny(e[r])), (o[r] = n.r || 0), (a[r] = n.g || 0), (u[r] = n.b || 0)
				return (
					(o = t(o)),
					(a = t(a)),
					(u = t(u)),
					(n.opacity = 1),
					function (t) {
						return (n.r = o(t)), (n.g = a(t)), (n.b = u(t)), n + ""
					}
				)
			}
		}
		function nI(t, e) {
			return (
				(t *= 1),
				(e *= 1),
				function (r) {
					return t * (1 - r) + e * r
				}
			)
		}
		n_(function (t) {
			var e = t.length - 1
			return function (r) {
				var n = r <= 0 ? (r = 0) : r >= 1 ? ((r = 1), e - 1) : Math.floor(r * e),
					i = t[n],
					o = t[n + 1],
					a = n > 0 ? t[n - 1] : 2 * i - o,
					u = n < e - 1 ? t[n + 2] : 2 * o - i
				return nT((r - n / e) * e, a, i, o, u)
			}
		}),
			n_(function (t) {
				var e = t.length
				return function (r) {
					var n = Math.floor(((r %= 1) < 0 ? ++r : r) * e),
						i = t[(n + e - 1) % e],
						o = t[n % e],
						a = t[(n + 1) % e],
						u = t[(n + 2) % e]
					return nT((r - n / e) * e, i, o, a, u)
				}
			})
		var nC = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
			nD = RegExp(nC.source, "g")
		function nR(t, e) {
			var r,
				n,
				i = typeof e
			return null == e || "boolean" === i
				? nk(e)
				: ("number" === i
						? nI
						: "string" === i
							? (n = np(e))
								? ((e = n), nN)
								: function (t, e) {
										var r,
											n,
											i,
											o,
											a,
											u = (nC.lastIndex = nD.lastIndex = 0),
											c = -1,
											l = [],
											s = []
										for (t += "", e += ""; (i = nC.exec(t)) && (o = nD.exec(e)); )
											(a = o.index) > u &&
												((a = e.slice(u, a)), l[c] ? (l[c] += a) : (l[++c] = a)),
												(i = i[0]) === (o = o[0])
													? l[c]
														? (l[c] += o)
														: (l[++c] = o)
													: ((l[++c] = null), s.push({ i: c, x: nI(i, o) })),
												(u = nD.lastIndex)
										return (
											u < e.length && ((a = e.slice(u)), l[c] ? (l[c] += a) : (l[++c] = a)),
											l.length < 2
												? s[0]
													? ((r = s[0].x),
														function (t) {
															return r(t) + ""
														})
													: ((n = e),
														function () {
															return n
														})
												: ((e = s.length),
													function (t) {
														for (var r, n = 0; n < e; ++n) l[(r = s[n]).i] = r.x(t)
														return l.join("")
													})
										)
									}
							: e instanceof np
								? nN
								: e instanceof Date
									? function (t, e) {
											var r = new Date()
											return (
												(t *= 1),
												(e *= 1),
												function (n) {
													return r.setTime(t * (1 - n) + e * n), r
												}
											)
										}
									: !ArrayBuffer.isView((r = e)) || r instanceof DataView
										? Array.isArray(e)
											? function (t, e) {
													var r,
														n = e ? e.length : 0,
														i = t ? Math.min(n, t.length) : 0,
														o = Array(i),
														a = Array(n)
													for (r = 0; r < i; ++r) o[r] = nR(t[r], e[r])
													for (; r < n; ++r) a[r] = e[r]
													return function (t) {
														for (r = 0; r < i; ++r) a[r] = o[r](t)
														return a
													}
												}
											: ("function" != typeof e.valueOf && "function" != typeof e.toString) ||
												  isNaN(e)
												? function (t, e) {
														var r,
															n = {},
															i = {}
														for (r in ((null === t || "object" != typeof t) && (t = {}),
														(null === e || "object" != typeof e) && (e = {}),
														e))
															r in t ? (n[r] = nR(t[r], e[r])) : (i[r] = e[r])
														return function (t) {
															for (r in n) i[r] = n[r](t)
															return i
														}
													}
												: nI
										: function (t, e) {
												e || (e = [])
												var r,
													n = t ? Math.min(e.length, t.length) : 0,
													i = e.slice()
												return function (o) {
													for (r = 0; r < n; ++r) i[r] = t[r] * (1 - o) + e[r] * o
													return i
												}
											})(t, e)
		}
		function nB(t, e) {
			return (
				(t *= 1),
				(e *= 1),
				function (r) {
					return Math.round(t * (1 - r) + e * r)
				}
			)
		}
		function nL(t) {
			return +t
		}
		var nz = [0, 1]
		function nU(t) {
			return t
		}
		function nF(t, e) {
			var r
			return (e -= t *= 1)
				? function (r) {
						return (r - t) / e
					}
				: ((r = isNaN(e) ? NaN : 0.5),
					function () {
						return r
					})
		}
		function nq(t, e, r) {
			var n = t[0],
				i = t[1],
				o = e[0],
				a = e[1]
			return (
				i < n ? ((n = nF(i, n)), (o = r(a, o))) : ((n = nF(n, i)), (o = r(o, a))),
				function (t) {
					return o(n(t))
				}
			)
		}
		function nW(t, e, r) {
			var n = Math.min(t.length, e.length) - 1,
				i = Array(n),
				o = Array(n),
				a = -1
			for (t[n] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse())); ++a < n; )
				(i[a] = nF(t[a], t[a + 1])), (o[a] = r(e[a], e[a + 1]))
			return function (e) {
				var r = r6(t, e, 1, n) - 1
				return o[r](i[r](e))
			}
		}
		function nH(t, e) {
			return e
				.domain(t.domain())
				.range(t.range())
				.interpolate(t.interpolate())
				.clamp(t.clamp())
				.unknown(t.unknown())
		}
		function n$() {
			var t,
				e,
				r,
				n,
				i,
				o,
				a = nz,
				u = nz,
				c = nR,
				l = nU
			function s() {
				var t,
					e,
					r,
					c = Math.min(a.length, u.length)
				return (
					l !== nU &&
						((t = a[0]),
						(e = a[c - 1]),
						t > e && ((r = t), (t = e), (e = r)),
						(l = function (r) {
							return Math.max(t, Math.min(e, r))
						})),
					(n = c > 2 ? nW : nq),
					(i = o = null),
					f
				)
			}
			function f(e) {
				return null == e || isNaN((e *= 1)) ? r : (i || (i = n(a.map(t), u, c)))(t(l(e)))
			}
			return (
				(f.invert = function (r) {
					return l(e((o || (o = n(u, a.map(t), nI)))(r)))
				}),
				(f.domain = function (t) {
					return arguments.length ? ((a = Array.from(t, nL)), s()) : a.slice()
				}),
				(f.range = function (t) {
					return arguments.length ? ((u = Array.from(t)), s()) : u.slice()
				}),
				(f.rangeRound = function (t) {
					return (u = Array.from(t)), (c = nB), s()
				}),
				(f.clamp = function (t) {
					return arguments.length ? ((l = !!t || nU), s()) : l !== nU
				}),
				(f.interpolate = function (t) {
					return arguments.length ? ((c = t), s()) : c
				}),
				(f.unknown = function (t) {
					return arguments.length ? ((r = t), f) : r
				}),
				function (r, n) {
					return (t = r), (e = n), s()
				}
			)
		}
		function nX() {
			return n$()(nU, nU)
		}
		function nK(t, e) {
			if ((r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null
			var r,
				n = t.slice(0, r)
			return [n.length > 1 ? n[0] + n.slice(2) : n, +t.slice(r + 1)]
		}
		function nQ(t) {
			return (t = nK(Math.abs(t))) ? t[1] : NaN
		}
		var nG = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
		function nV(t) {
			var e
			if (!(e = nG.exec(t))) throw Error("invalid format: " + t)
			return new nY({
				fill: e[1],
				align: e[2],
				sign: e[3],
				symbol: e[4],
				zero: e[5],
				width: e[6],
				comma: e[7],
				precision: e[8] && e[8].slice(1),
				trim: e[9],
				type: e[10],
			})
		}
		function nY(t) {
			;(this.fill = void 0 === t.fill ? " " : t.fill + ""),
				(this.align = void 0 === t.align ? ">" : t.align + ""),
				(this.sign = void 0 === t.sign ? "-" : t.sign + ""),
				(this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
				(this.zero = !!t.zero),
				(this.width = void 0 === t.width ? void 0 : +t.width),
				(this.comma = !!t.comma),
				(this.precision = void 0 === t.precision ? void 0 : +t.precision),
				(this.trim = !!t.trim),
				(this.type = void 0 === t.type ? "" : t.type + "")
		}
		function nZ(t, e) {
			var r = nK(t, e)
			if (!r) return t + ""
			var n = r[0],
				i = r[1]
			return i < 0
				? "0." + Array(-i).join("0") + n
				: n.length > i + 1
					? n.slice(0, i + 1) + "." + n.slice(i + 1)
					: n + Array(i - n.length + 2).join("0")
		}
		;(nV.prototype = nY.prototype),
			(nY.prototype.toString = function () {
				return (
					this.fill +
					this.align +
					this.sign +
					this.symbol +
					(this.zero ? "0" : "") +
					(void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
					(this.comma ? "," : "") +
					(void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) +
					(this.trim ? "~" : "") +
					this.type
				)
			})
		let nJ = {
			"%": (t, e) => (100 * t).toFixed(e),
			b: (t) => Math.round(t).toString(2),
			c: (t) => t + "",
			d: function (t) {
				return Math.abs((t = Math.round(t))) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10)
			},
			e: (t, e) => t.toExponential(e),
			f: (t, e) => t.toFixed(e),
			g: (t, e) => t.toPrecision(e),
			o: (t) => Math.round(t).toString(8),
			p: (t, e) => nZ(100 * t, e),
			r: nZ,
			s: function (t, e) {
				var r = nK(t, e)
				if (!r) return t + ""
				var n = r[0],
					i = r[1],
					o = i - (g = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
					a = n.length
				return o === a
					? n
					: o > a
						? n + Array(o - a + 1).join("0")
						: o > 0
							? n.slice(0, o) + "." + n.slice(o)
							: "0." + Array(1 - o).join("0") + nK(t, Math.max(0, e + o - 1))[0]
			},
			X: (t) => Math.round(t).toString(16).toUpperCase(),
			x: (t) => Math.round(t).toString(16),
		}
		function n0(t) {
			return t
		}
		var n1 = Array.prototype.map,
			n2 = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"]
		function n5(t, e, r, n) {
			var i,
				o,
				a = rZ(t, e, r)
			switch ((n = nV(null == n ? ",f" : n)).type) {
				case "s":
					var u = Math.max(Math.abs(t), Math.abs(e))
					return (
						null != n.precision ||
							isNaN(
								(o = Math.max(
									0,
									3 * Math.max(-8, Math.min(8, Math.floor(nQ(u) / 3))) - nQ(Math.abs(a)),
								)),
							) ||
							(n.precision = o),
						w(n, u)
					)
				case "":
				case "e":
				case "g":
				case "p":
				case "r":
					null != n.precision ||
						isNaN(
							(o =
								Math.max(
									0,
									nQ(Math.abs(Math.max(Math.abs(t), Math.abs(e))) - (i = Math.abs((i = a)))) - nQ(i),
								) + 1),
						) ||
						(n.precision = o - ("e" === n.type))
					break
				case "f":
				case "%":
					null != n.precision ||
						isNaN((o = Math.max(0, -nQ(Math.abs(a))))) ||
						(n.precision = o - ("%" === n.type) * 2)
			}
			return O(n)
		}
		function n3(t) {
			var e = t.domain
			return (
				(t.ticks = function (t) {
					var r = e()
					return rV(r[0], r[r.length - 1], null == t ? 10 : t)
				}),
				(t.tickFormat = function (t, r) {
					var n = e()
					return n5(n[0], n[n.length - 1], null == t ? 10 : t, r)
				}),
				(t.nice = function (r) {
					null == r && (r = 10)
					var n,
						i,
						o = e(),
						a = 0,
						u = o.length - 1,
						c = o[a],
						l = o[u],
						s = 10
					for (l < c && ((i = c), (c = l), (l = i), (i = a), (a = u), (u = i)); s-- > 0; ) {
						if ((i = rY(c, l, r)) === n) return (o[a] = c), (o[u] = l), e(o)
						if (i > 0) (c = Math.floor(c / i) * i), (l = Math.ceil(l / i) * i)
						else if (i < 0) (c = Math.ceil(c * i) / i), (l = Math.floor(l * i) / i)
						else break
						n = i
					}
					return t
				}),
				t
			)
		}
		function n6() {
			var t = nX()
			return (
				(t.copy = function () {
					return nH(t, n6())
				}),
				re.apply(t, arguments),
				n3(t)
			)
		}
		function n8(t) {
			var e
			function r(t) {
				return null == t || isNaN((t *= 1)) ? e : t
			}
			return (
				(r.invert = r),
				(r.domain = r.range =
					function (e) {
						return arguments.length ? ((t = Array.from(e, nL)), r) : t.slice()
					}),
				(r.unknown = function (t) {
					return arguments.length ? ((e = t), r) : e
				}),
				(r.copy = function () {
					return n8(t).unknown(e)
				}),
				(t = arguments.length ? Array.from(t, nL) : [0, 1]),
				n3(r)
			)
		}
		function n4(t, e) {
			t = t.slice()
			var r,
				n = 0,
				i = t.length - 1,
				o = t[n],
				a = t[i]
			return (
				a < o && ((r = n), (n = i), (i = r), (r = o), (o = a), (a = r)),
				(t[n] = e.floor(o)),
				(t[i] = e.ceil(a)),
				t
			)
		}
		function n7(t) {
			return Math.log(t)
		}
		function n9(t) {
			return Math.exp(t)
		}
		function it(t) {
			return -Math.log(-t)
		}
		function ie(t) {
			return -Math.exp(-t)
		}
		function ir(t) {
			return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
		}
		function ii(t) {
			return (e, r) => -t(-e, r)
		}
		function io(t) {
			let e,
				r,
				n = t(n7, n9),
				i = n.domain,
				o = 10
			function a() {
				var a, u
				return (
					(e =
						(a = o) === Math.E
							? Math.log
							: (10 === a && Math.log10) ||
								(2 === a && Math.log2) ||
								((a = Math.log(a)), (t) => Math.log(t) / a)),
					(r = 10 === (u = o) ? ir : u === Math.E ? Math.exp : (t) => Math.pow(u, t)),
					i()[0] < 0 ? ((e = ii(e)), (r = ii(r)), t(it, ie)) : t(n7, n9),
					n
				)
			}
			return (
				(n.base = function (t) {
					return arguments.length ? ((o = +t), a()) : o
				}),
				(n.domain = function (t) {
					return arguments.length ? (i(t), a()) : i()
				}),
				(n.ticks = (t) => {
					let n,
						a,
						u = i(),
						c = u[0],
						l = u[u.length - 1],
						s = l < c
					s && ([c, l] = [l, c])
					let f = e(c),
						p = e(l),
						d = null == t ? 10 : +t,
						h = []
					if (!(o % 1) && p - f < d) {
						if (((f = Math.floor(f)), (p = Math.ceil(p)), c > 0)) {
							for (; f <= p; ++f)
								for (n = 1; n < o; ++n)
									if (!((a = f < 0 ? n / r(-f) : n * r(f)) < c)) {
										if (a > l) break
										h.push(a)
									}
						} else
							for (; f <= p; ++f)
								for (n = o - 1; n >= 1; --n)
									if (!((a = f > 0 ? n / r(-f) : n * r(f)) < c)) {
										if (a > l) break
										h.push(a)
									}
						2 * h.length < d && (h = rV(c, l, d))
					} else h = rV(f, p, Math.min(p - f, d)).map(r)
					return s ? h.reverse() : h
				}),
				(n.tickFormat = (t, i) => {
					if (
						(null == t && (t = 10),
						null == i && (i = 10 === o ? "s" : ","),
						"function" != typeof i && (o % 1 || null != (i = nV(i)).precision || (i.trim = !0), (i = O(i))),
						t === 1 / 0)
					)
						return i
					let a = Math.max(1, (o * t) / n.ticks().length)
					return (t) => {
						let n = t / r(Math.round(e(t)))
						return n * o < o - 0.5 && (n *= o), n <= a ? i(t) : ""
					}
				}),
				(n.nice = () => i(n4(i(), { floor: (t) => r(Math.floor(e(t))), ceil: (t) => r(Math.ceil(e(t))) }))),
				n
			)
		}
		function ia() {
			let t = io(n$()).domain([1, 10])
			return (t.copy = () => nH(t, ia()).base(t.base())), re.apply(t, arguments), t
		}
		function iu(t) {
			return function (e) {
				return Math.sign(e) * Math.log1p(Math.abs(e / t))
			}
		}
		function ic(t) {
			return function (e) {
				return Math.sign(e) * Math.expm1(Math.abs(e)) * t
			}
		}
		function il(t) {
			var e = 1,
				r = t(iu(1), ic(e))
			return (
				(r.constant = function (r) {
					return arguments.length ? t(iu((e = +r)), ic(e)) : e
				}),
				n3(r)
			)
		}
		function is() {
			var t = il(n$())
			return (
				(t.copy = function () {
					return nH(t, is()).constant(t.constant())
				}),
				re.apply(t, arguments)
			)
		}
		function ip(t) {
			return function (e) {
				return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t)
			}
		}
		function id(t) {
			return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t)
		}
		function ih(t) {
			return t < 0 ? -t * t : t * t
		}
		function iy(t) {
			var e = t(nU, nU),
				r = 1
			return (
				(e.exponent = function (e) {
					return arguments.length
						? 1 == (r = +e)
							? t(nU, nU)
							: 0.5 === r
								? t(id, ih)
								: t(ip(r), ip(1 / r))
						: r
				}),
				n3(e)
			)
		}
		function iv() {
			var t = iy(n$())
			return (
				(t.copy = function () {
					return nH(t, iv()).exponent(t.exponent())
				}),
				re.apply(t, arguments),
				t
			)
		}
		function im() {
			return iv.apply(null, arguments).exponent(0.5)
		}
		function ib(t) {
			return Math.sign(t) * t * t
		}
		function ig() {
			var t,
				e = nX(),
				r = [0, 1],
				n = !1
			function i(r) {
				var i,
					o = Math.sign((i = e(r))) * Math.sqrt(Math.abs(i))
				return isNaN(o) ? t : n ? Math.round(o) : o
			}
			return (
				(i.invert = function (t) {
					return e.invert(ib(t))
				}),
				(i.domain = function (t) {
					return arguments.length ? (e.domain(t), i) : e.domain()
				}),
				(i.range = function (t) {
					return arguments.length ? (e.range((r = Array.from(t, nL)).map(ib)), i) : r.slice()
				}),
				(i.rangeRound = function (t) {
					return i.range(t).round(!0)
				}),
				(i.round = function (t) {
					return arguments.length ? ((n = !!t), i) : n
				}),
				(i.clamp = function (t) {
					return arguments.length ? (e.clamp(t), i) : e.clamp()
				}),
				(i.unknown = function (e) {
					return arguments.length ? ((t = e), i) : t
				}),
				(i.copy = function () {
					return ig(e.domain(), r).round(n).clamp(e.clamp()).unknown(t)
				}),
				re.apply(i, arguments),
				n3(i)
			)
		}
		function ix(t, e) {
			let r
			if (void 0 === e) for (let e of t) null != e && (r < e || (void 0 === r && e >= e)) && (r = e)
			else {
				let n = -1
				for (let i of t) null != (i = e(i, ++n, t)) && (r < i || (void 0 === r && i >= i)) && (r = i)
			}
			return r
		}
		function iO(t, e) {
			let r
			if (void 0 === e) for (let e of t) null != e && (r > e || (void 0 === r && e >= e)) && (r = e)
			else {
				let n = -1
				for (let i of t) null != (i = e(i, ++n, t)) && (r > i || (void 0 === r && i >= i)) && (r = i)
			}
			return r
		}
		function iw(t, e) {
			return (null == t || !(t >= t)) - (null == e || !(e >= e)) || (t < e ? -1 : +(t > e))
		}
		function iS(t, e, r) {
			let n = t[e]
			;(t[e] = t[r]), (t[r] = n)
		}
		function ij() {
			var t,
				e = [],
				r = [],
				n = []
			function i() {
				var t = 0,
					i = Math.max(1, r.length)
				for (n = Array(i - 1); ++t < i; )
					n[t - 1] = (function (t, e, r = r5) {
						if (!(!(n = t.length) || isNaN((e *= 1)))) {
							if (e <= 0 || n < 2) return +r(t[0], 0, t)
							if (e >= 1) return +r(t[n - 1], n - 1, t)
							var n,
								i = (n - 1) * e,
								o = Math.floor(i),
								a = +r(t[o], o, t)
							return a + (r(t[o + 1], o + 1, t) - a) * (i - o)
						}
					})(e, t / i)
				return o
			}
			function o(e) {
				return null == e || isNaN((e *= 1)) ? t : r[r6(n, e)]
			}
			return (
				(o.invertExtent = function (t) {
					var i = r.indexOf(t)
					return i < 0 ? [NaN, NaN] : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]]
				}),
				(o.domain = function (t) {
					if (!arguments.length) return e.slice()
					for (let r of ((e = []), t)) null == r || isNaN((r *= 1)) || e.push(r)
					return e.sort(rJ), i()
				}),
				(o.range = function (t) {
					return arguments.length ? ((r = Array.from(t)), i()) : r.slice()
				}),
				(o.unknown = function (e) {
					return arguments.length ? ((t = e), o) : t
				}),
				(o.quantiles = function () {
					return n.slice()
				}),
				(o.copy = function () {
					return ij().domain(e).range(r).unknown(t)
				}),
				re.apply(o, arguments)
			)
		}
		function iE() {
			var t,
				e = 0,
				r = 1,
				n = 1,
				i = [0.5],
				o = [0, 1]
			function a(e) {
				return null != e && e <= e ? o[r6(i, e, 0, n)] : t
			}
			function u() {
				var t = -1
				for (i = Array(n); ++t < n; ) i[t] = ((t + 1) * r - (t - n) * e) / (n + 1)
				return a
			}
			return (
				(a.domain = function (t) {
					return arguments.length ? (([e, r] = t), (e *= 1), (r *= 1), u()) : [e, r]
				}),
				(a.range = function (t) {
					return arguments.length ? ((n = (o = Array.from(t)).length - 1), u()) : o.slice()
				}),
				(a.invertExtent = function (t) {
					var a = o.indexOf(t)
					return a < 0 ? [NaN, NaN] : a < 1 ? [e, i[0]] : a >= n ? [i[n - 1], r] : [i[a - 1], i[a]]
				}),
				(a.unknown = function (e) {
					return arguments.length && (t = e), a
				}),
				(a.thresholds = function () {
					return i.slice()
				}),
				(a.copy = function () {
					return iE().domain([e, r]).range(o).unknown(t)
				}),
				re.apply(n3(a), arguments)
			)
		}
		function iP() {
			var t,
				e = [0.5],
				r = [0, 1],
				n = 1
			function i(i) {
				return null != i && i <= i ? r[r6(e, i, 0, n)] : t
			}
			return (
				(i.domain = function (t) {
					return arguments.length ? ((n = Math.min((e = Array.from(t)).length, r.length - 1)), i) : e.slice()
				}),
				(i.range = function (t) {
					return arguments.length
						? ((r = Array.from(t)), (n = Math.min(e.length, r.length - 1)), i)
						: r.slice()
				}),
				(i.invertExtent = function (t) {
					var n = r.indexOf(t)
					return [e[n - 1], e[n]]
				}),
				(i.unknown = function (e) {
					return arguments.length ? ((t = e), i) : t
				}),
				(i.copy = function () {
					return iP().domain(e).range(r).unknown(t)
				}),
				re.apply(i, arguments)
			)
		}
		;(O = (x = (function (t) {
			var e,
				r,
				n,
				i =
					void 0 === t.grouping || void 0 === t.thousands
						? n0
						: ((e = n1.call(t.grouping, Number)),
							(r = t.thousands + ""),
							function (t, n) {
								for (
									var i = t.length, o = [], a = 0, u = e[0], c = 0;
									i > 0 &&
									u > 0 &&
									(c + u + 1 > n && (u = Math.max(1, n - c)),
									o.push(t.substring((i -= u), i + u)),
									!((c += u + 1) > n));

								)
									u = e[(a = (a + 1) % e.length)]
								return o.reverse().join(r)
							}),
				o = void 0 === t.currency ? "" : t.currency[0] + "",
				a = void 0 === t.currency ? "" : t.currency[1] + "",
				u = void 0 === t.decimal ? "." : t.decimal + "",
				c =
					void 0 === t.numerals
						? n0
						: ((n = n1.call(t.numerals, String)),
							function (t) {
								return t.replace(/[0-9]/g, function (t) {
									return n[+t]
								})
							}),
				l = void 0 === t.percent ? "%" : t.percent + "",
				s = void 0 === t.minus ? "−" : t.minus + "",
				f = void 0 === t.nan ? "NaN" : t.nan + ""
			function p(t) {
				var e = (t = nV(t)).fill,
					r = t.align,
					n = t.sign,
					p = t.symbol,
					d = t.zero,
					h = t.width,
					y = t.comma,
					v = t.precision,
					m = t.trim,
					b = t.type
				"n" === b ? ((y = !0), (b = "g")) : nJ[b] || (void 0 === v && (v = 12), (m = !0), (b = "g")),
					(d || ("0" === e && "=" === r)) && ((d = !0), (e = "0"), (r = "="))
				var x = "$" === p ? o : "#" === p && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "",
					O = "$" === p ? a : /[%p]/.test(b) ? l : "",
					w = nJ[b],
					S = /[defgprs%]/.test(b)
				function j(t) {
					var o,
						a,
						l,
						p = x,
						j = O
					if ("c" === b) (j = w(t) + j), (t = "")
					else {
						var E = (t *= 1) < 0 || 1 / t < 0
						if (
							((t = isNaN(t) ? f : w(Math.abs(t), v)),
							m &&
								(t = (function (t) {
									t: for (var e, r = t.length, n = 1, i = -1; n < r; ++n)
										switch (t[n]) {
											case ".":
												i = e = n
												break
											case "0":
												0 === i && (i = n), (e = n)
												break
											default:
												if (!+t[n]) break t
												i > 0 && (i = 0)
										}
									return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t
								})(t)),
							E && 0 == +t && "+" !== n && (E = !1),
							(p = (E ? ("(" === n ? n : s) : "-" === n || "(" === n ? "" : n) + p),
							(j = ("s" === b ? n2[8 + g / 3] : "") + j + (E && "(" === n ? ")" : "")),
							S)
						) {
							for (o = -1, a = t.length; ++o < a; )
								if (48 > (l = t.charCodeAt(o)) || l > 57) {
									;(j = (46 === l ? u + t.slice(o + 1) : t.slice(o)) + j), (t = t.slice(0, o))
									break
								}
						}
					}
					y && !d && (t = i(t, 1 / 0))
					var P = p.length + t.length + j.length,
						A = P < h ? Array(h - P + 1).join(e) : ""
					switch ((y && d && ((t = i(A + t, A.length ? h - j.length : 1 / 0)), (A = "")), r)) {
						case "<":
							t = p + t + j + A
							break
						case "=":
							t = p + A + t + j
							break
						case "^":
							t = A.slice(0, (P = A.length >> 1)) + p + t + j + A.slice(P)
							break
						default:
							t = A + p + t + j
					}
					return c(t)
				}
				return (
					(v =
						void 0 === v
							? 6
							: /[gprs]/.test(b)
								? Math.max(1, Math.min(21, v))
								: Math.max(0, Math.min(20, v))),
					(j.toString = function () {
						return t + ""
					}),
					j
				)
			}
			return {
				format: p,
				formatPrefix: function (t, e) {
					var r = p((((t = nV(t)).type = "f"), t)),
						n = 3 * Math.max(-8, Math.min(8, Math.floor(nQ(e) / 3))),
						i = Math.pow(10, -n),
						o = n2[8 + n / 3]
					return function (t) {
						return r(i * t) + o
					}
				},
			}
		})({ thousands: ",", grouping: [3], currency: ["$", ""] })).format),
			(w = x.formatPrefix)
		let iA = new Date(),
			iT = new Date()
		function ik(t, e, r, n) {
			function i(e) {
				return t((e = 0 == arguments.length ? new Date() : new Date(+e))), e
			}
			return (
				(i.floor = (e) => (t((e = new Date(+e))), e)),
				(i.ceil = (r) => (t((r = new Date(r - 1))), e(r, 1), t(r), r)),
				(i.round = (t) => {
					let e = i(t),
						r = i.ceil(t)
					return t - e < r - t ? e : r
				}),
				(i.offset = (t, r) => (e((t = new Date(+t)), null == r ? 1 : Math.floor(r)), t)),
				(i.range = (r, n, o) => {
					let a,
						u = []
					if (((r = i.ceil(r)), (o = null == o ? 1 : Math.floor(o)), !(r < n) || !(o > 0))) return u
					do u.push((a = new Date(+r))), e(r, o), t(r)
					while (a < r && r < n)
					return u
				}),
				(i.filter = (r) =>
					ik(
						(e) => {
							if (e >= e) for (; t(e), !r(e); ) e.setTime(e - 1)
						},
						(t, n) => {
							if (t >= t)
								if (n < 0) for (; ++n <= 0; ) for (; e(t, -1), !r(t); );
								else for (; --n >= 0; ) for (; e(t, 1), !r(t); );
						},
					)),
				r &&
					((i.count = (e, n) => (iA.setTime(+e), iT.setTime(+n), t(iA), t(iT), Math.floor(r(iA, iT)))),
					(i.every = (t) =>
						isFinite((t = Math.floor(t))) && t > 0
							? t > 1
								? i.filter(n ? (e) => n(e) % t == 0 : (e) => i.count(0, e) % t == 0)
								: i
							: null)),
				i
			)
		}
		let iM = ik(
			(t) => {
				t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
			},
			(t, e) => {
				t.setFullYear(t.getFullYear() + e)
			},
			(t, e) => e.getFullYear() - t.getFullYear(),
			(t) => t.getFullYear(),
		)
		;(iM.every = (t) =>
			isFinite((t = Math.floor(t))) && t > 0
				? ik(
						(e) => {
							e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
						},
						(e, r) => {
							e.setFullYear(e.getFullYear() + r * t)
						},
					)
				: null),
			iM.range
		let iN = ik(
			(t) => {
				t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
			},
			(t, e) => {
				t.setUTCFullYear(t.getUTCFullYear() + e)
			},
			(t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
			(t) => t.getUTCFullYear(),
		)
		;(iN.every = (t) =>
			isFinite((t = Math.floor(t))) && t > 0
				? ik(
						(e) => {
							e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
								e.setUTCMonth(0, 1),
								e.setUTCHours(0, 0, 0, 0)
						},
						(e, r) => {
							e.setUTCFullYear(e.getUTCFullYear() + r * t)
						},
					)
				: null),
			iN.range
		let i_ = ik(
			(t) => {
				t.setDate(1), t.setHours(0, 0, 0, 0)
			},
			(t, e) => {
				t.setMonth(t.getMonth() + e)
			},
			(t, e) => e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12,
			(t) => t.getMonth(),
		)
		i_.range
		let iI = ik(
			(t) => {
				t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
			},
			(t, e) => {
				t.setUTCMonth(t.getUTCMonth() + e)
			},
			(t, e) => e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12,
			(t) => t.getUTCMonth(),
		)
		iI.range
		function iC(t) {
			return ik(
				(e) => {
					e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)), e.setHours(0, 0, 0, 0)
				},
				(t, e) => {
					t.setDate(t.getDate() + 7 * e)
				},
				(t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 6048e5,
			)
		}
		let iD = iC(0),
			iR = iC(1),
			iB = iC(2),
			iL = iC(3),
			iz = iC(4),
			iU = iC(5),
			iF = iC(6)
		function iq(t) {
			return ik(
				(e) => {
					e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)), e.setUTCHours(0, 0, 0, 0)
				},
				(t, e) => {
					t.setUTCDate(t.getUTCDate() + 7 * e)
				},
				(t, e) => (e - t) / 6048e5,
			)
		}
		iD.range, iR.range, iB.range, iL.range, iz.range, iU.range, iF.range
		let iW = iq(0),
			iH = iq(1),
			i$ = iq(2),
			iX = iq(3),
			iK = iq(4),
			iQ = iq(5),
			iG = iq(6)
		iW.range, iH.range, i$.range, iX.range, iK.range, iQ.range, iG.range
		let iV = ik(
			(t) => t.setHours(0, 0, 0, 0),
			(t, e) => t.setDate(t.getDate() + e),
			(t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 864e5,
			(t) => t.getDate() - 1,
		)
		iV.range
		let iY = ik(
			(t) => {
				t.setUTCHours(0, 0, 0, 0)
			},
			(t, e) => {
				t.setUTCDate(t.getUTCDate() + e)
			},
			(t, e) => (e - t) / 864e5,
			(t) => t.getUTCDate() - 1,
		)
		iY.range
		let iZ = ik(
			(t) => {
				t.setUTCHours(0, 0, 0, 0)
			},
			(t, e) => {
				t.setUTCDate(t.getUTCDate() + e)
			},
			(t, e) => (e - t) / 864e5,
			(t) => Math.floor(t / 864e5),
		)
		iZ.range
		let iJ = ik(
			(t) => {
				t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds() - 6e4 * t.getMinutes())
			},
			(t, e) => {
				t.setTime(+t + 36e5 * e)
			},
			(t, e) => (e - t) / 36e5,
			(t) => t.getHours(),
		)
		iJ.range
		let i0 = ik(
			(t) => {
				t.setUTCMinutes(0, 0, 0)
			},
			(t, e) => {
				t.setTime(+t + 36e5 * e)
			},
			(t, e) => (e - t) / 36e5,
			(t) => t.getUTCHours(),
		)
		i0.range
		let i1 = ik(
			(t) => {
				t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds())
			},
			(t, e) => {
				t.setTime(+t + 6e4 * e)
			},
			(t, e) => (e - t) / 6e4,
			(t) => t.getMinutes(),
		)
		i1.range
		let i2 = ik(
			(t) => {
				t.setUTCSeconds(0, 0)
			},
			(t, e) => {
				t.setTime(+t + 6e4 * e)
			},
			(t, e) => (e - t) / 6e4,
			(t) => t.getUTCMinutes(),
		)
		i2.range
		let i5 = ik(
			(t) => {
				t.setTime(t - t.getMilliseconds())
			},
			(t, e) => {
				t.setTime(+t + 1e3 * e)
			},
			(t, e) => (e - t) / 1e3,
			(t) => t.getUTCSeconds(),
		)
		i5.range
		let i3 = ik(
			() => {},
			(t, e) => {
				t.setTime(+t + e)
			},
			(t, e) => e - t,
		)
		function i6(t, e, r, n, i, o) {
			let a = [
				[i5, 1, 1e3],
				[i5, 5, 5e3],
				[i5, 15, 15e3],
				[i5, 30, 3e4],
				[o, 1, 6e4],
				[o, 5, 3e5],
				[o, 15, 9e5],
				[o, 30, 18e5],
				[i, 1, 36e5],
				[i, 3, 108e5],
				[i, 6, 216e5],
				[i, 12, 432e5],
				[n, 1, 864e5],
				[n, 2, 1728e5],
				[r, 1, 6048e5],
				[e, 1, 2592e6],
				[e, 3, 7776e6],
				[t, 1, 31536e6],
			]
			function u(e, r, n) {
				let i = Math.abs(r - e) / n,
					o = r1(([, , t]) => t).right(a, i)
				if (o === a.length) return t.every(rZ(e / 31536e6, r / 31536e6, n))
				if (0 === o) return i3.every(Math.max(rZ(e, r, n), 1))
				let [u, c] = a[i / a[o - 1][2] < a[o][2] / i ? o - 1 : o]
				return u.every(c)
			}
			return [
				function (t, e, r) {
					let n = e < t
					n && ([t, e] = [e, t])
					let i = r && "function" == typeof r.range ? r : u(t, e, r),
						o = i ? i.range(t, +e + 1) : []
					return n ? o.reverse() : o
				},
				u,
			]
		}
		;(i3.every = (t) =>
			isFinite((t = Math.floor(t))) && t > 0
				? t > 1
					? ik(
							(e) => {
								e.setTime(Math.floor(e / t) * t)
							},
							(e, r) => {
								e.setTime(+e + r * t)
							},
							(e, r) => (r - e) / t,
						)
					: i3
				: null),
			i3.range
		let [i8, i4] = i6(iN, iI, iW, iZ, i0, i2),
			[i7, i9] = i6(iM, i_, iD, iV, iJ, i1)
		function ot(t) {
			if (0 <= t.y && t.y < 100) {
				var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L)
				return e.setFullYear(t.y), e
			}
			return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
		}
		function oe(t) {
			if (0 <= t.y && t.y < 100) {
				var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L))
				return e.setUTCFullYear(t.y), e
			}
			return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
		}
		function or(t, e, r) {
			return { y: t, m: e, d: r, H: 0, M: 0, S: 0, L: 0 }
		}
		var on = { "-": "", _: " ", 0: "0" },
			oi = /^\s*\d+/,
			oo = /^%/,
			oa = /[\\^$*+?|[\]().{}]/g
		function ou(t, e, r) {
			var n = t < 0 ? "-" : "",
				i = (n ? -t : t) + "",
				o = i.length
			return n + (o < r ? Array(r - o + 1).join(e) + i : i)
		}
		function oc(t) {
			return t.replace(oa, "\\$&")
		}
		function ol(t) {
			return RegExp("^(?:" + t.map(oc).join("|") + ")", "i")
		}
		function os(t) {
			return new Map(t.map((t, e) => [t.toLowerCase(), e]))
		}
		function of(t, e, r) {
			var n = oi.exec(e.slice(r, r + 1))
			return n ? ((t.w = +n[0]), r + n[0].length) : -1
		}
		function op(t, e, r) {
			var n = oi.exec(e.slice(r, r + 1))
			return n ? ((t.u = +n[0]), r + n[0].length) : -1
		}
		function od(t, e, r) {
			var n = oi.exec(e.slice(r, r + 2))
			return n ? ((t.U = +n[0]), r + n[0].length) : -1
		}
		function oh(t, e, r) {
			var n = oi.exec(e.slice(r, r + 2))
			return n ? ((t.V = +n[0]), r + n[0].length) : -1
		}
		function oy(t, e, r) {
			var n = oi.exec(e.slice(r, r + 2))
			return n ? ((t.W = +n[0]), r + n[0].length) : -1
		}
		function ov(t, e, r) {
			var n = oi.exec(e.slice(r, r + 4))
			return n ? ((t.y = +n[0]), r + n[0].length) : -1
		}
		function om(t, e, r) {
			var n = oi.exec(e.slice(r, r + 2))
			return n ? ((t.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1
		}
		function ob(t, e, r) {
			var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r, r + 6))
			return n ? ((t.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length) : -1
		}
		function og(t, e, r) {
			var n = oi.exec(e.slice(r, r + 1))
			return n ? ((t.q = 3 * n[0] - 3), r + n[0].length) : -1
		}
		function ox(t, e, r) {
			var n = oi.exec(e.slice(r, r + 2))
			return n ? ((t.m = n[0] - 1), r + n[0].length) : -1
		}
		function oO(t, e, r) {
			var n = oi.exec(e.slice(r, r + 2))
			return n ? ((t.d = +n[0]), r + n[0].length) : -1
		}
		function ow(t, e, r) {
			var n = oi.exec(e.slice(r, r + 3))
			return n ? ((t.m = 0), (t.d = +n[0]), r + n[0].length) : -1
		}
		function oS(t, e, r) {
			var n = oi.exec(e.slice(r, r + 2))
			return n ? ((t.H = +n[0]), r + n[0].length) : -1
		}
		function oj(t, e, r) {
			var n = oi.exec(e.slice(r, r + 2))
			return n ? ((t.M = +n[0]), r + n[0].length) : -1
		}
		function oE(t, e, r) {
			var n = oi.exec(e.slice(r, r + 2))
			return n ? ((t.S = +n[0]), r + n[0].length) : -1
		}
		function oP(t, e, r) {
			var n = oi.exec(e.slice(r, r + 3))
			return n ? ((t.L = +n[0]), r + n[0].length) : -1
		}
		function oA(t, e, r) {
			var n = oi.exec(e.slice(r, r + 6))
			return n ? ((t.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1
		}
		function oT(t, e, r) {
			var n = oo.exec(e.slice(r, r + 1))
			return n ? r + n[0].length : -1
		}
		function ok(t, e, r) {
			var n = oi.exec(e.slice(r))
			return n ? ((t.Q = +n[0]), r + n[0].length) : -1
		}
		function oM(t, e, r) {
			var n = oi.exec(e.slice(r))
			return n ? ((t.s = +n[0]), r + n[0].length) : -1
		}
		function oN(t, e) {
			return ou(t.getDate(), e, 2)
		}
		function o_(t, e) {
			return ou(t.getHours(), e, 2)
		}
		function oI(t, e) {
			return ou(t.getHours() % 12 || 12, e, 2)
		}
		function oC(t, e) {
			return ou(1 + iV.count(iM(t), t), e, 3)
		}
		function oD(t, e) {
			return ou(t.getMilliseconds(), e, 3)
		}
		function oR(t, e) {
			return oD(t, e) + "000"
		}
		function oB(t, e) {
			return ou(t.getMonth() + 1, e, 2)
		}
		function oL(t, e) {
			return ou(t.getMinutes(), e, 2)
		}
		function oz(t, e) {
			return ou(t.getSeconds(), e, 2)
		}
		function oU(t) {
			var e = t.getDay()
			return 0 === e ? 7 : e
		}
		function oF(t, e) {
			return ou(iD.count(iM(t) - 1, t), e, 2)
		}
		function oq(t) {
			var e = t.getDay()
			return e >= 4 || 0 === e ? iz(t) : iz.ceil(t)
		}
		function oW(t, e) {
			return (t = oq(t)), ou(iz.count(iM(t), t) + (4 === iM(t).getDay()), e, 2)
		}
		function oH(t) {
			return t.getDay()
		}
		function o$(t, e) {
			return ou(iR.count(iM(t) - 1, t), e, 2)
		}
		function oX(t, e) {
			return ou(t.getFullYear() % 100, e, 2)
		}
		function oK(t, e) {
			return ou((t = oq(t)).getFullYear() % 100, e, 2)
		}
		function oQ(t, e) {
			return ou(t.getFullYear() % 1e4, e, 4)
		}
		function oG(t, e) {
			var r = t.getDay()
			return ou((t = r >= 4 || 0 === r ? iz(t) : iz.ceil(t)).getFullYear() % 1e4, e, 4)
		}
		function oV(t) {
			var e = t.getTimezoneOffset()
			return (e > 0 ? "-" : ((e *= -1), "+")) + ou((e / 60) | 0, "0", 2) + ou(e % 60, "0", 2)
		}
		function oY(t, e) {
			return ou(t.getUTCDate(), e, 2)
		}
		function oZ(t, e) {
			return ou(t.getUTCHours(), e, 2)
		}
		function oJ(t, e) {
			return ou(t.getUTCHours() % 12 || 12, e, 2)
		}
		function o0(t, e) {
			return ou(1 + iY.count(iN(t), t), e, 3)
		}
		function o1(t, e) {
			return ou(t.getUTCMilliseconds(), e, 3)
		}
		function o2(t, e) {
			return o1(t, e) + "000"
		}
		function o5(t, e) {
			return ou(t.getUTCMonth() + 1, e, 2)
		}
		function o3(t, e) {
			return ou(t.getUTCMinutes(), e, 2)
		}
		function o6(t, e) {
			return ou(t.getUTCSeconds(), e, 2)
		}
		function o8(t) {
			var e = t.getUTCDay()
			return 0 === e ? 7 : e
		}
		function o4(t, e) {
			return ou(iW.count(iN(t) - 1, t), e, 2)
		}
		function o7(t) {
			var e = t.getUTCDay()
			return e >= 4 || 0 === e ? iK(t) : iK.ceil(t)
		}
		function o9(t, e) {
			return (t = o7(t)), ou(iK.count(iN(t), t) + (4 === iN(t).getUTCDay()), e, 2)
		}
		function at(t) {
			return t.getUTCDay()
		}
		function ae(t, e) {
			return ou(iH.count(iN(t) - 1, t), e, 2)
		}
		function ar(t, e) {
			return ou(t.getUTCFullYear() % 100, e, 2)
		}
		function an(t, e) {
			return ou((t = o7(t)).getUTCFullYear() % 100, e, 2)
		}
		function ai(t, e) {
			return ou(t.getUTCFullYear() % 1e4, e, 4)
		}
		function ao(t, e) {
			var r = t.getUTCDay()
			return ou((t = r >= 4 || 0 === r ? iK(t) : iK.ceil(t)).getUTCFullYear() % 1e4, e, 4)
		}
		function aa() {
			return "+0000"
		}
		function au() {
			return "%"
		}
		function ac(t) {
			return +t
		}
		function al(t) {
			return Math.floor(t / 1e3)
		}
		function as(t) {
			return new Date(t)
		}
		function af(t) {
			return t instanceof Date ? +t : +new Date(+t)
		}
		function ap(t, e, r, n, i, o, a, u, c, l) {
			var s = nX(),
				f = s.invert,
				p = s.domain,
				d = l(".%L"),
				h = l(":%S"),
				y = l("%I:%M"),
				v = l("%I %p"),
				m = l("%a %d"),
				b = l("%b %d"),
				g = l("%B"),
				x = l("%Y")
			function O(t) {
				return (
					c(t) < t
						? d
						: u(t) < t
							? h
							: a(t) < t
								? y
								: o(t) < t
									? v
									: n(t) < t
										? i(t) < t
											? m
											: b
										: r(t) < t
											? g
											: x
				)(t)
			}
			return (
				(s.invert = function (t) {
					return new Date(f(t))
				}),
				(s.domain = function (t) {
					return arguments.length ? p(Array.from(t, af)) : p().map(as)
				}),
				(s.ticks = function (e) {
					var r = p()
					return t(r[0], r[r.length - 1], null == e ? 10 : e)
				}),
				(s.tickFormat = function (t, e) {
					return null == e ? O : l(e)
				}),
				(s.nice = function (t) {
					var r = p()
					return (
						(t && "function" == typeof t.range) || (t = e(r[0], r[r.length - 1], null == t ? 10 : t)),
						t ? p(n4(r, t)) : s
					)
				}),
				(s.copy = function () {
					return nH(s, ap(t, e, r, n, i, o, a, u, c, l))
				}),
				s
			)
		}
		function ad() {
			return re.apply(
				ap(i7, i9, iM, i_, iD, iV, iJ, i1, i5, j).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]),
				arguments,
			)
		}
		function ah() {
			return re.apply(
				ap(i8, i4, iN, iI, iW, iY, i0, i2, i5, E).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]),
				arguments,
			)
		}
		function ay() {
			var t,
				e,
				r,
				n,
				i,
				o = 0,
				a = 1,
				u = nU,
				c = !1
			function l(e) {
				return null == e || isNaN((e *= 1))
					? i
					: u(0 === r ? 0.5 : ((e = (n(e) - t) * r), c ? Math.max(0, Math.min(1, e)) : e))
			}
			function s(t) {
				return function (e) {
					var r, n
					return arguments.length ? (([r, n] = e), (u = t(r, n)), l) : [u(0), u(1)]
				}
			}
			return (
				(l.domain = function (i) {
					return arguments.length
						? (([o, a] = i), (t = n((o *= 1))), (e = n((a *= 1))), (r = t === e ? 0 : 1 / (e - t)), l)
						: [o, a]
				}),
				(l.clamp = function (t) {
					return arguments.length ? ((c = !!t), l) : c
				}),
				(l.interpolator = function (t) {
					return arguments.length ? ((u = t), l) : u
				}),
				(l.range = s(nR)),
				(l.rangeRound = s(nB)),
				(l.unknown = function (t) {
					return arguments.length ? ((i = t), l) : i
				}),
				function (i) {
					return (n = i), (t = i(o)), (e = i(a)), (r = t === e ? 0 : 1 / (e - t)), l
				}
			)
		}
		function av(t, e) {
			return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())
		}
		function am() {
			var t = n3(ay()(nU))
			return (
				(t.copy = function () {
					return av(t, am())
				}),
				rr.apply(t, arguments)
			)
		}
		function ab() {
			var t = io(ay()).domain([1, 10])
			return (
				(t.copy = function () {
					return av(t, ab()).base(t.base())
				}),
				rr.apply(t, arguments)
			)
		}
		function ag() {
			var t = il(ay())
			return (
				(t.copy = function () {
					return av(t, ag()).constant(t.constant())
				}),
				rr.apply(t, arguments)
			)
		}
		function ax() {
			var t = iy(ay())
			return (
				(t.copy = function () {
					return av(t, ax()).exponent(t.exponent())
				}),
				rr.apply(t, arguments)
			)
		}
		function aO() {
			return ax.apply(null, arguments).exponent(0.5)
		}
		function aw() {
			var t = [],
				e = nU
			function r(r) {
				if (null != r && !isNaN((r *= 1))) return e((r6(t, r, 1) - 1) / (t.length - 1))
			}
			return (
				(r.domain = function (e) {
					if (!arguments.length) return t.slice()
					for (let r of ((t = []), e)) null == r || isNaN((r *= 1)) || t.push(r)
					return t.sort(rJ), r
				}),
				(r.interpolator = function (t) {
					return arguments.length ? ((e = t), r) : e
				}),
				(r.range = function () {
					return t.map((r, n) => e(n / (t.length - 1)))
				}),
				(r.quantiles = function (e) {
					return Array.from({ length: e + 1 }, (r, n) =>
						(function (t, e, r) {
							if (
								!(
									!(n = (t = Float64Array.from(
										(function* (t, e) {
											if (void 0 === e) for (let e of t) null != e && (e *= 1) >= e && (yield e)
											else {
												let r = -1
												for (let n of t)
													null != (n = e(n, ++r, t)) && (n *= 1) >= n && (yield n)
											}
										})(t, void 0),
									)).length) || isNaN((e *= 1))
								)
							) {
								if (e <= 0 || n < 2) return iO(t)
								if (e >= 1) return ix(t)
								var n,
									i = (n - 1) * e,
									o = Math.floor(i),
									a = ix(
										(function t(e, r, n = 0, i = 1 / 0, o) {
											if (
												((r = Math.floor(r)),
												(n = Math.floor(Math.max(0, n))),
												(i = Math.floor(Math.min(e.length - 1, i))),
												!(n <= r && r <= i))
											)
												return e
											for (
												o =
													void 0 === o
														? iw
														: (function (t = rJ) {
																if (t === rJ) return iw
																if ("function" != typeof t)
																	throw TypeError("compare is not a function")
																return (e, r) => {
																	let n = t(e, r)
																	return n || 0 === n
																		? n
																		: (0 === t(r, r)) - (0 === t(e, e))
																}
															})(o);
												i > n;

											) {
												if (i - n > 600) {
													let a = i - n + 1,
														u = r - n + 1,
														c = Math.log(a),
														l = 0.5 * Math.exp((2 * c) / 3),
														s =
															0.5 *
															Math.sqrt((c * l * (a - l)) / a) *
															(u - a / 2 < 0 ? -1 : 1),
														f = Math.max(n, Math.floor(r - (u * l) / a + s)),
														p = Math.min(i, Math.floor(r + ((a - u) * l) / a + s))
													t(e, r, f, p, o)
												}
												let a = e[r],
													u = n,
													c = i
												for (iS(e, n, r), o(e[i], a) > 0 && iS(e, n, i); u < c; ) {
													for (iS(e, u, c), ++u, --c; 0 > o(e[u], a); ) ++u
													for (; o(e[c], a) > 0; ) --c
												}
												0 === o(e[n], a) ? iS(e, n, c) : iS(e, ++c, i),
													c <= r && (n = c + 1),
													r <= c && (i = c - 1)
											}
											return e
										})(t, o).subarray(0, o + 1),
									)
								return a + (iO(t.subarray(o + 1)) - a) * (i - o)
							}
						})(t, n / e),
					)
				}),
				(r.copy = function () {
					return aw(e).domain(t)
				}),
				rr.apply(r, arguments)
			)
		}
		function aS() {
			var t,
				e,
				r,
				n,
				i,
				o,
				a,
				u = 0,
				c = 0.5,
				l = 1,
				s = 1,
				f = nU,
				p = !1
			function d(t) {
				return isNaN((t *= 1))
					? a
					: ((t = 0.5 + ((t = +o(t)) - e) * (s * t < s * e ? n : i)), f(p ? Math.max(0, Math.min(1, t)) : t))
			}
			function h(t) {
				return function (e) {
					var r, n, i
					return arguments.length
						? (([r, n, i] = e),
							(f = (function (t, e) {
								void 0 === e && ((e = t), (t = nR))
								for (var r = 0, n = e.length - 1, i = e[0], o = Array(n < 0 ? 0 : n); r < n; )
									o[r] = t(i, (i = e[++r]))
								return function (t) {
									var e = Math.max(0, Math.min(n - 1, Math.floor((t *= n))))
									return o[e](t - e)
								}
							})(t, [r, n, i])),
							d)
						: [f(0), f(0.5), f(1)]
				}
			}
			return (
				(d.domain = function (a) {
					return arguments.length
						? (([u, c, l] = a),
							(t = o((u *= 1))),
							(e = o((c *= 1))),
							(r = o((l *= 1))),
							(n = t === e ? 0 : 0.5 / (e - t)),
							(i = e === r ? 0 : 0.5 / (r - e)),
							(s = e < t ? -1 : 1),
							d)
						: [u, c, l]
				}),
				(d.clamp = function (t) {
					return arguments.length ? ((p = !!t), d) : p
				}),
				(d.interpolator = function (t) {
					return arguments.length ? ((f = t), d) : f
				}),
				(d.range = h(nR)),
				(d.rangeRound = h(nB)),
				(d.unknown = function (t) {
					return arguments.length ? ((a = t), d) : a
				}),
				function (a) {
					return (
						(o = a),
						(t = a(u)),
						(e = a(c)),
						(r = a(l)),
						(n = t === e ? 0 : 0.5 / (e - t)),
						(i = e === r ? 0 : 0.5 / (r - e)),
						(s = e < t ? -1 : 1),
						d
					)
				}
			)
		}
		function aj() {
			var t = n3(aS()(nU))
			return (
				(t.copy = function () {
					return av(t, aj())
				}),
				rr.apply(t, arguments)
			)
		}
		function aE() {
			var t = io(aS()).domain([0.1, 1, 10])
			return (
				(t.copy = function () {
					return av(t, aE()).base(t.base())
				}),
				rr.apply(t, arguments)
			)
		}
		function aP() {
			var t = il(aS())
			return (
				(t.copy = function () {
					return av(t, aP()).constant(t.constant())
				}),
				rr.apply(t, arguments)
			)
		}
		function aA() {
			var t = iy(aS())
			return (
				(t.copy = function () {
					return av(t, aA()).exponent(t.exponent())
				}),
				rr.apply(t, arguments)
			)
		}
		function aT() {
			return aA.apply(null, arguments).exponent(0.5)
		}
		;(j = (S = (function (t) {
			var e = t.dateTime,
				r = t.date,
				n = t.time,
				i = t.periods,
				o = t.days,
				a = t.shortDays,
				u = t.months,
				c = t.shortMonths,
				l = ol(i),
				s = os(i),
				f = ol(o),
				p = os(o),
				d = ol(a),
				h = os(a),
				y = ol(u),
				v = os(u),
				m = ol(c),
				b = os(c),
				g = {
					a: function (t) {
						return a[t.getDay()]
					},
					A: function (t) {
						return o[t.getDay()]
					},
					b: function (t) {
						return c[t.getMonth()]
					},
					B: function (t) {
						return u[t.getMonth()]
					},
					c: null,
					d: oN,
					e: oN,
					f: oR,
					g: oK,
					G: oG,
					H: o_,
					I: oI,
					j: oC,
					L: oD,
					m: oB,
					M: oL,
					p: function (t) {
						return i[+(t.getHours() >= 12)]
					},
					q: function (t) {
						return 1 + ~~(t.getMonth() / 3)
					},
					Q: ac,
					s: al,
					S: oz,
					u: oU,
					U: oF,
					V: oW,
					w: oH,
					W: o$,
					x: null,
					X: null,
					y: oX,
					Y: oQ,
					Z: oV,
					"%": au,
				},
				x = {
					a: function (t) {
						return a[t.getUTCDay()]
					},
					A: function (t) {
						return o[t.getUTCDay()]
					},
					b: function (t) {
						return c[t.getUTCMonth()]
					},
					B: function (t) {
						return u[t.getUTCMonth()]
					},
					c: null,
					d: oY,
					e: oY,
					f: o2,
					g: an,
					G: ao,
					H: oZ,
					I: oJ,
					j: o0,
					L: o1,
					m: o5,
					M: o3,
					p: function (t) {
						return i[+(t.getUTCHours() >= 12)]
					},
					q: function (t) {
						return 1 + ~~(t.getUTCMonth() / 3)
					},
					Q: ac,
					s: al,
					S: o6,
					u: o8,
					U: o4,
					V: o9,
					w: at,
					W: ae,
					x: null,
					X: null,
					y: ar,
					Y: ai,
					Z: aa,
					"%": au,
				},
				O = {
					a: function (t, e, r) {
						var n = d.exec(e.slice(r))
						return n ? ((t.w = h.get(n[0].toLowerCase())), r + n[0].length) : -1
					},
					A: function (t, e, r) {
						var n = f.exec(e.slice(r))
						return n ? ((t.w = p.get(n[0].toLowerCase())), r + n[0].length) : -1
					},
					b: function (t, e, r) {
						var n = m.exec(e.slice(r))
						return n ? ((t.m = b.get(n[0].toLowerCase())), r + n[0].length) : -1
					},
					B: function (t, e, r) {
						var n = y.exec(e.slice(r))
						return n ? ((t.m = v.get(n[0].toLowerCase())), r + n[0].length) : -1
					},
					c: function (t, r, n) {
						return j(t, e, r, n)
					},
					d: oO,
					e: oO,
					f: oA,
					g: om,
					G: ov,
					H: oS,
					I: oS,
					j: ow,
					L: oP,
					m: ox,
					M: oj,
					p: function (t, e, r) {
						var n = l.exec(e.slice(r))
						return n ? ((t.p = s.get(n[0].toLowerCase())), r + n[0].length) : -1
					},
					q: og,
					Q: ok,
					s: oM,
					S: oE,
					u: op,
					U: od,
					V: oh,
					w: of,
					W: oy,
					x: function (t, e, n) {
						return j(t, r, e, n)
					},
					X: function (t, e, r) {
						return j(t, n, e, r)
					},
					y: om,
					Y: ov,
					Z: ob,
					"%": oT,
				}
			function w(t, e) {
				return function (r) {
					var n,
						i,
						o,
						a = [],
						u = -1,
						c = 0,
						l = t.length
					for (r instanceof Date || (r = new Date(+r)); ++u < l; )
						37 === t.charCodeAt(u) &&
							(a.push(t.slice(c, u)),
							null != (i = on[(n = t.charAt(++u))]) ? (n = t.charAt(++u)) : (i = "e" === n ? " " : "0"),
							(o = e[n]) && (n = o(r, i)),
							a.push(n),
							(c = u + 1))
					return a.push(t.slice(c, u)), a.join("")
				}
			}
			function S(t, e) {
				return function (r) {
					var n,
						i,
						o = or(1900, void 0, 1)
					if (j(o, t, (r += ""), 0) != r.length) return null
					if ("Q" in o) return new Date(o.Q)
					if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0))
					if (
						(!e || "Z" in o || (o.Z = 0),
						"p" in o && (o.H = (o.H % 12) + 12 * o.p),
						void 0 === o.m && (o.m = "q" in o ? o.q : 0),
						"V" in o)
					) {
						if (o.V < 1 || o.V > 53) return null
						"w" in o || (o.w = 1),
							"Z" in o
								? ((n = (i = (n = oe(or(o.y, 0, 1))).getUTCDay()) > 4 || 0 === i ? iH.ceil(n) : iH(n)),
									(n = iY.offset(n, (o.V - 1) * 7)),
									(o.y = n.getUTCFullYear()),
									(o.m = n.getUTCMonth()),
									(o.d = n.getUTCDate() + ((o.w + 6) % 7)))
								: ((n = (i = (n = ot(or(o.y, 0, 1))).getDay()) > 4 || 0 === i ? iR.ceil(n) : iR(n)),
									(n = iV.offset(n, (o.V - 1) * 7)),
									(o.y = n.getFullYear()),
									(o.m = n.getMonth()),
									(o.d = n.getDate() + ((o.w + 6) % 7)))
					} else
						("W" in o || "U" in o) &&
							("w" in o || (o.w = "u" in o ? o.u % 7 : +("W" in o)),
							(i = "Z" in o ? oe(or(o.y, 0, 1)).getUTCDay() : ot(or(o.y, 0, 1)).getDay()),
							(o.m = 0),
							(o.d =
								"W" in o ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7) : o.w + 7 * o.U - ((i + 6) % 7)))
					return "Z" in o ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), oe(o)) : ot(o)
				}
			}
			function j(t, e, r, n) {
				for (var i, o, a = 0, u = e.length, c = r.length; a < u; ) {
					if (n >= c) return -1
					if (37 === (i = e.charCodeAt(a++))) {
						if (!(o = O[(i = e.charAt(a++)) in on ? e.charAt(a++) : i]) || (n = o(t, r, n)) < 0) return -1
					} else if (i != r.charCodeAt(n++)) return -1
				}
				return n
			}
			return (
				(g.x = w(r, g)),
				(g.X = w(n, g)),
				(g.c = w(e, g)),
				(x.x = w(r, x)),
				(x.X = w(n, x)),
				(x.c = w(e, x)),
				{
					format: function (t) {
						var e = w((t += ""), g)
						return (
							(e.toString = function () {
								return t
							}),
							e
						)
					},
					parse: function (t) {
						var e = S((t += ""), !1)
						return (
							(e.toString = function () {
								return t
							}),
							e
						)
					},
					utcFormat: function (t) {
						var e = w((t += ""), x)
						return (
							(e.toString = function () {
								return t
							}),
							e
						)
					},
					utcParse: function (t) {
						var e = S((t += ""), !0)
						return (
							(e.toString = function () {
								return t
							}),
							e
						)
					},
				}
			)
		})({
			dateTime: "%x, %X",
			date: "%-m/%-d/%Y",
			time: "%-I:%M:%S %p",
			periods: ["AM", "PM"],
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			months: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			],
			shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		})).format),
			S.parse,
			(E = S.utcFormat),
			S.utcParse,
			t.s(
				[
					"scaleBand",
					() => rc,
					"scaleDiverging",
					() => aj,
					"scaleDivergingLog",
					() => aE,
					"scaleDivergingPow",
					() => aA,
					"scaleDivergingSqrt",
					() => aT,
					"scaleDivergingSymlog",
					() => aP,
					"scaleIdentity",
					() => n8,
					"scaleImplicit",
					0,
					ra,
					"scaleLinear",
					() => n6,
					"scaleLog",
					() => ia,
					"scaleOrdinal",
					() => ru,
					"scalePoint",
					() => rl,
					"scalePow",
					() => iv,
					"scaleQuantile",
					() => ij,
					"scaleQuantize",
					() => iE,
					"scaleRadial",
					() => ig,
					"scaleSequential",
					() => am,
					"scaleSequentialLog",
					() => ab,
					"scaleSequentialPow",
					() => ax,
					"scaleSequentialQuantile",
					() => aw,
					"scaleSequentialSqrt",
					() => aO,
					"scaleSequentialSymlog",
					() => ag,
					"scaleSqrt",
					() => im,
					"scaleSymlog",
					() => is,
					"scaleThreshold",
					() => iP,
					"scaleTime",
					() => ad,
					"scaleUtc",
					() => ah,
					"tickFormat",
					() => n5,
				],
				89717,
			),
			t.i(89717),
			t.s(
				[
					"scaleBand",
					() => rc,
					"scaleDiverging",
					() => aj,
					"scaleDivergingLog",
					() => aE,
					"scaleDivergingPow",
					() => aA,
					"scaleDivergingSqrt",
					() => aT,
					"scaleDivergingSymlog",
					() => aP,
					"scaleIdentity",
					() => n8,
					"scaleImplicit",
					0,
					ra,
					"scaleLinear",
					() => n6,
					"scaleLog",
					() => ia,
					"scaleOrdinal",
					() => ru,
					"scalePoint",
					() => rl,
					"scalePow",
					() => iv,
					"scaleQuantile",
					() => ij,
					"scaleQuantize",
					() => iE,
					"scaleRadial",
					() => ig,
					"scaleSequential",
					() => am,
					"scaleSequentialLog",
					() => ab,
					"scaleSequentialPow",
					() => ax,
					"scaleSequentialQuantile",
					() => aw,
					"scaleSequentialSqrt",
					() => aO,
					"scaleSequentialSymlog",
					() => ag,
					"scaleSqrt",
					() => im,
					"scaleSymlog",
					() => is,
					"scaleThreshold",
					() => iP,
					"scaleTime",
					() => ad,
					"scaleUtc",
					() => ah,
					"tickFormat",
					() => n5,
				],
				29419,
			)
		var ak = t.i(29419)
		function aM(t) {
			return "object" == typeof t && "length" in t ? t : Array.from(t)
		}
		t.i(5922), Array.prototype.slice
		var aN = t.i(59683)
		function a_(t, e) {
			if ((i = t.length) > 1)
				for (var r, n, i, o = 1, a = t[e[0]], u = a.length; o < i; ++o)
					for (n = a, a = t[e[o]], r = 0; r < u; ++r) a[r][1] += a[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1]
		}
		function aI(t) {
			for (var e = t.length, r = Array(e); --e >= 0; ) r[e] = e
			return r
		}
		function aC(t, e) {
			return t[e]
		}
		function aD(t) {
			let e = []
			return (e.key = t), e
		}
		var aR = t.i(87768),
			aB = t.i(19017),
			aL = t.i(55221),
			az = t.i(97917),
			aU = t.i(32864),
			aF = t.i(83276),
			aq = t.i(40455),
			aW = t.i(60600)
		function aH(t, e) {
			;(null == e || e > t.length) && (e = t.length)
			for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r]
			return n
		}
		var a$ = function (t) {
				return t
			},
			aX = {},
			aK = function (t) {
				return t === aX
			},
			aQ = function (t) {
				return function e() {
					return 0 == arguments.length ||
						(1 == arguments.length && aK(arguments.length <= 0 ? void 0 : arguments[0]))
						? e
						: t.apply(void 0, arguments)
				}
			},
			aG = function (t) {
				return (function t(e, r) {
					return 1 === e
						? r
						: aQ(function () {
								for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o]
								var a = i.filter(function (t) {
									return t !== aX
								}).length
								return a >= e
									? r.apply(void 0, i)
									: t(
											e - a,
											aQ(function () {
												for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
													e[n] = arguments[n]
												var o = i.map(function (t) {
													return aK(t) ? e.shift() : t
												})
												return r.apply(
													void 0,
													(
														(function (t) {
															if (Array.isArray(t)) return aH(t)
														})(o) ||
														(function (t) {
															if ("u" > typeof Symbol && Symbol.iterator in Object(t))
																return Array.from(t)
														})(o) ||
														(function (t, e) {
															if (t) {
																if ("string" == typeof t) return aH(t, void 0)
																var r = Object.prototype.toString.call(t).slice(8, -1)
																if (
																	("Object" === r &&
																		t.constructor &&
																		(r = t.constructor.name),
																	"Map" === r || "Set" === r)
																)
																	return Array.from(t)
																if (
																	"Arguments" === r ||
																	/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
																)
																	return aH(t, void 0)
															}
														})(o) ||
														(function () {
															throw TypeError(
																"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
															)
														})()
													).concat(e),
												)
											}),
										)
							})
				})(t.length, t)
			},
			aV = function (t, e) {
				for (var r = [], n = t; n < e; ++n) r[n - t] = n
				return r
			},
			aY = aG(function (t, e) {
				return Array.isArray(e)
					? e.map(t)
					: Object.keys(e)
							.map(function (t) {
								return e[t]
							})
							.map(t)
			}),
			aZ = function () {
				for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r]
				if (!e.length) return a$
				var n = e.reverse(),
					i = n[0],
					o = n.slice(1)
				return function () {
					return o.reduce(
						function (t, e) {
							return e(t)
						},
						i.apply(void 0, arguments),
					)
				}
			},
			aJ = function (t) {
				return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("")
			},
			a0 = function (t) {
				var e = null,
					r = null
				return function () {
					for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o]
					return e &&
						i.every(function (t, r) {
							return t === e[r]
						})
						? r
						: ((e = i), (r = t.apply(void 0, i)))
				}
			}
		aG(function (t, e, r) {
			var n = +t
			return n + r * (e - n)
		}),
			aG(function (t, e, r) {
				var n = e - t
				return (r - t) / (n = n || 1 / 0)
			}),
			aG(function (t, e, r) {
				var n = e - t
				return Math.max(0, Math.min(1, (r - t) / (n = n || 1 / 0)))
			})
		let a1 = function (t, e, r) {
				for (var n = new aW.default(t), i = 0, o = []; n.lt(e) && i < 1e5; )
					o.push(n.toNumber()), (n = n.add(r)), i++
				return o
			},
			a2 = function (t) {
				return 0 === t ? 1 : Math.floor(new aW.default(t).abs().log(10).toNumber()) + 1
			}
		function a5(t) {
			return (
				(function (t) {
					if (Array.isArray(t)) return a8(t)
				})(t) ||
				(function (t) {
					if ("u" > typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
				})(t) ||
				a6(t) ||
				(function () {
					throw TypeError(
						"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function a3(t, e) {
			return (
				(function (t) {
					if (Array.isArray(t)) return t
				})(t) ||
				(function (t, e) {
					if ("u" > typeof Symbol && Symbol.iterator in Object(t)) {
						var r = [],
							n = !0,
							i = !1,
							o = void 0
						try {
							for (
								var a, u = t[Symbol.iterator]();
								!(n = (a = u.next()).done) && (r.push(a.value), !e || r.length !== e);
								n = !0
							);
						} catch (t) {
							;(i = !0), (o = t)
						} finally {
							try {
								n || null == u.return || u.return()
							} finally {
								if (i) throw o
							}
						}
						return r
					}
				})(t, e) ||
				a6(t, e) ||
				(function () {
					throw TypeError(
						"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function a6(t, e) {
			if (t) {
				if ("string" == typeof t) return a8(t, e)
				var r = Object.prototype.toString.call(t).slice(8, -1)
				if (("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r))
					return Array.from(t)
				if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a8(t, e)
			}
		}
		function a8(t, e) {
			;(null == e || e > t.length) && (e = t.length)
			for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r]
			return n
		}
		function a4(t) {
			var e = a3(t, 2),
				r = e[0],
				n = e[1],
				i = r,
				o = n
			return r > n && ((i = n), (o = r)), [i, o]
		}
		function a7(t, e, r) {
			if (t.lte(0)) return new aW.default(0)
			var n = a2(t.toNumber()),
				i = new aW.default(10).pow(n),
				o = t.div(i),
				a = 1 !== n ? 0.05 : 0.1,
				u = new aW.default(Math.ceil(o.div(a).toNumber())).add(r).mul(a).mul(i)
			return e ? u : new aW.default(Math.ceil(u))
		}
		function a9(t, e, r) {
			var n = 1,
				i = new aW.default(t)
			if (!i.isint() && r) {
				var o = Math.abs(t)
				o < 1
					? ((n = new aW.default(10).pow(a2(t) - 1)),
						(i = new aW.default(Math.floor(i.div(n).toNumber())).mul(n)))
					: o > 1 && (i = new aW.default(Math.floor(t)))
			} else 0 === t ? (i = new aW.default(Math.floor((e - 1) / 2))) : r || (i = new aW.default(Math.floor(t)))
			var a = Math.floor((e - 1) / 2)
			return aZ(
				aY(function (t) {
					return i.add(new aW.default(t - a).mul(n)).toNumber()
				}),
				aV,
			)(0, e)
		}
		var ut = a0(function (t) {
			var e = a3(t, 2),
				r = e[0],
				n = e[1],
				i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
				o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
				a = Math.max(i, 2),
				u = a3(a4([r, n]), 2),
				c = u[0],
				l = u[1]
			if (c === -1 / 0 || l === 1 / 0) {
				var s =
					l === 1 / 0
						? [c].concat(
								a5(
									aV(0, i - 1).map(function () {
										return 1 / 0
									}),
								),
							)
						: [].concat(
								a5(
									aV(0, i - 1).map(function () {
										return -1 / 0
									}),
								),
								[l],
							)
				return r > n ? aJ(s) : s
			}
			if (c === l) return a9(c, i, o)
			var f = (function t(e, r, n, i) {
					var o,
						a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
					if (!Number.isFinite((r - e) / (n - 1)))
						return { step: new aW.default(0), tickMin: new aW.default(0), tickMax: new aW.default(0) }
					var u = a7(new aW.default(r).sub(e).div(n - 1), i, a),
						c = Math.ceil(
							(o =
								e <= 0 && r >= 0
									? new aW.default(0)
									: (o = new aW.default(e).add(r).div(2)).sub(new aW.default(o).mod(u)))
								.sub(e)
								.div(u)
								.toNumber(),
						),
						l = Math.ceil(new aW.default(r).sub(o).div(u).toNumber()),
						s = c + l + 1
					return s > n
						? t(e, r, n, i, a + 1)
						: (s < n && ((l = r > 0 ? l + (n - s) : l), (c = r > 0 ? c : c + (n - s))),
							{
								step: u,
								tickMin: o.sub(new aW.default(c).mul(u)),
								tickMax: o.add(new aW.default(l).mul(u)),
							})
				})(c, l, a, o),
				p = f.step,
				d = a1(f.tickMin, f.tickMax.add(new aW.default(0.1).mul(p)), p)
			return r > n ? aJ(d) : d
		})
		a0(function (t) {
			var e = a3(t, 2),
				r = e[0],
				n = e[1],
				i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
				o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
				a = Math.max(i, 2),
				u = a3(a4([r, n]), 2),
				c = u[0],
				l = u[1]
			if (c === -1 / 0 || l === 1 / 0) return [r, n]
			if (c === l) return a9(c, i, o)
			var s = a7(new aW.default(l).sub(c).div(a - 1), o, 0),
				f = aZ(
					aY(function (t) {
						return new aW.default(c).add(new aW.default(t).mul(s)).toNumber()
					}),
					aV,
				)(0, a).filter(function (t) {
					return t >= c && t <= l
				})
			return r > n ? aJ(f) : f
		})
		var ue = a0(function (t, e) {
				var r = a3(t, 2),
					n = r[0],
					i = r[1],
					o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
					a = a3(a4([n, i]), 2),
					u = a[0],
					c = a[1]
				if (u === -1 / 0 || c === 1 / 0) return [n, i]
				if (u === c) return [u]
				var l = Math.max(e, 2),
					s = a7(new aW.default(c).sub(u).div(l - 1), o, 0),
					f = [].concat(a5(a1(new aW.default(u), new aW.default(c).sub(new aW.default(0.99).mul(s)), s)), [c])
				return n > i ? aJ(f) : f
			}),
			ur = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"]
		function un(t) {
			return (un =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function ui() {
			return (ui = Object.assign.bind()).apply(this, arguments)
		}
		function uo(t, e) {
			;(null == e || e > t.length) && (e = t.length)
			for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r]
			return n
		}
		function ua() {
			try {
				var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (t) {}
			return (ua = function () {
				return !!t
			})()
		}
		function uu(t) {
			return (uu = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					})(t)
		}
		function uc(t, e) {
			return (uc = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (t, e) {
						return (t.__proto__ = e), t
					})(t, e)
		}
		function ul(t, e, r) {
			return (
				(e = us(e)) in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		function us(t) {
			var e = (function (t, e) {
				if ("object" != un(t) || !t) return t
				var r = t[Symbol.toPrimitive]
				if (void 0 !== r) {
					var n = r.call(t, e || "default")
					if ("object" != un(n)) return n
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === e ? String : Number)(t)
			})(t, "string")
			return "symbol" == un(e) ? e : e + ""
		}
		var uf = (function (t) {
			var e
			function r() {
				var t, e
				if (!(this instanceof r)) throw TypeError("Cannot call a class as a function")
				return (
					(t = r),
					(e = arguments),
					(t = uu(t)),
					(function (t, e) {
						if (e && ("object" === un(e) || "function" == typeof e)) return e
						if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined")
						var r = t
						if (void 0 === r)
							throw ReferenceError("this hasn't been initialised - super() hasn't been called")
						return r
					})(this, ua() ? Reflect.construct(t, e || [], uu(this).constructor) : t.apply(this, e))
				)
			}
			if ("function" != typeof t && null !== t)
				throw TypeError("Super expression must either be null or a function")
			return (
				(r.prototype = Object.create(t && t.prototype, {
					constructor: { value: r, writable: !0, configurable: !0 },
				})),
				Object.defineProperty(r, "prototype", { writable: !1 }),
				t && uc(r, t),
				(e = [
					{
						key: "render",
						value: function () {
							var t = this.props,
								e = t.offset,
								r = t.layout,
								n = t.width,
								i = t.dataKey,
								o = t.data,
								a = t.dataPointFormatter,
								u = t.xAxis,
								c = t.yAxis,
								l = (function (t, e) {
									if (null == t) return {}
									var r,
										n,
										i = (function (t, e) {
											if (null == t) return {}
											var r = {}
											for (var n in t)
												if (Object.prototype.hasOwnProperty.call(t, n)) {
													if (e.indexOf(n) >= 0) continue
													r[n] = t[n]
												}
											return r
										})(t, e)
									if (Object.getOwnPropertySymbols) {
										var o = Object.getOwnPropertySymbols(t)
										for (n = 0; n < o.length; n++)
											(r = o[n]),
												!(e.indexOf(r) >= 0) &&
													Object.prototype.propertyIsEnumerable.call(t, r) &&
													(i[r] = t[r])
									}
									return i
								})(t, ur),
								s = (0, tc.filterProps)(l, !1)
							"x" === this.props.direction && "number" !== u.type && ta(!1)
							var f = o.map(function (t) {
								var o,
									l,
									f = a(t, i),
									p = f.x,
									d = f.y,
									h = f.value,
									y = f.errorVal
								if (!y) return null
								var v = []
								if (Array.isArray(y)) {
									var m =
										(function (t) {
											if (Array.isArray(t)) return t
										})(y) ||
										(function (t, e) {
											var r =
												null == t
													? null
													: ("u" > typeof Symbol && t[Symbol.iterator]) || t["@@iterator"]
											if (null != r) {
												var n,
													i,
													o,
													a,
													u = [],
													c = !0,
													l = !1
												try {
													;(o = (r = r.call(t)).next), !1
													for (
														;
														!(c = (n = o.call(r)).done) &&
														(u.push(n.value), 2 !== u.length);
														c = !0
													);
												} catch (t) {
													;(l = !0), (i = t)
												} finally {
													try {
														if (
															!c &&
															null != r.return &&
															((a = r.return()), Object(a) !== a)
														)
															return
													} finally {
														if (l) throw i
													}
												}
												return u
											}
										})(y, 2) ||
										(function (t, e) {
											if (t) {
												if ("string" == typeof t) return uo(t, 2)
												var r = Object.prototype.toString.call(t).slice(8, -1)
												if (
													("Object" === r && t.constructor && (r = t.constructor.name),
													"Map" === r || "Set" === r)
												)
													return Array.from(t)
												if (
													"Arguments" === r ||
													/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
												)
													return uo(t, 2)
											}
										})(y, 2) ||
										(function () {
											throw TypeError(
												"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
											)
										})()
									;(o = m[0]), (l = m[1])
								} else o = l = y
								if ("vertical" === r) {
									var b = u.scale,
										g = d + e,
										x = g + n,
										O = g - n,
										w = b(h - o),
										S = b(h + l)
									v.push({ x1: S, y1: x, x2: S, y2: O }),
										v.push({ x1: w, y1: g, x2: S, y2: g }),
										v.push({ x1: w, y1: x, x2: w, y2: O })
								} else if ("horizontal" === r) {
									var j = c.scale,
										E = p + e,
										P = E - n,
										T = E + n,
										k = j(h - o),
										M = j(h + l)
									v.push({ x1: P, y1: M, x2: T, y2: M }),
										v.push({ x1: E, y1: k, x2: E, y2: M }),
										v.push({ x1: P, y1: k, x2: T, y2: k })
								}
								return A.default.createElement(
									tf,
									ui(
										{
											className: "recharts-errorBar",
											key: "bar-".concat(
												v.map(function (t) {
													return ""
														.concat(t.x1, "-")
														.concat(t.x2, "-")
														.concat(t.y1, "-")
														.concat(t.y2)
												}),
											),
										},
										s,
									),
									v.map(function (t) {
										return A.default.createElement(
											"line",
											ui({}, t, {
												key: "line-"
													.concat(t.x1, "-")
													.concat(t.x2, "-")
													.concat(t.y1, "-")
													.concat(t.y2),
											}),
										)
									}),
								)
							})
							return A.default.createElement(tf, { className: "recharts-errorBars" }, f)
						},
					},
				]),
				(function (t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r]
						;(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(t, us(n.key), n)
					}
				})(r.prototype, e),
				Object.defineProperty(r, "prototype", { writable: !1 }),
				r
			)
		})(A.default.Component)
		function up(t) {
			return (up =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function ud(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function uh(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? ud(Object(r), !0).forEach(function (e) {
							var n, i, o
							;(n = t),
								(i = e),
								(o = r[e]),
								(i = (function (t) {
									var e = (function (t, e) {
										if ("object" != up(t) || !t) return t
										var r = t[Symbol.toPrimitive]
										if (void 0 !== r) {
											var n = r.call(t, e || "default")
											if ("object" != up(n)) return n
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === e ? String : Number)(t)
									})(t, "string")
									return "symbol" == up(e) ? e : e + ""
								})(i)) in n
									? Object.defineProperty(n, i, {
											value: o,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (n[i] = o)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: ud(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		ul(uf, "defaultProps", { stroke: "black", strokeWidth: 1.5, width: 5, offset: 0, layout: "horizontal" }),
			ul(uf, "displayName", "ErrorBar")
		var uy = function (t) {
			var e,
				r = t.children,
				n = t.formattedGraphicalItems,
				i = t.legendWidth,
				o = t.legendContent,
				a = (0, tc.findChildByType)(r, td.Legend)
			if (!a) return null
			var u = td.Legend.defaultProps,
				c = void 0 !== u ? uh(uh({}, u), a.props) : {}
			return (
				(e =
					a.props && a.props.payload
						? a.props && a.props.payload
						: "children" === o
							? (n || []).reduce(function (t, e) {
									var r = e.item,
										n = e.props,
										i = n.sectors || n.data || []
									return t.concat(
										i.map(function (t) {
											return {
												type: a.props.iconType || r.props.legendType,
												value: t.name,
												color: t.fill,
												payload: t,
											}
										}),
									)
								}, [])
							: (n || []).map(function (t) {
									var e = t.item,
										r = e.type.defaultProps,
										n = void 0 !== r ? uh(uh({}, r), e.props) : {},
										i = n.dataKey,
										o = n.name,
										a = n.legendType
									return {
										inactive: n.hide,
										dataKey: i,
										type: c.iconType || a || "square",
										color: uE(e),
										value: o || i,
										payload: n,
									}
								})),
				uh(uh(uh({}, c), td.Legend.getWithHeight(a, i)), {}, { payload: e, item: a })
			)
		}
		function uv(t) {
			return (uv =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function um(t) {
			return (
				(function (t) {
					if (Array.isArray(t)) return ub(t)
				})(t) ||
				(function (t) {
					if (("u" > typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"])
						return Array.from(t)
				})(t) ||
				(function (t, e) {
					if (t) {
						if ("string" == typeof t) return ub(t, void 0)
						var r = Object.prototype.toString.call(t).slice(8, -1)
						if (("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r))
							return Array.from(t)
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
							return ub(t, void 0)
					}
				})(t) ||
				(function () {
					throw TypeError(
						"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function ub(t, e) {
			;(null == e || e > t.length) && (e = t.length)
			for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r]
			return n
		}
		function ug(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function ux(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? ug(Object(r), !0).forEach(function (e) {
							uO(t, e, r[e])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: ug(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		function uO(t, e, r) {
			var n
			return (
				((n = (function (t, e) {
					if ("object" != uv(t) || !t) return t
					var r = t[Symbol.toPrimitive]
					if (void 0 !== r) {
						var n = r.call(t, e || "default")
						if ("object" != uv(n)) return n
						throw TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === e ? String : Number)(t)
				})(e, "string")),
				(e = "symbol" == uv(n) ? n : n + "") in t)
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		function uw(t, e, r) {
			return (0, J.default)(t) || (0, J.default)(e)
				? r
				: (0, rs.isNumOrStr)(e)
					? (0, tr.default)(t, e, r)
					: (0, tt.default)(e)
						? e(t)
						: r
		}
		function uS(t, e, r, n) {
			var i = (0, az.default)(t, function (t) {
				return uw(t, e)
			})
			if ("number" === r) {
				var o = i.filter(function (t) {
					return (0, rs.isNumber)(t) || parseFloat(t)
				})
				return o.length ? [(0, aB.default)(o), (0, aR.default)(o)] : [1 / 0, -1 / 0]
			}
			return (
				n
					? i.filter(function (t) {
							return !(0, J.default)(t)
						})
					: i
			).map(function (t) {
				return (0, rs.isNumOrStr)(t) || t instanceof Date ? t : ""
			})
		}
		var uj = function (t) {
				var e,
					r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
					n = arguments.length > 2 ? arguments[2] : void 0,
					i = arguments.length > 3 ? arguments[3] : void 0,
					o = -1,
					a = null != (e = null == r ? void 0 : r.length) ? e : 0
				if (a <= 1) return 0
				if (i && "angleAxis" === i.axisType && 1e-6 >= Math.abs(Math.abs(i.range[1] - i.range[0]) - 360))
					for (var u = i.range, c = 0; c < a; c++) {
						var l = c > 0 ? n[c - 1].coordinate : n[a - 1].coordinate,
							s = n[c].coordinate,
							f = c >= a - 1 ? n[0].coordinate : n[c + 1].coordinate,
							p = void 0
						if ((0, rs.mathSign)(s - l) !== (0, rs.mathSign)(f - s)) {
							var d = []
							if ((0, rs.mathSign)(f - s) === (0, rs.mathSign)(u[1] - u[0])) {
								p = f
								var h = s + u[1] - u[0]
								;(d[0] = Math.min(h, (h + l) / 2)), (d[1] = Math.max(h, (h + l) / 2))
							} else {
								p = l
								var y = f + u[1] - u[0]
								;(d[0] = Math.min(s, (y + s) / 2)), (d[1] = Math.max(s, (y + s) / 2))
							}
							var v = [Math.min(s, (p + s) / 2), Math.max(s, (p + s) / 2)]
							if ((t > v[0] && t <= v[1]) || (t >= d[0] && t <= d[1])) {
								o = n[c].index
								break
							}
						} else {
							var m = Math.min(l, f),
								b = Math.max(l, f)
							if (t > (m + s) / 2 && t <= (b + s) / 2) {
								o = n[c].index
								break
							}
						}
					}
				else
					for (var g = 0; g < a; g++)
						if (
							(0 === g && t <= (r[g].coordinate + r[g + 1].coordinate) / 2) ||
							(g > 0 &&
								g < a - 1 &&
								t > (r[g].coordinate + r[g - 1].coordinate) / 2 &&
								t <= (r[g].coordinate + r[g + 1].coordinate) / 2) ||
							(g === a - 1 && t > (r[g].coordinate + r[g - 1].coordinate) / 2)
						) {
							o = r[g].index
							break
						}
				return o
			},
			uE = function (t) {
				var e,
					r,
					n = t.type.displayName,
					i = null != (e = t.type) && e.defaultProps ? ux(ux({}, t.type.defaultProps), t.props) : t.props,
					o = i.stroke,
					a = i.fill
				switch (n) {
					case "Line":
						r = o
						break
					case "Area":
					case "Radar":
						r = o && "none" !== o ? o : a
						break
					default:
						r = a
				}
				return r
			},
			uP = function (t) {
				var e = t.barSize,
					r = t.totalSize,
					n = t.stackGroups,
					i = void 0 === n ? {} : n
				if (!i) return {}
				for (var o = {}, a = Object.keys(i), u = 0, c = a.length; u < c; u++)
					for (var l = i[a[u]].stackGroups, s = Object.keys(l), f = 0, p = s.length; f < p; f++) {
						var d = l[s[f]],
							h = d.items,
							y = d.cateAxisId,
							v = h.filter(function (t) {
								return (0, tc.getDisplayName)(t.type).indexOf("Bar") >= 0
							})
						if (v && v.length) {
							var m = v[0].type.defaultProps,
								b = void 0 !== m ? ux(ux({}, m), v[0].props) : v[0].props,
								g = b.barSize,
								x = b[y]
							o[x] || (o[x] = [])
							var O = (0, J.default)(g) ? e : g
							o[x].push({
								item: v[0],
								stackList: v.slice(1),
								barSize: (0, J.default)(O) ? void 0 : (0, rs.getPercentValue)(O, r, 0),
							})
						}
					}
				return o
			},
			uA = function (t) {
				var e,
					r = t.barGap,
					n = t.barCategoryGap,
					i = t.bandSize,
					o = t.sizeList,
					a = void 0 === o ? [] : o,
					u = t.maxBarSize,
					c = a.length
				if (c < 1) return null
				var l = (0, rs.getPercentValue)(r, i, 0, !0),
					s = []
				if (a[0].barSize === +a[0].barSize) {
					var f = !1,
						p = i / c,
						d = a.reduce(function (t, e) {
							return t + e.barSize || 0
						}, 0)
					;(d += (c - 1) * l) >= i && ((d -= (c - 1) * l), (l = 0)),
						d >= i && p > 0 && ((f = !0), (p *= 0.9), (d = c * p))
					var h = { offset: (((i - d) / 2) | 0) - l, size: 0 }
					e = a.reduce(function (t, e) {
						var r = { item: e.item, position: { offset: h.offset + h.size + l, size: f ? p : e.barSize } },
							n = [].concat(um(t), [r])
						return (
							(h = n[n.length - 1].position),
							e.stackList &&
								e.stackList.length &&
								e.stackList.forEach(function (t) {
									n.push({ item: t, position: h })
								}),
							n
						)
					}, s)
				} else {
					var y = (0, rs.getPercentValue)(n, i, 0, !0)
					i - 2 * y - (c - 1) * l <= 0 && (l = 0)
					var v = (i - 2 * y - (c - 1) * l) / c
					v > 1 && (v >>= 0)
					var m = u === +u ? Math.min(v, u) : v
					e = a.reduce(function (t, e, r) {
						var n = [].concat(um(t), [
							{ item: e.item, position: { offset: y + (v + l) * r + (v - m) / 2, size: m } },
						])
						return (
							e.stackList &&
								e.stackList.length &&
								e.stackList.forEach(function (t) {
									n.push({ item: t, position: n[n.length - 1].position })
								}),
							n
						)
					}, s)
				}
				return e
			},
			uT = function (t, e, r, n) {
				var i = r.children,
					o = r.width,
					a = r.margin,
					u = uy({ children: i, legendWidth: o - (a.left || 0) - (a.right || 0) })
				if (u) {
					var c = n || {},
						l = c.width,
						s = c.height,
						f = u.align,
						p = u.verticalAlign,
						d = u.layout
					if (
						("vertical" === d || ("horizontal" === d && "middle" === p)) &&
						"center" !== f &&
						(0, rs.isNumber)(t[f])
					)
						return ux(ux({}, t), {}, uO({}, f, t[f] + (l || 0)))
					if (
						("horizontal" === d || ("vertical" === d && "center" === f)) &&
						"middle" !== p &&
						(0, rs.isNumber)(t[p])
					)
						return ux(ux({}, t), {}, uO({}, p, t[p] + (s || 0)))
				}
				return t
			},
			uk = function (t, e, r, n, i) {
				var o = e.props.children,
					a = (0, tc.findAllByType)(o, uf).filter(function (t) {
						var e
						return (
							(e = t.props.direction),
							!!(0, J.default)(i) ||
								("horizontal" === n
									? "yAxis" === i
									: "vertical" === n || "x" === e
										? "xAxis" === i
										: "y" !== e || "yAxis" === i)
						)
					})
				if (a && a.length) {
					var u = a.map(function (t) {
						return t.props.dataKey
					})
					return t.reduce(
						function (t, e) {
							var n = uw(e, r)
							if ((0, J.default)(n)) return t
							var i = Array.isArray(n) ? [(0, aB.default)(n), (0, aR.default)(n)] : [n, n],
								o = u.reduce(
									function (t, r) {
										var n = uw(e, r, 0),
											o = i[0] - Math.abs(Array.isArray(n) ? n[0] : n),
											a = i[1] + Math.abs(Array.isArray(n) ? n[1] : n)
										return [Math.min(o, t[0]), Math.max(a, t[1])]
									},
									[1 / 0, -1 / 0],
								)
							return [Math.min(o[0], t[0]), Math.max(o[1], t[1])]
						},
						[1 / 0, -1 / 0],
					)
				}
				return null
			},
			uM = function (t, e, r, n, i) {
				var o = e
					.map(function (e) {
						return uk(t, e, r, i, n)
					})
					.filter(function (t) {
						return !(0, J.default)(t)
					})
				return o && o.length
					? o.reduce(
							function (t, e) {
								return [Math.min(t[0], e[0]), Math.max(t[1], e[1])]
							},
							[1 / 0, -1 / 0],
						)
					: null
			},
			uN = function (t, e, r, n, i) {
				var o = e.map(function (e) {
					var o = e.props.dataKey
					return ("number" === r && o && uk(t, e, o, n)) || uS(t, o, r, i)
				})
				if ("number" === r)
					return o.reduce(
						function (t, e) {
							return [Math.min(t[0], e[0]), Math.max(t[1], e[1])]
						},
						[1 / 0, -1 / 0],
					)
				var a = {}
				return o.reduce(function (t, e) {
					for (var r = 0, n = e.length; r < n; r++) a[e[r]] || ((a[e[r]] = !0), t.push(e[r]))
					return t
				}, [])
			},
			u_ = function (t, e) {
				return (
					("horizontal" === t && "xAxis" === e) ||
					("vertical" === t && "yAxis" === e) ||
					("centric" === t && "angleAxis" === e) ||
					("radial" === t && "radiusAxis" === e)
				)
			},
			uI = function (t, e, r) {
				if (!t) return null
				var n = t.scale,
					i = t.duplicateDomain,
					o = t.type,
					a = t.range,
					u = "scaleBand" === t.realScaleType ? n.bandwidth() / 2 : 2,
					c = (e || r) && "category" === o && n.bandwidth ? n.bandwidth() / u : 0
				return ((c =
					"angleAxis" === t.axisType && (null == a ? void 0 : a.length) >= 2
						? 2 * (0, rs.mathSign)(a[0] - a[1]) * c
						: c),
				e && (t.ticks || t.niceTicks))
					? (t.ticks || t.niceTicks)
							.map(function (t) {
								return { coordinate: n(i ? i.indexOf(t) : t) + c, value: t, offset: c }
							})
							.filter(function (t) {
								return !(0, aU.default)(t.coordinate)
							})
					: t.isCategorical && t.categoricalDomain
						? t.categoricalDomain.map(function (t, e) {
								return { coordinate: n(t) + c, value: t, index: e, offset: c }
							})
						: n.ticks && !r
							? n.ticks(t.tickCount).map(function (t) {
									return { coordinate: n(t) + c, value: t, offset: c }
								})
							: n.domain().map(function (t, e) {
									return { coordinate: n(t) + c, value: i ? i[t] : t, index: e, offset: c }
								})
			},
			uC = new WeakMap(),
			uD = function (t, e) {
				if ("function" != typeof e) return t
				uC.has(t) || uC.set(t, new WeakMap())
				var r = uC.get(t)
				if (r.has(e)) return r.get(e)
				var n = function () {
					t.apply(void 0, arguments), e.apply(void 0, arguments)
				}
				return r.set(e, n), n
			},
			uR = function (t, e, r) {
				var n = t.scale,
					i = t.type,
					o = t.layout,
					a = t.axisType
				if ("auto" === n)
					return "radial" === o && "radiusAxis" === a
						? { scale: ak.scaleBand(), realScaleType: "band" }
						: "radial" === o && "angleAxis" === a
							? { scale: ak.scaleLinear(), realScaleType: "linear" }
							: "category" === i &&
								  e &&
								  (e.indexOf("LineChart") >= 0 ||
										e.indexOf("AreaChart") >= 0 ||
										(e.indexOf("ComposedChart") >= 0 && !r))
								? { scale: ak.scalePoint(), realScaleType: "point" }
								: "category" === i
									? { scale: ak.scaleBand(), realScaleType: "band" }
									: { scale: ak.scaleLinear(), realScaleType: "linear" }
				if ((0, aL.default)(n)) {
					var u = "scale".concat((0, aF.default)(n))
					return { scale: (ak[u] || ak.scalePoint)(), realScaleType: ak[u] ? u : "point" }
				}
				return (0, tt.default)(n) ? { scale: n } : { scale: ak.scalePoint(), realScaleType: "point" }
			},
			uB = function (t) {
				var e = t.domain()
				if (e && !(e.length <= 2)) {
					var r = e.length,
						n = t.range(),
						i = Math.min(n[0], n[1]) - 1e-4,
						o = Math.max(n[0], n[1]) + 1e-4,
						a = t(e[0]),
						u = t(e[r - 1])
					;(a < i || a > o || u < i || u > o) && t.domain([e[0], e[r - 1]])
				}
			},
			uL = function (t, e) {
				if (!t) return null
				for (var r = 0, n = t.length; r < n; r++) if (t[r].item === e) return t[r].position
				return null
			},
			uz = function (t, e) {
				if (!e || 2 !== e.length || !(0, rs.isNumber)(e[0]) || !(0, rs.isNumber)(e[1])) return t
				var r = Math.min(e[0], e[1]),
					n = Math.max(e[0], e[1]),
					i = [t[0], t[1]]
				return (
					(!(0, rs.isNumber)(t[0]) || t[0] < r) && (i[0] = r),
					(!(0, rs.isNumber)(t[1]) || t[1] > n) && (i[1] = n),
					i[0] > n && (i[0] = n),
					i[1] < r && (i[1] = r),
					i
				)
			},
			uU = {
				sign: function (t) {
					var e = t.length
					if (!(e <= 0))
						for (var r = 0, n = t[0].length; r < n; ++r)
							for (var i = 0, o = 0, a = 0; a < e; ++a) {
								var u = (0, aU.default)(t[a][r][1]) ? t[a][r][0] : t[a][r][1]
								u >= 0
									? ((t[a][r][0] = i), (t[a][r][1] = i + u), (i = t[a][r][1]))
									: ((t[a][r][0] = o), (t[a][r][1] = o + u), (o = t[a][r][1]))
							}
				},
				expand: function (t, e) {
					if ((n = t.length) > 0) {
						for (var r, n, i, o = 0, a = t[0].length; o < a; ++o) {
							for (i = r = 0; r < n; ++r) i += t[r][o][1] || 0
							if (i) for (r = 0; r < n; ++r) t[r][o][1] /= i
						}
						a_(t, e)
					}
				},
				none: a_,
				silhouette: function (t, e) {
					if ((r = t.length) > 0) {
						for (var r, n = 0, i = t[e[0]], o = i.length; n < o; ++n) {
							for (var a = 0, u = 0; a < r; ++a) u += t[a][n][1] || 0
							i[n][1] += i[n][0] = -u / 2
						}
						a_(t, e)
					}
				},
				wiggle: function (t, e) {
					if ((i = t.length) > 0 && (n = (r = t[e[0]]).length) > 0) {
						for (var r, n, i, o = 0, a = 1; a < n; ++a) {
							for (var u = 0, c = 0, l = 0; u < i; ++u) {
								for (
									var s = t[e[u]], f = s[a][1] || 0, p = (f - (s[a - 1][1] || 0)) / 2, d = 0;
									d < u;
									++d
								) {
									var h = t[e[d]]
									p += (h[a][1] || 0) - (h[a - 1][1] || 0)
								}
								;(c += f), (l += p * f)
							}
							;(r[a - 1][1] += r[a - 1][0] = o), c && (o -= l / c)
						}
						;(r[a - 1][1] += r[a - 1][0] = o), a_(t, e)
					}
				},
				positive: function (t) {
					var e = t.length
					if (!(e <= 0))
						for (var r = 0, n = t[0].length; r < n; ++r)
							for (var i = 0, o = 0; o < e; ++o) {
								var a = (0, aU.default)(t[o][r][1]) ? t[o][r][0] : t[o][r][1]
								a >= 0
									? ((t[o][r][0] = i), (t[o][r][1] = i + a), (i = t[o][r][1]))
									: ((t[o][r][0] = 0), (t[o][r][1] = 0))
							}
				},
			},
			uF = function (t, e, r) {
				var n = e.map(function (t) {
						return t.props.dataKey
					}),
					i = uU[r]
				return (function () {
					var t = (0, aN.default)([]),
						e = aI,
						r = a_,
						n = aC
					function i(i) {
						var o,
							a,
							u = Array.from(t.apply(this, arguments), aD),
							c = u.length,
							l = -1
						for (let t of i) for (o = 0, ++l; o < c; ++o) (u[o][l] = [0, +n(t, u[o].key, l, i)]).data = t
						for (o = 0, a = aM(e(u)); o < c; ++o) u[a[o]].index = o
						return r(u, a), u
					}
					return (
						(i.keys = function (e) {
							return arguments.length
								? ((t = "function" == typeof e ? e : (0, aN.default)(Array.from(e))), i)
								: t
						}),
						(i.value = function (t) {
							return arguments.length ? ((n = "function" == typeof t ? t : (0, aN.default)(+t)), i) : n
						}),
						(i.order = function (t) {
							return arguments.length
								? ((e = null == t ? aI : "function" == typeof t ? t : (0, aN.default)(Array.from(t))),
									i)
								: e
						}),
						(i.offset = function (t) {
							return arguments.length ? ((r = null == t ? a_ : t), i) : r
						}),
						i
					)
				})()
					.keys(n)
					.value(function (t, e) {
						return +uw(t, e, 0)
					})
					.order(aI)
					.offset(i)(t)
			},
			uq = function (t, e, r, n, i, o) {
				if (!t) return null
				var a = (o ? e.reverse() : e).reduce(function (t, e) {
					var i,
						o = null != (i = e.type) && i.defaultProps ? ux(ux({}, e.type.defaultProps), e.props) : e.props,
						a = o.stackId
					if (o.hide) return t
					var u = o[r],
						c = t[u] || { hasStack: !1, stackGroups: {} }
					if ((0, rs.isNumOrStr)(a)) {
						var l = c.stackGroups[a] || { numericAxisId: r, cateAxisId: n, items: [] }
						l.items.push(e), (c.hasStack = !0), (c.stackGroups[a] = l)
					} else
						c.stackGroups[(0, rs.uniqueId)("_stackId_")] = { numericAxisId: r, cateAxisId: n, items: [e] }
					return ux(ux({}, t), {}, uO({}, u, c))
				}, {})
				return Object.keys(a).reduce(function (e, o) {
					var u = a[o]
					return (
						u.hasStack &&
							(u.stackGroups = Object.keys(u.stackGroups).reduce(function (e, o) {
								var a = u.stackGroups[o]
								return ux(
									ux({}, e),
									{},
									uO({}, o, {
										numericAxisId: r,
										cateAxisId: n,
										items: a.items,
										stackedData: uF(t, a.items, i),
									}),
								)
							}, {})),
						ux(ux({}, e), {}, uO({}, o, u))
					)
				}, {})
			},
			uW = function (t, e) {
				var r = e.realScaleType,
					n = e.type,
					i = e.tickCount,
					o = e.originalDomain,
					a = e.allowDecimals,
					u = r || e.scale
				if ("auto" !== u && "linear" !== u) return null
				if (i && "number" === n && o && ("auto" === o[0] || "auto" === o[1])) {
					var c = t.domain()
					if (!c.length) return null
					var l = ut(c, i, a)
					return t.domain([(0, aB.default)(l), (0, aR.default)(l)]), { niceTicks: l }
				}
				return i && "number" === n ? { niceTicks: ue(t.domain(), i, a) } : null
			}
		function uH(t) {
			var e = t.axis,
				r = t.ticks,
				n = t.bandSize,
				i = t.entry,
				o = t.index,
				a = t.dataKey
			if ("category" === e.type) {
				if (!e.allowDuplicatedCategory && e.dataKey && !(0, J.default)(i[e.dataKey])) {
					var u = (0, rs.findEntryInArray)(r, "value", i[e.dataKey])
					if (u) return u.coordinate + n / 2
				}
				return r[o] ? r[o].coordinate + n / 2 : null
			}
			var c = uw(i, (0, J.default)(a) ? e.dataKey : a)
			return (0, J.default)(c) ? null : e.scale(c)
		}
		var u$ = function (t) {
				var e = t.axis,
					r = t.ticks,
					n = t.offset,
					i = t.bandSize,
					o = t.entry,
					a = t.index
				if ("category" === e.type) return r[a] ? r[a].coordinate + n : null
				var u = uw(o, e.dataKey, e.domain[a])
				return (0, J.default)(u) ? null : e.scale(u) - i / 2 + n
			},
			uX = function (t) {
				var e = t.numericAxis,
					r = e.scale.domain()
				if ("number" === e.type) {
					var n = Math.min(r[0], r[1]),
						i = Math.max(r[0], r[1])
					return n <= 0 && i >= 0 ? 0 : i < 0 ? i : n
				}
				return r[0]
			},
			uK = function (t, e) {
				var r,
					n = (null != (r = t.type) && r.defaultProps ? ux(ux({}, t.type.defaultProps), t.props) : t.props)
						.stackId
				if ((0, rs.isNumOrStr)(n)) {
					var i = e[n]
					if (i) {
						var o = i.items.indexOf(t)
						return o >= 0 ? i.stackedData[o] : null
					}
				}
				return null
			},
			uQ = function (t, e, r) {
				return Object.keys(t)
					.reduce(
						function (n, i) {
							var o = t[i].stackedData.reduce(
								function (t, n) {
									var i = n.slice(e, r + 1).reduce(
										function (t, e) {
											return [
												(0, aB.default)(e.concat([t[0]]).filter(rs.isNumber)),
												(0, aR.default)(e.concat([t[1]]).filter(rs.isNumber)),
											]
										},
										[1 / 0, -1 / 0],
									)
									return [Math.min(t[0], i[0]), Math.max(t[1], i[1])]
								},
								[1 / 0, -1 / 0],
							)
							return [Math.min(o[0], n[0]), Math.max(o[1], n[1])]
						},
						[1 / 0, -1 / 0],
					)
					.map(function (t) {
						return t === 1 / 0 || t === -1 / 0 ? 0 : t
					})
			},
			uG = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
			uV = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
			uY = function (t, e, r) {
				if ((0, tt.default)(t)) return t(e, r)
				if (!Array.isArray(t)) return e
				var n = []
				if ((0, rs.isNumber)(t[0])) n[0] = r ? t[0] : Math.min(t[0], e[0])
				else if (uG.test(t[0])) {
					var i = +uG.exec(t[0])[1]
					n[0] = e[0] - i
				} else (0, tt.default)(t[0]) ? (n[0] = t[0](e[0])) : (n[0] = e[0])
				if ((0, rs.isNumber)(t[1])) n[1] = r ? t[1] : Math.max(t[1], e[1])
				else if (uV.test(t[1])) {
					var o = +uV.exec(t[1])[1]
					n[1] = e[1] + o
				} else (0, tt.default)(t[1]) ? (n[1] = t[1](e[1])) : (n[1] = e[1])
				return n
			},
			uZ = function (t, e, r) {
				if (t && t.scale && t.scale.bandwidth) {
					var n = t.scale.bandwidth()
					if (!r || n > 0) return n
				}
				if (t && e && e.length >= 2) {
					for (
						var i = (0, tn.default)(e, function (t) {
								return t.coordinate
							}),
							o = 1 / 0,
							a = 1,
							u = i.length;
						a < u;
						a++
					) {
						var c = i[a],
							l = i[a - 1]
						o = Math.min((c.coordinate || 0) - (l.coordinate || 0), o)
					}
					return o === 1 / 0 ? 0 : o
				}
				return r ? void 0 : 0
			},
			uJ = function (t, e, r) {
				return !t || !t.length || (0, aq.default)(t, (0, tr.default)(r, "type.defaultProps.domain")) ? e : t
			},
			u0 = function (t, e) {
				var r = t.type.defaultProps ? ux(ux({}, t.type.defaultProps), t.props) : t.props,
					n = r.dataKey,
					i = r.name,
					o = r.unit,
					a = r.formatter,
					u = r.tooltipType,
					c = r.chartType,
					l = r.hide
				return ux(
					ux({}, (0, tc.filterProps)(t, !1)),
					{},
					{
						dataKey: n,
						unit: o,
						formatter: a,
						name: i || n,
						color: uE(t),
						value: uw(e, n),
						type: u,
						payload: e,
						chartType: c,
						hide: l,
					},
				)
			}
		function u1(t) {
			return (u1 =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function u2(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function u5(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? u2(Object(r), !0).forEach(function (e) {
							u3(t, e, r[e])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: u2(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		function u3(t, e, r) {
			var n
			return (
				((n = (function (t, e) {
					if ("object" != u1(t) || !t) return t
					var r = t[Symbol.toPrimitive]
					if (void 0 !== r) {
						var n = r.call(t, e || "default")
						if ("object" != u1(n)) return n
						throw TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === e ? String : Number)(t)
				})(e, "string")),
				(e = "symbol" == u1(n) ? n : n + "") in t)
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		var u6 = ["Webkit", "Moz", "O", "ms"],
			u8 = function (t, e) {
				if (!t) return null
				var r = t.replace(/(\w)/, function (t) {
						return t.toUpperCase()
					}),
					n = u6.reduce(function (t, n) {
						return u5(u5({}, t), {}, u3({}, n + r, e))
					}, {})
				return (n[t] = e), n
			}
		function u4(t) {
			return (u4 =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function u7() {
			return (u7 = Object.assign.bind()).apply(this, arguments)
		}
		function u9(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function ct(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? u9(Object(r), !0).forEach(function (e) {
							co(t, e, r[e])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: u9(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		function ce(t, e) {
			for (var r = 0; r < e.length; r++) {
				var n = e[r]
				;(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, ca(n.key), n)
			}
		}
		function cr() {
			try {
				var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (t) {}
			return (cr = function () {
				return !!t
			})()
		}
		function cn(t) {
			return (cn = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					})(t)
		}
		function ci(t, e) {
			return (ci = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (t, e) {
						return (t.__proto__ = e), t
					})(t, e)
		}
		function co(t, e, r) {
			return (
				(e = ca(e)) in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		function ca(t) {
			var e = (function (t, e) {
				if ("object" != u4(t) || !t) return t
				var r = t[Symbol.toPrimitive]
				if (void 0 !== r) {
					var n = r.call(t, e || "default")
					if ("object" != u4(n)) return n
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === e ? String : Number)(t)
			})(t, "string")
			return "symbol" == u4(e) ? e : e + ""
		}
		var cu = function (t) {
				var e = t.data,
					r = t.startIndex,
					n = t.endIndex,
					i = t.x,
					o = t.width,
					a = t.travellerWidth
				if (!e || !e.length) return {}
				var u = e.length,
					c = rl()
						.domain((0, te.default)(0, u))
						.range([i, i + o - a]),
					l = c.domain().map(function (t) {
						return c(t)
					})
				return {
					isTextActive: !1,
					isSlideMoving: !1,
					isTravellerMoving: !1,
					isTravellerFocused: !1,
					startX: c(r),
					endX: c(n),
					scale: c,
					scaleValues: l,
				}
			},
			cc = function (t) {
				return t.changedTouches && !!t.changedTouches.length
			},
			cl = (function (t) {
				var e, r
				function n(t) {
					var e, r, i
					if (!(this instanceof n)) throw TypeError("Cannot call a class as a function")
					return (
						(r = n),
						(i = [t]),
						(r = cn(r)),
						co(
							(e = (function (t, e) {
								if (e && ("object" === u4(e) || "function" == typeof e)) return e
								if (void 0 !== e)
									throw TypeError("Derived constructors may only return object or undefined")
								var r = t
								if (void 0 === r)
									throw ReferenceError("this hasn't been initialised - super() hasn't been called")
								return r
							})(this, cr() ? Reflect.construct(r, i || [], cn(this).constructor) : r.apply(this, i))),
							"handleDrag",
							function (t) {
								e.leaveTimer && (clearTimeout(e.leaveTimer), (e.leaveTimer = null)),
									e.state.isTravellerMoving
										? e.handleTravellerMove(t)
										: e.state.isSlideMoving && e.handleSlideDrag(t)
							},
						),
						co(e, "handleTouchMove", function (t) {
							null != t.changedTouches && t.changedTouches.length > 0 && e.handleDrag(t.changedTouches[0])
						}),
						co(e, "handleDragEnd", function () {
							e.setState({ isTravellerMoving: !1, isSlideMoving: !1 }, function () {
								var t = e.props,
									r = t.endIndex,
									n = t.onDragEnd,
									i = t.startIndex
								null == n || n({ endIndex: r, startIndex: i })
							}),
								e.detachDragEndListener()
						}),
						co(e, "handleLeaveWrapper", function () {
							;(e.state.isTravellerMoving || e.state.isSlideMoving) &&
								(e.leaveTimer = window.setTimeout(e.handleDragEnd, e.props.leaveTimeOut))
						}),
						co(e, "handleEnterSlideOrTraveller", function () {
							e.setState({ isTextActive: !0 })
						}),
						co(e, "handleLeaveSlideOrTraveller", function () {
							e.setState({ isTextActive: !1 })
						}),
						co(e, "handleSlideDragStart", function (t) {
							var r = cc(t) ? t.changedTouches[0] : t
							e.setState({ isTravellerMoving: !1, isSlideMoving: !0, slideMoveStartX: r.pageX }),
								e.attachDragEndListener()
						}),
						(e.travellerDragStartHandlers = {
							startX: e.handleTravellerDragStart.bind(e, "startX"),
							endX: e.handleTravellerDragStart.bind(e, "endX"),
						}),
						(e.state = {}),
						e
					)
				}
				if ("function" != typeof t && null !== t)
					throw TypeError("Super expression must either be null or a function")
				return (
					(n.prototype = Object.create(t && t.prototype, {
						constructor: { value: n, writable: !0, configurable: !0 },
					})),
					Object.defineProperty(n, "prototype", { writable: !1 }),
					t && ci(n, t),
					(e = [
						{
							key: "componentWillUnmount",
							value: function () {
								this.leaveTimer && (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
									this.detachDragEndListener()
							},
						},
						{
							key: "getIndex",
							value: function (t) {
								var e = t.startX,
									r = t.endX,
									i = this.state.scaleValues,
									o = this.props,
									a = o.gap,
									u = o.data.length - 1,
									c = Math.min(e, r),
									l = Math.max(e, r),
									s = n.getIndexInRange(i, c),
									f = n.getIndexInRange(i, l)
								return { startIndex: s - (s % a), endIndex: f === u ? u : f - (f % a) }
							},
						},
						{
							key: "getTextOfTick",
							value: function (t) {
								var e = this.props,
									r = e.data,
									n = e.tickFormatter,
									i = e.dataKey,
									o = uw(r[t], i, t)
								return (0, tt.default)(n) ? n(o, t) : o
							},
						},
						{
							key: "attachDragEndListener",
							value: function () {
								window.addEventListener("mouseup", this.handleDragEnd, !0),
									window.addEventListener("touchend", this.handleDragEnd, !0),
									window.addEventListener("mousemove", this.handleDrag, !0)
							},
						},
						{
							key: "detachDragEndListener",
							value: function () {
								window.removeEventListener("mouseup", this.handleDragEnd, !0),
									window.removeEventListener("touchend", this.handleDragEnd, !0),
									window.removeEventListener("mousemove", this.handleDrag, !0)
							},
						},
						{
							key: "handleSlideDrag",
							value: function (t) {
								var e = this.state,
									r = e.slideMoveStartX,
									n = e.startX,
									i = e.endX,
									o = this.props,
									a = o.x,
									u = o.width,
									c = o.travellerWidth,
									l = o.startIndex,
									s = o.endIndex,
									f = o.onChange,
									p = t.pageX - r
								p > 0
									? (p = Math.min(p, a + u - c - i, a + u - c - n))
									: p < 0 && (p = Math.max(p, a - n, a - i))
								var d = this.getIndex({ startX: n + p, endX: i + p })
								;(d.startIndex !== l || d.endIndex !== s) && f && f(d),
									this.setState({ startX: n + p, endX: i + p, slideMoveStartX: t.pageX })
							},
						},
						{
							key: "handleTravellerDragStart",
							value: function (t, e) {
								var r = cc(e) ? e.changedTouches[0] : e
								this.setState({
									isSlideMoving: !1,
									isTravellerMoving: !0,
									movingTravellerId: t,
									brushMoveStartX: r.pageX,
								}),
									this.attachDragEndListener()
							},
						},
						{
							key: "handleTravellerMove",
							value: function (t) {
								var e = this.state,
									r = e.brushMoveStartX,
									n = e.movingTravellerId,
									i = e.endX,
									o = e.startX,
									a = this.state[n],
									u = this.props,
									c = u.x,
									l = u.width,
									s = u.travellerWidth,
									f = u.onChange,
									p = u.gap,
									d = u.data,
									h = { startX: this.state.startX, endX: this.state.endX },
									y = t.pageX - r
								y > 0 ? (y = Math.min(y, c + l - s - a)) : y < 0 && (y = Math.max(y, c - a)),
									(h[n] = a + y)
								var v = this.getIndex(h),
									m = v.startIndex,
									b = v.endIndex,
									g = function () {
										var t = d.length - 1
										return (
											("startX" === n && (i > o ? m % p == 0 : b % p == 0)) ||
											(!!(i < o) && b === t) ||
											("endX" === n && (i > o ? b % p == 0 : m % p == 0)) ||
											(!!(i > o) && b === t)
										)
									}
								this.setState(co(co({}, n, a + y), "brushMoveStartX", t.pageX), function () {
									f && g() && f(v)
								})
							},
						},
						{
							key: "handleTravellerMoveKeyboard",
							value: function (t, e) {
								var r = this,
									n = this.state,
									i = n.scaleValues,
									o = n.startX,
									a = n.endX,
									u = this.state[e],
									c = i.indexOf(u)
								if (-1 !== c) {
									var l = c + t
									if (-1 !== l && !(l >= i.length)) {
										var s = i[l]
										;("startX" === e && s >= a) ||
											("endX" === e && s <= o) ||
											this.setState(co({}, e, s), function () {
												r.props.onChange(
													r.getIndex({ startX: r.state.startX, endX: r.state.endX }),
												)
											})
									}
								}
							},
						},
						{
							key: "renderBackground",
							value: function () {
								var t = this.props,
									e = t.x,
									r = t.y,
									n = t.width,
									i = t.height,
									o = t.fill,
									a = t.stroke
								return A.default.createElement("rect", {
									stroke: a,
									fill: o,
									x: e,
									y: r,
									width: n,
									height: i,
								})
							},
						},
						{
							key: "renderPanorama",
							value: function () {
								var t = this.props,
									e = t.x,
									r = t.y,
									n = t.width,
									i = t.height,
									o = t.data,
									a = t.children,
									u = t.padding,
									c = A.Children.only(a)
								return c
									? A.default.cloneElement(c, {
											x: e,
											y: r,
											width: n,
											height: i,
											margin: u,
											compact: !0,
											data: o,
										})
									: null
							},
						},
						{
							key: "renderTravellerLayer",
							value: function (t, e) {
								var r,
									i,
									o = this,
									a = this.props,
									u = a.y,
									c = a.travellerWidth,
									l = a.height,
									s = a.traveller,
									f = a.ariaLabel,
									p = a.data,
									d = a.startIndex,
									h = a.endIndex,
									y = Math.max(t, this.props.x),
									v = ct(
										ct({}, (0, tc.filterProps)(this.props, !1)),
										{},
										{ x: y, y: u, width: c, height: l },
									),
									m =
										f ||
										"Min value: "
											.concat(null == (r = p[d]) ? void 0 : r.name, ", Max value: ")
											.concat(null == (i = p[h]) ? void 0 : i.name)
								return A.default.createElement(
									tf,
									{
										tabIndex: 0,
										role: "slider",
										"aria-label": m,
										"aria-valuenow": t,
										className: "recharts-brush-traveller",
										onMouseEnter: this.handleEnterSlideOrTraveller,
										onMouseLeave: this.handleLeaveSlideOrTraveller,
										onMouseDown: this.travellerDragStartHandlers[e],
										onTouchStart: this.travellerDragStartHandlers[e],
										onKeyDown: function (t) {
											;["ArrowLeft", "ArrowRight"].includes(t.key) &&
												(t.preventDefault(),
												t.stopPropagation(),
												o.handleTravellerMoveKeyboard("ArrowRight" === t.key ? 1 : -1, e))
										},
										onFocus: function () {
											o.setState({ isTravellerFocused: !0 })
										},
										onBlur: function () {
											o.setState({ isTravellerFocused: !1 })
										},
										style: { cursor: "col-resize" },
									},
									n.renderTraveller(s, v),
								)
							},
						},
						{
							key: "renderSlide",
							value: function (t, e) {
								var r = this.props,
									n = r.y,
									i = r.height,
									o = r.stroke,
									a = r.travellerWidth,
									u = Math.min(t, e) + a,
									c = Math.max(Math.abs(e - t) - a, 0)
								return A.default.createElement("rect", {
									className: "recharts-brush-slide",
									onMouseEnter: this.handleEnterSlideOrTraveller,
									onMouseLeave: this.handleLeaveSlideOrTraveller,
									onMouseDown: this.handleSlideDragStart,
									onTouchStart: this.handleSlideDragStart,
									style: { cursor: "move" },
									stroke: "none",
									fill: o,
									fillOpacity: 0.2,
									x: u,
									y: n,
									width: c,
									height: i,
								})
							},
						},
						{
							key: "renderText",
							value: function () {
								var t = this.props,
									e = t.startIndex,
									r = t.endIndex,
									n = t.y,
									i = t.height,
									o = t.travellerWidth,
									a = t.stroke,
									u = this.state,
									c = u.startX,
									l = u.endX,
									s = { pointerEvents: "none", fill: a }
								return A.default.createElement(
									tf,
									{ className: "recharts-brush-texts" },
									A.default.createElement(
										r$,
										u7(
											{
												textAnchor: "end",
												verticalAnchor: "middle",
												x: Math.min(c, l) - 5,
												y: n + i / 2,
											},
											s,
										),
										this.getTextOfTick(e),
									),
									A.default.createElement(
										r$,
										u7(
											{
												textAnchor: "start",
												verticalAnchor: "middle",
												x: Math.max(c, l) + o + 5,
												y: n + i / 2,
											},
											s,
										),
										this.getTextOfTick(r),
									),
								)
							},
						},
						{
							key: "render",
							value: function () {
								var t = this.props,
									e = t.data,
									r = t.className,
									n = t.children,
									i = t.x,
									o = t.y,
									a = t.width,
									u = t.height,
									c = t.alwaysShowText,
									l = this.state,
									s = l.startX,
									f = l.endX,
									p = l.isTextActive,
									d = l.isSlideMoving,
									h = l.isTravellerMoving,
									y = l.isTravellerFocused
								if (
									!e ||
									!e.length ||
									!(0, rs.isNumber)(i) ||
									!(0, rs.isNumber)(o) ||
									!(0, rs.isNumber)(a) ||
									!(0, rs.isNumber)(u) ||
									a <= 0 ||
									u <= 0
								)
									return null
								var v = (0, to.default)("recharts-brush", r),
									m = 1 === A.default.Children.count(n),
									b = u8("userSelect", "none")
								return A.default.createElement(
									tf,
									{
										className: v,
										onMouseLeave: this.handleLeaveWrapper,
										onTouchMove: this.handleTouchMove,
										style: b,
									},
									this.renderBackground(),
									m && this.renderPanorama(),
									this.renderSlide(s, f),
									this.renderTravellerLayer(s, "startX"),
									this.renderTravellerLayer(f, "endX"),
									(p || d || h || y || c) && this.renderText(),
								)
							},
						},
					]),
					(r = [
						{
							key: "renderDefaultTraveller",
							value: function (t) {
								var e = t.x,
									r = t.y,
									n = t.width,
									i = t.height,
									o = t.stroke,
									a = Math.floor(r + i / 2) - 1
								return A.default.createElement(
									A.default.Fragment,
									null,
									A.default.createElement("rect", {
										x: e,
										y: r,
										width: n,
										height: i,
										fill: o,
										stroke: "none",
									}),
									A.default.createElement("line", {
										x1: e + 1,
										y1: a,
										x2: e + n - 1,
										y2: a,
										fill: "none",
										stroke: "#fff",
									}),
									A.default.createElement("line", {
										x1: e + 1,
										y1: a + 2,
										x2: e + n - 1,
										y2: a + 2,
										fill: "none",
										stroke: "#fff",
									}),
								)
							},
						},
						{
							key: "renderTraveller",
							value: function (t, e) {
								return A.default.isValidElement(t)
									? A.default.cloneElement(t, e)
									: (0, tt.default)(t)
										? t(e)
										: n.renderDefaultTraveller(e)
							},
						},
						{
							key: "getDerivedStateFromProps",
							value: function (t, e) {
								var r = t.data,
									n = t.width,
									i = t.x,
									o = t.travellerWidth,
									a = t.updateId,
									u = t.startIndex,
									c = t.endIndex
								if (r !== e.prevData || a !== e.prevUpdateId)
									return ct(
										{ prevData: r, prevTravellerWidth: o, prevUpdateId: a, prevX: i, prevWidth: n },
										r && r.length
											? cu({
													data: r,
													width: n,
													x: i,
													travellerWidth: o,
													startIndex: u,
													endIndex: c,
												})
											: { scale: null, scaleValues: null },
									)
								if (e.scale && (n !== e.prevWidth || i !== e.prevX || o !== e.prevTravellerWidth)) {
									e.scale.range([i, i + n - o])
									var l = e.scale.domain().map(function (t) {
										return e.scale(t)
									})
									return {
										prevData: r,
										prevTravellerWidth: o,
										prevUpdateId: a,
										prevX: i,
										prevWidth: n,
										startX: e.scale(t.startIndex),
										endX: e.scale(t.endIndex),
										scaleValues: l,
									}
								}
								return null
							},
						},
						{
							key: "getIndexInRange",
							value: function (t, e) {
								for (var r = t.length, n = 0, i = r - 1; i - n > 1; ) {
									var o = Math.floor((n + i) / 2)
									t[o] > e ? (i = o) : (n = o)
								}
								return e >= t[i] ? i : n
							},
						},
					]),
					e && ce(n.prototype, e),
					r && ce(n, r),
					Object.defineProperty(n, "prototype", { writable: !1 }),
					n
				)
			})(A.PureComponent)
		co(cl, "displayName", "Brush"),
			co(cl, "defaultProps", {
				height: 40,
				travellerWidth: 5,
				gap: 1,
				fill: "#fff",
				stroke: "#666",
				padding: { top: 1, right: 1, bottom: 1, left: 1 },
				leaveTimeOut: 1e3,
				alwaysShowText: !1,
			})
		var cs = t.i(91606)
		function cf(t) {
			return (cf =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function cp(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function cd(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? cp(Object(r), !0).forEach(function (e) {
							var n, i, o
							;(n = t),
								(i = e),
								(o = r[e]),
								(i = (function (t) {
									var e = (function (t, e) {
										if ("object" != cf(t) || !t) return t
										var r = t[Symbol.toPrimitive]
										if (void 0 !== r) {
											var n = r.call(t, e || "default")
											if ("object" != cf(n)) return n
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === e ? String : Number)(t)
									})(t, "string")
									return "symbol" == cf(e) ? e : e + ""
								})(i)) in n
									? Object.defineProperty(n, i, {
											value: o,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (n[i] = o)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: cp(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		var ch = Math.PI / 180,
			cy = function (t, e, r, n) {
				return { x: t + Math.cos(-ch * n) * r, y: e + Math.sin(-ch * n) * r }
			},
			cv = function (t, e) {
				var r = t.x,
					n = t.y
				return Math.sqrt(Math.pow(r - e.x, 2) + Math.pow(n - e.y, 2))
			},
			cm = function (t, e) {
				var r = t.x,
					n = t.y,
					i = e.cx,
					o = e.cy,
					a = cv({ x: r, y: n }, { x: i, y: o })
				if (a <= 0) return { radius: a }
				var u = Math.acos((r - i) / a)
				return n > o && (u = 2 * Math.PI - u), { radius: a, angle: (180 * u) / Math.PI, angleInRadian: u }
			},
			cb = function (t) {
				var e = t.startAngle,
					r = t.endAngle,
					n = Math.min(Math.floor(e / 360), Math.floor(r / 360))
				return { startAngle: e - 360 * n, endAngle: r - 360 * n }
			},
			cg = function (t, e) {
				var r,
					n = cm({ x: t.x, y: t.y }, e),
					i = n.radius,
					o = n.angle,
					a = e.innerRadius,
					u = e.outerRadius
				if (i < a || i > u) return !1
				if (0 === i) return !0
				var c = cb(e),
					l = c.startAngle,
					s = c.endAngle,
					f = o
				if (l <= s) {
					for (; f > s; ) f -= 360
					for (; f < l; ) f += 360
					r = f >= l && f <= s
				} else {
					for (; f > l; ) f -= 360
					for (; f < s; ) f += 360
					r = f >= s && f <= l
				}
				return r
					? cd(
							cd({}, e),
							{},
							{
								radius: i,
								angle: f + 360 * Math.min(Math.floor(e.startAngle / 360), Math.floor(e.endAngle / 360)),
							},
						)
					: null
			}
		function cx(t) {
			return (cx =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		var cO = ["offset"]
		function cw(t, e) {
			;(null == e || e > t.length) && (e = t.length)
			for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r]
			return n
		}
		function cS(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function cj(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? cS(Object(r), !0).forEach(function (e) {
							var n, i, o
							;(n = t),
								(i = e),
								(o = r[e]),
								(i = (function (t) {
									var e = (function (t, e) {
										if ("object" != cx(t) || !t) return t
										var r = t[Symbol.toPrimitive]
										if (void 0 !== r) {
											var n = r.call(t, e || "default")
											if ("object" != cx(n)) return n
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === e ? String : Number)(t)
									})(t, "string")
									return "symbol" == cx(e) ? e : e + ""
								})(i)) in n
									? Object.defineProperty(n, i, {
											value: o,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (n[i] = o)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: cS(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		function cE() {
			return (cE = Object.assign.bind()).apply(this, arguments)
		}
		var cP = function (t) {
				var e = t.value,
					r = t.formatter,
					n = (0, J.default)(t.children) ? e : t.children
				return (0, tt.default)(r) ? r(n) : n
			},
			cA = function (t, e, r) {
				var n,
					i,
					o = t.position,
					a = t.viewBox,
					u = t.offset,
					c = t.className,
					l = a.cx,
					s = a.cy,
					f = a.innerRadius,
					p = a.outerRadius,
					d = a.startAngle,
					h = a.endAngle,
					y = a.clockWise,
					v = (f + p) / 2,
					m = (0, rs.mathSign)(h - d) * Math.min(Math.abs(h - d), 360),
					b = m >= 0 ? 1 : -1
				"insideStart" === o
					? ((n = d + b * u), (i = y))
					: "insideEnd" === o
						? ((n = h - b * u), (i = !y))
						: "end" === o && ((n = h + b * u), (i = y)),
					(i = m <= 0 ? i : !i)
				var g = cy(l, s, v, n),
					x = cy(l, s, v, n + (i ? 1 : -1) * 359),
					O = "M"
						.concat(g.x, ",")
						.concat(g.y, "\n    A")
						.concat(v, ",")
						.concat(v, ",0,1,")
						.concat(+!i, ",\n    ")
						.concat(x.x, ",")
						.concat(x.y),
					w = (0, J.default)(t.id) ? (0, rs.uniqueId)("recharts-radial-line-") : t.id
				return A.default.createElement(
					"text",
					cE({}, r, {
						dominantBaseline: "central",
						className: (0, to.default)("recharts-radial-bar-label", c),
					}),
					A.default.createElement("defs", null, A.default.createElement("path", { id: w, d: O })),
					A.default.createElement("textPath", { xlinkHref: "#".concat(w) }, e),
				)
			},
			cT = function (t) {
				var e = t.viewBox,
					r = t.offset,
					n = t.position,
					i = e.cx,
					o = e.cy,
					a = e.innerRadius,
					u = e.outerRadius,
					c = (e.startAngle + e.endAngle) / 2
				if ("outside" === n) {
					var l = cy(i, o, u + r, c),
						s = l.x
					return { x: s, y: l.y, textAnchor: s >= i ? "start" : "end", verticalAnchor: "middle" }
				}
				if ("center" === n) return { x: i, y: o, textAnchor: "middle", verticalAnchor: "middle" }
				if ("centerTop" === n) return { x: i, y: o, textAnchor: "middle", verticalAnchor: "start" }
				if ("centerBottom" === n) return { x: i, y: o, textAnchor: "middle", verticalAnchor: "end" }
				var f = cy(i, o, (a + u) / 2, c)
				return { x: f.x, y: f.y, textAnchor: "middle", verticalAnchor: "middle" }
			},
			ck = function (t) {
				var e = t.viewBox,
					r = t.parentViewBox,
					n = t.offset,
					i = t.position,
					o = e.x,
					a = e.y,
					u = e.width,
					c = e.height,
					l = c >= 0 ? 1 : -1,
					s = l * n,
					f = l > 0 ? "end" : "start",
					p = l > 0 ? "start" : "end",
					d = u >= 0 ? 1 : -1,
					h = d * n,
					y = d > 0 ? "end" : "start",
					v = d > 0 ? "start" : "end"
				if ("top" === i)
					return cj(
						cj({}, { x: o + u / 2, y: a - l * n, textAnchor: "middle", verticalAnchor: f }),
						r ? { height: Math.max(a - r.y, 0), width: u } : {},
					)
				if ("bottom" === i)
					return cj(
						cj({}, { x: o + u / 2, y: a + c + s, textAnchor: "middle", verticalAnchor: p }),
						r ? { height: Math.max(r.y + r.height - (a + c), 0), width: u } : {},
					)
				if ("left" === i) {
					var m = { x: o - h, y: a + c / 2, textAnchor: y, verticalAnchor: "middle" }
					return cj(cj({}, m), r ? { width: Math.max(m.x - r.x, 0), height: c } : {})
				}
				if ("right" === i) {
					var b = { x: o + u + h, y: a + c / 2, textAnchor: v, verticalAnchor: "middle" }
					return cj(cj({}, b), r ? { width: Math.max(r.x + r.width - b.x, 0), height: c } : {})
				}
				var g = r ? { width: u, height: c } : {}
				return "insideLeft" === i
					? cj({ x: o + h, y: a + c / 2, textAnchor: v, verticalAnchor: "middle" }, g)
					: "insideRight" === i
						? cj({ x: o + u - h, y: a + c / 2, textAnchor: y, verticalAnchor: "middle" }, g)
						: "insideTop" === i
							? cj({ x: o + u / 2, y: a + s, textAnchor: "middle", verticalAnchor: p }, g)
							: "insideBottom" === i
								? cj({ x: o + u / 2, y: a + c - s, textAnchor: "middle", verticalAnchor: f }, g)
								: "insideTopLeft" === i
									? cj({ x: o + h, y: a + s, textAnchor: v, verticalAnchor: p }, g)
									: "insideTopRight" === i
										? cj({ x: o + u - h, y: a + s, textAnchor: y, verticalAnchor: p }, g)
										: "insideBottomLeft" === i
											? cj({ x: o + h, y: a + c - s, textAnchor: v, verticalAnchor: f }, g)
											: "insideBottomRight" === i
												? cj(
														{
															x: o + u - h,
															y: a + c - s,
															textAnchor: y,
															verticalAnchor: f,
														},
														g,
													)
												: (0, cs.default)(i) &&
													  ((0, rs.isNumber)(i.x) || (0, rs.isPercent)(i.x)) &&
													  ((0, rs.isNumber)(i.y) || (0, rs.isPercent)(i.y))
													? cj(
															{
																x: o + (0, rs.getPercentValue)(i.x, u),
																y: a + (0, rs.getPercentValue)(i.y, c),
																textAnchor: "end",
																verticalAnchor: "end",
															},
															g,
														)
													: cj(
															{
																x: o + u / 2,
																y: a + c / 2,
																textAnchor: "middle",
																verticalAnchor: "middle",
															},
															g,
														)
			}
		function cM(t) {
			var e,
				r = t.offset,
				n = cj(
					{ offset: void 0 === r ? 5 : r },
					(function (t, e) {
						if (null == t) return {}
						var r,
							n,
							i = (function (t, e) {
								if (null == t) return {}
								var r = {}
								for (var n in t)
									if (Object.prototype.hasOwnProperty.call(t, n)) {
										if (e.indexOf(n) >= 0) continue
										r[n] = t[n]
									}
								return r
							})(t, e)
						if (Object.getOwnPropertySymbols) {
							var o = Object.getOwnPropertySymbols(t)
							for (n = 0; n < o.length; n++)
								(r = o[n]),
									!(e.indexOf(r) >= 0) &&
										Object.prototype.propertyIsEnumerable.call(t, r) &&
										(i[r] = t[r])
						}
						return i
					})(t, cO),
				),
				i = n.viewBox,
				o = n.position,
				a = n.value,
				u = n.children,
				c = n.content,
				l = n.className,
				s = n.textBreakAll
			if (!i || ((0, J.default)(a) && (0, J.default)(u) && !(0, A.isValidElement)(c) && !(0, tt.default)(c)))
				return null
			if ((0, A.isValidElement)(c)) return (0, A.cloneElement)(c, n)
			if ((0, tt.default)(c)) {
				if (((e = (0, A.createElement)(c, n)), (0, A.isValidElement)(e))) return e
			} else e = cP(n)
			var f = "cx" in i && (0, rs.isNumber)(i.cx),
				p = (0, tc.filterProps)(n, !0)
			if (f && ("insideStart" === o || "insideEnd" === o || "end" === o)) return cA(n, e, p)
			var d = f ? cT(n) : ck(n)
			return A.default.createElement(
				r$,
				cE({ className: (0, to.default)("recharts-label", void 0 === l ? "" : l) }, p, d, { breakAll: s }),
				e,
			)
		}
		cM.displayName = "Label"
		var cN = function (t) {
			var e = t.cx,
				r = t.cy,
				n = t.angle,
				i = t.startAngle,
				o = t.endAngle,
				a = t.r,
				u = t.radius,
				c = t.innerRadius,
				l = t.outerRadius,
				s = t.x,
				f = t.y,
				p = t.top,
				d = t.left,
				h = t.width,
				y = t.height,
				v = t.clockWise,
				m = t.labelViewBox
			if (m) return m
			if ((0, rs.isNumber)(h) && (0, rs.isNumber)(y)) {
				if ((0, rs.isNumber)(s) && (0, rs.isNumber)(f)) return { x: s, y: f, width: h, height: y }
				if ((0, rs.isNumber)(p) && (0, rs.isNumber)(d)) return { x: p, y: d, width: h, height: y }
			}
			return (0, rs.isNumber)(s) && (0, rs.isNumber)(f)
				? { x: s, y: f, width: 0, height: 0 }
				: (0, rs.isNumber)(e) && (0, rs.isNumber)(r)
					? {
							cx: e,
							cy: r,
							startAngle: i || n || 0,
							endAngle: o || n || 0,
							innerRadius: c || 0,
							outerRadius: l || u || a || 0,
							clockWise: v,
						}
					: t.viewBox
						? t.viewBox
						: {}
		}
		;(cM.parseViewBox = cN),
			(cM.renderCallByParent = function (t, e) {
				var r,
					n,
					i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2]
				if (!t || (!t.children && i && !t.label)) return null
				var o = t.children,
					a = cN(t),
					u = (0, tc.findAllByType)(o, cM).map(function (t, r) {
						return (0, A.cloneElement)(t, { viewBox: e || a, key: "label-".concat(r) })
					})
				if (!i) return u
				return [
					((r = t.label),
					(n = e || a),
					!r
						? null
						: !0 === r
							? A.default.createElement(cM, { key: "label-implicit", viewBox: n })
							: (0, rs.isNumOrStr)(r)
								? A.default.createElement(cM, { key: "label-implicit", viewBox: n, value: r })
								: (0, A.isValidElement)(r)
									? r.type === cM
										? (0, A.cloneElement)(r, { key: "label-implicit", viewBox: n })
										: A.default.createElement(cM, { key: "label-implicit", content: r, viewBox: n })
									: (0, tt.default)(r)
										? A.default.createElement(cM, { key: "label-implicit", content: r, viewBox: n })
										: (0, cs.default)(r)
											? A.default.createElement(
													cM,
													cE({ viewBox: n }, r, { key: "label-implicit" }),
												)
											: null),
				].concat(
					(function (t) {
						if (Array.isArray(t)) return cw(t)
					})(u) ||
						(function (t) {
							if (("u" > typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"])
								return Array.from(t)
						})(u) ||
						(function (t, e) {
							if (t) {
								if ("string" == typeof t) return cw(t, void 0)
								var r = Object.prototype.toString.call(t).slice(8, -1)
								if (
									("Object" === r && t.constructor && (r = t.constructor.name),
									"Map" === r || "Set" === r)
								)
									return Array.from(t)
								if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
									return cw(t, void 0)
							}
						})(u) ||
						(function () {
							throw TypeError(
								"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
							)
						})(),
				)
			})
		var c_ = function (t, e) {
				var r = t.alwaysShow,
					n = t.ifOverflow
				return r && (n = "extendDomain"), n === e
			},
			cI = t.i(54888),
			cC = t.i(67735),
			cD = function (t) {
				return null
			}
		cD.displayName = "Cell"
		var cR = t.i(94786)
		function cB(t) {
			return (cB =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		var cL = ["valueAccessor"],
			cz = ["data", "dataKey", "clockWise", "id", "textBreakAll"]
		function cU(t, e) {
			;(null == e || e > t.length) && (e = t.length)
			for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r]
			return n
		}
		function cF() {
			return (cF = Object.assign.bind()).apply(this, arguments)
		}
		function cq(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function cW(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? cq(Object(r), !0).forEach(function (e) {
							var n, i, o
							;(n = t),
								(i = e),
								(o = r[e]),
								(i = (function (t) {
									var e = (function (t, e) {
										if ("object" != cB(t) || !t) return t
										var r = t[Symbol.toPrimitive]
										if (void 0 !== r) {
											var n = r.call(t, e || "default")
											if ("object" != cB(n)) return n
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === e ? String : Number)(t)
									})(t, "string")
									return "symbol" == cB(e) ? e : e + ""
								})(i)) in n
									? Object.defineProperty(n, i, {
											value: o,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (n[i] = o)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: cq(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		function cH(t, e) {
			if (null == t) return {}
			var r,
				n,
				i = (function (t, e) {
					if (null == t) return {}
					var r = {}
					for (var n in t)
						if (Object.prototype.hasOwnProperty.call(t, n)) {
							if (e.indexOf(n) >= 0) continue
							r[n] = t[n]
						}
					return r
				})(t, e)
			if (Object.getOwnPropertySymbols) {
				var o = Object.getOwnPropertySymbols(t)
				for (n = 0; n < o.length; n++)
					(r = o[n]),
						!(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
			}
			return i
		}
		var c$ = function (t) {
			return Array.isArray(t.value) ? (0, cR.default)(t.value) : t.value
		}
		function cX(t) {
			var e = t.valueAccessor,
				r = void 0 === e ? c$ : e,
				n = cH(t, cL),
				i = n.data,
				o = n.dataKey,
				a = n.clockWise,
				u = n.id,
				c = n.textBreakAll,
				l = cH(n, cz)
			return i && i.length
				? A.default.createElement(
						tf,
						{ className: "recharts-label-list" },
						i.map(function (t, e) {
							var n = (0, J.default)(o) ? r(t, e) : uw(t && t.payload, o),
								i = (0, J.default)(u) ? {} : { id: "".concat(u, "-").concat(e) }
							return A.default.createElement(
								cM,
								cF({}, (0, tc.filterProps)(t, !0), l, i, {
									parentViewBox: t.parentViewBox,
									value: n,
									textBreakAll: c,
									viewBox: cM.parseViewBox(
										(0, J.default)(a) ? t : cW(cW({}, t), {}, { clockWise: a }),
									),
									key: "label-".concat(e),
									index: e,
								}),
							)
						}),
					)
				: null
		}
		;(cX.displayName = "LabelList"),
			(cX.renderCallByParent = function (t, e) {
				var r,
					n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2]
				if (!t || (!t.children && n && !t.label)) return null
				var i = t.children,
					o = (0, tc.findAllByType)(i, cX).map(function (t, r) {
						return (0, A.cloneElement)(t, { data: e, key: "labelList-".concat(r) })
					})
				return n
					? [
							((r = t.label),
							!r
								? null
								: !0 === r
									? A.default.createElement(cX, { key: "labelList-implicit", data: e })
									: A.default.isValidElement(r) || (0, tt.default)(r)
										? A.default.createElement(cX, {
												key: "labelList-implicit",
												data: e,
												content: r,
											})
										: (0, cs.default)(r)
											? A.default.createElement(
													cX,
													cF({ data: e }, r, { key: "labelList-implicit" }),
												)
											: null),
						].concat(
							(function (t) {
								if (Array.isArray(t)) return cU(t)
							})(o) ||
								(function (t) {
									if (("u" > typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"])
										return Array.from(t)
								})(o) ||
								(function (t, e) {
									if (t) {
										if ("string" == typeof t) return cU(t, void 0)
										var r = Object.prototype.toString.call(t).slice(8, -1)
										if (
											("Object" === r && t.constructor && (r = t.constructor.name),
											"Map" === r || "Set" === r)
										)
											return Array.from(t)
										if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
											return cU(t, void 0)
									}
								})(o) ||
								(function () {
									throw TypeError(
										"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
									)
								})(),
						)
					: o
			})
		var cK = t.i(17307),
			cQ = t.i(67997)
		function cG(t) {
			return (cG =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function cV() {
			return (cV = Object.assign.bind()).apply(this, arguments)
		}
		function cY(t, e) {
			;(null == e || e > t.length) && (e = t.length)
			for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r]
			return n
		}
		function cZ(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function cJ(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? cZ(Object(r), !0).forEach(function (e) {
							var n, i, o
							;(n = t),
								(i = e),
								(o = r[e]),
								(i = (function (t) {
									var e = (function (t, e) {
										if ("object" != cG(t) || !t) return t
										var r = t[Symbol.toPrimitive]
										if (void 0 !== r) {
											var n = r.call(t, e || "default")
											if ("object" != cG(n)) return n
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === e ? String : Number)(t)
									})(t, "string")
									return "symbol" == cG(e) ? e : e + ""
								})(i)) in n
									? Object.defineProperty(n, i, {
											value: o,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (n[i] = o)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: cZ(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		var c0 = function (t, e, r, n, i) {
				var o = r - n
				return (
					"M ".concat(t, ",").concat(e) +
					"L ".concat(t + r, ",").concat(e) +
					"L ".concat(t + r - o / 2, ",").concat(e + i) +
					"L ".concat(t + r - o / 2 - n, ",").concat(e + i) +
					"L ".concat(t, ",").concat(e, " Z")
				)
			},
			c1 = {
				x: 0,
				y: 0,
				upperWidth: 0,
				lowerWidth: 0,
				height: 0,
				isUpdateAnimationActive: !1,
				animationBegin: 0,
				animationDuration: 1500,
				animationEasing: "ease",
			},
			c2 = function (t) {
				var e,
					r = cJ(cJ({}, c1), t),
					n = (0, A.useRef)(),
					i =
						(function (t) {
							if (Array.isArray(t)) return t
						})((e = (0, A.useState)(-1))) ||
						(function (t, e) {
							var r = null == t ? null : ("u" > typeof Symbol && t[Symbol.iterator]) || t["@@iterator"]
							if (null != r) {
								var n,
									i,
									o,
									a,
									u = [],
									c = !0,
									l = !1
								try {
									;(o = (r = r.call(t)).next), !1
									for (; !(c = (n = o.call(r)).done) && (u.push(n.value), 2 !== u.length); c = !0);
								} catch (t) {
									;(l = !0), (i = t)
								} finally {
									try {
										if (!c && null != r.return && ((a = r.return()), Object(a) !== a)) return
									} finally {
										if (l) throw i
									}
								}
								return u
							}
						})(e, 2) ||
						(function (t, e) {
							if (t) {
								if ("string" == typeof t) return cY(t, 2)
								var r = Object.prototype.toString.call(t).slice(8, -1)
								if (
									("Object" === r && t.constructor && (r = t.constructor.name),
									"Map" === r || "Set" === r)
								)
									return Array.from(t)
								if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
									return cY(t, 2)
							}
						})(e, 2) ||
						(function () {
							throw TypeError(
								"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
							)
						})(),
					o = i[0],
					a = i[1]
				;(0, A.useEffect)(function () {
					if (n.current && n.current.getTotalLength)
						try {
							var t = n.current.getTotalLength()
							t && a(t)
						} catch (t) {}
				}, [])
				var u = r.x,
					c = r.y,
					l = r.upperWidth,
					s = r.lowerWidth,
					f = r.height,
					p = r.className,
					d = r.animationEasing,
					h = r.animationDuration,
					y = r.animationBegin,
					v = r.isUpdateAnimationActive
				if (u !== +u || c !== +c || l !== +l || s !== +s || f !== +f || (0 === l && 0 === s) || 0 === f)
					return null
				var m = (0, to.default)("recharts-trapezoid", p)
				return v
					? A.default.createElement(
							eE,
							{
								canBegin: o > 0,
								from: { upperWidth: 0, lowerWidth: 0, height: f, x: u, y: c },
								to: { upperWidth: l, lowerWidth: s, height: f, x: u, y: c },
								duration: h,
								animationEasing: d,
								isActive: v,
							},
							function (t) {
								var e = t.upperWidth,
									i = t.lowerWidth,
									a = t.height,
									u = t.x,
									c = t.y
								return A.default.createElement(
									eE,
									{
										canBegin: o > 0,
										from: "0px ".concat(-1 === o ? 1 : o, "px"),
										to: "".concat(o, "px 0px"),
										attributeName: "strokeDasharray",
										begin: y,
										duration: h,
										easing: d,
									},
									A.default.createElement(
										"path",
										cV({}, (0, tc.filterProps)(r, !0), {
											className: m,
											d: c0(u, c, e, i, a),
											ref: n,
										}),
									),
								)
							},
						)
					: A.default.createElement(
							"g",
							null,
							A.default.createElement(
								"path",
								cV({}, (0, tc.filterProps)(r, !0), { className: m, d: c0(u, c, l, s, f) }),
							),
						)
			}
		function c5(t) {
			return (c5 =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function c3() {
			return (c3 = Object.assign.bind()).apply(this, arguments)
		}
		function c6(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function c8(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? c6(Object(r), !0).forEach(function (e) {
							var n, i, o
							;(n = t),
								(i = e),
								(o = r[e]),
								(i = (function (t) {
									var e = (function (t, e) {
										if ("object" != c5(t) || !t) return t
										var r = t[Symbol.toPrimitive]
										if (void 0 !== r) {
											var n = r.call(t, e || "default")
											if ("object" != c5(n)) return n
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === e ? String : Number)(t)
									})(t, "string")
									return "symbol" == c5(e) ? e : e + ""
								})(i)) in n
									? Object.defineProperty(n, i, {
											value: o,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (n[i] = o)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: c6(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		var c4 = function (t) {
				var e = t.cx,
					r = t.cy,
					n = t.radius,
					i = t.angle,
					o = t.sign,
					a = t.isExternal,
					u = t.cornerRadius,
					c = t.cornerIsExternal,
					l = u * (a ? 1 : -1) + n,
					s = Math.asin(u / l) / ch,
					f = c ? i : i + o * s
				return {
					center: cy(e, r, l, f),
					circleTangency: cy(e, r, n, f),
					lineTangency: cy(e, r, l * Math.cos(s * ch), c ? i - o * s : i),
					theta: s,
				}
			},
			c7 = function (t) {
				var e = t.cx,
					r = t.cy,
					n = t.innerRadius,
					i = t.outerRadius,
					o = t.startAngle,
					a = t.endAngle,
					u = (0, rs.mathSign)(a - o) * Math.min(Math.abs(a - o), 359.999),
					c = o + u,
					l = cy(e, r, i, o),
					s = cy(e, r, i, c),
					f = "M "
						.concat(l.x, ",")
						.concat(l.y, "\n    A ")
						.concat(i, ",")
						.concat(i, ",0,\n    ")
						.concat(+(Math.abs(u) > 180), ",")
						.concat(+(o > c), ",\n    ")
						.concat(s.x, ",")
						.concat(s.y, "\n  ")
				if (n > 0) {
					var p = cy(e, r, n, o),
						d = cy(e, r, n, c)
					f += "L "
						.concat(d.x, ",")
						.concat(d.y, "\n            A ")
						.concat(n, ",")
						.concat(n, ",0,\n            ")
						.concat(+(Math.abs(u) > 180), ",")
						.concat(+(o <= c), ",\n            ")
						.concat(p.x, ",")
						.concat(p.y, " Z")
				} else f += "L ".concat(e, ",").concat(r, " Z")
				return f
			},
			c9 = function (t) {
				var e = t.cx,
					r = t.cy,
					n = t.innerRadius,
					i = t.outerRadius,
					o = t.cornerRadius,
					a = t.forceCornerRadius,
					u = t.cornerIsExternal,
					c = t.startAngle,
					l = t.endAngle,
					s = (0, rs.mathSign)(l - c),
					f = c4({ cx: e, cy: r, radius: i, angle: c, sign: s, cornerRadius: o, cornerIsExternal: u }),
					p = f.circleTangency,
					d = f.lineTangency,
					h = f.theta,
					y = c4({ cx: e, cy: r, radius: i, angle: l, sign: -s, cornerRadius: o, cornerIsExternal: u }),
					v = y.circleTangency,
					m = y.lineTangency,
					b = y.theta,
					g = u ? Math.abs(c - l) : Math.abs(c - l) - h - b
				if (g < 0)
					return a
						? "M "
								.concat(d.x, ",")
								.concat(d.y, "\n        a")
								.concat(o, ",")
								.concat(o, ",0,0,1,")
								.concat(2 * o, ",0\n        a")
								.concat(o, ",")
								.concat(o, ",0,0,1,")
								.concat(-(2 * o), ",0\n      ")
						: c7({ cx: e, cy: r, innerRadius: n, outerRadius: i, startAngle: c, endAngle: l })
				var x = "M "
					.concat(d.x, ",")
					.concat(d.y, "\n    A")
					.concat(o, ",")
					.concat(o, ",0,0,")
					.concat(+(s < 0), ",")
					.concat(p.x, ",")
					.concat(p.y, "\n    A")
					.concat(i, ",")
					.concat(i, ",0,")
					.concat(+(g > 180), ",")
					.concat(+(s < 0), ",")
					.concat(v.x, ",")
					.concat(v.y, "\n    A")
					.concat(o, ",")
					.concat(o, ",0,0,")
					.concat(+(s < 0), ",")
					.concat(m.x, ",")
					.concat(m.y, "\n  ")
				if (n > 0) {
					var O = c4({
							cx: e,
							cy: r,
							radius: n,
							angle: c,
							sign: s,
							isExternal: !0,
							cornerRadius: o,
							cornerIsExternal: u,
						}),
						w = O.circleTangency,
						S = O.lineTangency,
						j = O.theta,
						E = c4({
							cx: e,
							cy: r,
							radius: n,
							angle: l,
							sign: -s,
							isExternal: !0,
							cornerRadius: o,
							cornerIsExternal: u,
						}),
						P = E.circleTangency,
						A = E.lineTangency,
						T = E.theta,
						k = u ? Math.abs(c - l) : Math.abs(c - l) - j - T
					if (k < 0 && 0 === o) return "".concat(x, "L").concat(e, ",").concat(r, "Z")
					x += "L"
						.concat(A.x, ",")
						.concat(A.y, "\n      A")
						.concat(o, ",")
						.concat(o, ",0,0,")
						.concat(+(s < 0), ",")
						.concat(P.x, ",")
						.concat(P.y, "\n      A")
						.concat(n, ",")
						.concat(n, ",0,")
						.concat(+(k > 180), ",")
						.concat(+(s > 0), ",")
						.concat(w.x, ",")
						.concat(w.y, "\n      A")
						.concat(o, ",")
						.concat(o, ",0,0,")
						.concat(+(s < 0), ",")
						.concat(S.x, ",")
						.concat(S.y, "Z")
				} else x += "L".concat(e, ",").concat(r, "Z")
				return x
			},
			lt = {
				cx: 0,
				cy: 0,
				innerRadius: 0,
				outerRadius: 0,
				startAngle: 0,
				endAngle: 0,
				cornerRadius: 0,
				forceCornerRadius: !1,
				cornerIsExternal: !1,
			},
			le = function (t) {
				var e,
					r = c8(c8({}, lt), t),
					n = r.cx,
					i = r.cy,
					o = r.innerRadius,
					a = r.outerRadius,
					u = r.cornerRadius,
					c = r.forceCornerRadius,
					l = r.cornerIsExternal,
					s = r.startAngle,
					f = r.endAngle,
					p = r.className
				if (a < o || s === f) return null
				var d = (0, to.default)("recharts-sector", p),
					h = a - o,
					y = (0, rs.getPercentValue)(u, h, 0, !0)
				return (
					(e =
						y > 0 && 360 > Math.abs(s - f)
							? c9({
									cx: n,
									cy: i,
									innerRadius: o,
									outerRadius: a,
									cornerRadius: Math.min(y, h / 2),
									forceCornerRadius: c,
									cornerIsExternal: l,
									startAngle: s,
									endAngle: f,
								})
							: c7({ cx: n, cy: i, innerRadius: o, outerRadius: a, startAngle: s, endAngle: f })),
					A.default.createElement(
						"path",
						c3({}, (0, tc.filterProps)(r, !0), { className: d, d: e, role: "img" }),
					)
				)
			},
			lr = t.i(77887),
			ln = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"]
		function li(t) {
			return (li =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function lo(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function la(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? lo(Object(r), !0).forEach(function (e) {
							var n, i, o
							;(n = t),
								(i = e),
								(o = r[e]),
								(i = (function (t) {
									var e = (function (t, e) {
										if ("object" != li(t) || !t) return t
										var r = t[Symbol.toPrimitive]
										if (void 0 !== r) {
											var n = r.call(t, e || "default")
											if ("object" != li(n)) return n
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === e ? String : Number)(t)
									})(t, "string")
									return "symbol" == li(e) ? e : e + ""
								})(i)) in n
									? Object.defineProperty(n, i, {
											value: o,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (n[i] = o)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: lo(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		function lu(t) {
			var e = t.shapeType,
				r = t.elementProps
			switch (e) {
				case "rectangle":
					return A.default.createElement(rt, r)
				case "trapezoid":
					return A.default.createElement(c2, r)
				case "sector":
					return A.default.createElement(le, r)
				case "symbols":
					if ("symbols" === e) return A.default.createElement(lr.Symbols, r)
					break
				default:
					return null
			}
		}
		function lc(t) {
			var e,
				r = t.option,
				n = t.shapeType,
				i = t.propTransformer,
				o = t.activeClassName,
				a = t.isActive,
				u = (function (t, e) {
					if (null == t) return {}
					var r,
						n,
						i = (function (t, e) {
							if (null == t) return {}
							var r = {}
							for (var n in t)
								if (Object.prototype.hasOwnProperty.call(t, n)) {
									if (e.indexOf(n) >= 0) continue
									r[n] = t[n]
								}
							return r
						})(t, e)
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(t)
						for (n = 0; n < o.length; n++)
							(r = o[n]),
								!(e.indexOf(r) >= 0) &&
									Object.prototype.propertyIsEnumerable.call(t, r) &&
									(i[r] = t[r])
					}
					return i
				})(t, ln)
			if ((0, A.isValidElement)(r))
				e = (0, A.cloneElement)(r, la(la({}, u), (0, A.isValidElement)(r) ? r.props : r))
			else if ((0, tt.default)(r)) e = r(u)
			else if ((0, cK.default)(r) && !(0, cQ.default)(r)) {
				var c = (
					void 0 === i
						? function (t, e) {
								return la(la({}, e), t)
							}
						: i
				)(r, u)
				e = A.default.createElement(lu, { shapeType: n, elementProps: c })
			} else e = A.default.createElement(lu, { shapeType: n, elementProps: u })
			return a ? A.default.createElement(tf, { className: void 0 === o ? "recharts-active-shape" : o }, e) : e
		}
		function ll(t, e) {
			return null != e && "trapezoids" in t.props
		}
		function ls(t, e) {
			return null != e && "sectors" in t.props
		}
		function lf(t, e) {
			return null != e && "points" in t.props
		}
		function lp(t, e) {
			var r,
				n,
				i = t.x === (null == e || null == (r = e.labelViewBox) ? void 0 : r.x) || t.x === e.x,
				o = t.y === (null == e || null == (n = e.labelViewBox) ? void 0 : n.y) || t.y === e.y
			return i && o
		}
		function ld(t, e) {
			var r = t.endAngle === e.endAngle,
				n = t.startAngle === e.startAngle
			return r && n
		}
		function lh(t, e) {
			var r = t.x === e.x,
				n = t.y === e.y,
				i = t.z === e.z
			return r && n && i
		}
		var ly = ["x", "y"]
		function lv(t) {
			return (lv =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function lm() {
			return (lm = Object.assign.bind()).apply(this, arguments)
		}
		function lb(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function lg(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? lb(Object(r), !0).forEach(function (e) {
							var n, i, o
							;(n = t),
								(i = e),
								(o = r[e]),
								(i = (function (t) {
									var e = (function (t, e) {
										if ("object" != lv(t) || !t) return t
										var r = t[Symbol.toPrimitive]
										if (void 0 !== r) {
											var n = r.call(t, e || "default")
											if ("object" != lv(n)) return n
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === e ? String : Number)(t)
									})(t, "string")
									return "symbol" == lv(e) ? e : e + ""
								})(i)) in n
									? Object.defineProperty(n, i, {
											value: o,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (n[i] = o)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: lb(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		function lx(t, e) {
			var r = t.x,
				n = t.y,
				i = (function (t, e) {
					if (null == t) return {}
					var r,
						n,
						i = (function (t, e) {
							if (null == t) return {}
							var r = {}
							for (var n in t)
								if (Object.prototype.hasOwnProperty.call(t, n)) {
									if (e.indexOf(n) >= 0) continue
									r[n] = t[n]
								}
							return r
						})(t, e)
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(t)
						for (n = 0; n < o.length; n++)
							(r = o[n]),
								!(e.indexOf(r) >= 0) &&
									Object.prototype.propertyIsEnumerable.call(t, r) &&
									(i[r] = t[r])
					}
					return i
				})(t, ly),
				o = parseInt("".concat(r), 10),
				a = parseInt("".concat(n), 10),
				u = parseInt("".concat(e.height || i.height), 10),
				c = parseInt("".concat(e.width || i.width), 10)
			return lg(
				lg(lg(lg(lg({}, e), i), o ? { x: o } : {}), a ? { y: a } : {}),
				{},
				{ height: u, width: c, name: e.name, radius: e.radius },
			)
		}
		function lO(t) {
			return A.default.createElement(
				lc,
				lm({ shapeType: "rectangle", propTransformer: lx, activeClassName: "recharts-active-bar" }, t),
			)
		}
		var lw = function (t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
				return function (r, n) {
					if ("number" == typeof t) return t
					var i = (0, rs.isNumber)(r) || (0, rs.isNullish)(r)
					return i ? t(r, n) : (i || ta(!1), e)
				}
			},
			lS = ["value", "background"]
		function lj(t) {
			return (lj =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function lE() {
			return (lE = Object.assign.bind()).apply(this, arguments)
		}
		function lP(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function lA(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? lP(Object(r), !0).forEach(function (e) {
							l_(t, e, r[e])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: lP(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		function lT(t, e) {
			for (var r = 0; r < e.length; r++) {
				var n = e[r]
				;(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, lI(n.key), n)
			}
		}
		function lk() {
			try {
				var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (t) {}
			return (lk = function () {
				return !!t
			})()
		}
		function lM(t) {
			return (lM = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					})(t)
		}
		function lN(t, e) {
			return (lN = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (t, e) {
						return (t.__proto__ = e), t
					})(t, e)
		}
		function l_(t, e, r) {
			return (
				(e = lI(e)) in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		function lI(t) {
			var e = (function (t, e) {
				if ("object" != lj(t) || !t) return t
				var r = t[Symbol.toPrimitive]
				if (void 0 !== r) {
					var n = r.call(t, e || "default")
					if ("object" != lj(n)) return n
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === e ? String : Number)(t)
			})(t, "string")
			return "symbol" == lj(e) ? e : e + ""
		}
		var lC = (function (t) {
			var e, r
			function n() {
				var t, e, r
				if (!(this instanceof n)) throw TypeError("Cannot call a class as a function")
				for (var i = arguments.length, o = Array(i), a = 0; a < i; a++) o[a] = arguments[a]
				return (
					(e = n),
					(r = [].concat(o)),
					(e = lM(e)),
					l_(
						(t = (function (t, e) {
							if (e && ("object" === lj(e) || "function" == typeof e)) return e
							if (void 0 !== e)
								throw TypeError("Derived constructors may only return object or undefined")
							var r = t
							if (void 0 === r)
								throw ReferenceError("this hasn't been initialised - super() hasn't been called")
							return r
						})(this, lk() ? Reflect.construct(e, r || [], lM(this).constructor) : e.apply(this, r))),
						"state",
						{ isAnimationFinished: !1 },
					),
					l_(t, "id", (0, rs.uniqueId)("recharts-bar-")),
					l_(t, "handleAnimationEnd", function () {
						var e = t.props.onAnimationEnd
						t.setState({ isAnimationFinished: !0 }), e && e()
					}),
					l_(t, "handleAnimationStart", function () {
						var e = t.props.onAnimationStart
						t.setState({ isAnimationFinished: !1 }), e && e()
					}),
					t
				)
			}
			if ("function" != typeof t && null !== t)
				throw TypeError("Super expression must either be null or a function")
			return (
				(n.prototype = Object.create(t && t.prototype, {
					constructor: { value: n, writable: !0, configurable: !0 },
				})),
				Object.defineProperty(n, "prototype", { writable: !1 }),
				t && lN(n, t),
				(e = [
					{
						key: "renderRectanglesStatically",
						value: function (t) {
							var e = this,
								r = this.props,
								n = r.shape,
								i = r.dataKey,
								o = r.activeIndex,
								a = r.activeBar,
								u = (0, tc.filterProps)(this.props, !1)
							return (
								t &&
								t.map(function (t, r) {
									var c = r === o,
										l = lA(
											lA(lA({}, u), t),
											{},
											{
												isActive: c,
												option: c ? a : n,
												index: r,
												dataKey: i,
												onAnimationStart: e.handleAnimationStart,
												onAnimationEnd: e.handleAnimationEnd,
											},
										)
									return A.default.createElement(
										tf,
										lE(
											{ className: "recharts-bar-rectangle" },
											(0, th.adaptEventsOfChild)(e.props, t, r),
											{
												key: "rectangle-"
													.concat(null == t ? void 0 : t.x, "-")
													.concat(null == t ? void 0 : t.y, "-")
													.concat(null == t ? void 0 : t.value, "-")
													.concat(r),
											},
										),
										A.default.createElement(lO, l),
									)
								})
							)
						},
					},
					{
						key: "renderRectanglesWithAnimation",
						value: function () {
							var t = this,
								e = this.props,
								r = e.data,
								n = e.layout,
								i = e.isAnimationActive,
								o = e.animationBegin,
								a = e.animationDuration,
								u = e.animationEasing,
								c = e.animationId,
								l = this.state.prevData
							return A.default.createElement(
								eE,
								{
									begin: o,
									duration: a,
									isActive: i,
									easing: u,
									from: { t: 0 },
									to: { t: 1 },
									key: "bar-".concat(c),
									onAnimationEnd: this.handleAnimationEnd,
									onAnimationStart: this.handleAnimationStart,
								},
								function (e) {
									var i = e.t,
										o = r.map(function (t, e) {
											var r = l && l[e]
											if (r) {
												var o = (0, rs.interpolateNumber)(r.x, t.x),
													a = (0, rs.interpolateNumber)(r.y, t.y),
													u = (0, rs.interpolateNumber)(r.width, t.width),
													c = (0, rs.interpolateNumber)(r.height, t.height)
												return lA(
													lA({}, t),
													{},
													{ x: o(i), y: a(i), width: u(i), height: c(i) },
												)
											}
											if ("horizontal" === n) {
												var s = (0, rs.interpolateNumber)(0, t.height)(i)
												return lA(lA({}, t), {}, { y: t.y + t.height - s, height: s })
											}
											var f = (0, rs.interpolateNumber)(0, t.width)(i)
											return lA(lA({}, t), {}, { width: f })
										})
									return A.default.createElement(tf, null, t.renderRectanglesStatically(o))
								},
							)
						},
					},
					{
						key: "renderRectangles",
						value: function () {
							var t = this.props,
								e = t.data,
								r = t.isAnimationActive,
								n = this.state.prevData
							return r && e && e.length && (!n || !(0, aq.default)(n, e))
								? this.renderRectanglesWithAnimation()
								: this.renderRectanglesStatically(e)
						},
					},
					{
						key: "renderBackground",
						value: function () {
							var t = this,
								e = this.props,
								r = e.data,
								n = e.dataKey,
								i = e.activeIndex,
								o = (0, tc.filterProps)(this.props.background, !1)
							return r.map(function (e, r) {
								e.value
								var a = e.background,
									u = (function (t, e) {
										if (null == t) return {}
										var r,
											n,
											i = (function (t, e) {
												if (null == t) return {}
												var r = {}
												for (var n in t)
													if (Object.prototype.hasOwnProperty.call(t, n)) {
														if (e.indexOf(n) >= 0) continue
														r[n] = t[n]
													}
												return r
											})(t, e)
										if (Object.getOwnPropertySymbols) {
											var o = Object.getOwnPropertySymbols(t)
											for (n = 0; n < o.length; n++)
												(r = o[n]),
													!(e.indexOf(r) >= 0) &&
														Object.prototype.propertyIsEnumerable.call(t, r) &&
														(i[r] = t[r])
										}
										return i
									})(e, lS)
								if (!a) return null
								var c = lA(
									lA(
										lA(lA(lA({}, u), {}, { fill: "#eee" }, a), o),
										(0, th.adaptEventsOfChild)(t.props, e, r),
									),
									{},
									{
										onAnimationStart: t.handleAnimationStart,
										onAnimationEnd: t.handleAnimationEnd,
										dataKey: n,
										index: r,
										className: "recharts-bar-background-rectangle",
									},
								)
								return A.default.createElement(
									lO,
									lE(
										{
											key: "background-bar-".concat(r),
											option: t.props.background,
											isActive: r === i,
										},
										c,
									),
								)
							})
						},
					},
					{
						key: "renderErrorBar",
						value: function (t, e) {
							if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null
							var r = this.props,
								n = r.data,
								i = r.xAxis,
								o = r.yAxis,
								a = r.layout,
								u = r.children,
								c = (0, tc.findAllByType)(u, uf)
							if (!c) return null
							var l = "vertical" === a ? n[0].height / 2 : n[0].width / 2,
								s = function (t, e) {
									var r = Array.isArray(t.value) ? t.value[1] : t.value
									return { x: t.x, y: t.y, value: r, errorVal: uw(t, e) }
								}
							return A.default.createElement(
								tf,
								{ clipPath: t ? "url(#clipPath-".concat(e, ")") : null },
								c.map(function (t) {
									return A.default.cloneElement(t, {
										key: "error-bar-".concat(e, "-").concat(t.props.dataKey),
										data: n,
										xAxis: i,
										yAxis: o,
										layout: a,
										offset: l,
										dataPointFormatter: s,
									})
								}),
							)
						},
					},
					{
						key: "render",
						value: function () {
							var t = this.props,
								e = t.hide,
								r = t.data,
								n = t.className,
								i = t.xAxis,
								o = t.yAxis,
								a = t.left,
								u = t.top,
								c = t.width,
								l = t.height,
								s = t.isAnimationActive,
								f = t.background,
								p = t.id
							if (e || !r || !r.length) return null
							var d = this.state.isAnimationFinished,
								h = (0, to.default)("recharts-bar", n),
								y = i && i.allowDataOverflow,
								v = o && o.allowDataOverflow,
								m = y || v,
								b = (0, J.default)(p) ? this.id : p
							return A.default.createElement(
								tf,
								{ className: h },
								y || v
									? A.default.createElement(
											"defs",
											null,
											A.default.createElement(
												"clipPath",
												{ id: "clipPath-".concat(b) },
												A.default.createElement("rect", {
													x: y ? a : a - c / 2,
													y: v ? u : u - l / 2,
													width: y ? c : 2 * c,
													height: v ? l : 2 * l,
												}),
											),
										)
									: null,
								A.default.createElement(
									tf,
									{
										className: "recharts-bar-rectangles",
										clipPath: m ? "url(#clipPath-".concat(b, ")") : null,
									},
									f ? this.renderBackground() : null,
									this.renderRectangles(),
								),
								this.renderErrorBar(m, b),
								(!s || d) && cX.renderCallByParent(this.props, r),
							)
						},
					},
				]),
				(r = [
					{
						key: "getDerivedStateFromProps",
						value: function (t, e) {
							return t.animationId !== e.prevAnimationId
								? { prevAnimationId: t.animationId, curData: t.data, prevData: e.curData }
								: t.data !== e.curData
									? { curData: t.data }
									: null
						},
					},
				]),
				e && lT(n.prototype, e),
				r && lT(n, r),
				Object.defineProperty(n, "prototype", { writable: !1 }),
				n
			)
		})(A.PureComponent)
		function lD(t) {
			return (lD =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function lR(t, e) {
			for (var r = 0; r < e.length; r++) {
				var n = e[r]
				;(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, lU(n.key), n)
			}
		}
		function lB(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function lL(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? lB(Object(r), !0).forEach(function (e) {
							lz(t, e, r[e])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: lB(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		function lz(t, e, r) {
			return (
				(e = lU(e)) in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		function lU(t) {
			var e = (function (t, e) {
				if ("object" != lD(t) || !t) return t
				var r = t[Symbol.toPrimitive]
				if (void 0 !== r) {
					var n = r.call(t, e || "default")
					if ("object" != lD(n)) return n
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === e ? String : Number)(t)
			})(t, "string")
			return "symbol" == lD(e) ? e : e + ""
		}
		l_(lC, "displayName", "Bar"),
			l_(lC, "defaultProps", {
				xAxisId: 0,
				yAxisId: 0,
				legendType: "rect",
				minPointSize: 0,
				hide: !1,
				data: [],
				layout: "vertical",
				activeBar: !1,
				isAnimationActive: !rf.Global.isSsr,
				animationBegin: 0,
				animationDuration: 400,
				animationEasing: "ease",
			}),
			l_(lC, "getComposedData", function (t) {
				var e = t.props,
					r = t.item,
					n = t.barPosition,
					i = t.bandSize,
					o = t.xAxis,
					a = t.yAxis,
					u = t.xAxisTicks,
					c = t.yAxisTicks,
					l = t.stackedData,
					s = t.dataStartIndex,
					f = t.displayedData,
					p = t.offset,
					d = uL(n, r)
				if (!d) return null
				var h = e.layout,
					y = r.type.defaultProps,
					v = void 0 !== y ? lA(lA({}, y), r.props) : r.props,
					m = v.dataKey,
					b = v.children,
					g = v.minPointSize,
					x = "horizontal" === h ? a : o,
					O = l ? x.scale.domain() : null,
					w = uX({ numericAxis: x }),
					S = (0, tc.findAllByType)(b, cD),
					j = f.map(function (t, e) {
						l ? (f = uz(l[s + e], O)) : Array.isArray((f = uw(t, m))) || (f = [w, f])
						var n = lw(g, lC.defaultProps.minPointSize)(f[1], e)
						if ("horizontal" === h) {
							var f,
								p,
								y,
								v,
								b,
								x,
								j,
								E = [a.scale(f[0]), a.scale(f[1])],
								P = E[0],
								A = E[1]
							;(p = u$({ axis: o, ticks: u, bandSize: i, offset: d.offset, entry: t, index: e })),
								(y = null != (j = null != A ? A : P) ? j : void 0),
								(v = d.size)
							var T = P - A
							if (
								((b = Number.isNaN(T) ? 0 : T),
								(x = { x: p, y: a.y, width: v, height: a.height }),
								Math.abs(n) > 0 && Math.abs(b) < Math.abs(n))
							) {
								var k = (0, rs.mathSign)(b || n) * (Math.abs(n) - Math.abs(b))
								;(y -= k), (b += k)
							}
						} else {
							var M = [o.scale(f[0]), o.scale(f[1])],
								N = M[0],
								_ = M[1]
							if (
								((p = N),
								(y = u$({ axis: a, ticks: c, bandSize: i, offset: d.offset, entry: t, index: e })),
								(v = _ - N),
								(b = d.size),
								(x = { x: o.x, y: y, width: o.width, height: b }),
								Math.abs(n) > 0 && Math.abs(v) < Math.abs(n))
							) {
								var I = (0, rs.mathSign)(v || n) * (Math.abs(n) - Math.abs(v))
								v += I
							}
						}
						return lA(
							lA(
								lA({}, t),
								{},
								{ x: p, y: y, width: v, height: b, value: l ? f : f[1], payload: t, background: x },
								S && S[e] && S[e].props,
							),
							{},
							{ tooltipPayload: [u0(r, t)], tooltipPosition: { x: p + v / 2, y: y + b / 2 } },
						)
					})
				return lA({ data: j, layout: h }, p)
			})
		var lF = function (t, e) {
				var r = t.x,
					n = t.y,
					i = e.x,
					o = e.y
				return { x: Math.min(r, i), y: Math.min(n, o), width: Math.abs(i - r), height: Math.abs(o - n) }
			},
			lq = (function () {
				var t, e
				function r(t) {
					if (!(this instanceof r)) throw TypeError("Cannot call a class as a function")
					this.scale = t
				}
				return (
					(t = [
						{
							key: "domain",
							get: function () {
								return this.scale.domain
							},
						},
						{
							key: "range",
							get: function () {
								return this.scale.range
							},
						},
						{
							key: "rangeMin",
							get: function () {
								return this.range()[0]
							},
						},
						{
							key: "rangeMax",
							get: function () {
								return this.range()[1]
							},
						},
						{
							key: "bandwidth",
							get: function () {
								return this.scale.bandwidth
							},
						},
						{
							key: "apply",
							value: function (t) {
								var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
									r = e.bandAware,
									n = e.position
								if (void 0 !== t) {
									if (n)
										switch (n) {
											case "start":
											default:
												return this.scale(t)
											case "middle":
												var i = this.bandwidth ? this.bandwidth() / 2 : 0
												return this.scale(t) + i
											case "end":
												var o = this.bandwidth ? this.bandwidth() : 0
												return this.scale(t) + o
										}
									if (r) {
										var a = this.bandwidth ? this.bandwidth() / 2 : 0
										return this.scale(t) + a
									}
									return this.scale(t)
								}
							},
						},
						{
							key: "isInRange",
							value: function (t) {
								var e = this.range(),
									r = e[0],
									n = e[e.length - 1]
								return r <= n ? t >= r && t <= n : t >= n && t <= r
							},
						},
					]),
					(e = [
						{
							key: "create",
							value: function (t) {
								return new r(t)
							},
						},
					]),
					t && lR(r.prototype, t),
					e && lR(r, e),
					Object.defineProperty(r, "prototype", { writable: !1 }),
					r
				)
			})()
		lz(lq, "EPS", 1e-4)
		var lW = function (t) {
				var e = Object.keys(t).reduce(function (e, r) {
					return lL(lL({}, e), {}, lz({}, r, lq.create(t[r])))
				}, {})
				return lL(
					lL({}, e),
					{},
					{
						apply: function (t) {
							var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								n = r.bandAware,
								i = r.position
							return (0, cI.default)(t, function (t, r) {
								return e[r].apply(t, { bandAware: n, position: i })
							})
						},
						isInRange: function (t) {
							return (0, cC.default)(t, function (t, r) {
								return e[r].isInRange(t)
							})
						},
					},
				)
			},
			lH = function (t) {
				var e = t.width,
					r = t.height,
					n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
					i = ((((n % 180) + 180) % 180) * Math.PI) / 180,
					o = Math.atan(r / e)
				return Math.abs(i > o && i < Math.PI - o ? r / Math.sin(i) : e / Math.cos(i))
			},
			l$ = t.i(84563)
		function lX() {
			return (lX = Object.assign.bind()).apply(this, arguments)
		}
		function lK(t) {
			return (lK =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function lQ(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function lG(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? lQ(Object(r), !0).forEach(function (e) {
							lJ(t, e, r[e])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: lQ(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		function lV() {
			try {
				var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (t) {}
			return (lV = function () {
				return !!t
			})()
		}
		function lY(t) {
			return (lY = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					})(t)
		}
		function lZ(t, e) {
			return (lZ = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (t, e) {
						return (t.__proto__ = e), t
					})(t, e)
		}
		function lJ(t, e, r) {
			return (
				(e = l0(e)) in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		function l0(t) {
			var e = (function (t, e) {
				if ("object" != lK(t) || !t) return t
				var r = t[Symbol.toPrimitive]
				if (void 0 !== r) {
					var n = r.call(t, e || "default")
					if ("object" != lK(n)) return n
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === e ? String : Number)(t)
			})(t, "string")
			return "symbol" == lK(e) ? e : e + ""
		}
		var l1 = function (t) {
				var e = t.x,
					r = t.y,
					n = t.xAxis,
					i = t.yAxis,
					o = lW({ x: n.scale, y: i.scale }),
					a = o.apply({ x: e, y: r }, { bandAware: !0 })
				return c_(t, "discard") && !o.isInRange(a) ? null : a
			},
			l2 = (function (t) {
				var e
				function r() {
					var t, e
					if (!(this instanceof r)) throw TypeError("Cannot call a class as a function")
					return (
						(t = r),
						(e = arguments),
						(t = lY(t)),
						(function (t, e) {
							if (e && ("object" === lK(e) || "function" == typeof e)) return e
							if (void 0 !== e)
								throw TypeError("Derived constructors may only return object or undefined")
							var r = t
							if (void 0 === r)
								throw ReferenceError("this hasn't been initialised - super() hasn't been called")
							return r
						})(this, lV() ? Reflect.construct(t, e || [], lY(this).constructor) : t.apply(this, e))
					)
				}
				if ("function" != typeof t && null !== t)
					throw TypeError("Super expression must either be null or a function")
				return (
					(r.prototype = Object.create(t && t.prototype, {
						constructor: { value: r, writable: !0, configurable: !0 },
					})),
					Object.defineProperty(r, "prototype", { writable: !1 }),
					t && lZ(r, t),
					(e = [
						{
							key: "render",
							value: function () {
								var t = this.props,
									e = t.x,
									n = t.y,
									i = t.r,
									o = t.alwaysShow,
									a = t.clipPathId,
									u = (0, rs.isNumOrStr)(e),
									c = (0, rs.isNumOrStr)(n)
								if (
									((0, l$.warn)(
										void 0 === o,
										'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
									),
									!u || !c)
								)
									return null
								var l = l1(this.props)
								if (!l) return null
								var s = l.x,
									f = l.y,
									p = this.props,
									d = p.shape,
									h = p.className,
									y = lG(
										lG(
											{ clipPath: c_(this.props, "hidden") ? "url(#".concat(a, ")") : void 0 },
											(0, tc.filterProps)(this.props, !0),
										),
										{},
										{ cx: s, cy: f },
									)
								return A.default.createElement(
									tf,
									{ className: (0, to.default)("recharts-reference-dot", h) },
									r.renderDot(d, y),
									cM.renderCallByParent(this.props, {
										x: s - i,
										y: f - i,
										width: 2 * i,
										height: 2 * i,
									}),
								)
							},
						},
					]),
					(function (t, e) {
						for (var r = 0; r < e.length; r++) {
							var n = e[r]
							;(n.enumerable = n.enumerable || !1),
								(n.configurable = !0),
								"value" in n && (n.writable = !0),
								Object.defineProperty(t, l0(n.key), n)
						}
					})(r.prototype, e),
					Object.defineProperty(r, "prototype", { writable: !1 }),
					r
				)
			})(A.default.Component)
		lJ(l2, "displayName", "ReferenceDot"),
			lJ(l2, "defaultProps", {
				isFront: !1,
				ifOverflow: "discard",
				xAxisId: 0,
				yAxisId: 0,
				r: 10,
				fill: "#fff",
				stroke: "#ccc",
				fillOpacity: 1,
				strokeWidth: 1,
			}),
			lJ(l2, "renderDot", function (t, e) {
				return A.default.isValidElement(t)
					? A.default.cloneElement(t, e)
					: (0, tt.default)(t)
						? t(e)
						: A.default.createElement(
								tv,
								lX({}, e, { cx: e.cx, cy: e.cy, className: "recharts-reference-dot-dot" }),
							)
			})
		var l5 = t.i(22372)
		t.i(21569)
		var l3 = (0, t.i(97230).default)(
				function (t) {
					return { x: t.left, y: t.top, width: t.width, height: t.height }
				},
				function (t) {
					return "l" + t.left + "t" + t.top + "w" + t.width + "h" + t.height
				},
			),
			l6 = (0, A.createContext)(void 0),
			l8 = (0, A.createContext)(void 0),
			l4 = (0, A.createContext)(void 0),
			l7 = (0, A.createContext)({}),
			l9 = (0, A.createContext)(void 0),
			st = (0, A.createContext)(0),
			se = (0, A.createContext)(0),
			sr = function (t) {
				var e = t.state,
					r = e.xAxisMap,
					n = e.yAxisMap,
					i = e.offset,
					o = t.clipPathId,
					a = t.children,
					u = t.width,
					c = t.height,
					l = l3(i)
				return A.default.createElement(
					l6.Provider,
					{ value: r },
					A.default.createElement(
						l8.Provider,
						{ value: n },
						A.default.createElement(
							l7.Provider,
							{ value: i },
							A.default.createElement(
								l4.Provider,
								{ value: l },
								A.default.createElement(
									l9.Provider,
									{ value: o },
									A.default.createElement(
										st.Provider,
										{ value: c },
										A.default.createElement(se.Provider, { value: u }, a),
									),
								),
							),
						),
					),
				)
			},
			sn = function (t) {
				var e = (0, A.useContext)(l6)
				null == e && ta(!1)
				var r = e[t]
				return null == r && ta(!1), r
			},
			si = function (t) {
				var e = (0, A.useContext)(l8)
				null == e && ta(!1)
				var r = e[t]
				return null == r && ta(!1), r
			},
			so = function () {
				return (0, A.useContext)(se)
			},
			sa = function () {
				return (0, A.useContext)(st)
			}
		function su(t) {
			return (su =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function sc() {
			try {
				var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (t) {}
			return (sc = function () {
				return !!t
			})()
		}
		function sl(t) {
			return (sl = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					})(t)
		}
		function ss(t, e) {
			return (ss = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (t, e) {
						return (t.__proto__ = e), t
					})(t, e)
		}
		function sf(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function sp(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? sf(Object(r), !0).forEach(function (e) {
							sd(t, e, r[e])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: sf(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		function sd(t, e, r) {
			return (
				(e = sh(e)) in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		function sh(t) {
			var e = (function (t, e) {
				if ("object" != su(t) || !t) return t
				var r = t[Symbol.toPrimitive]
				if (void 0 !== r) {
					var n = r.call(t, e || "default")
					if ("object" != su(n)) return n
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === e ? String : Number)(t)
			})(t, "string")
			return "symbol" == su(e) ? e : e + ""
		}
		function sy(t, e) {
			;(null == e || e > t.length) && (e = t.length)
			for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r]
			return n
		}
		function sv() {
			return (sv = Object.assign.bind()).apply(this, arguments)
		}
		var sm = function (t, e) {
				return A.default.isValidElement(t)
					? A.default.cloneElement(t, e)
					: (0, tt.default)(t)
						? t(e)
						: A.default.createElement("line", sv({}, e, { className: "recharts-reference-line-line" }))
			},
			sb = function (t, e, r, n, i, o, a, u, c) {
				var l = i.x,
					s = i.y,
					f = i.width,
					p = i.height
				if (r) {
					var d = c.y,
						h = t.y.apply(d, { position: o })
					if (c_(c, "discard") && !t.y.isInRange(h)) return null
					var y = [
						{ x: l + f, y: h },
						{ x: l, y: h },
					]
					return "left" === u ? y.reverse() : y
				}
				if (e) {
					var v = c.x,
						m = t.x.apply(v, { position: o })
					if (c_(c, "discard") && !t.x.isInRange(m)) return null
					var b = [
						{ x: m, y: s + p },
						{ x: m, y: s },
					]
					return "top" === a ? b.reverse() : b
				}
				if (n) {
					var g = c.segment.map(function (e) {
						return t.apply(e, { position: o })
					})
					return c_(c, "discard") &&
						(0, l5.default)(g, function (e) {
							return !t.isInRange(e)
						})
						? null
						: g
				}
				return null
			}
		function sg(t) {
			var e,
				r = t.x,
				n = t.y,
				i = t.segment,
				o = t.xAxisId,
				a = t.yAxisId,
				u = t.shape,
				c = t.className,
				l = t.alwaysShow,
				s = (0, A.useContext)(l9),
				f = sn(o),
				p = si(a),
				d = (0, A.useContext)(l4)
			if (!s || !d) return null
			;(0, l$.warn)(
				void 0 === l,
				'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
			)
			var h = sb(
				lW({ x: f.scale, y: p.scale }),
				(0, rs.isNumOrStr)(r),
				(0, rs.isNumOrStr)(n),
				i && 2 === i.length,
				d,
				t.position,
				f.orientation,
				p.orientation,
				t,
			)
			if (!h) return null
			var y =
					(function (t) {
						if (Array.isArray(t)) return t
					})(h) ||
					(function (t, e) {
						var r = null == t ? null : ("u" > typeof Symbol && t[Symbol.iterator]) || t["@@iterator"]
						if (null != r) {
							var n,
								i,
								o,
								a,
								u = [],
								c = !0,
								l = !1
							try {
								;(o = (r = r.call(t)).next), !1
								for (; !(c = (n = o.call(r)).done) && (u.push(n.value), 2 !== u.length); c = !0);
							} catch (t) {
								;(l = !0), (i = t)
							} finally {
								try {
									if (!c && null != r.return && ((a = r.return()), Object(a) !== a)) return
								} finally {
									if (l) throw i
								}
							}
							return u
						}
					})(h, 2) ||
					(function (t, e) {
						if (t) {
							if ("string" == typeof t) return sy(t, 2)
							var r = Object.prototype.toString.call(t).slice(8, -1)
							if (
								("Object" === r && t.constructor && (r = t.constructor.name),
								"Map" === r || "Set" === r)
							)
								return Array.from(t)
							if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sy(t, 2)
						}
					})(h, 2) ||
					(function () {
						throw TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
						)
					})(),
				v = y[0],
				m = v.x,
				b = v.y,
				g = y[1],
				x = g.x,
				O = g.y,
				w = sp(
					sp({ clipPath: c_(t, "hidden") ? "url(#".concat(s, ")") : void 0 }, (0, tc.filterProps)(t, !0)),
					{},
					{ x1: m, y1: b, x2: x, y2: O },
				)
			return A.default.createElement(
				tf,
				{ className: (0, to.default)("recharts-reference-line", c) },
				sm(u, w),
				cM.renderCallByParent(
					t,
					lF({ x: (e = { x1: m, y1: b, x2: x, y2: O }).x1, y: e.y1 }, { x: e.x2, y: e.y2 }),
				),
			)
		}
		var sx = (function (t) {
			var e
			function r() {
				var t, e
				if (!(this instanceof r)) throw TypeError("Cannot call a class as a function")
				return (
					(t = r),
					(e = arguments),
					(t = sl(t)),
					(function (t, e) {
						if (e && ("object" === su(e) || "function" == typeof e)) return e
						if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined")
						var r = t
						if (void 0 === r)
							throw ReferenceError("this hasn't been initialised - super() hasn't been called")
						return r
					})(this, sc() ? Reflect.construct(t, e || [], sl(this).constructor) : t.apply(this, e))
				)
			}
			if ("function" != typeof t && null !== t)
				throw TypeError("Super expression must either be null or a function")
			return (
				(r.prototype = Object.create(t && t.prototype, {
					constructor: { value: r, writable: !0, configurable: !0 },
				})),
				Object.defineProperty(r, "prototype", { writable: !1 }),
				t && ss(r, t),
				(e = [
					{
						key: "render",
						value: function () {
							return A.default.createElement(sg, this.props)
						},
					},
				]),
				(function (t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r]
						;(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(t, sh(n.key), n)
					}
				})(r.prototype, e),
				Object.defineProperty(r, "prototype", { writable: !1 }),
				r
			)
		})(A.default.Component)
		function sO() {
			return (sO = Object.assign.bind()).apply(this, arguments)
		}
		function sw(t) {
			return (sw =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function sS(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function sj(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? sS(Object(r), !0).forEach(function (e) {
							sT(t, e, r[e])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: sS(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		sd(sx, "displayName", "ReferenceLine"),
			sd(sx, "defaultProps", {
				isFront: !1,
				ifOverflow: "discard",
				xAxisId: 0,
				yAxisId: 0,
				fill: "none",
				stroke: "#ccc",
				fillOpacity: 1,
				strokeWidth: 1,
				position: "middle",
			})
		function sE() {
			try {
				var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (t) {}
			return (sE = function () {
				return !!t
			})()
		}
		function sP(t) {
			return (sP = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					})(t)
		}
		function sA(t, e) {
			return (sA = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (t, e) {
						return (t.__proto__ = e), t
					})(t, e)
		}
		function sT(t, e, r) {
			return (
				(e = sk(e)) in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		function sk(t) {
			var e = (function (t, e) {
				if ("object" != sw(t) || !t) return t
				var r = t[Symbol.toPrimitive]
				if (void 0 !== r) {
					var n = r.call(t, e || "default")
					if ("object" != sw(n)) return n
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === e ? String : Number)(t)
			})(t, "string")
			return "symbol" == sw(e) ? e : e + ""
		}
		var sM = function (t, e, r, n, i) {
				var o = i.x1,
					a = i.x2,
					u = i.y1,
					c = i.y2,
					l = i.xAxis,
					s = i.yAxis
				if (!l || !s) return null
				var f = lW({ x: l.scale, y: s.scale }),
					p = {
						x: t ? f.x.apply(o, { position: "start" }) : f.x.rangeMin,
						y: r ? f.y.apply(u, { position: "start" }) : f.y.rangeMin,
					},
					d = {
						x: e ? f.x.apply(a, { position: "end" }) : f.x.rangeMax,
						y: n ? f.y.apply(c, { position: "end" }) : f.y.rangeMax,
					}
				return !c_(i, "discard") || (f.isInRange(p) && f.isInRange(d)) ? lF(p, d) : null
			},
			sN = (function (t) {
				var e
				function r() {
					var t, e
					if (!(this instanceof r)) throw TypeError("Cannot call a class as a function")
					return (
						(t = r),
						(e = arguments),
						(t = sP(t)),
						(function (t, e) {
							if (e && ("object" === sw(e) || "function" == typeof e)) return e
							if (void 0 !== e)
								throw TypeError("Derived constructors may only return object or undefined")
							var r = t
							if (void 0 === r)
								throw ReferenceError("this hasn't been initialised - super() hasn't been called")
							return r
						})(this, sE() ? Reflect.construct(t, e || [], sP(this).constructor) : t.apply(this, e))
					)
				}
				if ("function" != typeof t && null !== t)
					throw TypeError("Super expression must either be null or a function")
				return (
					(r.prototype = Object.create(t && t.prototype, {
						constructor: { value: r, writable: !0, configurable: !0 },
					})),
					Object.defineProperty(r, "prototype", { writable: !1 }),
					t && sA(r, t),
					(e = [
						{
							key: "render",
							value: function () {
								var t = this.props,
									e = t.x1,
									n = t.x2,
									i = t.y1,
									o = t.y2,
									a = t.className,
									u = t.alwaysShow,
									c = t.clipPathId
								;(0, l$.warn)(
									void 0 === u,
									'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
								)
								var l = (0, rs.isNumOrStr)(e),
									s = (0, rs.isNumOrStr)(n),
									f = (0, rs.isNumOrStr)(i),
									p = (0, rs.isNumOrStr)(o),
									d = this.props.shape
								if (!l && !s && !f && !p && !d) return null
								var h = sM(l, s, f, p, this.props)
								if (!h && !d) return null
								var y = c_(this.props, "hidden") ? "url(#".concat(c, ")") : void 0
								return A.default.createElement(
									tf,
									{ className: (0, to.default)("recharts-reference-area", a) },
									r.renderRect(d, sj(sj({ clipPath: y }, (0, tc.filterProps)(this.props, !0)), h)),
									cM.renderCallByParent(this.props, h),
								)
							},
						},
					]),
					(function (t, e) {
						for (var r = 0; r < e.length; r++) {
							var n = e[r]
							;(n.enumerable = n.enumerable || !1),
								(n.configurable = !0),
								"value" in n && (n.writable = !0),
								Object.defineProperty(t, sk(n.key), n)
						}
					})(r.prototype, e),
					Object.defineProperty(r, "prototype", { writable: !1 }),
					r
				)
			})(A.default.Component)
		function s_(t) {
			return (
				(function (t) {
					if (Array.isArray(t)) return sI(t)
				})(t) ||
				(function (t) {
					if (("u" > typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"])
						return Array.from(t)
				})(t) ||
				(function (t, e) {
					if (t) {
						if ("string" == typeof t) return sI(t, void 0)
						var r = Object.prototype.toString.call(t).slice(8, -1)
						if (("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r))
							return Array.from(t)
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
							return sI(t, void 0)
					}
				})(t) ||
				(function () {
					throw TypeError(
						"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function sI(t, e) {
			;(null == e || e > t.length) && (e = t.length)
			for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r]
			return n
		}
		sT(sN, "displayName", "ReferenceArea"),
			sT(sN, "defaultProps", {
				isFront: !1,
				ifOverflow: "discard",
				xAxisId: 0,
				yAxisId: 0,
				r: 10,
				fill: "#ccc",
				fillOpacity: 0.5,
				stroke: "none",
				strokeWidth: 1,
			}),
			sT(sN, "renderRect", function (t, e) {
				return A.default.isValidElement(t)
					? A.default.cloneElement(t, e)
					: (0, tt.default)(t)
						? t(e)
						: A.default.createElement(rt, sO({}, e, { className: "recharts-reference-area-rect" }))
			})
		var sC = function (t, e, r, n, i) {
				var o = (0, tc.findAllByType)(t, sx),
					a = (0, tc.findAllByType)(t, l2),
					u = [].concat(s_(o), s_(a)),
					c = (0, tc.findAllByType)(t, sN),
					l = "".concat(n, "Id"),
					s = n[0],
					f = e
				if (
					(u.length &&
						(f = u.reduce(function (t, e) {
							if (e.props[l] === r && c_(e.props, "extendDomain") && (0, rs.isNumber)(e.props[s])) {
								var n = e.props[s]
								return [Math.min(t[0], n), Math.max(t[1], n)]
							}
							return t
						}, f)),
					c.length)
				) {
					var p = "".concat(s, "1"),
						d = "".concat(s, "2")
					f = c.reduce(function (t, e) {
						if (
							e.props[l] === r &&
							c_(e.props, "extendDomain") &&
							(0, rs.isNumber)(e.props[p]) &&
							(0, rs.isNumber)(e.props[d])
						) {
							var n = e.props[p],
								i = e.props[d]
							return [Math.min(t[0], n, i), Math.max(t[1], n, i)]
						}
						return t
					}, f)
				}
				return (
					i &&
						i.length &&
						(f = i.reduce(function (t, e) {
							return (0, rs.isNumber)(e) ? [Math.min(t[0], e), Math.max(t[1], e)] : t
						}, f)),
					f
				)
			},
			sD = t.i(34874),
			sR = new (t.i(10482).default)(),
			sB = "recharts.syncMouseEvents"
		function sL(t) {
			return (sL =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function sz(t, e, r) {
			return (
				(e = sU(e)) in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		function sU(t) {
			var e = (function (t, e) {
				if ("object" != sL(t) || !t) return t
				var r = t[Symbol.toPrimitive]
				if (void 0 !== r) {
					var n = r.call(t, e || "default")
					if ("object" != sL(n)) return n
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === e ? String : Number)(t)
			})(t, "string")
			return "symbol" == sL(e) ? e : e + ""
		}
		var sF =
			((r = function t() {
				if (!(this instanceof t)) throw TypeError("Cannot call a class as a function")
				sz(this, "activeIndex", 0), sz(this, "coordinateList", []), sz(this, "layout", "horizontal")
			}),
			(n = [
				{
					key: "setDetails",
					value: function (t) {
						var e,
							r = t.coordinateList,
							n = void 0 === r ? null : r,
							i = t.container,
							o = void 0 === i ? null : i,
							a = t.layout,
							u = void 0 === a ? null : a,
							c = t.offset,
							l = void 0 === c ? null : c,
							s = t.mouseHandlerCallback,
							f = void 0 === s ? null : s
						;(this.coordinateList = null != (e = null != n ? n : this.coordinateList) ? e : []),
							(this.container = null != o ? o : this.container),
							(this.layout = null != u ? u : this.layout),
							(this.offset = null != l ? l : this.offset),
							(this.mouseHandlerCallback = null != f ? f : this.mouseHandlerCallback),
							(this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1))
					},
				},
				{
					key: "focus",
					value: function () {
						this.spoofMouse()
					},
				},
				{
					key: "keyboardEvent",
					value: function (t) {
						if (0 !== this.coordinateList.length)
							switch (t.key) {
								case "ArrowRight":
									if ("horizontal" !== this.layout) return
									;(this.activeIndex = Math.min(
										this.activeIndex + 1,
										this.coordinateList.length - 1,
									)),
										this.spoofMouse()
									break
								case "ArrowLeft":
									if ("horizontal" !== this.layout) return
									;(this.activeIndex = Math.max(this.activeIndex - 1, 0)), this.spoofMouse()
							}
					},
				},
				{
					key: "setIndex",
					value: function (t) {
						this.activeIndex = t
					},
				},
				{
					key: "spoofMouse",
					value: function () {
						if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
							var t,
								e,
								r = this.container.getBoundingClientRect(),
								n = r.x,
								i = r.y,
								o = r.height,
								a = this.coordinateList[this.activeIndex].coordinate,
								u = (null == (t = window) ? void 0 : t.scrollX) || 0,
								c = (null == (e = window) ? void 0 : e.scrollY) || 0,
								l = i + this.offset.top + o / 2 + c
							this.mouseHandlerCallback({ pageX: n + a + u, pageY: l })
						}
					},
				},
			]),
			(function (t, e) {
				for (var r = 0; r < e.length; r++) {
					var n = e[r]
					;(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						"value" in n && (n.writable = !0),
						Object.defineProperty(t, sU(n.key), n)
				}
			})(r.prototype, n),
			Object.defineProperty(r, "prototype", { writable: !1 }),
			r)
		function sq(t) {
			this._context = t
		}
		function sW(t) {
			return new sq(t)
		}
		sq.prototype = {
			areaStart: function () {
				this._line = 0
			},
			areaEnd: function () {
				this._line = NaN
			},
			lineStart: function () {
				this._point = 0
			},
			lineEnd: function () {
				;(this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
					(this._line = 1 - this._line)
			},
			point: function (t, e) {
				switch (((t *= 1), (e *= 1), this._point)) {
					case 0:
						;(this._point = 1), this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e)
						break
					case 1:
						this._point = 2
					default:
						this._context.lineTo(t, e)
				}
			},
		}
		var sH = t.i(99518)
		function s$(t) {
			return t[0]
		}
		function sX(t) {
			return t[1]
		}
		function sK(t, e) {
			var r = (0, aN.default)(!0),
				n = null,
				i = sW,
				o = null,
				a = (0, sH.withPath)(u)
			function u(u) {
				var c,
					l,
					s,
					f = (u = aM(u)).length,
					p = !1
				for (null == n && (o = i((s = a()))), c = 0; c <= f; ++c)
					!(c < f && r((l = u[c]), c, u)) === p && ((p = !p) ? o.lineStart() : o.lineEnd()),
						p && o.point(+t(l, c, u), +e(l, c, u))
				if (s) return (o = null), s + "" || null
			}
			return (
				(t = "function" == typeof t ? t : void 0 === t ? s$ : (0, aN.default)(t)),
				(e = "function" == typeof e ? e : void 0 === e ? sX : (0, aN.default)(e)),
				(u.x = function (e) {
					return arguments.length ? ((t = "function" == typeof e ? e : (0, aN.default)(+e)), u) : t
				}),
				(u.y = function (t) {
					return arguments.length ? ((e = "function" == typeof t ? t : (0, aN.default)(+t)), u) : e
				}),
				(u.defined = function (t) {
					return arguments.length ? ((r = "function" == typeof t ? t : (0, aN.default)(!!t)), u) : r
				}),
				(u.curve = function (t) {
					return arguments.length ? ((i = t), null != n && (o = i(n)), u) : i
				}),
				(u.context = function (t) {
					return arguments.length ? (null == t ? (n = o = null) : (o = i((n = t))), u) : n
				}),
				u
			)
		}
		function sQ(t, e, r) {
			var n = null,
				i = (0, aN.default)(!0),
				o = null,
				a = sW,
				u = null,
				c = (0, sH.withPath)(l)
			function l(l) {
				var s,
					f,
					p,
					d,
					h,
					y = (l = aM(l)).length,
					v = !1,
					m = Array(y),
					b = Array(y)
				for (null == o && (u = a((h = c()))), s = 0; s <= y; ++s) {
					if (!(s < y && i((d = l[s]), s, l)) === v)
						if ((v = !v)) (f = s), u.areaStart(), u.lineStart()
						else {
							for (u.lineEnd(), u.lineStart(), p = s - 1; p >= f; --p) u.point(m[p], b[p])
							u.lineEnd(), u.areaEnd()
						}
					v &&
						((m[s] = +t(d, s, l)),
						(b[s] = +e(d, s, l)),
						u.point(n ? +n(d, s, l) : m[s], r ? +r(d, s, l) : b[s]))
				}
				if (h) return (u = null), h + "" || null
			}
			function s() {
				return sK().defined(i).curve(a).context(o)
			}
			return (
				(t = "function" == typeof t ? t : void 0 === t ? s$ : (0, aN.default)(+t)),
				(e = "function" == typeof e ? e : void 0 === e ? (0, aN.default)(0) : (0, aN.default)(+e)),
				(r = "function" == typeof r ? r : void 0 === r ? sX : (0, aN.default)(+r)),
				(l.x = function (e) {
					return arguments.length
						? ((t = "function" == typeof e ? e : (0, aN.default)(+e)), (n = null), l)
						: t
				}),
				(l.x0 = function (e) {
					return arguments.length ? ((t = "function" == typeof e ? e : (0, aN.default)(+e)), l) : t
				}),
				(l.x1 = function (t) {
					return arguments.length
						? ((n = null == t ? null : "function" == typeof t ? t : (0, aN.default)(+t)), l)
						: n
				}),
				(l.y = function (t) {
					return arguments.length
						? ((e = "function" == typeof t ? t : (0, aN.default)(+t)), (r = null), l)
						: e
				}),
				(l.y0 = function (t) {
					return arguments.length ? ((e = "function" == typeof t ? t : (0, aN.default)(+t)), l) : e
				}),
				(l.y1 = function (t) {
					return arguments.length
						? ((r = null == t ? null : "function" == typeof t ? t : (0, aN.default)(+t)), l)
						: r
				}),
				(l.lineX0 = l.lineY0 =
					function () {
						return s().x(t).y(e)
					}),
				(l.lineY1 = function () {
					return s().x(t).y(r)
				}),
				(l.lineX1 = function () {
					return s().x(n).y(e)
				}),
				(l.defined = function (t) {
					return arguments.length ? ((i = "function" == typeof t ? t : (0, aN.default)(!!t)), l) : i
				}),
				(l.curve = function (t) {
					return arguments.length ? ((a = t), null != o && (u = a(o)), l) : a
				}),
				(l.context = function (t) {
					return arguments.length ? (null == t ? (o = u = null) : (u = a((o = t))), l) : o
				}),
				l
			)
		}
		function sG() {}
		function sV(t, e, r) {
			t._context.bezierCurveTo(
				(2 * t._x0 + t._x1) / 3,
				(2 * t._y0 + t._y1) / 3,
				(t._x0 + 2 * t._x1) / 3,
				(t._y0 + 2 * t._y1) / 3,
				(t._x0 + 4 * t._x1 + e) / 6,
				(t._y0 + 4 * t._y1 + r) / 6,
			)
		}
		function sY(t) {
			this._context = t
		}
		function sZ(t) {
			this._context = t
		}
		function sJ(t) {
			this._context = t
		}
		;(sY.prototype = {
			areaStart: function () {
				this._line = 0
			},
			areaEnd: function () {
				this._line = NaN
			},
			lineStart: function () {
				;(this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0)
			},
			lineEnd: function () {
				switch (this._point) {
					case 3:
						sV(this, this._x1, this._y1)
					case 2:
						this._context.lineTo(this._x1, this._y1)
				}
				;(this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
					(this._line = 1 - this._line)
			},
			point: function (t, e) {
				switch (((t *= 1), (e *= 1), this._point)) {
					case 0:
						;(this._point = 1), this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e)
						break
					case 1:
						this._point = 2
						break
					case 2:
						;(this._point = 3),
							this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6)
					default:
						sV(this, t, e)
				}
				;(this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = e)
			},
		}),
			(sZ.prototype = {
				areaStart: sG,
				areaEnd: sG,
				lineStart: function () {
					;(this._x0 =
						this._x1 =
						this._x2 =
						this._x3 =
						this._x4 =
						this._y0 =
						this._y1 =
						this._y2 =
						this._y3 =
						this._y4 =
							NaN),
						(this._point = 0)
				},
				lineEnd: function () {
					switch (this._point) {
						case 1:
							this._context.moveTo(this._x2, this._y2), this._context.closePath()
							break
						case 2:
							this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
								this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
								this._context.closePath()
							break
						case 3:
							this.point(this._x2, this._y2),
								this.point(this._x3, this._y3),
								this.point(this._x4, this._y4)
					}
				},
				point: function (t, e) {
					switch (((t *= 1), (e *= 1), this._point)) {
						case 0:
							;(this._point = 1), (this._x2 = t), (this._y2 = e)
							break
						case 1:
							;(this._point = 2), (this._x3 = t), (this._y3 = e)
							break
						case 2:
							;(this._point = 3),
								(this._x4 = t),
								(this._y4 = e),
								this._context.moveTo(
									(this._x0 + 4 * this._x1 + t) / 6,
									(this._y0 + 4 * this._y1 + e) / 6,
								)
							break
						default:
							sV(this, t, e)
					}
					;(this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = e)
				},
			}),
			(sJ.prototype = {
				areaStart: function () {
					this._line = 0
				},
				areaEnd: function () {
					this._line = NaN
				},
				lineStart: function () {
					;(this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0)
				},
				lineEnd: function () {
					;(this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(),
						(this._line = 1 - this._line)
				},
				point: function (t, e) {
					switch (((t *= 1), (e *= 1), this._point)) {
						case 0:
							this._point = 1
							break
						case 1:
							this._point = 2
							break
						case 2:
							this._point = 3
							var r = (this._x0 + 4 * this._x1 + t) / 6,
								n = (this._y0 + 4 * this._y1 + e) / 6
							this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n)
							break
						case 3:
							this._point = 4
						default:
							sV(this, t, e)
					}
					;(this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = e)
				},
			})
		class s0 {
			constructor(t, e) {
				;(this._context = t), (this._x = e)
			}
			areaStart() {
				this._line = 0
			}
			areaEnd() {
				this._line = NaN
			}
			lineStart() {
				this._point = 0
			}
			lineEnd() {
				;(this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
					(this._line = 1 - this._line)
			}
			point(t, e) {
				switch (((t *= 1), (e *= 1), this._point)) {
					case 0:
						;(this._point = 1), this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e)
						break
					case 1:
						this._point = 2
					default:
						this._x
							? this._context.bezierCurveTo((this._x0 = (this._x0 + t) / 2), this._y0, this._x0, e, t, e)
							: this._context.bezierCurveTo(this._x0, (this._y0 = (this._y0 + e) / 2), t, this._y0, t, e)
				}
				;(this._x0 = t), (this._y0 = e)
			}
		}
		function s1(t) {
			this._context = t
		}
		s1.prototype = {
			areaStart: sG,
			areaEnd: sG,
			lineStart: function () {
				this._point = 0
			},
			lineEnd: function () {
				this._point && this._context.closePath()
			},
			point: function (t, e) {
				;(t *= 1),
					(e *= 1),
					this._point ? this._context.lineTo(t, e) : ((this._point = 1), this._context.moveTo(t, e))
			},
		}
		function s2(t, e, r) {
			var n = t._x1 - t._x0,
				i = e - t._x1,
				o = (t._y1 - t._y0) / (n || (i < 0 && -0)),
				a = (r - t._y1) / (i || (n < 0 && -0))
			return (
				((o < 0 ? -1 : 1) + (a < 0 ? -1 : 1)) *
					Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs((o * i + a * n) / (n + i))) || 0
			)
		}
		function s5(t, e) {
			var r = t._x1 - t._x0
			return r ? ((3 * (t._y1 - t._y0)) / r - e) / 2 : e
		}
		function s3(t, e, r) {
			var n = t._x0,
				i = t._y0,
				o = t._x1,
				a = t._y1,
				u = (o - n) / 3
			t._context.bezierCurveTo(n + u, i + u * e, o - u, a - u * r, o, a)
		}
		function s6(t) {
			this._context = t
		}
		function s8(t) {
			this._context = new s4(t)
		}
		function s4(t) {
			this._context = t
		}
		function s7(t) {
			this._context = t
		}
		function s9(t) {
			var e,
				r,
				n = t.length - 1,
				i = Array(n),
				o = Array(n),
				a = Array(n)
			for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e)
				(i[e] = 1), (o[e] = 4), (a[e] = 4 * t[e] + 2 * t[e + 1])
			for (i[n - 1] = 2, o[n - 1] = 7, a[n - 1] = 8 * t[n - 1] + t[n], e = 1; e < n; ++e)
				(r = i[e] / o[e - 1]), (o[e] -= r), (a[e] -= r * a[e - 1])
			for (i[n - 1] = a[n - 1] / o[n - 1], e = n - 2; e >= 0; --e) i[e] = (a[e] - i[e + 1]) / o[e]
			for (e = 0, o[n - 1] = (t[n] + i[n - 1]) / 2; e < n - 1; ++e) o[e] = 2 * t[e + 1] - i[e + 1]
			return [i, o]
		}
		function ft(t, e) {
			;(this._context = t), (this._t = e)
		}
		function fe(t) {
			return (fe =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function fr() {
			return (fr = Object.assign.bind()).apply(this, arguments)
		}
		function fn(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function fi(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? fn(Object(r), !0).forEach(function (e) {
							var n, i, o
							;(n = t),
								(i = e),
								(o = r[e]),
								(i = (function (t) {
									var e = (function (t, e) {
										if ("object" != fe(t) || !t) return t
										var r = t[Symbol.toPrimitive]
										if (void 0 !== r) {
											var n = r.call(t, e || "default")
											if ("object" != fe(n)) return n
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === e ? String : Number)(t)
									})(t, "string")
									return "symbol" == fe(e) ? e : e + ""
								})(i)) in n
									? Object.defineProperty(n, i, {
											value: o,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (n[i] = o)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: fn(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		;(s6.prototype = {
			areaStart: function () {
				this._line = 0
			},
			areaEnd: function () {
				this._line = NaN
			},
			lineStart: function () {
				;(this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN), (this._point = 0)
			},
			lineEnd: function () {
				switch (this._point) {
					case 2:
						this._context.lineTo(this._x1, this._y1)
						break
					case 3:
						s3(this, this._t0, s5(this, this._t0))
				}
				;(this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
					(this._line = 1 - this._line)
			},
			point: function (t, e) {
				var r = NaN
				if (((e *= 1), (t *= 1) !== this._x1 || e !== this._y1)) {
					switch (this._point) {
						case 0:
							;(this._point = 1), this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e)
							break
						case 1:
							this._point = 2
							break
						case 2:
							;(this._point = 3), s3(this, s5(this, (r = s2(this, t, e))), r)
							break
						default:
							s3(this, this._t0, (r = s2(this, t, e)))
					}
					;(this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = e), (this._t0 = r)
				}
			},
		}),
			((s8.prototype = Object.create(s6.prototype)).point = function (t, e) {
				s6.prototype.point.call(this, e, t)
			}),
			(s4.prototype = {
				moveTo: function (t, e) {
					this._context.moveTo(e, t)
				},
				closePath: function () {
					this._context.closePath()
				},
				lineTo: function (t, e) {
					this._context.lineTo(e, t)
				},
				bezierCurveTo: function (t, e, r, n, i, o) {
					this._context.bezierCurveTo(e, t, n, r, o, i)
				},
			}),
			(s7.prototype = {
				areaStart: function () {
					this._line = 0
				},
				areaEnd: function () {
					this._line = NaN
				},
				lineStart: function () {
					;(this._x = []), (this._y = [])
				},
				lineEnd: function () {
					var t = this._x,
						e = this._y,
						r = t.length
					if (r)
						if ((this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), 2 === r))
							this._context.lineTo(t[1], e[1])
						else
							for (var n = s9(t), i = s9(e), o = 0, a = 1; a < r; ++o, ++a)
								this._context.bezierCurveTo(n[0][o], i[0][o], n[1][o], i[1][o], t[a], e[a])
					;(this._line || (0 !== this._line && 1 === r)) && this._context.closePath(),
						(this._line = 1 - this._line),
						(this._x = this._y = null)
				},
				point: function (t, e) {
					this._x.push(+t), this._y.push(+e)
				},
			}),
			(ft.prototype = {
				areaStart: function () {
					this._line = 0
				},
				areaEnd: function () {
					this._line = NaN
				},
				lineStart: function () {
					;(this._x = this._y = NaN), (this._point = 0)
				},
				lineEnd: function () {
					0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y),
						(this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
						this._line >= 0 && ((this._t = 1 - this._t), (this._line = 1 - this._line))
				},
				point: function (t, e) {
					switch (((t *= 1), (e *= 1), this._point)) {
						case 0:
							;(this._point = 1), this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e)
							break
						case 1:
							this._point = 2
						default:
							if (this._t <= 0) this._context.lineTo(this._x, e), this._context.lineTo(t, e)
							else {
								var r = this._x * (1 - this._t) + t * this._t
								this._context.lineTo(r, this._y), this._context.lineTo(r, e)
							}
					}
					;(this._x = t), (this._y = e)
				},
			})
		var fo = {
				curveBasisClosed: function (t) {
					return new sZ(t)
				},
				curveBasisOpen: function (t) {
					return new sJ(t)
				},
				curveBasis: function (t) {
					return new sY(t)
				},
				curveBumpX: function (t) {
					return new s0(t, !0)
				},
				curveBumpY: function (t) {
					return new s0(t, !1)
				},
				curveLinearClosed: function (t) {
					return new s1(t)
				},
				curveLinear: sW,
				curveMonotoneX: function (t) {
					return new s6(t)
				},
				curveMonotoneY: function (t) {
					return new s8(t)
				},
				curveNatural: function (t) {
					return new s7(t)
				},
				curveStep: function (t) {
					return new ft(t, 0.5)
				},
				curveStepAfter: function (t) {
					return new ft(t, 1)
				},
				curveStepBefore: function (t) {
					return new ft(t, 0)
				},
			},
			fa = function (t) {
				return t.x === +t.x && t.y === +t.y
			},
			fu = function (t) {
				return t.x
			},
			fc = function (t) {
				return t.y
			},
			fl = function (t, e) {
				if ((0, tt.default)(t)) return t
				var r = "curve".concat((0, aF.default)(t))
				return ("curveMonotone" === r || "curveBump" === r) && e
					? fo["".concat(r).concat("vertical" === e ? "Y" : "X")]
					: fo[r] || sW
			},
			fs = function (t) {
				var e,
					r = t.type,
					n = t.points,
					i = void 0 === n ? [] : n,
					o = t.baseLine,
					a = t.layout,
					u = t.connectNulls,
					c = void 0 !== u && u,
					l = fl(void 0 === r ? "linear" : r, a),
					s = c
						? i.filter(function (t) {
								return fa(t)
							})
						: i
				if (Array.isArray(o)) {
					var f = c
							? o.filter(function (t) {
									return fa(t)
								})
							: o,
						p = s.map(function (t, e) {
							return fi(fi({}, t), {}, { base: f[e] })
						})
					return (
						(e =
							"vertical" === a
								? sQ()
										.y(fc)
										.x1(fu)
										.x0(function (t) {
											return t.base.x
										})
								: sQ()
										.x(fu)
										.y1(fc)
										.y0(function (t) {
											return t.base.y
										}))
							.defined(fa)
							.curve(l),
						e(p)
					)
				}
				return (
					(e =
						"vertical" === a && (0, rs.isNumber)(o)
							? sQ().y(fc).x1(fu).x0(o)
							: (0, rs.isNumber)(o)
								? sQ().x(fu).y1(fc).y0(o)
								: sK().x(fu).y(fc))
						.defined(fa)
						.curve(l),
					e(s)
				)
			},
			ff = function (t) {
				var e = t.className,
					r = t.points,
					n = t.path,
					i = t.pathRef
				if ((!r || !r.length) && !n) return null
				var o = r && r.length ? fs(t) : n
				return A.createElement(
					"path",
					fr({}, (0, tc.filterProps)(t, !1), (0, th.adaptEventHandlers)(t), {
						className: (0, to.default)("recharts-curve", e),
						d: o,
						ref: i,
					}),
				)
			}
		function fp(t) {
			return (fp =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		var fd = ["x", "y", "top", "left", "width", "height", "className"]
		function fh() {
			return (fh = Object.assign.bind()).apply(this, arguments)
		}
		function fy(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		var fv = function (t) {
			var e = t.x,
				r = void 0 === e ? 0 : e,
				n = t.y,
				i = void 0 === n ? 0 : n,
				o = t.top,
				a = void 0 === o ? 0 : o,
				u = t.left,
				c = void 0 === u ? 0 : u,
				l = t.width,
				s = void 0 === l ? 0 : l,
				f = t.height,
				p = void 0 === f ? 0 : f,
				d = t.className,
				h = (function (t) {
					for (var e = 1; e < arguments.length; e++) {
						var r = null != arguments[e] ? arguments[e] : {}
						e % 2
							? fy(Object(r), !0).forEach(function (e) {
									var n, i, o
									;(n = t),
										(i = e),
										(o = r[e]),
										(i = (function (t) {
											var e = (function (t, e) {
												if ("object" != fp(t) || !t) return t
												var r = t[Symbol.toPrimitive]
												if (void 0 !== r) {
													var n = r.call(t, e || "default")
													if ("object" != fp(n)) return n
													throw TypeError("@@toPrimitive must return a primitive value.")
												}
												return ("string" === e ? String : Number)(t)
											})(t, "string")
											return "symbol" == fp(e) ? e : e + ""
										})(i)) in n
											? Object.defineProperty(n, i, {
													value: o,
													enumerable: !0,
													configurable: !0,
													writable: !0,
												})
											: (n[i] = o)
								})
							: Object.getOwnPropertyDescriptors
								? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
								: fy(Object(r)).forEach(function (e) {
										Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
									})
					}
					return t
				})(
					{ x: r, y: i, top: a, left: c, width: s, height: p },
					(function (t, e) {
						if (null == t) return {}
						var r,
							n,
							i = (function (t, e) {
								if (null == t) return {}
								var r = {}
								for (var n in t)
									if (Object.prototype.hasOwnProperty.call(t, n)) {
										if (e.indexOf(n) >= 0) continue
										r[n] = t[n]
									}
								return r
							})(t, e)
						if (Object.getOwnPropertySymbols) {
							var o = Object.getOwnPropertySymbols(t)
							for (n = 0; n < o.length; n++)
								(r = o[n]),
									!(e.indexOf(r) >= 0) &&
										Object.prototype.propertyIsEnumerable.call(t, r) &&
										(i[r] = t[r])
						}
						return i
					})(t, fd),
				)
			return (0, rs.isNumber)(r) &&
				(0, rs.isNumber)(i) &&
				(0, rs.isNumber)(s) &&
				(0, rs.isNumber)(p) &&
				(0, rs.isNumber)(a) &&
				(0, rs.isNumber)(c)
				? A.default.createElement(
						"path",
						fh({}, (0, tc.filterProps)(h, !0), {
							className: (0, to.default)("recharts-cross", d),
							d: "M".concat(r, ",").concat(a, "v").concat(p, "M").concat(c, ",").concat(i, "h").concat(s),
						}),
					)
				: null
		}
		function fm(t) {
			var e = t.cx,
				r = t.cy,
				n = t.radius,
				i = t.startAngle,
				o = t.endAngle
			return { points: [cy(e, r, n, i), cy(e, r, n, o)], cx: e, cy: r, radius: n, startAngle: i, endAngle: o }
		}
		function fb(t) {
			return (fb =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function fg(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function fx(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? fg(Object(r), !0).forEach(function (e) {
							var n, i, o
							;(n = t),
								(i = e),
								(o = r[e]),
								(i = (function (t) {
									var e = (function (t, e) {
										if ("object" != fb(t) || !t) return t
										var r = t[Symbol.toPrimitive]
										if (void 0 !== r) {
											var n = r.call(t, e || "default")
											if ("object" != fb(n)) return n
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === e ? String : Number)(t)
									})(t, "string")
									return "symbol" == fb(e) ? e : e + ""
								})(i)) in n
									? Object.defineProperty(n, i, {
											value: o,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (n[i] = o)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: fg(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		function fO(t) {
			var e,
				r,
				n,
				i,
				o = t.element,
				a = t.tooltipEventType,
				u = t.isActive,
				c = t.activeCoordinate,
				l = t.activePayload,
				s = t.offset,
				f = t.activeTooltipIndex,
				p = t.tooltipAxisBandSize,
				d = t.layout,
				h = t.chartName,
				y = null != (r = o.props.cursor) ? r : null == (n = o.type.defaultProps) ? void 0 : n.cursor
			if (!o || !y || !u || !c || ("ScatterChart" !== h && "axis" !== a)) return null
			var v = ff
			if ("ScatterChart" === h) (i = c), (v = fv)
			else if ("BarChart" === h)
				(e = p / 2),
					(i = {
						stroke: "none",
						fill: "#ccc",
						x: "horizontal" === d ? c.x - e : s.left + 0.5,
						y: "horizontal" === d ? s.top + 0.5 : c.y - e,
						width: "horizontal" === d ? p : s.width - 1,
						height: "horizontal" === d ? s.height - 1 : p,
					}),
					(v = rt)
			else if ("radial" === d) {
				var m = fm(c),
					b = m.cx,
					g = m.cy,
					x = m.radius
				;(i = { cx: b, cy: g, startAngle: m.startAngle, endAngle: m.endAngle, innerRadius: x, outerRadius: x }),
					(v = le)
			} else
				(i = {
					points: (function (t, e, r) {
						var n, i, o, a
						if ("horizontal" === t) (o = n = e.x), (i = r.top), (a = r.top + r.height)
						else if ("vertical" === t) (a = i = e.y), (n = r.left), (o = r.left + r.width)
						else if (null != e.cx && null != e.cy)
							if ("centric" !== t) return fm(e)
							else {
								var u = e.cx,
									c = e.cy,
									l = e.innerRadius,
									s = e.outerRadius,
									f = e.angle,
									p = cy(u, c, l, f),
									d = cy(u, c, s, f)
								;(n = p.x), (i = p.y), (o = d.x), (a = d.y)
							}
						return [
							{ x: n, y: i },
							{ x: o, y: a },
						]
					})(d, c, s),
				}),
					(v = ff)
			var O = fx(
				fx(fx(fx({ stroke: "#ccc", pointerEvents: "none" }, s), i), (0, tc.filterProps)(y, !1)),
				{},
				{ payload: l, payloadIndex: f, className: (0, to.default)("recharts-tooltip-cursor", y.className) },
			)
			return (0, A.isValidElement)(y) ? (0, A.cloneElement)(y, O) : (0, A.createElement)(v, O)
		}
		var fw = ["item"],
			fS = ["children", "className", "width", "height", "style", "compact", "title", "desc"]
		function fj(t) {
			return (fj =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function fE() {
			return (fE = Object.assign.bind()).apply(this, arguments)
		}
		function fP(t, e) {
			return (
				(function (t) {
					if (Array.isArray(t)) return t
				})(t) ||
				(function (t, e) {
					var r = null == t ? null : ("u" > typeof Symbol && t[Symbol.iterator]) || t["@@iterator"]
					if (null != r) {
						var n,
							i,
							o,
							a,
							u = [],
							c = !0,
							l = !1
						try {
							if (((o = (r = r.call(t)).next), 0 === e)) {
								if (Object(r) !== r) return
								c = !1
							} else for (; !(c = (n = o.call(r)).done) && (u.push(n.value), u.length !== e); c = !0);
						} catch (t) {
							;(l = !0), (i = t)
						} finally {
							try {
								if (!c && null != r.return && ((a = r.return()), Object(a) !== a)) return
							} finally {
								if (l) throw i
							}
						}
						return u
					}
				})(t, e) ||
				f_(t, e) ||
				(function () {
					throw TypeError(
						"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function fA(t, e) {
			if (null == t) return {}
			var r,
				n,
				i = (function (t, e) {
					if (null == t) return {}
					var r = {}
					for (var n in t)
						if (Object.prototype.hasOwnProperty.call(t, n)) {
							if (e.indexOf(n) >= 0) continue
							r[n] = t[n]
						}
					return r
				})(t, e)
			if (Object.getOwnPropertySymbols) {
				var o = Object.getOwnPropertySymbols(t)
				for (n = 0; n < o.length; n++)
					(r = o[n]),
						!(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
			}
			return i
		}
		function fT() {
			try {
				var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (t) {}
			return (fT = function () {
				return !!t
			})()
		}
		function fk(t) {
			return (fk = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					})(t)
		}
		function fM(t, e) {
			return (fM = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (t, e) {
						return (t.__proto__ = e), t
					})(t, e)
		}
		function fN(t) {
			return (
				(function (t) {
					if (Array.isArray(t)) return fI(t)
				})(t) ||
				(function (t) {
					if (("u" > typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"])
						return Array.from(t)
				})(t) ||
				f_(t) ||
				(function () {
					throw TypeError(
						"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function f_(t, e) {
			if (t) {
				if ("string" == typeof t) return fI(t, e)
				var r = Object.prototype.toString.call(t).slice(8, -1)
				if (("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r))
					return Array.from(t)
				if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fI(t, e)
			}
		}
		function fI(t, e) {
			;(null == e || e > t.length) && (e = t.length)
			for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r]
			return n
		}
		function fC(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function fD(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? fC(Object(r), !0).forEach(function (e) {
							fR(t, e, r[e])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: fC(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		function fR(t, e, r) {
			return (
				(e = fB(e)) in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		function fB(t) {
			var e = (function (t, e) {
				if ("object" != fj(t) || !t) return t
				var r = t[Symbol.toPrimitive]
				if (void 0 !== r) {
					var n = r.call(t, e || "default")
					if ("object" != fj(n)) return n
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === e ? String : Number)(t)
			})(t, "string")
			return "symbol" == fj(e) ? e : e + ""
		}
		var fL = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
			fz = { width: "100%", height: "100%" },
			fU = { x: 0, y: 0 }
		function fF(t) {
			return t
		}
		var fq = function (t, e, r, n) {
				var i = e.find(function (t) {
					return t && t.index === r
				})
				if (i) {
					if ("horizontal" === t) return { x: i.coordinate, y: n.y }
					if ("vertical" === t) return { x: n.x, y: i.coordinate }
					if ("centric" === t) {
						var o = i.coordinate,
							a = n.radius
						return fD(fD(fD({}, n), cy(n.cx, n.cy, a, o)), {}, { angle: o, radius: a })
					}
					var u = i.coordinate,
						c = n.angle
					return fD(fD(fD({}, n), cy(n.cx, n.cy, u, c)), {}, { angle: c, radius: u })
				}
				return fU
			},
			fW = function (t, e) {
				var r = e.graphicalItems,
					n = e.dataStartIndex,
					i = e.dataEndIndex,
					o = (null != r ? r : []).reduce(function (t, e) {
						var r = e.props.data
						return r && r.length ? [].concat(fN(t), fN(r)) : t
					}, [])
				return o.length > 0
					? o
					: t && t.length && (0, rs.isNumber)(n) && (0, rs.isNumber)(i)
						? t.slice(n, i + 1)
						: []
			}
		function fH(t) {
			return "number" === t ? [0, "auto"] : void 0
		}
		var f$ = function (t, e, r, n) {
				var i = t.graphicalItems,
					o = t.tooltipAxis,
					a = fW(e, t)
				return r < 0 || !i || !i.length || r >= a.length
					? null
					: i.reduce(function (i, u) {
							var c,
								l,
								s = null != (c = u.props.data) ? c : e
							if (
								(s &&
									t.dataStartIndex + t.dataEndIndex !== 0 &&
									t.dataEndIndex - t.dataStartIndex >= r &&
									(s = s.slice(t.dataStartIndex, t.dataEndIndex + 1)),
								o.dataKey && !o.allowDuplicatedCategory)
							) {
								var f = void 0 === s ? a : s
								l = (0, rs.findEntryInArray)(f, o.dataKey, n)
							} else l = (s && s[r]) || a[r]
							return l ? [].concat(fN(i), [u0(u, l)]) : i
						}, [])
			},
			fX = function (t, e, r, n) {
				var i = n || { x: t.chartX, y: t.chartY },
					o = "horizontal" === r ? i.x : "vertical" === r ? i.y : "centric" === r ? i.angle : i.radius,
					a = t.orderedTooltipTicks,
					u = t.tooltipAxis,
					c = t.tooltipTicks,
					l = uj(o, a, c, u)
				if (l >= 0 && c) {
					var s = c[l] && c[l].value,
						f = f$(t, e, l, s),
						p = fq(r, a, l, i)
					return { activeTooltipIndex: l, activeLabel: s, activePayload: f, activeCoordinate: p }
				}
				return null
			},
			fK = function (t, e) {
				var r = e.axes,
					n = e.graphicalItems,
					i = e.axisType,
					o = e.axisIdKey,
					a = e.stackGroups,
					u = e.dataStartIndex,
					c = e.dataEndIndex,
					l = t.layout,
					s = t.children,
					f = t.stackOffset,
					p = u_(l, i)
				return r.reduce(function (e, r) {
					var d = void 0 !== r.type.defaultProps ? fD(fD({}, r.type.defaultProps), r.props) : r.props,
						h = d.type,
						y = d.dataKey,
						v = d.allowDataOverflow,
						m = d.allowDuplicatedCategory,
						b = d.scale,
						g = d.ticks,
						x = d.includeHidden,
						O = d[o]
					if (e[O]) return e
					var w = fW(t.data, {
							graphicalItems: n.filter(function (t) {
								var e
								return (
									(o in t.props ? t.props[o] : null == (e = t.type.defaultProps) ? void 0 : e[o]) ===
									O
								)
							}),
							dataStartIndex: u,
							dataEndIndex: c,
						}),
						S = w.length
					;(function (t, e, r) {
						if ("number" === r && !0 === e && Array.isArray(t)) {
							var n = null == t ? void 0 : t[0],
								i = null == t ? void 0 : t[1]
							if (n && i && (0, rs.isNumber)(n) && (0, rs.isNumber)(i)) return !0
						}
						return !1
					})(d.domain, v, h) &&
						((P = uY(d.domain, null, v)),
						p && ("number" === h || "auto" !== b) && (T = uS(w, y, "category")))
					var j = fH(h)
					if (!P || 0 === P.length) {
						var E,
							P,
							A,
							T,
							k,
							M = null != (k = d.domain) ? k : j
						if (y) {
							if (((P = uS(w, y, h)), "category" === h && p)) {
								var N = (0, rs.hasDuplicate)(P)
								m && N
									? ((A = P), (P = (0, te.default)(0, S)))
									: m ||
										(P = uJ(M, P, r).reduce(function (t, e) {
											return t.indexOf(e) >= 0 ? t : [].concat(fN(t), [e])
										}, []))
							} else if ("category" === h)
								P = m
									? P.filter(function (t) {
											return "" !== t && !(0, J.default)(t)
										})
									: uJ(M, P, r).reduce(function (t, e) {
											return t.indexOf(e) >= 0 || "" === e || (0, J.default)(e)
												? t
												: [].concat(fN(t), [e])
										}, [])
							else if ("number" === h) {
								var _ = uM(
									w,
									n.filter(function (t) {
										var e,
											r,
											n =
												o in t.props
													? t.props[o]
													: null == (e = t.type.defaultProps)
														? void 0
														: e[o],
											i =
												"hide" in t.props
													? t.props.hide
													: null == (r = t.type.defaultProps)
														? void 0
														: r.hide
										return n === O && (x || !i)
									}),
									y,
									i,
									l,
								)
								_ && (P = _)
							}
							p && ("number" === h || "auto" !== b) && (T = uS(w, y, "category"))
						} else
							P = p
								? (0, te.default)(0, S)
								: a && a[O] && a[O].hasStack && "number" === h
									? "expand" === f
										? [0, 1]
										: uQ(a[O].stackGroups, u, c)
									: uN(
											w,
											n.filter(function (t) {
												var e = o in t.props ? t.props[o] : t.type.defaultProps[o],
													r = "hide" in t.props ? t.props.hide : t.type.defaultProps.hide
												return e === O && (x || !r)
											}),
											h,
											l,
											!0,
										)
						"number" === h
							? ((P = sC(s, P, O, i, g)), M && (P = uY(M, P, v)))
							: "category" === h &&
								M &&
								P.every(function (t) {
									return M.indexOf(t) >= 0
								}) &&
								(P = M)
					}
					return fD(
						fD({}, e),
						{},
						fR(
							{},
							O,
							fD(
								fD({}, d),
								{},
								{
									axisType: i,
									domain: P,
									categoricalDomain: T,
									duplicateDomain: A,
									originalDomain: null != (E = d.domain) ? E : j,
									isCategorical: p,
									layout: l,
								},
							),
						),
					)
				}, {})
			},
			fQ = function (t, e) {
				var r = e.graphicalItems,
					n = e.Axis,
					i = e.axisType,
					o = e.axisIdKey,
					a = e.stackGroups,
					u = e.dataStartIndex,
					c = e.dataEndIndex,
					l = t.layout,
					s = t.children,
					f = fW(t.data, { graphicalItems: r, dataStartIndex: u, dataEndIndex: c }),
					p = f.length,
					d = u_(l, i),
					h = -1
				return r.reduce(function (t, e) {
					var y,
						v = (void 0 !== e.type.defaultProps ? fD(fD({}, e.type.defaultProps), e.props) : e.props)[o],
						m = fH("number")
					return t[v]
						? t
						: (h++,
							(y = d
								? (0, te.default)(0, p)
								: a && a[v] && a[v].hasStack
									? sC(s, (y = uQ(a[v].stackGroups, u, c)), v, i)
									: sC(
											s,
											(y = uY(
												m,
												uN(
													f,
													r.filter(function (t) {
														var e,
															r,
															n =
																o in t.props
																	? t.props[o]
																	: null == (e = t.type.defaultProps)
																		? void 0
																		: e[o],
															i =
																"hide" in t.props
																	? t.props.hide
																	: null == (r = t.type.defaultProps)
																		? void 0
																		: r.hide
														return n === v && !i
													}),
													"number",
													l,
												),
												n.defaultProps.allowDataOverflow,
											)),
											v,
											i,
										)),
							fD(
								fD({}, t),
								{},
								fR(
									{},
									v,
									fD(
										fD({ axisType: i }, n.defaultProps),
										{},
										{
											hide: !0,
											orientation: (0, tr.default)(fL, "".concat(i, ".").concat(h % 2), null),
											domain: y,
											originalDomain: m,
											isCategorical: d,
											layout: l,
										},
									),
								),
							))
				}, {})
			},
			fG = function (t, e) {
				var r = e.axisType,
					n = void 0 === r ? "xAxis" : r,
					i = e.AxisComp,
					o = e.graphicalItems,
					a = e.stackGroups,
					u = e.dataStartIndex,
					c = e.dataEndIndex,
					l = t.children,
					s = "".concat(n, "Id"),
					f = (0, tc.findAllByType)(l, i),
					p = {}
				return (
					f && f.length
						? (p = fK(t, {
								axes: f,
								graphicalItems: o,
								axisType: n,
								axisIdKey: s,
								stackGroups: a,
								dataStartIndex: u,
								dataEndIndex: c,
							}))
						: o &&
							o.length &&
							(p = fQ(t, {
								Axis: i,
								graphicalItems: o,
								axisType: n,
								axisIdKey: s,
								stackGroups: a,
								dataStartIndex: u,
								dataEndIndex: c,
							})),
					p
				)
			},
			fV = function (t) {
				var e = (0, rs.getAnyElementOfObject)(t),
					r = uI(e, !1, !0)
				return {
					tooltipTicks: r,
					orderedTooltipTicks: (0, tn.default)(r, function (t) {
						return t.coordinate
					}),
					tooltipAxis: e,
					tooltipAxisBandSize: uZ(e, r),
				}
			},
			fY = function (t) {
				var e = t.children,
					r = t.defaultShowTooltip,
					n = (0, tc.findChildByType)(e, cl),
					i = 0,
					o = 0
				return (
					t.data && 0 !== t.data.length && (o = t.data.length - 1),
					n &&
						n.props &&
						(n.props.startIndex >= 0 && (i = n.props.startIndex),
						n.props.endIndex >= 0 && (o = n.props.endIndex)),
					{
						chartX: 0,
						chartY: 0,
						dataStartIndex: i,
						dataEndIndex: o,
						activeTooltipIndex: -1,
						isTooltipActive: !!r,
					}
				)
			},
			fZ = function (t) {
				return "horizontal" === t
					? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
					: "vertical" === t
						? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
						: "centric" === t
							? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
							: { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" }
			},
			fJ = function (t, e) {
				var r = t.props,
					n = t.graphicalItems,
					i = t.xAxisMap,
					o = void 0 === i ? {} : i,
					a = t.yAxisMap,
					u = void 0 === a ? {} : a,
					c = r.width,
					l = r.height,
					s = r.children,
					f = r.margin || {},
					p = (0, tc.findChildByType)(s, cl),
					d = (0, tc.findChildByType)(s, td.Legend),
					h = Object.keys(u).reduce(
						function (t, e) {
							var r = u[e],
								n = r.orientation
							return r.mirror || r.hide ? t : fD(fD({}, t), {}, fR({}, n, t[n] + r.width))
						},
						{ left: f.left || 0, right: f.right || 0 },
					),
					y = Object.keys(o).reduce(
						function (t, e) {
							var r = o[e],
								n = r.orientation
							return r.mirror || r.hide
								? t
								: fD(fD({}, t), {}, fR({}, n, (0, tr.default)(t, "".concat(n)) + r.height))
						},
						{ top: f.top || 0, bottom: f.bottom || 0 },
					),
					v = fD(fD({}, y), h),
					m = v.bottom
				p && (v.bottom += p.props.height || cl.defaultProps.height), d && e && (v = uT(v, n, r, e))
				var b = c - v.left - v.right,
					g = l - v.top - v.bottom
				return fD(fD({ brushBottom: m }, v), {}, { width: Math.max(b, 0), height: Math.max(g, 0) })
			}
		function f0(t) {
			return (f0 =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function f1() {
			try {
				var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (t) {}
			return (f1 = function () {
				return !!t
			})()
		}
		function f2(t) {
			return (f2 = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					})(t)
		}
		function f5(t, e) {
			return (f5 = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (t, e) {
						return (t.__proto__ = e), t
					})(t, e)
		}
		function f3(t, e, r) {
			return (
				(e = f6(e)) in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		function f6(t) {
			var e = (function (t, e) {
				if ("object" != f0(t) || !t) return t
				var r = t[Symbol.toPrimitive]
				if (void 0 !== r) {
					var n = r.call(t, e || "default")
					if ("object" != f0(n)) return n
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === e ? String : Number)(t)
			})(t, "string")
			return "symbol" == f0(e) ? e : e + ""
		}
		var f8 = (function (t) {
			var e
			function r() {
				var t, e
				if (!(this instanceof r)) throw TypeError("Cannot call a class as a function")
				return (
					(t = r),
					(e = arguments),
					(t = f2(t)),
					(function (t, e) {
						if (e && ("object" === f0(e) || "function" == typeof e)) return e
						if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined")
						var r = t
						if (void 0 === r)
							throw ReferenceError("this hasn't been initialised - super() hasn't been called")
						return r
					})(this, f1() ? Reflect.construct(t, e || [], f2(this).constructor) : t.apply(this, e))
				)
			}
			if ("function" != typeof t && null !== t)
				throw TypeError("Super expression must either be null or a function")
			return (
				(r.prototype = Object.create(t && t.prototype, {
					constructor: { value: r, writable: !0, configurable: !0 },
				})),
				Object.defineProperty(r, "prototype", { writable: !1 }),
				t && f5(r, t),
				(e = [
					{
						key: "render",
						value: function () {
							return null
						},
					},
				]),
				(function (t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r]
						;(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(t, f6(n.key), n)
					}
				})(r.prototype, e),
				Object.defineProperty(r, "prototype", { writable: !1 }),
				r
			)
		})(A.Component)
		f3(f8, "displayName", "ZAxis"),
			f3(f8, "defaultProps", { zAxisId: 0, range: [64, 64], scale: "auto", type: "number" })
		var f4 = ["option", "isActive"]
		function f7() {
			return (f7 = Object.assign.bind()).apply(this, arguments)
		}
		function f9(t) {
			var e = t.option,
				r = t.isActive,
				n = (function (t, e) {
					if (null == t) return {}
					var r,
						n,
						i = (function (t, e) {
							if (null == t) return {}
							var r = {}
							for (var n in t)
								if (Object.prototype.hasOwnProperty.call(t, n)) {
									if (e.indexOf(n) >= 0) continue
									r[n] = t[n]
								}
							return r
						})(t, e)
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(t)
						for (n = 0; n < o.length; n++)
							(r = o[n]),
								!(e.indexOf(r) >= 0) &&
									Object.prototype.propertyIsEnumerable.call(t, r) &&
									(i[r] = t[r])
					}
					return i
				})(t, f4)
			return "string" == typeof e
				? A.createElement(
						lc,
						f7(
							{
								option: A.createElement(lr.Symbols, f7({ type: e }, n)),
								isActive: r,
								shapeType: "symbols",
							},
							n,
						),
					)
				: A.createElement(lc, f7({ option: e, isActive: r, shapeType: "symbols" }, n))
		}
		function pt(t) {
			return (pt =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function pe() {
			return (pe = Object.assign.bind()).apply(this, arguments)
		}
		function pr(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function pn(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? pr(Object(r), !0).forEach(function (e) {
							pc(t, e, r[e])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: pr(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		function pi(t, e) {
			for (var r = 0; r < e.length; r++) {
				var n = e[r]
				;(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, pl(n.key), n)
			}
		}
		function po() {
			try {
				var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (t) {}
			return (po = function () {
				return !!t
			})()
		}
		function pa(t) {
			return (pa = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					})(t)
		}
		function pu(t, e) {
			return (pu = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (t, e) {
						return (t.__proto__ = e), t
					})(t, e)
		}
		function pc(t, e, r) {
			return (
				(e = pl(e)) in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		function pl(t) {
			var e = (function (t, e) {
				if ("object" != pt(t) || !t) return t
				var r = t[Symbol.toPrimitive]
				if (void 0 !== r) {
					var n = r.call(t, e || "default")
					if ("object" != pt(n)) return n
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === e ? String : Number)(t)
			})(t, "string")
			return "symbol" == pt(e) ? e : e + ""
		}
		var ps = (function (t) {
			var e, r
			function n() {
				var t, e, r
				if (!(this instanceof n)) throw TypeError("Cannot call a class as a function")
				for (var i = arguments.length, o = Array(i), a = 0; a < i; a++) o[a] = arguments[a]
				return (
					(e = n),
					(r = [].concat(o)),
					(e = pa(e)),
					pc(
						(t = (function (t, e) {
							if (e && ("object" === pt(e) || "function" == typeof e)) return e
							if (void 0 !== e)
								throw TypeError("Derived constructors may only return object or undefined")
							var r = t
							if (void 0 === r)
								throw ReferenceError("this hasn't been initialised - super() hasn't been called")
							return r
						})(this, po() ? Reflect.construct(e, r || [], pa(this).constructor) : e.apply(this, r))),
						"state",
						{ isAnimationFinished: !1 },
					),
					pc(t, "handleAnimationEnd", function () {
						t.setState({ isAnimationFinished: !0 })
					}),
					pc(t, "handleAnimationStart", function () {
						t.setState({ isAnimationFinished: !1 })
					}),
					pc(t, "id", (0, rs.uniqueId)("recharts-scatter-")),
					t
				)
			}
			if ("function" != typeof t && null !== t)
				throw TypeError("Super expression must either be null or a function")
			return (
				(n.prototype = Object.create(t && t.prototype, {
					constructor: { value: n, writable: !0, configurable: !0 },
				})),
				Object.defineProperty(n, "prototype", { writable: !1 }),
				t && pu(n, t),
				(e = [
					{
						key: "renderSymbolsStatically",
						value: function (t) {
							var e = this,
								r = this.props,
								n = r.shape,
								i = r.activeShape,
								o = r.activeIndex,
								a = (0, tc.filterProps)(this.props, !1)
							return t.map(function (t, r) {
								var u = o === r,
									c = pn(pn({}, a), t)
								return A.default.createElement(
									tf,
									pe(
										{
											className: "recharts-scatter-symbol",
											key: "symbol-"
												.concat(null == t ? void 0 : t.cx, "-")
												.concat(null == t ? void 0 : t.cy, "-")
												.concat(null == t ? void 0 : t.size, "-")
												.concat(r),
										},
										(0, th.adaptEventsOfChild)(e.props, t, r),
										{ role: "img" },
									),
									A.default.createElement(
										f9,
										pe({ option: u ? i : n, isActive: u, key: "symbol-".concat(r) }, c),
									),
								)
							})
						},
					},
					{
						key: "renderSymbolsWithAnimation",
						value: function () {
							var t = this,
								e = this.props,
								r = e.points,
								n = e.isAnimationActive,
								i = e.animationBegin,
								o = e.animationDuration,
								a = e.animationEasing,
								u = e.animationId,
								c = this.state.prevPoints
							return A.default.createElement(
								eE,
								{
									begin: i,
									duration: o,
									isActive: n,
									easing: a,
									from: { t: 0 },
									to: { t: 1 },
									key: "pie-".concat(u),
									onAnimationEnd: this.handleAnimationEnd,
									onAnimationStart: this.handleAnimationStart,
								},
								function (e) {
									var n = e.t,
										i = r.map(function (t, e) {
											var r = c && c[e]
											if (r) {
												var i = (0, rs.interpolateNumber)(r.cx, t.cx),
													o = (0, rs.interpolateNumber)(r.cy, t.cy),
													a = (0, rs.interpolateNumber)(r.size, t.size)
												return pn(pn({}, t), {}, { cx: i(n), cy: o(n), size: a(n) })
											}
											var u = (0, rs.interpolateNumber)(0, t.size)
											return pn(pn({}, t), {}, { size: u(n) })
										})
									return A.default.createElement(tf, null, t.renderSymbolsStatically(i))
								},
							)
						},
					},
					{
						key: "renderSymbols",
						value: function () {
							var t = this.props,
								e = t.points,
								r = t.isAnimationActive,
								n = this.state.prevPoints
							return r && e && e.length && (!n || !(0, aq.default)(n, e))
								? this.renderSymbolsWithAnimation()
								: this.renderSymbolsStatically(e)
						},
					},
					{
						key: "renderErrorBar",
						value: function () {
							if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null
							var t = this.props,
								e = t.points,
								r = t.xAxis,
								n = t.yAxis,
								i = t.children,
								o = (0, tc.findAllByType)(i, uf)
							return o
								? o.map(function (t, i) {
										var o = t.props,
											a = o.direction,
											u = o.dataKey
										return A.default.cloneElement(t, {
											key: "".concat(a, "-").concat(u, "-").concat(e[i]),
											data: e,
											xAxis: r,
											yAxis: n,
											layout: "x" === a ? "vertical" : "horizontal",
											dataPointFormatter: function (t, e) {
												return {
													x: t.cx,
													y: t.cy,
													value: "x" === a ? +t.node.x : +t.node.y,
													errorVal: uw(t, e),
												}
											},
										})
									})
								: null
						},
					},
					{
						key: "renderLine",
						value: function () {
							var t,
								e,
								r = this.props,
								n = r.points,
								i = r.line,
								o = r.lineType,
								a = r.lineJointType,
								u = (0, tc.filterProps)(this.props, !1),
								c = (0, tc.filterProps)(i, !1)
							if ("joint" === o)
								t = n.map(function (t) {
									return { x: t.cx, y: t.cy }
								})
							else if ("fitting" === o) {
								var l = (0, rs.getLinearRegression)(n),
									s = l.xmin,
									f = l.xmax,
									p = l.a,
									d = l.b,
									h = function (t) {
										return p * t + d
									}
								t = [
									{ x: s, y: h(s) },
									{ x: f, y: h(f) },
								]
							}
							var y = pn(pn(pn({}, u), {}, { fill: "none", stroke: u && u.fill }, c), {}, { points: t })
							return (
								(e = A.default.isValidElement(i)
									? A.default.cloneElement(i, y)
									: (0, tt.default)(i)
										? i(y)
										: A.default.createElement(ff, pe({}, y, { type: a }))),
								A.default.createElement(
									tf,
									{ className: "recharts-scatter-line", key: "recharts-scatter-line" },
									e,
								)
							)
						},
					},
					{
						key: "render",
						value: function () {
							var t = this.props,
								e = t.hide,
								r = t.points,
								n = t.line,
								i = t.className,
								o = t.xAxis,
								a = t.yAxis,
								u = t.left,
								c = t.top,
								l = t.width,
								s = t.height,
								f = t.id,
								p = t.isAnimationActive
							if (e || !r || !r.length) return null
							var d = this.state.isAnimationFinished,
								h = (0, to.default)("recharts-scatter", i),
								y = o && o.allowDataOverflow,
								v = a && a.allowDataOverflow,
								m = (0, J.default)(f) ? this.id : f
							return A.default.createElement(
								tf,
								{ className: h, clipPath: y || v ? "url(#clipPath-".concat(m, ")") : null },
								y || v
									? A.default.createElement(
											"defs",
											null,
											A.default.createElement(
												"clipPath",
												{ id: "clipPath-".concat(m) },
												A.default.createElement("rect", {
													x: y ? u : u - l / 2,
													y: v ? c : c - s / 2,
													width: y ? l : 2 * l,
													height: v ? s : 2 * s,
												}),
											),
										)
									: null,
								n && this.renderLine(),
								this.renderErrorBar(),
								A.default.createElement(tf, { key: "recharts-scatter-symbols" }, this.renderSymbols()),
								(!p || d) && cX.renderCallByParent(this.props, r),
							)
						},
					},
				]),
				(r = [
					{
						key: "getDerivedStateFromProps",
						value: function (t, e) {
							return t.animationId !== e.prevAnimationId
								? { prevAnimationId: t.animationId, curPoints: t.points, prevPoints: e.curPoints }
								: t.points !== e.curPoints
									? { curPoints: t.points }
									: null
						},
					},
				]),
				e && pi(n.prototype, e),
				r && pi(n, r),
				Object.defineProperty(n, "prototype", { writable: !1 }),
				n
			)
		})(A.PureComponent)
		function pf(t, e, r) {
			if (e < 1) return []
			if (1 === e && void 0 === r) return t
			for (var n = [], i = 0; i < t.length; i += e)
				if (void 0 !== r && !0 !== r(t[i])) return
				else n.push(t[i])
			return n
		}
		function pp(t, e, r, n, i) {
			if (t * e < t * n || t * e > t * i) return !1
			var o = r()
			return t * (e - (t * o) / 2 - n) >= 0 && t * (e + (t * o) / 2 - i) <= 0
		}
		function pd(t) {
			return (pd =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function ph(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function py(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? ph(Object(r), !0).forEach(function (e) {
							var n, i, o
							;(n = t),
								(i = e),
								(o = r[e]),
								(i = (function (t) {
									var e = (function (t, e) {
										if ("object" != pd(t) || !t) return t
										var r = t[Symbol.toPrimitive]
										if (void 0 !== r) {
											var n = r.call(t, e || "default")
											if ("object" != pd(n)) return n
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === e ? String : Number)(t)
									})(t, "string")
									return "symbol" == pd(e) ? e : e + ""
								})(i)) in n
									? Object.defineProperty(n, i, {
											value: o,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (n[i] = o)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: ph(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		pc(ps, "displayName", "Scatter"),
			pc(ps, "defaultProps", {
				xAxisId: 0,
				yAxisId: 0,
				zAxisId: 0,
				legendType: "circle",
				lineType: "joint",
				lineJointType: "linear",
				data: [],
				shape: "circle",
				hide: !1,
				isAnimationActive: !rf.Global.isSsr,
				animationBegin: 0,
				animationDuration: 400,
				animationEasing: "linear",
			}),
			pc(ps, "getComposedData", function (t) {
				var e = t.xAxis,
					r = t.yAxis,
					n = t.zAxis,
					i = t.item,
					o = t.displayedData,
					a = t.xAxisTicks,
					u = t.yAxisTicks,
					c = t.offset,
					l = i.props.tooltipType,
					s = (0, tc.findAllByType)(i.props.children, cD),
					f = (0, J.default)(e.dataKey) ? i.props.dataKey : e.dataKey,
					p = (0, J.default)(r.dataKey) ? i.props.dataKey : r.dataKey,
					d = n && n.dataKey,
					h = n ? n.range : f8.defaultProps.range,
					y = h && h[0],
					v = e.scale.bandwidth ? e.scale.bandwidth() : 0,
					m = r.scale.bandwidth ? r.scale.bandwidth() : 0,
					b = o.map(function (t, o) {
						var c = uw(t, f),
							h = uw(t, p),
							b = (!(0, J.default)(d) && uw(t, d)) || "-",
							g = [
								{
									name: (0, J.default)(e.dataKey) ? i.props.name : e.name || e.dataKey,
									unit: e.unit || "",
									value: c,
									payload: t,
									dataKey: f,
									type: l,
								},
								{
									name: (0, J.default)(r.dataKey) ? i.props.name : r.name || r.dataKey,
									unit: r.unit || "",
									value: h,
									payload: t,
									dataKey: p,
									type: l,
								},
							]
						"-" !== b &&
							g.push({
								name: n.name || n.dataKey,
								unit: n.unit || "",
								value: b,
								payload: t,
								dataKey: d,
								type: l,
							})
						var x = uH({ axis: e, ticks: a, bandSize: v, entry: t, index: o, dataKey: f }),
							O = uH({ axis: r, ticks: u, bandSize: m, entry: t, index: o, dataKey: p }),
							w = "-" !== b ? n.scale(b) : y,
							S = Math.sqrt(Math.max(w, 0) / Math.PI)
						return pn(
							pn({}, t),
							{},
							{
								cx: x,
								cy: O,
								x: x - S,
								y: O - S,
								xAxis: e,
								yAxis: r,
								zAxis: n,
								width: 2 * S,
								height: 2 * S,
								size: w,
								node: { x: c, y: h, z: b },
								tooltipPayload: g,
								tooltipPosition: { x: x, y: O },
								payload: t,
							},
							s && s[o] && s[o].props,
						)
					})
				return pn({ points: b }, c)
			})
		var pv = ["viewBox"],
			pm = ["viewBox"],
			pb = ["ticks"]
		function pg(t) {
			return (pg =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function px() {
			return (px = Object.assign.bind()).apply(this, arguments)
		}
		function pO(t, e) {
			var r = Object.keys(t)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t)
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})),
					r.push.apply(r, n)
			}
			return r
		}
		function pw(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {}
				e % 2
					? pO(Object(r), !0).forEach(function (e) {
							pT(t, e, r[e])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						: pO(Object(r)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
			}
			return t
		}
		function pS(t, e) {
			if (null == t) return {}
			var r,
				n,
				i = (function (t, e) {
					if (null == t) return {}
					var r = {}
					for (var n in t)
						if (Object.prototype.hasOwnProperty.call(t, n)) {
							if (e.indexOf(n) >= 0) continue
							r[n] = t[n]
						}
					return r
				})(t, e)
			if (Object.getOwnPropertySymbols) {
				var o = Object.getOwnPropertySymbols(t)
				for (n = 0; n < o.length; n++)
					(r = o[n]),
						!(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
			}
			return i
		}
		function pj(t, e) {
			for (var r = 0; r < e.length; r++) {
				var n = e[r]
				;(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, pk(n.key), n)
			}
		}
		function pE() {
			try {
				var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (t) {}
			return (pE = function () {
				return !!t
			})()
		}
		function pP(t) {
			return (pP = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					})(t)
		}
		function pA(t, e) {
			return (pA = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (t, e) {
						return (t.__proto__ = e), t
					})(t, e)
		}
		function pT(t, e, r) {
			return (
				(e = pk(e)) in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		function pk(t) {
			var e = (function (t, e) {
				if ("object" != pg(t) || !t) return t
				var r = t[Symbol.toPrimitive]
				if (void 0 !== r) {
					var n = r.call(t, e || "default")
					if ("object" != pg(n)) return n
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === e ? String : Number)(t)
			})(t, "string")
			return "symbol" == pg(e) ? e : e + ""
		}
		var pM = (function (t) {
			var e, r
			function n(t) {
				var e, r, i
				if (!(this instanceof n)) throw TypeError("Cannot call a class as a function")
				return (
					(r = n),
					(i = [t]),
					(r = pP(r)),
					((e = (function (t, e) {
						if (e && ("object" === pg(e) || "function" == typeof e)) return e
						if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined")
						var r = t
						if (void 0 === r)
							throw ReferenceError("this hasn't been initialised - super() hasn't been called")
						return r
					})(this, pE() ? Reflect.construct(r, i || [], pP(this).constructor) : r.apply(this, i))).state = {
						fontSize: "",
						letterSpacing: "",
					}),
					e
				)
			}
			if ("function" != typeof t && null !== t)
				throw TypeError("Super expression must either be null or a function")
			return (
				(n.prototype = Object.create(t && t.prototype, {
					constructor: { value: n, writable: !0, configurable: !0 },
				})),
				Object.defineProperty(n, "prototype", { writable: !1 }),
				t && pA(n, t),
				(e = [
					{
						key: "shouldComponentUpdate",
						value: function (t, e) {
							var r = t.viewBox,
								n = pS(t, pv),
								i = this.props,
								o = i.viewBox,
								a = pS(i, pm)
							return (
								!(0, sD.shallowEqual)(r, o) ||
								!(0, sD.shallowEqual)(n, a) ||
								!(0, sD.shallowEqual)(e, this.state)
							)
						},
					},
					{
						key: "componentDidMount",
						value: function () {
							var t = this.layerReference
							if (t) {
								var e = t.getElementsByClassName("recharts-cartesian-axis-tick-value")[0]
								e &&
									this.setState({
										fontSize: window.getComputedStyle(e).fontSize,
										letterSpacing: window.getComputedStyle(e).letterSpacing,
									})
							}
						},
					},
					{
						key: "getTickLineCoord",
						value: function (t) {
							var e,
								r,
								n,
								i,
								o,
								a,
								u = this.props,
								c = u.x,
								l = u.y,
								s = u.width,
								f = u.height,
								p = u.orientation,
								d = u.tickSize,
								h = u.mirror,
								y = u.tickMargin,
								v = h ? -1 : 1,
								m = t.tickSize || d,
								b = (0, rs.isNumber)(t.tickCoord) ? t.tickCoord : t.coordinate
							switch (p) {
								case "top":
									;(e = r = t.coordinate), (a = (n = (i = l + !h * f) - v * m) - v * y), (o = b)
									break
								case "left":
									;(n = i = t.coordinate), (o = (e = (r = c + !h * s) - v * m) - v * y), (a = b)
									break
								case "right":
									;(n = i = t.coordinate), (o = (e = (r = c + h * s) + v * m) + v * y), (a = b)
									break
								default:
									;(e = r = t.coordinate), (a = (n = (i = l + h * f) + v * m) + v * y), (o = b)
							}
							return { line: { x1: e, y1: n, x2: r, y2: i }, tick: { x: o, y: a } }
						},
					},
					{
						key: "getTickTextAnchor",
						value: function () {
							var t,
								e = this.props,
								r = e.orientation,
								n = e.mirror
							switch (r) {
								case "left":
									t = n ? "start" : "end"
									break
								case "right":
									t = n ? "end" : "start"
									break
								default:
									t = "middle"
							}
							return t
						},
					},
					{
						key: "getTickVerticalAnchor",
						value: function () {
							var t = this.props,
								e = t.orientation,
								r = t.mirror,
								n = "end"
							switch (e) {
								case "left":
								case "right":
									n = "middle"
									break
								case "top":
									n = r ? "start" : "end"
									break
								default:
									n = r ? "end" : "start"
							}
							return n
						},
					},
					{
						key: "renderAxisLine",
						value: function () {
							var t = this.props,
								e = t.x,
								r = t.y,
								n = t.width,
								i = t.height,
								o = t.orientation,
								a = t.mirror,
								u = t.axisLine,
								c = pw(
									pw(pw({}, (0, tc.filterProps)(this.props, !1)), (0, tc.filterProps)(u, !1)),
									{},
									{ fill: "none" },
								)
							if ("top" === o || "bottom" === o) {
								var l = +(("top" === o && !a) || ("bottom" === o && a))
								c = pw(pw({}, c), {}, { x1: e, y1: r + l * i, x2: e + n, y2: r + l * i })
							} else {
								var s = +(("left" === o && !a) || ("right" === o && a))
								c = pw(pw({}, c), {}, { x1: e + s * n, y1: r, x2: e + s * n, y2: r + i })
							}
							return A.default.createElement(
								"line",
								px({}, c, {
									className: (0, to.default)(
										"recharts-cartesian-axis-line",
										(0, tr.default)(u, "className"),
									),
								}),
							)
						},
					},
					{
						key: "renderTicks",
						value: function (t, e, r) {
							var i = this,
								o = this.props,
								a = o.tickLine,
								u = o.stroke,
								c = o.tick,
								l = o.tickFormatter,
								s = o.unit,
								f = (function (t, e, r) {
									var n,
										i,
										o,
										a,
										u,
										c = t.tick,
										l = t.ticks,
										s = t.viewBox,
										f = t.minTickGap,
										p = t.orientation,
										d = t.interval,
										h = t.tickFormatter,
										y = t.unit,
										v = t.angle
									if (!l || !l.length || !c) return []
									if ((0, rs.isNumber)(d) || rf.Global.isSsr)
										return pf(l, ("number" == typeof d && (0, rs.isNumber)(d) ? d : 0) + 1)
									var m = "top" === p || "bottom" === p ? "width" : "height",
										b =
											y && "width" === m
												? rb(y, { fontSize: e, letterSpacing: r })
												: { width: 0, height: 0 },
										g = function (t, n) {
											var i,
												o = (0, tt.default)(h) ? h(t.value, n) : t.value
											return "width" === m
												? ((i = rb(o, { fontSize: e, letterSpacing: r })),
													lH({ width: i.width + b.width, height: i.height + b.height }, v))
												: rb(o, { fontSize: e, letterSpacing: r })[m]
										},
										x = l.length >= 2 ? (0, rs.mathSign)(l[1].coordinate - l[0].coordinate) : 1,
										O =
											((n = "width" === m),
											(i = s.x),
											(o = s.y),
											(a = s.width),
											(u = s.height),
											1 === x
												? { start: n ? i : o, end: n ? i + a : o + u }
												: { start: n ? i + a : o + u, end: n ? i : o })
									return "equidistantPreserveStart" === d
										? (function (t, e, r, n, i) {
												for (
													var o,
														a = (n || []).slice(),
														u = e.start,
														c = e.end,
														l = 0,
														s = 1,
														f = u;
													s <= a.length;

												)
													if (
														(o = (function () {
															var e,
																o = null == n ? void 0 : n[l]
															if (void 0 === o) return { v: pf(n, s) }
															var a = l,
																p = function () {
																	return void 0 === e && (e = r(o, a)), e
																},
																d = o.coordinate,
																h = 0 === l || pp(t, d, p, f, c)
															h || ((l = 0), (f = u), (s += 1)),
																h && ((f = d + t * (p() / 2 + i)), (l += s))
														})())
													)
														return o.v
												return []
											})(x, O, g, l, f)
										: ("preserveStart" === d || "preserveStartEnd" === d
												? (function (t, e, r, n, i, o) {
														var a = (n || []).slice(),
															u = a.length,
															c = e.start,
															l = e.end
														if (o) {
															var s = n[u - 1],
																f = r(s, u - 1),
																p = t * (s.coordinate + (t * f) / 2 - l)
															;(a[u - 1] = s =
																py(
																	py({}, s),
																	{},
																	{
																		tickCoord:
																			p > 0 ? s.coordinate - p * t : s.coordinate,
																	},
																)),
																pp(
																	t,
																	s.tickCoord,
																	function () {
																		return f
																	},
																	c,
																	l,
																) &&
																	((l = s.tickCoord - t * (f / 2 + i)),
																	(a[u - 1] = py(py({}, s), {}, { isShow: !0 })))
														}
														for (
															var d = o ? u - 1 : u,
																h = function (e) {
																	var n,
																		o = a[e],
																		u = function () {
																			return void 0 === n && (n = r(o, e)), n
																		}
																	if (0 === e) {
																		var s = t * (o.coordinate - (t * u()) / 2 - c)
																		a[e] = o = py(
																			py({}, o),
																			{},
																			{
																				tickCoord:
																					s < 0
																						? o.coordinate - s * t
																						: o.coordinate,
																			},
																		)
																	} else
																		a[e] = o = py(
																			py({}, o),
																			{},
																			{ tickCoord: o.coordinate },
																		)
																	pp(t, o.tickCoord, u, c, l) &&
																		((c = o.tickCoord + t * (u() / 2 + i)),
																		(a[e] = py(py({}, o), {}, { isShow: !0 })))
																},
																y = 0;
															y < d;
															y++
														)
															h(y)
														return a
													})(x, O, g, l, f, "preserveStartEnd" === d)
												: (function (t, e, r, n, i) {
														for (
															var o = (n || []).slice(),
																a = o.length,
																u = e.start,
																c = e.end,
																l = function (e) {
																	var n,
																		l = o[e],
																		s = function () {
																			return void 0 === n && (n = r(l, e)), n
																		}
																	if (e === a - 1) {
																		var f = t * (l.coordinate + (t * s()) / 2 - c)
																		o[e] = l = py(
																			py({}, l),
																			{},
																			{
																				tickCoord:
																					f > 0
																						? l.coordinate - f * t
																						: l.coordinate,
																			},
																		)
																	} else
																		o[e] = l = py(
																			py({}, l),
																			{},
																			{ tickCoord: l.coordinate },
																		)
																	pp(t, l.tickCoord, s, u, c) &&
																		((c = l.tickCoord - t * (s() / 2 + i)),
																		(o[e] = py(py({}, l), {}, { isShow: !0 })))
																},
																s = a - 1;
															s >= 0;
															s--
														)
															l(s)
														return o
													})(x, O, g, l, f)
											).filter(function (t) {
												return t.isShow
											})
								})(pw(pw({}, this.props), {}, { ticks: t }), e, r),
								p = this.getTickTextAnchor(),
								d = this.getTickVerticalAnchor(),
								h = (0, tc.filterProps)(this.props, !1),
								y = (0, tc.filterProps)(c, !1),
								v = pw(pw({}, h), {}, { fill: "none" }, (0, tc.filterProps)(a, !1)),
								m = f.map(function (t, e) {
									var r = i.getTickLineCoord(t),
										o = r.line,
										m = r.tick,
										b = pw(
											pw(
												pw(
													pw({ textAnchor: p, verticalAnchor: d }, h),
													{},
													{ stroke: "none", fill: u },
													y,
												),
												m,
											),
											{},
											{ index: e, payload: t, visibleTicksCount: f.length, tickFormatter: l },
										)
									return A.default.createElement(
										tf,
										px(
											{
												className: "recharts-cartesian-axis-tick",
												key: "tick-"
													.concat(t.value, "-")
													.concat(t.coordinate, "-")
													.concat(t.tickCoord),
											},
											(0, th.adaptEventsOfChild)(i.props, t, e),
										),
										a &&
											A.default.createElement(
												"line",
												px({}, v, o, {
													className: (0, to.default)(
														"recharts-cartesian-axis-tick-line",
														(0, tr.default)(a, "className"),
													),
												}),
											),
										c &&
											n.renderTickItem(
												c,
												b,
												"".concat((0, tt.default)(l) ? l(t.value, e) : t.value).concat(s || ""),
											),
									)
								})
							return A.default.createElement("g", { className: "recharts-cartesian-axis-ticks" }, m)
						},
					},
					{
						key: "render",
						value: function () {
							var t = this,
								e = this.props,
								r = e.axisLine,
								n = e.width,
								i = e.height,
								o = e.ticksGenerator,
								a = e.className
							if (e.hide) return null
							var u = this.props,
								c = u.ticks,
								l = pS(u, pb),
								s = c
							return ((0, tt.default)(o) && (s = o(c && c.length > 0 ? this.props : l)),
							n <= 0 || i <= 0 || !s || !s.length)
								? null
								: A.default.createElement(
										tf,
										{
											className: (0, to.default)("recharts-cartesian-axis", a),
											ref: function (e) {
												t.layerReference = e
											},
										},
										r && this.renderAxisLine(),
										this.renderTicks(s, this.state.fontSize, this.state.letterSpacing),
										cM.renderCallByParent(this.props),
									)
						},
					},
				]),
				(r = [
					{
						key: "renderTickItem",
						value: function (t, e, r) {
							var n = (0, to.default)(e.className, "recharts-cartesian-axis-tick-value")
							return A.default.isValidElement(t)
								? A.default.cloneElement(t, pw(pw({}, e), {}, { className: n }))
								: (0, tt.default)(t)
									? t(pw(pw({}, e), {}, { className: n }))
									: A.default.createElement(
											r$,
											px({}, e, { className: "recharts-cartesian-axis-tick-value" }),
											r,
										)
						},
					},
				]),
				e && pj(n.prototype, e),
				r && pj(n, r),
				Object.defineProperty(n, "prototype", { writable: !1 }),
				n
			)
		})(A.Component)
		function pN(t) {
			return (pN =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		pT(pM, "displayName", "CartesianAxis"),
			pT(pM, "defaultProps", {
				x: 0,
				y: 0,
				width: 0,
				height: 0,
				viewBox: { x: 0, y: 0, width: 0, height: 0 },
				orientation: "bottom",
				ticks: [],
				stroke: "#666",
				tickLine: !0,
				axisLine: !0,
				tick: !0,
				mirror: !1,
				minTickGap: 5,
				tickSize: 6,
				tickMargin: 2,
				interval: "preserveEnd",
			})
		function p_() {
			try {
				var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (t) {}
			return (p_ = function () {
				return !!t
			})()
		}
		function pI(t) {
			return (pI = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					})(t)
		}
		function pC(t, e) {
			return (pC = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (t, e) {
						return (t.__proto__ = e), t
					})(t, e)
		}
		function pD(t, e, r) {
			return (
				(e = pR(e)) in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		function pR(t) {
			var e = (function (t, e) {
				if ("object" != pN(t) || !t) return t
				var r = t[Symbol.toPrimitive]
				if (void 0 !== r) {
					var n = r.call(t, e || "default")
					if ("object" != pN(n)) return n
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === e ? String : Number)(t)
			})(t, "string")
			return "symbol" == pN(e) ? e : e + ""
		}
		function pB() {
			return (pB = Object.assign.bind()).apply(this, arguments)
		}
		function pL(t) {
			var e = t.xAxisId,
				r = so(),
				n = sa(),
				i = sn(e)
			return null == i
				? null
				: A.createElement(
						pM,
						pB({}, i, {
							className: (0, to.default)(
								"recharts-".concat(i.axisType, " ").concat(i.axisType),
								i.className,
							),
							viewBox: { x: 0, y: 0, width: r, height: n },
							ticksGenerator: function (t) {
								return uI(t, !0)
							},
						}),
					)
		}
		var pz = (function (t) {
			var e
			function r() {
				var t, e
				if (!(this instanceof r)) throw TypeError("Cannot call a class as a function")
				return (
					(t = r),
					(e = arguments),
					(t = pI(t)),
					(function (t, e) {
						if (e && ("object" === pN(e) || "function" == typeof e)) return e
						if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined")
						var r = t
						if (void 0 === r)
							throw ReferenceError("this hasn't been initialised - super() hasn't been called")
						return r
					})(this, p_() ? Reflect.construct(t, e || [], pI(this).constructor) : t.apply(this, e))
				)
			}
			if ("function" != typeof t && null !== t)
				throw TypeError("Super expression must either be null or a function")
			return (
				(r.prototype = Object.create(t && t.prototype, {
					constructor: { value: r, writable: !0, configurable: !0 },
				})),
				Object.defineProperty(r, "prototype", { writable: !1 }),
				t && pC(r, t),
				(e = [
					{
						key: "render",
						value: function () {
							return A.createElement(pL, this.props)
						},
					},
				]),
				(function (t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r]
						;(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(t, pR(n.key), n)
					}
				})(r.prototype, e),
				Object.defineProperty(r, "prototype", { writable: !1 }),
				r
			)
		})(A.Component)
		function pU(t) {
			return (pU =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		pD(pz, "displayName", "XAxis"),
			pD(pz, "defaultProps", {
				allowDecimals: !0,
				hide: !1,
				orientation: "bottom",
				width: 0,
				height: 30,
				mirror: !1,
				xAxisId: 0,
				tickCount: 5,
				type: "category",
				padding: { left: 0, right: 0 },
				allowDataOverflow: !1,
				scale: "auto",
				reversed: !1,
				allowDuplicatedCategory: !0,
			})
		function pF() {
			try {
				var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (t) {}
			return (pF = function () {
				return !!t
			})()
		}
		function pq(t) {
			return (pq = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					})(t)
		}
		function pW(t, e) {
			return (pW = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (t, e) {
						return (t.__proto__ = e), t
					})(t, e)
		}
		function pH(t, e, r) {
			return (
				(e = p$(e)) in t
					? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
					: (t[e] = r),
				t
			)
		}
		function p$(t) {
			var e = (function (t, e) {
				if ("object" != pU(t) || !t) return t
				var r = t[Symbol.toPrimitive]
				if (void 0 !== r) {
					var n = r.call(t, e || "default")
					if ("object" != pU(n)) return n
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === e ? String : Number)(t)
			})(t, "string")
			return "symbol" == pU(e) ? e : e + ""
		}
		function pX() {
			return (pX = Object.assign.bind()).apply(this, arguments)
		}
		var pK = function (t) {
				var e = t.yAxisId,
					r = so(),
					n = sa(),
					i = si(e)
				return null == i
					? null
					: A.createElement(
							pM,
							pX({}, i, {
								className: (0, to.default)(
									"recharts-".concat(i.axisType, " ").concat(i.axisType),
									i.className,
								),
								viewBox: { x: 0, y: 0, width: r, height: n },
								ticksGenerator: function (t) {
									return uI(t, !0)
								},
							}),
						)
			},
			pQ = (function (t) {
				var e
				function r() {
					var t, e
					if (!(this instanceof r)) throw TypeError("Cannot call a class as a function")
					return (
						(t = r),
						(e = arguments),
						(t = pq(t)),
						(function (t, e) {
							if (e && ("object" === pU(e) || "function" == typeof e)) return e
							if (void 0 !== e)
								throw TypeError("Derived constructors may only return object or undefined")
							var r = t
							if (void 0 === r)
								throw ReferenceError("this hasn't been initialised - super() hasn't been called")
							return r
						})(this, pF() ? Reflect.construct(t, e || [], pq(this).constructor) : t.apply(this, e))
					)
				}
				if ("function" != typeof t && null !== t)
					throw TypeError("Super expression must either be null or a function")
				return (
					(r.prototype = Object.create(t && t.prototype, {
						constructor: { value: r, writable: !0, configurable: !0 },
					})),
					Object.defineProperty(r, "prototype", { writable: !1 }),
					t && pW(r, t),
					(e = [
						{
							key: "render",
							value: function () {
								return A.createElement(pK, this.props)
							},
						},
					]),
					(function (t, e) {
						for (var r = 0; r < e.length; r++) {
							var n = e[r]
							;(n.enumerable = n.enumerable || !1),
								(n.configurable = !0),
								"value" in n && (n.writable = !0),
								Object.defineProperty(t, p$(n.key), n)
						}
					})(r.prototype, e),
					Object.defineProperty(r, "prototype", { writable: !1 }),
					r
				)
			})(A.Component)
		pH(pQ, "displayName", "YAxis"),
			pH(pQ, "defaultProps", {
				allowDuplicatedCategory: !0,
				allowDecimals: !0,
				hide: !1,
				orientation: "left",
				width: 60,
				height: 0,
				mirror: !1,
				yAxisId: 0,
				tickCount: 5,
				type: "number",
				padding: { top: 0, bottom: 0 },
				allowDataOverflow: !1,
				scale: "auto",
				reversed: !1,
			})
		var pG =
				((o = (i = {
					chartName: "ScatterChart",
					GraphicalChild: ps,
					defaultTooltipEventType: "item",
					validateTooltipEventTypes: ["item"],
					axisComponents: [
						{ axisType: "xAxis", AxisComp: pz },
						{ axisType: "yAxis", AxisComp: pQ },
						{ axisType: "zAxis", AxisComp: f8 },
					],
					formatAxisMap: function (t, e, r, n, i) {
						var o = t.width,
							a = t.height,
							u = t.layout,
							c = t.children,
							l = Object.keys(e),
							s = {
								left: r.left,
								leftMirror: r.left,
								right: o - r.right,
								rightMirror: o - r.right,
								top: r.top,
								topMirror: r.top,
								bottom: a - r.bottom,
								bottomMirror: a - r.bottom,
							},
							f = !!(0, tc.findChildByType)(c, lC)
						return l.reduce(function (o, a) {
							var c,
								l,
								p,
								d,
								h,
								y = e[a],
								v = y.orientation,
								m = y.domain,
								b = y.padding,
								g = void 0 === b ? {} : b,
								x = y.mirror,
								O = y.reversed,
								w = "".concat(v).concat(x ? "Mirror" : "")
							if ("number" === y.type && ("gap" === y.padding || "no-gap" === y.padding)) {
								var S = m[1] - m[0],
									j = 1 / 0,
									E = y.categoricalDomain.sort(rs.compareValues)
								if (
									(E.forEach(function (t, e) {
										e > 0 && (j = Math.min((t || 0) - (E[e - 1] || 0), j))
									}),
									Number.isFinite(j))
								) {
									var P = j / S,
										A = "vertical" === y.layout ? r.height : r.width
									if (("gap" === y.padding && (c = (P * A) / 2), "no-gap" === y.padding)) {
										var T = (0, rs.getPercentValue)(t.barCategoryGap, P * A),
											k = (P * A) / 2
										c = k - T - ((k - T) / A) * T
									}
								}
							}
							;(l =
								"xAxis" === n
									? [r.left + (g.left || 0) + (c || 0), r.left + r.width - (g.right || 0) - (c || 0)]
									: "yAxis" === n
										? "horizontal" === u
											? [r.top + r.height - (g.bottom || 0), r.top + (g.top || 0)]
											: [
													r.top + (g.top || 0) + (c || 0),
													r.top + r.height - (g.bottom || 0) - (c || 0),
												]
										: y.range),
								O && (l = [l[1], l[0]])
							var M = uR(y, i, f),
								N = M.scale,
								_ = M.realScaleType
							N.domain(m).range(l), uB(N)
							var I = uW(N, lL(lL({}, y), {}, { realScaleType: _ }))
							"xAxis" === n
								? ((h = ("top" === v && !x) || ("bottom" === v && x)),
									(p = r.left),
									(d = s[w] - h * y.height))
								: "yAxis" === n &&
									((h = ("left" === v && !x) || ("right" === v && x)),
									(p = s[w] - h * y.width),
									(d = r.top))
							var C = lL(
								lL(lL({}, y), I),
								{},
								{
									realScaleType: _,
									x: p,
									y: d,
									scale: N,
									width: "xAxis" === n ? r.width : y.width,
									height: "yAxis" === n ? r.height : y.height,
								},
							)
							return (
								(C.bandSize = uZ(C, I)),
								y.hide || "xAxis" !== n
									? y.hide || (s[w] += (h ? -1 : 1) * C.width)
									: (s[w] += (h ? -1 : 1) * C.height),
								lL(lL({}, o), {}, lz({}, a, C))
							)
						}, {})
					},
				}).chartName),
				(a = i.GraphicalChild),
				(c = void 0 === (u = i.defaultTooltipEventType) ? "axis" : u),
				(s = void 0 === (l = i.validateTooltipEventTypes) ? ["axis"] : l),
				(f = i.axisComponents),
				(p = i.legendContent),
				(d = i.formatAxisMap),
				(h = i.defaultProps),
				(y = function (t, e) {
					var r = e.graphicalItems,
						n = e.stackGroups,
						i = e.offset,
						o = e.updateId,
						a = e.dataStartIndex,
						u = e.dataEndIndex,
						c = t.barSize,
						l = t.layout,
						s = t.barGap,
						p = t.barCategoryGap,
						d = t.maxBarSize,
						h = fZ(l),
						y = h.numericAxisName,
						v = h.cateAxisName,
						m =
							!!r &&
							!!r.length &&
							r.some(function (t) {
								var e = (0, tc.getDisplayName)(t && t.type)
								return e && e.indexOf("Bar") >= 0
							}),
						b = []
					return (
						r.forEach(function (r, h) {
							var g = fW(t.data, { graphicalItems: [r], dataStartIndex: a, dataEndIndex: u }),
								x = void 0 !== r.type.defaultProps ? fD(fD({}, r.type.defaultProps), r.props) : r.props,
								O = x.dataKey,
								w = x.maxBarSize,
								S = x["".concat(y, "Id")],
								j = x["".concat(v, "Id")],
								E = f.reduce(function (t, r) {
									var n = e["".concat(r.axisType, "Map")],
										i = x["".concat(r.axisType, "Id")]
									;(n && n[i]) || "zAxis" === r.axisType || ta(!1)
									var o = n[i]
									return fD(
										fD({}, t),
										{},
										fR(fR({}, r.axisType, o), "".concat(r.axisType, "Ticks"), uI(o)),
									)
								}, {}),
								P = E[v],
								A = E["".concat(v, "Ticks")],
								T = n && n[S] && n[S].hasStack && uK(r, n[S].stackGroups),
								k = (0, tc.getDisplayName)(r.type).indexOf("Bar") >= 0,
								M = uZ(P, A),
								N = [],
								_ =
									m &&
									uP({
										barSize: c,
										stackGroups: n,
										totalSize: "xAxis" === v ? E[v].width : "yAxis" === v ? E[v].height : void 0,
									})
							if (k) {
								var I,
									C,
									D = (0, J.default)(w) ? d : w,
									R = null != (I = null != (C = uZ(P, A, !0)) ? C : D) ? I : 0
								;(N = uA({
									barGap: s,
									barCategoryGap: p,
									bandSize: R !== M ? R : M,
									sizeList: _[j],
									maxBarSize: D,
								})),
									R !== M &&
										(N = N.map(function (t) {
											return fD(
												fD({}, t),
												{},
												{
													position: fD(
														fD({}, t.position),
														{},
														{ offset: t.position.offset - R / 2 },
													),
												},
											)
										}))
							}
							var B = r && r.type && r.type.getComposedData
							B &&
								b.push({
									props: fD(
										fD(
											{},
											B(
												fD(
													fD({}, E),
													{},
													{
														displayedData: g,
														props: t,
														dataKey: O,
														item: r,
														bandSize: M,
														barPosition: N,
														offset: i,
														stackedData: T,
														layout: l,
														dataStartIndex: a,
														dataEndIndex: u,
													},
												),
											),
										),
										{},
										fR(
											fR(fR({ key: r.key || "item-".concat(h) }, y, E[y]), v, E[v]),
											"animationId",
											o,
										),
									),
									childIndex: (0, tc.parseChildIndex)(r, t.children),
									item: r,
								})
						}),
						b
					)
				}),
				(v = function (t, e) {
					var r = t.props,
						n = t.dataStartIndex,
						i = t.dataEndIndex,
						u = t.updateId
					if (!(0, tc.validateWidthHeight)({ props: r })) return null
					var c = r.children,
						l = r.layout,
						s = r.stackOffset,
						p = r.data,
						h = r.reverseStackOrder,
						v = fZ(l),
						m = v.numericAxisName,
						b = v.cateAxisName,
						g = (0, tc.findAllByType)(c, a),
						x = uq(p, g, "".concat(m, "Id"), "".concat(b, "Id"), s, h),
						O = f.reduce(function (t, e) {
							var o = "".concat(e.axisType, "Map")
							return fD(
								fD({}, t),
								{},
								fR(
									{},
									o,
									fG(
										r,
										fD(
											fD({}, e),
											{},
											{
												graphicalItems: g,
												stackGroups: e.axisType === m && x,
												dataStartIndex: n,
												dataEndIndex: i,
											},
										),
									),
								),
							)
						}, {}),
						w = fJ(fD(fD({}, O), {}, { props: r, graphicalItems: g }), null == e ? void 0 : e.legendBBox)
					Object.keys(O).forEach(function (t) {
						O[t] = d(r, O[t], w, t.replace("Map", ""), o)
					})
					var S = fV(O["".concat(b, "Map")]),
						j = y(
							r,
							fD(
								fD({}, O),
								{},
								{
									dataStartIndex: n,
									dataEndIndex: i,
									updateId: u,
									graphicalItems: g,
									stackGroups: x,
									offset: w,
								},
							),
						)
					return fD(fD({ formattedGraphicalItems: j, graphicalItems: g, offset: w, stackGroups: x }, S), O)
				}),
				(m = (function (t) {
					var e
					function r(t) {
						var e, n, i, a, u
						if (!(this instanceof r)) throw TypeError("Cannot call a class as a function")
						return (
							(a = r),
							(u = [t]),
							(a = fk(a)),
							fR(
								(i = (function (t, e) {
									if (e && ("object" === fj(e) || "function" == typeof e)) return e
									if (void 0 !== e)
										throw TypeError("Derived constructors may only return object or undefined")
									var r = t
									if (void 0 === r)
										throw ReferenceError(
											"this hasn't been initialised - super() hasn't been called",
										)
									return r
								})(
									this,
									fT() ? Reflect.construct(a, u || [], fk(this).constructor) : a.apply(this, u),
								)),
								"eventEmitterSymbol",
								Symbol("rechartsEventEmitter"),
							),
							fR(i, "accessibilityManager", new sF()),
							fR(i, "handleLegendBBoxUpdate", function (t) {
								if (t) {
									var e = i.state,
										r = e.dataStartIndex,
										n = e.dataEndIndex,
										o = e.updateId
									i.setState(
										fD(
											{ legendBBox: t },
											v(
												{ props: i.props, dataStartIndex: r, dataEndIndex: n, updateId: o },
												fD(fD({}, i.state), {}, { legendBBox: t }),
											),
										),
									)
								}
							}),
							fR(i, "handleReceiveSyncEvent", function (t, e, r) {
								i.props.syncId === t &&
									(r !== i.eventEmitterSymbol || "function" == typeof i.props.syncMethod) &&
									i.applySyncEvent(e)
							}),
							fR(i, "handleBrushChange", function (t) {
								var e = t.startIndex,
									r = t.endIndex
								if (e !== i.state.dataStartIndex || r !== i.state.dataEndIndex) {
									var n = i.state.updateId
									i.setState(function () {
										return fD(
											{ dataStartIndex: e, dataEndIndex: r },
											v(
												{ props: i.props, dataStartIndex: e, dataEndIndex: r, updateId: n },
												i.state,
											),
										)
									}),
										i.triggerSyncEvent({ dataStartIndex: e, dataEndIndex: r })
								}
							}),
							fR(i, "handleMouseEnter", function (t) {
								var e = i.getMouseInfo(t)
								if (e) {
									var r = fD(fD({}, e), {}, { isTooltipActive: !0 })
									i.setState(r), i.triggerSyncEvent(r)
									var n = i.props.onMouseEnter
									;(0, tt.default)(n) && n(r, t)
								}
							}),
							fR(i, "triggeredAfterMouseMove", function (t) {
								var e = i.getMouseInfo(t),
									r = e ? fD(fD({}, e), {}, { isTooltipActive: !0 }) : { isTooltipActive: !1 }
								i.setState(r), i.triggerSyncEvent(r)
								var n = i.props.onMouseMove
								;(0, tt.default)(n) && n(r, t)
							}),
							fR(i, "handleItemMouseEnter", function (t) {
								i.setState(function () {
									return {
										isTooltipActive: !0,
										activeItem: t,
										activePayload: t.tooltipPayload,
										activeCoordinate: t.tooltipPosition || { x: t.cx, y: t.cy },
									}
								})
							}),
							fR(i, "handleItemMouseLeave", function () {
								i.setState(function () {
									return { isTooltipActive: !1 }
								})
							}),
							fR(i, "handleMouseMove", function (t) {
								t.persist(), i.throttleTriggeredAfterMouseMove(t)
							}),
							fR(i, "handleMouseLeave", function (t) {
								i.throttleTriggeredAfterMouseMove.cancel()
								var e = { isTooltipActive: !1 }
								i.setState(e), i.triggerSyncEvent(e)
								var r = i.props.onMouseLeave
								;(0, tt.default)(r) && r(e, t)
							}),
							fR(i, "handleOuterEvent", function (t) {
								var e,
									r = (0, tc.getReactEventByType)(t),
									n = (0, tr.default)(i.props, "".concat(r))
								r &&
									(0, tt.default)(n) &&
									n(
										null !=
											(e = /.*touch.*/i.test(r)
												? i.getMouseInfo(t.changedTouches[0])
												: i.getMouseInfo(t))
											? e
											: {},
										t,
									)
							}),
							fR(i, "handleClick", function (t) {
								var e = i.getMouseInfo(t)
								if (e) {
									var r = fD(fD({}, e), {}, { isTooltipActive: !0 })
									i.setState(r), i.triggerSyncEvent(r)
									var n = i.props.onClick
									;(0, tt.default)(n) && n(r, t)
								}
							}),
							fR(i, "handleMouseDown", function (t) {
								var e = i.props.onMouseDown
								;(0, tt.default)(e) && e(i.getMouseInfo(t), t)
							}),
							fR(i, "handleMouseUp", function (t) {
								var e = i.props.onMouseUp
								;(0, tt.default)(e) && e(i.getMouseInfo(t), t)
							}),
							fR(i, "handleTouchMove", function (t) {
								null != t.changedTouches &&
									t.changedTouches.length > 0 &&
									i.throttleTriggeredAfterMouseMove(t.changedTouches[0])
							}),
							fR(i, "handleTouchStart", function (t) {
								null != t.changedTouches &&
									t.changedTouches.length > 0 &&
									i.handleMouseDown(t.changedTouches[0])
							}),
							fR(i, "handleTouchEnd", function (t) {
								null != t.changedTouches &&
									t.changedTouches.length > 0 &&
									i.handleMouseUp(t.changedTouches[0])
							}),
							fR(i, "handleDoubleClick", function (t) {
								var e = i.props.onDoubleClick
								;(0, tt.default)(e) && e(i.getMouseInfo(t), t)
							}),
							fR(i, "handleContextMenu", function (t) {
								var e = i.props.onContextMenu
								;(0, tt.default)(e) && e(i.getMouseInfo(t), t)
							}),
							fR(i, "triggerSyncEvent", function (t) {
								void 0 !== i.props.syncId && sR.emit(sB, i.props.syncId, t, i.eventEmitterSymbol)
							}),
							fR(i, "applySyncEvent", function (t) {
								var e = i.props,
									r = e.layout,
									n = e.syncMethod,
									o = i.state.updateId,
									a = t.dataStartIndex,
									u = t.dataEndIndex
								if (void 0 !== t.dataStartIndex || void 0 !== t.dataEndIndex)
									i.setState(
										fD(
											{ dataStartIndex: a, dataEndIndex: u },
											v(
												{ props: i.props, dataStartIndex: a, dataEndIndex: u, updateId: o },
												i.state,
											),
										),
									)
								else if (void 0 !== t.activeTooltipIndex) {
									var c = t.chartX,
										l = t.chartY,
										s = t.activeTooltipIndex,
										f = i.state,
										p = f.offset,
										d = f.tooltipTicks
									if (!p) return
									if ("function" == typeof n) s = n(d, t)
									else if ("value" === n) {
										s = -1
										for (var h = 0; h < d.length; h++)
											if (d[h].value === t.activeLabel) {
												s = h
												break
											}
									}
									var y = fD(fD({}, p), {}, { x: p.left, y: p.top }),
										m = Math.min(c, y.x + y.width),
										b = Math.min(l, y.y + y.height),
										g = d[s] && d[s].value,
										x = f$(i.state, i.props.data, s),
										O = d[s]
											? {
													x: "horizontal" === r ? d[s].coordinate : m,
													y: "horizontal" === r ? b : d[s].coordinate,
												}
											: fU
									i.setState(
										fD(
											fD({}, t),
											{},
											{
												activeLabel: g,
												activeCoordinate: O,
												activePayload: x,
												activeTooltipIndex: s,
											},
										),
									)
								} else i.setState(t)
							}),
							fR(i, "renderCursor", function (t) {
								var e,
									r = i.state,
									n = r.isTooltipActive,
									a = r.activeCoordinate,
									u = r.activePayload,
									c = r.offset,
									l = r.activeTooltipIndex,
									s = r.tooltipAxisBandSize,
									f = i.getTooltipEventType(),
									p = null != (e = t.props.active) ? e : n,
									d = i.props.layout,
									h = t.key || "_recharts-cursor"
								return A.default.createElement(fO, {
									key: h,
									activeCoordinate: a,
									activePayload: u,
									activeTooltipIndex: l,
									chartName: o,
									element: t,
									isActive: p,
									layout: d,
									offset: c,
									tooltipAxisBandSize: s,
									tooltipEventType: f,
								})
							}),
							fR(i, "renderPolarAxis", function (t, e, r) {
								var n = (0, tr.default)(t, "type.axisType"),
									o = (0, tr.default)(i.state, "".concat(n, "Map")),
									a = t.type.defaultProps,
									u = void 0 !== a ? fD(fD({}, a), t.props) : t.props,
									c = o && o[u["".concat(n, "Id")]]
								return (0, A.cloneElement)(
									t,
									fD(
										fD({}, c),
										{},
										{
											className: (0, to.default)(n, c.className),
											key: t.key || "".concat(e, "-").concat(r),
											ticks: uI(c, !0),
										},
									),
								)
							}),
							fR(i, "renderPolarGrid", function (t) {
								var e = t.props,
									r = e.radialLines,
									n = e.polarAngles,
									o = e.polarRadius,
									a = i.state,
									u = a.radiusAxisMap,
									c = a.angleAxisMap,
									l = (0, rs.getAnyElementOfObject)(u),
									s = (0, rs.getAnyElementOfObject)(c),
									f = s.cx,
									p = s.cy,
									d = s.innerRadius,
									h = s.outerRadius
								return (0, A.cloneElement)(t, {
									polarAngles: Array.isArray(n)
										? n
										: uI(s, !0).map(function (t) {
												return t.coordinate
											}),
									polarRadius: Array.isArray(o)
										? o
										: uI(l, !0).map(function (t) {
												return t.coordinate
											}),
									cx: f,
									cy: p,
									innerRadius: d,
									outerRadius: h,
									key: t.key || "polar-grid",
									radialLines: r,
								})
							}),
							fR(i, "renderLegend", function () {
								var t = i.state.formattedGraphicalItems,
									e = i.props,
									r = e.children,
									n = e.width,
									o = e.height,
									a = i.props.margin || {},
									u = uy({
										children: r,
										formattedGraphicalItems: t,
										legendWidth: n - (a.left || 0) - (a.right || 0),
										legendContent: p,
									})
								if (!u) return null
								var c = u.item,
									l = fA(u, fw)
								return (0, A.cloneElement)(
									c,
									fD(
										fD({}, l),
										{},
										{
											chartWidth: n,
											chartHeight: o,
											margin: a,
											onBBoxUpdate: i.handleLegendBBoxUpdate,
										},
									),
								)
							}),
							fR(i, "renderTooltip", function () {
								var t,
									e = i.props,
									r = e.children,
									n = e.accessibilityLayer,
									o = (0, tc.findChildByType)(r, tp.Tooltip)
								if (!o) return null
								var a = i.state,
									u = a.isTooltipActive,
									c = a.activeCoordinate,
									l = a.activePayload,
									s = a.activeLabel,
									f = a.offset,
									p = null != (t = o.props.active) ? t : u
								return (0, A.cloneElement)(o, {
									viewBox: fD(fD({}, f), {}, { x: f.left, y: f.top }),
									active: p,
									label: s,
									payload: p ? l : [],
									coordinate: c,
									accessibilityLayer: n,
								})
							}),
							fR(i, "renderBrush", function (t) {
								var e = i.props,
									r = e.margin,
									n = e.data,
									o = i.state,
									a = o.offset,
									u = o.dataStartIndex,
									c = o.dataEndIndex,
									l = o.updateId
								return (0, A.cloneElement)(t, {
									key: t.key || "_recharts-brush",
									onChange: uD(i.handleBrushChange, t.props.onChange),
									data: n,
									x: (0, rs.isNumber)(t.props.x) ? t.props.x : a.left,
									y: (0, rs.isNumber)(t.props.y)
										? t.props.y
										: a.top + a.height + a.brushBottom - (r.bottom || 0),
									width: (0, rs.isNumber)(t.props.width) ? t.props.width : a.width,
									startIndex: u,
									endIndex: c,
									updateId: "brush-".concat(l),
								})
							}),
							fR(i, "renderReferenceElement", function (t, e, r) {
								if (!t) return null
								var n = i.clipPathId,
									o = i.state,
									a = o.xAxisMap,
									u = o.yAxisMap,
									c = o.offset,
									l = t.type.defaultProps || {},
									s = t.props,
									f = s.xAxisId,
									p = void 0 === f ? l.xAxisId : f,
									d = s.yAxisId,
									h = void 0 === d ? l.yAxisId : d
								return (0, A.cloneElement)(t, {
									key: t.key || "".concat(e, "-").concat(r),
									xAxis: a[p],
									yAxis: u[h],
									viewBox: { x: c.left, y: c.top, width: c.width, height: c.height },
									clipPathId: n,
								})
							}),
							fR(i, "renderActivePoints", function (t) {
								var e = t.item,
									n = t.activePoint,
									i = t.basePoint,
									o = t.childIndex,
									a = t.isRange,
									u = [],
									c = e.props.key,
									l =
										void 0 !== e.item.type.defaultProps
											? fD(fD({}, e.item.type.defaultProps), e.item.props)
											: e.item.props,
									s = l.activeDot,
									f = fD(
										fD(
											{
												index: o,
												dataKey: l.dataKey,
												cx: n.x,
												cy: n.y,
												r: 4,
												fill: uE(e.item),
												strokeWidth: 2,
												stroke: "#fff",
												payload: n.payload,
												value: n.value,
											},
											(0, tc.filterProps)(s, !1),
										),
										(0, th.adaptEventHandlers)(s),
									)
								return (
									u.push(r.renderActiveDot(s, f, "".concat(c, "-activePoint-").concat(o))),
									i
										? u.push(
												r.renderActiveDot(
													s,
													fD(fD({}, f), {}, { cx: i.x, cy: i.y }),
													"".concat(c, "-basePoint-").concat(o),
												),
											)
										: a && u.push(null),
									u
								)
							}),
							fR(i, "renderGraphicChild", function (t, e, r) {
								var n = i.filterFormatItem(t, e, r)
								if (!n) return null
								var o = i.getTooltipEventType(),
									a = i.state,
									u = a.isTooltipActive,
									c = a.tooltipAxis,
									l = a.activeTooltipIndex,
									s = a.activeLabel,
									f = i.props.children,
									p = (0, tc.findChildByType)(f, tp.Tooltip),
									d = n.props,
									h = d.points,
									y = d.isRange,
									v = d.baseLine,
									m =
										void 0 !== n.item.type.defaultProps
											? fD(fD({}, n.item.type.defaultProps), n.item.props)
											: n.item.props,
									b = m.activeDot,
									g = m.hide,
									x = m.activeBar,
									O = m.activeShape,
									w = !!(!g && u && p && (b || x || O)),
									S = {}
								"axis" !== o && p && "click" === p.props.trigger
									? (S = { onClick: uD(i.handleItemMouseEnter, t.props.onClick) })
									: "axis" !== o &&
										(S = {
											onMouseLeave: uD(i.handleItemMouseLeave, t.props.onMouseLeave),
											onMouseEnter: uD(i.handleItemMouseEnter, t.props.onMouseEnter),
										})
								var j = (0, A.cloneElement)(t, fD(fD({}, n.props), S))
								if (w)
									if (l >= 0) {
										if (c.dataKey && !c.allowDuplicatedCategory) {
											var E =
												"function" == typeof c.dataKey
													? function (t) {
															return "function" == typeof c.dataKey
																? c.dataKey(t.payload)
																: null
														}
													: "payload.".concat(c.dataKey.toString())
											;(T = (0, rs.findEntryInArray)(h, E, s)),
												(k = y && v && (0, rs.findEntryInArray)(v, E, s))
										} else (T = null == h ? void 0 : h[l]), (k = y && v && v[l])
										if (O || x) {
											var P = void 0 !== t.props.activeIndex ? t.props.activeIndex : l
											return [
												(0, A.cloneElement)(
													t,
													fD(fD(fD({}, n.props), S), {}, { activeIndex: P }),
												),
												null,
												null,
											]
										}
										if (!(0, J.default)(T))
											return [j].concat(
												fN(
													i.renderActivePoints({
														item: n,
														activePoint: T,
														basePoint: k,
														childIndex: l,
														isRange: y,
													}),
												),
											)
									} else {
										var T,
											k,
											M,
											N = (
												null != (M = i.getItemByXY(i.state.activeCoordinate))
													? M
													: { graphicalItem: j }
											).graphicalItem,
											_ = N.item,
											I = void 0 === _ ? t : _,
											C = N.childIndex,
											D = fD(fD(fD({}, n.props), S), {}, { activeIndex: C })
										return [(0, A.cloneElement)(I, D), null, null]
									}
								return y ? [j, null, null] : [j, null]
							}),
							fR(i, "renderCustomized", function (t, e, r) {
								return (0, A.cloneElement)(
									t,
									fD(fD({ key: "recharts-customized-".concat(r) }, i.props), i.state),
								)
							}),
							fR(i, "renderMap", {
								CartesianGrid: { handler: fF, once: !0 },
								ReferenceArea: { handler: i.renderReferenceElement },
								ReferenceLine: { handler: fF },
								ReferenceDot: { handler: i.renderReferenceElement },
								XAxis: { handler: fF },
								YAxis: { handler: fF },
								Brush: { handler: i.renderBrush, once: !0 },
								Bar: { handler: i.renderGraphicChild },
								Line: { handler: i.renderGraphicChild },
								Area: { handler: i.renderGraphicChild },
								Radar: { handler: i.renderGraphicChild },
								RadialBar: { handler: i.renderGraphicChild },
								Scatter: { handler: i.renderGraphicChild },
								Pie: { handler: i.renderGraphicChild },
								Funnel: { handler: i.renderGraphicChild },
								Tooltip: { handler: i.renderCursor, once: !0 },
								PolarGrid: { handler: i.renderPolarGrid, once: !0 },
								PolarAngleAxis: { handler: i.renderPolarAxis },
								PolarRadiusAxis: { handler: i.renderPolarAxis },
								Customized: { handler: i.renderCustomized },
							}),
							(i.clipPathId = "".concat(null != (e = t.id) ? e : (0, rs.uniqueId)("recharts"), "-clip")),
							(i.throttleTriggeredAfterMouseMove = (0, ti.default)(
								i.triggeredAfterMouseMove,
								null != (n = t.throttleDelay) ? n : 1e3 / 60,
							)),
							(i.state = {}),
							i
						)
					}
					if ("function" != typeof t && null !== t)
						throw TypeError("Super expression must either be null or a function")
					return (
						(r.prototype = Object.create(t && t.prototype, {
							constructor: { value: r, writable: !0, configurable: !0 },
						})),
						Object.defineProperty(r, "prototype", { writable: !1 }),
						t && fM(r, t),
						(e = [
							{
								key: "componentDidMount",
								value: function () {
									var t, e
									this.addListener(),
										this.accessibilityManager.setDetails({
											container: this.container,
											offset: {
												left: null != (t = this.props.margin.left) ? t : 0,
												top: null != (e = this.props.margin.top) ? e : 0,
											},
											coordinateList: this.state.tooltipTicks,
											mouseHandlerCallback: this.triggeredAfterMouseMove,
											layout: this.props.layout,
										}),
										this.displayDefaultTooltip()
								},
							},
							{
								key: "displayDefaultTooltip",
								value: function () {
									var t = this.props,
										e = t.children,
										r = t.data,
										n = t.height,
										i = t.layout,
										o = (0, tc.findChildByType)(e, tp.Tooltip)
									if (o) {
										var a = o.props.defaultIndex
										if (
											"number" == typeof a &&
											!(a < 0) &&
											!(a > this.state.tooltipTicks.length - 1)
										) {
											var u = this.state.tooltipTicks[a] && this.state.tooltipTicks[a].value,
												c = f$(this.state, r, a, u),
												l = this.state.tooltipTicks[a].coordinate,
												s = (this.state.offset.top + n) / 2,
												f = "horizontal" === i ? { x: l, y: s } : { y: l, x: s },
												p = this.state.formattedGraphicalItems.find(function (t) {
													return "Scatter" === t.item.type.name
												})
											p &&
												((f = fD(fD({}, f), p.props.points[a].tooltipPosition)),
												(c = p.props.points[a].tooltipPayload))
											var d = {
												activeTooltipIndex: a,
												isTooltipActive: !0,
												activeLabel: u,
												activePayload: c,
												activeCoordinate: f,
											}
											this.setState(d),
												this.renderCursor(o),
												this.accessibilityManager.setIndex(a)
										}
									}
								},
							},
							{
								key: "getSnapshotBeforeUpdate",
								value: function (t, e) {
									if (!this.props.accessibilityLayer) return null
									if (
										(this.state.tooltipTicks !== e.tooltipTicks &&
											this.accessibilityManager.setDetails({
												coordinateList: this.state.tooltipTicks,
											}),
										this.props.layout !== t.layout &&
											this.accessibilityManager.setDetails({ layout: this.props.layout }),
										this.props.margin !== t.margin)
									) {
										var r, n
										this.accessibilityManager.setDetails({
											offset: {
												left: null != (r = this.props.margin.left) ? r : 0,
												top: null != (n = this.props.margin.top) ? n : 0,
											},
										})
									}
									return null
								},
							},
							{
								key: "componentDidUpdate",
								value: function (t) {
									;(0, tc.isChildrenEqual)(
										[(0, tc.findChildByType)(t.children, tp.Tooltip)],
										[(0, tc.findChildByType)(this.props.children, tp.Tooltip)],
									) || this.displayDefaultTooltip()
								},
							},
							{
								key: "componentWillUnmount",
								value: function () {
									this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
								},
							},
							{
								key: "getTooltipEventType",
								value: function () {
									var t = (0, tc.findChildByType)(this.props.children, tp.Tooltip)
									if (t && "boolean" == typeof t.props.shared) {
										var e = t.props.shared ? "axis" : "item"
										return s.indexOf(e) >= 0 ? e : c
									}
									return c
								},
							},
							{
								key: "getMouseInfo",
								value: function (t) {
									if (!this.container) return null
									var e = this.container,
										r = e.getBoundingClientRect(),
										n = {
											top: r.top + window.scrollY - document.documentElement.clientTop,
											left: r.left + window.scrollX - document.documentElement.clientLeft,
										},
										i = {
											chartX: Math.round(t.pageX - n.left),
											chartY: Math.round(t.pageY - n.top),
										},
										o = r.width / e.offsetWidth || 1,
										a = this.inRange(i.chartX, i.chartY, o)
									if (!a) return null
									var u = this.state,
										c = u.xAxisMap,
										l = u.yAxisMap,
										s = this.getTooltipEventType(),
										f = fX(this.state, this.props.data, this.props.layout, a)
									if ("axis" !== s && c && l) {
										var p = (0, rs.getAnyElementOfObject)(c).scale,
											d = (0, rs.getAnyElementOfObject)(l).scale,
											h = p && p.invert ? p.invert(i.chartX) : null,
											y = d && d.invert ? d.invert(i.chartY) : null
										return fD(fD({}, i), {}, { xValue: h, yValue: y }, f)
									}
									return f ? fD(fD({}, i), f) : null
								},
							},
							{
								key: "inRange",
								value: function (t, e) {
									var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
										n = this.props.layout,
										i = t / r,
										o = e / r
									if ("horizontal" === n || "vertical" === n) {
										var a = this.state.offset
										return i >= a.left &&
											i <= a.left + a.width &&
											o >= a.top &&
											o <= a.top + a.height
											? { x: i, y: o }
											: null
									}
									var u = this.state,
										c = u.angleAxisMap,
										l = u.radiusAxisMap
									return c && l ? cg({ x: i, y: o }, (0, rs.getAnyElementOfObject)(c)) : null
								},
							},
							{
								key: "parseEventsOfWrapper",
								value: function () {
									var t = this.props.children,
										e = this.getTooltipEventType(),
										r = (0, tc.findChildByType)(t, tp.Tooltip),
										n = {}
									return (
										r &&
											"axis" === e &&
											(n =
												"click" === r.props.trigger
													? { onClick: this.handleClick }
													: {
															onMouseEnter: this.handleMouseEnter,
															onDoubleClick: this.handleDoubleClick,
															onMouseMove: this.handleMouseMove,
															onMouseLeave: this.handleMouseLeave,
															onTouchMove: this.handleTouchMove,
															onTouchStart: this.handleTouchStart,
															onTouchEnd: this.handleTouchEnd,
															onContextMenu: this.handleContextMenu,
														}),
										fD(fD({}, (0, th.adaptEventHandlers)(this.props, this.handleOuterEvent)), n)
									)
								},
							},
							{
								key: "addListener",
								value: function () {
									sR.on(sB, this.handleReceiveSyncEvent)
								},
							},
							{
								key: "removeListener",
								value: function () {
									sR.removeListener(sB, this.handleReceiveSyncEvent)
								},
							},
							{
								key: "filterFormatItem",
								value: function (t, e, r) {
									for (var n = this.state.formattedGraphicalItems, i = 0, o = n.length; i < o; i++) {
										var a = n[i]
										if (
											a.item === t ||
											a.props.key === t.key ||
											(e === (0, tc.getDisplayName)(a.item.type) && r === a.childIndex)
										)
											return a
									}
									return null
								},
							},
							{
								key: "renderClipPath",
								value: function () {
									var t = this.clipPathId,
										e = this.state.offset,
										r = e.left,
										n = e.top,
										i = e.height,
										o = e.width
									return A.default.createElement(
										"defs",
										null,
										A.default.createElement(
											"clipPath",
											{ id: t },
											A.default.createElement("rect", { x: r, y: n, height: i, width: o }),
										),
									)
								},
							},
							{
								key: "getXScales",
								value: function () {
									var t = this.state.xAxisMap
									return t
										? Object.entries(t).reduce(function (t, e) {
												var r = fP(e, 2),
													n = r[0],
													i = r[1]
												return fD(fD({}, t), {}, fR({}, n, i.scale))
											}, {})
										: null
								},
							},
							{
								key: "getYScales",
								value: function () {
									var t = this.state.yAxisMap
									return t
										? Object.entries(t).reduce(function (t, e) {
												var r = fP(e, 2),
													n = r[0],
													i = r[1]
												return fD(fD({}, t), {}, fR({}, n, i.scale))
											}, {})
										: null
								},
							},
							{
								key: "getXScaleByAxisId",
								value: function (t) {
									var e
									return null == (e = this.state.xAxisMap) || null == (e = e[t]) ? void 0 : e.scale
								},
							},
							{
								key: "getYScaleByAxisId",
								value: function (t) {
									var e
									return null == (e = this.state.yAxisMap) || null == (e = e[t]) ? void 0 : e.scale
								},
							},
							{
								key: "getItemByXY",
								value: function (t) {
									var e = this.state,
										r = e.formattedGraphicalItems,
										n = e.activeItem
									if (r && r.length)
										for (var i = 0, o = r.length; i < o; i++) {
											var a = r[i],
												u = a.props,
												c = a.item,
												l =
													void 0 !== c.type.defaultProps
														? fD(fD({}, c.type.defaultProps), c.props)
														: c.props,
												s = (0, tc.getDisplayName)(c.type)
											if ("Bar" === s) {
												var f = (u.data || []).find(function (e) {
													return e7(t, e)
												})
												if (f) return { graphicalItem: a, payload: f }
											} else if ("RadialBar" === s) {
												var p = (u.data || []).find(function (e) {
													return cg(t, e)
												})
												if (p) return { graphicalItem: a, payload: p }
											} else if (ll(a, n) || ls(a, n) || lf(a, n)) {
												var d = (function (t) {
														var e,
															r,
															n,
															i = t.activeTooltipItem,
															o = t.graphicalItem,
															a = t.itemData,
															u =
																(ll(o, i)
																	? (e = "trapezoids")
																	: ls(o, i)
																		? (e = "sectors")
																		: lf(o, i) && (e = "points"),
																e),
															c = ll(o, i)
																? null == (r = i.tooltipPayload) ||
																	null == (r = r[0]) ||
																	null == (r = r.payload)
																	? void 0
																	: r.payload
																: ls(o, i)
																	? null == (n = i.tooltipPayload) ||
																		null == (n = n[0]) ||
																		null == (n = n.payload)
																		? void 0
																		: n.payload
																	: lf(o, i)
																		? i.payload
																		: {},
															l = a.filter(function (t, e) {
																var r = (0, aq.default)(c, t),
																	n = o.props[u].filter(function (t) {
																		var e
																		return (ll(o, i)
																			? (e = lp)
																			: ls(o, i)
																				? (e = ld)
																				: lf(o, i) && (e = lh),
																		e)(t, i)
																	}),
																	a = o.props[u].indexOf(n[n.length - 1])
																return r && e === a
															})
														return a.indexOf(l[l.length - 1])
													})({ graphicalItem: a, activeTooltipItem: n, itemData: l.data }),
													h = void 0 === l.activeIndex ? d : l.activeIndex
												return {
													graphicalItem: fD(fD({}, a), {}, { childIndex: h }),
													payload: lf(a, n) ? l.data[d] : a.props.data[d],
												}
											}
										}
									return null
								},
							},
							{
								key: "render",
								value: function () {
									var t,
										e,
										r = this
									if (!(0, tc.validateWidthHeight)(this)) return null
									var n = this.props,
										i = n.children,
										o = n.className,
										a = n.width,
										u = n.height,
										c = n.style,
										l = n.compact,
										s = n.title,
										f = n.desc,
										p = fA(n, fS),
										d = (0, tc.filterProps)(p, !1)
									if (l)
										return A.default.createElement(
											sr,
											{
												state: this.state,
												width: this.props.width,
												height: this.props.height,
												clipPathId: this.clipPathId,
											},
											A.default.createElement(
												tu.Surface,
												fE({}, d, { width: a, height: u, title: s, desc: f }),
												this.renderClipPath(),
												(0, tc.renderByOrder)(i, this.renderMap),
											),
										)
									this.props.accessibilityLayer &&
										((d.tabIndex = null != (t = this.props.tabIndex) ? t : 0),
										(d.role = null != (e = this.props.role) ? e : "application"),
										(d.onKeyDown = function (t) {
											r.accessibilityManager.keyboardEvent(t)
										}),
										(d.onFocus = function () {
											r.accessibilityManager.focus()
										}))
									var h = this.parseEventsOfWrapper()
									return A.default.createElement(
										sr,
										{
											state: this.state,
											width: this.props.width,
											height: this.props.height,
											clipPathId: this.clipPathId,
										},
										A.default.createElement(
											"div",
											fE(
												{
													className: (0, to.default)("recharts-wrapper", o),
													style: fD(
														{
															position: "relative",
															cursor: "default",
															width: a,
															height: u,
														},
														c,
													),
												},
												h,
												{
													ref: function (t) {
														r.container = t
													},
												},
											),
											A.default.createElement(
												tu.Surface,
												fE({}, d, { width: a, height: u, title: s, desc: f, style: fz }),
												this.renderClipPath(),
												(0, tc.renderByOrder)(i, this.renderMap),
											),
											this.renderLegend(),
											this.renderTooltip(),
										),
									)
								},
							},
						]),
						(function (t, e) {
							for (var r = 0; r < e.length; r++) {
								var n = e[r]
								;(n.enumerable = n.enumerable || !1),
									(n.configurable = !0),
									"value" in n && (n.writable = !0),
									Object.defineProperty(t, fB(n.key), n)
							}
						})(r.prototype, e),
						Object.defineProperty(r, "prototype", { writable: !1 }),
						r
					)
				})(A.Component)),
				fR(m, "displayName", o),
				fR(
					m,
					"defaultProps",
					fD(
						{
							layout: "horizontal",
							stackOffset: "none",
							barCategoryGap: "10%",
							barGap: 4,
							margin: { top: 5, right: 5, bottom: 5, left: 5 },
							reverseStackOrder: !1,
							syncMethod: "index",
						},
						h,
					),
				),
				fR(m, "getDerivedStateFromProps", function (t, e) {
					var r = t.dataKey,
						n = t.data,
						i = t.children,
						o = t.width,
						a = t.height,
						u = t.layout,
						c = t.stackOffset,
						l = t.margin,
						s = e.dataStartIndex,
						f = e.dataEndIndex
					if (void 0 === e.updateId) {
						var p = fY(t)
						return fD(
							fD(fD({}, p), {}, { updateId: 0 }, v(fD(fD({ props: t }, p), {}, { updateId: 0 }), e)),
							{},
							{
								prevDataKey: r,
								prevData: n,
								prevWidth: o,
								prevHeight: a,
								prevLayout: u,
								prevStackOffset: c,
								prevMargin: l,
								prevChildren: i,
							},
						)
					}
					if (
						r !== e.prevDataKey ||
						n !== e.prevData ||
						o !== e.prevWidth ||
						a !== e.prevHeight ||
						u !== e.prevLayout ||
						c !== e.prevStackOffset ||
						!(0, sD.shallowEqual)(l, e.prevMargin)
					) {
						var d = fY(t),
							h = { chartX: e.chartX, chartY: e.chartY, isTooltipActive: e.isTooltipActive },
							y = fD(fD({}, fX(e, n, u)), {}, { updateId: e.updateId + 1 }),
							m = fD(fD(fD({}, d), h), y)
						return fD(
							fD(fD({}, m), v(fD({ props: t }, m), e)),
							{},
							{
								prevDataKey: r,
								prevData: n,
								prevWidth: o,
								prevHeight: a,
								prevLayout: u,
								prevStackOffset: c,
								prevMargin: l,
								prevChildren: i,
							},
						)
					}
					if (!(0, tc.isChildrenEqual)(i, e.prevChildren)) {
						var b,
							g,
							x,
							O,
							w = (0, tc.findChildByType)(i, cl),
							S = w && null != (b = null == (g = w.props) ? void 0 : g.startIndex) ? b : s,
							j = w && null != (x = null == (O = w.props) ? void 0 : O.endIndex) ? x : f,
							E = (0, J.default)(n) || S !== s || j !== f ? e.updateId + 1 : e.updateId
						return fD(
							fD(
								{ updateId: E },
								v(fD(fD({ props: t }, e), {}, { updateId: E, dataStartIndex: S, dataEndIndex: j }), e),
							),
							{},
							{ prevChildren: i, dataStartIndex: S, dataEndIndex: j },
						)
					}
					return null
				}),
				fR(m, "renderActiveDot", function (t, e, r) {
					var n
					return (
						(n = (0, A.isValidElement)(t)
							? (0, A.cloneElement)(t, e)
							: (0, tt.default)(t)
								? t(e)
								: A.default.createElement(tv, e)),
						A.default.createElement(tf, { className: "recharts-active-dot", key: r }, n)
					)
				}),
				((b = (0, A.forwardRef)(function (t, e) {
					return A.default.createElement(m, fE({}, t, { ref: e }))
				})).displayName = m.displayName),
				b),
			pV = ["component"]
		function pY(t) {
			return (pY =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t
						}
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t
						})(t)
		}
		function pZ(t) {
			var e,
				r = t.component,
				n = (function (t, e) {
					if (null == t) return {}
					var r,
						n,
						i = (function (t, e) {
							if (null == t) return {}
							var r = {}
							for (var n in t)
								if (Object.prototype.hasOwnProperty.call(t, n)) {
									if (e.indexOf(n) >= 0) continue
									r[n] = t[n]
								}
							return r
						})(t, e)
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(t)
						for (n = 0; n < o.length; n++)
							(r = o[n]),
								!(e.indexOf(r) >= 0) &&
									Object.prototype.propertyIsEnumerable.call(t, r) &&
									(i[r] = t[r])
					}
					return i
				})(t, pV)
			return (
				(0, A.isValidElement)(r)
					? (e = (0, A.cloneElement)(r, n))
					: (0, tt.default)(r)
						? (e = (0, A.createElement)(r, n))
						: (0, l$.warn)(
								!1,
								"Customized's props `component` must be React.element or Function, but got %s.",
								pY(r),
							),
				A.default.createElement(tf, { className: "recharts-customized-wrapper" }, e)
			)
		}
		pZ.displayName = "Customized"
		var pJ = t.i(32143)
		let p0 = ({ tableData: t }) => {
				let e = (0, A.useMemo)(() => t.filter(({ cost: t }) => t < 50), [t]),
					r = (0, A.useMemo)(() => e.reduce((t, e) => ({ ...t, [e.label]: e }), {}), [e]),
					n = (0, A.useMemo)(() => {
						let t = {},
							r = [],
							n = (t, e) => {
								let r = Math.abs(t.cost - e.cost),
									n = Math.abs(t.score - e.score)
								if (r > 8 || n > 10) return !1
								if (t.position === e.position && r < 4 && n < 5) return !0
								let i = "top" === t.position,
									o = "bottom" === t.position,
									a = "top" === e.position,
									u = "bottom" === e.position
								return ((!!i && !!a) || (!!o && !!u)) && !!(r < 4) && !!(n < 2.5)
							},
							i = (t, r) => {
								for (let n of e) {
									if (n.label === t.label) continue
									let e = Math.abs(t.cost - n.cost),
										i = Math.abs(t.score - n.score)
									switch (r) {
										case "top":
											if (e < 3 && n.score > t.score && n.score - t.score < 6) return !0
											break
										case "bottom":
											if (e < 3 && n.score < t.score && t.score - n.score < 6) return !0
											break
										case "left":
											if (i < 3 && n.cost < t.cost && t.cost - n.cost < 4) return !0
											break
										case "right":
											if (i < 3 && n.cost > t.cost && n.cost - t.cost < 4) return !0
									}
								}
								return !1
							}
						return (
							[...e]
								.sort((t, e) => {
									let r = e.score - t.score
									return Math.abs(r) > 1 ? r : t.cost - e.cost
								})
								.forEach((e) => {
									let o = "top"
									for (let t of ["top", "bottom", "right", "left"]) {
										let a = !1
										for (let i of r)
											if (
												n(
													{ cost: e.cost, score: e.score, position: t },
													{ cost: i.cost, score: i.score, position: i.position },
												)
											) {
												a = !0
												break
											}
										let u = i(e, t)
										if (!a && !u) {
											o = t
											break
										}
									}
									;(t[e.label] = o),
										r.push({ cost: e.cost, score: e.score, label: e.label, position: o })
								}),
							t
						)
					}, [e])
				return (0, P.jsxs)(P.Fragment, {
					children: [
						(0, P.jsx)("div", { className: "pt-4 pb-8 font-mono", children: "Cost x Score" }),
						(0, P.jsx)(pJ.ChartContainer, {
							config: r,
							className: "h-[500px] w-full",
							children: (0, P.jsxs)(pG, {
								margin: { top: 20, right: 0, bottom: 0, left: 20 },
								children: [
									(0, P.jsx)(pz, {
										type: "number",
										dataKey: "cost",
										name: "Cost",
										domain: [
											(t) => Math.max(0, 5 * Math.round((t - 5) / 5)),
											(t) => 5 * Math.round((t + 5) / 5),
										],
										tickFormatter: (t) => k(t),
									}),
									(0, P.jsx)(pQ, {
										type: "number",
										dataKey: "score",
										name: "Score",
										domain: [
											(t) => Math.max(0, 5 * Math.round((t - 5) / 5)),
											(t) => Math.min(100, 5 * Math.round((t + 5) / 5)),
										],
										tickFormatter: (t) => `${t}%`,
									}),
									(0, P.jsx)(pJ.ChartTooltip, {
										content: ({ active: t, payload: e }) => {
											if (!t || !e || !e.length || !e[0]) return null
											let { label: r, cost: n, score: i } = e[0].payload
											return (0, P.jsxs)("div", {
												className: "bg-background border rounded-sm p-2 shadow-sm text-left",
												children: [
													(0, P.jsx)("div", { className: "border-b pb-1", children: r }),
													(0, P.jsxs)("div", {
														className: "pt-1",
														children: [
															(0, P.jsxs)("div", {
																children: [
																	"Score: ",
																	(0, P.jsxs)("span", {
																		className: "font-mono",
																		children: [Math.round(i), "%"],
																	}),
																],
															}),
															(0, P.jsxs)("div", {
																children: [
																	"Cost: ",
																	(0, P.jsx)("span", {
																		className: "font-mono",
																		children: k(n),
																	}),
																],
															}),
														],
													}),
												],
											})
										},
									}),
									(0, P.jsx)(pZ, { component: p1 }),
									e.map((t, r) =>
										(0, P.jsx)(
											ps,
											{
												name: t.label,
												data: [t],
												fill: p5(r, e.length),
												children: (0, P.jsx)(cX, {
													dataKey: "label",
													content: (e) => p2(e, n[t.label] || "top"),
												}),
											},
											t.label,
										),
									),
								],
							}),
						}),
						(0, P.jsx)("div", {
							className: "py-4 text-xs opacity-50",
							children: "(Note: Models with a cost of $50 or more are excluded from the scatter plot.)",
						}),
					],
				})
			},
			p1 = (t) =>
				(0, P.jsx)(fv, {
					width: t.width,
					height: t.height,
					x: t.width / 2 + 35,
					y: t.height / 2 - 15,
					top: 0,
					left: 0,
					stroke: "currentColor",
					opacity: 0.1,
				}),
			p2 = (t, e) => {
				let { x: r, y: n, value: i } = t,
					o = 0,
					a = 0,
					u = "middle",
					c = "auto"
				switch (e) {
					case "top":
						;(a = -8), (u = "middle"), (c = "auto")
						break
					case "bottom":
						;(a = 15), (u = "middle"), (c = "hanging")
						break
					case "left":
						;(o = -8), (a = 5), (u = "end"), (c = "middle")
						break
					case "right":
						;(o = 15), (a = 5), (u = "start"), (c = "middle")
				}
				return (0, P.jsx)("text", {
					x: r + o,
					y: n + a,
					fontSize: "11",
					fontWeight: "500",
					fill: "currentColor",
					opacity: "0.8",
					textAnchor: u,
					dominantBaseline: c,
					style: {
						pointerEvents: "none",
						maxWidth: "80px",
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap",
					},
					children: ((t, e = 20) => (t.length <= e ? t : t.substring(0, e - 1) + "…"))(i),
				})
			},
			p5 = (t, e) => `hsl(${Math.round((360 * t) / e)}, 70%, 50%)`
		function p3({ runs: t }) {
			let { data: e } = (function (t, e, r) {
					let n,
						i = A.useContext(K),
						o = A.useContext(X),
						a = (0, $.useQueryClient)(r),
						u = a.defaultQueryOptions(t)
					a.getDefaultOptions().queries?._experimental_beforeQuery?.(u)
					let c = a.getQueryCache().get(u.queryHash)
					if (((u._optimisticResults = i ? "isRestoring" : "optimistic"), u.suspense)) {
						let t = (t) => ("static" === t ? t : Math.max(t ?? 1e3, 1e3)),
							e = u.staleTime
						;(u.staleTime = "function" == typeof e ? (...r) => t(e(...r)) : t(e)),
							"number" == typeof u.gcTime && (u.gcTime = Math.max(u.gcTime, 1e3))
					}
					;(n =
						c?.state.error && "function" == typeof u.throwOnError
							? (0, L.shouldThrowError)(u.throwOnError, [c.state.error, c])
							: u.throwOnError),
						(u.suspense || u.experimental_prefetchInRender || n) && !o.isReset() && (u.retryOnMount = !1),
						A.useEffect(() => {
							o.clearReset()
						}, [o])
					let l = !a.getQueryCache().get(u.queryHash),
						[s] = A.useState(() => new e(a, u)),
						f = s.getOptimisticResult(u),
						p = !i && !1 !== t.subscribed
					if (
						(A.useSyncExternalStore(
							A.useCallback(
								(t) => {
									let e = p ? s.subscribe(C.notifyManager.batchCalls(t)) : L.noop
									return s.updateResult(), e
								},
								[s, p],
							),
							() => s.getCurrentResult(),
							() => s.getCurrentResult(),
						),
						A.useEffect(() => {
							s.setOptions(u)
						}, [u, s]),
						u?.suspense && f.isPending)
					)
						throw Q(u, s, o)
					if (
						(({ result: t, errorResetBoundary: e, throwOnError: r, query: n, suspense: i }) =>
							t.isError &&
							!e.isReset() &&
							!t.isFetching &&
							n &&
							((i && void 0 === t.data) || (0, L.shouldThrowError)(r, [t.error, n])))({
							result: f,
							errorResetBoundary: o,
							throwOnError: u.throwOnError,
							query: c,
							suspense: u.suspense,
						})
					)
						throw f.error
					if (
						(a.getDefaultOptions().queries?._experimental_afterQuery?.(u, f),
						u.experimental_prefetchInRender && !L.isServer && f.isLoading && f.isFetching && !i)
					) {
						let t = l ? Q(u, s, o) : c?.promise
						t?.catch(L.noop).finally(() => {
							s.updateResult()
						})
					}
					return u.notifyOnChangeProps ? f : s.trackResult(f)
				})({ queryKey: ["getOpenRouterModels"], queryFn: Y }, U, void 0),
				r = (0, A.useMemo)(
					() =>
						t.map((t) => {
							let r = e?.[t.modelId ?? ""]?.modelInfo
							return {
								...t,
								label: t.name || t.description || t.model,
								cost: t.taskMetrics.cost,
								description: t.description ?? r?.description ?? null,
								contextWindow: t.contextWindow ?? r?.contextWindow ?? null,
								inputPrice: t.inputPrice ?? r?.inputPrice ?? null,
								outputPrice: t.outputPrice ?? r?.outputPrice ?? null,
							}
						}),
					[t, e],
				)
			return (0, P.jsxs)("div", {
				className: "mx-auto flex max-w-screen-lg flex-col gap-8 p-8",
				children: [
					(0, P.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							(0, P.jsxs)("div", {
								children: [
									"Roo Code tests each frontier model against",
									" ",
									(0, P.jsx)("a", {
										href: "https://github.com/RooCodeInc/Roo-Code-Evals",
										className: "underline",
										children: "a suite of hundreds of exercises",
									}),
									" ",
									"across 5 programming languages with varying difficulty. These results can help you find the right price-to-intelligence ratio for your use case.",
								],
							}),
							(0, P.jsxs)("div", {
								children: [
									"Want to see the results for a model we haven't tested yet? Ping us in",
									" ",
									(0, P.jsx)("a", {
										href: "https://discord.gg/roocode",
										className: "underline",
										children: "Discord",
									}),
									".",
								],
							}),
						],
					}),
					(0, P.jsxs)(Z.Table, {
						className: "border",
						children: [
							(0, P.jsxs)(Z.TableHeader, {
								children: [
									(0, P.jsxs)(Z.TableRow, {
										children: [
											(0, P.jsx)(Z.TableHead, {
												colSpan: 2,
												className: "border-r text-center",
												children: "Model",
											}),
											(0, P.jsx)(Z.TableHead, {
												colSpan: 3,
												className: "border-r text-center",
												children: "Metrics",
											}),
											(0, P.jsx)(Z.TableHead, {
												colSpan: 6,
												className: "text-center",
												children: "Scores",
											}),
										],
									}),
									(0, P.jsxs)(Z.TableRow, {
										children: [
											(0, P.jsxs)(Z.TableHead, {
												children: [
													"Name",
													(0, P.jsx)("div", {
														className: "text-xs opacity-50",
														children: "Context Window",
													}),
												],
											}),
											(0, P.jsxs)(Z.TableHead, {
												className: "border-r",
												children: [
													"Price",
													(0, P.jsx)("div", {
														className: "text-xs opacity-50",
														children: "In / Out",
													}),
												],
											}),
											(0, P.jsx)(Z.TableHead, { children: "Duration" }),
											(0, P.jsxs)(Z.TableHead, {
												children: [
													"Tokens",
													(0, P.jsx)("div", {
														className: "text-xs opacity-50",
														children: "In / Out",
													}),
												],
											}),
											(0, P.jsxs)(Z.TableHead, {
												className: "border-r",
												children: [
													"Cost",
													(0, P.jsx)("div", {
														className: "text-xs opacity-50",
														children: "USD",
													}),
												],
											}),
											(0, P.jsx)(Z.TableHead, {
												children: (0, P.jsx)("i", {
													className: "devicon-go-plain text-lg",
													title: "Go",
												}),
											}),
											(0, P.jsx)(Z.TableHead, {
												children: (0, P.jsx)("i", {
													className: "devicon-java-plain text-lg",
													title: "Java",
												}),
											}),
											(0, P.jsx)(Z.TableHead, {
												children: (0, P.jsx)("i", {
													className: "devicon-javascript-plain text-lg",
													title: "JavaScript",
												}),
											}),
											(0, P.jsx)(Z.TableHead, {
												children: (0, P.jsx)("i", {
													className: "devicon-python-plain text-lg",
													title: "Python",
												}),
											}),
											(0, P.jsx)(Z.TableHead, {
												children: (0, P.jsx)("i", {
													className: "devicon-rust-original text-lg",
													title: "Rust",
												}),
											}),
											(0, P.jsx)(Z.TableHead, { children: "Total" }),
										],
									}),
								],
							}),
							(0, P.jsx)(Z.TableBody, {
								className: "font-mono",
								children: r.map((t) =>
									(0, P.jsxs)(
										Z.TableRow,
										{
											children: [
												(0, P.jsxs)(Z.TableCell, {
													title: t.description ?? void 0,
													children: [
														(0, P.jsx)("div", {
															className: "font-sans",
															children: t.label,
														}),
														(0, P.jsx)("div", {
															className: "text-xs opacity-50",
															children: N(t.contextWindow),
														}),
													],
												}),
												(0, P.jsx)(Z.TableCell, {
													className: "border-r",
													children: (0, P.jsxs)("div", {
														className: "flex flex-row gap-2",
														children: [
															(0, P.jsx)("div", { children: k(t.inputPrice) }),
															(0, P.jsx)("div", {
																className: "opacity-25",
																children: "/",
															}),
															(0, P.jsx)("div", { children: k(t.outputPrice) }),
														],
													}),
												}),
												(0, P.jsx)(Z.TableCell, {
													className: "font-mono",
													children: ((t) => {
														if (null == t) return "-"
														let e = Math.floor(t / 1e3),
															r = Math.floor(e / 3600),
															n = Math.floor((e % 3600) / 60),
															i = e % 60,
															o = []
														return (
															r > 0 && o.push(`${r}h`),
															n > 0 && o.push(`${n}m`),
															(i > 0 || 0 === o.length) && o.push(`${i}s`),
															o.join(" ")
														)
													})(t.taskMetrics.duration),
												}),
												(0, P.jsx)(Z.TableCell, {
													children: (0, P.jsxs)("div", {
														className: "flex flex-row gap-2",
														children: [
															(0, P.jsx)("div", { children: N(t.taskMetrics.tokensIn) }),
															(0, P.jsx)("div", {
																className: "opacity-25",
																children: "/",
															}),
															(0, P.jsx)("div", { children: N(t.taskMetrics.tokensOut) }),
														],
													}),
												}),
												(0, P.jsx)(Z.TableCell, {
													className: "border-r",
													children: k(t.taskMetrics.cost),
												}),
												(0, P.jsxs)(Z.TableCell, {
													className: "text-muted-foreground",
													children: [M(t.languageScores?.go ?? 0), "%"],
												}),
												(0, P.jsxs)(Z.TableCell, {
													className: "text-muted-foreground",
													children: [M(t.languageScores?.java ?? 0), "%"],
												}),
												(0, P.jsxs)(Z.TableCell, {
													className: "text-muted-foreground",
													children: [M(t.languageScores?.javascript ?? 0), "%"],
												}),
												(0, P.jsxs)(Z.TableCell, {
													className: "text-muted-foreground",
													children: [M(t.languageScores?.python ?? 0), "%"],
												}),
												(0, P.jsxs)(Z.TableCell, {
													className: "text-muted-foreground",
													children: [M(t.languageScores?.rust ?? 0), "%"],
												}),
												(0, P.jsxs)(Z.TableCell, {
													className: "font-bold",
													children: [t.score, "%"],
												}),
											],
										},
										t.id,
									),
								),
							}),
							(0, P.jsx)(Z.TableCaption, { children: (0, P.jsx)(p0, { tableData: r }) }),
						],
					}),
				],
			})
		}
		t.s(["Evals", () => p3], 11336)
	},
])
