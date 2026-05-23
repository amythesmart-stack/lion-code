module.exports = [
	655,
	(a) => {
		"use strict"
		let b = (0, a.i(8402).default)("paperclip", [
			[
				"path",
				{
					d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
					key: "1miecu",
				},
			],
		])
		a.s(["Paperclip", () => b], 655)
	},
	72256,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(67191),
			d = a.i(18823),
			e = a.i(95368),
			f = a.i(655)
		let g = (0, a.i(8402).default)("send", [
			[
				"path",
				{
					d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
					key: "1ffxy3",
				},
			],
			["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
		])
		var h = a.i(42685)
		function i({ className: a }) {
			return (0, b.jsxs)("span", {
				className: (0, h.cn)("inline-flex items-center gap-0.5", a),
				"aria-hidden": "true",
				children: [
					(0, b.jsx)("span", {
						className: "h-1 w-1 rounded-full bg-[#8B8D91] animate-pulse [animation-delay:0ms]",
					}),
					(0, b.jsx)("span", {
						className: "h-1 w-1 rounded-full bg-[#8B8D91] animate-pulse [animation-delay:180ms]",
					}),
					(0, b.jsx)("span", {
						className: "h-1 w-1 rounded-full bg-[#8B8D91] animate-pulse [animation-delay:360ms]",
					}),
				],
			})
		}
		function j({ className: a }) {
			return (0, b.jsx)("svg", {
				className: a,
				viewBox: "0 0 100 100",
				fill: "currentColor",
				xmlns: "http://www.w3.org/2000/svg",
				children: (0, b.jsx)("path", {
					d: "M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z",
				}),
			})
		}
		function k({ item: a, isNew: c, reduceMotion: d }) {
			let f = ""
			return (!d && c && (f = "animate-in fade-in slide-in-from-bottom-1 duration-300"), "event" === a.kind)
				? (0, b.jsxs)("div", {
						className: (0, h.cn)("flex items-center gap-2 text-[13px] text-[#8B8D91]", f),
						children: [
							(0, b.jsx)("div", {
								className: (0, h.cn)(
									"flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold",
									a.avatarClassName,
								),
								children: a.avatarText,
							}),
							(0, b.jsx)("span", { className: "text-[#F8F8F9]", children: a.author }),
							(0, b.jsx)("span", { children: a.body }),
							(0, b.jsx)("span", { className: "text-[#5C5F66]", children: "·" }),
							(0, b.jsx)("span", { children: a.timeLabel }),
						],
					})
				: "pr-link" === a.kind
					? (0, b.jsxs)("div", {
							className: (0, h.cn)("flex items-center gap-2 text-[13px] text-[#8B8D91]", f),
							children: [
								(0, b.jsx)(e.GitPullRequest, { className: "h-4 w-4 shrink-0 text-emerald-500" }),
								(0, b.jsx)("span", { children: a.body }),
								(0, b.jsx)("span", { className: "text-[#5C5F66]", children: "·" }),
								(0, b.jsx)("span", { children: a.timeLabel }),
							],
						})
					: (0, b.jsxs)("div", {
							className: (0, h.cn)("flex gap-2.5", f),
							children: [
								(0, b.jsx)("div", {
									className: (0, h.cn)(
										"mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold",
										a.avatarClassName,
									),
									children: a.avatarText,
								}),
								(0, b.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [
										(0, b.jsxs)("div", {
											className: "flex items-center gap-2 text-[13px]",
											children: [
												(0, b.jsx)("span", {
													className: "font-medium text-[#F8F8F9]",
													children: a.author,
												}),
												(0, b.jsx)("span", { className: "text-[#5C5F66]", children: "·" }),
												(0, b.jsx)("span", {
													className: "text-[#8B8D91]",
													children: a.timeLabel,
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
		}
		function l({ className: a }) {
			let l = (function () {
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
				[m, n] = (0, c.useState)(0),
				o = (0, c.useRef)(null),
				p = (0, c.useMemo)(
					() => [
						{
							id: "a1",
							kind: "comment",
							author: "Jordan",
							avatarText: "J",
							avatarClassName: "bg-amber-600 text-white",
							body: (0, b.jsxs)("span", {
								children: [
									(0, b.jsx)("span", { className: "text-indigo-400", children: "@Roo Code" }),
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
							body: (0, b.jsx)("span", { children: "Analyzing issue requirements and codebase..." }),
							timeLabel: "2m ago",
						},
						{
							id: "a3",
							kind: "event",
							author: "Roo Code",
							avatarText: "R",
							avatarClassName: "bg-indigo-600 text-white",
							body: (0, b.jsx)("span", { children: "moved to In Progress" }),
							timeLabel: "2m ago",
						},
						{
							id: "a4",
							kind: "comment",
							author: "Roo Code",
							avatarText: "R",
							avatarClassName: "bg-indigo-600 text-white",
							body: (0, b.jsx)("span", {
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
							body: (0, b.jsxs)("span", {
								children: [
									(0, b.jsx)("span", { className: "text-indigo-400", children: "@Roo Code" }),
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
							body: (0, b.jsxs)("span", {
								children: [
									"Got it! Adding system preference detection using",
									" ",
									(0, b.jsx)("code", {
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
							body: (0, b.jsxs)("span", {
								children: [
									(0, b.jsx)("span", { className: "text-[#F8F8F9]", children: "Roo Code" }),
									" linked",
									" ",
									(0, b.jsx)("span", { className: "text-emerald-400", children: "PR #847" }),
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
							body: (0, b.jsxs)("div", {
								className: "space-y-2",
								children: [
									(0, b.jsxs)("div", {
										children: [
											"PR ready for review:",
											" ",
											(0, b.jsx)("span", {
												className: "text-indigo-400 hover:underline cursor-default",
												children: "#847",
											}),
										],
									}),
									(0, b.jsxs)("div", {
										className:
											"rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-[12px]",
										children: [
											(0, b.jsxs)("div", {
												className: "flex items-center gap-2 text-emerald-400",
												children: [
													(0, b.jsx)(e.GitPullRequest, { className: "h-3.5 w-3.5" }),
													(0, b.jsx)("span", {
														className: "font-medium",
														children: "feat: add theme toggle with system preference",
													}),
												],
											}),
											(0, b.jsx)("div", {
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
				q = (0, c.useMemo)(() => {
					let a = []
					a.push({ kind: "issue" })
					for (let b = 0; b < p.length; b += 1) {
						let c = p[b]
						c?.kind === "comment" && a.push({ kind: "typing", activityIndex: b }),
							a.push({ kind: "show", activityIndex: b })
					}
					return a.push({ kind: "reset" }), a
				}, [p]),
				r = (0, c.useMemo)(() => {
					let a = -1
					for (let b = 0; b < q.length; b += 1) q[b]?.kind === "show" && (a = b)
					return a
				}, [q])
			;(0, c.useEffect)(() => {
				if (l) return void n(r >= 0 ? r : 0)
				let a = q[m] ?? q.at(0),
					b = a?.kind === "show" && m === r,
					c =
						a?.kind === "reset"
							? 500
							: a?.kind === "issue"
								? 1500
								: a?.kind === "typing"
									? 800
									: b
										? 5e3
										: 2e3,
					d = window.setTimeout(() => {
						n((m + 1) % q.length)
					}, c)
				return () => window.clearTimeout(d)
			}, [r, q, l, m])
			let s = q[m] ?? q.at(0) ?? { kind: "issue" },
				t =
					"reset" === s.kind || "issue" === s.kind
						? 0
						: "typing" === s.kind
							? s.activityIndex
							: s.activityIndex + 1,
				u = p.slice(0, t),
				v = "typing" === s.kind ? p[s.activityIndex] : void 0
			;(0, c.useEffect)(() => {
				let a = o.current
				if (a) {
					if ("reset" === s.kind || "issue" === s.kind || t <= 1)
						return void a.scrollTo({ top: 0, behavior: "auto" })
					a.scrollTo({ top: a.scrollHeight, behavior: l ? "auto" : "smooth" })
				}
			}, [s.kind, l, t])
			let w = "reset" !== s.kind
			return (0, b.jsx)("div", {
				className: (0, h.cn)("w-full max-w-[540px] h-[520px] sm:h-[560px]", a),
				role: "img",
				"aria-label": "Animated Linear issue showing Roo Code responding to a comment",
				children: (0, b.jsxs)("div", {
					"aria-hidden": "true",
					className:
						"relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1F2023] shadow-2xl shadow-black/40",
					children: [
						(0, b.jsxs)("div", {
							className: "flex items-center gap-2 border-b border-white/10 px-4 py-2.5 text-[13px]",
							children: [
								(0, b.jsx)(j, { className: "h-4 w-4 text-[#8B8D91]" }),
								(0, b.jsx)("span", { className: "text-[#8B8D91]", children: "Frontend" }),
								(0, b.jsx)(d.ChevronRight, { className: "h-3 w-3 text-[#5C5F66]" }),
								(0, b.jsx)("span", { className: "text-[#F8F8F9]", children: "FE-312" }),
								(0, b.jsxs)("div", {
									className: "ml-auto flex items-center gap-2 text-[11px] text-[#8B8D91]",
									children: [
										(0, b.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#27AE60]" }),
										"Live demo",
									],
								}),
							],
						}),
						(0, b.jsxs)("div", {
							className: (0, h.cn)(
								"flex flex-col flex-1 overflow-hidden transition-opacity duration-300 will-change-opacity",
								w ? "opacity-100" : "opacity-0",
							),
							children: [
								(0, b.jsxs)("div", {
									className: "px-4 pt-4 pb-3",
									children: [
										(0, b.jsx)("h3", {
											className: "text-lg font-semibold text-[#F8F8F9] leading-tight",
											children: "Add dark mode toggle to settings",
										}),
										(0, b.jsx)("p", {
											className: "mt-2 text-[13px] text-[#8B8D91] leading-relaxed",
											children:
												"Users should be able to switch between light and dark themes from the settings page. Persist preference to localStorage and apply immediately.",
										}),
									],
								}),
								(0, b.jsxs)("div", {
									className: "flex-1 overflow-hidden flex flex-col border-t border-white/10",
									children: [
										(0, b.jsxs)("div", {
											className: "px-4 py-2.5 flex items-center justify-between",
											children: [
												(0, b.jsx)("span", {
													className: "text-[13px] font-medium text-[#F8F8F9]",
													children: "Activity",
												}),
												(0, b.jsx)("span", {
													className: "text-[12px] text-[#5C5F66]",
													children: "Unsubscribe",
												}),
											],
										}),
										(0, b.jsx)("div", {
											ref: o,
											className:
												"flex-1 overflow-y-auto px-4 pb-3 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.1)_transparent]",
											children: (0, b.jsxs)("div", {
												className: "space-y-3",
												children: [
													u.map((a) =>
														(0, b.jsx)(
															k,
															{
																item: a,
																reduceMotion: l,
																isNew:
																	"show" === s.kind &&
																	p[s.activityIndex]?.id === a.id,
															},
															a.id,
														),
													),
													v &&
														"comment" === v.kind &&
														(0, b.jsxs)("div", {
															className: (0, h.cn)(
																l ? "" : "animate-in fade-in duration-300",
																"flex gap-2.5",
															),
															children: [
																(0, b.jsx)("div", {
																	className: (0, h.cn)(
																		"mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold",
																		v.avatarClassName,
																	),
																	children: v.avatarText,
																}),
																(0, b.jsx)("div", {
																	className: "min-w-0",
																	children: (0, b.jsxs)("div", {
																		className:
																			"flex items-center gap-2 text-[13px]",
																		children: [
																			(0, b.jsx)("span", {
																				className: "font-medium text-[#F8F8F9]",
																				children: v.author,
																			}),
																			(0, b.jsx)("span", {
																				className: "text-[#8B8D91]",
																				children: "typing",
																			}),
																			(0, b.jsx)(i, {}),
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
								(0, b.jsx)("div", {
									className: "border-t border-white/10 px-4 py-3",
									children: (0, b.jsxs)("div", {
										className:
											"flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-2",
										children: [
											(0, b.jsx)("span", {
												className: "flex-1 text-[13px] text-[#5C5F66]",
												children: "Leave a comment...",
											}),
											(0, b.jsx)(f.Paperclip, { className: "h-4 w-4 text-[#5C5F66]" }),
											(0, b.jsx)(g, { className: "h-4 w-4 text-[#5C5F66]" }),
										],
									}),
								}),
							],
						}),
						(0, b.jsx)("div", {
							className: "flex items-center justify-center border-t border-white/10 px-4 py-2",
							children: (0, b.jsx)("div", {
								className: "flex items-center gap-1",
								children: p.map((a, c) =>
									(0, b.jsx)(
										"span",
										{
											className: (0, h.cn)(
												"h-1 w-3 rounded-full transition-colors duration-300",
												Math.max(0, t - 1) === c ? "bg-indigo-400" : "bg-white/10",
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
		}
		a.s(["LinearIssueDemo", () => l], 72256)
	},
]

//# sourceMappingURL=_f52139ac._.js.map
