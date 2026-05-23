;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	86192,
	(e, t, r) => {
		t.exports = e.r(87331)
	},
	72998,
	(e, t, r) => {
		"use strict"
		Object.defineProperty(r, "__esModule", { value: !0 }),
			Object.defineProperty(r, "warnOnce", {
				enumerable: !0,
				get: function () {
					return n
				},
			})
		let n = (e) => {}
	},
	19158,
	(e, t, r) => {
		"use strict"
		Object.defineProperty(r, "__esModule", { value: !0 }),
			Object.defineProperty(r, "useMergedRef", {
				enumerable: !0,
				get: function () {
					return s
				},
			})
		let n = e.r(10008)
		function s(e, t) {
			let r = (0, n.useRef)(null),
				s = (0, n.useRef)(null)
			return (0, n.useCallback)(
				(n) => {
					if (null === n) {
						let e = r.current
						e && ((r.current = null), e())
						let t = s.current
						t && ((s.current = null), t())
					} else e && (r.current = i(e, n)), t && (s.current = i(t, n))
				},
				[e, t],
			)
		}
		function i(e, t) {
			if ("function" != typeof e)
				return (
					(e.current = t),
					() => {
						e.current = null
					}
				)
			{
				let r = e(t)
				return "function" == typeof r ? r : () => e(null)
			}
		}
		;("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
			void 0 === r.default.__esModule &&
			(Object.defineProperty(r.default, "__esModule", { value: !0 }),
			Object.assign(r.default, r),
			(t.exports = r.default))
	},
	3362,
	(e, t, r) => {
		"use strict"
		Object.defineProperty(r, "__esModule", { value: !0 })
		var n = {
			assign: function () {
				return u
			},
			searchParamsToUrlQuery: function () {
				return i
			},
			urlQueryToSearchParams: function () {
				return a
			},
		}
		for (var s in n) Object.defineProperty(r, s, { enumerable: !0, get: n[s] })
		function i(e) {
			let t = {}
			for (let [r, n] of e.entries()) {
				let e = t[r]
				void 0 === e ? (t[r] = n) : Array.isArray(e) ? e.push(n) : (t[r] = [e, n])
			}
			return t
		}
		function o(e) {
			return "string" == typeof e
				? e
				: ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
					? ""
					: String(e)
		}
		function a(e) {
			let t = new URLSearchParams()
			for (let [r, n] of Object.entries(e))
				if (Array.isArray(n)) for (let e of n) t.append(r, o(e))
				else t.set(r, o(n))
			return t
		}
		function u(e, ...t) {
			for (let r of t) {
				for (let t of r.keys()) e.delete(t)
				for (let [t, n] of r.entries()) e.append(t, n)
			}
			return e
		}
	},
	83473,
	(e, t, r) => {
		"use strict"
		Object.defineProperty(r, "__esModule", { value: !0 })
		var n = {
			formatUrl: function () {
				return a
			},
			formatWithValidation: function () {
				return c
			},
			urlObjectKeys: function () {
				return u
			},
		}
		for (var s in n) Object.defineProperty(r, s, { enumerable: !0, get: n[s] })
		let i = e.r(44066)._(e.r(3362)),
			o = /https?|ftp|gopher|file/
		function a(e) {
			let { auth: t, hostname: r } = e,
				n = e.protocol || "",
				s = e.pathname || "",
				a = e.hash || "",
				u = e.query || "",
				c = !1
			;(t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
				e.host
					? (c = t + e.host)
					: r && ((c = t + (~r.indexOf(":") ? `[${r}]` : r)), e.port && (c += ":" + e.port)),
				u && "object" == typeof u && (u = String(i.urlQueryToSearchParams(u)))
			let l = e.search || (u && `?${u}`) || ""
			return (
				n && !n.endsWith(":") && (n += ":"),
				e.slashes || ((!n || o.test(n)) && !1 !== c)
					? ((c = "//" + (c || "")), s && "/" !== s[0] && (s = "/" + s))
					: c || (c = ""),
				a && "#" !== a[0] && (a = "#" + a),
				l && "?" !== l[0] && (l = "?" + l),
				(s = s.replace(/[?#]/g, encodeURIComponent)),
				(l = l.replace("#", "%23")),
				`${n}${c}${s}${l}${a}`
			)
		}
		let u = [
			"auth",
			"hash",
			"host",
			"hostname",
			"href",
			"path",
			"pathname",
			"port",
			"protocol",
			"query",
			"search",
			"slashes",
		]
		function c(e) {
			return a(e)
		}
	},
	18958,
	(e, t, r) => {
		"use strict"
		Object.defineProperty(r, "__esModule", { value: !0 })
		var n = {
			DecodeError: function () {
				return v
			},
			MiddlewareNotFoundError: function () {
				return C
			},
			MissingStaticPage: function () {
				return S
			},
			NormalizeError: function () {
				return b
			},
			PageNotFoundError: function () {
				return g
			},
			SP: function () {
				return m
			},
			ST: function () {
				return y
			},
			WEB_VITALS: function () {
				return i
			},
			execOnce: function () {
				return o
			},
			getDisplayName: function () {
				return h
			},
			getLocationOrigin: function () {
				return c
			},
			getURL: function () {
				return l
			},
			isAbsoluteUrl: function () {
				return u
			},
			isResSent: function () {
				return d
			},
			loadGetInitialProps: function () {
				return p
			},
			normalizeRepeatedSlashes: function () {
				return f
			},
			stringifyError: function () {
				return T
			},
		}
		for (var s in n) Object.defineProperty(r, s, { enumerable: !0, get: n[s] })
		let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"]
		function o(e) {
			let t,
				r = !1
			return (...n) => (r || ((r = !0), (t = e(...n))), t)
		}
		let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
			u = (e) => a.test(e)
		function c() {
			let { protocol: e, hostname: t, port: r } = window.location
			return `${e}//${t}${r ? ":" + r : ""}`
		}
		function l() {
			let { href: e } = window.location,
				t = c()
			return e.substring(t.length)
		}
		function h(e) {
			return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
		}
		function d(e) {
			return e.finished || e.headersSent
		}
		function f(e) {
			let t = e.split("?")
			return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
		}
		async function p(e, t) {
			let r = t.res || (t.ctx && t.ctx.res)
			if (!e.getInitialProps) return t.ctx && t.Component ? { pageProps: await p(t.Component, t.ctx) } : {}
			let n = await e.getInitialProps(t)
			if (r && d(r)) return n
			if (!n)
				throw Object.defineProperty(
					Error(`"${h(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),
					"__NEXT_ERROR_CODE",
					{ value: "E394", enumerable: !1, configurable: !0 },
				)
			return n
		}
		let m = "u" > typeof performance,
			y = m && ["mark", "measure", "getEntriesByName"].every((e) => "function" == typeof performance[e])
		class v extends Error {}
		class b extends Error {}
		class g extends Error {
			constructor(e) {
				super(),
					(this.code = "ENOENT"),
					(this.name = "PageNotFoundError"),
					(this.message = `Cannot find module for page: ${e}`)
			}
		}
		class S extends Error {
			constructor(e, t) {
				super(), (this.message = `Failed to load static file for page: ${e} ${t}`)
			}
		}
		class C extends Error {
			constructor() {
				super(), (this.code = "ENOENT"), (this.message = "Cannot find the middleware module")
			}
		}
		function T(e) {
			return JSON.stringify({ message: e.message, stack: e.stack })
		}
	},
	92391,
	(e, t, r) => {
		"use strict"
		Object.defineProperty(r, "__esModule", { value: !0 }),
			Object.defineProperty(r, "isLocalURL", {
				enumerable: !0,
				get: function () {
					return i
				},
			})
		let n = e.r(18958),
			s = e.r(39643)
		function i(e) {
			if (!(0, n.isAbsoluteUrl)(e)) return !0
			try {
				let t = (0, n.getLocationOrigin)(),
					r = new URL(e, t)
				return r.origin === t && (0, s.hasBasePath)(r.pathname)
			} catch (e) {
				return !1
			}
		}
	},
	11312,
	(e, t, r) => {
		"use strict"
		Object.defineProperty(r, "__esModule", { value: !0 }),
			Object.defineProperty(r, "errorOnce", {
				enumerable: !0,
				get: function () {
					return n
				},
			})
		let n = (e) => {}
	},
	21862,
	(e, t, r) => {
		"use strict"
		Object.defineProperty(r, "__esModule", { value: !0 })
		var n = {
			default: function () {
				return v
			},
			useLinkStatus: function () {
				return g
			},
		}
		for (var s in n) Object.defineProperty(r, s, { enumerable: !0, get: n[s] })
		let i = e.r(44066),
			o = e.r(8026),
			a = i._(e.r(10008)),
			u = e.r(83473),
			c = e.r(37106),
			l = e.r(19158),
			h = e.r(18958),
			d = e.r(41342)
		e.r(72998)
		let f = e.r(95784),
			p = e.r(92391),
			m = e.r(23850)
		function y(e) {
			return "string" == typeof e ? e : (0, u.formatUrl)(e)
		}
		function v(t) {
			var r
			let n,
				s,
				i,
				[u, v] = (0, a.useOptimistic)(f.IDLE_LINK_STATUS),
				g = (0, a.useRef)(null),
				{
					href: S,
					as: C,
					children: T,
					prefetch: O = null,
					passHref: w,
					replace: E,
					shallow: P,
					scroll: R,
					onClick: A,
					onMouseEnter: L,
					onTouchStart: I,
					legacyBehavior: U = !1,
					onNavigate: _,
					ref: j,
					unstable_dynamicOnHover: k,
					...F
				} = t
			;(n = T), U && ("string" == typeof n || "number" == typeof n) && (n = (0, o.jsx)("a", { children: n }))
			let M = a.default.useContext(c.AppRouterContext),
				N = !1 !== O,
				D =
					!1 !== O
						? null === (r = O) || "auto" === r
							? m.FetchStrategy.PPR
							: m.FetchStrategy.Full
						: m.FetchStrategy.PPR,
				{ href: x, as: K } = a.default.useMemo(() => {
					let e = y(S)
					return { href: e, as: C ? y(C) : e }
				}, [S, C])
			if (U) {
				if (n?.$$typeof === Symbol.for("react.lazy"))
					throw Object.defineProperty(
						Error(
							"`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
						),
						"__NEXT_ERROR_CODE",
						{ value: "E863", enumerable: !1, configurable: !0 },
					)
				s = a.default.Children.only(n)
			}
			let q = U ? s && "object" == typeof s && s.ref : j,
				$ = a.default.useCallback(
					(e) => (
						null !== M && (g.current = (0, f.mountLinkInstance)(e, x, M, D, N, v)),
						() => {
							g.current && ((0, f.unmountLinkForCurrentNavigation)(g.current), (g.current = null)),
								(0, f.unmountPrefetchableInstance)(e)
						}
					),
					[N, x, M, D, v],
				),
				G = {
					ref: (0, l.useMergedRef)($, q),
					onClick(t) {
						U || "function" != typeof A || A(t),
							U && s.props && "function" == typeof s.props.onClick && s.props.onClick(t),
							!M ||
								t.defaultPrevented ||
								(function (t, r, n, s, i, o, u) {
									if ("u" > typeof window) {
										let c,
											{ nodeName: l } = t.currentTarget
										if (
											("A" === l.toUpperCase() &&
												(((c = t.currentTarget.getAttribute("target")) && "_self" !== c) ||
													t.metaKey ||
													t.ctrlKey ||
													t.shiftKey ||
													t.altKey ||
													(t.nativeEvent && 2 === t.nativeEvent.which))) ||
											t.currentTarget.hasAttribute("download")
										)
											return
										if (!(0, p.isLocalURL)(r)) {
											i && (t.preventDefault(), location.replace(r))
											return
										}
										if ((t.preventDefault(), u)) {
											let e = !1
											if (
												(u({
													preventDefault: () => {
														e = !0
													},
												}),
												e)
											)
												return
										}
										let { dispatchNavigateAction: h } = e.r(22544)
										a.default.startTransition(() => {
											h(n || r, i ? "replace" : "push", o ?? !0, s.current)
										})
									}
								})(t, x, K, g, E, R, _)
					},
					onMouseEnter(e) {
						U || "function" != typeof L || L(e),
							U && s.props && "function" == typeof s.props.onMouseEnter && s.props.onMouseEnter(e),
							M && N && (0, f.onNavigationIntent)(e.currentTarget, !0 === k)
					},
					onTouchStart: function (e) {
						U || "function" != typeof I || I(e),
							U && s.props && "function" == typeof s.props.onTouchStart && s.props.onTouchStart(e),
							M && N && (0, f.onNavigationIntent)(e.currentTarget, !0 === k)
					},
				}
			return (
				(0, h.isAbsoluteUrl)(K)
					? (G.href = K)
					: (U && !w && ("a" !== s.type || "href" in s.props)) || (G.href = (0, d.addBasePath)(K)),
				(i = U ? a.default.cloneElement(s, G) : (0, o.jsx)("a", { ...F, ...G, children: n })),
				(0, o.jsx)(b.Provider, { value: u, children: i })
			)
		}
		e.r(11312)
		let b = (0, a.createContext)(f.IDLE_LINK_STATUS),
			g = () => (0, a.useContext)(b)
		;("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
			void 0 === r.default.__esModule &&
			(Object.defineProperty(r.default, "__esModule", { value: !0 }),
			Object.assign(r.default, r),
			(t.exports = r.default))
	},
	21387,
	(e) => {
		"use strict"
		var t = e.i(10008)
		let r = (...e) =>
				e
					.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
					.join(" ")
					.trim(),
			n = (e) => {
				let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => (r ? r.toUpperCase() : t.toLowerCase()))
				return t.charAt(0).toUpperCase() + t.slice(1)
			}
		var s = {
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
		let i = (0, t.forwardRef)(
				(
					{
						color: e = "currentColor",
						size: n = 24,
						strokeWidth: i = 2,
						absoluteStrokeWidth: o,
						className: a = "",
						children: u,
						iconNode: c,
						...l
					},
					h,
				) =>
					(0, t.createElement)(
						"svg",
						{
							ref: h,
							...s,
							width: n,
							height: n,
							stroke: e,
							strokeWidth: o ? (24 * Number(i)) / Number(n) : i,
							className: r("lucide", a),
							...(!u &&
								!((e) => {
									for (let t in e)
										if (t.startsWith("aria-") || "role" === t || "title" === t) return !0
									return !1
								})(l) && { "aria-hidden": "true" }),
							...l,
						},
						[...c.map(([e, r]) => (0, t.createElement)(e, r)), ...(Array.isArray(u) ? u : [u])],
					),
			),
			o = (e, s) => {
				let o = (0, t.forwardRef)(({ className: o, ...a }, u) =>
					(0, t.createElement)(i, {
						ref: u,
						iconNode: s,
						className: r(
							`lucide-${n(e)
								.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
								.toLowerCase()}`,
							`lucide-${e}`,
							o,
						),
						...a,
					}),
				)
				return (o.displayName = n(e)), o
			}
		e.s(["default", () => o], 21387)
	},
	15628,
	(e) => {
		"use strict"
		let t = (0, e.i(21387).default)("chevron-down", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]])
		e.s(["ChevronDown", () => t], 15628)
	},
	36936,
	(e) => {
		"use strict"
		e.s([
			"EXTERNAL_LINKS",
			0,
			{
				GITHUB: "https://github.com/RooCodeInc/Roo-Code",
				GITHUB_DISCUSSIONS: "https://github.com/RooCodeInc/Roo-Code/discussions",
				DISCORD: "https://discord.gg/roocode",
				REDDIT: "https://reddit.com/r/RooCode",
				X: "https://x.com/roocode",
				LINKEDIN: "https://www.linkedin.com/company/roo-code",
				TIKTOK: "https://www.tiktok.com/@roo.code",
				BLUESKY: "https://bsky.app/profile/roocode.bsky.social",
				YOUTUBE: "https://www.youtube.com/@RooCodeYT",
				DOCUMENTATION: "https://docs.roocode.com",
				SLACK_DOCS: "https://docs.roocode.com/roo-code-cloud/slack-integration",
				CAREERS: "https://careers.roocode.com",
				ISSUES: "https://github.com/RooCodeInc/Roo-Code/issues",
				FEATURE_REQUESTS: "https://github.com/RooCodeInc/Roo-Code/discussions/categories/feature-requests",
				COMMUNITY: "https://github.com/RooCodeInc/Roo-Code/discussions",
				CHANGELOG: "https://github.com/RooCodeInc/Roo-Code/blob/main/CHANGELOG.md",
				PRIVACY_POLICY_EXTENSION: "https://github.com/RooCodeInc/Roo-Code/blob/main/PRIVACY.md",
				INTEGRATIONS: "https://docs.roocode.com/community",
				TUTORIALS: "https://docs.roocode.com/tutorial-videos",
				MARKETPLACE: "https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline",
				SECURITY: "https://trust.roocode.com",
				EVALS: "https://roocode.com/evals",
				BLOG_SUBSTACK: "https://blog.roocode.com",
				OFFICE_HOURS_PODCAST: "https://www.youtube.com/@RooCodeYT/podcasts",
				FAQ: "https://roocode.com/#faq",
				TESTIMONIALS: "https://roocode.com/#testimonials",
				CLOUD_APP_LOGIN: "https://app.roocode.com/sign-in",
				CLOUD_APP_SIGNUP: "https://app.roocode.com/sign-up",
				CLOUD_APP_SIGNUP_HOME: "https://app.roocode.com/sign-up?redirect_url=/cloud-agents/setup",
				CLOUD_APP_SIGNUP_PRO: "https://app.roocode.com/sign-up?redirect_url=/cloud-agents/setup",
				CLOUD_APP_TEAM_TRIAL: "https://app.roocode.com/checkout/team",
				SUPPORT: "mailto:support@roocode.com",
			},
			"INTERNAL_LINKS",
			0,
			{ PRIVACY_POLICY_WEBSITE: "/privacy", BLOG: "/blog" },
		])
	},
	33841,
	65182,
	(e) => {
		"use strict"
		var t = e.i(21387)
		let r = (0, t.default)("cloud", [
			["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }],
		])
		e.s(["Cloud", () => r], 33841)
		let n = (0, t.default)("puzzle", [
			[
				"path",
				{
					d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
					key: "w46dr5",
				},
			],
		])
		e.s(["Puzzle", () => n], 65182)
	},
	66271,
	5763,
	(e) => {
		"use strict"
		e.i(53378)
		var t = {
				setTimeout: (e, t) => setTimeout(e, t),
				clearTimeout: (e) => clearTimeout(e),
				setInterval: (e, t) => setInterval(e, t),
				clearInterval: (e) => clearInterval(e),
			},
			r = new (class {
				#e = t
				#t = !1
				setTimeoutProvider(e) {
					this.#e = e
				}
				setTimeout(e, t) {
					return this.#e.setTimeout(e, t)
				}
				clearTimeout(e) {
					this.#e.clearTimeout(e)
				}
				setInterval(e, t) {
					return this.#e.setInterval(e, t)
				}
				clearInterval(e) {
					this.#e.clearInterval(e)
				}
			})()
		function n(e) {
			setTimeout(e, 0)
		}
		e.s(["systemSetTimeoutZero", () => n, "timeoutManager", () => r], 5763)
		var s = "u" < typeof window || "Deno" in globalThis
		function i() {}
		function o(e, t) {
			return "function" == typeof e ? e(t) : e
		}
		function a(e) {
			return "number" == typeof e && e >= 0 && e !== 1 / 0
		}
		function u(e, t) {
			return Math.max(e + (t || 0) - Date.now(), 0)
		}
		function c(e, t) {
			return "function" == typeof e ? e(t) : e
		}
		function l(e, t) {
			return "function" == typeof e ? e(t) : e
		}
		function h(e, t) {
			let { type: r = "all", exact: n, fetchStatus: s, predicate: i, queryKey: o, stale: a } = e
			if (o) {
				if (n) {
					if (t.queryHash !== f(o, t.options)) return !1
				} else if (!m(t.queryKey, o)) return !1
			}
			if ("all" !== r) {
				let e = t.isActive()
				if (("active" === r && !e) || ("inactive" === r && e)) return !1
			}
			return ("boolean" != typeof a || t.isStale() === a) && (!s || s === t.state.fetchStatus) && (!i || !!i(t))
		}
		function d(e, t) {
			let { exact: r, status: n, predicate: s, mutationKey: i } = e
			if (i) {
				if (!t.options.mutationKey) return !1
				if (r) {
					if (p(t.options.mutationKey) !== p(i)) return !1
				} else if (!m(t.options.mutationKey, i)) return !1
			}
			return (!n || t.state.status === n) && (!s || !!s(t))
		}
		function f(e, t) {
			return (t?.queryKeyHashFn || p)(e)
		}
		function p(e) {
			return JSON.stringify(e, (e, t) =>
				g(t)
					? Object.keys(t)
							.sort()
							.reduce((e, r) => ((e[r] = t[r]), e), {})
					: t,
			)
		}
		function m(e, t) {
			return (
				e === t ||
				(typeof e == typeof t &&
					!!e &&
					!!t &&
					"object" == typeof e &&
					"object" == typeof t &&
					Object.keys(t).every((r) => m(e[r], t[r])))
			)
		}
		var y = Object.prototype.hasOwnProperty
		function v(e, t) {
			if (!t || Object.keys(e).length !== Object.keys(t).length) return !1
			for (let r in e) if (e[r] !== t[r]) return !1
			return !0
		}
		function b(e) {
			return Array.isArray(e) && e.length === Object.keys(e).length
		}
		function g(e) {
			if (!S(e)) return !1
			let t = e.constructor
			if (void 0 === t) return !0
			let r = t.prototype
			return !!S(r) && !!r.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(e) === Object.prototype
		}
		function S(e) {
			return "[object Object]" === Object.prototype.toString.call(e)
		}
		function C(e) {
			return new Promise((t) => {
				r.setTimeout(t, e)
			})
		}
		function T(e, t, r) {
			return "function" == typeof r.structuralSharing
				? r.structuralSharing(e, t)
				: !1 !== r.structuralSharing
					? (function e(t, r, n = 0) {
							if (t === r) return t
							if (n > 500) return r
							let s = b(t) && b(r)
							if (!s && !(g(t) && g(r))) return r
							let i = (s ? t : Object.keys(t)).length,
								o = s ? r : Object.keys(r),
								a = o.length,
								u = s ? Array(a) : {},
								c = 0
							for (let l = 0; l < a; l++) {
								let a = s ? l : o[l],
									h = t[a],
									d = r[a]
								if (h === d) {
									;(u[a] = h), (s ? l < i : y.call(t, a)) && c++
									continue
								}
								if (null === h || null === d || "object" != typeof h || "object" != typeof d) {
									u[a] = d
									continue
								}
								let f = e(h, d, n + 1)
								;(u[a] = f), f === h && c++
							}
							return i === a && c === i ? t : u
						})(e, t)
					: t
		}
		function O(e, t, r = 0) {
			let n = [...e, t]
			return r && n.length > r ? n.slice(1) : n
		}
		function w(e, t, r = 0) {
			let n = [t, ...e]
			return r && n.length > r ? n.slice(0, -1) : n
		}
		var E = Symbol()
		function P(e, t) {
			return !e.queryFn && t?.initialPromise
				? () => t.initialPromise
				: e.queryFn && e.queryFn !== E
					? e.queryFn
					: () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
		}
		function R(e, t) {
			return "function" == typeof e ? e(...t) : !!e
		}
		function A(e, t, r) {
			let n,
				s = !1
			return (
				Object.defineProperty(e, "signal", {
					enumerable: !0,
					get: () => (
						(n ??= t()), s || ((s = !0), n.aborted ? r() : n.addEventListener("abort", r, { once: !0 })), n
					),
				}),
				e
			)
		}
		e.s(
			[
				"addConsumeAwareSignal",
				() => A,
				"addToEnd",
				() => O,
				"addToStart",
				() => w,
				"ensureQueryFn",
				() => P,
				"functionalUpdate",
				() => o,
				"hashKey",
				() => p,
				"hashQueryKeyByOptions",
				() => f,
				"isServer",
				() => s,
				"isValidTimeout",
				() => a,
				"matchMutation",
				() => d,
				"matchQuery",
				() => h,
				"noop",
				() => i,
				"partialMatchKey",
				() => m,
				"replaceData",
				() => T,
				"resolveEnabled",
				() => l,
				"resolveStaleTime",
				() => c,
				"shallowEqualObjects",
				() => v,
				"shouldThrowError",
				() => R,
				"skipToken",
				() => E,
				"sleep",
				() => C,
				"timeUntilStale",
				() => u,
			],
			66271,
		)
	},
	59864,
	(e) => {
		"use strict"
		let t, r, n, s, i, o
		var a = e.i(5763).systemSetTimeoutZero,
			u =
				((t = []),
				(r = 0),
				(n = (e) => {
					e()
				}),
				(s = (e) => {
					e()
				}),
				(i = a),
				{
					batch: (e) => {
						let o
						r++
						try {
							o = e()
						} finally {
							let e
							--r ||
								((e = t),
								(t = []),
								e.length &&
									i(() => {
										s(() => {
											e.forEach((e) => {
												n(e)
											})
										})
									}))
						}
						return o
					},
					batchCalls:
						(e) =>
						(...t) => {
							o(() => {
								e(...t)
							})
						},
					schedule: (o = (e) => {
						r
							? t.push(e)
							: i(() => {
									n(e)
								})
					}),
					setNotifyFunction: (e) => {
						n = e
					},
					setBatchNotifyFunction: (e) => {
						s = e
					},
					setScheduler: (e) => {
						i = e
					},
				})
		e.s(["notifyManager", () => u])
	},
	78889,
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
	82679,
	(e) => {
		"use strict"
		var t = e.i(78889),
			r = e.i(66271),
			n = new (class extends t.Subscribable {
				#r
				#n
				#s
				constructor() {
					super(),
						(this.#s = (e) => {
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
					this.#n || this.setEventListener(this.#s)
				}
				onUnsubscribe() {
					this.hasListeners() || (this.#n?.(), (this.#n = void 0))
				}
				setEventListener(e) {
					;(this.#s = e),
						this.#n?.(),
						(this.#n = e((e) => {
							"boolean" == typeof e ? this.setFocused(e) : this.onFocus()
						}))
				}
				setFocused(e) {
					this.#r !== e && ((this.#r = e), this.onFocus())
				}
				onFocus() {
					let e = this.isFocused()
					this.listeners.forEach((t) => {
						t(e)
					})
				}
				isFocused() {
					return "boolean" == typeof this.#r ? this.#r : globalThis.document?.visibilityState !== "hidden"
				}
			})()
		e.s(["focusManager", () => n])
	},
	59243,
	60045,
	57142,
	13805,
	39392,
	73336,
	(e) => {
		"use strict"
		e.i(53378)
		var t = e.i(66271),
			r = e.i(59864),
			n = e.i(82679),
			s = e.i(78889),
			i = new (class extends s.Subscribable {
				#i = !0
				#n
				#s
				constructor() {
					super(),
						(this.#s = (e) => {
							if (!t.isServer && window.addEventListener) {
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
					this.#n || this.setEventListener(this.#s)
				}
				onUnsubscribe() {
					this.hasListeners() || (this.#n?.(), (this.#n = void 0))
				}
				setEventListener(e) {
					;(this.#s = e), this.#n?.(), (this.#n = e(this.setOnline.bind(this)))
				}
				setOnline(e) {
					this.#i !== e &&
						((this.#i = e),
						this.listeners.forEach((t) => {
							t(e)
						}))
				}
				isOnline() {
					return this.#i
				}
			})()
		function o() {
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
		function a(e) {
			return Math.min(1e3 * 2 ** e, 3e4)
		}
		function u(e) {
			return (e ?? "online") !== "online" || i.isOnline()
		}
		e.s(["onlineManager", () => i], 60045), e.s(["pendingThenable", () => o], 57142)
		var c = class extends Error {
			constructor(e) {
				super("CancelledError"), (this.revert = e?.revert), (this.silent = e?.silent)
			}
		}
		function l(e) {
			let r,
				s = !1,
				l = 0,
				h = o(),
				d = () => n.focusManager.isFocused() && ("always" === e.networkMode || i.isOnline()) && e.canRun(),
				f = () => u(e.networkMode) && e.canRun(),
				p = (e) => {
					"pending" === h.status && (r?.(), h.resolve(e))
				},
				m = (e) => {
					"pending" === h.status && (r?.(), h.reject(e))
				},
				y = () =>
					new Promise((t) => {
						;(r = (e) => {
							;("pending" !== h.status || d()) && t(e)
						}),
							e.onPause?.()
					}).then(() => {
						;(r = void 0), "pending" === h.status && e.onContinue?.()
					}),
				v = () => {
					let r
					if ("pending" !== h.status) return
					let n = 0 === l ? e.initialPromise : void 0
					try {
						r = n ?? e.fn()
					} catch (e) {
						r = Promise.reject(e)
					}
					Promise.resolve(r)
						.then(p)
						.catch((r) => {
							if ("pending" !== h.status) return
							let n = e.retry ?? 3 * !t.isServer,
								i = e.retryDelay ?? a,
								o = "function" == typeof i ? i(l, r) : i,
								u = !0 === n || ("number" == typeof n && l < n) || ("function" == typeof n && n(l, r))
							s || !u
								? m(r)
								: (l++,
									e.onFail?.(l, r),
									(0, t.sleep)(o)
										.then(() => (d() ? void 0 : y()))
										.then(() => {
											s ? m(r) : v()
										}))
						})
				}
			return {
				promise: h,
				status: () => h.status,
				cancel: (t) => {
					if ("pending" === h.status) {
						let r = new c(t)
						m(r), e.onCancel?.(r)
					}
				},
				continue: () => (r?.(), h),
				cancelRetry: () => {
					s = !0
				},
				continueRetry: () => {
					s = !1
				},
				canStart: f,
				start: () => (f() ? v() : y().then(v), h),
			}
		}
		e.s(["CancelledError", () => c, "canFetch", () => u, "createRetryer", () => l], 13805)
		var h = e.i(5763),
			d = class {
				#o
				destroy() {
					this.clearGcTimeout()
				}
				scheduleGc() {
					this.clearGcTimeout(),
						(0, t.isValidTimeout)(this.gcTime) &&
							(this.#o = h.timeoutManager.setTimeout(() => {
								this.optionalRemove()
							}, this.gcTime))
				}
				updateGcTime(e) {
					this.gcTime = Math.max(this.gcTime || 0, e ?? (t.isServer ? 1 / 0 : 3e5))
				}
				clearGcTimeout() {
					this.#o && (h.timeoutManager.clearTimeout(this.#o), (this.#o = void 0))
				}
			}
		e.s(["Removable", () => d], 39392)
		var f = class extends d {
			#a
			#u
			#c
			#l
			#h
			#d
			#f
			constructor(e) {
				super(),
					(this.#f = !1),
					(this.#d = e.defaultOptions),
					this.setOptions(e.options),
					(this.observers = []),
					(this.#l = e.client),
					(this.#c = this.#l.getQueryCache()),
					(this.queryKey = e.queryKey),
					(this.queryHash = e.queryHash),
					(this.#a = y(this.options)),
					(this.state = e.state ?? this.#a),
					this.scheduleGc()
			}
			get meta() {
				return this.options.meta
			}
			get promise() {
				return this.#h?.promise
			}
			setOptions(e) {
				if (
					((this.options = { ...this.#d, ...e }),
					this.updateGcTime(this.options.gcTime),
					this.state && void 0 === this.state.data)
				) {
					let e = y(this.options)
					void 0 !== e.data && (this.setState(m(e.data, e.dataUpdatedAt)), (this.#a = e))
				}
			}
			optionalRemove() {
				this.observers.length || "idle" !== this.state.fetchStatus || this.#c.remove(this)
			}
			setData(e, r) {
				let n = (0, t.replaceData)(this.state.data, e, this.options)
				return this.#p({ data: n, type: "success", dataUpdatedAt: r?.updatedAt, manual: r?.manual }), n
			}
			setState(e, t) {
				this.#p({ type: "setState", state: e, setStateOptions: t })
			}
			cancel(e) {
				let r = this.#h?.promise
				return this.#h?.cancel(e), r ? r.then(t.noop).catch(t.noop) : Promise.resolve()
			}
			destroy() {
				super.destroy(), this.cancel({ silent: !0 })
			}
			reset() {
				this.destroy(), this.setState(this.#a)
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
			isStatic() {
				return (
					this.getObserversCount() > 0 &&
					this.observers.some((e) => "static" === (0, t.resolveStaleTime)(e.options.staleTime, this))
				)
			}
			isStale() {
				return this.getObserversCount() > 0
					? this.observers.some((e) => e.getCurrentResult().isStale)
					: void 0 === this.state.data || this.state.isInvalidated
			}
			isStaleByTime(e = 0) {
				return (
					void 0 === this.state.data ||
					("static" !== e &&
						(!!this.state.isInvalidated || !(0, t.timeUntilStale)(this.state.dataUpdatedAt, e)))
				)
			}
			onFocus() {
				let e = this.observers.find((e) => e.shouldFetchOnWindowFocus())
				e?.refetch({ cancelRefetch: !1 }), this.#h?.continue()
			}
			onOnline() {
				let e = this.observers.find((e) => e.shouldFetchOnReconnect())
				e?.refetch({ cancelRefetch: !1 }), this.#h?.continue()
			}
			addObserver(e) {
				this.observers.includes(e) ||
					(this.observers.push(e),
					this.clearGcTimeout(),
					this.#c.notify({ type: "observerAdded", query: this, observer: e }))
			}
			removeObserver(e) {
				this.observers.includes(e) &&
					((this.observers = this.observers.filter((t) => t !== e)),
					this.observers.length ||
						(this.#h && (this.#f ? this.#h.cancel({ revert: !0 }) : this.#h.cancelRetry()),
						this.scheduleGc()),
					this.#c.notify({ type: "observerRemoved", query: this, observer: e }))
			}
			getObserversCount() {
				return this.observers.length
			}
			invalidate() {
				this.state.isInvalidated || this.#p({ type: "invalidate" })
			}
			async fetch(e, r) {
				let n
				if ("idle" !== this.state.fetchStatus && this.#h?.status() !== "rejected") {
					if (void 0 !== this.state.data && r?.cancelRefetch) this.cancel({ silent: !0 })
					else if (this.#h) return this.#h.continueRetry(), this.#h.promise
				}
				if ((e && this.setOptions(e), !this.options.queryFn)) {
					let e = this.observers.find((e) => e.options.queryFn)
					e && this.setOptions(e.options)
				}
				let s = new AbortController(),
					i = (e) => {
						Object.defineProperty(e, "signal", { enumerable: !0, get: () => ((this.#f = !0), s.signal) })
					},
					o = () => {
						let e,
							n = (0, t.ensureQueryFn)(this.options, r),
							s = (i((e = { client: this.#l, queryKey: this.queryKey, meta: this.meta })), e)
						return ((this.#f = !1), this.options.persister) ? this.options.persister(n, s, this) : n(s)
					},
					a =
						(i(
							(n = {
								fetchOptions: r,
								options: this.options,
								queryKey: this.queryKey,
								client: this.#l,
								state: this.state,
								fetchFn: o,
							}),
						),
						n)
				this.options.behavior?.onFetch(a, this),
					(this.#u = this.state),
					("idle" === this.state.fetchStatus || this.state.fetchMeta !== a.fetchOptions?.meta) &&
						this.#p({ type: "fetch", meta: a.fetchOptions?.meta }),
					(this.#h = l({
						initialPromise: r?.initialPromise,
						fn: a.fetchFn,
						onCancel: (e) => {
							e instanceof c && e.revert && this.setState({ ...this.#u, fetchStatus: "idle" }), s.abort()
						},
						onFail: (e, t) => {
							this.#p({ type: "failed", failureCount: e, error: t })
						},
						onPause: () => {
							this.#p({ type: "pause" })
						},
						onContinue: () => {
							this.#p({ type: "continue" })
						},
						retry: a.options.retry,
						retryDelay: a.options.retryDelay,
						networkMode: a.options.networkMode,
						canRun: () => !0,
					}))
				try {
					let e = await this.#h.start()
					if (void 0 === e) throw Error(`${this.queryHash} data is undefined`)
					return (
						this.setData(e),
						this.#c.config.onSuccess?.(e, this),
						this.#c.config.onSettled?.(e, this.state.error, this),
						e
					)
				} catch (e) {
					if (e instanceof c) {
						if (e.silent) return this.#h.promise
						else if (e.revert) {
							if (void 0 === this.state.data) throw e
							return this.state.data
						}
					}
					throw (
						(this.#p({ type: "error", error: e }),
						this.#c.config.onError?.(e, this),
						this.#c.config.onSettled?.(this.state.data, e, this),
						e)
					)
				} finally {
					this.scheduleGc()
				}
			}
			#p(e) {
				let t = (t) => {
					switch (e.type) {
						case "failed":
							return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error }
						case "pause":
							return { ...t, fetchStatus: "paused" }
						case "continue":
							return { ...t, fetchStatus: "fetching" }
						case "fetch":
							return { ...t, ...p(t.data, this.options), fetchMeta: e.meta ?? null }
						case "success":
							let r = {
								...t,
								...m(e.data, e.dataUpdatedAt),
								dataUpdateCount: t.dataUpdateCount + 1,
								...(!e.manual && {
									fetchStatus: "idle",
									fetchFailureCount: 0,
									fetchFailureReason: null,
								}),
							}
							return (this.#u = e.manual ? r : void 0), r
						case "error":
							let n = e.error
							return {
								...t,
								error: n,
								errorUpdateCount: t.errorUpdateCount + 1,
								errorUpdatedAt: Date.now(),
								fetchFailureCount: t.fetchFailureCount + 1,
								fetchFailureReason: n,
								fetchStatus: "idle",
								status: "error",
								isInvalidated: !0,
							}
						case "invalidate":
							return { ...t, isInvalidated: !0 }
						case "setState":
							return { ...t, ...e.state }
					}
				}
				;(this.state = t(this.state)),
					r.notifyManager.batch(() => {
						this.observers.forEach((e) => {
							e.onQueryUpdate()
						}),
							this.#c.notify({ query: this, type: "updated", action: e })
					})
			}
		}
		function p(e, t) {
			return {
				fetchFailureCount: 0,
				fetchFailureReason: null,
				fetchStatus: u(t.networkMode) ? "fetching" : "paused",
				...(void 0 === e && { error: null, status: "pending" }),
			}
		}
		function m(e, t) {
			return { data: e, dataUpdatedAt: t ?? Date.now(), error: null, isInvalidated: !1, status: "success" }
		}
		function y(e) {
			let t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
				r = void 0 !== t,
				n = r
					? "function" == typeof e.initialDataUpdatedAt
						? e.initialDataUpdatedAt()
						: e.initialDataUpdatedAt
					: 0
			return {
				data: t,
				dataUpdateCount: 0,
				dataUpdatedAt: r ? (n ?? Date.now()) : 0,
				error: null,
				errorUpdateCount: 0,
				errorUpdatedAt: 0,
				fetchFailureCount: 0,
				fetchFailureReason: null,
				fetchMeta: null,
				isInvalidated: !1,
				status: r ? "success" : "pending",
				fetchStatus: "idle",
			}
		}
		e.s(["Query", () => f, "fetchState", () => p], 59243)
		var v = e.i(10008),
			b = e.i(8026),
			g = v.createContext(void 0),
			S = (e) => {
				let t = v.useContext(g)
				if (e) return e
				if (!t) throw Error("No QueryClient set, use QueryClientProvider to set one")
				return t
			},
			C = ({ client: e, children: t }) => (
				v.useEffect(
					() => (
						e.mount(),
						() => {
							e.unmount()
						}
					),
					[e],
				),
				(0, b.jsx)(g.Provider, { value: e, children: t })
			)
		e.s(["QueryClientProvider", () => C, "useQueryClient", () => S], 73336)
	},
	90306,
	(e) => {
		"use strict"
		var t = e.i(10008),
			r = (e, t, r, n, s, i, o, a) => {
				let u = document.documentElement,
					c = ["light", "dark"]
				function l(t) {
					var r
					;(Array.isArray(e) ? e : [e]).forEach((e) => {
						let r = "class" === e,
							n = r && i ? s.map((e) => i[e] || e) : s
						r ? (u.classList.remove(...n), u.classList.add(i && i[t] ? i[t] : t)) : u.setAttribute(e, t)
					}),
						(r = t),
						a && c.includes(r) && (u.style.colorScheme = r)
				}
				if (n) l(n)
				else
					try {
						let e = localStorage.getItem(t) || r,
							n =
								o && "system" === e
									? window.matchMedia("(prefers-color-scheme: dark)").matches
										? "dark"
										: "light"
									: e
						l(n)
					} catch (e) {}
			},
			n = ["light", "dark"],
			s = "(prefers-color-scheme: dark)",
			i = "u" < typeof window,
			o = t.createContext(void 0),
			a = { setTheme: (e) => {}, themes: [] },
			u = () => {
				var e
				return null != (e = t.useContext(o)) ? e : a
			},
			c = (e) => (t.useContext(o) ? t.createElement(t.Fragment, null, e.children) : t.createElement(h, { ...e })),
			l = ["light", "dark"],
			h = ({
				forcedTheme: e,
				disableTransitionOnChange: r = !1,
				enableSystem: i = !0,
				enableColorScheme: a = !0,
				storageKey: u = "theme",
				themes: c = l,
				defaultTheme: h = i ? "system" : "light",
				attribute: y = "data-theme",
				value: v,
				children: b,
				nonce: g,
				scriptProps: S,
			}) => {
				let [C, T] = t.useState(() => f(u, h)),
					[O, w] = t.useState(() => ("system" === C ? m() : C)),
					E = v ? Object.values(v) : c,
					P = t.useCallback(
						(e) => {
							let t = e
							if (!t) return
							"system" === e && i && (t = m())
							let s = v ? v[t] : t,
								o = r ? p(g) : null,
								u = document.documentElement,
								c = (e) => {
									"class" === e
										? (u.classList.remove(...E), s && u.classList.add(s))
										: e.startsWith("data-") && (s ? u.setAttribute(e, s) : u.removeAttribute(e))
								}
							if ((Array.isArray(y) ? y.forEach(c) : c(y), a)) {
								let e = n.includes(h) ? h : null,
									r = n.includes(t) ? t : e
								u.style.colorScheme = r
							}
							null == o || o()
						},
						[g],
					),
					R = t.useCallback(
						(e) => {
							let t = "function" == typeof e ? e(C) : e
							T(t)
							try {
								localStorage.setItem(u, t)
							} catch (e) {}
						},
						[C],
					),
					A = t.useCallback(
						(t) => {
							w(m(t)), "system" === C && i && !e && P("system")
						},
						[C, e],
					)
				t.useEffect(() => {
					let e = window.matchMedia(s)
					return e.addListener(A), A(e), () => e.removeListener(A)
				}, [A]),
					t.useEffect(() => {
						let e = (e) => {
							e.key === u && (e.newValue ? T(e.newValue) : R(h))
						}
						return window.addEventListener("storage", e), () => window.removeEventListener("storage", e)
					}, [R]),
					t.useEffect(() => {
						P(null != e ? e : C)
					}, [e, C])
				let L = t.useMemo(
					() => ({
						theme: C,
						setTheme: R,
						forcedTheme: e,
						resolvedTheme: "system" === C ? O : C,
						themes: i ? [...c, "system"] : c,
						systemTheme: i ? O : void 0,
					}),
					[C, R, e, O, i, c],
				)
				return t.createElement(
					o.Provider,
					{ value: L },
					t.createElement(d, {
						forcedTheme: e,
						storageKey: u,
						attribute: y,
						enableSystem: i,
						enableColorScheme: a,
						defaultTheme: h,
						value: v,
						themes: c,
						nonce: g,
						scriptProps: S,
					}),
					b,
				)
			},
			d = t.memo(
				({
					forcedTheme: e,
					storageKey: n,
					attribute: s,
					enableSystem: i,
					enableColorScheme: o,
					defaultTheme: a,
					value: u,
					themes: c,
					nonce: l,
					scriptProps: h,
				}) => {
					let d = JSON.stringify([s, n, a, e, c, u, i, o]).slice(1, -1)
					return t.createElement("script", {
						...h,
						suppressHydrationWarning: !0,
						nonce: "u" < typeof window ? l : "",
						dangerouslySetInnerHTML: { __html: `(${r.toString()})(${d})` },
					})
				},
			),
			f = (e, t) => {
				let r
				if (!i) {
					try {
						r = localStorage.getItem(e) || void 0
					} catch (e) {}
					return r || t
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
			m = (e) => (e || (e = window.matchMedia(s)), e.matches ? "dark" : "light")
		e.s(["ThemeProvider", () => c, "useTheme", () => u])
	},
	42506,
	(e) => {
		"use strict"
		var t = e.i(90306),
			r = e.i(10008)
		function n() {
			let { resolvedTheme: e, theme: n } = (0, t.useTheme)(),
				[s, i] = (0, r.useState)(!1)
			return ((0, r.useEffect)(() => {
				i(!0)
			}, []),
			s && "light" === (e || n))
				? "/Roo-Code-Logo-Horiz-blk.svg"
				: "/Roo-Code-Logo-Horiz-white.svg"
		}
		e.s(["useLogoSrc", () => n])
	},
])
