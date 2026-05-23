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
	25557,
	(a) => {
		"use strict"
		var b = a.i(1020),
			c = a.i(8258),
			d = a.i(34508)
		let e = "Our Privacy Policy",
			f =
				"Privacy policy for Roo Code Cloud and marketing website. Learn how we handle your data and protect your privacy.",
			g = "/privacy",
			h = {
				title: e,
				description: f,
				alternates: { canonical: `${c.SEO.url}${g}` },
				openGraph: {
					title: e,
					description: f,
					url: `${c.SEO.url}${g}`,
					siteName: c.SEO.name,
					images: [{ url: (0, d.ogImageUrl)(e, ""), width: 1200, height: 630, alt: e }],
					locale: c.SEO.locale,
					type: "article",
				},
				twitter: { card: c.SEO.twitterCard, title: e, description: f, images: [(0, d.ogImageUrl)(e, "")] },
				keywords: [...c.SEO.keywords, "privacy", "data protection", "GDPR", "security"],
			}
		function i() {
			return (0, b.jsx)(b.Fragment, {
				children: (0, b.jsx)("div", {
					className: "container mx-auto px-4 py-12 sm:px-6 lg:px-8",
					children: (0, b.jsxs)("div", {
						className: "prose prose-lg mx-auto max-w-4xl dark:prose-invert",
						children: [
							(0, b.jsx)("h1", {
								className: "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
								children: "Roo Code Cloud Privacy Policy",
							}),
							(0, b.jsx)("p", {
								className: "text-muted-foreground",
								children: "Last Updated: September 19, 2025",
							}),
							(0, b.jsx)("p", {
								className: "lead",
								children:
									'This Privacy Policy explains how Roo Code, Inc. ("Roo Code," "we," "our," or "us") collects, uses, and shares information when you:',
							}),
							(0, b.jsxs)("ul", {
								className: "lead",
								children: [
									(0, b.jsxs)("li", {
										children: [
											"browse any page under ",
											(0, b.jsx)("strong", { children: "roocode.com" }),
											" (the ",
											(0, b.jsx)("em", { children: "Marketing Site" }),
											"); and/or",
										],
									}),
									(0, b.jsxs)("li", {
										children: [
											"create an account for, sign in to, or otherwise use ",
											(0, b.jsx)("strong", { children: "Roo Code Cloud" }),
											" at",
											" ",
											(0, b.jsx)("strong", { children: "app.roocode.com" }),
											" or through the Roo Code extension while authenticated to that Cloud account (the ",
											(0, b.jsx)("em", { children: "Cloud Service" }),
											").",
										],
									}),
								],
							}),
							(0, b.jsxs)("div", {
								className: "my-8 rounded-lg border border-border bg-muted/50 p-6",
								children: [
									(0, b.jsx)("h3", {
										className: "mt-0 text-lg font-semibold",
										children: "Extension‑Only Usage",
									}),
									(0, b.jsxs)("p", {
										className: "mb-0",
										children: [
											"If you run the Roo Code extension ",
											(0, b.jsx)("strong", { children: "without" }),
											" connecting to a Cloud account, your data is governed by the standalone",
											" ",
											(0, b.jsx)("a", {
												href: "https://github.com/RooCodeInc/Roo-Code/blob/main/PRIVACY.md",
												target: "_blank",
												rel: "noopener noreferrer",
												className: "text-primary hover:underline",
												children: "Roo Code Extension Privacy Policy",
											}),
											".",
										],
									}),
								],
							}),
							(0, b.jsx)("h2", { className: "mt-12 text-2xl font-bold", children: "Quick Summary" }),
							(0, b.jsxs)("ul", {
								children: [
									(0, b.jsxs)("li", {
										children: [
											(0, b.jsx)("strong", {
												children:
													"Your source code does not transit Roo Code servers unless you explicitly choose Roo Code as a model provider (proxy mode).",
											}),
											" ",
											"When Roo Code Cloud is your model provider, your code briefly transits Roo Code servers only to forward it to the upstream model, is not stored, and is deleted immediately after forwarding. Otherwise, your code is sent ",
											(0, b.jsx)("strong", { children: "directly" }),
											"—via client‑to‑provider TLS—to the model you select. Roo Code never stores, inspects, or trains on your code.",
										],
									}),
									(0, b.jsxs)("li", {
										children: [
											(0, b.jsx)("strong", {
												children: "Prompts and chat snippets are collected by default",
											}),
											" in Roo Code Cloud so you can search and re‑use past conversations. Organization admins can disable this collection at any time.",
										],
									}),
									(0, b.jsxs)("li", {
										children: [
											"We collect only the data needed to operate Roo Code Cloud, do ",
											(0, b.jsx)("strong", { children: "not" }),
											" sell customer data, and do ",
											(0, b.jsx)("strong", { children: "not" }),
											" use your content to train models.",
										],
									}),
								],
							}),
							(0, b.jsx)("h2", {
								className: "mt-12 text-2xl font-bold",
								children: "1. Information We Collect",
							}),
							(0, b.jsx)("div", {
								className: "overflow-x-auto",
								children: (0, b.jsxs)("table", {
									className: "min-w-full border-collapse border border-border",
									children: [
										(0, b.jsx)("thead", {
											children: (0, b.jsxs)("tr", {
												className: "bg-muted/50",
												children: [
													(0, b.jsx)("th", {
														className:
															"border border-border px-4 py-2 text-left font-semibold",
														children: "Category",
													}),
													(0, b.jsx)("th", {
														className:
															"border border-border px-4 py-2 text-left font-semibold",
														children: "Examples",
													}),
													(0, b.jsx)("th", {
														className:
															"border border-border px-4 py-2 text-left font-semibold",
														children: "Source",
													}),
												],
											}),
										}),
										(0, b.jsxs)("tbody", {
											children: [
												(0, b.jsxs)("tr", {
													children: [
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2 font-medium",
															children: "Account Information",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children: "Name, email, organization, auth tokens",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children: "You",
														}),
													],
												}),
												(0, b.jsxs)("tr", {
													className: "bg-muted/25",
													children: [
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2 font-medium",
															children: "Workspace Configuration",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children:
																"Org settings, allow‑lists, rules files, modes, dashboards",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children: "You / Extension (when signed in)",
														}),
													],
												}),
												(0, b.jsxs)("tr", {
													children: [
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2 font-medium",
															children: "Prompts, Chat Snippets & Token Counts",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children: "Text prompts, model outputs, token counts",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children: "Extension (when signed in)",
														}),
													],
												}),
												(0, b.jsxs)("tr", {
													className: "bg-muted/25",
													children: [
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2 font-medium",
															children: "Usage Data",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children:
																"Feature clicks, error logs, performance metrics (captured via PostHog)",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children: "Services automatically (PostHog)",
														}),
													],
												}),
												(0, b.jsxs)("tr", {
													children: [
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2 font-medium",
															children: "Payment Data",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children:
																"Tokenized card details, billing address, invoices",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children: "Payment processor (Stripe)",
														}),
													],
												}),
												(0, b.jsxs)("tr", {
													className: "bg-muted/25",
													children: [
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2 font-medium",
															children: "Marketing Data",
														}),
														(0, b.jsxs)("td", {
															className: "border border-border px-4 py-2",
															children: [
																"Cookies, IP address, browser type, page views,",
																" ",
																(0, b.jsx)("strong", {
																	children: "voluntary form submissions",
																}),
																" (e.g., newsletter or wait‑list sign‑ups)",
															],
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children: "Marketing Site automatically / You",
														}),
													],
												}),
											],
										}),
									],
								}),
							}),
							(0, b.jsx)("h2", {
								className: "mt-12 text-2xl font-bold",
								children: "2. How We Use Information",
							}),
							(0, b.jsxs)("ul", {
								children: [
									(0, b.jsxs)("li", {
										children: [
											(0, b.jsx)("strong", { children: "Operate & secure Roo Code Cloud" }),
											" (authentication, completions, abuse prevention)",
										],
									}),
									(0, b.jsxs)("li", {
										children: [
											(0, b.jsx)("strong", { children: "Provide support & improve features" }),
											" (debugging, analytics, product decisions)",
										],
									}),
									(0, b.jsx)("li", {
										children: (0, b.jsx)("strong", {
											children: "Process payments & manage subscriptions",
										}),
									}),
									(0, b.jsxs)("li", {
										children: [
											(0, b.jsx)("strong", {
												children: "Send product updates and roadmap communications",
											}),
											" (opt‑out available)",
										],
									}),
									(0, b.jsxs)("li", {
										children: [
											(0, b.jsx)("strong", {
												children:
													"Send onboarding, educational, and promotional communications",
											}),
											". We may use your account information (such as your name and email address) to send you onboarding messages, product tutorials, feature announcements, newsletters, and other marketing communications. You can opt out of non‑transactional emails at any time (see “Your Choices” below).",
										],
									}),
								],
							}),
							(0, b.jsx)("h2", {
								className: "mt-12 text-2xl font-bold",
								children: "3. Where Your Data Goes (And Doesn't)",
							}),
							(0, b.jsx)("div", {
								className: "overflow-x-auto",
								children: (0, b.jsxs)("table", {
									className: "min-w-full border-collapse border border-border",
									children: [
										(0, b.jsx)("thead", {
											children: (0, b.jsxs)("tr", {
												className: "bg-muted/50",
												children: [
													(0, b.jsx)("th", {
														className:
															"border border-border px-4 py-2 text-left font-semibold",
														children: "Data",
													}),
													(0, b.jsx)("th", {
														className:
															"border border-border px-4 py-2 text-left font-semibold",
														children: "Sent To",
													}),
													(0, b.jsxs)("th", {
														className:
															"border border-border px-4 py-2 text-left font-semibold",
														children: [
															(0, b.jsx)("strong", { children: "Not" }),
															" Sent To",
														],
													}),
												],
											}),
										}),
										(0, b.jsxs)("tbody", {
											children: [
												(0, b.jsxs)("tr", {
													children: [
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2 font-medium",
															children: "Code & files you work on",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children:
																"Your chosen model provider (direct client → provider TLS), or Roo Code (proxy mode; transit‑only) when you select Roo Code as the provider",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children:
																"Roo Code servers (except proxy mode; transit‑only, no storage); ad networks; model‑training pipelines",
														}),
													],
												}),
												(0, b.jsxs)("tr", {
													className: "bg-muted/25",
													children: [
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2 font-medium",
															children: "Prompts, chat snippets & token counts (Cloud)",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children: "Roo Code Cloud (encrypted at rest)",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children: "Any third‑party",
														}),
													],
												}),
												(0, b.jsxs)("tr", {
													children: [
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2 font-medium",
															children: "Workspace Configuration",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children: "Roo Code Cloud (encrypted at rest)",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children: "Any third-party",
														}),
													],
												}),
												(0, b.jsxs)("tr", {
													className: "bg-muted/25",
													children: [
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2 font-medium",
															children: "Usage & Telemetry",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children: "PostHog (self‑hosted analytics platform)",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children: "Ad networks or data brokers",
														}),
													],
												}),
												(0, b.jsxs)("tr", {
													children: [
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2 font-medium",
															children: "Payment Data",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children: "Stripe (PCI‑DSS Level 1)",
														}),
														(0, b.jsx)("td", {
															className: "border border-border px-4 py-2",
															children:
																"Roo Code servers (we store only the Stripe customer ID)",
														}),
													],
												}),
											],
										}),
									],
								}),
							}),
							(0, b.jsx)("h2", { className: "mt-12 text-2xl font-bold", children: "4. Data Retention" }),
							(0, b.jsxs)("ul", {
								children: [
									(0, b.jsxs)("li", {
										children: [
											(0, b.jsx)("strong", { children: "Source Code:" }),
											" Never stored on Roo Code servers.",
										],
									}),
									(0, b.jsxs)("li", {
										children: [
											(0, b.jsx)("strong", { children: "Prompts & Chat Snippets:" }),
											" Persist in your Cloud workspace until you or your organization admin deletes them or disables collection.",
										],
									}),
									(0, b.jsxs)("li", {
										children: [
											(0, b.jsx)("strong", { children: "Operational Logs & Analytics:" }),
											" Retained only as needed to operate and secure Roo Code Cloud.",
										],
									}),
								],
							}),
							(0, b.jsx)("h2", { className: "mt-12 text-2xl font-bold", children: "5. Your Choices" }),
							(0, b.jsxs)("ul", {
								children: [
									(0, b.jsxs)("li", {
										children: [
											(0, b.jsx)("strong", { children: "Manage cookies:" }),
											" You can block or delete cookies in your browser settings; some site features may not function without them.",
										],
									}),
									(0, b.jsxs)("li", {
										children: [
											(0, b.jsx)("strong", { children: "Disable prompt collection" }),
											" in Organization settings.",
										],
									}),
									(0, b.jsxs)("li", {
										children: [
											(0, b.jsx)("strong", { children: "Delete your Cloud account" }),
											" at any time from",
											" ",
											(0, b.jsx)("strong", { children: "Security Settings" }),
											" inside Roo Code Cloud (User Menu → My Settings → Open Profile).",
										],
									}),
									(0, b.jsxs)("li", {
										children: [
											(0, b.jsx)("strong", { children: "Marketing communications:" }),
											" You can unsubscribe from marketing and promotional emails by clicking the unsubscribe link in those emails. Transactional or service‑related emails (such as password resets, billing notices, or security alerts) will continue even if you opt out.",
										],
									}),
								],
							}),
							(0, b.jsx)("h2", {
								className: "mt-12 text-2xl font-bold",
								children: "6. Security Practices",
							}),
							(0, b.jsx)("p", {
								children:
									"We use TLS for all data in transit, AES‑256 encryption at rest, least‑privilege IAM, continuous monitoring, routine penetration testing, and maintain a SOC 2 program.",
							}),
							(0, b.jsx)("h2", {
								className: "mt-12 text-2xl font-bold",
								children: "7. Updates to This Policy",
							}),
							(0, b.jsxs)("p", {
								children: [
									"If our privacy practices change, we will update this policy and note the new",
									" ",
									(0, b.jsx)("strong", { children: "Last Updated" }),
									" date at the top. For material changes that affect Cloud workspaces, we will also email registered workspace owners before the changes take effect.",
								],
							}),
							(0, b.jsx)("h2", { className: "mt-12 text-2xl font-bold", children: "8. Contact Us" }),
							(0, b.jsxs)("p", {
								children: [
									"Questions or concerns? Email",
									" ",
									(0, b.jsx)("a", {
										href: "mailto:privacy@roocode.com",
										className: "text-primary hover:underline",
										children: "privacy@roocode.com",
									}),
									".",
								],
							}),
						],
					}),
				}),
			})
		}
		a.s(["default", () => i, "metadata", 0, h])
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__78c6eda0._.js.map
