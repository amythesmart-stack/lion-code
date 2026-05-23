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
	75440,
	(a) => {
		"use strict"
		let b = (0, a.i(1152).default)("zap", [
			[
				"path",
				{
					d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
					key: "1xq2db",
				},
			],
		])
		a.s(["Zap", () => b], 75440)
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
	43305,
	16906,
	65363,
	(a) => {
		"use strict"
		var b = a.i(1152)
		let c = (0, b.default)("credit-card", [
			["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
			["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
		])
		a.s(["CreditCard", () => c], 43305)
		let d = (0, b.default)("git-branch", [
			["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
			["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
			["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
			["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }],
		])
		a.s(["GitBranch", () => d], 16906)
		let e = (0, b.default)("link-2", [
			["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
			["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
			["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
		])
		a.s(["Link2", () => e], 65363)
	},
	73481,
	(a) => {
		"use strict"
		a.s(["SlackThreadDemo", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call SlackThreadDemo() from the server but SlackThreadDemo is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/slack/slack-thread-demo.tsx <module evaluation>",
			"SlackThreadDemo",
		)
	},
	13266,
	(a) => {
		"use strict"
		a.s(["SlackThreadDemo", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call SlackThreadDemo() from the server but SlackThreadDemo is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/slack/slack-thread-demo.tsx",
			"SlackThreadDemo",
		)
	},
	66735,
	(a) => {
		"use strict"
		a.i(73481)
		var b = a.i(13266)
		a.n(b)
	},
	13652,
	(a) => {
		"use strict"
		var b = a.i(1020),
			c = a.i(83355),
			d = a.i(26712),
			e = a.i(43305),
			f = a.i(16906)
		let g = (0, a.i(1152).default)("graduation-cap", [
			[
				"path",
				{
					d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
					key: "j76jl0",
				},
			],
			["path", { d: "M22 10v6", key: "1lu8f3" }],
			["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
		])
		var h = a.i(65363),
			i = a.i(7126),
			j = a.i(58398),
			k = a.i(49105),
			l = a.i(16109),
			m = a.i(98491),
			n = a.i(75440)
		a.i(82672)
		var o = a.i(63080),
			p = a.i(66735)
		a.i(76692)
		var q = a.i(72036),
			r = a.i(93125),
			s = a.i(8258),
			t = a.i(34508)
		let u = "Roo Code for Slack",
			v =
				"Mention @Roomote in any channel to explain code, plan features, or ship a PR, all without leaving the conversation.",
			w = "Your AI Team in Slack",
			x = "/slack",
			y = {
				title: u,
				description: v,
				alternates: { canonical: `${s.SEO.url}${x}` },
				openGraph: {
					title: u,
					description: v,
					url: `${s.SEO.url}${x}`,
					siteName: s.SEO.name,
					images: [{ url: (0, t.ogImageUrl)(u, w), width: 1200, height: 630, alt: u }],
					locale: s.SEO.locale,
					type: "website",
				},
				twitter: { card: s.SEO.twitterCard, title: u, description: v, images: [(0, t.ogImageUrl)(u, w)] },
				keywords: [
					...s.SEO.keywords,
					"slack integration",
					"slack bot",
					"AI in slack",
					"code assistant slack",
					"@Roomote",
					"team collaboration",
				],
			},
			z = [
				{
					icon: f.GitBranch,
					title: "Discussion to PR.",
					description:
						"Your team discusses a feature in Slack. @Roomote turns the discussion into a plan. Then builds it. All without leaving the conversation.",
				},
				{
					icon: d.Brain,
					title: "Thread-aware.",
					description:
						'@Roomote reads the full thread before responding. Ask "Can we add caching here?" and it knows exactly what code you mean.',
				},
				{
					icon: h.Link2,
					title: "Chain agents.",
					description:
						"Start with a Planner to spec it out. Then call the Coder to build it. Multi-step workflows, one Slack thread.",
				},
				{
					icon: m.Users,
					title: "Open to all.",
					description:
						"Anyone on your team can ask @Roomote to fix bugs, build features, or investigate issues. Engineering gets looped in only when needed.",
				},
				{
					icon: g,
					title: "Built-in learning.",
					description: "Public channel mentions show everyone how to leverage agents. Learn by watching.",
				},
				{
					icon: k.Shield,
					title: "Safe by design.",
					description: "Agents never touch main/master directly. They produce branches and PRs. You approve.",
				},
			],
			A = [
				{
					step: 1,
					title: "Turn the discussion into a plan",
					description: "Your team discusses a feature. When it gets complex, summon the Planner agent.",
				},
				{
					step: 2,
					title: "Refine the plan in the thread",
					description:
						"The team reviews the spec in the thread, suggests changes, asks questions. Mention @Roomote again to refine.",
				},
				{
					step: 3,
					title: "Build the plan",
					description: "Once the plan looks good, hand it off to the Coder agent to implement.",
				},
				{
					step: 4,
					title: "Review and ship",
					description: "The Coder creates a branch and opens a PR. The team reviews, and the feature ships.",
				},
			],
			B = [
				{
					icon: e.CreditCard,
					title: "1. Team Plan",
					description: "Slack requires a Team plan.",
					link: { href: r.EXTERNAL_LINKS.CLOUD_APP_TEAM_TRIAL, text: "Start a free trial" },
				},
				{
					icon: j.Settings,
					title: "2. Connect",
					description: 'Sign in to Roo Code Cloud and go to Settings. Click "Connect" next to Slack.',
				},
				{
					icon: l.Slack,
					title: "3. Authorize",
					description: "Authorize the Roo Code app to access your Slack workspace.",
				},
				{
					icon: i.MessageSquare,
					title: "4. Add to channels",
					description: "Add @Roomote to the channels where you want it available.",
				},
			]
		function C() {
			return (0, b.jsxs)(b.Fragment, {
				children: [
					(0, b.jsxs)("section", {
						className: "relative flex pt-32 pb-20 items-center overflow-hidden",
						children: [
							(0, b.jsx)(o.AnimatedBackground, {}),
							(0, b.jsx)("div", {
								className:
									"container relative flex flex-col items-center h-full z-10 mx-auto px-4 sm:px-6 lg:px-8",
								children: (0, b.jsxs)("div", {
									className:
										"grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12",
									children: [
										(0, b.jsxs)("div", {
											className: "text-center lg:text-left",
											children: [
												(0, b.jsxs)("div", {
													className:
														"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-6",
													children: [
														(0, b.jsx)(l.Slack, { className: "size-4" }),
														"Powered by Roo Code Cloud",
													],
												}),
												(0, b.jsxs)("h1", {
													className:
														"text-4xl font-bold tracking-tight mb-6 md:text-5xl lg:text-6xl",
													children: [
														(0, b.jsx)("span", {
															className: "text-violet-500",
															children: "@Roomote:",
														}),
														" Your AI Team in Slack",
													],
												}),
												(0, b.jsx)("p", {
													className:
														"text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0",
													children:
														"Mention @Roomote in any channel to explain code, plan features, or ship a PR, all without leaving the conversation.",
												}),
												(0, b.jsxs)("div", {
													className:
														"flex flex-col sm:flex-row gap-4 justify-center lg:justify-start",
													children: [
														(0, b.jsx)(q.Button, {
															size: "xl",
															className:
																"bg-violet-600 hover:bg-violet-700 text-white transition-all duration-300 shadow-lg hover:shadow-violet-500/25",
															asChild: !0,
															children: (0, b.jsxs)("a", {
																href: r.EXTERNAL_LINKS.CLOUD_APP_SIGNUP,
																target: "_blank",
																rel: "noopener noreferrer",
																className: "flex items-center justify-center",
																children: [
																	"Get Started",
																	(0, b.jsx)(c.ArrowRight, {
																		className: "ml-2 size-5",
																	}),
																],
															}),
														}),
														(0, b.jsx)(q.Button, {
															variant: "outline",
															size: "xl",
															className: "backdrop-blur-sm",
															asChild: !0,
															children: (0, b.jsx)("a", {
																href: r.EXTERNAL_LINKS.SLACK_DOCS,
																target: "_blank",
																rel: "noopener noreferrer",
																className: "flex items-center justify-center",
																children: "Read the Docs",
															}),
														}),
													],
												}),
											],
										}),
										(0, b.jsx)("div", {
											className: "flex justify-center lg:justify-end",
											children: (0, b.jsx)(p.SlackThreadDemo, {}),
										}),
									],
								}),
							}),
						],
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
											className: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
											children: "Why your team will love using Roo Code in Slack",
										}),
										(0, b.jsx)("p", {
											className: "text-xl text-muted-foreground max-w-2xl mx-auto",
											children:
												"AI agents that understand context, chain together for complex work, and keep your team in control.",
										}),
									],
								}),
								(0, b.jsx)("div", {
									className:
										"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative",
									children: z.map((a, c) => {
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
						className: "relative overflow-hidden border-t border-border py-24 lg:py-32",
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
								(0, b.jsxs)("div", {
									className: "mx-auto mb-12 max-w-5xl text-center",
									children: [
										(0, b.jsxs)("div", {
											className:
												"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6",
											children: [(0, b.jsx)(n.Zap, { className: "size-4" }), "Featured Workflow"],
										}),
										(0, b.jsx)("h2", {
											className: "text-3xl font-bold tracking-tight sm:text-5xl mb-4",
											children: "Thread to Shipped Feature",
										}),
										(0, b.jsx)("p", {
											className: "text-xl text-muted-foreground max-w-2xl mx-auto",
											children:
												"Turn Slack discussions into working code. No context lost, no meetings needed.",
										}),
									],
								}),
								(0, b.jsx)("div", {
									className: "relative mx-auto max-w-6xl",
									children: (0, b.jsxs)("div", {
										className: "grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-center",
										children: [
											(0, b.jsx)("div", {
												className:
													"lg:col-span-3 overflow-hidden rounded-2xl border border-border bg-background shadow-lg",
												children: (0, b.jsx)("iframe", {
													className: "aspect-video w-full",
													src: "https://www.youtube-nocookie.com/embed/dJM_8HHGe1E?rel=0",
													title: "Roo Code Slack Integration Demo",
													allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
													referrerPolicy: "strict-origin-when-cross-origin",
													allowFullScreen: !0,
												}),
											}),
											(0, b.jsx)("div", {
												className: "lg:col-span-2 space-y-3",
												children: A.map((a) =>
													(0, b.jsx)(
														"div",
														{
															className:
																"relative border border-border rounded-xl bg-background p-4 transition-all duration-300 hover:shadow-md hover:border-blue-500/30",
															children: (0, b.jsxs)("div", {
																className: "flex items-start gap-3",
																children: [
																	(0, b.jsx)("div", {
																		className:
																			"bg-blue-100 dark:bg-blue-900/30 w-7 h-7 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold text-xs shrink-0 mt-0.5",
																		children: a.step,
																	}),
																	(0, b.jsxs)("div", {
																		className: "min-w-0",
																		children: [
																			(0, b.jsx)("h3", {
																				className:
																					"text-base font-semibold text-foreground mb-0.5",
																				children: a.title,
																			}),
																			(0, b.jsx)("p", {
																				className:
																					"text-sm leading-snug text-muted-foreground",
																				children: a.description,
																			}),
																		],
																	}),
																],
															}),
														},
														a.step,
													),
												),
											}),
										],
									}),
								}),
							],
						}),
					}),
					(0, b.jsx)("section", {
						className: "py-24 bg-muted/30",
						children: (0, b.jsxs)("div", {
							className: "container mx-auto px-4 sm:px-6 lg:px-8",
							children: [
								(0, b.jsxs)("div", {
									className: "text-center mb-16",
									children: [
										(0, b.jsx)("h2", {
											className: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
											children: "Get started in minutes",
										}),
										(0, b.jsx)("p", {
											className: "text-xl text-muted-foreground max-w-2xl mx-auto",
											children: "Connect your Slack workspace and start working with AI agents.",
										}),
									],
								}),
								(0, b.jsx)("div", {
									className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto",
									children: B.map((a, c) => {
										let d = a.icon
										return (0, b.jsxs)(
											"div",
											{
												className: "text-center",
												children: [
													(0, b.jsx)("div", {
														className:
															"bg-violet-100 dark:bg-violet-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6",
														children: (0, b.jsx)(d, {
															className: "size-8 text-violet-600 dark:text-violet-400",
														}),
													}),
													(0, b.jsx)("h3", {
														className: "text-lg font-semibold mb-2",
														children: a.title,
													}),
													(0, b.jsxs)("p", {
														className: "text-muted-foreground",
														children: [
															a.description,
															a.link &&
																(0, b.jsxs)(b.Fragment, {
																	children: [
																		" ",
																		(0, b.jsxs)("a", {
																			href: a.link.href,
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className:
																				"text-violet-600 dark:text-violet-400 hover:underline",
																			children: [a.link.text, " →"],
																		}),
																	],
																}),
														],
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
										children: "Start using Roo Code in Slack",
									}),
									(0, b.jsx)("p", {
										className: "mx-auto mb-10 max-w-2xl text-lg text-muted-foreground",
										children: "Start a free 14 day Team trial.",
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
												href: r.EXTERNAL_LINKS.CLOUD_APP_TEAM_TRIAL,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "flex items-center justify-center",
												children: [
													"Start free trial",
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
		a.s(["default", () => C, "metadata", 0, y, "revalidate", 0, 3600], 13652)
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__768c63ea._.js.map
