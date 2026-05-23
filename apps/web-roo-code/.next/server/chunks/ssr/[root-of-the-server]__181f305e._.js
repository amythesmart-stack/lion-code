module.exports = [
	93695,
	(a, b, c) => {
		b.exports = a.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
			require("next/dist/shared/lib/no-fallback-error.external.js"),
		)
	},
	4776,
	(a) => {
		a.n(a.i(80606))
	},
	99376,
	(a) => {
		a.n(a.i(44673))
	},
	96860,
	(a) => {
		a.n(a.i(92386))
	},
	28656,
	(a) => {
		a.n(a.i(79868))
	},
	93563,
	(a) => {
		a.n(a.i(16472))
	},
	58813,
	(a) => {
		"use strict"
		a.s(["Evals", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call Evals() from the server but Evals is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/app/evals/evals.tsx <module evaluation>",
			"Evals",
		)
	},
	59106,
	(a) => {
		"use strict"
		a.s(["Evals", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call Evals() from the server but Evals is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/app/evals/evals.tsx",
			"Evals",
		)
	},
	20520,
	(a) => {
		"use strict"
		a.i(58813)
		var b = a.i(59106)
		a.n(b)
	},
	45497,
	(a) => {
		"use strict"
		var b = a.i(1020),
			c = a.i(64735),
			d = a.i(8258),
			e = a.i(34508),
			f = a.i(20520)
		let g = "Evals",
			h = "Explore quantitative evals of LLM coding skills across tasks and providers.",
			i = "Quantitative evals of LLM coding skills",
			j = "/evals",
			k = {
				title: g,
				description: h,
				alternates: { canonical: `${d.SEO.url}${j}` },
				openGraph: {
					title: g,
					description: h,
					url: `${d.SEO.url}${j}`,
					siteName: d.SEO.name,
					images: [{ url: (0, e.ogImageUrl)(g, i), width: 1200, height: 630, alt: g }],
					locale: d.SEO.locale,
					type: "website",
				},
				twitter: { card: d.SEO.twitterCard, title: g, description: h, images: [(0, e.ogImageUrl)(g, i)] },
				keywords: [...d.SEO.keywords, "benchmarks", "LLM evals", "coding evaluations", "model comparison"],
			}
		async function l() {
			let a = await (0, c.getEvalRuns)()
			return (0, b.jsx)(f.Evals, { runs: a })
		}
		a.s(["default", () => l, "dynamic", 0, "force-dynamic", "metadata", 0, k, "revalidate", 0, 300])
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__181f305e._.js.map
