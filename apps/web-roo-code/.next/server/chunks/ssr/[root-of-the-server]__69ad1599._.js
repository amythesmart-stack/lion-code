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
	58398,
	(a) => {
		"use strict"
		let b = (0, a.i(1152).default)("settings", [
			[
				"path",
				{
					d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
					key: "1i5ecw",
				},
			],
			["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
		])
		a.s(["Settings", () => b], 58398)
	},
	47992,
	47970,
	(a) => {
		"use strict"
		var b = a.i(1152)
		let c = (0, b.default)("lock", [
			["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
			["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
		])
		a.s(["Lock", () => c], 47992)
		let d = (0, b.default)("dollar-sign", [
			["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
			["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }],
		])
		a.s(["DollarSign", () => d], 47970)
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
	99119,
	(a) => {
		"use strict"
		var b = a.i(1020),
			c = a.i(83355),
			d = a.i(98491),
			e = a.i(58398),
			f = a.i(1152)
		let g = (0, f.default)("chart-column", [
			["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
			["path", { d: "M18 17V9", key: "2bz60n" }],
			["path", { d: "M13 17V5", key: "1frdt8" }],
			["path", { d: "M8 17v-3", key: "17ska0" }],
		])
		var h = a.i(47992)
		let i = (0, f.default)("puzzle", [
			[
				"path",
				{
					d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
					key: "w46dr5",
				},
			],
		])
		var j = a.i(89796),
			k = a.i(47970),
			l = a.i(39184)
		let m = (0, f.default)("server", [
				["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
				["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
				["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
				["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }],
			]),
			n = (0, f.default)("refresh-ccw", [
				["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
				["path", { d: "M3 3v5h5", key: "1xhq8a" }],
				["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
				["path", { d: "M16 16h5v5", key: "ccwih5" }],
			])
		a.i(76692)
		var o = a.i(72036)
		a.i(82672)
		var p = a.i(63080),
			q = a.i(8258),
			r = a.i(34508),
			s = a.i(93125)
		let t = "Roo Code Cloud Team Plan",
			u =
				"Scale your development with team collaboration features. Centralized billing, shared configuration, team-wide analytics, and unified GitHub, Slack, and Linear integrations.",
			v = "Team collaboration for AI-powered development",
			w = "/cloud/team",
			x = {
				title: t,
				description: u,
				alternates: { canonical: `${q.SEO.url}${w}` },
				openGraph: {
					title: t,
					description: u,
					url: `${q.SEO.url}${w}`,
					siteName: q.SEO.name,
					images: [{ url: (0, r.ogImageUrl)(t, v), width: 1200, height: 630, alt: t }],
					locale: q.SEO.locale,
					type: "website",
				},
				twitter: { card: q.SEO.twitterCard, title: t, description: u, images: [(0, r.ogImageUrl)(t, v)] },
				keywords: [
					...q.SEO.keywords,
					"team",
					"collaboration",
					"enterprise",
					"organization",
					"centralized billing",
					"team management",
				],
			},
			y = [
				{
					title: "No Per-Seat Costs",
					description: "Add unlimited team members without worrying about escalating per-seat charges.",
					icon: d.Users,
				},
				{
					title: "Centralized Billing",
					description:
						"Single billing point for all team members using Cloud Agents and the Roo Code Router. No more API key management.",
					icon: k.DollarSign,
				},
				{
					title: "Unified Integrations",
					description:
						"Connect GitHub, Slack, and Linear once for the entire team. No need for each member to set up individual integrations.",
					icon: e.Settings,
				},
				{
					title: "Team-Wide Visibility",
					description:
						"Access task history and usage analytics across your entire team with granular per-user filters.",
					icon: g,
				},
				{
					title: "Configuration Enforcement",
					description:
						"Set policies for providers, models, and MCP servers to ensure your team follows organizational standards.",
					icon: j.ShieldCheck,
				},
				{
					title: "Secure Environment Variables",
					description:
						"Centrally manage secrets, API keys, and environment variables for Cloud Agents in our encrypted secret store.",
					icon: h.Lock,
				},
			],
			z = [
				{
					icon: j.ShieldCheck,
					title: "Configuration Enforcement",
					description:
						"Require team members to log in to the VS Code Extension so policies can be enforced via MDM distribution.",
				},
				{
					icon: m,
					title: "Provider Management",
					description:
						"Configure and manage the model providers your team can access for both the Extension and Cloud Agents, with API-key-free management.",
				},
				{
					icon: i,
					title: "Centralized Integration",
					description:
						"Centralized GitHub, Slack, and Linear connection for the entire team. Agents can review PRs, collaborate on your repositories, respond on your team Slack channels, and work on issues in Linear.",
				},
				{
					icon: n,
					title: "Extension Task Sync Config",
					description:
						"Require task syncing from VS Code Extension and control visibility settings for who can view each other's tasks.",
				},
				{
					icon: l.Share2,
					title: "Task Sharing Controls",
					description:
						"Enable per-task sharing with customizable audience controls and link expiration times.",
				},
				{
					icon: m,
					title: "MCP Server Controls",
					description:
						"Control access to the Roo MCP Marketplace and what custom MCPs to make available to your team.",
				},
			]
		function A() {
			return (0, b.jsxs)(b.Fragment, {
				children: [
					(0, b.jsxs)("section", {
						className: "relative flex pt-32 pb-20 items-center overflow-hidden",
						children: [
							(0, b.jsx)(p.AnimatedBackground, {}),
							(0, b.jsx)("div", {
								className:
									"container relative flex flex-col items-center h-full z-10 mx-auto px-4 sm:px-6 lg:px-8",
								children: (0, b.jsxs)("div", {
									className: "text-center max-w-4xl mx-auto mb-12",
									children: [
										(0, b.jsx)("h1", {
											className: "text-4xl font-bold tracking-tight mb-6 md:text-6xl",
											children: "Roo Code Cloud Team",
										}),
										(0, b.jsxs)("h2", {
											className: "text-2xl font-bold tracking-tight mb-6 md:text-4xl",
											children: [
												"Built for ",
												(0, b.jsx)("span", {
													className: "text-violet-500",
													children: "AI-Forward Teams",
												}),
											],
										}),
										(0, b.jsx)("p", {
											className: "text-xl text-muted-foreground mb-8 mx-auto",
											children:
												"Empower your entire team with confidence with team-wide configuration, centralized billing, analytics and more. No per-seat costs, no API key juggling.",
										}),
										(0, b.jsxs)("div", {
											className: "flex flex-col sm:flex-row gap-4 justify-center",
											children: [
												(0, b.jsx)(o.Button, {
													size: "xl",
													className:
														"bg-violet-600 hover:bg-violet-700 text-white transition-all duration-300 shadow-lg hover:shadow-violet-500/25",
													asChild: !0,
													children: (0, b.jsxs)("a", {
														href:
															s.EXTERNAL_LINKS.CLOUD_APP_SIGNUP +
															"?redirect_url=/checkout/team",
														target: "_blank",
														rel: "noopener noreferrer",
														className: "flex items-center justify-center",
														children: [
															"Start 14-Day Free Trial",
															(0, b.jsx)(c.ArrowRight, { className: "ml-2 size-5" }),
														],
													}),
												}),
												(0, b.jsx)(o.Button, {
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
												className: "text-4xl font-bold tracking-tight mb-4",
												children: "Why Teams Choose Roo",
											}),
											(0, b.jsx)("p", {
												className: "text-xl text-muted-foreground max-w-2xl mx-auto",
												children:
													"Streamline collaboration and scale your development capacity with team-first features.",
											}),
										],
									}),
								}),
								(0, b.jsx)("div", {
									className: "relative mx-auto md:max-w-[1200px]",
									children: (0, b.jsx)("ul", {
										className:
											"grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6",
										children: y.map((a, c) => {
											let d = a.icon
											return (0, b.jsxs)(
												"li",
												{
													className:
														"rounded-3xl bg-card outline outline-border/50 hover:outline-8 shadow-xl p-8 h-full w-full group transition-all hover:shadow-2xl hover:shadow-violet-800/30 relative",
													children: [
														d &&
															(0, b.jsx)("div", {
																className:
																	"size-15 p-3 rounded-full flex items-center justify-center shadow-lg absolute -top-4 -right-2 transition-all outline outline-foreground/5 bg-card group-hover:outline-3 group-hover:scale-105",
																children: (0, b.jsx)(d, {
																	className: "size-5 text-violet-500",
																}),
															}),
														(0, b.jsx)("h3", {
															className: "text-xl font-bold tracking-tight mb-2",
															children: a.title,
														}),
														(0, b.jsx)("div", {
															className: "text-sm text-muted-foreground leading-relaxed",
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
											className: "text-4xl font-bold tracking-tight mb-4",
											children: "Complete Team Management",
										}),
										(0, b.jsx)("p", {
											className: "text-xl text-muted-foreground max-w-2xl mx-auto",
											children:
												"Access all capabilities from your Organization Settings. Everything you need to manage your team in one place.",
										}),
									],
								}),
								(0, b.jsx)("div", {
									className:
										"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative",
									children: z.map((a, c) => {
										let d = a.icon
										return (0, b.jsxs)(
											"div",
											{
												className:
													"relative h-full border border-border rounded-2xl bg-background p-8 transition-all duration-300",
												children: [
													(0, b.jsx)(d, { className: "size-6 text-foreground/80" }),
													(0, b.jsx)("h3", {
														className: "mb-3 mt-3 text-xl font-semibold text-foreground",
														children: a.title,
													}),
													(0, b.jsx)("p", {
														className: "leading-relaxed font-light text-muted-foreground",
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
										children: "Ready to scale your team's development?",
									}),
									(0, b.jsx)("p", {
										className: "mx-auto mb-10 max-w-2xl text-lg text-muted-foreground",
										children: "Start your free 14-day trial today. Got questions? Get in touch.",
									}),
									(0, b.jsxs)("div", {
										className:
											"flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0",
										children: [
											(0, b.jsx)(o.Button, {
												size: "lg",
												className:
													"bg-foreground text-background hover:bg-foreground/90 transition-all duration-300",
												asChild: !0,
												children: (0, b.jsxs)("a", {
													href:
														s.EXTERNAL_LINKS.CLOUD_APP_SIGNUP +
														"?redirect_url=/checkout/team",
													target: "_blank",
													rel: "noopener noreferrer",
													className: "flex items-center justify-center",
													children: [
														"Start Free Trial",
														(0, b.jsx)(c.ArrowRight, { className: "ml-2 h-4 w-4" }),
													],
												}),
											}),
											(0, b.jsx)(o.Button, {
												variant: "outline",
												size: "lg",
												className: "backdrop-blur-sm",
												asChild: !0,
												children: (0, b.jsx)("a", {
													href: s.EXTERNAL_LINKS.SUPPORT,
													className: "flex items-center justify-center",
													children: "Contact Support",
												}),
											}),
										],
									}),
								],
							}),
						}),
					}),
				],
			})
		}
		a.s(["default", () => A, "metadata", 0, x], 99119)
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__69ad1599._.js.map
