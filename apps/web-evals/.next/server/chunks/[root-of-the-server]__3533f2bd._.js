module.exports = [
	93695,
	(e, r, s) => {
		r.exports = e.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
			require("next/dist/shared/lib/no-fallback-error.external.js"),
		)
	},
	18622,
	(e, r, s) => {
		r.exports = e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js", () =>
			require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"),
		)
	},
	56704,
	(e, r, s) => {
		r.exports = e.x("next/dist/server/app-render/work-async-storage.external.js", () =>
			require("next/dist/server/app-render/work-async-storage.external.js"),
		)
	},
	32319,
	(e, r, s) => {
		r.exports = e.x("next/dist/server/app-render/work-unit-async-storage.external.js", () =>
			require("next/dist/server/app-render/work-unit-async-storage.external.js"),
		)
	},
	14747,
	(e, r, s) => {
		r.exports = e.x("path", () => require("path"))
	},
	46786,
	(e, r, s) => {
		r.exports = e.x("os", () => require("os"))
	},
	22734,
	(e, r, s) => {
		r.exports = e.x("fs", () => require("fs"))
	},
	4446,
	(e, r, s) => {
		r.exports = e.x("net", () => require("net"))
	},
	55004,
	(e, r, s) => {
		r.exports = e.x("tls", () => require("tls"))
	},
	54799,
	(e, r, s) => {
		r.exports = e.x("crypto", () => require("crypto"))
	},
	88947,
	(e, r, s) => {
		r.exports = e.x("stream", () => require("stream"))
	},
	60438,
	(e, r, s) => {
		r.exports = e.x("perf_hooks", () => require("perf_hooks"))
	},
	24868,
	(e, r, s) => {
		r.exports = e.x("fs/promises", () => require("fs/promises"))
	},
	92509,
	(e, r, s) => {
		r.exports = e.x("url", () => require("url"))
	},
	87769,
	(e, r, s) => {
		r.exports = e.x("node:events", () => require("node:events"))
	},
	57764,
	(e, r, s) => {
		r.exports = e.x("node:url", () => require("node:url"))
	},
	66680,
	(e, r, s) => {
		r.exports = e.x("node:crypto", () => require("node:crypto"))
	},
	61095,
	(e, r, s) => {
		r.exports = e.x("node:net", () => require("node:net"))
	},
	85560,
	(e, r, s) => {
		r.exports = e.x("node:tls", () => require("node:tls"))
	},
	36340,
	(e, r, s) => {
		r.exports = e.x("node:timers/promises", () => require("node:timers/promises"))
	},
	33615,
	(e) => {
		e.v({
			name: "@redis/client",
			version: "5.1.1",
			license: "MIT",
			main: "./dist/index.js",
			types: "./dist/index.d.ts",
			files: ["dist/", "!dist/tsconfig.tsbuildinfo"],
			scripts: { test: "nyc -r text-summary -r lcov mocha -r tsx './lib/**/*.spec.ts'", release: "release-it" },
			dependencies: { "cluster-key-slot": "1.1.2" },
			devDependencies: { "@redis/test-utils": "*", "@types/sinon": "^17.0.3", sinon: "^17.0.1" },
			engines: { node: ">= 18" },
			repository: { type: "git", url: "git://github.com/nkaradzhov/node-redis.git" },
			bugs: { url: "https://github.com/redis/node-redis/issues" },
			homepage: "https://github.com/redis/node-redis/tree/master/packages/client",
			keywords: ["redis"],
		})
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__3533f2bd._.js.map
