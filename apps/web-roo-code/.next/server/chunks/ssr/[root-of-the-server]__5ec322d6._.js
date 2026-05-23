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
	86953,
	(a) => {
		"use strict"
		var b = a.i(1020),
			c = a.i(79138)
		a.i(76692)
		var d = a.i(72036)
		a.i(82672)
		var e = a.i(63080),
			f = a.i(93125),
			g = a.i(83355),
			h = a.i(38739)
		async function i() {
			let a = await (0, c.getVSCodeDownloads)()
			return (0, b.jsxs)(b.Fragment, {
				children: [
					(0, b.jsx)(h.StructuredData, {}),
					(0, b.jsxs)("section", {
						className:
							"relative flex h-[calc(125vh-theme(spacing.12))] items-center overflow-hidden md:h-[calc(80svh-theme(spacing.12))]",
						children: [
							(0, b.jsx)(e.AnimatedBackground, {}),
							(0, b.jsx)("div", {
								className:
									"container relative flex items-center h-full z-10 mx-auto px-4 sm:px-6 lg:px-8",
								children: (0, b.jsxs)("div", {
									className: "grid h-full relative gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16",
									children: [
										(0, b.jsxs)("div", {
											className: "flex flex-col justify-center space-y-4 sm:space-y-8",
											children: [
												(0, b.jsxs)("div", {
													children: [
														(0, b.jsx)("h1", {
															className:
																"text-4xl font-bold tracking-tight mt-8 text-center md:text-left md:text-4xl lg:text-5xl lg:mt-0",
															children:
																"The Open Source AI Coding Assistant for serious work.",
														}),
														(0, b.jsxs)("p", {
															className:
																"mt-4 max-w-lg text-lg text-muted-foreground text-center md:text-left sm:mt-6",
															children: [
																"Specialized modes stay on task and ship great code.",
																(0, b.jsx)("br", {}),
																"Fully model-agnostic so you can use the best (or most cost-effective) model for each task.",
															],
														}),
														(0, b.jsx)("p", {
															className:
																"max-w-lg text-lg text-muted-foreground text-center md:text-left sm:mt-6",
															children:
																"Stop chasing this week's hot new model or CLI tool and go deep with Roo Code.",
														}),
													],
												}),
												(0, b.jsx)("div", {
													className:
														"flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0",
													children: (0, b.jsx)(d.Button, {
														size: "lg",
														className:
															"w-full hover:bg-gray-200 dark:bg-white dark:text-black sm:w-auto",
														children: (0, b.jsxs)("a", {
															href: f.EXTERNAL_LINKS.MARKETPLACE,
															target: "_blank",
															className: "flex w-full items-center justify-center",
															children: [
																"Install VS Code Extension",
																(0, b.jsx)(g.ArrowRight, { className: "ml-2" }),
															],
														}),
													}),
												}),
												(0, b.jsx)("div", {
													className:
														"md:max-h-[70px] md:overflow-clip text-center md:text-left pt-6 md:pt-0",
													children: (0, b.jsx)(e.CompanyLogos, {}),
												}),
											],
										}),
										(0, b.jsx)("div", {
											className: "relative flex items-center mx-auto h-full mt-8 lg:mt-0",
											children: (0, b.jsx)("div", {
												className: "flex items-center justify-center",
												children: (0, b.jsx)(e.CodeExample, {}),
											}),
										}),
									],
								}),
							}),
						],
					}),
					(0, b.jsx)("div", { id: "product", children: (0, b.jsx)(e.Features, {}) }),
					(0, b.jsx)("div", { id: "testimonials", children: (0, b.jsx)(e.Testimonials, {}) }),
					(0, b.jsx)("div", { id: "faq", children: (0, b.jsx)(e.FAQSection, {}) }),
					(0, b.jsx)(e.InstallSection, { downloads: a }),
				],
			})
		}
		a.s(["default", () => i, "revalidate", 0, 3600])
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__5ec322d6._.js.map
