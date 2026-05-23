module.exports = [
	65581,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(67191)
		let d = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
			e = (a) =>
				a < 1e3
					? a.toString()
					: a < 1e6
						? `${(a / 1e3).toFixed(1)}K`
						: a < 1e9
							? `${(a / 1e6).toFixed(1)}M`
							: `${(a / 1e9).toFixed(1)}B`
		var f = a.i(8402)
		let g = (0, f.default)("arrow-left-to-line", [
				["path", { d: "M3 19V5", key: "rwsyhb" }],
				["path", { d: "m13 6-6 6 6 6", key: "1yhaz7" }],
				["path", { d: "M7 12h14", key: "uoisry" }],
			]),
			h = (0, f.default)("arrow-right-to-line", [
				["path", { d: "M17 12H3", key: "8awo09" }],
				["path", { d: "m11 18 6-6-6-6", key: "8c2y43" }],
				["path", { d: "M21 5v14", key: "nzette" }],
			]),
			i = (0, f.default)("building-2", [
				["path", { d: "M10 12h4", key: "a56b0p" }],
				["path", { d: "M10 8h4", key: "1sr2af" }],
				["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
				[
					"path",
					{ d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2", key: "secmi2" },
				],
				["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }],
			]),
			j = (0, f.default)("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]),
			k = (0, f.default)("expand", [
				["path", { d: "m15 15 6 6", key: "1s409w" }],
				["path", { d: "m15 9 6-6", key: "ko1vev" }],
				["path", { d: "M21 16v5h-5", key: "1ck2sf" }],
				["path", { d: "M21 8V3h-5", key: "1qoq8a" }],
				["path", { d: "M3 16v5h5", key: "1t08am" }],
				["path", { d: "m3 21 6-6", key: "wwnumi" }],
				["path", { d: "M3 8V3h5", key: "1ln10m" }],
				["path", { d: "M9 9 3 3", key: "v551iv" }],
			]),
			l = (0, f.default)("gift", [
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
			m = (0, f.default)("hard-drive-download", [
				["path", { d: "M12 2v8", key: "1q4o3n" }],
				["path", { d: "m16 6-4 4-4-4", key: "6wukr" }],
				["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
				["path", { d: "M6 18h.01", key: "uhywen" }],
				["path", { d: "M10 18h.01", key: "h775k" }],
			]),
			n = (0, f.default)("hard-drive-upload", [
				["path", { d: "m16 6-4-4-4 4", key: "13yo43" }],
				["path", { d: "M12 2v8", key: "1q4o3n" }],
				["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
				["path", { d: "M6 18h.01", key: "uhywen" }],
				["path", { d: "M10 18h.01", key: "h775k" }],
			]),
			o = (0, f.default)("ruler-dimension-line", [
				["path", { d: "M10 15v-3", key: "1pjskw" }],
				["path", { d: "M14 15v-3", key: "1o1mqj" }],
				["path", { d: "M18 15v-3", key: "cws6he" }],
				["path", { d: "M2 8V4", key: "3jv1jz" }],
				["path", { d: "M22 6H2", key: "1iqbfk" }],
				["path", { d: "M22 8V4", key: "16f4ou" }],
				["path", { d: "M6 15v-3", key: "1ij1qe" }],
				["rect", { x: "2", y: "12", width: "20", height: "8", rx: "2", key: "1tqiko" }],
			])
		var p = a.i(92137)
		let q = (0, f.default)("chevron-up", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]])
		function r({ model: a }) {
			let f = 1e6 * parseFloat(a.pricing.input),
				r = 1e6 * parseFloat(a.pricing.output),
				s = 1e6 * parseFloat(a.pricing.input_cache_read || "0"),
				t = 1e6 * parseFloat(a.pricing.input_cache_write || "0"),
				u = a.tags.includes("free"),
				v = a.tags.filter((a) => "vision" === a || "reasoning" === a),
				[w, x] = (0, c.useState)(!1)
			return (0, b.jsxs)("div", {
				className:
					"relative cursor-default px-8 pt-7 pb-5 flex flex-col justify-start bg-background border rounded-3xl transition-all hover:shadow-xl sm:cursor-default",
				children: [
					(0, b.jsxs)("div", {
						className: "mb-4",
						children: [
							(0, b.jsxs)("h3", {
								className:
									"text-xl font-semibold tracking-tight mb-2 flex items-center gap-2 justify-between",
								children: [
									a.name,
									u &&
										(0, b.jsxs)("span", {
											className: "inline-flex items-center text-sm font-medium text-green-500",
											children: [(0, b.jsx)(l, { className: "size-4 mr-1" }), "Free!"],
										}),
								],
							}),
							(0, b.jsx)("p", {
								className: [
									"text-sm text-muted-foreground sm:line-clamp-none",
									!w ? "line-clamp-2" : "",
								]
									.join(" ")
									.trim(),
								children: a.description,
							}),
						],
					}),
					(0, b.jsx)("div", {
						className: "overflow-x-auto mt-auto",
						children: (0, b.jsx)("table", {
							className: "w-full text-xs",
							children: (0, b.jsxs)("tbody", {
								children: [
									a.owned_by &&
										(0, b.jsxs)("tr", {
											className: "border-b border-border",
											children: [
												(0, b.jsxs)("td", {
													className: "py-1.5 font-medium text-muted-foreground",
													children: [
														(0, b.jsx)(i, { className: "size-4 inline-block mr-1.5" }),
														"Provider",
													],
												}),
												(0, b.jsx)("td", {
													className: "py-1.5 text-right",
													children: a.owned_by,
												}),
											],
										}),
									(0, b.jsxs)("tr", {
										className: "border-b border-border",
										children: [
											(0, b.jsxs)("td", {
												className: "py-1.5 font-medium text-muted-foreground",
												children: [
													(0, b.jsx)(o, { className: "size-4 inline-block mr-1.5" }),
													"Context Window",
												],
											}),
											(0, b.jsx)("td", {
												className: "py-1.5 text-right font-mono",
												children: e(a.context_window),
											}),
										],
									}),
									(0, b.jsxs)("tr", {
										className: [
											"border-b border-border",
											w ? "table-row" : "hidden sm:table-row",
										].join(" "),
										children: [
											(0, b.jsxs)("td", {
												className: "py-1.5 font-medium text-muted-foreground",
												children: [
													(0, b.jsx)(k, { className: "size-4 inline-block mr-1.5" }),
													"Max Output Tokens",
												],
											}),
											(0, b.jsx)("td", {
												className: "py-1.5 text-right font-mono",
												children: e(a.max_tokens),
											}),
										],
									}),
									(0, b.jsxs)("tr", {
										className: "border-b border-border",
										children: [
											(0, b.jsxs)("td", {
												className: "py-1.5 font-medium text-muted-foreground",
												children: [
													(0, b.jsx)(h, { className: "size-4 inline-block mr-1.5" }),
													"Input Price",
												],
											}),
											(0, b.jsx)("td", {
												className: "py-1.5 text-right",
												children: 0 === f ? "Free" : `${d.format(f)}/1M tokens`,
											}),
										],
									}),
									(0, b.jsxs)("tr", {
										className: "border-b border-border",
										children: [
											(0, b.jsxs)("td", {
												className: "py-1.5 font-medium text-muted-foreground",
												children: [
													(0, b.jsx)(g, { className: "size-4 inline-block mr-1.5" }),
													"Output Price",
												],
											}),
											(0, b.jsx)("td", {
												className: "py-1.5 text-right",
												children: 0 === r ? "Free" : `${d.format(r)}/1M tokens`,
											}),
										],
									}),
									s > 0 &&
										(0, b.jsxs)("tr", {
											className: [
												"border-b border-border",
												w ? "table-row" : "hidden sm:table-row",
											].join(" "),
											children: [
												(0, b.jsxs)("td", {
													className: "py-1.5 font-medium text-muted-foreground",
													children: [
														(0, b.jsx)(n, { className: "size-4 inline-block mr-1.5" }),
														"Cache Read",
													],
												}),
												(0, b.jsxs)("td", {
													className: "py-1.5 text-right",
													children: [d.format(s), "/1M tokens"],
												}),
											],
										}),
									t > 0 &&
										(0, b.jsxs)("tr", {
											className: [
												"border-b border-border",
												w ? "table-row" : "hidden sm:table-row",
											].join(" "),
											children: [
												(0, b.jsxs)("td", {
													className: "py-1.5 font-medium text-muted-foreground",
													children: [
														(0, b.jsx)(m, { className: "size-4 inline-block mr-1.5" }),
														"Cache Write",
													],
												}),
												(0, b.jsxs)("td", {
													className: "py-1.5 text-right",
													children: [d.format(t), "/1M tokens"],
												}),
											],
										}),
									v.length > 0 &&
										(0, b.jsxs)("tr", {
											className: [w ? "table-row" : "hidden sm:table-row"].join(" "),
											children: [
												(0, b.jsx)("td", {
													className: "py-1.5 font-medium text-muted-foreground align-top",
													children: "Features",
												}),
												(0, b.jsx)("td", {
													className: "py-1.5",
													children: v.map((a) =>
														(0, b.jsxs)(
															"span",
															{
																className:
																	"flex justify-end items-center text-xs capitalize",
																children: [
																	(0, b.jsx)(j, { className: "size-3 m-1" }),
																	a,
																],
															},
															a,
														),
													),
												}),
											],
										}),
									(0, b.jsx)("tr", {
										className: "sm:hidden",
										children: (0, b.jsx)("td", {
											colSpan: 2,
											className: "pt-3",
											children: (0, b.jsxs)("button", {
												type: "button",
												onClick: () => x((a) => !a),
												className:
													"w-full inline-flex items-center justify-center gap-1.5 text-xs font-medium text-primary",
												children: [
													w ? "Less" : "More",
													w
														? (0, b.jsx)(q, { className: "size-3" })
														: (0, b.jsx)(p.ChevronDown, { className: "size-3" }),
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
		var s = a.i(46395)
		let t = (0, f.default)("circle-x", [
			["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
			["path", { d: "m15 9-6 6", key: "1uzhvr" }],
			["path", { d: "m9 9 6 6", key: "z0biqf" }],
		])
		var u = a.i(72187)
		let v = (0, f.default)("loader", [
				["path", { d: "M12 2v4", key: "3427ic" }],
				["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
				["path", { d: "M18 12h4", key: "wj9ykh" }],
				["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
				["path", { d: "M12 18v4", key: "jadmvz" }],
				["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
				["path", { d: "M2 12h4", key: "j09sii" }],
				["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
			]),
			w = (0, f.default)("loader-circle", [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]])
		var x = a.i(40146)
		let y = (0, f.default)("search", [
				["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
				["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
			]),
			z = [
				{
					question: "What are AI model providers?",
					answer: "AI model providers offer various language models with different capabilities and pricing.",
				},
				{
					question: "What is the Roo Code Router?",
					answer: (0, b.jsxs)(b.Fragment, {
						children: [
							(0, b.jsx)("p", {
								children:
									"This is our very own model router, optimized to work seamlessly with Roo Code Cloud.",
							}),
							(0, b.jsx)("p", {
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
					answer: (0, b.jsxs)(b.Fragment, {
						children: [
							"Our",
							" ",
							(0, b.jsx)(s.default, {
								href: "/pricing",
								className: "underline hover:no-underline",
								children: "service pricing is here.",
							}),
						],
					}),
				},
			]
		function A(a) {
			return { ...a, totalPrice: parseFloat(a.pricing.input) + parseFloat(a.pricing.output) }
		}
		function B() {
			let [a, d] = (0, c.useState)([]),
				[e, f] = (0, c.useState)(!0),
				[g, h] = (0, c.useState)(null),
				[i, j] = (0, c.useState)(""),
				[k, l] = (0, c.useState)("alphabetical")
			;(0, c.useEffect)(() => {
				!(async function () {
					try {
						f(!0), h(null)
						let a = await fetch("https://api.roocode.com/proxy/v1/models?include_paid=true")
						if (!a.ok) throw Error(`Failed to fetch models: ${a.statusText}`)
						let b = (await a.json()).data.map(A)
						d(b)
					} catch (a) {
						h(a instanceof Error ? a.message : "An error occurred while fetching models")
					} finally {
						f(!1)
					}
				})()
			}, [])
			let m = (0, c.useMemo)(() => {
					let b = a.filter((a) => !a.deprecated)
					if (i.trim()) {
						let a = i.toLowerCase()
						b = b.filter(
							(b) =>
								b.name.toLowerCase().includes(a) ||
								b.owned_by?.toLowerCase().includes(a) ||
								b.description.toLowerCase().includes(a),
						)
					}
					let c = [...b]
					switch (k) {
						case "alphabetical":
							c.sort((a, b) => a.name.localeCompare(b.name))
							break
						case "price-asc":
							c.sort((a, b) => a.totalPrice - b.totalPrice)
							break
						case "price-desc":
							c.sort((a, b) => b.totalPrice - a.totalPrice)
							break
						case "context-window-asc":
							c.sort((a, b) => a.context_window - b.context_window)
							break
						case "context-window-desc":
							c.sort((a, b) => b.context_window - a.context_window)
					}
					return c
				}, [a, i, k]),
				n = (0, c.useMemo)(() => a.filter((a) => !a.deprecated).length, [a])
			return (0, b.jsxs)(b.Fragment, {
				children: [
					(0, b.jsx)("section", {
						className: "relative overflow-hidden py-16",
						children: (0, b.jsx)("div", {
							className: "container relative z-10 mx-auto px-4 sm:px-6 lg:px-8",
							children: (0, b.jsxs)("div", {
								className: "text-center",
								children: [
									(0, b.jsx)("h1", {
										className: "text-4xl md:text-5xl font-bold tracking-tight",
										children: "The Roo Code Router",
									}),
									(0, b.jsxs)("p", {
										className: "mx-auto mt-4 max-w-3xl md:text-lg text-muted-foreground",
										children: [
											"The easiest way to use Roo Code (in the",
											" ",
											(0, b.jsxs)(s.default, {
												href: "/cloud",
												className: "underline hover:no-underline",
												children: [
													(0, b.jsx)(u.Cloud, { className: "inline size-5 mx-1 -mt-0.5" }),
													"Cloud",
												],
											}),
											" ",
											"or the",
											" ",
											(0, b.jsxs)(s.default, {
												href: "/extension",
												className: "underline hover:no-underline",
												children: [
													(0, b.jsx)(x.Puzzle, { className: "inline size-5 mx-1 -mt-0.5" }),
													"Extension",
												],
											}),
											") with the best free and paid models – no separate accounts, no messing with API keys.",
										],
									}),
									(0, b.jsxs)("p", {
										className: "mx-auto mt-2 max-w-2xl md:text-lg text-muted-foreground",
										children: [
											"And you can always bring your own key (",
											(0, b.jsx)(s.default, {
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
					(0, b.jsxs)("section", {
						className: "py-10 relative border-t border-b",
						children: [
							(0, b.jsx)("div", {
								className:
									"absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/10 to-violet-500/0 dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-purple-500/10",
							}),
							(0, b.jsx)("div", {
								className: "container mx-auto px-4 sm:px-6 lg:px-8",
								children: (0, b.jsx)("div", {
									className: "mx-auto max-w-4xl",
									children: (0, b.jsxs)("div", {
										className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
										children: [
											(0, b.jsx)("div", {
												className: "flex-1",
												children: (0, b.jsxs)("div", {
													className: "relative",
													children: [
														(0, b.jsx)(y, {
															className:
																"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
														}),
														(0, b.jsx)("input", {
															type: "text",
															placeholder: "Search models...",
															value: i,
															onChange: (a) => j(a.target.value),
															className:
																"w-full rounded-full border border-input bg-background px-10 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
														}),
														(0, b.jsxs)("div", {
															className:
																"text-sm cursor-default text-muted-foreground absolute bg-background right-0 top-0 m-0.5 px-3 py-2 rounded-full",
															children: [m.length, " of ", n, " models"],
														}),
													],
												}),
											}),
											(0, b.jsx)("div", {
												className: "flex-shrink-0",
												children: (0, b.jsxs)("div", {
													className: "flex items-center gap-2 relative",
													children: [
														(0, b.jsxs)("select", {
															id: "sort",
															value: k,
															onChange: (a) => l(a.target.value),
															className:
																"rounded-full cursor-pointer border border-input bg-background hover:bg-muted pl-4 w-full md:w-auto pr-9 py-2.5 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative appearance-none",
															children: [
																(0, b.jsx)("option", {
																	value: "alphabetical",
																	children: "Alphabetical",
																}),
																(0, b.jsx)("option", {
																	value: "price-asc",
																	children: "Price: Low to High",
																}),
																(0, b.jsx)("option", {
																	value: "price-desc",
																	children: "Price: High to Low",
																}),
																(0, b.jsx)("option", {
																	value: "context-window-asc",
																	children: "Context Window: Small to Large",
																}),
																(0, b.jsx)("option", {
																	value: "context-window-desc",
																	children: "Context Window: Large to Small",
																}),
															],
														}),
														(0, b.jsx)(p.ChevronDown, {
															className: "size-4 absolute right-3",
														}),
													],
												}),
											}),
										],
									}),
								}),
							}),
							(0, b.jsx)("div", {
								className: "container mx-auto px-4 sm:px-6 lg:px-8 ",
								children: (0, b.jsxs)("div", {
									className: "mx-auto max-w-6xl",
									children: [
										e &&
											(0, b.jsxs)("div", {
												className: "text-center pt-12 space-y-2 mb-4",
												children: [
													(0, b.jsx)(w, {
														className: "size-8 text-muted-foreground mx-auto animate-spin",
													}),
													(0, b.jsx)("p", {
														className: "text-lg",
														children: "Loading model list...",
													}),
												],
											}),
										g &&
											(0, b.jsxs)("div", {
												className: "text-center pt-12 space-y-2",
												children: [
													(0, b.jsx)(t, {
														className: "size-8 text-muted-foreground mx-auto mb-4",
													}),
													(0, b.jsx)("p", {
														className: "text-lg",
														children: "Oops, couldn't load the model list.",
													}),
													(0, b.jsx)("p", {
														className: "text-muted-foreground",
														children: "Try again in a bit please.",
													}),
												],
											}),
										!e &&
											!g &&
											0 === m.length &&
											(0, b.jsxs)("div", {
												className: "text-center pt-12 space-y-2",
												children: [
													(0, b.jsx)(v, {
														className: "size-8 text-muted-foreground mx-auto mb-4",
													}),
													(0, b.jsx)("p", {
														className: "text-lg",
														children: "No models match your search.",
													}),
													(0, b.jsxs)("p", {
														className: "text-muted-foreground",
														children: [
															"Keep in mind we don't have every model under the sun – only the ones we think are worth using.",
															(0, b.jsx)("br", {}),
															"You can always use a third-party provider to access a wider selection.",
														],
													}),
												],
											}),
										!e &&
											!g &&
											m.length > 0 &&
											(0, b.jsx)("div", {
												className: "grid gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3",
												children: m.map((a) => (0, b.jsx)(r, { model: a }, a.id)),
											}),
									],
								}),
							}),
						],
					}),
					(0, b.jsxs)("section", {
						className: "bg-background my-16 relative z-50",
						children: [
							(0, b.jsx)("a", { id: "faq" }),
							(0, b.jsxs)("div", {
								className: "container mx-auto px-4 sm:px-6 lg:px-8",
								children: [
									(0, b.jsx)("div", {
										className: "mx-auto max-w-3xl text-center",
										children: (0, b.jsx)("h2", {
											className: "text-3xl font-bold tracking-tight sm:text-4xl",
											children: "Frequently Asked Questions",
										}),
									}),
									(0, b.jsx)("div", {
										className: "mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2",
										children: z.map((a, c) =>
											(0, b.jsxs)(
												"div",
												{
													className: "rounded-2xl border border-border bg-card p-6",
													children: [
														(0, b.jsx)("h3", {
															className: "font-semibold",
															children: a.question,
														}),
														(0, b.jsx)("div", {
															className: "mt-2 text-sm text-muted-foreground",
															children: a.answer,
														}),
													],
												},
												c,
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
		a.s(["default", () => B], 65581)
	},
]

//# sourceMappingURL=apps_web-roo-code_src_app_provider_page_tsx_604adf61._.js.map
