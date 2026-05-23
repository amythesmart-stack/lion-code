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
	53566,
	(a) => {
		"use strict"
		let b = (0, a.i(1152).default)("circle-check-big", [
			["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
			["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
		])
		a.s(["CheckCircle", () => b], 53566)
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
	9163,
	(a) => {
		"use strict"
		a.s(["LinearIssueDemo", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call LinearIssueDemo() from the server but LinearIssueDemo is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/linear/linear-issue-demo.tsx <module evaluation>",
			"LinearIssueDemo",
		)
	},
	28444,
	(a) => {
		"use strict"
		a.s(["LinearIssueDemo", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call LinearIssueDemo() from the server but LinearIssueDemo is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/linear/linear-issue-demo.tsx",
			"LinearIssueDemo",
		)
	},
	28628,
	(a) => {
		"use strict"
		a.i(9163)
		var b = a.i(28444)
		a.n(b)
	},
	15752,
	(a) => {
		"use strict"
		var b = a.i(1020),
			c = a.i(83355),
			d = a.i(53566),
			e = a.i(43305),
			f = a.i(1152)
		let g = (0, f.default)("eye", [
			[
				"path",
				{
					d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
					key: "1nclc0",
				},
			],
			["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
		])
		var h = a.i(16906)
		let i = (0, f.default)("git-pull-request", [
			["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
			["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
			["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
			["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }],
		])
		var j = a.i(65363),
			k = a.i(7126),
			l = a.i(58398),
			m = a.i(49105)
		a.i(82672)
		var n = a.i(63080),
			o = a.i(28628)
		a.i(76692)
		var p = a.i(72036),
			q = a.i(93125),
			r = a.i(8258),
			s = a.i(34508)
		let t = "Roo Code for Linear",
			u = "Assign development work to @Roo Code directly from Linear. Get PRs back without switching tools.",
			v = "Turn Linear Issues into Pull Requests",
			w = "/linear",
			x = {
				title: t,
				description: u,
				alternates: { canonical: `${r.SEO.url}${w}` },
				openGraph: {
					title: t,
					description: u,
					url: `${r.SEO.url}${w}`,
					siteName: r.SEO.name,
					images: [{ url: (0, s.ogImageUrl)(t, v), width: 1200, height: 630, alt: t }],
					locale: r.SEO.locale,
					type: "website",
				},
				twitter: { card: r.SEO.twitterCard, title: t, description: u, images: [(0, s.ogImageUrl)(t, v)] },
				keywords: [
					...r.SEO.keywords,
					"linear integration",
					"issue to PR",
					"AI in Linear",
					"engineering workflow automation",
					"Roo Code Cloud",
				],
			},
			y = [
				{
					icon: h.GitBranch,
					title: "Work where you already work.",
					description:
						"Assign development work to @Roo Code directly from Linear. No new tools to learn, no context switching required.",
				},
				{
					icon: g,
					title: "Progress is visible.",
					description:
						"Watch progress unfold in real-time. Roo Code posts updates as comments, so your whole team stays in the loop.",
				},
				{
					icon: k.MessageSquare,
					title: "Mention for refinement.",
					description:
						'Need changes? Just comment "@Roo Code also add dark mode support" and the agent picks up where it left off.',
				},
				{
					icon: j.Link2,
					title: "Full traceability.",
					description:
						"Every PR links back to the originating issue. Every issue shows its linked PR. Your audit trail stays clean.",
				},
				{
					icon: l.Settings,
					title: "Organization-level setup.",
					description:
						"Connect once, use everywhere. Your team members can assign issues to @Roo Code without individual configuration.",
				},
				{
					icon: m.Shield,
					title: "Safe by design.",
					description:
						"Agents never touch main/master directly. They produce branches and PRs. You review and approve before merge.",
				},
			],
			z = [
				{
					icon: e.CreditCard,
					title: "1. Team Plan",
					description: "Linear integration requires a Team plan.",
					link: { href: q.EXTERNAL_LINKS.CLOUD_APP_TEAM_TRIAL, text: "Start a free trial" },
				},
				{
					icon: i,
					title: "2. Connect GitHub",
					description: "Link your repositories so Roo Code can open PRs on your behalf.",
				},
				{
					icon: l.Settings,
					title: "3. Connect Linear",
					description: "Authorize via OAuth. No API keys to manage or rotate.",
				},
				{
					icon: d.CheckCircle,
					title: "4. Link & Start",
					description: "Map your Linear project to a repo, then assign or mention @Roo Code.",
				},
			]
		function A({ className: a }) {
			return (0, b.jsx)("svg", {
				className: a,
				viewBox: "0 0 100 100",
				fill: "currentColor",
				xmlns: "http://www.w3.org/2000/svg",
				children: (0, b.jsx)("path", {
					d: "M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z",
				}),
			})
		}
		function B() {
			return (0, b.jsxs)(b.Fragment, {
				children: [
					(0, b.jsxs)("section", {
						className: "relative flex pt-32 pb-20 items-center overflow-hidden",
						children: [
							(0, b.jsx)(n.AnimatedBackground, {}),
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
														"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6",
													children: [
														(0, b.jsx)(A, { className: "size-4" }),
														"Powered by Roo Code Cloud",
													],
												}),
												(0, b.jsxs)("h1", {
													className:
														"text-4xl font-bold tracking-tight mb-6 md:text-5xl lg:text-6xl",
													children: [
														"Turn Linear Issues into ",
														(0, b.jsx)("span", {
															className: "text-indigo-500",
															children: "Pull Requests",
														}),
													],
												}),
												(0, b.jsx)("p", {
													className:
														"text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0",
													children:
														"Assign development work to @Roo Code directly from Linear. Get PRs back without switching tools.",
												}),
												(0, b.jsx)("div", {
													className:
														"flex flex-col sm:flex-row gap-4 justify-center lg:justify-start",
													children: (0, b.jsx)(p.Button, {
														size: "xl",
														className:
															"bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 shadow-lg hover:shadow-indigo-500/25",
														asChild: !0,
														children: (0, b.jsxs)("a", {
															href: q.EXTERNAL_LINKS.CLOUD_APP_SIGNUP_HOME,
															target: "_blank",
															rel: "noopener noreferrer",
															className: "flex items-center justify-center",
															children: [
																"Get Started",
																(0, b.jsx)(c.ArrowRight, { className: "ml-2 size-5" }),
															],
														}),
													}),
												}),
											],
										}),
										(0, b.jsx)("div", {
											className: "flex justify-center lg:justify-end",
											children: (0, b.jsx)(o.LinearIssueDemo, {}),
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
											"absolute left-1/2 top-1/2 h-[800px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 dark:bg-indigo-700/20 blur-[140px]",
									}),
								}),
								(0, b.jsxs)("div", {
									className: "text-center mb-16",
									children: [
										(0, b.jsx)("h2", {
											className: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
											children: "Why your team will love using Roo Code in Linear",
										}),
										(0, b.jsx)("p", {
											className: "text-xl text-muted-foreground max-w-2xl mx-auto",
											children:
												"AI agents that understand context, keep your team in the loop, and deliver PRs you can review.",
										}),
									],
								}),
								(0, b.jsx)("div", {
									className:
										"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative",
									children: y.map((a, c) => {
										let d = a.icon
										return (0, b.jsxs)(
											"div",
											{
												className:
													"bg-background p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300",
												children: [
													(0, b.jsx)("div", {
														className:
															"bg-indigo-100 dark:bg-indigo-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6",
														children: (0, b.jsx)(d, {
															className: "size-6 text-indigo-600 dark:text-indigo-400",
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
											children: "Connect Linear and start assigning issues to AI.",
										}),
									],
								}),
								(0, b.jsx)("div", {
									className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto",
									children: z.map((a, c) => {
										let d = a.icon
										return (0, b.jsxs)(
											"div",
											{
												className: "text-center",
												children: [
													(0, b.jsx)("div", {
														className:
															"bg-indigo-100 dark:bg-indigo-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6",
														children: (0, b.jsx)(d, {
															className: "size-8 text-indigo-600 dark:text-indigo-400",
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
																				"text-indigo-600 dark:text-indigo-400 hover:underline",
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
									"mx-auto max-w-4xl rounded-3xl border border-border/50 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-blue-500/5 p-8 text-center shadow-2xl backdrop-blur-xl dark:border-white/10 sm:p-16",
								children: [
									(0, b.jsx)("h2", {
										className: "mb-6 text-3xl font-bold tracking-tight sm:text-4xl",
										children: "Start using Roo Code in Linear",
									}),
									(0, b.jsx)("p", {
										className: "mx-auto mb-10 max-w-2xl text-lg text-muted-foreground",
										children: "Start a free 14 day Team trial.",
									}),
									(0, b.jsx)("div", {
										className:
											"flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0",
										children: (0, b.jsx)(p.Button, {
											size: "lg",
											className:
												"bg-foreground text-background hover:bg-foreground/90 transition-all duration-300",
											asChild: !0,
											children: (0, b.jsxs)("a", {
												href: q.EXTERNAL_LINKS.CLOUD_APP_TEAM_TRIAL,
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
		a.s(["default", () => B, "metadata", 0, x, "revalidate", 0, 3600], 15752)
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__27fe36d2._.js.map
