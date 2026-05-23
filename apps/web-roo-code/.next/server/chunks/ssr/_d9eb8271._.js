module.exports = [
	8258,
	(a) => {
		"use strict"
		let b = process.env.NEXT_PUBLIC_SITE_URL ?? "https://roocode.com"
		a.s([
			"SEO",
			0,
			{
				url: b,
				name: "Roo Code",
				title: "Roo Code – The AI dev team that gets things done",
				description:
					"Roo Code puts an entire AI dev team right in your editor, outpacing closed tools with deep project-wide context, multi-step agentic coding, and unmatched developer-centric flexibility.",
				locale: "en_US",
				ogImage: { url: "/opengraph.png", width: 1200, height: 600, alt: "Roo Code" },
				keywords: [
					"Roo Code",
					"AI coding agent",
					"VS Code extension",
					"AI pair programmer",
					"software development",
					"agentic coding",
					"code refactoring",
					"debugging",
				],
				category: "technology",
				twitterCard: "summary_large_image",
			},
		])
	},
	34508,
	(a) => {
		"use strict"
		function b(a, b) {
			let c = process.env.NEXT_PUBLIC_APP_URL || "https://roocode.com",
				d = new URLSearchParams()
			return d.set("title", a), b && d.set("description", b), `${c}/api/og?${d.toString()}`
		}
		a.s(["ogImageUrl", () => b])
	},
	54508,
	(a, b, c) => {
		"use strict"
		function d(a) {
			if ("function" != typeof WeakMap) return null
			var b = new WeakMap(),
				c = new WeakMap()
			return (d = function (a) {
				return a ? c : b
			})(a)
		}
		c._ = function (a, b) {
			if (!b && a && a.__esModule) return a
			if (null === a || ("object" != typeof a && "function" != typeof a)) return { default: a }
			var c = d(b)
			if (c && c.has(a)) return c.get(a)
			var e = { __proto__: null },
				f = Object.defineProperty && Object.getOwnPropertyDescriptor
			for (var g in a)
				if ("default" !== g && Object.prototype.hasOwnProperty.call(a, g)) {
					var h = f ? Object.getOwnPropertyDescriptor(a, g) : null
					h && (h.get || h.set) ? Object.defineProperty(e, g, h) : (e[g] = a[g])
				}
			return (e.default = a), c && c.set(a, e), e
		}
	},
	79724,
	(a, b, c) => {
		let { createClientModuleProxy: d } = a.r(57689)
		a.n(
			d(
				"[project]/node_modules/.pnpm/next@16.1.6_@opentelemetry+_b8a29fd3e98ec061646680b2e510dc03/node_modules/next/dist/client/app-dir/link.js <module evaluation>",
			),
		)
	},
	39140,
	(a, b, c) => {
		let { createClientModuleProxy: d } = a.r(57689)
		a.n(
			d(
				"[project]/node_modules/.pnpm/next@16.1.6_@opentelemetry+_b8a29fd3e98ec061646680b2e510dc03/node_modules/next/dist/client/app-dir/link.js",
			),
		)
	},
	37246,
	(a) => {
		"use strict"
		a.i(79724)
		var b = a.i(39140)
		a.n(b)
	},
	83733,
	(a, b, c) => {
		"use strict"
		Object.defineProperty(c, "__esModule", { value: !0 })
		var d = {
			default: function () {
				return i
			},
			useLinkStatus: function () {
				return h.useLinkStatus
			},
		}
		for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] })
		let f = a.r(54508),
			g = a.r(1020),
			h = f._(a.r(37246))
		function i(a) {
			let b = a.legacyBehavior,
				c =
					"string" == typeof a.children ||
					"number" == typeof a.children ||
					"string" == typeof a.children?.type,
				d = a.children?.type?.$$typeof === Symbol.for("react.client.reference")
			return (
				!b ||
					c ||
					d ||
					(a.children?.type?.$$typeof === Symbol.for("react.lazy")
						? console.error(
								"Using a Lazy Component as a direct child of `<Link legacyBehavior>` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's `<a>` tag.",
							)
						: console.error(
								"Using a Server Component as a direct child of `<Link legacyBehavior>` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's `<a>` tag.",
							)),
				(0, g.jsx)(h.default, { ...a })
			)
		}
		;("function" == typeof c.default || ("object" == typeof c.default && null !== c.default)) &&
			void 0 === c.default.__esModule &&
			(Object.defineProperty(c.default, "__esModule", { value: !0 }),
			Object.assign(c.default, c),
			(b.exports = c.default))
	},
	79138,
	(a) => {
		"use strict"
		async function b() {
			try {
				let a = await fetch("https://api.github.com/repos/RooCodeInc/Roo-Code"),
					b = await a.json()
				if ("number" != typeof b.stargazers_count)
					return (
						console.error("GitHub API: Invalid stargazers count. Possible that you got rate-limited?"), null
					)
				return d(b.stargazers_count)
			} catch (a) {
				return console.error("Error fetching GitHub stars:", a), null
			}
		}
		async function c() {
			let a = await fetch("https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery", {
				method: "POST",
				headers: { "Content-Type": "application/json", Accept: "application/json;api-version=7.1-preview.1" },
				body: JSON.stringify({
					filters: [{ criteria: [{ filterType: 7, value: "RooVeterinaryInc.roo-cline" }] }],
					flags: 914,
				}),
			})
			try {
				let b = await a.json(),
					c = b?.results?.[0]?.extensions?.[0]?.statistics
				if (!c) return console.error("VSCode API: Missing statistics in response"), null
				let e = c.find((a) => "install" === a.statisticName)
				if (!e) return console.error("VSCode API: Install count not found"), null
				return d(e.value)
			} catch (a) {
				return console.error("Error fetching VSCode downloads:", a), null
			}
		}
		function d(a) {
			return a >= 1e6
				? (Math.floor((a / 1e6) * 100) / 100).toFixed(2) + "M"
				: (Math.floor((a / 1e3) * 10) / 10).toFixed(1) + "k"
		}
		a.s(["getGitHubStars", () => b, "getVSCodeDownloads", () => c])
	},
]

//# sourceMappingURL=_d9eb8271._.js.map
