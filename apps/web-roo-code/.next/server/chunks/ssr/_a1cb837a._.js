module.exports = [
	83355,
	(a) => {
		"use strict"
		let b = (0, a.i(1152).default)("arrow-right", [
			["path", { d: "M5 12h14", key: "1ays0h" }],
			["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
		])
		a.s(["ArrowRight", () => b], 83355)
	},
	6517,
	(a) => {
		"use strict"
		let b = (0, a.i(1152).default)("bot", [
			["path", { d: "M12 8V4H8", key: "hb8ula" }],
			["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
			["path", { d: "M2 14h2", key: "vft8re" }],
			["path", { d: "M20 14h2", key: "4cs60a" }],
			["path", { d: "M15 13v2", key: "1xurst" }],
			["path", { d: "M9 13v2", key: "rq6x2g" }],
		])
		a.s(["Bot", () => b], 6517)
	},
	26712,
	(a) => {
		"use strict"
		let b = (0, a.i(1152).default)("brain", [
			["path", { d: "M12 18V5", key: "adv99a" }],
			["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
			["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
			["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
			["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
			["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
			["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
			["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }],
		])
		a.s(["Brain", () => b], 26712)
	},
	81628,
	(a) => {
		"use strict"
		let b = (0, a.i(1152).default)("users-round", [
			["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
			["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
			["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }],
		])
		a.s(["Users2", () => b], 81628)
	},
	63671,
	(a, b, c) => {
		"use strict"
		Object.defineProperty(c, "__esModule", { value: !0 }),
			Object.defineProperty(c, "warnOnce", {
				enumerable: !0,
				get: function () {
					return d
				},
			})
		let d = (a) => {}
	},
	55030,
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
	20726,
	(a, b, c) => {
		"use strict"
		function d({ widthInt: a, heightInt: b, blurWidth: c, blurHeight: d, blurDataURL: e, objectFit: f }) {
			let g = c ? 40 * c : a,
				h = d ? 40 * d : b,
				i = g && h ? `viewBox='0 0 ${g} ${h}'` : ""
			return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${i}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${i ? "none" : "contain" === f ? "xMidYMid" : "cover" === f ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${e}'/%3E%3C/svg%3E`
		}
		Object.defineProperty(c, "__esModule", { value: !0 }),
			Object.defineProperty(c, "getImageBlurSvg", {
				enumerable: !0,
				get: function () {
					return d
				},
			})
	},
	74996,
	(a, b, c) => {
		"use strict"
		Object.defineProperty(c, "__esModule", { value: !0 })
		var d = {
			VALID_LOADERS: function () {
				return f
			},
			imageConfigDefault: function () {
				return g
			},
		}
		for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] })
		let f = ["default", "imgix", "cloudinary", "akamai", "custom"],
			g = {
				deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
				imageSizes: [32, 48, 64, 96, 128, 256, 384],
				path: "/_next/image",
				loader: "default",
				loaderFile: "",
				domains: [],
				disableStaticImages: !1,
				minimumCacheTTL: 14400,
				formats: ["image/webp"],
				maximumRedirects: 3,
				maximumResponseBody: 5e7,
				dangerouslyAllowLocalIP: !1,
				dangerouslyAllowSVG: !1,
				contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
				contentDispositionType: "attachment",
				localPatterns: void 0,
				remotePatterns: [],
				qualities: [75],
				unoptimized: !1,
			}
	},
	38840,
	(a, b, c) => {
		"use strict"
		Object.defineProperty(c, "__esModule", { value: !0 }),
			Object.defineProperty(c, "getImgProps", {
				enumerable: !0,
				get: function () {
					return j
				},
			}),
			a.r(63671)
		let d = a.r(55030),
			e = a.r(20726),
			f = a.r(74996),
			g = ["-moz-initial", "fill", "none", "scale-down", void 0]
		function h(a) {
			return void 0 !== a.default
		}
		function i(a) {
			return void 0 === a
				? a
				: "number" == typeof a
					? Number.isFinite(a)
						? a
						: NaN
					: "string" == typeof a && /^[0-9]+$/.test(a)
						? parseInt(a, 10)
						: NaN
		}
		function j(
			{
				src: a,
				sizes: b,
				unoptimized: c = !1,
				priority: j = !1,
				preload: k = !1,
				loading: l,
				className: m,
				quality: n,
				width: o,
				height: p,
				fill: q = !1,
				style: r,
				overrideSrc: s,
				onLoad: t,
				onLoadingComplete: u,
				placeholder: v = "empty",
				blurDataURL: w,
				fetchPriority: x,
				decoding: y = "async",
				layout: z,
				objectFit: A,
				objectPosition: B,
				lazyBoundary: C,
				lazyRoot: D,
				...E
			},
			F,
		) {
			var G
			let H,
				I,
				J,
				{ imgConf: K, showAltText: L, blurComplete: M, defaultLoader: N } = F,
				O = K || f.imageConfigDefault
			if ("allSizes" in O) H = O
			else {
				let a = [...O.deviceSizes, ...O.imageSizes].sort((a, b) => a - b),
					b = O.deviceSizes.sort((a, b) => a - b),
					c = O.qualities?.sort((a, b) => a - b)
				H = { ...O, allSizes: a, deviceSizes: b, qualities: c }
			}
			if (void 0 === N)
				throw Object.defineProperty(
					Error(
						"images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
					),
					"__NEXT_ERROR_CODE",
					{ value: "E163", enumerable: !1, configurable: !0 },
				)
			let P = E.loader || N
			delete E.loader, delete E.srcSet
			let Q = "__next_img_default" in P
			if (Q) {
				if ("custom" === H.loader)
					throw Object.defineProperty(
						Error(`Image with src "${a}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
						"__NEXT_ERROR_CODE",
						{ value: "E252", enumerable: !1, configurable: !0 },
					)
			} else {
				let a = P
				P = (b) => {
					let { config: c, ...d } = b
					return a(d)
				}
			}
			if (z) {
				"fill" === z && (q = !0)
				let a = {
					intrinsic: { maxWidth: "100%", height: "auto" },
					responsive: { width: "100%", height: "auto" },
				}[z]
				a && (r = { ...r, ...a })
				let c = { responsive: "100vw", fill: "100vw" }[z]
				c && !b && (b = c)
			}
			let R = "",
				S = i(o),
				T = i(p)
			if ((G = a) && "object" == typeof G && (h(G) || void 0 !== G.src)) {
				let b = h(a) ? a.default : a
				if (!b.src)
					throw Object.defineProperty(
						Error(
							`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(b)}`,
						),
						"__NEXT_ERROR_CODE",
						{ value: "E460", enumerable: !1, configurable: !0 },
					)
				if (!b.height || !b.width)
					throw Object.defineProperty(
						Error(
							`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(b)}`,
						),
						"__NEXT_ERROR_CODE",
						{ value: "E48", enumerable: !1, configurable: !0 },
					)
				if (((I = b.blurWidth), (J = b.blurHeight), (w = w || b.blurDataURL), (R = b.src), !q))
					if (S || T) {
						if (S && !T) {
							let a = S / b.width
							T = Math.round(b.height * a)
						} else if (!S && T) {
							let a = T / b.height
							S = Math.round(b.width * a)
						}
					} else (S = b.width), (T = b.height)
			}
			let U = !j && !k && ("lazy" === l || void 0 === l)
			;(!(a = "string" == typeof a ? a : R) || a.startsWith("data:") || a.startsWith("blob:")) &&
				((c = !0), (U = !1)),
				H.unoptimized && (c = !0),
				Q && !H.dangerouslyAllowSVG && a.split("?", 1)[0].endsWith(".svg") && (c = !0)
			let V = i(n),
				W = Object.assign(
					q
						? {
								position: "absolute",
								height: "100%",
								width: "100%",
								left: 0,
								top: 0,
								right: 0,
								bottom: 0,
								objectFit: A,
								objectPosition: B,
							}
						: {},
					L ? {} : { color: "transparent" },
					r,
				),
				X =
					M || "empty" === v
						? null
						: "blur" === v
							? `url("data:image/svg+xml;charset=utf-8,${(0, e.getImageBlurSvg)({ widthInt: S, heightInt: T, blurWidth: I, blurHeight: J, blurDataURL: w || "", objectFit: W.objectFit })}")`
							: `url("${v}")`,
				Y = g.includes(W.objectFit) ? ("fill" === W.objectFit ? "100% 100%" : "cover") : W.objectFit,
				Z = X
					? {
							backgroundSize: Y,
							backgroundPosition: W.objectPosition || "50% 50%",
							backgroundRepeat: "no-repeat",
							backgroundImage: X,
						}
					: {},
				$ = (function ({ config: a, src: b, unoptimized: c, width: e, quality: f, sizes: g, loader: h }) {
					if (c) {
						let a = (0, d.getDeploymentId)()
						if (b.startsWith("/") && !b.startsWith("//") && a) {
							let c = b.includes("?") ? "&" : "?"
							b = `${b}${c}dpl=${a}`
						}
						return { src: b, srcSet: void 0, sizes: void 0 }
					}
					let { widths: i, kind: j } = (function ({ deviceSizes: a, allSizes: b }, c, d) {
							if (d) {
								let c = /(^|\s)(1?\d?\d)vw/g,
									e = []
								for (let a; (a = c.exec(d)); ) e.push(parseInt(a[2]))
								if (e.length) {
									let c = 0.01 * Math.min(...e)
									return { widths: b.filter((b) => b >= a[0] * c), kind: "w" }
								}
								return { widths: b, kind: "w" }
							}
							return "number" != typeof c
								? { widths: a, kind: "w" }
								: {
										widths: [
											...new Set([c, 2 * c].map((a) => b.find((b) => b >= a) || b[b.length - 1])),
										],
										kind: "x",
									}
						})(a, e, g),
						k = i.length - 1
					return {
						sizes: g || "w" !== j ? g : "100vw",
						srcSet: i
							.map(
								(c, d) =>
									`${h({ config: a, src: b, quality: f, width: c })} ${"w" === j ? c : d + 1}${j}`,
							)
							.join(", "),
						src: h({ config: a, src: b, quality: f, width: i[k] }),
					}
				})({ config: H, src: a, unoptimized: c, width: S, quality: V, sizes: b, loader: P }),
				_ = U ? "lazy" : l
			return {
				props: {
					...E,
					loading: _,
					fetchPriority: x,
					width: S,
					height: T,
					decoding: y,
					className: m,
					style: { ...W, ...Z },
					sizes: $.sizes,
					srcSet: $.srcSet,
					src: s || $.src,
				},
				meta: { unoptimized: c, preload: k || j, placeholder: v, fill: q },
			}
		}
	},
	11182,
	(a, b, c) => {
		let { createClientModuleProxy: d } = a.r(57689)
		a.n(
			d(
				"[project]/node_modules/.pnpm/next@16.1.6_@opentelemetry+_b8a29fd3e98ec061646680b2e510dc03/node_modules/next/dist/client/image-component.js <module evaluation>",
			),
		)
	},
	14475,
	(a, b, c) => {
		let { createClientModuleProxy: d } = a.r(57689)
		a.n(
			d(
				"[project]/node_modules/.pnpm/next@16.1.6_@opentelemetry+_b8a29fd3e98ec061646680b2e510dc03/node_modules/next/dist/client/image-component.js",
			),
		)
	},
	97758,
	(a) => {
		"use strict"
		a.i(11182)
		var b = a.i(14475)
		a.n(b)
	},
	15608,
	(a, b, c) => {
		"use strict"
		function d(a, b) {
			let c = a || 75
			return b?.qualities?.length
				? b.qualities.reduce((a, b) => (Math.abs(b - c) < Math.abs(a - c) ? b : a), 0)
				: c
		}
		Object.defineProperty(c, "__esModule", { value: !0 }),
			Object.defineProperty(c, "findClosestQuality", {
				enumerable: !0,
				get: function () {
					return d
				},
			})
	},
	3864,
	(a, b, c) => {
		"use strict"
		Object.defineProperty(c, "__esModule", { value: !0 }),
			Object.defineProperty(c, "default", {
				enumerable: !0,
				get: function () {
					return g
				},
			})
		let d = a.r(15608),
			e = a.r(55030)
		function f({ config: a, src: b, width: c, quality: f }) {
			if (
				b.startsWith("/") &&
				b.includes("?") &&
				a.localPatterns?.length === 1 &&
				"**" === a.localPatterns[0].pathname &&
				"" === a.localPatterns[0].search
			)
				throw Object.defineProperty(
					Error(`Image with src "${b}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
					"__NEXT_ERROR_CODE",
					{ value: "E871", enumerable: !1, configurable: !0 },
				)
			let g = (0, d.findClosestQuality)(f, a),
				h = (0, e.getDeploymentId)()
			return `${a.path}?url=${encodeURIComponent(b)}&w=${c}&q=${g}${b.startsWith("/") && h ? `&dpl=${h}` : ""}`
		}
		f.__next_img_default = !0
		let g = f
	},
	80411,
	(a, b, c) => {
		"use strict"
		Object.defineProperty(c, "__esModule", { value: !0 })
		var d = {
			default: function () {
				return k
			},
			getImageProps: function () {
				return j
			},
		}
		for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] })
		let f = a.r(55289),
			g = a.r(38840),
			h = a.r(97758),
			i = f._(a.r(3864))
		function j(a) {
			let { props: b } = (0, g.getImgProps)(a, {
				defaultLoader: i.default,
				imgConf: {
					deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
					imageSizes: [32, 48, 64, 96, 128, 256, 384],
					qualities: [75],
					path: "/_next/image",
					loader: "default",
					dangerouslyAllowSVG: !1,
					unoptimized: !1,
				},
			})
			for (let [a, c] of Object.entries(b)) void 0 === c && delete b[a]
			return { props: b }
		}
		let k = h.Image
	},
	27802,
	(a, b, c) => {
		b.exports = a.r(80411)
	},
	65433,
	(a) => {
		"use strict"
		a.s([
			"ChartContainer",
			() => c,
			"ChartLegend",
			() => d,
			"ChartLegendContent",
			() => e,
			"ChartStyle",
			() => f,
			"ChartTooltip",
			() => g,
			"ChartTooltipContent",
			() => h,
		])
		var b = a.i(57689)
		let c = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call ChartContainer() from the server but ChartContainer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/chart.tsx <module evaluation>",
				"ChartContainer",
			),
			d = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call ChartLegend() from the server but ChartLegend is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/chart.tsx <module evaluation>",
				"ChartLegend",
			),
			e = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call ChartLegendContent() from the server but ChartLegendContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/chart.tsx <module evaluation>",
				"ChartLegendContent",
			),
			f = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call ChartStyle() from the server but ChartStyle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/chart.tsx <module evaluation>",
				"ChartStyle",
			),
			g = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call ChartTooltip() from the server but ChartTooltip is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/chart.tsx <module evaluation>",
				"ChartTooltip",
			),
			h = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call ChartTooltipContent() from the server but ChartTooltipContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/chart.tsx <module evaluation>",
				"ChartTooltipContent",
			)
	},
	92494,
	(a) => {
		"use strict"
		a.s([
			"ChartContainer",
			() => c,
			"ChartLegend",
			() => d,
			"ChartLegendContent",
			() => e,
			"ChartStyle",
			() => f,
			"ChartTooltip",
			() => g,
			"ChartTooltipContent",
			() => h,
		])
		var b = a.i(57689)
		let c = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call ChartContainer() from the server but ChartContainer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/chart.tsx",
				"ChartContainer",
			),
			d = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call ChartLegend() from the server but ChartLegend is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/chart.tsx",
				"ChartLegend",
			),
			e = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call ChartLegendContent() from the server but ChartLegendContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/chart.tsx",
				"ChartLegendContent",
			),
			f = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call ChartStyle() from the server but ChartStyle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/chart.tsx",
				"ChartStyle",
			),
			g = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call ChartTooltip() from the server but ChartTooltip is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/chart.tsx",
				"ChartTooltip",
			),
			h = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call ChartTooltipContent() from the server but ChartTooltipContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/chart.tsx",
				"ChartTooltipContent",
			)
	},
	85142,
	(a) => {
		"use strict"
		a.i(65433)
		var b = a.i(92494)
		a.n(b)
	},
	35721,
	(a) => {
		"use strict"
		a.s([
			"Dialog",
			() => c,
			"DialogClose",
			() => d,
			"DialogContent",
			() => e,
			"DialogDescription",
			() => f,
			"DialogFooter",
			() => g,
			"DialogHeader",
			() => h,
			"DialogOverlay",
			() => i,
			"DialogPortal",
			() => j,
			"DialogTitle",
			() => k,
			"DialogTrigger",
			() => l,
		])
		var b = a.i(57689)
		let c = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call Dialog() from the server but Dialog is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx <module evaluation>",
				"Dialog",
			),
			d = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call DialogClose() from the server but DialogClose is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx <module evaluation>",
				"DialogClose",
			),
			e = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call DialogContent() from the server but DialogContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx <module evaluation>",
				"DialogContent",
			),
			f = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call DialogDescription() from the server but DialogDescription is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx <module evaluation>",
				"DialogDescription",
			),
			g = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call DialogFooter() from the server but DialogFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx <module evaluation>",
				"DialogFooter",
			),
			h = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call DialogHeader() from the server but DialogHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx <module evaluation>",
				"DialogHeader",
			),
			i = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call DialogOverlay() from the server but DialogOverlay is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx <module evaluation>",
				"DialogOverlay",
			),
			j = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call DialogPortal() from the server but DialogPortal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx <module evaluation>",
				"DialogPortal",
			),
			k = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call DialogTitle() from the server but DialogTitle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx <module evaluation>",
				"DialogTitle",
			),
			l = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call DialogTrigger() from the server but DialogTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx <module evaluation>",
				"DialogTrigger",
			)
	},
	44575,
	(a) => {
		"use strict"
		a.s([
			"Dialog",
			() => c,
			"DialogClose",
			() => d,
			"DialogContent",
			() => e,
			"DialogDescription",
			() => f,
			"DialogFooter",
			() => g,
			"DialogHeader",
			() => h,
			"DialogOverlay",
			() => i,
			"DialogPortal",
			() => j,
			"DialogTitle",
			() => k,
			"DialogTrigger",
			() => l,
		])
		var b = a.i(57689)
		let c = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call Dialog() from the server but Dialog is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx",
				"Dialog",
			),
			d = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call DialogClose() from the server but DialogClose is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx",
				"DialogClose",
			),
			e = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call DialogContent() from the server but DialogContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx",
				"DialogContent",
			),
			f = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call DialogDescription() from the server but DialogDescription is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx",
				"DialogDescription",
			),
			g = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call DialogFooter() from the server but DialogFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx",
				"DialogFooter",
			),
			h = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call DialogHeader() from the server but DialogHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx",
				"DialogHeader",
			),
			i = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call DialogOverlay() from the server but DialogOverlay is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx",
				"DialogOverlay",
			),
			j = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call DialogPortal() from the server but DialogPortal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx",
				"DialogPortal",
			),
			k = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call DialogTitle() from the server but DialogTitle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx",
				"DialogTitle",
			),
			l = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call DialogTrigger() from the server but DialogTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/ui/modal.tsx",
				"DialogTrigger",
			)
	},
	30270,
	(a) => {
		"use strict"
		a.i(35721)
		var b = a.i(44575)
		a.n(b)
	},
	62806,
	(a) => {
		"use strict"
		a.s(["ScrollButton", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call ScrollButton() from the server but ScrollButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/ui/scroll-button.tsx <module evaluation>",
			"ScrollButton",
		)
	},
	33160,
	(a) => {
		"use strict"
		a.s(["ScrollButton", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call ScrollButton() from the server but ScrollButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/ui/scroll-button.tsx",
			"ScrollButton",
		)
	},
	30609,
	(a) => {
		"use strict"
		a.i(62806)
		var b = a.i(33160)
		a.n(b)
	},
	76692,
	72036,
	45626,
	(a) => {
		"use strict"
		let b, c, d, e, f
		var g = a.i(1020),
			h = a.i(32291)
		function i(a, b) {
			if ("function" == typeof a) return a(b)
			null != a && (a.current = b)
		}
		var j = Symbol.for("react.lazy"),
			k = h[" use ".trim().toString()]
		function l(a) {
			var b
			return (
				null != a &&
				"object" == typeof a &&
				"$$typeof" in a &&
				a.$$typeof === j &&
				"_payload" in a &&
				"object" == typeof (b = a._payload) &&
				null !== b &&
				"then" in b
			)
		}
		var m =
				(((f = h.forwardRef((a, b) => {
					let { children: c, ...d } = a
					if ((l(c) && "function" == typeof k && (c = k(c._payload)), h.isValidElement(c))) {
						var e
						let a,
							f,
							g =
								((e = c),
								(f =
									(a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get) &&
									"isReactWarning" in a &&
									a.isReactWarning)
									? e.ref
									: (f =
												(a = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
												"isReactWarning" in a &&
												a.isReactWarning)
										? e.props.ref
										: e.props.ref || e.ref),
							j = (function (a, b) {
								let c = { ...b }
								for (let d in b) {
									let e = a[d],
										f = b[d]
									;/^on[A-Z]/.test(d)
										? e && f
											? (c[d] = (...a) => {
													let b = f(...a)
													return e(...a), b
												})
											: e && (c[d] = e)
										: "style" === d
											? (c[d] = { ...e, ...f })
											: "className" === d && (c[d] = [e, f].filter(Boolean).join(" "))
								}
								return { ...a, ...c }
							})(d, c.props)
						return (
							c.type !== h.Fragment &&
								(j.ref = b
									? (function (...a) {
											return (b) => {
												let c = !1,
													d = a.map((a) => {
														let d = i(a, b)
														return c || "function" != typeof d || (c = !0), d
													})
												if (c)
													return () => {
														for (let b = 0; b < d.length; b++) {
															let c = d[b]
															"function" == typeof c ? c() : i(a[b], null)
														}
													}
											}
										})(b, g)
									: g),
							h.cloneElement(c, j)
						)
					}
					return h.Children.count(c) > 1 ? h.Children.only(null) : null
				})).displayName = "Slot.SlotClone"),
				(b = f),
				((c = h.forwardRef((a, c) => {
					let { children: d, ...e } = a
					l(d) && "function" == typeof k && (d = k(d._payload))
					let f = h.Children.toArray(d),
						i = f.find(o)
					if (i) {
						let a = i.props.children,
							d = f.map((b) =>
								b !== i
									? b
									: h.Children.count(a) > 1
										? h.Children.only(null)
										: h.isValidElement(a)
											? a.props.children
											: null,
							)
						return (0, g.jsx)(b, {
							...e,
							ref: c,
							children: h.isValidElement(a) ? h.cloneElement(a, void 0, d) : null,
						})
					}
					return (0, g.jsx)(b, { ...e, ref: c, children: d })
				})).displayName = "Slot.Slot"),
				c),
			n = Symbol("radix.slottable")
		function o(a) {
			return h.isValidElement(a) && "function" == typeof a.type && "__radixId" in a.type && a.type.__radixId === n
		}
		var p = a.i(68962)
		let q = (a) => ("boolean" == typeof a ? `${a}` : 0 === a ? "0" : a),
			r = p.clsx
		var s = a.i(20921)
		let t =
				((d =
					"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"),
				(e = {
					variants: {
						variant: {
							default: "bg-primary text-primary-foreground shadow hover:bg-primary/80",
							destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/80",
							outline:
								"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
							secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
							ghost: "hover:bg-accent hover:text-accent-foreground",
							link: "text-primary underline-offset-4 hover:underline",
						},
						size: {
							default: "h-9 px-4 py-2",
							sm: "h-8 px-3 text-xs",
							lg: "h-10 px-8",
							xl: "h-14 px-8 text-lg",
							icon: "h-9 w-9",
						},
					},
					defaultVariants: { variant: "default", size: "default" },
				}),
				(a) => {
					var b
					if ((null == e ? void 0 : e.variants) == null)
						return r(d, null == a ? void 0 : a.class, null == a ? void 0 : a.className)
					let { variants: c, defaultVariants: f } = e,
						g = Object.keys(c).map((b) => {
							let d = null == a ? void 0 : a[b],
								e = null == f ? void 0 : f[b]
							if (null === d) return null
							let g = q(d) || q(e)
							return c[b][g]
						}),
						h =
							a &&
							Object.entries(a).reduce((a, b) => {
								let [c, d] = b
								return void 0 === d || (a[c] = d), a
							}, {})
					return r(
						d,
						g,
						null == e || null == (b = e.compoundVariants)
							? void 0
							: b.reduce((a, b) => {
									let { class: c, className: d, ...e } = b
									return Object.entries(e).every((a) => {
										let [b, c] = a
										return Array.isArray(c)
											? c.includes({ ...f, ...h }[b])
											: { ...f, ...h }[b] === c
									})
										? [...a, c, d]
										: a
								}, []),
						null == a ? void 0 : a.class,
						null == a ? void 0 : a.className,
					)
				}),
			u = h.forwardRef(({ className: a, variant: b, size: c, asChild: d = !1, ...e }, f) =>
				(0, g.jsx)(d ? m : "button", {
					className: (0, s.cn)(t({ variant: b, size: c, className: a })),
					ref: f,
					...e,
				}),
			)
		;(u.displayName = "Button"),
			a.s(["Button", () => u], 72036),
			a.i(85142),
			a.i(30270),
			a.i(30609),
			(h.forwardRef(({ className: a, ...b }, c) =>
				(0, g.jsx)("div", {
					className: "relative w-full overflow-auto",
					children: (0, g.jsx)("table", {
						ref: c,
						className: (0, s.cn)("w-full caption-bottom text-sm", a),
						...b,
					}),
				}),
			).displayName = "Table"),
			(h.forwardRef(({ className: a, ...b }, c) =>
				(0, g.jsx)("thead", { ref: c, className: (0, s.cn)("[&_tr]:border-b", a), ...b }),
			).displayName = "TableHeader"),
			(h.forwardRef(({ className: a, ...b }, c) =>
				(0, g.jsx)("tbody", { ref: c, className: (0, s.cn)("[&_tr:last-child]:border-0", a), ...b }),
			).displayName = "TableBody"),
			(h.forwardRef(({ className: a, ...b }, c) =>
				(0, g.jsx)("tfoot", {
					ref: c,
					className: (0, s.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", a),
					...b,
				}),
			).displayName = "TableFooter"),
			(h.forwardRef(({ className: a, ...b }, c) =>
				(0, g.jsx)("tr", {
					ref: c,
					className: (0, s.cn)(
						"border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
						a,
					),
					...b,
				}),
			).displayName = "TableRow"),
			(h.forwardRef(({ className: a, ...b }, c) =>
				(0, g.jsx)("th", {
					ref: c,
					className: (0, s.cn)(
						"h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
						a,
					),
					...b,
				}),
			).displayName = "TableHead"),
			(h.forwardRef(({ className: a, ...b }, c) =>
				(0, g.jsx)("td", {
					ref: c,
					className: (0, s.cn)(
						"p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
						a,
					),
					...b,
				}),
			).displayName = "TableCell"),
			(h.forwardRef(({ className: a, ...b }, c) =>
				(0, g.jsx)("caption", { ref: c, className: (0, s.cn)("mt-4 text-sm text-muted-foreground", a), ...b }),
			).displayName = "TableCaption")
		var v = a.i(83733)
		let w = h.forwardRef(({ className: a, newWindow: b = !1, target: c, rel: d, ...e }, f) => {
			let h = b ? (d ? (d.includes("noreferrer") ? d : `${d} noreferrer`) : "noreferrer") : d
			return (0, g.jsx)(v.default, {
				ref: f,
				className: (0, s.cn)("underline hover:no-underline", a),
				target: b ? "_blank" : c,
				rel: h,
				...e,
			})
		})
		;(w.displayName = "Link"), a.s(["Link", () => w], 45626), a.s([], 76692)
	},
	71903,
	(a) => {
		"use strict"
		a.s(["AnimatedBackground", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call AnimatedBackground() from the server but AnimatedBackground is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/homepage/animated-background.tsx <module evaluation>",
			"AnimatedBackground",
		)
	},
	16481,
	(a) => {
		"use strict"
		a.s(["AnimatedBackground", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call AnimatedBackground() from the server but AnimatedBackground is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/homepage/animated-background.tsx",
			"AnimatedBackground",
		)
	},
	68703,
	(a) => {
		"use strict"
		a.i(71903)
		var b = a.i(16481)
		a.n(b)
	},
	85937,
	(a) => {
		"use strict"
		a.s(["CodeExample", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call CodeExample() from the server but CodeExample is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/homepage/code-example.tsx <module evaluation>",
			"CodeExample",
		)
	},
	97634,
	(a) => {
		"use strict"
		a.s(["CodeExample", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call CodeExample() from the server but CodeExample is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/homepage/code-example.tsx",
			"CodeExample",
		)
	},
	72327,
	(a) => {
		"use strict"
		a.i(85937)
		var b = a.i(97634)
		a.n(b)
	},
	76388,
	(a) => {
		"use strict"
		a.s(["CompanyLogos", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call CompanyLogos() from the server but CompanyLogos is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/homepage/company-logos.tsx <module evaluation>",
			"CompanyLogos",
		)
	},
	37820,
	(a) => {
		"use strict"
		a.s(["CompanyLogos", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call CompanyLogos() from the server but CompanyLogos is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/homepage/company-logos.tsx",
			"CompanyLogos",
		)
	},
	91275,
	(a) => {
		"use strict"
		a.i(76388)
		var b = a.i(37820)
		a.n(b)
	},
	81514,
	(a) => {
		"use strict"
		a.s(["FAQSection", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call FAQSection() from the server but FAQSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/homepage/faq-section.tsx <module evaluation>",
			"FAQSection",
		)
	},
	67907,
	(a) => {
		"use strict"
		a.s(["FAQSection", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call FAQSection() from the server but FAQSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/homepage/faq-section.tsx",
			"FAQSection",
		)
	},
	75568,
	(a) => {
		"use strict"
		a.i(81514)
		var b = a.i(67907)
		a.n(b)
	},
	59080,
	(a) => {
		"use strict"
		a.s(["Features", () => c, "features", () => d])
		var b = a.i(57689)
		let c = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call Features() from the server but Features is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/homepage/features.tsx <module evaluation>",
				"Features",
			),
			d = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call features() from the server but features is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/homepage/features.tsx <module evaluation>",
				"features",
			)
	},
	71630,
	(a) => {
		"use strict"
		a.s(["Features", () => c, "features", () => d])
		var b = a.i(57689)
		let c = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call Features() from the server but Features is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/homepage/features.tsx",
				"Features",
			),
			d = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call features() from the server but features is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/homepage/features.tsx",
				"features",
			)
	},
	16249,
	(a) => {
		"use strict"
		a.i(59080)
		var b = a.i(71630)
		a.n(b)
	},
	13483,
	(a) => {
		"use strict"
		a.s(["InstallSection", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call InstallSection() from the server but InstallSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/homepage/install-section.tsx <module evaluation>",
			"InstallSection",
		)
	},
	35226,
	(a) => {
		"use strict"
		a.s(["InstallSection", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call InstallSection() from the server but InstallSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/homepage/install-section.tsx",
			"InstallSection",
		)
	},
	28771,
	(a) => {
		"use strict"
		a.i(13483)
		var b = a.i(35226)
		a.n(b)
	},
	98808,
	(a) => {
		"use strict"
		a.s(["Testimonials", () => c, "testimonials", () => d])
		var b = a.i(57689)
		let c = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call Testimonials() from the server but Testimonials is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/homepage/testimonials.tsx <module evaluation>",
				"Testimonials",
			),
			d = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call testimonials() from the server but testimonials is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/homepage/testimonials.tsx <module evaluation>",
				"testimonials",
			)
	},
	10595,
	(a) => {
		"use strict"
		a.s(["Testimonials", () => c, "testimonials", () => d])
		var b = a.i(57689)
		let c = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call Testimonials() from the server but Testimonials is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/homepage/testimonials.tsx",
				"Testimonials",
			),
			d = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call testimonials() from the server but testimonials is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/homepage/testimonials.tsx",
				"testimonials",
			)
	},
	62558,
	(a) => {
		"use strict"
		a.i(98808)
		var b = a.i(10595)
		a.n(b)
	},
	67037,
	(a) => {
		"use strict"
		a.s(["WhatsNewButton", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call WhatsNewButton() from the server but WhatsNewButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/homepage/whats-new-button.tsx <module evaluation>",
			"WhatsNewButton",
		)
	},
	44664,
	(a) => {
		"use strict"
		a.s(["WhatsNewButton", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call WhatsNewButton() from the server but WhatsNewButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/homepage/whats-new-button.tsx",
			"WhatsNewButton",
		)
	},
	74327,
	(a) => {
		"use strict"
		a.i(67037)
		var b = a.i(44664)
		a.n(b)
	},
	21540,
	(a) => {
		"use strict"
		let b = (0, a.i(1152).default)("laptop", [
			[
				"path",
				{
					d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",
					key: "1pdavp",
				},
			],
			["path", { d: "M20.054 15.987H3.946", key: "14rxg9" }],
		])
		a.s(["Laptop", () => b], 21540)
	},
	62445,
	(a) => {
		"use strict"
		let b = (0, a.i(1152).default)("cloud", [
			["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }],
		])
		a.s(["Cloud", () => b], 62445)
	},
	71610,
	93125,
	(a) => {
		"use strict"
		var b = a.i(1020),
			c = a.i(21540),
			d = a.i(62445),
			e = a.i(83355)
		a.i(76692)
		var f = a.i(72036)
		let g = {
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
		}
		function h() {
			return (0, b.jsx)("section", {
				className: "py-24 bg-background",
				children: (0, b.jsxs)("div", {
					className: "container px-4 mx-auto sm:px-6 lg:px-8",
					children: [
						(0, b.jsxs)("div", {
							className: "text-center mb-16",
							children: [
								(0, b.jsx)("h2", {
									className: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
									children: "Different form factors for different ways of working.",
								}),
								(0, b.jsx)("p", {
									className: "text-xl text-muted-foreground max-w-2xl mx-auto",
									children: "Roo's always there to help you get stuff done.",
								}),
							],
						}),
						(0, b.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto relative z-1",
							children: [
								(0, b.jsx)("div", {
									className: "absolute left-1/2 top-[140px] -translate-x-1/2 z-1",
									children: (0, b.jsx)("div", {
										className:
											"rounded-full size-[300px] border-[10px] border-dashed animate-[spin_10s_linear_infinite] blur-[5px]",
									}),
								}),
								(0, b.jsxs)("div", {
									className:
										"rounded-3xl bg-card outline outline-border/50 hover:outline-8 shadow-xl p-8 h-full group transition-all hover:shadow-2xl hover:shadow-blue-800/30 relative",
									children: [
										(0, b.jsx)("div", {
											className:
												"size-15 p-3 rounded-full flex items-center justify-center shadow-lg absolute -top-4 -right-2 transition-all outline outline-foreground/5 bg-card group group-hover:outline-3 group-hover:scale-105",
											children: (0, b.jsx)(c.Laptop, {
												className: "size-8 text-blue-500",
												strokeWidth: 1.5,
											}),
										}),
										(0, b.jsx)("h3", {
											className: "text-2xl font-bold tracking-tight mb-2",
											children: "Roo Code VS Code Extension",
										}),
										(0, b.jsx)("p", {
											className: "font-semibold text-blue-500 mb-4",
											children: "For Individual Work",
										}),
										(0, b.jsxs)("div", {
											className: "text-muted-foreground mb-4",
											children: [
												(0, b.jsx)("p", {
													children:
														"Run Roo directly in VS Code (or any fork – even Cursor!), stay close to the code and control everything:",
												}),
												(0, b.jsxs)("ul", {
													className: "list-inside my-4 space-y-1",
													children: [
														(0, b.jsx)("li", {
															className: "list-disc",
															children:
																"Approve every action (or set it to auto-approve)",
														}),
														(0, b.jsx)("li", {
															className: "list-disc",
															children: "Manage the context window",
														}),
														(0, b.jsx)("li", {
															className: "list-disc",
															children: "Configure every detail",
														}),
														(0, b.jsx)("li", {
															className: "list-disc",
															children: "Preview changes live",
														}),
														(0, b.jsx)("li", {
															className: "list-disc",
															children: "Stick to your customized editor",
														}),
														(0, b.jsx)("li", {
															className: "list-disc",
															children: "Write code by hand (gasp!)",
														}),
													],
												}),
												(0, b.jsx)("p", {
													children:
														"Ideal for real-time debugging or quick iteration where you need full, immediate control.",
												}),
											],
										}),
										(0, b.jsx)(f.Button, {
											size: "lg",
											variant: "default",
											className: "bg-blue-600 hover:bg-blue-600/80",
											children: (0, b.jsxs)("a", {
												href: g.MARKETPLACE,
												target: "_blank",
												rel: "noreferrer",
												className: "flex items-center justify-center",
												children: [
													"Install now",
													(0, b.jsx)(e.ArrowRight, { className: "ml-2" }),
												],
											}),
										}),
									],
								}),
								(0, b.jsxs)("div", {
									className:
										"rounded-3xl bg-card outline outline-border/50 hover:outline-8 shadow-xl p-8 h-full group transition-all hover:shadow-2xl hover:shadow-blue-800/30 relative",
									children: [
										(0, b.jsx)("div", {
											className:
												"size-15 p-3 rounded-full flex items-center justify-center shadow-lg absolute -top-4 -right-2 transition-all outline outline-foreground/5 bg-card group group-hover:outline-3 group-hover:scale-105",
											children: (0, b.jsx)(d.Cloud, {
												className: "size-8 text-violet-500",
												strokeWidth: 1.5,
											}),
										}),
										(0, b.jsx)("h3", {
											className: "text-2xl font-bold tracking-tight mb-2",
											children: "Roo Code Cloud",
										}),
										(0, b.jsx)("div", {
											className: "font-semibold text-violet-500 mb-4",
											children: "For Team Work with Agents",
										}),
										(0, b.jsxs)("div", {
											className: "text-muted-foreground mb-4",
											children: [
												(0, b.jsx)("p", {
													children:
														"Create your agent team in the Cloud, give them access to GitHub and start giving them tasks:",
												}),
												(0, b.jsxs)("ul", {
													className: "list-inside my-4 space-y-1",
													children: [
														(0, b.jsx)("li", {
															className: "list-disc",
															children:
																"Use agents like the Planner, Coder, Explainer, Reviewer and Fixer",
														}),
														(0, b.jsx)("li", {
															className: "list-disc",
															children: "Choose your provider and model",
														}),
														(0, b.jsx)("li", {
															className: "list-disc",
															children:
																"Create tasks from the Web and Slack (more integrations soon)",
														}),
														(0, b.jsx)("li", {
															className: "list-disc",
															children: "Get PR Reviews (and fixes) directly on GitHub",
														}),
														(0, b.jsx)("li", {
															className: "list-disc",
															children: "Collaborate with co-workers",
														}),
													],
												}),
												(0, b.jsx)("p", {
													children:
														"Ideal for kicking projects off, parallelizing execution and looping in the rest of your team.",
												}),
											],
										}),
										(0, b.jsx)(f.Button, {
											size: "lg",
											variant: "default",
											className: "bg-violet-600 hover:bg-violet-600/80",
											children: (0, b.jsxs)("a", {
												href: g.CLOUD_APP_SIGNUP_HOME,
												className: "flex items-center justify-center",
												children: [
													"Try now for free",
													(0, b.jsx)(e.ArrowRight, { className: "ml-2" }),
												],
											}),
										}),
									],
								}),
							],
						}),
					],
				}),
			})
		}
		a.s(["EXTERNAL_LINKS", 0, g], 93125), a.s(["OptionOverviewSection", () => h], 71610)
	},
	78640,
	(a) => {
		"use strict"
		let b = (0, a.i(1152).default)("keyboard", [
			["path", { d: "M10 8h.01", key: "1r9ogq" }],
			["path", { d: "M12 12h.01", key: "1mp3jc" }],
			["path", { d: "M14 8h.01", key: "1primd" }],
			["path", { d: "M16 12h.01", key: "1l6xoz" }],
			["path", { d: "M18 8h.01", key: "emo2bl" }],
			["path", { d: "M6 8h.01", key: "x9i8wu" }],
			["path", { d: "M7 16h10", key: "wp8him" }],
			["path", { d: "M8 12h.01", key: "czm47f" }],
			["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
		])
		a.s(["Keyboard", () => b], 78640)
	},
	49105,
	(a) => {
		"use strict"
		let b = (0, a.i(1152).default)("shield", [
			[
				"path",
				{
					d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
					key: "oel41y",
				},
			],
		])
		a.s(["Shield", () => b], 49105)
	},
	97476,
	(a) => {
		"use strict"
		let b = (0, a.i(1152).default)("map", [
			[
				"path",
				{
					d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
					key: "169xi5",
				},
			],
			["path", { d: "M15 5.764v15", key: "1pn4in" }],
			["path", { d: "M9 3.236v15", key: "1uimfh" }],
		])
		a.s(["Map", () => b], 97476)
	},
	1995,
	(a) => {
		"use strict"
		let b = (0, a.i(1152).default)("code", [
			["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
			["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }],
		])
		a.s(["Code", () => b], 1995)
	},
	95020,
	(a) => {
		"use strict"
		var b = a.i(1020),
			c = a.i(26712),
			d = a.i(78640),
			e = a.i(49105),
			f = a.i(81628),
			g = a.i(97476),
			h = a.i(1995),
			i = a.i(1152)
		let j = (0, i.default)("message-circle-question-mark", [
				[
					"path",
					{
						d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
						key: "1sd12s",
					},
				],
				["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
				["path", { d: "M12 17h.01", key: "p32p05" }],
			]),
			k = (0, i.default)("bug", [
				["path", { d: "M12 20v-9", key: "1qisl0" }],
				["path", { d: "M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z", key: "uouzyp" }],
				["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
				["path", { d: "M21 21a4 4 0 0 0-3.81-4", key: "1b0z45" }],
				["path", { d: "M21 5a4 4 0 0 1-3.55 3.97", key: "5cxbf6" }],
				["path", { d: "M22 13h-4", key: "1jl80f" }],
				["path", { d: "M3 21a4 4 0 0 1 3.81-4", key: "1fjd4g" }],
				["path", { d: "M3 5a4 4 0 0 0 3.55 3.97", key: "1d7oge" }],
				["path", { d: "M6 13H2", key: "82j7cp" }],
				["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
				["path", { d: "M9 7.13V6a3 3 0 1 1 6 0v1.13", key: "1vgav8" }],
			]),
			l = (0, i.default)("test-tube", [
				["path", { d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2", key: "125lnx" }],
				["path", { d: "M8.5 2h7", key: "csnxdl" }],
				["path", { d: "M14.5 16h-5", key: "1ox875" }],
			])
		var m = a.i(27802)
		a.i(76692)
		var n = a.i(45626)
		let o = [
				"OpenRouter",
				"Anthropic",
				"OpenAI",
				"Gemini",
				"Grok",
				"Bedrock",
				"Moonshot",
				"Qwen",
				"Kimi",
				"Mistral",
				"Ollama",
			],
			p = [
				{ name: "Architect", description: "Plans complex changes without making changes.", icon: g.Map },
				{ name: "Code", description: "Implements, refactors and optimizes code.", icon: h.Code },
				{ name: "Ask", description: "Explains functionality and program behavior.", icon: j },
				{
					name: "Debug",
					description: "Diagnoses issues, traces failures, and proposes targeted, reliable fixes.",
					icon: k,
				},
				{
					name: "Test",
					description: "Creates and improves performant tests without changing the actual functionality.",
					icon: l,
				},
			]
		function q() {
			return (0, b.jsxs)("section", {
				className: "py-24 bg-muted/30 relative",
				children: [
					(0, b.jsx)("div", {
						className: "absolute inset-y-0 left-1/2 h-full w-full max-w-[1200px] -translate-x-1/2",
						children: (0, b.jsx)("div", {
							className:
								"absolute left-1/2 top-1/2 h-[800px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 dark:bg-blue-700/20 blur-[140px]",
						}),
					}),
					(0, b.jsxs)("div", {
						className: "container px-4 mx-auto sm:px-6 lg:px-8",
						children: [
							(0, b.jsxs)("div", {
								className: "text-center mb-16",
								children: [
									(0, b.jsx)("h2", {
										className: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
										children: "To trust an agent, you have to do it on your own terms.",
									}),
									(0, b.jsx)("p", {
										className: "text-xl text-muted-foreground max-w-xl mx-auto",
										children:
											"Roo is designed from the ground up to give you the confidence to do ever more with AI.",
									}),
								],
							}),
							(0, b.jsxs)("div", {
								className: "flex flex-col md:grid md:grid-cols-8 gap-8",
								children: [
									(0, b.jsx)("div", {
										className: "relative md:col-span-3 h-full",
										children: (0, b.jsxs)("div", {
											className:
												"rounded-2xl bg-card outline outline-border/50 hover:outline-8 shadow-lg p-8 h-full group transition-all hover:shadow-2xl",
											children: [
												(0, b.jsx)("div", {
													className:
														"absolute -right-3 -top-5 bg-card border shadow-md rounded-full p-3 transition-all  group-hover:-top-4  group-hover:-right-2 group-hover:scale-110 group-hover:shadow-xl",
													children: (0, b.jsx)(c.Brain, {
														className: "size-8 text-violet-600 shrink-0 mt-1",
														strokeWidth: 1.5,
													}),
												}),
												(0, b.jsxs)("div", {
													children: [
														(0, b.jsx)("h3", {
															className: "text-2xl font-bold mb-1",
															children: "Model-agnostic by design",
														}),
														(0, b.jsx)("h4", {
															className: "font-semibold text-lg",
															children: "Flexible and future-proof.",
														}),
														(0, b.jsxs)("div", {
															className: "text-muted-foreground my-4 space-y-1",
															children: [
																(0, b.jsx)("p", {
																	children:
																		'"The best model in the world" changes every other week. Providers throttle models with no warning. 1st-party coding agents only work with their own models.',
																}),
																(0, b.jsx)("p", { children: "Roo doesn't care." }),
																(0, b.jsxs)("p", {
																	children: [
																		"It works great with 10s of models, from frontier to open weight. Choose from",
																		" ",
																		(0, b.jsx)(n.Link, {
																			href: "/provider",
																			children:
																				"the curated selection we offer at-cost",
																		}),
																		" or bring your own key.",
																	],
																}),
															],
														}),
														(0, b.jsxs)("div", {
															className: "mt-6",
															children: [
																(0, b.jsx)("span", {
																	className: "text-muted-foreground text-sm",
																	children: "Compatible with dozens of providers",
																}),
																(0, b.jsx)("div", {
																	className: "mt-4 flex flex-wrap items-center gap-4",
																	children: o.map((a, c) =>
																		(0, b.jsx)(
																			m.default,
																			{
																				width: 20,
																				height: 20,
																				className:
																					"size-6 overflow-clip dark:invert",
																				style: { opacity: 1.1 - c / o.length },
																				src: `/logos/${a.toLowerCase()}.svg`,
																				alt: `${a} Logo`,
																			},
																			a,
																		),
																	),
																}),
															],
														}),
													],
												}),
											],
										}),
									}),
									(0, b.jsx)("div", {
										className: "relative col-span-5 h-full",
										children: (0, b.jsxs)("div", {
											className:
												"rounded-2xl bg-card outline outline-border/50 hover:outline-8 shadow-lg p-8 h-full group transition-all hover:shadow-2xl",
											children: [
												(0, b.jsx)("div", {
													className:
														"absolute -right-3 -top-5 bg-card border shadow-lg rounded-full p-3 transition-all  group-hover:-top-4  group-hover:-right-2 group-hover:scale-110 group-hover:shadow-xl",
													children: (0, b.jsx)(f.Users2, {
														className: "size-8 text-violet-600 shrink-0 mt-1",
														strokeWidth: 1.5,
													}),
												}),
												(0, b.jsxs)("div", {
													children: [
														(0, b.jsx)("h3", {
															className: "text-2xl font-bold mb-1",
															children: "Role-specific Modes",
														}),
														(0, b.jsx)("h4", {
															className: "font-semibold text-lg",
															children: "On-task and under control.",
														}),
														(0, b.jsxs)("div", {
															className: "text-muted-foreground my-4 space-y-1",
															children: [
																(0, b.jsx)("p", {
																	children:
																		"As capable as they are, when let loose, LLMs hallucinate, cheat and can cause real damage.",
																}),
																(0, b.jsx)("p", {
																	children:
																		"Roo's Modes keep models focused on a given task and limit their access to tools which are relevant to their role, keeping the context window clearer and avoiding surprises.",
																}),
																(0, b.jsx)("p", {
																	children:
																		"Modes are even smart enough to ask to switch to another when stepping outside their responsibilities.",
																}),
															],
														}),
														(0, b.jsxs)("div", {
															className: "mt-6",
															children: [
																(0, b.jsx)("span", {
																	className: "text-muted-foreground text-sm",
																	children: "Some examples",
																}),
																(0, b.jsx)("ul", {
																	className: "flex gap-2 flex-wrap mt-2",
																	children: p.map((a) => {
																		let c = a.icon
																		return (0, b.jsxs)(
																			"li",
																			{
																				className:
																					"rounded-lg border bg-border/40 w-full md:w-[30%] min-w-[200px] text-sm px-3 py-2 flex gap-1",
																				children: [
																					(0, b.jsx)(c, {
																						className:
																							"text-muted-foreground size-4 shrink-0 mt-0.5",
																					}),
																					(0, b.jsxs)("div", {
																						children: [
																							(0, b.jsx)("p", {
																								className:
																									"font-semibold",
																								children: a.name,
																							}),
																							(0, b.jsx)("p", {
																								className:
																									"text-muted-foreground text-xs",
																								children: a.description,
																							}),
																						],
																					}),
																				],
																			},
																			a.name,
																		)
																	}),
																}),
															],
														}),
													],
												}),
											],
										}),
									}),
									(0, b.jsx)("div", {
										className: "relative col-span-4 h-full",
										children: (0, b.jsxs)("div", {
											className:
												"rounded-2xl bg-card outline outline-border/50 hover:outline-8 shadow-lg p-8 h-full group transition-all hover:shadow-2xl",
											children: [
												(0, b.jsx)("div", {
													className:
														"absolute -right-3 -top-5 bg-card border shadow-lg rounded-full p-3 transition-all  group-hover:-top-4  group-hover:-right-2 group-hover:scale-110 group-hover:shadow-xl",
													children: (0, b.jsx)(d.Keyboard, {
														className: "size-8 text-violet-600 shrink-0 mt-1",
														strokeWidth: 1.5,
													}),
												}),
												(0, b.jsxs)("div", {
													children: [
														(0, b.jsx)("h3", {
															className: "text-2xl font-bold mb-1",
															children: "Highly configurable",
														}),
														(0, b.jsx)("h4", {
															className: "font-semibold text-lg",
															children: "Make it fit your workflow.",
														}),
														(0, b.jsxs)("div", {
															className: "text-muted-foreground my-4 space-y-1",
															children: [
																(0, b.jsx)("p", {
																	children:
																		"Developer tools need to fit like gloves. Highly tweakable, keyboard-shortcut-heavy gloves.",
																}),
																(0, b.jsx)("p", {
																	children:
																		"We made Roo thoughtfully configurable to fit your workflow as best it can.",
																}),
															],
														}),
													],
												}),
											],
										}),
									}),
									(0, b.jsx)("div", {
										className: "relative col-span-4 h-full",
										children: (0, b.jsxs)("div", {
											className:
												"rounded-2xl bg-card outline outline-border/50 hover:outline-8 shadow-lg p-8 h-full group transition-all hover:shadow-2xl",
											children: [
												(0, b.jsx)("div", {
													className:
														"absolute -right-3 -top-5 bg-card border shadow-lg rounded-full p-3 transition-all  group-hover:-top-4  group-hover:-right-2 group-hover:scale-110 group-hover:shadow-xl",
													children: (0, b.jsx)(e.Shield, {
														className: "size-8 text-violet-600 shrink-0 mt-1",
														strokeWidth: 1.5,
													}),
												}),
												(0, b.jsxs)("div", {
													children: [
														(0, b.jsx)("h3", {
															className: "text-2xl font-bold mb-1",
															children: "Secure and transparent",
														}),
														(0, b.jsx)("h4", {
															className: "font-semibold text-lg",
															children: "Open source from the get go.",
														}),
														(0, b.jsxs)("div", {
															className: "text-muted-foreground my-4 space-y-1",
															children: [
																(0, b.jsxs)("p", {
																	children: [
																		"The Roo Code Extension is",
																		" ",
																		(0, b.jsx)(n.Link, {
																			target: "_blank",
																			href: "https://github.com/RooCodeInc/Roo-Code",
																			children: "open source",
																		}),
																		" ",
																		"so you can see for yourself exactly what it's doing and we don't use your data for training.",
																	],
																}),
																(0, b.jsx)("p", {
																	children:
																		"Plus we're fully SOC2 Type 2 compliant and follow industry-standard security practices.",
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
						],
					}),
				],
			})
		}
		a.s(["PillarsSection", () => q], 95020)
	},
	74783,
	(a) => {
		"use strict"
		let b = (0, a.i(1152).default)("settings-2", [
			["path", { d: "M14 17H5", key: "gfn3mx" }],
			["path", { d: "M19 7h-9", key: "6i9tg" }],
			["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
			["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }],
		])
		a.s(["Settings2", () => b], 74783)
	},
	89796,
	(a) => {
		"use strict"
		let b = (0, a.i(1152).default)("shield-check", [
			[
				"path",
				{
					d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
					key: "oel41y",
				},
			],
			["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
		])
		a.s(["ShieldCheck", () => b], 89796)
	},
	87888,
	50024,
	51354,
	(a) => {
		"use strict"
		var b = a.i(1020),
			c = a.i(6517),
			d = a.i(74783),
			e = a.i(89796)
		function f() {
			return (0, b.jsx)("section", {
				className: "py-24 bg-muted/30",
				children: (0, b.jsxs)("div", {
					className: "container px-4 mx-auto sm:px-6 lg:px-8",
					children: [
						(0, b.jsxs)("div", {
							className: "text-center mb-16",
							children: [
								(0, b.jsx)("h2", {
									className: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
									children: "Asynchronous Engineering.",
								}),
								(0, b.jsx)("p", {
									className: "text-xl text-muted-foreground max-w-2xl mx-auto",
									children:
										"Stop watching the cursor. Deploy specialized agents to work while you sleep.",
								}),
							],
						}),
						(0, b.jsxs)("div", {
							className: "flex flex-wrap items-center justify-center gap-4 mb-20 text-sm font-medium",
							children: [
								(0, b.jsx)("div", {
									className: "px-4 py-2 bg-background border border-border rounded-lg",
									children: "Ticket",
								}),
								(0, b.jsx)("div", { className: "w-8 h-[1px] bg-border" }),
								(0, b.jsx)("div", {
									className:
										"px-4 py-2 bg-purple-500/10 border border-purple-500/20 text-purple-500 rounded-lg",
									children: "Planner Agent",
								}),
								(0, b.jsx)("div", { className: "w-8 h-[1px] bg-border" }),
								(0, b.jsx)("div", {
									className:
										"px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-500 rounded-lg",
									children: "Coder Agent",
								}),
								(0, b.jsx)("div", { className: "w-8 h-[1px] bg-border" }),
								(0, b.jsx)("div", {
									className:
										"px-4 py-2 bg-green-500/10 border border-green-500/20 text-green-500 rounded-lg",
									children: "GitHub PR",
								}),
							],
						}),
						(0, b.jsxs)("div", {
							className: "grid md:grid-cols-2 gap-12",
							children: [
								(0, b.jsxs)("div", {
									className: "bg-background p-8 rounded-2xl border border-border shadow-sm",
									children: [
										(0, b.jsxs)("div", {
											className: "flex items-center gap-3 mb-6",
											children: [
												(0, b.jsx)("div", {
													className: "p-2 bg-blue-500/10 rounded-lg",
													children: (0, b.jsx)(e.ShieldCheck, {
														className: "h-6 w-6 text-blue-500",
													}),
												}),
												(0, b.jsx)("h3", {
													className: "text-xl font-bold",
													children: "Purpose-Built Agents (Safety)",
												}),
											],
										}),
										(0, b.jsx)("h4", {
											className: "text-lg font-semibold mb-2",
											children: "Zero Drift via Role Constraints",
										}),
										(0, b.jsx)("p", {
											className: "text-muted-foreground mb-6",
											children:
												"Fear of agents going haywire is solved by architecture, not prompt engineering. Cloud Agents enforce the strict Modes you use locally.",
										}),
										(0, b.jsxs)("ul", {
											className: "space-y-4",
											children: [
												(0, b.jsxs)("li", {
													className: "flex gap-3 items-start",
													children: [
														(0, b.jsx)(c.Bot, {
															className: "h-5 w-5 text-purple-500 mt-0.5",
														}),
														(0, b.jsxs)("div", {
															children: [
																(0, b.jsx)("span", {
																	className: "font-bold",
																	children: "The Planner:",
																}),
																(0, b.jsx)("span", {
																	className: "text-muted-foreground ml-2",
																	children: "Maps dependencies. Read-Only access.",
																}),
															],
														}),
													],
												}),
												(0, b.jsxs)("li", {
													className: "flex gap-3 items-start",
													children: [
														(0, b.jsx)(c.Bot, {
															className: "h-5 w-5 text-blue-500 mt-0.5",
														}),
														(0, b.jsxs)("div", {
															children: [
																(0, b.jsx)("span", {
																	className: "font-bold",
																	children: "The Builder:",
																}),
																(0, b.jsx)("span", {
																	className: "text-muted-foreground ml-2",
																	children:
																		"Writes code based on the plan. Scoped file access.",
																}),
															],
														}),
													],
												}),
												(0, b.jsxs)("li", {
													className: "flex gap-3 items-start",
													children: [
														(0, b.jsx)(c.Bot, {
															className: "h-5 w-5 text-green-500 mt-0.5",
														}),
														(0, b.jsxs)("div", {
															children: [
																(0, b.jsx)("span", {
																	className: "font-bold",
																	children: "The Reviewer:",
																}),
																(0, b.jsx)("span", {
																	className: "text-muted-foreground ml-2",
																	children: "Analyzes diffs. Cannot push to main.",
																}),
															],
														}),
													],
												}),
											],
										}),
									],
								}),
								(0, b.jsxs)("div", {
									className: "bg-background p-8 rounded-2xl border border-border shadow-sm",
									children: [
										(0, b.jsxs)("div", {
											className: "flex items-center gap-3 mb-6",
											children: [
												(0, b.jsx)("div", {
													className: "p-2 bg-purple-500/10 rounded-lg",
													children: (0, b.jsx)(d.Settings2, {
														className: "h-6 w-6 text-purple-500",
													}),
												}),
												(0, b.jsx)("h3", {
													className: "text-xl font-bold",
													children: "Orchestrated Configuration",
												}),
											],
										}),
										(0, b.jsx)("h4", {
											className: "text-lg font-semibold mb-2",
											children: "Optimize Your AI Workforce",
										}),
										(0, b.jsx)("p", {
											className: "text-muted-foreground mb-6",
											children:
												"Just as you choose models locally, you configure them for the cloud to balance performance vs. cost.",
										}),
										(0, b.jsxs)("div", {
											className: "p-4 bg-muted/50 rounded-lg border border-border",
											children: [
												(0, b.jsx)("div", {
													className: "text-sm font-mono text-muted-foreground mb-2",
													children: "Config Example:",
												}),
												(0, b.jsxs)("div", {
													className: "space-y-2",
													children: [
														(0, b.jsxs)("div", {
															className:
																"flex justify-between items-center p-2 bg-background rounded border border-border",
															children: [
																(0, b.jsx)("span", {
																	className: "font-medium",
																	children: "Planner Agent",
																}),
																(0, b.jsx)("span", {
																	className:
																		"text-xs bg-purple-500/10 text-purple-500 px-2 py-1 rounded",
																	children: "o1-preview (Reasoning)",
																}),
															],
														}),
														(0, b.jsxs)("div", {
															className:
																"flex justify-between items-center p-2 bg-background rounded border border-border",
															children: [
																(0, b.jsx)("span", {
																	className: "font-medium",
																	children: "Unit Test Agent",
																}),
																(0, b.jsx)("span", {
																	className:
																		"text-xs bg-blue-500/10 text-blue-500 px-2 py-1 rounded",
																	children: "Haiku (Speed/Cost)",
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
					],
				}),
			})
		}
		a.s(["CloudSection", () => f], 87888)
		var g = a.i(1152)
		let h = (0, g.default)("git-merge", [
			["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
			["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
			["path", { d: "M6 21V9a9 9 0 0 0 9 9", key: "7kw0sc" }],
		])
		a.s(["GitMerge", () => h], 50024)
		let i = (0, g.default)("terminal", [
			["path", { d: "M12 19h8", key: "baeox8" }],
			["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }],
		])
		a.s(["Terminal", () => i], 51354)
	},
	7126,
	(a) => {
		"use strict"
		let b = (0, a.i(1152).default)("message-square", [
			[
				"path",
				{
					d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
					key: "18887p",
				},
			],
		])
		a.s(["MessageSquare", () => b], 7126)
	},
	81221,
	(a) => {
		"use strict"
		a.s(["UseExamplesSection", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call UseExamplesSection() from the server but UseExamplesSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/homepage/use-examples-section.tsx <module evaluation>",
			"UseExamplesSection",
		)
	},
	20494,
	(a) => {
		"use strict"
		a.s(["UseExamplesSection", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call UseExamplesSection() from the server but UseExamplesSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/homepage/use-examples-section.tsx",
			"UseExamplesSection",
		)
	},
	67714,
	(a) => {
		"use strict"
		a.i(81221)
		var b = a.i(20494)
		a.n(b)
	},
	82672,
	47837,
	63080,
	(a) => {
		"use strict"
		var b = a.i(68703),
			c = a.i(72327),
			d = a.i(91275),
			e = a.i(75568),
			f = a.i(16249),
			g = a.i(28771),
			h = a.i(62558),
			i = a.i(74327)
		a.i(71610), a.i(95020), a.i(87888)
		var j = a.i(1020),
			k = a.i(50024),
			l = a.i(51354),
			m = a.i(7126)
		function n() {
			return (0, j.jsx)("section", {
				className: "py-24 bg-background",
				children: (0, j.jsxs)("div", {
					className: "container px-4 mx-auto sm:px-6 lg:px-8 text-center",
					children: [
						(0, j.jsx)("h2", {
							className: "text-3xl font-bold tracking-tight sm:text-4xl mb-16",
							children: "Integrated into your SDLC.",
						}),
						(0, j.jsxs)("div", {
							className: "relative max-w-4xl mx-auto",
							children: [
								(0, j.jsx)("div", {
									className: "absolute inset-0 hidden md:block pointer-events-none",
									children: (0, j.jsxs)("svg", {
										className: "w-full h-full",
										viewBox: "0 0 800 400",
										fill: "none",
										xmlns: "http://www.w3.org/2000/svg",
										children: [
											(0, j.jsx)("path", {
												d: "M400 50 L150 350",
												stroke: "currentColor",
												strokeOpacity: "0.1",
												strokeWidth: "2",
												strokeDasharray: "8 8",
											}),
											(0, j.jsx)("path", {
												d: "M400 50 L650 350",
												stroke: "currentColor",
												strokeOpacity: "0.1",
												strokeWidth: "2",
												strokeDasharray: "8 8",
											}),
											(0, j.jsx)("path", {
												d: "M150 350 L650 350",
												stroke: "currentColor",
												strokeOpacity: "0.1",
												strokeWidth: "2",
												strokeDasharray: "8 8",
											}),
										],
									}),
								}),
								(0, j.jsxs)("div", {
									className: "grid md:grid-cols-3 gap-8 relative z-10",
									children: [
										(0, j.jsxs)("div", {
											className: "flex flex-col items-center",
											children: [
												(0, j.jsx)("div", {
													className:
														"w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20",
													children: (0, j.jsx)(m.MessageSquare, {
														className: "h-8 w-8 text-blue-500",
													}),
												}),
												(0, j.jsx)("div", {
													className: "text-sm font-bold text-blue-500 mb-2",
													children: "01. DISPATCH",
												}),
												(0, j.jsx)("h3", {
													className: "text-xl font-bold mb-3",
													children: "Trigger Task",
												}),
												(0, j.jsx)("p", {
													className: "text-muted-foreground text-sm max-w-[250px]",
													children:
														"Trigger a task via @Roo in Slack or the VS Code terminal.",
												}),
											],
										}),
										(0, j.jsxs)("div", {
											className: "flex flex-col items-center md:-mt-12",
											children: [
												(0, j.jsx)("div", {
													className:
														"w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20",
													children: (0, j.jsx)(l.Terminal, {
														className: "h-8 w-8 text-purple-500",
													}),
												}),
												(0, j.jsx)("div", {
													className: "text-sm font-bold text-purple-500 mb-2",
													children: "02. EXECUTE",
												}),
												(0, j.jsx)("h3", {
													className: "text-xl font-bold mb-3",
													children: "Run Agents",
												}),
												(0, j.jsx)("p", {
													className: "text-muted-foreground text-sm max-w-[250px]",
													children: "Agents run in isolated, ephemeral docker containers.",
												}),
											],
										}),
										(0, j.jsxs)("div", {
											className: "flex flex-col items-center",
											children: [
												(0, j.jsx)("div", {
													className:
														"w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20",
													children: (0, j.jsx)(k.GitMerge, {
														className: "h-8 w-8 text-green-500",
													}),
												}),
												(0, j.jsx)("div", {
													className: "text-sm font-bold text-green-500 mb-2",
													children: "03. MERGE",
												}),
												(0, j.jsx)("h3", {
													className: "text-xl font-bold mb-3",
													children: "Review PR",
												}),
												(0, j.jsx)("p", {
													className: "text-muted-foreground text-sm max-w-[250px]",
													children:
														"The output is always a standard GitHub Pull Request. You review code, not chat logs.",
												}),
											],
										}),
									],
								}),
							],
						}),
					],
				}),
			})
		}
		a.s(["EcosystemSection", () => n], 55469), a.i(76692)
		var o = a.i(72036),
			p = a.i(83355)
		let q = (0, a.i(1152).default)("download", [
			["path", { d: "M12 15V3", key: "m9g1x1" }],
			["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
			["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
		])
		var r = a.i(93125)
		function s() {
			return (0, j.jsx)("section", {
				className: "py-24 bg-muted/30 border-t border-border",
				children: (0, j.jsxs)("div", {
					className: "container px-4 mx-auto sm:px-6 lg:px-8 text-center",
					children: [
						(0, j.jsx)("h2", {
							className: "text-3xl font-bold tracking-tight sm:text-5xl mb-8",
							children: "Build faster. Solo or Together.",
						}),
						(0, j.jsxs)("div", {
							className: "flex flex-col sm:flex-row items-center justify-center gap-4",
							children: [
								(0, j.jsx)(o.Button, {
									size: "lg",
									className: "w-full sm:w-auto h-12 px-8 text-base",
									children: (0, j.jsxs)("a", {
										href: r.EXTERNAL_LINKS.MARKETPLACE,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "flex items-center gap-2",
										children: [(0, j.jsx)(q, { className: "h-4 w-4" }), "Install on VS Code"],
									}),
								}),
								(0, j.jsx)(o.Button, {
									variant: "outline",
									size: "lg",
									className: "w-full sm:w-auto h-12 px-8 text-base",
									children: (0, j.jsxs)("a", {
										href: r.EXTERNAL_LINKS.CLOUD_APP_SIGNUP,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "flex items-center gap-2",
										children: [
											"Try Cloud for Free",
											(0, j.jsx)(p.ArrowRight, { className: "h-4 w-4" }),
										],
									}),
								}),
							],
						}),
					],
				}),
			})
		}
		a.s(["CTASection", () => s], 47837)
		var t = a.i(67714)
		a.s([], 82672),
			a.i(82672),
			a.i(55469),
			a.i(47837),
			a.s([], 63080),
			a.j(b, 63080),
			a.j(c, 63080),
			a.j(d, 63080),
			a.j(e, 63080),
			a.j(f, 63080),
			a.j(g, 63080),
			a.j(h, 63080),
			a.j(i, 63080),
			a.j(t, 63080)
	},
]

//# sourceMappingURL=_a1cb837a._.js.map
