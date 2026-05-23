module.exports = [
	93695,
	(a, b, c) => {
		b.exports = a.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
			require("next/dist/shared/lib/no-fallback-error.external.js"),
		)
	},
	33184,
	(a) => {
		a.n(a.i(47086))
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
		a.n(a.i(75409))
	},
	356,
	(a) => {
		"use strict"
		a.s(["Runs", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call Runs() from the server but Runs is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-evals/src/components/home/runs.tsx <module evaluation>",
			"Runs",
		)
	},
	21155,
	(a) => {
		"use strict"
		a.s(["Runs", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call Runs() from the server but Runs is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-evals/src/components/home/runs.tsx",
			"Runs",
		)
	},
	46353,
	(a) => {
		"use strict"
		a.i(356)
		var b = a.i(21155)
		a.n(b)
	},
	56294,
	(a) => {
		"use strict"
		var b = a.i(1020)
		a.i(52824)
		var c = a.i(67361),
			d = a.i(46353)
		async function e() {
			let a = await (0, c.getRuns)()
			return (0, b.jsx)(d.Runs, { runs: a })
		}
		a.s(["default", () => e, "dynamic", 0, "force-dynamic"])
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__02d156e9._.js.map
