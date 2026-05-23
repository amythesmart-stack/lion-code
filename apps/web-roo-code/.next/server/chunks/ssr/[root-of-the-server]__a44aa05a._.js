module.exports = [
	78560,
	(a, b, c) => {
		var d = function () {
			function a() {
				for (var a = 0, b = {}; a < arguments.length; a++) {
					var c = arguments[a]
					for (var d in c) b[d] = c[d]
				}
				return b
			}
			function b(a) {
				return a.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
			}
			return (function c(d) {
				function e() {}
				function f(b, c, f) {
					if ("u" > typeof document) {
						"number" == typeof (f = a({ path: "/" }, e.defaults, f)).expires &&
							(f.expires = new Date(new Date() * 1 + 864e5 * f.expires)),
							(f.expires = f.expires ? f.expires.toUTCString() : "")
						try {
							var g = JSON.stringify(c)
							;/^[\{\[]/.test(g) && (c = g)
						} catch (a) {}
						;(c = d.write
							? d.write(c, b)
							: encodeURIComponent(String(c)).replace(
									/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
									decodeURIComponent,
								)),
							(b = encodeURIComponent(String(b))
								.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
								.replace(/[\(\)]/g, escape))
						var h = ""
						for (var i in f) f[i] && ((h += "; " + i), !0 !== f[i] && (h += "=" + f[i].split(";")[0]))
						return (document.cookie = b + "=" + c + h)
					}
				}
				function g(a, c) {
					if ("u" > typeof document) {
						for (
							var e = {}, f = document.cookie ? document.cookie.split("; ") : [], g = 0;
							g < f.length;
							g++
						) {
							var h = f[g].split("="),
								i = h.slice(1).join("=")
							c || '"' !== i.charAt(0) || (i = i.slice(1, -1))
							try {
								var j = b(h[0])
								if (((i = (d.read || d)(i, j) || b(i)), c))
									try {
										i = JSON.parse(i)
									} catch (a) {}
								if (((e[j] = i), a === j)) break
							} catch (a) {}
						}
						return a ? e[a] : e
					}
				}
				return (
					(e.set = f),
					(e.get = function (a) {
						return g(a, !1)
					}),
					(e.getJSON = function (a) {
						return g(a, !0)
					}),
					(e.remove = function (b, c) {
						f(b, "", a(c, { expires: -1 }))
					}),
					(e.defaults = {}),
					(e.withConverter = c),
					e
				)
			})(function () {})
		}
		if ("function" == typeof define && define.amd) {
			let e
			void 0 !== (e = d(a.r, c, b)) && a.v(e)
		}
		b.exports = d()
	},
	58041,
	91222,
	97391,
	(a) => {
		"use strict"
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
			o,
			p = a.i(78560),
			q = a.i(67191),
			r = function (a) {
				var b = a.condition,
					c = a.wrapper,
					d = a.children
				return b ? c(d) : d
			}
		function s() {
			return (s = Object.assign.bind()).apply(this, arguments)
		}
		function t(a, b) {
			return (t = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (a, b) {
						return (a.__proto__ = b), a
					})(a, b)
		}
		var u = "bottom"
		;((b = o || (o = {})).STRICT = "strict"), (b.LAX = "lax"), (b.NONE = "none")
		var v = "byCookieValue",
			w = "CookieConsent",
			x = ["children"],
			y = {
				disableStyles: !1,
				hideOnAccept: !0,
				hideOnDecline: !0,
				location: u,
				visible: v,
				onAccept: function (a) {},
				onDecline: function () {},
				cookieName: w,
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
				sameSite: o.LAX,
				ButtonComponent: function (a) {
					var b = a.children,
						c = (function (a, b) {
							if (null == a) return {}
							var c,
								d,
								e = {},
								f = Object.keys(a)
							for (d = 0; d < f.length; d++) (c = f[d]), b.indexOf(c) >= 0 || (e[c] = a[c])
							return e
						})(a, x)
					return q.default.createElement("button", Object.assign({}, c), b)
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
			z = {
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
			A = function (a) {
				void 0 === a && (a = w)
				var b = p.default.get(a)
				return void 0 === b ? p.default.get(B(a)) : b
			},
			B = function (a) {
				return a + "-legacy"
			},
			C = (function (a) {
				function b() {
					var b
					return (
						(b = a.apply(this, arguments) || this),
						(b.state = z),
						(b.handleScroll = function () {
							var a = s({}, y, b.props).acceptOnScrollPercentage,
								c = document.documentElement,
								d = document.body,
								e = "scrollTop",
								f = "scrollHeight"
							;((c[e] || d[e]) / ((c[f] || d[f]) - c.clientHeight)) * 100 > a && b.accept(!0)
						}),
						(b.removeScrollListener = function () {
							b.props.acceptOnScroll && window.removeEventListener("scroll", b.handleScroll)
						}),
						b
					)
				}
				;(b.prototype = Object.create(a.prototype)), (b.prototype.constructor = b), t(b, a)
				var c = b.prototype
				return (
					(c.componentDidMount = function () {
						var a = this.props.debug
						;(void 0 === this.getCookieValue() || a) &&
							(this.setState({ visible: !0 }),
							this.props.acceptOnScroll &&
								window.addEventListener("scroll", this.handleScroll, { passive: !0 }))
					}),
					(c.componentWillUnmount = function () {
						this.removeScrollListener()
					}),
					(c.accept = function (a) {
						void 0 === a && (a = !1)
						var b,
							c = s({}, y, this.props),
							d = c.cookieName,
							e = c.cookieValue,
							f = c.hideOnAccept,
							g = c.onAccept
						this.setCookie(d, e),
							g(null != (b = a) && b),
							f && (this.setState({ visible: !1 }), this.removeScrollListener())
					}),
					(c.overlayClick = function () {
						var a = s({}, y, this.props),
							b = a.acceptOnOverlayClick,
							c = a.onOverlayClick
						b && this.accept(), c()
					}),
					(c.decline = function () {
						var a = s({}, y, this.props),
							b = a.cookieName,
							c = a.declineCookieValue,
							d = a.hideOnDecline,
							e = a.onDecline
						a.setDeclineCookie && this.setCookie(b, c), e(), d && this.setState({ visible: !1 })
					}),
					(c.setCookie = function (a, b) {
						var c = this.props,
							d = c.extraCookieOptions,
							e = c.expires,
							f = c.sameSite,
							g = this.props.cookieSecurity
						void 0 === g && (g = !window.location || "https:" === window.location.protocol)
						var h = s({ expires: e }, d, { sameSite: f, secure: g })
						f === o.NONE && p.default.set(B(a), b, h), p.default.set(a, b, h)
					}),
					(c.getCookieValue = function () {
						return A(this.props.cookieName)
					}),
					(c.render = function () {
						var a = this
						switch (this.props.visible) {
							case "hidden":
								return null
							case v:
								if (!this.state.visible) return null
						}
						var b = this.props,
							c = b.location,
							d = b.style,
							e = b.buttonStyle,
							f = b.declineButtonStyle,
							g = b.contentStyle,
							h = b.disableStyles,
							i = b.buttonText,
							j = b.declineButtonText,
							k = b.containerClasses,
							l = b.contentClasses,
							m = b.buttonClasses,
							n = b.buttonWrapperClasses,
							o = b.declineButtonClasses,
							p = b.buttonId,
							t = b.declineButtonId,
							w = b.disableButtonStyles,
							x = b.enableDeclineButton,
							y = b.flipButtons,
							z = b.ButtonComponent,
							A = b.overlay,
							B = b.overlayClasses,
							C = b.overlayStyle,
							D = b.ariaAcceptLabel,
							E = b.ariaDeclineLabel,
							F = b.customContainerAttributes,
							G = b.customContentAttributes,
							H = b.customButtonProps,
							I = b.customDeclineButtonProps,
							J = b.customButtonWrapperAttributes,
							K = {},
							L = {},
							M = {},
							N = {},
							O = {}
						switch (
							(h
								? ((K = Object.assign({}, d)),
									(L = Object.assign({}, e)),
									(M = Object.assign({}, f)),
									(N = Object.assign({}, g)),
									(O = Object.assign({}, C)))
								: ((K = Object.assign({}, s({}, this.state.style, d))),
									(N = Object.assign({}, s({}, this.state.contentStyle, g))),
									(O = Object.assign({}, s({}, this.state.overlayStyle, C))),
									w
										? ((L = Object.assign({}, e)), (M = Object.assign({}, f)))
										: ((L = Object.assign({}, s({}, this.state.buttonStyle, e))),
											(M = Object.assign({}, s({}, this.state.declineButtonStyle, f))))),
							c)
						) {
							case "top":
								K.top = "0"
								break
							case u:
								K.bottom = "0"
						}
						var P = []
						return (
							x &&
								P.push(
									q.default.createElement(
										z,
										Object.assign(
											{
												key: "declineButton",
												style: M,
												className: o,
												id: t,
												"aria-label": E,
												onClick: function () {
													a.decline()
												},
											},
											I,
										),
										j,
									),
								),
							P.push(
								q.default.createElement(
									z,
									Object.assign(
										{
											key: "acceptButton",
											style: L,
											className: m,
											id: p,
											"aria-label": D,
											onClick: function () {
												a.accept()
											},
										},
										H,
									),
									i,
								),
							),
							y && P.reverse(),
							q.default.createElement(
								r,
								{
									condition: A,
									wrapper: function (b) {
										return q.default.createElement(
											"div",
											{
												style: O,
												className: B,
												onClick: function () {
													a.overlayClick()
												},
											},
											b,
										)
									},
								},
								q.default.createElement(
									"div",
									Object.assign({ className: "" + k, style: K }, F),
									q.default.createElement(
										"div",
										Object.assign({ style: N, className: l }, G),
										this.props.children,
									),
									q.default.createElement(
										"div",
										Object.assign({ className: "" + n }, J),
										P.map(function (a) {
											return a
										}),
									),
								),
							)
						)
					}),
					b
				)
			})(q.Component)
		;(C.defaultProps = y), a.s(["default", 0, C], 91222)
		var D = a.i(80904)
		let E = Object.freeze({ status: "aborted" })
		function F(a, b, c) {
			function d(c, d) {
				var e
				for (let f in (Object.defineProperty(c, "_zod", { value: c._zod ?? {}, enumerable: !1 }),
				(e = c._zod).traits ?? (e.traits = new Set()),
				c._zod.traits.add(a),
				b(c, d),
				g.prototype))
					f in c || Object.defineProperty(c, f, { value: g.prototype[f].bind(c) })
				;(c._zod.constr = g), (c._zod.def = d)
			}
			let e = c?.Parent ?? Object
			class f extends e {}
			function g(a) {
				var b
				let e = c?.Parent ? new f() : this
				for (let c of (d(e, a), (b = e._zod).deferred ?? (b.deferred = []), e._zod.deferred)) c()
				return e
			}
			return (
				Object.defineProperty(f, "name", { value: a }),
				Object.defineProperty(g, "init", { value: d }),
				Object.defineProperty(g, Symbol.hasInstance, {
					value: (b) => (!!c?.Parent && b instanceof c.Parent) || b?._zod?.traits?.has(a),
				}),
				Object.defineProperty(g, "name", { value: a }),
				g
			)
		}
		let G = Symbol("zod_brand")
		class H extends Error {
			constructor() {
				super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")
			}
		}
		let I = {}
		function J(a) {
			return a && Object.assign(I, a), I
		}
		function K(a) {
			return a
		}
		function L(a) {
			return a
		}
		function M(a) {}
		function N(a) {
			throw Error()
		}
		function O(a) {}
		function P(a) {
			let b = Object.values(a).filter((a) => "number" == typeof a)
			return Object.entries(a)
				.filter(([a, c]) => -1 === b.indexOf(+a))
				.map(([a, b]) => b)
		}
		function Q(a, b = "|") {
			return a.map((a) => al(a)).join(b)
		}
		function R(a, b) {
			return "bigint" == typeof b ? b.toString() : b
		}
		function S(a) {
			return {
				get value() {
					{
						let b = a()
						return Object.defineProperty(this, "value", { value: b }), b
					}
				},
			}
		}
		function T(a) {
			return null == a
		}
		function U(a) {
			let b = +!!a.startsWith("^"),
				c = a.endsWith("$") ? a.length - 1 : a.length
			return a.slice(b, c)
		}
		function V(a, b) {
			let c = (a.toString().split(".")[1] || "").length,
				d = (b.toString().split(".")[1] || "").length,
				e = c > d ? c : d
			return (
				(Number.parseInt(a.toFixed(e).replace(".", "")) % Number.parseInt(b.toFixed(e).replace(".", ""))) /
				10 ** e
			)
		}
		function W(a, b, c) {
			Object.defineProperty(a, b, {
				get() {
					{
						let d = c()
						return (a[b] = d), d
					}
				},
				set(c) {
					Object.defineProperty(a, b, { value: c })
				},
				configurable: !0,
			})
		}
		function X(a, b, c) {
			Object.defineProperty(a, b, { value: c, writable: !0, enumerable: !0, configurable: !0 })
		}
		function Y(a, b) {
			return b ? b.reduce((a, b) => a?.[b], a) : a
		}
		function Z(a) {
			let b = Object.keys(a)
			return Promise.all(b.map((b) => a[b])).then((a) => {
				let c = {}
				for (let d = 0; d < b.length; d++) c[b[d]] = a[d]
				return c
			})
		}
		function $(a = 10) {
			let b = "abcdefghijklmnopqrstuvwxyz",
				c = ""
			for (let d = 0; d < a; d++) c += b[Math.floor(Math.random() * b.length)]
			return c
		}
		function _(a) {
			return JSON.stringify(a)
		}
		a.s(
			[
				"$ZodAsyncError",
				() => H,
				"$brand",
				0,
				G,
				"$constructor",
				() => F,
				"NEVER",
				0,
				E,
				"config",
				() => J,
				"globalConfig",
				0,
				I,
			],
			75485,
		)
		let aa = Error.captureStackTrace ? Error.captureStackTrace : (...a) => {}
		function ab(a) {
			return "object" == typeof a && null !== a && !Array.isArray(a)
		}
		let ac = S(() => {
			if ("u" > typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1
			try {
				return Function(""), !0
			} catch (a) {
				return !1
			}
		})
		function ad(a) {
			if (!1 === ab(a)) return !1
			let b = a.constructor
			if (void 0 === b) return !0
			let c = b.prototype
			return !1 !== ab(c) && !1 !== Object.prototype.hasOwnProperty.call(c, "isPrototypeOf")
		}
		function ae(a) {
			let b = 0
			for (let c in a) Object.prototype.hasOwnProperty.call(a, c) && b++
			return b
		}
		let af = new Set(["string", "number", "symbol"]),
			ag = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"])
		function ah(a) {
			return a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
		}
		function ai(a, b, c) {
			let d = new a._zod.constr(b ?? a._zod.def)
			return (!b || c?.parent) && (d._zod.parent = a), d
		}
		function aj(a) {
			if (!a) return {}
			if ("string" == typeof a) return { error: () => a }
			if (a?.message !== void 0) {
				if (a?.error !== void 0) throw Error("Cannot specify both `message` and `error` params")
				a.error = a.message
			}
			return (delete a.message, "string" == typeof a.error) ? { ...a, error: () => a.error } : a
		}
		function ak(a) {
			let b
			return new Proxy(
				{},
				{
					get: (c, d, e) => (b ?? (b = a()), Reflect.get(b, d, e)),
					set: (c, d, e, f) => (b ?? (b = a()), Reflect.set(b, d, e, f)),
					has: (c, d) => (b ?? (b = a()), Reflect.has(b, d)),
					deleteProperty: (c, d) => (b ?? (b = a()), Reflect.deleteProperty(b, d)),
					ownKeys: (c) => (b ?? (b = a()), Reflect.ownKeys(b)),
					getOwnPropertyDescriptor: (c, d) => (b ?? (b = a()), Reflect.getOwnPropertyDescriptor(b, d)),
					defineProperty: (c, d, e) => (b ?? (b = a()), Reflect.defineProperty(b, d, e)),
				},
			)
		}
		function al(a) {
			return "bigint" == typeof a ? a.toString() + "n" : "string" == typeof a ? `"${a}"` : `${a}`
		}
		function am(a) {
			return Object.keys(a).filter((b) => "optional" === a[b]._zod.optin && "optional" === a[b]._zod.optout)
		}
		let an = {
				safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
				int32: [-0x80000000, 0x7fffffff],
				uint32: [0, 0xffffffff],
				float32: [-34028234663852886e22, 34028234663852886e22],
				float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
			},
			ao = {
				int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
				uint64: [BigInt(0), BigInt("18446744073709551615")],
			}
		function ap(a, b) {
			let c = {},
				d = a._zod.def
			for (let a in b) {
				if (!(a in d.shape)) throw Error(`Unrecognized key: "${a}"`)
				b[a] && (c[a] = d.shape[a])
			}
			return ai(a, { ...a._zod.def, shape: c, checks: [] })
		}
		function aq(a, b) {
			let c = { ...a._zod.def.shape },
				d = a._zod.def
			for (let a in b) {
				if (!(a in d.shape)) throw Error(`Unrecognized key: "${a}"`)
				b[a] && delete c[a]
			}
			return ai(a, { ...a._zod.def, shape: c, checks: [] })
		}
		function ar(a, b) {
			if (!ad(b)) throw Error("Invalid input to extend: expected a plain object")
			let c = {
				...a._zod.def,
				get shape() {
					let c = { ...a._zod.def.shape, ...b }
					return X(this, "shape", c), c
				},
				checks: [],
			}
			return ai(a, c)
		}
		function as(a, b) {
			return ai(a, {
				...a._zod.def,
				get shape() {
					let c = { ...a._zod.def.shape, ...b._zod.def.shape }
					return X(this, "shape", c), c
				},
				catchall: b._zod.def.catchall,
				checks: [],
			})
		}
		function at(a, b, c) {
			let d = b._zod.def.shape,
				e = { ...d }
			if (c)
				for (let b in c) {
					if (!(b in d)) throw Error(`Unrecognized key: "${b}"`)
					c[b] && (e[b] = a ? new a({ type: "optional", innerType: d[b] }) : d[b])
				}
			else for (let b in d) e[b] = a ? new a({ type: "optional", innerType: d[b] }) : d[b]
			return ai(b, { ...b._zod.def, shape: e, checks: [] })
		}
		function au(a, b, c) {
			let d = b._zod.def.shape,
				e = { ...d }
			if (c)
				for (let b in c) {
					if (!(b in e)) throw Error(`Unrecognized key: "${b}"`)
					c[b] && (e[b] = new a({ type: "nonoptional", innerType: d[b] }))
				}
			else for (let b in d) e[b] = new a({ type: "nonoptional", innerType: d[b] })
			return ai(b, { ...b._zod.def, shape: e, checks: [] })
		}
		function av(a, b = 0) {
			for (let c = b; c < a.issues.length; c++) if (a.issues[c]?.continue !== !0) return !0
			return !1
		}
		function aw(a, b) {
			return b.map((b) => (b.path ?? (b.path = []), b.path.unshift(a), b))
		}
		function ax(a) {
			return "string" == typeof a ? a : a?.message
		}
		function ay(a, b, c) {
			let d = { ...a, path: a.path ?? [] }
			return (
				a.message ||
					(d.message =
						ax(a.inst?._zod.def?.error?.(a)) ??
						ax(b?.error?.(a)) ??
						ax(c.customError?.(a)) ??
						ax(c.localeError?.(a)) ??
						"Invalid input"),
				delete d.inst,
				delete d.continue,
				b?.reportInput || delete d.input,
				d
			)
		}
		function az(a) {
			return a instanceof Set ? "set" : a instanceof Map ? "map" : a instanceof File ? "file" : "unknown"
		}
		function aA(a) {
			return Array.isArray(a) ? "array" : "string" == typeof a ? "string" : "unknown"
		}
		function aB(...a) {
			let [b, c, d] = a
			return "string" == typeof b ? { message: b, code: "custom", input: c, inst: d } : { ...b }
		}
		function aC(a) {
			return Object.entries(a)
				.filter(([a, b]) => Number.isNaN(Number.parseInt(a, 10)))
				.map((a) => a[1])
		}
		class aD {
			constructor(...a) {}
		}
		function aE() {
			let a, b
			return {
				localeError:
					((a = {
						string: { unit: "characters", verb: "to have" },
						file: { unit: "bytes", verb: "to have" },
						array: { unit: "items", verb: "to have" },
						set: { unit: "items", verb: "to have" },
					}),
					(b = {
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
					(c) => {
						switch (c.code) {
							case "invalid_type":
								return `Invalid input: expected ${c.expected}, received ${((a) => {
									let b = typeof a
									switch (b) {
										case "number":
											return Number.isNaN(a) ? "NaN" : "number"
										case "object":
											if (Array.isArray(a)) return "array"
											if (null === a) return "null"
											if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
												return a.constructor.name
									}
									return b
								})(c.input)}`
							case "invalid_value":
								if (1 === c.values.length) return `Invalid input: expected ${al(c.values[0])}`
								return `Invalid option: expected one of ${Q(c.values, "|")}`
							case "too_big": {
								let b = c.inclusive ? "<=" : "<",
									d = a[c.origin] ?? null
								if (d)
									return `Too big: expected ${c.origin ?? "value"} to have ${b}${c.maximum.toString()} ${d.unit ?? "elements"}`
								return `Too big: expected ${c.origin ?? "value"} to be ${b}${c.maximum.toString()}`
							}
							case "too_small": {
								let b = c.inclusive ? ">=" : ">",
									d = a[c.origin] ?? null
								if (d)
									return `Too small: expected ${c.origin} to have ${b}${c.minimum.toString()} ${d.unit}`
								return `Too small: expected ${c.origin} to be ${b}${c.minimum.toString()}`
							}
							case "invalid_format":
								if ("starts_with" === c.format) return `Invalid string: must start with "${c.prefix}"`
								if ("ends_with" === c.format) return `Invalid string: must end with "${c.suffix}"`
								if ("includes" === c.format) return `Invalid string: must include "${c.includes}"`
								if ("regex" === c.format) return `Invalid string: must match pattern ${c.pattern}`
								return `Invalid ${b[c.format] ?? c.format}`
							case "not_multiple_of":
								return `Invalid number: must be a multiple of ${c.divisor}`
							case "unrecognized_keys":
								return `Unrecognized key${c.keys.length > 1 ? "s" : ""}: ${Q(c.keys, ", ")}`
							case "invalid_key":
								return `Invalid key in ${c.origin}`
							case "invalid_union":
							default:
								return "Invalid input"
							case "invalid_element":
								return `Invalid value in ${c.origin}`
						}
					}),
			}
		}
		a.s(
			[
				"BIGINT_FORMAT_RANGES",
				0,
				ao,
				"Class",
				() => aD,
				"NUMBER_FORMAT_RANGES",
				0,
				an,
				"aborted",
				() => av,
				"allowsEval",
				0,
				ac,
				"assert",
				() => O,
				"assertEqual",
				() => K,
				"assertIs",
				() => M,
				"assertNever",
				() => N,
				"assertNotEqual",
				() => L,
				"assignProp",
				() => X,
				"cached",
				() => S,
				"captureStackTrace",
				0,
				aa,
				"cleanEnum",
				() => aC,
				"cleanRegex",
				() => U,
				"clone",
				() => ai,
				"createTransparentProxy",
				() => ak,
				"defineLazy",
				() => W,
				"esc",
				() => _,
				"escapeRegex",
				() => ah,
				"extend",
				() => ar,
				"finalizeIssue",
				() => ay,
				"floatSafeRemainder",
				() => V,
				"getElementAtPath",
				() => Y,
				"getEnumValues",
				() => P,
				"getLengthableOrigin",
				() => aA,
				"getParsedType",
				0,
				(a) => {
					let b = typeof a
					switch (b) {
						case "undefined":
							return "undefined"
						case "string":
							return "string"
						case "number":
							return Number.isNaN(a) ? "nan" : "number"
						case "boolean":
							return "boolean"
						case "function":
							return "function"
						case "bigint":
							return "bigint"
						case "symbol":
							return "symbol"
						case "object":
							if (Array.isArray(a)) return "array"
							if (null === a) return "null"
							if (a.then && "function" == typeof a.then && a.catch && "function" == typeof a.catch)
								return "promise"
							if ("u" > typeof Map && a instanceof Map) return "map"
							if ("u" > typeof Set && a instanceof Set) return "set"
							if ("u" > typeof Date && a instanceof Date) return "date"
							if ("u" > typeof File && a instanceof File) return "file"
							return "object"
						default:
							throw Error(`Unknown data type: ${b}`)
					}
				},
				"getSizableOrigin",
				() => az,
				"isObject",
				() => ab,
				"isPlainObject",
				() => ad,
				"issue",
				() => aB,
				"joinValues",
				() => Q,
				"jsonStringifyReplacer",
				() => R,
				"merge",
				() => as,
				"normalizeParams",
				() => aj,
				"nullish",
				() => T,
				"numKeys",
				() => ae,
				"omit",
				() => aq,
				"optionalKeys",
				() => am,
				"partial",
				() => at,
				"pick",
				() => ap,
				"prefixIssues",
				() => aw,
				"primitiveTypes",
				0,
				ag,
				"promiseAllObject",
				() => Z,
				"propertyKeyTypes",
				0,
				af,
				"randomString",
				() => $,
				"required",
				() => au,
				"stringifyPrimitive",
				() => al,
				"unwrapMessage",
				() => ax,
			],
			45106,
		),
			J(aE()),
			a.s([], 47795),
			a.i(47795),
			a.s([], 14787),
			a.i(14787),
			a.i(75485)
		let aF = (a, b) => {
				;(a.name = "$ZodError"),
					Object.defineProperty(a, "_zod", { value: a._zod, enumerable: !1 }),
					Object.defineProperty(a, "issues", { value: b, enumerable: !1 }),
					Object.defineProperty(a, "message", { get: () => JSON.stringify(b, R, 2), enumerable: !0 }),
					Object.defineProperty(a, "toString", { value: () => a.message, enumerable: !1 })
			},
			aG = F("$ZodError", aF),
			aH = F("$ZodError", aF, { Parent: Error })
		function aI(a, b = (a) => a.message) {
			let c = {},
				d = []
			for (let e of a.issues)
				e.path.length > 0 ? ((c[e.path[0]] = c[e.path[0]] || []), c[e.path[0]].push(b(e))) : d.push(b(e))
			return { formErrors: d, fieldErrors: c }
		}
		function aJ(a, b) {
			let c =
					b ||
					function (a) {
						return a.message
					},
				d = { _errors: [] },
				e = (a) => {
					for (let b of a.issues)
						if ("invalid_union" === b.code && b.errors.length) b.errors.map((a) => e({ issues: a }))
						else if ("invalid_key" === b.code) e({ issues: b.issues })
						else if ("invalid_element" === b.code) e({ issues: b.issues })
						else if (0 === b.path.length) d._errors.push(c(b))
						else {
							let a = d,
								e = 0
							for (; e < b.path.length; ) {
								let d = b.path[e]
								e === b.path.length - 1
									? ((a[d] = a[d] || { _errors: [] }), a[d]._errors.push(c(b)))
									: (a[d] = a[d] || { _errors: [] }),
									(a = a[d]),
									e++
							}
						}
				}
			return e(a), d
		}
		function aK(a, b) {
			let c =
					b ||
					function (a) {
						return a.message
					},
				d = { errors: [] },
				e = (a, b = []) => {
					var f, g
					for (let h of a.issues)
						if ("invalid_union" === h.code && h.errors.length) h.errors.map((a) => e({ issues: a }, h.path))
						else if ("invalid_key" === h.code) e({ issues: h.issues }, h.path)
						else if ("invalid_element" === h.code) e({ issues: h.issues }, h.path)
						else {
							let a = [...b, ...h.path]
							if (0 === a.length) {
								d.errors.push(c(h))
								continue
							}
							let e = d,
								i = 0
							for (; i < a.length; ) {
								let b = a[i],
									d = i === a.length - 1
								"string" == typeof b
									? (e.properties ?? (e.properties = {}),
										(f = e.properties)[b] ?? (f[b] = { errors: [] }),
										(e = e.properties[b]))
									: (e.items ?? (e.items = []),
										(g = e.items)[b] ?? (g[b] = { errors: [] }),
										(e = e.items[b])),
									d && e.errors.push(c(h)),
									i++
							}
						}
				}
			return e(a), d
		}
		function aL(a) {
			let b = []
			for (let c of a)
				"number" == typeof c
					? b.push(`[${c}]`)
					: "symbol" == typeof c
						? b.push(`[${JSON.stringify(String(c))}]`)
						: /[^\w$]/.test(c)
							? b.push(`[${JSON.stringify(c)}]`)
							: (b.length && b.push("."), b.push(c))
			return b.join("")
		}
		function aM(a) {
			let b = []
			for (let c of [...a.issues].sort((a, b) => a.path.length - b.path.length))
				b.push(`✖ ${c.message}`), c.path?.length && b.push(`  → at ${aL(c.path)}`)
			return b.join("\n")
		}
		a.s(
			[
				"$ZodError",
				0,
				aG,
				"$ZodRealError",
				0,
				aH,
				"flattenError",
				() => aI,
				"formatError",
				() => aJ,
				"prettifyError",
				() => aM,
				"toDotPath",
				() => aL,
				"treeifyError",
				() => aK,
			],
			4045,
		)
		let aN = (a) => (b, c, d, e) => {
				let f = d ? Object.assign(d, { async: !1 }) : { async: !1 },
					g = b._zod.run({ value: c, issues: [] }, f)
				if (g instanceof Promise) throw new H()
				if (g.issues.length) {
					let b = new (e?.Err ?? a)(g.issues.map((a) => ay(a, f, J())))
					throw (aa(b, e?.callee), b)
				}
				return g.value
			},
			aO = aN(aH),
			aP = (a) => async (b, c, d, e) => {
				let f = d ? Object.assign(d, { async: !0 }) : { async: !0 },
					g = b._zod.run({ value: c, issues: [] }, f)
				if ((g instanceof Promise && (g = await g), g.issues.length)) {
					let b = new (e?.Err ?? a)(g.issues.map((a) => ay(a, f, J())))
					throw (aa(b, e?.callee), b)
				}
				return g.value
			},
			aQ = aP(aH),
			aR = (a) => (b, c, d) => {
				let e = d ? { ...d, async: !1 } : { async: !1 },
					f = b._zod.run({ value: c, issues: [] }, e)
				if (f instanceof Promise) throw new H()
				return f.issues.length
					? { success: !1, error: new (a ?? aG)(f.issues.map((a) => ay(a, e, J()))) }
					: { success: !0, data: f.value }
			},
			aS = aR(aH),
			aT = (a) => async (b, c, d) => {
				let e = d ? Object.assign(d, { async: !0 }) : { async: !0 },
					f = b._zod.run({ value: c, issues: [] }, e)
				return (
					f instanceof Promise && (f = await f),
					f.issues.length
						? { success: !1, error: new a(f.issues.map((a) => ay(a, e, J()))) }
						: { success: !0, data: f.value }
				)
			},
			aU = aT(aH)
		a.s(
			[
				"_parse",
				0,
				aN,
				"_parseAsync",
				0,
				aP,
				"_safeParse",
				0,
				aR,
				"_safeParseAsync",
				0,
				aT,
				"parse",
				0,
				aO,
				"parseAsync",
				0,
				aQ,
				"safeParse",
				0,
				aS,
				"safeParseAsync",
				0,
				aU,
			],
			10464,
		),
			a.i(10464),
			a.i(4045)
		let aV = /^[cC][^\s-]{8,}$/,
			aW = /^[0-9a-z]+$/,
			aX = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
			aY = /^[0-9a-vA-V]{20}$/,
			aZ = /^[A-Za-z0-9]{27}$/,
			a$ = /^[a-zA-Z0-9_-]{21}$/,
			a_ = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
			a0 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
			a1 = (a) =>
				a
					? RegExp(
							`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${a}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
						)
					: /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/,
			a2 = a1(4),
			a3 = a1(6),
			a4 = a1(7),
			a5 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
			a6 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$"
		function a7() {
			return RegExp(a6, "u")
		}
		let a8 =
				/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
			a9 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,
			ba =
				/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
			bb =
				/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
			bc = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
			bd = /^[A-Za-z0-9_-]*$/,
			be = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/,
			bf = /^\+(?:[0-9]){6,14}[0-9]$/,
			bg =
				"(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
			bh = RegExp(`^${bg}$`)
		function bi(a) {
			let b = "(?:[01]\\d|2[0-3]):[0-5]\\d"
			return "number" == typeof a.precision
				? -1 === a.precision
					? `${b}`
					: 0 === a.precision
						? `${b}:[0-5]\\d`
						: `${b}:[0-5]\\d\\.\\d{${a.precision}}`
				: `${b}(?::[0-5]\\d(?:\\.\\d+)?)?`
		}
		function bj(a) {
			return RegExp(`^${bi(a)}$`)
		}
		function bk(a) {
			let b = bi({ precision: a.precision }),
				c = ["Z"]
			a.local && c.push(""), a.offset && c.push("([+-]\\d{2}:\\d{2})")
			let d = `${b}(?:${c.join("|")})`
			return RegExp(`^${bg}T(?:${d})$`)
		}
		let bl = (a) => {
				let b = a ? `[\\s\\S]{${a?.minimum ?? 0},${a?.maximum ?? ""}}` : "[\\s\\S]*"
				return RegExp(`^${b}$`)
			},
			bm = /^\d+n?$/,
			bn = /^\d+$/,
			bo = /^-?\d+(?:\.\d+)?/i,
			bp = /true|false/i,
			bq = /null/i,
			br = /undefined/i,
			bs = /^[^A-Z]*$/,
			bt = /^[^a-z]*$/
		a.s(
			[
				"_emoji",
				0,
				a6,
				"base64",
				0,
				bc,
				"base64url",
				0,
				bd,
				"bigint",
				0,
				bm,
				"boolean",
				0,
				bp,
				"browserEmail",
				0,
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
				"cidrv4",
				0,
				ba,
				"cidrv6",
				0,
				bb,
				"cuid",
				0,
				aV,
				"cuid2",
				0,
				aW,
				"date",
				0,
				bh,
				"datetime",
				() => bk,
				"domain",
				0,
				/^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
				"duration",
				0,
				a_,
				"e164",
				0,
				bf,
				"email",
				0,
				a5,
				"emoji",
				() => a7,
				"extendedDuration",
				0,
				/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
				"guid",
				0,
				a0,
				"hostname",
				0,
				be,
				"html5Email",
				0,
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
				"integer",
				0,
				bn,
				"ipv4",
				0,
				a8,
				"ipv6",
				0,
				a9,
				"ksuid",
				0,
				aZ,
				"lowercase",
				0,
				bs,
				"nanoid",
				0,
				a$,
				"null",
				() => bq,
				"number",
				0,
				bo,
				"rfc5322Email",
				0,
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				"string",
				0,
				bl,
				"time",
				() => bj,
				"ulid",
				0,
				aX,
				"undefined",
				() => br,
				"unicodeEmail",
				0,
				/^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
				"uppercase",
				0,
				bt,
				"uuid",
				0,
				a1,
				"uuid4",
				0,
				a2,
				"uuid6",
				0,
				a3,
				"uuid7",
				0,
				a4,
				"xid",
				0,
				aY,
			],
			32493,
		)
		let bu = F("$ZodCheck", (a, b) => {
				var c
				a._zod ?? (a._zod = {}), (a._zod.def = b), (c = a._zod).onattach ?? (c.onattach = [])
			}),
			bv = { number: "number", bigint: "bigint", object: "date" },
			bw = F("$ZodCheckLessThan", (a, b) => {
				bu.init(a, b)
				let c = bv[typeof b.value]
				a._zod.onattach.push((a) => {
					let c = a._zod.bag,
						d = (b.inclusive ? c.maximum : c.exclusiveMaximum) ?? 1 / 0
					b.value < d && (b.inclusive ? (c.maximum = b.value) : (c.exclusiveMaximum = b.value))
				}),
					(a._zod.check = (d) => {
						;(b.inclusive ? d.value <= b.value : d.value < b.value) ||
							d.issues.push({
								origin: c,
								code: "too_big",
								maximum: b.value,
								input: d.value,
								inclusive: b.inclusive,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			bx = F("$ZodCheckGreaterThan", (a, b) => {
				bu.init(a, b)
				let c = bv[typeof b.value]
				a._zod.onattach.push((a) => {
					let c = a._zod.bag,
						d = (b.inclusive ? c.minimum : c.exclusiveMinimum) ?? -1 / 0
					b.value > d && (b.inclusive ? (c.minimum = b.value) : (c.exclusiveMinimum = b.value))
				}),
					(a._zod.check = (d) => {
						;(b.inclusive ? d.value >= b.value : d.value > b.value) ||
							d.issues.push({
								origin: c,
								code: "too_small",
								minimum: b.value,
								input: d.value,
								inclusive: b.inclusive,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			by = F("$ZodCheckMultipleOf", (a, b) => {
				bu.init(a, b),
					a._zod.onattach.push((a) => {
						var c
						;(c = a._zod.bag).multipleOf ?? (c.multipleOf = b.value)
					}),
					(a._zod.check = (c) => {
						if (typeof c.value != typeof b.value)
							throw Error("Cannot mix number and bigint in multiple_of check.")
						;("bigint" == typeof c.value ? c.value % b.value === BigInt(0) : 0 === V(c.value, b.value)) ||
							c.issues.push({
								origin: typeof c.value,
								code: "not_multiple_of",
								divisor: b.value,
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			bz = F("$ZodCheckNumberFormat", (a, b) => {
				bu.init(a, b), (b.format = b.format || "float64")
				let c = b.format?.includes("int"),
					d = c ? "int" : "number",
					[e, f] = an[b.format]
				a._zod.onattach.push((a) => {
					let d = a._zod.bag
					;(d.format = b.format), (d.minimum = e), (d.maximum = f), c && (d.pattern = bn)
				}),
					(a._zod.check = (g) => {
						let h = g.value
						if (c) {
							if (!Number.isInteger(h))
								return void g.issues.push({
									expected: d,
									format: b.format,
									code: "invalid_type",
									input: h,
									inst: a,
								})
							if (!Number.isSafeInteger(h))
								return void (h > 0
									? g.issues.push({
											input: h,
											code: "too_big",
											maximum: Number.MAX_SAFE_INTEGER,
											note: "Integers must be within the safe integer range.",
											inst: a,
											origin: d,
											continue: !b.abort,
										})
									: g.issues.push({
											input: h,
											code: "too_small",
											minimum: Number.MIN_SAFE_INTEGER,
											note: "Integers must be within the safe integer range.",
											inst: a,
											origin: d,
											continue: !b.abort,
										}))
						}
						h < e &&
							g.issues.push({
								origin: "number",
								input: h,
								code: "too_small",
								minimum: e,
								inclusive: !0,
								inst: a,
								continue: !b.abort,
							}),
							h > f && g.issues.push({ origin: "number", input: h, code: "too_big", maximum: f, inst: a })
					})
			}),
			bA = F("$ZodCheckBigIntFormat", (a, b) => {
				bu.init(a, b)
				let [c, d] = ao[b.format]
				a._zod.onattach.push((a) => {
					let e = a._zod.bag
					;(e.format = b.format), (e.minimum = c), (e.maximum = d)
				}),
					(a._zod.check = (e) => {
						let f = e.value
						f < c &&
							e.issues.push({
								origin: "bigint",
								input: f,
								code: "too_small",
								minimum: c,
								inclusive: !0,
								inst: a,
								continue: !b.abort,
							}),
							f > d && e.issues.push({ origin: "bigint", input: f, code: "too_big", maximum: d, inst: a })
					})
			}),
			bB = F("$ZodCheckMaxSize", (a, b) => {
				var c
				bu.init(a, b),
					(c = a._zod.def).when ??
						(c.when = (a) => {
							let b = a.value
							return !T(b) && void 0 !== b.size
						}),
					a._zod.onattach.push((a) => {
						let c = a._zod.bag.maximum ?? 1 / 0
						b.maximum < c && (a._zod.bag.maximum = b.maximum)
					}),
					(a._zod.check = (c) => {
						let d = c.value
						d.size <= b.maximum ||
							c.issues.push({
								origin: az(d),
								code: "too_big",
								maximum: b.maximum,
								input: d,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			bC = F("$ZodCheckMinSize", (a, b) => {
				var c
				bu.init(a, b),
					(c = a._zod.def).when ??
						(c.when = (a) => {
							let b = a.value
							return !T(b) && void 0 !== b.size
						}),
					a._zod.onattach.push((a) => {
						let c = a._zod.bag.minimum ?? -1 / 0
						b.minimum > c && (a._zod.bag.minimum = b.minimum)
					}),
					(a._zod.check = (c) => {
						let d = c.value
						d.size >= b.minimum ||
							c.issues.push({
								origin: az(d),
								code: "too_small",
								minimum: b.minimum,
								input: d,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			bD = F("$ZodCheckSizeEquals", (a, b) => {
				var c
				bu.init(a, b),
					(c = a._zod.def).when ??
						(c.when = (a) => {
							let b = a.value
							return !T(b) && void 0 !== b.size
						}),
					a._zod.onattach.push((a) => {
						let c = a._zod.bag
						;(c.minimum = b.size), (c.maximum = b.size), (c.size = b.size)
					}),
					(a._zod.check = (c) => {
						let d = c.value,
							e = d.size
						if (e === b.size) return
						let f = e > b.size
						c.issues.push({
							origin: az(d),
							...(f ? { code: "too_big", maximum: b.size } : { code: "too_small", minimum: b.size }),
							inclusive: !0,
							exact: !0,
							input: c.value,
							inst: a,
							continue: !b.abort,
						})
					})
			}),
			bE = F("$ZodCheckMaxLength", (a, b) => {
				var c
				bu.init(a, b),
					(c = a._zod.def).when ??
						(c.when = (a) => {
							let b = a.value
							return !T(b) && void 0 !== b.length
						}),
					a._zod.onattach.push((a) => {
						let c = a._zod.bag.maximum ?? 1 / 0
						b.maximum < c && (a._zod.bag.maximum = b.maximum)
					}),
					(a._zod.check = (c) => {
						let d = c.value
						if (d.length <= b.maximum) return
						let e = aA(d)
						c.issues.push({
							origin: e,
							code: "too_big",
							maximum: b.maximum,
							inclusive: !0,
							input: d,
							inst: a,
							continue: !b.abort,
						})
					})
			}),
			bF = F("$ZodCheckMinLength", (a, b) => {
				var c
				bu.init(a, b),
					(c = a._zod.def).when ??
						(c.when = (a) => {
							let b = a.value
							return !T(b) && void 0 !== b.length
						}),
					a._zod.onattach.push((a) => {
						let c = a._zod.bag.minimum ?? -1 / 0
						b.minimum > c && (a._zod.bag.minimum = b.minimum)
					}),
					(a._zod.check = (c) => {
						let d = c.value
						if (d.length >= b.minimum) return
						let e = aA(d)
						c.issues.push({
							origin: e,
							code: "too_small",
							minimum: b.minimum,
							inclusive: !0,
							input: d,
							inst: a,
							continue: !b.abort,
						})
					})
			}),
			bG = F("$ZodCheckLengthEquals", (a, b) => {
				var c
				bu.init(a, b),
					(c = a._zod.def).when ??
						(c.when = (a) => {
							let b = a.value
							return !T(b) && void 0 !== b.length
						}),
					a._zod.onattach.push((a) => {
						let c = a._zod.bag
						;(c.minimum = b.length), (c.maximum = b.length), (c.length = b.length)
					}),
					(a._zod.check = (c) => {
						let d = c.value,
							e = d.length
						if (e === b.length) return
						let f = aA(d),
							g = e > b.length
						c.issues.push({
							origin: f,
							...(g ? { code: "too_big", maximum: b.length } : { code: "too_small", minimum: b.length }),
							inclusive: !0,
							exact: !0,
							input: c.value,
							inst: a,
							continue: !b.abort,
						})
					})
			}),
			bH = F("$ZodCheckStringFormat", (a, b) => {
				var c, d
				bu.init(a, b),
					a._zod.onattach.push((a) => {
						let c = a._zod.bag
						;(c.format = b.format),
							b.pattern && (c.patterns ?? (c.patterns = new Set()), c.patterns.add(b.pattern))
					}),
					b.pattern
						? ((c = a._zod).check ??
							(c.check = (c) => {
								;(b.pattern.lastIndex = 0),
									b.pattern.test(c.value) ||
										c.issues.push({
											origin: "string",
											code: "invalid_format",
											format: b.format,
											input: c.value,
											...(b.pattern ? { pattern: b.pattern.toString() } : {}),
											inst: a,
											continue: !b.abort,
										})
							}))
						: ((d = a._zod).check ?? (d.check = () => {}))
			}),
			bI = F("$ZodCheckRegex", (a, b) => {
				bH.init(a, b),
					(a._zod.check = (c) => {
						;(b.pattern.lastIndex = 0),
							b.pattern.test(c.value) ||
								c.issues.push({
									origin: "string",
									code: "invalid_format",
									format: "regex",
									input: c.value,
									pattern: b.pattern.toString(),
									inst: a,
									continue: !b.abort,
								})
					})
			}),
			bJ = F("$ZodCheckLowerCase", (a, b) => {
				b.pattern ?? (b.pattern = bs), bH.init(a, b)
			}),
			bK = F("$ZodCheckUpperCase", (a, b) => {
				b.pattern ?? (b.pattern = bt), bH.init(a, b)
			}),
			bL = F("$ZodCheckIncludes", (a, b) => {
				bu.init(a, b)
				let c = ah(b.includes),
					d = new RegExp("number" == typeof b.position ? `^.{${b.position}}${c}` : c)
				;(b.pattern = d),
					a._zod.onattach.push((a) => {
						let b = a._zod.bag
						b.patterns ?? (b.patterns = new Set()), b.patterns.add(d)
					}),
					(a._zod.check = (c) => {
						c.value.includes(b.includes, b.position) ||
							c.issues.push({
								origin: "string",
								code: "invalid_format",
								format: "includes",
								includes: b.includes,
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			bM = F("$ZodCheckStartsWith", (a, b) => {
				bu.init(a, b)
				let c = RegExp(`^${ah(b.prefix)}.*`)
				b.pattern ?? (b.pattern = c),
					a._zod.onattach.push((a) => {
						let b = a._zod.bag
						b.patterns ?? (b.patterns = new Set()), b.patterns.add(c)
					}),
					(a._zod.check = (c) => {
						c.value.startsWith(b.prefix) ||
							c.issues.push({
								origin: "string",
								code: "invalid_format",
								format: "starts_with",
								prefix: b.prefix,
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			bN = F("$ZodCheckEndsWith", (a, b) => {
				bu.init(a, b)
				let c = RegExp(`.*${ah(b.suffix)}$`)
				b.pattern ?? (b.pattern = c),
					a._zod.onattach.push((a) => {
						let b = a._zod.bag
						b.patterns ?? (b.patterns = new Set()), b.patterns.add(c)
					}),
					(a._zod.check = (c) => {
						c.value.endsWith(b.suffix) ||
							c.issues.push({
								origin: "string",
								code: "invalid_format",
								format: "ends_with",
								suffix: b.suffix,
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
					})
			})
		function bO(a, b, c) {
			a.issues.length && b.issues.push(...aw(c, a.issues))
		}
		let bP = F("$ZodCheckProperty", (a, b) => {
				bu.init(a, b),
					(a._zod.check = (a) => {
						let c = b.schema._zod.run({ value: a.value[b.property], issues: [] }, {})
						if (c instanceof Promise) return c.then((c) => bO(c, a, b.property))
						bO(c, a, b.property)
					})
			}),
			bQ = F("$ZodCheckMimeType", (a, b) => {
				bu.init(a, b)
				let c = new Set(b.mime)
				a._zod.onattach.push((a) => {
					a._zod.bag.mime = b.mime
				}),
					(a._zod.check = (d) => {
						c.has(d.value.type) ||
							d.issues.push({ code: "invalid_value", values: b.mime, input: d.value.type, inst: a })
					})
			}),
			bR = F("$ZodCheckOverwrite", (a, b) => {
				bu.init(a, b),
					(a._zod.check = (a) => {
						a.value = b.tx(a.value)
					})
			})
		a.s(
			[
				"$ZodCheck",
				0,
				bu,
				"$ZodCheckBigIntFormat",
				0,
				bA,
				"$ZodCheckEndsWith",
				0,
				bN,
				"$ZodCheckGreaterThan",
				0,
				bx,
				"$ZodCheckIncludes",
				0,
				bL,
				"$ZodCheckLengthEquals",
				0,
				bG,
				"$ZodCheckLessThan",
				0,
				bw,
				"$ZodCheckLowerCase",
				0,
				bJ,
				"$ZodCheckMaxLength",
				0,
				bE,
				"$ZodCheckMaxSize",
				0,
				bB,
				"$ZodCheckMimeType",
				0,
				bQ,
				"$ZodCheckMinLength",
				0,
				bF,
				"$ZodCheckMinSize",
				0,
				bC,
				"$ZodCheckMultipleOf",
				0,
				by,
				"$ZodCheckNumberFormat",
				0,
				bz,
				"$ZodCheckOverwrite",
				0,
				bR,
				"$ZodCheckProperty",
				0,
				bP,
				"$ZodCheckRegex",
				0,
				bI,
				"$ZodCheckSizeEquals",
				0,
				bD,
				"$ZodCheckStartsWith",
				0,
				bM,
				"$ZodCheckStringFormat",
				0,
				bH,
				"$ZodCheckUpperCase",
				0,
				bK,
			],
			1323,
		)
		class bS {
			constructor(a = []) {
				;(this.content = []), (this.indent = 0), this && (this.args = a)
			}
			indented(a) {
				;(this.indent += 1), a(this), (this.indent -= 1)
			}
			write(a) {
				if ("function" == typeof a) {
					a(this, { execution: "sync" }), a(this, { execution: "async" })
					return
				}
				let b = a.split("\n").filter((a) => a),
					c = Math.min(...b.map((a) => a.length - a.trimStart().length))
				for (let a of b.map((a) => a.slice(c)).map((a) => " ".repeat(2 * this.indent) + a)) this.content.push(a)
			}
			compile() {
				return Function(...this?.args, [...(this?.content ?? [""]).map((a) => `  ${a}`)].join("\n"))
			}
		}
		a.s(["Doc", () => bS], 57483)
		let bT = { major: 4, minor: 0, patch: 0 }
		a.s(["version", 0, bT], 77957)
		let bU = F("$ZodType", (a, b) => {
				var c
				a ?? (a = {}), (a._zod.def = b), (a._zod.bag = a._zod.bag || {}), (a._zod.version = bT)
				let d = [...(a._zod.def.checks ?? [])]
				for (let b of (a._zod.traits.has("$ZodCheck") && d.unshift(a), d)) for (let c of b._zod.onattach) c(a)
				if (0 === d.length)
					(c = a._zod).deferred ?? (c.deferred = []),
						a._zod.deferred?.push(() => {
							a._zod.run = a._zod.parse
						})
				else {
					let b = (a, b, c) => {
						let d,
							e = av(a)
						for (let f of b) {
							if (f._zod.def.when) {
								if (!f._zod.def.when(a)) continue
							} else if (e) continue
							let b = a.issues.length,
								g = f._zod.check(a)
							if (g instanceof Promise && c?.async === !1) throw new H()
							if (d || g instanceof Promise)
								d = (d ?? Promise.resolve()).then(async () => {
									await g, a.issues.length !== b && (e || (e = av(a, b)))
								})
							else {
								if (a.issues.length === b) continue
								e || (e = av(a, b))
							}
						}
						return d ? d.then(() => a) : a
					}
					a._zod.run = (c, e) => {
						let f = a._zod.parse(c, e)
						if (f instanceof Promise) {
							if (!1 === e.async) throw new H()
							return f.then((a) => b(a, d, e))
						}
						return b(f, d, e)
					}
				}
				a["~standard"] = {
					validate: (b) => {
						try {
							let c = aS(a, b)
							return c.success ? { value: c.data } : { issues: c.error?.issues }
						} catch (c) {
							return aU(a, b).then((a) => (a.success ? { value: a.data } : { issues: a.error?.issues }))
						}
					},
					vendor: "zod",
					version: 1,
				}
			}),
			bV = F("$ZodString", (a, b) => {
				bU.init(a, b),
					(a._zod.pattern = [...(a?._zod.bag?.patterns ?? [])].pop() ?? bl(a._zod.bag)),
					(a._zod.parse = (c, d) => {
						if (b.coerce)
							try {
								c.value = String(c.value)
							} catch (a) {}
						return (
							"string" == typeof c.value ||
								c.issues.push({ expected: "string", code: "invalid_type", input: c.value, inst: a }),
							c
						)
					})
			}),
			bW = F("$ZodStringFormat", (a, b) => {
				bH.init(a, b), bV.init(a, b)
			}),
			bX = F("$ZodGUID", (a, b) => {
				b.pattern ?? (b.pattern = a0), bW.init(a, b)
			}),
			bY = F("$ZodUUID", (a, b) => {
				if (b.version) {
					let a = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[b.version]
					if (void 0 === a) throw Error(`Invalid UUID version: "${b.version}"`)
					b.pattern ?? (b.pattern = a1(a))
				} else b.pattern ?? (b.pattern = a1())
				bW.init(a, b)
			}),
			bZ = F("$ZodEmail", (a, b) => {
				b.pattern ?? (b.pattern = a5), bW.init(a, b)
			}),
			b$ = F("$ZodURL", (a, b) => {
				bW.init(a, b),
					(a._zod.check = (c) => {
						try {
							let d = c.value,
								e = new URL(d),
								f = e.href
							b.hostname &&
								((b.hostname.lastIndex = 0),
								b.hostname.test(e.hostname) ||
									c.issues.push({
										code: "invalid_format",
										format: "url",
										note: "Invalid hostname",
										pattern: be.source,
										input: c.value,
										inst: a,
										continue: !b.abort,
									})),
								b.protocol &&
									((b.protocol.lastIndex = 0),
									b.protocol.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol) ||
										c.issues.push({
											code: "invalid_format",
											format: "url",
											note: "Invalid protocol",
											pattern: b.protocol.source,
											input: c.value,
											inst: a,
											continue: !b.abort,
										})),
								!d.endsWith("/") && f.endsWith("/") ? (c.value = f.slice(0, -1)) : (c.value = f)
							return
						} catch (d) {
							c.issues.push({
								code: "invalid_format",
								format: "url",
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
						}
					})
			}),
			b_ = F("$ZodEmoji", (a, b) => {
				b.pattern ?? (b.pattern = a7()), bW.init(a, b)
			}),
			b0 = F("$ZodNanoID", (a, b) => {
				b.pattern ?? (b.pattern = a$), bW.init(a, b)
			}),
			b1 = F("$ZodCUID", (a, b) => {
				b.pattern ?? (b.pattern = aV), bW.init(a, b)
			}),
			b2 = F("$ZodCUID2", (a, b) => {
				b.pattern ?? (b.pattern = aW), bW.init(a, b)
			}),
			b3 = F("$ZodULID", (a, b) => {
				b.pattern ?? (b.pattern = aX), bW.init(a, b)
			}),
			b4 = F("$ZodXID", (a, b) => {
				b.pattern ?? (b.pattern = aY), bW.init(a, b)
			}),
			b5 = F("$ZodKSUID", (a, b) => {
				b.pattern ?? (b.pattern = aZ), bW.init(a, b)
			}),
			b6 = F("$ZodISODateTime", (a, b) => {
				b.pattern ?? (b.pattern = bk(b)), bW.init(a, b)
			}),
			b7 = F("$ZodISODate", (a, b) => {
				b.pattern ?? (b.pattern = bh), bW.init(a, b)
			}),
			b8 = F("$ZodISOTime", (a, b) => {
				b.pattern ?? (b.pattern = bj(b)), bW.init(a, b)
			}),
			b9 = F("$ZodISODuration", (a, b) => {
				b.pattern ?? (b.pattern = a_), bW.init(a, b)
			}),
			ca = F("$ZodIPv4", (a, b) => {
				b.pattern ?? (b.pattern = a8),
					bW.init(a, b),
					a._zod.onattach.push((a) => {
						a._zod.bag.format = "ipv4"
					})
			}),
			cb = F("$ZodIPv6", (a, b) => {
				b.pattern ?? (b.pattern = a9),
					bW.init(a, b),
					a._zod.onattach.push((a) => {
						a._zod.bag.format = "ipv6"
					}),
					(a._zod.check = (c) => {
						try {
							new URL(`http://[${c.value}]`)
						} catch {
							c.issues.push({
								code: "invalid_format",
								format: "ipv6",
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
						}
					})
			}),
			cc = F("$ZodCIDRv4", (a, b) => {
				b.pattern ?? (b.pattern = ba), bW.init(a, b)
			}),
			cd = F("$ZodCIDRv6", (a, b) => {
				b.pattern ?? (b.pattern = bb),
					bW.init(a, b),
					(a._zod.check = (c) => {
						let [d, e] = c.value.split("/")
						try {
							if (!e) throw Error()
							let a = Number(e)
							if (`${a}` !== e || a < 0 || a > 128) throw Error()
							new URL(`http://[${d}]`)
						} catch {
							c.issues.push({
								code: "invalid_format",
								format: "cidrv6",
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
						}
					})
			})
		function ce(a) {
			if ("" === a) return !0
			if (a.length % 4 != 0) return !1
			try {
				return atob(a), !0
			} catch {
				return !1
			}
		}
		let cf = F("$ZodBase64", (a, b) => {
			b.pattern ?? (b.pattern = bc),
				bW.init(a, b),
				a._zod.onattach.push((a) => {
					a._zod.bag.contentEncoding = "base64"
				}),
				(a._zod.check = (c) => {
					ce(c.value) ||
						c.issues.push({
							code: "invalid_format",
							format: "base64",
							input: c.value,
							inst: a,
							continue: !b.abort,
						})
				})
		})
		function cg(a) {
			if (!bd.test(a)) return !1
			let b = a.replace(/[-_]/g, (a) => ("-" === a ? "+" : "/"))
			return ce(b.padEnd(4 * Math.ceil(b.length / 4), "="))
		}
		let ch = F("$ZodBase64URL", (a, b) => {
				b.pattern ?? (b.pattern = bd),
					bW.init(a, b),
					a._zod.onattach.push((a) => {
						a._zod.bag.contentEncoding = "base64url"
					}),
					(a._zod.check = (c) => {
						cg(c.value) ||
							c.issues.push({
								code: "invalid_format",
								format: "base64url",
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			ci = F("$ZodE164", (a, b) => {
				b.pattern ?? (b.pattern = bf), bW.init(a, b)
			})
		function cj(a, b = null) {
			try {
				let c = a.split(".")
				if (3 !== c.length) return !1
				let [d] = c
				if (!d) return !1
				let e = JSON.parse(atob(d))
				if (("typ" in e && e?.typ !== "JWT") || !e.alg || (b && (!("alg" in e) || e.alg !== b))) return !1
				return !0
			} catch {
				return !1
			}
		}
		let ck = F("$ZodJWT", (a, b) => {
				bW.init(a, b),
					(a._zod.check = (c) => {
						cj(c.value, b.alg) ||
							c.issues.push({
								code: "invalid_format",
								format: "jwt",
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			cl = F("$ZodCustomStringFormat", (a, b) => {
				bW.init(a, b),
					(a._zod.check = (c) => {
						b.fn(c.value) ||
							c.issues.push({
								code: "invalid_format",
								format: b.format,
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			cm = F("$ZodNumber", (a, b) => {
				bU.init(a, b),
					(a._zod.pattern = a._zod.bag.pattern ?? bo),
					(a._zod.parse = (c, d) => {
						if (b.coerce)
							try {
								c.value = Number(c.value)
							} catch (a) {}
						let e = c.value
						if ("number" == typeof e && !Number.isNaN(e) && Number.isFinite(e)) return c
						let f =
							"number" == typeof e
								? Number.isNaN(e)
									? "NaN"
									: Number.isFinite(e)
										? void 0
										: "Infinity"
								: void 0
						return (
							c.issues.push({
								expected: "number",
								code: "invalid_type",
								input: e,
								inst: a,
								...(f ? { received: f } : {}),
							}),
							c
						)
					})
			}),
			cn = F("$ZodNumber", (a, b) => {
				bz.init(a, b), cm.init(a, b)
			}),
			co = F("$ZodBoolean", (a, b) => {
				bU.init(a, b),
					(a._zod.pattern = bp),
					(a._zod.parse = (c, d) => {
						if (b.coerce)
							try {
								c.value = !!c.value
							} catch (a) {}
						let e = c.value
						return (
							"boolean" == typeof e ||
								c.issues.push({ expected: "boolean", code: "invalid_type", input: e, inst: a }),
							c
						)
					})
			}),
			cp = F("$ZodBigInt", (a, b) => {
				bU.init(a, b),
					(a._zod.pattern = bm),
					(a._zod.parse = (c, d) => {
						if (b.coerce)
							try {
								c.value = BigInt(c.value)
							} catch (a) {}
						return (
							"bigint" == typeof c.value ||
								c.issues.push({ expected: "bigint", code: "invalid_type", input: c.value, inst: a }),
							c
						)
					})
			}),
			cq = F("$ZodBigInt", (a, b) => {
				bA.init(a, b), cp.init(a, b)
			}),
			cr = F("$ZodSymbol", (a, b) => {
				bU.init(a, b),
					(a._zod.parse = (b, c) => {
						let d = b.value
						return (
							"symbol" == typeof d ||
								b.issues.push({ expected: "symbol", code: "invalid_type", input: d, inst: a }),
							b
						)
					})
			}),
			cs = F("$ZodUndefined", (a, b) => {
				bU.init(a, b),
					(a._zod.pattern = br),
					(a._zod.values = new Set([void 0])),
					(a._zod.optin = "optional"),
					(a._zod.optout = "optional"),
					(a._zod.parse = (b, c) => {
						let d = b.value
						return (
							void 0 === d ||
								b.issues.push({ expected: "undefined", code: "invalid_type", input: d, inst: a }),
							b
						)
					})
			}),
			ct = F("$ZodNull", (a, b) => {
				bU.init(a, b),
					(a._zod.pattern = bq),
					(a._zod.values = new Set([null])),
					(a._zod.parse = (b, c) => {
						let d = b.value
						return (
							null === d || b.issues.push({ expected: "null", code: "invalid_type", input: d, inst: a }),
							b
						)
					})
			}),
			cu = F("$ZodAny", (a, b) => {
				bU.init(a, b), (a._zod.parse = (a) => a)
			}),
			cv = F("$ZodUnknown", (a, b) => {
				bU.init(a, b), (a._zod.parse = (a) => a)
			}),
			cw = F("$ZodNever", (a, b) => {
				bU.init(a, b),
					(a._zod.parse = (b, c) => (
						b.issues.push({ expected: "never", code: "invalid_type", input: b.value, inst: a }), b
					))
			}),
			cx = F("$ZodVoid", (a, b) => {
				bU.init(a, b),
					(a._zod.parse = (b, c) => {
						let d = b.value
						return (
							void 0 === d ||
								b.issues.push({ expected: "void", code: "invalid_type", input: d, inst: a }),
							b
						)
					})
			}),
			cy = F("$ZodDate", (a, b) => {
				bU.init(a, b),
					(a._zod.parse = (c, d) => {
						if (b.coerce)
							try {
								c.value = new Date(c.value)
							} catch (a) {}
						let e = c.value,
							f = e instanceof Date
						return (
							(f && !Number.isNaN(e.getTime())) ||
								c.issues.push({
									expected: "date",
									code: "invalid_type",
									input: e,
									...(f ? { received: "Invalid Date" } : {}),
									inst: a,
								}),
							c
						)
					})
			})
		function cz(a, b, c) {
			a.issues.length && b.issues.push(...aw(c, a.issues)), (b.value[c] = a.value)
		}
		let cA = F("$ZodArray", (a, b) => {
			bU.init(a, b),
				(a._zod.parse = (c, d) => {
					let e = c.value
					if (!Array.isArray(e))
						return c.issues.push({ expected: "array", code: "invalid_type", input: e, inst: a }), c
					c.value = Array(e.length)
					let f = []
					for (let a = 0; a < e.length; a++) {
						let g = e[a],
							h = b.element._zod.run({ value: g, issues: [] }, d)
						h instanceof Promise ? f.push(h.then((b) => cz(b, c, a))) : cz(h, c, a)
					}
					return f.length ? Promise.all(f).then(() => c) : c
				})
		})
		function cB(a, b, c) {
			a.issues.length && b.issues.push(...aw(c, a.issues)), (b.value[c] = a.value)
		}
		function cC(a, b, c, d) {
			a.issues.length
				? void 0 === d[c]
					? c in d
						? (b.value[c] = void 0)
						: (b.value[c] = a.value)
					: b.issues.push(...aw(c, a.issues))
				: void 0 === a.value
					? c in d && (b.value[c] = void 0)
					: (b.value[c] = a.value)
		}
		let cD = F("$ZodObject", (a, b) => {
			let c, d
			bU.init(a, b)
			let e = S(() => {
				let a = Object.keys(b.shape)
				for (let c of a)
					if (!(b.shape[c] instanceof bU)) throw Error(`Invalid element at key "${c}": expected a Zod schema`)
				let c = am(b.shape)
				return { shape: b.shape, keys: a, keySet: new Set(a), numKeys: a.length, optionalKeys: new Set(c) }
			})
			W(a._zod, "propValues", () => {
				let a = b.shape,
					c = {}
				for (let b in a) {
					let d = a[b]._zod
					if (d.values) for (let a of (c[b] ?? (c[b] = new Set()), d.values)) c[b].add(a)
				}
				return c
			})
			let f = !I.jitless,
				g = f && ac.value,
				h = b.catchall
			a._zod.parse = (i, j) => {
				d ?? (d = e.value)
				let k = i.value
				if (!ab(k)) return i.issues.push({ expected: "object", code: "invalid_type", input: k, inst: a }), i
				let l = []
				if (f && g && j?.async === !1 && !0 !== j.jitless)
					c ||
						(c = ((a) => {
							let b = new bS(["shape", "payload", "ctx"]),
								c = e.value,
								d = (a) => {
									let b = _(a)
									return `shape[${b}]._zod.run({ value: input[${b}], issues: [] }, ctx)`
								}
							b.write("const input = payload.value;")
							let f = Object.create(null),
								g = 0
							for (let a of c.keys) f[a] = `key_${g++}`
							for (let a of (b.write("const newResult = {}"), c.keys))
								if (c.optionalKeys.has(a)) {
									let c = f[a]
									b.write(`const ${c} = ${d(a)};`)
									let e = _(a)
									b.write(`
        if (${c}.issues.length) {
          if (input[${e}] === undefined) {
            if (${e} in input) {
              newResult[${e}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${c}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${e}, ...iss.path] : [${e}],
              }))
            );
          }
        } else if (${c}.value === undefined) {
          if (${e} in input) newResult[${e}] = undefined;
        } else {
          newResult[${e}] = ${c}.value;
        }
        `)
								} else {
									let c = f[a]
									b.write(`const ${c} = ${d(a)};`),
										b.write(`
          if (${c}.issues.length) payload.issues = payload.issues.concat(${c}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${_(a)}, ...iss.path] : [${_(a)}]
          })));`),
										b.write(`newResult[${_(a)}] = ${c}.value`)
								}
							b.write("payload.value = newResult;"), b.write("return payload;")
							let h = b.compile()
							return (b, c) => h(a, b, c)
						})(b.shape)),
						(i = c(i, j))
				else {
					i.value = {}
					let a = d.shape
					for (let b of d.keys) {
						let c = a[b],
							d = c._zod.run({ value: k[b], issues: [] }, j),
							e = "optional" === c._zod.optin && "optional" === c._zod.optout
						d instanceof Promise
							? l.push(d.then((a) => (e ? cC(a, i, b, k) : cB(a, i, b))))
							: e
								? cC(d, i, b, k)
								: cB(d, i, b)
					}
				}
				if (!h) return l.length ? Promise.all(l).then(() => i) : i
				let m = [],
					n = d.keySet,
					o = h._zod,
					p = o.def.type
				for (let a of Object.keys(k)) {
					if (n.has(a)) continue
					if ("never" === p) {
						m.push(a)
						continue
					}
					let b = o.run({ value: k[a], issues: [] }, j)
					b instanceof Promise ? l.push(b.then((b) => cB(b, i, a))) : cB(b, i, a)
				}
				return (m.length && i.issues.push({ code: "unrecognized_keys", keys: m, input: k, inst: a }), l.length)
					? Promise.all(l).then(() => i)
					: i
			}
		})
		function cE(a, b, c, d) {
			for (let c of a) if (0 === c.issues.length) return (b.value = c.value), b
			return (
				b.issues.push({
					code: "invalid_union",
					input: b.value,
					inst: c,
					errors: a.map((a) => a.issues.map((a) => ay(a, d, J()))),
				}),
				b
			)
		}
		let cF = F("$ZodUnion", (a, b) => {
				bU.init(a, b),
					W(a._zod, "optin", () =>
						b.options.some((a) => "optional" === a._zod.optin) ? "optional" : void 0,
					),
					W(a._zod, "optout", () =>
						b.options.some((a) => "optional" === a._zod.optout) ? "optional" : void 0,
					),
					W(a._zod, "values", () => {
						if (b.options.every((a) => a._zod.values))
							return new Set(b.options.flatMap((a) => Array.from(a._zod.values)))
					}),
					W(a._zod, "pattern", () => {
						if (b.options.every((a) => a._zod.pattern)) {
							let a = b.options.map((a) => a._zod.pattern)
							return RegExp(`^(${a.map((a) => U(a.source)).join("|")})$`)
						}
					}),
					(a._zod.parse = (c, d) => {
						let e = !1,
							f = []
						for (let a of b.options) {
							let b = a._zod.run({ value: c.value, issues: [] }, d)
							if (b instanceof Promise) f.push(b), (e = !0)
							else {
								if (0 === b.issues.length) return b
								f.push(b)
							}
						}
						return e ? Promise.all(f).then((b) => cE(b, c, a, d)) : cE(f, c, a, d)
					})
			}),
			cG = F("$ZodDiscriminatedUnion", (a, b) => {
				cF.init(a, b)
				let c = a._zod.parse
				W(a._zod, "propValues", () => {
					let a = {}
					for (let c of b.options) {
						let d = c._zod.propValues
						if (!d || 0 === Object.keys(d).length)
							throw Error(`Invalid discriminated union option at index "${b.options.indexOf(c)}"`)
						for (let [b, c] of Object.entries(d)) for (let d of (a[b] || (a[b] = new Set()), c)) a[b].add(d)
					}
					return a
				})
				let d = S(() => {
					let a = b.options,
						c = new Map()
					for (let d of a) {
						let a = d._zod.propValues[b.discriminator]
						if (!a || 0 === a.size)
							throw Error(`Invalid discriminated union option at index "${b.options.indexOf(d)}"`)
						for (let b of a) {
							if (c.has(b)) throw Error(`Duplicate discriminator value "${String(b)}"`)
							c.set(b, d)
						}
					}
					return c
				})
				a._zod.parse = (e, f) => {
					let g = e.value
					if (!ab(g)) return e.issues.push({ code: "invalid_type", expected: "object", input: g, inst: a }), e
					let h = d.value.get(g?.[b.discriminator])
					return h
						? h._zod.run(e, f)
						: b.unionFallback
							? c(e, f)
							: (e.issues.push({
									code: "invalid_union",
									errors: [],
									note: "No matching discriminator",
									input: g,
									path: [b.discriminator],
									inst: a,
								}),
								e)
				}
			}),
			cH = F("$ZodIntersection", (a, b) => {
				bU.init(a, b),
					(a._zod.parse = (a, c) => {
						let d = a.value,
							e = b.left._zod.run({ value: d, issues: [] }, c),
							f = b.right._zod.run({ value: d, issues: [] }, c)
						return e instanceof Promise || f instanceof Promise
							? Promise.all([e, f]).then(([b, c]) => cI(a, b, c))
							: cI(a, e, f)
					})
			})
		function cI(a, b, c) {
			if ((b.issues.length && a.issues.push(...b.issues), c.issues.length && a.issues.push(...c.issues), av(a)))
				return a
			let d = (function a(b, c) {
				if (b === c || (b instanceof Date && c instanceof Date && +b == +c)) return { valid: !0, data: b }
				if (ad(b) && ad(c)) {
					let d = Object.keys(c),
						e = Object.keys(b).filter((a) => -1 !== d.indexOf(a)),
						f = { ...b, ...c }
					for (let d of e) {
						let e = a(b[d], c[d])
						if (!e.valid) return { valid: !1, mergeErrorPath: [d, ...e.mergeErrorPath] }
						f[d] = e.data
					}
					return { valid: !0, data: f }
				}
				if (Array.isArray(b) && Array.isArray(c)) {
					if (b.length !== c.length) return { valid: !1, mergeErrorPath: [] }
					let d = []
					for (let e = 0; e < b.length; e++) {
						let f = a(b[e], c[e])
						if (!f.valid) return { valid: !1, mergeErrorPath: [e, ...f.mergeErrorPath] }
						d.push(f.data)
					}
					return { valid: !0, data: d }
				}
				return { valid: !1, mergeErrorPath: [] }
			})(b.value, c.value)
			if (!d.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(d.mergeErrorPath)}`)
			return (a.value = d.data), a
		}
		let cJ = F("$ZodTuple", (a, b) => {
			bU.init(a, b)
			let c = b.items,
				d = c.length - [...c].reverse().findIndex((a) => "optional" !== a._zod.optin)
			a._zod.parse = (e, f) => {
				let g = e.value
				if (!Array.isArray(g))
					return e.issues.push({ input: g, inst: a, expected: "tuple", code: "invalid_type" }), e
				e.value = []
				let h = []
				if (!b.rest) {
					let b = g.length > c.length,
						f = g.length < d - 1
					if (b || f)
						return (
							e.issues.push({
								input: g,
								inst: a,
								origin: "array",
								...(b
									? { code: "too_big", maximum: c.length }
									: { code: "too_small", minimum: c.length }),
							}),
							e
						)
				}
				let i = -1
				for (let a of c) {
					if (++i >= g.length && i >= d) continue
					let b = a._zod.run({ value: g[i], issues: [] }, f)
					b instanceof Promise ? h.push(b.then((a) => cK(a, e, i))) : cK(b, e, i)
				}
				if (b.rest)
					for (let a of g.slice(c.length)) {
						i++
						let c = b.rest._zod.run({ value: a, issues: [] }, f)
						c instanceof Promise ? h.push(c.then((a) => cK(a, e, i))) : cK(c, e, i)
					}
				return h.length ? Promise.all(h).then(() => e) : e
			}
		})
		function cK(a, b, c) {
			a.issues.length && b.issues.push(...aw(c, a.issues)), (b.value[c] = a.value)
		}
		let cL = F("$ZodRecord", (a, b) => {
				bU.init(a, b),
					(a._zod.parse = (c, d) => {
						let e = c.value
						if (!ad(e))
							return c.issues.push({ expected: "record", code: "invalid_type", input: e, inst: a }), c
						let f = []
						if (b.keyType._zod.values) {
							let g,
								h = b.keyType._zod.values
							for (let a of ((c.value = {}), h))
								if ("string" == typeof a || "number" == typeof a || "symbol" == typeof a) {
									let g = b.valueType._zod.run({ value: e[a], issues: [] }, d)
									g instanceof Promise
										? f.push(
												g.then((b) => {
													b.issues.length && c.issues.push(...aw(a, b.issues)),
														(c.value[a] = b.value)
												}),
											)
										: (g.issues.length && c.issues.push(...aw(a, g.issues)), (c.value[a] = g.value))
								}
							for (let a in e) h.has(a) || (g = g ?? []).push(a)
							g &&
								g.length > 0 &&
								c.issues.push({ code: "unrecognized_keys", input: e, inst: a, keys: g })
						} else
							for (let g of ((c.value = {}), Reflect.ownKeys(e))) {
								if ("__proto__" === g) continue
								let h = b.keyType._zod.run({ value: g, issues: [] }, d)
								if (h instanceof Promise)
									throw Error("Async schemas not supported in object keys currently")
								if (h.issues.length) {
									c.issues.push({
										origin: "record",
										code: "invalid_key",
										issues: h.issues.map((a) => ay(a, d, J())),
										input: g,
										path: [g],
										inst: a,
									}),
										(c.value[h.value] = h.value)
									continue
								}
								let i = b.valueType._zod.run({ value: e[g], issues: [] }, d)
								i instanceof Promise
									? f.push(
											i.then((a) => {
												a.issues.length && c.issues.push(...aw(g, a.issues)),
													(c.value[h.value] = a.value)
											}),
										)
									: (i.issues.length && c.issues.push(...aw(g, i.issues)),
										(c.value[h.value] = i.value))
							}
						return f.length ? Promise.all(f).then(() => c) : c
					})
			}),
			cM = F("$ZodMap", (a, b) => {
				bU.init(a, b),
					(a._zod.parse = (c, d) => {
						let e = c.value
						if (!(e instanceof Map))
							return c.issues.push({ expected: "map", code: "invalid_type", input: e, inst: a }), c
						let f = []
						for (let [g, h] of ((c.value = new Map()), e)) {
							let i = b.keyType._zod.run({ value: g, issues: [] }, d),
								j = b.valueType._zod.run({ value: h, issues: [] }, d)
							i instanceof Promise || j instanceof Promise
								? f.push(
										Promise.all([i, j]).then(([b, f]) => {
											cN(b, f, c, g, e, a, d)
										}),
									)
								: cN(i, j, c, g, e, a, d)
						}
						return f.length ? Promise.all(f).then(() => c) : c
					})
			})
		function cN(a, b, c, d, e, f, g) {
			a.issues.length &&
				(af.has(typeof d)
					? c.issues.push(...aw(d, a.issues))
					: c.issues.push({
							origin: "map",
							code: "invalid_key",
							input: e,
							inst: f,
							issues: a.issues.map((a) => ay(a, g, J())),
						})),
				b.issues.length &&
					(af.has(typeof d)
						? c.issues.push(...aw(d, b.issues))
						: c.issues.push({
								origin: "map",
								code: "invalid_element",
								input: e,
								inst: f,
								key: d,
								issues: b.issues.map((a) => ay(a, g, J())),
							})),
				c.value.set(a.value, b.value)
		}
		let cO = F("$ZodSet", (a, b) => {
			bU.init(a, b),
				(a._zod.parse = (c, d) => {
					let e = c.value
					if (!(e instanceof Set))
						return c.issues.push({ input: e, inst: a, expected: "set", code: "invalid_type" }), c
					let f = []
					for (let a of ((c.value = new Set()), e)) {
						let e = b.valueType._zod.run({ value: a, issues: [] }, d)
						e instanceof Promise ? f.push(e.then((a) => cP(a, c))) : cP(e, c)
					}
					return f.length ? Promise.all(f).then(() => c) : c
				})
		})
		function cP(a, b) {
			a.issues.length && b.issues.push(...a.issues), b.value.add(a.value)
		}
		let cQ = F("$ZodEnum", (a, b) => {
				bU.init(a, b)
				let c = P(b.entries)
				;(a._zod.values = new Set(c)),
					(a._zod.pattern = RegExp(
						`^(${c
							.filter((a) => af.has(typeof a))
							.map((a) => ("string" == typeof a ? ah(a) : a.toString()))
							.join("|")})$`,
					)),
					(a._zod.parse = (b, d) => {
						let e = b.value
						return (
							a._zod.values.has(e) ||
								b.issues.push({ code: "invalid_value", values: c, input: e, inst: a }),
							b
						)
					})
			}),
			cR = F("$ZodLiteral", (a, b) => {
				bU.init(a, b),
					(a._zod.values = new Set(b.values)),
					(a._zod.pattern = RegExp(
						`^(${b.values.map((a) => ("string" == typeof a ? ah(a) : a ? a.toString() : String(a))).join("|")})$`,
					)),
					(a._zod.parse = (c, d) => {
						let e = c.value
						return (
							a._zod.values.has(e) ||
								c.issues.push({ code: "invalid_value", values: b.values, input: e, inst: a }),
							c
						)
					})
			}),
			cS = F("$ZodFile", (a, b) => {
				bU.init(a, b),
					(a._zod.parse = (b, c) => {
						let d = b.value
						return (
							d instanceof File ||
								b.issues.push({ expected: "file", code: "invalid_type", input: d, inst: a }),
							b
						)
					})
			}),
			cT = F("$ZodTransform", (a, b) => {
				bU.init(a, b),
					(a._zod.parse = (a, c) => {
						let d = b.transform(a.value, a)
						if (c.async)
							return (d instanceof Promise ? d : Promise.resolve(d)).then((b) => ((a.value = b), a))
						if (d instanceof Promise) throw new H()
						return (a.value = d), a
					})
			}),
			cU = F("$ZodOptional", (a, b) => {
				bU.init(a, b),
					(a._zod.optin = "optional"),
					(a._zod.optout = "optional"),
					W(a._zod, "values", () =>
						b.innerType._zod.values ? new Set([...b.innerType._zod.values, void 0]) : void 0,
					),
					W(a._zod, "pattern", () => {
						let a = b.innerType._zod.pattern
						return a ? RegExp(`^(${U(a.source)})?$`) : void 0
					}),
					(a._zod.parse = (a, c) =>
						"optional" === b.innerType._zod.optin
							? b.innerType._zod.run(a, c)
							: void 0 === a.value
								? a
								: b.innerType._zod.run(a, c))
			}),
			cV = F("$ZodNullable", (a, b) => {
				bU.init(a, b),
					W(a._zod, "optin", () => b.innerType._zod.optin),
					W(a._zod, "optout", () => b.innerType._zod.optout),
					W(a._zod, "pattern", () => {
						let a = b.innerType._zod.pattern
						return a ? RegExp(`^(${U(a.source)}|null)$`) : void 0
					}),
					W(a._zod, "values", () =>
						b.innerType._zod.values ? new Set([...b.innerType._zod.values, null]) : void 0,
					),
					(a._zod.parse = (a, c) => (null === a.value ? a : b.innerType._zod.run(a, c)))
			}),
			cW = F("$ZodDefault", (a, b) => {
				bU.init(a, b),
					(a._zod.optin = "optional"),
					W(a._zod, "values", () => b.innerType._zod.values),
					(a._zod.parse = (a, c) => {
						if (void 0 === a.value) return (a.value = b.defaultValue), a
						let d = b.innerType._zod.run(a, c)
						return d instanceof Promise ? d.then((a) => cX(a, b)) : cX(d, b)
					})
			})
		function cX(a, b) {
			return void 0 === a.value && (a.value = b.defaultValue), a
		}
		let cY = F("$ZodPrefault", (a, b) => {
				bU.init(a, b),
					(a._zod.optin = "optional"),
					W(a._zod, "values", () => b.innerType._zod.values),
					(a._zod.parse = (a, c) => (
						void 0 === a.value && (a.value = b.defaultValue), b.innerType._zod.run(a, c)
					))
			}),
			cZ = F("$ZodNonOptional", (a, b) => {
				bU.init(a, b),
					W(a._zod, "values", () => {
						let a = b.innerType._zod.values
						return a ? new Set([...a].filter((a) => void 0 !== a)) : void 0
					}),
					(a._zod.parse = (c, d) => {
						let e = b.innerType._zod.run(c, d)
						return e instanceof Promise ? e.then((b) => c$(b, a)) : c$(e, a)
					})
			})
		function c$(a, b) {
			return (
				a.issues.length ||
					void 0 !== a.value ||
					a.issues.push({ code: "invalid_type", expected: "nonoptional", input: a.value, inst: b }),
				a
			)
		}
		let c_ = F("$ZodSuccess", (a, b) => {
				bU.init(a, b),
					(a._zod.parse = (a, c) => {
						let d = b.innerType._zod.run(a, c)
						return d instanceof Promise
							? d.then((b) => ((a.value = 0 === b.issues.length), a))
							: ((a.value = 0 === d.issues.length), a)
					})
			}),
			c0 = F("$ZodCatch", (a, b) => {
				bU.init(a, b),
					(a._zod.optin = "optional"),
					W(a._zod, "optout", () => b.innerType._zod.optout),
					W(a._zod, "values", () => b.innerType._zod.values),
					(a._zod.parse = (a, c) => {
						let d = b.innerType._zod.run(a, c)
						return d instanceof Promise
							? d.then(
									(d) => (
										(a.value = d.value),
										d.issues.length &&
											((a.value = b.catchValue({
												...a,
												error: { issues: d.issues.map((a) => ay(a, c, J())) },
												input: a.value,
											})),
											(a.issues = [])),
										a
									),
								)
							: ((a.value = d.value),
								d.issues.length &&
									((a.value = b.catchValue({
										...a,
										error: { issues: d.issues.map((a) => ay(a, c, J())) },
										input: a.value,
									})),
									(a.issues = [])),
								a)
					})
			}),
			c1 = F("$ZodNaN", (a, b) => {
				bU.init(a, b),
					(a._zod.parse = (b, c) => (
						("number" == typeof b.value && Number.isNaN(b.value)) ||
							b.issues.push({ input: b.value, inst: a, expected: "nan", code: "invalid_type" }),
						b
					))
			}),
			c2 = F("$ZodPipe", (a, b) => {
				bU.init(a, b),
					W(a._zod, "values", () => b.in._zod.values),
					W(a._zod, "optin", () => b.in._zod.optin),
					W(a._zod, "optout", () => b.out._zod.optout),
					(a._zod.parse = (a, c) => {
						let d = b.in._zod.run(a, c)
						return d instanceof Promise ? d.then((a) => c3(a, b, c)) : c3(d, b, c)
					})
			})
		function c3(a, b, c) {
			return av(a) ? a : b.out._zod.run({ value: a.value, issues: a.issues }, c)
		}
		let c4 = F("$ZodReadonly", (a, b) => {
			bU.init(a, b),
				W(a._zod, "propValues", () => b.innerType._zod.propValues),
				W(a._zod, "values", () => b.innerType._zod.values),
				W(a._zod, "optin", () => b.innerType._zod.optin),
				W(a._zod, "optout", () => b.innerType._zod.optout),
				(a._zod.parse = (a, c) => {
					let d = b.innerType._zod.run(a, c)
					return d instanceof Promise ? d.then(c5) : c5(d)
				})
		})
		function c5(a) {
			return (a.value = Object.freeze(a.value)), a
		}
		let c6 = F("$ZodTemplateLiteral", (a, b) => {
				bU.init(a, b)
				let c = []
				for (let a of b.parts)
					if (a instanceof bU) {
						if (!a._zod.pattern)
							throw Error(
								`Invalid template literal part, no pattern found: ${[...a._zod.traits].shift()}`,
							)
						let b = a._zod.pattern instanceof RegExp ? a._zod.pattern.source : a._zod.pattern
						if (!b) throw Error(`Invalid template literal part: ${a._zod.traits}`)
						let d = +!!b.startsWith("^"),
							e = b.endsWith("$") ? b.length - 1 : b.length
						c.push(b.slice(d, e))
					} else if (null === a || ag.has(typeof a)) c.push(ah(`${a}`))
					else throw Error(`Invalid template literal part: ${a}`)
				;(a._zod.pattern = RegExp(`^${c.join("")}$`)),
					(a._zod.parse = (b, c) => (
						"string" != typeof b.value
							? b.issues.push({
									input: b.value,
									inst: a,
									expected: "template_literal",
									code: "invalid_type",
								})
							: ((a._zod.pattern.lastIndex = 0),
								a._zod.pattern.test(b.value) ||
									b.issues.push({
										input: b.value,
										inst: a,
										code: "invalid_format",
										format: "template_literal",
										pattern: a._zod.pattern.source,
									})),
						b
					))
			}),
			c7 = F("$ZodPromise", (a, b) => {
				bU.init(a, b),
					(a._zod.parse = (a, c) =>
						Promise.resolve(a.value).then((a) => b.innerType._zod.run({ value: a, issues: [] }, c)))
			}),
			c8 = F("$ZodLazy", (a, b) => {
				bU.init(a, b),
					W(a._zod, "innerType", () => b.getter()),
					W(a._zod, "pattern", () => a._zod.innerType._zod.pattern),
					W(a._zod, "propValues", () => a._zod.innerType._zod.propValues),
					W(a._zod, "optin", () => a._zod.innerType._zod.optin),
					W(a._zod, "optout", () => a._zod.innerType._zod.optout),
					(a._zod.parse = (b, c) => a._zod.innerType._zod.run(b, c))
			}),
			c9 = F("$ZodCustom", (a, b) => {
				bu.init(a, b),
					bU.init(a, b),
					(a._zod.parse = (a, b) => a),
					(a._zod.check = (c) => {
						let d = c.value,
							e = b.fn(d)
						if (e instanceof Promise) return e.then((b) => da(b, c, d, a))
						da(e, c, d, a)
					})
			})
		function da(a, b, c, d) {
			if (!a) {
				let a = {
					code: "custom",
					input: c,
					inst: d,
					path: [...(d._zod.def.path ?? [])],
					continue: !d._zod.def.abort,
				}
				d._zod.def.params && (a.params = d._zod.def.params), b.issues.push(aB(a))
			}
		}
		a.s(
			[
				"$ZodAny",
				0,
				cu,
				"$ZodArray",
				0,
				cA,
				"$ZodBase64",
				0,
				cf,
				"$ZodBase64URL",
				0,
				ch,
				"$ZodBigInt",
				0,
				cp,
				"$ZodBigIntFormat",
				0,
				cq,
				"$ZodBoolean",
				0,
				co,
				"$ZodCIDRv4",
				0,
				cc,
				"$ZodCIDRv6",
				0,
				cd,
				"$ZodCUID",
				0,
				b1,
				"$ZodCUID2",
				0,
				b2,
				"$ZodCatch",
				0,
				c0,
				"$ZodCustom",
				0,
				c9,
				"$ZodCustomStringFormat",
				0,
				cl,
				"$ZodDate",
				0,
				cy,
				"$ZodDefault",
				0,
				cW,
				"$ZodDiscriminatedUnion",
				0,
				cG,
				"$ZodE164",
				0,
				ci,
				"$ZodEmail",
				0,
				bZ,
				"$ZodEmoji",
				0,
				b_,
				"$ZodEnum",
				0,
				cQ,
				"$ZodFile",
				0,
				cS,
				"$ZodGUID",
				0,
				bX,
				"$ZodIPv4",
				0,
				ca,
				"$ZodIPv6",
				0,
				cb,
				"$ZodISODate",
				0,
				b7,
				"$ZodISODateTime",
				0,
				b6,
				"$ZodISODuration",
				0,
				b9,
				"$ZodISOTime",
				0,
				b8,
				"$ZodIntersection",
				0,
				cH,
				"$ZodJWT",
				0,
				ck,
				"$ZodKSUID",
				0,
				b5,
				"$ZodLazy",
				0,
				c8,
				"$ZodLiteral",
				0,
				cR,
				"$ZodMap",
				0,
				cM,
				"$ZodNaN",
				0,
				c1,
				"$ZodNanoID",
				0,
				b0,
				"$ZodNever",
				0,
				cw,
				"$ZodNonOptional",
				0,
				cZ,
				"$ZodNull",
				0,
				ct,
				"$ZodNullable",
				0,
				cV,
				"$ZodNumber",
				0,
				cm,
				"$ZodNumberFormat",
				0,
				cn,
				"$ZodObject",
				0,
				cD,
				"$ZodOptional",
				0,
				cU,
				"$ZodPipe",
				0,
				c2,
				"$ZodPrefault",
				0,
				cY,
				"$ZodPromise",
				0,
				c7,
				"$ZodReadonly",
				0,
				c4,
				"$ZodRecord",
				0,
				cL,
				"$ZodSet",
				0,
				cO,
				"$ZodString",
				0,
				bV,
				"$ZodStringFormat",
				0,
				bW,
				"$ZodSuccess",
				0,
				c_,
				"$ZodSymbol",
				0,
				cr,
				"$ZodTemplateLiteral",
				0,
				c6,
				"$ZodTransform",
				0,
				cT,
				"$ZodTuple",
				0,
				cJ,
				"$ZodType",
				0,
				bU,
				"$ZodULID",
				0,
				b3,
				"$ZodURL",
				0,
				b$,
				"$ZodUUID",
				0,
				bY,
				"$ZodUndefined",
				0,
				cs,
				"$ZodUnion",
				0,
				cF,
				"$ZodUnknown",
				0,
				cv,
				"$ZodVoid",
				0,
				cx,
				"$ZodXID",
				0,
				b4,
				"isValidBase64",
				() => ce,
				"isValidBase64URL",
				() => cg,
				"isValidJWT",
				() => cj,
			],
			73207,
		),
			a.i(73207),
			a.s(
				[
					"$ZodAny",
					0,
					cu,
					"$ZodArray",
					0,
					cA,
					"$ZodBase64",
					0,
					cf,
					"$ZodBase64URL",
					0,
					ch,
					"$ZodBigInt",
					0,
					cp,
					"$ZodBigIntFormat",
					0,
					cq,
					"$ZodBoolean",
					0,
					co,
					"$ZodCIDRv4",
					0,
					cc,
					"$ZodCIDRv6",
					0,
					cd,
					"$ZodCUID",
					0,
					b1,
					"$ZodCUID2",
					0,
					b2,
					"$ZodCatch",
					0,
					c0,
					"$ZodCustom",
					0,
					c9,
					"$ZodCustomStringFormat",
					0,
					cl,
					"$ZodDate",
					0,
					cy,
					"$ZodDefault",
					0,
					cW,
					"$ZodDiscriminatedUnion",
					0,
					cG,
					"$ZodE164",
					0,
					ci,
					"$ZodEmail",
					0,
					bZ,
					"$ZodEmoji",
					0,
					b_,
					"$ZodEnum",
					0,
					cQ,
					"$ZodFile",
					0,
					cS,
					"$ZodGUID",
					0,
					bX,
					"$ZodIPv4",
					0,
					ca,
					"$ZodIPv6",
					0,
					cb,
					"$ZodISODate",
					0,
					b7,
					"$ZodISODateTime",
					0,
					b6,
					"$ZodISODuration",
					0,
					b9,
					"$ZodISOTime",
					0,
					b8,
					"$ZodIntersection",
					0,
					cH,
					"$ZodJWT",
					0,
					ck,
					"$ZodKSUID",
					0,
					b5,
					"$ZodLazy",
					0,
					c8,
					"$ZodLiteral",
					0,
					cR,
					"$ZodMap",
					0,
					cM,
					"$ZodNaN",
					0,
					c1,
					"$ZodNanoID",
					0,
					b0,
					"$ZodNever",
					0,
					cw,
					"$ZodNonOptional",
					0,
					cZ,
					"$ZodNull",
					0,
					ct,
					"$ZodNullable",
					0,
					cV,
					"$ZodNumber",
					0,
					cm,
					"$ZodNumberFormat",
					0,
					cn,
					"$ZodObject",
					0,
					cD,
					"$ZodOptional",
					0,
					cU,
					"$ZodPipe",
					0,
					c2,
					"$ZodPrefault",
					0,
					cY,
					"$ZodPromise",
					0,
					c7,
					"$ZodReadonly",
					0,
					c4,
					"$ZodRecord",
					0,
					cL,
					"$ZodSet",
					0,
					cO,
					"$ZodString",
					0,
					bV,
					"$ZodStringFormat",
					0,
					bW,
					"$ZodSuccess",
					0,
					c_,
					"$ZodSymbol",
					0,
					cr,
					"$ZodTemplateLiteral",
					0,
					c6,
					"$ZodTransform",
					0,
					cT,
					"$ZodTuple",
					0,
					cJ,
					"$ZodType",
					0,
					bU,
					"$ZodULID",
					0,
					b3,
					"$ZodURL",
					0,
					b$,
					"$ZodUUID",
					0,
					bY,
					"$ZodUndefined",
					0,
					cs,
					"$ZodUnion",
					0,
					cF,
					"$ZodUnknown",
					0,
					cv,
					"$ZodVoid",
					0,
					cx,
					"$ZodXID",
					0,
					b4,
					"clone",
					() => ai,
					"isValidBase64",
					() => ce,
					"isValidBase64URL",
					() => cg,
					"isValidJWT",
					() => cj,
				],
				34845,
			),
			a.i(34845),
			a.i(1323),
			a.i(77957)
		var db = a.i(45106),
			dc = a.i(32493)
		function dd(a, b, c, d) {
			let e = Math.abs(a),
				f = e % 10,
				g = e % 100
			return g >= 11 && g <= 19 ? d : 1 === f ? b : f >= 2 && f <= 4 ? c : d
		}
		function de(a, b, c, d) {
			let e = Math.abs(a),
				f = e % 10,
				g = e % 100
			return g >= 11 && g <= 19 ? d : 1 === f ? b : f >= 2 && f <= 4 ? c : d
		}
		a.s([], 39989),
			a.i(39989),
			a.s(
				[
					"ar",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "حرف", verb: "أن يحوي" },
									file: { unit: "بايت", verb: "أن يحوي" },
									array: { unit: "عنصر", verb: "أن يحوي" },
									set: { unit: "عنصر", verb: "أن يحوي" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `مدخلات غير مقبولة: يفترض إدخال ${c.expected}، ولكن تم إدخال ${((
												a,
											) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `مدخلات غير مقبولة: يفترض إدخال ${al(c.values[0])}`
											return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return ` أكبر من اللازم: يفترض أن تكون ${c.origin ?? "القيمة"} ${b} ${c.maximum.toString()} ${d.unit ?? "عنصر"}`
											return `أكبر من اللازم: يفترض أن تكون ${c.origin ?? "القيمة"} ${b} ${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `أصغر من اللازم: يفترض لـ ${c.origin} أن يكون ${b} ${c.minimum.toString()} ${d.unit}`
											return `أصغر من اللازم: يفترض لـ ${c.origin} أن يكون ${b} ${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `نَص غير مقبول: يجب أن يبدأ بـ "${c.prefix}"`
											if ("ends_with" === c.format)
												return `نَص غير مقبول: يجب أن ينتهي بـ "${c.suffix}"`
											if ("includes" === c.format)
												return `نَص غير مقبول: يجب أن يتضمَّن "${c.includes}"`
											if ("regex" === c.format)
												return `نَص غير مقبول: يجب أن يطابق النمط ${c.pattern}`
											return `${b[c.format] ?? c.format} غير مقبول`
										case "not_multiple_of":
											return `رقم غير مقبول: يجب أن يكون من مضاعفات ${c.divisor}`
										case "unrecognized_keys":
											return `معرف${c.keys.length > 1 ? "ات" : ""} غريب${c.keys.length > 1 ? "ة" : ""}: ${Q(c.keys, "، ")}`
										case "invalid_key":
											return `معرف غير مقبول في ${c.origin}`
										case "invalid_union":
										default:
											return "مدخل غير مقبول"
										case "invalid_element":
											return `مدخل غير مقبول في ${c.origin}`
									}
								}),
						}
					},
					"az",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "simvol", verb: "olmalıdır" },
									file: { unit: "bayt", verb: "olmalıdır" },
									array: { unit: "element", verb: "olmalıdır" },
									set: { unit: "element", verb: "olmalıdır" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Yanlış dəyər: g\xf6zlənilən ${c.expected}, daxil olan ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Yanlış dəyər: g\xf6zlənilən ${al(c.values[0])}`
											return `Yanlış se\xe7im: aşağıdakılardan biri olmalıdır: ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${c.origin ?? "dəyər"} ${b}${c.maximum.toString()} ${d.unit ?? "element"}`
											return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${c.origin ?? "dəyər"} ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `\xc7ox ki\xe7ik: g\xf6zlənilən ${c.origin} ${b}${c.minimum.toString()} ${d.unit}`
											return `\xc7ox ki\xe7ik: g\xf6zlənilən ${c.origin} ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Yanlış mətn: "${c.prefix}" ilə başlamalıdır`
											if ("ends_with" === c.format)
												return `Yanlış mətn: "${c.suffix}" ilə bitməlidir`
											if ("includes" === c.format)
												return `Yanlış mətn: "${c.includes}" daxil olmalıdır`
											if ("regex" === c.format)
												return `Yanlış mətn: ${c.pattern} şablonuna uyğun olmalıdır`
											return `Yanlış ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Yanlış ədəd: ${c.divisor} ilə b\xf6l\xfcnə bilən olmalıdır`
										case "unrecognized_keys":
											return `Tanınmayan a\xe7ar${c.keys.length > 1 ? "lar" : ""}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `${c.origin} daxilində yanlış a\xe7ar`
										case "invalid_union":
											return "Yanlış dəyər"
										case "invalid_element":
											return `${c.origin} daxilində yanlış dəyər`
										default:
											return `Yanlış dəyər`
									}
								}),
						}
					},
					"be",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: { one: "сімвал", few: "сімвалы", many: "сімвалаў" }, verb: "мець" },
									array: {
										unit: { one: "элемент", few: "элементы", many: "элементаў" },
										verb: "мець",
									},
									set: { unit: { one: "элемент", few: "элементы", many: "элементаў" }, verb: "мець" },
									file: { unit: { one: "байт", few: "байты", many: "байтаў" }, verb: "мець" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Няправільны ўвод: чакаўся ${c.expected}, атрымана ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "лік"
													case "object":
														if (Array.isArray(a)) return "масіў"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Няправільны ўвод: чакалася ${al(c.values[0])}`
											return `Няправільны варыянт: чакаўся адзін з ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d) {
												let a = dd(Number(c.maximum), d.unit.one, d.unit.few, d.unit.many)
												return `Занадта вялікі: чакалася, што ${c.origin ?? "значэнне"} павінна ${d.verb} ${b}${c.maximum.toString()} ${a}`
											}
											return `Занадта вялікі: чакалася, што ${c.origin ?? "значэнне"} павінна быць ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d) {
												let a = dd(Number(c.minimum), d.unit.one, d.unit.few, d.unit.many)
												return `Занадта малы: чакалася, што ${c.origin} павінна ${d.verb} ${b}${c.minimum.toString()} ${a}`
											}
											return `Занадта малы: чакалася, што ${c.origin} павінна быць ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Няправільны радок: павінен пачынацца з "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Няправільны радок: павінен заканчвацца на "${c.suffix}"`
											if ("includes" === c.format)
												return `Няправільны радок: павінен змяшчаць "${c.includes}"`
											if ("regex" === c.format)
												return `Няправільны радок: павінен адпавядаць шаблону ${c.pattern}`
											return `Няправільны ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Няправільны лік: павінен быць кратным ${c.divisor}`
										case "unrecognized_keys":
											return `Нераспазнаны ${c.keys.length > 1 ? "ключы" : "ключ"}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Няправільны ключ у ${c.origin}`
										case "invalid_union":
											return "Няправільны ўвод"
										case "invalid_element":
											return `Няправільнае значэнне ў ${c.origin}`
										default:
											return `Няправільны ўвод`
									}
								}),
						}
					},
					"ca",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "caràcters", verb: "contenir" },
									file: { unit: "bytes", verb: "contenir" },
									array: { unit: "elements", verb: "contenir" },
									set: { unit: "elements", verb: "contenir" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Tipus inv\xe0lid: s'esperava ${c.expected}, s'ha rebut ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Valor inv\xe0lid: s'esperava ${al(c.values[0])}`
											return `Opci\xf3 inv\xe0lida: s'esperava una de ${Q(c.values, " o ")}`
										case "too_big": {
											let b = c.inclusive ? "com a màxim" : "menys de",
												d = a[c.origin] ?? null
											if (d)
												return `Massa gran: s'esperava que ${c.origin ?? "el valor"} contingu\xe9s ${b} ${c.maximum.toString()} ${d.unit ?? "elements"}`
											return `Massa gran: s'esperava que ${c.origin ?? "el valor"} fos ${b} ${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? "com a mínim" : "més de",
												d = a[c.origin] ?? null
											if (d)
												return `Massa petit: s'esperava que ${c.origin} contingu\xe9s ${b} ${c.minimum.toString()} ${d.unit}`
											return `Massa petit: s'esperava que ${c.origin} fos ${b} ${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Format inv\xe0lid: ha de comen\xe7ar amb "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Format inv\xe0lid: ha d'acabar amb "${c.suffix}"`
											if ("includes" === c.format)
												return `Format inv\xe0lid: ha d'incloure "${c.includes}"`
											if ("regex" === c.format)
												return `Format inv\xe0lid: ha de coincidir amb el patr\xf3 ${c.pattern}`
											return `Format inv\xe0lid per a ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `N\xfamero inv\xe0lid: ha de ser m\xfaltiple de ${c.divisor}`
										case "unrecognized_keys":
											return `Clau${c.keys.length > 1 ? "s" : ""} no reconeguda${c.keys.length > 1 ? "s" : ""}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Clau inv\xe0lida a ${c.origin}`
										case "invalid_union":
											return "Entrada invàlida"
										case "invalid_element":
											return `Element inv\xe0lid a ${c.origin}`
										default:
											return `Entrada inv\xe0lida`
									}
								}),
						}
					},
					"cs",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "znaků", verb: "mít" },
									file: { unit: "bajtů", verb: "mít" },
									array: { unit: "prvků", verb: "mít" },
									set: { unit: "prvků", verb: "mít" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Neplatn\xfd vstup: oček\xe1v\xe1no ${c.expected}, obdrženo ${((
												a,
											) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "číslo"
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
														if (Array.isArray(a)) return "pole"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Neplatn\xfd vstup: oček\xe1v\xe1no ${al(c.values[0])}`
											return `Neplatn\xe1 možnost: oček\xe1v\xe1na jedna z hodnot ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Hodnota je př\xedliš velk\xe1: ${c.origin ?? "hodnota"} mus\xed m\xedt ${b}${c.maximum.toString()} ${d.unit ?? "prvků"}`
											return `Hodnota je př\xedliš velk\xe1: ${c.origin ?? "hodnota"} mus\xed b\xfdt ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Hodnota je př\xedliš mal\xe1: ${c.origin ?? "hodnota"} mus\xed m\xedt ${b}${c.minimum.toString()} ${d.unit ?? "prvků"}`
											return `Hodnota je př\xedliš mal\xe1: ${c.origin ?? "hodnota"} mus\xed b\xfdt ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Neplatn\xfd řetězec: mus\xed zač\xednat na "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Neplatn\xfd řetězec: mus\xed končit na "${c.suffix}"`
											if ("includes" === c.format)
												return `Neplatn\xfd řetězec: mus\xed obsahovat "${c.includes}"`
											if ("regex" === c.format)
												return `Neplatn\xfd řetězec: mus\xed odpov\xeddat vzoru ${c.pattern}`
											return `Neplatn\xfd form\xe1t ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Neplatn\xe9 č\xedslo: mus\xed b\xfdt n\xe1sobkem ${c.divisor}`
										case "unrecognized_keys":
											return `Nezn\xe1m\xe9 kl\xedče: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Neplatn\xfd kl\xedč v ${c.origin}`
										case "invalid_union":
											return "Neplatný vstup"
										case "invalid_element":
											return `Neplatn\xe1 hodnota v ${c.origin}`
										default:
											return `Neplatn\xfd vstup`
									}
								}),
						}
					},
					"de",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "Zeichen", verb: "zu haben" },
									file: { unit: "Bytes", verb: "zu haben" },
									array: { unit: "Elemente", verb: "zu haben" },
									set: { unit: "Elemente", verb: "zu haben" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Ung\xfcltige Eingabe: erwartet ${c.expected}, erhalten ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "Zahl"
													case "object":
														if (Array.isArray(a)) return "Array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Ung\xfcltige Eingabe: erwartet ${al(c.values[0])}`
											return `Ung\xfcltige Option: erwartet eine von ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Zu gro\xdf: erwartet, dass ${c.origin ?? "Wert"} ${b}${c.maximum.toString()} ${d.unit ?? "Elemente"} hat`
											return `Zu gro\xdf: erwartet, dass ${c.origin ?? "Wert"} ${b}${c.maximum.toString()} ist`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Zu klein: erwartet, dass ${c.origin} ${b}${c.minimum.toString()} ${d.unit} hat`
											return `Zu klein: erwartet, dass ${c.origin} ${b}${c.minimum.toString()} ist`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Ung\xfcltiger String: muss mit "${c.prefix}" beginnen`
											if ("ends_with" === c.format)
												return `Ung\xfcltiger String: muss mit "${c.suffix}" enden`
											if ("includes" === c.format)
												return `Ung\xfcltiger String: muss "${c.includes}" enthalten`
											if ("regex" === c.format)
												return `Ung\xfcltiger String: muss dem Muster ${c.pattern} entsprechen`
											return `Ung\xfcltig: ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Ung\xfcltige Zahl: muss ein Vielfaches von ${c.divisor} sein`
										case "unrecognized_keys":
											return `${c.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Ung\xfcltiger Schl\xfcssel in ${c.origin}`
										case "invalid_union":
											return "Ungültige Eingabe"
										case "invalid_element":
											return `Ung\xfcltiger Wert in ${c.origin}`
										default:
											return `Ung\xfcltige Eingabe`
									}
								}),
						}
					},
					"en",
					0,
					aE,
					"eo",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "karaktrojn", verb: "havi" },
									file: { unit: "bajtojn", verb: "havi" },
									array: { unit: "elementojn", verb: "havi" },
									set: { unit: "elementojn", verb: "havi" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Nevalida enigo: atendiĝis ${c.expected}, riceviĝis ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "nombro"
													case "object":
														if (Array.isArray(a)) return "tabelo"
														if (null === a) return "senvalora"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Nevalida enigo: atendiĝis ${al(c.values[0])}`
											return `Nevalida opcio: atendiĝis unu el ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Tro granda: atendiĝis ke ${c.origin ?? "valoro"} havu ${b}${c.maximum.toString()} ${d.unit ?? "elementojn"}`
											return `Tro granda: atendiĝis ke ${c.origin ?? "valoro"} havu ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Tro malgranda: atendiĝis ke ${c.origin} havu ${b}${c.minimum.toString()} ${d.unit}`
											return `Tro malgranda: atendiĝis ke ${c.origin} estu ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Nevalida karaktraro: devas komenciĝi per "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Nevalida karaktraro: devas finiĝi per "${c.suffix}"`
											if ("includes" === c.format)
												return `Nevalida karaktraro: devas inkluzivi "${c.includes}"`
											if ("regex" === c.format)
												return `Nevalida karaktraro: devas kongrui kun la modelo ${c.pattern}`
											return `Nevalida ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Nevalida nombro: devas esti oblo de ${c.divisor}`
										case "unrecognized_keys":
											return `Nekonata${c.keys.length > 1 ? "j" : ""} ŝlosilo${c.keys.length > 1 ? "j" : ""}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Nevalida ŝlosilo en ${c.origin}`
										case "invalid_union":
										default:
											return "Nevalida enigo"
										case "invalid_element":
											return `Nevalida valoro en ${c.origin}`
									}
								}),
						}
					},
					"es",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "caracteres", verb: "tener" },
									file: { unit: "bytes", verb: "tener" },
									array: { unit: "elementos", verb: "tener" },
									set: { unit: "elementos", verb: "tener" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Entrada inv\xe1lida: se esperaba ${c.expected}, recibido ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "número"
													case "object":
														if (Array.isArray(a)) return "arreglo"
														if (null === a) return "nulo"
														if (Object.getPrototypeOf(a) !== Object.prototype)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Entrada inv\xe1lida: se esperaba ${al(c.values[0])}`
											return `Opci\xf3n inv\xe1lida: se esperaba una de ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Demasiado grande: se esperaba que ${c.origin ?? "valor"} tuviera ${b}${c.maximum.toString()} ${d.unit ?? "elementos"}`
											return `Demasiado grande: se esperaba que ${c.origin ?? "valor"} fuera ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Demasiado peque\xf1o: se esperaba que ${c.origin} tuviera ${b}${c.minimum.toString()} ${d.unit}`
											return `Demasiado peque\xf1o: se esperaba que ${c.origin} fuera ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Cadena inv\xe1lida: debe comenzar con "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Cadena inv\xe1lida: debe terminar en "${c.suffix}"`
											if ("includes" === c.format)
												return `Cadena inv\xe1lida: debe incluir "${c.includes}"`
											if ("regex" === c.format)
												return `Cadena inv\xe1lida: debe coincidir con el patr\xf3n ${c.pattern}`
											return `Inv\xe1lido ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `N\xfamero inv\xe1lido: debe ser m\xfaltiplo de ${c.divisor}`
										case "unrecognized_keys":
											return `Llave${c.keys.length > 1 ? "s" : ""} desconocida${c.keys.length > 1 ? "s" : ""}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Llave inv\xe1lida en ${c.origin}`
										case "invalid_union":
											return "Entrada inválida"
										case "invalid_element":
											return `Valor inv\xe1lido en ${c.origin}`
										default:
											return `Entrada inv\xe1lida`
									}
								}),
						}
					},
					"fa",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "کاراکتر", verb: "داشته باشد" },
									file: { unit: "بایت", verb: "داشته باشد" },
									array: { unit: "آیتم", verb: "داشته باشد" },
									set: { unit: "آیتم", verb: "داشته باشد" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `ورودی نامعتبر: می‌بایست ${c.expected} می‌بود، ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "عدد"
													case "object":
														if (Array.isArray(a)) return "آرایه"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)} دریافت شد`
										case "invalid_value":
											if (1 === c.values.length)
												return `ورودی نامعتبر: می‌بایست ${al(c.values[0])} می‌بود`
											return `گزینه نامعتبر: می‌بایست یکی از ${Q(c.values, "|")} می‌بود`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `خیلی بزرگ: ${c.origin ?? "مقدار"} باید ${b}${c.maximum.toString()} ${d.unit ?? "عنصر"} باشد`
											return `خیلی بزرگ: ${c.origin ?? "مقدار"} باید ${b}${c.maximum.toString()} باشد`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `خیلی کوچک: ${c.origin} باید ${b}${c.minimum.toString()} ${d.unit} باشد`
											return `خیلی کوچک: ${c.origin} باید ${b}${c.minimum.toString()} باشد`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `رشته نامعتبر: باید با "${c.prefix}" شروع شود`
											if ("ends_with" === c.format)
												return `رشته نامعتبر: باید با "${c.suffix}" تمام شود`
											if ("includes" === c.format)
												return `رشته نامعتبر: باید شامل "${c.includes}" باشد`
											if ("regex" === c.format)
												return `رشته نامعتبر: باید با الگوی ${c.pattern} مطابقت داشته باشد`
											return `${b[c.format] ?? c.format} نامعتبر`
										case "not_multiple_of":
											return `عدد نامعتبر: باید مضرب ${c.divisor} باشد`
										case "unrecognized_keys":
											return `کلید${c.keys.length > 1 ? "های" : ""} ناشناس: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `کلید ناشناس در ${c.origin}`
										case "invalid_union":
										default:
											return `ورودی نامعتبر`
										case "invalid_element":
											return `مقدار نامعتبر در ${c.origin}`
									}
								}),
						}
					},
					"fi",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "merkkiä", subject: "merkkijonon" },
									file: { unit: "tavua", subject: "tiedoston" },
									array: { unit: "alkiota", subject: "listan" },
									set: { unit: "alkiota", subject: "joukon" },
									number: { unit: "", subject: "luvun" },
									bigint: { unit: "", subject: "suuren kokonaisluvun" },
									int: { unit: "", subject: "kokonaisluvun" },
									date: { unit: "", subject: "päivämäärän" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Virheellinen tyyppi: odotettiin ${c.expected}, oli ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Virheellinen sy\xf6te: t\xe4ytyy olla ${al(c.values[0])}`
											return `Virheellinen valinta: t\xe4ytyy olla yksi seuraavista: ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Liian suuri: ${d.subject} t\xe4ytyy olla ${b}${c.maximum.toString()} ${d.unit}`.trim()
											return `Liian suuri: arvon t\xe4ytyy olla ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Liian pieni: ${d.subject} t\xe4ytyy olla ${b}${c.minimum.toString()} ${d.unit}`.trim()
											return `Liian pieni: arvon t\xe4ytyy olla ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Virheellinen sy\xf6te: t\xe4ytyy alkaa "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Virheellinen sy\xf6te: t\xe4ytyy loppua "${c.suffix}"`
											if ("includes" === c.format)
												return `Virheellinen sy\xf6te: t\xe4ytyy sis\xe4lt\xe4\xe4 "${c.includes}"`
											if ("regex" === c.format)
												return `Virheellinen sy\xf6te: t\xe4ytyy vastata s\xe4\xe4nn\xf6llist\xe4 lauseketta ${c.pattern}`
											return `Virheellinen ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Virheellinen luku: t\xe4ytyy olla luvun ${c.divisor} monikerta`
										case "unrecognized_keys":
											return `${c.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${Q(c.keys, ", ")}`
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
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "caractères", verb: "avoir" },
									file: { unit: "octets", verb: "avoir" },
									array: { unit: "éléments", verb: "avoir" },
									set: { unit: "éléments", verb: "avoir" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Entr\xe9e invalide : ${c.expected} attendu, ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "nombre"
													case "object":
														if (Array.isArray(a)) return "tableau"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)} re\xe7u`
										case "invalid_value":
											if (1 === c.values.length)
												return `Entr\xe9e invalide : ${al(c.values[0])} attendu`
											return `Option invalide : une valeur parmi ${Q(c.values, "|")} attendue`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Trop grand : ${c.origin ?? "valeur"} doit ${d.verb} ${b}${c.maximum.toString()} ${d.unit ?? "élément(s)"}`
											return `Trop grand : ${c.origin ?? "valeur"} doit \xeatre ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Trop petit : ${c.origin} doit ${d.verb} ${b}${c.minimum.toString()} ${d.unit}`
											return `Trop petit : ${c.origin} doit \xeatre ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Cha\xeene invalide : doit commencer par "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Cha\xeene invalide : doit se terminer par "${c.suffix}"`
											if ("includes" === c.format)
												return `Cha\xeene invalide : doit inclure "${c.includes}"`
											if ("regex" === c.format)
												return `Cha\xeene invalide : doit correspondre au mod\xe8le ${c.pattern}`
											return `${b[c.format] ?? c.format} invalide`
										case "not_multiple_of":
											return `Nombre invalide : doit \xeatre un multiple de ${c.divisor}`
										case "unrecognized_keys":
											return `Cl\xe9${c.keys.length > 1 ? "s" : ""} non reconnue${c.keys.length > 1 ? "s" : ""} : ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Cl\xe9 invalide dans ${c.origin}`
										case "invalid_union":
											return "Entrée invalide"
										case "invalid_element":
											return `Valeur invalide dans ${c.origin}`
										default:
											return `Entr\xe9e invalide`
									}
								}),
						}
					},
					"frCA",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "caractères", verb: "avoir" },
									file: { unit: "octets", verb: "avoir" },
									array: { unit: "éléments", verb: "avoir" },
									set: { unit: "éléments", verb: "avoir" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Entr\xe9e invalide : attendu ${c.expected}, re\xe7u ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Entr\xe9e invalide : attendu ${al(c.values[0])}`
											return `Option invalide : attendu l'une des valeurs suivantes ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "≤" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Trop grand : attendu que ${c.origin ?? "la valeur"} ait ${b}${c.maximum.toString()} ${d.unit}`
											return `Trop grand : attendu que ${c.origin ?? "la valeur"} soit ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? "≥" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Trop petit : attendu que ${c.origin} ait ${b}${c.minimum.toString()} ${d.unit}`
											return `Trop petit : attendu que ${c.origin} soit ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Cha\xeene invalide : doit commencer par "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Cha\xeene invalide : doit se terminer par "${c.suffix}"`
											if ("includes" === c.format)
												return `Cha\xeene invalide : doit inclure "${c.includes}"`
											if ("regex" === c.format)
												return `Cha\xeene invalide : doit correspondre au motif ${c.pattern}`
											return `${b[c.format] ?? c.format} invalide`
										case "not_multiple_of":
											return `Nombre invalide : doit \xeatre un multiple de ${c.divisor}`
										case "unrecognized_keys":
											return `Cl\xe9${c.keys.length > 1 ? "s" : ""} non reconnue${c.keys.length > 1 ? "s" : ""} : ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Cl\xe9 invalide dans ${c.origin}`
										case "invalid_union":
											return "Entrée invalide"
										case "invalid_element":
											return `Valeur invalide dans ${c.origin}`
										default:
											return `Entr\xe9e invalide`
									}
								}),
						}
					},
					"he",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "אותיות", verb: "לכלול" },
									file: { unit: "בייטים", verb: "לכלול" },
									array: { unit: "פריטים", verb: "לכלול" },
									set: { unit: "פריטים", verb: "לכלול" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `קלט לא תקין: צריך ${c.expected}, התקבל ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length) return `קלט לא תקין: צריך ${al(c.values[0])}`
											return `קלט לא תקין: צריך אחת מהאפשרויות  ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `גדול מדי: ${c.origin ?? "value"} צריך להיות ${b}${c.maximum.toString()} ${d.unit ?? "elements"}`
											return `גדול מדי: ${c.origin ?? "value"} צריך להיות ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `קטן מדי: ${c.origin} צריך להיות ${b}${c.minimum.toString()} ${d.unit}`
											return `קטן מדי: ${c.origin} צריך להיות ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `מחרוזת לא תקינה: חייבת להתחיל ב"${c.prefix}"`
											if ("ends_with" === c.format)
												return `מחרוזת לא תקינה: חייבת להסתיים ב "${c.suffix}"`
											if ("includes" === c.format)
												return `מחרוזת לא תקינה: חייבת לכלול "${c.includes}"`
											if ("regex" === c.format)
												return `מחרוזת לא תקינה: חייבת להתאים לתבנית ${c.pattern}`
											return `${b[c.format] ?? c.format} לא תקין`
										case "not_multiple_of":
											return `מספר לא תקין: חייב להיות מכפלה של ${c.divisor}`
										case "unrecognized_keys":
											return `מפתח${c.keys.length > 1 ? "ות" : ""} לא מזוה${c.keys.length > 1 ? "ים" : "ה"}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `מפתח לא תקין ב${c.origin}`
										case "invalid_union":
											return "קלט לא תקין"
										case "invalid_element":
											return `ערך לא תקין ב${c.origin}`
										default:
											return `קלט לא תקין`
									}
								}),
						}
					},
					"hu",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "karakter", verb: "legyen" },
									file: { unit: "byte", verb: "legyen" },
									array: { unit: "elem", verb: "legyen" },
									set: { unit: "elem", verb: "legyen" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${c.expected}, a kapott \xe9rt\xe9k ${((
												a,
											) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "szám"
													case "object":
														if (Array.isArray(a)) return "tömb"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${al(c.values[0])}`
											return `\xc9rv\xe9nytelen opci\xf3: valamelyik \xe9rt\xe9k v\xe1rt ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `T\xfal nagy: ${c.origin ?? "érték"} m\xe9rete t\xfal nagy ${b}${c.maximum.toString()} ${d.unit ?? "elem"}`
											return `T\xfal nagy: a bemeneti \xe9rt\xe9k ${c.origin ?? "érték"} t\xfal nagy: ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${c.origin} m\xe9rete t\xfal kicsi ${b}${c.minimum.toString()} ${d.unit}`
											return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${c.origin} t\xfal kicsi ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `\xc9rv\xe9nytelen string: "${c.prefix}" \xe9rt\xe9kkel kell kezdődnie`
											if ("ends_with" === c.format)
												return `\xc9rv\xe9nytelen string: "${c.suffix}" \xe9rt\xe9kkel kell v\xe9gződnie`
											if ("includes" === c.format)
												return `\xc9rv\xe9nytelen string: "${c.includes}" \xe9rt\xe9ket kell tartalmaznia`
											if ("regex" === c.format)
												return `\xc9rv\xe9nytelen string: ${c.pattern} mint\xe1nak kell megfelelnie`
											return `\xc9rv\xe9nytelen ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `\xc9rv\xe9nytelen sz\xe1m: ${c.divisor} t\xf6bbsz\xf6r\xf6s\xe9nek kell lennie`
										case "unrecognized_keys":
											return `Ismeretlen kulcs${c.keys.length > 1 ? "s" : ""}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `\xc9rv\xe9nytelen kulcs ${c.origin}`
										case "invalid_union":
											return "Érvénytelen bemenet"
										case "invalid_element":
											return `\xc9rv\xe9nytelen \xe9rt\xe9k: ${c.origin}`
										default:
											return `\xc9rv\xe9nytelen bemenet`
									}
								}),
						}
					},
					"id",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "karakter", verb: "memiliki" },
									file: { unit: "byte", verb: "memiliki" },
									array: { unit: "item", verb: "memiliki" },
									set: { unit: "item", verb: "memiliki" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Input tidak valid: diharapkan ${c.expected}, diterima ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Input tidak valid: diharapkan ${al(c.values[0])}`
											return `Pilihan tidak valid: diharapkan salah satu dari ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Terlalu besar: diharapkan ${c.origin ?? "value"} memiliki ${b}${c.maximum.toString()} ${d.unit ?? "elemen"}`
											return `Terlalu besar: diharapkan ${c.origin ?? "value"} menjadi ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Terlalu kecil: diharapkan ${c.origin} memiliki ${b}${c.minimum.toString()} ${d.unit}`
											return `Terlalu kecil: diharapkan ${c.origin} menjadi ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `String tidak valid: harus dimulai dengan "${c.prefix}"`
											if ("ends_with" === c.format)
												return `String tidak valid: harus berakhir dengan "${c.suffix}"`
											if ("includes" === c.format)
												return `String tidak valid: harus menyertakan "${c.includes}"`
											if ("regex" === c.format)
												return `String tidak valid: harus sesuai pola ${c.pattern}`
											return `${b[c.format] ?? c.format} tidak valid`
										case "not_multiple_of":
											return `Angka tidak valid: harus kelipatan dari ${c.divisor}`
										case "unrecognized_keys":
											return `Kunci tidak dikenali ${c.keys.length > 1 ? "s" : ""}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Kunci tidak valid di ${c.origin}`
										case "invalid_union":
										default:
											return "Input tidak valid"
										case "invalid_element":
											return `Nilai tidak valid di ${c.origin}`
									}
								}),
						}
					},
					"it",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "caratteri", verb: "avere" },
									file: { unit: "byte", verb: "avere" },
									array: { unit: "elementi", verb: "avere" },
									set: { unit: "elementi", verb: "avere" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Input non valido: atteso ${c.expected}, ricevuto ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "numero"
													case "object":
														if (Array.isArray(a)) return "vettore"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Input non valido: atteso ${al(c.values[0])}`
											return `Opzione non valida: atteso uno tra ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Troppo grande: ${c.origin ?? "valore"} deve avere ${b}${c.maximum.toString()} ${d.unit ?? "elementi"}`
											return `Troppo grande: ${c.origin ?? "valore"} deve essere ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Troppo piccolo: ${c.origin} deve avere ${b}${c.minimum.toString()} ${d.unit}`
											return `Troppo piccolo: ${c.origin} deve essere ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Stringa non valida: deve iniziare con "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Stringa non valida: deve terminare con "${c.suffix}"`
											if ("includes" === c.format)
												return `Stringa non valida: deve includere "${c.includes}"`
											if ("regex" === c.format)
												return `Stringa non valida: deve corrispondere al pattern ${c.pattern}`
											return `Invalid ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Numero non valido: deve essere un multiplo di ${c.divisor}`
										case "unrecognized_keys":
											return `Chiav${c.keys.length > 1 ? "i" : "e"} non riconosciut${c.keys.length > 1 ? "e" : "a"}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Chiave non valida in ${c.origin}`
										case "invalid_union":
										default:
											return "Input non valido"
										case "invalid_element":
											return `Valore non valido in ${c.origin}`
									}
								}),
						}
					},
					"ja",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "文字", verb: "である" },
									file: { unit: "バイト", verb: "である" },
									array: { unit: "要素", verb: "である" },
									set: { unit: "要素", verb: "である" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `無効な入力: ${c.expected}が期待されましたが、${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "数値"
													case "object":
														if (Array.isArray(a)) return "配列"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}が入力されました`
										case "invalid_value":
											if (1 === c.values.length)
												return `無効な入力: ${al(c.values[0])}が期待されました`
											return `無効な選択: ${Q(c.values, "、")}のいずれかである必要があります`
										case "too_big": {
											let b = c.inclusive ? "以下である" : "より小さい",
												d = a[c.origin] ?? null
											if (d)
												return `大きすぎる値: ${c.origin ?? "値"}は${c.maximum.toString()}${d.unit ?? "要素"}${b}必要があります`
											return `大きすぎる値: ${c.origin ?? "値"}は${c.maximum.toString()}${b}必要があります`
										}
										case "too_small": {
											let b = c.inclusive ? "以上である" : "より大きい",
												d = a[c.origin] ?? null
											if (d)
												return `小さすぎる値: ${c.origin}は${c.minimum.toString()}${d.unit}${b}必要があります`
											return `小さすぎる値: ${c.origin}は${c.minimum.toString()}${b}必要があります`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `無効な文字列: "${c.prefix}"で始まる必要があります`
											if ("ends_with" === c.format)
												return `無効な文字列: "${c.suffix}"で終わる必要があります`
											if ("includes" === c.format)
												return `無効な文字列: "${c.includes}"を含む必要があります`
											if ("regex" === c.format)
												return `無効な文字列: パターン${c.pattern}に一致する必要があります`
											return `無効な${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `無効な数値: ${c.divisor}の倍数である必要があります`
										case "unrecognized_keys":
											return `認識されていないキー${c.keys.length > 1 ? "群" : ""}: ${Q(c.keys, "、")}`
										case "invalid_key":
											return `${c.origin}内の無効なキー`
										case "invalid_union":
											return "無効な入力"
										case "invalid_element":
											return `${c.origin}内の無効な値`
										default:
											return `無効な入力`
									}
								}),
						}
					},
					"kh",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "តួអក្សរ", verb: "គួរមាន" },
									file: { unit: "បៃ", verb: "គួរមាន" },
									array: { unit: "ធាតុ", verb: "គួរមាន" },
									set: { unit: "ធាតុ", verb: "គួរមាន" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${c.expected} ប៉ុន្តែទទួលបាន ${((
												a,
											) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "មិនមែនជាលេខ (NaN)" : "លេខ"
													case "object":
														if (Array.isArray(a)) return "អារេ (Array)"
														if (null === a) return "គ្មានតម្លៃ (null)"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${al(c.values[0])}`
											return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `ធំពេក៖ ត្រូវការ ${c.origin ?? "តម្លៃ"} ${b} ${c.maximum.toString()} ${d.unit ?? "ធាតុ"}`
											return `ធំពេក៖ ត្រូវការ ${c.origin ?? "តម្លៃ"} ${b} ${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `តូចពេក៖ ត្រូវការ ${c.origin} ${b} ${c.minimum.toString()} ${d.unit}`
											return `តូចពេក៖ ត្រូវការ ${c.origin} ${b} ${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${c.prefix}"`
											if ("ends_with" === c.format)
												return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${c.suffix}"`
											if ("includes" === c.format)
												return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${c.includes}"`
											if ("regex" === c.format)
												return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${c.pattern}`
											return `មិនត្រឹមត្រូវ៖ ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${c.divisor}`
										case "unrecognized_keys":
											return `រកឃើញសោមិនស្គាល់៖ ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `សោមិនត្រឹមត្រូវនៅក្នុង ${c.origin}`
										case "invalid_union":
										default:
											return `ទិន្នន័យមិនត្រឹមត្រូវ`
										case "invalid_element":
											return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${c.origin}`
									}
								}),
						}
					},
					"ko",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "문자", verb: "to have" },
									file: { unit: "바이트", verb: "to have" },
									array: { unit: "개", verb: "to have" },
									set: { unit: "개", verb: "to have" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `잘못된 입력: 예상 타입은 ${c.expected}, 받은 타입은 ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}입니다`
										case "invalid_value":
											if (1 === c.values.length)
												return `잘못된 입력: 값은 ${al(c.values[0])} 이어야 합니다`
											return `잘못된 옵션: ${Q(c.values, "또는 ")} 중 하나여야 합니다`
										case "too_big": {
											let b = c.inclusive ? "이하" : "미만",
												d = "미만" === b ? "이어야 합니다" : "여야 합니다",
												e = a[c.origin] ?? null,
												f = e?.unit ?? "요소"
											if (e)
												return `${c.origin ?? "값"}이 너무 큽니다: ${c.maximum.toString()}${f} ${b}${d}`
											return `${c.origin ?? "값"}이 너무 큽니다: ${c.maximum.toString()} ${b}${d}`
										}
										case "too_small": {
											let b = c.inclusive ? "이상" : "초과",
												d = "이상" === b ? "이어야 합니다" : "여야 합니다",
												e = a[c.origin] ?? null,
												f = e?.unit ?? "요소"
											if (e)
												return `${c.origin ?? "값"}이 너무 작습니다: ${c.minimum.toString()}${f} ${b}${d}`
											return `${c.origin ?? "값"}이 너무 작습니다: ${c.minimum.toString()} ${b}${d}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `잘못된 문자열: "${c.prefix}"(으)로 시작해야 합니다`
											if ("ends_with" === c.format)
												return `잘못된 문자열: "${c.suffix}"(으)로 끝나야 합니다`
											if ("includes" === c.format)
												return `잘못된 문자열: "${c.includes}"을(를) 포함해야 합니다`
											if ("regex" === c.format)
												return `잘못된 문자열: 정규식 ${c.pattern} 패턴과 일치해야 합니다`
											return `잘못된 ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `잘못된 숫자: ${c.divisor}의 배수여야 합니다`
										case "unrecognized_keys":
											return `인식할 수 없는 키: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `잘못된 키: ${c.origin}`
										case "invalid_union":
										default:
											return `잘못된 입력`
										case "invalid_element":
											return `잘못된 값: ${c.origin}`
									}
								}),
						}
					},
					"mk",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "знаци", verb: "да имаат" },
									file: { unit: "бајти", verb: "да имаат" },
									array: { unit: "ставки", verb: "да имаат" },
									set: { unit: "ставки", verb: "да имаат" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Грешен внес: се очекува ${c.expected}, примено ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "број"
													case "object":
														if (Array.isArray(a)) return "низа"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Invalid input: expected ${al(c.values[0])}`
											return `Грешана опција: се очекува една ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Премногу голем: се очекува ${c.origin ?? "вредноста"} да има ${b}${c.maximum.toString()} ${d.unit ?? "елементи"}`
											return `Премногу голем: се очекува ${c.origin ?? "вредноста"} да биде ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Премногу мал: се очекува ${c.origin} да има ${b}${c.minimum.toString()} ${d.unit}`
											return `Премногу мал: се очекува ${c.origin} да биде ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Неважечка низа: мора да започнува со "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Неважечка низа: мора да завршува со "${c.suffix}"`
											if ("includes" === c.format)
												return `Неважечка низа: мора да вклучува "${c.includes}"`
											if ("regex" === c.format)
												return `Неважечка низа: мора да одгоара на патернот ${c.pattern}`
											return `Invalid ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Грешен број: мора да биде делив со ${c.divisor}`
										case "unrecognized_keys":
											return `${c.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Грешен клуч во ${c.origin}`
										case "invalid_union":
											return "Грешен внес"
										case "invalid_element":
											return `Грешна вредност во ${c.origin}`
										default:
											return `Грешен внес`
									}
								}),
						}
					},
					"ms",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "aksara", verb: "mempunyai" },
									file: { unit: "bait", verb: "mempunyai" },
									array: { unit: "elemen", verb: "mempunyai" },
									set: { unit: "elemen", verb: "mempunyai" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Input tidak sah: dijangka ${c.expected}, diterima ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "nombor"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Input tidak sah: dijangka ${al(c.values[0])}`
											return `Pilihan tidak sah: dijangka salah satu daripada ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Terlalu besar: dijangka ${c.origin ?? "nilai"} ${d.verb} ${b}${c.maximum.toString()} ${d.unit ?? "elemen"}`
											return `Terlalu besar: dijangka ${c.origin ?? "nilai"} adalah ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Terlalu kecil: dijangka ${c.origin} ${d.verb} ${b}${c.minimum.toString()} ${d.unit}`
											return `Terlalu kecil: dijangka ${c.origin} adalah ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `String tidak sah: mesti bermula dengan "${c.prefix}"`
											if ("ends_with" === c.format)
												return `String tidak sah: mesti berakhir dengan "${c.suffix}"`
											if ("includes" === c.format)
												return `String tidak sah: mesti mengandungi "${c.includes}"`
											if ("regex" === c.format)
												return `String tidak sah: mesti sepadan dengan corak ${c.pattern}`
											return `${b[c.format] ?? c.format} tidak sah`
										case "not_multiple_of":
											return `Nombor tidak sah: perlu gandaan ${c.divisor}`
										case "unrecognized_keys":
											return `Kunci tidak dikenali: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Kunci tidak sah dalam ${c.origin}`
										case "invalid_union":
										default:
											return "Input tidak sah"
										case "invalid_element":
											return `Nilai tidak sah dalam ${c.origin}`
									}
								}),
						}
					},
					"nl",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "tekens" },
									file: { unit: "bytes" },
									array: { unit: "elementen" },
									set: { unit: "elementen" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Ongeldige invoer: verwacht ${c.expected}, ontving ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "getal"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Ongeldige invoer: verwacht ${al(c.values[0])}`
											return `Ongeldige optie: verwacht \xe9\xe9n van ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Te lang: verwacht dat ${c.origin ?? "waarde"} ${b}${c.maximum.toString()} ${d.unit ?? "elementen"} bevat`
											return `Te lang: verwacht dat ${c.origin ?? "waarde"} ${b}${c.maximum.toString()} is`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Te kort: verwacht dat ${c.origin} ${b}${c.minimum.toString()} ${d.unit} bevat`
											return `Te kort: verwacht dat ${c.origin} ${b}${c.minimum.toString()} is`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Ongeldige tekst: moet met "${c.prefix}" beginnen`
											if ("ends_with" === c.format)
												return `Ongeldige tekst: moet op "${c.suffix}" eindigen`
											if ("includes" === c.format)
												return `Ongeldige tekst: moet "${c.includes}" bevatten`
											if ("regex" === c.format)
												return `Ongeldige tekst: moet overeenkomen met patroon ${c.pattern}`
											return `Ongeldig: ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Ongeldig getal: moet een veelvoud van ${c.divisor} zijn`
										case "unrecognized_keys":
											return `Onbekende key${c.keys.length > 1 ? "s" : ""}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Ongeldige key in ${c.origin}`
										case "invalid_union":
										default:
											return "Ongeldige invoer"
										case "invalid_element":
											return `Ongeldige waarde in ${c.origin}`
									}
								}),
						}
					},
					"no",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "tegn", verb: "å ha" },
									file: { unit: "bytes", verb: "å ha" },
									array: { unit: "elementer", verb: "å inneholde" },
									set: { unit: "elementer", verb: "å inneholde" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Ugyldig input: forventet ${c.expected}, fikk ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "tall"
													case "object":
														if (Array.isArray(a)) return "liste"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Ugyldig verdi: forventet ${al(c.values[0])}`
											return `Ugyldig valg: forventet en av ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `For stor(t): forventet ${c.origin ?? "value"} til \xe5 ha ${b}${c.maximum.toString()} ${d.unit ?? "elementer"}`
											return `For stor(t): forventet ${c.origin ?? "value"} til \xe5 ha ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `For lite(n): forventet ${c.origin} til \xe5 ha ${b}${c.minimum.toString()} ${d.unit}`
											return `For lite(n): forventet ${c.origin} til \xe5 ha ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Ugyldig streng: m\xe5 starte med "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Ugyldig streng: m\xe5 ende med "${c.suffix}"`
											if ("includes" === c.format)
												return `Ugyldig streng: m\xe5 inneholde "${c.includes}"`
											if ("regex" === c.format)
												return `Ugyldig streng: m\xe5 matche m\xf8nsteret ${c.pattern}`
											return `Ugyldig ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Ugyldig tall: m\xe5 v\xe6re et multiplum av ${c.divisor}`
										case "unrecognized_keys":
											return `${c.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Ugyldig n\xf8kkel i ${c.origin}`
										case "invalid_union":
										default:
											return "Ugyldig input"
										case "invalid_element":
											return `Ugyldig verdi i ${c.origin}`
									}
								}),
						}
					},
					"ota",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "harf", verb: "olmalıdır" },
									file: { unit: "bayt", verb: "olmalıdır" },
									array: { unit: "unsur", verb: "olmalıdır" },
									set: { unit: "unsur", verb: "olmalıdır" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `F\xe2sit giren: umulan ${c.expected}, alınan ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "numara"
													case "object":
														if (Array.isArray(a)) return "saf"
														if (null === a) return "gayb"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `F\xe2sit giren: umulan ${al(c.values[0])}`
											return `F\xe2sit tercih: m\xfbteberler ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Fazla b\xfcy\xfck: ${c.origin ?? "value"}, ${b}${c.maximum.toString()} ${d.unit ?? "elements"} sahip olmalıydı.`
											return `Fazla b\xfcy\xfck: ${c.origin ?? "value"}, ${b}${c.maximum.toString()} olmalıydı.`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Fazla k\xfc\xe7\xfck: ${c.origin}, ${b}${c.minimum.toString()} ${d.unit} sahip olmalıydı.`
											return `Fazla k\xfc\xe7\xfck: ${c.origin}, ${b}${c.minimum.toString()} olmalıydı.`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `F\xe2sit metin: "${c.prefix}" ile başlamalı.`
											if ("ends_with" === c.format)
												return `F\xe2sit metin: "${c.suffix}" ile bitmeli.`
											if ("includes" === c.format)
												return `F\xe2sit metin: "${c.includes}" ihtiv\xe2 etmeli.`
											if ("regex" === c.format)
												return `F\xe2sit metin: ${c.pattern} nakşına uymalı.`
											return `F\xe2sit ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `F\xe2sit sayı: ${c.divisor} katı olmalıydı.`
										case "unrecognized_keys":
											return `Tanınmayan anahtar ${c.keys.length > 1 ? "s" : ""}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `${c.origin} i\xe7in tanınmayan anahtar var.`
										case "invalid_union":
											return "Giren tanınamadı."
										case "invalid_element":
											return `${c.origin} i\xe7in tanınmayan kıymet var.`
										default:
											return `Kıymet tanınamadı.`
									}
								}),
						}
					},
					"pl",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "znaków", verb: "mieć" },
									file: { unit: "bajtów", verb: "mieć" },
									array: { unit: "elementów", verb: "mieć" },
									set: { unit: "elementów", verb: "mieć" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Nieprawidłowe dane wejściowe: oczekiwano ${c.expected}, otrzymano ${((
												a,
											) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "liczba"
													case "object":
														if (Array.isArray(a)) return "tablica"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Nieprawidłowe dane wejściowe: oczekiwano ${al(c.values[0])}`
											return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Za duża wartość: oczekiwano, że ${c.origin ?? "wartość"} będzie mieć ${b}${c.maximum.toString()} ${d.unit ?? "elementów"}`
											return `Zbyt duż(y/a/e): oczekiwano, że ${c.origin ?? "wartość"} będzie wynosić ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Za mała wartość: oczekiwano, że ${c.origin ?? "wartość"} będzie mieć ${b}${c.minimum.toString()} ${d.unit ?? "elementów"}`
											return `Zbyt mał(y/a/e): oczekiwano, że ${c.origin ?? "wartość"} będzie wynosić ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Nieprawidłowy ciąg znak\xf3w: musi zaczynać się od "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Nieprawidłowy ciąg znak\xf3w: musi kończyć się na "${c.suffix}"`
											if ("includes" === c.format)
												return `Nieprawidłowy ciąg znak\xf3w: musi zawierać "${c.includes}"`
											if ("regex" === c.format)
												return `Nieprawidłowy ciąg znak\xf3w: musi odpowiadać wzorcowi ${c.pattern}`
											return `Nieprawidłow(y/a/e) ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Nieprawidłowa liczba: musi być wielokrotnością ${c.divisor}`
										case "unrecognized_keys":
											return `Nierozpoznane klucze${c.keys.length > 1 ? "s" : ""}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Nieprawidłowy klucz w ${c.origin}`
										case "invalid_union":
											return "Nieprawidłowe dane wejściowe"
										case "invalid_element":
											return `Nieprawidłowa wartość w ${c.origin}`
										default:
											return `Nieprawidłowe dane wejściowe`
									}
								}),
						}
					},
					"ps",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "توکي", verb: "ولري" },
									file: { unit: "بایټس", verb: "ولري" },
									array: { unit: "توکي", verb: "ولري" },
									set: { unit: "توکي", verb: "ولري" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `ناسم ورودي: باید ${c.expected} وای, مګر ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "عدد"
													case "object":
														if (Array.isArray(a)) return "ارې"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)} ترلاسه شو`
										case "invalid_value":
											if (1 === c.values.length) return `ناسم ورودي: باید ${al(c.values[0])} وای`
											return `ناسم انتخاب: باید یو له ${Q(c.values, "|")} څخه وای`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `ډیر لوی: ${c.origin ?? "ارزښت"} باید ${b}${c.maximum.toString()} ${d.unit ?? "عنصرونه"} ولري`
											return `ډیر لوی: ${c.origin ?? "ارزښت"} باید ${b}${c.maximum.toString()} وي`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `ډیر کوچنی: ${c.origin} باید ${b}${c.minimum.toString()} ${d.unit} ولري`
											return `ډیر کوچنی: ${c.origin} باید ${b}${c.minimum.toString()} وي`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `ناسم متن: باید د "${c.prefix}" سره پیل شي`
											if ("ends_with" === c.format)
												return `ناسم متن: باید د "${c.suffix}" سره پای ته ورسيږي`
											if ("includes" === c.format) return `ناسم متن: باید "${c.includes}" ولري`
											if ("regex" === c.format)
												return `ناسم متن: باید د ${c.pattern} سره مطابقت ولري`
											return `${b[c.format] ?? c.format} ناسم دی`
										case "not_multiple_of":
											return `ناسم عدد: باید د ${c.divisor} مضرب وي`
										case "unrecognized_keys":
											return `ناسم ${c.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `ناسم کلیډ په ${c.origin} کې`
										case "invalid_union":
										default:
											return `ناسمه ورودي`
										case "invalid_element":
											return `ناسم عنصر په ${c.origin} کې`
									}
								}),
						}
					},
					"pt",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "caracteres", verb: "ter" },
									file: { unit: "bytes", verb: "ter" },
									array: { unit: "itens", verb: "ter" },
									set: { unit: "itens", verb: "ter" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Tipo inv\xe1lido: esperado ${c.expected}, recebido ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "número"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "nulo"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Entrada inv\xe1lida: esperado ${al(c.values[0])}`
											return `Op\xe7\xe3o inv\xe1lida: esperada uma das ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Muito grande: esperado que ${c.origin ?? "valor"} tivesse ${b}${c.maximum.toString()} ${d.unit ?? "elementos"}`
											return `Muito grande: esperado que ${c.origin ?? "valor"} fosse ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Muito pequeno: esperado que ${c.origin} tivesse ${b}${c.minimum.toString()} ${d.unit}`
											return `Muito pequeno: esperado que ${c.origin} fosse ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Texto inv\xe1lido: deve come\xe7ar com "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Texto inv\xe1lido: deve terminar com "${c.suffix}"`
											if ("includes" === c.format)
												return `Texto inv\xe1lido: deve incluir "${c.includes}"`
											if ("regex" === c.format)
												return `Texto inv\xe1lido: deve corresponder ao padr\xe3o ${c.pattern}`
											return `${b[c.format] ?? c.format} inv\xe1lido`
										case "not_multiple_of":
											return `N\xfamero inv\xe1lido: deve ser m\xfaltiplo de ${c.divisor}`
										case "unrecognized_keys":
											return `Chave${c.keys.length > 1 ? "s" : ""} desconhecida${c.keys.length > 1 ? "s" : ""}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Chave inv\xe1lida em ${c.origin}`
										case "invalid_union":
											return "Entrada inválida"
										case "invalid_element":
											return `Valor inv\xe1lido em ${c.origin}`
										default:
											return `Campo inv\xe1lido`
									}
								}),
						}
					},
					"ru",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
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
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Неверный ввод: ожидалось ${c.expected}, получено ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "число"
													case "object":
														if (Array.isArray(a)) return "массив"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Неверный ввод: ожидалось ${al(c.values[0])}`
											return `Неверный вариант: ожидалось одно из ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d) {
												let a = de(Number(c.maximum), d.unit.one, d.unit.few, d.unit.many)
												return `Слишком большое значение: ожидалось, что ${c.origin ?? "значение"} будет иметь ${b}${c.maximum.toString()} ${a}`
											}
											return `Слишком большое значение: ожидалось, что ${c.origin ?? "значение"} будет ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d) {
												let a = de(Number(c.minimum), d.unit.one, d.unit.few, d.unit.many)
												return `Слишком маленькое значение: ожидалось, что ${c.origin} будет иметь ${b}${c.minimum.toString()} ${a}`
											}
											return `Слишком маленькое значение: ожидалось, что ${c.origin} будет ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Неверная строка: должна начинаться с "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Неверная строка: должна заканчиваться на "${c.suffix}"`
											if ("includes" === c.format)
												return `Неверная строка: должна содержать "${c.includes}"`
											if ("regex" === c.format)
												return `Неверная строка: должна соответствовать шаблону ${c.pattern}`
											return `Неверный ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Неверное число: должно быть кратным ${c.divisor}`
										case "unrecognized_keys":
											return `Нераспознанн${c.keys.length > 1 ? "ые" : "ый"} ключ${c.keys.length > 1 ? "и" : ""}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Неверный ключ в ${c.origin}`
										case "invalid_union":
											return "Неверные входные данные"
										case "invalid_element":
											return `Неверное значение в ${c.origin}`
										default:
											return `Неверные входные данные`
									}
								}),
						}
					},
					"sl",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "znakov", verb: "imeti" },
									file: { unit: "bajtov", verb: "imeti" },
									array: { unit: "elementov", verb: "imeti" },
									set: { unit: "elementov", verb: "imeti" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Neveljaven vnos: pričakovano ${c.expected}, prejeto ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "število"
													case "object":
														if (Array.isArray(a)) return "tabela"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Neveljaven vnos: pričakovano ${al(c.values[0])}`
											return `Neveljavna možnost: pričakovano eno izmed ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Preveliko: pričakovano, da bo ${c.origin ?? "vrednost"} imelo ${b}${c.maximum.toString()} ${d.unit ?? "elementov"}`
											return `Preveliko: pričakovano, da bo ${c.origin ?? "vrednost"} ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Premajhno: pričakovano, da bo ${c.origin} imelo ${b}${c.minimum.toString()} ${d.unit}`
											return `Premajhno: pričakovano, da bo ${c.origin} ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Neveljaven niz: mora se začeti z "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Neveljaven niz: mora se končati z "${c.suffix}"`
											if ("includes" === c.format)
												return `Neveljaven niz: mora vsebovati "${c.includes}"`
											if ("regex" === c.format)
												return `Neveljaven niz: mora ustrezati vzorcu ${c.pattern}`
											return `Neveljaven ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Neveljavno število: mora biti večkratnik ${c.divisor}`
										case "unrecognized_keys":
											return `Neprepoznan${c.keys.length > 1 ? "i ključi" : " ključ"}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Neveljaven ključ v ${c.origin}`
										case "invalid_union":
										default:
											return "Neveljaven vnos"
										case "invalid_element":
											return `Neveljavna vrednost v ${c.origin}`
									}
								}),
						}
					},
					"sv",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "tecken", verb: "att ha" },
									file: { unit: "bytes", verb: "att ha" },
									array: { unit: "objekt", verb: "att innehålla" },
									set: { unit: "objekt", verb: "att innehålla" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Ogiltig inmatning: f\xf6rv\xe4ntat ${c.expected}, fick ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "antal"
													case "object":
														if (Array.isArray(a)) return "lista"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Ogiltig inmatning: f\xf6rv\xe4ntat ${al(c.values[0])}`
											return `Ogiltigt val: f\xf6rv\xe4ntade en av ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `F\xf6r stor(t): f\xf6rv\xe4ntade ${c.origin ?? "värdet"} att ha ${b}${c.maximum.toString()} ${d.unit ?? "element"}`
											return `F\xf6r stor(t): f\xf6rv\xe4ntat ${c.origin ?? "värdet"} att ha ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `F\xf6r lite(t): f\xf6rv\xe4ntade ${c.origin ?? "värdet"} att ha ${b}${c.minimum.toString()} ${d.unit}`
											return `F\xf6r lite(t): f\xf6rv\xe4ntade ${c.origin ?? "värdet"} att ha ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Ogiltig str\xe4ng: m\xe5ste b\xf6rja med "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Ogiltig str\xe4ng: m\xe5ste sluta med "${c.suffix}"`
											if ("includes" === c.format)
												return `Ogiltig str\xe4ng: m\xe5ste inneh\xe5lla "${c.includes}"`
											if ("regex" === c.format)
												return `Ogiltig str\xe4ng: m\xe5ste matcha m\xf6nstret "${c.pattern}"`
											return `Ogiltig(t) ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Ogiltigt tal: m\xe5ste vara en multipel av ${c.divisor}`
										case "unrecognized_keys":
											return `${c.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Ogiltig nyckel i ${c.origin ?? "värdet"}`
										case "invalid_union":
										default:
											return "Ogiltig input"
										case "invalid_element":
											return `Ogiltigt v\xe4rde i ${c.origin ?? "värdet"}`
									}
								}),
						}
					},
					"ta",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
									file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
									array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
									set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${c.expected}, பெறப்பட்டது ${((
												a,
											) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "எண் அல்லாதது" : "எண்"
													case "object":
														if (Array.isArray(a)) return "அணி"
														if (null === a) return "வெறுமை"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${al(c.values[0])}`
											return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${Q(c.values, "|")} இல் ஒன்று`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${c.origin ?? "மதிப்பு"} ${b}${c.maximum.toString()} ${d.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்`
											return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${c.origin ?? "மதிப்பு"} ${b}${c.maximum.toString()} ஆக இருக்க வேண்டும்`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${c.origin} ${b}${c.minimum.toString()} ${d.unit} ஆக இருக்க வேண்டும்`
											return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${c.origin} ${b}${c.minimum.toString()} ஆக இருக்க வேண்டும்`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `தவறான சரம்: "${c.prefix}" இல் தொடங்க வேண்டும்`
											if ("ends_with" === c.format)
												return `தவறான சரம்: "${c.suffix}" இல் முடிவடைய வேண்டும்`
											if ("includes" === c.format)
												return `தவறான சரம்: "${c.includes}" ஐ உள்ளடக்க வேண்டும்`
											if ("regex" === c.format)
												return `தவறான சரம்: ${c.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`
											return `தவறான ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `தவறான எண்: ${c.divisor} இன் பலமாக இருக்க வேண்டும்`
										case "unrecognized_keys":
											return `அடையாளம் தெரியாத விசை${c.keys.length > 1 ? "கள்" : ""}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `${c.origin} இல் தவறான விசை`
										case "invalid_union":
											return "தவறான உள்ளீடு"
										case "invalid_element":
											return `${c.origin} இல் தவறான மதிப்பு`
										default:
											return `தவறான உள்ளீடு`
									}
								}),
						}
					},
					"th",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "ตัวอักษร", verb: "ควรมี" },
									file: { unit: "ไบต์", verb: "ควรมี" },
									array: { unit: "รายการ", verb: "ควรมี" },
									set: { unit: "รายการ", verb: "ควรมี" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${c.expected} แต่ได้รับ ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "ไม่ใช่ตัวเลข (NaN)" : "ตัวเลข"
													case "object":
														if (Array.isArray(a)) return "อาร์เรย์ (Array)"
														if (null === a) return "ไม่มีค่า (null)"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `ค่าไม่ถูกต้อง: ควรเป็น ${al(c.values[0])}`
											return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "ไม่เกิน" : "น้อยกว่า",
												d = a[c.origin] ?? null
											if (d)
												return `เกินกำหนด: ${c.origin ?? "ค่า"} ควรมี${b} ${c.maximum.toString()} ${d.unit ?? "รายการ"}`
											return `เกินกำหนด: ${c.origin ?? "ค่า"} ควรมี${b} ${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? "อย่างน้อย" : "มากกว่า",
												d = a[c.origin] ?? null
											if (d)
												return `น้อยกว่ากำหนด: ${c.origin} ควรมี${b} ${c.minimum.toString()} ${d.unit}`
											return `น้อยกว่ากำหนด: ${c.origin} ควรมี${b} ${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${c.prefix}"`
											if ("ends_with" === c.format)
												return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${c.suffix}"`
											if ("includes" === c.format)
												return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${c.includes}" อยู่ในข้อความ`
											if ("regex" === c.format)
												return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${c.pattern}`
											return `รูปแบบไม่ถูกต้อง: ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${c.divisor} ได้ลงตัว`
										case "unrecognized_keys":
											return `พบคีย์ที่ไม่รู้จัก: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `คีย์ไม่ถูกต้องใน ${c.origin}`
										case "invalid_union":
											return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้"
										case "invalid_element":
											return `ข้อมูลไม่ถูกต้องใน ${c.origin}`
										default:
											return `ข้อมูลไม่ถูกต้อง`
									}
								}),
						}
					},
					"tr",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "karakter", verb: "olmalı" },
									file: { unit: "bayt", verb: "olmalı" },
									array: { unit: "öğe", verb: "olmalı" },
									set: { unit: "öğe", verb: "olmalı" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Ge\xe7ersiz değer: beklenen ${c.expected}, alınan ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Ge\xe7ersiz değer: beklenen ${al(c.values[0])}`
											return `Ge\xe7ersiz se\xe7enek: aşağıdakilerden biri olmalı: ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `\xc7ok b\xfcy\xfck: beklenen ${c.origin ?? "değer"} ${b}${c.maximum.toString()} ${d.unit ?? "öğe"}`
											return `\xc7ok b\xfcy\xfck: beklenen ${c.origin ?? "değer"} ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `\xc7ok k\xfc\xe7\xfck: beklenen ${c.origin} ${b}${c.minimum.toString()} ${d.unit}`
											return `\xc7ok k\xfc\xe7\xfck: beklenen ${c.origin} ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Ge\xe7ersiz metin: "${c.prefix}" ile başlamalı`
											if ("ends_with" === c.format)
												return `Ge\xe7ersiz metin: "${c.suffix}" ile bitmeli`
											if ("includes" === c.format)
												return `Ge\xe7ersiz metin: "${c.includes}" i\xe7ermeli`
											if ("regex" === c.format)
												return `Ge\xe7ersiz metin: ${c.pattern} desenine uymalı`
											return `Ge\xe7ersiz ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Ge\xe7ersiz sayı: ${c.divisor} ile tam b\xf6l\xfcnebilmeli`
										case "unrecognized_keys":
											return `Tanınmayan anahtar${c.keys.length > 1 ? "lar" : ""}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `${c.origin} i\xe7inde ge\xe7ersiz anahtar`
										case "invalid_union":
											return "Geçersiz değer"
										case "invalid_element":
											return `${c.origin} i\xe7inde ge\xe7ersiz değer`
										default:
											return `Ge\xe7ersiz değer`
									}
								}),
						}
					},
					"ua",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "символів", verb: "матиме" },
									file: { unit: "байтів", verb: "матиме" },
									array: { unit: "елементів", verb: "матиме" },
									set: { unit: "елементів", verb: "матиме" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Неправильні вхідні дані: очікується ${c.expected}, отримано ${((
												a,
											) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "число"
													case "object":
														if (Array.isArray(a)) return "масив"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Неправильні вхідні дані: очікується ${al(c.values[0])}`
											return `Неправильна опція: очікується одне з ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Занадто велике: очікується, що ${c.origin ?? "значення"} ${d.verb} ${b}${c.maximum.toString()} ${d.unit ?? "елементів"}`
											return `Занадто велике: очікується, що ${c.origin ?? "значення"} буде ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Занадто мале: очікується, що ${c.origin} ${d.verb} ${b}${c.minimum.toString()} ${d.unit}`
											return `Занадто мале: очікується, що ${c.origin} буде ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Неправильний рядок: повинен починатися з "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Неправильний рядок: повинен закінчуватися на "${c.suffix}"`
											if ("includes" === c.format)
												return `Неправильний рядок: повинен містити "${c.includes}"`
											if ("regex" === c.format)
												return `Неправильний рядок: повинен відповідати шаблону ${c.pattern}`
											return `Неправильний ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Неправильне число: повинно бути кратним ${c.divisor}`
										case "unrecognized_keys":
											return `Нерозпізнаний ключ${c.keys.length > 1 ? "і" : ""}: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Неправильний ключ у ${c.origin}`
										case "invalid_union":
											return "Неправильні вхідні дані"
										case "invalid_element":
											return `Неправильне значення у ${c.origin}`
										default:
											return `Неправильні вхідні дані`
									}
								}),
						}
					},
					"ur",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "حروف", verb: "ہونا" },
									file: { unit: "بائٹس", verb: "ہونا" },
									array: { unit: "آئٹمز", verb: "ہونا" },
									set: { unit: "آئٹمز", verb: "ہونا" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `غلط ان پٹ: ${c.expected} متوقع تھا، ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "نمبر"
													case "object":
														if (Array.isArray(a)) return "آرے"
														if (null === a) return "نل"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)} موصول ہوا`
										case "invalid_value":
											if (1 === c.values.length) return `غلط ان پٹ: ${al(c.values[0])} متوقع تھا`
											return `غلط آپشن: ${Q(c.values, "|")} میں سے ایک متوقع تھا`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `بہت بڑا: ${c.origin ?? "ویلیو"} کے ${b}${c.maximum.toString()} ${d.unit ?? "عناصر"} ہونے متوقع تھے`
											return `بہت بڑا: ${c.origin ?? "ویلیو"} کا ${b}${c.maximum.toString()} ہونا متوقع تھا`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `بہت چھوٹا: ${c.origin} کے ${b}${c.minimum.toString()} ${d.unit} ہونے متوقع تھے`
											return `بہت چھوٹا: ${c.origin} کا ${b}${c.minimum.toString()} ہونا متوقع تھا`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `غلط سٹرنگ: "${c.prefix}" سے شروع ہونا چاہیے`
											if ("ends_with" === c.format)
												return `غلط سٹرنگ: "${c.suffix}" پر ختم ہونا چاہیے`
											if ("includes" === c.format)
												return `غلط سٹرنگ: "${c.includes}" شامل ہونا چاہیے`
											if ("regex" === c.format)
												return `غلط سٹرنگ: پیٹرن ${c.pattern} سے میچ ہونا چاہیے`
											return `غلط ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `غلط نمبر: ${c.divisor} کا مضاعف ہونا چاہیے`
										case "unrecognized_keys":
											return `غیر تسلیم شدہ کی${c.keys.length > 1 ? "ز" : ""}: ${Q(c.keys, "، ")}`
										case "invalid_key":
											return `${c.origin} میں غلط کی`
										case "invalid_union":
											return "غلط ان پٹ"
										case "invalid_element":
											return `${c.origin} میں غلط ویلیو`
										default:
											return `غلط ان پٹ`
									}
								}),
						}
					},
					"vi",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "ký tự", verb: "có" },
									file: { unit: "byte", verb: "có" },
									array: { unit: "phần tử", verb: "có" },
									set: { unit: "phần tử", verb: "có" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${c.expected}, nhận được ${((
												a,
											) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "số"
													case "object":
														if (Array.isArray(a)) return "mảng"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${al(c.values[0])}`
											return `T\xf9y chọn kh\xf4ng hợp lệ: mong đợi một trong c\xe1c gi\xe1 trị ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Qu\xe1 lớn: mong đợi ${c.origin ?? "giá trị"} ${d.verb} ${b}${c.maximum.toString()} ${d.unit ?? "phần tử"}`
											return `Qu\xe1 lớn: mong đợi ${c.origin ?? "giá trị"} ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Qu\xe1 nhỏ: mong đợi ${c.origin} ${d.verb} ${b}${c.minimum.toString()} ${d.unit}`
											return `Qu\xe1 nhỏ: mong đợi ${c.origin} ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Chuỗi kh\xf4ng hợp lệ: phải bắt đầu bằng "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Chuỗi kh\xf4ng hợp lệ: phải kết th\xfac bằng "${c.suffix}"`
											if ("includes" === c.format)
												return `Chuỗi kh\xf4ng hợp lệ: phải bao gồm "${c.includes}"`
											if ("regex" === c.format)
												return `Chuỗi kh\xf4ng hợp lệ: phải khớp với mẫu ${c.pattern}`
											return `${b[c.format] ?? c.format} kh\xf4ng hợp lệ`
										case "not_multiple_of":
											return `Số kh\xf4ng hợp lệ: phải l\xe0 bội số của ${c.divisor}`
										case "unrecognized_keys":
											return `Kh\xf3a kh\xf4ng được nhận dạng: ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `Kh\xf3a kh\xf4ng hợp lệ trong ${c.origin}`
										case "invalid_union":
											return "Đầu vào không hợp lệ"
										case "invalid_element":
											return `Gi\xe1 trị kh\xf4ng hợp lệ trong ${c.origin}`
										default:
											return `Đầu v\xe0o kh\xf4ng hợp lệ`
									}
								}),
						}
					},
					"zhCN",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "字符", verb: "包含" },
									file: { unit: "字节", verb: "包含" },
									array: { unit: "项", verb: "包含" },
									set: { unit: "项", verb: "包含" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `无效输入：期望 ${c.expected}，实际接收 ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "非数字(NaN)" : "数字"
													case "object":
														if (Array.isArray(a)) return "数组"
														if (null === a) return "空值(null)"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length) return `无效输入：期望 ${al(c.values[0])}`
											return `无效选项：期望以下之一 ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `数值过大：期望 ${c.origin ?? "值"} ${b}${c.maximum.toString()} ${d.unit ?? "个元素"}`
											return `数值过大：期望 ${c.origin ?? "值"} ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `数值过小：期望 ${c.origin} ${b}${c.minimum.toString()} ${d.unit}`
											return `数值过小：期望 ${c.origin} ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `无效字符串：必须以 "${c.prefix}" 开头`
											if ("ends_with" === c.format) return `无效字符串：必须以 "${c.suffix}" 结尾`
											if ("includes" === c.format) return `无效字符串：必须包含 "${c.includes}"`
											if ("regex" === c.format)
												return `无效字符串：必须满足正则表达式 ${c.pattern}`
											return `无效${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `无效数字：必须是 ${c.divisor} 的倍数`
										case "unrecognized_keys":
											return `出现未知的键(key): ${Q(c.keys, ", ")}`
										case "invalid_key":
											return `${c.origin} 中的键(key)无效`
										case "invalid_union":
											return "无效输入"
										case "invalid_element":
											return `${c.origin} 中包含无效值(value)`
										default:
											return `无效输入`
									}
								}),
						}
					},
					"zhTW",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "字元", verb: "擁有" },
									file: { unit: "位元組", verb: "擁有" },
									array: { unit: "項目", verb: "擁有" },
									set: { unit: "項目", verb: "擁有" },
								}),
								(b = {
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
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `無效的輸入值：預期為 ${c.expected}，但收到 ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length) return `無效的輸入值：預期為 ${al(c.values[0])}`
											return `無效的選項：預期為以下其中之一 ${Q(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `數值過大：預期 ${c.origin ?? "值"} 應為 ${b}${c.maximum.toString()} ${d.unit ?? "個元素"}`
											return `數值過大：預期 ${c.origin ?? "值"} 應為 ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `數值過小：預期 ${c.origin} 應為 ${b}${c.minimum.toString()} ${d.unit}`
											return `數值過小：預期 ${c.origin} 應為 ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `無效的字串：必須以 "${c.prefix}" 開頭`
											if ("ends_with" === c.format) return `無效的字串：必須以 "${c.suffix}" 結尾`
											if ("includes" === c.format) return `無效的字串：必須包含 "${c.includes}"`
											if ("regex" === c.format) return `無效的字串：必須符合格式 ${c.pattern}`
											return `無效的 ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `無效的數字：必須為 ${c.divisor} 的倍數`
										case "unrecognized_keys":
											return `無法識別的鍵值${c.keys.length > 1 ? "們" : ""}：${Q(c.keys, "、")}`
										case "invalid_key":
											return `${c.origin} 中有無效的鍵值`
										case "invalid_union":
											return "無效的輸入值"
										case "invalid_element":
											return `${c.origin} 中有無效的值`
										default:
											return `無效的輸入值`
									}
								}),
						}
					},
				],
				18318,
			)
		var df = a.i(18318)
		let dg = Symbol("ZodOutput"),
			dh = Symbol("ZodInput")
		class di {
			constructor() {
				;(this._map = new Map()), (this._idmap = new Map())
			}
			add(a, ...b) {
				let c = b[0]
				if ((this._map.set(a, c), c && "object" == typeof c && "id" in c)) {
					if (this._idmap.has(c.id)) throw Error(`ID ${c.id} already exists in the registry`)
					this._idmap.set(c.id, a)
				}
				return this
			}
			clear() {
				return (this._map = new Map()), (this._idmap = new Map()), this
			}
			remove(a) {
				let b = this._map.get(a)
				return b && "object" == typeof b && "id" in b && this._idmap.delete(b.id), this._map.delete(a), this
			}
			get(a) {
				let b = a._zod.parent
				if (b) {
					let c = { ...(this.get(b) ?? {}) }
					return delete c.id, { ...c, ...this._map.get(a) }
				}
				return this._map.get(a)
			}
			has(a) {
				return this._map.has(a)
			}
		}
		function dj() {
			return new di()
		}
		let dk = dj()
		function dl(a, b) {
			return new a({ type: "string", ...aj(b) })
		}
		function dm(a, b) {
			return new a({ type: "string", coerce: !0, ...aj(b) })
		}
		function dn(a, b) {
			return new a({ type: "string", format: "email", check: "string_format", abort: !1, ...aj(b) })
		}
		function dp(a, b) {
			return new a({ type: "string", format: "guid", check: "string_format", abort: !1, ...aj(b) })
		}
		function dq(a, b) {
			return new a({ type: "string", format: "uuid", check: "string_format", abort: !1, ...aj(b) })
		}
		function dr(a, b) {
			return new a({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v4", ...aj(b) })
		}
		function ds(a, b) {
			return new a({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v6", ...aj(b) })
		}
		function dt(a, b) {
			return new a({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v7", ...aj(b) })
		}
		function du(a, b) {
			return new a({ type: "string", format: "url", check: "string_format", abort: !1, ...aj(b) })
		}
		function dv(a, b) {
			return new a({ type: "string", format: "emoji", check: "string_format", abort: !1, ...aj(b) })
		}
		function dw(a, b) {
			return new a({ type: "string", format: "nanoid", check: "string_format", abort: !1, ...aj(b) })
		}
		function dx(a, b) {
			return new a({ type: "string", format: "cuid", check: "string_format", abort: !1, ...aj(b) })
		}
		function dy(a, b) {
			return new a({ type: "string", format: "cuid2", check: "string_format", abort: !1, ...aj(b) })
		}
		function dz(a, b) {
			return new a({ type: "string", format: "ulid", check: "string_format", abort: !1, ...aj(b) })
		}
		function dA(a, b) {
			return new a({ type: "string", format: "xid", check: "string_format", abort: !1, ...aj(b) })
		}
		function dB(a, b) {
			return new a({ type: "string", format: "ksuid", check: "string_format", abort: !1, ...aj(b) })
		}
		function dC(a, b) {
			return new a({ type: "string", format: "ipv4", check: "string_format", abort: !1, ...aj(b) })
		}
		function dD(a, b) {
			return new a({ type: "string", format: "ipv6", check: "string_format", abort: !1, ...aj(b) })
		}
		function dE(a, b) {
			return new a({ type: "string", format: "cidrv4", check: "string_format", abort: !1, ...aj(b) })
		}
		function dF(a, b) {
			return new a({ type: "string", format: "cidrv6", check: "string_format", abort: !1, ...aj(b) })
		}
		function dG(a, b) {
			return new a({ type: "string", format: "base64", check: "string_format", abort: !1, ...aj(b) })
		}
		function dH(a, b) {
			return new a({ type: "string", format: "base64url", check: "string_format", abort: !1, ...aj(b) })
		}
		function dI(a, b) {
			return new a({ type: "string", format: "e164", check: "string_format", abort: !1, ...aj(b) })
		}
		function dJ(a, b) {
			return new a({ type: "string", format: "jwt", check: "string_format", abort: !1, ...aj(b) })
		}
		a.s(
			[
				"$ZodRegistry",
				() => di,
				"$input",
				0,
				dh,
				"$output",
				0,
				dg,
				"globalRegistry",
				0,
				dk,
				"registry",
				() => dj,
			],
			28848,
		),
			a.i(28848),
			a.i(57483)
		let dK = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 }
		function dL(a, b) {
			return new a({
				type: "string",
				format: "datetime",
				check: "string_format",
				offset: !1,
				local: !1,
				precision: null,
				...aj(b),
			})
		}
		function dM(a, b) {
			return new a({ type: "string", format: "date", check: "string_format", ...aj(b) })
		}
		function dN(a, b) {
			return new a({ type: "string", format: "time", check: "string_format", precision: null, ...aj(b) })
		}
		function dO(a, b) {
			return new a({ type: "string", format: "duration", check: "string_format", ...aj(b) })
		}
		function dP(a, b) {
			return new a({ type: "number", checks: [], ...aj(b) })
		}
		function dQ(a, b) {
			return new a({ type: "number", coerce: !0, checks: [], ...aj(b) })
		}
		function dR(a, b) {
			return new a({ type: "number", check: "number_format", abort: !1, format: "safeint", ...aj(b) })
		}
		function dS(a, b) {
			return new a({ type: "number", check: "number_format", abort: !1, format: "float32", ...aj(b) })
		}
		function dT(a, b) {
			return new a({ type: "number", check: "number_format", abort: !1, format: "float64", ...aj(b) })
		}
		function dU(a, b) {
			return new a({ type: "number", check: "number_format", abort: !1, format: "int32", ...aj(b) })
		}
		function dV(a, b) {
			return new a({ type: "number", check: "number_format", abort: !1, format: "uint32", ...aj(b) })
		}
		function dW(a, b) {
			return new a({ type: "boolean", ...aj(b) })
		}
		function dX(a, b) {
			return new a({ type: "boolean", coerce: !0, ...aj(b) })
		}
		function dY(a, b) {
			return new a({ type: "bigint", ...aj(b) })
		}
		function dZ(a, b) {
			return new a({ type: "bigint", coerce: !0, ...aj(b) })
		}
		function d$(a, b) {
			return new a({ type: "bigint", check: "bigint_format", abort: !1, format: "int64", ...aj(b) })
		}
		function d_(a, b) {
			return new a({ type: "bigint", check: "bigint_format", abort: !1, format: "uint64", ...aj(b) })
		}
		function d0(a, b) {
			return new a({ type: "symbol", ...aj(b) })
		}
		function d1(a, b) {
			return new a({ type: "undefined", ...aj(b) })
		}
		function d2(a, b) {
			return new a({ type: "null", ...aj(b) })
		}
		function d3(a) {
			return new a({ type: "any" })
		}
		function d4(a) {
			return new a({ type: "unknown" })
		}
		function d5(a, b) {
			return new a({ type: "never", ...aj(b) })
		}
		function d6(a, b) {
			return new a({ type: "void", ...aj(b) })
		}
		function d7(a, b) {
			return new a({ type: "date", ...aj(b) })
		}
		function d8(a, b) {
			return new a({ type: "date", coerce: !0, ...aj(b) })
		}
		function d9(a, b) {
			return new a({ type: "nan", ...aj(b) })
		}
		function ea(a, b) {
			return new bw({ check: "less_than", ...aj(b), value: a, inclusive: !1 })
		}
		function eb(a, b) {
			return new bw({ check: "less_than", ...aj(b), value: a, inclusive: !0 })
		}
		function ec(a, b) {
			return new bx({ check: "greater_than", ...aj(b), value: a, inclusive: !1 })
		}
		function ed(a, b) {
			return new bx({ check: "greater_than", ...aj(b), value: a, inclusive: !0 })
		}
		function ee(a) {
			return ec(0, a)
		}
		function ef(a) {
			return ea(0, a)
		}
		function eg(a) {
			return eb(0, a)
		}
		function eh(a) {
			return ed(0, a)
		}
		function ei(a, b) {
			return new by({ check: "multiple_of", ...aj(b), value: a })
		}
		function ej(a, b) {
			return new bB({ check: "max_size", ...aj(b), maximum: a })
		}
		function ek(a, b) {
			return new bC({ check: "min_size", ...aj(b), minimum: a })
		}
		function el(a, b) {
			return new bD({ check: "size_equals", ...aj(b), size: a })
		}
		function em(a, b) {
			return new bE({ check: "max_length", ...aj(b), maximum: a })
		}
		function en(a, b) {
			return new bF({ check: "min_length", ...aj(b), minimum: a })
		}
		function eo(a, b) {
			return new bG({ check: "length_equals", ...aj(b), length: a })
		}
		function ep(a, b) {
			return new bI({ check: "string_format", format: "regex", ...aj(b), pattern: a })
		}
		function eq(a) {
			return new bJ({ check: "string_format", format: "lowercase", ...aj(a) })
		}
		function er(a) {
			return new bK({ check: "string_format", format: "uppercase", ...aj(a) })
		}
		function es(a, b) {
			return new bL({ check: "string_format", format: "includes", ...aj(b), includes: a })
		}
		function et(a, b) {
			return new bM({ check: "string_format", format: "starts_with", ...aj(b), prefix: a })
		}
		function eu(a, b) {
			return new bN({ check: "string_format", format: "ends_with", ...aj(b), suffix: a })
		}
		function ev(a, b, c) {
			return new bP({ check: "property", property: a, schema: b, ...aj(c) })
		}
		function ew(a, b) {
			return new bQ({ check: "mime_type", mime: a, ...aj(b) })
		}
		function ex(a) {
			return new bR({ check: "overwrite", tx: a })
		}
		function ey(a) {
			return ex((b) => b.normalize(a))
		}
		function ez() {
			return ex((a) => a.trim())
		}
		function eA() {
			return ex((a) => a.toLowerCase())
		}
		function eB() {
			return ex((a) => a.toUpperCase())
		}
		function eC(a, b, c) {
			return new a({ type: "array", element: b, ...aj(c) })
		}
		function eD(a, b, c) {
			return new a({ type: "union", options: b, ...aj(c) })
		}
		function eE(a, b, c, d) {
			return new a({ type: "union", options: c, discriminator: b, ...aj(d) })
		}
		function eF(a, b, c) {
			return new a({ type: "intersection", left: b, right: c })
		}
		function eG(a, b, c, d) {
			let e = c instanceof bU,
				f = e ? d : c
			return new a({ type: "tuple", items: b, rest: e ? c : null, ...aj(f) })
		}
		function eH(a, b, c, d) {
			return new a({ type: "record", keyType: b, valueType: c, ...aj(d) })
		}
		function eI(a, b, c, d) {
			return new a({ type: "map", keyType: b, valueType: c, ...aj(d) })
		}
		function eJ(a, b, c) {
			return new a({ type: "set", valueType: b, ...aj(c) })
		}
		function eK(a, b, c) {
			return new a({
				type: "enum",
				entries: Array.isArray(b) ? Object.fromEntries(b.map((a) => [a, a])) : b,
				...aj(c),
			})
		}
		function eL(a, b, c) {
			return new a({ type: "enum", entries: b, ...aj(c) })
		}
		function eM(a, b, c) {
			return new a({ type: "literal", values: Array.isArray(b) ? b : [b], ...aj(c) })
		}
		function eN(a, b) {
			return new a({ type: "file", ...aj(b) })
		}
		function eO(a, b) {
			return new a({ type: "transform", transform: b })
		}
		function eP(a, b) {
			return new a({ type: "optional", innerType: b })
		}
		function eQ(a, b) {
			return new a({ type: "nullable", innerType: b })
		}
		function eR(a, b, c) {
			return new a({
				type: "default",
				innerType: b,
				get defaultValue() {
					return "function" == typeof c ? c() : c
				},
			})
		}
		function eS(a, b, c) {
			return new a({ type: "nonoptional", innerType: b, ...aj(c) })
		}
		function eT(a, b) {
			return new a({ type: "success", innerType: b })
		}
		function eU(a, b, c) {
			return new a({ type: "catch", innerType: b, catchValue: "function" == typeof c ? c : () => c })
		}
		function eV(a, b, c) {
			return new a({ type: "pipe", in: b, out: c })
		}
		function eW(a, b) {
			return new a({ type: "readonly", innerType: b })
		}
		function eX(a, b, c) {
			return new a({ type: "template_literal", parts: b, ...aj(c) })
		}
		function eY(a, b) {
			return new a({ type: "lazy", getter: b })
		}
		function eZ(a, b) {
			return new a({ type: "promise", innerType: b })
		}
		function e$(a, b, c) {
			let d = aj(c)
			return d.abort ?? (d.abort = !0), new a({ type: "custom", check: "custom", fn: b, ...d })
		}
		function e_(a, b, c) {
			return new a({ type: "custom", check: "custom", fn: b, ...aj(c) })
		}
		function e0(a, b) {
			let c = aj(b),
				d = c.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
				e = c.falsy ?? ["false", "0", "no", "off", "n", "disabled"]
			"sensitive" !== c.case &&
				((d = d.map((a) => ("string" == typeof a ? a.toLowerCase() : a))),
				(e = e.map((a) => ("string" == typeof a ? a.toLowerCase() : a))))
			let f = new Set(d),
				g = new Set(e),
				h = a.Pipe ?? c2,
				i = a.Boolean ?? co,
				j = a.String ?? bV,
				k = new (a.Transform ?? cT)({
					type: "transform",
					transform: (a, b) => {
						let d = a
						return (
							"sensitive" !== c.case && (d = d.toLowerCase()),
							!!f.has(d) ||
								(!g.has(d) &&
									(b.issues.push({
										code: "invalid_value",
										expected: "stringbool",
										values: [...f, ...g],
										input: b.value,
										inst: k,
									}),
									{}))
						)
					},
					error: c.error,
				}),
				l = new h({ type: "pipe", in: new j({ type: "string", error: c.error }), out: k, error: c.error })
			return new h({ type: "pipe", in: l, out: new i({ type: "boolean", error: c.error }), error: c.error })
		}
		function e1(a, b, c, d = {}) {
			let e = aj(d),
				f = {
					...aj(d),
					check: "string_format",
					type: "string",
					format: b,
					fn: "function" == typeof c ? c : (a) => c.test(a),
					...e,
				}
			return c instanceof RegExp && (f.pattern = c), new a(f)
		}
		a.s(
			[
				"TimePrecision",
				0,
				dK,
				"_any",
				() => d3,
				"_array",
				() => eC,
				"_base64",
				() => dG,
				"_base64url",
				() => dH,
				"_bigint",
				() => dY,
				"_boolean",
				() => dW,
				"_catch",
				() => eU,
				"_cidrv4",
				() => dE,
				"_cidrv6",
				() => dF,
				"_coercedBigint",
				() => dZ,
				"_coercedBoolean",
				() => dX,
				"_coercedDate",
				() => d8,
				"_coercedNumber",
				() => dQ,
				"_coercedString",
				() => dm,
				"_cuid",
				() => dx,
				"_cuid2",
				() => dy,
				"_custom",
				() => e$,
				"_date",
				() => d7,
				"_default",
				() => eR,
				"_discriminatedUnion",
				() => eE,
				"_e164",
				() => dI,
				"_email",
				() => dn,
				"_emoji",
				() => dv,
				"_endsWith",
				() => eu,
				"_enum",
				() => eK,
				"_file",
				() => eN,
				"_float32",
				() => dS,
				"_float64",
				() => dT,
				"_gt",
				() => ec,
				"_gte",
				() => ed,
				"_guid",
				() => dp,
				"_includes",
				() => es,
				"_int",
				() => dR,
				"_int32",
				() => dU,
				"_int64",
				() => d$,
				"_intersection",
				() => eF,
				"_ipv4",
				() => dC,
				"_ipv6",
				() => dD,
				"_isoDate",
				() => dM,
				"_isoDateTime",
				() => dL,
				"_isoDuration",
				() => dO,
				"_isoTime",
				() => dN,
				"_jwt",
				() => dJ,
				"_ksuid",
				() => dB,
				"_lazy",
				() => eY,
				"_length",
				() => eo,
				"_literal",
				() => eM,
				"_lowercase",
				() => eq,
				"_lt",
				() => ea,
				"_lte",
				() => eb,
				"_map",
				() => eI,
				"_max",
				() => eb,
				"_maxLength",
				() => em,
				"_maxSize",
				() => ej,
				"_mime",
				() => ew,
				"_min",
				() => ed,
				"_minLength",
				() => en,
				"_minSize",
				() => ek,
				"_multipleOf",
				() => ei,
				"_nan",
				() => d9,
				"_nanoid",
				() => dw,
				"_nativeEnum",
				() => eL,
				"_negative",
				() => ef,
				"_never",
				() => d5,
				"_nonnegative",
				() => eh,
				"_nonoptional",
				() => eS,
				"_nonpositive",
				() => eg,
				"_normalize",
				() => ey,
				"_null",
				() => d2,
				"_nullable",
				() => eQ,
				"_number",
				() => dP,
				"_optional",
				() => eP,
				"_overwrite",
				() => ex,
				"_pipe",
				() => eV,
				"_positive",
				() => ee,
				"_promise",
				() => eZ,
				"_property",
				() => ev,
				"_readonly",
				() => eW,
				"_record",
				() => eH,
				"_refine",
				() => e_,
				"_regex",
				() => ep,
				"_set",
				() => eJ,
				"_size",
				() => el,
				"_startsWith",
				() => et,
				"_string",
				() => dl,
				"_stringFormat",
				() => e1,
				"_stringbool",
				() => e0,
				"_success",
				() => eT,
				"_symbol",
				() => d0,
				"_templateLiteral",
				() => eX,
				"_toLowerCase",
				() => eA,
				"_toUpperCase",
				() => eB,
				"_transform",
				() => eO,
				"_trim",
				() => ez,
				"_tuple",
				() => eG,
				"_uint32",
				() => dV,
				"_uint64",
				() => d_,
				"_ulid",
				() => dz,
				"_undefined",
				() => d1,
				"_union",
				() => eD,
				"_unknown",
				() => d4,
				"_uppercase",
				() => er,
				"_url",
				() => du,
				"_uuid",
				() => dq,
				"_uuidv4",
				() => dr,
				"_uuidv6",
				() => ds,
				"_uuidv7",
				() => dt,
				"_void",
				() => d6,
				"_xid",
				() => dA,
			],
			64715,
		)
		class e2 {
			constructor(a) {
				;(this._def = a), (this.def = a)
			}
			implement(a) {
				if ("function" != typeof a) throw Error("implement() must be called with a function")
				let b = (...c) => {
					let d = this._def.input ? aO(this._def.input, c, void 0, { callee: b }) : c
					if (!Array.isArray(d)) throw Error("Invalid arguments schema: not an array or tuple schema.")
					let e = a(...d)
					return this._def.output ? aO(this._def.output, e, void 0, { callee: b }) : e
				}
				return b
			}
			implementAsync(a) {
				if ("function" != typeof a) throw Error("implement() must be called with a function")
				let b = async (...c) => {
					let d = this._def.input ? await aQ(this._def.input, c, void 0, { callee: b }) : c
					if (!Array.isArray(d)) throw Error("Invalid arguments schema: not an array or tuple schema.")
					let e = await a(...d)
					return this._def.output ? aQ(this._def.output, e, void 0, { callee: b }) : e
				}
				return b
			}
			input(...a) {
				let b = this.constructor
				return new b(
					Array.isArray(a[0])
						? {
								type: "function",
								input: new cJ({ type: "tuple", items: a[0], rest: a[1] }),
								output: this._def.output,
							}
						: { type: "function", input: a[0], output: this._def.output },
				)
			}
			output(a) {
				return new this.constructor({ type: "function", input: this._def.input, output: a })
			}
		}
		function e3(a) {
			return new e2({
				type: "function",
				input: Array.isArray(a?.input) ? eG(cJ, a?.input) : (a?.input ?? eC(cA, d4(cv))),
				output: a?.output ?? d4(cv),
			})
		}
		a.s(["$ZodFunction", () => e2, "function", () => e3], 27020), a.i(27020), a.i(64715)
		class e4 {
			constructor(a) {
				;(this.counter = 0),
					(this.metadataRegistry = a?.metadata ?? dk),
					(this.target = a?.target ?? "draft-2020-12"),
					(this.unrepresentable = a?.unrepresentable ?? "throw"),
					(this.override = a?.override ?? (() => {})),
					(this.io = a?.io ?? "output"),
					(this.seen = new Map())
			}
			process(a, b = { path: [], schemaPath: [] }) {
				var c
				let d = a._zod.def,
					e = this.seen.get(a)
				if (e) return e.count++, b.schemaPath.includes(a) && (e.cycle = b.path), e.schema
				let f = { schema: {}, count: 1, cycle: void 0, path: b.path }
				this.seen.set(a, f)
				let g = a._zod.toJSONSchema?.()
				if (g) f.schema = g
				else {
					let c = { ...b, schemaPath: [...b.schemaPath, a], path: b.path },
						e = a._zod.parent
					if (e) (f.ref = e), this.process(e, c), (this.seen.get(e).isParent = !0)
					else {
						let b = f.schema
						switch (d.type) {
							case "string": {
								b.type = "string"
								let { minimum: c, maximum: d, format: e, patterns: g, contentEncoding: h } = a._zod.bag
								if (
									("number" == typeof c && (b.minLength = c),
									"number" == typeof d && (b.maxLength = d),
									e &&
										((b.format =
											{
												guid: "uuid",
												url: "uri",
												datetime: "date-time",
												json_string: "json-string",
												regex: "",
											}[e] ?? e),
										"" === b.format && delete b.format),
									h && (b.contentEncoding = h),
									g && g.size > 0)
								) {
									let a = [...g]
									1 === a.length
										? (b.pattern = a[0].source)
										: a.length > 1 &&
											(f.schema.allOf = [
												...a.map((a) => ({
													...("draft-7" === this.target ? { type: "string" } : {}),
													pattern: a.source,
												})),
											])
								}
								break
							}
							case "number": {
								let {
									minimum: c,
									maximum: d,
									format: e,
									multipleOf: f,
									exclusiveMaximum: g,
									exclusiveMinimum: h,
								} = a._zod.bag
								"string" == typeof e && e.includes("int") ? (b.type = "integer") : (b.type = "number"),
									"number" == typeof h && (b.exclusiveMinimum = h),
									"number" == typeof c &&
										((b.minimum = c),
										"number" == typeof h &&
											(h >= c ? delete b.minimum : delete b.exclusiveMinimum)),
									"number" == typeof g && (b.exclusiveMaximum = g),
									"number" == typeof d &&
										((b.maximum = d),
										"number" == typeof g &&
											(g <= d ? delete b.maximum : delete b.exclusiveMaximum)),
									"number" == typeof f && (b.multipleOf = f)
								break
							}
							case "boolean":
							case "success":
								b.type = "boolean"
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
								b.type = "null"
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
								b.not = {}
								break
							case "date":
								if ("throw" === this.unrepresentable)
									throw Error("Date cannot be represented in JSON Schema")
								break
							case "array": {
								let { minimum: e, maximum: f } = a._zod.bag
								"number" == typeof e && (b.minItems = e),
									"number" == typeof f && (b.maxItems = f),
									(b.type = "array"),
									(b.items = this.process(d.element, { ...c, path: [...c.path, "items"] }))
								break
							}
							case "object": {
								;(b.type = "object"), (b.properties = {})
								let a = d.shape
								for (let d in a)
									b.properties[d] = this.process(a[d], { ...c, path: [...c.path, "properties", d] })
								let e = new Set(
									[...new Set(Object.keys(a))].filter((a) => {
										let b = d.shape[a]._zod
										return "input" === this.io ? void 0 === b.optin : void 0 === b.optout
									}),
								)
								e.size > 0 && (b.required = Array.from(e)),
									d.catchall?._zod.def.type === "never"
										? (b.additionalProperties = !1)
										: d.catchall
											? d.catchall &&
												(b.additionalProperties = this.process(d.catchall, {
													...c,
													path: [...c.path, "additionalProperties"],
												}))
											: "output" === this.io && (b.additionalProperties = !1)
								break
							}
							case "union":
								b.anyOf = d.options.map((a, b) =>
									this.process(a, { ...c, path: [...c.path, "anyOf", b] }),
								)
								break
							case "intersection": {
								let a = this.process(d.left, { ...c, path: [...c.path, "allOf", 0] }),
									e = this.process(d.right, { ...c, path: [...c.path, "allOf", 1] }),
									f = (a) => "allOf" in a && 1 === Object.keys(a).length
								b.allOf = [...(f(a) ? a.allOf : [a]), ...(f(e) ? e.allOf : [e])]
								break
							}
							case "tuple": {
								b.type = "array"
								let e = d.items.map((a, b) =>
									this.process(a, { ...c, path: [...c.path, "prefixItems", b] }),
								)
								if (("draft-2020-12" === this.target ? (b.prefixItems = e) : (b.items = e), d.rest)) {
									let a = this.process(d.rest, { ...c, path: [...c.path, "items"] })
									"draft-2020-12" === this.target ? (b.items = a) : (b.additionalItems = a)
								}
								d.rest && (b.items = this.process(d.rest, { ...c, path: [...c.path, "items"] }))
								let { minimum: f, maximum: g } = a._zod.bag
								"number" == typeof f && (b.minItems = f), "number" == typeof g && (b.maxItems = g)
								break
							}
							case "record":
								;(b.type = "object"),
									(b.propertyNames = this.process(d.keyType, {
										...c,
										path: [...c.path, "propertyNames"],
									})),
									(b.additionalProperties = this.process(d.valueType, {
										...c,
										path: [...c.path, "additionalProperties"],
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
								let a = P(d.entries)
								a.every((a) => "number" == typeof a) && (b.type = "number"),
									a.every((a) => "string" == typeof a) && (b.type = "string"),
									(b.enum = a)
								break
							}
							case "literal": {
								let a = []
								for (let b of d.values)
									if (void 0 === b) {
										if ("throw" === this.unrepresentable)
											throw Error("Literal `undefined` cannot be represented in JSON Schema")
									} else if ("bigint" == typeof b)
										if ("throw" === this.unrepresentable)
											throw Error("BigInt literals cannot be represented in JSON Schema")
										else a.push(Number(b))
									else a.push(b)
								if (0 === a.length);
								else if (1 === a.length) {
									let c = a[0]
									;(b.type = null === c ? "null" : typeof c), (b.const = c)
								} else
									a.every((a) => "number" == typeof a) && (b.type = "number"),
										a.every((a) => "string" == typeof a) && (b.type = "string"),
										a.every((a) => "boolean" == typeof a) && (b.type = "string"),
										a.every((a) => null === a) && (b.type = "null"),
										(b.enum = a)
								break
							}
							case "file": {
								let c = { type: "string", format: "binary", contentEncoding: "binary" },
									{ minimum: d, maximum: e, mime: f } = a._zod.bag
								void 0 !== d && (c.minLength = d),
									void 0 !== e && (c.maxLength = e),
									f
										? 1 === f.length
											? ((c.contentMediaType = f[0]), Object.assign(b, c))
											: (b.anyOf = f.map((a) => ({ ...c, contentMediaType: a })))
										: Object.assign(b, c)
								break
							}
							case "transform":
								if ("throw" === this.unrepresentable)
									throw Error("Transforms cannot be represented in JSON Schema")
								break
							case "nullable":
								b.anyOf = [this.process(d.innerType, c), { type: "null" }]
								break
							case "nonoptional":
							case "promise":
							case "optional":
								this.process(d.innerType, c), (f.ref = d.innerType)
								break
							case "default":
								this.process(d.innerType, c),
									(f.ref = d.innerType),
									(b.default = JSON.parse(JSON.stringify(d.defaultValue)))
								break
							case "prefault":
								this.process(d.innerType, c),
									(f.ref = d.innerType),
									"input" === this.io && (b._prefault = JSON.parse(JSON.stringify(d.defaultValue)))
								break
							case "catch": {
								let a
								this.process(d.innerType, c), (f.ref = d.innerType)
								try {
									a = d.catchValue(void 0)
								} catch {
									throw Error("Dynamic catch values are not supported in JSON Schema")
								}
								b.default = a
								break
							}
							case "nan":
								if ("throw" === this.unrepresentable)
									throw Error("NaN cannot be represented in JSON Schema")
								break
							case "template_literal": {
								let c = a._zod.pattern
								if (!c) throw Error("Pattern not found in template literal")
								;(b.type = "string"), (b.pattern = c.source)
								break
							}
							case "pipe": {
								let a =
									"input" === this.io ? ("transform" === d.in._zod.def.type ? d.out : d.in) : d.out
								this.process(a, c), (f.ref = a)
								break
							}
							case "readonly":
								this.process(d.innerType, c), (f.ref = d.innerType), (b.readOnly = !0)
								break
							case "lazy": {
								let b = a._zod.innerType
								this.process(b, c), (f.ref = b)
								break
							}
							case "custom":
								if ("throw" === this.unrepresentable)
									throw Error("Custom types cannot be represented in JSON Schema")
						}
					}
				}
				let h = this.metadataRegistry.get(a)
				return (
					h && Object.assign(f.schema, h),
					"input" === this.io &&
						(function a(b, c) {
							let d = c ?? { seen: new Set() }
							if (d.seen.has(b)) return !1
							d.seen.add(b)
							let e = b._zod.def
							switch (e.type) {
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
									return a(e.element, d)
								case "object":
									for (let b in e.shape) if (a(e.shape[b], d)) return !0
									return !1
								case "union":
									for (let b of e.options) if (a(b, d)) return !0
									return !1
								case "intersection":
									return a(e.left, d) || a(e.right, d)
								case "tuple":
									for (let b of e.items) if (a(b, d)) return !0
									if (e.rest && a(e.rest, d)) return !0
									return !1
								case "record":
								case "map":
									return a(e.keyType, d) || a(e.valueType, d)
								case "set":
									return a(e.valueType, d)
								case "promise":
								case "optional":
								case "nonoptional":
								case "nullable":
								case "readonly":
								case "default":
								case "prefault":
									return a(e.innerType, d)
								case "lazy":
									return a(e.getter(), d)
								case "transform":
									return !0
								case "pipe":
									return a(e.in, d) || a(e.out, d)
							}
							throw Error(`Unknown schema type: ${e.type}`)
						})(a) &&
						(delete f.schema.examples, delete f.schema.default),
					"input" === this.io &&
						f.schema._prefault &&
						((c = f.schema).default ?? (c.default = f.schema._prefault)),
					delete f.schema._prefault,
					this.seen.get(a).schema
				)
			}
			emit(a, b) {
				let c = { cycles: b?.cycles ?? "ref", reused: b?.reused ?? "inline", external: b?.external ?? void 0 },
					d = this.seen.get(a)
				if (!d) throw Error("Unprocessed schema. This is a bug in Zod.")
				let e = (a) => {
						let b = "draft-2020-12" === this.target ? "$defs" : "definitions"
						if (c.external) {
							let d = c.external.registry.get(a[0])?.id,
								e = c.external.uri ?? ((a) => a)
							if (d) return { ref: e(d) }
							let f = a[1].defId ?? a[1].schema.id ?? `schema${this.counter++}`
							return (a[1].defId = f), { defId: f, ref: `${e("__shared")}#/${b}/${f}` }
						}
						if (a[1] === d) return { ref: "#" }
						let e = `#/${b}/`,
							f = a[1].schema.id ?? `__schema${this.counter++}`
						return { defId: f, ref: e + f }
					},
					f = (a) => {
						if (a[1].schema.$ref) return
						let b = a[1],
							{ ref: c, defId: d } = e(a)
						;(b.def = { ...b.schema }), d && (b.defId = d)
						let f = b.schema
						for (let a in f) delete f[a]
						f.$ref = c
					}
				if ("throw" === c.cycles)
					for (let a of this.seen.entries()) {
						let b = a[1]
						if (b.cycle)
							throw Error(`Cycle detected: #/${b.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)
					}
				for (let b of this.seen.entries()) {
					let d = b[1]
					if (a === b[0]) {
						f(b)
						continue
					}
					if (c.external) {
						let d = c.external.registry.get(b[0])?.id
						if (a !== b[0] && d) {
							f(b)
							continue
						}
					}
					if (this.metadataRegistry.get(b[0])?.id || d.cycle || (d.count > 1 && "ref" === c.reused)) {
						f(b)
						continue
					}
				}
				let g = (a, b) => {
					let c = this.seen.get(a),
						d = c.def ?? c.schema,
						e = { ...d }
					if (null === c.ref) return
					let f = c.ref
					if (((c.ref = null), f)) {
						g(f, b)
						let a = this.seen.get(f).schema
						a.$ref && "draft-7" === b.target
							? ((d.allOf = d.allOf ?? []), d.allOf.push(a))
							: (Object.assign(d, a), Object.assign(d, e))
					}
					c.isParent || this.override({ zodSchema: a, jsonSchema: d, path: c.path ?? [] })
				}
				for (let a of [...this.seen.entries()].reverse()) g(a[0], { target: this.target })
				let h = {}
				if (
					("draft-2020-12" === this.target
						? (h.$schema = "https://json-schema.org/draft/2020-12/schema")
						: "draft-7" === this.target
							? (h.$schema = "http://json-schema.org/draft-07/schema#")
							: console.warn(`Invalid target: ${this.target}`),
					c.external?.uri)
				) {
					let b = c.external.registry.get(a)?.id
					if (!b) throw Error("Schema is missing an `id` property")
					h.$id = c.external.uri(b)
				}
				Object.assign(h, d.def)
				let i = c.external?.defs ?? {}
				for (let a of this.seen.entries()) {
					let b = a[1]
					b.def && b.defId && (i[b.defId] = b.def)
				}
				c.external ||
					(Object.keys(i).length > 0 &&
						("draft-2020-12" === this.target ? (h.$defs = i) : (h.definitions = i)))
				try {
					return JSON.parse(JSON.stringify(h))
				} catch (a) {
					throw Error("Error converting schema to JSON.")
				}
			}
		}
		function e5(a, b) {
			if (a instanceof di) {
				let c = new e4(b),
					d = {}
				for (let b of a._idmap.entries()) {
					let [a, d] = b
					c.process(d)
				}
				let e = {},
					f = { registry: a, uri: b?.uri, defs: d }
				for (let d of a._idmap.entries()) {
					let [a, g] = d
					e[a] = c.emit(g, { ...b, external: f })
				}
				return (
					Object.keys(d).length > 0 &&
						(e.__shared = { ["draft-2020-12" === c.target ? "$defs" : "definitions"]: d }),
					{ schemas: e }
				)
			}
			let c = new e4(b)
			return c.process(a), c.emit(a, b)
		}
		a.s(["JSONSchemaGenerator", () => e4, "toJSONSchema", () => e5], 17098), a.i(17098), a.s([], 19361)
		var e6 = a.i(19361)
		a.s(
			[
				"$ZodAny",
				0,
				cu,
				"$ZodArray",
				0,
				cA,
				"$ZodAsyncError",
				() => H,
				"$ZodBase64",
				0,
				cf,
				"$ZodBase64URL",
				0,
				ch,
				"$ZodBigInt",
				0,
				cp,
				"$ZodBigIntFormat",
				0,
				cq,
				"$ZodBoolean",
				0,
				co,
				"$ZodCIDRv4",
				0,
				cc,
				"$ZodCIDRv6",
				0,
				cd,
				"$ZodCUID",
				0,
				b1,
				"$ZodCUID2",
				0,
				b2,
				"$ZodCatch",
				0,
				c0,
				"$ZodCheck",
				0,
				bu,
				"$ZodCheckBigIntFormat",
				0,
				bA,
				"$ZodCheckEndsWith",
				0,
				bN,
				"$ZodCheckGreaterThan",
				0,
				bx,
				"$ZodCheckIncludes",
				0,
				bL,
				"$ZodCheckLengthEquals",
				0,
				bG,
				"$ZodCheckLessThan",
				0,
				bw,
				"$ZodCheckLowerCase",
				0,
				bJ,
				"$ZodCheckMaxLength",
				0,
				bE,
				"$ZodCheckMaxSize",
				0,
				bB,
				"$ZodCheckMimeType",
				0,
				bQ,
				"$ZodCheckMinLength",
				0,
				bF,
				"$ZodCheckMinSize",
				0,
				bC,
				"$ZodCheckMultipleOf",
				0,
				by,
				"$ZodCheckNumberFormat",
				0,
				bz,
				"$ZodCheckOverwrite",
				0,
				bR,
				"$ZodCheckProperty",
				0,
				bP,
				"$ZodCheckRegex",
				0,
				bI,
				"$ZodCheckSizeEquals",
				0,
				bD,
				"$ZodCheckStartsWith",
				0,
				bM,
				"$ZodCheckStringFormat",
				0,
				bH,
				"$ZodCheckUpperCase",
				0,
				bK,
				"$ZodCustom",
				0,
				c9,
				"$ZodCustomStringFormat",
				0,
				cl,
				"$ZodDate",
				0,
				cy,
				"$ZodDefault",
				0,
				cW,
				"$ZodDiscriminatedUnion",
				0,
				cG,
				"$ZodE164",
				0,
				ci,
				"$ZodEmail",
				0,
				bZ,
				"$ZodEmoji",
				0,
				b_,
				"$ZodEnum",
				0,
				cQ,
				"$ZodError",
				0,
				aG,
				"$ZodFile",
				0,
				cS,
				"$ZodFunction",
				() => e2,
				"$ZodGUID",
				0,
				bX,
				"$ZodIPv4",
				0,
				ca,
				"$ZodIPv6",
				0,
				cb,
				"$ZodISODate",
				0,
				b7,
				"$ZodISODateTime",
				0,
				b6,
				"$ZodISODuration",
				0,
				b9,
				"$ZodISOTime",
				0,
				b8,
				"$ZodIntersection",
				0,
				cH,
				"$ZodJWT",
				0,
				ck,
				"$ZodKSUID",
				0,
				b5,
				"$ZodLazy",
				0,
				c8,
				"$ZodLiteral",
				0,
				cR,
				"$ZodMap",
				0,
				cM,
				"$ZodNaN",
				0,
				c1,
				"$ZodNanoID",
				0,
				b0,
				"$ZodNever",
				0,
				cw,
				"$ZodNonOptional",
				0,
				cZ,
				"$ZodNull",
				0,
				ct,
				"$ZodNullable",
				0,
				cV,
				"$ZodNumber",
				0,
				cm,
				"$ZodNumberFormat",
				0,
				cn,
				"$ZodObject",
				0,
				cD,
				"$ZodOptional",
				0,
				cU,
				"$ZodPipe",
				0,
				c2,
				"$ZodPrefault",
				0,
				cY,
				"$ZodPromise",
				0,
				c7,
				"$ZodReadonly",
				0,
				c4,
				"$ZodRealError",
				0,
				aH,
				"$ZodRecord",
				0,
				cL,
				"$ZodRegistry",
				() => di,
				"$ZodSet",
				0,
				cO,
				"$ZodString",
				0,
				bV,
				"$ZodStringFormat",
				0,
				bW,
				"$ZodSuccess",
				0,
				c_,
				"$ZodSymbol",
				0,
				cr,
				"$ZodTemplateLiteral",
				0,
				c6,
				"$ZodTransform",
				0,
				cT,
				"$ZodTuple",
				0,
				cJ,
				"$ZodType",
				0,
				bU,
				"$ZodULID",
				0,
				b3,
				"$ZodURL",
				0,
				b$,
				"$ZodUUID",
				0,
				bY,
				"$ZodUndefined",
				0,
				cs,
				"$ZodUnion",
				0,
				cF,
				"$ZodUnknown",
				0,
				cv,
				"$ZodVoid",
				0,
				cx,
				"$ZodXID",
				0,
				b4,
				"$brand",
				0,
				G,
				"$constructor",
				() => F,
				"$input",
				0,
				dh,
				"$output",
				0,
				dg,
				"Doc",
				() => bS,
				"JSONSchema",
				0,
				e6,
				"JSONSchemaGenerator",
				() => e4,
				"NEVER",
				0,
				E,
				"TimePrecision",
				0,
				dK,
				"_any",
				() => d3,
				"_array",
				() => eC,
				"_base64",
				() => dG,
				"_base64url",
				() => dH,
				"_bigint",
				() => dY,
				"_boolean",
				() => dW,
				"_catch",
				() => eU,
				"_cidrv4",
				() => dE,
				"_cidrv6",
				() => dF,
				"_coercedBigint",
				() => dZ,
				"_coercedBoolean",
				() => dX,
				"_coercedDate",
				() => d8,
				"_coercedNumber",
				() => dQ,
				"_coercedString",
				() => dm,
				"_cuid",
				() => dx,
				"_cuid2",
				() => dy,
				"_custom",
				() => e$,
				"_date",
				() => d7,
				"_default",
				() => eR,
				"_discriminatedUnion",
				() => eE,
				"_e164",
				() => dI,
				"_email",
				() => dn,
				"_emoji",
				() => dv,
				"_endsWith",
				() => eu,
				"_enum",
				() => eK,
				"_file",
				() => eN,
				"_float32",
				() => dS,
				"_float64",
				() => dT,
				"_gt",
				() => ec,
				"_gte",
				() => ed,
				"_guid",
				() => dp,
				"_includes",
				() => es,
				"_int",
				() => dR,
				"_int32",
				() => dU,
				"_int64",
				() => d$,
				"_intersection",
				() => eF,
				"_ipv4",
				() => dC,
				"_ipv6",
				() => dD,
				"_isoDate",
				() => dM,
				"_isoDateTime",
				() => dL,
				"_isoDuration",
				() => dO,
				"_isoTime",
				() => dN,
				"_jwt",
				() => dJ,
				"_ksuid",
				() => dB,
				"_lazy",
				() => eY,
				"_length",
				() => eo,
				"_literal",
				() => eM,
				"_lowercase",
				() => eq,
				"_lt",
				() => ea,
				"_lte",
				() => eb,
				"_map",
				() => eI,
				"_max",
				() => eb,
				"_maxLength",
				() => em,
				"_maxSize",
				() => ej,
				"_mime",
				() => ew,
				"_min",
				() => ed,
				"_minLength",
				() => en,
				"_minSize",
				() => ek,
				"_multipleOf",
				() => ei,
				"_nan",
				() => d9,
				"_nanoid",
				() => dw,
				"_nativeEnum",
				() => eL,
				"_negative",
				() => ef,
				"_never",
				() => d5,
				"_nonnegative",
				() => eh,
				"_nonoptional",
				() => eS,
				"_nonpositive",
				() => eg,
				"_normalize",
				() => ey,
				"_null",
				() => d2,
				"_nullable",
				() => eQ,
				"_number",
				() => dP,
				"_optional",
				() => eP,
				"_overwrite",
				() => ex,
				"_parse",
				0,
				aN,
				"_parseAsync",
				0,
				aP,
				"_pipe",
				() => eV,
				"_positive",
				() => ee,
				"_promise",
				() => eZ,
				"_property",
				() => ev,
				"_readonly",
				() => eW,
				"_record",
				() => eH,
				"_refine",
				() => e_,
				"_regex",
				() => ep,
				"_safeParse",
				0,
				aR,
				"_safeParseAsync",
				0,
				aT,
				"_set",
				() => eJ,
				"_size",
				() => el,
				"_startsWith",
				() => et,
				"_string",
				() => dl,
				"_stringFormat",
				() => e1,
				"_stringbool",
				() => e0,
				"_success",
				() => eT,
				"_symbol",
				() => d0,
				"_templateLiteral",
				() => eX,
				"_toLowerCase",
				() => eA,
				"_toUpperCase",
				() => eB,
				"_transform",
				() => eO,
				"_trim",
				() => ez,
				"_tuple",
				() => eG,
				"_uint32",
				() => dV,
				"_uint64",
				() => d_,
				"_ulid",
				() => dz,
				"_undefined",
				() => d1,
				"_union",
				() => eD,
				"_unknown",
				() => d4,
				"_uppercase",
				() => er,
				"_url",
				() => du,
				"_uuid",
				() => dq,
				"_uuidv4",
				() => dr,
				"_uuidv6",
				() => ds,
				"_uuidv7",
				() => dt,
				"_void",
				() => d6,
				"_xid",
				() => dA,
				"clone",
				() => ai,
				"config",
				() => J,
				"flattenError",
				() => aI,
				"formatError",
				() => aJ,
				"function",
				() => e3,
				"globalConfig",
				0,
				I,
				"globalRegistry",
				0,
				dk,
				"isValidBase64",
				() => ce,
				"isValidBase64URL",
				() => cg,
				"isValidJWT",
				() => cj,
				"locales",
				0,
				df,
				"parse",
				0,
				aO,
				"parseAsync",
				0,
				aQ,
				"prettifyError",
				() => aM,
				"regexes",
				0,
				dc,
				"registry",
				() => dj,
				"safeParse",
				0,
				aS,
				"safeParseAsync",
				0,
				aU,
				"toDotPath",
				() => aL,
				"toJSONSchema",
				() => e5,
				"treeifyError",
				() => aK,
				"util",
				0,
				db,
				"version",
				0,
				bT,
			],
			82385,
		)
		var e7 = a.i(82385)
		a.s(
			[
				"ZodAny",
				() => gs,
				"ZodArray",
				() => gC,
				"ZodBase64",
				() => fZ,
				"ZodBase64URL",
				() => f_,
				"ZodBigInt",
				() => gh,
				"ZodBigIntFormat",
				() => gj,
				"ZodBoolean",
				() => gf,
				"ZodCIDRv4",
				() => fV,
				"ZodCIDRv6",
				() => fX,
				"ZodCUID",
				() => fH,
				"ZodCUID2",
				() => fJ,
				"ZodCatch",
				() => hi,
				"ZodCustom",
				() => hw,
				"ZodCustomStringFormat",
				() => f5,
				"ZodDate",
				() => gA,
				"ZodDefault",
				() => ha,
				"ZodDiscriminatedUnion",
				() => gL,
				"ZodE164",
				() => f1,
				"ZodEmail",
				() => fs,
				"ZodEmoji",
				() => fD,
				"ZodEnum",
				() => gY,
				"ZodFile",
				() => g1,
				"ZodGUID",
				() => fu,
				"ZodIPv4",
				() => fR,
				"ZodIPv6",
				() => fT,
				"ZodIntersection",
				() => gN,
				"ZodJWT",
				() => f3,
				"ZodKSUID",
				() => fP,
				"ZodLazy",
				() => hs,
				"ZodLiteral",
				() => g_,
				"ZodMap",
				() => gU,
				"ZodNaN",
				() => hk,
				"ZodNanoID",
				() => fF,
				"ZodNever",
				() => gw,
				"ZodNonOptional",
				() => he,
				"ZodNull",
				() => gq,
				"ZodNullable",
				() => g7,
				"ZodNumber",
				() => f7,
				"ZodNumberFormat",
				() => f9,
				"ZodObject",
				() => gF,
				"ZodOptional",
				() => g5,
				"ZodPipe",
				() => hm,
				"ZodPrefault",
				() => hc,
				"ZodPromise",
				() => hu,
				"ZodReadonly",
				() => ho,
				"ZodRecord",
				() => gR,
				"ZodSet",
				() => gW,
				"ZodString",
				() => fp,
				"ZodStringFormat",
				() => fr,
				"ZodSuccess",
				() => hg,
				"ZodSymbol",
				() => gm,
				"ZodTemplateLiteral",
				() => hq,
				"ZodTransform",
				() => g3,
				"ZodTuple",
				() => gP,
				"ZodType",
				() => fn,
				"ZodULID",
				() => fL,
				"ZodURL",
				() => fB,
				"ZodUUID",
				() => fw,
				"ZodUndefined",
				() => go,
				"ZodUnion",
				() => gJ,
				"ZodUnknown",
				() => gu,
				"ZodVoid",
				() => gy,
				"ZodXID",
				() => fN,
				"_ZodString",
				() => fo,
				"_default",
				() => hb,
				"any",
				() => gt,
				"array",
				() => gD,
				"base64",
				() => f$,
				"base64url",
				() => f0,
				"bigint",
				() => gi,
				"boolean",
				() => gg,
				"catch",
				() => hj,
				"check",
				() => hx,
				"cidrv4",
				() => fW,
				"cidrv6",
				() => fY,
				"cuid",
				() => fI,
				"cuid2",
				() => fK,
				"custom",
				() => hy,
				"date",
				() => gB,
				"discriminatedUnion",
				() => gM,
				"e164",
				() => f2,
				"email",
				() => ft,
				"emoji",
				() => fE,
				"enum",
				() => gZ,
				"file",
				() => g2,
				"float32",
				() => gb,
				"float64",
				() => gc,
				"guid",
				() => fv,
				"instanceof",
				() => hB,
				"int",
				() => ga,
				"int32",
				() => gd,
				"int64",
				() => gk,
				"intersection",
				() => gO,
				"ipv4",
				() => fS,
				"ipv6",
				() => fU,
				"json",
				() => hD,
				"jwt",
				() => f4,
				"keyof",
				() => gE,
				"ksuid",
				() => fQ,
				"lazy",
				() => ht,
				"literal",
				() => g0,
				"looseObject",
				() => gI,
				"map",
				() => gV,
				"nan",
				() => hl,
				"nanoid",
				() => fG,
				"nativeEnum",
				() => g$,
				"never",
				() => gx,
				"nonoptional",
				() => hf,
				"null",
				() => gr,
				"nullable",
				() => g8,
				"nullish",
				() => g9,
				"number",
				() => f8,
				"object",
				() => gG,
				"optional",
				() => g6,
				"partialRecord",
				() => gT,
				"pipe",
				() => hn,
				"prefault",
				() => hd,
				"preprocess",
				() => hE,
				"promise",
				() => hv,
				"readonly",
				() => hp,
				"record",
				() => gS,
				"refine",
				() => hz,
				"set",
				() => gX,
				"strictObject",
				() => gH,
				"string",
				() => fq,
				"stringFormat",
				() => f6,
				"stringbool",
				() => hC,
				"success",
				() => hh,
				"superRefine",
				() => hA,
				"symbol",
				() => gn,
				"templateLiteral",
				() => hr,
				"transform",
				() => g4,
				"tuple",
				() => gQ,
				"uint32",
				() => ge,
				"uint64",
				() => gl,
				"ulid",
				() => fM,
				"undefined",
				() => gp,
				"union",
				() => gK,
				"unknown",
				() => gv,
				"url",
				() => fC,
				"uuid",
				() => fx,
				"uuidv4",
				() => fy,
				"uuidv6",
				() => fz,
				"uuidv7",
				() => fA,
				"void",
				() => gz,
				"xid",
				() => fO,
			],
			77699,
		)
		a.s(
			[
				"ZodISODate",
				() => fa,
				"ZodISODateTime",
				() => e8,
				"ZodISODuration",
				() => fe,
				"ZodISOTime",
				() => fc,
				"date",
				() => fb,
				"datetime",
				() => e9,
				"duration",
				() => ff,
				"time",
				() => fd,
			],
			19895,
		)
		let e8 = F("ZodISODateTime", (a, b) => {
			b6.init(a, b), fr.init(a, b)
		})
		function e9(a) {
			return dL(e8, a)
		}
		let fa = F("ZodISODate", (a, b) => {
			b7.init(a, b), fr.init(a, b)
		})
		function fb(a) {
			return dM(fa, a)
		}
		let fc = F("ZodISOTime", (a, b) => {
			b8.init(a, b), fr.init(a, b)
		})
		function fd(a) {
			return dN(fc, a)
		}
		let fe = F("ZodISODuration", (a, b) => {
			b9.init(a, b), fr.init(a, b)
		})
		function ff(a) {
			return dO(fe, a)
		}
		let fg = (a, b) => {
				aG.init(a, b),
					(a.name = "ZodError"),
					Object.defineProperties(a, {
						format: { value: (b) => aJ(a, b) },
						flatten: { value: (b) => aI(a, b) },
						addIssue: { value: (b) => a.issues.push(b) },
						addIssues: { value: (b) => a.issues.push(...b) },
						isEmpty: { get: () => 0 === a.issues.length },
					})
			},
			fh = F("ZodError", fg),
			fi = F("ZodError", fg, { Parent: Error })
		a.s(["ZodError", 0, fh, "ZodRealError", 0, fi], 12294)
		let fj = aN(fi),
			fk = aP(fi),
			fl = aR(fi),
			fm = aT(fi)
		a.s(["parse", 0, fj, "parseAsync", 0, fk, "safeParse", 0, fl, "safeParseAsync", 0, fm], 4007)
		let fn = F(
				"ZodType",
				(a, b) => (
					bU.init(a, b),
					(a.def = b),
					Object.defineProperty(a, "_def", { value: b }),
					(a.check = (...c) =>
						a.clone({
							...b,
							checks: [
								...(b.checks ?? []),
								...c.map((a) =>
									"function" == typeof a
										? { _zod: { check: a, def: { check: "custom" }, onattach: [] } }
										: a,
								),
							],
						})),
					(a.clone = (b, c) => ai(a, b, c)),
					(a.brand = () => a),
					(a.register = (b, c) => (b.add(a, c), a)),
					(a.parse = (b, c) => fj(a, b, c, { callee: a.parse })),
					(a.safeParse = (b, c) => fl(a, b, c)),
					(a.parseAsync = async (b, c) => fk(a, b, c, { callee: a.parseAsync })),
					(a.safeParseAsync = async (b, c) => fm(a, b, c)),
					(a.spa = a.safeParseAsync),
					(a.refine = (b, c) => a.check(hz(b, c))),
					(a.superRefine = (b) => a.check(hA(b))),
					(a.overwrite = (b) => a.check(ex(b))),
					(a.optional = () => g6(a)),
					(a.nullable = () => g8(a)),
					(a.nullish = () => g6(g8(a))),
					(a.nonoptional = (b) => hf(a, b)),
					(a.array = () => gD(a)),
					(a.or = (b) => gK([a, b])),
					(a.and = (b) => gO(a, b)),
					(a.transform = (b) => hn(a, g4(b))),
					(a.default = (b) => hb(a, b)),
					(a.prefault = (b) => hd(a, b)),
					(a.catch = (b) => hj(a, b)),
					(a.pipe = (b) => hn(a, b)),
					(a.readonly = () => hp(a)),
					(a.describe = (b) => {
						let c = a.clone()
						return dk.add(c, { description: b }), c
					}),
					Object.defineProperty(a, "description", { get: () => dk.get(a)?.description, configurable: !0 }),
					(a.meta = (...b) => {
						if (0 === b.length) return dk.get(a)
						let c = a.clone()
						return dk.add(c, b[0]), c
					}),
					(a.isOptional = () => a.safeParse(void 0).success),
					(a.isNullable = () => a.safeParse(null).success),
					a
				),
			),
			fo = F("_ZodString", (a, b) => {
				bV.init(a, b), fn.init(a, b)
				let c = a._zod.bag
				;(a.format = c.format ?? null),
					(a.minLength = c.minimum ?? null),
					(a.maxLength = c.maximum ?? null),
					(a.regex = (...b) => a.check(ep(...b))),
					(a.includes = (...b) => a.check(es(...b))),
					(a.startsWith = (...b) => a.check(et(...b))),
					(a.endsWith = (...b) => a.check(eu(...b))),
					(a.min = (...b) => a.check(en(...b))),
					(a.max = (...b) => a.check(em(...b))),
					(a.length = (...b) => a.check(eo(...b))),
					(a.nonempty = (...b) => a.check(en(1, ...b))),
					(a.lowercase = (b) => a.check(eq(b))),
					(a.uppercase = (b) => a.check(er(b))),
					(a.trim = () => a.check(ez())),
					(a.normalize = (...b) => a.check(ey(...b))),
					(a.toLowerCase = () => a.check(eA())),
					(a.toUpperCase = () => a.check(eB()))
			}),
			fp = F("ZodString", (a, b) => {
				bV.init(a, b),
					fo.init(a, b),
					(a.email = (b) => a.check(dn(fs, b))),
					(a.url = (b) => a.check(du(fB, b))),
					(a.jwt = (b) => a.check(dJ(f3, b))),
					(a.emoji = (b) => a.check(dv(fD, b))),
					(a.guid = (b) => a.check(dp(fu, b))),
					(a.uuid = (b) => a.check(dq(fw, b))),
					(a.uuidv4 = (b) => a.check(dr(fw, b))),
					(a.uuidv6 = (b) => a.check(ds(fw, b))),
					(a.uuidv7 = (b) => a.check(dt(fw, b))),
					(a.nanoid = (b) => a.check(dw(fF, b))),
					(a.guid = (b) => a.check(dp(fu, b))),
					(a.cuid = (b) => a.check(dx(fH, b))),
					(a.cuid2 = (b) => a.check(dy(fJ, b))),
					(a.ulid = (b) => a.check(dz(fL, b))),
					(a.base64 = (b) => a.check(dG(fZ, b))),
					(a.base64url = (b) => a.check(dH(f_, b))),
					(a.xid = (b) => a.check(dA(fN, b))),
					(a.ksuid = (b) => a.check(dB(fP, b))),
					(a.ipv4 = (b) => a.check(dC(fR, b))),
					(a.ipv6 = (b) => a.check(dD(fT, b))),
					(a.cidrv4 = (b) => a.check(dE(fV, b))),
					(a.cidrv6 = (b) => a.check(dF(fX, b))),
					(a.e164 = (b) => a.check(dI(f1, b))),
					(a.datetime = (b) => a.check(e9(b))),
					(a.date = (b) => a.check(fb(b))),
					(a.time = (b) => a.check(fd(b))),
					(a.duration = (b) => a.check(ff(b)))
			})
		function fq(a) {
			return dl(fp, a)
		}
		let fr = F("ZodStringFormat", (a, b) => {
				bW.init(a, b), fo.init(a, b)
			}),
			fs = F("ZodEmail", (a, b) => {
				bZ.init(a, b), fr.init(a, b)
			})
		function ft(a) {
			return dn(fs, a)
		}
		let fu = F("ZodGUID", (a, b) => {
			bX.init(a, b), fr.init(a, b)
		})
		function fv(a) {
			return dp(fu, a)
		}
		let fw = F("ZodUUID", (a, b) => {
			bY.init(a, b), fr.init(a, b)
		})
		function fx(a) {
			return dq(fw, a)
		}
		function fy(a) {
			return dr(fw, a)
		}
		function fz(a) {
			return ds(fw, a)
		}
		function fA(a) {
			return dt(fw, a)
		}
		let fB = F("ZodURL", (a, b) => {
			b$.init(a, b), fr.init(a, b)
		})
		function fC(a) {
			return du(fB, a)
		}
		let fD = F("ZodEmoji", (a, b) => {
			b_.init(a, b), fr.init(a, b)
		})
		function fE(a) {
			return dv(fD, a)
		}
		let fF = F("ZodNanoID", (a, b) => {
			b0.init(a, b), fr.init(a, b)
		})
		function fG(a) {
			return dw(fF, a)
		}
		let fH = F("ZodCUID", (a, b) => {
			b1.init(a, b), fr.init(a, b)
		})
		function fI(a) {
			return dx(fH, a)
		}
		let fJ = F("ZodCUID2", (a, b) => {
			b2.init(a, b), fr.init(a, b)
		})
		function fK(a) {
			return dy(fJ, a)
		}
		let fL = F("ZodULID", (a, b) => {
			b3.init(a, b), fr.init(a, b)
		})
		function fM(a) {
			return dz(fL, a)
		}
		let fN = F("ZodXID", (a, b) => {
			b4.init(a, b), fr.init(a, b)
		})
		function fO(a) {
			return dA(fN, a)
		}
		let fP = F("ZodKSUID", (a, b) => {
			b5.init(a, b), fr.init(a, b)
		})
		function fQ(a) {
			return dB(fP, a)
		}
		let fR = F("ZodIPv4", (a, b) => {
			ca.init(a, b), fr.init(a, b)
		})
		function fS(a) {
			return dC(fR, a)
		}
		let fT = F("ZodIPv6", (a, b) => {
			cb.init(a, b), fr.init(a, b)
		})
		function fU(a) {
			return dD(fT, a)
		}
		let fV = F("ZodCIDRv4", (a, b) => {
			cc.init(a, b), fr.init(a, b)
		})
		function fW(a) {
			return dE(fV, a)
		}
		let fX = F("ZodCIDRv6", (a, b) => {
			cd.init(a, b), fr.init(a, b)
		})
		function fY(a) {
			return dF(fX, a)
		}
		let fZ = F("ZodBase64", (a, b) => {
			cf.init(a, b), fr.init(a, b)
		})
		function f$(a) {
			return dG(fZ, a)
		}
		let f_ = F("ZodBase64URL", (a, b) => {
			ch.init(a, b), fr.init(a, b)
		})
		function f0(a) {
			return dH(f_, a)
		}
		let f1 = F("ZodE164", (a, b) => {
			ci.init(a, b), fr.init(a, b)
		})
		function f2(a) {
			return dI(f1, a)
		}
		let f3 = F("ZodJWT", (a, b) => {
			ck.init(a, b), fr.init(a, b)
		})
		function f4(a) {
			return dJ(f3, a)
		}
		let f5 = F("ZodCustomStringFormat", (a, b) => {
			cl.init(a, b), fr.init(a, b)
		})
		function f6(a, b, c = {}) {
			return e1(f5, a, b, c)
		}
		let f7 = F("ZodNumber", (a, b) => {
			cm.init(a, b),
				fn.init(a, b),
				(a.gt = (b, c) => a.check(ec(b, c))),
				(a.gte = (b, c) => a.check(ed(b, c))),
				(a.min = (b, c) => a.check(ed(b, c))),
				(a.lt = (b, c) => a.check(ea(b, c))),
				(a.lte = (b, c) => a.check(eb(b, c))),
				(a.max = (b, c) => a.check(eb(b, c))),
				(a.int = (b) => a.check(ga(b))),
				(a.safe = (b) => a.check(ga(b))),
				(a.positive = (b) => a.check(ec(0, b))),
				(a.nonnegative = (b) => a.check(ed(0, b))),
				(a.negative = (b) => a.check(ea(0, b))),
				(a.nonpositive = (b) => a.check(eb(0, b))),
				(a.multipleOf = (b, c) => a.check(ei(b, c))),
				(a.step = (b, c) => a.check(ei(b, c))),
				(a.finite = () => a)
			let c = a._zod.bag
			;(a.minValue = Math.max(c.minimum ?? -1 / 0, c.exclusiveMinimum ?? -1 / 0) ?? null),
				(a.maxValue = Math.min(c.maximum ?? 1 / 0, c.exclusiveMaximum ?? 1 / 0) ?? null),
				(a.isInt = (c.format ?? "").includes("int") || Number.isSafeInteger(c.multipleOf ?? 0.5)),
				(a.isFinite = !0),
				(a.format = c.format ?? null)
		})
		function f8(a) {
			return dP(f7, a)
		}
		let f9 = F("ZodNumberFormat", (a, b) => {
			cn.init(a, b), f7.init(a, b)
		})
		function ga(a) {
			return dR(f9, a)
		}
		function gb(a) {
			return dS(f9, a)
		}
		function gc(a) {
			return dT(f9, a)
		}
		function gd(a) {
			return dU(f9, a)
		}
		function ge(a) {
			return dV(f9, a)
		}
		let gf = F("ZodBoolean", (a, b) => {
			co.init(a, b), fn.init(a, b)
		})
		function gg(a) {
			return dW(gf, a)
		}
		let gh = F("ZodBigInt", (a, b) => {
			cp.init(a, b),
				fn.init(a, b),
				(a.gte = (b, c) => a.check(ed(b, c))),
				(a.min = (b, c) => a.check(ed(b, c))),
				(a.gt = (b, c) => a.check(ec(b, c))),
				(a.gte = (b, c) => a.check(ed(b, c))),
				(a.min = (b, c) => a.check(ed(b, c))),
				(a.lt = (b, c) => a.check(ea(b, c))),
				(a.lte = (b, c) => a.check(eb(b, c))),
				(a.max = (b, c) => a.check(eb(b, c))),
				(a.positive = (b) => a.check(ec(BigInt(0), b))),
				(a.negative = (b) => a.check(ea(BigInt(0), b))),
				(a.nonpositive = (b) => a.check(eb(BigInt(0), b))),
				(a.nonnegative = (b) => a.check(ed(BigInt(0), b))),
				(a.multipleOf = (b, c) => a.check(ei(b, c)))
			let c = a._zod.bag
			;(a.minValue = c.minimum ?? null), (a.maxValue = c.maximum ?? null), (a.format = c.format ?? null)
		})
		function gi(a) {
			return dY(gh, a)
		}
		let gj = F("ZodBigIntFormat", (a, b) => {
			cq.init(a, b), gh.init(a, b)
		})
		function gk(a) {
			return d$(gj, a)
		}
		function gl(a) {
			return d_(gj, a)
		}
		let gm = F("ZodSymbol", (a, b) => {
			cr.init(a, b), fn.init(a, b)
		})
		function gn(a) {
			return d0(gm, a)
		}
		let go = F("ZodUndefined", (a, b) => {
			cs.init(a, b), fn.init(a, b)
		})
		function gp(a) {
			return d1(go, a)
		}
		let gq = F("ZodNull", (a, b) => {
			ct.init(a, b), fn.init(a, b)
		})
		function gr(a) {
			return d2(gq, a)
		}
		let gs = F("ZodAny", (a, b) => {
			cu.init(a, b), fn.init(a, b)
		})
		function gt() {
			return d3(gs)
		}
		let gu = F("ZodUnknown", (a, b) => {
			cv.init(a, b), fn.init(a, b)
		})
		function gv() {
			return d4(gu)
		}
		let gw = F("ZodNever", (a, b) => {
			cw.init(a, b), fn.init(a, b)
		})
		function gx(a) {
			return d5(gw, a)
		}
		let gy = F("ZodVoid", (a, b) => {
			cx.init(a, b), fn.init(a, b)
		})
		function gz(a) {
			return d6(gy, a)
		}
		let gA = F("ZodDate", (a, b) => {
			cy.init(a, b), fn.init(a, b), (a.min = (b, c) => a.check(ed(b, c))), (a.max = (b, c) => a.check(eb(b, c)))
			let c = a._zod.bag
			;(a.minDate = c.minimum ? new Date(c.minimum) : null), (a.maxDate = c.maximum ? new Date(c.maximum) : null)
		})
		function gB(a) {
			return d7(gA, a)
		}
		let gC = F("ZodArray", (a, b) => {
			cA.init(a, b),
				fn.init(a, b),
				(a.element = b.element),
				(a.min = (b, c) => a.check(en(b, c))),
				(a.nonempty = (b) => a.check(en(1, b))),
				(a.max = (b, c) => a.check(em(b, c))),
				(a.length = (b, c) => a.check(eo(b, c))),
				(a.unwrap = () => a.element)
		})
		function gD(a, b) {
			return eC(gC, a, b)
		}
		function gE(a) {
			return g0(Object.keys(a._zod.def.shape))
		}
		let gF = F("ZodObject", (a, b) => {
			cD.init(a, b),
				fn.init(a, b),
				db.defineLazy(a, "shape", () => b.shape),
				(a.keyof = () => gZ(Object.keys(a._zod.def.shape))),
				(a.catchall = (b) => a.clone({ ...a._zod.def, catchall: b })),
				(a.passthrough = () => a.clone({ ...a._zod.def, catchall: gv() })),
				(a.loose = () => a.clone({ ...a._zod.def, catchall: gv() })),
				(a.strict = () => a.clone({ ...a._zod.def, catchall: gx() })),
				(a.strip = () => a.clone({ ...a._zod.def, catchall: void 0 })),
				(a.extend = (b) => db.extend(a, b)),
				(a.merge = (b) => db.merge(a, b)),
				(a.pick = (b) => db.pick(a, b)),
				(a.omit = (b) => db.omit(a, b)),
				(a.partial = (...b) => db.partial(g5, a, b[0])),
				(a.required = (...b) => db.required(he, a, b[0]))
		})
		function gG(a, b) {
			return new gF({
				type: "object",
				get shape() {
					return db.assignProp(this, "shape", { ...a }), this.shape
				},
				...db.normalizeParams(b),
			})
		}
		function gH(a, b) {
			return new gF({
				type: "object",
				get shape() {
					return db.assignProp(this, "shape", { ...a }), this.shape
				},
				catchall: gx(),
				...db.normalizeParams(b),
			})
		}
		function gI(a, b) {
			return new gF({
				type: "object",
				get shape() {
					return db.assignProp(this, "shape", { ...a }), this.shape
				},
				catchall: gv(),
				...db.normalizeParams(b),
			})
		}
		let gJ = F("ZodUnion", (a, b) => {
			cF.init(a, b), fn.init(a, b), (a.options = b.options)
		})
		function gK(a, b) {
			return new gJ({ type: "union", options: a, ...db.normalizeParams(b) })
		}
		let gL = F("ZodDiscriminatedUnion", (a, b) => {
			gJ.init(a, b), cG.init(a, b)
		})
		function gM(a, b, c) {
			return new gL({ type: "union", options: b, discriminator: a, ...db.normalizeParams(c) })
		}
		let gN = F("ZodIntersection", (a, b) => {
			cH.init(a, b), fn.init(a, b)
		})
		function gO(a, b) {
			return new gN({ type: "intersection", left: a, right: b })
		}
		let gP = F("ZodTuple", (a, b) => {
			cJ.init(a, b), fn.init(a, b), (a.rest = (b) => a.clone({ ...a._zod.def, rest: b }))
		})
		function gQ(a, b, c) {
			let d = b instanceof bU,
				e = d ? c : b
			return new gP({ type: "tuple", items: a, rest: d ? b : null, ...db.normalizeParams(e) })
		}
		let gR = F("ZodRecord", (a, b) => {
			cL.init(a, b), fn.init(a, b), (a.keyType = b.keyType), (a.valueType = b.valueType)
		})
		function gS(a, b, c) {
			return new gR({ type: "record", keyType: a, valueType: b, ...db.normalizeParams(c) })
		}
		function gT(a, b, c) {
			return new gR({ type: "record", keyType: gK([a, gx()]), valueType: b, ...db.normalizeParams(c) })
		}
		let gU = F("ZodMap", (a, b) => {
			cM.init(a, b), fn.init(a, b), (a.keyType = b.keyType), (a.valueType = b.valueType)
		})
		function gV(a, b, c) {
			return new gU({ type: "map", keyType: a, valueType: b, ...db.normalizeParams(c) })
		}
		let gW = F("ZodSet", (a, b) => {
			cO.init(a, b),
				fn.init(a, b),
				(a.min = (...b) => a.check(ek(...b))),
				(a.nonempty = (b) => a.check(ek(1, b))),
				(a.max = (...b) => a.check(ej(...b))),
				(a.size = (...b) => a.check(el(...b)))
		})
		function gX(a, b) {
			return new gW({ type: "set", valueType: a, ...db.normalizeParams(b) })
		}
		let gY = F("ZodEnum", (a, b) => {
			cQ.init(a, b), fn.init(a, b), (a.enum = b.entries), (a.options = Object.values(b.entries))
			let c = new Set(Object.keys(b.entries))
			;(a.extract = (a, d) => {
				let e = {}
				for (let d of a)
					if (c.has(d)) e[d] = b.entries[d]
					else throw Error(`Key ${d} not found in enum`)
				return new gY({ ...b, checks: [], ...db.normalizeParams(d), entries: e })
			}),
				(a.exclude = (a, d) => {
					let e = { ...b.entries }
					for (let b of a)
						if (c.has(b)) delete e[b]
						else throw Error(`Key ${b} not found in enum`)
					return new gY({ ...b, checks: [], ...db.normalizeParams(d), entries: e })
				})
		})
		function gZ(a, b) {
			return new gY({
				type: "enum",
				entries: Array.isArray(a) ? Object.fromEntries(a.map((a) => [a, a])) : a,
				...db.normalizeParams(b),
			})
		}
		function g$(a, b) {
			return new gY({ type: "enum", entries: a, ...db.normalizeParams(b) })
		}
		let g_ = F("ZodLiteral", (a, b) => {
			cR.init(a, b),
				fn.init(a, b),
				(a.values = new Set(b.values)),
				Object.defineProperty(a, "value", {
					get() {
						if (b.values.length > 1)
							throw Error("This schema contains multiple valid literal values. Use `.values` instead.")
						return b.values[0]
					},
				})
		})
		function g0(a, b) {
			return new g_({ type: "literal", values: Array.isArray(a) ? a : [a], ...db.normalizeParams(b) })
		}
		let g1 = F("ZodFile", (a, b) => {
			cS.init(a, b),
				fn.init(a, b),
				(a.min = (b, c) => a.check(ek(b, c))),
				(a.max = (b, c) => a.check(ej(b, c))),
				(a.mime = (b, c) => a.check(ew(Array.isArray(b) ? b : [b], c)))
		})
		function g2(a) {
			return eN(g1, a)
		}
		let g3 = F("ZodTransform", (a, b) => {
			cT.init(a, b),
				fn.init(a, b),
				(a._zod.parse = (c, d) => {
					c.addIssue = (d) => {
						"string" == typeof d
							? c.issues.push(db.issue(d, c.value, b))
							: (d.fatal && (d.continue = !1),
								d.code ?? (d.code = "custom"),
								d.input ?? (d.input = c.value),
								d.inst ?? (d.inst = a),
								d.continue ?? (d.continue = !0),
								c.issues.push(db.issue(d)))
					}
					let e = b.transform(c.value, c)
					return e instanceof Promise ? e.then((a) => ((c.value = a), c)) : ((c.value = e), c)
				})
		})
		function g4(a) {
			return new g3({ type: "transform", transform: a })
		}
		let g5 = F("ZodOptional", (a, b) => {
			cU.init(a, b), fn.init(a, b), (a.unwrap = () => a._zod.def.innerType)
		})
		function g6(a) {
			return new g5({ type: "optional", innerType: a })
		}
		let g7 = F("ZodNullable", (a, b) => {
			cV.init(a, b), fn.init(a, b), (a.unwrap = () => a._zod.def.innerType)
		})
		function g8(a) {
			return new g7({ type: "nullable", innerType: a })
		}
		function g9(a) {
			return g6(g8(a))
		}
		let ha = F("ZodDefault", (a, b) => {
			cW.init(a, b), fn.init(a, b), (a.unwrap = () => a._zod.def.innerType), (a.removeDefault = a.unwrap)
		})
		function hb(a, b) {
			return new ha({
				type: "default",
				innerType: a,
				get defaultValue() {
					return "function" == typeof b ? b() : b
				},
			})
		}
		let hc = F("ZodPrefault", (a, b) => {
			cY.init(a, b), fn.init(a, b), (a.unwrap = () => a._zod.def.innerType)
		})
		function hd(a, b) {
			return new hc({
				type: "prefault",
				innerType: a,
				get defaultValue() {
					return "function" == typeof b ? b() : b
				},
			})
		}
		let he = F("ZodNonOptional", (a, b) => {
			cZ.init(a, b), fn.init(a, b), (a.unwrap = () => a._zod.def.innerType)
		})
		function hf(a, b) {
			return new he({ type: "nonoptional", innerType: a, ...db.normalizeParams(b) })
		}
		let hg = F("ZodSuccess", (a, b) => {
			c_.init(a, b), fn.init(a, b), (a.unwrap = () => a._zod.def.innerType)
		})
		function hh(a) {
			return new hg({ type: "success", innerType: a })
		}
		let hi = F("ZodCatch", (a, b) => {
			c0.init(a, b), fn.init(a, b), (a.unwrap = () => a._zod.def.innerType), (a.removeCatch = a.unwrap)
		})
		function hj(a, b) {
			return new hi({ type: "catch", innerType: a, catchValue: "function" == typeof b ? b : () => b })
		}
		let hk = F("ZodNaN", (a, b) => {
			c1.init(a, b), fn.init(a, b)
		})
		function hl(a) {
			return d9(hk, a)
		}
		let hm = F("ZodPipe", (a, b) => {
			c2.init(a, b), fn.init(a, b), (a.in = b.in), (a.out = b.out)
		})
		function hn(a, b) {
			return new hm({ type: "pipe", in: a, out: b })
		}
		let ho = F("ZodReadonly", (a, b) => {
			c4.init(a, b), fn.init(a, b)
		})
		function hp(a) {
			return new ho({ type: "readonly", innerType: a })
		}
		let hq = F("ZodTemplateLiteral", (a, b) => {
			c6.init(a, b), fn.init(a, b)
		})
		function hr(a, b) {
			return new hq({ type: "template_literal", parts: a, ...db.normalizeParams(b) })
		}
		let hs = F("ZodLazy", (a, b) => {
			c8.init(a, b), fn.init(a, b), (a.unwrap = () => a._zod.def.getter())
		})
		function ht(a) {
			return new hs({ type: "lazy", getter: a })
		}
		let hu = F("ZodPromise", (a, b) => {
			c7.init(a, b), fn.init(a, b), (a.unwrap = () => a._zod.def.innerType)
		})
		function hv(a) {
			return new hu({ type: "promise", innerType: a })
		}
		let hw = F("ZodCustom", (a, b) => {
			c9.init(a, b), fn.init(a, b)
		})
		function hx(a) {
			let b = new bu({ check: "custom" })
			return (b._zod.check = a), b
		}
		function hy(a, b) {
			return e$(hw, a ?? (() => !0), b)
		}
		function hz(a, b = {}) {
			return e_(hw, a, b)
		}
		function hA(a) {
			let b = hx(
				(c) => (
					(c.addIssue = (a) => {
						"string" == typeof a
							? c.issues.push(db.issue(a, c.value, b._zod.def))
							: (a.fatal && (a.continue = !1),
								a.code ?? (a.code = "custom"),
								a.input ?? (a.input = c.value),
								a.inst ?? (a.inst = b),
								a.continue ?? (a.continue = !b._zod.def.abort),
								c.issues.push(db.issue(a)))
					}),
					a(c.value, c)
				),
			)
			return b
		}
		function hB(a, b = { error: `Input not instance of ${a.name}` }) {
			let c = new hw({
				type: "custom",
				check: "custom",
				fn: (b) => b instanceof a,
				abort: !0,
				...db.normalizeParams(b),
			})
			return (c._zod.bag.Class = a), c
		}
		let hC = (...a) => e0({ Pipe: hm, Boolean: gf, String: fp, Transform: g3 }, ...a)
		function hD(a) {
			let b = ht(() => gK([fq(a), f8(), gg(), gr(), gD(b), gS(fq(), b)]))
			return b
		}
		function hE(a, b) {
			return hn(g4(a), b)
		}
		a.i(77699),
			a.s([], 44423),
			a.i(44423),
			a.s(
				[
					"endsWith",
					() => eu,
					"gt",
					() => ec,
					"gte",
					() => ed,
					"includes",
					() => es,
					"length",
					() => eo,
					"lowercase",
					() => eq,
					"lt",
					() => ea,
					"lte",
					() => eb,
					"maxLength",
					() => em,
					"maxSize",
					() => ej,
					"mime",
					() => ew,
					"minLength",
					() => en,
					"minSize",
					() => ek,
					"multipleOf",
					() => ei,
					"negative",
					() => ef,
					"nonnegative",
					() => eh,
					"nonpositive",
					() => eg,
					"normalize",
					() => ey,
					"overwrite",
					() => ex,
					"positive",
					() => ee,
					"property",
					() => ev,
					"regex",
					() => ep,
					"size",
					() => el,
					"startsWith",
					() => et,
					"toLowerCase",
					() => eA,
					"toUpperCase",
					() => eB,
					"trim",
					() => ez,
					"uppercase",
					() => er,
				],
				86745,
			),
			a.i(86745),
			a.i(12294),
			a.i(4007)
		let hF = {
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
		function hG(a) {
			J({ customError: a })
		}
		function hH() {
			return J().customError
		}
		a.s(["ZodIssueCode", 0, hF, "getErrorMap", () => hH, "setErrorMap", () => hG], 12052),
			a.i(12052),
			a.s(
				[
					"$brand",
					0,
					G,
					"ZodIssueCode",
					0,
					hF,
					"config",
					() => J,
					"getErrorMap",
					() => hH,
					"setErrorMap",
					() => hG,
				],
				85667,
			),
			a.i(85667)
		var hI = a.i(19895)
		function hJ(a) {
			return dm(fp, a)
		}
		function hK(a) {
			return dQ(f7, a)
		}
		function hL(a) {
			return dX(gf, a)
		}
		function hM(a) {
			return dZ(gh, a)
		}
		function hN(a) {
			return d8(gA, a)
		}
		a.s(["bigint", () => hM, "boolean", () => hL, "date", () => hN, "number", () => hK, "string", () => hJ], 19473)
		var hO = a.i(19473)
		a.s(
			[
				"$brand",
				0,
				G,
				"$input",
				0,
				dh,
				"$output",
				0,
				dg,
				"NEVER",
				0,
				E,
				"TimePrecision",
				0,
				dK,
				"ZodAny",
				0,
				gs,
				"ZodArray",
				0,
				gC,
				"ZodBase64",
				0,
				fZ,
				"ZodBase64URL",
				0,
				f_,
				"ZodBigInt",
				0,
				gh,
				"ZodBigIntFormat",
				0,
				gj,
				"ZodBoolean",
				0,
				gf,
				"ZodCIDRv4",
				0,
				fV,
				"ZodCIDRv6",
				0,
				fX,
				"ZodCUID",
				0,
				fH,
				"ZodCUID2",
				0,
				fJ,
				"ZodCatch",
				0,
				hi,
				"ZodCustom",
				0,
				hw,
				"ZodCustomStringFormat",
				0,
				f5,
				"ZodDate",
				0,
				gA,
				"ZodDefault",
				0,
				ha,
				"ZodDiscriminatedUnion",
				0,
				gL,
				"ZodE164",
				0,
				f1,
				"ZodEmail",
				0,
				fs,
				"ZodEmoji",
				0,
				fD,
				"ZodEnum",
				0,
				gY,
				"ZodError",
				0,
				fh,
				"ZodFile",
				0,
				g1,
				"ZodGUID",
				0,
				fu,
				"ZodIPv4",
				0,
				fR,
				"ZodIPv6",
				0,
				fT,
				"ZodISODate",
				0,
				fa,
				"ZodISODateTime",
				0,
				e8,
				"ZodISODuration",
				0,
				fe,
				"ZodISOTime",
				0,
				fc,
				"ZodIntersection",
				0,
				gN,
				"ZodIssueCode",
				0,
				hF,
				"ZodJWT",
				0,
				f3,
				"ZodKSUID",
				0,
				fP,
				"ZodLazy",
				0,
				hs,
				"ZodLiteral",
				0,
				g_,
				"ZodMap",
				0,
				gU,
				"ZodNaN",
				0,
				hk,
				"ZodNanoID",
				0,
				fF,
				"ZodNever",
				0,
				gw,
				"ZodNonOptional",
				0,
				he,
				"ZodNull",
				0,
				gq,
				"ZodNullable",
				0,
				g7,
				"ZodNumber",
				0,
				f7,
				"ZodNumberFormat",
				0,
				f9,
				"ZodObject",
				0,
				gF,
				"ZodOptional",
				0,
				g5,
				"ZodPipe",
				0,
				hm,
				"ZodPrefault",
				0,
				hc,
				"ZodPromise",
				0,
				hu,
				"ZodReadonly",
				0,
				ho,
				"ZodRealError",
				0,
				fi,
				"ZodRecord",
				0,
				gR,
				"ZodSet",
				0,
				gW,
				"ZodString",
				0,
				fp,
				"ZodStringFormat",
				0,
				fr,
				"ZodSuccess",
				0,
				hg,
				"ZodSymbol",
				0,
				gm,
				"ZodTemplateLiteral",
				0,
				hq,
				"ZodTransform",
				0,
				g3,
				"ZodTuple",
				0,
				gP,
				"ZodType",
				0,
				fn,
				"ZodULID",
				0,
				fL,
				"ZodURL",
				0,
				fB,
				"ZodUUID",
				0,
				fw,
				"ZodUndefined",
				0,
				go,
				"ZodUnion",
				0,
				gJ,
				"ZodUnknown",
				0,
				gu,
				"ZodVoid",
				0,
				gy,
				"ZodXID",
				0,
				fN,
				"_ZodString",
				0,
				fo,
				"_default",
				() => hb,
				"any",
				() => gt,
				"array",
				() => gD,
				"base64",
				() => f$,
				"base64url",
				() => f0,
				"bigint",
				() => gi,
				"boolean",
				() => gg,
				"catch",
				() => hj,
				"check",
				() => hx,
				"cidrv4",
				() => fW,
				"cidrv6",
				() => fY,
				"clone",
				() => ai,
				"coerce",
				0,
				hO,
				"config",
				() => J,
				"core",
				0,
				e7,
				"cuid",
				() => fI,
				"cuid2",
				() => fK,
				"custom",
				() => hy,
				"date",
				() => gB,
				"discriminatedUnion",
				() => gM,
				"e164",
				() => f2,
				"email",
				() => ft,
				"emoji",
				() => fE,
				"endsWith",
				() => eu,
				"enum",
				() => gZ,
				"file",
				() => g2,
				"flattenError",
				() => aI,
				"float32",
				() => gb,
				"float64",
				() => gc,
				"formatError",
				() => aJ,
				"function",
				() => e3,
				"getErrorMap",
				() => hH,
				"globalRegistry",
				0,
				dk,
				"gt",
				() => ec,
				"gte",
				() => ed,
				"guid",
				() => fv,
				"includes",
				() => es,
				"instanceof",
				() => hB,
				"int",
				() => ga,
				"int32",
				() => gd,
				"int64",
				() => gk,
				"intersection",
				() => gO,
				"ipv4",
				() => fS,
				"ipv6",
				() => fU,
				"iso",
				0,
				hI,
				"json",
				() => hD,
				"jwt",
				() => f4,
				"keyof",
				() => gE,
				"ksuid",
				() => fQ,
				"lazy",
				() => ht,
				"length",
				() => eo,
				"literal",
				() => g0,
				"locales",
				0,
				df,
				"looseObject",
				() => gI,
				"lowercase",
				() => eq,
				"lt",
				() => ea,
				"lte",
				() => eb,
				"map",
				() => gV,
				"maxLength",
				() => em,
				"maxSize",
				() => ej,
				"mime",
				() => ew,
				"minLength",
				() => en,
				"minSize",
				() => ek,
				"multipleOf",
				() => ei,
				"nan",
				() => hl,
				"nanoid",
				() => fG,
				"nativeEnum",
				() => g$,
				"negative",
				() => ef,
				"never",
				() => gx,
				"nonnegative",
				() => eh,
				"nonoptional",
				() => hf,
				"nonpositive",
				() => eg,
				"normalize",
				() => ey,
				"null",
				() => gr,
				"nullable",
				() => g8,
				"nullish",
				() => g9,
				"number",
				() => f8,
				"object",
				() => gG,
				"optional",
				() => g6,
				"overwrite",
				() => ex,
				"parse",
				0,
				fj,
				"parseAsync",
				0,
				fk,
				"partialRecord",
				() => gT,
				"pipe",
				() => hn,
				"positive",
				() => ee,
				"prefault",
				() => hd,
				"preprocess",
				() => hE,
				"prettifyError",
				() => aM,
				"promise",
				() => hv,
				"property",
				() => ev,
				"readonly",
				() => hp,
				"record",
				() => gS,
				"refine",
				() => hz,
				"regex",
				() => ep,
				"regexes",
				() => dc,
				"registry",
				() => dj,
				"safeParse",
				0,
				fl,
				"safeParseAsync",
				0,
				fm,
				"set",
				() => gX,
				"setErrorMap",
				() => hG,
				"size",
				() => el,
				"startsWith",
				() => et,
				"strictObject",
				() => gH,
				"string",
				() => fq,
				"stringFormat",
				() => f6,
				"stringbool",
				0,
				hC,
				"success",
				() => hh,
				"superRefine",
				() => hA,
				"symbol",
				() => gn,
				"templateLiteral",
				() => hr,
				"toJSONSchema",
				() => e5,
				"toLowerCase",
				() => eA,
				"toUpperCase",
				() => eB,
				"transform",
				() => g4,
				"treeifyError",
				() => aK,
				"trim",
				() => ez,
				"tuple",
				() => gQ,
				"uint32",
				() => ge,
				"uint64",
				() => gl,
				"ulid",
				() => fM,
				"undefined",
				() => gp,
				"union",
				() => gK,
				"unknown",
				() => gv,
				"uppercase",
				() => er,
				"url",
				() => fC,
				"uuid",
				() => fx,
				"uuidv4",
				() => fy,
				"uuidv6",
				() => fz,
				"uuidv7",
				() => fA,
				"void",
				() => gz,
				"xid",
				() => fO,
			],
			67353,
		),
			a.i(67353)
		var hP = D.z.enum(["low", "medium", "high"])
		D.z.union([hP, D.z.literal("minimal")])
		var hQ = D.z.enum(["none", "minimal", "low", "medium", "high", "xhigh"]),
			hR = D.z.enum(["disable", "none", "minimal", "low", "medium", "high", "xhigh"]),
			hS = D.z.enum(["low", "medium", "high"]),
			hT = D.z.enum(["default", "flex", "priority"]),
			hU = D.z.enum(["max_tokens", "temperature", "reasoning", "include_reasoning"]),
			hV = D.z.object({
				maxTokens: D.z.number().nullish(),
				maxThinkingTokens: D.z.number().nullish(),
				contextWindow: D.z.number(),
				supportsImages: D.z.boolean().optional(),
				supportsPromptCache: D.z.boolean(),
				promptCacheRetention: D.z.enum(["in_memory", "24h"]).optional(),
				supportsVerbosity: D.z.boolean().optional(),
				supportsReasoningBudget: D.z.boolean().optional(),
				supportsReasoningBinary: D.z.boolean().optional(),
				supportsTemperature: D.z.boolean().optional(),
				defaultTemperature: D.z.number().optional(),
				requiredReasoningBudget: D.z.boolean().optional(),
				supportsReasoningEffort: D.z
					.union([
						D.z.boolean(),
						D.z.array(D.z.enum(["disable", "none", "minimal", "low", "medium", "high", "xhigh"])),
					])
					.optional(),
				requiredReasoningEffort: D.z.boolean().optional(),
				preserveReasoning: D.z.boolean().optional(),
				supportedParameters: D.z.array(hU).optional(),
				inputPrice: D.z.number().optional(),
				outputPrice: D.z.number().optional(),
				cacheWritesPrice: D.z.number().optional(),
				cacheReadsPrice: D.z.number().optional(),
				description: D.z.string().optional(),
				reasoningEffort: hQ.optional(),
				minTokensPerCachePoint: D.z.number().optional(),
				maxCachePoints: D.z.number().optional(),
				cachableFields: D.z.array(D.z.string()).optional(),
				deprecated: D.z.boolean().optional(),
				isStealthModel: D.z.boolean().optional(),
				isFree: D.z.boolean().optional(),
				excludedTools: D.z.array(D.z.string()).optional(),
				includedTools: D.z.array(D.z.string()).optional(),
				tiers: D.z
					.array(
						D.z.object({
							name: hT.optional(),
							contextWindow: D.z.number(),
							inputPrice: D.z.number().optional(),
							outputPrice: D.z.number().optional(),
							cacheWritesPrice: D.z.number().optional(),
							cacheReadsPrice: D.z.number().optional(),
						}),
					)
					.optional(),
			}),
			hW = D.z.object({
				codebaseIndexEnabled: D.z.boolean().optional(),
				codebaseIndexQdrantUrl: D.z.string().optional(),
				codebaseIndexEmbedderProvider: D.z
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
				codebaseIndexEmbedderBaseUrl: D.z.string().optional(),
				codebaseIndexEmbedderModelId: D.z.string().optional(),
				codebaseIndexEmbedderModelDimension: D.z.number().optional(),
				codebaseIndexSearchMinScore: D.z.number().min(0).max(1).optional(),
				codebaseIndexSearchMaxResults: D.z.number().min(10).max(200).optional(),
				codebaseIndexOpenAiCompatibleBaseUrl: D.z.string().optional(),
				codebaseIndexOpenAiCompatibleModelDimension: D.z.number().optional(),
				codebaseIndexBedrockRegion: D.z.string().optional(),
				codebaseIndexBedrockProfile: D.z.string().optional(),
				codebaseIndexOpenRouterSpecificProvider: D.z.string().optional(),
			}),
			hX = D.z.object({
				openai: D.z.record(D.z.string(), D.z.object({ dimension: D.z.number() })).optional(),
				ollama: D.z.record(D.z.string(), D.z.object({ dimension: D.z.number() })).optional(),
				"openai-compatible": D.z.record(D.z.string(), D.z.object({ dimension: D.z.number() })).optional(),
				gemini: D.z.record(D.z.string(), D.z.object({ dimension: D.z.number() })).optional(),
				mistral: D.z.record(D.z.string(), D.z.object({ dimension: D.z.number() })).optional(),
				"vercel-ai-gateway": D.z.record(D.z.string(), D.z.object({ dimension: D.z.number() })).optional(),
				openrouter: D.z.record(D.z.string(), D.z.object({ dimension: D.z.number() })).optional(),
				bedrock: D.z.record(D.z.string(), D.z.object({ dimension: D.z.number() })).optional(),
			}),
			hY = D.z.object({
				codeIndexOpenAiKey: D.z.string().optional(),
				codeIndexQdrantApiKey: D.z.string().optional(),
				codebaseIndexOpenAiCompatibleBaseUrl: D.z.string().optional(),
				codebaseIndexOpenAiCompatibleApiKey: D.z.string().optional(),
				codebaseIndexOpenAiCompatibleModelDimension: D.z.number().optional(),
				codebaseIndexGeminiApiKey: D.z.string().optional(),
				codebaseIndexMistralApiKey: D.z.string().optional(),
				codebaseIndexVercelAiGatewayApiKey: D.z.string().optional(),
				codebaseIndexOpenRouterApiKey: D.z.string().optional(),
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
		].sort((a, b) => a.value.localeCompare(b.value))
		var hZ = D.z.object({
				input: D.z.string(),
				output: D.z.string(),
				input_cache_read: D.z.string().optional(),
				input_cache_write: D.z.string().optional(),
			}),
			h$ = D.z.object({
				id: D.z.string(),
				object: D.z.literal("model"),
				created: D.z.number(),
				owned_by: D.z.string(),
				name: D.z.string(),
				description: D.z.string(),
				context_window: D.z.number(),
				max_tokens: D.z.number(),
				type: D.z.literal("language"),
				tags: D.z.array(D.z.string()).optional(),
				pricing: hZ,
				deprecated: D.z.boolean().optional(),
				default_temperature: D.z.number().optional(),
				settings: D.z.record(D.z.string(), D.z.unknown()).optional(),
				versionedSettings: D.z.record(D.z.string(), D.z.record(D.z.string(), D.z.unknown())).optional(),
			})
		D.z.object({ object: D.z.literal("list"), data: D.z.array(h$) })
		var h_ = {
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
		h_["MiniMax-M2.5"]
		var h0 = [
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
			h1 = D.z.enum(h0),
			h2 = D.z.enum([
				"cerebras",
				"chutes",
				"deepinfra",
				"doubao",
				"featherless",
				"groq",
				"huggingface",
				"io-intelligence",
			]),
			h3 = D.z.union([h1, h2]),
			h4 = D.z.object({
				id: D.z.string(),
				name: D.z.string(),
				apiProvider: h3.optional(),
				modelId: D.z.string().optional(),
			}),
			h5 = D.z.object({
				includeMaxTokens: D.z.boolean().optional(),
				todoListEnabled: D.z.boolean().optional(),
				modelTemperature: D.z.number().nullish(),
				rateLimitSeconds: D.z.number().optional(),
				consecutiveMistakeLimit: D.z.number().min(0).optional(),
				enableReasoningEffort: D.z.boolean().optional(),
				reasoningEffort: hR.optional(),
				modelMaxTokens: D.z.number().optional(),
				modelMaxThinkingTokens: D.z.number().optional(),
				verbosity: hS.optional(),
			}),
			h6 = h5.extend({ apiModelId: D.z.string().optional() }),
			h7 = h6.extend({
				apiKey: D.z.string().optional(),
				anthropicBaseUrl: D.z.string().optional(),
				anthropicUseAuthToken: D.z.boolean().optional(),
				anthropicBeta1MContext: D.z.boolean().optional(),
			}),
			h8 = h5.extend({
				openRouterApiKey: D.z.string().optional(),
				openRouterModelId: D.z.string().optional(),
				openRouterBaseUrl: D.z.string().optional(),
				openRouterSpecificProvider: D.z.string().optional(),
			}),
			h9 = h6.extend({
				awsAccessKey: D.z.string().optional(),
				awsSecretKey: D.z.string().optional(),
				awsSessionToken: D.z.string().optional(),
				awsRegion: D.z.string().optional(),
				awsUseCrossRegionInference: D.z.boolean().optional(),
				awsUseGlobalInference: D.z.boolean().optional(),
				awsUsePromptCache: D.z.boolean().optional(),
				awsProfile: D.z.string().optional(),
				awsUseProfile: D.z.boolean().optional(),
				awsApiKey: D.z.string().optional(),
				awsUseApiKey: D.z.boolean().optional(),
				awsCustomArn: D.z.string().optional(),
				awsModelContextWindow: D.z.number().optional(),
				awsBedrockEndpointEnabled: D.z.boolean().optional(),
				awsBedrockEndpoint: D.z.string().optional(),
				awsBedrock1MContext: D.z.boolean().optional(),
				awsBedrockServiceTier: D.z.enum(["STANDARD", "FLEX", "PRIORITY"]).optional(),
			}),
			ia = h6.extend({
				vertexKeyFile: D.z.string().optional(),
				vertexJsonCredentials: D.z.string().optional(),
				vertexProjectId: D.z.string().optional(),
				vertexRegion: D.z.string().optional(),
				vertex1MContext: D.z.boolean().optional(),
			}),
			ib = h5.extend({
				openAiBaseUrl: D.z.string().optional(),
				openAiApiKey: D.z.string().optional(),
				openAiR1FormatEnabled: D.z.boolean().optional(),
				openAiModelId: D.z.string().optional(),
				openAiCustomModelInfo: hV.nullish(),
				openAiUseAzure: D.z.boolean().optional(),
				azureApiVersion: D.z.string().optional(),
				openAiStreamingEnabled: D.z.boolean().optional(),
				openAiHostHeader: D.z.string().optional(),
				openAiHeaders: D.z.record(D.z.string(), D.z.string()).optional(),
			}),
			ic = h5.extend({
				ollamaModelId: D.z.string().optional(),
				ollamaBaseUrl: D.z.string().optional(),
				ollamaApiKey: D.z.string().optional(),
				ollamaNumCtx: D.z.number().int().min(128).optional(),
			}),
			id = h5.extend({
				vsCodeLmModelSelector: D.z
					.object({
						vendor: D.z.string().optional(),
						family: D.z.string().optional(),
						version: D.z.string().optional(),
						id: D.z.string().optional(),
					})
					.optional(),
			}),
			ie = h5.extend({
				lmStudioModelId: D.z.string().optional(),
				lmStudioBaseUrl: D.z.string().optional(),
				lmStudioDraftModelId: D.z.string().optional(),
				lmStudioSpeculativeDecodingEnabled: D.z.boolean().optional(),
			}),
			ig = h6.extend({ geminiApiKey: D.z.string().optional(), googleGeminiBaseUrl: D.z.string().optional() }),
			ih = h6.extend({
				geminiCliOAuthPath: D.z.string().optional(),
				geminiCliProjectId: D.z.string().optional(),
			}),
			ii = h6.extend({}),
			ij = h6.extend({
				openAiNativeApiKey: D.z.string().optional(),
				openAiNativeBaseUrl: D.z.string().optional(),
				openAiNativeServiceTier: hT.optional(),
			}),
			ik = h6.extend({ mistralApiKey: D.z.string().optional(), mistralCodestralUrl: D.z.string().optional() }),
			il = h6.extend({ deepSeekBaseUrl: D.z.string().optional(), deepSeekApiKey: D.z.string().optional() }),
			im = h6.extend({
				moonshotBaseUrl: D.z
					.union([D.z.literal("https://api.moonshot.ai/v1"), D.z.literal("https://api.moonshot.cn/v1")])
					.optional(),
				moonshotApiKey: D.z.string().optional(),
			}),
			io = h6.extend({
				minimaxBaseUrl: D.z
					.union([D.z.literal("https://api.minimax.io/v1"), D.z.literal("https://api.minimaxi.com/v1")])
					.optional(),
				minimaxApiKey: D.z.string().optional(),
			}),
			ip = h5.extend({
				requestyBaseUrl: D.z.string().optional(),
				requestyApiKey: D.z.string().optional(),
				requestyModelId: D.z.string().optional(),
			}),
			iq = h5.extend({ unboundApiKey: D.z.string().optional(), unboundModelId: D.z.string().optional() }),
			ir = h5.extend({ fakeAi: D.z.unknown().optional() }),
			is = h6.extend({ xaiApiKey: D.z.string().optional() }),
			it = h5.extend({
				litellmBaseUrl: D.z.string().optional(),
				litellmApiKey: D.z.string().optional(),
				litellmModelId: D.z.string().optional(),
				litellmUsePromptCache: D.z.boolean().optional(),
			}),
			iu = h6.extend({ sambaNovaApiKey: D.z.string().optional() }),
			iv = D.z.enum(["international_coding", "china_coding", "international_api", "china_api"]),
			iw = h6.extend({ zaiApiKey: D.z.string().optional(), zaiApiLine: iv.optional() }),
			ix = h6.extend({ fireworksApiKey: D.z.string().optional() }),
			iy = h6.extend({ qwenCodeOauthPath: D.z.string().optional() }),
			iz = h6.extend({ rooApiKey: D.z.string().optional() }),
			iA = h5.extend({
				vercelAiGatewayApiKey: D.z.string().optional(),
				vercelAiGatewayModelId: D.z.string().optional(),
			}),
			iB = h6.extend({ basetenApiKey: D.z.string().optional() }),
			iC = D.z.object({ apiProvider: D.z.undefined() }),
			iD = D.z.discriminatedUnion("apiProvider", [
				h7.merge(D.z.object({ apiProvider: D.z.literal("anthropic") })),
				h8.merge(D.z.object({ apiProvider: D.z.literal("openrouter") })),
				h9.merge(D.z.object({ apiProvider: D.z.literal("bedrock") })),
				ia.merge(D.z.object({ apiProvider: D.z.literal("vertex") })),
				ib.merge(D.z.object({ apiProvider: D.z.literal("openai") })),
				ic.merge(D.z.object({ apiProvider: D.z.literal("ollama") })),
				id.merge(D.z.object({ apiProvider: D.z.literal("vscode-lm") })),
				ie.merge(D.z.object({ apiProvider: D.z.literal("lmstudio") })),
				ig.merge(D.z.object({ apiProvider: D.z.literal("gemini") })),
				ih.merge(D.z.object({ apiProvider: D.z.literal("gemini-cli") })),
				ii.merge(D.z.object({ apiProvider: D.z.literal("openai-codex") })),
				ij.merge(D.z.object({ apiProvider: D.z.literal("openai-native") })),
				ik.merge(D.z.object({ apiProvider: D.z.literal("mistral") })),
				il.merge(D.z.object({ apiProvider: D.z.literal("deepseek") })),
				im.merge(D.z.object({ apiProvider: D.z.literal("moonshot") })),
				io.merge(D.z.object({ apiProvider: D.z.literal("minimax") })),
				ip.merge(D.z.object({ apiProvider: D.z.literal("requesty") })),
				iq.merge(D.z.object({ apiProvider: D.z.literal("unbound") })),
				ir.merge(D.z.object({ apiProvider: D.z.literal("fake-ai") })),
				is.merge(D.z.object({ apiProvider: D.z.literal("xai") })),
				iB.merge(D.z.object({ apiProvider: D.z.literal("baseten") })),
				it.merge(D.z.object({ apiProvider: D.z.literal("litellm") })),
				iu.merge(D.z.object({ apiProvider: D.z.literal("sambanova") })),
				iw.merge(D.z.object({ apiProvider: D.z.literal("zai") })),
				ix.merge(D.z.object({ apiProvider: D.z.literal("fireworks") })),
				iy.merge(D.z.object({ apiProvider: D.z.literal("qwen-code") })),
				iz.merge(D.z.object({ apiProvider: D.z.literal("roo") })),
				iA.merge(D.z.object({ apiProvider: D.z.literal("vercel-ai-gateway") })),
				iC,
			]),
			iE = D.z.object({
				apiProvider: h3.optional(),
				...h7.shape,
				...h8.shape,
				...h9.shape,
				...ia.shape,
				...ib.shape,
				...ic.shape,
				...id.shape,
				...ie.shape,
				...ig.shape,
				...ih.shape,
				...ii.shape,
				...ij.shape,
				...ik.shape,
				...il.shape,
				...im.shape,
				...io.shape,
				...ip.shape,
				...iq.shape,
				...ir.shape,
				...is.shape,
				...iB.shape,
				...it.shape,
				...iu.shape,
				...iw.shape,
				...ix.shape,
				...iy.shape,
				...iz.shape,
				...iA.shape,
				...hY.shape,
			}),
			iF = iE.extend({ id: D.z.string().optional() })
		iD.and(D.z.object({ id: D.z.string().optional() }))
		var iG = iE.keyof().options
		Object.keys(h_)
		var iH = D.z.object({
			id: D.z.string(),
			rootTaskId: D.z.string().optional(),
			parentTaskId: D.z.string().optional(),
			number: D.z.number(),
			ts: D.z.number(),
			task: D.z.string(),
			tokensIn: D.z.number(),
			tokensOut: D.z.number(),
			cacheWrites: D.z.number().optional(),
			cacheReads: D.z.number().optional(),
			totalCost: D.z.number(),
			size: D.z.number().optional(),
			workspace: D.z.string().optional(),
			mode: D.z.string().optional(),
			apiConfigName: D.z.string().optional(),
			status: D.z.enum(["active", "completed", "delegated"]).optional(),
			delegatedToId: D.z.string().optional(),
			childIds: D.z.array(D.z.string()).optional(),
			awaitingChildId: D.z.string().optional(),
			completedByChildId: D.z.string().optional(),
			completionResultSummary: D.z.string().optional(),
		})
		D.z.enum(["preventFocusDisruption", "imageGeneration", "runSlashCommand", "customTools"])
		var iI = D.z.object({
				preventFocusDisruption: D.z.boolean().optional(),
				imageGeneration: D.z.boolean().optional(),
				runSlashCommand: D.z.boolean().optional(),
				customTools: D.z.boolean().optional(),
			}),
			iJ = D.z.enum([
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
			iK = D.z.enum([
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
			iL = D.z.object({ icon: D.z.string().optional(), text: D.z.string().optional() }),
			iM = D.z.object({
				cost: D.z.number(),
				prevContextTokens: D.z.number(),
				newContextTokens: D.z.number(),
				summary: D.z.string(),
				condenseId: D.z.string().optional(),
			}),
			iN = D.z.object({
				truncationId: D.z.string(),
				messagesRemoved: D.z.number(),
				prevContextTokens: D.z.number(),
				newContextTokens: D.z.number(),
			}),
			iO = D.z.object({
				ts: D.z.number(),
				type: D.z.union([D.z.literal("ask"), D.z.literal("say")]),
				ask: iJ.optional(),
				say: iK.optional(),
				text: D.z.string().optional(),
				images: D.z.array(D.z.string()).optional(),
				partial: D.z.boolean().optional(),
				reasoning: D.z.string().optional(),
				conversationHistoryIndex: D.z.number().optional(),
				checkpoint: D.z.record(D.z.string(), D.z.unknown()).optional(),
				progressStatus: iL.optional(),
				contextCondense: iM.optional(),
				contextTruncation: iN.optional(),
				isProtected: D.z.boolean().optional(),
				apiProtocol: D.z.union([D.z.literal("openai"), D.z.literal("anthropic")]).optional(),
				isAnswered: D.z.boolean().optional(),
			}),
			iP = D.z.object({
				totalTokensIn: D.z.number(),
				totalTokensOut: D.z.number(),
				totalCacheWrites: D.z.number().optional(),
				totalCacheReads: D.z.number().optional(),
				totalCost: D.z.number(),
				contextTokens: D.z.number(),
			}),
			iQ = D.z.object({
				timestamp: D.z.number(),
				id: D.z.string(),
				text: D.z.string(),
				images: D.z.array(D.z.string()).optional(),
			}),
			iR = D.z.enum(["unset", "enabled", "disabled"]),
			iS =
				(((c = iS || {}).TASK_CREATED = "Task Created"),
				(c.TASK_RESTARTED = "Task Reopened"),
				(c.TASK_COMPLETED = "Task Completed"),
				(c.TASK_MESSAGE = "Task Message"),
				(c.TASK_CONVERSATION_MESSAGE = "Conversation Message"),
				(c.LLM_COMPLETION = "LLM Completion"),
				(c.MODE_SWITCH = "Mode Switched"),
				(c.MODE_SELECTOR_OPENED = "Mode Selector Opened"),
				(c.TOOL_USED = "Tool Used"),
				(c.CHECKPOINT_CREATED = "Checkpoint Created"),
				(c.CHECKPOINT_RESTORED = "Checkpoint Restored"),
				(c.CHECKPOINT_DIFFED = "Checkpoint Diffed"),
				(c.TAB_SHOWN = "Tab Shown"),
				(c.MODE_SETTINGS_CHANGED = "Mode Setting Changed"),
				(c.CUSTOM_MODE_CREATED = "Custom Mode Created"),
				(c.CONTEXT_CONDENSED = "Context Condensed"),
				(c.SLIDING_WINDOW_TRUNCATION = "Sliding Window Truncation"),
				(c.CODE_ACTION_USED = "Code Action Used"),
				(c.PROMPT_ENHANCED = "Prompt Enhanced"),
				(c.TITLE_BUTTON_CLICKED = "Title Button Clicked"),
				(c.AUTHENTICATION_INITIATED = "Authentication Initiated"),
				(c.MARKETPLACE_ITEM_INSTALLED = "Marketplace Item Installed"),
				(c.MARKETPLACE_ITEM_REMOVED = "Marketplace Item Removed"),
				(c.MARKETPLACE_TAB_VIEWED = "Marketplace Tab Viewed"),
				(c.MARKETPLACE_INSTALL_BUTTON_CLICKED = "Marketplace Install Button Clicked"),
				(c.SHARE_BUTTON_CLICKED = "Share Button Clicked"),
				(c.SHARE_ORGANIZATION_CLICKED = "Share Organization Clicked"),
				(c.SHARE_PUBLIC_CLICKED = "Share Public Clicked"),
				(c.SHARE_CONNECT_TO_CLOUD_CLICKED = "Share Connect To Cloud Clicked"),
				(c.ACCOUNT_CONNECT_CLICKED = "Account Connect Clicked"),
				(c.ACCOUNT_CONNECT_SUCCESS = "Account Connect Success"),
				(c.ACCOUNT_LOGOUT_CLICKED = "Account Logout Clicked"),
				(c.ACCOUNT_LOGOUT_SUCCESS = "Account Logout Success"),
				(c.FEATURED_PROVIDER_CLICKED = "Featured Provider Clicked"),
				(c.UPSELL_DISMISSED = "Upsell Dismissed"),
				(c.UPSELL_CLICKED = "Upsell Clicked"),
				(c.SCHEMA_VALIDATION_ERROR = "Schema Validation Error"),
				(c.DIFF_APPLICATION_ERROR = "Diff Application Error"),
				(c.SHELL_INTEGRATION_ERROR = "Shell Integration Error"),
				(c.CONSECUTIVE_MISTAKE_ERROR = "Consecutive Mistake Error"),
				(c.CODE_INDEX_ERROR = "Code Index Error"),
				(c.TELEMETRY_SETTINGS_CHANGED = "Telemetry Settings Changed"),
				(c.MODEL_CACHE_EMPTY_RESPONSE = "Model Cache Empty Response"),
				(c.READ_FILE_LEGACY_FORMAT_USED = "Read File Legacy Format Used"),
				c),
			iT = D.z.object({
				appName: D.z.string(),
				appVersion: D.z.string(),
				vscodeVersion: D.z.string(),
				platform: D.z.string(),
				editorName: D.z.string(),
				hostname: D.z.string().optional(),
			}),
			iU = D.z.object({ language: D.z.string(), mode: D.z.string() }),
			iV = D.z.object({ cloudIsAuthenticated: D.z.boolean().optional() }),
			iW = D.z.object({ ...iT.shape, ...iU.shape, ...iV.shape }),
			iX = D.z.object({
				taskId: D.z.string().optional(),
				parentTaskId: D.z.string().optional(),
				apiProvider: D.z.enum(h0).optional(),
				modelId: D.z.string().optional(),
				diffStrategy: D.z.string().optional(),
				isSubtask: D.z.boolean().optional(),
				todos: D.z
					.object({
						total: D.z.number(),
						completed: D.z.number(),
						inProgress: D.z.number(),
						pending: D.z.number(),
					})
					.optional(),
			}),
			iY = D.z.object({
				repositoryUrl: D.z.string().optional(),
				repositoryName: D.z.string().optional(),
				defaultBranch: D.z.string().optional(),
			}),
			iZ = D.z.object({ ...iW.shape, ...iX.shape, ...iY.shape })
		D.z.discriminatedUnion("type", [
			D.z.object({
				type: D.z.enum([
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
				properties: iZ,
			}),
			D.z.object({
				type: D.z.literal("Telemetry Settings Changed"),
				properties: D.z.object({ ...iZ.shape, previousSetting: iR, newSetting: iR }),
			}),
			D.z.object({
				type: D.z.literal("Task Message"),
				properties: D.z.object({ ...iZ.shape, taskId: D.z.string(), message: iO }),
			}),
			D.z.object({
				type: D.z.literal("LLM Completion"),
				properties: D.z.object({
					...iZ.shape,
					inputTokens: D.z.number(),
					outputTokens: D.z.number(),
					cacheReadTokens: D.z.number().optional(),
					cacheWriteTokens: D.z.number().optional(),
					cost: D.z.number().optional(),
				}),
			}),
		])
		var i$ = D.z.enum(["read", "edit", "command", "mcp", "modes"]),
			i_ = ["browser"],
			i0 = D.z.enum([
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
			i1 = D.z.record(i0, D.z.object({ attempts: D.z.number(), failures: D.z.number() })),
			i2 = D.z.object({
				fileRegex: D.z
					.string()
					.optional()
					.refine(
						(a) => {
							if (!a) return !0
							try {
								return new RegExp(a), !0
							} catch {
								return !1
							}
						},
						{ message: "Invalid regular expression pattern" },
					),
				description: D.z.string().optional(),
			}),
			i3 = D.z.union([i$, D.z.tuple([i$, i2])]),
			i4 = D.z.array(i3).refine(
				(a) => {
					let b = new Set()
					return a.every((a) => {
						let c = Array.isArray(a) ? a[0] : a
						return !b.has(c) && (b.add(c), !0)
					})
				},
				{ message: "Duplicate groups are not allowed" },
			),
			i5 = D.z.preprocess(
				(a) =>
					Array.isArray(a)
						? a.filter(
								(a) =>
									!("string" == typeof a
										? i_.includes(a)
										: !!Array.isArray(a) &&
											a.length >= 1 &&
											"string" == typeof a[0] &&
											i_.includes(a[0])),
							)
						: a,
				i4,
			),
			i6 = D.z.object({
				slug: D.z.string().regex(/^[a-zA-Z0-9-]+$/, "Slug must contain only letters numbers and dashes"),
				name: D.z.string().min(1, "Name is required"),
				roleDefinition: D.z.string().min(1, "Role definition is required"),
				whenToUse: D.z.string().optional(),
				description: D.z.string().optional(),
				customInstructions: D.z.string().optional(),
				groups: i5,
				source: D.z.enum(["global", "project"]).optional(),
			})
		D.z.object({
			customModes: D.z.array(i6).refine(
				(a) => {
					let b = new Set()
					return a.every((a) => !b.has(a.slug) && (b.add(a.slug), !0))
				},
				{ message: "Duplicate mode slugs are not allowed" },
			),
		})
		var i7 = D.z.object({
				roleDefinition: D.z.string().optional(),
				whenToUse: D.z.string().optional(),
				description: D.z.string().optional(),
				customInstructions: D.z.string().optional(),
			}),
			i8 = D.z.record(D.z.string(), i7.optional()),
			i9 = D.z.record(D.z.string(), D.z.string().optional()),
			ja = D.z.enum([
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
			jb = D.z.object({
				currentApiConfigName: D.z.string().optional(),
				listApiConfigMeta: D.z.array(h4).optional(),
				pinnedApiConfigs: D.z.record(D.z.string(), D.z.boolean()).optional(),
				lastShownAnnouncementId: D.z.string().optional(),
				customInstructions: D.z.string().optional(),
				taskHistory: D.z.array(iH).optional(),
				dismissedUpsells: D.z.array(D.z.string()).optional(),
				imageGenerationProvider: D.z.enum(["openrouter", "roo"]).optional(),
				openRouterImageApiKey: D.z.string().optional(),
				openRouterImageGenerationSelectedModel: D.z.string().optional(),
				customCondensingPrompt: D.z.string().optional(),
				autoApprovalEnabled: D.z.boolean().optional(),
				alwaysAllowReadOnly: D.z.boolean().optional(),
				alwaysAllowReadOnlyOutsideWorkspace: D.z.boolean().optional(),
				alwaysAllowWrite: D.z.boolean().optional(),
				alwaysAllowWriteOutsideWorkspace: D.z.boolean().optional(),
				alwaysAllowWriteProtected: D.z.boolean().optional(),
				writeDelayMs: D.z.number().min(0).optional(),
				requestDelaySeconds: D.z.number().optional(),
				alwaysAllowMcp: D.z.boolean().optional(),
				alwaysAllowModeSwitch: D.z.boolean().optional(),
				alwaysAllowSubtasks: D.z.boolean().optional(),
				alwaysAllowExecute: D.z.boolean().optional(),
				alwaysAllowFollowupQuestions: D.z.boolean().optional(),
				followupAutoApproveTimeoutMs: D.z.number().optional(),
				allowedCommands: D.z.array(D.z.string()).optional(),
				deniedCommands: D.z.array(D.z.string()).optional(),
				commandExecutionTimeout: D.z.number().optional(),
				commandTimeoutAllowlist: D.z.array(D.z.string()).optional(),
				preventCompletionWithOpenTodos: D.z.boolean().optional(),
				allowedMaxRequests: D.z.number().nullish(),
				allowedMaxCost: D.z.number().nullish(),
				autoCondenseContext: D.z.boolean().optional(),
				autoCondenseContextPercent: D.z.number().optional(),
				includeCurrentTime: D.z.boolean().optional(),
				includeCurrentCost: D.z.boolean().optional(),
				maxGitStatusFiles: D.z.number().optional(),
				includeDiagnosticMessages: D.z.boolean().optional(),
				maxDiagnosticMessages: D.z.number().optional(),
				enableCheckpoints: D.z.boolean().optional(),
				checkpointTimeout: D.z.number().int().min(10).max(60).optional(),
				ttsEnabled: D.z.boolean().optional(),
				ttsSpeed: D.z.number().optional(),
				soundEnabled: D.z.boolean().optional(),
				soundVolume: D.z.number().optional(),
				maxOpenTabsContext: D.z.number().optional(),
				maxWorkspaceFiles: D.z.number().optional(),
				showRooIgnoredFiles: D.z.boolean().optional(),
				enableSubfolderRules: D.z.boolean().optional(),
				maxImageFileSize: D.z.number().optional(),
				maxTotalImageSize: D.z.number().optional(),
				terminalOutputPreviewSize: D.z.enum(["small", "medium", "large"]).optional(),
				terminalShellIntegrationTimeout: D.z.number().optional(),
				terminalShellIntegrationDisabled: D.z.boolean().optional(),
				terminalCommandDelay: D.z.number().optional(),
				terminalPowershellCounter: D.z.boolean().optional(),
				terminalZshClearEolMark: D.z.boolean().optional(),
				terminalZshOhMy: D.z.boolean().optional(),
				terminalZshP10k: D.z.boolean().optional(),
				terminalZdotdir: D.z.boolean().optional(),
				diagnosticsEnabled: D.z.boolean().optional(),
				rateLimitSeconds: D.z.number().optional(),
				experiments: iI.optional(),
				codebaseIndexModels: hX.optional(),
				codebaseIndexConfig: hW.optional(),
				language: ja.optional(),
				telemetrySetting: iR.optional(),
				mcpEnabled: D.z.boolean().optional(),
				mode: D.z.string().optional(),
				modeApiConfigs: D.z.record(D.z.string(), D.z.string()).optional(),
				customModes: D.z.array(i6).optional(),
				customModePrompts: i8.optional(),
				customSupportPrompts: i9.optional(),
				enhancementApiConfigId: D.z.string().optional(),
				includeTaskHistoryInEnhance: D.z.boolean().optional(),
				historyPreviewCollapsed: D.z.boolean().optional(),
				reasoningBlockCollapsed: D.z.boolean().optional(),
				enterBehavior: D.z.enum(["send", "newline"]).optional(),
				profileThresholds: D.z.record(D.z.string(), D.z.number()).optional(),
				hasOpenedModeSelector: D.z.boolean().optional(),
				lastModeExportPath: D.z.string().optional(),
				lastModeImportPath: D.z.string().optional(),
				lastSettingsExportPath: D.z.string().optional(),
				lastTaskExportPath: D.z.string().optional(),
				lastImageSavePath: D.z.string().optional(),
				worktreeAutoOpenPath: D.z.string().optional(),
				showWorktreesInHomeScreen: D.z.boolean().optional(),
				disabledTools: D.z.array(i0).optional(),
			}),
			jc = jb.keyof().options,
			jd = iE.merge(jb),
			je = [
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
			jf = ["openRouterImageApiKey"]
		;[...jc, ...iG].filter((a) => !(je.includes(a) || jf.includes(a)))
		var jg = D.z.enum(["start", "message", "cancel", "ping", "shutdown"]),
			jh = D.z.object({ command: jg, requestId: D.z.string().min(1) }),
			ji = jh.extend({
				command: D.z.literal("start"),
				prompt: D.z.string(),
				images: D.z.array(D.z.string()).optional(),
				configuration: jd.optional(),
			}),
			jj = jh.extend({
				command: D.z.literal("message"),
				prompt: D.z.string(),
				images: D.z.array(D.z.string()).optional(),
			}),
			jk = jh.extend({ command: D.z.literal("cancel") }),
			jl = jh.extend({ command: D.z.literal("ping") }),
			jm = jh.extend({ command: D.z.literal("shutdown") })
		D.z.discriminatedUnion("command", [ji, jj, jk, jl, jm]), D.z.enum(["text", "json", "stream-json"])
		var jn = D.z.enum([
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
			jo = D.z.enum(["ack", "done", "error"]),
			jp = D.z.object({
				id: D.z.string().min(1),
				text: D.z.string().optional(),
				imageCount: D.z.number().optional(),
				timestamp: D.z.number().optional(),
			}),
			jq = D.z.object({ name: D.z.string(), input: D.z.record(D.z.unknown()).optional() }),
			jr = D.z.object({
				name: D.z.string(),
				output: D.z.string().optional(),
				error: D.z.string().optional(),
				exitCode: D.z.number().optional(),
			}),
			js = D.z.object({
				totalCost: D.z.number().optional(),
				inputTokens: D.z.number().optional(),
				outputTokens: D.z.number().optional(),
				cacheWrites: D.z.number().optional(),
				cacheReads: D.z.number().optional(),
			}),
			jt = D.z
				.object({
					type: jn.optional(),
					subtype: D.z.string().optional(),
					requestId: D.z.string().optional(),
					command: jg.optional(),
					taskId: D.z.string().optional(),
					code: D.z.string().optional(),
					content: D.z.string().optional(),
					success: D.z.boolean().optional(),
					id: D.z.number().optional(),
					done: D.z.boolean().optional(),
					queueDepth: D.z.number().optional(),
					queue: D.z.array(jp).optional(),
					schemaVersion: D.z.number().optional(),
					protocol: D.z.string().optional(),
					capabilities: D.z.array(D.z.string()).optional(),
					tool_use: jq.optional(),
					tool_result: jr.optional(),
					cost: js.optional(),
				})
				.passthrough()
		jt.extend({ type: D.z.literal("control"), subtype: jo, requestId: D.z.string().min(1) }),
			D.z.object({
				type: D.z.literal("result"),
				success: D.z.boolean(),
				content: D.z.string().optional(),
				cost: js.optional(),
				events: D.z.array(jt),
			})
		var ju =
				(((d = ju || {}).TaskCreated = "taskCreated"),
				(d.TaskStarted = "taskStarted"),
				(d.TaskCompleted = "taskCompleted"),
				(d.TaskAborted = "taskAborted"),
				(d.TaskFocused = "taskFocused"),
				(d.TaskUnfocused = "taskUnfocused"),
				(d.TaskActive = "taskActive"),
				(d.TaskInteractive = "taskInteractive"),
				(d.TaskResumable = "taskResumable"),
				(d.TaskIdle = "taskIdle"),
				(d.TaskPaused = "taskPaused"),
				(d.TaskUnpaused = "taskUnpaused"),
				(d.TaskSpawned = "taskSpawned"),
				(d.TaskDelegated = "taskDelegated"),
				(d.TaskDelegationCompleted = "taskDelegationCompleted"),
				(d.TaskDelegationResumed = "taskDelegationResumed"),
				(d.Message = "message"),
				(d.TaskModeSwitched = "taskModeSwitched"),
				(d.TaskAskResponded = "taskAskResponded"),
				(d.TaskUserMessage = "taskUserMessage"),
				(d.QueuedMessagesUpdated = "queuedMessagesUpdated"),
				(d.TaskTokenUsageUpdated = "taskTokenUsageUpdated"),
				(d.TaskToolFailed = "taskToolFailed"),
				(d.ModeChanged = "modeChanged"),
				(d.ProviderProfileChanged = "providerProfileChanged"),
				(d.CommandsResponse = "commandsResponse"),
				(d.ModesResponse = "modesResponse"),
				(d.ModelsResponse = "modelsResponse"),
				(d.EvalPass = "evalPass"),
				(d.EvalFail = "evalFail"),
				d),
			jv = D.z.object({
				taskCreated: D.z.tuple([D.z.string()]),
				taskStarted: D.z.tuple([D.z.string()]),
				taskCompleted: D.z.tuple([D.z.string(), iP, i1, D.z.object({ isSubtask: D.z.boolean() })]),
				taskAborted: D.z.tuple([D.z.string()]),
				taskFocused: D.z.tuple([D.z.string()]),
				taskUnfocused: D.z.tuple([D.z.string()]),
				taskActive: D.z.tuple([D.z.string()]),
				taskInteractive: D.z.tuple([D.z.string()]),
				taskResumable: D.z.tuple([D.z.string()]),
				taskIdle: D.z.tuple([D.z.string()]),
				taskPaused: D.z.tuple([D.z.string()]),
				taskUnpaused: D.z.tuple([D.z.string()]),
				taskSpawned: D.z.tuple([D.z.string(), D.z.string()]),
				taskDelegated: D.z.tuple([D.z.string(), D.z.string()]),
				taskDelegationCompleted: D.z.tuple([D.z.string(), D.z.string(), D.z.string()]),
				taskDelegationResumed: D.z.tuple([D.z.string(), D.z.string()]),
				message: D.z.tuple([
					D.z.object({
						taskId: D.z.string(),
						action: D.z.union([D.z.literal("created"), D.z.literal("updated")]),
						message: iO,
					}),
				]),
				taskModeSwitched: D.z.tuple([D.z.string(), D.z.string()]),
				taskAskResponded: D.z.tuple([D.z.string()]),
				taskUserMessage: D.z.tuple([D.z.string()]),
				queuedMessagesUpdated: D.z.tuple([D.z.string(), D.z.array(iQ)]),
				taskToolFailed: D.z.tuple([D.z.string(), i0, D.z.string()]),
				taskTokenUsageUpdated: D.z.tuple([D.z.string(), iP, i1]),
				modeChanged: D.z.tuple([D.z.string()]),
				providerProfileChanged: D.z.tuple([D.z.object({ name: D.z.string(), provider: D.z.string() })]),
				commandsResponse: D.z.tuple([
					D.z.array(
						D.z.object({
							name: D.z.string(),
							source: D.z.enum(["global", "project", "built-in"]),
							filePath: D.z.string().optional(),
							description: D.z.string().optional(),
							argumentHint: D.z.string().optional(),
						}),
					),
				]),
				modesResponse: D.z.tuple([D.z.array(D.z.object({ slug: D.z.string(), name: D.z.string() }))]),
				modelsResponse: D.z.tuple([D.z.record(D.z.string(), hV)]),
			}),
			jw = D.z.discriminatedUnion("eventName", [
				D.z.object({
					eventName: D.z.literal("taskCreated"),
					payload: jv.shape.taskCreated,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("taskStarted"),
					payload: jv.shape.taskStarted,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("taskCompleted"),
					payload: jv.shape.taskCompleted,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("taskAborted"),
					payload: jv.shape.taskAborted,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("taskFocused"),
					payload: jv.shape.taskFocused,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("taskUnfocused"),
					payload: jv.shape.taskUnfocused,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("taskActive"),
					payload: jv.shape.taskActive,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("taskInteractive"),
					payload: jv.shape.taskInteractive,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("taskResumable"),
					payload: jv.shape.taskResumable,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("taskIdle"),
					payload: jv.shape.taskIdle,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("taskPaused"),
					payload: jv.shape.taskPaused,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("taskUnpaused"),
					payload: jv.shape.taskUnpaused,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("taskSpawned"),
					payload: jv.shape.taskSpawned,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("taskDelegated"),
					payload: jv.shape.taskDelegated,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("taskDelegationCompleted"),
					payload: jv.shape.taskDelegationCompleted,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("taskDelegationResumed"),
					payload: jv.shape.taskDelegationResumed,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("message"),
					payload: jv.shape.message,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("taskModeSwitched"),
					payload: jv.shape.taskModeSwitched,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("taskAskResponded"),
					payload: jv.shape.taskAskResponded,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("queuedMessagesUpdated"),
					payload: jv.shape.queuedMessagesUpdated,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("taskToolFailed"),
					payload: jv.shape.taskToolFailed,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("taskTokenUsageUpdated"),
					payload: jv.shape.taskTokenUsageUpdated,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("commandsResponse"),
					payload: jv.shape.commandsResponse,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("modesResponse"),
					payload: jv.shape.modesResponse,
					taskId: D.z.number().optional(),
				}),
				D.z.object({
					eventName: D.z.literal("modelsResponse"),
					payload: jv.shape.modelsResponse,
					taskId: D.z.number().optional(),
				}),
				D.z.object({ eventName: D.z.literal("evalPass"), payload: D.z.undefined(), taskId: D.z.number() }),
				D.z.object({ eventName: D.z.literal("evalFail"), payload: D.z.undefined(), taskId: D.z.number() }),
			]),
			jx =
				(((e = jx || {}).Running = "running"),
				(e.Interactive = "interactive"),
				(e.Resumable = "resumable"),
				(e.Idle = "idle"),
				(e.None = "none"),
				e),
			jy = D.z.object({ task: D.z.string().optional(), images: D.z.array(D.z.string()).optional() }),
			jz = D.z.object({
				name: D.z.string().min(1),
				key: D.z.string().min(1),
				placeholder: D.z.string().optional(),
				optional: D.z.boolean().optional().default(!1),
			}),
			jA = D.z.object({
				name: D.z.string().min(1),
				content: D.z.string().min(1),
				parameters: D.z.array(jz).optional(),
				prerequisites: D.z.array(D.z.string()).optional(),
			})
		D.z.enum(["mode", "mcp"])
		var jB = D.z.object({
				id: D.z.string().min(1),
				name: D.z.string().min(1, "Name is required"),
				description: D.z.string(),
				author: D.z.string().optional(),
				authorUrl: D.z.string().url("Author URL must be a valid URL").optional(),
				tags: D.z.array(D.z.string()).optional(),
				prerequisites: D.z.array(D.z.string()).optional(),
			}),
			jC = jB.extend({ content: D.z.string().min(1) }),
			jD = jB.extend({
				url: D.z.string().url(),
				content: D.z.union([D.z.string().min(1), D.z.array(jA)]),
				parameters: D.z.array(jz).optional(),
			}),
			jE = D.z.discriminatedUnion("type", [
				jC.extend({ type: D.z.literal("mode") }),
				jD.extend({ type: D.z.literal("mcp") }),
			])
		D.z.object({
			target: D.z.enum(["global", "project"]).optional().default("project"),
			parameters: D.z.record(D.z.string(), D.z.any()).optional(),
		})
		var jF = D.z.object({
				allowAll: D.z.boolean(),
				providers: D.z.record(
					D.z.object({ allowAll: D.z.boolean(), models: D.z.array(D.z.string()).optional() }),
				),
			}),
			jG = jb
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
					D.z.object({
						maxOpenTabsContext: D.z.number().int().nonnegative().optional(),
						maxWorkspaceFiles: D.z.number().int().nonnegative().optional(),
						terminalCommandDelay: D.z.number().int().nonnegative().optional(),
						terminalShellIntegrationTimeout: D.z.number().int().nonnegative().optional(),
					}),
				),
			jH = D.z.enum(["all", "list-only", "admins-and-creator", "creator", "full-lockdown"]),
			jI = D.z.object({
				recordTaskMessages: D.z.boolean().optional(),
				enableTaskSharing: D.z.boolean().optional(),
				allowPublicTaskSharing: D.z.boolean().optional(),
				taskShareExpirationDays: D.z.number().int().positive().optional(),
				allowMembersViewAllTasks: D.z.boolean().optional(),
				workspaceTaskVisibility: jH.optional(),
				llmEnhancedFeaturesEnabled: D.z.boolean().optional(),
			}),
			jJ = D.z.object({})
		D.z.object({
			version: D.z.number(),
			cloudSettings: jI.optional(),
			defaultSettings: jG,
			allowList: jF,
			features: jJ.optional(),
			hiddenMcps: D.z.array(D.z.string()).optional(),
			hideMarketplaceMcps: D.z.boolean().optional(),
			mcps: D.z.array(jD).optional(),
			providerProfiles: D.z.record(D.z.string(), iF).optional(),
		})
		var jK = D.z.object({}),
			jL = D.z.object({
				taskSyncEnabled: D.z.boolean().optional(),
				llmEnhancedFeaturesEnabled: D.z.boolean().optional(),
			})
		D.z.object({ features: jK, settings: jL, version: D.z.number() }),
			D.z.object({
				success: D.z.boolean(),
				shareUrl: D.z.string().optional(),
				error: D.z.string().optional(),
				isNewShare: D.z.boolean().optional(),
				manageUrl: D.z.string().optional(),
			})
		var jM =
				(((f = jM || {}).DISCONNECTED = "disconnected"),
				(f.CONNECTING = "connecting"),
				(f.CONNECTED = "connected"),
				(f.RETRYING = "retrying"),
				(f.FAILED = "failed"),
				f),
			jN = D.z.object({
				taskId: D.z.string(),
				taskStatus: D.z.nativeEnum(jx),
				taskAsk: iO.optional(),
				queuedMessages: D.z.array(iQ).optional(),
				parentTaskId: D.z.string().optional(),
				childTaskId: D.z.string().optional(),
				tokenUsage: iP.optional(),
				...jy.shape,
			})
		D.z.object({
			instanceId: D.z.string(),
			userId: D.z.string(),
			workspacePath: D.z.string(),
			appProperties: iT,
			gitProperties: iY.optional(),
			lastHeartbeat: D.z.coerce.number(),
			task: jN,
			taskAsk: iO.optional(),
			taskHistory: D.z.array(D.z.string()),
			mode: D.z.string().optional(),
			modes: D.z.array(D.z.object({ slug: D.z.string(), name: D.z.string() })).optional(),
			providerProfile: D.z.string().optional(),
			providerProfiles: D.z
				.array(D.z.object({ name: D.z.string(), provider: D.z.string().optional() }))
				.optional(),
			isCloudAgent: D.z.boolean().optional(),
		})
		var jO =
			(((g = jO || {})[(g.Message = "message")] = "Message"),
			(g[(g.TaskModeSwitched = "taskModeSwitched")] = "TaskModeSwitched"),
			(g[(g.TaskInteractive = "taskInteractive")] = "TaskInteractive"),
			g)
		D.z.discriminatedUnion("type", [
			D.z.object({ type: D.z.literal(jO.Message), taskId: D.z.string(), action: D.z.string(), message: iO }),
			D.z.object({ type: D.z.literal(jO.TaskModeSwitched), taskId: D.z.string(), mode: D.z.string() }),
			D.z.object({ type: D.z.literal(jO.TaskInteractive), taskId: D.z.string() }),
		])
		var jP = (((h = jP || {}).Message = "message"), (h.ApproveAsk = "approve_ask"), (h.DenyAsk = "deny_ask"), h)
		D.z.discriminatedUnion("type", [
			D.z.object({
				type: D.z.literal("message"),
				taskId: D.z.string(),
				payload: D.z.object({
					text: D.z.string(),
					images: D.z.array(D.z.string()).optional(),
					mode: D.z.string().optional(),
					providerProfile: D.z.string().optional(),
				}),
				timestamp: D.z.number(),
			}),
			D.z.object({
				type: D.z.literal("approve_ask"),
				taskId: D.z.string(),
				payload: D.z.object({ text: D.z.string().optional(), images: D.z.array(D.z.string()).optional() }),
				timestamp: D.z.number(),
			}),
			D.z.object({
				type: D.z.literal("deny_ask"),
				taskId: D.z.string(),
				payload: D.z.object({ text: D.z.string().optional(), images: D.z.array(D.z.string()).optional() }),
				timestamp: D.z.number(),
			}),
		])
		var jQ =
				(((i = jQ || {}).CONNECTED = "extension:connected"),
				(i.REGISTER = "extension:register"),
				(i.UNREGISTER = "extension:unregister"),
				(i.HEARTBEAT = "extension:heartbeat"),
				(i.EVENT = "extension:event"),
				(i.RELAYED_EVENT = "extension:relayed_event"),
				(i.COMMAND = "extension:command"),
				(i.RELAYED_COMMAND = "extension:relayed_command"),
				i),
			jR =
				(((j = jR || {}).JOIN = "task:join"),
				(j.LEAVE = "task:leave"),
				(j.EVENT = "task:event"),
				(j.RELAYED_EVENT = "task:relayed_event"),
				(j.COMMAND = "task:command"),
				(j.RELAYED_COMMAND = "task:relayed_command"),
				j)
		D.z.object({
			success: D.z.boolean(),
			data: D.z.object({
				dates: D.z.array(D.z.string()),
				tasks: D.z.array(D.z.number()),
				tokens: D.z.array(D.z.number()),
				costs: D.z.array(D.z.number()),
				totals: D.z.object({ tasks: D.z.number(), tokens: D.z.number(), cost: D.z.number() }),
			}),
			period: D.z.number(),
		})
		var jS = D.z.object({ answer: D.z.string(), mode: D.z.string().optional() })
		D.z.object({ question: D.z.string().optional(), suggest: D.z.array(jS).optional() }),
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
			].map((a) => a.value)
		var jT =
				(((k = jT || {}).Connect = "Connect"),
				(k.Disconnect = "Disconnect"),
				(k.Ack = "Ack"),
				(k.TaskCommand = "TaskCommand"),
				(k.TaskEvent = "TaskEvent"),
				k),
			jU = (((l = jU || {}).Client = "client"), (l.Server = "server"), l),
			jV = D.z.object({ clientId: D.z.string(), pid: D.z.number(), ppid: D.z.number() }),
			jW =
				(((m = jW || {}).StartNewTask = "StartNewTask"),
				(m.CancelTask = "CancelTask"),
				(m.CloseTask = "CloseTask"),
				(m.ResumeTask = "ResumeTask"),
				(m.SendMessage = "SendMessage"),
				(m.GetCommands = "GetCommands"),
				(m.GetModes = "GetModes"),
				(m.GetModels = "GetModels"),
				(m.DeleteQueuedMessage = "DeleteQueuedMessage"),
				m),
			jX = D.z.discriminatedUnion("commandName", [
				D.z.object({
					commandName: D.z.literal("StartNewTask"),
					data: D.z.object({
						configuration: jd,
						text: D.z.string(),
						images: D.z.array(D.z.string()).optional(),
						newTab: D.z.boolean().optional(),
					}),
				}),
				D.z.object({ commandName: D.z.literal("CancelTask") }),
				D.z.object({ commandName: D.z.literal("CloseTask") }),
				D.z.object({ commandName: D.z.literal("ResumeTask"), data: D.z.string() }),
				D.z.object({
					commandName: D.z.literal("SendMessage"),
					data: D.z.object({ text: D.z.string().optional(), images: D.z.array(D.z.string()).optional() }),
				}),
				D.z.object({ commandName: D.z.literal("GetCommands") }),
				D.z.object({ commandName: D.z.literal("GetModes") }),
				D.z.object({ commandName: D.z.literal("GetModels") }),
				D.z.object({ commandName: D.z.literal("DeleteQueuedMessage"), data: D.z.string() }),
			])
		D.z.discriminatedUnion("type", [
			D.z.object({ type: D.z.literal("Ack"), origin: D.z.literal("server"), data: jV }),
			D.z.object({
				type: D.z.literal("TaskCommand"),
				origin: D.z.literal("client"),
				clientId: D.z.string(),
				data: jX,
			}),
			D.z.object({
				type: D.z.literal("TaskEvent"),
				origin: D.z.literal("server"),
				relayClientId: D.z.string().optional(),
				data: jw,
			}),
		]),
			D.z.discriminatedUnion("status", [
				D.z.object({
					executionId: D.z.string(),
					status: D.z.literal("started"),
					serverName: D.z.string(),
					toolName: D.z.string(),
				}),
				D.z.object({ executionId: D.z.string(), status: D.z.literal("output"), response: D.z.string() }),
				D.z.object({
					executionId: D.z.string(),
					status: D.z.literal("completed"),
					response: D.z.string().optional(),
				}),
				D.z.object({ executionId: D.z.string(), status: D.z.literal("error"), error: D.z.string().optional() }),
			])
		var jY = D.z.enum(["pending", "in_progress", "completed"])
		D.z.object({ id: D.z.string(), content: D.z.string(), status: jY })
		var jZ = (((n = jZ || {}).Empty = "empty"), (n.TooLong = "too_long"), (n.InvalidFormat = "invalid_format"), n)
		function j$() {
			return !1
		}
		function j_(a) {}
		function j0(a) {
			return () => {}
		}
		function j1() {
			j_(!0)
		}
		function j2() {
			j_(!1)
		}
		D.z.discriminatedUnion("status", [
			D.z.object({
				executionId: D.z.string(),
				status: D.z.literal("started"),
				pid: D.z.number().optional(),
				command: D.z.string(),
			}),
			D.z.object({ executionId: D.z.string(), status: D.z.literal("output"), output: D.z.string() }),
			D.z.object({ executionId: D.z.string(), status: D.z.literal("exited"), exitCode: D.z.number().optional() }),
			D.z.object({ executionId: D.z.string(), status: D.z.literal("fallback") }),
			D.z.object({ executionId: D.z.string(), status: D.z.literal("timeout") }),
		]),
			D.z.object({
				ts: D.z.number().optional(),
				previousCommitHash: D.z.string().optional(),
				commitHash: D.z.string(),
				mode: D.z.enum(["full", "checkpoint", "from-init", "to-current"]),
			}),
			D.z.object({ ts: D.z.number(), commitHash: D.z.string(), mode: D.z.enum(["preview", "restore"]) }),
			D.z.object({ item: jE, parameters: D.z.record(D.z.string(), D.z.any()) }),
			a.s(["CONSENT_COOKIE_NAME", () => "roo-code-cookie-consent"], 97391),
			a.i(79242),
			a.s(
				[
					"handleConsentAccept",
					() => j1,
					"handleConsentReject",
					() => j2,
					"hasConsent",
					() => j$,
					"onConsentChange",
					() => j0,
				],
				58041,
			)
	},
	77725,
	(a) => {
		"use strict"
		let b, c, d, e, f, g, h
		var i = a.i(9116),
			j = a.i(67191),
			k = a.i(91222)
		let l = (0, a.i(8402).default)("cookie", [
			["path", { d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5", key: "laymnq" }],
			["path", { d: "M8.5 8.5v.01", key: "ue8clq" }],
			["path", { d: "M16 15.5v.01", key: "14dtrp" }],
			["path", { d: "M12 12v.01", key: "u5ubse" }],
			["path", { d: "M11 17v.01", key: "1hyl5a" }],
			["path", { d: "M7 14v.01", key: "uct60s" }],
		])
		!(function ({
			allowIcannDomains: a = !0,
			allowPrivateDomains: b = !1,
			detectIp: c = !0,
			extractHostname: d = !0,
			mixedInputs: e = !0,
			validHosts: f = null,
			validateHostname: g = !0,
		}) {})({})
		;(b = [1, {}]),
			(d = [0, { "*": (c = [2, {}]) }]),
			(e = [0, { s3: c, "s3-accesspoint": c, "s3-website": c }]),
			(f = [0, { "webview-assets": c }]),
			(g = [0, { vfs: c, "webview-assets": c }]),
			(h = [0, { s3: c, "s3-accesspoint": c, "s3-accesspoint-fips": c, "s3-fips": c, "s3-website": c }])
		var m = a.i(97391),
			n = a.i(58041)
		function o() {
			let [a, b] = (0, j.useState)(null)
			return (
				(0, j.useEffect)(() => {}, []),
				(0, i.jsx)("div", {
					role: "banner",
					"aria-label": "Cookie consent banner",
					"aria-live": "polite",
					children: (0, i.jsx)(k.default, {
						location: "bottom",
						buttonText: "Accept",
						declineButtonText: "Decline",
						cookieName: m.CONSENT_COOKIE_NAME,
						expires: 365,
						enableDeclineButton: !0,
						onAccept: () => {
							;(0, n.handleConsentAccept)()
						},
						onDecline: () => {
							;(0, n.handleConsentReject)()
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
						extraCookieOptions: a ? { domain: a } : {},
						disableStyles: !0,
						ariaAcceptLabel: "Accept",
						ariaDeclineLabel: "Decline",
						children: (0, i.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								(0, i.jsx)(l, { className: "size-5 hidden md:block" }),
								(0, i.jsx)("span", {
									children: "Like most of the internet, we use cookies. Are you OK with that?",
								}),
							],
						}),
					}),
				})
			)
		}
		a.s(["CookieConsentWrapper", () => o], 77725)
	},
	80271,
	(a) => {
		a.v({ className: "dm_sans_9dec044e-module__koDR9a__className" })
	},
	10207,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(71544),
			d = a.i(80271)
		let e = {
			className: d.default.className,
			style: { fontFamily: "'DM Sans', 'DM Sans Fallback'", fontStyle: "normal" },
		}
		null != d.default.variable && (e.variable = d.default.variable)
		var f = a.i(92564)
		function g() {
			return (0, b.jsx)("div", {
				className: `relative overflow-hidden bg-[#d8f14b] text-black ${e.className}`,
				children: (0, b.jsxs)("div", {
					className: "relative flex flex-col items-center justify-center gap-3 px-6 py-5 sm:py-6",
					children: [
						(0, b.jsx)("p", {
							className: "text-base sm:text-lg md:text-xl font-extrabold tracking-tight",
							children: "The Roo Code team just launched something new.",
						}),
						(0, b.jsxs)("a", {
							href: "https://roomote.dev",
							target: "_blank",
							rel: "noopener noreferrer",
							className:
								"group inline-flex shrink-0 items-center gap-2 rounded-full bg-black text-white px-6 py-2.5 text-sm sm:text-base font-bold hover:bg-gray-900 transition-colors duration-200",
							children: [
								"Check out",
								(0, b.jsx)(c.default, {
									src: "/logos/roomote-logo.png",
									alt: "Roomote",
									width: 100,
									height: 37,
									className: "h-5 sm:h-6 w-auto invert",
								}),
								(0, b.jsx)(f.ArrowRight, {
									className:
										"size-4 sm:size-5 transition-transform duration-200 group-hover:translate-x-0.5",
								}),
							],
						}),
					],
				}),
			})
		}
		a.s(["RoomoteAnnouncementBanner", () => g], 10207)
	},
	61966,
	(a, b, c) => {
		b.exports = a.r(36048)
	},
	18064,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(90830),
			d = a.i(12092),
			e = a.i(18697),
			f = a.i(28854),
			g = class extends f.Subscribable {
				constructor(a = {}) {
					super(), (this.config = a), (this.#a = new Map())
				}
				#a
				build(a, b, e) {
					let f = b.queryKey,
						g = b.queryHash ?? (0, c.hashQueryKeyByOptions)(f, b),
						h = this.get(g)
					return (
						h ||
							((h = new d.Query({
								client: a,
								queryKey: f,
								queryHash: g,
								options: a.defaultQueryOptions(b),
								state: e,
								defaultOptions: a.getQueryDefaults(f),
							})),
							this.add(h)),
						h
					)
				}
				add(a) {
					this.#a.has(a.queryHash) || (this.#a.set(a.queryHash, a), this.notify({ type: "added", query: a }))
				}
				remove(a) {
					let b = this.#a.get(a.queryHash)
					b &&
						(a.destroy(),
						b === a && this.#a.delete(a.queryHash),
						this.notify({ type: "removed", query: a }))
				}
				clear() {
					e.notifyManager.batch(() => {
						this.getAll().forEach((a) => {
							this.remove(a)
						})
					})
				}
				get(a) {
					return this.#a.get(a)
				}
				getAll() {
					return [...this.#a.values()]
				}
				find(a) {
					let b = { exact: !0, ...a }
					return this.getAll().find((a) => (0, c.matchQuery)(b, a))
				}
				findAll(a = {}) {
					let b = this.getAll()
					return Object.keys(a).length > 0 ? b.filter((b) => (0, c.matchQuery)(a, b)) : b
				}
				notify(a) {
					e.notifyManager.batch(() => {
						this.listeners.forEach((b) => {
							b(a)
						})
					})
				}
				onFocus() {
					e.notifyManager.batch(() => {
						this.getAll().forEach((a) => {
							a.onFocus()
						})
					})
				}
				onOnline() {
					e.notifyManager.batch(() => {
						this.getAll().forEach((a) => {
							a.onOnline()
						})
					})
				}
			},
			h = a.i(84962),
			i = a.i(79457),
			j = class extends h.Removable {
				#b
				#c
				#d
				#e
				constructor(a) {
					super(),
						(this.#b = a.client),
						(this.mutationId = a.mutationId),
						(this.#d = a.mutationCache),
						(this.#c = []),
						(this.state = a.state || {
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
					this.#c.includes(a) ||
						(this.#c.push(a),
						this.clearGcTimeout(),
						this.#d.notify({ type: "observerAdded", mutation: this, observer: a }))
				}
				removeObserver(a) {
					;(this.#c = this.#c.filter((b) => b !== a)),
						this.scheduleGc(),
						this.#d.notify({ type: "observerRemoved", mutation: this, observer: a })
				}
				optionalRemove() {
					this.#c.length || ("pending" === this.state.status ? this.scheduleGc() : this.#d.remove(this))
				}
				continue() {
					return this.#e?.continue() ?? this.execute(this.state.variables)
				}
				async execute(a) {
					let b = () => {
							this.#f({ type: "continue" })
						},
						c = { client: this.#b, meta: this.options.meta, mutationKey: this.options.mutationKey }
					this.#e = (0, i.createRetryer)({
						fn: () =>
							this.options.mutationFn
								? this.options.mutationFn(a, c)
								: Promise.reject(Error("No mutationFn found")),
						onFail: (a, b) => {
							this.#f({ type: "failed", failureCount: a, error: b })
						},
						onPause: () => {
							this.#f({ type: "pause" })
						},
						onContinue: b,
						retry: this.options.retry ?? 0,
						retryDelay: this.options.retryDelay,
						networkMode: this.options.networkMode,
						canRun: () => this.#d.canRun(this),
					})
					let d = "pending" === this.state.status,
						e = !this.#e.canStart()
					try {
						if (d) b()
						else {
							this.#f({ type: "pending", variables: a, isPaused: e }),
								this.#d.config.onMutate && (await this.#d.config.onMutate(a, this, c))
							let b = await this.options.onMutate?.(a, c)
							b !== this.state.context &&
								this.#f({ type: "pending", context: b, variables: a, isPaused: e })
						}
						let f = await this.#e.start()
						return (
							await this.#d.config.onSuccess?.(f, a, this.state.context, this, c),
							await this.options.onSuccess?.(f, a, this.state.context, c),
							await this.#d.config.onSettled?.(
								f,
								null,
								this.state.variables,
								this.state.context,
								this,
								c,
							),
							await this.options.onSettled?.(f, null, a, this.state.context, c),
							this.#f({ type: "success", data: f }),
							f
						)
					} catch (b) {
						try {
							await this.#d.config.onError?.(b, a, this.state.context, this, c)
						} catch (a) {
							Promise.reject(a)
						}
						try {
							await this.options.onError?.(b, a, this.state.context, c)
						} catch (a) {
							Promise.reject(a)
						}
						try {
							await this.#d.config.onSettled?.(
								void 0,
								b,
								this.state.variables,
								this.state.context,
								this,
								c,
							)
						} catch (a) {
							Promise.reject(a)
						}
						try {
							await this.options.onSettled?.(void 0, b, a, this.state.context, c)
						} catch (a) {
							Promise.reject(a)
						}
						throw (this.#f({ type: "error", error: b }), b)
					} finally {
						this.#d.runNext(this)
					}
				}
				#f(a) {
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
						e.notifyManager.batch(() => {
							this.#c.forEach((b) => {
								b.onMutationUpdate(a)
							}),
								this.#d.notify({ mutation: this, type: "updated", action: a })
						})
				}
			},
			k = f,
			l = class extends k.Subscribable {
				constructor(a = {}) {
					super(), (this.config = a), (this.#g = new Set()), (this.#h = new Map()), (this.#i = 0)
				}
				#g
				#h
				#i
				build(a, b, c) {
					let d = new j({
						client: a,
						mutationCache: this,
						mutationId: ++this.#i,
						options: a.defaultMutationOptions(b),
						state: c,
					})
					return this.add(d), d
				}
				add(a) {
					this.#g.add(a)
					let b = m(a)
					if ("string" == typeof b) {
						let c = this.#h.get(b)
						c ? c.push(a) : this.#h.set(b, [a])
					}
					this.notify({ type: "added", mutation: a })
				}
				remove(a) {
					if (this.#g.delete(a)) {
						let b = m(a)
						if ("string" == typeof b) {
							let c = this.#h.get(b)
							if (c)
								if (c.length > 1) {
									let b = c.indexOf(a)
									;-1 !== b && c.splice(b, 1)
								} else c[0] === a && this.#h.delete(b)
						}
					}
					this.notify({ type: "removed", mutation: a })
				}
				canRun(a) {
					let b = m(a)
					if ("string" != typeof b) return !0
					{
						let c = this.#h.get(b),
							d = c?.find((a) => "pending" === a.state.status)
						return !d || d === a
					}
				}
				runNext(a) {
					let b = m(a)
					if ("string" != typeof b) return Promise.resolve()
					{
						let c = this.#h.get(b)?.find((b) => b !== a && b.state.isPaused)
						return c?.continue() ?? Promise.resolve()
					}
				}
				clear() {
					e.notifyManager.batch(() => {
						this.#g.forEach((a) => {
							this.notify({ type: "removed", mutation: a })
						}),
							this.#g.clear(),
							this.#h.clear()
					})
				}
				getAll() {
					return Array.from(this.#g)
				}
				find(a) {
					let b = { exact: !0, ...a }
					return this.getAll().find((a) => (0, c.matchMutation)(b, a))
				}
				findAll(a = {}) {
					return this.getAll().filter((b) => (0, c.matchMutation)(a, b))
				}
				notify(a) {
					e.notifyManager.batch(() => {
						this.listeners.forEach((b) => {
							b(a)
						})
					})
				}
				resumePausedMutations() {
					let a = this.getAll().filter((a) => a.state.isPaused)
					return e.notifyManager.batch(() => Promise.all(a.map((a) => a.continue().catch(c.noop))))
				}
			}
		function m(a) {
			return a.options.scope?.id
		}
		var n = a.i(28015),
			o = a.i(17818)
		function p(a) {
			return {
				onFetch: (b, d) => {
					let e = b.options,
						f = b.fetchOptions?.meta?.fetchMore?.direction,
						g = b.state.data?.pages || [],
						h = b.state.data?.pageParams || [],
						i = { pages: [], pageParams: [] },
						j = 0,
						k = async () => {
							let d = !1,
								k = (0, c.ensureQueryFn)(b.options, b.fetchOptions),
								l = async (a, e, f) => {
									let g
									if (d) return Promise.reject()
									if (null == e && a.pages.length) return Promise.resolve(a)
									let h =
											((g = {
												client: b.client,
												queryKey: b.queryKey,
												pageParam: e,
												direction: f ? "backward" : "forward",
												meta: b.options.meta,
											}),
											(0, c.addConsumeAwareSignal)(
												g,
												() => b.signal,
												() => (d = !0),
											),
											g),
										i = await k(h),
										{ maxPages: j } = b.options,
										l = f ? c.addToStart : c.addToEnd
									return { pages: l(a.pages, i, j), pageParams: l(a.pageParams, e, j) }
								}
							if (f && g.length) {
								let a = "backward" === f,
									b = { pages: g, pageParams: h },
									c = (
										a
											? function (a, { pages: b, pageParams: c }) {
													return b.length > 0
														? a.getPreviousPageParam?.(b[0], b, c[0], c)
														: void 0
												}
											: q
									)(e, b)
								i = await l(b, c, a)
							} else {
								let b = a ?? g.length
								do {
									let a = 0 === j ? (h[0] ?? e.initialPageParam) : q(e, i)
									if (j > 0 && null == a) break
									;(i = await l(i, a)), j++
								} while (j < b)
							}
							return i
						}
					b.options.persister
						? (b.fetchFn = () =>
								b.options.persister?.(
									k,
									{ client: b.client, queryKey: b.queryKey, meta: b.options.meta, signal: b.signal },
									d,
								))
						: (b.fetchFn = k)
				},
			}
		}
		function q(a, { pages: b, pageParams: c }) {
			let d = b.length - 1
			return b.length > 0 ? a.getNextPageParam(b[d], b, c[d], c) : void 0
		}
		var r = class {
				#j
				#d
				#k
				#l
				#m
				#n
				#o
				#p
				constructor(a = {}) {
					;(this.#j = a.queryCache || new g()),
						(this.#d = a.mutationCache || new l()),
						(this.#k = a.defaultOptions || {}),
						(this.#l = new Map()),
						(this.#m = new Map()),
						(this.#n = 0)
				}
				mount() {
					this.#n++,
						1 === this.#n &&
							((this.#o = n.focusManager.subscribe(async (a) => {
								a && (await this.resumePausedMutations(), this.#j.onFocus())
							})),
							(this.#p = o.onlineManager.subscribe(async (a) => {
								a && (await this.resumePausedMutations(), this.#j.onOnline())
							})))
				}
				unmount() {
					this.#n--, 0 === this.#n && (this.#o?.(), (this.#o = void 0), this.#p?.(), (this.#p = void 0))
				}
				isFetching(a) {
					return this.#j.findAll({ ...a, fetchStatus: "fetching" }).length
				}
				isMutating(a) {
					return this.#d.findAll({ ...a, status: "pending" }).length
				}
				getQueryData(a) {
					let b = this.defaultQueryOptions({ queryKey: a })
					return this.#j.get(b.queryHash)?.state.data
				}
				ensureQueryData(a) {
					let b = this.defaultQueryOptions(a),
						d = this.#j.build(this, b),
						e = d.state.data
					return void 0 === e
						? this.fetchQuery(a)
						: (a.revalidateIfStale &&
								d.isStaleByTime((0, c.resolveStaleTime)(b.staleTime, d)) &&
								this.prefetchQuery(b),
							Promise.resolve(e))
				}
				getQueriesData(a) {
					return this.#j.findAll(a).map(({ queryKey: a, state: b }) => [a, b.data])
				}
				setQueryData(a, b, d) {
					let e = this.defaultQueryOptions({ queryKey: a }),
						f = this.#j.get(e.queryHash),
						g = f?.state.data,
						h = (0, c.functionalUpdate)(b, g)
					if (void 0 !== h) return this.#j.build(this, e).setData(h, { ...d, manual: !0 })
				}
				setQueriesData(a, b, c) {
					return e.notifyManager.batch(() =>
						this.#j.findAll(a).map(({ queryKey: a }) => [a, this.setQueryData(a, b, c)]),
					)
				}
				getQueryState(a) {
					let b = this.defaultQueryOptions({ queryKey: a })
					return this.#j.get(b.queryHash)?.state
				}
				removeQueries(a) {
					let b = this.#j
					e.notifyManager.batch(() => {
						b.findAll(a).forEach((a) => {
							b.remove(a)
						})
					})
				}
				resetQueries(a, b) {
					let c = this.#j
					return e.notifyManager.batch(
						() => (
							c.findAll(a).forEach((a) => {
								a.reset()
							}),
							this.refetchQueries({ type: "active", ...a }, b)
						),
					)
				}
				cancelQueries(a, b = {}) {
					let d = { revert: !0, ...b }
					return Promise.all(e.notifyManager.batch(() => this.#j.findAll(a).map((a) => a.cancel(d))))
						.then(c.noop)
						.catch(c.noop)
				}
				invalidateQueries(a, b = {}) {
					return e.notifyManager.batch(() =>
						(this.#j.findAll(a).forEach((a) => {
							a.invalidate()
						}),
						a?.refetchType === "none")
							? Promise.resolve()
							: this.refetchQueries({ ...a, type: a?.refetchType ?? a?.type ?? "active" }, b),
					)
				}
				refetchQueries(a, b = {}) {
					let d = { ...b, cancelRefetch: b.cancelRefetch ?? !0 }
					return Promise.all(
						e.notifyManager.batch(() =>
							this.#j
								.findAll(a)
								.filter((a) => !a.isDisabled() && !a.isStatic())
								.map((a) => {
									let b = a.fetch(void 0, d)
									return (
										d.throwOnError || (b = b.catch(c.noop)),
										"paused" === a.state.fetchStatus ? Promise.resolve() : b
									)
								}),
						),
					).then(c.noop)
				}
				fetchQuery(a) {
					let b = this.defaultQueryOptions(a)
					void 0 === b.retry && (b.retry = !1)
					let d = this.#j.build(this, b)
					return d.isStaleByTime((0, c.resolveStaleTime)(b.staleTime, d))
						? d.fetch(b)
						: Promise.resolve(d.state.data)
				}
				prefetchQuery(a) {
					return this.fetchQuery(a).then(c.noop).catch(c.noop)
				}
				fetchInfiniteQuery(a) {
					return (a.behavior = p(a.pages)), this.fetchQuery(a)
				}
				prefetchInfiniteQuery(a) {
					return this.fetchInfiniteQuery(a).then(c.noop).catch(c.noop)
				}
				ensureInfiniteQueryData(a) {
					return (a.behavior = p(a.pages)), this.ensureQueryData(a)
				}
				resumePausedMutations() {
					return o.onlineManager.isOnline() ? this.#d.resumePausedMutations() : Promise.resolve()
				}
				getQueryCache() {
					return this.#j
				}
				getMutationCache() {
					return this.#d
				}
				getDefaultOptions() {
					return this.#k
				}
				setDefaultOptions(a) {
					this.#k = a
				}
				setQueryDefaults(a, b) {
					this.#l.set((0, c.hashKey)(a), { queryKey: a, defaultOptions: b })
				}
				getQueryDefaults(a) {
					let b = [...this.#l.values()],
						d = {}
					return (
						b.forEach((b) => {
							;(0, c.partialMatchKey)(a, b.queryKey) && Object.assign(d, b.defaultOptions)
						}),
						d
					)
				}
				setMutationDefaults(a, b) {
					this.#m.set((0, c.hashKey)(a), { mutationKey: a, defaultOptions: b })
				}
				getMutationDefaults(a) {
					let b = [...this.#m.values()],
						d = {}
					return (
						b.forEach((b) => {
							;(0, c.partialMatchKey)(a, b.mutationKey) && Object.assign(d, b.defaultOptions)
						}),
						d
					)
				}
				defaultQueryOptions(a) {
					if (a._defaulted) return a
					let b = { ...this.#k.queries, ...this.getQueryDefaults(a.queryKey), ...a, _defaulted: !0 }
					return (
						b.queryHash || (b.queryHash = (0, c.hashQueryKeyByOptions)(b.queryKey, b)),
						void 0 === b.refetchOnReconnect && (b.refetchOnReconnect = "always" !== b.networkMode),
						void 0 === b.throwOnError && (b.throwOnError = !!b.suspense),
						!b.networkMode && b.persister && (b.networkMode = "offlineFirst"),
						b.queryFn === c.skipToken && (b.enabled = !1),
						b
					)
				}
				defaultMutationOptions(a) {
					return a?._defaulted
						? a
						: {
								...this.#k.mutations,
								...(a?.mutationKey && this.getMutationDefaults(a.mutationKey)),
								...a,
								_defaulted: !0,
							}
				}
				clear() {
					this.#j.clear(), this.#d.clear()
				}
			},
			s = a.i(73321),
			t = a.i(41254),
			u = a.i(67191),
			v = a.i(61966),
			w = a.i(58041)
		let x = "GTM-M2JZHV8N"
		function y({ children: a }) {
			let [c, d] = (0, u.useState)(!1)
			return (
				(0, u.useEffect)(
					() => (
						(0, w.hasConsent)() && d(!0),
						(0, w.onConsentChange)((a) => {
							a && d(!0)
						})
					),
					[],
				),
				(0, b.jsxs)(b.Fragment, {
					children: [
						c &&
							(0, b.jsxs)(b.Fragment, {
								children: [
									(0, b.jsx)(v.default, {
										id: "google-tag-manager",
										strategy: "afterInteractive",
										dangerouslySetInnerHTML: {
											__html: `
								(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
								new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
								j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
								'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
								})(window,document,'script','dataLayer','${x}');
							`,
										},
									}),
									(0, b.jsx)("noscript", {
										children: (0, b.jsx)("iframe", {
											src: `https://www.googletagmanager.com/ns.html?id=${x}`,
											height: "0",
											width: "0",
											style: { display: "none", visibility: "hidden" },
										}),
									}),
								],
							}),
						a,
					],
				})
			)
		}
		function z({ children: a }) {
			let [c, d] = (0, u.useState)(!1)
			return (
				(0, u.useEffect)(
					() => (
						(0, w.hasConsent)() && d(!0),
						(0, w.onConsentChange)((a) => {
							a && d(!0)
						})
					),
					[],
				),
				(0, b.jsxs)(b.Fragment, {
					children: [
						c &&
							(0, b.jsx)(b.Fragment, {
								children: (0, b.jsx)(v.default, {
									id: "hs-script-loader",
									src: "//js-na2.hs-scripts.com/243714031.js",
									strategy: "afterInteractive",
									async: !0,
									defer: !0,
								}),
							}),
						a,
					],
				})
			)
		}
		var A = a.i(69317),
			B = a.i(79242),
			C = (0, u.createContext)({ client: B.default, bootstrap: void 0 })
		function D(a) {
			var b,
				c,
				d = a.children,
				e = a.client,
				f = a.apiKey,
				g = a.options,
				h = (0, u.useRef)(null),
				i = (0, u.useMemo)(
					function () {
						return e
							? (f &&
									console.warn(
										"[PostHog.js] You have provided both `client` and `apiKey` to `PostHogProvider`. `apiKey` will be ignored in favour of `client`.",
									),
								g &&
									console.warn(
										"[PostHog.js] You have provided both `client` and `options` to `PostHogProvider`. `options` will be ignored in favour of `client`.",
									),
								e)
							: (f ||
									console.warn(
										"[PostHog.js] No `apiKey` or `client` were provided to `PostHogProvider`. Using default global `window.posthog` instance. You must initialize it manually. This is not recommended behavior.",
									),
								B.default)
					},
					[e, f, JSON.stringify(g)],
				)
			return (
				(0, u.useEffect)(
					function () {
						if (!e) {
							var a = h.current
							a
								? (f !== a.apiKey &&
										console.warn(
											"[PostHog.js] You have provided a different `apiKey` to `PostHogProvider` than the one that was already initialized. This is not supported by our provider and we'll keep using the previous key. If you need to toggle between API Keys you need to control the `client` yourself and pass it in as a prop rather than an `apiKey` prop.",
										),
									g &&
										!(function a(b, c, d) {
											if ((void 0 === d && (d = new WeakMap()), b === c)) return !0
											if (
												"object" != typeof b ||
												null === b ||
												"object" != typeof c ||
												null === c
											)
												return !1
											if (d.has(b) && d.get(b) === c) return !0
											d.set(b, c)
											var e = Object.keys(b),
												f = Object.keys(c)
											if (e.length !== f.length) return !1
											for (var g = 0; g < e.length; g++) {
												var h = e[g]
												if (!f.includes(h) || !a(b[h], c[h], d)) return !1
											}
											return !0
										})(g, a.options) &&
										B.default.set_config(g))
								: (B.default.__loaded &&
										console.warn(
											"[PostHog.js] `posthog` was already loaded elsewhere. This may cause issues.",
										),
									B.default.init(f, g)),
								(h.current = { apiKey: f, options: null != g ? g : {} })
						}
					},
					[e, f, JSON.stringify(g)],
				),
				u.default.createElement(
					C.Provider,
					{
						value: {
							client: i,
							bootstrap:
								null != (b = null == g ? void 0 : g.bootstrap)
									? b
									: null == (c = null == e ? void 0 : e.config)
										? void 0
										: c.bootstrap,
						},
					},
					d,
				)
			)
		}
		var E = function (a) {
				return "function" == typeof a
			},
			F = function (a, b) {
				return (F =
					Object.setPrototypeOf ||
					({ __proto__: [] } instanceof Array &&
						function (a, b) {
							a.__proto__ = b
						}) ||
					function (a, b) {
						for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
					})(a, b)
			}
		"function" == typeof SuppressedError && SuppressedError
		var G = { componentStack: null, exceptionEvent: null, error: null },
			H = u.default.Component
		if ("function" != typeof H && null !== H)
			throw TypeError("Class extends value " + String(H) + " is not a constructor or null")
		function I() {
			this.constructor = J
		}
		function J(a) {
			var b = H.call(this, a) || this
			return (b.state = G), b
		}
		function K() {
			let a = (0, A.usePathname)(),
				b = (0, A.useSearchParams)(),
				c = (0, u.useRef)(null)
			return (
				(0, u.useEffect)(() => {
					if (a && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
						let d = b?.toString() ?? "",
							e = window.location.origin + a + (d ? `?${d}` : ""),
							f = c.current ?? document.referrer,
							g = ""
						if (f)
							try {
								g = new URL(f).hostname
							} catch {}
						B.default.capture("$pageview", { $current_url: e, $referrer: f, $referring_domain: g }),
							(c.current = e)
					}
				}, [a, b?.toString()]),
				null
			)
		}
		function L({ children: a }) {
			return (
				(0, u.useEffect)(() => {}, []),
				(0, b.jsxs)(D, {
					client: B.default,
					children: [(0, b.jsx)(u.Suspense, { fallback: null, children: (0, b.jsx)(K, {}) }), a],
				})
			)
		}
		F(J, H),
			(J.prototype = null === H ? Object.create(H) : ((I.prototype = H.prototype), new I())),
			(J.prototype.componentDidCatch = function (a, b) {
				var c,
					d = this.props.additionalProperties
				E(d) ? (c = d(a)) : "object" == typeof d && (c = d)
				var e = this.context.client.captureException(a, c),
					f = b.componentStack
				this.setState({ error: a, componentStack: null != f ? f : null, exceptionEvent: e })
			}),
			(J.prototype.render = function () {
				var a = this.props,
					b = a.children,
					c = a.fallback,
					d = this.state
				if (null == d.componentStack) return E(b) ? b() : b
				var e = E(c)
					? u.default.createElement(c, {
							error: d.error,
							componentStack: d.componentStack,
							exceptionEvent: d.exceptionEvent,
						})
					: c
				return u.default.isValidElement(e)
					? e
					: (console.warn(
							"[PostHog.js][PostHogErrorBoundary] Invalid fallback prop, provide a valid React element or a function that returns a valid React element.",
						),
						u.default.createElement(u.default.Fragment, null))
			}),
			(J.contextType = C)
		let M = new r()
		a.s(
			[
				"Providers",
				0,
				({ children: a }) =>
					(0, b.jsx)(s.QueryClientProvider, {
						client: M,
						children: (0, b.jsx)(y, {
							children: (0, b.jsx)(z, {
								children: (0, b.jsx)(L, {
									children: (0, b.jsx)(t.ThemeProvider, {
										attribute: "class",
										defaultTheme: "dark",
										enableSystem: !1,
										children: a,
									}),
								}),
							}),
						}),
					}),
			],
			18064,
		)
	},
	94901,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(67191),
			d = a.i(46395),
			e = a.i(71544),
			f = a.i(92137),
			g = a.i(41254),
			h = a.i(30787),
			i = a.i(16209)
		a.i(46951)
		var j = a.i(16995)
		function k() {
			let [a, k] = (0, c.useState)(!1),
				[l, m] = (0, c.useState)(!1),
				n = (0, c.useRef)(null),
				o = (0, c.useRef)(null),
				p = (0, i.useLogoSrc)(),
				{ resolvedTheme: q } = (0, g.useTheme)()
			return (
				(0, c.useEffect)(() => {
					function a(a) {
						let b = a.target
						n.current && !n.current.contains(b) && k(!1), o.current && !o.current.contains(b) && m(!1)
					}
					return (
						document.addEventListener("mousedown", a),
						() => {
							document.removeEventListener("mousedown", a)
						}
					)
				}, []),
				(0, b.jsx)("footer", {
					className: "border-t border-border bg-background",
					children: (0, b.jsxs)("div", {
						className: "mx-auto max-w-7xl px-6 pb-6 pt-12 md:pb-8 md:pt-16 lg:px-8",
						children: [
							(0, b.jsxs)("div", {
								className: "xl:grid xl:grid-cols-3 xl:gap-8",
								children: [
									(0, b.jsxs)("div", {
										className: "space-y-8",
										children: [
											(0, b.jsx)("div", {
												className: "flex items-center",
												children: (0, b.jsx)(e.default, {
													src: p,
													alt: "Roo Code Logo",
													width: 120,
													height: 40,
													className: "h-6 w-auto",
												}),
											}),
											(0, b.jsx)("p", {
												className:
													"max-w-md text-sm leading-6 text-muted-foreground md:pr-16 lg:pr-32",
												children:
													"Empowering developers to build better software faster with AI-powered tools and insights.",
											}),
											(0, b.jsx)("a", {
												href: "https://roocode.com",
												target: "_blank",
												rel: "noopener noreferrer",
												className: "inline-flex items-center space-x-2 group",
												children: (0, b.jsx)(e.default, {
													src:
														"light" === q
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
									(0, b.jsxs)("div", {
										className: "mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0",
										children: [
											(0, b.jsxs)("div", {
												className: "md:grid md:grid-cols-2 md:gap-8",
												children: [
													(0, b.jsxs)("div", {
														children: [
															(0, b.jsx)("h3", {
																className:
																	"text-sm font-semibold uppercase leading-6 text-foreground",
																children: "Product",
															}),
															(0, b.jsxs)("ul", {
																className: "mt-6 space-y-4",
																children: [
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)(j.ScrollButton, {
																			targetId: "product",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Features",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsxs)("div", {
																			className: "relative z-10",
																			ref: o,
																			children: [
																				(0, b.jsxs)("button", {
																					onClick: () => m(!l),
																					className:
																						"flex items-center text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																					"aria-expanded": l,
																					"aria-haspopup": "true",
																					children: [
																						(0, b.jsx)("span", {
																							children: "Cloud Agents",
																						}),
																						(0, b.jsx)(f.ChevronDown, {
																							className: `ml-1 h-4 w-4 transition-transform ${l ? "rotate-180" : ""}`,
																						}),
																					],
																				}),
																				l &&
																					(0, b.jsx)("div", {
																						className:
																							"absolute z-50 mt-2 w-44 origin-top-left scale-95 rounded-md border border-border bg-background shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-100 ease-out data-[state=open]:scale-100 max-xs:right-0 max-xs:origin-top-right xs:left-0",
																						children: (0, b.jsxs)("div", {
																							className:
																								"flex flex-col gap-1 p-2 text-sm text-muted-foreground",
																							children: [
																								(0, b.jsx)(d.default, {
																									href: "/cloud",
																									onClick: () =>
																										m(!1),
																									className:
																										"rounded-md px-3 py-2 transition-colors hover:bg-accent/50 hover:text-foreground",
																									children: "Cloud",
																								}),
																								(0, b.jsx)(d.default, {
																									href: "/reviewer",
																									onClick: () =>
																										m(!1),
																									className:
																										"rounded-md px-3 py-2 transition-colors hover:bg-accent/50 hover:text-foreground",
																									children:
																										"PR Reviewer",
																								}),
																								(0, b.jsx)(d.default, {
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
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: h.EXTERNAL_LINKS.DOCUMENTATION,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Docs",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: h.EXTERNAL_LINKS.CHANGELOG,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Changelog",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: h.EXTERNAL_LINKS.TESTIMONIALS,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Testimonials",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)(d.default, {
																			href: "/enterprise",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Enterprise",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: h.EXTERNAL_LINKS.SECURITY,
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
													(0, b.jsxs)("div", {
														className: "mt-10 md:mt-0",
														children: [
															(0, b.jsx)("h3", {
																className:
																	"text-sm font-semibold uppercase leading-6 text-foreground",
																children: "Resources",
															}),
															(0, b.jsxs)("ul", {
																className: "mt-6 space-y-4",
																children: [
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)(d.default, {
																			href: "/blog",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Blog",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: h.EXTERNAL_LINKS.EVALS,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Evals",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: h.EXTERNAL_LINKS.FAQ,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "FAQ",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: h.EXTERNAL_LINKS.TUTORIALS,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Tutorials",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: h.EXTERNAL_LINKS.ISSUES,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Issues",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: h.EXTERNAL_LINKS.FEATURE_REQUESTS,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Feature Requests",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: h.EXTERNAL_LINKS.OFFICE_HOURS_PODCAST,
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
											(0, b.jsxs)("div", {
												className: "md:grid md:grid-cols-2 md:gap-8",
												children: [
													(0, b.jsxs)("div", {
														children: [
															(0, b.jsx)("h3", {
																className:
																	"text-sm font-semibold uppercase leading-6 text-foreground",
																children: "Company",
															}),
															(0, b.jsxs)("ul", {
																className: "mt-6 space-y-4",
																children: [
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: "mailto:support@roocode.com",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Contact",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: h.EXTERNAL_LINKS.CAREERS,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Careers",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)(d.default, {
																			href: "/terms",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Terms of Service",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsxs)("div", {
																			className: "relative z-10",
																			ref: n,
																			children: [
																				(0, b.jsxs)("button", {
																					onClick: () => k(!a),
																					className:
																						"flex items-center text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																					"aria-expanded": a,
																					"aria-haspopup": "true",
																					children: [
																						(0, b.jsxs)("span", {
																							children: [
																								"Privacy ",
																								(0, b.jsx)("span", {
																									className:
																										"max-[320px]:hidden",
																									children: "Policy",
																								}),
																							],
																						}),
																						(0, b.jsx)(f.ChevronDown, {
																							className: `ml-1 h-4 w-4 transition-transform ${a ? "rotate-180" : ""}`,
																						}),
																					],
																				}),
																				a &&
																					(0, b.jsx)("div", {
																						className:
																							"absolute z-50 mt-2 w-44 origin-top-left scale-95 rounded-md border border-border bg-background shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-100 ease-out data-[state=open]:scale-100 max-xs:right-0 max-xs:origin-top-right xs:left-0",
																						children: (0, b.jsxs)("div", {
																							className:
																								"flex flex-col gap-1 p-2 text-sm text-muted-foreground",
																							children: [
																								(0, b.jsx)("a", {
																									href: h
																										.EXTERNAL_LINKS
																										.PRIVACY_POLICY_EXTENSION,
																									target: "_blank",
																									rel: "noopener noreferrer",
																									onClick: () =>
																										k(!1),
																									className:
																										"rounded-md px-3 py-2 transition-colors hover:bg-accent/50 hover:text-foreground",
																									children:
																										"Extension",
																								}),
																								(0, b.jsx)(d.default, {
																									href: h
																										.INTERNAL_LINKS
																										.PRIVACY_POLICY_WEBSITE,
																									onClick: () =>
																										k(!1),
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
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)(d.default, {
																			href: "/legal/cookies",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Cookie Policy",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)(d.default, {
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
													(0, b.jsxs)("div", {
														className: "mt-10 md:mt-0",
														children: [
															(0, b.jsx)("h3", {
																className:
																	"text-sm font-semibold uppercase leading-6 text-foreground",
																children: "Connect",
															}),
															(0, b.jsxs)("ul", {
																className: "mt-6 space-y-4",
																children: [
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: h.EXTERNAL_LINKS.GITHUB,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "GitHub",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: h.EXTERNAL_LINKS.DISCORD,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Discord",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: h.EXTERNAL_LINKS.REDDIT,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Reddit",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: h.EXTERNAL_LINKS.X,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "X / Twitter",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: h.EXTERNAL_LINKS.LINKEDIN,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "LinkedIn",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: h.EXTERNAL_LINKS.BLUESKY,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "Bluesky",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: h.EXTERNAL_LINKS.TIKTOK,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
																			children: "TikTok",
																		}),
																	}),
																	(0, b.jsx)("li", {
																		children: (0, b.jsx)("a", {
																			href: h.EXTERNAL_LINKS.YOUTUBE,
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
							(0, b.jsx)("div", {
								className: "mt-16 flex border-t border-border pt-8 sm:mt-20 lg:mt-24",
								children: (0, b.jsxs)("p", {
									className: "mx-auto text-sm leading-5 text-muted-foreground",
									children: ["© ", new Date().getFullYear(), " Roo Code. All rights reserved."],
								}),
							}),
						],
					}),
				})
			)
		}
		a.s(["Footer", () => k])
	},
	16014,
	87374,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(67191),
			d = a.i(41254),
			e = a.i(86997)
		function f(a) {
			return (0, e.GenIcon)({
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
			})(a)
		}
		function g(a) {
			return (0, e.GenIcon)({
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
			})(a)
		}
		function h(a) {
			return (0, e.GenIcon)({
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
			})(a)
		}
		a.s(["RxGithubLogo", () => f, "RxMoon", () => g, "RxSun", () => h], 87374), a.i(46951)
		var i = a.i(36894)
		function j() {
			let { theme: a, setTheme: e } = (0, d.useTheme)(),
				[f, j] = (0, c.useState)(!1)
			return ((0, c.useEffect)(() => {
				j(!0)
			}, []),
			f)
				? (0, b.jsx)(i.Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => e("dark" === a ? "light" : "dark"),
						className: "h-9 w-9",
						"aria-label": "Toggle theme",
						children:
							"dark" === a
								? (0, b.jsx)(h, { className: "h-4 w-4 transition-all" })
								: (0, b.jsx)(g, { className: "h-4 w-4 transition-all" }),
					})
				: (0, b.jsx)(i.Button, {
						variant: "ghost",
						size: "icon",
						disabled: !0,
						className: "h-9 w-9",
						children: (0, b.jsx)(h, { className: "h-4 w-4" }),
					})
		}
		a.s(["default", () => j], 16014)
	},
	30359,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(46395),
			d = a.i(71544),
			e = a.i(67191),
			f = a.i(87374),
			g = a.i(27794),
			h = a.i(86997)
		function i(a) {
			return (0, h.GenIcon)({
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
			})(a)
		}
		var j = a.i(30787),
			k = a.i(16209)
		a.i(46951)
		var l = a.i(16995),
			m = a.i(16014)
		let n = (0, a.i(8402).default)("brain", [
			["path", { d: "M12 18V5", key: "adv99a" }],
			["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
			["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
			["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
			["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
			["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
			["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
			["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }],
		])
		var o = a.i(72187),
			p = a.i(40146),
			q = a.i(40760),
			r = a.i(29159),
			s = a.i(23360),
			t = a.i(44823),
			u = a.i(59653),
			v = a.i(11306),
			w = a.i(70962),
			x = a.i(57111),
			y = e.createContext(void 0),
			z = a.i(64699),
			A = a.i(3058),
			B = a.i(79696)
		function C(a) {
			let c = a + "CollectionProvider",
				[d, f] = (0, t.createContextScope)(c),
				[g, h] = d(c, { collectionRef: { current: null }, itemMap: new Map() }),
				i = (a) => {
					let { scope: c, children: d } = a,
						f = e.default.useRef(null),
						h = e.default.useRef(new Map()).current
					return (0, b.jsx)(g, { scope: c, itemMap: h, collectionRef: f, children: d })
				}
			i.displayName = c
			let j = a + "CollectionSlot",
				k = (0, B.createSlot)(j),
				l = e.default.forwardRef((a, c) => {
					let { scope: d, children: e } = a,
						f = h(j, d),
						g = (0, x.useComposedRefs)(c, f.collectionRef)
					return (0, b.jsx)(k, { ref: g, children: e })
				})
			l.displayName = j
			let m = a + "CollectionItemSlot",
				n = "data-radix-collection-item",
				o = (0, B.createSlot)(m),
				p = e.default.forwardRef((a, c) => {
					let { scope: d, children: f, ...g } = a,
						i = e.default.useRef(null),
						j = (0, x.useComposedRefs)(c, i),
						k = h(m, d)
					return (
						e.default.useEffect(() => (k.itemMap.set(i, { ref: i, ...g }), () => void k.itemMap.delete(i))),
						(0, b.jsx)(o, { ...{ [n]: "" }, ref: j, children: f })
					)
				})
			return (
				(p.displayName = m),
				[
					{ Provider: i, Slot: l, ItemSlot: p },
					function (b) {
						let c = h(a + "CollectionConsumer", b)
						return e.default.useCallback(() => {
							let a = c.collectionRef.current
							if (!a) return []
							let b = Array.from(a.querySelectorAll(`[${n}]`))
							return Array.from(c.itemMap.values()).sort(
								(a, c) => b.indexOf(a.ref.current) - b.indexOf(c.ref.current),
							)
						}, [c.collectionRef, c.itemMap])
					},
					f,
				]
			)
		}
		var D = new WeakMap()
		function E(a, b) {
			var c, d
			let e, f, g
			if ("at" in Array.prototype) return Array.prototype.at.call(a, b)
			let h = ((c = a), (d = b), (e = c.length), (g = (f = F(d)) >= 0 ? f : e + f) < 0 || g >= e ? -1 : g)
			return -1 === h ? void 0 : a[h]
		}
		function F(a) {
			return a != a || 0 === a ? 0 : Math.trunc(a)
		}
		;(class a extends Map {
			#q
			constructor(a) {
				super(a), (this.#q = [...super.keys()]), D.set(this, !0)
			}
			set(a, b) {
				return (
					D.get(this) && (this.has(a) ? (this.#q[this.#q.indexOf(a)] = a) : this.#q.push(a)),
					super.set(a, b),
					this
				)
			}
			insert(a, b, c) {
				let d,
					e = this.has(b),
					f = this.#q.length,
					g = F(a),
					h = g >= 0 ? g : f + g,
					i = h < 0 || h >= f ? -1 : h
				if (i === this.size || (e && i === this.size - 1) || -1 === i) return this.set(b, c), this
				let j = this.size + +!e
				g < 0 && h++
				let k = [...this.#q],
					l = !1
				for (let a = h; a < j; a++)
					if (h === a) {
						let f = k[a]
						k[a] === b && (f = k[a + 1]), e && this.delete(b), (d = this.get(f)), this.set(b, c)
					} else {
						l || k[a - 1] !== b || (l = !0)
						let c = k[l ? a : a - 1],
							e = d
						;(d = this.get(c)), this.delete(c), this.set(c, e)
					}
				return this
			}
			with(b, c, d) {
				let e = new a(this)
				return e.insert(b, c, d), e
			}
			before(a) {
				let b = this.#q.indexOf(a) - 1
				if (!(b < 0)) return this.entryAt(b)
			}
			setBefore(a, b, c) {
				let d = this.#q.indexOf(a)
				return -1 === d ? this : this.insert(d, b, c)
			}
			after(a) {
				let b = this.#q.indexOf(a)
				if (-1 !== (b = -1 === b || b === this.size - 1 ? -1 : b + 1)) return this.entryAt(b)
			}
			setAfter(a, b, c) {
				let d = this.#q.indexOf(a)
				return -1 === d ? this : this.insert(d + 1, b, c)
			}
			first() {
				return this.entryAt(0)
			}
			last() {
				return this.entryAt(-1)
			}
			clear() {
				return (this.#q = []), super.clear()
			}
			delete(a) {
				let b = super.delete(a)
				return b && this.#q.splice(this.#q.indexOf(a), 1), b
			}
			deleteAt(a) {
				let b = this.keyAt(a)
				return void 0 !== b && this.delete(b)
			}
			at(a) {
				let b = E(this.#q, a)
				if (void 0 !== b) return this.get(b)
			}
			entryAt(a) {
				let b = E(this.#q, a)
				if (void 0 !== b) return [b, this.get(b)]
			}
			indexOf(a) {
				return this.#q.indexOf(a)
			}
			keyAt(a) {
				return E(this.#q, a)
			}
			from(a, b) {
				let c = this.indexOf(a)
				if (-1 === c) return
				let d = c + b
				return d < 0 && (d = 0), d >= this.size && (d = this.size - 1), this.at(d)
			}
			keyFrom(a, b) {
				let c = this.indexOf(a)
				if (-1 === c) return
				let d = c + b
				return d < 0 && (d = 0), d >= this.size && (d = this.size - 1), this.keyAt(d)
			}
			find(a, b) {
				let c = 0
				for (let d of this) {
					if (Reflect.apply(a, b, [d, c, this])) return d
					c++
				}
			}
			findIndex(a, b) {
				let c = 0
				for (let d of this) {
					if (Reflect.apply(a, b, [d, c, this])) return c
					c++
				}
				return -1
			}
			filter(b, c) {
				let d = [],
					e = 0
				for (let a of this) Reflect.apply(b, c, [a, e, this]) && d.push(a), e++
				return new a(d)
			}
			map(b, c) {
				let d = [],
					e = 0
				for (let a of this) d.push([a[0], Reflect.apply(b, c, [a, e, this])]), e++
				return new a(d)
			}
			reduce(...a) {
				let [b, c] = a,
					d = 0,
					e = c ?? this.at(0)
				for (let c of this) (e = 0 === d && 1 === a.length ? c : Reflect.apply(b, this, [e, c, d, this])), d++
				return e
			}
			reduceRight(...a) {
				let [b, c] = a,
					d = c ?? this.at(-1)
				for (let c = this.size - 1; c >= 0; c--) {
					let e = this.at(c)
					d = c === this.size - 1 && 1 === a.length ? e : Reflect.apply(b, this, [d, e, c, this])
				}
				return d
			}
			toSorted(b) {
				return new a([...this.entries()].sort(b))
			}
			toReversed() {
				let b = new a()
				for (let a = this.size - 1; a >= 0; a--) {
					let c = this.keyAt(a),
						d = this.get(c)
					b.set(c, d)
				}
				return b
			}
			toSpliced(...b) {
				let c = [...this.entries()]
				return c.splice(...b), new a(c)
			}
			slice(b, c) {
				let d = new a(),
					e = this.size - 1
				if (void 0 === b) return d
				b < 0 && (b += this.size), void 0 !== c && c > 0 && (e = c - 1)
				for (let a = b; a <= e; a++) {
					let b = this.keyAt(a),
						c = this.get(b)
					d.set(b, c)
				}
				return d
			}
			every(a, b) {
				let c = 0
				for (let d of this) {
					if (!Reflect.apply(a, b, [d, c, this])) return !1
					c++
				}
				return !0
			}
			some(a, b) {
				let c = 0
				for (let d of this) {
					if (Reflect.apply(a, b, [d, c, this])) return !0
					c++
				}
				return !1
			}
		})
		var G = a.i(88986),
			H = a.i(39743),
			I = a.i(95840),
			J = Object.freeze({
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
			K = e.forwardRef((a, c) => (0, b.jsx)(v.Primitive.span, { ...a, ref: c, style: { ...J, ...a.style } }))
		K.displayName = "VisuallyHidden"
		var L = "NavigationMenu",
			[M, N, O] = C(L),
			[P, Q, R] = C(L),
			[S, T] = (0, t.createContextScope)(L, [O, R]),
			[U, V] = S(L),
			[W, X] = S(L),
			Y = e.forwardRef((a, c) => {
				let d,
					{
						__scopeNavigationMenu: f,
						value: g,
						onValueChange: h,
						defaultValue: i,
						delayDuration: j = 200,
						skipDelayDuration: k = 300,
						orientation: l = "horizontal",
						dir: m,
						...n
					} = a,
					[o, p] = e.useState(null),
					q = (0, x.useComposedRefs)(c, (a) => p(a)),
					r = ((d = e.useContext(y)), m || d || "ltr"),
					s = e.useRef(0),
					t = e.useRef(0),
					u = e.useRef(0),
					[z, A] = e.useState(!0),
					[B, C] = (0, w.useControllableState)({
						prop: g,
						onChange: (a) => {
							let b = k > 0
							"" !== a
								? (window.clearTimeout(u.current), b && A(!1))
								: (window.clearTimeout(u.current), (u.current = window.setTimeout(() => A(!0), k))),
								h?.(a)
						},
						defaultProp: i ?? "",
						caller: L,
					}),
					D = e.useCallback(() => {
						window.clearTimeout(t.current), (t.current = window.setTimeout(() => C(""), 150))
					}, [C]),
					E = e.useCallback(
						(a) => {
							window.clearTimeout(t.current), C(a)
						},
						[C],
					),
					F = e.useCallback(
						(a) => {
							B === a
								? window.clearTimeout(t.current)
								: (s.current = window.setTimeout(() => {
										window.clearTimeout(t.current), C(a)
									}, j))
						},
						[B, C, j],
					)
				return (
					e.useEffect(
						() => () => {
							window.clearTimeout(s.current),
								window.clearTimeout(t.current),
								window.clearTimeout(u.current)
						},
						[],
					),
					(0, b.jsx)($, {
						scope: f,
						isRootMenu: !0,
						value: B,
						dir: r,
						orientation: l,
						rootNavigationMenu: o,
						onTriggerEnter: (a) => {
							window.clearTimeout(s.current), z ? F(a) : E(a)
						},
						onTriggerLeave: () => {
							window.clearTimeout(s.current), D()
						},
						onContentEnter: () => window.clearTimeout(t.current),
						onContentLeave: D,
						onItemSelect: (a) => {
							C((b) => (b === a ? "" : a))
						},
						onItemDismiss: () => C(""),
						children: (0, b.jsx)(v.Primitive.nav, {
							"aria-label": "Main",
							"data-orientation": l,
							dir: r,
							...n,
							ref: q,
						}),
					})
				)
			})
		Y.displayName = L
		var Z = "NavigationMenuSub"
		e.forwardRef((a, c) => {
			let {
					__scopeNavigationMenu: d,
					value: e,
					onValueChange: f,
					defaultValue: g,
					orientation: h = "horizontal",
					...i
				} = a,
				j = V(Z, d),
				[k, l] = (0, w.useControllableState)({ prop: e, onChange: f, defaultProp: g ?? "", caller: Z })
			return (0, b.jsx)($, {
				scope: d,
				isRootMenu: !1,
				value: k,
				dir: j.dir,
				orientation: h,
				rootNavigationMenu: j.rootNavigationMenu,
				onTriggerEnter: (a) => l(a),
				onItemSelect: (a) => l(a),
				onItemDismiss: () => l(""),
				children: (0, b.jsx)(v.Primitive.div, { "data-orientation": h, ...i, ref: c }),
			})
		}).displayName = Z
		var $ = (a) => {
				let c,
					{
						scope: d,
						isRootMenu: f,
						rootNavigationMenu: g,
						dir: h,
						orientation: i,
						children: j,
						value: k,
						onItemSelect: l,
						onItemDismiss: m,
						onTriggerEnter: n,
						onTriggerLeave: o,
						onContentEnter: p,
						onContentLeave: q,
					} = a,
					[r, s] = e.useState(null),
					[t, u] = e.useState(new Map()),
					[v, w] = e.useState(null)
				return (0, b.jsx)(U, {
					scope: d,
					isRootMenu: f,
					rootNavigationMenu: g,
					value: k,
					previousValue:
						((c = e.useRef({ value: k, previous: k })),
						e.useMemo(
							() => (
								c.current.value !== k &&
									((c.current.previous = c.current.value), (c.current.value = k)),
								c.current.previous
							),
							[k],
						)),
					baseId: (0, A.useId)(),
					dir: h,
					orientation: i,
					viewport: r,
					onViewportChange: s,
					indicatorTrack: v,
					onIndicatorTrackChange: w,
					onTriggerEnter: (0, I.useCallbackRef)(n),
					onTriggerLeave: (0, I.useCallbackRef)(o),
					onContentEnter: (0, I.useCallbackRef)(p),
					onContentLeave: (0, I.useCallbackRef)(q),
					onItemSelect: (0, I.useCallbackRef)(l),
					onItemDismiss: (0, I.useCallbackRef)(m),
					onViewportContentChange: e.useCallback((a, b) => {
						u((c) => (c.set(a, b), new Map(c)))
					}, []),
					onViewportContentRemove: e.useCallback((a) => {
						u((b) => (b.has(a) ? (b.delete(a), new Map(b)) : b))
					}, []),
					children: (0, b.jsx)(M.Provider, {
						scope: d,
						children: (0, b.jsx)(W, { scope: d, items: t, children: j }),
					}),
				})
			},
			_ = "NavigationMenuList",
			aa = e.forwardRef((a, c) => {
				let { __scopeNavigationMenu: d, ...e } = a,
					f = V(_, d),
					g = (0, b.jsx)(v.Primitive.ul, { "data-orientation": f.orientation, ...e, ref: c })
				return (0, b.jsx)(v.Primitive.div, {
					style: { position: "relative" },
					ref: f.onIndicatorTrackChange,
					children: (0, b.jsx)(M.Slot, {
						scope: d,
						children: f.isRootMenu ? (0, b.jsx)(au, { asChild: !0, children: g }) : g,
					}),
				})
			})
		aa.displayName = _
		var ab = "NavigationMenuItem",
			[ac, ad] = S(ab),
			ae = e.forwardRef((a, c) => {
				let { __scopeNavigationMenu: d, value: f, ...g } = a,
					h = (0, A.useId)(),
					i = e.useRef(null),
					j = e.useRef(null),
					k = e.useRef(null),
					l = e.useRef(() => {}),
					m = e.useRef(!1),
					n = e.useCallback((a = "start") => {
						if (i.current) {
							l.current()
							let b = ax(i.current)
							b.length && ay("start" === a ? b : b.reverse())
						}
					}, []),
					o = e.useCallback(() => {
						if (i.current) {
							var a
							let b = ax(i.current)
							b.length &&
								((a = b).forEach((a) => {
									;(a.dataset.tabindex = a.getAttribute("tabindex") || ""),
										a.setAttribute("tabindex", "-1")
								}),
								(l.current = () => {
									a.forEach((a) => {
										let b = a.dataset.tabindex
										a.setAttribute("tabindex", b)
									})
								}))
						}
					}, [])
				return (0, b.jsx)(ac, {
					scope: d,
					value: f || h || "LEGACY_REACT_AUTO_VALUE",
					triggerRef: j,
					contentRef: i,
					focusProxyRef: k,
					wasEscapeCloseRef: m,
					onEntryKeyDown: n,
					onFocusProxyEnter: n,
					onRootContentClose: o,
					onContentFocusOutside: o,
					children: (0, b.jsx)(v.Primitive.li, { ...g, ref: c }),
				})
			})
		ae.displayName = ab
		var af = "NavigationMenuTrigger",
			ag = e.forwardRef((a, c) => {
				let { __scopeNavigationMenu: d, disabled: f, ...g } = a,
					h = V(af, a.__scopeNavigationMenu),
					i = ad(af, a.__scopeNavigationMenu),
					j = e.useRef(null),
					k = (0, x.useComposedRefs)(j, i.triggerRef, c),
					l = aB(h.baseId, i.value),
					m = aC(h.baseId, i.value),
					n = e.useRef(!1),
					o = e.useRef(!1),
					p = i.value === h.value
				return (0, b.jsxs)(b.Fragment, {
					children: [
						(0, b.jsx)(M.ItemSlot, {
							scope: d,
							value: i.value,
							children: (0, b.jsx)(aw, {
								asChild: !0,
								children: (0, b.jsx)(v.Primitive.button, {
									id: l,
									disabled: f,
									"data-disabled": f ? "" : void 0,
									"data-state": aA(p),
									"aria-expanded": p,
									"aria-controls": m,
									...g,
									ref: k,
									onPointerEnter: (0, u.composeEventHandlers)(a.onPointerEnter, () => {
										;(o.current = !1), (i.wasEscapeCloseRef.current = !1)
									}),
									onPointerMove: (0, u.composeEventHandlers)(
										a.onPointerMove,
										aD(() => {
											f ||
												o.current ||
												i.wasEscapeCloseRef.current ||
												n.current ||
												(h.onTriggerEnter(i.value), (n.current = !0))
										}),
									),
									onPointerLeave: (0, u.composeEventHandlers)(
										a.onPointerLeave,
										aD(() => {
											f || (h.onTriggerLeave(), (n.current = !1))
										}),
									),
									onClick: (0, u.composeEventHandlers)(a.onClick, () => {
										h.onItemSelect(i.value), (o.current = p)
									}),
									onKeyDown: (0, u.composeEventHandlers)(a.onKeyDown, (a) => {
										let b = {
											horizontal: "ArrowDown",
											vertical: "rtl" === h.dir ? "ArrowLeft" : "ArrowRight",
										}[h.orientation]
										p && a.key === b && (i.onEntryKeyDown(), a.preventDefault())
									}),
								}),
							}),
						}),
						p &&
							(0, b.jsxs)(b.Fragment, {
								children: [
									(0, b.jsx)(K, {
										"aria-hidden": !0,
										tabIndex: 0,
										ref: i.focusProxyRef,
										onFocus: (a) => {
											let b = i.contentRef.current,
												c = a.relatedTarget,
												d = c === j.current,
												e = b?.contains(c)
											;(d || !e) && i.onFocusProxyEnter(d ? "start" : "end")
										},
									}),
									h.viewport && (0, b.jsx)("span", { "aria-owns": m }),
								],
							}),
					],
				})
			})
		ag.displayName = af
		var ah = "navigationMenu.linkSelect",
			ai = e.forwardRef((a, c) => {
				let { __scopeNavigationMenu: d, active: e, onSelect: f, ...g } = a
				return (0, b.jsx)(aw, {
					asChild: !0,
					children: (0, b.jsx)(v.Primitive.a, {
						"data-active": e ? "" : void 0,
						"aria-current": e ? "page" : void 0,
						...g,
						ref: c,
						onClick: (0, u.composeEventHandlers)(
							a.onClick,
							(a) => {
								let b = a.target,
									c = new CustomEvent(ah, { bubbles: !0, cancelable: !0 })
								if (
									(b.addEventListener(ah, (a) => f?.(a), { once: !0 }),
									(0, v.dispatchDiscreteCustomEvent)(b, c),
									!c.defaultPrevented && !a.metaKey)
								) {
									let a = new CustomEvent(ap, { bubbles: !0, cancelable: !0 })
									;(0, v.dispatchDiscreteCustomEvent)(b, a)
								}
							},
							{ checkForDefaultPrevented: !1 },
						),
					}),
				})
			})
		ai.displayName = "NavigationMenuLink"
		var aj = "NavigationMenuIndicator",
			ak = e.forwardRef((a, c) => {
				let { forceMount: d, ...e } = a,
					f = V(aj, a.__scopeNavigationMenu),
					g = !!f.value
				return f.indicatorTrack
					? s.default.createPortal(
							(0, b.jsx)(z.Presence, { present: d || g, children: (0, b.jsx)(al, { ...e, ref: c }) }),
							f.indicatorTrack,
						)
					: null
			})
		ak.displayName = aj
		var al = e.forwardRef((a, c) => {
				let { __scopeNavigationMenu: d, ...f } = a,
					g = V(aj, d),
					h = N(d),
					[i, j] = e.useState(null),
					[k, l] = e.useState(null),
					m = "horizontal" === g.orientation,
					n = !!g.value
				e.useEffect(() => {
					let a = h(),
						b = a.find((a) => a.value === g.value)?.ref.current
					b && j(b)
				}, [h, g.value])
				let o = () => {
					i && l({ size: m ? i.offsetWidth : i.offsetHeight, offset: m ? i.offsetLeft : i.offsetTop })
				}
				return (
					az(i, o),
					az(g.indicatorTrack, o),
					k
						? (0, b.jsx)(v.Primitive.div, {
								"aria-hidden": !0,
								"data-state": n ? "visible" : "hidden",
								"data-orientation": g.orientation,
								...f,
								ref: c,
								style: {
									position: "absolute",
									...(m
										? { left: 0, width: k.size + "px", transform: `translateX(${k.offset}px)` }
										: { top: 0, height: k.size + "px", transform: `translateY(${k.offset}px)` }),
									...f.style,
								},
							})
						: null
				)
			}),
			am = "NavigationMenuContent",
			an = e.forwardRef((a, c) => {
				let { forceMount: d, ...e } = a,
					f = V(am, a.__scopeNavigationMenu),
					g = ad(am, a.__scopeNavigationMenu),
					h = (0, x.useComposedRefs)(g.contentRef, c),
					i = g.value === f.value,
					j = {
						value: g.value,
						triggerRef: g.triggerRef,
						focusProxyRef: g.focusProxyRef,
						wasEscapeCloseRef: g.wasEscapeCloseRef,
						onContentFocusOutside: g.onContentFocusOutside,
						onRootContentClose: g.onRootContentClose,
						...e,
					}
				return f.viewport
					? (0, b.jsx)(ao, { forceMount: d, ...j, ref: h })
					: (0, b.jsx)(z.Presence, {
							present: d || i,
							children: (0, b.jsx)(aq, {
								"data-state": aA(i),
								...j,
								ref: h,
								onPointerEnter: (0, u.composeEventHandlers)(a.onPointerEnter, f.onContentEnter),
								onPointerLeave: (0, u.composeEventHandlers)(a.onPointerLeave, aD(f.onContentLeave)),
								style: { pointerEvents: !i && f.isRootMenu ? "none" : void 0, ...j.style },
							}),
						})
			})
		an.displayName = am
		var ao = e.forwardRef((a, b) => {
				let { onViewportContentChange: c, onViewportContentRemove: d } = V(am, a.__scopeNavigationMenu)
				return (
					(0, H.useLayoutEffect)(() => {
						c(a.value, { ref: b, ...a })
					}, [a, b, c]),
					(0, H.useLayoutEffect)(() => () => d(a.value), [a.value, d]),
					null
				)
			}),
			ap = "navigationMenu.rootContentDismiss",
			aq = e.forwardRef((a, c) => {
				let {
						__scopeNavigationMenu: d,
						value: f,
						triggerRef: g,
						focusProxyRef: h,
						wasEscapeCloseRef: i,
						onRootContentClose: j,
						onContentFocusOutside: k,
						...l
					} = a,
					m = V(am, d),
					n = e.useRef(null),
					o = (0, x.useComposedRefs)(n, c),
					p = aB(m.baseId, f),
					q = aC(m.baseId, f),
					r = N(d),
					s = e.useRef(null),
					{ onItemDismiss: t } = m
				e.useEffect(() => {
					let a = n.current
					if (m.isRootMenu && a) {
						let b = () => {
							t(), j(), a.contains(document.activeElement) && g.current?.focus()
						}
						return a.addEventListener(ap, b), () => a.removeEventListener(ap, b)
					}
				}, [m.isRootMenu, a.value, g, t, j])
				let v = e.useMemo(() => {
					let a = r().map((a) => a.value)
					"rtl" === m.dir && a.reverse()
					let b = a.indexOf(m.value),
						c = a.indexOf(m.previousValue),
						d = f === m.value,
						e = c === a.indexOf(f)
					if (!d && !e) return s.current
					let g = (() => {
						if (b !== c) {
							if (d && -1 !== c) return b > c ? "from-end" : "from-start"
							if (e && -1 !== b) return b > c ? "to-start" : "to-end"
						}
						return null
					})()
					return (s.current = g), g
				}, [m.previousValue, m.value, m.dir, r, f])
				return (0, b.jsx)(au, {
					asChild: !0,
					children: (0, b.jsx)(G.DismissableLayer, {
						id: q,
						"aria-labelledby": p,
						"data-motion": v,
						"data-orientation": m.orientation,
						...l,
						ref: o,
						disableOutsidePointerEvents: !1,
						onDismiss: () => {
							let a = new Event(ap, { bubbles: !0, cancelable: !0 })
							n.current?.dispatchEvent(a)
						},
						onFocusOutside: (0, u.composeEventHandlers)(a.onFocusOutside, (a) => {
							k()
							let b = a.target
							m.rootNavigationMenu?.contains(b) && a.preventDefault()
						}),
						onPointerDownOutside: (0, u.composeEventHandlers)(a.onPointerDownOutside, (a) => {
							let b = a.target,
								c = r().some((a) => a.ref.current?.contains(b)),
								d = m.isRootMenu && m.viewport?.contains(b)
							;(c || d || !m.isRootMenu) && a.preventDefault()
						}),
						onKeyDown: (0, u.composeEventHandlers)(a.onKeyDown, (a) => {
							let b = a.altKey || a.ctrlKey || a.metaKey
							if ("Tab" === a.key && !b) {
								let b = ax(a.currentTarget),
									c = document.activeElement,
									d = b.findIndex((a) => a === c)
								ay(a.shiftKey ? b.slice(0, d).reverse() : b.slice(d + 1, b.length))
									? a.preventDefault()
									: h.current?.focus()
							}
						}),
						onEscapeKeyDown: (0, u.composeEventHandlers)(a.onEscapeKeyDown, (a) => {
							i.current = !0
						}),
					}),
				})
			}),
			ar = "NavigationMenuViewport",
			as = e.forwardRef((a, c) => {
				let { forceMount: d, ...e } = a,
					f = !!V(ar, a.__scopeNavigationMenu).value
				return (0, b.jsx)(z.Presence, { present: d || f, children: (0, b.jsx)(at, { ...e, ref: c }) })
			})
		as.displayName = ar
		var at = e.forwardRef((a, c) => {
				let { __scopeNavigationMenu: d, children: f, ...g } = a,
					h = V(ar, d),
					i = (0, x.useComposedRefs)(c, h.onViewportChange),
					j = X(am, a.__scopeNavigationMenu),
					[k, l] = e.useState(null),
					[m, n] = e.useState(null),
					o = k ? k?.width + "px" : void 0,
					p = k ? k?.height + "px" : void 0,
					q = !!h.value,
					r = q ? h.value : h.previousValue
				return (
					az(m, () => {
						m && l({ width: m.offsetWidth, height: m.offsetHeight })
					}),
					(0, b.jsx)(v.Primitive.div, {
						"data-state": aA(q),
						"data-orientation": h.orientation,
						...g,
						ref: i,
						style: {
							pointerEvents: !q && h.isRootMenu ? "none" : void 0,
							"--radix-navigation-menu-viewport-width": o,
							"--radix-navigation-menu-viewport-height": p,
							...g.style,
						},
						onPointerEnter: (0, u.composeEventHandlers)(a.onPointerEnter, h.onContentEnter),
						onPointerLeave: (0, u.composeEventHandlers)(a.onPointerLeave, aD(h.onContentLeave)),
						children: Array.from(j.items).map(([a, { ref: c, forceMount: d, ...e }]) => {
							let f = r === a
							return (0, b.jsx)(
								z.Presence,
								{
									present: d || f,
									children: (0, b.jsx)(aq, {
										...e,
										ref: (0, x.composeRefs)(c, (a) => {
											f && a && n(a)
										}),
									}),
								},
								a,
							)
						}),
					})
				)
			}),
			au = e.forwardRef((a, c) => {
				let { __scopeNavigationMenu: d, ...e } = a,
					f = V("FocusGroup", d)
				return (0, b.jsx)(P.Provider, {
					scope: d,
					children: (0, b.jsx)(P.Slot, {
						scope: d,
						children: (0, b.jsx)(v.Primitive.div, { dir: f.dir, ...e, ref: c }),
					}),
				})
			}),
			av = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
			aw = e.forwardRef((a, c) => {
				let { __scopeNavigationMenu: d, ...e } = a,
					f = Q(d),
					g = V("FocusGroupItem", d)
				return (0, b.jsx)(P.ItemSlot, {
					scope: d,
					children: (0, b.jsx)(v.Primitive.button, {
						...e,
						ref: c,
						onKeyDown: (0, u.composeEventHandlers)(a.onKeyDown, (a) => {
							if (["Home", "End", ...av].includes(a.key)) {
								let b = f().map((a) => a.ref.current)
								if (
									(["rtl" === g.dir ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(a.key) &&
										b.reverse(),
									av.includes(a.key))
								) {
									let c = b.indexOf(a.currentTarget)
									b = b.slice(c + 1)
								}
								setTimeout(() => ay(b)), a.preventDefault()
							}
						}),
					}),
				})
			})
		function ax(a) {
			let b = [],
				c = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
					acceptNode: (a) => {
						let b = "INPUT" === a.tagName && "hidden" === a.type
						return a.disabled || a.hidden || b
							? NodeFilter.FILTER_SKIP
							: a.tabIndex >= 0
								? NodeFilter.FILTER_ACCEPT
								: NodeFilter.FILTER_SKIP
					},
				})
			for (; c.nextNode(); ) b.push(c.currentNode)
			return b
		}
		function ay(a) {
			let b = document.activeElement
			return a.some((a) => a === b || (a.focus(), document.activeElement !== b))
		}
		function az(a, b) {
			let c = (0, I.useCallbackRef)(b)
			;(0, H.useLayoutEffect)(() => {
				let b = 0
				if (a) {
					let d = new ResizeObserver(() => {
						cancelAnimationFrame(b), (b = window.requestAnimationFrame(c))
					})
					return (
						d.observe(a),
						() => {
							window.cancelAnimationFrame(b), d.unobserve(a)
						}
					)
				}
			}, [a, c])
		}
		function aA(a) {
			return a ? "open" : "closed"
		}
		function aB(a, b) {
			return `${a}-trigger-${b}`
		}
		function aC(a, b) {
			return `${a}-content-${b}`
		}
		function aD(a) {
			return (b) => ("mouse" === b.pointerType ? a(b) : void 0)
		}
		var aE = a.i(42261),
			aF = a.i(92137),
			aG = a.i(42685)
		let aH = e.forwardRef(({ className: a, children: c, ...d }, e) =>
			(0, b.jsxs)(Y, {
				ref: e,
				className: (0, aG.cn)("relative z-10 flex max-w-max flex-1 items-center", a),
				...d,
				children: [c, (0, b.jsx)(aM, {})],
			}),
		)
		aH.displayName = Y.displayName
		let aI = e.forwardRef(({ className: a, ...c }, d) =>
			(0, b.jsx)(aa, {
				ref: d,
				className: (0, aG.cn)("group flex flex-1 list-none items-center space-x-1", a),
				...c,
			}),
		)
		aI.displayName = aa.displayName
		let aJ = (0, aE.cva)(
				"group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent",
			),
			aK = e.forwardRef(({ className: a, children: c, ...d }, e) =>
				(0, b.jsxs)(ag, {
					ref: e,
					className: (0, aG.cn)(aJ(), "group", a),
					...d,
					children: [
						c,
						" ",
						(0, b.jsx)(aF.ChevronDown, {
							className:
								"relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
							"aria-hidden": "true",
						}),
					],
				}),
			)
		aK.displayName = ag.displayName
		let aL = e.forwardRef(({ className: a, ...c }, d) =>
			(0, b.jsx)(an, {
				ref: d,
				className: (0, aG.cn)(
					"left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
					a,
				),
				...c,
			}),
		)
		aL.displayName = an.displayName
		let aM = e.forwardRef(({ className: a, ...c }, d) =>
			(0, b.jsx)("div", {
				className: (0, aG.cn)("absolute left-0 top-full flex justify-center"),
				children: (0, b.jsx)(as, {
					className: (0, aG.cn)(
						"origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
						a,
					),
					ref: d,
					...c,
				}),
			}),
		)
		function aN({ className: a }) {
			return (0, b.jsx)("svg", {
				className: a,
				viewBox: "0 0 100 100",
				fill: "currentColor",
				xmlns: "http://www.w3.org/2000/svg",
				children: (0, b.jsx)("path", {
					d: "M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z",
				}),
			})
		}
		function aO({ stars: a, downloads: h }) {
			let [s, t] = (0, e.useState)(!1),
				u = (0, k.useLogoSrc)()
			return (0, b.jsxs)("header", {
				className: "sticky font-light top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md",
				children: [
					(0, b.jsxs)("div", {
						className: "container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8",
						children: [
							(0, b.jsx)("div", {
								className: "flex items-center flex-shrink-0",
								children: (0, b.jsx)(c.default, {
									href: "/",
									className: "flex items-center",
									children: (0, b.jsx)(d.default, {
										src: u,
										alt: "Roo Code Logo",
										width: 130,
										height: 24,
										className: "h-[24px] w-auto",
									}),
								}),
							}),
							(0, b.jsx)(aH, {
								className: "grow ml-6 hidden text-sm md:flex",
								children: (0, b.jsxs)(aI, {
									children: [
										(0, b.jsxs)(ae, {
											children: [
												(0, b.jsx)(aK, {
													className: "bg-transparent font-light",
													children: "Product",
												}),
												(0, b.jsx)(aL, {
													children: (0, b.jsxs)("ul", {
														className: "grid min-w-[260px] gap-1 p-2",
														children: [
															(0, b.jsx)("li", {
																children: (0, b.jsx)(ai, {
																	asChild: !0,
																	children: (0, b.jsxs)(c.default, {
																		href: "/extension",
																		className:
																			"flex items-center select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
																		children: [
																			(0, b.jsx)(p.Puzzle, {
																				className: "size-3 mr-2",
																			}),
																			"Roo Code VS Code Extension",
																		],
																	}),
																}),
															}),
															(0, b.jsx)("li", {
																children: (0, b.jsx)(ai, {
																	asChild: !0,
																	children: (0, b.jsxs)(c.default, {
																		href: "/cloud",
																		className:
																			"flex items-center select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
																		children: [
																			(0, b.jsx)(o.Cloud, {
																				className: "size-3 mr-2",
																			}),
																			"Roo Code Cloud",
																		],
																	}),
																}),
															}),
															(0, b.jsx)("li", {
																children: (0, b.jsx)(ai, {
																	asChild: !0,
																	children: (0, b.jsxs)(c.default, {
																		href: "/slack",
																		className:
																			"flex items-center select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
																		children: [
																			(0, b.jsx)(q.Slack, {
																				className: "size-3 mr-2",
																			}),
																			"Roo Code for Slack",
																		],
																	}),
																}),
															}),
															(0, b.jsx)("li", {
																children: (0, b.jsx)(ai, {
																	asChild: !0,
																	children: (0, b.jsxs)(c.default, {
																		href: "/linear",
																		className:
																			"flex items-center select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
																		children: [
																			(0, b.jsx)(aN, {
																				className: "size-3 mr-2",
																			}),
																			"Roo Code for Linear",
																		],
																	}),
																}),
															}),
															(0, b.jsx)("li", {
																children: (0, b.jsx)(ai, {
																	asChild: !0,
																	children: (0, b.jsxs)(c.default, {
																		href: "/provider",
																		className:
																			"flex items-center select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
																		children: [
																			(0, b.jsx)(n, { className: "size-3 mr-2" }),
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
										(0, b.jsxs)(ae, {
											children: [
												(0, b.jsx)(aK, {
													className: "bg-transparent font-light",
													children: "Resources",
												}),
												(0, b.jsx)(aL, {
													children: (0, b.jsxs)("ul", {
														className: "grid min-w-[260px] gap-1 p-2",
														children: [
															(0, b.jsx)("li", {
																children: (0, b.jsx)(ai, {
																	asChild: !0,
																	children: (0, b.jsx)(c.default, {
																		href: "/blog",
																		className:
																			"block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
																		children: "Blog",
																	}),
																}),
															}),
															(0, b.jsx)("li", {
																children: (0, b.jsx)(ai, {
																	asChild: !0,
																	children: (0, b.jsx)(c.default, {
																		href: "/evals",
																		className:
																			"block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
																		children: "Evals",
																	}),
																}),
															}),
															(0, b.jsx)("li", {
																children: (0, b.jsx)(ai, {
																	asChild: !0,
																	children: (0, b.jsx)("a", {
																		href: j.EXTERNAL_LINKS.DISCORD,
																		target: "_blank",
																		rel: "noopener noreferrer",
																		className:
																			"block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
																		children: "Discord",
																	}),
																}),
															}),
															(0, b.jsx)("li", {
																children: (0, b.jsx)(ai, {
																	asChild: !0,
																	children: (0, b.jsx)("a", {
																		href: j.EXTERNAL_LINKS.SECURITY,
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
										(0, b.jsx)(ae, {
											children: (0, b.jsx)(ai, {
												asChild: !0,
												className: (0, aG.cn)(aJ(), "bg-transparent font-light"),
												children: (0, b.jsx)("a", {
													href: j.EXTERNAL_LINKS.DOCUMENTATION,
													target: "_blank",
													children: "Docs",
												}),
											}),
										}),
										(0, b.jsx)(ae, {
											children: (0, b.jsx)(ai, {
												asChild: !0,
												className: (0, aG.cn)(aJ(), "bg-transparent font-light"),
												children: (0, b.jsx)(c.default, {
													href: "/pricing",
													children: "Pricing",
												}),
											}),
										}),
									],
								}),
							}),
							(0, b.jsxs)("div", {
								className: "hidden md:flex md:items-center md:space-x-4 flex-shrink-0 font-medium",
								children: [
									(0, b.jsxs)("div", {
										className: "flex flex-row space-x-2 flex-shrink-0",
										children: [
											(0, b.jsx)(m.default, {}),
											(0, b.jsxs)(c.default, {
												href: j.EXTERNAL_LINKS.GITHUB,
												target: "_blank",
												className:
													"hidden items-center gap-1.5 text-sm hover:text-foreground md:flex whitespace-nowrap",
												children: [
													(0, b.jsx)(f.RxGithubLogo, { className: "h-4 w-4" }),
													null !== a && (0, b.jsx)("span", { children: a }),
												],
											}),
										],
									}),
									(0, b.jsx)("a", {
										href: j.EXTERNAL_LINKS.CLOUD_APP_LOGIN,
										target: "_blank",
										rel: "noopener noreferrer",
										className:
											"hidden items-center gap-1.5 rounded-md py-2 text-sm border border-primary-background px-4 text-primary-background transition-all duration-200 hover:shadow-lg hover:scale-105 lg:flex",
										children: "Log in",
									}),
									(0, b.jsx)("a", {
										href: j.EXTERNAL_LINKS.CLOUD_APP_SIGNUP_HOME,
										target: "_blank",
										rel: "noopener noreferrer",
										className:
											"hidden items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground transition-all duration-200 hover:shadow-lg hover:scale-105 md:flex",
										children: "Sign Up",
									}),
									(0, b.jsxs)(c.default, {
										href: j.EXTERNAL_LINKS.MARKETPLACE,
										target: "_blank",
										className:
											"hidden items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground transition-all duration-200 hover:shadow-lg hover:scale-105 md:flex whitespace-nowrap",
										children: [
											(0, b.jsx)(g.VscVscode, { className: "-mr-[2px] mt-[1px] h-4 w-4" }),
											(0, b.jsxs)("span", {
												children: [
													"Install ",
													(0, b.jsx)("span", {
														className: "font-black max-lg:text-xs",
														children: "·",
													}),
												],
											}),
											null !== h && (0, b.jsx)("span", { children: h }),
										],
									}),
								],
							}),
							(0, b.jsxs)("button", {
								"aria-expanded": s,
								onClick: () => t(!s),
								className:
									"relative z-10 flex items-center justify-center rounded-full p-2 transition-colors hover:bg-accent md:hidden",
								"aria-label": "Toggle mobile menu",
								children: [
									(0, b.jsx)(i, { className: `h-6 w-6 ${s ? "hidden" : "block"}` }),
									(0, b.jsx)(r.X, { className: `h-6 w-6 ${s ? "block" : "hidden"}` }),
								],
							}),
						],
					}),
					(0, b.jsx)("div", {
						className: `fixed top-16 left-0 bg-background right-0 z-[100] transition-all duration-200 pointer-events-none md:hidden ${s ? "block h-dvh" : "hidden"}`,
						children: (0, b.jsxs)("nav", {
							className:
								"flex flex-col justify-between h-full pb-16 overflow-y-auto bg-background pointer-events-auto",
							children: [
								(0, b.jsxs)("div", {
									className: "grow-1 py-4 font-semibold text-lg",
									children: [
										(0, b.jsx)("a", {
											href: j.EXTERNAL_LINKS.DOCUMENTATION,
											target: "_blank",
											className: "block w-full p-5 text-left text-foreground active:opacity-50",
											onClick: () => t(!1),
											children: "Docs",
										}),
										(0, b.jsx)(c.default, {
											href: "/pricing",
											className: "block w-full p-5 text-left text-foreground active:opacity-50",
											onClick: () => t(!1),
											children: "Pricing",
										}),
										(0, b.jsxs)("div", {
											className: "mt-4 w-full",
											children: [
												(0, b.jsx)("div", {
													className:
														"px-5 pb-2 pt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground",
													children: "Product",
												}),
												(0, b.jsx)(c.default, {
													href: "/extension",
													className:
														"block w-full p-5 py-3 text-left text-foreground active:opacity-50",
													onClick: () => t(!1),
													children: "Roo Code VS Code Extension",
												}),
												(0, b.jsx)(c.default, {
													href: "/cloud",
													className:
														"block w-full p-5 py-3 text-left text-foreground active:opacity-50",
													onClick: () => t(!1),
													children: "Roo Code Cloud",
												}),
												(0, b.jsx)(c.default, {
													href: "/slack",
													className:
														"block w-full p-5 py-3 text-left text-foreground active:opacity-50",
													onClick: () => t(!1),
													children: "Roo Code for Slack",
												}),
												(0, b.jsx)(c.default, {
													href: "/provider",
													className:
														"block w-full p-5 py-3 text-left text-foreground active:opacity-50",
													onClick: () => t(!1),
													children: "Roo Code Router",
												}),
											],
										}),
										(0, b.jsxs)("div", {
											className: "mt-4 w-full",
											children: [
												(0, b.jsx)("div", {
													className:
														"px-5 pb-2 pt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground",
													children: "Resources",
												}),
												(0, b.jsx)(c.default, {
													href: "/blog",
													className:
														"block w-full p-5 py-3 text-left text-foreground active:opacity-50",
													onClick: () => t(!1),
													children: "Blog",
												}),
												(0, b.jsx)(l.ScrollButton, {
													targetId: "faq",
													className:
														"block w-full p-5 py-3 text-left text-foreground active:opacity-50",
													onClick: () => t(!1),
													children: "FAQ",
												}),
												(0, b.jsx)(c.default, {
													href: "/evals",
													className:
														"block w-full p-5 py-3 text-left text-foreground active:opacity-50",
													onClick: () => t(!1),
													children: "Evals",
												}),
												(0, b.jsx)("a", {
													href: j.EXTERNAL_LINKS.DISCORD,
													target: "_blank",
													rel: "noopener noreferrer",
													className:
														"block w-full p-5 py-3 text-left text-foreground active:opacity-50",
													onClick: () => t(!1),
													children: "Discord",
												}),
												(0, b.jsx)("a", {
													href: j.EXTERNAL_LINKS.SECURITY,
													target: "_blank",
													rel: "noopener noreferrer",
													className:
														"block w-full p-5 py-3 text-left text-foreground active:opacity-50",
													onClick: () => t(!1),
													children: "Security Center",
												}),
											],
										}),
									],
								}),
								(0, b.jsxs)("div", {
									className: "border-t border-border",
									children: [
										(0, b.jsxs)("div", {
											className: "flex items-center justify-around px-6 pt-2",
											children: [
												(0, b.jsxs)(c.default, {
													href: j.EXTERNAL_LINKS.GITHUB,
													target: "_blank",
													className:
														"inline-flex items-center gap-2 rounded-md p-3 text-sm transition-colors hover:bg-accent hover:text-foreground",
													onClick: () => t(!1),
													children: [
														(0, b.jsx)(f.RxGithubLogo, { className: "h-6 w-6" }),
														null !== a && (0, b.jsx)("span", { children: a }),
													],
												}),
												(0, b.jsx)("div", {
													className:
														"flex items-center rounded-md p-3 transition-colors hover:bg-accent",
													children: (0, b.jsx)(m.default, {}),
												}),
												(0, b.jsxs)(c.default, {
													href: j.EXTERNAL_LINKS.MARKETPLACE,
													target: "_blank",
													className:
														"inline-flex items-center gap-2 rounded-md p-3 text-sm transition-colors hover:bg-accent hover:text-foreground",
													onClick: () => t(!1),
													children: [
														(0, b.jsx)(g.VscVscode, { className: "h-6 w-6" }),
														null !== h && (0, b.jsx)("span", { children: h }),
													],
												}),
											],
										}),
										(0, b.jsxs)("div", {
											className: "flex gap-2 px-4 pb-4",
											children: [
												(0, b.jsx)("a", {
													href: j.EXTERNAL_LINKS.CLOUD_APP_SIGNUP_HOME,
													target: "_blank",
													rel: "noopener noreferrer",
													className:
														"flex items-center justify-center gap-2 rounded-full border border-primary bg-foreground p-4 w-full text-base font-semibold text-background",
													onClick: () => t(!1),
													children: "Sign up",
												}),
												(0, b.jsx)("a", {
													href: j.EXTERNAL_LINKS.CLOUD_APP_LOGIN,
													target: "_blank",
													rel: "noopener noreferrer",
													className:
														"flex items-center justify-center gap-2 rounded-full border border-primary bg-background p-4 w-full text-base font-semibold text-primary",
													onClick: () => t(!1),
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
		;(aM.displayName = as.displayName),
			(e.forwardRef(({ className: a, ...c }, d) =>
				(0, b.jsx)(ak, {
					ref: d,
					className: (0, aG.cn)(
						"top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
						a,
					),
					...c,
					children: (0, b.jsx)("div", {
						className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md",
					}),
				}),
			).displayName = ak.displayName),
			a.s(["NavBar", () => aO], 30359)
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__a44aa05a._.js.map
