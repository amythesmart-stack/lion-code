module.exports = [
	85806,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(67191)
		let d = (0, a.i(8402).default)("circle-check", [
			["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
			["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
		])
		var e = a.i(655),
			f = a.i(42685)
		function g({ className: a }) {
			return (0, b.jsxs)("span", {
				className: (0, f.cn)("inline-flex items-center gap-1", a),
				"aria-hidden": "true",
				children: [
					(0, b.jsx)("span", {
						className: "h-1.5 w-1.5 rounded-full bg-[#8B8D91] animate-pulse [animation-delay:0ms]",
					}),
					(0, b.jsx)("span", {
						className: "h-1.5 w-1.5 rounded-full bg-[#8B8D91] animate-pulse [animation-delay:180ms]",
					}),
					(0, b.jsx)("span", {
						className: "h-1.5 w-1.5 rounded-full bg-[#8B8D91] animate-pulse [animation-delay:360ms]",
					}),
				],
			})
		}
		function h({ children: a, className: c }) {
			return (0, b.jsx)("span", {
				className: (0, f.cn)("text-violet-300 underline underline-offset-2", "cursor-default", c),
				children: a,
			})
		}
		function i({ message: a, isNew: c, reduceMotion: e }) {
			let g = ""
			return (
				!e && c && (g = "animate-in fade-in slide-in-from-bottom-2 duration-500"),
				(0, b.jsxs)("div", {
					className: (0, f.cn)("flex gap-3", g),
					children: [
						(0, b.jsx)("div", {
							className: (0, f.cn)(
								"mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-xs font-semibold",
								a.avatarClassName,
							),
							children: a.avatarText,
						}),
						(0, b.jsxs)("div", {
							className: "min-w-0",
							children: [
								(0, b.jsxs)("div", {
									className: "flex flex-wrap items-baseline gap-x-2 gap-y-1",
									children: [
										(0, b.jsx)("span", {
											className: "text-[13px] font-semibold text-[#F8F8F9]",
											children: a.author,
										}),
										(0, b.jsx)("span", {
											className: "text-[11px] text-[#8B8D91]",
											children: a.timeLabel,
										}),
										"bot" === a.kind &&
											(0, b.jsxs)("span", {
												className:
													"inline-flex items-center gap-1 rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] font-medium text-violet-200",
												children: [(0, b.jsx)(d, { className: "h-3 w-3" }), "App"],
											}),
									],
								}),
								(0, b.jsx)("div", {
									className: "mt-1 text-[13px] leading-relaxed text-[#D1D2D3]",
									children: a.body,
								}),
							],
						}),
					],
				})
			)
		}
		function j({ className: a }) {
			let j = (function () {
					let [a, b] = (0, c.useState)(!1)
					return (
						(0, c.useEffect)(() => {
							let a = window.matchMedia("(prefers-reduced-motion: reduce)"),
								c = () => b(a.matches)
							return (c(), "function" == typeof a.addEventListener)
								? (a.addEventListener("change", c), () => a.removeEventListener("change", c))
								: (a.addListener?.(c), () => a.removeListener?.(c))
						}, []),
						a
					)
				})(),
				[k, l] = (0, c.useState)(0),
				m = (0, c.useRef)(null),
				n = (0, c.useMemo)(
					() => [
						{
							id: "m1",
							author: "Avery Lee",
							timeLabel: "Monday at 2:56 PM",
							avatarText: "AL",
							avatarClassName: "bg-[#2B2D31] text-[#F8F8F9] ring-1 ring-white/10",
							kind: "human",
							body: (0, b.jsx)("span", {
								children:
									"We need to add a page to our Marketing site that highlights using Roo Code from Slack.",
							}),
						},
						{
							id: "m2",
							author: "Avery Lee",
							timeLabel: "Monday at 2:58 PM",
							avatarText: "AL",
							avatarClassName: "bg-[#2B2D31] text-[#F8F8F9] ring-1 ring-white/10",
							kind: "human",
							body: (0, b.jsxs)("div", {
								className: "space-y-2",
								children: [
									(0, b.jsxs)("div", {
										children: [
											"The documentation for using Roo Code from Slack is here:",
											" ",
											(0, b.jsx)(h, {
												className: "hover:text-violet-200",
												children: "https://docs.roocode.com/roo-code-cloud/slack-integration",
											}),
										],
									}),
									(0, b.jsx)("div", {
										className: "text-[#B8BBC0]",
										children: "Here are some pages from our site we can use for guidance:",
									}),
									(0, b.jsxs)("ol", {
										className: "list-decimal pl-5 text-[#D1D2D3]",
										children: [
											(0, b.jsx)("li", {
												children: (0, b.jsx)(h, {
													className: "hover:text-violet-200",
													children: "https://roocode.com",
												}),
											}),
											(0, b.jsx)("li", {
												children: (0, b.jsx)(h, {
													className: "hover:text-violet-200",
													children: "https://roocode.com/extension",
												}),
											}),
											(0, b.jsx)("li", {
												children: (0, b.jsx)(h, {
													className: "hover:text-violet-200",
													children: "https://roocode.com/cloud",
												}),
											}),
										],
									}),
								],
							}),
						},
						{
							id: "m3",
							author: "Avery Lee",
							timeLabel: "Monday at 3:08 PM",
							avatarText: "AL",
							avatarClassName: "bg-[#2B2D31] text-[#F8F8F9] ring-1 ring-white/10",
							kind: "human",
							body: (0, b.jsxs)("div", {
								className: "space-y-3",
								children: [
									(0, b.jsx)("div", {
										children: "This is the start of a wireframe I have in mind for this page",
									}),
									(0, b.jsxs)("div", {
										className:
											"w-full max-w-[420px] rounded-lg border border-white/10 bg-black/20 p-3",
										children: [
											(0, b.jsxs)("div", {
												className: "flex items-center gap-2 text-[12px] text-[#B8BBC0]",
												children: [
													(0, b.jsx)(e.Paperclip, { className: "h-4 w-4" }),
													"IMG_9721.heic",
												],
											}),
											(0, b.jsx)("div", {
												className:
													"mt-3 h-24 w-full rounded-md bg-gradient-to-br from-white/10 via-white/5 to-white/0",
											}),
										],
									}),
								],
							}),
						},
						{
							id: "m4",
							author: "Avery Lee",
							timeLabel: "Monday at 3:09 PM",
							avatarText: "AL",
							avatarClassName: "bg-[#2B2D31] text-[#F8F8F9] ring-1 ring-white/10",
							kind: "human",
							body: (0, b.jsxs)("span", {
								children: [
									(0, b.jsx)(h, {
										className: "no-underline hover:text-violet-200",
										children: "@Roomote",
									}),
									" let's create the plan to deliver this",
								],
							}),
						},
						{
							id: "m5",
							author: "Roomote",
							timeLabel: "Monday at 3:09 PM",
							avatarText: "R",
							avatarClassName: "bg-violet-500/20 text-violet-200 ring-1 ring-violet-500/30",
							kind: "bot",
							body: (0, b.jsxs)("div", {
								className: "space-y-3",
								children: [
									(0, b.jsxs)("div", {
										className:
											"rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-[#D1D2D3]",
										children: [
											"Calling ",
											(0, b.jsx)("span", {
												className: "font-semibold text-[#F8F8F9]",
												children: "Planneroo",
											}),
											" to get started on your task on",
											" ",
											(0, b.jsx)("code", {
												className:
													"rounded bg-white/10 px-1.5 py-0.5 text-[12px] text-[#F8F8F9]",
												children: "RooCodeInc/Roo-Code",
											}),
										],
									}),
									(0, b.jsx)("div", {
										children: (0, b.jsx)("button", {
											type: "button",
											className:
												"inline-flex items-center rounded-md border border-white/10 bg-transparent px-2 py-1 text-[12px] font-medium text-[#D1D2D3] hover:bg-white/5",
											children: "Cancel ✕",
										}),
									}),
								],
							}),
						},
						{
							id: "m6",
							author: "Roomote",
							timeLabel: "Monday at 3:10 PM",
							avatarText: "R",
							avatarClassName: "bg-violet-500/20 text-violet-200 ring-1 ring-violet-500/30",
							kind: "bot",
							body: (0, b.jsxs)("div", {
								className: "space-x-2",
								children: [
									(0, b.jsx)("span", { children: "Cool, I'll knock this out real quick." }),
									(0, b.jsx)(h, { className: "hover:text-violet-200", children: "Follow along" }),
								],
							}),
						},
						{
							id: "m7",
							author: "Roomote",
							timeLabel: "Monday at 3:12 PM",
							avatarText: "R",
							avatarClassName: "bg-violet-500/20 text-violet-200 ring-1 ring-violet-500/30",
							kind: "bot",
							body: (0, b.jsxs)("div", {
								className: "space-y-2",
								children: [
									(0, b.jsx)("div", {
										className: "font-semibold text-[#F8F8F9]",
										children: "Todo List:",
									}),
									(0, b.jsx)("div", {
										className: "rounded-lg border border-white/10 bg-black/20 px-3 py-2",
										children: (0, b.jsx)("ul", {
											className: "space-y-1",
											children: [
												"Analyze existing page structures and component patterns",
												"Review marketing content requirements and wireframe details",
												"Create detailed component architecture plan",
												"Design page structure and section breakdown",
												"Plan navigation updates and integration points",
												"Test the page and verify all sections work",
											].map((a) =>
												(0, b.jsxs)(
													"li",
													{
														className: "text-[#D1D2D3]",
														children: [
															(0, b.jsx)("span", { className: "mr-2", children: "•" }),
															(0, b.jsx)("span", {
																className: "line-through opacity-80",
																children: a,
															}),
														],
													},
													a,
												),
											),
										}),
									}),
									(0, b.jsx)("div", {
										className: "text-[12px] text-[#8B8D91]",
										children: "(edited)",
									}),
								],
							}),
						},
						{
							id: "m8",
							author: "Roomote",
							timeLabel: "Monday at 3:16 PM",
							avatarText: "R",
							avatarClassName: "bg-violet-500/20 text-violet-200 ring-1 ring-violet-500/30",
							kind: "bot",
							body: (0, b.jsxs)("div", {
								className: "space-y-3",
								children: [
									(0, b.jsxs)("p", {
										children: [
											"I've created a comprehensive implementation plan for the Roo Code Slack integration marketing page at",
											" ",
											(0, b.jsx)("code", {
												className:
													"rounded bg-white/10 px-1.5 py-0.5 text-[12px] text-[#F8F8F9]",
												children: "plans/slack-marketing-page-plan.md",
											}),
											".",
										],
									}),
									(0, b.jsxs)("div", {
										className: "rounded-lg border border-white/10 bg-black/20 px-3 py-2",
										children: [
											(0, b.jsx)("div", {
												className: "text-[12px] font-semibold text-[#F8F8F9]",
												children: "Plan Overview",
											}),
											(0, b.jsxs)("ul", {
												className: "mt-2 space-y-1 text-[#D1D2D3]",
												children: [
													(0, b.jsxs)("li", {
														children: [
															(0, b.jsx)("span", { className: "mr-2", children: "•" }),
															"Hero + dual CTAs",
														],
													}),
													(0, b.jsxs)("li", {
														children: [
															(0, b.jsx)("span", { className: "mr-2", children: "•" }),
															"Value props grid",
														],
													}),
													(0, b.jsxs)("li", {
														children: [
															(0, b.jsx)("span", { className: "mr-2", children: "•" }),
															"“Thread to Shipped Feature” workflow",
														],
													}),
													(0, b.jsxs)("li", {
														children: [
															(0, b.jsx)("span", { className: "mr-2", children: "•" }),
															"Onboarding steps + CTA",
														],
													}),
												],
											}),
										],
									}),
									(0, b.jsxs)("div", {
										className: "space-x-2",
										children: [
											(0, b.jsx)("span", {
												className: "text-[#B8BBC0]",
												children: "Full document:",
											}),
											(0, b.jsx)(h, {
												className: "hover:text-violet-200",
												children: "View artifact",
											}),
										],
									}),
									(0, b.jsx)("div", {
										className: "text-[12px] italic text-[#8B8D91]",
										children: "Want to follow up? Just @-mention me in your response.",
									}),
								],
							}),
						},
						{
							id: "m9",
							author: "Avery Lee",
							timeLabel: "Monday at 3:17 PM",
							avatarText: "AL",
							avatarClassName: "bg-[#2B2D31] text-[#F8F8F9] ring-1 ring-white/10",
							kind: "human",
							body: (0, b.jsxs)("div", {
								className: "space-x-2",
								children: [
									(0, b.jsx)(h, {
										className: "no-underline hover:text-violet-200",
										children: "@Roomote",
									}),
									(0, b.jsx)("span", {
										children: "this looks great, let's use Coderoo to build this",
									}),
								],
							}),
						},
						{
							id: "m10",
							author: "Roomote",
							timeLabel: "Monday at 3:23 PM",
							avatarText: "R",
							avatarClassName: "bg-violet-500/20 text-violet-200 ring-1 ring-violet-500/30",
							kind: "bot",
							body: (0, b.jsxs)("div", {
								className: "space-y-3",
								children: [
									(0, b.jsx)("p", {
										children:
											"I've built the Roo Code Slack integration marketing page. Here's what was implemented:",
									}),
									(0, b.jsxs)("div", {
										className: "rounded-lg border border-white/10 bg-black/20 px-3 py-2",
										children: [
											(0, b.jsx)("div", {
												className: "text-[12px] font-semibold text-[#F8F8F9]",
												children: "Files",
											}),
											(0, b.jsxs)("ul", {
												className: "mt-2 space-y-1 text-[#D1D2D3]",
												children: [
													(0, b.jsxs)("li", {
														children: [
															(0, b.jsx)("span", { className: "mr-2", children: "•" }),
															(0, b.jsx)("code", {
																className:
																	"rounded bg-white/10 px-1.5 py-0.5 text-[12px] text-[#F8F8F9]",
																children: "apps/web-roo-code/src/app/slack/page.tsx",
															}),
															" ",
															"— Slack marketing page",
														],
													}),
													(0, b.jsxs)("li", {
														children: [
															(0, b.jsx)("span", { className: "mr-2", children: "•" }),
															(0, b.jsx)("code", {
																className:
																	"rounded bg-white/10 px-1.5 py-0.5 text-[12px] text-[#F8F8F9]",
																children: "apps/web-roo-code/src/lib/constants.ts",
															}),
															" ",
															"— added",
															" ",
															(0, b.jsx)("code", {
																className:
																	"rounded bg-white/10 px-1.5 py-0.5 text-[12px] text-[#F8F8F9]",
																children: "SLACK_DOCS",
															}),
														],
													}),
													(0, b.jsxs)("li", {
														children: [
															(0, b.jsx)("span", { className: "mr-2", children: "•" }),
															(0, b.jsx)("code", {
																className:
																	"rounded bg-white/10 px-1.5 py-0.5 text-[12px] text-[#F8F8F9]",
																children:
																	"apps/web-roo-code/src/components/chromes/nav-bar.tsx",
															}),
															" ",
															"— added Slack to Product dropdown",
														],
													}),
												],
											}),
										],
									}),
									(0, b.jsxs)("div", {
										className: "rounded-lg border border-white/10 bg-black/20 px-3 py-2",
										children: [
											(0, b.jsx)("div", {
												className: "text-[12px] font-semibold text-[#F8F8F9]",
												children: "Pull Request",
											}),
											(0, b.jsxs)("div", {
												className: "mt-2",
												children: [
													(0, b.jsx)("span", {
														className: "font-semibold text-[#F8F8F9]",
														children: "PR #10853",
													}),
													":",
													" ",
													(0, b.jsx)(h, {
														className: "hover:text-violet-200",
														children: "https://github.com/RooCodeInc/Roo-Code/pull/10853",
													}),
												],
											}),
										],
									}),
									(0, b.jsxs)("p", {
										className: "text-[#B8BBC0]",
										children: [
											"The page is accessible at",
											" ",
											(0, b.jsx)("code", {
												className:
													"rounded bg-white/10 px-1.5 py-0.5 text-[12px] text-[#F8F8F9]",
												children: "/slack",
											}),
											" ",
											"and includes navigation links in desktop and mobile.",
										],
									}),
								],
							}),
						},
					],
					[],
				),
				o = (0, c.useMemo)(() => {
					let a = []
					if (0 === n.length) return [{ kind: "reset" }]
					a.push({ kind: "typing", messageIndex: 0 }), a.push({ kind: "show", messageIndex: 0 })
					for (let b = 1; b < n.length; b += 1)
						a.push({ kind: "typing", messageIndex: b }), a.push({ kind: "show", messageIndex: b })
					return a.push({ kind: "reset" }), a
				}, [n]),
				p = (0, c.useMemo)(() => {
					let a = -1
					for (let b = 0; b < o.length; b += 1) o[b]?.kind === "show" && (a = b)
					return a
				}, [o])
			;(0, c.useEffect)(() => {
				if (j) return void l(p >= 0 ? p : 0)
				let a = o[k] ?? o.at(0),
					b = a?.kind === "show" && k === p,
					c = a?.kind === "reset" ? 500 : a?.kind === "typing" ? 900 : b ? 4400 : 2200,
					d = window.setTimeout(() => {
						l((a) => (a + 1) % o.length)
					}, c)
				return () => window.clearTimeout(d)
			}, [p, o, j, k])
			let q = o[k] ?? o.at(0) ?? { kind: "reset" },
				r = "reset" === q.kind ? 0 : "typing" === q.kind ? q.messageIndex : q.messageIndex + 1,
				s = n.slice(0, r),
				t = "typing" === q.kind ? n[q.messageIndex] : void 0
			return (
				(0, c.useEffect)(() => {
					let a = m.current
					if (a) {
						if ("reset" === q.kind || r <= 1) return void a.scrollTo({ top: 0, behavior: "auto" })
						a.scrollTo({ top: a.scrollHeight, behavior: j ? "auto" : "smooth" })
					}
				}, [q.kind, j, r]),
				(0, b.jsx)("div", {
					className: (0, f.cn)("w-full max-w-[620px] h-[520px] sm:h-[560px]", a),
					role: "img",
					"aria-label": "Animated Slack thread showing Roo Code responding as @Roomote",
					children: (0, b.jsxs)("div", {
						"aria-hidden": "true",
						className:
							"relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1A1D21] shadow-2xl shadow-black/30",
						children: [
							(0, b.jsxs)("div", {
								className: "flex items-center justify-between border-b border-white/10 px-4 py-3",
								children: [
									(0, b.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											(0, b.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-[#F24A4A]" }),
											(0, b.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-[#F2C94C]" }),
											(0, b.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-[#27AE60]" }),
											(0, b.jsx)("div", {
												className: "ml-3 text-sm font-semibold text-[#F8F8F9]",
												children: "Thread",
											}),
										],
									}),
									(0, b.jsxs)("div", {
										className: "flex items-center gap-2 text-[11px] text-[#8B8D91]",
										children: [
											(0, b.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#27AE60]" }),
											"Live demo",
										],
									}),
								],
							}),
							(0, b.jsx)("div", {
								ref: m,
								className:
									"flex-1 overflow-y-auto px-4 py-5 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.18)_transparent]",
								children: (0, b.jsxs)("div", {
									className: (0, f.cn)(
										"space-y-5 transition-opacity duration-300 will-change-opacity",
										"reset" === q.kind ? "opacity-0" : "opacity-100",
									),
									children: [
										s.map((a) =>
											(0, b.jsx)(
												i,
												{
													message: a,
													reduceMotion: j,
													isNew: "show" === q.kind && n[q.messageIndex]?.id === a.id,
												},
												a.id,
											),
										),
										t &&
											(0, b.jsxs)("div", {
												className: (0, f.cn)(
													j ? "" : "animate-in fade-in duration-300",
													"flex gap-3",
												),
												children: [
													(0, b.jsx)("div", {
														className: (0, f.cn)(
															"mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-xs font-semibold",
															t.avatarClassName,
														),
														children: t.avatarText,
													}),
													(0, b.jsxs)("div", {
														className: "min-w-0",
														children: [
															(0, b.jsxs)("div", {
																className: "flex items-baseline gap-x-2",
																children: [
																	(0, b.jsx)("span", {
																		className:
																			"text-[13px] font-semibold text-[#F8F8F9]",
																		children: t.author,
																	}),
																	"bot" === t.kind &&
																		(0, b.jsxs)("span", {
																			className:
																				"inline-flex items-center gap-1 rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] font-medium text-violet-200",
																			children: [
																				(0, b.jsx)(d, { className: "h-3 w-3" }),
																				"App",
																			],
																		}),
																	(0, b.jsx)("span", {
																		className: "text-[11px] text-[#8B8D91]",
																		children: "typing…",
																	}),
																],
															}),
															(0, b.jsx)("div", {
																className: "mt-2",
																children: (0, b.jsx)(g, {}),
															}),
														],
													}),
												],
											}),
									],
								}),
							}),
							(0, b.jsx)("div", {
								className: "flex items-center justify-between border-t border-white/10 px-4 py-3",
								children: (0, b.jsx)("div", {
									className: "flex items-center gap-1.5",
									children: n.map((a, c) =>
										(0, b.jsx)(
											"span",
											{
												className: (0, f.cn)(
													"h-1.5 w-5 rounded-full transition-colors duration-300",
													Math.max(0, r - 1) === c ? "bg-violet-300" : "bg-white/10",
												),
											},
											a.id,
										),
									),
								}),
							}),
						],
					}),
				})
			)
		}
		a.s(["SlackThreadDemo", () => j], 85806)
	},
]

//# sourceMappingURL=apps_web-roo-code_src_components_slack_slack-thread-demo_tsx_68b15df5._.js.map
