;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	76146,
	(e) => {
		"use strict"
		var t = "u" < typeof window || "Deno" in globalThis
		function r() {}
		function n(e, t) {
			return "function" == typeof e ? e(t) : e
		}
		function o(e) {
			return "number" == typeof e && e >= 0 && e !== 1 / 0
		}
		function a(e, t) {
			return Math.max(e + (t || 0) - Date.now(), 0)
		}
		function i(e, t) {
			return "function" == typeof e ? e(t) : e
		}
		function l(e, t) {
			return "function" == typeof e ? e(t) : e
		}
		function s(e, t) {
			let { type: r = "all", exact: n, fetchStatus: o, predicate: a, queryKey: i, stale: l } = e
			if (i) {
				if (n) {
					if (t.queryHash !== d(i, t.options)) return !1
				} else if (!f(t.queryKey, i)) return !1
			}
			if ("all" !== r) {
				let e = t.isActive()
				if (("active" === r && !e) || ("inactive" === r && e)) return !1
			}
			return ("boolean" != typeof l || t.isStale() === l) && (!o || o === t.state.fetchStatus) && (!a || !!a(t))
		}
		function u(e, t) {
			let { exact: r, status: n, predicate: o, mutationKey: a } = e
			if (a) {
				if (!t.options.mutationKey) return !1
				if (r) {
					if (c(t.options.mutationKey) !== c(a)) return !1
				} else if (!f(t.options.mutationKey, a)) return !1
			}
			return (!n || t.state.status === n) && (!o || !!o(t))
		}
		function d(e, t) {
			return (t?.queryKeyHashFn || c)(e)
		}
		function c(e) {
			return JSON.stringify(e, (e, t) =>
				h(t)
					? Object.keys(t)
							.sort()
							.reduce((e, r) => ((e[r] = t[r]), e), {})
					: t,
			)
		}
		function f(e, t) {
			return (
				e === t ||
				(typeof e == typeof t &&
					!!e &&
					!!t &&
					"object" == typeof e &&
					"object" == typeof t &&
					Object.keys(t).every((r) => f(e[r], t[r])))
			)
		}
		function p(e, t) {
			if (!t || Object.keys(e).length !== Object.keys(t).length) return !1
			for (let r in e) if (e[r] !== t[r]) return !1
			return !0
		}
		function m(e) {
			return Array.isArray(e) && e.length === Object.keys(e).length
		}
		function h(e) {
			if (!v(e)) return !1
			let t = e.constructor
			if (void 0 === t) return !0
			let r = t.prototype
			return !!v(r) && !!r.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(e) === Object.prototype
		}
		function v(e) {
			return "[object Object]" === Object.prototype.toString.call(e)
		}
		function g(e) {
			return new Promise((t) => {
				setTimeout(t, e)
			})
		}
		function y(e, t, r) {
			return "function" == typeof r.structuralSharing
				? r.structuralSharing(e, t)
				: !1 !== r.structuralSharing
					? (function e(t, r) {
							if (t === r) return t
							let n = m(t) && m(r)
							if (n || (h(t) && h(r))) {
								let o = n ? t : Object.keys(t),
									a = o.length,
									i = n ? r : Object.keys(r),
									l = i.length,
									s = n ? [] : {},
									u = 0
								for (let a = 0; a < l; a++) {
									let l = n ? a : i[a]
									;((!n && o.includes(l)) || n) && void 0 === t[l] && void 0 === r[l]
										? ((s[l] = void 0), u++)
										: ((s[l] = e(t[l], r[l])), s[l] === t[l] && void 0 !== t[l] && u++)
								}
								return a === l && u === a ? t : s
							}
							return r
						})(e, t)
					: t
		}
		function b(e) {
			return e
		}
		function w(e, t, r = 0) {
			let n = [...e, t]
			return r && n.length > r ? n.slice(1) : n
		}
		function x(e, t, r = 0) {
			let n = [t, ...e]
			return r && n.length > r ? n.slice(0, -1) : n
		}
		var E = Symbol()
		function C(e, t) {
			return !e.queryFn && t?.initialPromise
				? () => t.initialPromise
				: e.queryFn && e.queryFn !== E
					? e.queryFn
					: () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
		}
		function k(e, t) {
			return "function" == typeof e ? e(...t) : !!e
		}
		e.s([
			"addToEnd",
			() => w,
			"addToStart",
			() => x,
			"ensureQueryFn",
			() => C,
			"functionalUpdate",
			() => n,
			"hashKey",
			() => c,
			"hashQueryKeyByOptions",
			() => d,
			"isServer",
			() => t,
			"isValidTimeout",
			() => o,
			"keepPreviousData",
			() => b,
			"matchMutation",
			() => u,
			"matchQuery",
			() => s,
			"noop",
			() => r,
			"partialMatchKey",
			() => f,
			"replaceData",
			() => y,
			"resolveEnabled",
			() => l,
			"resolveStaleTime",
			() => i,
			"shallowEqualObjects",
			() => p,
			"shouldThrowError",
			() => k,
			"skipToken",
			() => E,
			"sleep",
			() => g,
			"timeUntilStale",
			() => a,
		])
	},
	26714,
	(e) => {
		"use strict"
		let t, r, n, o, a, i
		var l =
			((t = []),
			(r = 0),
			(n = (e) => {
				e()
			}),
			(o = (e) => {
				e()
			}),
			(a = (e) => setTimeout(e, 0)),
			{
				batch: (e) => {
					let i
					r++
					try {
						i = e()
					} finally {
						let e
						--r ||
							((e = t),
							(t = []),
							e.length &&
								a(() => {
									o(() => {
										e.forEach((e) => {
											n(e)
										})
									})
								}))
					}
					return i
				},
				batchCalls:
					(e) =>
					(...t) => {
						i(() => {
							e(...t)
						})
					},
				schedule: (i = (e) => {
					r
						? t.push(e)
						: a(() => {
								n(e)
							})
				}),
				setNotifyFunction: (e) => {
					n = e
				},
				setBatchNotifyFunction: (e) => {
					o = e
				},
				setScheduler: (e) => {
					a = e
				},
			})
		e.s(["notifyManager", () => l])
	},
	69380,
	(e) => {
		"use strict"
		var t = class {
			constructor() {
				;(this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this))
			}
			subscribe(e) {
				return (
					this.listeners.add(e),
					this.onSubscribe(),
					() => {
						this.listeners.delete(e), this.onUnsubscribe()
					}
				)
			}
			hasListeners() {
				return this.listeners.size > 0
			}
			onSubscribe() {}
			onUnsubscribe() {}
		}
		e.s(["Subscribable", () => t])
	},
	71167,
	(e) => {
		"use strict"
		var t = e.i(69380),
			r = e.i(76146),
			n = new (class extends t.Subscribable {
				#e
				#t
				#r
				constructor() {
					super(),
						(this.#r = (e) => {
							if (!r.isServer && window.addEventListener) {
								let t = () => e()
								return (
									window.addEventListener("visibilitychange", t, !1),
									() => {
										window.removeEventListener("visibilitychange", t)
									}
								)
							}
						})
				}
				onSubscribe() {
					this.#t || this.setEventListener(this.#r)
				}
				onUnsubscribe() {
					this.hasListeners() || (this.#t?.(), (this.#t = void 0))
				}
				setEventListener(e) {
					;(this.#r = e),
						this.#t?.(),
						(this.#t = e((e) => {
							"boolean" == typeof e ? this.setFocused(e) : this.onFocus()
						}))
				}
				setFocused(e) {
					this.#e !== e && ((this.#e = e), this.onFocus())
				}
				onFocus() {
					let e = this.isFocused()
					this.listeners.forEach((t) => {
						t(e)
					})
				}
				isFocused() {
					return "boolean" == typeof this.#e ? this.#e : globalThis.document?.visibilityState !== "hidden"
				}
			})()
		e.s(["focusManager", () => n])
	},
	74572,
	28970,
	83441,
	(e) => {
		"use strict"
		var t = e.i(71167),
			r = e.i(69380),
			n = e.i(76146),
			o = new (class extends r.Subscribable {
				#n = !0
				#t
				#r
				constructor() {
					super(),
						(this.#r = (e) => {
							if (!n.isServer && window.addEventListener) {
								let t = () => e(!0),
									r = () => e(!1)
								return (
									window.addEventListener("online", t, !1),
									window.addEventListener("offline", r, !1),
									() => {
										window.removeEventListener("online", t),
											window.removeEventListener("offline", r)
									}
								)
							}
						})
				}
				onSubscribe() {
					this.#t || this.setEventListener(this.#r)
				}
				onUnsubscribe() {
					this.hasListeners() || (this.#t?.(), (this.#t = void 0))
				}
				setEventListener(e) {
					;(this.#r = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this)))
				}
				setOnline(e) {
					this.#n !== e &&
						((this.#n = e),
						this.listeners.forEach((t) => {
							t(e)
						}))
				}
				isOnline() {
					return this.#n
				}
			})()
		function a() {
			let e,
				t,
				r = new Promise((r, n) => {
					;(e = r), (t = n)
				})
			function n(e) {
				Object.assign(r, e), delete r.resolve, delete r.reject
			}
			return (
				(r.status = "pending"),
				r.catch(() => {}),
				(r.resolve = (t) => {
					n({ status: "fulfilled", value: t }), e(t)
				}),
				(r.reject = (e) => {
					n({ status: "rejected", reason: e }), t(e)
				}),
				r
			)
		}
		function i(e) {
			return Math.min(1e3 * 2 ** e, 3e4)
		}
		function l(e) {
			return (e ?? "online") !== "online" || o.isOnline()
		}
		e.s(["onlineManager", () => o], 28970), e.s(["pendingThenable", () => a], 83441)
		var s = class extends Error {
			constructor(e) {
				super("CancelledError"), (this.revert = e?.revert), (this.silent = e?.silent)
			}
		}
		function u(e) {
			return e instanceof s
		}
		function d(e) {
			let r,
				u = !1,
				d = 0,
				c = !1,
				f = a(),
				p = () => t.focusManager.isFocused() && ("always" === e.networkMode || o.isOnline()) && e.canRun(),
				m = () => l(e.networkMode) && e.canRun(),
				h = (t) => {
					c || ((c = !0), e.onSuccess?.(t), r?.(), f.resolve(t))
				},
				v = (t) => {
					c || ((c = !0), e.onError?.(t), r?.(), f.reject(t))
				},
				g = () =>
					new Promise((t) => {
						;(r = (e) => {
							;(c || p()) && t(e)
						}),
							e.onPause?.()
					}).then(() => {
						;(r = void 0), c || e.onContinue?.()
					}),
				y = () => {
					let t
					if (c) return
					let r = 0 === d ? e.initialPromise : void 0
					try {
						t = r ?? e.fn()
					} catch (e) {
						t = Promise.reject(e)
					}
					Promise.resolve(t)
						.then(h)
						.catch((t) => {
							if (c) return
							let r = e.retry ?? 3 * !n.isServer,
								o = e.retryDelay ?? i,
								a = "function" == typeof o ? o(d, t) : o,
								l = !0 === r || ("number" == typeof r && d < r) || ("function" == typeof r && r(d, t))
							u || !l
								? v(t)
								: (d++,
									e.onFail?.(d, t),
									(0, n.sleep)(a)
										.then(() => (p() ? void 0 : g()))
										.then(() => {
											u ? v(t) : y()
										}))
						})
				}
			return {
				promise: f,
				cancel: (t) => {
					c || (v(new s(t)), e.abort?.())
				},
				continue: () => (r?.(), f),
				cancelRetry: () => {
					u = !0
				},
				continueRetry: () => {
					u = !1
				},
				canStart: m,
				start: () => (m() ? y() : g().then(y), f),
			}
		}
		e.s(["canFetch", () => l, "createRetryer", () => d, "isCancelledError", () => u], 74572)
	},
	3274,
	(e) => {
		"use strict"
		var t = e.i(76146),
			r = class {
				#o
				destroy() {
					this.clearGcTimeout()
				}
				scheduleGc() {
					this.clearGcTimeout(),
						(0, t.isValidTimeout)(this.gcTime) &&
							(this.#o = setTimeout(() => {
								this.optionalRemove()
							}, this.gcTime))
				}
				updateGcTime(e) {
					this.gcTime = Math.max(this.gcTime || 0, e ?? (t.isServer ? 1 / 0 : 3e5))
				}
				clearGcTimeout() {
					this.#o && (clearTimeout(this.#o), (this.#o = void 0))
				}
			}
		e.s(["Removable", () => r])
	},
	61239,
	(e) => {
		"use strict"
		var t = e.i(10008),
			r = e.i(8026),
			n = t.createContext(void 0),
			o = (e) => {
				let r = t.useContext(n)
				if (e) return e
				if (!r) throw Error("No QueryClient set, use QueryClientProvider to set one")
				return r
			},
			a = ({ client: e, children: o }) => (
				t.useEffect(
					() => (
						e.mount(),
						() => {
							e.unmount()
						}
					),
					[e],
				),
				(0, r.jsx)(n.Provider, { value: e, children: o })
			)
		e.s(["QueryClientProvider", () => a, "useQueryClient", () => o])
	},
	26613,
	(e) => {
		"use strict"
		var t = e.i(10008)
		function r(e, t) {
			if ("function" == typeof e) return e(t)
			null != e && (e.current = t)
		}
		function n(...e) {
			return (t) => {
				let n = !1,
					o = e.map((e) => {
						let o = r(e, t)
						return n || "function" != typeof o || (n = !0), o
					})
				if (n)
					return () => {
						for (let t = 0; t < o.length; t++) {
							let n = o[t]
							"function" == typeof n ? n() : r(e[t], null)
						}
					}
			}
		}
		function o(...e) {
			return t.useCallback(n(...e), e)
		}
		e.s(["composeRefs", () => n, "useComposedRefs", () => o])
	},
	75453,
	(e) => {
		"use strict"
		function t(e, r, { checkForDefaultPrevented: n = !0 } = {}) {
			return function (t) {
				if ((e?.(t), !1 === n || !t.defaultPrevented)) return r?.(t)
			}
		}
		e.s(["composeEventHandlers", () => t])
	},
	4113,
	29241,
	(e) => {
		"use strict"
		var t = e.i(10008),
			r = e.i(8026)
		function n(e, n) {
			let o = t.createContext(n),
				a = (e) => {
					let { children: n, ...a } = e,
						i = t.useMemo(() => a, Object.values(a))
					return (0, r.jsx)(o.Provider, { value: i, children: n })
				}
			return (
				(a.displayName = e + "Provider"),
				[
					a,
					function (r) {
						let a = t.useContext(o)
						if (a) return a
						if (void 0 !== n) return n
						throw Error(`\`${r}\` must be used within \`${e}\``)
					},
				]
			)
		}
		function o(e, n = []) {
			let a = [],
				i = () => {
					let r = a.map((e) => t.createContext(e))
					return function (n) {
						let o = n?.[e] || r
						return t.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: o } }), [n, o])
					}
				}
			return (
				(i.scopeName = e),
				[
					function (n, o) {
						let i = t.createContext(o),
							l = a.length
						a = [...a, o]
						let s = (n) => {
							let { scope: o, children: a, ...s } = n,
								u = o?.[e]?.[l] || i,
								d = t.useMemo(() => s, Object.values(s))
							return (0, r.jsx)(u.Provider, { value: d, children: a })
						}
						return (
							(s.displayName = n + "Provider"),
							[
								s,
								function (r, a) {
									let s = a?.[e]?.[l] || i,
										u = t.useContext(s)
									if (u) return u
									if (void 0 !== o) return o
									throw Error(`\`${r}\` must be used within \`${n}\``)
								},
							]
						)
					},
					(function (...e) {
						let r = e[0]
						if (1 === e.length) return r
						let n = () => {
							let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }))
							return function (e) {
								let o = n.reduce((t, { useScope: r, scopeName: n }) => {
									let o = r(e)[`__scope${n}`]
									return { ...t, ...o }
								}, {})
								return t.useMemo(() => ({ [`__scope${r.scopeName}`]: o }), [o])
							}
						}
						return (n.scopeName = r.scopeName), n
					})(i, ...n),
				]
			)
		}
		e.s(["createContext", () => n, "createContextScope", () => o], 4113)
		var a = globalThis?.document ? t.useLayoutEffect : () => {}
		e.s(["useLayoutEffect", () => a], 29241)
	},
	55162,
	(e) => {
		"use strict"
		var t = e.i(10008),
			r = e.i(29241),
			n = t[" useId ".trim().toString()] || (() => void 0),
			o = 0
		function a(e) {
			let [a, i] = t.useState(n())
			return (
				(0, r.useLayoutEffect)(() => {
					e || i((e) => e ?? String(o++))
				}, [e]),
				e || (a ? `radix-${a}` : "")
			)
		}
		e.s(["useId", () => a])
	},
	93180,
	(e) => {
		"use strict"
		var t = e.i(10008),
			r = e.i(29241)
		t[" useEffectEvent ".trim().toString()], t[" useInsertionEffect ".trim().toString()]
		var n = t[" useInsertionEffect ".trim().toString()] || r.useLayoutEffect
		function o({ prop: e, defaultProp: r, onChange: o = () => {}, caller: a }) {
			let [i, l, s] = (function ({ defaultProp: e, onChange: r }) {
					let [o, a] = t.useState(e),
						i = t.useRef(o),
						l = t.useRef(r)
					return (
						n(() => {
							l.current = r
						}, [r]),
						t.useEffect(() => {
							i.current !== o && (l.current?.(o), (i.current = o))
						}, [o, i]),
						[o, a, l]
					)
				})({ defaultProp: r, onChange: o }),
				u = void 0 !== e,
				d = u ? e : i
			{
				let r = t.useRef(void 0 !== e)
				t.useEffect(() => {
					let e = r.current
					if (e !== u) {
						let t = u ? "controlled" : "uncontrolled"
						console.warn(
							`${a} is changing from ${e ? "controlled" : "uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
						)
					}
					r.current = u
				}, [u, a])
			}
			return [
				d,
				t.useCallback(
					(t) => {
						if (u) {
							let r = "function" == typeof t ? t(e) : t
							r !== e && s.current?.(r)
						} else l(t)
					},
					[u, e, l, s],
				),
			]
		}
		Symbol("RADIX:SYNC_STATE"), e.s(["useControllableState", () => o], 93180)
	},
	16853,
	(e) => {
		"use strict"
		var t = e.i(10008),
			r = e.i(26613),
			n = e.i(8026)
		function o(e) {
			var o
			let a,
				i =
					((o = e),
					((a = t.forwardRef((e, n) => {
						var o
						let a,
							i,
							{ children: l, ...s } = e,
							u = t.isValidElement(l)
								? ((o = l),
									(i =
										(a = Object.getOwnPropertyDescriptor(o.props, "ref")?.get) &&
										"isReactWarning" in a &&
										a.isReactWarning)
										? o.ref
										: (i =
													(a = Object.getOwnPropertyDescriptor(o, "ref")?.get) &&
													"isReactWarning" in a &&
													a.isReactWarning)
											? o.props.ref
											: o.props.ref || o.ref)
								: void 0,
							d = (0, r.useComposedRefs)(u, n)
						if (t.isValidElement(l)) {
							let e = (function (e, t) {
								let r = { ...t }
								for (let n in t) {
									let o = e[n],
										a = t[n]
									;/^on[A-Z]/.test(n)
										? o && a
											? (r[n] = (...e) => {
													let t = a(...e)
													return o(...e), t
												})
											: o && (r[n] = o)
										: "style" === n
											? (r[n] = { ...o, ...a })
											: "className" === n && (r[n] = [o, a].filter(Boolean).join(" "))
								}
								return { ...e, ...r }
							})(s, l.props)
							return l.type !== t.Fragment && (e.ref = d), t.cloneElement(l, e)
						}
						return t.Children.count(l) > 1 ? t.Children.only(null) : null
					})).displayName = `${o}.SlotClone`),
					a),
				l = t.forwardRef((e, r) => {
					let { children: o, ...a } = e,
						l = t.Children.toArray(o),
						s = l.find(u)
					if (s) {
						let e = s.props.children,
							o = l.map((r) =>
								r !== s
									? r
									: t.Children.count(e) > 1
										? t.Children.only(null)
										: t.isValidElement(e)
											? e.props.children
											: null,
							)
						return (0, n.jsx)(i, {
							...a,
							ref: r,
							children: t.isValidElement(e) ? t.cloneElement(e, void 0, o) : null,
						})
					}
					return (0, n.jsx)(i, { ...a, ref: r, children: o })
				})
			return (l.displayName = `${e}.Slot`), l
		}
		var a = o("Slot"),
			i = Symbol("radix.slottable")
		function l(e) {
			let t = ({ children: e }) => (0, n.jsx)(n.Fragment, { children: e })
			return (t.displayName = `${e}.Slottable`), (t.__radixId = i), t
		}
		var s = l("Slottable")
		function u(e) {
			return t.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === i
		}
		e.s(["Root", () => a, "Slot", () => a, "Slottable", () => s, "createSlot", () => o, "createSlottable", () => l])
	},
	66791,
	(e) => {
		"use strict"
		var t = e.i(10008),
			r = e.i(68069),
			n = e.i(16853),
			o = e.i(8026),
			a = [
				"a",
				"button",
				"div",
				"form",
				"h2",
				"h3",
				"img",
				"input",
				"label",
				"li",
				"nav",
				"ol",
				"p",
				"select",
				"span",
				"svg",
				"ul",
			].reduce((e, r) => {
				let a = (0, n.createSlot)(`Primitive.${r}`),
					i = t.forwardRef((e, t) => {
						let { asChild: n, ...i } = e
						return (
							"u" > typeof window && (window[Symbol.for("radix-ui")] = !0),
							(0, o.jsx)(n ? a : r, { ...i, ref: t })
						)
					})
				return (i.displayName = `Primitive.${r}`), { ...e, [r]: i }
			}, {})
		function i(e, t) {
			e && r.flushSync(() => e.dispatchEvent(t))
		}
		e.s(["Primitive", () => a, "dispatchDiscreteCustomEvent", () => i])
	},
	84123,
	(e) => {
		"use strict"
		var t = e.i(10008)
		function r(e) {
			let r = t.useRef(e)
			return (
				t.useEffect(() => {
					r.current = e
				}),
				t.useMemo(
					() =>
						(...e) =>
							r.current?.(...e),
					[],
				)
			)
		}
		e.s(["useCallbackRef", () => r])
	},
	9168,
	(e) => {
		"use strict"
		var t = e.i(10008),
			r = e.i(84123)
		function n(e, o = globalThis?.document) {
			let a = (0, r.useCallbackRef)(e)
			t.useEffect(() => {
				let e = (e) => {
					"Escape" === e.key && a(e)
				}
				return (
					o.addEventListener("keydown", e, { capture: !0 }),
					() => o.removeEventListener("keydown", e, { capture: !0 })
				)
			}, [a, o])
		}
		e.s(["useEscapeKeydown", () => n])
	},
	34692,
	(e) => {
		"use strict"
		var t,
			r = e.i(10008),
			n = e.i(75453),
			o = e.i(66791),
			a = e.i(26613),
			i = e.i(84123),
			l = e.i(9168),
			s = e.i(8026),
			u = "dismissableLayer.update",
			d = r.createContext({
				layers: new Set(),
				layersWithOutsidePointerEventsDisabled: new Set(),
				branches: new Set(),
			}),
			c = r.forwardRef((e, c) => {
				let {
						disableOutsidePointerEvents: m = !1,
						onEscapeKeyDown: h,
						onPointerDownOutside: v,
						onFocusOutside: g,
						onInteractOutside: y,
						onDismiss: b,
						...w
					} = e,
					x = r.useContext(d),
					[E, C] = r.useState(null),
					k = E?.ownerDocument ?? globalThis?.document,
					[, R] = r.useState({}),
					S = (0, a.useComposedRefs)(c, (e) => C(e)),
					j = Array.from(x.layers),
					[P] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1),
					D = j.indexOf(P),
					T = E ? j.indexOf(E) : -1,
					A = x.layersWithOutsidePointerEventsDisabled.size > 0,
					N = T >= D,
					M = (function (e, t = globalThis?.document) {
						let n = (0, i.useCallbackRef)(e),
							o = r.useRef(!1),
							a = r.useRef(() => {})
						return (
							r.useEffect(() => {
								let e = (e) => {
										if (e.target && !o.current) {
											let r = function () {
													p("dismissableLayer.pointerDownOutside", n, o, { discrete: !0 })
												},
												o = { originalEvent: e }
											"touch" === e.pointerType
												? (t.removeEventListener("click", a.current),
													(a.current = r),
													t.addEventListener("click", a.current, { once: !0 }))
												: r()
										} else t.removeEventListener("click", a.current)
										o.current = !1
									},
									r = window.setTimeout(() => {
										t.addEventListener("pointerdown", e)
									}, 0)
								return () => {
									window.clearTimeout(r),
										t.removeEventListener("pointerdown", e),
										t.removeEventListener("click", a.current)
								}
							}, [t, n]),
							{ onPointerDownCapture: () => (o.current = !0) }
						)
					})((e) => {
						let t = e.target,
							r = [...x.branches].some((e) => e.contains(t))
						N && !r && (v?.(e), y?.(e), e.defaultPrevented || b?.())
					}, k),
					_ = (function (e, t = globalThis?.document) {
						let n = (0, i.useCallbackRef)(e),
							o = r.useRef(!1)
						return (
							r.useEffect(() => {
								let e = (e) => {
									e.target &&
										!o.current &&
										p("dismissableLayer.focusOutside", n, { originalEvent: e }, { discrete: !1 })
								}
								return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
							}, [t, n]),
							{ onFocusCapture: () => (o.current = !0), onBlurCapture: () => (o.current = !1) }
						)
					})((e) => {
						let t = e.target
						![...x.branches].some((e) => e.contains(t)) && (g?.(e), y?.(e), e.defaultPrevented || b?.())
					}, k)
				return (
					(0, l.useEscapeKeydown)((e) => {
						T === x.layers.size - 1 && (h?.(e), !e.defaultPrevented && b && (e.preventDefault(), b()))
					}, k),
					r.useEffect(() => {
						if (E)
							return (
								m &&
									(0 === x.layersWithOutsidePointerEventsDisabled.size &&
										((t = k.body.style.pointerEvents), (k.body.style.pointerEvents = "none")),
									x.layersWithOutsidePointerEventsDisabled.add(E)),
								x.layers.add(E),
								f(),
								() => {
									m &&
										1 === x.layersWithOutsidePointerEventsDisabled.size &&
										(k.body.style.pointerEvents = t)
								}
							)
					}, [E, k, m, x]),
					r.useEffect(
						() => () => {
							E && (x.layers.delete(E), x.layersWithOutsidePointerEventsDisabled.delete(E), f())
						},
						[E, x],
					),
					r.useEffect(() => {
						let e = () => R({})
						return document.addEventListener(u, e), () => document.removeEventListener(u, e)
					}, []),
					(0, s.jsx)(o.Primitive.div, {
						...w,
						ref: S,
						style: { pointerEvents: A ? (N ? "auto" : "none") : void 0, ...e.style },
						onFocusCapture: (0, n.composeEventHandlers)(e.onFocusCapture, _.onFocusCapture),
						onBlurCapture: (0, n.composeEventHandlers)(e.onBlurCapture, _.onBlurCapture),
						onPointerDownCapture: (0, n.composeEventHandlers)(
							e.onPointerDownCapture,
							M.onPointerDownCapture,
						),
					})
				)
			})
		function f() {
			let e = new CustomEvent(u)
			document.dispatchEvent(e)
		}
		function p(e, t, r, { discrete: n }) {
			let a = r.originalEvent.target,
				i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r })
			t && a.addEventListener(e, t, { once: !0 }),
				n ? (0, o.dispatchDiscreteCustomEvent)(a, i) : a.dispatchEvent(i)
		}
		;(c.displayName = "DismissableLayer"),
			(r.forwardRef((e, t) => {
				let n = r.useContext(d),
					i = r.useRef(null),
					l = (0, a.useComposedRefs)(t, i)
				return (
					r.useEffect(() => {
						let e = i.current
						if (e)
							return (
								n.branches.add(e),
								() => {
									n.branches.delete(e)
								}
							)
					}, [n.branches]),
					(0, s.jsx)(o.Primitive.div, { ...e, ref: l })
				)
			}).displayName = "DismissableLayerBranch"),
			e.s(["DismissableLayer", () => c])
	},
	74382,
	85326,
	(e) => {
		"use strict"
		let t
		var r = e.i(10008),
			n = e.i(26613),
			o = e.i(66791),
			a = e.i(84123),
			i = e.i(8026),
			l = "focusScope.autoFocusOnMount",
			s = "focusScope.autoFocusOnUnmount",
			u = { bubbles: !1, cancelable: !0 },
			d = r.forwardRef((e, t) => {
				let { loop: d = !1, trapped: h = !1, onMountAutoFocus: v, onUnmountAutoFocus: g, ...y } = e,
					[b, w] = r.useState(null),
					x = (0, a.useCallbackRef)(v),
					E = (0, a.useCallbackRef)(g),
					C = r.useRef(null),
					k = (0, n.useComposedRefs)(t, (e) => w(e)),
					R = r.useRef({
						paused: !1,
						pause() {
							this.paused = !0
						},
						resume() {
							this.paused = !1
						},
					}).current
				r.useEffect(() => {
					if (h) {
						let e = function (e) {
								if (R.paused || !b) return
								let t = e.target
								b.contains(t) ? (C.current = t) : p(C.current, { select: !0 })
							},
							t = function (e) {
								if (R.paused || !b) return
								let t = e.relatedTarget
								null !== t && (b.contains(t) || p(C.current, { select: !0 }))
							}
						document.addEventListener("focusin", e), document.addEventListener("focusout", t)
						let r = new MutationObserver(function (e) {
							if (document.activeElement === document.body)
								for (let t of e) t.removedNodes.length > 0 && p(b)
						})
						return (
							b && r.observe(b, { childList: !0, subtree: !0 }),
							() => {
								document.removeEventListener("focusin", e),
									document.removeEventListener("focusout", t),
									r.disconnect()
							}
						)
					}
				}, [h, b, R.paused]),
					r.useEffect(() => {
						if (b) {
							m.add(R)
							let e = document.activeElement
							if (!b.contains(e)) {
								let t = new CustomEvent(l, u)
								b.addEventListener(l, x),
									b.dispatchEvent(t),
									t.defaultPrevented ||
										((function (e, { select: t = !1 } = {}) {
											let r = document.activeElement
											for (let n of e)
												if ((p(n, { select: t }), document.activeElement !== r)) return
										})(
											c(b).filter((e) => "A" !== e.tagName),
											{ select: !0 },
										),
										document.activeElement === e && p(b))
							}
							return () => {
								b.removeEventListener(l, x),
									setTimeout(() => {
										let t = new CustomEvent(s, u)
										b.addEventListener(s, E),
											b.dispatchEvent(t),
											t.defaultPrevented || p(e ?? document.body, { select: !0 }),
											b.removeEventListener(s, E),
											m.remove(R)
									}, 0)
							}
						}
					}, [b, x, E, R])
				let S = r.useCallback(
					(e) => {
						if ((!d && !h) || R.paused) return
						let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
							r = document.activeElement
						if (t && r) {
							var n
							let t,
								o = e.currentTarget,
								[a, i] = [f((t = c((n = o))), n), f(t.reverse(), n)]
							a && i
								? e.shiftKey || r !== i
									? e.shiftKey && r === a && (e.preventDefault(), d && p(i, { select: !0 }))
									: (e.preventDefault(), d && p(a, { select: !0 }))
								: r === o && e.preventDefault()
						}
					},
					[d, h, R.paused],
				)
				return (0, i.jsx)(o.Primitive.div, { tabIndex: -1, ...y, ref: k, onKeyDown: S })
			})
		function c(e) {
			let t = [],
				r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
					acceptNode: (e) => {
						let t = "INPUT" === e.tagName && "hidden" === e.type
						return e.disabled || e.hidden || t
							? NodeFilter.FILTER_SKIP
							: e.tabIndex >= 0
								? NodeFilter.FILTER_ACCEPT
								: NodeFilter.FILTER_SKIP
					},
				})
			for (; r.nextNode(); ) t.push(r.currentNode)
			return t
		}
		function f(e, t) {
			for (let r of e)
				if (
					!(function (e, { upTo: t }) {
						if ("hidden" === getComputedStyle(e).visibility) return !0
						for (; e && (void 0 === t || e !== t); ) {
							if ("none" === getComputedStyle(e).display) return !0
							e = e.parentElement
						}
						return !1
					})(r, { upTo: t })
				)
					return r
		}
		function p(e, { select: t = !1 } = {}) {
			if (e && e.focus) {
				var r
				let n = document.activeElement
				e.focus({ preventScroll: !0 }),
					e !== n && (r = e) instanceof HTMLInputElement && "select" in r && t && e.select()
			}
		}
		d.displayName = "FocusScope"
		var m =
			((t = []),
			{
				add(e) {
					let r = t[0]
					e !== r && r?.pause(), (t = h(t, e)).unshift(e)
				},
				remove(e) {
					;(t = h(t, e)), t[0]?.resume()
				},
			})
		function h(e, t) {
			let r = [...e],
				n = r.indexOf(t)
			return -1 !== n && r.splice(n, 1), r
		}
		e.s(["FocusScope", () => d], 74382)
		var v = e.i(68069),
			g = e.i(29241),
			y = r.forwardRef((e, t) => {
				let { container: n, ...a } = e,
					[l, s] = r.useState(!1)
				;(0, g.useLayoutEffect)(() => s(!0), [])
				let u = n || (l && globalThis?.document?.body)
				return u ? v.default.createPortal((0, i.jsx)(o.Primitive.div, { ...a, ref: t }), u) : null
			})
		;(y.displayName = "Portal"), e.s(["Portal", () => y], 85326)
	},
	98753,
	(e) => {
		"use strict"
		var t = e.i(10008),
			r = e.i(26613),
			n = e.i(29241),
			o = (e) => {
				var o
				let i,
					l,
					{ present: s, children: u } = e,
					d = (function (e) {
						var r, o
						let [i, l] = t.useState(),
							s = t.useRef(null),
							u = t.useRef(e),
							d = t.useRef("none"),
							[c, f] =
								((r = e ? "mounted" : "unmounted"),
								(o = {
									mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
									unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
									unmounted: { MOUNT: "mounted" },
								}),
								t.useReducer((e, t) => o[e][t] ?? e, r))
						return (
							t.useEffect(() => {
								let e = a(s.current)
								d.current = "mounted" === c ? e : "none"
							}, [c]),
							(0, n.useLayoutEffect)(() => {
								let t = s.current,
									r = u.current
								if (r !== e) {
									let n = d.current,
										o = a(t)
									e
										? f("MOUNT")
										: "none" === o || t?.display === "none"
											? f("UNMOUNT")
											: r && n !== o
												? f("ANIMATION_OUT")
												: f("UNMOUNT"),
										(u.current = e)
								}
							}, [e, f]),
							(0, n.useLayoutEffect)(() => {
								if (i) {
									let e,
										t = i.ownerDocument.defaultView ?? window,
										r = (r) => {
											let n = a(s.current).includes(r.animationName)
											if (r.target === i && n && (f("ANIMATION_END"), !u.current)) {
												let r = i.style.animationFillMode
												;(i.style.animationFillMode = "forwards"),
													(e = t.setTimeout(() => {
														"forwards" === i.style.animationFillMode &&
															(i.style.animationFillMode = r)
													}))
											}
										},
										n = (e) => {
											e.target === i && (d.current = a(s.current))
										}
									return (
										i.addEventListener("animationstart", n),
										i.addEventListener("animationcancel", r),
										i.addEventListener("animationend", r),
										() => {
											t.clearTimeout(e),
												i.removeEventListener("animationstart", n),
												i.removeEventListener("animationcancel", r),
												i.removeEventListener("animationend", r)
										}
									)
								}
								f("ANIMATION_END")
							}, [i, f]),
							{
								isPresent: ["mounted", "unmountSuspended"].includes(c),
								ref: t.useCallback((e) => {
									;(s.current = e ? getComputedStyle(e) : null), l(e)
								}, []),
							}
						)
					})(s),
					c = "function" == typeof u ? u({ present: d.isPresent }) : t.Children.only(u),
					f = (0, r.useComposedRefs)(
						d.ref,
						((o = c),
						(l =
							(i = Object.getOwnPropertyDescriptor(o.props, "ref")?.get) &&
							"isReactWarning" in i &&
							i.isReactWarning)
							? o.ref
							: (l =
										(i = Object.getOwnPropertyDescriptor(o, "ref")?.get) &&
										"isReactWarning" in i &&
										i.isReactWarning)
								? o.props.ref
								: o.props.ref || o.ref),
					)
				return "function" == typeof u || d.isPresent ? t.cloneElement(c, { ref: f }) : null
			}
		function a(e) {
			return e?.animationName || "none"
		}
		;(o.displayName = "Presence"), e.s(["Presence", () => o])
	},
	77543,
	(e) => {
		"use strict"
		var t = e.i(10008),
			r = 0
		function n() {
			t.useEffect(() => {
				let e = document.querySelectorAll("[data-radix-focus-guard]")
				return (
					document.body.insertAdjacentElement("afterbegin", e[0] ?? o()),
					document.body.insertAdjacentElement("beforeend", e[1] ?? o()),
					r++,
					() => {
						1 === r && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), r--
					}
				)
			}, [])
		}
		function o() {
			let e = document.createElement("span")
			return (
				e.setAttribute("data-radix-focus-guard", ""),
				(e.tabIndex = 0),
				(e.style.outline = "none"),
				(e.style.opacity = "0"),
				(e.style.position = "fixed"),
				(e.style.pointerEvents = "none"),
				e
			)
		}
		e.s(["useFocusGuards", () => n])
	},
	4880,
	(e) => {
		"use strict"
		var t,
			r,
			n,
			o,
			a,
			i,
			l,
			s = function () {
				return (s =
					Object.assign ||
					function (e) {
						for (var t, r = 1, n = arguments.length; r < n; r++)
							for (var o in (t = arguments[r]))
								Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
						return e
					}).apply(this, arguments)
			}
		function u(e, t) {
			var r = {}
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n])
			if (null != e && "function" == typeof Object.getOwnPropertySymbols)
				for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
					0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
			return r
		}
		var d = ("function" == typeof SuppressedError && SuppressedError, e.i(10008)),
			c = "right-scroll-bar-position",
			f = "width-before-scroll-bar"
		function p(e, t) {
			return "function" == typeof e ? e(t) : e && (e.current = t), e
		}
		var m = "u" > typeof window ? d.useLayoutEffect : d.useEffect,
			h = new WeakMap(),
			v =
				(void 0 === t && (t = {}),
				((void 0 === r &&
					(r = function (e) {
						return e
					}),
				(n = []),
				(o = !1),
				(a = {
					read: function () {
						if (o)
							throw Error(
								"Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
							)
						return n.length ? n[n.length - 1] : null
					},
					useMedium: function (e) {
						var t = r(e, o)
						return (
							n.push(t),
							function () {
								n = n.filter(function (e) {
									return e !== t
								})
							}
						)
					},
					assignSyncMedium: function (e) {
						for (o = !0; n.length; ) {
							var t = n
							;(n = []), t.forEach(e)
						}
						n = {
							push: function (t) {
								return e(t)
							},
							filter: function () {
								return n
							},
						}
					},
					assignMedium: function (e) {
						o = !0
						var t = []
						if (n.length) {
							var r = n
							;(n = []), r.forEach(e), (t = n)
						}
						var a = function () {
								var r = t
								;(t = []), r.forEach(e)
							},
							i = function () {
								return Promise.resolve().then(a)
							}
						i(),
							(n = {
								push: function (e) {
									t.push(e), i()
								},
								filter: function (e) {
									return (t = t.filter(e)), n
								},
							})
					},
				})).options = s({ async: !0, ssr: !1 }, t)),
				a),
			g = function () {},
			y = d.forwardRef(function (e, t) {
				var r,
					n,
					o,
					a,
					i = d.useRef(null),
					l = d.useState({ onScrollCapture: g, onWheelCapture: g, onTouchMoveCapture: g }),
					c = l[0],
					f = l[1],
					y = e.forwardProps,
					b = e.children,
					w = e.className,
					x = e.removeScrollBar,
					E = e.enabled,
					C = e.shards,
					k = e.sideCar,
					R = e.noIsolation,
					S = e.inert,
					j = e.allowPinchZoom,
					P = e.as,
					D = e.gapMode,
					T = u(e, [
						"forwardProps",
						"children",
						"className",
						"removeScrollBar",
						"enabled",
						"shards",
						"sideCar",
						"noIsolation",
						"inert",
						"allowPinchZoom",
						"as",
						"gapMode",
					]),
					A =
						((r = [i, t]),
						(n = function (e) {
							return r.forEach(function (t) {
								return p(t, e)
							})
						}),
						((o = (0, d.useState)(function () {
							return {
								value: null,
								callback: n,
								facade: {
									get current() {
										return o.value
									},
									set current(value) {
										var e = o.value
										e !== value && ((o.value = value), o.callback(value, e))
									},
								},
							}
						})[0]).callback = n),
						(a = o.facade),
						m(
							function () {
								var e = h.get(a)
								if (e) {
									var t = new Set(e),
										n = new Set(r),
										o = a.current
									t.forEach(function (e) {
										n.has(e) || p(e, null)
									}),
										n.forEach(function (e) {
											t.has(e) || p(e, o)
										})
								}
								h.set(a, r)
							},
							[r],
						),
						a),
					N = s(s({}, T), c)
				return d.createElement(
					d.Fragment,
					null,
					E &&
						d.createElement(k, {
							sideCar: v,
							removeScrollBar: x,
							shards: C,
							noIsolation: R,
							inert: S,
							setCallbacks: f,
							allowPinchZoom: !!j,
							lockRef: i,
							gapMode: D,
						}),
					y
						? d.cloneElement(d.Children.only(b), s(s({}, N), { ref: A }))
						: d.createElement(void 0 === P ? "div" : P, s({}, N, { className: w, ref: A }), b),
				)
			})
		;(y.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
			(y.classNames = { fullWidth: f, zeroRight: c })
		var b = function (e) {
			var t = e.sideCar,
				r = u(e, ["sideCar"])
			if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car")
			var n = t.read()
			if (!n) throw Error("Sidecar medium not found")
			return d.createElement(n, s({}, r))
		}
		b.isSideCarExport = !0
		var w = function () {
				var e = 0,
					t = null
				return {
					add: function (r) {
						if (
							0 == e &&
							(t = (function () {
								if (!document) return null
								var e = document.createElement("style")
								e.type = "text/css"
								var t = l || ("u" > typeof __webpack_nonce__ ? __webpack_nonce__ : void 0)
								return t && e.setAttribute("nonce", t), e
							})())
						) {
							var n, o
							;(n = t).styleSheet
								? (n.styleSheet.cssText = r)
								: n.appendChild(document.createTextNode(r)),
								(o = t),
								(document.head || document.getElementsByTagName("head")[0]).appendChild(o)
						}
						e++
					},
					remove: function () {
						--e || !t || (t.parentNode && t.parentNode.removeChild(t), (t = null))
					},
				}
			},
			x = function () {
				var e = w()
				return function (t, r) {
					d.useEffect(
						function () {
							return (
								e.add(t),
								function () {
									e.remove()
								}
							)
						},
						[t && r],
					)
				}
			},
			E = function () {
				var e = x()
				return function (t) {
					return e(t.styles, t.dynamic), null
				}
			},
			C = { left: 0, top: 0, right: 0, gap: 0 },
			k = function (e) {
				return parseInt(e || "", 10) || 0
			},
			R = function (e) {
				var t = window.getComputedStyle(document.body),
					r = t["padding" === e ? "paddingLeft" : "marginLeft"],
					n = t["padding" === e ? "paddingTop" : "marginTop"],
					o = t["padding" === e ? "paddingRight" : "marginRight"]
				return [k(r), k(n), k(o)]
			},
			S = function (e) {
				if ((void 0 === e && (e = "margin"), "u" < typeof window)) return C
				var t = R(e),
					r = document.documentElement.clientWidth,
					n = window.innerWidth
				return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, n - r + t[2] - t[0]) }
			},
			j = E(),
			P = "data-scroll-locked",
			D = function (e, t, r, n) {
				var o = e.left,
					a = e.top,
					i = e.right,
					l = e.gap
				return (
					void 0 === r && (r = "margin"),
					"\n  ."
						.concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
						.concat(n, ";\n   padding-right: ")
						.concat(l, "px ")
						.concat(n, ";\n  }\n  body[")
						.concat(P, "] {\n    overflow: hidden ")
						.concat(n, ";\n    overscroll-behavior: contain;\n    ")
						.concat(
							[
								t && "position: relative ".concat(n, ";"),
								"margin" === r &&
									"\n    padding-left: "
										.concat(o, "px;\n    padding-top: ")
										.concat(a, "px;\n    padding-right: ")
										.concat(i, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ")
										.concat(l, "px ")
										.concat(n, ";\n    "),
								"padding" === r && "padding-right: ".concat(l, "px ").concat(n, ";"),
							]
								.filter(Boolean)
								.join(""),
							"\n  }\n  \n  .",
						)
						.concat(c, " {\n    right: ")
						.concat(l, "px ")
						.concat(n, ";\n  }\n  \n  .")
						.concat(f, " {\n    margin-right: ")
						.concat(l, "px ")
						.concat(n, ";\n  }\n  \n  .")
						.concat(c, " .")
						.concat(c, " {\n    right: 0 ")
						.concat(n, ";\n  }\n  \n  .")
						.concat(f, " .")
						.concat(f, " {\n    margin-right: 0 ")
						.concat(n, ";\n  }\n  \n  body[")
						.concat(P, "] {\n    ")
						.concat("--removed-body-scroll-bar-size", ": ")
						.concat(l, "px;\n  }\n")
				)
			},
			T = function () {
				var e = parseInt(document.body.getAttribute(P) || "0", 10)
				return isFinite(e) ? e : 0
			},
			A = function () {
				d.useEffect(function () {
					return (
						document.body.setAttribute(P, (T() + 1).toString()),
						function () {
							var e = T() - 1
							e <= 0 ? document.body.removeAttribute(P) : document.body.setAttribute(P, e.toString())
						}
					)
				}, [])
			},
			N = function (e) {
				var t = e.noRelative,
					r = e.noImportant,
					n = e.gapMode,
					o = void 0 === n ? "margin" : n
				A()
				var a = d.useMemo(
					function () {
						return S(o)
					},
					[o],
				)
				return d.createElement(j, { styles: D(a, !t, o, r ? "" : "!important") })
			},
			M = !1
		if ("u" > typeof window)
			try {
				var _ = Object.defineProperty({}, "passive", {
					get: function () {
						return (M = !0), !0
					},
				})
				window.addEventListener("test", _, _), window.removeEventListener("test", _, _)
			} catch (e) {
				M = !1
			}
		var O = !!M && { passive: !1 },
			L = function (e, t) {
				if (!(e instanceof Element)) return !1
				var r = window.getComputedStyle(e)
				return (
					"hidden" !== r[t] && (r.overflowY !== r.overflowX || "TEXTAREA" === e.tagName || "visible" !== r[t])
				)
			},
			I = function (e, t) {
				var r = t.ownerDocument,
					n = t
				do {
					if (("u" > typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), F(e, n))) {
						var o = z(e, n)
						if (o[1] > o[2]) return !0
					}
					n = n.parentNode
				} while (n && n !== r.body)
				return !1
			},
			F = function (e, t) {
				return "v" === e ? L(t, "overflowY") : L(t, "overflowX")
			},
			z = function (e, t) {
				return "v" === e
					? [t.scrollTop, t.scrollHeight, t.clientHeight]
					: [t.scrollLeft, t.scrollWidth, t.clientWidth]
			},
			H = function (e, t, r, n, o) {
				var a,
					i = ((a = window.getComputedStyle(t).direction), "h" === e && "rtl" === a ? -1 : 1),
					l = i * n,
					s = r.target,
					u = t.contains(s),
					d = !1,
					c = l > 0,
					f = 0,
					p = 0
				do {
					var m = z(e, s),
						h = m[0],
						v = m[1] - m[2] - i * h
					;(h || v) && F(e, s) && ((f += v), (p += h)), (s = s instanceof ShadowRoot ? s.host : s.parentNode)
				} while ((!u && s !== document.body) || (u && (t.contains(s) || t === s)))
				return (
					c && ((o && 1 > Math.abs(f)) || (!o && l > f))
						? (d = !0)
						: !c && ((o && 1 > Math.abs(p)) || (!o && -l > p)) && (d = !0),
					d
				)
			},
			V = function (e) {
				return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
			},
			$ = function (e) {
				return [e.deltaX, e.deltaY]
			},
			B = function (e) {
				return e && "current" in e ? e.current : e
			},
			W = 0,
			U = []
		let K =
			((i = function (e) {
				var t = d.useRef([]),
					r = d.useRef([0, 0]),
					n = d.useRef(),
					o = d.useState(W++)[0],
					a = d.useState(E)[0],
					i = d.useRef(e)
				d.useEffect(
					function () {
						i.current = e
					},
					[e],
				),
					d.useEffect(
						function () {
							if (e.inert) {
								document.body.classList.add("block-interactivity-".concat(o))
								var t = (function (e, t, r) {
									if (r || 2 == arguments.length)
										for (var n, o = 0, a = t.length; o < a; o++)
											(!n && o in t) ||
												(n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]))
									return e.concat(n || Array.prototype.slice.call(t))
								})([e.lockRef.current], (e.shards || []).map(B), !0).filter(Boolean)
								return (
									t.forEach(function (e) {
										return e.classList.add("allow-interactivity-".concat(o))
									}),
									function () {
										document.body.classList.remove("block-interactivity-".concat(o)),
											t.forEach(function (e) {
												return e.classList.remove("allow-interactivity-".concat(o))
											})
									}
								)
							}
						},
						[e.inert, e.lockRef.current, e.shards],
					)
				var l = d.useCallback(function (e, t) {
						if (("touches" in e && 2 === e.touches.length) || ("wheel" === e.type && e.ctrlKey))
							return !i.current.allowPinchZoom
						var o,
							a = V(e),
							l = r.current,
							s = "deltaX" in e ? e.deltaX : l[0] - a[0],
							u = "deltaY" in e ? e.deltaY : l[1] - a[1],
							d = e.target,
							c = Math.abs(s) > Math.abs(u) ? "h" : "v"
						if ("touches" in e && "h" === c && "range" === d.type) return !1
						var f = I(c, d)
						if (!f) return !0
						if ((f ? (o = c) : ((o = "v" === c ? "h" : "v"), (f = I(c, d))), !f)) return !1
						if ((!n.current && "changedTouches" in e && (s || u) && (n.current = o), !o)) return !0
						var p = n.current || o
						return H(p, t, e, "h" === p ? s : u, !0)
					}, []),
					s = d.useCallback(function (e) {
						if (U.length && U[U.length - 1] === a) {
							var r = "deltaY" in e ? $(e) : V(e),
								n = t.current.filter(function (t) {
									var n
									return (
										t.name === e.type &&
										(t.target === e.target || e.target === t.shadowParent) &&
										((n = t.delta), n[0] === r[0] && n[1] === r[1])
									)
								})[0]
							if (n && n.should) {
								e.cancelable && e.preventDefault()
								return
							}
							if (!n) {
								var o = (i.current.shards || [])
									.map(B)
									.filter(Boolean)
									.filter(function (t) {
										return t.contains(e.target)
									})
								;(o.length > 0 ? l(e, o[0]) : !i.current.noIsolation) &&
									e.cancelable &&
									e.preventDefault()
							}
						}
					}, []),
					u = d.useCallback(function (e, r, n, o) {
						var a = {
							name: e,
							delta: r,
							target: n,
							should: o,
							shadowParent: (function (e) {
								for (var t = null; null !== e; )
									e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode)
								return t
							})(n),
						}
						t.current.push(a),
							setTimeout(function () {
								t.current = t.current.filter(function (e) {
									return e !== a
								})
							}, 1)
					}, []),
					c = d.useCallback(function (e) {
						;(r.current = V(e)), (n.current = void 0)
					}, []),
					f = d.useCallback(function (t) {
						u(t.type, $(t), t.target, l(t, e.lockRef.current))
					}, []),
					p = d.useCallback(function (t) {
						u(t.type, V(t), t.target, l(t, e.lockRef.current))
					}, [])
				d.useEffect(function () {
					return (
						U.push(a),
						e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: p }),
						document.addEventListener("wheel", s, O),
						document.addEventListener("touchmove", s, O),
						document.addEventListener("touchstart", c, O),
						function () {
							;(U = U.filter(function (e) {
								return e !== a
							})),
								document.removeEventListener("wheel", s, O),
								document.removeEventListener("touchmove", s, O),
								document.removeEventListener("touchstart", c, O)
						}
					)
				}, [])
				var m = e.removeScrollBar,
					h = e.inert
				return d.createElement(
					d.Fragment,
					null,
					h
						? d.createElement(a, {
								styles: "\n  .block-interactivity-"
									.concat(o, " {pointer-events: none;}\n  .allow-interactivity-")
									.concat(o, " {pointer-events: all;}\n"),
							})
						: null,
					m ? d.createElement(N, { gapMode: e.gapMode }) : null,
				)
			}),
			v.useMedium(i),
			b)
		var Y = d.forwardRef(function (e, t) {
			return d.createElement(y, s({}, e, { ref: t, sideCar: K }))
		})
		;(Y.classNames = y.classNames), e.s(["RemoveScroll", 0, Y], 4880)
	},
	45751,
	(e) => {
		"use strict"
		var t = new WeakMap(),
			r = new WeakMap(),
			n = {},
			o = 0,
			a = function (e) {
				return e && (e.host || a(e.parentNode))
			},
			i = function (e, i, l, s) {
				var u = (Array.isArray(e) ? e : [e])
					.map(function (e) {
						if (i.contains(e)) return e
						var t = a(e)
						return t && i.contains(t)
							? t
							: (console.error("aria-hidden", e, "in not contained inside", i, ". Doing nothing"), null)
					})
					.filter(function (e) {
						return !!e
					})
				n[l] || (n[l] = new WeakMap())
				var d = n[l],
					c = [],
					f = new Set(),
					p = new Set(u),
					m = function (e) {
						!e || f.has(e) || (f.add(e), m(e.parentNode))
					}
				u.forEach(m)
				var h = function (e) {
					!e ||
						p.has(e) ||
						Array.prototype.forEach.call(e.children, function (e) {
							if (f.has(e)) h(e)
							else
								try {
									var n = e.getAttribute(s),
										o = null !== n && "false" !== n,
										a = (t.get(e) || 0) + 1,
										i = (d.get(e) || 0) + 1
									t.set(e, a),
										d.set(e, i),
										c.push(e),
										1 === a && o && r.set(e, !0),
										1 === i && e.setAttribute(l, "true"),
										o || e.setAttribute(s, "true")
								} catch (t) {
									console.error("aria-hidden: cannot operate on ", e, t)
								}
						})
				}
				return (
					h(i),
					f.clear(),
					o++,
					function () {
						c.forEach(function (e) {
							var n = t.get(e) - 1,
								o = d.get(e) - 1
							t.set(e, n),
								d.set(e, o),
								n || (r.has(e) || e.removeAttribute(s), r.delete(e)),
								o || e.removeAttribute(l)
						}),
							--o || ((t = new WeakMap()), (t = new WeakMap()), (r = new WeakMap()), (n = {}))
					}
				)
			},
			l = function (e, t, r) {
				void 0 === r && (r = "data-aria-hidden")
				var n = Array.from(Array.isArray(e) ? e : [e]),
					o = t || ("u" < typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body)
				return o
					? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), i(n, o, r, "aria-hidden"))
					: function () {
							return null
						}
			}
		e.s(["hideOthers", () => l])
	},
	6708,
	(e) => {
		"use strict"
		var t = e.i(10008),
			r = e.i(75453),
			n = e.i(26613),
			o = e.i(4113),
			a = e.i(55162),
			i = e.i(93180),
			l = e.i(34692),
			s = e.i(74382),
			u = e.i(85326),
			d = e.i(98753),
			c = e.i(66791),
			f = e.i(77543),
			p = e.i(4880),
			m = e.i(45751),
			h = e.i(16853),
			v = e.i(8026),
			g = "Dialog",
			[y, b] = (0, o.createContextScope)(g),
			[w, x] = y(g),
			E = (e) => {
				let { __scopeDialog: r, children: n, open: o, defaultOpen: l, onOpenChange: s, modal: u = !0 } = e,
					d = t.useRef(null),
					c = t.useRef(null),
					[f, p] = (0, i.useControllableState)({ prop: o, defaultProp: l ?? !1, onChange: s, caller: g })
				return (0, v.jsx)(w, {
					scope: r,
					triggerRef: d,
					contentRef: c,
					contentId: (0, a.useId)(),
					titleId: (0, a.useId)(),
					descriptionId: (0, a.useId)(),
					open: f,
					onOpenChange: p,
					onOpenToggle: t.useCallback(() => p((e) => !e), [p]),
					modal: u,
					children: n,
				})
			}
		E.displayName = g
		var C = "DialogTrigger",
			k = t.forwardRef((e, t) => {
				let { __scopeDialog: o, ...a } = e,
					i = x(C, o),
					l = (0, n.useComposedRefs)(t, i.triggerRef)
				return (0, v.jsx)(c.Primitive.button, {
					type: "button",
					"aria-haspopup": "dialog",
					"aria-expanded": i.open,
					"aria-controls": i.contentId,
					"data-state": W(i.open),
					...a,
					ref: l,
					onClick: (0, r.composeEventHandlers)(e.onClick, i.onOpenToggle),
				})
			})
		k.displayName = C
		var R = "DialogPortal",
			[S, j] = y(R, { forceMount: void 0 }),
			P = (e) => {
				let { __scopeDialog: r, forceMount: n, children: o, container: a } = e,
					i = x(R, r)
				return (0, v.jsx)(S, {
					scope: r,
					forceMount: n,
					children: t.Children.map(o, (e) =>
						(0, v.jsx)(d.Presence, {
							present: n || i.open,
							children: (0, v.jsx)(u.Portal, { asChild: !0, container: a, children: e }),
						}),
					),
				})
			}
		P.displayName = R
		var D = "DialogOverlay",
			T = t.forwardRef((e, t) => {
				let r = j(D, e.__scopeDialog),
					{ forceMount: n = r.forceMount, ...o } = e,
					a = x(D, e.__scopeDialog)
				return a.modal
					? (0, v.jsx)(d.Presence, { present: n || a.open, children: (0, v.jsx)(N, { ...o, ref: t }) })
					: null
			})
		T.displayName = D
		var A = (0, h.createSlot)("DialogOverlay.RemoveScroll"),
			N = t.forwardRef((e, t) => {
				let { __scopeDialog: r, ...n } = e,
					o = x(D, r)
				return (0, v.jsx)(p.RemoveScroll, {
					as: A,
					allowPinchZoom: !0,
					shards: [o.contentRef],
					children: (0, v.jsx)(c.Primitive.div, {
						"data-state": W(o.open),
						...n,
						ref: t,
						style: { pointerEvents: "auto", ...n.style },
					}),
				})
			}),
			M = "DialogContent",
			_ = t.forwardRef((e, t) => {
				let r = j(M, e.__scopeDialog),
					{ forceMount: n = r.forceMount, ...o } = e,
					a = x(M, e.__scopeDialog)
				return (0, v.jsx)(d.Presence, {
					present: n || a.open,
					children: a.modal ? (0, v.jsx)(O, { ...o, ref: t }) : (0, v.jsx)(L, { ...o, ref: t }),
				})
			})
		_.displayName = M
		var O = t.forwardRef((e, o) => {
				let a = x(M, e.__scopeDialog),
					i = t.useRef(null),
					l = (0, n.useComposedRefs)(o, a.contentRef, i)
				return (
					t.useEffect(() => {
						let e = i.current
						if (e) return (0, m.hideOthers)(e)
					}, []),
					(0, v.jsx)(I, {
						...e,
						ref: l,
						trapFocus: a.open,
						disableOutsidePointerEvents: !0,
						onCloseAutoFocus: (0, r.composeEventHandlers)(e.onCloseAutoFocus, (e) => {
							e.preventDefault(), a.triggerRef.current?.focus()
						}),
						onPointerDownOutside: (0, r.composeEventHandlers)(e.onPointerDownOutside, (e) => {
							let t = e.detail.originalEvent,
								r = 0 === t.button && !0 === t.ctrlKey
							;(2 === t.button || r) && e.preventDefault()
						}),
						onFocusOutside: (0, r.composeEventHandlers)(e.onFocusOutside, (e) => e.preventDefault()),
					})
				)
			}),
			L = t.forwardRef((e, r) => {
				let n = x(M, e.__scopeDialog),
					o = t.useRef(!1),
					a = t.useRef(!1)
				return (0, v.jsx)(I, {
					...e,
					ref: r,
					trapFocus: !1,
					disableOutsidePointerEvents: !1,
					onCloseAutoFocus: (t) => {
						e.onCloseAutoFocus?.(t),
							t.defaultPrevented || (o.current || n.triggerRef.current?.focus(), t.preventDefault()),
							(o.current = !1),
							(a.current = !1)
					},
					onInteractOutside: (t) => {
						e.onInteractOutside?.(t),
							t.defaultPrevented ||
								((o.current = !0), "pointerdown" === t.detail.originalEvent.type && (a.current = !0))
						let r = t.target
						n.triggerRef.current?.contains(r) && t.preventDefault(),
							"focusin" === t.detail.originalEvent.type && a.current && t.preventDefault()
					},
				})
			}),
			I = t.forwardRef((e, r) => {
				let { __scopeDialog: o, trapFocus: a, onOpenAutoFocus: i, onCloseAutoFocus: u, ...d } = e,
					c = x(M, o),
					p = t.useRef(null),
					m = (0, n.useComposedRefs)(r, p)
				return (
					(0, f.useFocusGuards)(),
					(0, v.jsxs)(v.Fragment, {
						children: [
							(0, v.jsx)(s.FocusScope, {
								asChild: !0,
								loop: !0,
								trapped: a,
								onMountAutoFocus: i,
								onUnmountAutoFocus: u,
								children: (0, v.jsx)(l.DismissableLayer, {
									role: "dialog",
									id: c.contentId,
									"aria-describedby": c.descriptionId,
									"aria-labelledby": c.titleId,
									"data-state": W(c.open),
									...d,
									ref: m,
									onDismiss: () => c.onOpenChange(!1),
								}),
							}),
							(0, v.jsxs)(v.Fragment, {
								children: [
									(0, v.jsx)(q, { titleId: c.titleId }),
									(0, v.jsx)(X, { contentRef: p, descriptionId: c.descriptionId }),
								],
							}),
						],
					})
				)
			}),
			F = "DialogTitle",
			z = t.forwardRef((e, t) => {
				let { __scopeDialog: r, ...n } = e,
					o = x(F, r)
				return (0, v.jsx)(c.Primitive.h2, { id: o.titleId, ...n, ref: t })
			})
		z.displayName = F
		var H = "DialogDescription",
			V = t.forwardRef((e, t) => {
				let { __scopeDialog: r, ...n } = e,
					o = x(H, r)
				return (0, v.jsx)(c.Primitive.p, { id: o.descriptionId, ...n, ref: t })
			})
		V.displayName = H
		var $ = "DialogClose",
			B = t.forwardRef((e, t) => {
				let { __scopeDialog: n, ...o } = e,
					a = x($, n)
				return (0, v.jsx)(c.Primitive.button, {
					type: "button",
					...o,
					ref: t,
					onClick: (0, r.composeEventHandlers)(e.onClick, () => a.onOpenChange(!1)),
				})
			})
		function W(e) {
			return e ? "open" : "closed"
		}
		B.displayName = $
		var U = "DialogTitleWarning",
			[K, Y] = (0, o.createContext)(U, { contentName: M, titleName: F, docsSlug: "dialog" }),
			q = ({ titleId: e }) => {
				let r = Y(U),
					n = `\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`
				return (
					t.useEffect(() => {
						e && (document.getElementById(e) || console.error(n))
					}, [n, e]),
					null
				)
			},
			X = ({ contentRef: e, descriptionId: r }) => {
				let n = Y("DialogDescriptionWarning"),
					o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`
				return (
					t.useEffect(() => {
						let t = e.current?.getAttribute("aria-describedby")
						r && t && (document.getElementById(r) || console.warn(o))
					}, [o, e, r]),
					null
				)
			}
		e.s([
			"Close",
			() => B,
			"Content",
			() => _,
			"Description",
			() => V,
			"Overlay",
			() => T,
			"Portal",
			() => P,
			"Root",
			() => E,
			"Title",
			() => z,
			"Trigger",
			() => k,
			"WarningProvider",
			() => K,
			"createDialogScope",
			() => b,
		])
	},
	46030,
	7284,
	(e) => {
		"use strict"
		function t() {
			for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
				(e = arguments[r]) &&
					(t = (function e(t) {
						var r,
							n,
							o = ""
						if ("string" == typeof t || "number" == typeof t) o += t
						else if ("object" == typeof t)
							if (Array.isArray(t)) {
								var a = t.length
								for (r = 0; r < a; r++) t[r] && (n = e(t[r])) && (o && (o += " "), (o += n))
							} else for (n in t) t[n] && (o && (o += " "), (o += n))
						return o
					})(e)) &&
					(n && (n += " "), (n += t))
			return n
		}
		e.s(["clsx", () => t], 7284)
		let r = (e, t) => {
				if (0 === e.length) return t.classGroupId
				let n = e[0],
					o = t.nextPart.get(n),
					a = o ? r(e.slice(1), o) : void 0
				if (a) return a
				if (0 === t.validators.length) return
				let i = e.join("-")
				return t.validators.find(({ validator: e }) => e(i))?.classGroupId
			},
			n = /^\[(.+)\]$/,
			o = (e, t, r, n) => {
				e.forEach((e) => {
					if ("string" == typeof e) {
						;("" === e ? t : a(t, e)).classGroupId = r
						return
					}
					"function" == typeof e
						? i(e)
							? o(e(n), t, r, n)
							: t.validators.push({ validator: e, classGroupId: r })
						: Object.entries(e).forEach(([e, i]) => {
								o(i, a(t, e), r, n)
							})
				})
			},
			a = (e, t) => {
				let r = e
				return (
					t.split("-").forEach((e) => {
						r.nextPart.has(e) || r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
							(r = r.nextPart.get(e))
					}),
					r
				)
			},
			i = (e) => e.isThemeGetter,
			l = /\s+/
		function s() {
			let e,
				t,
				r = 0,
				n = ""
			for (; r < arguments.length; ) (e = arguments[r++]) && (t = u(e)) && (n && (n += " "), (n += t))
			return n
		}
		let u = (e) => {
				let t
				if ("string" == typeof e) return e
				let r = ""
				for (let n = 0; n < e.length; n++) e[n] && (t = u(e[n])) && (r && (r += " "), (r += t))
				return r
			},
			d = (e) => {
				let t = (t) => t[e] || []
				return (t.isThemeGetter = !0), t
			},
			c = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
			f = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
			p = /^\d+\/\d+$/,
			m = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
			h =
				/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
			v = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
			g = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
			y = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
			b = (e) => p.test(e),
			w = (e) => !!e && !Number.isNaN(Number(e)),
			x = (e) => !!e && Number.isInteger(Number(e)),
			E = (e) => e.endsWith("%") && w(e.slice(0, -1)),
			C = (e) => m.test(e),
			k = () => !0,
			R = (e) => h.test(e) && !v.test(e),
			S = () => !1,
			j = (e) => g.test(e),
			P = (e) => y.test(e),
			D = (e) => !A(e) && !I(e),
			T = (e) => W(e, q, S),
			A = (e) => c.test(e),
			N = (e) => W(e, X, R),
			M = (e) => W(e, G, w),
			_ = (e) => W(e, K, S),
			O = (e) => W(e, Y, P),
			L = (e) => W(e, Q, j),
			I = (e) => f.test(e),
			F = (e) => U(e, X),
			z = (e) => U(e, Z),
			H = (e) => U(e, K),
			V = (e) => U(e, q),
			$ = (e) => U(e, Y),
			B = (e) => U(e, Q, !0),
			W = (e, t, r) => {
				let n = c.exec(e)
				return !!n && (n[1] ? t(n[1]) : r(n[2]))
			},
			U = (e, t, r = !1) => {
				let n = f.exec(e)
				return !!n && (n[1] ? t(n[1]) : r)
			},
			K = (e) => "position" === e || "percentage" === e,
			Y = (e) => "image" === e || "url" === e,
			q = (e) => "length" === e || "size" === e || "bg-size" === e,
			X = (e) => "length" === e,
			G = (e) => "number" === e,
			Z = (e) => "family-name" === e,
			Q = (e) => "shadow" === e,
			J = (function (e, ...t) {
				let a,
					i,
					u,
					d = function (l) {
						var s
						let f
						return (
							(i = (a = {
								cache: ((e) => {
									if (e < 1) return { get: () => void 0, set: () => {} }
									let t = 0,
										r = new Map(),
										n = new Map(),
										o = (o, a) => {
											r.set(o, a), ++t > e && ((t = 0), (n = r), (r = new Map()))
										}
									return {
										get(e) {
											let t = r.get(e)
											return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (o(e, t), t) : void 0
										},
										set(e, t) {
											r.has(e) ? r.set(e, t) : o(e, t)
										},
									}
								})((s = t.reduce((e, t) => t(e), e())).cacheSize),
								parseClassName: ((e) => {
									let { prefix: t, experimentalParseClassName: r } = e,
										n = (e) => {
											let t,
												r,
												n = [],
												o = 0,
												a = 0,
												i = 0
											for (let t = 0; t < e.length; t++) {
												let l = e[t]
												if (0 === o && 0 === a) {
													if (":" === l) {
														n.push(e.slice(i, t)), (i = t + 1)
														continue
													}
													if ("/" === l) {
														r = t
														continue
													}
												}
												"[" === l ? o++ : "]" === l ? o-- : "(" === l ? a++ : ")" === l && a--
											}
											let l = 0 === n.length ? e : e.substring(i),
												s = (t = l).endsWith("!")
													? t.substring(0, t.length - 1)
													: t.startsWith("!")
														? t.substring(1)
														: t
											return {
												modifiers: n,
												hasImportantModifier: s !== l,
												baseClassName: s,
												maybePostfixModifierPosition: r && r > i ? r - i : void 0,
											}
										}
									if (t) {
										let e = t + ":",
											r = n
										n = (t) =>
											t.startsWith(e)
												? r(t.substring(e.length))
												: {
														isExternal: !0,
														modifiers: [],
														hasImportantModifier: !1,
														baseClassName: t,
														maybePostfixModifierPosition: void 0,
													}
									}
									if (r) {
										let e = n
										n = (t) => r({ className: t, parseClassName: e })
									}
									return n
								})(s),
								sortModifiers:
									((f = Object.fromEntries(s.orderSensitiveModifiers.map((e) => [e, !0]))),
									(e) => {
										if (e.length <= 1) return e
										let t = [],
											r = []
										return (
											e.forEach((e) => {
												"[" === e[0] || f[e] ? (t.push(...r.sort(), e), (r = [])) : r.push(e)
											}),
											t.push(...r.sort()),
											t
										)
									}),
								...((e) => {
									let t = ((e) => {
											let { theme: t, classGroups: r } = e,
												n = { nextPart: new Map(), validators: [] }
											for (let e in r) o(r[e], n, e, t)
											return n
										})(e),
										{ conflictingClassGroups: a, conflictingClassGroupModifiers: i } = e
									return {
										getClassGroupId: (e) => {
											let o = e.split("-")
											return (
												"" === o[0] && 1 !== o.length && o.shift(),
												r(o, t) ||
													((e) => {
														if (n.test(e)) {
															let t = n.exec(e)[1],
																r = t?.substring(0, t.indexOf(":"))
															if (r) return "arbitrary.." + r
														}
													})(e)
											)
										},
										getConflictingClassGroupIds: (e, t) => {
											let r = a[e] || []
											return t && i[e] ? [...r, ...i[e]] : r
										},
									}
								})(s),
							}).cache.get),
							(u = a.cache.set),
							(d = c),
							c(l)
						)
					}
				function c(e) {
					let t = i(e)
					if (t) return t
					let r = ((e, t) => {
						let {
								parseClassName: r,
								getClassGroupId: n,
								getConflictingClassGroupIds: o,
								sortModifiers: a,
							} = t,
							i = [],
							s = e.trim().split(l),
							u = ""
						for (let e = s.length - 1; e >= 0; e -= 1) {
							let t = s[e],
								{
									isExternal: l,
									modifiers: d,
									hasImportantModifier: c,
									baseClassName: f,
									maybePostfixModifierPosition: p,
								} = r(t)
							if (l) {
								u = t + (u.length > 0 ? " " + u : u)
								continue
							}
							let m = !!p,
								h = n(m ? f.substring(0, p) : f)
							if (!h) {
								if (!m || !(h = n(f))) {
									u = t + (u.length > 0 ? " " + u : u)
									continue
								}
								m = !1
							}
							let v = a(d).join(":"),
								g = c ? v + "!" : v,
								y = g + h
							if (i.includes(y)) continue
							i.push(y)
							let b = o(h, m)
							for (let e = 0; e < b.length; ++e) {
								let t = b[e]
								i.push(g + t)
							}
							u = t + (u.length > 0 ? " " + u : u)
						}
						return u
					})(e, a)
					return u(e, r), r
				}
				return function () {
					return d(s.apply(null, arguments))
				}
			})(() => {
				let e = d("color"),
					t = d("font"),
					r = d("text"),
					n = d("font-weight"),
					o = d("tracking"),
					a = d("leading"),
					i = d("breakpoint"),
					l = d("container"),
					s = d("spacing"),
					u = d("radius"),
					c = d("shadow"),
					f = d("inset-shadow"),
					p = d("text-shadow"),
					m = d("drop-shadow"),
					h = d("blur"),
					v = d("perspective"),
					g = d("aspect"),
					y = d("ease"),
					R = d("animate"),
					S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
					j = () => [
						"center",
						"top",
						"bottom",
						"left",
						"right",
						"top-left",
						"left-top",
						"top-right",
						"right-top",
						"bottom-right",
						"right-bottom",
						"bottom-left",
						"left-bottom",
					],
					P = () => [...j(), I, A],
					W = () => ["auto", "hidden", "clip", "visible", "scroll"],
					U = () => ["auto", "contain", "none"],
					K = () => [I, A, s],
					Y = () => [b, "full", "auto", ...K()],
					q = () => [x, "none", "subgrid", I, A],
					X = () => ["auto", { span: ["full", x, I, A] }, x, I, A],
					G = () => [x, "auto", I, A],
					Z = () => ["auto", "min", "max", "fr", I, A],
					Q = () => [
						"start",
						"end",
						"center",
						"between",
						"around",
						"evenly",
						"stretch",
						"baseline",
						"center-safe",
						"end-safe",
					],
					J = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
					ee = () => ["auto", ...K()],
					et = () => [
						b,
						"auto",
						"full",
						"dvw",
						"dvh",
						"lvw",
						"lvh",
						"svw",
						"svh",
						"min",
						"max",
						"fit",
						...K(),
					],
					er = () => [e, I, A],
					en = () => [...j(), H, _, { position: [I, A] }],
					eo = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
					ea = () => ["auto", "cover", "contain", V, T, { size: [I, A] }],
					ei = () => [E, F, N],
					el = () => ["", "none", "full", u, I, A],
					es = () => ["", w, F, N],
					eu = () => ["solid", "dashed", "dotted", "double"],
					ed = () => [
						"normal",
						"multiply",
						"screen",
						"overlay",
						"darken",
						"lighten",
						"color-dodge",
						"color-burn",
						"hard-light",
						"soft-light",
						"difference",
						"exclusion",
						"hue",
						"saturation",
						"color",
						"luminosity",
					],
					ec = () => [w, E, H, _],
					ef = () => ["", "none", h, I, A],
					ep = () => ["none", w, I, A],
					em = () => ["none", w, I, A],
					eh = () => [w, I, A],
					ev = () => [b, "full", ...K()]
				return {
					cacheSize: 500,
					theme: {
						animate: ["spin", "ping", "pulse", "bounce"],
						aspect: ["video"],
						blur: [C],
						breakpoint: [C],
						color: [k],
						container: [C],
						"drop-shadow": [C],
						ease: ["in", "out", "in-out"],
						font: [D],
						"font-weight": [
							"thin",
							"extralight",
							"light",
							"normal",
							"medium",
							"semibold",
							"bold",
							"extrabold",
							"black",
						],
						"inset-shadow": [C],
						leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
						perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
						radius: [C],
						shadow: [C],
						spacing: ["px", w],
						text: [C],
						"text-shadow": [C],
						tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
					},
					classGroups: {
						aspect: [{ aspect: ["auto", "square", b, A, I, g] }],
						container: ["container"],
						columns: [{ columns: [w, A, I, l] }],
						"break-after": [{ "break-after": S() }],
						"break-before": [{ "break-before": S() }],
						"break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
						"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
						box: [{ box: ["border", "content"] }],
						display: [
							"block",
							"inline-block",
							"inline",
							"flex",
							"inline-flex",
							"table",
							"inline-table",
							"table-caption",
							"table-cell",
							"table-column",
							"table-column-group",
							"table-footer-group",
							"table-header-group",
							"table-row-group",
							"table-row",
							"flow-root",
							"grid",
							"inline-grid",
							"contents",
							"list-item",
							"hidden",
						],
						sr: ["sr-only", "not-sr-only"],
						float: [{ float: ["right", "left", "none", "start", "end"] }],
						clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
						isolation: ["isolate", "isolation-auto"],
						"object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
						"object-position": [{ object: P() }],
						overflow: [{ overflow: W() }],
						"overflow-x": [{ "overflow-x": W() }],
						"overflow-y": [{ "overflow-y": W() }],
						overscroll: [{ overscroll: U() }],
						"overscroll-x": [{ "overscroll-x": U() }],
						"overscroll-y": [{ "overscroll-y": U() }],
						position: ["static", "fixed", "absolute", "relative", "sticky"],
						inset: [{ inset: Y() }],
						"inset-x": [{ "inset-x": Y() }],
						"inset-y": [{ "inset-y": Y() }],
						start: [{ start: Y() }],
						end: [{ end: Y() }],
						top: [{ top: Y() }],
						right: [{ right: Y() }],
						bottom: [{ bottom: Y() }],
						left: [{ left: Y() }],
						visibility: ["visible", "invisible", "collapse"],
						z: [{ z: [x, "auto", I, A] }],
						basis: [{ basis: [b, "full", "auto", l, ...K()] }],
						"flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
						"flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
						flex: [{ flex: [w, b, "auto", "initial", "none", A] }],
						grow: [{ grow: ["", w, I, A] }],
						shrink: [{ shrink: ["", w, I, A] }],
						order: [{ order: [x, "first", "last", "none", I, A] }],
						"grid-cols": [{ "grid-cols": q() }],
						"col-start-end": [{ col: X() }],
						"col-start": [{ "col-start": G() }],
						"col-end": [{ "col-end": G() }],
						"grid-rows": [{ "grid-rows": q() }],
						"row-start-end": [{ row: X() }],
						"row-start": [{ "row-start": G() }],
						"row-end": [{ "row-end": G() }],
						"grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
						"auto-cols": [{ "auto-cols": Z() }],
						"auto-rows": [{ "auto-rows": Z() }],
						gap: [{ gap: K() }],
						"gap-x": [{ "gap-x": K() }],
						"gap-y": [{ "gap-y": K() }],
						"justify-content": [{ justify: [...Q(), "normal"] }],
						"justify-items": [{ "justify-items": [...J(), "normal"] }],
						"justify-self": [{ "justify-self": ["auto", ...J()] }],
						"align-content": [{ content: ["normal", ...Q()] }],
						"align-items": [{ items: [...J(), { baseline: ["", "last"] }] }],
						"align-self": [{ self: ["auto", ...J(), { baseline: ["", "last"] }] }],
						"place-content": [{ "place-content": Q() }],
						"place-items": [{ "place-items": [...J(), "baseline"] }],
						"place-self": [{ "place-self": ["auto", ...J()] }],
						p: [{ p: K() }],
						px: [{ px: K() }],
						py: [{ py: K() }],
						ps: [{ ps: K() }],
						pe: [{ pe: K() }],
						pt: [{ pt: K() }],
						pr: [{ pr: K() }],
						pb: [{ pb: K() }],
						pl: [{ pl: K() }],
						m: [{ m: ee() }],
						mx: [{ mx: ee() }],
						my: [{ my: ee() }],
						ms: [{ ms: ee() }],
						me: [{ me: ee() }],
						mt: [{ mt: ee() }],
						mr: [{ mr: ee() }],
						mb: [{ mb: ee() }],
						ml: [{ ml: ee() }],
						"space-x": [{ "space-x": K() }],
						"space-x-reverse": ["space-x-reverse"],
						"space-y": [{ "space-y": K() }],
						"space-y-reverse": ["space-y-reverse"],
						size: [{ size: et() }],
						w: [{ w: [l, "screen", ...et()] }],
						"min-w": [{ "min-w": [l, "screen", "none", ...et()] }],
						"max-w": [{ "max-w": [l, "screen", "none", "prose", { screen: [i] }, ...et()] }],
						h: [{ h: ["screen", "lh", ...et()] }],
						"min-h": [{ "min-h": ["screen", "lh", "none", ...et()] }],
						"max-h": [{ "max-h": ["screen", "lh", ...et()] }],
						"font-size": [{ text: ["base", r, F, N] }],
						"font-smoothing": ["antialiased", "subpixel-antialiased"],
						"font-style": ["italic", "not-italic"],
						"font-weight": [{ font: [n, I, M] }],
						"font-stretch": [
							{
								"font-stretch": [
									"ultra-condensed",
									"extra-condensed",
									"condensed",
									"semi-condensed",
									"normal",
									"semi-expanded",
									"expanded",
									"extra-expanded",
									"ultra-expanded",
									E,
									A,
								],
							},
						],
						"font-family": [{ font: [z, A, t] }],
						"fvn-normal": ["normal-nums"],
						"fvn-ordinal": ["ordinal"],
						"fvn-slashed-zero": ["slashed-zero"],
						"fvn-figure": ["lining-nums", "oldstyle-nums"],
						"fvn-spacing": ["proportional-nums", "tabular-nums"],
						"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
						tracking: [{ tracking: [o, I, A] }],
						"line-clamp": [{ "line-clamp": [w, "none", I, M] }],
						leading: [{ leading: [a, ...K()] }],
						"list-image": [{ "list-image": ["none", I, A] }],
						"list-style-position": [{ list: ["inside", "outside"] }],
						"list-style-type": [{ list: ["disc", "decimal", "none", I, A] }],
						"text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
						"placeholder-color": [{ placeholder: er() }],
						"text-color": [{ text: er() }],
						"text-decoration": ["underline", "overline", "line-through", "no-underline"],
						"text-decoration-style": [{ decoration: [...eu(), "wavy"] }],
						"text-decoration-thickness": [{ decoration: [w, "from-font", "auto", I, N] }],
						"text-decoration-color": [{ decoration: er() }],
						"underline-offset": [{ "underline-offset": [w, "auto", I, A] }],
						"text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
						"text-overflow": ["truncate", "text-ellipsis", "text-clip"],
						"text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
						indent: [{ indent: K() }],
						"vertical-align": [
							{
								align: [
									"baseline",
									"top",
									"middle",
									"bottom",
									"text-top",
									"text-bottom",
									"sub",
									"super",
									I,
									A,
								],
							},
						],
						whitespace: [
							{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] },
						],
						break: [{ break: ["normal", "words", "all", "keep"] }],
						wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
						hyphens: [{ hyphens: ["none", "manual", "auto"] }],
						content: [{ content: ["none", I, A] }],
						"bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
						"bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
						"bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
						"bg-position": [{ bg: en() }],
						"bg-repeat": [{ bg: eo() }],
						"bg-size": [{ bg: ea() }],
						"bg-image": [
							{
								bg: [
									"none",
									{
										linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, x, I, A],
										radial: ["", I, A],
										conic: [x, I, A],
									},
									$,
									O,
								],
							},
						],
						"bg-color": [{ bg: er() }],
						"gradient-from-pos": [{ from: ei() }],
						"gradient-via-pos": [{ via: ei() }],
						"gradient-to-pos": [{ to: ei() }],
						"gradient-from": [{ from: er() }],
						"gradient-via": [{ via: er() }],
						"gradient-to": [{ to: er() }],
						rounded: [{ rounded: el() }],
						"rounded-s": [{ "rounded-s": el() }],
						"rounded-e": [{ "rounded-e": el() }],
						"rounded-t": [{ "rounded-t": el() }],
						"rounded-r": [{ "rounded-r": el() }],
						"rounded-b": [{ "rounded-b": el() }],
						"rounded-l": [{ "rounded-l": el() }],
						"rounded-ss": [{ "rounded-ss": el() }],
						"rounded-se": [{ "rounded-se": el() }],
						"rounded-ee": [{ "rounded-ee": el() }],
						"rounded-es": [{ "rounded-es": el() }],
						"rounded-tl": [{ "rounded-tl": el() }],
						"rounded-tr": [{ "rounded-tr": el() }],
						"rounded-br": [{ "rounded-br": el() }],
						"rounded-bl": [{ "rounded-bl": el() }],
						"border-w": [{ border: es() }],
						"border-w-x": [{ "border-x": es() }],
						"border-w-y": [{ "border-y": es() }],
						"border-w-s": [{ "border-s": es() }],
						"border-w-e": [{ "border-e": es() }],
						"border-w-t": [{ "border-t": es() }],
						"border-w-r": [{ "border-r": es() }],
						"border-w-b": [{ "border-b": es() }],
						"border-w-l": [{ "border-l": es() }],
						"divide-x": [{ "divide-x": es() }],
						"divide-x-reverse": ["divide-x-reverse"],
						"divide-y": [{ "divide-y": es() }],
						"divide-y-reverse": ["divide-y-reverse"],
						"border-style": [{ border: [...eu(), "hidden", "none"] }],
						"divide-style": [{ divide: [...eu(), "hidden", "none"] }],
						"border-color": [{ border: er() }],
						"border-color-x": [{ "border-x": er() }],
						"border-color-y": [{ "border-y": er() }],
						"border-color-s": [{ "border-s": er() }],
						"border-color-e": [{ "border-e": er() }],
						"border-color-t": [{ "border-t": er() }],
						"border-color-r": [{ "border-r": er() }],
						"border-color-b": [{ "border-b": er() }],
						"border-color-l": [{ "border-l": er() }],
						"divide-color": [{ divide: er() }],
						"outline-style": [{ outline: [...eu(), "none", "hidden"] }],
						"outline-offset": [{ "outline-offset": [w, I, A] }],
						"outline-w": [{ outline: ["", w, F, N] }],
						"outline-color": [{ outline: er() }],
						shadow: [{ shadow: ["", "none", c, B, L] }],
						"shadow-color": [{ shadow: er() }],
						"inset-shadow": [{ "inset-shadow": ["none", f, B, L] }],
						"inset-shadow-color": [{ "inset-shadow": er() }],
						"ring-w": [{ ring: es() }],
						"ring-w-inset": ["ring-inset"],
						"ring-color": [{ ring: er() }],
						"ring-offset-w": [{ "ring-offset": [w, N] }],
						"ring-offset-color": [{ "ring-offset": er() }],
						"inset-ring-w": [{ "inset-ring": es() }],
						"inset-ring-color": [{ "inset-ring": er() }],
						"text-shadow": [{ "text-shadow": ["none", p, B, L] }],
						"text-shadow-color": [{ "text-shadow": er() }],
						opacity: [{ opacity: [w, I, A] }],
						"mix-blend": [{ "mix-blend": [...ed(), "plus-darker", "plus-lighter"] }],
						"bg-blend": [{ "bg-blend": ed() }],
						"mask-clip": [
							{ "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] },
							"mask-no-clip",
						],
						"mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }],
						"mask-image-linear-pos": [{ "mask-linear": [w] }],
						"mask-image-linear-from-pos": [{ "mask-linear-from": ec() }],
						"mask-image-linear-to-pos": [{ "mask-linear-to": ec() }],
						"mask-image-linear-from-color": [{ "mask-linear-from": er() }],
						"mask-image-linear-to-color": [{ "mask-linear-to": er() }],
						"mask-image-t-from-pos": [{ "mask-t-from": ec() }],
						"mask-image-t-to-pos": [{ "mask-t-to": ec() }],
						"mask-image-t-from-color": [{ "mask-t-from": er() }],
						"mask-image-t-to-color": [{ "mask-t-to": er() }],
						"mask-image-r-from-pos": [{ "mask-r-from": ec() }],
						"mask-image-r-to-pos": [{ "mask-r-to": ec() }],
						"mask-image-r-from-color": [{ "mask-r-from": er() }],
						"mask-image-r-to-color": [{ "mask-r-to": er() }],
						"mask-image-b-from-pos": [{ "mask-b-from": ec() }],
						"mask-image-b-to-pos": [{ "mask-b-to": ec() }],
						"mask-image-b-from-color": [{ "mask-b-from": er() }],
						"mask-image-b-to-color": [{ "mask-b-to": er() }],
						"mask-image-l-from-pos": [{ "mask-l-from": ec() }],
						"mask-image-l-to-pos": [{ "mask-l-to": ec() }],
						"mask-image-l-from-color": [{ "mask-l-from": er() }],
						"mask-image-l-to-color": [{ "mask-l-to": er() }],
						"mask-image-x-from-pos": [{ "mask-x-from": ec() }],
						"mask-image-x-to-pos": [{ "mask-x-to": ec() }],
						"mask-image-x-from-color": [{ "mask-x-from": er() }],
						"mask-image-x-to-color": [{ "mask-x-to": er() }],
						"mask-image-y-from-pos": [{ "mask-y-from": ec() }],
						"mask-image-y-to-pos": [{ "mask-y-to": ec() }],
						"mask-image-y-from-color": [{ "mask-y-from": er() }],
						"mask-image-y-to-color": [{ "mask-y-to": er() }],
						"mask-image-radial": [{ "mask-radial": [I, A] }],
						"mask-image-radial-from-pos": [{ "mask-radial-from": ec() }],
						"mask-image-radial-to-pos": [{ "mask-radial-to": ec() }],
						"mask-image-radial-from-color": [{ "mask-radial-from": er() }],
						"mask-image-radial-to-color": [{ "mask-radial-to": er() }],
						"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
						"mask-image-radial-size": [
							{ "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] },
						],
						"mask-image-radial-pos": [{ "mask-radial-at": j() }],
						"mask-image-conic-pos": [{ "mask-conic": [w] }],
						"mask-image-conic-from-pos": [{ "mask-conic-from": ec() }],
						"mask-image-conic-to-pos": [{ "mask-conic-to": ec() }],
						"mask-image-conic-from-color": [{ "mask-conic-from": er() }],
						"mask-image-conic-to-color": [{ "mask-conic-to": er() }],
						"mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
						"mask-origin": [{ "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] }],
						"mask-position": [{ mask: en() }],
						"mask-repeat": [{ mask: eo() }],
						"mask-size": [{ mask: ea() }],
						"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
						"mask-image": [{ mask: ["none", I, A] }],
						filter: [{ filter: ["", "none", I, A] }],
						blur: [{ blur: ef() }],
						brightness: [{ brightness: [w, I, A] }],
						contrast: [{ contrast: [w, I, A] }],
						"drop-shadow": [{ "drop-shadow": ["", "none", m, B, L] }],
						"drop-shadow-color": [{ "drop-shadow": er() }],
						grayscale: [{ grayscale: ["", w, I, A] }],
						"hue-rotate": [{ "hue-rotate": [w, I, A] }],
						invert: [{ invert: ["", w, I, A] }],
						saturate: [{ saturate: [w, I, A] }],
						sepia: [{ sepia: ["", w, I, A] }],
						"backdrop-filter": [{ "backdrop-filter": ["", "none", I, A] }],
						"backdrop-blur": [{ "backdrop-blur": ef() }],
						"backdrop-brightness": [{ "backdrop-brightness": [w, I, A] }],
						"backdrop-contrast": [{ "backdrop-contrast": [w, I, A] }],
						"backdrop-grayscale": [{ "backdrop-grayscale": ["", w, I, A] }],
						"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [w, I, A] }],
						"backdrop-invert": [{ "backdrop-invert": ["", w, I, A] }],
						"backdrop-opacity": [{ "backdrop-opacity": [w, I, A] }],
						"backdrop-saturate": [{ "backdrop-saturate": [w, I, A] }],
						"backdrop-sepia": [{ "backdrop-sepia": ["", w, I, A] }],
						"border-collapse": [{ border: ["collapse", "separate"] }],
						"border-spacing": [{ "border-spacing": K() }],
						"border-spacing-x": [{ "border-spacing-x": K() }],
						"border-spacing-y": [{ "border-spacing-y": K() }],
						"table-layout": [{ table: ["auto", "fixed"] }],
						caption: [{ caption: ["top", "bottom"] }],
						transition: [
							{ transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", I, A] },
						],
						"transition-behavior": [{ transition: ["normal", "discrete"] }],
						duration: [{ duration: [w, "initial", I, A] }],
						ease: [{ ease: ["linear", "initial", y, I, A] }],
						delay: [{ delay: [w, I, A] }],
						animate: [{ animate: ["none", R, I, A] }],
						backface: [{ backface: ["hidden", "visible"] }],
						perspective: [{ perspective: [v, I, A] }],
						"perspective-origin": [{ "perspective-origin": P() }],
						rotate: [{ rotate: ep() }],
						"rotate-x": [{ "rotate-x": ep() }],
						"rotate-y": [{ "rotate-y": ep() }],
						"rotate-z": [{ "rotate-z": ep() }],
						scale: [{ scale: em() }],
						"scale-x": [{ "scale-x": em() }],
						"scale-y": [{ "scale-y": em() }],
						"scale-z": [{ "scale-z": em() }],
						"scale-3d": ["scale-3d"],
						skew: [{ skew: eh() }],
						"skew-x": [{ "skew-x": eh() }],
						"skew-y": [{ "skew-y": eh() }],
						transform: [{ transform: [I, A, "", "none", "gpu", "cpu"] }],
						"transform-origin": [{ origin: P() }],
						"transform-style": [{ transform: ["3d", "flat"] }],
						translate: [{ translate: ev() }],
						"translate-x": [{ "translate-x": ev() }],
						"translate-y": [{ "translate-y": ev() }],
						"translate-z": [{ "translate-z": ev() }],
						"translate-none": ["translate-none"],
						accent: [{ accent: er() }],
						appearance: [{ appearance: ["none", "auto"] }],
						"caret-color": [{ caret: er() }],
						"color-scheme": [
							{ scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] },
						],
						cursor: [
							{
								cursor: [
									"auto",
									"default",
									"pointer",
									"wait",
									"text",
									"move",
									"help",
									"not-allowed",
									"none",
									"context-menu",
									"progress",
									"cell",
									"crosshair",
									"vertical-text",
									"alias",
									"copy",
									"no-drop",
									"grab",
									"grabbing",
									"all-scroll",
									"col-resize",
									"row-resize",
									"n-resize",
									"e-resize",
									"s-resize",
									"w-resize",
									"ne-resize",
									"nw-resize",
									"se-resize",
									"sw-resize",
									"ew-resize",
									"ns-resize",
									"nesw-resize",
									"nwse-resize",
									"zoom-in",
									"zoom-out",
									I,
									A,
								],
							},
						],
						"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
						"pointer-events": [{ "pointer-events": ["auto", "none"] }],
						resize: [{ resize: ["none", "", "y", "x"] }],
						"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
						"scroll-m": [{ "scroll-m": K() }],
						"scroll-mx": [{ "scroll-mx": K() }],
						"scroll-my": [{ "scroll-my": K() }],
						"scroll-ms": [{ "scroll-ms": K() }],
						"scroll-me": [{ "scroll-me": K() }],
						"scroll-mt": [{ "scroll-mt": K() }],
						"scroll-mr": [{ "scroll-mr": K() }],
						"scroll-mb": [{ "scroll-mb": K() }],
						"scroll-ml": [{ "scroll-ml": K() }],
						"scroll-p": [{ "scroll-p": K() }],
						"scroll-px": [{ "scroll-px": K() }],
						"scroll-py": [{ "scroll-py": K() }],
						"scroll-ps": [{ "scroll-ps": K() }],
						"scroll-pe": [{ "scroll-pe": K() }],
						"scroll-pt": [{ "scroll-pt": K() }],
						"scroll-pr": [{ "scroll-pr": K() }],
						"scroll-pb": [{ "scroll-pb": K() }],
						"scroll-pl": [{ "scroll-pl": K() }],
						"snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
						"snap-stop": [{ snap: ["normal", "always"] }],
						"snap-type": [{ snap: ["none", "x", "y", "both"] }],
						"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
						touch: [{ touch: ["auto", "none", "manipulation"] }],
						"touch-x": [{ "touch-pan": ["x", "left", "right"] }],
						"touch-y": [{ "touch-pan": ["y", "up", "down"] }],
						"touch-pz": ["touch-pinch-zoom"],
						select: [{ select: ["none", "text", "all", "auto"] }],
						"will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", I, A] }],
						fill: [{ fill: ["none", ...er()] }],
						"stroke-w": [{ stroke: [w, F, N, M] }],
						stroke: [{ stroke: ["none", ...er()] }],
						"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
					},
					conflictingClassGroups: {
						overflow: ["overflow-x", "overflow-y"],
						overscroll: ["overscroll-x", "overscroll-y"],
						inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
						"inset-x": ["right", "left"],
						"inset-y": ["top", "bottom"],
						flex: ["basis", "grow", "shrink"],
						gap: ["gap-x", "gap-y"],
						p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
						px: ["pr", "pl"],
						py: ["pt", "pb"],
						m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
						mx: ["mr", "ml"],
						my: ["mt", "mb"],
						size: ["w", "h"],
						"font-size": ["leading"],
						"fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
						"fvn-ordinal": ["fvn-normal"],
						"fvn-slashed-zero": ["fvn-normal"],
						"fvn-figure": ["fvn-normal"],
						"fvn-spacing": ["fvn-normal"],
						"fvn-fraction": ["fvn-normal"],
						"line-clamp": ["display", "overflow"],
						rounded: [
							"rounded-s",
							"rounded-e",
							"rounded-t",
							"rounded-r",
							"rounded-b",
							"rounded-l",
							"rounded-ss",
							"rounded-se",
							"rounded-ee",
							"rounded-es",
							"rounded-tl",
							"rounded-tr",
							"rounded-br",
							"rounded-bl",
						],
						"rounded-s": ["rounded-ss", "rounded-es"],
						"rounded-e": ["rounded-se", "rounded-ee"],
						"rounded-t": ["rounded-tl", "rounded-tr"],
						"rounded-r": ["rounded-tr", "rounded-br"],
						"rounded-b": ["rounded-br", "rounded-bl"],
						"rounded-l": ["rounded-tl", "rounded-bl"],
						"border-spacing": ["border-spacing-x", "border-spacing-y"],
						"border-w": [
							"border-w-x",
							"border-w-y",
							"border-w-s",
							"border-w-e",
							"border-w-t",
							"border-w-r",
							"border-w-b",
							"border-w-l",
						],
						"border-w-x": ["border-w-r", "border-w-l"],
						"border-w-y": ["border-w-t", "border-w-b"],
						"border-color": [
							"border-color-x",
							"border-color-y",
							"border-color-s",
							"border-color-e",
							"border-color-t",
							"border-color-r",
							"border-color-b",
							"border-color-l",
						],
						"border-color-x": ["border-color-r", "border-color-l"],
						"border-color-y": ["border-color-t", "border-color-b"],
						translate: ["translate-x", "translate-y", "translate-none"],
						"translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
						"scroll-m": [
							"scroll-mx",
							"scroll-my",
							"scroll-ms",
							"scroll-me",
							"scroll-mt",
							"scroll-mr",
							"scroll-mb",
							"scroll-ml",
						],
						"scroll-mx": ["scroll-mr", "scroll-ml"],
						"scroll-my": ["scroll-mt", "scroll-mb"],
						"scroll-p": [
							"scroll-px",
							"scroll-py",
							"scroll-ps",
							"scroll-pe",
							"scroll-pt",
							"scroll-pr",
							"scroll-pb",
							"scroll-pl",
						],
						"scroll-px": ["scroll-pr", "scroll-pl"],
						"scroll-py": ["scroll-pt", "scroll-pb"],
						touch: ["touch-x", "touch-y", "touch-pz"],
						"touch-x": ["touch"],
						"touch-y": ["touch"],
						"touch-pz": ["touch"],
					},
					conflictingClassGroupModifiers: { "font-size": ["leading"] },
					orderSensitiveModifiers: [
						"*",
						"**",
						"after",
						"backdrop",
						"before",
						"details-content",
						"file",
						"first-letter",
						"first-line",
						"marker",
						"placeholder",
						"selection",
					],
				}
			})
		function ee(...e) {
			return J(t(e))
		}
		e.s(["cn", () => ee], 46030)
	},
	46748,
	94237,
	71330,
	(e) => {
		"use strict"
		var t = e.i(8026),
			r = e.i(10008),
			n = e.i(4113),
			o = e.i(26613),
			a = e.i(6708),
			i = e.i(75453),
			l = e.i(16853),
			s = "AlertDialog",
			[u, d] = (0, n.createContextScope)(s, [a.createDialogScope]),
			c = (0, a.createDialogScope)(),
			f = (e) => {
				let { __scopeAlertDialog: r, ...n } = e,
					o = c(r)
				return (0, t.jsx)(a.Root, { ...o, ...n, modal: !0 })
			}
		f.displayName = s
		var p = r.forwardRef((e, r) => {
			let { __scopeAlertDialog: n, ...o } = e,
				i = c(n)
			return (0, t.jsx)(a.Trigger, { ...i, ...o, ref: r })
		})
		p.displayName = "AlertDialogTrigger"
		var m = (e) => {
			let { __scopeAlertDialog: r, ...n } = e,
				o = c(r)
			return (0, t.jsx)(a.Portal, { ...o, ...n })
		}
		m.displayName = "AlertDialogPortal"
		var h = r.forwardRef((e, r) => {
			let { __scopeAlertDialog: n, ...o } = e,
				i = c(n)
			return (0, t.jsx)(a.Overlay, { ...i, ...o, ref: r })
		})
		h.displayName = "AlertDialogOverlay"
		var v = "AlertDialogContent",
			[g, y] = u(v),
			b = (0, l.createSlottable)("AlertDialogContent"),
			w = r.forwardRef((e, n) => {
				let { __scopeAlertDialog: l, children: s, ...u } = e,
					d = c(l),
					f = r.useRef(null),
					p = (0, o.useComposedRefs)(n, f),
					m = r.useRef(null)
				return (0, t.jsx)(a.WarningProvider, {
					contentName: v,
					titleName: x,
					docsSlug: "alert-dialog",
					children: (0, t.jsx)(g, {
						scope: l,
						cancelRef: m,
						children: (0, t.jsxs)(a.Content, {
							role: "alertdialog",
							...d,
							...u,
							ref: p,
							onOpenAutoFocus: (0, i.composeEventHandlers)(u.onOpenAutoFocus, (e) => {
								e.preventDefault(), m.current?.focus({ preventScroll: !0 })
							}),
							onPointerDownOutside: (e) => e.preventDefault(),
							onInteractOutside: (e) => e.preventDefault(),
							children: [(0, t.jsx)(b, { children: s }), (0, t.jsx)(P, { contentRef: f })],
						}),
					}),
				})
			})
		w.displayName = v
		var x = "AlertDialogTitle",
			E = r.forwardRef((e, r) => {
				let { __scopeAlertDialog: n, ...o } = e,
					i = c(n)
				return (0, t.jsx)(a.Title, { ...i, ...o, ref: r })
			})
		E.displayName = x
		var C = "AlertDialogDescription",
			k = r.forwardRef((e, r) => {
				let { __scopeAlertDialog: n, ...o } = e,
					i = c(n)
				return (0, t.jsx)(a.Description, { ...i, ...o, ref: r })
			})
		k.displayName = C
		var R = r.forwardRef((e, r) => {
			let { __scopeAlertDialog: n, ...o } = e,
				i = c(n)
			return (0, t.jsx)(a.Close, { ...i, ...o, ref: r })
		})
		R.displayName = "AlertDialogAction"
		var S = "AlertDialogCancel",
			j = r.forwardRef((e, r) => {
				let { __scopeAlertDialog: n, ...i } = e,
					{ cancelRef: l } = y(S, n),
					s = c(n),
					u = (0, o.useComposedRefs)(r, l)
				return (0, t.jsx)(a.Close, { ...s, ...i, ref: u })
			})
		j.displayName = S
		var P = ({ contentRef: e }) => {
				let t = `\`${v}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${v}\` by passing a \`${C}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${v}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`
				return (
					r.useEffect(() => {
						document.getElementById(e.current?.getAttribute("aria-describedby")) || console.warn(t)
					}, [t, e]),
					null
				)
			},
			D = e.i(46030),
			T = e.i(7284)
		let A = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
			N = T.clsx,
			M = (e, t) => (r) => {
				var n
				if ((null == t ? void 0 : t.variants) == null)
					return N(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className)
				let { variants: o, defaultVariants: a } = t,
					i = Object.keys(o).map((e) => {
						let t = null == r ? void 0 : r[e],
							n = null == a ? void 0 : a[e]
						if (null === t) return null
						let i = A(t) || A(n)
						return o[e][i]
					}),
					l =
						r &&
						Object.entries(r).reduce((e, t) => {
							let [r, n] = t
							return void 0 === n || (e[r] = n), e
						}, {})
				return N(
					e,
					i,
					null == t || null == (n = t.compoundVariants)
						? void 0
						: n.reduce((e, t) => {
								let { class: r, className: n, ...o } = t
								return Object.entries(o).every((e) => {
									let [t, r] = e
									return Array.isArray(r) ? r.includes({ ...a, ...l }[t]) : { ...a, ...l }[t] === r
								})
									? [...e, r, n]
									: e
							}, []),
					null == r ? void 0 : r.class,
					null == r ? void 0 : r.className,
				)
			}
		e.s(["cva", 0, M], 94237)
		let _ = M(
			"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:opacity-80 active:scale-95 cursor-pointer",
			{
				variants: {
					variant: {
						default: "bg-primary text-primary-foreground shadow-xs [&_svg]:text-accent",
						destructive:
							"bg-destructive text-white shadow-xs focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
						outline:
							"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input",
						secondary: "bg-secondary text-secondary-foreground shadow-xs [&_svg]:text-ring",
						ghost: "hover:bg-primary hover:text-primary-foreground",
						link: "text-accent underline-offset-4 hover:underline h-4! px-1! rounded-none",
						input: "bg-input text-input-foreground active:scale-100 shadow-xs",
					},
					size: {
						default: "h-9 px-4 py-2 has-[>svg]:px-3",
						sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5 text-sm",
						lg: "h-10 px-6 has-[>svg]:px-4 text-lg",
						icon: "size-9",
					},
				},
				defaultVariants: { variant: "default", size: "default" },
			},
		)
		function O({ className: e, variant: r, size: n, asChild: o = !1, ...a }) {
			let i = o ? l.Slot : "button"
			return (0, t.jsx)(i, {
				"data-slot": "button",
				className: (0, D.cn)(_({ variant: r, size: n, className: e })),
				...a,
			})
		}
		function L({ ...e }) {
			return (0, t.jsx)(f, { "data-slot": "alert-dialog", ...e })
		}
		function I({ ...e }) {
			return (0, t.jsx)(p, { "data-slot": "alert-dialog-trigger", ...e })
		}
		function F({ ...e }) {
			return (0, t.jsx)(m, { "data-slot": "alert-dialog-portal", ...e })
		}
		function z({ className: e, ...r }) {
			return (0, t.jsx)(h, {
				"data-slot": "alert-dialog-overlay",
				className: (0, D.cn)(
					"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
					e,
				),
				...r,
			})
		}
		function H({ className: e, ...r }) {
			return (0, t.jsxs)(F, {
				children: [
					(0, t.jsx)(z, {}),
					(0, t.jsx)(w, {
						"data-slot": "alert-dialog-content",
						className: (0, D.cn)(
							"bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
							e,
						),
						...r,
					}),
				],
			})
		}
		function V({ className: e, ...r }) {
			return (0, t.jsx)("div", {
				"data-slot": "alert-dialog-header",
				className: (0, D.cn)("flex flex-col gap-2 text-center sm:text-left", e),
				...r,
			})
		}
		function $({ className: e, ...r }) {
			return (0, t.jsx)("div", {
				"data-slot": "alert-dialog-footer",
				className: (0, D.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
				...r,
			})
		}
		function B({ className: e, ...r }) {
			return (0, t.jsx)(E, {
				"data-slot": "alert-dialog-title",
				className: (0, D.cn)("text-lg font-semibold", e),
				...r,
			})
		}
		function W({ className: e, ...r }) {
			return (0, t.jsx)(k, {
				"data-slot": "alert-dialog-description",
				className: (0, D.cn)("text-muted-foreground text-sm", e),
				...r,
			})
		}
		function U({ className: e, ...r }) {
			return (0, t.jsx)(R, { className: (0, D.cn)(_(), e), ...r })
		}
		function K({ className: e, ...r }) {
			return (0, t.jsx)(j, { className: (0, D.cn)(_({ variant: "outline" }), e), ...r })
		}
		e.s(["Button", () => O, "buttonVariants", () => _], 71330),
			e.s(
				[
					"AlertDialog",
					() => L,
					"AlertDialogAction",
					() => U,
					"AlertDialogCancel",
					() => K,
					"AlertDialogContent",
					() => H,
					"AlertDialogDescription",
					() => W,
					"AlertDialogFooter",
					() => $,
					"AlertDialogHeader",
					() => V,
					"AlertDialogOverlay",
					() => z,
					"AlertDialogPortal",
					() => F,
					"AlertDialogTitle",
					() => B,
					"AlertDialogTrigger",
					() => I,
				],
				46748,
			)
	},
	18176,
	(e) => {
		"use strict"
		var t = e.i(10008)
		function r(e) {
			let r = t.useRef({ value: e, previous: e })
			return t.useMemo(
				() => (
					r.current.value !== e && ((r.current.previous = r.current.value), (r.current.value = e)),
					r.current.previous
				),
				[e],
			)
		}
		e.s(["usePrevious", () => r])
	},
	43984,
	(e) => {
		"use strict"
		var t = e.i(10008),
			r = e.i(29241)
		function n(e) {
			let [n, o] = t.useState(void 0)
			return (
				(0, r.useLayoutEffect)(() => {
					if (e) {
						o({ width: e.offsetWidth, height: e.offsetHeight })
						let t = new ResizeObserver((t) => {
							let r, n
							if (!Array.isArray(t) || !t.length) return
							let a = t[0]
							if ("borderBoxSize" in a) {
								let e = a.borderBoxSize,
									t = Array.isArray(e) ? e[0] : e
								;(r = t.inlineSize), (n = t.blockSize)
							} else (r = e.offsetWidth), (n = e.offsetHeight)
							o({ width: r, height: n })
						})
						return t.observe(e, { box: "border-box" }), () => t.unobserve(e)
					}
					o(void 0)
				}, [e]),
				n
			)
		}
		e.s(["useSize", () => n])
	},
	13699,
	(e) => {
		"use strict"
		var t = e.i(10008)
		let r = (e) => {
				let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => (r ? r.toUpperCase() : t.toLowerCase()))
				return t.charAt(0).toUpperCase() + t.slice(1)
			},
			n = (...e) =>
				e
					.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
					.join(" ")
					.trim()
		var o = {
			xmlns: "http://www.w3.org/2000/svg",
			width: 24,
			height: 24,
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: 2,
			strokeLinecap: "round",
			strokeLinejoin: "round",
		}
		let a = (0, t.forwardRef)(
				(
					{
						color: e = "currentColor",
						size: r = 24,
						strokeWidth: a = 2,
						absoluteStrokeWidth: i,
						className: l = "",
						children: s,
						iconNode: u,
						...d
					},
					c,
				) =>
					(0, t.createElement)(
						"svg",
						{
							ref: c,
							...o,
							width: r,
							height: r,
							stroke: e,
							strokeWidth: i ? (24 * Number(a)) / Number(r) : a,
							className: n("lucide", l),
							...(!s &&
								!((e) => {
									for (let t in e)
										if (t.startsWith("aria-") || "role" === t || "title" === t) return !0
								})(d) && { "aria-hidden": "true" }),
							...d,
						},
						[...u.map(([e, r]) => (0, t.createElement)(e, r)), ...(Array.isArray(s) ? s : [s])],
					),
			),
			i = (e, o) => {
				let i = (0, t.forwardRef)(({ className: i, ...l }, s) =>
					(0, t.createElement)(a, {
						ref: s,
						iconNode: o,
						className: n(
							`lucide-${r(e)
								.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
								.toLowerCase()}`,
							`lucide-${e}`,
							i,
						),
						...l,
					}),
				)
				return (i.displayName = r(e)), i
			}
		e.s(["default", () => i], 13699)
	},
	58397,
	(e) => {
		"use strict"
		let t = (0, e.i(13699).default)("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]])
		e.s(["default", () => t])
	},
	82715,
	(e) => {
		"use strict"
		var t = e.i(58397)
		e.s(["CheckIcon", () => t.default])
	},
	60251,
	(e) => {
		"use strict"
		var t = e.i(8026),
			r = e.i(10008),
			n = e.i(26613),
			o = e.i(4113),
			a = e.i(75453),
			i = e.i(93180),
			l = e.i(18176),
			s = e.i(43984),
			u = e.i(98753),
			d = e.i(66791),
			c = "Checkbox",
			[f, p] = (0, o.createContextScope)(c),
			[m, h] = f(c)
		function v(e) {
			let {
					__scopeCheckbox: n,
					checked: o,
					children: a,
					defaultChecked: l,
					disabled: s,
					form: u,
					name: d,
					onCheckedChange: f,
					required: p,
					value: h = "on",
					internal_do_not_use_render: v,
				} = e,
				[g, y] = (0, i.useControllableState)({ prop: o, defaultProp: l ?? !1, onChange: f, caller: c }),
				[b, w] = r.useState(null),
				[x, E] = r.useState(null),
				C = r.useRef(!1),
				R = !b || !!u || !!b.closest("form"),
				S = {
					checked: g,
					disabled: s,
					setChecked: y,
					control: b,
					setControl: w,
					name: d,
					form: u,
					value: h,
					hasConsumerStoppedPropagationRef: C,
					required: p,
					defaultChecked: !k(l) && l,
					isFormControl: R,
					bubbleInput: x,
					setBubbleInput: E,
				}
			return (0, t.jsx)(m, { scope: n, ...S, children: "function" == typeof v ? v(S) : a })
		}
		var g = "CheckboxTrigger",
			y = r.forwardRef(({ __scopeCheckbox: e, onKeyDown: o, onClick: i, ...l }, s) => {
				let {
						control: u,
						value: c,
						disabled: f,
						checked: p,
						required: m,
						setControl: v,
						setChecked: y,
						hasConsumerStoppedPropagationRef: b,
						isFormControl: w,
						bubbleInput: x,
					} = h(g, e),
					E = (0, n.useComposedRefs)(s, v),
					C = r.useRef(p)
				return (
					r.useEffect(() => {
						let e = u?.form
						if (e) {
							let t = () => y(C.current)
							return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
						}
					}, [u, y]),
					(0, t.jsx)(d.Primitive.button, {
						type: "button",
						role: "checkbox",
						"aria-checked": k(p) ? "mixed" : p,
						"aria-required": m,
						"data-state": R(p),
						"data-disabled": f ? "" : void 0,
						disabled: f,
						value: c,
						...l,
						ref: E,
						onKeyDown: (0, a.composeEventHandlers)(o, (e) => {
							"Enter" === e.key && e.preventDefault()
						}),
						onClick: (0, a.composeEventHandlers)(i, (e) => {
							y((e) => !!k(e) || !e),
								x && w && ((b.current = e.isPropagationStopped()), b.current || e.stopPropagation())
						}),
					})
				)
			})
		y.displayName = g
		var b = r.forwardRef((e, r) => {
			let {
				__scopeCheckbox: n,
				name: o,
				checked: a,
				defaultChecked: i,
				required: l,
				disabled: s,
				value: u,
				onCheckedChange: d,
				form: c,
				...f
			} = e
			return (0, t.jsx)(v, {
				__scopeCheckbox: n,
				checked: a,
				defaultChecked: i,
				disabled: s,
				required: l,
				onCheckedChange: d,
				name: o,
				form: c,
				value: u,
				internal_do_not_use_render: ({ isFormControl: e }) =>
					(0, t.jsxs)(t.Fragment, {
						children: [
							(0, t.jsx)(y, { ...f, ref: r, __scopeCheckbox: n }),
							e && (0, t.jsx)(C, { __scopeCheckbox: n }),
						],
					}),
			})
		})
		b.displayName = c
		var w = "CheckboxIndicator",
			x = r.forwardRef((e, r) => {
				let { __scopeCheckbox: n, forceMount: o, ...a } = e,
					i = h(w, n)
				return (0, t.jsx)(u.Presence, {
					present: o || k(i.checked) || !0 === i.checked,
					children: (0, t.jsx)(d.Primitive.span, {
						"data-state": R(i.checked),
						"data-disabled": i.disabled ? "" : void 0,
						...a,
						ref: r,
						style: { pointerEvents: "none", ...e.style },
					}),
				})
			})
		x.displayName = w
		var E = "CheckboxBubbleInput",
			C = r.forwardRef(({ __scopeCheckbox: e, ...o }, a) => {
				let {
						control: i,
						hasConsumerStoppedPropagationRef: u,
						checked: c,
						defaultChecked: f,
						required: p,
						disabled: m,
						name: v,
						value: g,
						form: y,
						bubbleInput: b,
						setBubbleInput: w,
					} = h(E, e),
					x = (0, n.useComposedRefs)(a, w),
					C = (0, l.usePrevious)(c),
					R = (0, s.useSize)(i)
				r.useEffect(() => {
					if (!b) return
					let e = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set,
						t = !u.current
					if (C !== c && e) {
						let r = new Event("click", { bubbles: t })
						;(b.indeterminate = k(c)), e.call(b, !k(c) && c), b.dispatchEvent(r)
					}
				}, [b, C, c, u])
				let S = r.useRef(!k(c) && c)
				return (0, t.jsx)(d.Primitive.input, {
					type: "checkbox",
					"aria-hidden": !0,
					defaultChecked: f ?? S.current,
					required: p,
					disabled: m,
					name: v,
					value: g,
					form: y,
					...o,
					tabIndex: -1,
					ref: x,
					style: {
						...o.style,
						...R,
						position: "absolute",
						pointerEvents: "none",
						opacity: 0,
						margin: 0,
						transform: "translateX(-100%)",
					},
				})
			})
		function k(e) {
			return "indeterminate" === e
		}
		function R(e) {
			return k(e) ? "indeterminate" : e ? "checked" : "unchecked"
		}
		C.displayName = E
		var S = e.i(82715),
			j = e.i(46030)
		function P({ className: e, ...r }) {
			return (0, t.jsx)(b, {
				"data-slot": "checkbox",
				className: (0, j.cn)(
					"peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
					e,
				),
				...r,
				children: (0, t.jsx)(x, {
					"data-slot": "checkbox-indicator",
					className: "grid place-content-center text-current transition-none",
					children: (0, t.jsx)(S.CheckIcon, { className: "size-3.5" }),
				}),
			})
		}
		e.s(["Checkbox", () => P], 60251)
	},
	12594,
	(e) => {
		"use strict"
		var t = /[\\\/_+.#"@\[\(\{&]/,
			r = /[\\\/_+.#"@\[\(\{&]/g,
			n = /[\s-]/,
			o = /[\s-]/g
		function a(e) {
			return e.toLowerCase().replace(o, " ")
		}
		var i = e.i(6708),
			l = e.i(10008),
			s = e.i(66791),
			u = e.i(55162),
			d = e.i(26613),
			c = '[cmdk-group=""]',
			f = '[cmdk-group-items=""]',
			p = '[cmdk-item=""]',
			m = `${p}:not([aria-disabled="true"])`,
			h = "cmdk-item-select",
			v = "data-value",
			g = (e, i, l) => {
				var s
				return (
					(s = e),
					(function e(a, i, l, s, u, d, c) {
						if (d === i.length) return u === a.length ? 1 : 0.99
						var f = `${u},${d}`
						if (void 0 !== c[f]) return c[f]
						for (var p, m, h, v, g = s.charAt(d), y = l.indexOf(g, u), b = 0; y >= 0; )
							(p = e(a, i, l, s, y + 1, d + 1, c)) > b &&
								(y === u
									? (p *= 1)
									: t.test(a.charAt(y - 1))
										? ((p *= 0.8),
											(h = a.slice(u, y - 1).match(r)) &&
												u > 0 &&
												(p *= Math.pow(0.999, h.length)))
										: n.test(a.charAt(y - 1))
											? ((p *= 0.9),
												(v = a.slice(u, y - 1).match(o)) &&
													u > 0 &&
													(p *= Math.pow(0.999, v.length)))
											: ((p *= 0.17), u > 0 && (p *= Math.pow(0.999, y - u))),
								a.charAt(y) !== i.charAt(d) && (p *= 0.9999)),
								((p < 0.1 && l.charAt(y - 1) === s.charAt(d + 1)) ||
									(s.charAt(d + 1) === s.charAt(d) && l.charAt(y - 1) !== s.charAt(d))) &&
									0.1 * (m = e(a, i, l, s, y + 1, d + 2, c)) > p &&
									(p = 0.1 * m),
								p > b && (b = p),
								(y = l.indexOf(g, y + 1))
						return (c[f] = b), b
					})((s = l && l.length > 0 ? `${s + " " + l.join(" ")}` : s), i, a(s), a(i), 0, 0, {})
				)
			},
			y = l.createContext(void 0),
			b = l.createContext(void 0),
			w = l.createContext(void 0),
			x = l.forwardRef((e, t) => {
				let r = A(() => {
						var t, r
						return {
							search: "",
							value: null != (r = null != (t = e.value) ? t : e.defaultValue) ? r : "",
							selectedItemId: void 0,
							filtered: { count: 0, items: new Map(), groups: new Set() },
						}
					}),
					n = A(() => new Set()),
					o = A(() => new Map()),
					a = A(() => new Map()),
					i = A(() => new Set()),
					d = D(e),
					{
						label: w,
						children: x,
						value: E,
						onValueChange: C,
						filter: k,
						shouldFilter: R,
						loop: S,
						disablePointerSelection: j = !1,
						vimBindings: P = !0,
						...N
					} = e,
					M = (0, u.useId)(),
					I = (0, u.useId)(),
					F = (0, u.useId)(),
					z = l.useRef(null),
					H = _()
				T(() => {
					if (void 0 !== E) {
						let e = E.trim()
						;(r.current.value = e), V.emit()
					}
				}, [E]),
					T(() => {
						H(6, Y)
					}, [])
				let V = l.useMemo(
						() => ({
							subscribe: (e) => (i.current.add(e), () => i.current.delete(e)),
							snapshot: () => r.current,
							setState: (e, t, n) => {
								var o, a, i, l
								if (!Object.is(r.current[e], t)) {
									if (((r.current[e] = t), "search" === e)) K(), W(), H(1, U)
									else if ("value" === e) {
										if (
											document.activeElement.hasAttribute("cmdk-input") ||
											document.activeElement.hasAttribute("cmdk-root")
										) {
											let e = document.getElementById(F)
											e ? e.focus() : null == (o = document.getElementById(M)) || o.focus()
										}
										if (
											(H(7, () => {
												var e
												;(r.current.selectedItemId = null == (e = q()) ? void 0 : e.id),
													V.emit()
											}),
											n || H(5, Y),
											(null == (a = d.current) ? void 0 : a.value) !== void 0)
										) {
											null == (l = (i = d.current).onValueChange) || l.call(i, null != t ? t : "")
											return
										}
									}
									V.emit()
								}
							},
							emit: () => {
								i.current.forEach((e) => e())
							},
						}),
						[],
					),
					$ = l.useMemo(
						() => ({
							value: (e, t, n) => {
								var o
								t !== (null == (o = a.current.get(e)) ? void 0 : o.value) &&
									(a.current.set(e, { value: t, keywords: n }),
									r.current.filtered.items.set(e, B(t, n)),
									H(2, () => {
										W(), V.emit()
									}))
							},
							item: (e, t) => (
								n.current.add(e),
								t && (o.current.has(t) ? o.current.get(t).add(e) : o.current.set(t, new Set([e]))),
								H(3, () => {
									K(), W(), r.current.value || U(), V.emit()
								}),
								() => {
									a.current.delete(e), n.current.delete(e), r.current.filtered.items.delete(e)
									let t = q()
									H(4, () => {
										K(), (null == t ? void 0 : t.getAttribute("id")) === e && U(), V.emit()
									})
								}
							),
							group: (e) => (
								o.current.has(e) || o.current.set(e, new Set()),
								() => {
									a.current.delete(e), o.current.delete(e)
								}
							),
							filter: () => d.current.shouldFilter,
							label: w || e["aria-label"],
							getDisablePointerSelection: () => d.current.disablePointerSelection,
							listId: M,
							inputId: F,
							labelId: I,
							listInnerRef: z,
						}),
						[],
					)
				function B(e, t) {
					var n, o
					let a = null != (o = null == (n = d.current) ? void 0 : n.filter) ? o : g
					return e ? a(e, r.current.search, t) : 0
				}
				function W() {
					if (!r.current.search || !1 === d.current.shouldFilter) return
					let e = r.current.filtered.items,
						t = []
					r.current.filtered.groups.forEach((r) => {
						let n = o.current.get(r),
							a = 0
						n.forEach((t) => {
							a = Math.max(e.get(t), a)
						}),
							t.push([r, a])
					})
					let n = z.current
					X()
						.sort((t, r) => {
							var n, o
							let a = t.getAttribute("id"),
								i = r.getAttribute("id")
							return (null != (n = e.get(i)) ? n : 0) - (null != (o = e.get(a)) ? o : 0)
						})
						.forEach((e) => {
							let t = e.closest(f)
							t
								? t.appendChild(e.parentElement === t ? e : e.closest(`${f} > *`))
								: n.appendChild(e.parentElement === n ? e : e.closest(`${f} > *`))
						}),
						t
							.sort((e, t) => t[1] - e[1])
							.forEach((e) => {
								var t
								let r =
									null == (t = z.current)
										? void 0
										: t.querySelector(`${c}[${v}="${encodeURIComponent(e[0])}"]`)
								null == r || r.parentElement.appendChild(r)
							})
				}
				function U() {
					let e = X().find((e) => "true" !== e.getAttribute("aria-disabled")),
						t = null == e ? void 0 : e.getAttribute(v)
					V.setState("value", t || void 0)
				}
				function K() {
					var e, t, i, l
					if (!r.current.search || !1 === d.current.shouldFilter) {
						r.current.filtered.count = n.current.size
						return
					}
					r.current.filtered.groups = new Set()
					let s = 0
					for (let o of n.current) {
						let n = B(
							null != (t = null == (e = a.current.get(o)) ? void 0 : e.value) ? t : "",
							null != (l = null == (i = a.current.get(o)) ? void 0 : i.keywords) ? l : [],
						)
						r.current.filtered.items.set(o, n), n > 0 && s++
					}
					for (let [e, t] of o.current)
						for (let n of t)
							if (r.current.filtered.items.get(n) > 0) {
								r.current.filtered.groups.add(e)
								break
							}
					r.current.filtered.count = s
				}
				function Y() {
					var e, t, r
					let n = q()
					n &&
						((null == (e = n.parentElement) ? void 0 : e.firstChild) === n &&
							(null ==
								(r =
									null == (t = n.closest(c)) ? void 0 : t.querySelector('[cmdk-group-heading=""]')) ||
								r.scrollIntoView({ block: "nearest" })),
						n.scrollIntoView({ block: "nearest" }))
				}
				function q() {
					var e
					return null == (e = z.current) ? void 0 : e.querySelector(`${p}[aria-selected="true"]`)
				}
				function X() {
					var e
					return Array.from((null == (e = z.current) ? void 0 : e.querySelectorAll(m)) || [])
				}
				function G(e) {
					let t = X()[e]
					t && V.setState("value", t.getAttribute(v))
				}
				function Z(e) {
					var t
					let r = q(),
						n = X(),
						o = n.findIndex((e) => e === r),
						a = n[o + e]
					null != (t = d.current) &&
						t.loop &&
						(a = o + e < 0 ? n[n.length - 1] : o + e === n.length ? n[0] : n[o + e]),
						a && V.setState("value", a.getAttribute(v))
				}
				function Q(e) {
					let t = q(),
						r = null == t ? void 0 : t.closest(c),
						n
					for (; r && !n; )
						n =
							null ==
							(r =
								e > 0
									? (function (e, t) {
											let r = e.nextElementSibling
											for (; r; ) {
												if (r.matches(t)) return r
												r = r.nextElementSibling
											}
										})(r, c)
									: (function (e, t) {
											let r = e.previousElementSibling
											for (; r; ) {
												if (r.matches(t)) return r
												r = r.previousElementSibling
											}
										})(r, c))
								? void 0
								: r.querySelector(m)
					n ? V.setState("value", n.getAttribute(v)) : Z(e)
				}
				let J = () => G(X().length - 1),
					ee = (e) => {
						e.preventDefault(), e.metaKey ? J() : e.altKey ? Q(1) : Z(1)
					},
					et = (e) => {
						e.preventDefault(), e.metaKey ? G(0) : e.altKey ? Q(-1) : Z(-1)
					}
				return l.createElement(
					s.Primitive.div,
					{
						ref: t,
						tabIndex: -1,
						...N,
						"cmdk-root": "",
						onKeyDown: (e) => {
							var t
							null == (t = N.onKeyDown) || t.call(N, e)
							let r = e.nativeEvent.isComposing || 229 === e.keyCode
							if (!(e.defaultPrevented || r))
								switch (e.key) {
									case "n":
									case "j":
										P && e.ctrlKey && ee(e)
										break
									case "ArrowDown":
										ee(e)
										break
									case "p":
									case "k":
										P && e.ctrlKey && et(e)
										break
									case "ArrowUp":
										et(e)
										break
									case "Home":
										e.preventDefault(), G(0)
										break
									case "End":
										e.preventDefault(), J()
										break
									case "Enter": {
										e.preventDefault()
										let t = q()
										if (t) {
											let e = new Event(h)
											t.dispatchEvent(e)
										}
									}
								}
						},
					},
					l.createElement("label", { "cmdk-label": "", htmlFor: $.inputId, id: $.labelId, style: L }, w),
					O(e, (e) =>
						l.createElement(b.Provider, { value: V }, l.createElement(y.Provider, { value: $ }, e)),
					),
				)
			}),
			E = l.forwardRef((e, t) => {
				var r, n
				let o = (0, u.useId)(),
					a = l.useRef(null),
					i = l.useContext(w),
					c = l.useContext(y),
					f = D(e),
					p =
						null != (n = null == (r = f.current) ? void 0 : r.forceMount)
							? n
							: null == i
								? void 0
								: i.forceMount
				T(() => {
					if (!p) return c.item(o, null == i ? void 0 : i.id)
				}, [p])
				let m = M(o, a, [e.value, e.children, a], e.keywords),
					v = l.useContext(b),
					g = N((e) => e.value && e.value === m.current),
					x = N((e) => !!p || !1 === c.filter() || !e.search || e.filtered.items.get(o) > 0)
				function E() {
					var e, t
					C(), null == (t = (e = f.current).onSelect) || t.call(e, m.current)
				}
				function C() {
					v.setState("value", m.current, !0)
				}
				if (
					(l.useEffect(() => {
						let t = a.current
						if (!(!t || e.disabled)) return t.addEventListener(h, E), () => t.removeEventListener(h, E)
					}, [x, e.onSelect, e.disabled]),
					!x)
				)
					return null
				let { disabled: k, value: R, onSelect: S, forceMount: j, keywords: P, ...A } = e
				return l.createElement(
					s.Primitive.div,
					{
						ref: (0, d.composeRefs)(a, t),
						...A,
						id: o,
						"cmdk-item": "",
						role: "option",
						"aria-disabled": !!k,
						"aria-selected": !!g,
						"data-disabled": !!k,
						"data-selected": !!g,
						onPointerMove: k || c.getDisablePointerSelection() ? void 0 : C,
						onClick: k ? void 0 : E,
					},
					e.children,
				)
			}),
			C = l.forwardRef((e, t) => {
				let { heading: r, children: n, forceMount: o, ...a } = e,
					i = (0, u.useId)(),
					c = l.useRef(null),
					f = l.useRef(null),
					p = (0, u.useId)(),
					m = l.useContext(y),
					h = N((e) => !!o || !1 === m.filter() || !e.search || e.filtered.groups.has(i))
				T(() => m.group(i), []), M(i, c, [e.value, e.heading, f])
				let v = l.useMemo(() => ({ id: i, forceMount: o }), [o])
				return l.createElement(
					s.Primitive.div,
					{
						ref: (0, d.composeRefs)(c, t),
						...a,
						"cmdk-group": "",
						role: "presentation",
						hidden: !h || void 0,
					},
					r && l.createElement("div", { ref: f, "cmdk-group-heading": "", "aria-hidden": !0, id: p }, r),
					O(e, (e) =>
						l.createElement(
							"div",
							{ "cmdk-group-items": "", role: "group", "aria-labelledby": r ? p : void 0 },
							l.createElement(w.Provider, { value: v }, e),
						),
					),
				)
			}),
			k = l.forwardRef((e, t) => {
				let { alwaysRender: r, ...n } = e,
					o = l.useRef(null),
					a = N((e) => !e.search)
				return r || a
					? l.createElement(s.Primitive.div, {
							ref: (0, d.composeRefs)(o, t),
							...n,
							"cmdk-separator": "",
							role: "separator",
						})
					: null
			}),
			R = l.forwardRef((e, t) => {
				let { onValueChange: r, ...n } = e,
					o = null != e.value,
					a = l.useContext(b),
					i = N((e) => e.search),
					u = N((e) => e.selectedItemId),
					d = l.useContext(y)
				return (
					l.useEffect(() => {
						null != e.value && a.setState("search", e.value)
					}, [e.value]),
					l.createElement(s.Primitive.input, {
						ref: t,
						...n,
						"cmdk-input": "",
						autoComplete: "off",
						autoCorrect: "off",
						spellCheck: !1,
						"aria-autocomplete": "list",
						role: "combobox",
						"aria-expanded": !0,
						"aria-controls": d.listId,
						"aria-labelledby": d.labelId,
						"aria-activedescendant": u,
						id: d.inputId,
						type: "text",
						value: o ? e.value : i,
						onChange: (e) => {
							o || a.setState("search", e.target.value), null == r || r(e.target.value)
						},
					})
				)
			}),
			S = l.forwardRef((e, t) => {
				let { children: r, label: n = "Suggestions", ...o } = e,
					a = l.useRef(null),
					i = l.useRef(null),
					u = N((e) => e.selectedItemId),
					c = l.useContext(y)
				return (
					l.useEffect(() => {
						if (i.current && a.current) {
							let e = i.current,
								t = a.current,
								r,
								n = new ResizeObserver(() => {
									r = requestAnimationFrame(() => {
										let r = e.offsetHeight
										t.style.setProperty("--cmdk-list-height", r.toFixed(1) + "px")
									})
								})
							return (
								n.observe(e),
								() => {
									cancelAnimationFrame(r), n.unobserve(e)
								}
							)
						}
					}, []),
					l.createElement(
						s.Primitive.div,
						{
							ref: (0, d.composeRefs)(a, t),
							...o,
							"cmdk-list": "",
							role: "listbox",
							tabIndex: -1,
							"aria-activedescendant": u,
							"aria-label": n,
							id: c.listId,
						},
						O(e, (e) =>
							l.createElement(
								"div",
								{ ref: (0, d.composeRefs)(i, c.listInnerRef), "cmdk-list-sizer": "" },
								e,
							),
						),
					)
				)
			}),
			j = l.forwardRef((e, t) => {
				let { open: r, onOpenChange: n, overlayClassName: o, contentClassName: a, container: s, ...u } = e
				return l.createElement(
					i.Root,
					{ open: r, onOpenChange: n },
					l.createElement(
						i.Portal,
						{ container: s },
						l.createElement(i.Overlay, { "cmdk-overlay": "", className: o }),
						l.createElement(
							i.Content,
							{ "aria-label": e.label, "cmdk-dialog": "", className: a },
							l.createElement(x, { ref: t, ...u }),
						),
					),
				)
			}),
			P = Object.assign(x, {
				List: S,
				Item: E,
				Input: R,
				Group: C,
				Separator: k,
				Dialog: j,
				Empty: l.forwardRef((e, t) =>
					N((e) => 0 === e.filtered.count)
						? l.createElement(s.Primitive.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" })
						: null,
				),
				Loading: l.forwardRef((e, t) => {
					let { progress: r, children: n, label: o = "Loading...", ...a } = e
					return l.createElement(
						s.Primitive.div,
						{
							ref: t,
							...a,
							"cmdk-loading": "",
							role: "progressbar",
							"aria-valuenow": r,
							"aria-valuemin": 0,
							"aria-valuemax": 100,
							"aria-label": o,
						},
						O(e, (e) => l.createElement("div", { "aria-hidden": !0 }, e)),
					)
				}),
			})
		function D(e) {
			let t = l.useRef(e)
			return (
				T(() => {
					t.current = e
				}),
				t
			)
		}
		var T = "u" < typeof window ? l.useEffect : l.useLayoutEffect
		function A(e) {
			let t = l.useRef()
			return void 0 === t.current && (t.current = e()), t
		}
		function N(e) {
			let t = l.useContext(b),
				r = () => e(t.snapshot())
			return l.useSyncExternalStore(t.subscribe, r, r)
		}
		function M(e, t, r, n = []) {
			let o = l.useRef(),
				a = l.useContext(y)
			return (
				T(() => {
					var i
					let l = (() => {
							var e
							for (let t of r) {
								if ("string" == typeof t) return t.trim()
								if ("object" == typeof t && "current" in t)
									return t.current
										? null == (e = t.current.textContent)
											? void 0
											: e.trim()
										: o.current
							}
						})(),
						s = n.map((e) => e.trim())
					a.value(e, l, s), null == (i = t.current) || i.setAttribute(v, l), (o.current = l)
				}),
				o
			)
		}
		var _ = () => {
			let [e, t] = l.useState(),
				r = A(() => new Map())
			return (
				T(() => {
					r.current.forEach((e) => e()), (r.current = new Map())
				}, [e]),
				(e, n) => {
					r.current.set(e, n), t({})
				}
			)
		}
		function O({ asChild: e, children: t }, r) {
			let n
			return e && l.isValidElement(t)
				? l.cloneElement(
						"function" == typeof (n = t.type) ? n(t.props) : "render" in n ? n.render(t.props) : t,
						{ ref: t.ref },
						r(t.props.children),
					)
				: r(t)
		}
		var L = {
			position: "absolute",
			width: "1px",
			height: "1px",
			padding: "0",
			margin: "-1px",
			overflow: "hidden",
			clip: "rect(0, 0, 0, 0)",
			whiteSpace: "nowrap",
			borderWidth: "0",
		}
		e.s(["Command", () => P], 12594)
	},
	63704,
	(e) => {
		"use strict"
		let t = (0, e.i(13699).default)("search", [
			["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
			["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
		])
		e.s(["default", () => t])
	},
	72583,
	6609,
	(e) => {
		"use strict"
		var t = e.i(8026),
			r = e.i(6708)
		let n = (0, e.i(13699).default)("x", [
			["path", { d: "M18 6 6 18", key: "1bl5f8" }],
			["path", { d: "m6 6 12 12", key: "d8bk6v" }],
		])
		e.s(["default", () => n], 6609)
		var o = e.i(46030)
		function a({ ...e }) {
			return (0, t.jsx)(r.Root, { "data-slot": "dialog", ...e })
		}
		function i({ ...e }) {
			return (0, t.jsx)(r.Trigger, { "data-slot": "dialog-trigger", ...e })
		}
		function l({ ...e }) {
			return (0, t.jsx)(r.Portal, { "data-slot": "dialog-portal", ...e })
		}
		function s({ ...e }) {
			return (0, t.jsx)(r.Close, { "data-slot": "dialog-close", ...e })
		}
		function u({ className: e, ...n }) {
			return (0, t.jsx)(r.Overlay, {
				"data-slot": "dialog-overlay",
				className: (0, o.cn)(
					"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
					e,
				),
				...n,
			})
		}
		function d({ className: e, children: a, ...i }) {
			return (0, t.jsxs)(l, {
				"data-slot": "dialog-portal",
				children: [
					(0, t.jsx)(u, {}),
					(0, t.jsxs)(r.Content, {
						"data-slot": "dialog-content",
						className: (0, o.cn)(
							"bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
							e,
						),
						...i,
						children: [
							a,
							(0, t.jsxs)(r.Close, {
								className:
									"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
								children: [
									(0, t.jsx)(n, {}),
									(0, t.jsx)("span", { className: "sr-only", children: "Close" }),
								],
							}),
						],
					}),
				],
			})
		}
		function c({ className: e, ...r }) {
			return (0, t.jsx)("div", {
				"data-slot": "dialog-header",
				className: (0, o.cn)("flex flex-col gap-2 text-center sm:text-left", e),
				...r,
			})
		}
		function f({ className: e, ...r }) {
			return (0, t.jsx)("div", {
				"data-slot": "dialog-footer",
				className: (0, o.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
				...r,
			})
		}
		function p({ className: e, ...n }) {
			return (0, t.jsx)(r.Title, {
				"data-slot": "dialog-title",
				className: (0, o.cn)("text-lg leading-none font-semibold", e),
				...n,
			})
		}
		function m({ className: e, ...n }) {
			return (0, t.jsx)(r.Description, {
				"data-slot": "dialog-description",
				className: (0, o.cn)("text-muted-foreground text-sm", e),
				...n,
			})
		}
		e.s(
			[
				"Dialog",
				() => a,
				"DialogClose",
				() => s,
				"DialogContent",
				() => d,
				"DialogDescription",
				() => m,
				"DialogFooter",
				() => f,
				"DialogHeader",
				() => c,
				"DialogOverlay",
				() => u,
				"DialogPortal",
				() => l,
				"DialogTitle",
				() => p,
				"DialogTrigger",
				() => i,
			],
			72583,
		)
	},
	62785,
	(e) => {
		"use strict"
		var t = e.i(8026),
			r = e.i(12594),
			n = e.i(63704),
			n = n,
			o = e.i(46030),
			a = e.i(72583)
		function i({ className: e, ...n }) {
			return (0, t.jsx)(r.Command, {
				"data-slot": "command",
				className: (0, o.cn)(
					"bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-sm",
					e,
				),
				...n,
			})
		}
		function l({
			title: e = "Command Palette",
			description: r = "Search for a command to run...",
			children: n,
			...o
		}) {
			return (0, t.jsxs)(a.Dialog, {
				...o,
				children: [
					(0, t.jsxs)(a.DialogHeader, {
						className: "sr-only",
						children: [
							(0, t.jsx)(a.DialogTitle, { children: e }),
							(0, t.jsx)(a.DialogDescription, { children: r }),
						],
					}),
					(0, t.jsx)(a.DialogContent, {
						className: "overflow-hidden p-0",
						children: (0, t.jsx)(i, {
							className:
								"[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
							children: n,
						}),
					}),
				],
			})
		}
		function s({ className: e, ...a }) {
			return (0, t.jsxs)("div", {
				"data-slot": "command-input-wrapper",
				className: "flex h-9 items-center gap-2 border-b px-3",
				children: [
					(0, t.jsx)(n.default, { className: "size-4 shrink-0 opacity-50" }),
					(0, t.jsx)(r.Command.Input, {
						"data-slot": "command-input",
						className: (0, o.cn)(
							"placeholder:text-muted-foreground flex h-10 w-full rounded-sm bg-transparent py-3 outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
							e,
						),
						...a,
					}),
				],
			})
		}
		function u({ className: e, ...n }) {
			return (0, t.jsx)(r.Command.List, {
				"data-slot": "command-list",
				className: (0, o.cn)("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
				...n,
			})
		}
		function d({ ...e }) {
			return (0, t.jsx)(r.Command.Empty, { "data-slot": "command-empty", className: "py-6 text-center", ...e })
		}
		function c({ className: e, ...n }) {
			return (0, t.jsx)(r.Command.Group, {
				"data-slot": "command-group",
				className: (0, o.cn)(
					"text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
					e,
				),
				...n,
			})
		}
		function f({ className: e, ...n }) {
			return (0, t.jsx)(r.Command.Separator, {
				"data-slot": "command-separator",
				className: (0, o.cn)("bg-accent/5 -mx-1 h-px", e),
				...n,
			})
		}
		function p({ className: e, ...n }) {
			return (0, t.jsx)(r.Command.Item, {
				"data-slot": "command-item",
				className: (0, o.cn)(
					"data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-xs px-2 py-1.5 outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
					"text-foreground active:opacity-80 cursor-pointer group",
					e,
				),
				...n,
			})
		}
		function m({ className: e, ...r }) {
			return (0, t.jsx)("span", {
				"data-slot": "command-shortcut",
				className: (0, o.cn)("text-muted-foreground ml-auto text-xs tracking-widest", e),
				...r,
			})
		}
		e.s(
			[
				"Command",
				() => i,
				"CommandDialog",
				() => l,
				"CommandEmpty",
				() => d,
				"CommandGroup",
				() => c,
				"CommandInput",
				() => s,
				"CommandItem",
				() => p,
				"CommandList",
				() => u,
				"CommandSeparator",
				() => f,
				"CommandShortcut",
				() => m,
			],
			62785,
		)
	},
	52661,
	(e) => {
		"use strict"
		let t
		var r = e.i(8026),
			n = e.i(6708),
			o = e.i(10008)
		let a = o.default.createContext({
				drawerRef: { current: null },
				overlayRef: { current: null },
				onPress: () => {},
				onRelease: () => {},
				onDrag: () => {},
				onNestedDrag: () => {},
				onNestedOpenChange: () => {},
				onNestedRelease: () => {},
				openProp: void 0,
				dismissible: !1,
				isOpen: !1,
				isDragging: !1,
				keyboardIsOpen: { current: !1 },
				snapPointsOffset: null,
				snapPoints: null,
				handleOnly: !1,
				modal: !1,
				shouldFade: !1,
				activeSnapPoint: null,
				onOpenChange: () => {},
				setActiveSnapPoint: () => {},
				closeDrawer: () => {},
				direction: "bottom",
				shouldAnimate: { current: !0 },
				shouldScaleBackground: !1,
				setBackgroundColorOnScale: !0,
				noBodyStyles: !1,
				container: null,
				autoFocus: !1,
			}),
			i = () => {
				let e = o.default.useContext(a)
				if (!e) throw Error("useDrawerContext must be used within a Drawer.Root")
				return e
			}
		function l() {
			return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
		}
		function s() {
			return u(/^iPhone/) || u(/^iPad/) || (u(/^Mac/) && navigator.maxTouchPoints > 1)
		}
		function u(e) {
			return "u" > typeof window && null != window.navigator ? e.test(window.navigator.platform) : void 0
		}
		!(function (e) {
			if (!e || "u" < typeof document) return
			let t = document.head || document.getElementsByTagName("head")[0],
				r = document.createElement("style")
			;(r.type = "text/css"),
				t.appendChild(r),
				r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e))
		})(
			"[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(\n[data-state=closed]\n){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}",
		)
		let d = "u" > typeof window ? o.useLayoutEffect : o.useEffect
		function c(...e) {
			return (...t) => {
				for (let r of e) "function" == typeof r && r(...t)
			}
		}
		let f = "u" > typeof document && window.visualViewport
		function p(e) {
			let t = window.getComputedStyle(e)
			return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY)
		}
		function m(e) {
			for (p(e) && (e = e.parentElement); e && !p(e); ) e = e.parentElement
			return e || document.scrollingElement || document.documentElement
		}
		let h = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
			v = 0
		function g(e, t, r, n) {
			return (
				e.addEventListener(t, r, n),
				() => {
					e.removeEventListener(t, r, n)
				}
			)
		}
		function y(e) {
			let t = document.scrollingElement || document.documentElement
			for (; e && e !== t; ) {
				let t = m(e)
				if (t !== document.documentElement && t !== document.body && t !== e) {
					let r = t.getBoundingClientRect().top,
						n = e.getBoundingClientRect().top
					e.getBoundingClientRect().bottom > t.getBoundingClientRect().bottom + 24 && (t.scrollTop += n - r)
				}
				e = t.parentElement
			}
		}
		function b(e) {
			return (
				(e instanceof HTMLInputElement && !h.has(e.type)) ||
				e instanceof HTMLTextAreaElement ||
				(e instanceof HTMLElement && e.isContentEditable)
			)
		}
		function w(...e) {
			return o.useCallback(
				(function (...e) {
					return (t) =>
						e.forEach((e) => {
							"function" == typeof e ? e(t) : null != e && (e.current = t)
						})
				})(...e),
				e,
			)
		}
		let x = new WeakMap()
		function E(e, t, r = !1) {
			if (!e || !(e instanceof HTMLElement)) return
			let n = {}
			Object.entries(t).forEach(([t, r]) => {
				t.startsWith("--") ? e.style.setProperty(t, r) : ((n[t] = e.style[t]), (e.style[t] = r))
			}),
				r || x.set(e, n)
		}
		let C = (e) => {
			switch (e) {
				case "top":
				case "bottom":
					return !0
				case "left":
				case "right":
					return !1
				default:
					return e
			}
		}
		function k(e, t) {
			if (!e) return null
			let r = window.getComputedStyle(e),
				n = r.transform || r.webkitTransform || r.mozTransform,
				o = n.match(/^matrix3d\((.+)\)$/)
			return o
				? parseFloat(o[1].split(", ")[C(t) ? 13 : 12])
				: (o = n.match(/^matrix\((.+)\)$/))
					? parseFloat(o[1].split(", ")[C(t) ? 5 : 4])
					: null
		}
		function R(e, t) {
			if (!e) return () => {}
			let r = e.style.cssText
			return (
				Object.assign(e.style, t),
				() => {
					e.style.cssText = r
				}
			)
		}
		let S = [0.32, 0.72, 0, 1],
			j = "vaul-dragging"
		function P(e) {
			let t = o.default.useRef(e)
			return (
				o.default.useEffect(() => {
					t.current = e
				}),
				o.default.useMemo(
					() =>
						(...e) =>
							null == t.current ? void 0 : t.current.call(t, ...e),
					[],
				)
			)
		}
		function D({ prop: e, defaultProp: t, onChange: r = () => {} }) {
			let [n, a] = (function ({ defaultProp: e, onChange: t }) {
					let r = o.default.useState(e),
						[n] = r,
						a = o.default.useRef(n),
						i = P(t)
					return (
						o.default.useEffect(() => {
							a.current !== n && (i(n), (a.current = n))
						}, [n, a, i]),
						r
					)
				})({ defaultProp: t, onChange: r }),
				i = void 0 !== e,
				l = i ? e : n,
				s = P(r)
			return [
				l,
				o.default.useCallback(
					(t) => {
						if (i) {
							let r = "function" == typeof t ? t(e) : t
							r !== e && s(r)
						} else a(t)
					},
					[i, e, a, s],
				),
			]
		}
		let T = () => () => {},
			A = null
		function N({
			open: e,
			onOpenChange: r,
			children: i,
			onDrag: u,
			onRelease: p,
			snapPoints: h,
			shouldScaleBackground: w = !1,
			setBackgroundColorOnScale: R = !0,
			closeThreshold: P = 0.25,
			scrollLockTimeout: T = 100,
			dismissible: N = !0,
			handleOnly: M = !1,
			fadeFromIndex: _ = h && h.length - 1,
			activeSnapPoint: O,
			setActiveSnapPoint: L,
			fixed: I,
			modal: F = !0,
			onClose: z,
			nested: H,
			noBodyStyles: V = !1,
			direction: $ = "bottom",
			defaultOpen: B = !1,
			disablePreventScroll: W = !0,
			snapToSequentialPoint: U = !1,
			preventScrollRestoration: K = !1,
			repositionInputs: Y = !0,
			onAnimationEnd: q,
			container: X,
			autoFocus: G = !1,
		}) {
			var Z, Q
			let [J = !1, ee] = D({
					defaultProp: B,
					prop: e,
					onChange: (e) => {
						null == r || r(e),
							e || H || eA(),
							setTimeout(() => {
								null == q || q(e)
							}, 500),
							e &&
								!F &&
								"u" > typeof window &&
								window.requestAnimationFrame(() => {
									document.body.style.pointerEvents = "auto"
								}),
							e || (document.body.style.pointerEvents = "auto")
					},
				}),
				[et, er] = o.default.useState(!1),
				[en, eo] = o.default.useState(!1),
				[ea, ei] = o.default.useState(!1),
				el = o.default.useRef(null),
				es = o.default.useRef(null),
				eu = o.default.useRef(null),
				ed = o.default.useRef(null),
				ec = o.default.useRef(null),
				ef = o.default.useRef(!1),
				ep = o.default.useRef(null),
				em = o.default.useRef(0),
				eh = o.default.useRef(!1),
				ev = o.default.useRef(!B),
				eg = o.default.useRef(0),
				ey = o.default.useRef(null),
				eb = o.default.useRef((null == (Z = ey.current) ? void 0 : Z.getBoundingClientRect().height) || 0),
				ew = o.default.useRef((null == (Q = ey.current) ? void 0 : Q.getBoundingClientRect().width) || 0),
				ex = o.default.useRef(0),
				eE = o.default.useCallback((e) => {
					h && e === ej.length - 1 && (es.current = new Date())
				}, []),
				{
					activeSnapPoint: eC,
					activeSnapPointIndex: ek,
					setActiveSnapPoint: eR,
					onRelease: eS,
					snapPointsOffset: ej,
					onDrag: eP,
					shouldFade: eD,
					getPercentageDragged: eT,
				} = (function ({
					activeSnapPointProp: e,
					setActiveSnapPointProp: t,
					snapPoints: r,
					drawerRef: n,
					overlayRef: a,
					fadeFromIndex: i,
					onSnapPointChange: l,
					direction: s = "bottom",
					container: u,
					snapToSequentialPoint: d,
				}) {
					let [c, f] = D({ prop: e, defaultProp: null == r ? void 0 : r[0], onChange: t }),
						[p, m] = o.default.useState(
							"u" > typeof window
								? { innerWidth: window.innerWidth, innerHeight: window.innerHeight }
								: void 0,
						)
					o.default.useEffect(() => {
						function e() {
							m({ innerWidth: window.innerWidth, innerHeight: window.innerHeight })
						}
						return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
					}, [])
					let h = o.default.useMemo(() => c === (null == r ? void 0 : r[r.length - 1]) || null, [r, c]),
						v = o.default.useMemo(() => {
							var e
							return null != (e = null == r ? void 0 : r.findIndex((e) => e === c)) ? e : null
						}, [r, c]),
						g = (r && r.length > 0 && (i || 0 === i) && !Number.isNaN(i) && r[i] === c) || !r,
						y = o.default.useMemo(() => {
							var e
							let t = u
								? { width: u.getBoundingClientRect().width, height: u.getBoundingClientRect().height }
								: "u" > typeof window
									? { width: window.innerWidth, height: window.innerHeight }
									: { width: 0, height: 0 }
							return null !=
								(e =
									null == r
										? void 0
										: r.map((e) => {
												let r = "string" == typeof e,
													n = 0
												if ((r && (n = parseInt(e, 10)), C(s))) {
													let o = r ? n : p ? e * t.height : 0
													return p ? ("bottom" === s ? t.height - o : -t.height + o) : o
												}
												let o = r ? n : p ? e * t.width : 0
												return p ? ("right" === s ? t.width - o : -t.width + o) : o
											}))
								? e
								: []
						}, [r, p, u]),
						b = o.default.useMemo(() => (null !== v ? (null == y ? void 0 : y[v]) : null), [y, v]),
						w = o.default.useCallback(
							(e) => {
								var t
								let o = null != (t = null == y ? void 0 : y.findIndex((t) => t === e)) ? t : null
								l(o),
									E(n.current, {
										transition: `transform 0.5s cubic-bezier(${S.join(",")})`,
										transform: C(s) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`,
									}),
									y && o !== y.length - 1 && void 0 !== i && o !== i && o < i
										? E(a.current, {
												transition: `opacity 0.5s cubic-bezier(${S.join(",")})`,
												opacity: "0",
											})
										: E(a.current, {
												transition: `opacity 0.5s cubic-bezier(${S.join(",")})`,
												opacity: "1",
											}),
									f(null == r ? void 0 : r[Math.max(o, 0)])
							},
							[n.current, r, y, i, a, f],
						)
					return (
						o.default.useEffect(() => {
							if (c || e) {
								var t
								let n =
									null != (t = null == r ? void 0 : r.findIndex((t) => t === e || t === c)) ? t : -1
								y && -1 !== n && "number" == typeof y[n] && w(y[n])
							}
						}, [c, e, r, y, w]),
						{
							isLastSnapPoint: h,
							activeSnapPoint: c,
							shouldFade: g,
							getPercentageDragged: function (e, t) {
								if (!r || "number" != typeof v || !y || void 0 === i) return null
								let n = v === i - 1
								if (v >= i && t) return 0
								if (n && !t) return 1
								if (!g && !n) return null
								let o = n ? v + 1 : v - 1,
									a = e / Math.abs(n ? y[o] - y[o - 1] : y[o + 1] - y[o])
								return n ? 1 - a : a
							},
							setActiveSnapPoint: f,
							activeSnapPointIndex: v,
							onRelease: function ({ draggedDistance: e, closeDrawer: t, velocity: n, dismissible: o }) {
								if (void 0 === i) return
								let l =
										"bottom" === s || "right" === s
											? (null != b ? b : 0) - e
											: (null != b ? b : 0) + e,
									u = v === i - 1,
									c = 0 === v,
									f = e > 0
								if (
									(u && E(a.current, { transition: `opacity 0.5s cubic-bezier(${S.join(",")})` }),
									!d && n > 2 && !f)
								)
									return void (o ? t() : w(y[0]))
								if (!d && n > 2 && f && y && r) return void w(y[r.length - 1])
								let p =
										null == y
											? void 0
											: y.reduce((e, t) =>
													"number" != typeof e || "number" != typeof t
														? e
														: Math.abs(t - l) < Math.abs(e - l)
															? t
															: e,
												),
									m = C(s) ? window.innerHeight : window.innerWidth
								if (n > 0.4 && Math.abs(e) < 0.4 * m) {
									let e = f ? 1 : -1
									return e > 0 && h && r
										? void w(y[r.length - 1])
										: void (c && e < 0 && o && t(), null === v || w(y[v + e]))
								}
								w(p)
							},
							onDrag: function ({ draggedDistance: e }) {
								if (null === b) return
								let t = "bottom" === s || "right" === s ? b - e : b + e
								;(("bottom" === s || "right" === s) && t < y[y.length - 1]) ||
									(("top" === s || "left" === s) && t > y[y.length - 1]) ||
									E(n.current, {
										transform: C(s) ? `translate3d(0, ${t}px, 0)` : `translate3d(${t}px, 0, 0)`,
									})
							},
							snapPointsOffset: y,
						}
					)
				})({
					snapPoints: h,
					activeSnapPointProp: O,
					setActiveSnapPointProp: L,
					drawerRef: ey,
					fadeFromIndex: _,
					overlayRef: el,
					onSnapPointChange: eE,
					direction: $,
					container: X,
					snapToSequentialPoint: U,
				})
			!(function (e = {}) {
				let { isDisabled: r } = e
				d(() => {
					if (!r) {
						var e, n, o
						let r, a, i, l, u, d, p
						return (
							1 == ++v &&
								s() &&
								((i = 0),
								(l = window.pageXOffset),
								(u = window.pageYOffset),
								(d = c(
									((e = document.documentElement),
									(n = "paddingRight"),
									(o = `${window.innerWidth - document.documentElement.clientWidth}px`),
									(r = e.style[n]),
									(e.style[n] = o),
									() => {
										e.style[n] = r
									}),
								)),
								window.scrollTo(0, 0),
								(p = c(
									g(
										document,
										"touchstart",
										(e) => {
											;((a = m(e.target)) !== document.documentElement || a !== document.body) &&
												(i = e.changedTouches[0].pageY)
										},
										{ passive: !1, capture: !0 },
									),
									g(
										document,
										"touchmove",
										(e) => {
											if (!a || a === document.documentElement || a === document.body)
												return void e.preventDefault()
											let t = e.changedTouches[0].pageY,
												r = a.scrollTop,
												n = a.scrollHeight - a.clientHeight
											0 !== n &&
												(((r <= 0 && t > i) || (r >= n && t < i)) && e.preventDefault(),
												(i = t))
										},
										{ passive: !1, capture: !0 },
									),
									g(
										document,
										"touchend",
										(e) => {
											let t = e.target
											b(t) &&
												t !== document.activeElement &&
												(e.preventDefault(),
												(t.style.transform = "translateY(-2000px)"),
												t.focus(),
												requestAnimationFrame(() => {
													t.style.transform = ""
												}))
										},
										{ passive: !1, capture: !0 },
									),
									g(
										document,
										"focus",
										(e) => {
											let t = e.target
											b(t) &&
												((t.style.transform = "translateY(-2000px)"),
												requestAnimationFrame(() => {
													;(t.style.transform = ""),
														f &&
															(f.height < window.innerHeight
																? requestAnimationFrame(() => {
																		y(t)
																	})
																: f.addEventListener("resize", () => y(t), {
																		once: !0,
																	}))
												}))
										},
										!0,
									),
									g(window, "scroll", () => {
										window.scrollTo(0, 0)
									}),
								)),
								(t = () => {
									d(), p(), window.scrollTo(l, u)
								})),
							() => {
								0 == --v && (null == t || t())
							}
						)
					}
				}, [r])
			})({ isDisabled: !J || en || !F || ea || !et || !Y || !W })
			let { restorePositionSetting: eA } = (function ({
				isOpen: e,
				modal: t,
				nested: r,
				hasBeenOpened: n,
				preventScrollRestoration: a,
				noBodyStyles: i,
			}) {
				let [s, u] = o.default.useState(() => ("u" > typeof window ? window.location.href : "")),
					d = o.default.useRef(0),
					c = o.default.useCallback(() => {
						if (l() && null === A && e && !i) {
							A = {
								position: document.body.style.position,
								top: document.body.style.top,
								left: document.body.style.left,
								height: document.body.style.height,
								right: "unset",
							}
							let { scrollX: e, innerHeight: t } = window
							document.body.style.setProperty("position", "fixed", "important"),
								Object.assign(document.body.style, {
									top: `${-d.current}px`,
									left: `${-e}px`,
									right: "0px",
									height: "auto",
								}),
								window.setTimeout(
									() =>
										window.requestAnimationFrame(() => {
											let e = t - window.innerHeight
											e && d.current >= t && (document.body.style.top = `${-(d.current + e)}px`)
										}),
									300,
								)
						}
					}, [e]),
					f = o.default.useCallback(() => {
						if (l() && null !== A && !i) {
							let e = -parseInt(document.body.style.top, 10),
								t = -parseInt(document.body.style.left, 10)
							Object.assign(document.body.style, A),
								window.requestAnimationFrame(() => {
									a && s !== window.location.href ? u(window.location.href) : window.scrollTo(t, e)
								}),
								(A = null)
						}
					}, [s])
				return (
					o.default.useEffect(() => {
						function e() {
							d.current = window.scrollY
						}
						return (
							e(),
							window.addEventListener("scroll", e),
							() => {
								window.removeEventListener("scroll", e)
							}
						)
					}, []),
					o.default.useEffect(() => {
						if (t)
							return () => {
								"u" < typeof document || document.querySelector("[data-vaul-drawer]") || f()
							}
					}, [t, f]),
					o.default.useEffect(() => {
						!r &&
							n &&
							(e
								? (window.matchMedia("(display-mode: standalone)").matches || c(),
									t ||
										window.setTimeout(() => {
											f()
										}, 500))
								: f())
					}, [e, n, s, t, r, c, f]),
					{ restorePositionSetting: f }
				)
			})({
				isOpen: J,
				modal: F,
				nested: null != H && H,
				hasBeenOpened: et,
				preventScrollRestoration: K,
				noBodyStyles: V,
			})
			function eN() {
				return (window.innerWidth - 26) / window.innerWidth
			}
			function eM(e, t) {
				var r
				let n = e,
					o = null == (r = window.getSelection()) ? void 0 : r.toString(),
					a = ey.current ? k(ey.current, $) : null,
					i = new Date()
				if ("SELECT" === n.tagName || n.hasAttribute("data-vaul-no-drag") || n.closest("[data-vaul-no-drag]"))
					return !1
				if ("right" === $ || "left" === $) return !0
				if (es.current && i.getTime() - es.current.getTime() < 500) return !1
				if (null !== a && ("bottom" === $ ? a > 0 : a < 0)) return !0
				if (o && o.length > 0) return !1
				if ((ec.current && i.getTime() - ec.current.getTime() < T && 0 === a) || t) return (ec.current = i), !1
				for (; n; ) {
					if (n.scrollHeight > n.clientHeight) {
						if (0 !== n.scrollTop) return (ec.current = new Date()), !1
						if ("dialog" === n.getAttribute("role")) break
					}
					n = n.parentNode
				}
				return !0
			}
			function e_(e) {
				en &&
					ey.current &&
					(ey.current.classList.remove(j), (ef.current = !1), eo(!1), (ed.current = new Date())),
					null == z || z(),
					e || ee(!1),
					setTimeout(() => {
						h && eR(h[0])
					}, 500)
			}
			function eO() {
				if (!ey.current) return
				let e = document.querySelector("[data-vaul-drawer-wrapper]"),
					t = k(ey.current, $)
				E(ey.current, {
					transform: "translate3d(0, 0, 0)",
					transition: `transform 0.5s cubic-bezier(${S.join(",")})`,
				}),
					E(el.current, { transition: `opacity 0.5s cubic-bezier(${S.join(",")})`, opacity: "1" }),
					w &&
						t &&
						t > 0 &&
						J &&
						E(
							e,
							{
								borderRadius: "8px",
								overflow: "hidden",
								...(C($)
									? {
											transform: `scale(${eN()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
											transformOrigin: "top",
										}
									: {
											transform: `scale(${eN()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
											transformOrigin: "left",
										}),
								transitionProperty: "transform, border-radius",
								transitionDuration: "0.5s",
								transitionTimingFunction: `cubic-bezier(${S.join(",")})`,
							},
							!0,
						)
			}
			return (
				o.default.useEffect(() => {
					window.requestAnimationFrame(() => {
						ev.current = !0
					})
				}, []),
				o.default.useEffect(() => {
					var e
					function t() {
						if (ey.current && Y && (b(document.activeElement) || eh.current)) {
							var e
							let t = (null == (e = window.visualViewport) ? void 0 : e.height) || 0,
								r = window.innerHeight,
								n = r - t,
								o = ey.current.getBoundingClientRect().height || 0
							ex.current || (ex.current = o)
							let a = ey.current.getBoundingClientRect().top
							if (
								(Math.abs(eg.current - n) > 60 && (eh.current = !eh.current),
								h && h.length > 0 && ej && ek && (n += ej[ek] || 0),
								(eg.current = n),
								o > t || eh.current)
							) {
								let e = ey.current.getBoundingClientRect().height,
									i = e
								e > t && (i = t - (o > 0.8 * r ? a : 26)),
									I
										? (ey.current.style.height = `${e - Math.max(n, 0)}px`)
										: (ey.current.style.height = `${Math.max(i, t - a)}px`)
							} else {
								let e
								;(e = navigator.userAgent),
									("u" > typeof window &&
										((/Firefox/.test(e) && /Mobile/.test(e)) || /FxiOS/.test(e))) ||
										(ey.current.style.height = `${ex.current}px`)
							}
							h && h.length > 0 && !eh.current
								? (ey.current.style.bottom = "0px")
								: (ey.current.style.bottom = `${Math.max(n, 0)}px`)
						}
					}
					return (
						null == (e = window.visualViewport) || e.addEventListener("resize", t),
						() => {
							var e
							return null == (e = window.visualViewport) ? void 0 : e.removeEventListener("resize", t)
						}
					)
				}, [ek, h, ej]),
				o.default.useEffect(
					() => (
						J && (E(document.documentElement, { scrollBehavior: "auto" }), (es.current = new Date())),
						() => {
							!(function (e, t) {
								if (!e || !(e instanceof HTMLElement)) return
								let r = x.get(e)
								r && (e.style[t] = r[t])
							})(document.documentElement, "scrollBehavior")
						}
					),
					[J],
				),
				o.default.useEffect(() => {
					F ||
						window.requestAnimationFrame(() => {
							document.body.style.pointerEvents = "auto"
						})
				}, [F]),
				o.default.createElement(
					n.Root,
					{
						defaultOpen: B,
						onOpenChange: (e) => {
							;(N || e) && (e ? er(!0) : e_(!0), ee(e))
						},
						open: J,
					},
					o.default.createElement(
						a.Provider,
						{
							value: {
								activeSnapPoint: eC,
								snapPoints: h,
								setActiveSnapPoint: eR,
								drawerRef: ey,
								overlayRef: el,
								onOpenChange: r,
								onPress: function (e) {
									var t, r
									;(!N && !h) ||
										((!ey.current || ey.current.contains(e.target)) &&
											((eb.current =
												(null == (t = ey.current)
													? void 0
													: t.getBoundingClientRect().height) || 0),
											(ew.current =
												(null == (r = ey.current) ? void 0 : r.getBoundingClientRect().width) ||
												0),
											eo(!0),
											(eu.current = new Date()),
											s() &&
												window.addEventListener("touchend", () => (ef.current = !1), {
													once: !0,
												}),
											e.target.setPointerCapture(e.pointerId),
											(em.current = C($) ? e.pageY : e.pageX)))
								},
								onRelease: function (e) {
									var t, r
									if (!en || !ey.current) return
									ey.current.classList.remove(j), (ef.current = !1), eo(!1), (ed.current = new Date())
									let n = k(ey.current, $)
									if (!e || !eM(e.target, !1) || !n || Number.isNaN(n) || null === eu.current) return
									let o = ed.current.getTime() - eu.current.getTime(),
										a = em.current - (C($) ? e.pageY : e.pageX),
										i = Math.abs(a) / o
									if (
										(i > 0.05 &&
											(ei(!0),
											setTimeout(() => {
												ei(!1)
											}, 200)),
										h)
									) {
										eS({
											draggedDistance: a * ("bottom" === $ || "right" === $ ? 1 : -1),
											closeDrawer: e_,
											velocity: i,
											dismissible: N,
										}),
											null == p || p(e, !0)
										return
									}
									if ("bottom" === $ || "right" === $ ? a > 0 : a < 0) {
										eO(), null == p || p(e, !0)
										return
									}
									if (i > 0.4) {
										e_(), null == p || p(e, !1)
										return
									}
									let l = Math.min(
											null != (t = ey.current.getBoundingClientRect().height) ? t : 0,
											window.innerHeight,
										),
										s = Math.min(
											null != (r = ey.current.getBoundingClientRect().width) ? r : 0,
											window.innerWidth,
										)
									if (Math.abs(n) >= ("left" === $ || "right" === $ ? s : l) * P) {
										e_(), null == p || p(e, !1)
										return
									}
									null == p || p(e, !0), eO()
								},
								onDrag: function (e) {
									if (ey.current && en) {
										let t = "bottom" === $ || "right" === $ ? 1 : -1,
											r = (em.current - (C($) ? e.pageY : e.pageX)) * t,
											n = r > 0,
											o = h && !N && !n
										if (o && 0 === ek) return
										let a = Math.abs(r),
											i = document.querySelector("[data-vaul-drawer-wrapper]"),
											l = a / ("bottom" === $ || "top" === $ ? eb.current : ew.current),
											s = eT(a, n)
										if ((null !== s && (l = s), (o && l >= 1) || (!ef.current && !eM(e.target, n))))
											return
										if (
											(ey.current.classList.add(j),
											(ef.current = !0),
											E(ey.current, { transition: "none" }),
											E(el.current, { transition: "none" }),
											h && eP({ draggedDistance: r }),
											n && !h)
										) {
											let e = Math.min(-(8 * (Math.log(r + 1) - 2) * 1), 0) * t
											E(ey.current, {
												transform: C($)
													? `translate3d(0, ${e}px, 0)`
													: `translate3d(${e}px, 0, 0)`,
											})
											return
										}
										let d = 1 - l
										if (
											((eD || (_ && ek === _ - 1)) &&
												(null == u || u(e, l),
												E(el.current, { opacity: `${d}`, transition: "none" }, !0)),
											i && el.current && w)
										) {
											let e = Math.min(eN() + l * (1 - eN()), 1),
												t = 8 - 8 * l,
												r = Math.max(0, 14 - 14 * l)
											E(
												i,
												{
													borderRadius: `${t}px`,
													transform: C($)
														? `scale(${e}) translate3d(0, ${r}px, 0)`
														: `scale(${e}) translate3d(${r}px, 0, 0)`,
													transition: "none",
												},
												!0,
											)
										}
										if (!h) {
											let e = a * t
											E(ey.current, {
												transform: C($)
													? `translate3d(0, ${e}px, 0)`
													: `translate3d(${e}px, 0, 0)`,
											})
										}
									}
								},
								dismissible: N,
								shouldAnimate: ev,
								handleOnly: M,
								isOpen: J,
								isDragging: en,
								shouldFade: eD,
								closeDrawer: e_,
								onNestedDrag: function (e, t) {
									if (t < 0) return
									let r = (window.innerWidth - 16) / window.innerWidth,
										n = r + t * (1 - r),
										o = -16 + 16 * t
									E(ey.current, {
										transform: C($)
											? `scale(${n}) translate3d(0, ${o}px, 0)`
											: `scale(${n}) translate3d(${o}px, 0, 0)`,
										transition: "none",
									})
								},
								onNestedOpenChange: function (e) {
									let t = e ? (window.innerWidth - 16) / window.innerWidth : 1,
										r = e ? -16 : 0
									ep.current && window.clearTimeout(ep.current),
										E(ey.current, {
											transition: `transform 0.5s cubic-bezier(${S.join(",")})`,
											transform: C($)
												? `scale(${t}) translate3d(0, ${r}px, 0)`
												: `scale(${t}) translate3d(${r}px, 0, 0)`,
										}),
										!e &&
											ey.current &&
											(ep.current = setTimeout(() => {
												let e = k(ey.current, $)
												E(ey.current, {
													transition: "none",
													transform: C($)
														? `translate3d(0, ${e}px, 0)`
														: `translate3d(${e}px, 0, 0)`,
												})
											}, 500))
								},
								onNestedRelease: function (e, t) {
									let r = C($) ? window.innerHeight : window.innerWidth,
										n = t ? (r - 16) / r : 1,
										o = t ? -16 : 0
									t &&
										E(ey.current, {
											transition: `transform 0.5s cubic-bezier(${S.join(",")})`,
											transform: C($)
												? `scale(${n}) translate3d(0, ${o}px, 0)`
												: `scale(${n}) translate3d(${o}px, 0, 0)`,
										})
								},
								keyboardIsOpen: eh,
								modal: F,
								snapPointsOffset: ej,
								activeSnapPointIndex: ek,
								direction: $,
								shouldScaleBackground: w,
								setBackgroundColorOnScale: R,
								noBodyStyles: V,
								container: X,
								autoFocus: G,
							},
						},
						i,
					),
				)
			)
		}
		let M = o.default.forwardRef(function ({ ...e }, t) {
			let {
					overlayRef: r,
					snapPoints: a,
					onRelease: l,
					shouldFade: s,
					isOpen: u,
					modal: d,
					shouldAnimate: c,
				} = i(),
				f = w(t, r),
				p = a && a.length > 0
			if (!d) return null
			let m = o.default.useCallback((e) => l(e), [l])
			return o.default.createElement(n.Overlay, {
				onMouseUp: m,
				ref: f,
				"data-vaul-overlay": "",
				"data-vaul-snap-points": u && p ? "true" : "false",
				"data-vaul-snap-points-overlay": u && s ? "true" : "false",
				"data-vaul-animate": (null == c ? void 0 : c.current) ? "true" : "false",
				...e,
			})
		})
		M.displayName = "Drawer.Overlay"
		let _ = o.default.forwardRef(function ({ onPointerDownOutside: e, style: t, onOpenAutoFocus: r, ...a }, l) {
			let {
					drawerRef: s,
					onPress: u,
					onRelease: d,
					onDrag: c,
					keyboardIsOpen: f,
					snapPointsOffset: p,
					activeSnapPointIndex: m,
					modal: h,
					isOpen: v,
					direction: g,
					snapPoints: y,
					container: b,
					handleOnly: x,
					shouldAnimate: E,
					autoFocus: k,
				} = i(),
				[j, P] = o.default.useState(!1),
				D = w(l, s),
				A = o.default.useRef(null),
				N = o.default.useRef(null),
				M = o.default.useRef(!1),
				_ = y && y.length > 0
			function O(e) {
				;(A.current = null), (M.current = !1), d(e)
			}
			return (
				!(function () {
					let {
							direction: e,
							isOpen: t,
							shouldScaleBackground: r,
							setBackgroundColorOnScale: n,
							noBodyStyles: a,
						} = i(),
						l = o.default.useRef(null),
						s = (0, o.useMemo)(() => document.body.style.backgroundColor, [])
					function u() {
						return (window.innerWidth - 26) / window.innerWidth
					}
					o.default.useEffect(() => {
						if (t && r) {
							l.current && clearTimeout(l.current)
							let t =
								document.querySelector("[data-vaul-drawer-wrapper]") ||
								document.querySelector("[vaul-drawer-wrapper]")
							if (!t) return
							!(function (...e) {})(
								n && !a ? R(document.body, { background: "black" }) : T,
								R(t, {
									transformOrigin: C(e) ? "top" : "left",
									transitionProperty: "transform, border-radius",
									transitionDuration: "0.5s",
									transitionTimingFunction: `cubic-bezier(${S.join(",")})`,
								}),
							)
							let r = R(t, {
								borderRadius: "8px",
								overflow: "hidden",
								...(C(e)
									? {
											transform: `scale(${u()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
										}
									: {
											transform: `scale(${u()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
										}),
							})
							return () => {
								r(),
									(l.current = window.setTimeout(() => {
										s
											? (document.body.style.background = s)
											: document.body.style.removeProperty("background")
									}, 500))
							}
						}
					}, [t, r, s])
				})(),
				o.default.useEffect(() => {
					_ &&
						window.requestAnimationFrame(() => {
							P(!0)
						})
				}, []),
				o.default.createElement(n.Content, {
					"data-vaul-drawer-direction": g,
					"data-vaul-drawer": "",
					"data-vaul-delayed-snap-points": j ? "true" : "false",
					"data-vaul-snap-points": v && _ ? "true" : "false",
					"data-vaul-custom-container": b ? "true" : "false",
					"data-vaul-animate": (null == E ? void 0 : E.current) ? "true" : "false",
					...a,
					ref: D,
					style: p && p.length > 0 ? { "--snap-point-height": `${p[null != m ? m : 0]}px`, ...t } : t,
					onPointerDown: (e) => {
						x ||
							(null == a.onPointerDown || a.onPointerDown.call(a, e),
							(A.current = { x: e.pageX, y: e.pageY }),
							u(e))
					},
					onOpenAutoFocus: (e) => {
						null == r || r(e), k || e.preventDefault()
					},
					onPointerDownOutside: (t) => {
						;(null == e || e(t), !h || t.defaultPrevented)
							? t.preventDefault()
							: f.current && (f.current = !1)
					},
					onFocusOutside: (e) => {
						if (!h) return void e.preventDefault()
					},
					onPointerMove: (e) => {
						if (((N.current = e), x || (null == a.onPointerMove || a.onPointerMove.call(a, e), !A.current)))
							return
						let t = e.pageY - A.current.y,
							r = e.pageX - A.current.x,
							n = "touch" === e.pointerType ? 10 : 2
						;((e, t, r = 0) => {
							if (M.current) return !0
							let n = Math.abs(e.y),
								o = Math.abs(e.x),
								a = o > n,
								i = ["bottom", "right"].includes(t) ? 1 : -1
							if ("left" === t || "right" === t) {
								if (!(e.x * i < 0) && o >= 0 && o <= r) return a
							} else if (!(e.y * i < 0) && n >= 0 && n <= r) return !a
							return (M.current = !0), !0
						})({ x: r, y: t }, g, n)
							? c(e)
							: (Math.abs(r) > n || Math.abs(t) > n) && (A.current = null)
					},
					onPointerUp: (e) => {
						null == a.onPointerUp || a.onPointerUp.call(a, e), (A.current = null), (M.current = !1), d(e)
					},
					onPointerOut: (e) => {
						null == a.onPointerOut || a.onPointerOut.call(a, e), O(N.current)
					},
					onContextMenu: (e) => {
						null == a.onContextMenu || a.onContextMenu.call(a, e), N.current && O(N.current)
					},
				})
			)
		})
		_.displayName = "Drawer.Content"
		let O = o.default.forwardRef(function ({ preventCycle: e = !1, children: t, ...r }, n) {
			let {
					closeDrawer: a,
					isDragging: l,
					snapPoints: s,
					activeSnapPoint: u,
					setActiveSnapPoint: d,
					dismissible: c,
					handleOnly: f,
					isOpen: p,
					onPress: m,
					onDrag: h,
				} = i(),
				v = o.default.useRef(null),
				g = o.default.useRef(!1)
			function y() {
				v.current && window.clearTimeout(v.current), (g.current = !1)
			}
			return o.default.createElement(
				"div",
				{
					onClick: function () {
						g.current
							? y()
							: window.setTimeout(() => {
									!(function () {
										if (l || e || g.current) return y()
										if ((y(), !s || 0 === s.length)) {
											c || a()
											return
										}
										if (u === s[s.length - 1] && c) return a()
										let t = s.findIndex((e) => e === u)
										;-1 === t || d(s[t + 1])
									})()
								}, 120)
					},
					onPointerCancel: y,
					onPointerDown: (e) => {
						f && m(e),
							(v.current = window.setTimeout(() => {
								g.current = !0
							}, 250))
					},
					onPointerMove: (e) => {
						f && h(e)
					},
					ref: n,
					"data-vaul-drawer-visible": p ? "true" : "false",
					"data-vaul-handle": "",
					"aria-hidden": "true",
					...r,
				},
				o.default.createElement("span", { "data-vaul-handle-hitarea": "", "aria-hidden": "true" }, t),
			)
		})
		O.displayName = "Drawer.Handle"
		let L = {
			Root: N,
			NestedRoot: function ({ onDrag: e, onOpenChange: t, open: r, ...n }) {
				let { onNestedDrag: a, onNestedOpenChange: l, onNestedRelease: s } = i()
				if (!a) throw Error("Drawer.NestedRoot must be placed in another drawer")
				return o.default.createElement(N, {
					nested: !0,
					open: r,
					onClose: () => {
						l(!1)
					},
					onDrag: (t, r) => {
						a(t, r), null == e || e(t, r)
					},
					onOpenChange: (e) => {
						e && l(e), null == t || t(e)
					},
					onRelease: s,
					...n,
				})
			},
			Content: _,
			Overlay: M,
			Trigger: n.Trigger,
			Portal: function (e) {
				let t = i(),
					{ container: r = t.container, ...a } = e
				return o.default.createElement(n.Portal, { container: r, ...a })
			},
			Handle: O,
			Close: n.Close,
			Title: n.Title,
			Description: n.Description,
		}
		var I = e.i(46030)
		function F({ ...e }) {
			return (0, r.jsx)(L.Root, { "data-slot": "drawer", ...e })
		}
		function z({ ...e }) {
			return (0, r.jsx)(L.Trigger, { "data-slot": "drawer-trigger", ...e })
		}
		function H({ ...e }) {
			return (0, r.jsx)(L.Portal, { "data-slot": "drawer-portal", ...e })
		}
		function V({ ...e }) {
			return (0, r.jsx)(L.Close, { "data-slot": "drawer-close", ...e })
		}
		function $({ className: e, ...t }) {
			return (0, r.jsx)(L.Overlay, {
				"data-slot": "drawer-overlay",
				className: (0, I.cn)(
					"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
					e,
				),
				...t,
			})
		}
		function B({ className: e, children: t, ...n }) {
			return (0, r.jsxs)(H, {
				"data-slot": "drawer-portal",
				children: [
					(0, r.jsx)($, {}),
					(0, r.jsxs)(L.Content, {
						"data-slot": "drawer-content",
						className: (0, I.cn)(
							"group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
							"data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-sm data-[vaul-drawer-direction=top]:border-b",
							"data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-sm data-[vaul-drawer-direction=bottom]:border-t",
							"data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
							"data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
							e,
						),
						...n,
						children: [
							(0, r.jsx)("div", {
								className:
									"bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block",
							}),
							t,
						],
					}),
				],
			})
		}
		function W({ className: e, ...t }) {
			return (0, r.jsx)("div", {
				"data-slot": "drawer-header",
				className: (0, I.cn)("flex flex-col gap-1.5 py-4", e),
				...t,
			})
		}
		function U({ className: e, ...t }) {
			return (0, r.jsx)("div", {
				"data-slot": "drawer-footer",
				className: (0, I.cn)("mt-auto flex flex-col gap-2 py-4", e),
				...t,
			})
		}
		function K({ className: e, ...t }) {
			return (0, r.jsx)(L.Title, {
				"data-slot": "drawer-title",
				className: (0, I.cn)("text-foreground font-semibold", e),
				...t,
			})
		}
		function Y({ className: e, ...t }) {
			return (0, r.jsx)(L.Description, {
				"data-slot": "drawer-description",
				className: (0, I.cn)("text-muted-foreground text-sm", e),
				...t,
			})
		}
		e.s(
			[
				"Drawer",
				() => F,
				"DrawerClose",
				() => V,
				"DrawerContent",
				() => B,
				"DrawerDescription",
				() => Y,
				"DrawerFooter",
				() => U,
				"DrawerHeader",
				() => W,
				"DrawerOverlay",
				() => $,
				"DrawerPortal",
				() => H,
				"DrawerTitle",
				() => K,
				"DrawerTrigger",
				() => z,
			],
			52661,
		)
	},
	46534,
	(e) => {
		"use strict"
		var t = e.i(10008),
			r = e.i(4113),
			n = e.i(26613),
			o = e.i(16853),
			a = e.i(8026)
		function i(e) {
			let i = e + "CollectionProvider",
				[l, s] = (0, r.createContextScope)(i),
				[u, d] = l(i, { collectionRef: { current: null }, itemMap: new Map() }),
				c = (e) => {
					let { scope: r, children: n } = e,
						o = t.default.useRef(null),
						i = t.default.useRef(new Map()).current
					return (0, a.jsx)(u, { scope: r, itemMap: i, collectionRef: o, children: n })
				}
			c.displayName = i
			let f = e + "CollectionSlot",
				p = (0, o.createSlot)(f),
				m = t.default.forwardRef((e, t) => {
					let { scope: r, children: o } = e,
						i = d(f, r),
						l = (0, n.useComposedRefs)(t, i.collectionRef)
					return (0, a.jsx)(p, { ref: l, children: o })
				})
			m.displayName = f
			let h = e + "CollectionItemSlot",
				v = "data-radix-collection-item",
				g = (0, o.createSlot)(h),
				y = t.default.forwardRef((e, r) => {
					let { scope: o, children: i, ...l } = e,
						s = t.default.useRef(null),
						u = (0, n.useComposedRefs)(r, s),
						c = d(h, o)
					return (
						t.default.useEffect(() => (c.itemMap.set(s, { ref: s, ...l }), () => void c.itemMap.delete(s))),
						(0, a.jsx)(g, { ...{ [v]: "" }, ref: u, children: i })
					)
				})
			return (
				(y.displayName = h),
				[
					{ Provider: c, Slot: m, ItemSlot: y },
					function (r) {
						let n = d(e + "CollectionConsumer", r)
						return t.default.useCallback(() => {
							let e = n.collectionRef.current
							if (!e) return []
							let t = Array.from(e.querySelectorAll(`[${v}]`))
							return Array.from(n.itemMap.values()).sort(
								(e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current),
							)
						}, [n.collectionRef, n.itemMap])
					},
					s,
				]
			)
		}
		var l = new WeakMap()
		function s(e, t) {
			var r, n
			let o, a, i
			if ("at" in Array.prototype) return Array.prototype.at.call(e, t)
			let l = ((r = e), (n = t), (o = r.length), (i = (a = u(n)) >= 0 ? a : o + a) < 0 || i >= o ? -1 : i)
			return -1 === l ? void 0 : e[l]
		}
		function u(e) {
			return e != e || 0 === e ? 0 : Math.trunc(e)
		}
		;(class e extends Map {
			#a
			constructor(e) {
				super(e), (this.#a = [...super.keys()]), l.set(this, !0)
			}
			set(e, t) {
				return (
					l.get(this) && (this.has(e) ? (this.#a[this.#a.indexOf(e)] = e) : this.#a.push(e)),
					super.set(e, t),
					this
				)
			}
			insert(e, t, r) {
				let n,
					o = this.has(t),
					a = this.#a.length,
					i = u(e),
					l = i >= 0 ? i : a + i,
					s = l < 0 || l >= a ? -1 : l
				if (s === this.size || (o && s === this.size - 1) || -1 === s) return this.set(t, r), this
				let d = this.size + +!o
				i < 0 && l++
				let c = [...this.#a],
					f = !1
				for (let e = l; e < d; e++)
					if (l === e) {
						let a = c[e]
						c[e] === t && (a = c[e + 1]), o && this.delete(t), (n = this.get(a)), this.set(t, r)
					} else {
						f || c[e - 1] !== t || (f = !0)
						let r = c[f ? e : e - 1],
							o = n
						;(n = this.get(r)), this.delete(r), this.set(r, o)
					}
				return this
			}
			with(t, r, n) {
				let o = new e(this)
				return o.insert(t, r, n), o
			}
			before(e) {
				let t = this.#a.indexOf(e) - 1
				if (!(t < 0)) return this.entryAt(t)
			}
			setBefore(e, t, r) {
				let n = this.#a.indexOf(e)
				return -1 === n ? this : this.insert(n, t, r)
			}
			after(e) {
				let t = this.#a.indexOf(e)
				if (-1 !== (t = -1 === t || t === this.size - 1 ? -1 : t + 1)) return this.entryAt(t)
			}
			setAfter(e, t, r) {
				let n = this.#a.indexOf(e)
				return -1 === n ? this : this.insert(n + 1, t, r)
			}
			first() {
				return this.entryAt(0)
			}
			last() {
				return this.entryAt(-1)
			}
			clear() {
				return (this.#a = []), super.clear()
			}
			delete(e) {
				let t = super.delete(e)
				return t && this.#a.splice(this.#a.indexOf(e), 1), t
			}
			deleteAt(e) {
				let t = this.keyAt(e)
				return void 0 !== t && this.delete(t)
			}
			at(e) {
				let t = s(this.#a, e)
				if (void 0 !== t) return this.get(t)
			}
			entryAt(e) {
				let t = s(this.#a, e)
				if (void 0 !== t) return [t, this.get(t)]
			}
			indexOf(e) {
				return this.#a.indexOf(e)
			}
			keyAt(e) {
				return s(this.#a, e)
			}
			from(e, t) {
				let r = this.indexOf(e)
				if (-1 === r) return
				let n = r + t
				return n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.at(n)
			}
			keyFrom(e, t) {
				let r = this.indexOf(e)
				if (-1 === r) return
				let n = r + t
				return n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.keyAt(n)
			}
			find(e, t) {
				let r = 0
				for (let n of this) {
					if (Reflect.apply(e, t, [n, r, this])) return n
					r++
				}
			}
			findIndex(e, t) {
				let r = 0
				for (let n of this) {
					if (Reflect.apply(e, t, [n, r, this])) return r
					r++
				}
				return -1
			}
			filter(t, r) {
				let n = [],
					o = 0
				for (let e of this) Reflect.apply(t, r, [e, o, this]) && n.push(e), o++
				return new e(n)
			}
			map(t, r) {
				let n = [],
					o = 0
				for (let e of this) n.push([e[0], Reflect.apply(t, r, [e, o, this])]), o++
				return new e(n)
			}
			reduce(...e) {
				let [t, r] = e,
					n = 0,
					o = r ?? this.at(0)
				for (let r of this) (o = 0 === n && 1 === e.length ? r : Reflect.apply(t, this, [o, r, n, this])), n++
				return o
			}
			reduceRight(...e) {
				let [t, r] = e,
					n = r ?? this.at(-1)
				for (let r = this.size - 1; r >= 0; r--) {
					let o = this.at(r)
					n = r === this.size - 1 && 1 === e.length ? o : Reflect.apply(t, this, [n, o, r, this])
				}
				return n
			}
			toSorted(t) {
				return new e([...this.entries()].sort(t))
			}
			toReversed() {
				let t = new e()
				for (let e = this.size - 1; e >= 0; e--) {
					let r = this.keyAt(e),
						n = this.get(r)
					t.set(r, n)
				}
				return t
			}
			toSpliced(...t) {
				let r = [...this.entries()]
				return r.splice(...t), new e(r)
			}
			slice(t, r) {
				let n = new e(),
					o = this.size - 1
				if (void 0 === t) return n
				t < 0 && (t += this.size), void 0 !== r && r > 0 && (o = r - 1)
				for (let e = t; e <= o; e++) {
					let t = this.keyAt(e),
						r = this.get(t)
					n.set(t, r)
				}
				return n
			}
			every(e, t) {
				let r = 0
				for (let n of this) {
					if (!Reflect.apply(e, t, [n, r, this])) return !1
					r++
				}
				return !0
			}
			some(e, t) {
				let r = 0
				for (let n of this) {
					if (Reflect.apply(e, t, [n, r, this])) return !0
					r++
				}
				return !1
			}
		}),
			e.s(["createCollection", () => i])
	},
	78883,
	(e) => {
		"use strict"
		var t = e.i(10008)
		e.i(8026)
		var r = t.createContext(void 0)
		function n(e) {
			let n = t.useContext(r)
			return e || n || "ltr"
		}
		e.s(["useDirection", () => n])
	},
	97895,
	88832,
	(e) => {
		"use strict"
		let t = ["top", "right", "bottom", "left"],
			r = t.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
			n = Math.min,
			o = Math.max,
			a = Math.round,
			i = Math.floor,
			l = (e) => ({ x: e, y: e }),
			s = { left: "right", right: "left", bottom: "top", top: "bottom" },
			u = { start: "end", end: "start" }
		function d(e, t) {
			return "function" == typeof e ? e(t) : e
		}
		function c(e) {
			return e.split("-")[0]
		}
		function f(e) {
			return e.split("-")[1]
		}
		function p(e) {
			return "x" === e ? "y" : "x"
		}
		function m(e) {
			return "y" === e ? "height" : "width"
		}
		function h(e) {
			return ["top", "bottom"].includes(c(e)) ? "y" : "x"
		}
		function v(e, t, r) {
			void 0 === r && (r = !1)
			let n = f(e),
				o = p(h(e)),
				a = m(o),
				i = "x" === o ? (n === (r ? "end" : "start") ? "right" : "left") : "start" === n ? "bottom" : "top"
			return t.reference[a] > t.floating[a] && (i = y(i)), [i, y(i)]
		}
		function g(e) {
			return e.replace(/start|end/g, (e) => u[e])
		}
		function y(e) {
			return e.replace(/left|right|bottom|top/g, (e) => s[e])
		}
		function b(e) {
			return "number" != typeof e
				? { top: 0, right: 0, bottom: 0, left: 0, ...e }
				: { top: e, right: e, bottom: e, left: e }
		}
		function w(e) {
			let { x: t, y: r, width: n, height: o } = e
			return { width: n, height: o, top: r, left: t, right: t + n, bottom: r + o, x: t, y: r }
		}
		function x(e, t, r) {
			let n,
				{ reference: o, floating: a } = e,
				i = h(t),
				l = p(h(t)),
				s = m(l),
				u = c(t),
				d = "y" === i,
				v = o.x + o.width / 2 - a.width / 2,
				g = o.y + o.height / 2 - a.height / 2,
				y = o[s] / 2 - a[s] / 2
			switch (u) {
				case "top":
					n = { x: v, y: o.y - a.height }
					break
				case "bottom":
					n = { x: v, y: o.y + o.height }
					break
				case "right":
					n = { x: o.x + o.width, y: g }
					break
				case "left":
					n = { x: o.x - a.width, y: g }
					break
				default:
					n = { x: o.x, y: o.y }
			}
			switch (f(t)) {
				case "start":
					n[l] -= y * (r && d ? -1 : 1)
					break
				case "end":
					n[l] += y * (r && d ? -1 : 1)
			}
			return n
		}
		let E = async (e, t, r) => {
			let { placement: n = "bottom", strategy: o = "absolute", middleware: a = [], platform: i } = r,
				l = a.filter(Boolean),
				s = await (null == i.isRTL ? void 0 : i.isRTL(t)),
				u = await i.getElementRects({ reference: e, floating: t, strategy: o }),
				{ x: d, y: c } = x(u, n, s),
				f = n,
				p = {},
				m = 0
			for (let r = 0; r < l.length; r++) {
				let { name: a, fn: h } = l[r],
					{
						x: v,
						y: g,
						data: y,
						reset: b,
					} = await h({
						x: d,
						y: c,
						initialPlacement: n,
						placement: f,
						strategy: o,
						middlewareData: p,
						rects: u,
						platform: i,
						elements: { reference: e, floating: t },
					})
				;(d = null != v ? v : d),
					(c = null != g ? g : c),
					(p = { ...p, [a]: { ...p[a], ...y } }),
					b &&
						m <= 50 &&
						(m++,
						"object" == typeof b &&
							(b.placement && (f = b.placement),
							b.rects &&
								(u =
									!0 === b.rects
										? await i.getElementRects({ reference: e, floating: t, strategy: o })
										: b.rects),
							({ x: d, y: c } = x(u, f, s))),
						(r = -1))
			}
			return { x: d, y: c, placement: f, strategy: o, middlewareData: p }
		}
		async function C(e, t) {
			var r
			void 0 === t && (t = {})
			let { x: n, y: o, platform: a, rects: i, elements: l, strategy: s } = e,
				{
					boundary: u = "clippingAncestors",
					rootBoundary: c = "viewport",
					elementContext: f = "floating",
					altBoundary: p = !1,
					padding: m = 0,
				} = d(t, e),
				h = b(m),
				v = l[p ? ("floating" === f ? "reference" : "floating") : f],
				g = w(
					await a.getClippingRect({
						element:
							null == (r = await (null == a.isElement ? void 0 : a.isElement(v))) || r
								? v
								: v.contextElement ||
									(await (null == a.getDocumentElement ? void 0 : a.getDocumentElement(l.floating))),
						boundary: u,
						rootBoundary: c,
						strategy: s,
					}),
				),
				y = "floating" === f ? { x: n, y: o, width: i.floating.width, height: i.floating.height } : i.reference,
				x = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(l.floating)),
				E = ((await (null == a.isElement ? void 0 : a.isElement(x))) &&
					(await (null == a.getScale ? void 0 : a.getScale(x)))) || { x: 1, y: 1 },
				C = w(
					a.convertOffsetParentRelativeRectToViewportRelativeRect
						? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
								elements: l,
								rect: y,
								offsetParent: x,
								strategy: s,
							})
						: y,
				)
			return {
				top: (g.top - C.top + h.top) / E.y,
				bottom: (C.bottom - g.bottom + h.bottom) / E.y,
				left: (g.left - C.left + h.left) / E.x,
				right: (C.right - g.right + h.right) / E.x,
			}
		}
		function k(e, t) {
			return {
				top: e.top - t.height,
				right: e.right - t.width,
				bottom: e.bottom - t.height,
				left: e.left - t.width,
			}
		}
		function R(e) {
			return t.some((t) => e[t] >= 0)
		}
		function S(e) {
			let t = n(...e.map((e) => e.left)),
				r = n(...e.map((e) => e.top))
			return { x: t, y: r, width: o(...e.map((e) => e.right)) - t, height: o(...e.map((e) => e.bottom)) - r }
		}
		async function j(e, t) {
			let { placement: r, platform: n, elements: o } = e,
				a = await (null == n.isRTL ? void 0 : n.isRTL(o.floating)),
				i = c(r),
				l = f(r),
				s = "y" === h(r),
				u = ["left", "top"].includes(i) ? -1 : 1,
				p = a && s ? -1 : 1,
				m = d(t, e),
				{
					mainAxis: v,
					crossAxis: g,
					alignmentAxis: y,
				} = "number" == typeof m
					? { mainAxis: m, crossAxis: 0, alignmentAxis: null }
					: { mainAxis: m.mainAxis || 0, crossAxis: m.crossAxis || 0, alignmentAxis: m.alignmentAxis }
			return (
				l && "number" == typeof y && (g = "end" === l ? -1 * y : y),
				s ? { x: g * p, y: v * u } : { x: v * u, y: g * p }
			)
		}
		function P() {
			return "u" > typeof window
		}
		function D(e) {
			return N(e) ? (e.nodeName || "").toLowerCase() : "#document"
		}
		function T(e) {
			var t
			return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
		}
		function A(e) {
			var t
			return null == (t = (N(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
		}
		function N(e) {
			return !!P() && (e instanceof Node || e instanceof T(e).Node)
		}
		function M(e) {
			return !!P() && (e instanceof Element || e instanceof T(e).Element)
		}
		function _(e) {
			return !!P() && (e instanceof HTMLElement || e instanceof T(e).HTMLElement)
		}
		function O(e) {
			return !(!P() || "u" < typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof T(e).ShadowRoot)
		}
		function L(e) {
			let { overflow: t, overflowX: r, overflowY: n, display: o } = V(e)
			return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o)
		}
		function I(e) {
			return [":popover-open", ":modal"].some((t) => {
				try {
					return e.matches(t)
				} catch (e) {
					return !1
				}
			})
		}
		function F(e) {
			let t = z(),
				r = M(e) ? V(e) : e
			return (
				["transform", "translate", "scale", "rotate", "perspective"].some((e) => !!r[e] && "none" !== r[e]) ||
				(!!r.containerType && "normal" !== r.containerType) ||
				(!t && !!r.backdropFilter && "none" !== r.backdropFilter) ||
				(!t && !!r.filter && "none" !== r.filter) ||
				["transform", "translate", "scale", "rotate", "perspective", "filter"].some((e) =>
					(r.willChange || "").includes(e),
				) ||
				["paint", "layout", "strict", "content"].some((e) => (r.contain || "").includes(e))
			)
		}
		function z() {
			return !("u" < typeof CSS) && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
		}
		function H(e) {
			return ["html", "body", "#document"].includes(D(e))
		}
		function V(e) {
			return T(e).getComputedStyle(e)
		}
		function $(e) {
			return M(e)
				? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
				: { scrollLeft: e.scrollX, scrollTop: e.scrollY }
		}
		function B(e) {
			if ("html" === D(e)) return e
			let t = e.assignedSlot || e.parentNode || (O(e) && e.host) || A(e)
			return O(t) ? t.host : t
		}
		function W(e, t, r) {
			var n
			void 0 === t && (t = []), void 0 === r && (r = !0)
			let o = (function e(t) {
					let r = B(t)
					return H(r) ? (t.ownerDocument ? t.ownerDocument.body : t.body) : _(r) && L(r) ? r : e(r)
				})(e),
				a = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
				i = T(o)
			if (a) {
				let e = U(i)
				return t.concat(i, i.visualViewport || [], L(o) ? o : [], e && r ? W(e) : [])
			}
			return t.concat(o, W(o, [], r))
		}
		function U(e) {
			return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
		}
		function K(e) {
			let t = V(e),
				r = parseFloat(t.width) || 0,
				n = parseFloat(t.height) || 0,
				o = _(e),
				i = o ? e.offsetWidth : r,
				l = o ? e.offsetHeight : n,
				s = a(r) !== i || a(n) !== l
			return s && ((r = i), (n = l)), { width: r, height: n, $: s }
		}
		function Y(e) {
			return M(e) ? e : e.contextElement
		}
		function q(e) {
			let t = Y(e)
			if (!_(t)) return l(1)
			let r = t.getBoundingClientRect(),
				{ width: n, height: o, $: i } = K(t),
				s = (i ? a(r.width) : r.width) / n,
				u = (i ? a(r.height) : r.height) / o
			return (s && Number.isFinite(s)) || (s = 1), (u && Number.isFinite(u)) || (u = 1), { x: s, y: u }
		}
		let X = l(0)
		function G(e) {
			let t = T(e)
			return z() && t.visualViewport ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } : X
		}
		function Z(e, t, r, n) {
			var o
			void 0 === t && (t = !1), void 0 === r && (r = !1)
			let a = e.getBoundingClientRect(),
				i = Y(e),
				s = l(1)
			t && (n ? M(n) && (s = q(n)) : (s = q(e)))
			let u = (void 0 === (o = r) && (o = !1), n && (!o || n === T(i)) && o) ? G(i) : l(0),
				d = (a.left + u.x) / s.x,
				c = (a.top + u.y) / s.y,
				f = a.width / s.x,
				p = a.height / s.y
			if (i) {
				let e = T(i),
					t = n && M(n) ? T(n) : n,
					r = e,
					o = U(r)
				for (; o && n && t !== r; ) {
					let e = q(o),
						t = o.getBoundingClientRect(),
						n = V(o),
						a = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x,
						i = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y
					;(d *= e.x), (c *= e.y), (f *= e.x), (p *= e.y), (d += a), (c += i), (o = U((r = T(o))))
				}
			}
			return w({ width: f, height: p, x: d, y: c })
		}
		function Q(e, t) {
			let r = $(e).scrollLeft
			return t ? t.left + r : Z(A(e)).left + r
		}
		function J(e, t, r) {
			void 0 === r && (r = !1)
			let n = e.getBoundingClientRect()
			return { x: n.left + t.scrollLeft - (r ? 0 : Q(e, n)), y: n.top + t.scrollTop }
		}
		function ee(e, t, r) {
			var n
			let a
			if ("viewport" === t)
				a = (function (e, t) {
					let r = T(e),
						n = A(e),
						o = r.visualViewport,
						a = n.clientWidth,
						i = n.clientHeight,
						l = 0,
						s = 0
					if (o) {
						;(a = o.width), (i = o.height)
						let e = z()
						;(!e || (e && "fixed" === t)) && ((l = o.offsetLeft), (s = o.offsetTop))
					}
					return { width: a, height: i, x: l, y: s }
				})(e, r)
			else if ("document" === t) {
				let t, r, i, l, s, u, d
				;(n = A(e)),
					(t = A(n)),
					(r = $(n)),
					(i = n.ownerDocument.body),
					(l = o(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth)),
					(s = o(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight)),
					(u = -r.scrollLeft + Q(n)),
					(d = -r.scrollTop),
					"rtl" === V(i).direction && (u += o(t.clientWidth, i.clientWidth) - l),
					(a = { width: l, height: s, x: u, y: d })
			} else if (M(t)) {
				let e, n, o, i, s, u
				;(n = (e = Z(t, !0, "fixed" === r)).top + t.clientTop),
					(o = e.left + t.clientLeft),
					(i = _(t) ? q(t) : l(1)),
					(s = t.clientWidth * i.x),
					(u = t.clientHeight * i.y),
					(a = { width: s, height: u, x: o * i.x, y: n * i.y })
			} else {
				let r = G(e)
				a = { x: t.x - r.x, y: t.y - r.y, width: t.width, height: t.height }
			}
			return w(a)
		}
		function et(e) {
			return "static" === V(e).position
		}
		function er(e, t) {
			if (!_(e) || "fixed" === V(e).position) return null
			if (t) return t(e)
			let r = e.offsetParent
			return A(e) === r && (r = r.ownerDocument.body), r
		}
		function en(e, t) {
			let r = T(e)
			if (I(e)) return r
			if (!_(e)) {
				let t = B(e)
				for (; t && !H(t); ) {
					if (M(t) && !et(t)) return t
					t = B(t)
				}
				return r
			}
			let n = er(e, t)
			for (; n && ["table", "td", "th"].includes(D(n)) && et(n); ) n = er(n, t)
			return n && H(n) && et(n) && !F(n)
				? r
				: n ||
						(function (e) {
							let t = B(e)
							for (; _(t) && !H(t); ) {
								if (F(t)) return t
								if (I(t)) break
								t = B(t)
							}
							return null
						})(e) ||
						r
		}
		let eo = async function (e) {
				let t = this.getOffsetParent || en,
					r = this.getDimensions,
					n = await r(e.floating)
				return {
					reference: (function (e, t, r) {
						let n = _(t),
							o = A(t),
							a = "fixed" === r,
							i = Z(e, !0, a, t),
							s = { scrollLeft: 0, scrollTop: 0 },
							u = l(0)
						if (n || (!n && !a))
							if ((("body" !== D(t) || L(o)) && (s = $(t)), n)) {
								let e = Z(t, !0, a, t)
								;(u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop)
							} else o && (u.x = Q(o))
						a && !n && o && (u.x = Q(o))
						let d = !o || n || a ? l(0) : J(o, s)
						return {
							x: i.left + s.scrollLeft - u.x - d.x,
							y: i.top + s.scrollTop - u.y - d.y,
							width: i.width,
							height: i.height,
						}
					})(e.reference, await t(e.floating), e.strategy),
					floating: { x: 0, y: 0, width: n.width, height: n.height },
				}
			},
			ea = {
				convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
					let { elements: t, rect: r, offsetParent: n, strategy: o } = e,
						a = "fixed" === o,
						i = A(n),
						s = !!t && I(t.floating)
					if (n === i || (s && a)) return r
					let u = { scrollLeft: 0, scrollTop: 0 },
						d = l(1),
						c = l(0),
						f = _(n)
					if ((f || (!f && !a)) && (("body" !== D(n) || L(i)) && (u = $(n)), _(n))) {
						let e = Z(n)
						;(d = q(n)), (c.x = e.x + n.clientLeft), (c.y = e.y + n.clientTop)
					}
					let p = !i || f || a ? l(0) : J(i, u, !0)
					return {
						width: r.width * d.x,
						height: r.height * d.y,
						x: r.x * d.x - u.scrollLeft * d.x + c.x + p.x,
						y: r.y * d.y - u.scrollTop * d.y + c.y + p.y,
					}
				},
				getDocumentElement: A,
				getClippingRect: function (e) {
					let { element: t, boundary: r, rootBoundary: a, strategy: i } = e,
						l = [
							...("clippingAncestors" === r
								? I(t)
									? []
									: (function (e, t) {
											let r = t.get(e)
											if (r) return r
											let n = W(e, [], !1).filter((e) => M(e) && "body" !== D(e)),
												o = null,
												a = "fixed" === V(e).position,
												i = a ? B(e) : e
											for (; M(i) && !H(i); ) {
												let t = V(i),
													r = F(i)
												r || "fixed" !== t.position || (o = null),
													(
														a
															? !r && !o
															: (!r &&
																	"static" === t.position &&
																	!!o &&
																	["absolute", "fixed"].includes(o.position)) ||
																(L(i) &&
																	!r &&
																	(function e(t, r) {
																		let n = B(t)
																		return (
																			!(n === r || !M(n) || H(n)) &&
																			("fixed" === V(n).position || e(n, r))
																		)
																	})(e, i))
													)
														? (n = n.filter((e) => e !== i))
														: (o = t),
													(i = B(i))
											}
											return t.set(e, n), n
										})(t, this._c)
								: [].concat(r)),
							a,
						],
						s = l[0],
						u = l.reduce(
							(e, r) => {
								let a = ee(t, r, i)
								return (
									(e.top = o(a.top, e.top)),
									(e.right = n(a.right, e.right)),
									(e.bottom = n(a.bottom, e.bottom)),
									(e.left = o(a.left, e.left)),
									e
								)
							},
							ee(t, s, i),
						)
					return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top }
				},
				getOffsetParent: en,
				getElementRects: eo,
				getClientRects: function (e) {
					return Array.from(e.getClientRects())
				},
				getDimensions: function (e) {
					let { width: t, height: r } = K(e)
					return { width: t, height: r }
				},
				getScale: q,
				isElement: M,
				isRTL: function (e) {
					return "rtl" === V(e).direction
				},
			}
		function ei(e, t) {
			return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
		}
		function el(e, t, r, a) {
			let l
			void 0 === a && (a = {})
			let {
					ancestorScroll: s = !0,
					ancestorResize: u = !0,
					elementResize: d = "function" == typeof ResizeObserver,
					layoutShift: c = "function" == typeof IntersectionObserver,
					animationFrame: f = !1,
				} = a,
				p = Y(e),
				m = s || u ? [...(p ? W(p) : []), ...W(t)] : []
			m.forEach((e) => {
				s && e.addEventListener("scroll", r, { passive: !0 }), u && e.addEventListener("resize", r)
			})
			let h =
					p && c
						? (function (e, t) {
								let r,
									a = null,
									l = A(e)
								function s() {
									var e
									clearTimeout(r), null == (e = a) || e.disconnect(), (a = null)
								}
								return (
									!(function u(d, c) {
										void 0 === d && (d = !1), void 0 === c && (c = 1), s()
										let f = e.getBoundingClientRect(),
											{ left: p, top: m, width: h, height: v } = f
										if ((d || t(), !h || !v)) return
										let g = {
												rootMargin:
													-i(m) +
													"px " +
													-i(l.clientWidth - (p + h)) +
													"px " +
													-i(l.clientHeight - (m + v)) +
													"px " +
													-i(p) +
													"px",
												threshold: o(0, n(1, c)) || 1,
											},
											y = !0
										function b(t) {
											let n = t[0].intersectionRatio
											if (n !== c) {
												if (!y) return u()
												n
													? u(!1, n)
													: (r = setTimeout(() => {
															u(!1, 1e-7)
														}, 1e3))
											}
											1 !== n || ei(f, e.getBoundingClientRect()) || u(), (y = !1)
										}
										try {
											a = new IntersectionObserver(b, { ...g, root: l.ownerDocument })
										} catch (e) {
											a = new IntersectionObserver(b, g)
										}
										a.observe(e)
									})(!0),
									s
								)
							})(p, r)
						: null,
				v = -1,
				g = null
			d &&
				((g = new ResizeObserver((e) => {
					let [n] = e
					n &&
						n.target === p &&
						g &&
						(g.unobserve(t),
						cancelAnimationFrame(v),
						(v = requestAnimationFrame(() => {
							var e
							null == (e = g) || e.observe(t)
						}))),
						r()
				})),
				p && !f && g.observe(p),
				g.observe(t))
			let y = f ? Z(e) : null
			return (
				f &&
					(function t() {
						let n = Z(e)
						y && !ei(y, n) && r(), (y = n), (l = requestAnimationFrame(t))
					})(),
				r(),
				() => {
					var e
					m.forEach((e) => {
						s && e.removeEventListener("scroll", r), u && e.removeEventListener("resize", r)
					}),
						null == h || h(),
						null == (e = g) || e.disconnect(),
						(g = null),
						f && cancelAnimationFrame(l)
				}
			)
		}
		let es = function (e) {
				return (
					void 0 === e && (e = 0),
					{
						name: "offset",
						options: e,
						async fn(t) {
							var r, n
							let { x: o, y: a, placement: i, middlewareData: l } = t,
								s = await j(t, e)
							return i === (null == (r = l.offset) ? void 0 : r.placement) &&
								null != (n = l.arrow) &&
								n.alignmentOffset
								? {}
								: { x: o + s.x, y: a + s.y, data: { ...s, placement: i } }
						},
					}
				)
			},
			eu = function (e) {
				return (
					void 0 === e && (e = {}),
					{
						name: "autoPlacement",
						options: e,
						async fn(t) {
							var n, o, a, i
							let { rects: l, middlewareData: s, placement: u, platform: p, elements: m } = t,
								{
									crossAxis: h = !1,
									alignment: y,
									allowedPlacements: b = r,
									autoAlignment: w = !0,
									...x
								} = d(e, t),
								E =
									void 0 !== y || b === r
										? ((i = y || null)
												? [...b.filter((e) => f(e) === i), ...b.filter((e) => f(e) !== i)]
												: b.filter((e) => c(e) === e)
											).filter((e) => !i || f(e) === i || (!!w && g(e) !== e))
										: b,
								k = await C(t, x),
								R = (null == (n = s.autoPlacement) ? void 0 : n.index) || 0,
								S = E[R]
							if (null == S) return {}
							let j = v(S, l, await (null == p.isRTL ? void 0 : p.isRTL(m.floating)))
							if (u !== S) return { reset: { placement: E[0] } }
							let P = [k[c(S)], k[j[0]], k[j[1]]],
								D = [
									...((null == (o = s.autoPlacement) ? void 0 : o.overflows) || []),
									{ placement: S, overflows: P },
								],
								T = E[R + 1]
							if (T) return { data: { index: R + 1, overflows: D }, reset: { placement: T } }
							let A = D.map((e) => {
									let t = f(e.placement)
									return [
										e.placement,
										t && h ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0],
										e.overflows,
									]
								}).sort((e, t) => e[1] - t[1]),
								N =
									(null ==
									(a = A.filter((e) => e[2].slice(0, f(e[0]) ? 2 : 3).every((e) => e <= 0))[0])
										? void 0
										: a[0]) || A[0][0]
							return N !== u ? { data: { index: R + 1, overflows: D }, reset: { placement: N } } : {}
						},
					}
				)
			},
			ed = function (e) {
				return (
					void 0 === e && (e = {}),
					{
						name: "shift",
						options: e,
						async fn(t) {
							let { x: r, y: a, placement: i } = t,
								{
									mainAxis: l = !0,
									crossAxis: s = !1,
									limiter: u = {
										fn: (e) => {
											let { x: t, y: r } = e
											return { x: t, y: r }
										},
									},
									...f
								} = d(e, t),
								m = { x: r, y: a },
								v = await C(t, f),
								g = h(c(i)),
								y = p(g),
								b = m[y],
								w = m[g]
							if (l) {
								let e = "y" === y ? "top" : "left",
									t = "y" === y ? "bottom" : "right",
									r = b + v[e],
									a = b - v[t]
								b = o(r, n(b, a))
							}
							if (s) {
								let e = "y" === g ? "top" : "left",
									t = "y" === g ? "bottom" : "right",
									r = w + v[e],
									a = w - v[t]
								w = o(r, n(w, a))
							}
							let x = u.fn({ ...t, [y]: b, [g]: w })
							return { ...x, data: { x: x.x - r, y: x.y - a, enabled: { [y]: l, [g]: s } } }
						},
					}
				)
			},
			ec = function (e) {
				return (
					void 0 === e && (e = {}),
					{
						name: "flip",
						options: e,
						async fn(t) {
							var r, n, o, a, i, l
							let s,
								u,
								p,
								{
									placement: m,
									middlewareData: b,
									rects: w,
									initialPlacement: x,
									platform: E,
									elements: k,
								} = t,
								{
									mainAxis: R = !0,
									crossAxis: S = !0,
									fallbackPlacements: j,
									fallbackStrategy: P = "bestFit",
									fallbackAxisSideDirection: D = "none",
									flipAlignment: T = !0,
									...A
								} = d(e, t)
							if (null != (r = b.arrow) && r.alignmentOffset) return {}
							let N = c(m),
								M = h(x),
								_ = c(x) === x,
								O = await (null == E.isRTL ? void 0 : E.isRTL(k.floating)),
								L = j || (_ || !T ? [y(x)] : ((s = y(x)), [g(x), s, g(s)])),
								I = "none" !== D
							!j &&
								I &&
								L.push(
									...((u = f(x)),
									(p = (function (e, t, r) {
										let n = ["left", "right"],
											o = ["right", "left"]
										switch (e) {
											case "top":
											case "bottom":
												if (r) return t ? o : n
												return t ? n : o
											case "left":
											case "right":
												return t ? ["top", "bottom"] : ["bottom", "top"]
											default:
												return []
										}
									})(c(x), "start" === D, O)),
									u && ((p = p.map((e) => e + "-" + u)), T && (p = p.concat(p.map(g)))),
									p),
								)
							let F = [x, ...L],
								z = await C(t, A),
								H = [],
								V = (null == (n = b.flip) ? void 0 : n.overflows) || []
							if ((R && H.push(z[N]), S)) {
								let e = v(m, w, O)
								H.push(z[e[0]], z[e[1]])
							}
							if (((V = [...V, { placement: m, overflows: H }]), !H.every((e) => e <= 0))) {
								let e = ((null == (o = b.flip) ? void 0 : o.index) || 0) + 1,
									t = F[e]
								if (t) {
									let r = "alignment" === S && M !== h(t),
										n = (null == (i = V[0]) ? void 0 : i.overflows[0]) > 0
									if (!r || n) return { data: { index: e, overflows: V }, reset: { placement: t } }
								}
								let r =
									null ==
									(a = V.filter((e) => e.overflows[0] <= 0).sort(
										(e, t) => e.overflows[1] - t.overflows[1],
									)[0])
										? void 0
										: a.placement
								if (!r)
									switch (P) {
										case "bestFit": {
											let e =
												null ==
												(l = V.filter((e) => {
													if (I) {
														let t = h(e.placement)
														return t === M || "y" === t
													}
													return !0
												})
													.map((e) => [
														e.placement,
														e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0),
													])
													.sort((e, t) => e[1] - t[1])[0])
													? void 0
													: l[0]
											e && (r = e)
											break
										}
										case "initialPlacement":
											r = x
									}
								if (m !== r) return { reset: { placement: r } }
							}
							return {}
						},
					}
				)
			},
			ef = function (e) {
				return (
					void 0 === e && (e = {}),
					{
						name: "size",
						options: e,
						async fn(t) {
							var r, a
							let i,
								l,
								{ placement: s, rects: u, platform: p, elements: m } = t,
								{ apply: v = () => {}, ...g } = d(e, t),
								y = await C(t, g),
								b = c(s),
								w = f(s),
								x = "y" === h(s),
								{ width: E, height: k } = u.floating
							"top" === b || "bottom" === b
								? ((i = b),
									(l =
										w ===
										((await (null == p.isRTL ? void 0 : p.isRTL(m.floating))) ? "start" : "end")
											? "left"
											: "right"))
								: ((l = b), (i = "end" === w ? "top" : "bottom"))
							let R = k - y.top - y.bottom,
								S = E - y.left - y.right,
								j = n(k - y[i], R),
								P = n(E - y[l], S),
								D = !t.middlewareData.shift,
								T = j,
								A = P
							if (
								(null != (r = t.middlewareData.shift) && r.enabled.x && (A = S),
								null != (a = t.middlewareData.shift) && a.enabled.y && (T = R),
								D && !w)
							) {
								let e = o(y.left, 0),
									t = o(y.right, 0),
									r = o(y.top, 0),
									n = o(y.bottom, 0)
								x
									? (A = E - 2 * (0 !== e || 0 !== t ? e + t : o(y.left, y.right)))
									: (T = k - 2 * (0 !== r || 0 !== n ? r + n : o(y.top, y.bottom)))
							}
							await v({ ...t, availableWidth: A, availableHeight: T })
							let N = await p.getDimensions(m.floating)
							return E !== N.width || k !== N.height ? { reset: { rects: !0 } } : {}
						},
					}
				)
			},
			ep = function (e) {
				return (
					void 0 === e && (e = {}),
					{
						name: "hide",
						options: e,
						async fn(t) {
							let { rects: r } = t,
								{ strategy: n = "referenceHidden", ...o } = d(e, t)
							switch (n) {
								case "referenceHidden": {
									let e = k(await C(t, { ...o, elementContext: "reference" }), r.reference)
									return { data: { referenceHiddenOffsets: e, referenceHidden: R(e) } }
								}
								case "escaped": {
									let e = k(await C(t, { ...o, altBoundary: !0 }), r.floating)
									return { data: { escapedOffsets: e, escaped: R(e) } }
								}
								default:
									return {}
							}
						},
					}
				)
			},
			em = (e) => ({
				name: "arrow",
				options: e,
				async fn(t) {
					let { x: r, y: a, placement: i, rects: l, platform: s, elements: u, middlewareData: c } = t,
						{ element: v, padding: g = 0 } = d(e, t) || {}
					if (null == v) return {}
					let y = b(g),
						w = { x: r, y: a },
						x = p(h(i)),
						E = m(x),
						C = await s.getDimensions(v),
						k = "y" === x,
						R = k ? "clientHeight" : "clientWidth",
						S = l.reference[E] + l.reference[x] - w[x] - l.floating[E],
						j = w[x] - l.reference[x],
						P = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(v)),
						D = P ? P[R] : 0
					;(D && (await (null == s.isElement ? void 0 : s.isElement(P)))) ||
						(D = u.floating[R] || l.floating[E])
					let T = D / 2 - C[E] / 2 - 1,
						A = n(y[k ? "top" : "left"], T),
						N = n(y[k ? "bottom" : "right"], T),
						M = D - C[E] - N,
						_ = D / 2 - C[E] / 2 + (S / 2 - j / 2),
						O = o(A, n(_, M)),
						L = !c.arrow && null != f(i) && _ !== O && l.reference[E] / 2 - (_ < A ? A : N) - C[E] / 2 < 0,
						I = L ? (_ < A ? _ - A : _ - M) : 0
					return {
						[x]: w[x] + I,
						data: { [x]: O, centerOffset: _ - O - I, ...(L && { alignmentOffset: I }) },
						reset: L,
					}
				},
			}),
			eh = function (e) {
				return (
					void 0 === e && (e = {}),
					{
						name: "inline",
						options: e,
						async fn(t) {
							let { placement: r, elements: a, rects: i, platform: l, strategy: s } = t,
								{ padding: u = 2, x: f, y: p } = d(e, t),
								m = Array.from(
									(await (null == l.getClientRects ? void 0 : l.getClientRects(a.reference))) || [],
								),
								v = (function (e) {
									let t = e.slice().sort((e, t) => e.y - t.y),
										r = [],
										n = null
									for (let e = 0; e < t.length; e++) {
										let o = t[e]
										!n || o.y - n.y > n.height / 2 ? r.push([o]) : r[r.length - 1].push(o), (n = o)
									}
									return r.map((e) => w(S(e)))
								})(m),
								g = w(S(m)),
								y = b(u),
								x = await l.getElementRects({
									reference: {
										getBoundingClientRect: function () {
											if (2 === v.length && v[0].left > v[1].right && null != f && null != p)
												return (
													v.find(
														(e) =>
															f > e.left - y.left &&
															f < e.right + y.right &&
															p > e.top - y.top &&
															p < e.bottom + y.bottom,
													) || g
												)
											if (v.length >= 2) {
												if ("y" === h(r)) {
													let e = v[0],
														t = v[v.length - 1],
														n = "top" === c(r),
														o = e.top,
														a = t.bottom,
														i = n ? e.left : t.left,
														l = n ? e.right : t.right
													return {
														top: o,
														bottom: a,
														left: i,
														right: l,
														width: l - i,
														height: a - o,
														x: i,
														y: o,
													}
												}
												let e = "left" === c(r),
													t = o(...v.map((e) => e.right)),
													a = n(...v.map((e) => e.left)),
													i = v.filter((r) => (e ? r.left === a : r.right === t)),
													l = i[0].top,
													s = i[i.length - 1].bottom
												return {
													top: l,
													bottom: s,
													left: a,
													right: t,
													width: t - a,
													height: s - l,
													x: a,
													y: l,
												}
											}
											return g
										},
									},
									floating: a.floating,
									strategy: s,
								})
							return i.reference.x !== x.reference.x ||
								i.reference.y !== x.reference.y ||
								i.reference.width !== x.reference.width ||
								i.reference.height !== x.reference.height
								? { reset: { rects: x } }
								: {}
						},
					}
				)
			},
			ev = function (e) {
				return (
					void 0 === e && (e = {}),
					{
						options: e,
						fn(t) {
							let { x: r, y: n, placement: o, rects: a, middlewareData: i } = t,
								{ offset: l = 0, mainAxis: s = !0, crossAxis: u = !0 } = d(e, t),
								f = { x: r, y: n },
								m = h(o),
								v = p(m),
								g = f[v],
								y = f[m],
								b = d(l, t),
								w =
									"number" == typeof b
										? { mainAxis: b, crossAxis: 0 }
										: { mainAxis: 0, crossAxis: 0, ...b }
							if (s) {
								let e = "y" === v ? "height" : "width",
									t = a.reference[v] - a.floating[e] + w.mainAxis,
									r = a.reference[v] + a.reference[e] - w.mainAxis
								g < t ? (g = t) : g > r && (g = r)
							}
							if (u) {
								var x, E
								let e = "y" === v ? "width" : "height",
									t = ["top", "left"].includes(c(o)),
									r =
										a.reference[m] -
										a.floating[e] +
										((t && (null == (x = i.offset) ? void 0 : x[m])) || 0) +
										(t ? 0 : w.crossAxis),
									n =
										a.reference[m] +
										a.reference[e] +
										(t ? 0 : (null == (E = i.offset) ? void 0 : E[m]) || 0) -
										(t ? w.crossAxis : 0)
								y < r ? (y = r) : y > n && (y = n)
							}
							return { [v]: g, [m]: y }
						},
					}
				)
			},
			eg = (e, t, r) => {
				let n = new Map(),
					o = { platform: ea, ...r },
					a = { ...o.platform, _c: n }
				return E(e, t, { ...o, platform: a })
			}
		e.s(
			[
				"arrow",
				() => em,
				"autoPlacement",
				() => eu,
				"autoUpdate",
				() => el,
				"computePosition",
				() => eg,
				"flip",
				() => ec,
				"hide",
				() => ep,
				"inline",
				() => eh,
				"limitShift",
				() => ev,
				"offset",
				() => es,
				"shift",
				() => ed,
				"size",
				() => ef,
			],
			88832,
		)
		var ey = e.i(10008),
			eb = e.i(68069),
			ew = "u" > typeof document ? ey.useLayoutEffect : ey.useEffect
		function ex(e, t) {
			let r, n, o
			if (e === t) return !0
			if (typeof e != typeof t) return !1
			if ("function" == typeof e && e.toString() === t.toString()) return !0
			if (e && t && "object" == typeof e) {
				if (Array.isArray(e)) {
					if ((r = e.length) !== t.length) return !1
					for (n = r; 0 != n--; ) if (!ex(e[n], t[n])) return !1
					return !0
				}
				if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1
				for (n = r; 0 != n--; ) if (!{}.hasOwnProperty.call(t, o[n])) return !1
				for (n = r; 0 != n--; ) {
					let r = o[n]
					if (("_owner" !== r || !e.$$typeof) && !ex(e[r], t[r])) return !1
				}
				return !0
			}
			return e != e && t != t
		}
		function eE(e) {
			return "u" < typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
		}
		function eC(e, t) {
			let r = eE(e)
			return Math.round(t * r) / r
		}
		function ek(e) {
			let t = ey.useRef(e)
			return (
				ew(() => {
					t.current = e
				}),
				t
			)
		}
		function eR(e) {
			void 0 === e && (e = {})
			let {
					placement: t = "bottom",
					strategy: r = "absolute",
					middleware: n = [],
					platform: o,
					elements: { reference: a, floating: i } = {},
					transform: l = !0,
					whileElementsMounted: s,
					open: u,
				} = e,
				[d, c] = ey.useState({ x: 0, y: 0, strategy: r, placement: t, middlewareData: {}, isPositioned: !1 }),
				[f, p] = ey.useState(n)
			ex(f, n) || p(n)
			let [m, h] = ey.useState(null),
				[v, g] = ey.useState(null),
				y = ey.useCallback((e) => {
					e !== E.current && ((E.current = e), h(e))
				}, []),
				b = ey.useCallback((e) => {
					e !== C.current && ((C.current = e), g(e))
				}, []),
				w = a || m,
				x = i || v,
				E = ey.useRef(null),
				C = ey.useRef(null),
				k = ey.useRef(d),
				R = null != s,
				S = ek(s),
				j = ek(o),
				P = ek(u),
				D = ey.useCallback(() => {
					if (!E.current || !C.current) return
					let e = { placement: t, strategy: r, middleware: f }
					j.current && (e.platform = j.current),
						eg(E.current, C.current, e).then((e) => {
							let t = { ...e, isPositioned: !1 !== P.current }
							T.current &&
								!ex(k.current, t) &&
								((k.current = t),
								eb.flushSync(() => {
									c(t)
								}))
						})
				}, [f, t, r, j, P])
			ew(() => {
				!1 === u &&
					k.current.isPositioned &&
					((k.current.isPositioned = !1), c((e) => ({ ...e, isPositioned: !1 })))
			}, [u])
			let T = ey.useRef(!1)
			ew(
				() => (
					(T.current = !0),
					() => {
						T.current = !1
					}
				),
				[],
			),
				ew(() => {
					if ((w && (E.current = w), x && (C.current = x), w && x)) {
						if (S.current) return S.current(w, x, D)
						D()
					}
				}, [w, x, D, S, R])
			let A = ey.useMemo(() => ({ reference: E, floating: C, setReference: y, setFloating: b }), [y, b]),
				N = ey.useMemo(() => ({ reference: w, floating: x }), [w, x]),
				M = ey.useMemo(() => {
					let e = { position: r, left: 0, top: 0 }
					if (!N.floating) return e
					let t = eC(N.floating, d.x),
						n = eC(N.floating, d.y)
					return l
						? {
								...e,
								transform: "translate(" + t + "px, " + n + "px)",
								...(eE(N.floating) >= 1.5 && { willChange: "transform" }),
							}
						: { position: r, left: t, top: n }
				}, [r, l, N.floating, d.x, d.y])
			return ey.useMemo(() => ({ ...d, update: D, refs: A, elements: N, floatingStyles: M }), [d, D, A, N, M])
		}
		let eS = (e, t) => ({ ...es(e), options: [e, t] }),
			ej = (e, t) => ({ ...ed(e), options: [e, t] }),
			eP = (e, t) => ({ ...ev(e), options: [e, t] }),
			eD = (e, t) => ({ ...ec(e), options: [e, t] }),
			eT = (e, t) => ({ ...ef(e), options: [e, t] }),
			eA = (e, t) => ({ ...ep(e), options: [e, t] }),
			eN = (e, t) => ({
				name: "arrow",
				options: e,
				fn(t) {
					let { element: r, padding: n } = "function" == typeof e ? e(t) : e
					return r && {}.hasOwnProperty.call(r, "current")
						? null != r.current
							? em({ element: r.current, padding: n }).fn(t)
							: {}
						: r
							? em({ element: r, padding: n }).fn(t)
							: {}
				},
				options: [e, t],
			})
		e.s(
			[
				"arrow",
				() => eN,
				"flip",
				() => eD,
				"hide",
				() => eA,
				"limitShift",
				() => eP,
				"offset",
				() => eS,
				"shift",
				() => ej,
				"size",
				() => eT,
				"useFloating",
				() => eR,
			],
			97895,
		)
	},
	68307,
	(e) => {
		"use strict"
		var t = e.i(10008),
			r = e.i(97895),
			n = e.i(88832),
			o = e.i(66791),
			a = e.i(8026),
			i = t.forwardRef((e, t) => {
				let { children: r, width: n = 10, height: i = 5, ...l } = e
				return (0, a.jsx)(o.Primitive.svg, {
					...l,
					ref: t,
					width: n,
					height: i,
					viewBox: "0 0 30 10",
					preserveAspectRatio: "none",
					children: e.asChild ? r : (0, a.jsx)("polygon", { points: "0,0 30,0 15,10" }),
				})
			})
		i.displayName = "Arrow"
		var l = e.i(26613),
			s = e.i(4113),
			u = e.i(84123),
			d = e.i(29241),
			c = e.i(43984),
			f = "Popper",
			[p, m] = (0, s.createContextScope)(f),
			[h, v] = p(f),
			g = (e) => {
				let { __scopePopper: r, children: n } = e,
					[o, i] = t.useState(null)
				return (0, a.jsx)(h, { scope: r, anchor: o, onAnchorChange: i, children: n })
			}
		g.displayName = f
		var y = "PopperAnchor",
			b = t.forwardRef((e, r) => {
				let { __scopePopper: n, virtualRef: i, ...s } = e,
					u = v(y, n),
					d = t.useRef(null),
					c = (0, l.useComposedRefs)(r, d)
				return (
					t.useEffect(() => {
						u.onAnchorChange(i?.current || d.current)
					}),
					i ? null : (0, a.jsx)(o.Primitive.div, { ...s, ref: c })
				)
			})
		b.displayName = y
		var w = "PopperContent",
			[x, E] = p(w),
			C = t.forwardRef((e, i) => {
				let {
						__scopePopper: s,
						side: f = "bottom",
						sideOffset: p = 0,
						align: m = "center",
						alignOffset: h = 0,
						arrowPadding: g = 0,
						avoidCollisions: y = !0,
						collisionBoundary: b = [],
						collisionPadding: E = 0,
						sticky: C = "partial",
						hideWhenDetached: k = !1,
						updatePositionStrategy: R = "optimized",
						onPlaced: S,
						...T
					} = e,
					A = v(w, s),
					[N, M] = t.useState(null),
					_ = (0, l.useComposedRefs)(i, (e) => M(e)),
					[O, L] = t.useState(null),
					I = (0, c.useSize)(O),
					F = I?.width ?? 0,
					z = I?.height ?? 0,
					H = "number" == typeof E ? E : { top: 0, right: 0, bottom: 0, left: 0, ...E },
					V = Array.isArray(b) ? b : [b],
					$ = V.length > 0,
					B = { padding: H, boundary: V.filter(j), altBoundary: $ },
					{
						refs: W,
						floatingStyles: U,
						placement: K,
						isPositioned: Y,
						middlewareData: q,
					} = (0, r.useFloating)({
						strategy: "fixed",
						placement: f + ("center" !== m ? "-" + m : ""),
						whileElementsMounted: (...e) => (0, n.autoUpdate)(...e, { animationFrame: "always" === R }),
						elements: { reference: A.anchor },
						middleware: [
							(0, r.offset)({ mainAxis: p + z, alignmentAxis: h }),
							y &&
								(0, r.shift)({
									mainAxis: !0,
									crossAxis: !1,
									limiter: "partial" === C ? (0, r.limitShift)() : void 0,
									...B,
								}),
							y && (0, r.flip)({ ...B }),
							(0, r.size)({
								...B,
								apply: ({ elements: e, rects: t, availableWidth: r, availableHeight: n }) => {
									let { width: o, height: a } = t.reference,
										i = e.floating.style
									i.setProperty("--radix-popper-available-width", `${r}px`),
										i.setProperty("--radix-popper-available-height", `${n}px`),
										i.setProperty("--radix-popper-anchor-width", `${o}px`),
										i.setProperty("--radix-popper-anchor-height", `${a}px`)
								},
							}),
							O && (0, r.arrow)({ element: O, padding: g }),
							P({ arrowWidth: F, arrowHeight: z }),
							k && (0, r.hide)({ strategy: "referenceHidden", ...B }),
						],
					}),
					[X, G] = D(K),
					Z = (0, u.useCallbackRef)(S)
				;(0, d.useLayoutEffect)(() => {
					Y && Z?.()
				}, [Y, Z])
				let Q = q.arrow?.x,
					J = q.arrow?.y,
					ee = q.arrow?.centerOffset !== 0,
					[et, er] = t.useState()
				return (
					(0, d.useLayoutEffect)(() => {
						N && er(window.getComputedStyle(N).zIndex)
					}, [N]),
					(0, a.jsx)("div", {
						ref: W.setFloating,
						"data-radix-popper-content-wrapper": "",
						style: {
							...U,
							transform: Y ? U.transform : "translate(0, -200%)",
							minWidth: "max-content",
							zIndex: et,
							"--radix-popper-transform-origin": [q.transformOrigin?.x, q.transformOrigin?.y].join(" "),
							...(q.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" }),
						},
						dir: e.dir,
						children: (0, a.jsx)(x, {
							scope: s,
							placedSide: X,
							onArrowChange: L,
							arrowX: Q,
							arrowY: J,
							shouldHideArrow: ee,
							children: (0, a.jsx)(o.Primitive.div, {
								"data-side": X,
								"data-align": G,
								...T,
								ref: _,
								style: { ...T.style, animation: Y ? void 0 : "none" },
							}),
						}),
					})
				)
			})
		C.displayName = w
		var k = "PopperArrow",
			R = { top: "bottom", right: "left", bottom: "top", left: "right" },
			S = t.forwardRef(function (e, t) {
				let { __scopePopper: r, ...n } = e,
					o = E(k, r),
					l = R[o.placedSide]
				return (0, a.jsx)("span", {
					ref: o.onArrowChange,
					style: {
						position: "absolute",
						left: o.arrowX,
						top: o.arrowY,
						[l]: 0,
						transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide],
						transform: {
							top: "translateY(100%)",
							right: "translateY(50%) rotate(90deg) translateX(-50%)",
							bottom: "rotate(180deg)",
							left: "translateY(50%) rotate(-90deg) translateX(50%)",
						}[o.placedSide],
						visibility: o.shouldHideArrow ? "hidden" : void 0,
					},
					children: (0, a.jsx)(i, { ...n, ref: t, style: { ...n.style, display: "block" } }),
				})
			})
		function j(e) {
			return null !== e
		}
		S.displayName = k
		var P = (e) => ({
			name: "transformOrigin",
			options: e,
			fn(t) {
				let { placement: r, rects: n, middlewareData: o } = t,
					a = o.arrow?.centerOffset !== 0,
					i = a ? 0 : e.arrowWidth,
					l = a ? 0 : e.arrowHeight,
					[s, u] = D(r),
					d = { start: "0%", center: "50%", end: "100%" }[u],
					c = (o.arrow?.x ?? 0) + i / 2,
					f = (o.arrow?.y ?? 0) + l / 2,
					p = "",
					m = ""
				return (
					"bottom" === s
						? ((p = a ? d : `${c}px`), (m = `${-l}px`))
						: "top" === s
							? ((p = a ? d : `${c}px`), (m = `${n.floating.height + l}px`))
							: "right" === s
								? ((p = `${-l}px`), (m = a ? d : `${f}px`))
								: "left" === s && ((p = `${n.floating.width + l}px`), (m = a ? d : `${f}px`)),
					{ data: { x: p, y: m } }
				)
			},
		})
		function D(e) {
			let [t, r = "center"] = e.split("-")
			return [t, r]
		}
		e.s(
			["Anchor", () => b, "Arrow", () => S, "Content", () => C, "Root", () => g, "createPopperScope", () => m],
			68307,
		)
	},
	710,
	(e) => {
		"use strict"
		var t = e.i(8026),
			r = e.i(10008),
			n = e.i(75453),
			o = e.i(26613),
			a = e.i(4113),
			i = e.i(93180),
			l = e.i(66791),
			s = e.i(46534),
			u = e.i(78883),
			d = e.i(34692),
			c = e.i(77543),
			f = e.i(74382),
			p = e.i(55162),
			m = e.i(68307),
			h = e.i(85326),
			v = e.i(98753),
			g = e.i(84123),
			y = "rovingFocusGroup.onEntryFocus",
			b = { bubbles: !1, cancelable: !0 },
			w = "RovingFocusGroup",
			[x, E, C] = (0, s.createCollection)(w),
			[k, R] = (0, a.createContextScope)(w, [C]),
			[S, j] = k(w),
			P = r.forwardRef((e, r) =>
				(0, t.jsx)(x.Provider, {
					scope: e.__scopeRovingFocusGroup,
					children: (0, t.jsx)(x.Slot, {
						scope: e.__scopeRovingFocusGroup,
						children: (0, t.jsx)(D, { ...e, ref: r }),
					}),
				}),
			)
		P.displayName = w
		var D = r.forwardRef((e, a) => {
				let {
						__scopeRovingFocusGroup: s,
						orientation: d,
						loop: c = !1,
						dir: f,
						currentTabStopId: p,
						defaultCurrentTabStopId: m,
						onCurrentTabStopIdChange: h,
						onEntryFocus: v,
						preventScrollOnEntryFocus: x = !1,
						...C
					} = e,
					k = r.useRef(null),
					R = (0, o.useComposedRefs)(a, k),
					j = (0, u.useDirection)(f),
					[P, D] = (0, i.useControllableState)({ prop: p, defaultProp: m ?? null, onChange: h, caller: w }),
					[T, A] = r.useState(!1),
					N = (0, g.useCallbackRef)(v),
					_ = E(s),
					O = r.useRef(!1),
					[L, I] = r.useState(0)
				return (
					r.useEffect(() => {
						let e = k.current
						if (e) return e.addEventListener(y, N), () => e.removeEventListener(y, N)
					}, [N]),
					(0, t.jsx)(S, {
						scope: s,
						orientation: d,
						dir: j,
						loop: c,
						currentTabStopId: P,
						onItemFocus: r.useCallback((e) => D(e), [D]),
						onItemShiftTab: r.useCallback(() => A(!0), []),
						onFocusableItemAdd: r.useCallback(() => I((e) => e + 1), []),
						onFocusableItemRemove: r.useCallback(() => I((e) => e - 1), []),
						children: (0, t.jsx)(l.Primitive.div, {
							tabIndex: T || 0 === L ? -1 : 0,
							"data-orientation": d,
							...C,
							ref: R,
							style: { outline: "none", ...e.style },
							onMouseDown: (0, n.composeEventHandlers)(e.onMouseDown, () => {
								O.current = !0
							}),
							onFocus: (0, n.composeEventHandlers)(e.onFocus, (e) => {
								let t = !O.current
								if (e.target === e.currentTarget && t && !T) {
									let t = new CustomEvent(y, b)
									if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
										let e = _().filter((e) => e.focusable)
										M(
											[e.find((e) => e.active), e.find((e) => e.id === P), ...e]
												.filter(Boolean)
												.map((e) => e.ref.current),
											x,
										)
									}
								}
								O.current = !1
							}),
							onBlur: (0, n.composeEventHandlers)(e.onBlur, () => A(!1)),
						}),
					})
				)
			}),
			T = "RovingFocusGroupItem",
			A = r.forwardRef((e, o) => {
				let {
						__scopeRovingFocusGroup: a,
						focusable: i = !0,
						active: s = !1,
						tabStopId: u,
						children: d,
						...c
					} = e,
					f = (0, p.useId)(),
					m = u || f,
					h = j(T, a),
					v = h.currentTabStopId === m,
					g = E(a),
					{ onFocusableItemAdd: y, onFocusableItemRemove: b, currentTabStopId: w } = h
				return (
					r.useEffect(() => {
						if (i) return y(), () => b()
					}, [i, y, b]),
					(0, t.jsx)(x.ItemSlot, {
						scope: a,
						id: m,
						focusable: i,
						active: s,
						children: (0, t.jsx)(l.Primitive.span, {
							tabIndex: v ? 0 : -1,
							"data-orientation": h.orientation,
							...c,
							ref: o,
							onMouseDown: (0, n.composeEventHandlers)(e.onMouseDown, (e) => {
								i ? h.onItemFocus(m) : e.preventDefault()
							}),
							onFocus: (0, n.composeEventHandlers)(e.onFocus, () => h.onItemFocus(m)),
							onKeyDown: (0, n.composeEventHandlers)(e.onKeyDown, (e) => {
								if ("Tab" === e.key && e.shiftKey) return void h.onItemShiftTab()
								if (e.target !== e.currentTarget) return
								let t = (function (e, t, r) {
									var n
									let o =
										((n = e.key),
										"rtl" !== r
											? n
											: "ArrowLeft" === n
												? "ArrowRight"
												: "ArrowRight" === n
													? "ArrowLeft"
													: n)
									if (
										!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) &&
										!("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))
									)
										return N[o]
								})(e, h.orientation, h.dir)
								if (void 0 !== t) {
									if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return
									e.preventDefault()
									let o = g()
										.filter((e) => e.focusable)
										.map((e) => e.ref.current)
									if ("last" === t) o.reverse()
									else if ("prev" === t || "next" === t) {
										var r, n
										"prev" === t && o.reverse()
										let a = o.indexOf(e.currentTarget)
										o = h.loop
											? ((r = o), (n = a + 1), r.map((e, t) => r[(n + t) % r.length]))
											: o.slice(a + 1)
									}
									setTimeout(() => M(o))
								}
							}),
							children: "function" == typeof d ? d({ isCurrentTabStop: v, hasTabStop: null != w }) : d,
						}),
					})
				)
			})
		A.displayName = T
		var N = {
			ArrowLeft: "prev",
			ArrowUp: "prev",
			ArrowRight: "next",
			ArrowDown: "next",
			PageUp: "first",
			Home: "first",
			PageDown: "last",
			End: "last",
		}
		function M(e, t = !1) {
			let r = document.activeElement
			for (let n of e) if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return
		}
		var _ = e.i(16853),
			O = e.i(45751),
			L = e.i(4880),
			I = ["Enter", " "],
			F = ["ArrowUp", "PageDown", "End"],
			z = ["ArrowDown", "PageUp", "Home", ...F],
			H = { ltr: [...I, "ArrowRight"], rtl: [...I, "ArrowLeft"] },
			V = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
			$ = "Menu",
			[B, W, U] = (0, s.createCollection)($),
			[K, Y] = (0, a.createContextScope)($, [U, m.createPopperScope, R]),
			q = (0, m.createPopperScope)(),
			X = R(),
			[G, Z] = K($),
			[Q, J] = K($),
			ee = (e) => {
				let { __scopeMenu: n, open: o = !1, children: a, dir: i, onOpenChange: l, modal: s = !0 } = e,
					d = q(n),
					[c, f] = r.useState(null),
					p = r.useRef(!1),
					h = (0, g.useCallbackRef)(l),
					v = (0, u.useDirection)(i)
				return (
					r.useEffect(() => {
						let e = () => {
								;(p.current = !0),
									document.addEventListener("pointerdown", t, { capture: !0, once: !0 }),
									document.addEventListener("pointermove", t, { capture: !0, once: !0 })
							},
							t = () => (p.current = !1)
						return (
							document.addEventListener("keydown", e, { capture: !0 }),
							() => {
								document.removeEventListener("keydown", e, { capture: !0 }),
									document.removeEventListener("pointerdown", t, { capture: !0 }),
									document.removeEventListener("pointermove", t, { capture: !0 })
							}
						)
					}, []),
					(0, t.jsx)(m.Root, {
						...d,
						children: (0, t.jsx)(G, {
							scope: n,
							open: o,
							onOpenChange: h,
							content: c,
							onContentChange: f,
							children: (0, t.jsx)(Q, {
								scope: n,
								onClose: r.useCallback(() => h(!1), [h]),
								isUsingKeyboardRef: p,
								dir: v,
								modal: s,
								children: a,
							}),
						}),
					})
				)
			}
		ee.displayName = $
		var et = r.forwardRef((e, r) => {
			let { __scopeMenu: n, ...o } = e,
				a = q(n)
			return (0, t.jsx)(m.Anchor, { ...a, ...o, ref: r })
		})
		et.displayName = "MenuAnchor"
		var er = "MenuPortal",
			[en, eo] = K(er, { forceMount: void 0 }),
			ea = (e) => {
				let { __scopeMenu: r, forceMount: n, children: o, container: a } = e,
					i = Z(er, r)
				return (0, t.jsx)(en, {
					scope: r,
					forceMount: n,
					children: (0, t.jsx)(v.Presence, {
						present: n || i.open,
						children: (0, t.jsx)(h.Portal, { asChild: !0, container: a, children: o }),
					}),
				})
			}
		ea.displayName = er
		var ei = "MenuContent",
			[el, es] = K(ei),
			eu = r.forwardRef((e, r) => {
				let n = eo(ei, e.__scopeMenu),
					{ forceMount: o = n.forceMount, ...a } = e,
					i = Z(ei, e.__scopeMenu),
					l = J(ei, e.__scopeMenu)
				return (0, t.jsx)(B.Provider, {
					scope: e.__scopeMenu,
					children: (0, t.jsx)(v.Presence, {
						present: o || i.open,
						children: (0, t.jsx)(B.Slot, {
							scope: e.__scopeMenu,
							children: l.modal ? (0, t.jsx)(ed, { ...a, ref: r }) : (0, t.jsx)(ec, { ...a, ref: r }),
						}),
					}),
				})
			}),
			ed = r.forwardRef((e, a) => {
				let i = Z(ei, e.__scopeMenu),
					l = r.useRef(null),
					s = (0, o.useComposedRefs)(a, l)
				return (
					r.useEffect(() => {
						let e = l.current
						if (e) return (0, O.hideOthers)(e)
					}, []),
					(0, t.jsx)(ep, {
						...e,
						ref: s,
						trapFocus: i.open,
						disableOutsidePointerEvents: i.open,
						disableOutsideScroll: !0,
						onFocusOutside: (0, n.composeEventHandlers)(e.onFocusOutside, (e) => e.preventDefault(), {
							checkForDefaultPrevented: !1,
						}),
						onDismiss: () => i.onOpenChange(!1),
					})
				)
			}),
			ec = r.forwardRef((e, r) => {
				let n = Z(ei, e.__scopeMenu)
				return (0, t.jsx)(ep, {
					...e,
					ref: r,
					trapFocus: !1,
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					onDismiss: () => n.onOpenChange(!1),
				})
			}),
			ef = (0, _.createSlot)("MenuContent.ScrollLock"),
			ep = r.forwardRef((e, a) => {
				let {
						__scopeMenu: i,
						loop: l = !1,
						trapFocus: s,
						onOpenAutoFocus: u,
						onCloseAutoFocus: p,
						disableOutsidePointerEvents: h,
						onEntryFocus: v,
						onEscapeKeyDown: g,
						onPointerDownOutside: y,
						onFocusOutside: b,
						onInteractOutside: w,
						onDismiss: x,
						disableOutsideScroll: E,
						...C
					} = e,
					k = Z(ei, i),
					R = J(ei, i),
					S = q(i),
					j = X(i),
					D = W(i),
					[T, A] = r.useState(null),
					N = r.useRef(null),
					M = (0, o.useComposedRefs)(a, N, k.onContentChange),
					_ = r.useRef(0),
					O = r.useRef(""),
					I = r.useRef(0),
					H = r.useRef(null),
					V = r.useRef("right"),
					$ = r.useRef(0),
					B = E ? L.RemoveScroll : r.Fragment
				r.useEffect(() => () => window.clearTimeout(_.current), []), (0, c.useFocusGuards)()
				let U = r.useCallback((e) => {
					var t, r
					return (
						V.current === H.current?.side &&
						((t = e),
						!!(r = H.current?.area) &&
							(function (e, t) {
								let { x: r, y: n } = e,
									o = !1
								for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
									let i = t[e],
										l = t[a],
										s = i.x,
										u = i.y,
										d = l.x,
										c = l.y
									u > n != c > n && r < ((d - s) * (n - u)) / (c - u) + s && (o = !o)
								}
								return o
							})({ x: t.clientX, y: t.clientY }, r))
					)
				}, [])
				return (0, t.jsx)(el, {
					scope: i,
					searchRef: O,
					onItemEnter: r.useCallback(
						(e) => {
							U(e) && e.preventDefault()
						},
						[U],
					),
					onItemLeave: r.useCallback(
						(e) => {
							U(e) || (N.current?.focus(), A(null))
						},
						[U],
					),
					onTriggerLeave: r.useCallback(
						(e) => {
							U(e) && e.preventDefault()
						},
						[U],
					),
					pointerGraceTimerRef: I,
					onPointerGraceIntentChange: r.useCallback((e) => {
						H.current = e
					}, []),
					children: (0, t.jsx)(B, {
						...(E ? { as: ef, allowPinchZoom: !0 } : void 0),
						children: (0, t.jsx)(f.FocusScope, {
							asChild: !0,
							trapped: s,
							onMountAutoFocus: (0, n.composeEventHandlers)(u, (e) => {
								e.preventDefault(), N.current?.focus({ preventScroll: !0 })
							}),
							onUnmountAutoFocus: p,
							children: (0, t.jsx)(d.DismissableLayer, {
								asChild: !0,
								disableOutsidePointerEvents: h,
								onEscapeKeyDown: g,
								onPointerDownOutside: y,
								onFocusOutside: b,
								onInteractOutside: w,
								onDismiss: x,
								children: (0, t.jsx)(P, {
									asChild: !0,
									...j,
									dir: R.dir,
									orientation: "vertical",
									loop: l,
									currentTabStopId: T,
									onCurrentTabStopIdChange: A,
									onEntryFocus: (0, n.composeEventHandlers)(v, (e) => {
										R.isUsingKeyboardRef.current || e.preventDefault()
									}),
									preventScrollOnEntryFocus: !0,
									children: (0, t.jsx)(m.Content, {
										role: "menu",
										"aria-orientation": "vertical",
										"data-state": ez(k.open),
										"data-radix-menu-content": "",
										dir: R.dir,
										...S,
										...C,
										ref: M,
										style: { outline: "none", ...C.style },
										onKeyDown: (0, n.composeEventHandlers)(C.onKeyDown, (e) => {
											let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
												r = e.ctrlKey || e.altKey || e.metaKey,
												n = 1 === e.key.length
											if (t) {
												var o
												let t, a, i, l, s, u
												"Tab" === e.key && e.preventDefault(),
													!r &&
														n &&
														((o = e.key),
														(t = O.current + o),
														(a = D().filter((e) => !e.disabled)),
														(i = document.activeElement),
														(l = a.find((e) => e.ref.current === i)?.textValue),
														(s = (function (e, t, r) {
															var n
															let o =
																	t.length > 1 &&
																	Array.from(t).every((e) => e === t[0])
																		? t[0]
																		: t,
																a = r ? e.indexOf(r) : -1,
																i =
																	((n = Math.max(a, 0)),
																	e.map((t, r) => e[(n + r) % e.length]))
															1 === o.length && (i = i.filter((e) => e !== r))
															let l = i.find((e) =>
																e.toLowerCase().startsWith(o.toLowerCase()),
															)
															return l !== r ? l : void 0
														})(
															a.map((e) => e.textValue),
															t,
															l,
														)),
														(u = a.find((e) => e.textValue === s)?.ref.current),
														(function e(t) {
															;(O.current = t),
																window.clearTimeout(_.current),
																"" !== t &&
																	(_.current = window.setTimeout(() => e(""), 1e3))
														})(t),
														u && setTimeout(() => u.focus()))
											}
											let a = N.current
											if (e.target !== a || !z.includes(e.key)) return
											e.preventDefault()
											let i = D()
												.filter((e) => !e.disabled)
												.map((e) => e.ref.current)
											F.includes(e.key) && i.reverse(),
												(function (e) {
													let t = document.activeElement
													for (let r of e)
														if (r === t || (r.focus(), document.activeElement !== t)) return
												})(i)
										}),
										onBlur: (0, n.composeEventHandlers)(e.onBlur, (e) => {
											e.currentTarget.contains(e.target) ||
												(window.clearTimeout(_.current), (O.current = ""))
										}),
										onPointerMove: (0, n.composeEventHandlers)(
											e.onPointerMove,
											e$((e) => {
												let t = e.target,
													r = $.current !== e.clientX
												e.currentTarget.contains(t) &&
													r &&
													((V.current = e.clientX > $.current ? "right" : "left"),
													($.current = e.clientX))
											}),
										),
									}),
								}),
							}),
						}),
					}),
				})
			})
		eu.displayName = ei
		var em = r.forwardRef((e, r) => {
			let { __scopeMenu: n, ...o } = e
			return (0, t.jsx)(l.Primitive.div, { role: "group", ...o, ref: r })
		})
		em.displayName = "MenuGroup"
		var eh = r.forwardRef((e, r) => {
			let { __scopeMenu: n, ...o } = e
			return (0, t.jsx)(l.Primitive.div, { ...o, ref: r })
		})
		eh.displayName = "MenuLabel"
		var ev = "MenuItem",
			eg = "menu.itemSelect",
			ey = r.forwardRef((e, a) => {
				let { disabled: i = !1, onSelect: s, ...u } = e,
					d = r.useRef(null),
					c = J(ev, e.__scopeMenu),
					f = es(ev, e.__scopeMenu),
					p = (0, o.useComposedRefs)(a, d),
					m = r.useRef(!1)
				return (0, t.jsx)(eb, {
					...u,
					ref: p,
					disabled: i,
					onClick: (0, n.composeEventHandlers)(e.onClick, () => {
						let e = d.current
						if (!i && e) {
							let t = new CustomEvent(eg, { bubbles: !0, cancelable: !0 })
							e.addEventListener(eg, (e) => s?.(e), { once: !0 }),
								(0, l.dispatchDiscreteCustomEvent)(e, t),
								t.defaultPrevented ? (m.current = !1) : c.onClose()
						}
					}),
					onPointerDown: (t) => {
						e.onPointerDown?.(t), (m.current = !0)
					},
					onPointerUp: (0, n.composeEventHandlers)(e.onPointerUp, (e) => {
						m.current || e.currentTarget?.click()
					}),
					onKeyDown: (0, n.composeEventHandlers)(e.onKeyDown, (e) => {
						let t = "" !== f.searchRef.current
						i ||
							(t && " " === e.key) ||
							(I.includes(e.key) && (e.currentTarget.click(), e.preventDefault()))
					}),
				})
			})
		ey.displayName = ev
		var eb = r.forwardRef((e, a) => {
				let { __scopeMenu: i, disabled: s = !1, textValue: u, ...d } = e,
					c = es(ev, i),
					f = X(i),
					p = r.useRef(null),
					m = (0, o.useComposedRefs)(a, p),
					[h, v] = r.useState(!1),
					[g, y] = r.useState("")
				return (
					r.useEffect(() => {
						let e = p.current
						e && y((e.textContent ?? "").trim())
					}, [d.children]),
					(0, t.jsx)(B.ItemSlot, {
						scope: i,
						disabled: s,
						textValue: u ?? g,
						children: (0, t.jsx)(A, {
							asChild: !0,
							...f,
							focusable: !s,
							children: (0, t.jsx)(l.Primitive.div, {
								role: "menuitem",
								"data-highlighted": h ? "" : void 0,
								"aria-disabled": s || void 0,
								"data-disabled": s ? "" : void 0,
								...d,
								ref: m,
								onPointerMove: (0, n.composeEventHandlers)(
									e.onPointerMove,
									e$((e) => {
										s
											? c.onItemLeave(e)
											: (c.onItemEnter(e),
												e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }))
									}),
								),
								onPointerLeave: (0, n.composeEventHandlers)(
									e.onPointerLeave,
									e$((e) => c.onItemLeave(e)),
								),
								onFocus: (0, n.composeEventHandlers)(e.onFocus, () => v(!0)),
								onBlur: (0, n.composeEventHandlers)(e.onBlur, () => v(!1)),
							}),
						}),
					})
				)
			}),
			ew = r.forwardRef((e, r) => {
				let { checked: o = !1, onCheckedChange: a, ...i } = e
				return (0, t.jsx)(eP, {
					scope: e.__scopeMenu,
					checked: o,
					children: (0, t.jsx)(ey, {
						role: "menuitemcheckbox",
						"aria-checked": eH(o) ? "mixed" : o,
						...i,
						ref: r,
						"data-state": eV(o),
						onSelect: (0, n.composeEventHandlers)(i.onSelect, () => a?.(!!eH(o) || !o), {
							checkForDefaultPrevented: !1,
						}),
					}),
				})
			})
		ew.displayName = "MenuCheckboxItem"
		var ex = "MenuRadioGroup",
			[eE, eC] = K(ex, { value: void 0, onValueChange: () => {} }),
			ek = r.forwardRef((e, r) => {
				let { value: n, onValueChange: o, ...a } = e,
					i = (0, g.useCallbackRef)(o)
				return (0, t.jsx)(eE, {
					scope: e.__scopeMenu,
					value: n,
					onValueChange: i,
					children: (0, t.jsx)(em, { ...a, ref: r }),
				})
			})
		ek.displayName = ex
		var eR = "MenuRadioItem",
			eS = r.forwardRef((e, r) => {
				let { value: o, ...a } = e,
					i = eC(eR, e.__scopeMenu),
					l = o === i.value
				return (0, t.jsx)(eP, {
					scope: e.__scopeMenu,
					checked: l,
					children: (0, t.jsx)(ey, {
						role: "menuitemradio",
						"aria-checked": l,
						...a,
						ref: r,
						"data-state": eV(l),
						onSelect: (0, n.composeEventHandlers)(a.onSelect, () => i.onValueChange?.(o), {
							checkForDefaultPrevented: !1,
						}),
					}),
				})
			})
		eS.displayName = eR
		var ej = "MenuItemIndicator",
			[eP, eD] = K(ej, { checked: !1 }),
			eT = r.forwardRef((e, r) => {
				let { __scopeMenu: n, forceMount: o, ...a } = e,
					i = eD(ej, n)
				return (0, t.jsx)(v.Presence, {
					present: o || eH(i.checked) || !0 === i.checked,
					children: (0, t.jsx)(l.Primitive.span, { ...a, ref: r, "data-state": eV(i.checked) }),
				})
			})
		eT.displayName = ej
		var eA = r.forwardRef((e, r) => {
			let { __scopeMenu: n, ...o } = e
			return (0, t.jsx)(l.Primitive.div, { role: "separator", "aria-orientation": "horizontal", ...o, ref: r })
		})
		eA.displayName = "MenuSeparator"
		var eN = r.forwardRef((e, r) => {
			let { __scopeMenu: n, ...o } = e,
				a = q(n)
			return (0, t.jsx)(m.Arrow, { ...a, ...o, ref: r })
		})
		eN.displayName = "MenuArrow"
		var [eM, e_] = K("MenuSub"),
			eO = "MenuSubTrigger",
			eL = r.forwardRef((e, a) => {
				let i = Z(eO, e.__scopeMenu),
					l = J(eO, e.__scopeMenu),
					s = e_(eO, e.__scopeMenu),
					u = es(eO, e.__scopeMenu),
					d = r.useRef(null),
					{ pointerGraceTimerRef: c, onPointerGraceIntentChange: f } = u,
					p = { __scopeMenu: e.__scopeMenu },
					m = r.useCallback(() => {
						d.current && window.clearTimeout(d.current), (d.current = null)
					}, [])
				return (
					r.useEffect(() => m, [m]),
					r.useEffect(() => {
						let e = c.current
						return () => {
							window.clearTimeout(e), f(null)
						}
					}, [c, f]),
					(0, t.jsx)(et, {
						asChild: !0,
						...p,
						children: (0, t.jsx)(eb, {
							id: s.triggerId,
							"aria-haspopup": "menu",
							"aria-expanded": i.open,
							"aria-controls": s.contentId,
							"data-state": ez(i.open),
							...e,
							ref: (0, o.composeRefs)(a, s.onTriggerChange),
							onClick: (t) => {
								e.onClick?.(t),
									e.disabled ||
										t.defaultPrevented ||
										(t.currentTarget.focus(), i.open || i.onOpenChange(!0))
							},
							onPointerMove: (0, n.composeEventHandlers)(
								e.onPointerMove,
								e$((t) => {
									u.onItemEnter(t),
										!t.defaultPrevented &&
											(e.disabled ||
												i.open ||
												d.current ||
												(u.onPointerGraceIntentChange(null),
												(d.current = window.setTimeout(() => {
													i.onOpenChange(!0), m()
												}, 100))))
								}),
							),
							onPointerLeave: (0, n.composeEventHandlers)(
								e.onPointerLeave,
								e$((e) => {
									m()
									let t = i.content?.getBoundingClientRect()
									if (t) {
										let r = i.content?.dataset.side,
											n = "right" === r,
											o = t[n ? "left" : "right"],
											a = t[n ? "right" : "left"]
										u.onPointerGraceIntentChange({
											area: [
												{ x: e.clientX + (n ? -5 : 5), y: e.clientY },
												{ x: o, y: t.top },
												{ x: a, y: t.top },
												{ x: a, y: t.bottom },
												{ x: o, y: t.bottom },
											],
											side: r,
										}),
											window.clearTimeout(c.current),
											(c.current = window.setTimeout(
												() => u.onPointerGraceIntentChange(null),
												300,
											))
									} else {
										if ((u.onTriggerLeave(e), e.defaultPrevented)) return
										u.onPointerGraceIntentChange(null)
									}
								}),
							),
							onKeyDown: (0, n.composeEventHandlers)(e.onKeyDown, (t) => {
								let r = "" !== u.searchRef.current
								e.disabled ||
									(r && " " === t.key) ||
									(H[l.dir].includes(t.key) &&
										(i.onOpenChange(!0), i.content?.focus(), t.preventDefault()))
							}),
						}),
					})
				)
			})
		eL.displayName = eO
		var eI = "MenuSubContent",
			eF = r.forwardRef((e, a) => {
				let i = eo(ei, e.__scopeMenu),
					{ forceMount: l = i.forceMount, ...s } = e,
					u = Z(ei, e.__scopeMenu),
					d = J(ei, e.__scopeMenu),
					c = e_(eI, e.__scopeMenu),
					f = r.useRef(null),
					p = (0, o.useComposedRefs)(a, f)
				return (0, t.jsx)(B.Provider, {
					scope: e.__scopeMenu,
					children: (0, t.jsx)(v.Presence, {
						present: l || u.open,
						children: (0, t.jsx)(B.Slot, {
							scope: e.__scopeMenu,
							children: (0, t.jsx)(ep, {
								id: c.contentId,
								"aria-labelledby": c.triggerId,
								...s,
								ref: p,
								align: "start",
								side: "rtl" === d.dir ? "left" : "right",
								disableOutsidePointerEvents: !1,
								disableOutsideScroll: !1,
								trapFocus: !1,
								onOpenAutoFocus: (e) => {
									d.isUsingKeyboardRef.current && f.current?.focus(), e.preventDefault()
								},
								onCloseAutoFocus: (e) => e.preventDefault(),
								onFocusOutside: (0, n.composeEventHandlers)(e.onFocusOutside, (e) => {
									e.target !== c.trigger && u.onOpenChange(!1)
								}),
								onEscapeKeyDown: (0, n.composeEventHandlers)(e.onEscapeKeyDown, (e) => {
									d.onClose(), e.preventDefault()
								}),
								onKeyDown: (0, n.composeEventHandlers)(e.onKeyDown, (e) => {
									let t = e.currentTarget.contains(e.target),
										r = V[d.dir].includes(e.key)
									t && r && (u.onOpenChange(!1), c.trigger?.focus(), e.preventDefault())
								}),
							}),
						}),
					}),
				})
			})
		function ez(e) {
			return e ? "open" : "closed"
		}
		function eH(e) {
			return "indeterminate" === e
		}
		function eV(e) {
			return eH(e) ? "indeterminate" : e ? "checked" : "unchecked"
		}
		function e$(e) {
			return (t) => ("mouse" === t.pointerType ? e(t) : void 0)
		}
		eF.displayName = eI
		var eB = "DropdownMenu",
			[eW, eU] = (0, a.createContextScope)(eB, [Y]),
			eK = Y(),
			[eY, eq] = eW(eB),
			eX = (e) => {
				let {
						__scopeDropdownMenu: n,
						children: o,
						dir: a,
						open: l,
						defaultOpen: s,
						onOpenChange: u,
						modal: d = !0,
					} = e,
					c = eK(n),
					f = r.useRef(null),
					[m, h] = (0, i.useControllableState)({ prop: l, defaultProp: s ?? !1, onChange: u, caller: eB })
				return (0, t.jsx)(eY, {
					scope: n,
					triggerId: (0, p.useId)(),
					triggerRef: f,
					contentId: (0, p.useId)(),
					open: m,
					onOpenChange: h,
					onOpenToggle: r.useCallback(() => h((e) => !e), [h]),
					modal: d,
					children: (0, t.jsx)(ee, { ...c, open: m, onOpenChange: h, dir: a, modal: d, children: o }),
				})
			}
		eX.displayName = eB
		var eG = "DropdownMenuTrigger",
			eZ = r.forwardRef((e, r) => {
				let { __scopeDropdownMenu: a, disabled: i = !1, ...s } = e,
					u = eq(eG, a),
					d = eK(a)
				return (0, t.jsx)(et, {
					asChild: !0,
					...d,
					children: (0, t.jsx)(l.Primitive.button, {
						type: "button",
						id: u.triggerId,
						"aria-haspopup": "menu",
						"aria-expanded": u.open,
						"aria-controls": u.open ? u.contentId : void 0,
						"data-state": u.open ? "open" : "closed",
						"data-disabled": i ? "" : void 0,
						disabled: i,
						...s,
						ref: (0, o.composeRefs)(r, u.triggerRef),
						onPointerDown: (0, n.composeEventHandlers)(e.onPointerDown, (e) => {
							!i && 0 === e.button && !1 === e.ctrlKey && (u.onOpenToggle(), u.open || e.preventDefault())
						}),
						onKeyDown: (0, n.composeEventHandlers)(e.onKeyDown, (e) => {
							!i &&
								(["Enter", " "].includes(e.key) && u.onOpenToggle(),
								"ArrowDown" === e.key && u.onOpenChange(!0),
								["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
						}),
					}),
				})
			})
		eZ.displayName = eG
		var eQ = (e) => {
			let { __scopeDropdownMenu: r, ...n } = e,
				o = eK(r)
			return (0, t.jsx)(ea, { ...o, ...n })
		}
		eQ.displayName = "DropdownMenuPortal"
		var eJ = "DropdownMenuContent",
			e0 = r.forwardRef((e, o) => {
				let { __scopeDropdownMenu: a, ...i } = e,
					l = eq(eJ, a),
					s = eK(a),
					u = r.useRef(!1)
				return (0, t.jsx)(eu, {
					id: l.contentId,
					"aria-labelledby": l.triggerId,
					...s,
					...i,
					ref: o,
					onCloseAutoFocus: (0, n.composeEventHandlers)(e.onCloseAutoFocus, (e) => {
						u.current || l.triggerRef.current?.focus(), (u.current = !1), e.preventDefault()
					}),
					onInteractOutside: (0, n.composeEventHandlers)(e.onInteractOutside, (e) => {
						let t = e.detail.originalEvent,
							r = 0 === t.button && !0 === t.ctrlKey,
							n = 2 === t.button || r
						;(!l.modal || n) && (u.current = !0)
					}),
					style: {
						...e.style,
						"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
						"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
						"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
						"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
						"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)",
					},
				})
			})
		e0.displayName = eJ
		var e1 = r.forwardRef((e, r) => {
			let { __scopeDropdownMenu: n, ...o } = e,
				a = eK(n)
			return (0, t.jsx)(em, { ...a, ...o, ref: r })
		})
		e1.displayName = "DropdownMenuGroup"
		var e2 = r.forwardRef((e, r) => {
			let { __scopeDropdownMenu: n, ...o } = e,
				a = eK(n)
			return (0, t.jsx)(eh, { ...a, ...o, ref: r })
		})
		e2.displayName = "DropdownMenuLabel"
		var e5 = r.forwardRef((e, r) => {
			let { __scopeDropdownMenu: n, ...o } = e,
				a = eK(n)
			return (0, t.jsx)(ey, { ...a, ...o, ref: r })
		})
		e5.displayName = "DropdownMenuItem"
		var e3 = r.forwardRef((e, r) => {
			let { __scopeDropdownMenu: n, ...o } = e,
				a = eK(n)
			return (0, t.jsx)(ew, { ...a, ...o, ref: r })
		})
		e3.displayName = "DropdownMenuCheckboxItem"
		var e6 = r.forwardRef((e, r) => {
			let { __scopeDropdownMenu: n, ...o } = e,
				a = eK(n)
			return (0, t.jsx)(ek, { ...a, ...o, ref: r })
		})
		e6.displayName = "DropdownMenuRadioGroup"
		var e8 = r.forwardRef((e, r) => {
			let { __scopeDropdownMenu: n, ...o } = e,
				a = eK(n)
			return (0, t.jsx)(eS, { ...a, ...o, ref: r })
		})
		e8.displayName = "DropdownMenuRadioItem"
		var e4 = r.forwardRef((e, r) => {
			let { __scopeDropdownMenu: n, ...o } = e,
				a = eK(n)
			return (0, t.jsx)(eT, { ...a, ...o, ref: r })
		})
		e4.displayName = "DropdownMenuItemIndicator"
		var e7 = r.forwardRef((e, r) => {
			let { __scopeDropdownMenu: n, ...o } = e,
				a = eK(n)
			return (0, t.jsx)(eA, { ...a, ...o, ref: r })
		})
		;(e7.displayName = "DropdownMenuSeparator"),
			(r.forwardRef((e, r) => {
				let { __scopeDropdownMenu: n, ...o } = e,
					a = eK(n)
				return (0, t.jsx)(eN, { ...a, ...o, ref: r })
			}).displayName = "DropdownMenuArrow"),
			(r.forwardRef((e, r) => {
				let { __scopeDropdownMenu: n, ...o } = e,
					a = eK(n)
				return (0, t.jsx)(eL, { ...a, ...o, ref: r })
			}).displayName = "DropdownMenuSubTrigger"),
			(r.forwardRef((e, r) => {
				let { __scopeDropdownMenu: n, ...o } = e,
					a = eK(n)
				return (0, t.jsx)(eF, {
					...a,
					...o,
					ref: r,
					style: {
						...e.style,
						"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
						"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
						"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
						"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
						"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)",
					},
				})
			}).displayName = "DropdownMenuSubContent")
		var e9 = e.i(82715)
		let te = (0, e.i(13699).default)("circle", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]])
		var tt = e.i(46030)
		function tr({ ...e }) {
			return (0, t.jsx)(eX, { "data-slot": "dropdown-menu", ...e })
		}
		function tn({ ...e }) {
			return (0, t.jsx)(eQ, { "data-slot": "dropdown-menu-portal", ...e })
		}
		function to({ ...e }) {
			return (0, t.jsx)(eZ, { "data-slot": "dropdown-menu-trigger", ...e })
		}
		function ta({ className: e, sideOffset: r = 4, ...n }) {
			return (0, t.jsx)(eQ, {
				children: (0, t.jsx)(e0, {
					"data-slot": "dropdown-menu-content",
					sideOffset: r,
					className: (0, tt.cn)(
						"bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
						e,
					),
					...n,
				}),
			})
		}
		function ti({ ...e }) {
			return (0, t.jsx)(e1, { "data-slot": "dropdown-menu-group", ...e })
		}
		function tl({ className: e, inset: r, variant: n = "default", ...o }) {
			return (0, t.jsx)(e5, {
				"data-slot": "dropdown-menu-item",
				"data-inset": r,
				"data-variant": n,
				className: (0, tt.cn)(
					"focus:bg-accent/5 focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
					"cursor-pointer",
					e,
				),
				...o,
			})
		}
		function ts({ className: e, children: r, checked: n, ...o }) {
			return (0, t.jsxs)(e3, {
				"data-slot": "dropdown-menu-checkbox-item",
				className: (0, tt.cn)(
					"focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
					e,
				),
				checked: n,
				...o,
				children: [
					(0, t.jsx)("span", {
						className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
						children: (0, t.jsx)(e4, { children: (0, t.jsx)(e9.CheckIcon, { className: "size-4" }) }),
					}),
					r,
				],
			})
		}
		function tu({ ...e }) {
			return (0, t.jsx)(e6, { "data-slot": "dropdown-menu-radio-group", ...e })
		}
		function td({ className: e, children: r, ...n }) {
			return (0, t.jsxs)(e8, {
				"data-slot": "dropdown-menu-radio-item",
				className: (0, tt.cn)(
					"focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
					e,
				),
				...n,
				children: [
					(0, t.jsx)("span", {
						className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
						children: (0, t.jsx)(e4, { children: (0, t.jsx)(te, { className: "size-2 fill-current" }) }),
					}),
					r,
				],
			})
		}
		function tc({ className: e, inset: r, ...n }) {
			return (0, t.jsx)(e2, {
				"data-slot": "dropdown-menu-label",
				"data-inset": r,
				className: (0, tt.cn)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
				...n,
			})
		}
		function tf({ className: e, ...r }) {
			return (0, t.jsx)(e7, {
				"data-slot": "dropdown-menu-separator",
				className: (0, tt.cn)("bg-border -mx-1 my-1 h-px", e),
				...r,
			})
		}
		function tp({ className: e, ...r }) {
			return (0, t.jsx)("span", {
				"data-slot": "dropdown-menu-shortcut",
				className: (0, tt.cn)("text-muted-foreground ml-auto text-xs tracking-widest", e),
				...r,
			})
		}
		e.s(
			[
				"DropdownMenu",
				() => tr,
				"DropdownMenuCheckboxItem",
				() => ts,
				"DropdownMenuContent",
				() => ta,
				"DropdownMenuGroup",
				() => ti,
				"DropdownMenuItem",
				() => tl,
				"DropdownMenuLabel",
				() => tc,
				"DropdownMenuPortal",
				() => tn,
				"DropdownMenuRadioGroup",
				() => tu,
				"DropdownMenuRadioItem",
				() => td,
				"DropdownMenuSeparator",
				() => tf,
				"DropdownMenuShortcut",
				() => tp,
				"DropdownMenuTrigger",
				() => to,
			],
			710,
		)
	},
	24805,
	75263,
	(e) => {
		"use strict"
		var t = e.i(10008),
			r = e.i(68069),
			n = e.i(26613),
			o = e.i(8026)
		function a(e) {
			var r
			let a,
				i =
					((r = e),
					((a = t.forwardRef((e, r) => {
						let { children: o, ...a } = e
						if (t.isValidElement(o)) {
							var i
							let e,
								l,
								s =
									((i = o),
									(l =
										(e = Object.getOwnPropertyDescriptor(i.props, "ref")?.get) &&
										"isReactWarning" in e &&
										e.isReactWarning)
										? i.ref
										: (l =
													(e = Object.getOwnPropertyDescriptor(i, "ref")?.get) &&
													"isReactWarning" in e &&
													e.isReactWarning)
											? i.props.ref
											: i.props.ref || i.ref),
								u = (function (e, t) {
									let r = { ...t }
									for (let n in t) {
										let o = e[n],
											a = t[n]
										;/^on[A-Z]/.test(n)
											? o && a
												? (r[n] = (...e) => {
														let t = a(...e)
														return o(...e), t
													})
												: o && (r[n] = o)
											: "style" === n
												? (r[n] = { ...o, ...a })
												: "className" === n && (r[n] = [o, a].filter(Boolean).join(" "))
									}
									return { ...e, ...r }
								})(a, o.props)
							return (
								o.type !== t.Fragment && (u.ref = r ? (0, n.composeRefs)(r, s) : s),
								t.cloneElement(o, u)
							)
						}
						return t.Children.count(o) > 1 ? t.Children.only(null) : null
					})).displayName = `${r}.SlotClone`),
					a),
				l = t.forwardRef((e, r) => {
					let { children: n, ...a } = e,
						l = t.Children.toArray(n),
						u = l.find(s)
					if (u) {
						let e = u.props.children,
							n = l.map((r) =>
								r !== u
									? r
									: t.Children.count(e) > 1
										? t.Children.only(null)
										: t.isValidElement(e)
											? e.props.children
											: null,
							)
						return (0, o.jsx)(i, {
							...a,
							ref: r,
							children: t.isValidElement(e) ? t.cloneElement(e, void 0, n) : null,
						})
					}
					return (0, o.jsx)(i, { ...a, ref: r, children: n })
				})
			return (l.displayName = `${e}.Slot`), l
		}
		var i = Symbol("radix.slottable")
		function l(e) {
			let t = ({ children: e }) => (0, o.jsx)(o.Fragment, { children: e })
			return (t.displayName = `${e}.Slottable`), (t.__radixId = i), t
		}
		function s(e) {
			return t.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === i
		}
		e.s(["createSlot", () => a, "createSlottable", () => l], 75263)
		var u = [
			"a",
			"button",
			"div",
			"form",
			"h2",
			"h3",
			"img",
			"input",
			"label",
			"li",
			"nav",
			"ol",
			"p",
			"select",
			"span",
			"svg",
			"ul",
		].reduce((e, r) => {
			let n = a(`Primitive.${r}`),
				i = t.forwardRef((e, t) => {
					let { asChild: a, ...i } = e
					return (
						"u" > typeof window && (window[Symbol.for("radix-ui")] = !0),
						(0, o.jsx)(a ? n : r, { ...i, ref: t })
					)
				})
			return (i.displayName = `Primitive.${r}`), { ...e, [r]: i }
		}, {})
		function d(e, t) {
			e && r.flushSync(() => e.dispatchEvent(t))
		}
		e.s(["Primitive", () => u, "dispatchDiscreteCustomEvent", () => d], 24805)
	},
	64514,
	(e) => {
		"use strict"
		var t = e.i(8026),
			r = e.i(10008),
			n = e.i(24805),
			o = r.forwardRef((e, r) =>
				(0, t.jsx)(n.Primitive.label, {
					...e,
					ref: r,
					onMouseDown: (t) => {
						t.target.closest("button, input, select, textarea") ||
							(e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault())
					},
				}),
			)
		o.displayName = "Label"
		var a = e.i(46030)
		function i({ className: e, ...r }) {
			return (0, t.jsx)(o, {
				"data-slot": "label",
				className: (0, a.cn)(
					"flex items-center gap-2 leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
					e,
				),
				...r,
			})
		}
		e.s(["Label", () => i], 64514)
	},
	7675,
	72616,
	(e) => {
		"use strict"
		var t = e.i(8026),
			r = e.i(10008),
			n = e.i(16853),
			o = (e) => e instanceof Date,
			a = (e) => null == e,
			i = (e) => !a(e) && !Array.isArray(e) && "object" == typeof e && !o(e),
			l = (e) => (i(e) && e.target ? ("checkbox" === e.target.type ? e.target.checked : e.target.value) : e),
			s = (e, t) => e.has(t.substring(0, t.search(/\.\d+(\.|$)/)) || t),
			u = "u" > typeof window && void 0 !== window.HTMLElement && "u" > typeof document
		function d(e) {
			let t,
				r = Array.isArray(e),
				n = "u" > typeof FileList && e instanceof FileList
			if (e instanceof Date) t = new Date(e)
			else if (e instanceof Set) t = new Set(e)
			else {
				let o
				if (!(!(u && (e instanceof Blob || n)) && (r || i(e)))) return e
				if (
					((t = r ? [] : {}),
					r || (i((o = e.constructor && e.constructor.prototype)) && o.hasOwnProperty("isPrototypeOf")))
				)
					for (let r in e) e.hasOwnProperty(r) && (t[r] = d(e[r]))
				else t = e
			}
			return t
		}
		var c = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
			f = (e) => void 0 === e,
			p = (e, t, r) => {
				if (!t || !i(e)) return r
				let n = c(t.split(/[,[\].]+?/)).reduce((e, t) => (a(e) ? e : e[t]), e)
				return f(n) || n === e ? (f(e[t]) ? r : e[t]) : n
			},
			m = (e) => c(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
			h = (e, t, r) => {
				let n = -1,
					o = /^\w*$/.test(t) ? [t] : m(t),
					a = o.length,
					l = a - 1
				for (; ++n < a; ) {
					let t = o[n],
						a = r
					if (n !== l) {
						let r = e[t]
						a = i(r) || Array.isArray(r) ? r : isNaN(+o[n + 1]) ? {} : []
					}
					if ("__proto__" === t || "constructor" === t || "prototype" === t) return
					;(e[t] = a), (e = e[t])
				}
			}
		let v = "blur",
			g = "onChange",
			y = "onSubmit",
			b = "maxLength",
			w = "minLength",
			x = "pattern",
			E = "required",
			C = r.default.createContext(null),
			k = () => r.default.useContext(C),
			R = (e) => {
				let { children: t, ...n } = e
				return r.default.createElement(C.Provider, { value: n }, t)
			}
		var S = (e, t, r, n = !0) => {
			let o = { defaultValues: t._defaultValues }
			for (let a in e)
				Object.defineProperty(o, a, {
					get: () => (
						"all" !== t._proxyFormState[a] && (t._proxyFormState[a] = !n || "all"), r && (r[a] = !0), e[a]
					),
				})
			return o
		}
		let j = "u" > typeof window ? r.useLayoutEffect : r.useEffect
		function P(e) {
			let t = k(),
				{ control: n = t.control, disabled: o, name: a, exact: i } = e || {},
				[l, s] = r.default.useState(n._formState),
				u = r.default.useRef({
					isDirty: !1,
					isLoading: !1,
					dirtyFields: !1,
					touchedFields: !1,
					validatingFields: !1,
					isValidating: !1,
					isValid: !1,
					errors: !1,
				})
			return (
				j(
					() =>
						n._subscribe({
							name: a,
							formState: u.current,
							exact: i,
							callback: (e) => {
								o || s({ ...n._formState, ...e })
							},
						}),
					[a, o, i],
				),
				r.default.useEffect(() => {
					u.current.isValid && n._setValid(!0)
				}, [n]),
				r.default.useMemo(() => S(l, n, u.current, !1), [l, n])
			)
		}
		var D = (e, t, r, n, o) =>
			"string" == typeof e
				? (n && t.watch.add(e), p(r, e, o))
				: Array.isArray(e)
					? e.map((e) => (n && t.watch.add(e), p(r, e)))
					: (n && (t.watchAll = !0), r)
		let T = (e) =>
			e.render(
				(function (e) {
					let t = k(),
						{ name: n, disabled: o, control: a = t.control, shouldUnregister: i } = e,
						u = s(a._names.array, n),
						c = (function (e) {
							let t = k(),
								{ control: n = t.control, name: o, defaultValue: a, disabled: i, exact: l } = e || {},
								s = r.default.useRef(a),
								[u, d] = r.default.useState(n._getWatch(o, s.current))
							return (
								j(
									() =>
										n._subscribe({
											name: o,
											formState: { values: !0 },
											exact: l,
											callback: (e) =>
												!i && d(D(o, n._names, e.values || n._formValues, !1, s.current)),
										}),
									[o, n, i, l],
								),
								r.default.useEffect(() => n._removeUnmounted()),
								u
							)
						})({
							control: a,
							name: n,
							defaultValue: p(a._formValues, n, p(a._defaultValues, n, e.defaultValue)),
							exact: !0,
						}),
						m = P({ control: a, name: n, exact: !0 }),
						g = r.default.useRef(e),
						y = r.default.useRef(
							a.register(n, {
								...e.rules,
								value: c,
								...("boolean" == typeof e.disabled ? { disabled: e.disabled } : {}),
							}),
						),
						b = r.default.useMemo(
							() =>
								Object.defineProperties(
									{},
									{
										invalid: { enumerable: !0, get: () => !!p(m.errors, n) },
										isDirty: { enumerable: !0, get: () => !!p(m.dirtyFields, n) },
										isTouched: { enumerable: !0, get: () => !!p(m.touchedFields, n) },
										isValidating: { enumerable: !0, get: () => !!p(m.validatingFields, n) },
										error: { enumerable: !0, get: () => p(m.errors, n) },
									},
								),
							[m, n],
						),
						w = r.default.useCallback(
							(e) => y.current.onChange({ target: { value: l(e), name: n }, type: "change" }),
							[n],
						),
						x = r.default.useCallback(
							() => y.current.onBlur({ target: { value: p(a._formValues, n), name: n }, type: v }),
							[n, a._formValues],
						),
						E = r.default.useCallback(
							(e) => {
								let t = p(a._fields, n)
								t &&
									e &&
									(t._f.ref = {
										focus: () => e.focus && e.focus(),
										select: () => e.select && e.select(),
										setCustomValidity: (t) => e.setCustomValidity(t),
										reportValidity: () => e.reportValidity(),
									})
							},
							[a._fields, n],
						),
						C = r.default.useMemo(
							() => ({
								name: n,
								value: c,
								...("boolean" == typeof o || m.disabled ? { disabled: m.disabled || o } : {}),
								onChange: w,
								onBlur: x,
								ref: E,
							}),
							[n, o, m.disabled, w, x, E, c],
						)
					return (
						r.default.useEffect(() => {
							let e = a._options.shouldUnregister || i
							a.register(n, {
								...g.current.rules,
								...("boolean" == typeof g.current.disabled ? { disabled: g.current.disabled } : {}),
							})
							let t = (e, t) => {
								let r = p(a._fields, e)
								r && r._f && (r._f.mount = t)
							}
							if ((t(n, !0), e)) {
								let e = d(p(a._options.defaultValues, n))
								h(a._defaultValues, n, e), f(p(a._formValues, n)) && h(a._formValues, n, e)
							}
							return (
								u || a.register(n),
								() => {
									;(u ? e && !a._state.action : e) ? a.unregister(n) : t(n, !1)
								}
							)
						}, [n, a, u, i]),
						r.default.useEffect(() => {
							a._setDisabledField({ disabled: o, name: n })
						}, [o, n, a]),
						r.default.useMemo(() => ({ field: C, formState: m, fieldState: b }), [C, m, b])
					)
				})(e),
			)
		var A = (e, t, r, n, o) =>
				t ? { ...r[e], types: { ...(r[e] && r[e].types ? r[e].types : {}), [n]: o || !0 } } : {},
			N = (e) => (Array.isArray(e) ? e : [e]),
			M = () => {
				let e = []
				return {
					get observers() {
						return e
					},
					next: (t) => {
						for (let r of e) r.next && r.next(t)
					},
					subscribe: (t) => (
						e.push(t),
						{
							unsubscribe: () => {
								e = e.filter((e) => e !== t)
							},
						}
					),
					unsubscribe: () => {
						e = []
					},
				}
			},
			_ = (e) => a(e) || "object" != typeof e
		function O(e, t) {
			if (_(e) || _(t)) return e === t
			if (o(e) && o(t)) return e.getTime() === t.getTime()
			let r = Object.keys(e),
				n = Object.keys(t)
			if (r.length !== n.length) return !1
			for (let a of r) {
				let r = e[a]
				if (!n.includes(a)) return !1
				if ("ref" !== a) {
					let e = t[a]
					if ((o(r) && o(e)) || (i(r) && i(e)) || (Array.isArray(r) && Array.isArray(e)) ? !O(r, e) : r !== e)
						return !1
				}
			}
			return !0
		}
		var L = (e) => i(e) && !Object.keys(e).length,
			I = (e) => "function" == typeof e,
			F = (e) => {
				if (!u) return !1
				let t = e ? e.ownerDocument : 0
				return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
			},
			z = (e) => F(e) && e.isConnected
		function H(e, t) {
			let r = Array.isArray(t) ? t : /^\w*$/.test(t) ? [t] : m(t),
				n =
					1 === r.length
						? e
						: (function (e, t) {
								let r = t.slice(0, -1).length,
									n = 0
								for (; n < r; ) e = f(e) ? n++ : e[t[n++]]
								return e
							})(e, r),
				o = r.length - 1,
				a = r[o]
			return (
				n && delete n[a],
				0 !== o &&
					((i(n) && L(n)) ||
						(Array.isArray(n) &&
							(function (e) {
								for (let t in e) if (e.hasOwnProperty(t) && !f(e[t])) return !1
								return !0
							})(n))) &&
					H(e, r.slice(0, -1)),
				e
			)
		}
		var V = (e) => {
			for (let t in e) if (I(e[t])) return !0
			return !1
		}
		function $(e, t = {}) {
			let r = Array.isArray(e)
			if (i(e) || r)
				for (let r in e)
					Array.isArray(e[r]) || (i(e[r]) && !V(e[r]))
						? ((t[r] = Array.isArray(e[r]) ? [] : {}), $(e[r], t[r]))
						: a(e[r]) || (t[r] = !0)
			return t
		}
		var B = (e, t) =>
			(function e(t, r, n) {
				let o = Array.isArray(t)
				if (i(t) || o)
					for (let o in t)
						Array.isArray(t[o]) || (i(t[o]) && !V(t[o]))
							? f(r) || _(n[o])
								? (n[o] = Array.isArray(t[o]) ? $(t[o], []) : { ...$(t[o]) })
								: e(t[o], a(r) ? {} : r[o], n[o])
							: (n[o] = !O(t[o], r[o]))
				return n
			})(e, t, $(t))
		let W = { value: !1, isValid: !1 },
			U = { value: !0, isValid: !0 }
		var K = (e) => {
				if (Array.isArray(e)) {
					if (e.length > 1) {
						let t = e.filter((e) => e && e.checked && !e.disabled).map((e) => e.value)
						return { value: t, isValid: !!t.length }
					}
					return e[0].checked && !e[0].disabled
						? e[0].attributes && !f(e[0].attributes.value)
							? f(e[0].value) || "" === e[0].value
								? U
								: { value: e[0].value, isValid: !0 }
							: U
						: W
				}
				return W
			},
			Y = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) =>
				f(e) ? e : t ? ("" === e ? NaN : e ? +e : e) : r && "string" == typeof e ? new Date(e) : n ? n(e) : e
		let q = { isValid: !1, value: null }
		var X = (e) =>
			Array.isArray(e)
				? e.reduce((e, t) => (t && t.checked && !t.disabled ? { isValid: !0, value: t.value } : e), q)
				: q
		function G(e) {
			let t = e.ref
			return "file" === t.type
				? t.files
				: "radio" === t.type
					? X(e.refs).value
					: "select-multiple" === t.type
						? [...t.selectedOptions].map(({ value: e }) => e)
						: "checkbox" === t.type
							? K(e.refs).value
							: Y(f(t.value) ? e.ref.value : t.value, e)
		}
		var Z = (e) =>
				f(e)
					? e
					: e instanceof RegExp
						? e.source
						: i(e)
							? e.value instanceof RegExp
								? e.value.source
								: e.value
							: e,
			Q = (e) => ({
				isOnSubmit: !e || e === y,
				isOnBlur: "onBlur" === e,
				isOnChange: e === g,
				isOnAll: "all" === e,
				isOnTouch: "onTouched" === e,
			})
		let J = "AsyncFunction"
		var ee = (e) =>
				!!e &&
				!!e.validate &&
				!!(
					(I(e.validate) && e.validate.constructor.name === J) ||
					(i(e.validate) && Object.values(e.validate).find((e) => e.constructor.name === J))
				),
			et = (e, t, r) =>
				!r &&
				(t.watchAll ||
					t.watch.has(e) ||
					[...t.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))))
		let er = (e, t, r, n) => {
			for (let o of r || Object.keys(e)) {
				let r = p(e, o)
				if (r) {
					let { _f: e, ...a } = r
					if (e) {
						if (e.refs && e.refs[0] && t(e.refs[0], o) && !n) return !0
						else if (e.ref && t(e.ref, e.name) && !n) return !0
						else if (er(a, t)) break
					} else if (i(a) && er(a, t)) break
				}
			}
		}
		function en(e, t, r) {
			let n = p(e, r)
			if (n || /^\w*$/.test(r)) return { error: n, name: r }
			let o = r.split(".")
			for (; o.length; ) {
				let n = o.join("."),
					a = p(t, n),
					i = p(e, n)
				if (a && !Array.isArray(a) && r !== n) break
				if (i && i.type) return { name: n, error: i }
				if (i && i.root && i.root.type) return { name: `${n}.root`, error: i.root }
				o.pop()
			}
			return { name: r }
		}
		var eo = (e, t, r) => {
				let n = N(p(e, r))
				return h(n, "root", t[r]), h(e, r, n), e
			},
			ea = (e) => "string" == typeof e
		function ei(e, t, r = "validate") {
			if (ea(e) || (Array.isArray(e) && e.every(ea)) || ("boolean" == typeof e && !e))
				return { type: r, message: ea(e) ? e : "", ref: t }
		}
		var el = (e) => (!i(e) || e instanceof RegExp ? { value: e, message: "" } : e),
			es = async (e, t, r, n, o, l) => {
				let {
						ref: s,
						refs: u,
						required: d,
						maxLength: c,
						minLength: m,
						min: h,
						max: v,
						pattern: g,
						validate: y,
						name: C,
						valueAsNumber: k,
						mount: R,
					} = e._f,
					S = p(r, C)
				if (!R || t.has(C)) return {}
				let j = u ? u[0] : s,
					P = (e) => {
						o &&
							j.reportValidity &&
							(j.setCustomValidity("boolean" == typeof e ? "" : e || ""), j.reportValidity())
					},
					D = {},
					T = "radio" === s.type,
					N = "checkbox" === s.type,
					M =
						((k || "file" === s.type) && f(s.value) && f(S)) ||
						(F(s) && "" === s.value) ||
						"" === S ||
						(Array.isArray(S) && !S.length),
					_ = A.bind(null, C, n, D),
					O = (e, t, r, n = b, o = w) => {
						let a = e ? t : r
						D[C] = { type: e ? n : o, message: a, ref: s, ..._(e ? n : o, a) }
					}
				if (
					l
						? !Array.isArray(S) || !S.length
						: d &&
							((!(T || N) && (M || a(S))) ||
								("boolean" == typeof S && !S) ||
								(N && !K(u).isValid) ||
								(T && !X(u).isValid))
				) {
					let { value: e, message: t } = ea(d) ? { value: !!d, message: d } : el(d)
					if (e && ((D[C] = { type: E, message: t, ref: j, ..._(E, t) }), !n)) return P(t), D
				}
				if (!M && (!a(h) || !a(v))) {
					let e,
						t,
						r = el(v),
						o = el(h)
					if (a(S) || isNaN(S)) {
						let n = s.valueAsDate || new Date(S),
							a = (e) => new Date(new Date().toDateString() + " " + e),
							i = "time" == s.type,
							l = "week" == s.type
						"string" == typeof r.value &&
							S &&
							(e = i ? a(S) > a(r.value) : l ? S > r.value : n > new Date(r.value)),
							"string" == typeof o.value &&
								S &&
								(t = i ? a(S) < a(o.value) : l ? S < o.value : n < new Date(o.value))
					} else {
						let n = s.valueAsNumber || (S ? +S : S)
						a(r.value) || (e = n > r.value), a(o.value) || (t = n < o.value)
					}
					if ((e || t) && (O(!!e, r.message, o.message, "max", "min"), !n)) return P(D[C].message), D
				}
				if ((c || m) && !M && ("string" == typeof S || (l && Array.isArray(S)))) {
					let e = el(c),
						t = el(m),
						r = !a(e.value) && S.length > +e.value,
						o = !a(t.value) && S.length < +t.value
					if ((r || o) && (O(r, e.message, t.message), !n)) return P(D[C].message), D
				}
				if (g && !M && "string" == typeof S) {
					let { value: e, message: t } = el(g)
					if (
						e instanceof RegExp &&
						!S.match(e) &&
						((D[C] = { type: x, message: t, ref: s, ..._(x, t) }), !n)
					)
						return P(t), D
				}
				if (y) {
					if (I(y)) {
						let e = ei(await y(S, r), j)
						if (e && ((D[C] = { ...e, ..._("validate", e.message) }), !n)) return P(e.message), D
					} else if (i(y)) {
						let e = {}
						for (let t in y) {
							if (!L(e) && !n) break
							let o = ei(await y[t](S, r), j, t)
							o && ((e = { ...o, ..._(t, o.message) }), P(o.message), n && (D[C] = e))
						}
						if (!L(e) && ((D[C] = { ref: j, ...e }), !n)) return D
					}
				}
				return P(!0), D
			}
		let eu = { mode: y, reValidateMode: g, shouldFocusError: !0 }
		function ed(e = {}) {
			let t = r.default.useRef(void 0),
				n = r.default.useRef(void 0),
				[m, g] = r.default.useState({
					isDirty: !1,
					isValidating: !1,
					isLoading: I(e.defaultValues),
					isSubmitted: !1,
					isSubmitting: !1,
					isSubmitSuccessful: !1,
					isValid: !1,
					submitCount: 0,
					dirtyFields: {},
					touchedFields: {},
					validatingFields: {},
					errors: e.errors || {},
					disabled: e.disabled || !1,
					isReady: !1,
					defaultValues: I(e.defaultValues) ? void 0 : e.defaultValues,
				})
			!t.current &&
				((t.current = {
					...(e.formControl
						? e.formControl
						: (function (e = {}) {
								let t,
									r = { ...eu, ...e },
									n = {
										submitCount: 0,
										isDirty: !1,
										isReady: !1,
										isLoading: I(r.defaultValues),
										isValidating: !1,
										isSubmitted: !1,
										isSubmitting: !1,
										isSubmitSuccessful: !1,
										isValid: !1,
										touchedFields: {},
										dirtyFields: {},
										validatingFields: {},
										errors: r.errors || {},
										disabled: r.disabled || !1,
									},
									m = {},
									g = ((i(r.defaultValues) || i(r.values)) && d(r.defaultValues || r.values)) || {},
									y = r.shouldUnregister ? {} : d(g),
									b = { action: !1, mount: !1, watch: !1 },
									w = {
										mount: new Set(),
										disabled: new Set(),
										unMount: new Set(),
										array: new Set(),
										watch: new Set(),
									},
									x = 0,
									E = {
										isDirty: !1,
										dirtyFields: !1,
										validatingFields: !1,
										touchedFields: !1,
										isValidating: !1,
										isValid: !1,
										errors: !1,
									},
									C = { ...E },
									k = { array: M(), state: M() },
									R = "all" === r.criteriaMode,
									S = async (e) => {
										if (!r.disabled && (E.isValid || C.isValid || e)) {
											let e = r.resolver ? L((await A()).errors) : await V(m, !0)
											e !== n.isValid && k.state.next({ isValid: e })
										}
									},
									j = (e, t) => {
										!r.disabled &&
											(E.isValidating ||
												E.validatingFields ||
												C.isValidating ||
												C.validatingFields) &&
											((e || Array.from(w.mount)).forEach((e) => {
												e && (t ? h(n.validatingFields, e, t) : H(n.validatingFields, e))
											}),
											k.state.next({
												validatingFields: n.validatingFields,
												isValidating: !L(n.validatingFields),
											}))
									},
									P = (e, t, r, n) => {
										let o = p(m, e)
										if (o) {
											let a = p(y, e, f(r) ? p(g, e) : r)
											f(a) || (n && n.defaultChecked) || t ? h(y, e, t ? a : G(o._f)) : U(e, a),
												b.mount && S()
										}
									},
									T = (e, t, o, a, i) => {
										let l = !1,
											s = !1,
											u = { name: e }
										if (!r.disabled) {
											if (!o || a) {
												;(E.isDirty || C.isDirty) &&
													((s = n.isDirty),
													(n.isDirty = u.isDirty = $()),
													(l = s !== u.isDirty))
												let r = O(p(g, e), t)
												;(s = !!p(n.dirtyFields, e)),
													r ? H(n.dirtyFields, e) : h(n.dirtyFields, e, !0),
													(u.dirtyFields = n.dirtyFields),
													(l = l || ((E.dirtyFields || C.dirtyFields) && !r !== s))
											}
											if (o) {
												let t = p(n.touchedFields, e)
												t ||
													(h(n.touchedFields, e, o),
													(u.touchedFields = n.touchedFields),
													(l = l || ((E.touchedFields || C.touchedFields) && t !== o)))
											}
											l && i && k.state.next(u)
										}
										return l ? u : {}
									},
									A = async (e) => {
										j(e, !0)
										let t = await r.resolver(
											y,
											r.context,
											((e, t, r, n) => {
												let o = {}
												for (let r of e) {
													let e = p(t, r)
													e && h(o, r, e._f)
												}
												return {
													criteriaMode: r,
													names: [...e],
													fields: o,
													shouldUseNativeValidation: n,
												}
											})(e || w.mount, m, r.criteriaMode, r.shouldUseNativeValidation),
										)
										return j(e), t
									},
									_ = async (e) => {
										let { errors: t } = await A(e)
										if (e)
											for (let r of e) {
												let e = p(t, r)
												e ? h(n.errors, r, e) : H(n.errors, r)
											}
										else n.errors = t
										return t
									},
									V = async (e, t, o = { valid: !0 }) => {
										for (let a in e) {
											let i = e[a]
											if (i) {
												let { _f: e, ...l } = i
												if (e) {
													let l = w.array.has(e.name),
														s = i._f && ee(i._f)
													s && E.validatingFields && j([a], !0)
													let u = await es(
														i,
														w.disabled,
														y,
														R,
														r.shouldUseNativeValidation && !t,
														l,
													)
													if (
														(s && E.validatingFields && j([a]),
														u[e.name] && ((o.valid = !1), t))
													)
														break
													t ||
														(p(u, e.name)
															? l
																? eo(n.errors, u, e.name)
																: h(n.errors, e.name, u[e.name])
															: H(n.errors, e.name))
												}
												L(l) || (await V(l, t, o))
											}
										}
										return o.valid
									},
									$ = (e, t) => !r.disabled && (e && t && h(y, e, t), !O(ei(), g)),
									W = (e, t, r) =>
										D(
											e,
											w,
											{ ...(b.mount ? y : f(t) ? g : "string" == typeof e ? { [e]: t } : t) },
											r,
											t,
										),
									U = (e, t, r = {}) => {
										let n = p(m, e),
											o = t
										if (n) {
											let r = n._f
											r &&
												(r.disabled || h(y, e, Y(t, r)),
												(o = F(r.ref) && a(t) ? "" : t),
												"select-multiple" === r.ref.type
													? [...r.ref.options].forEach(
															(e) => (e.selected = o.includes(e.value)),
														)
													: r.refs
														? "checkbox" === r.ref.type
															? r.refs.forEach((e) => {
																	;(e.defaultChecked && e.disabled) ||
																		(Array.isArray(o)
																			? (e.checked = !!o.find(
																					(t) => t === e.value,
																				))
																			: (e.checked = o === e.value || !!o))
																})
															: r.refs.forEach((e) => (e.checked = e.value === o))
														: "file" === r.ref.type
															? (r.ref.value = "")
															: ((r.ref.value = o),
																r.ref.type || k.state.next({ name: e, values: d(y) })))
										}
										;(r.shouldDirty || r.shouldTouch) && T(e, o, r.shouldTouch, r.shouldDirty, !0),
											r.shouldValidate && ea(e)
									},
									K = (e, t, r) => {
										for (let n in t) {
											if (!t.hasOwnProperty(n)) return
											let a = t[n],
												l = e + "." + n,
												s = p(m, l)
											;(w.array.has(e) || i(a) || (s && !s._f)) && !o(a) ? K(l, a, r) : U(l, a, r)
										}
									},
									q = (e, t, r = {}) => {
										let o = p(m, e),
											i = w.array.has(e),
											l = d(t)
										h(y, e, l),
											i
												? (k.array.next({ name: e, values: d(y) }),
													(E.isDirty || E.dirtyFields || C.isDirty || C.dirtyFields) &&
														r.shouldDirty &&
														k.state.next({
															name: e,
															dirtyFields: B(g, y),
															isDirty: $(e, l),
														}))
												: !o || o._f || a(l)
													? U(e, l, r)
													: K(e, l, r),
											et(e, w) && k.state.next({ ...n }),
											k.state.next({ name: b.mount ? e : void 0, values: d(y) })
									},
									X = async (e) => {
										b.mount = !0
										let a = e.target,
											i = a.name,
											s = !0,
											u = p(m, i),
											c = (e) => {
												s = Number.isNaN(e) || (o(e) && isNaN(e.getTime())) || O(e, p(y, i, e))
											},
											f = Q(r.mode),
											g = Q(r.reValidateMode)
										if (u) {
											var P, D, N, M, _
											let o,
												b,
												$,
												B = a.type ? G(u._f) : l(e),
												W = e.type === v || "focusout" === e.type,
												U =
													(!(
														($ = u._f).mount &&
														($.required ||
															$.min ||
															$.max ||
															$.maxLength ||
															$.minLength ||
															$.pattern ||
															$.validate)
													) &&
														!r.resolver &&
														!p(n.errors, i) &&
														!u._f.deps) ||
													((P = W),
													(D = p(n.touchedFields, i)),
													(N = n.isSubmitted),
													(M = g),
													!(_ = f).isOnAll &&
														(!N && _.isOnTouch
															? !(D || P)
															: (N ? M.isOnBlur : _.isOnBlur)
																? !P
																: (N ? !M.isOnChange : !_.isOnChange) || P)),
												K = et(i, w, W)
											h(y, i, B),
												W
													? (u._f.onBlur && u._f.onBlur(e), t && t(0))
													: u._f.onChange && u._f.onChange(e)
											let Y = T(i, B, W),
												q = !L(Y) || K
											if ((W || k.state.next({ name: i, type: e.type, values: d(y) }), U))
												return (
													(E.isValid || C.isValid) &&
														("onBlur" === r.mode ? W && S() : W || S()),
													q && k.state.next({ name: i, ...(K ? {} : Y) })
												)
											if ((!W && K && k.state.next({ ...n }), r.resolver)) {
												let { errors: e } = await A([i])
												if ((c(B), s)) {
													let t = en(n.errors, m, i),
														r = en(e, m, t.name || i)
													;(o = r.error), (i = r.name), (b = L(e))
												}
											} else
												j([i], !0),
													(o = (await es(u, w.disabled, y, R, r.shouldUseNativeValidation))[
														i
													]),
													j([i]),
													c(B),
													s &&
														(o
															? (b = !1)
															: (E.isValid || C.isValid) && (b = await V(m, !0)))
											if (s) {
												u._f.deps && ea(u._f.deps)
												var I = i,
													F = b,
													z = o
												let e = p(n.errors, I),
													a =
														(E.isValid || C.isValid) &&
														"boolean" == typeof F &&
														n.isValid !== F
												if (r.delayError && z) {
													let e
													;(e = () => {
														h(n.errors, I, z), k.state.next({ errors: n.errors })
													}),
														(t = (t) => {
															clearTimeout(x), (x = setTimeout(e, t))
														})(r.delayError)
												} else
													clearTimeout(x), (t = null), z ? h(n.errors, I, z) : H(n.errors, I)
												if ((z ? !O(e, z) : e) || !L(Y) || a) {
													let e = {
														...Y,
														...(a && "boolean" == typeof F ? { isValid: F } : {}),
														errors: n.errors,
														name: I,
													}
													;(n = { ...n, ...e }), k.state.next(e)
												}
											}
										}
									},
									J = (e, t) => {
										if (p(n.errors, t) && e.focus) return e.focus(), 1
									},
									ea = async (e, t = {}) => {
										let o,
											a,
											i = N(e)
										if (r.resolver) {
											let t = await _(f(e) ? e : i)
											;(o = L(t)), (a = e ? !i.some((e) => p(t, e)) : o)
										} else
											e
												? ((a = (
														await Promise.all(
															i.map(async (e) => {
																let t = p(m, e)
																return await V(t && t._f ? { [e]: t } : t)
															}),
														)
													).every(Boolean)) ||
														n.isValid) &&
													S()
												: (a = o = await V(m))
										return (
											k.state.next({
												...("string" != typeof e ||
												((E.isValid || C.isValid) && o !== n.isValid)
													? {}
													: { name: e }),
												...(r.resolver || !e ? { isValid: o } : {}),
												errors: n.errors,
											}),
											t.shouldFocus && !a && er(m, J, e ? i : w.mount),
											a
										)
									},
									ei = (e) => {
										let t = { ...(b.mount ? y : g) }
										return f(e) ? t : "string" == typeof e ? p(t, e) : e.map((e) => p(t, e))
									},
									el = (e, t) => ({
										invalid: !!p((t || n).errors, e),
										isDirty: !!p((t || n).dirtyFields, e),
										error: p((t || n).errors, e),
										isValidating: !!p(n.validatingFields, e),
										isTouched: !!p((t || n).touchedFields, e),
									}),
									ed = (e, t, r) => {
										let o = (p(m, e, { _f: {} })._f || {}).ref,
											{ ref: a, message: i, type: l, ...s } = p(n.errors, e) || {}
										h(n.errors, e, { ...s, ...t, ref: o }),
											k.state.next({ name: e, errors: n.errors, isValid: !1 }),
											r && r.shouldFocus && o && o.focus && o.focus()
									},
									ec = (e) =>
										k.state.subscribe({
											next: (t) => {
												let r, o, a
												;(r = e.name),
													(o = t.name),
													(a = e.exact),
													(!r ||
														!o ||
														r === o ||
														N(r).some(
															(e) =>
																e && (a ? e === o : e.startsWith(o) || o.startsWith(e)),
														)) &&
														((e, t, r, n) => {
															r(e)
															let { name: o, ...a } = e
															return (
																L(a) ||
																Object.keys(a).length >= Object.keys(t).length ||
																Object.keys(a).find((e) => t[e] === (!n || "all"))
															)
														})(t, e.formState || E, eb, e.reRenderRoot) &&
														e.callback({ values: { ...y }, ...n, ...t })
											},
										}).unsubscribe,
									ef = (e, t = {}) => {
										for (let o of e ? N(e) : w.mount)
											w.mount.delete(o),
												w.array.delete(o),
												t.keepValue || (H(m, o), H(y, o)),
												t.keepError || H(n.errors, o),
												t.keepDirty || H(n.dirtyFields, o),
												t.keepTouched || H(n.touchedFields, o),
												t.keepIsValidating || H(n.validatingFields, o),
												r.shouldUnregister || t.keepDefaultValue || H(g, o)
										k.state.next({ values: d(y) }),
											k.state.next({ ...n, ...(!t.keepDirty ? {} : { isDirty: $() }) }),
											t.keepIsValid || S()
									},
									ep = ({ disabled: e, name: t }) => {
										;(("boolean" == typeof e && b.mount) || e || w.disabled.has(t)) &&
											(e ? w.disabled.add(t) : w.disabled.delete(t))
									},
									em = (e, t = {}) => {
										let n = p(m, e),
											o = "boolean" == typeof t.disabled || "boolean" == typeof r.disabled
										return (
											(h(m, e, {
												...(n || {}),
												_f: {
													...(n && n._f ? n._f : { ref: { name: e } }),
													name: e,
													mount: !0,
													...t,
												},
											}),
											w.mount.add(e),
											n)
												? ep({
														disabled:
															"boolean" == typeof t.disabled ? t.disabled : r.disabled,
														name: e,
													})
												: P(e, !0, t.value),
											{
												...(o ? { disabled: t.disabled || r.disabled } : {}),
												...(r.progressive
													? {
															required: !!t.required,
															min: Z(t.min),
															max: Z(t.max),
															minLength: Z(t.minLength),
															maxLength: Z(t.maxLength),
															pattern: Z(t.pattern),
														}
													: {}),
												name: e,
												onChange: X,
												onBlur: X,
												ref: (o) => {
													if (o) {
														let r
														em(e, t), (n = p(m, e))
														let a =
																(f(o.value) &&
																	o.querySelectorAll &&
																	o.querySelectorAll("input,select,textarea")[0]) ||
																o,
															i = "radio" === (r = a).type || "checkbox" === r.type,
															l = n._f.refs || []
														;(i ? l.find((e) => e === a) : a === n._f.ref) ||
															(h(m, e, {
																_f: {
																	...n._f,
																	...(i
																		? {
																				refs: [
																					...l.filter(z),
																					a,
																					...(Array.isArray(p(g, e))
																						? [{}]
																						: []),
																				],
																				ref: { type: a.type, name: e },
																			}
																		: { ref: a }),
																},
															}),
															P(e, !1, void 0, a))
													} else
														(n = p(m, e, {}))._f && (n._f.mount = !1),
															(r.shouldUnregister || t.shouldUnregister) &&
																!(s(w.array, e) && b.action) &&
																w.unMount.add(e)
												},
											}
										)
									},
									eh = () => r.shouldFocusError && er(m, J, w.mount),
									ev = (e, t) => async (o) => {
										let a
										o && (o.preventDefault && o.preventDefault(), o.persist && o.persist())
										let i = d(y)
										if ((k.state.next({ isSubmitting: !0 }), r.resolver)) {
											let { errors: e, values: t } = await A()
											;(n.errors = e), (i = t)
										} else await V(m)
										if (w.disabled.size) for (let e of w.disabled) h(i, e, void 0)
										if ((H(n.errors, "root"), L(n.errors))) {
											k.state.next({ errors: {} })
											try {
												await e(i, o)
											} catch (e) {
												a = e
											}
										} else t && (await t({ ...n.errors }, o)), eh(), setTimeout(eh)
										if (
											(k.state.next({
												isSubmitted: !0,
												isSubmitting: !1,
												isSubmitSuccessful: L(n.errors) && !a,
												submitCount: n.submitCount + 1,
												errors: n.errors,
											}),
											a)
										)
											throw a
									},
									eg = (e, t = {}) => {
										let o = e ? d(e) : g,
											a = d(o),
											i = L(e),
											l = i ? g : a
										if ((t.keepDefaultValues || (g = o), !t.keepValues)) {
											if (t.keepDirtyValues)
												for (let e of Array.from(
													new Set([...w.mount, ...Object.keys(B(g, y))]),
												))
													p(n.dirtyFields, e) ? h(l, e, p(y, e)) : q(e, p(l, e))
											else {
												if (u && f(e))
													for (let e of w.mount) {
														let t = p(m, e)
														if (t && t._f) {
															let e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref
															if (F(e)) {
																let t = e.closest("form")
																if (t) {
																	t.reset()
																	break
																}
															}
														}
													}
												for (let e of w.mount) q(e, p(l, e))
											}
											;(y = d(l)),
												k.array.next({ values: { ...l } }),
												k.state.next({ values: { ...l } })
										}
										;(w = {
											mount: t.keepDirtyValues ? w.mount : new Set(),
											unMount: new Set(),
											array: new Set(),
											disabled: new Set(),
											watch: new Set(),
											watchAll: !1,
											focus: "",
										}),
											(b.mount = !E.isValid || !!t.keepIsValid || !!t.keepDirtyValues),
											(b.watch = !!r.shouldUnregister),
											k.state.next({
												submitCount: t.keepSubmitCount ? n.submitCount : 0,
												isDirty:
													!i &&
													(t.keepDirty ? n.isDirty : !!(t.keepDefaultValues && !O(e, g))),
												isSubmitted: !!t.keepIsSubmitted && n.isSubmitted,
												dirtyFields: i
													? {}
													: t.keepDirtyValues
														? t.keepDefaultValues && y
															? B(g, y)
															: n.dirtyFields
														: t.keepDefaultValues && e
															? B(g, e)
															: t.keepDirty
																? n.dirtyFields
																: {},
												touchedFields: t.keepTouched ? n.touchedFields : {},
												errors: t.keepErrors ? n.errors : {},
												isSubmitSuccessful: !!t.keepIsSubmitSuccessful && n.isSubmitSuccessful,
												isSubmitting: !1,
											})
									},
									ey = (e, t) => eg(I(e) ? e(y) : e, t),
									eb = (e) => {
										n = { ...n, ...e }
									},
									ew = {
										control: {
											register: em,
											unregister: ef,
											getFieldState: el,
											handleSubmit: ev,
											setError: ed,
											_subscribe: ec,
											_runSchema: A,
											_focusError: eh,
											_getWatch: W,
											_getDirty: $,
											_setValid: S,
											_setFieldArray: (e, t = [], o, a, i = !0, l = !0) => {
												if (a && o && !r.disabled) {
													if (((b.action = !0), l && Array.isArray(p(m, e)))) {
														let t = o(p(m, e), a.argA, a.argB)
														i && h(m, e, t)
													}
													if (l && Array.isArray(p(n.errors, e))) {
														let t,
															r = o(p(n.errors, e), a.argA, a.argB)
														i && h(n.errors, e, r),
															c(p((t = n.errors), e)).length || H(t, e)
													}
													if (
														(E.touchedFields || C.touchedFields) &&
														l &&
														Array.isArray(p(n.touchedFields, e))
													) {
														let t = o(p(n.touchedFields, e), a.argA, a.argB)
														i && h(n.touchedFields, e, t)
													}
													;(E.dirtyFields || C.dirtyFields) && (n.dirtyFields = B(g, y)),
														k.state.next({
															name: e,
															isDirty: $(e, t),
															dirtyFields: n.dirtyFields,
															errors: n.errors,
															isValid: n.isValid,
														})
												} else h(y, e, t)
											},
											_setDisabledField: ep,
											_setErrors: (e) => {
												;(n.errors = e), k.state.next({ errors: n.errors, isValid: !1 })
											},
											_getFieldArray: (e) =>
												c(p(b.mount ? y : g, e, r.shouldUnregister ? p(g, e, []) : [])),
											_reset: eg,
											_resetDefaultValues: () =>
												I(r.defaultValues) &&
												r.defaultValues().then((e) => {
													ey(e, r.resetOptions), k.state.next({ isLoading: !1 })
												}),
											_removeUnmounted: () => {
												for (let e of w.unMount) {
													let t = p(m, e)
													t &&
														(t._f.refs ? t._f.refs.every((e) => !z(e)) : !z(t._f.ref)) &&
														ef(e)
												}
												w.unMount = new Set()
											},
											_disableForm: (e) => {
												"boolean" == typeof e &&
													(k.state.next({ disabled: e }),
													er(
														m,
														(t, r) => {
															let n = p(m, r)
															n &&
																((t.disabled = n._f.disabled || e),
																Array.isArray(n._f.refs) &&
																	n._f.refs.forEach((t) => {
																		t.disabled = n._f.disabled || e
																	}))
														},
														0,
														!1,
													))
											},
											_subjects: k,
											_proxyFormState: E,
											get _fields() {
												return m
											},
											get _formValues() {
												return y
											},
											get _state() {
												return b
											},
											set _state(value) {
												b = value
											},
											get _defaultValues() {
												return g
											},
											get _names() {
												return w
											},
											set _names(value) {
												w = value
											},
											get _formState() {
												return n
											},
											get _options() {
												return r
											},
											set _options(value) {
												r = { ...r, ...value }
											},
										},
										subscribe: (e) => (
											(b.mount = !0), (C = { ...C, ...e.formState }), ec({ ...e, formState: C })
										),
										trigger: ea,
										register: em,
										handleSubmit: ev,
										watch: (e, t) =>
											I(e) ? k.state.subscribe({ next: (r) => e(W(void 0, t), r) }) : W(e, t, !0),
										setValue: q,
										getValues: ei,
										reset: ey,
										resetField: (e, t = {}) => {
											p(m, e) &&
												(f(t.defaultValue)
													? q(e, d(p(g, e)))
													: (q(e, t.defaultValue), h(g, e, d(t.defaultValue))),
												t.keepTouched || H(n.touchedFields, e),
												t.keepDirty ||
													(H(n.dirtyFields, e),
													(n.isDirty = t.defaultValue ? $(e, d(p(g, e))) : $())),
												!t.keepError && (H(n.errors, e), E.isValid && S()),
												k.state.next({ ...n }))
										},
										clearErrors: (e) => {
											e && N(e).forEach((e) => H(n.errors, e)),
												k.state.next({ errors: e ? n.errors : {} })
										},
										unregister: ef,
										setError: ed,
										setFocus: (e, t = {}) => {
											let r = p(m, e),
												n = r && r._f
											if (n) {
												let e = n.refs ? n.refs[0] : n.ref
												e.focus && (e.focus(), t.shouldSelect && I(e.select) && e.select())
											}
										},
										getFieldState: el,
									}
								return { ...ew, formControl: ew }
							})(e)),
					formState: m,
				}),
				e.formControl &&
					e.defaultValues &&
					!I(e.defaultValues) &&
					e.formControl.reset(e.defaultValues, e.resetOptions))
			let y = t.current.control
			return (
				(y._options = e),
				j(() => {
					let e = y._subscribe({
						formState: y._proxyFormState,
						callback: () => g({ ...y._formState }),
						reRenderRoot: !0,
					})
					return g((e) => ({ ...e, isReady: !0 })), (y._formState.isReady = !0), e
				}, [y]),
				r.default.useEffect(() => y._disableForm(e.disabled), [y, e.disabled]),
				r.default.useEffect(() => {
					e.mode && (y._options.mode = e.mode),
						e.reValidateMode && (y._options.reValidateMode = e.reValidateMode)
				}, [y, e.mode, e.reValidateMode]),
				r.default.useEffect(() => {
					e.errors && (y._setErrors(e.errors), y._focusError())
				}, [y, e.errors]),
				r.default.useEffect(() => {
					e.shouldUnregister && y._subjects.state.next({ values: y._getWatch() })
				}, [y, e.shouldUnregister]),
				r.default.useEffect(() => {
					if (y._proxyFormState.isDirty) {
						let e = y._getDirty()
						e !== m.isDirty && y._subjects.state.next({ isDirty: e })
					}
				}, [y, m.isDirty]),
				r.default.useEffect(() => {
					e.values && !O(e.values, n.current)
						? (y._reset(e.values, y._options.resetOptions), (n.current = e.values), g((e) => ({ ...e })))
						: y._resetDefaultValues()
				}, [y, e.values]),
				r.default.useEffect(() => {
					y._state.mount || (y._setValid(), (y._state.mount = !0)),
						y._state.watch && ((y._state.watch = !1), y._subjects.state.next({ ...y._formState })),
						y._removeUnmounted()
				}),
				(t.current.formState = S(m, y)),
				t.current
			)
		}
		e.s(
			[
				"Controller",
				() => T,
				"FormProvider",
				() => R,
				"appendErrors",
				() => A,
				"get",
				() => p,
				"set",
				() => h,
				"useForm",
				() => ed,
				"useFormContext",
				() => k,
				"useFormState",
				() => P,
			],
			72616,
		)
		var ec = e.i(46030),
			ef = e.i(64514)
		let ep = r.createContext({}),
			em = ({ ...e }) => (0, t.jsx)(ep.Provider, { value: { name: e.name }, children: (0, t.jsx)(T, { ...e }) }),
			eh = () => {
				let e = r.useContext(ep),
					t = r.useContext(ev),
					{ getFieldState: n } = k(),
					o = P({ name: e.name }),
					a = n(e.name, o)
				if (!e) throw Error("useFormField should be used within <FormField>")
				let { id: i } = t
				return {
					id: i,
					name: e.name,
					formItemId: `${i}-form-item`,
					formDescriptionId: `${i}-form-item-description`,
					formMessageId: `${i}-form-item-message`,
					...a,
				}
			},
			ev = r.createContext({})
		function eg({ className: e, ...n }) {
			let o = r.useId()
			return (0, t.jsx)(ev.Provider, {
				value: { id: o },
				children: (0, t.jsx)("div", { "data-slot": "form-item", className: (0, ec.cn)("grid gap-2", e), ...n }),
			})
		}
		function ey({ className: e, ...r }) {
			let { error: n, formItemId: o } = eh()
			return (0, t.jsx)(ef.Label, {
				"data-slot": "form-label",
				"data-error": !!n,
				className: (0, ec.cn)("data-[error=true]:text-destructive", e),
				htmlFor: o,
				...r,
			})
		}
		function eb({ ...e }) {
			let { error: r, formItemId: o, formDescriptionId: a, formMessageId: i } = eh()
			return (0, t.jsx)(n.Slot, {
				"data-slot": "form-control",
				id: o,
				"aria-describedby": r ? `${a} ${i}` : `${a}`,
				"aria-invalid": !!r,
				...e,
			})
		}
		function ew({ className: e, ...r }) {
			let { formDescriptionId: n } = eh()
			return (0, t.jsx)("p", {
				"data-slot": "form-description",
				id: n,
				className: (0, ec.cn)("text-muted-foreground text-sm", e),
				...r,
			})
		}
		function ex({ className: e, ...r }) {
			let { error: n, formMessageId: o } = eh(),
				a = n ? String(n?.message ?? "") : r.children
			return a
				? (0, t.jsx)("p", {
						"data-slot": "form-message",
						id: o,
						className: (0, ec.cn)("text-destructive text-sm", e),
						...r,
						children: a,
					})
				: null
		}
		e.s(
			[
				"Form",
				() => R,
				"FormControl",
				() => eb,
				"FormDescription",
				() => ew,
				"FormField",
				() => em,
				"FormItem",
				() => eg,
				"FormLabel",
				() => ey,
				"FormMessage",
				() => ex,
				"useFormField",
				() => eh,
			],
			7675,
		)
	},
	91376,
	(e) => {
		"use strict"
		var t = e.i(8026),
			r = e.i(10008),
			n = e.i(75453),
			o = e.i(26613),
			a = e.i(4113),
			i = e.i(34692),
			l = e.i(77543),
			s = e.i(74382),
			u = e.i(55162),
			d = e.i(68307),
			c = e.i(85326),
			f = e.i(98753),
			p = e.i(66791),
			m = e.i(16853),
			h = e.i(93180),
			v = e.i(45751),
			g = e.i(4880),
			y = "Popover",
			[b, w] = (0, a.createContextScope)(y, [d.createPopperScope]),
			x = (0, d.createPopperScope)(),
			[E, C] = b(y),
			k = (e) => {
				let { __scopePopover: n, children: o, open: a, defaultOpen: i, onOpenChange: l, modal: s = !1 } = e,
					c = x(n),
					f = r.useRef(null),
					[p, m] = r.useState(!1),
					[v, g] = (0, h.useControllableState)({ prop: a, defaultProp: i ?? !1, onChange: l, caller: y })
				return (0, t.jsx)(d.Root, {
					...c,
					children: (0, t.jsx)(E, {
						scope: n,
						contentId: (0, u.useId)(),
						triggerRef: f,
						open: v,
						onOpenChange: g,
						onOpenToggle: r.useCallback(() => g((e) => !e), [g]),
						hasCustomAnchor: p,
						onCustomAnchorAdd: r.useCallback(() => m(!0), []),
						onCustomAnchorRemove: r.useCallback(() => m(!1), []),
						modal: s,
						children: o,
					}),
				})
			}
		k.displayName = y
		var R = "PopoverAnchor",
			S = r.forwardRef((e, n) => {
				let { __scopePopover: o, ...a } = e,
					i = C(R, o),
					l = x(o),
					{ onCustomAnchorAdd: s, onCustomAnchorRemove: u } = i
				return r.useEffect(() => (s(), () => u()), [s, u]), (0, t.jsx)(d.Anchor, { ...l, ...a, ref: n })
			})
		S.displayName = R
		var j = "PopoverTrigger",
			P = r.forwardRef((e, r) => {
				let { __scopePopover: a, ...i } = e,
					l = C(j, a),
					s = x(a),
					u = (0, o.useComposedRefs)(r, l.triggerRef),
					c = (0, t.jsx)(p.Primitive.button, {
						type: "button",
						"aria-haspopup": "dialog",
						"aria-expanded": l.open,
						"aria-controls": l.contentId,
						"data-state": H(l.open),
						...i,
						ref: u,
						onClick: (0, n.composeEventHandlers)(e.onClick, l.onOpenToggle),
					})
				return l.hasCustomAnchor ? c : (0, t.jsx)(d.Anchor, { asChild: !0, ...s, children: c })
			})
		P.displayName = j
		var D = "PopoverPortal",
			[T, A] = b(D, { forceMount: void 0 }),
			N = (e) => {
				let { __scopePopover: r, forceMount: n, children: o, container: a } = e,
					i = C(D, r)
				return (0, t.jsx)(T, {
					scope: r,
					forceMount: n,
					children: (0, t.jsx)(f.Presence, {
						present: n || i.open,
						children: (0, t.jsx)(c.Portal, { asChild: !0, container: a, children: o }),
					}),
				})
			}
		N.displayName = D
		var M = "PopoverContent",
			_ = r.forwardRef((e, r) => {
				let n = A(M, e.__scopePopover),
					{ forceMount: o = n.forceMount, ...a } = e,
					i = C(M, e.__scopePopover)
				return (0, t.jsx)(f.Presence, {
					present: o || i.open,
					children: i.modal ? (0, t.jsx)(L, { ...a, ref: r }) : (0, t.jsx)(I, { ...a, ref: r }),
				})
			})
		_.displayName = M
		var O = (0, m.createSlot)("PopoverContent.RemoveScroll"),
			L = r.forwardRef((e, a) => {
				let i = C(M, e.__scopePopover),
					l = r.useRef(null),
					s = (0, o.useComposedRefs)(a, l),
					u = r.useRef(!1)
				return (
					r.useEffect(() => {
						let e = l.current
						if (e) return (0, v.hideOthers)(e)
					}, []),
					(0, t.jsx)(g.RemoveScroll, {
						as: O,
						allowPinchZoom: !0,
						children: (0, t.jsx)(F, {
							...e,
							ref: s,
							trapFocus: i.open,
							disableOutsidePointerEvents: !0,
							onCloseAutoFocus: (0, n.composeEventHandlers)(e.onCloseAutoFocus, (e) => {
								e.preventDefault(), u.current || i.triggerRef.current?.focus()
							}),
							onPointerDownOutside: (0, n.composeEventHandlers)(
								e.onPointerDownOutside,
								(e) => {
									let t = e.detail.originalEvent,
										r = 0 === t.button && !0 === t.ctrlKey
									u.current = 2 === t.button || r
								},
								{ checkForDefaultPrevented: !1 },
							),
							onFocusOutside: (0, n.composeEventHandlers)(e.onFocusOutside, (e) => e.preventDefault(), {
								checkForDefaultPrevented: !1,
							}),
						}),
					})
				)
			}),
			I = r.forwardRef((e, n) => {
				let o = C(M, e.__scopePopover),
					a = r.useRef(!1),
					i = r.useRef(!1)
				return (0, t.jsx)(F, {
					...e,
					ref: n,
					trapFocus: !1,
					disableOutsidePointerEvents: !1,
					onCloseAutoFocus: (t) => {
						e.onCloseAutoFocus?.(t),
							t.defaultPrevented || (a.current || o.triggerRef.current?.focus(), t.preventDefault()),
							(a.current = !1),
							(i.current = !1)
					},
					onInteractOutside: (t) => {
						e.onInteractOutside?.(t),
							t.defaultPrevented ||
								((a.current = !0), "pointerdown" === t.detail.originalEvent.type && (i.current = !0))
						let r = t.target
						o.triggerRef.current?.contains(r) && t.preventDefault(),
							"focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
					},
				})
			}),
			F = r.forwardRef((e, r) => {
				let {
						__scopePopover: n,
						trapFocus: o,
						onOpenAutoFocus: a,
						onCloseAutoFocus: u,
						disableOutsidePointerEvents: c,
						onEscapeKeyDown: f,
						onPointerDownOutside: p,
						onFocusOutside: m,
						onInteractOutside: h,
						...v
					} = e,
					g = C(M, n),
					y = x(n)
				return (
					(0, l.useFocusGuards)(),
					(0, t.jsx)(s.FocusScope, {
						asChild: !0,
						loop: !0,
						trapped: o,
						onMountAutoFocus: a,
						onUnmountAutoFocus: u,
						children: (0, t.jsx)(i.DismissableLayer, {
							asChild: !0,
							disableOutsidePointerEvents: c,
							onInteractOutside: h,
							onEscapeKeyDown: f,
							onPointerDownOutside: p,
							onFocusOutside: m,
							onDismiss: () => g.onOpenChange(!1),
							children: (0, t.jsx)(d.Content, {
								"data-state": H(g.open),
								role: "dialog",
								id: g.contentId,
								...y,
								...v,
								ref: r,
								style: {
									...v.style,
									"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
									"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
									"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
									"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
									"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)",
								},
							}),
						}),
					})
				)
			}),
			z = "PopoverClose"
		function H(e) {
			return e ? "open" : "closed"
		}
		;(r.forwardRef((e, r) => {
			let { __scopePopover: o, ...a } = e,
				i = C(z, o)
			return (0, t.jsx)(p.Primitive.button, {
				type: "button",
				...a,
				ref: r,
				onClick: (0, n.composeEventHandlers)(e.onClick, () => i.onOpenChange(!1)),
			})
		}).displayName = z),
			(r.forwardRef((e, r) => {
				let { __scopePopover: n, ...o } = e,
					a = x(n)
				return (0, t.jsx)(d.Arrow, { ...a, ...o, ref: r })
			}).displayName = "PopoverArrow")
		var V = e.i(46030)
		function $({ ...e }) {
			return (0, t.jsx)(k, { "data-slot": "popover", ...e })
		}
		function B({ ...e }) {
			return (0, t.jsx)(P, { "data-slot": "popover-trigger", ...e })
		}
		function W({ className: e, align: r = "center", sideOffset: n = 4, ...o }) {
			return (0, t.jsx)(N, {
				children: (0, t.jsx)(_, {
					"data-slot": "popover-content",
					align: r,
					sideOffset: n,
					className: (0, V.cn)(
						"bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-sm border p-4 shadow-md outline-hidden",
						e,
					),
					...o,
				}),
			})
		}
		function U({ ...e }) {
			return (0, t.jsx)(S, { "data-slot": "popover-anchor", ...e })
		}
		e.s(["Popover", () => $, "PopoverAnchor", () => U, "PopoverContent", () => W, "PopoverTrigger", () => B], 91376)
	},
	27069,
	(e) => {
		"use strict"
		function t(e, [t, r]) {
			return Math.min(r, Math.max(t, e))
		}
		e.s(["clamp", () => t])
	},
	92817,
	(e) => {
		"use strict"
		var t = e.i(8026),
			r = e.i(10008),
			n = e.i(24805),
			o = e.i(98753),
			a = e.i(4113),
			i = e.i(26613),
			l = e.i(84123),
			s = e.i(78883),
			u = e.i(29241),
			d = e.i(27069),
			c = e.i(75453),
			f = "ScrollArea",
			[p, m] = (0, a.createContextScope)(f),
			[h, v] = p(f),
			g = r.forwardRef((e, o) => {
				let { __scopeScrollArea: a, type: l = "hover", dir: u, scrollHideDelay: d = 600, ...c } = e,
					[f, p] = r.useState(null),
					[m, v] = r.useState(null),
					[g, y] = r.useState(null),
					[b, w] = r.useState(null),
					[x, E] = r.useState(null),
					[C, k] = r.useState(0),
					[R, S] = r.useState(0),
					[j, P] = r.useState(!1),
					[D, T] = r.useState(!1),
					A = (0, i.useComposedRefs)(o, (e) => p(e)),
					N = (0, s.useDirection)(u)
				return (0, t.jsx)(h, {
					scope: a,
					type: l,
					dir: N,
					scrollHideDelay: d,
					scrollArea: f,
					viewport: m,
					onViewportChange: v,
					content: g,
					onContentChange: y,
					scrollbarX: b,
					onScrollbarXChange: w,
					scrollbarXEnabled: j,
					onScrollbarXEnabledChange: P,
					scrollbarY: x,
					onScrollbarYChange: E,
					scrollbarYEnabled: D,
					onScrollbarYEnabledChange: T,
					onCornerWidthChange: k,
					onCornerHeightChange: S,
					children: (0, t.jsx)(n.Primitive.div, {
						dir: N,
						...c,
						ref: A,
						style: {
							position: "relative",
							"--radix-scroll-area-corner-width": C + "px",
							"--radix-scroll-area-corner-height": R + "px",
							...e.style,
						},
					}),
				})
			})
		g.displayName = f
		var y = "ScrollAreaViewport",
			b = r.forwardRef((e, o) => {
				let { __scopeScrollArea: a, children: l, nonce: s, ...u } = e,
					d = v(y, a),
					c = r.useRef(null),
					f = (0, i.useComposedRefs)(o, c, d.onViewportChange)
				return (0, t.jsxs)(t.Fragment, {
					children: [
						(0, t.jsx)("style", {
							dangerouslySetInnerHTML: {
								__html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
							},
							nonce: s,
						}),
						(0, t.jsx)(n.Primitive.div, {
							"data-radix-scroll-area-viewport": "",
							...u,
							ref: f,
							style: {
								overflowX: d.scrollbarXEnabled ? "scroll" : "hidden",
								overflowY: d.scrollbarYEnabled ? "scroll" : "hidden",
								...e.style,
							},
							children: (0, t.jsx)("div", {
								ref: d.onContentChange,
								style: { minWidth: "100%", display: "table" },
								children: l,
							}),
						}),
					],
				})
			})
		b.displayName = y
		var w = "ScrollAreaScrollbar",
			x = r.forwardRef((e, n) => {
				let { forceMount: o, ...a } = e,
					i = v(w, e.__scopeScrollArea),
					{ onScrollbarXEnabledChange: l, onScrollbarYEnabledChange: s } = i,
					u = "horizontal" === e.orientation
				return (
					r.useEffect(
						() => (
							u ? l(!0) : s(!0),
							() => {
								u ? l(!1) : s(!1)
							}
						),
						[u, l, s],
					),
					"hover" === i.type
						? (0, t.jsx)(E, { ...a, ref: n, forceMount: o })
						: "scroll" === i.type
							? (0, t.jsx)(C, { ...a, ref: n, forceMount: o })
							: "auto" === i.type
								? (0, t.jsx)(k, { ...a, ref: n, forceMount: o })
								: "always" === i.type
									? (0, t.jsx)(R, { ...a, ref: n })
									: null
				)
			})
		x.displayName = w
		var E = r.forwardRef((e, n) => {
				let { forceMount: a, ...i } = e,
					l = v(w, e.__scopeScrollArea),
					[s, u] = r.useState(!1)
				return (
					r.useEffect(() => {
						let e = l.scrollArea,
							t = 0
						if (e) {
							let r = () => {
									window.clearTimeout(t), u(!0)
								},
								n = () => {
									t = window.setTimeout(() => u(!1), l.scrollHideDelay)
								}
							return (
								e.addEventListener("pointerenter", r),
								e.addEventListener("pointerleave", n),
								() => {
									window.clearTimeout(t),
										e.removeEventListener("pointerenter", r),
										e.removeEventListener("pointerleave", n)
								}
							)
						}
					}, [l.scrollArea, l.scrollHideDelay]),
					(0, t.jsx)(o.Presence, {
						present: a || s,
						children: (0, t.jsx)(k, { "data-state": s ? "visible" : "hidden", ...i, ref: n }),
					})
				)
			}),
			C = r.forwardRef((e, n) => {
				var a
				let { forceMount: i, ...l } = e,
					s = v(w, e.__scopeScrollArea),
					u = "horizontal" === e.orientation,
					d = B(() => p("SCROLL_END"), 100),
					[f, p] =
						((a = {
							hidden: { SCROLL: "scrolling" },
							scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
							interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
							idle: { HIDE: "hidden", SCROLL: "scrolling", POINTER_ENTER: "interacting" },
						}),
						r.useReducer((e, t) => a[e][t] ?? e, "hidden"))
				return (
					r.useEffect(() => {
						if ("idle" === f) {
							let e = window.setTimeout(() => p("HIDE"), s.scrollHideDelay)
							return () => window.clearTimeout(e)
						}
					}, [f, s.scrollHideDelay, p]),
					r.useEffect(() => {
						let e = s.viewport,
							t = u ? "scrollLeft" : "scrollTop"
						if (e) {
							let r = e[t],
								n = () => {
									let n = e[t]
									r !== n && (p("SCROLL"), d()), (r = n)
								}
							return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
						}
					}, [s.viewport, u, p, d]),
					(0, t.jsx)(o.Presence, {
						present: i || "hidden" !== f,
						children: (0, t.jsx)(R, {
							"data-state": "hidden" === f ? "hidden" : "visible",
							...l,
							ref: n,
							onPointerEnter: (0, c.composeEventHandlers)(e.onPointerEnter, () => p("POINTER_ENTER")),
							onPointerLeave: (0, c.composeEventHandlers)(e.onPointerLeave, () => p("POINTER_LEAVE")),
						}),
					})
				)
			}),
			k = r.forwardRef((e, n) => {
				let a = v(w, e.__scopeScrollArea),
					{ forceMount: i, ...l } = e,
					[s, u] = r.useState(!1),
					d = "horizontal" === e.orientation,
					c = B(() => {
						if (a.viewport) {
							let e = a.viewport.offsetWidth < a.viewport.scrollWidth,
								t = a.viewport.offsetHeight < a.viewport.scrollHeight
							u(d ? e : t)
						}
					}, 10)
				return (
					W(a.viewport, c),
					W(a.content, c),
					(0, t.jsx)(o.Presence, {
						present: i || s,
						children: (0, t.jsx)(R, { "data-state": s ? "visible" : "hidden", ...l, ref: n }),
					})
				)
			}),
			R = r.forwardRef((e, n) => {
				let { orientation: o = "vertical", ...a } = e,
					i = v(w, e.__scopeScrollArea),
					l = r.useRef(null),
					s = r.useRef(0),
					[u, d] = r.useState({
						content: 0,
						viewport: 0,
						scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
					}),
					c = F(u.viewport, u.content),
					f = {
						...a,
						sizes: u,
						onSizesChange: d,
						hasThumb: !!(c > 0 && c < 1),
						onThumbChange: (e) => (l.current = e),
						onThumbPointerUp: () => (s.current = 0),
						onThumbPointerDown: (e) => (s.current = e),
					}
				function p(e, t) {
					return (function (e, t, r, n = "ltr") {
						let o = z(r),
							a = t || o / 2,
							i = r.scrollbar.paddingStart + a,
							l = r.scrollbar.size - r.scrollbar.paddingEnd - (o - a),
							s = r.content - r.viewport
						return V([i, l], "ltr" === n ? [0, s] : [-1 * s, 0])(e)
					})(e, s.current, u, t)
				}
				return "horizontal" === o
					? (0, t.jsx)(S, {
							...f,
							ref: n,
							onThumbPositionChange: () => {
								if (i.viewport && l.current) {
									let e = H(i.viewport.scrollLeft, u, i.dir)
									l.current.style.transform = `translate3d(${e}px, 0, 0)`
								}
							},
							onWheelScroll: (e) => {
								i.viewport && (i.viewport.scrollLeft = e)
							},
							onDragScroll: (e) => {
								i.viewport && (i.viewport.scrollLeft = p(e, i.dir))
							},
						})
					: "vertical" === o
						? (0, t.jsx)(j, {
								...f,
								ref: n,
								onThumbPositionChange: () => {
									if (i.viewport && l.current) {
										let e = H(i.viewport.scrollTop, u)
										l.current.style.transform = `translate3d(0, ${e}px, 0)`
									}
								},
								onWheelScroll: (e) => {
									i.viewport && (i.viewport.scrollTop = e)
								},
								onDragScroll: (e) => {
									i.viewport && (i.viewport.scrollTop = p(e))
								},
							})
						: null
			}),
			S = r.forwardRef((e, n) => {
				let { sizes: o, onSizesChange: a, ...l } = e,
					s = v(w, e.__scopeScrollArea),
					[u, d] = r.useState(),
					c = r.useRef(null),
					f = (0, i.useComposedRefs)(n, c, s.onScrollbarXChange)
				return (
					r.useEffect(() => {
						c.current && d(getComputedStyle(c.current))
					}, [c]),
					(0, t.jsx)(T, {
						"data-orientation": "horizontal",
						...l,
						ref: f,
						sizes: o,
						style: {
							bottom: 0,
							left: "rtl" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
							right: "ltr" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
							"--radix-scroll-area-thumb-width": z(o) + "px",
							...e.style,
						},
						onThumbPointerDown: (t) => e.onThumbPointerDown(t.x),
						onDragScroll: (t) => e.onDragScroll(t.x),
						onWheelScroll: (t, r) => {
							if (s.viewport) {
								var n, o
								let a = s.viewport.scrollLeft + t.deltaX
								e.onWheelScroll(a), (n = a), (o = r), n > 0 && n < o && t.preventDefault()
							}
						},
						onResize: () => {
							c.current &&
								s.viewport &&
								u &&
								a({
									content: s.viewport.scrollWidth,
									viewport: s.viewport.offsetWidth,
									scrollbar: {
										size: c.current.clientWidth,
										paddingStart: I(u.paddingLeft),
										paddingEnd: I(u.paddingRight),
									},
								})
						},
					})
				)
			}),
			j = r.forwardRef((e, n) => {
				let { sizes: o, onSizesChange: a, ...l } = e,
					s = v(w, e.__scopeScrollArea),
					[u, d] = r.useState(),
					c = r.useRef(null),
					f = (0, i.useComposedRefs)(n, c, s.onScrollbarYChange)
				return (
					r.useEffect(() => {
						c.current && d(getComputedStyle(c.current))
					}, [c]),
					(0, t.jsx)(T, {
						"data-orientation": "vertical",
						...l,
						ref: f,
						sizes: o,
						style: {
							top: 0,
							right: "ltr" === s.dir ? 0 : void 0,
							left: "rtl" === s.dir ? 0 : void 0,
							bottom: "var(--radix-scroll-area-corner-height)",
							"--radix-scroll-area-thumb-height": z(o) + "px",
							...e.style,
						},
						onThumbPointerDown: (t) => e.onThumbPointerDown(t.y),
						onDragScroll: (t) => e.onDragScroll(t.y),
						onWheelScroll: (t, r) => {
							if (s.viewport) {
								var n, o
								let a = s.viewport.scrollTop + t.deltaY
								e.onWheelScroll(a), (n = a), (o = r), n > 0 && n < o && t.preventDefault()
							}
						},
						onResize: () => {
							c.current &&
								s.viewport &&
								u &&
								a({
									content: s.viewport.scrollHeight,
									viewport: s.viewport.offsetHeight,
									scrollbar: {
										size: c.current.clientHeight,
										paddingStart: I(u.paddingTop),
										paddingEnd: I(u.paddingBottom),
									},
								})
						},
					})
				)
			}),
			[P, D] = p(w),
			T = r.forwardRef((e, o) => {
				let {
						__scopeScrollArea: a,
						sizes: s,
						hasThumb: u,
						onThumbChange: d,
						onThumbPointerUp: f,
						onThumbPointerDown: p,
						onThumbPositionChange: m,
						onDragScroll: h,
						onWheelScroll: g,
						onResize: y,
						...b
					} = e,
					x = v(w, a),
					[E, C] = r.useState(null),
					k = (0, i.useComposedRefs)(o, (e) => C(e)),
					R = r.useRef(null),
					S = r.useRef(""),
					j = x.viewport,
					D = s.content - s.viewport,
					T = (0, l.useCallbackRef)(g),
					A = (0, l.useCallbackRef)(m),
					N = B(y, 10)
				function M(e) {
					R.current && h({ x: e.clientX - R.current.left, y: e.clientY - R.current.top })
				}
				return (
					r.useEffect(() => {
						let e = (e) => {
							let t = e.target
							E?.contains(t) && T(e, D)
						}
						return (
							document.addEventListener("wheel", e, { passive: !1 }),
							() => document.removeEventListener("wheel", e, { passive: !1 })
						)
					}, [j, E, D, T]),
					r.useEffect(A, [s, A]),
					W(E, N),
					W(x.content, N),
					(0, t.jsx)(P, {
						scope: a,
						scrollbar: E,
						hasThumb: u,
						onThumbChange: (0, l.useCallbackRef)(d),
						onThumbPointerUp: (0, l.useCallbackRef)(f),
						onThumbPositionChange: A,
						onThumbPointerDown: (0, l.useCallbackRef)(p),
						children: (0, t.jsx)(n.Primitive.div, {
							...b,
							ref: k,
							style: { position: "absolute", ...b.style },
							onPointerDown: (0, c.composeEventHandlers)(e.onPointerDown, (e) => {
								0 === e.button &&
									(e.target.setPointerCapture(e.pointerId),
									(R.current = E.getBoundingClientRect()),
									(S.current = document.body.style.webkitUserSelect),
									(document.body.style.webkitUserSelect = "none"),
									x.viewport && (x.viewport.style.scrollBehavior = "auto"),
									M(e))
							}),
							onPointerMove: (0, c.composeEventHandlers)(e.onPointerMove, M),
							onPointerUp: (0, c.composeEventHandlers)(e.onPointerUp, (e) => {
								let t = e.target
								t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
									(document.body.style.webkitUserSelect = S.current),
									x.viewport && (x.viewport.style.scrollBehavior = ""),
									(R.current = null)
							}),
						}),
					})
				)
			}),
			A = "ScrollAreaThumb",
			N = r.forwardRef((e, r) => {
				let { forceMount: n, ...a } = e,
					i = D(A, e.__scopeScrollArea)
				return (0, t.jsx)(o.Presence, { present: n || i.hasThumb, children: (0, t.jsx)(M, { ref: r, ...a }) })
			}),
			M = r.forwardRef((e, o) => {
				let { __scopeScrollArea: a, style: l, ...s } = e,
					u = v(A, a),
					d = D(A, a),
					{ onThumbPositionChange: f } = d,
					p = (0, i.useComposedRefs)(o, (e) => d.onThumbChange(e)),
					m = r.useRef(void 0),
					h = B(() => {
						m.current && (m.current(), (m.current = void 0))
					}, 100)
				return (
					r.useEffect(() => {
						let e = u.viewport
						if (e) {
							let t = () => {
								h(), m.current || ((m.current = $(e, f)), f())
							}
							return f(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
						}
					}, [u.viewport, h, f]),
					(0, t.jsx)(n.Primitive.div, {
						"data-state": d.hasThumb ? "visible" : "hidden",
						...s,
						ref: p,
						style: {
							width: "var(--radix-scroll-area-thumb-width)",
							height: "var(--radix-scroll-area-thumb-height)",
							...l,
						},
						onPointerDownCapture: (0, c.composeEventHandlers)(e.onPointerDownCapture, (e) => {
							let t = e.target.getBoundingClientRect(),
								r = e.clientX - t.left,
								n = e.clientY - t.top
							d.onThumbPointerDown({ x: r, y: n })
						}),
						onPointerUp: (0, c.composeEventHandlers)(e.onPointerUp, d.onThumbPointerUp),
					})
				)
			})
		N.displayName = A
		var _ = "ScrollAreaCorner",
			O = r.forwardRef((e, r) => {
				let n = v(_, e.__scopeScrollArea),
					o = !!(n.scrollbarX && n.scrollbarY)
				return "scroll" !== n.type && o ? (0, t.jsx)(L, { ...e, ref: r }) : null
			})
		O.displayName = _
		var L = r.forwardRef((e, o) => {
			let { __scopeScrollArea: a, ...i } = e,
				l = v(_, a),
				[s, u] = r.useState(0),
				[d, c] = r.useState(0),
				f = !!(s && d)
			return (
				W(l.scrollbarX, () => {
					let e = l.scrollbarX?.offsetHeight || 0
					l.onCornerHeightChange(e), c(e)
				}),
				W(l.scrollbarY, () => {
					let e = l.scrollbarY?.offsetWidth || 0
					l.onCornerWidthChange(e), u(e)
				}),
				f
					? (0, t.jsx)(n.Primitive.div, {
							...i,
							ref: o,
							style: {
								width: s,
								height: d,
								position: "absolute",
								right: "ltr" === l.dir ? 0 : void 0,
								left: "rtl" === l.dir ? 0 : void 0,
								bottom: 0,
								...e.style,
							},
						})
					: null
			)
		})
		function I(e) {
			return e ? parseInt(e, 10) : 0
		}
		function F(e, t) {
			let r = e / t
			return isNaN(r) ? 0 : r
		}
		function z(e) {
			let t = F(e.viewport, e.content),
				r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd
			return Math.max((e.scrollbar.size - r) * t, 18)
		}
		function H(e, t, r = "ltr") {
			let n = z(t),
				o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
				a = t.scrollbar.size - o,
				i = t.content - t.viewport,
				l = (0, d.clamp)(e, "ltr" === r ? [0, i] : [-1 * i, 0])
			return V([0, i], [0, a - n])(l)
		}
		function V(e, t) {
			return (r) => {
				if (e[0] === e[1] || t[0] === t[1]) return t[0]
				let n = (t[1] - t[0]) / (e[1] - e[0])
				return t[0] + n * (r - e[0])
			}
		}
		var $ = (e, t = () => {}) => {
			let r = { left: e.scrollLeft, top: e.scrollTop },
				n = 0
			return (
				!(function o() {
					let a = { left: e.scrollLeft, top: e.scrollTop },
						i = r.left !== a.left,
						l = r.top !== a.top
					;(i || l) && t(), (r = a), (n = window.requestAnimationFrame(o))
				})(),
				() => window.cancelAnimationFrame(n)
			)
		}
		function B(e, t) {
			let n = (0, l.useCallbackRef)(e),
				o = r.useRef(0)
			return (
				r.useEffect(() => () => window.clearTimeout(o.current), []),
				r.useCallback(() => {
					window.clearTimeout(o.current), (o.current = window.setTimeout(n, t))
				}, [n, t])
			)
		}
		function W(e, t) {
			let r = (0, l.useCallbackRef)(t)
			;(0, u.useLayoutEffect)(() => {
				let t = 0
				if (e) {
					let n = new ResizeObserver(() => {
						cancelAnimationFrame(t), (t = window.requestAnimationFrame(r))
					})
					return (
						n.observe(e),
						() => {
							window.cancelAnimationFrame(t), n.unobserve(e)
						}
					)
				}
			}, [e, r])
		}
		var U = e.i(46030)
		function K({ className: e, children: r, viewportRef: n, ...o }) {
			return (0, t.jsxs)(g, {
				"data-slot": "scroll-area",
				className: (0, U.cn)("relative", e),
				...o,
				children: [
					(0, t.jsx)(b, {
						ref: n,
						"data-slot": "scroll-area-viewport",
						className:
							"ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1",
						children: r,
					}),
					(0, t.jsx)(Y, {}),
					(0, t.jsx)(O, {}),
				],
			})
		}
		function Y({ className: e, orientation: r = "vertical", ...n }) {
			return (0, t.jsx)(x, {
				"data-slot": "scroll-area-scrollbar",
				orientation: r,
				className: (0, U.cn)(
					"flex touch-none p-px transition-colors select-none",
					"vertical" === r && "h-full w-2.5 border-l border-l-transparent",
					"horizontal" === r && "h-2.5 flex-col border-t border-t-transparent",
					e,
				),
				...n,
				children: (0, t.jsx)(N, {
					"data-slot": "scroll-area-thumb",
					className: "bg-border relative flex-1 rounded-full",
				}),
			})
		}
		e.s(["ScrollArea", () => K, "ScrollBar", () => Y], 92817)
	},
	97432,
	(e) => {
		"use strict"
		var t = e.i(10008),
			r = e.i(68069),
			n = e.i(27069),
			o = e.i(75453),
			a = e.i(46534),
			i = e.i(26613),
			l = e.i(4113),
			s = e.i(78883),
			u = e.i(34692),
			d = e.i(77543),
			c = e.i(74382),
			f = e.i(55162),
			p = e.i(68307),
			m = e.i(85326),
			h = e.i(66791),
			v = e.i(16853),
			g = e.i(84123),
			y = e.i(93180),
			b = e.i(29241),
			w = e.i(18176),
			x = e.i(8026),
			E = Object.freeze({
				position: "absolute",
				border: 0,
				width: 1,
				height: 1,
				padding: 0,
				margin: -1,
				overflow: "hidden",
				clip: "rect(0, 0, 0, 0)",
				whiteSpace: "nowrap",
				wordWrap: "normal",
			})
		t.forwardRef((e, t) =>
			(0, x.jsx)(h.Primitive.span, { ...e, ref: t, style: { ...E, ...e.style } }),
		).displayName = "VisuallyHidden"
		var C = e.i(45751),
			k = e.i(4880),
			R = [" ", "Enter", "ArrowUp", "ArrowDown"],
			S = [" ", "Enter"],
			j = "Select",
			[P, D, T] = (0, a.createCollection)(j),
			[A, N] = (0, l.createContextScope)(j, [T, p.createPopperScope]),
			M = (0, p.createPopperScope)(),
			[_, O] = A(j),
			[L, I] = A(j),
			F = (e) => {
				let {
						__scopeSelect: r,
						children: n,
						open: o,
						defaultOpen: a,
						onOpenChange: i,
						value: l,
						defaultValue: u,
						onValueChange: d,
						dir: c,
						name: m,
						autoComplete: h,
						disabled: v,
						required: g,
						form: b,
					} = e,
					w = M(r),
					[E, C] = t.useState(null),
					[k, R] = t.useState(null),
					[S, D] = t.useState(!1),
					T = (0, s.useDirection)(c),
					[A, N] = (0, y.useControllableState)({ prop: o, defaultProp: a ?? !1, onChange: i, caller: j }),
					[O, I] = (0, y.useControllableState)({ prop: l, defaultProp: u, onChange: d, caller: j }),
					F = t.useRef(null),
					z = !E || b || !!E.closest("form"),
					[H, V] = t.useState(new Set()),
					$ = Array.from(H)
						.map((e) => e.props.value)
						.join(";")
				return (0, x.jsx)(p.Root, {
					...w,
					children: (0, x.jsxs)(_, {
						required: g,
						scope: r,
						trigger: E,
						onTriggerChange: C,
						valueNode: k,
						onValueNodeChange: R,
						valueNodeHasChildren: S,
						onValueNodeHasChildrenChange: D,
						contentId: (0, f.useId)(),
						value: O,
						onValueChange: I,
						open: A,
						onOpenChange: N,
						dir: T,
						triggerPointerDownPosRef: F,
						disabled: v,
						children: [
							(0, x.jsx)(P.Provider, {
								scope: r,
								children: (0, x.jsx)(L, {
									scope: e.__scopeSelect,
									onNativeOptionAdd: t.useCallback((e) => {
										V((t) => new Set(t).add(e))
									}, []),
									onNativeOptionRemove: t.useCallback((e) => {
										V((t) => {
											let r = new Set(t)
											return r.delete(e), r
										})
									}, []),
									children: n,
								}),
							}),
							z
								? (0, x.jsxs)(
										ek,
										{
											"aria-hidden": !0,
											required: g,
											tabIndex: -1,
											name: m,
											autoComplete: h,
											value: O,
											onChange: (e) => I(e.target.value),
											disabled: v,
											form: b,
											children: [
												void 0 === O ? (0, x.jsx)("option", { value: "" }) : null,
												Array.from(H),
											],
										},
										$,
									)
								: null,
						],
					}),
				})
			}
		F.displayName = j
		var z = "SelectTrigger",
			H = t.forwardRef((e, r) => {
				let { __scopeSelect: n, disabled: a = !1, ...l } = e,
					s = M(n),
					u = O(z, n),
					d = u.disabled || a,
					c = (0, i.useComposedRefs)(r, u.onTriggerChange),
					f = D(n),
					m = t.useRef("touch"),
					[v, g, y] = eS((e) => {
						let t = f().filter((e) => !e.disabled),
							r = t.find((e) => e.value === u.value),
							n = ej(t, e, r)
						void 0 !== n && u.onValueChange(n.value)
					}),
					b = (e) => {
						d || (u.onOpenChange(!0), y()),
							e &&
								(u.triggerPointerDownPosRef.current = {
									x: Math.round(e.pageX),
									y: Math.round(e.pageY),
								})
					}
				return (0, x.jsx)(p.Anchor, {
					asChild: !0,
					...s,
					children: (0, x.jsx)(h.Primitive.button, {
						type: "button",
						role: "combobox",
						"aria-controls": u.contentId,
						"aria-expanded": u.open,
						"aria-required": u.required,
						"aria-autocomplete": "none",
						dir: u.dir,
						"data-state": u.open ? "open" : "closed",
						disabled: d,
						"data-disabled": d ? "" : void 0,
						"data-placeholder": eR(u.value) ? "" : void 0,
						...l,
						ref: c,
						onClick: (0, o.composeEventHandlers)(l.onClick, (e) => {
							e.currentTarget.focus(), "mouse" !== m.current && b(e)
						}),
						onPointerDown: (0, o.composeEventHandlers)(l.onPointerDown, (e) => {
							m.current = e.pointerType
							let t = e.target
							t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
								0 === e.button &&
									!1 === e.ctrlKey &&
									"mouse" === e.pointerType &&
									(b(e), e.preventDefault())
						}),
						onKeyDown: (0, o.composeEventHandlers)(l.onKeyDown, (e) => {
							let t = "" !== v.current
							e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || g(e.key),
								(!t || " " !== e.key) && R.includes(e.key) && (b(), e.preventDefault())
						}),
					}),
				})
			})
		H.displayName = z
		var V = "SelectValue",
			$ = t.forwardRef((e, t) => {
				let { __scopeSelect: r, className: n, style: o, children: a, placeholder: l = "", ...s } = e,
					u = O(V, r),
					{ onValueNodeHasChildrenChange: d } = u,
					c = void 0 !== a,
					f = (0, i.useComposedRefs)(t, u.onValueNodeChange)
				return (
					(0, b.useLayoutEffect)(() => {
						d(c)
					}, [d, c]),
					(0, x.jsx)(h.Primitive.span, {
						...s,
						ref: f,
						style: { pointerEvents: "none" },
						children: eR(u.value) ? (0, x.jsx)(x.Fragment, { children: l }) : a,
					})
				)
			})
		$.displayName = V
		var B = t.forwardRef((e, t) => {
			let { __scopeSelect: r, children: n, ...o } = e
			return (0, x.jsx)(h.Primitive.span, { "aria-hidden": !0, ...o, ref: t, children: n || "▼" })
		})
		B.displayName = "SelectIcon"
		var W = (e) => (0, x.jsx)(m.Portal, { asChild: !0, ...e })
		W.displayName = "SelectPortal"
		var U = "SelectContent",
			K = t.forwardRef((e, n) => {
				let o = O(U, e.__scopeSelect),
					[a, i] = t.useState()
				return ((0, b.useLayoutEffect)(() => {
					i(new DocumentFragment())
				}, []),
				o.open)
					? (0, x.jsx)(G, { ...e, ref: n })
					: a
						? r.createPortal(
								(0, x.jsx)(Y, {
									scope: e.__scopeSelect,
									children: (0, x.jsx)(P.Slot, {
										scope: e.__scopeSelect,
										children: (0, x.jsx)("div", { children: e.children }),
									}),
								}),
								a,
							)
						: null
			})
		K.displayName = U
		var [Y, q] = A(U),
			X = (0, v.createSlot)("SelectContent.RemoveScroll"),
			G = t.forwardRef((e, r) => {
				let {
						__scopeSelect: n,
						position: a = "item-aligned",
						onCloseAutoFocus: l,
						onEscapeKeyDown: s,
						onPointerDownOutside: f,
						side: p,
						sideOffset: m,
						align: h,
						alignOffset: v,
						arrowPadding: g,
						collisionBoundary: y,
						collisionPadding: b,
						sticky: w,
						hideWhenDetached: E,
						avoidCollisions: R,
						...S
					} = e,
					j = O(U, n),
					[P, T] = t.useState(null),
					[A, N] = t.useState(null),
					M = (0, i.useComposedRefs)(r, (e) => T(e)),
					[_, L] = t.useState(null),
					[I, F] = t.useState(null),
					z = D(n),
					[H, V] = t.useState(!1),
					$ = t.useRef(!1)
				t.useEffect(() => {
					if (P) return (0, C.hideOthers)(P)
				}, [P]),
					(0, d.useFocusGuards)()
				let B = t.useCallback(
						(e) => {
							let [t, ...r] = z().map((e) => e.ref.current),
								[n] = r.slice(-1),
								o = document.activeElement
							for (let r of e)
								if (
									r === o ||
									(r?.scrollIntoView({ block: "nearest" }),
									r === t && A && (A.scrollTop = 0),
									r === n && A && (A.scrollTop = A.scrollHeight),
									r?.focus(),
									document.activeElement !== o)
								)
									return
						},
						[z, A],
					),
					W = t.useCallback(() => B([_, P]), [B, _, P])
				t.useEffect(() => {
					H && W()
				}, [H, W])
				let { onOpenChange: K, triggerPointerDownPosRef: q } = j
				t.useEffect(() => {
					if (P) {
						let e = { x: 0, y: 0 },
							t = (t) => {
								e = {
									x: Math.abs(Math.round(t.pageX) - (q.current?.x ?? 0)),
									y: Math.abs(Math.round(t.pageY) - (q.current?.y ?? 0)),
								}
							},
							r = (r) => {
								e.x <= 10 && e.y <= 10 ? r.preventDefault() : P.contains(r.target) || K(!1),
									document.removeEventListener("pointermove", t),
									(q.current = null)
							}
						return (
							null !== q.current &&
								(document.addEventListener("pointermove", t),
								document.addEventListener("pointerup", r, { capture: !0, once: !0 })),
							() => {
								document.removeEventListener("pointermove", t),
									document.removeEventListener("pointerup", r, { capture: !0 })
							}
						)
					}
				}, [P, K, q]),
					t.useEffect(() => {
						let e = () => K(!1)
						return (
							window.addEventListener("blur", e),
							window.addEventListener("resize", e),
							() => {
								window.removeEventListener("blur", e), window.removeEventListener("resize", e)
							}
						)
					}, [K])
				let [G, J] = eS((e) => {
						let t = z().filter((e) => !e.disabled),
							r = t.find((e) => e.ref.current === document.activeElement),
							n = ej(t, e, r)
						n && setTimeout(() => n.ref.current.focus())
					}),
					ee = t.useCallback(
						(e, t, r) => {
							let n = !$.current && !r
							;((void 0 !== j.value && j.value === t) || n) && (L(e), n && ($.current = !0))
						},
						[j.value],
					),
					et = t.useCallback(() => P?.focus(), [P]),
					er = t.useCallback(
						(e, t, r) => {
							let n = !$.current && !r
							;((void 0 !== j.value && j.value === t) || n) && F(e)
						},
						[j.value],
					),
					en = "popper" === a ? Q : Z,
					eo =
						en === Q
							? {
									side: p,
									sideOffset: m,
									align: h,
									alignOffset: v,
									arrowPadding: g,
									collisionBoundary: y,
									collisionPadding: b,
									sticky: w,
									hideWhenDetached: E,
									avoidCollisions: R,
								}
							: {}
				return (0, x.jsx)(Y, {
					scope: n,
					content: P,
					viewport: A,
					onViewportChange: N,
					itemRefCallback: ee,
					selectedItem: _,
					onItemLeave: et,
					itemTextRefCallback: er,
					focusSelectedItem: W,
					selectedItemText: I,
					position: a,
					isPositioned: H,
					searchRef: G,
					children: (0, x.jsx)(k.RemoveScroll, {
						as: X,
						allowPinchZoom: !0,
						children: (0, x.jsx)(c.FocusScope, {
							asChild: !0,
							trapped: j.open,
							onMountAutoFocus: (e) => {
								e.preventDefault()
							},
							onUnmountAutoFocus: (0, o.composeEventHandlers)(l, (e) => {
								j.trigger?.focus({ preventScroll: !0 }), e.preventDefault()
							}),
							children: (0, x.jsx)(u.DismissableLayer, {
								asChild: !0,
								disableOutsidePointerEvents: !0,
								onEscapeKeyDown: s,
								onPointerDownOutside: f,
								onFocusOutside: (e) => e.preventDefault(),
								onDismiss: () => j.onOpenChange(!1),
								children: (0, x.jsx)(en, {
									role: "listbox",
									id: j.contentId,
									"data-state": j.open ? "open" : "closed",
									dir: j.dir,
									onContextMenu: (e) => e.preventDefault(),
									...S,
									...eo,
									onPlaced: () => V(!0),
									ref: M,
									style: { display: "flex", flexDirection: "column", outline: "none", ...S.style },
									onKeyDown: (0, o.composeEventHandlers)(S.onKeyDown, (e) => {
										let t = e.ctrlKey || e.altKey || e.metaKey
										if (
											("Tab" === e.key && e.preventDefault(),
											t || 1 !== e.key.length || J(e.key),
											["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
										) {
											let t = z()
												.filter((e) => !e.disabled)
												.map((e) => e.ref.current)
											if (
												(["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()),
												["ArrowUp", "ArrowDown"].includes(e.key))
											) {
												let r = e.target,
													n = t.indexOf(r)
												t = t.slice(n + 1)
											}
											setTimeout(() => B(t)), e.preventDefault()
										}
									}),
								}),
							}),
						}),
					}),
				})
			})
		G.displayName = "SelectContentImpl"
		var Z = t.forwardRef((e, r) => {
			let { __scopeSelect: o, onPlaced: a, ...l } = e,
				s = O(U, o),
				u = q(U, o),
				[d, c] = t.useState(null),
				[f, p] = t.useState(null),
				m = (0, i.useComposedRefs)(r, (e) => p(e)),
				v = D(o),
				g = t.useRef(!1),
				y = t.useRef(!0),
				{ viewport: w, selectedItem: E, selectedItemText: C, focusSelectedItem: k } = u,
				R = t.useCallback(() => {
					if (s.trigger && s.valueNode && d && f && w && E && C) {
						let e = s.trigger.getBoundingClientRect(),
							t = f.getBoundingClientRect(),
							r = s.valueNode.getBoundingClientRect(),
							o = C.getBoundingClientRect()
						if ("rtl" !== s.dir) {
							let a = o.left - t.left,
								i = r.left - a,
								l = e.left - i,
								s = e.width + l,
								u = Math.max(s, t.width),
								c = window.innerWidth - 10,
								f = (0, n.clamp)(i, [10, Math.max(10, c - u)])
							;(d.style.minWidth = s + "px"), (d.style.left = f + "px")
						} else {
							let a = t.right - o.right,
								i = window.innerWidth - r.right - a,
								l = window.innerWidth - e.right - i,
								s = e.width + l,
								u = Math.max(s, t.width),
								c = window.innerWidth - 10,
								f = (0, n.clamp)(i, [10, Math.max(10, c - u)])
							;(d.style.minWidth = s + "px"), (d.style.right = f + "px")
						}
						let i = v(),
							l = window.innerHeight - 20,
							u = w.scrollHeight,
							c = window.getComputedStyle(f),
							p = parseInt(c.borderTopWidth, 10),
							m = parseInt(c.paddingTop, 10),
							h = parseInt(c.borderBottomWidth, 10),
							y = p + m + u + parseInt(c.paddingBottom, 10) + h,
							b = Math.min(5 * E.offsetHeight, y),
							x = window.getComputedStyle(w),
							k = parseInt(x.paddingTop, 10),
							R = parseInt(x.paddingBottom, 10),
							S = e.top + e.height / 2 - 10,
							j = E.offsetHeight / 2,
							P = p + m + (E.offsetTop + j)
						if (P <= S) {
							let e = i.length > 0 && E === i[i.length - 1].ref.current
							d.style.bottom = "0px"
							let t = Math.max(
								l - S,
								j + (e ? R : 0) + (f.clientHeight - w.offsetTop - w.offsetHeight) + h,
							)
							d.style.height = P + t + "px"
						} else {
							let e = i.length > 0 && E === i[0].ref.current
							d.style.top = "0px"
							let t = Math.max(S, p + w.offsetTop + (e ? k : 0) + j)
							;(d.style.height = t + (y - P) + "px"), (w.scrollTop = P - S + w.offsetTop)
						}
						;(d.style.margin = "10px 0"),
							(d.style.minHeight = b + "px"),
							(d.style.maxHeight = l + "px"),
							a?.(),
							requestAnimationFrame(() => (g.current = !0))
					}
				}, [v, s.trigger, s.valueNode, d, f, w, E, C, s.dir, a])
			;(0, b.useLayoutEffect)(() => R(), [R])
			let [S, j] = t.useState()
			;(0, b.useLayoutEffect)(() => {
				f && j(window.getComputedStyle(f).zIndex)
			}, [f])
			let P = t.useCallback(
				(e) => {
					e && !0 === y.current && (R(), k?.(), (y.current = !1))
				},
				[R, k],
			)
			return (0, x.jsx)(J, {
				scope: o,
				contentWrapper: d,
				shouldExpandOnScrollRef: g,
				onScrollButtonChange: P,
				children: (0, x.jsx)("div", {
					ref: c,
					style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: S },
					children: (0, x.jsx)(h.Primitive.div, {
						...l,
						ref: m,
						style: { boxSizing: "border-box", maxHeight: "100%", ...l.style },
					}),
				}),
			})
		})
		Z.displayName = "SelectItemAlignedPosition"
		var Q = t.forwardRef((e, t) => {
			let { __scopeSelect: r, align: n = "start", collisionPadding: o = 10, ...a } = e,
				i = M(r)
			return (0, x.jsx)(p.Content, {
				...i,
				...a,
				ref: t,
				align: n,
				collisionPadding: o,
				style: {
					boxSizing: "border-box",
					...a.style,
					"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-select-content-available-width": "var(--radix-popper-available-width)",
					"--radix-select-content-available-height": "var(--radix-popper-available-height)",
					"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
				},
			})
		})
		Q.displayName = "SelectPopperPosition"
		var [J, ee] = A(U, {}),
			et = "SelectViewport",
			er = t.forwardRef((e, r) => {
				let { __scopeSelect: n, nonce: a, ...l } = e,
					s = q(et, n),
					u = ee(et, n),
					d = (0, i.useComposedRefs)(r, s.onViewportChange),
					c = t.useRef(0)
				return (0, x.jsxs)(x.Fragment, {
					children: [
						(0, x.jsx)("style", {
							dangerouslySetInnerHTML: {
								__html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
							},
							nonce: a,
						}),
						(0, x.jsx)(P.Slot, {
							scope: n,
							children: (0, x.jsx)(h.Primitive.div, {
								"data-radix-select-viewport": "",
								role: "presentation",
								...l,
								ref: d,
								style: { position: "relative", flex: 1, overflow: "hidden auto", ...l.style },
								onScroll: (0, o.composeEventHandlers)(l.onScroll, (e) => {
									let t = e.currentTarget,
										{ contentWrapper: r, shouldExpandOnScrollRef: n } = u
									if (n?.current && r) {
										let e = Math.abs(c.current - t.scrollTop)
										if (e > 0) {
											let n = window.innerHeight - 20,
												o = Math.max(parseFloat(r.style.minHeight), parseFloat(r.style.height))
											if (o < n) {
												let a = o + e,
													i = Math.min(n, a),
													l = a - i
												;(r.style.height = i + "px"),
													"0px" === r.style.bottom &&
														((t.scrollTop = l > 0 ? l : 0),
														(r.style.justifyContent = "flex-end"))
											}
										}
									}
									c.current = t.scrollTop
								}),
							}),
						}),
					],
				})
			})
		er.displayName = et
		var en = "SelectGroup",
			[eo, ea] = A(en),
			ei = t.forwardRef((e, t) => {
				let { __scopeSelect: r, ...n } = e,
					o = (0, f.useId)()
				return (0, x.jsx)(eo, {
					scope: r,
					id: o,
					children: (0, x.jsx)(h.Primitive.div, { role: "group", "aria-labelledby": o, ...n, ref: t }),
				})
			})
		ei.displayName = en
		var el = "SelectLabel",
			es = t.forwardRef((e, t) => {
				let { __scopeSelect: r, ...n } = e,
					o = ea(el, r)
				return (0, x.jsx)(h.Primitive.div, { id: o.id, ...n, ref: t })
			})
		es.displayName = el
		var eu = "SelectItem",
			[ed, ec] = A(eu),
			ef = t.forwardRef((e, r) => {
				let { __scopeSelect: n, value: a, disabled: l = !1, textValue: s, ...u } = e,
					d = O(eu, n),
					c = q(eu, n),
					p = d.value === a,
					[m, v] = t.useState(s ?? ""),
					[g, y] = t.useState(!1),
					b = (0, i.useComposedRefs)(r, (e) => c.itemRefCallback?.(e, a, l)),
					w = (0, f.useId)(),
					E = t.useRef("touch"),
					C = () => {
						l || (d.onValueChange(a), d.onOpenChange(!1))
					}
				if ("" === a)
					throw Error(
						"A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
					)
				return (0, x.jsx)(ed, {
					scope: n,
					value: a,
					disabled: l,
					textId: w,
					isSelected: p,
					onItemTextChange: t.useCallback((e) => {
						v((t) => t || (e?.textContent ?? "").trim())
					}, []),
					children: (0, x.jsx)(P.ItemSlot, {
						scope: n,
						value: a,
						disabled: l,
						textValue: m,
						children: (0, x.jsx)(h.Primitive.div, {
							role: "option",
							"aria-labelledby": w,
							"data-highlighted": g ? "" : void 0,
							"aria-selected": p && g,
							"data-state": p ? "checked" : "unchecked",
							"aria-disabled": l || void 0,
							"data-disabled": l ? "" : void 0,
							tabIndex: l ? void 0 : -1,
							...u,
							ref: b,
							onFocus: (0, o.composeEventHandlers)(u.onFocus, () => y(!0)),
							onBlur: (0, o.composeEventHandlers)(u.onBlur, () => y(!1)),
							onClick: (0, o.composeEventHandlers)(u.onClick, () => {
								"mouse" !== E.current && C()
							}),
							onPointerUp: (0, o.composeEventHandlers)(u.onPointerUp, () => {
								"mouse" === E.current && C()
							}),
							onPointerDown: (0, o.composeEventHandlers)(u.onPointerDown, (e) => {
								E.current = e.pointerType
							}),
							onPointerMove: (0, o.composeEventHandlers)(u.onPointerMove, (e) => {
								;(E.current = e.pointerType),
									l
										? c.onItemLeave?.()
										: "mouse" === E.current && e.currentTarget.focus({ preventScroll: !0 })
							}),
							onPointerLeave: (0, o.composeEventHandlers)(u.onPointerLeave, (e) => {
								e.currentTarget === document.activeElement && c.onItemLeave?.()
							}),
							onKeyDown: (0, o.composeEventHandlers)(u.onKeyDown, (e) => {
								;(c.searchRef?.current === "" || " " !== e.key) &&
									(S.includes(e.key) && C(), " " === e.key && e.preventDefault())
							}),
						}),
					}),
				})
			})
		ef.displayName = eu
		var ep = "SelectItemText",
			em = t.forwardRef((e, n) => {
				let { __scopeSelect: o, className: a, style: l, ...s } = e,
					u = O(ep, o),
					d = q(ep, o),
					c = ec(ep, o),
					f = I(ep, o),
					[p, m] = t.useState(null),
					v = (0, i.useComposedRefs)(
						n,
						(e) => m(e),
						c.onItemTextChange,
						(e) => d.itemTextRefCallback?.(e, c.value, c.disabled),
					),
					g = p?.textContent,
					y = t.useMemo(
						() => (0, x.jsx)("option", { value: c.value, disabled: c.disabled, children: g }, c.value),
						[c.disabled, c.value, g],
					),
					{ onNativeOptionAdd: w, onNativeOptionRemove: E } = f
				return (
					(0, b.useLayoutEffect)(() => (w(y), () => E(y)), [w, E, y]),
					(0, x.jsxs)(x.Fragment, {
						children: [
							(0, x.jsx)(h.Primitive.span, { id: c.textId, ...s, ref: v }),
							c.isSelected && u.valueNode && !u.valueNodeHasChildren
								? r.createPortal(s.children, u.valueNode)
								: null,
						],
					})
				)
			})
		em.displayName = ep
		var eh = "SelectItemIndicator",
			ev = t.forwardRef((e, t) => {
				let { __scopeSelect: r, ...n } = e
				return ec(eh, r).isSelected ? (0, x.jsx)(h.Primitive.span, { "aria-hidden": !0, ...n, ref: t }) : null
			})
		ev.displayName = eh
		var eg = "SelectScrollUpButton",
			ey = t.forwardRef((e, r) => {
				let n = q(eg, e.__scopeSelect),
					o = ee(eg, e.__scopeSelect),
					[a, l] = t.useState(!1),
					s = (0, i.useComposedRefs)(r, o.onScrollButtonChange)
				return (
					(0, b.useLayoutEffect)(() => {
						if (n.viewport && n.isPositioned) {
							let e = function () {
									l(t.scrollTop > 0)
								},
								t = n.viewport
							return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
						}
					}, [n.viewport, n.isPositioned]),
					a
						? (0, x.jsx)(ex, {
								...e,
								ref: s,
								onAutoScroll: () => {
									let { viewport: e, selectedItem: t } = n
									e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
								},
							})
						: null
				)
			})
		ey.displayName = eg
		var eb = "SelectScrollDownButton",
			ew = t.forwardRef((e, r) => {
				let n = q(eb, e.__scopeSelect),
					o = ee(eb, e.__scopeSelect),
					[a, l] = t.useState(!1),
					s = (0, i.useComposedRefs)(r, o.onScrollButtonChange)
				return (
					(0, b.useLayoutEffect)(() => {
						if (n.viewport && n.isPositioned) {
							let e = function () {
									let e = t.scrollHeight - t.clientHeight
									l(Math.ceil(t.scrollTop) < e)
								},
								t = n.viewport
							return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
						}
					}, [n.viewport, n.isPositioned]),
					a
						? (0, x.jsx)(ex, {
								...e,
								ref: s,
								onAutoScroll: () => {
									let { viewport: e, selectedItem: t } = n
									e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
								},
							})
						: null
				)
			})
		ew.displayName = eb
		var ex = t.forwardRef((e, r) => {
				let { __scopeSelect: n, onAutoScroll: a, ...i } = e,
					l = q("SelectScrollButton", n),
					s = t.useRef(null),
					u = D(n),
					d = t.useCallback(() => {
						null !== s.current && (window.clearInterval(s.current), (s.current = null))
					}, [])
				return (
					t.useEffect(() => () => d(), [d]),
					(0, b.useLayoutEffect)(() => {
						let e = u().find((e) => e.ref.current === document.activeElement)
						e?.ref.current?.scrollIntoView({ block: "nearest" })
					}, [u]),
					(0, x.jsx)(h.Primitive.div, {
						"aria-hidden": !0,
						...i,
						ref: r,
						style: { flexShrink: 0, ...i.style },
						onPointerDown: (0, o.composeEventHandlers)(i.onPointerDown, () => {
							null === s.current && (s.current = window.setInterval(a, 50))
						}),
						onPointerMove: (0, o.composeEventHandlers)(i.onPointerMove, () => {
							l.onItemLeave?.(), null === s.current && (s.current = window.setInterval(a, 50))
						}),
						onPointerLeave: (0, o.composeEventHandlers)(i.onPointerLeave, () => {
							d()
						}),
					})
				)
			}),
			eE = t.forwardRef((e, t) => {
				let { __scopeSelect: r, ...n } = e
				return (0, x.jsx)(h.Primitive.div, { "aria-hidden": !0, ...n, ref: t })
			})
		eE.displayName = "SelectSeparator"
		var eC = "SelectArrow"
		t.forwardRef((e, t) => {
			let { __scopeSelect: r, ...n } = e,
				o = M(r),
				a = O(eC, r),
				i = q(eC, r)
			return a.open && "popper" === i.position ? (0, x.jsx)(p.Arrow, { ...o, ...n, ref: t }) : null
		}).displayName = eC
		var ek = t.forwardRef(({ __scopeSelect: e, value: r, ...n }, o) => {
			let a = t.useRef(null),
				l = (0, i.useComposedRefs)(o, a),
				s = (0, w.usePrevious)(r)
			return (
				t.useEffect(() => {
					let e = a.current
					if (!e) return
					let t = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value").set
					if (s !== r && t) {
						let n = new Event("change", { bubbles: !0 })
						t.call(e, r), e.dispatchEvent(n)
					}
				}, [s, r]),
				(0, x.jsx)(h.Primitive.select, { ...n, style: { ...E, ...n.style }, ref: l, defaultValue: r })
			)
		})
		function eR(e) {
			return "" === e || void 0 === e
		}
		function eS(e) {
			let r = (0, g.useCallbackRef)(e),
				n = t.useRef(""),
				o = t.useRef(0),
				a = t.useCallback(
					(e) => {
						let t = n.current + e
						r(t),
							(function e(t) {
								;(n.current = t),
									window.clearTimeout(o.current),
									"" !== t && (o.current = window.setTimeout(() => e(""), 1e3))
							})(t)
					},
					[r],
				),
				i = t.useCallback(() => {
					;(n.current = ""), window.clearTimeout(o.current)
				}, [])
			return t.useEffect(() => () => window.clearTimeout(o.current), []), [n, a, i]
		}
		function ej(e, t, r) {
			var n, o
			let a = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
				i = r ? e.indexOf(r) : -1,
				l = ((n = e), (o = Math.max(i, 0)), n.map((e, t) => n[(o + t) % n.length]))
			1 === a.length && (l = l.filter((e) => e !== r))
			let s = l.find((e) => e.textValue.toLowerCase().startsWith(a.toLowerCase()))
			return s !== r ? s : void 0
		}
		;(ek.displayName = "SelectBubbleInput"),
			e.s(
				[
					"Content",
					() => K,
					"Group",
					() => ei,
					"Icon",
					() => B,
					"Item",
					() => ef,
					"ItemIndicator",
					() => ev,
					"ItemText",
					() => em,
					"Label",
					() => es,
					"Portal",
					() => W,
					"Root",
					() => F,
					"ScrollDownButton",
					() => ew,
					"ScrollUpButton",
					() => ey,
					"Separator",
					() => eE,
					"Trigger",
					() => H,
					"Value",
					() => $,
					"Viewport",
					() => er,
				],
				97432,
			)
	},
	74310,
	(e) => {
		"use strict"
		var t = e.i(58397)
		e.s(["Check", () => t.default])
	},
	83694,
	(e) => {
		"use strict"
		var t = e.i(8026),
			r = e.i(97432),
			n = e.i(74310),
			o = e.i(13699)
		let a = (0, o.default)("chevron-down", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]),
			i = (0, o.default)("chevron-up", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]])
		var l = e.i(46030)
		function s({ ...e }) {
			return (0, t.jsx)(r.Root, { "data-slot": "select", ...e })
		}
		function u({ ...e }) {
			return (0, t.jsx)(r.Group, { "data-slot": "select-group", ...e })
		}
		function d({ ...e }) {
			return (0, t.jsx)(r.Value, { "data-slot": "select-value", ...e })
		}
		function c({ className: e, size: n = "default", children: o, ...i }) {
			return (0, t.jsxs)(r.Trigger, {
				"data-slot": "select-trigger",
				"data-size": n,
				className: (0, l.cn)(
					"data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex w-fit items-center justify-between gap-2 rounded-sm px-3 py-2 whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
					"border border-input bg-input hover:opacity-80 cursor-pointer",
					e,
				),
				...i,
				children: [
					o,
					(0, t.jsx)(r.Icon, { asChild: !0, children: (0, t.jsx)(a, { className: "size-4 opacity-50" }) }),
				],
			})
		}
		function f({ className: e, children: n, position: o = "popper", ...a }) {
			return (0, t.jsx)(r.Portal, {
				children: (0, t.jsxs)(r.Content, {
					"data-slot": "select-content",
					className: (0, l.cn)(
						"bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-sm shadow-md",
						"popper" === o &&
							"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
						e,
					),
					position: o,
					...a,
					children: [
						(0, t.jsx)(v, {}),
						(0, t.jsx)(r.Viewport, {
							className: (0, l.cn)(
								"p-1",
								"popper" === o &&
									"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1",
							),
							children: n,
						}),
						(0, t.jsx)(g, {}),
					],
				}),
			})
		}
		function p({ className: e, ...n }) {
			return (0, t.jsx)(r.Label, {
				"data-slot": "select-label",
				className: (0, l.cn)("text-muted-foreground px-2 py-1.5 text-xs", e),
				...n,
			})
		}
		function m({ className: e, children: o, ...a }) {
			return (0, t.jsxs)(r.Item, {
				"data-slot": "select-item",
				className: (0, l.cn)(
					"focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-xs py-1.5 pr-8 pl-2 outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
					"text-foreground active:opacity-80 cursor-pointer group",
					e,
				),
				...a,
				children: [
					(0, t.jsx)("span", {
						className: "absolute right-2 flex size-3.5 items-center justify-center",
						children: (0, t.jsx)(r.ItemIndicator, {
							children: (0, t.jsx)(n.Check, {
								className: "text-accent group-focus:text-accent-foreground size-4",
							}),
						}),
					}),
					(0, t.jsx)(r.ItemText, { children: o }),
				],
			})
		}
		function h({ className: e, ...n }) {
			return (0, t.jsx)(r.Separator, {
				"data-slot": "select-separator",
				className: (0, l.cn)("bg-border pointer-events-none -mx-1 my-1 h-px", e),
				...n,
			})
		}
		function v({ className: e, ...n }) {
			return (0, t.jsx)(r.ScrollUpButton, {
				"data-slot": "select-scroll-up-button",
				className: (0, l.cn)("flex cursor-default items-center justify-center py-1", e),
				...n,
				children: (0, t.jsx)(i, { className: "size-4" }),
			})
		}
		function g({ className: e, ...n }) {
			return (0, t.jsx)(r.ScrollDownButton, {
				"data-slot": "select-scroll-down-button",
				className: (0, l.cn)("flex cursor-default items-center justify-center py-1", e),
				...n,
				children: (0, t.jsx)(a, { className: "size-4" }),
			})
		}
		e.s(
			[
				"Select",
				() => s,
				"SelectContent",
				() => f,
				"SelectGroup",
				() => u,
				"SelectItem",
				() => m,
				"SelectLabel",
				() => p,
				"SelectScrollDownButton",
				() => g,
				"SelectScrollUpButton",
				() => v,
				"SelectSeparator",
				() => h,
				"SelectTrigger",
				() => c,
				"SelectValue",
				() => d,
			],
			83694,
		)
	},
	66781,
	(e) => {
		"use strict"
		var t = e.i(8026),
			r = e.i(10008),
			n = e.i(66791),
			o = "horizontal",
			a = ["horizontal", "vertical"],
			i = r.forwardRef((e, r) => {
				var i
				let { decorative: l, orientation: s = o, ...u } = e,
					d = ((i = s), a.includes(i)) ? s : o
				return (0, t.jsx)(n.Primitive.div, {
					"data-orientation": d,
					...(l
						? { role: "none" }
						: { "aria-orientation": "vertical" === d ? d : void 0, role: "separator" }),
					...u,
					ref: r,
				})
			})
		i.displayName = "Separator"
		var l = e.i(46030)
		function s({ className: e, orientation: r = "horizontal", decorative: n = !0, ...o }) {
			return (0, t.jsx)(i, {
				"data-slot": "separator-root",
				decorative: n,
				orientation: r,
				className: (0, l.cn)(
					"bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
					e,
				),
				...o,
			})
		}
		e.s(["Separator", () => s], 66781)
	},
	9486,
	(e) => {
		"use strict"
		var t = e.i(8026),
			r = e.i(10008),
			n = e.i(27069),
			o = e.i(75453),
			a = e.i(26613),
			i = e.i(4113),
			l = e.i(93180),
			s = e.i(78883),
			u = e.i(18176),
			d = e.i(43984),
			c = e.i(66791),
			f = e.i(46534),
			p = ["PageUp", "PageDown"],
			m = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
			h = {
				"from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
				"from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
				"from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
				"from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
			},
			v = "Slider",
			[g, y, b] = (0, f.createCollection)(v),
			[w, x] = (0, i.createContextScope)(v, [b]),
			[E, C] = w(v),
			k = r.forwardRef((e, a) => {
				let {
						name: i,
						min: s = 0,
						max: u = 100,
						step: d = 1,
						orientation: c = "horizontal",
						disabled: f = !1,
						minStepsBetweenThumbs: h = 0,
						defaultValue: v = [s],
						value: y,
						onValueChange: b = () => {},
						onValueCommit: w = () => {},
						inverted: x = !1,
						form: C,
						...k
					} = e,
					R = r.useRef(new Set()),
					S = r.useRef(0),
					D = "horizontal" === c,
					[T = [], A] = (0, l.useControllableState)({
						prop: y,
						defaultProp: v,
						onChange: (e) => {
							let t = [...R.current]
							t[S.current]?.focus(), b(e)
						},
					}),
					N = r.useRef(T)
				function M(e, t, { commit: r } = { commit: !1 }) {
					let o,
						a = (String(d).split(".")[1] || "").length,
						i = Math.round((Math.round((e - s) / d) * d + s) * (o = Math.pow(10, a))) / o,
						l = (0, n.clamp)(i, [s, u])
					A((e = []) => {
						let n = (function (e = [], t, r) {
							let n = [...e]
							return (n[r] = t), n.sort((e, t) => e - t)
						})(e, l, t)
						if (
							!(function (e, t) {
								if (t > 0) return Math.min(...e.slice(0, -1).map((t, r) => e[r + 1] - t)) >= t
								return !0
							})(n, h * d)
						)
							return e
						{
							S.current = n.indexOf(l)
							let t = String(n) !== String(e)
							return t && r && w(n), t ? n : e
						}
					})
				}
				return (0, t.jsx)(E, {
					scope: e.__scopeSlider,
					name: i,
					disabled: f,
					min: s,
					max: u,
					valueIndexToChangeRef: S,
					thumbs: R.current,
					values: T,
					orientation: c,
					form: C,
					children: (0, t.jsx)(g.Provider, {
						scope: e.__scopeSlider,
						children: (0, t.jsx)(g.Slot, {
							scope: e.__scopeSlider,
							children: (0, t.jsx)(D ? j : P, {
								"aria-disabled": f,
								"data-disabled": f ? "" : void 0,
								...k,
								ref: a,
								onPointerDown: (0, o.composeEventHandlers)(k.onPointerDown, () => {
									f || (N.current = T)
								}),
								min: s,
								max: u,
								inverted: x,
								onSlideStart: f
									? void 0
									: function (e) {
											let t = (function (e, t) {
												if (1 === e.length) return 0
												let r = e.map((e) => Math.abs(e - t)),
													n = Math.min(...r)
												return r.indexOf(n)
											})(T, e)
											M(e, t)
										},
								onSlideMove: f
									? void 0
									: function (e) {
											M(e, S.current)
										},
								onSlideEnd: f
									? void 0
									: function () {
											let e = N.current[S.current]
											T[S.current] !== e && w(T)
										},
								onHomeKeyDown: () => !f && M(s, 0, { commit: !0 }),
								onEndKeyDown: () => !f && M(u, T.length - 1, { commit: !0 }),
								onStepKeyDown: ({ event: e, direction: t }) => {
									if (!f) {
										let r = p.includes(e.key) || (e.shiftKey && m.includes(e.key)),
											n = S.current
										M(T[n] + d * (r ? 10 : 1) * t, n, { commit: !0 })
									}
								},
							}),
						}),
					}),
				})
			})
		k.displayName = v
		var [R, S] = w(v, { startEdge: "left", endEdge: "right", size: "width", direction: 1 }),
			j = r.forwardRef((e, n) => {
				let {
						min: o,
						max: i,
						dir: l,
						inverted: u,
						onSlideStart: d,
						onSlideMove: c,
						onSlideEnd: f,
						onStepKeyDown: p,
						...m
					} = e,
					[v, g] = r.useState(null),
					y = (0, a.useComposedRefs)(n, (e) => g(e)),
					b = r.useRef(void 0),
					w = (0, s.useDirection)(l),
					x = "ltr" === w,
					E = (x && !u) || (!x && u)
				function C(e) {
					let t = b.current || v.getBoundingClientRect(),
						r = z([0, t.width], E ? [o, i] : [i, o])
					return (b.current = t), r(e - t.left)
				}
				return (0, t.jsx)(R, {
					scope: e.__scopeSlider,
					startEdge: E ? "left" : "right",
					endEdge: E ? "right" : "left",
					direction: E ? 1 : -1,
					size: "width",
					children: (0, t.jsx)(D, {
						dir: w,
						"data-orientation": "horizontal",
						...m,
						ref: y,
						style: { ...m.style, "--radix-slider-thumb-transform": "translateX(-50%)" },
						onSlideStart: (e) => {
							let t = C(e.clientX)
							d?.(t)
						},
						onSlideMove: (e) => {
							let t = C(e.clientX)
							c?.(t)
						},
						onSlideEnd: () => {
							;(b.current = void 0), f?.()
						},
						onStepKeyDown: (e) => {
							let t = h[E ? "from-left" : "from-right"].includes(e.key)
							p?.({ event: e, direction: t ? -1 : 1 })
						},
					}),
				})
			}),
			P = r.forwardRef((e, n) => {
				let {
						min: o,
						max: i,
						inverted: l,
						onSlideStart: s,
						onSlideMove: u,
						onSlideEnd: d,
						onStepKeyDown: c,
						...f
					} = e,
					p = r.useRef(null),
					m = (0, a.useComposedRefs)(n, p),
					v = r.useRef(void 0),
					g = !l
				function y(e) {
					let t = v.current || p.current.getBoundingClientRect(),
						r = z([0, t.height], g ? [i, o] : [o, i])
					return (v.current = t), r(e - t.top)
				}
				return (0, t.jsx)(R, {
					scope: e.__scopeSlider,
					startEdge: g ? "bottom" : "top",
					endEdge: g ? "top" : "bottom",
					size: "height",
					direction: g ? 1 : -1,
					children: (0, t.jsx)(D, {
						"data-orientation": "vertical",
						...f,
						ref: m,
						style: { ...f.style, "--radix-slider-thumb-transform": "translateY(50%)" },
						onSlideStart: (e) => {
							let t = y(e.clientY)
							s?.(t)
						},
						onSlideMove: (e) => {
							let t = y(e.clientY)
							u?.(t)
						},
						onSlideEnd: () => {
							;(v.current = void 0), d?.()
						},
						onStepKeyDown: (e) => {
							let t = h[g ? "from-bottom" : "from-top"].includes(e.key)
							c?.({ event: e, direction: t ? -1 : 1 })
						},
					}),
				})
			}),
			D = r.forwardRef((e, r) => {
				let {
						__scopeSlider: n,
						onSlideStart: a,
						onSlideMove: i,
						onSlideEnd: l,
						onHomeKeyDown: s,
						onEndKeyDown: u,
						onStepKeyDown: d,
						...f
					} = e,
					h = C(v, n)
				return (0, t.jsx)(c.Primitive.span, {
					...f,
					ref: r,
					onKeyDown: (0, o.composeEventHandlers)(e.onKeyDown, (e) => {
						"Home" === e.key
							? (s(e), e.preventDefault())
							: "End" === e.key
								? (u(e), e.preventDefault())
								: p.concat(m).includes(e.key) && (d(e), e.preventDefault())
					}),
					onPointerDown: (0, o.composeEventHandlers)(e.onPointerDown, (e) => {
						let t = e.target
						t.setPointerCapture(e.pointerId), e.preventDefault(), h.thumbs.has(t) ? t.focus() : a(e)
					}),
					onPointerMove: (0, o.composeEventHandlers)(e.onPointerMove, (e) => {
						e.target.hasPointerCapture(e.pointerId) && i(e)
					}),
					onPointerUp: (0, o.composeEventHandlers)(e.onPointerUp, (e) => {
						let t = e.target
						t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), l(e))
					}),
				})
			}),
			T = "SliderTrack",
			A = r.forwardRef((e, r) => {
				let { __scopeSlider: n, ...o } = e,
					a = C(T, n)
				return (0, t.jsx)(c.Primitive.span, {
					"data-disabled": a.disabled ? "" : void 0,
					"data-orientation": a.orientation,
					...o,
					ref: r,
				})
			})
		A.displayName = T
		var N = "SliderRange",
			M = r.forwardRef((e, n) => {
				let { __scopeSlider: o, ...i } = e,
					l = C(N, o),
					s = S(N, o),
					u = r.useRef(null),
					d = (0, a.useComposedRefs)(n, u),
					f = l.values.length,
					p = l.values.map((e) => F(e, l.min, l.max)),
					m = f > 1 ? Math.min(...p) : 0,
					h = 100 - Math.max(...p)
				return (0, t.jsx)(c.Primitive.span, {
					"data-orientation": l.orientation,
					"data-disabled": l.disabled ? "" : void 0,
					...i,
					ref: d,
					style: { ...e.style, [s.startEdge]: m + "%", [s.endEdge]: h + "%" },
				})
			})
		M.displayName = N
		var _ = "SliderThumb",
			O = r.forwardRef((e, n) => {
				let o = y(e.__scopeSlider),
					[i, l] = r.useState(null),
					s = (0, a.useComposedRefs)(n, (e) => l(e)),
					u = r.useMemo(() => (i ? o().findIndex((e) => e.ref.current === i) : -1), [o, i])
				return (0, t.jsx)(L, { ...e, ref: s, index: u })
			}),
			L = r.forwardRef((e, n) => {
				var i, l, s, u, f
				let p,
					m,
					{ __scopeSlider: h, index: v, name: y, ...b } = e,
					w = C(_, h),
					x = S(_, h),
					[E, k] = r.useState(null),
					R = (0, a.useComposedRefs)(n, (e) => k(e)),
					j = !E || w.form || !!E.closest("form"),
					P = (0, d.useSize)(E),
					D = w.values[v],
					T = void 0 === D ? 0 : F(D, w.min, w.max),
					A =
						((i = v),
						(l = w.values.length) > 2
							? `Value ${i + 1} of ${l}`
							: 2 === l
								? ["Minimum", "Maximum"][i]
								: void 0),
					N = P?.[x.size],
					M = N
						? ((s = N), (u = T), (f = x.direction), (m = z([0, 50], [0, (p = s / 2)])), (p - m(u) * f) * f)
						: 0
				return (
					r.useEffect(() => {
						if (E)
							return (
								w.thumbs.add(E),
								() => {
									w.thumbs.delete(E)
								}
							)
					}, [E, w.thumbs]),
					(0, t.jsxs)("span", {
						style: {
							transform: "var(--radix-slider-thumb-transform)",
							position: "absolute",
							[x.startEdge]: `calc(${T}% + ${M}px)`,
						},
						children: [
							(0, t.jsx)(g.ItemSlot, {
								scope: e.__scopeSlider,
								children: (0, t.jsx)(c.Primitive.span, {
									role: "slider",
									"aria-label": e["aria-label"] || A,
									"aria-valuemin": w.min,
									"aria-valuenow": D,
									"aria-valuemax": w.max,
									"aria-orientation": w.orientation,
									"data-orientation": w.orientation,
									"data-disabled": w.disabled ? "" : void 0,
									tabIndex: w.disabled ? void 0 : 0,
									...b,
									ref: R,
									style: void 0 === D ? { display: "none" } : e.style,
									onFocus: (0, o.composeEventHandlers)(e.onFocus, () => {
										w.valueIndexToChangeRef.current = v
									}),
								}),
							}),
							j &&
								(0, t.jsx)(
									I,
									{
										name: y ?? (w.name ? w.name + (w.values.length > 1 ? "[]" : "") : void 0),
										form: w.form,
										value: D,
									},
									v,
								),
						],
					})
				)
			})
		O.displayName = _
		var I = r.forwardRef(({ __scopeSlider: e, value: n, ...o }, i) => {
			let l = r.useRef(null),
				s = (0, a.useComposedRefs)(l, i),
				d = (0, u.usePrevious)(n)
			return (
				r.useEffect(() => {
					let e = l.current
					if (!e) return
					let t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set
					if (d !== n && t) {
						let r = new Event("input", { bubbles: !0 })
						t.call(e, n), e.dispatchEvent(r)
					}
				}, [d, n]),
				(0, t.jsx)(c.Primitive.input, { style: { display: "none" }, ...o, ref: s, defaultValue: n })
			)
		})
		function F(e, t, r) {
			return (0, n.clamp)((100 / (r - t)) * (e - t), [0, 100])
		}
		function z(e, t) {
			return (r) => {
				if (e[0] === e[1] || t[0] === t[1]) return t[0]
				let n = (t[1] - t[0]) / (e[1] - e[0])
				return t[0] + n * (r - e[0])
			}
		}
		I.displayName = "RadioBubbleInput"
		var H = e.i(46030)
		function V({ className: e, defaultValue: n, value: o, min: a = 0, max: i = 100, ...l }) {
			let s = r.useMemo(() => (Array.isArray(o) ? o : Array.isArray(n) ? n : [a, i]), [o, n, a, i])
			return (0, t.jsxs)(k, {
				"data-slot": "slider",
				defaultValue: n,
				value: o,
				min: a,
				max: i,
				className: (0, H.cn)(
					"relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
					e,
				),
				...l,
				children: [
					(0, t.jsx)(A, {
						"data-slot": "slider-track",
						className: (0, H.cn)(
							"bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
						),
						children: (0, t.jsx)(M, {
							"data-slot": "slider-range",
							className: (0, H.cn)(
								"bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
							),
						}),
					}),
					Array.from({ length: s.length }, (e, r) =>
						(0, t.jsx)(
							O,
							{
								"data-slot": "slider-thumb",
								className:
									"border-primary bg-accent block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
							},
							r,
						),
					),
				],
			})
		}
		e.s(["Slider", () => V], 9486)
	},
	81186,
	13975,
	(e) => {
		"use strict"
		var t = e.i(8026),
			r = e.i(90306),
			n = e.i(10008),
			o = e.i(68069)
		let a = Array(12).fill(0),
			i = ({ visible: e, className: t }) =>
				n.default.createElement(
					"div",
					{ className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e },
					n.default.createElement(
						"div",
						{ className: "sonner-spinner" },
						a.map((e, t) =>
							n.default.createElement("div", {
								className: "sonner-loading-bar",
								key: `spinner-bar-${t}`,
							}),
						),
					),
				),
			l = n.default.createElement(
				"svg",
				{
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20",
					fill: "currentColor",
					height: "20",
					width: "20",
				},
				n.default.createElement("path", {
					fillRule: "evenodd",
					d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
					clipRule: "evenodd",
				}),
			),
			s = n.default.createElement(
				"svg",
				{
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24",
					fill: "currentColor",
					height: "20",
					width: "20",
				},
				n.default.createElement("path", {
					fillRule: "evenodd",
					d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
					clipRule: "evenodd",
				}),
			),
			u = n.default.createElement(
				"svg",
				{
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20",
					fill: "currentColor",
					height: "20",
					width: "20",
				},
				n.default.createElement("path", {
					fillRule: "evenodd",
					d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
					clipRule: "evenodd",
				}),
			),
			d = n.default.createElement(
				"svg",
				{
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20",
					fill: "currentColor",
					height: "20",
					width: "20",
				},
				n.default.createElement("path", {
					fillRule: "evenodd",
					d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
					clipRule: "evenodd",
				}),
			),
			c = n.default.createElement(
				"svg",
				{
					xmlns: "http://www.w3.org/2000/svg",
					width: "12",
					height: "12",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "1.5",
					strokeLinecap: "round",
					strokeLinejoin: "round",
				},
				n.default.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
				n.default.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
			),
			f = 1,
			p = new (class {
				constructor() {
					;(this.subscribe = (e) => (
						this.subscribers.push(e),
						() => {
							let t = this.subscribers.indexOf(e)
							this.subscribers.splice(t, 1)
						}
					)),
						(this.publish = (e) => {
							this.subscribers.forEach((t) => t(e))
						}),
						(this.addToast = (e) => {
							this.publish(e), (this.toasts = [...this.toasts, e])
						}),
						(this.create = (e) => {
							var t
							let { message: r, ...n } = e,
								o =
									"number" == typeof (null == e ? void 0 : e.id) ||
									(null == (t = e.id) ? void 0 : t.length) > 0
										? e.id
										: f++,
								a = this.toasts.find((e) => e.id === o),
								i = void 0 === e.dismissible || e.dismissible
							return (
								this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
								a
									? (this.toasts = this.toasts.map((t) =>
											t.id === o
												? (this.publish({ ...t, ...e, id: o, title: r }),
													{ ...t, ...e, id: o, dismissible: i, title: r })
												: t,
										))
									: this.addToast({ title: r, ...n, dismissible: i, id: o }),
								o
							)
						}),
						(this.dismiss = (e) => (
							e
								? (this.dismissedToasts.add(e),
									requestAnimationFrame(() =>
										this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
									))
								: this.toasts.forEach((e) => {
										this.subscribers.forEach((t) => t({ id: e.id, dismiss: !0 }))
									}),
							e
						)),
						(this.message = (e, t) => this.create({ ...t, message: e })),
						(this.error = (e, t) => this.create({ ...t, message: e, type: "error" })),
						(this.success = (e, t) => this.create({ ...t, type: "success", message: e })),
						(this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
						(this.warning = (e, t) => this.create({ ...t, type: "warning", message: e })),
						(this.loading = (e, t) => this.create({ ...t, type: "loading", message: e })),
						(this.promise = (e, t) => {
							let r, o
							if (!t) return
							void 0 !== t.loading &&
								(o = this.create({
									...t,
									promise: e,
									type: "loading",
									message: t.loading,
									description: "function" != typeof t.description ? t.description : void 0,
								}))
							let a = Promise.resolve(e instanceof Function ? e() : e),
								i = void 0 !== o,
								l = a
									.then(async (e) => {
										if (((r = ["resolve", e]), n.default.isValidElement(e)))
											(i = !1), this.create({ id: o, type: "default", message: e })
										else if (m(e) && !e.ok) {
											i = !1
											let r =
													"function" == typeof t.error
														? await t.error(`HTTP error! status: ${e.status}`)
														: t.error,
												a =
													"function" == typeof t.description
														? await t.description(`HTTP error! status: ${e.status}`)
														: t.description,
												l =
													"object" != typeof r || n.default.isValidElement(r)
														? { message: r }
														: r
											this.create({ id: o, type: "error", description: a, ...l })
										} else if (e instanceof Error) {
											i = !1
											let r = "function" == typeof t.error ? await t.error(e) : t.error,
												a =
													"function" == typeof t.description
														? await t.description(e)
														: t.description,
												l =
													"object" != typeof r || n.default.isValidElement(r)
														? { message: r }
														: r
											this.create({ id: o, type: "error", description: a, ...l })
										} else if (void 0 !== t.success) {
											i = !1
											let r = "function" == typeof t.success ? await t.success(e) : t.success,
												a =
													"function" == typeof t.description
														? await t.description(e)
														: t.description,
												l =
													"object" != typeof r || n.default.isValidElement(r)
														? { message: r }
														: r
											this.create({ id: o, type: "success", description: a, ...l })
										}
									})
									.catch(async (e) => {
										if (((r = ["reject", e]), void 0 !== t.error)) {
											i = !1
											let r = "function" == typeof t.error ? await t.error(e) : t.error,
												a =
													"function" == typeof t.description
														? await t.description(e)
														: t.description,
												l =
													"object" != typeof r || n.default.isValidElement(r)
														? { message: r }
														: r
											this.create({ id: o, type: "error", description: a, ...l })
										}
									})
									.finally(() => {
										i && (this.dismiss(o), (o = void 0)), null == t.finally || t.finally.call(t)
									}),
								s = () =>
									new Promise((e, t) =>
										l.then(() => ("reject" === r[0] ? t(r[1]) : e(r[1]))).catch(t),
									)
							return "string" != typeof o && "number" != typeof o
								? { unwrap: s }
								: Object.assign(o, { unwrap: s })
						}),
						(this.custom = (e, t) => {
							let r = (null == t ? void 0 : t.id) || f++
							return this.create({ jsx: e(r), id: r, ...t }), r
						}),
						(this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
						(this.subscribers = []),
						(this.toasts = []),
						(this.dismissedToasts = new Set())
				}
			})(),
			m = (e) =>
				e &&
				"object" == typeof e &&
				"ok" in e &&
				"boolean" == typeof e.ok &&
				"status" in e &&
				"number" == typeof e.status,
			h = Object.assign(
				(e, t) => {
					let r = (null == t ? void 0 : t.id) || f++
					return p.addToast({ title: e, ...t, id: r }), r
				},
				{
					success: p.success,
					info: p.info,
					warning: p.warning,
					error: p.error,
					custom: p.custom,
					message: p.message,
					promise: p.promise,
					dismiss: p.dismiss,
					loading: p.loading,
				},
				{ getHistory: () => p.toasts, getToasts: () => p.getActiveToasts() },
			)
		function v(e) {
			return void 0 !== e.label
		}
		function g(...e) {
			return e.filter(Boolean).join(" ")
		}
		!(function (e) {
			if (!e || "u" < typeof document) return
			let t = document.head || document.getElementsByTagName("head")[0],
				r = document.createElement("style")
			;(r.type = "text/css"),
				t.appendChild(r),
				r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e))
		})(
			"[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
		)
		let y = (e) => {
			var t, r, o, a, f, p, m, h, y, b, w, x, E
			let {
					invert: C,
					toast: k,
					unstyled: R,
					interacting: S,
					setHeights: j,
					visibleToasts: P,
					heights: D,
					index: T,
					toasts: A,
					expanded: N,
					removeToast: M,
					defaultRichColors: _,
					closeButton: O,
					style: L,
					cancelButtonStyle: I,
					actionButtonStyle: F,
					className: z = "",
					descriptionClassName: H = "",
					duration: V,
					position: $,
					gap: B,
					expandByDefault: W,
					classNames: U,
					icons: K,
					closeButtonAriaLabel: Y = "Close toast",
				} = e,
				[q, X] = n.default.useState(null),
				[G, Z] = n.default.useState(null),
				[Q, J] = n.default.useState(!1),
				[ee, et] = n.default.useState(!1),
				[er, en] = n.default.useState(!1),
				[eo, ea] = n.default.useState(!1),
				[ei, el] = n.default.useState(!1),
				[es, eu] = n.default.useState(0),
				[ed, ec] = n.default.useState(0),
				ef = n.default.useRef(k.duration || V || 4e3),
				ep = n.default.useRef(null),
				em = n.default.useRef(null),
				eh = 0 === T,
				ev = T + 1 <= P,
				eg = k.type,
				ey = !1 !== k.dismissible,
				eb = k.className || "",
				ew = k.descriptionClassName || "",
				ex = n.default.useMemo(() => D.findIndex((e) => e.toastId === k.id) || 0, [D, k.id]),
				eE = n.default.useMemo(() => {
					var e
					return null != (e = k.closeButton) ? e : O
				}, [k.closeButton, O]),
				eC = n.default.useMemo(() => k.duration || V || 4e3, [k.duration, V]),
				ek = n.default.useRef(0),
				eR = n.default.useRef(0),
				eS = n.default.useRef(0),
				ej = n.default.useRef(null),
				[eP, eD] = $.split("-"),
				eT = n.default.useMemo(() => D.reduce((e, t, r) => (r >= ex ? e : e + t.height), 0), [D, ex]),
				eA = (() => {
					let [e, t] = n.default.useState(document.hidden)
					return (
						n.default.useEffect(() => {
							let e = () => {
								t(document.hidden)
							}
							return (
								document.addEventListener("visibilitychange", e),
								() => window.removeEventListener("visibilitychange", e)
							)
						}, []),
						e
					)
				})(),
				eN = k.invert || C,
				eM = "loading" === eg
			;(eR.current = n.default.useMemo(() => ex * B + eT, [ex, eT])),
				n.default.useEffect(() => {
					ef.current = eC
				}, [eC]),
				n.default.useEffect(() => {
					J(!0)
				}, []),
				n.default.useEffect(() => {
					let e = em.current
					if (e) {
						let t = e.getBoundingClientRect().height
						return (
							ec(t),
							j((e) => [{ toastId: k.id, height: t, position: k.position }, ...e]),
							() => j((e) => e.filter((e) => e.toastId !== k.id))
						)
					}
				}, [j, k.id]),
				n.default.useLayoutEffect(() => {
					if (!Q) return
					let e = em.current,
						t = e.style.height
					e.style.height = "auto"
					let r = e.getBoundingClientRect().height
					;(e.style.height = t),
						ec(r),
						j((e) =>
							e.find((e) => e.toastId === k.id)
								? e.map((e) => (e.toastId === k.id ? { ...e, height: r } : e))
								: [{ toastId: k.id, height: r, position: k.position }, ...e],
						)
				}, [Q, k.title, k.description, j, k.id, k.jsx, k.action, k.cancel])
			let e_ = n.default.useCallback(() => {
				et(!0),
					eu(eR.current),
					j((e) => e.filter((e) => e.toastId !== k.id)),
					setTimeout(() => {
						M(k)
					}, 200)
			}, [k, M, j, eR])
			n.default.useEffect(() => {
				let e
				if ((!k.promise || "loading" !== eg) && k.duration !== 1 / 0 && "loading" !== k.type) {
					if (N || S || eA) {
						if (eS.current < ek.current) {
							let e = new Date().getTime() - ek.current
							ef.current = ef.current - e
						}
						eS.current = new Date().getTime()
					} else
						ef.current !== 1 / 0 &&
							((ek.current = new Date().getTime()),
							(e = setTimeout(() => {
								null == k.onAutoClose || k.onAutoClose.call(k, k), e_()
							}, ef.current)))
					return () => clearTimeout(e)
				}
			}, [N, S, k, eg, eA, e_]),
				n.default.useEffect(() => {
					k.delete && (e_(), null == k.onDismiss || k.onDismiss.call(k, k))
				}, [e_, k.delete])
			let eO =
				k.icon ||
				(null == K ? void 0 : K[eg]) ||
				((e) => {
					switch (e) {
						case "success":
							return l
						case "info":
							return u
						case "warning":
							return s
						case "error":
							return d
						default:
							return null
					}
				})(eg)
			return n.default.createElement(
				"li",
				{
					tabIndex: 0,
					ref: em,
					className: g(
						z,
						eb,
						null == U ? void 0 : U.toast,
						null == k || null == (t = k.classNames) ? void 0 : t.toast,
						null == U ? void 0 : U.default,
						null == U ? void 0 : U[eg],
						null == k || null == (r = k.classNames) ? void 0 : r[eg],
					),
					"data-sonner-toast": "",
					"data-rich-colors": null != (b = k.richColors) ? b : _,
					"data-styled": !(k.jsx || k.unstyled || R),
					"data-mounted": Q,
					"data-promise": !!k.promise,
					"data-swiped": ei,
					"data-removed": ee,
					"data-visible": ev,
					"data-y-position": eP,
					"data-x-position": eD,
					"data-index": T,
					"data-front": eh,
					"data-swiping": er,
					"data-dismissible": ey,
					"data-type": eg,
					"data-invert": eN,
					"data-swipe-out": eo,
					"data-swipe-direction": G,
					"data-expanded": !!(N || (W && Q)),
					style: {
						"--index": T,
						"--toasts-before": T,
						"--z-index": A.length - T,
						"--offset": `${ee ? es : eR.current}px`,
						"--initial-height": W ? "auto" : `${ed}px`,
						...L,
						...k.style,
					},
					onDragEnd: () => {
						en(!1), X(null), (ej.current = null)
					},
					onPointerDown: (e) => {
						eM ||
							!ey ||
							((ep.current = new Date()),
							eu(eR.current),
							e.target.setPointerCapture(e.pointerId),
							"BUTTON" !== e.target.tagName && (en(!0), (ej.current = { x: e.clientX, y: e.clientY })))
					},
					onPointerUp: () => {
						var e, t, r, n, o
						if (eo || !ey) return
						ej.current = null
						let a = Number(
								(null == (e = em.current)
									? void 0
									: e.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0,
							),
							i = Number(
								(null == (t = em.current)
									? void 0
									: t.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0,
							),
							l = new Date().getTime() - (null == (r = ep.current) ? void 0 : r.getTime()),
							s = "x" === q ? a : i,
							u = Math.abs(s) / l
						if (Math.abs(s) >= 45 || u > 0.11) {
							eu(eR.current),
								null == k.onDismiss || k.onDismiss.call(k, k),
								"x" === q ? Z(a > 0 ? "right" : "left") : Z(i > 0 ? "down" : "up"),
								e_(),
								ea(!0)
							return
						}
						null == (n = em.current) || n.style.setProperty("--swipe-amount-x", "0px"),
							null == (o = em.current) || o.style.setProperty("--swipe-amount-y", "0px"),
							el(!1),
							en(!1),
							X(null)
					},
					onPointerMove: (t) => {
						var r, n, o, a
						if (
							!ej.current ||
							!ey ||
							(null == (r = window.getSelection()) ? void 0 : r.toString().length) > 0
						)
							return
						let i = t.clientY - ej.current.y,
							l = t.clientX - ej.current.x,
							s =
								null != (a = e.swipeDirections)
									? a
									: (function (e) {
											let [t, r] = e.split("-"),
												n = []
											return t && n.push(t), r && n.push(r), n
										})($)
						!q && (Math.abs(l) > 1 || Math.abs(i) > 1) && X(Math.abs(l) > Math.abs(i) ? "x" : "y")
						let u = { x: 0, y: 0 },
							d = (e) => 1 / (1.5 + Math.abs(e) / 20)
						if ("y" === q) {
							if (s.includes("top") || s.includes("bottom"))
								if ((s.includes("top") && i < 0) || (s.includes("bottom") && i > 0)) u.y = i
								else {
									let e = i * d(i)
									u.y = Math.abs(e) < Math.abs(i) ? e : i
								}
						} else if ("x" === q && (s.includes("left") || s.includes("right")))
							if ((s.includes("left") && l < 0) || (s.includes("right") && l > 0)) u.x = l
							else {
								let e = l * d(l)
								u.x = Math.abs(e) < Math.abs(l) ? e : l
							}
						;(Math.abs(u.x) > 0 || Math.abs(u.y) > 0) && el(!0),
							null == (n = em.current) || n.style.setProperty("--swipe-amount-x", `${u.x}px`),
							null == (o = em.current) || o.style.setProperty("--swipe-amount-y", `${u.y}px`)
					},
				},
				eE && !k.jsx && "loading" !== eg
					? n.default.createElement(
							"button",
							{
								"aria-label": Y,
								"data-disabled": eM,
								"data-close-button": !0,
								onClick:
									eM || !ey
										? () => {}
										: () => {
												e_(), null == k.onDismiss || k.onDismiss.call(k, k)
											},
								className: g(
									null == U ? void 0 : U.closeButton,
									null == k || null == (o = k.classNames) ? void 0 : o.closeButton,
								),
							},
							null != (w = null == K ? void 0 : K.close) ? w : c,
						)
					: null,
				(eg || k.icon || k.promise) && null !== k.icon && ((null == K ? void 0 : K[eg]) !== null || k.icon)
					? n.default.createElement(
							"div",
							{
								"data-icon": "",
								className: g(
									null == U ? void 0 : U.icon,
									null == k || null == (a = k.classNames) ? void 0 : a.icon,
								),
							},
							k.promise || ("loading" === k.type && !k.icon)
								? k.icon ||
										((null == K ? void 0 : K.loading)
											? n.default.createElement(
													"div",
													{
														className: g(
															null == U ? void 0 : U.loader,
															null == k || null == (E = k.classNames) ? void 0 : E.loader,
															"sonner-loader",
														),
														"data-visible": "loading" === eg,
													},
													K.loading,
												)
											: n.default.createElement(i, {
													className: g(
														null == U ? void 0 : U.loader,
														null == k || null == (x = k.classNames) ? void 0 : x.loader,
													),
													visible: "loading" === eg,
												}))
								: null,
							"loading" !== k.type ? eO : null,
						)
					: null,
				n.default.createElement(
					"div",
					{
						"data-content": "",
						className: g(
							null == U ? void 0 : U.content,
							null == k || null == (f = k.classNames) ? void 0 : f.content,
						),
					},
					n.default.createElement(
						"div",
						{
							"data-title": "",
							className: g(
								null == U ? void 0 : U.title,
								null == k || null == (p = k.classNames) ? void 0 : p.title,
							),
						},
						k.jsx ? k.jsx : "function" == typeof k.title ? k.title() : k.title,
					),
					k.description
						? n.default.createElement(
								"div",
								{
									"data-description": "",
									className: g(
										H,
										ew,
										null == U ? void 0 : U.description,
										null == k || null == (m = k.classNames) ? void 0 : m.description,
									),
								},
								"function" == typeof k.description ? k.description() : k.description,
							)
						: null,
				),
				n.default.isValidElement(k.cancel)
					? k.cancel
					: k.cancel && v(k.cancel)
						? n.default.createElement(
								"button",
								{
									"data-button": !0,
									"data-cancel": !0,
									style: k.cancelButtonStyle || I,
									onClick: (e) => {
										!v(k.cancel) ||
											(ey &&
												(null == k.cancel.onClick || k.cancel.onClick.call(k.cancel, e), e_()))
									},
									className: g(
										null == U ? void 0 : U.cancelButton,
										null == k || null == (h = k.classNames) ? void 0 : h.cancelButton,
									),
								},
								k.cancel.label,
							)
						: null,
				n.default.isValidElement(k.action)
					? k.action
					: k.action && v(k.action)
						? n.default.createElement(
								"button",
								{
									"data-button": !0,
									"data-action": !0,
									style: k.actionButtonStyle || F,
									onClick: (e) => {
										!v(k.action) ||
											(null == k.action.onClick || k.action.onClick.call(k.action, e),
											e.defaultPrevented || e_())
									},
									className: g(
										null == U ? void 0 : U.actionButton,
										null == k || null == (y = k.classNames) ? void 0 : y.actionButton,
									),
								},
								k.action.label,
							)
						: null,
			)
		}
		function b() {
			if ("u" < typeof window || "u" < typeof document) return "ltr"
			let e = document.documentElement.getAttribute("dir")
			return "auto" !== e && e ? e : window.getComputedStyle(document.documentElement).direction
		}
		let w = n.default.forwardRef(function (e, t) {
			let {
					invert: r,
					position: a = "bottom-right",
					hotkey: i = ["altKey", "KeyT"],
					expand: l,
					closeButton: s,
					className: u,
					offset: d,
					mobileOffset: c,
					theme: f = "light",
					richColors: m,
					duration: h,
					style: v,
					visibleToasts: g = 3,
					toastOptions: w,
					dir: x = b(),
					gap: E = 14,
					icons: C,
					containerAriaLabel: k = "Notifications",
				} = e,
				[R, S] = n.default.useState([]),
				j = n.default.useMemo(
					() => Array.from(new Set([a].concat(R.filter((e) => e.position).map((e) => e.position)))),
					[R, a],
				),
				[P, D] = n.default.useState([]),
				[T, A] = n.default.useState(!1),
				[N, M] = n.default.useState(!1),
				[_, O] = n.default.useState(
					"system" !== f
						? f
						: "u" > typeof window &&
							  window.matchMedia &&
							  window.matchMedia("(prefers-color-scheme: dark)").matches
							? "dark"
							: "light",
				),
				L = n.default.useRef(null),
				I = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
				F = n.default.useRef(null),
				z = n.default.useRef(!1),
				H = n.default.useCallback((e) => {
					S((t) => {
						var r
						return (
							(null == (r = t.find((t) => t.id === e.id)) ? void 0 : r.delete) || p.dismiss(e.id),
							t.filter(({ id: t }) => t !== e.id)
						)
					})
				}, [])
			return (
				n.default.useEffect(
					() =>
						p.subscribe((e) => {
							e.dismiss
								? requestAnimationFrame(() => {
										S((t) => t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t)))
									})
								: setTimeout(() => {
										o.default.flushSync(() => {
											S((t) => {
												let r = t.findIndex((t) => t.id === e.id)
												return -1 !== r
													? [...t.slice(0, r), { ...t[r], ...e }, ...t.slice(r + 1)]
													: [e, ...t]
											})
										})
									})
						}),
					[R],
				),
				n.default.useEffect(() => {
					if ("system" !== f) return void O(f)
					if (
						("system" === f &&
							(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
								? O("dark")
								: O("light")),
						"u" < typeof window)
					)
						return
					let e = window.matchMedia("(prefers-color-scheme: dark)")
					try {
						e.addEventListener("change", ({ matches: e }) => {
							e ? O("dark") : O("light")
						})
					} catch (t) {
						e.addListener(({ matches: e }) => {
							try {
								e ? O("dark") : O("light")
							} catch (e) {
								console.error(e)
							}
						})
					}
				}, [f]),
				n.default.useEffect(() => {
					R.length <= 1 && A(!1)
				}, [R]),
				n.default.useEffect(() => {
					let e = (e) => {
						var t, r
						i.every((t) => e[t] || e.code === t) && (A(!0), null == (r = L.current) || r.focus()),
							"Escape" === e.code &&
								(document.activeElement === L.current ||
									(null == (t = L.current) ? void 0 : t.contains(document.activeElement))) &&
								A(!1)
					}
					return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
				}, [i]),
				n.default.useEffect(() => {
					if (L.current)
						return () => {
							F.current && (F.current.focus({ preventScroll: !0 }), (F.current = null), (z.current = !1))
						}
				}, [L.current]),
				n.default.createElement(
					"section",
					{
						ref: t,
						"aria-label": `${k} ${I}`,
						tabIndex: -1,
						"aria-live": "polite",
						"aria-relevant": "additions text",
						"aria-atomic": "false",
						suppressHydrationWarning: !0,
					},
					j.map((t, o) => {
						var a
						let i,
							[f, p] = t.split("-")
						return R.length
							? n.default.createElement(
									"ol",
									{
										key: t,
										dir: "auto" === x ? b() : x,
										tabIndex: -1,
										ref: L,
										className: u,
										"data-sonner-toaster": !0,
										"data-sonner-theme": _,
										"data-y-position": f,
										"data-x-position": p,
										style: {
											"--front-toast-height": `${(null == (a = P[0]) ? void 0 : a.height) || 0}px`,
											"--width": "356px",
											"--gap": `${E}px`,
											...v,
											...((i = {}),
											[d, c].forEach((e, t) => {
												let r = 1 === t,
													n = r ? "--mobile-offset" : "--offset",
													o = r ? "16px" : "24px"
												function a(e) {
													;["top", "right", "bottom", "left"].forEach((t) => {
														i[`${n}-${t}`] = "number" == typeof e ? `${e}px` : e
													})
												}
												"number" == typeof e || "string" == typeof e
													? a(e)
													: "object" == typeof e
														? ["top", "right", "bottom", "left"].forEach((t) => {
																void 0 === e[t]
																	? (i[`${n}-${t}`] = o)
																	: (i[`${n}-${t}`] =
																			"number" == typeof e[t]
																				? `${e[t]}px`
																				: e[t])
															})
														: a(o)
											}),
											i),
										},
										onBlur: (e) => {
											z.current &&
												!e.currentTarget.contains(e.relatedTarget) &&
												((z.current = !1),
												F.current &&
													(F.current.focus({ preventScroll: !0 }), (F.current = null)))
										},
										onFocus: (e) => {
											!(
												e.target instanceof HTMLElement &&
												"false" === e.target.dataset.dismissible
											) &&
												(z.current || ((z.current = !0), (F.current = e.relatedTarget)))
										},
										onMouseEnter: () => A(!0),
										onMouseMove: () => A(!0),
										onMouseLeave: () => {
											N || A(!1)
										},
										onDragEnd: () => A(!1),
										onPointerDown: (e) => {
											;(e.target instanceof HTMLElement &&
												"false" === e.target.dataset.dismissible) ||
												M(!0)
										},
										onPointerUp: () => M(!1),
									},
									R.filter((e) => (!e.position && 0 === o) || e.position === t).map((o, a) => {
										var i, u
										return n.default.createElement(y, {
											key: o.id,
											icons: C,
											index: a,
											toast: o,
											defaultRichColors: m,
											duration: null != (i = null == w ? void 0 : w.duration) ? i : h,
											className: null == w ? void 0 : w.className,
											descriptionClassName: null == w ? void 0 : w.descriptionClassName,
											invert: r,
											visibleToasts: g,
											closeButton: null != (u = null == w ? void 0 : w.closeButton) ? u : s,
											interacting: N,
											position: t,
											style: null == w ? void 0 : w.style,
											unstyled: null == w ? void 0 : w.unstyled,
											classNames: null == w ? void 0 : w.classNames,
											cancelButtonStyle: null == w ? void 0 : w.cancelButtonStyle,
											actionButtonStyle: null == w ? void 0 : w.actionButtonStyle,
											closeButtonAriaLabel: null == w ? void 0 : w.closeButtonAriaLabel,
											removeToast: H,
											toasts: R.filter((e) => e.position == o.position),
											heights: P.filter((e) => e.position == o.position),
											setHeights: D,
											expandByDefault: l,
											gap: E,
											expanded: T,
											swipeDirections: e.swipeDirections,
										})
									}),
								)
							: null
					}),
				)
			)
		})
		e.s(["Toaster", () => w, "toast", () => h], 13975)
		let x = ({ ...e }) => {
			let { theme: n = "system" } = (0, r.useTheme)()
			return (0, t.jsx)(w, {
				theme: n,
				className: "toaster group",
				style: {
					"--normal-bg": "var(--popover)",
					"--normal-text": "var(--popover-foreground)",
					"--normal-border": "var(--border)",
				},
				...e,
			})
		}
		e.s(["Toaster", () => x], 81186)
	},
	77853,
	(e) => {
		"use strict"
		var t = e.i(8026),
			r = e.i(46030)
		function n({ className: e, ...n }) {
			return (0, t.jsx)("div", {
				"data-slot": "table-container",
				className: "relative w-full overflow-x-auto",
				children: (0, t.jsx)("table", {
					"data-slot": "table",
					className: (0, r.cn)("w-full caption-bottom text-sm", e),
					...n,
				}),
			})
		}
		function o({ className: e, ...n }) {
			return (0, t.jsx)("thead", {
				"data-slot": "table-header",
				className: (0, r.cn)("[&_tr]:border-b", e),
				...n,
			})
		}
		function a({ className: e, ...n }) {
			return (0, t.jsx)("tbody", {
				"data-slot": "table-body",
				className: (0, r.cn)("[&_tr:last-child]:border-0", e),
				...n,
			})
		}
		function i({ className: e, ...n }) {
			return (0, t.jsx)("tfoot", {
				"data-slot": "table-footer",
				className: (0, r.cn)("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", e),
				...n,
			})
		}
		function l({ className: e, ...n }) {
			return (0, t.jsx)("tr", {
				"data-slot": "table-row",
				className: (0, r.cn)("hover:bg-accent/5 data-[state=selected]:bg-muted border-b transition-colors", e),
				...n,
			})
		}
		function s({ className: e, ...n }) {
			return (0, t.jsx)("th", {
				"data-slot": "table-head",
				className: (0, r.cn)(
					"text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
					e,
				),
				...n,
			})
		}
		function u({ className: e, ...n }) {
			return (0, t.jsx)("td", {
				"data-slot": "table-cell",
				className: (0, r.cn)(
					"p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
					e,
				),
				...n,
			})
		}
		function d({ className: e, ...n }) {
			return (0, t.jsx)("caption", {
				"data-slot": "table-caption",
				className: (0, r.cn)("text-muted-foreground mt-4 text-sm", e),
				...n,
			})
		}
		e.s([
			"Table",
			() => n,
			"TableBody",
			() => a,
			"TableCaption",
			() => d,
			"TableCell",
			() => u,
			"TableFooter",
			() => i,
			"TableHead",
			() => s,
			"TableHeader",
			() => o,
			"TableRow",
			() => l,
		])
	},
	94725,
	(e) => {
		"use strict"
		var t = e.i(8026),
			r = e.i(10008),
			n = e.i(75453),
			o = e.i(4113),
			a = e.i(26613),
			i = e.i(75263),
			l = new WeakMap()
		function s(e, t) {
			var r, n
			let o, a, i
			if ("at" in Array.prototype) return Array.prototype.at.call(e, t)
			let l = ((r = e), (n = t), (o = r.length), (i = (a = u(n)) >= 0 ? a : o + a) < 0 || i >= o ? -1 : i)
			return -1 === l ? void 0 : e[l]
		}
		function u(e) {
			return e != e || 0 === e ? 0 : Math.trunc(e)
		}
		;(class e extends Map {
			#a
			constructor(e) {
				super(e), (this.#a = [...super.keys()]), l.set(this, !0)
			}
			set(e, t) {
				return (
					l.get(this) && (this.has(e) ? (this.#a[this.#a.indexOf(e)] = e) : this.#a.push(e)),
					super.set(e, t),
					this
				)
			}
			insert(e, t, r) {
				let n,
					o = this.has(t),
					a = this.#a.length,
					i = u(e),
					l = i >= 0 ? i : a + i,
					s = l < 0 || l >= a ? -1 : l
				if (s === this.size || (o && s === this.size - 1) || -1 === s) return this.set(t, r), this
				let d = this.size + +!o
				i < 0 && l++
				let c = [...this.#a],
					f = !1
				for (let e = l; e < d; e++)
					if (l === e) {
						let a = c[e]
						c[e] === t && (a = c[e + 1]), o && this.delete(t), (n = this.get(a)), this.set(t, r)
					} else {
						f || c[e - 1] !== t || (f = !0)
						let r = c[f ? e : e - 1],
							o = n
						;(n = this.get(r)), this.delete(r), this.set(r, o)
					}
				return this
			}
			with(t, r, n) {
				let o = new e(this)
				return o.insert(t, r, n), o
			}
			before(e) {
				let t = this.#a.indexOf(e) - 1
				if (!(t < 0)) return this.entryAt(t)
			}
			setBefore(e, t, r) {
				let n = this.#a.indexOf(e)
				return -1 === n ? this : this.insert(n, t, r)
			}
			after(e) {
				let t = this.#a.indexOf(e)
				if (-1 !== (t = -1 === t || t === this.size - 1 ? -1 : t + 1)) return this.entryAt(t)
			}
			setAfter(e, t, r) {
				let n = this.#a.indexOf(e)
				return -1 === n ? this : this.insert(n + 1, t, r)
			}
			first() {
				return this.entryAt(0)
			}
			last() {
				return this.entryAt(-1)
			}
			clear() {
				return (this.#a = []), super.clear()
			}
			delete(e) {
				let t = super.delete(e)
				return t && this.#a.splice(this.#a.indexOf(e), 1), t
			}
			deleteAt(e) {
				let t = this.keyAt(e)
				return void 0 !== t && this.delete(t)
			}
			at(e) {
				let t = s(this.#a, e)
				if (void 0 !== t) return this.get(t)
			}
			entryAt(e) {
				let t = s(this.#a, e)
				if (void 0 !== t) return [t, this.get(t)]
			}
			indexOf(e) {
				return this.#a.indexOf(e)
			}
			keyAt(e) {
				return s(this.#a, e)
			}
			from(e, t) {
				let r = this.indexOf(e)
				if (-1 === r) return
				let n = r + t
				return n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.at(n)
			}
			keyFrom(e, t) {
				let r = this.indexOf(e)
				if (-1 === r) return
				let n = r + t
				return n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.keyAt(n)
			}
			find(e, t) {
				let r = 0
				for (let n of this) {
					if (Reflect.apply(e, t, [n, r, this])) return n
					r++
				}
			}
			findIndex(e, t) {
				let r = 0
				for (let n of this) {
					if (Reflect.apply(e, t, [n, r, this])) return r
					r++
				}
				return -1
			}
			filter(t, r) {
				let n = [],
					o = 0
				for (let e of this) Reflect.apply(t, r, [e, o, this]) && n.push(e), o++
				return new e(n)
			}
			map(t, r) {
				let n = [],
					o = 0
				for (let e of this) n.push([e[0], Reflect.apply(t, r, [e, o, this])]), o++
				return new e(n)
			}
			reduce(...e) {
				let [t, r] = e,
					n = 0,
					o = r ?? this.at(0)
				for (let r of this) (o = 0 === n && 1 === e.length ? r : Reflect.apply(t, this, [o, r, n, this])), n++
				return o
			}
			reduceRight(...e) {
				let [t, r] = e,
					n = r ?? this.at(-1)
				for (let r = this.size - 1; r >= 0; r--) {
					let o = this.at(r)
					n = r === this.size - 1 && 1 === e.length ? o : Reflect.apply(t, this, [n, o, r, this])
				}
				return n
			}
			toSorted(t) {
				return new e([...this.entries()].sort(t))
			}
			toReversed() {
				let t = new e()
				for (let e = this.size - 1; e >= 0; e--) {
					let r = this.keyAt(e),
						n = this.get(r)
					t.set(r, n)
				}
				return t
			}
			toSpliced(...t) {
				let r = [...this.entries()]
				return r.splice(...t), new e(r)
			}
			slice(t, r) {
				let n = new e(),
					o = this.size - 1
				if (void 0 === t) return n
				t < 0 && (t += this.size), void 0 !== r && r > 0 && (o = r - 1)
				for (let e = t; e <= o; e++) {
					let t = this.keyAt(e),
						r = this.get(t)
					n.set(t, r)
				}
				return n
			}
			every(e, t) {
				let r = 0
				for (let n of this) {
					if (!Reflect.apply(e, t, [n, r, this])) return !1
					r++
				}
				return !0
			}
			some(e, t) {
				let r = 0
				for (let n of this) {
					if (Reflect.apply(e, t, [n, r, this])) return !0
					r++
				}
				return !1
			}
		})
		var d = e.i(55162),
			c = e.i(24805),
			f = e.i(84123),
			p = e.i(93180),
			m = e.i(78883),
			h = "rovingFocusGroup.onEntryFocus",
			v = { bubbles: !1, cancelable: !0 },
			g = "RovingFocusGroup",
			[y, b, w] = (function (e) {
				let n = e + "CollectionProvider",
					[l, s] = (0, o.createContextScope)(n),
					[u, d] = l(n, { collectionRef: { current: null }, itemMap: new Map() }),
					c = (e) => {
						let { scope: n, children: o } = e,
							a = r.default.useRef(null),
							i = r.default.useRef(new Map()).current
						return (0, t.jsx)(u, { scope: n, itemMap: i, collectionRef: a, children: o })
					}
				c.displayName = n
				let f = e + "CollectionSlot",
					p = (0, i.createSlot)(f),
					m = r.default.forwardRef((e, r) => {
						let { scope: n, children: o } = e,
							i = d(f, n),
							l = (0, a.useComposedRefs)(r, i.collectionRef)
						return (0, t.jsx)(p, { ref: l, children: o })
					})
				m.displayName = f
				let h = e + "CollectionItemSlot",
					v = "data-radix-collection-item",
					g = (0, i.createSlot)(h),
					y = r.default.forwardRef((e, n) => {
						let { scope: o, children: i, ...l } = e,
							s = r.default.useRef(null),
							u = (0, a.useComposedRefs)(n, s),
							c = d(h, o)
						return (
							r.default.useEffect(
								() => (c.itemMap.set(s, { ref: s, ...l }), () => void c.itemMap.delete(s)),
							),
							(0, t.jsx)(g, { ...{ [v]: "" }, ref: u, children: i })
						)
					})
				return (
					(y.displayName = h),
					[
						{ Provider: c, Slot: m, ItemSlot: y },
						function (t) {
							let n = d(e + "CollectionConsumer", t)
							return r.default.useCallback(() => {
								let e = n.collectionRef.current
								if (!e) return []
								let t = Array.from(e.querySelectorAll(`[${v}]`))
								return Array.from(n.itemMap.values()).sort(
									(e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current),
								)
							}, [n.collectionRef, n.itemMap])
						},
						s,
					]
				)
			})(g),
			[x, E] = (0, o.createContextScope)(g, [w]),
			[C, k] = x(g),
			R = r.forwardRef((e, r) =>
				(0, t.jsx)(y.Provider, {
					scope: e.__scopeRovingFocusGroup,
					children: (0, t.jsx)(y.Slot, {
						scope: e.__scopeRovingFocusGroup,
						children: (0, t.jsx)(S, { ...e, ref: r }),
					}),
				}),
			)
		R.displayName = g
		var S = r.forwardRef((e, o) => {
				let {
						__scopeRovingFocusGroup: i,
						orientation: l,
						loop: s = !1,
						dir: u,
						currentTabStopId: d,
						defaultCurrentTabStopId: y,
						onCurrentTabStopIdChange: w,
						onEntryFocus: x,
						preventScrollOnEntryFocus: E = !1,
						...k
					} = e,
					R = r.useRef(null),
					S = (0, a.useComposedRefs)(o, R),
					j = (0, m.useDirection)(u),
					[P, D] = (0, p.useControllableState)({ prop: d, defaultProp: y ?? null, onChange: w, caller: g }),
					[A, N] = r.useState(!1),
					M = (0, f.useCallbackRef)(x),
					_ = b(i),
					O = r.useRef(!1),
					[L, I] = r.useState(0)
				return (
					r.useEffect(() => {
						let e = R.current
						if (e) return e.addEventListener(h, M), () => e.removeEventListener(h, M)
					}, [M]),
					(0, t.jsx)(C, {
						scope: i,
						orientation: l,
						dir: j,
						loop: s,
						currentTabStopId: P,
						onItemFocus: r.useCallback((e) => D(e), [D]),
						onItemShiftTab: r.useCallback(() => N(!0), []),
						onFocusableItemAdd: r.useCallback(() => I((e) => e + 1), []),
						onFocusableItemRemove: r.useCallback(() => I((e) => e - 1), []),
						children: (0, t.jsx)(c.Primitive.div, {
							tabIndex: A || 0 === L ? -1 : 0,
							"data-orientation": l,
							...k,
							ref: S,
							style: { outline: "none", ...e.style },
							onMouseDown: (0, n.composeEventHandlers)(e.onMouseDown, () => {
								O.current = !0
							}),
							onFocus: (0, n.composeEventHandlers)(e.onFocus, (e) => {
								let t = !O.current
								if (e.target === e.currentTarget && t && !A) {
									let t = new CustomEvent(h, v)
									if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
										let e = _().filter((e) => e.focusable)
										T(
											[e.find((e) => e.active), e.find((e) => e.id === P), ...e]
												.filter(Boolean)
												.map((e) => e.ref.current),
											E,
										)
									}
								}
								O.current = !1
							}),
							onBlur: (0, n.composeEventHandlers)(e.onBlur, () => N(!1)),
						}),
					})
				)
			}),
			j = "RovingFocusGroupItem",
			P = r.forwardRef((e, o) => {
				let {
						__scopeRovingFocusGroup: a,
						focusable: i = !0,
						active: l = !1,
						tabStopId: s,
						children: u,
						...f
					} = e,
					p = (0, d.useId)(),
					m = s || p,
					h = k(j, a),
					v = h.currentTabStopId === m,
					g = b(a),
					{ onFocusableItemAdd: w, onFocusableItemRemove: x, currentTabStopId: E } = h
				return (
					r.useEffect(() => {
						if (i) return w(), () => x()
					}, [i, w, x]),
					(0, t.jsx)(y.ItemSlot, {
						scope: a,
						id: m,
						focusable: i,
						active: l,
						children: (0, t.jsx)(c.Primitive.span, {
							tabIndex: v ? 0 : -1,
							"data-orientation": h.orientation,
							...f,
							ref: o,
							onMouseDown: (0, n.composeEventHandlers)(e.onMouseDown, (e) => {
								i ? h.onItemFocus(m) : e.preventDefault()
							}),
							onFocus: (0, n.composeEventHandlers)(e.onFocus, () => h.onItemFocus(m)),
							onKeyDown: (0, n.composeEventHandlers)(e.onKeyDown, (e) => {
								if ("Tab" === e.key && e.shiftKey) return void h.onItemShiftTab()
								if (e.target !== e.currentTarget) return
								let t = (function (e, t, r) {
									var n
									let o =
										((n = e.key),
										"rtl" !== r
											? n
											: "ArrowLeft" === n
												? "ArrowRight"
												: "ArrowRight" === n
													? "ArrowLeft"
													: n)
									if (
										!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) &&
										!("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))
									)
										return D[o]
								})(e, h.orientation, h.dir)
								if (void 0 !== t) {
									if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return
									e.preventDefault()
									let o = g()
										.filter((e) => e.focusable)
										.map((e) => e.ref.current)
									if ("last" === t) o.reverse()
									else if ("prev" === t || "next" === t) {
										var r, n
										"prev" === t && o.reverse()
										let a = o.indexOf(e.currentTarget)
										o = h.loop
											? ((r = o), (n = a + 1), r.map((e, t) => r[(n + t) % r.length]))
											: o.slice(a + 1)
									}
									setTimeout(() => T(o))
								}
							}),
							children: "function" == typeof u ? u({ isCurrentTabStop: v, hasTabStop: null != E }) : u,
						}),
					})
				)
			})
		P.displayName = j
		var D = {
			ArrowLeft: "prev",
			ArrowUp: "prev",
			ArrowRight: "next",
			ArrowDown: "next",
			PageUp: "first",
			Home: "first",
			PageDown: "last",
			End: "last",
		}
		function T(e, t = !1) {
			let r = document.activeElement
			for (let n of e) if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return
		}
		var A = e.i(98753),
			N = "Tabs",
			[M, _] = (0, o.createContextScope)(N, [E]),
			O = E(),
			[L, I] = M(N),
			F = r.forwardRef((e, r) => {
				let {
						__scopeTabs: n,
						value: o,
						onValueChange: a,
						defaultValue: i,
						orientation: l = "horizontal",
						dir: s,
						activationMode: u = "automatic",
						...f
					} = e,
					h = (0, m.useDirection)(s),
					[v, g] = (0, p.useControllableState)({ prop: o, onChange: a, defaultProp: i ?? "", caller: N })
				return (0, t.jsx)(L, {
					scope: n,
					baseId: (0, d.useId)(),
					value: v,
					onValueChange: g,
					orientation: l,
					dir: h,
					activationMode: u,
					children: (0, t.jsx)(c.Primitive.div, { dir: h, "data-orientation": l, ...f, ref: r }),
				})
			})
		F.displayName = N
		var z = "TabsList",
			H = r.forwardRef((e, r) => {
				let { __scopeTabs: n, loop: o = !0, ...a } = e,
					i = I(z, n),
					l = O(n)
				return (0, t.jsx)(R, {
					asChild: !0,
					...l,
					orientation: i.orientation,
					dir: i.dir,
					loop: o,
					children: (0, t.jsx)(c.Primitive.div, {
						role: "tablist",
						"aria-orientation": i.orientation,
						...a,
						ref: r,
					}),
				})
			})
		H.displayName = z
		var V = "TabsTrigger",
			$ = r.forwardRef((e, r) => {
				let { __scopeTabs: o, value: a, disabled: i = !1, ...l } = e,
					s = I(V, o),
					u = O(o),
					d = U(s.baseId, a),
					f = K(s.baseId, a),
					p = a === s.value
				return (0, t.jsx)(P, {
					asChild: !0,
					...u,
					focusable: !i,
					active: p,
					children: (0, t.jsx)(c.Primitive.button, {
						type: "button",
						role: "tab",
						"aria-selected": p,
						"aria-controls": f,
						"data-state": p ? "active" : "inactive",
						"data-disabled": i ? "" : void 0,
						disabled: i,
						id: d,
						...l,
						ref: r,
						onMouseDown: (0, n.composeEventHandlers)(e.onMouseDown, (e) => {
							i || 0 !== e.button || !1 !== e.ctrlKey ? e.preventDefault() : s.onValueChange(a)
						}),
						onKeyDown: (0, n.composeEventHandlers)(e.onKeyDown, (e) => {
							;[" ", "Enter"].includes(e.key) && s.onValueChange(a)
						}),
						onFocus: (0, n.composeEventHandlers)(e.onFocus, () => {
							let e = "manual" !== s.activationMode
							p || i || !e || s.onValueChange(a)
						}),
					}),
				})
			})
		$.displayName = V
		var B = "TabsContent",
			W = r.forwardRef((e, n) => {
				let { __scopeTabs: o, value: a, forceMount: i, children: l, ...s } = e,
					u = I(B, o),
					d = U(u.baseId, a),
					f = K(u.baseId, a),
					p = a === u.value,
					m = r.useRef(p)
				return (
					r.useEffect(() => {
						let e = requestAnimationFrame(() => (m.current = !1))
						return () => cancelAnimationFrame(e)
					}, []),
					(0, t.jsx)(A.Presence, {
						present: i || p,
						children: ({ present: r }) =>
							(0, t.jsx)(c.Primitive.div, {
								"data-state": p ? "active" : "inactive",
								"data-orientation": u.orientation,
								role: "tabpanel",
								"aria-labelledby": d,
								hidden: !r,
								id: f,
								tabIndex: 0,
								...s,
								ref: n,
								style: { ...e.style, animationDuration: m.current ? "0s" : void 0 },
								children: r && l,
							}),
					})
				)
			})
		function U(e, t) {
			return `${e}-trigger-${t}`
		}
		function K(e, t) {
			return `${e}-content-${t}`
		}
		W.displayName = B
		var Y = e.i(46030)
		let q = r.forwardRef(({ className: e, ...n }, o) => {
			let [a, i] = (0, r.useState)({ left: 0, top: 0, width: 0, height: 0 }),
				l = (0, r.useRef)(null),
				s = r.useCallback(() => {
					if (!l.current) return
					let e = l.current.querySelector('[data-state="active"]')
					if (!e) return
					let t = e.getBoundingClientRect(),
						r = l.current.getBoundingClientRect()
					requestAnimationFrame(() => {
						i({ left: t.left - r.left, top: t.top - r.top, width: t.width, height: t.height })
					})
				}, [])
			return (
				(0, r.useEffect)(() => {
					let e = setTimeout(s, 0)
					window.addEventListener("resize", s)
					let t = new MutationObserver(s)
					return (
						l.current && t.observe(l.current, { attributes: !0, childList: !0, subtree: !0 }),
						() => {
							clearTimeout(e), window.removeEventListener("resize", s), t.disconnect()
						}
					)
				}, [s]),
				(0, t.jsxs)("div", {
					className: "relative",
					ref: l,
					children: [
						(0, t.jsx)(H, {
							ref: o,
							className: (0, Y.cn)(
								"relative inline-flex items-center justify-center rounded-sm bg-primary p-0.5 text-muted-foreground",
								e,
							),
							...n,
						}),
						(0, t.jsx)("div", {
							className: (0, Y.cn)(
								"absolute rounded-sm transition-all duration-300 ease-in-out pointer-events-none",
								"bg-accent/5",
							),
							style: a,
						}),
					],
				})
			)
		})
		q.displayName = H.displayName
		let X = r.forwardRef(({ className: e, ...r }, n) =>
			(0, t.jsx)($, {
				ref: n,
				className: (0, Y.cn)(
					"inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 z-10",
					"data-[state=active]:text-accent data-[state=active]:font-medium cursor-pointer",
					e,
				),
				...r,
			}),
		)
		X.displayName = $.displayName
		let G = r.forwardRef(({ className: e, ...r }, n) =>
			(0, t.jsx)(W, {
				ref: n,
				className: (0, Y.cn)(
					"mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
					e,
				),
				...r,
			}),
		)
		;(G.displayName = W.displayName),
			e.s(["Tabs", () => F, "TabsContent", () => G, "TabsList", () => q, "TabsTrigger", () => X], 94725)
	},
	23706,
	(e) => {
		"use strict"
		var t,
			r = e.i(8026),
			n = e.i(10008)
		function o(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
			return function (n) {
				if ((e?.(n), !1 === r || !n.defaultPrevented)) return t?.(n)
			}
		}
		"u" > typeof window && window.document && window.document.createElement
		var a = e.i(26613),
			i = e.i(4113),
			l = e.i(24805),
			s = e.i(84123),
			u = e.i(9168),
			d = "dismissableLayer.update",
			c = n.createContext({
				layers: new Set(),
				layersWithOutsidePointerEventsDisabled: new Set(),
				branches: new Set(),
			}),
			f = n.forwardRef((e, i) => {
				let {
						disableOutsidePointerEvents: f = !1,
						onEscapeKeyDown: h,
						onPointerDownOutside: v,
						onFocusOutside: g,
						onInteractOutside: y,
						onDismiss: b,
						...w
					} = e,
					x = n.useContext(c),
					[E, C] = n.useState(null),
					k = E?.ownerDocument ?? globalThis?.document,
					[, R] = n.useState({}),
					S = (0, a.useComposedRefs)(i, (e) => C(e)),
					j = Array.from(x.layers),
					[P] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1),
					D = j.indexOf(P),
					T = E ? j.indexOf(E) : -1,
					A = x.layersWithOutsidePointerEventsDisabled.size > 0,
					N = T >= D,
					M = (function (e, t = globalThis?.document) {
						let r = (0, s.useCallbackRef)(e),
							o = n.useRef(!1),
							a = n.useRef(() => {})
						return (
							n.useEffect(() => {
								let e = (e) => {
										if (e.target && !o.current) {
											let n = function () {
													m("dismissableLayer.pointerDownOutside", r, o, { discrete: !0 })
												},
												o = { originalEvent: e }
											"touch" === e.pointerType
												? (t.removeEventListener("click", a.current),
													(a.current = n),
													t.addEventListener("click", a.current, { once: !0 }))
												: n()
										} else t.removeEventListener("click", a.current)
										o.current = !1
									},
									n = window.setTimeout(() => {
										t.addEventListener("pointerdown", e)
									}, 0)
								return () => {
									window.clearTimeout(n),
										t.removeEventListener("pointerdown", e),
										t.removeEventListener("click", a.current)
								}
							}, [t, r]),
							{ onPointerDownCapture: () => (o.current = !0) }
						)
					})((e) => {
						let t = e.target,
							r = [...x.branches].some((e) => e.contains(t))
						N && !r && (v?.(e), y?.(e), e.defaultPrevented || b?.())
					}, k),
					_ = (function (e, t = globalThis?.document) {
						let r = (0, s.useCallbackRef)(e),
							o = n.useRef(!1)
						return (
							n.useEffect(() => {
								let e = (e) => {
									e.target &&
										!o.current &&
										m("dismissableLayer.focusOutside", r, { originalEvent: e }, { discrete: !1 })
								}
								return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
							}, [t, r]),
							{ onFocusCapture: () => (o.current = !0), onBlurCapture: () => (o.current = !1) }
						)
					})((e) => {
						let t = e.target
						![...x.branches].some((e) => e.contains(t)) && (g?.(e), y?.(e), e.defaultPrevented || b?.())
					}, k)
				return (
					(0, u.useEscapeKeydown)((e) => {
						T === x.layers.size - 1 && (h?.(e), !e.defaultPrevented && b && (e.preventDefault(), b()))
					}, k),
					n.useEffect(() => {
						if (E)
							return (
								f &&
									(0 === x.layersWithOutsidePointerEventsDisabled.size &&
										((t = k.body.style.pointerEvents), (k.body.style.pointerEvents = "none")),
									x.layersWithOutsidePointerEventsDisabled.add(E)),
								x.layers.add(E),
								p(),
								() => {
									f &&
										1 === x.layersWithOutsidePointerEventsDisabled.size &&
										(k.body.style.pointerEvents = t)
								}
							)
					}, [E, k, f, x]),
					n.useEffect(
						() => () => {
							E && (x.layers.delete(E), x.layersWithOutsidePointerEventsDisabled.delete(E), p())
						},
						[E, x],
					),
					n.useEffect(() => {
						let e = () => R({})
						return document.addEventListener(d, e), () => document.removeEventListener(d, e)
					}, []),
					(0, r.jsx)(l.Primitive.div, {
						...w,
						ref: S,
						style: { pointerEvents: A ? (N ? "auto" : "none") : void 0, ...e.style },
						onFocusCapture: o(e.onFocusCapture, _.onFocusCapture),
						onBlurCapture: o(e.onBlurCapture, _.onBlurCapture),
						onPointerDownCapture: o(e.onPointerDownCapture, M.onPointerDownCapture),
					})
				)
			})
		function p() {
			let e = new CustomEvent(d)
			document.dispatchEvent(e)
		}
		function m(e, t, r, { discrete: n }) {
			let o = r.originalEvent.target,
				a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r })
			t && o.addEventListener(e, t, { once: !0 }),
				n ? (0, l.dispatchDiscreteCustomEvent)(o, a) : o.dispatchEvent(a)
		}
		;(f.displayName = "DismissableLayer"),
			(n.forwardRef((e, t) => {
				let o = n.useContext(c),
					i = n.useRef(null),
					s = (0, a.useComposedRefs)(t, i)
				return (
					n.useEffect(() => {
						let e = i.current
						if (e)
							return (
								o.branches.add(e),
								() => {
									o.branches.delete(e)
								}
							)
					}, [o.branches]),
					(0, r.jsx)(l.Primitive.div, { ...e, ref: s })
				)
			}).displayName = "DismissableLayerBranch")
		var h = e.i(55162),
			v = e.i(97895),
			g = e.i(88832),
			y = n.forwardRef((e, t) => {
				let { children: n, width: o = 10, height: a = 5, ...i } = e
				return (0, r.jsx)(l.Primitive.svg, {
					...i,
					ref: t,
					width: o,
					height: a,
					viewBox: "0 0 30 10",
					preserveAspectRatio: "none",
					children: e.asChild ? n : (0, r.jsx)("polygon", { points: "0,0 30,0 15,10" }),
				})
			})
		y.displayName = "Arrow"
		var b = e.i(29241),
			w = e.i(43984),
			x = "Popper",
			[E, C] = (0, i.createContextScope)(x),
			[k, R] = E(x),
			S = (e) => {
				let { __scopePopper: t, children: o } = e,
					[a, i] = n.useState(null)
				return (0, r.jsx)(k, { scope: t, anchor: a, onAnchorChange: i, children: o })
			}
		S.displayName = x
		var j = "PopperAnchor",
			P = n.forwardRef((e, t) => {
				let { __scopePopper: o, virtualRef: i, ...s } = e,
					u = R(j, o),
					d = n.useRef(null),
					c = (0, a.useComposedRefs)(t, d),
					f = n.useRef(null)
				return (
					n.useEffect(() => {
						let e = f.current
						;(f.current = i?.current || d.current), e !== f.current && u.onAnchorChange(f.current)
					}),
					i ? null : (0, r.jsx)(l.Primitive.div, { ...s, ref: c })
				)
			})
		P.displayName = j
		var D = "PopperContent",
			[T, A] = E(D),
			N = n.forwardRef((e, t) => {
				let {
						__scopePopper: o,
						side: i = "bottom",
						sideOffset: u = 0,
						align: d = "center",
						alignOffset: c = 0,
						arrowPadding: f = 0,
						avoidCollisions: p = !0,
						collisionBoundary: m = [],
						collisionPadding: h = 0,
						sticky: y = "partial",
						hideWhenDetached: x = !1,
						updatePositionStrategy: E = "optimized",
						onPlaced: C,
						...k
					} = e,
					S = R(D, o),
					[j, P] = n.useState(null),
					A = (0, a.useComposedRefs)(t, (e) => P(e)),
					[N, M] = n.useState(null),
					_ = (0, w.useSize)(N),
					O = _?.width ?? 0,
					z = _?.height ?? 0,
					H = "number" == typeof h ? h : { top: 0, right: 0, bottom: 0, left: 0, ...h },
					V = Array.isArray(m) ? m : [m],
					$ = V.length > 0,
					B = { padding: H, boundary: V.filter(L), altBoundary: $ },
					{
						refs: W,
						floatingStyles: U,
						placement: K,
						isPositioned: Y,
						middlewareData: q,
					} = (0, v.useFloating)({
						strategy: "fixed",
						placement: i + ("center" !== d ? "-" + d : ""),
						whileElementsMounted: (...e) => (0, g.autoUpdate)(...e, { animationFrame: "always" === E }),
						elements: { reference: S.anchor },
						middleware: [
							(0, v.offset)({ mainAxis: u + z, alignmentAxis: c }),
							p &&
								(0, v.shift)({
									mainAxis: !0,
									crossAxis: !1,
									limiter: "partial" === y ? (0, v.limitShift)() : void 0,
									...B,
								}),
							p && (0, v.flip)({ ...B }),
							(0, v.size)({
								...B,
								apply: ({ elements: e, rects: t, availableWidth: r, availableHeight: n }) => {
									let { width: o, height: a } = t.reference,
										i = e.floating.style
									i.setProperty("--radix-popper-available-width", `${r}px`),
										i.setProperty("--radix-popper-available-height", `${n}px`),
										i.setProperty("--radix-popper-anchor-width", `${o}px`),
										i.setProperty("--radix-popper-anchor-height", `${a}px`)
								},
							}),
							N && (0, v.arrow)({ element: N, padding: f }),
							I({ arrowWidth: O, arrowHeight: z }),
							x && (0, v.hide)({ strategy: "referenceHidden", ...B }),
						],
					}),
					[X, G] = F(K),
					Z = (0, s.useCallbackRef)(C)
				;(0, b.useLayoutEffect)(() => {
					Y && Z?.()
				}, [Y, Z])
				let Q = q.arrow?.x,
					J = q.arrow?.y,
					ee = q.arrow?.centerOffset !== 0,
					[et, er] = n.useState()
				return (
					(0, b.useLayoutEffect)(() => {
						j && er(window.getComputedStyle(j).zIndex)
					}, [j]),
					(0, r.jsx)("div", {
						ref: W.setFloating,
						"data-radix-popper-content-wrapper": "",
						style: {
							...U,
							transform: Y ? U.transform : "translate(0, -200%)",
							minWidth: "max-content",
							zIndex: et,
							"--radix-popper-transform-origin": [q.transformOrigin?.x, q.transformOrigin?.y].join(" "),
							...(q.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" }),
						},
						dir: e.dir,
						children: (0, r.jsx)(T, {
							scope: o,
							placedSide: X,
							onArrowChange: M,
							arrowX: Q,
							arrowY: J,
							shouldHideArrow: ee,
							children: (0, r.jsx)(l.Primitive.div, {
								"data-side": X,
								"data-align": G,
								...k,
								ref: A,
								style: { ...k.style, animation: Y ? void 0 : "none" },
							}),
						}),
					})
				)
			})
		N.displayName = D
		var M = "PopperArrow",
			_ = { top: "bottom", right: "left", bottom: "top", left: "right" },
			O = n.forwardRef(function (e, t) {
				let { __scopePopper: n, ...o } = e,
					a = A(M, n),
					i = _[a.placedSide]
				return (0, r.jsx)("span", {
					ref: a.onArrowChange,
					style: {
						position: "absolute",
						left: a.arrowX,
						top: a.arrowY,
						[i]: 0,
						transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[a.placedSide],
						transform: {
							top: "translateY(100%)",
							right: "translateY(50%) rotate(90deg) translateX(-50%)",
							bottom: "rotate(180deg)",
							left: "translateY(50%) rotate(-90deg) translateX(50%)",
						}[a.placedSide],
						visibility: a.shouldHideArrow ? "hidden" : void 0,
					},
					children: (0, r.jsx)(y, { ...o, ref: t, style: { ...o.style, display: "block" } }),
				})
			})
		function L(e) {
			return null !== e
		}
		O.displayName = M
		var I = (e) => ({
			name: "transformOrigin",
			options: e,
			fn(t) {
				let { placement: r, rects: n, middlewareData: o } = t,
					a = o.arrow?.centerOffset !== 0,
					i = a ? 0 : e.arrowWidth,
					l = a ? 0 : e.arrowHeight,
					[s, u] = F(r),
					d = { start: "0%", center: "50%", end: "100%" }[u],
					c = (o.arrow?.x ?? 0) + i / 2,
					f = (o.arrow?.y ?? 0) + l / 2,
					p = "",
					m = ""
				return (
					"bottom" === s
						? ((p = a ? d : `${c}px`), (m = `${-l}px`))
						: "top" === s
							? ((p = a ? d : `${c}px`), (m = `${n.floating.height + l}px`))
							: "right" === s
								? ((p = `${-l}px`), (m = a ? d : `${f}px`))
								: "left" === s && ((p = `${n.floating.width + l}px`), (m = a ? d : `${f}px`)),
					{ data: { x: p, y: m } }
				)
			},
		})
		function F(e) {
			let [t, r = "center"] = e.split("-")
			return [t, r]
		}
		var z = e.i(68069),
			H = n.forwardRef((e, t) => {
				let { container: o, ...a } = e,
					[i, s] = n.useState(!1)
				;(0, b.useLayoutEffect)(() => s(!0), [])
				let u = o || (i && globalThis?.document?.body)
				return u ? z.default.createPortal((0, r.jsx)(l.Primitive.div, { ...a, ref: t }), u) : null
			})
		H.displayName = "Portal"
		var V = (e) => {
			var t
			let r,
				o,
				{ present: i, children: l } = e,
				s = (function (e) {
					var t, r
					let [o, a] = n.useState(),
						i = n.useRef(null),
						l = n.useRef(e),
						s = n.useRef("none"),
						[u, d] =
							((t = e ? "mounted" : "unmounted"),
							(r = {
								mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
								unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
								unmounted: { MOUNT: "mounted" },
							}),
							n.useReducer((e, t) => r[e][t] ?? e, t))
					return (
						n.useEffect(() => {
							let e = $(i.current)
							s.current = "mounted" === u ? e : "none"
						}, [u]),
						(0, b.useLayoutEffect)(() => {
							let t = i.current,
								r = l.current
							if (r !== e) {
								let n = s.current,
									o = $(t)
								e
									? d("MOUNT")
									: "none" === o || t?.display === "none"
										? d("UNMOUNT")
										: r && n !== o
											? d("ANIMATION_OUT")
											: d("UNMOUNT"),
									(l.current = e)
							}
						}, [e, d]),
						(0, b.useLayoutEffect)(() => {
							if (o) {
								let e,
									t = o.ownerDocument.defaultView ?? window,
									r = (r) => {
										let n = $(i.current).includes(CSS.escape(r.animationName))
										if (r.target === o && n && (d("ANIMATION_END"), !l.current)) {
											let r = o.style.animationFillMode
											;(o.style.animationFillMode = "forwards"),
												(e = t.setTimeout(() => {
													"forwards" === o.style.animationFillMode &&
														(o.style.animationFillMode = r)
												}))
										}
									},
									n = (e) => {
										e.target === o && (s.current = $(i.current))
									}
								return (
									o.addEventListener("animationstart", n),
									o.addEventListener("animationcancel", r),
									o.addEventListener("animationend", r),
									() => {
										t.clearTimeout(e),
											o.removeEventListener("animationstart", n),
											o.removeEventListener("animationcancel", r),
											o.removeEventListener("animationend", r)
									}
								)
							}
							d("ANIMATION_END")
						}, [o, d]),
						{
							isPresent: ["mounted", "unmountSuspended"].includes(u),
							ref: n.useCallback((e) => {
								;(i.current = e ? getComputedStyle(e) : null), a(e)
							}, []),
						}
					)
				})(i),
				u = "function" == typeof l ? l({ present: s.isPresent }) : n.Children.only(l),
				d = (0, a.useComposedRefs)(
					s.ref,
					((t = u),
					(o =
						(r = Object.getOwnPropertyDescriptor(t.props, "ref")?.get) &&
						"isReactWarning" in r &&
						r.isReactWarning)
						? t.ref
						: (o =
									(r = Object.getOwnPropertyDescriptor(t, "ref")?.get) &&
									"isReactWarning" in r &&
									r.isReactWarning)
							? t.props.ref
							: t.props.ref || t.ref),
				)
			return "function" == typeof l || s.isPresent ? n.cloneElement(u, { ref: d }) : null
		}
		function $(e) {
			return e?.animationName || "none"
		}
		V.displayName = "Presence"
		var B = e.i(75263),
			W = e.i(93180),
			U = Object.freeze({
				position: "absolute",
				border: 0,
				width: 1,
				height: 1,
				padding: 0,
				margin: -1,
				overflow: "hidden",
				clip: "rect(0, 0, 0, 0)",
				whiteSpace: "nowrap",
				wordWrap: "normal",
			}),
			K = n.forwardRef((e, t) => (0, r.jsx)(l.Primitive.span, { ...e, ref: t, style: { ...U, ...e.style } }))
		K.displayName = "VisuallyHidden"
		var [Y, q] = (0, i.createContextScope)("Tooltip", [C]),
			X = C(),
			G = "TooltipProvider",
			Z = "tooltip.open",
			[Q, J] = Y(G),
			ee = (e) => {
				let {
						__scopeTooltip: t,
						delayDuration: o = 700,
						skipDelayDuration: a = 300,
						disableHoverableContent: i = !1,
						children: l,
					} = e,
					s = n.useRef(!0),
					u = n.useRef(!1),
					d = n.useRef(0)
				return (
					n.useEffect(() => {
						let e = d.current
						return () => window.clearTimeout(e)
					}, []),
					(0, r.jsx)(Q, {
						scope: t,
						isOpenDelayedRef: s,
						delayDuration: o,
						onOpen: n.useCallback(() => {
							window.clearTimeout(d.current), (s.current = !1)
						}, []),
						onClose: n.useCallback(() => {
							window.clearTimeout(d.current), (d.current = window.setTimeout(() => (s.current = !0), a))
						}, [a]),
						isPointerInTransitRef: u,
						onPointerInTransitChange: n.useCallback((e) => {
							u.current = e
						}, []),
						disableHoverableContent: i,
						children: l,
					})
				)
			}
		ee.displayName = G
		var et = "Tooltip",
			[er, en] = Y(et),
			eo = (e) => {
				let {
						__scopeTooltip: t,
						children: o,
						open: a,
						defaultOpen: i,
						onOpenChange: l,
						disableHoverableContent: s,
						delayDuration: u,
					} = e,
					d = J(et, e.__scopeTooltip),
					c = X(t),
					[f, p] = n.useState(null),
					m = (0, h.useId)(),
					v = n.useRef(0),
					g = s ?? d.disableHoverableContent,
					y = u ?? d.delayDuration,
					b = n.useRef(!1),
					[w, x] = (0, W.useControllableState)({
						prop: a,
						defaultProp: i ?? !1,
						onChange: (e) => {
							e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(Z))) : d.onClose(), l?.(e)
						},
						caller: et,
					}),
					E = n.useMemo(() => (w ? (b.current ? "delayed-open" : "instant-open") : "closed"), [w]),
					C = n.useCallback(() => {
						window.clearTimeout(v.current), (v.current = 0), (b.current = !1), x(!0)
					}, [x]),
					k = n.useCallback(() => {
						window.clearTimeout(v.current), (v.current = 0), x(!1)
					}, [x]),
					R = n.useCallback(() => {
						window.clearTimeout(v.current),
							(v.current = window.setTimeout(() => {
								;(b.current = !0), x(!0), (v.current = 0)
							}, y))
					}, [y, x])
				return (
					n.useEffect(
						() => () => {
							v.current && (window.clearTimeout(v.current), (v.current = 0))
						},
						[],
					),
					(0, r.jsx)(S, {
						...c,
						children: (0, r.jsx)(er, {
							scope: t,
							contentId: m,
							open: w,
							stateAttribute: E,
							trigger: f,
							onTriggerChange: p,
							onTriggerEnter: n.useCallback(() => {
								d.isOpenDelayedRef.current ? R() : C()
							}, [d.isOpenDelayedRef, R, C]),
							onTriggerLeave: n.useCallback(() => {
								g ? k() : (window.clearTimeout(v.current), (v.current = 0))
							}, [k, g]),
							onOpen: C,
							onClose: k,
							disableHoverableContent: g,
							children: o,
						}),
					})
				)
			}
		eo.displayName = et
		var ea = "TooltipTrigger",
			ei = n.forwardRef((e, t) => {
				let { __scopeTooltip: i, ...s } = e,
					u = en(ea, i),
					d = J(ea, i),
					c = X(i),
					f = n.useRef(null),
					p = (0, a.useComposedRefs)(t, f, u.onTriggerChange),
					m = n.useRef(!1),
					h = n.useRef(!1),
					v = n.useCallback(() => (m.current = !1), [])
				return (
					n.useEffect(() => () => document.removeEventListener("pointerup", v), [v]),
					(0, r.jsx)(P, {
						asChild: !0,
						...c,
						children: (0, r.jsx)(l.Primitive.button, {
							"aria-describedby": u.open ? u.contentId : void 0,
							"data-state": u.stateAttribute,
							...s,
							ref: p,
							onPointerMove: o(e.onPointerMove, (e) => {
								"touch" !== e.pointerType &&
									(h.current ||
										d.isPointerInTransitRef.current ||
										(u.onTriggerEnter(), (h.current = !0)))
							}),
							onPointerLeave: o(e.onPointerLeave, () => {
								u.onTriggerLeave(), (h.current = !1)
							}),
							onPointerDown: o(e.onPointerDown, () => {
								u.open && u.onClose(),
									(m.current = !0),
									document.addEventListener("pointerup", v, { once: !0 })
							}),
							onFocus: o(e.onFocus, () => {
								m.current || u.onOpen()
							}),
							onBlur: o(e.onBlur, u.onClose),
							onClick: o(e.onClick, u.onClose),
						}),
					})
				)
			})
		ei.displayName = ea
		var el = "TooltipPortal",
			[es, eu] = Y(el, { forceMount: void 0 }),
			ed = (e) => {
				let { __scopeTooltip: t, forceMount: n, children: o, container: a } = e,
					i = en(el, t)
				return (0, r.jsx)(es, {
					scope: t,
					forceMount: n,
					children: (0, r.jsx)(V, {
						present: n || i.open,
						children: (0, r.jsx)(H, { asChild: !0, container: a, children: o }),
					}),
				})
			}
		ed.displayName = el
		var ec = "TooltipContent",
			ef = n.forwardRef((e, t) => {
				let n = eu(ec, e.__scopeTooltip),
					{ forceMount: o = n.forceMount, side: a = "top", ...i } = e,
					l = en(ec, e.__scopeTooltip)
				return (0, r.jsx)(V, {
					present: o || l.open,
					children: l.disableHoverableContent
						? (0, r.jsx)(eg, { side: a, ...i, ref: t })
						: (0, r.jsx)(ep, { side: a, ...i, ref: t }),
				})
			}),
			ep = n.forwardRef((e, t) => {
				let o = en(ec, e.__scopeTooltip),
					i = J(ec, e.__scopeTooltip),
					l = n.useRef(null),
					s = (0, a.useComposedRefs)(t, l),
					[u, d] = n.useState(null),
					{ trigger: c, onClose: f } = o,
					p = l.current,
					{ onPointerInTransitChange: m } = i,
					h = n.useCallback(() => {
						d(null), m(!1)
					}, [m]),
					v = n.useCallback(
						(e, t) => {
							let r,
								n = e.currentTarget,
								o = { x: e.clientX, y: e.clientY },
								a = (function (e, t) {
									let r = Math.abs(t.top - e.y),
										n = Math.abs(t.bottom - e.y),
										o = Math.abs(t.right - e.x),
										a = Math.abs(t.left - e.x)
									switch (Math.min(r, n, o, a)) {
										case a:
											return "left"
										case o:
											return "right"
										case r:
											return "top"
										case n:
											return "bottom"
										default:
											throw Error("unreachable")
									}
								})(o, n.getBoundingClientRect())
							d(
								((r = [
									...(function (e, t, r = 5) {
										let n = []
										switch (t) {
											case "top":
												n.push({ x: e.x - r, y: e.y + r }, { x: e.x + r, y: e.y + r })
												break
											case "bottom":
												n.push({ x: e.x - r, y: e.y - r }, { x: e.x + r, y: e.y - r })
												break
											case "left":
												n.push({ x: e.x + r, y: e.y - r }, { x: e.x + r, y: e.y + r })
												break
											case "right":
												n.push({ x: e.x - r, y: e.y - r }, { x: e.x - r, y: e.y + r })
										}
										return n
									})(o, a),
									...(function (e) {
										let { top: t, right: r, bottom: n, left: o } = e
										return [
											{ x: o, y: t },
											{ x: r, y: t },
											{ x: r, y: n },
											{ x: o, y: n },
										]
									})(t.getBoundingClientRect()),
								].slice()).sort((e, t) =>
									e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : 1 * !!(e.y > t.y),
								),
								(function (e) {
									if (e.length <= 1) return e.slice()
									let t = []
									for (let r = 0; r < e.length; r++) {
										let n = e[r]
										for (; t.length >= 2; ) {
											let e = t[t.length - 1],
												r = t[t.length - 2]
											if ((e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x)) t.pop()
											else break
										}
										t.push(n)
									}
									t.pop()
									let r = []
									for (let t = e.length - 1; t >= 0; t--) {
										let n = e[t]
										for (; r.length >= 2; ) {
											let e = r[r.length - 1],
												t = r[r.length - 2]
											if ((e.x - t.x) * (n.y - t.y) >= (e.y - t.y) * (n.x - t.x)) r.pop()
											else break
										}
										r.push(n)
									}
									return (r.pop(),
									1 === t.length && 1 === r.length && t[0].x === r[0].x && t[0].y === r[0].y)
										? t
										: t.concat(r)
								})(r)),
							),
								m(!0)
						},
						[m],
					)
				return (
					n.useEffect(() => () => h(), [h]),
					n.useEffect(() => {
						if (c && p) {
							let e = (e) => v(e, p),
								t = (e) => v(e, c)
							return (
								c.addEventListener("pointerleave", e),
								p.addEventListener("pointerleave", t),
								() => {
									c.removeEventListener("pointerleave", e), p.removeEventListener("pointerleave", t)
								}
							)
						}
					}, [c, p, v, h]),
					n.useEffect(() => {
						if (u) {
							let e = (e) => {
								let t = e.target,
									r = { x: e.clientX, y: e.clientY },
									n = c?.contains(t) || p?.contains(t),
									o = !(function (e, t) {
										let { x: r, y: n } = e,
											o = !1
										for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
											let i = t[e],
												l = t[a],
												s = i.x,
												u = i.y,
												d = l.x,
												c = l.y
											u > n != c > n && r < ((d - s) * (n - u)) / (c - u) + s && (o = !o)
										}
										return o
									})(r, u)
								n ? h() : o && (h(), f())
							}
							return (
								document.addEventListener("pointermove", e),
								() => document.removeEventListener("pointermove", e)
							)
						}
					}, [c, p, u, f, h]),
					(0, r.jsx)(eg, { ...e, ref: s })
				)
			}),
			[em, eh] = Y(et, { isInside: !1 }),
			ev = (0, B.createSlottable)("TooltipContent"),
			eg = n.forwardRef((e, t) => {
				let {
						__scopeTooltip: o,
						children: a,
						"aria-label": i,
						onEscapeKeyDown: l,
						onPointerDownOutside: s,
						...u
					} = e,
					d = en(ec, o),
					c = X(o),
					{ onClose: p } = d
				return (
					n.useEffect(() => (document.addEventListener(Z, p), () => document.removeEventListener(Z, p)), [p]),
					n.useEffect(() => {
						if (d.trigger) {
							let e = (e) => {
								let t = e.target
								t?.contains(d.trigger) && p()
							}
							return (
								window.addEventListener("scroll", e, { capture: !0 }),
								() => window.removeEventListener("scroll", e, { capture: !0 })
							)
						}
					}, [d.trigger, p]),
					(0, r.jsx)(f, {
						asChild: !0,
						disableOutsidePointerEvents: !1,
						onEscapeKeyDown: l,
						onPointerDownOutside: s,
						onFocusOutside: (e) => e.preventDefault(),
						onDismiss: p,
						children: (0, r.jsxs)(N, {
							"data-state": d.stateAttribute,
							...c,
							...u,
							ref: t,
							style: {
								...u.style,
								"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
								"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
								"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
								"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
								"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)",
							},
							children: [
								(0, r.jsx)(ev, { children: a }),
								(0, r.jsx)(em, {
									scope: o,
									isInside: !0,
									children: (0, r.jsx)(K, { id: d.contentId, role: "tooltip", children: i || a }),
								}),
							],
						}),
					})
				)
			})
		ef.displayName = ec
		var ey = "TooltipArrow",
			eb = n.forwardRef((e, t) => {
				let { __scopeTooltip: n, ...o } = e,
					a = X(n)
				return eh(ey, n).isInside ? null : (0, r.jsx)(O, { ...a, ...o, ref: t })
			})
		eb.displayName = ey
		var ew = e.i(46030)
		function ex({ delayDuration: e = 0, ...t }) {
			return (0, r.jsx)(ee, { "data-slot": "tooltip-provider", delayDuration: e, ...t })
		}
		function eE({ ...e }) {
			return (0, r.jsx)(ex, { children: (0, r.jsx)(eo, { "data-slot": "tooltip", ...e }) })
		}
		function eC({ ...e }) {
			return (0, r.jsx)(ei, { "data-slot": "tooltip-trigger", ...e })
		}
		function ek({ className: e, sideOffset: t = 0, children: n, ...o }) {
			return (0, r.jsx)(ed, {
				children: (0, r.jsxs)(ef, {
					"data-slot": "tooltip-content",
					sideOffset: t,
					className: (0, ew.cn)(
						"bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-sm px-3 py-1.5 text-xs text-balance",
						e,
					),
					...o,
					children: [
						n,
						(0, r.jsx)(eb, {
							className:
								"bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]",
						}),
					],
				}),
			})
		}
		e.s(
			["Tooltip", () => eE, "TooltipContent", () => ek, "TooltipProvider", () => ex, "TooltipTrigger", () => eC],
			23706,
		)
	},
])
