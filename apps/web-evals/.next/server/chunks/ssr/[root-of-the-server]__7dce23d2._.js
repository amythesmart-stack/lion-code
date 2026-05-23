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
	70929,
	(a) => {
		"use strict"
		a.s(["Run", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call Run() from the server but Run is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-evals/src/app/runs/[id]/run.tsx <module evaluation>",
			"Run",
		)
	},
	62933,
	(a) => {
		"use strict"
		a.s(["Run", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call Run() from the server but Run is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-evals/src/app/runs/[id]/run.tsx",
			"Run",
		)
	},
	1147,
	(a) => {
		"use strict"
		a.i(70929)
		var b = a.i(62933)
		a.n(b)
	},
	82934,
	(a) => {
		"use strict"
		var b = a.i(1020)
		a.i(52824)
		var c = a.i(67361),
			d = a.i(1147)
		async function e({ params: a }) {
			let { id: e } = await a,
				f = await (0, c.findRun)(Number(e))
			return (0, b.jsx)("div", { className: "w-full px-6 py-12", children: (0, b.jsx)(d.Run, { run: f }) })
		}
		a.s(["default", () => e])
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__7dce23d2._.js.map
