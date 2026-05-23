;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	9286,
	(e) => {
		"use strict"
		var t = e.i(76146),
			s = e.i(26714),
			i = e.i(74572),
			r = e.i(3274),
			a = class extends r.Removable {
				#e
				#t
				#s
				#i
				#r
				#a
				#n
				constructor(e) {
					super(),
						(this.#n = !1),
						(this.#a = e.defaultOptions),
						this.setOptions(e.options),
						(this.observers = []),
						(this.#i = e.client),
						(this.#s = this.#i.getQueryCache()),
						(this.queryKey = e.queryKey),
						(this.queryHash = e.queryHash),
						(this.#e = (function (e) {
							let t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
								s = void 0 !== t,
								i = s
									? "function" == typeof e.initialDataUpdatedAt
										? e.initialDataUpdatedAt()
										: e.initialDataUpdatedAt
									: 0
							return {
								data: t,
								dataUpdateCount: 0,
								dataUpdatedAt: s ? (i ?? Date.now()) : 0,
								error: null,
								errorUpdateCount: 0,
								errorUpdatedAt: 0,
								fetchFailureCount: 0,
								fetchFailureReason: null,
								fetchMeta: null,
								isInvalidated: !1,
								status: s ? "success" : "pending",
								fetchStatus: "idle",
							}
						})(this.options)),
						(this.state = e.state ?? this.#e),
						this.scheduleGc()
				}
				get meta() {
					return this.options.meta
				}
				get promise() {
					return this.#r?.promise
				}
				setOptions(e) {
					;(this.options = { ...this.#a, ...e }), this.updateGcTime(this.options.gcTime)
				}
				optionalRemove() {
					this.observers.length || "idle" !== this.state.fetchStatus || this.#s.remove(this)
				}
				setData(e, s) {
					let i = (0, t.replaceData)(this.state.data, e, this.options)
					return this.#o({ data: i, type: "success", dataUpdatedAt: s?.updatedAt, manual: s?.manual }), i
				}
				setState(e, t) {
					this.#o({ type: "setState", state: e, setStateOptions: t })
				}
				cancel(e) {
					let s = this.#r?.promise
					return this.#r?.cancel(e), s ? s.then(t.noop).catch(t.noop) : Promise.resolve()
				}
				destroy() {
					super.destroy(), this.cancel({ silent: !0 })
				}
				reset() {
					this.destroy(), this.setState(this.#e)
				}
				isActive() {
					return this.observers.some((e) => !1 !== (0, t.resolveEnabled)(e.options.enabled, this))
				}
				isDisabled() {
					return this.getObserversCount() > 0
						? !this.isActive()
						: this.options.queryFn === t.skipToken ||
								this.state.dataUpdateCount + this.state.errorUpdateCount === 0
				}
				isStale() {
					return (
						!!this.state.isInvalidated ||
						(this.getObserversCount() > 0
							? this.observers.some((e) => e.getCurrentResult().isStale)
							: void 0 === this.state.data)
					)
				}
				isStaleByTime(e = 0) {
					return (
						this.state.isInvalidated ||
						void 0 === this.state.data ||
						!(0, t.timeUntilStale)(this.state.dataUpdatedAt, e)
					)
				}
				onFocus() {
					let e = this.observers.find((e) => e.shouldFetchOnWindowFocus())
					e?.refetch({ cancelRefetch: !1 }), this.#r?.continue()
				}
				onOnline() {
					let e = this.observers.find((e) => e.shouldFetchOnReconnect())
					e?.refetch({ cancelRefetch: !1 }), this.#r?.continue()
				}
				addObserver(e) {
					this.observers.includes(e) ||
						(this.observers.push(e),
						this.clearGcTimeout(),
						this.#s.notify({ type: "observerAdded", query: this, observer: e }))
				}
				removeObserver(e) {
					this.observers.includes(e) &&
						((this.observers = this.observers.filter((t) => t !== e)),
						this.observers.length ||
							(this.#r && (this.#n ? this.#r.cancel({ revert: !0 }) : this.#r.cancelRetry()),
							this.scheduleGc()),
						this.#s.notify({ type: "observerRemoved", query: this, observer: e }))
				}
				getObserversCount() {
					return this.observers.length
				}
				invalidate() {
					this.state.isInvalidated || this.#o({ type: "invalidate" })
				}
				fetch(e, s) {
					if ("idle" !== this.state.fetchStatus) {
						if (void 0 !== this.state.data && s?.cancelRefetch) this.cancel({ silent: !0 })
						else if (this.#r) return this.#r.continueRetry(), this.#r.promise
					}
					if ((e && this.setOptions(e), !this.options.queryFn)) {
						let e = this.observers.find((e) => e.options.queryFn)
						e && this.setOptions(e.options)
					}
					let r = new AbortController(),
						a = (e) => {
							Object.defineProperty(e, "signal", {
								enumerable: !0,
								get: () => ((this.#n = !0), r.signal),
							})
						},
						n = () => {
							let e = (0, t.ensureQueryFn)(this.options, s),
								i = { client: this.#i, queryKey: this.queryKey, meta: this.meta }
							return (a(i), (this.#n = !1), this.options.persister)
								? this.options.persister(e, i, this)
								: e(i)
						},
						o = {
							fetchOptions: s,
							options: this.options,
							queryKey: this.queryKey,
							client: this.#i,
							state: this.state,
							fetchFn: n,
						}
					a(o),
						this.options.behavior?.onFetch(o, this),
						(this.#t = this.state),
						("idle" === this.state.fetchStatus || this.state.fetchMeta !== o.fetchOptions?.meta) &&
							this.#o({ type: "fetch", meta: o.fetchOptions?.meta })
					let u = (e) => {
						;((0, i.isCancelledError)(e) && e.silent) || this.#o({ type: "error", error: e }),
							(0, i.isCancelledError)(e) ||
								(this.#s.config.onError?.(e, this),
								this.#s.config.onSettled?.(this.state.data, e, this)),
							this.scheduleGc()
					}
					return (
						(this.#r = (0, i.createRetryer)({
							initialPromise: s?.initialPromise,
							fn: o.fetchFn,
							abort: r.abort.bind(r),
							onSuccess: (e) => {
								if (void 0 === e) return void u(Error(`${this.queryHash} data is undefined`))
								try {
									this.setData(e)
								} catch (e) {
									u(e)
									return
								}
								this.#s.config.onSuccess?.(e, this),
									this.#s.config.onSettled?.(e, this.state.error, this),
									this.scheduleGc()
							},
							onError: u,
							onFail: (e, t) => {
								this.#o({ type: "failed", failureCount: e, error: t })
							},
							onPause: () => {
								this.#o({ type: "pause" })
							},
							onContinue: () => {
								this.#o({ type: "continue" })
							},
							retry: o.options.retry,
							retryDelay: o.options.retryDelay,
							networkMode: o.options.networkMode,
							canRun: () => !0,
						})),
						this.#r.start()
					)
				}
				#o(e) {
					let t = (t) => {
						switch (e.type) {
							case "failed":
								return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error }
							case "pause":
								return { ...t, fetchStatus: "paused" }
							case "continue":
								return { ...t, fetchStatus: "fetching" }
							case "fetch":
								return { ...t, ...n(t.data, this.options), fetchMeta: e.meta ?? null }
							case "success":
								return {
									...t,
									data: e.data,
									dataUpdateCount: t.dataUpdateCount + 1,
									dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
									error: null,
									isInvalidated: !1,
									status: "success",
									...(!e.manual && {
										fetchStatus: "idle",
										fetchFailureCount: 0,
										fetchFailureReason: null,
									}),
								}
							case "error":
								let s = e.error
								if ((0, i.isCancelledError)(s) && s.revert && this.#t)
									return { ...this.#t, fetchStatus: "idle" }
								return {
									...t,
									error: s,
									errorUpdateCount: t.errorUpdateCount + 1,
									errorUpdatedAt: Date.now(),
									fetchFailureCount: t.fetchFailureCount + 1,
									fetchFailureReason: s,
									fetchStatus: "idle",
									status: "error",
								}
							case "invalidate":
								return { ...t, isInvalidated: !0 }
							case "setState":
								return { ...t, ...e.state }
						}
					}
					;(this.state = t(this.state)),
						s.notifyManager.batch(() => {
							this.observers.forEach((e) => {
								e.onQueryUpdate()
							}),
								this.#s.notify({ query: this, type: "updated", action: e })
						})
				}
			}
		function n(e, t) {
			return {
				fetchFailureCount: 0,
				fetchFailureReason: null,
				fetchStatus: (0, i.canFetch)(t.networkMode) ? "fetching" : "paused",
				...(void 0 === e && { error: null, status: "pending" }),
			}
		}
		e.s(["Query", () => a, "fetchState", () => n])
	},
	90306,
	(e) => {
		"use strict"
		var t = e.i(10008),
			s = (e, t, s, i, r, a, n, o) => {
				let u = document.documentElement,
					l = ["light", "dark"]
				function h(t) {
					var s
					;(Array.isArray(e) ? e : [e]).forEach((e) => {
						let s = "class" === e,
							i = s && a ? r.map((e) => a[e] || e) : r
						s ? (u.classList.remove(...i), u.classList.add(a && a[t] ? a[t] : t)) : u.setAttribute(e, t)
					}),
						(s = t),
						o && l.includes(s) && (u.style.colorScheme = s)
				}
				if (i) h(i)
				else
					try {
						let e = localStorage.getItem(t) || s,
							i =
								n && "system" === e
									? window.matchMedia("(prefers-color-scheme: dark)").matches
										? "dark"
										: "light"
									: e
						h(i)
					} catch (e) {}
			},
			i = ["light", "dark"],
			r = "(prefers-color-scheme: dark)",
			a = "u" < typeof window,
			n = t.createContext(void 0),
			o = { setTheme: (e) => {}, themes: [] },
			u = () => {
				var e
				return null != (e = t.useContext(n)) ? e : o
			},
			l = (e) => (t.useContext(n) ? t.createElement(t.Fragment, null, e.children) : t.createElement(c, { ...e })),
			h = ["light", "dark"],
			c = ({
				forcedTheme: e,
				disableTransitionOnChange: s = !1,
				enableSystem: a = !0,
				enableColorScheme: o = !0,
				storageKey: u = "theme",
				themes: l = h,
				defaultTheme: c = a ? "system" : "light",
				attribute: m = "data-theme",
				value: g,
				children: v,
				nonce: b,
				scriptProps: C,
			}) => {
				let [O, w] = t.useState(() => f(u, c)),
					[S, P] = t.useState(() => ("system" === O ? y() : O)),
					M = g ? Object.values(g) : l,
					q = t.useCallback(
						(e) => {
							let t = e
							if (!t) return
							"system" === e && a && (t = y())
							let r = g ? g[t] : t,
								n = s ? p(b) : null,
								u = document.documentElement,
								l = (e) => {
									"class" === e
										? (u.classList.remove(...M), r && u.classList.add(r))
										: e.startsWith("data-") && (r ? u.setAttribute(e, r) : u.removeAttribute(e))
								}
							if ((Array.isArray(m) ? m.forEach(l) : l(m), o)) {
								let e = i.includes(c) ? c : null,
									s = i.includes(t) ? t : e
								u.style.colorScheme = s
							}
							null == n || n()
						},
						[b],
					),
					E = t.useCallback(
						(e) => {
							let t = "function" == typeof e ? e(O) : e
							w(t)
							try {
								localStorage.setItem(u, t)
							} catch (e) {}
						},
						[O],
					),
					A = t.useCallback(
						(t) => {
							P(y(t)), "system" === O && a && !e && q("system")
						},
						[O, e],
					)
				t.useEffect(() => {
					let e = window.matchMedia(r)
					return e.addListener(A), A(e), () => e.removeListener(A)
				}, [A]),
					t.useEffect(() => {
						let e = (e) => {
							e.key === u && (e.newValue ? w(e.newValue) : E(c))
						}
						return window.addEventListener("storage", e), () => window.removeEventListener("storage", e)
					}, [E]),
					t.useEffect(() => {
						q(null != e ? e : O)
					}, [e, O])
				let Q = t.useMemo(
					() => ({
						theme: O,
						setTheme: E,
						forcedTheme: e,
						resolvedTheme: "system" === O ? S : O,
						themes: a ? [...l, "system"] : l,
						systemTheme: a ? S : void 0,
					}),
					[O, E, e, S, a, l],
				)
				return t.createElement(
					n.Provider,
					{ value: Q },
					t.createElement(d, {
						forcedTheme: e,
						storageKey: u,
						attribute: m,
						enableSystem: a,
						enableColorScheme: o,
						defaultTheme: c,
						value: g,
						themes: l,
						nonce: b,
						scriptProps: C,
					}),
					v,
				)
			},
			d = t.memo(
				({
					forcedTheme: e,
					storageKey: i,
					attribute: r,
					enableSystem: a,
					enableColorScheme: n,
					defaultTheme: o,
					value: u,
					themes: l,
					nonce: h,
					scriptProps: c,
				}) => {
					let d = JSON.stringify([r, i, o, e, l, u, a, n]).slice(1, -1)
					return t.createElement("script", {
						...c,
						suppressHydrationWarning: !0,
						nonce: "u" < typeof window ? h : "",
						dangerouslySetInnerHTML: { __html: `(${s.toString()})(${d})` },
					})
				},
			),
			f = (e, t) => {
				let s
				if (!a) {
					try {
						s = localStorage.getItem(e) || void 0
					} catch (e) {}
					return s || t
				}
			},
			p = (e) => {
				let t = document.createElement("style")
				return (
					e && t.setAttribute("nonce", e),
					t.appendChild(
						document.createTextNode(
							"*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
						),
					),
					document.head.appendChild(t),
					() => {
						window.getComputedStyle(document.body),
							setTimeout(() => {
								document.head.removeChild(t)
							}, 1)
					}
				)
			},
			y = (e) => (e || (e = window.matchMedia(r)), e.matches ? "dark" : "light")
		e.s(["ThemeProvider", () => l, "useTheme", () => u])
	},
	86192,
	(e, t, s) => {
		t.exports = e.r(87331)
	},
	69880,
	(e) => {
		"use strict"
		var t = e.i(26714),
			s = e.i(3274),
			i = e.i(74572),
			r = class extends s.Removable {
				#u
				#l
				#r
				constructor(e) {
					super(),
						(this.mutationId = e.mutationId),
						(this.#l = e.mutationCache),
						(this.#u = []),
						(this.state = e.state || a()),
						this.setOptions(e.options),
						this.scheduleGc()
				}
				setOptions(e) {
					;(this.options = e), this.updateGcTime(this.options.gcTime)
				}
				get meta() {
					return this.options.meta
				}
				addObserver(e) {
					this.#u.includes(e) ||
						(this.#u.push(e),
						this.clearGcTimeout(),
						this.#l.notify({ type: "observerAdded", mutation: this, observer: e }))
				}
				removeObserver(e) {
					;(this.#u = this.#u.filter((t) => t !== e)),
						this.scheduleGc(),
						this.#l.notify({ type: "observerRemoved", mutation: this, observer: e })
				}
				optionalRemove() {
					this.#u.length || ("pending" === this.state.status ? this.scheduleGc() : this.#l.remove(this))
				}
				continue() {
					return this.#r?.continue() ?? this.execute(this.state.variables)
				}
				async execute(e) {
					let t = () => {
						this.#o({ type: "continue" })
					}
					this.#r = (0, i.createRetryer)({
						fn: () =>
							this.options.mutationFn
								? this.options.mutationFn(e)
								: Promise.reject(Error("No mutationFn found")),
						onFail: (e, t) => {
							this.#o({ type: "failed", failureCount: e, error: t })
						},
						onPause: () => {
							this.#o({ type: "pause" })
						},
						onContinue: t,
						retry: this.options.retry ?? 0,
						retryDelay: this.options.retryDelay,
						networkMode: this.options.networkMode,
						canRun: () => this.#l.canRun(this),
					})
					let s = "pending" === this.state.status,
						r = !this.#r.canStart()
					try {
						if (s) t()
						else {
							this.#o({ type: "pending", variables: e, isPaused: r }),
								await this.#l.config.onMutate?.(e, this)
							let t = await this.options.onMutate?.(e)
							t !== this.state.context &&
								this.#o({ type: "pending", context: t, variables: e, isPaused: r })
						}
						let i = await this.#r.start()
						return (
							await this.#l.config.onSuccess?.(i, e, this.state.context, this),
							await this.options.onSuccess?.(i, e, this.state.context),
							await this.#l.config.onSettled?.(i, null, this.state.variables, this.state.context, this),
							await this.options.onSettled?.(i, null, e, this.state.context),
							this.#o({ type: "success", data: i }),
							i
						)
					} catch (t) {
						try {
							throw (
								(await this.#l.config.onError?.(t, e, this.state.context, this),
								await this.options.onError?.(t, e, this.state.context),
								await this.#l.config.onSettled?.(
									void 0,
									t,
									this.state.variables,
									this.state.context,
									this,
								),
								await this.options.onSettled?.(void 0, t, e, this.state.context),
								t)
							)
						} finally {
							this.#o({ type: "error", error: t })
						}
					} finally {
						this.#l.runNext(this)
					}
				}
				#o(e) {
					;(this.state = ((t) => {
						switch (e.type) {
							case "failed":
								return { ...t, failureCount: e.failureCount, failureReason: e.error }
							case "pause":
								return { ...t, isPaused: !0 }
							case "continue":
								return { ...t, isPaused: !1 }
							case "pending":
								return {
									...t,
									context: e.context,
									data: void 0,
									failureCount: 0,
									failureReason: null,
									error: null,
									isPaused: e.isPaused,
									status: "pending",
									variables: e.variables,
									submittedAt: Date.now(),
								}
							case "success":
								return {
									...t,
									data: e.data,
									failureCount: 0,
									failureReason: null,
									error: null,
									status: "success",
									isPaused: !1,
								}
							case "error":
								return {
									...t,
									data: void 0,
									error: e.error,
									failureCount: t.failureCount + 1,
									failureReason: e.error,
									isPaused: !1,
									status: "error",
								}
						}
					})(this.state)),
						t.notifyManager.batch(() => {
							this.#u.forEach((t) => {
								t.onMutationUpdate(e)
							}),
								this.#l.notify({ mutation: this, type: "updated", action: e })
						})
				}
			}
		function a() {
			return {
				context: void 0,
				data: void 0,
				error: null,
				failureCount: 0,
				failureReason: null,
				isPaused: !1,
				status: "idle",
				variables: void 0,
				submittedAt: 0,
			}
		}
		e.s(["Mutation", () => r, "getDefaultState", () => a])
	},
	34697,
	(e) => {
		"use strict"
		var t = e.i(8026),
			s = e.i(76146),
			i = e.i(9286),
			r = e.i(26714),
			a = e.i(69380),
			n = class extends a.Subscribable {
				constructor(e = {}) {
					super(), (this.config = e), (this.#h = new Map())
				}
				#h
				build(e, t, r) {
					let a = t.queryKey,
						n = t.queryHash ?? (0, s.hashQueryKeyByOptions)(a, t),
						o = this.get(n)
					return (
						o ||
							((o = new i.Query({
								client: e,
								queryKey: a,
								queryHash: n,
								options: e.defaultQueryOptions(t),
								state: r,
								defaultOptions: e.getQueryDefaults(a),
							})),
							this.add(o)),
						o
					)
				}
				add(e) {
					this.#h.has(e.queryHash) || (this.#h.set(e.queryHash, e), this.notify({ type: "added", query: e }))
				}
				remove(e) {
					let t = this.#h.get(e.queryHash)
					t &&
						(e.destroy(),
						t === e && this.#h.delete(e.queryHash),
						this.notify({ type: "removed", query: e }))
				}
				clear() {
					r.notifyManager.batch(() => {
						this.getAll().forEach((e) => {
							this.remove(e)
						})
					})
				}
				get(e) {
					return this.#h.get(e)
				}
				getAll() {
					return [...this.#h.values()]
				}
				find(e) {
					let t = { exact: !0, ...e }
					return this.getAll().find((e) => (0, s.matchQuery)(t, e))
				}
				findAll(e = {}) {
					let t = this.getAll()
					return Object.keys(e).length > 0 ? t.filter((t) => (0, s.matchQuery)(e, t)) : t
				}
				notify(e) {
					r.notifyManager.batch(() => {
						this.listeners.forEach((t) => {
							t(e)
						})
					})
				}
				onFocus() {
					r.notifyManager.batch(() => {
						this.getAll().forEach((e) => {
							e.onFocus()
						})
					})
				}
				onOnline() {
					r.notifyManager.batch(() => {
						this.getAll().forEach((e) => {
							e.onOnline()
						})
					})
				}
			},
			o = e.i(69880),
			u = a,
			l = class extends u.Subscribable {
				constructor(e = {}) {
					super(), (this.config = e), (this.#c = new Set()), (this.#d = new Map()), (this.#f = 0)
				}
				#c
				#d
				#f
				build(e, t, s) {
					let i = new o.Mutation({
						mutationCache: this,
						mutationId: ++this.#f,
						options: e.defaultMutationOptions(t),
						state: s,
					})
					return this.add(i), i
				}
				add(e) {
					this.#c.add(e)
					let t = h(e)
					if ("string" == typeof t) {
						let s = this.#d.get(t)
						s ? s.push(e) : this.#d.set(t, [e])
					}
					this.notify({ type: "added", mutation: e })
				}
				remove(e) {
					if (this.#c.delete(e)) {
						let t = h(e)
						if ("string" == typeof t) {
							let s = this.#d.get(t)
							if (s)
								if (s.length > 1) {
									let t = s.indexOf(e)
									;-1 !== t && s.splice(t, 1)
								} else s[0] === e && this.#d.delete(t)
						}
					}
					this.notify({ type: "removed", mutation: e })
				}
				canRun(e) {
					let t = h(e)
					if ("string" != typeof t) return !0
					{
						let s = this.#d.get(t),
							i = s?.find((e) => "pending" === e.state.status)
						return !i || i === e
					}
				}
				runNext(e) {
					let t = h(e)
					if ("string" != typeof t) return Promise.resolve()
					{
						let s = this.#d.get(t)?.find((t) => t !== e && t.state.isPaused)
						return s?.continue() ?? Promise.resolve()
					}
				}
				clear() {
					r.notifyManager.batch(() => {
						this.#c.forEach((e) => {
							this.notify({ type: "removed", mutation: e })
						}),
							this.#c.clear(),
							this.#d.clear()
					})
				}
				getAll() {
					return Array.from(this.#c)
				}
				find(e) {
					let t = { exact: !0, ...e }
					return this.getAll().find((e) => (0, s.matchMutation)(t, e))
				}
				findAll(e = {}) {
					return this.getAll().filter((t) => (0, s.matchMutation)(e, t))
				}
				notify(e) {
					r.notifyManager.batch(() => {
						this.listeners.forEach((t) => {
							t(e)
						})
					})
				}
				resumePausedMutations() {
					let e = this.getAll().filter((e) => e.state.isPaused)
					return r.notifyManager.batch(() => Promise.all(e.map((e) => e.continue().catch(s.noop))))
				}
			}
		function h(e) {
			return e.options.scope?.id
		}
		var c = e.i(71167),
			d = e.i(28970)
		function f(e) {
			return {
				onFetch: (t, i) => {
					let r = t.options,
						a = t.fetchOptions?.meta?.fetchMore?.direction,
						n = t.state.data?.pages || [],
						o = t.state.data?.pageParams || [],
						u = { pages: [], pageParams: [] },
						l = 0,
						h = async () => {
							let i = !1,
								h = (0, s.ensureQueryFn)(t.options, t.fetchOptions),
								c = async (e, r, a) => {
									if (i) return Promise.reject()
									if (null == r && e.pages.length) return Promise.resolve(e)
									let n = {
										client: t.client,
										queryKey: t.queryKey,
										pageParam: r,
										direction: a ? "backward" : "forward",
										meta: t.options.meta,
									}
									Object.defineProperty(n, "signal", {
										enumerable: !0,
										get: () => (
											t.signal.aborted
												? (i = !0)
												: t.signal.addEventListener("abort", () => {
														i = !0
													}),
											t.signal
										),
									})
									let o = await h(n),
										{ maxPages: u } = t.options,
										l = a ? s.addToStart : s.addToEnd
									return { pages: l(e.pages, o, u), pageParams: l(e.pageParams, r, u) }
								}
							if (a && n.length) {
								let e = "backward" === a,
									t = { pages: n, pageParams: o },
									s = (
										e
											? function (e, { pages: t, pageParams: s }) {
													return t.length > 0
														? e.getPreviousPageParam?.(t[0], t, s[0], s)
														: void 0
												}
											: p
									)(r, t)
								u = await c(t, s, e)
							} else {
								let t = e ?? n.length
								do {
									let e = 0 === l ? (o[0] ?? r.initialPageParam) : p(r, u)
									if (l > 0 && null == e) break
									;(u = await c(u, e)), l++
								} while (l < t)
							}
							return u
						}
					t.options.persister
						? (t.fetchFn = () =>
								t.options.persister?.(
									h,
									{ client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
									i,
								))
						: (t.fetchFn = h)
				},
			}
		}
		function p(e, { pages: t, pageParams: s }) {
			let i = t.length - 1
			return t.length > 0 ? e.getNextPageParam(t[i], t, s[i], s) : void 0
		}
		var y = class {
				#p
				#l
				#a
				#y
				#m
				#g
				#v
				#b
				constructor(e = {}) {
					;(this.#p = e.queryCache || new n()),
						(this.#l = e.mutationCache || new l()),
						(this.#a = e.defaultOptions || {}),
						(this.#y = new Map()),
						(this.#m = new Map()),
						(this.#g = 0)
				}
				mount() {
					this.#g++,
						1 === this.#g &&
							((this.#v = c.focusManager.subscribe(async (e) => {
								e && (await this.resumePausedMutations(), this.#p.onFocus())
							})),
							(this.#b = d.onlineManager.subscribe(async (e) => {
								e && (await this.resumePausedMutations(), this.#p.onOnline())
							})))
				}
				unmount() {
					this.#g--, 0 === this.#g && (this.#v?.(), (this.#v = void 0), this.#b?.(), (this.#b = void 0))
				}
				isFetching(e) {
					return this.#p.findAll({ ...e, fetchStatus: "fetching" }).length
				}
				isMutating(e) {
					return this.#l.findAll({ ...e, status: "pending" }).length
				}
				getQueryData(e) {
					let t = this.defaultQueryOptions({ queryKey: e })
					return this.#p.get(t.queryHash)?.state.data
				}
				ensureQueryData(e) {
					let t = this.defaultQueryOptions(e),
						i = this.#p.build(this, t),
						r = i.state.data
					return void 0 === r
						? this.fetchQuery(e)
						: (e.revalidateIfStale &&
								i.isStaleByTime((0, s.resolveStaleTime)(t.staleTime, i)) &&
								this.prefetchQuery(t),
							Promise.resolve(r))
				}
				getQueriesData(e) {
					return this.#p.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data])
				}
				setQueryData(e, t, i) {
					let r = this.defaultQueryOptions({ queryKey: e }),
						a = this.#p.get(r.queryHash),
						n = a?.state.data,
						o = (0, s.functionalUpdate)(t, n)
					if (void 0 !== o) return this.#p.build(this, r).setData(o, { ...i, manual: !0 })
				}
				setQueriesData(e, t, s) {
					return r.notifyManager.batch(() =>
						this.#p.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, s)]),
					)
				}
				getQueryState(e) {
					let t = this.defaultQueryOptions({ queryKey: e })
					return this.#p.get(t.queryHash)?.state
				}
				removeQueries(e) {
					let t = this.#p
					r.notifyManager.batch(() => {
						t.findAll(e).forEach((e) => {
							t.remove(e)
						})
					})
				}
				resetQueries(e, t) {
					let s = this.#p
					return r.notifyManager.batch(
						() => (
							s.findAll(e).forEach((e) => {
								e.reset()
							}),
							this.refetchQueries({ type: "active", ...e }, t)
						),
					)
				}
				cancelQueries(e, t = {}) {
					let i = { revert: !0, ...t }
					return Promise.all(r.notifyManager.batch(() => this.#p.findAll(e).map((e) => e.cancel(i))))
						.then(s.noop)
						.catch(s.noop)
				}
				invalidateQueries(e, t = {}) {
					return r.notifyManager.batch(() =>
						(this.#p.findAll(e).forEach((e) => {
							e.invalidate()
						}),
						e?.refetchType === "none")
							? Promise.resolve()
							: this.refetchQueries({ ...e, type: e?.refetchType ?? e?.type ?? "active" }, t),
					)
				}
				refetchQueries(e, t = {}) {
					let i = { ...t, cancelRefetch: t.cancelRefetch ?? !0 }
					return Promise.all(
						r.notifyManager.batch(() =>
							this.#p
								.findAll(e)
								.filter((e) => !e.isDisabled())
								.map((e) => {
									let t = e.fetch(void 0, i)
									return (
										i.throwOnError || (t = t.catch(s.noop)),
										"paused" === e.state.fetchStatus ? Promise.resolve() : t
									)
								}),
						),
					).then(s.noop)
				}
				fetchQuery(e) {
					let t = this.defaultQueryOptions(e)
					void 0 === t.retry && (t.retry = !1)
					let i = this.#p.build(this, t)
					return i.isStaleByTime((0, s.resolveStaleTime)(t.staleTime, i))
						? i.fetch(t)
						: Promise.resolve(i.state.data)
				}
				prefetchQuery(e) {
					return this.fetchQuery(e).then(s.noop).catch(s.noop)
				}
				fetchInfiniteQuery(e) {
					return (e.behavior = f(e.pages)), this.fetchQuery(e)
				}
				prefetchInfiniteQuery(e) {
					return this.fetchInfiniteQuery(e).then(s.noop).catch(s.noop)
				}
				ensureInfiniteQueryData(e) {
					return (e.behavior = f(e.pages)), this.ensureQueryData(e)
				}
				resumePausedMutations() {
					return d.onlineManager.isOnline() ? this.#l.resumePausedMutations() : Promise.resolve()
				}
				getQueryCache() {
					return this.#p
				}
				getMutationCache() {
					return this.#l
				}
				getDefaultOptions() {
					return this.#a
				}
				setDefaultOptions(e) {
					this.#a = e
				}
				setQueryDefaults(e, t) {
					this.#y.set((0, s.hashKey)(e), { queryKey: e, defaultOptions: t })
				}
				getQueryDefaults(e) {
					let t = [...this.#y.values()],
						i = {}
					return (
						t.forEach((t) => {
							;(0, s.partialMatchKey)(e, t.queryKey) && Object.assign(i, t.defaultOptions)
						}),
						i
					)
				}
				setMutationDefaults(e, t) {
					this.#m.set((0, s.hashKey)(e), { mutationKey: e, defaultOptions: t })
				}
				getMutationDefaults(e) {
					let t = [...this.#m.values()],
						i = {}
					return (
						t.forEach((t) => {
							;(0, s.partialMatchKey)(e, t.mutationKey) && Object.assign(i, t.defaultOptions)
						}),
						i
					)
				}
				defaultQueryOptions(e) {
					if (e._defaulted) return e
					let t = { ...this.#a.queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 }
					return (
						t.queryHash || (t.queryHash = (0, s.hashQueryKeyByOptions)(t.queryKey, t)),
						void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode),
						void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
						!t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
						t.queryFn === s.skipToken && (t.enabled = !1),
						t
					)
				}
				defaultMutationOptions(e) {
					return e?._defaulted
						? e
						: {
								...this.#a.mutations,
								...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
								...e,
								_defaulted: !0,
							}
				}
				clear() {
					this.#p.clear(), this.#l.clear()
				}
			},
			m = e.i(61239)
		function g({ children: e }) {
			let s = new y()
			return (0, t.jsx)(m.QueryClientProvider, { client: s, children: e })
		}
		e.s(["ReactQueryProvider", () => g], 34697)
	},
	96961,
	(e, t, s) => {
		"use strict"
		Object.defineProperty(s, "__esModule", { value: !0 }),
			Object.defineProperty(s, "BailoutToCSR", {
				enumerable: !0,
				get: function () {
					return r
				},
			})
		let i = e.r(2698)
		function r({ reason: e, children: t }) {
			if ("u" < typeof window)
				throw Object.defineProperty(new i.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
					value: "E394",
					enumerable: !1,
					configurable: !0,
				})
			return t
		}
	},
	46257,
	(e, t, s) => {
		"use strict"
		function i(e) {
			return e
				.split("/")
				.map((e) => encodeURIComponent(e))
				.join("/")
		}
		Object.defineProperty(s, "__esModule", { value: !0 }),
			Object.defineProperty(s, "encodeURIPath", {
				enumerable: !0,
				get: function () {
					return i
				},
			})
	},
	31504,
	(e, t, s) => {
		"use strict"
		Object.defineProperty(s, "__esModule", { value: !0 }),
			Object.defineProperty(s, "PreloadChunks", {
				enumerable: !0,
				get: function () {
					return u
				},
			})
		let i = e.r(8026),
			r = e.r(68069),
			a = e.r(55058),
			n = e.r(46257),
			o = e.r(66584)
		function u({ moduleIds: e }) {
			if ("u" > typeof window) return null
			let t = a.workAsyncStorage.getStore()
			if (void 0 === t) return null
			let s = []
			if (t.reactLoadableManifest && e) {
				let i = t.reactLoadableManifest
				for (let t of e) {
					if (!i[t]) continue
					let e = i[t].files
					s.push(...e)
				}
			}
			if (0 === s.length) return null
			let u = (0, o.getDeploymentIdQueryOrEmptyString)()
			return (0, i.jsx)(i.Fragment, {
				children: s.map((e) => {
					let s = `${t.assetPrefix}/_next/${(0, n.encodeURIPath)(e)}${u}`
					return e.endsWith(".css")
						? (0, i.jsx)(
								"link",
								{ precedence: "dynamic", href: s, rel: "stylesheet", as: "style", nonce: t.nonce },
								e,
							)
						: ((0, r.preload)(s, { as: "script", fetchPriority: "low", nonce: t.nonce }), null)
				}),
			})
		}
	},
	49788,
	(e, t, s) => {
		"use strict"
		Object.defineProperty(s, "__esModule", { value: !0 }),
			Object.defineProperty(s, "default", {
				enumerable: !0,
				get: function () {
					return l
				},
			})
		let i = e.r(8026),
			r = e.r(10008),
			a = e.r(96961),
			n = e.r(31504)
		function o(e) {
			return { default: e && "default" in e ? e.default : e }
		}
		let u = { loader: () => Promise.resolve(o(() => null)), loading: null, ssr: !0 },
			l = function (e) {
				let t = { ...u, ...e },
					s = (0, r.lazy)(() => t.loader().then(o)),
					l = t.loading
				function h(e) {
					let o = l ? (0, i.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
						u = !t.ssr || !!t.loading,
						h = u ? r.Suspense : r.Fragment,
						c = t.ssr
							? (0, i.jsxs)(i.Fragment, {
									children: [
										"u" < typeof window
											? (0, i.jsx)(n.PreloadChunks, { moduleIds: t.modules })
											: null,
										(0, i.jsx)(s, { ...e }),
									],
								})
							: (0, i.jsx)(a.BailoutToCSR, { reason: "next/dynamic", children: (0, i.jsx)(s, { ...e }) })
					return (0, i.jsx)(h, { ...(u ? { fallback: o } : {}), children: c })
				}
				return (h.displayName = "LoadableComponent"), h
			}
	},
	41102,
	(e, t, s) => {
		"use strict"
		Object.defineProperty(s, "__esModule", { value: !0 }),
			Object.defineProperty(s, "default", {
				enumerable: !0,
				get: function () {
					return r
				},
			})
		let i = e.r(81258)._(e.r(49788))
		function r(e, t) {
			let s = {}
			"function" == typeof e && (s.loader = e)
			let r = { ...s, ...t }
			return (0, i.default)({ ...r, modules: r.loadableGenerated?.modules })
		}
		;("function" == typeof s.default || ("object" == typeof s.default && null !== s.default)) &&
			void 0 === s.default.__esModule &&
			(Object.defineProperty(s.default, "__esModule", { value: !0 }),
			Object.assign(s.default, s),
			(t.exports = s.default))
	},
	27912,
	(e) => {
		"use strict"
		var t = e.i(8026)
		let s = (0, e.i(41102).default)(() => e.A(74506).then((e) => e.ThemeProvider), {
			loadableGenerated: { modules: [6347] },
			ssr: !1,
		})
		function i({ children: e, ...i }) {
			return (0, t.jsx)(s, { ...i, children: e })
		}
		e.s(["ThemeProvider", () => i])
	},
	24070,
	(e) => {
		"use strict"
		var t = e.i(8026),
			s = e.i(10008),
			i = e.i(86192),
			r = function () {},
			a = s.useState
		let n = function (e) {
			var t,
				i,
				n = a(!1),
				o = n[0],
				u = n[1]
			return (
				"function" == typeof e && (e = e(o)),
				[
					s.cloneElement(e, {
						onMouseEnter:
							((t = e.props.onMouseEnter),
							function (e) {
								;(t || r)(e), u(!0)
							}),
						onMouseLeave:
							((i = e.props.onMouseLeave),
							function (e) {
								;(i || r)(e), u(!1)
							}),
					}),
					o,
				]
			)
		}
		var o = e.i(46030)
		let u = ({ width: e = 50, height: s = 32, fill: r = "#fff", className: a, ...n }) => {
			let u = (0, i.useRouter)()
			return (0, t.jsx)("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: e,
				height: s,
				viewBox: "90 12 100 64",
				onClick: () => u.push("/"),
				className: (0, o.cn)("logo cursor-pointer", a),
				...n,
				children: (0, t.jsx)("path", {
					d: "M171.633,15.8336l-1.7284,6.2499c-.0915.3309-.4369.5221-.7659.4239l-28.9937-8.6507c-.1928-.0575-.4016-.0167-.5586.1092l-28.7143,23.0269c-.0838.0672-.1839.1112-.2901.1276l-17.0849,2.6329c-.3163.0488-.5419.3327-.5178.6519l.0742.9817c.0237.3136.2809.5583.5953.5664l19.8448.513.2263.0063,14.6634-7.8328c.2053-.1097.455-.0936.6445.0415l10.3884,7.4053c.1629.1161.2589.3045.2571.5045l-.0876,9.826c-.0011.1272.0373.2515.11.3559l14.6133,20.9682c.1146.1644.3024.2624.5028.2624h4.626c.4615,0,.7574-.4908.542-.8989l-10.4155-19.7312c-.1019-.193-.0934-.4255.0221-.6106l5.4305-8.6994c.0591-.0947.143-.1715.2425-.222l19.415-9.8522c.1973-.1001.4332-.0861.6172.0366l5.5481,3.6981c.1007.0671.2189.1029.3399.1029h5.0407c.4881,0,.7804-.5429.5116-.9503l-13.9967-21.2171c-.2898-.4393-.962-.3331-1.1022.1741Z",
					fill: r,
					strokeWidth: "0",
				}),
			})
		}
		e.s(
			[
				"HoppingLogo",
				0,
				(e) => {
					let i = (0, s.useRef)(null),
						[r, a] = n((0, t.jsx)(u, { ref: i, ...e }))
					return (
						(0, s.useEffect)(() => {
							let e = i.current,
								t = null !== e && e.classList.contains("animate-hop")
							if (a && e && !t) e.classList.add("animate-hop")
							else if (e && t) {
								let t = () => {
									e.classList.remove("animate-hop"), e.removeEventListener("animationiteration", t)
								}
								e.addEventListener("animationiteration", t)
							}
						}, [a]),
						r
					)
				},
				"Logo",
				0,
				u,
			],
			24070,
		)
	},
	74506,
	(e) => {
		e.v((t) => Promise.all(["static/chunks/d05256292c5626c1.js"].map((t) => e.l(t))).then(() => t(6347)))
	},
])
