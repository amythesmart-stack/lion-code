module.exports = [
	48286,
	(a, b, c) => {
		var d = Math.ceil,
			e = Math.max
		b.exports = function (a, b, c, f) {
			for (var g = -1, h = e(d((b - a) / (c || 1)), 0), i = Array(h); h--; ) (i[f ? h : ++g] = a), (a += c)
			return i
		}
	},
	90301,
	(a, b, c) => {
		var d = a.r(71167),
			e = 1 / 0
		b.exports = function (a) {
			return a
				? (a = d(a)) === e || a === -e
					? (a < 0 ? -1 : 1) * 17976931348623157e292
					: a == a
						? a
						: 0
				: 0 === a
					? a
					: 0
		}
	},
	32089,
	(a, b, c) => {
		var d = a.r(48286),
			e = a.r(12923),
			f = a.r(90301)
		b.exports = function (a) {
			return function (b, c, g) {
				return (
					g && "number" != typeof g && e(b, c, g) && (c = g = void 0),
					(b = f(b)),
					void 0 === c ? ((c = b), (b = 0)) : (c = f(c)),
					(g = void 0 === g ? (b < c ? 1 : -1) : f(g)),
					d(b, c, g, a)
				)
			}
		}
	},
	69661,
	(a, b, c) => {
		b.exports = a.r(32089)()
	},
	88785,
	(a, b, c) => {
		"use strict"
		b.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
	},
	26781,
	(a, b, c) => {
		"use strict"
		var d = a.r(88785)
		function e() {}
		function f() {}
		;(f.resetWarningCache = e),
			(b.exports = function () {
				function a(a, b, c, e, f, g) {
					if (g !== d) {
						var h = Error(
							"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
						)
						throw ((h.name = "Invariant Violation"), h)
					}
				}
				function b() {
					return a
				}
				a.isRequired = a
				var c = {
					array: a,
					bigint: a,
					bool: a,
					func: a,
					number: a,
					object: a,
					string: a,
					symbol: a,
					any: a,
					arrayOf: b,
					element: a,
					elementType: a,
					instanceOf: b,
					node: a,
					objectOf: b,
					oneOf: b,
					oneOfType: b,
					shape: b,
					exact: b,
					checkPropTypes: f,
					resetWarningCache: e,
				}
				return (c.PropTypes = c), c
			})
	},
	5783,
	(a, b, c) => {
		b.exports = a.r(26781)()
	},
	40430,
	(a, b, c) => {
		var d = a.r(30916)
		b.exports = function (a, b, c) {
			for (var e = -1, f = a.length; ++e < f; ) {
				var g = a[e],
					h = b(g)
				if (null != h && (void 0 === i ? h == h && !d(h) : c(h, i)))
					var i = h,
						j = g
			}
			return j
		}
	},
	36933,
	(a, b, c) => {
		b.exports = function (a, b) {
			return a > b
		}
	},
	67535,
	(a, b, c) => {
		var d = a.r(40430),
			e = a.r(36933),
			f = a.r(53085)
		b.exports = function (a) {
			return a && a.length ? d(a, f, e) : void 0
		}
	},
	92817,
	(a, b, c) => {
		b.exports = function (a, b) {
			return a < b
		}
	},
	57153,
	(a, b, c) => {
		var d = a.r(40430),
			e = a.r(92817),
			f = a.r(53085)
		b.exports = function (a) {
			return a && a.length ? d(a, f, e) : void 0
		}
	},
	44740,
	(a, b, c) => {
		var d = a.r(63817),
			e = a.r(59421),
			f = a.r(13658),
			g = a.r(60437)
		b.exports = function (a, b) {
			return (g(a) ? d : f)(a, e(b, 3))
		}
	},
	52255,
	(a, b, c) => {
		var d = a.r(41581),
			e = a.r(44740)
		b.exports = function (a, b) {
			return d(e(a, b), 1)
		}
	},
	91163,
	(a, b, c) => {
		var d = a.r(67832)
		b.exports = function (a, b) {
			return d(a, b)
		}
	},
	43640,
	(a, b, c) => {
		var d = a.r(97579)
		b.exports = function (a, b, c) {
			"__proto__" == b && d ? d(a, b, { configurable: !0, enumerable: !0, value: c, writable: !0 }) : (a[b] = c)
		}
	},
	34630,
	(a, b, c) => {
		var d = a.r(43640),
			e = a.r(77374),
			f = a.r(59421)
		b.exports = function (a, b) {
			var c = {}
			return (
				(b = f(b, 3)),
				e(a, function (a, e, f) {
					d(c, e, b(a, e, f))
				}),
				c
			)
		}
	},
	55352,
	(a, b, c) => {
		b.exports = function (a, b) {
			for (var c = -1, d = null == a ? 0 : a.length; ++c < d; ) if (!b(a[c], c, a)) return !1
			return !0
		}
	},
	56539,
	(a, b, c) => {
		var d = a.r(52480)
		b.exports = function (a, b) {
			var c = !0
			return (
				d(a, function (a, d, e) {
					return (c = !!b(a, d, e))
				}),
				c
			)
		}
	},
	72195,
	(a, b, c) => {
		var d = a.r(55352),
			e = a.r(56539),
			f = a.r(59421),
			g = a.r(60437),
			h = a.r(12923)
		b.exports = function (a, b, c) {
			var i = g(a) ? d : e
			return c && h(a, b, c) && (b = void 0), i(a, f(b, 3))
		}
	},
	18577,
	(a, b, c) => {
		b.exports = function (a) {
			var b = null == a ? 0 : a.length
			return b ? a[b - 1] : void 0
		}
	},
	60588,
	(a, b, c) => {
		b.exports = a.r(79922)(Object.getPrototypeOf, Object)
	},
	95123,
	(a, b, c) => {
		var d = a.r(21570),
			e = a.r(60588),
			f = a.r(52713),
			g = Object.prototype,
			h = Function.prototype.toString,
			i = g.hasOwnProperty,
			j = h.call(Object)
		b.exports = function (a) {
			if (!f(a) || "[object Object]" != d(a)) return !1
			var b = e(a)
			if (null === b) return !0
			var c = i.call(b, "constructor") && b.constructor
			return "function" == typeof c && c instanceof c && h.call(c) == j
		}
	},
	17116,
	(a, b, c) => {
		var d = a.r(21570),
			e = a.r(52713)
		b.exports = function (a) {
			return !0 === a || !1 === a || (e(a) && "[object Boolean]" == d(a))
		}
	},
	58020,
	(a, b, c) => {
		var d = a.r(52480)
		b.exports = function (a, b) {
			var c
			return (
				d(a, function (a, d, e) {
					return !(c = b(a, d, e))
				}),
				!!c
			)
		}
	},
	59903,
	(a, b, c) => {
		var d = a.r(2461),
			e = a.r(59421),
			f = a.r(58020),
			g = a.r(60437),
			h = a.r(12923)
		b.exports = function (a, b, c) {
			var i = g(a) ? d : f
			return c && h(a, b, c) && (b = void 0), i(a, e(b, 3))
		}
	},
	44144,
	(a, b, c) => {
		var d = a.r(59421),
			e = a.r(58475),
			f = a.r(6407)
		b.exports = function (a) {
			return function (b, c, g) {
				var h = Object(b)
				if (!e(b)) {
					var i = d(c, 3)
					;(b = f(b)),
						(c = function (a) {
							return i(h[a], a, h)
						})
				}
				var j = a(b, c, g)
				return j > -1 ? h[i ? b[j] : j] : void 0
			}
		}
	},
	96305,
	(a, b, c) => {
		var d = a.r(90301)
		b.exports = function (a) {
			var b = d(a),
				c = b % 1
			return b == b ? (c ? b - c : b) : 0
		}
	},
	67434,
	(a, b, c) => {
		var d = a.r(21243),
			e = a.r(59421),
			f = a.r(96305),
			g = Math.max
		b.exports = function (a, b, c) {
			var h = null == a ? 0 : a.length
			if (!h) return -1
			var i = null == c ? 0 : f(c)
			return i < 0 && (i = g(h + i, 0)), d(a, e(b, 3), i)
		}
	},
	40553,
	(a, b, c) => {
		b.exports = a.r(44144)(a.r(67434))
	},
	13166,
	(a, b, c) => {
		"use strict"
		var d = Object.prototype.hasOwnProperty,
			e = "~"
		function f() {}
		function g(a, b, c) {
			;(this.fn = a), (this.context = b), (this.once = c || !1)
		}
		function h(a, b, c, d, f) {
			if ("function" != typeof c) throw TypeError("The listener must be a function")
			var h = new g(c, d || a, f),
				i = e ? e + b : b
			return (
				a._events[i]
					? a._events[i].fn
						? (a._events[i] = [a._events[i], h])
						: a._events[i].push(h)
					: ((a._events[i] = h), a._eventsCount++),
				a
			)
		}
		function i(a, b) {
			0 == --a._eventsCount ? (a._events = new f()) : delete a._events[b]
		}
		function j() {
			;(this._events = new f()), (this._eventsCount = 0)
		}
		Object.create && ((f.prototype = Object.create(null)), new f().__proto__ || (e = !1)),
			(j.prototype.eventNames = function () {
				var a,
					b,
					c = []
				if (0 === this._eventsCount) return c
				for (b in (a = this._events)) d.call(a, b) && c.push(e ? b.slice(1) : b)
				return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(a)) : c
			}),
			(j.prototype.listeners = function (a) {
				var b = e ? e + a : a,
					c = this._events[b]
				if (!c) return []
				if (c.fn) return [c.fn]
				for (var d = 0, f = c.length, g = Array(f); d < f; d++) g[d] = c[d].fn
				return g
			}),
			(j.prototype.listenerCount = function (a) {
				var b = e ? e + a : a,
					c = this._events[b]
				return c ? (c.fn ? 1 : c.length) : 0
			}),
			(j.prototype.emit = function (a, b, c, d, f, g) {
				var h = e ? e + a : a
				if (!this._events[h]) return !1
				var i,
					j,
					k = this._events[h],
					l = arguments.length
				if (k.fn) {
					switch ((k.once && this.removeListener(a, k.fn, void 0, !0), l)) {
						case 1:
							return k.fn.call(k.context), !0
						case 2:
							return k.fn.call(k.context, b), !0
						case 3:
							return k.fn.call(k.context, b, c), !0
						case 4:
							return k.fn.call(k.context, b, c, d), !0
						case 5:
							return k.fn.call(k.context, b, c, d, f), !0
						case 6:
							return k.fn.call(k.context, b, c, d, f, g), !0
					}
					for (j = 1, i = Array(l - 1); j < l; j++) i[j - 1] = arguments[j]
					k.fn.apply(k.context, i)
				} else {
					var m,
						n = k.length
					for (j = 0; j < n; j++)
						switch ((k[j].once && this.removeListener(a, k[j].fn, void 0, !0), l)) {
							case 1:
								k[j].fn.call(k[j].context)
								break
							case 2:
								k[j].fn.call(k[j].context, b)
								break
							case 3:
								k[j].fn.call(k[j].context, b, c)
								break
							case 4:
								k[j].fn.call(k[j].context, b, c, d)
								break
							default:
								if (!i) for (m = 1, i = Array(l - 1); m < l; m++) i[m - 1] = arguments[m]
								k[j].fn.apply(k[j].context, i)
						}
				}
				return !0
			}),
			(j.prototype.on = function (a, b, c) {
				return h(this, a, b, c, !1)
			}),
			(j.prototype.once = function (a, b, c) {
				return h(this, a, b, c, !0)
			}),
			(j.prototype.removeListener = function (a, b, c, d) {
				var f = e ? e + a : a
				if (!this._events[f]) return this
				if (!b) return i(this, f), this
				var g = this._events[f]
				if (g.fn) g.fn !== b || (d && !g.once) || (c && g.context !== c) || i(this, f)
				else {
					for (var h = 0, j = [], k = g.length; h < k; h++)
						(g[h].fn !== b || (d && !g[h].once) || (c && g[h].context !== c)) && j.push(g[h])
					j.length ? (this._events[f] = 1 === j.length ? j[0] : j) : i(this, f)
				}
				return this
			}),
			(j.prototype.removeAllListeners = function (a) {
				var b
				return (
					a
						? ((b = e ? e + a : a), this._events[b] && i(this, b))
						: ((this._events = new f()), (this._eventsCount = 0)),
					this
				)
			}),
			(j.prototype.off = j.prototype.removeListener),
			(j.prototype.addListener = j.prototype.on),
			(j.prefixed = e),
			(j.EventEmitter = j),
			(b.exports = j)
	},
	97688,
	(a) => {
		"use strict"
		let b
		var c,
			d,
			e,
			f,
			g,
			h,
			i,
			j,
			k,
			l,
			m,
			n,
			o,
			p,
			q,
			r,
			s,
			t = a.i(9116),
			u = a.i(67191)
		let v = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
			w = (a) => (null == a ? "-" : v.format(a)),
			x = (a) => Math.round(100 * a),
			y = (a, b = 0) =>
				null == a
					? "-"
					: a < 1e3
						? a.toString()
						: a < 1e6
							? `${(a / 1e3).toFixed(b)}K`
							: a < 1e9
								? `${(a / 1e6).toFixed(b)}M`
								: `${(a / 1e9).toFixed(b)}B`
		a.i(16209)
		var z = a.i(80904),
			A = a.i(28015),
			B = a.i(18697),
			C = a.i(12092),
			D = a.i(28854),
			E = a.i(49407),
			F = a.i(90830),
			G = a.i(53017),
			H = class extends D.Subscribable {
				constructor(a, b) {
					super(),
						(this.options = b),
						(this.#a = a),
						(this.#b = null),
						(this.#c = (0, E.pendingThenable)()),
						this.bindMethods(),
						this.setOptions(b)
				}
				#a
				#d = void 0
				#e = void 0
				#f = void 0
				#g
				#h
				#c
				#b
				#i
				#j
				#k
				#l
				#m
				#n
				#o = new Set()
				bindMethods() {
					this.refetch = this.refetch.bind(this)
				}
				onSubscribe() {
					1 === this.listeners.size &&
						(this.#d.addObserver(this),
						I(this.#d, this.options) ? this.#p() : this.updateResult(),
						this.#q())
				}
				onUnsubscribe() {
					this.hasListeners() || this.destroy()
				}
				shouldFetchOnReconnect() {
					return J(this.#d, this.options, this.options.refetchOnReconnect)
				}
				shouldFetchOnWindowFocus() {
					return J(this.#d, this.options, this.options.refetchOnWindowFocus)
				}
				destroy() {
					;(this.listeners = new Set()), this.#r(), this.#s(), this.#d.removeObserver(this)
				}
				setOptions(a) {
					let b = this.options,
						c = this.#d
					if (
						((this.options = this.#a.defaultQueryOptions(a)),
						void 0 !== this.options.enabled &&
							"boolean" != typeof this.options.enabled &&
							"function" != typeof this.options.enabled &&
							"boolean" != typeof (0, F.resolveEnabled)(this.options.enabled, this.#d))
					)
						throw Error("Expected enabled to be a boolean or a callback that returns a boolean")
					this.#t(),
						this.#d.setOptions(this.options),
						b._defaulted &&
							!(0, F.shallowEqualObjects)(this.options, b) &&
							this.#a
								.getQueryCache()
								.notify({ type: "observerOptionsUpdated", query: this.#d, observer: this })
					let d = this.hasListeners()
					d && K(this.#d, c, this.options, b) && this.#p(),
						this.updateResult(),
						d &&
							(this.#d !== c ||
								(0, F.resolveEnabled)(this.options.enabled, this.#d) !==
									(0, F.resolveEnabled)(b.enabled, this.#d) ||
								(0, F.resolveStaleTime)(this.options.staleTime, this.#d) !==
									(0, F.resolveStaleTime)(b.staleTime, this.#d)) &&
							this.#u()
					let e = this.#v()
					d &&
						(this.#d !== c ||
							(0, F.resolveEnabled)(this.options.enabled, this.#d) !==
								(0, F.resolveEnabled)(b.enabled, this.#d) ||
							e !== this.#n) &&
						this.#w(e)
				}
				getOptimisticResult(a) {
					var b, c
					let d = this.#a.getQueryCache().build(this.#a, a),
						e = this.createResult(d, a)
					return (
						(b = this),
						(c = e),
						(0, F.shallowEqualObjects)(b.getCurrentResult(), c) ||
							((this.#f = e), (this.#h = this.options), (this.#g = this.#d.state)),
						e
					)
				}
				getCurrentResult() {
					return this.#f
				}
				trackResult(a, b) {
					return new Proxy(a, {
						get: (a, c) => (
							this.trackProp(c),
							b?.(c),
							"promise" === c &&
								(this.trackProp("data"),
								this.options.experimental_prefetchInRender ||
									"pending" !== this.#c.status ||
									this.#c.reject(Error("experimental_prefetchInRender feature flag is not enabled"))),
							Reflect.get(a, c)
						),
					})
				}
				trackProp(a) {
					this.#o.add(a)
				}
				getCurrentQuery() {
					return this.#d
				}
				refetch({ ...a } = {}) {
					return this.fetch({ ...a })
				}
				fetchOptimistic(a) {
					let b = this.#a.defaultQueryOptions(a),
						c = this.#a.getQueryCache().build(this.#a, b)
					return c.fetch().then(() => this.createResult(c, b))
				}
				fetch(a) {
					return this.#p({ ...a, cancelRefetch: a.cancelRefetch ?? !0 }).then(
						() => (this.updateResult(), this.#f),
					)
				}
				#p(a) {
					this.#t()
					let b = this.#d.fetch(this.options, a)
					return a?.throwOnError || (b = b.catch(F.noop)), b
				}
				#u() {
					this.#r()
					let a = (0, F.resolveStaleTime)(this.options.staleTime, this.#d)
					if (F.isServer || this.#f.isStale || !(0, F.isValidTimeout)(a)) return
					let b = (0, F.timeUntilStale)(this.#f.dataUpdatedAt, a)
					this.#l = G.timeoutManager.setTimeout(() => {
						this.#f.isStale || this.updateResult()
					}, b + 1)
				}
				#v() {
					return (
						("function" == typeof this.options.refetchInterval
							? this.options.refetchInterval(this.#d)
							: this.options.refetchInterval) ?? !1
					)
				}
				#w(a) {
					this.#s(),
						(this.#n = a),
						!F.isServer &&
							!1 !== (0, F.resolveEnabled)(this.options.enabled, this.#d) &&
							(0, F.isValidTimeout)(this.#n) &&
							0 !== this.#n &&
							(this.#m = G.timeoutManager.setInterval(() => {
								;(this.options.refetchIntervalInBackground || A.focusManager.isFocused()) && this.#p()
							}, this.#n))
				}
				#q() {
					this.#u(), this.#w(this.#v())
				}
				#r() {
					this.#l && (G.timeoutManager.clearTimeout(this.#l), (this.#l = void 0))
				}
				#s() {
					this.#m && (G.timeoutManager.clearInterval(this.#m), (this.#m = void 0))
				}
				createResult(a, b) {
					let c,
						d = this.#d,
						e = this.options,
						f = this.#f,
						g = this.#g,
						h = this.#h,
						i = a !== d ? a.state : this.#e,
						{ state: j } = a,
						k = { ...j },
						l = !1
					if (b._optimisticResults) {
						let c = this.hasListeners(),
							f = !c && I(a, b),
							g = c && K(a, d, b, e)
						;(f || g) && (k = { ...k, ...(0, C.fetchState)(j.data, a.options) }),
							"isRestoring" === b._optimisticResults && (k.fetchStatus = "idle")
					}
					let { error: m, errorUpdatedAt: n, status: o } = k
					c = k.data
					let p = !1
					if (void 0 !== b.placeholderData && void 0 === c && "pending" === o) {
						let a
						f?.isPlaceholderData && b.placeholderData === h?.placeholderData
							? ((a = f.data), (p = !0))
							: (a =
									"function" == typeof b.placeholderData
										? b.placeholderData(this.#k?.state.data, this.#k)
										: b.placeholderData),
							void 0 !== a && ((o = "success"), (c = (0, F.replaceData)(f?.data, a, b)), (l = !0))
					}
					if (b.select && void 0 !== c && !p)
						if (f && c === g?.data && b.select === this.#i) c = this.#j
						else
							try {
								;(this.#i = b.select),
									(c = b.select(c)),
									(c = (0, F.replaceData)(f?.data, c, b)),
									(this.#j = c),
									(this.#b = null)
							} catch (a) {
								this.#b = a
							}
					this.#b && ((m = this.#b), (c = this.#j), (n = Date.now()), (o = "error"))
					let q = "fetching" === k.fetchStatus,
						r = "pending" === o,
						s = "error" === o,
						t = r && q,
						u = void 0 !== c,
						v = {
							status: o,
							fetchStatus: k.fetchStatus,
							isPending: r,
							isSuccess: "success" === o,
							isError: s,
							isInitialLoading: t,
							isLoading: t,
							data: c,
							dataUpdatedAt: k.dataUpdatedAt,
							error: m,
							errorUpdatedAt: n,
							failureCount: k.fetchFailureCount,
							failureReason: k.fetchFailureReason,
							errorUpdateCount: k.errorUpdateCount,
							isFetched: k.dataUpdateCount > 0 || k.errorUpdateCount > 0,
							isFetchedAfterMount:
								k.dataUpdateCount > i.dataUpdateCount || k.errorUpdateCount > i.errorUpdateCount,
							isFetching: q,
							isRefetching: q && !r,
							isLoadingError: s && !u,
							isPaused: "paused" === k.fetchStatus,
							isPlaceholderData: l,
							isRefetchError: s && u,
							isStale: L(a, b),
							refetch: this.refetch,
							promise: this.#c,
							isEnabled: !1 !== (0, F.resolveEnabled)(b.enabled, a),
						}
					if (this.options.experimental_prefetchInRender) {
						let b = void 0 !== v.data,
							c = "error" === v.status && !b,
							e = (a) => {
								c ? a.reject(v.error) : b && a.resolve(v.data)
							},
							f = () => {
								e((this.#c = v.promise = (0, E.pendingThenable)()))
							},
							g = this.#c
						switch (g.status) {
							case "pending":
								a.queryHash === d.queryHash && e(g)
								break
							case "fulfilled":
								;(c || v.data !== g.value) && f()
								break
							case "rejected":
								;(c && v.error === g.reason) || f()
						}
					}
					return v
				}
				updateResult() {
					let a = this.#f,
						b = this.createResult(this.#d, this.options)
					if (
						((this.#g = this.#d.state),
						(this.#h = this.options),
						void 0 !== this.#g.data && (this.#k = this.#d),
						(0, F.shallowEqualObjects)(b, a))
					)
						return
					this.#f = b
					let c = () => {
						if (!a) return !0
						let { notifyOnChangeProps: b } = this.options,
							c = "function" == typeof b ? b() : b
						if ("all" === c || (!c && !this.#o.size)) return !0
						let d = new Set(c ?? this.#o)
						return (
							this.options.throwOnError && d.add("error"),
							Object.keys(this.#f).some((b) => this.#f[b] !== a[b] && d.has(b))
						)
					}
					this.#x({ listeners: c() })
				}
				#t() {
					let a = this.#a.getQueryCache().build(this.#a, this.options)
					if (a === this.#d) return
					let b = this.#d
					;(this.#d = a),
						(this.#e = a.state),
						this.hasListeners() && (b?.removeObserver(this), a.addObserver(this))
				}
				onQueryUpdate() {
					this.updateResult(), this.hasListeners() && this.#q()
				}
				#x(a) {
					B.notifyManager.batch(() => {
						a.listeners &&
							this.listeners.forEach((a) => {
								a(this.#f)
							}),
							this.#a.getQueryCache().notify({ query: this.#d, type: "observerResultsUpdated" })
					})
				}
			}
		function I(a, b) {
			return (
				(!1 !== (0, F.resolveEnabled)(b.enabled, a) &&
					void 0 === a.state.data &&
					("error" !== a.state.status || !1 !== b.retryOnMount)) ||
				(void 0 !== a.state.data && J(a, b, b.refetchOnMount))
			)
		}
		function J(a, b, c) {
			if (!1 !== (0, F.resolveEnabled)(b.enabled, a) && "static" !== (0, F.resolveStaleTime)(b.staleTime, a)) {
				let d = "function" == typeof c ? c(a) : c
				return "always" === d || (!1 !== d && L(a, b))
			}
			return !1
		}
		function K(a, b, c, d) {
			return (
				(a !== b || !1 === (0, F.resolveEnabled)(d.enabled, a)) &&
				(!c.suspense || "error" !== a.state.status) &&
				L(a, c)
			)
		}
		function L(a, b) {
			return (
				!1 !== (0, F.resolveEnabled)(b.enabled, a) && a.isStaleByTime((0, F.resolveStaleTime)(b.staleTime, a))
			)
		}
		var M = a.i(73321),
			N = u.createContext(
				((b = !1),
				{
					clearReset: () => {
						b = !1
					},
					reset: () => {
						b = !0
					},
					isReset: () => b,
				}),
			),
			O = u.createContext(!1)
		O.Provider
		var P = (a, b, c) =>
			b.fetchOptimistic(a).catch(() => {
				c.clearReset()
			})
		let Q = (a) => (a ? 1e6 * parseFloat(a) : void 0),
			R = z.z.object({
				id: z.z.string(),
				name: z.z.string(),
				description: z.z.string(),
				created: z.z.number(),
				context_length: z.z.number(),
				pricing: z.z.object({ prompt: z.z.string().optional(), completion: z.z.string().optional() }),
				top_provider: z.z.object({ max_completion_tokens: z.z.number().nullish() }).optional(),
				architecture: z.z
					.object({
						input_modalities: z.z.array(z.z.string()).nullish(),
						output_modalities: z.z.array(z.z.string()).nullish(),
					})
					.optional(),
			}),
			S = async () => {
				let a = await fetch("https://openrouter.ai/api/v1/models")
				if (!a.ok) return console.error("Failed to fetch OpenRouter models"), {}
				let b = z.z.object({ data: z.z.array(R) }).safeParse(await a.json())
				return b.success
					? b.data.data
							.filter((a) => !a.architecture?.output_modalities?.includes("image"))
							.sort((a, b) => a.name.localeCompare(b.name))
							.map((a) => ({
								...a,
								modelInfo: {
									maxTokens: a.top_provider?.max_completion_tokens ?? void 0,
									contextWindow: a.context_length,
									inputPrice: Q(a.pricing?.prompt),
									outputPrice: Q(a.pricing?.completion),
									description: a.description,
									supportsPromptCache: !1,
									supportsImages: a.architecture?.input_modalities?.includes("image") ?? !1,
									supportsThinking: !1,
									tiers: [],
								},
							}))
							.reduce((a, b) => ((a[b.id] = b), a), {})
					: (console.error(b.error), {})
			}
		a.i(46951)
		var T = a.i(99953),
			U = a.i(19714),
			V = a.i(13292),
			W = a.i(69661),
			X = a.i(39585),
			Y = a.i(65953),
			Z = a.i(58535),
			$ = a.i(39337)
		function _(a, b) {
			if (!a) throw Error("Invariant failed")
		}
		var aa = a.i(54677),
			ab = a.i(65188),
			ac = ["children", "className"]
		function ad() {
			return (ad = Object.assign.bind()).apply(this, arguments)
		}
		var ae = u.default.forwardRef(function (a, b) {
				var c = a.children,
					d = a.className,
					e = (function (a, b) {
						if (null == a) return {}
						var c,
							d,
							e = (function (a, b) {
								if (null == a) return {}
								var c = {}
								for (var d in a)
									if (Object.prototype.hasOwnProperty.call(a, d)) {
										if (b.indexOf(d) >= 0) continue
										c[d] = a[d]
									}
								return c
							})(a, b)
						if (Object.getOwnPropertySymbols) {
							var f = Object.getOwnPropertySymbols(a)
							for (d = 0; d < f.length; d++)
								(c = f[d]),
									!(b.indexOf(c) >= 0) &&
										Object.prototype.propertyIsEnumerable.call(a, c) &&
										(e[c] = a[c])
						}
						return e
					})(a, ac),
					f = (0, $.default)("recharts-layer", d)
				return u.default.createElement("g", ad({ className: f }, (0, ab.filterProps)(e, !0), { ref: b }), c)
			}),
			af = a.i(80261),
			ag = a.i(50513),
			ah = a.i(39320)
		function ai() {
			return (ai = Object.assign.bind()).apply(this, arguments)
		}
		var aj = function (a) {
				var b = a.cx,
					c = a.cy,
					d = a.r,
					e = a.className,
					f = (0, $.default)("recharts-dot", e)
				return b === +b && c === +c && d === +d
					? u.createElement(
							"circle",
							ai({}, (0, ab.filterProps)(a, !1), (0, ah.adaptEventHandlers)(a), {
								className: f,
								cx: b,
								cy: c,
								r: d,
							}),
						)
					: null
			},
			ak = a.i(5783),
			al = Object.getOwnPropertyNames,
			am = Object.getOwnPropertySymbols,
			an = Object.prototype.hasOwnProperty
		function ao(a, b) {
			return function (c, d, e) {
				return a(c, d, e) && b(c, d, e)
			}
		}
		function ap(a) {
			return function (b, c, d) {
				if (!b || !c || "object" != typeof b || "object" != typeof c) return a(b, c, d)
				var e = d.cache,
					f = e.get(b),
					g = e.get(c)
				if (f && g) return f === c && g === b
				e.set(b, c), e.set(c, b)
				var h = a(b, c, d)
				return e.delete(b), e.delete(c), h
			}
		}
		function aq(a) {
			return al(a).concat(am(a))
		}
		var ar =
			Object.hasOwn ||
			function (a, b) {
				return an.call(a, b)
			}
		function as(a, b) {
			return a === b || (!a && !b && a != a && b != b)
		}
		var at = Object.getOwnPropertyDescriptor,
			au = Object.keys
		function av(a, b, c) {
			var d = a.length
			if (b.length !== d) return !1
			for (; d-- > 0; ) if (!c.equals(a[d], b[d], d, d, a, b, c)) return !1
			return !0
		}
		function aw(a, b) {
			return as(a.getTime(), b.getTime())
		}
		function ax(a, b) {
			return a.name === b.name && a.message === b.message && a.cause === b.cause && a.stack === b.stack
		}
		function ay(a, b) {
			return a === b
		}
		function az(a, b, c) {
			var d,
				e,
				f = a.size
			if (f !== b.size) return !1
			if (!f) return !0
			for (var g = Array(f), h = a.entries(), i = 0; (d = h.next()) && !d.done; ) {
				for (var j = b.entries(), k = !1, l = 0; (e = j.next()) && !e.done; ) {
					if (g[l]) {
						l++
						continue
					}
					var m = d.value,
						n = e.value
					if (c.equals(m[0], n[0], i, l, a, b, c) && c.equals(m[1], n[1], m[0], n[0], a, b, c)) {
						k = g[l] = !0
						break
					}
					l++
				}
				if (!k) return !1
				i++
			}
			return !0
		}
		function aA(a, b, c) {
			var d = au(a),
				e = d.length
			if (au(b).length !== e) return !1
			for (; e-- > 0; ) if (!aH(a, b, c, d[e])) return !1
			return !0
		}
		function aB(a, b, c) {
			var d,
				e,
				f,
				g = aq(a),
				h = g.length
			if (aq(b).length !== h) return !1
			for (; h-- > 0; )
				if (
					!aH(a, b, c, (d = g[h])) ||
					((e = at(a, d)),
					(f = at(b, d)),
					(e || f) &&
						(!e ||
							!f ||
							e.configurable !== f.configurable ||
							e.enumerable !== f.enumerable ||
							e.writable !== f.writable))
				)
					return !1
			return !0
		}
		function aC(a, b) {
			return as(a.valueOf(), b.valueOf())
		}
		function aD(a, b) {
			return a.source === b.source && a.flags === b.flags
		}
		function aE(a, b, c) {
			var d,
				e,
				f = a.size
			if (f !== b.size) return !1
			if (!f) return !0
			for (var g = Array(f), h = a.values(); (d = h.next()) && !d.done; ) {
				for (var i = b.values(), j = !1, k = 0; (e = i.next()) && !e.done; ) {
					if (!g[k] && c.equals(d.value, e.value, d.value, e.value, a, b, c)) {
						j = g[k] = !0
						break
					}
					k++
				}
				if (!j) return !1
			}
			return !0
		}
		function aF(a, b) {
			var c = a.length
			if (b.length !== c) return !1
			for (; c-- > 0; ) if (a[c] !== b[c]) return !1
			return !0
		}
		function aG(a, b) {
			return (
				a.hostname === b.hostname &&
				a.pathname === b.pathname &&
				a.protocol === b.protocol &&
				a.port === b.port &&
				a.hash === b.hash &&
				a.username === b.username &&
				a.password === b.password
			)
		}
		function aH(a, b, c, d) {
			return (
				(("_owner" === d || "__o" === d || "__v" === d) && (!!a.$$typeof || !!b.$$typeof)) ||
				(ar(b, d) && c.equals(a[d], b[d], d, d, a, b, c))
			)
		}
		var aI = Array.isArray,
			aJ = "function" == typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView : null,
			aK = Object.assign,
			aL = Object.prototype.toString.call.bind(Object.prototype.toString),
			aM = aN()
		function aN(a) {
			void 0 === a && (a = {})
			var b,
				c,
				d,
				e,
				f,
				g,
				h,
				i,
				j,
				k,
				l,
				m,
				n,
				o = a.circular,
				p = a.createInternalComparator,
				q = a.createState,
				r = a.strict,
				s =
					((c = (b = (function (a) {
						var b = a.circular,
							c = a.createCustomConfig,
							d = a.strict,
							e = {
								areArraysEqual: d ? aB : av,
								areDatesEqual: aw,
								areErrorsEqual: ax,
								areFunctionsEqual: ay,
								areMapsEqual: d ? ao(az, aB) : az,
								areNumbersEqual: as,
								areObjectsEqual: d ? aB : aA,
								arePrimitiveWrappersEqual: aC,
								areRegExpsEqual: aD,
								areSetsEqual: d ? ao(aE, aB) : aE,
								areTypedArraysEqual: d ? aB : aF,
								areUrlsEqual: aG,
							}
						if ((c && (e = aK({}, e, c(e))), b)) {
							var f = ap(e.areArraysEqual),
								g = ap(e.areMapsEqual),
								h = ap(e.areObjectsEqual),
								i = ap(e.areSetsEqual)
							e = aK({}, e, { areArraysEqual: f, areMapsEqual: g, areObjectsEqual: h, areSetsEqual: i })
						}
						return e
					})(a)).areArraysEqual),
					(d = b.areDatesEqual),
					(e = b.areErrorsEqual),
					(f = b.areFunctionsEqual),
					(g = b.areMapsEqual),
					(h = b.areNumbersEqual),
					(i = b.areObjectsEqual),
					(j = b.arePrimitiveWrappersEqual),
					(k = b.areRegExpsEqual),
					(l = b.areSetsEqual),
					(m = b.areTypedArraysEqual),
					(n = b.areUrlsEqual),
					function (a, b, o) {
						if (a === b) return !0
						if (null == a || null == b) return !1
						var p = typeof a
						if (p !== typeof b) return !1
						if ("object" !== p) return "number" === p ? h(a, b, o) : "function" === p && f(a, b, o)
						var q = a.constructor
						if (q !== b.constructor) return !1
						if (q === Object) return i(a, b, o)
						if (aI(a)) return c(a, b, o)
						if (null != aJ && aJ(a)) return m(a, b, o)
						if (q === Date) return d(a, b, o)
						if (q === RegExp) return k(a, b, o)
						if (q === Map) return g(a, b, o)
						if (q === Set) return l(a, b, o)
						var r = aL(a)
						return "[object Date]" === r
							? d(a, b, o)
							: "[object RegExp]" === r
								? k(a, b, o)
								: "[object Map]" === r
									? g(a, b, o)
									: "[object Set]" === r
										? l(a, b, o)
										: "[object Object]" === r
											? "function" != typeof a.then && "function" != typeof b.then && i(a, b, o)
											: "[object URL]" === r
												? n(a, b, o)
												: "[object Error]" === r
													? e(a, b, o)
													: "[object Arguments]" === r
														? i(a, b, o)
														: ("[object Boolean]" === r ||
																"[object Number]" === r ||
																"[object String]" === r) &&
															j(a, b, o)
					}),
				t = p
					? p(s)
					: function (a, b, c, d, e, f, g) {
							return s(a, b, g)
						}
			return (function (a) {
				var b = a.circular,
					c = a.comparator,
					d = a.createState,
					e = a.equals,
					f = a.strict
				if (d)
					return function (a, g) {
						var h = d(),
							i = h.cache
						return c(a, g, {
							cache: void 0 === i ? (b ? new WeakMap() : void 0) : i,
							equals: e,
							meta: h.meta,
							strict: f,
						})
					}
				if (b)
					return function (a, b) {
						return c(a, b, { cache: new WeakMap(), equals: e, meta: void 0, strict: f })
					}
				var g = { cache: void 0, equals: e, meta: void 0, strict: f }
				return function (a, b) {
					return c(a, b, g)
				}
			})({ circular: void 0 !== o && o, comparator: s, createState: q, equals: t, strict: void 0 !== r && r })
		}
		function aO(a) {
			var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
				c = -1
			requestAnimationFrame(function d(e) {
				if ((c < 0 && (c = e), e - c > b)) a(e), (c = -1)
				else {
					var f
					;(f = d), "u" > typeof requestAnimationFrame && requestAnimationFrame(f)
				}
			})
		}
		function aP(a) {
			return (aP =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function aQ(a, b) {
			;(null == b || b > a.length) && (b = a.length)
			for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]
			return d
		}
		function aR(a) {
			return (aR =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function aS(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function aT(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? aS(Object(c), !0).forEach(function (b) {
							aU(a, b, c[b])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: aS(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		function aU(a, b, c) {
			var d
			return (
				((d = (function (a, b) {
					if ("object" !== aR(a) || null === a) return a
					var c = a[Symbol.toPrimitive]
					if (void 0 !== c) {
						var d = c.call(a, b || "default")
						if ("object" !== aR(d)) return d
						throw TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === b ? String : Number)(a)
				})(b, "string")),
				(b = "symbol" === aR(d) ? d : String(d)) in a)
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		aN({ strict: !0 }),
			aN({ circular: !0 }),
			aN({ circular: !0, strict: !0 }),
			aN({
				createInternalComparator: function () {
					return as
				},
			}),
			aN({
				strict: !0,
				createInternalComparator: function () {
					return as
				},
			}),
			aN({
				circular: !0,
				createInternalComparator: function () {
					return as
				},
			}),
			aN({
				circular: !0,
				createInternalComparator: function () {
					return as
				},
				strict: !0,
			})
		var aV = function (a) {
				return a
			},
			aW = function (a, b) {
				return Object.keys(b).reduce(function (c, d) {
					return aT(aT({}, c), {}, aU({}, d, a(d, b[d])))
				}, {})
			},
			aX = function (a, b, c) {
				return a
					.map(function (a) {
						return ""
							.concat(
								a.replace(/([A-Z])/g, function (a) {
									return "-".concat(a.toLowerCase())
								}),
								" ",
							)
							.concat(b, "ms ")
							.concat(c)
					})
					.join(",")
			},
			aY = function (a, b, c, d, e, f, g, h) {}
		function aZ(a, b) {
			if (a) {
				if ("string" == typeof a) return a$(a, b)
				var c = Object.prototype.toString.call(a).slice(8, -1)
				if (("Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c))
					return Array.from(a)
				if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return a$(a, b)
			}
		}
		function a$(a, b) {
			;(null == b || b > a.length) && (b = a.length)
			for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]
			return d
		}
		var a_ = function (a, b) {
				return [0, 3 * a, 3 * b - 6 * a, 3 * a - 3 * b + 1]
			},
			a0 = function (a, b) {
				return a
					.map(function (a, c) {
						return a * Math.pow(b, c)
					})
					.reduce(function (a, b) {
						return a + b
					})
			},
			a1 = function (a, b) {
				return function (c) {
					return a0(a_(a, b), c)
				}
			},
			a2 = function () {
				for (var a, b, c = arguments.length, d = Array(c), e = 0; e < c; e++) d[e] = arguments[e]
				var f = d[0],
					g = d[1],
					h = d[2],
					i = d[3]
				if (1 === d.length)
					switch (d[0]) {
						case "linear":
							;(f = 0), (g = 0), (h = 1), (i = 1)
							break
						case "ease":
							;(f = 0.25), (g = 0.1), (h = 0.25), (i = 1)
							break
						case "ease-in":
							;(f = 0.42), (g = 0), (h = 1), (i = 1)
							break
						case "ease-out":
							;(f = 0.42), (g = 0), (h = 0.58), (i = 1)
							break
						case "ease-in-out":
							;(f = 0), (g = 0), (h = 0.58), (i = 1)
							break
						default:
							var j = d[0].split("(")
							if ("cubic-bezier" === j[0] && 4 === j[1].split(")")[0].split(",").length) {
								var k,
									l =
										(function (a) {
											if (Array.isArray(a)) return a
										})(
											(k = j[1]
												.split(")")[0]
												.split(",")
												.map(function (a) {
													return parseFloat(a)
												})),
										) ||
										(function (a, b) {
											var c =
												null == a
													? null
													: ("u" > typeof Symbol && a[Symbol.iterator]) || a["@@iterator"]
											if (null != c) {
												var d,
													e,
													f,
													g,
													h = [],
													i = !0,
													j = !1
												try {
													;(f = (c = c.call(a)).next), !1
													for (
														;
														!(i = (d = f.call(c)).done) &&
														(h.push(d.value), 4 !== h.length);
														i = !0
													);
												} catch (a) {
													;(j = !0), (e = a)
												} finally {
													try {
														if (
															!i &&
															null != c.return &&
															((g = c.return()), Object(g) !== g)
														)
															return
													} finally {
														if (j) throw e
													}
												}
												return h
											}
										})(k, 4) ||
										aZ(k, 4) ||
										(function () {
											throw TypeError(
												"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
											)
										})()
								;(f = l[0]), (g = l[1]), (h = l[2]), (i = l[3])
							} else
								aY(
									!1,
									"[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s",
									d,
								)
					}
				aY(
					[f, h, g, i].every(function (a) {
						return "number" == typeof a && a >= 0 && a <= 1
					}),
					"[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s",
					d,
				)
				var m = a1(f, h),
					n = a1(g, i),
					o =
						((a = f),
						(b = h),
						function (c) {
							var d
							return a0(
								[].concat(
									(function (a) {
										if (Array.isArray(a)) return a$(a)
									})(
										(d = a_(a, b)
											.map(function (a, b) {
												return a * b
											})
											.slice(1)),
									) ||
										(function (a) {
											if (
												("u" > typeof Symbol && null != a[Symbol.iterator]) ||
												null != a["@@iterator"]
											)
												return Array.from(a)
										})(d) ||
										aZ(d) ||
										(function () {
											throw TypeError(
												"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
											)
										})(),
									[0],
								),
								c,
							)
						}),
					p = function (a) {
						for (var b = a > 1 ? 1 : a, c = b, d = 0; d < 8; ++d) {
							var e,
								f = m(c) - b,
								g = o(c)
							if (1e-4 > Math.abs(f - b) || g < 1e-4) break
							c = (e = c - f / g) > 1 ? 1 : e < 0 ? 0 : e
						}
						return n(c)
					}
				return (p.isStepper = !1), p
			},
			a3 = function () {
				var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					b = a.stiff,
					c = void 0 === b ? 100 : b,
					d = a.damping,
					e = void 0 === d ? 8 : d,
					f = a.dt,
					g = void 0 === f ? 17 : f,
					h = function (a, b, d) {
						var f = d + ((-(a - b) * c - d * e) * g) / 1e3,
							h = (d * g) / 1e3 + a
						return 1e-4 > Math.abs(h - b) && 1e-4 > Math.abs(f) ? [b, 0] : [h, f]
					}
				return (h.isStepper = !0), (h.dt = g), h
			},
			a4 = function () {
				for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c]
				var d = b[0]
				if ("string" == typeof d)
					switch (d) {
						case "ease":
						case "ease-in-out":
						case "ease-out":
						case "ease-in":
						case "linear":
							return a2(d)
						case "spring":
							return a3()
						default:
							if ("cubic-bezier" === d.split("(")[0]) return a2(d)
							aY(
								!1,
								"[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s",
								b,
							)
					}
				return "function" == typeof d
					? d
					: (aY(
							!1,
							"[configEasing]: first argument type should be function or string, instead received %s",
							b,
						),
						null)
			}
		function a5(a) {
			return (a5 =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function a6(a) {
			return (
				(function (a) {
					if (Array.isArray(a)) return bb(a)
				})(a) ||
				(function (a) {
					if (("u" > typeof Symbol && null != a[Symbol.iterator]) || null != a["@@iterator"])
						return Array.from(a)
				})(a) ||
				ba(a) ||
				(function () {
					throw TypeError(
						"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function a7(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function a8(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? a7(Object(c), !0).forEach(function (b) {
							a9(a, b, c[b])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: a7(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		function a9(a, b, c) {
			var d
			return (
				((d = (function (a, b) {
					if ("object" !== a5(a) || null === a) return a
					var c = a[Symbol.toPrimitive]
					if (void 0 !== c) {
						var d = c.call(a, b || "default")
						if ("object" !== a5(d)) return d
						throw TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === b ? String : Number)(a)
				})(b, "string")),
				(b = "symbol" === a5(d) ? d : String(d)) in a)
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		function ba(a, b) {
			if (a) {
				if ("string" == typeof a) return bb(a, b)
				var c = Object.prototype.toString.call(a).slice(8, -1)
				if (("Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c))
					return Array.from(a)
				if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return bb(a, b)
			}
		}
		function bb(a, b) {
			;(null == b || b > a.length) && (b = a.length)
			for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]
			return d
		}
		var bc = function (a, b, c) {
				return a + (b - a) * c
			},
			bd = function (a) {
				return a.from !== a.to
			},
			be = function a(b, c, d) {
				var e = aW(function (a, c) {
					if (bd(c)) {
						var d,
							e =
								(function (a) {
									if (Array.isArray(a)) return a
								})((d = b(c.from, c.to, c.velocity))) ||
								(function (a, b) {
									var c =
										null == a
											? null
											: ("u" > typeof Symbol && a[Symbol.iterator]) || a["@@iterator"]
									if (null != c) {
										var d,
											e,
											f,
											g,
											h = [],
											i = !0,
											j = !1
										try {
											;(f = (c = c.call(a)).next), !1
											for (
												;
												!(i = (d = f.call(c)).done) && (h.push(d.value), 2 !== h.length);
												i = !0
											);
										} catch (a) {
											;(j = !0), (e = a)
										} finally {
											try {
												if (!i && null != c.return && ((g = c.return()), Object(g) !== g))
													return
											} finally {
												if (j) throw e
											}
										}
										return h
									}
								})(d, 2) ||
								ba(d, 2) ||
								(function () {
									throw TypeError(
										"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
									)
								})(),
							f = e[0],
							g = e[1]
						return a8(a8({}, c), {}, { from: f, velocity: g })
					}
					return c
				}, c)
				return d < 1
					? aW(function (a, b) {
							return bd(b)
								? a8(
										a8({}, b),
										{},
										{ velocity: bc(b.velocity, e[a].velocity, d), from: bc(b.from, e[a].from, d) },
									)
								: b
						}, c)
					: a(b, e, d - 1)
			}
		let bf = function (a, b, c, d, e) {
			var f,
				g,
				h = [Object.keys(a), Object.keys(b)].reduce(function (a, b) {
					return a.filter(function (a) {
						return b.includes(a)
					})
				}),
				i = h.reduce(function (c, d) {
					return a8(a8({}, c), {}, a9({}, d, [a[d], b[d]]))
				}, {}),
				j = h.reduce(function (c, d) {
					return a8(a8({}, c), {}, a9({}, d, { from: a[d], velocity: 0, to: b[d] }))
				}, {}),
				k = -1,
				l = function () {
					return null
				}
			return (
				(l = c.isStepper
					? function (d) {
							f || (f = d)
							var g = (d - f) / c.dt
							;(j = be(c, j, g)),
								e(
									a8(
										a8(a8({}, a), b),
										aW(function (a, b) {
											return b.from
										}, j),
									),
								),
								(f = d),
								Object.values(j).filter(bd).length && (k = requestAnimationFrame(l))
						}
					: function (f) {
							g || (g = f)
							var h = (f - g) / d,
								j = aW(function (a, b) {
									return bc.apply(void 0, a6(b).concat([c(h)]))
								}, i)
							if ((e(a8(a8(a8({}, a), b), j)), h < 1)) k = requestAnimationFrame(l)
							else {
								var m = aW(function (a, b) {
									return bc.apply(void 0, a6(b).concat([c(1)]))
								}, i)
								e(a8(a8(a8({}, a), b), m))
							}
						}),
				function () {
					return (
						requestAnimationFrame(l),
						function () {
							cancelAnimationFrame(k)
						}
					)
				}
			)
		}
		function bg(a) {
			return (bg =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		var bh = [
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
		function bi(a) {
			return (
				(function (a) {
					if (Array.isArray(a)) return bj(a)
				})(a) ||
				(function (a) {
					if (("u" > typeof Symbol && null != a[Symbol.iterator]) || null != a["@@iterator"])
						return Array.from(a)
				})(a) ||
				(function (a, b) {
					if (a) {
						if ("string" == typeof a) return bj(a, void 0)
						var c = Object.prototype.toString.call(a).slice(8, -1)
						if (("Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c))
							return Array.from(a)
						if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
							return bj(a, void 0)
					}
				})(a) ||
				(function () {
					throw TypeError(
						"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function bj(a, b) {
			;(null == b || b > a.length) && (b = a.length)
			for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]
			return d
		}
		function bk(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function bl(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? bk(Object(c), !0).forEach(function (b) {
							bm(a, b, c[b])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: bk(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		function bm(a, b, c) {
			return (
				(b = bn(b)) in a
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		function bn(a) {
			var b = (function (a, b) {
				if ("object" !== bg(a) || null === a) return a
				var c = a[Symbol.toPrimitive]
				if (void 0 !== c) {
					var d = c.call(a, b || "default")
					if ("object" !== bg(d)) return d
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === b ? String : Number)(a)
			})(a, "string")
			return "symbol" === bg(b) ? b : String(b)
		}
		function bo(a, b) {
			return (bo = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (a, b) {
						return (a.__proto__ = b), a
					})(a, b)
		}
		function bp(a, b) {
			if (b && ("object" === bg(b) || "function" == typeof b)) return b
			if (void 0 !== b) throw TypeError("Derived constructors may only return object or undefined")
			return bq(a)
		}
		function bq(a) {
			if (void 0 === a) throw ReferenceError("this hasn't been initialised - super() hasn't been called")
			return a
		}
		function br(a) {
			return (br = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (a) {
						return a.__proto__ || Object.getPrototypeOf(a)
					})(a)
		}
		var bs = (function (a) {
			if ("function" != typeof a && null !== a)
				throw TypeError("Super expression must either be null or a function")
			;(e.prototype = Object.create(a && a.prototype, {
				constructor: { value: e, writable: !0, configurable: !0 },
			})),
				Object.defineProperty(e, "prototype", { writable: !1 }),
				a && bo(e, a)
			var b,
				c,
				d =
					((b = (function () {
						if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1
						if ("function" == typeof Proxy) return !0
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
						} catch (a) {
							return !1
						}
					})()),
					function () {
						var a,
							c = br(e)
						return (
							(a = b ? Reflect.construct(c, arguments, br(this).constructor) : c.apply(this, arguments)),
							bp(this, a)
						)
					})
			function e(a, b) {
				if (!(this instanceof e)) throw TypeError("Cannot call a class as a function")
				var c = d.call(this, a, b),
					f = c.props,
					g = f.isActive,
					h = f.attributeName,
					i = f.from,
					j = f.to,
					k = f.steps,
					l = f.children,
					m = f.duration
				if (
					((c.handleStyleChange = c.handleStyleChange.bind(bq(c))),
					(c.changeStyle = c.changeStyle.bind(bq(c))),
					!g || m <= 0)
				)
					return (c.state = { style: {} }), "function" == typeof l && (c.state = { style: j }), bp(c)
				if (k && k.length) c.state = { style: k[0].style }
				else if (i) {
					if ("function" == typeof l) return (c.state = { style: i }), bp(c)
					c.state = { style: h ? bm({}, h, i) : i }
				} else c.state = { style: {} }
				return c
			}
			return (
				(c = [
					{
						key: "componentDidMount",
						value: function () {
							var a = this.props,
								b = a.isActive,
								c = a.canBegin
							;(this.mounted = !0), b && c && this.runAnimation(this.props)
						},
					},
					{
						key: "componentDidUpdate",
						value: function (a) {
							var b = this.props,
								c = b.isActive,
								d = b.canBegin,
								e = b.attributeName,
								f = b.shouldReAnimate,
								g = b.to,
								h = b.from,
								i = this.state.style
							if (d) {
								if (!c) {
									var j = { style: e ? bm({}, e, g) : g }
									this.state && i && ((e && i[e] !== g) || (!e && i !== g)) && this.setState(j)
									return
								}
								if (!aM(a.to, g) || !a.canBegin || !a.isActive) {
									var k = !a.canBegin || !a.isActive
									this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation()
									var l = k || f ? h : a.to
									if (this.state && i) {
										var m = { style: e ? bm({}, e, l) : l }
										;((e && i[e] !== l) || (!e && i !== l)) && this.setState(m)
									}
									this.runAnimation(bl(bl({}, this.props), {}, { from: l, begin: 0 }))
								}
							}
						},
					},
					{
						key: "componentWillUnmount",
						value: function () {
							this.mounted = !1
							var a = this.props.onAnimationEnd
							this.unSubscribe && this.unSubscribe(),
								this.manager && (this.manager.stop(), (this.manager = null)),
								this.stopJSAnimation && this.stopJSAnimation(),
								a && a()
						},
					},
					{
						key: "handleStyleChange",
						value: function (a) {
							this.changeStyle(a)
						},
					},
					{
						key: "changeStyle",
						value: function (a) {
							this.mounted && this.setState({ style: a })
						},
					},
					{
						key: "runJSAnimation",
						value: function (a) {
							var b = this,
								c = a.from,
								d = a.to,
								e = a.duration,
								f = a.easing,
								g = a.begin,
								h = a.onAnimationEnd,
								i = a.onAnimationStart,
								j = bf(c, d, a4(f), e, this.changeStyle)
							this.manager.start([
								i,
								g,
								function () {
									b.stopJSAnimation = j()
								},
								e,
								h,
							])
						},
					},
					{
						key: "runStepAnimation",
						value: function (a) {
							var b = this,
								c = a.steps,
								d = a.begin,
								e = a.onAnimationStart,
								f = c[0],
								g = f.style,
								h = f.duration
							return this.manager.start(
								[e].concat(
									bi(
										c.reduce(
											function (a, d, e) {
												if (0 === e) return a
												var f = d.duration,
													g = d.easing,
													h = void 0 === g ? "ease" : g,
													i = d.style,
													j = d.properties,
													k = d.onAnimationEnd,
													l = e > 0 ? c[e - 1] : d,
													m = j || Object.keys(i)
												if ("function" == typeof h || "spring" === h)
													return [].concat(bi(a), [
														b.runJSAnimation.bind(b, {
															from: l.style,
															to: i,
															duration: f,
															easing: h,
														}),
														f,
													])
												var n = aX(m, f, h),
													o = bl(bl(bl({}, l.style), i), {}, { transition: n })
												return [].concat(bi(a), [o, f, k]).filter(aV)
											},
											[g, Math.max(void 0 === h ? 0 : h, d)],
										),
									),
									[a.onAnimationEnd],
								),
							)
						},
					},
					{
						key: "runAnimation",
						value: function (a) {
							this.manager ||
								(this.manager =
									((b = function () {
										return null
									}),
									(c = !1),
									(d = function a(d) {
										if (!c) {
											if (Array.isArray(d)) {
												if (!d.length) return
												var e =
														(function (a) {
															if (Array.isArray(a)) return a
														})(d) ||
														(function (a) {
															if (
																("u" > typeof Symbol && null != a[Symbol.iterator]) ||
																null != a["@@iterator"]
															)
																return Array.from(a)
														})(d) ||
														(function (a, b) {
															if (a) {
																if ("string" == typeof a) return aQ(a, void 0)
																var c = Object.prototype.toString.call(a).slice(8, -1)
																if (
																	("Object" === c &&
																		a.constructor &&
																		(c = a.constructor.name),
																	"Map" === c || "Set" === c)
																)
																	return Array.from(a)
																if (
																	"Arguments" === c ||
																	/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
																)
																	return aQ(a, void 0)
															}
														})(d) ||
														(function () {
															throw TypeError(
																"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
															)
														})(),
													f = e[0],
													g = e.slice(1)
												return "number" == typeof f
													? void aO(a.bind(null, g), f)
													: (a(f), void aO(a.bind(null, g)))
											}
											"object" === aP(d) && b(d), "function" == typeof d && d()
										}
									}),
									{
										stop: function () {
											c = !0
										},
										start: function (a) {
											;(c = !1), d(a)
										},
										subscribe: function (a) {
											return (
												(b = a),
												function () {
													b = function () {
														return null
													}
												}
											)
										},
									}))
							var b,
								c,
								d,
								e = a.begin,
								f = a.duration,
								g = a.attributeName,
								h = a.to,
								i = a.easing,
								j = a.onAnimationStart,
								k = a.onAnimationEnd,
								l = a.steps,
								m = a.children,
								n = this.manager
							if (
								((this.unSubscribe = n.subscribe(this.handleStyleChange)),
								"function" == typeof i || "function" == typeof m || "spring" === i)
							)
								return void this.runJSAnimation(a)
							if (l.length > 1) return void this.runStepAnimation(a)
							var o = g ? bm({}, g, h) : h,
								p = aX(Object.keys(o), f, i)
							n.start([j, e, bl(bl({}, o), {}, { transition: p }), f, k])
						},
					},
					{
						key: "render",
						value: function () {
							var a = this.props,
								b = a.children,
								c = (a.begin, a.duration),
								d = (a.attributeName, a.easing, a.isActive),
								e =
									(a.steps,
									a.from,
									a.to,
									a.canBegin,
									a.onAnimationEnd,
									a.shouldReAnimate,
									a.onAnimationReStart,
									(function (a, b) {
										if (null == a) return {}
										var c,
											d,
											e = (function (a, b) {
												if (null == a) return {}
												var c,
													d,
													e = {},
													f = Object.keys(a)
												for (d = 0; d < f.length; d++)
													(c = f[d]), b.indexOf(c) >= 0 || (e[c] = a[c])
												return e
											})(a, b)
										if (Object.getOwnPropertySymbols) {
											var f = Object.getOwnPropertySymbols(a)
											for (d = 0; d < f.length; d++)
												(c = f[d]),
													!(b.indexOf(c) >= 0) &&
														Object.prototype.propertyIsEnumerable.call(a, c) &&
														(e[c] = a[c])
										}
										return e
									})(a, bh)),
								f = u.Children.count(b),
								g = this.state.style
							if ("function" == typeof b) return b(g)
							if (!d || 0 === f || c <= 0) return b
							var h = function (a) {
								var b = a.props,
									c = b.style,
									d = b.className
								return (0, u.cloneElement)(
									a,
									bl(bl({}, e), {}, { style: bl(bl({}, void 0 === c ? {} : c), g), className: d }),
								)
							}
							return 1 === f
								? h(u.Children.only(b))
								: u.default.createElement(
										"div",
										null,
										u.Children.map(b, function (a) {
											return h(a)
										}),
									)
						},
					},
				]),
				(function (a, b) {
					for (var c = 0; c < b.length; c++) {
						var d = b[c]
						;(d.enumerable = d.enumerable || !1),
							(d.configurable = !0),
							"value" in d && (d.writable = !0),
							Object.defineProperty(a, bn(d.key), d)
					}
				})(e.prototype, c),
				Object.defineProperty(e, "prototype", { writable: !1 }),
				e
			)
		})(u.PureComponent)
		function bt(a, b) {
			if (null == a) return {}
			var c = {}
			for (var d in a)
				if ({}.hasOwnProperty.call(a, d)) {
					if (-1 !== b.indexOf(d)) continue
					c[d] = a[d]
				}
			return c
		}
		function bu() {
			return (bu = Object.assign.bind()).apply(null, arguments)
		}
		function bv(a, b) {
			return (bv = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (a, b) {
						return (a.__proto__ = b), a
					})(a, b)
		}
		function bw(a, b) {
			;(a.prototype = Object.create(b.prototype)), (a.prototype.constructor = a), bv(a, b)
		}
		;(bs.displayName = "Animate"),
			(bs.defaultProps = {
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
			(bs.propTypes = {
				from: ak.default.oneOfType([ak.default.object, ak.default.string]),
				to: ak.default.oneOfType([ak.default.object, ak.default.string]),
				attributeName: ak.default.string,
				duration: ak.default.number,
				begin: ak.default.number,
				easing: ak.default.oneOfType([ak.default.string, ak.default.func]),
				steps: ak.default.arrayOf(
					ak.default.shape({
						duration: ak.default.number.isRequired,
						style: ak.default.object.isRequired,
						easing: ak.default.oneOfType([
							ak.default.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]),
							ak.default.func,
						]),
						properties: ak.default.arrayOf("string"),
						onAnimationEnd: ak.default.func,
					}),
				),
				children: ak.default.oneOfType([ak.default.node, ak.default.func]),
				isActive: ak.default.bool,
				canBegin: ak.default.bool,
				onAnimationEnd: ak.default.func,
				shouldReAnimate: ak.default.bool,
				onAnimationStart: ak.default.func,
				onAnimationReStart: ak.default.func,
			})
		let bx = u.default.createContext(null)
		function by(a, b) {
			var c = Object.create(null)
			return (
				a &&
					u.Children.map(a, function (a) {
						return a
					}).forEach(function (a) {
						c[a.key] = b && (0, u.isValidElement)(a) ? b(a) : a
					}),
				c
			)
		}
		function bz(a, b, c) {
			return null != c[b] ? c[b] : a.props[b]
		}
		var bA =
				Object.values ||
				function (a) {
					return Object.keys(a).map(function (b) {
						return a[b]
					})
				},
			bB = (function (a) {
				function b(b, c) {
					var d = a.call(this, b, c) || this,
						e = d.handleExited.bind(
							(function (a) {
								if (void 0 === a)
									throw ReferenceError("this hasn't been initialised - super() hasn't been called")
								return a
							})(d),
						)
					return (d.state = { contextValue: { isMounting: !0 }, handleExited: e, firstRender: !0 }), d
				}
				bw(b, a)
				var c = b.prototype
				return (
					(c.componentDidMount = function () {
						;(this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } })
					}),
					(c.componentWillUnmount = function () {
						this.mounted = !1
					}),
					(b.getDerivedStateFromProps = function (a, b) {
						var c,
							d,
							e = b.children,
							f = b.handleExited
						return {
							children: b.firstRender
								? by(a.children, function (b) {
										return (0, u.cloneElement)(b, {
											onExited: f.bind(null, b),
											in: !0,
											appear: bz(b, "appear", a),
											enter: bz(b, "enter", a),
											exit: bz(b, "exit", a),
										})
									})
								: (Object.keys(
										(d = (function (a, b) {
											function c(c) {
												return c in b ? b[c] : a[c]
											}
											;(a = a || {}), (b = b || {})
											var d,
												e = Object.create(null),
												f = []
											for (var g in a) g in b ? f.length && ((e[g] = f), (f = [])) : f.push(g)
											var h = {}
											for (var i in b) {
												if (e[i])
													for (d = 0; d < e[i].length; d++) {
														var j = e[i][d]
														h[e[i][d]] = c(j)
													}
												h[i] = c(i)
											}
											for (d = 0; d < f.length; d++) h[f[d]] = c(f[d])
											return h
										})(e, (c = by(a.children)))),
									).forEach(function (b) {
										var g = d[b]
										if ((0, u.isValidElement)(g)) {
											var h = b in e,
												i = b in c,
												j = e[b],
												k = (0, u.isValidElement)(j) && !j.props.in
											i && (!h || k)
												? (d[b] = (0, u.cloneElement)(g, {
														onExited: f.bind(null, g),
														in: !0,
														exit: bz(g, "exit", a),
														enter: bz(g, "enter", a),
													}))
												: i || !h || k
													? i &&
														h &&
														(0, u.isValidElement)(j) &&
														(d[b] = (0, u.cloneElement)(g, {
															onExited: f.bind(null, g),
															in: j.props.in,
															exit: bz(g, "exit", a),
															enter: bz(g, "enter", a),
														}))
													: (d[b] = (0, u.cloneElement)(g, { in: !1 }))
										}
									}),
									d),
							firstRender: !1,
						}
					}),
					(c.handleExited = function (a, b) {
						var c = by(this.props.children)
						a.key in c ||
							(a.props.onExited && a.props.onExited(b),
							this.mounted &&
								this.setState(function (b) {
									var c = bu({}, b.children)
									return delete c[a.key], { children: c }
								}))
					}),
					(c.render = function () {
						var a = this.props,
							b = a.component,
							c = a.childFactory,
							d = bt(a, ["component", "childFactory"]),
							e = this.state.contextValue,
							f = bA(this.state.children).map(c)
						return (delete d.appear, delete d.enter, delete d.exit, null === b)
							? u.default.createElement(bx.Provider, { value: e }, f)
							: u.default.createElement(bx.Provider, { value: e }, u.default.createElement(b, d, f))
					}),
					b
				)
			})(u.default.Component)
		;(bB.propTypes = {}),
			(bB.defaultProps = {
				component: "div",
				childFactory: function (a) {
					return a
				},
			})
		var bC = a.i(23360),
			bD = "unmounted",
			bE = "exited",
			bF = "entering",
			bG = "entered",
			bH = "exiting",
			bI = (function (a) {
				function b(b, c) {
					var d,
						e = a.call(this, b, c) || this,
						f = c && !c.isMounting ? b.enter : b.appear
					return (
						(e.appearStatus = null),
						b.in
							? f
								? ((d = bE), (e.appearStatus = bF))
								: (d = bG)
							: (d = b.unmountOnExit || b.mountOnEnter ? bD : bE),
						(e.state = { status: d }),
						(e.nextCallback = null),
						e
					)
				}
				bw(b, a),
					(b.getDerivedStateFromProps = function (a, b) {
						return a.in && b.status === bD ? { status: bE } : null
					})
				var c = b.prototype
				return (
					(c.componentDidMount = function () {
						this.updateStatus(!0, this.appearStatus)
					}),
					(c.componentDidUpdate = function (a) {
						var b = null
						if (a !== this.props) {
							var c = this.state.status
							this.props.in ? c !== bF && c !== bG && (b = bF) : (c === bF || c === bG) && (b = bH)
						}
						this.updateStatus(!1, b)
					}),
					(c.componentWillUnmount = function () {
						this.cancelNextCallback()
					}),
					(c.getTimeouts = function () {
						var a,
							b,
							c,
							d = this.props.timeout
						return (
							(a = b = c = d),
							null != d &&
								"number" != typeof d &&
								((a = d.exit), (b = d.enter), (c = void 0 !== d.appear ? d.appear : b)),
							{ exit: a, enter: b, appear: c }
						)
					}),
					(c.updateStatus = function (a, b) {
						if ((void 0 === a && (a = !1), null !== b))
							if ((this.cancelNextCallback(), b === bF)) {
								if (this.props.unmountOnExit || this.props.mountOnEnter) {
									var c = this.props.nodeRef
										? this.props.nodeRef.current
										: bC.default.findDOMNode(this)
									c && c.scrollTop
								}
								this.performEnter(a)
							} else this.performExit()
						else this.props.unmountOnExit && this.state.status === bE && this.setState({ status: bD })
					}),
					(c.performEnter = function (a) {
						var b = this,
							c = this.props.enter,
							d = this.context ? this.context.isMounting : a,
							e = this.props.nodeRef ? [d] : [bC.default.findDOMNode(this), d],
							f = e[0],
							g = e[1],
							h = this.getTimeouts(),
							i = d ? h.appear : h.enter
						;(a || c) && 1
							? (this.props.onEnter(f, g),
								this.safeSetState({ status: bF }, function () {
									b.props.onEntering(f, g),
										b.onTransitionEnd(i, function () {
											b.safeSetState({ status: bG }, function () {
												b.props.onEntered(f, g)
											})
										})
								}))
							: this.safeSetState({ status: bG }, function () {
									b.props.onEntered(f)
								})
					}),
					(c.performExit = function () {
						var a = this,
							b = this.props.exit,
							c = this.getTimeouts(),
							d = this.props.nodeRef ? void 0 : bC.default.findDOMNode(this)
						b
							? (this.props.onExit(d),
								this.safeSetState({ status: bH }, function () {
									a.props.onExiting(d),
										a.onTransitionEnd(c.exit, function () {
											a.safeSetState({ status: bE }, function () {
												a.props.onExited(d)
											})
										})
								}))
							: this.safeSetState({ status: bE }, function () {
									a.props.onExited(d)
								})
					}),
					(c.cancelNextCallback = function () {
						null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null))
					}),
					(c.safeSetState = function (a, b) {
						;(b = this.setNextCallback(b)), this.setState(a, b)
					}),
					(c.setNextCallback = function (a) {
						var b = this,
							c = !0
						return (
							(this.nextCallback = function (d) {
								c && ((c = !1), (b.nextCallback = null), a(d))
							}),
							(this.nextCallback.cancel = function () {
								c = !1
							}),
							this.nextCallback
						)
					}),
					(c.onTransitionEnd = function (a, b) {
						this.setNextCallback(b)
						var c = this.props.nodeRef ? this.props.nodeRef.current : bC.default.findDOMNode(this),
							d = null == a && !this.props.addEndListener
						if (!c || d) return void setTimeout(this.nextCallback, 0)
						if (this.props.addEndListener) {
							var e = this.props.nodeRef ? [this.nextCallback] : [c, this.nextCallback],
								f = e[0],
								g = e[1]
							this.props.addEndListener(f, g)
						}
						null != a && setTimeout(this.nextCallback, a)
					}),
					(c.render = function () {
						var a = this.state.status
						if (a === bD) return null
						var b = this.props,
							c = b.children,
							d =
								(b.in,
								b.mountOnEnter,
								b.unmountOnExit,
								b.appear,
								b.enter,
								b.exit,
								b.timeout,
								b.addEndListener,
								b.onEnter,
								b.onEntering,
								b.onEntered,
								b.onExit,
								b.onExiting,
								b.onExited,
								b.nodeRef,
								bt(b, [
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
						return u.default.createElement(
							bx.Provider,
							{ value: null },
							"function" == typeof c ? c(a, d) : u.default.cloneElement(u.default.Children.only(c), d),
						)
					}),
					b
				)
			})(u.default.Component)
		function bJ() {}
		;(bI.contextType = bx),
			(bI.propTypes = {}),
			(bI.defaultProps = {
				in: !1,
				mountOnEnter: !1,
				unmountOnExit: !1,
				appear: !1,
				enter: !0,
				exit: !0,
				onEnter: bJ,
				onEntering: bJ,
				onEntered: bJ,
				onExit: bJ,
				onExiting: bJ,
				onExited: bJ,
			}),
			(bI.UNMOUNTED = bD),
			(bI.EXITED = bE),
			(bI.ENTERING = bF),
			(bI.ENTERED = bG),
			(bI.EXITING = bH)
		var bK = ["children", "appearOptions", "enterOptions", "leaveOptions"]
		function bL(a) {
			return (bL =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function bM() {
			return (bM = Object.assign.bind()).apply(this, arguments)
		}
		function bN(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function bO(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? bN(Object(c), !0).forEach(function (b) {
							bS(a, b, c[b])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: bN(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		function bP(a, b) {
			return (bP = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (a, b) {
						return (a.__proto__ = b), a
					})(a, b)
		}
		function bQ(a) {
			if (void 0 === a) throw ReferenceError("this hasn't been initialised - super() hasn't been called")
			return a
		}
		function bR(a) {
			return (bR = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (a) {
						return a.__proto__ || Object.getPrototypeOf(a)
					})(a)
		}
		function bS(a, b, c) {
			return (
				(b = bT(b)) in a
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		function bT(a) {
			var b = (function (a, b) {
				if ("object" !== bL(a) || null === a) return a
				var c = a[Symbol.toPrimitive]
				if (void 0 !== c) {
					var d = c.call(a, b || "default")
					if ("object" !== bL(d)) return d
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === b ? String : Number)(a)
			})(a, "string")
			return "symbol" === bL(b) ? b : String(b)
		}
		var bU = function () {
				var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					b = a.steps,
					c = a.duration
				return b && b.length
					? b.reduce(function (a, b) {
							return a + (Number.isFinite(b.duration) && b.duration > 0 ? b.duration : 0)
						}, 0)
					: Number.isFinite(c)
						? c
						: 0
			},
			bV = (function (a) {
				if ("function" != typeof a && null !== a)
					throw TypeError("Super expression must either be null or a function")
				;(e.prototype = Object.create(a && a.prototype, {
					constructor: { value: e, writable: !0, configurable: !0 },
				})),
					Object.defineProperty(e, "prototype", { writable: !1 }),
					a && bP(e, a)
				var b,
					c,
					d =
						((b = (function () {
							if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1
							if ("function" == typeof Proxy) return !0
							try {
								return (
									Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
								)
							} catch (a) {
								return !1
							}
						})()),
						function () {
							var a,
								c = bR(e)
							return (
								(a = b
									? Reflect.construct(c, arguments, bR(this).constructor)
									: c.apply(this, arguments)),
								(function (a, b) {
									if (b && ("object" === bL(b) || "function" == typeof b)) return b
									if (void 0 !== b)
										throw TypeError("Derived constructors may only return object or undefined")
									return bQ(a)
								})(this, a)
							)
						})
				function e() {
					var a
					if (!(this instanceof e)) throw TypeError("Cannot call a class as a function")
					return (
						bS(bQ((a = d.call(this))), "handleEnter", function (b, c) {
							var d = a.props,
								e = d.appearOptions,
								f = d.enterOptions
							a.handleStyleActive(c ? e : f)
						}),
						bS(bQ(a), "handleExit", function () {
							var b = a.props.leaveOptions
							a.handleStyleActive(b)
						}),
						(a.state = { isActive: !1 }),
						a
					)
				}
				return (
					(c = [
						{
							key: "handleStyleActive",
							value: function (a) {
								if (a) {
									var b = a.onAnimationEnd
										? function () {
												a.onAnimationEnd()
											}
										: null
									this.setState(bO(bO({}, a), {}, { onAnimationEnd: b, isActive: !0 }))
								}
							},
						},
						{
							key: "parseTimeout",
							value: function () {
								var a = this.props,
									b = a.appearOptions,
									c = a.enterOptions,
									d = a.leaveOptions
								return bU(b) + bU(c) + bU(d)
							},
						},
						{
							key: "render",
							value: function () {
								var a = this,
									b = this.props,
									c = b.children,
									d =
										(b.appearOptions,
										b.enterOptions,
										b.leaveOptions,
										(function (a, b) {
											if (null == a) return {}
											var c,
												d,
												e = (function (a, b) {
													if (null == a) return {}
													var c,
														d,
														e = {},
														f = Object.keys(a)
													for (d = 0; d < f.length; d++)
														(c = f[d]), b.indexOf(c) >= 0 || (e[c] = a[c])
													return e
												})(a, b)
											if (Object.getOwnPropertySymbols) {
												var f = Object.getOwnPropertySymbols(a)
												for (d = 0; d < f.length; d++)
													(c = f[d]),
														!(b.indexOf(c) >= 0) &&
															Object.prototype.propertyIsEnumerable.call(a, c) &&
															(e[c] = a[c])
											}
											return e
										})(b, bK))
								return u.default.createElement(
									bI,
									bM({}, d, {
										onEnter: this.handleEnter,
										onExit: this.handleExit,
										timeout: this.parseTimeout(),
									}),
									function () {
										return u.default.createElement(bs, a.state, u.Children.only(c))
									},
								)
							},
						},
					]),
					(function (a, b) {
						for (var c = 0; c < b.length; c++) {
							var d = b[c]
							;(d.enumerable = d.enumerable || !1),
								(d.configurable = !0),
								"value" in d && (d.writable = !0),
								Object.defineProperty(a, bT(d.key), d)
						}
					})(e.prototype, c),
					Object.defineProperty(e, "prototype", { writable: !1 }),
					e
				)
			})(u.Component)
		function bW(a) {
			var b = a.component,
				c = a.children,
				d = a.appear,
				e = a.enter,
				f = a.leave
			return u.default.createElement(
				bB,
				{ component: b },
				u.Children.map(c, function (a, b) {
					return u.default.createElement(
						bV,
						{ appearOptions: d, enterOptions: e, leaveOptions: f, key: "child-".concat(b) },
						a,
					)
				}),
			)
		}
		function bX(a) {
			return (bX =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function bY() {
			return (bY = Object.assign.bind()).apply(this, arguments)
		}
		function bZ(a, b) {
			;(null == b || b > a.length) && (b = a.length)
			for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]
			return d
		}
		function b$(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function b_(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? b$(Object(c), !0).forEach(function (b) {
							var d, e, f
							;(d = a),
								(e = b),
								(f = c[b]),
								(e = (function (a) {
									var b = (function (a, b) {
										if ("object" != bX(a) || !a) return a
										var c = a[Symbol.toPrimitive]
										if (void 0 !== c) {
											var d = c.call(a, b || "default")
											if ("object" != bX(d)) return d
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === b ? String : Number)(a)
									})(a, "string")
									return "symbol" == bX(b) ? b : b + ""
								})(e)) in d
									? Object.defineProperty(d, e, {
											value: f,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (d[e] = f)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: b$(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		;(bV.propTypes = {
			appearOptions: ak.default.object,
			enterOptions: ak.default.object,
			leaveOptions: ak.default.object,
			children: ak.default.element,
		}),
			(bW.propTypes = {
				appear: ak.default.object,
				enter: ak.default.object,
				leave: ak.default.object,
				children: ak.default.oneOfType([ak.default.array, ak.default.element]),
				component: ak.default.any,
			}),
			(bW.defaultProps = { component: "span" })
		var b0 = function (a, b, c, d, e) {
				var f,
					g = Math.min(Math.abs(c) / 2, Math.abs(d) / 2),
					h = d >= 0 ? 1 : -1,
					i = c >= 0 ? 1 : -1,
					j = +((d >= 0 && c >= 0) || (d < 0 && c < 0))
				if (g > 0 && e instanceof Array) {
					for (var k = [0, 0, 0, 0], l = 0; l < 4; l++) k[l] = e[l] > g ? g : e[l]
					;(f = "M".concat(a, ",").concat(b + h * k[0])),
						k[0] > 0 &&
							(f += "A "
								.concat(k[0], ",")
								.concat(k[0], ",0,0,")
								.concat(j, ",")
								.concat(a + i * k[0], ",")
								.concat(b)),
						(f += "L ".concat(a + c - i * k[1], ",").concat(b)),
						k[1] > 0 &&
							(f += "A "
								.concat(k[1], ",")
								.concat(k[1], ",0,0,")
								.concat(j, ",\n        ")
								.concat(a + c, ",")
								.concat(b + h * k[1])),
						(f += "L ".concat(a + c, ",").concat(b + d - h * k[2])),
						k[2] > 0 &&
							(f += "A "
								.concat(k[2], ",")
								.concat(k[2], ",0,0,")
								.concat(j, ",\n        ")
								.concat(a + c - i * k[2], ",")
								.concat(b + d)),
						(f += "L ".concat(a + i * k[3], ",").concat(b + d)),
						k[3] > 0 &&
							(f += "A "
								.concat(k[3], ",")
								.concat(k[3], ",0,0,")
								.concat(j, ",\n        ")
								.concat(a, ",")
								.concat(b + d - h * k[3])),
						(f += "Z")
				} else if (g > 0 && e === +e && e > 0) {
					var m = Math.min(g, e)
					f = "M "
						.concat(a, ",")
						.concat(b + h * m, "\n            A ")
						.concat(m, ",")
						.concat(m, ",0,0,")
						.concat(j, ",")
						.concat(a + i * m, ",")
						.concat(b, "\n            L ")
						.concat(a + c - i * m, ",")
						.concat(b, "\n            A ")
						.concat(m, ",")
						.concat(m, ",0,0,")
						.concat(j, ",")
						.concat(a + c, ",")
						.concat(b + h * m, "\n            L ")
						.concat(a + c, ",")
						.concat(b + d - h * m, "\n            A ")
						.concat(m, ",")
						.concat(m, ",0,0,")
						.concat(j, ",")
						.concat(a + c - i * m, ",")
						.concat(b + d, "\n            L ")
						.concat(a + i * m, ",")
						.concat(b + d, "\n            A ")
						.concat(m, ",")
						.concat(m, ",0,0,")
						.concat(j, ",")
						.concat(a, ",")
						.concat(b + d - h * m, " Z")
				} else f = "M ".concat(a, ",").concat(b, " h ").concat(c, " v ").concat(d, " h ").concat(-c, " Z")
				return f
			},
			b1 = function (a, b) {
				if (!a || !b) return !1
				var c = a.x,
					d = a.y,
					e = b.x,
					f = b.y,
					g = b.width,
					h = b.height
				if (Math.abs(g) > 0 && Math.abs(h) > 0) {
					var i = Math.min(e, e + g),
						j = Math.max(e, e + g),
						k = Math.min(f, f + h),
						l = Math.max(f, f + h)
					return c >= i && c <= j && d >= k && d <= l
				}
				return !1
			},
			b2 = {
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
			b3 = function (a) {
				var b,
					c = b_(b_({}, b2), a),
					d = (0, u.useRef)(),
					e =
						(function (a) {
							if (Array.isArray(a)) return a
						})((b = (0, u.useState)(-1))) ||
						(function (a, b) {
							var c = null == a ? null : ("u" > typeof Symbol && a[Symbol.iterator]) || a["@@iterator"]
							if (null != c) {
								var d,
									e,
									f,
									g,
									h = [],
									i = !0,
									j = !1
								try {
									;(f = (c = c.call(a)).next), !1
									for (; !(i = (d = f.call(c)).done) && (h.push(d.value), 2 !== h.length); i = !0);
								} catch (a) {
									;(j = !0), (e = a)
								} finally {
									try {
										if (!i && null != c.return && ((g = c.return()), Object(g) !== g)) return
									} finally {
										if (j) throw e
									}
								}
								return h
							}
						})(b, 2) ||
						(function (a, b) {
							if (a) {
								if ("string" == typeof a) return bZ(a, 2)
								var c = Object.prototype.toString.call(a).slice(8, -1)
								if (
									("Object" === c && a.constructor && (c = a.constructor.name),
									"Map" === c || "Set" === c)
								)
									return Array.from(a)
								if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
									return bZ(a, 2)
							}
						})(b, 2) ||
						(function () {
							throw TypeError(
								"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
							)
						})(),
					f = e[0],
					g = e[1]
				;(0, u.useEffect)(function () {
					if (d.current && d.current.getTotalLength)
						try {
							var a = d.current.getTotalLength()
							a && g(a)
						} catch (a) {}
				}, [])
				var h = c.x,
					i = c.y,
					j = c.width,
					k = c.height,
					l = c.radius,
					m = c.className,
					n = c.animationEasing,
					o = c.animationDuration,
					p = c.animationBegin,
					q = c.isAnimationActive,
					r = c.isUpdateAnimationActive
				if (h !== +h || i !== +i || j !== +j || k !== +k || 0 === j || 0 === k) return null
				var s = (0, $.default)("recharts-rectangle", m)
				return r
					? u.default.createElement(
							bs,
							{
								canBegin: f > 0,
								from: { width: j, height: k, x: h, y: i },
								to: { width: j, height: k, x: h, y: i },
								duration: o,
								animationEasing: n,
								isActive: r,
							},
							function (a) {
								var b = a.width,
									e = a.height,
									g = a.x,
									h = a.y
								return u.default.createElement(
									bs,
									{
										canBegin: f > 0,
										from: "0px ".concat(-1 === f ? 1 : f, "px"),
										to: "".concat(f, "px 0px"),
										attributeName: "strokeDasharray",
										begin: p,
										duration: o,
										isActive: q,
										easing: n,
									},
									u.default.createElement(
										"path",
										bY({}, (0, ab.filterProps)(c, !0), {
											className: s,
											d: b0(g, h, b, e, l),
											ref: d,
										}),
									),
								)
							},
						)
					: u.default.createElement(
							"path",
							bY({}, (0, ab.filterProps)(c, !0), { className: s, d: b0(h, i, j, k, l) }),
						)
			}
		function b4(a, b) {
			switch (arguments.length) {
				case 0:
					break
				case 1:
					this.range(a)
					break
				default:
					this.range(b).domain(a)
			}
			return this
		}
		function b5(a, b) {
			switch (arguments.length) {
				case 0:
					break
				case 1:
					"function" == typeof a ? this.interpolator(a) : this.range(a)
					break
				default:
					this.domain(a), "function" == typeof b ? this.interpolator(b) : this.range(b)
			}
			return this
		}
		a.s([], 8993)
		class b6 extends Map {
			constructor(a, b = b8) {
				if (
					(super(),
					Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: b } }),
					null != a)
				)
					for (const [b, c] of a) this.set(b, c)
			}
			get(a) {
				return super.get(b7(this, a))
			}
			has(a) {
				return super.has(b7(this, a))
			}
			set(a, b) {
				return super.set(
					(function ({ _intern: a, _key: b }, c) {
						let d = b(c)
						return a.has(d) ? a.get(d) : (a.set(d, c), c)
					})(this, a),
					b,
				)
			}
			delete(a) {
				return super.delete(
					(function ({ _intern: a, _key: b }, c) {
						let d = b(c)
						return a.has(d) && ((c = a.get(d)), a.delete(d)), c
					})(this, a),
				)
			}
		}
		function b7({ _intern: a, _key: b }, c) {
			let d = b(c)
			return a.has(d) ? a.get(d) : c
		}
		function b8(a) {
			return null !== a && "object" == typeof a ? a.valueOf() : a
		}
		let b9 = Symbol("implicit")
		function ca() {
			var a = new b6(),
				b = [],
				c = [],
				d = b9
			function e(e) {
				let f = a.get(e)
				if (void 0 === f) {
					if (d !== b9) return d
					a.set(e, (f = b.push(e) - 1))
				}
				return c[f % c.length]
			}
			return (
				(e.domain = function (c) {
					if (!arguments.length) return b.slice()
					for (let d of ((b = []), (a = new b6()), c)) a.has(d) || a.set(d, b.push(d) - 1)
					return e
				}),
				(e.range = function (a) {
					return arguments.length ? ((c = Array.from(a)), e) : c.slice()
				}),
				(e.unknown = function (a) {
					return arguments.length ? ((d = a), e) : d
				}),
				(e.copy = function () {
					return ca(b, c).unknown(d)
				}),
				b4.apply(e, arguments),
				e
			)
		}
		function cb() {
			var a,
				b,
				c = ca().unknown(void 0),
				d = c.domain,
				e = c.range,
				f = 0,
				g = 1,
				h = !1,
				i = 0,
				j = 0,
				k = 0.5
			function l() {
				var c = d().length,
					l = g < f,
					m = l ? g : f,
					n = l ? f : g
				;(a = (n - m) / Math.max(1, c - i + 2 * j)),
					h && (a = Math.floor(a)),
					(m += (n - m - a * (c - i)) * k),
					(b = a * (1 - i)),
					h && ((m = Math.round(m)), (b = Math.round(b)))
				var o = (function (a, b, c) {
					;(a *= 1), (b *= 1), (c = (e = arguments.length) < 2 ? ((b = a), (a = 0), 1) : e < 3 ? 1 : +c)
					for (var d = -1, e = 0 | Math.max(0, Math.ceil((b - a) / c)), f = Array(e); ++d < e; )
						f[d] = a + d * c
					return f
				})(c).map(function (b) {
					return m + a * b
				})
				return e(l ? o.reverse() : o)
			}
			return (
				delete c.unknown,
				(c.domain = function (a) {
					return arguments.length ? (d(a), l()) : d()
				}),
				(c.range = function (a) {
					return arguments.length ? (([f, g] = a), (f *= 1), (g *= 1), l()) : [f, g]
				}),
				(c.rangeRound = function (a) {
					return ([f, g] = a), (f *= 1), (g *= 1), (h = !0), l()
				}),
				(c.bandwidth = function () {
					return b
				}),
				(c.step = function () {
					return a
				}),
				(c.round = function (a) {
					return arguments.length ? ((h = !!a), l()) : h
				}),
				(c.padding = function (a) {
					return arguments.length ? ((i = Math.min(1, (j = +a))), l()) : i
				}),
				(c.paddingInner = function (a) {
					return arguments.length ? ((i = Math.min(1, a)), l()) : i
				}),
				(c.paddingOuter = function (a) {
					return arguments.length ? ((j = +a), l()) : j
				}),
				(c.align = function (a) {
					return arguments.length ? ((k = Math.max(0, Math.min(1, a))), l()) : k
				}),
				(c.copy = function () {
					return cb(d(), [f, g]).round(h).paddingInner(i).paddingOuter(j).align(k)
				}),
				b4.apply(l(), arguments)
			)
		}
		function cc() {
			return (function a(b) {
				var c = b.copy
				return (
					(b.padding = b.paddingOuter),
					delete b.paddingInner,
					delete b.paddingOuter,
					(b.copy = function () {
						return a(c())
					}),
					b
				)
			})(cb.apply(null, arguments).paddingInner(1))
		}
		var cd = a.i(97059),
			ce = a.i(74350)
		function cf(a) {
			return (cf =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function cg(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function ch(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? cg(Object(c), !0).forEach(function (b) {
							var d, e, f
							;(d = a),
								(e = b),
								(f = c[b]),
								(e = (function (a) {
									var b = (function (a, b) {
										if ("object" != cf(a) || !a) return a
										var c = a[Symbol.toPrimitive]
										if (void 0 !== c) {
											var d = c.call(a, b || "default")
											if ("object" != cf(d)) return d
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === b ? String : Number)(a)
									})(a, "string")
									return "symbol" == cf(b) ? b : b + ""
								})(e)) in d
									? Object.defineProperty(d, e, {
											value: f,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (d[e] = f)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: cg(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		var ci = { widthCache: {}, cacheCount: 0 },
			cj = {
				position: "absolute",
				top: "-20000px",
				left: 0,
				padding: 0,
				margin: 0,
				border: "none",
				whiteSpace: "pre",
			},
			ck = "recharts_measurement_span",
			cl = function (a) {
				var b,
					c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
				if (null == a || ce.Global.isSsr) return { width: 0, height: 0 }
				var d =
						(Object.keys((b = ch({}, c))).forEach(function (a) {
							b[a] || delete b[a]
						}),
						b),
					e = JSON.stringify({ text: a, copyStyle: d })
				if (ci.widthCache[e]) return ci.widthCache[e]
				try {
					var f = document.getElementById(ck)
					f ||
						((f = document.createElement("span")).setAttribute("id", ck),
						f.setAttribute("aria-hidden", "true"),
						document.body.appendChild(f))
					var g = ch(ch({}, cj), d)
					Object.assign(f.style, g), (f.textContent = "".concat(a))
					var h = f.getBoundingClientRect(),
						i = { width: h.width, height: h.height }
					return (
						(ci.widthCache[e] = i), ++ci.cacheCount > 2e3 && ((ci.cacheCount = 0), (ci.widthCache = {})), i
					)
				} catch (a) {
					return { width: 0, height: 0 }
				}
			}
		function cm(a) {
			return (cm =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function cn(a, b) {
			return (
				(function (a) {
					if (Array.isArray(a)) return a
				})(a) ||
				(function (a, b) {
					var c = null == a ? null : ("u" > typeof Symbol && a[Symbol.iterator]) || a["@@iterator"]
					if (null != c) {
						var d,
							e,
							f,
							g,
							h = [],
							i = !0,
							j = !1
						try {
							if (((f = (c = c.call(a)).next), 0 === b)) {
								if (Object(c) !== c) return
								i = !1
							} else for (; !(i = (d = f.call(c)).done) && (h.push(d.value), h.length !== b); i = !0);
						} catch (a) {
							;(j = !0), (e = a)
						} finally {
							try {
								if (!i && null != c.return && ((g = c.return()), Object(g) !== g)) return
							} finally {
								if (j) throw e
							}
						}
						return h
					}
				})(a, b) ||
				(function (a, b) {
					if (a) {
						if ("string" == typeof a) return co(a, b)
						var c = Object.prototype.toString.call(a).slice(8, -1)
						if (("Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c))
							return Array.from(a)
						if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return co(a, b)
					}
				})(a, b) ||
				(function () {
					throw TypeError(
						"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function co(a, b) {
			;(null == b || b > a.length) && (b = a.length)
			for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]
			return d
		}
		function cp(a, b) {
			for (var c = 0; c < b.length; c++) {
				var d = b[c]
				;(d.enumerable = d.enumerable || !1),
					(d.configurable = !0),
					"value" in d && (d.writable = !0),
					Object.defineProperty(
						a,
						(function (a) {
							var b = (function (a, b) {
								if ("object" != cm(a) || !a) return a
								var c = a[Symbol.toPrimitive]
								if (void 0 !== c) {
									var d = c.call(a, b || "default")
									if ("object" != cm(d)) return d
									throw TypeError("@@toPrimitive must return a primitive value.")
								}
								return ("string" === b ? String : Number)(a)
							})(a, "string")
							return "symbol" == cm(b) ? b : b + ""
						})(d.key),
						d,
					)
			}
		}
		var cq = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
			cr = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
			cs = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
			ct = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
			cu = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 16, in: 96, Q: 96 / 101.6, px: 1 },
			cv = Object.keys(cu),
			cw = (function () {
				var a, b
				function c(a, b) {
					if (!(this instanceof c)) throw TypeError("Cannot call a class as a function")
					;(this.num = a),
						(this.unit = b),
						(this.num = a),
						(this.unit = b),
						Number.isNaN(a) && (this.unit = ""),
						"" === b || cs.test(b) || ((this.num = NaN), (this.unit = "")),
						cv.includes(b) && ((this.num = a * cu[b]), (this.unit = "px"))
				}
				return (
					(a = [
						{
							key: "add",
							value: function (a) {
								return this.unit !== a.unit ? new c(NaN, "") : new c(this.num + a.num, this.unit)
							},
						},
						{
							key: "subtract",
							value: function (a) {
								return this.unit !== a.unit ? new c(NaN, "") : new c(this.num - a.num, this.unit)
							},
						},
						{
							key: "multiply",
							value: function (a) {
								return "" !== this.unit && "" !== a.unit && this.unit !== a.unit
									? new c(NaN, "")
									: new c(this.num * a.num, this.unit || a.unit)
							},
						},
						{
							key: "divide",
							value: function (a) {
								return "" !== this.unit && "" !== a.unit && this.unit !== a.unit
									? new c(NaN, "")
									: new c(this.num / a.num, this.unit || a.unit)
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
					(b = [
						{
							key: "parse",
							value: function (a) {
								var b,
									d = cn(null != (b = ct.exec(a)) ? b : [], 3),
									e = d[1],
									f = d[2]
								return new c(parseFloat(e), null != f ? f : "")
							},
						},
					]),
					a && cp(c.prototype, a),
					b && cp(c, b),
					Object.defineProperty(c, "prototype", { writable: !1 }),
					c
				)
			})()
		function cx(a) {
			if (a.includes("NaN")) return "NaN"
			for (var b = a; b.includes("*") || b.includes("/"); ) {
				var c,
					d = cn(null != (c = cq.exec(b)) ? c : [], 4),
					e = d[1],
					f = d[2],
					g = d[3],
					h = cw.parse(null != e ? e : ""),
					i = cw.parse(null != g ? g : ""),
					j = "*" === f ? h.multiply(i) : h.divide(i)
				if (j.isNaN()) return "NaN"
				b = b.replace(cq, j.toString())
			}
			for (; b.includes("+") || /.-\d+(?:\.\d+)?/.test(b); ) {
				var k,
					l = cn(null != (k = cr.exec(b)) ? k : [], 4),
					m = l[1],
					n = l[2],
					o = l[3],
					p = cw.parse(null != m ? m : ""),
					q = cw.parse(null != o ? o : ""),
					r = "+" === n ? p.add(q) : p.subtract(q)
				if (r.isNaN()) return "NaN"
				b = b.replace(cr, r.toString())
			}
			return b
		}
		var cy = /\(([^()]*)\)/
		function cz(a) {
			var b = (function (a) {
				try {
					var b
					return (
						(b = a.replace(/\s+/g, "")),
						(b = (function (a) {
							for (var b = a; b.includes("("); ) {
								var c = cn(cy.exec(b), 2)[1]
								b = b.replace(cy, cx(c))
							}
							return b
						})(b)),
						(b = cx(b))
					)
				} catch (a) {
					return "NaN"
				}
			})(a.slice(5, -1))
			return "NaN" === b ? "" : b
		}
		var cA = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
			cB = ["dx", "dy", "angle", "className", "breakAll"]
		function cC() {
			return (cC = Object.assign.bind()).apply(this, arguments)
		}
		function cD(a, b) {
			if (null == a) return {}
			var c,
				d,
				e = (function (a, b) {
					if (null == a) return {}
					var c = {}
					for (var d in a)
						if (Object.prototype.hasOwnProperty.call(a, d)) {
							if (b.indexOf(d) >= 0) continue
							c[d] = a[d]
						}
					return c
				})(a, b)
			if (Object.getOwnPropertySymbols) {
				var f = Object.getOwnPropertySymbols(a)
				for (d = 0; d < f.length; d++)
					(c = f[d]),
						!(b.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(a, c) && (e[c] = a[c])
			}
			return e
		}
		function cE(a, b) {
			return (
				(function (a) {
					if (Array.isArray(a)) return a
				})(a) ||
				(function (a, b) {
					var c = null == a ? null : ("u" > typeof Symbol && a[Symbol.iterator]) || a["@@iterator"]
					if (null != c) {
						var d,
							e,
							f,
							g,
							h = [],
							i = !0,
							j = !1
						try {
							if (((f = (c = c.call(a)).next), 0 === b)) {
								if (Object(c) !== c) return
								i = !1
							} else for (; !(i = (d = f.call(c)).done) && (h.push(d.value), h.length !== b); i = !0);
						} catch (a) {
							;(j = !0), (e = a)
						} finally {
							try {
								if (!i && null != c.return && ((g = c.return()), Object(g) !== g)) return
							} finally {
								if (j) throw e
							}
						}
						return h
					}
				})(a, b) ||
				(function (a, b) {
					if (a) {
						if ("string" == typeof a) return cF(a, b)
						var c = Object.prototype.toString.call(a).slice(8, -1)
						if (("Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c))
							return Array.from(a)
						if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return cF(a, b)
					}
				})(a, b) ||
				(function () {
					throw TypeError(
						"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function cF(a, b) {
			;(null == b || b > a.length) && (b = a.length)
			for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]
			return d
		}
		var cG = /[ \f\n\r\t\v\u2028\u2029]+/,
			cH = function (a) {
				var b = a.children,
					c = a.breakAll,
					d = a.style
				try {
					var e = []
					;(0, U.default)(b) || (e = c ? b.toString().split("") : b.toString().split(cG))
					var f = e.map(function (a) {
							return { word: a, width: cl(a, d).width }
						}),
						g = c ? 0 : cl(" ", d).width
					return { wordsWithComputedWidth: f, spaceWidth: g }
				} catch (a) {
					return null
				}
			},
			cI = function (a, b, c, d, e) {
				var f,
					g = a.maxLines,
					h = a.children,
					i = a.style,
					j = a.breakAll,
					k = (0, cd.isNumber)(g),
					l = function () {
						var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
						return a.reduce(function (a, b) {
							var f = b.word,
								g = b.width,
								h = a[a.length - 1]
							return (
								h && (null == d || e || h.width + g + c < Number(d))
									? (h.words.push(f), (h.width += g + c))
									: a.push({ words: [f], width: g }),
								a
							)
						}, [])
					},
					m = l(b)
				if (!k) return m
				for (
					var n = function (a) {
							var b = l(
								cH({ breakAll: j, style: i, children: h.slice(0, a) + "…" }).wordsWithComputedWidth,
							)
							return [
								b.length > g ||
									b.reduce(function (a, b) {
										return a.width > b.width ? a : b
									}).width > Number(d),
								b,
							]
						},
						o = 0,
						p = h.length - 1,
						q = 0;
					o <= p && q <= h.length - 1;

				) {
					var r = Math.floor((o + p) / 2),
						s = cE(n(r - 1), 2),
						t = s[0],
						u = s[1],
						v = cE(n(r), 1)[0]
					if ((t || v || (o = r + 1), t && v && (p = r - 1), !t && v)) {
						f = u
						break
					}
					q++
				}
				return f || m
			},
			cJ = function (a) {
				return [{ words: (0, U.default)(a) ? [] : a.toString().split(cG) }]
			},
			cK = function (a) {
				var b = a.width,
					c = a.scaleToFit,
					d = a.children,
					e = a.style,
					f = a.breakAll,
					g = a.maxLines
				if ((b || c) && !ce.Global.isSsr) {
					var h = cH({ breakAll: f, children: d, style: e })
					if (!h) return cJ(d)
					var i = h.wordsWithComputedWidth,
						j = h.spaceWidth
					return cI({ breakAll: f, children: d, maxLines: g, style: e }, i, j, b, c)
				}
				return cJ(d)
			},
			cL = "#808080",
			cM = function (a) {
				var b,
					c = a.x,
					d = void 0 === c ? 0 : c,
					e = a.y,
					f = void 0 === e ? 0 : e,
					g = a.lineHeight,
					h = void 0 === g ? "1em" : g,
					i = a.capHeight,
					j = void 0 === i ? "0.71em" : i,
					k = a.scaleToFit,
					l = void 0 !== k && k,
					m = a.textAnchor,
					n = a.verticalAnchor,
					o = a.fill,
					p = void 0 === o ? cL : o,
					q = cD(a, cA),
					r = (0, u.useMemo)(
						function () {
							return cK({
								breakAll: q.breakAll,
								children: q.children,
								maxLines: q.maxLines,
								scaleToFit: l,
								style: q.style,
								width: q.width,
							})
						},
						[q.breakAll, q.children, q.maxLines, l, q.style, q.width],
					),
					s = q.dx,
					t = q.dy,
					v = q.angle,
					w = q.className,
					x = q.breakAll,
					y = cD(q, cB)
				if (!(0, cd.isNumOrStr)(d) || !(0, cd.isNumOrStr)(f)) return null
				var z = d + ((0, cd.isNumber)(s) ? s : 0),
					A = f + ((0, cd.isNumber)(t) ? t : 0)
				switch (void 0 === n ? "end" : n) {
					case "start":
						b = cz("calc(".concat(j, ")"))
						break
					case "middle":
						b = cz(
							"calc("
								.concat((r.length - 1) / 2, " * -")
								.concat(h, " + (")
								.concat(j, " / 2))"),
						)
						break
					default:
						b = cz("calc(".concat(r.length - 1, " * -").concat(h, ")"))
				}
				var B = []
				if (l) {
					var C = r[0].width,
						D = q.width
					B.push("scale(".concat(((0, cd.isNumber)(D) ? D / C : 1) / C, ")"))
				}
				return (
					v && B.push("rotate(".concat(v, ", ").concat(z, ", ").concat(A, ")")),
					B.length && (y.transform = B.join(" ")),
					u.default.createElement(
						"text",
						cC({}, (0, ab.filterProps)(y, !0), {
							x: z,
							y: A,
							className: (0, $.default)("recharts-text", w),
							textAnchor: void 0 === m ? "start" : m,
							fill: p.includes("url") ? cL : p,
						}),
						r.map(function (a, c) {
							var d = a.words.join(x ? "" : " ")
							return u.default.createElement(
								"tspan",
								{ x: z, dy: 0 === c ? b : h, key: "".concat(d, "-").concat(c) },
								d,
							)
						}),
					)
				)
			}
		a.i(8993), a.s([], 15708), a.i(15708)
		let cN = Math.sqrt(50),
			cO = Math.sqrt(10),
			cP = Math.sqrt(2)
		function cQ(a, b, c) {
			let d,
				e,
				f,
				g = (b - a) / Math.max(0, c),
				h = Math.floor(Math.log10(g)),
				i = g / Math.pow(10, h),
				j = i >= cN ? 10 : i >= cO ? 5 : i >= cP ? 2 : 1
			return (h < 0
				? ((d = Math.round(a * (f = Math.pow(10, -h) / j))),
					(e = Math.round(b * f)),
					d / f < a && ++d,
					e / f > b && --e,
					(f = -f))
				: ((d = Math.round(a / (f = Math.pow(10, h) * j))),
					(e = Math.round(b / f)),
					d * f < a && ++d,
					e * f > b && --e),
			e < d && 0.5 <= c && c < 2)
				? cQ(a, b, 2 * c)
				: [d, e, f]
		}
		function cR(a, b, c) {
			if (((b *= 1), (a *= 1), !((c *= 1) > 0))) return []
			if (a === b) return [a]
			let d = b < a,
				[e, f, g] = d ? cQ(b, a, c) : cQ(a, b, c)
			if (!(f >= e)) return []
			let h = f - e + 1,
				i = Array(h)
			if (d)
				if (g < 0) for (let a = 0; a < h; ++a) i[a] = -((f - a) / g)
				else for (let a = 0; a < h; ++a) i[a] = (f - a) * g
			else if (g < 0) for (let a = 0; a < h; ++a) i[a] = -((e + a) / g)
			else for (let a = 0; a < h; ++a) i[a] = (e + a) * g
			return i
		}
		function cS(a, b, c) {
			return cQ((a *= 1), (b *= 1), (c *= 1))[2]
		}
		function cT(a, b, c) {
			;(b *= 1), (a *= 1), (c *= 1)
			let d = b < a,
				e = d ? cS(b, a, c) : cS(a, b, c)
			return (d ? -1 : 1) * (e < 0 ? -(1 / e) : e)
		}
		function cU(a, b) {
			return null == a || null == b ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN
		}
		function cV(a, b) {
			return null == a || null == b ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN
		}
		function cW(a) {
			let b, c, d
			function e(a, d, f = 0, g = a.length) {
				if (f < g) {
					if (0 !== b(d, d)) return g
					do {
						let b = (f + g) >>> 1
						0 > c(a[b], d) ? (f = b + 1) : (g = b)
					} while (f < g)
				}
				return f
			}
			return (
				2 !== a.length
					? ((b = cU), (c = (b, c) => cU(a(b), c)), (d = (b, c) => a(b) - c))
					: ((b = a === cU || a === cV ? a : cX), (c = a), (d = a)),
				{
					left: e,
					center: function (a, b, c = 0, f = a.length) {
						let g = e(a, b, c, f - 1)
						return g > c && d(a[g - 1], b) > -d(a[g], b) ? g - 1 : g
					},
					right: function (a, d, e = 0, f = a.length) {
						if (e < f) {
							if (0 !== b(d, d)) return f
							do {
								let b = (e + f) >>> 1
								0 >= c(a[b], d) ? (e = b + 1) : (f = b)
							} while (e < f)
						}
						return e
					},
				}
			)
		}
		function cX() {
			return 0
		}
		function cY(a) {
			return null === a ? NaN : +a
		}
		let cZ = cW(cU),
			c$ = cZ.right
		function c_(a, b, c) {
			;(a.prototype = b.prototype = c), (c.constructor = a)
		}
		function c0(a, b) {
			var c = Object.create(a.prototype)
			for (var d in b) c[d] = b[d]
			return c
		}
		function c1() {}
		cZ.left, cW(cY).center
		var c2 = "\\s*([+-]?\\d+)\\s*",
			c3 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
			c4 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
			c5 = /^#([0-9a-f]{3,8})$/,
			c6 = RegExp(`^rgb\\(${c2},${c2},${c2}\\)$`),
			c7 = RegExp(`^rgb\\(${c4},${c4},${c4}\\)$`),
			c8 = RegExp(`^rgba\\(${c2},${c2},${c2},${c3}\\)$`),
			c9 = RegExp(`^rgba\\(${c4},${c4},${c4},${c3}\\)$`),
			da = RegExp(`^hsl\\(${c3},${c4},${c4}\\)$`),
			db = RegExp(`^hsla\\(${c3},${c4},${c4},${c3}\\)$`),
			dc = {
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
		function dd() {
			return this.rgb().formatHex()
		}
		function de() {
			return this.rgb().formatRgb()
		}
		function df(a) {
			var b, c
			return (
				(a = (a + "").trim().toLowerCase()),
				(b = c5.exec(a))
					? ((c = b[1].length),
						(b = parseInt(b[1], 16)),
						6 === c
							? dg(b)
							: 3 === c
								? new dj(
										((b >> 8) & 15) | ((b >> 4) & 240),
										((b >> 4) & 15) | (240 & b),
										((15 & b) << 4) | (15 & b),
										1,
									)
								: 8 === c
									? dh((b >> 24) & 255, (b >> 16) & 255, (b >> 8) & 255, (255 & b) / 255)
									: 4 === c
										? dh(
												((b >> 12) & 15) | ((b >> 8) & 240),
												((b >> 8) & 15) | ((b >> 4) & 240),
												((b >> 4) & 15) | (240 & b),
												(((15 & b) << 4) | (15 & b)) / 255,
											)
										: null)
					: (b = c6.exec(a))
						? new dj(b[1], b[2], b[3], 1)
						: (b = c7.exec(a))
							? new dj((255 * b[1]) / 100, (255 * b[2]) / 100, (255 * b[3]) / 100, 1)
							: (b = c8.exec(a))
								? dh(b[1], b[2], b[3], b[4])
								: (b = c9.exec(a))
									? dh((255 * b[1]) / 100, (255 * b[2]) / 100, (255 * b[3]) / 100, b[4])
									: (b = da.exec(a))
										? dq(b[1], b[2] / 100, b[3] / 100, 1)
										: (b = db.exec(a))
											? dq(b[1], b[2] / 100, b[3] / 100, b[4])
											: dc.hasOwnProperty(a)
												? dg(dc[a])
												: "transparent" === a
													? new dj(NaN, NaN, NaN, 0)
													: null
			)
		}
		function dg(a) {
			return new dj((a >> 16) & 255, (a >> 8) & 255, 255 & a, 1)
		}
		function dh(a, b, c, d) {
			return d <= 0 && (a = b = c = NaN), new dj(a, b, c, d)
		}
		function di(a, b, c, d) {
			var e
			return 1 == arguments.length
				? ((e = a) instanceof c1 || (e = df(e)), e)
					? new dj((e = e.rgb()).r, e.g, e.b, e.opacity)
					: new dj()
				: new dj(a, b, c, null == d ? 1 : d)
		}
		function dj(a, b, c, d) {
			;(this.r = +a), (this.g = +b), (this.b = +c), (this.opacity = +d)
		}
		function dk() {
			return `#${dp(this.r)}${dp(this.g)}${dp(this.b)}`
		}
		function dl() {
			let a = dm(this.opacity)
			return `${1 === a ? "rgb(" : "rgba("}${dn(this.r)}, ${dn(this.g)}, ${dn(this.b)}${1 === a ? ")" : `, ${a})`}`
		}
		function dm(a) {
			return isNaN(a) ? 1 : Math.max(0, Math.min(1, a))
		}
		function dn(a) {
			return Math.max(0, Math.min(255, Math.round(a) || 0))
		}
		function dp(a) {
			return ((a = dn(a)) < 16 ? "0" : "") + a.toString(16)
		}
		function dq(a, b, c, d) {
			return (
				d <= 0 ? (a = b = c = NaN) : c <= 0 || c >= 1 ? (a = b = NaN) : b <= 0 && (a = NaN), new ds(a, b, c, d)
			)
		}
		function dr(a) {
			if (a instanceof ds) return new ds(a.h, a.s, a.l, a.opacity)
			if ((a instanceof c1 || (a = df(a)), !a)) return new ds()
			if (a instanceof ds) return a
			var b = (a = a.rgb()).r / 255,
				c = a.g / 255,
				d = a.b / 255,
				e = Math.min(b, c, d),
				f = Math.max(b, c, d),
				g = NaN,
				h = f - e,
				i = (f + e) / 2
			return (
				h
					? ((g = b === f ? (c - d) / h + (c < d) * 6 : c === f ? (d - b) / h + 2 : (b - c) / h + 4),
						(h /= i < 0.5 ? f + e : 2 - f - e),
						(g *= 60))
					: (h = i > 0 && i < 1 ? 0 : g),
				new ds(g, h, i, a.opacity)
			)
		}
		function ds(a, b, c, d) {
			;(this.h = +a), (this.s = +b), (this.l = +c), (this.opacity = +d)
		}
		function dt(a) {
			return (a = (a || 0) % 360) < 0 ? a + 360 : a
		}
		function du(a) {
			return Math.max(0, Math.min(1, a || 0))
		}
		function dv(a, b, c) {
			return (a < 60 ? b + ((c - b) * a) / 60 : a < 180 ? c : a < 240 ? b + ((c - b) * (240 - a)) / 60 : b) * 255
		}
		function dw(a, b, c, d, e) {
			var f = a * a,
				g = f * a
			return ((1 - 3 * a + 3 * f - g) * b + (4 - 6 * f + 3 * g) * c + (1 + 3 * a + 3 * f - 3 * g) * d + g * e) / 6
		}
		c_(c1, df, {
			copy(a) {
				return Object.assign(new this.constructor(), this, a)
			},
			displayable() {
				return this.rgb().displayable()
			},
			hex: dd,
			formatHex: dd,
			formatHex8: function () {
				return this.rgb().formatHex8()
			},
			formatHsl: function () {
				return dr(this).formatHsl()
			},
			formatRgb: de,
			toString: de,
		}),
			c_(
				dj,
				di,
				c0(c1, {
					brighter(a) {
						return (
							(a = null == a ? 1.4285714285714286 : Math.pow(1.4285714285714286, a)),
							new dj(this.r * a, this.g * a, this.b * a, this.opacity)
						)
					},
					darker(a) {
						return (
							(a = null == a ? 0.7 : Math.pow(0.7, a)),
							new dj(this.r * a, this.g * a, this.b * a, this.opacity)
						)
					},
					rgb() {
						return this
					},
					clamp() {
						return new dj(dn(this.r), dn(this.g), dn(this.b), dm(this.opacity))
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
					hex: dk,
					formatHex: dk,
					formatHex8: function () {
						return `#${dp(this.r)}${dp(this.g)}${dp(this.b)}${dp((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`
					},
					formatRgb: dl,
					toString: dl,
				}),
			),
			c_(
				ds,
				function (a, b, c, d) {
					return 1 == arguments.length ? dr(a) : new ds(a, b, c, null == d ? 1 : d)
				},
				c0(c1, {
					brighter(a) {
						return (
							(a = null == a ? 1.4285714285714286 : Math.pow(1.4285714285714286, a)),
							new ds(this.h, this.s, this.l * a, this.opacity)
						)
					},
					darker(a) {
						return (
							(a = null == a ? 0.7 : Math.pow(0.7, a)), new ds(this.h, this.s, this.l * a, this.opacity)
						)
					},
					rgb() {
						var a = (this.h % 360) + (this.h < 0) * 360,
							b = isNaN(a) || isNaN(this.s) ? 0 : this.s,
							c = this.l,
							d = c + (c < 0.5 ? c : 1 - c) * b,
							e = 2 * c - d
						return new dj(
							dv(a >= 240 ? a - 240 : a + 120, e, d),
							dv(a, e, d),
							dv(a < 120 ? a + 240 : a - 120, e, d),
							this.opacity,
						)
					},
					clamp() {
						return new ds(dt(this.h), du(this.s), du(this.l), dm(this.opacity))
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
						let a = dm(this.opacity)
						return `${1 === a ? "hsl(" : "hsla("}${dt(this.h)}, ${100 * du(this.s)}%, ${100 * du(this.l)}%${1 === a ? ")" : `, ${a})`}`
					},
				}),
			)
		let dx = (a) => () => a
		function dy(a, b) {
			var c = b - a
			return c
				? function (b) {
						return a + b * c
					}
				: dx(isNaN(a) ? b : a)
		}
		let dz = (function a(b) {
			var c,
				d =
					1 == (c = +b)
						? dy
						: function (a, b) {
								var d, e, f
								return b - a
									? ((d = a),
										(e = b),
										(d = Math.pow(d, (f = c))),
										(e = Math.pow(e, f) - d),
										(f = 1 / f),
										function (a) {
											return Math.pow(d + a * e, f)
										})
									: dx(isNaN(a) ? b : a)
							}
			function e(a, b) {
				var c = d((a = di(a)).r, (b = di(b)).r),
					e = d(a.g, b.g),
					f = d(a.b, b.b),
					g = dy(a.opacity, b.opacity)
				return function (b) {
					return (a.r = c(b)), (a.g = e(b)), (a.b = f(b)), (a.opacity = g(b)), a + ""
				}
			}
			return (e.gamma = a), e
		})(1)
		function dA(a) {
			return function (b) {
				var c,
					d,
					e = b.length,
					f = Array(e),
					g = Array(e),
					h = Array(e)
				for (c = 0; c < e; ++c) (d = di(b[c])), (f[c] = d.r || 0), (g[c] = d.g || 0), (h[c] = d.b || 0)
				return (
					(f = a(f)),
					(g = a(g)),
					(h = a(h)),
					(d.opacity = 1),
					function (a) {
						return (d.r = f(a)), (d.g = g(a)), (d.b = h(a)), d + ""
					}
				)
			}
		}
		function dB(a, b) {
			return (
				(a *= 1),
				(b *= 1),
				function (c) {
					return a * (1 - c) + b * c
				}
			)
		}
		dA(function (a) {
			var b = a.length - 1
			return function (c) {
				var d = c <= 0 ? (c = 0) : c >= 1 ? ((c = 1), b - 1) : Math.floor(c * b),
					e = a[d],
					f = a[d + 1],
					g = d > 0 ? a[d - 1] : 2 * e - f,
					h = d < b - 1 ? a[d + 2] : 2 * f - e
				return dw((c - d / b) * b, g, e, f, h)
			}
		}),
			dA(function (a) {
				var b = a.length
				return function (c) {
					var d = Math.floor(((c %= 1) < 0 ? ++c : c) * b),
						e = a[(d + b - 1) % b],
						f = a[d % b],
						g = a[(d + 1) % b],
						h = a[(d + 2) % b]
					return dw((c - d / b) * b, e, f, g, h)
				}
			})
		var dC = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
			dD = RegExp(dC.source, "g")
		function dE(a, b) {
			var c,
				d,
				e = typeof b
			return null == b || "boolean" === e
				? dx(b)
				: ("number" === e
						? dB
						: "string" === e
							? (d = df(b))
								? ((b = d), dz)
								: function (a, b) {
										var c,
											d,
											e,
											f,
											g,
											h = (dC.lastIndex = dD.lastIndex = 0),
											i = -1,
											j = [],
											k = []
										for (a += "", b += ""; (e = dC.exec(a)) && (f = dD.exec(b)); )
											(g = f.index) > h &&
												((g = b.slice(h, g)), j[i] ? (j[i] += g) : (j[++i] = g)),
												(e = e[0]) === (f = f[0])
													? j[i]
														? (j[i] += f)
														: (j[++i] = f)
													: ((j[++i] = null), k.push({ i: i, x: dB(e, f) })),
												(h = dD.lastIndex)
										return (
											h < b.length && ((g = b.slice(h)), j[i] ? (j[i] += g) : (j[++i] = g)),
											j.length < 2
												? k[0]
													? ((c = k[0].x),
														function (a) {
															return c(a) + ""
														})
													: ((d = b),
														function () {
															return d
														})
												: ((b = k.length),
													function (a) {
														for (var c, d = 0; d < b; ++d) j[(c = k[d]).i] = c.x(a)
														return j.join("")
													})
										)
									}
							: b instanceof df
								? dz
								: b instanceof Date
									? function (a, b) {
											var c = new Date()
											return (
												(a *= 1),
												(b *= 1),
												function (d) {
													return c.setTime(a * (1 - d) + b * d), c
												}
											)
										}
									: !ArrayBuffer.isView((c = b)) || c instanceof DataView
										? Array.isArray(b)
											? function (a, b) {
													var c,
														d = b ? b.length : 0,
														e = a ? Math.min(d, a.length) : 0,
														f = Array(e),
														g = Array(d)
													for (c = 0; c < e; ++c) f[c] = dE(a[c], b[c])
													for (; c < d; ++c) g[c] = b[c]
													return function (a) {
														for (c = 0; c < e; ++c) g[c] = f[c](a)
														return g
													}
												}
											: ("function" != typeof b.valueOf && "function" != typeof b.toString) ||
												  isNaN(b)
												? function (a, b) {
														var c,
															d = {},
															e = {}
														for (c in ((null === a || "object" != typeof a) && (a = {}),
														(null === b || "object" != typeof b) && (b = {}),
														b))
															c in a ? (d[c] = dE(a[c], b[c])) : (e[c] = b[c])
														return function (a) {
															for (c in d) e[c] = d[c](a)
															return e
														}
													}
												: dB
										: function (a, b) {
												b || (b = [])
												var c,
													d = a ? Math.min(b.length, a.length) : 0,
													e = b.slice()
												return function (f) {
													for (c = 0; c < d; ++c) e[c] = a[c] * (1 - f) + b[c] * f
													return e
												}
											})(a, b)
		}
		function dF(a, b) {
			return (
				(a *= 1),
				(b *= 1),
				function (c) {
					return Math.round(a * (1 - c) + b * c)
				}
			)
		}
		function dG(a) {
			return +a
		}
		var dH = [0, 1]
		function dI(a) {
			return a
		}
		function dJ(a, b) {
			var c
			return (b -= a *= 1)
				? function (c) {
						return (c - a) / b
					}
				: ((c = isNaN(b) ? NaN : 0.5),
					function () {
						return c
					})
		}
		function dK(a, b, c) {
			var d = a[0],
				e = a[1],
				f = b[0],
				g = b[1]
			return (
				e < d ? ((d = dJ(e, d)), (f = c(g, f))) : ((d = dJ(d, e)), (f = c(f, g))),
				function (a) {
					return f(d(a))
				}
			)
		}
		function dL(a, b, c) {
			var d = Math.min(a.length, b.length) - 1,
				e = Array(d),
				f = Array(d),
				g = -1
			for (a[d] < a[0] && ((a = a.slice().reverse()), (b = b.slice().reverse())); ++g < d; )
				(e[g] = dJ(a[g], a[g + 1])), (f[g] = c(b[g], b[g + 1]))
			return function (b) {
				var c = c$(a, b, 1, d) - 1
				return f[c](e[c](b))
			}
		}
		function dM(a, b) {
			return b
				.domain(a.domain())
				.range(a.range())
				.interpolate(a.interpolate())
				.clamp(a.clamp())
				.unknown(a.unknown())
		}
		function dN() {
			var a,
				b,
				c,
				d,
				e,
				f,
				g = dH,
				h = dH,
				i = dE,
				j = dI
			function k() {
				var a,
					b,
					c,
					i = Math.min(g.length, h.length)
				return (
					j !== dI &&
						((a = g[0]),
						(b = g[i - 1]),
						a > b && ((c = a), (a = b), (b = c)),
						(j = function (c) {
							return Math.max(a, Math.min(b, c))
						})),
					(d = i > 2 ? dL : dK),
					(e = f = null),
					l
				)
			}
			function l(b) {
				return null == b || isNaN((b *= 1)) ? c : (e || (e = d(g.map(a), h, i)))(a(j(b)))
			}
			return (
				(l.invert = function (c) {
					return j(b((f || (f = d(h, g.map(a), dB)))(c)))
				}),
				(l.domain = function (a) {
					return arguments.length ? ((g = Array.from(a, dG)), k()) : g.slice()
				}),
				(l.range = function (a) {
					return arguments.length ? ((h = Array.from(a)), k()) : h.slice()
				}),
				(l.rangeRound = function (a) {
					return (h = Array.from(a)), (i = dF), k()
				}),
				(l.clamp = function (a) {
					return arguments.length ? ((j = !!a || dI), k()) : j !== dI
				}),
				(l.interpolate = function (a) {
					return arguments.length ? ((i = a), k()) : i
				}),
				(l.unknown = function (a) {
					return arguments.length ? ((c = a), l) : c
				}),
				function (c, d) {
					return (a = c), (b = d), k()
				}
			)
		}
		function dO() {
			return dN()(dI, dI)
		}
		function dP(a, b) {
			if ((c = (a = b ? a.toExponential(b - 1) : a.toExponential()).indexOf("e")) < 0) return null
			var c,
				d = a.slice(0, c)
			return [d.length > 1 ? d[0] + d.slice(2) : d, +a.slice(c + 1)]
		}
		function dQ(a) {
			return (a = dP(Math.abs(a))) ? a[1] : NaN
		}
		var dR = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
		function dS(a) {
			var b
			if (!(b = dR.exec(a))) throw Error("invalid format: " + a)
			return new dT({
				fill: b[1],
				align: b[2],
				sign: b[3],
				symbol: b[4],
				zero: b[5],
				width: b[6],
				comma: b[7],
				precision: b[8] && b[8].slice(1),
				trim: b[9],
				type: b[10],
			})
		}
		function dT(a) {
			;(this.fill = void 0 === a.fill ? " " : a.fill + ""),
				(this.align = void 0 === a.align ? ">" : a.align + ""),
				(this.sign = void 0 === a.sign ? "-" : a.sign + ""),
				(this.symbol = void 0 === a.symbol ? "" : a.symbol + ""),
				(this.zero = !!a.zero),
				(this.width = void 0 === a.width ? void 0 : +a.width),
				(this.comma = !!a.comma),
				(this.precision = void 0 === a.precision ? void 0 : +a.precision),
				(this.trim = !!a.trim),
				(this.type = void 0 === a.type ? "" : a.type + "")
		}
		function dU(a, b) {
			var c = dP(a, b)
			if (!c) return a + ""
			var d = c[0],
				e = c[1]
			return e < 0
				? "0." + Array(-e).join("0") + d
				: d.length > e + 1
					? d.slice(0, e + 1) + "." + d.slice(e + 1)
					: d + Array(e - d.length + 2).join("0")
		}
		;(dS.prototype = dT.prototype),
			(dT.prototype.toString = function () {
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
		let dV = {
			"%": (a, b) => (100 * a).toFixed(b),
			b: (a) => Math.round(a).toString(2),
			c: (a) => a + "",
			d: function (a) {
				return Math.abs((a = Math.round(a))) >= 1e21 ? a.toLocaleString("en").replace(/,/g, "") : a.toString(10)
			},
			e: (a, b) => a.toExponential(b),
			f: (a, b) => a.toFixed(b),
			g: (a, b) => a.toPrecision(b),
			o: (a) => Math.round(a).toString(8),
			p: (a, b) => dU(100 * a, b),
			r: dU,
			s: function (a, b) {
				var c = dP(a, b)
				if (!c) return a + ""
				var d = c[0],
					e = c[1],
					f = e - (gC = 3 * Math.max(-8, Math.min(8, Math.floor(e / 3)))) + 1,
					g = d.length
				return f === g
					? d
					: f > g
						? d + Array(f - g + 1).join("0")
						: f > 0
							? d.slice(0, f) + "." + d.slice(f)
							: "0." + Array(1 - f).join("0") + dP(a, Math.max(0, b + f - 1))[0]
			},
			X: (a) => Math.round(a).toString(16).toUpperCase(),
			x: (a) => Math.round(a).toString(16),
		}
		function dW(a) {
			return a
		}
		var dX = Array.prototype.map,
			dY = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"]
		function dZ(a, b, c, d) {
			var e,
				f,
				g = cT(a, b, c)
			switch ((d = dS(null == d ? ",f" : d)).type) {
				case "s":
					var h = Math.max(Math.abs(a), Math.abs(b))
					return (
						null != d.precision ||
							isNaN(
								(f = Math.max(
									0,
									3 * Math.max(-8, Math.min(8, Math.floor(dQ(h) / 3))) - dQ(Math.abs(g)),
								)),
							) ||
							(d.precision = f),
						gF(d, h)
					)
				case "":
				case "e":
				case "g":
				case "p":
				case "r":
					null != d.precision ||
						isNaN(
							(f =
								Math.max(
									0,
									dQ(Math.abs(Math.max(Math.abs(a), Math.abs(b))) - (e = Math.abs((e = g)))) - dQ(e),
								) + 1),
						) ||
						(d.precision = f - ("e" === d.type))
					break
				case "f":
				case "%":
					null != d.precision ||
						isNaN((f = Math.max(0, -dQ(Math.abs(g))))) ||
						(d.precision = f - ("%" === d.type) * 2)
			}
			return gE(d)
		}
		function d$(a) {
			var b = a.domain
			return (
				(a.ticks = function (a) {
					var c = b()
					return cR(c[0], c[c.length - 1], null == a ? 10 : a)
				}),
				(a.tickFormat = function (a, c) {
					var d = b()
					return dZ(d[0], d[d.length - 1], null == a ? 10 : a, c)
				}),
				(a.nice = function (c) {
					null == c && (c = 10)
					var d,
						e,
						f = b(),
						g = 0,
						h = f.length - 1,
						i = f[g],
						j = f[h],
						k = 10
					for (j < i && ((e = i), (i = j), (j = e), (e = g), (g = h), (h = e)); k-- > 0; ) {
						if ((e = cS(i, j, c)) === d) return (f[g] = i), (f[h] = j), b(f)
						if (e > 0) (i = Math.floor(i / e) * e), (j = Math.ceil(j / e) * e)
						else if (e < 0) (i = Math.ceil(i * e) / e), (j = Math.floor(j * e) / e)
						else break
						d = e
					}
					return a
				}),
				a
			)
		}
		function d_() {
			var a = dO()
			return (
				(a.copy = function () {
					return dM(a, d_())
				}),
				b4.apply(a, arguments),
				d$(a)
			)
		}
		function d0(a) {
			var b
			function c(a) {
				return null == a || isNaN((a *= 1)) ? b : a
			}
			return (
				(c.invert = c),
				(c.domain = c.range =
					function (b) {
						return arguments.length ? ((a = Array.from(b, dG)), c) : a.slice()
					}),
				(c.unknown = function (a) {
					return arguments.length ? ((b = a), c) : b
				}),
				(c.copy = function () {
					return d0(a).unknown(b)
				}),
				(a = arguments.length ? Array.from(a, dG) : [0, 1]),
				d$(c)
			)
		}
		function d1(a, b) {
			a = a.slice()
			var c,
				d = 0,
				e = a.length - 1,
				f = a[d],
				g = a[e]
			return (
				g < f && ((c = d), (d = e), (e = c), (c = f), (f = g), (g = c)),
				(a[d] = b.floor(f)),
				(a[e] = b.ceil(g)),
				a
			)
		}
		function d2(a) {
			return Math.log(a)
		}
		function d3(a) {
			return Math.exp(a)
		}
		function d4(a) {
			return -Math.log(-a)
		}
		function d5(a) {
			return -Math.exp(-a)
		}
		function d6(a) {
			return isFinite(a) ? +("1e" + a) : a < 0 ? 0 : a
		}
		function d7(a) {
			return (b, c) => -a(-b, c)
		}
		function d8(a) {
			let b,
				c,
				d = a(d2, d3),
				e = d.domain,
				f = 10
			function g() {
				var g, h
				return (
					(b =
						(g = f) === Math.E
							? Math.log
							: (10 === g && Math.log10) ||
								(2 === g && Math.log2) ||
								((g = Math.log(g)), (a) => Math.log(a) / g)),
					(c = 10 === (h = f) ? d6 : h === Math.E ? Math.exp : (a) => Math.pow(h, a)),
					e()[0] < 0 ? ((b = d7(b)), (c = d7(c)), a(d4, d5)) : a(d2, d3),
					d
				)
			}
			return (
				(d.base = function (a) {
					return arguments.length ? ((f = +a), g()) : f
				}),
				(d.domain = function (a) {
					return arguments.length ? (e(a), g()) : e()
				}),
				(d.ticks = (a) => {
					let d,
						g,
						h = e(),
						i = h[0],
						j = h[h.length - 1],
						k = j < i
					k && ([i, j] = [j, i])
					let l = b(i),
						m = b(j),
						n = null == a ? 10 : +a,
						o = []
					if (!(f % 1) && m - l < n) {
						if (((l = Math.floor(l)), (m = Math.ceil(m)), i > 0)) {
							for (; l <= m; ++l)
								for (d = 1; d < f; ++d)
									if (!((g = l < 0 ? d / c(-l) : d * c(l)) < i)) {
										if (g > j) break
										o.push(g)
									}
						} else
							for (; l <= m; ++l)
								for (d = f - 1; d >= 1; --d)
									if (!((g = l > 0 ? d / c(-l) : d * c(l)) < i)) {
										if (g > j) break
										o.push(g)
									}
						2 * o.length < n && (o = cR(i, j, n))
					} else o = cR(l, m, Math.min(m - l, n)).map(c)
					return k ? o.reverse() : o
				}),
				(d.tickFormat = (a, e) => {
					if (
						(null == a && (a = 10),
						null == e && (e = 10 === f ? "s" : ","),
						"function" != typeof e &&
							(f % 1 || null != (e = dS(e)).precision || (e.trim = !0), (e = gE(e))),
						a === 1 / 0)
					)
						return e
					let g = Math.max(1, (f * a) / d.ticks().length)
					return (a) => {
						let d = a / c(Math.round(b(a)))
						return d * f < f - 0.5 && (d *= f), d <= g ? e(a) : ""
					}
				}),
				(d.nice = () => e(d1(e(), { floor: (a) => c(Math.floor(b(a))), ceil: (a) => c(Math.ceil(b(a))) }))),
				d
			)
		}
		function d9() {
			let a = d8(dN()).domain([1, 10])
			return (a.copy = () => dM(a, d9()).base(a.base())), b4.apply(a, arguments), a
		}
		function ea(a) {
			return function (b) {
				return Math.sign(b) * Math.log1p(Math.abs(b / a))
			}
		}
		function eb(a) {
			return function (b) {
				return Math.sign(b) * Math.expm1(Math.abs(b)) * a
			}
		}
		function ec(a) {
			var b = 1,
				c = a(ea(1), eb(b))
			return (
				(c.constant = function (c) {
					return arguments.length ? a(ea((b = +c)), eb(b)) : b
				}),
				d$(c)
			)
		}
		function ed() {
			var a = ec(dN())
			return (
				(a.copy = function () {
					return dM(a, ed()).constant(a.constant())
				}),
				b4.apply(a, arguments)
			)
		}
		function ee(a) {
			return function (b) {
				return b < 0 ? -Math.pow(-b, a) : Math.pow(b, a)
			}
		}
		function ef(a) {
			return a < 0 ? -Math.sqrt(-a) : Math.sqrt(a)
		}
		function eg(a) {
			return a < 0 ? -a * a : a * a
		}
		function eh(a) {
			var b = a(dI, dI),
				c = 1
			return (
				(b.exponent = function (b) {
					return arguments.length
						? 1 == (c = +b)
							? a(dI, dI)
							: 0.5 === c
								? a(ef, eg)
								: a(ee(c), ee(1 / c))
						: c
				}),
				d$(b)
			)
		}
		function ei() {
			var a = eh(dN())
			return (
				(a.copy = function () {
					return dM(a, ei()).exponent(a.exponent())
				}),
				b4.apply(a, arguments),
				a
			)
		}
		function ej() {
			return ei.apply(null, arguments).exponent(0.5)
		}
		function ek(a) {
			return Math.sign(a) * a * a
		}
		function el() {
			var a,
				b = dO(),
				c = [0, 1],
				d = !1
			function e(c) {
				var e,
					f = Math.sign((e = b(c))) * Math.sqrt(Math.abs(e))
				return isNaN(f) ? a : d ? Math.round(f) : f
			}
			return (
				(e.invert = function (a) {
					return b.invert(ek(a))
				}),
				(e.domain = function (a) {
					return arguments.length ? (b.domain(a), e) : b.domain()
				}),
				(e.range = function (a) {
					return arguments.length ? (b.range((c = Array.from(a, dG)).map(ek)), e) : c.slice()
				}),
				(e.rangeRound = function (a) {
					return e.range(a).round(!0)
				}),
				(e.round = function (a) {
					return arguments.length ? ((d = !!a), e) : d
				}),
				(e.clamp = function (a) {
					return arguments.length ? (b.clamp(a), e) : b.clamp()
				}),
				(e.unknown = function (b) {
					return arguments.length ? ((a = b), e) : a
				}),
				(e.copy = function () {
					return el(b.domain(), c).round(d).clamp(b.clamp()).unknown(a)
				}),
				b4.apply(e, arguments),
				d$(e)
			)
		}
		function em(a, b) {
			let c
			if (void 0 === b) for (let b of a) null != b && (c < b || (void 0 === c && b >= b)) && (c = b)
			else {
				let d = -1
				for (let e of a) null != (e = b(e, ++d, a)) && (c < e || (void 0 === c && e >= e)) && (c = e)
			}
			return c
		}
		function en(a, b) {
			let c
			if (void 0 === b) for (let b of a) null != b && (c > b || (void 0 === c && b >= b)) && (c = b)
			else {
				let d = -1
				for (let e of a) null != (e = b(e, ++d, a)) && (c > e || (void 0 === c && e >= e)) && (c = e)
			}
			return c
		}
		function eo(a, b) {
			return (null == a || !(a >= a)) - (null == b || !(b >= b)) || (a < b ? -1 : +(a > b))
		}
		function ep(a, b, c) {
			let d = a[b]
			;(a[b] = a[c]), (a[c] = d)
		}
		function eq() {
			var a,
				b = [],
				c = [],
				d = []
			function e() {
				var a = 0,
					e = Math.max(1, c.length)
				for (d = Array(e - 1); ++a < e; )
					d[a - 1] = (function (a, b, c = cY) {
						if (!(!(d = a.length) || isNaN((b *= 1)))) {
							if (b <= 0 || d < 2) return +c(a[0], 0, a)
							if (b >= 1) return +c(a[d - 1], d - 1, a)
							var d,
								e = (d - 1) * b,
								f = Math.floor(e),
								g = +c(a[f], f, a)
							return g + (c(a[f + 1], f + 1, a) - g) * (e - f)
						}
					})(b, a / e)
				return f
			}
			function f(b) {
				return null == b || isNaN((b *= 1)) ? a : c[c$(d, b)]
			}
			return (
				(f.invertExtent = function (a) {
					var e = c.indexOf(a)
					return e < 0 ? [NaN, NaN] : [e > 0 ? d[e - 1] : b[0], e < d.length ? d[e] : b[b.length - 1]]
				}),
				(f.domain = function (a) {
					if (!arguments.length) return b.slice()
					for (let c of ((b = []), a)) null == c || isNaN((c *= 1)) || b.push(c)
					return b.sort(cU), e()
				}),
				(f.range = function (a) {
					return arguments.length ? ((c = Array.from(a)), e()) : c.slice()
				}),
				(f.unknown = function (b) {
					return arguments.length ? ((a = b), f) : a
				}),
				(f.quantiles = function () {
					return d.slice()
				}),
				(f.copy = function () {
					return eq().domain(b).range(c).unknown(a)
				}),
				b4.apply(f, arguments)
			)
		}
		function er() {
			var a,
				b = 0,
				c = 1,
				d = 1,
				e = [0.5],
				f = [0, 1]
			function g(b) {
				return null != b && b <= b ? f[c$(e, b, 0, d)] : a
			}
			function h() {
				var a = -1
				for (e = Array(d); ++a < d; ) e[a] = ((a + 1) * c - (a - d) * b) / (d + 1)
				return g
			}
			return (
				(g.domain = function (a) {
					return arguments.length ? (([b, c] = a), (b *= 1), (c *= 1), h()) : [b, c]
				}),
				(g.range = function (a) {
					return arguments.length ? ((d = (f = Array.from(a)).length - 1), h()) : f.slice()
				}),
				(g.invertExtent = function (a) {
					var g = f.indexOf(a)
					return g < 0 ? [NaN, NaN] : g < 1 ? [b, e[0]] : g >= d ? [e[d - 1], c] : [e[g - 1], e[g]]
				}),
				(g.unknown = function (b) {
					return arguments.length && (a = b), g
				}),
				(g.thresholds = function () {
					return e.slice()
				}),
				(g.copy = function () {
					return er().domain([b, c]).range(f).unknown(a)
				}),
				b4.apply(d$(g), arguments)
			)
		}
		function es() {
			var a,
				b = [0.5],
				c = [0, 1],
				d = 1
			function e(e) {
				return null != e && e <= e ? c[c$(b, e, 0, d)] : a
			}
			return (
				(e.domain = function (a) {
					return arguments.length ? ((d = Math.min((b = Array.from(a)).length, c.length - 1)), e) : b.slice()
				}),
				(e.range = function (a) {
					return arguments.length
						? ((c = Array.from(a)), (d = Math.min(b.length, c.length - 1)), e)
						: c.slice()
				}),
				(e.invertExtent = function (a) {
					var d = c.indexOf(a)
					return [b[d - 1], b[d]]
				}),
				(e.unknown = function (b) {
					return arguments.length ? ((a = b), e) : a
				}),
				(e.copy = function () {
					return es().domain(b).range(c).unknown(a)
				}),
				b4.apply(e, arguments)
			)
		}
		;(gE = (gD = (function (a) {
			var b,
				c,
				d,
				e =
					void 0 === a.grouping || void 0 === a.thousands
						? dW
						: ((b = dX.call(a.grouping, Number)),
							(c = a.thousands + ""),
							function (a, d) {
								for (
									var e = a.length, f = [], g = 0, h = b[0], i = 0;
									e > 0 &&
									h > 0 &&
									(i + h + 1 > d && (h = Math.max(1, d - i)),
									f.push(a.substring((e -= h), e + h)),
									!((i += h + 1) > d));

								)
									h = b[(g = (g + 1) % b.length)]
								return f.reverse().join(c)
							}),
				f = void 0 === a.currency ? "" : a.currency[0] + "",
				g = void 0 === a.currency ? "" : a.currency[1] + "",
				h = void 0 === a.decimal ? "." : a.decimal + "",
				i =
					void 0 === a.numerals
						? dW
						: ((d = dX.call(a.numerals, String)),
							function (a) {
								return a.replace(/[0-9]/g, function (a) {
									return d[+a]
								})
							}),
				j = void 0 === a.percent ? "%" : a.percent + "",
				k = void 0 === a.minus ? "−" : a.minus + "",
				l = void 0 === a.nan ? "NaN" : a.nan + ""
			function m(a) {
				var b = (a = dS(a)).fill,
					c = a.align,
					d = a.sign,
					m = a.symbol,
					n = a.zero,
					o = a.width,
					p = a.comma,
					q = a.precision,
					r = a.trim,
					s = a.type
				"n" === s ? ((p = !0), (s = "g")) : dV[s] || (void 0 === q && (q = 12), (r = !0), (s = "g")),
					(n || ("0" === b && "=" === c)) && ((n = !0), (b = "0"), (c = "="))
				var t = "$" === m ? f : "#" === m && /[boxX]/.test(s) ? "0" + s.toLowerCase() : "",
					u = "$" === m ? g : /[%p]/.test(s) ? j : "",
					v = dV[s],
					w = /[defgprs%]/.test(s)
				function x(a) {
					var f,
						g,
						j,
						m = t,
						x = u
					if ("c" === s) (x = v(a) + x), (a = "")
					else {
						var y = (a *= 1) < 0 || 1 / a < 0
						if (
							((a = isNaN(a) ? l : v(Math.abs(a), q)),
							r &&
								(a = (function (a) {
									a: for (var b, c = a.length, d = 1, e = -1; d < c; ++d)
										switch (a[d]) {
											case ".":
												e = b = d
												break
											case "0":
												0 === e && (e = d), (b = d)
												break
											default:
												if (!+a[d]) break a
												e > 0 && (e = 0)
										}
									return e > 0 ? a.slice(0, e) + a.slice(b + 1) : a
								})(a)),
							y && 0 == +a && "+" !== d && (y = !1),
							(m = (y ? ("(" === d ? d : k) : "-" === d || "(" === d ? "" : d) + m),
							(x = ("s" === s ? dY[8 + gC / 3] : "") + x + (y && "(" === d ? ")" : "")),
							w)
						) {
							for (f = -1, g = a.length; ++f < g; )
								if (48 > (j = a.charCodeAt(f)) || j > 57) {
									;(x = (46 === j ? h + a.slice(f + 1) : a.slice(f)) + x), (a = a.slice(0, f))
									break
								}
						}
					}
					p && !n && (a = e(a, 1 / 0))
					var z = m.length + a.length + x.length,
						A = z < o ? Array(o - z + 1).join(b) : ""
					switch ((p && n && ((a = e(A + a, A.length ? o - x.length : 1 / 0)), (A = "")), c)) {
						case "<":
							a = m + a + x + A
							break
						case "=":
							a = m + A + a + x
							break
						case "^":
							a = A.slice(0, (z = A.length >> 1)) + m + a + x + A.slice(z)
							break
						default:
							a = A + m + a + x
					}
					return i(a)
				}
				return (
					(q =
						void 0 === q
							? 6
							: /[gprs]/.test(s)
								? Math.max(1, Math.min(21, q))
								: Math.max(0, Math.min(20, q))),
					(x.toString = function () {
						return a + ""
					}),
					x
				)
			}
			return {
				format: m,
				formatPrefix: function (a, b) {
					var c = m((((a = dS(a)).type = "f"), a)),
						d = 3 * Math.max(-8, Math.min(8, Math.floor(dQ(b) / 3))),
						e = Math.pow(10, -d),
						f = dY[8 + d / 3]
					return function (a) {
						return c(e * a) + f
					}
				},
			}
		})({ thousands: ",", grouping: [3], currency: ["$", ""] })).format),
			(gF = gD.formatPrefix)
		let et = new Date(),
			eu = new Date()
		function ev(a, b, c, d) {
			function e(b) {
				return a((b = 0 == arguments.length ? new Date() : new Date(+b))), b
			}
			return (
				(e.floor = (b) => (a((b = new Date(+b))), b)),
				(e.ceil = (c) => (a((c = new Date(c - 1))), b(c, 1), a(c), c)),
				(e.round = (a) => {
					let b = e(a),
						c = e.ceil(a)
					return a - b < c - a ? b : c
				}),
				(e.offset = (a, c) => (b((a = new Date(+a)), null == c ? 1 : Math.floor(c)), a)),
				(e.range = (c, d, f) => {
					let g,
						h = []
					if (((c = e.ceil(c)), (f = null == f ? 1 : Math.floor(f)), !(c < d) || !(f > 0))) return h
					do h.push((g = new Date(+c))), b(c, f), a(c)
					while (g < c && c < d)
					return h
				}),
				(e.filter = (c) =>
					ev(
						(b) => {
							if (b >= b) for (; a(b), !c(b); ) b.setTime(b - 1)
						},
						(a, d) => {
							if (a >= a)
								if (d < 0) for (; ++d <= 0; ) for (; b(a, -1), !c(a); );
								else for (; --d >= 0; ) for (; b(a, 1), !c(a); );
						},
					)),
				c &&
					((e.count = (b, d) => (et.setTime(+b), eu.setTime(+d), a(et), a(eu), Math.floor(c(et, eu)))),
					(e.every = (a) =>
						isFinite((a = Math.floor(a))) && a > 0
							? a > 1
								? e.filter(d ? (b) => d(b) % a == 0 : (b) => e.count(0, b) % a == 0)
								: e
							: null)),
				e
			)
		}
		let ew = ev(
			(a) => {
				a.setMonth(0, 1), a.setHours(0, 0, 0, 0)
			},
			(a, b) => {
				a.setFullYear(a.getFullYear() + b)
			},
			(a, b) => b.getFullYear() - a.getFullYear(),
			(a) => a.getFullYear(),
		)
		;(ew.every = (a) =>
			isFinite((a = Math.floor(a))) && a > 0
				? ev(
						(b) => {
							b.setFullYear(Math.floor(b.getFullYear() / a) * a), b.setMonth(0, 1), b.setHours(0, 0, 0, 0)
						},
						(b, c) => {
							b.setFullYear(b.getFullYear() + c * a)
						},
					)
				: null),
			ew.range
		let ex = ev(
			(a) => {
				a.setUTCMonth(0, 1), a.setUTCHours(0, 0, 0, 0)
			},
			(a, b) => {
				a.setUTCFullYear(a.getUTCFullYear() + b)
			},
			(a, b) => b.getUTCFullYear() - a.getUTCFullYear(),
			(a) => a.getUTCFullYear(),
		)
		;(ex.every = (a) =>
			isFinite((a = Math.floor(a))) && a > 0
				? ev(
						(b) => {
							b.setUTCFullYear(Math.floor(b.getUTCFullYear() / a) * a),
								b.setUTCMonth(0, 1),
								b.setUTCHours(0, 0, 0, 0)
						},
						(b, c) => {
							b.setUTCFullYear(b.getUTCFullYear() + c * a)
						},
					)
				: null),
			ex.range
		let ey = ev(
			(a) => {
				a.setDate(1), a.setHours(0, 0, 0, 0)
			},
			(a, b) => {
				a.setMonth(a.getMonth() + b)
			},
			(a, b) => b.getMonth() - a.getMonth() + (b.getFullYear() - a.getFullYear()) * 12,
			(a) => a.getMonth(),
		)
		ey.range
		let ez = ev(
			(a) => {
				a.setUTCDate(1), a.setUTCHours(0, 0, 0, 0)
			},
			(a, b) => {
				a.setUTCMonth(a.getUTCMonth() + b)
			},
			(a, b) => b.getUTCMonth() - a.getUTCMonth() + (b.getUTCFullYear() - a.getUTCFullYear()) * 12,
			(a) => a.getUTCMonth(),
		)
		ez.range
		function eA(a) {
			return ev(
				(b) => {
					b.setDate(b.getDate() - ((b.getDay() + 7 - a) % 7)), b.setHours(0, 0, 0, 0)
				},
				(a, b) => {
					a.setDate(a.getDate() + 7 * b)
				},
				(a, b) => (b - a - (b.getTimezoneOffset() - a.getTimezoneOffset()) * 6e4) / 6048e5,
			)
		}
		let eB = eA(0),
			eC = eA(1),
			eD = eA(2),
			eE = eA(3),
			eF = eA(4),
			eG = eA(5),
			eH = eA(6)
		function eI(a) {
			return ev(
				(b) => {
					b.setUTCDate(b.getUTCDate() - ((b.getUTCDay() + 7 - a) % 7)), b.setUTCHours(0, 0, 0, 0)
				},
				(a, b) => {
					a.setUTCDate(a.getUTCDate() + 7 * b)
				},
				(a, b) => (b - a) / 6048e5,
			)
		}
		eB.range, eC.range, eD.range, eE.range, eF.range, eG.range, eH.range
		let eJ = eI(0),
			eK = eI(1),
			eL = eI(2),
			eM = eI(3),
			eN = eI(4),
			eO = eI(5),
			eP = eI(6)
		eJ.range, eK.range, eL.range, eM.range, eN.range, eO.range, eP.range
		let eQ = ev(
			(a) => a.setHours(0, 0, 0, 0),
			(a, b) => a.setDate(a.getDate() + b),
			(a, b) => (b - a - (b.getTimezoneOffset() - a.getTimezoneOffset()) * 6e4) / 864e5,
			(a) => a.getDate() - 1,
		)
		eQ.range
		let eR = ev(
			(a) => {
				a.setUTCHours(0, 0, 0, 0)
			},
			(a, b) => {
				a.setUTCDate(a.getUTCDate() + b)
			},
			(a, b) => (b - a) / 864e5,
			(a) => a.getUTCDate() - 1,
		)
		eR.range
		let eS = ev(
			(a) => {
				a.setUTCHours(0, 0, 0, 0)
			},
			(a, b) => {
				a.setUTCDate(a.getUTCDate() + b)
			},
			(a, b) => (b - a) / 864e5,
			(a) => Math.floor(a / 864e5),
		)
		eS.range
		let eT = ev(
			(a) => {
				a.setTime(a - a.getMilliseconds() - 1e3 * a.getSeconds() - 6e4 * a.getMinutes())
			},
			(a, b) => {
				a.setTime(+a + 36e5 * b)
			},
			(a, b) => (b - a) / 36e5,
			(a) => a.getHours(),
		)
		eT.range
		let eU = ev(
			(a) => {
				a.setUTCMinutes(0, 0, 0)
			},
			(a, b) => {
				a.setTime(+a + 36e5 * b)
			},
			(a, b) => (b - a) / 36e5,
			(a) => a.getUTCHours(),
		)
		eU.range
		let eV = ev(
			(a) => {
				a.setTime(a - a.getMilliseconds() - 1e3 * a.getSeconds())
			},
			(a, b) => {
				a.setTime(+a + 6e4 * b)
			},
			(a, b) => (b - a) / 6e4,
			(a) => a.getMinutes(),
		)
		eV.range
		let eW = ev(
			(a) => {
				a.setUTCSeconds(0, 0)
			},
			(a, b) => {
				a.setTime(+a + 6e4 * b)
			},
			(a, b) => (b - a) / 6e4,
			(a) => a.getUTCMinutes(),
		)
		eW.range
		let eX = ev(
			(a) => {
				a.setTime(a - a.getMilliseconds())
			},
			(a, b) => {
				a.setTime(+a + 1e3 * b)
			},
			(a, b) => (b - a) / 1e3,
			(a) => a.getUTCSeconds(),
		)
		eX.range
		let eY = ev(
			() => {},
			(a, b) => {
				a.setTime(+a + b)
			},
			(a, b) => b - a,
		)
		function eZ(a, b, c, d, e, f) {
			let g = [
				[eX, 1, 1e3],
				[eX, 5, 5e3],
				[eX, 15, 15e3],
				[eX, 30, 3e4],
				[f, 1, 6e4],
				[f, 5, 3e5],
				[f, 15, 9e5],
				[f, 30, 18e5],
				[e, 1, 36e5],
				[e, 3, 108e5],
				[e, 6, 216e5],
				[e, 12, 432e5],
				[d, 1, 864e5],
				[d, 2, 1728e5],
				[c, 1, 6048e5],
				[b, 1, 2592e6],
				[b, 3, 7776e6],
				[a, 1, 31536e6],
			]
			function h(b, c, d) {
				let e = Math.abs(c - b) / d,
					f = cW(([, , a]) => a).right(g, e)
				if (f === g.length) return a.every(cT(b / 31536e6, c / 31536e6, d))
				if (0 === f) return eY.every(Math.max(cT(b, c, d), 1))
				let [h, i] = g[e / g[f - 1][2] < g[f][2] / e ? f - 1 : f]
				return h.every(i)
			}
			return [
				function (a, b, c) {
					let d = b < a
					d && ([a, b] = [b, a])
					let e = c && "function" == typeof c.range ? c : h(a, b, c),
						f = e ? e.range(a, +b + 1) : []
					return d ? f.reverse() : f
				},
				h,
			]
		}
		;(eY.every = (a) =>
			isFinite((a = Math.floor(a))) && a > 0
				? a > 1
					? ev(
							(b) => {
								b.setTime(Math.floor(b / a) * a)
							},
							(b, c) => {
								b.setTime(+b + c * a)
							},
							(b, c) => (c - b) / a,
						)
					: eY
				: null),
			eY.range
		let [e$, e_] = eZ(ex, ez, eJ, eS, eU, eW),
			[e0, e1] = eZ(ew, ey, eB, eQ, eT, eV)
		function e2(a) {
			if (0 <= a.y && a.y < 100) {
				var b = new Date(-1, a.m, a.d, a.H, a.M, a.S, a.L)
				return b.setFullYear(a.y), b
			}
			return new Date(a.y, a.m, a.d, a.H, a.M, a.S, a.L)
		}
		function e3(a) {
			if (0 <= a.y && a.y < 100) {
				var b = new Date(Date.UTC(-1, a.m, a.d, a.H, a.M, a.S, a.L))
				return b.setUTCFullYear(a.y), b
			}
			return new Date(Date.UTC(a.y, a.m, a.d, a.H, a.M, a.S, a.L))
		}
		function e4(a, b, c) {
			return { y: a, m: b, d: c, H: 0, M: 0, S: 0, L: 0 }
		}
		var e5 = { "-": "", _: " ", 0: "0" },
			e6 = /^\s*\d+/,
			e7 = /^%/,
			e8 = /[\\^$*+?|[\]().{}]/g
		function e9(a, b, c) {
			var d = a < 0 ? "-" : "",
				e = (d ? -a : a) + "",
				f = e.length
			return d + (f < c ? Array(c - f + 1).join(b) + e : e)
		}
		function fa(a) {
			return a.replace(e8, "\\$&")
		}
		function fb(a) {
			return RegExp("^(?:" + a.map(fa).join("|") + ")", "i")
		}
		function fc(a) {
			return new Map(a.map((a, b) => [a.toLowerCase(), b]))
		}
		function fd(a, b, c) {
			var d = e6.exec(b.slice(c, c + 1))
			return d ? ((a.w = +d[0]), c + d[0].length) : -1
		}
		function fe(a, b, c) {
			var d = e6.exec(b.slice(c, c + 1))
			return d ? ((a.u = +d[0]), c + d[0].length) : -1
		}
		function ff(a, b, c) {
			var d = e6.exec(b.slice(c, c + 2))
			return d ? ((a.U = +d[0]), c + d[0].length) : -1
		}
		function fg(a, b, c) {
			var d = e6.exec(b.slice(c, c + 2))
			return d ? ((a.V = +d[0]), c + d[0].length) : -1
		}
		function fh(a, b, c) {
			var d = e6.exec(b.slice(c, c + 2))
			return d ? ((a.W = +d[0]), c + d[0].length) : -1
		}
		function fi(a, b, c) {
			var d = e6.exec(b.slice(c, c + 4))
			return d ? ((a.y = +d[0]), c + d[0].length) : -1
		}
		function fj(a, b, c) {
			var d = e6.exec(b.slice(c, c + 2))
			return d ? ((a.y = +d[0] + (+d[0] > 68 ? 1900 : 2e3)), c + d[0].length) : -1
		}
		function fk(a, b, c) {
			var d = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(b.slice(c, c + 6))
			return d ? ((a.Z = d[1] ? 0 : -(d[2] + (d[3] || "00"))), c + d[0].length) : -1
		}
		function fl(a, b, c) {
			var d = e6.exec(b.slice(c, c + 1))
			return d ? ((a.q = 3 * d[0] - 3), c + d[0].length) : -1
		}
		function fm(a, b, c) {
			var d = e6.exec(b.slice(c, c + 2))
			return d ? ((a.m = d[0] - 1), c + d[0].length) : -1
		}
		function fn(a, b, c) {
			var d = e6.exec(b.slice(c, c + 2))
			return d ? ((a.d = +d[0]), c + d[0].length) : -1
		}
		function fo(a, b, c) {
			var d = e6.exec(b.slice(c, c + 3))
			return d ? ((a.m = 0), (a.d = +d[0]), c + d[0].length) : -1
		}
		function fp(a, b, c) {
			var d = e6.exec(b.slice(c, c + 2))
			return d ? ((a.H = +d[0]), c + d[0].length) : -1
		}
		function fq(a, b, c) {
			var d = e6.exec(b.slice(c, c + 2))
			return d ? ((a.M = +d[0]), c + d[0].length) : -1
		}
		function fr(a, b, c) {
			var d = e6.exec(b.slice(c, c + 2))
			return d ? ((a.S = +d[0]), c + d[0].length) : -1
		}
		function fs(a, b, c) {
			var d = e6.exec(b.slice(c, c + 3))
			return d ? ((a.L = +d[0]), c + d[0].length) : -1
		}
		function ft(a, b, c) {
			var d = e6.exec(b.slice(c, c + 6))
			return d ? ((a.L = Math.floor(d[0] / 1e3)), c + d[0].length) : -1
		}
		function fu(a, b, c) {
			var d = e7.exec(b.slice(c, c + 1))
			return d ? c + d[0].length : -1
		}
		function fv(a, b, c) {
			var d = e6.exec(b.slice(c))
			return d ? ((a.Q = +d[0]), c + d[0].length) : -1
		}
		function fw(a, b, c) {
			var d = e6.exec(b.slice(c))
			return d ? ((a.s = +d[0]), c + d[0].length) : -1
		}
		function fx(a, b) {
			return e9(a.getDate(), b, 2)
		}
		function fy(a, b) {
			return e9(a.getHours(), b, 2)
		}
		function fz(a, b) {
			return e9(a.getHours() % 12 || 12, b, 2)
		}
		function fA(a, b) {
			return e9(1 + eQ.count(ew(a), a), b, 3)
		}
		function fB(a, b) {
			return e9(a.getMilliseconds(), b, 3)
		}
		function fC(a, b) {
			return fB(a, b) + "000"
		}
		function fD(a, b) {
			return e9(a.getMonth() + 1, b, 2)
		}
		function fE(a, b) {
			return e9(a.getMinutes(), b, 2)
		}
		function fF(a, b) {
			return e9(a.getSeconds(), b, 2)
		}
		function fG(a) {
			var b = a.getDay()
			return 0 === b ? 7 : b
		}
		function fH(a, b) {
			return e9(eB.count(ew(a) - 1, a), b, 2)
		}
		function fI(a) {
			var b = a.getDay()
			return b >= 4 || 0 === b ? eF(a) : eF.ceil(a)
		}
		function fJ(a, b) {
			return (a = fI(a)), e9(eF.count(ew(a), a) + (4 === ew(a).getDay()), b, 2)
		}
		function fK(a) {
			return a.getDay()
		}
		function fL(a, b) {
			return e9(eC.count(ew(a) - 1, a), b, 2)
		}
		function fM(a, b) {
			return e9(a.getFullYear() % 100, b, 2)
		}
		function fN(a, b) {
			return e9((a = fI(a)).getFullYear() % 100, b, 2)
		}
		function fO(a, b) {
			return e9(a.getFullYear() % 1e4, b, 4)
		}
		function fP(a, b) {
			var c = a.getDay()
			return e9((a = c >= 4 || 0 === c ? eF(a) : eF.ceil(a)).getFullYear() % 1e4, b, 4)
		}
		function fQ(a) {
			var b = a.getTimezoneOffset()
			return (b > 0 ? "-" : ((b *= -1), "+")) + e9((b / 60) | 0, "0", 2) + e9(b % 60, "0", 2)
		}
		function fR(a, b) {
			return e9(a.getUTCDate(), b, 2)
		}
		function fS(a, b) {
			return e9(a.getUTCHours(), b, 2)
		}
		function fT(a, b) {
			return e9(a.getUTCHours() % 12 || 12, b, 2)
		}
		function fU(a, b) {
			return e9(1 + eR.count(ex(a), a), b, 3)
		}
		function fV(a, b) {
			return e9(a.getUTCMilliseconds(), b, 3)
		}
		function fW(a, b) {
			return fV(a, b) + "000"
		}
		function fX(a, b) {
			return e9(a.getUTCMonth() + 1, b, 2)
		}
		function fY(a, b) {
			return e9(a.getUTCMinutes(), b, 2)
		}
		function fZ(a, b) {
			return e9(a.getUTCSeconds(), b, 2)
		}
		function f$(a) {
			var b = a.getUTCDay()
			return 0 === b ? 7 : b
		}
		function f_(a, b) {
			return e9(eJ.count(ex(a) - 1, a), b, 2)
		}
		function f0(a) {
			var b = a.getUTCDay()
			return b >= 4 || 0 === b ? eN(a) : eN.ceil(a)
		}
		function f1(a, b) {
			return (a = f0(a)), e9(eN.count(ex(a), a) + (4 === ex(a).getUTCDay()), b, 2)
		}
		function f2(a) {
			return a.getUTCDay()
		}
		function f3(a, b) {
			return e9(eK.count(ex(a) - 1, a), b, 2)
		}
		function f4(a, b) {
			return e9(a.getUTCFullYear() % 100, b, 2)
		}
		function f5(a, b) {
			return e9((a = f0(a)).getUTCFullYear() % 100, b, 2)
		}
		function f6(a, b) {
			return e9(a.getUTCFullYear() % 1e4, b, 4)
		}
		function f7(a, b) {
			var c = a.getUTCDay()
			return e9((a = c >= 4 || 0 === c ? eN(a) : eN.ceil(a)).getUTCFullYear() % 1e4, b, 4)
		}
		function f8() {
			return "+0000"
		}
		function f9() {
			return "%"
		}
		function ga(a) {
			return +a
		}
		function gb(a) {
			return Math.floor(a / 1e3)
		}
		function gc(a) {
			return new Date(a)
		}
		function gd(a) {
			return a instanceof Date ? +a : +new Date(+a)
		}
		function ge(a, b, c, d, e, f, g, h, i, j) {
			var k = dO(),
				l = k.invert,
				m = k.domain,
				n = j(".%L"),
				o = j(":%S"),
				p = j("%I:%M"),
				q = j("%I %p"),
				r = j("%a %d"),
				s = j("%b %d"),
				t = j("%B"),
				u = j("%Y")
			function v(a) {
				return (
					i(a) < a
						? n
						: h(a) < a
							? o
							: g(a) < a
								? p
								: f(a) < a
									? q
									: d(a) < a
										? e(a) < a
											? r
											: s
										: c(a) < a
											? t
											: u
				)(a)
			}
			return (
				(k.invert = function (a) {
					return new Date(l(a))
				}),
				(k.domain = function (a) {
					return arguments.length ? m(Array.from(a, gd)) : m().map(gc)
				}),
				(k.ticks = function (b) {
					var c = m()
					return a(c[0], c[c.length - 1], null == b ? 10 : b)
				}),
				(k.tickFormat = function (a, b) {
					return null == b ? v : j(b)
				}),
				(k.nice = function (a) {
					var c = m()
					return (
						(a && "function" == typeof a.range) || (a = b(c[0], c[c.length - 1], null == a ? 10 : a)),
						a ? m(d1(c, a)) : k
					)
				}),
				(k.copy = function () {
					return dM(k, ge(a, b, c, d, e, f, g, h, i, j))
				}),
				k
			)
		}
		function gf() {
			return b4.apply(
				ge(e0, e1, ew, ey, eB, eQ, eT, eV, eX, gH).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]),
				arguments,
			)
		}
		function gg() {
			return b4.apply(
				ge(e$, e_, ex, ez, eJ, eR, eU, eW, eX, gI).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]),
				arguments,
			)
		}
		function gh() {
			var a,
				b,
				c,
				d,
				e,
				f = 0,
				g = 1,
				h = dI,
				i = !1
			function j(b) {
				return null == b || isNaN((b *= 1))
					? e
					: h(0 === c ? 0.5 : ((b = (d(b) - a) * c), i ? Math.max(0, Math.min(1, b)) : b))
			}
			function k(a) {
				return function (b) {
					var c, d
					return arguments.length ? (([c, d] = b), (h = a(c, d)), j) : [h(0), h(1)]
				}
			}
			return (
				(j.domain = function (e) {
					return arguments.length
						? (([f, g] = e), (a = d((f *= 1))), (b = d((g *= 1))), (c = a === b ? 0 : 1 / (b - a)), j)
						: [f, g]
				}),
				(j.clamp = function (a) {
					return arguments.length ? ((i = !!a), j) : i
				}),
				(j.interpolator = function (a) {
					return arguments.length ? ((h = a), j) : h
				}),
				(j.range = k(dE)),
				(j.rangeRound = k(dF)),
				(j.unknown = function (a) {
					return arguments.length ? ((e = a), j) : e
				}),
				function (e) {
					return (d = e), (a = e(f)), (b = e(g)), (c = a === b ? 0 : 1 / (b - a)), j
				}
			)
		}
		function gi(a, b) {
			return b.domain(a.domain()).interpolator(a.interpolator()).clamp(a.clamp()).unknown(a.unknown())
		}
		function gj() {
			var a = d$(gh()(dI))
			return (
				(a.copy = function () {
					return gi(a, gj())
				}),
				b5.apply(a, arguments)
			)
		}
		function gk() {
			var a = d8(gh()).domain([1, 10])
			return (
				(a.copy = function () {
					return gi(a, gk()).base(a.base())
				}),
				b5.apply(a, arguments)
			)
		}
		function gl() {
			var a = ec(gh())
			return (
				(a.copy = function () {
					return gi(a, gl()).constant(a.constant())
				}),
				b5.apply(a, arguments)
			)
		}
		function gm() {
			var a = eh(gh())
			return (
				(a.copy = function () {
					return gi(a, gm()).exponent(a.exponent())
				}),
				b5.apply(a, arguments)
			)
		}
		function gn() {
			return gm.apply(null, arguments).exponent(0.5)
		}
		function go() {
			var a = [],
				b = dI
			function c(c) {
				if (null != c && !isNaN((c *= 1))) return b((c$(a, c, 1) - 1) / (a.length - 1))
			}
			return (
				(c.domain = function (b) {
					if (!arguments.length) return a.slice()
					for (let c of ((a = []), b)) null == c || isNaN((c *= 1)) || a.push(c)
					return a.sort(cU), c
				}),
				(c.interpolator = function (a) {
					return arguments.length ? ((b = a), c) : b
				}),
				(c.range = function () {
					return a.map((c, d) => b(d / (a.length - 1)))
				}),
				(c.quantiles = function (b) {
					return Array.from({ length: b + 1 }, (c, d) =>
						(function (a, b, c) {
							if (
								!(
									!(d = (a = Float64Array.from(
										(function* (a, b) {
											if (void 0 === b) for (let b of a) null != b && (b *= 1) >= b && (yield b)
											else {
												let c = -1
												for (let d of a)
													null != (d = b(d, ++c, a)) && (d *= 1) >= d && (yield d)
											}
										})(a, void 0),
									)).length) || isNaN((b *= 1))
								)
							) {
								if (b <= 0 || d < 2) return en(a)
								if (b >= 1) return em(a)
								var d,
									e = (d - 1) * b,
									f = Math.floor(e),
									g = em(
										(function a(b, c, d = 0, e = 1 / 0, f) {
											if (
												((c = Math.floor(c)),
												(d = Math.floor(Math.max(0, d))),
												(e = Math.floor(Math.min(b.length - 1, e))),
												!(d <= c && c <= e))
											)
												return b
											for (
												f =
													void 0 === f
														? eo
														: (function (a = cU) {
																if (a === cU) return eo
																if ("function" != typeof a)
																	throw TypeError("compare is not a function")
																return (b, c) => {
																	let d = a(b, c)
																	return d || 0 === d
																		? d
																		: (0 === a(c, c)) - (0 === a(b, b))
																}
															})(f);
												e > d;

											) {
												if (e - d > 600) {
													let g = e - d + 1,
														h = c - d + 1,
														i = Math.log(g),
														j = 0.5 * Math.exp((2 * i) / 3),
														k =
															0.5 *
															Math.sqrt((i * j * (g - j)) / g) *
															(h - g / 2 < 0 ? -1 : 1),
														l = Math.max(d, Math.floor(c - (h * j) / g + k)),
														m = Math.min(e, Math.floor(c + ((g - h) * j) / g + k))
													a(b, c, l, m, f)
												}
												let g = b[c],
													h = d,
													i = e
												for (ep(b, d, c), f(b[e], g) > 0 && ep(b, d, e); h < i; ) {
													for (ep(b, h, i), ++h, --i; 0 > f(b[h], g); ) ++h
													for (; f(b[i], g) > 0; ) --i
												}
												0 === f(b[d], g) ? ep(b, d, i) : ep(b, ++i, e),
													i <= c && (d = i + 1),
													c <= i && (e = i - 1)
											}
											return b
										})(a, f).subarray(0, f + 1),
									)
								return g + (en(a.subarray(f + 1)) - g) * (e - f)
							}
						})(a, d / b),
					)
				}),
				(c.copy = function () {
					return go(b).domain(a)
				}),
				b5.apply(c, arguments)
			)
		}
		function gp() {
			var a,
				b,
				c,
				d,
				e,
				f,
				g,
				h = 0,
				i = 0.5,
				j = 1,
				k = 1,
				l = dI,
				m = !1
			function n(a) {
				return isNaN((a *= 1))
					? g
					: ((a = 0.5 + ((a = +f(a)) - b) * (k * a < k * b ? d : e)), l(m ? Math.max(0, Math.min(1, a)) : a))
			}
			function o(a) {
				return function (b) {
					var c, d, e
					return arguments.length
						? (([c, d, e] = b),
							(l = (function (a, b) {
								void 0 === b && ((b = a), (a = dE))
								for (var c = 0, d = b.length - 1, e = b[0], f = Array(d < 0 ? 0 : d); c < d; )
									f[c] = a(e, (e = b[++c]))
								return function (a) {
									var b = Math.max(0, Math.min(d - 1, Math.floor((a *= d))))
									return f[b](a - b)
								}
							})(a, [c, d, e])),
							n)
						: [l(0), l(0.5), l(1)]
				}
			}
			return (
				(n.domain = function (g) {
					return arguments.length
						? (([h, i, j] = g),
							(a = f((h *= 1))),
							(b = f((i *= 1))),
							(c = f((j *= 1))),
							(d = a === b ? 0 : 0.5 / (b - a)),
							(e = b === c ? 0 : 0.5 / (c - b)),
							(k = b < a ? -1 : 1),
							n)
						: [h, i, j]
				}),
				(n.clamp = function (a) {
					return arguments.length ? ((m = !!a), n) : m
				}),
				(n.interpolator = function (a) {
					return arguments.length ? ((l = a), n) : l
				}),
				(n.range = o(dE)),
				(n.rangeRound = o(dF)),
				(n.unknown = function (a) {
					return arguments.length ? ((g = a), n) : g
				}),
				function (g) {
					return (
						(f = g),
						(a = g(h)),
						(b = g(i)),
						(c = g(j)),
						(d = a === b ? 0 : 0.5 / (b - a)),
						(e = b === c ? 0 : 0.5 / (c - b)),
						(k = b < a ? -1 : 1),
						n
					)
				}
			)
		}
		function gq() {
			var a = d$(gp()(dI))
			return (
				(a.copy = function () {
					return gi(a, gq())
				}),
				b5.apply(a, arguments)
			)
		}
		function gr() {
			var a = d8(gp()).domain([0.1, 1, 10])
			return (
				(a.copy = function () {
					return gi(a, gr()).base(a.base())
				}),
				b5.apply(a, arguments)
			)
		}
		function gs() {
			var a = ec(gp())
			return (
				(a.copy = function () {
					return gi(a, gs()).constant(a.constant())
				}),
				b5.apply(a, arguments)
			)
		}
		function gt() {
			var a = eh(gp())
			return (
				(a.copy = function () {
					return gi(a, gt()).exponent(a.exponent())
				}),
				b5.apply(a, arguments)
			)
		}
		function gu() {
			return gt.apply(null, arguments).exponent(0.5)
		}
		;(gH = (gG = (function (a) {
			var b = a.dateTime,
				c = a.date,
				d = a.time,
				e = a.periods,
				f = a.days,
				g = a.shortDays,
				h = a.months,
				i = a.shortMonths,
				j = fb(e),
				k = fc(e),
				l = fb(f),
				m = fc(f),
				n = fb(g),
				o = fc(g),
				p = fb(h),
				q = fc(h),
				r = fb(i),
				s = fc(i),
				t = {
					a: function (a) {
						return g[a.getDay()]
					},
					A: function (a) {
						return f[a.getDay()]
					},
					b: function (a) {
						return i[a.getMonth()]
					},
					B: function (a) {
						return h[a.getMonth()]
					},
					c: null,
					d: fx,
					e: fx,
					f: fC,
					g: fN,
					G: fP,
					H: fy,
					I: fz,
					j: fA,
					L: fB,
					m: fD,
					M: fE,
					p: function (a) {
						return e[+(a.getHours() >= 12)]
					},
					q: function (a) {
						return 1 + ~~(a.getMonth() / 3)
					},
					Q: ga,
					s: gb,
					S: fF,
					u: fG,
					U: fH,
					V: fJ,
					w: fK,
					W: fL,
					x: null,
					X: null,
					y: fM,
					Y: fO,
					Z: fQ,
					"%": f9,
				},
				u = {
					a: function (a) {
						return g[a.getUTCDay()]
					},
					A: function (a) {
						return f[a.getUTCDay()]
					},
					b: function (a) {
						return i[a.getUTCMonth()]
					},
					B: function (a) {
						return h[a.getUTCMonth()]
					},
					c: null,
					d: fR,
					e: fR,
					f: fW,
					g: f5,
					G: f7,
					H: fS,
					I: fT,
					j: fU,
					L: fV,
					m: fX,
					M: fY,
					p: function (a) {
						return e[+(a.getUTCHours() >= 12)]
					},
					q: function (a) {
						return 1 + ~~(a.getUTCMonth() / 3)
					},
					Q: ga,
					s: gb,
					S: fZ,
					u: f$,
					U: f_,
					V: f1,
					w: f2,
					W: f3,
					x: null,
					X: null,
					y: f4,
					Y: f6,
					Z: f8,
					"%": f9,
				},
				v = {
					a: function (a, b, c) {
						var d = n.exec(b.slice(c))
						return d ? ((a.w = o.get(d[0].toLowerCase())), c + d[0].length) : -1
					},
					A: function (a, b, c) {
						var d = l.exec(b.slice(c))
						return d ? ((a.w = m.get(d[0].toLowerCase())), c + d[0].length) : -1
					},
					b: function (a, b, c) {
						var d = r.exec(b.slice(c))
						return d ? ((a.m = s.get(d[0].toLowerCase())), c + d[0].length) : -1
					},
					B: function (a, b, c) {
						var d = p.exec(b.slice(c))
						return d ? ((a.m = q.get(d[0].toLowerCase())), c + d[0].length) : -1
					},
					c: function (a, c, d) {
						return y(a, b, c, d)
					},
					d: fn,
					e: fn,
					f: ft,
					g: fj,
					G: fi,
					H: fp,
					I: fp,
					j: fo,
					L: fs,
					m: fm,
					M: fq,
					p: function (a, b, c) {
						var d = j.exec(b.slice(c))
						return d ? ((a.p = k.get(d[0].toLowerCase())), c + d[0].length) : -1
					},
					q: fl,
					Q: fv,
					s: fw,
					S: fr,
					u: fe,
					U: ff,
					V: fg,
					w: fd,
					W: fh,
					x: function (a, b, d) {
						return y(a, c, b, d)
					},
					X: function (a, b, c) {
						return y(a, d, b, c)
					},
					y: fj,
					Y: fi,
					Z: fk,
					"%": fu,
				}
			function w(a, b) {
				return function (c) {
					var d,
						e,
						f,
						g = [],
						h = -1,
						i = 0,
						j = a.length
					for (c instanceof Date || (c = new Date(+c)); ++h < j; )
						37 === a.charCodeAt(h) &&
							(g.push(a.slice(i, h)),
							null != (e = e5[(d = a.charAt(++h))]) ? (d = a.charAt(++h)) : (e = "e" === d ? " " : "0"),
							(f = b[d]) && (d = f(c, e)),
							g.push(d),
							(i = h + 1))
					return g.push(a.slice(i, h)), g.join("")
				}
			}
			function x(a, b) {
				return function (c) {
					var d,
						e,
						f = e4(1900, void 0, 1)
					if (y(f, a, (c += ""), 0) != c.length) return null
					if ("Q" in f) return new Date(f.Q)
					if ("s" in f) return new Date(1e3 * f.s + ("L" in f ? f.L : 0))
					if (
						(!b || "Z" in f || (f.Z = 0),
						"p" in f && (f.H = (f.H % 12) + 12 * f.p),
						void 0 === f.m && (f.m = "q" in f ? f.q : 0),
						"V" in f)
					) {
						if (f.V < 1 || f.V > 53) return null
						"w" in f || (f.w = 1),
							"Z" in f
								? ((d = (e = (d = e3(e4(f.y, 0, 1))).getUTCDay()) > 4 || 0 === e ? eK.ceil(d) : eK(d)),
									(d = eR.offset(d, (f.V - 1) * 7)),
									(f.y = d.getUTCFullYear()),
									(f.m = d.getUTCMonth()),
									(f.d = d.getUTCDate() + ((f.w + 6) % 7)))
								: ((d = (e = (d = e2(e4(f.y, 0, 1))).getDay()) > 4 || 0 === e ? eC.ceil(d) : eC(d)),
									(d = eQ.offset(d, (f.V - 1) * 7)),
									(f.y = d.getFullYear()),
									(f.m = d.getMonth()),
									(f.d = d.getDate() + ((f.w + 6) % 7)))
					} else
						("W" in f || "U" in f) &&
							("w" in f || (f.w = "u" in f ? f.u % 7 : +("W" in f)),
							(e = "Z" in f ? e3(e4(f.y, 0, 1)).getUTCDay() : e2(e4(f.y, 0, 1)).getDay()),
							(f.m = 0),
							(f.d =
								"W" in f ? ((f.w + 6) % 7) + 7 * f.W - ((e + 5) % 7) : f.w + 7 * f.U - ((e + 6) % 7)))
					return "Z" in f ? ((f.H += (f.Z / 100) | 0), (f.M += f.Z % 100), e3(f)) : e2(f)
				}
			}
			function y(a, b, c, d) {
				for (var e, f, g = 0, h = b.length, i = c.length; g < h; ) {
					if (d >= i) return -1
					if (37 === (e = b.charCodeAt(g++))) {
						if (!(f = v[(e = b.charAt(g++)) in e5 ? b.charAt(g++) : e]) || (d = f(a, c, d)) < 0) return -1
					} else if (e != c.charCodeAt(d++)) return -1
				}
				return d
			}
			return (
				(t.x = w(c, t)),
				(t.X = w(d, t)),
				(t.c = w(b, t)),
				(u.x = w(c, u)),
				(u.X = w(d, u)),
				(u.c = w(b, u)),
				{
					format: function (a) {
						var b = w((a += ""), t)
						return (
							(b.toString = function () {
								return a
							}),
							b
						)
					},
					parse: function (a) {
						var b = x((a += ""), !1)
						return (
							(b.toString = function () {
								return a
							}),
							b
						)
					},
					utcFormat: function (a) {
						var b = w((a += ""), u)
						return (
							(b.toString = function () {
								return a
							}),
							b
						)
					},
					utcParse: function (a) {
						var b = x((a += ""), !0)
						return (
							(b.toString = function () {
								return a
							}),
							b
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
			gG.parse,
			(gI = gG.utcFormat),
			gG.utcParse,
			a.s(
				[
					"scaleBand",
					() => cb,
					"scaleDiverging",
					() => gq,
					"scaleDivergingLog",
					() => gr,
					"scaleDivergingPow",
					() => gt,
					"scaleDivergingSqrt",
					() => gu,
					"scaleDivergingSymlog",
					() => gs,
					"scaleIdentity",
					() => d0,
					"scaleImplicit",
					0,
					b9,
					"scaleLinear",
					() => d_,
					"scaleLog",
					() => d9,
					"scaleOrdinal",
					() => ca,
					"scalePoint",
					() => cc,
					"scalePow",
					() => ei,
					"scaleQuantile",
					() => eq,
					"scaleQuantize",
					() => er,
					"scaleRadial",
					() => el,
					"scaleSequential",
					() => gj,
					"scaleSequentialLog",
					() => gk,
					"scaleSequentialPow",
					() => gm,
					"scaleSequentialQuantile",
					() => go,
					"scaleSequentialSqrt",
					() => gn,
					"scaleSequentialSymlog",
					() => gl,
					"scaleSqrt",
					() => ej,
					"scaleSymlog",
					() => ed,
					"scaleThreshold",
					() => es,
					"scaleTime",
					() => gf,
					"scaleUtc",
					() => gg,
					"tickFormat",
					() => dZ,
				],
				99830,
			),
			a.i(99830),
			a.s(
				[
					"scaleBand",
					() => cb,
					"scaleDiverging",
					() => gq,
					"scaleDivergingLog",
					() => gr,
					"scaleDivergingPow",
					() => gt,
					"scaleDivergingSqrt",
					() => gu,
					"scaleDivergingSymlog",
					() => gs,
					"scaleIdentity",
					() => d0,
					"scaleImplicit",
					0,
					b9,
					"scaleLinear",
					() => d_,
					"scaleLog",
					() => d9,
					"scaleOrdinal",
					() => ca,
					"scalePoint",
					() => cc,
					"scalePow",
					() => ei,
					"scaleQuantile",
					() => eq,
					"scaleQuantize",
					() => er,
					"scaleRadial",
					() => el,
					"scaleSequential",
					() => gj,
					"scaleSequentialLog",
					() => gk,
					"scaleSequentialPow",
					() => gm,
					"scaleSequentialQuantile",
					() => go,
					"scaleSequentialSqrt",
					() => gn,
					"scaleSequentialSymlog",
					() => gl,
					"scaleSqrt",
					() => ej,
					"scaleSymlog",
					() => ed,
					"scaleThreshold",
					() => es,
					"scaleTime",
					() => gf,
					"scaleUtc",
					() => gg,
					"tickFormat",
					() => dZ,
				],
				94811,
			)
		var gv = a.i(94811)
		function gw(a) {
			return "object" == typeof a && "length" in a ? a : Array.from(a)
		}
		a.i(35389), Array.prototype.slice
		var gx = a.i(33111)
		function gy(a, b) {
			if ((e = a.length) > 1)
				for (var c, d, e, f = 1, g = a[b[0]], h = g.length; f < e; ++f)
					for (d = g, g = a[b[f]], c = 0; c < h; ++c) g[c][1] += g[c][0] = isNaN(d[c][1]) ? d[c][0] : d[c][1]
		}
		function gz(a) {
			for (var b = a.length, c = Array(b); --b >= 0; ) c[b] = b
			return c
		}
		function gA(a, b) {
			return a[b]
		}
		function gB(a) {
			let b = []
			return (b.key = a), b
		}
		var gC,
			gD,
			gE,
			gF,
			gG,
			gH,
			gI,
			gJ,
			gK,
			gL = a.i(67535),
			gM = a.i(57153),
			gN = a.i(64517),
			gO = a.i(52255),
			gP = a.i(59673),
			gQ = a.i(79631),
			gR = a.i(91163),
			gS = !0,
			gT = "[DecimalError] ",
			gU = gT + "Invalid argument: ",
			gV = gT + "Exponent out of range: ",
			gW = Math.floor,
			gX = Math.pow,
			gY = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
			gZ = gW(1286742750677284.5),
			g$ = {}
		function g_(a, b) {
			var c,
				d,
				e,
				f,
				g,
				h,
				i,
				j,
				k = a.constructor,
				l = k.precision
			if (!a.s || !b.s) return b.s || (b = new k(a)), gS ? g9(b, l) : b
			if (((i = a.d), (j = b.d), (g = a.e), (e = b.e), (i = i.slice()), (f = g - e))) {
				for (
					f < 0 ? ((d = i), (f = -f), (h = j.length)) : ((d = j), (e = g), (h = i.length)),
						f > (h = (g = Math.ceil(l / 7)) > h ? g + 1 : h + 1) && ((f = h), (d.length = 1)),
						d.reverse();
					f--;

				)
					d.push(0)
				d.reverse()
			}
			for ((h = i.length) - (f = j.length) < 0 && ((f = h), (d = j), (j = i), (i = d)), c = 0; f; )
				(c = ((i[--f] = i[f] + j[f] + c) / 1e7) | 0), (i[f] %= 1e7)
			for (c && (i.unshift(c), ++e), h = i.length; 0 == i[--h]; ) i.pop()
			return (b.d = i), (b.e = e), gS ? g9(b, l) : b
		}
		function g0(a, b, c) {
			if (a !== ~~a || a < b || a > c) throw Error(gU + a)
		}
		function g1(a) {
			var b,
				c,
				d,
				e = a.length - 1,
				f = "",
				g = a[0]
			if (e > 0) {
				for (f += g, b = 1; b < e; b++) (c = 7 - (d = a[b] + "").length) && (f += g6(c)), (f += d)
				;(c = 7 - (d = (g = a[b]) + "").length) && (f += g6(c))
			} else if (0 === g) return "0"
			for (; g % 10 == 0; ) g /= 10
			return f + g
		}
		;(g$.absoluteValue = g$.abs =
			function () {
				var a = new this.constructor(this)
				return a.s && (a.s = 1), a
			}),
			(g$.comparedTo = g$.cmp =
				function (a) {
					var b, c, d, e
					if (((a = new this.constructor(a)), this.s !== a.s)) return this.s || -a.s
					if (this.e !== a.e) return (this.e > a.e) ^ (this.s < 0) ? 1 : -1
					for (b = 0, c = (d = this.d.length) < (e = a.d.length) ? d : e; b < c; ++b)
						if (this.d[b] !== a.d[b]) return (this.d[b] > a.d[b]) ^ (this.s < 0) ? 1 : -1
					return d === e ? 0 : (d > e) ^ (this.s < 0) ? 1 : -1
				}),
			(g$.decimalPlaces = g$.dp =
				function () {
					var a = this.d.length - 1,
						b = (a - this.e) * 7
					if ((a = this.d[a])) for (; a % 10 == 0; a /= 10) b--
					return b < 0 ? 0 : b
				}),
			(g$.dividedBy = g$.div =
				function (a) {
					return g2(this, new this.constructor(a))
				}),
			(g$.dividedToIntegerBy = g$.idiv =
				function (a) {
					var b = this.constructor
					return g9(g2(this, new b(a), 0, 1), b.precision)
				}),
			(g$.equals = g$.eq =
				function (a) {
					return !this.cmp(a)
				}),
			(g$.exponent = function () {
				return g4(this)
			}),
			(g$.greaterThan = g$.gt =
				function (a) {
					return this.cmp(a) > 0
				}),
			(g$.greaterThanOrEqualTo = g$.gte =
				function (a) {
					return this.cmp(a) >= 0
				}),
			(g$.isInteger = g$.isint =
				function () {
					return this.e > this.d.length - 2
				}),
			(g$.isNegative = g$.isneg =
				function () {
					return this.s < 0
				}),
			(g$.isPositive = g$.ispos =
				function () {
					return this.s > 0
				}),
			(g$.isZero = function () {
				return 0 === this.s
			}),
			(g$.lessThan = g$.lt =
				function (a) {
					return 0 > this.cmp(a)
				}),
			(g$.lessThanOrEqualTo = g$.lte =
				function (a) {
					return 1 > this.cmp(a)
				}),
			(g$.logarithm = g$.log =
				function (a) {
					var b,
						c = this.constructor,
						d = c.precision,
						e = d + 5
					if (void 0 === a) a = new c(10)
					else if ((a = new c(a)).s < 1 || a.eq(gK)) throw Error(gT + "NaN")
					if (this.s < 1) throw Error(gT + (this.s ? "NaN" : "-Infinity"))
					return this.eq(gK) ? new c(0) : ((gS = !1), (b = g2(g7(this, e), g7(a, e), e)), (gS = !0), g9(b, d))
				}),
			(g$.minus = g$.sub =
				function (a) {
					return (a = new this.constructor(a)), this.s == a.s ? ha(this, a) : g_(this, ((a.s = -a.s), a))
				}),
			(g$.modulo = g$.mod =
				function (a) {
					var b,
						c = this.constructor,
						d = c.precision
					if (!(a = new c(a)).s) throw Error(gT + "NaN")
					return this.s
						? ((gS = !1), (b = g2(this, a, 0, 1).times(a)), (gS = !0), this.minus(b))
						: g9(new c(this), d)
				}),
			(g$.naturalExponential = g$.exp =
				function () {
					return g3(this)
				}),
			(g$.naturalLogarithm = g$.ln =
				function () {
					return g7(this)
				}),
			(g$.negated = g$.neg =
				function () {
					var a = new this.constructor(this)
					return (a.s = -a.s || 0), a
				}),
			(g$.plus = g$.add =
				function (a) {
					return (a = new this.constructor(a)), this.s == a.s ? g_(this, a) : ha(this, ((a.s = -a.s), a))
				}),
			(g$.precision = g$.sd =
				function (a) {
					var b, c, d
					if (void 0 !== a && !!a !== a && 1 !== a && 0 !== a) throw Error(gU + a)
					if (((b = g4(this) + 1), (c = 7 * (d = this.d.length - 1) + 1), (d = this.d[d]))) {
						for (; d % 10 == 0; d /= 10) c--
						for (d = this.d[0]; d >= 10; d /= 10) c++
					}
					return a && b > c ? b : c
				}),
			(g$.squareRoot = g$.sqrt =
				function () {
					var a,
						b,
						c,
						d,
						e,
						f,
						g,
						h = this.constructor
					if (this.s < 1) {
						if (!this.s) return new h(0)
						throw Error(gT + "NaN")
					}
					for (
						a = g4(this),
							gS = !1,
							0 == (e = Math.sqrt(+this)) || e == 1 / 0
								? (((b = g1(this.d)).length + a) % 2 == 0 && (b += "0"),
									(e = Math.sqrt(b)),
									(a = gW((a + 1) / 2) - (a < 0 || a % 2)),
									(d = new h(
										(b =
											e == 1 / 0
												? "5e" + a
												: (b = e.toExponential()).slice(0, b.indexOf("e") + 1) + a),
									)))
								: (d = new h(e.toString())),
							e = g = (c = h.precision) + 3;
						;

					)
						if (
							((d = (f = d).plus(g2(this, f, g + 2)).times(0.5)),
							g1(f.d).slice(0, g) === (b = g1(d.d)).slice(0, g))
						) {
							if (((b = b.slice(g - 3, g + 1)), e == g && "4999" == b)) {
								if ((g9(f, c + 1, 0), f.times(f).eq(this))) {
									d = f
									break
								}
							} else if ("9999" != b) break
							g += 4
						}
					return (gS = !0), g9(d, c)
				}),
			(g$.times = g$.mul =
				function (a) {
					var b,
						c,
						d,
						e,
						f,
						g,
						h,
						i,
						j,
						k = this.constructor,
						l = this.d,
						m = (a = new k(a)).d
					if (!this.s || !a.s) return new k(0)
					for (
						a.s *= this.s,
							c = this.e + a.e,
							(i = l.length) < (j = m.length) && ((f = l), (l = m), (m = f), (g = i), (i = j), (j = g)),
							f = [],
							d = g = i + j;
						d--;

					)
						f.push(0)
					for (d = j; --d >= 0; ) {
						for (b = 0, e = i + d; e > d; )
							(h = f[e] + m[d] * l[e - d - 1] + b), (f[e--] = h % 1e7 | 0), (b = (h / 1e7) | 0)
						f[e] = (f[e] + b) % 1e7 | 0
					}
					for (; !f[--g]; ) f.pop()
					return b ? ++c : f.shift(), (a.d = f), (a.e = c), gS ? g9(a, k.precision) : a
				}),
			(g$.toDecimalPlaces = g$.todp =
				function (a, b) {
					var c = this,
						d = c.constructor
					return ((c = new d(c)), void 0 === a)
						? c
						: (g0(a, 0, 1e9), void 0 === b ? (b = d.rounding) : g0(b, 0, 8), g9(c, a + g4(c) + 1, b))
				}),
			(g$.toExponential = function (a, b) {
				var c,
					d = this,
					e = d.constructor
				return (
					void 0 === a
						? (c = hb(d, !0))
						: (g0(a, 0, 1e9),
							void 0 === b ? (b = e.rounding) : g0(b, 0, 8),
							(c = hb((d = g9(new e(d), a + 1, b)), !0, a + 1))),
					c
				)
			}),
			(g$.toFixed = function (a, b) {
				var c,
					d,
					e = this.constructor
				return void 0 === a
					? hb(this)
					: (g0(a, 0, 1e9),
						void 0 === b ? (b = e.rounding) : g0(b, 0, 8),
						(c = hb((d = g9(new e(this), a + g4(this) + 1, b)).abs(), !1, a + g4(d) + 1)),
						this.isneg() && !this.isZero() ? "-" + c : c)
			}),
			(g$.toInteger = g$.toint =
				function () {
					var a = this.constructor
					return g9(new a(this), g4(this) + 1, a.rounding)
				}),
			(g$.toNumber = function () {
				return +this
			}),
			(g$.toPower = g$.pow =
				function (a) {
					var b,
						c,
						d,
						e,
						f,
						g,
						h = this,
						i = h.constructor,
						j = +(a = new i(a))
					if (!a.s) return new i(gK)
					if (!(h = new i(h)).s) {
						if (a.s < 1) throw Error(gT + "Infinity")
						return h
					}
					if (h.eq(gK)) return h
					if (((d = i.precision), a.eq(gK))) return g9(h, d)
					if (((g = (b = a.e) >= (c = a.d.length - 1)), (f = h.s), g)) {
						if ((c = j < 0 ? -j : j) <= 0x1fffffffffffff) {
							for (
								e = new i(gK), b = Math.ceil(d / 7 + 4), gS = !1;
								c % 2 && hc((e = e.times(h)).d, b), 0 !== (c = gW(c / 2));

							)
								hc((h = h.times(h)).d, b)
							return (gS = !0), a.s < 0 ? new i(gK).div(e) : g9(e, d)
						}
					} else if (f < 0) throw Error(gT + "NaN")
					return (
						(f = f < 0 && 1 & a.d[Math.max(b, c)] ? -1 : 1),
						(h.s = 1),
						(gS = !1),
						(e = a.times(g7(h, d + 12))),
						(gS = !0),
						((e = g3(e)).s = f),
						e
					)
				}),
			(g$.toPrecision = function (a, b) {
				var c,
					d,
					e = this,
					f = e.constructor
				return (
					void 0 === a
						? ((c = g4(e)), (d = hb(e, c <= f.toExpNeg || c >= f.toExpPos)))
						: (g0(a, 1, 1e9),
							void 0 === b ? (b = f.rounding) : g0(b, 0, 8),
							(c = g4((e = g9(new f(e), a, b)))),
							(d = hb(e, a <= c || c <= f.toExpNeg, a))),
					d
				)
			}),
			(g$.toSignificantDigits = g$.tosd =
				function (a, b) {
					var c = this.constructor
					return (
						void 0 === a
							? ((a = c.precision), (b = c.rounding))
							: (g0(a, 1, 1e9), void 0 === b ? (b = c.rounding) : g0(b, 0, 8)),
						g9(new c(this), a, b)
					)
				}),
			(g$.toString =
				g$.valueOf =
				g$.val =
				g$.toJSON =
				g$[Symbol.for("nodejs.util.inspect.custom")] =
					function () {
						var a = g4(this),
							b = this.constructor
						return hb(this, a <= b.toExpNeg || a >= b.toExpPos)
					})
		var g2 = (function () {
			function a(a, b) {
				var c,
					d = 0,
					e = a.length
				for (a = a.slice(); e--; ) (c = a[e] * b + d), (a[e] = c % 1e7 | 0), (d = (c / 1e7) | 0)
				return d && a.unshift(d), a
			}
			function b(a, b, c, d) {
				var e, f
				if (c != d) f = c > d ? 1 : -1
				else
					for (e = f = 0; e < c; e++)
						if (a[e] != b[e]) {
							f = a[e] > b[e] ? 1 : -1
							break
						}
				return f
			}
			function c(a, b, c) {
				for (var d = 0; c--; ) (a[c] -= d), (d = +(a[c] < b[c])), (a[c] = 1e7 * d + a[c] - b[c])
				for (; !a[0] && a.length > 1; ) a.shift()
			}
			return function (d, e, f, g) {
				var h,
					i,
					j,
					k,
					l,
					m,
					n,
					o,
					p,
					q,
					r,
					s,
					t,
					u,
					v,
					w,
					x,
					y,
					z = d.constructor,
					A = d.s == e.s ? 1 : -1,
					B = d.d,
					C = e.d
				if (!d.s) return new z(d)
				if (!e.s) throw Error(gT + "Division by zero")
				for (j = 0, i = d.e - e.e, x = C.length, v = B.length, o = (n = new z(A)).d = []; C[j] == (B[j] || 0); )
					++j
				if (
					(C[j] > (B[j] || 0) && --i,
					(s = null == f ? (f = z.precision) : g ? f + (g4(d) - g4(e)) + 1 : f) < 0)
				)
					return new z(0)
				if (((s = (s / 7 + 2) | 0), (j = 0), 1 == x))
					for (k = 0, C = C[0], s++; (j < v || k) && s--; j++)
						(t = 1e7 * k + (B[j] || 0)), (o[j] = (t / C) | 0), (k = t % C | 0)
				else {
					for (
						(k = (1e7 / (C[0] + 1)) | 0) > 1 &&
							((C = a(C, k)), (B = a(B, k)), (x = C.length), (v = B.length)),
							u = x,
							q = (p = B.slice(0, x)).length;
						q < x;

					)
						p[q++] = 0
					;(y = C.slice()).unshift(0), (w = C[0]), C[1] >= 1e7 / 2 && ++w
					do
						(k = 0),
							(h = b(C, p, x, q)) < 0
								? ((r = p[0]),
									x != q && (r = 1e7 * r + (p[1] || 0)),
									(k = (r / w) | 0) > 1
										? (k >= 1e7 && (k = 1e7 - 1),
											(m = (l = a(C, k)).length),
											(q = p.length),
											1 == (h = b(l, p, m, q)) && (k--, c(l, x < m ? y : C, m)))
										: (0 == k && (h = k = 1), (l = C.slice())),
									(m = l.length) < q && l.unshift(0),
									c(p, l, q),
									-1 == h &&
										((q = p.length), (h = b(C, p, x, q)) < 1 && (k++, c(p, x < q ? y : C, q))),
									(q = p.length))
								: 0 === h && (k++, (p = [0])),
							(o[j++] = k),
							h && p[0] ? (p[q++] = B[u] || 0) : ((p = [B[u]]), (q = 1))
					while ((u++ < v || void 0 !== p[0]) && s--)
				}
				return o[0] || o.shift(), (n.e = i), g9(n, g ? f + g4(n) + 1 : f)
			}
		})()
		function g3(a, b) {
			var c,
				d,
				e,
				f,
				g,
				h = 0,
				i = 0,
				j = a.constructor,
				k = j.precision
			if (g4(a) > 16) throw Error(gV + g4(a))
			if (!a.s) return new j(gK)
			for (null == b ? ((gS = !1), (g = k)) : (g = b), f = new j(0.03125); a.abs().gte(0.1); )
				(a = a.times(f)), (i += 5)
			for (g += ((Math.log(gX(2, i)) / Math.LN10) * 2 + 5) | 0, c = d = e = new j(gK), j.precision = g; ; ) {
				if (
					((d = g9(d.times(a), g)),
					(c = c.times(++h)),
					g1((f = e.plus(g2(d, c, g))).d).slice(0, g) === g1(e.d).slice(0, g))
				) {
					for (; i--; ) e = g9(e.times(e), g)
					return (j.precision = k), null == b ? ((gS = !0), g9(e, k)) : e
				}
				e = f
			}
		}
		function g4(a) {
			for (var b = 7 * a.e, c = a.d[0]; c >= 10; c /= 10) b++
			return b
		}
		function g5(a, b, c) {
			if (b > a.LN10.sd()) throw ((gS = !0), c && (a.precision = c), Error(gT + "LN10 precision limit exceeded"))
			return g9(new a(a.LN10), b)
		}
		function g6(a) {
			for (var b = ""; a--; ) b += "0"
			return b
		}
		function g7(a, b) {
			var c,
				d,
				e,
				f,
				g,
				h,
				i,
				j,
				k,
				l = 1,
				m = a,
				n = m.d,
				o = m.constructor,
				p = o.precision
			if (m.s < 1) throw Error(gT + (m.s ? "NaN" : "-Infinity"))
			if (m.eq(gK)) return new o(0)
			if ((null == b ? ((gS = !1), (j = p)) : (j = b), m.eq(10))) return null == b && (gS = !0), g5(o, j)
			if (((o.precision = j += 10), (d = (c = g1(n)).charAt(0)), !(15e14 > Math.abs((f = g4(m))))))
				return (
					(i = g5(o, j + 2, p).times(f + "")),
					(m = g7(new o(d + "." + c.slice(1)), j - 10).plus(i)),
					(o.precision = p),
					null == b ? ((gS = !0), g9(m, p)) : m
				)
			for (; (d < 7 && 1 != d) || (1 == d && c.charAt(1) > 3); ) (d = (c = g1((m = m.times(a)).d)).charAt(0)), l++
			for (
				f = g4(m),
					d > 1 ? ((m = new o("0." + c)), f++) : (m = new o(d + "." + c.slice(1))),
					h = g = m = g2(m.minus(gK), m.plus(gK), j),
					k = g9(m.times(m), j),
					e = 3;
				;

			) {
				if (
					((g = g9(g.times(k), j)),
					g1((i = h.plus(g2(g, new o(e), j))).d).slice(0, j) === g1(h.d).slice(0, j))
				)
					return (
						(h = h.times(2)),
						0 !== f && (h = h.plus(g5(o, j + 2, p).times(f + ""))),
						(h = g2(h, new o(l), j)),
						(o.precision = p),
						null == b ? ((gS = !0), g9(h, p)) : h
					)
				;(h = i), (e += 2)
			}
		}
		function g8(a, b) {
			var c, d, e
			for (
				(c = b.indexOf(".")) > -1 && (b = b.replace(".", "")),
					(d = b.search(/e/i)) > 0
						? (c < 0 && (c = d), (c += +b.slice(d + 1)), (b = b.substring(0, d)))
						: c < 0 && (c = b.length),
					d = 0;
				48 === b.charCodeAt(d);

			)
				++d
			for (e = b.length; 48 === b.charCodeAt(e - 1); ) --e
			if ((b = b.slice(d, e))) {
				if (
					((e -= d), (a.e = gW((c = c - d - 1) / 7)), (a.d = []), (d = (c + 1) % 7), c < 0 && (d += 7), d < e)
				) {
					for (d && a.d.push(+b.slice(0, d)), e -= 7; d < e; ) a.d.push(+b.slice(d, (d += 7)))
					d = 7 - (b = b.slice(d)).length
				} else d -= e
				for (; d--; ) b += "0"
				if ((a.d.push(+b), gS && (a.e > gZ || a.e < -gZ))) throw Error(gV + c)
			} else (a.s = 0), (a.e = 0), (a.d = [0])
			return a
		}
		function g9(a, b, c) {
			var d,
				e,
				f,
				g,
				h,
				i,
				j,
				k,
				l = a.d
			for (g = 1, f = l[0]; f >= 10; f /= 10) g++
			if ((d = b - g) < 0) (d += 7), (e = b), (j = l[(k = 0)])
			else {
				if ((k = Math.ceil((d + 1) / 7)) >= (f = l.length)) return a
				for (g = 1, j = f = l[k]; f >= 10; f /= 10) g++
				;(d %= 7), (e = d - 7 + g)
			}
			if (
				(void 0 !== c &&
					((h = (j / (f = gX(10, g - e - 1))) % 10 | 0),
					(i = b < 0 || void 0 !== l[k + 1] || j % f),
					(i =
						c < 4
							? (h || i) && (0 == c || c == (a.s < 0 ? 3 : 2))
							: h > 5 ||
								(5 == h &&
									(4 == c ||
										i ||
										(6 == c && (d > 0 ? (e > 0 ? j / gX(10, g - e) : 0) : l[k - 1]) % 10 & 1) ||
										c == (a.s < 0 ? 8 : 7))))),
				b < 1 || !l[0])
			)
				return (
					i
						? ((f = g4(a)),
							(l.length = 1),
							(b = b - f - 1),
							(l[0] = gX(10, (7 - (b % 7)) % 7)),
							(a.e = gW(-b / 7) || 0))
						: ((l.length = 1), (l[0] = a.e = a.s = 0)),
					a
				)
			if (
				(0 == d
					? ((l.length = k), (f = 1), k--)
					: ((l.length = k + 1),
						(f = gX(10, 7 - d)),
						(l[k] = e > 0 ? ((j / gX(10, g - e)) % gX(10, e) | 0) * f : 0)),
				i)
			)
				for (;;)
					if (0 == k) {
						1e7 == (l[0] += f) && ((l[0] = 1), ++a.e)
						break
					} else {
						if (((l[k] += f), 1e7 != l[k])) break
						;(l[k--] = 0), (f = 1)
					}
			for (d = l.length; 0 === l[--d]; ) l.pop()
			if (gS && (a.e > gZ || a.e < -gZ)) throw Error(gV + g4(a))
			return a
		}
		function ha(a, b) {
			var c,
				d,
				e,
				f,
				g,
				h,
				i,
				j,
				k,
				l,
				m = a.constructor,
				n = m.precision
			if (!a.s || !b.s) return b.s ? (b.s = -b.s) : (b = new m(a)), gS ? g9(b, n) : b
			if (((i = a.d), (l = b.d), (d = b.e), (j = a.e), (i = i.slice()), (g = j - d))) {
				for (
					(k = g < 0) ? ((c = i), (g = -g), (h = l.length)) : ((c = l), (d = j), (h = i.length)),
						g > (e = Math.max(Math.ceil(n / 7), h) + 2) && ((g = e), (c.length = 1)),
						c.reverse(),
						e = g;
					e--;

				)
					c.push(0)
				c.reverse()
			} else {
				for ((k = (e = i.length) < (h = l.length)) && (h = e), e = 0; e < h; e++)
					if (i[e] != l[e]) {
						k = i[e] < l[e]
						break
					}
				g = 0
			}
			for (k && ((c = i), (i = l), (l = c), (b.s = -b.s)), h = i.length, e = l.length - h; e > 0; --e) i[h++] = 0
			for (e = l.length; e > g; ) {
				if (i[--e] < l[e]) {
					for (f = e; f && 0 === i[--f]; ) i[f] = 1e7 - 1
					--i[f], (i[e] += 1e7)
				}
				i[e] -= l[e]
			}
			for (; 0 === i[--h]; ) i.pop()
			for (; 0 === i[0]; i.shift()) --d
			return i[0] ? ((b.d = i), (b.e = d), gS ? g9(b, n) : b) : new m(0)
		}
		function hb(a, b, c) {
			var d,
				e = g4(a),
				f = g1(a.d),
				g = f.length
			return (
				b
					? (c && (d = c - g) > 0
							? (f = f.charAt(0) + "." + f.slice(1) + g6(d))
							: g > 1 && (f = f.charAt(0) + "." + f.slice(1)),
						(f = f + (e < 0 ? "e" : "e+") + e))
					: e < 0
						? ((f = "0." + g6(-e - 1) + f), c && (d = c - g) > 0 && (f += g6(d)))
						: e >= g
							? ((f += g6(e + 1 - g)), c && (d = c - e - 1) > 0 && (f = f + "." + g6(d)))
							: ((d = e + 1) < g && (f = f.slice(0, d) + "." + f.slice(d)),
								c && (d = c - g) > 0 && (e + 1 === g && (f += "."), (f += g6(d)))),
				a.s < 0 ? "-" + f : f
			)
		}
		function hc(a, b) {
			if (a.length > b) return (a.length = b), !0
		}
		function hd(a) {
			if (!a || "object" != typeof a) throw Error(gT + "Object expected")
			var b,
				c,
				d,
				e = ["precision", 1, 1e9, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0]
			for (b = 0; b < e.length; b += 3)
				if (void 0 !== (d = a[(c = e[b])]))
					if (gW(d) === d && d >= e[b + 1] && d <= e[b + 2]) this[c] = d
					else throw Error(gU + c + ": " + d)
			if (void 0 !== (d = a[(c = "LN10")]))
				if (d == Math.LN10) this[c] = new this(d)
				else throw Error(gU + c + ": " + d)
			return this
		}
		var gJ = (function a(b) {
			var c, d, e
			function f(a) {
				if (!(this instanceof f)) return new f(a)
				if (((this.constructor = f), a instanceof f)) {
					;(this.s = a.s), (this.e = a.e), (this.d = (a = a.d) ? a.slice() : a)
					return
				}
				if ("number" == typeof a) {
					if (0 * a != 0) throw Error(gU + a)
					if (a > 0) this.s = 1
					else if (a < 0) (a = -a), (this.s = -1)
					else {
						;(this.s = 0), (this.e = 0), (this.d = [0])
						return
					}
					if (a === ~~a && a < 1e7) {
						;(this.e = 0), (this.d = [a])
						return
					}
					return g8(this, a.toString())
				}
				if ("string" != typeof a) throw Error(gU + a)
				if ((45 === a.charCodeAt(0) ? ((a = a.slice(1)), (this.s = -1)) : (this.s = 1), gY.test(a))) g8(this, a)
				else throw Error(gU + a)
			}
			if (
				((f.prototype = g$),
				(f.ROUND_UP = 0),
				(f.ROUND_DOWN = 1),
				(f.ROUND_CEIL = 2),
				(f.ROUND_FLOOR = 3),
				(f.ROUND_HALF_UP = 4),
				(f.ROUND_HALF_DOWN = 5),
				(f.ROUND_HALF_EVEN = 6),
				(f.ROUND_HALF_CEIL = 7),
				(f.ROUND_HALF_FLOOR = 8),
				(f.clone = a),
				(f.config = f.set = hd),
				void 0 === b && (b = {}),
				b)
			)
				for (c = 0, e = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"]; c < e.length; )
					b.hasOwnProperty((d = e[c++])) || (b[d] = this[d])
			return f.config(b), f
		})({
			precision: 20,
			rounding: 4,
			toExpNeg: -7,
			toExpPos: 21,
			LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
		})
		gK = new gJ(1)
		let he = gJ
		function hf(a, b) {
			;(null == b || b > a.length) && (b = a.length)
			for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]
			return d
		}
		var hg = function (a) {
				return a
			},
			hh = {},
			hi = function (a) {
				return a === hh
			},
			hj = function (a) {
				return function b() {
					return 0 == arguments.length ||
						(1 == arguments.length && hi(arguments.length <= 0 ? void 0 : arguments[0]))
						? b
						: a.apply(void 0, arguments)
				}
			},
			hk = function (a) {
				return (function a(b, c) {
					return 1 === b
						? c
						: hj(function () {
								for (var d = arguments.length, e = Array(d), f = 0; f < d; f++) e[f] = arguments[f]
								var g = e.filter(function (a) {
									return a !== hh
								}).length
								return g >= b
									? c.apply(void 0, e)
									: a(
											b - g,
											hj(function () {
												for (var a = arguments.length, b = Array(a), d = 0; d < a; d++)
													b[d] = arguments[d]
												var f = e.map(function (a) {
													return hi(a) ? b.shift() : a
												})
												return c.apply(
													void 0,
													(
														(function (a) {
															if (Array.isArray(a)) return hf(a)
														})(f) ||
														(function (a) {
															if ("u" > typeof Symbol && Symbol.iterator in Object(a))
																return Array.from(a)
														})(f) ||
														(function (a, b) {
															if (a) {
																if ("string" == typeof a) return hf(a, void 0)
																var c = Object.prototype.toString.call(a).slice(8, -1)
																if (
																	("Object" === c &&
																		a.constructor &&
																		(c = a.constructor.name),
																	"Map" === c || "Set" === c)
																)
																	return Array.from(a)
																if (
																	"Arguments" === c ||
																	/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
																)
																	return hf(a, void 0)
															}
														})(f) ||
														(function () {
															throw TypeError(
																"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
															)
														})()
													).concat(b),
												)
											}),
										)
							})
				})(a.length, a)
			},
			hl = function (a, b) {
				for (var c = [], d = a; d < b; ++d) c[d - a] = d
				return c
			},
			hm = hk(function (a, b) {
				return Array.isArray(b)
					? b.map(a)
					: Object.keys(b)
							.map(function (a) {
								return b[a]
							})
							.map(a)
			}),
			hn = function () {
				for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c]
				if (!b.length) return hg
				var d = b.reverse(),
					e = d[0],
					f = d.slice(1)
				return function () {
					return f.reduce(
						function (a, b) {
							return b(a)
						},
						e.apply(void 0, arguments),
					)
				}
			},
			ho = function (a) {
				return Array.isArray(a) ? a.reverse() : a.split("").reverse.join("")
			},
			hp = function (a) {
				var b = null,
					c = null
				return function () {
					for (var d = arguments.length, e = Array(d), f = 0; f < d; f++) e[f] = arguments[f]
					return b &&
						e.every(function (a, c) {
							return a === b[c]
						})
						? c
						: ((b = e), (c = a.apply(void 0, e)))
				}
			}
		hk(function (a, b, c) {
			var d = +a
			return d + c * (b - d)
		}),
			hk(function (a, b, c) {
				var d = b - a
				return (c - a) / (d = d || 1 / 0)
			}),
			hk(function (a, b, c) {
				var d = b - a
				return Math.max(0, Math.min(1, (c - a) / (d = d || 1 / 0)))
			})
		let hq = function (a, b, c) {
				for (var d = new he(a), e = 0, f = []; d.lt(b) && e < 1e5; ) f.push(d.toNumber()), (d = d.add(c)), e++
				return f
			},
			hr = function (a) {
				return 0 === a ? 1 : Math.floor(new he(a).abs().log(10).toNumber()) + 1
			}
		function hs(a) {
			return (
				(function (a) {
					if (Array.isArray(a)) return hv(a)
				})(a) ||
				(function (a) {
					if ("u" > typeof Symbol && Symbol.iterator in Object(a)) return Array.from(a)
				})(a) ||
				hu(a) ||
				(function () {
					throw TypeError(
						"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function ht(a, b) {
			return (
				(function (a) {
					if (Array.isArray(a)) return a
				})(a) ||
				(function (a, b) {
					if ("u" > typeof Symbol && Symbol.iterator in Object(a)) {
						var c = [],
							d = !0,
							e = !1,
							f = void 0
						try {
							for (
								var g, h = a[Symbol.iterator]();
								!(d = (g = h.next()).done) && (c.push(g.value), !b || c.length !== b);
								d = !0
							);
						} catch (a) {
							;(e = !0), (f = a)
						} finally {
							try {
								d || null == h.return || h.return()
							} finally {
								if (e) throw f
							}
						}
						return c
					}
				})(a, b) ||
				hu(a, b) ||
				(function () {
					throw TypeError(
						"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function hu(a, b) {
			if (a) {
				if ("string" == typeof a) return hv(a, b)
				var c = Object.prototype.toString.call(a).slice(8, -1)
				if (("Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c))
					return Array.from(a)
				if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return hv(a, b)
			}
		}
		function hv(a, b) {
			;(null == b || b > a.length) && (b = a.length)
			for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]
			return d
		}
		function hw(a) {
			var b = ht(a, 2),
				c = b[0],
				d = b[1],
				e = c,
				f = d
			return c > d && ((e = d), (f = c)), [e, f]
		}
		function hx(a, b, c) {
			if (a.lte(0)) return new he(0)
			var d = hr(a.toNumber()),
				e = new he(10).pow(d),
				f = a.div(e),
				g = 1 !== d ? 0.05 : 0.1,
				h = new he(Math.ceil(f.div(g).toNumber())).add(c).mul(g).mul(e)
			return b ? h : new he(Math.ceil(h))
		}
		function hy(a, b, c) {
			var d = 1,
				e = new he(a)
			if (!e.isint() && c) {
				var f = Math.abs(a)
				f < 1
					? ((d = new he(10).pow(hr(a) - 1)), (e = new he(Math.floor(e.div(d).toNumber())).mul(d)))
					: f > 1 && (e = new he(Math.floor(a)))
			} else 0 === a ? (e = new he(Math.floor((b - 1) / 2))) : c || (e = new he(Math.floor(a)))
			var g = Math.floor((b - 1) / 2)
			return hn(
				hm(function (a) {
					return e.add(new he(a - g).mul(d)).toNumber()
				}),
				hl,
			)(0, b)
		}
		var hz = hp(function (a) {
			var b = ht(a, 2),
				c = b[0],
				d = b[1],
				e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
				f = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
				g = Math.max(e, 2),
				h = ht(hw([c, d]), 2),
				i = h[0],
				j = h[1]
			if (i === -1 / 0 || j === 1 / 0) {
				var k =
					j === 1 / 0
						? [i].concat(
								hs(
									hl(0, e - 1).map(function () {
										return 1 / 0
									}),
								),
							)
						: [].concat(
								hs(
									hl(0, e - 1).map(function () {
										return -1 / 0
									}),
								),
								[j],
							)
				return c > d ? ho(k) : k
			}
			if (i === j) return hy(i, e, f)
			var l = (function a(b, c, d, e) {
					var f,
						g = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
					if (!Number.isFinite((c - b) / (d - 1)))
						return { step: new he(0), tickMin: new he(0), tickMax: new he(0) }
					var h = hx(new he(c).sub(b).div(d - 1), e, g),
						i = Math.ceil(
							(f = b <= 0 && c >= 0 ? new he(0) : (f = new he(b).add(c).div(2)).sub(new he(f).mod(h)))
								.sub(b)
								.div(h)
								.toNumber(),
						),
						j = Math.ceil(new he(c).sub(f).div(h).toNumber()),
						k = i + j + 1
					return k > d
						? a(b, c, d, e, g + 1)
						: (k < d && ((j = c > 0 ? j + (d - k) : j), (i = c > 0 ? i : i + (d - k))),
							{ step: h, tickMin: f.sub(new he(i).mul(h)), tickMax: f.add(new he(j).mul(h)) })
				})(i, j, g, f),
				m = l.step,
				n = hq(l.tickMin, l.tickMax.add(new he(0.1).mul(m)), m)
			return c > d ? ho(n) : n
		})
		hp(function (a) {
			var b = ht(a, 2),
				c = b[0],
				d = b[1],
				e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
				f = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
				g = Math.max(e, 2),
				h = ht(hw([c, d]), 2),
				i = h[0],
				j = h[1]
			if (i === -1 / 0 || j === 1 / 0) return [c, d]
			if (i === j) return hy(i, e, f)
			var k = hx(new he(j).sub(i).div(g - 1), f, 0),
				l = hn(
					hm(function (a) {
						return new he(i).add(new he(a).mul(k)).toNumber()
					}),
					hl,
				)(0, g).filter(function (a) {
					return a >= i && a <= j
				})
			return c > d ? ho(l) : l
		})
		var hA = hp(function (a, b) {
				var c = ht(a, 2),
					d = c[0],
					e = c[1],
					f = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
					g = ht(hw([d, e]), 2),
					h = g[0],
					i = g[1]
				if (h === -1 / 0 || i === 1 / 0) return [d, e]
				if (h === i) return [h]
				var j = Math.max(b, 2),
					k = hx(new he(i).sub(h).div(j - 1), f, 0),
					l = [].concat(hs(hq(new he(h), new he(i).sub(new he(0.99).mul(k)), k)), [i])
				return d > e ? ho(l) : l
			}),
			hB = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"]
		function hC(a) {
			return (hC =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function hD() {
			return (hD = Object.assign.bind()).apply(this, arguments)
		}
		function hE(a, b) {
			;(null == b || b > a.length) && (b = a.length)
			for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]
			return d
		}
		function hF() {
			try {
				var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (a) {}
			return (hF = function () {
				return !!a
			})()
		}
		function hG(a) {
			return (hG = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (a) {
						return a.__proto__ || Object.getPrototypeOf(a)
					})(a)
		}
		function hH(a, b) {
			return (hH = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (a, b) {
						return (a.__proto__ = b), a
					})(a, b)
		}
		function hI(a, b, c) {
			return (
				(b = hJ(b)) in a
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		function hJ(a) {
			var b = (function (a, b) {
				if ("object" != hC(a) || !a) return a
				var c = a[Symbol.toPrimitive]
				if (void 0 !== c) {
					var d = c.call(a, b || "default")
					if ("object" != hC(d)) return d
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === b ? String : Number)(a)
			})(a, "string")
			return "symbol" == hC(b) ? b : b + ""
		}
		var hK = (function (a) {
			var b
			function c() {
				var a, b
				if (!(this instanceof c)) throw TypeError("Cannot call a class as a function")
				return (
					(a = c),
					(b = arguments),
					(a = hG(a)),
					(function (a, b) {
						if (b && ("object" === hC(b) || "function" == typeof b)) return b
						if (void 0 !== b) throw TypeError("Derived constructors may only return object or undefined")
						var c = a
						if (void 0 === c)
							throw ReferenceError("this hasn't been initialised - super() hasn't been called")
						return c
					})(this, hF() ? Reflect.construct(a, b || [], hG(this).constructor) : a.apply(this, b))
				)
			}
			if ("function" != typeof a && null !== a)
				throw TypeError("Super expression must either be null or a function")
			return (
				(c.prototype = Object.create(a && a.prototype, {
					constructor: { value: c, writable: !0, configurable: !0 },
				})),
				Object.defineProperty(c, "prototype", { writable: !1 }),
				a && hH(c, a),
				(b = [
					{
						key: "render",
						value: function () {
							var a = this.props,
								b = a.offset,
								c = a.layout,
								d = a.width,
								e = a.dataKey,
								f = a.data,
								g = a.dataPointFormatter,
								h = a.xAxis,
								i = a.yAxis,
								j = (function (a, b) {
									if (null == a) return {}
									var c,
										d,
										e = (function (a, b) {
											if (null == a) return {}
											var c = {}
											for (var d in a)
												if (Object.prototype.hasOwnProperty.call(a, d)) {
													if (b.indexOf(d) >= 0) continue
													c[d] = a[d]
												}
											return c
										})(a, b)
									if (Object.getOwnPropertySymbols) {
										var f = Object.getOwnPropertySymbols(a)
										for (d = 0; d < f.length; d++)
											(c = f[d]),
												!(b.indexOf(c) >= 0) &&
													Object.prototype.propertyIsEnumerable.call(a, c) &&
													(e[c] = a[c])
									}
									return e
								})(a, hB),
								k = (0, ab.filterProps)(j, !1)
							"x" === this.props.direction && "number" !== h.type && _(!1)
							var l = f.map(function (a) {
								var f,
									j,
									l = g(a, e),
									m = l.x,
									n = l.y,
									o = l.value,
									p = l.errorVal
								if (!p) return null
								var q = []
								if (Array.isArray(p)) {
									var r =
										(function (a) {
											if (Array.isArray(a)) return a
										})(p) ||
										(function (a, b) {
											var c =
												null == a
													? null
													: ("u" > typeof Symbol && a[Symbol.iterator]) || a["@@iterator"]
											if (null != c) {
												var d,
													e,
													f,
													g,
													h = [],
													i = !0,
													j = !1
												try {
													;(f = (c = c.call(a)).next), !1
													for (
														;
														!(i = (d = f.call(c)).done) &&
														(h.push(d.value), 2 !== h.length);
														i = !0
													);
												} catch (a) {
													;(j = !0), (e = a)
												} finally {
													try {
														if (
															!i &&
															null != c.return &&
															((g = c.return()), Object(g) !== g)
														)
															return
													} finally {
														if (j) throw e
													}
												}
												return h
											}
										})(p, 2) ||
										(function (a, b) {
											if (a) {
												if ("string" == typeof a) return hE(a, 2)
												var c = Object.prototype.toString.call(a).slice(8, -1)
												if (
													("Object" === c && a.constructor && (c = a.constructor.name),
													"Map" === c || "Set" === c)
												)
													return Array.from(a)
												if (
													"Arguments" === c ||
													/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
												)
													return hE(a, 2)
											}
										})(p, 2) ||
										(function () {
											throw TypeError(
												"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
											)
										})()
									;(f = r[0]), (j = r[1])
								} else f = j = p
								if ("vertical" === c) {
									var s = h.scale,
										t = n + b,
										v = t + d,
										w = t - d,
										x = s(o - f),
										y = s(o + j)
									q.push({ x1: y, y1: v, x2: y, y2: w }),
										q.push({ x1: x, y1: t, x2: y, y2: t }),
										q.push({ x1: x, y1: v, x2: x, y2: w })
								} else if ("horizontal" === c) {
									var z = i.scale,
										A = m + b,
										B = A - d,
										C = A + d,
										D = z(o - f),
										E = z(o + j)
									q.push({ x1: B, y1: E, x2: C, y2: E }),
										q.push({ x1: A, y1: D, x2: A, y2: E }),
										q.push({ x1: B, y1: D, x2: C, y2: D })
								}
								return u.default.createElement(
									ae,
									hD(
										{
											className: "recharts-errorBar",
											key: "bar-".concat(
												q.map(function (a) {
													return ""
														.concat(a.x1, "-")
														.concat(a.x2, "-")
														.concat(a.y1, "-")
														.concat(a.y2)
												}),
											),
										},
										k,
									),
									q.map(function (a) {
										return u.default.createElement(
											"line",
											hD({}, a, {
												key: "line-"
													.concat(a.x1, "-")
													.concat(a.x2, "-")
													.concat(a.y1, "-")
													.concat(a.y2),
											}),
										)
									}),
								)
							})
							return u.default.createElement(ae, { className: "recharts-errorBars" }, l)
						},
					},
				]),
				(function (a, b) {
					for (var c = 0; c < b.length; c++) {
						var d = b[c]
						;(d.enumerable = d.enumerable || !1),
							(d.configurable = !0),
							"value" in d && (d.writable = !0),
							Object.defineProperty(a, hJ(d.key), d)
					}
				})(c.prototype, b),
				Object.defineProperty(c, "prototype", { writable: !1 }),
				c
			)
		})(u.default.Component)
		function hL(a) {
			return (hL =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function hM(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function hN(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? hM(Object(c), !0).forEach(function (b) {
							var d, e, f
							;(d = a),
								(e = b),
								(f = c[b]),
								(e = (function (a) {
									var b = (function (a, b) {
										if ("object" != hL(a) || !a) return a
										var c = a[Symbol.toPrimitive]
										if (void 0 !== c) {
											var d = c.call(a, b || "default")
											if ("object" != hL(d)) return d
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === b ? String : Number)(a)
									})(a, "string")
									return "symbol" == hL(b) ? b : b + ""
								})(e)) in d
									? Object.defineProperty(d, e, {
											value: f,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (d[e] = f)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: hM(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		hI(hK, "defaultProps", { stroke: "black", strokeWidth: 1.5, width: 5, offset: 0, layout: "horizontal" }),
			hI(hK, "displayName", "ErrorBar")
		var hO = function (a) {
			var b,
				c = a.children,
				d = a.formattedGraphicalItems,
				e = a.legendWidth,
				f = a.legendContent,
				g = (0, ab.findChildByType)(c, ag.Legend)
			if (!g) return null
			var h = ag.Legend.defaultProps,
				i = void 0 !== h ? hN(hN({}, h), g.props) : {}
			return (
				(b =
					g.props && g.props.payload
						? g.props && g.props.payload
						: "children" === f
							? (d || []).reduce(function (a, b) {
									var c = b.item,
										d = b.props,
										e = d.sectors || d.data || []
									return a.concat(
										e.map(function (a) {
											return {
												type: g.props.iconType || c.props.legendType,
												value: a.name,
												color: a.fill,
												payload: a,
											}
										}),
									)
								}, [])
							: (d || []).map(function (a) {
									var b = a.item,
										c = b.type.defaultProps,
										d = void 0 !== c ? hN(hN({}, c), b.props) : {},
										e = d.dataKey,
										f = d.name,
										g = d.legendType
									return {
										inactive: d.hide,
										dataKey: e,
										type: i.iconType || g || "square",
										color: hY(b),
										value: f || e,
										payload: d,
									}
								})),
				hN(hN(hN({}, i), ag.Legend.getWithHeight(g, e)), {}, { payload: b, item: g })
			)
		}
		function hP(a) {
			return (hP =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function hQ(a) {
			return (
				(function (a) {
					if (Array.isArray(a)) return hR(a)
				})(a) ||
				(function (a) {
					if (("u" > typeof Symbol && null != a[Symbol.iterator]) || null != a["@@iterator"])
						return Array.from(a)
				})(a) ||
				(function (a, b) {
					if (a) {
						if ("string" == typeof a) return hR(a, void 0)
						var c = Object.prototype.toString.call(a).slice(8, -1)
						if (("Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c))
							return Array.from(a)
						if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
							return hR(a, void 0)
					}
				})(a) ||
				(function () {
					throw TypeError(
						"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function hR(a, b) {
			;(null == b || b > a.length) && (b = a.length)
			for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]
			return d
		}
		function hS(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function hT(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? hS(Object(c), !0).forEach(function (b) {
							hU(a, b, c[b])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: hS(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		function hU(a, b, c) {
			var d
			return (
				((d = (function (a, b) {
					if ("object" != hP(a) || !a) return a
					var c = a[Symbol.toPrimitive]
					if (void 0 !== c) {
						var d = c.call(a, b || "default")
						if ("object" != hP(d)) return d
						throw TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === b ? String : Number)(a)
				})(b, "string")),
				(b = "symbol" == hP(d) ? d : d + "") in a)
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		function hV(a, b, c) {
			return (0, U.default)(a) || (0, U.default)(b)
				? c
				: (0, cd.isNumOrStr)(b)
					? (0, X.default)(a, b, c)
					: (0, V.default)(b)
						? b(a)
						: c
		}
		function hW(a, b, c, d) {
			var e = (0, gO.default)(a, function (a) {
				return hV(a, b)
			})
			if ("number" === c) {
				var f = e.filter(function (a) {
					return (0, cd.isNumber)(a) || parseFloat(a)
				})
				return f.length ? [(0, gM.default)(f), (0, gL.default)(f)] : [1 / 0, -1 / 0]
			}
			return (
				d
					? e.filter(function (a) {
							return !(0, U.default)(a)
						})
					: e
			).map(function (a) {
				return (0, cd.isNumOrStr)(a) || a instanceof Date ? a : ""
			})
		}
		var hX = function (a) {
				var b,
					c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
					d = arguments.length > 2 ? arguments[2] : void 0,
					e = arguments.length > 3 ? arguments[3] : void 0,
					f = -1,
					g = null != (b = null == c ? void 0 : c.length) ? b : 0
				if (g <= 1) return 0
				if (e && "angleAxis" === e.axisType && 1e-6 >= Math.abs(Math.abs(e.range[1] - e.range[0]) - 360))
					for (var h = e.range, i = 0; i < g; i++) {
						var j = i > 0 ? d[i - 1].coordinate : d[g - 1].coordinate,
							k = d[i].coordinate,
							l = i >= g - 1 ? d[0].coordinate : d[i + 1].coordinate,
							m = void 0
						if ((0, cd.mathSign)(k - j) !== (0, cd.mathSign)(l - k)) {
							var n = []
							if ((0, cd.mathSign)(l - k) === (0, cd.mathSign)(h[1] - h[0])) {
								m = l
								var o = k + h[1] - h[0]
								;(n[0] = Math.min(o, (o + j) / 2)), (n[1] = Math.max(o, (o + j) / 2))
							} else {
								m = j
								var p = l + h[1] - h[0]
								;(n[0] = Math.min(k, (p + k) / 2)), (n[1] = Math.max(k, (p + k) / 2))
							}
							var q = [Math.min(k, (m + k) / 2), Math.max(k, (m + k) / 2)]
							if ((a > q[0] && a <= q[1]) || (a >= n[0] && a <= n[1])) {
								f = d[i].index
								break
							}
						} else {
							var r = Math.min(j, l),
								s = Math.max(j, l)
							if (a > (r + k) / 2 && a <= (s + k) / 2) {
								f = d[i].index
								break
							}
						}
					}
				else
					for (var t = 0; t < g; t++)
						if (
							(0 === t && a <= (c[t].coordinate + c[t + 1].coordinate) / 2) ||
							(t > 0 &&
								t < g - 1 &&
								a > (c[t].coordinate + c[t - 1].coordinate) / 2 &&
								a <= (c[t].coordinate + c[t + 1].coordinate) / 2) ||
							(t === g - 1 && a > (c[t].coordinate + c[t - 1].coordinate) / 2)
						) {
							f = c[t].index
							break
						}
				return f
			},
			hY = function (a) {
				var b,
					c,
					d = a.type.displayName,
					e = null != (b = a.type) && b.defaultProps ? hT(hT({}, a.type.defaultProps), a.props) : a.props,
					f = e.stroke,
					g = e.fill
				switch (d) {
					case "Line":
						c = f
						break
					case "Area":
					case "Radar":
						c = f && "none" !== f ? f : g
						break
					default:
						c = g
				}
				return c
			},
			hZ = function (a) {
				var b = a.barSize,
					c = a.totalSize,
					d = a.stackGroups,
					e = void 0 === d ? {} : d
				if (!e) return {}
				for (var f = {}, g = Object.keys(e), h = 0, i = g.length; h < i; h++)
					for (var j = e[g[h]].stackGroups, k = Object.keys(j), l = 0, m = k.length; l < m; l++) {
						var n = j[k[l]],
							o = n.items,
							p = n.cateAxisId,
							q = o.filter(function (a) {
								return (0, ab.getDisplayName)(a.type).indexOf("Bar") >= 0
							})
						if (q && q.length) {
							var r = q[0].type.defaultProps,
								s = void 0 !== r ? hT(hT({}, r), q[0].props) : q[0].props,
								t = s.barSize,
								u = s[p]
							f[u] || (f[u] = [])
							var v = (0, U.default)(t) ? b : t
							f[u].push({
								item: q[0],
								stackList: q.slice(1),
								barSize: (0, U.default)(v) ? void 0 : (0, cd.getPercentValue)(v, c, 0),
							})
						}
					}
				return f
			},
			h$ = function (a) {
				var b,
					c = a.barGap,
					d = a.barCategoryGap,
					e = a.bandSize,
					f = a.sizeList,
					g = void 0 === f ? [] : f,
					h = a.maxBarSize,
					i = g.length
				if (i < 1) return null
				var j = (0, cd.getPercentValue)(c, e, 0, !0),
					k = []
				if (g[0].barSize === +g[0].barSize) {
					var l = !1,
						m = e / i,
						n = g.reduce(function (a, b) {
							return a + b.barSize || 0
						}, 0)
					;(n += (i - 1) * j) >= e && ((n -= (i - 1) * j), (j = 0)),
						n >= e && m > 0 && ((l = !0), (m *= 0.9), (n = i * m))
					var o = { offset: (((e - n) / 2) | 0) - j, size: 0 }
					b = g.reduce(function (a, b) {
						var c = { item: b.item, position: { offset: o.offset + o.size + j, size: l ? m : b.barSize } },
							d = [].concat(hQ(a), [c])
						return (
							(o = d[d.length - 1].position),
							b.stackList &&
								b.stackList.length &&
								b.stackList.forEach(function (a) {
									d.push({ item: a, position: o })
								}),
							d
						)
					}, k)
				} else {
					var p = (0, cd.getPercentValue)(d, e, 0, !0)
					e - 2 * p - (i - 1) * j <= 0 && (j = 0)
					var q = (e - 2 * p - (i - 1) * j) / i
					q > 1 && (q >>= 0)
					var r = h === +h ? Math.min(q, h) : q
					b = g.reduce(function (a, b, c) {
						var d = [].concat(hQ(a), [
							{ item: b.item, position: { offset: p + (q + j) * c + (q - r) / 2, size: r } },
						])
						return (
							b.stackList &&
								b.stackList.length &&
								b.stackList.forEach(function (a) {
									d.push({ item: a, position: d[d.length - 1].position })
								}),
							d
						)
					}, k)
				}
				return b
			},
			h_ = function (a, b, c, d) {
				var e = c.children,
					f = c.width,
					g = c.margin,
					h = hO({ children: e, legendWidth: f - (g.left || 0) - (g.right || 0) })
				if (h) {
					var i = d || {},
						j = i.width,
						k = i.height,
						l = h.align,
						m = h.verticalAlign,
						n = h.layout
					if (
						("vertical" === n || ("horizontal" === n && "middle" === m)) &&
						"center" !== l &&
						(0, cd.isNumber)(a[l])
					)
						return hT(hT({}, a), {}, hU({}, l, a[l] + (j || 0)))
					if (
						("horizontal" === n || ("vertical" === n && "center" === l)) &&
						"middle" !== m &&
						(0, cd.isNumber)(a[m])
					)
						return hT(hT({}, a), {}, hU({}, m, a[m] + (k || 0)))
				}
				return a
			},
			h0 = function (a, b, c, d, e) {
				var f = b.props.children,
					g = (0, ab.findAllByType)(f, hK).filter(function (a) {
						var b
						return (
							(b = a.props.direction),
							!!(0, U.default)(e) ||
								("horizontal" === d
									? "yAxis" === e
									: "vertical" === d || "x" === b
										? "xAxis" === e
										: "y" !== b || "yAxis" === e)
						)
					})
				if (g && g.length) {
					var h = g.map(function (a) {
						return a.props.dataKey
					})
					return a.reduce(
						function (a, b) {
							var d = hV(b, c)
							if ((0, U.default)(d)) return a
							var e = Array.isArray(d) ? [(0, gM.default)(d), (0, gL.default)(d)] : [d, d],
								f = h.reduce(
									function (a, c) {
										var d = hV(b, c, 0),
											f = e[0] - Math.abs(Array.isArray(d) ? d[0] : d),
											g = e[1] + Math.abs(Array.isArray(d) ? d[1] : d)
										return [Math.min(f, a[0]), Math.max(g, a[1])]
									},
									[1 / 0, -1 / 0],
								)
							return [Math.min(f[0], a[0]), Math.max(f[1], a[1])]
						},
						[1 / 0, -1 / 0],
					)
				}
				return null
			},
			h1 = function (a, b, c, d, e) {
				var f = b
					.map(function (b) {
						return h0(a, b, c, e, d)
					})
					.filter(function (a) {
						return !(0, U.default)(a)
					})
				return f && f.length
					? f.reduce(
							function (a, b) {
								return [Math.min(a[0], b[0]), Math.max(a[1], b[1])]
							},
							[1 / 0, -1 / 0],
						)
					: null
			},
			h2 = function (a, b, c, d, e) {
				var f = b.map(function (b) {
					var f = b.props.dataKey
					return ("number" === c && f && h0(a, b, f, d)) || hW(a, f, c, e)
				})
				if ("number" === c)
					return f.reduce(
						function (a, b) {
							return [Math.min(a[0], b[0]), Math.max(a[1], b[1])]
						},
						[1 / 0, -1 / 0],
					)
				var g = {}
				return f.reduce(function (a, b) {
					for (var c = 0, d = b.length; c < d; c++) g[b[c]] || ((g[b[c]] = !0), a.push(b[c]))
					return a
				}, [])
			},
			h3 = function (a, b) {
				return (
					("horizontal" === a && "xAxis" === b) ||
					("vertical" === a && "yAxis" === b) ||
					("centric" === a && "angleAxis" === b) ||
					("radial" === a && "radiusAxis" === b)
				)
			},
			h4 = function (a, b, c) {
				if (!a) return null
				var d = a.scale,
					e = a.duplicateDomain,
					f = a.type,
					g = a.range,
					h = "scaleBand" === a.realScaleType ? d.bandwidth() / 2 : 2,
					i = (b || c) && "category" === f && d.bandwidth ? d.bandwidth() / h : 0
				return ((i =
					"angleAxis" === a.axisType && (null == g ? void 0 : g.length) >= 2
						? 2 * (0, cd.mathSign)(g[0] - g[1]) * i
						: i),
				b && (a.ticks || a.niceTicks))
					? (a.ticks || a.niceTicks)
							.map(function (a) {
								return { coordinate: d(e ? e.indexOf(a) : a) + i, value: a, offset: i }
							})
							.filter(function (a) {
								return !(0, gP.default)(a.coordinate)
							})
					: a.isCategorical && a.categoricalDomain
						? a.categoricalDomain.map(function (a, b) {
								return { coordinate: d(a) + i, value: a, index: b, offset: i }
							})
						: d.ticks && !c
							? d.ticks(a.tickCount).map(function (a) {
									return { coordinate: d(a) + i, value: a, offset: i }
								})
							: d.domain().map(function (a, b) {
									return { coordinate: d(a) + i, value: e ? e[a] : a, index: b, offset: i }
								})
			},
			h5 = new WeakMap(),
			h6 = function (a, b) {
				if ("function" != typeof b) return a
				h5.has(a) || h5.set(a, new WeakMap())
				var c = h5.get(a)
				if (c.has(b)) return c.get(b)
				var d = function () {
					a.apply(void 0, arguments), b.apply(void 0, arguments)
				}
				return c.set(b, d), d
			},
			h7 = function (a, b, c) {
				var d = a.scale,
					e = a.type,
					f = a.layout,
					g = a.axisType
				if ("auto" === d)
					return "radial" === f && "radiusAxis" === g
						? { scale: gv.scaleBand(), realScaleType: "band" }
						: "radial" === f && "angleAxis" === g
							? { scale: gv.scaleLinear(), realScaleType: "linear" }
							: "category" === e &&
								  b &&
								  (b.indexOf("LineChart") >= 0 ||
										b.indexOf("AreaChart") >= 0 ||
										(b.indexOf("ComposedChart") >= 0 && !c))
								? { scale: gv.scalePoint(), realScaleType: "point" }
								: "category" === e
									? { scale: gv.scaleBand(), realScaleType: "band" }
									: { scale: gv.scaleLinear(), realScaleType: "linear" }
				if ((0, gN.default)(d)) {
					var h = "scale".concat((0, gQ.default)(d))
					return { scale: (gv[h] || gv.scalePoint)(), realScaleType: gv[h] ? h : "point" }
				}
				return (0, V.default)(d) ? { scale: d } : { scale: gv.scalePoint(), realScaleType: "point" }
			},
			h8 = function (a) {
				var b = a.domain()
				if (b && !(b.length <= 2)) {
					var c = b.length,
						d = a.range(),
						e = Math.min(d[0], d[1]) - 1e-4,
						f = Math.max(d[0], d[1]) + 1e-4,
						g = a(b[0]),
						h = a(b[c - 1])
					;(g < e || g > f || h < e || h > f) && a.domain([b[0], b[c - 1]])
				}
			},
			h9 = function (a, b) {
				if (!a) return null
				for (var c = 0, d = a.length; c < d; c++) if (a[c].item === b) return a[c].position
				return null
			},
			ia = function (a, b) {
				if (!b || 2 !== b.length || !(0, cd.isNumber)(b[0]) || !(0, cd.isNumber)(b[1])) return a
				var c = Math.min(b[0], b[1]),
					d = Math.max(b[0], b[1]),
					e = [a[0], a[1]]
				return (
					(!(0, cd.isNumber)(a[0]) || a[0] < c) && (e[0] = c),
					(!(0, cd.isNumber)(a[1]) || a[1] > d) && (e[1] = d),
					e[0] > d && (e[0] = d),
					e[1] < c && (e[1] = c),
					e
				)
			},
			ib = {
				sign: function (a) {
					var b = a.length
					if (!(b <= 0))
						for (var c = 0, d = a[0].length; c < d; ++c)
							for (var e = 0, f = 0, g = 0; g < b; ++g) {
								var h = (0, gP.default)(a[g][c][1]) ? a[g][c][0] : a[g][c][1]
								h >= 0
									? ((a[g][c][0] = e), (a[g][c][1] = e + h), (e = a[g][c][1]))
									: ((a[g][c][0] = f), (a[g][c][1] = f + h), (f = a[g][c][1]))
							}
				},
				expand: function (a, b) {
					if ((d = a.length) > 0) {
						for (var c, d, e, f = 0, g = a[0].length; f < g; ++f) {
							for (e = c = 0; c < d; ++c) e += a[c][f][1] || 0
							if (e) for (c = 0; c < d; ++c) a[c][f][1] /= e
						}
						gy(a, b)
					}
				},
				none: gy,
				silhouette: function (a, b) {
					if ((c = a.length) > 0) {
						for (var c, d = 0, e = a[b[0]], f = e.length; d < f; ++d) {
							for (var g = 0, h = 0; g < c; ++g) h += a[g][d][1] || 0
							e[d][1] += e[d][0] = -h / 2
						}
						gy(a, b)
					}
				},
				wiggle: function (a, b) {
					if ((e = a.length) > 0 && (d = (c = a[b[0]]).length) > 0) {
						for (var c, d, e, f = 0, g = 1; g < d; ++g) {
							for (var h = 0, i = 0, j = 0; h < e; ++h) {
								for (
									var k = a[b[h]], l = k[g][1] || 0, m = (l - (k[g - 1][1] || 0)) / 2, n = 0;
									n < h;
									++n
								) {
									var o = a[b[n]]
									m += (o[g][1] || 0) - (o[g - 1][1] || 0)
								}
								;(i += l), (j += m * l)
							}
							;(c[g - 1][1] += c[g - 1][0] = f), i && (f -= j / i)
						}
						;(c[g - 1][1] += c[g - 1][0] = f), gy(a, b)
					}
				},
				positive: function (a) {
					var b = a.length
					if (!(b <= 0))
						for (var c = 0, d = a[0].length; c < d; ++c)
							for (var e = 0, f = 0; f < b; ++f) {
								var g = (0, gP.default)(a[f][c][1]) ? a[f][c][0] : a[f][c][1]
								g >= 0
									? ((a[f][c][0] = e), (a[f][c][1] = e + g), (e = a[f][c][1]))
									: ((a[f][c][0] = 0), (a[f][c][1] = 0))
							}
				},
			},
			ic = function (a, b, c) {
				var d = b.map(function (a) {
						return a.props.dataKey
					}),
					e = ib[c]
				return (function () {
					var a = (0, gx.default)([]),
						b = gz,
						c = gy,
						d = gA
					function e(e) {
						var f,
							g,
							h = Array.from(a.apply(this, arguments), gB),
							i = h.length,
							j = -1
						for (let a of e) for (f = 0, ++j; f < i; ++f) (h[f][j] = [0, +d(a, h[f].key, j, e)]).data = a
						for (f = 0, g = gw(b(h)); f < i; ++f) h[g[f]].index = f
						return c(h, g), h
					}
					return (
						(e.keys = function (b) {
							return arguments.length
								? ((a = "function" == typeof b ? b : (0, gx.default)(Array.from(b))), e)
								: a
						}),
						(e.value = function (a) {
							return arguments.length ? ((d = "function" == typeof a ? a : (0, gx.default)(+a)), e) : d
						}),
						(e.order = function (a) {
							return arguments.length
								? ((b = null == a ? gz : "function" == typeof a ? a : (0, gx.default)(Array.from(a))),
									e)
								: b
						}),
						(e.offset = function (a) {
							return arguments.length ? ((c = null == a ? gy : a), e) : c
						}),
						e
					)
				})()
					.keys(d)
					.value(function (a, b) {
						return +hV(a, b, 0)
					})
					.order(gz)
					.offset(e)(a)
			},
			id = function (a, b, c, d, e, f) {
				if (!a) return null
				var g = (f ? b.reverse() : b).reduce(function (a, b) {
					var e,
						f = null != (e = b.type) && e.defaultProps ? hT(hT({}, b.type.defaultProps), b.props) : b.props,
						g = f.stackId
					if (f.hide) return a
					var h = f[c],
						i = a[h] || { hasStack: !1, stackGroups: {} }
					if ((0, cd.isNumOrStr)(g)) {
						var j = i.stackGroups[g] || { numericAxisId: c, cateAxisId: d, items: [] }
						j.items.push(b), (i.hasStack = !0), (i.stackGroups[g] = j)
					} else
						i.stackGroups[(0, cd.uniqueId)("_stackId_")] = { numericAxisId: c, cateAxisId: d, items: [b] }
					return hT(hT({}, a), {}, hU({}, h, i))
				}, {})
				return Object.keys(g).reduce(function (b, f) {
					var h = g[f]
					return (
						h.hasStack &&
							(h.stackGroups = Object.keys(h.stackGroups).reduce(function (b, f) {
								var g = h.stackGroups[f]
								return hT(
									hT({}, b),
									{},
									hU({}, f, {
										numericAxisId: c,
										cateAxisId: d,
										items: g.items,
										stackedData: ic(a, g.items, e),
									}),
								)
							}, {})),
						hT(hT({}, b), {}, hU({}, f, h))
					)
				}, {})
			},
			ie = function (a, b) {
				var c = b.realScaleType,
					d = b.type,
					e = b.tickCount,
					f = b.originalDomain,
					g = b.allowDecimals,
					h = c || b.scale
				if ("auto" !== h && "linear" !== h) return null
				if (e && "number" === d && f && ("auto" === f[0] || "auto" === f[1])) {
					var i = a.domain()
					if (!i.length) return null
					var j = hz(i, e, g)
					return a.domain([(0, gM.default)(j), (0, gL.default)(j)]), { niceTicks: j }
				}
				return e && "number" === d ? { niceTicks: hA(a.domain(), e, g) } : null
			}
		function ig(a) {
			var b = a.axis,
				c = a.ticks,
				d = a.bandSize,
				e = a.entry,
				f = a.index,
				g = a.dataKey
			if ("category" === b.type) {
				if (!b.allowDuplicatedCategory && b.dataKey && !(0, U.default)(e[b.dataKey])) {
					var h = (0, cd.findEntryInArray)(c, "value", e[b.dataKey])
					if (h) return h.coordinate + d / 2
				}
				return c[f] ? c[f].coordinate + d / 2 : null
			}
			var i = hV(e, (0, U.default)(g) ? b.dataKey : g)
			return (0, U.default)(i) ? null : b.scale(i)
		}
		var ih = function (a) {
				var b = a.axis,
					c = a.ticks,
					d = a.offset,
					e = a.bandSize,
					f = a.entry,
					g = a.index
				if ("category" === b.type) return c[g] ? c[g].coordinate + d : null
				var h = hV(f, b.dataKey, b.domain[g])
				return (0, U.default)(h) ? null : b.scale(h) - e / 2 + d
			},
			ii = function (a) {
				var b = a.numericAxis,
					c = b.scale.domain()
				if ("number" === b.type) {
					var d = Math.min(c[0], c[1]),
						e = Math.max(c[0], c[1])
					return d <= 0 && e >= 0 ? 0 : e < 0 ? e : d
				}
				return c[0]
			},
			ij = function (a, b) {
				var c,
					d = (null != (c = a.type) && c.defaultProps ? hT(hT({}, a.type.defaultProps), a.props) : a.props)
						.stackId
				if ((0, cd.isNumOrStr)(d)) {
					var e = b[d]
					if (e) {
						var f = e.items.indexOf(a)
						return f >= 0 ? e.stackedData[f] : null
					}
				}
				return null
			},
			ik = function (a, b, c) {
				return Object.keys(a)
					.reduce(
						function (d, e) {
							var f = a[e].stackedData.reduce(
								function (a, d) {
									var e = d.slice(b, c + 1).reduce(
										function (a, b) {
											return [
												(0, gM.default)(b.concat([a[0]]).filter(cd.isNumber)),
												(0, gL.default)(b.concat([a[1]]).filter(cd.isNumber)),
											]
										},
										[1 / 0, -1 / 0],
									)
									return [Math.min(a[0], e[0]), Math.max(a[1], e[1])]
								},
								[1 / 0, -1 / 0],
							)
							return [Math.min(f[0], d[0]), Math.max(f[1], d[1])]
						},
						[1 / 0, -1 / 0],
					)
					.map(function (a) {
						return a === 1 / 0 || a === -1 / 0 ? 0 : a
					})
			},
			il = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
			im = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
			io = function (a, b, c) {
				if ((0, V.default)(a)) return a(b, c)
				if (!Array.isArray(a)) return b
				var d = []
				if ((0, cd.isNumber)(a[0])) d[0] = c ? a[0] : Math.min(a[0], b[0])
				else if (il.test(a[0])) {
					var e = +il.exec(a[0])[1]
					d[0] = b[0] - e
				} else (0, V.default)(a[0]) ? (d[0] = a[0](b[0])) : (d[0] = b[0])
				if ((0, cd.isNumber)(a[1])) d[1] = c ? a[1] : Math.max(a[1], b[1])
				else if (im.test(a[1])) {
					var f = +im.exec(a[1])[1]
					d[1] = b[1] + f
				} else (0, V.default)(a[1]) ? (d[1] = a[1](b[1])) : (d[1] = b[1])
				return d
			},
			ip = function (a, b, c) {
				if (a && a.scale && a.scale.bandwidth) {
					var d = a.scale.bandwidth()
					if (!c || d > 0) return d
				}
				if (a && b && b.length >= 2) {
					for (
						var e = (0, Y.default)(b, function (a) {
								return a.coordinate
							}),
							f = 1 / 0,
							g = 1,
							h = e.length;
						g < h;
						g++
					) {
						var i = e[g],
							j = e[g - 1]
						f = Math.min((i.coordinate || 0) - (j.coordinate || 0), f)
					}
					return f === 1 / 0 ? 0 : f
				}
				return c ? void 0 : 0
			},
			iq = function (a, b, c) {
				return !a || !a.length || (0, gR.default)(a, (0, X.default)(c, "type.defaultProps.domain")) ? b : a
			},
			ir = function (a, b) {
				var c = a.type.defaultProps ? hT(hT({}, a.type.defaultProps), a.props) : a.props,
					d = c.dataKey,
					e = c.name,
					f = c.unit,
					g = c.formatter,
					h = c.tooltipType,
					i = c.chartType,
					j = c.hide
				return hT(
					hT({}, (0, ab.filterProps)(a, !1)),
					{},
					{
						dataKey: d,
						unit: f,
						formatter: g,
						name: e || d,
						color: hY(a),
						value: hV(b, d),
						type: h,
						payload: b,
						chartType: i,
						hide: j,
					},
				)
			}
		function is(a) {
			return (is =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function it(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function iu(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? it(Object(c), !0).forEach(function (b) {
							iv(a, b, c[b])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: it(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		function iv(a, b, c) {
			var d
			return (
				((d = (function (a, b) {
					if ("object" != is(a) || !a) return a
					var c = a[Symbol.toPrimitive]
					if (void 0 !== c) {
						var d = c.call(a, b || "default")
						if ("object" != is(d)) return d
						throw TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === b ? String : Number)(a)
				})(b, "string")),
				(b = "symbol" == is(d) ? d : d + "") in a)
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		var iw = ["Webkit", "Moz", "O", "ms"],
			ix = function (a, b) {
				if (!a) return null
				var c = a.replace(/(\w)/, function (a) {
						return a.toUpperCase()
					}),
					d = iw.reduce(function (a, d) {
						return iu(iu({}, a), {}, iv({}, d + c, b))
					}, {})
				return (d[a] = b), d
			}
		function iy(a) {
			return (iy =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function iz() {
			return (iz = Object.assign.bind()).apply(this, arguments)
		}
		function iA(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function iB(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? iA(Object(c), !0).forEach(function (b) {
							iG(a, b, c[b])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: iA(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		function iC(a, b) {
			for (var c = 0; c < b.length; c++) {
				var d = b[c]
				;(d.enumerable = d.enumerable || !1),
					(d.configurable = !0),
					"value" in d && (d.writable = !0),
					Object.defineProperty(a, iH(d.key), d)
			}
		}
		function iD() {
			try {
				var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (a) {}
			return (iD = function () {
				return !!a
			})()
		}
		function iE(a) {
			return (iE = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (a) {
						return a.__proto__ || Object.getPrototypeOf(a)
					})(a)
		}
		function iF(a, b) {
			return (iF = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (a, b) {
						return (a.__proto__ = b), a
					})(a, b)
		}
		function iG(a, b, c) {
			return (
				(b = iH(b)) in a
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		function iH(a) {
			var b = (function (a, b) {
				if ("object" != iy(a) || !a) return a
				var c = a[Symbol.toPrimitive]
				if (void 0 !== c) {
					var d = c.call(a, b || "default")
					if ("object" != iy(d)) return d
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === b ? String : Number)(a)
			})(a, "string")
			return "symbol" == iy(b) ? b : b + ""
		}
		var iI = function (a) {
				var b = a.data,
					c = a.startIndex,
					d = a.endIndex,
					e = a.x,
					f = a.width,
					g = a.travellerWidth
				if (!b || !b.length) return {}
				var h = b.length,
					i = cc()
						.domain((0, W.default)(0, h))
						.range([e, e + f - g]),
					j = i.domain().map(function (a) {
						return i(a)
					})
				return {
					isTextActive: !1,
					isSlideMoving: !1,
					isTravellerMoving: !1,
					isTravellerFocused: !1,
					startX: i(c),
					endX: i(d),
					scale: i,
					scaleValues: j,
				}
			},
			iJ = function (a) {
				return a.changedTouches && !!a.changedTouches.length
			},
			iK = (function (a) {
				var b, c
				function d(a) {
					var b, c, e
					if (!(this instanceof d)) throw TypeError("Cannot call a class as a function")
					return (
						(c = d),
						(e = [a]),
						(c = iE(c)),
						iG(
							(b = (function (a, b) {
								if (b && ("object" === iy(b) || "function" == typeof b)) return b
								if (void 0 !== b)
									throw TypeError("Derived constructors may only return object or undefined")
								var c = a
								if (void 0 === c)
									throw ReferenceError("this hasn't been initialised - super() hasn't been called")
								return c
							})(this, iD() ? Reflect.construct(c, e || [], iE(this).constructor) : c.apply(this, e))),
							"handleDrag",
							function (a) {
								b.leaveTimer && (clearTimeout(b.leaveTimer), (b.leaveTimer = null)),
									b.state.isTravellerMoving
										? b.handleTravellerMove(a)
										: b.state.isSlideMoving && b.handleSlideDrag(a)
							},
						),
						iG(b, "handleTouchMove", function (a) {
							null != a.changedTouches && a.changedTouches.length > 0 && b.handleDrag(a.changedTouches[0])
						}),
						iG(b, "handleDragEnd", function () {
							b.setState({ isTravellerMoving: !1, isSlideMoving: !1 }, function () {
								var a = b.props,
									c = a.endIndex,
									d = a.onDragEnd,
									e = a.startIndex
								null == d || d({ endIndex: c, startIndex: e })
							}),
								b.detachDragEndListener()
						}),
						iG(b, "handleLeaveWrapper", function () {
							;(b.state.isTravellerMoving || b.state.isSlideMoving) &&
								(b.leaveTimer = window.setTimeout(b.handleDragEnd, b.props.leaveTimeOut))
						}),
						iG(b, "handleEnterSlideOrTraveller", function () {
							b.setState({ isTextActive: !0 })
						}),
						iG(b, "handleLeaveSlideOrTraveller", function () {
							b.setState({ isTextActive: !1 })
						}),
						iG(b, "handleSlideDragStart", function (a) {
							var c = iJ(a) ? a.changedTouches[0] : a
							b.setState({ isTravellerMoving: !1, isSlideMoving: !0, slideMoveStartX: c.pageX }),
								b.attachDragEndListener()
						}),
						(b.travellerDragStartHandlers = {
							startX: b.handleTravellerDragStart.bind(b, "startX"),
							endX: b.handleTravellerDragStart.bind(b, "endX"),
						}),
						(b.state = {}),
						b
					)
				}
				if ("function" != typeof a && null !== a)
					throw TypeError("Super expression must either be null or a function")
				return (
					(d.prototype = Object.create(a && a.prototype, {
						constructor: { value: d, writable: !0, configurable: !0 },
					})),
					Object.defineProperty(d, "prototype", { writable: !1 }),
					a && iF(d, a),
					(b = [
						{
							key: "componentWillUnmount",
							value: function () {
								this.leaveTimer && (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
									this.detachDragEndListener()
							},
						},
						{
							key: "getIndex",
							value: function (a) {
								var b = a.startX,
									c = a.endX,
									e = this.state.scaleValues,
									f = this.props,
									g = f.gap,
									h = f.data.length - 1,
									i = Math.min(b, c),
									j = Math.max(b, c),
									k = d.getIndexInRange(e, i),
									l = d.getIndexInRange(e, j)
								return { startIndex: k - (k % g), endIndex: l === h ? h : l - (l % g) }
							},
						},
						{
							key: "getTextOfTick",
							value: function (a) {
								var b = this.props,
									c = b.data,
									d = b.tickFormatter,
									e = b.dataKey,
									f = hV(c[a], e, a)
								return (0, V.default)(d) ? d(f, a) : f
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
							value: function (a) {
								var b = this.state,
									c = b.slideMoveStartX,
									d = b.startX,
									e = b.endX,
									f = this.props,
									g = f.x,
									h = f.width,
									i = f.travellerWidth,
									j = f.startIndex,
									k = f.endIndex,
									l = f.onChange,
									m = a.pageX - c
								m > 0
									? (m = Math.min(m, g + h - i - e, g + h - i - d))
									: m < 0 && (m = Math.max(m, g - d, g - e))
								var n = this.getIndex({ startX: d + m, endX: e + m })
								;(n.startIndex !== j || n.endIndex !== k) && l && l(n),
									this.setState({ startX: d + m, endX: e + m, slideMoveStartX: a.pageX })
							},
						},
						{
							key: "handleTravellerDragStart",
							value: function (a, b) {
								var c = iJ(b) ? b.changedTouches[0] : b
								this.setState({
									isSlideMoving: !1,
									isTravellerMoving: !0,
									movingTravellerId: a,
									brushMoveStartX: c.pageX,
								}),
									this.attachDragEndListener()
							},
						},
						{
							key: "handleTravellerMove",
							value: function (a) {
								var b = this.state,
									c = b.brushMoveStartX,
									d = b.movingTravellerId,
									e = b.endX,
									f = b.startX,
									g = this.state[d],
									h = this.props,
									i = h.x,
									j = h.width,
									k = h.travellerWidth,
									l = h.onChange,
									m = h.gap,
									n = h.data,
									o = { startX: this.state.startX, endX: this.state.endX },
									p = a.pageX - c
								p > 0 ? (p = Math.min(p, i + j - k - g)) : p < 0 && (p = Math.max(p, i - g)),
									(o[d] = g + p)
								var q = this.getIndex(o),
									r = q.startIndex,
									s = q.endIndex,
									t = function () {
										var a = n.length - 1
										return (
											("startX" === d && (e > f ? r % m == 0 : s % m == 0)) ||
											(!!(e < f) && s === a) ||
											("endX" === d && (e > f ? s % m == 0 : r % m == 0)) ||
											(!!(e > f) && s === a)
										)
									}
								this.setState(iG(iG({}, d, g + p), "brushMoveStartX", a.pageX), function () {
									l && t() && l(q)
								})
							},
						},
						{
							key: "handleTravellerMoveKeyboard",
							value: function (a, b) {
								var c = this,
									d = this.state,
									e = d.scaleValues,
									f = d.startX,
									g = d.endX,
									h = this.state[b],
									i = e.indexOf(h)
								if (-1 !== i) {
									var j = i + a
									if (-1 !== j && !(j >= e.length)) {
										var k = e[j]
										;("startX" === b && k >= g) ||
											("endX" === b && k <= f) ||
											this.setState(iG({}, b, k), function () {
												c.props.onChange(
													c.getIndex({ startX: c.state.startX, endX: c.state.endX }),
												)
											})
									}
								}
							},
						},
						{
							key: "renderBackground",
							value: function () {
								var a = this.props,
									b = a.x,
									c = a.y,
									d = a.width,
									e = a.height,
									f = a.fill,
									g = a.stroke
								return u.default.createElement("rect", {
									stroke: g,
									fill: f,
									x: b,
									y: c,
									width: d,
									height: e,
								})
							},
						},
						{
							key: "renderPanorama",
							value: function () {
								var a = this.props,
									b = a.x,
									c = a.y,
									d = a.width,
									e = a.height,
									f = a.data,
									g = a.children,
									h = a.padding,
									i = u.Children.only(g)
								return i
									? u.default.cloneElement(i, {
											x: b,
											y: c,
											width: d,
											height: e,
											margin: h,
											compact: !0,
											data: f,
										})
									: null
							},
						},
						{
							key: "renderTravellerLayer",
							value: function (a, b) {
								var c,
									e,
									f = this,
									g = this.props,
									h = g.y,
									i = g.travellerWidth,
									j = g.height,
									k = g.traveller,
									l = g.ariaLabel,
									m = g.data,
									n = g.startIndex,
									o = g.endIndex,
									p = Math.max(a, this.props.x),
									q = iB(
										iB({}, (0, ab.filterProps)(this.props, !1)),
										{},
										{ x: p, y: h, width: i, height: j },
									),
									r =
										l ||
										"Min value: "
											.concat(null == (c = m[n]) ? void 0 : c.name, ", Max value: ")
											.concat(null == (e = m[o]) ? void 0 : e.name)
								return u.default.createElement(
									ae,
									{
										tabIndex: 0,
										role: "slider",
										"aria-label": r,
										"aria-valuenow": a,
										className: "recharts-brush-traveller",
										onMouseEnter: this.handleEnterSlideOrTraveller,
										onMouseLeave: this.handleLeaveSlideOrTraveller,
										onMouseDown: this.travellerDragStartHandlers[b],
										onTouchStart: this.travellerDragStartHandlers[b],
										onKeyDown: function (a) {
											;["ArrowLeft", "ArrowRight"].includes(a.key) &&
												(a.preventDefault(),
												a.stopPropagation(),
												f.handleTravellerMoveKeyboard("ArrowRight" === a.key ? 1 : -1, b))
										},
										onFocus: function () {
											f.setState({ isTravellerFocused: !0 })
										},
										onBlur: function () {
											f.setState({ isTravellerFocused: !1 })
										},
										style: { cursor: "col-resize" },
									},
									d.renderTraveller(k, q),
								)
							},
						},
						{
							key: "renderSlide",
							value: function (a, b) {
								var c = this.props,
									d = c.y,
									e = c.height,
									f = c.stroke,
									g = c.travellerWidth,
									h = Math.min(a, b) + g,
									i = Math.max(Math.abs(b - a) - g, 0)
								return u.default.createElement("rect", {
									className: "recharts-brush-slide",
									onMouseEnter: this.handleEnterSlideOrTraveller,
									onMouseLeave: this.handleLeaveSlideOrTraveller,
									onMouseDown: this.handleSlideDragStart,
									onTouchStart: this.handleSlideDragStart,
									style: { cursor: "move" },
									stroke: "none",
									fill: f,
									fillOpacity: 0.2,
									x: h,
									y: d,
									width: i,
									height: e,
								})
							},
						},
						{
							key: "renderText",
							value: function () {
								var a = this.props,
									b = a.startIndex,
									c = a.endIndex,
									d = a.y,
									e = a.height,
									f = a.travellerWidth,
									g = a.stroke,
									h = this.state,
									i = h.startX,
									j = h.endX,
									k = { pointerEvents: "none", fill: g }
								return u.default.createElement(
									ae,
									{ className: "recharts-brush-texts" },
									u.default.createElement(
										cM,
										iz(
											{
												textAnchor: "end",
												verticalAnchor: "middle",
												x: Math.min(i, j) - 5,
												y: d + e / 2,
											},
											k,
										),
										this.getTextOfTick(b),
									),
									u.default.createElement(
										cM,
										iz(
											{
												textAnchor: "start",
												verticalAnchor: "middle",
												x: Math.max(i, j) + f + 5,
												y: d + e / 2,
											},
											k,
										),
										this.getTextOfTick(c),
									),
								)
							},
						},
						{
							key: "render",
							value: function () {
								var a = this.props,
									b = a.data,
									c = a.className,
									d = a.children,
									e = a.x,
									f = a.y,
									g = a.width,
									h = a.height,
									i = a.alwaysShowText,
									j = this.state,
									k = j.startX,
									l = j.endX,
									m = j.isTextActive,
									n = j.isSlideMoving,
									o = j.isTravellerMoving,
									p = j.isTravellerFocused
								if (
									!b ||
									!b.length ||
									!(0, cd.isNumber)(e) ||
									!(0, cd.isNumber)(f) ||
									!(0, cd.isNumber)(g) ||
									!(0, cd.isNumber)(h) ||
									g <= 0 ||
									h <= 0
								)
									return null
								var q = (0, $.default)("recharts-brush", c),
									r = 1 === u.default.Children.count(d),
									s = ix("userSelect", "none")
								return u.default.createElement(
									ae,
									{
										className: q,
										onMouseLeave: this.handleLeaveWrapper,
										onTouchMove: this.handleTouchMove,
										style: s,
									},
									this.renderBackground(),
									r && this.renderPanorama(),
									this.renderSlide(k, l),
									this.renderTravellerLayer(k, "startX"),
									this.renderTravellerLayer(l, "endX"),
									(m || n || o || p || i) && this.renderText(),
								)
							},
						},
					]),
					(c = [
						{
							key: "renderDefaultTraveller",
							value: function (a) {
								var b = a.x,
									c = a.y,
									d = a.width,
									e = a.height,
									f = a.stroke,
									g = Math.floor(c + e / 2) - 1
								return u.default.createElement(
									u.default.Fragment,
									null,
									u.default.createElement("rect", {
										x: b,
										y: c,
										width: d,
										height: e,
										fill: f,
										stroke: "none",
									}),
									u.default.createElement("line", {
										x1: b + 1,
										y1: g,
										x2: b + d - 1,
										y2: g,
										fill: "none",
										stroke: "#fff",
									}),
									u.default.createElement("line", {
										x1: b + 1,
										y1: g + 2,
										x2: b + d - 1,
										y2: g + 2,
										fill: "none",
										stroke: "#fff",
									}),
								)
							},
						},
						{
							key: "renderTraveller",
							value: function (a, b) {
								return u.default.isValidElement(a)
									? u.default.cloneElement(a, b)
									: (0, V.default)(a)
										? a(b)
										: d.renderDefaultTraveller(b)
							},
						},
						{
							key: "getDerivedStateFromProps",
							value: function (a, b) {
								var c = a.data,
									d = a.width,
									e = a.x,
									f = a.travellerWidth,
									g = a.updateId,
									h = a.startIndex,
									i = a.endIndex
								if (c !== b.prevData || g !== b.prevUpdateId)
									return iB(
										{ prevData: c, prevTravellerWidth: f, prevUpdateId: g, prevX: e, prevWidth: d },
										c && c.length
											? iI({
													data: c,
													width: d,
													x: e,
													travellerWidth: f,
													startIndex: h,
													endIndex: i,
												})
											: { scale: null, scaleValues: null },
									)
								if (b.scale && (d !== b.prevWidth || e !== b.prevX || f !== b.prevTravellerWidth)) {
									b.scale.range([e, e + d - f])
									var j = b.scale.domain().map(function (a) {
										return b.scale(a)
									})
									return {
										prevData: c,
										prevTravellerWidth: f,
										prevUpdateId: g,
										prevX: e,
										prevWidth: d,
										startX: b.scale(a.startIndex),
										endX: b.scale(a.endIndex),
										scaleValues: j,
									}
								}
								return null
							},
						},
						{
							key: "getIndexInRange",
							value: function (a, b) {
								for (var c = a.length, d = 0, e = c - 1; e - d > 1; ) {
									var f = Math.floor((d + e) / 2)
									a[f] > b ? (e = f) : (d = f)
								}
								return b >= a[e] ? e : d
							},
						},
					]),
					b && iC(d.prototype, b),
					c && iC(d, c),
					Object.defineProperty(d, "prototype", { writable: !1 }),
					d
				)
			})(u.PureComponent)
		iG(iK, "displayName", "Brush"),
			iG(iK, "defaultProps", {
				height: 40,
				travellerWidth: 5,
				gap: 1,
				fill: "#fff",
				stroke: "#666",
				padding: { top: 1, right: 1, bottom: 1, left: 1 },
				leaveTimeOut: 1e3,
				alwaysShowText: !1,
			})
		var iL = a.i(92836)
		function iM(a) {
			return (iM =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function iN(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function iO(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? iN(Object(c), !0).forEach(function (b) {
							var d, e, f
							;(d = a),
								(e = b),
								(f = c[b]),
								(e = (function (a) {
									var b = (function (a, b) {
										if ("object" != iM(a) || !a) return a
										var c = a[Symbol.toPrimitive]
										if (void 0 !== c) {
											var d = c.call(a, b || "default")
											if ("object" != iM(d)) return d
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === b ? String : Number)(a)
									})(a, "string")
									return "symbol" == iM(b) ? b : b + ""
								})(e)) in d
									? Object.defineProperty(d, e, {
											value: f,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (d[e] = f)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: iN(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		var iP = Math.PI / 180,
			iQ = function (a, b, c, d) {
				return { x: a + Math.cos(-iP * d) * c, y: b + Math.sin(-iP * d) * c }
			},
			iR = function (a, b) {
				var c = a.x,
					d = a.y
				return Math.sqrt(Math.pow(c - b.x, 2) + Math.pow(d - b.y, 2))
			},
			iS = function (a, b) {
				var c = a.x,
					d = a.y,
					e = b.cx,
					f = b.cy,
					g = iR({ x: c, y: d }, { x: e, y: f })
				if (g <= 0) return { radius: g }
				var h = Math.acos((c - e) / g)
				return d > f && (h = 2 * Math.PI - h), { radius: g, angle: (180 * h) / Math.PI, angleInRadian: h }
			},
			iT = function (a) {
				var b = a.startAngle,
					c = a.endAngle,
					d = Math.min(Math.floor(b / 360), Math.floor(c / 360))
				return { startAngle: b - 360 * d, endAngle: c - 360 * d }
			},
			iU = function (a, b) {
				var c,
					d = iS({ x: a.x, y: a.y }, b),
					e = d.radius,
					f = d.angle,
					g = b.innerRadius,
					h = b.outerRadius
				if (e < g || e > h) return !1
				if (0 === e) return !0
				var i = iT(b),
					j = i.startAngle,
					k = i.endAngle,
					l = f
				if (j <= k) {
					for (; l > k; ) l -= 360
					for (; l < j; ) l += 360
					c = l >= j && l <= k
				} else {
					for (; l > j; ) l -= 360
					for (; l < k; ) l += 360
					c = l >= k && l <= j
				}
				return c
					? iO(
							iO({}, b),
							{},
							{
								radius: e,
								angle: l + 360 * Math.min(Math.floor(b.startAngle / 360), Math.floor(b.endAngle / 360)),
							},
						)
					: null
			}
		function iV(a) {
			return (iV =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		var iW = ["offset"]
		function iX(a, b) {
			;(null == b || b > a.length) && (b = a.length)
			for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]
			return d
		}
		function iY(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function iZ(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? iY(Object(c), !0).forEach(function (b) {
							var d, e, f
							;(d = a),
								(e = b),
								(f = c[b]),
								(e = (function (a) {
									var b = (function (a, b) {
										if ("object" != iV(a) || !a) return a
										var c = a[Symbol.toPrimitive]
										if (void 0 !== c) {
											var d = c.call(a, b || "default")
											if ("object" != iV(d)) return d
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === b ? String : Number)(a)
									})(a, "string")
									return "symbol" == iV(b) ? b : b + ""
								})(e)) in d
									? Object.defineProperty(d, e, {
											value: f,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (d[e] = f)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: iY(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		function i$() {
			return (i$ = Object.assign.bind()).apply(this, arguments)
		}
		var i_ = function (a) {
				var b = a.value,
					c = a.formatter,
					d = (0, U.default)(a.children) ? b : a.children
				return (0, V.default)(c) ? c(d) : d
			},
			i0 = function (a, b, c) {
				var d,
					e,
					f = a.position,
					g = a.viewBox,
					h = a.offset,
					i = a.className,
					j = g.cx,
					k = g.cy,
					l = g.innerRadius,
					m = g.outerRadius,
					n = g.startAngle,
					o = g.endAngle,
					p = g.clockWise,
					q = (l + m) / 2,
					r = (0, cd.mathSign)(o - n) * Math.min(Math.abs(o - n), 360),
					s = r >= 0 ? 1 : -1
				"insideStart" === f
					? ((d = n + s * h), (e = p))
					: "insideEnd" === f
						? ((d = o - s * h), (e = !p))
						: "end" === f && ((d = o + s * h), (e = p)),
					(e = r <= 0 ? e : !e)
				var t = iQ(j, k, q, d),
					v = iQ(j, k, q, d + (e ? 1 : -1) * 359),
					w = "M"
						.concat(t.x, ",")
						.concat(t.y, "\n    A")
						.concat(q, ",")
						.concat(q, ",0,1,")
						.concat(+!e, ",\n    ")
						.concat(v.x, ",")
						.concat(v.y),
					x = (0, U.default)(a.id) ? (0, cd.uniqueId)("recharts-radial-line-") : a.id
				return u.default.createElement(
					"text",
					i$({}, c, {
						dominantBaseline: "central",
						className: (0, $.default)("recharts-radial-bar-label", i),
					}),
					u.default.createElement("defs", null, u.default.createElement("path", { id: x, d: w })),
					u.default.createElement("textPath", { xlinkHref: "#".concat(x) }, b),
				)
			},
			i1 = function (a) {
				var b = a.viewBox,
					c = a.offset,
					d = a.position,
					e = b.cx,
					f = b.cy,
					g = b.innerRadius,
					h = b.outerRadius,
					i = (b.startAngle + b.endAngle) / 2
				if ("outside" === d) {
					var j = iQ(e, f, h + c, i),
						k = j.x
					return { x: k, y: j.y, textAnchor: k >= e ? "start" : "end", verticalAnchor: "middle" }
				}
				if ("center" === d) return { x: e, y: f, textAnchor: "middle", verticalAnchor: "middle" }
				if ("centerTop" === d) return { x: e, y: f, textAnchor: "middle", verticalAnchor: "start" }
				if ("centerBottom" === d) return { x: e, y: f, textAnchor: "middle", verticalAnchor: "end" }
				var l = iQ(e, f, (g + h) / 2, i)
				return { x: l.x, y: l.y, textAnchor: "middle", verticalAnchor: "middle" }
			},
			i2 = function (a) {
				var b = a.viewBox,
					c = a.parentViewBox,
					d = a.offset,
					e = a.position,
					f = b.x,
					g = b.y,
					h = b.width,
					i = b.height,
					j = i >= 0 ? 1 : -1,
					k = j * d,
					l = j > 0 ? "end" : "start",
					m = j > 0 ? "start" : "end",
					n = h >= 0 ? 1 : -1,
					o = n * d,
					p = n > 0 ? "end" : "start",
					q = n > 0 ? "start" : "end"
				if ("top" === e)
					return iZ(
						iZ({}, { x: f + h / 2, y: g - j * d, textAnchor: "middle", verticalAnchor: l }),
						c ? { height: Math.max(g - c.y, 0), width: h } : {},
					)
				if ("bottom" === e)
					return iZ(
						iZ({}, { x: f + h / 2, y: g + i + k, textAnchor: "middle", verticalAnchor: m }),
						c ? { height: Math.max(c.y + c.height - (g + i), 0), width: h } : {},
					)
				if ("left" === e) {
					var r = { x: f - o, y: g + i / 2, textAnchor: p, verticalAnchor: "middle" }
					return iZ(iZ({}, r), c ? { width: Math.max(r.x - c.x, 0), height: i } : {})
				}
				if ("right" === e) {
					var s = { x: f + h + o, y: g + i / 2, textAnchor: q, verticalAnchor: "middle" }
					return iZ(iZ({}, s), c ? { width: Math.max(c.x + c.width - s.x, 0), height: i } : {})
				}
				var t = c ? { width: h, height: i } : {}
				return "insideLeft" === e
					? iZ({ x: f + o, y: g + i / 2, textAnchor: q, verticalAnchor: "middle" }, t)
					: "insideRight" === e
						? iZ({ x: f + h - o, y: g + i / 2, textAnchor: p, verticalAnchor: "middle" }, t)
						: "insideTop" === e
							? iZ({ x: f + h / 2, y: g + k, textAnchor: "middle", verticalAnchor: m }, t)
							: "insideBottom" === e
								? iZ({ x: f + h / 2, y: g + i - k, textAnchor: "middle", verticalAnchor: l }, t)
								: "insideTopLeft" === e
									? iZ({ x: f + o, y: g + k, textAnchor: q, verticalAnchor: m }, t)
									: "insideTopRight" === e
										? iZ({ x: f + h - o, y: g + k, textAnchor: p, verticalAnchor: m }, t)
										: "insideBottomLeft" === e
											? iZ({ x: f + o, y: g + i - k, textAnchor: q, verticalAnchor: l }, t)
											: "insideBottomRight" === e
												? iZ(
														{
															x: f + h - o,
															y: g + i - k,
															textAnchor: p,
															verticalAnchor: l,
														},
														t,
													)
												: (0, iL.default)(e) &&
													  ((0, cd.isNumber)(e.x) || (0, cd.isPercent)(e.x)) &&
													  ((0, cd.isNumber)(e.y) || (0, cd.isPercent)(e.y))
													? iZ(
															{
																x: f + (0, cd.getPercentValue)(e.x, h),
																y: g + (0, cd.getPercentValue)(e.y, i),
																textAnchor: "end",
																verticalAnchor: "end",
															},
															t,
														)
													: iZ(
															{
																x: f + h / 2,
																y: g + i / 2,
																textAnchor: "middle",
																verticalAnchor: "middle",
															},
															t,
														)
			}
		function i3(a) {
			var b,
				c = a.offset,
				d = iZ(
					{ offset: void 0 === c ? 5 : c },
					(function (a, b) {
						if (null == a) return {}
						var c,
							d,
							e = (function (a, b) {
								if (null == a) return {}
								var c = {}
								for (var d in a)
									if (Object.prototype.hasOwnProperty.call(a, d)) {
										if (b.indexOf(d) >= 0) continue
										c[d] = a[d]
									}
								return c
							})(a, b)
						if (Object.getOwnPropertySymbols) {
							var f = Object.getOwnPropertySymbols(a)
							for (d = 0; d < f.length; d++)
								(c = f[d]),
									!(b.indexOf(c) >= 0) &&
										Object.prototype.propertyIsEnumerable.call(a, c) &&
										(e[c] = a[c])
						}
						return e
					})(a, iW),
				),
				e = d.viewBox,
				f = d.position,
				g = d.value,
				h = d.children,
				i = d.content,
				j = d.className,
				k = d.textBreakAll
			if (!e || ((0, U.default)(g) && (0, U.default)(h) && !(0, u.isValidElement)(i) && !(0, V.default)(i)))
				return null
			if ((0, u.isValidElement)(i)) return (0, u.cloneElement)(i, d)
			if ((0, V.default)(i)) {
				if (((b = (0, u.createElement)(i, d)), (0, u.isValidElement)(b))) return b
			} else b = i_(d)
			var l = "cx" in e && (0, cd.isNumber)(e.cx),
				m = (0, ab.filterProps)(d, !0)
			if (l && ("insideStart" === f || "insideEnd" === f || "end" === f)) return i0(d, b, m)
			var n = l ? i1(d) : i2(d)
			return u.default.createElement(
				cM,
				i$({ className: (0, $.default)("recharts-label", void 0 === j ? "" : j) }, m, n, { breakAll: k }),
				b,
			)
		}
		i3.displayName = "Label"
		var i4 = function (a) {
			var b = a.cx,
				c = a.cy,
				d = a.angle,
				e = a.startAngle,
				f = a.endAngle,
				g = a.r,
				h = a.radius,
				i = a.innerRadius,
				j = a.outerRadius,
				k = a.x,
				l = a.y,
				m = a.top,
				n = a.left,
				o = a.width,
				p = a.height,
				q = a.clockWise,
				r = a.labelViewBox
			if (r) return r
			if ((0, cd.isNumber)(o) && (0, cd.isNumber)(p)) {
				if ((0, cd.isNumber)(k) && (0, cd.isNumber)(l)) return { x: k, y: l, width: o, height: p }
				if ((0, cd.isNumber)(m) && (0, cd.isNumber)(n)) return { x: m, y: n, width: o, height: p }
			}
			return (0, cd.isNumber)(k) && (0, cd.isNumber)(l)
				? { x: k, y: l, width: 0, height: 0 }
				: (0, cd.isNumber)(b) && (0, cd.isNumber)(c)
					? {
							cx: b,
							cy: c,
							startAngle: e || d || 0,
							endAngle: f || d || 0,
							innerRadius: i || 0,
							outerRadius: j || h || g || 0,
							clockWise: q,
						}
					: a.viewBox
						? a.viewBox
						: {}
		}
		;(i3.parseViewBox = i4),
			(i3.renderCallByParent = function (a, b) {
				var c,
					d,
					e = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2]
				if (!a || (!a.children && e && !a.label)) return null
				var f = a.children,
					g = i4(a),
					h = (0, ab.findAllByType)(f, i3).map(function (a, c) {
						return (0, u.cloneElement)(a, { viewBox: b || g, key: "label-".concat(c) })
					})
				if (!e) return h
				return [
					((c = a.label),
					(d = b || g),
					!c
						? null
						: !0 === c
							? u.default.createElement(i3, { key: "label-implicit", viewBox: d })
							: (0, cd.isNumOrStr)(c)
								? u.default.createElement(i3, { key: "label-implicit", viewBox: d, value: c })
								: (0, u.isValidElement)(c)
									? c.type === i3
										? (0, u.cloneElement)(c, { key: "label-implicit", viewBox: d })
										: u.default.createElement(i3, { key: "label-implicit", content: c, viewBox: d })
									: (0, V.default)(c)
										? u.default.createElement(i3, { key: "label-implicit", content: c, viewBox: d })
										: (0, iL.default)(c)
											? u.default.createElement(
													i3,
													i$({ viewBox: d }, c, { key: "label-implicit" }),
												)
											: null),
				].concat(
					(function (a) {
						if (Array.isArray(a)) return iX(a)
					})(h) ||
						(function (a) {
							if (("u" > typeof Symbol && null != a[Symbol.iterator]) || null != a["@@iterator"])
								return Array.from(a)
						})(h) ||
						(function (a, b) {
							if (a) {
								if ("string" == typeof a) return iX(a, void 0)
								var c = Object.prototype.toString.call(a).slice(8, -1)
								if (
									("Object" === c && a.constructor && (c = a.constructor.name),
									"Map" === c || "Set" === c)
								)
									return Array.from(a)
								if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
									return iX(a, void 0)
							}
						})(h) ||
						(function () {
							throw TypeError(
								"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
							)
						})(),
				)
			})
		var i5 = function (a, b) {
				var c = a.alwaysShow,
					d = a.ifOverflow
				return c && (d = "extendDomain"), d === b
			},
			i6 = a.i(34630),
			i7 = a.i(72195),
			i8 = function (a) {
				return null
			}
		i8.displayName = "Cell"
		var i9 = a.i(18577)
		function ja(a) {
			return (ja =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		var jb = ["valueAccessor"],
			jc = ["data", "dataKey", "clockWise", "id", "textBreakAll"]
		function jd(a, b) {
			;(null == b || b > a.length) && (b = a.length)
			for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]
			return d
		}
		function je() {
			return (je = Object.assign.bind()).apply(this, arguments)
		}
		function jf(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function jg(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? jf(Object(c), !0).forEach(function (b) {
							var d, e, f
							;(d = a),
								(e = b),
								(f = c[b]),
								(e = (function (a) {
									var b = (function (a, b) {
										if ("object" != ja(a) || !a) return a
										var c = a[Symbol.toPrimitive]
										if (void 0 !== c) {
											var d = c.call(a, b || "default")
											if ("object" != ja(d)) return d
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === b ? String : Number)(a)
									})(a, "string")
									return "symbol" == ja(b) ? b : b + ""
								})(e)) in d
									? Object.defineProperty(d, e, {
											value: f,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (d[e] = f)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: jf(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		function jh(a, b) {
			if (null == a) return {}
			var c,
				d,
				e = (function (a, b) {
					if (null == a) return {}
					var c = {}
					for (var d in a)
						if (Object.prototype.hasOwnProperty.call(a, d)) {
							if (b.indexOf(d) >= 0) continue
							c[d] = a[d]
						}
					return c
				})(a, b)
			if (Object.getOwnPropertySymbols) {
				var f = Object.getOwnPropertySymbols(a)
				for (d = 0; d < f.length; d++)
					(c = f[d]),
						!(b.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(a, c) && (e[c] = a[c])
			}
			return e
		}
		var ji = function (a) {
			return Array.isArray(a.value) ? (0, i9.default)(a.value) : a.value
		}
		function jj(a) {
			var b = a.valueAccessor,
				c = void 0 === b ? ji : b,
				d = jh(a, jb),
				e = d.data,
				f = d.dataKey,
				g = d.clockWise,
				h = d.id,
				i = d.textBreakAll,
				j = jh(d, jc)
			return e && e.length
				? u.default.createElement(
						ae,
						{ className: "recharts-label-list" },
						e.map(function (a, b) {
							var d = (0, U.default)(f) ? c(a, b) : hV(a && a.payload, f),
								e = (0, U.default)(h) ? {} : { id: "".concat(h, "-").concat(b) }
							return u.default.createElement(
								i3,
								je({}, (0, ab.filterProps)(a, !0), j, e, {
									parentViewBox: a.parentViewBox,
									value: d,
									textBreakAll: i,
									viewBox: i3.parseViewBox(
										(0, U.default)(g) ? a : jg(jg({}, a), {}, { clockWise: g }),
									),
									key: "label-".concat(b),
									index: b,
								}),
							)
						}),
					)
				: null
		}
		;(jj.displayName = "LabelList"),
			(jj.renderCallByParent = function (a, b) {
				var c,
					d = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2]
				if (!a || (!a.children && d && !a.label)) return null
				var e = a.children,
					f = (0, ab.findAllByType)(e, jj).map(function (a, c) {
						return (0, u.cloneElement)(a, { data: b, key: "labelList-".concat(c) })
					})
				return d
					? [
							((c = a.label),
							!c
								? null
								: !0 === c
									? u.default.createElement(jj, { key: "labelList-implicit", data: b })
									: u.default.isValidElement(c) || (0, V.default)(c)
										? u.default.createElement(jj, {
												key: "labelList-implicit",
												data: b,
												content: c,
											})
										: (0, iL.default)(c)
											? u.default.createElement(
													jj,
													je({ data: b }, c, { key: "labelList-implicit" }),
												)
											: null),
						].concat(
							(function (a) {
								if (Array.isArray(a)) return jd(a)
							})(f) ||
								(function (a) {
									if (("u" > typeof Symbol && null != a[Symbol.iterator]) || null != a["@@iterator"])
										return Array.from(a)
								})(f) ||
								(function (a, b) {
									if (a) {
										if ("string" == typeof a) return jd(a, void 0)
										var c = Object.prototype.toString.call(a).slice(8, -1)
										if (
											("Object" === c && a.constructor && (c = a.constructor.name),
											"Map" === c || "Set" === c)
										)
											return Array.from(a)
										if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
											return jd(a, void 0)
									}
								})(f) ||
								(function () {
									throw TypeError(
										"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
									)
								})(),
						)
					: f
			})
		var jk = a.i(95123),
			jl = a.i(17116)
		function jm(a) {
			return (jm =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function jn() {
			return (jn = Object.assign.bind()).apply(this, arguments)
		}
		function jo(a, b) {
			;(null == b || b > a.length) && (b = a.length)
			for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]
			return d
		}
		function jp(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function jq(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? jp(Object(c), !0).forEach(function (b) {
							var d, e, f
							;(d = a),
								(e = b),
								(f = c[b]),
								(e = (function (a) {
									var b = (function (a, b) {
										if ("object" != jm(a) || !a) return a
										var c = a[Symbol.toPrimitive]
										if (void 0 !== c) {
											var d = c.call(a, b || "default")
											if ("object" != jm(d)) return d
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === b ? String : Number)(a)
									})(a, "string")
									return "symbol" == jm(b) ? b : b + ""
								})(e)) in d
									? Object.defineProperty(d, e, {
											value: f,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (d[e] = f)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: jp(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		var jr = function (a, b, c, d, e) {
				var f = c - d
				return (
					"M ".concat(a, ",").concat(b) +
					"L ".concat(a + c, ",").concat(b) +
					"L ".concat(a + c - f / 2, ",").concat(b + e) +
					"L ".concat(a + c - f / 2 - d, ",").concat(b + e) +
					"L ".concat(a, ",").concat(b, " Z")
				)
			},
			js = {
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
			jt = function (a) {
				var b,
					c = jq(jq({}, js), a),
					d = (0, u.useRef)(),
					e =
						(function (a) {
							if (Array.isArray(a)) return a
						})((b = (0, u.useState)(-1))) ||
						(function (a, b) {
							var c = null == a ? null : ("u" > typeof Symbol && a[Symbol.iterator]) || a["@@iterator"]
							if (null != c) {
								var d,
									e,
									f,
									g,
									h = [],
									i = !0,
									j = !1
								try {
									;(f = (c = c.call(a)).next), !1
									for (; !(i = (d = f.call(c)).done) && (h.push(d.value), 2 !== h.length); i = !0);
								} catch (a) {
									;(j = !0), (e = a)
								} finally {
									try {
										if (!i && null != c.return && ((g = c.return()), Object(g) !== g)) return
									} finally {
										if (j) throw e
									}
								}
								return h
							}
						})(b, 2) ||
						(function (a, b) {
							if (a) {
								if ("string" == typeof a) return jo(a, 2)
								var c = Object.prototype.toString.call(a).slice(8, -1)
								if (
									("Object" === c && a.constructor && (c = a.constructor.name),
									"Map" === c || "Set" === c)
								)
									return Array.from(a)
								if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
									return jo(a, 2)
							}
						})(b, 2) ||
						(function () {
							throw TypeError(
								"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
							)
						})(),
					f = e[0],
					g = e[1]
				;(0, u.useEffect)(function () {
					if (d.current && d.current.getTotalLength)
						try {
							var a = d.current.getTotalLength()
							a && g(a)
						} catch (a) {}
				}, [])
				var h = c.x,
					i = c.y,
					j = c.upperWidth,
					k = c.lowerWidth,
					l = c.height,
					m = c.className,
					n = c.animationEasing,
					o = c.animationDuration,
					p = c.animationBegin,
					q = c.isUpdateAnimationActive
				if (h !== +h || i !== +i || j !== +j || k !== +k || l !== +l || (0 === j && 0 === k) || 0 === l)
					return null
				var r = (0, $.default)("recharts-trapezoid", m)
				return q
					? u.default.createElement(
							bs,
							{
								canBegin: f > 0,
								from: { upperWidth: 0, lowerWidth: 0, height: l, x: h, y: i },
								to: { upperWidth: j, lowerWidth: k, height: l, x: h, y: i },
								duration: o,
								animationEasing: n,
								isActive: q,
							},
							function (a) {
								var b = a.upperWidth,
									e = a.lowerWidth,
									g = a.height,
									h = a.x,
									i = a.y
								return u.default.createElement(
									bs,
									{
										canBegin: f > 0,
										from: "0px ".concat(-1 === f ? 1 : f, "px"),
										to: "".concat(f, "px 0px"),
										attributeName: "strokeDasharray",
										begin: p,
										duration: o,
										easing: n,
									},
									u.default.createElement(
										"path",
										jn({}, (0, ab.filterProps)(c, !0), {
											className: r,
											d: jr(h, i, b, e, g),
											ref: d,
										}),
									),
								)
							},
						)
					: u.default.createElement(
							"g",
							null,
							u.default.createElement(
								"path",
								jn({}, (0, ab.filterProps)(c, !0), { className: r, d: jr(h, i, j, k, l) }),
							),
						)
			}
		function ju(a) {
			return (ju =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function jv() {
			return (jv = Object.assign.bind()).apply(this, arguments)
		}
		function jw(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function jx(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? jw(Object(c), !0).forEach(function (b) {
							var d, e, f
							;(d = a),
								(e = b),
								(f = c[b]),
								(e = (function (a) {
									var b = (function (a, b) {
										if ("object" != ju(a) || !a) return a
										var c = a[Symbol.toPrimitive]
										if (void 0 !== c) {
											var d = c.call(a, b || "default")
											if ("object" != ju(d)) return d
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === b ? String : Number)(a)
									})(a, "string")
									return "symbol" == ju(b) ? b : b + ""
								})(e)) in d
									? Object.defineProperty(d, e, {
											value: f,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (d[e] = f)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: jw(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		var jy = function (a) {
				var b = a.cx,
					c = a.cy,
					d = a.radius,
					e = a.angle,
					f = a.sign,
					g = a.isExternal,
					h = a.cornerRadius,
					i = a.cornerIsExternal,
					j = h * (g ? 1 : -1) + d,
					k = Math.asin(h / j) / iP,
					l = i ? e : e + f * k
				return {
					center: iQ(b, c, j, l),
					circleTangency: iQ(b, c, d, l),
					lineTangency: iQ(b, c, j * Math.cos(k * iP), i ? e - f * k : e),
					theta: k,
				}
			},
			jz = function (a) {
				var b = a.cx,
					c = a.cy,
					d = a.innerRadius,
					e = a.outerRadius,
					f = a.startAngle,
					g = a.endAngle,
					h = (0, cd.mathSign)(g - f) * Math.min(Math.abs(g - f), 359.999),
					i = f + h,
					j = iQ(b, c, e, f),
					k = iQ(b, c, e, i),
					l = "M "
						.concat(j.x, ",")
						.concat(j.y, "\n    A ")
						.concat(e, ",")
						.concat(e, ",0,\n    ")
						.concat(+(Math.abs(h) > 180), ",")
						.concat(+(f > i), ",\n    ")
						.concat(k.x, ",")
						.concat(k.y, "\n  ")
				if (d > 0) {
					var m = iQ(b, c, d, f),
						n = iQ(b, c, d, i)
					l += "L "
						.concat(n.x, ",")
						.concat(n.y, "\n            A ")
						.concat(d, ",")
						.concat(d, ",0,\n            ")
						.concat(+(Math.abs(h) > 180), ",")
						.concat(+(f <= i), ",\n            ")
						.concat(m.x, ",")
						.concat(m.y, " Z")
				} else l += "L ".concat(b, ",").concat(c, " Z")
				return l
			},
			jA = function (a) {
				var b = a.cx,
					c = a.cy,
					d = a.innerRadius,
					e = a.outerRadius,
					f = a.cornerRadius,
					g = a.forceCornerRadius,
					h = a.cornerIsExternal,
					i = a.startAngle,
					j = a.endAngle,
					k = (0, cd.mathSign)(j - i),
					l = jy({ cx: b, cy: c, radius: e, angle: i, sign: k, cornerRadius: f, cornerIsExternal: h }),
					m = l.circleTangency,
					n = l.lineTangency,
					o = l.theta,
					p = jy({ cx: b, cy: c, radius: e, angle: j, sign: -k, cornerRadius: f, cornerIsExternal: h }),
					q = p.circleTangency,
					r = p.lineTangency,
					s = p.theta,
					t = h ? Math.abs(i - j) : Math.abs(i - j) - o - s
				if (t < 0)
					return g
						? "M "
								.concat(n.x, ",")
								.concat(n.y, "\n        a")
								.concat(f, ",")
								.concat(f, ",0,0,1,")
								.concat(2 * f, ",0\n        a")
								.concat(f, ",")
								.concat(f, ",0,0,1,")
								.concat(-(2 * f), ",0\n      ")
						: jz({ cx: b, cy: c, innerRadius: d, outerRadius: e, startAngle: i, endAngle: j })
				var u = "M "
					.concat(n.x, ",")
					.concat(n.y, "\n    A")
					.concat(f, ",")
					.concat(f, ",0,0,")
					.concat(+(k < 0), ",")
					.concat(m.x, ",")
					.concat(m.y, "\n    A")
					.concat(e, ",")
					.concat(e, ",0,")
					.concat(+(t > 180), ",")
					.concat(+(k < 0), ",")
					.concat(q.x, ",")
					.concat(q.y, "\n    A")
					.concat(f, ",")
					.concat(f, ",0,0,")
					.concat(+(k < 0), ",")
					.concat(r.x, ",")
					.concat(r.y, "\n  ")
				if (d > 0) {
					var v = jy({
							cx: b,
							cy: c,
							radius: d,
							angle: i,
							sign: k,
							isExternal: !0,
							cornerRadius: f,
							cornerIsExternal: h,
						}),
						w = v.circleTangency,
						x = v.lineTangency,
						y = v.theta,
						z = jy({
							cx: b,
							cy: c,
							radius: d,
							angle: j,
							sign: -k,
							isExternal: !0,
							cornerRadius: f,
							cornerIsExternal: h,
						}),
						A = z.circleTangency,
						B = z.lineTangency,
						C = z.theta,
						D = h ? Math.abs(i - j) : Math.abs(i - j) - y - C
					if (D < 0 && 0 === f) return "".concat(u, "L").concat(b, ",").concat(c, "Z")
					u += "L"
						.concat(B.x, ",")
						.concat(B.y, "\n      A")
						.concat(f, ",")
						.concat(f, ",0,0,")
						.concat(+(k < 0), ",")
						.concat(A.x, ",")
						.concat(A.y, "\n      A")
						.concat(d, ",")
						.concat(d, ",0,")
						.concat(+(D > 180), ",")
						.concat(+(k > 0), ",")
						.concat(w.x, ",")
						.concat(w.y, "\n      A")
						.concat(f, ",")
						.concat(f, ",0,0,")
						.concat(+(k < 0), ",")
						.concat(x.x, ",")
						.concat(x.y, "Z")
				} else u += "L".concat(b, ",").concat(c, "Z")
				return u
			},
			jB = {
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
			jC = function (a) {
				var b,
					c = jx(jx({}, jB), a),
					d = c.cx,
					e = c.cy,
					f = c.innerRadius,
					g = c.outerRadius,
					h = c.cornerRadius,
					i = c.forceCornerRadius,
					j = c.cornerIsExternal,
					k = c.startAngle,
					l = c.endAngle,
					m = c.className
				if (g < f || k === l) return null
				var n = (0, $.default)("recharts-sector", m),
					o = g - f,
					p = (0, cd.getPercentValue)(h, o, 0, !0)
				return (
					(b =
						p > 0 && 360 > Math.abs(k - l)
							? jA({
									cx: d,
									cy: e,
									innerRadius: f,
									outerRadius: g,
									cornerRadius: Math.min(p, o / 2),
									forceCornerRadius: i,
									cornerIsExternal: j,
									startAngle: k,
									endAngle: l,
								})
							: jz({ cx: d, cy: e, innerRadius: f, outerRadius: g, startAngle: k, endAngle: l })),
					u.default.createElement(
						"path",
						jv({}, (0, ab.filterProps)(c, !0), { className: n, d: b, role: "img" }),
					)
				)
			},
			jD = a.i(58297),
			jE = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"]
		function jF(a) {
			return (jF =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function jG(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function jH(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? jG(Object(c), !0).forEach(function (b) {
							var d, e, f
							;(d = a),
								(e = b),
								(f = c[b]),
								(e = (function (a) {
									var b = (function (a, b) {
										if ("object" != jF(a) || !a) return a
										var c = a[Symbol.toPrimitive]
										if (void 0 !== c) {
											var d = c.call(a, b || "default")
											if ("object" != jF(d)) return d
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === b ? String : Number)(a)
									})(a, "string")
									return "symbol" == jF(b) ? b : b + ""
								})(e)) in d
									? Object.defineProperty(d, e, {
											value: f,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (d[e] = f)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: jG(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		function jI(a) {
			var b = a.shapeType,
				c = a.elementProps
			switch (b) {
				case "rectangle":
					return u.default.createElement(b3, c)
				case "trapezoid":
					return u.default.createElement(jt, c)
				case "sector":
					return u.default.createElement(jC, c)
				case "symbols":
					if ("symbols" === b) return u.default.createElement(jD.Symbols, c)
					break
				default:
					return null
			}
		}
		function jJ(a) {
			var b,
				c = a.option,
				d = a.shapeType,
				e = a.propTransformer,
				f = a.activeClassName,
				g = a.isActive,
				h = (function (a, b) {
					if (null == a) return {}
					var c,
						d,
						e = (function (a, b) {
							if (null == a) return {}
							var c = {}
							for (var d in a)
								if (Object.prototype.hasOwnProperty.call(a, d)) {
									if (b.indexOf(d) >= 0) continue
									c[d] = a[d]
								}
							return c
						})(a, b)
					if (Object.getOwnPropertySymbols) {
						var f = Object.getOwnPropertySymbols(a)
						for (d = 0; d < f.length; d++)
							(c = f[d]),
								!(b.indexOf(c) >= 0) &&
									Object.prototype.propertyIsEnumerable.call(a, c) &&
									(e[c] = a[c])
					}
					return e
				})(a, jE)
			if ((0, u.isValidElement)(c))
				b = (0, u.cloneElement)(c, jH(jH({}, h), (0, u.isValidElement)(c) ? c.props : c))
			else if ((0, V.default)(c)) b = c(h)
			else if ((0, jk.default)(c) && !(0, jl.default)(c)) {
				var i = (
					void 0 === e
						? function (a, b) {
								return jH(jH({}, b), a)
							}
						: e
				)(c, h)
				b = u.default.createElement(jI, { shapeType: d, elementProps: i })
			} else b = u.default.createElement(jI, { shapeType: d, elementProps: h })
			return g ? u.default.createElement(ae, { className: void 0 === f ? "recharts-active-shape" : f }, b) : b
		}
		function jK(a, b) {
			return null != b && "trapezoids" in a.props
		}
		function jL(a, b) {
			return null != b && "sectors" in a.props
		}
		function jM(a, b) {
			return null != b && "points" in a.props
		}
		function jN(a, b) {
			var c,
				d,
				e = a.x === (null == b || null == (c = b.labelViewBox) ? void 0 : c.x) || a.x === b.x,
				f = a.y === (null == b || null == (d = b.labelViewBox) ? void 0 : d.y) || a.y === b.y
			return e && f
		}
		function jO(a, b) {
			var c = a.endAngle === b.endAngle,
				d = a.startAngle === b.startAngle
			return c && d
		}
		function jP(a, b) {
			var c = a.x === b.x,
				d = a.y === b.y,
				e = a.z === b.z
			return c && d && e
		}
		var jQ = ["x", "y"]
		function jR(a) {
			return (jR =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function jS() {
			return (jS = Object.assign.bind()).apply(this, arguments)
		}
		function jT(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function jU(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? jT(Object(c), !0).forEach(function (b) {
							var d, e, f
							;(d = a),
								(e = b),
								(f = c[b]),
								(e = (function (a) {
									var b = (function (a, b) {
										if ("object" != jR(a) || !a) return a
										var c = a[Symbol.toPrimitive]
										if (void 0 !== c) {
											var d = c.call(a, b || "default")
											if ("object" != jR(d)) return d
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === b ? String : Number)(a)
									})(a, "string")
									return "symbol" == jR(b) ? b : b + ""
								})(e)) in d
									? Object.defineProperty(d, e, {
											value: f,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (d[e] = f)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: jT(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		function jV(a, b) {
			var c = a.x,
				d = a.y,
				e = (function (a, b) {
					if (null == a) return {}
					var c,
						d,
						e = (function (a, b) {
							if (null == a) return {}
							var c = {}
							for (var d in a)
								if (Object.prototype.hasOwnProperty.call(a, d)) {
									if (b.indexOf(d) >= 0) continue
									c[d] = a[d]
								}
							return c
						})(a, b)
					if (Object.getOwnPropertySymbols) {
						var f = Object.getOwnPropertySymbols(a)
						for (d = 0; d < f.length; d++)
							(c = f[d]),
								!(b.indexOf(c) >= 0) &&
									Object.prototype.propertyIsEnumerable.call(a, c) &&
									(e[c] = a[c])
					}
					return e
				})(a, jQ),
				f = parseInt("".concat(c), 10),
				g = parseInt("".concat(d), 10),
				h = parseInt("".concat(b.height || e.height), 10),
				i = parseInt("".concat(b.width || e.width), 10)
			return jU(
				jU(jU(jU(jU({}, b), e), f ? { x: f } : {}), g ? { y: g } : {}),
				{},
				{ height: h, width: i, name: b.name, radius: b.radius },
			)
		}
		function jW(a) {
			return u.default.createElement(
				jJ,
				jS({ shapeType: "rectangle", propTransformer: jV, activeClassName: "recharts-active-bar" }, a),
			)
		}
		var jX = function (a) {
				var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
				return function (c, d) {
					if ("number" == typeof a) return a
					var e = (0, cd.isNumber)(c) || (0, cd.isNullish)(c)
					return e ? a(c, d) : (e || _(!1), b)
				}
			},
			jY = ["value", "background"]
		function jZ(a) {
			return (jZ =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function j$() {
			return (j$ = Object.assign.bind()).apply(this, arguments)
		}
		function j_(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function j0(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? j_(Object(c), !0).forEach(function (b) {
							j5(a, b, c[b])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: j_(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		function j1(a, b) {
			for (var c = 0; c < b.length; c++) {
				var d = b[c]
				;(d.enumerable = d.enumerable || !1),
					(d.configurable = !0),
					"value" in d && (d.writable = !0),
					Object.defineProperty(a, j6(d.key), d)
			}
		}
		function j2() {
			try {
				var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (a) {}
			return (j2 = function () {
				return !!a
			})()
		}
		function j3(a) {
			return (j3 = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (a) {
						return a.__proto__ || Object.getPrototypeOf(a)
					})(a)
		}
		function j4(a, b) {
			return (j4 = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (a, b) {
						return (a.__proto__ = b), a
					})(a, b)
		}
		function j5(a, b, c) {
			return (
				(b = j6(b)) in a
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		function j6(a) {
			var b = (function (a, b) {
				if ("object" != jZ(a) || !a) return a
				var c = a[Symbol.toPrimitive]
				if (void 0 !== c) {
					var d = c.call(a, b || "default")
					if ("object" != jZ(d)) return d
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === b ? String : Number)(a)
			})(a, "string")
			return "symbol" == jZ(b) ? b : b + ""
		}
		var j7 = (function (a) {
			var b, c
			function d() {
				var a, b, c
				if (!(this instanceof d)) throw TypeError("Cannot call a class as a function")
				for (var e = arguments.length, f = Array(e), g = 0; g < e; g++) f[g] = arguments[g]
				return (
					(b = d),
					(c = [].concat(f)),
					(b = j3(b)),
					j5(
						(a = (function (a, b) {
							if (b && ("object" === jZ(b) || "function" == typeof b)) return b
							if (void 0 !== b)
								throw TypeError("Derived constructors may only return object or undefined")
							var c = a
							if (void 0 === c)
								throw ReferenceError("this hasn't been initialised - super() hasn't been called")
							return c
						})(this, j2() ? Reflect.construct(b, c || [], j3(this).constructor) : b.apply(this, c))),
						"state",
						{ isAnimationFinished: !1 },
					),
					j5(a, "id", (0, cd.uniqueId)("recharts-bar-")),
					j5(a, "handleAnimationEnd", function () {
						var b = a.props.onAnimationEnd
						a.setState({ isAnimationFinished: !0 }), b && b()
					}),
					j5(a, "handleAnimationStart", function () {
						var b = a.props.onAnimationStart
						a.setState({ isAnimationFinished: !1 }), b && b()
					}),
					a
				)
			}
			if ("function" != typeof a && null !== a)
				throw TypeError("Super expression must either be null or a function")
			return (
				(d.prototype = Object.create(a && a.prototype, {
					constructor: { value: d, writable: !0, configurable: !0 },
				})),
				Object.defineProperty(d, "prototype", { writable: !1 }),
				a && j4(d, a),
				(b = [
					{
						key: "renderRectanglesStatically",
						value: function (a) {
							var b = this,
								c = this.props,
								d = c.shape,
								e = c.dataKey,
								f = c.activeIndex,
								g = c.activeBar,
								h = (0, ab.filterProps)(this.props, !1)
							return (
								a &&
								a.map(function (a, c) {
									var i = c === f,
										j = j0(
											j0(j0({}, h), a),
											{},
											{
												isActive: i,
												option: i ? g : d,
												index: c,
												dataKey: e,
												onAnimationStart: b.handleAnimationStart,
												onAnimationEnd: b.handleAnimationEnd,
											},
										)
									return u.default.createElement(
										ae,
										j$(
											{ className: "recharts-bar-rectangle" },
											(0, ah.adaptEventsOfChild)(b.props, a, c),
											{
												key: "rectangle-"
													.concat(null == a ? void 0 : a.x, "-")
													.concat(null == a ? void 0 : a.y, "-")
													.concat(null == a ? void 0 : a.value, "-")
													.concat(c),
											},
										),
										u.default.createElement(jW, j),
									)
								})
							)
						},
					},
					{
						key: "renderRectanglesWithAnimation",
						value: function () {
							var a = this,
								b = this.props,
								c = b.data,
								d = b.layout,
								e = b.isAnimationActive,
								f = b.animationBegin,
								g = b.animationDuration,
								h = b.animationEasing,
								i = b.animationId,
								j = this.state.prevData
							return u.default.createElement(
								bs,
								{
									begin: f,
									duration: g,
									isActive: e,
									easing: h,
									from: { t: 0 },
									to: { t: 1 },
									key: "bar-".concat(i),
									onAnimationEnd: this.handleAnimationEnd,
									onAnimationStart: this.handleAnimationStart,
								},
								function (b) {
									var e = b.t,
										f = c.map(function (a, b) {
											var c = j && j[b]
											if (c) {
												var f = (0, cd.interpolateNumber)(c.x, a.x),
													g = (0, cd.interpolateNumber)(c.y, a.y),
													h = (0, cd.interpolateNumber)(c.width, a.width),
													i = (0, cd.interpolateNumber)(c.height, a.height)
												return j0(
													j0({}, a),
													{},
													{ x: f(e), y: g(e), width: h(e), height: i(e) },
												)
											}
											if ("horizontal" === d) {
												var k = (0, cd.interpolateNumber)(0, a.height)(e)
												return j0(j0({}, a), {}, { y: a.y + a.height - k, height: k })
											}
											var l = (0, cd.interpolateNumber)(0, a.width)(e)
											return j0(j0({}, a), {}, { width: l })
										})
									return u.default.createElement(ae, null, a.renderRectanglesStatically(f))
								},
							)
						},
					},
					{
						key: "renderRectangles",
						value: function () {
							var a = this.props,
								b = a.data,
								c = a.isAnimationActive,
								d = this.state.prevData
							return c && b && b.length && (!d || !(0, gR.default)(d, b))
								? this.renderRectanglesWithAnimation()
								: this.renderRectanglesStatically(b)
						},
					},
					{
						key: "renderBackground",
						value: function () {
							var a = this,
								b = this.props,
								c = b.data,
								d = b.dataKey,
								e = b.activeIndex,
								f = (0, ab.filterProps)(this.props.background, !1)
							return c.map(function (b, c) {
								b.value
								var g = b.background,
									h = (function (a, b) {
										if (null == a) return {}
										var c,
											d,
											e = (function (a, b) {
												if (null == a) return {}
												var c = {}
												for (var d in a)
													if (Object.prototype.hasOwnProperty.call(a, d)) {
														if (b.indexOf(d) >= 0) continue
														c[d] = a[d]
													}
												return c
											})(a, b)
										if (Object.getOwnPropertySymbols) {
											var f = Object.getOwnPropertySymbols(a)
											for (d = 0; d < f.length; d++)
												(c = f[d]),
													!(b.indexOf(c) >= 0) &&
														Object.prototype.propertyIsEnumerable.call(a, c) &&
														(e[c] = a[c])
										}
										return e
									})(b, jY)
								if (!g) return null
								var i = j0(
									j0(
										j0(j0(j0({}, h), {}, { fill: "#eee" }, g), f),
										(0, ah.adaptEventsOfChild)(a.props, b, c),
									),
									{},
									{
										onAnimationStart: a.handleAnimationStart,
										onAnimationEnd: a.handleAnimationEnd,
										dataKey: d,
										index: c,
										className: "recharts-bar-background-rectangle",
									},
								)
								return u.default.createElement(
									jW,
									j$(
										{
											key: "background-bar-".concat(c),
											option: a.props.background,
											isActive: c === e,
										},
										i,
									),
								)
							})
						},
					},
					{
						key: "renderErrorBar",
						value: function (a, b) {
							if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null
							var c = this.props,
								d = c.data,
								e = c.xAxis,
								f = c.yAxis,
								g = c.layout,
								h = c.children,
								i = (0, ab.findAllByType)(h, hK)
							if (!i) return null
							var j = "vertical" === g ? d[0].height / 2 : d[0].width / 2,
								k = function (a, b) {
									var c = Array.isArray(a.value) ? a.value[1] : a.value
									return { x: a.x, y: a.y, value: c, errorVal: hV(a, b) }
								}
							return u.default.createElement(
								ae,
								{ clipPath: a ? "url(#clipPath-".concat(b, ")") : null },
								i.map(function (a) {
									return u.default.cloneElement(a, {
										key: "error-bar-".concat(b, "-").concat(a.props.dataKey),
										data: d,
										xAxis: e,
										yAxis: f,
										layout: g,
										offset: j,
										dataPointFormatter: k,
									})
								}),
							)
						},
					},
					{
						key: "render",
						value: function () {
							var a = this.props,
								b = a.hide,
								c = a.data,
								d = a.className,
								e = a.xAxis,
								f = a.yAxis,
								g = a.left,
								h = a.top,
								i = a.width,
								j = a.height,
								k = a.isAnimationActive,
								l = a.background,
								m = a.id
							if (b || !c || !c.length) return null
							var n = this.state.isAnimationFinished,
								o = (0, $.default)("recharts-bar", d),
								p = e && e.allowDataOverflow,
								q = f && f.allowDataOverflow,
								r = p || q,
								s = (0, U.default)(m) ? this.id : m
							return u.default.createElement(
								ae,
								{ className: o },
								p || q
									? u.default.createElement(
											"defs",
											null,
											u.default.createElement(
												"clipPath",
												{ id: "clipPath-".concat(s) },
												u.default.createElement("rect", {
													x: p ? g : g - i / 2,
													y: q ? h : h - j / 2,
													width: p ? i : 2 * i,
													height: q ? j : 2 * j,
												}),
											),
										)
									: null,
								u.default.createElement(
									ae,
									{
										className: "recharts-bar-rectangles",
										clipPath: r ? "url(#clipPath-".concat(s, ")") : null,
									},
									l ? this.renderBackground() : null,
									this.renderRectangles(),
								),
								this.renderErrorBar(r, s),
								(!k || n) && jj.renderCallByParent(this.props, c),
							)
						},
					},
				]),
				(c = [
					{
						key: "getDerivedStateFromProps",
						value: function (a, b) {
							return a.animationId !== b.prevAnimationId
								? { prevAnimationId: a.animationId, curData: a.data, prevData: b.curData }
								: a.data !== b.curData
									? { curData: a.data }
									: null
						},
					},
				]),
				b && j1(d.prototype, b),
				c && j1(d, c),
				Object.defineProperty(d, "prototype", { writable: !1 }),
				d
			)
		})(u.PureComponent)
		function j8(a) {
			return (j8 =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function j9(a, b) {
			for (var c = 0; c < b.length; c++) {
				var d = b[c]
				;(d.enumerable = d.enumerable || !1),
					(d.configurable = !0),
					"value" in d && (d.writable = !0),
					Object.defineProperty(a, kd(d.key), d)
			}
		}
		function ka(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function kb(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? ka(Object(c), !0).forEach(function (b) {
							kc(a, b, c[b])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: ka(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		function kc(a, b, c) {
			return (
				(b = kd(b)) in a
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		function kd(a) {
			var b = (function (a, b) {
				if ("object" != j8(a) || !a) return a
				var c = a[Symbol.toPrimitive]
				if (void 0 !== c) {
					var d = c.call(a, b || "default")
					if ("object" != j8(d)) return d
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === b ? String : Number)(a)
			})(a, "string")
			return "symbol" == j8(b) ? b : b + ""
		}
		j5(j7, "displayName", "Bar"),
			j5(j7, "defaultProps", {
				xAxisId: 0,
				yAxisId: 0,
				legendType: "rect",
				minPointSize: 0,
				hide: !1,
				data: [],
				layout: "vertical",
				activeBar: !1,
				isAnimationActive: !ce.Global.isSsr,
				animationBegin: 0,
				animationDuration: 400,
				animationEasing: "ease",
			}),
			j5(j7, "getComposedData", function (a) {
				var b = a.props,
					c = a.item,
					d = a.barPosition,
					e = a.bandSize,
					f = a.xAxis,
					g = a.yAxis,
					h = a.xAxisTicks,
					i = a.yAxisTicks,
					j = a.stackedData,
					k = a.dataStartIndex,
					l = a.displayedData,
					m = a.offset,
					n = h9(d, c)
				if (!n) return null
				var o = b.layout,
					p = c.type.defaultProps,
					q = void 0 !== p ? j0(j0({}, p), c.props) : c.props,
					r = q.dataKey,
					s = q.children,
					t = q.minPointSize,
					u = "horizontal" === o ? g : f,
					v = j ? u.scale.domain() : null,
					w = ii({ numericAxis: u }),
					x = (0, ab.findAllByType)(s, i8),
					y = l.map(function (a, b) {
						j ? (l = ia(j[k + b], v)) : Array.isArray((l = hV(a, r))) || (l = [w, l])
						var d = jX(t, j7.defaultProps.minPointSize)(l[1], b)
						if ("horizontal" === o) {
							var l,
								m,
								p,
								q,
								s,
								u,
								y,
								z = [g.scale(l[0]), g.scale(l[1])],
								A = z[0],
								B = z[1]
							;(m = ih({ axis: f, ticks: h, bandSize: e, offset: n.offset, entry: a, index: b })),
								(p = null != (y = null != B ? B : A) ? y : void 0),
								(q = n.size)
							var C = A - B
							if (
								((s = Number.isNaN(C) ? 0 : C),
								(u = { x: m, y: g.y, width: q, height: g.height }),
								Math.abs(d) > 0 && Math.abs(s) < Math.abs(d))
							) {
								var D = (0, cd.mathSign)(s || d) * (Math.abs(d) - Math.abs(s))
								;(p -= D), (s += D)
							}
						} else {
							var E = [f.scale(l[0]), f.scale(l[1])],
								F = E[0],
								G = E[1]
							if (
								((m = F),
								(p = ih({ axis: g, ticks: i, bandSize: e, offset: n.offset, entry: a, index: b })),
								(q = G - F),
								(s = n.size),
								(u = { x: f.x, y: p, width: f.width, height: s }),
								Math.abs(d) > 0 && Math.abs(q) < Math.abs(d))
							) {
								var H = (0, cd.mathSign)(q || d) * (Math.abs(d) - Math.abs(q))
								q += H
							}
						}
						return j0(
							j0(
								j0({}, a),
								{},
								{ x: m, y: p, width: q, height: s, value: j ? l : l[1], payload: a, background: u },
								x && x[b] && x[b].props,
							),
							{},
							{ tooltipPayload: [ir(c, a)], tooltipPosition: { x: m + q / 2, y: p + s / 2 } },
						)
					})
				return j0({ data: y, layout: o }, m)
			})
		var ke = function (a, b) {
				var c = a.x,
					d = a.y,
					e = b.x,
					f = b.y
				return { x: Math.min(c, e), y: Math.min(d, f), width: Math.abs(e - c), height: Math.abs(f - d) }
			},
			kf = (function () {
				var a, b
				function c(a) {
					if (!(this instanceof c)) throw TypeError("Cannot call a class as a function")
					this.scale = a
				}
				return (
					(a = [
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
							value: function (a) {
								var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
									c = b.bandAware,
									d = b.position
								if (void 0 !== a) {
									if (d)
										switch (d) {
											case "start":
											default:
												return this.scale(a)
											case "middle":
												var e = this.bandwidth ? this.bandwidth() / 2 : 0
												return this.scale(a) + e
											case "end":
												var f = this.bandwidth ? this.bandwidth() : 0
												return this.scale(a) + f
										}
									if (c) {
										var g = this.bandwidth ? this.bandwidth() / 2 : 0
										return this.scale(a) + g
									}
									return this.scale(a)
								}
							},
						},
						{
							key: "isInRange",
							value: function (a) {
								var b = this.range(),
									c = b[0],
									d = b[b.length - 1]
								return c <= d ? a >= c && a <= d : a >= d && a <= c
							},
						},
					]),
					(b = [
						{
							key: "create",
							value: function (a) {
								return new c(a)
							},
						},
					]),
					a && j9(c.prototype, a),
					b && j9(c, b),
					Object.defineProperty(c, "prototype", { writable: !1 }),
					c
				)
			})()
		kc(kf, "EPS", 1e-4)
		var kg = function (a) {
				var b = Object.keys(a).reduce(function (b, c) {
					return kb(kb({}, b), {}, kc({}, c, kf.create(a[c])))
				}, {})
				return kb(
					kb({}, b),
					{},
					{
						apply: function (a) {
							var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								d = c.bandAware,
								e = c.position
							return (0, i6.default)(a, function (a, c) {
								return b[c].apply(a, { bandAware: d, position: e })
							})
						},
						isInRange: function (a) {
							return (0, i7.default)(a, function (a, c) {
								return b[c].isInRange(a)
							})
						},
					},
				)
			},
			kh = function (a) {
				var b = a.width,
					c = a.height,
					d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
					e = ((((d % 180) + 180) % 180) * Math.PI) / 180,
					f = Math.atan(c / b)
				return Math.abs(e > f && e < Math.PI - f ? c / Math.sin(e) : b / Math.cos(e))
			},
			ki = a.i(95660)
		function kj() {
			return (kj = Object.assign.bind()).apply(this, arguments)
		}
		function kk(a) {
			return (kk =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function kl(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function km(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? kl(Object(c), !0).forEach(function (b) {
							kq(a, b, c[b])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: kl(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		function kn() {
			try {
				var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (a) {}
			return (kn = function () {
				return !!a
			})()
		}
		function ko(a) {
			return (ko = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (a) {
						return a.__proto__ || Object.getPrototypeOf(a)
					})(a)
		}
		function kp(a, b) {
			return (kp = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (a, b) {
						return (a.__proto__ = b), a
					})(a, b)
		}
		function kq(a, b, c) {
			return (
				(b = kr(b)) in a
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		function kr(a) {
			var b = (function (a, b) {
				if ("object" != kk(a) || !a) return a
				var c = a[Symbol.toPrimitive]
				if (void 0 !== c) {
					var d = c.call(a, b || "default")
					if ("object" != kk(d)) return d
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === b ? String : Number)(a)
			})(a, "string")
			return "symbol" == kk(b) ? b : b + ""
		}
		var ks = function (a) {
				var b = a.x,
					c = a.y,
					d = a.xAxis,
					e = a.yAxis,
					f = kg({ x: d.scale, y: e.scale }),
					g = f.apply({ x: b, y: c }, { bandAware: !0 })
				return i5(a, "discard") && !f.isInRange(g) ? null : g
			},
			kt = (function (a) {
				var b
				function c() {
					var a, b
					if (!(this instanceof c)) throw TypeError("Cannot call a class as a function")
					return (
						(a = c),
						(b = arguments),
						(a = ko(a)),
						(function (a, b) {
							if (b && ("object" === kk(b) || "function" == typeof b)) return b
							if (void 0 !== b)
								throw TypeError("Derived constructors may only return object or undefined")
							var c = a
							if (void 0 === c)
								throw ReferenceError("this hasn't been initialised - super() hasn't been called")
							return c
						})(this, kn() ? Reflect.construct(a, b || [], ko(this).constructor) : a.apply(this, b))
					)
				}
				if ("function" != typeof a && null !== a)
					throw TypeError("Super expression must either be null or a function")
				return (
					(c.prototype = Object.create(a && a.prototype, {
						constructor: { value: c, writable: !0, configurable: !0 },
					})),
					Object.defineProperty(c, "prototype", { writable: !1 }),
					a && kp(c, a),
					(b = [
						{
							key: "render",
							value: function () {
								var a = this.props,
									b = a.x,
									d = a.y,
									e = a.r,
									f = a.alwaysShow,
									g = a.clipPathId,
									h = (0, cd.isNumOrStr)(b),
									i = (0, cd.isNumOrStr)(d)
								if (
									((0, ki.warn)(
										void 0 === f,
										'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
									),
									!h || !i)
								)
									return null
								var j = ks(this.props)
								if (!j) return null
								var k = j.x,
									l = j.y,
									m = this.props,
									n = m.shape,
									o = m.className,
									p = km(
										km(
											{ clipPath: i5(this.props, "hidden") ? "url(#".concat(g, ")") : void 0 },
											(0, ab.filterProps)(this.props, !0),
										),
										{},
										{ cx: k, cy: l },
									)
								return u.default.createElement(
									ae,
									{ className: (0, $.default)("recharts-reference-dot", o) },
									c.renderDot(n, p),
									i3.renderCallByParent(this.props, {
										x: k - e,
										y: l - e,
										width: 2 * e,
										height: 2 * e,
									}),
								)
							},
						},
					]),
					(function (a, b) {
						for (var c = 0; c < b.length; c++) {
							var d = b[c]
							;(d.enumerable = d.enumerable || !1),
								(d.configurable = !0),
								"value" in d && (d.writable = !0),
								Object.defineProperty(a, kr(d.key), d)
						}
					})(c.prototype, b),
					Object.defineProperty(c, "prototype", { writable: !1 }),
					c
				)
			})(u.default.Component)
		kq(kt, "displayName", "ReferenceDot"),
			kq(kt, "defaultProps", {
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
			kq(kt, "renderDot", function (a, b) {
				return u.default.isValidElement(a)
					? u.default.cloneElement(a, b)
					: (0, V.default)(a)
						? a(b)
						: u.default.createElement(
								aj,
								kj({}, b, { cx: b.cx, cy: b.cy, className: "recharts-reference-dot-dot" }),
							)
			})
		var ku = a.i(59903)
		a.i(40553)
		var kv = (0, a.i(42265).default)(
				function (a) {
					return { x: a.left, y: a.top, width: a.width, height: a.height }
				},
				function (a) {
					return "l" + a.left + "t" + a.top + "w" + a.width + "h" + a.height
				},
			),
			kw = (0, u.createContext)(void 0),
			kx = (0, u.createContext)(void 0),
			ky = (0, u.createContext)(void 0),
			kz = (0, u.createContext)({}),
			kA = (0, u.createContext)(void 0),
			kB = (0, u.createContext)(0),
			kC = (0, u.createContext)(0),
			kD = function (a) {
				var b = a.state,
					c = b.xAxisMap,
					d = b.yAxisMap,
					e = b.offset,
					f = a.clipPathId,
					g = a.children,
					h = a.width,
					i = a.height,
					j = kv(e)
				return u.default.createElement(
					kw.Provider,
					{ value: c },
					u.default.createElement(
						kx.Provider,
						{ value: d },
						u.default.createElement(
							kz.Provider,
							{ value: e },
							u.default.createElement(
								ky.Provider,
								{ value: j },
								u.default.createElement(
									kA.Provider,
									{ value: f },
									u.default.createElement(
										kB.Provider,
										{ value: i },
										u.default.createElement(kC.Provider, { value: h }, g),
									),
								),
							),
						),
					),
				)
			},
			kE = function (a) {
				var b = (0, u.useContext)(kw)
				null == b && _(!1)
				var c = b[a]
				return null == c && _(!1), c
			},
			kF = function (a) {
				var b = (0, u.useContext)(kx)
				null == b && _(!1)
				var c = b[a]
				return null == c && _(!1), c
			},
			kG = function () {
				return (0, u.useContext)(kC)
			},
			kH = function () {
				return (0, u.useContext)(kB)
			}
		function kI(a) {
			return (kI =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function kJ() {
			try {
				var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (a) {}
			return (kJ = function () {
				return !!a
			})()
		}
		function kK(a) {
			return (kK = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (a) {
						return a.__proto__ || Object.getPrototypeOf(a)
					})(a)
		}
		function kL(a, b) {
			return (kL = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (a, b) {
						return (a.__proto__ = b), a
					})(a, b)
		}
		function kM(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function kN(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? kM(Object(c), !0).forEach(function (b) {
							kO(a, b, c[b])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: kM(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		function kO(a, b, c) {
			return (
				(b = kP(b)) in a
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		function kP(a) {
			var b = (function (a, b) {
				if ("object" != kI(a) || !a) return a
				var c = a[Symbol.toPrimitive]
				if (void 0 !== c) {
					var d = c.call(a, b || "default")
					if ("object" != kI(d)) return d
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === b ? String : Number)(a)
			})(a, "string")
			return "symbol" == kI(b) ? b : b + ""
		}
		function kQ(a, b) {
			;(null == b || b > a.length) && (b = a.length)
			for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]
			return d
		}
		function kR() {
			return (kR = Object.assign.bind()).apply(this, arguments)
		}
		var kS = function (a, b) {
				return u.default.isValidElement(a)
					? u.default.cloneElement(a, b)
					: (0, V.default)(a)
						? a(b)
						: u.default.createElement("line", kR({}, b, { className: "recharts-reference-line-line" }))
			},
			kT = function (a, b, c, d, e, f, g, h, i) {
				var j = e.x,
					k = e.y,
					l = e.width,
					m = e.height
				if (c) {
					var n = i.y,
						o = a.y.apply(n, { position: f })
					if (i5(i, "discard") && !a.y.isInRange(o)) return null
					var p = [
						{ x: j + l, y: o },
						{ x: j, y: o },
					]
					return "left" === h ? p.reverse() : p
				}
				if (b) {
					var q = i.x,
						r = a.x.apply(q, { position: f })
					if (i5(i, "discard") && !a.x.isInRange(r)) return null
					var s = [
						{ x: r, y: k + m },
						{ x: r, y: k },
					]
					return "top" === g ? s.reverse() : s
				}
				if (d) {
					var t = i.segment.map(function (b) {
						return a.apply(b, { position: f })
					})
					return i5(i, "discard") &&
						(0, ku.default)(t, function (b) {
							return !a.isInRange(b)
						})
						? null
						: t
				}
				return null
			}
		function kU(a) {
			var b,
				c = a.x,
				d = a.y,
				e = a.segment,
				f = a.xAxisId,
				g = a.yAxisId,
				h = a.shape,
				i = a.className,
				j = a.alwaysShow,
				k = (0, u.useContext)(kA),
				l = kE(f),
				m = kF(g),
				n = (0, u.useContext)(ky)
			if (!k || !n) return null
			;(0, ki.warn)(
				void 0 === j,
				'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
			)
			var o = kT(
				kg({ x: l.scale, y: m.scale }),
				(0, cd.isNumOrStr)(c),
				(0, cd.isNumOrStr)(d),
				e && 2 === e.length,
				n,
				a.position,
				l.orientation,
				m.orientation,
				a,
			)
			if (!o) return null
			var p =
					(function (a) {
						if (Array.isArray(a)) return a
					})(o) ||
					(function (a, b) {
						var c = null == a ? null : ("u" > typeof Symbol && a[Symbol.iterator]) || a["@@iterator"]
						if (null != c) {
							var d,
								e,
								f,
								g,
								h = [],
								i = !0,
								j = !1
							try {
								;(f = (c = c.call(a)).next), !1
								for (; !(i = (d = f.call(c)).done) && (h.push(d.value), 2 !== h.length); i = !0);
							} catch (a) {
								;(j = !0), (e = a)
							} finally {
								try {
									if (!i && null != c.return && ((g = c.return()), Object(g) !== g)) return
								} finally {
									if (j) throw e
								}
							}
							return h
						}
					})(o, 2) ||
					(function (a, b) {
						if (a) {
							if ("string" == typeof a) return kQ(a, 2)
							var c = Object.prototype.toString.call(a).slice(8, -1)
							if (
								("Object" === c && a.constructor && (c = a.constructor.name),
								"Map" === c || "Set" === c)
							)
								return Array.from(a)
							if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return kQ(a, 2)
						}
					})(o, 2) ||
					(function () {
						throw TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
						)
					})(),
				q = p[0],
				r = q.x,
				s = q.y,
				t = p[1],
				v = t.x,
				w = t.y,
				x = kN(
					kN({ clipPath: i5(a, "hidden") ? "url(#".concat(k, ")") : void 0 }, (0, ab.filterProps)(a, !0)),
					{},
					{ x1: r, y1: s, x2: v, y2: w },
				)
			return u.default.createElement(
				ae,
				{ className: (0, $.default)("recharts-reference-line", i) },
				kS(h, x),
				i3.renderCallByParent(
					a,
					ke({ x: (b = { x1: r, y1: s, x2: v, y2: w }).x1, y: b.y1 }, { x: b.x2, y: b.y2 }),
				),
			)
		}
		var kV = (function (a) {
			var b
			function c() {
				var a, b
				if (!(this instanceof c)) throw TypeError("Cannot call a class as a function")
				return (
					(a = c),
					(b = arguments),
					(a = kK(a)),
					(function (a, b) {
						if (b && ("object" === kI(b) || "function" == typeof b)) return b
						if (void 0 !== b) throw TypeError("Derived constructors may only return object or undefined")
						var c = a
						if (void 0 === c)
							throw ReferenceError("this hasn't been initialised - super() hasn't been called")
						return c
					})(this, kJ() ? Reflect.construct(a, b || [], kK(this).constructor) : a.apply(this, b))
				)
			}
			if ("function" != typeof a && null !== a)
				throw TypeError("Super expression must either be null or a function")
			return (
				(c.prototype = Object.create(a && a.prototype, {
					constructor: { value: c, writable: !0, configurable: !0 },
				})),
				Object.defineProperty(c, "prototype", { writable: !1 }),
				a && kL(c, a),
				(b = [
					{
						key: "render",
						value: function () {
							return u.default.createElement(kU, this.props)
						},
					},
				]),
				(function (a, b) {
					for (var c = 0; c < b.length; c++) {
						var d = b[c]
						;(d.enumerable = d.enumerable || !1),
							(d.configurable = !0),
							"value" in d && (d.writable = !0),
							Object.defineProperty(a, kP(d.key), d)
					}
				})(c.prototype, b),
				Object.defineProperty(c, "prototype", { writable: !1 }),
				c
			)
		})(u.default.Component)
		function kW() {
			return (kW = Object.assign.bind()).apply(this, arguments)
		}
		function kX(a) {
			return (kX =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function kY(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function kZ(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? kY(Object(c), !0).forEach(function (b) {
							k1(a, b, c[b])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: kY(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		kO(kV, "displayName", "ReferenceLine"),
			kO(kV, "defaultProps", {
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
		function k$() {
			try {
				var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (a) {}
			return (k$ = function () {
				return !!a
			})()
		}
		function k_(a) {
			return (k_ = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (a) {
						return a.__proto__ || Object.getPrototypeOf(a)
					})(a)
		}
		function k0(a, b) {
			return (k0 = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (a, b) {
						return (a.__proto__ = b), a
					})(a, b)
		}
		function k1(a, b, c) {
			return (
				(b = k2(b)) in a
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		function k2(a) {
			var b = (function (a, b) {
				if ("object" != kX(a) || !a) return a
				var c = a[Symbol.toPrimitive]
				if (void 0 !== c) {
					var d = c.call(a, b || "default")
					if ("object" != kX(d)) return d
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === b ? String : Number)(a)
			})(a, "string")
			return "symbol" == kX(b) ? b : b + ""
		}
		var k3 = function (a, b, c, d, e) {
				var f = e.x1,
					g = e.x2,
					h = e.y1,
					i = e.y2,
					j = e.xAxis,
					k = e.yAxis
				if (!j || !k) return null
				var l = kg({ x: j.scale, y: k.scale }),
					m = {
						x: a ? l.x.apply(f, { position: "start" }) : l.x.rangeMin,
						y: c ? l.y.apply(h, { position: "start" }) : l.y.rangeMin,
					},
					n = {
						x: b ? l.x.apply(g, { position: "end" }) : l.x.rangeMax,
						y: d ? l.y.apply(i, { position: "end" }) : l.y.rangeMax,
					}
				return !i5(e, "discard") || (l.isInRange(m) && l.isInRange(n)) ? ke(m, n) : null
			},
			k4 = (function (a) {
				var b
				function c() {
					var a, b
					if (!(this instanceof c)) throw TypeError("Cannot call a class as a function")
					return (
						(a = c),
						(b = arguments),
						(a = k_(a)),
						(function (a, b) {
							if (b && ("object" === kX(b) || "function" == typeof b)) return b
							if (void 0 !== b)
								throw TypeError("Derived constructors may only return object or undefined")
							var c = a
							if (void 0 === c)
								throw ReferenceError("this hasn't been initialised - super() hasn't been called")
							return c
						})(this, k$() ? Reflect.construct(a, b || [], k_(this).constructor) : a.apply(this, b))
					)
				}
				if ("function" != typeof a && null !== a)
					throw TypeError("Super expression must either be null or a function")
				return (
					(c.prototype = Object.create(a && a.prototype, {
						constructor: { value: c, writable: !0, configurable: !0 },
					})),
					Object.defineProperty(c, "prototype", { writable: !1 }),
					a && k0(c, a),
					(b = [
						{
							key: "render",
							value: function () {
								var a = this.props,
									b = a.x1,
									d = a.x2,
									e = a.y1,
									f = a.y2,
									g = a.className,
									h = a.alwaysShow,
									i = a.clipPathId
								;(0, ki.warn)(
									void 0 === h,
									'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
								)
								var j = (0, cd.isNumOrStr)(b),
									k = (0, cd.isNumOrStr)(d),
									l = (0, cd.isNumOrStr)(e),
									m = (0, cd.isNumOrStr)(f),
									n = this.props.shape
								if (!j && !k && !l && !m && !n) return null
								var o = k3(j, k, l, m, this.props)
								if (!o && !n) return null
								var p = i5(this.props, "hidden") ? "url(#".concat(i, ")") : void 0
								return u.default.createElement(
									ae,
									{ className: (0, $.default)("recharts-reference-area", g) },
									c.renderRect(n, kZ(kZ({ clipPath: p }, (0, ab.filterProps)(this.props, !0)), o)),
									i3.renderCallByParent(this.props, o),
								)
							},
						},
					]),
					(function (a, b) {
						for (var c = 0; c < b.length; c++) {
							var d = b[c]
							;(d.enumerable = d.enumerable || !1),
								(d.configurable = !0),
								"value" in d && (d.writable = !0),
								Object.defineProperty(a, k2(d.key), d)
						}
					})(c.prototype, b),
					Object.defineProperty(c, "prototype", { writable: !1 }),
					c
				)
			})(u.default.Component)
		function k5(a) {
			return (
				(function (a) {
					if (Array.isArray(a)) return k6(a)
				})(a) ||
				(function (a) {
					if (("u" > typeof Symbol && null != a[Symbol.iterator]) || null != a["@@iterator"])
						return Array.from(a)
				})(a) ||
				(function (a, b) {
					if (a) {
						if ("string" == typeof a) return k6(a, void 0)
						var c = Object.prototype.toString.call(a).slice(8, -1)
						if (("Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c))
							return Array.from(a)
						if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
							return k6(a, void 0)
					}
				})(a) ||
				(function () {
					throw TypeError(
						"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function k6(a, b) {
			;(null == b || b > a.length) && (b = a.length)
			for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]
			return d
		}
		k1(k4, "displayName", "ReferenceArea"),
			k1(k4, "defaultProps", {
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
			k1(k4, "renderRect", function (a, b) {
				return u.default.isValidElement(a)
					? u.default.cloneElement(a, b)
					: (0, V.default)(a)
						? a(b)
						: u.default.createElement(b3, kW({}, b, { className: "recharts-reference-area-rect" }))
			})
		var k7 = function (a, b, c, d, e) {
				var f = (0, ab.findAllByType)(a, kV),
					g = (0, ab.findAllByType)(a, kt),
					h = [].concat(k5(f), k5(g)),
					i = (0, ab.findAllByType)(a, k4),
					j = "".concat(d, "Id"),
					k = d[0],
					l = b
				if (
					(h.length &&
						(l = h.reduce(function (a, b) {
							if (b.props[j] === c && i5(b.props, "extendDomain") && (0, cd.isNumber)(b.props[k])) {
								var d = b.props[k]
								return [Math.min(a[0], d), Math.max(a[1], d)]
							}
							return a
						}, l)),
					i.length)
				) {
					var m = "".concat(k, "1"),
						n = "".concat(k, "2")
					l = i.reduce(function (a, b) {
						if (
							b.props[j] === c &&
							i5(b.props, "extendDomain") &&
							(0, cd.isNumber)(b.props[m]) &&
							(0, cd.isNumber)(b.props[n])
						) {
							var d = b.props[m],
								e = b.props[n]
							return [Math.min(a[0], d, e), Math.max(a[1], d, e)]
						}
						return a
					}, l)
				}
				return (
					e &&
						e.length &&
						(l = e.reduce(function (a, b) {
							return (0, cd.isNumber)(b) ? [Math.min(a[0], b), Math.max(a[1], b)] : a
						}, l)),
					l
				)
			},
			k8 = a.i(54351),
			k9 = new (a.i(13166).default)(),
			la = "recharts.syncMouseEvents"
		function lb(a) {
			return (lb =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function lc(a, b, c) {
			return (
				(b = ld(b)) in a
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		function ld(a) {
			var b = (function (a, b) {
				if ("object" != lb(a) || !a) return a
				var c = a[Symbol.toPrimitive]
				if (void 0 !== c) {
					var d = c.call(a, b || "default")
					if ("object" != lb(d)) return d
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === b ? String : Number)(a)
			})(a, "string")
			return "symbol" == lb(b) ? b : b + ""
		}
		var le =
			((c = function a() {
				if (!(this instanceof a)) throw TypeError("Cannot call a class as a function")
				lc(this, "activeIndex", 0), lc(this, "coordinateList", []), lc(this, "layout", "horizontal")
			}),
			(d = [
				{
					key: "setDetails",
					value: function (a) {
						var b,
							c = a.coordinateList,
							d = void 0 === c ? null : c,
							e = a.container,
							f = void 0 === e ? null : e,
							g = a.layout,
							h = void 0 === g ? null : g,
							i = a.offset,
							j = void 0 === i ? null : i,
							k = a.mouseHandlerCallback,
							l = void 0 === k ? null : k
						;(this.coordinateList = null != (b = null != d ? d : this.coordinateList) ? b : []),
							(this.container = null != f ? f : this.container),
							(this.layout = null != h ? h : this.layout),
							(this.offset = null != j ? j : this.offset),
							(this.mouseHandlerCallback = null != l ? l : this.mouseHandlerCallback),
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
					value: function (a) {
						if (0 !== this.coordinateList.length)
							switch (a.key) {
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
					value: function (a) {
						this.activeIndex = a
					},
				},
				{
					key: "spoofMouse",
					value: function () {
						if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
							var a,
								b,
								c = this.container.getBoundingClientRect(),
								d = c.x,
								e = c.y,
								f = c.height,
								g = this.coordinateList[this.activeIndex].coordinate,
								h = (null == (a = window) ? void 0 : a.scrollX) || 0,
								i = (null == (b = window) ? void 0 : b.scrollY) || 0,
								j = e + this.offset.top + f / 2 + i
							this.mouseHandlerCallback({ pageX: d + g + h, pageY: j })
						}
					},
				},
			]),
			(function (a, b) {
				for (var c = 0; c < b.length; c++) {
					var d = b[c]
					;(d.enumerable = d.enumerable || !1),
						(d.configurable = !0),
						"value" in d && (d.writable = !0),
						Object.defineProperty(a, ld(d.key), d)
				}
			})(c.prototype, d),
			Object.defineProperty(c, "prototype", { writable: !1 }),
			c)
		function lf(a) {
			this._context = a
		}
		function lg(a) {
			return new lf(a)
		}
		lf.prototype = {
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
			point: function (a, b) {
				switch (((a *= 1), (b *= 1), this._point)) {
					case 0:
						;(this._point = 1), this._line ? this._context.lineTo(a, b) : this._context.moveTo(a, b)
						break
					case 1:
						this._point = 2
					default:
						this._context.lineTo(a, b)
				}
			},
		}
		var lh = a.i(14312)
		function li(a) {
			return a[0]
		}
		function lj(a) {
			return a[1]
		}
		function lk(a, b) {
			var c = (0, gx.default)(!0),
				d = null,
				e = lg,
				f = null,
				g = (0, lh.withPath)(h)
			function h(h) {
				var i,
					j,
					k,
					l = (h = gw(h)).length,
					m = !1
				for (null == d && (f = e((k = g()))), i = 0; i <= l; ++i)
					!(i < l && c((j = h[i]), i, h)) === m && ((m = !m) ? f.lineStart() : f.lineEnd()),
						m && f.point(+a(j, i, h), +b(j, i, h))
				if (k) return (f = null), k + "" || null
			}
			return (
				(a = "function" == typeof a ? a : void 0 === a ? li : (0, gx.default)(a)),
				(b = "function" == typeof b ? b : void 0 === b ? lj : (0, gx.default)(b)),
				(h.x = function (b) {
					return arguments.length ? ((a = "function" == typeof b ? b : (0, gx.default)(+b)), h) : a
				}),
				(h.y = function (a) {
					return arguments.length ? ((b = "function" == typeof a ? a : (0, gx.default)(+a)), h) : b
				}),
				(h.defined = function (a) {
					return arguments.length ? ((c = "function" == typeof a ? a : (0, gx.default)(!!a)), h) : c
				}),
				(h.curve = function (a) {
					return arguments.length ? ((e = a), null != d && (f = e(d)), h) : e
				}),
				(h.context = function (a) {
					return arguments.length ? (null == a ? (d = f = null) : (f = e((d = a))), h) : d
				}),
				h
			)
		}
		function ll(a, b, c) {
			var d = null,
				e = (0, gx.default)(!0),
				f = null,
				g = lg,
				h = null,
				i = (0, lh.withPath)(j)
			function j(j) {
				var k,
					l,
					m,
					n,
					o,
					p = (j = gw(j)).length,
					q = !1,
					r = Array(p),
					s = Array(p)
				for (null == f && (h = g((o = i()))), k = 0; k <= p; ++k) {
					if (!(k < p && e((n = j[k]), k, j)) === q)
						if ((q = !q)) (l = k), h.areaStart(), h.lineStart()
						else {
							for (h.lineEnd(), h.lineStart(), m = k - 1; m >= l; --m) h.point(r[m], s[m])
							h.lineEnd(), h.areaEnd()
						}
					q &&
						((r[k] = +a(n, k, j)),
						(s[k] = +b(n, k, j)),
						h.point(d ? +d(n, k, j) : r[k], c ? +c(n, k, j) : s[k]))
				}
				if (o) return (h = null), o + "" || null
			}
			function k() {
				return lk().defined(e).curve(g).context(f)
			}
			return (
				(a = "function" == typeof a ? a : void 0 === a ? li : (0, gx.default)(+a)),
				(b = "function" == typeof b ? b : void 0 === b ? (0, gx.default)(0) : (0, gx.default)(+b)),
				(c = "function" == typeof c ? c : void 0 === c ? lj : (0, gx.default)(+c)),
				(j.x = function (b) {
					return arguments.length
						? ((a = "function" == typeof b ? b : (0, gx.default)(+b)), (d = null), j)
						: a
				}),
				(j.x0 = function (b) {
					return arguments.length ? ((a = "function" == typeof b ? b : (0, gx.default)(+b)), j) : a
				}),
				(j.x1 = function (a) {
					return arguments.length
						? ((d = null == a ? null : "function" == typeof a ? a : (0, gx.default)(+a)), j)
						: d
				}),
				(j.y = function (a) {
					return arguments.length
						? ((b = "function" == typeof a ? a : (0, gx.default)(+a)), (c = null), j)
						: b
				}),
				(j.y0 = function (a) {
					return arguments.length ? ((b = "function" == typeof a ? a : (0, gx.default)(+a)), j) : b
				}),
				(j.y1 = function (a) {
					return arguments.length
						? ((c = null == a ? null : "function" == typeof a ? a : (0, gx.default)(+a)), j)
						: c
				}),
				(j.lineX0 = j.lineY0 =
					function () {
						return k().x(a).y(b)
					}),
				(j.lineY1 = function () {
					return k().x(a).y(c)
				}),
				(j.lineX1 = function () {
					return k().x(d).y(b)
				}),
				(j.defined = function (a) {
					return arguments.length ? ((e = "function" == typeof a ? a : (0, gx.default)(!!a)), j) : e
				}),
				(j.curve = function (a) {
					return arguments.length ? ((g = a), null != f && (h = g(f)), j) : g
				}),
				(j.context = function (a) {
					return arguments.length ? (null == a ? (f = h = null) : (h = g((f = a))), j) : f
				}),
				j
			)
		}
		function lm() {}
		function ln(a, b, c) {
			a._context.bezierCurveTo(
				(2 * a._x0 + a._x1) / 3,
				(2 * a._y0 + a._y1) / 3,
				(a._x0 + 2 * a._x1) / 3,
				(a._y0 + 2 * a._y1) / 3,
				(a._x0 + 4 * a._x1 + b) / 6,
				(a._y0 + 4 * a._y1 + c) / 6,
			)
		}
		function lo(a) {
			this._context = a
		}
		function lp(a) {
			this._context = a
		}
		function lq(a) {
			this._context = a
		}
		;(lo.prototype = {
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
						ln(this, this._x1, this._y1)
					case 2:
						this._context.lineTo(this._x1, this._y1)
				}
				;(this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
					(this._line = 1 - this._line)
			},
			point: function (a, b) {
				switch (((a *= 1), (b *= 1), this._point)) {
					case 0:
						;(this._point = 1), this._line ? this._context.lineTo(a, b) : this._context.moveTo(a, b)
						break
					case 1:
						this._point = 2
						break
					case 2:
						;(this._point = 3),
							this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6)
					default:
						ln(this, a, b)
				}
				;(this._x0 = this._x1), (this._x1 = a), (this._y0 = this._y1), (this._y1 = b)
			},
		}),
			(lp.prototype = {
				areaStart: lm,
				areaEnd: lm,
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
				point: function (a, b) {
					switch (((a *= 1), (b *= 1), this._point)) {
						case 0:
							;(this._point = 1), (this._x2 = a), (this._y2 = b)
							break
						case 1:
							;(this._point = 2), (this._x3 = a), (this._y3 = b)
							break
						case 2:
							;(this._point = 3),
								(this._x4 = a),
								(this._y4 = b),
								this._context.moveTo(
									(this._x0 + 4 * this._x1 + a) / 6,
									(this._y0 + 4 * this._y1 + b) / 6,
								)
							break
						default:
							ln(this, a, b)
					}
					;(this._x0 = this._x1), (this._x1 = a), (this._y0 = this._y1), (this._y1 = b)
				},
			}),
			(lq.prototype = {
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
				point: function (a, b) {
					switch (((a *= 1), (b *= 1), this._point)) {
						case 0:
							this._point = 1
							break
						case 1:
							this._point = 2
							break
						case 2:
							this._point = 3
							var c = (this._x0 + 4 * this._x1 + a) / 6,
								d = (this._y0 + 4 * this._y1 + b) / 6
							this._line ? this._context.lineTo(c, d) : this._context.moveTo(c, d)
							break
						case 3:
							this._point = 4
						default:
							ln(this, a, b)
					}
					;(this._x0 = this._x1), (this._x1 = a), (this._y0 = this._y1), (this._y1 = b)
				},
			})
		class lr {
			constructor(a, b) {
				;(this._context = a), (this._x = b)
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
			point(a, b) {
				switch (((a *= 1), (b *= 1), this._point)) {
					case 0:
						;(this._point = 1), this._line ? this._context.lineTo(a, b) : this._context.moveTo(a, b)
						break
					case 1:
						this._point = 2
					default:
						this._x
							? this._context.bezierCurveTo((this._x0 = (this._x0 + a) / 2), this._y0, this._x0, b, a, b)
							: this._context.bezierCurveTo(this._x0, (this._y0 = (this._y0 + b) / 2), a, this._y0, a, b)
				}
				;(this._x0 = a), (this._y0 = b)
			}
		}
		function ls(a) {
			this._context = a
		}
		ls.prototype = {
			areaStart: lm,
			areaEnd: lm,
			lineStart: function () {
				this._point = 0
			},
			lineEnd: function () {
				this._point && this._context.closePath()
			},
			point: function (a, b) {
				;(a *= 1),
					(b *= 1),
					this._point ? this._context.lineTo(a, b) : ((this._point = 1), this._context.moveTo(a, b))
			},
		}
		function lt(a, b, c) {
			var d = a._x1 - a._x0,
				e = b - a._x1,
				f = (a._y1 - a._y0) / (d || (e < 0 && -0)),
				g = (c - a._y1) / (e || (d < 0 && -0))
			return (
				((f < 0 ? -1 : 1) + (g < 0 ? -1 : 1)) *
					Math.min(Math.abs(f), Math.abs(g), 0.5 * Math.abs((f * e + g * d) / (d + e))) || 0
			)
		}
		function lu(a, b) {
			var c = a._x1 - a._x0
			return c ? ((3 * (a._y1 - a._y0)) / c - b) / 2 : b
		}
		function lv(a, b, c) {
			var d = a._x0,
				e = a._y0,
				f = a._x1,
				g = a._y1,
				h = (f - d) / 3
			a._context.bezierCurveTo(d + h, e + h * b, f - h, g - h * c, f, g)
		}
		function lw(a) {
			this._context = a
		}
		function lx(a) {
			this._context = new ly(a)
		}
		function ly(a) {
			this._context = a
		}
		function lz(a) {
			this._context = a
		}
		function lA(a) {
			var b,
				c,
				d = a.length - 1,
				e = Array(d),
				f = Array(d),
				g = Array(d)
			for (e[0] = 0, f[0] = 2, g[0] = a[0] + 2 * a[1], b = 1; b < d - 1; ++b)
				(e[b] = 1), (f[b] = 4), (g[b] = 4 * a[b] + 2 * a[b + 1])
			for (e[d - 1] = 2, f[d - 1] = 7, g[d - 1] = 8 * a[d - 1] + a[d], b = 1; b < d; ++b)
				(c = e[b] / f[b - 1]), (f[b] -= c), (g[b] -= c * g[b - 1])
			for (e[d - 1] = g[d - 1] / f[d - 1], b = d - 2; b >= 0; --b) e[b] = (g[b] - e[b + 1]) / f[b]
			for (b = 0, f[d - 1] = (a[d] + e[d - 1]) / 2; b < d - 1; ++b) f[b] = 2 * a[b + 1] - e[b + 1]
			return [e, f]
		}
		function lB(a, b) {
			;(this._context = a), (this._t = b)
		}
		function lC(a) {
			return (lC =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function lD() {
			return (lD = Object.assign.bind()).apply(this, arguments)
		}
		function lE(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function lF(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? lE(Object(c), !0).forEach(function (b) {
							var d, e, f
							;(d = a),
								(e = b),
								(f = c[b]),
								(e = (function (a) {
									var b = (function (a, b) {
										if ("object" != lC(a) || !a) return a
										var c = a[Symbol.toPrimitive]
										if (void 0 !== c) {
											var d = c.call(a, b || "default")
											if ("object" != lC(d)) return d
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === b ? String : Number)(a)
									})(a, "string")
									return "symbol" == lC(b) ? b : b + ""
								})(e)) in d
									? Object.defineProperty(d, e, {
											value: f,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (d[e] = f)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: lE(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		;(lw.prototype = {
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
						lv(this, this._t0, lu(this, this._t0))
				}
				;(this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
					(this._line = 1 - this._line)
			},
			point: function (a, b) {
				var c = NaN
				if (((b *= 1), (a *= 1) !== this._x1 || b !== this._y1)) {
					switch (this._point) {
						case 0:
							;(this._point = 1), this._line ? this._context.lineTo(a, b) : this._context.moveTo(a, b)
							break
						case 1:
							this._point = 2
							break
						case 2:
							;(this._point = 3), lv(this, lu(this, (c = lt(this, a, b))), c)
							break
						default:
							lv(this, this._t0, (c = lt(this, a, b)))
					}
					;(this._x0 = this._x1), (this._x1 = a), (this._y0 = this._y1), (this._y1 = b), (this._t0 = c)
				}
			},
		}),
			((lx.prototype = Object.create(lw.prototype)).point = function (a, b) {
				lw.prototype.point.call(this, b, a)
			}),
			(ly.prototype = {
				moveTo: function (a, b) {
					this._context.moveTo(b, a)
				},
				closePath: function () {
					this._context.closePath()
				},
				lineTo: function (a, b) {
					this._context.lineTo(b, a)
				},
				bezierCurveTo: function (a, b, c, d, e, f) {
					this._context.bezierCurveTo(b, a, d, c, f, e)
				},
			}),
			(lz.prototype = {
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
					var a = this._x,
						b = this._y,
						c = a.length
					if (c)
						if ((this._line ? this._context.lineTo(a[0], b[0]) : this._context.moveTo(a[0], b[0]), 2 === c))
							this._context.lineTo(a[1], b[1])
						else
							for (var d = lA(a), e = lA(b), f = 0, g = 1; g < c; ++f, ++g)
								this._context.bezierCurveTo(d[0][f], e[0][f], d[1][f], e[1][f], a[g], b[g])
					;(this._line || (0 !== this._line && 1 === c)) && this._context.closePath(),
						(this._line = 1 - this._line),
						(this._x = this._y = null)
				},
				point: function (a, b) {
					this._x.push(+a), this._y.push(+b)
				},
			}),
			(lB.prototype = {
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
				point: function (a, b) {
					switch (((a *= 1), (b *= 1), this._point)) {
						case 0:
							;(this._point = 1), this._line ? this._context.lineTo(a, b) : this._context.moveTo(a, b)
							break
						case 1:
							this._point = 2
						default:
							if (this._t <= 0) this._context.lineTo(this._x, b), this._context.lineTo(a, b)
							else {
								var c = this._x * (1 - this._t) + a * this._t
								this._context.lineTo(c, this._y), this._context.lineTo(c, b)
							}
					}
					;(this._x = a), (this._y = b)
				},
			})
		var lG = {
				curveBasisClosed: function (a) {
					return new lp(a)
				},
				curveBasisOpen: function (a) {
					return new lq(a)
				},
				curveBasis: function (a) {
					return new lo(a)
				},
				curveBumpX: function (a) {
					return new lr(a, !0)
				},
				curveBumpY: function (a) {
					return new lr(a, !1)
				},
				curveLinearClosed: function (a) {
					return new ls(a)
				},
				curveLinear: lg,
				curveMonotoneX: function (a) {
					return new lw(a)
				},
				curveMonotoneY: function (a) {
					return new lx(a)
				},
				curveNatural: function (a) {
					return new lz(a)
				},
				curveStep: function (a) {
					return new lB(a, 0.5)
				},
				curveStepAfter: function (a) {
					return new lB(a, 1)
				},
				curveStepBefore: function (a) {
					return new lB(a, 0)
				},
			},
			lH = function (a) {
				return a.x === +a.x && a.y === +a.y
			},
			lI = function (a) {
				return a.x
			},
			lJ = function (a) {
				return a.y
			},
			lK = function (a, b) {
				if ((0, V.default)(a)) return a
				var c = "curve".concat((0, gQ.default)(a))
				return ("curveMonotone" === c || "curveBump" === c) && b
					? lG["".concat(c).concat("vertical" === b ? "Y" : "X")]
					: lG[c] || lg
			},
			lL = function (a) {
				var b,
					c = a.type,
					d = a.points,
					e = void 0 === d ? [] : d,
					f = a.baseLine,
					g = a.layout,
					h = a.connectNulls,
					i = void 0 !== h && h,
					j = lK(void 0 === c ? "linear" : c, g),
					k = i
						? e.filter(function (a) {
								return lH(a)
							})
						: e
				if (Array.isArray(f)) {
					var l = i
							? f.filter(function (a) {
									return lH(a)
								})
							: f,
						m = k.map(function (a, b) {
							return lF(lF({}, a), {}, { base: l[b] })
						})
					return (
						(b =
							"vertical" === g
								? ll()
										.y(lJ)
										.x1(lI)
										.x0(function (a) {
											return a.base.x
										})
								: ll()
										.x(lI)
										.y1(lJ)
										.y0(function (a) {
											return a.base.y
										}))
							.defined(lH)
							.curve(j),
						b(m)
					)
				}
				return (
					(b =
						"vertical" === g && (0, cd.isNumber)(f)
							? ll().y(lJ).x1(lI).x0(f)
							: (0, cd.isNumber)(f)
								? ll().x(lI).y1(lJ).y0(f)
								: lk().x(lI).y(lJ))
						.defined(lH)
						.curve(j),
					b(k)
				)
			},
			lM = function (a) {
				var b = a.className,
					c = a.points,
					d = a.path,
					e = a.pathRef
				if ((!c || !c.length) && !d) return null
				var f = c && c.length ? lL(a) : d
				return u.createElement(
					"path",
					lD({}, (0, ab.filterProps)(a, !1), (0, ah.adaptEventHandlers)(a), {
						className: (0, $.default)("recharts-curve", b),
						d: f,
						ref: e,
					}),
				)
			}
		function lN(a) {
			return (lN =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		var lO = ["x", "y", "top", "left", "width", "height", "className"]
		function lP() {
			return (lP = Object.assign.bind()).apply(this, arguments)
		}
		function lQ(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		var lR = function (a) {
			var b = a.x,
				c = void 0 === b ? 0 : b,
				d = a.y,
				e = void 0 === d ? 0 : d,
				f = a.top,
				g = void 0 === f ? 0 : f,
				h = a.left,
				i = void 0 === h ? 0 : h,
				j = a.width,
				k = void 0 === j ? 0 : j,
				l = a.height,
				m = void 0 === l ? 0 : l,
				n = a.className,
				o = (function (a) {
					for (var b = 1; b < arguments.length; b++) {
						var c = null != arguments[b] ? arguments[b] : {}
						b % 2
							? lQ(Object(c), !0).forEach(function (b) {
									var d, e, f
									;(d = a),
										(e = b),
										(f = c[b]),
										(e = (function (a) {
											var b = (function (a, b) {
												if ("object" != lN(a) || !a) return a
												var c = a[Symbol.toPrimitive]
												if (void 0 !== c) {
													var d = c.call(a, b || "default")
													if ("object" != lN(d)) return d
													throw TypeError("@@toPrimitive must return a primitive value.")
												}
												return ("string" === b ? String : Number)(a)
											})(a, "string")
											return "symbol" == lN(b) ? b : b + ""
										})(e)) in d
											? Object.defineProperty(d, e, {
													value: f,
													enumerable: !0,
													configurable: !0,
													writable: !0,
												})
											: (d[e] = f)
								})
							: Object.getOwnPropertyDescriptors
								? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
								: lQ(Object(c)).forEach(function (b) {
										Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
									})
					}
					return a
				})(
					{ x: c, y: e, top: g, left: i, width: k, height: m },
					(function (a, b) {
						if (null == a) return {}
						var c,
							d,
							e = (function (a, b) {
								if (null == a) return {}
								var c = {}
								for (var d in a)
									if (Object.prototype.hasOwnProperty.call(a, d)) {
										if (b.indexOf(d) >= 0) continue
										c[d] = a[d]
									}
								return c
							})(a, b)
						if (Object.getOwnPropertySymbols) {
							var f = Object.getOwnPropertySymbols(a)
							for (d = 0; d < f.length; d++)
								(c = f[d]),
									!(b.indexOf(c) >= 0) &&
										Object.prototype.propertyIsEnumerable.call(a, c) &&
										(e[c] = a[c])
						}
						return e
					})(a, lO),
				)
			return (0, cd.isNumber)(c) &&
				(0, cd.isNumber)(e) &&
				(0, cd.isNumber)(k) &&
				(0, cd.isNumber)(m) &&
				(0, cd.isNumber)(g) &&
				(0, cd.isNumber)(i)
				? u.default.createElement(
						"path",
						lP({}, (0, ab.filterProps)(o, !0), {
							className: (0, $.default)("recharts-cross", n),
							d: "M".concat(c, ",").concat(g, "v").concat(m, "M").concat(i, ",").concat(e, "h").concat(k),
						}),
					)
				: null
		}
		function lS(a) {
			var b = a.cx,
				c = a.cy,
				d = a.radius,
				e = a.startAngle,
				f = a.endAngle
			return { points: [iQ(b, c, d, e), iQ(b, c, d, f)], cx: b, cy: c, radius: d, startAngle: e, endAngle: f }
		}
		function lT(a) {
			return (lT =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function lU(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function lV(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? lU(Object(c), !0).forEach(function (b) {
							var d, e, f
							;(d = a),
								(e = b),
								(f = c[b]),
								(e = (function (a) {
									var b = (function (a, b) {
										if ("object" != lT(a) || !a) return a
										var c = a[Symbol.toPrimitive]
										if (void 0 !== c) {
											var d = c.call(a, b || "default")
											if ("object" != lT(d)) return d
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === b ? String : Number)(a)
									})(a, "string")
									return "symbol" == lT(b) ? b : b + ""
								})(e)) in d
									? Object.defineProperty(d, e, {
											value: f,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (d[e] = f)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: lU(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		function lW(a) {
			var b,
				c,
				d,
				e,
				f = a.element,
				g = a.tooltipEventType,
				h = a.isActive,
				i = a.activeCoordinate,
				j = a.activePayload,
				k = a.offset,
				l = a.activeTooltipIndex,
				m = a.tooltipAxisBandSize,
				n = a.layout,
				o = a.chartName,
				p = null != (c = f.props.cursor) ? c : null == (d = f.type.defaultProps) ? void 0 : d.cursor
			if (!f || !p || !h || !i || ("ScatterChart" !== o && "axis" !== g)) return null
			var q = lM
			if ("ScatterChart" === o) (e = i), (q = lR)
			else if ("BarChart" === o)
				(b = m / 2),
					(e = {
						stroke: "none",
						fill: "#ccc",
						x: "horizontal" === n ? i.x - b : k.left + 0.5,
						y: "horizontal" === n ? k.top + 0.5 : i.y - b,
						width: "horizontal" === n ? m : k.width - 1,
						height: "horizontal" === n ? k.height - 1 : m,
					}),
					(q = b3)
			else if ("radial" === n) {
				var r = lS(i),
					s = r.cx,
					t = r.cy,
					v = r.radius
				;(e = { cx: s, cy: t, startAngle: r.startAngle, endAngle: r.endAngle, innerRadius: v, outerRadius: v }),
					(q = jC)
			} else
				(e = {
					points: (function (a, b, c) {
						var d, e, f, g
						if ("horizontal" === a) (f = d = b.x), (e = c.top), (g = c.top + c.height)
						else if ("vertical" === a) (g = e = b.y), (d = c.left), (f = c.left + c.width)
						else if (null != b.cx && null != b.cy)
							if ("centric" !== a) return lS(b)
							else {
								var h = b.cx,
									i = b.cy,
									j = b.innerRadius,
									k = b.outerRadius,
									l = b.angle,
									m = iQ(h, i, j, l),
									n = iQ(h, i, k, l)
								;(d = m.x), (e = m.y), (f = n.x), (g = n.y)
							}
						return [
							{ x: d, y: e },
							{ x: f, y: g },
						]
					})(n, i, k),
				}),
					(q = lM)
			var w = lV(
				lV(lV(lV({ stroke: "#ccc", pointerEvents: "none" }, k), e), (0, ab.filterProps)(p, !1)),
				{},
				{ payload: j, payloadIndex: l, className: (0, $.default)("recharts-tooltip-cursor", p.className) },
			)
			return (0, u.isValidElement)(p) ? (0, u.cloneElement)(p, w) : (0, u.createElement)(q, w)
		}
		var lX = ["item"],
			lY = ["children", "className", "width", "height", "style", "compact", "title", "desc"]
		function lZ(a) {
			return (lZ =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function l$() {
			return (l$ = Object.assign.bind()).apply(this, arguments)
		}
		function l_(a, b) {
			return (
				(function (a) {
					if (Array.isArray(a)) return a
				})(a) ||
				(function (a, b) {
					var c = null == a ? null : ("u" > typeof Symbol && a[Symbol.iterator]) || a["@@iterator"]
					if (null != c) {
						var d,
							e,
							f,
							g,
							h = [],
							i = !0,
							j = !1
						try {
							if (((f = (c = c.call(a)).next), 0 === b)) {
								if (Object(c) !== c) return
								i = !1
							} else for (; !(i = (d = f.call(c)).done) && (h.push(d.value), h.length !== b); i = !0);
						} catch (a) {
							;(j = !0), (e = a)
						} finally {
							try {
								if (!i && null != c.return && ((g = c.return()), Object(g) !== g)) return
							} finally {
								if (j) throw e
							}
						}
						return h
					}
				})(a, b) ||
				l5(a, b) ||
				(function () {
					throw TypeError(
						"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function l0(a, b) {
			if (null == a) return {}
			var c,
				d,
				e = (function (a, b) {
					if (null == a) return {}
					var c = {}
					for (var d in a)
						if (Object.prototype.hasOwnProperty.call(a, d)) {
							if (b.indexOf(d) >= 0) continue
							c[d] = a[d]
						}
					return c
				})(a, b)
			if (Object.getOwnPropertySymbols) {
				var f = Object.getOwnPropertySymbols(a)
				for (d = 0; d < f.length; d++)
					(c = f[d]),
						!(b.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(a, c) && (e[c] = a[c])
			}
			return e
		}
		function l1() {
			try {
				var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (a) {}
			return (l1 = function () {
				return !!a
			})()
		}
		function l2(a) {
			return (l2 = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (a) {
						return a.__proto__ || Object.getPrototypeOf(a)
					})(a)
		}
		function l3(a, b) {
			return (l3 = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (a, b) {
						return (a.__proto__ = b), a
					})(a, b)
		}
		function l4(a) {
			return (
				(function (a) {
					if (Array.isArray(a)) return l6(a)
				})(a) ||
				(function (a) {
					if (("u" > typeof Symbol && null != a[Symbol.iterator]) || null != a["@@iterator"])
						return Array.from(a)
				})(a) ||
				l5(a) ||
				(function () {
					throw TypeError(
						"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					)
				})()
			)
		}
		function l5(a, b) {
			if (a) {
				if ("string" == typeof a) return l6(a, b)
				var c = Object.prototype.toString.call(a).slice(8, -1)
				if (("Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c))
					return Array.from(a)
				if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return l6(a, b)
			}
		}
		function l6(a, b) {
			;(null == b || b > a.length) && (b = a.length)
			for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]
			return d
		}
		function l7(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function l8(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? l7(Object(c), !0).forEach(function (b) {
							l9(a, b, c[b])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: l7(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		function l9(a, b, c) {
			return (
				(b = ma(b)) in a
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		function ma(a) {
			var b = (function (a, b) {
				if ("object" != lZ(a) || !a) return a
				var c = a[Symbol.toPrimitive]
				if (void 0 !== c) {
					var d = c.call(a, b || "default")
					if ("object" != lZ(d)) return d
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === b ? String : Number)(a)
			})(a, "string")
			return "symbol" == lZ(b) ? b : b + ""
		}
		var mb = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
			mc = { width: "100%", height: "100%" },
			md = { x: 0, y: 0 }
		function me(a) {
			return a
		}
		var mf = function (a, b, c, d) {
				var e = b.find(function (a) {
					return a && a.index === c
				})
				if (e) {
					if ("horizontal" === a) return { x: e.coordinate, y: d.y }
					if ("vertical" === a) return { x: d.x, y: e.coordinate }
					if ("centric" === a) {
						var f = e.coordinate,
							g = d.radius
						return l8(l8(l8({}, d), iQ(d.cx, d.cy, g, f)), {}, { angle: f, radius: g })
					}
					var h = e.coordinate,
						i = d.angle
					return l8(l8(l8({}, d), iQ(d.cx, d.cy, h, i)), {}, { angle: i, radius: h })
				}
				return md
			},
			mg = function (a, b) {
				var c = b.graphicalItems,
					d = b.dataStartIndex,
					e = b.dataEndIndex,
					f = (null != c ? c : []).reduce(function (a, b) {
						var c = b.props.data
						return c && c.length ? [].concat(l4(a), l4(c)) : a
					}, [])
				return f.length > 0
					? f
					: a && a.length && (0, cd.isNumber)(d) && (0, cd.isNumber)(e)
						? a.slice(d, e + 1)
						: []
			}
		function mh(a) {
			return "number" === a ? [0, "auto"] : void 0
		}
		var mi = function (a, b, c, d) {
				var e = a.graphicalItems,
					f = a.tooltipAxis,
					g = mg(b, a)
				return c < 0 || !e || !e.length || c >= g.length
					? null
					: e.reduce(function (e, h) {
							var i,
								j,
								k = null != (i = h.props.data) ? i : b
							if (
								(k &&
									a.dataStartIndex + a.dataEndIndex !== 0 &&
									a.dataEndIndex - a.dataStartIndex >= c &&
									(k = k.slice(a.dataStartIndex, a.dataEndIndex + 1)),
								f.dataKey && !f.allowDuplicatedCategory)
							) {
								var l = void 0 === k ? g : k
								j = (0, cd.findEntryInArray)(l, f.dataKey, d)
							} else j = (k && k[c]) || g[c]
							return j ? [].concat(l4(e), [ir(h, j)]) : e
						}, [])
			},
			mj = function (a, b, c, d) {
				var e = d || { x: a.chartX, y: a.chartY },
					f = "horizontal" === c ? e.x : "vertical" === c ? e.y : "centric" === c ? e.angle : e.radius,
					g = a.orderedTooltipTicks,
					h = a.tooltipAxis,
					i = a.tooltipTicks,
					j = hX(f, g, i, h)
				if (j >= 0 && i) {
					var k = i[j] && i[j].value,
						l = mi(a, b, j, k),
						m = mf(c, g, j, e)
					return { activeTooltipIndex: j, activeLabel: k, activePayload: l, activeCoordinate: m }
				}
				return null
			},
			mk = function (a, b) {
				var c = b.axes,
					d = b.graphicalItems,
					e = b.axisType,
					f = b.axisIdKey,
					g = b.stackGroups,
					h = b.dataStartIndex,
					i = b.dataEndIndex,
					j = a.layout,
					k = a.children,
					l = a.stackOffset,
					m = h3(j, e)
				return c.reduce(function (b, c) {
					var n = void 0 !== c.type.defaultProps ? l8(l8({}, c.type.defaultProps), c.props) : c.props,
						o = n.type,
						p = n.dataKey,
						q = n.allowDataOverflow,
						r = n.allowDuplicatedCategory,
						s = n.scale,
						t = n.ticks,
						u = n.includeHidden,
						v = n[f]
					if (b[v]) return b
					var w = mg(a.data, {
							graphicalItems: d.filter(function (a) {
								var b
								return (
									(f in a.props ? a.props[f] : null == (b = a.type.defaultProps) ? void 0 : b[f]) ===
									v
								)
							}),
							dataStartIndex: h,
							dataEndIndex: i,
						}),
						x = w.length
					;(function (a, b, c) {
						if ("number" === c && !0 === b && Array.isArray(a)) {
							var d = null == a ? void 0 : a[0],
								e = null == a ? void 0 : a[1]
							if (d && e && (0, cd.isNumber)(d) && (0, cd.isNumber)(e)) return !0
						}
						return !1
					})(n.domain, q, o) &&
						((A = io(n.domain, null, q)),
						m && ("number" === o || "auto" !== s) && (C = hW(w, p, "category")))
					var y = mh(o)
					if (!A || 0 === A.length) {
						var z,
							A,
							B,
							C,
							D,
							E = null != (D = n.domain) ? D : y
						if (p) {
							if (((A = hW(w, p, o)), "category" === o && m)) {
								var F = (0, cd.hasDuplicate)(A)
								r && F
									? ((B = A), (A = (0, W.default)(0, x)))
									: r ||
										(A = iq(E, A, c).reduce(function (a, b) {
											return a.indexOf(b) >= 0 ? a : [].concat(l4(a), [b])
										}, []))
							} else if ("category" === o)
								A = r
									? A.filter(function (a) {
											return "" !== a && !(0, U.default)(a)
										})
									: iq(E, A, c).reduce(function (a, b) {
											return a.indexOf(b) >= 0 || "" === b || (0, U.default)(b)
												? a
												: [].concat(l4(a), [b])
										}, [])
							else if ("number" === o) {
								var G = h1(
									w,
									d.filter(function (a) {
										var b,
											c,
											d =
												f in a.props
													? a.props[f]
													: null == (b = a.type.defaultProps)
														? void 0
														: b[f],
											e =
												"hide" in a.props
													? a.props.hide
													: null == (c = a.type.defaultProps)
														? void 0
														: c.hide
										return d === v && (u || !e)
									}),
									p,
									e,
									j,
								)
								G && (A = G)
							}
							m && ("number" === o || "auto" !== s) && (C = hW(w, p, "category"))
						} else
							A = m
								? (0, W.default)(0, x)
								: g && g[v] && g[v].hasStack && "number" === o
									? "expand" === l
										? [0, 1]
										: ik(g[v].stackGroups, h, i)
									: h2(
											w,
											d.filter(function (a) {
												var b = f in a.props ? a.props[f] : a.type.defaultProps[f],
													c = "hide" in a.props ? a.props.hide : a.type.defaultProps.hide
												return b === v && (u || !c)
											}),
											o,
											j,
											!0,
										)
						"number" === o
							? ((A = k7(k, A, v, e, t)), E && (A = io(E, A, q)))
							: "category" === o &&
								E &&
								A.every(function (a) {
									return E.indexOf(a) >= 0
								}) &&
								(A = E)
					}
					return l8(
						l8({}, b),
						{},
						l9(
							{},
							v,
							l8(
								l8({}, n),
								{},
								{
									axisType: e,
									domain: A,
									categoricalDomain: C,
									duplicateDomain: B,
									originalDomain: null != (z = n.domain) ? z : y,
									isCategorical: m,
									layout: j,
								},
							),
						),
					)
				}, {})
			},
			ml = function (a, b) {
				var c = b.graphicalItems,
					d = b.Axis,
					e = b.axisType,
					f = b.axisIdKey,
					g = b.stackGroups,
					h = b.dataStartIndex,
					i = b.dataEndIndex,
					j = a.layout,
					k = a.children,
					l = mg(a.data, { graphicalItems: c, dataStartIndex: h, dataEndIndex: i }),
					m = l.length,
					n = h3(j, e),
					o = -1
				return c.reduce(function (a, b) {
					var p,
						q = (void 0 !== b.type.defaultProps ? l8(l8({}, b.type.defaultProps), b.props) : b.props)[f],
						r = mh("number")
					return a[q]
						? a
						: (o++,
							(p = n
								? (0, W.default)(0, m)
								: g && g[q] && g[q].hasStack
									? k7(k, (p = ik(g[q].stackGroups, h, i)), q, e)
									: k7(
											k,
											(p = io(
												r,
												h2(
													l,
													c.filter(function (a) {
														var b,
															c,
															d =
																f in a.props
																	? a.props[f]
																	: null == (b = a.type.defaultProps)
																		? void 0
																		: b[f],
															e =
																"hide" in a.props
																	? a.props.hide
																	: null == (c = a.type.defaultProps)
																		? void 0
																		: c.hide
														return d === q && !e
													}),
													"number",
													j,
												),
												d.defaultProps.allowDataOverflow,
											)),
											q,
											e,
										)),
							l8(
								l8({}, a),
								{},
								l9(
									{},
									q,
									l8(
										l8({ axisType: e }, d.defaultProps),
										{},
										{
											hide: !0,
											orientation: (0, X.default)(mb, "".concat(e, ".").concat(o % 2), null),
											domain: p,
											originalDomain: r,
											isCategorical: n,
											layout: j,
										},
									),
								),
							))
				}, {})
			},
			mm = function (a, b) {
				var c = b.axisType,
					d = void 0 === c ? "xAxis" : c,
					e = b.AxisComp,
					f = b.graphicalItems,
					g = b.stackGroups,
					h = b.dataStartIndex,
					i = b.dataEndIndex,
					j = a.children,
					k = "".concat(d, "Id"),
					l = (0, ab.findAllByType)(j, e),
					m = {}
				return (
					l && l.length
						? (m = mk(a, {
								axes: l,
								graphicalItems: f,
								axisType: d,
								axisIdKey: k,
								stackGroups: g,
								dataStartIndex: h,
								dataEndIndex: i,
							}))
						: f &&
							f.length &&
							(m = ml(a, {
								Axis: e,
								graphicalItems: f,
								axisType: d,
								axisIdKey: k,
								stackGroups: g,
								dataStartIndex: h,
								dataEndIndex: i,
							})),
					m
				)
			},
			mn = function (a) {
				var b = (0, cd.getAnyElementOfObject)(a),
					c = h4(b, !1, !0)
				return {
					tooltipTicks: c,
					orderedTooltipTicks: (0, Y.default)(c, function (a) {
						return a.coordinate
					}),
					tooltipAxis: b,
					tooltipAxisBandSize: ip(b, c),
				}
			},
			mo = function (a) {
				var b = a.children,
					c = a.defaultShowTooltip,
					d = (0, ab.findChildByType)(b, iK),
					e = 0,
					f = 0
				return (
					a.data && 0 !== a.data.length && (f = a.data.length - 1),
					d &&
						d.props &&
						(d.props.startIndex >= 0 && (e = d.props.startIndex),
						d.props.endIndex >= 0 && (f = d.props.endIndex)),
					{
						chartX: 0,
						chartY: 0,
						dataStartIndex: e,
						dataEndIndex: f,
						activeTooltipIndex: -1,
						isTooltipActive: !!c,
					}
				)
			},
			mp = function (a) {
				return "horizontal" === a
					? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
					: "vertical" === a
						? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
						: "centric" === a
							? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
							: { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" }
			},
			mq = function (a, b) {
				var c = a.props,
					d = a.graphicalItems,
					e = a.xAxisMap,
					f = void 0 === e ? {} : e,
					g = a.yAxisMap,
					h = void 0 === g ? {} : g,
					i = c.width,
					j = c.height,
					k = c.children,
					l = c.margin || {},
					m = (0, ab.findChildByType)(k, iK),
					n = (0, ab.findChildByType)(k, ag.Legend),
					o = Object.keys(h).reduce(
						function (a, b) {
							var c = h[b],
								d = c.orientation
							return c.mirror || c.hide ? a : l8(l8({}, a), {}, l9({}, d, a[d] + c.width))
						},
						{ left: l.left || 0, right: l.right || 0 },
					),
					p = Object.keys(f).reduce(
						function (a, b) {
							var c = f[b],
								d = c.orientation
							return c.mirror || c.hide
								? a
								: l8(l8({}, a), {}, l9({}, d, (0, X.default)(a, "".concat(d)) + c.height))
						},
						{ top: l.top || 0, bottom: l.bottom || 0 },
					),
					q = l8(l8({}, p), o),
					r = q.bottom
				m && (q.bottom += m.props.height || iK.defaultProps.height), n && b && (q = h_(q, d, c, b))
				var s = i - q.left - q.right,
					t = j - q.top - q.bottom
				return l8(l8({ brushBottom: r }, q), {}, { width: Math.max(s, 0), height: Math.max(t, 0) })
			}
		function mr(a) {
			return (mr =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function ms() {
			try {
				var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (a) {}
			return (ms = function () {
				return !!a
			})()
		}
		function mt(a) {
			return (mt = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (a) {
						return a.__proto__ || Object.getPrototypeOf(a)
					})(a)
		}
		function mu(a, b) {
			return (mu = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (a, b) {
						return (a.__proto__ = b), a
					})(a, b)
		}
		function mv(a, b, c) {
			return (
				(b = mw(b)) in a
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		function mw(a) {
			var b = (function (a, b) {
				if ("object" != mr(a) || !a) return a
				var c = a[Symbol.toPrimitive]
				if (void 0 !== c) {
					var d = c.call(a, b || "default")
					if ("object" != mr(d)) return d
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === b ? String : Number)(a)
			})(a, "string")
			return "symbol" == mr(b) ? b : b + ""
		}
		var mx = (function (a) {
			var b
			function c() {
				var a, b
				if (!(this instanceof c)) throw TypeError("Cannot call a class as a function")
				return (
					(a = c),
					(b = arguments),
					(a = mt(a)),
					(function (a, b) {
						if (b && ("object" === mr(b) || "function" == typeof b)) return b
						if (void 0 !== b) throw TypeError("Derived constructors may only return object or undefined")
						var c = a
						if (void 0 === c)
							throw ReferenceError("this hasn't been initialised - super() hasn't been called")
						return c
					})(this, ms() ? Reflect.construct(a, b || [], mt(this).constructor) : a.apply(this, b))
				)
			}
			if ("function" != typeof a && null !== a)
				throw TypeError("Super expression must either be null or a function")
			return (
				(c.prototype = Object.create(a && a.prototype, {
					constructor: { value: c, writable: !0, configurable: !0 },
				})),
				Object.defineProperty(c, "prototype", { writable: !1 }),
				a && mu(c, a),
				(b = [
					{
						key: "render",
						value: function () {
							return null
						},
					},
				]),
				(function (a, b) {
					for (var c = 0; c < b.length; c++) {
						var d = b[c]
						;(d.enumerable = d.enumerable || !1),
							(d.configurable = !0),
							"value" in d && (d.writable = !0),
							Object.defineProperty(a, mw(d.key), d)
					}
				})(c.prototype, b),
				Object.defineProperty(c, "prototype", { writable: !1 }),
				c
			)
		})(u.Component)
		mv(mx, "displayName", "ZAxis"),
			mv(mx, "defaultProps", { zAxisId: 0, range: [64, 64], scale: "auto", type: "number" })
		var my = ["option", "isActive"]
		function mz() {
			return (mz = Object.assign.bind()).apply(this, arguments)
		}
		function mA(a) {
			var b = a.option,
				c = a.isActive,
				d = (function (a, b) {
					if (null == a) return {}
					var c,
						d,
						e = (function (a, b) {
							if (null == a) return {}
							var c = {}
							for (var d in a)
								if (Object.prototype.hasOwnProperty.call(a, d)) {
									if (b.indexOf(d) >= 0) continue
									c[d] = a[d]
								}
							return c
						})(a, b)
					if (Object.getOwnPropertySymbols) {
						var f = Object.getOwnPropertySymbols(a)
						for (d = 0; d < f.length; d++)
							(c = f[d]),
								!(b.indexOf(c) >= 0) &&
									Object.prototype.propertyIsEnumerable.call(a, c) &&
									(e[c] = a[c])
					}
					return e
				})(a, my)
			return "string" == typeof b
				? u.createElement(
						jJ,
						mz(
							{
								option: u.createElement(jD.Symbols, mz({ type: b }, d)),
								isActive: c,
								shapeType: "symbols",
							},
							d,
						),
					)
				: u.createElement(jJ, mz({ option: b, isActive: c, shapeType: "symbols" }, d))
		}
		function mB(a) {
			return (mB =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function mC() {
			return (mC = Object.assign.bind()).apply(this, arguments)
		}
		function mD(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function mE(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? mD(Object(c), !0).forEach(function (b) {
							mJ(a, b, c[b])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: mD(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		function mF(a, b) {
			for (var c = 0; c < b.length; c++) {
				var d = b[c]
				;(d.enumerable = d.enumerable || !1),
					(d.configurable = !0),
					"value" in d && (d.writable = !0),
					Object.defineProperty(a, mK(d.key), d)
			}
		}
		function mG() {
			try {
				var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (a) {}
			return (mG = function () {
				return !!a
			})()
		}
		function mH(a) {
			return (mH = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (a) {
						return a.__proto__ || Object.getPrototypeOf(a)
					})(a)
		}
		function mI(a, b) {
			return (mI = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (a, b) {
						return (a.__proto__ = b), a
					})(a, b)
		}
		function mJ(a, b, c) {
			return (
				(b = mK(b)) in a
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		function mK(a) {
			var b = (function (a, b) {
				if ("object" != mB(a) || !a) return a
				var c = a[Symbol.toPrimitive]
				if (void 0 !== c) {
					var d = c.call(a, b || "default")
					if ("object" != mB(d)) return d
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === b ? String : Number)(a)
			})(a, "string")
			return "symbol" == mB(b) ? b : b + ""
		}
		var mL = (function (a) {
			var b, c
			function d() {
				var a, b, c
				if (!(this instanceof d)) throw TypeError("Cannot call a class as a function")
				for (var e = arguments.length, f = Array(e), g = 0; g < e; g++) f[g] = arguments[g]
				return (
					(b = d),
					(c = [].concat(f)),
					(b = mH(b)),
					mJ(
						(a = (function (a, b) {
							if (b && ("object" === mB(b) || "function" == typeof b)) return b
							if (void 0 !== b)
								throw TypeError("Derived constructors may only return object or undefined")
							var c = a
							if (void 0 === c)
								throw ReferenceError("this hasn't been initialised - super() hasn't been called")
							return c
						})(this, mG() ? Reflect.construct(b, c || [], mH(this).constructor) : b.apply(this, c))),
						"state",
						{ isAnimationFinished: !1 },
					),
					mJ(a, "handleAnimationEnd", function () {
						a.setState({ isAnimationFinished: !0 })
					}),
					mJ(a, "handleAnimationStart", function () {
						a.setState({ isAnimationFinished: !1 })
					}),
					mJ(a, "id", (0, cd.uniqueId)("recharts-scatter-")),
					a
				)
			}
			if ("function" != typeof a && null !== a)
				throw TypeError("Super expression must either be null or a function")
			return (
				(d.prototype = Object.create(a && a.prototype, {
					constructor: { value: d, writable: !0, configurable: !0 },
				})),
				Object.defineProperty(d, "prototype", { writable: !1 }),
				a && mI(d, a),
				(b = [
					{
						key: "renderSymbolsStatically",
						value: function (a) {
							var b = this,
								c = this.props,
								d = c.shape,
								e = c.activeShape,
								f = c.activeIndex,
								g = (0, ab.filterProps)(this.props, !1)
							return a.map(function (a, c) {
								var h = f === c,
									i = mE(mE({}, g), a)
								return u.default.createElement(
									ae,
									mC(
										{
											className: "recharts-scatter-symbol",
											key: "symbol-"
												.concat(null == a ? void 0 : a.cx, "-")
												.concat(null == a ? void 0 : a.cy, "-")
												.concat(null == a ? void 0 : a.size, "-")
												.concat(c),
										},
										(0, ah.adaptEventsOfChild)(b.props, a, c),
										{ role: "img" },
									),
									u.default.createElement(
										mA,
										mC({ option: h ? e : d, isActive: h, key: "symbol-".concat(c) }, i),
									),
								)
							})
						},
					},
					{
						key: "renderSymbolsWithAnimation",
						value: function () {
							var a = this,
								b = this.props,
								c = b.points,
								d = b.isAnimationActive,
								e = b.animationBegin,
								f = b.animationDuration,
								g = b.animationEasing,
								h = b.animationId,
								i = this.state.prevPoints
							return u.default.createElement(
								bs,
								{
									begin: e,
									duration: f,
									isActive: d,
									easing: g,
									from: { t: 0 },
									to: { t: 1 },
									key: "pie-".concat(h),
									onAnimationEnd: this.handleAnimationEnd,
									onAnimationStart: this.handleAnimationStart,
								},
								function (b) {
									var d = b.t,
										e = c.map(function (a, b) {
											var c = i && i[b]
											if (c) {
												var e = (0, cd.interpolateNumber)(c.cx, a.cx),
													f = (0, cd.interpolateNumber)(c.cy, a.cy),
													g = (0, cd.interpolateNumber)(c.size, a.size)
												return mE(mE({}, a), {}, { cx: e(d), cy: f(d), size: g(d) })
											}
											var h = (0, cd.interpolateNumber)(0, a.size)
											return mE(mE({}, a), {}, { size: h(d) })
										})
									return u.default.createElement(ae, null, a.renderSymbolsStatically(e))
								},
							)
						},
					},
					{
						key: "renderSymbols",
						value: function () {
							var a = this.props,
								b = a.points,
								c = a.isAnimationActive,
								d = this.state.prevPoints
							return c && b && b.length && (!d || !(0, gR.default)(d, b))
								? this.renderSymbolsWithAnimation()
								: this.renderSymbolsStatically(b)
						},
					},
					{
						key: "renderErrorBar",
						value: function () {
							if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null
							var a = this.props,
								b = a.points,
								c = a.xAxis,
								d = a.yAxis,
								e = a.children,
								f = (0, ab.findAllByType)(e, hK)
							return f
								? f.map(function (a, e) {
										var f = a.props,
											g = f.direction,
											h = f.dataKey
										return u.default.cloneElement(a, {
											key: "".concat(g, "-").concat(h, "-").concat(b[e]),
											data: b,
											xAxis: c,
											yAxis: d,
											layout: "x" === g ? "vertical" : "horizontal",
											dataPointFormatter: function (a, b) {
												return {
													x: a.cx,
													y: a.cy,
													value: "x" === g ? +a.node.x : +a.node.y,
													errorVal: hV(a, b),
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
							var a,
								b,
								c = this.props,
								d = c.points,
								e = c.line,
								f = c.lineType,
								g = c.lineJointType,
								h = (0, ab.filterProps)(this.props, !1),
								i = (0, ab.filterProps)(e, !1)
							if ("joint" === f)
								a = d.map(function (a) {
									return { x: a.cx, y: a.cy }
								})
							else if ("fitting" === f) {
								var j = (0, cd.getLinearRegression)(d),
									k = j.xmin,
									l = j.xmax,
									m = j.a,
									n = j.b,
									o = function (a) {
										return m * a + n
									}
								a = [
									{ x: k, y: o(k) },
									{ x: l, y: o(l) },
								]
							}
							var p = mE(mE(mE({}, h), {}, { fill: "none", stroke: h && h.fill }, i), {}, { points: a })
							return (
								(b = u.default.isValidElement(e)
									? u.default.cloneElement(e, p)
									: (0, V.default)(e)
										? e(p)
										: u.default.createElement(lM, mC({}, p, { type: g }))),
								u.default.createElement(
									ae,
									{ className: "recharts-scatter-line", key: "recharts-scatter-line" },
									b,
								)
							)
						},
					},
					{
						key: "render",
						value: function () {
							var a = this.props,
								b = a.hide,
								c = a.points,
								d = a.line,
								e = a.className,
								f = a.xAxis,
								g = a.yAxis,
								h = a.left,
								i = a.top,
								j = a.width,
								k = a.height,
								l = a.id,
								m = a.isAnimationActive
							if (b || !c || !c.length) return null
							var n = this.state.isAnimationFinished,
								o = (0, $.default)("recharts-scatter", e),
								p = f && f.allowDataOverflow,
								q = g && g.allowDataOverflow,
								r = (0, U.default)(l) ? this.id : l
							return u.default.createElement(
								ae,
								{ className: o, clipPath: p || q ? "url(#clipPath-".concat(r, ")") : null },
								p || q
									? u.default.createElement(
											"defs",
											null,
											u.default.createElement(
												"clipPath",
												{ id: "clipPath-".concat(r) },
												u.default.createElement("rect", {
													x: p ? h : h - j / 2,
													y: q ? i : i - k / 2,
													width: p ? j : 2 * j,
													height: q ? k : 2 * k,
												}),
											),
										)
									: null,
								d && this.renderLine(),
								this.renderErrorBar(),
								u.default.createElement(ae, { key: "recharts-scatter-symbols" }, this.renderSymbols()),
								(!m || n) && jj.renderCallByParent(this.props, c),
							)
						},
					},
				]),
				(c = [
					{
						key: "getDerivedStateFromProps",
						value: function (a, b) {
							return a.animationId !== b.prevAnimationId
								? { prevAnimationId: a.animationId, curPoints: a.points, prevPoints: b.curPoints }
								: a.points !== b.curPoints
									? { curPoints: a.points }
									: null
						},
					},
				]),
				b && mF(d.prototype, b),
				c && mF(d, c),
				Object.defineProperty(d, "prototype", { writable: !1 }),
				d
			)
		})(u.PureComponent)
		function mM(a, b, c) {
			if (b < 1) return []
			if (1 === b && void 0 === c) return a
			for (var d = [], e = 0; e < a.length; e += b)
				if (void 0 !== c && !0 !== c(a[e])) return
				else d.push(a[e])
			return d
		}
		function mN(a, b, c, d, e) {
			if (a * b < a * d || a * b > a * e) return !1
			var f = c()
			return a * (b - (a * f) / 2 - d) >= 0 && a * (b + (a * f) / 2 - e) <= 0
		}
		function mO(a) {
			return (mO =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function mP(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function mQ(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? mP(Object(c), !0).forEach(function (b) {
							var d, e, f
							;(d = a),
								(e = b),
								(f = c[b]),
								(e = (function (a) {
									var b = (function (a, b) {
										if ("object" != mO(a) || !a) return a
										var c = a[Symbol.toPrimitive]
										if (void 0 !== c) {
											var d = c.call(a, b || "default")
											if ("object" != mO(d)) return d
											throw TypeError("@@toPrimitive must return a primitive value.")
										}
										return ("string" === b ? String : Number)(a)
									})(a, "string")
									return "symbol" == mO(b) ? b : b + ""
								})(e)) in d
									? Object.defineProperty(d, e, {
											value: f,
											enumerable: !0,
											configurable: !0,
											writable: !0,
										})
									: (d[e] = f)
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: mP(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		mJ(mL, "displayName", "Scatter"),
			mJ(mL, "defaultProps", {
				xAxisId: 0,
				yAxisId: 0,
				zAxisId: 0,
				legendType: "circle",
				lineType: "joint",
				lineJointType: "linear",
				data: [],
				shape: "circle",
				hide: !1,
				isAnimationActive: !ce.Global.isSsr,
				animationBegin: 0,
				animationDuration: 400,
				animationEasing: "linear",
			}),
			mJ(mL, "getComposedData", function (a) {
				var b = a.xAxis,
					c = a.yAxis,
					d = a.zAxis,
					e = a.item,
					f = a.displayedData,
					g = a.xAxisTicks,
					h = a.yAxisTicks,
					i = a.offset,
					j = e.props.tooltipType,
					k = (0, ab.findAllByType)(e.props.children, i8),
					l = (0, U.default)(b.dataKey) ? e.props.dataKey : b.dataKey,
					m = (0, U.default)(c.dataKey) ? e.props.dataKey : c.dataKey,
					n = d && d.dataKey,
					o = d ? d.range : mx.defaultProps.range,
					p = o && o[0],
					q = b.scale.bandwidth ? b.scale.bandwidth() : 0,
					r = c.scale.bandwidth ? c.scale.bandwidth() : 0,
					s = f.map(function (a, f) {
						var i = hV(a, l),
							o = hV(a, m),
							s = (!(0, U.default)(n) && hV(a, n)) || "-",
							t = [
								{
									name: (0, U.default)(b.dataKey) ? e.props.name : b.name || b.dataKey,
									unit: b.unit || "",
									value: i,
									payload: a,
									dataKey: l,
									type: j,
								},
								{
									name: (0, U.default)(c.dataKey) ? e.props.name : c.name || c.dataKey,
									unit: c.unit || "",
									value: o,
									payload: a,
									dataKey: m,
									type: j,
								},
							]
						"-" !== s &&
							t.push({
								name: d.name || d.dataKey,
								unit: d.unit || "",
								value: s,
								payload: a,
								dataKey: n,
								type: j,
							})
						var u = ig({ axis: b, ticks: g, bandSize: q, entry: a, index: f, dataKey: l }),
							v = ig({ axis: c, ticks: h, bandSize: r, entry: a, index: f, dataKey: m }),
							w = "-" !== s ? d.scale(s) : p,
							x = Math.sqrt(Math.max(w, 0) / Math.PI)
						return mE(
							mE({}, a),
							{},
							{
								cx: u,
								cy: v,
								x: u - x,
								y: v - x,
								xAxis: b,
								yAxis: c,
								zAxis: d,
								width: 2 * x,
								height: 2 * x,
								size: w,
								node: { x: i, y: o, z: s },
								tooltipPayload: t,
								tooltipPosition: { x: u, y: v },
								payload: a,
							},
							k && k[f] && k[f].props,
						)
					})
				return mE({ points: s }, i)
			})
		var mR = ["viewBox"],
			mS = ["viewBox"],
			mT = ["ticks"]
		function mU(a) {
			return (mU =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function mV() {
			return (mV = Object.assign.bind()).apply(this, arguments)
		}
		function mW(a, b) {
			var c = Object.keys(a)
			if (Object.getOwnPropertySymbols) {
				var d = Object.getOwnPropertySymbols(a)
				b &&
					(d = d.filter(function (b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})),
					c.push.apply(c, d)
			}
			return c
		}
		function mX(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = null != arguments[b] ? arguments[b] : {}
				b % 2
					? mW(Object(c), !0).forEach(function (b) {
							m1(a, b, c[b])
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
						: mW(Object(c)).forEach(function (b) {
								Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
							})
			}
			return a
		}
		function mY(a, b) {
			if (null == a) return {}
			var c,
				d,
				e = (function (a, b) {
					if (null == a) return {}
					var c = {}
					for (var d in a)
						if (Object.prototype.hasOwnProperty.call(a, d)) {
							if (b.indexOf(d) >= 0) continue
							c[d] = a[d]
						}
					return c
				})(a, b)
			if (Object.getOwnPropertySymbols) {
				var f = Object.getOwnPropertySymbols(a)
				for (d = 0; d < f.length; d++)
					(c = f[d]),
						!(b.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(a, c) && (e[c] = a[c])
			}
			return e
		}
		function mZ(a, b) {
			for (var c = 0; c < b.length; c++) {
				var d = b[c]
				;(d.enumerable = d.enumerable || !1),
					(d.configurable = !0),
					"value" in d && (d.writable = !0),
					Object.defineProperty(a, m2(d.key), d)
			}
		}
		function m$() {
			try {
				var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (a) {}
			return (m$ = function () {
				return !!a
			})()
		}
		function m_(a) {
			return (m_ = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (a) {
						return a.__proto__ || Object.getPrototypeOf(a)
					})(a)
		}
		function m0(a, b) {
			return (m0 = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (a, b) {
						return (a.__proto__ = b), a
					})(a, b)
		}
		function m1(a, b, c) {
			return (
				(b = m2(b)) in a
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		function m2(a) {
			var b = (function (a, b) {
				if ("object" != mU(a) || !a) return a
				var c = a[Symbol.toPrimitive]
				if (void 0 !== c) {
					var d = c.call(a, b || "default")
					if ("object" != mU(d)) return d
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === b ? String : Number)(a)
			})(a, "string")
			return "symbol" == mU(b) ? b : b + ""
		}
		var m3 = (function (a) {
			var b, c
			function d(a) {
				var b, c, e
				if (!(this instanceof d)) throw TypeError("Cannot call a class as a function")
				return (
					(c = d),
					(e = [a]),
					(c = m_(c)),
					((b = (function (a, b) {
						if (b && ("object" === mU(b) || "function" == typeof b)) return b
						if (void 0 !== b) throw TypeError("Derived constructors may only return object or undefined")
						var c = a
						if (void 0 === c)
							throw ReferenceError("this hasn't been initialised - super() hasn't been called")
						return c
					})(this, m$() ? Reflect.construct(c, e || [], m_(this).constructor) : c.apply(this, e))).state = {
						fontSize: "",
						letterSpacing: "",
					}),
					b
				)
			}
			if ("function" != typeof a && null !== a)
				throw TypeError("Super expression must either be null or a function")
			return (
				(d.prototype = Object.create(a && a.prototype, {
					constructor: { value: d, writable: !0, configurable: !0 },
				})),
				Object.defineProperty(d, "prototype", { writable: !1 }),
				a && m0(d, a),
				(b = [
					{
						key: "shouldComponentUpdate",
						value: function (a, b) {
							var c = a.viewBox,
								d = mY(a, mR),
								e = this.props,
								f = e.viewBox,
								g = mY(e, mS)
							return (
								!(0, k8.shallowEqual)(c, f) ||
								!(0, k8.shallowEqual)(d, g) ||
								!(0, k8.shallowEqual)(b, this.state)
							)
						},
					},
					{
						key: "componentDidMount",
						value: function () {
							var a = this.layerReference
							if (a) {
								var b = a.getElementsByClassName("recharts-cartesian-axis-tick-value")[0]
								b &&
									this.setState({
										fontSize: window.getComputedStyle(b).fontSize,
										letterSpacing: window.getComputedStyle(b).letterSpacing,
									})
							}
						},
					},
					{
						key: "getTickLineCoord",
						value: function (a) {
							var b,
								c,
								d,
								e,
								f,
								g,
								h = this.props,
								i = h.x,
								j = h.y,
								k = h.width,
								l = h.height,
								m = h.orientation,
								n = h.tickSize,
								o = h.mirror,
								p = h.tickMargin,
								q = o ? -1 : 1,
								r = a.tickSize || n,
								s = (0, cd.isNumber)(a.tickCoord) ? a.tickCoord : a.coordinate
							switch (m) {
								case "top":
									;(b = c = a.coordinate), (g = (d = (e = j + !o * l) - q * r) - q * p), (f = s)
									break
								case "left":
									;(d = e = a.coordinate), (f = (b = (c = i + !o * k) - q * r) - q * p), (g = s)
									break
								case "right":
									;(d = e = a.coordinate), (f = (b = (c = i + o * k) + q * r) + q * p), (g = s)
									break
								default:
									;(b = c = a.coordinate), (g = (d = (e = j + o * l) + q * r) + q * p), (f = s)
							}
							return { line: { x1: b, y1: d, x2: c, y2: e }, tick: { x: f, y: g } }
						},
					},
					{
						key: "getTickTextAnchor",
						value: function () {
							var a,
								b = this.props,
								c = b.orientation,
								d = b.mirror
							switch (c) {
								case "left":
									a = d ? "start" : "end"
									break
								case "right":
									a = d ? "end" : "start"
									break
								default:
									a = "middle"
							}
							return a
						},
					},
					{
						key: "getTickVerticalAnchor",
						value: function () {
							var a = this.props,
								b = a.orientation,
								c = a.mirror,
								d = "end"
							switch (b) {
								case "left":
								case "right":
									d = "middle"
									break
								case "top":
									d = c ? "start" : "end"
									break
								default:
									d = c ? "end" : "start"
							}
							return d
						},
					},
					{
						key: "renderAxisLine",
						value: function () {
							var a = this.props,
								b = a.x,
								c = a.y,
								d = a.width,
								e = a.height,
								f = a.orientation,
								g = a.mirror,
								h = a.axisLine,
								i = mX(
									mX(mX({}, (0, ab.filterProps)(this.props, !1)), (0, ab.filterProps)(h, !1)),
									{},
									{ fill: "none" },
								)
							if ("top" === f || "bottom" === f) {
								var j = +(("top" === f && !g) || ("bottom" === f && g))
								i = mX(mX({}, i), {}, { x1: b, y1: c + j * e, x2: b + d, y2: c + j * e })
							} else {
								var k = +(("left" === f && !g) || ("right" === f && g))
								i = mX(mX({}, i), {}, { x1: b + k * d, y1: c, x2: b + k * d, y2: c + e })
							}
							return u.default.createElement(
								"line",
								mV({}, i, {
									className: (0, $.default)(
										"recharts-cartesian-axis-line",
										(0, X.default)(h, "className"),
									),
								}),
							)
						},
					},
					{
						key: "renderTicks",
						value: function (a, b, c) {
							var e = this,
								f = this.props,
								g = f.tickLine,
								h = f.stroke,
								i = f.tick,
								j = f.tickFormatter,
								k = f.unit,
								l = (function (a, b, c) {
									var d,
										e,
										f,
										g,
										h,
										i = a.tick,
										j = a.ticks,
										k = a.viewBox,
										l = a.minTickGap,
										m = a.orientation,
										n = a.interval,
										o = a.tickFormatter,
										p = a.unit,
										q = a.angle
									if (!j || !j.length || !i) return []
									if ((0, cd.isNumber)(n) || ce.Global.isSsr)
										return mM(j, ("number" == typeof n && (0, cd.isNumber)(n) ? n : 0) + 1)
									var r = "top" === m || "bottom" === m ? "width" : "height",
										s =
											p && "width" === r
												? cl(p, { fontSize: b, letterSpacing: c })
												: { width: 0, height: 0 },
										t = function (a, d) {
											var e,
												f = (0, V.default)(o) ? o(a.value, d) : a.value
											return "width" === r
												? ((e = cl(f, { fontSize: b, letterSpacing: c })),
													kh({ width: e.width + s.width, height: e.height + s.height }, q))
												: cl(f, { fontSize: b, letterSpacing: c })[r]
										},
										u = j.length >= 2 ? (0, cd.mathSign)(j[1].coordinate - j[0].coordinate) : 1,
										v =
											((d = "width" === r),
											(e = k.x),
											(f = k.y),
											(g = k.width),
											(h = k.height),
											1 === u
												? { start: d ? e : f, end: d ? e + g : f + h }
												: { start: d ? e + g : f + h, end: d ? e : f })
									return "equidistantPreserveStart" === n
										? (function (a, b, c, d, e) {
												for (
													var f,
														g = (d || []).slice(),
														h = b.start,
														i = b.end,
														j = 0,
														k = 1,
														l = h;
													k <= g.length;

												)
													if (
														(f = (function () {
															var b,
																f = null == d ? void 0 : d[j]
															if (void 0 === f) return { v: mM(d, k) }
															var g = j,
																m = function () {
																	return void 0 === b && (b = c(f, g)), b
																},
																n = f.coordinate,
																o = 0 === j || mN(a, n, m, l, i)
															o || ((j = 0), (l = h), (k += 1)),
																o && ((l = n + a * (m() / 2 + e)), (j += k))
														})())
													)
														return f.v
												return []
											})(u, v, t, j, l)
										: ("preserveStart" === n || "preserveStartEnd" === n
												? (function (a, b, c, d, e, f) {
														var g = (d || []).slice(),
															h = g.length,
															i = b.start,
															j = b.end
														if (f) {
															var k = d[h - 1],
																l = c(k, h - 1),
																m = a * (k.coordinate + (a * l) / 2 - j)
															;(g[h - 1] = k =
																mQ(
																	mQ({}, k),
																	{},
																	{
																		tickCoord:
																			m > 0 ? k.coordinate - m * a : k.coordinate,
																	},
																)),
																mN(
																	a,
																	k.tickCoord,
																	function () {
																		return l
																	},
																	i,
																	j,
																) &&
																	((j = k.tickCoord - a * (l / 2 + e)),
																	(g[h - 1] = mQ(mQ({}, k), {}, { isShow: !0 })))
														}
														for (
															var n = f ? h - 1 : h,
																o = function (b) {
																	var d,
																		f = g[b],
																		h = function () {
																			return void 0 === d && (d = c(f, b)), d
																		}
																	if (0 === b) {
																		var k = a * (f.coordinate - (a * h()) / 2 - i)
																		g[b] = f = mQ(
																			mQ({}, f),
																			{},
																			{
																				tickCoord:
																					k < 0
																						? f.coordinate - k * a
																						: f.coordinate,
																			},
																		)
																	} else
																		g[b] = f = mQ(
																			mQ({}, f),
																			{},
																			{ tickCoord: f.coordinate },
																		)
																	mN(a, f.tickCoord, h, i, j) &&
																		((i = f.tickCoord + a * (h() / 2 + e)),
																		(g[b] = mQ(mQ({}, f), {}, { isShow: !0 })))
																},
																p = 0;
															p < n;
															p++
														)
															o(p)
														return g
													})(u, v, t, j, l, "preserveStartEnd" === n)
												: (function (a, b, c, d, e) {
														for (
															var f = (d || []).slice(),
																g = f.length,
																h = b.start,
																i = b.end,
																j = function (b) {
																	var d,
																		j = f[b],
																		k = function () {
																			return void 0 === d && (d = c(j, b)), d
																		}
																	if (b === g - 1) {
																		var l = a * (j.coordinate + (a * k()) / 2 - i)
																		f[b] = j = mQ(
																			mQ({}, j),
																			{},
																			{
																				tickCoord:
																					l > 0
																						? j.coordinate - l * a
																						: j.coordinate,
																			},
																		)
																	} else
																		f[b] = j = mQ(
																			mQ({}, j),
																			{},
																			{ tickCoord: j.coordinate },
																		)
																	mN(a, j.tickCoord, k, h, i) &&
																		((i = j.tickCoord - a * (k() / 2 + e)),
																		(f[b] = mQ(mQ({}, j), {}, { isShow: !0 })))
																},
																k = g - 1;
															k >= 0;
															k--
														)
															j(k)
														return f
													})(u, v, t, j, l)
											).filter(function (a) {
												return a.isShow
											})
								})(mX(mX({}, this.props), {}, { ticks: a }), b, c),
								m = this.getTickTextAnchor(),
								n = this.getTickVerticalAnchor(),
								o = (0, ab.filterProps)(this.props, !1),
								p = (0, ab.filterProps)(i, !1),
								q = mX(mX({}, o), {}, { fill: "none" }, (0, ab.filterProps)(g, !1)),
								r = l.map(function (a, b) {
									var c = e.getTickLineCoord(a),
										f = c.line,
										r = c.tick,
										s = mX(
											mX(
												mX(
													mX({ textAnchor: m, verticalAnchor: n }, o),
													{},
													{ stroke: "none", fill: h },
													p,
												),
												r,
											),
											{},
											{ index: b, payload: a, visibleTicksCount: l.length, tickFormatter: j },
										)
									return u.default.createElement(
										ae,
										mV(
											{
												className: "recharts-cartesian-axis-tick",
												key: "tick-"
													.concat(a.value, "-")
													.concat(a.coordinate, "-")
													.concat(a.tickCoord),
											},
											(0, ah.adaptEventsOfChild)(e.props, a, b),
										),
										g &&
											u.default.createElement(
												"line",
												mV({}, q, f, {
													className: (0, $.default)(
														"recharts-cartesian-axis-tick-line",
														(0, X.default)(g, "className"),
													),
												}),
											),
										i &&
											d.renderTickItem(
												i,
												s,
												"".concat((0, V.default)(j) ? j(a.value, b) : a.value).concat(k || ""),
											),
									)
								})
							return u.default.createElement("g", { className: "recharts-cartesian-axis-ticks" }, r)
						},
					},
					{
						key: "render",
						value: function () {
							var a = this,
								b = this.props,
								c = b.axisLine,
								d = b.width,
								e = b.height,
								f = b.ticksGenerator,
								g = b.className
							if (b.hide) return null
							var h = this.props,
								i = h.ticks,
								j = mY(h, mT),
								k = i
							return ((0, V.default)(f) && (k = f(i && i.length > 0 ? this.props : j)),
							d <= 0 || e <= 0 || !k || !k.length)
								? null
								: u.default.createElement(
										ae,
										{
											className: (0, $.default)("recharts-cartesian-axis", g),
											ref: function (b) {
												a.layerReference = b
											},
										},
										c && this.renderAxisLine(),
										this.renderTicks(k, this.state.fontSize, this.state.letterSpacing),
										i3.renderCallByParent(this.props),
									)
						},
					},
				]),
				(c = [
					{
						key: "renderTickItem",
						value: function (a, b, c) {
							var d = (0, $.default)(b.className, "recharts-cartesian-axis-tick-value")
							return u.default.isValidElement(a)
								? u.default.cloneElement(a, mX(mX({}, b), {}, { className: d }))
								: (0, V.default)(a)
									? a(mX(mX({}, b), {}, { className: d }))
									: u.default.createElement(
											cM,
											mV({}, b, { className: "recharts-cartesian-axis-tick-value" }),
											c,
										)
						},
					},
				]),
				b && mZ(d.prototype, b),
				c && mZ(d, c),
				Object.defineProperty(d, "prototype", { writable: !1 }),
				d
			)
		})(u.Component)
		function m4(a) {
			return (m4 =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		m1(m3, "displayName", "CartesianAxis"),
			m1(m3, "defaultProps", {
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
		function m5() {
			try {
				var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (a) {}
			return (m5 = function () {
				return !!a
			})()
		}
		function m6(a) {
			return (m6 = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (a) {
						return a.__proto__ || Object.getPrototypeOf(a)
					})(a)
		}
		function m7(a, b) {
			return (m7 = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (a, b) {
						return (a.__proto__ = b), a
					})(a, b)
		}
		function m8(a, b, c) {
			return (
				(b = m9(b)) in a
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		function m9(a) {
			var b = (function (a, b) {
				if ("object" != m4(a) || !a) return a
				var c = a[Symbol.toPrimitive]
				if (void 0 !== c) {
					var d = c.call(a, b || "default")
					if ("object" != m4(d)) return d
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === b ? String : Number)(a)
			})(a, "string")
			return "symbol" == m4(b) ? b : b + ""
		}
		function na() {
			return (na = Object.assign.bind()).apply(this, arguments)
		}
		function nb(a) {
			var b = a.xAxisId,
				c = kG(),
				d = kH(),
				e = kE(b)
			return null == e
				? null
				: u.createElement(
						m3,
						na({}, e, {
							className: (0, $.default)(
								"recharts-".concat(e.axisType, " ").concat(e.axisType),
								e.className,
							),
							viewBox: { x: 0, y: 0, width: c, height: d },
							ticksGenerator: function (a) {
								return h4(a, !0)
							},
						}),
					)
		}
		var nc = (function (a) {
			var b
			function c() {
				var a, b
				if (!(this instanceof c)) throw TypeError("Cannot call a class as a function")
				return (
					(a = c),
					(b = arguments),
					(a = m6(a)),
					(function (a, b) {
						if (b && ("object" === m4(b) || "function" == typeof b)) return b
						if (void 0 !== b) throw TypeError("Derived constructors may only return object or undefined")
						var c = a
						if (void 0 === c)
							throw ReferenceError("this hasn't been initialised - super() hasn't been called")
						return c
					})(this, m5() ? Reflect.construct(a, b || [], m6(this).constructor) : a.apply(this, b))
				)
			}
			if ("function" != typeof a && null !== a)
				throw TypeError("Super expression must either be null or a function")
			return (
				(c.prototype = Object.create(a && a.prototype, {
					constructor: { value: c, writable: !0, configurable: !0 },
				})),
				Object.defineProperty(c, "prototype", { writable: !1 }),
				a && m7(c, a),
				(b = [
					{
						key: "render",
						value: function () {
							return u.createElement(nb, this.props)
						},
					},
				]),
				(function (a, b) {
					for (var c = 0; c < b.length; c++) {
						var d = b[c]
						;(d.enumerable = d.enumerable || !1),
							(d.configurable = !0),
							"value" in d && (d.writable = !0),
							Object.defineProperty(a, m9(d.key), d)
					}
				})(c.prototype, b),
				Object.defineProperty(c, "prototype", { writable: !1 }),
				c
			)
		})(u.Component)
		function nd(a) {
			return (nd =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		m8(nc, "displayName", "XAxis"),
			m8(nc, "defaultProps", {
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
		function ne() {
			try {
				var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
			} catch (a) {}
			return (ne = function () {
				return !!a
			})()
		}
		function nf(a) {
			return (nf = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (a) {
						return a.__proto__ || Object.getPrototypeOf(a)
					})(a)
		}
		function ng(a, b) {
			return (ng = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (a, b) {
						return (a.__proto__ = b), a
					})(a, b)
		}
		function nh(a, b, c) {
			return (
				(b = ni(b)) in a
					? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
					: (a[b] = c),
				a
			)
		}
		function ni(a) {
			var b = (function (a, b) {
				if ("object" != nd(a) || !a) return a
				var c = a[Symbol.toPrimitive]
				if (void 0 !== c) {
					var d = c.call(a, b || "default")
					if ("object" != nd(d)) return d
					throw TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === b ? String : Number)(a)
			})(a, "string")
			return "symbol" == nd(b) ? b : b + ""
		}
		function nj() {
			return (nj = Object.assign.bind()).apply(this, arguments)
		}
		var nk = function (a) {
				var b = a.yAxisId,
					c = kG(),
					d = kH(),
					e = kF(b)
				return null == e
					? null
					: u.createElement(
							m3,
							nj({}, e, {
								className: (0, $.default)(
									"recharts-".concat(e.axisType, " ").concat(e.axisType),
									e.className,
								),
								viewBox: { x: 0, y: 0, width: c, height: d },
								ticksGenerator: function (a) {
									return h4(a, !0)
								},
							}),
						)
			},
			nl = (function (a) {
				var b
				function c() {
					var a, b
					if (!(this instanceof c)) throw TypeError("Cannot call a class as a function")
					return (
						(a = c),
						(b = arguments),
						(a = nf(a)),
						(function (a, b) {
							if (b && ("object" === nd(b) || "function" == typeof b)) return b
							if (void 0 !== b)
								throw TypeError("Derived constructors may only return object or undefined")
							var c = a
							if (void 0 === c)
								throw ReferenceError("this hasn't been initialised - super() hasn't been called")
							return c
						})(this, ne() ? Reflect.construct(a, b || [], nf(this).constructor) : a.apply(this, b))
					)
				}
				if ("function" != typeof a && null !== a)
					throw TypeError("Super expression must either be null or a function")
				return (
					(c.prototype = Object.create(a && a.prototype, {
						constructor: { value: c, writable: !0, configurable: !0 },
					})),
					Object.defineProperty(c, "prototype", { writable: !1 }),
					a && ng(c, a),
					(b = [
						{
							key: "render",
							value: function () {
								return u.createElement(nk, this.props)
							},
						},
					]),
					(function (a, b) {
						for (var c = 0; c < b.length; c++) {
							var d = b[c]
							;(d.enumerable = d.enumerable || !1),
								(d.configurable = !0),
								"value" in d && (d.writable = !0),
								Object.defineProperty(a, ni(d.key), d)
						}
					})(c.prototype, b),
					Object.defineProperty(c, "prototype", { writable: !1 }),
					c
				)
			})(u.Component)
		nh(nl, "displayName", "YAxis"),
			nh(nl, "defaultProps", {
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
		var nm =
				((f = (e = {
					chartName: "ScatterChart",
					GraphicalChild: mL,
					defaultTooltipEventType: "item",
					validateTooltipEventTypes: ["item"],
					axisComponents: [
						{ axisType: "xAxis", AxisComp: nc },
						{ axisType: "yAxis", AxisComp: nl },
						{ axisType: "zAxis", AxisComp: mx },
					],
					formatAxisMap: function (a, b, c, d, e) {
						var f = a.width,
							g = a.height,
							h = a.layout,
							i = a.children,
							j = Object.keys(b),
							k = {
								left: c.left,
								leftMirror: c.left,
								right: f - c.right,
								rightMirror: f - c.right,
								top: c.top,
								topMirror: c.top,
								bottom: g - c.bottom,
								bottomMirror: g - c.bottom,
							},
							l = !!(0, ab.findChildByType)(i, j7)
						return j.reduce(function (f, g) {
							var i,
								j,
								m,
								n,
								o,
								p = b[g],
								q = p.orientation,
								r = p.domain,
								s = p.padding,
								t = void 0 === s ? {} : s,
								u = p.mirror,
								v = p.reversed,
								w = "".concat(q).concat(u ? "Mirror" : "")
							if ("number" === p.type && ("gap" === p.padding || "no-gap" === p.padding)) {
								var x = r[1] - r[0],
									y = 1 / 0,
									z = p.categoricalDomain.sort(cd.compareValues)
								if (
									(z.forEach(function (a, b) {
										b > 0 && (y = Math.min((a || 0) - (z[b - 1] || 0), y))
									}),
									Number.isFinite(y))
								) {
									var A = y / x,
										B = "vertical" === p.layout ? c.height : c.width
									if (("gap" === p.padding && (i = (A * B) / 2), "no-gap" === p.padding)) {
										var C = (0, cd.getPercentValue)(a.barCategoryGap, A * B),
											D = (A * B) / 2
										i = D - C - ((D - C) / B) * C
									}
								}
							}
							;(j =
								"xAxis" === d
									? [c.left + (t.left || 0) + (i || 0), c.left + c.width - (t.right || 0) - (i || 0)]
									: "yAxis" === d
										? "horizontal" === h
											? [c.top + c.height - (t.bottom || 0), c.top + (t.top || 0)]
											: [
													c.top + (t.top || 0) + (i || 0),
													c.top + c.height - (t.bottom || 0) - (i || 0),
												]
										: p.range),
								v && (j = [j[1], j[0]])
							var E = h7(p, e, l),
								F = E.scale,
								G = E.realScaleType
							F.domain(r).range(j), h8(F)
							var H = ie(F, kb(kb({}, p), {}, { realScaleType: G }))
							"xAxis" === d
								? ((o = ("top" === q && !u) || ("bottom" === q && u)),
									(m = c.left),
									(n = k[w] - o * p.height))
								: "yAxis" === d &&
									((o = ("left" === q && !u) || ("right" === q && u)),
									(m = k[w] - o * p.width),
									(n = c.top))
							var I = kb(
								kb(kb({}, p), H),
								{},
								{
									realScaleType: G,
									x: m,
									y: n,
									scale: F,
									width: "xAxis" === d ? c.width : p.width,
									height: "yAxis" === d ? c.height : p.height,
								},
							)
							return (
								(I.bandSize = ip(I, H)),
								p.hide || "xAxis" !== d
									? p.hide || (k[w] += (o ? -1 : 1) * I.width)
									: (k[w] += (o ? -1 : 1) * I.height),
								kb(kb({}, f), {}, kc({}, g, I))
							)
						}, {})
					},
				}).chartName),
				(g = e.GraphicalChild),
				(i = void 0 === (h = e.defaultTooltipEventType) ? "axis" : h),
				(k = void 0 === (j = e.validateTooltipEventTypes) ? ["axis"] : j),
				(l = e.axisComponents),
				(m = e.legendContent),
				(n = e.formatAxisMap),
				(o = e.defaultProps),
				(p = function (a, b) {
					var c = b.graphicalItems,
						d = b.stackGroups,
						e = b.offset,
						f = b.updateId,
						g = b.dataStartIndex,
						h = b.dataEndIndex,
						i = a.barSize,
						j = a.layout,
						k = a.barGap,
						m = a.barCategoryGap,
						n = a.maxBarSize,
						o = mp(j),
						p = o.numericAxisName,
						q = o.cateAxisName,
						r =
							!!c &&
							!!c.length &&
							c.some(function (a) {
								var b = (0, ab.getDisplayName)(a && a.type)
								return b && b.indexOf("Bar") >= 0
							}),
						s = []
					return (
						c.forEach(function (c, o) {
							var t = mg(a.data, { graphicalItems: [c], dataStartIndex: g, dataEndIndex: h }),
								u = void 0 !== c.type.defaultProps ? l8(l8({}, c.type.defaultProps), c.props) : c.props,
								v = u.dataKey,
								w = u.maxBarSize,
								x = u["".concat(p, "Id")],
								y = u["".concat(q, "Id")],
								z = l.reduce(function (a, c) {
									var d = b["".concat(c.axisType, "Map")],
										e = u["".concat(c.axisType, "Id")]
									;(d && d[e]) || "zAxis" === c.axisType || _(!1)
									var f = d[e]
									return l8(
										l8({}, a),
										{},
										l9(l9({}, c.axisType, f), "".concat(c.axisType, "Ticks"), h4(f)),
									)
								}, {}),
								A = z[q],
								B = z["".concat(q, "Ticks")],
								C = d && d[x] && d[x].hasStack && ij(c, d[x].stackGroups),
								D = (0, ab.getDisplayName)(c.type).indexOf("Bar") >= 0,
								E = ip(A, B),
								F = [],
								G =
									r &&
									hZ({
										barSize: i,
										stackGroups: d,
										totalSize: "xAxis" === q ? z[q].width : "yAxis" === q ? z[q].height : void 0,
									})
							if (D) {
								var H,
									I,
									J = (0, U.default)(w) ? n : w,
									K = null != (H = null != (I = ip(A, B, !0)) ? I : J) ? H : 0
								;(F = h$({
									barGap: k,
									barCategoryGap: m,
									bandSize: K !== E ? K : E,
									sizeList: G[y],
									maxBarSize: J,
								})),
									K !== E &&
										(F = F.map(function (a) {
											return l8(
												l8({}, a),
												{},
												{
													position: l8(
														l8({}, a.position),
														{},
														{ offset: a.position.offset - K / 2 },
													),
												},
											)
										}))
							}
							var L = c && c.type && c.type.getComposedData
							L &&
								s.push({
									props: l8(
										l8(
											{},
											L(
												l8(
													l8({}, z),
													{},
													{
														displayedData: t,
														props: a,
														dataKey: v,
														item: c,
														bandSize: E,
														barPosition: F,
														offset: e,
														stackedData: C,
														layout: j,
														dataStartIndex: g,
														dataEndIndex: h,
													},
												),
											),
										),
										{},
										l9(
											l9(l9({ key: c.key || "item-".concat(o) }, p, z[p]), q, z[q]),
											"animationId",
											f,
										),
									),
									childIndex: (0, ab.parseChildIndex)(c, a.children),
									item: c,
								})
						}),
						s
					)
				}),
				(q = function (a, b) {
					var c = a.props,
						d = a.dataStartIndex,
						e = a.dataEndIndex,
						h = a.updateId
					if (!(0, ab.validateWidthHeight)({ props: c })) return null
					var i = c.children,
						j = c.layout,
						k = c.stackOffset,
						m = c.data,
						o = c.reverseStackOrder,
						q = mp(j),
						r = q.numericAxisName,
						s = q.cateAxisName,
						t = (0, ab.findAllByType)(i, g),
						u = id(m, t, "".concat(r, "Id"), "".concat(s, "Id"), k, o),
						v = l.reduce(function (a, b) {
							var f = "".concat(b.axisType, "Map")
							return l8(
								l8({}, a),
								{},
								l9(
									{},
									f,
									mm(
										c,
										l8(
											l8({}, b),
											{},
											{
												graphicalItems: t,
												stackGroups: b.axisType === r && u,
												dataStartIndex: d,
												dataEndIndex: e,
											},
										),
									),
								),
							)
						}, {}),
						w = mq(l8(l8({}, v), {}, { props: c, graphicalItems: t }), null == b ? void 0 : b.legendBBox)
					Object.keys(v).forEach(function (a) {
						v[a] = n(c, v[a], w, a.replace("Map", ""), f)
					})
					var x = mn(v["".concat(s, "Map")]),
						y = p(
							c,
							l8(
								l8({}, v),
								{},
								{
									dataStartIndex: d,
									dataEndIndex: e,
									updateId: h,
									graphicalItems: t,
									stackGroups: u,
									offset: w,
								},
							),
						)
					return l8(l8({ formattedGraphicalItems: y, graphicalItems: t, offset: w, stackGroups: u }, x), v)
				}),
				(r = (function (a) {
					var b
					function c(a) {
						var b, d, e, g, h
						if (!(this instanceof c)) throw TypeError("Cannot call a class as a function")
						return (
							(g = c),
							(h = [a]),
							(g = l2(g)),
							l9(
								(e = (function (a, b) {
									if (b && ("object" === lZ(b) || "function" == typeof b)) return b
									if (void 0 !== b)
										throw TypeError("Derived constructors may only return object or undefined")
									var c = a
									if (void 0 === c)
										throw ReferenceError(
											"this hasn't been initialised - super() hasn't been called",
										)
									return c
								})(
									this,
									l1() ? Reflect.construct(g, h || [], l2(this).constructor) : g.apply(this, h),
								)),
								"eventEmitterSymbol",
								Symbol("rechartsEventEmitter"),
							),
							l9(e, "accessibilityManager", new le()),
							l9(e, "handleLegendBBoxUpdate", function (a) {
								if (a) {
									var b = e.state,
										c = b.dataStartIndex,
										d = b.dataEndIndex,
										f = b.updateId
									e.setState(
										l8(
											{ legendBBox: a },
											q(
												{ props: e.props, dataStartIndex: c, dataEndIndex: d, updateId: f },
												l8(l8({}, e.state), {}, { legendBBox: a }),
											),
										),
									)
								}
							}),
							l9(e, "handleReceiveSyncEvent", function (a, b, c) {
								e.props.syncId === a &&
									(c !== e.eventEmitterSymbol || "function" == typeof e.props.syncMethod) &&
									e.applySyncEvent(b)
							}),
							l9(e, "handleBrushChange", function (a) {
								var b = a.startIndex,
									c = a.endIndex
								if (b !== e.state.dataStartIndex || c !== e.state.dataEndIndex) {
									var d = e.state.updateId
									e.setState(function () {
										return l8(
											{ dataStartIndex: b, dataEndIndex: c },
											q(
												{ props: e.props, dataStartIndex: b, dataEndIndex: c, updateId: d },
												e.state,
											),
										)
									}),
										e.triggerSyncEvent({ dataStartIndex: b, dataEndIndex: c })
								}
							}),
							l9(e, "handleMouseEnter", function (a) {
								var b = e.getMouseInfo(a)
								if (b) {
									var c = l8(l8({}, b), {}, { isTooltipActive: !0 })
									e.setState(c), e.triggerSyncEvent(c)
									var d = e.props.onMouseEnter
									;(0, V.default)(d) && d(c, a)
								}
							}),
							l9(e, "triggeredAfterMouseMove", function (a) {
								var b = e.getMouseInfo(a),
									c = b ? l8(l8({}, b), {}, { isTooltipActive: !0 }) : { isTooltipActive: !1 }
								e.setState(c), e.triggerSyncEvent(c)
								var d = e.props.onMouseMove
								;(0, V.default)(d) && d(c, a)
							}),
							l9(e, "handleItemMouseEnter", function (a) {
								e.setState(function () {
									return {
										isTooltipActive: !0,
										activeItem: a,
										activePayload: a.tooltipPayload,
										activeCoordinate: a.tooltipPosition || { x: a.cx, y: a.cy },
									}
								})
							}),
							l9(e, "handleItemMouseLeave", function () {
								e.setState(function () {
									return { isTooltipActive: !1 }
								})
							}),
							l9(e, "handleMouseMove", function (a) {
								a.persist(), e.throttleTriggeredAfterMouseMove(a)
							}),
							l9(e, "handleMouseLeave", function (a) {
								e.throttleTriggeredAfterMouseMove.cancel()
								var b = { isTooltipActive: !1 }
								e.setState(b), e.triggerSyncEvent(b)
								var c = e.props.onMouseLeave
								;(0, V.default)(c) && c(b, a)
							}),
							l9(e, "handleOuterEvent", function (a) {
								var b,
									c = (0, ab.getReactEventByType)(a),
									d = (0, X.default)(e.props, "".concat(c))
								c &&
									(0, V.default)(d) &&
									d(
										null !=
											(b = /.*touch.*/i.test(c)
												? e.getMouseInfo(a.changedTouches[0])
												: e.getMouseInfo(a))
											? b
											: {},
										a,
									)
							}),
							l9(e, "handleClick", function (a) {
								var b = e.getMouseInfo(a)
								if (b) {
									var c = l8(l8({}, b), {}, { isTooltipActive: !0 })
									e.setState(c), e.triggerSyncEvent(c)
									var d = e.props.onClick
									;(0, V.default)(d) && d(c, a)
								}
							}),
							l9(e, "handleMouseDown", function (a) {
								var b = e.props.onMouseDown
								;(0, V.default)(b) && b(e.getMouseInfo(a), a)
							}),
							l9(e, "handleMouseUp", function (a) {
								var b = e.props.onMouseUp
								;(0, V.default)(b) && b(e.getMouseInfo(a), a)
							}),
							l9(e, "handleTouchMove", function (a) {
								null != a.changedTouches &&
									a.changedTouches.length > 0 &&
									e.throttleTriggeredAfterMouseMove(a.changedTouches[0])
							}),
							l9(e, "handleTouchStart", function (a) {
								null != a.changedTouches &&
									a.changedTouches.length > 0 &&
									e.handleMouseDown(a.changedTouches[0])
							}),
							l9(e, "handleTouchEnd", function (a) {
								null != a.changedTouches &&
									a.changedTouches.length > 0 &&
									e.handleMouseUp(a.changedTouches[0])
							}),
							l9(e, "handleDoubleClick", function (a) {
								var b = e.props.onDoubleClick
								;(0, V.default)(b) && b(e.getMouseInfo(a), a)
							}),
							l9(e, "handleContextMenu", function (a) {
								var b = e.props.onContextMenu
								;(0, V.default)(b) && b(e.getMouseInfo(a), a)
							}),
							l9(e, "triggerSyncEvent", function (a) {
								void 0 !== e.props.syncId && k9.emit(la, e.props.syncId, a, e.eventEmitterSymbol)
							}),
							l9(e, "applySyncEvent", function (a) {
								var b = e.props,
									c = b.layout,
									d = b.syncMethod,
									f = e.state.updateId,
									g = a.dataStartIndex,
									h = a.dataEndIndex
								if (void 0 !== a.dataStartIndex || void 0 !== a.dataEndIndex)
									e.setState(
										l8(
											{ dataStartIndex: g, dataEndIndex: h },
											q(
												{ props: e.props, dataStartIndex: g, dataEndIndex: h, updateId: f },
												e.state,
											),
										),
									)
								else if (void 0 !== a.activeTooltipIndex) {
									var i = a.chartX,
										j = a.chartY,
										k = a.activeTooltipIndex,
										l = e.state,
										m = l.offset,
										n = l.tooltipTicks
									if (!m) return
									if ("function" == typeof d) k = d(n, a)
									else if ("value" === d) {
										k = -1
										for (var o = 0; o < n.length; o++)
											if (n[o].value === a.activeLabel) {
												k = o
												break
											}
									}
									var p = l8(l8({}, m), {}, { x: m.left, y: m.top }),
										r = Math.min(i, p.x + p.width),
										s = Math.min(j, p.y + p.height),
										t = n[k] && n[k].value,
										u = mi(e.state, e.props.data, k),
										v = n[k]
											? {
													x: "horizontal" === c ? n[k].coordinate : r,
													y: "horizontal" === c ? s : n[k].coordinate,
												}
											: md
									e.setState(
										l8(
											l8({}, a),
											{},
											{
												activeLabel: t,
												activeCoordinate: v,
												activePayload: u,
												activeTooltipIndex: k,
											},
										),
									)
								} else e.setState(a)
							}),
							l9(e, "renderCursor", function (a) {
								var b,
									c = e.state,
									d = c.isTooltipActive,
									g = c.activeCoordinate,
									h = c.activePayload,
									i = c.offset,
									j = c.activeTooltipIndex,
									k = c.tooltipAxisBandSize,
									l = e.getTooltipEventType(),
									m = null != (b = a.props.active) ? b : d,
									n = e.props.layout,
									o = a.key || "_recharts-cursor"
								return u.default.createElement(lW, {
									key: o,
									activeCoordinate: g,
									activePayload: h,
									activeTooltipIndex: j,
									chartName: f,
									element: a,
									isActive: m,
									layout: n,
									offset: i,
									tooltipAxisBandSize: k,
									tooltipEventType: l,
								})
							}),
							l9(e, "renderPolarAxis", function (a, b, c) {
								var d = (0, X.default)(a, "type.axisType"),
									f = (0, X.default)(e.state, "".concat(d, "Map")),
									g = a.type.defaultProps,
									h = void 0 !== g ? l8(l8({}, g), a.props) : a.props,
									i = f && f[h["".concat(d, "Id")]]
								return (0, u.cloneElement)(
									a,
									l8(
										l8({}, i),
										{},
										{
											className: (0, $.default)(d, i.className),
											key: a.key || "".concat(b, "-").concat(c),
											ticks: h4(i, !0),
										},
									),
								)
							}),
							l9(e, "renderPolarGrid", function (a) {
								var b = a.props,
									c = b.radialLines,
									d = b.polarAngles,
									f = b.polarRadius,
									g = e.state,
									h = g.radiusAxisMap,
									i = g.angleAxisMap,
									j = (0, cd.getAnyElementOfObject)(h),
									k = (0, cd.getAnyElementOfObject)(i),
									l = k.cx,
									m = k.cy,
									n = k.innerRadius,
									o = k.outerRadius
								return (0, u.cloneElement)(a, {
									polarAngles: Array.isArray(d)
										? d
										: h4(k, !0).map(function (a) {
												return a.coordinate
											}),
									polarRadius: Array.isArray(f)
										? f
										: h4(j, !0).map(function (a) {
												return a.coordinate
											}),
									cx: l,
									cy: m,
									innerRadius: n,
									outerRadius: o,
									key: a.key || "polar-grid",
									radialLines: c,
								})
							}),
							l9(e, "renderLegend", function () {
								var a = e.state.formattedGraphicalItems,
									b = e.props,
									c = b.children,
									d = b.width,
									f = b.height,
									g = e.props.margin || {},
									h = hO({
										children: c,
										formattedGraphicalItems: a,
										legendWidth: d - (g.left || 0) - (g.right || 0),
										legendContent: m,
									})
								if (!h) return null
								var i = h.item,
									j = l0(h, lX)
								return (0, u.cloneElement)(
									i,
									l8(
										l8({}, j),
										{},
										{
											chartWidth: d,
											chartHeight: f,
											margin: g,
											onBBoxUpdate: e.handleLegendBBoxUpdate,
										},
									),
								)
							}),
							l9(e, "renderTooltip", function () {
								var a,
									b = e.props,
									c = b.children,
									d = b.accessibilityLayer,
									f = (0, ab.findChildByType)(c, af.Tooltip)
								if (!f) return null
								var g = e.state,
									h = g.isTooltipActive,
									i = g.activeCoordinate,
									j = g.activePayload,
									k = g.activeLabel,
									l = g.offset,
									m = null != (a = f.props.active) ? a : h
								return (0, u.cloneElement)(f, {
									viewBox: l8(l8({}, l), {}, { x: l.left, y: l.top }),
									active: m,
									label: k,
									payload: m ? j : [],
									coordinate: i,
									accessibilityLayer: d,
								})
							}),
							l9(e, "renderBrush", function (a) {
								var b = e.props,
									c = b.margin,
									d = b.data,
									f = e.state,
									g = f.offset,
									h = f.dataStartIndex,
									i = f.dataEndIndex,
									j = f.updateId
								return (0, u.cloneElement)(a, {
									key: a.key || "_recharts-brush",
									onChange: h6(e.handleBrushChange, a.props.onChange),
									data: d,
									x: (0, cd.isNumber)(a.props.x) ? a.props.x : g.left,
									y: (0, cd.isNumber)(a.props.y)
										? a.props.y
										: g.top + g.height + g.brushBottom - (c.bottom || 0),
									width: (0, cd.isNumber)(a.props.width) ? a.props.width : g.width,
									startIndex: h,
									endIndex: i,
									updateId: "brush-".concat(j),
								})
							}),
							l9(e, "renderReferenceElement", function (a, b, c) {
								if (!a) return null
								var d = e.clipPathId,
									f = e.state,
									g = f.xAxisMap,
									h = f.yAxisMap,
									i = f.offset,
									j = a.type.defaultProps || {},
									k = a.props,
									l = k.xAxisId,
									m = void 0 === l ? j.xAxisId : l,
									n = k.yAxisId,
									o = void 0 === n ? j.yAxisId : n
								return (0, u.cloneElement)(a, {
									key: a.key || "".concat(b, "-").concat(c),
									xAxis: g[m],
									yAxis: h[o],
									viewBox: { x: i.left, y: i.top, width: i.width, height: i.height },
									clipPathId: d,
								})
							}),
							l9(e, "renderActivePoints", function (a) {
								var b = a.item,
									d = a.activePoint,
									e = a.basePoint,
									f = a.childIndex,
									g = a.isRange,
									h = [],
									i = b.props.key,
									j =
										void 0 !== b.item.type.defaultProps
											? l8(l8({}, b.item.type.defaultProps), b.item.props)
											: b.item.props,
									k = j.activeDot,
									l = l8(
										l8(
											{
												index: f,
												dataKey: j.dataKey,
												cx: d.x,
												cy: d.y,
												r: 4,
												fill: hY(b.item),
												strokeWidth: 2,
												stroke: "#fff",
												payload: d.payload,
												value: d.value,
											},
											(0, ab.filterProps)(k, !1),
										),
										(0, ah.adaptEventHandlers)(k),
									)
								return (
									h.push(c.renderActiveDot(k, l, "".concat(i, "-activePoint-").concat(f))),
									e
										? h.push(
												c.renderActiveDot(
													k,
													l8(l8({}, l), {}, { cx: e.x, cy: e.y }),
													"".concat(i, "-basePoint-").concat(f),
												),
											)
										: g && h.push(null),
									h
								)
							}),
							l9(e, "renderGraphicChild", function (a, b, c) {
								var d = e.filterFormatItem(a, b, c)
								if (!d) return null
								var f = e.getTooltipEventType(),
									g = e.state,
									h = g.isTooltipActive,
									i = g.tooltipAxis,
									j = g.activeTooltipIndex,
									k = g.activeLabel,
									l = e.props.children,
									m = (0, ab.findChildByType)(l, af.Tooltip),
									n = d.props,
									o = n.points,
									p = n.isRange,
									q = n.baseLine,
									r =
										void 0 !== d.item.type.defaultProps
											? l8(l8({}, d.item.type.defaultProps), d.item.props)
											: d.item.props,
									s = r.activeDot,
									t = r.hide,
									v = r.activeBar,
									w = r.activeShape,
									x = !!(!t && h && m && (s || v || w)),
									y = {}
								"axis" !== f && m && "click" === m.props.trigger
									? (y = { onClick: h6(e.handleItemMouseEnter, a.props.onClick) })
									: "axis" !== f &&
										(y = {
											onMouseLeave: h6(e.handleItemMouseLeave, a.props.onMouseLeave),
											onMouseEnter: h6(e.handleItemMouseEnter, a.props.onMouseEnter),
										})
								var z = (0, u.cloneElement)(a, l8(l8({}, d.props), y))
								if (x)
									if (j >= 0) {
										if (i.dataKey && !i.allowDuplicatedCategory) {
											var A =
												"function" == typeof i.dataKey
													? function (a) {
															return "function" == typeof i.dataKey
																? i.dataKey(a.payload)
																: null
														}
													: "payload.".concat(i.dataKey.toString())
											;(C = (0, cd.findEntryInArray)(o, A, k)),
												(D = p && q && (0, cd.findEntryInArray)(q, A, k))
										} else (C = null == o ? void 0 : o[j]), (D = p && q && q[j])
										if (w || v) {
											var B = void 0 !== a.props.activeIndex ? a.props.activeIndex : j
											return [
												(0, u.cloneElement)(
													a,
													l8(l8(l8({}, d.props), y), {}, { activeIndex: B }),
												),
												null,
												null,
											]
										}
										if (!(0, U.default)(C))
											return [z].concat(
												l4(
													e.renderActivePoints({
														item: d,
														activePoint: C,
														basePoint: D,
														childIndex: j,
														isRange: p,
													}),
												),
											)
									} else {
										var C,
											D,
											E,
											F = (
												null != (E = e.getItemByXY(e.state.activeCoordinate))
													? E
													: { graphicalItem: z }
											).graphicalItem,
											G = F.item,
											H = void 0 === G ? a : G,
											I = F.childIndex,
											J = l8(l8(l8({}, d.props), y), {}, { activeIndex: I })
										return [(0, u.cloneElement)(H, J), null, null]
									}
								return p ? [z, null, null] : [z, null]
							}),
							l9(e, "renderCustomized", function (a, b, c) {
								return (0, u.cloneElement)(
									a,
									l8(l8({ key: "recharts-customized-".concat(c) }, e.props), e.state),
								)
							}),
							l9(e, "renderMap", {
								CartesianGrid: { handler: me, once: !0 },
								ReferenceArea: { handler: e.renderReferenceElement },
								ReferenceLine: { handler: me },
								ReferenceDot: { handler: e.renderReferenceElement },
								XAxis: { handler: me },
								YAxis: { handler: me },
								Brush: { handler: e.renderBrush, once: !0 },
								Bar: { handler: e.renderGraphicChild },
								Line: { handler: e.renderGraphicChild },
								Area: { handler: e.renderGraphicChild },
								Radar: { handler: e.renderGraphicChild },
								RadialBar: { handler: e.renderGraphicChild },
								Scatter: { handler: e.renderGraphicChild },
								Pie: { handler: e.renderGraphicChild },
								Funnel: { handler: e.renderGraphicChild },
								Tooltip: { handler: e.renderCursor, once: !0 },
								PolarGrid: { handler: e.renderPolarGrid, once: !0 },
								PolarAngleAxis: { handler: e.renderPolarAxis },
								PolarRadiusAxis: { handler: e.renderPolarAxis },
								Customized: { handler: e.renderCustomized },
							}),
							(e.clipPathId = "".concat(null != (b = a.id) ? b : (0, cd.uniqueId)("recharts"), "-clip")),
							(e.throttleTriggeredAfterMouseMove = (0, Z.default)(
								e.triggeredAfterMouseMove,
								null != (d = a.throttleDelay) ? d : 1e3 / 60,
							)),
							(e.state = {}),
							e
						)
					}
					if ("function" != typeof a && null !== a)
						throw TypeError("Super expression must either be null or a function")
					return (
						(c.prototype = Object.create(a && a.prototype, {
							constructor: { value: c, writable: !0, configurable: !0 },
						})),
						Object.defineProperty(c, "prototype", { writable: !1 }),
						a && l3(c, a),
						(b = [
							{
								key: "componentDidMount",
								value: function () {
									var a, b
									this.addListener(),
										this.accessibilityManager.setDetails({
											container: this.container,
											offset: {
												left: null != (a = this.props.margin.left) ? a : 0,
												top: null != (b = this.props.margin.top) ? b : 0,
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
									var a = this.props,
										b = a.children,
										c = a.data,
										d = a.height,
										e = a.layout,
										f = (0, ab.findChildByType)(b, af.Tooltip)
									if (f) {
										var g = f.props.defaultIndex
										if (
											"number" == typeof g &&
											!(g < 0) &&
											!(g > this.state.tooltipTicks.length - 1)
										) {
											var h = this.state.tooltipTicks[g] && this.state.tooltipTicks[g].value,
												i = mi(this.state, c, g, h),
												j = this.state.tooltipTicks[g].coordinate,
												k = (this.state.offset.top + d) / 2,
												l = "horizontal" === e ? { x: j, y: k } : { y: j, x: k },
												m = this.state.formattedGraphicalItems.find(function (a) {
													return "Scatter" === a.item.type.name
												})
											m &&
												((l = l8(l8({}, l), m.props.points[g].tooltipPosition)),
												(i = m.props.points[g].tooltipPayload))
											var n = {
												activeTooltipIndex: g,
												isTooltipActive: !0,
												activeLabel: h,
												activePayload: i,
												activeCoordinate: l,
											}
											this.setState(n),
												this.renderCursor(f),
												this.accessibilityManager.setIndex(g)
										}
									}
								},
							},
							{
								key: "getSnapshotBeforeUpdate",
								value: function (a, b) {
									if (!this.props.accessibilityLayer) return null
									if (
										(this.state.tooltipTicks !== b.tooltipTicks &&
											this.accessibilityManager.setDetails({
												coordinateList: this.state.tooltipTicks,
											}),
										this.props.layout !== a.layout &&
											this.accessibilityManager.setDetails({ layout: this.props.layout }),
										this.props.margin !== a.margin)
									) {
										var c, d
										this.accessibilityManager.setDetails({
											offset: {
												left: null != (c = this.props.margin.left) ? c : 0,
												top: null != (d = this.props.margin.top) ? d : 0,
											},
										})
									}
									return null
								},
							},
							{
								key: "componentDidUpdate",
								value: function (a) {
									;(0, ab.isChildrenEqual)(
										[(0, ab.findChildByType)(a.children, af.Tooltip)],
										[(0, ab.findChildByType)(this.props.children, af.Tooltip)],
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
									var a = (0, ab.findChildByType)(this.props.children, af.Tooltip)
									if (a && "boolean" == typeof a.props.shared) {
										var b = a.props.shared ? "axis" : "item"
										return k.indexOf(b) >= 0 ? b : i
									}
									return i
								},
							},
							{
								key: "getMouseInfo",
								value: function (a) {
									if (!this.container) return null
									var b = this.container,
										c = b.getBoundingClientRect(),
										d = {
											top: c.top + window.scrollY - document.documentElement.clientTop,
											left: c.left + window.scrollX - document.documentElement.clientLeft,
										},
										e = {
											chartX: Math.round(a.pageX - d.left),
											chartY: Math.round(a.pageY - d.top),
										},
										f = c.width / b.offsetWidth || 1,
										g = this.inRange(e.chartX, e.chartY, f)
									if (!g) return null
									var h = this.state,
										i = h.xAxisMap,
										j = h.yAxisMap,
										k = this.getTooltipEventType(),
										l = mj(this.state, this.props.data, this.props.layout, g)
									if ("axis" !== k && i && j) {
										var m = (0, cd.getAnyElementOfObject)(i).scale,
											n = (0, cd.getAnyElementOfObject)(j).scale,
											o = m && m.invert ? m.invert(e.chartX) : null,
											p = n && n.invert ? n.invert(e.chartY) : null
										return l8(l8({}, e), {}, { xValue: o, yValue: p }, l)
									}
									return l ? l8(l8({}, e), l) : null
								},
							},
							{
								key: "inRange",
								value: function (a, b) {
									var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
										d = this.props.layout,
										e = a / c,
										f = b / c
									if ("horizontal" === d || "vertical" === d) {
										var g = this.state.offset
										return e >= g.left &&
											e <= g.left + g.width &&
											f >= g.top &&
											f <= g.top + g.height
											? { x: e, y: f }
											: null
									}
									var h = this.state,
										i = h.angleAxisMap,
										j = h.radiusAxisMap
									return i && j ? iU({ x: e, y: f }, (0, cd.getAnyElementOfObject)(i)) : null
								},
							},
							{
								key: "parseEventsOfWrapper",
								value: function () {
									var a = this.props.children,
										b = this.getTooltipEventType(),
										c = (0, ab.findChildByType)(a, af.Tooltip),
										d = {}
									return (
										c &&
											"axis" === b &&
											(d =
												"click" === c.props.trigger
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
										l8(l8({}, (0, ah.adaptEventHandlers)(this.props, this.handleOuterEvent)), d)
									)
								},
							},
							{
								key: "addListener",
								value: function () {
									k9.on(la, this.handleReceiveSyncEvent)
								},
							},
							{
								key: "removeListener",
								value: function () {
									k9.removeListener(la, this.handleReceiveSyncEvent)
								},
							},
							{
								key: "filterFormatItem",
								value: function (a, b, c) {
									for (var d = this.state.formattedGraphicalItems, e = 0, f = d.length; e < f; e++) {
										var g = d[e]
										if (
											g.item === a ||
											g.props.key === a.key ||
											(b === (0, ab.getDisplayName)(g.item.type) && c === g.childIndex)
										)
											return g
									}
									return null
								},
							},
							{
								key: "renderClipPath",
								value: function () {
									var a = this.clipPathId,
										b = this.state.offset,
										c = b.left,
										d = b.top,
										e = b.height,
										f = b.width
									return u.default.createElement(
										"defs",
										null,
										u.default.createElement(
											"clipPath",
											{ id: a },
											u.default.createElement("rect", { x: c, y: d, height: e, width: f }),
										),
									)
								},
							},
							{
								key: "getXScales",
								value: function () {
									var a = this.state.xAxisMap
									return a
										? Object.entries(a).reduce(function (a, b) {
												var c = l_(b, 2),
													d = c[0],
													e = c[1]
												return l8(l8({}, a), {}, l9({}, d, e.scale))
											}, {})
										: null
								},
							},
							{
								key: "getYScales",
								value: function () {
									var a = this.state.yAxisMap
									return a
										? Object.entries(a).reduce(function (a, b) {
												var c = l_(b, 2),
													d = c[0],
													e = c[1]
												return l8(l8({}, a), {}, l9({}, d, e.scale))
											}, {})
										: null
								},
							},
							{
								key: "getXScaleByAxisId",
								value: function (a) {
									var b
									return null == (b = this.state.xAxisMap) || null == (b = b[a]) ? void 0 : b.scale
								},
							},
							{
								key: "getYScaleByAxisId",
								value: function (a) {
									var b
									return null == (b = this.state.yAxisMap) || null == (b = b[a]) ? void 0 : b.scale
								},
							},
							{
								key: "getItemByXY",
								value: function (a) {
									var b = this.state,
										c = b.formattedGraphicalItems,
										d = b.activeItem
									if (c && c.length)
										for (var e = 0, f = c.length; e < f; e++) {
											var g = c[e],
												h = g.props,
												i = g.item,
												j =
													void 0 !== i.type.defaultProps
														? l8(l8({}, i.type.defaultProps), i.props)
														: i.props,
												k = (0, ab.getDisplayName)(i.type)
											if ("Bar" === k) {
												var l = (h.data || []).find(function (b) {
													return b1(a, b)
												})
												if (l) return { graphicalItem: g, payload: l }
											} else if ("RadialBar" === k) {
												var m = (h.data || []).find(function (b) {
													return iU(a, b)
												})
												if (m) return { graphicalItem: g, payload: m }
											} else if (jK(g, d) || jL(g, d) || jM(g, d)) {
												var n = (function (a) {
														var b,
															c,
															d,
															e = a.activeTooltipItem,
															f = a.graphicalItem,
															g = a.itemData,
															h =
																(jK(f, e)
																	? (b = "trapezoids")
																	: jL(f, e)
																		? (b = "sectors")
																		: jM(f, e) && (b = "points"),
																b),
															i = jK(f, e)
																? null == (c = e.tooltipPayload) ||
																	null == (c = c[0]) ||
																	null == (c = c.payload)
																	? void 0
																	: c.payload
																: jL(f, e)
																	? null == (d = e.tooltipPayload) ||
																		null == (d = d[0]) ||
																		null == (d = d.payload)
																		? void 0
																		: d.payload
																	: jM(f, e)
																		? e.payload
																		: {},
															j = g.filter(function (a, b) {
																var c = (0, gR.default)(i, a),
																	d = f.props[h].filter(function (a) {
																		var b
																		return (jK(f, e)
																			? (b = jN)
																			: jL(f, e)
																				? (b = jO)
																				: jM(f, e) && (b = jP),
																		b)(a, e)
																	}),
																	g = f.props[h].indexOf(d[d.length - 1])
																return c && b === g
															})
														return g.indexOf(j[j.length - 1])
													})({ graphicalItem: g, activeTooltipItem: d, itemData: j.data }),
													o = void 0 === j.activeIndex ? n : j.activeIndex
												return {
													graphicalItem: l8(l8({}, g), {}, { childIndex: o }),
													payload: jM(g, d) ? j.data[n] : g.props.data[n],
												}
											}
										}
									return null
								},
							},
							{
								key: "render",
								value: function () {
									var a,
										b,
										c = this
									if (!(0, ab.validateWidthHeight)(this)) return null
									var d = this.props,
										e = d.children,
										f = d.className,
										g = d.width,
										h = d.height,
										i = d.style,
										j = d.compact,
										k = d.title,
										l = d.desc,
										m = l0(d, lY),
										n = (0, ab.filterProps)(m, !1)
									if (j)
										return u.default.createElement(
											kD,
											{
												state: this.state,
												width: this.props.width,
												height: this.props.height,
												clipPathId: this.clipPathId,
											},
											u.default.createElement(
												aa.Surface,
												l$({}, n, { width: g, height: h, title: k, desc: l }),
												this.renderClipPath(),
												(0, ab.renderByOrder)(e, this.renderMap),
											),
										)
									this.props.accessibilityLayer &&
										((n.tabIndex = null != (a = this.props.tabIndex) ? a : 0),
										(n.role = null != (b = this.props.role) ? b : "application"),
										(n.onKeyDown = function (a) {
											c.accessibilityManager.keyboardEvent(a)
										}),
										(n.onFocus = function () {
											c.accessibilityManager.focus()
										}))
									var o = this.parseEventsOfWrapper()
									return u.default.createElement(
										kD,
										{
											state: this.state,
											width: this.props.width,
											height: this.props.height,
											clipPathId: this.clipPathId,
										},
										u.default.createElement(
											"div",
											l$(
												{
													className: (0, $.default)("recharts-wrapper", f),
													style: l8(
														{
															position: "relative",
															cursor: "default",
															width: g,
															height: h,
														},
														i,
													),
												},
												o,
												{
													ref: function (a) {
														c.container = a
													},
												},
											),
											u.default.createElement(
												aa.Surface,
												l$({}, n, { width: g, height: h, title: k, desc: l, style: mc }),
												this.renderClipPath(),
												(0, ab.renderByOrder)(e, this.renderMap),
											),
											this.renderLegend(),
											this.renderTooltip(),
										),
									)
								},
							},
						]),
						(function (a, b) {
							for (var c = 0; c < b.length; c++) {
								var d = b[c]
								;(d.enumerable = d.enumerable || !1),
									(d.configurable = !0),
									"value" in d && (d.writable = !0),
									Object.defineProperty(a, ma(d.key), d)
							}
						})(c.prototype, b),
						Object.defineProperty(c, "prototype", { writable: !1 }),
						c
					)
				})(u.Component)),
				l9(r, "displayName", f),
				l9(
					r,
					"defaultProps",
					l8(
						{
							layout: "horizontal",
							stackOffset: "none",
							barCategoryGap: "10%",
							barGap: 4,
							margin: { top: 5, right: 5, bottom: 5, left: 5 },
							reverseStackOrder: !1,
							syncMethod: "index",
						},
						o,
					),
				),
				l9(r, "getDerivedStateFromProps", function (a, b) {
					var c = a.dataKey,
						d = a.data,
						e = a.children,
						f = a.width,
						g = a.height,
						h = a.layout,
						i = a.stackOffset,
						j = a.margin,
						k = b.dataStartIndex,
						l = b.dataEndIndex
					if (void 0 === b.updateId) {
						var m = mo(a)
						return l8(
							l8(l8({}, m), {}, { updateId: 0 }, q(l8(l8({ props: a }, m), {}, { updateId: 0 }), b)),
							{},
							{
								prevDataKey: c,
								prevData: d,
								prevWidth: f,
								prevHeight: g,
								prevLayout: h,
								prevStackOffset: i,
								prevMargin: j,
								prevChildren: e,
							},
						)
					}
					if (
						c !== b.prevDataKey ||
						d !== b.prevData ||
						f !== b.prevWidth ||
						g !== b.prevHeight ||
						h !== b.prevLayout ||
						i !== b.prevStackOffset ||
						!(0, k8.shallowEqual)(j, b.prevMargin)
					) {
						var n = mo(a),
							o = { chartX: b.chartX, chartY: b.chartY, isTooltipActive: b.isTooltipActive },
							p = l8(l8({}, mj(b, d, h)), {}, { updateId: b.updateId + 1 }),
							r = l8(l8(l8({}, n), o), p)
						return l8(
							l8(l8({}, r), q(l8({ props: a }, r), b)),
							{},
							{
								prevDataKey: c,
								prevData: d,
								prevWidth: f,
								prevHeight: g,
								prevLayout: h,
								prevStackOffset: i,
								prevMargin: j,
								prevChildren: e,
							},
						)
					}
					if (!(0, ab.isChildrenEqual)(e, b.prevChildren)) {
						var s,
							t,
							u,
							v,
							w = (0, ab.findChildByType)(e, iK),
							x = w && null != (s = null == (t = w.props) ? void 0 : t.startIndex) ? s : k,
							y = w && null != (u = null == (v = w.props) ? void 0 : v.endIndex) ? u : l,
							z = (0, U.default)(d) || x !== k || y !== l ? b.updateId + 1 : b.updateId
						return l8(
							l8(
								{ updateId: z },
								q(l8(l8({ props: a }, b), {}, { updateId: z, dataStartIndex: x, dataEndIndex: y }), b),
							),
							{},
							{ prevChildren: e, dataStartIndex: x, dataEndIndex: y },
						)
					}
					return null
				}),
				l9(r, "renderActiveDot", function (a, b, c) {
					var d
					return (
						(d = (0, u.isValidElement)(a)
							? (0, u.cloneElement)(a, b)
							: (0, V.default)(a)
								? a(b)
								: u.default.createElement(aj, b)),
						u.default.createElement(ae, { className: "recharts-active-dot", key: c }, d)
					)
				}),
				((s = (0, u.forwardRef)(function (a, b) {
					return u.default.createElement(r, l$({}, a, { ref: b }))
				})).displayName = r.displayName),
				s),
			nn = ["component"]
		function no(a) {
			return (no =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (a) {
							return typeof a
						}
					: function (a) {
							return a &&
								"function" == typeof Symbol &&
								a.constructor === Symbol &&
								a !== Symbol.prototype
								? "symbol"
								: typeof a
						})(a)
		}
		function np(a) {
			var b,
				c = a.component,
				d = (function (a, b) {
					if (null == a) return {}
					var c,
						d,
						e = (function (a, b) {
							if (null == a) return {}
							var c = {}
							for (var d in a)
								if (Object.prototype.hasOwnProperty.call(a, d)) {
									if (b.indexOf(d) >= 0) continue
									c[d] = a[d]
								}
							return c
						})(a, b)
					if (Object.getOwnPropertySymbols) {
						var f = Object.getOwnPropertySymbols(a)
						for (d = 0; d < f.length; d++)
							(c = f[d]),
								!(b.indexOf(c) >= 0) &&
									Object.prototype.propertyIsEnumerable.call(a, c) &&
									(e[c] = a[c])
					}
					return e
				})(a, nn)
			return (
				(0, u.isValidElement)(c)
					? (b = (0, u.cloneElement)(c, d))
					: (0, V.default)(c)
						? (b = (0, u.createElement)(c, d))
						: (0, ki.warn)(
								!1,
								"Customized's props `component` must be React.element or Function, but got %s.",
								no(c),
							),
				u.default.createElement(ae, { className: "recharts-customized-wrapper" }, b)
			)
		}
		np.displayName = "Customized"
		var nq = a.i(4894)
		let nr = ({ tableData: a }) => {
				let b = (0, u.useMemo)(() => a.filter(({ cost: a }) => a < 50), [a]),
					c = (0, u.useMemo)(() => b.reduce((a, b) => ({ ...a, [b.label]: b }), {}), [b]),
					d = (0, u.useMemo)(() => {
						let a = {},
							c = [],
							d = (a, b) => {
								let c = Math.abs(a.cost - b.cost),
									d = Math.abs(a.score - b.score)
								if (c > 8 || d > 10) return !1
								if (a.position === b.position && c < 4 && d < 5) return !0
								let e = "top" === a.position,
									f = "bottom" === a.position,
									g = "top" === b.position,
									h = "bottom" === b.position
								return ((!!e && !!g) || (!!f && !!h)) && !!(c < 4) && !!(d < 2.5)
							},
							e = (a, c) => {
								for (let d of b) {
									if (d.label === a.label) continue
									let b = Math.abs(a.cost - d.cost),
										e = Math.abs(a.score - d.score)
									switch (c) {
										case "top":
											if (b < 3 && d.score > a.score && d.score - a.score < 6) return !0
											break
										case "bottom":
											if (b < 3 && d.score < a.score && a.score - d.score < 6) return !0
											break
										case "left":
											if (e < 3 && d.cost < a.cost && a.cost - d.cost < 4) return !0
											break
										case "right":
											if (e < 3 && d.cost > a.cost && d.cost - a.cost < 4) return !0
									}
								}
								return !1
							}
						return (
							[...b]
								.sort((a, b) => {
									let c = b.score - a.score
									return Math.abs(c) > 1 ? c : a.cost - b.cost
								})
								.forEach((b) => {
									let f = "top"
									for (let a of ["top", "bottom", "right", "left"]) {
										let g = !1
										for (let e of c)
											if (
												d(
													{ cost: b.cost, score: b.score, position: a },
													{ cost: e.cost, score: e.score, position: e.position },
												)
											) {
												g = !0
												break
											}
										let h = e(b, a)
										if (!g && !h) {
											f = a
											break
										}
									}
									;(a[b.label] = f),
										c.push({ cost: b.cost, score: b.score, label: b.label, position: f })
								}),
							a
						)
					}, [b])
				return (0, t.jsxs)(t.Fragment, {
					children: [
						(0, t.jsx)("div", { className: "pt-4 pb-8 font-mono", children: "Cost x Score" }),
						(0, t.jsx)(nq.ChartContainer, {
							config: c,
							className: "h-[500px] w-full",
							children: (0, t.jsxs)(nm, {
								margin: { top: 20, right: 0, bottom: 0, left: 20 },
								children: [
									(0, t.jsx)(nc, {
										type: "number",
										dataKey: "cost",
										name: "Cost",
										domain: [
											(a) => Math.max(0, 5 * Math.round((a - 5) / 5)),
											(a) => 5 * Math.round((a + 5) / 5),
										],
										tickFormatter: (a) => w(a),
									}),
									(0, t.jsx)(nl, {
										type: "number",
										dataKey: "score",
										name: "Score",
										domain: [
											(a) => Math.max(0, 5 * Math.round((a - 5) / 5)),
											(a) => Math.min(100, 5 * Math.round((a + 5) / 5)),
										],
										tickFormatter: (a) => `${a}%`,
									}),
									(0, t.jsx)(nq.ChartTooltip, {
										content: ({ active: a, payload: b }) => {
											if (!a || !b || !b.length || !b[0]) return null
											let { label: c, cost: d, score: e } = b[0].payload
											return (0, t.jsxs)("div", {
												className: "bg-background border rounded-sm p-2 shadow-sm text-left",
												children: [
													(0, t.jsx)("div", { className: "border-b pb-1", children: c }),
													(0, t.jsxs)("div", {
														className: "pt-1",
														children: [
															(0, t.jsxs)("div", {
																children: [
																	"Score: ",
																	(0, t.jsxs)("span", {
																		className: "font-mono",
																		children: [Math.round(e), "%"],
																	}),
																],
															}),
															(0, t.jsxs)("div", {
																children: [
																	"Cost: ",
																	(0, t.jsx)("span", {
																		className: "font-mono",
																		children: w(d),
																	}),
																],
															}),
														],
													}),
												],
											})
										},
									}),
									(0, t.jsx)(np, { component: ns }),
									b.map((a, c) =>
										(0, t.jsx)(
											mL,
											{
												name: a.label,
												data: [a],
												fill: nu(c, b.length),
												children: (0, t.jsx)(jj, {
													dataKey: "label",
													content: (b) => nt(b, d[a.label] || "top"),
												}),
											},
											a.label,
										),
									),
								],
							}),
						}),
						(0, t.jsx)("div", {
							className: "py-4 text-xs opacity-50",
							children: "(Note: Models with a cost of $50 or more are excluded from the scatter plot.)",
						}),
					],
				})
			},
			ns = (a) =>
				(0, t.jsx)(lR, {
					width: a.width,
					height: a.height,
					x: a.width / 2 + 35,
					y: a.height / 2 - 15,
					top: 0,
					left: 0,
					stroke: "currentColor",
					opacity: 0.1,
				}),
			nt = (a, b) => {
				let { x: c, y: d, value: e } = a,
					f = 0,
					g = 0,
					h = "middle",
					i = "auto"
				switch (b) {
					case "top":
						;(g = -8), (h = "middle"), (i = "auto")
						break
					case "bottom":
						;(g = 15), (h = "middle"), (i = "hanging")
						break
					case "left":
						;(f = -8), (g = 5), (h = "end"), (i = "middle")
						break
					case "right":
						;(f = 15), (g = 5), (h = "start"), (i = "middle")
				}
				return (0, t.jsx)("text", {
					x: c + f,
					y: d + g,
					fontSize: "11",
					fontWeight: "500",
					fill: "currentColor",
					opacity: "0.8",
					textAnchor: h,
					dominantBaseline: i,
					style: {
						pointerEvents: "none",
						maxWidth: "80px",
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap",
					},
					children: ((a, b = 20) => (a.length <= b ? a : a.substring(0, b - 1) + "…"))(e),
				})
			},
			nu = (a, b) => `hsl(${Math.round((360 * a) / b)}, 70%, 50%)`
		function nv({ runs: a }) {
			let { data: b } = (function (a, b, c) {
					let d,
						e = u.useContext(O),
						f = u.useContext(N),
						g = (0, M.useQueryClient)(c),
						h = g.defaultQueryOptions(a)
					g.getDefaultOptions().queries?._experimental_beforeQuery?.(h)
					let i = g.getQueryCache().get(h.queryHash)
					if (((h._optimisticResults = e ? "isRestoring" : "optimistic"), h.suspense)) {
						let a = (a) => ("static" === a ? a : Math.max(a ?? 1e3, 1e3)),
							b = h.staleTime
						;(h.staleTime = "function" == typeof b ? (...c) => a(b(...c)) : a(b)),
							"number" == typeof h.gcTime && (h.gcTime = Math.max(h.gcTime, 1e3))
					}
					;(d =
						i?.state.error && "function" == typeof h.throwOnError
							? (0, F.shouldThrowError)(h.throwOnError, [i.state.error, i])
							: h.throwOnError),
						(h.suspense || h.experimental_prefetchInRender || d) && !f.isReset() && (h.retryOnMount = !1),
						u.useEffect(() => {
							f.clearReset()
						}, [f])
					let j = !g.getQueryCache().get(h.queryHash),
						[k] = u.useState(() => new b(g, h)),
						l = k.getOptimisticResult(h),
						m = !e && !1 !== a.subscribed
					if (
						(u.useSyncExternalStore(
							u.useCallback(
								(a) => {
									let b = m ? k.subscribe(B.notifyManager.batchCalls(a)) : F.noop
									return k.updateResult(), b
								},
								[k, m],
							),
							() => k.getCurrentResult(),
							() => k.getCurrentResult(),
						),
						u.useEffect(() => {
							k.setOptions(h)
						}, [h, k]),
						h?.suspense && l.isPending)
					)
						throw P(h, k, f)
					if (
						(({ result: a, errorResetBoundary: b, throwOnError: c, query: d, suspense: e }) =>
							a.isError &&
							!b.isReset() &&
							!a.isFetching &&
							d &&
							((e && void 0 === a.data) || (0, F.shouldThrowError)(c, [a.error, d])))({
							result: l,
							errorResetBoundary: f,
							throwOnError: h.throwOnError,
							query: i,
							suspense: h.suspense,
						})
					)
						throw l.error
					if (
						(g.getDefaultOptions().queries?._experimental_afterQuery?.(h, l),
						h.experimental_prefetchInRender && !F.isServer && l.isLoading && l.isFetching && !e)
					) {
						let a = j ? P(h, k, f) : i?.promise
						a?.catch(F.noop).finally(() => {
							k.updateResult()
						})
					}
					return h.notifyOnChangeProps ? l : k.trackResult(l)
				})({ queryKey: ["getOpenRouterModels"], queryFn: S }, H, void 0),
				c = (0, u.useMemo)(
					() =>
						a.map((a) => {
							let c = b?.[a.modelId ?? ""]?.modelInfo
							return {
								...a,
								label: a.name || a.description || a.model,
								cost: a.taskMetrics.cost,
								description: a.description ?? c?.description ?? null,
								contextWindow: a.contextWindow ?? c?.contextWindow ?? null,
								inputPrice: a.inputPrice ?? c?.inputPrice ?? null,
								outputPrice: a.outputPrice ?? c?.outputPrice ?? null,
							}
						}),
					[a, b],
				)
			return (0, t.jsxs)("div", {
				className: "mx-auto flex max-w-screen-lg flex-col gap-8 p-8",
				children: [
					(0, t.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							(0, t.jsxs)("div", {
								children: [
									"Roo Code tests each frontier model against",
									" ",
									(0, t.jsx)("a", {
										href: "https://github.com/RooCodeInc/Roo-Code-Evals",
										className: "underline",
										children: "a suite of hundreds of exercises",
									}),
									" ",
									"across 5 programming languages with varying difficulty. These results can help you find the right price-to-intelligence ratio for your use case.",
								],
							}),
							(0, t.jsxs)("div", {
								children: [
									"Want to see the results for a model we haven't tested yet? Ping us in",
									" ",
									(0, t.jsx)("a", {
										href: "https://discord.gg/roocode",
										className: "underline",
										children: "Discord",
									}),
									".",
								],
							}),
						],
					}),
					(0, t.jsxs)(T.Table, {
						className: "border",
						children: [
							(0, t.jsxs)(T.TableHeader, {
								children: [
									(0, t.jsxs)(T.TableRow, {
										children: [
											(0, t.jsx)(T.TableHead, {
												colSpan: 2,
												className: "border-r text-center",
												children: "Model",
											}),
											(0, t.jsx)(T.TableHead, {
												colSpan: 3,
												className: "border-r text-center",
												children: "Metrics",
											}),
											(0, t.jsx)(T.TableHead, {
												colSpan: 6,
												className: "text-center",
												children: "Scores",
											}),
										],
									}),
									(0, t.jsxs)(T.TableRow, {
										children: [
											(0, t.jsxs)(T.TableHead, {
												children: [
													"Name",
													(0, t.jsx)("div", {
														className: "text-xs opacity-50",
														children: "Context Window",
													}),
												],
											}),
											(0, t.jsxs)(T.TableHead, {
												className: "border-r",
												children: [
													"Price",
													(0, t.jsx)("div", {
														className: "text-xs opacity-50",
														children: "In / Out",
													}),
												],
											}),
											(0, t.jsx)(T.TableHead, { children: "Duration" }),
											(0, t.jsxs)(T.TableHead, {
												children: [
													"Tokens",
													(0, t.jsx)("div", {
														className: "text-xs opacity-50",
														children: "In / Out",
													}),
												],
											}),
											(0, t.jsxs)(T.TableHead, {
												className: "border-r",
												children: [
													"Cost",
													(0, t.jsx)("div", {
														className: "text-xs opacity-50",
														children: "USD",
													}),
												],
											}),
											(0, t.jsx)(T.TableHead, {
												children: (0, t.jsx)("i", {
													className: "devicon-go-plain text-lg",
													title: "Go",
												}),
											}),
											(0, t.jsx)(T.TableHead, {
												children: (0, t.jsx)("i", {
													className: "devicon-java-plain text-lg",
													title: "Java",
												}),
											}),
											(0, t.jsx)(T.TableHead, {
												children: (0, t.jsx)("i", {
													className: "devicon-javascript-plain text-lg",
													title: "JavaScript",
												}),
											}),
											(0, t.jsx)(T.TableHead, {
												children: (0, t.jsx)("i", {
													className: "devicon-python-plain text-lg",
													title: "Python",
												}),
											}),
											(0, t.jsx)(T.TableHead, {
												children: (0, t.jsx)("i", {
													className: "devicon-rust-original text-lg",
													title: "Rust",
												}),
											}),
											(0, t.jsx)(T.TableHead, { children: "Total" }),
										],
									}),
								],
							}),
							(0, t.jsx)(T.TableBody, {
								className: "font-mono",
								children: c.map((a) =>
									(0, t.jsxs)(
										T.TableRow,
										{
											children: [
												(0, t.jsxs)(T.TableCell, {
													title: a.description ?? void 0,
													children: [
														(0, t.jsx)("div", {
															className: "font-sans",
															children: a.label,
														}),
														(0, t.jsx)("div", {
															className: "text-xs opacity-50",
															children: y(a.contextWindow),
														}),
													],
												}),
												(0, t.jsx)(T.TableCell, {
													className: "border-r",
													children: (0, t.jsxs)("div", {
														className: "flex flex-row gap-2",
														children: [
															(0, t.jsx)("div", { children: w(a.inputPrice) }),
															(0, t.jsx)("div", {
																className: "opacity-25",
																children: "/",
															}),
															(0, t.jsx)("div", { children: w(a.outputPrice) }),
														],
													}),
												}),
												(0, t.jsx)(T.TableCell, {
													className: "font-mono",
													children: ((a) => {
														if (null == a) return "-"
														let b = Math.floor(a / 1e3),
															c = Math.floor(b / 3600),
															d = Math.floor((b % 3600) / 60),
															e = b % 60,
															f = []
														return (
															c > 0 && f.push(`${c}h`),
															d > 0 && f.push(`${d}m`),
															(e > 0 || 0 === f.length) && f.push(`${e}s`),
															f.join(" ")
														)
													})(a.taskMetrics.duration),
												}),
												(0, t.jsx)(T.TableCell, {
													children: (0, t.jsxs)("div", {
														className: "flex flex-row gap-2",
														children: [
															(0, t.jsx)("div", { children: y(a.taskMetrics.tokensIn) }),
															(0, t.jsx)("div", {
																className: "opacity-25",
																children: "/",
															}),
															(0, t.jsx)("div", { children: y(a.taskMetrics.tokensOut) }),
														],
													}),
												}),
												(0, t.jsx)(T.TableCell, {
													className: "border-r",
													children: w(a.taskMetrics.cost),
												}),
												(0, t.jsxs)(T.TableCell, {
													className: "text-muted-foreground",
													children: [x(a.languageScores?.go ?? 0), "%"],
												}),
												(0, t.jsxs)(T.TableCell, {
													className: "text-muted-foreground",
													children: [x(a.languageScores?.java ?? 0), "%"],
												}),
												(0, t.jsxs)(T.TableCell, {
													className: "text-muted-foreground",
													children: [x(a.languageScores?.javascript ?? 0), "%"],
												}),
												(0, t.jsxs)(T.TableCell, {
													className: "text-muted-foreground",
													children: [x(a.languageScores?.python ?? 0), "%"],
												}),
												(0, t.jsxs)(T.TableCell, {
													className: "text-muted-foreground",
													children: [x(a.languageScores?.rust ?? 0), "%"],
												}),
												(0, t.jsxs)(T.TableCell, {
													className: "font-bold",
													children: [a.score, "%"],
												}),
											],
										},
										a.id,
									),
								),
							}),
							(0, t.jsx)(T.TableCaption, { children: (0, t.jsx)(nr, { tableData: c }) }),
						],
					}),
				],
			})
		}
		a.s(["Evals", () => nv], 97688)
	},
]

//# sourceMappingURL=_a5d9612c._.js.map
