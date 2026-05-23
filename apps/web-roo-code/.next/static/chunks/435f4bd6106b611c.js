;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	79567,
	(e) => {
		"use strict"
		var t = e.i(8026),
			s = e.i(10008)
		let a = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
			r = (e) =>
				e < 1e3
					? e.toString()
					: e < 1e6
						? `${(e / 1e3).toFixed(1)}K`
						: e < 1e9
							? `${(e / 1e6).toFixed(1)}M`
							: `${(e / 1e9).toFixed(1)}B`
		var i = e.i(21387)
		let o = (0, i.default)("arrow-left-to-line", [
				["path", { d: "M3 19V5", key: "rwsyhb" }],
				["path", { d: "m13 6-6 6 6 6", key: "1yhaz7" }],
				["path", { d: "M7 12h14", key: "uoisry" }],
			]),
			l = (0, i.default)("arrow-right-to-line", [
				["path", { d: "M17 12H3", key: "8awo09" }],
				["path", { d: "m11 18 6-6-6-6", key: "8c2y43" }],
				["path", { d: "M21 5v14", key: "nzette" }],
			]),
			d = (0, i.default)("building-2", [
				["path", { d: "M10 12h4", key: "a56b0p" }],
				["path", { d: "M10 8h4", key: "1sr2af" }],
				["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
				[
					"path",
					{ d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2", key: "secmi2" },
				],
				["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }],
			]),
			n = (0, i.default)("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]),
			c = (0, i.default)("expand", [
				["path", { d: "m15 15 6 6", key: "1s409w" }],
				["path", { d: "m15 9 6-6", key: "ko1vev" }],
				["path", { d: "M21 16v5h-5", key: "1ck2sf" }],
				["path", { d: "M21 8V3h-5", key: "1qoq8a" }],
				["path", { d: "M3 16v5h5", key: "1t08am" }],
				["path", { d: "m3 21 6-6", key: "wwnumi" }],
				["path", { d: "M3 8V3h5", key: "1ln10m" }],
				["path", { d: "M9 9 3 3", key: "v551iv" }],
			]),
			m = (0, i.default)("gift", [
				["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
				["path", { d: "M12 8v13", key: "1c76mn" }],
				["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
				[
					"path",
					{
						d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
						key: "1ihvrl",
					},
				],
			]),
			h = (0, i.default)("hard-drive-download", [
				["path", { d: "M12 2v8", key: "1q4o3n" }],
				["path", { d: "m16 6-4 4-4-4", key: "6wukr" }],
				["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
				["path", { d: "M6 18h.01", key: "uhywen" }],
				["path", { d: "M10 18h.01", key: "h775k" }],
			]),
			u = (0, i.default)("hard-drive-upload", [
				["path", { d: "m16 6-4-4-4 4", key: "13yo43" }],
				["path", { d: "M12 2v8", key: "1q4o3n" }],
				["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
				["path", { d: "M6 18h.01", key: "uhywen" }],
				["path", { d: "M10 18h.01", key: "h775k" }],
			]),
			x = (0, i.default)("ruler-dimension-line", [
				["path", { d: "M10 15v-3", key: "1pjskw" }],
				["path", { d: "M14 15v-3", key: "1o1mqj" }],
				["path", { d: "M18 15v-3", key: "cws6he" }],
				["path", { d: "M2 8V4", key: "3jv1jz" }],
				["path", { d: "M22 6H2", key: "1iqbfk" }],
				["path", { d: "M22 8V4", key: "16f4ou" }],
				["path", { d: "M6 15v-3", key: "1ij1qe" }],
				["rect", { x: "2", y: "12", width: "20", height: "8", rx: "2", key: "1tqiko" }],
			])
		var p = e.i(15628)
		let f = (0, i.default)("chevron-up", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]])
		function y({ model: e }) {
			let i = 1e6 * parseFloat(e.pricing.input),
				y = 1e6 * parseFloat(e.pricing.output),
				g = 1e6 * parseFloat(e.pricing.input_cache_read || "0"),
				b = 1e6 * parseFloat(e.pricing.input_cache_write || "0"),
				j = e.tags.includes("free"),
				v = e.tags.filter((e) => "vision" === e || "reasoning" === e),
				[k, w] = (0, s.useState)(!1)
			return (0, t.jsxs)("div", {
				className:
					"relative cursor-default px-8 pt-7 pb-5 flex flex-col justify-start bg-background border rounded-3xl transition-all hover:shadow-xl sm:cursor-default",
				children: [
					(0, t.jsxs)("div", {
						className: "mb-4",
						children: [
							(0, t.jsxs)("h3", {
								className:
									"text-xl font-semibold tracking-tight mb-2 flex items-center gap-2 justify-between",
								children: [
									e.name,
									j &&
										(0, t.jsxs)("span", {
											className: "inline-flex items-center text-sm font-medium text-green-500",
											children: [(0, t.jsx)(m, { className: "size-4 mr-1" }), "Free!"],
										}),
								],
							}),
							(0, t.jsx)("p", {
								className: [
									"text-sm text-muted-foreground sm:line-clamp-none",
									!k ? "line-clamp-2" : "",
								]
									.join(" ")
									.trim(),
								children: e.description,
							}),
						],
					}),
					(0, t.jsx)("div", {
						className: "overflow-x-auto mt-auto",
						children: (0, t.jsx)("table", {
							className: "w-full text-xs",
							children: (0, t.jsxs)("tbody", {
								children: [
									e.owned_by &&
										(0, t.jsxs)("tr", {
											className: "border-b border-border",
											children: [
												(0, t.jsxs)("td", {
													className: "py-1.5 font-medium text-muted-foreground",
													children: [
														(0, t.jsx)(d, { className: "size-4 inline-block mr-1.5" }),
														"Provider",
													],
												}),
												(0, t.jsx)("td", {
													className: "py-1.5 text-right",
													children: e.owned_by,
												}),
											],
										}),
									(0, t.jsxs)("tr", {
										className: "border-b border-border",
										children: [
											(0, t.jsxs)("td", {
												className: "py-1.5 font-medium text-muted-foreground",
												children: [
													(0, t.jsx)(x, { className: "size-4 inline-block mr-1.5" }),
													"Context Window",
												],
											}),
											(0, t.jsx)("td", {
												className: "py-1.5 text-right font-mono",
												children: r(e.context_window),
											}),
										],
									}),
									(0, t.jsxs)("tr", {
										className: [
											"border-b border-border",
											k ? "table-row" : "hidden sm:table-row",
										].join(" "),
										children: [
											(0, t.jsxs)("td", {
												className: "py-1.5 font-medium text-muted-foreground",
												children: [
													(0, t.jsx)(c, { className: "size-4 inline-block mr-1.5" }),
													"Max Output Tokens",
												],
											}),
											(0, t.jsx)("td", {
												className: "py-1.5 text-right font-mono",
												children: r(e.max_tokens),
											}),
										],
									}),
									(0, t.jsxs)("tr", {
										className: "border-b border-border",
										children: [
											(0, t.jsxs)("td", {
												className: "py-1.5 font-medium text-muted-foreground",
												children: [
													(0, t.jsx)(l, { className: "size-4 inline-block mr-1.5" }),
													"Input Price",
												],
											}),
											(0, t.jsx)("td", {
												className: "py-1.5 text-right",
												children: 0 === i ? "Free" : `${a.format(i)}/1M tokens`,
											}),
										],
									}),
									(0, t.jsxs)("tr", {
										className: "border-b border-border",
										children: [
											(0, t.jsxs)("td", {
												className: "py-1.5 font-medium text-muted-foreground",
												children: [
													(0, t.jsx)(o, { className: "size-4 inline-block mr-1.5" }),
													"Output Price",
												],
											}),
											(0, t.jsx)("td", {
												className: "py-1.5 text-right",
												children: 0 === y ? "Free" : `${a.format(y)}/1M tokens`,
											}),
										],
									}),
									g > 0 &&
										(0, t.jsxs)("tr", {
											className: [
												"border-b border-border",
												k ? "table-row" : "hidden sm:table-row",
											].join(" "),
											children: [
												(0, t.jsxs)("td", {
													className: "py-1.5 font-medium text-muted-foreground",
													children: [
														(0, t.jsx)(u, { className: "size-4 inline-block mr-1.5" }),
														"Cache Read",
													],
												}),
												(0, t.jsxs)("td", {
													className: "py-1.5 text-right",
													children: [a.format(g), "/1M tokens"],
												}),
											],
										}),
									b > 0 &&
										(0, t.jsxs)("tr", {
											className: [
												"border-b border-border",
												k ? "table-row" : "hidden sm:table-row",
											].join(" "),
											children: [
												(0, t.jsxs)("td", {
													className: "py-1.5 font-medium text-muted-foreground",
													children: [
														(0, t.jsx)(h, { className: "size-4 inline-block mr-1.5" }),
														"Cache Write",
													],
												}),
												(0, t.jsxs)("td", {
													className: "py-1.5 text-right",
													children: [a.format(b), "/1M tokens"],
												}),
											],
										}),
									v.length > 0 &&
										(0, t.jsxs)("tr", {
											className: [k ? "table-row" : "hidden sm:table-row"].join(" "),
											children: [
												(0, t.jsx)("td", {
													className: "py-1.5 font-medium text-muted-foreground align-top",
													children: "Features",
												}),
												(0, t.jsx)("td", {
													className: "py-1.5",
													children: v.map((e) =>
														(0, t.jsxs)(
															"span",
															{
																className:
																	"flex justify-end items-center text-xs capitalize",
																children: [
																	(0, t.jsx)(n, { className: "size-3 m-1" }),
																	e,
																],
															},
															e,
														),
													),
												}),
											],
										}),
									(0, t.jsx)("tr", {
										className: "sm:hidden",
										children: (0, t.jsx)("td", {
											colSpan: 2,
											className: "pt-3",
											children: (0, t.jsxs)("button", {
												type: "button",
												onClick: () => w((e) => !e),
												className:
													"w-full inline-flex items-center justify-center gap-1.5 text-xs font-medium text-primary",
												children: [
													k ? "Less" : "More",
													k
														? (0, t.jsx)(f, { className: "size-3" })
														: (0, t.jsx)(p.ChevronDown, { className: "size-3" }),
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
		var g = e.i(21862)
		let b = (0, i.default)("circle-x", [
			["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
			["path", { d: "m15 9-6 6", key: "1uzhvr" }],
			["path", { d: "m9 9 6 6", key: "z0biqf" }],
		])
		var j = e.i(33841)
		let v = (0, i.default)("loader", [
				["path", { d: "M12 2v4", key: "3427ic" }],
				["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
				["path", { d: "M18 12h4", key: "wj9ykh" }],
				["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
				["path", { d: "M12 18v4", key: "jadmvz" }],
				["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
				["path", { d: "M2 12h4", key: "j09sii" }],
				["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
			]),
			k = (0, i.default)("loader-circle", [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]])
		var w = e.i(65182)
		let N = (0, i.default)("search", [
				["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
				["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
			]),
			M = [
				{
					question: "What are AI model providers?",
					answer: "AI model providers offer various language models with different capabilities and pricing.",
				},
				{
					question: "What is the Roo Code Router?",
					answer: (0, t.jsxs)(t.Fragment, {
						children: [
							(0, t.jsx)("p", {
								children:
									"This is our very own model router, optimized to work seamlessly with Roo Code Cloud.",
							}),
							(0, t.jsx)("p", {
								children:
									"You don't have to use it to use Roo Code, but it's the easiest way to do it.",
							}),
						],
					}),
				},
				{
					question: "Do I have to use the Roo Code Router to use the Roo Code products?",
					answer: "Not at all! You can bring your own provider key, no problem. This is just meant to make it easier.",
				},
				{
					question: "How is pricing calculated?",
					answer: "Pricing is based on token usage for input and output, measured per million tokens, like pretty much any other provider out there.",
				},
				{
					question: "How is my data treated?",
					answer: "The Roo Code Router doesn't keep any of your data, the service only aims to make it easier to use Roo Code. Each model vendor has their own privacy policy though, and usually free models use your data for training, so keep that in mind.",
				},
				{
					question: "How much does the Roo Code Cloud service cost?",
					answer: (0, t.jsxs)(t.Fragment, {
						children: [
							"Our",
							" ",
							(0, t.jsx)(g.default, {
								href: "/pricing",
								className: "underline hover:no-underline",
								children: "service pricing is here.",
							}),
						],
					}),
				},
			]
		function z(e) {
			return { ...e, totalPrice: parseFloat(e.pricing.input) + parseFloat(e.pricing.output) }
		}
		function C() {
			let [e, a] = (0, s.useState)([]),
				[r, i] = (0, s.useState)(!0),
				[o, l] = (0, s.useState)(null),
				[d, n] = (0, s.useState)(""),
				[c, m] = (0, s.useState)("alphabetical")
			;(0, s.useEffect)(() => {
				!(async function () {
					try {
						i(!0), l(null)
						let e = await fetch("https://api.roocode.com/proxy/v1/models?include_paid=true")
						if (!e.ok) throw Error(`Failed to fetch models: ${e.statusText}`)
						let t = (await e.json()).data.map(z)
						a(t)
					} catch (e) {
						l(e instanceof Error ? e.message : "An error occurred while fetching models")
					} finally {
						i(!1)
					}
				})()
			}, [])
			let h = (0, s.useMemo)(() => {
					let t = e.filter((e) => !e.deprecated)
					if (d.trim()) {
						let e = d.toLowerCase()
						t = t.filter(
							(t) =>
								t.name.toLowerCase().includes(e) ||
								t.owned_by?.toLowerCase().includes(e) ||
								t.description.toLowerCase().includes(e),
						)
					}
					let s = [...t]
					switch (c) {
						case "alphabetical":
							s.sort((e, t) => e.name.localeCompare(t.name))
							break
						case "price-asc":
							s.sort((e, t) => e.totalPrice - t.totalPrice)
							break
						case "price-desc":
							s.sort((e, t) => t.totalPrice - e.totalPrice)
							break
						case "context-window-asc":
							s.sort((e, t) => e.context_window - t.context_window)
							break
						case "context-window-desc":
							s.sort((e, t) => t.context_window - e.context_window)
					}
					return s
				}, [e, d, c]),
				u = (0, s.useMemo)(() => e.filter((e) => !e.deprecated).length, [e])
			return (0, t.jsxs)(t.Fragment, {
				children: [
					(0, t.jsx)("section", {
						className: "relative overflow-hidden py-16",
						children: (0, t.jsx)("div", {
							className: "container relative z-10 mx-auto px-4 sm:px-6 lg:px-8",
							children: (0, t.jsxs)("div", {
								className: "text-center",
								children: [
									(0, t.jsx)("h1", {
										className: "text-4xl md:text-5xl font-bold tracking-tight",
										children: "The Roo Code Router",
									}),
									(0, t.jsxs)("p", {
										className: "mx-auto mt-4 max-w-3xl md:text-lg text-muted-foreground",
										children: [
											"The easiest way to use Roo Code (in the",
											" ",
											(0, t.jsxs)(g.default, {
												href: "/cloud",
												className: "underline hover:no-underline",
												children: [
													(0, t.jsx)(j.Cloud, { className: "inline size-5 mx-1 -mt-0.5" }),
													"Cloud",
												],
											}),
											" ",
											"or the",
											" ",
											(0, t.jsxs)(g.default, {
												href: "/extension",
												className: "underline hover:no-underline",
												children: [
													(0, t.jsx)(w.Puzzle, { className: "inline size-5 mx-1 -mt-0.5" }),
													"Extension",
												],
											}),
											") with the best free and paid models – no separate accounts, no messing with API keys.",
										],
									}),
									(0, t.jsxs)("p", {
										className: "mx-auto mt-2 max-w-2xl md:text-lg text-muted-foreground",
										children: [
											"And you can always bring your own key (",
											(0, t.jsx)(g.default, {
												href: "#faq",
												className: "underline hover:no-underline",
												children: "FAQ",
											}),
											").",
										],
									}),
								],
							}),
						}),
					}),
					(0, t.jsxs)("section", {
						className: "py-10 relative border-t border-b",
						children: [
							(0, t.jsx)("div", {
								className:
									"absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/10 to-violet-500/0 dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-purple-500/10",
							}),
							(0, t.jsx)("div", {
								className: "container mx-auto px-4 sm:px-6 lg:px-8",
								children: (0, t.jsx)("div", {
									className: "mx-auto max-w-4xl",
									children: (0, t.jsxs)("div", {
										className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
										children: [
											(0, t.jsx)("div", {
												className: "flex-1",
												children: (0, t.jsxs)("div", {
													className: "relative",
													children: [
														(0, t.jsx)(N, {
															className:
																"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
														}),
														(0, t.jsx)("input", {
															type: "text",
															placeholder: "Search models...",
															value: d,
															onChange: (e) => n(e.target.value),
															className:
																"w-full rounded-full border border-input bg-background px-10 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
														}),
														(0, t.jsxs)("div", {
															className:
																"text-sm cursor-default text-muted-foreground absolute bg-background right-0 top-0 m-0.5 px-3 py-2 rounded-full",
															children: [h.length, " of ", u, " models"],
														}),
													],
												}),
											}),
											(0, t.jsx)("div", {
												className: "flex-shrink-0",
												children: (0, t.jsxs)("div", {
													className: "flex items-center gap-2 relative",
													children: [
														(0, t.jsxs)("select", {
															id: "sort",
															value: c,
															onChange: (e) => m(e.target.value),
															className:
																"rounded-full cursor-pointer border border-input bg-background hover:bg-muted pl-4 w-full md:w-auto pr-9 py-2.5 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative appearance-none",
															children: [
																(0, t.jsx)("option", {
																	value: "alphabetical",
																	children: "Alphabetical",
																}),
																(0, t.jsx)("option", {
																	value: "price-asc",
																	children: "Price: Low to High",
																}),
																(0, t.jsx)("option", {
																	value: "price-desc",
																	children: "Price: High to Low",
																}),
																(0, t.jsx)("option", {
																	value: "context-window-asc",
																	children: "Context Window: Small to Large",
																}),
																(0, t.jsx)("option", {
																	value: "context-window-desc",
																	children: "Context Window: Large to Small",
																}),
															],
														}),
														(0, t.jsx)(p.ChevronDown, {
															className: "size-4 absolute right-3",
														}),
													],
												}),
											}),
										],
									}),
								}),
							}),
							(0, t.jsx)("div", {
								className: "container mx-auto px-4 sm:px-6 lg:px-8 ",
								children: (0, t.jsxs)("div", {
									className: "mx-auto max-w-6xl",
									children: [
										r &&
											(0, t.jsxs)("div", {
												className: "text-center pt-12 space-y-2 mb-4",
												children: [
													(0, t.jsx)(k, {
														className: "size-8 text-muted-foreground mx-auto animate-spin",
													}),
													(0, t.jsx)("p", {
														className: "text-lg",
														children: "Loading model list...",
													}),
												],
											}),
										o &&
											(0, t.jsxs)("div", {
												className: "text-center pt-12 space-y-2",
												children: [
													(0, t.jsx)(b, {
														className: "size-8 text-muted-foreground mx-auto mb-4",
													}),
													(0, t.jsx)("p", {
														className: "text-lg",
														children: "Oops, couldn't load the model list.",
													}),
													(0, t.jsx)("p", {
														className: "text-muted-foreground",
														children: "Try again in a bit please.",
													}),
												],
											}),
										!r &&
											!o &&
											0 === h.length &&
											(0, t.jsxs)("div", {
												className: "text-center pt-12 space-y-2",
												children: [
													(0, t.jsx)(v, {
														className: "size-8 text-muted-foreground mx-auto mb-4",
													}),
													(0, t.jsx)("p", {
														className: "text-lg",
														children: "No models match your search.",
													}),
													(0, t.jsxs)("p", {
														className: "text-muted-foreground",
														children: [
															"Keep in mind we don't have every model under the sun – only the ones we think are worth using.",
															(0, t.jsx)("br", {}),
															"You can always use a third-party provider to access a wider selection.",
														],
													}),
												],
											}),
										!r &&
											!o &&
											h.length > 0 &&
											(0, t.jsx)("div", {
												className: "grid gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3",
												children: h.map((e) => (0, t.jsx)(y, { model: e }, e.id)),
											}),
									],
								}),
							}),
						],
					}),
					(0, t.jsxs)("section", {
						className: "bg-background my-16 relative z-50",
						children: [
							(0, t.jsx)("a", { id: "faq" }),
							(0, t.jsxs)("div", {
								className: "container mx-auto px-4 sm:px-6 lg:px-8",
								children: [
									(0, t.jsx)("div", {
										className: "mx-auto max-w-3xl text-center",
										children: (0, t.jsx)("h2", {
											className: "text-3xl font-bold tracking-tight sm:text-4xl",
											children: "Frequently Asked Questions",
										}),
									}),
									(0, t.jsx)("div", {
										className: "mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2",
										children: M.map((e, s) =>
											(0, t.jsxs)(
												"div",
												{
													className: "rounded-2xl border border-border bg-card p-6",
													children: [
														(0, t.jsx)("h3", {
															className: "font-semibold",
															children: e.question,
														}),
														(0, t.jsx)("div", {
															className: "mt-2 text-sm text-muted-foreground",
															children: e.answer,
														}),
													],
												},
												s,
											),
										),
									}),
								],
							}),
						],
					}),
				],
			})
		}
		e.s(["default", () => C], 79567)
	},
])
