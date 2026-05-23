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
	49771,
	39493,
	(a) => {
		"use strict"
		var b = a.i(1020),
			c = a.i(83733)
		a.i(2213)
		var d = a.i(71886)
		function e({ source: a }) {
			return (0, b.jsx)("span", {
				className: "rounded bg-muted px-2 py-1 text-xs text-muted-foreground",
				children: a,
			})
		}
		function f({ posts: a }) {
			return 0 === a.length
				? (0, b.jsx)("div", {
						className: "mt-12 text-center",
						children: (0, b.jsx)("p", {
							className: "text-muted-foreground",
							children: "No posts published yet. Check back soon!",
						}),
					})
				: (0, b.jsx)("div", {
						className: "mt-12 space-y-12",
						children: a.map((a) =>
							(0, b.jsxs)(
								"article",
								{
									className: "border-b border-border pb-12 last:border-b-0",
									children: [
										(0, b.jsx)(c.default, {
											href: `/blog/${a.slug}`,
											className: "group",
											children: (0, b.jsx)("h2", {
												className:
													"text-xl font-semibold tracking-tight transition-colors group-hover:text-primary sm:text-2xl",
												children: a.title,
											}),
										}),
										(0, b.jsxs)("div", {
											className:
												"mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground",
											children: [
												a.source && (0, b.jsx)(e, { source: a.source }),
												(0, b.jsx)("span", {
													children: (0, d.formatPostDatePt)(a.publish_date),
												}),
											],
										}),
										(0, b.jsx)("p", {
											className: "mt-3 text-muted-foreground",
											children: a.description,
										}),
										a.tags.length > 0 &&
											(0, b.jsx)("div", {
												className: "mt-4 flex flex-wrap gap-2",
												children: a.tags.map((a) =>
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
										(0, b.jsx)(c.default, {
											href: `/blog/${a.slug}`,
											className:
												"mt-4 inline-block text-sm font-medium text-primary hover:underline",
											children: "Read more →",
										}),
									],
								},
								a.slug,
							),
						),
					})
		}
		a.s(["BlogPostList", () => f], 49771)
		var g = a.i(95522),
			h = a.i(87576),
			i = a.i(20921)
		function j(a, b, c) {
			return c ? (1 === a ? "/blog?view=all" : `/blog?view=all&page=${a}`) : 1 === a ? b : `${b}/page/${a}`
		}
		function k({ currentPage: a, totalPages: d, basePath: e = "/blog", useQueryParams: f }) {
			if (d <= 1) return null
			let k = (function (a, b) {
					let c = []
					if (b <= 7) {
						for (let a = 1; a <= b; a++) c.push(a)
						return c
					}
					c.push(1)
					let d = Math.max(2, a - 1),
						e = Math.min(b - 1, a + 1)
					d > 2 && c.push("ellipsis")
					for (let a = d; a <= e; a++) c.push(a)
					return e < b - 1 && c.push("ellipsis"), c.push(b), c
				})(a, d),
				l = a > 1,
				m = a < d
			return (0, b.jsxs)("nav", {
				"aria-label": "Blog pagination",
				className: "mt-12 flex items-center justify-center gap-1 sm:gap-2",
				children: [
					l
						? (0, b.jsxs)(c.default, {
								href: j(a - 1, e, f),
								className: (0, i.cn)(
									"flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium",
									"text-muted-foreground hover:bg-muted hover:text-foreground",
									"transition-colors",
								),
								"aria-label": "Go to previous page",
								children: [
									(0, b.jsx)(g.ChevronLeft, { className: "h-4 w-4" }),
									(0, b.jsx)("span", { className: "hidden sm:inline", children: "Previous" }),
								],
							})
						: (0, b.jsxs)("span", {
								className: (0, i.cn)(
									"flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium",
									"cursor-not-allowed text-muted-foreground/50",
								),
								"aria-disabled": "true",
								children: [
									(0, b.jsx)(g.ChevronLeft, { className: "h-4 w-4" }),
									(0, b.jsx)("span", { className: "hidden sm:inline", children: "Previous" }),
								],
							}),
					(0, b.jsx)("div", {
						className: "flex items-center gap-1",
						children: k.map((d, g) =>
							"ellipsis" === d
								? (0, b.jsx)(
										"span",
										{ className: "px-2 py-2 text-sm text-muted-foreground", children: "..." },
										`ellipsis-${g}`,
									)
								: d === a
									? (0, b.jsx)(
											"span",
											{
												className: (0, i.cn)(
													"flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium",
													"bg-primary text-primary-foreground",
												),
												"aria-current": "page",
												children: d,
											},
											d,
										)
									: (0, b.jsx)(
											c.default,
											{
												href: j(d, e, f),
												className: (0, i.cn)(
													"flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium",
													"text-muted-foreground hover:bg-muted hover:text-foreground",
													"transition-colors",
												),
												"aria-label": `Go to page ${d}`,
												children: d,
											},
											d,
										),
						),
					}),
					m
						? (0, b.jsxs)(c.default, {
								href: j(a + 1, e, f),
								className: (0, i.cn)(
									"flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium",
									"text-muted-foreground hover:bg-muted hover:text-foreground",
									"transition-colors",
								),
								"aria-label": "Go to next page",
								children: [
									(0, b.jsx)("span", { className: "hidden sm:inline", children: "Next" }),
									(0, b.jsx)(h.ChevronRight, { className: "h-4 w-4" }),
								],
							})
						: (0, b.jsxs)("span", {
								className: (0, i.cn)(
									"flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium",
									"cursor-not-allowed text-muted-foreground/50",
								),
								"aria-disabled": "true",
								children: [
									(0, b.jsx)("span", { className: "hidden sm:inline", children: "Next" }),
									(0, b.jsx)(h.ChevronRight, { className: "h-4 w-4" }),
								],
							}),
				],
			})
		}
		a.s(["BlogPagination", () => k], 39493)
	},
	33627,
	(a) => {
		"use strict"
		a.s(["BlogViewToggle", () => c, "getBlogView", () => d])
		var b = a.i(57689)
		let c = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call BlogViewToggle() from the server but BlogViewToggle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/blog/BlogViewToggle.tsx <module evaluation>",
				"BlogViewToggle",
			),
			d = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call getBlogView() from the server but getBlogView is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/blog/BlogViewToggle.tsx <module evaluation>",
				"getBlogView",
			)
	},
	56242,
	(a) => {
		"use strict"
		a.s(["BlogViewToggle", () => c, "getBlogView", () => d])
		var b = a.i(57689)
		let c = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call BlogViewToggle() from the server but BlogViewToggle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/blog/BlogViewToggle.tsx",
				"BlogViewToggle",
			),
			d = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call getBlogView() from the server but getBlogView is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/blog/BlogViewToggle.tsx",
				"getBlogView",
			)
	},
	31157,
	(a) => {
		"use strict"
		a.i(33627)
		var b = a.i(56242)
		a.n(b)
	},
	58395,
	(a) => {
		"use strict"
		var b = a.i(1020),
			c = a.i(26756),
			d = a.i(32291)
		a.i(2213)
		var e = a.i(20223),
			f = a.i(8258),
			g = a.i(34508),
			h = a.i(8196),
			i = a.i(49771),
			j = a.i(39493),
			k = a.i(31157)
		let l = "Blog",
			m = "How teams use agents to iterate, review, and ship PRs with proof.",
			n = "/blog",
			o = {
				title: l,
				description: m,
				alternates: { canonical: `${f.SEO.url}${n}` },
				openGraph: {
					title: l,
					description: m,
					url: `${f.SEO.url}${n}`,
					siteName: f.SEO.name,
					images: [{ url: (0, g.ogImageUrl)(l, m), width: 1200, height: 630, alt: l }],
					locale: f.SEO.locale,
					type: "website",
				},
				twitter: { card: f.SEO.twitterCard, title: l, description: m, images: [(0, g.ogImageUrl)(l, m)] },
				keywords: [...f.SEO.keywords, "blog", "articles", "engineering", "AI development"],
			}
		async function p({ searchParams: a }) {
			let g,
				o = await a,
				p = "all" === o.view ? "all" : "featured",
				q = o.page ? parseInt(o.page, 10) : 1,
				r = (0, e.getAllBlogPosts)(),
				s = (0, e.getCuratedBlogPosts)(),
				t = 1,
				u = 1,
				v = !1
			if ("all" === p) {
				let a = (0, e.getPaginatedBlogPosts)(q)
				;(g = a.posts), (t = a.currentPage), (v = (u = a.totalPages) > 1)
			} else g = s
			let w = {
					"@context": "https://schema.org",
					"@type": "CollectionPage",
					name: l,
					description: m,
					url: `${f.SEO.url}${n}`,
					mainEntity: {
						"@type": "ItemList",
						itemListElement: r.map((a, b) => ({
							"@type": "ListItem",
							position: b + 1,
							url: `${f.SEO.url}/blog/${a.slug}`,
							name: a.title,
						})),
					},
				},
				x = {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{ "@type": "ListItem", position: 1, name: "Home", item: f.SEO.url },
						{ "@type": "ListItem", position: 2, name: "Blog", item: `${f.SEO.url}${n}` },
					],
				}
			return (0, b.jsxs)(b.Fragment, {
				children: [
					(0, b.jsx)(c.default, {
						id: "blog-schema",
						type: "application/ld+json",
						dangerouslySetInnerHTML: { __html: JSON.stringify(w) },
					}),
					(0, b.jsx)(c.default, {
						id: "breadcrumb-schema",
						type: "application/ld+json",
						dangerouslySetInnerHTML: { __html: JSON.stringify(x) },
					}),
					(0, b.jsx)(h.BlogIndexAnalytics, {}),
					(0, b.jsx)("div", {
						className: "container mx-auto px-4 py-12 sm:px-6 lg:px-8",
						children: (0, b.jsxs)("div", {
							className: "mx-auto max-w-4xl",
							children: [
								(0, b.jsx)("h1", {
									className: "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
									children: "Blog",
								}),
								(0, b.jsx)("p", { className: "mt-4 text-lg text-muted-foreground", children: m }),
								(0, b.jsx)(d.Suspense, {
									fallback: (0, b.jsx)("div", {
										className: "mt-6 flex items-center gap-4",
										children: (0, b.jsx)("div", {
											className: "h-11 w-64 animate-pulse rounded-lg bg-muted",
										}),
									}),
									children: (0, b.jsx)(k.BlogViewToggle, {
										curatedCount: s.length,
										totalCount: r.length,
									}),
								}),
								"all" === p &&
									u > 1 &&
									(0, b.jsxs)("p", {
										className: "mt-4 text-sm text-muted-foreground",
										children: ["Showing ", g.length, " of ", r.length, " posts"],
									}),
								(0, b.jsx)(i.BlogPostList, { posts: g }),
								v &&
									(0, b.jsx)(j.BlogPagination, { currentPage: t, totalPages: u, useQueryParams: !0 }),
							],
						}),
					}),
				],
			})
		}
		a.s(["default", () => p, "dynamic", 0, "force-dynamic", "metadata", 0, o, "runtime", 0, "nodejs"])
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__b85487a9._.js.map
