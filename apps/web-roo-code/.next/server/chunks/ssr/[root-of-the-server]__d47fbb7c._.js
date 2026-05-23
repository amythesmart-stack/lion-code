module.exports = [
	77545,
	(a, b, c) => {
		"use strict"
		b.exports = a.r(37042).vendored.contexts.HooksClientContext
	},
	80506,
	(a, b, c) => {
		"use strict"
		b.exports = a.r(37042).vendored.contexts.ServerInsertedHtml
	},
	18622,
	(a, b, c) => {
		b.exports = a.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js", () =>
			require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"),
		)
	},
	56704,
	(a, b, c) => {
		b.exports = a.x("next/dist/server/app-render/work-async-storage.external.js", () =>
			require("next/dist/server/app-render/work-async-storage.external.js"),
		)
	},
	32319,
	(a, b, c) => {
		b.exports = a.x("next/dist/server/app-render/work-unit-async-storage.external.js", () =>
			require("next/dist/server/app-render/work-unit-async-storage.external.js"),
		)
	},
	20635,
	(a, b, c) => {
		b.exports = a.x("next/dist/server/app-render/action-async-storage.external.js", () =>
			require("next/dist/server/app-render/action-async-storage.external.js"),
		)
	},
	37042,
	(a, b, c) => {
		"use strict"
		b.exports = a.r(18622)
	},
	9116,
	(a, b, c) => {
		"use strict"
		b.exports = a.r(37042).vendored["react-ssr"].ReactJsxRuntime
	},
	67191,
	(a, b, c) => {
		"use strict"
		b.exports = a.r(37042).vendored["react-ssr"].React
	},
	24326,
	(a, b, c) => {
		"use strict"
		b.exports = a.r(37042).vendored.contexts.AppRouterContext
	},
	71539,
	(a, b, c) => {
		"use strict"
		b.exports = a.r(37042).vendored["react-ssr"].ReactServerDOMTurbopackClient
	},
	23360,
	(a, b, c) => {
		"use strict"
		b.exports = a.r(37042).vendored["react-ssr"].ReactDOM
	},
	63652,
	(a, b, c) => {
		"use strict"
		c._ = function (a) {
			return a && a.__esModule ? a : { default: a }
		}
	},
	49779,
	(a, b, c) => {
		"use strict"
		b.exports = a.r(37042).vendored.contexts.HeadManagerContext
	},
	8402,
	(a) => {
		"use strict"
		var b = a.i(67191)
		let c = (...a) =>
				a
					.filter((a, b, c) => !!a && "" !== a.trim() && c.indexOf(a) === b)
					.join(" ")
					.trim(),
			d = (a) => {
				let b = a.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, b, c) => (c ? c.toUpperCase() : b.toLowerCase()))
				return b.charAt(0).toUpperCase() + b.slice(1)
			}
		var e = {
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
		let f = (0, b.forwardRef)(
				(
					{
						color: a = "currentColor",
						size: d = 24,
						strokeWidth: f = 2,
						absoluteStrokeWidth: g,
						className: h = "",
						children: i,
						iconNode: j,
						...k
					},
					l,
				) =>
					(0, b.createElement)(
						"svg",
						{
							ref: l,
							...e,
							width: d,
							height: d,
							stroke: a,
							strokeWidth: g ? (24 * Number(f)) / Number(d) : f,
							className: c("lucide", h),
							...(!i &&
								!((a) => {
									for (let b in a)
										if (b.startsWith("aria-") || "role" === b || "title" === b) return !0
									return !1
								})(k) && { "aria-hidden": "true" }),
							...k,
						},
						[...j.map(([a, c]) => (0, b.createElement)(a, c)), ...(Array.isArray(i) ? i : [i])],
					),
			),
			g = (a, e) => {
				let g = (0, b.forwardRef)(({ className: g, ...h }, i) =>
					(0, b.createElement)(f, {
						ref: i,
						iconNode: e,
						className: c(
							`lucide-${d(a)
								.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
								.toLowerCase()}`,
							`lucide-${a}`,
							g,
						),
						...h,
					}),
				)
				return (g.displayName = d(a)), g
			}
		a.s(["default", () => g], 8402)
	},
	92137,
	(a) => {
		"use strict"
		let b = (0, a.i(8402).default)("chevron-down", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]])
		a.s(["ChevronDown", () => b], 92137)
	},
	30787,
	(a) => {
		"use strict"
		a.s([
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
	72187,
	40146,
	(a) => {
		"use strict"
		var b = a.i(8402)
		let c = (0, b.default)("cloud", [
			["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }],
		])
		a.s(["Cloud", () => c], 72187)
		let d = (0, b.default)("puzzle", [
			[
				"path",
				{
					d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
					key: "w46dr5",
				},
			],
		])
		a.s(["Puzzle", () => d], 40146)
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__d47fbb7c._.js.map
