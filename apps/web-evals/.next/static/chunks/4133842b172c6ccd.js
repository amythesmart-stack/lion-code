;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	83907,
	46527,
	39692,
	(e) => {
		"use strict"
		let t
		var r = e.i(71167),
			s = e.i(26714),
			a = e.i(9286),
			n = e.i(69380),
			i = e.i(83441),
			l = e.i(76146),
			o = class extends n.Subscribable {
				constructor(e, t) {
					super(),
						(this.options = t),
						(this.#e = e),
						(this.#t = null),
						(this.#r = (0, i.pendingThenable)()),
						this.options.experimental_prefetchInRender ||
							this.#r.reject(Error("experimental_prefetchInRender feature flag is not enabled")),
						this.bindMethods(),
						this.setOptions(t)
				}
				#e
				#s = void 0
				#a = void 0
				#n = void 0
				#i
				#l
				#r
				#t
				#o
				#c
				#d
				#u
				#h
				#f
				#p = new Set()
				bindMethods() {
					this.refetch = this.refetch.bind(this)
				}
				onSubscribe() {
					1 === this.listeners.size &&
						(this.#s.addObserver(this),
						c(this.#s, this.options) ? this.#x() : this.updateResult(),
						this.#m())
				}
				onUnsubscribe() {
					this.hasListeners() || this.destroy()
				}
				shouldFetchOnReconnect() {
					return d(this.#s, this.options, this.options.refetchOnReconnect)
				}
				shouldFetchOnWindowFocus() {
					return d(this.#s, this.options, this.options.refetchOnWindowFocus)
				}
				destroy() {
					;(this.listeners = new Set()), this.#g(), this.#v(), this.#s.removeObserver(this)
				}
				setOptions(e) {
					let t = this.options,
						r = this.#s
					if (
						((this.options = this.#e.defaultQueryOptions(e)),
						void 0 !== this.options.enabled &&
							"boolean" != typeof this.options.enabled &&
							"function" != typeof this.options.enabled &&
							"boolean" != typeof (0, l.resolveEnabled)(this.options.enabled, this.#s))
					)
						throw Error("Expected enabled to be a boolean or a callback that returns a boolean")
					this.#b(),
						this.#s.setOptions(this.options),
						t._defaulted &&
							!(0, l.shallowEqualObjects)(this.options, t) &&
							this.#e
								.getQueryCache()
								.notify({ type: "observerOptionsUpdated", query: this.#s, observer: this })
					let s = this.hasListeners()
					s && u(this.#s, r, this.options, t) && this.#x(),
						this.updateResult(),
						s &&
							(this.#s !== r ||
								(0, l.resolveEnabled)(this.options.enabled, this.#s) !==
									(0, l.resolveEnabled)(t.enabled, this.#s) ||
								(0, l.resolveStaleTime)(this.options.staleTime, this.#s) !==
									(0, l.resolveStaleTime)(t.staleTime, this.#s)) &&
							this.#y()
					let a = this.#j()
					s &&
						(this.#s !== r ||
							(0, l.resolveEnabled)(this.options.enabled, this.#s) !==
								(0, l.resolveEnabled)(t.enabled, this.#s) ||
							a !== this.#f) &&
						this.#k(a)
				}
				getOptimisticResult(e) {
					var t, r
					let s = this.#e.getQueryCache().build(this.#e, e),
						a = this.createResult(s, e)
					return (
						(t = this),
						(r = a),
						(0, l.shallowEqualObjects)(t.getCurrentResult(), r) ||
							((this.#n = a), (this.#l = this.options), (this.#i = this.#s.state)),
						a
					)
				}
				getCurrentResult() {
					return this.#n
				}
				trackResult(e, t) {
					return new Proxy(e, { get: (e, r) => (this.trackProp(r), t?.(r), Reflect.get(e, r)) })
				}
				trackProp(e) {
					this.#p.add(e)
				}
				getCurrentQuery() {
					return this.#s
				}
				refetch({ ...e } = {}) {
					return this.fetch({ ...e })
				}
				fetchOptimistic(e) {
					let t = this.#e.defaultQueryOptions(e),
						r = this.#e.getQueryCache().build(this.#e, t)
					return r.fetch().then(() => this.createResult(r, t))
				}
				fetch(e) {
					return this.#x({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
						() => (this.updateResult(), this.#n),
					)
				}
				#x(e) {
					this.#b()
					let t = this.#s.fetch(this.options, e)
					return e?.throwOnError || (t = t.catch(l.noop)), t
				}
				#y() {
					this.#g()
					let e = (0, l.resolveStaleTime)(this.options.staleTime, this.#s)
					if (l.isServer || this.#n.isStale || !(0, l.isValidTimeout)(e)) return
					let t = (0, l.timeUntilStale)(this.#n.dataUpdatedAt, e)
					this.#u = setTimeout(() => {
						this.#n.isStale || this.updateResult()
					}, t + 1)
				}
				#j() {
					return (
						("function" == typeof this.options.refetchInterval
							? this.options.refetchInterval(this.#s)
							: this.options.refetchInterval) ?? !1
					)
				}
				#k(e) {
					this.#v(),
						(this.#f = e),
						!l.isServer &&
							!1 !== (0, l.resolveEnabled)(this.options.enabled, this.#s) &&
							(0, l.isValidTimeout)(this.#f) &&
							0 !== this.#f &&
							(this.#h = setInterval(() => {
								;(this.options.refetchIntervalInBackground || r.focusManager.isFocused()) && this.#x()
							}, this.#f))
				}
				#m() {
					this.#y(), this.#k(this.#j())
				}
				#g() {
					this.#u && (clearTimeout(this.#u), (this.#u = void 0))
				}
				#v() {
					this.#h && (clearInterval(this.#h), (this.#h = void 0))
				}
				createResult(e, t) {
					let r,
						s = this.#s,
						n = this.options,
						o = this.#n,
						d = this.#i,
						f = this.#l,
						p = e !== s ? e.state : this.#a,
						{ state: x } = e,
						m = { ...x },
						g = !1
					if (t._optimisticResults) {
						let r = this.hasListeners(),
							i = !r && c(e, t),
							l = r && u(e, s, t, n)
						;(i || l) && (m = { ...m, ...(0, a.fetchState)(x.data, e.options) }),
							"isRestoring" === t._optimisticResults && (m.fetchStatus = "idle")
					}
					let { error: v, errorUpdatedAt: b, status: y } = m
					r = m.data
					let j = !1
					if (void 0 !== t.placeholderData && void 0 === r && "pending" === y) {
						let e
						o?.isPlaceholderData && t.placeholderData === f?.placeholderData
							? ((e = o.data), (j = !0))
							: (e =
									"function" == typeof t.placeholderData
										? t.placeholderData(this.#d?.state.data, this.#d)
										: t.placeholderData),
							void 0 !== e && ((y = "success"), (r = (0, l.replaceData)(o?.data, e, t)), (g = !0))
					}
					if (t.select && void 0 !== r && !j)
						if (o && r === d?.data && t.select === this.#o) r = this.#c
						else
							try {
								;(this.#o = t.select),
									(r = t.select(r)),
									(r = (0, l.replaceData)(o?.data, r, t)),
									(this.#c = r),
									(this.#t = null)
							} catch (e) {
								this.#t = e
							}
					this.#t && ((v = this.#t), (r = this.#c), (b = Date.now()), (y = "error"))
					let k = "fetching" === m.fetchStatus,
						w = "pending" === y,
						N = "error" === y,
						T = w && k,
						C = void 0 !== r,
						R = {
							status: y,
							fetchStatus: m.fetchStatus,
							isPending: w,
							isSuccess: "success" === y,
							isError: N,
							isInitialLoading: T,
							isLoading: T,
							data: r,
							dataUpdatedAt: m.dataUpdatedAt,
							error: v,
							errorUpdatedAt: b,
							failureCount: m.fetchFailureCount,
							failureReason: m.fetchFailureReason,
							errorUpdateCount: m.errorUpdateCount,
							isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
							isFetchedAfterMount:
								m.dataUpdateCount > p.dataUpdateCount || m.errorUpdateCount > p.errorUpdateCount,
							isFetching: k,
							isRefetching: k && !w,
							isLoadingError: N && !C,
							isPaused: "paused" === m.fetchStatus,
							isPlaceholderData: g,
							isRefetchError: N && C,
							isStale: h(e, t),
							refetch: this.refetch,
							promise: this.#r,
						}
					if (this.options.experimental_prefetchInRender) {
						let t = (e) => {
								"error" === R.status ? e.reject(R.error) : void 0 !== R.data && e.resolve(R.data)
							},
							r = () => {
								t((this.#r = R.promise = (0, i.pendingThenable)()))
							},
							a = this.#r
						switch (a.status) {
							case "pending":
								e.queryHash === s.queryHash && t(a)
								break
							case "fulfilled":
								;("error" === R.status || R.data !== a.value) && r()
								break
							case "rejected":
								;("error" !== R.status || R.error !== a.reason) && r()
						}
					}
					return R
				}
				updateResult() {
					let e = this.#n,
						t = this.createResult(this.#s, this.options)
					if (
						((this.#i = this.#s.state),
						(this.#l = this.options),
						void 0 !== this.#i.data && (this.#d = this.#s),
						(0, l.shallowEqualObjects)(t, e))
					)
						return
					this.#n = t
					let r = () => {
						if (!e) return !0
						let { notifyOnChangeProps: t } = this.options,
							r = "function" == typeof t ? t() : t
						if ("all" === r || (!r && !this.#p.size)) return !0
						let s = new Set(r ?? this.#p)
						return (
							this.options.throwOnError && s.add("error"),
							Object.keys(this.#n).some((t) => this.#n[t] !== e[t] && s.has(t))
						)
					}
					this.#w({ listeners: r() })
				}
				#b() {
					let e = this.#e.getQueryCache().build(this.#e, this.options)
					if (e === this.#s) return
					let t = this.#s
					;(this.#s = e),
						(this.#a = e.state),
						this.hasListeners() && (t?.removeObserver(this), e.addObserver(this))
				}
				onQueryUpdate() {
					this.updateResult(), this.hasListeners() && this.#m()
				}
				#w(e) {
					s.notifyManager.batch(() => {
						e.listeners &&
							this.listeners.forEach((e) => {
								e(this.#n)
							}),
							this.#e.getQueryCache().notify({ query: this.#s, type: "observerResultsUpdated" })
					})
				}
			}
		function c(e, t) {
			return (
				(!1 !== (0, l.resolveEnabled)(t.enabled, e) &&
					void 0 === e.state.data &&
					("error" !== e.state.status || !1 !== t.retryOnMount)) ||
				(void 0 !== e.state.data && d(e, t, t.refetchOnMount))
			)
		}
		function d(e, t, r) {
			if (!1 !== (0, l.resolveEnabled)(t.enabled, e)) {
				let s = "function" == typeof r ? r(e) : r
				return "always" === s || (!1 !== s && h(e, t))
			}
			return !1
		}
		function u(e, t, r, s) {
			return (
				(e !== t || !1 === (0, l.resolveEnabled)(s.enabled, e)) &&
				(!r.suspense || "error" !== e.state.status) &&
				h(e, r)
			)
		}
		function h(e, t) {
			return (
				!1 !== (0, l.resolveEnabled)(t.enabled, e) && e.isStaleByTime((0, l.resolveStaleTime)(t.staleTime, e))
			)
		}
		e.i(53378)
		var f = e.i(10008),
			p = e.i(61239)
		e.i(8026)
		var x = f.createContext(
				((t = !1),
				{
					clearReset: () => {
						t = !1
					},
					reset: () => {
						t = !0
					},
					isReset: () => t,
				}),
			),
			m = f.createContext(!1)
		m.Provider
		var g = (e, t, r) =>
			t.fetchOptimistic(e).catch(() => {
				r.clearReset()
			})
		function v(e, t) {
			return (function (e, t, r) {
				let a,
					n = (0, p.useQueryClient)(r),
					i = f.useContext(m),
					o = f.useContext(x),
					c = n.defaultQueryOptions(e)
				n.getDefaultOptions().queries?._experimental_beforeQuery?.(c),
					(c._optimisticResults = i ? "isRestoring" : "optimistic"),
					(a = c.staleTime),
					c.suspense &&
						((c.staleTime =
							"function" == typeof a ? (...e) => Math.max(a(...e), 1e3) : Math.max(a ?? 1e3, 1e3)),
						"number" == typeof c.gcTime && (c.gcTime = Math.max(c.gcTime, 1e3))),
					(c.suspense || c.throwOnError || c.experimental_prefetchInRender) &&
						!o.isReset() &&
						(c.retryOnMount = !1),
					f.useEffect(() => {
						o.clearReset()
					}, [o])
				let d = !n.getQueryCache().get(c.queryHash),
					[u] = f.useState(() => new t(n, c)),
					h = u.getOptimisticResult(c),
					v = !i && !1 !== e.subscribed
				if (
					(f.useSyncExternalStore(
						f.useCallback(
							(e) => {
								let t = v ? u.subscribe(s.notifyManager.batchCalls(e)) : l.noop
								return u.updateResult(), t
							},
							[u, v],
						),
						() => u.getCurrentResult(),
						() => u.getCurrentResult(),
					),
					f.useEffect(() => {
						u.setOptions(c)
					}, [c, u]),
					c?.suspense && h.isPending)
				)
					throw g(c, u, o)
				if (
					(({ result: e, errorResetBoundary: t, throwOnError: r, query: s, suspense: a }) =>
						e.isError &&
						!t.isReset() &&
						!e.isFetching &&
						s &&
						((a && void 0 === e.data) || (0, l.shouldThrowError)(r, [e.error, s])))({
						result: h,
						errorResetBoundary: o,
						throwOnError: c.throwOnError,
						query: n.getQueryCache().get(c.queryHash),
						suspense: c.suspense,
					})
				)
					throw h.error
				if (
					(n.getDefaultOptions().queries?._experimental_afterQuery?.(c, h),
					c.experimental_prefetchInRender && !l.isServer && h.isLoading && h.isFetching && !i)
				) {
					let e = d ? g(c, u, o) : n.getQueryCache().get(c.queryHash)?.promise
					e?.catch(l.noop).finally(() => {
						u.updateResult()
					})
				}
				return c.notifyOnChangeProps ? h : u.trackResult(h)
			})(e, o, t)
		}
		e.s(["useQuery", () => v], 83907)
		let b = Error("Cannot find module './api.js'")
		throw ((b.code = "MODULE_NOT_FOUND"), b)
	},
	80757,
	(e, t, r) => {
		"use strict"
		Object.defineProperty(r, "__esModule", { value: !0 })
		var s = {
			callServer: function () {
				return n.callServer
			},
			createServerReference: function () {
				return l.createServerReference
			},
			findSourceMapURL: function () {
				return i.findSourceMapURL
			},
		}
		for (var a in s) Object.defineProperty(r, a, { enumerable: !0, get: s[a] })
		let n = e.r(49412),
			i = e.r(504),
			l = e.r(87362)
	},
	16464,
	67346,
	(e) => {
		"use strict"
		var t = e.i(8026),
			r = e.i(16853),
			s = e.i(94237),
			a = e.i(46030)
		let n = (0, s.cva)(
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
		function i({ className: e, variant: s, asChild: i = !1, ...l }) {
			let o = i ? r.Slot : "span"
			return (0, t.jsx)(o, { "data-slot": "badge", className: (0, a.cn)(n({ variant: s }), e), ...l })
		}
		function l({ className: e, type: r, ...s }) {
			return (0, t.jsx)("input", {
				type: r,
				"data-slot": "input",
				className: (0, a.cn)(
					"file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-sm px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
					"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
					"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
					"border border-input bg-input",
					e,
				),
				...s,
			})
		}
		e.s(["Badge", () => i], 16464), e.s(["Input", () => l], 67346)
	},
	99171,
	(e, t, r) => {
		;((r, s) => {
			if ("function" == typeof define && define.amd) {
				let t
				void 0 !== (t = s()) && e.v(t)
			} else t.exports ? (t.exports = s()) : (r.fuzzysort = s())
		})(e.e, (e) => {
			"use strict"
			var t,
				r,
				s,
				a,
				n = (e) => {
					"number" == typeof e ? (e = "" + e) : "string" != typeof e && (e = "")
					var t = g(e)
					return o(e, { _targetLower: t._lower, _targetLowerCodes: t.lowerCodes, _bitflags: t.bitflags })
				}
			class i {
				get indexes() {
					return this._indexes.slice(0, this._indexes.len).sort((e, t) => e - t)
				}
				set indexes(e) {
					return (this._indexes = e)
				}
				highlight(e, t) {
					return ((e, t = "<b>", r = "</b>") => {
						for (
							var s = "function" == typeof t ? t : void 0,
								a = e.target,
								n = a.length,
								i = e.indexes,
								l = "",
								o = 0,
								c = 0,
								d = !1,
								u = [],
								h = 0;
							h < n;
							++h
						) {
							var f = a[h]
							if (i[c] === h) {
								if ((++c, d || ((d = !0), s ? (u.push(l), (l = "")) : (l += t)), c === i.length)) {
									s
										? ((l += f), u.push(s(l, o++)), (l = ""), u.push(a.substr(h + 1)))
										: (l += f + r + a.substr(h + 1))
									break
								}
							} else d && ((d = !1), s ? (u.push(s(l, o++)), (l = "")) : (l += r))
							l += f
						}
						return s ? u : l
					})(this, e, t)
				}
				get score() {
					return c(this._score)
				}
				set score(e) {
					this._score = d(e)
				}
			}
			class l extends Array {
				get score() {
					return c(this._score)
				}
				set score(e) {
					this._score = d(e)
				}
			}
			var o = (e, t) => {
					let r = new i()
					return (
						(r.target = e),
						(r.obj = t.obj ?? E),
						(r._score = t._score ?? M),
						(r._indexes = t._indexes ?? []),
						(r._targetLower = t._targetLower ?? ""),
						(r._targetLowerCodes = t._targetLowerCodes ?? E),
						(r._nextBeginningIndexes = t._nextBeginningIndexes ?? E),
						(r._bitflags = t._bitflags ?? 0),
						r
					)
				},
				c = (e) => (e === M ? 0 : e > 1 ? e : Math.E ** -(((-e + 1) ** 0.04307 - 1) * 2)),
				d = (e) => (0 === e ? M : e > 1 ? e : 1 - Math.pow(-(Math.log(e) / 2) + 1, 1 / 0.04307)),
				u = (e) => {
					"number" == typeof e ? (e = "" + e) : "string" != typeof e && (e = "")
					var t = g((e = e.trim())),
						r = []
					if (t.containsSpace) {
						var s = e.split(/\s+/)
						s = [...new Set(s)]
						for (var a = 0; a < s.length; a++)
							if ("" !== s[a]) {
								var n = g(s[a])
								r.push({ lowerCodes: n.lowerCodes, _lower: s[a].toLowerCase(), containsSpace: !1 })
							}
					}
					return {
						lowerCodes: t.lowerCodes,
						_lower: t._lower,
						containsSpace: t.containsSpace,
						bitflags: t.bitflags,
						spaceSearches: r,
					}
				},
				h = (e) => {
					if (e.length > 999) return n(e)
					var t = b.get(e)
					return void 0 !== t || ((t = n(e)), b.set(e, t)), t
				},
				f = (e) => {
					if (e.length > 999) return u(e)
					var t = y.get(e)
					return void 0 !== t || ((t = u(e)), y.set(e, t)), t
				},
				p = (e, t, r = !1, s = !1) => {
					if (!1 === r && e.containsSpace) return x(e, t, s)
					for (
						var a = e._lower,
							n = e.lowerCodes,
							l = n[0],
							o = t._targetLowerCodes,
							c = n.length,
							d = o.length,
							u = 0,
							h = 0,
							f = 0;
						;

					) {
						var p = l === o[h]
						if (p) {
							if (((j[f++] = h), ++u === c)) break
							l = n[u]
						}
						if (++h >= d) return E
					}
					var u = 0,
						m = !1,
						g = 0,
						b = t._nextBeginningIndexes
					b === E && (b = t._nextBeginningIndexes = v(t.target))
					var y = 0
					if ((h = 0 === j[0] ? 0 : b[j[0] - 1]) !== d)
						for (;;)
							if (h >= d) {
								if (u <= 0 || ++y > 200) break
								--u, (h = b[k[--g]])
							} else {
								var p = n[u] === o[h]
								if (p) {
									if (((k[g++] = h), ++u === c)) {
										m = !0
										break
									}
									++h
								} else h = b[h]
							}
					var w = c <= 1 ? -1 : t._targetLower.indexOf(a, j[0]),
						N = !!~w,
						T = !!N && (0 === w || t._nextBeginningIndexes[w - 1] === w)
					if (N && !T) {
						for (var C = 0; C < b.length; C = b[C])
							if (!(C <= w)) {
								for (var R = 0; R < c && n[R] === t._targetLowerCodes[C + R]; R++);
								if (R === c) {
									;(w = C), (T = !0)
									break
								}
							}
					}
					var S = (e) => {
						for (var t = 0, r = 0, s = 1; s < c; ++s) e[s] - e[s - 1] != 1 && ((t -= e[s]), ++r)
						if (
							((t -= (12 + (e[c - 1] - e[0] - (c - 1))) * r), 0 !== e[0] && (t -= e[0] * e[0] * 0.2), m)
						) {
							for (var a = 1, s = b[0]; s < d; s = b[s]) ++a
							a > 24 && (t *= (a - 24) * 10)
						} else t *= 1e3
						return (
							(t -= (d - c) / 2), N && (t /= 1 + c * c * 1), T && (t /= 1 + c * c * 1), (t -= (d - c) / 2)
						)
					}
					if (m)
						if (T) {
							for (var C = 0; C < c; ++C) j[C] = w + C
							var _ = j,
								I = S(j)
						} else
							var _ = k,
								I = S(k)
					else {
						if (N) for (var C = 0; C < c; ++C) j[C] = w + C
						var _ = j,
							I = S(_)
					}
					t._score = I
					for (var C = 0; C < c; ++C) t._indexes[C] = _[C]
					t._indexes.len = c
					let M = new i()
					return (M.target = t.target), (M._score = t._score), (M._indexes = t._indexes), M
				},
				x = (e, t, r) => {
					for (
						var s = new Set(),
							a = 0,
							n = E,
							i = 0,
							l = e.spaceSearches,
							o = l.length,
							c = 0,
							d = () => {
								for (let e = c - 1; e >= 0; e--) t._nextBeginningIndexes[w[2 * e + 0]] = w[2 * e + 1]
							},
							u = !1,
							h = 0;
						h < o;
						++h
					) {
						if (((T[h] = M), (n = p(l[h], t)), r)) {
							if (n === E) continue
							u = !0
						} else if (n === E) return d(), E
						if (h !== o - 1) {
							var f = n._indexes,
								x = !0
							for (let e = 0; e < f.len - 1; e++)
								if (f[e + 1] - f[e] != 1) {
									x = !1
									break
								}
							if (x) {
								var m = f[f.len - 1] + 1,
									g = t._nextBeginningIndexes[m - 1]
								for (let e = m - 1; e >= 0 && g === t._nextBeginningIndexes[e]; e--)
									(t._nextBeginningIndexes[e] = m), (w[2 * c + 0] = e), (w[2 * c + 1] = g), c++
							}
						}
						;(a += n._score / o),
							(T[h] = n._score / o),
							n._indexes[0] < i && (a -= (i - n._indexes[0]) * 2),
							(i = n._indexes[0])
						for (var v = 0; v < n._indexes.len; ++v) s.add(n._indexes[v])
					}
					if (r && !u) return E
					d()
					var b = p(e, t, !0)
					if (b !== E && b._score > a) {
						if (r) for (var h = 0; h < o; ++h) T[h] = b._score / o
						return b
					}
					r && (n = t), (n._score = a)
					var h = 0
					for (let e of s) n._indexes[h++] = e
					return (n._indexes.len = h), n
				},
				m = (e) => e.replace(/\p{Script=Latin}+/gu, (e) => e.normalize("NFD")).replace(/[\u0300-\u036f]/g, ""),
				g = (e) => {
					for (var t = (e = m(e)).length, r = e.toLowerCase(), s = [], a = 0, n = !1, i = 0; i < t; ++i) {
						var l = (s[i] = r.charCodeAt(i))
						if (32 === l) {
							n = !0
							continue
						}
						a |= 1 << (l >= 97 && l <= 122 ? l - 97 : l >= 48 && l <= 57 ? 26 : l <= 127 ? 30 : 31)
					}
					return { lowerCodes: s, bitflags: a, containsSpace: n, _lower: r }
				},
				v = (e) => {
					for (
						var t = (e = m(e)).length,
							r = ((e) => {
								for (var t = e.length, r = [], s = 0, a = !1, n = !1, i = 0; i < t; ++i) {
									var l = e.charCodeAt(i),
										o = l >= 65 && l <= 90,
										c = o || (l >= 97 && l <= 122) || (l >= 48 && l <= 57),
										d = (o && !a) || !n || !c
									;(a = o), (n = c), d && (r[s++] = i)
								}
								return r
							})(e),
							s = [],
							a = r[0],
							n = 0,
							i = 0;
						i < t;
						++i
					)
						a > i ? (s[i] = a) : ((a = r[++n]), (s[i] = void 0 === a ? t : a))
					return s
				},
				b = new Map(),
				y = new Map(),
				j = [],
				k = [],
				w = [],
				N = [],
				T = [],
				C = [],
				R = [],
				S = (e, t) => {
					var r = e[t]
					if (void 0 !== r) return r
					if ("function" == typeof t) return t(e)
					var s = t
					Array.isArray(t) || (s = t.split("."))
					for (var a = s.length, n = -1; e && ++n < a; ) e = e[s[n]]
					return e
				},
				_ = (e) => "object" == typeof e && "number" == typeof e._bitflags,
				I = 1 / 0,
				M = -1 / 0,
				O = []
			O.total = 0
			var E = null,
				D = n(""),
				Q =
					((t = []),
					(r = 0),
					(s = {}),
					(a = (e) => {
						for (var s = 0, a = t[s], n = 1; n < r; ) {
							var i = n + 1
							;(s = n),
								i < r && t[i]._score < t[n]._score && (s = i),
								(t[(s - 1) >> 1] = t[s]),
								(n = 1 + (s << 1))
						}
						for (var l = (s - 1) >> 1; s > 0 && a._score < t[l]._score; l = ((s = l) - 1) >> 1) t[s] = t[l]
						t[s] = a
					}),
					(s.add = (e) => {
						var s = r
						t[r++] = e
						for (var a = (s - 1) >> 1; s > 0 && e._score < t[a]._score; a = ((s = a) - 1) >> 1) t[s] = t[a]
						t[s] = e
					}),
					(s.poll = (e) => {
						if (0 !== r) {
							var s = t[0]
							return (t[0] = t[--r]), a(), s
						}
					}),
					(s.peek = (e) => {
						if (0 !== r) return t[0]
					}),
					(s.replaceTop = (e) => {
						;(t[0] = e), a()
					}),
					s)
			return {
				single: (e, t) => {
					if (!e || !t) return E
					var r = f(e)
					_(t) || (t = h(t))
					var s = r.bitflags
					return (s & t._bitflags) !== s ? E : p(r, t)
				},
				go: (e, t, r) => {
					if (!e)
						return r?.all
							? ((e, t) => {
									var r = []
									r.total = e.length
									var s = t?.limit || I
									if (t?.key)
										for (var a = 0; a < e.length; a++) {
											var n = e[a],
												i = S(n, t.key)
											if (i != E) {
												_(i) || (i = h(i))
												var c = o(i.target, { _score: i._score, obj: n })
												if ((r.push(c), r.length >= s)) break
											}
										}
									else if (t?.keys)
										for (var a = 0; a < e.length; a++) {
											for (
												var n = e[a], d = new l(t.keys.length), u = t.keys.length - 1;
												u >= 0;
												--u
											) {
												var i = S(n, t.keys[u])
												if (!i) {
													d[u] = D
													continue
												}
												_(i) || (i = h(i)), (i._score = M), (i._indexes.len = 0), (d[u] = i)
											}
											if (((d.obj = n), (d._score = M), r.push(d), r.length >= s)) break
										}
									else
										for (var a = 0; a < e.length; a++) {
											var i = e[a]
											if (
												i != E &&
												(_(i) || (i = h(i)),
												(i._score = M),
												(i._indexes.len = 0),
												r.push(i),
												r.length >= s)
											)
												break
										}
									return r
								})(t, r)
							: O
					var s = f(e),
						a = s.bitflags,
						n = s.containsSpace,
						i = d(r?.threshold || 0),
						c = r?.limit || I,
						u = 0,
						x = 0,
						m = t.length
					function g(e) {
						u < c ? (Q.add(e), ++u) : (++x, e._score > Q.peek()._score && Q.replaceTop(e))
					}
					if (r?.key)
						for (var v = r.key, b = 0; b < m; ++b) {
							var y = t[b],
								j = S(y, v)
							if (j && (_(j) || (j = h(j)), (a & j._bitflags) === a)) {
								var k = p(s, j)
								k !== E && (k._score < i || ((k.obj = y), g(k)))
							}
						}
					else if (r?.keys) {
						var w = r.keys,
							F = w.length
						e: for (var b = 0; b < m; ++b) {
							for (var y = t[b], A = 0, z = 0; z < F; ++z) {
								var v = w[z],
									j = S(y, v)
								if (!j) {
									C[z] = D
									continue
								}
								_(j) || (j = h(j)), (C[z] = j), (A |= j._bitflags)
							}
							if ((a & A) === a) {
								if (n) for (let e = 0; e < s.spaceSearches.length; e++) N[e] = M
								for (var z = 0; z < F; ++z) {
									if ((j = C[z]) === D || ((R[z] = p(s, j, !1, n)), R[z] === E)) {
										R[z] = D
										continue
									}
									if (n)
										for (let e = 0; e < s.spaceSearches.length; e++) {
											if (T[e] > -1e3 && N[e] > M) {
												var U = (N[e] + T[e]) / 4
												U > N[e] && (N[e] = U)
											}
											T[e] > N[e] && (N[e] = T[e])
										}
								}
								if (n) {
									for (let e = 0; e < s.spaceSearches.length; e++) if (N[e] === M) continue e
								} else {
									var L = !1
									for (let e = 0; e < F; e++)
										if (R[e]._score !== M) {
											L = !0
											break
										}
									if (!L) continue
								}
								var P = new l(F)
								for (let e = 0; e < F; e++) P[e] = R[e]
								if (n) {
									var $ = 0
									for (let e = 0; e < s.spaceSearches.length; e++) $ += N[e]
								} else {
									var $ = M
									for (let e = 0; e < F; e++) {
										var k = P[e]
										if (k._score > -1e3 && $ > M) {
											var U = ($ + k._score) / 4
											U > $ && ($ = U)
										}
										k._score > $ && ($ = k._score)
									}
								}
								if (((P.obj = y), (P._score = $), r?.scoreFn)) {
									if (!($ = r.scoreFn(P))) continue
									P._score = $ = d($)
								}
								$ < i || g(P)
							}
						}
					} else
						for (var b = 0; b < m; ++b) {
							var j = t[b]
							if (j && (_(j) || (j = h(j)), (a & j._bitflags) === a)) {
								var k = p(s, j)
								k !== E && (k._score < i || g(k))
							}
						}
					if (0 === u) return O
					for (var q = Array(u), b = u - 1; b >= 0; --b) q[b] = Q.poll()
					return (q.total = u + x), q
				},
				prepare: n,
				cleanup: () => {
					b.clear(), y.clear()
				},
			}
		})
	},
	57392,
	(e) => {
		"use strict"
		var t = e.i(6609)
		e.s(["X", () => t.default])
	},
	68418,
	(e) => {
		"use strict"
		let t = (0, e.i(13699).default)("chevrons-up-down", [
			["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
			["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }],
		])
		e.s(["ChevronsUpDown", () => t], 68418)
	},
	72666,
	44501,
	47110,
	(e) => {
		"use strict"
		e.i(46748)
		var t = e.i(16464)
		e.i(71330), e.i(60251)
		var r = e.i(62785)
		e.i(72583), e.i(52661), e.i(710), e.i(7675), e.i(67346), e.i(64514)
		var s = e.i(8026),
			a = e.i(10008),
			n = e.i(94237),
			i = e.i(99171),
			l = e.i(74310),
			o = e.i(57392),
			c = e.i(68418),
			d = e.i(46030),
			u = e.i(91376)
		let h = (0, n.cva)("px-2 py-1", {
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
			f = a.forwardRef(
				(
					{
						options: e,
						onValueChange: n,
						variant: f,
						value: p,
						defaultValue: x = [],
						placeholder: m = "Select options",
						maxCount: g = 3,
						modalPopover: v = !1,
						popoverAutoWidth: b = !1,
						footer: y,
						className: j,
						...k
					},
					w,
				) => {
					let [N, T] = a.useState(x),
						[C, R] = a.useState(!1),
						S = void 0 !== p,
						_ = S ? p : N,
						I = a.useCallback(
							(e) => {
								S || T(e), n(e)
							},
							[S, n],
						),
						M = (e) => {
							I(_.includes(e) ? _.filter((t) => t !== e) : [..._, e])
						},
						O = a.useRef(new Map()),
						E = a.useRef(""),
						D = a.useCallback(
							(t, r) => {
								if (E.current !== r)
									for (let {
										obj: { value: t },
										score: s,
									} of ((E.current = r), O.current.clear(), i.default.go(r, e, { key: "label" })))
										O.current.set(t, s)
								return "all" === t ? 0.01 * (O.current.size > 1) : (O.current.get(t) ?? 0)
							},
							[e],
						)
					return (0, s.jsxs)(u.Popover, {
						open: C,
						onOpenChange: R,
						modal: v,
						children: [
							(0, s.jsx)(u.PopoverTrigger, {
								asChild: !0,
								children: (0, s.jsx)("div", {
									ref: w,
									...k,
									onClick: () => {
										R((e) => !e)
									},
									className: (0, d.cn)(
										"flex w-full rounded-sm min-h-9 h-auto items-center justify-between [&_svg]:pointer-events-auto",
										"font-medium border border-input bg-input hover:opacity-80 cursor-pointer",
										j,
									),
									children:
										_.length > 0
											? (0, s.jsx)("div", {
													className: "flex justify-between items-center w-full",
													children: (0, s.jsxs)("div", {
														className: "flex flex-wrap items-center gap-1 p-1",
														children: [
															_.slice(0, g).map((r) =>
																(0, s.jsx)(
																	t.Badge,
																	{
																		className: (0, d.cn)(h({ variant: f })),
																		children: (0, s.jsxs)("div", {
																			className: "flex items-center gap-1.5",
																			children: [
																				(0, s.jsx)("div", {
																					children: e.find(
																						(e) => e.value === r,
																					)?.label,
																				}),
																				(0, s.jsx)("div", {
																					onClick: (e) => {
																						e.stopPropagation(), M(r)
																					},
																					className: "cursor-pointer",
																					children: (0, s.jsx)(o.X, {
																						className:
																							"size-4 rounded-full p-0.5 bg-accent/5",
																					}),
																				}),
																			],
																		}),
																	},
																	r,
																),
															),
															_.length > g &&
																(0, s.jsx)(t.Badge, {
																	className: (0, d.cn)(
																		"text-ring",
																		h({ variant: f }),
																	),
																	children: (0, s.jsxs)("div", {
																		className: "flex items-center gap-1.5",
																		children: [
																			(0, s.jsx)("div", {
																				children: `+ ${_.length - g} more`,
																			}),
																			(0, s.jsx)("div", {
																				onClick: (e) => {
																					e.stopPropagation(),
																						I(_.slice(0, g))
																				},
																				className: "cursor-pointer",
																				children: (0, s.jsx)(o.X, {
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
											: (0, s.jsxs)("div", {
													className: "flex items-center justify-between w-full mx-auto",
													children: [
														(0, s.jsx)("span", {
															className: "text-muted-foreground mx-3",
															children: m,
														}),
														(0, s.jsx)(c.ChevronsUpDown, {
															className: "opacity-50 size-4 mx-2",
														}),
													],
												}),
								}),
							}),
							(0, s.jsxs)(u.PopoverContent, {
								className: (0, d.cn)("p-0", b ? "w-auto" : "w-[var(--radix-popover-trigger-width)]"),
								align: "start",
								onEscapeKeyDown: () => R(!1),
								children: [
									(0, s.jsxs)(r.Command, {
										filter: D,
										children: [
											(0, s.jsx)(r.CommandInput, {
												placeholder: "Search",
												onKeyDown: (e) => {
													if ("Enter" === e.key) R(!0)
													else if ("Backspace" === e.key && !e.currentTarget.value) {
														if (!_.length) return
														I(_.slice(0, -1))
													}
												},
											}),
											(0, s.jsxs)(r.CommandList, {
												children: [
													(0, s.jsx)(r.CommandEmpty, { children: "No results found." }),
													(0, s.jsxs)(r.CommandGroup, {
														children: [
															e.map((e) =>
																(0, s.jsxs)(
																	r.CommandItem,
																	{
																		value: e.value,
																		onSelect: () => M(e.value),
																		className: "flex items-center justify-between",
																		children: [
																			(0, s.jsx)("span", { children: e.label }),
																			(0, s.jsx)(l.Check, {
																				className: (0, d.cn)(
																					"text-accent group-data-[selected=true]:text-accent-foreground size-4",
																					{
																						"opacity-0": !_.includes(
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
															(0, s.jsx)(
																r.CommandItem,
																{
																	value: "all",
																	onSelect: () => {
																		let e = Array.from(O.current.keys())
																		_.length === e.length &&
																		_.sort().join(",") === e.sort().join(",")
																			? I([])
																			: I(e)
																	},
																	className: "flex items-center justify-between",
																	children: (0, s.jsx)("span", {
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
									y && (0, s.jsx)("div", { className: "border-t p-2", children: y }),
								],
							}),
						],
					})
				},
			)
		function p({ className: e, ...t }) {
			return (0, s.jsx)("textarea", {
				"data-slot": "textarea",
				className: (0, d.cn)(
					"placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-sm px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
					"border border-input bg-input",
					e,
				),
				...t,
			})
		}
		;(f.displayName = "MultiSelect"),
			e.s(["MultiSelect", 0, f], 44501),
			e.i(92817),
			e.i(83694),
			e.i(66781),
			e.i(9486),
			e.i(81186),
			e.i(77853),
			e.i(94725),
			e.s(["Textarea", () => p], 47110),
			e.i(23706),
			e.s([], 72666)
	},
	52677,
	(e) => {
		"use strict"
		let t = (0, e.i(13699).default)("loader-circle", [
			["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
		])
		e.s(["LoaderCircle", () => t], 52677)
	},
	72714,
	(e) => {
		"use strict"
		let t = (0, e.i(13699).default)("file-text", [
			["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
			["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
			["path", { d: "M10 9H8", key: "b1mrlr" }],
			["path", { d: "M16 13H8", key: "t4e002" }],
			["path", { d: "M16 17H8", key: "z1uh3a" }],
		])
		e.s(["FileText", () => t], 72714)
	},
	83452,
	(e) => {
		"use strict"
		let t = (0, e.i(13699).default)("copy", [
			["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
			["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }],
		])
		e.s(["Copy", () => t], 83452)
	},
	35200,
	(e) => {
		"use strict"
		let t = (0, e.i(13699).default)("list", [
			["path", { d: "M3 12h.01", key: "nlz23k" }],
			["path", { d: "M3 18h.01", key: "1tta3j" }],
			["path", { d: "M3 6h.01", key: "1rqtza" }],
			["path", { d: "M8 12h13", key: "1za7za" }],
			["path", { d: "M8 18h13", key: "1lx6n3" }],
			["path", { d: "M8 6h13", key: "ik3vkj" }],
		])
		e.s(["List", () => t], 35200)
	},
	62929,
	(e) => {
		"use strict"
		let t = (0, e.i(13699).default)("layers", [
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
		e.s(["Layers", () => t], 62929)
	},
	61278,
	(e) => {
		"use strict"
		let t = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
		e.s([
			"formatCurrency",
			0,
			(e) => t.format(e),
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
				let t = Math.floor(e / 1e3),
					r = Math.floor(t / 3600),
					s = Math.floor((t % 3600) / 60)
						.toString()
						.padStart(2, "0"),
					a = (t % 60).toString().padStart(2, "0")
				return `${r}:${s}:${a}`
			},
			"formatTokens",
			0,
			(e) => {
				if (e < 1e3) return e.toString()
				if (e < 1e6) {
					let t = Math.round(e / 1e3)
					return t >= 1e3 ? "1.0M" : `${t}k`
				}
				if (e < 1e9) {
					let t = Math.round(e / 1e5) / 10
					return t >= 1e3 ? "1.0B" : `${t.toFixed(1)}M`
				}
				return `${(e / 1e9).toFixed(1)}B`
			},
			"formatToolUsageSuccessRate",
			0,
			(e) => (0 === e.attempts ? "0%" : `${Math.round(((e.attempts - e.failures) / e.attempts) * 100)}%`),
		])
	},
	41106,
	(e) => {
		"use strict"
		var t = e.i(8026),
			r = e.i(10008),
			s = e.i(13975),
			a = e.i(52677),
			n = e.i(72714),
			i = e.i(83452),
			l = e.i(74310),
			o = e.i(13699)
		let c = (0, o.default)("circle-stop", [
			["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
			["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1", key: "1ssd4o" }],
		])
		var d = e.i(35200),
			u = e.i(62929),
			h = e.i(61278),
			f = e.i(83907),
			p = e.i(76146)
		e.i(46527)
		var x = e.i(39692),
			m = e.i(80757)
		let g = (0, m.createServerReference)(
				"40be6f057ffec13e36ba29501f79ae9ccc2d86211e",
				m.callServer,
				void 0,
				m.findSourceMapURL,
				"getHeartbeat",
			),
			v = (0, m.createServerReference)(
				"4070a55b951f39bd9d53ebcf2f6d94fd1bbb5838f5",
				m.callServer,
				void 0,
				m.findSourceMapURL,
				"getRunners",
			),
			b = (0, m.createServerReference)(
				"40ed47cac756554cc71da4646c2ba5a91b0014a176",
				m.callServer,
				void 0,
				m.findSourceMapURL,
				"getTasks",
			),
			y = (0, m.createServerReference)(
				"408fb3c8d4d026bc052c963abd69ad5196dca0f120",
				m.callServer,
				void 0,
				m.findSourceMapURL,
				"killRun",
			)
		e.i(72666)
		var j = e.i(77853),
			k = e.i(23706),
			w = e.i(72583),
			N = e.i(92817),
			T = e.i(71330),
			C = e.i(46748)
		let R = (0, o.default)("circle-check", [
				["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
				["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
			]),
			S = (0, o.default)("circle-dashed", [
				["path", { d: "M10.1 2.182a10 10 0 0 1 3.8 0", key: "5ilxe3" }],
				["path", { d: "M13.9 21.818a10 10 0 0 1-3.8 0", key: "11zvb9" }],
				["path", { d: "M17.609 3.721a10 10 0 0 1 2.69 2.7", key: "1iw5b2" }],
				["path", { d: "M2.182 13.9a10 10 0 0 1 0-3.8", key: "c0bmvh" }],
				["path", { d: "M20.279 17.609a10 10 0 0 1-2.7 2.69", key: "1ruxm7" }],
				["path", { d: "M21.818 10.1a10 10 0 0 1 0 3.8", key: "qkgqxc" }],
				["path", { d: "M3.721 6.391a10 10 0 0 1 2.7-2.69", key: "1mcia2" }],
				["path", { d: "M6.391 20.279a10 10 0 0 1-2.69-2.7", key: "1fvljs" }],
			]),
			_ = (0, o.default)("circle-slash", [
				["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
				["line", { x1: "9", x2: "15", y1: "15", y2: "9", key: "1dfufj" }],
			]),
			I = ({ task: e, running: r }) =>
				!1 === e.passed
					? (0, t.jsx)(_, { className: "size-4 text-destructive" })
					: !0 === e.passed
						? (0, t.jsx)(R, { className: "size-4 text-green-500" })
						: r
							? (0, t.jsx)(a.LoaderCircle, { className: "size-4 animate-spin" })
							: (0, t.jsx)(S, { className: "size-4" }),
			M = (0, o.default)("link-2", [
				["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
				["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
				["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
			]),
			O = (0, o.default)("link-2-off", [
				["path", { d: "M9 17H7A5 5 0 0 1 7 7", key: "10o201" }],
				["path", { d: "M15 7h2a5 5 0 0 1 4 8", key: "1d3206" }],
				["line", { x1: "8", x2: "12", y1: "12", y2: "12", key: "rvw6j4" }],
				["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
			])
		var E = e.i(46030)
		function D({ status: e }) {
			return "connected" === e
				? (0, t.jsx)(M, { className: "size-4 text-green-500" })
				: (0, t.jsx)(O, {
						className: (0, E.cn)("size-4", "waiting" === e ? "text-amber-500" : "text-rose-500"),
					})
		}
		let Q = ({ runStatus: { sseStatus: e, heartbeat: r, runners: s = [] }, isComplete: a = !1 }) =>
			a
				? (0, t.jsxs)(k.Tooltip, {
						children: [
							(0, t.jsx)(k.TooltipTrigger, {
								asChild: !0,
								children: (0, t.jsx)("div", {
									className: "flex items-center gap-1 cursor-default text-muted-foreground",
									children: (0, t.jsx)(R, { className: "size-4" }),
								}),
							}),
							(0, t.jsx)(k.TooltipContent, {
								side: "bottom",
								className: "font-mono text-xs",
								children: "Run complete",
							}),
						],
					})
				: (0, t.jsxs)(k.Tooltip, {
						children: [
							(0, t.jsx)(k.TooltipTrigger, {
								asChild: !0,
								children: (0, t.jsxs)("div", {
									className: "flex items-center gap-2 cursor-default text-xs font-mono",
									children: [
										(0, t.jsx)(D, { status: e }),
										(0, t.jsx)("span", {
											className: r ? "text-green-500" : "text-rose-500",
											children: r ?? "-",
										}),
										(0, t.jsx)("span", {
											className: s.length > 0 ? "text-green-500" : "text-rose-500",
											children: s.length > 0 ? `${s.length}r` : "0r",
										}),
									],
								}),
							}),
							(0, t.jsx)(k.TooltipContent, {
								side: "bottom",
								className: "font-mono text-xs max-w-md",
								children: (0, t.jsxs)("div", {
									className: "space-y-1",
									children: [
										(0, t.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [
												(0, t.jsx)(D, { status: e }),
												(0, t.jsxs)("span", { children: ["Task Stream: ", e] }),
											],
										}),
										(0, t.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [
												(0, t.jsx)("span", {
													className: r ? "text-green-500" : "text-rose-500",
													children: "●",
												}),
												(0, t.jsxs)("span", { children: ["Task Controller: ", r ?? "dead"] }),
											],
										}),
										(0, t.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [
												(0, t.jsx)("span", {
													className: s.length > 0 ? "text-green-500" : "text-rose-500",
													children: "●",
												}),
												(0, t.jsxs)("span", {
													children: ["Task Runners: ", s.length > 0 ? s.length : "none"],
												}),
											],
										}),
										s.length > 0 &&
											(0, t.jsx)("div", {
												className:
													"mt-2 pt-2 border-t border-border text-muted-foreground space-y-0.5",
												children: s.map((e) => (0, t.jsx)("div", { children: e }, e)),
											}),
									],
								}),
							}),
						],
					})
		function F(e) {
			return e
				.split("_")
				.map((e) => e[0]?.toUpperCase() ?? "")
				.join("")
		}
		let A = [
			{ pattern: /\|\s*(INFO)\s*\|/g, className: "text-green-400", wrapGroup: 1 },
			{ pattern: /\|\s*(WARN|WARNING)\s*\|/g, className: "text-yellow-400", wrapGroup: 1 },
			{ pattern: /\|\s*(ERROR)\s*\|/g, className: "text-red-400 font-semibold", wrapGroup: 1 },
			{ pattern: /\|\s*(DEBUG)\s*\|/g, className: "text-gray-400", wrapGroup: 1 },
			{
				pattern: /(taskCreated|taskFocused|taskStarted|taskCompleted|taskAborted|taskResumable)/g,
				className: "text-purple-400 font-medium",
			},
			{ pattern: /(taskToolFailed)/g, className: "text-red-400 font-bold" },
			{ pattern: /(Tool execution failed|tool.*failed|failed.*tool)/gi, className: "text-red-400" },
			{ pattern: /(EvalPass)/g, className: "text-green-400 font-bold" },
			{ pattern: /(EvalFail)/g, className: "text-red-400 font-bold" },
			{ pattern: /→/g, className: "text-cyan-400" },
			{ pattern: /"(tool)":\s*"([^"]+)"/g, className: "text-orange-400" },
			{ pattern: /"([^"]+)":/g, className: "text-sky-300" },
			{ pattern: /:\s*(true|false)/g, className: "text-amber-400", wrapGroup: 1 },
			{ pattern: /:\s*(-?\d+\.?\d*)/g, className: "text-emerald-400", wrapGroup: 1 },
		]
		function z({ run: e }) {
			var o
			let m,
				R,
				S,
				_,
				M = ((e) => {
					let [t, s] = (0, r.useState)(),
						[a, n] = (0, r.useState)(),
						i = (0, r.useRef)(new Map()),
						l = (0, r.useRef)(new Map()),
						o = (0, r.useRef)(new Map()),
						{ data: c } = (0, f.useQuery)({
							queryKey: ["getHeartbeat", e.id],
							queryFn: () => g(e.id),
							refetchInterval: 1e4,
						}),
						{ data: d } = (0, f.useQuery)({
							queryKey: ["getRunners", e.id],
							queryFn: () => v(e.id),
							refetchInterval: 1e4,
						}),
						{ data: u } = (0, f.useQuery)({
							queryKey: ["getTasks", e.id, t],
							queryFn: async () => b(e.id),
							placeholderData: p.keepPreviousData,
							refetchInterval: 3e4,
						})
					return {
						sseStatus: (function ({ url: e, withCredentials: t, onMessage: s }) {
							let a = (0, r.useRef)(null),
								n = (0, r.useRef)("waiting"),
								[i, l] = (0, r.useState)("waiting"),
								o = (0, r.useRef)(null),
								c = (0, r.useRef)(!1),
								d = (0, r.useCallback)((e) => s(e), [s]),
								u = (0, r.useCallback)(() => {
									o.current && (clearTimeout(o.current), (o.current = null)),
										a.current && (a.current.close(), (a.current = null))
								}, []),
								h = (0, r.useCallback)(() => {
									c.current ||
										(u(),
										(n.current = "waiting"),
										l("waiting"),
										(a.current = new EventSource(e, { withCredentials: t })),
										(a.current.onopen = () => {
											c.current || ((n.current = "connected"), l("connected"))
										}),
										(a.current.onmessage = (e) => {
											c.current || d(e)
										}),
										(a.current.onerror = () => {
											c.current ||
												((n.current = "error"),
												l("error"),
												u(),
												(o.current = setTimeout(() => {
													c.current || h()
												}, 1e3)))
										}))
								}, [e, t, d, u])
							return (
								(0, r.useEffect)(() => {
									;(c.current = !1), h()
									let e = setTimeout(() => {
										"waiting" !== n.current || c.current || h()
									}, 5e3)
									return () => {
										;(c.current = !0), clearTimeout(e), u()
									}
								}, [h, u]),
								i
							)
						})({
							url: `/api/runs/${e.id}/stream`,
							onMessage: (0, r.useCallback)((e) => {
								let t
								try {
									t = JSON.parse(e.data)
								} catch (t) {
									console.log(`invalid JSON: ${e.data}`)
									return
								}
								let r = x.taskEventSchema.safeParse(t)
								if (!r.success) return void console.log(`unrecognized messageEvent.data: ${e.data}`)
								let { eventName: a, payload: c, taskId: d } = r.data
								if (!d) return void console.log(`no taskId: ${e.data}`)
								switch (a) {
									case x.RooCodeEventName.TaskStarted:
										o.current.set(d, Date.now())
										break
									case x.RooCodeEventName.TaskTokenUsageUpdated: {
										let e = o.current.get(d),
											t = e ? Date.now() - e : void 0
										i.current.set(d, { ...c[1], duration: t }),
											c[2] && l.current.set(d, c[2]),
											n(Date.now())
										break
									}
									case x.RooCodeEventName.EvalPass:
									case x.RooCodeEventName.EvalFail:
										s(Date.now())
								}
							}, []),
						}),
						heartbeat: c,
						runners: d,
						tasks: u,
						tokenUsage: i.current,
						toolUsage: l.current,
						usageUpdatedAt: a,
					}
				})(e),
				{ tasks: O, tokenUsage: E, toolUsage: D, usageUpdatedAt: z, heartbeat: U, runners: L } = M,
				[P, $] = (0, r.useState)(null),
				[q, B] = (0, r.useState)(null),
				[H, G] = (0, r.useState)(!1),
				[K, W] = (0, r.useState)(!1),
				[V, Z] = (0, r.useState)(!1),
				[X, J] = (0, r.useState)(!1),
				[Y, ee] = (0, r.useState)(() => "true" === localStorage.getItem("evals-group-by-status"))
			;(0, r.useEffect)(() => {
				localStorage.setItem("evals-group-by-status", String(Y))
			}, [Y])
			let et = !e.taskMetricsId && (!!U || (L && L.length > 0)),
				er = (0, r.useCallback)(async () => {
					J(!0)
					try {
						let t = await y(e.id)
						t.killedContainers.length > 0
							? s.toast.success(`Killed ${t.killedContainers.length} container(s)`)
							: 0 === t.errors.length
								? s.toast.info("No running containers found")
								: s.toast.error(t.errors.join(", "))
					} catch (e) {
						console.error("Failed to kill run:", e), s.toast.error("Failed to kill run")
					} finally {
						J(!1), Z(!1)
					}
				}, [e.id]),
				es = (0, r.useCallback)(async () => {
					if (q)
						try {
							await navigator.clipboard.writeText(q),
								W(!0),
								s.toast.success("Log copied to clipboard"),
								setTimeout(() => W(!1), 2e3)
						} catch (e) {
							console.error("Failed to copy log:", e), s.toast.error("Failed to copy log")
						}
				}, [q])
			;(0, r.useEffect)(() => {
				let e = (e) => {
					"Escape" === e.key && P && $(null)
				}
				return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
			}, [P])
			let ea = (0, r.useMemo)(() => {
					let e = {},
						t = (e) => {
							if (!e.startedAt) return 0
							let t = new Date(e.startedAt).getTime()
							return (e.finishedAt ? new Date(e.finishedAt).getTime() : Date.now()) - t
						}
					return (
						O?.forEach((r) => {
							let s = E.get(r.id),
								a = r.taskMetrics
							if (r.finishedAt)
								if (a && (a.tokensIn > 0 || a.tokensOut > 0 || a.cost > 0)) {
									let s = a.duration || t(r)
									e[r.id] = { ...a, duration: s }
								} else if (s) {
									let a = s.duration || t(r)
									e[r.id] = {
										tokensIn: s.totalTokensIn,
										tokensOut: s.totalTokensOut,
										tokensContext: s.contextTokens,
										duration: a,
										cost: s.totalCost,
									}
								} else
									e[r.id] = { tokensIn: 0, tokensOut: 0, tokensContext: 0, duration: t(r), cost: 0 }
							else if (s) {
								let a = s.duration || t(r)
								e[r.id] = {
									tokensIn: s.totalTokensIn,
									tokensOut: s.totalTokensOut,
									tokensContext: s.contextTokens,
									duration: a,
									cost: s.totalCost,
								}
							} else
								r.startedAt &&
									(e[r.id] = { tokensIn: 0, tokensOut: 0, tokensContext: 0, duration: t(r), cost: 0 })
						}),
						e
					)
				}, [O, E, z]),
				en = (0, r.useCallback)(
					async (t) => {
						if (!(t.startedAt || E.get(t.id) || ea[t.id]))
							return void s.toast.error("Task has not started yet")
						$(t), G(!0), B(null)
						try {
							let r = await fetch(`/api/runs/${e.id}/logs/${t.id}`)
							if (!r.ok) {
								let e = await r.json()
								s.toast.error(e.error || "Failed to load log"), $(null)
								return
							}
							let a = await r.json()
							B(a.logContent)
						} catch (e) {
							console.error("Error loading task log:", e), s.toast.error("Failed to load log"), $(null)
						} finally {
							G(!1)
						}
					},
					[e.id, E, ea],
				),
				ei = (0, r.useMemo)(() => {
					if (!O) return []
					let e = new Map()
					for (let t of O) {
						let r = t.taskMetrics?.toolUsage,
							s = D.get(t.id),
							a = t.finishedAt && r && Object.keys(r).length > 0 ? r : s
						if (a)
							for (let [t, r] of Object.entries(a)) {
								let s = e.get(t) ?? 0
								e.set(t, s + r.attempts)
							}
					}
					return Array.from(e.entries())
						.sort((e, t) => t[1] - e[1])
						.map(([e]) => e)
				}, [O, D, z]),
				el = (0, r.useMemo)(() => {
					if (!O) return null
					let e = O.filter((e) => !0 === e.passed).length,
						t = O.filter((e) => !1 === e.passed).length,
						r = e + t,
						s = 0,
						a = 0,
						n = 0,
						i = 0,
						l = {}
					for (let e of O) {
						let t = ea[e.id]
						t && ((s += t.tokensIn), (a += t.tokensOut), (n += t.cost), (i += t.duration))
						let r = e.taskMetrics?.toolUsage,
							o = D.get(e.id),
							c = e.finishedAt && r && Object.keys(r).length > 0 ? r : o
						if (c)
							for (let [e, t] of Object.entries(c))
								l[e] || (l[e] = { attempts: 0, failures: 0 }),
									(l[e].attempts += t.attempts),
									(l[e].failures += t.failures)
					}
					let o = O.length - r
					return {
						passed: e,
						failed: t,
						completed: r,
						remaining: o,
						passRate: r > 0 ? ((e / r) * 100).toFixed(1) : null,
						totalTokensIn: s,
						totalTokensOut: a,
						totalCost: n,
						totalDuration: i,
						toolUsage: l,
					}
				}, [O, ea, D, z]),
				eo = (0, r.useMemo)(() => {
					if (!O || 0 === O.length) return null
					let t = new Date(e.createdAt).getTime()
					return e.taskMetricsId
						? O.reduce((e, t) => {
								if (t.finishedAt) {
									let r = new Date(t.finishedAt).getTime()
									return r > e ? r : e
								}
								return e
							}, t) - t
						: Date.now() - t
				}, [O, e.createdAt, e.taskMetricsId, z]),
				ec = (0, r.useCallback)(
					(e) =>
						!1 === e.passed
							? "failed"
							: !0 === e.passed
								? "passed"
								: e.startedAt || E.get(e.id) || ea[e.id]
									? "in_progress"
									: "not_started",
					[E, ea],
				),
				ed = (0, r.useMemo)(() => {
					if (!O || !Y) return null
					let e = { failed: [], in_progress: [], passed: [], not_started: [] }
					return (
						O.forEach((t, r) => {
							e[ec(t)].push({ task: t, originalIndex: r })
						}),
						e
					)
				}, [O, Y, ec]),
				eu = (0, r.useMemo)(
					() => ({
						failed: { label: "Failed", className: "text-red-500", count: ed?.failed.length ?? 0 },
						in_progress: {
							label: "In Progress",
							className: "text-yellow-500",
							count: ed?.in_progress.length ?? 0,
						},
						passed: { label: "Passed", className: "text-green-500", count: ed?.passed.length ?? 0 },
						not_started: {
							label: "Not Started",
							className: "text-muted-foreground",
							count: ed?.not_started.length ?? 0,
						},
					}),
					[ed],
				),
				eh = (e, r) => {
					let s = !!e.startedAt || !!E.get(e.id) || !!ea[e.id]
					return (0, t.jsxs)(
						j.TableRow,
						{
							className: `${s ? "cursor-pointer hover:bg-muted/50" : ""} ${!1 === e.passed ? "bg-red-950/30 border-l-2 border-l-red-500" : ""}`,
							onClick: () => s && en(e),
							children: [
								(0, t.jsx)(j.TableCell, {
									className: "text-center text-muted-foreground font-mono text-xs",
									children: r + 1,
								}),
								(0, t.jsx)(j.TableCell, {
									children: (0, t.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											(0, t.jsx)(I, { task: e, running: s }),
											(0, t.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [
													(0, t.jsxs)("span", {
														children: [
															e.language,
															"/",
															e.exercise,
															e.iteration > 1 &&
																(0, t.jsxs)("span", {
																	className: "text-muted-foreground ml-1",
																	children: ["(#", e.iteration, ")"],
																}),
														],
													}),
													s &&
														(0, t.jsxs)(k.Tooltip, {
															children: [
																(0, t.jsx)(k.TooltipTrigger, {
																	asChild: !0,
																	children: (0, t.jsx)(n.FileText, {
																		className: "size-3 text-muted-foreground",
																	}),
																}),
																(0, t.jsx)(k.TooltipContent, {
																	children: "Click to view log",
																}),
															],
														}),
												],
											}),
										],
									}),
								}),
								ea[e.id]
									? (0, t.jsxs)(t.Fragment, {
											children: [
												(0, t.jsx)(j.TableCell, {
													className: "font-mono text-xs",
													children: (0, t.jsxs)("div", {
														className: "flex items-center justify-evenly",
														children: [
															(0, t.jsx)("div", {
																children: (0, h.formatTokens)(ea[e.id].tokensIn),
															}),
															"/",
															(0, t.jsx)("div", {
																children: (0, h.formatTokens)(ea[e.id].tokensOut),
															}),
														],
													}),
												}),
												(0, t.jsx)(j.TableCell, {
													className: "font-mono text-xs",
													children: (0, h.formatTokens)(ea[e.id].tokensContext),
												}),
												ei.map((r) => {
													let s = e.taskMetrics?.toolUsage?.[r],
														a = D.get(e.id)?.[r],
														n = e.finishedAt ? (s ?? a) : a,
														i =
															n && n.attempts > 0
																? ((n.attempts - n.failures) / n.attempts) * 100
																: 100
													return (0, t.jsx)(
														j.TableCell,
														{
															className: "text-xs text-center",
															children: n
																? (0, t.jsxs)("div", {
																		className: "flex flex-col items-center",
																		children: [
																			(0, t.jsx)("span", {
																				className: "font-medium",
																				children: n.attempts,
																			}),
																			(0, t.jsx)("span", {
																				className:
																					100 === i
																						? "text-muted-foreground"
																						: i >= 80
																							? "text-yellow-500"
																							: "text-red-500",
																				children: (0,
																				h.formatToolUsageSuccessRate)(n),
																			}),
																		],
																	})
																: (0, t.jsx)("span", {
																		className: "text-muted-foreground",
																		children: "-",
																	}),
														},
														r,
													)
												}),
												(0, t.jsx)(j.TableCell, {
													className: "font-mono text-xs",
													children: ea[e.id].duration
														? (0, h.formatDuration)(ea[e.id].duration)
														: "-",
												}),
												(0, t.jsx)(j.TableCell, {
													className: "font-mono text-xs",
													children: (0, h.formatCurrency)(ea[e.id].cost),
												}),
											],
										})
									: (0, t.jsx)(j.TableCell, { colSpan: 5 + ei.length }),
							],
						},
						e.id,
					)
				}
			return (0, t.jsxs)(t.Fragment, {
				children: [
					(0, t.jsx)("div", {
						children: O
							? (0, t.jsxs)(t.Fragment, {
									children: [
										(0, t.jsx)("div", {
											className: "flex justify-end mb-2",
											children: (0, t.jsxs)(k.Tooltip, {
												children: [
													(0, t.jsx)(k.TooltipTrigger, {
														asChild: !0,
														children: (0, t.jsx)(T.Button, {
															variant: "outline",
															size: "sm",
															onClick: () => ee(!Y),
															className: "flex items-center gap-2",
															children: Y
																? (0, t.jsxs)(t.Fragment, {
																		children: [
																			(0, t.jsx)(d.List, { className: "size-4" }),
																			(0, t.jsx)("span", {
																				children: "Show Order",
																			}),
																		],
																	})
																: (0, t.jsxs)(t.Fragment, {
																		children: [
																			(0, t.jsx)(u.Layers, {
																				className: "size-4",
																			}),
																			(0, t.jsx)("span", {
																				children: "Group by Status",
																			}),
																		],
																	}),
														}),
													}),
													(0, t.jsx)(k.TooltipContent, {
														children: Y
															? "Show tasks in run order"
															: "Group tasks by status",
													}),
												],
											}),
										}),
										(0, t.jsxs)(j.Table, {
											className: "border",
											children: [
												(0, t.jsxs)(j.TableHeader, {
													className: "sticky top-0 z-10",
													children: [
														el &&
															(0, t.jsx)(j.TableRow, {
																children: (0, t.jsxs)(j.TableHead, {
																	colSpan: 6 + ei.length,
																	className: "bg-muted p-4",
																	children: [
																		(0, t.jsxs)("div", {
																			className:
																				"flex items-center justify-center gap-3 mb-3 relative",
																			children: [
																				e.settings?.apiProvider &&
																					(0, t.jsx)("span", {
																						className:
																							"text-sm text-muted-foreground",
																						children:
																							e.settings.apiProvider,
																					}),
																				(0, t.jsx)("div", {
																					className: "font-mono",
																					children: e.model,
																				}),
																				(0, t.jsx)(Q, {
																					runStatus: M,
																					isComplete: !!e.taskMetricsId,
																				}),
																				e.description &&
																					(0, t.jsxs)("span", {
																						className:
																							"text-sm text-muted-foreground",
																						children: ["- ", e.description],
																					}),
																				et &&
																					(0, t.jsxs)(k.Tooltip, {
																						children: [
																							(0, t.jsx)(
																								k.TooltipTrigger,
																								{
																									asChild: !0,
																									children: (0,
																									t.jsxs)(T.Button, {
																										variant:
																											"ghost",
																										size: "sm",
																										onClick: () =>
																											Z(!0),
																										disabled: X,
																										className:
																											"absolute right-0 flex items-center gap-1 text-muted-foreground hover:text-destructive",
																										children: [
																											X
																												? (0,
																													t.jsx)(
																														a.LoaderCircle,
																														{
																															className:
																																"size-4 animate-spin",
																														},
																													)
																												: (0,
																													t.jsx)(
																														c,
																														{
																															className:
																																"size-4",
																														},
																													),
																											"Kill",
																										],
																									}),
																								},
																							),
																							(0, t.jsx)(
																								k.TooltipContent,
																								{
																									children:
																										"Stop all containers for this run",
																								},
																							),
																						],
																					}),
																			],
																		}),
																		(0, t.jsxs)("div", {
																			className:
																				"flex items-start justify-center gap-x-8 gap-y-3",
																			children: [
																				(0, t.jsxs)("div", {
																					className:
																						"text-center min-w-[160px]",
																					children: [
																						(0, t.jsxs)("div", {
																							className:
																								"text-2xl font-bold whitespace-nowrap",
																							children: [
																								(0, t.jsx)("span", {
																									className:
																										"text-green-600",
																									children:
																										el.completed > 0
																											? `${((el.passed / el.completed) * 100).toFixed(1)}%`
																											: "-",
																								}),
																								(0, t.jsx)("span", {
																									className:
																										"text-muted-foreground mx-1",
																									children: "/",
																								}),
																								(0, t.jsx)("span", {
																									className:
																										"text-red-600",
																									children:
																										el.completed > 0
																											? `${((el.failed / el.completed) * 100).toFixed(1)}%`
																											: "-",
																								}),
																								(0, t.jsx)("span", {
																									className:
																										"text-muted-foreground mx-1",
																									children: "/",
																								}),
																								(0, t.jsx)("span", {
																									className:
																										"text-muted-foreground",
																									children:
																										O.length > 0
																											? `${((el.remaining / O.length) * 100).toFixed(1)}%`
																											: "-",
																								}),
																							],
																						}),
																						(0, t.jsxs)("div", {
																							className:
																								"text-xs text-muted-foreground",
																							children: [
																								(0, t.jsx)("span", {
																									className:
																										"text-green-600",
																									children: el.passed,
																								}),
																								" / ",
																								(0, t.jsx)("span", {
																									className:
																										"text-red-600",
																									children: el.failed,
																								}),
																								" / ",
																								(0, t.jsx)("span", {
																									children:
																										el.remaining,
																								}),
																								" of ",
																								O.length,
																							],
																						}),
																					],
																				}),
																				(0, t.jsxs)("div", {
																					className:
																						"text-center min-w-[140px]",
																					children: [
																						(0, t.jsxs)("div", {
																							className:
																								"text-xl font-bold font-mono whitespace-nowrap",
																							children: [
																								(0, h.formatTokens)(
																									el.totalTokensIn,
																								),
																								(0, t.jsx)("span", {
																									className:
																										"text-muted-foreground mx-1",
																									children: "/",
																								}),
																								(0, h.formatTokens)(
																									el.totalTokensOut,
																								),
																							],
																						}),
																						(0, t.jsx)("div", {
																							className:
																								"text-xs text-muted-foreground",
																							children: "Tokens In / Out",
																						}),
																					],
																				}),
																				(0, t.jsxs)("div", {
																					className:
																						"text-center min-w-[70px]",
																					children: [
																						(0, t.jsx)("div", {
																							className:
																								"text-2xl font-bold font-mono",
																							children: (0,
																							h.formatCurrency)(
																								el.totalCost,
																							),
																						}),
																						(0, t.jsx)("div", {
																							className:
																								"text-xs text-muted-foreground",
																							children: "Cost",
																						}),
																					],
																				}),
																				(0, t.jsxs)("div", {
																					className:
																						"text-center min-w-[90px]",
																					children: [
																						(0, t.jsx)("div", {
																							className:
																								"text-2xl font-bold font-mono whitespace-nowrap",
																							children:
																								el.totalDuration > 0
																									? (0,
																										h.formatDuration)(
																											el.totalDuration,
																										)
																									: "-",
																						}),
																						(0, t.jsx)("div", {
																							className:
																								"text-xs text-muted-foreground",
																							children: "Duration",
																						}),
																					],
																				}),
																				(0, t.jsxs)("div", {
																					className:
																						"text-center min-w-[90px]",
																					children: [
																						(0, t.jsx)("div", {
																							className:
																								"text-2xl font-bold font-mono whitespace-nowrap",
																							children:
																								null !== eo
																									? (0,
																										h.formatDuration)(
																											eo,
																										)
																									: "-",
																						}),
																						(0, t.jsx)("div", {
																							className:
																								"text-xs text-muted-foreground",
																							children: "Elapsed",
																						}),
																					],
																				}),
																				!e.taskMetricsId &&
																					null !== eo &&
																					el.completed > 0 &&
																					el.remaining > 0 &&
																					(0, t.jsxs)("div", {
																						className:
																							"text-center min-w-[90px]",
																						children: [
																							(0, t.jsxs)("div", {
																								className:
																									"text-2xl font-bold font-mono whitespace-nowrap text-muted-foreground",
																								children: [
																									"~",
																									(0,
																									h.formatDuration)(
																										(eo /
																											el.completed) *
																											el.remaining,
																									),
																								],
																							}),
																							(0, t.jsx)("div", {
																								className:
																									"text-xs text-muted-foreground",
																								children:
																									"Est. Remaining",
																							}),
																						],
																					}),
																			],
																		}),
																		Object.keys(el.toolUsage).length > 0 &&
																			(0, t.jsx)("div", {
																				className:
																					"flex items-center justify-center gap-2 flex-wrap mt-3",
																				children: Object.entries(el.toolUsage)
																					.sort(
																						([, e], [, t]) =>
																							t.attempts - e.attempts,
																					)
																					.map(([e, r]) => {
																						let s = F(e),
																							a =
																								r.attempts > 0
																									? ((r.attempts -
																											r.failures) /
																											r.attempts) *
																										100
																									: 100
																						return (0, t.jsxs)(
																							k.Tooltip,
																							{
																								children: [
																									(0, t.jsx)(
																										k.TooltipTrigger,
																										{
																											asChild: !0,
																											children:
																												(0,
																												t.jsxs)(
																													"div",
																													{
																														className:
																															"flex items-center gap-1 px-2 py-1 rounded bg-background/50 border border-border/50 hover:border-border transition-colors cursor-default text-xs",
																														children:
																															[
																																(0,
																																t.jsx)(
																																	"span",
																																	{
																																		className:
																																			"font-medium text-muted-foreground",
																																		children:
																																			s,
																																	},
																																),
																																(0,
																																t.jsx)(
																																	"span",
																																	{
																																		className:
																																			"font-bold tabular-nums",
																																		children:
																																			r.attempts,
																																	},
																																),
																																(0,
																																t.jsx)(
																																	"span",
																																	{
																																		className: `${100 === a ? "text-green-500" : a >= 80 ? "text-yellow-500" : "text-red-500"}`,
																																		children:
																																			(0,
																																			h.formatToolUsageSuccessRate)(
																																				r,
																																			),
																																	},
																																),
																															],
																													},
																												),
																										},
																									),
																									(0, t.jsx)(
																										k.TooltipContent,
																										{
																											side: "bottom",
																											children: e,
																										},
																									),
																								],
																							},
																							e,
																						)
																					}),
																			}),
																	],
																}),
															}),
														(0, t.jsxs)(j.TableRow, {
															children: [
																(0, t.jsx)(j.TableHead, {
																	className: "w-12 text-center",
																	children: "#",
																}),
																(0, t.jsx)(j.TableHead, { children: "Exercise" }),
																(0, t.jsx)(j.TableHead, {
																	className: "text-center",
																	children: "Tokens In / Out",
																}),
																(0, t.jsx)(j.TableHead, { children: "Context" }),
																ei.map((e) =>
																	(0, t.jsx)(
																		j.TableHead,
																		{
																			className: "text-xs text-center",
																			children: (0, t.jsxs)(k.Tooltip, {
																				children: [
																					(0, t.jsx)(k.TooltipTrigger, {
																						children: F(e),
																					}),
																					(0, t.jsx)(k.TooltipContent, {
																						children: e,
																					}),
																				],
																			}),
																		},
																		e,
																	),
																),
																(0, t.jsx)(j.TableHead, { children: "Duration" }),
																(0, t.jsx)(j.TableHead, { children: "Cost" }),
															],
														}),
													],
												}),
												(0, t.jsx)(j.TableBody, {
													children:
														Y && ed
															? ["failed", "in_progress", "passed", "not_started"].map(
																	(e) => {
																		let s = ed[e]
																		if (0 === s.length) return null
																		let { label: a, className: n } = eu[e]
																		return (0, t.jsxs)(
																			r.Fragment,
																			{
																				children: [
																					(0, t.jsx)(j.TableRow, {
																						className:
																							"bg-muted/50 hover:bg-muted/50",
																						children: (0, t.jsx)(
																							j.TableCell,
																							{
																								colSpan: 6 + ei.length,
																								className: "py-2",
																								children: (0, t.jsxs)(
																									"span",
																									{
																										className: `font-semibold ${n}`,
																										children: [
																											a,
																											" (",
																											s.length,
																											")",
																										],
																									},
																								),
																							},
																						),
																					}),
																					s.map(
																						({
																							task: e,
																							originalIndex: t,
																						}) => eh(e, t),
																					),
																				],
																			},
																			e,
																		)
																	},
																)
															: O.map((e, t) => eh(e, t)),
												}),
											],
										}),
									],
								})
							: (0, t.jsx)(a.LoaderCircle, { className: "size-4 animate-spin" }),
					}),
					(0, t.jsx)(w.Dialog, {
						open: !!P,
						onOpenChange: () => $(null),
						children: (0, t.jsxs)(w.DialogContent, {
							className: "w-[95vw] !max-w-[95vw] h-[90vh] flex flex-col",
							children: [
								(0, t.jsx)(w.DialogHeader, {
									className: "flex-shrink-0",
									children: (0, t.jsxs)("div", {
										className: "flex items-center justify-between pr-8",
										children: [
											(0, t.jsxs)(w.DialogTitle, {
												className: "flex items-center gap-2",
												children: [
													(0, t.jsx)(n.FileText, { className: "size-4" }),
													P?.language,
													"/",
													P?.exercise,
													P?.iteration &&
														P.iteration > 1 &&
														(0, t.jsxs)("span", {
															className: "text-muted-foreground",
															children: ["(#", P.iteration, ")"],
														}),
													(0, t.jsxs)("span", {
														className: `ml-2 text-sm ${P?.passed === !0 ? "text-green-600" : P?.passed === !1 ? "text-red-600" : "text-yellow-500"}`,
														children: [
															"(",
															P?.passed === !0
																? "Passed"
																: P?.passed === !1
																	? "Failed"
																	: "Running",
															")",
														],
													}),
												],
											}),
											q &&
												(0, t.jsx)(T.Button, {
													variant: "outline",
													size: "sm",
													onClick: es,
													className: "flex items-center gap-1",
													children: K
														? (0, t.jsxs)(t.Fragment, {
																children: [
																	(0, t.jsx)(l.Check, { className: "size-4" }),
																	"Copied!",
																],
															})
														: (0, t.jsxs)(t.Fragment, {
																children: [
																	(0, t.jsx)(i.Copy, { className: "size-4" }),
																	"Copy Log",
																],
															}),
												}),
										],
									}),
								}),
								(0, t.jsx)("div", {
									className: "flex-1 min-h-0 overflow-hidden",
									children: H
										? (0, t.jsx)("div", {
												className: "flex items-center justify-center h-full",
												children: (0, t.jsx)(a.LoaderCircle, {
													className: "size-6 animate-spin",
												}),
											})
										: q
											? (0, t.jsx)(N.ScrollArea, {
													className: "h-full w-full",
													children: (0, t.jsx)("div", {
														className:
															"text-xs font-mono bg-muted p-4 rounded-md overflow-x-auto",
														children:
															((S = (o = q).split("\n")),
															(_ =
																((m = o.match(
																	/\[(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z)[\s|\]]/,
																)),
																(R = m?.[1]) ? new Date(R).getTime() : null)),
															S.map((e, r) => {
																if (!e.trim())
																	return (0, t.jsx)(
																		"div",
																		{ className: "h-2", children: " " },
																		r,
																	)
																let s = (function (e, t) {
																		let r,
																			s,
																			a = e.match(
																				/\[(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z)[\s|\]]/,
																			),
																			n = a?.[1]
																		if (!n) return { timestamp: "", simplified: e }
																		let i =
																				null !== t
																					? ((s = Math.floor(
																							(r = Math.floor(
																								(new Date(n).getTime() -
																									t) /
																									1e3,
																							)) / 60,
																						)),
																						`${s.toString().padStart(2, "0")}:${(r % 60).toString().padStart(2, "0")}`)
																					: n.slice(11, 19),
																			l = e.replace(
																				/\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\s*\|?\s*/,
																				"",
																			)
																		return {
																			timestamp: i,
																			simplified: (l = (l = (l = (l = (l = (l =
																				(l = l.replace(
																					/\|\s*pid:\d+\s*/g,
																					"",
																				)).replace(
																					/\|\s*run:\d+\s*/g,
																					"",
																				)).replace(
																				/\|\s*task:\d+\s*/g,
																				"",
																			)).replace(/runTask\s*\|\s*/g, "")).replace(
																				/\|\s*\|/g,
																				"|",
																			)).replace(/^\s*\|\s*/, "")).replace(
																				/\]\s*$/,
																				"",
																			)),
																		}
																	})(e, _),
																	a = e.includes("ERROR")
																		? "bg-red-950/30 border-l-2 border-red-500"
																		: e.includes("WARN") || e.includes("WARNING")
																			? "bg-yellow-950/20 border-l-2 border-yellow-500"
																			: e.includes("taskToolFailed")
																				? "bg-red-950/30 border-l-2 border-red-500"
																				: e.includes("taskStarted") ||
																					  e.includes("taskCreated")
																					? "bg-purple-950/20"
																					: e.includes("EvalPass")
																						? "bg-green-950/30 border-l-2 border-green-500"
																						: e.includes("EvalFail")
																							? "bg-red-950/30 border-l-2 border-red-500"
																							: e.includes(
																										"taskCompleted",
																								  ) ||
																								  e.includes(
																										"taskAborted",
																								  )
																								? "bg-blue-950/20"
																								: ""
																return (0, t.jsxs)(
																	"div",
																	{
																		className: `flex hover:bg-white/10 py-0.5 rounded-sm transition-colors ${a}`,
																		children: [
																			(0, t.jsx)("span", {
																				className:
																					"text-blue-400 font-mono w-12 flex-shrink-0 tabular-nums text-right pr-2",
																				children: s.timestamp,
																			}),
																			(0, t.jsx)("span", {
																				className: "flex-1 break-words",
																				style: {
																					textIndent: "-0.5rem",
																					paddingLeft: "0.5rem",
																				},
																				children: (function (e) {
																					let r = []
																					for (let {
																						pattern: t,
																						className: s,
																						wrapGroup: a,
																					} of A) {
																						let n
																						for (
																							t.lastIndex = 0;
																							null !== (n = t.exec(e));

																						) {
																							let e =
																								void 0 !== a
																									? n[a]
																									: n[0]
																							if (!e) continue
																							let t =
																								void 0 !== a
																									? n.index +
																										n[0].indexOf(e)
																									: n.index
																							r.push({
																								start: t,
																								end: t + e.length,
																								text: e,
																								className: s,
																							})
																						}
																					}
																					r.sort((e, t) => e.start - t.start)
																					let s = []
																					for (let e of r) {
																						let t = s[s.length - 1]
																						;(!t || e.start >= t.end) &&
																							s.push(e)
																					}
																					let a = [],
																						n = 0
																					for (let [r, i] of s.entries())
																						i.start > n &&
																							a.push(e.slice(n, i.start)),
																							a.push(
																								(0, t.jsx)(
																									"span",
																									{
																										className:
																											i.className,
																										children:
																											i.text,
																									},
																									`${r}-${i.start}`,
																								),
																							),
																							(n = i.end)
																					return (
																						n < e.length &&
																							a.push(e.slice(n)),
																						a.length > 0 ? a : [e]
																					)
																				})(s.simplified),
																			}),
																		],
																	},
																	r,
																)
															})),
													}),
												})
											: (0, t.jsx)("div", {
													className:
														"flex items-center justify-center h-full text-muted-foreground",
													children: "Log file not available (may have been cleared)",
												}),
								}),
							],
						}),
					}),
					(0, t.jsx)(C.AlertDialog, {
						open: V,
						onOpenChange: Z,
						children: (0, t.jsxs)(C.AlertDialogContent, {
							children: [
								(0, t.jsxs)(C.AlertDialogHeader, {
									children: [
										(0, t.jsx)(C.AlertDialogTitle, { children: "Kill Run?" }),
										(0, t.jsx)(C.AlertDialogDescription, {
											children:
												"This will stop the controller and all task runner containers for this run. Any running tasks will be terminated immediately. This action cannot be undone.",
										}),
									],
								}),
								(0, t.jsxs)(C.AlertDialogFooter, {
									children: [
										(0, t.jsx)(C.AlertDialogCancel, { disabled: X, children: "Cancel" }),
										(0, t.jsx)(C.AlertDialogAction, {
											onClick: er,
											disabled: X,
											className:
												"bg-destructive text-destructive-foreground hover:bg-destructive/90",
											children: X
												? (0, t.jsxs)(t.Fragment, {
														children: [
															(0, t.jsx)(a.LoaderCircle, {
																className: "size-4 animate-spin mr-2",
															}),
															"Killing...",
														],
													})
												: "Kill Run",
										}),
									],
								}),
							],
						}),
					}),
				],
			})
		}
		e.s(["Run", () => z], 41106)
	},
])
