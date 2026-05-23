;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	3362,
	(e, t, r) => {
		"use strict"
		Object.defineProperty(r, "__esModule", { value: !0 })
		var a = {
			assign: function () {
				return i
			},
			searchParamsToUrlQuery: function () {
				return n
			},
			urlQueryToSearchParams: function () {
				return o
			},
		}
		for (var s in a) Object.defineProperty(r, s, { enumerable: !0, get: a[s] })
		function n(e) {
			let t = {}
			for (let [r, a] of e.entries()) {
				let e = t[r]
				void 0 === e ? (t[r] = a) : Array.isArray(e) ? e.push(a) : (t[r] = [e, a])
			}
			return t
		}
		function l(e) {
			return "string" == typeof e
				? e
				: ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
					? ""
					: String(e)
		}
		function o(e) {
			let t = new URLSearchParams()
			for (let [r, a] of Object.entries(e))
				if (Array.isArray(a)) for (let e of a) t.append(r, l(e))
				else t.set(r, l(a))
			return t
		}
		function i(e, ...t) {
			for (let r of t) {
				for (let t of r.keys()) e.delete(t)
				for (let [t, a] of r.entries()) e.append(t, a)
			}
			return e
		}
	},
	83473,
	(e, t, r) => {
		"use strict"
		Object.defineProperty(r, "__esModule", { value: !0 })
		var a = {
			formatUrl: function () {
				return o
			},
			formatWithValidation: function () {
				return c
			},
			urlObjectKeys: function () {
				return i
			},
		}
		for (var s in a) Object.defineProperty(r, s, { enumerable: !0, get: a[s] })
		let n = e.r(44066)._(e.r(3362)),
			l = /https?|ftp|gopher|file/
		function o(e) {
			let { auth: t, hostname: r } = e,
				a = e.protocol || "",
				s = e.pathname || "",
				o = e.hash || "",
				i = e.query || "",
				c = !1
			;(t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
				e.host
					? (c = t + e.host)
					: r && ((c = t + (~r.indexOf(":") ? `[${r}]` : r)), e.port && (c += ":" + e.port)),
				i && "object" == typeof i && (i = String(n.urlQueryToSearchParams(i)))
			let d = e.search || (i && `?${i}`) || ""
			return (
				a && !a.endsWith(":") && (a += ":"),
				e.slashes || ((!a || l.test(a)) && !1 !== c)
					? ((c = "//" + (c || "")), s && "/" !== s[0] && (s = "/" + s))
					: c || (c = ""),
				o && "#" !== o[0] && (o = "#" + o),
				d && "?" !== d[0] && (d = "?" + d),
				(s = s.replace(/[?#]/g, encodeURIComponent)),
				(d = d.replace("#", "%23")),
				`${a}${c}${s}${d}${o}`
			)
		}
		let i = [
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
			return o(e)
		}
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
		let a = e.r(10008)
		function s(e, t) {
			let r = (0, a.useRef)(null),
				s = (0, a.useRef)(null)
			return (0, a.useCallback)(
				(a) => {
					if (null === a) {
						let e = r.current
						e && ((r.current = null), e())
						let t = s.current
						t && ((s.current = null), t())
					} else e && (r.current = n(e, a)), t && (s.current = n(t, a))
				},
				[e, t],
			)
		}
		function n(e, t) {
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
	18958,
	(e, t, r) => {
		"use strict"
		Object.defineProperty(r, "__esModule", { value: !0 })
		var a = {
			DecodeError: function () {
				return g
			},
			MiddlewareNotFoundError: function () {
				return b
			},
			MissingStaticPage: function () {
				return v
			},
			NormalizeError: function () {
				return y
			},
			PageNotFoundError: function () {
				return j
			},
			SP: function () {
				return f
			},
			ST: function () {
				return x
			},
			WEB_VITALS: function () {
				return n
			},
			execOnce: function () {
				return l
			},
			getDisplayName: function () {
				return u
			},
			getLocationOrigin: function () {
				return c
			},
			getURL: function () {
				return d
			},
			isAbsoluteUrl: function () {
				return i
			},
			isResSent: function () {
				return h
			},
			loadGetInitialProps: function () {
				return m
			},
			normalizeRepeatedSlashes: function () {
				return p
			},
			stringifyError: function () {
				return k
			},
		}
		for (var s in a) Object.defineProperty(r, s, { enumerable: !0, get: a[s] })
		let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"]
		function l(e) {
			let t,
				r = !1
			return (...a) => (r || ((r = !0), (t = e(...a))), t)
		}
		let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
			i = (e) => o.test(e)
		function c() {
			let { protocol: e, hostname: t, port: r } = window.location
			return `${e}//${t}${r ? ":" + r : ""}`
		}
		function d() {
			let { href: e } = window.location,
				t = c()
			return e.substring(t.length)
		}
		function u(e) {
			return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
		}
		function h(e) {
			return e.finished || e.headersSent
		}
		function p(e) {
			let t = e.split("?")
			return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
		}
		async function m(e, t) {
			let r = t.res || (t.ctx && t.ctx.res)
			if (!e.getInitialProps) return t.ctx && t.Component ? { pageProps: await m(t.Component, t.ctx) } : {}
			let a = await e.getInitialProps(t)
			if (r && h(r)) return a
			if (!a)
				throw Object.defineProperty(
					Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`),
					"__NEXT_ERROR_CODE",
					{ value: "E394", enumerable: !1, configurable: !0 },
				)
			return a
		}
		let f = "u" > typeof performance,
			x = f && ["mark", "measure", "getEntriesByName"].every((e) => "function" == typeof performance[e])
		class g extends Error {}
		class y extends Error {}
		class j extends Error {
			constructor(e) {
				super(),
					(this.code = "ENOENT"),
					(this.name = "PageNotFoundError"),
					(this.message = `Cannot find module for page: ${e}`)
			}
		}
		class v extends Error {
			constructor(e, t) {
				super(), (this.message = `Failed to load static file for page: ${e} ${t}`)
			}
		}
		class b extends Error {
			constructor() {
				super(), (this.code = "ENOENT"), (this.message = "Cannot find the middleware module")
			}
		}
		function k(e) {
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
					return n
				},
			})
		let a = e.r(18958),
			s = e.r(39643)
		function n(e) {
			if (!(0, a.isAbsoluteUrl)(e)) return !0
			try {
				let t = (0, a.getLocationOrigin)(),
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
					return a
				},
			})
		let a = (e) => {}
	},
	21862,
	(e, t, r) => {
		"use strict"
		Object.defineProperty(r, "__esModule", { value: !0 })
		var a = {
			default: function () {
				return g
			},
			useLinkStatus: function () {
				return j
			},
		}
		for (var s in a) Object.defineProperty(r, s, { enumerable: !0, get: a[s] })
		let n = e.r(44066),
			l = e.r(8026),
			o = n._(e.r(10008)),
			i = e.r(83473),
			c = e.r(37106),
			d = e.r(19158),
			u = e.r(18958),
			h = e.r(41342)
		e.r(72998)
		let p = e.r(95784),
			m = e.r(92391),
			f = e.r(23850)
		function x(e) {
			return "string" == typeof e ? e : (0, i.formatUrl)(e)
		}
		function g(t) {
			var r
			let a,
				s,
				n,
				[i, g] = (0, o.useOptimistic)(p.IDLE_LINK_STATUS),
				j = (0, o.useRef)(null),
				{
					href: v,
					as: b,
					children: k,
					prefetch: C = null,
					passHref: w,
					replace: N,
					shallow: M,
					scroll: S,
					onClick: T,
					onMouseEnter: D,
					onTouchStart: A,
					legacyBehavior: O = !1,
					onNavigate: R,
					ref: E,
					unstable_dynamicOnHover: P,
					...L
				} = t
			;(a = k), O && ("string" == typeof a || "number" == typeof a) && (a = (0, l.jsx)("a", { children: a }))
			let F = o.default.useContext(c.AppRouterContext),
				z = !1 !== C,
				I =
					!1 !== C
						? null === (r = C) || "auto" === r
							? f.FetchStrategy.PPR
							: f.FetchStrategy.Full
						: f.FetchStrategy.PPR,
				{ href: _, as: U } = o.default.useMemo(() => {
					let e = x(v)
					return { href: e, as: b ? x(b) : e }
				}, [v, b])
			if (O) {
				if (a?.$$typeof === Symbol.for("react.lazy"))
					throw Object.defineProperty(
						Error(
							"`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
						),
						"__NEXT_ERROR_CODE",
						{ value: "E863", enumerable: !1, configurable: !0 },
					)
				s = o.default.Children.only(a)
			}
			let $ = O ? s && "object" == typeof s && s.ref : E,
				H = o.default.useCallback(
					(e) => (
						null !== F && (j.current = (0, p.mountLinkInstance)(e, _, F, I, z, g)),
						() => {
							j.current && ((0, p.unmountLinkForCurrentNavigation)(j.current), (j.current = null)),
								(0, p.unmountPrefetchableInstance)(e)
						}
					),
					[z, _, F, I, g],
				),
				V = {
					ref: (0, d.useMergedRef)(H, $),
					onClick(t) {
						O || "function" != typeof T || T(t),
							O && s.props && "function" == typeof s.props.onClick && s.props.onClick(t),
							!F ||
								t.defaultPrevented ||
								(function (t, r, a, s, n, l, i) {
									if ("u" > typeof window) {
										let c,
											{ nodeName: d } = t.currentTarget
										if (
											("A" === d.toUpperCase() &&
												(((c = t.currentTarget.getAttribute("target")) && "_self" !== c) ||
													t.metaKey ||
													t.ctrlKey ||
													t.shiftKey ||
													t.altKey ||
													(t.nativeEvent && 2 === t.nativeEvent.which))) ||
											t.currentTarget.hasAttribute("download")
										)
											return
										if (!(0, m.isLocalURL)(r)) {
											n && (t.preventDefault(), location.replace(r))
											return
										}
										if ((t.preventDefault(), i)) {
											let e = !1
											if (
												(i({
													preventDefault: () => {
														e = !0
													},
												}),
												e)
											)
												return
										}
										let { dispatchNavigateAction: u } = e.r(22544)
										o.default.startTransition(() => {
											u(a || r, n ? "replace" : "push", l ?? !0, s.current)
										})
									}
								})(t, _, U, j, N, S, R)
					},
					onMouseEnter(e) {
						O || "function" != typeof D || D(e),
							O && s.props && "function" == typeof s.props.onMouseEnter && s.props.onMouseEnter(e),
							F && z && (0, p.onNavigationIntent)(e.currentTarget, !0 === P)
					},
					onTouchStart: function (e) {
						O || "function" != typeof A || A(e),
							O && s.props && "function" == typeof s.props.onTouchStart && s.props.onTouchStart(e),
							F && z && (0, p.onNavigationIntent)(e.currentTarget, !0 === P)
					},
				}
			return (
				(0, u.isAbsoluteUrl)(U)
					? (V.href = U)
					: (O && !w && ("a" !== s.type || "href" in s.props)) || (V.href = (0, h.addBasePath)(U)),
				(n = O ? o.default.cloneElement(s, V) : (0, l.jsx)("a", { ...L, ...V, children: a })),
				(0, l.jsx)(y.Provider, { value: i, children: n })
			)
		}
		e.r(11312)
		let y = (0, o.createContext)(p.IDLE_LINK_STATUS),
			j = () => (0, o.useContext)(y)
		;("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
			void 0 === r.default.__esModule &&
			(Object.defineProperty(r.default, "__esModule", { value: !0 }),
			Object.assign(r.default, r),
			(t.exports = r.default))
	},
	63158,
	(e) => {
		"use strict"
		var t = e.i(8026),
			r = e.i(10008),
			a = e.i(86192),
			s = e.i(13699)
		let n = (0, s.default)("arrow-down", [
				["path", { d: "M12 5v14", key: "s699le" }],
				["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
			]),
			l = (0, s.default)("arrow-up", [
				["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
				["path", { d: "M12 19V5", key: "x0mq9r" }],
			]),
			o = (0, s.default)("arrow-up-down", [
				["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
				["path", { d: "M17 20V4", key: "1ejh1v" }],
				["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
				["path", { d: "M7 4v16", key: "1glfcx" }],
			]),
			i = (0, s.default)("box", [
				[
					"path",
					{
						d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
						key: "hh9hay",
					},
				],
				["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
				["path", { d: "M12 22V12", key: "d0xqtd" }],
			]),
			c = (0, s.default)("boxes", [
				[
					"path",
					{
						d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
						key: "lc1i9w",
					},
				],
				["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
				["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
				["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
				[
					"path",
					{
						d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
						key: "8zsnat",
					},
				],
				["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
				["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
				["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
				[
					"path",
					{
						d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
						key: "1xygjf",
					},
				],
				["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
				["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
				["path", { d: "M12 13.5V8", key: "1io7kd" }],
			])
		var d = e.i(74310)
		let u = (0, s.default)("circle-check-big", [
				["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
				["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
			]),
			h = (0, s.default)("circle-dot", [
				["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
				["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
			]),
			p = (0, s.default)("clipboard-list", [
				["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
				[
					"path",
					{ d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", key: "116196" },
				],
				["path", { d: "M12 11h4", key: "1jrz19" }],
				["path", { d: "M12 16h4", key: "n85exb" }],
				["path", { d: "M8 11h.01", key: "1dfujw" }],
				["path", { d: "M8 16h.01", key: "18s6g9" }],
			]),
			m = (0, s.default)("cog", [
				["path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z", key: "sobvz5" }],
				["path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", key: "11i496" }],
				["path", { d: "M12 2v2", key: "tus03m" }],
				["path", { d: "M12 22v-2", key: "1osdcq" }],
				["path", { d: "m17 20.66-1-1.73", key: "eq3orb" }],
				["path", { d: "M11 10.27 7 3.34", key: "16pf9h" }],
				["path", { d: "m20.66 17-1.73-1", key: "sg0v6f" }],
				["path", { d: "m3.34 7 1.73 1", key: "1ulond" }],
				["path", { d: "M14 12h8", key: "4f43i9" }],
				["path", { d: "M2 12h2", key: "1t8f8n" }],
				["path", { d: "m20.66 7-1.73 1", key: "1ow05n" }],
				["path", { d: "m3.34 17 1.73-1", key: "nuk764" }],
				["path", { d: "m17 3.34-1 1.73", key: "2wel8s" }],
				["path", { d: "m11 13.73-4 6.93", key: "794ttg" }],
			]),
			f = (0, s.default)("combine", [
				["path", { d: "M10 18H5a3 3 0 0 1-3-3v-1", key: "ru65g8" }],
				["path", { d: "M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2", key: "e30een" }],
				["path", { d: "M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2", key: "2ahx8o" }],
				["path", { d: "m7 21 3-3-3-3", key: "127cv2" }],
				["rect", { x: "14", y: "14", width: "8", height: "8", rx: "2", key: "1b0bso" }],
				["rect", { x: "2", y: "2", width: "8", height: "8", rx: "2", key: "1x09vl" }],
			]),
			x = (0, s.default)("ellipsis", [
				["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
				["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
				["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
			]),
			g = (0, s.default)("file", [
				["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
				["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
			])
		var y = e.i(72714)
		let j = (0, s.default)("folder", [
				[
					"path",
					{
						d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
						key: "1kt360",
					},
				],
			]),
			v = (0, s.default)("folder-open", [
				[
					"path",
					{
						d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
						key: "usdka0",
					},
				],
			]),
			b = (0, s.default)("hammer", [
				["path", { d: "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9", key: "eefl8a" }],
				["path", { d: "m18 15 4-4", key: "16gjal" }],
				[
					"path",
					{
						d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",
						key: "b7pghm",
					},
				],
			]),
			k = (0, s.default)("hexagon", [
				[
					"path",
					{
						d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
						key: "yt0hxn",
					},
				],
			])
		var C = e.i(62929),
			w = e.i(35200)
		let N = (0, s.default)("list-checks", [
				["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
				["path", { d: "m3 7 2 2 4-4", key: "1obspn" }],
				["path", { d: "M13 6h8", key: "15sg57" }],
				["path", { d: "M13 12h8", key: "h98zly" }],
				["path", { d: "M13 18h8", key: "oe0vm4" }],
			]),
			M = (0, s.default)("list-todo", [
				["rect", { x: "3", y: "5", width: "6", height: "6", rx: "1", key: "1defrl" }],
				["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
				["path", { d: "M13 6h8", key: "15sg57" }],
				["path", { d: "M13 12h8", key: "h98zly" }],
				["path", { d: "M13 18h8", key: "oe0vm4" }],
			])
		var S = e.i(52677)
		let T = (0, s.default)("package", [
				[
					"path",
					{
						d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
						key: "1a0edw",
					},
				],
				["path", { d: "M12 22V12", key: "d0xqtd" }],
				["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
				["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
			]),
			D = (0, s.default)("pencil", [
				[
					"path",
					{
						d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
						key: "1a8usu",
					},
				],
				["path", { d: "m15 5 4 4", key: "1mk7zo" }],
			]),
			A = (0, s.default)("pencil-line", [
				["path", { d: "M12 20h9", key: "t2du7b" }],
				[
					"path",
					{
						d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
						key: "1ykcvy",
					},
				],
				["path", { d: "m15 5 3 3", key: "1w25hb" }],
			])
		var O = e.i(94206),
			R = e.i(15801),
			E = e.i(63704),
			E = E
		let P = (0, s.default)("settings-2", [
				["path", { d: "M14 17H5", key: "gfn3mx" }],
				["path", { d: "M19 7h-9", key: "6i9tg" }],
				["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
				["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }],
			]),
			L = (0, s.default)("shapes", [
				[
					"path",
					{
						d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",
						key: "1bo67w",
					},
				],
				["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1", key: "1bkyp8" }],
				["circle", { cx: "17.5", cy: "17.5", r: "3.5", key: "w3z12y" }],
			]),
			F = (0, s.default)("square", [
				["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
			]),
			z = (0, s.default)("star", [
				[
					"path",
					{
						d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
						key: "r04s7s",
					},
				],
			]),
			I = (0, s.default)("tag", [
				[
					"path",
					{
						d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
						key: "vktsd0",
					},
				],
				["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }],
			])
		var _ = e.i(93897)
		let U = (0, s.default)("trash-2", [
				["path", { d: "M3 6h18", key: "d0wm0j" }],
				["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
				["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
				["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
				["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
			]),
			$ = (0, s.default)("wrench", [
				[
					"path",
					{
						d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
						key: "cbrjhi",
					},
				],
			])
		var H = e.i(57392)
		let V = (0, s.default)("zap", [
			[
				"path",
				{
					d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
					key: "1xq2db",
				},
			],
		])
		var B = e.i(13975),
			q = e.i(80757)
		let K = (0, q.createServerReference)(
				"002054cb231fa47439484a3915161973c64ed1483f",
				q.callServer,
				void 0,
				q.findSourceMapURL,
				"deleteIncompleteRuns",
			),
			Z = (0, q.createServerReference)(
				"00a5ec25f92d8662b15561c50a5c435354321089c3",
				q.callServer,
				void 0,
				q.findSourceMapURL,
				"deleteOldRuns",
			)
		e.i(72666)
		var G = e.i(46748),
			J = e.i(71330),
			X = e.i(72583),
			Q = e.i(710),
			W = e.i(67346),
			Y = e.i(44501),
			ee = e.i(83694),
			et = e.i(77853),
			er = e.i(23706),
			ea = e.i(21862),
			es = e.i(83452)
		let en = (0, s.default)("trash", [
				["path", { d: "M3 6h18", key: "d0wm0j" }],
				["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
				["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
			]),
			el = (0, s.default)("settings", [
				[
					"path",
					{
						d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
						key: "1qme2f",
					},
				],
				["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
			]),
			eo = (0, s.default)("file-down", [
				["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
				["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
				["path", { d: "M12 18v-6", key: "17g6i2" }],
				["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }],
			]),
			ei = (0, s.default)("sticky-note", [
				["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
				["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }],
			]),
			ec = (0, q.createServerReference)(
				"40b4937bcb4091f11a172c8fce0af75ebfe363bd78",
				q.callServer,
				void 0,
				q.findSourceMapURL,
				"deleteRun",
			),
			ed = (0, q.createServerReference)(
				"60df38c61534e0f49ce03e555e67bbf31b1eb2393d",
				q.callServer,
				void 0,
				q.findSourceMapURL,
				"updateRunDescription",
			)
		var eu = e.i(61278),
			eh = e.i(69880),
			ep = e.i(26714),
			em = e.i(69380),
			ef = e.i(76146),
			ex = class extends em.Subscribable {
				#e
				#t = void 0
				#r
				#a
				constructor(e, t) {
					super(), (this.#e = e), this.setOptions(t), this.bindMethods(), this.#s()
				}
				bindMethods() {
					;(this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this))
				}
				setOptions(e) {
					let t = this.options
					;(this.options = this.#e.defaultMutationOptions(e)),
						(0, ef.shallowEqualObjects)(this.options, t) ||
							this.#e
								.getMutationCache()
								.notify({ type: "observerOptionsUpdated", mutation: this.#r, observer: this }),
						t?.mutationKey &&
						this.options.mutationKey &&
						(0, ef.hashKey)(t.mutationKey) !== (0, ef.hashKey)(this.options.mutationKey)
							? this.reset()
							: this.#r?.state.status === "pending" && this.#r.setOptions(this.options)
				}
				onUnsubscribe() {
					this.hasListeners() || this.#r?.removeObserver(this)
				}
				onMutationUpdate(e) {
					this.#s(), this.#n(e)
				}
				getCurrentResult() {
					return this.#t
				}
				reset() {
					this.#r?.removeObserver(this), (this.#r = void 0), this.#s(), this.#n()
				}
				mutate(e, t) {
					return (
						(this.#a = t),
						this.#r?.removeObserver(this),
						(this.#r = this.#e.getMutationCache().build(this.#e, this.options)),
						this.#r.addObserver(this),
						this.#r.execute(e)
					)
				}
				#s() {
					let e = this.#r?.state ?? (0, eh.getDefaultState)()
					this.#t = {
						...e,
						isPending: "pending" === e.status,
						isSuccess: "success" === e.status,
						isError: "error" === e.status,
						isIdle: "idle" === e.status,
						mutate: this.mutate,
						reset: this.reset,
					}
				}
				#n(e) {
					ep.notifyManager.batch(() => {
						if (this.#a && this.hasListeners()) {
							let t = this.#t.variables,
								r = this.#t.context
							e?.type === "success"
								? (this.#a.onSuccess?.(e.data, t, r), this.#a.onSettled?.(e.data, null, t, r))
								: e?.type === "error" &&
									(this.#a.onError?.(e.error, t, r), this.#a.onSettled?.(void 0, e.error, t, r))
						}
						this.listeners.forEach((e) => {
							e(this.#t)
						})
					})
				}
			},
			eg = e.i(61239)
		let ey = (0, q.createServerReference)(
			"408c347f24617c8f1364328b80bcb218a112d7a9a7",
			q.callServer,
			void 0,
			q.findSourceMapURL,
			"copyRunToProduction",
		)
		var ej = e.i(47110),
			ev = e.i(92817)
		function eb({ run: e, taskMetrics: s, toolColumns: n, toolGroups: l }) {
			let o,
				i,
				c = (0, a.useRouter)(),
				[u, h] = (0, r.useState)(),
				[m, f] = (0, r.useState)(!1),
				[g, y] = (0, r.useState)(!1),
				[j, v] = (0, r.useState)(!1),
				[b, k] = (0, r.useState)(e.description ?? ""),
				[C, w] = (0, r.useState)(!1),
				N = (0, r.useRef)(null),
				{
					isPending: M,
					copyRun: T,
					copied: D,
				} = (function (e) {
					let [t, a] = (0, r.useState)(!1),
						{ isPending: s, mutate: n } = (function (e, t) {
							let a = (0, eg.useQueryClient)(void 0),
								[s] = r.useState(() => new ex(a, e))
							r.useEffect(() => {
								s.setOptions(e)
							}, [s, e])
							let n = r.useSyncExternalStore(
									r.useCallback((e) => s.subscribe(ep.notifyManager.batchCalls(e)), [s]),
									() => s.getCurrentResult(),
									() => s.getCurrentResult(),
								),
								l = r.useCallback(
									(e, t) => {
										s.mutate(e, t).catch(ef.noop)
									},
									[s],
								)
							if (n.error && (0, ef.shouldThrowError)(s.options.throwOnError, [n.error])) throw n.error
							return { ...n, mutate: l, mutateAsync: n.mutate }
						})({
							mutationFn: () => ey(e),
							onSuccess: (e) => {
								e.success
									? (B.toast.success(e.message), a(!0), setTimeout(() => a(!1), 3e3))
									: B.toast.error(e.error)
							},
							onError: (e) => {
								console.error("Copy to production failed:", e),
									B.toast.error("Failed to copy run to production")
							},
						})
					return { isPending: s, copyRun: n, copied: t }
				})(e.id),
				A = !!(e.description && e.description.trim().length > 0),
				O = (0, r.useCallback)(async () => {
					w(!0)
					try {
						;(await ed(e.id, b.trim() || null)).success
							? (B.toast.success("Description saved"), v(!1), c.refresh())
							: B.toast.error("Failed to save description")
					} catch (e) {
						console.error("Error saving description:", e), B.toast.error("Failed to save description")
					} finally {
						w(!1)
					}
				}, [e.id, b, c]),
				R = (0, r.useCallback)(async () => {
					if (0 === e.failed) return void B.toast.error("No failed tasks to export")
					y(!0)
					try {
						let t = await fetch(`/api/runs/${e.id}/logs/failed`)
						if (!t.ok) {
							let e = await t.json()
							B.toast.error(e.error || "Failed to export logs")
							return
						}
						let r = await t.blob(),
							a = window.URL.createObjectURL(r),
							s = document.createElement("a")
						;(s.href = a),
							(s.download = `run-${e.id}-failed-logs.zip`),
							document.body.appendChild(s),
							s.click(),
							window.URL.revokeObjectURL(a),
							document.body.removeChild(s),
							B.toast.success("Failed logs exported successfully")
					} catch (e) {
						console.error("Error exporting logs:", e), B.toast.error("Failed to export logs")
					} finally {
						y(!1)
					}
				}, [e.id, e.failed]),
				E = (0, r.useCallback)(async () => {
					if (u)
						try {
							await ec(u), h(void 0)
						} catch (e) {
							console.error(e)
						}
				}, [u]),
				P = (0, r.useCallback)(
					(t) => {
						t.target.closest("[data-dropdown-trigger]") || c.push(`/runs/${e.id}`)
					},
					[c, e.id],
				)
			return (0, t.jsxs)(t.Fragment, {
				children: [
					(0, t.jsxs)(et.TableRow, {
						className: "cursor-pointer hover:bg-muted/50",
						onClick: P,
						children: [
							(0, t.jsx)(et.TableCell, { className: "max-w-[200px] truncate", children: e.model }),
							(0, t.jsx)(et.TableCell, { children: e.settings?.apiProvider ?? "-" }),
							(0, t.jsx)(et.TableCell, {
								className: "text-sm text-muted-foreground whitespace-nowrap",
								children: (0, eu.formatDateTime)(e.createdAt),
							}),
							(0, t.jsx)(et.TableCell, { children: e.passed }),
							(0, t.jsx)(et.TableCell, { children: e.failed }),
							(0, t.jsx)(et.TableCell, {
								children:
									e.passed + e.failed > 0 &&
									((i =
										100 == (o = (e.passed / (e.passed + e.failed)) * 100)
											? "text-green-500"
											: o >= 80
												? "text-yellow-500"
												: "text-red-500"),
									(0, t.jsxs)("span", { className: i, children: [o.toFixed(1), "%"] })),
							}),
							(0, t.jsx)(et.TableCell, {
								children:
									s &&
									(0, t.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [
											(0, t.jsx)("span", { children: (0, eu.formatTokens)(s.tokensIn) }),
											"/",
											(0, t.jsx)("span", { children: (0, eu.formatTokens)(s.tokensOut) }),
										],
									}),
							}),
							l.map((e) =>
								(0, t.jsx)(
									et.TableCell,
									{
										className: "text-xs text-center",
										children: ((e) => {
											if (!s?.toolUsage)
												return (0, t.jsx)("span", {
													className: "text-muted-foreground",
													children: "-",
												})
											let r = 0,
												a = 0,
												n = []
											for (let t of e.tools) {
												let e = s.toolUsage[t]
												if (e) {
													;(r += e.attempts), (a += e.failures)
													let s =
														e.attempts > 0
															? `${Math.round(((e.attempts - e.failures) / e.attempts) * 100)}%`
															: "0%"
													n.push({ tool: t, attempts: e.attempts, rate: s })
												}
											}
											if (0 === r)
												return (0, t.jsx)("span", {
													className: "text-muted-foreground",
													children: "-",
												})
											let l = ((r - a) / r) * 100
											return (0, t.jsxs)(er.Tooltip, {
												children: [
													(0, t.jsx)(er.TooltipTrigger, {
														children: (0, t.jsxs)("div", {
															className: "flex flex-col items-center",
															children: [
																(0, t.jsx)("span", {
																	className: "font-medium",
																	children: r,
																}),
																(0, t.jsxs)("span", {
																	className:
																		100 === l
																			? "text-muted-foreground"
																			: l >= 80
																				? "text-yellow-500"
																				: "text-red-500",
																	children: [Math.round(l), "%"],
																}),
															],
														}),
													}),
													(0, t.jsx)(er.TooltipContent, {
														children: (0, t.jsxs)("div", {
															className: "text-xs",
															children: [
																(0, t.jsx)("div", {
																	className: "font-semibold mb-1",
																	children: e.name,
																}),
																n.map(({ tool: e, attempts: r, rate: a }) =>
																	(0, t.jsxs)(
																		"div",
																		{
																			className: "flex justify-between gap-4",
																			children: [
																				(0, t.jsxs)("span", {
																					children: [e, ":"],
																				}),
																				(0, t.jsxs)("span", {
																					children: [r, " (", a, ")"],
																				}),
																			],
																		},
																		e,
																	),
																),
															],
														}),
													}),
												],
											})
										})(e),
									},
									e.id,
								),
							),
							n.map((e) => {
								let r = s?.toolUsage?.[e],
									a = r && r.attempts > 0 ? ((r.attempts - r.failures) / r.attempts) * 100 : 100
								return (0, t.jsx)(
									et.TableCell,
									{
										className: "text-xs text-center",
										children: r
											? (0, t.jsxs)("div", {
													className: "flex flex-col items-center",
													children: [
														(0, t.jsx)("span", {
															className: "font-medium",
															children: r.attempts,
														}),
														(0, t.jsx)("span", {
															className:
																100 === a
																	? "text-muted-foreground"
																	: a >= 80
																		? "text-yellow-500"
																		: "text-red-500",
															children: (0, eu.formatToolUsageSuccessRate)(r),
														}),
													],
												})
											: (0, t.jsx)("span", { className: "text-muted-foreground", children: "-" }),
									},
									e,
								)
							}),
							(0, t.jsx)(et.TableCell, { children: s && (0, eu.formatCurrency)(s.cost) }),
							(0, t.jsx)(et.TableCell, { children: s && (0, eu.formatDuration)(s.duration) }),
							(0, t.jsx)(et.TableCell, {
								onClick: (e) => e.stopPropagation(),
								children: (0, t.jsxs)("div", {
									className: "flex items-center gap-1",
									children: [
										(0, t.jsxs)(er.Tooltip, {
											children: [
												(0, t.jsx)(er.TooltipTrigger, {
													asChild: !0,
													children: (0, t.jsx)(J.Button, {
														variant: "ghost",
														size: "icon",
														className: A ? "" : "opacity-30 hover:opacity-60",
														onClick: (t) => {
															t.stopPropagation(), k(e.description ?? ""), v(!0)
														},
														children: (0, t.jsx)(ei, { className: "h-4 w-4" }),
													}),
												}),
												(0, t.jsx)(er.TooltipContent, {
													className: "max-w-[300px]",
													children: A
														? (0, t.jsx)("div", {
																className: "whitespace-pre-wrap",
																children: e.description,
															})
														: (0, t.jsx)("div", {
																className: "text-muted-foreground",
																children: "No description. Click to add one.",
															}),
												}),
											],
										}),
										(0, t.jsxs)(Q.DropdownMenu, {
											children: [
												(0, t.jsx)(J.Button, {
													variant: "ghost",
													size: "icon",
													asChild: !0,
													children: (0, t.jsx)(Q.DropdownMenuTrigger, {
														"data-dropdown-trigger": !0,
														children: (0, t.jsx)(x, {}),
													}),
												}),
												(0, t.jsxs)(Q.DropdownMenuContent, {
													align: "end",
													children: [
														(0, t.jsx)(Q.DropdownMenuItem, {
															asChild: !0,
															children: (0, t.jsx)(ea.default, {
																href: `/runs/${e.id}`,
																children: (0, t.jsxs)("div", {
																	className: "flex items-center gap-1",
																	children: [
																		(0, t.jsx)(p, {}),
																		(0, t.jsx)("div", { children: "View Tasks" }),
																	],
																}),
															}),
														}),
														e.settings &&
															(0, t.jsx)(Q.DropdownMenuItem, {
																onClick: () => f(!0),
																children: (0, t.jsxs)("div", {
																	className: "flex items-center gap-1",
																	children: [
																		(0, t.jsx)(el, {}),
																		(0, t.jsx)("div", {
																			children: "View Settings",
																		}),
																	],
																}),
															}),
														e.taskMetricsId &&
															(0, t.jsx)(Q.DropdownMenuItem, {
																onClick: () => T(),
																disabled: M || D,
																children: (0, t.jsx)("div", {
																	className: "flex items-center gap-1",
																	children: M
																		? (0, t.jsxs)(t.Fragment, {
																				children: [
																					(0, t.jsx)(S.LoaderCircle, {
																						className: "animate-spin",
																					}),
																					"Copying...",
																				],
																			})
																		: D
																			? (0, t.jsxs)(t.Fragment, {
																					children: [
																						(0, t.jsx)(d.Check, {}),
																						"Copied!",
																					],
																				})
																			: (0, t.jsxs)(t.Fragment, {
																					children: [
																						(0, t.jsx)(es.Copy, {}),
																						"Copy to Production",
																					],
																				}),
																}),
															}),
														e.failed > 0 &&
															(0, t.jsx)(Q.DropdownMenuItem, {
																onClick: R,
																disabled: g,
																children: (0, t.jsx)("div", {
																	className: "flex items-center gap-1",
																	children: g
																		? (0, t.jsxs)(t.Fragment, {
																				children: [
																					(0, t.jsx)(S.LoaderCircle, {
																						className: "animate-spin",
																					}),
																					"Exporting...",
																				],
																			})
																		: (0, t.jsxs)(t.Fragment, {
																				children: [
																					(0, t.jsx)(eo, {}),
																					"Export Failed Logs",
																				],
																			}),
																}),
															}),
														(0, t.jsx)(Q.DropdownMenuItem, {
															onClick: () => {
																h(e.id), setTimeout(() => N.current?.focus(), 0)
															},
															children: (0, t.jsxs)("div", {
																className: "flex items-center gap-1",
																children: [
																	(0, t.jsx)(en, {}),
																	(0, t.jsx)("div", { children: "Delete" }),
																],
															}),
														}),
													],
												}),
											],
										}),
									],
								}),
							}),
						],
					}),
					(0, t.jsx)(G.AlertDialog, {
						open: !!u,
						onOpenChange: () => h(void 0),
						children: (0, t.jsxs)(G.AlertDialogContent, {
							children: [
								(0, t.jsxs)(G.AlertDialogHeader, {
									children: [
										(0, t.jsx)(G.AlertDialogTitle, { children: "Are you sure?" }),
										(0, t.jsx)(G.AlertDialogDescription, {
											children: "This action cannot be undone.",
										}),
									],
								}),
								(0, t.jsxs)(G.AlertDialogFooter, {
									children: [
										(0, t.jsx)(G.AlertDialogCancel, { children: "Cancel" }),
										(0, t.jsx)(G.AlertDialogAction, { ref: N, onClick: E, children: "Continue" }),
									],
								}),
							],
						}),
					}),
					(0, t.jsx)(X.Dialog, {
						open: m,
						onOpenChange: f,
						children: (0, t.jsxs)(X.DialogContent, {
							className: "max-w-2xl max-h-[80vh]",
							children: [
								(0, t.jsx)(X.DialogHeader, {
									children: (0, t.jsx)(X.DialogTitle, { children: "Run Settings" }),
								}),
								(0, t.jsx)(ev.ScrollArea, {
									className: "max-h-[60vh]",
									children: (0, t.jsx)("pre", {
										className: "text-xs font-mono bg-muted p-4 rounded-md overflow-auto",
										children: JSON.stringify(e.settings, null, 2),
									}),
								}),
							],
						}),
					}),
					(0, t.jsx)(X.Dialog, {
						open: j,
						onOpenChange: v,
						children: (0, t.jsxs)(X.DialogContent, {
							className: "max-w-lg",
							children: [
								(0, t.jsx)(X.DialogHeader, {
									children: (0, t.jsx)(X.DialogTitle, { children: "Run Description" }),
								}),
								(0, t.jsx)("div", {
									className: "space-y-4",
									children: (0, t.jsx)(ej.Textarea, {
										placeholder: "Add a description or notes for this run...",
										value: b,
										onChange: (e) => k(e.target.value),
										rows: 4,
										className: "resize-none",
									}),
								}),
								(0, t.jsxs)(X.DialogFooter, {
									children: [
										(0, t.jsx)(J.Button, {
											variant: "outline",
											onClick: () => v(!1),
											children: "Cancel",
										}),
										(0, t.jsx)(J.Button, {
											onClick: O,
											disabled: C,
											children: C
												? (0, t.jsxs)(t.Fragment, {
														children: [
															(0, t.jsx)(S.LoaderCircle, {
																className: "h-4 w-4 mr-2 animate-spin",
															}),
															"Saving...",
														],
													})
												: "Save",
										}),
									],
								}),
							],
						}),
					}),
				],
			})
		}
		let ek = [
			{ name: "combine", icon: f },
			{ name: "layers", icon: C.Layers },
			{ name: "box", icon: i },
			{ name: "boxes", icon: c },
			{ name: "package", icon: T },
			{ name: "folder", icon: j },
			{ name: "folder-open", icon: v },
			{ name: "file", icon: g },
			{ name: "file-text", icon: y.FileText },
			{ name: "list", icon: w.List },
			{ name: "list-todo", icon: M },
			{ name: "list-checks", icon: N },
			{ name: "clipboard-list", icon: p },
			{ name: "check", icon: d.Check },
			{ name: "check-circle", icon: u },
			{ name: "pencil", icon: A },
			{ name: "trash", icon: U },
			{ name: "x", icon: H.X },
			{ name: "search", icon: E.default },
			{ name: "terminal", icon: _.Terminal },
			{ name: "shapes", icon: L },
			{ name: "hexagon", icon: k },
			{ name: "square", icon: F },
			{ name: "circle-dot", icon: h },
			{ name: "star", icon: z },
			{ name: "zap", icon: V },
			{ name: "hammer", icon: b },
			{ name: "wrench", icon: $ },
			{ name: "cog", icon: m },
			{ name: "settings", icon: P },
			{ name: "tag", icon: I },
		]
		function eC(e) {
			return ek.find((t) => t.name === e)?.icon ?? f
		}
		let ew = (0, r.memo)(function ({ open: e, onOpenChange: a, editingGroup: s, availableTools: n, onSave: l }) {
				let [o, i] = (0, r.useState)(s?.name ?? ""),
					[c, d] = (0, r.useState)(s?.icon ?? "combine"),
					[u, h] = (0, r.useState)(s?.tools ?? [])
				;(0, r.useEffect)(() => {
					e && (i(s?.name ?? ""), d(s?.icon ?? "combine"), h(s?.tools ?? []))
				}, [e, s])
				let p = o.trim().length > 0 && u.length > 0
				return (0, t.jsx)(X.Dialog, {
					open: e,
					onOpenChange: a,
					children: (0, t.jsxs)(X.DialogContent, {
						className: "max-w-md",
						children: [
							(0, t.jsx)(X.DialogHeader, {
								children: (0, t.jsx)(X.DialogTitle, {
									children: s ? "Edit Tool Group" : "Create Tool Group",
								}),
							}),
							(0, t.jsxs)("div", {
								className: "space-y-4 py-4",
								children: [
									(0, t.jsxs)("div", {
										className: "space-y-2",
										children: [
											(0, t.jsxs)("label", {
												className: "text-sm font-medium",
												children: [
													"Group Name ",
													(0, t.jsx)("span", {
														className: "text-destructive",
														children: "*",
													}),
												],
											}),
											(0, t.jsx)(W.Input, {
												placeholder: "e.g., File Operations",
												value: o,
												onChange: (e) => i(e.target.value),
												className: o.trim() ? "" : "border-muted-foreground/30",
											}),
										],
									}),
									(0, t.jsxs)("div", {
										className: "space-y-2",
										children: [
											(0, t.jsx)("label", { className: "text-sm font-medium", children: "Icon" }),
											(0, t.jsx)("div", {
												className: "flex flex-wrap gap-2",
												children: ek.map(({ name: e, icon: r }) =>
													(0, t.jsx)(
														J.Button,
														{
															variant: c === e ? "default" : "outline",
															size: "icon",
															className: "h-8 w-8",
															onClick: () => d(e),
															children: (0, t.jsx)(r, { className: "h-4 w-4" }),
														},
														e,
													),
												),
											}),
										],
									}),
									(0, t.jsxs)("div", {
										className: "space-y-2",
										children: [
											(0, t.jsxs)("label", {
												className: "text-sm font-medium",
												children: [
													"Tools ",
													(0, t.jsx)("span", {
														className: "text-destructive",
														children: "*",
													}),
												],
											}),
											(0, t.jsx)(Y.MultiSelect, {
												options: n,
												value: u,
												onValueChange: h,
												placeholder: "Select tools...",
												className: "w-full",
												maxCount: 3,
												modalPopover: !0,
											}),
											(0, t.jsx)("div", {
												className: "text-xs text-muted-foreground",
												children:
													u.length > 0
														? `${u.length} tool${1 !== u.length ? "s" : ""} selected`
														: "Select at least one tool",
											}),
										],
									}),
								],
							}),
							(0, t.jsxs)(X.DialogFooter, {
								children: [
									(0, t.jsx)(J.Button, {
										variant: "outline",
										onClick: () => a(!1),
										children: "Cancel",
									}),
									(0, t.jsx)(J.Button, {
										onClick: () => {
											p &&
												(l({
													id:
														s?.id ??
														`group-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
													name: o.trim(),
													icon: c,
													tools: u,
												}),
												a(!1))
										},
										disabled: !p,
										children: s ? "Save Changes" : "Create Group",
									}),
								],
							}),
						],
					}),
				})
			}),
			eN = [
				{ value: "all", label: "All time" },
				{ value: "24h", label: "Last 24 hours" },
				{ value: "7d", label: "Last 7 days" },
				{ value: "30d", label: "Last 30 days" },
				{ value: "90d", label: "Last 90 days" },
			],
			eM = "evals-runs-timeframe",
			eS = "evals-runs-model-filter",
			eT = "evals-runs-provider-filter",
			eD = "evals-runs-tool-groups"
		function eA({ column: e, sortColumn: r, sortDirection: a }) {
			return r !== e
				? (0, t.jsx)(o, { className: "ml-1 h-3 w-3 opacity-50" })
				: "asc" === a
					? (0, t.jsx)(l, { className: "ml-1 h-3 w-3" })
					: (0, t.jsx)(n, { className: "ml-1 h-3 w-3" })
		}
		function eO({ runs: e }) {
			let s = (0, a.useRouter)(),
				[n, l] = (0, r.useState)("createdAt"),
				[o, i] = (0, r.useState)("desc"),
				[c, d] = (0, r.useState)(() => localStorage.getItem(eM) || "all"),
				[u, h] = (0, r.useState)(() => {
					let e = localStorage.getItem(eS)
					return e ? JSON.parse(e) : []
				}),
				[p, m] = (0, r.useState)(() => {
					let e = localStorage.getItem(eT)
					return e ? JSON.parse(e) : []
				}),
				[f, g] = (0, r.useState)(() => {
					let e = localStorage.getItem(eD)
					if (e)
						try {
							return JSON.parse(e)
						} catch {}
					return []
				}),
				[y, j] = (0, r.useState)(!1),
				[v, b] = (0, r.useState)(null),
				[k, w] = (0, r.useState)(!1),
				[N, M] = (0, r.useState)(!1),
				[T, A] = (0, r.useState)(!1)
			;(0, r.useEffect)(() => {
				localStorage.setItem(eM, c)
			}, [c]),
				(0, r.useEffect)(() => {
					localStorage.setItem(eS, JSON.stringify(u))
				}, [u]),
				(0, r.useEffect)(() => {
					localStorage.setItem(eT, JSON.stringify(p))
				}, [p]),
				(0, r.useEffect)(() => {
					localStorage.setItem(eD, JSON.stringify(f))
				}, [f])
			let E = (0, r.useMemo)(() => e.filter((e) => null === e.taskMetrics).length, [e]),
				P = (0, r.useMemo)(() => {
					let t = new Date(Date.now() - 2592e6)
					return e.filter((e) => e.createdAt < t).length
				}, [e]),
				L = (0, r.useCallback)(async () => {
					A(!0)
					try {
						let e = await K()
						e.success
							? (B.toast.success(
									`Deleted ${e.deletedCount} incomplete run${1 !== e.deletedCount ? "s" : ""}`,
								),
								e.storageErrors.length > 0 &&
									B.toast.warning(
										`Some storage folders could not be deleted: ${e.storageErrors.length} errors`,
									),
								s.refresh())
							: B.toast.error("Failed to delete incomplete runs")
					} catch (e) {
						console.error("Error deleting incomplete runs:", e),
							B.toast.error("Failed to delete incomplete runs")
					} finally {
						A(!1), w(!1)
					}
				}, [s]),
				F = (0, r.useCallback)(async () => {
					A(!0)
					try {
						let e = await Z()
						e.success
							? (B.toast.success(
									`Deleted ${e.deletedCount} run${1 !== e.deletedCount ? "s" : ""} older than 30 days`,
								),
								e.storageErrors.length > 0 &&
									B.toast.warning(
										`Some storage folders could not be deleted: ${e.storageErrors.length} errors`,
									),
								s.refresh())
							: B.toast.error("Failed to delete old runs")
					} catch (e) {
						console.error("Error deleting old runs:", e), B.toast.error("Failed to delete old runs")
					} finally {
						A(!1), M(!1)
					}
				}, [s]),
				z = (e) => {
					n === e ? i("asc" === o ? "desc" : "asc") : (l(e), i("desc"))
				},
				I = (0, r.useMemo)(() => {
					let t = new Set()
					for (let r of e) r.model && t.add(r.model)
					return Array.from(t)
						.sort()
						.map((e) => ({ label: e, value: e }))
				}, [e]),
				_ = (0, r.useMemo)(() => {
					let t = new Set()
					for (let r of e) {
						let e = r.settings?.apiProvider
						e && t.add(e)
					}
					return Array.from(t)
						.sort()
						.map((e) => ({ label: e, value: e }))
				}, [e]),
				$ = (0, r.useMemo)(
					() =>
						e.filter((e) => {
							let t = (function (e) {
								if ("all" === e) return null
								let t = new Date()
								switch (e) {
									case "24h":
										return new Date(t.getTime() - 864e5)
									case "7d":
										return new Date(t.getTime() - 6048e5)
									case "30d":
										return new Date(t.getTime() - 2592e6)
									case "90d":
										return new Date(t.getTime() - 7776e6)
									default:
										return null
								}
							})(c)
							if ((t && e.createdAt < t) || (u.length > 0 && !u.includes(e.model))) return !1
							if (p.length > 0) {
								let t = e.settings?.apiProvider
								if (!t || !p.includes(t)) return !1
							}
							return !0
						}),
					[e, c, u, p],
				),
				V = (0, r.useMemo)(() => {
					let e = new Map()
					for (let t of $)
						if (t.taskMetrics?.toolUsage)
							for (let [r, a] of Object.entries(t.taskMetrics.toolUsage)) {
								let t = e.get(r) ?? 0
								e.set(r, t + a.attempts)
							}
					return Array.from(e.entries())
						.sort((e, t) => t[1] - e[1])
						.map(([e]) => e)
				}, [$]),
				q = (0, r.useMemo)(() => V.map((e) => ({ label: e, value: e })), [V]),
				X = (0, r.useMemo)(() => {
					let e = new Set()
					for (let t of f) for (let r of t.tools) e.add(r)
					return e
				}, [f]),
				W = (0, r.useMemo)(() => V.filter((e) => !X.has(e)), [V, X]),
				ea = (0, r.useMemo)(
					() =>
						n
							? [...$].sort((e, t) => {
									let r = null,
										a = null
									switch (n) {
										case "model":
											;(r = e.model), (a = t.model)
											break
										case "provider":
											;(r = e.settings?.apiProvider ?? ""), (a = t.settings?.apiProvider ?? "")
											break
										case "passed":
											;(r = e.passed), (a = t.passed)
											break
										case "failed":
											;(r = e.failed), (a = t.failed)
											break
										case "percent":
											;(r = e.passed + e.failed > 0 ? e.passed / (e.passed + e.failed) : 0),
												(a = t.passed + t.failed > 0 ? t.passed / (t.passed + t.failed) : 0)
											break
										case "cost":
											;(r = e.taskMetrics?.cost ?? 0), (a = t.taskMetrics?.cost ?? 0)
											break
										case "duration":
											;(r = e.taskMetrics?.duration ?? 0), (a = t.taskMetrics?.duration ?? 0)
											break
										case "createdAt":
											;(r = e.createdAt), (a = t.createdAt)
									}
									if (null === r || null === a) return 0
									let s = 0
									return (
										(s =
											"string" == typeof r && "string" == typeof a
												? r.localeCompare(a)
												: r instanceof Date && a instanceof Date
													? r.getTime() - a.getTime()
													: r - a),
										"asc" === o ? s : -s
									)
								})
							: $,
					[$, n, o],
				),
				es = 7 + f.length + W.length + 3,
				en = "all" !== c || u.length > 0 || p.length > 0,
				el = () => {
					d("all"), h([]), m([])
				},
				eo = (0, r.useCallback)(() => {
					b(null), j(!0)
				}, []),
				ei = (0, r.useCallback)((e) => {
					b(e), j(!0)
				}, []),
				ec = (0, r.useCallback)(
					(e) => {
						g((t) => {
							let r = t.findIndex((t) => t.id === e.id)
							if (!(r >= 0)) return [...t, e]
							{
								let a = [...t]
								return (a[r] = e), a
							}
						}),
							B.toast.success(v ? "Group updated" : "Group created")
					},
					[v],
				),
				ed = (0, r.useCallback)((e) => {
					g((t) => t.filter((t) => t.id !== e)), B.toast.success("Group deleted")
				}, []),
				eu = (0, r.useMemo)(() => {
					let e = new Set()
					for (let t of f) if (!v || t.id !== v.id) for (let r of t.tools) e.add(r)
					return q.filter((t) => !e.has(t.value))
				}, [q, f, v])
			return (0, t.jsxs)(t.Fragment, {
				children: [
					(0, t.jsxs)("div", {
						className: "flex items-center gap-4 p-4 border border-b-0 rounded-t-md bg-muted/30",
						children: [
							(0, t.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									(0, t.jsx)("span", {
										className: "text-sm font-medium text-muted-foreground",
										children: "Timeframe:",
									}),
									(0, t.jsxs)(ee.Select, {
										value: c,
										onValueChange: (e) => d(e),
										children: [
											(0, t.jsx)(ee.SelectTrigger, {
												className: "w-[140px]",
												children: (0, t.jsx)(ee.SelectValue, {}),
											}),
											(0, t.jsx)(ee.SelectContent, {
												children: eN.map((e) =>
													(0, t.jsx)(
														ee.SelectItem,
														{ value: e.value, children: e.label },
														e.value,
													),
												),
											}),
										],
									}),
								],
							}),
							(0, t.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									(0, t.jsx)("span", {
										className: "text-sm font-medium text-muted-foreground",
										children: "Model:",
									}),
									(0, t.jsx)(Y.MultiSelect, {
										options: I,
										value: u,
										onValueChange: h,
										placeholder: "All models",
										className: "w-[200px]",
										maxCount: 1,
									}),
								],
							}),
							(0, t.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									(0, t.jsx)("span", {
										className: "text-sm font-medium text-muted-foreground",
										children: "Provider:",
									}),
									(0, t.jsx)(Y.MultiSelect, {
										options: _,
										value: p,
										onValueChange: m,
										placeholder: "All providers",
										className: "w-[180px]",
										maxCount: 1,
									}),
								],
							}),
							(0, t.jsx)("div", {
								className: "flex items-center gap-2",
								children: (0, t.jsxs)(Q.DropdownMenu, {
									children: [
										(0, t.jsx)(Q.DropdownMenuTrigger, {
											asChild: !0,
											children: (0, t.jsxs)(J.Button, {
												variant: "outline",
												size: "sm",
												className: "flex items-center gap-2",
												children: [
													(0, t.jsx)(C.Layers, { className: "h-4 w-4" }),
													(0, t.jsx)("span", { children: "Groups" }),
													f.length > 0 &&
														(0, t.jsx)("span", {
															className:
																"bg-primary text-primary-foreground text-xs px-1.5 rounded-full",
															children: f.length,
														}),
												],
											}),
										}),
										(0, t.jsxs)(Q.DropdownMenuContent, {
											align: "start",
											className: "w-64",
											children: [
												f.length > 0
													? (0, t.jsxs)(t.Fragment, {
															children: [
																f.map((e) => {
																	let r = eC(e.icon)
																	return (0, t.jsxs)(
																		Q.DropdownMenuItem,
																		{
																			className:
																				"flex items-center justify-between",
																			onClick: (t) => {
																				t.preventDefault(), ei(e)
																			},
																			children: [
																				(0, t.jsxs)("div", {
																					className:
																						"flex items-center gap-2",
																					children: [
																						(0, t.jsx)(r, {
																							className: "h-4 w-4",
																						}),
																						(0, t.jsx)("span", {
																							children: e.name,
																						}),
																						(0, t.jsxs)("span", {
																							className:
																								"text-xs text-muted-foreground",
																							children: [
																								"(",
																								e.tools.length,
																								")",
																							],
																						}),
																					],
																				}),
																				(0, t.jsxs)("div", {
																					className:
																						"flex items-center gap-1",
																					children: [
																						(0, t.jsx)(J.Button, {
																							variant: "ghost",
																							size: "icon",
																							className: "h-6 w-6",
																							onClick: (t) => {
																								t.stopPropagation(),
																									ei(e)
																							},
																							children: (0, t.jsx)(D, {
																								className: "h-3 w-3",
																							}),
																						}),
																						(0, t.jsx)(J.Button, {
																							variant: "ghost",
																							size: "icon",
																							className:
																								"h-6 w-6 text-destructive hover:text-destructive",
																							onClick: (t) => {
																								t.stopPropagation(),
																									ed(e.id)
																							},
																							children: (0, t.jsx)(U, {
																								className: "h-3 w-3",
																							}),
																						}),
																					],
																				}),
																			],
																		},
																		e.id,
																	)
																}),
																(0, t.jsx)(Q.DropdownMenuSeparator, {}),
															],
														})
													: (0, t.jsx)("div", {
															className: "px-2 py-1.5 text-sm text-muted-foreground",
															children: "No groups yet",
														}),
												(0, t.jsxs)(Q.DropdownMenuItem, {
													onClick: eo,
													children: [
														(0, t.jsx)(O.Plus, { className: "h-4 w-4 mr-2" }),
														"Add Group",
													],
												}),
											],
										}),
									],
								}),
							}),
							en &&
								(0, t.jsxs)(J.Button, {
									variant: "ghost",
									size: "sm",
									onClick: el,
									children: [(0, t.jsx)(H.X, { className: "h-4 w-4 mr-1" }), "Clear filters"],
								}),
							(0, t.jsxs)("div", {
								className: "flex items-center gap-2 ml-auto",
								children: [
									(E > 0 || P > 0) &&
										(0, t.jsxs)(Q.DropdownMenu, {
											children: [
												(0, t.jsx)(J.Button, {
													variant: "ghost",
													size: "sm",
													asChild: !0,
													children: (0, t.jsx)(Q.DropdownMenuTrigger, {
														disabled: T,
														children: (0, t.jsx)(x, { className: "h-4 w-4" }),
													}),
												}),
												(0, t.jsxs)(Q.DropdownMenuContent, {
													align: "end",
													children: [
														E > 0 &&
															(0, t.jsxs)(Q.DropdownMenuItem, {
																onClick: () => w(!0),
																disabled: T,
																className: "text-destructive focus:text-destructive",
																children: [
																	(0, t.jsx)(U, { className: "h-4 w-4 mr-2" }),
																	"Delete ",
																	E,
																	" incomplete run",
																	1 !== E ? "s" : "",
																],
															}),
														P > 0 &&
															(0, t.jsxs)(Q.DropdownMenuItem, {
																onClick: () => M(!0),
																disabled: T,
																className: "text-destructive focus:text-destructive",
																children: [
																	(0, t.jsx)(U, { className: "h-4 w-4 mr-2" }),
																	"Delete ",
																	P,
																	" run",
																	1 !== P ? "s" : "",
																	" over 30d",
																],
															}),
													],
												}),
											],
										}),
									(0, t.jsxs)("div", {
										className: "text-sm text-muted-foreground",
										children: [$.length, " of ", e.length, " runs"],
									}),
								],
							}),
						],
					}),
					(0, t.jsxs)(et.Table, {
						className: "border border-t-0 rounded-t-none",
						children: [
							(0, t.jsx)(et.TableHeader, {
								children: (0, t.jsxs)(et.TableRow, {
									children: [
										(0, t.jsx)(et.TableHead, {
											className: "max-w-[200px] cursor-pointer select-none",
											onClick: () => z("model"),
											children: (0, t.jsxs)("div", {
												className: "flex items-center",
												children: [
													"Model",
													(0, t.jsx)(eA, {
														column: "model",
														sortColumn: n,
														sortDirection: o,
													}),
												],
											}),
										}),
										(0, t.jsx)(et.TableHead, {
											className: "cursor-pointer select-none",
											onClick: () => z("provider"),
											children: (0, t.jsxs)("div", {
												className: "flex items-center",
												children: [
													"Provider",
													(0, t.jsx)(eA, {
														column: "provider",
														sortColumn: n,
														sortDirection: o,
													}),
												],
											}),
										}),
										(0, t.jsx)(et.TableHead, {
											className: "cursor-pointer select-none",
											onClick: () => z("createdAt"),
											children: (0, t.jsxs)("div", {
												className: "flex items-center",
												children: [
													"Created",
													(0, t.jsx)(eA, {
														column: "createdAt",
														sortColumn: n,
														sortDirection: o,
													}),
												],
											}),
										}),
										(0, t.jsx)(et.TableHead, {
											className: "cursor-pointer select-none",
											onClick: () => z("passed"),
											children: (0, t.jsxs)("div", {
												className: "flex items-center",
												children: [
													"Passed",
													(0, t.jsx)(eA, {
														column: "passed",
														sortColumn: n,
														sortDirection: o,
													}),
												],
											}),
										}),
										(0, t.jsx)(et.TableHead, {
											className: "cursor-pointer select-none",
											onClick: () => z("failed"),
											children: (0, t.jsxs)("div", {
												className: "flex items-center",
												children: [
													"Failed",
													(0, t.jsx)(eA, {
														column: "failed",
														sortColumn: n,
														sortDirection: o,
													}),
												],
											}),
										}),
										(0, t.jsx)(et.TableHead, {
											className: "cursor-pointer select-none",
											onClick: () => z("percent"),
											children: (0, t.jsxs)("div", {
												className: "flex items-center",
												children: [
													"%",
													(0, t.jsx)(eA, {
														column: "percent",
														sortColumn: n,
														sortDirection: o,
													}),
												],
											}),
										}),
										(0, t.jsx)(et.TableHead, { children: "Tokens" }),
										f.map((e) => {
											let r = eC(e.icon)
											return (0, t.jsx)(
												et.TableHead,
												{
													className: "text-center",
													children: (0, t.jsx)("div", {
														className: "flex justify-center",
														children: (0, t.jsxs)(er.Tooltip, {
															children: [
																(0, t.jsx)(er.TooltipTrigger, {
																	children: (0, t.jsx)(r, { className: "h-4 w-4" }),
																}),
																(0, t.jsx)(er.TooltipContent, {
																	children: (0, t.jsxs)("div", {
																		className: "text-xs",
																		children: [
																			(0, t.jsx)("div", {
																				className: "font-semibold mb-1",
																				children: e.name,
																			}),
																			e.tools.map((e) =>
																				(0, t.jsx)("div", { children: e }, e),
																			),
																		],
																	}),
																}),
															],
														}),
													}),
												},
												e.id,
											)
										}),
										W.map((e) =>
											(0, t.jsx)(
												et.TableHead,
												{
													className: "text-xs text-center",
													children: (0, t.jsxs)(er.Tooltip, {
														children: [
															(0, t.jsx)(er.TooltipTrigger, {
																children: e
																	.split("_")
																	.map((e) => e[0]?.toUpperCase() ?? "")
																	.join(""),
															}),
															(0, t.jsx)(er.TooltipContent, { children: e }),
														],
													}),
												},
												e,
											),
										),
										(0, t.jsx)(et.TableHead, {
											className: "cursor-pointer select-none",
											onClick: () => z("cost"),
											children: (0, t.jsxs)("div", {
												className: "flex items-center",
												children: [
													"Cost",
													(0, t.jsx)(eA, { column: "cost", sortColumn: n, sortDirection: o }),
												],
											}),
										}),
										(0, t.jsx)(et.TableHead, {
											className: "cursor-pointer select-none",
											onClick: () => z("duration"),
											children: (0, t.jsxs)("div", {
												className: "flex items-center",
												children: [
													"Duration",
													(0, t.jsx)(eA, {
														column: "duration",
														sortColumn: n,
														sortDirection: o,
													}),
												],
											}),
										}),
										(0, t.jsx)(et.TableHead, {}),
									],
								}),
							}),
							(0, t.jsx)(et.TableBody, {
								children: ea.length
									? ea.map(({ taskMetrics: e, ...r }) =>
											(0, t.jsx)(
												eb,
												{ run: r, taskMetrics: e, toolColumns: W, toolGroups: f },
												r.id,
											),
										)
									: (0, t.jsx)(et.TableRow, {
											children: (0, t.jsx)(et.TableCell, {
												colSpan: es,
												className: "text-center py-8",
												children:
													0 === e.length
														? (0, t.jsxs)(t.Fragment, {
																children: [
																	"No eval runs yet.",
																	(0, t.jsx)(J.Button, {
																		variant: "link",
																		onClick: () => s.push("/runs/new"),
																		children: "Launch",
																	}),
																	"one now.",
																],
															})
														: (0, t.jsxs)(t.Fragment, {
																children: [
																	"No runs match the current filters.",
																	(0, t.jsx)(J.Button, {
																		variant: "link",
																		onClick: el,
																		children: "Clear filters",
																	}),
																	"to see all runs.",
																],
															}),
											}),
										}),
							}),
						],
					}),
					(0, t.jsx)(J.Button, {
						variant: "default",
						className: "absolute top-4 right-12 size-12 rounded-full",
						onClick: () => s.push("/runs/new"),
						children: (0, t.jsx)(R.Rocket, { className: "size-6" }),
					}),
					(0, t.jsx)(ew, { open: y, onOpenChange: j, editingGroup: v, availableTools: eu, onSave: ec }),
					(0, t.jsx)(G.AlertDialog, {
						open: k,
						onOpenChange: w,
						children: (0, t.jsxs)(G.AlertDialogContent, {
							children: [
								(0, t.jsxs)(G.AlertDialogHeader, {
									children: [
										(0, t.jsx)(G.AlertDialogTitle, { children: "Delete Incomplete Runs" }),
										(0, t.jsxs)(G.AlertDialogDescription, {
											children: [
												"Are you sure you want to delete ",
												E,
												" incomplete run",
												1 !== E ? "s" : "",
												"? This will permanently remove all database records and storage folders for these runs. This action cannot be undone.",
											],
										}),
									],
								}),
								(0, t.jsxs)(G.AlertDialogFooter, {
									children: [
										(0, t.jsx)(G.AlertDialogCancel, { disabled: T, children: "Cancel" }),
										(0, t.jsx)(G.AlertDialogAction, {
											onClick: L,
											disabled: T,
											className:
												"bg-destructive text-destructive-foreground hover:bg-destructive/90",
											children: T
												? (0, t.jsxs)(t.Fragment, {
														children: [
															(0, t.jsx)(S.LoaderCircle, {
																className: "h-4 w-4 mr-2 animate-spin",
															}),
															"Deleting...",
														],
													})
												: (0, t.jsxs)(t.Fragment, {
														children: ["Delete ", E, " run", 1 !== E ? "s" : ""],
													}),
										}),
									],
								}),
							],
						}),
					}),
					(0, t.jsx)(G.AlertDialog, {
						open: N,
						onOpenChange: M,
						children: (0, t.jsxs)(G.AlertDialogContent, {
							children: [
								(0, t.jsxs)(G.AlertDialogHeader, {
									children: [
										(0, t.jsx)(G.AlertDialogTitle, { children: "Delete Old Runs" }),
										(0, t.jsxs)(G.AlertDialogDescription, {
											children: [
												"Are you sure you want to delete ",
												P,
												" run",
												1 !== P ? "s" : "",
												" older than 30 days? This will permanently remove all database records and storage folders for these runs. This action cannot be undone.",
											],
										}),
									],
								}),
								(0, t.jsxs)(G.AlertDialogFooter, {
									children: [
										(0, t.jsx)(G.AlertDialogCancel, { disabled: T, children: "Cancel" }),
										(0, t.jsx)(G.AlertDialogAction, {
											onClick: F,
											disabled: T,
											className:
												"bg-destructive text-destructive-foreground hover:bg-destructive/90",
											children: T
												? (0, t.jsxs)(t.Fragment, {
														children: [
															(0, t.jsx)(S.LoaderCircle, {
																className: "h-4 w-4 mr-2 animate-spin",
															}),
															"Deleting...",
														],
													})
												: (0, t.jsxs)(t.Fragment, {
														children: ["Delete ", P, " run", 1 !== P ? "s" : ""],
													}),
										}),
									],
								}),
							],
						}),
					}),
				],
			})
		}
		e.s(["Runs", () => eO], 63158)
	},
])
