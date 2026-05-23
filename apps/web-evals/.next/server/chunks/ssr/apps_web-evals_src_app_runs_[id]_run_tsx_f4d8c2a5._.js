module.exports = [
	71153,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(67191),
			d = a.i(98496),
			e = a.i(68891),
			f = a.i(10868),
			g = a.i(11200),
			h = a.i(74221),
			i = a.i(45722)
		let j = (0, i.default)("circle-stop", [
			["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
			["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1", key: "1ssd4o" }],
		])
		var k = a.i(14878),
			l = a.i(27358),
			m = a.i(3941),
			n = a.i(34476),
			o = a.i(88989)
		a.i(35958)
		var p = a.i(71880),
			q = a.i(7698)
		let r = (0, q.createServerReference)(
				"40be6f057ffec13e36ba29501f79ae9ccc2d86211e",
				q.callServer,
				void 0,
				q.findSourceMapURL,
				"getHeartbeat",
			),
			s = (0, q.createServerReference)(
				"4070a55b951f39bd9d53ebcf2f6d94fd1bbb5838f5",
				q.callServer,
				void 0,
				q.findSourceMapURL,
				"getRunners",
			),
			t = (0, q.createServerReference)(
				"40ed47cac756554cc71da4646c2ba5a91b0014a176",
				q.callServer,
				void 0,
				q.findSourceMapURL,
				"getTasks",
			),
			u = (0, q.createServerReference)(
				"408fb3c8d4d026bc052c963abd69ad5196dca0f120",
				q.callServer,
				void 0,
				q.findSourceMapURL,
				"killRun",
			)
		a.i(16926)
		var v = a.i(38704),
			w = a.i(50728),
			x = a.i(56351),
			y = a.i(92129),
			z = a.i(59222),
			A = a.i(40768)
		let B = (0, i.default)("circle-check", [
				["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
				["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
			]),
			C = (0, i.default)("circle-dashed", [
				["path", { d: "M10.1 2.182a10 10 0 0 1 3.8 0", key: "5ilxe3" }],
				["path", { d: "M13.9 21.818a10 10 0 0 1-3.8 0", key: "11zvb9" }],
				["path", { d: "M17.609 3.721a10 10 0 0 1 2.69 2.7", key: "1iw5b2" }],
				["path", { d: "M2.182 13.9a10 10 0 0 1 0-3.8", key: "c0bmvh" }],
				["path", { d: "M20.279 17.609a10 10 0 0 1-2.7 2.69", key: "1ruxm7" }],
				["path", { d: "M21.818 10.1a10 10 0 0 1 0 3.8", key: "qkgqxc" }],
				["path", { d: "M3.721 6.391a10 10 0 0 1 2.7-2.69", key: "1mcia2" }],
				["path", { d: "M6.391 20.279a10 10 0 0 1-2.69-2.7", key: "1fvljs" }],
			]),
			D = (0, i.default)("circle-slash", [
				["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
				["line", { x1: "9", x2: "15", y1: "15", y2: "9", key: "1dfufj" }],
			]),
			E = ({ task: a, running: c }) =>
				!1 === a.passed
					? (0, b.jsx)(D, { className: "size-4 text-destructive" })
					: !0 === a.passed
						? (0, b.jsx)(B, { className: "size-4 text-green-500" })
						: c
							? (0, b.jsx)(e.LoaderCircle, { className: "size-4 animate-spin" })
							: (0, b.jsx)(C, { className: "size-4" }),
			F = (0, i.default)("link-2", [
				["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
				["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
				["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
			]),
			G = (0, i.default)("link-2-off", [
				["path", { d: "M9 17H7A5 5 0 0 1 7 7", key: "10o201" }],
				["path", { d: "M15 7h2a5 5 0 0 1 4 8", key: "1d3206" }],
				["line", { x1: "8", x2: "12", y1: "12", y2: "12", key: "rvw6j4" }],
				["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
			])
		var H = a.i(54831)
		function I({ status: a }) {
			return "connected" === a
				? (0, b.jsx)(F, { className: "size-4 text-green-500" })
				: (0, b.jsx)(G, {
						className: (0, H.cn)("size-4", "waiting" === a ? "text-amber-500" : "text-rose-500"),
					})
		}
		let J = ({ runStatus: { sseStatus: a, heartbeat: c, runners: d = [] }, isComplete: e = !1 }) =>
			e
				? (0, b.jsxs)(w.Tooltip, {
						children: [
							(0, b.jsx)(w.TooltipTrigger, {
								asChild: !0,
								children: (0, b.jsx)("div", {
									className: "flex items-center gap-1 cursor-default text-muted-foreground",
									children: (0, b.jsx)(B, { className: "size-4" }),
								}),
							}),
							(0, b.jsx)(w.TooltipContent, {
								side: "bottom",
								className: "font-mono text-xs",
								children: "Run complete",
							}),
						],
					})
				: (0, b.jsxs)(w.Tooltip, {
						children: [
							(0, b.jsx)(w.TooltipTrigger, {
								asChild: !0,
								children: (0, b.jsxs)("div", {
									className: "flex items-center gap-2 cursor-default text-xs font-mono",
									children: [
										(0, b.jsx)(I, { status: a }),
										(0, b.jsx)("span", {
											className: c ? "text-green-500" : "text-rose-500",
											children: c ?? "-",
										}),
										(0, b.jsx)("span", {
											className: d.length > 0 ? "text-green-500" : "text-rose-500",
											children: d.length > 0 ? `${d.length}r` : "0r",
										}),
									],
								}),
							}),
							(0, b.jsx)(w.TooltipContent, {
								side: "bottom",
								className: "font-mono text-xs max-w-md",
								children: (0, b.jsxs)("div", {
									className: "space-y-1",
									children: [
										(0, b.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [
												(0, b.jsx)(I, { status: a }),
												(0, b.jsxs)("span", { children: ["Task Stream: ", a] }),
											],
										}),
										(0, b.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [
												(0, b.jsx)("span", {
													className: c ? "text-green-500" : "text-rose-500",
													children: "●",
												}),
												(0, b.jsxs)("span", { children: ["Task Controller: ", c ?? "dead"] }),
											],
										}),
										(0, b.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [
												(0, b.jsx)("span", {
													className: d.length > 0 ? "text-green-500" : "text-rose-500",
													children: "●",
												}),
												(0, b.jsxs)("span", {
													children: ["Task Runners: ", d.length > 0 ? d.length : "none"],
												}),
											],
										}),
										d.length > 0 &&
											(0, b.jsx)("div", {
												className:
													"mt-2 pt-2 border-t border-border text-muted-foreground space-y-0.5",
												children: d.map((a) => (0, b.jsx)("div", { children: a }, a)),
											}),
									],
								}),
							}),
						],
					})
		function K(a) {
			return a
				.split("_")
				.map((a) => a[0]?.toUpperCase() ?? "")
				.join("")
		}
		let L = [
			{ pattern: /\|\s*(INFO)\s*\|/g, className: "text-green-400", wrapGroup: 1 },
			{ pattern: /\|\s*(WARN|WARNING)\s*\|/g, className: "text-yellow-400", wrapGroup: 1 },
			{ pattern: /\|\s*(ERROR)\s*\|/g, className: "text-red-400 font-semibold", wrapGroup: 1 },
			{ pattern: /\|\s*(DEBUG)\s*\|/g, className: "text-gray-400", wrapGroup: 1 },
			{
				pattern: /(taskCreated|taskFocused|taskStarted|taskCompleted|taskAborted|taskResumable)/g,
				className: "text-purple-400 font-medium",
			},
			{ pattern: /(taskToolFailed)/g, className: "text-red-400 font-bold" },
			{ pattern: /(Tool execution failed|tool.*failed|failed.*tool)/gi, className: "text-red-400" },
			{ pattern: /(EvalPass)/g, className: "text-green-400 font-bold" },
			{ pattern: /(EvalFail)/g, className: "text-red-400 font-bold" },
			{ pattern: /→/g, className: "text-cyan-400" },
			{ pattern: /"(tool)":\s*"([^"]+)"/g, className: "text-orange-400" },
			{ pattern: /"([^"]+)":/g, className: "text-sky-300" },
			{ pattern: /:\s*(true|false)/g, className: "text-amber-400", wrapGroup: 1 },
			{ pattern: /:\s*(-?\d+\.?\d*)/g, className: "text-emerald-400", wrapGroup: 1 },
		]
		function M({ run: a }) {
			var i
			let q,
				B,
				C,
				D,
				F = ((a) => {
					let [b, d] = (0, c.useState)(),
						[e, f] = (0, c.useState)(),
						g = (0, c.useRef)(new Map()),
						h = (0, c.useRef)(new Map()),
						i = (0, c.useRef)(new Map()),
						{ data: j } = (0, n.useQuery)({
							queryKey: ["getHeartbeat", a.id],
							queryFn: () => r(a.id),
							refetchInterval: 1e4,
						}),
						{ data: k } = (0, n.useQuery)({
							queryKey: ["getRunners", a.id],
							queryFn: () => s(a.id),
							refetchInterval: 1e4,
						}),
						{ data: l } = (0, n.useQuery)({
							queryKey: ["getTasks", a.id, b],
							queryFn: async () => t(a.id),
							placeholderData: o.keepPreviousData,
							refetchInterval: 3e4,
						})
					return {
						sseStatus: (function ({ url: a, withCredentials: b, onMessage: d }) {
							let e = (0, c.useRef)(null),
								f = (0, c.useRef)("waiting"),
								[g, h] = (0, c.useState)("waiting"),
								i = (0, c.useRef)(null),
								j = (0, c.useRef)(!1),
								k = (0, c.useCallback)((a) => d(a), [d]),
								l = (0, c.useCallback)(() => {
									i.current && (clearTimeout(i.current), (i.current = null)),
										e.current && (e.current.close(), (e.current = null))
								}, []),
								m = (0, c.useCallback)(() => {
									j.current ||
										(l(),
										(f.current = "waiting"),
										h("waiting"),
										(e.current = new EventSource(a, { withCredentials: b })),
										(e.current.onopen = () => {
											j.current || ((f.current = "connected"), h("connected"))
										}),
										(e.current.onmessage = (a) => {
											j.current || k(a)
										}),
										(e.current.onerror = () => {
											j.current ||
												((f.current = "error"),
												h("error"),
												l(),
												(i.current = setTimeout(() => {
													j.current || m()
												}, 1e3)))
										}))
								}, [a, b, k, l])
							return (
								(0, c.useEffect)(() => {
									;(j.current = !1), m()
									let a = setTimeout(() => {
										"waiting" !== f.current || j.current || m()
									}, 5e3)
									return () => {
										;(j.current = !0), clearTimeout(a), l()
									}
								}, [m, l]),
								g
							)
						})({
							url: `/api/runs/${a.id}/stream`,
							onMessage: (0, c.useCallback)((a) => {
								let b
								try {
									b = JSON.parse(a.data)
								} catch (b) {
									console.log(`invalid JSON: ${a.data}`)
									return
								}
								let c = p.taskEventSchema.safeParse(b)
								if (!c.success) return void console.log(`unrecognized messageEvent.data: ${a.data}`)
								let { eventName: e, payload: j, taskId: k } = c.data
								if (!k) return void console.log(`no taskId: ${a.data}`)
								switch (e) {
									case p.RooCodeEventName.TaskStarted:
										i.current.set(k, Date.now())
										break
									case p.RooCodeEventName.TaskTokenUsageUpdated: {
										let a = i.current.get(k),
											b = a ? Date.now() - a : void 0
										g.current.set(k, { ...j[1], duration: b }),
											j[2] && h.current.set(k, j[2]),
											f(Date.now())
										break
									}
									case p.RooCodeEventName.EvalPass:
									case p.RooCodeEventName.EvalFail:
										d(Date.now())
								}
							}, []),
						}),
						heartbeat: j,
						runners: k,
						tasks: l,
						tokenUsage: g.current,
						toolUsage: h.current,
						usageUpdatedAt: e,
					}
				})(a),
				{ tasks: G, tokenUsage: H, toolUsage: I, usageUpdatedAt: M, heartbeat: N, runners: O } = F,
				[P, Q] = (0, c.useState)(null),
				[R, S] = (0, c.useState)(null),
				[T, U] = (0, c.useState)(!1),
				[V, W] = (0, c.useState)(!1),
				[X, Y] = (0, c.useState)(!1),
				[Z, $] = (0, c.useState)(!1),
				[_, aa] = (0, c.useState)(() => !1)
			;(0, c.useEffect)(() => {
				localStorage.setItem("evals-group-by-status", String(_))
			}, [_])
			let ab = !a.taskMetricsId && (!!N || (O && O.length > 0)),
				ac = (0, c.useCallback)(async () => {
					$(!0)
					try {
						let b = await u(a.id)
						b.killedContainers.length > 0
							? d.toast.success(`Killed ${b.killedContainers.length} container(s)`)
							: 0 === b.errors.length
								? d.toast.info("No running containers found")
								: d.toast.error(b.errors.join(", "))
					} catch (a) {
						console.error("Failed to kill run:", a), d.toast.error("Failed to kill run")
					} finally {
						$(!1), Y(!1)
					}
				}, [a.id]),
				ad = (0, c.useCallback)(async () => {
					if (R)
						try {
							await navigator.clipboard.writeText(R),
								W(!0),
								d.toast.success("Log copied to clipboard"),
								setTimeout(() => W(!1), 2e3)
						} catch (a) {
							console.error("Failed to copy log:", a), d.toast.error("Failed to copy log")
						}
				}, [R])
			;(0, c.useEffect)(() => {
				let a = (a) => {
					"Escape" === a.key && P && Q(null)
				}
				return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a)
			}, [P])
			let ae = (0, c.useMemo)(() => {
					let a = {},
						b = (a) => {
							if (!a.startedAt) return 0
							let b = new Date(a.startedAt).getTime()
							return (a.finishedAt ? new Date(a.finishedAt).getTime() : Date.now()) - b
						}
					return (
						G?.forEach((c) => {
							let d = H.get(c.id),
								e = c.taskMetrics
							if (c.finishedAt)
								if (e && (e.tokensIn > 0 || e.tokensOut > 0 || e.cost > 0)) {
									let d = e.duration || b(c)
									a[c.id] = { ...e, duration: d }
								} else if (d) {
									let e = d.duration || b(c)
									a[c.id] = {
										tokensIn: d.totalTokensIn,
										tokensOut: d.totalTokensOut,
										tokensContext: d.contextTokens,
										duration: e,
										cost: d.totalCost,
									}
								} else
									a[c.id] = { tokensIn: 0, tokensOut: 0, tokensContext: 0, duration: b(c), cost: 0 }
							else if (d) {
								let e = d.duration || b(c)
								a[c.id] = {
									tokensIn: d.totalTokensIn,
									tokensOut: d.totalTokensOut,
									tokensContext: d.contextTokens,
									duration: e,
									cost: d.totalCost,
								}
							} else
								c.startedAt &&
									(a[c.id] = { tokensIn: 0, tokensOut: 0, tokensContext: 0, duration: b(c), cost: 0 })
						}),
						a
					)
				}, [G, H, M]),
				af = (0, c.useCallback)(
					async (b) => {
						if (!(b.startedAt || H.get(b.id) || ae[b.id]))
							return void d.toast.error("Task has not started yet")
						Q(b), U(!0), S(null)
						try {
							let c = await fetch(`/api/runs/${a.id}/logs/${b.id}`)
							if (!c.ok) {
								let a = await c.json()
								d.toast.error(a.error || "Failed to load log"), Q(null)
								return
							}
							let e = await c.json()
							S(e.logContent)
						} catch (a) {
							console.error("Error loading task log:", a), d.toast.error("Failed to load log"), Q(null)
						} finally {
							U(!1)
						}
					},
					[a.id, H, ae],
				),
				ag = (0, c.useMemo)(() => {
					if (!G) return []
					let a = new Map()
					for (let b of G) {
						let c = b.taskMetrics?.toolUsage,
							d = I.get(b.id),
							e = b.finishedAt && c && Object.keys(c).length > 0 ? c : d
						if (e)
							for (let [b, c] of Object.entries(e)) {
								let d = a.get(b) ?? 0
								a.set(b, d + c.attempts)
							}
					}
					return Array.from(a.entries())
						.sort((a, b) => b[1] - a[1])
						.map(([a]) => a)
				}, [G, I, M]),
				ah = (0, c.useMemo)(() => {
					if (!G) return null
					let a = G.filter((a) => !0 === a.passed).length,
						b = G.filter((a) => !1 === a.passed).length,
						c = a + b,
						d = 0,
						e = 0,
						f = 0,
						g = 0,
						h = {}
					for (let a of G) {
						let b = ae[a.id]
						b && ((d += b.tokensIn), (e += b.tokensOut), (f += b.cost), (g += b.duration))
						let c = a.taskMetrics?.toolUsage,
							i = I.get(a.id),
							j = a.finishedAt && c && Object.keys(c).length > 0 ? c : i
						if (j)
							for (let [a, b] of Object.entries(j))
								h[a] || (h[a] = { attempts: 0, failures: 0 }),
									(h[a].attempts += b.attempts),
									(h[a].failures += b.failures)
					}
					let i = G.length - c
					return {
						passed: a,
						failed: b,
						completed: c,
						remaining: i,
						passRate: c > 0 ? ((a / c) * 100).toFixed(1) : null,
						totalTokensIn: d,
						totalTokensOut: e,
						totalCost: f,
						totalDuration: g,
						toolUsage: h,
					}
				}, [G, ae, I, M]),
				ai = (0, c.useMemo)(() => {
					if (!G || 0 === G.length) return null
					let b = new Date(a.createdAt).getTime()
					return a.taskMetricsId
						? G.reduce((a, b) => {
								if (b.finishedAt) {
									let c = new Date(b.finishedAt).getTime()
									return c > a ? c : a
								}
								return a
							}, b) - b
						: Date.now() - b
				}, [G, a.createdAt, a.taskMetricsId, M]),
				aj = (0, c.useCallback)(
					(a) =>
						!1 === a.passed
							? "failed"
							: !0 === a.passed
								? "passed"
								: a.startedAt || H.get(a.id) || ae[a.id]
									? "in_progress"
									: "not_started",
					[H, ae],
				),
				ak = (0, c.useMemo)(() => {
					if (!G || !_) return null
					let a = { failed: [], in_progress: [], passed: [], not_started: [] }
					return (
						G.forEach((b, c) => {
							a[aj(b)].push({ task: b, originalIndex: c })
						}),
						a
					)
				}, [G, _, aj]),
				al = (0, c.useMemo)(
					() => ({
						failed: { label: "Failed", className: "text-red-500", count: ak?.failed.length ?? 0 },
						in_progress: {
							label: "In Progress",
							className: "text-yellow-500",
							count: ak?.in_progress.length ?? 0,
						},
						passed: { label: "Passed", className: "text-green-500", count: ak?.passed.length ?? 0 },
						not_started: {
							label: "Not Started",
							className: "text-muted-foreground",
							count: ak?.not_started.length ?? 0,
						},
					}),
					[ak],
				),
				am = (a, c) => {
					let d = !!a.startedAt || !!H.get(a.id) || !!ae[a.id]
					return (0, b.jsxs)(
						v.TableRow,
						{
							className: `${d ? "cursor-pointer hover:bg-muted/50" : ""} ${!1 === a.passed ? "bg-red-950/30 border-l-2 border-l-red-500" : ""}`,
							onClick: () => d && af(a),
							children: [
								(0, b.jsx)(v.TableCell, {
									className: "text-center text-muted-foreground font-mono text-xs",
									children: c + 1,
								}),
								(0, b.jsx)(v.TableCell, {
									children: (0, b.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											(0, b.jsx)(E, { task: a, running: d }),
											(0, b.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [
													(0, b.jsxs)("span", {
														children: [
															a.language,
															"/",
															a.exercise,
															a.iteration > 1 &&
																(0, b.jsxs)("span", {
																	className: "text-muted-foreground ml-1",
																	children: ["(#", a.iteration, ")"],
																}),
														],
													}),
													d &&
														(0, b.jsxs)(w.Tooltip, {
															children: [
																(0, b.jsx)(w.TooltipTrigger, {
																	asChild: !0,
																	children: (0, b.jsx)(f.FileText, {
																		className: "size-3 text-muted-foreground",
																	}),
																}),
																(0, b.jsx)(w.TooltipContent, {
																	children: "Click to view log",
																}),
															],
														}),
												],
											}),
										],
									}),
								}),
								ae[a.id]
									? (0, b.jsxs)(b.Fragment, {
											children: [
												(0, b.jsx)(v.TableCell, {
													className: "font-mono text-xs",
													children: (0, b.jsxs)("div", {
														className: "flex items-center justify-evenly",
														children: [
															(0, b.jsx)("div", {
																children: (0, m.formatTokens)(ae[a.id].tokensIn),
															}),
															"/",
															(0, b.jsx)("div", {
																children: (0, m.formatTokens)(ae[a.id].tokensOut),
															}),
														],
													}),
												}),
												(0, b.jsx)(v.TableCell, {
													className: "font-mono text-xs",
													children: (0, m.formatTokens)(ae[a.id].tokensContext),
												}),
												ag.map((c) => {
													let d = a.taskMetrics?.toolUsage?.[c],
														e = I.get(a.id)?.[c],
														f = a.finishedAt ? (d ?? e) : e,
														g =
															f && f.attempts > 0
																? ((f.attempts - f.failures) / f.attempts) * 100
																: 100
													return (0, b.jsx)(
														v.TableCell,
														{
															className: "text-xs text-center",
															children: f
																? (0, b.jsxs)("div", {
																		className: "flex flex-col items-center",
																		children: [
																			(0, b.jsx)("span", {
																				className: "font-medium",
																				children: f.attempts,
																			}),
																			(0, b.jsx)("span", {
																				className:
																					100 === g
																						? "text-muted-foreground"
																						: g >= 80
																							? "text-yellow-500"
																							: "text-red-500",
																				children: (0,
																				m.formatToolUsageSuccessRate)(f),
																			}),
																		],
																	})
																: (0, b.jsx)("span", {
																		className: "text-muted-foreground",
																		children: "-",
																	}),
														},
														c,
													)
												}),
												(0, b.jsx)(v.TableCell, {
													className: "font-mono text-xs",
													children: ae[a.id].duration
														? (0, m.formatDuration)(ae[a.id].duration)
														: "-",
												}),
												(0, b.jsx)(v.TableCell, {
													className: "font-mono text-xs",
													children: (0, m.formatCurrency)(ae[a.id].cost),
												}),
											],
										})
									: (0, b.jsx)(v.TableCell, { colSpan: 5 + ag.length }),
							],
						},
						a.id,
					)
				}
			return (0, b.jsxs)(b.Fragment, {
				children: [
					(0, b.jsx)("div", {
						children: G
							? (0, b.jsxs)(b.Fragment, {
									children: [
										(0, b.jsx)("div", {
											className: "flex justify-end mb-2",
											children: (0, b.jsxs)(w.Tooltip, {
												children: [
													(0, b.jsx)(w.TooltipTrigger, {
														asChild: !0,
														children: (0, b.jsx)(z.Button, {
															variant: "outline",
															size: "sm",
															onClick: () => aa(!_),
															className: "flex items-center gap-2",
															children: _
																? (0, b.jsxs)(b.Fragment, {
																		children: [
																			(0, b.jsx)(k.List, { className: "size-4" }),
																			(0, b.jsx)("span", {
																				children: "Show Order",
																			}),
																		],
																	})
																: (0, b.jsxs)(b.Fragment, {
																		children: [
																			(0, b.jsx)(l.Layers, {
																				className: "size-4",
																			}),
																			(0, b.jsx)("span", {
																				children: "Group by Status",
																			}),
																		],
																	}),
														}),
													}),
													(0, b.jsx)(w.TooltipContent, {
														children: _
															? "Show tasks in run order"
															: "Group tasks by status",
													}),
												],
											}),
										}),
										(0, b.jsxs)(v.Table, {
											className: "border",
											children: [
												(0, b.jsxs)(v.TableHeader, {
													className: "sticky top-0 z-10",
													children: [
														ah &&
															(0, b.jsx)(v.TableRow, {
																children: (0, b.jsxs)(v.TableHead, {
																	colSpan: 6 + ag.length,
																	className: "bg-muted p-4",
																	children: [
																		(0, b.jsxs)("div", {
																			className:
																				"flex items-center justify-center gap-3 mb-3 relative",
																			children: [
																				a.settings?.apiProvider &&
																					(0, b.jsx)("span", {
																						className:
																							"text-sm text-muted-foreground",
																						children:
																							a.settings.apiProvider,
																					}),
																				(0, b.jsx)("div", {
																					className: "font-mono",
																					children: a.model,
																				}),
																				(0, b.jsx)(J, {
																					runStatus: F,
																					isComplete: !!a.taskMetricsId,
																				}),
																				a.description &&
																					(0, b.jsxs)("span", {
																						className:
																							"text-sm text-muted-foreground",
																						children: ["- ", a.description],
																					}),
																				ab &&
																					(0, b.jsxs)(w.Tooltip, {
																						children: [
																							(0, b.jsx)(
																								w.TooltipTrigger,
																								{
																									asChild: !0,
																									children: (0,
																									b.jsxs)(z.Button, {
																										variant:
																											"ghost",
																										size: "sm",
																										onClick: () =>
																											Y(!0),
																										disabled: Z,
																										className:
																											"absolute right-0 flex items-center gap-1 text-muted-foreground hover:text-destructive",
																										children: [
																											Z
																												? (0,
																													b.jsx)(
																														e.LoaderCircle,
																														{
																															className:
																																"size-4 animate-spin",
																														},
																													)
																												: (0,
																													b.jsx)(
																														j,
																														{
																															className:
																																"size-4",
																														},
																													),
																											"Kill",
																										],
																									}),
																								},
																							),
																							(0, b.jsx)(
																								w.TooltipContent,
																								{
																									children:
																										"Stop all containers for this run",
																								},
																							),
																						],
																					}),
																			],
																		}),
																		(0, b.jsxs)("div", {
																			className:
																				"flex items-start justify-center gap-x-8 gap-y-3",
																			children: [
																				(0, b.jsxs)("div", {
																					className:
																						"text-center min-w-[160px]",
																					children: [
																						(0, b.jsxs)("div", {
																							className:
																								"text-2xl font-bold whitespace-nowrap",
																							children: [
																								(0, b.jsx)("span", {
																									className:
																										"text-green-600",
																									children:
																										ah.completed > 0
																											? `${((ah.passed / ah.completed) * 100).toFixed(1)}%`
																											: "-",
																								}),
																								(0, b.jsx)("span", {
																									className:
																										"text-muted-foreground mx-1",
																									children: "/",
																								}),
																								(0, b.jsx)("span", {
																									className:
																										"text-red-600",
																									children:
																										ah.completed > 0
																											? `${((ah.failed / ah.completed) * 100).toFixed(1)}%`
																											: "-",
																								}),
																								(0, b.jsx)("span", {
																									className:
																										"text-muted-foreground mx-1",
																									children: "/",
																								}),
																								(0, b.jsx)("span", {
																									className:
																										"text-muted-foreground",
																									children:
																										G.length > 0
																											? `${((ah.remaining / G.length) * 100).toFixed(1)}%`
																											: "-",
																								}),
																							],
																						}),
																						(0, b.jsxs)("div", {
																							className:
																								"text-xs text-muted-foreground",
																							children: [
																								(0, b.jsx)("span", {
																									className:
																										"text-green-600",
																									children: ah.passed,
																								}),
																								" / ",
																								(0, b.jsx)("span", {
																									className:
																										"text-red-600",
																									children: ah.failed,
																								}),
																								" / ",
																								(0, b.jsx)("span", {
																									children:
																										ah.remaining,
																								}),
																								" of ",
																								G.length,
																							],
																						}),
																					],
																				}),
																				(0, b.jsxs)("div", {
																					className:
																						"text-center min-w-[140px]",
																					children: [
																						(0, b.jsxs)("div", {
																							className:
																								"text-xl font-bold font-mono whitespace-nowrap",
																							children: [
																								(0, m.formatTokens)(
																									ah.totalTokensIn,
																								),
																								(0, b.jsx)("span", {
																									className:
																										"text-muted-foreground mx-1",
																									children: "/",
																								}),
																								(0, m.formatTokens)(
																									ah.totalTokensOut,
																								),
																							],
																						}),
																						(0, b.jsx)("div", {
																							className:
																								"text-xs text-muted-foreground",
																							children: "Tokens In / Out",
																						}),
																					],
																				}),
																				(0, b.jsxs)("div", {
																					className:
																						"text-center min-w-[70px]",
																					children: [
																						(0, b.jsx)("div", {
																							className:
																								"text-2xl font-bold font-mono",
																							children: (0,
																							m.formatCurrency)(
																								ah.totalCost,
																							),
																						}),
																						(0, b.jsx)("div", {
																							className:
																								"text-xs text-muted-foreground",
																							children: "Cost",
																						}),
																					],
																				}),
																				(0, b.jsxs)("div", {
																					className:
																						"text-center min-w-[90px]",
																					children: [
																						(0, b.jsx)("div", {
																							className:
																								"text-2xl font-bold font-mono whitespace-nowrap",
																							children:
																								ah.totalDuration > 0
																									? (0,
																										m.formatDuration)(
																											ah.totalDuration,
																										)
																									: "-",
																						}),
																						(0, b.jsx)("div", {
																							className:
																								"text-xs text-muted-foreground",
																							children: "Duration",
																						}),
																					],
																				}),
																				(0, b.jsxs)("div", {
																					className:
																						"text-center min-w-[90px]",
																					children: [
																						(0, b.jsx)("div", {
																							className:
																								"text-2xl font-bold font-mono whitespace-nowrap",
																							children:
																								null !== ai
																									? (0,
																										m.formatDuration)(
																											ai,
																										)
																									: "-",
																						}),
																						(0, b.jsx)("div", {
																							className:
																								"text-xs text-muted-foreground",
																							children: "Elapsed",
																						}),
																					],
																				}),
																				!a.taskMetricsId &&
																					null !== ai &&
																					ah.completed > 0 &&
																					ah.remaining > 0 &&
																					(0, b.jsxs)("div", {
																						className:
																							"text-center min-w-[90px]",
																						children: [
																							(0, b.jsxs)("div", {
																								className:
																									"text-2xl font-bold font-mono whitespace-nowrap text-muted-foreground",
																								children: [
																									"~",
																									(0,
																									m.formatDuration)(
																										(ai /
																											ah.completed) *
																											ah.remaining,
																									),
																								],
																							}),
																							(0, b.jsx)("div", {
																								className:
																									"text-xs text-muted-foreground",
																								children:
																									"Est. Remaining",
																							}),
																						],
																					}),
																			],
																		}),
																		Object.keys(ah.toolUsage).length > 0 &&
																			(0, b.jsx)("div", {
																				className:
																					"flex items-center justify-center gap-2 flex-wrap mt-3",
																				children: Object.entries(ah.toolUsage)
																					.sort(
																						([, a], [, b]) =>
																							b.attempts - a.attempts,
																					)
																					.map(([a, c]) => {
																						let d = K(a),
																							e =
																								c.attempts > 0
																									? ((c.attempts -
																											c.failures) /
																											c.attempts) *
																										100
																									: 100
																						return (0, b.jsxs)(
																							w.Tooltip,
																							{
																								children: [
																									(0, b.jsx)(
																										w.TooltipTrigger,
																										{
																											asChild: !0,
																											children:
																												(0,
																												b.jsxs)(
																													"div",
																													{
																														className:
																															"flex items-center gap-1 px-2 py-1 rounded bg-background/50 border border-border/50 hover:border-border transition-colors cursor-default text-xs",
																														children:
																															[
																																(0,
																																b.jsx)(
																																	"span",
																																	{
																																		className:
																																			"font-medium text-muted-foreground",
																																		children:
																																			d,
																																	},
																																),
																																(0,
																																b.jsx)(
																																	"span",
																																	{
																																		className:
																																			"font-bold tabular-nums",
																																		children:
																																			c.attempts,
																																	},
																																),
																																(0,
																																b.jsx)(
																																	"span",
																																	{
																																		className: `${100 === e ? "text-green-500" : e >= 80 ? "text-yellow-500" : "text-red-500"}`,
																																		children:
																																			(0,
																																			m.formatToolUsageSuccessRate)(
																																				c,
																																			),
																																	},
																																),
																															],
																													},
																												),
																										},
																									),
																									(0, b.jsx)(
																										w.TooltipContent,
																										{
																											side: "bottom",
																											children: a,
																										},
																									),
																								],
																							},
																							a,
																						)
																					}),
																			}),
																	],
																}),
															}),
														(0, b.jsxs)(v.TableRow, {
															children: [
																(0, b.jsx)(v.TableHead, {
																	className: "w-12 text-center",
																	children: "#",
																}),
																(0, b.jsx)(v.TableHead, { children: "Exercise" }),
																(0, b.jsx)(v.TableHead, {
																	className: "text-center",
																	children: "Tokens In / Out",
																}),
																(0, b.jsx)(v.TableHead, { children: "Context" }),
																ag.map((a) =>
																	(0, b.jsx)(
																		v.TableHead,
																		{
																			className: "text-xs text-center",
																			children: (0, b.jsxs)(w.Tooltip, {
																				children: [
																					(0, b.jsx)(w.TooltipTrigger, {
																						children: K(a),
																					}),
																					(0, b.jsx)(w.TooltipContent, {
																						children: a,
																					}),
																				],
																			}),
																		},
																		a,
																	),
																),
																(0, b.jsx)(v.TableHead, { children: "Duration" }),
																(0, b.jsx)(v.TableHead, { children: "Cost" }),
															],
														}),
													],
												}),
												(0, b.jsx)(v.TableBody, {
													children:
														_ && ak
															? ["failed", "in_progress", "passed", "not_started"].map(
																	(a) => {
																		let d = ak[a]
																		if (0 === d.length) return null
																		let { label: e, className: f } = al[a]
																		return (0, b.jsxs)(
																			c.Fragment,
																			{
																				children: [
																					(0, b.jsx)(v.TableRow, {
																						className:
																							"bg-muted/50 hover:bg-muted/50",
																						children: (0, b.jsx)(
																							v.TableCell,
																							{
																								colSpan: 6 + ag.length,
																								className: "py-2",
																								children: (0, b.jsxs)(
																									"span",
																									{
																										className: `font-semibold ${f}`,
																										children: [
																											e,
																											" (",
																											d.length,
																											")",
																										],
																									},
																								),
																							},
																						),
																					}),
																					d.map(
																						({
																							task: a,
																							originalIndex: b,
																						}) => am(a, b),
																					),
																				],
																			},
																			a,
																		)
																	},
																)
															: G.map((a, b) => am(a, b)),
												}),
											],
										}),
									],
								})
							: (0, b.jsx)(e.LoaderCircle, { className: "size-4 animate-spin" }),
					}),
					(0, b.jsx)(x.Dialog, {
						open: !!P,
						onOpenChange: () => Q(null),
						children: (0, b.jsxs)(x.DialogContent, {
							className: "w-[95vw] !max-w-[95vw] h-[90vh] flex flex-col",
							children: [
								(0, b.jsx)(x.DialogHeader, {
									className: "flex-shrink-0",
									children: (0, b.jsxs)("div", {
										className: "flex items-center justify-between pr-8",
										children: [
											(0, b.jsxs)(x.DialogTitle, {
												className: "flex items-center gap-2",
												children: [
													(0, b.jsx)(f.FileText, { className: "size-4" }),
													P?.language,
													"/",
													P?.exercise,
													P?.iteration &&
														P.iteration > 1 &&
														(0, b.jsxs)("span", {
															className: "text-muted-foreground",
															children: ["(#", P.iteration, ")"],
														}),
													(0, b.jsxs)("span", {
														className: `ml-2 text-sm ${P?.passed === !0 ? "text-green-600" : P?.passed === !1 ? "text-red-600" : "text-yellow-500"}`,
														children: [
															"(",
															P?.passed === !0
																? "Passed"
																: P?.passed === !1
																	? "Failed"
																	: "Running",
															")",
														],
													}),
												],
											}),
											R &&
												(0, b.jsx)(z.Button, {
													variant: "outline",
													size: "sm",
													onClick: ad,
													className: "flex items-center gap-1",
													children: V
														? (0, b.jsxs)(b.Fragment, {
																children: [
																	(0, b.jsx)(h.Check, { className: "size-4" }),
																	"Copied!",
																],
															})
														: (0, b.jsxs)(b.Fragment, {
																children: [
																	(0, b.jsx)(g.Copy, { className: "size-4" }),
																	"Copy Log",
																],
															}),
												}),
										],
									}),
								}),
								(0, b.jsx)("div", {
									className: "flex-1 min-h-0 overflow-hidden",
									children: T
										? (0, b.jsx)("div", {
												className: "flex items-center justify-center h-full",
												children: (0, b.jsx)(e.LoaderCircle, {
													className: "size-6 animate-spin",
												}),
											})
										: R
											? (0, b.jsx)(y.ScrollArea, {
													className: "h-full w-full",
													children: (0, b.jsx)("div", {
														className:
															"text-xs font-mono bg-muted p-4 rounded-md overflow-x-auto",
														children:
															((C = (i = R).split("\n")),
															(D =
																((q = i.match(
																	/\[(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z)[\s|\]]/,
																)),
																(B = q?.[1]) ? new Date(B).getTime() : null)),
															C.map((a, c) => {
																if (!a.trim())
																	return (0, b.jsx)(
																		"div",
																		{ className: "h-2", children: " " },
																		c,
																	)
																let d = (function (a, b) {
																		let c,
																			d,
																			e = a.match(
																				/\[(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z)[\s|\]]/,
																			),
																			f = e?.[1]
																		if (!f) return { timestamp: "", simplified: a }
																		let g =
																				null !== b
																					? ((d = Math.floor(
																							(c = Math.floor(
																								(new Date(f).getTime() -
																									b) /
																									1e3,
																							)) / 60,
																						)),
																						`${d.toString().padStart(2, "0")}:${(c % 60).toString().padStart(2, "0")}`)
																					: f.slice(11, 19),
																			h = a.replace(
																				/\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\s*\|?\s*/,
																				"",
																			)
																		return {
																			timestamp: g,
																			simplified: (h = (h = (h = (h = (h = (h =
																				(h = h.replace(
																					/\|\s*pid:\d+\s*/g,
																					"",
																				)).replace(
																					/\|\s*run:\d+\s*/g,
																					"",
																				)).replace(
																				/\|\s*task:\d+\s*/g,
																				"",
																			)).replace(/runTask\s*\|\s*/g, "")).replace(
																				/\|\s*\|/g,
																				"|",
																			)).replace(/^\s*\|\s*/, "")).replace(
																				/\]\s*$/,
																				"",
																			)),
																		}
																	})(a, D),
																	e = a.includes("ERROR")
																		? "bg-red-950/30 border-l-2 border-red-500"
																		: a.includes("WARN") || a.includes("WARNING")
																			? "bg-yellow-950/20 border-l-2 border-yellow-500"
																			: a.includes("taskToolFailed")
																				? "bg-red-950/30 border-l-2 border-red-500"
																				: a.includes("taskStarted") ||
																					  a.includes("taskCreated")
																					? "bg-purple-950/20"
																					: a.includes("EvalPass")
																						? "bg-green-950/30 border-l-2 border-green-500"
																						: a.includes("EvalFail")
																							? "bg-red-950/30 border-l-2 border-red-500"
																							: a.includes(
																										"taskCompleted",
																								  ) ||
																								  a.includes(
																										"taskAborted",
																								  )
																								? "bg-blue-950/20"
																								: ""
																return (0, b.jsxs)(
																	"div",
																	{
																		className: `flex hover:bg-white/10 py-0.5 rounded-sm transition-colors ${e}`,
																		children: [
																			(0, b.jsx)("span", {
																				className:
																					"text-blue-400 font-mono w-12 flex-shrink-0 tabular-nums text-right pr-2",
																				children: d.timestamp,
																			}),
																			(0, b.jsx)("span", {
																				className: "flex-1 break-words",
																				style: {
																					textIndent: "-0.5rem",
																					paddingLeft: "0.5rem",
																				},
																				children: (function (a) {
																					let c = []
																					for (let {
																						pattern: b,
																						className: d,
																						wrapGroup: e,
																					} of L) {
																						let f
																						for (
																							b.lastIndex = 0;
																							null !== (f = b.exec(a));

																						) {
																							let a =
																								void 0 !== e
																									? f[e]
																									: f[0]
																							if (!a) continue
																							let b =
																								void 0 !== e
																									? f.index +
																										f[0].indexOf(a)
																									: f.index
																							c.push({
																								start: b,
																								end: b + a.length,
																								text: a,
																								className: d,
																							})
																						}
																					}
																					c.sort((a, b) => a.start - b.start)
																					let d = []
																					for (let a of c) {
																						let b = d[d.length - 1]
																						;(!b || a.start >= b.end) &&
																							d.push(a)
																					}
																					let e = [],
																						f = 0
																					for (let [c, g] of d.entries())
																						g.start > f &&
																							e.push(a.slice(f, g.start)),
																							e.push(
																								(0, b.jsx)(
																									"span",
																									{
																										className:
																											g.className,
																										children:
																											g.text,
																									},
																									`${c}-${g.start}`,
																								),
																							),
																							(f = g.end)
																					return (
																						f < a.length &&
																							e.push(a.slice(f)),
																						e.length > 0 ? e : [a]
																					)
																				})(d.simplified),
																			}),
																		],
																	},
																	c,
																)
															})),
													}),
												})
											: (0, b.jsx)("div", {
													className:
														"flex items-center justify-center h-full text-muted-foreground",
													children: "Log file not available (may have been cleared)",
												}),
								}),
							],
						}),
					}),
					(0, b.jsx)(A.AlertDialog, {
						open: X,
						onOpenChange: Y,
						children: (0, b.jsxs)(A.AlertDialogContent, {
							children: [
								(0, b.jsxs)(A.AlertDialogHeader, {
									children: [
										(0, b.jsx)(A.AlertDialogTitle, { children: "Kill Run?" }),
										(0, b.jsx)(A.AlertDialogDescription, {
											children:
												"This will stop the controller and all task runner containers for this run. Any running tasks will be terminated immediately. This action cannot be undone.",
										}),
									],
								}),
								(0, b.jsxs)(A.AlertDialogFooter, {
									children: [
										(0, b.jsx)(A.AlertDialogCancel, { disabled: Z, children: "Cancel" }),
										(0, b.jsx)(A.AlertDialogAction, {
											onClick: ac,
											disabled: Z,
											className:
												"bg-destructive text-destructive-foreground hover:bg-destructive/90",
											children: Z
												? (0, b.jsxs)(b.Fragment, {
														children: [
															(0, b.jsx)(e.LoaderCircle, {
																className: "size-4 animate-spin mr-2",
															}),
															"Killing...",
														],
													})
												: "Kill Run",
										}),
									],
								}),
							],
						}),
					}),
				],
			})
		}
		a.s(["Run", () => M], 71153)
	},
]

//# sourceMappingURL=apps_web-evals_src_app_runs_%5Bid%5D_run_tsx_f4d8c2a5._.js.map
