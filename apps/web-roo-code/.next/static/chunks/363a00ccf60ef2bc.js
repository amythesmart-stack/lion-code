;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	76296,
	(e) => {
		"use strict"
		let t = (0, e.i(21387).default)("paperclip", [
			[
				"path",
				{
					d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
					key: "1miecu",
				},
			],
		])
		e.s(["Paperclip", () => t], 76296)
	},
	50747,
	(e) => {
		"use strict"
		var t = e.i(8026),
			s = e.i(10008),
			a = e.i(91686),
			i = e.i(93702),
			n = e.i(76296)
		let l = (0, e.i(21387).default)("send", [
			[
				"path",
				{
					d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
					key: "1ffxy3",
				},
			],
			["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
		])
		var d = e.i(45326)
		function r({ className: e }) {
			return (0, t.jsxs)("span", {
				className: (0, d.cn)("inline-flex items-center gap-0.5", e),
				"aria-hidden": "true",
				children: [
					(0, t.jsx)("span", {
						className: "h-1 w-1 rounded-full bg-[#8B8D91] animate-pulse [animation-delay:0ms]",
					}),
					(0, t.jsx)("span", {
						className: "h-1 w-1 rounded-full bg-[#8B8D91] animate-pulse [animation-delay:180ms]",
					}),
					(0, t.jsx)("span", {
						className: "h-1 w-1 rounded-full bg-[#8B8D91] animate-pulse [animation-delay:360ms]",
					}),
				],
			})
		}
		function c({ className: e }) {
			return (0, t.jsx)("svg", {
				className: e,
				viewBox: "0 0 100 100",
				fill: "currentColor",
				xmlns: "http://www.w3.org/2000/svg",
				children: (0, t.jsx)("path", {
					d: "M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z",
				}),
			})
		}
		function o({ item: e, isNew: s, reduceMotion: a }) {
			let n = ""
			return (!a && s && (n = "animate-in fade-in slide-in-from-bottom-1 duration-300"), "event" === e.kind)
				? (0, t.jsxs)("div", {
						className: (0, d.cn)("flex items-center gap-2 text-[13px] text-[#8B8D91]", n),
						children: [
							(0, t.jsx)("div", {
								className: (0, d.cn)(
									"flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold",
									e.avatarClassName,
								),
								children: e.avatarText,
							}),
							(0, t.jsx)("span", { className: "text-[#F8F8F9]", children: e.author }),
							(0, t.jsx)("span", { children: e.body }),
							(0, t.jsx)("span", { className: "text-[#5C5F66]", children: "·" }),
							(0, t.jsx)("span", { children: e.timeLabel }),
						],
					})
				: "pr-link" === e.kind
					? (0, t.jsxs)("div", {
							className: (0, d.cn)("flex items-center gap-2 text-[13px] text-[#8B8D91]", n),
							children: [
								(0, t.jsx)(i.GitPullRequest, { className: "h-4 w-4 shrink-0 text-emerald-500" }),
								(0, t.jsx)("span", { children: e.body }),
								(0, t.jsx)("span", { className: "text-[#5C5F66]", children: "·" }),
								(0, t.jsx)("span", { children: e.timeLabel }),
							],
						})
					: (0, t.jsxs)("div", {
							className: (0, d.cn)("flex gap-2.5", n),
							children: [
								(0, t.jsx)("div", {
									className: (0, d.cn)(
										"mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold",
										e.avatarClassName,
									),
									children: e.avatarText,
								}),
								(0, t.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [
										(0, t.jsxs)("div", {
											className: "flex items-center gap-2 text-[13px]",
											children: [
												(0, t.jsx)("span", {
													className: "font-medium text-[#F8F8F9]",
													children: e.author,
												}),
												(0, t.jsx)("span", { className: "text-[#5C5F66]", children: "·" }),
												(0, t.jsx)("span", {
													className: "text-[#8B8D91]",
													children: e.timeLabel,
												}),
											],
										}),
										(0, t.jsx)("div", {
											className: "mt-1 text-[13px] leading-relaxed text-[#D1D2D3]",
											children: e.body,
										}),
									],
								}),
							],
						})
		}
		function x({ className: e }) {
			let x = (function () {
					let [e, t] = (0, s.useState)(!1)
					return (
						(0, s.useEffect)(() => {
							let e = window.matchMedia("(prefers-reduced-motion: reduce)"),
								s = () => t(e.matches)
							return (s(), "function" == typeof e.addEventListener)
								? (e.addEventListener("change", s), () => e.removeEventListener("change", s))
								: (e.addListener?.(s), () => e.removeListener?.(s))
						}, []),
						e
					)
				})(),
				[m, h] = (0, s.useState)(0),
				p = (0, s.useRef)(null),
				u = (0, s.useMemo)(
					() => [
						{
							id: "a1",
							kind: "comment",
							author: "Jordan",
							avatarText: "J",
							avatarClassName: "bg-amber-600 text-white",
							body: (0, t.jsxs)("span", {
								children: [
									(0, t.jsx)("span", { className: "text-indigo-400", children: "@Roo Code" }),
									" Can you implement this feature?",
								],
							}),
							timeLabel: "2m ago",
						},
						{
							id: "a2",
							kind: "comment",
							author: "Roo Code",
							avatarText: "R",
							avatarClassName: "bg-indigo-600 text-white",
							body: (0, t.jsx)("span", { children: "Analyzing issue requirements and codebase..." }),
							timeLabel: "2m ago",
						},
						{
							id: "a3",
							kind: "event",
							author: "Roo Code",
							avatarText: "R",
							avatarClassName: "bg-indigo-600 text-white",
							body: (0, t.jsx)("span", { children: "moved to In Progress" }),
							timeLabel: "2m ago",
						},
						{
							id: "a4",
							kind: "comment",
							author: "Roo Code",
							avatarText: "R",
							avatarClassName: "bg-indigo-600 text-white",
							body: (0, t.jsx)("span", {
								children: "Planning implementation: Settings component with light/dark toggle.",
							}),
							timeLabel: "1m ago",
						},
						{
							id: "a5",
							kind: "comment",
							author: "Jordan",
							avatarText: "J",
							avatarClassName: "bg-amber-600 text-white",
							body: (0, t.jsxs)("span", {
								children: [
									(0, t.jsx)("span", { className: "text-indigo-400", children: "@Roo Code" }),
									' Please also add a "system" option that follows OS preference.',
								],
							}),
							timeLabel: "1m ago",
						},
						{
							id: "a6",
							kind: "comment",
							author: "Roo Code",
							avatarText: "R",
							avatarClassName: "bg-indigo-600 text-white",
							body: (0, t.jsxs)("span", {
								children: [
									"Got it! Adding system preference detection using",
									" ",
									(0, t.jsx)("code", {
										className: "rounded bg-white/10 px-1 py-0.5 text-[12px] text-[#F8F8F9]",
										children: "prefers-color-scheme",
									}),
								],
							}),
							timeLabel: "30s ago",
						},
						{
							id: "a7",
							kind: "pr-link",
							body: (0, t.jsxs)("span", {
								children: [
									(0, t.jsx)("span", { className: "text-[#F8F8F9]", children: "Roo Code" }),
									" linked",
									" ",
									(0, t.jsx)("span", { className: "text-emerald-400", children: "PR #847" }),
								],
							}),
							timeLabel: "just now",
						},
						{
							id: "a8",
							kind: "comment",
							author: "Roo Code",
							avatarText: "R",
							avatarClassName: "bg-indigo-600 text-white",
							body: (0, t.jsxs)("div", {
								className: "space-y-2",
								children: [
									(0, t.jsxs)("div", {
										children: [
											"PR ready for review:",
											" ",
											(0, t.jsx)("span", {
												className: "text-indigo-400 hover:underline cursor-default",
												children: "#847",
											}),
										],
									}),
									(0, t.jsxs)("div", {
										className:
											"rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-[12px]",
										children: [
											(0, t.jsxs)("div", {
												className: "flex items-center gap-2 text-emerald-400",
												children: [
													(0, t.jsx)(i.GitPullRequest, { className: "h-3.5 w-3.5" }),
													(0, t.jsx)("span", {
														className: "font-medium",
														children: "feat: add theme toggle with system preference",
													}),
												],
											}),
											(0, t.jsx)("div", {
												className: "mt-1 text-[#8B8D91]",
												children: "+142 -12 · 3 files changed",
											}),
										],
									}),
								],
							}),
							timeLabel: "just now",
						},
					],
					[],
				),
				f = (0, s.useMemo)(() => {
					let e = []
					e.push({ kind: "issue" })
					for (let t = 0; t < u.length; t += 1) {
						let s = u[t]
						s?.kind === "comment" && e.push({ kind: "typing", activityIndex: t }),
							e.push({ kind: "show", activityIndex: t })
					}
					return e.push({ kind: "reset" }), e
				}, [u]),
				g = (0, s.useMemo)(() => {
					let e = -1
					for (let t = 0; t < f.length; t += 1) f[t]?.kind === "show" && (e = t)
					return e
				}, [f])
			;(0, s.useEffect)(() => {
				if (x) return void h(g >= 0 ? g : 0)
				let e = f[m] ?? f.at(0),
					t = e?.kind === "show" && m === g,
					s =
						e?.kind === "reset"
							? 500
							: e?.kind === "issue"
								? 1500
								: e?.kind === "typing"
									? 800
									: t
										? 5e3
										: 2e3,
					a = window.setTimeout(() => {
						h((m + 1) % f.length)
					}, s)
				return () => window.clearTimeout(a)
			}, [g, f, x, m])
			let j = f[m] ?? f.at(0) ?? { kind: "issue" },
				v =
					"reset" === j.kind || "issue" === j.kind
						? 0
						: "typing" === j.kind
							? j.activityIndex
							: j.activityIndex + 1,
				b = u.slice(0, v),
				N = "typing" === j.kind ? u[j.activityIndex] : void 0
			;(0, s.useEffect)(() => {
				let e = p.current
				if (e) {
					if ("reset" === j.kind || "issue" === j.kind || v <= 1)
						return void e.scrollTo({ top: 0, behavior: "auto" })
					e.scrollTo({ top: e.scrollHeight, behavior: x ? "auto" : "smooth" })
				}
			}, [j.kind, x, v])
			let w = "reset" !== j.kind
			return (0, t.jsx)("div", {
				className: (0, d.cn)("w-full max-w-[540px] h-[520px] sm:h-[560px]", e),
				role: "img",
				"aria-label": "Animated Linear issue showing Roo Code responding to a comment",
				children: (0, t.jsxs)("div", {
					"aria-hidden": "true",
					className:
						"relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1F2023] shadow-2xl shadow-black/40",
					children: [
						(0, t.jsxs)("div", {
							className: "flex items-center gap-2 border-b border-white/10 px-4 py-2.5 text-[13px]",
							children: [
								(0, t.jsx)(c, { className: "h-4 w-4 text-[#8B8D91]" }),
								(0, t.jsx)("span", { className: "text-[#8B8D91]", children: "Frontend" }),
								(0, t.jsx)(a.ChevronRight, { className: "h-3 w-3 text-[#5C5F66]" }),
								(0, t.jsx)("span", { className: "text-[#F8F8F9]", children: "FE-312" }),
								(0, t.jsxs)("div", {
									className: "ml-auto flex items-center gap-2 text-[11px] text-[#8B8D91]",
									children: [
										(0, t.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#27AE60]" }),
										"Live demo",
									],
								}),
							],
						}),
						(0, t.jsxs)("div", {
							className: (0, d.cn)(
								"flex flex-col flex-1 overflow-hidden transition-opacity duration-300 will-change-opacity",
								w ? "opacity-100" : "opacity-0",
							),
							children: [
								(0, t.jsxs)("div", {
									className: "px-4 pt-4 pb-3",
									children: [
										(0, t.jsx)("h3", {
											className: "text-lg font-semibold text-[#F8F8F9] leading-tight",
											children: "Add dark mode toggle to settings",
										}),
										(0, t.jsx)("p", {
											className: "mt-2 text-[13px] text-[#8B8D91] leading-relaxed",
											children:
												"Users should be able to switch between light and dark themes from the settings page. Persist preference to localStorage and apply immediately.",
										}),
									],
								}),
								(0, t.jsxs)("div", {
									className: "flex-1 overflow-hidden flex flex-col border-t border-white/10",
									children: [
										(0, t.jsxs)("div", {
											className: "px-4 py-2.5 flex items-center justify-between",
											children: [
												(0, t.jsx)("span", {
													className: "text-[13px] font-medium text-[#F8F8F9]",
													children: "Activity",
												}),
												(0, t.jsx)("span", {
													className: "text-[12px] text-[#5C5F66]",
													children: "Unsubscribe",
												}),
											],
										}),
										(0, t.jsx)("div", {
											ref: p,
											className:
												"flex-1 overflow-y-auto px-4 pb-3 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.1)_transparent]",
											children: (0, t.jsxs)("div", {
												className: "space-y-3",
												children: [
													b.map((e) =>
														(0, t.jsx)(
															o,
															{
																item: e,
																reduceMotion: x,
																isNew:
																	"show" === j.kind &&
																	u[j.activityIndex]?.id === e.id,
															},
															e.id,
														),
													),
													N &&
														"comment" === N.kind &&
														(0, t.jsxs)("div", {
															className: (0, d.cn)(
																x ? "" : "animate-in fade-in duration-300",
																"flex gap-2.5",
															),
															children: [
																(0, t.jsx)("div", {
																	className: (0, d.cn)(
																		"mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold",
																		N.avatarClassName,
																	),
																	children: N.avatarText,
																}),
																(0, t.jsx)("div", {
																	className: "min-w-0",
																	children: (0, t.jsxs)("div", {
																		className:
																			"flex items-center gap-2 text-[13px]",
																		children: [
																			(0, t.jsx)("span", {
																				className: "font-medium text-[#F8F8F9]",
																				children: N.author,
																			}),
																			(0, t.jsx)("span", {
																				className: "text-[#8B8D91]",
																				children: "typing",
																			}),
																			(0, t.jsx)(r, {}),
																		],
																	}),
																}),
															],
														}),
												],
											}),
										}),
									],
								}),
								(0, t.jsx)("div", {
									className: "border-t border-white/10 px-4 py-3",
									children: (0, t.jsxs)("div", {
										className:
											"flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-2",
										children: [
											(0, t.jsx)("span", {
												className: "flex-1 text-[13px] text-[#5C5F66]",
												children: "Leave a comment...",
											}),
											(0, t.jsx)(n.Paperclip, { className: "h-4 w-4 text-[#5C5F66]" }),
											(0, t.jsx)(l, { className: "h-4 w-4 text-[#5C5F66]" }),
										],
									}),
								}),
							],
						}),
						(0, t.jsx)("div", {
							className: "flex items-center justify-center border-t border-white/10 px-4 py-2",
							children: (0, t.jsx)("div", {
								className: "flex items-center gap-1",
								children: u.map((e, s) =>
									(0, t.jsx)(
										"span",
										{
											className: (0, d.cn)(
												"h-1 w-3 rounded-full transition-colors duration-300",
												Math.max(0, v - 1) === s ? "bg-indigo-400" : "bg-white/10",
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
		}
		e.s(["LinearIssueDemo", () => x], 50747)
	},
])
