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
	38739,
	(a) => {
		"use strict"
		var b = a.i(1020),
			c = a.i(8258),
			d = a.i(93125)
		function e() {
			let a,
				e,
				f =
					((e = {
						"@type": "Organization",
						"@id": (a = `${c.SEO.url}#org`),
						name: c.SEO.name,
						url: c.SEO.url,
						logo: {
							"@type": "ImageObject",
							url: `${c.SEO.url}/android-chrome-512x512.png`,
							width: 512,
							height: 512,
						},
						alternateName: ["RooCode"],
						sameAs: [
							d.EXTERNAL_LINKS.GITHUB,
							d.EXTERNAL_LINKS.MARKETPLACE,
							d.EXTERNAL_LINKS.X,
							d.EXTERNAL_LINKS.LINKEDIN,
							d.EXTERNAL_LINKS.REDDIT,
							d.EXTERNAL_LINKS.DISCORD,
							d.EXTERNAL_LINKS.YOUTUBE,
						],
					}),
					{
						"@context": "https://schema.org",
						"@graph": [
							e,
							{
								"@type": "WebSite",
								"@id": `${c.SEO.url}#website`,
								url: c.SEO.url,
								name: c.SEO.name,
								alternateName: ["RooCode"],
								publisher: { "@id": a },
							},
							{
								"@type": "SoftwareApplication",
								"@id": `${c.SEO.url}#vscode-extension`,
								name: "Roo Code (VS Code extension)",
								applicationCategory: "DeveloperApplication",
								operatingSystem: "Windows, macOS, Linux",
								url: c.SEO.url,
								downloadUrl: d.EXTERNAL_LINKS.MARKETPLACE,
								offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
								isAccessibleForFree: !0,
								publisher: { "@id": a },
							},
						],
					})
			return (0, b.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(f) },
			})
		}
		a.s(["StructuredData", () => e], 38739)
	},
	47843,
	(a) => {
		"use strict"
		var b = a.i(1020)
		a.i(76692)
		var c = a.i(72036)
		a.i(82672)
		var d = a.i(63080),
			e = a.i(47837),
			f = a.i(71610),
			g = a.i(95020),
			h = a.i(93125),
			i = a.i(83355),
			j = a.i(38739)
		async function k() {
			return (0, b.jsxs)(b.Fragment, {
				children: [
					(0, b.jsx)(j.StructuredData, {}),
					(0, b.jsxs)("section", {
						className: "relative flex flex-col items-center overflow-hidden pt-20 pb-12 md:pt-32 md:pb-16",
						children: [
							(0, b.jsx)("div", {
								className:
									"absolute inset-y-0 left-1/2 h-full w-full max-w-[1200px] -translate-x-1/2 z-1",
								children: (0, b.jsx)("div", {
									className:
										"absolute left-1/2 top-1/2 h-[400px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 dark:bg-violet-700/20 blur-[140px]",
								}),
							}),
							(0, b.jsxs)("div", {
								className:
									"container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center",
								children: [
									(0, b.jsxs)("h1", {
										className:
											"text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-4xl mb-6",
										children: [
											"Your AI Software Engineering Team is here.",
											(0, b.jsx)("br", {}),
											(0, b.jsx)("span", {
												className: "text-muted-foreground",
												children: "Interactive in the IDE, autonomous in the cloud.",
											}),
										],
									}),
									(0, b.jsx)("div", {
										className: "mt-2 max-w-3xl text-lg text-muted-foreground mb-10 space-y-3",
										children: (0, b.jsxs)("p", {
											children: [
												"Use the ",
												(0, b.jsx)("strong", {
													className: "text-nowrap",
													children: "Roo Code Extension",
												}),
												" on your computer for full control, or delegate work to your",
												" ",
												(0, b.jsx)("strong", {
													className: "text-nowrap",
													children: "Roo Code Cloud Agents",
												}),
												" from the web, Slack, GitHub or wherever your team is.",
											],
										}),
									}),
									(0, b.jsxs)("div", {
										className: "flex flex-col sm:flex-row gap-4 mb-16",
										children: [
											(0, b.jsxs)("div", {
												className: "flex flex-col items-center gap-2",
												children: [
													(0, b.jsx)(c.Button, {
														size: "xl",
														className: "w-full",
														children: (0, b.jsxs)("a", {
															href: h.EXTERNAL_LINKS.MARKETPLACE,
															target: "_blank",
															rel: "noreferrer",
															className: "flex items-center justify-center",
															children: [
																"Install VS Code Extension",
																(0, b.jsx)(i.ArrowRight, { className: "ml-2 size-5" }),
															],
														}),
													}),
													(0, b.jsx)("span", {
														className: "text-xs text-muted-foreground",
														children: "Free and Open Source",
													}),
												],
											}),
											(0, b.jsxs)("div", {
												className: "flex flex-col items-center gap-2",
												children: [
													(0, b.jsx)(c.Button, {
														size: "xl",
														className: "w-full",
														children: (0, b.jsxs)("a", {
															href: h.EXTERNAL_LINKS.CLOUD_APP_SIGNUP_HOME,
															className: "flex items-center justify-center",
															children: [
																"Try Cloud for Free",
																(0, b.jsx)(i.ArrowRight, { className: "ml-2 size-5" }),
															],
														}),
													}),
													(0, b.jsx)("span", {
														className: "text-xs text-muted-foreground",
														children: "No credit card needed",
													}),
												],
											}),
										],
									}),
									(0, b.jsx)("div", {
										className: "mb-12 px-4",
										children: (0, b.jsx)(d.CompanyLogos, {}),
									}),
								],
							}),
						],
					}),
					(0, b.jsx)(g.PillarsSection, {}),
					(0, b.jsx)(f.OptionOverviewSection, {}),
					(0, b.jsx)(d.UseExamplesSection, {}),
					(0, b.jsx)(d.Testimonials, {}),
					(0, b.jsx)(d.FAQSection, {}),
					(0, b.jsx)(e.CTASection, {}),
				],
			})
		}
		a.s(["default", () => k, "revalidate", 0, 3600])
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__cadbdf05._.js.map
