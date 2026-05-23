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
	22734,
	(a, b, c) => {
		b.exports = a.x("fs", () => require("fs"))
	},
	2952,
	(a) => {
		"use strict"
		a.s(["BlogContent", () => c, "default", () => d])
		var b = a.i(57689)
		let c = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call BlogContent() from the server but BlogContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/blog/BlogContent.tsx <module evaluation>",
				"BlogContent",
			),
			d = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call the default export of [project]/apps/web-roo-code/src/components/blog/BlogContent.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/blog/BlogContent.tsx <module evaluation>",
				"default",
			)
	},
	55521,
	(a) => {
		"use strict"
		a.s(["BlogContent", () => c, "default", () => d])
		var b = a.i(57689)
		let c = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call BlogContent() from the server but BlogContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/blog/BlogContent.tsx",
				"BlogContent",
			),
			d = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call the default export of [project]/apps/web-roo-code/src/components/blog/BlogContent.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/blog/BlogContent.tsx",
				"default",
			)
	},
	99939,
	(a) => {
		"use strict"
		a.i(2952)
		var b = a.i(55521)
		a.n(b)
	},
	20017,
	(a) => {
		"use strict"
		a.s(["BlogFAQ", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call BlogFAQ() from the server but BlogFAQ is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/blog/BlogFAQ.tsx <module evaluation>",
			"BlogFAQ",
		)
	},
	46734,
	(a) => {
		"use strict"
		a.s(["BlogFAQ", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call BlogFAQ() from the server but BlogFAQ is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/components/blog/BlogFAQ.tsx",
			"BlogFAQ",
		)
	},
	34360,
	(a) => {
		"use strict"
		a.i(20017)
		var b = a.i(46734)
		a.n(b)
	},
	68690,
	(a) => {
		"use strict"
		var b = a.i(1020),
			c = a.i(83733)
		a.i(53130)
		var d = a.i(5396),
			e = a.i(26756),
			f = a.i(95522),
			g = a.i(87576)
		let h = (0, a.i(1152).default)("clock", [
			["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
			["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
		])
		a.i(2213)
		var i = a.i(20223),
			j = a.i(71886),
			k = a.i(8258),
			l = a.i(34508),
			m = a.i(8196),
			n = a.i(99939),
			o = a.i(34360)
		async function p({ params: a }) {
			let { slug: b } = await a,
				c = (0, i.getBlogPostBySlug)(b)
			if (!c) return {}
			let d = `/blog/${c.slug}`
			return {
				title: c.title,
				description: c.description,
				alternates: { canonical: `${k.SEO.url}${d}` },
				openGraph: {
					title: c.title,
					description: c.description,
					url: `${k.SEO.url}${d}`,
					siteName: k.SEO.name,
					images: [
						{ url: (0, l.ogImageUrl)(c.title, c.description), width: 1200, height: 630, alt: c.title },
					],
					locale: k.SEO.locale,
					type: "article",
					publishedTime: c.publish_date,
				},
				twitter: {
					card: k.SEO.twitterCard,
					title: c.title,
					description: c.description,
					images: [(0, l.ogImageUrl)(c.title, c.description)],
				},
				keywords: [...k.SEO.keywords, ...c.tags],
			}
		}
		async function q({ params: a }) {
			let { slug: p } = await a,
				q = (0, i.getBlogPostBySlug)(p)
			q || (0, d.notFound)()
			let { previous: r, next: s } = (0, i.getAdjacentPosts)(p),
				t = (0, j.calculateReadingTime)(q.content),
				u = (0, j.formatReadingTime)(t),
				{ faqItems: v, contentWithoutFAQ: w } = (function (a) {
					let b,
						c = a.match(/^## Frequently asked questions\s*$/im)
					if (!c || void 0 === c.index) return { faqItems: [], contentWithoutFAQ: a }
					let d = c.index,
						e = a.slice(0, d).trim(),
						f = a.slice(d),
						g = f.slice(c[0].length).match(/^## /m),
						h = g && void 0 !== g.index ? f.slice(0, c[0].length + g.index) : f,
						i = g && void 0 !== g.index ? f.slice(c[0].length + g.index) : "",
						j = [],
						k = /^### (.+?)$\s*([\s\S]*?)(?=^### |$(?![\s\S]))/gm
					for (; null !== (b = k.exec(h)); ) {
						let a = b[1]?.trim(),
							c = b[2]?.trim()
						a && c && j.push({ question: a, answer: c })
					}
					return { faqItems: j, contentWithoutFAQ: (e + "\n\n" + i).trim() }
				})(q.content),
				x = v.length > 0,
				y = {
					"@context": "https://schema.org",
					"@type": "BlogPosting",
					headline: q.title,
					description: q.description,
					datePublished: q.publish_date,
					image: (0, l.ogImageUrl)(q.title, q.description),
					wordCount: q.content.split(/\s+/).filter(Boolean).length,
					mainEntityOfPage: { "@type": "WebPage", "@id": `${k.SEO.url}/blog/${q.slug}` },
					url: `${k.SEO.url}/blog/${q.slug}`,
					author: { "@type": "Organization", "@id": `${k.SEO.url}#org`, name: k.SEO.name },
					publisher: {
						"@type": "Organization",
						"@id": `${k.SEO.url}#org`,
						name: k.SEO.name,
						logo: { "@type": "ImageObject", url: `${k.SEO.url}/android-chrome-512x512.png` },
					},
				},
				z = {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{ "@type": "ListItem", position: 1, name: "Home", item: k.SEO.url },
						{ "@type": "ListItem", position: 2, name: "Blog", item: `${k.SEO.url}/blog` },
						{ "@type": "ListItem", position: 3, name: q.title, item: `${k.SEO.url}/blog/${q.slug}` },
					],
				},
				A = x
					? {
							"@context": "https://schema.org",
							"@type": "FAQPage",
							mainEntity: v.map((a) => ({
								"@type": "Question",
								name: a.question,
								acceptedAnswer: { "@type": "Answer", text: a.answer },
							})),
						}
					: null
			return (0, b.jsxs)(b.Fragment, {
				children: [
					(0, b.jsx)(e.default, {
						id: "article-schema",
						type: "application/ld+json",
						dangerouslySetInnerHTML: { __html: JSON.stringify(y) },
					}),
					(0, b.jsx)(e.default, {
						id: "breadcrumb-schema",
						type: "application/ld+json",
						dangerouslySetInnerHTML: { __html: JSON.stringify(z) },
					}),
					A &&
						(0, b.jsx)(e.default, {
							id: "faq-schema",
							type: "application/ld+json",
							dangerouslySetInnerHTML: { __html: JSON.stringify(A) },
						}),
					(0, b.jsx)(m.BlogPostAnalytics, { post: q }),
					(0, b.jsx)("article", {
						className: "container mx-auto px-4 py-12 sm:px-6 lg:px-8",
						children: (0, b.jsxs)("div", {
							className: "mx-auto max-w-4xl",
							children: [
								(0, b.jsx)("nav", {
									"aria-label": "Breadcrumb",
									className: "mb-8",
									children: (0, b.jsxs)("ol", {
										className: "flex items-center gap-1 text-sm text-muted-foreground",
										children: [
											(0, b.jsx)("li", {
												children: (0, b.jsx)(c.default, {
													href: "/blog",
													className: "transition-colors hover:text-foreground",
													children: "Blog",
												}),
											}),
											(0, b.jsx)("li", {
												children: (0, b.jsx)(g.ChevronRight, { className: "h-4 w-4" }),
											}),
											(0, b.jsx)("li", {
												className: "truncate text-foreground",
												"aria-current": "page",
												children: q.title,
											}),
										],
									}),
								}),
								(0, b.jsxs)("div", {
									className: "prose prose-lg dark:prose-invert",
									children: [
										(0, b.jsxs)("header", {
											className: "not-prose mb-8",
											children: [
												(0, b.jsx)("h1", {
													className:
														"text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
													children: q.title,
												}),
												(0, b.jsxs)("div", {
													className:
														"mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground",
													children: [
														(0, b.jsx)("span", {
															children: (0, j.formatPostDatePt)(q.publish_date),
														}),
														(0, b.jsx)("span", { className: "text-border", children: "•" }),
														(0, b.jsxs)("span", {
															className: "flex items-center gap-1",
															children: [(0, b.jsx)(h, { className: "h-4 w-4" }), u],
														}),
													],
												}),
												q.tags.length > 0 &&
													(0, b.jsx)("div", {
														className: "mt-4 flex flex-wrap gap-2",
														children: q.tags.map((a) =>
															(0, b.jsx)(
																"span",
																{
																	className:
																		"rounded bg-muted px-2 py-1 text-xs text-muted-foreground",
																	children: a,
																},
																a,
															),
														),
													}),
											],
										}),
										(0, b.jsx)(n.BlogContent, { content: w }),
										x && (0, b.jsx)(o.BlogFAQ, { items: v }),
									],
								}),
								(r || s) &&
									(0, b.jsx)("nav", {
										"aria-label": "Post navigation",
										className: "mt-12 border-t border-border pt-8",
										children: (0, b.jsxs)("div", {
											className: "flex flex-col gap-4 sm:flex-row sm:justify-between",
											children: [
												r
													? (0, b.jsxs)(c.default, {
															href: `/blog/${r.slug}`,
															className:
																"group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
															children: [
																(0, b.jsx)(f.ChevronLeft, {
																	className:
																		"h-4 w-4 transition-transform group-hover:-translate-x-1",
																}),
																(0, b.jsxs)("div", {
																	className: "flex flex-col",
																	children: [
																		(0, b.jsx)("span", {
																			className:
																				"text-xs uppercase tracking-wide",
																			children: "Previous",
																		}),
																		(0, b.jsx)("span", {
																			className: "font-medium text-foreground",
																			children: r.title,
																		}),
																	],
																}),
															],
														})
													: (0, b.jsx)("div", {}),
												s
													? (0, b.jsxs)(c.default, {
															href: `/blog/${s.slug}`,
															className:
																"group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:flex-row-reverse sm:text-right",
															children: [
																(0, b.jsx)(g.ChevronRight, {
																	className:
																		"h-4 w-4 transition-transform group-hover:translate-x-1",
																}),
																(0, b.jsxs)("div", {
																	className: "flex flex-col",
																	children: [
																		(0, b.jsx)("span", {
																			className:
																				"text-xs uppercase tracking-wide",
																			children: "Next",
																		}),
																		(0, b.jsx)("span", {
																			className: "font-medium text-foreground",
																			children: s.title,
																		}),
																	],
																}),
															],
														})
													: (0, b.jsx)("div", {}),
											],
										}),
									}),
							],
						}),
					}),
				],
			})
		}
		a.s(
			["default", () => q, "dynamic", 0, "force-dynamic", "generateMetadata", () => p, "runtime", 0, "nodejs"],
			68690,
		)
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__23642673._.js.map
