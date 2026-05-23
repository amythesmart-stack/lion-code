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
	85548,
	(a) => {
		"use strict"
		var b = a.i(1020),
			c = a.i(98491),
			d = a.i(83355),
			e = a.i(1152)
		let f = (0, e.default)("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]),
			g = (0, e.default)("square-terminal", [
				["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }],
				["path", { d: "M11 13h4", key: "1p7l4v" }],
				["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
			]),
			h = (0, e.default)("corner-right-down", [
				["path", { d: "m10 15 5 5 5-5", key: "1hpjnr" }],
				["path", { d: "M4 4h7a4 4 0 0 1 4 4v12", key: "wcbgct" }],
			])
		var i = a.i(62445),
			j = a.i(83733)
		a.i(76692)
		var k = a.i(72036)
		a.i(82672)
		var l = a.i(63080),
			m = a.i(8258),
			n = a.i(34508),
			o = a.i(93125)
		let p = "Roo Code Pricing",
			q =
				"Simple, transparent pricing for all Roo Code products. The VS Code extension is free forever. Choose the cloud plan that fits your needs.",
			r = "/pricing",
			s = {
				title: p,
				description: q,
				alternates: { canonical: `${m.SEO.url}${r}` },
				openGraph: {
					title: p,
					description: q,
					url: `${m.SEO.url}${r}`,
					siteName: m.SEO.name,
					images: [{ url: (0, n.ogImageUrl)(p, ""), width: 1200, height: 630, alt: p }],
					locale: m.SEO.locale,
					type: "website",
				},
				twitter: { card: m.SEO.twitterCard, title: p, description: q, images: [(0, n.ogImageUrl)(p, "")] },
				keywords: [
					...m.SEO.keywords,
					"pricing",
					"plans",
					"subscription",
					"cloud pricing",
					"AI development pricing",
					"team pricing",
					"enterprise pricing",
				],
			},
			t = [
				{
					name: "VS Code Extension",
					icon: g,
					price: "Free",
					priceSuffix: "inference",
					description: "The best local coding agent",
					features: [
						"Unlimited local use",
						"Bring your own model",
						"Powerful, extensible modes",
						"Community support",
					],
					cta: { text: "Install Now", href: o.EXTERNAL_LINKS.MARKETPLACE },
				},
				{
					name: "Cloud Free",
					icon: i.Cloud,
					price: "$0",
					period: "/mo",
					priceSuffix: "credits",
					creditPrice: "$5",
					description: "For AI-forward engineers",
					featuresIntro: "Go beyond the extension with",
					features: [
						"Access to Cloud Agents: fully autonomous development you can kick off from GitHub and the web",
						"Access to the Roo Code Router",
						"Follow your tasks from anywhere",
						"Share tasks with friends and co-workers",
						"Token usage analytics",
						"Professional support",
					],
					cta: { text: "Sign up", href: o.EXTERNAL_LINKS.CLOUD_APP_SIGNUP },
				},
				{
					name: "Cloud Team",
					icon: c.Users,
					price: "$99",
					priceSuffix: "credits",
					period: "/mo",
					creditPrice: "$5",
					trial: "Free for 14 days, then",
					description: "For AI-forward teams",
					featuresIntro: "Everything in Free +",
					features: [
						"Unlimited users (no per-seat cost)",
						"Shared configuration & policies",
						"Centralized billing",
						"Slack and Linear integrations",
					],
					cta: { text: "Sign up", href: o.EXTERNAL_LINKS.CLOUD_APP_SIGNUP + "?redirect_url=/billing" },
					learnMoreLink: "/cloud/team",
				},
			]
		function u() {
			return (0, b.jsxs)(b.Fragment, {
				children: [
					(0, b.jsx)(l.AnimatedBackground, {}),
					(0, b.jsx)("section", {
						className: "relative overflow-hidden pt-12 pb-10",
						children: (0, b.jsx)("div", {
							className: "container relative z-10 mx-auto px-4 sm:px-6 lg:px-8",
							children: (0, b.jsxs)("div", {
								className: "text-center",
								children: [
									(0, b.jsx)("h1", {
										className: "text-5xl font-bold tracking-tight",
										children: "Roo Code Pricing",
									}),
									(0, b.jsx)("p", {
										className: "mt-4 text-lg text-muted-foreground",
										children:
											"For all of our products: the Roo Code VS Code Extension, Roo Code Cloud and the Roo Code Router.",
									}),
								],
							}),
						}),
					}),
					(0, b.jsx)("section", {
						className: "",
						children: (0, b.jsxs)("div", {
							className: "container mx-auto px-4 sm:px-6 lg:px-8",
							children: [
								(0, b.jsx)("div", {
									className: "mx-auto grid max-w-6xl gap-4 md:grid-cols-3 md:px-4",
									children: t.map((a) => {
										let c = a.icon
										return (0, b.jsxs)(
											"div",
											{
												className:
													"relative group p-6 flex flex-col justify-start bg-background rounded-2xl outline outline-2 outline-border/50 hover:outline-8 transition-all shadow-xl hover:shadow-2xl hover:outline-6",
												children: [
													(0, b.jsxs)("div", {
														className: "mb-6",
														children: [
															(0, b.jsx)("div", {
																className: "flex items-center justify-between",
																children: (0, b.jsx)("h3", {
																	className: "text-2xl font-bold tracking-tight",
																	children: a.name,
																}),
															}),
															(0, b.jsx)("p", {
																className: "text-sm font-medium",
																children: a.description,
															}),
														],
													}),
													(0, b.jsx)("div", {
														className:
															"absolute -right-2 -top-4 rounded-full bg-card shadow-md p-4 outline outline-2 outline-border/50 group-hover:scale-105 group-hover:outline-8 transition-all",
														children: (0, b.jsx)(c, {
															className: "size-6",
															strokeWidth: 1.5,
														}),
													}),
													(0, b.jsxs)("div", {
														className: "grow mb-8 md:h-[214px]",
														children: [
															(0, b.jsxs)("p", {
																className:
																	"text-sm text-muted-foreground font-light mb-2",
																children: [a.featuresIntro, " "],
															}),
															(0, b.jsx)("ul", {
																className: "space-y-3 my-0",
																children: a.features.map((a) =>
																	(0, b.jsxs)(
																		"li",
																		{
																			className: "flex items-start gap-2",
																			children: [
																				(0, b.jsx)(f, {
																					className:
																						"mt-0.5 h-4 w-4 text-muted-foreground shrink-0",
																				}),
																				(0, b.jsx)("span", {
																					className: "text-sm",
																					children: a,
																				}),
																			],
																		},
																		a,
																	),
																),
															}),
															a.learnMoreLink &&
																(0, b.jsx)("div", {
																	className: "mt-2",
																	children: (0, b.jsx)(j.default, {
																		href: a.learnMoreLink,
																		className:
																			"text-sm text-violet-600 dark:text-violet-400 hover:underline",
																		children: "Learn more →",
																	}),
																}),
														],
													}),
													(0, b.jsx)("p", {
														className: "text-base font-light",
														children: a.trial,
													}),
													(0, b.jsxs)("p", {
														className: "text-xl mb-1 tracking-tight font-light",
														children: [
															(0, b.jsx)("strong", {
																className: "font-bold",
																children: a.price,
															}),
															a.period,
															" + ",
															a.priceSuffix,
															(0, b.jsx)(h, {
																className: "inline size-4 ml-1 relative top-0.5",
															}),
														],
													}),
													(0, b.jsxs)("p", {
														className: "text-sm text-muted-foreground mb-5",
														children: [
															a.creditPrice &&
																(0, b.jsxs)(b.Fragment, {
																	children: [
																		"Cloud Agents: ",
																		a.creditPrice,
																		"/hour in credits",
																		(0, b.jsx)("br", {}),
																	],
																}),
															"Inference:",
															" ",
															(0, b.jsx)(j.default, {
																href: "/provider",
																className: "underline hover:no-underline",
																children: "Roo Provider pricing",
															}),
															" ",
															"credits or",
															" ",
															(0, b.jsx)("abbr", {
																title: "Bring Your Own Model",
																className: "cursor-help",
																children: "BYOM",
															}),
														],
													}),
													(0, b.jsx)(k.Button, {
														size: "lg",
														className: "w-full transition-all duration-300",
														asChild: !0,
														children: (0, b.jsxs)(j.default, {
															href: a.cta.href,
															className: "flex items-center justify-center",
															children: [a.cta.text, (0, b.jsx)(d.ArrowRight, {})],
														}),
													}),
													(0, b.jsx)("div", {
														className:
															"h-[28px] absolute bottom-[-31px] left-1/2 w-[4px] transition-colors bg-gradient-to-b from-transparent to-violet-700/20 group-hover:from-violet-500/50 group-hover:to-violet-500/20",
													}),
												],
											},
											a.name,
										)
									}),
								}),
								(0, b.jsxs)("div", {
									className:
										"max-w-6xl mx-auto mt-8 p-7 flex flex-col md:flex-row gap-8 md:gap-4 bg-violet-200/20 outline-violet-700/20 outline outline-1 rounded-2xl transition-all shadow-none",
									children: [
										(0, b.jsxs)("div", {
											className: "md:border-r md:pr-4",
											children: [
												(0, b.jsx)("h3", {
													className: "text-lg font-medium mb-1",
													children: "Roo Code Router",
												}),
												(0, b.jsx)("div", {
													className: "text-sm text-muted-foreground",
													children: (0, b.jsxs)("p", {
														className: "",
														children: [
															"On any plan, you can use your own LLM provider API key or use the built-in Roo Code Router – curated models to work with Roo with no markup, including the latest Gemini, GPT and Claude. Paid with credits.",
															(0, b.jsx)(j.default, {
																href: "/provider",
																className: "underline hover:no-underline ml-1",
																children: "See per model pricing.",
															}),
														],
													}),
												}),
											],
										}),
										(0, b.jsxs)("div", {
											className: "",
											children: [
												(0, b.jsx)("h3", {
													className: "text-lg font-medium mb-1",
													children: "Credits",
												}),
												(0, b.jsx)("p", {
													className: "text-sm text-muted-foreground",
													children:
														"Credits are pre-paid, in dollars, and are deducted with usage for inference and Cloud Agent runs. You're always in control of your spend, no surprises.",
												}),
											],
										}),
									],
								}),
							],
						}),
					}),
					(0, b.jsx)("section", {
						className: "bg-background py-16 my-16 border-t border-b relative z-50",
						children: (0, b.jsxs)("div", {
							className: "container mx-auto px-4 sm:px-6 lg:px-8",
							children: [
								(0, b.jsx)("div", {
									className: "mx-auto max-w-3xl text-center",
									children: (0, b.jsx)("h2", {
										className: "text-3xl font-bold tracking-tight sm:text-4xl",
										children: "Frequently Asked Questions",
									}),
								}),
								(0, b.jsxs)("div", {
									className: "mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2",
									children: [
										(0, b.jsxs)("div", {
											className: "rounded-xl border border-border bg-card p-6",
											children: [
												(0, b.jsx)("h3", {
													className: "font-semibold",
													children: "Wait, is Roo Code free or not?",
												}),
												(0, b.jsx)("p", {
													className: "mt-2 text-sm text-muted-foreground",
													children:
														"Yes! The Roo Code VS Code extension is open source and free forever. The extension acts as a powerful AI coding assistant right in your editor. These are the prices for Roo Code Cloud.",
												}),
											],
										}),
										(0, b.jsxs)("div", {
											className: "rounded-xl border border-border bg-card p-6",
											children: [
												(0, b.jsx)("h3", {
													className: "font-semibold",
													children: "Is there a free trial?",
												}),
												(0, b.jsx)("p", {
													className: "mt-2 text-sm text-muted-foreground",
													children:
														"Yes, all paid plans come with a 14-day free trial to try out functionality.",
												}),
												(0, b.jsx)("p", {
													className: "mt-2 text-sm text-muted-foreground",
													children: "To use Cloud Agents, you can buy credits.",
												}),
											],
										}),
										(0, b.jsxs)("div", {
											className: "rounded-xl border border-border bg-card p-6",
											children: [
												(0, b.jsx)("h3", {
													className: "font-semibold",
													children: "How do credits work?",
												}),
												(0, b.jsx)("p", {
													className: "mt-2 text-sm text-muted-foreground",
													children: "Roo Code Cloud credits can be used in two ways:",
												}),
												(0, b.jsxs)("ul", {
													className: "mt-2 list-disc pl-5 text-sm text-muted-foreground",
													children: [
														(0, b.jsxs)("li", {
															children: [
																"To pay for Cloud Agents running time ($",
																5,
																"/hour)",
															],
														}),
														(0, b.jsxs)("li", {
															children: [
																"To pay for AI model inference costs (",
																(0, b.jsx)("a", {
																	href: "/provider",
																	target: "_blank",
																	rel: "noopener noreferrer",
																	className: "underline",
																	children: "varies by model",
																}),
																")",
															],
														}),
													],
												}),
												(0, b.jsxs)("p", {
													className: "mt-2 text-sm text-muted-foreground",
													children: [
														"To cover our infrastructure costs, we charge $",
														5,
														"/hour while the agent is running (independent of inference costs).",
													],
												}),
												(0, b.jsx)("p", {
													className: "mt-2 text-sm text-muted-foreground",
													children:
														"There are no markups, no tiers, no dumbing-down of models to increase our profit.",
												}),
											],
										}),
										(0, b.jsxs)("div", {
											className: "rounded-xl border border-border bg-card p-6",
											children: [
												(0, b.jsx)("h3", {
													className: "font-semibold",
													children: "Do I need a credit card for the free trial?",
												}),
												(0, b.jsx)("p", {
													className: "mt-2 text-sm text-muted-foreground",
													children:
														"Yes, but you won't be charged until your trial ends, except for credit purchases.",
												}),
												(0, b.jsx)("p", {
													className: "mt-2 text-sm text-muted-foreground",
													children: "You can cancel anytime with one click.",
												}),
											],
										}),
										(0, b.jsxs)("div", {
											className: "rounded-xl border border-border bg-card p-6",
											children: [
												(0, b.jsx)("h3", {
													className: "font-semibold",
													children: "What payment methods do you accept?",
												}),
												(0, b.jsx)("p", {
													className: "mt-2 text-sm text-muted-foreground",
													children:
														"We accept all major credit cards, debit cards, and can arrange invoice billing for Enterprise customers.",
												}),
											],
										}),
										(0, b.jsxs)("div", {
											className: "rounded-xl border border-border bg-card p-6",
											children: [
												(0, b.jsx)("h3", {
													className: "font-semibold",
													children: "Can I cancel or change plans?",
												}),
												(0, b.jsx)("p", {
													className: "mt-2 text-sm text-muted-foreground",
													children:
														"Yes, you can upgrade, downgrade or cancel your plan at any time. Changes will be reflected in your next billing cycle.",
												}),
											],
										}),
										(0, b.jsxs)("div", {
											className: "rounded-xl border border-border bg-card p-6 md:col-span-2",
											children: [
												(0, b.jsx)("h3", {
													className: "font-semibold",
													children:
														"What if I have enterprise-level needs like SAML/SCIM, large-scale deployments, specific integrations and custom terms?",
												}),
												(0, b.jsxs)("p", {
													className: "mt-2 text-sm text-muted-foreground",
													children: [
														"We have an Enterprise plan which can be a fit. Please",
														" ",
														(0, b.jsx)(j.default, {
															href: "/enterprise#contact",
															className: "underline hover:no-underline",
															children: "reach out to our sales team",
														}),
														" ",
														"to discuss it.",
													],
												}),
											],
										}),
									],
								}),
								(0, b.jsx)("div", {
									className: "mt-12 text-center",
									children: (0, b.jsxs)("p", {
										className: "text-muted-foreground",
										children: [
											"Still have questions?",
											" ",
											(0, b.jsx)("a", {
												href: o.EXTERNAL_LINKS.DISCORD,
												target: "_blank",
												rel: "noopener noreferrer",
												className:
													"font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300",
												children: "Join our Discord",
											}),
											" ",
											"or",
											" ",
											(0, b.jsx)(j.default, {
												href: "/enterprise#contact",
												className:
													"font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300",
												children: "contact our sales team",
											}),
										],
									}),
								}),
							],
						}),
					}),
					(0, b.jsx)("section", {
						className: "py-20",
						children: (0, b.jsx)("div", {
							className: "container mx-auto px-4 sm:px-6 lg:px-8",
							children: (0, b.jsxs)("div", {
								className:
									"mx-auto max-w-4xl rounded-3xl border border-border/50 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-purple-500/5 p-8 text-center shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-black sm:p-12",
								children: [
									(0, b.jsx)("h2", {
										className: "mb-4 text-3xl font-bold tracking-tight sm:text-4xl",
										children: "Try Roo Code Cloud now",
									}),
									(0, b.jsx)("p", {
										className: "mx-auto mb-8 max-w-2xl text-lg text-muted-foreground",
										children: "Code from anywhere.",
									}),
									(0, b.jsx)("div", {
										className:
											"flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0",
										children: (0, b.jsx)(k.Button, {
											size: "lg",
											className:
												"bg-black text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-black/20 dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:hover:shadow-white/20 transition-all duration-300",
											asChild: !0,
											children: (0, b.jsxs)("a", {
												href: o.EXTERNAL_LINKS.CLOUD_APP_SIGNUP,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "flex items-center justify-center",
												children: [
													"Create a free Cloud account",
													(0, b.jsx)(d.ArrowRight, { className: "ml-2 h-4 w-4" }),
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
		a.s(["default", () => u, "metadata", 0, s], 85548)
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__7388e1ad._.js.map
