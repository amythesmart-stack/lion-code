;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	15755,
	(e, t, a) => {
		var i = function () {
			function e() {
				for (var e = 0, t = {}; e < arguments.length; e++) {
					var a = arguments[e]
					for (var i in a) t[i] = a[i]
				}
				return t
			}
			function t(e) {
				return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
			}
			return (function a(i) {
				function n() {}
				function r(t, a, r) {
					if ("u" > typeof document) {
						"number" == typeof (r = e({ path: "/" }, n.defaults, r)).expires &&
							(r.expires = new Date(new Date() * 1 + 864e5 * r.expires)),
							(r.expires = r.expires ? r.expires.toUTCString() : "")
						try {
							var o = JSON.stringify(a)
							;/^[\{\[]/.test(o) && (a = o)
						} catch (e) {}
						;(a = i.write
							? i.write(a, t)
							: encodeURIComponent(String(a)).replace(
									/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
									decodeURIComponent,
								)),
							(t = encodeURIComponent(String(t))
								.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
								.replace(/[\(\)]/g, escape))
						var s = ""
						for (var l in r) r[l] && ((s += "; " + l), !0 !== r[l] && (s += "=" + r[l].split(";")[0]))
						return (document.cookie = t + "=" + a + s)
					}
				}
				function o(e, a) {
					if ("u" > typeof document) {
						for (
							var n = {}, r = document.cookie ? document.cookie.split("; ") : [], o = 0;
							o < r.length;
							o++
						) {
							var s = r[o].split("="),
								l = s.slice(1).join("=")
							a || '"' !== l.charAt(0) || (l = l.slice(1, -1))
							try {
								var u = t(s[0])
								if (((l = (i.read || i)(l, u) || t(l)), a))
									try {
										l = JSON.parse(l)
									} catch (e) {}
								if (((n[u] = l), e === u)) break
							} catch (e) {}
						}
						return e ? n[e] : n
					}
				}
				return (
					(n.set = r),
					(n.get = function (e) {
						return o(e, !1)
					}),
					(n.getJSON = function (e) {
						return o(e, !0)
					}),
					(n.remove = function (t, a) {
						r(t, "", e(a, { expires: -1 }))
					}),
					(n.defaults = {}),
					(n.withConverter = a),
					n
				)
			})(function () {})
		}
		if ("function" == typeof define && define.amd) {
			let n
			void 0 !== (n = i(e.r, a, t)) && e.v(n)
		}
		t.exports = i()
	},
	59052,
	92235,
	10857,
	(e) => {
		"use strict"
		var t,
			a,
			i,
			n,
			r,
			o,
			s,
			l,
			u,
			d,
			c,
			m,
			p,
			g,
			h = e.i(15755),
			f = e.i(10008),
			v = function (e) {
				var t = e.condition,
					a = e.wrapper,
					i = e.children
				return t ? a(i) : i
			}
		function b() {
			return (b = Object.assign.bind()).apply(this, arguments)
		}
		function k(e, t) {
			return (k = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (e, t) {
						return (e.__proto__ = t), e
					})(e, t)
		}
		var y = "bottom"
		;((t = g || (g = {})).STRICT = "strict"), (t.LAX = "lax"), (t.NONE = "none")
		var x = "byCookieValue",
			z = "CookieConsent",
			w = ["children"],
			_ = {
				disableStyles: !1,
				hideOnAccept: !0,
				hideOnDecline: !0,
				location: y,
				visible: x,
				onAccept: function (e) {},
				onDecline: function () {},
				cookieName: z,
				cookieValue: "true",
				declineCookieValue: "false",
				setDeclineCookie: !0,
				buttonText: "I understand",
				declineButtonText: "I decline",
				debug: !1,
				expires: 365,
				containerClasses: "CookieConsent",
				contentClasses: "",
				buttonClasses: "",
				buttonWrapperClasses: "",
				declineButtonClasses: "",
				buttonId: "rcc-confirm-button",
				declineButtonId: "rcc-decline-button",
				extraCookieOptions: {},
				disableButtonStyles: !1,
				enableDeclineButton: !1,
				flipButtons: !1,
				sameSite: g.LAX,
				ButtonComponent: function (e) {
					var t = e.children,
						a = (function (e, t) {
							if (null == e) return {}
							var a,
								i,
								n = {},
								r = Object.keys(e)
							for (i = 0; i < r.length; i++) (a = r[i]), t.indexOf(a) >= 0 || (n[a] = e[a])
							return n
						})(e, w)
					return f.default.createElement("button", Object.assign({}, a), t)
				},
				overlay: !1,
				overlayClasses: "",
				onOverlayClick: function () {},
				acceptOnOverlayClick: !1,
				ariaAcceptLabel: "Accept cookies",
				ariaDeclineLabel: "Decline cookies",
				acceptOnScroll: !1,
				acceptOnScrollPercentage: 25,
				customContentAttributes: {},
				customContainerAttributes: {},
				customButtonProps: {},
				customDeclineButtonProps: {},
				customButtonWrapperAttributes: {},
				style: {},
				buttonStyle: {},
				declineButtonStyle: {},
				contentStyle: {},
				overlayStyle: {},
			},
			$ = {
				visible: !1,
				style: {
					alignItems: "baseline",
					background: "#353535",
					color: "white",
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-between",
					left: "0",
					position: "fixed",
					width: "100%",
					zIndex: "999",
				},
				buttonStyle: {
					background: "#ffd42d",
					border: "0",
					borderRadius: "0px",
					boxShadow: "none",
					color: "black",
					cursor: "pointer",
					flex: "0 0 auto",
					padding: "5px 10px",
					margin: "15px",
				},
				declineButtonStyle: {
					background: "#c12a2a",
					border: "0",
					borderRadius: "0px",
					boxShadow: "none",
					color: "#e5e5e5",
					cursor: "pointer",
					flex: "0 0 auto",
					padding: "5px 10px",
					margin: "15px",
				},
				contentStyle: { flex: "1 0 300px", margin: "15px" },
				overlayStyle: {
					position: "fixed",
					left: 0,
					top: 0,
					width: "100%",
					height: "100%",
					zIndex: "999",
					backgroundColor: "rgba(0,0,0,0.3)",
				},
			},
			j = function (e) {
				void 0 === e && (e = z)
				var t = h.default.get(e)
				return void 0 === t ? h.default.get(I(e)) : t
			},
			I = function (e) {
				return e + "-legacy"
			},
			S = (function (e) {
				function t() {
					var t
					return (
						(t = e.apply(this, arguments) || this),
						(t.state = $),
						(t.handleScroll = function () {
							var e = b({}, _, t.props).acceptOnScrollPercentage,
								a = document.documentElement,
								i = document.body,
								n = "scrollTop",
								r = "scrollHeight"
							;((a[n] || i[n]) / ((a[r] || i[r]) - a.clientHeight)) * 100 > e && t.accept(!0)
						}),
						(t.removeScrollListener = function () {
							t.props.acceptOnScroll && window.removeEventListener("scroll", t.handleScroll)
						}),
						t
					)
				}
				;(t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), k(t, e)
				var a = t.prototype
				return (
					(a.componentDidMount = function () {
						var e = this.props.debug
						;(void 0 === this.getCookieValue() || e) &&
							(this.setState({ visible: !0 }),
							this.props.acceptOnScroll &&
								window.addEventListener("scroll", this.handleScroll, { passive: !0 }))
					}),
					(a.componentWillUnmount = function () {
						this.removeScrollListener()
					}),
					(a.accept = function (e) {
						void 0 === e && (e = !1)
						var t,
							a = b({}, _, this.props),
							i = a.cookieName,
							n = a.cookieValue,
							r = a.hideOnAccept,
							o = a.onAccept
						this.setCookie(i, n),
							o(null != (t = e) && t),
							r && (this.setState({ visible: !1 }), this.removeScrollListener())
					}),
					(a.overlayClick = function () {
						var e = b({}, _, this.props),
							t = e.acceptOnOverlayClick,
							a = e.onOverlayClick
						t && this.accept(), a()
					}),
					(a.decline = function () {
						var e = b({}, _, this.props),
							t = e.cookieName,
							a = e.declineCookieValue,
							i = e.hideOnDecline,
							n = e.onDecline
						e.setDeclineCookie && this.setCookie(t, a), n(), i && this.setState({ visible: !1 })
					}),
					(a.setCookie = function (e, t) {
						var a = this.props,
							i = a.extraCookieOptions,
							n = a.expires,
							r = a.sameSite,
							o = this.props.cookieSecurity
						void 0 === o && (o = !window.location || "https:" === window.location.protocol)
						var s = b({ expires: n }, i, { sameSite: r, secure: o })
						r === g.NONE && h.default.set(I(e), t, s), h.default.set(e, t, s)
					}),
					(a.getCookieValue = function () {
						return j(this.props.cookieName)
					}),
					(a.render = function () {
						var e = this
						switch (this.props.visible) {
							case "hidden":
								return null
							case x:
								if (!this.state.visible) return null
						}
						var t = this.props,
							a = t.location,
							i = t.style,
							n = t.buttonStyle,
							r = t.declineButtonStyle,
							o = t.contentStyle,
							s = t.disableStyles,
							l = t.buttonText,
							u = t.declineButtonText,
							d = t.containerClasses,
							c = t.contentClasses,
							m = t.buttonClasses,
							p = t.buttonWrapperClasses,
							g = t.declineButtonClasses,
							h = t.buttonId,
							k = t.declineButtonId,
							z = t.disableButtonStyles,
							w = t.enableDeclineButton,
							_ = t.flipButtons,
							$ = t.ButtonComponent,
							j = t.overlay,
							I = t.overlayClasses,
							S = t.overlayStyle,
							C = t.ariaAcceptLabel,
							N = t.ariaDeclineLabel,
							O = t.customContainerAttributes,
							E = t.customContentAttributes,
							P = t.customButtonProps,
							U = t.customDeclineButtonProps,
							T = t.customButtonWrapperAttributes,
							A = {},
							D = {},
							Z = {},
							R = {},
							L = {}
						switch (
							(s
								? ((A = Object.assign({}, i)),
									(D = Object.assign({}, n)),
									(Z = Object.assign({}, r)),
									(R = Object.assign({}, o)),
									(L = Object.assign({}, S)))
								: ((A = Object.assign({}, b({}, this.state.style, i))),
									(R = Object.assign({}, b({}, this.state.contentStyle, o))),
									(L = Object.assign({}, b({}, this.state.overlayStyle, S))),
									z
										? ((D = Object.assign({}, n)), (Z = Object.assign({}, r)))
										: ((D = Object.assign({}, b({}, this.state.buttonStyle, n))),
											(Z = Object.assign({}, b({}, this.state.declineButtonStyle, r))))),
							a)
						) {
							case "top":
								A.top = "0"
								break
							case y:
								A.bottom = "0"
						}
						var M = []
						return (
							w &&
								M.push(
									f.default.createElement(
										$,
										Object.assign(
											{
												key: "declineButton",
												style: Z,
												className: g,
												id: k,
												"aria-label": N,
												onClick: function () {
													e.decline()
												},
											},
											U,
										),
										u,
									),
								),
							M.push(
								f.default.createElement(
									$,
									Object.assign(
										{
											key: "acceptButton",
											style: D,
											className: m,
											id: h,
											"aria-label": C,
											onClick: function () {
												e.accept()
											},
										},
										P,
									),
									l,
								),
							),
							_ && M.reverse(),
							f.default.createElement(
								v,
								{
									condition: j,
									wrapper: function (t) {
										return f.default.createElement(
											"div",
											{
												style: L,
												className: I,
												onClick: function () {
													e.overlayClick()
												},
											},
											t,
										)
									},
								},
								f.default.createElement(
									"div",
									Object.assign({ className: "" + d, style: A }, O),
									f.default.createElement(
										"div",
										Object.assign({ style: R, className: c }, E),
										this.props.children,
									),
									f.default.createElement(
										"div",
										Object.assign({ className: "" + p }, T),
										M.map(function (e) {
											return e
										}),
									),
								),
							)
						)
					}),
					t
				)
			})(f.Component)
		;(S.defaultProps = _), e.s(["default", 0, S, "getCookieConsentValue", () => j], 92235)
		var C = e.i(32356)
		let N = Object.freeze({ status: "aborted" })
		function O(e, t, a) {
			function i(a, i) {
				var n
				for (let r in (Object.defineProperty(a, "_zod", { value: a._zod ?? {}, enumerable: !1 }),
				(n = a._zod).traits ?? (n.traits = new Set()),
				a._zod.traits.add(e),
				t(a, i),
				o.prototype))
					r in a || Object.defineProperty(a, r, { value: o.prototype[r].bind(a) })
				;(a._zod.constr = o), (a._zod.def = i)
			}
			let n = a?.Parent ?? Object
			class r extends n {}
			function o(e) {
				var t
				let n = a?.Parent ? new r() : this
				for (let a of (i(n, e), (t = n._zod).deferred ?? (t.deferred = []), n._zod.deferred)) a()
				return n
			}
			return (
				Object.defineProperty(r, "name", { value: e }),
				Object.defineProperty(o, "init", { value: i }),
				Object.defineProperty(o, Symbol.hasInstance, {
					value: (t) => (!!a?.Parent && t instanceof a.Parent) || t?._zod?.traits?.has(e),
				}),
				Object.defineProperty(o, "name", { value: e }),
				o
			)
		}
		let E = Symbol("zod_brand")
		class P extends Error {
			constructor() {
				super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")
			}
		}
		let U = {}
		function T(e) {
			return e && Object.assign(U, e), U
		}
		function A(e) {
			return e
		}
		function D(e) {
			return e
		}
		function Z(e) {}
		function R(e) {
			throw Error()
		}
		function L(e) {}
		function M(e) {
			let t = Object.values(e).filter((e) => "number" == typeof e)
			return Object.entries(e)
				.filter(([e, a]) => -1 === t.indexOf(+e))
				.map(([e, t]) => t)
		}
		function q(e, t = "|") {
			return e.map((e) => ec(e)).join(t)
		}
		function K(e, t) {
			return "bigint" == typeof t ? t.toString() : t
		}
		function F(e) {
			return {
				get value() {
					{
						let t = e()
						return Object.defineProperty(this, "value", { value: t }), t
					}
				},
			}
		}
		function B(e) {
			return null == e
		}
		function G(e) {
			let t = +!!e.startsWith("^"),
				a = e.endsWith("$") ? e.length - 1 : e.length
			return e.slice(t, a)
		}
		function V(e, t) {
			let a = (e.toString().split(".")[1] || "").length,
				i = (t.toString().split(".")[1] || "").length,
				n = a > i ? a : i
			return (
				(Number.parseInt(e.toFixed(n).replace(".", "")) % Number.parseInt(t.toFixed(n).replace(".", ""))) /
				10 ** n
			)
		}
		function W(e, t, a) {
			Object.defineProperty(e, t, {
				get() {
					{
						let i = a()
						return (e[t] = i), i
					}
				},
				set(a) {
					Object.defineProperty(e, t, { value: a })
				},
				configurable: !0,
			})
		}
		function J(e, t, a) {
			Object.defineProperty(e, t, { value: a, writable: !0, enumerable: !0, configurable: !0 })
		}
		function H(e, t) {
			return t ? t.reduce((e, t) => e?.[t], e) : e
		}
		function X(e) {
			let t = Object.keys(e)
			return Promise.all(t.map((t) => e[t])).then((e) => {
				let a = {}
				for (let i = 0; i < t.length; i++) a[t[i]] = e[i]
				return a
			})
		}
		function Q(e = 10) {
			let t = "abcdefghijklmnopqrstuvwxyz",
				a = ""
			for (let i = 0; i < e; i++) a += t[Math.floor(Math.random() * t.length)]
			return a
		}
		function Y(e) {
			return JSON.stringify(e)
		}
		e.s(
			[
				"$ZodAsyncError",
				() => P,
				"$brand",
				0,
				E,
				"$constructor",
				() => O,
				"NEVER",
				0,
				N,
				"config",
				() => T,
				"globalConfig",
				0,
				U,
			],
			72463,
		)
		let ee = Error.captureStackTrace ? Error.captureStackTrace : (...e) => {}
		function et(e) {
			return "object" == typeof e && null !== e && !Array.isArray(e)
		}
		let ea = F(() => {
			if ("u" > typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1
			try {
				return Function(""), !0
			} catch (e) {
				return !1
			}
		})
		function ei(e) {
			if (!1 === et(e)) return !1
			let t = e.constructor
			if (void 0 === t) return !0
			let a = t.prototype
			return !1 !== et(a) && !1 !== Object.prototype.hasOwnProperty.call(a, "isPrototypeOf")
		}
		function en(e) {
			let t = 0
			for (let a in e) Object.prototype.hasOwnProperty.call(e, a) && t++
			return t
		}
		let er = new Set(["string", "number", "symbol"]),
			eo = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"])
		function es(e) {
			return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
		}
		function el(e, t, a) {
			let i = new e._zod.constr(t ?? e._zod.def)
			return (!t || a?.parent) && (i._zod.parent = e), i
		}
		function eu(e) {
			if (!e) return {}
			if ("string" == typeof e) return { error: () => e }
			if (e?.message !== void 0) {
				if (e?.error !== void 0) throw Error("Cannot specify both `message` and `error` params")
				e.error = e.message
			}
			return (delete e.message, "string" == typeof e.error) ? { ...e, error: () => e.error } : e
		}
		function ed(e) {
			let t
			return new Proxy(
				{},
				{
					get: (a, i, n) => (t ?? (t = e()), Reflect.get(t, i, n)),
					set: (a, i, n, r) => (t ?? (t = e()), Reflect.set(t, i, n, r)),
					has: (a, i) => (t ?? (t = e()), Reflect.has(t, i)),
					deleteProperty: (a, i) => (t ?? (t = e()), Reflect.deleteProperty(t, i)),
					ownKeys: (a) => (t ?? (t = e()), Reflect.ownKeys(t)),
					getOwnPropertyDescriptor: (a, i) => (t ?? (t = e()), Reflect.getOwnPropertyDescriptor(t, i)),
					defineProperty: (a, i, n) => (t ?? (t = e()), Reflect.defineProperty(t, i, n)),
				},
			)
		}
		function ec(e) {
			return "bigint" == typeof e ? e.toString() + "n" : "string" == typeof e ? `"${e}"` : `${e}`
		}
		function em(e) {
			return Object.keys(e).filter((t) => "optional" === e[t]._zod.optin && "optional" === e[t]._zod.optout)
		}
		let ep = {
				safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
				int32: [-0x80000000, 0x7fffffff],
				uint32: [0, 0xffffffff],
				float32: [-34028234663852886e22, 34028234663852886e22],
				float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
			},
			eg = {
				int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
				uint64: [BigInt(0), BigInt("18446744073709551615")],
			}
		function eh(e, t) {
			let a = {},
				i = e._zod.def
			for (let e in t) {
				if (!(e in i.shape)) throw Error(`Unrecognized key: "${e}"`)
				t[e] && (a[e] = i.shape[e])
			}
			return el(e, { ...e._zod.def, shape: a, checks: [] })
		}
		function ef(e, t) {
			let a = { ...e._zod.def.shape },
				i = e._zod.def
			for (let e in t) {
				if (!(e in i.shape)) throw Error(`Unrecognized key: "${e}"`)
				t[e] && delete a[e]
			}
			return el(e, { ...e._zod.def, shape: a, checks: [] })
		}
		function ev(e, t) {
			if (!ei(t)) throw Error("Invalid input to extend: expected a plain object")
			let a = {
				...e._zod.def,
				get shape() {
					let a = { ...e._zod.def.shape, ...t }
					return J(this, "shape", a), a
				},
				checks: [],
			}
			return el(e, a)
		}
		function eb(e, t) {
			return el(e, {
				...e._zod.def,
				get shape() {
					let a = { ...e._zod.def.shape, ...t._zod.def.shape }
					return J(this, "shape", a), a
				},
				catchall: t._zod.def.catchall,
				checks: [],
			})
		}
		function ek(e, t, a) {
			let i = t._zod.def.shape,
				n = { ...i }
			if (a)
				for (let t in a) {
					if (!(t in i)) throw Error(`Unrecognized key: "${t}"`)
					a[t] && (n[t] = e ? new e({ type: "optional", innerType: i[t] }) : i[t])
				}
			else for (let t in i) n[t] = e ? new e({ type: "optional", innerType: i[t] }) : i[t]
			return el(t, { ...t._zod.def, shape: n, checks: [] })
		}
		function ey(e, t, a) {
			let i = t._zod.def.shape,
				n = { ...i }
			if (a)
				for (let t in a) {
					if (!(t in n)) throw Error(`Unrecognized key: "${t}"`)
					a[t] && (n[t] = new e({ type: "nonoptional", innerType: i[t] }))
				}
			else for (let t in i) n[t] = new e({ type: "nonoptional", innerType: i[t] })
			return el(t, { ...t._zod.def, shape: n, checks: [] })
		}
		function ex(e, t = 0) {
			for (let a = t; a < e.issues.length; a++) if (e.issues[a]?.continue !== !0) return !0
			return !1
		}
		function ez(e, t) {
			return t.map((t) => (t.path ?? (t.path = []), t.path.unshift(e), t))
		}
		function ew(e) {
			return "string" == typeof e ? e : e?.message
		}
		function e_(e, t, a) {
			let i = { ...e, path: e.path ?? [] }
			return (
				e.message ||
					(i.message =
						ew(e.inst?._zod.def?.error?.(e)) ??
						ew(t?.error?.(e)) ??
						ew(a.customError?.(e)) ??
						ew(a.localeError?.(e)) ??
						"Invalid input"),
				delete i.inst,
				delete i.continue,
				t?.reportInput || delete i.input,
				i
			)
		}
		function e$(e) {
			return e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof File ? "file" : "unknown"
		}
		function ej(e) {
			return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown"
		}
		function eI(...e) {
			let [t, a, i] = e
			return "string" == typeof t ? { message: t, code: "custom", input: a, inst: i } : { ...t }
		}
		function eS(e) {
			return Object.entries(e)
				.filter(([e, t]) => Number.isNaN(Number.parseInt(e, 10)))
				.map((e) => e[1])
		}
		class eC {
			constructor(...e) {}
		}
		function eN() {
			let e, t
			return {
				localeError:
					((e = {
						string: { unit: "characters", verb: "to have" },
						file: { unit: "bytes", verb: "to have" },
						array: { unit: "items", verb: "to have" },
						set: { unit: "items", verb: "to have" },
					}),
					(t = {
						regex: "input",
						email: "email address",
						url: "URL",
						emoji: "emoji",
						uuid: "UUID",
						uuidv4: "UUIDv4",
						uuidv6: "UUIDv6",
						nanoid: "nanoid",
						guid: "GUID",
						cuid: "cuid",
						cuid2: "cuid2",
						ulid: "ULID",
						xid: "XID",
						ksuid: "KSUID",
						datetime: "ISO datetime",
						date: "ISO date",
						time: "ISO time",
						duration: "ISO duration",
						ipv4: "IPv4 address",
						ipv6: "IPv6 address",
						cidrv4: "IPv4 range",
						cidrv6: "IPv6 range",
						base64: "base64-encoded string",
						base64url: "base64url-encoded string",
						json_string: "JSON string",
						e164: "E.164 number",
						jwt: "JWT",
						template_literal: "input",
					}),
					(a) => {
						switch (a.code) {
							case "invalid_type":
								return `Invalid input: expected ${a.expected}, received ${((e) => {
									let t = typeof e
									switch (t) {
										case "number":
											return Number.isNaN(e) ? "NaN" : "number"
										case "object":
											if (Array.isArray(e)) return "array"
											if (null === e) return "null"
											if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
												return e.constructor.name
									}
									return t
								})(a.input)}`
							case "invalid_value":
								if (1 === a.values.length) return `Invalid input: expected ${ec(a.values[0])}`
								return `Invalid option: expected one of ${q(a.values, "|")}`
							case "too_big": {
								let t = a.inclusive ? "<=" : "<",
									i = e[a.origin] ?? null
								if (i)
									return `Too big: expected ${a.origin ?? "value"} to have ${t}${a.maximum.toString()} ${i.unit ?? "elements"}`
								return `Too big: expected ${a.origin ?? "value"} to be ${t}${a.maximum.toString()}`
							}
							case "too_small": {
								let t = a.inclusive ? ">=" : ">",
									i = e[a.origin] ?? null
								if (i)
									return `Too small: expected ${a.origin} to have ${t}${a.minimum.toString()} ${i.unit}`
								return `Too small: expected ${a.origin} to be ${t}${a.minimum.toString()}`
							}
							case "invalid_format":
								if ("starts_with" === a.format) return `Invalid string: must start with "${a.prefix}"`
								if ("ends_with" === a.format) return `Invalid string: must end with "${a.suffix}"`
								if ("includes" === a.format) return `Invalid string: must include "${a.includes}"`
								if ("regex" === a.format) return `Invalid string: must match pattern ${a.pattern}`
								return `Invalid ${t[a.format] ?? a.format}`
							case "not_multiple_of":
								return `Invalid number: must be a multiple of ${a.divisor}`
							case "unrecognized_keys":
								return `Unrecognized key${a.keys.length > 1 ? "s" : ""}: ${q(a.keys, ", ")}`
							case "invalid_key":
								return `Invalid key in ${a.origin}`
							case "invalid_union":
							default:
								return "Invalid input"
							case "invalid_element":
								return `Invalid value in ${a.origin}`
						}
					}),
			}
		}
		e.s(
			[
				"BIGINT_FORMAT_RANGES",
				0,
				eg,
				"Class",
				() => eC,
				"NUMBER_FORMAT_RANGES",
				0,
				ep,
				"aborted",
				() => ex,
				"allowsEval",
				0,
				ea,
				"assert",
				() => L,
				"assertEqual",
				() => A,
				"assertIs",
				() => Z,
				"assertNever",
				() => R,
				"assertNotEqual",
				() => D,
				"assignProp",
				() => J,
				"cached",
				() => F,
				"captureStackTrace",
				0,
				ee,
				"cleanEnum",
				() => eS,
				"cleanRegex",
				() => G,
				"clone",
				() => el,
				"createTransparentProxy",
				() => ed,
				"defineLazy",
				() => W,
				"esc",
				() => Y,
				"escapeRegex",
				() => es,
				"extend",
				() => ev,
				"finalizeIssue",
				() => e_,
				"floatSafeRemainder",
				() => V,
				"getElementAtPath",
				() => H,
				"getEnumValues",
				() => M,
				"getLengthableOrigin",
				() => ej,
				"getParsedType",
				0,
				(e) => {
					let t = typeof e
					switch (t) {
						case "undefined":
							return "undefined"
						case "string":
							return "string"
						case "number":
							return Number.isNaN(e) ? "nan" : "number"
						case "boolean":
							return "boolean"
						case "function":
							return "function"
						case "bigint":
							return "bigint"
						case "symbol":
							return "symbol"
						case "object":
							if (Array.isArray(e)) return "array"
							if (null === e) return "null"
							if (e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch)
								return "promise"
							if ("u" > typeof Map && e instanceof Map) return "map"
							if ("u" > typeof Set && e instanceof Set) return "set"
							if ("u" > typeof Date && e instanceof Date) return "date"
							if ("u" > typeof File && e instanceof File) return "file"
							return "object"
						default:
							throw Error(`Unknown data type: ${t}`)
					}
				},
				"getSizableOrigin",
				() => e$,
				"isObject",
				() => et,
				"isPlainObject",
				() => ei,
				"issue",
				() => eI,
				"joinValues",
				() => q,
				"jsonStringifyReplacer",
				() => K,
				"merge",
				() => eb,
				"normalizeParams",
				() => eu,
				"nullish",
				() => B,
				"numKeys",
				() => en,
				"omit",
				() => ef,
				"optionalKeys",
				() => em,
				"partial",
				() => ek,
				"pick",
				() => eh,
				"prefixIssues",
				() => ez,
				"primitiveTypes",
				0,
				eo,
				"promiseAllObject",
				() => X,
				"propertyKeyTypes",
				0,
				er,
				"randomString",
				() => Q,
				"required",
				() => ey,
				"stringifyPrimitive",
				() => ec,
				"unwrapMessage",
				() => ew,
			],
			76940,
		),
			T(eN()),
			e.s([], 57975),
			e.i(57975),
			e.s([], 47022),
			e.i(47022),
			e.i(72463)
		let eO = (e, t) => {
				;(e.name = "$ZodError"),
					Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
					Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
					Object.defineProperty(e, "message", { get: () => JSON.stringify(t, K, 2), enumerable: !0 }),
					Object.defineProperty(e, "toString", { value: () => e.message, enumerable: !1 })
			},
			eE = O("$ZodError", eO),
			eP = O("$ZodError", eO, { Parent: Error })
		function eU(e, t = (e) => e.message) {
			let a = {},
				i = []
			for (let n of e.issues)
				n.path.length > 0 ? ((a[n.path[0]] = a[n.path[0]] || []), a[n.path[0]].push(t(n))) : i.push(t(n))
			return { formErrors: i, fieldErrors: a }
		}
		function eT(e, t) {
			let a =
					t ||
					function (e) {
						return e.message
					},
				i = { _errors: [] },
				n = (e) => {
					for (let t of e.issues)
						if ("invalid_union" === t.code && t.errors.length) t.errors.map((e) => n({ issues: e }))
						else if ("invalid_key" === t.code) n({ issues: t.issues })
						else if ("invalid_element" === t.code) n({ issues: t.issues })
						else if (0 === t.path.length) i._errors.push(a(t))
						else {
							let e = i,
								n = 0
							for (; n < t.path.length; ) {
								let i = t.path[n]
								n === t.path.length - 1
									? ((e[i] = e[i] || { _errors: [] }), e[i]._errors.push(a(t)))
									: (e[i] = e[i] || { _errors: [] }),
									(e = e[i]),
									n++
							}
						}
				}
			return n(e), i
		}
		function eA(e, t) {
			let a =
					t ||
					function (e) {
						return e.message
					},
				i = { errors: [] },
				n = (e, t = []) => {
					var r, o
					for (let s of e.issues)
						if ("invalid_union" === s.code && s.errors.length) s.errors.map((e) => n({ issues: e }, s.path))
						else if ("invalid_key" === s.code) n({ issues: s.issues }, s.path)
						else if ("invalid_element" === s.code) n({ issues: s.issues }, s.path)
						else {
							let e = [...t, ...s.path]
							if (0 === e.length) {
								i.errors.push(a(s))
								continue
							}
							let n = i,
								l = 0
							for (; l < e.length; ) {
								let t = e[l],
									i = l === e.length - 1
								"string" == typeof t
									? (n.properties ?? (n.properties = {}),
										(r = n.properties)[t] ?? (r[t] = { errors: [] }),
										(n = n.properties[t]))
									: (n.items ?? (n.items = []),
										(o = n.items)[t] ?? (o[t] = { errors: [] }),
										(n = n.items[t])),
									i && n.errors.push(a(s)),
									l++
							}
						}
				}
			return n(e), i
		}
		function eD(e) {
			let t = []
			for (let a of e)
				"number" == typeof a
					? t.push(`[${a}]`)
					: "symbol" == typeof a
						? t.push(`[${JSON.stringify(String(a))}]`)
						: /[^\w$]/.test(a)
							? t.push(`[${JSON.stringify(a)}]`)
							: (t.length && t.push("."), t.push(a))
			return t.join("")
		}
		function eZ(e) {
			let t = []
			for (let a of [...e.issues].sort((e, t) => e.path.length - t.path.length))
				t.push(`✖ ${a.message}`), a.path?.length && t.push(`  → at ${eD(a.path)}`)
			return t.join("\n")
		}
		e.s(
			[
				"$ZodError",
				0,
				eE,
				"$ZodRealError",
				0,
				eP,
				"flattenError",
				() => eU,
				"formatError",
				() => eT,
				"prettifyError",
				() => eZ,
				"toDotPath",
				() => eD,
				"treeifyError",
				() => eA,
			],
			83411,
		)
		let eR = (e) => (t, a, i, n) => {
				let r = i ? Object.assign(i, { async: !1 }) : { async: !1 },
					o = t._zod.run({ value: a, issues: [] }, r)
				if (o instanceof Promise) throw new P()
				if (o.issues.length) {
					let t = new (n?.Err ?? e)(o.issues.map((e) => e_(e, r, T())))
					throw (ee(t, n?.callee), t)
				}
				return o.value
			},
			eL = eR(eP),
			eM = (e) => async (t, a, i, n) => {
				let r = i ? Object.assign(i, { async: !0 }) : { async: !0 },
					o = t._zod.run({ value: a, issues: [] }, r)
				if ((o instanceof Promise && (o = await o), o.issues.length)) {
					let t = new (n?.Err ?? e)(o.issues.map((e) => e_(e, r, T())))
					throw (ee(t, n?.callee), t)
				}
				return o.value
			},
			eq = eM(eP),
			eK = (e) => (t, a, i) => {
				let n = i ? { ...i, async: !1 } : { async: !1 },
					r = t._zod.run({ value: a, issues: [] }, n)
				if (r instanceof Promise) throw new P()
				return r.issues.length
					? { success: !1, error: new (e ?? eE)(r.issues.map((e) => e_(e, n, T()))) }
					: { success: !0, data: r.value }
			},
			eF = eK(eP),
			eB = (e) => async (t, a, i) => {
				let n = i ? Object.assign(i, { async: !0 }) : { async: !0 },
					r = t._zod.run({ value: a, issues: [] }, n)
				return (
					r instanceof Promise && (r = await r),
					r.issues.length
						? { success: !1, error: new e(r.issues.map((e) => e_(e, n, T()))) }
						: { success: !0, data: r.value }
				)
			},
			eG = eB(eP)
		e.s(
			[
				"_parse",
				0,
				eR,
				"_parseAsync",
				0,
				eM,
				"_safeParse",
				0,
				eK,
				"_safeParseAsync",
				0,
				eB,
				"parse",
				0,
				eL,
				"parseAsync",
				0,
				eq,
				"safeParse",
				0,
				eF,
				"safeParseAsync",
				0,
				eG,
			],
			57195,
		),
			e.i(57195),
			e.i(83411)
		let eV = /^[cC][^\s-]{8,}$/,
			eW = /^[0-9a-z]+$/,
			eJ = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
			eH = /^[0-9a-vA-V]{20}$/,
			eX = /^[A-Za-z0-9]{27}$/,
			eQ = /^[a-zA-Z0-9_-]{21}$/,
			eY = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
			e0 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
			e1 = (e) =>
				e
					? RegExp(
							`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
						)
					: /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/,
			e4 = e1(4),
			e6 = e1(6),
			e2 = e1(7),
			e9 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
			e3 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$"
		function e5() {
			return RegExp(e3, "u")
		}
		let e8 =
				/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
			e7 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,
			te =
				/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
			tt =
				/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
			ta = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
			ti = /^[A-Za-z0-9_-]*$/,
			tn = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/,
			tr = /^\+(?:[0-9]){6,14}[0-9]$/,
			to =
				"(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
			ts = RegExp(`^${to}$`)
		function tl(e) {
			let t = "(?:[01]\\d|2[0-3]):[0-5]\\d"
			return "number" == typeof e.precision
				? -1 === e.precision
					? `${t}`
					: 0 === e.precision
						? `${t}:[0-5]\\d`
						: `${t}:[0-5]\\d\\.\\d{${e.precision}}`
				: `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`
		}
		function tu(e) {
			return RegExp(`^${tl(e)}$`)
		}
		function td(e) {
			let t = tl({ precision: e.precision }),
				a = ["Z"]
			e.local && a.push(""), e.offset && a.push("([+-]\\d{2}:\\d{2})")
			let i = `${t}(?:${a.join("|")})`
			return RegExp(`^${to}T(?:${i})$`)
		}
		let tc = (e) => {
				let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*"
				return RegExp(`^${t}$`)
			},
			tm = /^\d+n?$/,
			tp = /^\d+$/,
			tg = /^-?\d+(?:\.\d+)?/i,
			th = /true|false/i,
			tf = /null/i,
			tv = /undefined/i,
			tb = /^[^A-Z]*$/,
			tk = /^[^a-z]*$/
		e.s(
			[
				"_emoji",
				0,
				e3,
				"base64",
				0,
				ta,
				"base64url",
				0,
				ti,
				"bigint",
				0,
				tm,
				"boolean",
				0,
				th,
				"browserEmail",
				0,
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
				"cidrv4",
				0,
				te,
				"cidrv6",
				0,
				tt,
				"cuid",
				0,
				eV,
				"cuid2",
				0,
				eW,
				"date",
				0,
				ts,
				"datetime",
				() => td,
				"domain",
				0,
				/^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
				"duration",
				0,
				eY,
				"e164",
				0,
				tr,
				"email",
				0,
				e9,
				"emoji",
				() => e5,
				"extendedDuration",
				0,
				/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
				"guid",
				0,
				e0,
				"hostname",
				0,
				tn,
				"html5Email",
				0,
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
				"integer",
				0,
				tp,
				"ipv4",
				0,
				e8,
				"ipv6",
				0,
				e7,
				"ksuid",
				0,
				eX,
				"lowercase",
				0,
				tb,
				"nanoid",
				0,
				eQ,
				"null",
				() => tf,
				"number",
				0,
				tg,
				"rfc5322Email",
				0,
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				"string",
				0,
				tc,
				"time",
				() => tu,
				"ulid",
				0,
				eJ,
				"undefined",
				() => tv,
				"unicodeEmail",
				0,
				/^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
				"uppercase",
				0,
				tk,
				"uuid",
				0,
				e1,
				"uuid4",
				0,
				e4,
				"uuid6",
				0,
				e6,
				"uuid7",
				0,
				e2,
				"xid",
				0,
				eH,
			],
			19097,
		)
		let ty = O("$ZodCheck", (e, t) => {
				var a
				e._zod ?? (e._zod = {}), (e._zod.def = t), (a = e._zod).onattach ?? (a.onattach = [])
			}),
			tx = { number: "number", bigint: "bigint", object: "date" },
			tz = O("$ZodCheckLessThan", (e, t) => {
				ty.init(e, t)
				let a = tx[typeof t.value]
				e._zod.onattach.push((e) => {
					let a = e._zod.bag,
						i = (t.inclusive ? a.maximum : a.exclusiveMaximum) ?? 1 / 0
					t.value < i && (t.inclusive ? (a.maximum = t.value) : (a.exclusiveMaximum = t.value))
				}),
					(e._zod.check = (i) => {
						;(t.inclusive ? i.value <= t.value : i.value < t.value) ||
							i.issues.push({
								origin: a,
								code: "too_big",
								maximum: t.value,
								input: i.value,
								inclusive: t.inclusive,
								inst: e,
								continue: !t.abort,
							})
					})
			}),
			tw = O("$ZodCheckGreaterThan", (e, t) => {
				ty.init(e, t)
				let a = tx[typeof t.value]
				e._zod.onattach.push((e) => {
					let a = e._zod.bag,
						i = (t.inclusive ? a.minimum : a.exclusiveMinimum) ?? -1 / 0
					t.value > i && (t.inclusive ? (a.minimum = t.value) : (a.exclusiveMinimum = t.value))
				}),
					(e._zod.check = (i) => {
						;(t.inclusive ? i.value >= t.value : i.value > t.value) ||
							i.issues.push({
								origin: a,
								code: "too_small",
								minimum: t.value,
								input: i.value,
								inclusive: t.inclusive,
								inst: e,
								continue: !t.abort,
							})
					})
			}),
			t_ = O("$ZodCheckMultipleOf", (e, t) => {
				ty.init(e, t),
					e._zod.onattach.push((e) => {
						var a
						;(a = e._zod.bag).multipleOf ?? (a.multipleOf = t.value)
					}),
					(e._zod.check = (a) => {
						if (typeof a.value != typeof t.value)
							throw Error("Cannot mix number and bigint in multiple_of check.")
						;("bigint" == typeof a.value ? a.value % t.value === BigInt(0) : 0 === V(a.value, t.value)) ||
							a.issues.push({
								origin: typeof a.value,
								code: "not_multiple_of",
								divisor: t.value,
								input: a.value,
								inst: e,
								continue: !t.abort,
							})
					})
			}),
			t$ = O("$ZodCheckNumberFormat", (e, t) => {
				ty.init(e, t), (t.format = t.format || "float64")
				let a = t.format?.includes("int"),
					i = a ? "int" : "number",
					[n, r] = ep[t.format]
				e._zod.onattach.push((e) => {
					let i = e._zod.bag
					;(i.format = t.format), (i.minimum = n), (i.maximum = r), a && (i.pattern = tp)
				}),
					(e._zod.check = (o) => {
						let s = o.value
						if (a) {
							if (!Number.isInteger(s))
								return void o.issues.push({
									expected: i,
									format: t.format,
									code: "invalid_type",
									input: s,
									inst: e,
								})
							if (!Number.isSafeInteger(s))
								return void (s > 0
									? o.issues.push({
											input: s,
											code: "too_big",
											maximum: Number.MAX_SAFE_INTEGER,
											note: "Integers must be within the safe integer range.",
											inst: e,
											origin: i,
											continue: !t.abort,
										})
									: o.issues.push({
											input: s,
											code: "too_small",
											minimum: Number.MIN_SAFE_INTEGER,
											note: "Integers must be within the safe integer range.",
											inst: e,
											origin: i,
											continue: !t.abort,
										}))
						}
						s < n &&
							o.issues.push({
								origin: "number",
								input: s,
								code: "too_small",
								minimum: n,
								inclusive: !0,
								inst: e,
								continue: !t.abort,
							}),
							s > r && o.issues.push({ origin: "number", input: s, code: "too_big", maximum: r, inst: e })
					})
			}),
			tj = O("$ZodCheckBigIntFormat", (e, t) => {
				ty.init(e, t)
				let [a, i] = eg[t.format]
				e._zod.onattach.push((e) => {
					let n = e._zod.bag
					;(n.format = t.format), (n.minimum = a), (n.maximum = i)
				}),
					(e._zod.check = (n) => {
						let r = n.value
						r < a &&
							n.issues.push({
								origin: "bigint",
								input: r,
								code: "too_small",
								minimum: a,
								inclusive: !0,
								inst: e,
								continue: !t.abort,
							}),
							r > i && n.issues.push({ origin: "bigint", input: r, code: "too_big", maximum: i, inst: e })
					})
			}),
			tI = O("$ZodCheckMaxSize", (e, t) => {
				var a
				ty.init(e, t),
					(a = e._zod.def).when ??
						(a.when = (e) => {
							let t = e.value
							return !B(t) && void 0 !== t.size
						}),
					e._zod.onattach.push((e) => {
						let a = e._zod.bag.maximum ?? 1 / 0
						t.maximum < a && (e._zod.bag.maximum = t.maximum)
					}),
					(e._zod.check = (a) => {
						let i = a.value
						i.size <= t.maximum ||
							a.issues.push({
								origin: e$(i),
								code: "too_big",
								maximum: t.maximum,
								input: i,
								inst: e,
								continue: !t.abort,
							})
					})
			}),
			tS = O("$ZodCheckMinSize", (e, t) => {
				var a
				ty.init(e, t),
					(a = e._zod.def).when ??
						(a.when = (e) => {
							let t = e.value
							return !B(t) && void 0 !== t.size
						}),
					e._zod.onattach.push((e) => {
						let a = e._zod.bag.minimum ?? -1 / 0
						t.minimum > a && (e._zod.bag.minimum = t.minimum)
					}),
					(e._zod.check = (a) => {
						let i = a.value
						i.size >= t.minimum ||
							a.issues.push({
								origin: e$(i),
								code: "too_small",
								minimum: t.minimum,
								input: i,
								inst: e,
								continue: !t.abort,
							})
					})
			}),
			tC = O("$ZodCheckSizeEquals", (e, t) => {
				var a
				ty.init(e, t),
					(a = e._zod.def).when ??
						(a.when = (e) => {
							let t = e.value
							return !B(t) && void 0 !== t.size
						}),
					e._zod.onattach.push((e) => {
						let a = e._zod.bag
						;(a.minimum = t.size), (a.maximum = t.size), (a.size = t.size)
					}),
					(e._zod.check = (a) => {
						let i = a.value,
							n = i.size
						if (n === t.size) return
						let r = n > t.size
						a.issues.push({
							origin: e$(i),
							...(r ? { code: "too_big", maximum: t.size } : { code: "too_small", minimum: t.size }),
							inclusive: !0,
							exact: !0,
							input: a.value,
							inst: e,
							continue: !t.abort,
						})
					})
			}),
			tN = O("$ZodCheckMaxLength", (e, t) => {
				var a
				ty.init(e, t),
					(a = e._zod.def).when ??
						(a.when = (e) => {
							let t = e.value
							return !B(t) && void 0 !== t.length
						}),
					e._zod.onattach.push((e) => {
						let a = e._zod.bag.maximum ?? 1 / 0
						t.maximum < a && (e._zod.bag.maximum = t.maximum)
					}),
					(e._zod.check = (a) => {
						let i = a.value
						if (i.length <= t.maximum) return
						let n = ej(i)
						a.issues.push({
							origin: n,
							code: "too_big",
							maximum: t.maximum,
							inclusive: !0,
							input: i,
							inst: e,
							continue: !t.abort,
						})
					})
			}),
			tO = O("$ZodCheckMinLength", (e, t) => {
				var a
				ty.init(e, t),
					(a = e._zod.def).when ??
						(a.when = (e) => {
							let t = e.value
							return !B(t) && void 0 !== t.length
						}),
					e._zod.onattach.push((e) => {
						let a = e._zod.bag.minimum ?? -1 / 0
						t.minimum > a && (e._zod.bag.minimum = t.minimum)
					}),
					(e._zod.check = (a) => {
						let i = a.value
						if (i.length >= t.minimum) return
						let n = ej(i)
						a.issues.push({
							origin: n,
							code: "too_small",
							minimum: t.minimum,
							inclusive: !0,
							input: i,
							inst: e,
							continue: !t.abort,
						})
					})
			}),
			tE = O("$ZodCheckLengthEquals", (e, t) => {
				var a
				ty.init(e, t),
					(a = e._zod.def).when ??
						(a.when = (e) => {
							let t = e.value
							return !B(t) && void 0 !== t.length
						}),
					e._zod.onattach.push((e) => {
						let a = e._zod.bag
						;(a.minimum = t.length), (a.maximum = t.length), (a.length = t.length)
					}),
					(e._zod.check = (a) => {
						let i = a.value,
							n = i.length
						if (n === t.length) return
						let r = ej(i),
							o = n > t.length
						a.issues.push({
							origin: r,
							...(o ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length }),
							inclusive: !0,
							exact: !0,
							input: a.value,
							inst: e,
							continue: !t.abort,
						})
					})
			}),
			tP = O("$ZodCheckStringFormat", (e, t) => {
				var a, i
				ty.init(e, t),
					e._zod.onattach.push((e) => {
						let a = e._zod.bag
						;(a.format = t.format),
							t.pattern && (a.patterns ?? (a.patterns = new Set()), a.patterns.add(t.pattern))
					}),
					t.pattern
						? ((a = e._zod).check ??
							(a.check = (a) => {
								;(t.pattern.lastIndex = 0),
									t.pattern.test(a.value) ||
										a.issues.push({
											origin: "string",
											code: "invalid_format",
											format: t.format,
											input: a.value,
											...(t.pattern ? { pattern: t.pattern.toString() } : {}),
											inst: e,
											continue: !t.abort,
										})
							}))
						: ((i = e._zod).check ?? (i.check = () => {}))
			}),
			tU = O("$ZodCheckRegex", (e, t) => {
				tP.init(e, t),
					(e._zod.check = (a) => {
						;(t.pattern.lastIndex = 0),
							t.pattern.test(a.value) ||
								a.issues.push({
									origin: "string",
									code: "invalid_format",
									format: "regex",
									input: a.value,
									pattern: t.pattern.toString(),
									inst: e,
									continue: !t.abort,
								})
					})
			}),
			tT = O("$ZodCheckLowerCase", (e, t) => {
				t.pattern ?? (t.pattern = tb), tP.init(e, t)
			}),
			tA = O("$ZodCheckUpperCase", (e, t) => {
				t.pattern ?? (t.pattern = tk), tP.init(e, t)
			}),
			tD = O("$ZodCheckIncludes", (e, t) => {
				ty.init(e, t)
				let a = es(t.includes),
					i = new RegExp("number" == typeof t.position ? `^.{${t.position}}${a}` : a)
				;(t.pattern = i),
					e._zod.onattach.push((e) => {
						let t = e._zod.bag
						t.patterns ?? (t.patterns = new Set()), t.patterns.add(i)
					}),
					(e._zod.check = (a) => {
						a.value.includes(t.includes, t.position) ||
							a.issues.push({
								origin: "string",
								code: "invalid_format",
								format: "includes",
								includes: t.includes,
								input: a.value,
								inst: e,
								continue: !t.abort,
							})
					})
			}),
			tZ = O("$ZodCheckStartsWith", (e, t) => {
				ty.init(e, t)
				let a = RegExp(`^${es(t.prefix)}.*`)
				t.pattern ?? (t.pattern = a),
					e._zod.onattach.push((e) => {
						let t = e._zod.bag
						t.patterns ?? (t.patterns = new Set()), t.patterns.add(a)
					}),
					(e._zod.check = (a) => {
						a.value.startsWith(t.prefix) ||
							a.issues.push({
								origin: "string",
								code: "invalid_format",
								format: "starts_with",
								prefix: t.prefix,
								input: a.value,
								inst: e,
								continue: !t.abort,
							})
					})
			}),
			tR = O("$ZodCheckEndsWith", (e, t) => {
				ty.init(e, t)
				let a = RegExp(`.*${es(t.suffix)}$`)
				t.pattern ?? (t.pattern = a),
					e._zod.onattach.push((e) => {
						let t = e._zod.bag
						t.patterns ?? (t.patterns = new Set()), t.patterns.add(a)
					}),
					(e._zod.check = (a) => {
						a.value.endsWith(t.suffix) ||
							a.issues.push({
								origin: "string",
								code: "invalid_format",
								format: "ends_with",
								suffix: t.suffix,
								input: a.value,
								inst: e,
								continue: !t.abort,
							})
					})
			})
		function tL(e, t, a) {
			e.issues.length && t.issues.push(...ez(a, e.issues))
		}
		let tM = O("$ZodCheckProperty", (e, t) => {
				ty.init(e, t),
					(e._zod.check = (e) => {
						let a = t.schema._zod.run({ value: e.value[t.property], issues: [] }, {})
						if (a instanceof Promise) return a.then((a) => tL(a, e, t.property))
						tL(a, e, t.property)
					})
			}),
			tq = O("$ZodCheckMimeType", (e, t) => {
				ty.init(e, t)
				let a = new Set(t.mime)
				e._zod.onattach.push((e) => {
					e._zod.bag.mime = t.mime
				}),
					(e._zod.check = (i) => {
						a.has(i.value.type) ||
							i.issues.push({ code: "invalid_value", values: t.mime, input: i.value.type, inst: e })
					})
			}),
			tK = O("$ZodCheckOverwrite", (e, t) => {
				ty.init(e, t),
					(e._zod.check = (e) => {
						e.value = t.tx(e.value)
					})
			})
		e.s(
			[
				"$ZodCheck",
				0,
				ty,
				"$ZodCheckBigIntFormat",
				0,
				tj,
				"$ZodCheckEndsWith",
				0,
				tR,
				"$ZodCheckGreaterThan",
				0,
				tw,
				"$ZodCheckIncludes",
				0,
				tD,
				"$ZodCheckLengthEquals",
				0,
				tE,
				"$ZodCheckLessThan",
				0,
				tz,
				"$ZodCheckLowerCase",
				0,
				tT,
				"$ZodCheckMaxLength",
				0,
				tN,
				"$ZodCheckMaxSize",
				0,
				tI,
				"$ZodCheckMimeType",
				0,
				tq,
				"$ZodCheckMinLength",
				0,
				tO,
				"$ZodCheckMinSize",
				0,
				tS,
				"$ZodCheckMultipleOf",
				0,
				t_,
				"$ZodCheckNumberFormat",
				0,
				t$,
				"$ZodCheckOverwrite",
				0,
				tK,
				"$ZodCheckProperty",
				0,
				tM,
				"$ZodCheckRegex",
				0,
				tU,
				"$ZodCheckSizeEquals",
				0,
				tC,
				"$ZodCheckStartsWith",
				0,
				tZ,
				"$ZodCheckStringFormat",
				0,
				tP,
				"$ZodCheckUpperCase",
				0,
				tA,
			],
			57730,
		)
		class tF {
			constructor(e = []) {
				;(this.content = []), (this.indent = 0), this && (this.args = e)
			}
			indented(e) {
				;(this.indent += 1), e(this), (this.indent -= 1)
			}
			write(e) {
				if ("function" == typeof e) {
					e(this, { execution: "sync" }), e(this, { execution: "async" })
					return
				}
				let t = e.split("\n").filter((e) => e),
					a = Math.min(...t.map((e) => e.length - e.trimStart().length))
				for (let e of t.map((e) => e.slice(a)).map((e) => " ".repeat(2 * this.indent) + e)) this.content.push(e)
			}
			compile() {
				return Function(...this?.args, [...(this?.content ?? [""]).map((e) => `  ${e}`)].join("\n"))
			}
		}
		e.s(["Doc", () => tF], 12268)
		let tB = { major: 4, minor: 0, patch: 0 }
		e.s(["version", 0, tB], 19817)
		let tG = O("$ZodType", (e, t) => {
				var a
				e ?? (e = {}), (e._zod.def = t), (e._zod.bag = e._zod.bag || {}), (e._zod.version = tB)
				let i = [...(e._zod.def.checks ?? [])]
				for (let t of (e._zod.traits.has("$ZodCheck") && i.unshift(e), i)) for (let a of t._zod.onattach) a(e)
				if (0 === i.length)
					(a = e._zod).deferred ?? (a.deferred = []),
						e._zod.deferred?.push(() => {
							e._zod.run = e._zod.parse
						})
				else {
					let t = (e, t, a) => {
						let i,
							n = ex(e)
						for (let r of t) {
							if (r._zod.def.when) {
								if (!r._zod.def.when(e)) continue
							} else if (n) continue
							let t = e.issues.length,
								o = r._zod.check(e)
							if (o instanceof Promise && a?.async === !1) throw new P()
							if (i || o instanceof Promise)
								i = (i ?? Promise.resolve()).then(async () => {
									await o, e.issues.length !== t && (n || (n = ex(e, t)))
								})
							else {
								if (e.issues.length === t) continue
								n || (n = ex(e, t))
							}
						}
						return i ? i.then(() => e) : e
					}
					e._zod.run = (a, n) => {
						let r = e._zod.parse(a, n)
						if (r instanceof Promise) {
							if (!1 === n.async) throw new P()
							return r.then((e) => t(e, i, n))
						}
						return t(r, i, n)
					}
				}
				e["~standard"] = {
					validate: (t) => {
						try {
							let a = eF(e, t)
							return a.success ? { value: a.data } : { issues: a.error?.issues }
						} catch (a) {
							return eG(e, t).then((e) => (e.success ? { value: e.data } : { issues: e.error?.issues }))
						}
					},
					vendor: "zod",
					version: 1,
				}
			}),
			tV = O("$ZodString", (e, t) => {
				tG.init(e, t),
					(e._zod.pattern = [...(e?._zod.bag?.patterns ?? [])].pop() ?? tc(e._zod.bag)),
					(e._zod.parse = (a, i) => {
						if (t.coerce)
							try {
								a.value = String(a.value)
							} catch (e) {}
						return (
							"string" == typeof a.value ||
								a.issues.push({ expected: "string", code: "invalid_type", input: a.value, inst: e }),
							a
						)
					})
			}),
			tW = O("$ZodStringFormat", (e, t) => {
				tP.init(e, t), tV.init(e, t)
			}),
			tJ = O("$ZodGUID", (e, t) => {
				t.pattern ?? (t.pattern = e0), tW.init(e, t)
			}),
			tH = O("$ZodUUID", (e, t) => {
				if (t.version) {
					let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version]
					if (void 0 === e) throw Error(`Invalid UUID version: "${t.version}"`)
					t.pattern ?? (t.pattern = e1(e))
				} else t.pattern ?? (t.pattern = e1())
				tW.init(e, t)
			}),
			tX = O("$ZodEmail", (e, t) => {
				t.pattern ?? (t.pattern = e9), tW.init(e, t)
			}),
			tQ = O("$ZodURL", (e, t) => {
				tW.init(e, t),
					(e._zod.check = (a) => {
						try {
							let i = a.value,
								n = new URL(i),
								r = n.href
							t.hostname &&
								((t.hostname.lastIndex = 0),
								t.hostname.test(n.hostname) ||
									a.issues.push({
										code: "invalid_format",
										format: "url",
										note: "Invalid hostname",
										pattern: tn.source,
										input: a.value,
										inst: e,
										continue: !t.abort,
									})),
								t.protocol &&
									((t.protocol.lastIndex = 0),
									t.protocol.test(n.protocol.endsWith(":") ? n.protocol.slice(0, -1) : n.protocol) ||
										a.issues.push({
											code: "invalid_format",
											format: "url",
											note: "Invalid protocol",
											pattern: t.protocol.source,
											input: a.value,
											inst: e,
											continue: !t.abort,
										})),
								!i.endsWith("/") && r.endsWith("/") ? (a.value = r.slice(0, -1)) : (a.value = r)
							return
						} catch (i) {
							a.issues.push({
								code: "invalid_format",
								format: "url",
								input: a.value,
								inst: e,
								continue: !t.abort,
							})
						}
					})
			}),
			tY = O("$ZodEmoji", (e, t) => {
				t.pattern ?? (t.pattern = e5()), tW.init(e, t)
			}),
			t0 = O("$ZodNanoID", (e, t) => {
				t.pattern ?? (t.pattern = eQ), tW.init(e, t)
			}),
			t1 = O("$ZodCUID", (e, t) => {
				t.pattern ?? (t.pattern = eV), tW.init(e, t)
			}),
			t4 = O("$ZodCUID2", (e, t) => {
				t.pattern ?? (t.pattern = eW), tW.init(e, t)
			}),
			t6 = O("$ZodULID", (e, t) => {
				t.pattern ?? (t.pattern = eJ), tW.init(e, t)
			}),
			t2 = O("$ZodXID", (e, t) => {
				t.pattern ?? (t.pattern = eH), tW.init(e, t)
			}),
			t9 = O("$ZodKSUID", (e, t) => {
				t.pattern ?? (t.pattern = eX), tW.init(e, t)
			}),
			t3 = O("$ZodISODateTime", (e, t) => {
				t.pattern ?? (t.pattern = td(t)), tW.init(e, t)
			}),
			t5 = O("$ZodISODate", (e, t) => {
				t.pattern ?? (t.pattern = ts), tW.init(e, t)
			}),
			t8 = O("$ZodISOTime", (e, t) => {
				t.pattern ?? (t.pattern = tu(t)), tW.init(e, t)
			}),
			t7 = O("$ZodISODuration", (e, t) => {
				t.pattern ?? (t.pattern = eY), tW.init(e, t)
			}),
			ae = O("$ZodIPv4", (e, t) => {
				t.pattern ?? (t.pattern = e8),
					tW.init(e, t),
					e._zod.onattach.push((e) => {
						e._zod.bag.format = "ipv4"
					})
			}),
			at = O("$ZodIPv6", (e, t) => {
				t.pattern ?? (t.pattern = e7),
					tW.init(e, t),
					e._zod.onattach.push((e) => {
						e._zod.bag.format = "ipv6"
					}),
					(e._zod.check = (a) => {
						try {
							new URL(`http://[${a.value}]`)
						} catch {
							a.issues.push({
								code: "invalid_format",
								format: "ipv6",
								input: a.value,
								inst: e,
								continue: !t.abort,
							})
						}
					})
			}),
			aa = O("$ZodCIDRv4", (e, t) => {
				t.pattern ?? (t.pattern = te), tW.init(e, t)
			}),
			ai = O("$ZodCIDRv6", (e, t) => {
				t.pattern ?? (t.pattern = tt),
					tW.init(e, t),
					(e._zod.check = (a) => {
						let [i, n] = a.value.split("/")
						try {
							if (!n) throw Error()
							let e = Number(n)
							if (`${e}` !== n || e < 0 || e > 128) throw Error()
							new URL(`http://[${i}]`)
						} catch {
							a.issues.push({
								code: "invalid_format",
								format: "cidrv6",
								input: a.value,
								inst: e,
								continue: !t.abort,
							})
						}
					})
			})
		function an(e) {
			if ("" === e) return !0
			if (e.length % 4 != 0) return !1
			try {
				return atob(e), !0
			} catch {
				return !1
			}
		}
		let ar = O("$ZodBase64", (e, t) => {
			t.pattern ?? (t.pattern = ta),
				tW.init(e, t),
				e._zod.onattach.push((e) => {
					e._zod.bag.contentEncoding = "base64"
				}),
				(e._zod.check = (a) => {
					an(a.value) ||
						a.issues.push({
							code: "invalid_format",
							format: "base64",
							input: a.value,
							inst: e,
							continue: !t.abort,
						})
				})
		})
		function ao(e) {
			if (!ti.test(e)) return !1
			let t = e.replace(/[-_]/g, (e) => ("-" === e ? "+" : "/"))
			return an(t.padEnd(4 * Math.ceil(t.length / 4), "="))
		}
		let as = O("$ZodBase64URL", (e, t) => {
				t.pattern ?? (t.pattern = ti),
					tW.init(e, t),
					e._zod.onattach.push((e) => {
						e._zod.bag.contentEncoding = "base64url"
					}),
					(e._zod.check = (a) => {
						ao(a.value) ||
							a.issues.push({
								code: "invalid_format",
								format: "base64url",
								input: a.value,
								inst: e,
								continue: !t.abort,
							})
					})
			}),
			al = O("$ZodE164", (e, t) => {
				t.pattern ?? (t.pattern = tr), tW.init(e, t)
			})
		function au(e, t = null) {
			try {
				let a = e.split(".")
				if (3 !== a.length) return !1
				let [i] = a
				if (!i) return !1
				let n = JSON.parse(atob(i))
				if (("typ" in n && n?.typ !== "JWT") || !n.alg || (t && (!("alg" in n) || n.alg !== t))) return !1
				return !0
			} catch {
				return !1
			}
		}
		let ad = O("$ZodJWT", (e, t) => {
				tW.init(e, t),
					(e._zod.check = (a) => {
						au(a.value, t.alg) ||
							a.issues.push({
								code: "invalid_format",
								format: "jwt",
								input: a.value,
								inst: e,
								continue: !t.abort,
							})
					})
			}),
			ac = O("$ZodCustomStringFormat", (e, t) => {
				tW.init(e, t),
					(e._zod.check = (a) => {
						t.fn(a.value) ||
							a.issues.push({
								code: "invalid_format",
								format: t.format,
								input: a.value,
								inst: e,
								continue: !t.abort,
							})
					})
			}),
			am = O("$ZodNumber", (e, t) => {
				tG.init(e, t),
					(e._zod.pattern = e._zod.bag.pattern ?? tg),
					(e._zod.parse = (a, i) => {
						if (t.coerce)
							try {
								a.value = Number(a.value)
							} catch (e) {}
						let n = a.value
						if ("number" == typeof n && !Number.isNaN(n) && Number.isFinite(n)) return a
						let r =
							"number" == typeof n
								? Number.isNaN(n)
									? "NaN"
									: Number.isFinite(n)
										? void 0
										: "Infinity"
								: void 0
						return (
							a.issues.push({
								expected: "number",
								code: "invalid_type",
								input: n,
								inst: e,
								...(r ? { received: r } : {}),
							}),
							a
						)
					})
			}),
			ap = O("$ZodNumber", (e, t) => {
				t$.init(e, t), am.init(e, t)
			}),
			ag = O("$ZodBoolean", (e, t) => {
				tG.init(e, t),
					(e._zod.pattern = th),
					(e._zod.parse = (a, i) => {
						if (t.coerce)
							try {
								a.value = !!a.value
							} catch (e) {}
						let n = a.value
						return (
							"boolean" == typeof n ||
								a.issues.push({ expected: "boolean", code: "invalid_type", input: n, inst: e }),
							a
						)
					})
			}),
			ah = O("$ZodBigInt", (e, t) => {
				tG.init(e, t),
					(e._zod.pattern = tm),
					(e._zod.parse = (a, i) => {
						if (t.coerce)
							try {
								a.value = BigInt(a.value)
							} catch (e) {}
						return (
							"bigint" == typeof a.value ||
								a.issues.push({ expected: "bigint", code: "invalid_type", input: a.value, inst: e }),
							a
						)
					})
			}),
			af = O("$ZodBigInt", (e, t) => {
				tj.init(e, t), ah.init(e, t)
			}),
			av = O("$ZodSymbol", (e, t) => {
				tG.init(e, t),
					(e._zod.parse = (t, a) => {
						let i = t.value
						return (
							"symbol" == typeof i ||
								t.issues.push({ expected: "symbol", code: "invalid_type", input: i, inst: e }),
							t
						)
					})
			}),
			ab = O("$ZodUndefined", (e, t) => {
				tG.init(e, t),
					(e._zod.pattern = tv),
					(e._zod.values = new Set([void 0])),
					(e._zod.optin = "optional"),
					(e._zod.optout = "optional"),
					(e._zod.parse = (t, a) => {
						let i = t.value
						return (
							void 0 === i ||
								t.issues.push({ expected: "undefined", code: "invalid_type", input: i, inst: e }),
							t
						)
					})
			}),
			ak = O("$ZodNull", (e, t) => {
				tG.init(e, t),
					(e._zod.pattern = tf),
					(e._zod.values = new Set([null])),
					(e._zod.parse = (t, a) => {
						let i = t.value
						return (
							null === i || t.issues.push({ expected: "null", code: "invalid_type", input: i, inst: e }),
							t
						)
					})
			}),
			ay = O("$ZodAny", (e, t) => {
				tG.init(e, t), (e._zod.parse = (e) => e)
			}),
			ax = O("$ZodUnknown", (e, t) => {
				tG.init(e, t), (e._zod.parse = (e) => e)
			}),
			az = O("$ZodNever", (e, t) => {
				tG.init(e, t),
					(e._zod.parse = (t, a) => (
						t.issues.push({ expected: "never", code: "invalid_type", input: t.value, inst: e }), t
					))
			}),
			aw = O("$ZodVoid", (e, t) => {
				tG.init(e, t),
					(e._zod.parse = (t, a) => {
						let i = t.value
						return (
							void 0 === i ||
								t.issues.push({ expected: "void", code: "invalid_type", input: i, inst: e }),
							t
						)
					})
			}),
			a_ = O("$ZodDate", (e, t) => {
				tG.init(e, t),
					(e._zod.parse = (a, i) => {
						if (t.coerce)
							try {
								a.value = new Date(a.value)
							} catch (e) {}
						let n = a.value,
							r = n instanceof Date
						return (
							(r && !Number.isNaN(n.getTime())) ||
								a.issues.push({
									expected: "date",
									code: "invalid_type",
									input: n,
									...(r ? { received: "Invalid Date" } : {}),
									inst: e,
								}),
							a
						)
					})
			})
		function a$(e, t, a) {
			e.issues.length && t.issues.push(...ez(a, e.issues)), (t.value[a] = e.value)
		}
		let aj = O("$ZodArray", (e, t) => {
			tG.init(e, t),
				(e._zod.parse = (a, i) => {
					let n = a.value
					if (!Array.isArray(n))
						return a.issues.push({ expected: "array", code: "invalid_type", input: n, inst: e }), a
					a.value = Array(n.length)
					let r = []
					for (let e = 0; e < n.length; e++) {
						let o = n[e],
							s = t.element._zod.run({ value: o, issues: [] }, i)
						s instanceof Promise ? r.push(s.then((t) => a$(t, a, e))) : a$(s, a, e)
					}
					return r.length ? Promise.all(r).then(() => a) : a
				})
		})
		function aI(e, t, a) {
			e.issues.length && t.issues.push(...ez(a, e.issues)), (t.value[a] = e.value)
		}
		function aS(e, t, a, i) {
			e.issues.length
				? void 0 === i[a]
					? a in i
						? (t.value[a] = void 0)
						: (t.value[a] = e.value)
					: t.issues.push(...ez(a, e.issues))
				: void 0 === e.value
					? a in i && (t.value[a] = void 0)
					: (t.value[a] = e.value)
		}
		let aC = O("$ZodObject", (e, t) => {
			let a, i
			tG.init(e, t)
			let n = F(() => {
				let e = Object.keys(t.shape)
				for (let a of e)
					if (!(t.shape[a] instanceof tG)) throw Error(`Invalid element at key "${a}": expected a Zod schema`)
				let a = em(t.shape)
				return { shape: t.shape, keys: e, keySet: new Set(e), numKeys: e.length, optionalKeys: new Set(a) }
			})
			W(e._zod, "propValues", () => {
				let e = t.shape,
					a = {}
				for (let t in e) {
					let i = e[t]._zod
					if (i.values) for (let e of (a[t] ?? (a[t] = new Set()), i.values)) a[t].add(e)
				}
				return a
			})
			let r = !U.jitless,
				o = r && ea.value,
				s = t.catchall
			e._zod.parse = (l, u) => {
				i ?? (i = n.value)
				let d = l.value
				if (!et(d)) return l.issues.push({ expected: "object", code: "invalid_type", input: d, inst: e }), l
				let c = []
				if (r && o && u?.async === !1 && !0 !== u.jitless)
					a ||
						(a = ((e) => {
							let t = new tF(["shape", "payload", "ctx"]),
								a = n.value,
								i = (e) => {
									let t = Y(e)
									return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`
								}
							t.write("const input = payload.value;")
							let r = Object.create(null),
								o = 0
							for (let e of a.keys) r[e] = `key_${o++}`
							for (let e of (t.write("const newResult = {}"), a.keys))
								if (a.optionalKeys.has(e)) {
									let a = r[e]
									t.write(`const ${a} = ${i(e)};`)
									let n = Y(e)
									t.write(`
        if (${a}.issues.length) {
          if (input[${n}] === undefined) {
            if (${n} in input) {
              newResult[${n}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${a}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${n}, ...iss.path] : [${n}],
              }))
            );
          }
        } else if (${a}.value === undefined) {
          if (${n} in input) newResult[${n}] = undefined;
        } else {
          newResult[${n}] = ${a}.value;
        }
        `)
								} else {
									let a = r[e]
									t.write(`const ${a} = ${i(e)};`),
										t.write(`
          if (${a}.issues.length) payload.issues = payload.issues.concat(${a}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Y(e)}, ...iss.path] : [${Y(e)}]
          })));`),
										t.write(`newResult[${Y(e)}] = ${a}.value`)
								}
							t.write("payload.value = newResult;"), t.write("return payload;")
							let s = t.compile()
							return (t, a) => s(e, t, a)
						})(t.shape)),
						(l = a(l, u))
				else {
					l.value = {}
					let e = i.shape
					for (let t of i.keys) {
						let a = e[t],
							i = a._zod.run({ value: d[t], issues: [] }, u),
							n = "optional" === a._zod.optin && "optional" === a._zod.optout
						i instanceof Promise
							? c.push(i.then((e) => (n ? aS(e, l, t, d) : aI(e, l, t))))
							: n
								? aS(i, l, t, d)
								: aI(i, l, t)
					}
				}
				if (!s) return c.length ? Promise.all(c).then(() => l) : l
				let m = [],
					p = i.keySet,
					g = s._zod,
					h = g.def.type
				for (let e of Object.keys(d)) {
					if (p.has(e)) continue
					if ("never" === h) {
						m.push(e)
						continue
					}
					let t = g.run({ value: d[e], issues: [] }, u)
					t instanceof Promise ? c.push(t.then((t) => aI(t, l, e))) : aI(t, l, e)
				}
				return (m.length && l.issues.push({ code: "unrecognized_keys", keys: m, input: d, inst: e }), c.length)
					? Promise.all(c).then(() => l)
					: l
			}
		})
		function aN(e, t, a, i) {
			for (let a of e) if (0 === a.issues.length) return (t.value = a.value), t
			return (
				t.issues.push({
					code: "invalid_union",
					input: t.value,
					inst: a,
					errors: e.map((e) => e.issues.map((e) => e_(e, i, T()))),
				}),
				t
			)
		}
		let aO = O("$ZodUnion", (e, t) => {
				tG.init(e, t),
					W(e._zod, "optin", () =>
						t.options.some((e) => "optional" === e._zod.optin) ? "optional" : void 0,
					),
					W(e._zod, "optout", () =>
						t.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0,
					),
					W(e._zod, "values", () => {
						if (t.options.every((e) => e._zod.values))
							return new Set(t.options.flatMap((e) => Array.from(e._zod.values)))
					}),
					W(e._zod, "pattern", () => {
						if (t.options.every((e) => e._zod.pattern)) {
							let e = t.options.map((e) => e._zod.pattern)
							return RegExp(`^(${e.map((e) => G(e.source)).join("|")})$`)
						}
					}),
					(e._zod.parse = (a, i) => {
						let n = !1,
							r = []
						for (let e of t.options) {
							let t = e._zod.run({ value: a.value, issues: [] }, i)
							if (t instanceof Promise) r.push(t), (n = !0)
							else {
								if (0 === t.issues.length) return t
								r.push(t)
							}
						}
						return n ? Promise.all(r).then((t) => aN(t, a, e, i)) : aN(r, a, e, i)
					})
			}),
			aE = O("$ZodDiscriminatedUnion", (e, t) => {
				aO.init(e, t)
				let a = e._zod.parse
				W(e._zod, "propValues", () => {
					let e = {}
					for (let a of t.options) {
						let i = a._zod.propValues
						if (!i || 0 === Object.keys(i).length)
							throw Error(`Invalid discriminated union option at index "${t.options.indexOf(a)}"`)
						for (let [t, a] of Object.entries(i)) for (let i of (e[t] || (e[t] = new Set()), a)) e[t].add(i)
					}
					return e
				})
				let i = F(() => {
					let e = t.options,
						a = new Map()
					for (let i of e) {
						let e = i._zod.propValues[t.discriminator]
						if (!e || 0 === e.size)
							throw Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`)
						for (let t of e) {
							if (a.has(t)) throw Error(`Duplicate discriminator value "${String(t)}"`)
							a.set(t, i)
						}
					}
					return a
				})
				e._zod.parse = (n, r) => {
					let o = n.value
					if (!et(o)) return n.issues.push({ code: "invalid_type", expected: "object", input: o, inst: e }), n
					let s = i.value.get(o?.[t.discriminator])
					return s
						? s._zod.run(n, r)
						: t.unionFallback
							? a(n, r)
							: (n.issues.push({
									code: "invalid_union",
									errors: [],
									note: "No matching discriminator",
									input: o,
									path: [t.discriminator],
									inst: e,
								}),
								n)
				}
			}),
			aP = O("$ZodIntersection", (e, t) => {
				tG.init(e, t),
					(e._zod.parse = (e, a) => {
						let i = e.value,
							n = t.left._zod.run({ value: i, issues: [] }, a),
							r = t.right._zod.run({ value: i, issues: [] }, a)
						return n instanceof Promise || r instanceof Promise
							? Promise.all([n, r]).then(([t, a]) => aU(e, t, a))
							: aU(e, n, r)
					})
			})
		function aU(e, t, a) {
			if ((t.issues.length && e.issues.push(...t.issues), a.issues.length && e.issues.push(...a.issues), ex(e)))
				return e
			let i = (function e(t, a) {
				if (t === a || (t instanceof Date && a instanceof Date && +t == +a)) return { valid: !0, data: t }
				if (ei(t) && ei(a)) {
					let i = Object.keys(a),
						n = Object.keys(t).filter((e) => -1 !== i.indexOf(e)),
						r = { ...t, ...a }
					for (let i of n) {
						let n = e(t[i], a[i])
						if (!n.valid) return { valid: !1, mergeErrorPath: [i, ...n.mergeErrorPath] }
						r[i] = n.data
					}
					return { valid: !0, data: r }
				}
				if (Array.isArray(t) && Array.isArray(a)) {
					if (t.length !== a.length) return { valid: !1, mergeErrorPath: [] }
					let i = []
					for (let n = 0; n < t.length; n++) {
						let r = e(t[n], a[n])
						if (!r.valid) return { valid: !1, mergeErrorPath: [n, ...r.mergeErrorPath] }
						i.push(r.data)
					}
					return { valid: !0, data: i }
				}
				return { valid: !1, mergeErrorPath: [] }
			})(t.value, a.value)
			if (!i.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(i.mergeErrorPath)}`)
			return (e.value = i.data), e
		}
		let aT = O("$ZodTuple", (e, t) => {
			tG.init(e, t)
			let a = t.items,
				i = a.length - [...a].reverse().findIndex((e) => "optional" !== e._zod.optin)
			e._zod.parse = (n, r) => {
				let o = n.value
				if (!Array.isArray(o))
					return n.issues.push({ input: o, inst: e, expected: "tuple", code: "invalid_type" }), n
				n.value = []
				let s = []
				if (!t.rest) {
					let t = o.length > a.length,
						r = o.length < i - 1
					if (t || r)
						return (
							n.issues.push({
								input: o,
								inst: e,
								origin: "array",
								...(t
									? { code: "too_big", maximum: a.length }
									: { code: "too_small", minimum: a.length }),
							}),
							n
						)
				}
				let l = -1
				for (let e of a) {
					if (++l >= o.length && l >= i) continue
					let t = e._zod.run({ value: o[l], issues: [] }, r)
					t instanceof Promise ? s.push(t.then((e) => aA(e, n, l))) : aA(t, n, l)
				}
				if (t.rest)
					for (let e of o.slice(a.length)) {
						l++
						let a = t.rest._zod.run({ value: e, issues: [] }, r)
						a instanceof Promise ? s.push(a.then((e) => aA(e, n, l))) : aA(a, n, l)
					}
				return s.length ? Promise.all(s).then(() => n) : n
			}
		})
		function aA(e, t, a) {
			e.issues.length && t.issues.push(...ez(a, e.issues)), (t.value[a] = e.value)
		}
		let aD = O("$ZodRecord", (e, t) => {
				tG.init(e, t),
					(e._zod.parse = (a, i) => {
						let n = a.value
						if (!ei(n))
							return a.issues.push({ expected: "record", code: "invalid_type", input: n, inst: e }), a
						let r = []
						if (t.keyType._zod.values) {
							let o,
								s = t.keyType._zod.values
							for (let e of ((a.value = {}), s))
								if ("string" == typeof e || "number" == typeof e || "symbol" == typeof e) {
									let o = t.valueType._zod.run({ value: n[e], issues: [] }, i)
									o instanceof Promise
										? r.push(
												o.then((t) => {
													t.issues.length && a.issues.push(...ez(e, t.issues)),
														(a.value[e] = t.value)
												}),
											)
										: (o.issues.length && a.issues.push(...ez(e, o.issues)), (a.value[e] = o.value))
								}
							for (let e in n) s.has(e) || (o = o ?? []).push(e)
							o &&
								o.length > 0 &&
								a.issues.push({ code: "unrecognized_keys", input: n, inst: e, keys: o })
						} else
							for (let o of ((a.value = {}), Reflect.ownKeys(n))) {
								if ("__proto__" === o) continue
								let s = t.keyType._zod.run({ value: o, issues: [] }, i)
								if (s instanceof Promise)
									throw Error("Async schemas not supported in object keys currently")
								if (s.issues.length) {
									a.issues.push({
										origin: "record",
										code: "invalid_key",
										issues: s.issues.map((e) => e_(e, i, T())),
										input: o,
										path: [o],
										inst: e,
									}),
										(a.value[s.value] = s.value)
									continue
								}
								let l = t.valueType._zod.run({ value: n[o], issues: [] }, i)
								l instanceof Promise
									? r.push(
											l.then((e) => {
												e.issues.length && a.issues.push(...ez(o, e.issues)),
													(a.value[s.value] = e.value)
											}),
										)
									: (l.issues.length && a.issues.push(...ez(o, l.issues)),
										(a.value[s.value] = l.value))
							}
						return r.length ? Promise.all(r).then(() => a) : a
					})
			}),
			aZ = O("$ZodMap", (e, t) => {
				tG.init(e, t),
					(e._zod.parse = (a, i) => {
						let n = a.value
						if (!(n instanceof Map))
							return a.issues.push({ expected: "map", code: "invalid_type", input: n, inst: e }), a
						let r = []
						for (let [o, s] of ((a.value = new Map()), n)) {
							let l = t.keyType._zod.run({ value: o, issues: [] }, i),
								u = t.valueType._zod.run({ value: s, issues: [] }, i)
							l instanceof Promise || u instanceof Promise
								? r.push(
										Promise.all([l, u]).then(([t, r]) => {
											aR(t, r, a, o, n, e, i)
										}),
									)
								: aR(l, u, a, o, n, e, i)
						}
						return r.length ? Promise.all(r).then(() => a) : a
					})
			})
		function aR(e, t, a, i, n, r, o) {
			e.issues.length &&
				(er.has(typeof i)
					? a.issues.push(...ez(i, e.issues))
					: a.issues.push({
							origin: "map",
							code: "invalid_key",
							input: n,
							inst: r,
							issues: e.issues.map((e) => e_(e, o, T())),
						})),
				t.issues.length &&
					(er.has(typeof i)
						? a.issues.push(...ez(i, t.issues))
						: a.issues.push({
								origin: "map",
								code: "invalid_element",
								input: n,
								inst: r,
								key: i,
								issues: t.issues.map((e) => e_(e, o, T())),
							})),
				a.value.set(e.value, t.value)
		}
		let aL = O("$ZodSet", (e, t) => {
			tG.init(e, t),
				(e._zod.parse = (a, i) => {
					let n = a.value
					if (!(n instanceof Set))
						return a.issues.push({ input: n, inst: e, expected: "set", code: "invalid_type" }), a
					let r = []
					for (let e of ((a.value = new Set()), n)) {
						let n = t.valueType._zod.run({ value: e, issues: [] }, i)
						n instanceof Promise ? r.push(n.then((e) => aM(e, a))) : aM(n, a)
					}
					return r.length ? Promise.all(r).then(() => a) : a
				})
		})
		function aM(e, t) {
			e.issues.length && t.issues.push(...e.issues), t.value.add(e.value)
		}
		let aq = O("$ZodEnum", (e, t) => {
				tG.init(e, t)
				let a = M(t.entries)
				;(e._zod.values = new Set(a)),
					(e._zod.pattern = RegExp(
						`^(${a
							.filter((e) => er.has(typeof e))
							.map((e) => ("string" == typeof e ? es(e) : e.toString()))
							.join("|")})$`,
					)),
					(e._zod.parse = (t, i) => {
						let n = t.value
						return (
							e._zod.values.has(n) ||
								t.issues.push({ code: "invalid_value", values: a, input: n, inst: e }),
							t
						)
					})
			}),
			aK = O("$ZodLiteral", (e, t) => {
				tG.init(e, t),
					(e._zod.values = new Set(t.values)),
					(e._zod.pattern = RegExp(
						`^(${t.values.map((e) => ("string" == typeof e ? es(e) : e ? e.toString() : String(e))).join("|")})$`,
					)),
					(e._zod.parse = (a, i) => {
						let n = a.value
						return (
							e._zod.values.has(n) ||
								a.issues.push({ code: "invalid_value", values: t.values, input: n, inst: e }),
							a
						)
					})
			}),
			aF = O("$ZodFile", (e, t) => {
				tG.init(e, t),
					(e._zod.parse = (t, a) => {
						let i = t.value
						return (
							i instanceof File ||
								t.issues.push({ expected: "file", code: "invalid_type", input: i, inst: e }),
							t
						)
					})
			}),
			aB = O("$ZodTransform", (e, t) => {
				tG.init(e, t),
					(e._zod.parse = (e, a) => {
						let i = t.transform(e.value, e)
						if (a.async)
							return (i instanceof Promise ? i : Promise.resolve(i)).then((t) => ((e.value = t), e))
						if (i instanceof Promise) throw new P()
						return (e.value = i), e
					})
			}),
			aG = O("$ZodOptional", (e, t) => {
				tG.init(e, t),
					(e._zod.optin = "optional"),
					(e._zod.optout = "optional"),
					W(e._zod, "values", () =>
						t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0,
					),
					W(e._zod, "pattern", () => {
						let e = t.innerType._zod.pattern
						return e ? RegExp(`^(${G(e.source)})?$`) : void 0
					}),
					(e._zod.parse = (e, a) =>
						"optional" === t.innerType._zod.optin
							? t.innerType._zod.run(e, a)
							: void 0 === e.value
								? e
								: t.innerType._zod.run(e, a))
			}),
			aV = O("$ZodNullable", (e, t) => {
				tG.init(e, t),
					W(e._zod, "optin", () => t.innerType._zod.optin),
					W(e._zod, "optout", () => t.innerType._zod.optout),
					W(e._zod, "pattern", () => {
						let e = t.innerType._zod.pattern
						return e ? RegExp(`^(${G(e.source)}|null)$`) : void 0
					}),
					W(e._zod, "values", () =>
						t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0,
					),
					(e._zod.parse = (e, a) => (null === e.value ? e : t.innerType._zod.run(e, a)))
			}),
			aW = O("$ZodDefault", (e, t) => {
				tG.init(e, t),
					(e._zod.optin = "optional"),
					W(e._zod, "values", () => t.innerType._zod.values),
					(e._zod.parse = (e, a) => {
						if (void 0 === e.value) return (e.value = t.defaultValue), e
						let i = t.innerType._zod.run(e, a)
						return i instanceof Promise ? i.then((e) => aJ(e, t)) : aJ(i, t)
					})
			})
		function aJ(e, t) {
			return void 0 === e.value && (e.value = t.defaultValue), e
		}
		let aH = O("$ZodPrefault", (e, t) => {
				tG.init(e, t),
					(e._zod.optin = "optional"),
					W(e._zod, "values", () => t.innerType._zod.values),
					(e._zod.parse = (e, a) => (
						void 0 === e.value && (e.value = t.defaultValue), t.innerType._zod.run(e, a)
					))
			}),
			aX = O("$ZodNonOptional", (e, t) => {
				tG.init(e, t),
					W(e._zod, "values", () => {
						let e = t.innerType._zod.values
						return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0
					}),
					(e._zod.parse = (a, i) => {
						let n = t.innerType._zod.run(a, i)
						return n instanceof Promise ? n.then((t) => aQ(t, e)) : aQ(n, e)
					})
			})
		function aQ(e, t) {
			return (
				e.issues.length ||
					void 0 !== e.value ||
					e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: t }),
				e
			)
		}
		let aY = O("$ZodSuccess", (e, t) => {
				tG.init(e, t),
					(e._zod.parse = (e, a) => {
						let i = t.innerType._zod.run(e, a)
						return i instanceof Promise
							? i.then((t) => ((e.value = 0 === t.issues.length), e))
							: ((e.value = 0 === i.issues.length), e)
					})
			}),
			a0 = O("$ZodCatch", (e, t) => {
				tG.init(e, t),
					(e._zod.optin = "optional"),
					W(e._zod, "optout", () => t.innerType._zod.optout),
					W(e._zod, "values", () => t.innerType._zod.values),
					(e._zod.parse = (e, a) => {
						let i = t.innerType._zod.run(e, a)
						return i instanceof Promise
							? i.then(
									(i) => (
										(e.value = i.value),
										i.issues.length &&
											((e.value = t.catchValue({
												...e,
												error: { issues: i.issues.map((e) => e_(e, a, T())) },
												input: e.value,
											})),
											(e.issues = [])),
										e
									),
								)
							: ((e.value = i.value),
								i.issues.length &&
									((e.value = t.catchValue({
										...e,
										error: { issues: i.issues.map((e) => e_(e, a, T())) },
										input: e.value,
									})),
									(e.issues = [])),
								e)
					})
			}),
			a1 = O("$ZodNaN", (e, t) => {
				tG.init(e, t),
					(e._zod.parse = (t, a) => (
						("number" == typeof t.value && Number.isNaN(t.value)) ||
							t.issues.push({ input: t.value, inst: e, expected: "nan", code: "invalid_type" }),
						t
					))
			}),
			a4 = O("$ZodPipe", (e, t) => {
				tG.init(e, t),
					W(e._zod, "values", () => t.in._zod.values),
					W(e._zod, "optin", () => t.in._zod.optin),
					W(e._zod, "optout", () => t.out._zod.optout),
					(e._zod.parse = (e, a) => {
						let i = t.in._zod.run(e, a)
						return i instanceof Promise ? i.then((e) => a6(e, t, a)) : a6(i, t, a)
					})
			})
		function a6(e, t, a) {
			return ex(e) ? e : t.out._zod.run({ value: e.value, issues: e.issues }, a)
		}
		let a2 = O("$ZodReadonly", (e, t) => {
			tG.init(e, t),
				W(e._zod, "propValues", () => t.innerType._zod.propValues),
				W(e._zod, "values", () => t.innerType._zod.values),
				W(e._zod, "optin", () => t.innerType._zod.optin),
				W(e._zod, "optout", () => t.innerType._zod.optout),
				(e._zod.parse = (e, a) => {
					let i = t.innerType._zod.run(e, a)
					return i instanceof Promise ? i.then(a9) : a9(i)
				})
		})
		function a9(e) {
			return (e.value = Object.freeze(e.value)), e
		}
		let a3 = O("$ZodTemplateLiteral", (e, t) => {
				tG.init(e, t)
				let a = []
				for (let e of t.parts)
					if (e instanceof tG) {
						if (!e._zod.pattern)
							throw Error(
								`Invalid template literal part, no pattern found: ${[...e._zod.traits].shift()}`,
							)
						let t = e._zod.pattern instanceof RegExp ? e._zod.pattern.source : e._zod.pattern
						if (!t) throw Error(`Invalid template literal part: ${e._zod.traits}`)
						let i = +!!t.startsWith("^"),
							n = t.endsWith("$") ? t.length - 1 : t.length
						a.push(t.slice(i, n))
					} else if (null === e || eo.has(typeof e)) a.push(es(`${e}`))
					else throw Error(`Invalid template literal part: ${e}`)
				;(e._zod.pattern = RegExp(`^${a.join("")}$`)),
					(e._zod.parse = (t, a) => (
						"string" != typeof t.value
							? t.issues.push({
									input: t.value,
									inst: e,
									expected: "template_literal",
									code: "invalid_type",
								})
							: ((e._zod.pattern.lastIndex = 0),
								e._zod.pattern.test(t.value) ||
									t.issues.push({
										input: t.value,
										inst: e,
										code: "invalid_format",
										format: "template_literal",
										pattern: e._zod.pattern.source,
									})),
						t
					))
			}),
			a5 = O("$ZodPromise", (e, t) => {
				tG.init(e, t),
					(e._zod.parse = (e, a) =>
						Promise.resolve(e.value).then((e) => t.innerType._zod.run({ value: e, issues: [] }, a)))
			}),
			a8 = O("$ZodLazy", (e, t) => {
				tG.init(e, t),
					W(e._zod, "innerType", () => t.getter()),
					W(e._zod, "pattern", () => e._zod.innerType._zod.pattern),
					W(e._zod, "propValues", () => e._zod.innerType._zod.propValues),
					W(e._zod, "optin", () => e._zod.innerType._zod.optin),
					W(e._zod, "optout", () => e._zod.innerType._zod.optout),
					(e._zod.parse = (t, a) => e._zod.innerType._zod.run(t, a))
			}),
			a7 = O("$ZodCustom", (e, t) => {
				ty.init(e, t),
					tG.init(e, t),
					(e._zod.parse = (e, t) => e),
					(e._zod.check = (a) => {
						let i = a.value,
							n = t.fn(i)
						if (n instanceof Promise) return n.then((t) => ie(t, a, i, e))
						ie(n, a, i, e)
					})
			})
		function ie(e, t, a, i) {
			if (!e) {
				let e = {
					code: "custom",
					input: a,
					inst: i,
					path: [...(i._zod.def.path ?? [])],
					continue: !i._zod.def.abort,
				}
				i._zod.def.params && (e.params = i._zod.def.params), t.issues.push(eI(e))
			}
		}
		e.s(
			[
				"$ZodAny",
				0,
				ay,
				"$ZodArray",
				0,
				aj,
				"$ZodBase64",
				0,
				ar,
				"$ZodBase64URL",
				0,
				as,
				"$ZodBigInt",
				0,
				ah,
				"$ZodBigIntFormat",
				0,
				af,
				"$ZodBoolean",
				0,
				ag,
				"$ZodCIDRv4",
				0,
				aa,
				"$ZodCIDRv6",
				0,
				ai,
				"$ZodCUID",
				0,
				t1,
				"$ZodCUID2",
				0,
				t4,
				"$ZodCatch",
				0,
				a0,
				"$ZodCustom",
				0,
				a7,
				"$ZodCustomStringFormat",
				0,
				ac,
				"$ZodDate",
				0,
				a_,
				"$ZodDefault",
				0,
				aW,
				"$ZodDiscriminatedUnion",
				0,
				aE,
				"$ZodE164",
				0,
				al,
				"$ZodEmail",
				0,
				tX,
				"$ZodEmoji",
				0,
				tY,
				"$ZodEnum",
				0,
				aq,
				"$ZodFile",
				0,
				aF,
				"$ZodGUID",
				0,
				tJ,
				"$ZodIPv4",
				0,
				ae,
				"$ZodIPv6",
				0,
				at,
				"$ZodISODate",
				0,
				t5,
				"$ZodISODateTime",
				0,
				t3,
				"$ZodISODuration",
				0,
				t7,
				"$ZodISOTime",
				0,
				t8,
				"$ZodIntersection",
				0,
				aP,
				"$ZodJWT",
				0,
				ad,
				"$ZodKSUID",
				0,
				t9,
				"$ZodLazy",
				0,
				a8,
				"$ZodLiteral",
				0,
				aK,
				"$ZodMap",
				0,
				aZ,
				"$ZodNaN",
				0,
				a1,
				"$ZodNanoID",
				0,
				t0,
				"$ZodNever",
				0,
				az,
				"$ZodNonOptional",
				0,
				aX,
				"$ZodNull",
				0,
				ak,
				"$ZodNullable",
				0,
				aV,
				"$ZodNumber",
				0,
				am,
				"$ZodNumberFormat",
				0,
				ap,
				"$ZodObject",
				0,
				aC,
				"$ZodOptional",
				0,
				aG,
				"$ZodPipe",
				0,
				a4,
				"$ZodPrefault",
				0,
				aH,
				"$ZodPromise",
				0,
				a5,
				"$ZodReadonly",
				0,
				a2,
				"$ZodRecord",
				0,
				aD,
				"$ZodSet",
				0,
				aL,
				"$ZodString",
				0,
				tV,
				"$ZodStringFormat",
				0,
				tW,
				"$ZodSuccess",
				0,
				aY,
				"$ZodSymbol",
				0,
				av,
				"$ZodTemplateLiteral",
				0,
				a3,
				"$ZodTransform",
				0,
				aB,
				"$ZodTuple",
				0,
				aT,
				"$ZodType",
				0,
				tG,
				"$ZodULID",
				0,
				t6,
				"$ZodURL",
				0,
				tQ,
				"$ZodUUID",
				0,
				tH,
				"$ZodUndefined",
				0,
				ab,
				"$ZodUnion",
				0,
				aO,
				"$ZodUnknown",
				0,
				ax,
				"$ZodVoid",
				0,
				aw,
				"$ZodXID",
				0,
				t2,
				"isValidBase64",
				() => an,
				"isValidBase64URL",
				() => ao,
				"isValidJWT",
				() => au,
			],
			21555,
		),
			e.i(21555),
			e.s(
				[
					"$ZodAny",
					0,
					ay,
					"$ZodArray",
					0,
					aj,
					"$ZodBase64",
					0,
					ar,
					"$ZodBase64URL",
					0,
					as,
					"$ZodBigInt",
					0,
					ah,
					"$ZodBigIntFormat",
					0,
					af,
					"$ZodBoolean",
					0,
					ag,
					"$ZodCIDRv4",
					0,
					aa,
					"$ZodCIDRv6",
					0,
					ai,
					"$ZodCUID",
					0,
					t1,
					"$ZodCUID2",
					0,
					t4,
					"$ZodCatch",
					0,
					a0,
					"$ZodCustom",
					0,
					a7,
					"$ZodCustomStringFormat",
					0,
					ac,
					"$ZodDate",
					0,
					a_,
					"$ZodDefault",
					0,
					aW,
					"$ZodDiscriminatedUnion",
					0,
					aE,
					"$ZodE164",
					0,
					al,
					"$ZodEmail",
					0,
					tX,
					"$ZodEmoji",
					0,
					tY,
					"$ZodEnum",
					0,
					aq,
					"$ZodFile",
					0,
					aF,
					"$ZodGUID",
					0,
					tJ,
					"$ZodIPv4",
					0,
					ae,
					"$ZodIPv6",
					0,
					at,
					"$ZodISODate",
					0,
					t5,
					"$ZodISODateTime",
					0,
					t3,
					"$ZodISODuration",
					0,
					t7,
					"$ZodISOTime",
					0,
					t8,
					"$ZodIntersection",
					0,
					aP,
					"$ZodJWT",
					0,
					ad,
					"$ZodKSUID",
					0,
					t9,
					"$ZodLazy",
					0,
					a8,
					"$ZodLiteral",
					0,
					aK,
					"$ZodMap",
					0,
					aZ,
					"$ZodNaN",
					0,
					a1,
					"$ZodNanoID",
					0,
					t0,
					"$ZodNever",
					0,
					az,
					"$ZodNonOptional",
					0,
					aX,
					"$ZodNull",
					0,
					ak,
					"$ZodNullable",
					0,
					aV,
					"$ZodNumber",
					0,
					am,
					"$ZodNumberFormat",
					0,
					ap,
					"$ZodObject",
					0,
					aC,
					"$ZodOptional",
					0,
					aG,
					"$ZodPipe",
					0,
					a4,
					"$ZodPrefault",
					0,
					aH,
					"$ZodPromise",
					0,
					a5,
					"$ZodReadonly",
					0,
					a2,
					"$ZodRecord",
					0,
					aD,
					"$ZodSet",
					0,
					aL,
					"$ZodString",
					0,
					tV,
					"$ZodStringFormat",
					0,
					tW,
					"$ZodSuccess",
					0,
					aY,
					"$ZodSymbol",
					0,
					av,
					"$ZodTemplateLiteral",
					0,
					a3,
					"$ZodTransform",
					0,
					aB,
					"$ZodTuple",
					0,
					aT,
					"$ZodType",
					0,
					tG,
					"$ZodULID",
					0,
					t6,
					"$ZodURL",
					0,
					tQ,
					"$ZodUUID",
					0,
					tH,
					"$ZodUndefined",
					0,
					ab,
					"$ZodUnion",
					0,
					aO,
					"$ZodUnknown",
					0,
					ax,
					"$ZodVoid",
					0,
					aw,
					"$ZodXID",
					0,
					t2,
					"clone",
					() => el,
					"isValidBase64",
					() => an,
					"isValidBase64URL",
					() => ao,
					"isValidJWT",
					() => au,
				],
				71120,
			),
			e.i(71120),
			e.i(57730),
			e.i(19817)
		var it = e.i(76940),
			ia = e.i(19097)
		function ii(e, t, a, i) {
			let n = Math.abs(e),
				r = n % 10,
				o = n % 100
			return o >= 11 && o <= 19 ? i : 1 === r ? t : r >= 2 && r <= 4 ? a : i
		}
		function ir(e, t, a, i) {
			let n = Math.abs(e),
				r = n % 10,
				o = n % 100
			return o >= 11 && o <= 19 ? i : 1 === r ? t : r >= 2 && r <= 4 ? a : i
		}
		e.s([], 87855),
			e.i(87855),
			e.s(
				[
					"ar",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "حرف", verb: "أن يحوي" },
									file: { unit: "بايت", verb: "أن يحوي" },
									array: { unit: "عنصر", verb: "أن يحوي" },
									set: { unit: "عنصر", verb: "أن يحوي" },
								}),
								(t = {
									regex: "مدخل",
									email: "بريد إلكتروني",
									url: "رابط",
									emoji: "إيموجي",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "تاريخ ووقت بمعيار ISO",
									date: "تاريخ بمعيار ISO",
									time: "وقت بمعيار ISO",
									duration: "مدة بمعيار ISO",
									ipv4: "عنوان IPv4",
									ipv6: "عنوان IPv6",
									cidrv4: "مدى عناوين بصيغة IPv4",
									cidrv6: "مدى عناوين بصيغة IPv6",
									base64: "نَص بترميز base64-encoded",
									base64url: "نَص بترميز base64url-encoded",
									json_string: "نَص على هيئة JSON",
									e164: "رقم هاتف بمعيار E.164",
									jwt: "JWT",
									template_literal: "مدخل",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `مدخلات غير مقبولة: يفترض إدخال ${a.expected}، ولكن تم إدخال ${((
												e,
											) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "number"
													case "object":
														if (Array.isArray(e)) return "array"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `مدخلات غير مقبولة: يفترض إدخال ${ec(a.values[0])}`
											return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return ` أكبر من اللازم: يفترض أن تكون ${a.origin ?? "القيمة"} ${t} ${a.maximum.toString()} ${i.unit ?? "عنصر"}`
											return `أكبر من اللازم: يفترض أن تكون ${a.origin ?? "القيمة"} ${t} ${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `أصغر من اللازم: يفترض لـ ${a.origin} أن يكون ${t} ${a.minimum.toString()} ${i.unit}`
											return `أصغر من اللازم: يفترض لـ ${a.origin} أن يكون ${t} ${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `نَص غير مقبول: يجب أن يبدأ بـ "${a.prefix}"`
											if ("ends_with" === a.format)
												return `نَص غير مقبول: يجب أن ينتهي بـ "${a.suffix}"`
											if ("includes" === a.format)
												return `نَص غير مقبول: يجب أن يتضمَّن "${a.includes}"`
											if ("regex" === a.format)
												return `نَص غير مقبول: يجب أن يطابق النمط ${a.pattern}`
											return `${t[a.format] ?? a.format} غير مقبول`
										case "not_multiple_of":
											return `رقم غير مقبول: يجب أن يكون من مضاعفات ${a.divisor}`
										case "unrecognized_keys":
											return `معرف${a.keys.length > 1 ? "ات" : ""} غريب${a.keys.length > 1 ? "ة" : ""}: ${q(a.keys, "، ")}`
										case "invalid_key":
											return `معرف غير مقبول في ${a.origin}`
										case "invalid_union":
										default:
											return "مدخل غير مقبول"
										case "invalid_element":
											return `مدخل غير مقبول في ${a.origin}`
									}
								}),
						}
					},
					"az",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "simvol", verb: "olmalıdır" },
									file: { unit: "bayt", verb: "olmalıdır" },
									array: { unit: "element", verb: "olmalıdır" },
									set: { unit: "element", verb: "olmalıdır" },
								}),
								(t = {
									regex: "input",
									email: "email address",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO datetime",
									date: "ISO date",
									time: "ISO time",
									duration: "ISO duration",
									ipv4: "IPv4 address",
									ipv6: "IPv6 address",
									cidrv4: "IPv4 range",
									cidrv6: "IPv6 range",
									base64: "base64-encoded string",
									base64url: "base64url-encoded string",
									json_string: "JSON string",
									e164: "E.164 number",
									jwt: "JWT",
									template_literal: "input",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Yanlış dəyər: g\xf6zlənilən ${a.expected}, daxil olan ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "number"
													case "object":
														if (Array.isArray(e)) return "array"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Yanlış dəyər: g\xf6zlənilən ${ec(a.values[0])}`
											return `Yanlış se\xe7im: aşağıdakılardan biri olmalıdır: ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${a.origin ?? "dəyər"} ${t}${a.maximum.toString()} ${i.unit ?? "element"}`
											return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${a.origin ?? "dəyər"} ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `\xc7ox ki\xe7ik: g\xf6zlənilən ${a.origin} ${t}${a.minimum.toString()} ${i.unit}`
											return `\xc7ox ki\xe7ik: g\xf6zlənilən ${a.origin} ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Yanlış mətn: "${a.prefix}" ilə başlamalıdır`
											if ("ends_with" === a.format)
												return `Yanlış mətn: "${a.suffix}" ilə bitməlidir`
											if ("includes" === a.format)
												return `Yanlış mətn: "${a.includes}" daxil olmalıdır`
											if ("regex" === a.format)
												return `Yanlış mətn: ${a.pattern} şablonuna uyğun olmalıdır`
											return `Yanlış ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `Yanlış ədəd: ${a.divisor} ilə b\xf6l\xfcnə bilən olmalıdır`
										case "unrecognized_keys":
											return `Tanınmayan a\xe7ar${a.keys.length > 1 ? "lar" : ""}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `${a.origin} daxilində yanlış a\xe7ar`
										case "invalid_union":
											return "Yanlış dəyər"
										case "invalid_element":
											return `${a.origin} daxilində yanlış dəyər`
										default:
											return `Yanlış dəyər`
									}
								}),
						}
					},
					"be",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: { one: "сімвал", few: "сімвалы", many: "сімвалаў" }, verb: "мець" },
									array: {
										unit: { one: "элемент", few: "элементы", many: "элементаў" },
										verb: "мець",
									},
									set: { unit: { one: "элемент", few: "элементы", many: "элементаў" }, verb: "мець" },
									file: { unit: { one: "байт", few: "байты", many: "байтаў" }, verb: "мець" },
								}),
								(t = {
									regex: "увод",
									email: "email адрас",
									url: "URL",
									emoji: "эмодзі",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO дата і час",
									date: "ISO дата",
									time: "ISO час",
									duration: "ISO працягласць",
									ipv4: "IPv4 адрас",
									ipv6: "IPv6 адрас",
									cidrv4: "IPv4 дыяпазон",
									cidrv6: "IPv6 дыяпазон",
									base64: "радок у фармаце base64",
									base64url: "радок у фармаце base64url",
									json_string: "JSON радок",
									e164: "нумар E.164",
									jwt: "JWT",
									template_literal: "увод",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Няправільны ўвод: чакаўся ${a.expected}, атрымана ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "лік"
													case "object":
														if (Array.isArray(e)) return "масіў"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Няправільны ўвод: чакалася ${ec(a.values[0])}`
											return `Няправільны варыянт: чакаўся адзін з ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i) {
												let e = ii(Number(a.maximum), i.unit.one, i.unit.few, i.unit.many)
												return `Занадта вялікі: чакалася, што ${a.origin ?? "значэнне"} павінна ${i.verb} ${t}${a.maximum.toString()} ${e}`
											}
											return `Занадта вялікі: чакалася, што ${a.origin ?? "значэнне"} павінна быць ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i) {
												let e = ii(Number(a.minimum), i.unit.one, i.unit.few, i.unit.many)
												return `Занадта малы: чакалася, што ${a.origin} павінна ${i.verb} ${t}${a.minimum.toString()} ${e}`
											}
											return `Занадта малы: чакалася, што ${a.origin} павінна быць ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Няправільны радок: павінен пачынацца з "${a.prefix}"`
											if ("ends_with" === a.format)
												return `Няправільны радок: павінен заканчвацца на "${a.suffix}"`
											if ("includes" === a.format)
												return `Няправільны радок: павінен змяшчаць "${a.includes}"`
											if ("regex" === a.format)
												return `Няправільны радок: павінен адпавядаць шаблону ${a.pattern}`
											return `Няправільны ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `Няправільны лік: павінен быць кратным ${a.divisor}`
										case "unrecognized_keys":
											return `Нераспазнаны ${a.keys.length > 1 ? "ключы" : "ключ"}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Няправільны ключ у ${a.origin}`
										case "invalid_union":
											return "Няправільны ўвод"
										case "invalid_element":
											return `Няправільнае значэнне ў ${a.origin}`
										default:
											return `Няправільны ўвод`
									}
								}),
						}
					},
					"ca",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "caràcters", verb: "contenir" },
									file: { unit: "bytes", verb: "contenir" },
									array: { unit: "elements", verb: "contenir" },
									set: { unit: "elements", verb: "contenir" },
								}),
								(t = {
									regex: "entrada",
									email: "adreça electrònica",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "data i hora ISO",
									date: "data ISO",
									time: "hora ISO",
									duration: "durada ISO",
									ipv4: "adreça IPv4",
									ipv6: "adreça IPv6",
									cidrv4: "rang IPv4",
									cidrv6: "rang IPv6",
									base64: "cadena codificada en base64",
									base64url: "cadena codificada en base64url",
									json_string: "cadena JSON",
									e164: "número E.164",
									jwt: "JWT",
									template_literal: "entrada",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Tipus inv\xe0lid: s'esperava ${a.expected}, s'ha rebut ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "number"
													case "object":
														if (Array.isArray(e)) return "array"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Valor inv\xe0lid: s'esperava ${ec(a.values[0])}`
											return `Opci\xf3 inv\xe0lida: s'esperava una de ${q(a.values, " o ")}`
										case "too_big": {
											let t = a.inclusive ? "com a màxim" : "menys de",
												i = e[a.origin] ?? null
											if (i)
												return `Massa gran: s'esperava que ${a.origin ?? "el valor"} contingu\xe9s ${t} ${a.maximum.toString()} ${i.unit ?? "elements"}`
											return `Massa gran: s'esperava que ${a.origin ?? "el valor"} fos ${t} ${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? "com a mínim" : "més de",
												i = e[a.origin] ?? null
											if (i)
												return `Massa petit: s'esperava que ${a.origin} contingu\xe9s ${t} ${a.minimum.toString()} ${i.unit}`
											return `Massa petit: s'esperava que ${a.origin} fos ${t} ${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Format inv\xe0lid: ha de comen\xe7ar amb "${a.prefix}"`
											if ("ends_with" === a.format)
												return `Format inv\xe0lid: ha d'acabar amb "${a.suffix}"`
											if ("includes" === a.format)
												return `Format inv\xe0lid: ha d'incloure "${a.includes}"`
											if ("regex" === a.format)
												return `Format inv\xe0lid: ha de coincidir amb el patr\xf3 ${a.pattern}`
											return `Format inv\xe0lid per a ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `N\xfamero inv\xe0lid: ha de ser m\xfaltiple de ${a.divisor}`
										case "unrecognized_keys":
											return `Clau${a.keys.length > 1 ? "s" : ""} no reconeguda${a.keys.length > 1 ? "s" : ""}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Clau inv\xe0lida a ${a.origin}`
										case "invalid_union":
											return "Entrada invàlida"
										case "invalid_element":
											return `Element inv\xe0lid a ${a.origin}`
										default:
											return `Entrada inv\xe0lida`
									}
								}),
						}
					},
					"cs",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "znaků", verb: "mít" },
									file: { unit: "bajtů", verb: "mít" },
									array: { unit: "prvků", verb: "mít" },
									set: { unit: "prvků", verb: "mít" },
								}),
								(t = {
									regex: "regulární výraz",
									email: "e-mailová adresa",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "datum a čas ve formátu ISO",
									date: "datum ve formátu ISO",
									time: "čas ve formátu ISO",
									duration: "doba trvání ISO",
									ipv4: "IPv4 adresa",
									ipv6: "IPv6 adresa",
									cidrv4: "rozsah IPv4",
									cidrv6: "rozsah IPv6",
									base64: "řetězec zakódovaný ve formátu base64",
									base64url: "řetězec zakódovaný ve formátu base64url",
									json_string: "řetězec ve formátu JSON",
									e164: "číslo E.164",
									jwt: "JWT",
									template_literal: "vstup",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Neplatn\xfd vstup: oček\xe1v\xe1no ${a.expected}, obdrženo ${((
												e,
											) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "číslo"
													case "string":
														return "řetězec"
													case "boolean":
														return "boolean"
													case "bigint":
														return "bigint"
													case "function":
														return "funkce"
													case "symbol":
														return "symbol"
													case "undefined":
														return "undefined"
													case "object":
														if (Array.isArray(e)) return "pole"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Neplatn\xfd vstup: oček\xe1v\xe1no ${ec(a.values[0])}`
											return `Neplatn\xe1 možnost: oček\xe1v\xe1na jedna z hodnot ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `Hodnota je př\xedliš velk\xe1: ${a.origin ?? "hodnota"} mus\xed m\xedt ${t}${a.maximum.toString()} ${i.unit ?? "prvků"}`
											return `Hodnota je př\xedliš velk\xe1: ${a.origin ?? "hodnota"} mus\xed b\xfdt ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `Hodnota je př\xedliš mal\xe1: ${a.origin ?? "hodnota"} mus\xed m\xedt ${t}${a.minimum.toString()} ${i.unit ?? "prvků"}`
											return `Hodnota je př\xedliš mal\xe1: ${a.origin ?? "hodnota"} mus\xed b\xfdt ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Neplatn\xfd řetězec: mus\xed zač\xednat na "${a.prefix}"`
											if ("ends_with" === a.format)
												return `Neplatn\xfd řetězec: mus\xed končit na "${a.suffix}"`
											if ("includes" === a.format)
												return `Neplatn\xfd řetězec: mus\xed obsahovat "${a.includes}"`
											if ("regex" === a.format)
												return `Neplatn\xfd řetězec: mus\xed odpov\xeddat vzoru ${a.pattern}`
											return `Neplatn\xfd form\xe1t ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `Neplatn\xe9 č\xedslo: mus\xed b\xfdt n\xe1sobkem ${a.divisor}`
										case "unrecognized_keys":
											return `Nezn\xe1m\xe9 kl\xedče: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Neplatn\xfd kl\xedč v ${a.origin}`
										case "invalid_union":
											return "Neplatný vstup"
										case "invalid_element":
											return `Neplatn\xe1 hodnota v ${a.origin}`
										default:
											return `Neplatn\xfd vstup`
									}
								}),
						}
					},
					"de",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "Zeichen", verb: "zu haben" },
									file: { unit: "Bytes", verb: "zu haben" },
									array: { unit: "Elemente", verb: "zu haben" },
									set: { unit: "Elemente", verb: "zu haben" },
								}),
								(t = {
									regex: "Eingabe",
									email: "E-Mail-Adresse",
									url: "URL",
									emoji: "Emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO-Datum und -Uhrzeit",
									date: "ISO-Datum",
									time: "ISO-Uhrzeit",
									duration: "ISO-Dauer",
									ipv4: "IPv4-Adresse",
									ipv6: "IPv6-Adresse",
									cidrv4: "IPv4-Bereich",
									cidrv6: "IPv6-Bereich",
									base64: "Base64-codierter String",
									base64url: "Base64-URL-codierter String",
									json_string: "JSON-String",
									e164: "E.164-Nummer",
									jwt: "JWT",
									template_literal: "Eingabe",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Ung\xfcltige Eingabe: erwartet ${a.expected}, erhalten ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "Zahl"
													case "object":
														if (Array.isArray(e)) return "Array"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Ung\xfcltige Eingabe: erwartet ${ec(a.values[0])}`
											return `Ung\xfcltige Option: erwartet eine von ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `Zu gro\xdf: erwartet, dass ${a.origin ?? "Wert"} ${t}${a.maximum.toString()} ${i.unit ?? "Elemente"} hat`
											return `Zu gro\xdf: erwartet, dass ${a.origin ?? "Wert"} ${t}${a.maximum.toString()} ist`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `Zu klein: erwartet, dass ${a.origin} ${t}${a.minimum.toString()} ${i.unit} hat`
											return `Zu klein: erwartet, dass ${a.origin} ${t}${a.minimum.toString()} ist`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Ung\xfcltiger String: muss mit "${a.prefix}" beginnen`
											if ("ends_with" === a.format)
												return `Ung\xfcltiger String: muss mit "${a.suffix}" enden`
											if ("includes" === a.format)
												return `Ung\xfcltiger String: muss "${a.includes}" enthalten`
											if ("regex" === a.format)
												return `Ung\xfcltiger String: muss dem Muster ${a.pattern} entsprechen`
											return `Ung\xfcltig: ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `Ung\xfcltige Zahl: muss ein Vielfaches von ${a.divisor} sein`
										case "unrecognized_keys":
											return `${a.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Ung\xfcltiger Schl\xfcssel in ${a.origin}`
										case "invalid_union":
											return "Ungültige Eingabe"
										case "invalid_element":
											return `Ung\xfcltiger Wert in ${a.origin}`
										default:
											return `Ung\xfcltige Eingabe`
									}
								}),
						}
					},
					"en",
					0,
					eN,
					"eo",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "karaktrojn", verb: "havi" },
									file: { unit: "bajtojn", verb: "havi" },
									array: { unit: "elementojn", verb: "havi" },
									set: { unit: "elementojn", verb: "havi" },
								}),
								(t = {
									regex: "enigo",
									email: "retadreso",
									url: "URL",
									emoji: "emoĝio",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO-datotempo",
									date: "ISO-dato",
									time: "ISO-tempo",
									duration: "ISO-daŭro",
									ipv4: "IPv4-adreso",
									ipv6: "IPv6-adreso",
									cidrv4: "IPv4-rango",
									cidrv6: "IPv6-rango",
									base64: "64-ume kodita karaktraro",
									base64url: "URL-64-ume kodita karaktraro",
									json_string: "JSON-karaktraro",
									e164: "E.164-nombro",
									jwt: "JWT",
									template_literal: "enigo",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Nevalida enigo: atendiĝis ${a.expected}, riceviĝis ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "nombro"
													case "object":
														if (Array.isArray(e)) return "tabelo"
														if (null === e) return "senvalora"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Nevalida enigo: atendiĝis ${ec(a.values[0])}`
											return `Nevalida opcio: atendiĝis unu el ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `Tro granda: atendiĝis ke ${a.origin ?? "valoro"} havu ${t}${a.maximum.toString()} ${i.unit ?? "elementojn"}`
											return `Tro granda: atendiĝis ke ${a.origin ?? "valoro"} havu ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `Tro malgranda: atendiĝis ke ${a.origin} havu ${t}${a.minimum.toString()} ${i.unit}`
											return `Tro malgranda: atendiĝis ke ${a.origin} estu ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Nevalida karaktraro: devas komenciĝi per "${a.prefix}"`
											if ("ends_with" === a.format)
												return `Nevalida karaktraro: devas finiĝi per "${a.suffix}"`
											if ("includes" === a.format)
												return `Nevalida karaktraro: devas inkluzivi "${a.includes}"`
											if ("regex" === a.format)
												return `Nevalida karaktraro: devas kongrui kun la modelo ${a.pattern}`
											return `Nevalida ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `Nevalida nombro: devas esti oblo de ${a.divisor}`
										case "unrecognized_keys":
											return `Nekonata${a.keys.length > 1 ? "j" : ""} ŝlosilo${a.keys.length > 1 ? "j" : ""}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Nevalida ŝlosilo en ${a.origin}`
										case "invalid_union":
										default:
											return "Nevalida enigo"
										case "invalid_element":
											return `Nevalida valoro en ${a.origin}`
									}
								}),
						}
					},
					"es",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "caracteres", verb: "tener" },
									file: { unit: "bytes", verb: "tener" },
									array: { unit: "elementos", verb: "tener" },
									set: { unit: "elementos", verb: "tener" },
								}),
								(t = {
									regex: "entrada",
									email: "dirección de correo electrónico",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "fecha y hora ISO",
									date: "fecha ISO",
									time: "hora ISO",
									duration: "duración ISO",
									ipv4: "dirección IPv4",
									ipv6: "dirección IPv6",
									cidrv4: "rango IPv4",
									cidrv6: "rango IPv6",
									base64: "cadena codificada en base64",
									base64url: "URL codificada en base64",
									json_string: "cadena JSON",
									e164: "número E.164",
									jwt: "JWT",
									template_literal: "entrada",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Entrada inv\xe1lida: se esperaba ${a.expected}, recibido ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "número"
													case "object":
														if (Array.isArray(e)) return "arreglo"
														if (null === e) return "nulo"
														if (Object.getPrototypeOf(e) !== Object.prototype)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Entrada inv\xe1lida: se esperaba ${ec(a.values[0])}`
											return `Opci\xf3n inv\xe1lida: se esperaba una de ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `Demasiado grande: se esperaba que ${a.origin ?? "valor"} tuviera ${t}${a.maximum.toString()} ${i.unit ?? "elementos"}`
											return `Demasiado grande: se esperaba que ${a.origin ?? "valor"} fuera ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `Demasiado peque\xf1o: se esperaba que ${a.origin} tuviera ${t}${a.minimum.toString()} ${i.unit}`
											return `Demasiado peque\xf1o: se esperaba que ${a.origin} fuera ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Cadena inv\xe1lida: debe comenzar con "${a.prefix}"`
											if ("ends_with" === a.format)
												return `Cadena inv\xe1lida: debe terminar en "${a.suffix}"`
											if ("includes" === a.format)
												return `Cadena inv\xe1lida: debe incluir "${a.includes}"`
											if ("regex" === a.format)
												return `Cadena inv\xe1lida: debe coincidir con el patr\xf3n ${a.pattern}`
											return `Inv\xe1lido ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `N\xfamero inv\xe1lido: debe ser m\xfaltiplo de ${a.divisor}`
										case "unrecognized_keys":
											return `Llave${a.keys.length > 1 ? "s" : ""} desconocida${a.keys.length > 1 ? "s" : ""}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Llave inv\xe1lida en ${a.origin}`
										case "invalid_union":
											return "Entrada inválida"
										case "invalid_element":
											return `Valor inv\xe1lido en ${a.origin}`
										default:
											return `Entrada inv\xe1lida`
									}
								}),
						}
					},
					"fa",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "کاراکتر", verb: "داشته باشد" },
									file: { unit: "بایت", verb: "داشته باشد" },
									array: { unit: "آیتم", verb: "داشته باشد" },
									set: { unit: "آیتم", verb: "داشته باشد" },
								}),
								(t = {
									regex: "ورودی",
									email: "آدرس ایمیل",
									url: "URL",
									emoji: "ایموجی",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "تاریخ و زمان ایزو",
									date: "تاریخ ایزو",
									time: "زمان ایزو",
									duration: "مدت زمان ایزو",
									ipv4: "IPv4 آدرس",
									ipv6: "IPv6 آدرس",
									cidrv4: "IPv4 دامنه",
									cidrv6: "IPv6 دامنه",
									base64: "base64-encoded رشته",
									base64url: "base64url-encoded رشته",
									json_string: "JSON رشته",
									e164: "E.164 عدد",
									jwt: "JWT",
									template_literal: "ورودی",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `ورودی نامعتبر: می‌بایست ${a.expected} می‌بود، ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "عدد"
													case "object":
														if (Array.isArray(e)) return "آرایه"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)} دریافت شد`
										case "invalid_value":
											if (1 === a.values.length)
												return `ورودی نامعتبر: می‌بایست ${ec(a.values[0])} می‌بود`
											return `گزینه نامعتبر: می‌بایست یکی از ${q(a.values, "|")} می‌بود`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `خیلی بزرگ: ${a.origin ?? "مقدار"} باید ${t}${a.maximum.toString()} ${i.unit ?? "عنصر"} باشد`
											return `خیلی بزرگ: ${a.origin ?? "مقدار"} باید ${t}${a.maximum.toString()} باشد`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `خیلی کوچک: ${a.origin} باید ${t}${a.minimum.toString()} ${i.unit} باشد`
											return `خیلی کوچک: ${a.origin} باید ${t}${a.minimum.toString()} باشد`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `رشته نامعتبر: باید با "${a.prefix}" شروع شود`
											if ("ends_with" === a.format)
												return `رشته نامعتبر: باید با "${a.suffix}" تمام شود`
											if ("includes" === a.format)
												return `رشته نامعتبر: باید شامل "${a.includes}" باشد`
											if ("regex" === a.format)
												return `رشته نامعتبر: باید با الگوی ${a.pattern} مطابقت داشته باشد`
											return `${t[a.format] ?? a.format} نامعتبر`
										case "not_multiple_of":
											return `عدد نامعتبر: باید مضرب ${a.divisor} باشد`
										case "unrecognized_keys":
											return `کلید${a.keys.length > 1 ? "های" : ""} ناشناس: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `کلید ناشناس در ${a.origin}`
										case "invalid_union":
										default:
											return `ورودی نامعتبر`
										case "invalid_element":
											return `مقدار نامعتبر در ${a.origin}`
									}
								}),
						}
					},
					"fi",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "merkkiä", subject: "merkkijonon" },
									file: { unit: "tavua", subject: "tiedoston" },
									array: { unit: "alkiota", subject: "listan" },
									set: { unit: "alkiota", subject: "joukon" },
									number: { unit: "", subject: "luvun" },
									bigint: { unit: "", subject: "suuren kokonaisluvun" },
									int: { unit: "", subject: "kokonaisluvun" },
									date: { unit: "", subject: "päivämäärän" },
								}),
								(t = {
									regex: "säännöllinen lauseke",
									email: "sähköpostiosoite",
									url: "URL-osoite",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO-aikaleima",
									date: "ISO-päivämäärä",
									time: "ISO-aika",
									duration: "ISO-kesto",
									ipv4: "IPv4-osoite",
									ipv6: "IPv6-osoite",
									cidrv4: "IPv4-alue",
									cidrv6: "IPv6-alue",
									base64: "base64-koodattu merkkijono",
									base64url: "base64url-koodattu merkkijono",
									json_string: "JSON-merkkijono",
									e164: "E.164-luku",
									jwt: "JWT",
									template_literal: "templaattimerkkijono",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Virheellinen tyyppi: odotettiin ${a.expected}, oli ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "number"
													case "object":
														if (Array.isArray(e)) return "array"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Virheellinen sy\xf6te: t\xe4ytyy olla ${ec(a.values[0])}`
											return `Virheellinen valinta: t\xe4ytyy olla yksi seuraavista: ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `Liian suuri: ${i.subject} t\xe4ytyy olla ${t}${a.maximum.toString()} ${i.unit}`.trim()
											return `Liian suuri: arvon t\xe4ytyy olla ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `Liian pieni: ${i.subject} t\xe4ytyy olla ${t}${a.minimum.toString()} ${i.unit}`.trim()
											return `Liian pieni: arvon t\xe4ytyy olla ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Virheellinen sy\xf6te: t\xe4ytyy alkaa "${a.prefix}"`
											if ("ends_with" === a.format)
												return `Virheellinen sy\xf6te: t\xe4ytyy loppua "${a.suffix}"`
											if ("includes" === a.format)
												return `Virheellinen sy\xf6te: t\xe4ytyy sis\xe4lt\xe4\xe4 "${a.includes}"`
											if ("regex" === a.format)
												return `Virheellinen sy\xf6te: t\xe4ytyy vastata s\xe4\xe4nn\xf6llist\xe4 lauseketta ${a.pattern}`
											return `Virheellinen ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `Virheellinen luku: t\xe4ytyy olla luvun ${a.divisor} monikerta`
										case "unrecognized_keys":
											return `${a.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return "Virheellinen avain tietueessa"
										case "invalid_union":
											return "Virheellinen unioni"
										case "invalid_element":
											return "Virheellinen arvo joukossa"
										default:
											return `Virheellinen sy\xf6te`
									}
								}),
						}
					},
					"fr",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "caractères", verb: "avoir" },
									file: { unit: "octets", verb: "avoir" },
									array: { unit: "éléments", verb: "avoir" },
									set: { unit: "éléments", verb: "avoir" },
								}),
								(t = {
									regex: "entrée",
									email: "adresse e-mail",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "date et heure ISO",
									date: "date ISO",
									time: "heure ISO",
									duration: "durée ISO",
									ipv4: "adresse IPv4",
									ipv6: "adresse IPv6",
									cidrv4: "plage IPv4",
									cidrv6: "plage IPv6",
									base64: "chaîne encodée en base64",
									base64url: "chaîne encodée en base64url",
									json_string: "chaîne JSON",
									e164: "numéro E.164",
									jwt: "JWT",
									template_literal: "entrée",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Entr\xe9e invalide : ${a.expected} attendu, ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "nombre"
													case "object":
														if (Array.isArray(e)) return "tableau"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)} re\xe7u`
										case "invalid_value":
											if (1 === a.values.length)
												return `Entr\xe9e invalide : ${ec(a.values[0])} attendu`
											return `Option invalide : une valeur parmi ${q(a.values, "|")} attendue`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `Trop grand : ${a.origin ?? "valeur"} doit ${i.verb} ${t}${a.maximum.toString()} ${i.unit ?? "élément(s)"}`
											return `Trop grand : ${a.origin ?? "valeur"} doit \xeatre ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `Trop petit : ${a.origin} doit ${i.verb} ${t}${a.minimum.toString()} ${i.unit}`
											return `Trop petit : ${a.origin} doit \xeatre ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Cha\xeene invalide : doit commencer par "${a.prefix}"`
											if ("ends_with" === a.format)
												return `Cha\xeene invalide : doit se terminer par "${a.suffix}"`
											if ("includes" === a.format)
												return `Cha\xeene invalide : doit inclure "${a.includes}"`
											if ("regex" === a.format)
												return `Cha\xeene invalide : doit correspondre au mod\xe8le ${a.pattern}`
											return `${t[a.format] ?? a.format} invalide`
										case "not_multiple_of":
											return `Nombre invalide : doit \xeatre un multiple de ${a.divisor}`
										case "unrecognized_keys":
											return `Cl\xe9${a.keys.length > 1 ? "s" : ""} non reconnue${a.keys.length > 1 ? "s" : ""} : ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Cl\xe9 invalide dans ${a.origin}`
										case "invalid_union":
											return "Entrée invalide"
										case "invalid_element":
											return `Valeur invalide dans ${a.origin}`
										default:
											return `Entr\xe9e invalide`
									}
								}),
						}
					},
					"frCA",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "caractères", verb: "avoir" },
									file: { unit: "octets", verb: "avoir" },
									array: { unit: "éléments", verb: "avoir" },
									set: { unit: "éléments", verb: "avoir" },
								}),
								(t = {
									regex: "entrée",
									email: "adresse courriel",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "date-heure ISO",
									date: "date ISO",
									time: "heure ISO",
									duration: "durée ISO",
									ipv4: "adresse IPv4",
									ipv6: "adresse IPv6",
									cidrv4: "plage IPv4",
									cidrv6: "plage IPv6",
									base64: "chaîne encodée en base64",
									base64url: "chaîne encodée en base64url",
									json_string: "chaîne JSON",
									e164: "numéro E.164",
									jwt: "JWT",
									template_literal: "entrée",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Entr\xe9e invalide : attendu ${a.expected}, re\xe7u ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "number"
													case "object":
														if (Array.isArray(e)) return "array"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Entr\xe9e invalide : attendu ${ec(a.values[0])}`
											return `Option invalide : attendu l'une des valeurs suivantes ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "≤" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `Trop grand : attendu que ${a.origin ?? "la valeur"} ait ${t}${a.maximum.toString()} ${i.unit}`
											return `Trop grand : attendu que ${a.origin ?? "la valeur"} soit ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? "≥" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `Trop petit : attendu que ${a.origin} ait ${t}${a.minimum.toString()} ${i.unit}`
											return `Trop petit : attendu que ${a.origin} soit ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Cha\xeene invalide : doit commencer par "${a.prefix}"`
											if ("ends_with" === a.format)
												return `Cha\xeene invalide : doit se terminer par "${a.suffix}"`
											if ("includes" === a.format)
												return `Cha\xeene invalide : doit inclure "${a.includes}"`
											if ("regex" === a.format)
												return `Cha\xeene invalide : doit correspondre au motif ${a.pattern}`
											return `${t[a.format] ?? a.format} invalide`
										case "not_multiple_of":
											return `Nombre invalide : doit \xeatre un multiple de ${a.divisor}`
										case "unrecognized_keys":
											return `Cl\xe9${a.keys.length > 1 ? "s" : ""} non reconnue${a.keys.length > 1 ? "s" : ""} : ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Cl\xe9 invalide dans ${a.origin}`
										case "invalid_union":
											return "Entrée invalide"
										case "invalid_element":
											return `Valeur invalide dans ${a.origin}`
										default:
											return `Entr\xe9e invalide`
									}
								}),
						}
					},
					"he",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "אותיות", verb: "לכלול" },
									file: { unit: "בייטים", verb: "לכלול" },
									array: { unit: "פריטים", verb: "לכלול" },
									set: { unit: "פריטים", verb: "לכלול" },
								}),
								(t = {
									regex: "קלט",
									email: "כתובת אימייל",
									url: "כתובת רשת",
									emoji: "אימוג'י",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "תאריך וזמן ISO",
									date: "תאריך ISO",
									time: "זמן ISO",
									duration: "משך זמן ISO",
									ipv4: "כתובת IPv4",
									ipv6: "כתובת IPv6",
									cidrv4: "טווח IPv4",
									cidrv6: "טווח IPv6",
									base64: "מחרוזת בבסיס 64",
									base64url: "מחרוזת בבסיס 64 לכתובות רשת",
									json_string: "מחרוזת JSON",
									e164: "מספר E.164",
									jwt: "JWT",
									template_literal: "קלט",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `קלט לא תקין: צריך ${a.expected}, התקבל ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "number"
													case "object":
														if (Array.isArray(e)) return "array"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length) return `קלט לא תקין: צריך ${ec(a.values[0])}`
											return `קלט לא תקין: צריך אחת מהאפשרויות  ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `גדול מדי: ${a.origin ?? "value"} צריך להיות ${t}${a.maximum.toString()} ${i.unit ?? "elements"}`
											return `גדול מדי: ${a.origin ?? "value"} צריך להיות ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `קטן מדי: ${a.origin} צריך להיות ${t}${a.minimum.toString()} ${i.unit}`
											return `קטן מדי: ${a.origin} צריך להיות ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `מחרוזת לא תקינה: חייבת להתחיל ב"${a.prefix}"`
											if ("ends_with" === a.format)
												return `מחרוזת לא תקינה: חייבת להסתיים ב "${a.suffix}"`
											if ("includes" === a.format)
												return `מחרוזת לא תקינה: חייבת לכלול "${a.includes}"`
											if ("regex" === a.format)
												return `מחרוזת לא תקינה: חייבת להתאים לתבנית ${a.pattern}`
											return `${t[a.format] ?? a.format} לא תקין`
										case "not_multiple_of":
											return `מספר לא תקין: חייב להיות מכפלה של ${a.divisor}`
										case "unrecognized_keys":
											return `מפתח${a.keys.length > 1 ? "ות" : ""} לא מזוה${a.keys.length > 1 ? "ים" : "ה"}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `מפתח לא תקין ב${a.origin}`
										case "invalid_union":
											return "קלט לא תקין"
										case "invalid_element":
											return `ערך לא תקין ב${a.origin}`
										default:
											return `קלט לא תקין`
									}
								}),
						}
					},
					"hu",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "karakter", verb: "legyen" },
									file: { unit: "byte", verb: "legyen" },
									array: { unit: "elem", verb: "legyen" },
									set: { unit: "elem", verb: "legyen" },
								}),
								(t = {
									regex: "bemenet",
									email: "email cím",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO időbélyeg",
									date: "ISO dátum",
									time: "ISO idő",
									duration: "ISO időintervallum",
									ipv4: "IPv4 cím",
									ipv6: "IPv6 cím",
									cidrv4: "IPv4 tartomány",
									cidrv6: "IPv6 tartomány",
									base64: "base64-kódolt string",
									base64url: "base64url-kódolt string",
									json_string: "JSON string",
									e164: "E.164 szám",
									jwt: "JWT",
									template_literal: "bemenet",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${a.expected}, a kapott \xe9rt\xe9k ${((
												e,
											) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "szám"
													case "object":
														if (Array.isArray(e)) return "tömb"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${ec(a.values[0])}`
											return `\xc9rv\xe9nytelen opci\xf3: valamelyik \xe9rt\xe9k v\xe1rt ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `T\xfal nagy: ${a.origin ?? "érték"} m\xe9rete t\xfal nagy ${t}${a.maximum.toString()} ${i.unit ?? "elem"}`
											return `T\xfal nagy: a bemeneti \xe9rt\xe9k ${a.origin ?? "érték"} t\xfal nagy: ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${a.origin} m\xe9rete t\xfal kicsi ${t}${a.minimum.toString()} ${i.unit}`
											return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${a.origin} t\xfal kicsi ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `\xc9rv\xe9nytelen string: "${a.prefix}" \xe9rt\xe9kkel kell kezdődnie`
											if ("ends_with" === a.format)
												return `\xc9rv\xe9nytelen string: "${a.suffix}" \xe9rt\xe9kkel kell v\xe9gződnie`
											if ("includes" === a.format)
												return `\xc9rv\xe9nytelen string: "${a.includes}" \xe9rt\xe9ket kell tartalmaznia`
											if ("regex" === a.format)
												return `\xc9rv\xe9nytelen string: ${a.pattern} mint\xe1nak kell megfelelnie`
											return `\xc9rv\xe9nytelen ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `\xc9rv\xe9nytelen sz\xe1m: ${a.divisor} t\xf6bbsz\xf6r\xf6s\xe9nek kell lennie`
										case "unrecognized_keys":
											return `Ismeretlen kulcs${a.keys.length > 1 ? "s" : ""}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `\xc9rv\xe9nytelen kulcs ${a.origin}`
										case "invalid_union":
											return "Érvénytelen bemenet"
										case "invalid_element":
											return `\xc9rv\xe9nytelen \xe9rt\xe9k: ${a.origin}`
										default:
											return `\xc9rv\xe9nytelen bemenet`
									}
								}),
						}
					},
					"id",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "karakter", verb: "memiliki" },
									file: { unit: "byte", verb: "memiliki" },
									array: { unit: "item", verb: "memiliki" },
									set: { unit: "item", verb: "memiliki" },
								}),
								(t = {
									regex: "input",
									email: "alamat email",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "tanggal dan waktu format ISO",
									date: "tanggal format ISO",
									time: "jam format ISO",
									duration: "durasi format ISO",
									ipv4: "alamat IPv4",
									ipv6: "alamat IPv6",
									cidrv4: "rentang alamat IPv4",
									cidrv6: "rentang alamat IPv6",
									base64: "string dengan enkode base64",
									base64url: "string dengan enkode base64url",
									json_string: "string JSON",
									e164: "angka E.164",
									jwt: "JWT",
									template_literal: "input",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Input tidak valid: diharapkan ${a.expected}, diterima ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "number"
													case "object":
														if (Array.isArray(e)) return "array"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Input tidak valid: diharapkan ${ec(a.values[0])}`
											return `Pilihan tidak valid: diharapkan salah satu dari ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `Terlalu besar: diharapkan ${a.origin ?? "value"} memiliki ${t}${a.maximum.toString()} ${i.unit ?? "elemen"}`
											return `Terlalu besar: diharapkan ${a.origin ?? "value"} menjadi ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `Terlalu kecil: diharapkan ${a.origin} memiliki ${t}${a.minimum.toString()} ${i.unit}`
											return `Terlalu kecil: diharapkan ${a.origin} menjadi ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `String tidak valid: harus dimulai dengan "${a.prefix}"`
											if ("ends_with" === a.format)
												return `String tidak valid: harus berakhir dengan "${a.suffix}"`
											if ("includes" === a.format)
												return `String tidak valid: harus menyertakan "${a.includes}"`
											if ("regex" === a.format)
												return `String tidak valid: harus sesuai pola ${a.pattern}`
											return `${t[a.format] ?? a.format} tidak valid`
										case "not_multiple_of":
											return `Angka tidak valid: harus kelipatan dari ${a.divisor}`
										case "unrecognized_keys":
											return `Kunci tidak dikenali ${a.keys.length > 1 ? "s" : ""}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Kunci tidak valid di ${a.origin}`
										case "invalid_union":
										default:
											return "Input tidak valid"
										case "invalid_element":
											return `Nilai tidak valid di ${a.origin}`
									}
								}),
						}
					},
					"it",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "caratteri", verb: "avere" },
									file: { unit: "byte", verb: "avere" },
									array: { unit: "elementi", verb: "avere" },
									set: { unit: "elementi", verb: "avere" },
								}),
								(t = {
									regex: "input",
									email: "indirizzo email",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "data e ora ISO",
									date: "data ISO",
									time: "ora ISO",
									duration: "durata ISO",
									ipv4: "indirizzo IPv4",
									ipv6: "indirizzo IPv6",
									cidrv4: "intervallo IPv4",
									cidrv6: "intervallo IPv6",
									base64: "stringa codificata in base64",
									base64url: "URL codificata in base64",
									json_string: "stringa JSON",
									e164: "numero E.164",
									jwt: "JWT",
									template_literal: "input",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Input non valido: atteso ${a.expected}, ricevuto ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "numero"
													case "object":
														if (Array.isArray(e)) return "vettore"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Input non valido: atteso ${ec(a.values[0])}`
											return `Opzione non valida: atteso uno tra ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `Troppo grande: ${a.origin ?? "valore"} deve avere ${t}${a.maximum.toString()} ${i.unit ?? "elementi"}`
											return `Troppo grande: ${a.origin ?? "valore"} deve essere ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `Troppo piccolo: ${a.origin} deve avere ${t}${a.minimum.toString()} ${i.unit}`
											return `Troppo piccolo: ${a.origin} deve essere ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Stringa non valida: deve iniziare con "${a.prefix}"`
											if ("ends_with" === a.format)
												return `Stringa non valida: deve terminare con "${a.suffix}"`
											if ("includes" === a.format)
												return `Stringa non valida: deve includere "${a.includes}"`
											if ("regex" === a.format)
												return `Stringa non valida: deve corrispondere al pattern ${a.pattern}`
											return `Invalid ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `Numero non valido: deve essere un multiplo di ${a.divisor}`
										case "unrecognized_keys":
											return `Chiav${a.keys.length > 1 ? "i" : "e"} non riconosciut${a.keys.length > 1 ? "e" : "a"}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Chiave non valida in ${a.origin}`
										case "invalid_union":
										default:
											return "Input non valido"
										case "invalid_element":
											return `Valore non valido in ${a.origin}`
									}
								}),
						}
					},
					"ja",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "文字", verb: "である" },
									file: { unit: "バイト", verb: "である" },
									array: { unit: "要素", verb: "である" },
									set: { unit: "要素", verb: "である" },
								}),
								(t = {
									regex: "入力値",
									email: "メールアドレス",
									url: "URL",
									emoji: "絵文字",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO日時",
									date: "ISO日付",
									time: "ISO時刻",
									duration: "ISO期間",
									ipv4: "IPv4アドレス",
									ipv6: "IPv6アドレス",
									cidrv4: "IPv4範囲",
									cidrv6: "IPv6範囲",
									base64: "base64エンコード文字列",
									base64url: "base64urlエンコード文字列",
									json_string: "JSON文字列",
									e164: "E.164番号",
									jwt: "JWT",
									template_literal: "入力値",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `無効な入力: ${a.expected}が期待されましたが、${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "数値"
													case "object":
														if (Array.isArray(e)) return "配列"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}が入力されました`
										case "invalid_value":
											if (1 === a.values.length)
												return `無効な入力: ${ec(a.values[0])}が期待されました`
											return `無効な選択: ${q(a.values, "、")}のいずれかである必要があります`
										case "too_big": {
											let t = a.inclusive ? "以下である" : "より小さい",
												i = e[a.origin] ?? null
											if (i)
												return `大きすぎる値: ${a.origin ?? "値"}は${a.maximum.toString()}${i.unit ?? "要素"}${t}必要があります`
											return `大きすぎる値: ${a.origin ?? "値"}は${a.maximum.toString()}${t}必要があります`
										}
										case "too_small": {
											let t = a.inclusive ? "以上である" : "より大きい",
												i = e[a.origin] ?? null
											if (i)
												return `小さすぎる値: ${a.origin}は${a.minimum.toString()}${i.unit}${t}必要があります`
											return `小さすぎる値: ${a.origin}は${a.minimum.toString()}${t}必要があります`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `無効な文字列: "${a.prefix}"で始まる必要があります`
											if ("ends_with" === a.format)
												return `無効な文字列: "${a.suffix}"で終わる必要があります`
											if ("includes" === a.format)
												return `無効な文字列: "${a.includes}"を含む必要があります`
											if ("regex" === a.format)
												return `無効な文字列: パターン${a.pattern}に一致する必要があります`
											return `無効な${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `無効な数値: ${a.divisor}の倍数である必要があります`
										case "unrecognized_keys":
											return `認識されていないキー${a.keys.length > 1 ? "群" : ""}: ${q(a.keys, "、")}`
										case "invalid_key":
											return `${a.origin}内の無効なキー`
										case "invalid_union":
											return "無効な入力"
										case "invalid_element":
											return `${a.origin}内の無効な値`
										default:
											return `無効な入力`
									}
								}),
						}
					},
					"kh",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "តួអក្សរ", verb: "គួរមាន" },
									file: { unit: "បៃ", verb: "គួរមាន" },
									array: { unit: "ធាតុ", verb: "គួរមាន" },
									set: { unit: "ធាតុ", verb: "គួរមាន" },
								}),
								(t = {
									regex: "ទិន្នន័យបញ្ចូល",
									email: "អាសយដ្ឋានអ៊ីមែល",
									url: "URL",
									emoji: "សញ្ញាអារម្មណ៍",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
									date: "កាលបរិច្ឆេទ ISO",
									time: "ម៉ោង ISO",
									duration: "រយៈពេល ISO",
									ipv4: "អាសយដ្ឋាន IPv4",
									ipv6: "អាសយដ្ឋាន IPv6",
									cidrv4: "ដែនអាសយដ្ឋាន IPv4",
									cidrv6: "ដែនអាសយដ្ឋាន IPv6",
									base64: "ខ្សែអក្សរអ៊ិកូដ base64",
									base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
									json_string: "ខ្សែអក្សរ JSON",
									e164: "លេខ E.164",
									jwt: "JWT",
									template_literal: "ទិន្នន័យបញ្ចូល",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${a.expected} ប៉ុន្តែទទួលបាន ${((
												e,
											) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "មិនមែនជាលេខ (NaN)" : "លេខ"
													case "object":
														if (Array.isArray(e)) return "អារេ (Array)"
														if (null === e) return "គ្មានតម្លៃ (null)"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${ec(a.values[0])}`
											return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `ធំពេក៖ ត្រូវការ ${a.origin ?? "តម្លៃ"} ${t} ${a.maximum.toString()} ${i.unit ?? "ធាតុ"}`
											return `ធំពេក៖ ត្រូវការ ${a.origin ?? "តម្លៃ"} ${t} ${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `តូចពេក៖ ត្រូវការ ${a.origin} ${t} ${a.minimum.toString()} ${i.unit}`
											return `តូចពេក៖ ត្រូវការ ${a.origin} ${t} ${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${a.prefix}"`
											if ("ends_with" === a.format)
												return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${a.suffix}"`
											if ("includes" === a.format)
												return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${a.includes}"`
											if ("regex" === a.format)
												return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${a.pattern}`
											return `មិនត្រឹមត្រូវ៖ ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${a.divisor}`
										case "unrecognized_keys":
											return `រកឃើញសោមិនស្គាល់៖ ${q(a.keys, ", ")}`
										case "invalid_key":
											return `សោមិនត្រឹមត្រូវនៅក្នុង ${a.origin}`
										case "invalid_union":
										default:
											return `ទិន្នន័យមិនត្រឹមត្រូវ`
										case "invalid_element":
											return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${a.origin}`
									}
								}),
						}
					},
					"ko",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "문자", verb: "to have" },
									file: { unit: "바이트", verb: "to have" },
									array: { unit: "개", verb: "to have" },
									set: { unit: "개", verb: "to have" },
								}),
								(t = {
									regex: "입력",
									email: "이메일 주소",
									url: "URL",
									emoji: "이모지",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO 날짜시간",
									date: "ISO 날짜",
									time: "ISO 시간",
									duration: "ISO 기간",
									ipv4: "IPv4 주소",
									ipv6: "IPv6 주소",
									cidrv4: "IPv4 범위",
									cidrv6: "IPv6 범위",
									base64: "base64 인코딩 문자열",
									base64url: "base64url 인코딩 문자열",
									json_string: "JSON 문자열",
									e164: "E.164 번호",
									jwt: "JWT",
									template_literal: "입력",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `잘못된 입력: 예상 타입은 ${a.expected}, 받은 타입은 ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "number"
													case "object":
														if (Array.isArray(e)) return "array"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}입니다`
										case "invalid_value":
											if (1 === a.values.length)
												return `잘못된 입력: 값은 ${ec(a.values[0])} 이어야 합니다`
											return `잘못된 옵션: ${q(a.values, "또는 ")} 중 하나여야 합니다`
										case "too_big": {
											let t = a.inclusive ? "이하" : "미만",
												i = "미만" === t ? "이어야 합니다" : "여야 합니다",
												n = e[a.origin] ?? null,
												r = n?.unit ?? "요소"
											if (n)
												return `${a.origin ?? "값"}이 너무 큽니다: ${a.maximum.toString()}${r} ${t}${i}`
											return `${a.origin ?? "값"}이 너무 큽니다: ${a.maximum.toString()} ${t}${i}`
										}
										case "too_small": {
											let t = a.inclusive ? "이상" : "초과",
												i = "이상" === t ? "이어야 합니다" : "여야 합니다",
												n = e[a.origin] ?? null,
												r = n?.unit ?? "요소"
											if (n)
												return `${a.origin ?? "값"}이 너무 작습니다: ${a.minimum.toString()}${r} ${t}${i}`
											return `${a.origin ?? "값"}이 너무 작습니다: ${a.minimum.toString()} ${t}${i}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `잘못된 문자열: "${a.prefix}"(으)로 시작해야 합니다`
											if ("ends_with" === a.format)
												return `잘못된 문자열: "${a.suffix}"(으)로 끝나야 합니다`
											if ("includes" === a.format)
												return `잘못된 문자열: "${a.includes}"을(를) 포함해야 합니다`
											if ("regex" === a.format)
												return `잘못된 문자열: 정규식 ${a.pattern} 패턴과 일치해야 합니다`
											return `잘못된 ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `잘못된 숫자: ${a.divisor}의 배수여야 합니다`
										case "unrecognized_keys":
											return `인식할 수 없는 키: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `잘못된 키: ${a.origin}`
										case "invalid_union":
										default:
											return `잘못된 입력`
										case "invalid_element":
											return `잘못된 값: ${a.origin}`
									}
								}),
						}
					},
					"mk",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "знаци", verb: "да имаат" },
									file: { unit: "бајти", verb: "да имаат" },
									array: { unit: "ставки", verb: "да имаат" },
									set: { unit: "ставки", verb: "да имаат" },
								}),
								(t = {
									regex: "внес",
									email: "адреса на е-пошта",
									url: "URL",
									emoji: "емоџи",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO датум и време",
									date: "ISO датум",
									time: "ISO време",
									duration: "ISO времетраење",
									ipv4: "IPv4 адреса",
									ipv6: "IPv6 адреса",
									cidrv4: "IPv4 опсег",
									cidrv6: "IPv6 опсег",
									base64: "base64-енкодирана низа",
									base64url: "base64url-енкодирана низа",
									json_string: "JSON низа",
									e164: "E.164 број",
									jwt: "JWT",
									template_literal: "внес",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Грешен внес: се очекува ${a.expected}, примено ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "број"
													case "object":
														if (Array.isArray(e)) return "низа"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Invalid input: expected ${ec(a.values[0])}`
											return `Грешана опција: се очекува една ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `Премногу голем: се очекува ${a.origin ?? "вредноста"} да има ${t}${a.maximum.toString()} ${i.unit ?? "елементи"}`
											return `Премногу голем: се очекува ${a.origin ?? "вредноста"} да биде ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `Премногу мал: се очекува ${a.origin} да има ${t}${a.minimum.toString()} ${i.unit}`
											return `Премногу мал: се очекува ${a.origin} да биде ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Неважечка низа: мора да започнува со "${a.prefix}"`
											if ("ends_with" === a.format)
												return `Неважечка низа: мора да завршува со "${a.suffix}"`
											if ("includes" === a.format)
												return `Неважечка низа: мора да вклучува "${a.includes}"`
											if ("regex" === a.format)
												return `Неважечка низа: мора да одгоара на патернот ${a.pattern}`
											return `Invalid ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `Грешен број: мора да биде делив со ${a.divisor}`
										case "unrecognized_keys":
											return `${a.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Грешен клуч во ${a.origin}`
										case "invalid_union":
											return "Грешен внес"
										case "invalid_element":
											return `Грешна вредност во ${a.origin}`
										default:
											return `Грешен внес`
									}
								}),
						}
					},
					"ms",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "aksara", verb: "mempunyai" },
									file: { unit: "bait", verb: "mempunyai" },
									array: { unit: "elemen", verb: "mempunyai" },
									set: { unit: "elemen", verb: "mempunyai" },
								}),
								(t = {
									regex: "input",
									email: "alamat e-mel",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "tarikh masa ISO",
									date: "tarikh ISO",
									time: "masa ISO",
									duration: "tempoh ISO",
									ipv4: "alamat IPv4",
									ipv6: "alamat IPv6",
									cidrv4: "julat IPv4",
									cidrv6: "julat IPv6",
									base64: "string dikodkan base64",
									base64url: "string dikodkan base64url",
									json_string: "string JSON",
									e164: "nombor E.164",
									jwt: "JWT",
									template_literal: "input",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Input tidak sah: dijangka ${a.expected}, diterima ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "nombor"
													case "object":
														if (Array.isArray(e)) return "array"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Input tidak sah: dijangka ${ec(a.values[0])}`
											return `Pilihan tidak sah: dijangka salah satu daripada ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `Terlalu besar: dijangka ${a.origin ?? "nilai"} ${i.verb} ${t}${a.maximum.toString()} ${i.unit ?? "elemen"}`
											return `Terlalu besar: dijangka ${a.origin ?? "nilai"} adalah ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `Terlalu kecil: dijangka ${a.origin} ${i.verb} ${t}${a.minimum.toString()} ${i.unit}`
											return `Terlalu kecil: dijangka ${a.origin} adalah ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `String tidak sah: mesti bermula dengan "${a.prefix}"`
											if ("ends_with" === a.format)
												return `String tidak sah: mesti berakhir dengan "${a.suffix}"`
											if ("includes" === a.format)
												return `String tidak sah: mesti mengandungi "${a.includes}"`
											if ("regex" === a.format)
												return `String tidak sah: mesti sepadan dengan corak ${a.pattern}`
											return `${t[a.format] ?? a.format} tidak sah`
										case "not_multiple_of":
											return `Nombor tidak sah: perlu gandaan ${a.divisor}`
										case "unrecognized_keys":
											return `Kunci tidak dikenali: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Kunci tidak sah dalam ${a.origin}`
										case "invalid_union":
										default:
											return "Input tidak sah"
										case "invalid_element":
											return `Nilai tidak sah dalam ${a.origin}`
									}
								}),
						}
					},
					"nl",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "tekens" },
									file: { unit: "bytes" },
									array: { unit: "elementen" },
									set: { unit: "elementen" },
								}),
								(t = {
									regex: "invoer",
									email: "emailadres",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO datum en tijd",
									date: "ISO datum",
									time: "ISO tijd",
									duration: "ISO duur",
									ipv4: "IPv4-adres",
									ipv6: "IPv6-adres",
									cidrv4: "IPv4-bereik",
									cidrv6: "IPv6-bereik",
									base64: "base64-gecodeerde tekst",
									base64url: "base64 URL-gecodeerde tekst",
									json_string: "JSON string",
									e164: "E.164-nummer",
									jwt: "JWT",
									template_literal: "invoer",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Ongeldige invoer: verwacht ${a.expected}, ontving ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "getal"
													case "object":
														if (Array.isArray(e)) return "array"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Ongeldige invoer: verwacht ${ec(a.values[0])}`
											return `Ongeldige optie: verwacht \xe9\xe9n van ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `Te lang: verwacht dat ${a.origin ?? "waarde"} ${t}${a.maximum.toString()} ${i.unit ?? "elementen"} bevat`
											return `Te lang: verwacht dat ${a.origin ?? "waarde"} ${t}${a.maximum.toString()} is`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `Te kort: verwacht dat ${a.origin} ${t}${a.minimum.toString()} ${i.unit} bevat`
											return `Te kort: verwacht dat ${a.origin} ${t}${a.minimum.toString()} is`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Ongeldige tekst: moet met "${a.prefix}" beginnen`
											if ("ends_with" === a.format)
												return `Ongeldige tekst: moet op "${a.suffix}" eindigen`
											if ("includes" === a.format)
												return `Ongeldige tekst: moet "${a.includes}" bevatten`
											if ("regex" === a.format)
												return `Ongeldige tekst: moet overeenkomen met patroon ${a.pattern}`
											return `Ongeldig: ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `Ongeldig getal: moet een veelvoud van ${a.divisor} zijn`
										case "unrecognized_keys":
											return `Onbekende key${a.keys.length > 1 ? "s" : ""}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Ongeldige key in ${a.origin}`
										case "invalid_union":
										default:
											return "Ongeldige invoer"
										case "invalid_element":
											return `Ongeldige waarde in ${a.origin}`
									}
								}),
						}
					},
					"no",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "tegn", verb: "å ha" },
									file: { unit: "bytes", verb: "å ha" },
									array: { unit: "elementer", verb: "å inneholde" },
									set: { unit: "elementer", verb: "å inneholde" },
								}),
								(t = {
									regex: "input",
									email: "e-postadresse",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO dato- og klokkeslett",
									date: "ISO-dato",
									time: "ISO-klokkeslett",
									duration: "ISO-varighet",
									ipv4: "IPv4-område",
									ipv6: "IPv6-område",
									cidrv4: "IPv4-spekter",
									cidrv6: "IPv6-spekter",
									base64: "base64-enkodet streng",
									base64url: "base64url-enkodet streng",
									json_string: "JSON-streng",
									e164: "E.164-nummer",
									jwt: "JWT",
									template_literal: "input",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Ugyldig input: forventet ${a.expected}, fikk ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "tall"
													case "object":
														if (Array.isArray(e)) return "liste"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Ugyldig verdi: forventet ${ec(a.values[0])}`
											return `Ugyldig valg: forventet en av ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `For stor(t): forventet ${a.origin ?? "value"} til \xe5 ha ${t}${a.maximum.toString()} ${i.unit ?? "elementer"}`
											return `For stor(t): forventet ${a.origin ?? "value"} til \xe5 ha ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `For lite(n): forventet ${a.origin} til \xe5 ha ${t}${a.minimum.toString()} ${i.unit}`
											return `For lite(n): forventet ${a.origin} til \xe5 ha ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Ugyldig streng: m\xe5 starte med "${a.prefix}"`
											if ("ends_with" === a.format)
												return `Ugyldig streng: m\xe5 ende med "${a.suffix}"`
											if ("includes" === a.format)
												return `Ugyldig streng: m\xe5 inneholde "${a.includes}"`
											if ("regex" === a.format)
												return `Ugyldig streng: m\xe5 matche m\xf8nsteret ${a.pattern}`
											return `Ugyldig ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `Ugyldig tall: m\xe5 v\xe6re et multiplum av ${a.divisor}`
										case "unrecognized_keys":
											return `${a.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Ugyldig n\xf8kkel i ${a.origin}`
										case "invalid_union":
										default:
											return "Ugyldig input"
										case "invalid_element":
											return `Ugyldig verdi i ${a.origin}`
									}
								}),
						}
					},
					"ota",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "harf", verb: "olmalıdır" },
									file: { unit: "bayt", verb: "olmalıdır" },
									array: { unit: "unsur", verb: "olmalıdır" },
									set: { unit: "unsur", verb: "olmalıdır" },
								}),
								(t = {
									regex: "giren",
									email: "epostagâh",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO hengâmı",
									date: "ISO tarihi",
									time: "ISO zamanı",
									duration: "ISO müddeti",
									ipv4: "IPv4 nişânı",
									ipv6: "IPv6 nişânı",
									cidrv4: "IPv4 menzili",
									cidrv6: "IPv6 menzili",
									base64: "base64-şifreli metin",
									base64url: "base64url-şifreli metin",
									json_string: "JSON metin",
									e164: "E.164 sayısı",
									jwt: "JWT",
									template_literal: "giren",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `F\xe2sit giren: umulan ${a.expected}, alınan ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "numara"
													case "object":
														if (Array.isArray(e)) return "saf"
														if (null === e) return "gayb"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `F\xe2sit giren: umulan ${ec(a.values[0])}`
											return `F\xe2sit tercih: m\xfbteberler ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `Fazla b\xfcy\xfck: ${a.origin ?? "value"}, ${t}${a.maximum.toString()} ${i.unit ?? "elements"} sahip olmalıydı.`
											return `Fazla b\xfcy\xfck: ${a.origin ?? "value"}, ${t}${a.maximum.toString()} olmalıydı.`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `Fazla k\xfc\xe7\xfck: ${a.origin}, ${t}${a.minimum.toString()} ${i.unit} sahip olmalıydı.`
											return `Fazla k\xfc\xe7\xfck: ${a.origin}, ${t}${a.minimum.toString()} olmalıydı.`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `F\xe2sit metin: "${a.prefix}" ile başlamalı.`
											if ("ends_with" === a.format)
												return `F\xe2sit metin: "${a.suffix}" ile bitmeli.`
											if ("includes" === a.format)
												return `F\xe2sit metin: "${a.includes}" ihtiv\xe2 etmeli.`
											if ("regex" === a.format)
												return `F\xe2sit metin: ${a.pattern} nakşına uymalı.`
											return `F\xe2sit ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `F\xe2sit sayı: ${a.divisor} katı olmalıydı.`
										case "unrecognized_keys":
											return `Tanınmayan anahtar ${a.keys.length > 1 ? "s" : ""}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `${a.origin} i\xe7in tanınmayan anahtar var.`
										case "invalid_union":
											return "Giren tanınamadı."
										case "invalid_element":
											return `${a.origin} i\xe7in tanınmayan kıymet var.`
										default:
											return `Kıymet tanınamadı.`
									}
								}),
						}
					},
					"pl",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "znaków", verb: "mieć" },
									file: { unit: "bajtów", verb: "mieć" },
									array: { unit: "elementów", verb: "mieć" },
									set: { unit: "elementów", verb: "mieć" },
								}),
								(t = {
									regex: "wyrażenie",
									email: "adres email",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "data i godzina w formacie ISO",
									date: "data w formacie ISO",
									time: "godzina w formacie ISO",
									duration: "czas trwania ISO",
									ipv4: "adres IPv4",
									ipv6: "adres IPv6",
									cidrv4: "zakres IPv4",
									cidrv6: "zakres IPv6",
									base64: "ciąg znaków zakodowany w formacie base64",
									base64url: "ciąg znaków zakodowany w formacie base64url",
									json_string: "ciąg znaków w formacie JSON",
									e164: "liczba E.164",
									jwt: "JWT",
									template_literal: "wejście",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Nieprawidłowe dane wejściowe: oczekiwano ${a.expected}, otrzymano ${((
												e,
											) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "liczba"
													case "object":
														if (Array.isArray(e)) return "tablica"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Nieprawidłowe dane wejściowe: oczekiwano ${ec(a.values[0])}`
											return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `Za duża wartość: oczekiwano, że ${a.origin ?? "wartość"} będzie mieć ${t}${a.maximum.toString()} ${i.unit ?? "elementów"}`
											return `Zbyt duż(y/a/e): oczekiwano, że ${a.origin ?? "wartość"} będzie wynosić ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `Za mała wartość: oczekiwano, że ${a.origin ?? "wartość"} będzie mieć ${t}${a.minimum.toString()} ${i.unit ?? "elementów"}`
											return `Zbyt mał(y/a/e): oczekiwano, że ${a.origin ?? "wartość"} będzie wynosić ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Nieprawidłowy ciąg znak\xf3w: musi zaczynać się od "${a.prefix}"`
											if ("ends_with" === a.format)
												return `Nieprawidłowy ciąg znak\xf3w: musi kończyć się na "${a.suffix}"`
											if ("includes" === a.format)
												return `Nieprawidłowy ciąg znak\xf3w: musi zawierać "${a.includes}"`
											if ("regex" === a.format)
												return `Nieprawidłowy ciąg znak\xf3w: musi odpowiadać wzorcowi ${a.pattern}`
											return `Nieprawidłow(y/a/e) ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `Nieprawidłowa liczba: musi być wielokrotnością ${a.divisor}`
										case "unrecognized_keys":
											return `Nierozpoznane klucze${a.keys.length > 1 ? "s" : ""}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Nieprawidłowy klucz w ${a.origin}`
										case "invalid_union":
											return "Nieprawidłowe dane wejściowe"
										case "invalid_element":
											return `Nieprawidłowa wartość w ${a.origin}`
										default:
											return `Nieprawidłowe dane wejściowe`
									}
								}),
						}
					},
					"ps",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "توکي", verb: "ولري" },
									file: { unit: "بایټس", verb: "ولري" },
									array: { unit: "توکي", verb: "ولري" },
									set: { unit: "توکي", verb: "ولري" },
								}),
								(t = {
									regex: "ورودي",
									email: "بریښنالیک",
									url: "یو آر ال",
									emoji: "ایموجي",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "نیټه او وخت",
									date: "نېټه",
									time: "وخت",
									duration: "موده",
									ipv4: "د IPv4 پته",
									ipv6: "د IPv6 پته",
									cidrv4: "د IPv4 ساحه",
									cidrv6: "د IPv6 ساحه",
									base64: "base64-encoded متن",
									base64url: "base64url-encoded متن",
									json_string: "JSON متن",
									e164: "د E.164 شمېره",
									jwt: "JWT",
									template_literal: "ورودي",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `ناسم ورودي: باید ${a.expected} وای, مګر ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "عدد"
													case "object":
														if (Array.isArray(e)) return "ارې"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)} ترلاسه شو`
										case "invalid_value":
											if (1 === a.values.length) return `ناسم ورودي: باید ${ec(a.values[0])} وای`
											return `ناسم انتخاب: باید یو له ${q(a.values, "|")} څخه وای`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `ډیر لوی: ${a.origin ?? "ارزښت"} باید ${t}${a.maximum.toString()} ${i.unit ?? "عنصرونه"} ولري`
											return `ډیر لوی: ${a.origin ?? "ارزښت"} باید ${t}${a.maximum.toString()} وي`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `ډیر کوچنی: ${a.origin} باید ${t}${a.minimum.toString()} ${i.unit} ولري`
											return `ډیر کوچنی: ${a.origin} باید ${t}${a.minimum.toString()} وي`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `ناسم متن: باید د "${a.prefix}" سره پیل شي`
											if ("ends_with" === a.format)
												return `ناسم متن: باید د "${a.suffix}" سره پای ته ورسيږي`
											if ("includes" === a.format) return `ناسم متن: باید "${a.includes}" ولري`
											if ("regex" === a.format)
												return `ناسم متن: باید د ${a.pattern} سره مطابقت ولري`
											return `${t[a.format] ?? a.format} ناسم دی`
										case "not_multiple_of":
											return `ناسم عدد: باید د ${a.divisor} مضرب وي`
										case "unrecognized_keys":
											return `ناسم ${a.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `ناسم کلیډ په ${a.origin} کې`
										case "invalid_union":
										default:
											return `ناسمه ورودي`
										case "invalid_element":
											return `ناسم عنصر په ${a.origin} کې`
									}
								}),
						}
					},
					"pt",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "caracteres", verb: "ter" },
									file: { unit: "bytes", verb: "ter" },
									array: { unit: "itens", verb: "ter" },
									set: { unit: "itens", verb: "ter" },
								}),
								(t = {
									regex: "padrão",
									email: "endereço de e-mail",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "data e hora ISO",
									date: "data ISO",
									time: "hora ISO",
									duration: "duração ISO",
									ipv4: "endereço IPv4",
									ipv6: "endereço IPv6",
									cidrv4: "faixa de IPv4",
									cidrv6: "faixa de IPv6",
									base64: "texto codificado em base64",
									base64url: "URL codificada em base64",
									json_string: "texto JSON",
									e164: "número E.164",
									jwt: "JWT",
									template_literal: "entrada",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Tipo inv\xe1lido: esperado ${a.expected}, recebido ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "número"
													case "object":
														if (Array.isArray(e)) return "array"
														if (null === e) return "nulo"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Entrada inv\xe1lida: esperado ${ec(a.values[0])}`
											return `Op\xe7\xe3o inv\xe1lida: esperada uma das ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `Muito grande: esperado que ${a.origin ?? "valor"} tivesse ${t}${a.maximum.toString()} ${i.unit ?? "elementos"}`
											return `Muito grande: esperado que ${a.origin ?? "valor"} fosse ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `Muito pequeno: esperado que ${a.origin} tivesse ${t}${a.minimum.toString()} ${i.unit}`
											return `Muito pequeno: esperado que ${a.origin} fosse ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Texto inv\xe1lido: deve come\xe7ar com "${a.prefix}"`
											if ("ends_with" === a.format)
												return `Texto inv\xe1lido: deve terminar com "${a.suffix}"`
											if ("includes" === a.format)
												return `Texto inv\xe1lido: deve incluir "${a.includes}"`
											if ("regex" === a.format)
												return `Texto inv\xe1lido: deve corresponder ao padr\xe3o ${a.pattern}`
											return `${t[a.format] ?? a.format} inv\xe1lido`
										case "not_multiple_of":
											return `N\xfamero inv\xe1lido: deve ser m\xfaltiplo de ${a.divisor}`
										case "unrecognized_keys":
											return `Chave${a.keys.length > 1 ? "s" : ""} desconhecida${a.keys.length > 1 ? "s" : ""}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Chave inv\xe1lida em ${a.origin}`
										case "invalid_union":
											return "Entrada inválida"
										case "invalid_element":
											return `Valor inv\xe1lido em ${a.origin}`
										default:
											return `Campo inv\xe1lido`
									}
								}),
						}
					},
					"ru",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: {
										unit: { one: "символ", few: "символа", many: "символов" },
										verb: "иметь",
									},
									file: { unit: { one: "байт", few: "байта", many: "байт" }, verb: "иметь" },
									array: {
										unit: { one: "элемент", few: "элемента", many: "элементов" },
										verb: "иметь",
									},
									set: {
										unit: { one: "элемент", few: "элемента", many: "элементов" },
										verb: "иметь",
									},
								}),
								(t = {
									regex: "ввод",
									email: "email адрес",
									url: "URL",
									emoji: "эмодзи",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO дата и время",
									date: "ISO дата",
									time: "ISO время",
									duration: "ISO длительность",
									ipv4: "IPv4 адрес",
									ipv6: "IPv6 адрес",
									cidrv4: "IPv4 диапазон",
									cidrv6: "IPv6 диапазон",
									base64: "строка в формате base64",
									base64url: "строка в формате base64url",
									json_string: "JSON строка",
									e164: "номер E.164",
									jwt: "JWT",
									template_literal: "ввод",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Неверный ввод: ожидалось ${a.expected}, получено ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "число"
													case "object":
														if (Array.isArray(e)) return "массив"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Неверный ввод: ожидалось ${ec(a.values[0])}`
											return `Неверный вариант: ожидалось одно из ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i) {
												let e = ir(Number(a.maximum), i.unit.one, i.unit.few, i.unit.many)
												return `Слишком большое значение: ожидалось, что ${a.origin ?? "значение"} будет иметь ${t}${a.maximum.toString()} ${e}`
											}
											return `Слишком большое значение: ожидалось, что ${a.origin ?? "значение"} будет ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i) {
												let e = ir(Number(a.minimum), i.unit.one, i.unit.few, i.unit.many)
												return `Слишком маленькое значение: ожидалось, что ${a.origin} будет иметь ${t}${a.minimum.toString()} ${e}`
											}
											return `Слишком маленькое значение: ожидалось, что ${a.origin} будет ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Неверная строка: должна начинаться с "${a.prefix}"`
											if ("ends_with" === a.format)
												return `Неверная строка: должна заканчиваться на "${a.suffix}"`
											if ("includes" === a.format)
												return `Неверная строка: должна содержать "${a.includes}"`
											if ("regex" === a.format)
												return `Неверная строка: должна соответствовать шаблону ${a.pattern}`
											return `Неверный ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `Неверное число: должно быть кратным ${a.divisor}`
										case "unrecognized_keys":
											return `Нераспознанн${a.keys.length > 1 ? "ые" : "ый"} ключ${a.keys.length > 1 ? "и" : ""}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Неверный ключ в ${a.origin}`
										case "invalid_union":
											return "Неверные входные данные"
										case "invalid_element":
											return `Неверное значение в ${a.origin}`
										default:
											return `Неверные входные данные`
									}
								}),
						}
					},
					"sl",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "znakov", verb: "imeti" },
									file: { unit: "bajtov", verb: "imeti" },
									array: { unit: "elementov", verb: "imeti" },
									set: { unit: "elementov", verb: "imeti" },
								}),
								(t = {
									regex: "vnos",
									email: "e-poštni naslov",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO datum in čas",
									date: "ISO datum",
									time: "ISO čas",
									duration: "ISO trajanje",
									ipv4: "IPv4 naslov",
									ipv6: "IPv6 naslov",
									cidrv4: "obseg IPv4",
									cidrv6: "obseg IPv6",
									base64: "base64 kodiran niz",
									base64url: "base64url kodiran niz",
									json_string: "JSON niz",
									e164: "E.164 številka",
									jwt: "JWT",
									template_literal: "vnos",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Neveljaven vnos: pričakovano ${a.expected}, prejeto ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "število"
													case "object":
														if (Array.isArray(e)) return "tabela"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Neveljaven vnos: pričakovano ${ec(a.values[0])}`
											return `Neveljavna možnost: pričakovano eno izmed ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `Preveliko: pričakovano, da bo ${a.origin ?? "vrednost"} imelo ${t}${a.maximum.toString()} ${i.unit ?? "elementov"}`
											return `Preveliko: pričakovano, da bo ${a.origin ?? "vrednost"} ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `Premajhno: pričakovano, da bo ${a.origin} imelo ${t}${a.minimum.toString()} ${i.unit}`
											return `Premajhno: pričakovano, da bo ${a.origin} ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Neveljaven niz: mora se začeti z "${a.prefix}"`
											if ("ends_with" === a.format)
												return `Neveljaven niz: mora se končati z "${a.suffix}"`
											if ("includes" === a.format)
												return `Neveljaven niz: mora vsebovati "${a.includes}"`
											if ("regex" === a.format)
												return `Neveljaven niz: mora ustrezati vzorcu ${a.pattern}`
											return `Neveljaven ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `Neveljavno število: mora biti večkratnik ${a.divisor}`
										case "unrecognized_keys":
											return `Neprepoznan${a.keys.length > 1 ? "i ključi" : " ključ"}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Neveljaven ključ v ${a.origin}`
										case "invalid_union":
										default:
											return "Neveljaven vnos"
										case "invalid_element":
											return `Neveljavna vrednost v ${a.origin}`
									}
								}),
						}
					},
					"sv",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "tecken", verb: "att ha" },
									file: { unit: "bytes", verb: "att ha" },
									array: { unit: "objekt", verb: "att innehålla" },
									set: { unit: "objekt", verb: "att innehålla" },
								}),
								(t = {
									regex: "reguljärt uttryck",
									email: "e-postadress",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO-datum och tid",
									date: "ISO-datum",
									time: "ISO-tid",
									duration: "ISO-varaktighet",
									ipv4: "IPv4-intervall",
									ipv6: "IPv6-intervall",
									cidrv4: "IPv4-spektrum",
									cidrv6: "IPv6-spektrum",
									base64: "base64-kodad sträng",
									base64url: "base64url-kodad sträng",
									json_string: "JSON-sträng",
									e164: "E.164-nummer",
									jwt: "JWT",
									template_literal: "mall-literal",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Ogiltig inmatning: f\xf6rv\xe4ntat ${a.expected}, fick ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "antal"
													case "object":
														if (Array.isArray(e)) return "lista"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Ogiltig inmatning: f\xf6rv\xe4ntat ${ec(a.values[0])}`
											return `Ogiltigt val: f\xf6rv\xe4ntade en av ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `F\xf6r stor(t): f\xf6rv\xe4ntade ${a.origin ?? "värdet"} att ha ${t}${a.maximum.toString()} ${i.unit ?? "element"}`
											return `F\xf6r stor(t): f\xf6rv\xe4ntat ${a.origin ?? "värdet"} att ha ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `F\xf6r lite(t): f\xf6rv\xe4ntade ${a.origin ?? "värdet"} att ha ${t}${a.minimum.toString()} ${i.unit}`
											return `F\xf6r lite(t): f\xf6rv\xe4ntade ${a.origin ?? "värdet"} att ha ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Ogiltig str\xe4ng: m\xe5ste b\xf6rja med "${a.prefix}"`
											if ("ends_with" === a.format)
												return `Ogiltig str\xe4ng: m\xe5ste sluta med "${a.suffix}"`
											if ("includes" === a.format)
												return `Ogiltig str\xe4ng: m\xe5ste inneh\xe5lla "${a.includes}"`
											if ("regex" === a.format)
												return `Ogiltig str\xe4ng: m\xe5ste matcha m\xf6nstret "${a.pattern}"`
											return `Ogiltig(t) ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `Ogiltigt tal: m\xe5ste vara en multipel av ${a.divisor}`
										case "unrecognized_keys":
											return `${a.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Ogiltig nyckel i ${a.origin ?? "värdet"}`
										case "invalid_union":
										default:
											return "Ogiltig input"
										case "invalid_element":
											return `Ogiltigt v\xe4rde i ${a.origin ?? "värdet"}`
									}
								}),
						}
					},
					"ta",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
									file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
									array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
									set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
								}),
								(t = {
									regex: "உள்ளீடு",
									email: "மின்னஞ்சல் முகவரி",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO தேதி நேரம்",
									date: "ISO தேதி",
									time: "ISO நேரம்",
									duration: "ISO கால அளவு",
									ipv4: "IPv4 முகவரி",
									ipv6: "IPv6 முகவரி",
									cidrv4: "IPv4 வரம்பு",
									cidrv6: "IPv6 வரம்பு",
									base64: "base64-encoded சரம்",
									base64url: "base64url-encoded சரம்",
									json_string: "JSON சரம்",
									e164: "E.164 எண்",
									jwt: "JWT",
									template_literal: "input",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${a.expected}, பெறப்பட்டது ${((
												e,
											) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "எண் அல்லாதது" : "எண்"
													case "object":
														if (Array.isArray(e)) return "அணி"
														if (null === e) return "வெறுமை"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${ec(a.values[0])}`
											return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${q(a.values, "|")} இல் ஒன்று`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${a.origin ?? "மதிப்பு"} ${t}${a.maximum.toString()} ${i.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்`
											return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${a.origin ?? "மதிப்பு"} ${t}${a.maximum.toString()} ஆக இருக்க வேண்டும்`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${a.origin} ${t}${a.minimum.toString()} ${i.unit} ஆக இருக்க வேண்டும்`
											return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${a.origin} ${t}${a.minimum.toString()} ஆக இருக்க வேண்டும்`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `தவறான சரம்: "${a.prefix}" இல் தொடங்க வேண்டும்`
											if ("ends_with" === a.format)
												return `தவறான சரம்: "${a.suffix}" இல் முடிவடைய வேண்டும்`
											if ("includes" === a.format)
												return `தவறான சரம்: "${a.includes}" ஐ உள்ளடக்க வேண்டும்`
											if ("regex" === a.format)
												return `தவறான சரம்: ${a.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`
											return `தவறான ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `தவறான எண்: ${a.divisor} இன் பலமாக இருக்க வேண்டும்`
										case "unrecognized_keys":
											return `அடையாளம் தெரியாத விசை${a.keys.length > 1 ? "கள்" : ""}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `${a.origin} இல் தவறான விசை`
										case "invalid_union":
											return "தவறான உள்ளீடு"
										case "invalid_element":
											return `${a.origin} இல் தவறான மதிப்பு`
										default:
											return `தவறான உள்ளீடு`
									}
								}),
						}
					},
					"th",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "ตัวอักษร", verb: "ควรมี" },
									file: { unit: "ไบต์", verb: "ควรมี" },
									array: { unit: "รายการ", verb: "ควรมี" },
									set: { unit: "รายการ", verb: "ควรมี" },
								}),
								(t = {
									regex: "ข้อมูลที่ป้อน",
									email: "ที่อยู่อีเมล",
									url: "URL",
									emoji: "อิโมจิ",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "วันที่เวลาแบบ ISO",
									date: "วันที่แบบ ISO",
									time: "เวลาแบบ ISO",
									duration: "ช่วงเวลาแบบ ISO",
									ipv4: "ที่อยู่ IPv4",
									ipv6: "ที่อยู่ IPv6",
									cidrv4: "ช่วง IP แบบ IPv4",
									cidrv6: "ช่วง IP แบบ IPv6",
									base64: "ข้อความแบบ Base64",
									base64url: "ข้อความแบบ Base64 สำหรับ URL",
									json_string: "ข้อความแบบ JSON",
									e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
									jwt: "โทเคน JWT",
									template_literal: "ข้อมูลที่ป้อน",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${a.expected} แต่ได้รับ ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "ไม่ใช่ตัวเลข (NaN)" : "ตัวเลข"
													case "object":
														if (Array.isArray(e)) return "อาร์เรย์ (Array)"
														if (null === e) return "ไม่มีค่า (null)"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `ค่าไม่ถูกต้อง: ควรเป็น ${ec(a.values[0])}`
											return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "ไม่เกิน" : "น้อยกว่า",
												i = e[a.origin] ?? null
											if (i)
												return `เกินกำหนด: ${a.origin ?? "ค่า"} ควรมี${t} ${a.maximum.toString()} ${i.unit ?? "รายการ"}`
											return `เกินกำหนด: ${a.origin ?? "ค่า"} ควรมี${t} ${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? "อย่างน้อย" : "มากกว่า",
												i = e[a.origin] ?? null
											if (i)
												return `น้อยกว่ากำหนด: ${a.origin} ควรมี${t} ${a.minimum.toString()} ${i.unit}`
											return `น้อยกว่ากำหนด: ${a.origin} ควรมี${t} ${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${a.prefix}"`
											if ("ends_with" === a.format)
												return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${a.suffix}"`
											if ("includes" === a.format)
												return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${a.includes}" อยู่ในข้อความ`
											if ("regex" === a.format)
												return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${a.pattern}`
											return `รูปแบบไม่ถูกต้อง: ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${a.divisor} ได้ลงตัว`
										case "unrecognized_keys":
											return `พบคีย์ที่ไม่รู้จัก: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `คีย์ไม่ถูกต้องใน ${a.origin}`
										case "invalid_union":
											return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้"
										case "invalid_element":
											return `ข้อมูลไม่ถูกต้องใน ${a.origin}`
										default:
											return `ข้อมูลไม่ถูกต้อง`
									}
								}),
						}
					},
					"tr",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "karakter", verb: "olmalı" },
									file: { unit: "bayt", verb: "olmalı" },
									array: { unit: "öğe", verb: "olmalı" },
									set: { unit: "öğe", verb: "olmalı" },
								}),
								(t = {
									regex: "girdi",
									email: "e-posta adresi",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO tarih ve saat",
									date: "ISO tarih",
									time: "ISO saat",
									duration: "ISO süre",
									ipv4: "IPv4 adresi",
									ipv6: "IPv6 adresi",
									cidrv4: "IPv4 aralığı",
									cidrv6: "IPv6 aralığı",
									base64: "base64 ile şifrelenmiş metin",
									base64url: "base64url ile şifrelenmiş metin",
									json_string: "JSON dizesi",
									e164: "E.164 sayısı",
									jwt: "JWT",
									template_literal: "Şablon dizesi",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Ge\xe7ersiz değer: beklenen ${a.expected}, alınan ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "number"
													case "object":
														if (Array.isArray(e)) return "array"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Ge\xe7ersiz değer: beklenen ${ec(a.values[0])}`
											return `Ge\xe7ersiz se\xe7enek: aşağıdakilerden biri olmalı: ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `\xc7ok b\xfcy\xfck: beklenen ${a.origin ?? "değer"} ${t}${a.maximum.toString()} ${i.unit ?? "öğe"}`
											return `\xc7ok b\xfcy\xfck: beklenen ${a.origin ?? "değer"} ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `\xc7ok k\xfc\xe7\xfck: beklenen ${a.origin} ${t}${a.minimum.toString()} ${i.unit}`
											return `\xc7ok k\xfc\xe7\xfck: beklenen ${a.origin} ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Ge\xe7ersiz metin: "${a.prefix}" ile başlamalı`
											if ("ends_with" === a.format)
												return `Ge\xe7ersiz metin: "${a.suffix}" ile bitmeli`
											if ("includes" === a.format)
												return `Ge\xe7ersiz metin: "${a.includes}" i\xe7ermeli`
											if ("regex" === a.format)
												return `Ge\xe7ersiz metin: ${a.pattern} desenine uymalı`
											return `Ge\xe7ersiz ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `Ge\xe7ersiz sayı: ${a.divisor} ile tam b\xf6l\xfcnebilmeli`
										case "unrecognized_keys":
											return `Tanınmayan anahtar${a.keys.length > 1 ? "lar" : ""}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `${a.origin} i\xe7inde ge\xe7ersiz anahtar`
										case "invalid_union":
											return "Geçersiz değer"
										case "invalid_element":
											return `${a.origin} i\xe7inde ge\xe7ersiz değer`
										default:
											return `Ge\xe7ersiz değer`
									}
								}),
						}
					},
					"ua",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "символів", verb: "матиме" },
									file: { unit: "байтів", verb: "матиме" },
									array: { unit: "елементів", verb: "матиме" },
									set: { unit: "елементів", verb: "матиме" },
								}),
								(t = {
									regex: "вхідні дані",
									email: "адреса електронної пошти",
									url: "URL",
									emoji: "емодзі",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "дата та час ISO",
									date: "дата ISO",
									time: "час ISO",
									duration: "тривалість ISO",
									ipv4: "адреса IPv4",
									ipv6: "адреса IPv6",
									cidrv4: "діапазон IPv4",
									cidrv6: "діапазон IPv6",
									base64: "рядок у кодуванні base64",
									base64url: "рядок у кодуванні base64url",
									json_string: "рядок JSON",
									e164: "номер E.164",
									jwt: "JWT",
									template_literal: "вхідні дані",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Неправильні вхідні дані: очікується ${a.expected}, отримано ${((
												e,
											) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "число"
													case "object":
														if (Array.isArray(e)) return "масив"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Неправильні вхідні дані: очікується ${ec(a.values[0])}`
											return `Неправильна опція: очікується одне з ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `Занадто велике: очікується, що ${a.origin ?? "значення"} ${i.verb} ${t}${a.maximum.toString()} ${i.unit ?? "елементів"}`
											return `Занадто велике: очікується, що ${a.origin ?? "значення"} буде ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `Занадто мале: очікується, що ${a.origin} ${i.verb} ${t}${a.minimum.toString()} ${i.unit}`
											return `Занадто мале: очікується, що ${a.origin} буде ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Неправильний рядок: повинен починатися з "${a.prefix}"`
											if ("ends_with" === a.format)
												return `Неправильний рядок: повинен закінчуватися на "${a.suffix}"`
											if ("includes" === a.format)
												return `Неправильний рядок: повинен містити "${a.includes}"`
											if ("regex" === a.format)
												return `Неправильний рядок: повинен відповідати шаблону ${a.pattern}`
											return `Неправильний ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `Неправильне число: повинно бути кратним ${a.divisor}`
										case "unrecognized_keys":
											return `Нерозпізнаний ключ${a.keys.length > 1 ? "і" : ""}: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Неправильний ключ у ${a.origin}`
										case "invalid_union":
											return "Неправильні вхідні дані"
										case "invalid_element":
											return `Неправильне значення у ${a.origin}`
										default:
											return `Неправильні вхідні дані`
									}
								}),
						}
					},
					"ur",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "حروف", verb: "ہونا" },
									file: { unit: "بائٹس", verb: "ہونا" },
									array: { unit: "آئٹمز", verb: "ہونا" },
									set: { unit: "آئٹمز", verb: "ہونا" },
								}),
								(t = {
									regex: "ان پٹ",
									email: "ای میل ایڈریس",
									url: "یو آر ایل",
									emoji: "ایموجی",
									uuid: "یو یو آئی ڈی",
									uuidv4: "یو یو آئی ڈی وی 4",
									uuidv6: "یو یو آئی ڈی وی 6",
									nanoid: "نینو آئی ڈی",
									guid: "جی یو آئی ڈی",
									cuid: "سی یو آئی ڈی",
									cuid2: "سی یو آئی ڈی 2",
									ulid: "یو ایل آئی ڈی",
									xid: "ایکس آئی ڈی",
									ksuid: "کے ایس یو آئی ڈی",
									datetime: "آئی ایس او ڈیٹ ٹائم",
									date: "آئی ایس او تاریخ",
									time: "آئی ایس او وقت",
									duration: "آئی ایس او مدت",
									ipv4: "آئی پی وی 4 ایڈریس",
									ipv6: "آئی پی وی 6 ایڈریس",
									cidrv4: "آئی پی وی 4 رینج",
									cidrv6: "آئی پی وی 6 رینج",
									base64: "بیس 64 ان کوڈڈ سٹرنگ",
									base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
									json_string: "جے ایس او این سٹرنگ",
									e164: "ای 164 نمبر",
									jwt: "جے ڈبلیو ٹی",
									template_literal: "ان پٹ",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `غلط ان پٹ: ${a.expected} متوقع تھا، ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "نمبر"
													case "object":
														if (Array.isArray(e)) return "آرے"
														if (null === e) return "نل"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)} موصول ہوا`
										case "invalid_value":
											if (1 === a.values.length) return `غلط ان پٹ: ${ec(a.values[0])} متوقع تھا`
											return `غلط آپشن: ${q(a.values, "|")} میں سے ایک متوقع تھا`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `بہت بڑا: ${a.origin ?? "ویلیو"} کے ${t}${a.maximum.toString()} ${i.unit ?? "عناصر"} ہونے متوقع تھے`
											return `بہت بڑا: ${a.origin ?? "ویلیو"} کا ${t}${a.maximum.toString()} ہونا متوقع تھا`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `بہت چھوٹا: ${a.origin} کے ${t}${a.minimum.toString()} ${i.unit} ہونے متوقع تھے`
											return `بہت چھوٹا: ${a.origin} کا ${t}${a.minimum.toString()} ہونا متوقع تھا`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `غلط سٹرنگ: "${a.prefix}" سے شروع ہونا چاہیے`
											if ("ends_with" === a.format)
												return `غلط سٹرنگ: "${a.suffix}" پر ختم ہونا چاہیے`
											if ("includes" === a.format)
												return `غلط سٹرنگ: "${a.includes}" شامل ہونا چاہیے`
											if ("regex" === a.format)
												return `غلط سٹرنگ: پیٹرن ${a.pattern} سے میچ ہونا چاہیے`
											return `غلط ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `غلط نمبر: ${a.divisor} کا مضاعف ہونا چاہیے`
										case "unrecognized_keys":
											return `غیر تسلیم شدہ کی${a.keys.length > 1 ? "ز" : ""}: ${q(a.keys, "، ")}`
										case "invalid_key":
											return `${a.origin} میں غلط کی`
										case "invalid_union":
											return "غلط ان پٹ"
										case "invalid_element":
											return `${a.origin} میں غلط ویلیو`
										default:
											return `غلط ان پٹ`
									}
								}),
						}
					},
					"vi",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "ký tự", verb: "có" },
									file: { unit: "byte", verb: "có" },
									array: { unit: "phần tử", verb: "có" },
									set: { unit: "phần tử", verb: "có" },
								}),
								(t = {
									regex: "đầu vào",
									email: "địa chỉ email",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ngày giờ ISO",
									date: "ngày ISO",
									time: "giờ ISO",
									duration: "khoảng thời gian ISO",
									ipv4: "địa chỉ IPv4",
									ipv6: "địa chỉ IPv6",
									cidrv4: "dải IPv4",
									cidrv6: "dải IPv6",
									base64: "chuỗi mã hóa base64",
									base64url: "chuỗi mã hóa base64url",
									json_string: "chuỗi JSON",
									e164: "số E.164",
									jwt: "JWT",
									template_literal: "đầu vào",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${a.expected}, nhận được ${((
												e,
											) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "số"
													case "object":
														if (Array.isArray(e)) return "mảng"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length)
												return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${ec(a.values[0])}`
											return `T\xf9y chọn kh\xf4ng hợp lệ: mong đợi một trong c\xe1c gi\xe1 trị ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `Qu\xe1 lớn: mong đợi ${a.origin ?? "giá trị"} ${i.verb} ${t}${a.maximum.toString()} ${i.unit ?? "phần tử"}`
											return `Qu\xe1 lớn: mong đợi ${a.origin ?? "giá trị"} ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `Qu\xe1 nhỏ: mong đợi ${a.origin} ${i.verb} ${t}${a.minimum.toString()} ${i.unit}`
											return `Qu\xe1 nhỏ: mong đợi ${a.origin} ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `Chuỗi kh\xf4ng hợp lệ: phải bắt đầu bằng "${a.prefix}"`
											if ("ends_with" === a.format)
												return `Chuỗi kh\xf4ng hợp lệ: phải kết th\xfac bằng "${a.suffix}"`
											if ("includes" === a.format)
												return `Chuỗi kh\xf4ng hợp lệ: phải bao gồm "${a.includes}"`
											if ("regex" === a.format)
												return `Chuỗi kh\xf4ng hợp lệ: phải khớp với mẫu ${a.pattern}`
											return `${t[a.format] ?? a.format} kh\xf4ng hợp lệ`
										case "not_multiple_of":
											return `Số kh\xf4ng hợp lệ: phải l\xe0 bội số của ${a.divisor}`
										case "unrecognized_keys":
											return `Kh\xf3a kh\xf4ng được nhận dạng: ${q(a.keys, ", ")}`
										case "invalid_key":
											return `Kh\xf3a kh\xf4ng hợp lệ trong ${a.origin}`
										case "invalid_union":
											return "Đầu vào không hợp lệ"
										case "invalid_element":
											return `Gi\xe1 trị kh\xf4ng hợp lệ trong ${a.origin}`
										default:
											return `Đầu v\xe0o kh\xf4ng hợp lệ`
									}
								}),
						}
					},
					"zhCN",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "字符", verb: "包含" },
									file: { unit: "字节", verb: "包含" },
									array: { unit: "项", verb: "包含" },
									set: { unit: "项", verb: "包含" },
								}),
								(t = {
									regex: "输入",
									email: "电子邮件",
									url: "URL",
									emoji: "表情符号",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO日期时间",
									date: "ISO日期",
									time: "ISO时间",
									duration: "ISO时长",
									ipv4: "IPv4地址",
									ipv6: "IPv6地址",
									cidrv4: "IPv4网段",
									cidrv6: "IPv6网段",
									base64: "base64编码字符串",
									base64url: "base64url编码字符串",
									json_string: "JSON字符串",
									e164: "E.164号码",
									jwt: "JWT",
									template_literal: "输入",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `无效输入：期望 ${a.expected}，实际接收 ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "非数字(NaN)" : "数字"
													case "object":
														if (Array.isArray(e)) return "数组"
														if (null === e) return "空值(null)"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length) return `无效输入：期望 ${ec(a.values[0])}`
											return `无效选项：期望以下之一 ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `数值过大：期望 ${a.origin ?? "值"} ${t}${a.maximum.toString()} ${i.unit ?? "个元素"}`
											return `数值过大：期望 ${a.origin ?? "值"} ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `数值过小：期望 ${a.origin} ${t}${a.minimum.toString()} ${i.unit}`
											return `数值过小：期望 ${a.origin} ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `无效字符串：必须以 "${a.prefix}" 开头`
											if ("ends_with" === a.format) return `无效字符串：必须以 "${a.suffix}" 结尾`
											if ("includes" === a.format) return `无效字符串：必须包含 "${a.includes}"`
											if ("regex" === a.format)
												return `无效字符串：必须满足正则表达式 ${a.pattern}`
											return `无效${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `无效数字：必须是 ${a.divisor} 的倍数`
										case "unrecognized_keys":
											return `出现未知的键(key): ${q(a.keys, ", ")}`
										case "invalid_key":
											return `${a.origin} 中的键(key)无效`
										case "invalid_union":
											return "无效输入"
										case "invalid_element":
											return `${a.origin} 中包含无效值(value)`
										default:
											return `无效输入`
									}
								}),
						}
					},
					"zhTW",
					0,
					function () {
						let e, t
						return {
							localeError:
								((e = {
									string: { unit: "字元", verb: "擁有" },
									file: { unit: "位元組", verb: "擁有" },
									array: { unit: "項目", verb: "擁有" },
									set: { unit: "項目", verb: "擁有" },
								}),
								(t = {
									regex: "輸入",
									email: "郵件地址",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO 日期時間",
									date: "ISO 日期",
									time: "ISO 時間",
									duration: "ISO 期間",
									ipv4: "IPv4 位址",
									ipv6: "IPv6 位址",
									cidrv4: "IPv4 範圍",
									cidrv6: "IPv6 範圍",
									base64: "base64 編碼字串",
									base64url: "base64url 編碼字串",
									json_string: "JSON 字串",
									e164: "E.164 數值",
									jwt: "JWT",
									template_literal: "輸入",
								}),
								(a) => {
									switch (a.code) {
										case "invalid_type":
											return `無效的輸入值：預期為 ${a.expected}，但收到 ${((e) => {
												let t = typeof e
												switch (t) {
													case "number":
														return Number.isNaN(e) ? "NaN" : "number"
													case "object":
														if (Array.isArray(e)) return "array"
														if (null === e) return "null"
														if (
															Object.getPrototypeOf(e) !== Object.prototype &&
															e.constructor
														)
															return e.constructor.name
												}
												return t
											})(a.input)}`
										case "invalid_value":
											if (1 === a.values.length) return `無效的輸入值：預期為 ${ec(a.values[0])}`
											return `無效的選項：預期為以下其中之一 ${q(a.values, "|")}`
										case "too_big": {
											let t = a.inclusive ? "<=" : "<",
												i = e[a.origin] ?? null
											if (i)
												return `數值過大：預期 ${a.origin ?? "值"} 應為 ${t}${a.maximum.toString()} ${i.unit ?? "個元素"}`
											return `數值過大：預期 ${a.origin ?? "值"} 應為 ${t}${a.maximum.toString()}`
										}
										case "too_small": {
											let t = a.inclusive ? ">=" : ">",
												i = e[a.origin] ?? null
											if (i)
												return `數值過小：預期 ${a.origin} 應為 ${t}${a.minimum.toString()} ${i.unit}`
											return `數值過小：預期 ${a.origin} 應為 ${t}${a.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === a.format)
												return `無效的字串：必須以 "${a.prefix}" 開頭`
											if ("ends_with" === a.format) return `無效的字串：必須以 "${a.suffix}" 結尾`
											if ("includes" === a.format) return `無效的字串：必須包含 "${a.includes}"`
											if ("regex" === a.format) return `無效的字串：必須符合格式 ${a.pattern}`
											return `無效的 ${t[a.format] ?? a.format}`
										case "not_multiple_of":
											return `無效的數字：必須為 ${a.divisor} 的倍數`
										case "unrecognized_keys":
											return `無法識別的鍵值${a.keys.length > 1 ? "們" : ""}：${q(a.keys, "、")}`
										case "invalid_key":
											return `${a.origin} 中有無效的鍵值`
										case "invalid_union":
											return "無效的輸入值"
										case "invalid_element":
											return `${a.origin} 中有無效的值`
										default:
											return `無效的輸入值`
									}
								}),
						}
					},
				],
				12577,
			)
		var io = e.i(12577)
		let is = Symbol("ZodOutput"),
			il = Symbol("ZodInput")
		class iu {
			constructor() {
				;(this._map = new Map()), (this._idmap = new Map())
			}
			add(e, ...t) {
				let a = t[0]
				if ((this._map.set(e, a), a && "object" == typeof a && "id" in a)) {
					if (this._idmap.has(a.id)) throw Error(`ID ${a.id} already exists in the registry`)
					this._idmap.set(a.id, e)
				}
				return this
			}
			clear() {
				return (this._map = new Map()), (this._idmap = new Map()), this
			}
			remove(e) {
				let t = this._map.get(e)
				return t && "object" == typeof t && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this
			}
			get(e) {
				let t = e._zod.parent
				if (t) {
					let a = { ...(this.get(t) ?? {}) }
					return delete a.id, { ...a, ...this._map.get(e) }
				}
				return this._map.get(e)
			}
			has(e) {
				return this._map.has(e)
			}
		}
		function id() {
			return new iu()
		}
		let ic = id()
		function im(e, t) {
			return new e({ type: "string", ...eu(t) })
		}
		function ip(e, t) {
			return new e({ type: "string", coerce: !0, ...eu(t) })
		}
		function ig(e, t) {
			return new e({ type: "string", format: "email", check: "string_format", abort: !1, ...eu(t) })
		}
		function ih(e, t) {
			return new e({ type: "string", format: "guid", check: "string_format", abort: !1, ...eu(t) })
		}
		function iv(e, t) {
			return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, ...eu(t) })
		}
		function ib(e, t) {
			return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v4", ...eu(t) })
		}
		function ik(e, t) {
			return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v6", ...eu(t) })
		}
		function iy(e, t) {
			return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v7", ...eu(t) })
		}
		function ix(e, t) {
			return new e({ type: "string", format: "url", check: "string_format", abort: !1, ...eu(t) })
		}
		function iz(e, t) {
			return new e({ type: "string", format: "emoji", check: "string_format", abort: !1, ...eu(t) })
		}
		function iw(e, t) {
			return new e({ type: "string", format: "nanoid", check: "string_format", abort: !1, ...eu(t) })
		}
		function i_(e, t) {
			return new e({ type: "string", format: "cuid", check: "string_format", abort: !1, ...eu(t) })
		}
		function i$(e, t) {
			return new e({ type: "string", format: "cuid2", check: "string_format", abort: !1, ...eu(t) })
		}
		function ij(e, t) {
			return new e({ type: "string", format: "ulid", check: "string_format", abort: !1, ...eu(t) })
		}
		function iI(e, t) {
			return new e({ type: "string", format: "xid", check: "string_format", abort: !1, ...eu(t) })
		}
		function iS(e, t) {
			return new e({ type: "string", format: "ksuid", check: "string_format", abort: !1, ...eu(t) })
		}
		function iC(e, t) {
			return new e({ type: "string", format: "ipv4", check: "string_format", abort: !1, ...eu(t) })
		}
		function iN(e, t) {
			return new e({ type: "string", format: "ipv6", check: "string_format", abort: !1, ...eu(t) })
		}
		function iO(e, t) {
			return new e({ type: "string", format: "cidrv4", check: "string_format", abort: !1, ...eu(t) })
		}
		function iE(e, t) {
			return new e({ type: "string", format: "cidrv6", check: "string_format", abort: !1, ...eu(t) })
		}
		function iP(e, t) {
			return new e({ type: "string", format: "base64", check: "string_format", abort: !1, ...eu(t) })
		}
		function iU(e, t) {
			return new e({ type: "string", format: "base64url", check: "string_format", abort: !1, ...eu(t) })
		}
		function iT(e, t) {
			return new e({ type: "string", format: "e164", check: "string_format", abort: !1, ...eu(t) })
		}
		function iA(e, t) {
			return new e({ type: "string", format: "jwt", check: "string_format", abort: !1, ...eu(t) })
		}
		e.s(
			[
				"$ZodRegistry",
				() => iu,
				"$input",
				0,
				il,
				"$output",
				0,
				is,
				"globalRegistry",
				0,
				ic,
				"registry",
				() => id,
			],
			35482,
		),
			e.i(35482),
			e.i(12268)
		let iD = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 }
		function iZ(e, t) {
			return new e({
				type: "string",
				format: "datetime",
				check: "string_format",
				offset: !1,
				local: !1,
				precision: null,
				...eu(t),
			})
		}
		function iR(e, t) {
			return new e({ type: "string", format: "date", check: "string_format", ...eu(t) })
		}
		function iL(e, t) {
			return new e({ type: "string", format: "time", check: "string_format", precision: null, ...eu(t) })
		}
		function iM(e, t) {
			return new e({ type: "string", format: "duration", check: "string_format", ...eu(t) })
		}
		function iq(e, t) {
			return new e({ type: "number", checks: [], ...eu(t) })
		}
		function iK(e, t) {
			return new e({ type: "number", coerce: !0, checks: [], ...eu(t) })
		}
		function iF(e, t) {
			return new e({ type: "number", check: "number_format", abort: !1, format: "safeint", ...eu(t) })
		}
		function iB(e, t) {
			return new e({ type: "number", check: "number_format", abort: !1, format: "float32", ...eu(t) })
		}
		function iG(e, t) {
			return new e({ type: "number", check: "number_format", abort: !1, format: "float64", ...eu(t) })
		}
		function iV(e, t) {
			return new e({ type: "number", check: "number_format", abort: !1, format: "int32", ...eu(t) })
		}
		function iW(e, t) {
			return new e({ type: "number", check: "number_format", abort: !1, format: "uint32", ...eu(t) })
		}
		function iJ(e, t) {
			return new e({ type: "boolean", ...eu(t) })
		}
		function iH(e, t) {
			return new e({ type: "boolean", coerce: !0, ...eu(t) })
		}
		function iX(e, t) {
			return new e({ type: "bigint", ...eu(t) })
		}
		function iQ(e, t) {
			return new e({ type: "bigint", coerce: !0, ...eu(t) })
		}
		function iY(e, t) {
			return new e({ type: "bigint", check: "bigint_format", abort: !1, format: "int64", ...eu(t) })
		}
		function i0(e, t) {
			return new e({ type: "bigint", check: "bigint_format", abort: !1, format: "uint64", ...eu(t) })
		}
		function i1(e, t) {
			return new e({ type: "symbol", ...eu(t) })
		}
		function i4(e, t) {
			return new e({ type: "undefined", ...eu(t) })
		}
		function i6(e, t) {
			return new e({ type: "null", ...eu(t) })
		}
		function i2(e) {
			return new e({ type: "any" })
		}
		function i9(e) {
			return new e({ type: "unknown" })
		}
		function i3(e, t) {
			return new e({ type: "never", ...eu(t) })
		}
		function i5(e, t) {
			return new e({ type: "void", ...eu(t) })
		}
		function i8(e, t) {
			return new e({ type: "date", ...eu(t) })
		}
		function i7(e, t) {
			return new e({ type: "date", coerce: !0, ...eu(t) })
		}
		function ne(e, t) {
			return new e({ type: "nan", ...eu(t) })
		}
		function nt(e, t) {
			return new tz({ check: "less_than", ...eu(t), value: e, inclusive: !1 })
		}
		function na(e, t) {
			return new tz({ check: "less_than", ...eu(t), value: e, inclusive: !0 })
		}
		function ni(e, t) {
			return new tw({ check: "greater_than", ...eu(t), value: e, inclusive: !1 })
		}
		function nn(e, t) {
			return new tw({ check: "greater_than", ...eu(t), value: e, inclusive: !0 })
		}
		function nr(e) {
			return ni(0, e)
		}
		function no(e) {
			return nt(0, e)
		}
		function ns(e) {
			return na(0, e)
		}
		function nl(e) {
			return nn(0, e)
		}
		function nu(e, t) {
			return new t_({ check: "multiple_of", ...eu(t), value: e })
		}
		function nd(e, t) {
			return new tI({ check: "max_size", ...eu(t), maximum: e })
		}
		function nc(e, t) {
			return new tS({ check: "min_size", ...eu(t), minimum: e })
		}
		function nm(e, t) {
			return new tC({ check: "size_equals", ...eu(t), size: e })
		}
		function np(e, t) {
			return new tN({ check: "max_length", ...eu(t), maximum: e })
		}
		function ng(e, t) {
			return new tO({ check: "min_length", ...eu(t), minimum: e })
		}
		function nh(e, t) {
			return new tE({ check: "length_equals", ...eu(t), length: e })
		}
		function nf(e, t) {
			return new tU({ check: "string_format", format: "regex", ...eu(t), pattern: e })
		}
		function nv(e) {
			return new tT({ check: "string_format", format: "lowercase", ...eu(e) })
		}
		function nb(e) {
			return new tA({ check: "string_format", format: "uppercase", ...eu(e) })
		}
		function nk(e, t) {
			return new tD({ check: "string_format", format: "includes", ...eu(t), includes: e })
		}
		function ny(e, t) {
			return new tZ({ check: "string_format", format: "starts_with", ...eu(t), prefix: e })
		}
		function nx(e, t) {
			return new tR({ check: "string_format", format: "ends_with", ...eu(t), suffix: e })
		}
		function nz(e, t, a) {
			return new tM({ check: "property", property: e, schema: t, ...eu(a) })
		}
		function nw(e, t) {
			return new tq({ check: "mime_type", mime: e, ...eu(t) })
		}
		function n_(e) {
			return new tK({ check: "overwrite", tx: e })
		}
		function n$(e) {
			return n_((t) => t.normalize(e))
		}
		function nj() {
			return n_((e) => e.trim())
		}
		function nI() {
			return n_((e) => e.toLowerCase())
		}
		function nS() {
			return n_((e) => e.toUpperCase())
		}
		function nC(e, t, a) {
			return new e({ type: "array", element: t, ...eu(a) })
		}
		function nN(e, t, a) {
			return new e({ type: "union", options: t, ...eu(a) })
		}
		function nO(e, t, a, i) {
			return new e({ type: "union", options: a, discriminator: t, ...eu(i) })
		}
		function nE(e, t, a) {
			return new e({ type: "intersection", left: t, right: a })
		}
		function nP(e, t, a, i) {
			let n = a instanceof tG,
				r = n ? i : a
			return new e({ type: "tuple", items: t, rest: n ? a : null, ...eu(r) })
		}
		function nU(e, t, a, i) {
			return new e({ type: "record", keyType: t, valueType: a, ...eu(i) })
		}
		function nT(e, t, a, i) {
			return new e({ type: "map", keyType: t, valueType: a, ...eu(i) })
		}
		function nA(e, t, a) {
			return new e({ type: "set", valueType: t, ...eu(a) })
		}
		function nD(e, t, a) {
			return new e({
				type: "enum",
				entries: Array.isArray(t) ? Object.fromEntries(t.map((e) => [e, e])) : t,
				...eu(a),
			})
		}
		function nZ(e, t, a) {
			return new e({ type: "enum", entries: t, ...eu(a) })
		}
		function nR(e, t, a) {
			return new e({ type: "literal", values: Array.isArray(t) ? t : [t], ...eu(a) })
		}
		function nL(e, t) {
			return new e({ type: "file", ...eu(t) })
		}
		function nM(e, t) {
			return new e({ type: "transform", transform: t })
		}
		function nq(e, t) {
			return new e({ type: "optional", innerType: t })
		}
		function nK(e, t) {
			return new e({ type: "nullable", innerType: t })
		}
		function nF(e, t, a) {
			return new e({
				type: "default",
				innerType: t,
				get defaultValue() {
					return "function" == typeof a ? a() : a
				},
			})
		}
		function nB(e, t, a) {
			return new e({ type: "nonoptional", innerType: t, ...eu(a) })
		}
		function nG(e, t) {
			return new e({ type: "success", innerType: t })
		}
		function nV(e, t, a) {
			return new e({ type: "catch", innerType: t, catchValue: "function" == typeof a ? a : () => a })
		}
		function nW(e, t, a) {
			return new e({ type: "pipe", in: t, out: a })
		}
		function nJ(e, t) {
			return new e({ type: "readonly", innerType: t })
		}
		function nH(e, t, a) {
			return new e({ type: "template_literal", parts: t, ...eu(a) })
		}
		function nX(e, t) {
			return new e({ type: "lazy", getter: t })
		}
		function nQ(e, t) {
			return new e({ type: "promise", innerType: t })
		}
		function nY(e, t, a) {
			let i = eu(a)
			return i.abort ?? (i.abort = !0), new e({ type: "custom", check: "custom", fn: t, ...i })
		}
		function n0(e, t, a) {
			return new e({ type: "custom", check: "custom", fn: t, ...eu(a) })
		}
		function n1(e, t) {
			let a = eu(t),
				i = a.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
				n = a.falsy ?? ["false", "0", "no", "off", "n", "disabled"]
			"sensitive" !== a.case &&
				((i = i.map((e) => ("string" == typeof e ? e.toLowerCase() : e))),
				(n = n.map((e) => ("string" == typeof e ? e.toLowerCase() : e))))
			let r = new Set(i),
				o = new Set(n),
				s = e.Pipe ?? a4,
				l = e.Boolean ?? ag,
				u = e.String ?? tV,
				d = new (e.Transform ?? aB)({
					type: "transform",
					transform: (e, t) => {
						let i = e
						return (
							"sensitive" !== a.case && (i = i.toLowerCase()),
							!!r.has(i) ||
								(!o.has(i) &&
									(t.issues.push({
										code: "invalid_value",
										expected: "stringbool",
										values: [...r, ...o],
										input: t.value,
										inst: d,
									}),
									{}))
						)
					},
					error: a.error,
				}),
				c = new s({ type: "pipe", in: new u({ type: "string", error: a.error }), out: d, error: a.error })
			return new s({ type: "pipe", in: c, out: new l({ type: "boolean", error: a.error }), error: a.error })
		}
		function n4(e, t, a, i = {}) {
			let n = eu(i),
				r = {
					...eu(i),
					check: "string_format",
					type: "string",
					format: t,
					fn: "function" == typeof a ? a : (e) => a.test(e),
					...n,
				}
			return a instanceof RegExp && (r.pattern = a), new e(r)
		}
		e.s(
			[
				"TimePrecision",
				0,
				iD,
				"_any",
				() => i2,
				"_array",
				() => nC,
				"_base64",
				() => iP,
				"_base64url",
				() => iU,
				"_bigint",
				() => iX,
				"_boolean",
				() => iJ,
				"_catch",
				() => nV,
				"_cidrv4",
				() => iO,
				"_cidrv6",
				() => iE,
				"_coercedBigint",
				() => iQ,
				"_coercedBoolean",
				() => iH,
				"_coercedDate",
				() => i7,
				"_coercedNumber",
				() => iK,
				"_coercedString",
				() => ip,
				"_cuid",
				() => i_,
				"_cuid2",
				() => i$,
				"_custom",
				() => nY,
				"_date",
				() => i8,
				"_default",
				() => nF,
				"_discriminatedUnion",
				() => nO,
				"_e164",
				() => iT,
				"_email",
				() => ig,
				"_emoji",
				() => iz,
				"_endsWith",
				() => nx,
				"_enum",
				() => nD,
				"_file",
				() => nL,
				"_float32",
				() => iB,
				"_float64",
				() => iG,
				"_gt",
				() => ni,
				"_gte",
				() => nn,
				"_guid",
				() => ih,
				"_includes",
				() => nk,
				"_int",
				() => iF,
				"_int32",
				() => iV,
				"_int64",
				() => iY,
				"_intersection",
				() => nE,
				"_ipv4",
				() => iC,
				"_ipv6",
				() => iN,
				"_isoDate",
				() => iR,
				"_isoDateTime",
				() => iZ,
				"_isoDuration",
				() => iM,
				"_isoTime",
				() => iL,
				"_jwt",
				() => iA,
				"_ksuid",
				() => iS,
				"_lazy",
				() => nX,
				"_length",
				() => nh,
				"_literal",
				() => nR,
				"_lowercase",
				() => nv,
				"_lt",
				() => nt,
				"_lte",
				() => na,
				"_map",
				() => nT,
				"_max",
				() => na,
				"_maxLength",
				() => np,
				"_maxSize",
				() => nd,
				"_mime",
				() => nw,
				"_min",
				() => nn,
				"_minLength",
				() => ng,
				"_minSize",
				() => nc,
				"_multipleOf",
				() => nu,
				"_nan",
				() => ne,
				"_nanoid",
				() => iw,
				"_nativeEnum",
				() => nZ,
				"_negative",
				() => no,
				"_never",
				() => i3,
				"_nonnegative",
				() => nl,
				"_nonoptional",
				() => nB,
				"_nonpositive",
				() => ns,
				"_normalize",
				() => n$,
				"_null",
				() => i6,
				"_nullable",
				() => nK,
				"_number",
				() => iq,
				"_optional",
				() => nq,
				"_overwrite",
				() => n_,
				"_pipe",
				() => nW,
				"_positive",
				() => nr,
				"_promise",
				() => nQ,
				"_property",
				() => nz,
				"_readonly",
				() => nJ,
				"_record",
				() => nU,
				"_refine",
				() => n0,
				"_regex",
				() => nf,
				"_set",
				() => nA,
				"_size",
				() => nm,
				"_startsWith",
				() => ny,
				"_string",
				() => im,
				"_stringFormat",
				() => n4,
				"_stringbool",
				() => n1,
				"_success",
				() => nG,
				"_symbol",
				() => i1,
				"_templateLiteral",
				() => nH,
				"_toLowerCase",
				() => nI,
				"_toUpperCase",
				() => nS,
				"_transform",
				() => nM,
				"_trim",
				() => nj,
				"_tuple",
				() => nP,
				"_uint32",
				() => iW,
				"_uint64",
				() => i0,
				"_ulid",
				() => ij,
				"_undefined",
				() => i4,
				"_union",
				() => nN,
				"_unknown",
				() => i9,
				"_uppercase",
				() => nb,
				"_url",
				() => ix,
				"_uuid",
				() => iv,
				"_uuidv4",
				() => ib,
				"_uuidv6",
				() => ik,
				"_uuidv7",
				() => iy,
				"_void",
				() => i5,
				"_xid",
				() => iI,
			],
			29075,
		)
		class n6 {
			constructor(e) {
				;(this._def = e), (this.def = e)
			}
			implement(e) {
				if ("function" != typeof e) throw Error("implement() must be called with a function")
				let t = (...a) => {
					let i = this._def.input ? eL(this._def.input, a, void 0, { callee: t }) : a
					if (!Array.isArray(i)) throw Error("Invalid arguments schema: not an array or tuple schema.")
					let n = e(...i)
					return this._def.output ? eL(this._def.output, n, void 0, { callee: t }) : n
				}
				return t
			}
			implementAsync(e) {
				if ("function" != typeof e) throw Error("implement() must be called with a function")
				let t = async (...a) => {
					let i = this._def.input ? await eq(this._def.input, a, void 0, { callee: t }) : a
					if (!Array.isArray(i)) throw Error("Invalid arguments schema: not an array or tuple schema.")
					let n = await e(...i)
					return this._def.output ? eq(this._def.output, n, void 0, { callee: t }) : n
				}
				return t
			}
			input(...e) {
				let t = this.constructor
				return new t(
					Array.isArray(e[0])
						? {
								type: "function",
								input: new aT({ type: "tuple", items: e[0], rest: e[1] }),
								output: this._def.output,
							}
						: { type: "function", input: e[0], output: this._def.output },
				)
			}
			output(e) {
				return new this.constructor({ type: "function", input: this._def.input, output: e })
			}
		}
		function n2(e) {
			return new n6({
				type: "function",
				input: Array.isArray(e?.input) ? nP(aT, e?.input) : (e?.input ?? nC(aj, i9(ax))),
				output: e?.output ?? i9(ax),
			})
		}
		e.s(["$ZodFunction", () => n6, "function", () => n2], 22703), e.i(22703), e.i(29075)
		class n9 {
			constructor(e) {
				;(this.counter = 0),
					(this.metadataRegistry = e?.metadata ?? ic),
					(this.target = e?.target ?? "draft-2020-12"),
					(this.unrepresentable = e?.unrepresentable ?? "throw"),
					(this.override = e?.override ?? (() => {})),
					(this.io = e?.io ?? "output"),
					(this.seen = new Map())
			}
			process(e, t = { path: [], schemaPath: [] }) {
				var a
				let i = e._zod.def,
					n = this.seen.get(e)
				if (n) return n.count++, t.schemaPath.includes(e) && (n.cycle = t.path), n.schema
				let r = { schema: {}, count: 1, cycle: void 0, path: t.path }
				this.seen.set(e, r)
				let o = e._zod.toJSONSchema?.()
				if (o) r.schema = o
				else {
					let a = { ...t, schemaPath: [...t.schemaPath, e], path: t.path },
						n = e._zod.parent
					if (n) (r.ref = n), this.process(n, a), (this.seen.get(n).isParent = !0)
					else {
						let t = r.schema
						switch (i.type) {
							case "string": {
								t.type = "string"
								let { minimum: a, maximum: i, format: n, patterns: o, contentEncoding: s } = e._zod.bag
								if (
									("number" == typeof a && (t.minLength = a),
									"number" == typeof i && (t.maxLength = i),
									n &&
										((t.format =
											{
												guid: "uuid",
												url: "uri",
												datetime: "date-time",
												json_string: "json-string",
												regex: "",
											}[n] ?? n),
										"" === t.format && delete t.format),
									s && (t.contentEncoding = s),
									o && o.size > 0)
								) {
									let e = [...o]
									1 === e.length
										? (t.pattern = e[0].source)
										: e.length > 1 &&
											(r.schema.allOf = [
												...e.map((e) => ({
													...("draft-7" === this.target ? { type: "string" } : {}),
													pattern: e.source,
												})),
											])
								}
								break
							}
							case "number": {
								let {
									minimum: a,
									maximum: i,
									format: n,
									multipleOf: r,
									exclusiveMaximum: o,
									exclusiveMinimum: s,
								} = e._zod.bag
								"string" == typeof n && n.includes("int") ? (t.type = "integer") : (t.type = "number"),
									"number" == typeof s && (t.exclusiveMinimum = s),
									"number" == typeof a &&
										((t.minimum = a),
										"number" == typeof s &&
											(s >= a ? delete t.minimum : delete t.exclusiveMinimum)),
									"number" == typeof o && (t.exclusiveMaximum = o),
									"number" == typeof i &&
										((t.maximum = i),
										"number" == typeof o &&
											(o <= i ? delete t.maximum : delete t.exclusiveMaximum)),
									"number" == typeof r && (t.multipleOf = r)
								break
							}
							case "boolean":
							case "success":
								t.type = "boolean"
								break
							case "bigint":
								if ("throw" === this.unrepresentable)
									throw Error("BigInt cannot be represented in JSON Schema")
								break
							case "symbol":
								if ("throw" === this.unrepresentable)
									throw Error("Symbols cannot be represented in JSON Schema")
								break
							case "null":
								t.type = "null"
								break
							case "any":
							case "unknown":
								break
							case "undefined":
								if ("throw" === this.unrepresentable)
									throw Error("Undefined cannot be represented in JSON Schema")
								break
							case "void":
								if ("throw" === this.unrepresentable)
									throw Error("Void cannot be represented in JSON Schema")
								break
							case "never":
								t.not = {}
								break
							case "date":
								if ("throw" === this.unrepresentable)
									throw Error("Date cannot be represented in JSON Schema")
								break
							case "array": {
								let { minimum: n, maximum: r } = e._zod.bag
								"number" == typeof n && (t.minItems = n),
									"number" == typeof r && (t.maxItems = r),
									(t.type = "array"),
									(t.items = this.process(i.element, { ...a, path: [...a.path, "items"] }))
								break
							}
							case "object": {
								;(t.type = "object"), (t.properties = {})
								let e = i.shape
								for (let i in e)
									t.properties[i] = this.process(e[i], { ...a, path: [...a.path, "properties", i] })
								let n = new Set(
									[...new Set(Object.keys(e))].filter((e) => {
										let t = i.shape[e]._zod
										return "input" === this.io ? void 0 === t.optin : void 0 === t.optout
									}),
								)
								n.size > 0 && (t.required = Array.from(n)),
									i.catchall?._zod.def.type === "never"
										? (t.additionalProperties = !1)
										: i.catchall
											? i.catchall &&
												(t.additionalProperties = this.process(i.catchall, {
													...a,
													path: [...a.path, "additionalProperties"],
												}))
											: "output" === this.io && (t.additionalProperties = !1)
								break
							}
							case "union":
								t.anyOf = i.options.map((e, t) =>
									this.process(e, { ...a, path: [...a.path, "anyOf", t] }),
								)
								break
							case "intersection": {
								let e = this.process(i.left, { ...a, path: [...a.path, "allOf", 0] }),
									n = this.process(i.right, { ...a, path: [...a.path, "allOf", 1] }),
									r = (e) => "allOf" in e && 1 === Object.keys(e).length
								t.allOf = [...(r(e) ? e.allOf : [e]), ...(r(n) ? n.allOf : [n])]
								break
							}
							case "tuple": {
								t.type = "array"
								let n = i.items.map((e, t) =>
									this.process(e, { ...a, path: [...a.path, "prefixItems", t] }),
								)
								if (("draft-2020-12" === this.target ? (t.prefixItems = n) : (t.items = n), i.rest)) {
									let e = this.process(i.rest, { ...a, path: [...a.path, "items"] })
									"draft-2020-12" === this.target ? (t.items = e) : (t.additionalItems = e)
								}
								i.rest && (t.items = this.process(i.rest, { ...a, path: [...a.path, "items"] }))
								let { minimum: r, maximum: o } = e._zod.bag
								"number" == typeof r && (t.minItems = r), "number" == typeof o && (t.maxItems = o)
								break
							}
							case "record":
								;(t.type = "object"),
									(t.propertyNames = this.process(i.keyType, {
										...a,
										path: [...a.path, "propertyNames"],
									})),
									(t.additionalProperties = this.process(i.valueType, {
										...a,
										path: [...a.path, "additionalProperties"],
									}))
								break
							case "map":
								if ("throw" === this.unrepresentable)
									throw Error("Map cannot be represented in JSON Schema")
								break
							case "set":
								if ("throw" === this.unrepresentable)
									throw Error("Set cannot be represented in JSON Schema")
								break
							case "enum": {
								let e = M(i.entries)
								e.every((e) => "number" == typeof e) && (t.type = "number"),
									e.every((e) => "string" == typeof e) && (t.type = "string"),
									(t.enum = e)
								break
							}
							case "literal": {
								let e = []
								for (let t of i.values)
									if (void 0 === t) {
										if ("throw" === this.unrepresentable)
											throw Error("Literal `undefined` cannot be represented in JSON Schema")
									} else if ("bigint" == typeof t)
										if ("throw" === this.unrepresentable)
											throw Error("BigInt literals cannot be represented in JSON Schema")
										else e.push(Number(t))
									else e.push(t)
								if (0 === e.length);
								else if (1 === e.length) {
									let a = e[0]
									;(t.type = null === a ? "null" : typeof a), (t.const = a)
								} else
									e.every((e) => "number" == typeof e) && (t.type = "number"),
										e.every((e) => "string" == typeof e) && (t.type = "string"),
										e.every((e) => "boolean" == typeof e) && (t.type = "string"),
										e.every((e) => null === e) && (t.type = "null"),
										(t.enum = e)
								break
							}
							case "file": {
								let a = { type: "string", format: "binary", contentEncoding: "binary" },
									{ minimum: i, maximum: n, mime: r } = e._zod.bag
								void 0 !== i && (a.minLength = i),
									void 0 !== n && (a.maxLength = n),
									r
										? 1 === r.length
											? ((a.contentMediaType = r[0]), Object.assign(t, a))
											: (t.anyOf = r.map((e) => ({ ...a, contentMediaType: e })))
										: Object.assign(t, a)
								break
							}
							case "transform":
								if ("throw" === this.unrepresentable)
									throw Error("Transforms cannot be represented in JSON Schema")
								break
							case "nullable":
								t.anyOf = [this.process(i.innerType, a), { type: "null" }]
								break
							case "nonoptional":
							case "promise":
							case "optional":
								this.process(i.innerType, a), (r.ref = i.innerType)
								break
							case "default":
								this.process(i.innerType, a),
									(r.ref = i.innerType),
									(t.default = JSON.parse(JSON.stringify(i.defaultValue)))
								break
							case "prefault":
								this.process(i.innerType, a),
									(r.ref = i.innerType),
									"input" === this.io && (t._prefault = JSON.parse(JSON.stringify(i.defaultValue)))
								break
							case "catch": {
								let e
								this.process(i.innerType, a), (r.ref = i.innerType)
								try {
									e = i.catchValue(void 0)
								} catch {
									throw Error("Dynamic catch values are not supported in JSON Schema")
								}
								t.default = e
								break
							}
							case "nan":
								if ("throw" === this.unrepresentable)
									throw Error("NaN cannot be represented in JSON Schema")
								break
							case "template_literal": {
								let a = e._zod.pattern
								if (!a) throw Error("Pattern not found in template literal")
								;(t.type = "string"), (t.pattern = a.source)
								break
							}
							case "pipe": {
								let e =
									"input" === this.io ? ("transform" === i.in._zod.def.type ? i.out : i.in) : i.out
								this.process(e, a), (r.ref = e)
								break
							}
							case "readonly":
								this.process(i.innerType, a), (r.ref = i.innerType), (t.readOnly = !0)
								break
							case "lazy": {
								let t = e._zod.innerType
								this.process(t, a), (r.ref = t)
								break
							}
							case "custom":
								if ("throw" === this.unrepresentable)
									throw Error("Custom types cannot be represented in JSON Schema")
						}
					}
				}
				let s = this.metadataRegistry.get(e)
				return (
					s && Object.assign(r.schema, s),
					"input" === this.io &&
						(function e(t, a) {
							let i = a ?? { seen: new Set() }
							if (i.seen.has(t)) return !1
							i.seen.add(t)
							let n = t._zod.def
							switch (n.type) {
								case "string":
								case "number":
								case "bigint":
								case "boolean":
								case "date":
								case "symbol":
								case "undefined":
								case "null":
								case "any":
								case "unknown":
								case "never":
								case "void":
								case "literal":
								case "enum":
								case "nan":
								case "file":
								case "template_literal":
								case "custom":
								case "success":
								case "catch":
									return !1
								case "array":
									return e(n.element, i)
								case "object":
									for (let t in n.shape) if (e(n.shape[t], i)) return !0
									return !1
								case "union":
									for (let t of n.options) if (e(t, i)) return !0
									return !1
								case "intersection":
									return e(n.left, i) || e(n.right, i)
								case "tuple":
									for (let t of n.items) if (e(t, i)) return !0
									if (n.rest && e(n.rest, i)) return !0
									return !1
								case "record":
								case "map":
									return e(n.keyType, i) || e(n.valueType, i)
								case "set":
									return e(n.valueType, i)
								case "promise":
								case "optional":
								case "nonoptional":
								case "nullable":
								case "readonly":
								case "default":
								case "prefault":
									return e(n.innerType, i)
								case "lazy":
									return e(n.getter(), i)
								case "transform":
									return !0
								case "pipe":
									return e(n.in, i) || e(n.out, i)
							}
							throw Error(`Unknown schema type: ${n.type}`)
						})(e) &&
						(delete r.schema.examples, delete r.schema.default),
					"input" === this.io &&
						r.schema._prefault &&
						((a = r.schema).default ?? (a.default = r.schema._prefault)),
					delete r.schema._prefault,
					this.seen.get(e).schema
				)
			}
			emit(e, t) {
				let a = { cycles: t?.cycles ?? "ref", reused: t?.reused ?? "inline", external: t?.external ?? void 0 },
					i = this.seen.get(e)
				if (!i) throw Error("Unprocessed schema. This is a bug in Zod.")
				let n = (e) => {
						let t = "draft-2020-12" === this.target ? "$defs" : "definitions"
						if (a.external) {
							let i = a.external.registry.get(e[0])?.id,
								n = a.external.uri ?? ((e) => e)
							if (i) return { ref: n(i) }
							let r = e[1].defId ?? e[1].schema.id ?? `schema${this.counter++}`
							return (e[1].defId = r), { defId: r, ref: `${n("__shared")}#/${t}/${r}` }
						}
						if (e[1] === i) return { ref: "#" }
						let n = `#/${t}/`,
							r = e[1].schema.id ?? `__schema${this.counter++}`
						return { defId: r, ref: n + r }
					},
					r = (e) => {
						if (e[1].schema.$ref) return
						let t = e[1],
							{ ref: a, defId: i } = n(e)
						;(t.def = { ...t.schema }), i && (t.defId = i)
						let r = t.schema
						for (let e in r) delete r[e]
						r.$ref = a
					}
				if ("throw" === a.cycles)
					for (let e of this.seen.entries()) {
						let t = e[1]
						if (t.cycle)
							throw Error(`Cycle detected: #/${t.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)
					}
				for (let t of this.seen.entries()) {
					let i = t[1]
					if (e === t[0]) {
						r(t)
						continue
					}
					if (a.external) {
						let i = a.external.registry.get(t[0])?.id
						if (e !== t[0] && i) {
							r(t)
							continue
						}
					}
					if (this.metadataRegistry.get(t[0])?.id || i.cycle || (i.count > 1 && "ref" === a.reused)) {
						r(t)
						continue
					}
				}
				let o = (e, t) => {
					let a = this.seen.get(e),
						i = a.def ?? a.schema,
						n = { ...i }
					if (null === a.ref) return
					let r = a.ref
					if (((a.ref = null), r)) {
						o(r, t)
						let e = this.seen.get(r).schema
						e.$ref && "draft-7" === t.target
							? ((i.allOf = i.allOf ?? []), i.allOf.push(e))
							: (Object.assign(i, e), Object.assign(i, n))
					}
					a.isParent || this.override({ zodSchema: e, jsonSchema: i, path: a.path ?? [] })
				}
				for (let e of [...this.seen.entries()].reverse()) o(e[0], { target: this.target })
				let s = {}
				if (
					("draft-2020-12" === this.target
						? (s.$schema = "https://json-schema.org/draft/2020-12/schema")
						: "draft-7" === this.target
							? (s.$schema = "http://json-schema.org/draft-07/schema#")
							: console.warn(`Invalid target: ${this.target}`),
					a.external?.uri)
				) {
					let t = a.external.registry.get(e)?.id
					if (!t) throw Error("Schema is missing an `id` property")
					s.$id = a.external.uri(t)
				}
				Object.assign(s, i.def)
				let l = a.external?.defs ?? {}
				for (let e of this.seen.entries()) {
					let t = e[1]
					t.def && t.defId && (l[t.defId] = t.def)
				}
				a.external ||
					(Object.keys(l).length > 0 &&
						("draft-2020-12" === this.target ? (s.$defs = l) : (s.definitions = l)))
				try {
					return JSON.parse(JSON.stringify(s))
				} catch (e) {
					throw Error("Error converting schema to JSON.")
				}
			}
		}
		function n3(e, t) {
			if (e instanceof iu) {
				let a = new n9(t),
					i = {}
				for (let t of e._idmap.entries()) {
					let [e, i] = t
					a.process(i)
				}
				let n = {},
					r = { registry: e, uri: t?.uri, defs: i }
				for (let i of e._idmap.entries()) {
					let [e, o] = i
					n[e] = a.emit(o, { ...t, external: r })
				}
				return (
					Object.keys(i).length > 0 &&
						(n.__shared = { ["draft-2020-12" === a.target ? "$defs" : "definitions"]: i }),
					{ schemas: n }
				)
			}
			let a = new n9(t)
			return a.process(e), a.emit(e, t)
		}
		e.s(["JSONSchemaGenerator", () => n9, "toJSONSchema", () => n3], 22881), e.i(22881), e.s([], 69896)
		var n5 = e.i(69896)
		e.s(
			[
				"$ZodAny",
				0,
				ay,
				"$ZodArray",
				0,
				aj,
				"$ZodAsyncError",
				() => P,
				"$ZodBase64",
				0,
				ar,
				"$ZodBase64URL",
				0,
				as,
				"$ZodBigInt",
				0,
				ah,
				"$ZodBigIntFormat",
				0,
				af,
				"$ZodBoolean",
				0,
				ag,
				"$ZodCIDRv4",
				0,
				aa,
				"$ZodCIDRv6",
				0,
				ai,
				"$ZodCUID",
				0,
				t1,
				"$ZodCUID2",
				0,
				t4,
				"$ZodCatch",
				0,
				a0,
				"$ZodCheck",
				0,
				ty,
				"$ZodCheckBigIntFormat",
				0,
				tj,
				"$ZodCheckEndsWith",
				0,
				tR,
				"$ZodCheckGreaterThan",
				0,
				tw,
				"$ZodCheckIncludes",
				0,
				tD,
				"$ZodCheckLengthEquals",
				0,
				tE,
				"$ZodCheckLessThan",
				0,
				tz,
				"$ZodCheckLowerCase",
				0,
				tT,
				"$ZodCheckMaxLength",
				0,
				tN,
				"$ZodCheckMaxSize",
				0,
				tI,
				"$ZodCheckMimeType",
				0,
				tq,
				"$ZodCheckMinLength",
				0,
				tO,
				"$ZodCheckMinSize",
				0,
				tS,
				"$ZodCheckMultipleOf",
				0,
				t_,
				"$ZodCheckNumberFormat",
				0,
				t$,
				"$ZodCheckOverwrite",
				0,
				tK,
				"$ZodCheckProperty",
				0,
				tM,
				"$ZodCheckRegex",
				0,
				tU,
				"$ZodCheckSizeEquals",
				0,
				tC,
				"$ZodCheckStartsWith",
				0,
				tZ,
				"$ZodCheckStringFormat",
				0,
				tP,
				"$ZodCheckUpperCase",
				0,
				tA,
				"$ZodCustom",
				0,
				a7,
				"$ZodCustomStringFormat",
				0,
				ac,
				"$ZodDate",
				0,
				a_,
				"$ZodDefault",
				0,
				aW,
				"$ZodDiscriminatedUnion",
				0,
				aE,
				"$ZodE164",
				0,
				al,
				"$ZodEmail",
				0,
				tX,
				"$ZodEmoji",
				0,
				tY,
				"$ZodEnum",
				0,
				aq,
				"$ZodError",
				0,
				eE,
				"$ZodFile",
				0,
				aF,
				"$ZodFunction",
				() => n6,
				"$ZodGUID",
				0,
				tJ,
				"$ZodIPv4",
				0,
				ae,
				"$ZodIPv6",
				0,
				at,
				"$ZodISODate",
				0,
				t5,
				"$ZodISODateTime",
				0,
				t3,
				"$ZodISODuration",
				0,
				t7,
				"$ZodISOTime",
				0,
				t8,
				"$ZodIntersection",
				0,
				aP,
				"$ZodJWT",
				0,
				ad,
				"$ZodKSUID",
				0,
				t9,
				"$ZodLazy",
				0,
				a8,
				"$ZodLiteral",
				0,
				aK,
				"$ZodMap",
				0,
				aZ,
				"$ZodNaN",
				0,
				a1,
				"$ZodNanoID",
				0,
				t0,
				"$ZodNever",
				0,
				az,
				"$ZodNonOptional",
				0,
				aX,
				"$ZodNull",
				0,
				ak,
				"$ZodNullable",
				0,
				aV,
				"$ZodNumber",
				0,
				am,
				"$ZodNumberFormat",
				0,
				ap,
				"$ZodObject",
				0,
				aC,
				"$ZodOptional",
				0,
				aG,
				"$ZodPipe",
				0,
				a4,
				"$ZodPrefault",
				0,
				aH,
				"$ZodPromise",
				0,
				a5,
				"$ZodReadonly",
				0,
				a2,
				"$ZodRealError",
				0,
				eP,
				"$ZodRecord",
				0,
				aD,
				"$ZodRegistry",
				() => iu,
				"$ZodSet",
				0,
				aL,
				"$ZodString",
				0,
				tV,
				"$ZodStringFormat",
				0,
				tW,
				"$ZodSuccess",
				0,
				aY,
				"$ZodSymbol",
				0,
				av,
				"$ZodTemplateLiteral",
				0,
				a3,
				"$ZodTransform",
				0,
				aB,
				"$ZodTuple",
				0,
				aT,
				"$ZodType",
				0,
				tG,
				"$ZodULID",
				0,
				t6,
				"$ZodURL",
				0,
				tQ,
				"$ZodUUID",
				0,
				tH,
				"$ZodUndefined",
				0,
				ab,
				"$ZodUnion",
				0,
				aO,
				"$ZodUnknown",
				0,
				ax,
				"$ZodVoid",
				0,
				aw,
				"$ZodXID",
				0,
				t2,
				"$brand",
				0,
				E,
				"$constructor",
				() => O,
				"$input",
				0,
				il,
				"$output",
				0,
				is,
				"Doc",
				() => tF,
				"JSONSchema",
				0,
				n5,
				"JSONSchemaGenerator",
				() => n9,
				"NEVER",
				0,
				N,
				"TimePrecision",
				0,
				iD,
				"_any",
				() => i2,
				"_array",
				() => nC,
				"_base64",
				() => iP,
				"_base64url",
				() => iU,
				"_bigint",
				() => iX,
				"_boolean",
				() => iJ,
				"_catch",
				() => nV,
				"_cidrv4",
				() => iO,
				"_cidrv6",
				() => iE,
				"_coercedBigint",
				() => iQ,
				"_coercedBoolean",
				() => iH,
				"_coercedDate",
				() => i7,
				"_coercedNumber",
				() => iK,
				"_coercedString",
				() => ip,
				"_cuid",
				() => i_,
				"_cuid2",
				() => i$,
				"_custom",
				() => nY,
				"_date",
				() => i8,
				"_default",
				() => nF,
				"_discriminatedUnion",
				() => nO,
				"_e164",
				() => iT,
				"_email",
				() => ig,
				"_emoji",
				() => iz,
				"_endsWith",
				() => nx,
				"_enum",
				() => nD,
				"_file",
				() => nL,
				"_float32",
				() => iB,
				"_float64",
				() => iG,
				"_gt",
				() => ni,
				"_gte",
				() => nn,
				"_guid",
				() => ih,
				"_includes",
				() => nk,
				"_int",
				() => iF,
				"_int32",
				() => iV,
				"_int64",
				() => iY,
				"_intersection",
				() => nE,
				"_ipv4",
				() => iC,
				"_ipv6",
				() => iN,
				"_isoDate",
				() => iR,
				"_isoDateTime",
				() => iZ,
				"_isoDuration",
				() => iM,
				"_isoTime",
				() => iL,
				"_jwt",
				() => iA,
				"_ksuid",
				() => iS,
				"_lazy",
				() => nX,
				"_length",
				() => nh,
				"_literal",
				() => nR,
				"_lowercase",
				() => nv,
				"_lt",
				() => nt,
				"_lte",
				() => na,
				"_map",
				() => nT,
				"_max",
				() => na,
				"_maxLength",
				() => np,
				"_maxSize",
				() => nd,
				"_mime",
				() => nw,
				"_min",
				() => nn,
				"_minLength",
				() => ng,
				"_minSize",
				() => nc,
				"_multipleOf",
				() => nu,
				"_nan",
				() => ne,
				"_nanoid",
				() => iw,
				"_nativeEnum",
				() => nZ,
				"_negative",
				() => no,
				"_never",
				() => i3,
				"_nonnegative",
				() => nl,
				"_nonoptional",
				() => nB,
				"_nonpositive",
				() => ns,
				"_normalize",
				() => n$,
				"_null",
				() => i6,
				"_nullable",
				() => nK,
				"_number",
				() => iq,
				"_optional",
				() => nq,
				"_overwrite",
				() => n_,
				"_parse",
				0,
				eR,
				"_parseAsync",
				0,
				eM,
				"_pipe",
				() => nW,
				"_positive",
				() => nr,
				"_promise",
				() => nQ,
				"_property",
				() => nz,
				"_readonly",
				() => nJ,
				"_record",
				() => nU,
				"_refine",
				() => n0,
				"_regex",
				() => nf,
				"_safeParse",
				0,
				eK,
				"_safeParseAsync",
				0,
				eB,
				"_set",
				() => nA,
				"_size",
				() => nm,
				"_startsWith",
				() => ny,
				"_string",
				() => im,
				"_stringFormat",
				() => n4,
				"_stringbool",
				() => n1,
				"_success",
				() => nG,
				"_symbol",
				() => i1,
				"_templateLiteral",
				() => nH,
				"_toLowerCase",
				() => nI,
				"_toUpperCase",
				() => nS,
				"_transform",
				() => nM,
				"_trim",
				() => nj,
				"_tuple",
				() => nP,
				"_uint32",
				() => iW,
				"_uint64",
				() => i0,
				"_ulid",
				() => ij,
				"_undefined",
				() => i4,
				"_union",
				() => nN,
				"_unknown",
				() => i9,
				"_uppercase",
				() => nb,
				"_url",
				() => ix,
				"_uuid",
				() => iv,
				"_uuidv4",
				() => ib,
				"_uuidv6",
				() => ik,
				"_uuidv7",
				() => iy,
				"_void",
				() => i5,
				"_xid",
				() => iI,
				"clone",
				() => el,
				"config",
				() => T,
				"flattenError",
				() => eU,
				"formatError",
				() => eT,
				"function",
				() => n2,
				"globalConfig",
				0,
				U,
				"globalRegistry",
				0,
				ic,
				"isValidBase64",
				() => an,
				"isValidBase64URL",
				() => ao,
				"isValidJWT",
				() => au,
				"locales",
				0,
				io,
				"parse",
				0,
				eL,
				"parseAsync",
				0,
				eq,
				"prettifyError",
				() => eZ,
				"regexes",
				0,
				ia,
				"registry",
				() => id,
				"safeParse",
				0,
				eF,
				"safeParseAsync",
				0,
				eG,
				"toDotPath",
				() => eD,
				"toJSONSchema",
				() => n3,
				"treeifyError",
				() => eA,
				"util",
				0,
				it,
				"version",
				0,
				tB,
			],
			92583,
		)
		var n8 = e.i(92583)
		e.s(
			[
				"ZodAny",
				() => ok,
				"ZodArray",
				() => oC,
				"ZodBase64",
				() => rQ,
				"ZodBase64URL",
				() => r0,
				"ZodBigInt",
				() => ol,
				"ZodBigIntFormat",
				() => od,
				"ZodBoolean",
				() => oo,
				"ZodCIDRv4",
				() => rW,
				"ZodCIDRv6",
				() => rH,
				"ZodCUID",
				() => rU,
				"ZodCUID2",
				() => rA,
				"ZodCatch",
				() => su,
				"ZodCustom",
				() => sw,
				"ZodCustomStringFormat",
				() => r3,
				"ZodDate",
				() => oI,
				"ZodDefault",
				() => st,
				"ZodDiscriminatedUnion",
				() => oZ,
				"ZodE164",
				() => r4,
				"ZodEmail",
				() => rk,
				"ZodEmoji",
				() => rN,
				"ZodEnum",
				() => oX,
				"ZodFile",
				() => o4,
				"ZodGUID",
				() => rx,
				"ZodIPv4",
				() => rF,
				"ZodIPv6",
				() => rG,
				"ZodIntersection",
				() => oL,
				"ZodJWT",
				() => r2,
				"ZodKSUID",
				() => rq,
				"ZodLazy",
				() => sk,
				"ZodLiteral",
				() => o0,
				"ZodMap",
				() => oV,
				"ZodNaN",
				() => sc,
				"ZodNanoID",
				() => rE,
				"ZodNever",
				() => ow,
				"ZodNonOptional",
				() => sr,
				"ZodNull",
				() => ov,
				"ZodNullable",
				() => o8,
				"ZodNumber",
				() => r8,
				"ZodNumberFormat",
				() => oe,
				"ZodObject",
				() => oE,
				"ZodOptional",
				() => o3,
				"ZodPipe",
				() => sp,
				"ZodPrefault",
				() => si,
				"ZodPromise",
				() => sx,
				"ZodReadonly",
				() => sh,
				"ZodRecord",
				() => oF,
				"ZodSet",
				() => oJ,
				"ZodString",
				() => rf,
				"ZodStringFormat",
				() => rb,
				"ZodSuccess",
				() => ss,
				"ZodSymbol",
				() => op,
				"ZodTemplateLiteral",
				() => sv,
				"ZodTransform",
				() => o2,
				"ZodTuple",
				() => oq,
				"ZodType",
				() => rg,
				"ZodULID",
				() => rZ,
				"ZodURL",
				() => rS,
				"ZodUUID",
				() => rw,
				"ZodUndefined",
				() => oh,
				"ZodUnion",
				() => oA,
				"ZodUnknown",
				() => ox,
				"ZodVoid",
				() => o$,
				"ZodXID",
				() => rL,
				"_ZodString",
				() => rh,
				"_default",
				() => sa,
				"any",
				() => oy,
				"array",
				() => oN,
				"base64",
				() => rY,
				"base64url",
				() => r1,
				"bigint",
				() => ou,
				"boolean",
				() => os,
				"catch",
				() => sd,
				"check",
				() => s_,
				"cidrv4",
				() => rJ,
				"cidrv6",
				() => rX,
				"cuid",
				() => rT,
				"cuid2",
				() => rD,
				"custom",
				() => s$,
				"date",
				() => oS,
				"discriminatedUnion",
				() => oR,
				"e164",
				() => r6,
				"email",
				() => ry,
				"emoji",
				() => rO,
				"enum",
				() => oQ,
				"file",
				() => o6,
				"float32",
				() => oa,
				"float64",
				() => oi,
				"guid",
				() => rz,
				"instanceof",
				() => sS,
				"int",
				() => ot,
				"int32",
				() => on,
				"int64",
				() => oc,
				"intersection",
				() => oM,
				"ipv4",
				() => rB,
				"ipv6",
				() => rV,
				"json",
				() => sN,
				"jwt",
				() => r9,
				"keyof",
				() => oO,
				"ksuid",
				() => rK,
				"lazy",
				() => sy,
				"literal",
				() => o1,
				"looseObject",
				() => oT,
				"map",
				() => oW,
				"nan",
				() => sm,
				"nanoid",
				() => rP,
				"nativeEnum",
				() => oY,
				"never",
				() => o_,
				"nonoptional",
				() => so,
				"null",
				() => ob,
				"nullable",
				() => o7,
				"nullish",
				() => se,
				"number",
				() => r7,
				"object",
				() => oP,
				"optional",
				() => o5,
				"partialRecord",
				() => oG,
				"pipe",
				() => sg,
				"prefault",
				() => sn,
				"preprocess",
				() => sO,
				"promise",
				() => sz,
				"readonly",
				() => sf,
				"record",
				() => oB,
				"refine",
				() => sj,
				"set",
				() => oH,
				"strictObject",
				() => oU,
				"string",
				() => rv,
				"stringFormat",
				() => r5,
				"stringbool",
				() => sC,
				"success",
				() => sl,
				"superRefine",
				() => sI,
				"symbol",
				() => og,
				"templateLiteral",
				() => sb,
				"transform",
				() => o9,
				"tuple",
				() => oK,
				"uint32",
				() => or,
				"uint64",
				() => om,
				"ulid",
				() => rR,
				"undefined",
				() => of,
				"union",
				() => oD,
				"unknown",
				() => oz,
				"url",
				() => rC,
				"uuid",
				() => r_,
				"uuidv4",
				() => r$,
				"uuidv6",
				() => rj,
				"uuidv7",
				() => rI,
				"void",
				() => oj,
				"xid",
				() => rM,
			],
			49881,
		)
		e.s(
			[
				"ZodISODate",
				() => rt,
				"ZodISODateTime",
				() => n7,
				"ZodISODuration",
				() => rr,
				"ZodISOTime",
				() => ri,
				"date",
				() => ra,
				"datetime",
				() => re,
				"duration",
				() => ro,
				"time",
				() => rn,
			],
			63143,
		)
		let n7 = O("ZodISODateTime", (e, t) => {
			t3.init(e, t), rb.init(e, t)
		})
		function re(e) {
			return iZ(n7, e)
		}
		let rt = O("ZodISODate", (e, t) => {
			t5.init(e, t), rb.init(e, t)
		})
		function ra(e) {
			return iR(rt, e)
		}
		let ri = O("ZodISOTime", (e, t) => {
			t8.init(e, t), rb.init(e, t)
		})
		function rn(e) {
			return iL(ri, e)
		}
		let rr = O("ZodISODuration", (e, t) => {
			t7.init(e, t), rb.init(e, t)
		})
		function ro(e) {
			return iM(rr, e)
		}
		let rs = (e, t) => {
				eE.init(e, t),
					(e.name = "ZodError"),
					Object.defineProperties(e, {
						format: { value: (t) => eT(e, t) },
						flatten: { value: (t) => eU(e, t) },
						addIssue: { value: (t) => e.issues.push(t) },
						addIssues: { value: (t) => e.issues.push(...t) },
						isEmpty: { get: () => 0 === e.issues.length },
					})
			},
			rl = O("ZodError", rs),
			ru = O("ZodError", rs, { Parent: Error })
		e.s(["ZodError", 0, rl, "ZodRealError", 0, ru], 86625)
		let rd = eR(ru),
			rc = eM(ru),
			rm = eK(ru),
			rp = eB(ru)
		e.s(["parse", 0, rd, "parseAsync", 0, rc, "safeParse", 0, rm, "safeParseAsync", 0, rp], 41631)
		let rg = O(
				"ZodType",
				(e, t) => (
					tG.init(e, t),
					(e.def = t),
					Object.defineProperty(e, "_def", { value: t }),
					(e.check = (...a) =>
						e.clone({
							...t,
							checks: [
								...(t.checks ?? []),
								...a.map((e) =>
									"function" == typeof e
										? { _zod: { check: e, def: { check: "custom" }, onattach: [] } }
										: e,
								),
							],
						})),
					(e.clone = (t, a) => el(e, t, a)),
					(e.brand = () => e),
					(e.register = (t, a) => (t.add(e, a), e)),
					(e.parse = (t, a) => rd(e, t, a, { callee: e.parse })),
					(e.safeParse = (t, a) => rm(e, t, a)),
					(e.parseAsync = async (t, a) => rc(e, t, a, { callee: e.parseAsync })),
					(e.safeParseAsync = async (t, a) => rp(e, t, a)),
					(e.spa = e.safeParseAsync),
					(e.refine = (t, a) => e.check(sj(t, a))),
					(e.superRefine = (t) => e.check(sI(t))),
					(e.overwrite = (t) => e.check(n_(t))),
					(e.optional = () => o5(e)),
					(e.nullable = () => o7(e)),
					(e.nullish = () => o5(o7(e))),
					(e.nonoptional = (t) => so(e, t)),
					(e.array = () => oN(e)),
					(e.or = (t) => oD([e, t])),
					(e.and = (t) => oM(e, t)),
					(e.transform = (t) => sg(e, o9(t))),
					(e.default = (t) => sa(e, t)),
					(e.prefault = (t) => sn(e, t)),
					(e.catch = (t) => sd(e, t)),
					(e.pipe = (t) => sg(e, t)),
					(e.readonly = () => sf(e)),
					(e.describe = (t) => {
						let a = e.clone()
						return ic.add(a, { description: t }), a
					}),
					Object.defineProperty(e, "description", { get: () => ic.get(e)?.description, configurable: !0 }),
					(e.meta = (...t) => {
						if (0 === t.length) return ic.get(e)
						let a = e.clone()
						return ic.add(a, t[0]), a
					}),
					(e.isOptional = () => e.safeParse(void 0).success),
					(e.isNullable = () => e.safeParse(null).success),
					e
				),
			),
			rh = O("_ZodString", (e, t) => {
				tV.init(e, t), rg.init(e, t)
				let a = e._zod.bag
				;(e.format = a.format ?? null),
					(e.minLength = a.minimum ?? null),
					(e.maxLength = a.maximum ?? null),
					(e.regex = (...t) => e.check(nf(...t))),
					(e.includes = (...t) => e.check(nk(...t))),
					(e.startsWith = (...t) => e.check(ny(...t))),
					(e.endsWith = (...t) => e.check(nx(...t))),
					(e.min = (...t) => e.check(ng(...t))),
					(e.max = (...t) => e.check(np(...t))),
					(e.length = (...t) => e.check(nh(...t))),
					(e.nonempty = (...t) => e.check(ng(1, ...t))),
					(e.lowercase = (t) => e.check(nv(t))),
					(e.uppercase = (t) => e.check(nb(t))),
					(e.trim = () => e.check(nj())),
					(e.normalize = (...t) => e.check(n$(...t))),
					(e.toLowerCase = () => e.check(nI())),
					(e.toUpperCase = () => e.check(nS()))
			}),
			rf = O("ZodString", (e, t) => {
				tV.init(e, t),
					rh.init(e, t),
					(e.email = (t) => e.check(ig(rk, t))),
					(e.url = (t) => e.check(ix(rS, t))),
					(e.jwt = (t) => e.check(iA(r2, t))),
					(e.emoji = (t) => e.check(iz(rN, t))),
					(e.guid = (t) => e.check(ih(rx, t))),
					(e.uuid = (t) => e.check(iv(rw, t))),
					(e.uuidv4 = (t) => e.check(ib(rw, t))),
					(e.uuidv6 = (t) => e.check(ik(rw, t))),
					(e.uuidv7 = (t) => e.check(iy(rw, t))),
					(e.nanoid = (t) => e.check(iw(rE, t))),
					(e.guid = (t) => e.check(ih(rx, t))),
					(e.cuid = (t) => e.check(i_(rU, t))),
					(e.cuid2 = (t) => e.check(i$(rA, t))),
					(e.ulid = (t) => e.check(ij(rZ, t))),
					(e.base64 = (t) => e.check(iP(rQ, t))),
					(e.base64url = (t) => e.check(iU(r0, t))),
					(e.xid = (t) => e.check(iI(rL, t))),
					(e.ksuid = (t) => e.check(iS(rq, t))),
					(e.ipv4 = (t) => e.check(iC(rF, t))),
					(e.ipv6 = (t) => e.check(iN(rG, t))),
					(e.cidrv4 = (t) => e.check(iO(rW, t))),
					(e.cidrv6 = (t) => e.check(iE(rH, t))),
					(e.e164 = (t) => e.check(iT(r4, t))),
					(e.datetime = (t) => e.check(re(t))),
					(e.date = (t) => e.check(ra(t))),
					(e.time = (t) => e.check(rn(t))),
					(e.duration = (t) => e.check(ro(t)))
			})
		function rv(e) {
			return im(rf, e)
		}
		let rb = O("ZodStringFormat", (e, t) => {
				tW.init(e, t), rh.init(e, t)
			}),
			rk = O("ZodEmail", (e, t) => {
				tX.init(e, t), rb.init(e, t)
			})
		function ry(e) {
			return ig(rk, e)
		}
		let rx = O("ZodGUID", (e, t) => {
			tJ.init(e, t), rb.init(e, t)
		})
		function rz(e) {
			return ih(rx, e)
		}
		let rw = O("ZodUUID", (e, t) => {
			tH.init(e, t), rb.init(e, t)
		})
		function r_(e) {
			return iv(rw, e)
		}
		function r$(e) {
			return ib(rw, e)
		}
		function rj(e) {
			return ik(rw, e)
		}
		function rI(e) {
			return iy(rw, e)
		}
		let rS = O("ZodURL", (e, t) => {
			tQ.init(e, t), rb.init(e, t)
		})
		function rC(e) {
			return ix(rS, e)
		}
		let rN = O("ZodEmoji", (e, t) => {
			tY.init(e, t), rb.init(e, t)
		})
		function rO(e) {
			return iz(rN, e)
		}
		let rE = O("ZodNanoID", (e, t) => {
			t0.init(e, t), rb.init(e, t)
		})
		function rP(e) {
			return iw(rE, e)
		}
		let rU = O("ZodCUID", (e, t) => {
			t1.init(e, t), rb.init(e, t)
		})
		function rT(e) {
			return i_(rU, e)
		}
		let rA = O("ZodCUID2", (e, t) => {
			t4.init(e, t), rb.init(e, t)
		})
		function rD(e) {
			return i$(rA, e)
		}
		let rZ = O("ZodULID", (e, t) => {
			t6.init(e, t), rb.init(e, t)
		})
		function rR(e) {
			return ij(rZ, e)
		}
		let rL = O("ZodXID", (e, t) => {
			t2.init(e, t), rb.init(e, t)
		})
		function rM(e) {
			return iI(rL, e)
		}
		let rq = O("ZodKSUID", (e, t) => {
			t9.init(e, t), rb.init(e, t)
		})
		function rK(e) {
			return iS(rq, e)
		}
		let rF = O("ZodIPv4", (e, t) => {
			ae.init(e, t), rb.init(e, t)
		})
		function rB(e) {
			return iC(rF, e)
		}
		let rG = O("ZodIPv6", (e, t) => {
			at.init(e, t), rb.init(e, t)
		})
		function rV(e) {
			return iN(rG, e)
		}
		let rW = O("ZodCIDRv4", (e, t) => {
			aa.init(e, t), rb.init(e, t)
		})
		function rJ(e) {
			return iO(rW, e)
		}
		let rH = O("ZodCIDRv6", (e, t) => {
			ai.init(e, t), rb.init(e, t)
		})
		function rX(e) {
			return iE(rH, e)
		}
		let rQ = O("ZodBase64", (e, t) => {
			ar.init(e, t), rb.init(e, t)
		})
		function rY(e) {
			return iP(rQ, e)
		}
		let r0 = O("ZodBase64URL", (e, t) => {
			as.init(e, t), rb.init(e, t)
		})
		function r1(e) {
			return iU(r0, e)
		}
		let r4 = O("ZodE164", (e, t) => {
			al.init(e, t), rb.init(e, t)
		})
		function r6(e) {
			return iT(r4, e)
		}
		let r2 = O("ZodJWT", (e, t) => {
			ad.init(e, t), rb.init(e, t)
		})
		function r9(e) {
			return iA(r2, e)
		}
		let r3 = O("ZodCustomStringFormat", (e, t) => {
			ac.init(e, t), rb.init(e, t)
		})
		function r5(e, t, a = {}) {
			return n4(r3, e, t, a)
		}
		let r8 = O("ZodNumber", (e, t) => {
			am.init(e, t),
				rg.init(e, t),
				(e.gt = (t, a) => e.check(ni(t, a))),
				(e.gte = (t, a) => e.check(nn(t, a))),
				(e.min = (t, a) => e.check(nn(t, a))),
				(e.lt = (t, a) => e.check(nt(t, a))),
				(e.lte = (t, a) => e.check(na(t, a))),
				(e.max = (t, a) => e.check(na(t, a))),
				(e.int = (t) => e.check(ot(t))),
				(e.safe = (t) => e.check(ot(t))),
				(e.positive = (t) => e.check(ni(0, t))),
				(e.nonnegative = (t) => e.check(nn(0, t))),
				(e.negative = (t) => e.check(nt(0, t))),
				(e.nonpositive = (t) => e.check(na(0, t))),
				(e.multipleOf = (t, a) => e.check(nu(t, a))),
				(e.step = (t, a) => e.check(nu(t, a))),
				(e.finite = () => e)
			let a = e._zod.bag
			;(e.minValue = Math.max(a.minimum ?? -1 / 0, a.exclusiveMinimum ?? -1 / 0) ?? null),
				(e.maxValue = Math.min(a.maximum ?? 1 / 0, a.exclusiveMaximum ?? 1 / 0) ?? null),
				(e.isInt = (a.format ?? "").includes("int") || Number.isSafeInteger(a.multipleOf ?? 0.5)),
				(e.isFinite = !0),
				(e.format = a.format ?? null)
		})
		function r7(e) {
			return iq(r8, e)
		}
		let oe = O("ZodNumberFormat", (e, t) => {
			ap.init(e, t), r8.init(e, t)
		})
		function ot(e) {
			return iF(oe, e)
		}
		function oa(e) {
			return iB(oe, e)
		}
		function oi(e) {
			return iG(oe, e)
		}
		function on(e) {
			return iV(oe, e)
		}
		function or(e) {
			return iW(oe, e)
		}
		let oo = O("ZodBoolean", (e, t) => {
			ag.init(e, t), rg.init(e, t)
		})
		function os(e) {
			return iJ(oo, e)
		}
		let ol = O("ZodBigInt", (e, t) => {
			ah.init(e, t),
				rg.init(e, t),
				(e.gte = (t, a) => e.check(nn(t, a))),
				(e.min = (t, a) => e.check(nn(t, a))),
				(e.gt = (t, a) => e.check(ni(t, a))),
				(e.gte = (t, a) => e.check(nn(t, a))),
				(e.min = (t, a) => e.check(nn(t, a))),
				(e.lt = (t, a) => e.check(nt(t, a))),
				(e.lte = (t, a) => e.check(na(t, a))),
				(e.max = (t, a) => e.check(na(t, a))),
				(e.positive = (t) => e.check(ni(BigInt(0), t))),
				(e.negative = (t) => e.check(nt(BigInt(0), t))),
				(e.nonpositive = (t) => e.check(na(BigInt(0), t))),
				(e.nonnegative = (t) => e.check(nn(BigInt(0), t))),
				(e.multipleOf = (t, a) => e.check(nu(t, a)))
			let a = e._zod.bag
			;(e.minValue = a.minimum ?? null), (e.maxValue = a.maximum ?? null), (e.format = a.format ?? null)
		})
		function ou(e) {
			return iX(ol, e)
		}
		let od = O("ZodBigIntFormat", (e, t) => {
			af.init(e, t), ol.init(e, t)
		})
		function oc(e) {
			return iY(od, e)
		}
		function om(e) {
			return i0(od, e)
		}
		let op = O("ZodSymbol", (e, t) => {
			av.init(e, t), rg.init(e, t)
		})
		function og(e) {
			return i1(op, e)
		}
		let oh = O("ZodUndefined", (e, t) => {
			ab.init(e, t), rg.init(e, t)
		})
		function of(e) {
			return i4(oh, e)
		}
		let ov = O("ZodNull", (e, t) => {
			ak.init(e, t), rg.init(e, t)
		})
		function ob(e) {
			return i6(ov, e)
		}
		let ok = O("ZodAny", (e, t) => {
			ay.init(e, t), rg.init(e, t)
		})
		function oy() {
			return i2(ok)
		}
		let ox = O("ZodUnknown", (e, t) => {
			ax.init(e, t), rg.init(e, t)
		})
		function oz() {
			return i9(ox)
		}
		let ow = O("ZodNever", (e, t) => {
			az.init(e, t), rg.init(e, t)
		})
		function o_(e) {
			return i3(ow, e)
		}
		let o$ = O("ZodVoid", (e, t) => {
			aw.init(e, t), rg.init(e, t)
		})
		function oj(e) {
			return i5(o$, e)
		}
		let oI = O("ZodDate", (e, t) => {
			a_.init(e, t), rg.init(e, t), (e.min = (t, a) => e.check(nn(t, a))), (e.max = (t, a) => e.check(na(t, a)))
			let a = e._zod.bag
			;(e.minDate = a.minimum ? new Date(a.minimum) : null), (e.maxDate = a.maximum ? new Date(a.maximum) : null)
		})
		function oS(e) {
			return i8(oI, e)
		}
		let oC = O("ZodArray", (e, t) => {
			aj.init(e, t),
				rg.init(e, t),
				(e.element = t.element),
				(e.min = (t, a) => e.check(ng(t, a))),
				(e.nonempty = (t) => e.check(ng(1, t))),
				(e.max = (t, a) => e.check(np(t, a))),
				(e.length = (t, a) => e.check(nh(t, a))),
				(e.unwrap = () => e.element)
		})
		function oN(e, t) {
			return nC(oC, e, t)
		}
		function oO(e) {
			return o1(Object.keys(e._zod.def.shape))
		}
		let oE = O("ZodObject", (e, t) => {
			aC.init(e, t),
				rg.init(e, t),
				it.defineLazy(e, "shape", () => t.shape),
				(e.keyof = () => oQ(Object.keys(e._zod.def.shape))),
				(e.catchall = (t) => e.clone({ ...e._zod.def, catchall: t })),
				(e.passthrough = () => e.clone({ ...e._zod.def, catchall: oz() })),
				(e.loose = () => e.clone({ ...e._zod.def, catchall: oz() })),
				(e.strict = () => e.clone({ ...e._zod.def, catchall: o_() })),
				(e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
				(e.extend = (t) => it.extend(e, t)),
				(e.merge = (t) => it.merge(e, t)),
				(e.pick = (t) => it.pick(e, t)),
				(e.omit = (t) => it.omit(e, t)),
				(e.partial = (...t) => it.partial(o3, e, t[0])),
				(e.required = (...t) => it.required(sr, e, t[0]))
		})
		function oP(e, t) {
			return new oE({
				type: "object",
				get shape() {
					return it.assignProp(this, "shape", { ...e }), this.shape
				},
				...it.normalizeParams(t),
			})
		}
		function oU(e, t) {
			return new oE({
				type: "object",
				get shape() {
					return it.assignProp(this, "shape", { ...e }), this.shape
				},
				catchall: o_(),
				...it.normalizeParams(t),
			})
		}
		function oT(e, t) {
			return new oE({
				type: "object",
				get shape() {
					return it.assignProp(this, "shape", { ...e }), this.shape
				},
				catchall: oz(),
				...it.normalizeParams(t),
			})
		}
		let oA = O("ZodUnion", (e, t) => {
			aO.init(e, t), rg.init(e, t), (e.options = t.options)
		})
		function oD(e, t) {
			return new oA({ type: "union", options: e, ...it.normalizeParams(t) })
		}
		let oZ = O("ZodDiscriminatedUnion", (e, t) => {
			oA.init(e, t), aE.init(e, t)
		})
		function oR(e, t, a) {
			return new oZ({ type: "union", options: t, discriminator: e, ...it.normalizeParams(a) })
		}
		let oL = O("ZodIntersection", (e, t) => {
			aP.init(e, t), rg.init(e, t)
		})
		function oM(e, t) {
			return new oL({ type: "intersection", left: e, right: t })
		}
		let oq = O("ZodTuple", (e, t) => {
			aT.init(e, t), rg.init(e, t), (e.rest = (t) => e.clone({ ...e._zod.def, rest: t }))
		})
		function oK(e, t, a) {
			let i = t instanceof tG,
				n = i ? a : t
			return new oq({ type: "tuple", items: e, rest: i ? t : null, ...it.normalizeParams(n) })
		}
		let oF = O("ZodRecord", (e, t) => {
			aD.init(e, t), rg.init(e, t), (e.keyType = t.keyType), (e.valueType = t.valueType)
		})
		function oB(e, t, a) {
			return new oF({ type: "record", keyType: e, valueType: t, ...it.normalizeParams(a) })
		}
		function oG(e, t, a) {
			return new oF({ type: "record", keyType: oD([e, o_()]), valueType: t, ...it.normalizeParams(a) })
		}
		let oV = O("ZodMap", (e, t) => {
			aZ.init(e, t), rg.init(e, t), (e.keyType = t.keyType), (e.valueType = t.valueType)
		})
		function oW(e, t, a) {
			return new oV({ type: "map", keyType: e, valueType: t, ...it.normalizeParams(a) })
		}
		let oJ = O("ZodSet", (e, t) => {
			aL.init(e, t),
				rg.init(e, t),
				(e.min = (...t) => e.check(nc(...t))),
				(e.nonempty = (t) => e.check(nc(1, t))),
				(e.max = (...t) => e.check(nd(...t))),
				(e.size = (...t) => e.check(nm(...t)))
		})
		function oH(e, t) {
			return new oJ({ type: "set", valueType: e, ...it.normalizeParams(t) })
		}
		let oX = O("ZodEnum", (e, t) => {
			aq.init(e, t), rg.init(e, t), (e.enum = t.entries), (e.options = Object.values(t.entries))
			let a = new Set(Object.keys(t.entries))
			;(e.extract = (e, i) => {
				let n = {}
				for (let i of e)
					if (a.has(i)) n[i] = t.entries[i]
					else throw Error(`Key ${i} not found in enum`)
				return new oX({ ...t, checks: [], ...it.normalizeParams(i), entries: n })
			}),
				(e.exclude = (e, i) => {
					let n = { ...t.entries }
					for (let t of e)
						if (a.has(t)) delete n[t]
						else throw Error(`Key ${t} not found in enum`)
					return new oX({ ...t, checks: [], ...it.normalizeParams(i), entries: n })
				})
		})
		function oQ(e, t) {
			return new oX({
				type: "enum",
				entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
				...it.normalizeParams(t),
			})
		}
		function oY(e, t) {
			return new oX({ type: "enum", entries: e, ...it.normalizeParams(t) })
		}
		let o0 = O("ZodLiteral", (e, t) => {
			aK.init(e, t),
				rg.init(e, t),
				(e.values = new Set(t.values)),
				Object.defineProperty(e, "value", {
					get() {
						if (t.values.length > 1)
							throw Error("This schema contains multiple valid literal values. Use `.values` instead.")
						return t.values[0]
					},
				})
		})
		function o1(e, t) {
			return new o0({ type: "literal", values: Array.isArray(e) ? e : [e], ...it.normalizeParams(t) })
		}
		let o4 = O("ZodFile", (e, t) => {
			aF.init(e, t),
				rg.init(e, t),
				(e.min = (t, a) => e.check(nc(t, a))),
				(e.max = (t, a) => e.check(nd(t, a))),
				(e.mime = (t, a) => e.check(nw(Array.isArray(t) ? t : [t], a)))
		})
		function o6(e) {
			return nL(o4, e)
		}
		let o2 = O("ZodTransform", (e, t) => {
			aB.init(e, t),
				rg.init(e, t),
				(e._zod.parse = (a, i) => {
					a.addIssue = (i) => {
						"string" == typeof i
							? a.issues.push(it.issue(i, a.value, t))
							: (i.fatal && (i.continue = !1),
								i.code ?? (i.code = "custom"),
								i.input ?? (i.input = a.value),
								i.inst ?? (i.inst = e),
								i.continue ?? (i.continue = !0),
								a.issues.push(it.issue(i)))
					}
					let n = t.transform(a.value, a)
					return n instanceof Promise ? n.then((e) => ((a.value = e), a)) : ((a.value = n), a)
				})
		})
		function o9(e) {
			return new o2({ type: "transform", transform: e })
		}
		let o3 = O("ZodOptional", (e, t) => {
			aG.init(e, t), rg.init(e, t), (e.unwrap = () => e._zod.def.innerType)
		})
		function o5(e) {
			return new o3({ type: "optional", innerType: e })
		}
		let o8 = O("ZodNullable", (e, t) => {
			aV.init(e, t), rg.init(e, t), (e.unwrap = () => e._zod.def.innerType)
		})
		function o7(e) {
			return new o8({ type: "nullable", innerType: e })
		}
		function se(e) {
			return o5(o7(e))
		}
		let st = O("ZodDefault", (e, t) => {
			aW.init(e, t), rg.init(e, t), (e.unwrap = () => e._zod.def.innerType), (e.removeDefault = e.unwrap)
		})
		function sa(e, t) {
			return new st({
				type: "default",
				innerType: e,
				get defaultValue() {
					return "function" == typeof t ? t() : t
				},
			})
		}
		let si = O("ZodPrefault", (e, t) => {
			aH.init(e, t), rg.init(e, t), (e.unwrap = () => e._zod.def.innerType)
		})
		function sn(e, t) {
			return new si({
				type: "prefault",
				innerType: e,
				get defaultValue() {
					return "function" == typeof t ? t() : t
				},
			})
		}
		let sr = O("ZodNonOptional", (e, t) => {
			aX.init(e, t), rg.init(e, t), (e.unwrap = () => e._zod.def.innerType)
		})
		function so(e, t) {
			return new sr({ type: "nonoptional", innerType: e, ...it.normalizeParams(t) })
		}
		let ss = O("ZodSuccess", (e, t) => {
			aY.init(e, t), rg.init(e, t), (e.unwrap = () => e._zod.def.innerType)
		})
		function sl(e) {
			return new ss({ type: "success", innerType: e })
		}
		let su = O("ZodCatch", (e, t) => {
			a0.init(e, t), rg.init(e, t), (e.unwrap = () => e._zod.def.innerType), (e.removeCatch = e.unwrap)
		})
		function sd(e, t) {
			return new su({ type: "catch", innerType: e, catchValue: "function" == typeof t ? t : () => t })
		}
		let sc = O("ZodNaN", (e, t) => {
			a1.init(e, t), rg.init(e, t)
		})
		function sm(e) {
			return ne(sc, e)
		}
		let sp = O("ZodPipe", (e, t) => {
			a4.init(e, t), rg.init(e, t), (e.in = t.in), (e.out = t.out)
		})
		function sg(e, t) {
			return new sp({ type: "pipe", in: e, out: t })
		}
		let sh = O("ZodReadonly", (e, t) => {
			a2.init(e, t), rg.init(e, t)
		})
		function sf(e) {
			return new sh({ type: "readonly", innerType: e })
		}
		let sv = O("ZodTemplateLiteral", (e, t) => {
			a3.init(e, t), rg.init(e, t)
		})
		function sb(e, t) {
			return new sv({ type: "template_literal", parts: e, ...it.normalizeParams(t) })
		}
		let sk = O("ZodLazy", (e, t) => {
			a8.init(e, t), rg.init(e, t), (e.unwrap = () => e._zod.def.getter())
		})
		function sy(e) {
			return new sk({ type: "lazy", getter: e })
		}
		let sx = O("ZodPromise", (e, t) => {
			a5.init(e, t), rg.init(e, t), (e.unwrap = () => e._zod.def.innerType)
		})
		function sz(e) {
			return new sx({ type: "promise", innerType: e })
		}
		let sw = O("ZodCustom", (e, t) => {
			a7.init(e, t), rg.init(e, t)
		})
		function s_(e) {
			let t = new ty({ check: "custom" })
			return (t._zod.check = e), t
		}
		function s$(e, t) {
			return nY(sw, e ?? (() => !0), t)
		}
		function sj(e, t = {}) {
			return n0(sw, e, t)
		}
		function sI(e) {
			let t = s_(
				(a) => (
					(a.addIssue = (e) => {
						"string" == typeof e
							? a.issues.push(it.issue(e, a.value, t._zod.def))
							: (e.fatal && (e.continue = !1),
								e.code ?? (e.code = "custom"),
								e.input ?? (e.input = a.value),
								e.inst ?? (e.inst = t),
								e.continue ?? (e.continue = !t._zod.def.abort),
								a.issues.push(it.issue(e)))
					}),
					e(a.value, a)
				),
			)
			return t
		}
		function sS(e, t = { error: `Input not instance of ${e.name}` }) {
			let a = new sw({
				type: "custom",
				check: "custom",
				fn: (t) => t instanceof e,
				abort: !0,
				...it.normalizeParams(t),
			})
			return (a._zod.bag.Class = e), a
		}
		let sC = (...e) => n1({ Pipe: sp, Boolean: oo, String: rf, Transform: o2 }, ...e)
		function sN(e) {
			let t = sy(() => oD([rv(e), r7(), os(), ob(), oN(t), oB(rv(), t)]))
			return t
		}
		function sO(e, t) {
			return sg(o9(e), t)
		}
		e.i(49881),
			e.s([], 31187),
			e.i(31187),
			e.s(
				[
					"endsWith",
					() => nx,
					"gt",
					() => ni,
					"gte",
					() => nn,
					"includes",
					() => nk,
					"length",
					() => nh,
					"lowercase",
					() => nv,
					"lt",
					() => nt,
					"lte",
					() => na,
					"maxLength",
					() => np,
					"maxSize",
					() => nd,
					"mime",
					() => nw,
					"minLength",
					() => ng,
					"minSize",
					() => nc,
					"multipleOf",
					() => nu,
					"negative",
					() => no,
					"nonnegative",
					() => nl,
					"nonpositive",
					() => ns,
					"normalize",
					() => n$,
					"overwrite",
					() => n_,
					"positive",
					() => nr,
					"property",
					() => nz,
					"regex",
					() => nf,
					"size",
					() => nm,
					"startsWith",
					() => ny,
					"toLowerCase",
					() => nI,
					"toUpperCase",
					() => nS,
					"trim",
					() => nj,
					"uppercase",
					() => nb,
				],
				72614,
			),
			e.i(72614),
			e.i(86625),
			e.i(41631)
		let sE = {
			invalid_type: "invalid_type",
			too_big: "too_big",
			too_small: "too_small",
			invalid_format: "invalid_format",
			not_multiple_of: "not_multiple_of",
			unrecognized_keys: "unrecognized_keys",
			invalid_union: "invalid_union",
			invalid_key: "invalid_key",
			invalid_element: "invalid_element",
			invalid_value: "invalid_value",
			custom: "custom",
		}
		function sP(e) {
			T({ customError: e })
		}
		function sU() {
			return T().customError
		}
		e.s(["ZodIssueCode", 0, sE, "getErrorMap", () => sU, "setErrorMap", () => sP], 37727),
			e.i(37727),
			e.s(
				[
					"$brand",
					0,
					E,
					"ZodIssueCode",
					0,
					sE,
					"config",
					() => T,
					"getErrorMap",
					() => sU,
					"setErrorMap",
					() => sP,
				],
				44646,
			),
			e.i(44646)
		var sT = e.i(63143)
		function sA(e) {
			return ip(rf, e)
		}
		function sD(e) {
			return iK(r8, e)
		}
		function sZ(e) {
			return iH(oo, e)
		}
		function sR(e) {
			return iQ(ol, e)
		}
		function sL(e) {
			return i7(oI, e)
		}
		e.s(["bigint", () => sR, "boolean", () => sZ, "date", () => sL, "number", () => sD, "string", () => sA], 62845)
		var sM = e.i(62845)
		e.s(
			[
				"$brand",
				0,
				E,
				"$input",
				0,
				il,
				"$output",
				0,
				is,
				"NEVER",
				0,
				N,
				"TimePrecision",
				0,
				iD,
				"ZodAny",
				0,
				ok,
				"ZodArray",
				0,
				oC,
				"ZodBase64",
				0,
				rQ,
				"ZodBase64URL",
				0,
				r0,
				"ZodBigInt",
				0,
				ol,
				"ZodBigIntFormat",
				0,
				od,
				"ZodBoolean",
				0,
				oo,
				"ZodCIDRv4",
				0,
				rW,
				"ZodCIDRv6",
				0,
				rH,
				"ZodCUID",
				0,
				rU,
				"ZodCUID2",
				0,
				rA,
				"ZodCatch",
				0,
				su,
				"ZodCustom",
				0,
				sw,
				"ZodCustomStringFormat",
				0,
				r3,
				"ZodDate",
				0,
				oI,
				"ZodDefault",
				0,
				st,
				"ZodDiscriminatedUnion",
				0,
				oZ,
				"ZodE164",
				0,
				r4,
				"ZodEmail",
				0,
				rk,
				"ZodEmoji",
				0,
				rN,
				"ZodEnum",
				0,
				oX,
				"ZodError",
				0,
				rl,
				"ZodFile",
				0,
				o4,
				"ZodGUID",
				0,
				rx,
				"ZodIPv4",
				0,
				rF,
				"ZodIPv6",
				0,
				rG,
				"ZodISODate",
				0,
				rt,
				"ZodISODateTime",
				0,
				n7,
				"ZodISODuration",
				0,
				rr,
				"ZodISOTime",
				0,
				ri,
				"ZodIntersection",
				0,
				oL,
				"ZodIssueCode",
				0,
				sE,
				"ZodJWT",
				0,
				r2,
				"ZodKSUID",
				0,
				rq,
				"ZodLazy",
				0,
				sk,
				"ZodLiteral",
				0,
				o0,
				"ZodMap",
				0,
				oV,
				"ZodNaN",
				0,
				sc,
				"ZodNanoID",
				0,
				rE,
				"ZodNever",
				0,
				ow,
				"ZodNonOptional",
				0,
				sr,
				"ZodNull",
				0,
				ov,
				"ZodNullable",
				0,
				o8,
				"ZodNumber",
				0,
				r8,
				"ZodNumberFormat",
				0,
				oe,
				"ZodObject",
				0,
				oE,
				"ZodOptional",
				0,
				o3,
				"ZodPipe",
				0,
				sp,
				"ZodPrefault",
				0,
				si,
				"ZodPromise",
				0,
				sx,
				"ZodReadonly",
				0,
				sh,
				"ZodRealError",
				0,
				ru,
				"ZodRecord",
				0,
				oF,
				"ZodSet",
				0,
				oJ,
				"ZodString",
				0,
				rf,
				"ZodStringFormat",
				0,
				rb,
				"ZodSuccess",
				0,
				ss,
				"ZodSymbol",
				0,
				op,
				"ZodTemplateLiteral",
				0,
				sv,
				"ZodTransform",
				0,
				o2,
				"ZodTuple",
				0,
				oq,
				"ZodType",
				0,
				rg,
				"ZodULID",
				0,
				rZ,
				"ZodURL",
				0,
				rS,
				"ZodUUID",
				0,
				rw,
				"ZodUndefined",
				0,
				oh,
				"ZodUnion",
				0,
				oA,
				"ZodUnknown",
				0,
				ox,
				"ZodVoid",
				0,
				o$,
				"ZodXID",
				0,
				rL,
				"_ZodString",
				0,
				rh,
				"_default",
				() => sa,
				"any",
				() => oy,
				"array",
				() => oN,
				"base64",
				() => rY,
				"base64url",
				() => r1,
				"bigint",
				() => ou,
				"boolean",
				() => os,
				"catch",
				() => sd,
				"check",
				() => s_,
				"cidrv4",
				() => rJ,
				"cidrv6",
				() => rX,
				"clone",
				() => el,
				"coerce",
				0,
				sM,
				"config",
				() => T,
				"core",
				0,
				n8,
				"cuid",
				() => rT,
				"cuid2",
				() => rD,
				"custom",
				() => s$,
				"date",
				() => oS,
				"discriminatedUnion",
				() => oR,
				"e164",
				() => r6,
				"email",
				() => ry,
				"emoji",
				() => rO,
				"endsWith",
				() => nx,
				"enum",
				() => oQ,
				"file",
				() => o6,
				"flattenError",
				() => eU,
				"float32",
				() => oa,
				"float64",
				() => oi,
				"formatError",
				() => eT,
				"function",
				() => n2,
				"getErrorMap",
				() => sU,
				"globalRegistry",
				0,
				ic,
				"gt",
				() => ni,
				"gte",
				() => nn,
				"guid",
				() => rz,
				"includes",
				() => nk,
				"instanceof",
				() => sS,
				"int",
				() => ot,
				"int32",
				() => on,
				"int64",
				() => oc,
				"intersection",
				() => oM,
				"ipv4",
				() => rB,
				"ipv6",
				() => rV,
				"iso",
				0,
				sT,
				"json",
				() => sN,
				"jwt",
				() => r9,
				"keyof",
				() => oO,
				"ksuid",
				() => rK,
				"lazy",
				() => sy,
				"length",
				() => nh,
				"literal",
				() => o1,
				"locales",
				0,
				io,
				"looseObject",
				() => oT,
				"lowercase",
				() => nv,
				"lt",
				() => nt,
				"lte",
				() => na,
				"map",
				() => oW,
				"maxLength",
				() => np,
				"maxSize",
				() => nd,
				"mime",
				() => nw,
				"minLength",
				() => ng,
				"minSize",
				() => nc,
				"multipleOf",
				() => nu,
				"nan",
				() => sm,
				"nanoid",
				() => rP,
				"nativeEnum",
				() => oY,
				"negative",
				() => no,
				"never",
				() => o_,
				"nonnegative",
				() => nl,
				"nonoptional",
				() => so,
				"nonpositive",
				() => ns,
				"normalize",
				() => n$,
				"null",
				() => ob,
				"nullable",
				() => o7,
				"nullish",
				() => se,
				"number",
				() => r7,
				"object",
				() => oP,
				"optional",
				() => o5,
				"overwrite",
				() => n_,
				"parse",
				0,
				rd,
				"parseAsync",
				0,
				rc,
				"partialRecord",
				() => oG,
				"pipe",
				() => sg,
				"positive",
				() => nr,
				"prefault",
				() => sn,
				"preprocess",
				() => sO,
				"prettifyError",
				() => eZ,
				"promise",
				() => sz,
				"property",
				() => nz,
				"readonly",
				() => sf,
				"record",
				() => oB,
				"refine",
				() => sj,
				"regex",
				() => nf,
				"regexes",
				() => ia,
				"registry",
				() => id,
				"safeParse",
				0,
				rm,
				"safeParseAsync",
				0,
				rp,
				"set",
				() => oH,
				"setErrorMap",
				() => sP,
				"size",
				() => nm,
				"startsWith",
				() => ny,
				"strictObject",
				() => oU,
				"string",
				() => rv,
				"stringFormat",
				() => r5,
				"stringbool",
				0,
				sC,
				"success",
				() => sl,
				"superRefine",
				() => sI,
				"symbol",
				() => og,
				"templateLiteral",
				() => sb,
				"toJSONSchema",
				() => n3,
				"toLowerCase",
				() => nI,
				"toUpperCase",
				() => nS,
				"transform",
				() => o9,
				"treeifyError",
				() => eA,
				"trim",
				() => nj,
				"tuple",
				() => oK,
				"uint32",
				() => or,
				"uint64",
				() => om,
				"ulid",
				() => rR,
				"undefined",
				() => of,
				"union",
				() => oD,
				"unknown",
				() => oz,
				"uppercase",
				() => nb,
				"url",
				() => rC,
				"uuid",
				() => r_,
				"uuidv4",
				() => r$,
				"uuidv6",
				() => rj,
				"uuidv7",
				() => rI,
				"void",
				() => oj,
				"xid",
				() => rM,
			],
			11650,
		),
			e.i(11650)
		var sq = C.z.enum(["low", "medium", "high"])
		C.z.union([sq, C.z.literal("minimal")])
		var sK = C.z.enum(["none", "minimal", "low", "medium", "high", "xhigh"]),
			sF = C.z.enum(["disable", "none", "minimal", "low", "medium", "high", "xhigh"]),
			sB = C.z.enum(["low", "medium", "high"]),
			sG = C.z.enum(["default", "flex", "priority"]),
			sV = C.z.enum(["max_tokens", "temperature", "reasoning", "include_reasoning"]),
			sW = C.z.object({
				maxTokens: C.z.number().nullish(),
				maxThinkingTokens: C.z.number().nullish(),
				contextWindow: C.z.number(),
				supportsImages: C.z.boolean().optional(),
				supportsPromptCache: C.z.boolean(),
				promptCacheRetention: C.z.enum(["in_memory", "24h"]).optional(),
				supportsVerbosity: C.z.boolean().optional(),
				supportsReasoningBudget: C.z.boolean().optional(),
				supportsReasoningBinary: C.z.boolean().optional(),
				supportsTemperature: C.z.boolean().optional(),
				defaultTemperature: C.z.number().optional(),
				requiredReasoningBudget: C.z.boolean().optional(),
				supportsReasoningEffort: C.z
					.union([
						C.z.boolean(),
						C.z.array(C.z.enum(["disable", "none", "minimal", "low", "medium", "high", "xhigh"])),
					])
					.optional(),
				requiredReasoningEffort: C.z.boolean().optional(),
				preserveReasoning: C.z.boolean().optional(),
				supportedParameters: C.z.array(sV).optional(),
				inputPrice: C.z.number().optional(),
				outputPrice: C.z.number().optional(),
				cacheWritesPrice: C.z.number().optional(),
				cacheReadsPrice: C.z.number().optional(),
				description: C.z.string().optional(),
				reasoningEffort: sK.optional(),
				minTokensPerCachePoint: C.z.number().optional(),
				maxCachePoints: C.z.number().optional(),
				cachableFields: C.z.array(C.z.string()).optional(),
				deprecated: C.z.boolean().optional(),
				isStealthModel: C.z.boolean().optional(),
				isFree: C.z.boolean().optional(),
				excludedTools: C.z.array(C.z.string()).optional(),
				includedTools: C.z.array(C.z.string()).optional(),
				tiers: C.z
					.array(
						C.z.object({
							name: sG.optional(),
							contextWindow: C.z.number(),
							inputPrice: C.z.number().optional(),
							outputPrice: C.z.number().optional(),
							cacheWritesPrice: C.z.number().optional(),
							cacheReadsPrice: C.z.number().optional(),
						}),
					)
					.optional(),
			}),
			sJ = C.z.object({
				codebaseIndexEnabled: C.z.boolean().optional(),
				codebaseIndexQdrantUrl: C.z.string().optional(),
				codebaseIndexEmbedderProvider: C.z
					.enum([
						"openai",
						"ollama",
						"openai-compatible",
						"gemini",
						"mistral",
						"vercel-ai-gateway",
						"bedrock",
						"openrouter",
					])
					.optional(),
				codebaseIndexEmbedderBaseUrl: C.z.string().optional(),
				codebaseIndexEmbedderModelId: C.z.string().optional(),
				codebaseIndexEmbedderModelDimension: C.z.number().optional(),
				codebaseIndexSearchMinScore: C.z.number().min(0).max(1).optional(),
				codebaseIndexSearchMaxResults: C.z.number().min(10).max(200).optional(),
				codebaseIndexOpenAiCompatibleBaseUrl: C.z.string().optional(),
				codebaseIndexOpenAiCompatibleModelDimension: C.z.number().optional(),
				codebaseIndexBedrockRegion: C.z.string().optional(),
				codebaseIndexBedrockProfile: C.z.string().optional(),
				codebaseIndexOpenRouterSpecificProvider: C.z.string().optional(),
			}),
			sH = C.z.object({
				openai: C.z.record(C.z.string(), C.z.object({ dimension: C.z.number() })).optional(),
				ollama: C.z.record(C.z.string(), C.z.object({ dimension: C.z.number() })).optional(),
				"openai-compatible": C.z.record(C.z.string(), C.z.object({ dimension: C.z.number() })).optional(),
				gemini: C.z.record(C.z.string(), C.z.object({ dimension: C.z.number() })).optional(),
				mistral: C.z.record(C.z.string(), C.z.object({ dimension: C.z.number() })).optional(),
				"vercel-ai-gateway": C.z.record(C.z.string(), C.z.object({ dimension: C.z.number() })).optional(),
				openrouter: C.z.record(C.z.string(), C.z.object({ dimension: C.z.number() })).optional(),
				bedrock: C.z.record(C.z.string(), C.z.object({ dimension: C.z.number() })).optional(),
			}),
			sX = C.z.object({
				codeIndexOpenAiKey: C.z.string().optional(),
				codeIndexQdrantApiKey: C.z.string().optional(),
				codebaseIndexOpenAiCompatibleBaseUrl: C.z.string().optional(),
				codebaseIndexOpenAiCompatibleApiKey: C.z.string().optional(),
				codebaseIndexOpenAiCompatibleModelDimension: C.z.number().optional(),
				codebaseIndexGeminiApiKey: C.z.string().optional(),
				codebaseIndexMistralApiKey: C.z.string().optional(),
				codebaseIndexVercelAiGatewayApiKey: C.z.string().optional(),
				codebaseIndexOpenRouterApiKey: C.z.string().optional(),
			})
		;[
			{ value: "us-east-1", label: "us-east-1" },
			{ value: "us-east-2", label: "us-east-2" },
			{ value: "us-west-1", label: "us-west-1" },
			{ value: "us-west-2", label: "us-west-2" },
			{ value: "ap-northeast-1", label: "ap-northeast-1" },
			{ value: "ap-northeast-2", label: "ap-northeast-2" },
			{ value: "ap-northeast-3", label: "ap-northeast-3" },
			{ value: "ap-south-1", label: "ap-south-1" },
			{ value: "ap-south-2", label: "ap-south-2" },
			{ value: "ap-southeast-1", label: "ap-southeast-1" },
			{ value: "ap-southeast-2", label: "ap-southeast-2" },
			{ value: "ap-east-1", label: "ap-east-1" },
			{ value: "eu-central-1", label: "eu-central-1" },
			{ value: "eu-central-2", label: "eu-central-2" },
			{ value: "eu-west-1", label: "eu-west-1" },
			{ value: "eu-west-2", label: "eu-west-2" },
			{ value: "eu-west-3", label: "eu-west-3" },
			{ value: "eu-north-1", label: "eu-north-1" },
			{ value: "eu-south-1", label: "eu-south-1" },
			{ value: "eu-south-2", label: "eu-south-2" },
			{ value: "ca-central-1", label: "ca-central-1" },
			{ value: "sa-east-1", label: "sa-east-1" },
			{ value: "us-gov-east-1", label: "us-gov-east-1" },
			{ value: "us-gov-west-1", label: "us-gov-west-1" },
		].sort((e, t) => e.value.localeCompare(t.value))
		var sQ = C.z.object({
				input: C.z.string(),
				output: C.z.string(),
				input_cache_read: C.z.string().optional(),
				input_cache_write: C.z.string().optional(),
			}),
			sY = C.z.object({
				id: C.z.string(),
				object: C.z.literal("model"),
				created: C.z.number(),
				owned_by: C.z.string(),
				name: C.z.string(),
				description: C.z.string(),
				context_window: C.z.number(),
				max_tokens: C.z.number(),
				type: C.z.literal("language"),
				tags: C.z.array(C.z.string()).optional(),
				pricing: sQ,
				deprecated: C.z.boolean().optional(),
				default_temperature: C.z.number().optional(),
				settings: C.z.record(C.z.string(), C.z.unknown()).optional(),
				versionedSettings: C.z.record(C.z.string(), C.z.record(C.z.string(), C.z.unknown())).optional(),
			})
		C.z.object({ object: C.z.literal("list"), data: C.z.array(sY) })
		var s0 = {
			"MiniMax-M2.5": {
				maxTokens: 16384,
				contextWindow: 204800,
				supportsImages: !1,
				supportsPromptCache: !0,
				includedTools: ["search_and_replace"],
				excludedTools: ["apply_diff"],
				preserveReasoning: !0,
				inputPrice: 0.3,
				outputPrice: 1.2,
				cacheWritesPrice: 0.375,
				cacheReadsPrice: 0.03,
				description:
					"MiniMax M2.5, the latest MiniMax model with enhanced coding and agentic capabilities, building on the strengths of the M2 series.",
			},
			"MiniMax-M2": {
				maxTokens: 16384,
				contextWindow: 192e3,
				supportsImages: !1,
				supportsPromptCache: !0,
				includedTools: ["search_and_replace"],
				excludedTools: ["apply_diff"],
				preserveReasoning: !0,
				inputPrice: 0.3,
				outputPrice: 1.2,
				cacheWritesPrice: 0.375,
				cacheReadsPrice: 0.03,
				description:
					"MiniMax M2, a model born for Agents and code, featuring Top-tier Coding Capabilities, Powerful Agentic Performance, and Ultimate Cost-Effectiveness & Speed.",
			},
			"MiniMax-M2-Stable": {
				maxTokens: 16384,
				contextWindow: 192e3,
				supportsImages: !1,
				supportsPromptCache: !0,
				includedTools: ["search_and_replace"],
				excludedTools: ["apply_diff"],
				preserveReasoning: !0,
				inputPrice: 0.3,
				outputPrice: 1.2,
				cacheWritesPrice: 0.375,
				cacheReadsPrice: 0.03,
				description:
					"MiniMax M2 Stable (High Concurrency, Commercial Use), a model born for Agents and code, featuring Top-tier Coding Capabilities, Powerful Agentic Performance, and Ultimate Cost-Effectiveness & Speed.",
			},
			"MiniMax-M2.1": {
				maxTokens: 16384,
				contextWindow: 192e3,
				supportsImages: !1,
				supportsPromptCache: !0,
				includedTools: ["search_and_replace"],
				excludedTools: ["apply_diff"],
				preserveReasoning: !0,
				inputPrice: 0.3,
				outputPrice: 1.2,
				cacheWritesPrice: 0.375,
				cacheReadsPrice: 0.03,
				description:
					"MiniMax M2.1 builds on M2 with improved overall performance for agentic coding tasks and significantly faster response times.",
			},
		}
		s0["MiniMax-M2.5"]
		var s1 = [
				"openrouter",
				"vercel-ai-gateway",
				"litellm",
				"requesty",
				"roo",
				"unbound",
				"ollama",
				"lmstudio",
				"vscode-lm",
				"openai",
				"fake-ai",
				"anthropic",
				"bedrock",
				"baseten",
				"deepseek",
				"fireworks",
				"gemini",
				"gemini-cli",
				"mistral",
				"moonshot",
				"minimax",
				"openai-codex",
				"openai-native",
				"qwen-code",
				"roo",
				"sambanova",
				"vertex",
				"xai",
				"zai",
			],
			s4 = C.z.enum(s1),
			s6 = C.z.enum([
				"cerebras",
				"chutes",
				"deepinfra",
				"doubao",
				"featherless",
				"groq",
				"huggingface",
				"io-intelligence",
			]),
			s2 = C.z.union([s4, s6]),
			s9 = C.z.object({
				id: C.z.string(),
				name: C.z.string(),
				apiProvider: s2.optional(),
				modelId: C.z.string().optional(),
			}),
			s3 = C.z.object({
				includeMaxTokens: C.z.boolean().optional(),
				todoListEnabled: C.z.boolean().optional(),
				modelTemperature: C.z.number().nullish(),
				rateLimitSeconds: C.z.number().optional(),
				consecutiveMistakeLimit: C.z.number().min(0).optional(),
				enableReasoningEffort: C.z.boolean().optional(),
				reasoningEffort: sF.optional(),
				modelMaxTokens: C.z.number().optional(),
				modelMaxThinkingTokens: C.z.number().optional(),
				verbosity: sB.optional(),
			}),
			s5 = s3.extend({ apiModelId: C.z.string().optional() }),
			s8 = s5.extend({
				apiKey: C.z.string().optional(),
				anthropicBaseUrl: C.z.string().optional(),
				anthropicUseAuthToken: C.z.boolean().optional(),
				anthropicBeta1MContext: C.z.boolean().optional(),
			}),
			s7 = s3.extend({
				openRouterApiKey: C.z.string().optional(),
				openRouterModelId: C.z.string().optional(),
				openRouterBaseUrl: C.z.string().optional(),
				openRouterSpecificProvider: C.z.string().optional(),
			}),
			le = s5.extend({
				awsAccessKey: C.z.string().optional(),
				awsSecretKey: C.z.string().optional(),
				awsSessionToken: C.z.string().optional(),
				awsRegion: C.z.string().optional(),
				awsUseCrossRegionInference: C.z.boolean().optional(),
				awsUseGlobalInference: C.z.boolean().optional(),
				awsUsePromptCache: C.z.boolean().optional(),
				awsProfile: C.z.string().optional(),
				awsUseProfile: C.z.boolean().optional(),
				awsApiKey: C.z.string().optional(),
				awsUseApiKey: C.z.boolean().optional(),
				awsCustomArn: C.z.string().optional(),
				awsModelContextWindow: C.z.number().optional(),
				awsBedrockEndpointEnabled: C.z.boolean().optional(),
				awsBedrockEndpoint: C.z.string().optional(),
				awsBedrock1MContext: C.z.boolean().optional(),
				awsBedrockServiceTier: C.z.enum(["STANDARD", "FLEX", "PRIORITY"]).optional(),
			}),
			lt = s5.extend({
				vertexKeyFile: C.z.string().optional(),
				vertexJsonCredentials: C.z.string().optional(),
				vertexProjectId: C.z.string().optional(),
				vertexRegion: C.z.string().optional(),
				vertex1MContext: C.z.boolean().optional(),
			}),
			la = s3.extend({
				openAiBaseUrl: C.z.string().optional(),
				openAiApiKey: C.z.string().optional(),
				openAiR1FormatEnabled: C.z.boolean().optional(),
				openAiModelId: C.z.string().optional(),
				openAiCustomModelInfo: sW.nullish(),
				openAiUseAzure: C.z.boolean().optional(),
				azureApiVersion: C.z.string().optional(),
				openAiStreamingEnabled: C.z.boolean().optional(),
				openAiHostHeader: C.z.string().optional(),
				openAiHeaders: C.z.record(C.z.string(), C.z.string()).optional(),
			}),
			li = s3.extend({
				ollamaModelId: C.z.string().optional(),
				ollamaBaseUrl: C.z.string().optional(),
				ollamaApiKey: C.z.string().optional(),
				ollamaNumCtx: C.z.number().int().min(128).optional(),
			}),
			ln = s3.extend({
				vsCodeLmModelSelector: C.z
					.object({
						vendor: C.z.string().optional(),
						family: C.z.string().optional(),
						version: C.z.string().optional(),
						id: C.z.string().optional(),
					})
					.optional(),
			}),
			lr = s3.extend({
				lmStudioModelId: C.z.string().optional(),
				lmStudioBaseUrl: C.z.string().optional(),
				lmStudioDraftModelId: C.z.string().optional(),
				lmStudioSpeculativeDecodingEnabled: C.z.boolean().optional(),
			}),
			lo = s5.extend({ geminiApiKey: C.z.string().optional(), googleGeminiBaseUrl: C.z.string().optional() }),
			ls = s5.extend({
				geminiCliOAuthPath: C.z.string().optional(),
				geminiCliProjectId: C.z.string().optional(),
			}),
			ll = s5.extend({}),
			lu = s5.extend({
				openAiNativeApiKey: C.z.string().optional(),
				openAiNativeBaseUrl: C.z.string().optional(),
				openAiNativeServiceTier: sG.optional(),
			}),
			ld = s5.extend({ mistralApiKey: C.z.string().optional(), mistralCodestralUrl: C.z.string().optional() }),
			lc = s5.extend({ deepSeekBaseUrl: C.z.string().optional(), deepSeekApiKey: C.z.string().optional() }),
			lm = s5.extend({
				moonshotBaseUrl: C.z
					.union([C.z.literal("https://api.moonshot.ai/v1"), C.z.literal("https://api.moonshot.cn/v1")])
					.optional(),
				moonshotApiKey: C.z.string().optional(),
			}),
			lp = s5.extend({
				minimaxBaseUrl: C.z
					.union([C.z.literal("https://api.minimax.io/v1"), C.z.literal("https://api.minimaxi.com/v1")])
					.optional(),
				minimaxApiKey: C.z.string().optional(),
			}),
			lg = s3.extend({
				requestyBaseUrl: C.z.string().optional(),
				requestyApiKey: C.z.string().optional(),
				requestyModelId: C.z.string().optional(),
			}),
			lh = s3.extend({ unboundApiKey: C.z.string().optional(), unboundModelId: C.z.string().optional() }),
			lf = s3.extend({ fakeAi: C.z.unknown().optional() }),
			lv = s5.extend({ xaiApiKey: C.z.string().optional() }),
			lb = s3.extend({
				litellmBaseUrl: C.z.string().optional(),
				litellmApiKey: C.z.string().optional(),
				litellmModelId: C.z.string().optional(),
				litellmUsePromptCache: C.z.boolean().optional(),
			}),
			lk = s5.extend({ sambaNovaApiKey: C.z.string().optional() }),
			ly = C.z.enum(["international_coding", "china_coding", "international_api", "china_api"]),
			lx = s5.extend({ zaiApiKey: C.z.string().optional(), zaiApiLine: ly.optional() }),
			lz = s5.extend({ fireworksApiKey: C.z.string().optional() }),
			lw = s5.extend({ qwenCodeOauthPath: C.z.string().optional() }),
			l_ = s5.extend({ rooApiKey: C.z.string().optional() }),
			l$ = s3.extend({
				vercelAiGatewayApiKey: C.z.string().optional(),
				vercelAiGatewayModelId: C.z.string().optional(),
			}),
			lj = s5.extend({ basetenApiKey: C.z.string().optional() }),
			lI = C.z.object({ apiProvider: C.z.undefined() }),
			lS = C.z.discriminatedUnion("apiProvider", [
				s8.merge(C.z.object({ apiProvider: C.z.literal("anthropic") })),
				s7.merge(C.z.object({ apiProvider: C.z.literal("openrouter") })),
				le.merge(C.z.object({ apiProvider: C.z.literal("bedrock") })),
				lt.merge(C.z.object({ apiProvider: C.z.literal("vertex") })),
				la.merge(C.z.object({ apiProvider: C.z.literal("openai") })),
				li.merge(C.z.object({ apiProvider: C.z.literal("ollama") })),
				ln.merge(C.z.object({ apiProvider: C.z.literal("vscode-lm") })),
				lr.merge(C.z.object({ apiProvider: C.z.literal("lmstudio") })),
				lo.merge(C.z.object({ apiProvider: C.z.literal("gemini") })),
				ls.merge(C.z.object({ apiProvider: C.z.literal("gemini-cli") })),
				ll.merge(C.z.object({ apiProvider: C.z.literal("openai-codex") })),
				lu.merge(C.z.object({ apiProvider: C.z.literal("openai-native") })),
				ld.merge(C.z.object({ apiProvider: C.z.literal("mistral") })),
				lc.merge(C.z.object({ apiProvider: C.z.literal("deepseek") })),
				lm.merge(C.z.object({ apiProvider: C.z.literal("moonshot") })),
				lp.merge(C.z.object({ apiProvider: C.z.literal("minimax") })),
				lg.merge(C.z.object({ apiProvider: C.z.literal("requesty") })),
				lh.merge(C.z.object({ apiProvider: C.z.literal("unbound") })),
				lf.merge(C.z.object({ apiProvider: C.z.literal("fake-ai") })),
				lv.merge(C.z.object({ apiProvider: C.z.literal("xai") })),
				lj.merge(C.z.object({ apiProvider: C.z.literal("baseten") })),
				lb.merge(C.z.object({ apiProvider: C.z.literal("litellm") })),
				lk.merge(C.z.object({ apiProvider: C.z.literal("sambanova") })),
				lx.merge(C.z.object({ apiProvider: C.z.literal("zai") })),
				lz.merge(C.z.object({ apiProvider: C.z.literal("fireworks") })),
				lw.merge(C.z.object({ apiProvider: C.z.literal("qwen-code") })),
				l_.merge(C.z.object({ apiProvider: C.z.literal("roo") })),
				l$.merge(C.z.object({ apiProvider: C.z.literal("vercel-ai-gateway") })),
				lI,
			]),
			lC = C.z.object({
				apiProvider: s2.optional(),
				...s8.shape,
				...s7.shape,
				...le.shape,
				...lt.shape,
				...la.shape,
				...li.shape,
				...ln.shape,
				...lr.shape,
				...lo.shape,
				...ls.shape,
				...ll.shape,
				...lu.shape,
				...ld.shape,
				...lc.shape,
				...lm.shape,
				...lp.shape,
				...lg.shape,
				...lh.shape,
				...lf.shape,
				...lv.shape,
				...lj.shape,
				...lb.shape,
				...lk.shape,
				...lx.shape,
				...lz.shape,
				...lw.shape,
				...l_.shape,
				...l$.shape,
				...sX.shape,
			}),
			lN = lC.extend({ id: C.z.string().optional() })
		lS.and(C.z.object({ id: C.z.string().optional() }))
		var lO = lC.keyof().options
		Object.keys(s0)
		var lE = C.z.object({
			id: C.z.string(),
			rootTaskId: C.z.string().optional(),
			parentTaskId: C.z.string().optional(),
			number: C.z.number(),
			ts: C.z.number(),
			task: C.z.string(),
			tokensIn: C.z.number(),
			tokensOut: C.z.number(),
			cacheWrites: C.z.number().optional(),
			cacheReads: C.z.number().optional(),
			totalCost: C.z.number(),
			size: C.z.number().optional(),
			workspace: C.z.string().optional(),
			mode: C.z.string().optional(),
			apiConfigName: C.z.string().optional(),
			status: C.z.enum(["active", "completed", "delegated"]).optional(),
			delegatedToId: C.z.string().optional(),
			childIds: C.z.array(C.z.string()).optional(),
			awaitingChildId: C.z.string().optional(),
			completedByChildId: C.z.string().optional(),
			completionResultSummary: C.z.string().optional(),
		})
		C.z.enum(["preventFocusDisruption", "imageGeneration", "runSlashCommand", "customTools"])
		var lP = C.z.object({
				preventFocusDisruption: C.z.boolean().optional(),
				imageGeneration: C.z.boolean().optional(),
				runSlashCommand: C.z.boolean().optional(),
				customTools: C.z.boolean().optional(),
			}),
			lU = C.z.enum([
				"followup",
				"command",
				"command_output",
				"completion_result",
				"tool",
				"api_req_failed",
				"resume_task",
				"resume_completed_task",
				"mistake_limit_reached",
				"use_mcp_server",
				"auto_approval_max_req_reached",
			]),
			lT = C.z.enum([
				"error",
				"api_req_started",
				"api_req_finished",
				"api_req_retried",
				"api_req_retry_delayed",
				"api_req_rate_limit_wait",
				"api_req_deleted",
				"text",
				"image",
				"reasoning",
				"completion_result",
				"user_feedback",
				"user_feedback_diff",
				"command_output",
				"shell_integration_warning",
				"mcp_server_request_started",
				"mcp_server_response",
				"subtask_result",
				"checkpoint_saved",
				"rooignore_error",
				"diff_error",
				"condense_context",
				"condense_context_error",
				"sliding_window_truncation",
				"codebase_search_result",
				"user_edit_todos",
				"too_many_tools_warning",
				"tool",
			]),
			lA = C.z.object({ icon: C.z.string().optional(), text: C.z.string().optional() }),
			lD = C.z.object({
				cost: C.z.number(),
				prevContextTokens: C.z.number(),
				newContextTokens: C.z.number(),
				summary: C.z.string(),
				condenseId: C.z.string().optional(),
			}),
			lZ = C.z.object({
				truncationId: C.z.string(),
				messagesRemoved: C.z.number(),
				prevContextTokens: C.z.number(),
				newContextTokens: C.z.number(),
			}),
			lR = C.z.object({
				ts: C.z.number(),
				type: C.z.union([C.z.literal("ask"), C.z.literal("say")]),
				ask: lU.optional(),
				say: lT.optional(),
				text: C.z.string().optional(),
				images: C.z.array(C.z.string()).optional(),
				partial: C.z.boolean().optional(),
				reasoning: C.z.string().optional(),
				conversationHistoryIndex: C.z.number().optional(),
				checkpoint: C.z.record(C.z.string(), C.z.unknown()).optional(),
				progressStatus: lA.optional(),
				contextCondense: lD.optional(),
				contextTruncation: lZ.optional(),
				isProtected: C.z.boolean().optional(),
				apiProtocol: C.z.union([C.z.literal("openai"), C.z.literal("anthropic")]).optional(),
				isAnswered: C.z.boolean().optional(),
			}),
			lL = C.z.object({
				totalTokensIn: C.z.number(),
				totalTokensOut: C.z.number(),
				totalCacheWrites: C.z.number().optional(),
				totalCacheReads: C.z.number().optional(),
				totalCost: C.z.number(),
				contextTokens: C.z.number(),
			}),
			lM = C.z.object({
				timestamp: C.z.number(),
				id: C.z.string(),
				text: C.z.string(),
				images: C.z.array(C.z.string()).optional(),
			}),
			lq = C.z.enum(["unset", "enabled", "disabled"]),
			lK =
				(((a = lK || {}).TASK_CREATED = "Task Created"),
				(a.TASK_RESTARTED = "Task Reopened"),
				(a.TASK_COMPLETED = "Task Completed"),
				(a.TASK_MESSAGE = "Task Message"),
				(a.TASK_CONVERSATION_MESSAGE = "Conversation Message"),
				(a.LLM_COMPLETION = "LLM Completion"),
				(a.MODE_SWITCH = "Mode Switched"),
				(a.MODE_SELECTOR_OPENED = "Mode Selector Opened"),
				(a.TOOL_USED = "Tool Used"),
				(a.CHECKPOINT_CREATED = "Checkpoint Created"),
				(a.CHECKPOINT_RESTORED = "Checkpoint Restored"),
				(a.CHECKPOINT_DIFFED = "Checkpoint Diffed"),
				(a.TAB_SHOWN = "Tab Shown"),
				(a.MODE_SETTINGS_CHANGED = "Mode Setting Changed"),
				(a.CUSTOM_MODE_CREATED = "Custom Mode Created"),
				(a.CONTEXT_CONDENSED = "Context Condensed"),
				(a.SLIDING_WINDOW_TRUNCATION = "Sliding Window Truncation"),
				(a.CODE_ACTION_USED = "Code Action Used"),
				(a.PROMPT_ENHANCED = "Prompt Enhanced"),
				(a.TITLE_BUTTON_CLICKED = "Title Button Clicked"),
				(a.AUTHENTICATION_INITIATED = "Authentication Initiated"),
				(a.MARKETPLACE_ITEM_INSTALLED = "Marketplace Item Installed"),
				(a.MARKETPLACE_ITEM_REMOVED = "Marketplace Item Removed"),
				(a.MARKETPLACE_TAB_VIEWED = "Marketplace Tab Viewed"),
				(a.MARKETPLACE_INSTALL_BUTTON_CLICKED = "Marketplace Install Button Clicked"),
				(a.SHARE_BUTTON_CLICKED = "Share Button Clicked"),
				(a.SHARE_ORGANIZATION_CLICKED = "Share Organization Clicked"),
				(a.SHARE_PUBLIC_CLICKED = "Share Public Clicked"),
				(a.SHARE_CONNECT_TO_CLOUD_CLICKED = "Share Connect To Cloud Clicked"),
				(a.ACCOUNT_CONNECT_CLICKED = "Account Connect Clicked"),
				(a.ACCOUNT_CONNECT_SUCCESS = "Account Connect Success"),
				(a.ACCOUNT_LOGOUT_CLICKED = "Account Logout Clicked"),
				(a.ACCOUNT_LOGOUT_SUCCESS = "Account Logout Success"),
				(a.FEATURED_PROVIDER_CLICKED = "Featured Provider Clicked"),
				(a.UPSELL_DISMISSED = "Upsell Dismissed"),
				(a.UPSELL_CLICKED = "Upsell Clicked"),
				(a.SCHEMA_VALIDATION_ERROR = "Schema Validation Error"),
				(a.DIFF_APPLICATION_ERROR = "Diff Application Error"),
				(a.SHELL_INTEGRATION_ERROR = "Shell Integration Error"),
				(a.CONSECUTIVE_MISTAKE_ERROR = "Consecutive Mistake Error"),
				(a.CODE_INDEX_ERROR = "Code Index Error"),
				(a.TELEMETRY_SETTINGS_CHANGED = "Telemetry Settings Changed"),
				(a.MODEL_CACHE_EMPTY_RESPONSE = "Model Cache Empty Response"),
				(a.READ_FILE_LEGACY_FORMAT_USED = "Read File Legacy Format Used"),
				a),
			lF = C.z.object({
				appName: C.z.string(),
				appVersion: C.z.string(),
				vscodeVersion: C.z.string(),
				platform: C.z.string(),
				editorName: C.z.string(),
				hostname: C.z.string().optional(),
			}),
			lB = C.z.object({ language: C.z.string(), mode: C.z.string() }),
			lG = C.z.object({ cloudIsAuthenticated: C.z.boolean().optional() }),
			lV = C.z.object({ ...lF.shape, ...lB.shape, ...lG.shape }),
			lW = C.z.object({
				taskId: C.z.string().optional(),
				parentTaskId: C.z.string().optional(),
				apiProvider: C.z.enum(s1).optional(),
				modelId: C.z.string().optional(),
				diffStrategy: C.z.string().optional(),
				isSubtask: C.z.boolean().optional(),
				todos: C.z
					.object({
						total: C.z.number(),
						completed: C.z.number(),
						inProgress: C.z.number(),
						pending: C.z.number(),
					})
					.optional(),
			}),
			lJ = C.z.object({
				repositoryUrl: C.z.string().optional(),
				repositoryName: C.z.string().optional(),
				defaultBranch: C.z.string().optional(),
			}),
			lH = C.z.object({ ...lV.shape, ...lW.shape, ...lJ.shape })
		C.z.discriminatedUnion("type", [
			C.z.object({
				type: C.z.enum([
					"Task Created",
					"Task Reopened",
					"Task Completed",
					"Conversation Message",
					"Mode Switched",
					"Mode Selector Opened",
					"Tool Used",
					"Checkpoint Created",
					"Checkpoint Restored",
					"Checkpoint Diffed",
					"Code Action Used",
					"Prompt Enhanced",
					"Title Button Clicked",
					"Authentication Initiated",
					"Marketplace Item Installed",
					"Marketplace Item Removed",
					"Marketplace Tab Viewed",
					"Marketplace Install Button Clicked",
					"Share Button Clicked",
					"Share Organization Clicked",
					"Share Public Clicked",
					"Share Connect To Cloud Clicked",
					"Account Connect Clicked",
					"Account Connect Success",
					"Account Logout Clicked",
					"Account Logout Success",
					"Featured Provider Clicked",
					"Upsell Dismissed",
					"Upsell Clicked",
					"Schema Validation Error",
					"Diff Application Error",
					"Shell Integration Error",
					"Consecutive Mistake Error",
					"Code Index Error",
					"Model Cache Empty Response",
					"Context Condensed",
					"Sliding Window Truncation",
					"Tab Shown",
					"Mode Setting Changed",
					"Custom Mode Created",
					"Read File Legacy Format Used",
				]),
				properties: lH,
			}),
			C.z.object({
				type: C.z.literal("Telemetry Settings Changed"),
				properties: C.z.object({ ...lH.shape, previousSetting: lq, newSetting: lq }),
			}),
			C.z.object({
				type: C.z.literal("Task Message"),
				properties: C.z.object({ ...lH.shape, taskId: C.z.string(), message: lR }),
			}),
			C.z.object({
				type: C.z.literal("LLM Completion"),
				properties: C.z.object({
					...lH.shape,
					inputTokens: C.z.number(),
					outputTokens: C.z.number(),
					cacheReadTokens: C.z.number().optional(),
					cacheWriteTokens: C.z.number().optional(),
					cost: C.z.number().optional(),
				}),
			}),
		])
		var lX = C.z.enum(["read", "edit", "command", "mcp", "modes"]),
			lQ = ["browser"],
			lY = C.z.enum([
				"execute_command",
				"read_file",
				"read_command_output",
				"write_to_file",
				"apply_diff",
				"edit",
				"search_and_replace",
				"search_replace",
				"edit_file",
				"apply_patch",
				"search_files",
				"list_files",
				"use_mcp_tool",
				"access_mcp_resource",
				"ask_followup_question",
				"attempt_completion",
				"switch_mode",
				"new_task",
				"codebase_search",
				"update_todo_list",
				"run_slash_command",
				"skill",
				"generate_image",
				"custom_tool",
			]),
			l0 = C.z.record(lY, C.z.object({ attempts: C.z.number(), failures: C.z.number() })),
			l1 = C.z.object({
				fileRegex: C.z
					.string()
					.optional()
					.refine(
						(e) => {
							if (!e) return !0
							try {
								return new RegExp(e), !0
							} catch {
								return !1
							}
						},
						{ message: "Invalid regular expression pattern" },
					),
				description: C.z.string().optional(),
			}),
			l4 = C.z.union([lX, C.z.tuple([lX, l1])]),
			l6 = C.z.array(l4).refine(
				(e) => {
					let t = new Set()
					return e.every((e) => {
						let a = Array.isArray(e) ? e[0] : e
						return !t.has(a) && (t.add(a), !0)
					})
				},
				{ message: "Duplicate groups are not allowed" },
			),
			l2 = C.z.preprocess(
				(e) =>
					Array.isArray(e)
						? e.filter(
								(e) =>
									!("string" == typeof e
										? lQ.includes(e)
										: !!Array.isArray(e) &&
											e.length >= 1 &&
											"string" == typeof e[0] &&
											lQ.includes(e[0])),
							)
						: e,
				l6,
			),
			l9 = C.z.object({
				slug: C.z.string().regex(/^[a-zA-Z0-9-]+$/, "Slug must contain only letters numbers and dashes"),
				name: C.z.string().min(1, "Name is required"),
				roleDefinition: C.z.string().min(1, "Role definition is required"),
				whenToUse: C.z.string().optional(),
				description: C.z.string().optional(),
				customInstructions: C.z.string().optional(),
				groups: l2,
				source: C.z.enum(["global", "project"]).optional(),
			})
		C.z.object({
			customModes: C.z.array(l9).refine(
				(e) => {
					let t = new Set()
					return e.every((e) => !t.has(e.slug) && (t.add(e.slug), !0))
				},
				{ message: "Duplicate mode slugs are not allowed" },
			),
		})
		var l3 = C.z.object({
				roleDefinition: C.z.string().optional(),
				whenToUse: C.z.string().optional(),
				description: C.z.string().optional(),
				customInstructions: C.z.string().optional(),
			}),
			l5 = C.z.record(C.z.string(), l3.optional()),
			l8 = C.z.record(C.z.string(), C.z.string().optional()),
			l7 = C.z.enum([
				"ca",
				"de",
				"en",
				"es",
				"fr",
				"hi",
				"id",
				"it",
				"ja",
				"ko",
				"nl",
				"pl",
				"pt-BR",
				"ru",
				"tr",
				"vi",
				"zh-CN",
				"zh-TW",
			]),
			ue = C.z.object({
				currentApiConfigName: C.z.string().optional(),
				listApiConfigMeta: C.z.array(s9).optional(),
				pinnedApiConfigs: C.z.record(C.z.string(), C.z.boolean()).optional(),
				lastShownAnnouncementId: C.z.string().optional(),
				customInstructions: C.z.string().optional(),
				taskHistory: C.z.array(lE).optional(),
				dismissedUpsells: C.z.array(C.z.string()).optional(),
				imageGenerationProvider: C.z.enum(["openrouter", "roo"]).optional(),
				openRouterImageApiKey: C.z.string().optional(),
				openRouterImageGenerationSelectedModel: C.z.string().optional(),
				customCondensingPrompt: C.z.string().optional(),
				autoApprovalEnabled: C.z.boolean().optional(),
				alwaysAllowReadOnly: C.z.boolean().optional(),
				alwaysAllowReadOnlyOutsideWorkspace: C.z.boolean().optional(),
				alwaysAllowWrite: C.z.boolean().optional(),
				alwaysAllowWriteOutsideWorkspace: C.z.boolean().optional(),
				alwaysAllowWriteProtected: C.z.boolean().optional(),
				writeDelayMs: C.z.number().min(0).optional(),
				requestDelaySeconds: C.z.number().optional(),
				alwaysAllowMcp: C.z.boolean().optional(),
				alwaysAllowModeSwitch: C.z.boolean().optional(),
				alwaysAllowSubtasks: C.z.boolean().optional(),
				alwaysAllowExecute: C.z.boolean().optional(),
				alwaysAllowFollowupQuestions: C.z.boolean().optional(),
				followupAutoApproveTimeoutMs: C.z.number().optional(),
				allowedCommands: C.z.array(C.z.string()).optional(),
				deniedCommands: C.z.array(C.z.string()).optional(),
				commandExecutionTimeout: C.z.number().optional(),
				commandTimeoutAllowlist: C.z.array(C.z.string()).optional(),
				preventCompletionWithOpenTodos: C.z.boolean().optional(),
				allowedMaxRequests: C.z.number().nullish(),
				allowedMaxCost: C.z.number().nullish(),
				autoCondenseContext: C.z.boolean().optional(),
				autoCondenseContextPercent: C.z.number().optional(),
				includeCurrentTime: C.z.boolean().optional(),
				includeCurrentCost: C.z.boolean().optional(),
				maxGitStatusFiles: C.z.number().optional(),
				includeDiagnosticMessages: C.z.boolean().optional(),
				maxDiagnosticMessages: C.z.number().optional(),
				enableCheckpoints: C.z.boolean().optional(),
				checkpointTimeout: C.z.number().int().min(10).max(60).optional(),
				ttsEnabled: C.z.boolean().optional(),
				ttsSpeed: C.z.number().optional(),
				soundEnabled: C.z.boolean().optional(),
				soundVolume: C.z.number().optional(),
				maxOpenTabsContext: C.z.number().optional(),
				maxWorkspaceFiles: C.z.number().optional(),
				showRooIgnoredFiles: C.z.boolean().optional(),
				enableSubfolderRules: C.z.boolean().optional(),
				maxImageFileSize: C.z.number().optional(),
				maxTotalImageSize: C.z.number().optional(),
				terminalOutputPreviewSize: C.z.enum(["small", "medium", "large"]).optional(),
				terminalShellIntegrationTimeout: C.z.number().optional(),
				terminalShellIntegrationDisabled: C.z.boolean().optional(),
				terminalCommandDelay: C.z.number().optional(),
				terminalPowershellCounter: C.z.boolean().optional(),
				terminalZshClearEolMark: C.z.boolean().optional(),
				terminalZshOhMy: C.z.boolean().optional(),
				terminalZshP10k: C.z.boolean().optional(),
				terminalZdotdir: C.z.boolean().optional(),
				diagnosticsEnabled: C.z.boolean().optional(),
				rateLimitSeconds: C.z.number().optional(),
				experiments: lP.optional(),
				codebaseIndexModels: sH.optional(),
				codebaseIndexConfig: sJ.optional(),
				language: l7.optional(),
				telemetrySetting: lq.optional(),
				mcpEnabled: C.z.boolean().optional(),
				mode: C.z.string().optional(),
				modeApiConfigs: C.z.record(C.z.string(), C.z.string()).optional(),
				customModes: C.z.array(l9).optional(),
				customModePrompts: l5.optional(),
				customSupportPrompts: l8.optional(),
				enhancementApiConfigId: C.z.string().optional(),
				includeTaskHistoryInEnhance: C.z.boolean().optional(),
				historyPreviewCollapsed: C.z.boolean().optional(),
				reasoningBlockCollapsed: C.z.boolean().optional(),
				enterBehavior: C.z.enum(["send", "newline"]).optional(),
				profileThresholds: C.z.record(C.z.string(), C.z.number()).optional(),
				hasOpenedModeSelector: C.z.boolean().optional(),
				lastModeExportPath: C.z.string().optional(),
				lastModeImportPath: C.z.string().optional(),
				lastSettingsExportPath: C.z.string().optional(),
				lastTaskExportPath: C.z.string().optional(),
				lastImageSavePath: C.z.string().optional(),
				worktreeAutoOpenPath: C.z.string().optional(),
				showWorktreesInHomeScreen: C.z.boolean().optional(),
				disabledTools: C.z.array(lY).optional(),
			}),
			ut = ue.keyof().options,
			ua = lC.merge(ue),
			ui = [
				"apiKey",
				"openRouterApiKey",
				"awsAccessKey",
				"awsApiKey",
				"awsSecretKey",
				"awsSessionToken",
				"openAiApiKey",
				"ollamaApiKey",
				"geminiApiKey",
				"openAiNativeApiKey",
				"deepSeekApiKey",
				"moonshotApiKey",
				"mistralApiKey",
				"minimaxApiKey",
				"requestyApiKey",
				"unboundApiKey",
				"xaiApiKey",
				"litellmApiKey",
				"codeIndexOpenAiKey",
				"codeIndexQdrantApiKey",
				"codebaseIndexOpenAiCompatibleApiKey",
				"codebaseIndexGeminiApiKey",
				"codebaseIndexMistralApiKey",
				"codebaseIndexVercelAiGatewayApiKey",
				"codebaseIndexOpenRouterApiKey",
				"sambaNovaApiKey",
				"zaiApiKey",
				"fireworksApiKey",
				"vercelAiGatewayApiKey",
				"basetenApiKey",
			],
			un = ["openRouterImageApiKey"]
		;[...ut, ...lO].filter((e) => !(ui.includes(e) || un.includes(e)))
		var ur = C.z.enum(["start", "message", "cancel", "ping", "shutdown"]),
			uo = C.z.object({ command: ur, requestId: C.z.string().min(1) }),
			us = uo.extend({
				command: C.z.literal("start"),
				prompt: C.z.string(),
				images: C.z.array(C.z.string()).optional(),
				configuration: ua.optional(),
			}),
			ul = uo.extend({
				command: C.z.literal("message"),
				prompt: C.z.string(),
				images: C.z.array(C.z.string()).optional(),
			}),
			uu = uo.extend({ command: C.z.literal("cancel") }),
			ud = uo.extend({ command: C.z.literal("ping") }),
			uc = uo.extend({ command: C.z.literal("shutdown") })
		C.z.discriminatedUnion("command", [us, ul, uu, ud, uc]), C.z.enum(["text", "json", "stream-json"])
		var um = C.z.enum([
				"system",
				"control",
				"queue",
				"assistant",
				"user",
				"tool_use",
				"tool_result",
				"thinking",
				"error",
				"result",
			]),
			up = C.z.enum(["ack", "done", "error"]),
			ug = C.z.object({
				id: C.z.string().min(1),
				text: C.z.string().optional(),
				imageCount: C.z.number().optional(),
				timestamp: C.z.number().optional(),
			}),
			uh = C.z.object({ name: C.z.string(), input: C.z.record(C.z.unknown()).optional() }),
			uf = C.z.object({
				name: C.z.string(),
				output: C.z.string().optional(),
				error: C.z.string().optional(),
				exitCode: C.z.number().optional(),
			}),
			uv = C.z.object({
				totalCost: C.z.number().optional(),
				inputTokens: C.z.number().optional(),
				outputTokens: C.z.number().optional(),
				cacheWrites: C.z.number().optional(),
				cacheReads: C.z.number().optional(),
			}),
			ub = C.z
				.object({
					type: um.optional(),
					subtype: C.z.string().optional(),
					requestId: C.z.string().optional(),
					command: ur.optional(),
					taskId: C.z.string().optional(),
					code: C.z.string().optional(),
					content: C.z.string().optional(),
					success: C.z.boolean().optional(),
					id: C.z.number().optional(),
					done: C.z.boolean().optional(),
					queueDepth: C.z.number().optional(),
					queue: C.z.array(ug).optional(),
					schemaVersion: C.z.number().optional(),
					protocol: C.z.string().optional(),
					capabilities: C.z.array(C.z.string()).optional(),
					tool_use: uh.optional(),
					tool_result: uf.optional(),
					cost: uv.optional(),
				})
				.passthrough()
		ub.extend({ type: C.z.literal("control"), subtype: up, requestId: C.z.string().min(1) }),
			C.z.object({
				type: C.z.literal("result"),
				success: C.z.boolean(),
				content: C.z.string().optional(),
				cost: uv.optional(),
				events: C.z.array(ub),
			})
		var uk =
				(((i = uk || {}).TaskCreated = "taskCreated"),
				(i.TaskStarted = "taskStarted"),
				(i.TaskCompleted = "taskCompleted"),
				(i.TaskAborted = "taskAborted"),
				(i.TaskFocused = "taskFocused"),
				(i.TaskUnfocused = "taskUnfocused"),
				(i.TaskActive = "taskActive"),
				(i.TaskInteractive = "taskInteractive"),
				(i.TaskResumable = "taskResumable"),
				(i.TaskIdle = "taskIdle"),
				(i.TaskPaused = "taskPaused"),
				(i.TaskUnpaused = "taskUnpaused"),
				(i.TaskSpawned = "taskSpawned"),
				(i.TaskDelegated = "taskDelegated"),
				(i.TaskDelegationCompleted = "taskDelegationCompleted"),
				(i.TaskDelegationResumed = "taskDelegationResumed"),
				(i.Message = "message"),
				(i.TaskModeSwitched = "taskModeSwitched"),
				(i.TaskAskResponded = "taskAskResponded"),
				(i.TaskUserMessage = "taskUserMessage"),
				(i.QueuedMessagesUpdated = "queuedMessagesUpdated"),
				(i.TaskTokenUsageUpdated = "taskTokenUsageUpdated"),
				(i.TaskToolFailed = "taskToolFailed"),
				(i.ModeChanged = "modeChanged"),
				(i.ProviderProfileChanged = "providerProfileChanged"),
				(i.CommandsResponse = "commandsResponse"),
				(i.ModesResponse = "modesResponse"),
				(i.ModelsResponse = "modelsResponse"),
				(i.EvalPass = "evalPass"),
				(i.EvalFail = "evalFail"),
				i),
			uy = C.z.object({
				taskCreated: C.z.tuple([C.z.string()]),
				taskStarted: C.z.tuple([C.z.string()]),
				taskCompleted: C.z.tuple([C.z.string(), lL, l0, C.z.object({ isSubtask: C.z.boolean() })]),
				taskAborted: C.z.tuple([C.z.string()]),
				taskFocused: C.z.tuple([C.z.string()]),
				taskUnfocused: C.z.tuple([C.z.string()]),
				taskActive: C.z.tuple([C.z.string()]),
				taskInteractive: C.z.tuple([C.z.string()]),
				taskResumable: C.z.tuple([C.z.string()]),
				taskIdle: C.z.tuple([C.z.string()]),
				taskPaused: C.z.tuple([C.z.string()]),
				taskUnpaused: C.z.tuple([C.z.string()]),
				taskSpawned: C.z.tuple([C.z.string(), C.z.string()]),
				taskDelegated: C.z.tuple([C.z.string(), C.z.string()]),
				taskDelegationCompleted: C.z.tuple([C.z.string(), C.z.string(), C.z.string()]),
				taskDelegationResumed: C.z.tuple([C.z.string(), C.z.string()]),
				message: C.z.tuple([
					C.z.object({
						taskId: C.z.string(),
						action: C.z.union([C.z.literal("created"), C.z.literal("updated")]),
						message: lR,
					}),
				]),
				taskModeSwitched: C.z.tuple([C.z.string(), C.z.string()]),
				taskAskResponded: C.z.tuple([C.z.string()]),
				taskUserMessage: C.z.tuple([C.z.string()]),
				queuedMessagesUpdated: C.z.tuple([C.z.string(), C.z.array(lM)]),
				taskToolFailed: C.z.tuple([C.z.string(), lY, C.z.string()]),
				taskTokenUsageUpdated: C.z.tuple([C.z.string(), lL, l0]),
				modeChanged: C.z.tuple([C.z.string()]),
				providerProfileChanged: C.z.tuple([C.z.object({ name: C.z.string(), provider: C.z.string() })]),
				commandsResponse: C.z.tuple([
					C.z.array(
						C.z.object({
							name: C.z.string(),
							source: C.z.enum(["global", "project", "built-in"]),
							filePath: C.z.string().optional(),
							description: C.z.string().optional(),
							argumentHint: C.z.string().optional(),
						}),
					),
				]),
				modesResponse: C.z.tuple([C.z.array(C.z.object({ slug: C.z.string(), name: C.z.string() }))]),
				modelsResponse: C.z.tuple([C.z.record(C.z.string(), sW)]),
			}),
			ux = C.z.discriminatedUnion("eventName", [
				C.z.object({
					eventName: C.z.literal("taskCreated"),
					payload: uy.shape.taskCreated,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("taskStarted"),
					payload: uy.shape.taskStarted,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("taskCompleted"),
					payload: uy.shape.taskCompleted,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("taskAborted"),
					payload: uy.shape.taskAborted,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("taskFocused"),
					payload: uy.shape.taskFocused,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("taskUnfocused"),
					payload: uy.shape.taskUnfocused,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("taskActive"),
					payload: uy.shape.taskActive,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("taskInteractive"),
					payload: uy.shape.taskInteractive,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("taskResumable"),
					payload: uy.shape.taskResumable,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("taskIdle"),
					payload: uy.shape.taskIdle,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("taskPaused"),
					payload: uy.shape.taskPaused,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("taskUnpaused"),
					payload: uy.shape.taskUnpaused,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("taskSpawned"),
					payload: uy.shape.taskSpawned,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("taskDelegated"),
					payload: uy.shape.taskDelegated,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("taskDelegationCompleted"),
					payload: uy.shape.taskDelegationCompleted,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("taskDelegationResumed"),
					payload: uy.shape.taskDelegationResumed,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("message"),
					payload: uy.shape.message,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("taskModeSwitched"),
					payload: uy.shape.taskModeSwitched,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("taskAskResponded"),
					payload: uy.shape.taskAskResponded,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("queuedMessagesUpdated"),
					payload: uy.shape.queuedMessagesUpdated,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("taskToolFailed"),
					payload: uy.shape.taskToolFailed,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("taskTokenUsageUpdated"),
					payload: uy.shape.taskTokenUsageUpdated,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("commandsResponse"),
					payload: uy.shape.commandsResponse,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("modesResponse"),
					payload: uy.shape.modesResponse,
					taskId: C.z.number().optional(),
				}),
				C.z.object({
					eventName: C.z.literal("modelsResponse"),
					payload: uy.shape.modelsResponse,
					taskId: C.z.number().optional(),
				}),
				C.z.object({ eventName: C.z.literal("evalPass"), payload: C.z.undefined(), taskId: C.z.number() }),
				C.z.object({ eventName: C.z.literal("evalFail"), payload: C.z.undefined(), taskId: C.z.number() }),
			]),
			uz =
				(((n = uz || {}).Running = "running"),
				(n.Interactive = "interactive"),
				(n.Resumable = "resumable"),
				(n.Idle = "idle"),
				(n.None = "none"),
				n),
			uw = C.z.object({ task: C.z.string().optional(), images: C.z.array(C.z.string()).optional() }),
			u_ = C.z.object({
				name: C.z.string().min(1),
				key: C.z.string().min(1),
				placeholder: C.z.string().optional(),
				optional: C.z.boolean().optional().default(!1),
			}),
			u$ = C.z.object({
				name: C.z.string().min(1),
				content: C.z.string().min(1),
				parameters: C.z.array(u_).optional(),
				prerequisites: C.z.array(C.z.string()).optional(),
			})
		C.z.enum(["mode", "mcp"])
		var uj = C.z.object({
				id: C.z.string().min(1),
				name: C.z.string().min(1, "Name is required"),
				description: C.z.string(),
				author: C.z.string().optional(),
				authorUrl: C.z.string().url("Author URL must be a valid URL").optional(),
				tags: C.z.array(C.z.string()).optional(),
				prerequisites: C.z.array(C.z.string()).optional(),
			}),
			uI = uj.extend({ content: C.z.string().min(1) }),
			uS = uj.extend({
				url: C.z.string().url(),
				content: C.z.union([C.z.string().min(1), C.z.array(u$)]),
				parameters: C.z.array(u_).optional(),
			}),
			uC = C.z.discriminatedUnion("type", [
				uI.extend({ type: C.z.literal("mode") }),
				uS.extend({ type: C.z.literal("mcp") }),
			])
		C.z.object({
			target: C.z.enum(["global", "project"]).optional().default("project"),
			parameters: C.z.record(C.z.string(), C.z.any()).optional(),
		})
		var uN = C.z.object({
				allowAll: C.z.boolean(),
				providers: C.z.record(
					C.z.object({ allowAll: C.z.boolean(), models: C.z.array(C.z.string()).optional() }),
				),
			}),
			uO = ue
				.pick({
					enableCheckpoints: !0,
					maxOpenTabsContext: !0,
					maxWorkspaceFiles: !0,
					showRooIgnoredFiles: !0,
					terminalCommandDelay: !0,
					terminalShellIntegrationDisabled: !0,
					terminalShellIntegrationTimeout: !0,
					terminalZshClearEolMark: !0,
					disabledTools: !0,
				})
				.merge(
					C.z.object({
						maxOpenTabsContext: C.z.number().int().nonnegative().optional(),
						maxWorkspaceFiles: C.z.number().int().nonnegative().optional(),
						terminalCommandDelay: C.z.number().int().nonnegative().optional(),
						terminalShellIntegrationTimeout: C.z.number().int().nonnegative().optional(),
					}),
				),
			uE = C.z.enum(["all", "list-only", "admins-and-creator", "creator", "full-lockdown"]),
			uP = C.z.object({
				recordTaskMessages: C.z.boolean().optional(),
				enableTaskSharing: C.z.boolean().optional(),
				allowPublicTaskSharing: C.z.boolean().optional(),
				taskShareExpirationDays: C.z.number().int().positive().optional(),
				allowMembersViewAllTasks: C.z.boolean().optional(),
				workspaceTaskVisibility: uE.optional(),
				llmEnhancedFeaturesEnabled: C.z.boolean().optional(),
			}),
			uU = C.z.object({})
		C.z.object({
			version: C.z.number(),
			cloudSettings: uP.optional(),
			defaultSettings: uO,
			allowList: uN,
			features: uU.optional(),
			hiddenMcps: C.z.array(C.z.string()).optional(),
			hideMarketplaceMcps: C.z.boolean().optional(),
			mcps: C.z.array(uS).optional(),
			providerProfiles: C.z.record(C.z.string(), lN).optional(),
		})
		var uT = C.z.object({}),
			uA = C.z.object({
				taskSyncEnabled: C.z.boolean().optional(),
				llmEnhancedFeaturesEnabled: C.z.boolean().optional(),
			})
		C.z.object({ features: uT, settings: uA, version: C.z.number() }),
			C.z.object({
				success: C.z.boolean(),
				shareUrl: C.z.string().optional(),
				error: C.z.string().optional(),
				isNewShare: C.z.boolean().optional(),
				manageUrl: C.z.string().optional(),
			})
		var uD =
				(((r = uD || {}).DISCONNECTED = "disconnected"),
				(r.CONNECTING = "connecting"),
				(r.CONNECTED = "connected"),
				(r.RETRYING = "retrying"),
				(r.FAILED = "failed"),
				r),
			uZ = C.z.object({
				taskId: C.z.string(),
				taskStatus: C.z.nativeEnum(uz),
				taskAsk: lR.optional(),
				queuedMessages: C.z.array(lM).optional(),
				parentTaskId: C.z.string().optional(),
				childTaskId: C.z.string().optional(),
				tokenUsage: lL.optional(),
				...uw.shape,
			})
		C.z.object({
			instanceId: C.z.string(),
			userId: C.z.string(),
			workspacePath: C.z.string(),
			appProperties: lF,
			gitProperties: lJ.optional(),
			lastHeartbeat: C.z.coerce.number(),
			task: uZ,
			taskAsk: lR.optional(),
			taskHistory: C.z.array(C.z.string()),
			mode: C.z.string().optional(),
			modes: C.z.array(C.z.object({ slug: C.z.string(), name: C.z.string() })).optional(),
			providerProfile: C.z.string().optional(),
			providerProfiles: C.z
				.array(C.z.object({ name: C.z.string(), provider: C.z.string().optional() }))
				.optional(),
			isCloudAgent: C.z.boolean().optional(),
		})
		var uR =
			(((o = uR || {})[(o.Message = "message")] = "Message"),
			(o[(o.TaskModeSwitched = "taskModeSwitched")] = "TaskModeSwitched"),
			(o[(o.TaskInteractive = "taskInteractive")] = "TaskInteractive"),
			o)
		C.z.discriminatedUnion("type", [
			C.z.object({ type: C.z.literal(uR.Message), taskId: C.z.string(), action: C.z.string(), message: lR }),
			C.z.object({ type: C.z.literal(uR.TaskModeSwitched), taskId: C.z.string(), mode: C.z.string() }),
			C.z.object({ type: C.z.literal(uR.TaskInteractive), taskId: C.z.string() }),
		])
		var uL = (((s = uL || {}).Message = "message"), (s.ApproveAsk = "approve_ask"), (s.DenyAsk = "deny_ask"), s)
		C.z.discriminatedUnion("type", [
			C.z.object({
				type: C.z.literal("message"),
				taskId: C.z.string(),
				payload: C.z.object({
					text: C.z.string(),
					images: C.z.array(C.z.string()).optional(),
					mode: C.z.string().optional(),
					providerProfile: C.z.string().optional(),
				}),
				timestamp: C.z.number(),
			}),
			C.z.object({
				type: C.z.literal("approve_ask"),
				taskId: C.z.string(),
				payload: C.z.object({ text: C.z.string().optional(), images: C.z.array(C.z.string()).optional() }),
				timestamp: C.z.number(),
			}),
			C.z.object({
				type: C.z.literal("deny_ask"),
				taskId: C.z.string(),
				payload: C.z.object({ text: C.z.string().optional(), images: C.z.array(C.z.string()).optional() }),
				timestamp: C.z.number(),
			}),
		])
		var uM =
				(((l = uM || {}).CONNECTED = "extension:connected"),
				(l.REGISTER = "extension:register"),
				(l.UNREGISTER = "extension:unregister"),
				(l.HEARTBEAT = "extension:heartbeat"),
				(l.EVENT = "extension:event"),
				(l.RELAYED_EVENT = "extension:relayed_event"),
				(l.COMMAND = "extension:command"),
				(l.RELAYED_COMMAND = "extension:relayed_command"),
				l),
			uq =
				(((u = uq || {}).JOIN = "task:join"),
				(u.LEAVE = "task:leave"),
				(u.EVENT = "task:event"),
				(u.RELAYED_EVENT = "task:relayed_event"),
				(u.COMMAND = "task:command"),
				(u.RELAYED_COMMAND = "task:relayed_command"),
				u)
		C.z.object({
			success: C.z.boolean(),
			data: C.z.object({
				dates: C.z.array(C.z.string()),
				tasks: C.z.array(C.z.number()),
				tokens: C.z.array(C.z.number()),
				costs: C.z.array(C.z.number()),
				totals: C.z.object({ tasks: C.z.number(), tokens: C.z.number(), cost: C.z.number() }),
			}),
			period: C.z.number(),
		})
		var uK = "roo-code-cookie-consent",
			uF = C.z.object({ answer: C.z.string(), mode: C.z.string().optional() })
		C.z.object({ question: C.z.string().optional(), suggest: C.z.array(uF).optional() }),
			[
				{ value: "google/gemini-2.5-flash-image", label: "Gemini 2.5 Flash Image", provider: "openrouter" },
				{
					value: "google/gemini-3-pro-image-preview",
					label: "Gemini 3 Pro Image Preview",
					provider: "openrouter",
				},
				{ value: "openai/gpt-5-image", label: "GPT-5 Image", provider: "openrouter" },
				{ value: "openai/gpt-5-image-mini", label: "GPT-5 Image Mini", provider: "openrouter" },
				{
					value: "black-forest-labs/flux.2-flex",
					label: "Black Forest Labs FLUX.2 Flex",
					provider: "openrouter",
				},
				{
					value: "black-forest-labs/flux.2-pro",
					label: "Black Forest Labs FLUX.2 Pro",
					provider: "openrouter",
				},
				{ value: "google/gemini-2.5-flash-image", label: "Gemini 2.5 Flash Image", provider: "roo" },
				{ value: "google/gemini-3-pro-image", label: "Gemini 3 Pro Image", provider: "roo" },
				{
					value: "bfl/flux-2-pro:free",
					label: "Black Forest Labs FLUX.2 Pro (Free)",
					provider: "roo",
					apiMethod: "images_api",
				},
			].map((e) => e.value)
		var uB =
				(((d = uB || {}).Connect = "Connect"),
				(d.Disconnect = "Disconnect"),
				(d.Ack = "Ack"),
				(d.TaskCommand = "TaskCommand"),
				(d.TaskEvent = "TaskEvent"),
				d),
			uG = (((c = uG || {}).Client = "client"), (c.Server = "server"), c),
			uV = C.z.object({ clientId: C.z.string(), pid: C.z.number(), ppid: C.z.number() }),
			uW =
				(((m = uW || {}).StartNewTask = "StartNewTask"),
				(m.CancelTask = "CancelTask"),
				(m.CloseTask = "CloseTask"),
				(m.ResumeTask = "ResumeTask"),
				(m.SendMessage = "SendMessage"),
				(m.GetCommands = "GetCommands"),
				(m.GetModes = "GetModes"),
				(m.GetModels = "GetModels"),
				(m.DeleteQueuedMessage = "DeleteQueuedMessage"),
				m),
			uJ = C.z.discriminatedUnion("commandName", [
				C.z.object({
					commandName: C.z.literal("StartNewTask"),
					data: C.z.object({
						configuration: ua,
						text: C.z.string(),
						images: C.z.array(C.z.string()).optional(),
						newTab: C.z.boolean().optional(),
					}),
				}),
				C.z.object({ commandName: C.z.literal("CancelTask") }),
				C.z.object({ commandName: C.z.literal("CloseTask") }),
				C.z.object({ commandName: C.z.literal("ResumeTask"), data: C.z.string() }),
				C.z.object({
					commandName: C.z.literal("SendMessage"),
					data: C.z.object({ text: C.z.string().optional(), images: C.z.array(C.z.string()).optional() }),
				}),
				C.z.object({ commandName: C.z.literal("GetCommands") }),
				C.z.object({ commandName: C.z.literal("GetModes") }),
				C.z.object({ commandName: C.z.literal("GetModels") }),
				C.z.object({ commandName: C.z.literal("DeleteQueuedMessage"), data: C.z.string() }),
			])
		C.z.discriminatedUnion("type", [
			C.z.object({ type: C.z.literal("Ack"), origin: C.z.literal("server"), data: uV }),
			C.z.object({
				type: C.z.literal("TaskCommand"),
				origin: C.z.literal("client"),
				clientId: C.z.string(),
				data: uJ,
			}),
			C.z.object({
				type: C.z.literal("TaskEvent"),
				origin: C.z.literal("server"),
				relayClientId: C.z.string().optional(),
				data: ux,
			}),
		]),
			C.z.discriminatedUnion("status", [
				C.z.object({
					executionId: C.z.string(),
					status: C.z.literal("started"),
					serverName: C.z.string(),
					toolName: C.z.string(),
				}),
				C.z.object({ executionId: C.z.string(), status: C.z.literal("output"), response: C.z.string() }),
				C.z.object({
					executionId: C.z.string(),
					status: C.z.literal("completed"),
					response: C.z.string().optional(),
				}),
				C.z.object({ executionId: C.z.string(), status: C.z.literal("error"), error: C.z.string().optional() }),
			])
		var uH = C.z.enum(["pending", "in_progress", "completed"])
		C.z.object({ id: C.z.string(), content: C.z.string(), status: uH })
		var uX = (((p = uX || {}).Empty = "empty"), (p.TooLong = "too_long"), (p.InvalidFormat = "invalid_format"), p)
		C.z.discriminatedUnion("status", [
			C.z.object({
				executionId: C.z.string(),
				status: C.z.literal("started"),
				pid: C.z.number().optional(),
				command: C.z.string(),
			}),
			C.z.object({ executionId: C.z.string(), status: C.z.literal("output"), output: C.z.string() }),
			C.z.object({ executionId: C.z.string(), status: C.z.literal("exited"), exitCode: C.z.number().optional() }),
			C.z.object({ executionId: C.z.string(), status: C.z.literal("fallback") }),
			C.z.object({ executionId: C.z.string(), status: C.z.literal("timeout") }),
		]),
			C.z.object({
				ts: C.z.number().optional(),
				previousCommitHash: C.z.string().optional(),
				commitHash: C.z.string(),
				mode: C.z.enum(["full", "checkpoint", "from-init", "to-current"]),
			}),
			C.z.object({ ts: C.z.number(), commitHash: C.z.string(), mode: C.z.enum(["preview", "restore"]) }),
			C.z.object({ item: uC, parameters: C.z.record(C.z.string(), C.z.any()) }),
			e.s(["CONSENT_COOKIE_NAME", () => uK], 10857)
		var uQ = e.i(60185)
		let uY = "cookieConsentChanged"
		function u0() {
			return "true" === j(uK)
		}
		function u1(e) {
			{
				let t = new CustomEvent(uY, { detail: { consented: e } })
				window.dispatchEvent(t)
			}
		}
		function u4(e) {
			let t = (t) => {
				e(t.detail.consented)
			}
			return window.addEventListener(uY, t), () => window.removeEventListener(uY, t)
		}
		function u6() {
			uQ.default.__loaded &&
				(uQ.default.opt_in_capturing(), uQ.default.set_config({ persistence: "localStorage+cookie" })),
				u1(!0)
		}
		function u2() {
			u1(!1)
		}
		e.s(
			[
				"handleConsentAccept",
				() => u6,
				"handleConsentReject",
				() => u2,
				"hasConsent",
				() => u0,
				"onConsentChange",
				() => u4,
			],
			59052,
		)
	},
	23656,
	(e) => {
		"use strict"
		let t,
			a,
			i,
			n,
			r,
			o,
			s,
			l,
			u,
			d,
			c,
			m,
			p,
			g,
			h,
			f,
			v,
			b,
			k,
			y,
			x,
			z,
			w,
			_,
			$,
			j,
			I,
			S,
			C,
			N,
			O,
			E,
			P,
			U,
			T,
			A,
			D,
			Z,
			R,
			L,
			M,
			q,
			K,
			F,
			B,
			G,
			V,
			W,
			J,
			H,
			X,
			Q,
			Y,
			ee,
			et,
			ea,
			ei,
			en,
			er,
			eo,
			es,
			el,
			eu
		var ed = e.i(8026),
			ec = e.i(10008),
			em = e.i(92235)
		let ep = (0, e.i(21387).default)("cookie", [
			["path", { d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5", key: "laymnq" }],
			["path", { d: "M8.5 8.5v.01", key: "ue8clq" }],
			["path", { d: "M16 15.5v.01", key: "14dtrp" }],
			["path", { d: "M12 12v.01", key: "u5ubse" }],
			["path", { d: "M11 17v.01", key: "1hyl5a" }],
			["path", { d: "M7 14v.01", key: "uct60s" }],
		])
		function eg(e, t) {
			let a = 0,
				i = e.length,
				n = !1
			if (!t) {
				if (e.startsWith("data:")) return null
				for (; a < e.length && 32 >= e.charCodeAt(a); ) a += 1
				for (; i > a + 1 && 32 >= e.charCodeAt(i - 1); ) i -= 1
				if (47 === e.charCodeAt(a) && 47 === e.charCodeAt(a + 1)) a += 2
				else {
					let t = e.indexOf(":/", a)
					if (-1 !== t) {
						let i = t - a,
							n = e.charCodeAt(a),
							r = e.charCodeAt(a + 1),
							o = e.charCodeAt(a + 2),
							s = e.charCodeAt(a + 3),
							l = e.charCodeAt(a + 4)
						if (5 === i && 104 === n && 116 === r && 116 === o && 112 === s && 115 === l);
						else if (4 === i && 104 === n && 116 === r && 116 === o && 112 === s);
						else if (3 === i && 119 === n && 115 === r && 115 === o);
						else if (2 === i && 119 === n && 115 === r);
						else
							for (let i = a; i < t; i += 1) {
								let t = 32 | e.charCodeAt(i)
								if (
									!((t >= 97 && t <= 122) || (t >= 48 && t <= 57) || 46 === t || 45 === t || 43 === t)
								)
									return null
							}
						for (a = t + 2; 47 === e.charCodeAt(a); ) a += 1
					}
				}
				let t = -1,
					r = -1,
					o = -1
				for (let s = a; s < i; s += 1) {
					let a = e.charCodeAt(s)
					if (35 === a || 47 === a || 63 === a) {
						i = s
						break
					}
					64 === a ? (t = s) : 93 === a ? (r = s) : 58 === a ? (o = s) : a >= 65 && a <= 90 && (n = !0)
				}
				if ((-1 !== t && t > a && t < i && (a = t + 1), 91 === e.charCodeAt(a)))
					return -1 !== r ? e.slice(a + 1, r).toLowerCase() : null
				;-1 !== o && o > a && o < i && (i = o)
			}
			for (; i > a + 1 && 46 === e.charCodeAt(i - 1); ) i -= 1
			let r = 0 !== a || i !== e.length ? e.slice(a, i) : e
			return n ? r.toLowerCase() : r
		}
		function eh(e) {
			return (e >= 97 && e <= 122) || (e >= 48 && e <= 57) || e > 127
		}
		function ef(e) {
			if (
				e.length > 255 ||
				0 === e.length ||
				(!eh(e.charCodeAt(0)) && 46 !== e.charCodeAt(0) && 95 !== e.charCodeAt(0))
			)
				return !1
			let t = -1,
				a = -1,
				i = e.length
			for (let n = 0; n < i; n += 1) {
				let i = e.charCodeAt(n)
				if (46 === i) {
					if (n - t > 64 || 46 === a || 45 === a || 95 === a) return !1
					t = n
				} else if (!(eh(i) || 45 === i || 95 === i)) return !1
				a = i
			}
			return i - t - 1 <= 63 && 45 !== a
		}
		function ev({
			allowIcannDomains: e = !0,
			allowPrivateDomains: t = !1,
			detectIp: a = !0,
			extractHostname: i = !0,
			mixedInputs: n = !0,
			validHosts: r = null,
			validateHostname: o = !0,
		}) {
			return {
				allowIcannDomains: e,
				allowPrivateDomains: t,
				detectIp: a,
				extractHostname: i,
				mixedInputs: n,
				validHosts: r,
				validateHostname: o,
			}
		}
		let eb = ev({}),
			ek =
				((a = [2, {}]),
				(i = [0, { city: (t = [1, {}]) }]),
				[
					0,
					{
						ck: [0, { www: t }],
						jp: [0, { kawasaki: i, kitakyushu: i, kobe: i, nagoya: i, sapporo: i, sendai: i, yokohama: i }],
						dev: [0, { hrsn: [0, { psl: [0, { wc: [0, { ignored: a, sub: [0, { ignored: a }] }] }] }] }],
					},
				]),
			ey =
				((r = [2, {}]),
				(o = [1, { com: (n = [1, {}]), edu: n, gov: n, net: n, org: n }]),
				(s = [1, { com: n, edu: n, gov: n, mil: n, net: n, org: n }]),
				(u = [2, { s: (l = [0, { "*": r }]) }]),
				(d = [0, { relay: r }]),
				(c = [2, { id: r }]),
				(m = [1, { gov: n }]),
				(p = [0, { "transfer-webapp": r }]),
				(g = [0, { notebook: r, studio: r }]),
				(h = [0, { labeling: r, notebook: r, studio: r }]),
				(f = [0, { notebook: r }]),
				(v = [0, { labeling: r, notebook: r, "notebook-fips": r, studio: r }]),
				(b = [0, { notebook: r, "notebook-fips": r, studio: r, "studio-fips": r }]),
				(k = [0, { "*": n }]),
				(y = [1, { co: r }]),
				(x = [0, { objects: r }]),
				(z = [2, { nodes: r }]),
				(w = [0, { my: l }]),
				(_ = [0, { s3: r, "s3-accesspoint": r, "s3-website": r }]),
				($ = [0, { s3: r, "s3-accesspoint": r }]),
				(j = [0, { direct: r }]),
				(I = [0, { "webview-assets": r }]),
				(S = [0, { vfs: r, "webview-assets": r }]),
				(C = [
					0,
					{
						"execute-api": r,
						"emrappui-prod": r,
						"emrnotebooks-prod": r,
						"emrstudio-prod": r,
						dualstack: _,
						s3: r,
						"s3-accesspoint": r,
						"s3-object-lambda": r,
						"s3-website": r,
						"aws-cloud9": I,
						cloud9: S,
					},
				]),
				(N = [
					0,
					{
						"execute-api": r,
						"emrappui-prod": r,
						"emrnotebooks-prod": r,
						"emrstudio-prod": r,
						dualstack: $,
						s3: r,
						"s3-accesspoint": r,
						"s3-object-lambda": r,
						"s3-website": r,
						"aws-cloud9": I,
						cloud9: S,
					},
				]),
				(O = [
					0,
					{
						"execute-api": r,
						"emrappui-prod": r,
						"emrnotebooks-prod": r,
						"emrstudio-prod": r,
						dualstack: _,
						s3: r,
						"s3-accesspoint": r,
						"s3-object-lambda": r,
						"s3-website": r,
						"analytics-gateway": r,
						"aws-cloud9": I,
						cloud9: S,
					},
				]),
				(E = [
					0,
					{
						"execute-api": r,
						"emrappui-prod": r,
						"emrnotebooks-prod": r,
						"emrstudio-prod": r,
						dualstack: _,
						s3: r,
						"s3-accesspoint": r,
						"s3-object-lambda": r,
						"s3-website": r,
					},
				]),
				(P = [0, { s3: r, "s3-accesspoint": r, "s3-accesspoint-fips": r, "s3-fips": r, "s3-website": r }]),
				(U = [
					0,
					{
						"execute-api": r,
						"emrappui-prod": r,
						"emrnotebooks-prod": r,
						"emrstudio-prod": r,
						dualstack: P,
						s3: r,
						"s3-accesspoint": r,
						"s3-accesspoint-fips": r,
						"s3-fips": r,
						"s3-object-lambda": r,
						"s3-website": r,
						"aws-cloud9": I,
						cloud9: S,
					},
				]),
				(T = [
					0,
					{
						"execute-api": r,
						"emrappui-prod": r,
						"emrnotebooks-prod": r,
						"emrstudio-prod": r,
						dualstack: P,
						s3: r,
						"s3-accesspoint": r,
						"s3-accesspoint-fips": r,
						"s3-deprecated": r,
						"s3-fips": r,
						"s3-object-lambda": r,
						"s3-website": r,
						"analytics-gateway": r,
						"aws-cloud9": I,
						cloud9: S,
					},
				]),
				(A = [
					0,
					{
						"execute-api": r,
						"emrappui-prod": r,
						"emrnotebooks-prod": r,
						"emrstudio-prod": r,
						dualstack: [0, { s3: r, "s3-accesspoint": r, "s3-accesspoint-fips": r, "s3-fips": r }],
						s3: r,
						"s3-accesspoint": r,
						"s3-accesspoint-fips": r,
						"s3-fips": r,
						"s3-object-lambda": r,
						"s3-website": r,
					},
				]),
				(D = [0, { auth: r }]),
				(Z = [0, { auth: r, "auth-fips": r }]),
				(R = [0, { "auth-fips": r }]),
				(L = [0, { apps: r }]),
				(M = [0, { paas: r }]),
				(q = [2, { eu: r }]),
				(K = [0, { app: r }]),
				(F = [0, { site: r }]),
				(B = [1, { com: n, edu: n, net: n, org: n }]),
				(G = [0, { j: r }]),
				(V = [0, { dyn: r }]),
				(W = [1, { co: n, com: n, edu: n, gov: n, net: n, org: n }]),
				(J = [0, { p: r }]),
				(H = [0, { user: r }]),
				(X = [0, { shop: r }]),
				(Q = [0, { cdn: r }]),
				(Y = [0, { cust: r, reservd: r }]),
				(ee = [0, { cust: r }]),
				(et = [0, { s3: r }]),
				(ea = [1, { biz: n, com: n, edu: n, gov: n, info: n, net: n, org: n }]),
				(ei = [0, { ipfs: r }]),
				(en = [1, { framer: r }]),
				(er = [0, { forgot: r }]),
				(eo = [1, { gs: n }]),
				(es = [0, { nes: n }]),
				(el = [1, { k12: n, cc: n, lib: n }]),
				(eu = [1, { cc: n, lib: n }]),
				[
					0,
					{
						ac: [1, { com: n, edu: n, gov: n, mil: n, net: n, org: n, drr: r, feedback: r, forms: r }],
						ad: n,
						ae: [1, { ac: n, co: n, gov: n, mil: n, net: n, org: n, sch: n }],
						aero: [
							1,
							{
								airline: n,
								airport: n,
								"accident-investigation": n,
								"accident-prevention": n,
								aerobatic: n,
								aeroclub: n,
								aerodrome: n,
								agents: n,
								"air-surveillance": n,
								"air-traffic-control": n,
								aircraft: n,
								airtraffic: n,
								ambulance: n,
								association: n,
								author: n,
								ballooning: n,
								broker: n,
								caa: n,
								cargo: n,
								catering: n,
								certification: n,
								championship: n,
								charter: n,
								civilaviation: n,
								club: n,
								conference: n,
								consultant: n,
								consulting: n,
								control: n,
								council: n,
								crew: n,
								design: n,
								dgca: n,
								educator: n,
								emergency: n,
								engine: n,
								engineer: n,
								entertainment: n,
								equipment: n,
								exchange: n,
								express: n,
								federation: n,
								flight: n,
								freight: n,
								fuel: n,
								gliding: n,
								government: n,
								groundhandling: n,
								group: n,
								hanggliding: n,
								homebuilt: n,
								insurance: n,
								journal: n,
								journalist: n,
								leasing: n,
								logistics: n,
								magazine: n,
								maintenance: n,
								marketplace: n,
								media: n,
								microlight: n,
								modelling: n,
								navigation: n,
								parachuting: n,
								paragliding: n,
								"passenger-association": n,
								pilot: n,
								press: n,
								production: n,
								recreation: n,
								repbody: n,
								res: n,
								research: n,
								rotorcraft: n,
								safety: n,
								scientist: n,
								services: n,
								show: n,
								skydiving: n,
								software: n,
								student: n,
								taxi: n,
								trader: n,
								trading: n,
								trainer: n,
								union: n,
								workinggroup: n,
								works: n,
							},
						],
						af: o,
						ag: [1, { co: n, com: n, net: n, nom: n, org: n, obj: r }],
						ai: [1, { com: n, net: n, off: n, org: n, uwu: r, framer: r }],
						al: s,
						am: [1, { co: n, com: n, commune: n, net: n, org: n, radio: r }],
						ao: [1, { co: n, ed: n, edu: n, gov: n, gv: n, it: n, og: n, org: n, pb: n }],
						aq: n,
						ar: [
							1,
							{
								bet: n,
								com: n,
								coop: n,
								edu: n,
								gob: n,
								gov: n,
								int: n,
								mil: n,
								musica: n,
								mutual: n,
								net: n,
								org: n,
								seg: n,
								senasa: n,
								tur: n,
							},
						],
						arpa: [1, { e164: n, home: n, "in-addr": n, ip6: n, iris: n, uri: n, urn: n }],
						as: m,
						asia: [1, { cloudns: r, daemon: r, dix: r }],
						at: [
							1,
							{
								ac: [1, { sth: n }],
								co: n,
								gv: n,
								or: n,
								funkfeuer: [0, { wien: r }],
								futurecms: [0, { "*": r, ex: l, in: l }],
								futurehosting: r,
								futuremailing: r,
								ortsinfo: [0, { ex: l, kunden: l }],
								biz: r,
								info: r,
								"123webseite": r,
								priv: r,
								myspreadshop: r,
								"12hp": r,
								"2ix": r,
								"4lima": r,
								"lima-city": r,
							},
						],
						au: [
							1,
							{
								asn: n,
								com: [1, { cloudlets: [0, { mel: r }], myspreadshop: r }],
								edu: [
									1,
									{
										act: n,
										catholic: n,
										nsw: [1, { schools: n }],
										nt: n,
										qld: n,
										sa: n,
										tas: n,
										vic: n,
										wa: n,
									},
								],
								gov: [1, { qld: n, sa: n, tas: n, vic: n, wa: n }],
								id: n,
								net: n,
								org: n,
								conf: n,
								oz: n,
								act: n,
								nsw: n,
								nt: n,
								qld: n,
								sa: n,
								tas: n,
								vic: n,
								wa: n,
							},
						],
						aw: [1, { com: n }],
						ax: n,
						az: [
							1,
							{
								biz: n,
								co: n,
								com: n,
								edu: n,
								gov: n,
								info: n,
								int: n,
								mil: n,
								name: n,
								net: n,
								org: n,
								pp: n,
								pro: n,
							},
						],
						ba: [1, { com: n, edu: n, gov: n, mil: n, net: n, org: n, rs: r }],
						bb: [1, { biz: n, co: n, com: n, edu: n, gov: n, info: n, net: n, org: n, store: n, tv: n }],
						bd: k,
						be: [
							1,
							{
								ac: n,
								cloudns: r,
								webhosting: r,
								interhostsolutions: [0, { cloud: r }],
								kuleuven: [0, { ezproxy: r }],
								"123website": r,
								myspreadshop: r,
								transurl: l,
							},
						],
						bf: m,
						bg: [
							1,
							{
								0: n,
								1: n,
								2: n,
								3: n,
								4: n,
								5: n,
								6: n,
								7: n,
								8: n,
								9: n,
								a: n,
								b: n,
								c: n,
								d: n,
								e: n,
								f: n,
								g: n,
								h: n,
								i: n,
								j: n,
								k: n,
								l: n,
								m: n,
								n: n,
								o: n,
								p: n,
								q: n,
								r: n,
								s: n,
								t: n,
								u: n,
								v: n,
								w: n,
								x: n,
								y: n,
								z: n,
								barsy: r,
							},
						],
						bh: o,
						bi: [1, { co: n, com: n, edu: n, or: n, org: n }],
						biz: [
							1,
							{
								activetrail: r,
								"cloud-ip": r,
								cloudns: r,
								jozi: r,
								dyndns: r,
								"for-better": r,
								"for-more": r,
								"for-some": r,
								"for-the": r,
								selfip: r,
								webhop: r,
								orx: r,
								mmafan: r,
								myftp: r,
								"no-ip": r,
								dscloud: r,
							},
						],
						bj: [
							1,
							{
								africa: n,
								agro: n,
								architectes: n,
								assur: n,
								avocats: n,
								co: n,
								com: n,
								eco: n,
								econo: n,
								edu: n,
								info: n,
								loisirs: n,
								money: n,
								net: n,
								org: n,
								ote: n,
								restaurant: n,
								resto: n,
								tourism: n,
								univ: n,
							},
						],
						bm: o,
						bn: [1, { com: n, edu: n, gov: n, net: n, org: n, co: r }],
						bo: [
							1,
							{
								com: n,
								edu: n,
								gob: n,
								int: n,
								mil: n,
								net: n,
								org: n,
								tv: n,
								web: n,
								academia: n,
								agro: n,
								arte: n,
								blog: n,
								bolivia: n,
								ciencia: n,
								cooperativa: n,
								democracia: n,
								deporte: n,
								ecologia: n,
								economia: n,
								empresa: n,
								indigena: n,
								industria: n,
								info: n,
								medicina: n,
								movimiento: n,
								musica: n,
								natural: n,
								nombre: n,
								noticias: n,
								patria: n,
								plurinacional: n,
								politica: n,
								profesional: n,
								pueblo: n,
								revista: n,
								salud: n,
								tecnologia: n,
								tksat: n,
								transporte: n,
								wiki: n,
							},
						],
						br: [
							1,
							{
								"9guacu": n,
								abc: n,
								adm: n,
								adv: n,
								agr: n,
								aju: n,
								am: n,
								anani: n,
								aparecida: n,
								app: n,
								arq: n,
								art: n,
								ato: n,
								b: n,
								barueri: n,
								belem: n,
								bet: n,
								bhz: n,
								bib: n,
								bio: n,
								blog: n,
								bmd: n,
								boavista: n,
								bsb: n,
								campinagrande: n,
								campinas: n,
								caxias: n,
								cim: n,
								cng: n,
								cnt: n,
								com: [1, { simplesite: r }],
								contagem: n,
								coop: n,
								coz: n,
								cri: n,
								cuiaba: n,
								curitiba: n,
								def: n,
								des: n,
								det: n,
								dev: n,
								ecn: n,
								eco: n,
								edu: n,
								emp: n,
								enf: n,
								eng: n,
								esp: n,
								etc: n,
								eti: n,
								far: n,
								feira: n,
								flog: n,
								floripa: n,
								fm: n,
								fnd: n,
								fortal: n,
								fot: n,
								foz: n,
								fst: n,
								g12: n,
								geo: n,
								ggf: n,
								goiania: n,
								gov: [
									1,
									{
										ac: n,
										al: n,
										am: n,
										ap: n,
										ba: n,
										ce: n,
										df: n,
										es: n,
										go: n,
										ma: n,
										mg: n,
										ms: n,
										mt: n,
										pa: n,
										pb: n,
										pe: n,
										pi: n,
										pr: n,
										rj: n,
										rn: n,
										ro: n,
										rr: n,
										rs: n,
										sc: n,
										se: n,
										sp: n,
										to: n,
									},
								],
								gru: n,
								imb: n,
								ind: n,
								inf: n,
								jab: n,
								jampa: n,
								jdf: n,
								joinville: n,
								jor: n,
								jus: n,
								leg: [
									1,
									{
										ac: r,
										al: r,
										am: r,
										ap: r,
										ba: r,
										ce: r,
										df: r,
										es: r,
										go: r,
										ma: r,
										mg: r,
										ms: r,
										mt: r,
										pa: r,
										pb: r,
										pe: r,
										pi: r,
										pr: r,
										rj: r,
										rn: r,
										ro: r,
										rr: r,
										rs: r,
										sc: r,
										se: r,
										sp: r,
										to: r,
									},
								],
								leilao: n,
								lel: n,
								log: n,
								londrina: n,
								macapa: n,
								maceio: n,
								manaus: n,
								maringa: n,
								mat: n,
								med: n,
								mil: n,
								morena: n,
								mp: n,
								mus: n,
								natal: n,
								net: n,
								niteroi: n,
								nom: k,
								not: n,
								ntr: n,
								odo: n,
								ong: n,
								org: n,
								osasco: n,
								palmas: n,
								poa: n,
								ppg: n,
								pro: n,
								psc: n,
								psi: n,
								pvh: n,
								qsl: n,
								radio: n,
								rec: n,
								recife: n,
								rep: n,
								ribeirao: n,
								rio: n,
								riobranco: n,
								riopreto: n,
								salvador: n,
								sampa: n,
								santamaria: n,
								santoandre: n,
								saobernardo: n,
								saogonca: n,
								seg: n,
								sjc: n,
								slg: n,
								slz: n,
								sorocaba: n,
								srv: n,
								taxi: n,
								tc: n,
								tec: n,
								teo: n,
								the: n,
								tmp: n,
								trd: n,
								tur: n,
								tv: n,
								udi: n,
								vet: n,
								vix: n,
								vlog: n,
								wiki: n,
								zlg: n,
							},
						],
						bs: [1, { com: n, edu: n, gov: n, net: n, org: n, we: r }],
						bt: o,
						bv: n,
						bw: [1, { ac: n, co: n, gov: n, net: n, org: n }],
						by: [1, { gov: n, mil: n, com: n, of: n, mediatech: r }],
						bz: [1, { co: n, com: n, edu: n, gov: n, net: n, org: n, za: r, mydns: r, gsj: r }],
						ca: [
							1,
							{
								ab: n,
								bc: n,
								mb: n,
								nb: n,
								nf: n,
								nl: n,
								ns: n,
								nt: n,
								nu: n,
								on: n,
								pe: n,
								qc: n,
								sk: n,
								yk: n,
								gc: n,
								barsy: r,
								awdev: l,
								co: r,
								"no-ip": r,
								myspreadshop: r,
								box: r,
							},
						],
						cat: n,
						cc: [
							1,
							{
								cleverapps: r,
								cloudns: r,
								ftpaccess: r,
								"game-server": r,
								myphotos: r,
								scrapping: r,
								twmail: r,
								csx: r,
								fantasyleague: r,
								spawn: [0, { instances: r }],
							},
						],
						cd: m,
						cf: n,
						cg: n,
						ch: [
							1,
							{
								square7: r,
								cloudns: r,
								cloudscale: [0, { cust: r, lpg: x, rma: x }],
								flow: [0, { ae: [0, { alp1: r }], appengine: r }],
								"linkyard-cloud": r,
								gotdns: r,
								dnsking: r,
								"123website": r,
								myspreadshop: r,
								firenet: [0, { "*": r, svc: l }],
								"12hp": r,
								"2ix": r,
								"4lima": r,
								"lima-city": r,
							},
						],
						ci: [
							1,
							{
								ac: n,
								"xn--aroport-bya": n,
								aéroport: n,
								asso: n,
								co: n,
								com: n,
								ed: n,
								edu: n,
								go: n,
								gouv: n,
								int: n,
								net: n,
								or: n,
								org: n,
							},
						],
						ck: k,
						cl: [1, { co: n, gob: n, gov: n, mil: n, cloudns: r }],
						cm: [1, { co: n, com: n, gov: n, net: n }],
						cn: [
							1,
							{
								ac: n,
								com: [
									1,
									{
										amazonaws: [
											0,
											{
												"cn-north-1": [
													0,
													{
														"execute-api": r,
														"emrappui-prod": r,
														"emrnotebooks-prod": r,
														"emrstudio-prod": r,
														dualstack: _,
														s3: r,
														"s3-accesspoint": r,
														"s3-deprecated": r,
														"s3-object-lambda": r,
														"s3-website": r,
													},
												],
												"cn-northwest-1": [
													0,
													{
														"execute-api": r,
														"emrappui-prod": r,
														"emrnotebooks-prod": r,
														"emrstudio-prod": r,
														dualstack: $,
														s3: r,
														"s3-accesspoint": r,
														"s3-object-lambda": r,
														"s3-website": r,
													},
												],
												compute: l,
												airflow: [0, { "cn-north-1": l, "cn-northwest-1": l }],
												eb: [0, { "cn-north-1": r, "cn-northwest-1": r }],
												elb: l,
											},
										],
										sagemaker: [0, { "cn-north-1": g, "cn-northwest-1": g }],
									},
								],
								edu: n,
								gov: n,
								mil: n,
								net: n,
								org: n,
								"xn--55qx5d": n,
								公司: n,
								"xn--od0alg": n,
								網絡: n,
								"xn--io0a7i": n,
								网络: n,
								ah: n,
								bj: n,
								cq: n,
								fj: n,
								gd: n,
								gs: n,
								gx: n,
								gz: n,
								ha: n,
								hb: n,
								he: n,
								hi: n,
								hk: n,
								hl: n,
								hn: n,
								jl: n,
								js: n,
								jx: n,
								ln: n,
								mo: n,
								nm: n,
								nx: n,
								qh: n,
								sc: n,
								sd: n,
								sh: [1, { as: r }],
								sn: n,
								sx: n,
								tj: n,
								tw: n,
								xj: n,
								xz: n,
								yn: n,
								zj: n,
								"canva-apps": r,
								canvasite: w,
								myqnapcloud: r,
								quickconnect: j,
							},
						],
						co: [
							1,
							{
								com: n,
								edu: n,
								gov: n,
								mil: n,
								net: n,
								nom: n,
								org: n,
								carrd: r,
								crd: r,
								otap: l,
								leadpages: r,
								lpages: r,
								mypi: r,
								xmit: l,
								firewalledreplit: c,
								repl: c,
								supabase: r,
							},
						],
						com: [
							1,
							{
								a2hosted: r,
								cpserver: r,
								adobeaemcloud: [2, { dev: l }],
								africa: r,
								airkitapps: r,
								"airkitapps-au": r,
								aivencloud: r,
								alibabacloudcs: r,
								kasserver: r,
								amazonaws: [
									0,
									{
										"af-south-1": C,
										"ap-east-1": N,
										"ap-northeast-1": O,
										"ap-northeast-2": O,
										"ap-northeast-3": C,
										"ap-south-1": O,
										"ap-south-2": E,
										"ap-southeast-1": O,
										"ap-southeast-2": O,
										"ap-southeast-3": E,
										"ap-southeast-4": E,
										"ap-southeast-5": [
											0,
											{
												"execute-api": r,
												dualstack: _,
												s3: r,
												"s3-accesspoint": r,
												"s3-deprecated": r,
												"s3-object-lambda": r,
												"s3-website": r,
											},
										],
										"ca-central-1": U,
										"ca-west-1": [
											0,
											{
												"execute-api": r,
												"emrappui-prod": r,
												"emrnotebooks-prod": r,
												"emrstudio-prod": r,
												dualstack: P,
												s3: r,
												"s3-accesspoint": r,
												"s3-accesspoint-fips": r,
												"s3-fips": r,
												"s3-object-lambda": r,
												"s3-website": r,
											},
										],
										"eu-central-1": O,
										"eu-central-2": E,
										"eu-north-1": N,
										"eu-south-1": C,
										"eu-south-2": E,
										"eu-west-1": [
											0,
											{
												"execute-api": r,
												"emrappui-prod": r,
												"emrnotebooks-prod": r,
												"emrstudio-prod": r,
												dualstack: _,
												s3: r,
												"s3-accesspoint": r,
												"s3-deprecated": r,
												"s3-object-lambda": r,
												"s3-website": r,
												"analytics-gateway": r,
												"aws-cloud9": I,
												cloud9: S,
											},
										],
										"eu-west-2": N,
										"eu-west-3": C,
										"il-central-1": [
											0,
											{
												"execute-api": r,
												"emrappui-prod": r,
												"emrnotebooks-prod": r,
												"emrstudio-prod": r,
												dualstack: _,
												s3: r,
												"s3-accesspoint": r,
												"s3-object-lambda": r,
												"s3-website": r,
												"aws-cloud9": I,
												cloud9: [0, { vfs: r }],
											},
										],
										"me-central-1": E,
										"me-south-1": N,
										"sa-east-1": C,
										"us-east-1": [
											2,
											{
												"execute-api": r,
												"emrappui-prod": r,
												"emrnotebooks-prod": r,
												"emrstudio-prod": r,
												dualstack: P,
												s3: r,
												"s3-accesspoint": r,
												"s3-accesspoint-fips": r,
												"s3-deprecated": r,
												"s3-fips": r,
												"s3-object-lambda": r,
												"s3-website": r,
												"analytics-gateway": r,
												"aws-cloud9": I,
												cloud9: S,
											},
										],
										"us-east-2": T,
										"us-gov-east-1": A,
										"us-gov-west-1": A,
										"us-west-1": U,
										"us-west-2": T,
										compute: l,
										"compute-1": l,
										airflow: [
											0,
											{
												"af-south-1": l,
												"ap-east-1": l,
												"ap-northeast-1": l,
												"ap-northeast-2": l,
												"ap-northeast-3": l,
												"ap-south-1": l,
												"ap-south-2": l,
												"ap-southeast-1": l,
												"ap-southeast-2": l,
												"ap-southeast-3": l,
												"ap-southeast-4": l,
												"ca-central-1": l,
												"ca-west-1": l,
												"eu-central-1": l,
												"eu-central-2": l,
												"eu-north-1": l,
												"eu-south-1": l,
												"eu-south-2": l,
												"eu-west-1": l,
												"eu-west-2": l,
												"eu-west-3": l,
												"il-central-1": l,
												"me-central-1": l,
												"me-south-1": l,
												"sa-east-1": l,
												"us-east-1": l,
												"us-east-2": l,
												"us-west-1": l,
												"us-west-2": l,
											},
										],
										s3: r,
										"s3-1": r,
										"s3-ap-east-1": r,
										"s3-ap-northeast-1": r,
										"s3-ap-northeast-2": r,
										"s3-ap-northeast-3": r,
										"s3-ap-south-1": r,
										"s3-ap-southeast-1": r,
										"s3-ap-southeast-2": r,
										"s3-ca-central-1": r,
										"s3-eu-central-1": r,
										"s3-eu-north-1": r,
										"s3-eu-west-1": r,
										"s3-eu-west-2": r,
										"s3-eu-west-3": r,
										"s3-external-1": r,
										"s3-fips-us-gov-east-1": r,
										"s3-fips-us-gov-west-1": r,
										"s3-global": [0, { accesspoint: [0, { mrap: r }] }],
										"s3-me-south-1": r,
										"s3-sa-east-1": r,
										"s3-us-east-2": r,
										"s3-us-gov-east-1": r,
										"s3-us-gov-west-1": r,
										"s3-us-west-1": r,
										"s3-us-west-2": r,
										"s3-website-ap-northeast-1": r,
										"s3-website-ap-southeast-1": r,
										"s3-website-ap-southeast-2": r,
										"s3-website-eu-west-1": r,
										"s3-website-sa-east-1": r,
										"s3-website-us-east-1": r,
										"s3-website-us-gov-west-1": r,
										"s3-website-us-west-1": r,
										"s3-website-us-west-2": r,
										elb: l,
									},
								],
								amazoncognito: [
									0,
									{
										"af-south-1": D,
										"ap-east-1": D,
										"ap-northeast-1": D,
										"ap-northeast-2": D,
										"ap-northeast-3": D,
										"ap-south-1": D,
										"ap-south-2": D,
										"ap-southeast-1": D,
										"ap-southeast-2": D,
										"ap-southeast-3": D,
										"ap-southeast-4": D,
										"ap-southeast-5": D,
										"ca-central-1": D,
										"ca-west-1": D,
										"eu-central-1": D,
										"eu-central-2": D,
										"eu-north-1": D,
										"eu-south-1": D,
										"eu-south-2": D,
										"eu-west-1": D,
										"eu-west-2": D,
										"eu-west-3": D,
										"il-central-1": D,
										"me-central-1": D,
										"me-south-1": D,
										"sa-east-1": D,
										"us-east-1": Z,
										"us-east-2": Z,
										"us-gov-east-1": R,
										"us-gov-west-1": R,
										"us-west-1": Z,
										"us-west-2": Z,
									},
								],
								amplifyapp: r,
								awsapprunner: l,
								awsapps: r,
								elasticbeanstalk: [
									2,
									{
										"af-south-1": r,
										"ap-east-1": r,
										"ap-northeast-1": r,
										"ap-northeast-2": r,
										"ap-northeast-3": r,
										"ap-south-1": r,
										"ap-southeast-1": r,
										"ap-southeast-2": r,
										"ap-southeast-3": r,
										"ca-central-1": r,
										"eu-central-1": r,
										"eu-north-1": r,
										"eu-south-1": r,
										"eu-west-1": r,
										"eu-west-2": r,
										"eu-west-3": r,
										"il-central-1": r,
										"me-south-1": r,
										"sa-east-1": r,
										"us-east-1": r,
										"us-east-2": r,
										"us-gov-east-1": r,
										"us-gov-west-1": r,
										"us-west-1": r,
										"us-west-2": r,
									},
								],
								awsglobalaccelerator: r,
								siiites: r,
								appspacehosted: r,
								appspaceusercontent: r,
								"on-aptible": r,
								myasustor: r,
								"balena-devices": r,
								boutir: r,
								bplaced: r,
								cafjs: r,
								"canva-apps": r,
								"cdn77-storage": r,
								br: r,
								cn: r,
								de: r,
								eu: r,
								jpn: r,
								mex: r,
								ru: r,
								sa: r,
								uk: r,
								us: r,
								za: r,
								"clever-cloud": [0, { services: l }],
								dnsabr: r,
								"ip-ddns": r,
								jdevcloud: r,
								wpdevcloud: r,
								"cf-ipfs": r,
								"cloudflare-ipfs": r,
								trycloudflare: r,
								co: r,
								devinapps: l,
								builtwithdark: r,
								datadetect: [0, { demo: r, instance: r }],
								dattolocal: r,
								dattorelay: r,
								dattoweb: r,
								mydatto: r,
								digitaloceanspaces: l,
								discordsays: r,
								discordsez: r,
								drayddns: r,
								dreamhosters: r,
								durumis: r,
								mydrobo: r,
								blogdns: r,
								cechire: r,
								dnsalias: r,
								dnsdojo: r,
								doesntexist: r,
								dontexist: r,
								doomdns: r,
								"dyn-o-saur": r,
								dynalias: r,
								"dyndns-at-home": r,
								"dyndns-at-work": r,
								"dyndns-blog": r,
								"dyndns-free": r,
								"dyndns-home": r,
								"dyndns-ip": r,
								"dyndns-mail": r,
								"dyndns-office": r,
								"dyndns-pics": r,
								"dyndns-remote": r,
								"dyndns-server": r,
								"dyndns-web": r,
								"dyndns-wiki": r,
								"dyndns-work": r,
								"est-a-la-maison": r,
								"est-a-la-masion": r,
								"est-le-patron": r,
								"est-mon-blogueur": r,
								"from-ak": r,
								"from-al": r,
								"from-ar": r,
								"from-ca": r,
								"from-ct": r,
								"from-dc": r,
								"from-de": r,
								"from-fl": r,
								"from-ga": r,
								"from-hi": r,
								"from-ia": r,
								"from-id": r,
								"from-il": r,
								"from-in": r,
								"from-ks": r,
								"from-ky": r,
								"from-ma": r,
								"from-md": r,
								"from-mi": r,
								"from-mn": r,
								"from-mo": r,
								"from-ms": r,
								"from-mt": r,
								"from-nc": r,
								"from-nd": r,
								"from-ne": r,
								"from-nh": r,
								"from-nj": r,
								"from-nm": r,
								"from-nv": r,
								"from-oh": r,
								"from-ok": r,
								"from-or": r,
								"from-pa": r,
								"from-pr": r,
								"from-ri": r,
								"from-sc": r,
								"from-sd": r,
								"from-tn": r,
								"from-tx": r,
								"from-ut": r,
								"from-va": r,
								"from-vt": r,
								"from-wa": r,
								"from-wi": r,
								"from-wv": r,
								"from-wy": r,
								getmyip: r,
								gotdns: r,
								"hobby-site": r,
								homelinux: r,
								homeunix: r,
								iamallama: r,
								"is-a-anarchist": r,
								"is-a-blogger": r,
								"is-a-bookkeeper": r,
								"is-a-bulls-fan": r,
								"is-a-caterer": r,
								"is-a-chef": r,
								"is-a-conservative": r,
								"is-a-cpa": r,
								"is-a-cubicle-slave": r,
								"is-a-democrat": r,
								"is-a-designer": r,
								"is-a-doctor": r,
								"is-a-financialadvisor": r,
								"is-a-geek": r,
								"is-a-green": r,
								"is-a-guru": r,
								"is-a-hard-worker": r,
								"is-a-hunter": r,
								"is-a-landscaper": r,
								"is-a-lawyer": r,
								"is-a-liberal": r,
								"is-a-libertarian": r,
								"is-a-llama": r,
								"is-a-musician": r,
								"is-a-nascarfan": r,
								"is-a-nurse": r,
								"is-a-painter": r,
								"is-a-personaltrainer": r,
								"is-a-photographer": r,
								"is-a-player": r,
								"is-a-republican": r,
								"is-a-rockstar": r,
								"is-a-socialist": r,
								"is-a-student": r,
								"is-a-teacher": r,
								"is-a-techie": r,
								"is-a-therapist": r,
								"is-an-accountant": r,
								"is-an-actor": r,
								"is-an-actress": r,
								"is-an-anarchist": r,
								"is-an-artist": r,
								"is-an-engineer": r,
								"is-an-entertainer": r,
								"is-certified": r,
								"is-gone": r,
								"is-into-anime": r,
								"is-into-cars": r,
								"is-into-cartoons": r,
								"is-into-games": r,
								"is-leet": r,
								"is-not-certified": r,
								"is-slick": r,
								"is-uberleet": r,
								"is-with-theband": r,
								"isa-geek": r,
								"isa-hockeynut": r,
								issmarterthanyou: r,
								"likes-pie": r,
								likescandy: r,
								"neat-url": r,
								"saves-the-whales": r,
								selfip: r,
								"sells-for-less": r,
								"sells-for-u": r,
								servebbs: r,
								"simple-url": r,
								"space-to-rent": r,
								"teaches-yoga": r,
								writesthisblog: r,
								ddnsfree: r,
								ddnsgeek: r,
								giize: r,
								gleeze: r,
								kozow: r,
								loseyourip: r,
								ooguy: r,
								theworkpc: r,
								mytuleap: r,
								"tuleap-partners": r,
								encoreapi: r,
								evennode: [
									0,
									{
										"eu-1": r,
										"eu-2": r,
										"eu-3": r,
										"eu-4": r,
										"us-1": r,
										"us-2": r,
										"us-3": r,
										"us-4": r,
									},
								],
								onfabrica: r,
								"fastly-edge": r,
								"fastly-terrarium": r,
								"fastvps-server": r,
								mydobiss: r,
								firebaseapp: r,
								fldrv: r,
								forgeblocks: r,
								framercanvas: r,
								"freebox-os": r,
								freeboxos: r,
								freemyip: r,
								aliases121: r,
								gentapps: r,
								gentlentapis: r,
								githubusercontent: r,
								"0emm": l,
								appspot: [2, { r: l }],
								blogspot: r,
								codespot: r,
								googleapis: r,
								googlecode: r,
								pagespeedmobilizer: r,
								withgoogle: r,
								withyoutube: r,
								grayjayleagues: r,
								hatenablog: r,
								hatenadiary: r,
								herokuapp: r,
								gr: r,
								smushcdn: r,
								wphostedmail: r,
								wpmucdn: r,
								pixolino: r,
								"apps-1and1": r,
								"live-website": r,
								dopaas: r,
								"hosted-by-previder": M,
								hosteur: [0, { "rag-cloud": r, "rag-cloud-ch": r }],
								"ik-server": [0, { jcloud: r, "jcloud-ver-jpc": r }],
								jelastic: [0, { demo: r }],
								massivegrid: M,
								wafaicloud: [0, { jed: r, ryd: r }],
								webadorsite: r,
								joyent: [0, { cns: l }],
								lpusercontent: r,
								linode: [0, { members: r, nodebalancer: l }],
								linodeobjects: l,
								linodeusercontent: [0, { ip: r }],
								localtonet: r,
								lovableproject: r,
								barsycenter: r,
								barsyonline: r,
								modelscape: r,
								mwcloudnonprod: r,
								polyspace: r,
								mazeplay: r,
								miniserver: r,
								atmeta: r,
								fbsbx: L,
								meteorapp: q,
								routingthecloud: r,
								mydbserver: r,
								hostedpi: r,
								"mythic-beasts": [
									0,
									{
										caracal: r,
										customer: r,
										fentiger: r,
										lynx: r,
										ocelot: r,
										oncilla: r,
										onza: r,
										sphinx: r,
										vs: r,
										x: r,
										yali: r,
									},
								],
								nospamproxy: [0, { cloud: [2, { o365: r }] }],
								"4u": r,
								nfshost: r,
								"3utilities": r,
								blogsyte: r,
								ciscofreak: r,
								damnserver: r,
								ddnsking: r,
								ditchyourip: r,
								dnsiskinky: r,
								dynns: r,
								geekgalaxy: r,
								"health-carereform": r,
								homesecuritymac: r,
								homesecuritypc: r,
								myactivedirectory: r,
								mysecuritycamera: r,
								myvnc: r,
								"net-freaks": r,
								onthewifi: r,
								point2this: r,
								quicksytes: r,
								securitytactics: r,
								servebeer: r,
								servecounterstrike: r,
								serveexchange: r,
								serveftp: r,
								servegame: r,
								servehalflife: r,
								servehttp: r,
								servehumour: r,
								serveirc: r,
								servemp3: r,
								servep2p: r,
								servepics: r,
								servequake: r,
								servesarcasm: r,
								stufftoread: r,
								unusualperson: r,
								workisboring: r,
								myiphost: r,
								observableusercontent: [0, { static: r }],
								simplesite: r,
								orsites: r,
								operaunite: r,
								"customer-oci": [0, { "*": r, oci: l, ocp: l, ocs: l }],
								oraclecloudapps: l,
								oraclegovcloudapps: l,
								"authgear-staging": r,
								authgearapps: r,
								skygearapp: r,
								outsystemscloud: r,
								ownprovider: r,
								pgfog: r,
								pagexl: r,
								gotpantheon: r,
								paywhirl: l,
								upsunapp: r,
								"postman-echo": r,
								prgmr: [0, { xen: r }],
								pythonanywhere: q,
								qa2: r,
								"alpha-myqnapcloud": r,
								"dev-myqnapcloud": r,
								mycloudnas: r,
								mynascloud: r,
								myqnapcloud: r,
								qualifioapp: r,
								ladesk: r,
								qbuser: r,
								quipelements: l,
								rackmaze: r,
								"readthedocs-hosted": r,
								rhcloud: r,
								onrender: r,
								render: K,
								"subsc-pay": r,
								"180r": r,
								dojin: r,
								sakuratan: r,
								sakuraweb: r,
								x0: r,
								code: [0, { builder: l, "dev-builder": l, "stg-builder": l }],
								salesforce: [
									0,
									{ platform: [0, { "code-builder-stg": [0, { test: [0, { "001": l }] }] }] },
								],
								logoip: r,
								scrysec: r,
								"firewall-gateway": r,
								myshopblocks: r,
								myshopify: r,
								shopitsite: r,
								"1kapp": r,
								appchizi: r,
								applinzi: r,
								sinaapp: r,
								vipsinaapp: r,
								streamlitapp: r,
								"try-snowplow": r,
								"playstation-cloud": r,
								myspreadshop: r,
								"w-corp-staticblitz": r,
								"w-credentialless-staticblitz": r,
								"w-staticblitz": r,
								"stackhero-network": r,
								stdlib: [0, { api: r }],
								strapiapp: [2, { media: r }],
								"streak-link": r,
								streaklinks: r,
								streakusercontent: r,
								"temp-dns": r,
								dsmynas: r,
								familyds: r,
								mytabit: r,
								taveusercontent: r,
								"tb-hosting": F,
								reservd: r,
								thingdustdata: r,
								"townnews-staging": r,
								typeform: [0, { pro: r }],
								hk: r,
								it: r,
								"deus-canvas": r,
								vultrobjects: l,
								wafflecell: r,
								hotelwithflight: r,
								"reserve-online": r,
								cprapid: r,
								pleskns: r,
								remotewd: r,
								wiardweb: [0, { pages: r }],
								wixsite: r,
								wixstudio: r,
								messwithdns: r,
								"woltlab-demo": r,
								wpenginepowered: [2, { js: r }],
								xnbay: [2, { u2: r, "u2-local": r }],
								yolasite: r,
							},
						],
						coop: n,
						cr: [1, { ac: n, co: n, ed: n, fi: n, go: n, or: n, sa: n }],
						cu: [1, { com: n, edu: n, gob: n, inf: n, nat: n, net: n, org: n }],
						cv: [1, { com: n, edu: n, id: n, int: n, net: n, nome: n, org: n, publ: n }],
						cw: B,
						cx: [
							1,
							{
								gov: n,
								cloudns: r,
								ath: r,
								info: r,
								assessments: r,
								calculators: r,
								funnels: r,
								paynow: r,
								quizzes: r,
								researched: r,
								tests: r,
							},
						],
						cy: [
							1,
							{
								ac: n,
								biz: n,
								com: [1, { scaleforce: G }],
								ekloges: n,
								gov: n,
								ltd: n,
								mil: n,
								net: n,
								org: n,
								press: n,
								pro: n,
								tm: n,
							},
						],
						cz: [
							1,
							{
								contentproxy9: [0, { rsc: r }],
								realm: r,
								e4: r,
								co: r,
								metacentrum: [0, { cloud: l, custom: r }],
								muni: [0, { cloud: [0, { flt: r, usr: r }] }],
							},
						],
						de: [
							1,
							{
								bplaced: r,
								square7: r,
								com: r,
								cosidns: V,
								dnsupdater: r,
								"dynamisches-dns": r,
								"internet-dns": r,
								"l-o-g-i-n": r,
								ddnss: [2, { dyn: r, dyndns: r }],
								"dyn-ip24": r,
								dyndns1: r,
								"home-webserver": [2, { dyn: r }],
								"myhome-server": r,
								dnshome: r,
								fuettertdasnetz: r,
								isteingeek: r,
								istmein: r,
								lebtimnetz: r,
								leitungsen: r,
								traeumtgerade: r,
								frusky: l,
								goip: r,
								"xn--gnstigbestellen-zvb": r,
								günstigbestellen: r,
								"xn--gnstigliefern-wob": r,
								günstigliefern: r,
								"hs-heilbronn": [0, { it: [0, { pages: r, "pages-research": r }] }],
								"dyn-berlin": r,
								"in-berlin": r,
								"in-brb": r,
								"in-butter": r,
								"in-dsl": r,
								"in-vpn": r,
								iservschule: r,
								"mein-iserv": r,
								schulplattform: r,
								schulserver: r,
								"test-iserv": r,
								keymachine: r,
								"git-repos": r,
								"lcube-server": r,
								"svn-repos": r,
								barsy: r,
								webspaceconfig: r,
								"123webseite": r,
								rub: r,
								"ruhr-uni-bochum": [2, { noc: [0, { io: r }] }],
								logoip: r,
								"firewall-gateway": r,
								"my-gateway": r,
								"my-router": r,
								spdns: r,
								speedpartner: [0, { customer: r }],
								myspreadshop: r,
								"taifun-dns": r,
								"12hp": r,
								"2ix": r,
								"4lima": r,
								"lima-city": r,
								"dd-dns": r,
								"dray-dns": r,
								draydns: r,
								"dyn-vpn": r,
								dynvpn: r,
								"mein-vigor": r,
								"my-vigor": r,
								"my-wan": r,
								"syno-ds": r,
								"synology-diskstation": r,
								"synology-ds": r,
								uberspace: l,
								"virtual-user": r,
								virtualuser: r,
								"community-pro": r,
								diskussionsbereich: r,
							},
						],
						dj: n,
						dk: [1, { biz: r, co: r, firm: r, reg: r, store: r, "123hjemmeside": r, myspreadshop: r }],
						dm: W,
						do: [1, { art: n, com: n, edu: n, gob: n, gov: n, mil: n, net: n, org: n, sld: n, web: n }],
						dz: [1, { art: n, asso: n, com: n, edu: n, gov: n, net: n, org: n, pol: n, soc: n, tm: n }],
						ec: [
							1,
							{
								com: n,
								edu: n,
								fin: n,
								gob: n,
								gov: n,
								info: n,
								k12: n,
								med: n,
								mil: n,
								net: n,
								org: n,
								pro: n,
								base: r,
								official: r,
							},
						],
						edu: [1, { rit: [0, { "git-pages": r }] }],
						ee: [1, { aip: n, com: n, edu: n, fie: n, gov: n, lib: n, med: n, org: n, pri: n, riik: n }],
						eg: [
							1,
							{
								ac: n,
								com: n,
								edu: n,
								eun: n,
								gov: n,
								info: n,
								me: n,
								mil: n,
								name: n,
								net: n,
								org: n,
								sci: n,
								sport: n,
								tv: n,
							},
						],
						er: k,
						es: [1, { com: n, edu: n, gob: n, nom: n, org: n, "123miweb": r, myspreadshop: r }],
						et: [1, { biz: n, com: n, edu: n, gov: n, info: n, name: n, net: n, org: n }],
						eu: [
							1,
							{
								airkitapps: r,
								cloudns: r,
								dogado: [0, { jelastic: r }],
								barsy: r,
								spdns: r,
								transurl: l,
								diskstation: r,
							},
						],
						fi: [
							1,
							{
								aland: n,
								dy: r,
								"xn--hkkinen-5wa": r,
								häkkinen: r,
								iki: r,
								cloudplatform: [0, { fi: r }],
								datacenter: [0, { demo: r, paas: r }],
								kapsi: r,
								"123kotisivu": r,
								myspreadshop: r,
							},
						],
						fj: [1, { ac: n, biz: n, com: n, gov: n, info: n, mil: n, name: n, net: n, org: n, pro: n }],
						fk: k,
						fm: [1, { com: n, edu: n, net: n, org: n, radio: r, user: l }],
						fo: n,
						fr: [
							1,
							{
								asso: n,
								com: n,
								gouv: n,
								nom: n,
								prd: n,
								tm: n,
								avoues: n,
								cci: n,
								greta: n,
								"huissier-justice": n,
								"en-root": r,
								"fbx-os": r,
								fbxos: r,
								"freebox-os": r,
								freeboxos: r,
								goupile: r,
								"123siteweb": r,
								"on-web": r,
								"chirurgiens-dentistes-en-france": r,
								dedibox: r,
								aeroport: r,
								avocat: r,
								chambagri: r,
								"chirurgiens-dentistes": r,
								"experts-comptables": r,
								medecin: r,
								notaires: r,
								pharmacien: r,
								port: r,
								veterinaire: r,
								myspreadshop: r,
								ynh: r,
							},
						],
						ga: n,
						gb: n,
						gd: [1, { edu: n, gov: n }],
						ge: [1, { com: n, edu: n, gov: n, net: n, org: n, pvt: n, school: n }],
						gf: n,
						gg: [1, { co: n, net: n, org: n, botdash: r, kaas: r, stackit: r, panel: [2, { daemon: r }] }],
						gh: [1, { com: n, edu: n, gov: n, mil: n, org: n }],
						gi: [1, { com: n, edu: n, gov: n, ltd: n, mod: n, org: n }],
						gl: [1, { co: n, com: n, edu: n, net: n, org: n, biz: r }],
						gm: n,
						gn: [1, { ac: n, com: n, edu: n, gov: n, net: n, org: n }],
						gov: n,
						gp: [1, { asso: n, com: n, edu: n, mobi: n, net: n, org: n }],
						gq: n,
						gr: [1, { com: n, edu: n, gov: n, net: n, org: n, barsy: r, simplesite: r }],
						gs: n,
						gt: [1, { com: n, edu: n, gob: n, ind: n, mil: n, net: n, org: n }],
						gu: [1, { com: n, edu: n, gov: n, guam: n, info: n, net: n, org: n, web: n }],
						gw: n,
						gy: W,
						hk: [
							1,
							{
								com: n,
								edu: n,
								gov: n,
								idv: n,
								net: n,
								org: n,
								"xn--ciqpn": n,
								个人: n,
								"xn--gmqw5a": n,
								個人: n,
								"xn--55qx5d": n,
								公司: n,
								"xn--mxtq1m": n,
								政府: n,
								"xn--lcvr32d": n,
								敎育: n,
								"xn--wcvs22d": n,
								教育: n,
								"xn--gmq050i": n,
								箇人: n,
								"xn--uc0atv": n,
								組織: n,
								"xn--uc0ay4a": n,
								組织: n,
								"xn--od0alg": n,
								網絡: n,
								"xn--zf0avx": n,
								網络: n,
								"xn--mk0axi": n,
								组織: n,
								"xn--tn0ag": n,
								组织: n,
								"xn--od0aq3b": n,
								网絡: n,
								"xn--io0a7i": n,
								网络: n,
								inc: r,
								ltd: r,
							},
						],
						hm: n,
						hn: [1, { com: n, edu: n, gob: n, mil: n, net: n, org: n }],
						hr: [1, { com: n, from: n, iz: n, name: n, brendly: X }],
						ht: [
							1,
							{
								adult: n,
								art: n,
								asso: n,
								com: n,
								coop: n,
								edu: n,
								firm: n,
								gouv: n,
								info: n,
								med: n,
								net: n,
								org: n,
								perso: n,
								pol: n,
								pro: n,
								rel: n,
								shop: n,
								rt: r,
							},
						],
						hu: [
							1,
							{
								2e3: n,
								agrar: n,
								bolt: n,
								casino: n,
								city: n,
								co: n,
								erotica: n,
								erotika: n,
								film: n,
								forum: n,
								games: n,
								hotel: n,
								info: n,
								ingatlan: n,
								jogasz: n,
								konyvelo: n,
								lakas: n,
								media: n,
								news: n,
								org: n,
								priv: n,
								reklam: n,
								sex: n,
								shop: n,
								sport: n,
								suli: n,
								szex: n,
								tm: n,
								tozsde: n,
								utazas: n,
								video: n,
							},
						],
						id: [
							1,
							{
								ac: n,
								biz: n,
								co: n,
								desa: n,
								go: n,
								mil: n,
								my: n,
								net: n,
								or: n,
								ponpes: n,
								sch: n,
								web: n,
								zone: r,
							},
						],
						ie: [1, { gov: n, myspreadshop: r }],
						il: [
							1,
							{
								ac: n,
								co: [1, { ravpage: r, mytabit: r, tabitorder: r }],
								gov: n,
								idf: n,
								k12: n,
								muni: n,
								net: n,
								org: n,
							},
						],
						"xn--4dbrk0ce": [
							1,
							{ "xn--4dbgdty6c": n, "xn--5dbhl8d": n, "xn--8dbq2a": n, "xn--hebda8b": n },
						],
						ישראל: [1, { אקדמיה: n, ישוב: n, צהל: n, ממשל: n }],
						im: [1, { ac: n, co: [1, { ltd: n, plc: n }], com: n, net: n, org: n, tt: n, tv: n }],
						in: [
							1,
							{
								"5g": n,
								"6g": n,
								ac: n,
								ai: n,
								am: n,
								bihar: n,
								biz: n,
								business: n,
								ca: n,
								cn: n,
								co: n,
								com: n,
								coop: n,
								cs: n,
								delhi: n,
								dr: n,
								edu: n,
								er: n,
								firm: n,
								gen: n,
								gov: n,
								gujarat: n,
								ind: n,
								info: n,
								int: n,
								internet: n,
								io: n,
								me: n,
								mil: n,
								net: n,
								nic: n,
								org: n,
								pg: n,
								post: n,
								pro: n,
								res: n,
								travel: n,
								tv: n,
								uk: n,
								up: n,
								us: n,
								cloudns: r,
								barsy: r,
								web: r,
								supabase: r,
							},
						],
						info: [
							1,
							{
								cloudns: r,
								"dynamic-dns": r,
								"barrel-of-knowledge": r,
								"barrell-of-knowledge": r,
								dyndns: r,
								"for-our": r,
								"groks-the": r,
								"groks-this": r,
								"here-for-more": r,
								knowsitall: r,
								selfip: r,
								webhop: r,
								barsy: r,
								mayfirst: r,
								mittwald: r,
								mittwaldserver: r,
								typo3server: r,
								dvrcam: r,
								ilovecollege: r,
								"no-ip": r,
								forumz: r,
								nsupdate: r,
								dnsupdate: r,
								"v-info": r,
							},
						],
						int: [1, { eu: n }],
						io: [
							1,
							{
								2038: r,
								co: n,
								com: n,
								edu: n,
								gov: n,
								mil: n,
								net: n,
								nom: n,
								org: n,
								"on-acorn": l,
								myaddr: r,
								apigee: r,
								"b-data": r,
								beagleboard: r,
								bitbucket: r,
								bluebite: r,
								boxfuse: r,
								brave: u,
								browsersafetymark: r,
								bubble: Q,
								bubbleapps: r,
								bigv: [0, { uk0: r }],
								cleverapps: r,
								cloudbeesusercontent: r,
								dappnode: [0, { dyndns: r }],
								darklang: r,
								definima: r,
								dedyn: r,
								"fh-muenster": r,
								shw: r,
								forgerock: [0, { id: r }],
								github: r,
								gitlab: r,
								lolipop: r,
								"hasura-app": r,
								hostyhosting: r,
								hypernode: r,
								moonscale: l,
								beebyte: M,
								beebyteapp: [0, { sekd1: r }],
								jele: r,
								webthings: r,
								loginline: r,
								barsy: r,
								azurecontainer: l,
								ngrok: [2, { ap: r, au: r, eu: r, in: r, jp: r, sa: r, us: r }],
								nodeart: [0, { stage: r }],
								pantheonsite: r,
								pstmn: [2, { mock: r }],
								protonet: r,
								qcx: [2, { sys: l }],
								qoto: r,
								vaporcloud: r,
								myrdbx: r,
								"rb-hosting": F,
								"on-k3s": l,
								"on-rio": l,
								readthedocs: r,
								resindevice: r,
								resinstaging: [0, { devices: r }],
								hzc: r,
								sandcats: r,
								scrypted: [0, { client: r }],
								"mo-siemens": r,
								lair: L,
								stolos: l,
								musician: r,
								utwente: r,
								edugit: r,
								telebit: r,
								thingdust: [0, { dev: Y, disrec: Y, prod: ee, testing: Y }],
								tickets: r,
								webflow: r,
								webflowtest: r,
								editorx: r,
								wixstudio: r,
								basicserver: r,
								virtualserver: r,
							},
						],
						iq: s,
						ir: [
							1,
							{
								ac: n,
								co: n,
								gov: n,
								id: n,
								net: n,
								org: n,
								sch: n,
								"xn--mgba3a4f16a": n,
								ایران: n,
								"xn--mgba3a4fra": n,
								ايران: n,
								arvanedge: r,
							},
						],
						is: n,
						it: [
							1,
							{
								edu: n,
								gov: n,
								abr: n,
								abruzzo: n,
								"aosta-valley": n,
								aostavalley: n,
								bas: n,
								basilicata: n,
								cal: n,
								calabria: n,
								cam: n,
								campania: n,
								"emilia-romagna": n,
								emiliaromagna: n,
								emr: n,
								"friuli-v-giulia": n,
								"friuli-ve-giulia": n,
								"friuli-vegiulia": n,
								"friuli-venezia-giulia": n,
								"friuli-veneziagiulia": n,
								"friuli-vgiulia": n,
								"friuliv-giulia": n,
								"friulive-giulia": n,
								friulivegiulia: n,
								"friulivenezia-giulia": n,
								friuliveneziagiulia: n,
								friulivgiulia: n,
								fvg: n,
								laz: n,
								lazio: n,
								lig: n,
								liguria: n,
								lom: n,
								lombardia: n,
								lombardy: n,
								lucania: n,
								mar: n,
								marche: n,
								mol: n,
								molise: n,
								piedmont: n,
								piemonte: n,
								pmn: n,
								pug: n,
								puglia: n,
								sar: n,
								sardegna: n,
								sardinia: n,
								sic: n,
								sicilia: n,
								sicily: n,
								taa: n,
								tos: n,
								toscana: n,
								"trentin-sud-tirol": n,
								"xn--trentin-sd-tirol-rzb": n,
								"trentin-süd-tirol": n,
								"trentin-sudtirol": n,
								"xn--trentin-sdtirol-7vb": n,
								"trentin-südtirol": n,
								"trentin-sued-tirol": n,
								"trentin-suedtirol": n,
								trentino: n,
								"trentino-a-adige": n,
								"trentino-aadige": n,
								"trentino-alto-adige": n,
								"trentino-altoadige": n,
								"trentino-s-tirol": n,
								"trentino-stirol": n,
								"trentino-sud-tirol": n,
								"xn--trentino-sd-tirol-c3b": n,
								"trentino-süd-tirol": n,
								"trentino-sudtirol": n,
								"xn--trentino-sdtirol-szb": n,
								"trentino-südtirol": n,
								"trentino-sued-tirol": n,
								"trentino-suedtirol": n,
								"trentinoa-adige": n,
								trentinoaadige: n,
								"trentinoalto-adige": n,
								trentinoaltoadige: n,
								"trentinos-tirol": n,
								trentinostirol: n,
								"trentinosud-tirol": n,
								"xn--trentinosd-tirol-rzb": n,
								"trentinosüd-tirol": n,
								trentinosudtirol: n,
								"xn--trentinosdtirol-7vb": n,
								trentinosüdtirol: n,
								"trentinosued-tirol": n,
								trentinosuedtirol: n,
								"trentinsud-tirol": n,
								"xn--trentinsd-tirol-6vb": n,
								"trentinsüd-tirol": n,
								trentinsudtirol: n,
								"xn--trentinsdtirol-nsb": n,
								trentinsüdtirol: n,
								"trentinsued-tirol": n,
								trentinsuedtirol: n,
								tuscany: n,
								umb: n,
								umbria: n,
								"val-d-aosta": n,
								"val-daosta": n,
								"vald-aosta": n,
								valdaosta: n,
								"valle-aosta": n,
								"valle-d-aosta": n,
								"valle-daosta": n,
								valleaosta: n,
								"valled-aosta": n,
								valledaosta: n,
								"vallee-aoste": n,
								"xn--valle-aoste-ebb": n,
								"vallée-aoste": n,
								"vallee-d-aoste": n,
								"xn--valle-d-aoste-ehb": n,
								"vallée-d-aoste": n,
								valleeaoste: n,
								"xn--valleaoste-e7a": n,
								valléeaoste: n,
								valleedaoste: n,
								"xn--valledaoste-ebb": n,
								valléedaoste: n,
								vao: n,
								vda: n,
								ven: n,
								veneto: n,
								ag: n,
								agrigento: n,
								al: n,
								alessandria: n,
								"alto-adige": n,
								altoadige: n,
								an: n,
								ancona: n,
								"andria-barletta-trani": n,
								"andria-trani-barletta": n,
								andriabarlettatrani: n,
								andriatranibarletta: n,
								ao: n,
								aosta: n,
								aoste: n,
								ap: n,
								aq: n,
								aquila: n,
								ar: n,
								arezzo: n,
								"ascoli-piceno": n,
								ascolipiceno: n,
								asti: n,
								at: n,
								av: n,
								avellino: n,
								ba: n,
								balsan: n,
								"balsan-sudtirol": n,
								"xn--balsan-sdtirol-nsb": n,
								"balsan-südtirol": n,
								"balsan-suedtirol": n,
								bari: n,
								"barletta-trani-andria": n,
								barlettatraniandria: n,
								belluno: n,
								benevento: n,
								bergamo: n,
								bg: n,
								bi: n,
								biella: n,
								bl: n,
								bn: n,
								bo: n,
								bologna: n,
								bolzano: n,
								"bolzano-altoadige": n,
								bozen: n,
								"bozen-sudtirol": n,
								"xn--bozen-sdtirol-2ob": n,
								"bozen-südtirol": n,
								"bozen-suedtirol": n,
								br: n,
								brescia: n,
								brindisi: n,
								bs: n,
								bt: n,
								bulsan: n,
								"bulsan-sudtirol": n,
								"xn--bulsan-sdtirol-nsb": n,
								"bulsan-südtirol": n,
								"bulsan-suedtirol": n,
								bz: n,
								ca: n,
								cagliari: n,
								caltanissetta: n,
								"campidano-medio": n,
								campidanomedio: n,
								campobasso: n,
								"carbonia-iglesias": n,
								carboniaiglesias: n,
								"carrara-massa": n,
								carraramassa: n,
								caserta: n,
								catania: n,
								catanzaro: n,
								cb: n,
								ce: n,
								"cesena-forli": n,
								"xn--cesena-forl-mcb": n,
								"cesena-forlì": n,
								cesenaforli: n,
								"xn--cesenaforl-i8a": n,
								cesenaforlì: n,
								ch: n,
								chieti: n,
								ci: n,
								cl: n,
								cn: n,
								co: n,
								como: n,
								cosenza: n,
								cr: n,
								cremona: n,
								crotone: n,
								cs: n,
								ct: n,
								cuneo: n,
								cz: n,
								"dell-ogliastra": n,
								dellogliastra: n,
								en: n,
								enna: n,
								fc: n,
								fe: n,
								fermo: n,
								ferrara: n,
								fg: n,
								fi: n,
								firenze: n,
								florence: n,
								fm: n,
								foggia: n,
								"forli-cesena": n,
								"xn--forl-cesena-fcb": n,
								"forlì-cesena": n,
								forlicesena: n,
								"xn--forlcesena-c8a": n,
								forlìcesena: n,
								fr: n,
								frosinone: n,
								ge: n,
								genoa: n,
								genova: n,
								go: n,
								gorizia: n,
								gr: n,
								grosseto: n,
								"iglesias-carbonia": n,
								iglesiascarbonia: n,
								im: n,
								imperia: n,
								is: n,
								isernia: n,
								kr: n,
								"la-spezia": n,
								laquila: n,
								laspezia: n,
								latina: n,
								lc: n,
								le: n,
								lecce: n,
								lecco: n,
								li: n,
								livorno: n,
								lo: n,
								lodi: n,
								lt: n,
								lu: n,
								lucca: n,
								macerata: n,
								mantova: n,
								"massa-carrara": n,
								massacarrara: n,
								matera: n,
								mb: n,
								mc: n,
								me: n,
								"medio-campidano": n,
								mediocampidano: n,
								messina: n,
								mi: n,
								milan: n,
								milano: n,
								mn: n,
								mo: n,
								modena: n,
								monza: n,
								"monza-brianza": n,
								"monza-e-della-brianza": n,
								monzabrianza: n,
								monzaebrianza: n,
								monzaedellabrianza: n,
								ms: n,
								mt: n,
								na: n,
								naples: n,
								napoli: n,
								no: n,
								novara: n,
								nu: n,
								nuoro: n,
								og: n,
								ogliastra: n,
								"olbia-tempio": n,
								olbiatempio: n,
								or: n,
								oristano: n,
								ot: n,
								pa: n,
								padova: n,
								padua: n,
								palermo: n,
								parma: n,
								pavia: n,
								pc: n,
								pd: n,
								pe: n,
								perugia: n,
								"pesaro-urbino": n,
								pesarourbino: n,
								pescara: n,
								pg: n,
								pi: n,
								piacenza: n,
								pisa: n,
								pistoia: n,
								pn: n,
								po: n,
								pordenone: n,
								potenza: n,
								pr: n,
								prato: n,
								pt: n,
								pu: n,
								pv: n,
								pz: n,
								ra: n,
								ragusa: n,
								ravenna: n,
								rc: n,
								re: n,
								"reggio-calabria": n,
								"reggio-emilia": n,
								reggiocalabria: n,
								reggioemilia: n,
								rg: n,
								ri: n,
								rieti: n,
								rimini: n,
								rm: n,
								rn: n,
								ro: n,
								roma: n,
								rome: n,
								rovigo: n,
								sa: n,
								salerno: n,
								sassari: n,
								savona: n,
								si: n,
								siena: n,
								siracusa: n,
								so: n,
								sondrio: n,
								sp: n,
								sr: n,
								ss: n,
								"xn--sdtirol-n2a": n,
								südtirol: n,
								suedtirol: n,
								sv: n,
								ta: n,
								taranto: n,
								te: n,
								"tempio-olbia": n,
								tempioolbia: n,
								teramo: n,
								terni: n,
								tn: n,
								to: n,
								torino: n,
								tp: n,
								tr: n,
								"trani-andria-barletta": n,
								"trani-barletta-andria": n,
								traniandriabarletta: n,
								tranibarlettaandria: n,
								trapani: n,
								trento: n,
								treviso: n,
								trieste: n,
								ts: n,
								turin: n,
								tv: n,
								ud: n,
								udine: n,
								"urbino-pesaro": n,
								urbinopesaro: n,
								va: n,
								varese: n,
								vb: n,
								vc: n,
								ve: n,
								venezia: n,
								venice: n,
								verbania: n,
								vercelli: n,
								verona: n,
								vi: n,
								"vibo-valentia": n,
								vibovalentia: n,
								vicenza: n,
								viterbo: n,
								vr: n,
								vs: n,
								vt: n,
								vv: n,
								"12chars": r,
								ibxos: r,
								iliadboxos: r,
								neen: [0, { jc: r }],
								"123homepage": r,
								"16-b": r,
								"32-b": r,
								"64-b": r,
								myspreadshop: r,
								syncloud: r,
							},
						],
						je: [1, { co: n, net: n, org: n, of: r }],
						jm: k,
						jo: [
							1,
							{
								agri: n,
								ai: n,
								com: n,
								edu: n,
								eng: n,
								fm: n,
								gov: n,
								mil: n,
								net: n,
								org: n,
								per: n,
								phd: n,
								sch: n,
								tv: n,
							},
						],
						jobs: n,
						jp: [
							1,
							{
								ac: n,
								ad: n,
								co: n,
								ed: n,
								go: n,
								gr: n,
								lg: n,
								ne: [
									1,
									{
										aseinet: H,
										gehirn: r,
										ivory: r,
										"mail-box": r,
										mints: r,
										mokuren: r,
										opal: r,
										sakura: r,
										sumomo: r,
										topaz: r,
									},
								],
								or: n,
								aichi: [
									1,
									{
										aisai: n,
										ama: n,
										anjo: n,
										asuke: n,
										chiryu: n,
										chita: n,
										fuso: n,
										gamagori: n,
										handa: n,
										hazu: n,
										hekinan: n,
										higashiura: n,
										ichinomiya: n,
										inazawa: n,
										inuyama: n,
										isshiki: n,
										iwakura: n,
										kanie: n,
										kariya: n,
										kasugai: n,
										kira: n,
										kiyosu: n,
										komaki: n,
										konan: n,
										kota: n,
										mihama: n,
										miyoshi: n,
										nishio: n,
										nisshin: n,
										obu: n,
										oguchi: n,
										oharu: n,
										okazaki: n,
										owariasahi: n,
										seto: n,
										shikatsu: n,
										shinshiro: n,
										shitara: n,
										tahara: n,
										takahama: n,
										tobishima: n,
										toei: n,
										togo: n,
										tokai: n,
										tokoname: n,
										toyoake: n,
										toyohashi: n,
										toyokawa: n,
										toyone: n,
										toyota: n,
										tsushima: n,
										yatomi: n,
									},
								],
								akita: [
									1,
									{
										akita: n,
										daisen: n,
										fujisato: n,
										gojome: n,
										hachirogata: n,
										happou: n,
										higashinaruse: n,
										honjo: n,
										honjyo: n,
										ikawa: n,
										kamikoani: n,
										kamioka: n,
										katagami: n,
										kazuno: n,
										kitaakita: n,
										kosaka: n,
										kyowa: n,
										misato: n,
										mitane: n,
										moriyoshi: n,
										nikaho: n,
										noshiro: n,
										odate: n,
										oga: n,
										ogata: n,
										semboku: n,
										yokote: n,
										yurihonjo: n,
									},
								],
								aomori: [
									1,
									{
										aomori: n,
										gonohe: n,
										hachinohe: n,
										hashikami: n,
										hiranai: n,
										hirosaki: n,
										itayanagi: n,
										kuroishi: n,
										misawa: n,
										mutsu: n,
										nakadomari: n,
										noheji: n,
										oirase: n,
										owani: n,
										rokunohe: n,
										sannohe: n,
										shichinohe: n,
										shingo: n,
										takko: n,
										towada: n,
										tsugaru: n,
										tsuruta: n,
									},
								],
								chiba: [
									1,
									{
										abiko: n,
										asahi: n,
										chonan: n,
										chosei: n,
										choshi: n,
										chuo: n,
										funabashi: n,
										futtsu: n,
										hanamigawa: n,
										ichihara: n,
										ichikawa: n,
										ichinomiya: n,
										inzai: n,
										isumi: n,
										kamagaya: n,
										kamogawa: n,
										kashiwa: n,
										katori: n,
										katsuura: n,
										kimitsu: n,
										kisarazu: n,
										kozaki: n,
										kujukuri: n,
										kyonan: n,
										matsudo: n,
										midori: n,
										mihama: n,
										minamiboso: n,
										mobara: n,
										mutsuzawa: n,
										nagara: n,
										nagareyama: n,
										narashino: n,
										narita: n,
										noda: n,
										oamishirasato: n,
										omigawa: n,
										onjuku: n,
										otaki: n,
										sakae: n,
										sakura: n,
										shimofusa: n,
										shirako: n,
										shiroi: n,
										shisui: n,
										sodegaura: n,
										sosa: n,
										tako: n,
										tateyama: n,
										togane: n,
										tohnosho: n,
										tomisato: n,
										urayasu: n,
										yachimata: n,
										yachiyo: n,
										yokaichiba: n,
										yokoshibahikari: n,
										yotsukaido: n,
									},
								],
								ehime: [
									1,
									{
										ainan: n,
										honai: n,
										ikata: n,
										imabari: n,
										iyo: n,
										kamijima: n,
										kihoku: n,
										kumakogen: n,
										masaki: n,
										matsuno: n,
										matsuyama: n,
										namikata: n,
										niihama: n,
										ozu: n,
										saijo: n,
										seiyo: n,
										shikokuchuo: n,
										tobe: n,
										toon: n,
										uchiko: n,
										uwajima: n,
										yawatahama: n,
									},
								],
								fukui: [
									1,
									{
										echizen: n,
										eiheiji: n,
										fukui: n,
										ikeda: n,
										katsuyama: n,
										mihama: n,
										minamiechizen: n,
										obama: n,
										ohi: n,
										ono: n,
										sabae: n,
										sakai: n,
										takahama: n,
										tsuruga: n,
										wakasa: n,
									},
								],
								fukuoka: [
									1,
									{
										ashiya: n,
										buzen: n,
										chikugo: n,
										chikuho: n,
										chikujo: n,
										chikushino: n,
										chikuzen: n,
										chuo: n,
										dazaifu: n,
										fukuchi: n,
										hakata: n,
										higashi: n,
										hirokawa: n,
										hisayama: n,
										iizuka: n,
										inatsuki: n,
										kaho: n,
										kasuga: n,
										kasuya: n,
										kawara: n,
										keisen: n,
										koga: n,
										kurate: n,
										kurogi: n,
										kurume: n,
										minami: n,
										miyako: n,
										miyama: n,
										miyawaka: n,
										mizumaki: n,
										munakata: n,
										nakagawa: n,
										nakama: n,
										nishi: n,
										nogata: n,
										ogori: n,
										okagaki: n,
										okawa: n,
										oki: n,
										omuta: n,
										onga: n,
										onojo: n,
										oto: n,
										saigawa: n,
										sasaguri: n,
										shingu: n,
										shinyoshitomi: n,
										shonai: n,
										soeda: n,
										sue: n,
										tachiarai: n,
										tagawa: n,
										takata: n,
										toho: n,
										toyotsu: n,
										tsuiki: n,
										ukiha: n,
										umi: n,
										usui: n,
										yamada: n,
										yame: n,
										yanagawa: n,
										yukuhashi: n,
									},
								],
								fukushima: [
									1,
									{
										aizubange: n,
										aizumisato: n,
										aizuwakamatsu: n,
										asakawa: n,
										bandai: n,
										date: n,
										fukushima: n,
										furudono: n,
										futaba: n,
										hanawa: n,
										higashi: n,
										hirata: n,
										hirono: n,
										iitate: n,
										inawashiro: n,
										ishikawa: n,
										iwaki: n,
										izumizaki: n,
										kagamiishi: n,
										kaneyama: n,
										kawamata: n,
										kitakata: n,
										kitashiobara: n,
										koori: n,
										koriyama: n,
										kunimi: n,
										miharu: n,
										mishima: n,
										namie: n,
										nango: n,
										nishiaizu: n,
										nishigo: n,
										okuma: n,
										omotego: n,
										ono: n,
										otama: n,
										samegawa: n,
										shimogo: n,
										shirakawa: n,
										showa: n,
										soma: n,
										sukagawa: n,
										taishin: n,
										tamakawa: n,
										tanagura: n,
										tenei: n,
										yabuki: n,
										yamato: n,
										yamatsuri: n,
										yanaizu: n,
										yugawa: n,
									},
								],
								gifu: [
									1,
									{
										anpachi: n,
										ena: n,
										gifu: n,
										ginan: n,
										godo: n,
										gujo: n,
										hashima: n,
										hichiso: n,
										hida: n,
										higashishirakawa: n,
										ibigawa: n,
										ikeda: n,
										kakamigahara: n,
										kani: n,
										kasahara: n,
										kasamatsu: n,
										kawaue: n,
										kitagata: n,
										mino: n,
										minokamo: n,
										mitake: n,
										mizunami: n,
										motosu: n,
										nakatsugawa: n,
										ogaki: n,
										sakahogi: n,
										seki: n,
										sekigahara: n,
										shirakawa: n,
										tajimi: n,
										takayama: n,
										tarui: n,
										toki: n,
										tomika: n,
										wanouchi: n,
										yamagata: n,
										yaotsu: n,
										yoro: n,
									},
								],
								gunma: [
									1,
									{
										annaka: n,
										chiyoda: n,
										fujioka: n,
										higashiagatsuma: n,
										isesaki: n,
										itakura: n,
										kanna: n,
										kanra: n,
										katashina: n,
										kawaba: n,
										kiryu: n,
										kusatsu: n,
										maebashi: n,
										meiwa: n,
										midori: n,
										minakami: n,
										naganohara: n,
										nakanojo: n,
										nanmoku: n,
										numata: n,
										oizumi: n,
										ora: n,
										ota: n,
										shibukawa: n,
										shimonita: n,
										shinto: n,
										showa: n,
										takasaki: n,
										takayama: n,
										tamamura: n,
										tatebayashi: n,
										tomioka: n,
										tsukiyono: n,
										tsumagoi: n,
										ueno: n,
										yoshioka: n,
									},
								],
								hiroshima: [
									1,
									{
										asaminami: n,
										daiwa: n,
										etajima: n,
										fuchu: n,
										fukuyama: n,
										hatsukaichi: n,
										higashihiroshima: n,
										hongo: n,
										jinsekikogen: n,
										kaita: n,
										kui: n,
										kumano: n,
										kure: n,
										mihara: n,
										miyoshi: n,
										naka: n,
										onomichi: n,
										osakikamijima: n,
										otake: n,
										saka: n,
										sera: n,
										seranishi: n,
										shinichi: n,
										shobara: n,
										takehara: n,
									},
								],
								hokkaido: [
									1,
									{
										abashiri: n,
										abira: n,
										aibetsu: n,
										akabira: n,
										akkeshi: n,
										asahikawa: n,
										ashibetsu: n,
										ashoro: n,
										assabu: n,
										atsuma: n,
										bibai: n,
										biei: n,
										bifuka: n,
										bihoro: n,
										biratori: n,
										chippubetsu: n,
										chitose: n,
										date: n,
										ebetsu: n,
										embetsu: n,
										eniwa: n,
										erimo: n,
										esan: n,
										esashi: n,
										fukagawa: n,
										fukushima: n,
										furano: n,
										furubira: n,
										haboro: n,
										hakodate: n,
										hamatonbetsu: n,
										hidaka: n,
										higashikagura: n,
										higashikawa: n,
										hiroo: n,
										hokuryu: n,
										hokuto: n,
										honbetsu: n,
										horokanai: n,
										horonobe: n,
										ikeda: n,
										imakane: n,
										ishikari: n,
										iwamizawa: n,
										iwanai: n,
										kamifurano: n,
										kamikawa: n,
										kamishihoro: n,
										kamisunagawa: n,
										kamoenai: n,
										kayabe: n,
										kembuchi: n,
										kikonai: n,
										kimobetsu: n,
										kitahiroshima: n,
										kitami: n,
										kiyosato: n,
										koshimizu: n,
										kunneppu: n,
										kuriyama: n,
										kuromatsunai: n,
										kushiro: n,
										kutchan: n,
										kyowa: n,
										mashike: n,
										matsumae: n,
										mikasa: n,
										minamifurano: n,
										mombetsu: n,
										moseushi: n,
										mukawa: n,
										muroran: n,
										naie: n,
										nakagawa: n,
										nakasatsunai: n,
										nakatombetsu: n,
										nanae: n,
										nanporo: n,
										nayoro: n,
										nemuro: n,
										niikappu: n,
										niki: n,
										nishiokoppe: n,
										noboribetsu: n,
										numata: n,
										obihiro: n,
										obira: n,
										oketo: n,
										okoppe: n,
										otaru: n,
										otobe: n,
										otofuke: n,
										otoineppu: n,
										oumu: n,
										ozora: n,
										pippu: n,
										rankoshi: n,
										rebun: n,
										rikubetsu: n,
										rishiri: n,
										rishirifuji: n,
										saroma: n,
										sarufutsu: n,
										shakotan: n,
										shari: n,
										shibecha: n,
										shibetsu: n,
										shikabe: n,
										shikaoi: n,
										shimamaki: n,
										shimizu: n,
										shimokawa: n,
										shinshinotsu: n,
										shintoku: n,
										shiranuka: n,
										shiraoi: n,
										shiriuchi: n,
										sobetsu: n,
										sunagawa: n,
										taiki: n,
										takasu: n,
										takikawa: n,
										takinoue: n,
										teshikaga: n,
										tobetsu: n,
										tohma: n,
										tomakomai: n,
										tomari: n,
										toya: n,
										toyako: n,
										toyotomi: n,
										toyoura: n,
										tsubetsu: n,
										tsukigata: n,
										urakawa: n,
										urausu: n,
										uryu: n,
										utashinai: n,
										wakkanai: n,
										wassamu: n,
										yakumo: n,
										yoichi: n,
									},
								],
								hyogo: [
									1,
									{
										aioi: n,
										akashi: n,
										ako: n,
										amagasaki: n,
										aogaki: n,
										asago: n,
										ashiya: n,
										awaji: n,
										fukusaki: n,
										goshiki: n,
										harima: n,
										himeji: n,
										ichikawa: n,
										inagawa: n,
										itami: n,
										kakogawa: n,
										kamigori: n,
										kamikawa: n,
										kasai: n,
										kasuga: n,
										kawanishi: n,
										miki: n,
										minamiawaji: n,
										nishinomiya: n,
										nishiwaki: n,
										ono: n,
										sanda: n,
										sannan: n,
										sasayama: n,
										sayo: n,
										shingu: n,
										shinonsen: n,
										shiso: n,
										sumoto: n,
										taishi: n,
										taka: n,
										takarazuka: n,
										takasago: n,
										takino: n,
										tamba: n,
										tatsuno: n,
										toyooka: n,
										yabu: n,
										yashiro: n,
										yoka: n,
										yokawa: n,
									},
								],
								ibaraki: [
									1,
									{
										ami: n,
										asahi: n,
										bando: n,
										chikusei: n,
										daigo: n,
										fujishiro: n,
										hitachi: n,
										hitachinaka: n,
										hitachiomiya: n,
										hitachiota: n,
										ibaraki: n,
										ina: n,
										inashiki: n,
										itako: n,
										iwama: n,
										joso: n,
										kamisu: n,
										kasama: n,
										kashima: n,
										kasumigaura: n,
										koga: n,
										miho: n,
										mito: n,
										moriya: n,
										naka: n,
										namegata: n,
										oarai: n,
										ogawa: n,
										omitama: n,
										ryugasaki: n,
										sakai: n,
										sakuragawa: n,
										shimodate: n,
										shimotsuma: n,
										shirosato: n,
										sowa: n,
										suifu: n,
										takahagi: n,
										tamatsukuri: n,
										tokai: n,
										tomobe: n,
										tone: n,
										toride: n,
										tsuchiura: n,
										tsukuba: n,
										uchihara: n,
										ushiku: n,
										yachiyo: n,
										yamagata: n,
										yawara: n,
										yuki: n,
									},
								],
								ishikawa: [
									1,
									{
										anamizu: n,
										hakui: n,
										hakusan: n,
										kaga: n,
										kahoku: n,
										kanazawa: n,
										kawakita: n,
										komatsu: n,
										nakanoto: n,
										nanao: n,
										nomi: n,
										nonoichi: n,
										noto: n,
										shika: n,
										suzu: n,
										tsubata: n,
										tsurugi: n,
										uchinada: n,
										wajima: n,
									},
								],
								iwate: [
									1,
									{
										fudai: n,
										fujisawa: n,
										hanamaki: n,
										hiraizumi: n,
										hirono: n,
										ichinohe: n,
										ichinoseki: n,
										iwaizumi: n,
										iwate: n,
										joboji: n,
										kamaishi: n,
										kanegasaki: n,
										karumai: n,
										kawai: n,
										kitakami: n,
										kuji: n,
										kunohe: n,
										kuzumaki: n,
										miyako: n,
										mizusawa: n,
										morioka: n,
										ninohe: n,
										noda: n,
										ofunato: n,
										oshu: n,
										otsuchi: n,
										rikuzentakata: n,
										shiwa: n,
										shizukuishi: n,
										sumita: n,
										tanohata: n,
										tono: n,
										yahaba: n,
										yamada: n,
									},
								],
								kagawa: [
									1,
									{
										ayagawa: n,
										higashikagawa: n,
										kanonji: n,
										kotohira: n,
										manno: n,
										marugame: n,
										mitoyo: n,
										naoshima: n,
										sanuki: n,
										tadotsu: n,
										takamatsu: n,
										tonosho: n,
										uchinomi: n,
										utazu: n,
										zentsuji: n,
									},
								],
								kagoshima: [
									1,
									{
										akune: n,
										amami: n,
										hioki: n,
										isa: n,
										isen: n,
										izumi: n,
										kagoshima: n,
										kanoya: n,
										kawanabe: n,
										kinko: n,
										kouyama: n,
										makurazaki: n,
										matsumoto: n,
										minamitane: n,
										nakatane: n,
										nishinoomote: n,
										satsumasendai: n,
										soo: n,
										tarumizu: n,
										yusui: n,
									},
								],
								kanagawa: [
									1,
									{
										aikawa: n,
										atsugi: n,
										ayase: n,
										chigasaki: n,
										ebina: n,
										fujisawa: n,
										hadano: n,
										hakone: n,
										hiratsuka: n,
										isehara: n,
										kaisei: n,
										kamakura: n,
										kiyokawa: n,
										matsuda: n,
										minamiashigara: n,
										miura: n,
										nakai: n,
										ninomiya: n,
										odawara: n,
										oi: n,
										oiso: n,
										sagamihara: n,
										samukawa: n,
										tsukui: n,
										yamakita: n,
										yamato: n,
										yokosuka: n,
										yugawara: n,
										zama: n,
										zushi: n,
									},
								],
								kochi: [
									1,
									{
										aki: n,
										geisei: n,
										hidaka: n,
										higashitsuno: n,
										ino: n,
										kagami: n,
										kami: n,
										kitagawa: n,
										kochi: n,
										mihara: n,
										motoyama: n,
										muroto: n,
										nahari: n,
										nakamura: n,
										nankoku: n,
										nishitosa: n,
										niyodogawa: n,
										ochi: n,
										okawa: n,
										otoyo: n,
										otsuki: n,
										sakawa: n,
										sukumo: n,
										susaki: n,
										tosa: n,
										tosashimizu: n,
										toyo: n,
										tsuno: n,
										umaji: n,
										yasuda: n,
										yusuhara: n,
									},
								],
								kumamoto: [
									1,
									{
										amakusa: n,
										arao: n,
										aso: n,
										choyo: n,
										gyokuto: n,
										kamiamakusa: n,
										kikuchi: n,
										kumamoto: n,
										mashiki: n,
										mifune: n,
										minamata: n,
										minamioguni: n,
										nagasu: n,
										nishihara: n,
										oguni: n,
										ozu: n,
										sumoto: n,
										takamori: n,
										uki: n,
										uto: n,
										yamaga: n,
										yamato: n,
										yatsushiro: n,
									},
								],
								kyoto: [
									1,
									{
										ayabe: n,
										fukuchiyama: n,
										higashiyama: n,
										ide: n,
										ine: n,
										joyo: n,
										kameoka: n,
										kamo: n,
										kita: n,
										kizu: n,
										kumiyama: n,
										kyotamba: n,
										kyotanabe: n,
										kyotango: n,
										maizuru: n,
										minami: n,
										minamiyamashiro: n,
										miyazu: n,
										muko: n,
										nagaokakyo: n,
										nakagyo: n,
										nantan: n,
										oyamazaki: n,
										sakyo: n,
										seika: n,
										tanabe: n,
										uji: n,
										ujitawara: n,
										wazuka: n,
										yamashina: n,
										yawata: n,
									},
								],
								mie: [
									1,
									{
										asahi: n,
										inabe: n,
										ise: n,
										kameyama: n,
										kawagoe: n,
										kiho: n,
										kisosaki: n,
										kiwa: n,
										komono: n,
										kumano: n,
										kuwana: n,
										matsusaka: n,
										meiwa: n,
										mihama: n,
										minamiise: n,
										misugi: n,
										miyama: n,
										nabari: n,
										shima: n,
										suzuka: n,
										tado: n,
										taiki: n,
										taki: n,
										tamaki: n,
										toba: n,
										tsu: n,
										udono: n,
										ureshino: n,
										watarai: n,
										yokkaichi: n,
									},
								],
								miyagi: [
									1,
									{
										furukawa: n,
										higashimatsushima: n,
										ishinomaki: n,
										iwanuma: n,
										kakuda: n,
										kami: n,
										kawasaki: n,
										marumori: n,
										matsushima: n,
										minamisanriku: n,
										misato: n,
										murata: n,
										natori: n,
										ogawara: n,
										ohira: n,
										onagawa: n,
										osaki: n,
										rifu: n,
										semine: n,
										shibata: n,
										shichikashuku: n,
										shikama: n,
										shiogama: n,
										shiroishi: n,
										tagajo: n,
										taiwa: n,
										tome: n,
										tomiya: n,
										wakuya: n,
										watari: n,
										yamamoto: n,
										zao: n,
									},
								],
								miyazaki: [
									1,
									{
										aya: n,
										ebino: n,
										gokase: n,
										hyuga: n,
										kadogawa: n,
										kawaminami: n,
										kijo: n,
										kitagawa: n,
										kitakata: n,
										kitaura: n,
										kobayashi: n,
										kunitomi: n,
										kushima: n,
										mimata: n,
										miyakonojo: n,
										miyazaki: n,
										morotsuka: n,
										nichinan: n,
										nishimera: n,
										nobeoka: n,
										saito: n,
										shiiba: n,
										shintomi: n,
										takaharu: n,
										takanabe: n,
										takazaki: n,
										tsuno: n,
									},
								],
								nagano: [
									1,
									{
										achi: n,
										agematsu: n,
										anan: n,
										aoki: n,
										asahi: n,
										azumino: n,
										chikuhoku: n,
										chikuma: n,
										chino: n,
										fujimi: n,
										hakuba: n,
										hara: n,
										hiraya: n,
										iida: n,
										iijima: n,
										iiyama: n,
										iizuna: n,
										ikeda: n,
										ikusaka: n,
										ina: n,
										karuizawa: n,
										kawakami: n,
										kiso: n,
										kisofukushima: n,
										kitaaiki: n,
										komagane: n,
										komoro: n,
										matsukawa: n,
										matsumoto: n,
										miasa: n,
										minamiaiki: n,
										minamimaki: n,
										minamiminowa: n,
										minowa: n,
										miyada: n,
										miyota: n,
										mochizuki: n,
										nagano: n,
										nagawa: n,
										nagiso: n,
										nakagawa: n,
										nakano: n,
										nozawaonsen: n,
										obuse: n,
										ogawa: n,
										okaya: n,
										omachi: n,
										omi: n,
										ookuwa: n,
										ooshika: n,
										otaki: n,
										otari: n,
										sakae: n,
										sakaki: n,
										saku: n,
										sakuho: n,
										shimosuwa: n,
										shinanomachi: n,
										shiojiri: n,
										suwa: n,
										suzaka: n,
										takagi: n,
										takamori: n,
										takayama: n,
										tateshina: n,
										tatsuno: n,
										togakushi: n,
										togura: n,
										tomi: n,
										ueda: n,
										wada: n,
										yamagata: n,
										yamanouchi: n,
										yasaka: n,
										yasuoka: n,
									},
								],
								nagasaki: [
									1,
									{
										chijiwa: n,
										futsu: n,
										goto: n,
										hasami: n,
										hirado: n,
										iki: n,
										isahaya: n,
										kawatana: n,
										kuchinotsu: n,
										matsuura: n,
										nagasaki: n,
										obama: n,
										omura: n,
										oseto: n,
										saikai: n,
										sasebo: n,
										seihi: n,
										shimabara: n,
										shinkamigoto: n,
										togitsu: n,
										tsushima: n,
										unzen: n,
									},
								],
								nara: [
									1,
									{
										ando: n,
										gose: n,
										heguri: n,
										higashiyoshino: n,
										ikaruga: n,
										ikoma: n,
										kamikitayama: n,
										kanmaki: n,
										kashiba: n,
										kashihara: n,
										katsuragi: n,
										kawai: n,
										kawakami: n,
										kawanishi: n,
										koryo: n,
										kurotaki: n,
										mitsue: n,
										miyake: n,
										nara: n,
										nosegawa: n,
										oji: n,
										ouda: n,
										oyodo: n,
										sakurai: n,
										sango: n,
										shimoichi: n,
										shimokitayama: n,
										shinjo: n,
										soni: n,
										takatori: n,
										tawaramoto: n,
										tenkawa: n,
										tenri: n,
										uda: n,
										yamatokoriyama: n,
										yamatotakada: n,
										yamazoe: n,
										yoshino: n,
									},
								],
								niigata: [
									1,
									{
										aga: n,
										agano: n,
										gosen: n,
										itoigawa: n,
										izumozaki: n,
										joetsu: n,
										kamo: n,
										kariwa: n,
										kashiwazaki: n,
										minamiuonuma: n,
										mitsuke: n,
										muika: n,
										murakami: n,
										myoko: n,
										nagaoka: n,
										niigata: n,
										ojiya: n,
										omi: n,
										sado: n,
										sanjo: n,
										seiro: n,
										seirou: n,
										sekikawa: n,
										shibata: n,
										tagami: n,
										tainai: n,
										tochio: n,
										tokamachi: n,
										tsubame: n,
										tsunan: n,
										uonuma: n,
										yahiko: n,
										yoita: n,
										yuzawa: n,
									},
								],
								oita: [
									1,
									{
										beppu: n,
										bungoono: n,
										bungotakada: n,
										hasama: n,
										hiji: n,
										himeshima: n,
										hita: n,
										kamitsue: n,
										kokonoe: n,
										kuju: n,
										kunisaki: n,
										kusu: n,
										oita: n,
										saiki: n,
										taketa: n,
										tsukumi: n,
										usa: n,
										usuki: n,
										yufu: n,
									},
								],
								okayama: [
									1,
									{
										akaiwa: n,
										asakuchi: n,
										bizen: n,
										hayashima: n,
										ibara: n,
										kagamino: n,
										kasaoka: n,
										kibichuo: n,
										kumenan: n,
										kurashiki: n,
										maniwa: n,
										misaki: n,
										nagi: n,
										niimi: n,
										nishiawakura: n,
										okayama: n,
										satosho: n,
										setouchi: n,
										shinjo: n,
										shoo: n,
										soja: n,
										takahashi: n,
										tamano: n,
										tsuyama: n,
										wake: n,
										yakage: n,
									},
								],
								okinawa: [
									1,
									{
										aguni: n,
										ginowan: n,
										ginoza: n,
										gushikami: n,
										haebaru: n,
										higashi: n,
										hirara: n,
										iheya: n,
										ishigaki: n,
										ishikawa: n,
										itoman: n,
										izena: n,
										kadena: n,
										kin: n,
										kitadaito: n,
										kitanakagusuku: n,
										kumejima: n,
										kunigami: n,
										minamidaito: n,
										motobu: n,
										nago: n,
										naha: n,
										nakagusuku: n,
										nakijin: n,
										nanjo: n,
										nishihara: n,
										ogimi: n,
										okinawa: n,
										onna: n,
										shimoji: n,
										taketomi: n,
										tarama: n,
										tokashiki: n,
										tomigusuku: n,
										tonaki: n,
										urasoe: n,
										uruma: n,
										yaese: n,
										yomitan: n,
										yonabaru: n,
										yonaguni: n,
										zamami: n,
									},
								],
								osaka: [
									1,
									{
										abeno: n,
										chihayaakasaka: n,
										chuo: n,
										daito: n,
										fujiidera: n,
										habikino: n,
										hannan: n,
										higashiosaka: n,
										higashisumiyoshi: n,
										higashiyodogawa: n,
										hirakata: n,
										ibaraki: n,
										ikeda: n,
										izumi: n,
										izumiotsu: n,
										izumisano: n,
										kadoma: n,
										kaizuka: n,
										kanan: n,
										kashiwara: n,
										katano: n,
										kawachinagano: n,
										kishiwada: n,
										kita: n,
										kumatori: n,
										matsubara: n,
										minato: n,
										minoh: n,
										misaki: n,
										moriguchi: n,
										neyagawa: n,
										nishi: n,
										nose: n,
										osakasayama: n,
										sakai: n,
										sayama: n,
										sennan: n,
										settsu: n,
										shijonawate: n,
										shimamoto: n,
										suita: n,
										tadaoka: n,
										taishi: n,
										tajiri: n,
										takaishi: n,
										takatsuki: n,
										tondabayashi: n,
										toyonaka: n,
										toyono: n,
										yao: n,
									},
								],
								saga: [
									1,
									{
										ariake: n,
										arita: n,
										fukudomi: n,
										genkai: n,
										hamatama: n,
										hizen: n,
										imari: n,
										kamimine: n,
										kanzaki: n,
										karatsu: n,
										kashima: n,
										kitagata: n,
										kitahata: n,
										kiyama: n,
										kouhoku: n,
										kyuragi: n,
										nishiarita: n,
										ogi: n,
										omachi: n,
										ouchi: n,
										saga: n,
										shiroishi: n,
										taku: n,
										tara: n,
										tosu: n,
										yoshinogari: n,
									},
								],
								saitama: [
									1,
									{
										arakawa: n,
										asaka: n,
										chichibu: n,
										fujimi: n,
										fujimino: n,
										fukaya: n,
										hanno: n,
										hanyu: n,
										hasuda: n,
										hatogaya: n,
										hatoyama: n,
										hidaka: n,
										higashichichibu: n,
										higashimatsuyama: n,
										honjo: n,
										ina: n,
										iruma: n,
										iwatsuki: n,
										kamiizumi: n,
										kamikawa: n,
										kamisato: n,
										kasukabe: n,
										kawagoe: n,
										kawaguchi: n,
										kawajima: n,
										kazo: n,
										kitamoto: n,
										koshigaya: n,
										kounosu: n,
										kuki: n,
										kumagaya: n,
										matsubushi: n,
										minano: n,
										misato: n,
										miyashiro: n,
										miyoshi: n,
										moroyama: n,
										nagatoro: n,
										namegawa: n,
										niiza: n,
										ogano: n,
										ogawa: n,
										ogose: n,
										okegawa: n,
										omiya: n,
										otaki: n,
										ranzan: n,
										ryokami: n,
										saitama: n,
										sakado: n,
										satte: n,
										sayama: n,
										shiki: n,
										shiraoka: n,
										soka: n,
										sugito: n,
										toda: n,
										tokigawa: n,
										tokorozawa: n,
										tsurugashima: n,
										urawa: n,
										warabi: n,
										yashio: n,
										yokoze: n,
										yono: n,
										yorii: n,
										yoshida: n,
										yoshikawa: n,
										yoshimi: n,
									},
								],
								shiga: [
									1,
									{
										aisho: n,
										gamo: n,
										higashiomi: n,
										hikone: n,
										koka: n,
										konan: n,
										kosei: n,
										koto: n,
										kusatsu: n,
										maibara: n,
										moriyama: n,
										nagahama: n,
										nishiazai: n,
										notogawa: n,
										omihachiman: n,
										otsu: n,
										ritto: n,
										ryuoh: n,
										takashima: n,
										takatsuki: n,
										torahime: n,
										toyosato: n,
										yasu: n,
									},
								],
								shimane: [
									1,
									{
										akagi: n,
										ama: n,
										gotsu: n,
										hamada: n,
										higashiizumo: n,
										hikawa: n,
										hikimi: n,
										izumo: n,
										kakinoki: n,
										masuda: n,
										matsue: n,
										misato: n,
										nishinoshima: n,
										ohda: n,
										okinoshima: n,
										okuizumo: n,
										shimane: n,
										tamayu: n,
										tsuwano: n,
										unnan: n,
										yakumo: n,
										yasugi: n,
										yatsuka: n,
									},
								],
								shizuoka: [
									1,
									{
										arai: n,
										atami: n,
										fuji: n,
										fujieda: n,
										fujikawa: n,
										fujinomiya: n,
										fukuroi: n,
										gotemba: n,
										haibara: n,
										hamamatsu: n,
										higashiizu: n,
										ito: n,
										iwata: n,
										izu: n,
										izunokuni: n,
										kakegawa: n,
										kannami: n,
										kawanehon: n,
										kawazu: n,
										kikugawa: n,
										kosai: n,
										makinohara: n,
										matsuzaki: n,
										minamiizu: n,
										mishima: n,
										morimachi: n,
										nishiizu: n,
										numazu: n,
										omaezaki: n,
										shimada: n,
										shimizu: n,
										shimoda: n,
										shizuoka: n,
										susono: n,
										yaizu: n,
										yoshida: n,
									},
								],
								tochigi: [
									1,
									{
										ashikaga: n,
										bato: n,
										haga: n,
										ichikai: n,
										iwafune: n,
										kaminokawa: n,
										kanuma: n,
										karasuyama: n,
										kuroiso: n,
										mashiko: n,
										mibu: n,
										moka: n,
										motegi: n,
										nasu: n,
										nasushiobara: n,
										nikko: n,
										nishikata: n,
										nogi: n,
										ohira: n,
										ohtawara: n,
										oyama: n,
										sakura: n,
										sano: n,
										shimotsuke: n,
										shioya: n,
										takanezawa: n,
										tochigi: n,
										tsuga: n,
										ujiie: n,
										utsunomiya: n,
										yaita: n,
									},
								],
								tokushima: [
									1,
									{
										aizumi: n,
										anan: n,
										ichiba: n,
										itano: n,
										kainan: n,
										komatsushima: n,
										matsushige: n,
										mima: n,
										minami: n,
										miyoshi: n,
										mugi: n,
										nakagawa: n,
										naruto: n,
										sanagochi: n,
										shishikui: n,
										tokushima: n,
										wajiki: n,
									},
								],
								tokyo: [
									1,
									{
										adachi: n,
										akiruno: n,
										akishima: n,
										aogashima: n,
										arakawa: n,
										bunkyo: n,
										chiyoda: n,
										chofu: n,
										chuo: n,
										edogawa: n,
										fuchu: n,
										fussa: n,
										hachijo: n,
										hachioji: n,
										hamura: n,
										higashikurume: n,
										higashimurayama: n,
										higashiyamato: n,
										hino: n,
										hinode: n,
										hinohara: n,
										inagi: n,
										itabashi: n,
										katsushika: n,
										kita: n,
										kiyose: n,
										kodaira: n,
										koganei: n,
										kokubunji: n,
										komae: n,
										koto: n,
										kouzushima: n,
										kunitachi: n,
										machida: n,
										meguro: n,
										minato: n,
										mitaka: n,
										mizuho: n,
										musashimurayama: n,
										musashino: n,
										nakano: n,
										nerima: n,
										ogasawara: n,
										okutama: n,
										ome: n,
										oshima: n,
										ota: n,
										setagaya: n,
										shibuya: n,
										shinagawa: n,
										shinjuku: n,
										suginami: n,
										sumida: n,
										tachikawa: n,
										taito: n,
										tama: n,
										toshima: n,
									},
								],
								tottori: [
									1,
									{
										chizu: n,
										hino: n,
										kawahara: n,
										koge: n,
										kotoura: n,
										misasa: n,
										nanbu: n,
										nichinan: n,
										sakaiminato: n,
										tottori: n,
										wakasa: n,
										yazu: n,
										yonago: n,
									},
								],
								toyama: [
									1,
									{
										asahi: n,
										fuchu: n,
										fukumitsu: n,
										funahashi: n,
										himi: n,
										imizu: n,
										inami: n,
										johana: n,
										kamiichi: n,
										kurobe: n,
										nakaniikawa: n,
										namerikawa: n,
										nanto: n,
										nyuzen: n,
										oyabe: n,
										taira: n,
										takaoka: n,
										tateyama: n,
										toga: n,
										tonami: n,
										toyama: n,
										unazuki: n,
										uozu: n,
										yamada: n,
									},
								],
								wakayama: [
									1,
									{
										arida: n,
										aridagawa: n,
										gobo: n,
										hashimoto: n,
										hidaka: n,
										hirogawa: n,
										inami: n,
										iwade: n,
										kainan: n,
										kamitonda: n,
										katsuragi: n,
										kimino: n,
										kinokawa: n,
										kitayama: n,
										koya: n,
										koza: n,
										kozagawa: n,
										kudoyama: n,
										kushimoto: n,
										mihama: n,
										misato: n,
										nachikatsuura: n,
										shingu: n,
										shirahama: n,
										taiji: n,
										tanabe: n,
										wakayama: n,
										yuasa: n,
										yura: n,
									},
								],
								yamagata: [
									1,
									{
										asahi: n,
										funagata: n,
										higashine: n,
										iide: n,
										kahoku: n,
										kaminoyama: n,
										kaneyama: n,
										kawanishi: n,
										mamurogawa: n,
										mikawa: n,
										murayama: n,
										nagai: n,
										nakayama: n,
										nanyo: n,
										nishikawa: n,
										obanazawa: n,
										oe: n,
										oguni: n,
										ohkura: n,
										oishida: n,
										sagae: n,
										sakata: n,
										sakegawa: n,
										shinjo: n,
										shirataka: n,
										shonai: n,
										takahata: n,
										tendo: n,
										tozawa: n,
										tsuruoka: n,
										yamagata: n,
										yamanobe: n,
										yonezawa: n,
										yuza: n,
									},
								],
								yamaguchi: [
									1,
									{
										abu: n,
										hagi: n,
										hikari: n,
										hofu: n,
										iwakuni: n,
										kudamatsu: n,
										mitou: n,
										nagato: n,
										oshima: n,
										shimonoseki: n,
										shunan: n,
										tabuse: n,
										tokuyama: n,
										toyota: n,
										ube: n,
										yuu: n,
									},
								],
								yamanashi: [
									1,
									{
										chuo: n,
										doshi: n,
										fuefuki: n,
										fujikawa: n,
										fujikawaguchiko: n,
										fujiyoshida: n,
										hayakawa: n,
										hokuto: n,
										ichikawamisato: n,
										kai: n,
										kofu: n,
										koshu: n,
										kosuge: n,
										"minami-alps": n,
										minobu: n,
										nakamichi: n,
										nanbu: n,
										narusawa: n,
										nirasaki: n,
										nishikatsura: n,
										oshino: n,
										otsuki: n,
										showa: n,
										tabayama: n,
										tsuru: n,
										uenohara: n,
										yamanakako: n,
										yamanashi: n,
									},
								],
								"xn--ehqz56n": n,
								三重: n,
								"xn--1lqs03n": n,
								京都: n,
								"xn--qqqt11m": n,
								佐賀: n,
								"xn--f6qx53a": n,
								兵庫: n,
								"xn--djrs72d6uy": n,
								北海道: n,
								"xn--mkru45i": n,
								千葉: n,
								"xn--0trq7p7nn": n,
								和歌山: n,
								"xn--5js045d": n,
								埼玉: n,
								"xn--kbrq7o": n,
								大分: n,
								"xn--pssu33l": n,
								大阪: n,
								"xn--ntsq17g": n,
								奈良: n,
								"xn--uisz3g": n,
								宮城: n,
								"xn--6btw5a": n,
								宮崎: n,
								"xn--1ctwo": n,
								富山: n,
								"xn--6orx2r": n,
								山口: n,
								"xn--rht61e": n,
								山形: n,
								"xn--rht27z": n,
								山梨: n,
								"xn--nit225k": n,
								岐阜: n,
								"xn--rht3d": n,
								岡山: n,
								"xn--djty4k": n,
								岩手: n,
								"xn--klty5x": n,
								島根: n,
								"xn--kltx9a": n,
								広島: n,
								"xn--kltp7d": n,
								徳島: n,
								"xn--c3s14m": n,
								愛媛: n,
								"xn--vgu402c": n,
								愛知: n,
								"xn--efvn9s": n,
								新潟: n,
								"xn--1lqs71d": n,
								東京: n,
								"xn--4pvxs": n,
								栃木: n,
								"xn--uuwu58a": n,
								沖縄: n,
								"xn--zbx025d": n,
								滋賀: n,
								"xn--8pvr4u": n,
								熊本: n,
								"xn--5rtp49c": n,
								石川: n,
								"xn--ntso0iqx3a": n,
								神奈川: n,
								"xn--elqq16h": n,
								福井: n,
								"xn--4it168d": n,
								福岡: n,
								"xn--klt787d": n,
								福島: n,
								"xn--rny31h": n,
								秋田: n,
								"xn--7t0a264c": n,
								群馬: n,
								"xn--uist22h": n,
								茨城: n,
								"xn--8ltr62k": n,
								長崎: n,
								"xn--2m4a15e": n,
								長野: n,
								"xn--32vp30h": n,
								青森: n,
								"xn--4it797k": n,
								静岡: n,
								"xn--5rtq34k": n,
								香川: n,
								"xn--k7yn95e": n,
								高知: n,
								"xn--tor131o": n,
								鳥取: n,
								"xn--d5qv7z876c": n,
								鹿児島: n,
								kawasaki: k,
								kitakyushu: k,
								kobe: k,
								nagoya: k,
								sapporo: k,
								sendai: k,
								yokohama: k,
								buyshop: r,
								fashionstore: r,
								handcrafted: r,
								kawaiishop: r,
								supersale: r,
								theshop: r,
								"0am": r,
								"0g0": r,
								"0j0": r,
								"0t0": r,
								mydns: r,
								pgw: r,
								wjg: r,
								usercontent: r,
								angry: r,
								babyblue: r,
								babymilk: r,
								backdrop: r,
								bambina: r,
								bitter: r,
								blush: r,
								boo: r,
								boy: r,
								boyfriend: r,
								but: r,
								candypop: r,
								capoo: r,
								catfood: r,
								cheap: r,
								chicappa: r,
								chillout: r,
								chips: r,
								chowder: r,
								chu: r,
								ciao: r,
								cocotte: r,
								coolblog: r,
								cranky: r,
								cutegirl: r,
								daa: r,
								deca: r,
								deci: r,
								digick: r,
								egoism: r,
								fakefur: r,
								fem: r,
								flier: r,
								floppy: r,
								fool: r,
								frenchkiss: r,
								girlfriend: r,
								girly: r,
								gloomy: r,
								gonna: r,
								greater: r,
								hacca: r,
								heavy: r,
								her: r,
								hiho: r,
								hippy: r,
								holy: r,
								hungry: r,
								icurus: r,
								itigo: r,
								jellybean: r,
								kikirara: r,
								kill: r,
								kilo: r,
								kuron: r,
								littlestar: r,
								lolipopmc: r,
								lolitapunk: r,
								lomo: r,
								lovepop: r,
								lovesick: r,
								main: r,
								mods: r,
								mond: r,
								mongolian: r,
								moo: r,
								namaste: r,
								nikita: r,
								nobushi: r,
								noor: r,
								oops: r,
								parallel: r,
								parasite: r,
								pecori: r,
								peewee: r,
								penne: r,
								pepper: r,
								perma: r,
								pigboat: r,
								pinoko: r,
								punyu: r,
								pupu: r,
								pussycat: r,
								pya: r,
								raindrop: r,
								readymade: r,
								sadist: r,
								schoolbus: r,
								secret: r,
								staba: r,
								stripper: r,
								sub: r,
								sunnyday: r,
								thick: r,
								tonkotsu: r,
								under: r,
								upper: r,
								velvet: r,
								verse: r,
								versus: r,
								vivian: r,
								watson: r,
								weblike: r,
								whitesnow: r,
								zombie: r,
								hateblo: r,
								hatenablog: r,
								hatenadiary: r,
								"2-d": r,
								bona: r,
								crap: r,
								daynight: r,
								eek: r,
								flop: r,
								halfmoon: r,
								jeez: r,
								matrix: r,
								mimoza: r,
								netgamers: r,
								nyanta: r,
								o0o0: r,
								rdy: r,
								rgr: r,
								rulez: r,
								sakurastorage: [0, { isk01: et, isk02: et }],
								saloon: r,
								sblo: r,
								skr: r,
								tank: r,
								"uh-oh": r,
								undo: r,
								webaccel: [0, { rs: r, user: r }],
								websozai: r,
								xii: r,
							},
						],
						ke: [1, { ac: n, co: n, go: n, info: n, me: n, mobi: n, ne: n, or: n, sc: n }],
						kg: [1, { com: n, edu: n, gov: n, mil: n, net: n, org: n, us: r }],
						kh: k,
						ki: ea,
						km: [
							1,
							{
								ass: n,
								com: n,
								edu: n,
								gov: n,
								mil: n,
								nom: n,
								org: n,
								prd: n,
								tm: n,
								asso: n,
								coop: n,
								gouv: n,
								medecin: n,
								notaires: n,
								pharmaciens: n,
								presse: n,
								veterinaire: n,
							},
						],
						kn: [1, { edu: n, gov: n, net: n, org: n }],
						kp: [1, { com: n, edu: n, gov: n, org: n, rep: n, tra: n }],
						kr: [
							1,
							{
								ac: n,
								ai: n,
								co: n,
								es: n,
								go: n,
								hs: n,
								io: n,
								it: n,
								kg: n,
								me: n,
								mil: n,
								ms: n,
								ne: n,
								or: n,
								pe: n,
								re: n,
								sc: n,
								busan: n,
								chungbuk: n,
								chungnam: n,
								daegu: n,
								daejeon: n,
								gangwon: n,
								gwangju: n,
								gyeongbuk: n,
								gyeonggi: n,
								gyeongnam: n,
								incheon: n,
								jeju: n,
								jeonbuk: n,
								jeonnam: n,
								seoul: n,
								ulsan: n,
								c01: r,
								"eliv-dns": r,
							},
						],
						kw: [1, { com: n, edu: n, emb: n, gov: n, ind: n, net: n, org: n }],
						ky: B,
						kz: [1, { com: n, edu: n, gov: n, mil: n, net: n, org: n, jcloud: r }],
						la: [1, { com: n, edu: n, gov: n, info: n, int: n, net: n, org: n, per: n, bnr: r }],
						lb: o,
						lc: [1, { co: n, com: n, edu: n, gov: n, net: n, org: n, oy: r }],
						li: n,
						lk: [
							1,
							{
								ac: n,
								assn: n,
								com: n,
								edu: n,
								gov: n,
								grp: n,
								hotel: n,
								int: n,
								ltd: n,
								net: n,
								ngo: n,
								org: n,
								sch: n,
								soc: n,
								web: n,
							},
						],
						lr: o,
						ls: [1, { ac: n, biz: n, co: n, edu: n, gov: n, info: n, net: n, org: n, sc: n }],
						lt: m,
						lu: [1, { "123website": r }],
						lv: [1, { asn: n, com: n, conf: n, edu: n, gov: n, id: n, mil: n, net: n, org: n }],
						ly: [1, { com: n, edu: n, gov: n, id: n, med: n, net: n, org: n, plc: n, sch: n }],
						ma: [1, { ac: n, co: n, gov: n, net: n, org: n, press: n }],
						mc: [1, { asso: n, tm: n }],
						md: [1, { ir: r }],
						me: [
							1,
							{
								ac: n,
								co: n,
								edu: n,
								gov: n,
								its: n,
								net: n,
								org: n,
								priv: n,
								c66: r,
								craft: r,
								edgestack: r,
								filegear: r,
								glitch: r,
								"filegear-sg": r,
								lohmus: r,
								barsy: r,
								mcdir: r,
								brasilia: r,
								ddns: r,
								dnsfor: r,
								hopto: r,
								loginto: r,
								noip: r,
								webhop: r,
								soundcast: r,
								tcp4: r,
								vp4: r,
								diskstation: r,
								dscloud: r,
								i234: r,
								myds: r,
								synology: r,
								transip: F,
								nohost: r,
							},
						],
						mg: [1, { co: n, com: n, edu: n, gov: n, mil: n, nom: n, org: n, prd: n }],
						mh: n,
						mil: n,
						mk: [1, { com: n, edu: n, gov: n, inf: n, name: n, net: n, org: n }],
						ml: [
							1,
							{
								ac: n,
								art: n,
								asso: n,
								com: n,
								edu: n,
								gouv: n,
								gov: n,
								info: n,
								inst: n,
								net: n,
								org: n,
								pr: n,
								presse: n,
							},
						],
						mm: k,
						mn: [1, { edu: n, gov: n, org: n, nyc: r }],
						mo: o,
						mobi: [1, { barsy: r, dscloud: r }],
						mp: [1, { ju: r }],
						mq: n,
						mr: m,
						ms: [1, { com: n, edu: n, gov: n, net: n, org: n, minisite: r }],
						mt: B,
						mu: [1, { ac: n, co: n, com: n, gov: n, net: n, or: n, org: n }],
						museum: n,
						mv: [
							1,
							{
								aero: n,
								biz: n,
								com: n,
								coop: n,
								edu: n,
								gov: n,
								info: n,
								int: n,
								mil: n,
								museum: n,
								name: n,
								net: n,
								org: n,
								pro: n,
							},
						],
						mw: [1, { ac: n, biz: n, co: n, com: n, coop: n, edu: n, gov: n, int: n, net: n, org: n }],
						mx: [1, { com: n, edu: n, gob: n, net: n, org: n }],
						my: [1, { biz: n, com: n, edu: n, gov: n, mil: n, name: n, net: n, org: n }],
						mz: [1, { ac: n, adv: n, co: n, edu: n, gov: n, mil: n, net: n, org: n }],
						na: [1, { alt: n, co: n, com: n, gov: n, net: n, org: n }],
						name: [1, { her: er, his: er }],
						nc: [1, { asso: n, nom: n }],
						ne: n,
						net: [
							1,
							{
								adobeaemcloud: r,
								"adobeio-static": r,
								adobeioruntime: r,
								akadns: r,
								akamai: r,
								"akamai-staging": r,
								akamaiedge: r,
								"akamaiedge-staging": r,
								akamaihd: r,
								"akamaihd-staging": r,
								akamaiorigin: r,
								"akamaiorigin-staging": r,
								akamaized: r,
								"akamaized-staging": r,
								edgekey: r,
								"edgekey-staging": r,
								edgesuite: r,
								"edgesuite-staging": r,
								alwaysdata: r,
								myamaze: r,
								cloudfront: r,
								appudo: r,
								"atlassian-dev": [0, { prod: Q }],
								myfritz: r,
								onavstack: r,
								shopselect: r,
								blackbaudcdn: r,
								boomla: r,
								bplaced: r,
								square7: r,
								cdn77: [0, { r: r }],
								"cdn77-ssl": r,
								gb: r,
								hu: r,
								jp: r,
								se: r,
								uk: r,
								clickrising: r,
								"ddns-ip": r,
								"dns-cloud": r,
								"dns-dynamic": r,
								cloudaccess: r,
								cloudflare: [2, { cdn: r }],
								cloudflareanycast: Q,
								cloudflarecn: Q,
								cloudflareglobal: Q,
								ctfcloud: r,
								"feste-ip": r,
								"knx-server": r,
								"static-access": r,
								cryptonomic: l,
								dattolocal: r,
								mydatto: r,
								debian: r,
								definima: r,
								deno: r,
								"at-band-camp": r,
								blogdns: r,
								"broke-it": r,
								buyshouses: r,
								dnsalias: r,
								dnsdojo: r,
								"does-it": r,
								dontexist: r,
								dynalias: r,
								dynathome: r,
								endofinternet: r,
								"from-az": r,
								"from-co": r,
								"from-la": r,
								"from-ny": r,
								"gets-it": r,
								"ham-radio-op": r,
								homeftp: r,
								homeip: r,
								homelinux: r,
								homeunix: r,
								"in-the-band": r,
								"is-a-chef": r,
								"is-a-geek": r,
								"isa-geek": r,
								"kicks-ass": r,
								"office-on-the": r,
								podzone: r,
								"scrapper-site": r,
								selfip: r,
								"sells-it": r,
								servebbs: r,
								serveftp: r,
								thruhere: r,
								webhop: r,
								casacam: r,
								dynu: r,
								dynv6: r,
								twmail: r,
								ru: r,
								channelsdvr: [2, { u: r }],
								fastly: [
									0,
									{
										freetls: r,
										map: r,
										prod: [0, { a: r, global: r }],
										ssl: [0, { a: r, b: r, global: r }],
									},
								],
								fastlylb: [2, { map: r }],
								edgeapp: r,
								"keyword-on": r,
								"live-on": r,
								"server-on": r,
								"cdn-edges": r,
								heteml: r,
								cloudfunctions: r,
								"grafana-dev": r,
								iobb: r,
								moonscale: r,
								"in-dsl": r,
								"in-vpn": r,
								oninferno: r,
								botdash: r,
								"apps-1and1": r,
								ipifony: r,
								cloudjiffy: [2, { "fra1-de": r, "west1-us": r }],
								elastx: [0, { "jls-sto1": r, "jls-sto2": r, "jls-sto3": r }],
								massivegrid: [
									0,
									{
										paas: [
											0,
											{ "fr-1": r, "lon-1": r, "lon-2": r, "ny-1": r, "ny-2": r, "sg-1": r },
										],
									},
								],
								saveincloud: [0, { jelastic: r, "nordeste-idc": r }],
								scaleforce: G,
								kinghost: r,
								uni5: r,
								krellian: r,
								ggff: r,
								localcert: r,
								localhostcert: r,
								localto: l,
								barsy: r,
								memset: r,
								"azure-api": r,
								"azure-mobile": r,
								azureedge: r,
								azurefd: r,
								azurestaticapps: [
									2,
									{
										1: r,
										2: r,
										3: r,
										4: r,
										5: r,
										6: r,
										7: r,
										centralus: r,
										eastasia: r,
										eastus2: r,
										westeurope: r,
										westus2: r,
									},
								],
								azurewebsites: r,
								cloudapp: r,
								trafficmanager: r,
								windows: [0, { core: [0, { blob: r }], servicebus: r }],
								mynetname: [0, { sn: r }],
								routingthecloud: r,
								bounceme: r,
								ddns: r,
								"eating-organic": r,
								mydissent: r,
								myeffect: r,
								mymediapc: r,
								mypsx: r,
								mysecuritycamera: r,
								nhlfan: r,
								"no-ip": r,
								pgafan: r,
								privatizehealthinsurance: r,
								redirectme: r,
								serveblog: r,
								serveminecraft: r,
								sytes: r,
								dnsup: r,
								hicam: r,
								"now-dns": r,
								ownip: r,
								vpndns: r,
								cloudycluster: r,
								ovh: [0, { hosting: l, webpaas: l }],
								rackmaze: r,
								myradweb: r,
								in: r,
								"subsc-pay": r,
								squares: r,
								schokokeks: r,
								"firewall-gateway": r,
								seidat: r,
								senseering: r,
								siteleaf: r,
								mafelo: r,
								myspreadshop: r,
								"vps-host": [2, { jelastic: [0, { atl: r, njs: r, ric: r }] }],
								srcf: [0, { soc: r, user: r }],
								supabase: r,
								dsmynas: r,
								familyds: r,
								ts: [2, { c: l }],
								torproject: [2, { pages: r }],
								vusercontent: r,
								"reserve-online": r,
								"community-pro": r,
								meinforum: r,
								yandexcloud: [2, { storage: r, website: r }],
								za: r,
							},
						],
						nf: [
							1,
							{ arts: n, com: n, firm: n, info: n, net: n, other: n, per: n, rec: n, store: n, web: n },
						],
						ng: [
							1,
							{
								com: n,
								edu: n,
								gov: n,
								i: n,
								mil: n,
								mobi: n,
								name: n,
								net: n,
								org: n,
								sch: n,
								biz: [2, { co: r, dl: r, go: r, lg: r, on: r }],
								col: r,
								firm: r,
								gen: r,
								ltd: r,
								ngo: r,
								plc: r,
							},
						],
						ni: [
							1,
							{
								ac: n,
								biz: n,
								co: n,
								com: n,
								edu: n,
								gob: n,
								in: n,
								info: n,
								int: n,
								mil: n,
								net: n,
								nom: n,
								org: n,
								web: n,
							},
						],
						nl: [
							1,
							{
								co: r,
								"hosting-cluster": r,
								gov: r,
								khplay: r,
								"123website": r,
								myspreadshop: r,
								transurl: l,
								cistron: r,
								demon: r,
							},
						],
						no: [
							1,
							{
								fhs: n,
								folkebibl: n,
								fylkesbibl: n,
								idrett: n,
								museum: n,
								priv: n,
								vgs: n,
								dep: n,
								herad: n,
								kommune: n,
								mil: n,
								stat: n,
								aa: eo,
								ah: eo,
								bu: eo,
								fm: eo,
								hl: eo,
								hm: eo,
								"jan-mayen": eo,
								mr: eo,
								nl: eo,
								nt: eo,
								of: eo,
								ol: eo,
								oslo: eo,
								rl: eo,
								sf: eo,
								st: eo,
								svalbard: eo,
								tm: eo,
								tr: eo,
								va: eo,
								vf: eo,
								akrehamn: n,
								"xn--krehamn-dxa": n,
								åkrehamn: n,
								algard: n,
								"xn--lgrd-poac": n,
								ålgård: n,
								arna: n,
								bronnoysund: n,
								"xn--brnnysund-m8ac": n,
								brønnøysund: n,
								brumunddal: n,
								bryne: n,
								drobak: n,
								"xn--drbak-wua": n,
								drøbak: n,
								egersund: n,
								fetsund: n,
								floro: n,
								"xn--flor-jra": n,
								florø: n,
								fredrikstad: n,
								hokksund: n,
								honefoss: n,
								"xn--hnefoss-q1a": n,
								hønefoss: n,
								jessheim: n,
								jorpeland: n,
								"xn--jrpeland-54a": n,
								jørpeland: n,
								kirkenes: n,
								kopervik: n,
								krokstadelva: n,
								langevag: n,
								"xn--langevg-jxa": n,
								langevåg: n,
								leirvik: n,
								mjondalen: n,
								"xn--mjndalen-64a": n,
								mjøndalen: n,
								"mo-i-rana": n,
								mosjoen: n,
								"xn--mosjen-eya": n,
								mosjøen: n,
								nesoddtangen: n,
								orkanger: n,
								osoyro: n,
								"xn--osyro-wua": n,
								osøyro: n,
								raholt: n,
								"xn--rholt-mra": n,
								råholt: n,
								sandnessjoen: n,
								"xn--sandnessjen-ogb": n,
								sandnessjøen: n,
								skedsmokorset: n,
								slattum: n,
								spjelkavik: n,
								stathelle: n,
								stavern: n,
								stjordalshalsen: n,
								"xn--stjrdalshalsen-sqb": n,
								stjørdalshalsen: n,
								tananger: n,
								tranby: n,
								vossevangen: n,
								aarborte: n,
								aejrie: n,
								afjord: n,
								"xn--fjord-lra": n,
								åfjord: n,
								agdenes: n,
								akershus: es,
								aknoluokta: n,
								"xn--koluokta-7ya57h": n,
								ákŋoluokta: n,
								al: n,
								"xn--l-1fa": n,
								ål: n,
								alaheadju: n,
								"xn--laheadju-7ya": n,
								álaheadju: n,
								alesund: n,
								"xn--lesund-hua": n,
								ålesund: n,
								alstahaug: n,
								alta: n,
								"xn--lt-liac": n,
								áltá: n,
								alvdal: n,
								amli: n,
								"xn--mli-tla": n,
								åmli: n,
								amot: n,
								"xn--mot-tla": n,
								åmot: n,
								andasuolo: n,
								andebu: n,
								andoy: n,
								"xn--andy-ira": n,
								andøy: n,
								ardal: n,
								"xn--rdal-poa": n,
								årdal: n,
								aremark: n,
								arendal: n,
								"xn--s-1fa": n,
								ås: n,
								aseral: n,
								"xn--seral-lra": n,
								åseral: n,
								asker: n,
								askim: n,
								askoy: n,
								"xn--asky-ira": n,
								askøy: n,
								askvoll: n,
								asnes: n,
								"xn--snes-poa": n,
								åsnes: n,
								audnedaln: n,
								aukra: n,
								aure: n,
								aurland: n,
								"aurskog-holand": n,
								"xn--aurskog-hland-jnb": n,
								"aurskog-høland": n,
								austevoll: n,
								austrheim: n,
								averoy: n,
								"xn--avery-yua": n,
								averøy: n,
								badaddja: n,
								"xn--bdddj-mrabd": n,
								bådåddjå: n,
								"xn--brum-voa": n,
								bærum: n,
								bahcavuotna: n,
								"xn--bhcavuotna-s4a": n,
								báhcavuotna: n,
								bahccavuotna: n,
								"xn--bhccavuotna-k7a": n,
								báhccavuotna: n,
								baidar: n,
								"xn--bidr-5nac": n,
								báidár: n,
								bajddar: n,
								"xn--bjddar-pta": n,
								bájddar: n,
								balat: n,
								"xn--blt-elab": n,
								bálát: n,
								balestrand: n,
								ballangen: n,
								balsfjord: n,
								bamble: n,
								bardu: n,
								barum: n,
								batsfjord: n,
								"xn--btsfjord-9za": n,
								båtsfjord: n,
								bearalvahki: n,
								"xn--bearalvhki-y4a": n,
								bearalváhki: n,
								beardu: n,
								beiarn: n,
								berg: n,
								bergen: n,
								berlevag: n,
								"xn--berlevg-jxa": n,
								berlevåg: n,
								bievat: n,
								"xn--bievt-0qa": n,
								bievát: n,
								bindal: n,
								birkenes: n,
								bjarkoy: n,
								"xn--bjarky-fya": n,
								bjarkøy: n,
								bjerkreim: n,
								bjugn: n,
								bodo: n,
								"xn--bod-2na": n,
								bodø: n,
								bokn: n,
								bomlo: n,
								"xn--bmlo-gra": n,
								bømlo: n,
								bremanger: n,
								bronnoy: n,
								"xn--brnny-wuac": n,
								brønnøy: n,
								budejju: n,
								buskerud: es,
								bygland: n,
								bykle: n,
								cahcesuolo: n,
								"xn--hcesuolo-7ya35b": n,
								čáhcesuolo: n,
								davvenjarga: n,
								"xn--davvenjrga-y4a": n,
								davvenjárga: n,
								davvesiida: n,
								deatnu: n,
								dielddanuorri: n,
								divtasvuodna: n,
								divttasvuotna: n,
								donna: n,
								"xn--dnna-gra": n,
								dønna: n,
								dovre: n,
								drammen: n,
								drangedal: n,
								dyroy: n,
								"xn--dyry-ira": n,
								dyrøy: n,
								eid: n,
								eidfjord: n,
								eidsberg: n,
								eidskog: n,
								eidsvoll: n,
								eigersund: n,
								elverum: n,
								enebakk: n,
								engerdal: n,
								etne: n,
								etnedal: n,
								evenassi: n,
								"xn--eveni-0qa01ga": n,
								evenášši: n,
								evenes: n,
								"evje-og-hornnes": n,
								farsund: n,
								fauske: n,
								fedje: n,
								fet: n,
								finnoy: n,
								"xn--finny-yua": n,
								finnøy: n,
								fitjar: n,
								fjaler: n,
								fjell: n,
								fla: n,
								"xn--fl-zia": n,
								flå: n,
								flakstad: n,
								flatanger: n,
								flekkefjord: n,
								flesberg: n,
								flora: n,
								folldal: n,
								forde: n,
								"xn--frde-gra": n,
								førde: n,
								forsand: n,
								fosnes: n,
								"xn--frna-woa": n,
								fræna: n,
								frana: n,
								frei: n,
								frogn: n,
								froland: n,
								frosta: n,
								froya: n,
								"xn--frya-hra": n,
								frøya: n,
								fuoisku: n,
								fuossko: n,
								fusa: n,
								fyresdal: n,
								gaivuotna: n,
								"xn--givuotna-8ya": n,
								gáivuotna: n,
								galsa: n,
								"xn--gls-elac": n,
								gálsá: n,
								gamvik: n,
								gangaviika: n,
								"xn--ggaviika-8ya47h": n,
								gáŋgaviika: n,
								gaular: n,
								gausdal: n,
								giehtavuoatna: n,
								gildeskal: n,
								"xn--gildeskl-g0a": n,
								gildeskål: n,
								giske: n,
								gjemnes: n,
								gjerdrum: n,
								gjerstad: n,
								gjesdal: n,
								gjovik: n,
								"xn--gjvik-wua": n,
								gjøvik: n,
								gloppen: n,
								gol: n,
								gran: n,
								grane: n,
								granvin: n,
								gratangen: n,
								grimstad: n,
								grong: n,
								grue: n,
								gulen: n,
								guovdageaidnu: n,
								ha: n,
								"xn--h-2fa": n,
								hå: n,
								habmer: n,
								"xn--hbmer-xqa": n,
								hábmer: n,
								hadsel: n,
								"xn--hgebostad-g3a": n,
								hægebostad: n,
								hagebostad: n,
								halden: n,
								halsa: n,
								hamar: n,
								hamaroy: n,
								hammarfeasta: n,
								"xn--hmmrfeasta-s4ac": n,
								hámmárfeasta: n,
								hammerfest: n,
								hapmir: n,
								"xn--hpmir-xqa": n,
								hápmir: n,
								haram: n,
								hareid: n,
								harstad: n,
								hasvik: n,
								hattfjelldal: n,
								haugesund: n,
								hedmark: [0, { os: n, valer: n, "xn--vler-qoa": n, våler: n }],
								hemne: n,
								hemnes: n,
								hemsedal: n,
								hitra: n,
								hjartdal: n,
								hjelmeland: n,
								hobol: n,
								"xn--hobl-ira": n,
								hobøl: n,
								hof: n,
								hol: n,
								hole: n,
								holmestrand: n,
								holtalen: n,
								"xn--holtlen-hxa": n,
								holtålen: n,
								hordaland: [0, { os: n }],
								hornindal: n,
								horten: n,
								hoyanger: n,
								"xn--hyanger-q1a": n,
								høyanger: n,
								hoylandet: n,
								"xn--hylandet-54a": n,
								høylandet: n,
								hurdal: n,
								hurum: n,
								hvaler: n,
								hyllestad: n,
								ibestad: n,
								inderoy: n,
								"xn--indery-fya": n,
								inderøy: n,
								iveland: n,
								ivgu: n,
								jevnaker: n,
								jolster: n,
								"xn--jlster-bya": n,
								jølster: n,
								jondal: n,
								kafjord: n,
								"xn--kfjord-iua": n,
								kåfjord: n,
								karasjohka: n,
								"xn--krjohka-hwab49j": n,
								kárášjohka: n,
								karasjok: n,
								karlsoy: n,
								karmoy: n,
								"xn--karmy-yua": n,
								karmøy: n,
								kautokeino: n,
								klabu: n,
								"xn--klbu-woa": n,
								klæbu: n,
								klepp: n,
								kongsberg: n,
								kongsvinger: n,
								kraanghke: n,
								"xn--kranghke-b0a": n,
								kråanghke: n,
								kragero: n,
								"xn--krager-gya": n,
								kragerø: n,
								kristiansand: n,
								kristiansund: n,
								krodsherad: n,
								"xn--krdsherad-m8a": n,
								krødsherad: n,
								"xn--kvfjord-nxa": n,
								kvæfjord: n,
								"xn--kvnangen-k0a": n,
								kvænangen: n,
								kvafjord: n,
								kvalsund: n,
								kvam: n,
								kvanangen: n,
								kvinesdal: n,
								kvinnherad: n,
								kviteseid: n,
								kvitsoy: n,
								"xn--kvitsy-fya": n,
								kvitsøy: n,
								laakesvuemie: n,
								"xn--lrdal-sra": n,
								lærdal: n,
								lahppi: n,
								"xn--lhppi-xqa": n,
								láhppi: n,
								lardal: n,
								larvik: n,
								lavagis: n,
								lavangen: n,
								leangaviika: n,
								"xn--leagaviika-52b": n,
								leaŋgaviika: n,
								lebesby: n,
								leikanger: n,
								leirfjord: n,
								leka: n,
								leksvik: n,
								lenvik: n,
								lerdal: n,
								lesja: n,
								levanger: n,
								lier: n,
								lierne: n,
								lillehammer: n,
								lillesand: n,
								lindas: n,
								"xn--linds-pra": n,
								lindås: n,
								lindesnes: n,
								loabat: n,
								"xn--loabt-0qa": n,
								loabát: n,
								lodingen: n,
								"xn--ldingen-q1a": n,
								lødingen: n,
								lom: n,
								loppa: n,
								lorenskog: n,
								"xn--lrenskog-54a": n,
								lørenskog: n,
								loten: n,
								"xn--lten-gra": n,
								løten: n,
								lund: n,
								lunner: n,
								luroy: n,
								"xn--lury-ira": n,
								lurøy: n,
								luster: n,
								lyngdal: n,
								lyngen: n,
								malatvuopmi: n,
								"xn--mlatvuopmi-s4a": n,
								málatvuopmi: n,
								malselv: n,
								"xn--mlselv-iua": n,
								målselv: n,
								malvik: n,
								mandal: n,
								marker: n,
								marnardal: n,
								masfjorden: n,
								masoy: n,
								"xn--msy-ula0h": n,
								måsøy: n,
								"matta-varjjat": n,
								"xn--mtta-vrjjat-k7af": n,
								"mátta-várjjat": n,
								meland: n,
								meldal: n,
								melhus: n,
								meloy: n,
								"xn--mely-ira": n,
								meløy: n,
								meraker: n,
								"xn--merker-kua": n,
								meråker: n,
								midsund: n,
								"midtre-gauldal": n,
								moareke: n,
								"xn--moreke-jua": n,
								moåreke: n,
								modalen: n,
								modum: n,
								molde: n,
								"more-og-romsdal": [0, { heroy: n, sande: n }],
								"xn--mre-og-romsdal-qqb": [0, { "xn--hery-ira": n, sande: n }],
								"møre-og-romsdal": [0, { herøy: n, sande: n }],
								moskenes: n,
								moss: n,
								mosvik: n,
								muosat: n,
								"xn--muost-0qa": n,
								muosát: n,
								naamesjevuemie: n,
								"xn--nmesjevuemie-tcba": n,
								nååmesjevuemie: n,
								"xn--nry-yla5g": n,
								nærøy: n,
								namdalseid: n,
								namsos: n,
								namsskogan: n,
								nannestad: n,
								naroy: n,
								narviika: n,
								narvik: n,
								naustdal: n,
								navuotna: n,
								"xn--nvuotna-hwa": n,
								návuotna: n,
								"nedre-eiker": n,
								nesna: n,
								nesodden: n,
								nesseby: n,
								nesset: n,
								nissedal: n,
								nittedal: n,
								"nord-aurdal": n,
								"nord-fron": n,
								"nord-odal": n,
								norddal: n,
								nordkapp: n,
								nordland: [0, { bo: n, "xn--b-5ga": n, bø: n, heroy: n, "xn--hery-ira": n, herøy: n }],
								"nordre-land": n,
								nordreisa: n,
								"nore-og-uvdal": n,
								notodden: n,
								notteroy: n,
								"xn--nttery-byae": n,
								nøtterøy: n,
								odda: n,
								oksnes: n,
								"xn--ksnes-uua": n,
								øksnes: n,
								omasvuotna: n,
								oppdal: n,
								oppegard: n,
								"xn--oppegrd-ixa": n,
								oppegård: n,
								orkdal: n,
								orland: n,
								"xn--rland-uua": n,
								ørland: n,
								orskog: n,
								"xn--rskog-uua": n,
								ørskog: n,
								orsta: n,
								"xn--rsta-fra": n,
								ørsta: n,
								osen: n,
								osteroy: n,
								"xn--ostery-fya": n,
								osterøy: n,
								ostfold: [0, { valer: n }],
								"xn--stfold-9xa": [0, { "xn--vler-qoa": n }],
								østfold: [0, { våler: n }],
								"ostre-toten": n,
								"xn--stre-toten-zcb": n,
								"østre-toten": n,
								overhalla: n,
								"ovre-eiker": n,
								"xn--vre-eiker-k8a": n,
								"øvre-eiker": n,
								oyer: n,
								"xn--yer-zna": n,
								øyer: n,
								oygarden: n,
								"xn--ygarden-p1a": n,
								øygarden: n,
								"oystre-slidre": n,
								"xn--ystre-slidre-ujb": n,
								"øystre-slidre": n,
								porsanger: n,
								porsangu: n,
								"xn--porsgu-sta26f": n,
								porsáŋgu: n,
								porsgrunn: n,
								rade: n,
								"xn--rde-ula": n,
								råde: n,
								radoy: n,
								"xn--rady-ira": n,
								radøy: n,
								"xn--rlingen-mxa": n,
								rælingen: n,
								rahkkeravju: n,
								"xn--rhkkervju-01af": n,
								ráhkkerávju: n,
								raisa: n,
								"xn--risa-5na": n,
								ráisa: n,
								rakkestad: n,
								ralingen: n,
								rana: n,
								randaberg: n,
								rauma: n,
								rendalen: n,
								rennebu: n,
								rennesoy: n,
								"xn--rennesy-v1a": n,
								rennesøy: n,
								rindal: n,
								ringebu: n,
								ringerike: n,
								ringsaker: n,
								risor: n,
								"xn--risr-ira": n,
								risør: n,
								rissa: n,
								roan: n,
								rodoy: n,
								"xn--rdy-0nab": n,
								rødøy: n,
								rollag: n,
								romsa: n,
								romskog: n,
								"xn--rmskog-bya": n,
								rømskog: n,
								roros: n,
								"xn--rros-gra": n,
								røros: n,
								rost: n,
								"xn--rst-0na": n,
								røst: n,
								royken: n,
								"xn--ryken-vua": n,
								røyken: n,
								royrvik: n,
								"xn--ryrvik-bya": n,
								røyrvik: n,
								ruovat: n,
								rygge: n,
								salangen: n,
								salat: n,
								"xn--slat-5na": n,
								sálat: n,
								"xn--slt-elab": n,
								sálát: n,
								saltdal: n,
								samnanger: n,
								sandefjord: n,
								sandnes: n,
								sandoy: n,
								"xn--sandy-yua": n,
								sandøy: n,
								sarpsborg: n,
								sauda: n,
								sauherad: n,
								sel: n,
								selbu: n,
								selje: n,
								seljord: n,
								siellak: n,
								sigdal: n,
								siljan: n,
								sirdal: n,
								skanit: n,
								"xn--sknit-yqa": n,
								skánit: n,
								skanland: n,
								"xn--sknland-fxa": n,
								skånland: n,
								skaun: n,
								skedsmo: n,
								ski: n,
								skien: n,
								skierva: n,
								"xn--skierv-uta": n,
								skiervá: n,
								skiptvet: n,
								skjak: n,
								"xn--skjk-soa": n,
								skjåk: n,
								skjervoy: n,
								"xn--skjervy-v1a": n,
								skjervøy: n,
								skodje: n,
								smola: n,
								"xn--smla-hra": n,
								smøla: n,
								snaase: n,
								"xn--snase-nra": n,
								snåase: n,
								snasa: n,
								"xn--snsa-roa": n,
								snåsa: n,
								snillfjord: n,
								snoasa: n,
								sogndal: n,
								sogne: n,
								"xn--sgne-gra": n,
								søgne: n,
								sokndal: n,
								sola: n,
								solund: n,
								somna: n,
								"xn--smna-gra": n,
								sømna: n,
								"sondre-land": n,
								"xn--sndre-land-0cb": n,
								"søndre-land": n,
								songdalen: n,
								"sor-aurdal": n,
								"xn--sr-aurdal-l8a": n,
								"sør-aurdal": n,
								"sor-fron": n,
								"xn--sr-fron-q1a": n,
								"sør-fron": n,
								"sor-odal": n,
								"xn--sr-odal-q1a": n,
								"sør-odal": n,
								"sor-varanger": n,
								"xn--sr-varanger-ggb": n,
								"sør-varanger": n,
								sorfold: n,
								"xn--srfold-bya": n,
								sørfold: n,
								sorreisa: n,
								"xn--srreisa-q1a": n,
								sørreisa: n,
								sortland: n,
								sorum: n,
								"xn--srum-gra": n,
								sørum: n,
								spydeberg: n,
								stange: n,
								stavanger: n,
								steigen: n,
								steinkjer: n,
								stjordal: n,
								"xn--stjrdal-s1a": n,
								stjørdal: n,
								stokke: n,
								"stor-elvdal": n,
								stord: n,
								stordal: n,
								storfjord: n,
								strand: n,
								stranda: n,
								stryn: n,
								sula: n,
								suldal: n,
								sund: n,
								sunndal: n,
								surnadal: n,
								sveio: n,
								svelvik: n,
								sykkylven: n,
								tana: n,
								telemark: [0, { bo: n, "xn--b-5ga": n, bø: n }],
								time: n,
								tingvoll: n,
								tinn: n,
								tjeldsund: n,
								tjome: n,
								"xn--tjme-hra": n,
								tjøme: n,
								tokke: n,
								tolga: n,
								tonsberg: n,
								"xn--tnsberg-q1a": n,
								tønsberg: n,
								torsken: n,
								"xn--trna-woa": n,
								træna: n,
								trana: n,
								tranoy: n,
								"xn--trany-yua": n,
								tranøy: n,
								troandin: n,
								trogstad: n,
								"xn--trgstad-r1a": n,
								trøgstad: n,
								tromsa: n,
								tromso: n,
								"xn--troms-zua": n,
								tromsø: n,
								trondheim: n,
								trysil: n,
								tvedestrand: n,
								tydal: n,
								tynset: n,
								tysfjord: n,
								tysnes: n,
								"xn--tysvr-vra": n,
								tysvær: n,
								tysvar: n,
								ullensaker: n,
								ullensvang: n,
								ulvik: n,
								unjarga: n,
								"xn--unjrga-rta": n,
								unjárga: n,
								utsira: n,
								vaapste: n,
								vadso: n,
								"xn--vads-jra": n,
								vadsø: n,
								"xn--vry-yla5g": n,
								værøy: n,
								vaga: n,
								"xn--vg-yiab": n,
								vågå: n,
								vagan: n,
								"xn--vgan-qoa": n,
								vågan: n,
								vagsoy: n,
								"xn--vgsy-qoa0j": n,
								vågsøy: n,
								vaksdal: n,
								valle: n,
								vang: n,
								vanylven: n,
								vardo: n,
								"xn--vard-jra": n,
								vardø: n,
								varggat: n,
								"xn--vrggt-xqad": n,
								várggát: n,
								varoy: n,
								vefsn: n,
								vega: n,
								vegarshei: n,
								"xn--vegrshei-c0a": n,
								vegårshei: n,
								vennesla: n,
								verdal: n,
								verran: n,
								vestby: n,
								vestfold: [0, { sande: n }],
								vestnes: n,
								"vestre-slidre": n,
								"vestre-toten": n,
								vestvagoy: n,
								"xn--vestvgy-ixa6o": n,
								vestvågøy: n,
								vevelstad: n,
								vik: n,
								vikna: n,
								vindafjord: n,
								voagat: n,
								volda: n,
								voss: n,
								co: r,
								"123hjemmeside": r,
								myspreadshop: r,
							},
						],
						np: k,
						nr: ea,
						nu: [1, { merseine: r, mine: r, shacknet: r, enterprisecloud: r }],
						nz: [
							1,
							{
								ac: n,
								co: n,
								cri: n,
								geek: n,
								gen: n,
								govt: n,
								health: n,
								iwi: n,
								kiwi: n,
								maori: n,
								"xn--mori-qsa": n,
								māori: n,
								mil: n,
								net: n,
								org: n,
								parliament: n,
								school: n,
								cloudns: r,
							},
						],
						om: [1, { co: n, com: n, edu: n, gov: n, med: n, museum: n, net: n, org: n, pro: n }],
						onion: n,
						org: [
							1,
							{
								altervista: r,
								pimienta: r,
								poivron: r,
								potager: r,
								sweetpepper: r,
								cdn77: [0, { c: r, rsc: r }],
								"cdn77-secure": [0, { origin: [0, { ssl: r }] }],
								ae: r,
								cloudns: r,
								"ip-dynamic": r,
								ddnss: r,
								dpdns: r,
								duckdns: r,
								tunk: r,
								blogdns: r,
								blogsite: r,
								boldlygoingnowhere: r,
								dnsalias: r,
								dnsdojo: r,
								doesntexist: r,
								dontexist: r,
								doomdns: r,
								dvrdns: r,
								dynalias: r,
								dyndns: [2, { go: r, home: r }],
								endofinternet: r,
								endoftheinternet: r,
								"from-me": r,
								"game-host": r,
								gotdns: r,
								"hobby-site": r,
								homedns: r,
								homeftp: r,
								homelinux: r,
								homeunix: r,
								"is-a-bruinsfan": r,
								"is-a-candidate": r,
								"is-a-celticsfan": r,
								"is-a-chef": r,
								"is-a-geek": r,
								"is-a-knight": r,
								"is-a-linux-user": r,
								"is-a-patsfan": r,
								"is-a-soxfan": r,
								"is-found": r,
								"is-lost": r,
								"is-saved": r,
								"is-very-bad": r,
								"is-very-evil": r,
								"is-very-good": r,
								"is-very-nice": r,
								"is-very-sweet": r,
								"isa-geek": r,
								"kicks-ass": r,
								misconfused: r,
								podzone: r,
								readmyblog: r,
								selfip: r,
								sellsyourhome: r,
								servebbs: r,
								serveftp: r,
								servegame: r,
								"stuff-4-sale": r,
								webhop: r,
								accesscam: r,
								camdvr: r,
								freeddns: r,
								mywire: r,
								webredirect: r,
								twmail: r,
								eu: [
									2,
									{
										al: r,
										asso: r,
										at: r,
										au: r,
										be: r,
										bg: r,
										ca: r,
										cd: r,
										ch: r,
										cn: r,
										cy: r,
										cz: r,
										de: r,
										dk: r,
										edu: r,
										ee: r,
										es: r,
										fi: r,
										fr: r,
										gr: r,
										hr: r,
										hu: r,
										ie: r,
										il: r,
										in: r,
										int: r,
										is: r,
										it: r,
										jp: r,
										kr: r,
										lt: r,
										lu: r,
										lv: r,
										me: r,
										mk: r,
										mt: r,
										my: r,
										net: r,
										ng: r,
										nl: r,
										no: r,
										nz: r,
										pl: r,
										pt: r,
										ro: r,
										ru: r,
										se: r,
										si: r,
										sk: r,
										tr: r,
										uk: r,
										us: r,
									},
								],
								fedorainfracloud: r,
								fedorapeople: r,
								fedoraproject: [0, { cloud: r, os: K, stg: [0, { os: K }] }],
								freedesktop: r,
								hatenadiary: r,
								hepforge: r,
								"in-dsl": r,
								"in-vpn": r,
								js: r,
								barsy: r,
								mayfirst: r,
								routingthecloud: r,
								bmoattachments: r,
								"cable-modem": r,
								collegefan: r,
								couchpotatofries: r,
								hopto: r,
								mlbfan: r,
								myftp: r,
								mysecuritycamera: r,
								nflfan: r,
								"no-ip": r,
								"read-books": r,
								ufcfan: r,
								zapto: r,
								dynserv: r,
								"now-dns": r,
								"is-local": r,
								httpbin: r,
								pubtls: r,
								jpn: r,
								"my-firewall": r,
								myfirewall: r,
								spdns: r,
								"small-web": r,
								dsmynas: r,
								familyds: r,
								teckids: et,
								tuxfamily: r,
								diskstation: r,
								hk: r,
								us: r,
								toolforge: r,
								wmcloud: r,
								wmflabs: r,
								za: r,
							},
						],
						pa: [
							1,
							{ abo: n, ac: n, com: n, edu: n, gob: n, ing: n, med: n, net: n, nom: n, org: n, sld: n },
						],
						pe: [1, { com: n, edu: n, gob: n, mil: n, net: n, nom: n, org: n }],
						pf: [1, { com: n, edu: n, org: n }],
						pg: k,
						ph: [1, { com: n, edu: n, gov: n, i: n, mil: n, net: n, ngo: n, org: n, cloudns: r }],
						pk: [
							1,
							{
								ac: n,
								biz: n,
								com: n,
								edu: n,
								fam: n,
								gkp: n,
								gob: n,
								gog: n,
								gok: n,
								gop: n,
								gos: n,
								gov: n,
								net: n,
								org: n,
								web: n,
							},
						],
						pl: [
							1,
							{
								com: n,
								net: n,
								org: n,
								agro: n,
								aid: n,
								atm: n,
								auto: n,
								biz: n,
								edu: n,
								gmina: n,
								gsm: n,
								info: n,
								mail: n,
								media: n,
								miasta: n,
								mil: n,
								nieruchomosci: n,
								nom: n,
								pc: n,
								powiat: n,
								priv: n,
								realestate: n,
								rel: n,
								sex: n,
								shop: n,
								sklep: n,
								sos: n,
								szkola: n,
								targi: n,
								tm: n,
								tourism: n,
								travel: n,
								turystyka: n,
								gov: [
									1,
									{
										ap: n,
										griw: n,
										ic: n,
										is: n,
										kmpsp: n,
										konsulat: n,
										kppsp: n,
										kwp: n,
										kwpsp: n,
										mup: n,
										mw: n,
										oia: n,
										oirm: n,
										oke: n,
										oow: n,
										oschr: n,
										oum: n,
										pa: n,
										pinb: n,
										piw: n,
										po: n,
										pr: n,
										psp: n,
										psse: n,
										pup: n,
										rzgw: n,
										sa: n,
										sdn: n,
										sko: n,
										so: n,
										sr: n,
										starostwo: n,
										ug: n,
										ugim: n,
										um: n,
										umig: n,
										upow: n,
										uppo: n,
										us: n,
										uw: n,
										uzs: n,
										wif: n,
										wiih: n,
										winb: n,
										wios: n,
										witd: n,
										wiw: n,
										wkz: n,
										wsa: n,
										wskr: n,
										wsse: n,
										wuoz: n,
										wzmiuw: n,
										zp: n,
										zpisdn: n,
									},
								],
								augustow: n,
								"babia-gora": n,
								bedzin: n,
								beskidy: n,
								bialowieza: n,
								bialystok: n,
								bielawa: n,
								bieszczady: n,
								boleslawiec: n,
								bydgoszcz: n,
								bytom: n,
								cieszyn: n,
								czeladz: n,
								czest: n,
								dlugoleka: n,
								elblag: n,
								elk: n,
								glogow: n,
								gniezno: n,
								gorlice: n,
								grajewo: n,
								ilawa: n,
								jaworzno: n,
								"jelenia-gora": n,
								jgora: n,
								kalisz: n,
								karpacz: n,
								kartuzy: n,
								kaszuby: n,
								katowice: n,
								"kazimierz-dolny": n,
								kepno: n,
								ketrzyn: n,
								klodzko: n,
								kobierzyce: n,
								kolobrzeg: n,
								konin: n,
								konskowola: n,
								kutno: n,
								lapy: n,
								lebork: n,
								legnica: n,
								lezajsk: n,
								limanowa: n,
								lomza: n,
								lowicz: n,
								lubin: n,
								lukow: n,
								malbork: n,
								malopolska: n,
								mazowsze: n,
								mazury: n,
								mielec: n,
								mielno: n,
								mragowo: n,
								naklo: n,
								nowaruda: n,
								nysa: n,
								olawa: n,
								olecko: n,
								olkusz: n,
								olsztyn: n,
								opoczno: n,
								opole: n,
								ostroda: n,
								ostroleka: n,
								ostrowiec: n,
								ostrowwlkp: n,
								pila: n,
								pisz: n,
								podhale: n,
								podlasie: n,
								polkowice: n,
								pomorskie: n,
								pomorze: n,
								prochowice: n,
								pruszkow: n,
								przeworsk: n,
								pulawy: n,
								radom: n,
								"rawa-maz": n,
								rybnik: n,
								rzeszow: n,
								sanok: n,
								sejny: n,
								skoczow: n,
								slask: n,
								slupsk: n,
								sosnowiec: n,
								"stalowa-wola": n,
								starachowice: n,
								stargard: n,
								suwalki: n,
								swidnica: n,
								swiebodzin: n,
								swinoujscie: n,
								szczecin: n,
								szczytno: n,
								tarnobrzeg: n,
								tgory: n,
								turek: n,
								tychy: n,
								ustka: n,
								walbrzych: n,
								warmia: n,
								warszawa: n,
								waw: n,
								wegrow: n,
								wielun: n,
								wlocl: n,
								wloclawek: n,
								wodzislaw: n,
								wolomin: n,
								wroclaw: n,
								zachpomor: n,
								zagan: n,
								zarow: n,
								zgora: n,
								zgorzelec: n,
								art: r,
								gliwice: r,
								krakow: r,
								poznan: r,
								wroc: r,
								zakopane: r,
								beep: r,
								"ecommerce-shop": r,
								cfolks: r,
								dfirma: r,
								dkonto: r,
								you2: r,
								shoparena: r,
								homesklep: r,
								sdscloud: r,
								unicloud: r,
								lodz: r,
								pabianice: r,
								plock: r,
								sieradz: r,
								skierniewice: r,
								zgierz: r,
								krasnik: r,
								leczna: r,
								lubartow: r,
								lublin: r,
								poniatowa: r,
								swidnik: r,
								co: r,
								torun: r,
								simplesite: r,
								myspreadshop: r,
								gda: r,
								gdansk: r,
								gdynia: r,
								med: r,
								sopot: r,
								bielsko: r,
							},
						],
						pm: [1, { own: r, name: r }],
						pn: [1, { co: n, edu: n, gov: n, net: n, org: n }],
						post: n,
						pr: [
							1,
							{
								biz: n,
								com: n,
								edu: n,
								gov: n,
								info: n,
								isla: n,
								name: n,
								net: n,
								org: n,
								pro: n,
								ac: n,
								est: n,
								prof: n,
							},
						],
						pro: [
							1,
							{
								aaa: n,
								aca: n,
								acct: n,
								avocat: n,
								bar: n,
								cpa: n,
								eng: n,
								jur: n,
								law: n,
								med: n,
								recht: n,
								"12chars": r,
								cloudns: r,
								barsy: r,
								ngrok: r,
							},
						],
						ps: [1, { com: n, edu: n, gov: n, net: n, org: n, plo: n, sec: n }],
						pt: [
							1,
							{ com: n, edu: n, gov: n, int: n, net: n, nome: n, org: n, publ: n, "123paginaweb": r },
						],
						pw: [1, { gov: n, cloudns: r, x443: r }],
						py: [1, { com: n, coop: n, edu: n, gov: n, mil: n, net: n, org: n }],
						qa: [1, { com: n, edu: n, gov: n, mil: n, name: n, net: n, org: n, sch: n }],
						re: [1, { asso: n, com: n, netlib: r, can: r }],
						ro: [
							1,
							{
								arts: n,
								com: n,
								firm: n,
								info: n,
								nom: n,
								nt: n,
								org: n,
								rec: n,
								store: n,
								tm: n,
								www: n,
								co: r,
								shop: r,
								barsy: r,
							},
						],
						rs: [1, { ac: n, co: n, edu: n, gov: n, in: n, org: n, brendly: X, barsy: r, ox: r }],
						ru: [
							1,
							{
								ac: r,
								edu: r,
								gov: r,
								int: r,
								mil: r,
								eurodir: r,
								adygeya: r,
								bashkiria: r,
								bir: r,
								cbg: r,
								com: r,
								dagestan: r,
								grozny: r,
								kalmykia: r,
								kustanai: r,
								marine: r,
								mordovia: r,
								msk: r,
								mytis: r,
								nalchik: r,
								nov: r,
								pyatigorsk: r,
								spb: r,
								vladikavkaz: r,
								vladimir: r,
								na4u: r,
								mircloud: r,
								myjino: [2, { hosting: l, landing: l, spectrum: l, vps: l }],
								cldmail: [0, { hb: r }],
								mcdir: [2, { vps: r }],
								mcpre: r,
								net: r,
								org: r,
								pp: r,
								lk3: r,
								ras: r,
							},
						],
						rw: [1, { ac: n, co: n, coop: n, gov: n, mil: n, net: n, org: n }],
						sa: [1, { com: n, edu: n, gov: n, med: n, net: n, org: n, pub: n, sch: n }],
						sb: o,
						sc: o,
						sd: [1, { com: n, edu: n, gov: n, info: n, med: n, net: n, org: n, tv: n }],
						se: [
							1,
							{
								a: n,
								ac: n,
								b: n,
								bd: n,
								brand: n,
								c: n,
								d: n,
								e: n,
								f: n,
								fh: n,
								fhsk: n,
								fhv: n,
								g: n,
								h: n,
								i: n,
								k: n,
								komforb: n,
								kommunalforbund: n,
								komvux: n,
								l: n,
								lanbib: n,
								m: n,
								n: n,
								naturbruksgymn: n,
								o: n,
								org: n,
								p: n,
								parti: n,
								pp: n,
								press: n,
								r: n,
								s: n,
								t: n,
								tm: n,
								u: n,
								w: n,
								x: n,
								y: n,
								z: n,
								com: r,
								iopsys: r,
								"123minsida": r,
								itcouldbewor: r,
								myspreadshop: r,
							},
						],
						sg: [1, { com: n, edu: n, gov: n, net: n, org: n, enscaled: r }],
						sh: [
							1,
							{
								com: n,
								gov: n,
								mil: n,
								net: n,
								org: n,
								hashbang: r,
								botda: r,
								platform: [0, { ent: r, eu: r, us: r }],
								now: r,
							},
						],
						si: [1, { f5: r, gitapp: r, gitpage: r }],
						sj: n,
						sk: n,
						sl: o,
						sm: n,
						sn: [1, { art: n, com: n, edu: n, gouv: n, org: n, perso: n, univ: n }],
						so: [1, { com: n, edu: n, gov: n, me: n, net: n, org: n, surveys: r }],
						sr: n,
						ss: [1, { biz: n, co: n, com: n, edu: n, gov: n, me: n, net: n, org: n, sch: n }],
						st: [
							1,
							{
								co: n,
								com: n,
								consulado: n,
								edu: n,
								embaixada: n,
								mil: n,
								net: n,
								org: n,
								principe: n,
								saotome: n,
								store: n,
								helioho: r,
								kirara: r,
								noho: r,
							},
						],
						su: [
							1,
							{
								abkhazia: r,
								adygeya: r,
								aktyubinsk: r,
								arkhangelsk: r,
								armenia: r,
								ashgabad: r,
								azerbaijan: r,
								balashov: r,
								bashkiria: r,
								bryansk: r,
								bukhara: r,
								chimkent: r,
								dagestan: r,
								"east-kazakhstan": r,
								exnet: r,
								georgia: r,
								grozny: r,
								ivanovo: r,
								jambyl: r,
								kalmykia: r,
								kaluga: r,
								karacol: r,
								karaganda: r,
								karelia: r,
								khakassia: r,
								krasnodar: r,
								kurgan: r,
								kustanai: r,
								lenug: r,
								mangyshlak: r,
								mordovia: r,
								msk: r,
								murmansk: r,
								nalchik: r,
								navoi: r,
								"north-kazakhstan": r,
								nov: r,
								obninsk: r,
								penza: r,
								pokrovsk: r,
								sochi: r,
								spb: r,
								tashkent: r,
								termez: r,
								togliatti: r,
								troitsk: r,
								tselinograd: r,
								tula: r,
								tuva: r,
								vladikavkaz: r,
								vladimir: r,
								vologda: r,
							},
						],
						sv: [1, { com: n, edu: n, gob: n, org: n, red: n }],
						sx: m,
						sy: s,
						sz: [1, { ac: n, co: n, org: n }],
						tc: n,
						td: n,
						tel: n,
						tf: [1, { sch: r }],
						tg: n,
						th: [1, { ac: n, co: n, go: n, in: n, mi: n, net: n, or: n, online: r, shop: r }],
						tj: [
							1,
							{
								ac: n,
								biz: n,
								co: n,
								com: n,
								edu: n,
								go: n,
								gov: n,
								int: n,
								mil: n,
								name: n,
								net: n,
								nic: n,
								org: n,
								test: n,
								web: n,
							},
						],
						tk: n,
						tl: m,
						tm: [1, { co: n, com: n, edu: n, gov: n, mil: n, net: n, nom: n, org: n }],
						tn: [
							1,
							{
								com: n,
								ens: n,
								fin: n,
								gov: n,
								ind: n,
								info: n,
								intl: n,
								mincom: n,
								nat: n,
								net: n,
								org: n,
								perso: n,
								tourism: n,
								orangecloud: r,
							},
						],
						to: [
							1,
							{
								611: r,
								com: n,
								edu: n,
								gov: n,
								mil: n,
								net: n,
								org: n,
								oya: r,
								x0: r,
								quickconnect: j,
								vpnplus: r,
							},
						],
						tr: [
							1,
							{
								av: n,
								bbs: n,
								bel: n,
								biz: n,
								com: n,
								dr: n,
								edu: n,
								gen: n,
								gov: n,
								info: n,
								k12: n,
								kep: n,
								mil: n,
								name: n,
								net: n,
								org: n,
								pol: n,
								tel: n,
								tsk: n,
								tv: n,
								web: n,
								nc: m,
							},
						],
						tt: [
							1,
							{ biz: n, co: n, com: n, edu: n, gov: n, info: n, mil: n, name: n, net: n, org: n, pro: n },
						],
						tv: [1, { "better-than": r, dyndns: r, "on-the-web": r, "worse-than": r, from: r, sakura: r }],
						tw: [
							1,
							{
								club: n,
								com: [1, { mymailer: r }],
								ebiz: n,
								edu: n,
								game: n,
								gov: n,
								idv: n,
								mil: n,
								net: n,
								org: n,
								url: r,
								mydns: r,
							},
						],
						tz: [
							1,
							{
								ac: n,
								co: n,
								go: n,
								hotel: n,
								info: n,
								me: n,
								mil: n,
								mobi: n,
								ne: n,
								or: n,
								sc: n,
								tv: n,
							},
						],
						ua: [
							1,
							{
								com: n,
								edu: n,
								gov: n,
								in: n,
								net: n,
								org: n,
								cherkassy: n,
								cherkasy: n,
								chernigov: n,
								chernihiv: n,
								chernivtsi: n,
								chernovtsy: n,
								ck: n,
								cn: n,
								cr: n,
								crimea: n,
								cv: n,
								dn: n,
								dnepropetrovsk: n,
								dnipropetrovsk: n,
								donetsk: n,
								dp: n,
								if: n,
								"ivano-frankivsk": n,
								kh: n,
								kharkiv: n,
								kharkov: n,
								kherson: n,
								khmelnitskiy: n,
								khmelnytskyi: n,
								kiev: n,
								kirovograd: n,
								km: n,
								kr: n,
								kropyvnytskyi: n,
								krym: n,
								ks: n,
								kv: n,
								kyiv: n,
								lg: n,
								lt: n,
								lugansk: n,
								luhansk: n,
								lutsk: n,
								lv: n,
								lviv: n,
								mk: n,
								mykolaiv: n,
								nikolaev: n,
								od: n,
								odesa: n,
								odessa: n,
								pl: n,
								poltava: n,
								rivne: n,
								rovno: n,
								rv: n,
								sb: n,
								sebastopol: n,
								sevastopol: n,
								sm: n,
								sumy: n,
								te: n,
								ternopil: n,
								uz: n,
								uzhgorod: n,
								uzhhorod: n,
								vinnica: n,
								vinnytsia: n,
								vn: n,
								volyn: n,
								yalta: n,
								zakarpattia: n,
								zaporizhzhe: n,
								zaporizhzhia: n,
								zhitomir: n,
								zhytomyr: n,
								zp: n,
								zt: n,
								cc: r,
								inf: r,
								ltd: r,
								cx: r,
								ie: r,
								biz: r,
								co: r,
								pp: r,
								v: r,
							},
						],
						ug: [
							1,
							{ ac: n, co: n, com: n, edu: n, go: n, gov: n, mil: n, ne: n, or: n, org: n, sc: n, us: n },
						],
						uk: [
							1,
							{
								ac: n,
								co: [
									1,
									{
										bytemark: [0, { dh: r, vm: r }],
										layershift: G,
										barsy: r,
										barsyonline: r,
										retrosnub: ee,
										"nh-serv": r,
										"no-ip": r,
										adimo: r,
										myspreadshop: r,
									},
								],
								gov: [1, { api: r, campaign: r, service: r }],
								ltd: n,
								me: n,
								net: n,
								nhs: n,
								org: [
									1,
									{ glug: r, lug: r, lugs: r, affinitylottery: r, raffleentry: r, weeklylottery: r },
								],
								plc: n,
								police: n,
								sch: k,
								conn: r,
								copro: r,
								hosp: r,
								"independent-commission": r,
								"independent-inquest": r,
								"independent-inquiry": r,
								"independent-panel": r,
								"independent-review": r,
								"public-inquiry": r,
								"royal-commission": r,
								pymnt: r,
								barsy: r,
								nimsite: r,
								oraclegovcloudapps: l,
							},
						],
						us: [
							1,
							{
								dni: n,
								isa: n,
								nsn: n,
								ak: el,
								al: el,
								ar: el,
								as: el,
								az: el,
								ca: el,
								co: el,
								ct: el,
								dc: el,
								de: [1, { cc: n, lib: r }],
								fl: el,
								ga: el,
								gu: el,
								hi: eu,
								ia: el,
								id: el,
								il: el,
								in: el,
								ks: el,
								ky: el,
								la: el,
								ma: [1, { k12: [1, { chtr: n, paroch: n, pvt: n }], cc: n, lib: n }],
								md: el,
								me: el,
								mi: [
									1,
									{
										k12: n,
										cc: n,
										lib: n,
										"ann-arbor": n,
										cog: n,
										dst: n,
										eaton: n,
										gen: n,
										mus: n,
										tec: n,
										washtenaw: n,
									},
								],
								mn: el,
								mo: el,
								ms: el,
								mt: el,
								nc: el,
								nd: eu,
								ne: el,
								nh: el,
								nj: el,
								nm: el,
								nv: el,
								ny: el,
								oh: el,
								ok: el,
								or: el,
								pa: el,
								pr: el,
								ri: eu,
								sc: el,
								sd: eu,
								tn: el,
								tx: el,
								ut: el,
								va: el,
								vi: el,
								vt: el,
								wa: el,
								wi: el,
								wv: [1, { cc: n }],
								wy: el,
								cloudns: r,
								"is-by": r,
								"land-4-sale": r,
								"stuff-4-sale": r,
								heliohost: r,
								enscaled: [0, { phx: r }],
								mircloud: r,
								ngo: r,
								golffan: r,
								noip: r,
								pointto: r,
								freeddns: r,
								srv: [2, { gh: r, gl: r }],
								platterp: r,
								servername: r,
							},
						],
						uy: [1, { com: n, edu: n, gub: n, mil: n, net: n, org: n }],
						uz: [1, { co: n, com: n, net: n, org: n }],
						va: n,
						vc: [
							1,
							{ com: n, edu: n, gov: n, mil: n, net: n, org: n, gv: [2, { d: r }], "0e": l, mydns: r },
						],
						ve: [
							1,
							{
								arts: n,
								bib: n,
								co: n,
								com: n,
								e12: n,
								edu: n,
								emprende: n,
								firm: n,
								gob: n,
								gov: n,
								info: n,
								int: n,
								mil: n,
								net: n,
								nom: n,
								org: n,
								rar: n,
								rec: n,
								store: n,
								tec: n,
								web: n,
							},
						],
						vg: [1, { edu: n }],
						vi: [1, { co: n, com: n, k12: n, net: n, org: n }],
						vn: [
							1,
							{
								ac: n,
								ai: n,
								biz: n,
								com: n,
								edu: n,
								gov: n,
								health: n,
								id: n,
								info: n,
								int: n,
								io: n,
								name: n,
								net: n,
								org: n,
								pro: n,
								angiang: n,
								bacgiang: n,
								backan: n,
								baclieu: n,
								bacninh: n,
								"baria-vungtau": n,
								bentre: n,
								binhdinh: n,
								binhduong: n,
								binhphuoc: n,
								binhthuan: n,
								camau: n,
								cantho: n,
								caobang: n,
								daklak: n,
								daknong: n,
								danang: n,
								dienbien: n,
								dongnai: n,
								dongthap: n,
								gialai: n,
								hagiang: n,
								haiduong: n,
								haiphong: n,
								hanam: n,
								hanoi: n,
								hatinh: n,
								haugiang: n,
								hoabinh: n,
								hungyen: n,
								khanhhoa: n,
								kiengiang: n,
								kontum: n,
								laichau: n,
								lamdong: n,
								langson: n,
								laocai: n,
								longan: n,
								namdinh: n,
								nghean: n,
								ninhbinh: n,
								ninhthuan: n,
								phutho: n,
								phuyen: n,
								quangbinh: n,
								quangnam: n,
								quangngai: n,
								quangninh: n,
								quangtri: n,
								soctrang: n,
								sonla: n,
								tayninh: n,
								thaibinh: n,
								thainguyen: n,
								thanhhoa: n,
								thanhphohochiminh: n,
								thuathienhue: n,
								tiengiang: n,
								travinh: n,
								tuyenquang: n,
								vinhlong: n,
								vinhphuc: n,
								yenbai: n,
							},
						],
						vu: B,
						wf: [1, { biz: r, sch: r }],
						ws: [
							1,
							{ com: n, edu: n, gov: n, net: n, org: n, advisor: l, cloud66: r, dyndns: r, mypets: r },
						],
						yt: [1, { org: r }],
						"xn--mgbaam7a8h": n,
						امارات: n,
						"xn--y9a3aq": n,
						հայ: n,
						"xn--54b7fta0cc": n,
						বাংলা: n,
						"xn--90ae": n,
						бг: n,
						"xn--mgbcpq6gpa1a": n,
						البحرين: n,
						"xn--90ais": n,
						бел: n,
						"xn--fiqs8s": n,
						中国: n,
						"xn--fiqz9s": n,
						中國: n,
						"xn--lgbbat1ad8j": n,
						الجزائر: n,
						"xn--wgbh1c": n,
						مصر: n,
						"xn--e1a4c": n,
						ею: n,
						"xn--qxa6a": n,
						ευ: n,
						"xn--mgbah1a3hjkrd": n,
						موريتانيا: n,
						"xn--node": n,
						გე: n,
						"xn--qxam": n,
						ελ: n,
						"xn--j6w193g": [
							1,
							{
								"xn--gmqw5a": n,
								"xn--55qx5d": n,
								"xn--mxtq1m": n,
								"xn--wcvs22d": n,
								"xn--uc0atv": n,
								"xn--od0alg": n,
							},
						],
						香港: [1, { 個人: n, 公司: n, 政府: n, 教育: n, 組織: n, 網絡: n }],
						"xn--2scrj9c": n,
						ಭಾರತ: n,
						"xn--3hcrj9c": n,
						ଭାରତ: n,
						"xn--45br5cyl": n,
						ভাৰত: n,
						"xn--h2breg3eve": n,
						भारतम्: n,
						"xn--h2brj9c8c": n,
						भारोत: n,
						"xn--mgbgu82a": n,
						ڀارت: n,
						"xn--rvc1e0am3e": n,
						ഭാരതം: n,
						"xn--h2brj9c": n,
						भारत: n,
						"xn--mgbbh1a": n,
						بارت: n,
						"xn--mgbbh1a71e": n,
						بھارت: n,
						"xn--fpcrj9c3d": n,
						భారత్: n,
						"xn--gecrj9c": n,
						ભારત: n,
						"xn--s9brj9c": n,
						ਭਾਰਤ: n,
						"xn--45brj9c": n,
						ভারত: n,
						"xn--xkc2dl3a5ee0h": n,
						இந்தியா: n,
						"xn--mgba3a4f16a": n,
						ایران: n,
						"xn--mgba3a4fra": n,
						ايران: n,
						"xn--mgbtx2b": n,
						عراق: n,
						"xn--mgbayh7gpa": n,
						الاردن: n,
						"xn--3e0b707e": n,
						한국: n,
						"xn--80ao21a": n,
						қаз: n,
						"xn--q7ce6a": n,
						ລາວ: n,
						"xn--fzc2c9e2c": n,
						ලංකා: n,
						"xn--xkc2al3hye2a": n,
						இலங்கை: n,
						"xn--mgbc0a9azcg": n,
						المغرب: n,
						"xn--d1alf": n,
						мкд: n,
						"xn--l1acc": n,
						мон: n,
						"xn--mix891f": n,
						澳門: n,
						"xn--mix082f": n,
						澳门: n,
						"xn--mgbx4cd0ab": n,
						مليسيا: n,
						"xn--mgb9awbf": n,
						عمان: n,
						"xn--mgbai9azgqp6j": n,
						پاکستان: n,
						"xn--mgbai9a5eva00b": n,
						پاكستان: n,
						"xn--ygbi2ammx": n,
						فلسطين: n,
						"xn--90a3ac": [
							1,
							{
								"xn--80au": n,
								"xn--90azh": n,
								"xn--d1at": n,
								"xn--c1avg": n,
								"xn--o1ac": n,
								"xn--o1ach": n,
							},
						],
						срб: [1, { ак: n, обр: n, од: n, орг: n, пр: n, упр: n }],
						"xn--p1ai": n,
						рф: n,
						"xn--wgbl6a": n,
						قطر: n,
						"xn--mgberp4a5d4ar": n,
						السعودية: n,
						"xn--mgberp4a5d4a87g": n,
						السعودیة: n,
						"xn--mgbqly7c0a67fbc": n,
						السعودیۃ: n,
						"xn--mgbqly7cvafr": n,
						السعوديه: n,
						"xn--mgbpl2fh": n,
						سودان: n,
						"xn--yfro4i67o": n,
						新加坡: n,
						"xn--clchc0ea0b2g2a9gcd": n,
						சிங்கப்பூர்: n,
						"xn--ogbpf8fl": n,
						سورية: n,
						"xn--mgbtf8fl": n,
						سوريا: n,
						"xn--o3cw4h": [
							1,
							{
								"xn--o3cyx2a": n,
								"xn--12co0c3b4eva": n,
								"xn--m3ch0j3a": n,
								"xn--h3cuzk1di": n,
								"xn--12c1fe0br": n,
								"xn--12cfi8ixb8l": n,
							},
						],
						ไทย: [1, { ทหาร: n, ธุรกิจ: n, เน็ต: n, รัฐบาล: n, ศึกษา: n, องค์กร: n }],
						"xn--pgbs0dh": n,
						تونس: n,
						"xn--kpry57d": n,
						台灣: n,
						"xn--kprw13d": n,
						台湾: n,
						"xn--nnx388a": n,
						臺灣: n,
						"xn--j1amh": n,
						укр: n,
						"xn--mgb2ddes": n,
						اليمن: n,
						xxx: n,
						ye: s,
						za: [
							0,
							{
								ac: n,
								agric: n,
								alt: n,
								co: n,
								edu: n,
								gov: n,
								grondar: n,
								law: n,
								mil: n,
								net: n,
								ngo: n,
								nic: n,
								nis: n,
								nom: n,
								org: n,
								school: n,
								tm: n,
								web: n,
							},
						],
						zm: [
							1,
							{ ac: n, biz: n, co: n, com: n, edu: n, gov: n, info: n, mil: n, net: n, org: n, sch: n },
						],
						zw: [1, { ac: n, co: n, gov: n, mil: n, org: n }],
						aaa: n,
						aarp: n,
						abb: n,
						abbott: n,
						abbvie: n,
						abc: n,
						able: n,
						abogado: n,
						abudhabi: n,
						academy: [1, { official: r }],
						accenture: n,
						accountant: n,
						accountants: n,
						aco: n,
						actor: n,
						ads: n,
						adult: n,
						aeg: n,
						aetna: n,
						afl: n,
						africa: n,
						agakhan: n,
						agency: n,
						aig: n,
						airbus: n,
						airforce: n,
						airtel: n,
						akdn: n,
						alibaba: n,
						alipay: n,
						allfinanz: n,
						allstate: n,
						ally: n,
						alsace: n,
						alstom: n,
						amazon: n,
						americanexpress: n,
						americanfamily: n,
						amex: n,
						amfam: n,
						amica: n,
						amsterdam: n,
						analytics: n,
						android: n,
						anquan: n,
						anz: n,
						aol: n,
						apartments: n,
						app: [
							1,
							{
								adaptable: r,
								aiven: r,
								beget: l,
								brave: u,
								clerk: r,
								clerkstage: r,
								wnext: r,
								csb: [2, { preview: r }],
								convex: r,
								deta: r,
								ondigitalocean: r,
								easypanel: r,
								encr: r,
								evervault: d,
								expo: [2, { staging: r }],
								edgecompute: r,
								"on-fleek": r,
								flutterflow: r,
								e2b: r,
								framer: r,
								hosted: l,
								run: l,
								web: r,
								hasura: r,
								botdash: r,
								loginline: r,
								lovable: r,
								medusajs: r,
								messerli: r,
								netfy: r,
								netlify: r,
								ngrok: r,
								"ngrok-free": r,
								developer: l,
								noop: r,
								northflank: l,
								upsun: l,
								replit: c,
								nyat: r,
								snowflake: [0, { "*": r, privatelink: l }],
								streamlit: r,
								storipress: r,
								telebit: r,
								typedream: r,
								vercel: r,
								bookonline: r,
								wdh: r,
								windsurf: r,
								zeabur: r,
								zerops: l,
							},
						],
						apple: n,
						aquarelle: n,
						arab: n,
						aramco: n,
						archi: n,
						army: n,
						art: n,
						arte: n,
						asda: n,
						associates: n,
						athleta: n,
						attorney: n,
						auction: n,
						audi: n,
						audible: n,
						audio: n,
						auspost: n,
						author: n,
						auto: n,
						autos: n,
						aws: [
							1,
							{
								sagemaker: [
									0,
									{
										"ap-northeast-1": h,
										"ap-northeast-2": h,
										"ap-south-1": h,
										"ap-southeast-1": h,
										"ap-southeast-2": h,
										"ca-central-1": v,
										"eu-central-1": h,
										"eu-west-1": h,
										"eu-west-2": h,
										"us-east-1": v,
										"us-east-2": v,
										"us-west-2": v,
										"af-south-1": g,
										"ap-east-1": g,
										"ap-northeast-3": g,
										"ap-south-2": f,
										"ap-southeast-3": g,
										"ap-southeast-4": f,
										"ca-west-1": [0, { notebook: r, "notebook-fips": r }],
										"eu-central-2": g,
										"eu-north-1": g,
										"eu-south-1": g,
										"eu-south-2": g,
										"eu-west-3": g,
										"il-central-1": g,
										"me-central-1": g,
										"me-south-1": g,
										"sa-east-1": g,
										"us-gov-east-1": b,
										"us-gov-west-1": b,
										"us-west-1": [0, { notebook: r, "notebook-fips": r, studio: r }],
										experiments: l,
									},
								],
								repost: [0, { private: l }],
								on: [
									0,
									{
										"ap-northeast-1": p,
										"ap-southeast-1": p,
										"ap-southeast-2": p,
										"eu-central-1": p,
										"eu-north-1": p,
										"eu-west-1": p,
										"us-east-1": p,
										"us-east-2": p,
										"us-west-2": p,
									},
								],
							},
						],
						axa: n,
						azure: n,
						baby: n,
						baidu: n,
						banamex: n,
						band: n,
						bank: n,
						bar: n,
						barcelona: n,
						barclaycard: n,
						barclays: n,
						barefoot: n,
						bargains: n,
						baseball: n,
						basketball: [1, { aus: r, nz: r }],
						bauhaus: n,
						bayern: n,
						bbc: n,
						bbt: n,
						bbva: n,
						bcg: n,
						bcn: n,
						beats: n,
						beauty: n,
						beer: n,
						bentley: n,
						berlin: n,
						best: n,
						bestbuy: n,
						bet: n,
						bharti: n,
						bible: n,
						bid: n,
						bike: n,
						bing: n,
						bingo: n,
						bio: n,
						black: n,
						blackfriday: n,
						blockbuster: n,
						blog: n,
						bloomberg: n,
						blue: n,
						bms: n,
						bmw: n,
						bnpparibas: n,
						boats: n,
						boehringer: n,
						bofa: n,
						bom: n,
						bond: n,
						boo: n,
						book: n,
						booking: n,
						bosch: n,
						bostik: n,
						boston: n,
						bot: n,
						boutique: n,
						box: n,
						bradesco: n,
						bridgestone: n,
						broadway: n,
						broker: n,
						brother: n,
						brussels: n,
						build: [1, { v0: r, windsurf: r }],
						builders: [1, { cloudsite: r }],
						business: y,
						buy: n,
						buzz: n,
						bzh: n,
						cab: n,
						cafe: n,
						cal: n,
						call: n,
						calvinklein: n,
						cam: n,
						camera: n,
						camp: [1, { emf: [0, { at: r }] }],
						canon: n,
						capetown: n,
						capital: n,
						capitalone: n,
						car: n,
						caravan: n,
						cards: n,
						care: n,
						career: n,
						careers: n,
						cars: n,
						casa: [1, { nabu: [0, { ui: r }] }],
						case: n,
						cash: n,
						casino: n,
						catering: n,
						catholic: n,
						cba: n,
						cbn: n,
						cbre: n,
						center: n,
						ceo: n,
						cern: n,
						cfa: n,
						cfd: n,
						chanel: n,
						channel: n,
						charity: n,
						chase: n,
						chat: n,
						cheap: n,
						chintai: n,
						christmas: n,
						chrome: n,
						church: n,
						cipriani: n,
						circle: n,
						cisco: n,
						citadel: n,
						citi: n,
						citic: n,
						city: n,
						claims: n,
						cleaning: n,
						click: n,
						clinic: n,
						clinique: n,
						clothing: n,
						cloud: [
							1,
							{
								convex: r,
								elementor: r,
								encoway: [0, { eu: r }],
								statics: l,
								ravendb: r,
								axarnet: [0, { "es-1": r }],
								diadem: r,
								jelastic: [0, { vip: r }],
								jele: r,
								"jenv-aruba": [0, { aruba: [0, { eur: [0, { it1: r }] }], it1: r }],
								keliweb: [2, { cs: r }],
								oxa: [2, { tn: r, uk: r }],
								primetel: [2, { uk: r }],
								reclaim: [0, { ca: r, uk: r, us: r }],
								trendhosting: [0, { ch: r, de: r }],
								jotelulu: r,
								kuleuven: r,
								laravel: r,
								linkyard: r,
								magentosite: l,
								matlab: r,
								observablehq: r,
								perspecta: r,
								vapor: r,
								"on-rancher": l,
								scw: [
									0,
									{
										baremetal: [0, { "fr-par-1": r, "fr-par-2": r, "nl-ams-1": r }],
										"fr-par": [
											0,
											{
												cockpit: r,
												fnc: [2, { functions: r }],
												k8s: z,
												s3: r,
												"s3-website": r,
												whm: r,
											},
										],
										instances: [0, { priv: r, pub: r }],
										k8s: r,
										"nl-ams": [0, { cockpit: r, k8s: z, s3: r, "s3-website": r, whm: r }],
										"pl-waw": [0, { cockpit: r, k8s: z, s3: r, "s3-website": r }],
										scalebook: r,
										smartlabeling: r,
									},
								],
								servebolt: r,
								onstackit: [0, { runs: r }],
								trafficplex: r,
								"unison-services": r,
								urown: r,
								voorloper: r,
								zap: r,
							},
						],
						club: [1, { cloudns: r, jele: r, barsy: r }],
						clubmed: n,
						coach: n,
						codes: [1, { owo: l }],
						coffee: n,
						college: n,
						cologne: n,
						commbank: n,
						community: [1, { nog: r, ravendb: r, myforum: r }],
						company: n,
						compare: n,
						computer: n,
						comsec: n,
						condos: n,
						construction: n,
						consulting: n,
						contact: n,
						contractors: n,
						cooking: n,
						cool: [1, { elementor: r, de: r }],
						corsica: n,
						country: n,
						coupon: n,
						coupons: n,
						courses: n,
						cpa: n,
						credit: n,
						creditcard: n,
						creditunion: n,
						cricket: n,
						crown: n,
						crs: n,
						cruise: n,
						cruises: n,
						cuisinella: n,
						cymru: n,
						cyou: n,
						dad: n,
						dance: n,
						data: n,
						date: n,
						dating: n,
						datsun: n,
						day: n,
						dclk: n,
						dds: n,
						deal: n,
						dealer: n,
						deals: n,
						degree: n,
						delivery: n,
						dell: n,
						deloitte: n,
						delta: n,
						democrat: n,
						dental: n,
						dentist: n,
						desi: n,
						design: [1, { graphic: r, bss: r }],
						dev: [
							1,
							{
								"12chars": r,
								myaddr: r,
								panel: r,
								lcl: l,
								lclstage: l,
								stg: l,
								stgstage: l,
								pages: r,
								r2: r,
								workers: r,
								deno: r,
								"deno-staging": r,
								deta: r,
								evervault: d,
								fly: r,
								githubpreview: r,
								gateway: l,
								hrsn: [2, { psl: [0, { sub: r, wc: [0, { "*": r, sub: l }] }] }],
								botdash: r,
								inbrowser: l,
								"is-a-good": r,
								"is-a": r,
								iserv: r,
								runcontainers: r,
								localcert: [0, { user: l }],
								loginline: r,
								barsy: r,
								mediatech: r,
								modx: r,
								ngrok: r,
								"ngrok-free": r,
								"is-a-fullstack": r,
								"is-cool": r,
								"is-not-a": r,
								localplayer: r,
								xmit: r,
								"platter-app": r,
								replit: [
									2,
									{
										archer: r,
										bones: r,
										canary: r,
										global: r,
										hacker: r,
										id: r,
										janeway: r,
										kim: r,
										kira: r,
										kirk: r,
										odo: r,
										paris: r,
										picard: r,
										pike: r,
										prerelease: r,
										reed: r,
										riker: r,
										sisko: r,
										spock: r,
										staging: r,
										sulu: r,
										tarpit: r,
										teams: r,
										tucker: r,
										wesley: r,
										worf: r,
									},
								],
								crm: [0, { d: l, w: l, wa: l, wb: l, wc: l, wd: l, we: l, wf: l }],
								vercel: r,
								webhare: l,
							},
						],
						dhl: n,
						diamonds: n,
						diet: n,
						digital: [1, { cloudapps: [2, { london: r }] }],
						direct: [1, { libp2p: r }],
						directory: n,
						discount: n,
						discover: n,
						dish: n,
						diy: n,
						dnp: n,
						docs: n,
						doctor: n,
						dog: n,
						domains: n,
						dot: n,
						download: n,
						drive: n,
						dtv: n,
						dubai: n,
						dunlop: n,
						dupont: n,
						durban: n,
						dvag: n,
						dvr: n,
						earth: n,
						eat: n,
						eco: n,
						edeka: n,
						education: y,
						email: [1, { crisp: [0, { on: r }], tawk: J, tawkto: J }],
						emerck: n,
						energy: n,
						engineer: n,
						engineering: n,
						enterprises: n,
						epson: n,
						equipment: n,
						ericsson: n,
						erni: n,
						esq: n,
						estate: [1, { compute: l }],
						eurovision: n,
						eus: [1, { party: H }],
						events: [1, { koobin: r, co: r }],
						exchange: n,
						expert: n,
						exposed: n,
						express: n,
						extraspace: n,
						fage: n,
						fail: n,
						fairwinds: n,
						faith: n,
						family: n,
						fan: n,
						fans: n,
						farm: [1, { storj: r }],
						farmers: n,
						fashion: n,
						fast: n,
						fedex: n,
						feedback: n,
						ferrari: n,
						ferrero: n,
						fidelity: n,
						fido: n,
						film: n,
						final: n,
						finance: n,
						financial: y,
						fire: n,
						firestone: n,
						firmdale: n,
						fish: n,
						fishing: n,
						fit: n,
						fitness: n,
						flickr: n,
						flights: n,
						flir: n,
						florist: n,
						flowers: n,
						fly: n,
						foo: n,
						food: n,
						football: n,
						ford: n,
						forex: n,
						forsale: n,
						forum: n,
						foundation: n,
						fox: n,
						free: n,
						fresenius: n,
						frl: n,
						frogans: n,
						frontier: n,
						ftr: n,
						fujitsu: n,
						fun: n,
						fund: n,
						furniture: n,
						futbol: n,
						fyi: n,
						gal: n,
						gallery: n,
						gallo: n,
						gallup: n,
						game: n,
						games: [1, { pley: r, sheezy: r }],
						gap: n,
						garden: n,
						gay: [1, { pages: r }],
						gbiz: n,
						gdn: [1, { cnpy: r }],
						gea: n,
						gent: n,
						genting: n,
						george: n,
						ggee: n,
						gift: n,
						gifts: n,
						gives: n,
						giving: n,
						glass: n,
						gle: n,
						global: [1, { appwrite: r }],
						globo: n,
						gmail: n,
						gmbh: n,
						gmo: n,
						gmx: n,
						godaddy: n,
						gold: n,
						goldpoint: n,
						golf: n,
						goo: n,
						goodyear: n,
						goog: [1, { cloud: r, translate: r, usercontent: l }],
						google: n,
						gop: n,
						got: n,
						grainger: n,
						graphics: n,
						gratis: n,
						green: n,
						gripe: n,
						grocery: n,
						group: [1, { discourse: r }],
						gucci: n,
						guge: n,
						guide: n,
						guitars: n,
						guru: n,
						hair: n,
						hamburg: n,
						hangout: n,
						haus: n,
						hbo: n,
						hdfc: n,
						hdfcbank: n,
						health: [1, { hra: r }],
						healthcare: n,
						help: n,
						helsinki: n,
						here: n,
						hermes: n,
						hiphop: n,
						hisamitsu: n,
						hitachi: n,
						hiv: n,
						hkt: n,
						hockey: n,
						holdings: n,
						holiday: n,
						homedepot: n,
						homegoods: n,
						homes: n,
						homesense: n,
						honda: n,
						horse: n,
						hospital: n,
						host: [
							1,
							{
								cloudaccess: r,
								freesite: r,
								easypanel: r,
								fastvps: r,
								myfast: r,
								tempurl: r,
								wpmudev: r,
								jele: r,
								mircloud: r,
								wp2: r,
								half: r,
							},
						],
						hosting: [1, { opencraft: r }],
						hot: n,
						hotels: n,
						hotmail: n,
						house: n,
						how: n,
						hsbc: n,
						hughes: n,
						hyatt: n,
						hyundai: n,
						ibm: n,
						icbc: n,
						ice: n,
						icu: n,
						ieee: n,
						ifm: n,
						ikano: n,
						imamat: n,
						imdb: n,
						immo: n,
						immobilien: n,
						inc: n,
						industries: n,
						infiniti: n,
						ing: n,
						ink: n,
						institute: n,
						insurance: n,
						insure: n,
						international: n,
						intuit: n,
						investments: n,
						ipiranga: n,
						irish: n,
						ismaili: n,
						ist: n,
						istanbul: n,
						itau: n,
						itv: n,
						jaguar: n,
						java: n,
						jcb: n,
						jeep: n,
						jetzt: n,
						jewelry: n,
						jio: n,
						jll: n,
						jmp: n,
						jnj: n,
						joburg: n,
						jot: n,
						joy: n,
						jpmorgan: n,
						jprs: n,
						juegos: n,
						juniper: n,
						kaufen: n,
						kddi: n,
						kerryhotels: n,
						kerryproperties: n,
						kfh: n,
						kia: n,
						kids: n,
						kim: n,
						kindle: n,
						kitchen: n,
						kiwi: n,
						koeln: n,
						komatsu: n,
						kosher: n,
						kpmg: n,
						kpn: n,
						krd: [1, { co: r, edu: r }],
						kred: n,
						kuokgroup: n,
						kyoto: n,
						lacaixa: n,
						lamborghini: n,
						lamer: n,
						lancaster: n,
						land: n,
						landrover: n,
						lanxess: n,
						lasalle: n,
						lat: n,
						latino: n,
						latrobe: n,
						law: n,
						lawyer: n,
						lds: n,
						lease: n,
						leclerc: n,
						lefrak: n,
						legal: n,
						lego: n,
						lexus: n,
						lgbt: n,
						lidl: n,
						life: n,
						lifeinsurance: n,
						lifestyle: n,
						lighting: n,
						like: n,
						lilly: n,
						limited: n,
						limo: n,
						lincoln: n,
						link: [
							1,
							{
								myfritz: r,
								cyon: r,
								dweb: l,
								inbrowser: l,
								nftstorage: ei,
								mypep: r,
								storacha: ei,
								w3s: ei,
							},
						],
						live: [1, { aem: r, hlx: r, ewp: l }],
						living: n,
						llc: n,
						llp: n,
						loan: n,
						loans: n,
						locker: n,
						locus: n,
						lol: [1, { omg: r }],
						london: n,
						lotte: n,
						lotto: n,
						love: n,
						lpl: n,
						lplfinancial: n,
						ltd: n,
						ltda: n,
						lundbeck: n,
						luxe: n,
						luxury: n,
						madrid: n,
						maif: n,
						maison: n,
						makeup: n,
						man: n,
						management: n,
						mango: n,
						map: n,
						market: n,
						marketing: n,
						markets: n,
						marriott: n,
						marshalls: n,
						mattel: n,
						mba: n,
						mckinsey: n,
						med: n,
						media: en,
						meet: n,
						melbourne: n,
						meme: n,
						memorial: n,
						men: n,
						menu: [1, { barsy: r, barsyonline: r }],
						merck: n,
						merckmsd: n,
						miami: n,
						microsoft: n,
						mini: n,
						mint: n,
						mit: n,
						mitsubishi: n,
						mlb: n,
						mls: n,
						mma: n,
						mobile: n,
						moda: n,
						moe: n,
						moi: n,
						mom: [1, { ind: r }],
						monash: n,
						money: n,
						monster: n,
						mormon: n,
						mortgage: n,
						moscow: n,
						moto: n,
						motorcycles: n,
						mov: n,
						movie: n,
						msd: n,
						mtn: n,
						mtr: n,
						music: n,
						nab: n,
						nagoya: n,
						navy: n,
						nba: n,
						nec: n,
						netbank: n,
						netflix: n,
						network: [1, { alces: l, co: r, arvo: r, azimuth: r, tlon: r }],
						neustar: n,
						new: n,
						news: [1, { noticeable: r }],
						next: n,
						nextdirect: n,
						nexus: n,
						nfl: n,
						ngo: n,
						nhk: n,
						nico: n,
						nike: n,
						nikon: n,
						ninja: n,
						nissan: n,
						nissay: n,
						nokia: n,
						norton: n,
						now: n,
						nowruz: n,
						nowtv: n,
						nra: n,
						nrw: n,
						ntt: n,
						nyc: n,
						obi: n,
						observer: n,
						office: n,
						okinawa: n,
						olayan: n,
						olayangroup: n,
						ollo: n,
						omega: n,
						one: [1, { kin: l, service: r }],
						ong: [1, { obl: r }],
						onl: n,
						online: [1, { eero: r, "eero-stage": r, websitebuilder: r, barsy: r }],
						ooo: n,
						open: n,
						oracle: n,
						orange: [1, { tech: r }],
						organic: n,
						origins: n,
						osaka: n,
						otsuka: n,
						ott: n,
						ovh: [1, { nerdpol: r }],
						page: [
							1,
							{
								aem: r,
								hlx: r,
								hlx3: r,
								translated: r,
								codeberg: r,
								heyflow: r,
								prvcy: r,
								rocky: r,
								pdns: r,
								plesk: r,
							},
						],
						panasonic: n,
						paris: n,
						pars: n,
						partners: n,
						parts: n,
						party: n,
						pay: n,
						pccw: n,
						pet: n,
						pfizer: n,
						pharmacy: n,
						phd: n,
						philips: n,
						phone: n,
						photo: n,
						photography: n,
						photos: en,
						physio: n,
						pics: n,
						pictet: n,
						pictures: [1, { 1337: r }],
						pid: n,
						pin: n,
						ping: n,
						pink: n,
						pioneer: n,
						pizza: [1, { ngrok: r }],
						place: y,
						play: n,
						playstation: n,
						plumbing: n,
						plus: n,
						pnc: n,
						pohl: n,
						poker: n,
						politie: n,
						porn: n,
						pramerica: n,
						praxi: n,
						press: n,
						prime: n,
						prod: n,
						productions: n,
						prof: n,
						progressive: n,
						promo: n,
						properties: n,
						property: n,
						protection: n,
						pru: n,
						prudential: n,
						pub: [1, { id: l, kin: l, barsy: r }],
						pwc: n,
						qpon: n,
						quebec: n,
						quest: n,
						racing: n,
						radio: n,
						read: n,
						realestate: n,
						realtor: n,
						realty: n,
						recipes: n,
						red: n,
						redstone: n,
						redumbrella: n,
						rehab: n,
						reise: n,
						reisen: n,
						reit: n,
						reliance: n,
						ren: n,
						rent: n,
						rentals: n,
						repair: n,
						report: n,
						republican: n,
						rest: n,
						restaurant: n,
						review: n,
						reviews: n,
						rexroth: n,
						rich: n,
						richardli: n,
						ricoh: n,
						ril: n,
						rio: n,
						rip: [1, { clan: r }],
						rocks: [1, { myddns: r, stackit: r, "lima-city": r, webspace: r }],
						rodeo: n,
						rogers: n,
						room: n,
						rsvp: n,
						rugby: n,
						ruhr: n,
						run: [
							1,
							{
								appwrite: l,
								development: r,
								ravendb: r,
								liara: [2, { iran: r }],
								servers: r,
								build: l,
								code: l,
								database: l,
								migration: l,
								onporter: r,
								repl: r,
								stackit: r,
								val: [0, { express: r, web: r }],
								wix: r,
							},
						],
						rwe: n,
						ryukyu: n,
						saarland: n,
						safe: n,
						safety: n,
						sakura: n,
						sale: n,
						salon: n,
						samsclub: n,
						samsung: n,
						sandvik: n,
						sandvikcoromant: n,
						sanofi: n,
						sap: n,
						sarl: n,
						sas: n,
						save: n,
						saxo: n,
						sbi: n,
						sbs: n,
						scb: n,
						schaeffler: n,
						schmidt: n,
						scholarships: n,
						school: n,
						schule: n,
						schwarz: n,
						science: n,
						scot: [1, { gov: [2, { service: r }] }],
						search: n,
						seat: n,
						secure: n,
						security: n,
						seek: n,
						select: n,
						sener: n,
						services: [1, { loginline: r }],
						seven: n,
						sew: n,
						sex: n,
						sexy: n,
						sfr: n,
						shangrila: n,
						sharp: n,
						shell: n,
						shia: n,
						shiksha: n,
						shoes: n,
						shop: [1, { base: r, hoplix: r, barsy: r, barsyonline: r, shopware: r }],
						shopping: n,
						shouji: n,
						show: n,
						silk: n,
						sina: n,
						singles: n,
						site: [
							1,
							{
								square: r,
								canva: w,
								cloudera: l,
								convex: r,
								cyon: r,
								fastvps: r,
								figma: r,
								heyflow: r,
								jele: r,
								jouwweb: r,
								loginline: r,
								barsy: r,
								notion: r,
								omniwe: r,
								opensocial: r,
								madethis: r,
								platformsh: l,
								tst: l,
								byen: r,
								srht: r,
								novecore: r,
								cpanel: r,
								wpsquared: r,
							},
						],
						ski: n,
						skin: n,
						sky: n,
						skype: n,
						sling: n,
						smart: n,
						smile: n,
						sncf: n,
						soccer: n,
						social: n,
						softbank: n,
						software: n,
						sohu: n,
						solar: n,
						solutions: n,
						song: n,
						sony: n,
						soy: n,
						spa: n,
						space: [
							1,
							{
								myfast: r,
								heiyu: r,
								hf: [2, { static: r }],
								"app-ionos": r,
								project: r,
								uber: r,
								xs4all: r,
							},
						],
						sport: n,
						spot: n,
						srl: n,
						stada: n,
						staples: n,
						star: n,
						statebank: n,
						statefarm: n,
						stc: n,
						stcgroup: n,
						stockholm: n,
						storage: n,
						store: [1, { barsy: r, sellfy: r, shopware: r, storebase: r }],
						stream: n,
						studio: n,
						study: n,
						style: n,
						sucks: n,
						supplies: n,
						supply: n,
						support: [1, { barsy: r }],
						surf: n,
						surgery: n,
						suzuki: n,
						swatch: n,
						swiss: n,
						sydney: n,
						systems: [1, { knightpoint: r }],
						tab: n,
						taipei: n,
						talk: n,
						taobao: n,
						target: n,
						tatamotors: n,
						tatar: n,
						tattoo: n,
						tax: n,
						taxi: n,
						tci: n,
						tdk: n,
						team: [1, { discourse: r, jelastic: r }],
						tech: [1, { cleverapps: r }],
						technology: y,
						temasek: n,
						tennis: n,
						teva: n,
						thd: n,
						theater: n,
						theatre: n,
						tiaa: n,
						tickets: n,
						tienda: n,
						tips: n,
						tires: n,
						tirol: n,
						tjmaxx: n,
						tjx: n,
						tkmaxx: n,
						tmall: n,
						today: [1, { prequalifyme: r }],
						tokyo: n,
						tools: [1, { addr: V, myaddr: r }],
						top: [1, { ntdll: r, wadl: l }],
						toray: n,
						toshiba: n,
						total: n,
						tours: n,
						town: n,
						toyota: n,
						toys: n,
						trade: n,
						trading: n,
						training: n,
						travel: n,
						travelers: n,
						travelersinsurance: n,
						trust: n,
						trv: n,
						tube: n,
						tui: n,
						tunes: n,
						tushu: n,
						tvs: n,
						ubank: n,
						ubs: n,
						unicom: n,
						university: n,
						uno: n,
						uol: n,
						ups: n,
						vacations: n,
						vana: n,
						vanguard: n,
						vegas: n,
						ventures: n,
						verisign: n,
						versicherung: n,
						vet: n,
						viajes: n,
						video: n,
						vig: n,
						viking: n,
						villas: n,
						vin: n,
						vip: n,
						virgin: n,
						visa: n,
						vision: n,
						viva: n,
						vivo: n,
						vlaanderen: n,
						vodka: n,
						volvo: n,
						vote: n,
						voting: n,
						voto: n,
						voyage: n,
						wales: n,
						walmart: n,
						walter: n,
						wang: n,
						wanggou: n,
						watch: n,
						watches: n,
						weather: n,
						weatherchannel: n,
						webcam: n,
						weber: n,
						website: en,
						wed: n,
						wedding: n,
						weibo: n,
						weir: n,
						whoswho: n,
						wien: n,
						wiki: en,
						williamhill: n,
						win: n,
						windows: n,
						wine: n,
						winners: n,
						wme: n,
						wolterskluwer: n,
						woodside: n,
						work: n,
						works: n,
						world: n,
						wow: n,
						wtc: n,
						wtf: n,
						xbox: n,
						xerox: n,
						xihuan: n,
						xin: n,
						"xn--11b4c3d": n,
						कॉम: n,
						"xn--1ck2e1b": n,
						セール: n,
						"xn--1qqw23a": n,
						佛山: n,
						"xn--30rr7y": n,
						慈善: n,
						"xn--3bst00m": n,
						集团: n,
						"xn--3ds443g": n,
						在线: n,
						"xn--3pxu8k": n,
						点看: n,
						"xn--42c2d9a": n,
						คอม: n,
						"xn--45q11c": n,
						八卦: n,
						"xn--4gbrim": n,
						موقع: n,
						"xn--55qw42g": n,
						公益: n,
						"xn--55qx5d": n,
						公司: n,
						"xn--5su34j936bgsg": n,
						香格里拉: n,
						"xn--5tzm5g": n,
						网站: n,
						"xn--6frz82g": n,
						移动: n,
						"xn--6qq986b3xl": n,
						我爱你: n,
						"xn--80adxhks": n,
						москва: n,
						"xn--80aqecdr1a": n,
						католик: n,
						"xn--80asehdb": n,
						онлайн: n,
						"xn--80aswg": n,
						сайт: n,
						"xn--8y0a063a": n,
						联通: n,
						"xn--9dbq2a": n,
						קום: n,
						"xn--9et52u": n,
						时尚: n,
						"xn--9krt00a": n,
						微博: n,
						"xn--b4w605ferd": n,
						淡马锡: n,
						"xn--bck1b9a5dre4c": n,
						ファッション: n,
						"xn--c1avg": n,
						орг: n,
						"xn--c2br7g": n,
						नेट: n,
						"xn--cck2b3b": n,
						ストア: n,
						"xn--cckwcxetd": n,
						アマゾン: n,
						"xn--cg4bki": n,
						삼성: n,
						"xn--czr694b": n,
						商标: n,
						"xn--czrs0t": n,
						商店: n,
						"xn--czru2d": n,
						商城: n,
						"xn--d1acj3b": n,
						дети: n,
						"xn--eckvdtc9d": n,
						ポイント: n,
						"xn--efvy88h": n,
						新闻: n,
						"xn--fct429k": n,
						家電: n,
						"xn--fhbei": n,
						كوم: n,
						"xn--fiq228c5hs": n,
						中文网: n,
						"xn--fiq64b": n,
						中信: n,
						"xn--fjq720a": n,
						娱乐: n,
						"xn--flw351e": n,
						谷歌: n,
						"xn--fzys8d69uvgm": n,
						電訊盈科: n,
						"xn--g2xx48c": n,
						购物: n,
						"xn--gckr3f0f": n,
						クラウド: n,
						"xn--gk3at1e": n,
						通販: n,
						"xn--hxt814e": n,
						网店: n,
						"xn--i1b6b1a6a2e": n,
						संगठन: n,
						"xn--imr513n": n,
						餐厅: n,
						"xn--io0a7i": n,
						网络: n,
						"xn--j1aef": n,
						ком: n,
						"xn--jlq480n2rg": n,
						亚马逊: n,
						"xn--jvr189m": n,
						食品: n,
						"xn--kcrx77d1x4a": n,
						飞利浦: n,
						"xn--kput3i": n,
						手机: n,
						"xn--mgba3a3ejt": n,
						ارامكو: n,
						"xn--mgba7c0bbn0a": n,
						العليان: n,
						"xn--mgbab2bd": n,
						بازار: n,
						"xn--mgbca7dzdo": n,
						ابوظبي: n,
						"xn--mgbi4ecexp": n,
						كاثوليك: n,
						"xn--mgbt3dhd": n,
						همراه: n,
						"xn--mk1bu44c": n,
						닷컴: n,
						"xn--mxtq1m": n,
						政府: n,
						"xn--ngbc5azd": n,
						شبكة: n,
						"xn--ngbe9e0a": n,
						بيتك: n,
						"xn--ngbrx": n,
						عرب: n,
						"xn--nqv7f": n,
						机构: n,
						"xn--nqv7fs00ema": n,
						组织机构: n,
						"xn--nyqy26a": n,
						健康: n,
						"xn--otu796d": n,
						招聘: n,
						"xn--p1acf": [
							1,
							{
								"xn--90amc": r,
								"xn--j1aef": r,
								"xn--j1ael8b": r,
								"xn--h1ahn": r,
								"xn--j1adp": r,
								"xn--c1avg": r,
								"xn--80aaa0cvac": r,
								"xn--h1aliz": r,
								"xn--90a1af": r,
								"xn--41a": r,
							},
						],
						рус: [1, { биз: r, ком: r, крым: r, мир: r, мск: r, орг: r, самара: r, сочи: r, спб: r, я: r }],
						"xn--pssy2u": n,
						大拿: n,
						"xn--q9jyb4c": n,
						みんな: n,
						"xn--qcka1pmc": n,
						グーグル: n,
						"xn--rhqv96g": n,
						世界: n,
						"xn--rovu88b": n,
						書籍: n,
						"xn--ses554g": n,
						网址: n,
						"xn--t60b56a": n,
						닷넷: n,
						"xn--tckwe": n,
						コム: n,
						"xn--tiq49xqyj": n,
						天主教: n,
						"xn--unup4y": n,
						游戏: n,
						"xn--vermgensberater-ctb": n,
						vermögensberater: n,
						"xn--vermgensberatung-pwb": n,
						vermögensberatung: n,
						"xn--vhquv": n,
						企业: n,
						"xn--vuq861b": n,
						信息: n,
						"xn--w4r85el8fhu5dnra": n,
						嘉里大酒店: n,
						"xn--w4rs40l": n,
						嘉里: n,
						"xn--xhq521b": n,
						广东: n,
						"xn--zfr164b": n,
						政务: n,
						xyz: [1, { botdash: r, telebit: l }],
						yachts: n,
						yahoo: n,
						yamaxun: n,
						yandex: n,
						yodobashi: n,
						yoga: n,
						yokohama: n,
						you: n,
						youtube: n,
						yun: n,
						zappos: n,
						zara: n,
						zero: n,
						zip: n,
						zone: [1, { cloud66: r, triton: l, stackit: r, lima: r }],
						zuerich: n,
					},
				])
		function ex(e, t, a, i) {
			let n = null,
				r = t
			for (
				;
				void 0 !== r &&
				((r[0] & i) != 0 && (n = { index: a + 1, isIcann: 1 === r[0], isPrivate: 2 === r[0] }), -1 !== a);

			) {
				let t = r[1]
				;(r = Object.prototype.hasOwnProperty.call(t, e[a]) ? t[e[a]] : t["*"]), (a -= 1)
			}
			return n
		}
		function ez(e, t, a) {
			var i
			if (
				(function (e, t, a) {
					if (!t.allowPrivateDomains && e.length > 3) {
						let t = e.length - 1,
							i = e.charCodeAt(t),
							n = e.charCodeAt(t - 1),
							r = e.charCodeAt(t - 2),
							o = e.charCodeAt(t - 3)
						if (109 === i && 111 === n && 99 === r && 46 === o)
							return (a.isIcann = !0), (a.isPrivate = !1), (a.publicSuffix = "com"), !0
						if (103 === i && 114 === n && 111 === r && 46 === o)
							return (a.isIcann = !0), (a.isPrivate = !1), (a.publicSuffix = "org"), !0
						if (117 === i && 100 === n && 101 === r && 46 === o)
							return (a.isIcann = !0), (a.isPrivate = !1), (a.publicSuffix = "edu"), !0
						else if (118 === i && 111 === n && 103 === r && 46 === o)
							return (a.isIcann = !0), (a.isPrivate = !1), (a.publicSuffix = "gov"), !0
						else if (116 === i && 101 === n && 110 === r && 46 === o)
							return (a.isIcann = !0), (a.isPrivate = !1), (a.publicSuffix = "net"), !0
						else if (101 === i && 100 === n && 46 === r)
							return (a.isIcann = !0), (a.isPrivate = !1), (a.publicSuffix = "de"), !0
					}
					return !1
				})(e, t, a)
			)
				return
			let n = e.split("."),
				r = (2 * !!t.allowPrivateDomains) | !!t.allowIcannDomains,
				o = ex(n, ek, n.length - 1, r)
			if (null !== o) {
				;(a.isIcann = o.isIcann), (a.isPrivate = o.isPrivate), (a.publicSuffix = n.slice(o.index + 1).join("."))
				return
			}
			let s = ex(n, ey, n.length - 1, r)
			if (null !== s) {
				;(a.isIcann = s.isIcann), (a.isPrivate = s.isPrivate), (a.publicSuffix = n.slice(s.index).join("."))
				return
			}
			;(a.isIcann = !1), (a.isPrivate = !1), (a.publicSuffix = null != (i = n[n.length - 1]) ? i : null)
		}
		let ew = {
			domain: null,
			domainWithoutSuffix: null,
			hostname: null,
			isIcann: null,
			isIp: null,
			isPrivate: null,
			publicSuffix: null,
			subdomain: null,
		}
		var e_ = e.i(10857),
			e$ = e.i(59052)
		function ej() {
			let [e, t] = (0, ec.useState)(null)
			return (
				(0, ec.useEffect)(() => {
					t(
						(function (e, t = {}) {
							return (
								(ew.domain = null),
								(ew.domainWithoutSuffix = null),
								(ew.hostname = null),
								(ew.isIcann = null),
								(ew.isIp = null),
								(ew.isPrivate = null),
								(ew.publicSuffix = null),
								(ew.subdomain = null),
								(function (e, t, a, i, n) {
									var r
									let o = void 0 === i ? eb : ev(i)
									if (
										"string" != typeof e ||
										(o.extractHostname
											? o.mixedInputs
												? (n.hostname = eg(e, ef(e)))
												: (n.hostname = eg(e, !1))
											: (n.hostname = e),
										null === n.hostname)
									)
										return n
									if (
										o.detectIp &&
										((n.isIp =
											(function (e) {
												if (e.length < 3) return !1
												let t = +!!e.startsWith("["),
													a = e.length
												if (("]" === e[a - 1] && (a -= 1), a - t > 39)) return !1
												let i = !1
												for (; t < a; t += 1) {
													let a = e.charCodeAt(t)
													if (58 === a) i = !0
													else if (
														!(
															(a >= 48 && a <= 57) ||
															(a >= 97 && a <= 102) ||
															(a >= 65 && a <= 90)
														)
													)
														return !1
												}
												return i
											})((r = n.hostname)) ||
											(function (e) {
												if (e.length < 7 || e.length > 15) return !1
												let t = 0
												for (let a = 0; a < e.length; a += 1) {
													let i = e.charCodeAt(a)
													if (46 === i) t += 1
													else if (i < 48 || i > 57) return !1
												}
												return (
													3 === t &&
													46 !== e.charCodeAt(0) &&
													46 !== e.charCodeAt(e.length - 1)
												)
											})(r)),
										n.isIp)
									)
										return n
									return o.validateHostname && o.extractHostname && !ef(n.hostname)
										? ((n.hostname = null), n)
										: (a(n.hostname, o, n), null === n.publicSuffix)
											? n
											: ((n.domain = (function (e, t, a) {
													let i, n
													if (null !== a.validHosts) {
														for (let e of a.validHosts)
															if (
																t.endsWith(e) &&
																(t.length === e.length ||
																	"." === t[t.length - e.length - 1])
															)
																return e
													}
													let r = 0
													if (t.startsWith(".")) for (; r < t.length && "." === t[r]; ) r += 1
													return e.length === t.length - r
														? null
														: ((i = t.length - e.length - 2),
															-1 === (n = t.lastIndexOf(".", i)) ? t : t.slice(n + 1))
												})(n.publicSuffix, n.hostname, o)),
												n)
								})(e, 0, ez, t, ew).domain
							)
						})(window.location.hostname),
					)
				}, []),
				(0, ed.jsx)("div", {
					role: "banner",
					"aria-label": "Cookie consent banner",
					"aria-live": "polite",
					children: (0, ed.jsx)(em.default, {
						location: "bottom",
						buttonText: "Accept",
						declineButtonText: "Decline",
						cookieName: e_.CONSENT_COOKIE_NAME,
						expires: 365,
						enableDeclineButton: !0,
						onAccept: () => {
							;(0, e$.handleConsentAccept)()
						},
						onDecline: () => {
							;(0, e$.handleConsentReject)()
						},
						containerClasses: `
		fixed bottom-2 left-2 right-2 z-[999]
		bg-black/95 dark:bg-white/95
		text-white dark:text-black
		border-t-neutral-800 dark:border-t-gray-200
		backdrop-blur-xl
		border-t
		font-semibold
		rounded-t-lg
		px-4 py-4 md:px-8 md:py-4
		flex flex-wrap items-center justify-between gap-4
		text-sm font-sans
	`.trim(),
						buttonClasses: `
		bg-white text-black border-neutral-800
		dark:bg-black dark:text-white dark:border-gray-200
		hover:opacity-50
		transition-opacity
		rounded-md
		px-4 py-2 mr-2
		text-sm font-bold
		cursor-pointer
		focus:outline-none focus:ring-2 focus:ring-offset-2
	`.trim(),
						buttonWrapperClasses: `
		flex
		flex-row-reverse
		items-center
		gap-2
	`.trim(),
						declineButtonClasses: `
		dark:bg-white dark:text-black dark:border-gray-200
		bg-black text-white border-neutral-800
		hover:opacity-50
		border border-border
		transition-opacity
		rounded-md
		px-4 py-2
		text-sm font-bold
		cursor-pointer
		focus:outline-none focus:ring-2 focus:ring-offset-2
	`.trim(),
						extraCookieOptions: e ? { domain: e } : {},
						disableStyles: !0,
						ariaAcceptLabel: "Accept",
						ariaDeclineLabel: "Decline",
						children: (0, ed.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								(0, ed.jsx)(ep, { className: "size-5 hidden md:block" }),
								(0, ed.jsx)("span", {
									children: "Like most of the internet, we use cookies. Are you OK with that?",
								}),
							],
						}),
					}),
				})
			)
		}
		e.s(["CookieConsentWrapper", () => ej], 23656)
	},
	99574,
	(e) => {
		e.v({ className: "dm_sans_9dec044e-module__koDR9a__className" })
	},
	81186,
	(e) => {
		"use strict"
		var t = e.i(8026),
			a = e.i(45438),
			i = e.i(99574)
		let n = {
			className: i.default.className,
			style: { fontFamily: "'DM Sans', 'DM Sans Fallback'", fontStyle: "normal" },
		}
		null != i.default.variable && (n.variable = i.default.variable)
		var r = e.i(56727)
		function o() {
			return (0, t.jsx)("div", {
				className: `relative overflow-hidden bg-[#d8f14b] text-black ${n.className}`,
				children: (0, t.jsxs)("div", {
					className: "relative flex flex-col items-center justify-center gap-3 px-6 py-5 sm:py-6",
					children: [
						(0, t.jsx)("p", {
							className: "text-base sm:text-lg md:text-xl font-extrabold tracking-tight",
							children: "The Roo Code team just launched something new.",
						}),
						(0, t.jsxs)("a", {
							href: "https://roomote.dev",
							target: "_blank",
							rel: "noopener noreferrer",
							className:
								"group inline-flex shrink-0 items-center gap-2 rounded-full bg-black text-white px-6 py-2.5 text-sm sm:text-base font-bold hover:bg-gray-900 transition-colors duration-200",
							children: [
								"Check out",
								(0, t.jsx)(a.default, {
									src: "/logos/roomote-logo.png",
									alt: "Roomote",
									width: 100,
									height: 37,
									className: "h-5 sm:h-6 w-auto invert",
								}),
								(0, t.jsx)(r.ArrowRight, {
									className:
										"size-4 sm:size-5 transition-transform duration-200 group-hover:translate-x-0.5",
								}),
							],
						}),
					],
				}),
			})
		}
		e.s(["RoomoteAnnouncementBanner", () => o], 81186)
	},
	2056,
	(e, t, a) => {
		t.exports = e.r(10726)
	},
	50697,
	(e) => {
		"use strict"
		var t = e.i(8026),
			a = e.i(66271),
			i = e.i(59243),
			n = e.i(59864),
			r = e.i(78889),
			o = class extends r.Subscribable {
				constructor(e = {}) {
					super(), (this.config = e), (this.#e = new Map())
				}
				#e
				build(e, t, n) {
					let r = t.queryKey,
						o = t.queryHash ?? (0, a.hashQueryKeyByOptions)(r, t),
						s = this.get(o)
					return (
						s ||
							((s = new i.Query({
								client: e,
								queryKey: r,
								queryHash: o,
								options: e.defaultQueryOptions(t),
								state: n,
								defaultOptions: e.getQueryDefaults(r),
							})),
							this.add(s)),
						s
					)
				}
				add(e) {
					this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({ type: "added", query: e }))
				}
				remove(e) {
					let t = this.#e.get(e.queryHash)
					t &&
						(e.destroy(),
						t === e && this.#e.delete(e.queryHash),
						this.notify({ type: "removed", query: e }))
				}
				clear() {
					n.notifyManager.batch(() => {
						this.getAll().forEach((e) => {
							this.remove(e)
						})
					})
				}
				get(e) {
					return this.#e.get(e)
				}
				getAll() {
					return [...this.#e.values()]
				}
				find(e) {
					let t = { exact: !0, ...e }
					return this.getAll().find((e) => (0, a.matchQuery)(t, e))
				}
				findAll(e = {}) {
					let t = this.getAll()
					return Object.keys(e).length > 0 ? t.filter((t) => (0, a.matchQuery)(e, t)) : t
				}
				notify(e) {
					n.notifyManager.batch(() => {
						this.listeners.forEach((t) => {
							t(e)
						})
					})
				}
				onFocus() {
					n.notifyManager.batch(() => {
						this.getAll().forEach((e) => {
							e.onFocus()
						})
					})
				}
				onOnline() {
					n.notifyManager.batch(() => {
						this.getAll().forEach((e) => {
							e.onOnline()
						})
					})
				}
			},
			s = e.i(39392),
			l = e.i(13805),
			u = class extends s.Removable {
				#t
				#a
				#i
				#n
				constructor(e) {
					super(),
						(this.#t = e.client),
						(this.mutationId = e.mutationId),
						(this.#i = e.mutationCache),
						(this.#a = []),
						(this.state = e.state || {
							context: void 0,
							data: void 0,
							error: null,
							failureCount: 0,
							failureReason: null,
							isPaused: !1,
							status: "idle",
							variables: void 0,
							submittedAt: 0,
						}),
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
					this.#a.includes(e) ||
						(this.#a.push(e),
						this.clearGcTimeout(),
						this.#i.notify({ type: "observerAdded", mutation: this, observer: e }))
				}
				removeObserver(e) {
					;(this.#a = this.#a.filter((t) => t !== e)),
						this.scheduleGc(),
						this.#i.notify({ type: "observerRemoved", mutation: this, observer: e })
				}
				optionalRemove() {
					this.#a.length || ("pending" === this.state.status ? this.scheduleGc() : this.#i.remove(this))
				}
				continue() {
					return this.#n?.continue() ?? this.execute(this.state.variables)
				}
				async execute(e) {
					let t = () => {
							this.#r({ type: "continue" })
						},
						a = { client: this.#t, meta: this.options.meta, mutationKey: this.options.mutationKey }
					this.#n = (0, l.createRetryer)({
						fn: () =>
							this.options.mutationFn
								? this.options.mutationFn(e, a)
								: Promise.reject(Error("No mutationFn found")),
						onFail: (e, t) => {
							this.#r({ type: "failed", failureCount: e, error: t })
						},
						onPause: () => {
							this.#r({ type: "pause" })
						},
						onContinue: t,
						retry: this.options.retry ?? 0,
						retryDelay: this.options.retryDelay,
						networkMode: this.options.networkMode,
						canRun: () => this.#i.canRun(this),
					})
					let i = "pending" === this.state.status,
						n = !this.#n.canStart()
					try {
						if (i) t()
						else {
							this.#r({ type: "pending", variables: e, isPaused: n }),
								this.#i.config.onMutate && (await this.#i.config.onMutate(e, this, a))
							let t = await this.options.onMutate?.(e, a)
							t !== this.state.context &&
								this.#r({ type: "pending", context: t, variables: e, isPaused: n })
						}
						let r = await this.#n.start()
						return (
							await this.#i.config.onSuccess?.(r, e, this.state.context, this, a),
							await this.options.onSuccess?.(r, e, this.state.context, a),
							await this.#i.config.onSettled?.(
								r,
								null,
								this.state.variables,
								this.state.context,
								this,
								a,
							),
							await this.options.onSettled?.(r, null, e, this.state.context, a),
							this.#r({ type: "success", data: r }),
							r
						)
					} catch (t) {
						try {
							await this.#i.config.onError?.(t, e, this.state.context, this, a)
						} catch (e) {
							Promise.reject(e)
						}
						try {
							await this.options.onError?.(t, e, this.state.context, a)
						} catch (e) {
							Promise.reject(e)
						}
						try {
							await this.#i.config.onSettled?.(
								void 0,
								t,
								this.state.variables,
								this.state.context,
								this,
								a,
							)
						} catch (e) {
							Promise.reject(e)
						}
						try {
							await this.options.onSettled?.(void 0, t, e, this.state.context, a)
						} catch (e) {
							Promise.reject(e)
						}
						throw (this.#r({ type: "error", error: t }), t)
					} finally {
						this.#i.runNext(this)
					}
				}
				#r(e) {
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
						n.notifyManager.batch(() => {
							this.#a.forEach((t) => {
								t.onMutationUpdate(e)
							}),
								this.#i.notify({ mutation: this, type: "updated", action: e })
						})
				}
			},
			d = r,
			c = class extends d.Subscribable {
				constructor(e = {}) {
					super(), (this.config = e), (this.#o = new Set()), (this.#s = new Map()), (this.#l = 0)
				}
				#o
				#s
				#l
				build(e, t, a) {
					let i = new u({
						client: e,
						mutationCache: this,
						mutationId: ++this.#l,
						options: e.defaultMutationOptions(t),
						state: a,
					})
					return this.add(i), i
				}
				add(e) {
					this.#o.add(e)
					let t = m(e)
					if ("string" == typeof t) {
						let a = this.#s.get(t)
						a ? a.push(e) : this.#s.set(t, [e])
					}
					this.notify({ type: "added", mutation: e })
				}
				remove(e) {
					if (this.#o.delete(e)) {
						let t = m(e)
						if ("string" == typeof t) {
							let a = this.#s.get(t)
							if (a)
								if (a.length > 1) {
									let t = a.indexOf(e)
									;-1 !== t && a.splice(t, 1)
								} else a[0] === e && this.#s.delete(t)
						}
					}
					this.notify({ type: "removed", mutation: e })
				}
				canRun(e) {
					let t = m(e)
					if ("string" != typeof t) return !0
					{
						let a = this.#s.get(t),
							i = a?.find((e) => "pending" === e.state.status)
						return !i || i === e
					}
				}
				runNext(e) {
					let t = m(e)
					if ("string" != typeof t) return Promise.resolve()
					{
						let a = this.#s.get(t)?.find((t) => t !== e && t.state.isPaused)
						return a?.continue() ?? Promise.resolve()
					}
				}
				clear() {
					n.notifyManager.batch(() => {
						this.#o.forEach((e) => {
							this.notify({ type: "removed", mutation: e })
						}),
							this.#o.clear(),
							this.#s.clear()
					})
				}
				getAll() {
					return Array.from(this.#o)
				}
				find(e) {
					let t = { exact: !0, ...e }
					return this.getAll().find((e) => (0, a.matchMutation)(t, e))
				}
				findAll(e = {}) {
					return this.getAll().filter((t) => (0, a.matchMutation)(e, t))
				}
				notify(e) {
					n.notifyManager.batch(() => {
						this.listeners.forEach((t) => {
							t(e)
						})
					})
				}
				resumePausedMutations() {
					let e = this.getAll().filter((e) => e.state.isPaused)
					return n.notifyManager.batch(() => Promise.all(e.map((e) => e.continue().catch(a.noop))))
				}
			}
		function m(e) {
			return e.options.scope?.id
		}
		var p = e.i(82679),
			g = e.i(60045)
		function h(e) {
			return {
				onFetch: (t, i) => {
					let n = t.options,
						r = t.fetchOptions?.meta?.fetchMore?.direction,
						o = t.state.data?.pages || [],
						s = t.state.data?.pageParams || [],
						l = { pages: [], pageParams: [] },
						u = 0,
						d = async () => {
							let i = !1,
								d = (0, a.ensureQueryFn)(t.options, t.fetchOptions),
								c = async (e, n, r) => {
									let o
									if (i) return Promise.reject()
									if (null == n && e.pages.length) return Promise.resolve(e)
									let s =
											((o = {
												client: t.client,
												queryKey: t.queryKey,
												pageParam: n,
												direction: r ? "backward" : "forward",
												meta: t.options.meta,
											}),
											(0, a.addConsumeAwareSignal)(
												o,
												() => t.signal,
												() => (i = !0),
											),
											o),
										l = await d(s),
										{ maxPages: u } = t.options,
										c = r ? a.addToStart : a.addToEnd
									return { pages: c(e.pages, l, u), pageParams: c(e.pageParams, n, u) }
								}
							if (r && o.length) {
								let e = "backward" === r,
									t = { pages: o, pageParams: s },
									a = (
										e
											? function (e, { pages: t, pageParams: a }) {
													return t.length > 0
														? e.getPreviousPageParam?.(t[0], t, a[0], a)
														: void 0
												}
											: f
									)(n, t)
								l = await c(t, a, e)
							} else {
								let t = e ?? o.length
								do {
									let e = 0 === u ? (s[0] ?? n.initialPageParam) : f(n, l)
									if (u > 0 && null == e) break
									;(l = await c(l, e)), u++
								} while (u < t)
							}
							return l
						}
					t.options.persister
						? (t.fetchFn = () =>
								t.options.persister?.(
									d,
									{ client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
									i,
								))
						: (t.fetchFn = d)
				},
			}
		}
		function f(e, { pages: t, pageParams: a }) {
			let i = t.length - 1
			return t.length > 0 ? e.getNextPageParam(t[i], t, a[i], a) : void 0
		}
		var v = class {
				#u
				#i
				#d
				#c
				#m
				#p
				#g
				#h
				constructor(e = {}) {
					;(this.#u = e.queryCache || new o()),
						(this.#i = e.mutationCache || new c()),
						(this.#d = e.defaultOptions || {}),
						(this.#c = new Map()),
						(this.#m = new Map()),
						(this.#p = 0)
				}
				mount() {
					this.#p++,
						1 === this.#p &&
							((this.#g = p.focusManager.subscribe(async (e) => {
								e && (await this.resumePausedMutations(), this.#u.onFocus())
							})),
							(this.#h = g.onlineManager.subscribe(async (e) => {
								e && (await this.resumePausedMutations(), this.#u.onOnline())
							})))
				}
				unmount() {
					this.#p--, 0 === this.#p && (this.#g?.(), (this.#g = void 0), this.#h?.(), (this.#h = void 0))
				}
				isFetching(e) {
					return this.#u.findAll({ ...e, fetchStatus: "fetching" }).length
				}
				isMutating(e) {
					return this.#i.findAll({ ...e, status: "pending" }).length
				}
				getQueryData(e) {
					let t = this.defaultQueryOptions({ queryKey: e })
					return this.#u.get(t.queryHash)?.state.data
				}
				ensureQueryData(e) {
					let t = this.defaultQueryOptions(e),
						i = this.#u.build(this, t),
						n = i.state.data
					return void 0 === n
						? this.fetchQuery(e)
						: (e.revalidateIfStale &&
								i.isStaleByTime((0, a.resolveStaleTime)(t.staleTime, i)) &&
								this.prefetchQuery(t),
							Promise.resolve(n))
				}
				getQueriesData(e) {
					return this.#u.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data])
				}
				setQueryData(e, t, i) {
					let n = this.defaultQueryOptions({ queryKey: e }),
						r = this.#u.get(n.queryHash),
						o = r?.state.data,
						s = (0, a.functionalUpdate)(t, o)
					if (void 0 !== s) return this.#u.build(this, n).setData(s, { ...i, manual: !0 })
				}
				setQueriesData(e, t, a) {
					return n.notifyManager.batch(() =>
						this.#u.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, a)]),
					)
				}
				getQueryState(e) {
					let t = this.defaultQueryOptions({ queryKey: e })
					return this.#u.get(t.queryHash)?.state
				}
				removeQueries(e) {
					let t = this.#u
					n.notifyManager.batch(() => {
						t.findAll(e).forEach((e) => {
							t.remove(e)
						})
					})
				}
				resetQueries(e, t) {
					let a = this.#u
					return n.notifyManager.batch(
						() => (
							a.findAll(e).forEach((e) => {
								e.reset()
							}),
							this.refetchQueries({ type: "active", ...e }, t)
						),
					)
				}
				cancelQueries(e, t = {}) {
					let i = { revert: !0, ...t }
					return Promise.all(n.notifyManager.batch(() => this.#u.findAll(e).map((e) => e.cancel(i))))
						.then(a.noop)
						.catch(a.noop)
				}
				invalidateQueries(e, t = {}) {
					return n.notifyManager.batch(() =>
						(this.#u.findAll(e).forEach((e) => {
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
						n.notifyManager.batch(() =>
							this.#u
								.findAll(e)
								.filter((e) => !e.isDisabled() && !e.isStatic())
								.map((e) => {
									let t = e.fetch(void 0, i)
									return (
										i.throwOnError || (t = t.catch(a.noop)),
										"paused" === e.state.fetchStatus ? Promise.resolve() : t
									)
								}),
						),
					).then(a.noop)
				}
				fetchQuery(e) {
					let t = this.defaultQueryOptions(e)
					void 0 === t.retry && (t.retry = !1)
					let i = this.#u.build(this, t)
					return i.isStaleByTime((0, a.resolveStaleTime)(t.staleTime, i))
						? i.fetch(t)
						: Promise.resolve(i.state.data)
				}
				prefetchQuery(e) {
					return this.fetchQuery(e).then(a.noop).catch(a.noop)
				}
				fetchInfiniteQuery(e) {
					return (e.behavior = h(e.pages)), this.fetchQuery(e)
				}
				prefetchInfiniteQuery(e) {
					return this.fetchInfiniteQuery(e).then(a.noop).catch(a.noop)
				}
				ensureInfiniteQueryData(e) {
					return (e.behavior = h(e.pages)), this.ensureQueryData(e)
				}
				resumePausedMutations() {
					return g.onlineManager.isOnline() ? this.#i.resumePausedMutations() : Promise.resolve()
				}
				getQueryCache() {
					return this.#u
				}
				getMutationCache() {
					return this.#i
				}
				getDefaultOptions() {
					return this.#d
				}
				setDefaultOptions(e) {
					this.#d = e
				}
				setQueryDefaults(e, t) {
					this.#c.set((0, a.hashKey)(e), { queryKey: e, defaultOptions: t })
				}
				getQueryDefaults(e) {
					let t = [...this.#c.values()],
						i = {}
					return (
						t.forEach((t) => {
							;(0, a.partialMatchKey)(e, t.queryKey) && Object.assign(i, t.defaultOptions)
						}),
						i
					)
				}
				setMutationDefaults(e, t) {
					this.#m.set((0, a.hashKey)(e), { mutationKey: e, defaultOptions: t })
				}
				getMutationDefaults(e) {
					let t = [...this.#m.values()],
						i = {}
					return (
						t.forEach((t) => {
							;(0, a.partialMatchKey)(e, t.mutationKey) && Object.assign(i, t.defaultOptions)
						}),
						i
					)
				}
				defaultQueryOptions(e) {
					if (e._defaulted) return e
					let t = { ...this.#d.queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 }
					return (
						t.queryHash || (t.queryHash = (0, a.hashQueryKeyByOptions)(t.queryKey, t)),
						void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode),
						void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
						!t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
						t.queryFn === a.skipToken && (t.enabled = !1),
						t
					)
				}
				defaultMutationOptions(e) {
					return e?._defaulted
						? e
						: {
								...this.#d.mutations,
								...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
								...e,
								_defaulted: !0,
							}
				}
				clear() {
					this.#u.clear(), this.#i.clear()
				}
			},
			b = e.i(73336),
			k = e.i(90306),
			y = e.i(10008),
			x = e.i(2056),
			z = e.i(59052)
		let w = "GTM-M2JZHV8N"
		function _({ children: e }) {
			let [a, i] = (0, y.useState)(!1)
			return (
				(0, y.useEffect)(
					() => (
						(0, z.hasConsent)() && i(!0),
						(0, z.onConsentChange)((e) => {
							e && i(!0)
						})
					),
					[],
				),
				(0, t.jsxs)(t.Fragment, {
					children: [
						a &&
							(0, t.jsxs)(t.Fragment, {
								children: [
									(0, t.jsx)(x.default, {
										id: "google-tag-manager",
										strategy: "afterInteractive",
										dangerouslySetInnerHTML: {
											__html: `
								(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
								new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
								j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
								'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
								})(window,document,'script','dataLayer','${w}');
							`,
										},
									}),
									(0, t.jsx)("noscript", {
										children: (0, t.jsx)("iframe", {
											src: `https://www.googletagmanager.com/ns.html?id=${w}`,
											height: "0",
											width: "0",
											style: { display: "none", visibility: "hidden" },
										}),
									}),
								],
							}),
						e,
					],
				})
			)
		}
		function $({ children: e }) {
			let [a, i] = (0, y.useState)(!1)
			return (
				(0, y.useEffect)(
					() => (
						(0, z.hasConsent)() && i(!0),
						(0, z.onConsentChange)((e) => {
							e && i(!0)
						})
					),
					[],
				),
				(0, t.jsxs)(t.Fragment, {
					children: [
						a &&
							(0, t.jsx)(t.Fragment, {
								children: (0, t.jsx)(x.default, {
									id: "hs-script-loader",
									src: "//js-na2.hs-scripts.com/243714031.js",
									strategy: "afterInteractive",
									async: !0,
									defer: !0,
								}),
							}),
						e,
					],
				})
			)
		}
		var j = e.i(53378),
			I = e.i(86192),
			S = e.i(60185),
			C = (0, y.createContext)({ client: S.default, bootstrap: void 0 })
		function N(e) {
			var t,
				a,
				i = e.children,
				n = e.client,
				r = e.apiKey,
				o = e.options,
				s = (0, y.useRef)(null),
				l = (0, y.useMemo)(
					function () {
						return n
							? (r &&
									console.warn(
										"[PostHog.js] You have provided both `client` and `apiKey` to `PostHogProvider`. `apiKey` will be ignored in favour of `client`.",
									),
								o &&
									console.warn(
										"[PostHog.js] You have provided both `client` and `options` to `PostHogProvider`. `options` will be ignored in favour of `client`.",
									),
								n)
							: (r ||
									console.warn(
										"[PostHog.js] No `apiKey` or `client` were provided to `PostHogProvider`. Using default global `window.posthog` instance. You must initialize it manually. This is not recommended behavior.",
									),
								S.default)
					},
					[n, r, JSON.stringify(o)],
				)
			return (
				(0, y.useEffect)(
					function () {
						if (!n) {
							var e = s.current
							e
								? (r !== e.apiKey &&
										console.warn(
											"[PostHog.js] You have provided a different `apiKey` to `PostHogProvider` than the one that was already initialized. This is not supported by our provider and we'll keep using the previous key. If you need to toggle between API Keys you need to control the `client` yourself and pass it in as a prop rather than an `apiKey` prop.",
										),
									o &&
										!(function e(t, a, i) {
											if ((void 0 === i && (i = new WeakMap()), t === a)) return !0
											if (
												"object" != typeof t ||
												null === t ||
												"object" != typeof a ||
												null === a
											)
												return !1
											if (i.has(t) && i.get(t) === a) return !0
											i.set(t, a)
											var n = Object.keys(t),
												r = Object.keys(a)
											if (n.length !== r.length) return !1
											for (var o = 0; o < n.length; o++) {
												var s = n[o]
												if (!r.includes(s) || !e(t[s], a[s], i)) return !1
											}
											return !0
										})(o, e.options) &&
										S.default.set_config(o))
								: (S.default.__loaded &&
										console.warn(
											"[PostHog.js] `posthog` was already loaded elsewhere. This may cause issues.",
										),
									S.default.init(r, o)),
								(s.current = { apiKey: r, options: null != o ? o : {} })
						}
					},
					[n, r, JSON.stringify(o)],
				),
				y.default.createElement(
					C.Provider,
					{
						value: {
							client: l,
							bootstrap:
								null != (t = null == o ? void 0 : o.bootstrap)
									? t
									: null == (a = null == n ? void 0 : n.config)
										? void 0
										: a.bootstrap,
						},
					},
					i,
				)
			)
		}
		var O = function (e) {
				return "function" == typeof e
			},
			E = function (e, t) {
				return (E =
					Object.setPrototypeOf ||
					({ __proto__: [] } instanceof Array &&
						function (e, t) {
							e.__proto__ = t
						}) ||
					function (e, t) {
						for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
					})(e, t)
			}
		"function" == typeof SuppressedError && SuppressedError
		var P = { componentStack: null, exceptionEvent: null, error: null },
			U = y.default.Component
		if ("function" != typeof U && null !== U)
			throw TypeError("Class extends value " + String(U) + " is not a constructor or null")
		function T() {
			this.constructor = A
		}
		function A(e) {
			var t = U.call(this, e) || this
			return (t.state = P), t
		}
		function D() {
			let e = (0, I.usePathname)(),
				t = (0, I.useSearchParams)(),
				a = (0, y.useRef)(null)
			return (
				(0, y.useEffect)(() => {
					if (e && j.default.env.NEXT_PUBLIC_POSTHOG_KEY) {
						let i = t?.toString() ?? "",
							n = window.location.origin + e + (i ? `?${i}` : ""),
							r = a.current ?? document.referrer,
							o = ""
						if (r)
							try {
								o = new URL(r).hostname
							} catch {}
						S.default.capture("$pageview", { $current_url: n, $referrer: r, $referring_domain: o }),
							(a.current = n)
					}
				}, [e, t?.toString()]),
				null
			)
		}
		function Z({ children: e }) {
			return (
				(0, y.useEffect)(() => {
					if (!S.default.__loaded) {
						let e = j.default.env.NEXT_PUBLIC_POSTHOG_KEY
						if (!e)
							return void console.warn(
								"PostHog API key is missing. Analytics will be disabled. Please set NEXT_PUBLIC_POSTHOG_KEY in your .env file.",
							)
						let t = (0, z.hasConsent)()
						S.default.init(e, {
							api_host: "https://us.i.posthog.com",
							capture_pageview: !1,
							loaded: (e) => {},
							save_referrer: !0,
							save_campaign_params: !0,
							respect_dnt: !0,
							persistence: t ? "localStorage+cookie" : "memory",
							opt_out_capturing_by_default: !1,
						})
					}
				}, []),
				(0, t.jsxs)(N, {
					client: S.default,
					children: [(0, t.jsx)(y.Suspense, { fallback: null, children: (0, t.jsx)(D, {}) }), e],
				})
			)
		}
		E(A, U),
			(A.prototype = null === U ? Object.create(U) : ((T.prototype = U.prototype), new T())),
			(A.prototype.componentDidCatch = function (e, t) {
				var a,
					i = this.props.additionalProperties
				O(i) ? (a = i(e)) : "object" == typeof i && (a = i)
				var n = this.context.client.captureException(e, a),
					r = t.componentStack
				this.setState({ error: e, componentStack: null != r ? r : null, exceptionEvent: n })
			}),
			(A.prototype.render = function () {
				var e = this.props,
					t = e.children,
					a = e.fallback,
					i = this.state
				if (null == i.componentStack) return O(t) ? t() : t
				var n = O(a)
					? y.default.createElement(a, {
							error: i.error,
							componentStack: i.componentStack,
							exceptionEvent: i.exceptionEvent,
						})
					: a
				return y.default.isValidElement(n)
					? n
					: (console.warn(
							"[PostHog.js][PostHogErrorBoundary] Invalid fallback prop, provide a valid React element or a function that returns a valid React element.",
						),
						y.default.createElement(y.default.Fragment, null))
			}),
			(A.contextType = C)
		let R = new v()
		e.s(
			[
				"Providers",
				0,
				({ children: e }) =>
					(0, t.jsx)(b.QueryClientProvider, {
						client: R,
						children: (0, t.jsx)(_, {
							children: (0, t.jsx)($, {
								children: (0, t.jsx)(Z, {
									children: (0, t.jsx)(k.ThemeProvider, {
										attribute: "class",
										defaultTheme: "dark",
										enableSystem: !1,
										children: e,
									}),
								}),
							}),
						}),
					}),
			],
			50697,
		)
	},
	87033,
	(e) => {
		"use strict"
		var t = e.i(8026),
			a = e.i(10008),
			i = e.i(21862),
			n = e.i(45438),
			r = e.i(15628),
			o = e.i(90306),
			s = e.i(36936),
			l = e.i(42506)
		e.i(8068)
		var u = e.i(5678)
		function d() {
			let [e, d] = (0, a.useState)(!1),
				[c, m] = (0, a.useState)(!1),
				p = (0, a.useRef)(null),
				g = (0, a.useRef)(null),
				h = (0, l.useLogoSrc)(),
				{ resolvedTheme: f } = (0, o.useTheme)()
			return (
				(0, a.useEffect)(() => {
					function e(e) {
						let t = e.target
						p.current && !p.current.contains(t) && d(!1), g.current && !g.current.contains(t) && m(!1)
					}
					return (
						document.addEventListener("mousedown", e),
						() => {
							document.removeEventListener("mousedown", e)
						}
					)
				}, []),
				(0, t.jsx)("footer", {
					className: "border-t border-border bg-background",
					children: (0, t.jsxs)("div", {
						className: "mx-auto max-w-7xl px-6 pb-6 pt-12 md:pb-8 md:pt-16 lg:px-8",
						children: [
							(0, t.jsxs)("div", {
								className: "xl:grid xl:grid-cols-3 xl:gap-8",
								children: [
									(0, t.jsxs)("div", {
										className: "space-y-8",
										children: [
											(0, t.jsx)("div", {
												className: "flex items-center",
												children: (0, t.jsx)(n.default, {
													src: h,
													alt: "Roo Code Logo",
													width: 120,
													height: 40,
													className: "h-6 w-auto",
												}),
											}),
											(0, t.jsx)("p", {
												className:
													"max-w-md text-sm leading-6 text-muted-foreground md:pr-16 lg:pr-32",
												children:
													"Empowering developers to build better software faster with AI-powered tools and insights.",
											}),
											(0, t.jsx)("a", {
												href: "https://roocode.com",
												target: "_blank",
												rel: "noopener noreferrer",
												className: "inline-flex items-center space-x-2 group",
												children: (0, t.jsx)(n.default, {
													src:
														"light" === f
															? "/RooCode-Badge-blk.svg"
															: "/RooCode-Badge-white.svg",
													alt: "Made with Roo Code",
													width: 120,
													height: 40,
													className:
														"h-8 w-auto opacity-70 transition-opacity group-hover:opacity-100",
												}),
											}),
										],
									}),
									(0, t.jsxs)("div", {
										className: "mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0",
										children: [
											(0, t.jsxs)("div", {
												className: "md:grid md:grid-cols-2 md:gap-8",
												children: [
													(0, t.jsxs)("div", {
														children: [
															(0, t.jsx)("h3", {
																className:
																	"text-sm font-semibold uppercase leading-6 text-foreground",
																children: "Product",
															}),
															(0, t.jsxs)("ul", {
																className: "mt-6 space-y-4",
																children: [
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)(u.ScrollButton, {
																			targetId: "product",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Features",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsxs)("div", {
																			className: "relative z-10",
																			ref: g,
																			children: [
																				(0, t.jsxs)("button", {
																					onClick: () => m(!c),
																					className:
																						"flex items-center text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																					"aria-expanded": c,
																					"aria-haspopup": "true",
																					children: [
																						(0, t.jsx)("span", {
																							children: "Cloud Agents",
																						}),
																						(0, t.jsx)(r.ChevronDown, {
																							className: `ml-1 h-4 w-4 transition-transform ${c ? "rotate-180" : ""}`,
																						}),
																					],
																				}),
																				c &&
																					(0, t.jsx)("div", {
																						className:
																							"absolute z-50 mt-2 w-44 origin-top-left scale-95 rounded-md border border-border bg-background shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-100 ease-out data-[state=open]:scale-100 max-xs:right-0 max-xs:origin-top-right xs:left-0",
																						children: (0, t.jsxs)("div", {
																							className:
																								"flex flex-col gap-1 p-2 text-sm text-muted-foreground",
																							children: [
																								(0, t.jsx)(i.default, {
																									href: "/cloud",
																									onClick: () =>
																										m(!1),
																									className:
																										"rounded-md px-3 py-2 transition-colors hover:bg-accent/50 hover:text-foreground",
																									children: "Cloud",
																								}),
																								(0, t.jsx)(i.default, {
																									href: "/reviewer",
																									onClick: () =>
																										m(!1),
																									className:
																										"rounded-md px-3 py-2 transition-colors hover:bg-accent/50 hover:text-foreground",
																									children:
																										"PR Reviewer",
																								}),
																								(0, t.jsx)(i.default, {
																									href: "/pr-fixer",
																									onClick: () =>
																										m(!1),
																									className:
																										"rounded-md px-3 py-2 transition-colors hover:bg-accent/50 hover:text-foreground",
																									children:
																										"PR Fixer",
																								}),
																							],
																						}),
																					}),
																			],
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: s.EXTERNAL_LINKS.DOCUMENTATION,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Docs",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: s.EXTERNAL_LINKS.CHANGELOG,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Changelog",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: s.EXTERNAL_LINKS.TESTIMONIALS,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Testimonials",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)(i.default, {
																			href: "/enterprise",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Enterprise",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: s.EXTERNAL_LINKS.SECURITY,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Security Center",
																		}),
																	}),
																],
															}),
														],
													}),
													(0, t.jsxs)("div", {
														className: "mt-10 md:mt-0",
														children: [
															(0, t.jsx)("h3", {
																className:
																	"text-sm font-semibold uppercase leading-6 text-foreground",
																children: "Resources",
															}),
															(0, t.jsxs)("ul", {
																className: "mt-6 space-y-4",
																children: [
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)(i.default, {
																			href: "/blog",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Blog",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: s.EXTERNAL_LINKS.EVALS,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Evals",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: s.EXTERNAL_LINKS.FAQ,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "FAQ",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: s.EXTERNAL_LINKS.TUTORIALS,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Tutorials",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: s.EXTERNAL_LINKS.ISSUES,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Issues",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: s.EXTERNAL_LINKS.FEATURE_REQUESTS,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Feature Requests",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: s.EXTERNAL_LINKS.OFFICE_HOURS_PODCAST,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Office Hours Podcast",
																		}),
																	}),
																],
															}),
														],
													}),
												],
											}),
											(0, t.jsxs)("div", {
												className: "md:grid md:grid-cols-2 md:gap-8",
												children: [
													(0, t.jsxs)("div", {
														children: [
															(0, t.jsx)("h3", {
																className:
																	"text-sm font-semibold uppercase leading-6 text-foreground",
																children: "Company",
															}),
															(0, t.jsxs)("ul", {
																className: "mt-6 space-y-4",
																children: [
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: "mailto:support@roocode.com",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Contact",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: s.EXTERNAL_LINKS.CAREERS,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Careers",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)(i.default, {
																			href: "/terms",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Terms of Service",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsxs)("div", {
																			className: "relative z-10",
																			ref: p,
																			children: [
																				(0, t.jsxs)("button", {
																					onClick: () => d(!e),
																					className:
																						"flex items-center text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																					"aria-expanded": e,
																					"aria-haspopup": "true",
																					children: [
																						(0, t.jsxs)("span", {
																							children: [
																								"Privacy ",
																								(0, t.jsx)("span", {
																									className:
																										"max-[320px]:hidden",
																									children: "Policy",
																								}),
																							],
																						}),
																						(0, t.jsx)(r.ChevronDown, {
																							className: `ml-1 h-4 w-4 transition-transform ${e ? "rotate-180" : ""}`,
																						}),
																					],
																				}),
																				e &&
																					(0, t.jsx)("div", {
																						className:
																							"absolute z-50 mt-2 w-44 origin-top-left scale-95 rounded-md border border-border bg-background shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-100 ease-out data-[state=open]:scale-100 max-xs:right-0 max-xs:origin-top-right xs:left-0",
																						children: (0, t.jsxs)("div", {
																							className:
																								"flex flex-col gap-1 p-2 text-sm text-muted-foreground",
																							children: [
																								(0, t.jsx)("a", {
																									href: s
																										.EXTERNAL_LINKS
																										.PRIVACY_POLICY_EXTENSION,
																									target: "_blank",
																									rel: "noopener noreferrer",
																									onClick: () =>
																										d(!1),
																									className:
																										"rounded-md px-3 py-2 transition-colors hover:bg-accent/50 hover:text-foreground",
																									children:
																										"Extension",
																								}),
																								(0, t.jsx)(i.default, {
																									href: s
																										.INTERNAL_LINKS
																										.PRIVACY_POLICY_WEBSITE,
																									onClick: () =>
																										d(!1),
																									className:
																										"rounded-md px-3 py-2 transition-colors hover:bg-accent/50 hover:text-foreground",
																									children:
																										"Roo Code Cloud",
																								}),
																							],
																						}),
																					}),
																			],
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)(i.default, {
																			href: "/legal/cookies",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Cookie Policy",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)(i.default, {
																			href: "/legal/subprocessors",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Subprocessors",
																		}),
																	}),
																],
															}),
														],
													}),
													(0, t.jsxs)("div", {
														className: "mt-10 md:mt-0",
														children: [
															(0, t.jsx)("h3", {
																className:
																	"text-sm font-semibold uppercase leading-6 text-foreground",
																children: "Connect",
															}),
															(0, t.jsxs)("ul", {
																className: "mt-6 space-y-4",
																children: [
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: s.EXTERNAL_LINKS.GITHUB,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "GitHub",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: s.EXTERNAL_LINKS.DISCORD,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Discord",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: s.EXTERNAL_LINKS.REDDIT,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Reddit",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: s.EXTERNAL_LINKS.X,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "X / Twitter",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: s.EXTERNAL_LINKS.LINKEDIN,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "LinkedIn",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: s.EXTERNAL_LINKS.BLUESKY,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Bluesky",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: s.EXTERNAL_LINKS.TIKTOK,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "TikTok",
																		}),
																	}),
																	(0, t.jsx)("li", {
																		children: (0, t.jsx)("a", {
																			href: s.EXTERNAL_LINKS.YOUTUBE,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "YouTube",
																		}),
																	}),
																],
															}),
														],
													}),
												],
											}),
										],
									}),
								],
							}),
							(0, t.jsx)("div", {
								className: "mt-16 flex border-t border-border pt-8 sm:mt-20 lg:mt-24",
								children: (0, t.jsxs)("p", {
									className: "mx-auto text-sm leading-5 text-muted-foreground",
									children: ["© ", new Date().getFullYear(), " Roo Code. All rights reserved."],
								}),
							}),
						],
					}),
				})
			)
		}
		e.s(["Footer", () => d])
	},
	87766,
	89797,
	(e) => {
		"use strict"
		var t = e.i(8026),
			a = e.i(10008),
			i = e.i(90306),
			n = e.i(12537)
		function r(e) {
			return (0, n.GenIcon)({
				tag: "svg",
				attr: { viewBox: "0 0 15 15", fill: "none" },
				child: [
					{
						tag: "path",
						attr: {
							fillRule: "evenodd",
							clipRule: "evenodd",
							d: "M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z",
							fill: "currentColor",
						},
						child: [],
					},
				],
			})(e)
		}
		function o(e) {
			return (0, n.GenIcon)({
				tag: "svg",
				attr: { viewBox: "0 0 15 15", fill: "none" },
				child: [
					{
						tag: "path",
						attr: {
							fillRule: "evenodd",
							clipRule: "evenodd",
							d: "M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z",
							fill: "currentColor",
						},
						child: [],
					},
				],
			})(e)
		}
		function s(e) {
			return (0, n.GenIcon)({
				tag: "svg",
				attr: { viewBox: "0 0 15 15", fill: "none" },
				child: [
					{
						tag: "path",
						attr: {
							fillRule: "evenodd",
							clipRule: "evenodd",
							d: "M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z",
							fill: "currentColor",
						},
						child: [],
					},
				],
			})(e)
		}
		e.s(["RxGithubLogo", () => r, "RxMoon", () => o, "RxSun", () => s], 89797), e.i(8068)
		var l = e.i(38387)
		function u() {
			let { theme: e, setTheme: n } = (0, i.useTheme)(),
				[r, u] = (0, a.useState)(!1)
			return ((0, a.useEffect)(() => {
				u(!0)
			}, []),
			r)
				? (0, t.jsx)(l.Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => n("dark" === e ? "light" : "dark"),
						className: "h-9 w-9",
						"aria-label": "Toggle theme",
						children:
							"dark" === e
								? (0, t.jsx)(s, { className: "h-4 w-4 transition-all" })
								: (0, t.jsx)(o, { className: "h-4 w-4 transition-all" }),
					})
				: (0, t.jsx)(l.Button, {
						variant: "ghost",
						size: "icon",
						disabled: !0,
						className: "h-9 w-9",
						children: (0, t.jsx)(s, { className: "h-4 w-4" }),
					})
		}
		e.s(["default", () => u], 87766)
	},
	1840,
	(e) => {
		"use strict"
		var t = e.i(8026),
			a = e.i(21862),
			i = e.i(45438),
			n = e.i(10008),
			r = e.i(89797),
			o = e.i(98807),
			s = e.i(12537)
		function l(e) {
			return (0, s.GenIcon)({
				tag: "svg",
				attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
				child: [
					{
						tag: "path",
						attr: {
							fillRule: "evenodd",
							d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
							clipRule: "evenodd",
						},
						child: [],
					},
				],
			})(e)
		}
		var u = e.i(36936),
			d = e.i(42506)
		e.i(8068)
		var c = e.i(5678),
			m = e.i(87766)
		let p = (0, e.i(21387).default)("brain", [
			["path", { d: "M12 18V5", key: "adv99a" }],
			["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
			["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
			["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
			["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
			["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
			["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
			["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }],
		])
		var g = e.i(33841),
			h = e.i(65182),
			f = e.i(3883),
			v = e.i(74209),
			b = e.i(68069),
			k = e.i(4113),
			y = e.i(91967),
			x = e.i(24805),
			z = e.i(93180),
			w = e.i(26613),
			_ = n.createContext(void 0),
			$ = e.i(24196),
			j = e.i(55162),
			I = e.i(75263)
		function S(e) {
			let a = e + "CollectionProvider",
				[i, r] = (0, k.createContextScope)(a),
				[o, s] = i(a, { collectionRef: { current: null }, itemMap: new Map() }),
				l = (e) => {
					let { scope: a, children: i } = e,
						r = n.default.useRef(null),
						s = n.default.useRef(new Map()).current
					return (0, t.jsx)(o, { scope: a, itemMap: s, collectionRef: r, children: i })
				}
			l.displayName = a
			let u = e + "CollectionSlot",
				d = (0, I.createSlot)(u),
				c = n.default.forwardRef((e, a) => {
					let { scope: i, children: n } = e,
						r = s(u, i),
						o = (0, w.useComposedRefs)(a, r.collectionRef)
					return (0, t.jsx)(d, { ref: o, children: n })
				})
			c.displayName = u
			let m = e + "CollectionItemSlot",
				p = "data-radix-collection-item",
				g = (0, I.createSlot)(m),
				h = n.default.forwardRef((e, a) => {
					let { scope: i, children: r, ...o } = e,
						l = n.default.useRef(null),
						u = (0, w.useComposedRefs)(a, l),
						d = s(m, i)
					return (
						n.default.useEffect(() => (d.itemMap.set(l, { ref: l, ...o }), () => void d.itemMap.delete(l))),
						(0, t.jsx)(g, { ...{ [p]: "" }, ref: u, children: r })
					)
				})
			return (
				(h.displayName = m),
				[
					{ Provider: l, Slot: c, ItemSlot: h },
					function (t) {
						let a = s(e + "CollectionConsumer", t)
						return n.default.useCallback(() => {
							let e = a.collectionRef.current
							if (!e) return []
							let t = Array.from(e.querySelectorAll(`[${p}]`))
							return Array.from(a.itemMap.values()).sort(
								(e, a) => t.indexOf(e.ref.current) - t.indexOf(a.ref.current),
							)
						}, [a.collectionRef, a.itemMap])
					},
					r,
				]
			)
		}
		var C = new WeakMap()
		function N(e, t) {
			var a, i
			let n, r, o
			if ("at" in Array.prototype) return Array.prototype.at.call(e, t)
			let s = ((a = e), (i = t), (n = a.length), (o = (r = O(i)) >= 0 ? r : n + r) < 0 || o >= n ? -1 : o)
			return -1 === s ? void 0 : e[s]
		}
		function O(e) {
			return e != e || 0 === e ? 0 : Math.trunc(e)
		}
		;(class e extends Map {
			#f
			constructor(e) {
				super(e), (this.#f = [...super.keys()]), C.set(this, !0)
			}
			set(e, t) {
				return (
					C.get(this) && (this.has(e) ? (this.#f[this.#f.indexOf(e)] = e) : this.#f.push(e)),
					super.set(e, t),
					this
				)
			}
			insert(e, t, a) {
				let i,
					n = this.has(t),
					r = this.#f.length,
					o = O(e),
					s = o >= 0 ? o : r + o,
					l = s < 0 || s >= r ? -1 : s
				if (l === this.size || (n && l === this.size - 1) || -1 === l) return this.set(t, a), this
				let u = this.size + +!n
				o < 0 && s++
				let d = [...this.#f],
					c = !1
				for (let e = s; e < u; e++)
					if (s === e) {
						let r = d[e]
						d[e] === t && (r = d[e + 1]), n && this.delete(t), (i = this.get(r)), this.set(t, a)
					} else {
						c || d[e - 1] !== t || (c = !0)
						let a = d[c ? e : e - 1],
							n = i
						;(i = this.get(a)), this.delete(a), this.set(a, n)
					}
				return this
			}
			with(t, a, i) {
				let n = new e(this)
				return n.insert(t, a, i), n
			}
			before(e) {
				let t = this.#f.indexOf(e) - 1
				if (!(t < 0)) return this.entryAt(t)
			}
			setBefore(e, t, a) {
				let i = this.#f.indexOf(e)
				return -1 === i ? this : this.insert(i, t, a)
			}
			after(e) {
				let t = this.#f.indexOf(e)
				if (-1 !== (t = -1 === t || t === this.size - 1 ? -1 : t + 1)) return this.entryAt(t)
			}
			setAfter(e, t, a) {
				let i = this.#f.indexOf(e)
				return -1 === i ? this : this.insert(i + 1, t, a)
			}
			first() {
				return this.entryAt(0)
			}
			last() {
				return this.entryAt(-1)
			}
			clear() {
				return (this.#f = []), super.clear()
			}
			delete(e) {
				let t = super.delete(e)
				return t && this.#f.splice(this.#f.indexOf(e), 1), t
			}
			deleteAt(e) {
				let t = this.keyAt(e)
				return void 0 !== t && this.delete(t)
			}
			at(e) {
				let t = N(this.#f, e)
				if (void 0 !== t) return this.get(t)
			}
			entryAt(e) {
				let t = N(this.#f, e)
				if (void 0 !== t) return [t, this.get(t)]
			}
			indexOf(e) {
				return this.#f.indexOf(e)
			}
			keyAt(e) {
				return N(this.#f, e)
			}
			from(e, t) {
				let a = this.indexOf(e)
				if (-1 === a) return
				let i = a + t
				return i < 0 && (i = 0), i >= this.size && (i = this.size - 1), this.at(i)
			}
			keyFrom(e, t) {
				let a = this.indexOf(e)
				if (-1 === a) return
				let i = a + t
				return i < 0 && (i = 0), i >= this.size && (i = this.size - 1), this.keyAt(i)
			}
			find(e, t) {
				let a = 0
				for (let i of this) {
					if (Reflect.apply(e, t, [i, a, this])) return i
					a++
				}
			}
			findIndex(e, t) {
				let a = 0
				for (let i of this) {
					if (Reflect.apply(e, t, [i, a, this])) return a
					a++
				}
				return -1
			}
			filter(t, a) {
				let i = [],
					n = 0
				for (let e of this) Reflect.apply(t, a, [e, n, this]) && i.push(e), n++
				return new e(i)
			}
			map(t, a) {
				let i = [],
					n = 0
				for (let e of this) i.push([e[0], Reflect.apply(t, a, [e, n, this])]), n++
				return new e(i)
			}
			reduce(...e) {
				let [t, a] = e,
					i = 0,
					n = a ?? this.at(0)
				for (let a of this) (n = 0 === i && 1 === e.length ? a : Reflect.apply(t, this, [n, a, i, this])), i++
				return n
			}
			reduceRight(...e) {
				let [t, a] = e,
					i = a ?? this.at(-1)
				for (let a = this.size - 1; a >= 0; a--) {
					let n = this.at(a)
					i = a === this.size - 1 && 1 === e.length ? n : Reflect.apply(t, this, [i, n, a, this])
				}
				return i
			}
			toSorted(t) {
				return new e([...this.entries()].sort(t))
			}
			toReversed() {
				let t = new e()
				for (let e = this.size - 1; e >= 0; e--) {
					let a = this.keyAt(e),
						i = this.get(a)
					t.set(a, i)
				}
				return t
			}
			toSpliced(...t) {
				let a = [...this.entries()]
				return a.splice(...t), new e(a)
			}
			slice(t, a) {
				let i = new e(),
					n = this.size - 1
				if (void 0 === t) return i
				t < 0 && (t += this.size), void 0 !== a && a > 0 && (n = a - 1)
				for (let e = t; e <= n; e++) {
					let t = this.keyAt(e),
						a = this.get(t)
					i.set(t, a)
				}
				return i
			}
			every(e, t) {
				let a = 0
				for (let i of this) {
					if (!Reflect.apply(e, t, [i, a, this])) return !1
					a++
				}
				return !0
			}
			some(e, t) {
				let a = 0
				for (let i of this) {
					if (Reflect.apply(e, t, [i, a, this])) return !0
					a++
				}
				return !1
			}
		})
		var E = e.i(80959),
			P = e.i(29241),
			U = e.i(84123),
			T = Object.freeze({
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
			A = n.forwardRef((e, a) => (0, t.jsx)(x.Primitive.span, { ...e, ref: a, style: { ...T, ...e.style } }))
		A.displayName = "VisuallyHidden"
		var D = "NavigationMenu",
			[Z, R, L] = S(D),
			[M, q, K] = S(D),
			[F, B] = (0, k.createContextScope)(D, [L, K]),
			[G, V] = F(D),
			[W, J] = F(D),
			H = n.forwardRef((e, a) => {
				let i,
					{
						__scopeNavigationMenu: r,
						value: o,
						onValueChange: s,
						defaultValue: l,
						delayDuration: u = 200,
						skipDelayDuration: d = 300,
						orientation: c = "horizontal",
						dir: m,
						...p
					} = e,
					[g, h] = n.useState(null),
					f = (0, w.useComposedRefs)(a, (e) => h(e)),
					v = ((i = n.useContext(_)), m || i || "ltr"),
					b = n.useRef(0),
					k = n.useRef(0),
					y = n.useRef(0),
					[$, j] = n.useState(!0),
					[I, S] = (0, z.useControllableState)({
						prop: o,
						onChange: (e) => {
							let t = d > 0
							"" !== e
								? (window.clearTimeout(y.current), t && j(!1))
								: (window.clearTimeout(y.current), (y.current = window.setTimeout(() => j(!0), d))),
								s?.(e)
						},
						defaultProp: l ?? "",
						caller: D,
					}),
					C = n.useCallback(() => {
						window.clearTimeout(k.current), (k.current = window.setTimeout(() => S(""), 150))
					}, [S]),
					N = n.useCallback(
						(e) => {
							window.clearTimeout(k.current), S(e)
						},
						[S],
					),
					O = n.useCallback(
						(e) => {
							I === e
								? window.clearTimeout(k.current)
								: (b.current = window.setTimeout(() => {
										window.clearTimeout(k.current), S(e)
									}, u))
						},
						[I, S, u],
					)
				return (
					n.useEffect(
						() => () => {
							window.clearTimeout(b.current),
								window.clearTimeout(k.current),
								window.clearTimeout(y.current)
						},
						[],
					),
					(0, t.jsx)(Q, {
						scope: r,
						isRootMenu: !0,
						value: I,
						dir: v,
						orientation: c,
						rootNavigationMenu: g,
						onTriggerEnter: (e) => {
							window.clearTimeout(b.current), $ ? O(e) : N(e)
						},
						onTriggerLeave: () => {
							window.clearTimeout(b.current), C()
						},
						onContentEnter: () => window.clearTimeout(k.current),
						onContentLeave: C,
						onItemSelect: (e) => {
							S((t) => (t === e ? "" : e))
						},
						onItemDismiss: () => S(""),
						children: (0, t.jsx)(x.Primitive.nav, {
							"aria-label": "Main",
							"data-orientation": c,
							dir: v,
							...p,
							ref: f,
						}),
					})
				)
			})
		H.displayName = D
		var X = "NavigationMenuSub"
		n.forwardRef((e, a) => {
			let {
					__scopeNavigationMenu: i,
					value: n,
					onValueChange: r,
					defaultValue: o,
					orientation: s = "horizontal",
					...l
				} = e,
				u = V(X, i),
				[d, c] = (0, z.useControllableState)({ prop: n, onChange: r, defaultProp: o ?? "", caller: X })
			return (0, t.jsx)(Q, {
				scope: i,
				isRootMenu: !1,
				value: d,
				dir: u.dir,
				orientation: s,
				rootNavigationMenu: u.rootNavigationMenu,
				onTriggerEnter: (e) => c(e),
				onItemSelect: (e) => c(e),
				onItemDismiss: () => c(""),
				children: (0, t.jsx)(x.Primitive.div, { "data-orientation": s, ...l, ref: a }),
			})
		}).displayName = X
		var Q = (e) => {
				let a,
					{
						scope: i,
						isRootMenu: r,
						rootNavigationMenu: o,
						dir: s,
						orientation: l,
						children: u,
						value: d,
						onItemSelect: c,
						onItemDismiss: m,
						onTriggerEnter: p,
						onTriggerLeave: g,
						onContentEnter: h,
						onContentLeave: f,
					} = e,
					[v, b] = n.useState(null),
					[k, y] = n.useState(new Map()),
					[x, z] = n.useState(null)
				return (0, t.jsx)(G, {
					scope: i,
					isRootMenu: r,
					rootNavigationMenu: o,
					value: d,
					previousValue:
						((a = n.useRef({ value: d, previous: d })),
						n.useMemo(
							() => (
								a.current.value !== d &&
									((a.current.previous = a.current.value), (a.current.value = d)),
								a.current.previous
							),
							[d],
						)),
					baseId: (0, j.useId)(),
					dir: s,
					orientation: l,
					viewport: v,
					onViewportChange: b,
					indicatorTrack: x,
					onIndicatorTrackChange: z,
					onTriggerEnter: (0, U.useCallbackRef)(p),
					onTriggerLeave: (0, U.useCallbackRef)(g),
					onContentEnter: (0, U.useCallbackRef)(h),
					onContentLeave: (0, U.useCallbackRef)(f),
					onItemSelect: (0, U.useCallbackRef)(c),
					onItemDismiss: (0, U.useCallbackRef)(m),
					onViewportContentChange: n.useCallback((e, t) => {
						y((a) => (a.set(e, t), new Map(a)))
					}, []),
					onViewportContentRemove: n.useCallback((e) => {
						y((t) => (t.has(e) ? (t.delete(e), new Map(t)) : t))
					}, []),
					children: (0, t.jsx)(Z.Provider, {
						scope: i,
						children: (0, t.jsx)(W, { scope: i, items: k, children: u }),
					}),
				})
			},
			Y = "NavigationMenuList",
			ee = n.forwardRef((e, a) => {
				let { __scopeNavigationMenu: i, ...n } = e,
					r = V(Y, i),
					o = (0, t.jsx)(x.Primitive.ul, { "data-orientation": r.orientation, ...n, ref: a })
				return (0, t.jsx)(x.Primitive.div, {
					style: { position: "relative" },
					ref: r.onIndicatorTrackChange,
					children: (0, t.jsx)(Z.Slot, {
						scope: i,
						children: r.isRootMenu ? (0, t.jsx)(ey, { asChild: !0, children: o }) : o,
					}),
				})
			})
		ee.displayName = Y
		var et = "NavigationMenuItem",
			[ea, ei] = F(et),
			en = n.forwardRef((e, a) => {
				let { __scopeNavigationMenu: i, value: r, ...o } = e,
					s = (0, j.useId)(),
					l = n.useRef(null),
					u = n.useRef(null),
					d = n.useRef(null),
					c = n.useRef(() => {}),
					m = n.useRef(!1),
					p = n.useCallback((e = "start") => {
						if (l.current) {
							c.current()
							let t = ew(l.current)
							t.length && e_("start" === e ? t : t.reverse())
						}
					}, []),
					g = n.useCallback(() => {
						if (l.current) {
							var e
							let t = ew(l.current)
							t.length &&
								((e = t).forEach((e) => {
									;(e.dataset.tabindex = e.getAttribute("tabindex") || ""),
										e.setAttribute("tabindex", "-1")
								}),
								(c.current = () => {
									e.forEach((e) => {
										let t = e.dataset.tabindex
										e.setAttribute("tabindex", t)
									})
								}))
						}
					}, [])
				return (0, t.jsx)(ea, {
					scope: i,
					value: r || s || "LEGACY_REACT_AUTO_VALUE",
					triggerRef: u,
					contentRef: l,
					focusProxyRef: d,
					wasEscapeCloseRef: m,
					onEntryKeyDown: p,
					onFocusProxyEnter: p,
					onRootContentClose: g,
					onContentFocusOutside: g,
					children: (0, t.jsx)(x.Primitive.li, { ...o, ref: a }),
				})
			})
		en.displayName = et
		var er = "NavigationMenuTrigger",
			eo = n.forwardRef((e, a) => {
				let { __scopeNavigationMenu: i, disabled: r, ...o } = e,
					s = V(er, e.__scopeNavigationMenu),
					l = ei(er, e.__scopeNavigationMenu),
					u = n.useRef(null),
					d = (0, w.useComposedRefs)(u, l.triggerRef, a),
					c = eI(s.baseId, l.value),
					m = eS(s.baseId, l.value),
					p = n.useRef(!1),
					g = n.useRef(!1),
					h = l.value === s.value
				return (0, t.jsxs)(t.Fragment, {
					children: [
						(0, t.jsx)(Z.ItemSlot, {
							scope: i,
							value: l.value,
							children: (0, t.jsx)(ez, {
								asChild: !0,
								children: (0, t.jsx)(x.Primitive.button, {
									id: c,
									disabled: r,
									"data-disabled": r ? "" : void 0,
									"data-state": ej(h),
									"aria-expanded": h,
									"aria-controls": m,
									...o,
									ref: d,
									onPointerEnter: (0, y.composeEventHandlers)(e.onPointerEnter, () => {
										;(g.current = !1), (l.wasEscapeCloseRef.current = !1)
									}),
									onPointerMove: (0, y.composeEventHandlers)(
										e.onPointerMove,
										eC(() => {
											r ||
												g.current ||
												l.wasEscapeCloseRef.current ||
												p.current ||
												(s.onTriggerEnter(l.value), (p.current = !0))
										}),
									),
									onPointerLeave: (0, y.composeEventHandlers)(
										e.onPointerLeave,
										eC(() => {
											r || (s.onTriggerLeave(), (p.current = !1))
										}),
									),
									onClick: (0, y.composeEventHandlers)(e.onClick, () => {
										s.onItemSelect(l.value), (g.current = h)
									}),
									onKeyDown: (0, y.composeEventHandlers)(e.onKeyDown, (e) => {
										let t = {
											horizontal: "ArrowDown",
											vertical: "rtl" === s.dir ? "ArrowLeft" : "ArrowRight",
										}[s.orientation]
										h && e.key === t && (l.onEntryKeyDown(), e.preventDefault())
									}),
								}),
							}),
						}),
						h &&
							(0, t.jsxs)(t.Fragment, {
								children: [
									(0, t.jsx)(A, {
										"aria-hidden": !0,
										tabIndex: 0,
										ref: l.focusProxyRef,
										onFocus: (e) => {
											let t = l.contentRef.current,
												a = e.relatedTarget,
												i = a === u.current,
												n = t?.contains(a)
											;(i || !n) && l.onFocusProxyEnter(i ? "start" : "end")
										},
									}),
									s.viewport && (0, t.jsx)("span", { "aria-owns": m }),
								],
							}),
					],
				})
			})
		eo.displayName = er
		var es = "navigationMenu.linkSelect",
			el = n.forwardRef((e, a) => {
				let { __scopeNavigationMenu: i, active: n, onSelect: r, ...o } = e
				return (0, t.jsx)(ez, {
					asChild: !0,
					children: (0, t.jsx)(x.Primitive.a, {
						"data-active": n ? "" : void 0,
						"aria-current": n ? "page" : void 0,
						...o,
						ref: a,
						onClick: (0, y.composeEventHandlers)(
							e.onClick,
							(e) => {
								let t = e.target,
									a = new CustomEvent(es, { bubbles: !0, cancelable: !0 })
								if (
									(t.addEventListener(es, (e) => r?.(e), { once: !0 }),
									(0, x.dispatchDiscreteCustomEvent)(t, a),
									!a.defaultPrevented && !e.metaKey)
								) {
									let e = new CustomEvent(eh, { bubbles: !0, cancelable: !0 })
									;(0, x.dispatchDiscreteCustomEvent)(t, e)
								}
							},
							{ checkForDefaultPrevented: !1 },
						),
					}),
				})
			})
		el.displayName = "NavigationMenuLink"
		var eu = "NavigationMenuIndicator",
			ed = n.forwardRef((e, a) => {
				let { forceMount: i, ...n } = e,
					r = V(eu, e.__scopeNavigationMenu),
					o = !!r.value
				return r.indicatorTrack
					? b.default.createPortal(
							(0, t.jsx)($.Presence, { present: i || o, children: (0, t.jsx)(ec, { ...n, ref: a }) }),
							r.indicatorTrack,
						)
					: null
			})
		ed.displayName = eu
		var ec = n.forwardRef((e, a) => {
				let { __scopeNavigationMenu: i, ...r } = e,
					o = V(eu, i),
					s = R(i),
					[l, u] = n.useState(null),
					[d, c] = n.useState(null),
					m = "horizontal" === o.orientation,
					p = !!o.value
				n.useEffect(() => {
					let e = s(),
						t = e.find((e) => e.value === o.value)?.ref.current
					t && u(t)
				}, [s, o.value])
				let g = () => {
					l && c({ size: m ? l.offsetWidth : l.offsetHeight, offset: m ? l.offsetLeft : l.offsetTop })
				}
				return (
					e$(l, g),
					e$(o.indicatorTrack, g),
					d
						? (0, t.jsx)(x.Primitive.div, {
								"aria-hidden": !0,
								"data-state": p ? "visible" : "hidden",
								"data-orientation": o.orientation,
								...r,
								ref: a,
								style: {
									position: "absolute",
									...(m
										? { left: 0, width: d.size + "px", transform: `translateX(${d.offset}px)` }
										: { top: 0, height: d.size + "px", transform: `translateY(${d.offset}px)` }),
									...r.style,
								},
							})
						: null
				)
			}),
			em = "NavigationMenuContent",
			ep = n.forwardRef((e, a) => {
				let { forceMount: i, ...n } = e,
					r = V(em, e.__scopeNavigationMenu),
					o = ei(em, e.__scopeNavigationMenu),
					s = (0, w.useComposedRefs)(o.contentRef, a),
					l = o.value === r.value,
					u = {
						value: o.value,
						triggerRef: o.triggerRef,
						focusProxyRef: o.focusProxyRef,
						wasEscapeCloseRef: o.wasEscapeCloseRef,
						onContentFocusOutside: o.onContentFocusOutside,
						onRootContentClose: o.onRootContentClose,
						...n,
					}
				return r.viewport
					? (0, t.jsx)(eg, { forceMount: i, ...u, ref: s })
					: (0, t.jsx)($.Presence, {
							present: i || l,
							children: (0, t.jsx)(ef, {
								"data-state": ej(l),
								...u,
								ref: s,
								onPointerEnter: (0, y.composeEventHandlers)(e.onPointerEnter, r.onContentEnter),
								onPointerLeave: (0, y.composeEventHandlers)(e.onPointerLeave, eC(r.onContentLeave)),
								style: { pointerEvents: !l && r.isRootMenu ? "none" : void 0, ...u.style },
							}),
						})
			})
		ep.displayName = em
		var eg = n.forwardRef((e, t) => {
				let { onViewportContentChange: a, onViewportContentRemove: i } = V(em, e.__scopeNavigationMenu)
				return (
					(0, P.useLayoutEffect)(() => {
						a(e.value, { ref: t, ...e })
					}, [e, t, a]),
					(0, P.useLayoutEffect)(() => () => i(e.value), [e.value, i]),
					null
				)
			}),
			eh = "navigationMenu.rootContentDismiss",
			ef = n.forwardRef((e, a) => {
				let {
						__scopeNavigationMenu: i,
						value: r,
						triggerRef: o,
						focusProxyRef: s,
						wasEscapeCloseRef: l,
						onRootContentClose: u,
						onContentFocusOutside: d,
						...c
					} = e,
					m = V(em, i),
					p = n.useRef(null),
					g = (0, w.useComposedRefs)(p, a),
					h = eI(m.baseId, r),
					f = eS(m.baseId, r),
					v = R(i),
					b = n.useRef(null),
					{ onItemDismiss: k } = m
				n.useEffect(() => {
					let e = p.current
					if (m.isRootMenu && e) {
						let t = () => {
							k(), u(), e.contains(document.activeElement) && o.current?.focus()
						}
						return e.addEventListener(eh, t), () => e.removeEventListener(eh, t)
					}
				}, [m.isRootMenu, e.value, o, k, u])
				let x = n.useMemo(() => {
					let e = v().map((e) => e.value)
					"rtl" === m.dir && e.reverse()
					let t = e.indexOf(m.value),
						a = e.indexOf(m.previousValue),
						i = r === m.value,
						n = a === e.indexOf(r)
					if (!i && !n) return b.current
					let o = (() => {
						if (t !== a) {
							if (i && -1 !== a) return t > a ? "from-end" : "from-start"
							if (n && -1 !== t) return t > a ? "to-start" : "to-end"
						}
						return null
					})()
					return (b.current = o), o
				}, [m.previousValue, m.value, m.dir, v, r])
				return (0, t.jsx)(ey, {
					asChild: !0,
					children: (0, t.jsx)(E.DismissableLayer, {
						id: f,
						"aria-labelledby": h,
						"data-motion": x,
						"data-orientation": m.orientation,
						...c,
						ref: g,
						disableOutsidePointerEvents: !1,
						onDismiss: () => {
							let e = new Event(eh, { bubbles: !0, cancelable: !0 })
							p.current?.dispatchEvent(e)
						},
						onFocusOutside: (0, y.composeEventHandlers)(e.onFocusOutside, (e) => {
							d()
							let t = e.target
							m.rootNavigationMenu?.contains(t) && e.preventDefault()
						}),
						onPointerDownOutside: (0, y.composeEventHandlers)(e.onPointerDownOutside, (e) => {
							let t = e.target,
								a = v().some((e) => e.ref.current?.contains(t)),
								i = m.isRootMenu && m.viewport?.contains(t)
							;(a || i || !m.isRootMenu) && e.preventDefault()
						}),
						onKeyDown: (0, y.composeEventHandlers)(e.onKeyDown, (e) => {
							let t = e.altKey || e.ctrlKey || e.metaKey
							if ("Tab" === e.key && !t) {
								let t = ew(e.currentTarget),
									a = document.activeElement,
									i = t.findIndex((e) => e === a)
								e_(e.shiftKey ? t.slice(0, i).reverse() : t.slice(i + 1, t.length))
									? e.preventDefault()
									: s.current?.focus()
							}
						}),
						onEscapeKeyDown: (0, y.composeEventHandlers)(e.onEscapeKeyDown, (e) => {
							l.current = !0
						}),
					}),
				})
			}),
			ev = "NavigationMenuViewport",
			eb = n.forwardRef((e, a) => {
				let { forceMount: i, ...n } = e,
					r = !!V(ev, e.__scopeNavigationMenu).value
				return (0, t.jsx)($.Presence, { present: i || r, children: (0, t.jsx)(ek, { ...n, ref: a }) })
			})
		eb.displayName = ev
		var ek = n.forwardRef((e, a) => {
				let { __scopeNavigationMenu: i, children: r, ...o } = e,
					s = V(ev, i),
					l = (0, w.useComposedRefs)(a, s.onViewportChange),
					u = J(em, e.__scopeNavigationMenu),
					[d, c] = n.useState(null),
					[m, p] = n.useState(null),
					g = d ? d?.width + "px" : void 0,
					h = d ? d?.height + "px" : void 0,
					f = !!s.value,
					v = f ? s.value : s.previousValue
				return (
					e$(m, () => {
						m && c({ width: m.offsetWidth, height: m.offsetHeight })
					}),
					(0, t.jsx)(x.Primitive.div, {
						"data-state": ej(f),
						"data-orientation": s.orientation,
						...o,
						ref: l,
						style: {
							pointerEvents: !f && s.isRootMenu ? "none" : void 0,
							"--radix-navigation-menu-viewport-width": g,
							"--radix-navigation-menu-viewport-height": h,
							...o.style,
						},
						onPointerEnter: (0, y.composeEventHandlers)(e.onPointerEnter, s.onContentEnter),
						onPointerLeave: (0, y.composeEventHandlers)(e.onPointerLeave, eC(s.onContentLeave)),
						children: Array.from(u.items).map(([e, { ref: a, forceMount: i, ...n }]) => {
							let r = v === e
							return (0, t.jsx)(
								$.Presence,
								{
									present: i || r,
									children: (0, t.jsx)(ef, {
										...n,
										ref: (0, w.composeRefs)(a, (e) => {
											r && e && p(e)
										}),
									}),
								},
								e,
							)
						}),
					})
				)
			}),
			ey = n.forwardRef((e, a) => {
				let { __scopeNavigationMenu: i, ...n } = e,
					r = V("FocusGroup", i)
				return (0, t.jsx)(M.Provider, {
					scope: i,
					children: (0, t.jsx)(M.Slot, {
						scope: i,
						children: (0, t.jsx)(x.Primitive.div, { dir: r.dir, ...n, ref: a }),
					}),
				})
			}),
			ex = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
			ez = n.forwardRef((e, a) => {
				let { __scopeNavigationMenu: i, ...n } = e,
					r = q(i),
					o = V("FocusGroupItem", i)
				return (0, t.jsx)(M.ItemSlot, {
					scope: i,
					children: (0, t.jsx)(x.Primitive.button, {
						...n,
						ref: a,
						onKeyDown: (0, y.composeEventHandlers)(e.onKeyDown, (e) => {
							if (["Home", "End", ...ex].includes(e.key)) {
								let t = r().map((e) => e.ref.current)
								if (
									(["rtl" === o.dir ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(e.key) &&
										t.reverse(),
									ex.includes(e.key))
								) {
									let a = t.indexOf(e.currentTarget)
									t = t.slice(a + 1)
								}
								setTimeout(() => e_(t)), e.preventDefault()
							}
						}),
					}),
				})
			})
		function ew(e) {
			let t = [],
				a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
					acceptNode: (e) => {
						let t = "INPUT" === e.tagName && "hidden" === e.type
						return e.disabled || e.hidden || t
							? NodeFilter.FILTER_SKIP
							: e.tabIndex >= 0
								? NodeFilter.FILTER_ACCEPT
								: NodeFilter.FILTER_SKIP
					},
				})
			for (; a.nextNode(); ) t.push(a.currentNode)
			return t
		}
		function e_(e) {
			let t = document.activeElement
			return e.some((e) => e === t || (e.focus(), document.activeElement !== t))
		}
		function e$(e, t) {
			let a = (0, U.useCallbackRef)(t)
			;(0, P.useLayoutEffect)(() => {
				let t = 0
				if (e) {
					let i = new ResizeObserver(() => {
						cancelAnimationFrame(t), (t = window.requestAnimationFrame(a))
					})
					return (
						i.observe(e),
						() => {
							window.cancelAnimationFrame(t), i.unobserve(e)
						}
					)
				}
			}, [e, a])
		}
		function ej(e) {
			return e ? "open" : "closed"
		}
		function eI(e, t) {
			return `${e}-trigger-${t}`
		}
		function eS(e, t) {
			return `${e}-content-${t}`
		}
		function eC(e) {
			return (t) => ("mouse" === t.pointerType ? e(t) : void 0)
		}
		var eN = e.i(94237),
			eO = e.i(15628),
			eE = e.i(45326)
		let eP = n.forwardRef(({ className: e, children: a, ...i }, n) =>
			(0, t.jsxs)(H, {
				ref: n,
				className: (0, eE.cn)("relative z-10 flex max-w-max flex-1 items-center", e),
				...i,
				children: [a, (0, t.jsx)(eZ, {})],
			}),
		)
		eP.displayName = H.displayName
		let eU = n.forwardRef(({ className: e, ...a }, i) =>
			(0, t.jsx)(ee, {
				ref: i,
				className: (0, eE.cn)("group flex flex-1 list-none items-center space-x-1", e),
				...a,
			}),
		)
		eU.displayName = ee.displayName
		let eT = (0, eN.cva)(
				"group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent",
			),
			eA = n.forwardRef(({ className: e, children: a, ...i }, n) =>
				(0, t.jsxs)(eo, {
					ref: n,
					className: (0, eE.cn)(eT(), "group", e),
					...i,
					children: [
						a,
						" ",
						(0, t.jsx)(eO.ChevronDown, {
							className:
								"relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
							"aria-hidden": "true",
						}),
					],
				}),
			)
		eA.displayName = eo.displayName
		let eD = n.forwardRef(({ className: e, ...a }, i) =>
			(0, t.jsx)(ep, {
				ref: i,
				className: (0, eE.cn)(
					"left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
					e,
				),
				...a,
			}),
		)
		eD.displayName = ep.displayName
		let eZ = n.forwardRef(({ className: e, ...a }, i) =>
			(0, t.jsx)("div", {
				className: (0, eE.cn)("absolute left-0 top-full flex justify-center"),
				children: (0, t.jsx)(eb, {
					className: (0, eE.cn)(
						"origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
						e,
					),
					ref: i,
					...a,
				}),
			}),
		)
		function eR({ className: e }) {
			return (0, t.jsx)("svg", {
				className: e,
				viewBox: "0 0 100 100",
				fill: "currentColor",
				xmlns: "http://www.w3.org/2000/svg",
				children: (0, t.jsx)("path", {
					d: "M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z",
				}),
			})
		}
		function eL({ stars: e, downloads: s }) {
			let [b, k] = (0, n.useState)(!1),
				y = (0, d.useLogoSrc)()
			return (0, t.jsxs)("header", {
				className: "sticky font-light top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md",
				children: [
					(0, t.jsxs)("div", {
						className: "container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8",
						children: [
							(0, t.jsx)("div", {
								className: "flex items-center flex-shrink-0",
								children: (0, t.jsx)(a.default, {
									href: "/",
									className: "flex items-center",
									children: (0, t.jsx)(i.default, {
										src: y,
										alt: "Roo Code Logo",
										width: 130,
										height: 24,
										className: "h-[24px] w-auto",
									}),
								}),
							}),
							(0, t.jsx)(eP, {
								className: "grow ml-6 hidden text-sm md:flex",
								children: (0, t.jsxs)(eU, {
									children: [
										(0, t.jsxs)(en, {
											children: [
												(0, t.jsx)(eA, {
													className: "bg-transparent font-light",
													children: "Product",
												}),
												(0, t.jsx)(eD, {
													children: (0, t.jsxs)("ul", {
														className: "grid min-w-[260px] gap-1 p-2",
														children: [
															(0, t.jsx)("li", {
																children: (0, t.jsx)(el, {
																	asChild: !0,
																	children: (0, t.jsxs)(a.default, {
																		href: "/extension",
																		className:
																			"flex items-center select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
																		children: [
																			(0, t.jsx)(h.Puzzle, {
																				className: "size-3 mr-2",
																			}),
																			"Roo Code VS Code Extension",
																		],
																	}),
																}),
															}),
															(0, t.jsx)("li", {
																children: (0, t.jsx)(el, {
																	asChild: !0,
																	children: (0, t.jsxs)(a.default, {
																		href: "/cloud",
																		className:
																			"flex items-center select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
																		children: [
																			(0, t.jsx)(g.Cloud, {
																				className: "size-3 mr-2",
																			}),
																			"Roo Code Cloud",
																		],
																	}),
																}),
															}),
															(0, t.jsx)("li", {
																children: (0, t.jsx)(el, {
																	asChild: !0,
																	children: (0, t.jsxs)(a.default, {
																		href: "/slack",
																		className:
																			"flex items-center select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
																		children: [
																			(0, t.jsx)(f.Slack, {
																				className: "size-3 mr-2",
																			}),
																			"Roo Code for Slack",
																		],
																	}),
																}),
															}),
															(0, t.jsx)("li", {
																children: (0, t.jsx)(el, {
																	asChild: !0,
																	children: (0, t.jsxs)(a.default, {
																		href: "/linear",
																		className:
																			"flex items-center select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
																		children: [
																			(0, t.jsx)(eR, {
																				className: "size-3 mr-2",
																			}),
																			"Roo Code for Linear",
																		],
																	}),
																}),
															}),
															(0, t.jsx)("li", {
																children: (0, t.jsx)(el, {
																	asChild: !0,
																	children: (0, t.jsxs)(a.default, {
																		href: "/provider",
																		className:
																			"flex items-center select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
																		children: [
																			(0, t.jsx)(p, { className: "size-3 mr-2" }),
																			"Roo Code Router",
																		],
																	}),
																}),
															}),
														],
													}),
												}),
											],
										}),
										(0, t.jsxs)(en, {
											children: [
												(0, t.jsx)(eA, {
													className: "bg-transparent font-light",
													children: "Resources",
												}),
												(0, t.jsx)(eD, {
													children: (0, t.jsxs)("ul", {
														className: "grid min-w-[260px] gap-1 p-2",
														children: [
															(0, t.jsx)("li", {
																children: (0, t.jsx)(el, {
																	asChild: !0,
																	children: (0, t.jsx)(a.default, {
																		href: "/blog",
																		className:
																			"block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
																		children: "Blog",
																	}),
																}),
															}),
															(0, t.jsx)("li", {
																children: (0, t.jsx)(el, {
																	asChild: !0,
																	children: (0, t.jsx)(a.default, {
																		href: "/evals",
																		className:
																			"block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
																		children: "Evals",
																	}),
																}),
															}),
															(0, t.jsx)("li", {
																children: (0, t.jsx)(el, {
																	asChild: !0,
																	children: (0, t.jsx)("a", {
																		href: u.EXTERNAL_LINKS.DISCORD,
																		target: "_blank",
																		rel: "noopener noreferrer",
																		className:
																			"block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
																		children: "Discord",
																	}),
																}),
															}),
															(0, t.jsx)("li", {
																children: (0, t.jsx)(el, {
																	asChild: !0,
																	children: (0, t.jsx)("a", {
																		href: u.EXTERNAL_LINKS.SECURITY,
																		target: "_blank",
																		rel: "noopener noreferrer",
																		className:
																			"block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
																		children: "Trust Center",
																	}),
																}),
															}),
														],
													}),
												}),
											],
										}),
										(0, t.jsx)(en, {
											children: (0, t.jsx)(el, {
												asChild: !0,
												className: (0, eE.cn)(eT(), "bg-transparent font-light"),
												children: (0, t.jsx)("a", {
													href: u.EXTERNAL_LINKS.DOCUMENTATION,
													target: "_blank",
													children: "Docs",
												}),
											}),
										}),
										(0, t.jsx)(en, {
											children: (0, t.jsx)(el, {
												asChild: !0,
												className: (0, eE.cn)(eT(), "bg-transparent font-light"),
												children: (0, t.jsx)(a.default, {
													href: "/pricing",
													children: "Pricing",
												}),
											}),
										}),
									],
								}),
							}),
							(0, t.jsxs)("div", {
								className: "hidden md:flex md:items-center md:space-x-4 flex-shrink-0 font-medium",
								children: [
									(0, t.jsxs)("div", {
										className: "flex flex-row space-x-2 flex-shrink-0",
										children: [
											(0, t.jsx)(m.default, {}),
											(0, t.jsxs)(a.default, {
												href: u.EXTERNAL_LINKS.GITHUB,
												target: "_blank",
												className:
													"hidden items-center gap-1.5 text-sm hover:text-foreground md:flex whitespace-nowrap",
												children: [
													(0, t.jsx)(r.RxGithubLogo, { className: "h-4 w-4" }),
													null !== e && (0, t.jsx)("span", { children: e }),
												],
											}),
										],
									}),
									(0, t.jsx)("a", {
										href: u.EXTERNAL_LINKS.CLOUD_APP_LOGIN,
										target: "_blank",
										rel: "noopener noreferrer",
										className:
											"hidden items-center gap-1.5 rounded-md py-2 text-sm border border-primary-background px-4 text-primary-background transition-all duration-200 hover:shadow-lg hover:scale-105 lg:flex",
										children: "Log in",
									}),
									(0, t.jsx)("a", {
										href: u.EXTERNAL_LINKS.CLOUD_APP_SIGNUP_HOME,
										target: "_blank",
										rel: "noopener noreferrer",
										className:
											"hidden items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground transition-all duration-200 hover:shadow-lg hover:scale-105 md:flex",
										children: "Sign Up",
									}),
									(0, t.jsxs)(a.default, {
										href: u.EXTERNAL_LINKS.MARKETPLACE,
										target: "_blank",
										className:
											"hidden items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground transition-all duration-200 hover:shadow-lg hover:scale-105 md:flex whitespace-nowrap",
										children: [
											(0, t.jsx)(o.VscVscode, { className: "-mr-[2px] mt-[1px] h-4 w-4" }),
											(0, t.jsxs)("span", {
												children: [
													"Install ",
													(0, t.jsx)("span", {
														className: "font-black max-lg:text-xs",
														children: "·",
													}),
												],
											}),
											null !== s && (0, t.jsx)("span", { children: s }),
										],
									}),
								],
							}),
							(0, t.jsxs)("button", {
								"aria-expanded": b,
								onClick: () => k(!b),
								className:
									"relative z-10 flex items-center justify-center rounded-full p-2 transition-colors hover:bg-accent md:hidden",
								"aria-label": "Toggle mobile menu",
								children: [
									(0, t.jsx)(l, { className: `h-6 w-6 ${b ? "hidden" : "block"}` }),
									(0, t.jsx)(v.X, { className: `h-6 w-6 ${b ? "block" : "hidden"}` }),
								],
							}),
						],
					}),
					(0, t.jsx)("div", {
						className: `fixed top-16 left-0 bg-background right-0 z-[100] transition-all duration-200 pointer-events-none md:hidden ${b ? "block h-dvh" : "hidden"}`,
						children: (0, t.jsxs)("nav", {
							className:
								"flex flex-col justify-between h-full pb-16 overflow-y-auto bg-background pointer-events-auto",
							children: [
								(0, t.jsxs)("div", {
									className: "grow-1 py-4 font-semibold text-lg",
									children: [
										(0, t.jsx)("a", {
											href: u.EXTERNAL_LINKS.DOCUMENTATION,
											target: "_blank",
											className: "block w-full p-5 text-left text-foreground active:opacity-50",
											onClick: () => k(!1),
											children: "Docs",
										}),
										(0, t.jsx)(a.default, {
											href: "/pricing",
											className: "block w-full p-5 text-left text-foreground active:opacity-50",
											onClick: () => k(!1),
											children: "Pricing",
										}),
										(0, t.jsxs)("div", {
											className: "mt-4 w-full",
											children: [
												(0, t.jsx)("div", {
													className:
														"px-5 pb-2 pt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground",
													children: "Product",
												}),
												(0, t.jsx)(a.default, {
													href: "/extension",
													className:
														"block w-full p-5 py-3 text-left text-foreground active:opacity-50",
													onClick: () => k(!1),
													children: "Roo Code VS Code Extension",
												}),
												(0, t.jsx)(a.default, {
													href: "/cloud",
													className:
														"block w-full p-5 py-3 text-left text-foreground active:opacity-50",
													onClick: () => k(!1),
													children: "Roo Code Cloud",
												}),
												(0, t.jsx)(a.default, {
													href: "/slack",
													className:
														"block w-full p-5 py-3 text-left text-foreground active:opacity-50",
													onClick: () => k(!1),
													children: "Roo Code for Slack",
												}),
												(0, t.jsx)(a.default, {
													href: "/provider",
													className:
														"block w-full p-5 py-3 text-left text-foreground active:opacity-50",
													onClick: () => k(!1),
													children: "Roo Code Router",
												}),
											],
										}),
										(0, t.jsxs)("div", {
											className: "mt-4 w-full",
											children: [
												(0, t.jsx)("div", {
													className:
														"px-5 pb-2 pt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground",
													children: "Resources",
												}),
												(0, t.jsx)(a.default, {
													href: "/blog",
													className:
														"block w-full p-5 py-3 text-left text-foreground active:opacity-50",
													onClick: () => k(!1),
													children: "Blog",
												}),
												(0, t.jsx)(c.ScrollButton, {
													targetId: "faq",
													className:
														"block w-full p-5 py-3 text-left text-foreground active:opacity-50",
													onClick: () => k(!1),
													children: "FAQ",
												}),
												(0, t.jsx)(a.default, {
													href: "/evals",
													className:
														"block w-full p-5 py-3 text-left text-foreground active:opacity-50",
													onClick: () => k(!1),
													children: "Evals",
												}),
												(0, t.jsx)("a", {
													href: u.EXTERNAL_LINKS.DISCORD,
													target: "_blank",
													rel: "noopener noreferrer",
													className:
														"block w-full p-5 py-3 text-left text-foreground active:opacity-50",
													onClick: () => k(!1),
													children: "Discord",
												}),
												(0, t.jsx)("a", {
													href: u.EXTERNAL_LINKS.SECURITY,
													target: "_blank",
													rel: "noopener noreferrer",
													className:
														"block w-full p-5 py-3 text-left text-foreground active:opacity-50",
													onClick: () => k(!1),
													children: "Security Center",
												}),
											],
										}),
									],
								}),
								(0, t.jsxs)("div", {
									className: "border-t border-border",
									children: [
										(0, t.jsxs)("div", {
											className: "flex items-center justify-around px-6 pt-2",
											children: [
												(0, t.jsxs)(a.default, {
													href: u.EXTERNAL_LINKS.GITHUB,
													target: "_blank",
													className:
														"inline-flex items-center gap-2 rounded-md p-3 text-sm transition-colors hover:bg-accent hover:text-foreground",
													onClick: () => k(!1),
													children: [
														(0, t.jsx)(r.RxGithubLogo, { className: "h-6 w-6" }),
														null !== e && (0, t.jsx)("span", { children: e }),
													],
												}),
												(0, t.jsx)("div", {
													className:
														"flex items-center rounded-md p-3 transition-colors hover:bg-accent",
													children: (0, t.jsx)(m.default, {}),
												}),
												(0, t.jsxs)(a.default, {
													href: u.EXTERNAL_LINKS.MARKETPLACE,
													target: "_blank",
													className:
														"inline-flex items-center gap-2 rounded-md p-3 text-sm transition-colors hover:bg-accent hover:text-foreground",
													onClick: () => k(!1),
													children: [
														(0, t.jsx)(o.VscVscode, { className: "h-6 w-6" }),
														null !== s && (0, t.jsx)("span", { children: s }),
													],
												}),
											],
										}),
										(0, t.jsxs)("div", {
											className: "flex gap-2 px-4 pb-4",
											children: [
												(0, t.jsx)("a", {
													href: u.EXTERNAL_LINKS.CLOUD_APP_SIGNUP_HOME,
													target: "_blank",
													rel: "noopener noreferrer",
													className:
														"flex items-center justify-center gap-2 rounded-full border border-primary bg-foreground p-4 w-full text-base font-semibold text-background",
													onClick: () => k(!1),
													children: "Sign up",
												}),
												(0, t.jsx)("a", {
													href: u.EXTERNAL_LINKS.CLOUD_APP_LOGIN,
													target: "_blank",
													rel: "noopener noreferrer",
													className:
														"flex items-center justify-center gap-2 rounded-full border border-primary bg-background p-4 w-full text-base font-semibold text-primary",
													onClick: () => k(!1),
													children: "Log in",
												}),
											],
										}),
									],
								}),
							],
						}),
					}),
				],
			})
		}
		;(eZ.displayName = eb.displayName),
			(n.forwardRef(({ className: e, ...a }, i) =>
				(0, t.jsx)(ed, {
					ref: i,
					className: (0, eE.cn)(
						"top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
						e,
					),
					...a,
					children: (0, t.jsx)("div", {
						className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md",
					}),
				}),
			).displayName = ed.displayName),
			e.s(["NavBar", () => eL], 1840)
	},
])
