module.exports = [
	24326,
	(a, b, c) => {
		"use strict"
		b.exports = a.r(37042).vendored.contexts.AppRouterContext
	},
	77545,
	(a, b, c) => {
		"use strict"
		b.exports = a.r(37042).vendored.contexts.HooksClientContext
	},
	80506,
	(a, b, c) => {
		"use strict"
		b.exports = a.r(37042).vendored.contexts.ServerInsertedHtml
	},
	18622,
	(a, b, c) => {
		b.exports = a.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js", () =>
			require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"),
		)
	},
	56704,
	(a, b, c) => {
		b.exports = a.x("next/dist/server/app-render/work-async-storage.external.js", () =>
			require("next/dist/server/app-render/work-async-storage.external.js"),
		)
	},
	32319,
	(a, b, c) => {
		b.exports = a.x("next/dist/server/app-render/work-unit-async-storage.external.js", () =>
			require("next/dist/server/app-render/work-unit-async-storage.external.js"),
		)
	},
	20635,
	(a, b, c) => {
		b.exports = a.x("next/dist/server/app-render/action-async-storage.external.js", () =>
			require("next/dist/server/app-render/action-async-storage.external.js"),
		)
	},
	37042,
	(a, b, c) => {
		"use strict"
		b.exports = a.r(18622)
	},
	9116,
	(a, b, c) => {
		"use strict"
		b.exports = a.r(37042).vendored["react-ssr"].ReactJsxRuntime
	},
	67191,
	(a, b, c) => {
		"use strict"
		b.exports = a.r(37042).vendored["react-ssr"].React
	},
	23360,
	(a, b, c) => {
		"use strict"
		b.exports = a.r(37042).vendored["react-ssr"].ReactDOM
	},
	98064,
	(a) => {
		"use strict"
		var b = a.i(88989),
			c = a.i(15773),
			d = a.i(33115),
			e = a.i(38394),
			f = class extends e.Removable {
				#a
				#b
				#c
				#d
				#e
				#f
				#g
				constructor(a) {
					super(),
						(this.#g = !1),
						(this.#f = a.defaultOptions),
						this.setOptions(a.options),
						(this.observers = []),
						(this.#d = a.client),
						(this.#c = this.#d.getQueryCache()),
						(this.queryKey = a.queryKey),
						(this.queryHash = a.queryHash),
						(this.#a = (function (a) {
							let b = "function" == typeof a.initialData ? a.initialData() : a.initialData,
								c = void 0 !== b,
								d = c
									? "function" == typeof a.initialDataUpdatedAt
										? a.initialDataUpdatedAt()
										: a.initialDataUpdatedAt
									: 0
							return {
								data: b,
								dataUpdateCount: 0,
								dataUpdatedAt: c ? (d ?? Date.now()) : 0,
								error: null,
								errorUpdateCount: 0,
								errorUpdatedAt: 0,
								fetchFailureCount: 0,
								fetchFailureReason: null,
								fetchMeta: null,
								isInvalidated: !1,
								status: c ? "success" : "pending",
								fetchStatus: "idle",
							}
						})(this.options)),
						(this.state = a.state ?? this.#a),
						this.scheduleGc()
				}
				get meta() {
					return this.options.meta
				}
				get promise() {
					return this.#e?.promise
				}
				setOptions(a) {
					;(this.options = { ...this.#f, ...a }), this.updateGcTime(this.options.gcTime)
				}
				optionalRemove() {
					this.observers.length || "idle" !== this.state.fetchStatus || this.#c.remove(this)
				}
				setData(a, c) {
					let d = (0, b.replaceData)(this.state.data, a, this.options)
					return this.#h({ data: d, type: "success", dataUpdatedAt: c?.updatedAt, manual: c?.manual }), d
				}
				setState(a, b) {
					this.#h({ type: "setState", state: a, setStateOptions: b })
				}
				cancel(a) {
					let c = this.#e?.promise
					return this.#e?.cancel(a), c ? c.then(b.noop).catch(b.noop) : Promise.resolve()
				}
				destroy() {
					super.destroy(), this.cancel({ silent: !0 })
				}
				reset() {
					this.destroy(), this.setState(this.#a)
				}
				isActive() {
					return this.observers.some((a) => !1 !== (0, b.resolveEnabled)(a.options.enabled, this))
				}
				isDisabled() {
					return this.getObserversCount() > 0
						? !this.isActive()
						: this.options.queryFn === b.skipToken ||
								this.state.dataUpdateCount + this.state.errorUpdateCount === 0
				}
				isStale() {
					return (
						!!this.state.isInvalidated ||
						(this.getObserversCount() > 0
							? this.observers.some((a) => a.getCurrentResult().isStale)
							: void 0 === this.state.data)
					)
				}
				isStaleByTime(a = 0) {
					return (
						this.state.isInvalidated ||
						void 0 === this.state.data ||
						!(0, b.timeUntilStale)(this.state.dataUpdatedAt, a)
					)
				}
				onFocus() {
					let a = this.observers.find((a) => a.shouldFetchOnWindowFocus())
					a?.refetch({ cancelRefetch: !1 }), this.#e?.continue()
				}
				onOnline() {
					let a = this.observers.find((a) => a.shouldFetchOnReconnect())
					a?.refetch({ cancelRefetch: !1 }), this.#e?.continue()
				}
				addObserver(a) {
					this.observers.includes(a) ||
						(this.observers.push(a),
						this.clearGcTimeout(),
						this.#c.notify({ type: "observerAdded", query: this, observer: a }))
				}
				removeObserver(a) {
					this.observers.includes(a) &&
						((this.observers = this.observers.filter((b) => b !== a)),
						this.observers.length ||
							(this.#e && (this.#g ? this.#e.cancel({ revert: !0 }) : this.#e.cancelRetry()),
							this.scheduleGc()),
						this.#c.notify({ type: "observerRemoved", query: this, observer: a }))
				}
				getObserversCount() {
					return this.observers.length
				}
				invalidate() {
					this.state.isInvalidated || this.#h({ type: "invalidate" })
				}
				fetch(a, c) {
					if ("idle" !== this.state.fetchStatus) {
						if (void 0 !== this.state.data && c?.cancelRefetch) this.cancel({ silent: !0 })
						else if (this.#e) return this.#e.continueRetry(), this.#e.promise
					}
					if ((a && this.setOptions(a), !this.options.queryFn)) {
						let a = this.observers.find((a) => a.options.queryFn)
						a && this.setOptions(a.options)
					}
					let e = new AbortController(),
						f = (a) => {
							Object.defineProperty(a, "signal", {
								enumerable: !0,
								get: () => ((this.#g = !0), e.signal),
							})
						},
						g = () => {
							let a = (0, b.ensureQueryFn)(this.options, c),
								d = { client: this.#d, queryKey: this.queryKey, meta: this.meta }
							return (f(d), (this.#g = !1), this.options.persister)
								? this.options.persister(a, d, this)
								: a(d)
						},
						h = {
							fetchOptions: c,
							options: this.options,
							queryKey: this.queryKey,
							client: this.#d,
							state: this.state,
							fetchFn: g,
						}
					f(h),
						this.options.behavior?.onFetch(h, this),
						(this.#b = this.state),
						("idle" === this.state.fetchStatus || this.state.fetchMeta !== h.fetchOptions?.meta) &&
							this.#h({ type: "fetch", meta: h.fetchOptions?.meta })
					let i = (a) => {
						;((0, d.isCancelledError)(a) && a.silent) || this.#h({ type: "error", error: a }),
							(0, d.isCancelledError)(a) ||
								(this.#c.config.onError?.(a, this),
								this.#c.config.onSettled?.(this.state.data, a, this)),
							this.scheduleGc()
					}
					return (
						(this.#e = (0, d.createRetryer)({
							initialPromise: c?.initialPromise,
							fn: h.fetchFn,
							abort: e.abort.bind(e),
							onSuccess: (a) => {
								if (void 0 === a) return void i(Error(`${this.queryHash} data is undefined`))
								try {
									this.setData(a)
								} catch (a) {
									i(a)
									return
								}
								this.#c.config.onSuccess?.(a, this),
									this.#c.config.onSettled?.(a, this.state.error, this),
									this.scheduleGc()
							},
							onError: i,
							onFail: (a, b) => {
								this.#h({ type: "failed", failureCount: a, error: b })
							},
							onPause: () => {
								this.#h({ type: "pause" })
							},
							onContinue: () => {
								this.#h({ type: "continue" })
							},
							retry: h.options.retry,
							retryDelay: h.options.retryDelay,
							networkMode: h.options.networkMode,
							canRun: () => !0,
						})),
						this.#e.start()
					)
				}
				#h(a) {
					let b = (b) => {
						switch (a.type) {
							case "failed":
								return { ...b, fetchFailureCount: a.failureCount, fetchFailureReason: a.error }
							case "pause":
								return { ...b, fetchStatus: "paused" }
							case "continue":
								return { ...b, fetchStatus: "fetching" }
							case "fetch":
								return { ...b, ...g(b.data, this.options), fetchMeta: a.meta ?? null }
							case "success":
								return {
									...b,
									data: a.data,
									dataUpdateCount: b.dataUpdateCount + 1,
									dataUpdatedAt: a.dataUpdatedAt ?? Date.now(),
									error: null,
									isInvalidated: !1,
									status: "success",
									...(!a.manual && {
										fetchStatus: "idle",
										fetchFailureCount: 0,
										fetchFailureReason: null,
									}),
								}
							case "error":
								let c = a.error
								if ((0, d.isCancelledError)(c) && c.revert && this.#b)
									return { ...this.#b, fetchStatus: "idle" }
								return {
									...b,
									error: c,
									errorUpdateCount: b.errorUpdateCount + 1,
									errorUpdatedAt: Date.now(),
									fetchFailureCount: b.fetchFailureCount + 1,
									fetchFailureReason: c,
									fetchStatus: "idle",
									status: "error",
								}
							case "invalidate":
								return { ...b, isInvalidated: !0 }
							case "setState":
								return { ...b, ...a.state }
						}
					}
					;(this.state = b(this.state)),
						c.notifyManager.batch(() => {
							this.observers.forEach((a) => {
								a.onQueryUpdate()
							}),
								this.#c.notify({ query: this, type: "updated", action: a })
						})
				}
			}
		function g(a, b) {
			return {
				fetchFailureCount: 0,
				fetchFailureReason: null,
				fetchStatus: (0, d.canFetch)(b.networkMode) ? "fetching" : "paused",
				...(void 0 === a && { error: null, status: "pending" }),
			}
		}
		a.s(["Query", () => f, "fetchState", () => g])
	},
	79989,
	(a) => {
		"use strict"
		var b = a.i(15773),
			c = a.i(38394),
			d = a.i(33115),
			e = class extends c.Removable {
				#i
				#j
				#e
				constructor(a) {
					super(),
						(this.mutationId = a.mutationId),
						(this.#j = a.mutationCache),
						(this.#i = []),
						(this.state = a.state || f()),
						this.setOptions(a.options),
						this.scheduleGc()
				}
				setOptions(a) {
					;(this.options = a), this.updateGcTime(this.options.gcTime)
				}
				get meta() {
					return this.options.meta
				}
				addObserver(a) {
					this.#i.includes(a) ||
						(this.#i.push(a),
						this.clearGcTimeout(),
						this.#j.notify({ type: "observerAdded", mutation: this, observer: a }))
				}
				removeObserver(a) {
					;(this.#i = this.#i.filter((b) => b !== a)),
						this.scheduleGc(),
						this.#j.notify({ type: "observerRemoved", mutation: this, observer: a })
				}
				optionalRemove() {
					this.#i.length || ("pending" === this.state.status ? this.scheduleGc() : this.#j.remove(this))
				}
				continue() {
					return this.#e?.continue() ?? this.execute(this.state.variables)
				}
				async execute(a) {
					let b = () => {
						this.#h({ type: "continue" })
					}
					this.#e = (0, d.createRetryer)({
						fn: () =>
							this.options.mutationFn
								? this.options.mutationFn(a)
								: Promise.reject(Error("No mutationFn found")),
						onFail: (a, b) => {
							this.#h({ type: "failed", failureCount: a, error: b })
						},
						onPause: () => {
							this.#h({ type: "pause" })
						},
						onContinue: b,
						retry: this.options.retry ?? 0,
						retryDelay: this.options.retryDelay,
						networkMode: this.options.networkMode,
						canRun: () => this.#j.canRun(this),
					})
					let c = "pending" === this.state.status,
						e = !this.#e.canStart()
					try {
						if (c) b()
						else {
							this.#h({ type: "pending", variables: a, isPaused: e }),
								await this.#j.config.onMutate?.(a, this)
							let b = await this.options.onMutate?.(a)
							b !== this.state.context &&
								this.#h({ type: "pending", context: b, variables: a, isPaused: e })
						}
						let d = await this.#e.start()
						return (
							await this.#j.config.onSuccess?.(d, a, this.state.context, this),
							await this.options.onSuccess?.(d, a, this.state.context),
							await this.#j.config.onSettled?.(d, null, this.state.variables, this.state.context, this),
							await this.options.onSettled?.(d, null, a, this.state.context),
							this.#h({ type: "success", data: d }),
							d
						)
					} catch (b) {
						try {
							throw (
								(await this.#j.config.onError?.(b, a, this.state.context, this),
								await this.options.onError?.(b, a, this.state.context),
								await this.#j.config.onSettled?.(
									void 0,
									b,
									this.state.variables,
									this.state.context,
									this,
								),
								await this.options.onSettled?.(void 0, b, a, this.state.context),
								b)
							)
						} finally {
							this.#h({ type: "error", error: b })
						}
					} finally {
						this.#j.runNext(this)
					}
				}
				#h(a) {
					;(this.state = ((b) => {
						switch (a.type) {
							case "failed":
								return { ...b, failureCount: a.failureCount, failureReason: a.error }
							case "pause":
								return { ...b, isPaused: !0 }
							case "continue":
								return { ...b, isPaused: !1 }
							case "pending":
								return {
									...b,
									context: a.context,
									data: void 0,
									failureCount: 0,
									failureReason: null,
									error: null,
									isPaused: a.isPaused,
									status: "pending",
									variables: a.variables,
									submittedAt: Date.now(),
								}
							case "success":
								return {
									...b,
									data: a.data,
									failureCount: 0,
									failureReason: null,
									error: null,
									status: "success",
									isPaused: !1,
								}
							case "error":
								return {
									...b,
									data: void 0,
									error: a.error,
									failureCount: b.failureCount + 1,
									failureReason: a.error,
									isPaused: !1,
									status: "error",
								}
						}
					})(this.state)),
						b.notifyManager.batch(() => {
							this.#i.forEach((b) => {
								b.onMutationUpdate(a)
							}),
								this.#j.notify({ mutation: this, type: "updated", action: a })
						})
				}
			}
		function f() {
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
		a.s(["Mutation", () => e, "getDefaultState", () => f])
	},
	54588,
	(a, b, c) => {
		"use strict"
		Object.defineProperty(c, "__esModule", { value: !0 })
		var d = {
			getDeploymentId: function () {
				return f
			},
			getDeploymentIdQueryOrEmptyString: function () {
				return g
			},
		}
		for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] })
		function f() {
			return !1
		}
		function g() {
			return ""
		}
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__39b4c121._.js.map
