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
	1152,
	(a) => {
		"use strict"
		var b = a.i(32291)
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
		a.s(["default", () => g], 1152)
	},
	55289,
	(a, b, c) => {
		"use strict"
		c._ = function (a) {
			return a && a.__esModule ? a : { default: a }
		}
	},
	98491,
	(a) => {
		"use strict"
		let b = (0, a.i(1152).default)("users", [
			["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
			["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
			["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
			["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
		])
		a.s(["Users", () => b], 98491)
	},
	39184,
	(a) => {
		"use strict"
		let b = (0, a.i(1152).default)("share-2", [
			["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
			["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
			["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
			["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
			["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }],
		])
		a.s(["Share2", () => b], 39184)
	},
	16109,
	(a) => {
		"use strict"
		let b = (0, a.i(1152).default)("slack", [
			["rect", { width: "3", height: "8", x: "13", y: "2", rx: "1.5", key: "diqz80" }],
			["path", { d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5", key: "183iwg" }],
			["rect", { width: "3", height: "8", x: "8", y: "14", rx: "1.5", key: "hqg7r1" }],
			["path", { d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5", key: "76g71w" }],
			["rect", { width: "8", height: "3", x: "14", y: "13", rx: "1.5", key: "1kmz0a" }],
			["path", { d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5", key: "jc4sz0" }],
			["rect", { width: "8", height: "3", x: "2", y: "8", rx: "1.5", key: "1omvl4" }],
			["path", { d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5", key: "16f3cl" }],
		])
		a.s(["Slack", () => b], 16109)
	},
	83170,
	(a) => {
		a.v("/_next/static/media/cloud-screen.90149be7.png")
	},
	60744,
	(a) => {
		"use strict"
		var b = a.i(1020),
			c = a.i(83355),
			d = a.i(6517),
			e = a.i(26712),
			f = a.i(1152)
		let g = (0, f.default)("chart-line", [
				["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
				["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }],
			]),
			h = (0, f.default)("github", [
				[
					"path",
					{
						d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
						key: "tonef",
					},
				],
				["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
			]),
			i = (0, f.default)("history", [
				["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
				["path", { d: "M3 3v5h5", key: "1xhq8a" }],
				["path", { d: "M12 7v5l4 2", key: "1fdv2h" }],
			]),
			j = (0, f.default)("list-checks", [
				["path", { d: "M13 5h8", key: "a7qcls" }],
				["path", { d: "M13 12h8", key: "h98zly" }],
				["path", { d: "M13 19h8", key: "c3s6r1" }],
				["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
				["path", { d: "m3 7 2 2 4-4", key: "1obspn" }],
			]),
			k = (0, f.default)("pencil", [
				[
					"path",
					{
						d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
						key: "1a8usu",
					},
				],
				["path", { d: "m15 5 4 4", key: "1mk7zo" }],
			])
		var l = a.i(39184),
			m = a.i(16109),
			n = a.i(98491),
			o = a.i(81628),
			p = a.i(27802)
		a.i(76692)
		var q = a.i(72036)
		a.i(82672)
		var r = a.i(63080),
			s = a.i(8258),
			t = a.i(34508),
			u = a.i(93125)
		let v = {
				src: a.i(83170).default,
				width: 2780,
				height: 2024,
				blurWidth: 8,
				blurHeight: 6,
				blurDataURL:
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAoElEQVR42h1OOQoDMRDzB7Za9nL2iA98gN25zhP8jTR54baBQCCN/+AvGNLNjl0IJI0khnjnT6VUDiFkrXUWQjRIKbN37iR4TMdxwI1SMMaARtwZg+qhToRznoZhgIoW0BqWZWm6lgkmU9d10Pd9NVpg2zaY57nytvAdx7FQSou1tuDKHzmgVwM/gnMPnIvTNMV1XSNj7IVPvvd9/2D5eQH6ZjrBpxG+hQAAAABJRU5ErkJggg==",
			},
			w = "Roo Code Cloud",
			x =
				"Your AI Software Engineering Team in the Cloud. Delegate tasks to autonomous agents, review PRs, and collaborate with your team.",
			y = "Your AI Team in the Cloud",
			z = "/cloud",
			A = {
				title: w,
				description: x,
				alternates: { canonical: `${s.SEO.url}${z}` },
				openGraph: {
					title: w,
					description: x,
					url: `${s.SEO.url}${z}`,
					siteName: s.SEO.name,
					images: [{ url: (0, t.ogImageUrl)(w, y), width: 1200, height: 630, alt: w }],
					locale: s.SEO.locale,
					type: "website",
				},
				twitter: { card: s.SEO.twitterCard, title: w, description: x, images: [(0, t.ogImageUrl)(w, y)] },
				keywords: [
					...s.SEO.keywords,
					"cloud",
					"subscription",
					"cloud agents",
					"AI cloud development",
					"autonomous agents",
				],
			},
			B = [
				{
					title: "1. Connect your GitHub account",
					description:
						"Pick which repos the agents can work with in their isolated containers and choose what model you want to power each of them. You're in control.",
					icon: h,
				},
				{
					title: "2. Set up your agent team",
					description:
						"Choose the roles you want filled, like Explainer, Planner, Coder, PR Reviewer and PR Fixer. They know how to act in each situation and stay on-task with no deviations.",
					icon: o.Users2,
				},
				{
					title: "3. Start giving them tasks",
					description:
						"Describe what you want them to do from the web UI, get the Reviewer automatically reviewing PRs, and much more. They're now part of your team.",
					icon: k,
				},
			],
			C = [
				{
					icon: d.Bot,
					title: "Autonomous Cloud Agents",
					description:
						"Delegate work to specialized agents like the Planner, Coder, Explainer, Reviewer, and Fixer that run 24/7.",
				},
				{
					icon: e.Brain,
					title: "Model Agnostic",
					description:
						"Bring your own keys or use the Roo Code Router with access to all top models with no markup.",
				},
				{
					icon: h,
					title: "GitHub PR Reviews",
					description:
						"Agents can automatically review Pull Requests, provide feedback, and even push fixes directly to your repository.",
				},
				{
					icon: m.Slack,
					title: "Slack Integration",
					description:
						"Start tasks, get updates, and collaborate with agents directly from your team's Slack channels.",
				},
				{
					icon: j,
					title: "Linear Integration",
					description:
						"Assign issues to Roo Code directly from Linear. Get PRs back without switching tools.",
				},
				{
					icon: n.Users,
					title: "Team Collaboration",
					description:
						"Manage your team and their access to tasks and resources, with centralized billing and configuration.",
				},
				{
					icon: g,
					title: "Usage Analytics",
					description: "Detailed token analytics to help you optimize your costs and usage across your team.",
				},
				{
					icon: i,
					title: "Task History",
					description: "Access from anywhere all of your tasks, from the cloud and the extension",
				},
				{
					icon: l.Share2,
					title: "Task Sharing",
					description: "Share tasks with friends and co-workers and let them follow your work in real-time.",
				},
			]
		function D() {
			return (0, b.jsxs)(b.Fragment, {
				children: [
					(0, b.jsxs)("section", {
						className: "relative flex pt-32 pb-20 items-center overflow-hidden",
						children: [
							(0, b.jsx)(r.AnimatedBackground, {}),
							(0, b.jsxs)("div", {
								className:
									"container relative flex flex-col items-center h-full z-10 mx-auto px-4 sm:px-6 lg:px-8",
								children: [
									(0, b.jsxs)("div", {
										className: "text-center max-w-4xl mx-auto mb-12",
										children: [
											(0, b.jsxs)("h1", {
												className:
													"text-4xl font-bold tracking-tight mb-6 md:text-5xl lg:text-6xl",
												children: [
													"Your AI Team ",
													(0, b.jsx)("span", {
														className: "text-violet-500",
														children: "in the Cloud",
													}),
												],
											}),
											(0, b.jsx)("p", {
												className: "text-xl text-muted-foreground mb-8 max-w-2xl mx-auto",
												children:
													"Create your agent team in the Cloud, give them access to GitHub, and start delegating tasks from the web, Slack, Linear, and more.",
											}),
											(0, b.jsxs)("div", {
												className: "flex flex-col sm:flex-row gap-4 justify-center",
												children: [
													(0, b.jsx)(q.Button, {
														size: "xl",
														className:
															"bg-violet-600 hover:bg-violet-700 text-white transition-all duration-300 shadow-lg hover:shadow-violet-500/25",
														asChild: !0,
														children: (0, b.jsxs)("a", {
															href: u.EXTERNAL_LINKS.CLOUD_APP_SIGNUP,
															target: "_blank",
															rel: "noopener noreferrer",
															className: "flex items-center justify-center",
															children: [
																"Try Cloud for Free",
																(0, b.jsx)(c.ArrowRight, { className: "ml-2 size-5" }),
															],
														}),
													}),
													(0, b.jsx)(q.Button, {
														variant: "outline",
														size: "xl",
														className: "backdrop-blur-sm",
														asChild: !0,
														children: (0, b.jsx)("a", {
															href: "/pricing",
															className: "flex items-center justify-center",
															children: "View Pricing",
														}),
													}),
												],
											}),
										],
									}),
									(0, b.jsx)("div", {
										className: "relative mx-auto mt-4 md:max-w-[1000px]",
										children: (0, b.jsx)(p.default, {
											src: v,
											alt: "Roo Code Cloud Interface",
											className: "w-full h-auto",
											width: 1390,
											height: 1012,
											priority: !0,
										}),
									}),
								],
							}),
						],
					}),
					(0, b.jsx)("section", {
						className: "relative overflow-hidden border-t border-border py-32",
						children: (0, b.jsxs)("div", {
							className: "container relative z-10 mx-auto px-4 sm:px-6 lg:px-8",
							children: [
								(0, b.jsx)("div", {
									className:
										"absolute inset-y-0 left-1/2 h-full w-full max-w-[1200px] -translate-x-1/2 z-1",
									children: (0, b.jsx)("div", {
										className:
											"absolute left-1/2 top-1/2 h-[400px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 dark:bg-blue-700/20 blur-[140px]",
									}),
								}),
								(0, b.jsx)("div", {
									className: "mx-auto mb-12 md:mb-24 max-w-5xl text-center",
									children: (0, b.jsxs)("div", {
										children: [
											(0, b.jsx)("h2", {
												className: "text-3xl font-bold tracking-tight sm:text-5xl mb-4",
												children: "How it works",
											}),
											(0, b.jsx)("p", {
												className: "text-xl text-muted-foreground max-w-2xl mx-auto",
												children: "It only takes 2 minutes to expand your team by 10x.",
											}),
										],
									}),
								}),
								(0, b.jsx)("div", {
									className: "relative mx-auto md:max-w-[1200px]",
									children: (0, b.jsx)("ul", {
										className: "grid grid-cols-1 place-items-center gap-6 md:grid-cols-3 lg:gap-8",
										children: B.map((a, c) => {
											let d = a.icon
											return (0, b.jsxs)(
												"li",
												{
													className:
														"relative h-full border border-border rounded-2xl bg-background p-8 transition-all duration-300 hover:shadow-lg",
													children: [
														d && (0, b.jsx)(d, { className: "size-6 text-foreground/80" }),
														(0, b.jsx)("h3", {
															className:
																"mb-3 mt-3 text-xl font-semibold text-foreground",
															children: a.title,
														}),
														(0, b.jsx)("div", {
															className:
																"leading-relaxed font-light text-muted-foreground",
															children: a.description,
														}),
													],
												},
												c,
											)
										}),
									}),
								}),
							],
						}),
					}),
					(0, b.jsx)(r.UseExamplesSection, {}),
					(0, b.jsx)("section", {
						className: "py-24 bg-muted/30",
						children: (0, b.jsxs)("div", {
							className: "container mx-auto px-4 sm:px-6 lg:px-8 relative",
							children: [
								(0, b.jsx)("div", {
									className:
										"absolute inset-y-0 left-1/2 h-full w-full max-w-[1200px] -translate-x-1/2 z-1",
									children: (0, b.jsx)("div", {
										className:
											"absolute left-1/2 top-1/2 h-[800px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 dark:bg-violet-700/20 blur-[140px]",
									}),
								}),
								(0, b.jsxs)("div", {
									className: "text-center mb-16",
									children: [
										(0, b.jsx)("h2", {
											className: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
											children: "Powering the next generation of software development",
										}),
										(0, b.jsx)("p", {
											className: "text-xl text-muted-foreground max-w-2xl mx-auto",
											children: "Everything you need to scale your development capacity with AI.",
										}),
									],
								}),
								(0, b.jsx)("div", {
									className:
										"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative",
									children: C.map((a, c) => {
										let d = a.icon
										return (0, b.jsxs)(
											"div",
											{
												className:
													"bg-background p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300",
												children: [
													(0, b.jsx)("div", {
														className:
															"bg-violet-100 dark:bg-violet-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6",
														children: (0, b.jsx)(d, {
															className: "size-6 text-violet-600 dark:text-violet-400",
														}),
													}),
													(0, b.jsx)("h3", {
														className: "text-xl font-semibold mb-3",
														children: a.title,
													}),
													(0, b.jsx)("p", {
														className: "text-muted-foreground leading-relaxed",
														children: a.description,
													}),
												],
											},
											c,
										)
									}),
								}),
							],
						}),
					}),
					(0, b.jsx)("section", {
						className: "py-24",
						children: (0, b.jsx)("div", {
							className: "container mx-auto px-4 sm:px-6 lg:px-8",
							children: (0, b.jsxs)("div", {
								className:
									"mx-auto max-w-4xl rounded-3xl border border-border/50 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-blue-500/5 p-8 text-center shadow-2xl backdrop-blur-xl dark:border-white/10 sm:p-16",
								children: [
									(0, b.jsx)("h2", {
										className: "mb-6 text-3xl font-bold tracking-tight sm:text-4xl",
										children: "Try a completely new way of working.",
									}),
									(0, b.jsx)("p", {
										className: "mx-auto mb-10 max-w-2xl text-lg text-muted-foreground",
										children: "Start for free today.",
									}),
									(0, b.jsx)("div", {
										className:
											"flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0",
										children: (0, b.jsx)(q.Button, {
											size: "lg",
											className:
												"bg-foreground text-background hover:bg-foreground/90 transition-all duration-300",
											asChild: !0,
											children: (0, b.jsxs)("a", {
												href: u.EXTERNAL_LINKS.CLOUD_APP_SIGNUP,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "flex items-center justify-center",
												children: [
													"Sign up now",
													(0, b.jsx)(c.ArrowRight, { className: "ml-2 h-4 w-4" }),
												],
											}),
										}),
									}),
								],
							}),
						}),
					}),
				],
			})
		}
		a.s(["default", () => D, "metadata", 0, A], 60744)
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__ae2d3a34._.js.map
