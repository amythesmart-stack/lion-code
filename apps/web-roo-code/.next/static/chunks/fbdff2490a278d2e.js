;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	76296,
	(e) => {
		"use strict"
		let s = (0, e.i(21387).default)("paperclip", [
			[
				"path",
				{
					d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
					key: "1miecu",
				},
			],
		])
		e.s(["Paperclip", () => s], 76296)
	},
	8715,
	(e) => {
		"use strict"
		var s = e.i(8026),
			a = e.i(10008)
		let t = (0, e.i(21387).default)("circle-check", [
			["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
			["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
		])
		var i = e.i(76296),
			l = e.i(45326)
		function n({ className: e }) {
			return (0, s.jsxs)("span", {
				className: (0, l.cn)("inline-flex items-center gap-1", e),
				"aria-hidden": "true",
				children: [
					(0, s.jsx)("span", {
						className: "h-1.5 w-1.5 rounded-full bg-[#8B8D91] animate-pulse [animation-delay:0ms]",
					}),
					(0, s.jsx)("span", {
						className: "h-1.5 w-1.5 rounded-full bg-[#8B8D91] animate-pulse [animation-delay:180ms]",
					}),
					(0, s.jsx)("span", {
						className: "h-1.5 w-1.5 rounded-full bg-[#8B8D91] animate-pulse [animation-delay:360ms]",
					}),
				],
			})
		}
		function r({ children: e, className: a }) {
			return (0, s.jsx)("span", {
				className: (0, l.cn)("text-violet-300 underline underline-offset-2", "cursor-default", a),
				children: e,
			})
		}
		function d({ message: e, isNew: a, reduceMotion: i }) {
			let n = ""
			return (
				!i && a && (n = "animate-in fade-in slide-in-from-bottom-2 duration-500"),
				(0, s.jsxs)("div", {
					className: (0, l.cn)("flex gap-3", n),
					children: [
						(0, s.jsx)("div", {
							className: (0, l.cn)(
								"mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-xs font-semibold",
								e.avatarClassName,
							),
							children: e.avatarText,
						}),
						(0, s.jsxs)("div", {
							className: "min-w-0",
							children: [
								(0, s.jsxs)("div", {
									className: "flex flex-wrap items-baseline gap-x-2 gap-y-1",
									children: [
										(0, s.jsx)("span", {
											className: "text-[13px] font-semibold text-[#F8F8F9]",
											children: e.author,
										}),
										(0, s.jsx)("span", {
											className: "text-[11px] text-[#8B8D91]",
											children: e.timeLabel,
										}),
										"bot" === e.kind &&
											(0, s.jsxs)("span", {
												className:
													"inline-flex items-center gap-1 rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] font-medium text-violet-200",
												children: [(0, s.jsx)(t, { className: "h-3 w-3" }), "App"],
											}),
									],
								}),
								(0, s.jsx)("div", {
									className: "mt-1 text-[13px] leading-relaxed text-[#D1D2D3]",
									children: e.body,
								}),
							],
						}),
					],
				})
			)
		}
		function o({ className: e }) {
			let o = (function () {
					let [e, s] = (0, a.useState)(!1)
					return (
						(0, a.useEffect)(() => {
							let e = window.matchMedia("(prefers-reduced-motion: reduce)"),
								a = () => s(e.matches)
							return (a(), "function" == typeof e.addEventListener)
								? (e.addEventListener("change", a), () => e.removeEventListener("change", a))
								: (e.addListener?.(a), () => e.removeListener?.(a))
						}, []),
						e
					)
				})(),
				[c, x] = (0, a.useState)(0),
				m = (0, a.useRef)(null),
				h = (0, a.useMemo)(
					() => [
						{
							id: "m1",
							author: "Avery Lee",
							timeLabel: "Monday at 2:56 PM",
							avatarText: "AL",
							avatarClassName: "bg-[#2B2D31] text-[#F8F8F9] ring-1 ring-white/10",
							kind: "human",
							body: (0, s.jsx)("span", {
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
							body: (0, s.jsxs)("div", {
								className: "space-y-2",
								children: [
									(0, s.jsxs)("div", {
										children: [
											"The documentation for using Roo Code from Slack is here:",
											" ",
											(0, s.jsx)(r, {
												className: "hover:text-violet-200",
												children: "https://docs.roocode.com/roo-code-cloud/slack-integration",
											}),
										],
									}),
									(0, s.jsx)("div", {
										className: "text-[#B8BBC0]",
										children: "Here are some pages from our site we can use for guidance:",
									}),
									(0, s.jsxs)("ol", {
										className: "list-decimal pl-5 text-[#D1D2D3]",
										children: [
											(0, s.jsx)("li", {
												children: (0, s.jsx)(r, {
													className: "hover:text-violet-200",
													children: "https://roocode.com",
												}),
											}),
											(0, s.jsx)("li", {
												children: (0, s.jsx)(r, {
													className: "hover:text-violet-200",
													children: "https://roocode.com/extension",
												}),
											}),
											(0, s.jsx)("li", {
												children: (0, s.jsx)(r, {
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
							body: (0, s.jsxs)("div", {
								className: "space-y-3",
								children: [
									(0, s.jsx)("div", {
										children: "This is the start of a wireframe I have in mind for this page",
									}),
									(0, s.jsxs)("div", {
										className:
											"w-full max-w-[420px] rounded-lg border border-white/10 bg-black/20 p-3",
										children: [
											(0, s.jsxs)("div", {
												className: "flex items-center gap-2 text-[12px] text-[#B8BBC0]",
												children: [
													(0, s.jsx)(i.Paperclip, { className: "h-4 w-4" }),
													"IMG_9721.heic",
												],
											}),
											(0, s.jsx)("div", {
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
							body: (0, s.jsxs)("span", {
								children: [
									(0, s.jsx)(r, {
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
							body: (0, s.jsxs)("div", {
								className: "space-y-3",
								children: [
									(0, s.jsxs)("div", {
										className:
											"rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-[#D1D2D3]",
										children: [
											"Calling ",
											(0, s.jsx)("span", {
												className: "font-semibold text-[#F8F8F9]",
												children: "Planneroo",
											}),
											" to get started on your task on",
											" ",
											(0, s.jsx)("code", {
												className:
													"rounded bg-white/10 px-1.5 py-0.5 text-[12px] text-[#F8F8F9]",
												children: "RooCodeInc/Roo-Code",
											}),
										],
									}),
									(0, s.jsx)("div", {
										children: (0, s.jsx)("button", {
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
							body: (0, s.jsxs)("div", {
								className: "space-x-2",
								children: [
									(0, s.jsx)("span", { children: "Cool, I'll knock this out real quick." }),
									(0, s.jsx)(r, { className: "hover:text-violet-200", children: "Follow along" }),
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
							body: (0, s.jsxs)("div", {
								className: "space-y-2",
								children: [
									(0, s.jsx)("div", {
										className: "font-semibold text-[#F8F8F9]",
										children: "Todo List:",
									}),
									(0, s.jsx)("div", {
										className: "rounded-lg border border-white/10 bg-black/20 px-3 py-2",
										children: (0, s.jsx)("ul", {
											className: "space-y-1",
											children: [
												"Analyze existing page structures and component patterns",
												"Review marketing content requirements and wireframe details",
												"Create detailed component architecture plan",
												"Design page structure and section breakdown",
												"Plan navigation updates and integration points",
												"Test the page and verify all sections work",
											].map((e) =>
												(0, s.jsxs)(
													"li",
													{
														className: "text-[#D1D2D3]",
														children: [
															(0, s.jsx)("span", { className: "mr-2", children: "•" }),
															(0, s.jsx)("span", {
																className: "line-through opacity-80",
																children: e,
															}),
														],
													},
													e,
												),
											),
										}),
									}),
									(0, s.jsx)("div", {
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
							body: (0, s.jsxs)("div", {
								className: "space-y-3",
								children: [
									(0, s.jsxs)("p", {
										children: [
											"I've created a comprehensive implementation plan for the Roo Code Slack integration marketing page at",
											" ",
											(0, s.jsx)("code", {
												className:
													"rounded bg-white/10 px-1.5 py-0.5 text-[12px] text-[#F8F8F9]",
												children: "plans/slack-marketing-page-plan.md",
											}),
											".",
										],
									}),
									(0, s.jsxs)("div", {
										className: "rounded-lg border border-white/10 bg-black/20 px-3 py-2",
										children: [
											(0, s.jsx)("div", {
												className: "text-[12px] font-semibold text-[#F8F8F9]",
												children: "Plan Overview",
											}),
											(0, s.jsxs)("ul", {
												className: "mt-2 space-y-1 text-[#D1D2D3]",
												children: [
													(0, s.jsxs)("li", {
														children: [
															(0, s.jsx)("span", { className: "mr-2", children: "•" }),
															"Hero + dual CTAs",
														],
													}),
													(0, s.jsxs)("li", {
														children: [
															(0, s.jsx)("span", { className: "mr-2", children: "•" }),
															"Value props grid",
														],
													}),
													(0, s.jsxs)("li", {
														children: [
															(0, s.jsx)("span", { className: "mr-2", children: "•" }),
															"“Thread to Shipped Feature” workflow",
														],
													}),
													(0, s.jsxs)("li", {
														children: [
															(0, s.jsx)("span", { className: "mr-2", children: "•" }),
															"Onboarding steps + CTA",
														],
													}),
												],
											}),
										],
									}),
									(0, s.jsxs)("div", {
										className: "space-x-2",
										children: [
											(0, s.jsx)("span", {
												className: "text-[#B8BBC0]",
												children: "Full document:",
											}),
											(0, s.jsx)(r, {
												className: "hover:text-violet-200",
												children: "View artifact",
											}),
										],
									}),
									(0, s.jsx)("div", {
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
							body: (0, s.jsxs)("div", {
								className: "space-x-2",
								children: [
									(0, s.jsx)(r, {
										className: "no-underline hover:text-violet-200",
										children: "@Roomote",
									}),
									(0, s.jsx)("span", {
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
							body: (0, s.jsxs)("div", {
								className: "space-y-3",
								children: [
									(0, s.jsx)("p", {
										children:
											"I've built the Roo Code Slack integration marketing page. Here's what was implemented:",
									}),
									(0, s.jsxs)("div", {
										className: "rounded-lg border border-white/10 bg-black/20 px-3 py-2",
										children: [
											(0, s.jsx)("div", {
												className: "text-[12px] font-semibold text-[#F8F8F9]",
												children: "Files",
											}),
											(0, s.jsxs)("ul", {
												className: "mt-2 space-y-1 text-[#D1D2D3]",
												children: [
													(0, s.jsxs)("li", {
														children: [
															(0, s.jsx)("span", { className: "mr-2", children: "•" }),
															(0, s.jsx)("code", {
																className:
																	"rounded bg-white/10 px-1.5 py-0.5 text-[12px] text-[#F8F8F9]",
																children: "apps/web-roo-code/src/app/slack/page.tsx",
															}),
															" ",
															"— Slack marketing page",
														],
													}),
													(0, s.jsxs)("li", {
														children: [
															(0, s.jsx)("span", { className: "mr-2", children: "•" }),
															(0, s.jsx)("code", {
																className:
																	"rounded bg-white/10 px-1.5 py-0.5 text-[12px] text-[#F8F8F9]",
																children: "apps/web-roo-code/src/lib/constants.ts",
															}),
															" ",
															"— added",
															" ",
															(0, s.jsx)("code", {
																className:
																	"rounded bg-white/10 px-1.5 py-0.5 text-[12px] text-[#F8F8F9]",
																children: "SLACK_DOCS",
															}),
														],
													}),
													(0, s.jsxs)("li", {
														children: [
															(0, s.jsx)("span", { className: "mr-2", children: "•" }),
															(0, s.jsx)("code", {
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
									(0, s.jsxs)("div", {
										className: "rounded-lg border border-white/10 bg-black/20 px-3 py-2",
										children: [
											(0, s.jsx)("div", {
												className: "text-[12px] font-semibold text-[#F8F8F9]",
												children: "Pull Request",
											}),
											(0, s.jsxs)("div", {
												className: "mt-2",
												children: [
													(0, s.jsx)("span", {
														className: "font-semibold text-[#F8F8F9]",
														children: "PR #10853",
													}),
													":",
													" ",
													(0, s.jsx)(r, {
														className: "hover:text-violet-200",
														children: "https://github.com/RooCodeInc/Roo-Code/pull/10853",
													}),
												],
											}),
										],
									}),
									(0, s.jsxs)("p", {
										className: "text-[#B8BBC0]",
										children: [
											"The page is accessible at",
											" ",
											(0, s.jsx)("code", {
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
				p = (0, a.useMemo)(() => {
					let e = []
					if (0 === h.length) return [{ kind: "reset" }]
					e.push({ kind: "typing", messageIndex: 0 }), e.push({ kind: "show", messageIndex: 0 })
					for (let s = 1; s < h.length; s += 1)
						e.push({ kind: "typing", messageIndex: s }), e.push({ kind: "show", messageIndex: s })
					return e.push({ kind: "reset" }), e
				}, [h]),
				u = (0, a.useMemo)(() => {
					let e = -1
					for (let s = 0; s < p.length; s += 1) p[s]?.kind === "show" && (e = s)
					return e
				}, [p])
			;(0, a.useEffect)(() => {
				if (o) return void x(u >= 0 ? u : 0)
				let e = p[c] ?? p.at(0),
					s = e?.kind === "show" && c === u,
					a = e?.kind === "reset" ? 500 : e?.kind === "typing" ? 900 : s ? 4400 : 2200,
					t = window.setTimeout(() => {
						x((e) => (e + 1) % p.length)
					}, a)
				return () => window.clearTimeout(t)
			}, [u, p, o, c])
			let v = p[c] ?? p.at(0) ?? { kind: "reset" },
				g = "reset" === v.kind ? 0 : "typing" === v.kind ? v.messageIndex : v.messageIndex + 1,
				b = h.slice(0, g),
				j = "typing" === v.kind ? h[v.messageIndex] : void 0
			return (
				(0, a.useEffect)(() => {
					let e = m.current
					if (e) {
						if ("reset" === v.kind || g <= 1) return void e.scrollTo({ top: 0, behavior: "auto" })
						e.scrollTo({ top: e.scrollHeight, behavior: o ? "auto" : "smooth" })
					}
				}, [v.kind, o, g]),
				(0, s.jsx)("div", {
					className: (0, l.cn)("w-full max-w-[620px] h-[520px] sm:h-[560px]", e),
					role: "img",
					"aria-label": "Animated Slack thread showing Roo Code responding as @Roomote",
					children: (0, s.jsxs)("div", {
						"aria-hidden": "true",
						className:
							"relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1A1D21] shadow-2xl shadow-black/30",
						children: [
							(0, s.jsxs)("div", {
								className: "flex items-center justify-between border-b border-white/10 px-4 py-3",
								children: [
									(0, s.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											(0, s.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-[#F24A4A]" }),
											(0, s.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-[#F2C94C]" }),
											(0, s.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-[#27AE60]" }),
											(0, s.jsx)("div", {
												className: "ml-3 text-sm font-semibold text-[#F8F8F9]",
												children: "Thread",
											}),
										],
									}),
									(0, s.jsxs)("div", {
										className: "flex items-center gap-2 text-[11px] text-[#8B8D91]",
										children: [
											(0, s.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#27AE60]" }),
											"Live demo",
										],
									}),
								],
							}),
							(0, s.jsx)("div", {
								ref: m,
								className:
									"flex-1 overflow-y-auto px-4 py-5 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.18)_transparent]",
								children: (0, s.jsxs)("div", {
									className: (0, l.cn)(
										"space-y-5 transition-opacity duration-300 will-change-opacity",
										"reset" === v.kind ? "opacity-0" : "opacity-100",
									),
									children: [
										b.map((e) =>
											(0, s.jsx)(
												d,
												{
													message: e,
													reduceMotion: o,
													isNew: "show" === v.kind && h[v.messageIndex]?.id === e.id,
												},
												e.id,
											),
										),
										j &&
											(0, s.jsxs)("div", {
												className: (0, l.cn)(
													o ? "" : "animate-in fade-in duration-300",
													"flex gap-3",
												),
												children: [
													(0, s.jsx)("div", {
														className: (0, l.cn)(
															"mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-xs font-semibold",
															j.avatarClassName,
														),
														children: j.avatarText,
													}),
													(0, s.jsxs)("div", {
														className: "min-w-0",
														children: [
															(0, s.jsxs)("div", {
																className: "flex items-baseline gap-x-2",
																children: [
																	(0, s.jsx)("span", {
																		className:
																			"text-[13px] font-semibold text-[#F8F8F9]",
																		children: j.author,
																	}),
																	"bot" === j.kind &&
																		(0, s.jsxs)("span", {
																			className:
																				"inline-flex items-center gap-1 rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] font-medium text-violet-200",
																			children: [
																				(0, s.jsx)(t, { className: "h-3 w-3" }),
																				"App",
																			],
																		}),
																	(0, s.jsx)("span", {
																		className: "text-[11px] text-[#8B8D91]",
																		children: "typing…",
																	}),
																],
															}),
															(0, s.jsx)("div", {
																className: "mt-2",
																children: (0, s.jsx)(n, {}),
															}),
														],
													}),
												],
											}),
									],
								}),
							}),
							(0, s.jsx)("div", {
								className: "flex items-center justify-between border-t border-white/10 px-4 py-3",
								children: (0, s.jsx)("div", {
									className: "flex items-center gap-1.5",
									children: h.map((e, a) =>
										(0, s.jsx)(
											"span",
											{
												className: (0, l.cn)(
													"h-1.5 w-5 rounded-full transition-colors duration-300",
													Math.max(0, g - 1) === a ? "bg-violet-300" : "bg-white/10",
												),
											},
											e.id,
										),
									),
								}),
							}),
						],
					}),
				})
			)
		}
		e.s(["SlackThreadDemo", () => o], 8715)
	},
])
