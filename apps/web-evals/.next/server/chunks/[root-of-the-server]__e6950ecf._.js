module.exports = [
	18622,
	(e, t, r) => {
		t.exports = e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js", () =>
			require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"),
		)
	},
	56704,
	(e, t, r) => {
		t.exports = e.x("next/dist/server/app-render/work-async-storage.external.js", () =>
			require("next/dist/server/app-render/work-async-storage.external.js"),
		)
	},
	32319,
	(e, t, r) => {
		t.exports = e.x("next/dist/server/app-render/work-unit-async-storage.external.js", () =>
			require("next/dist/server/app-render/work-unit-async-storage.external.js"),
		)
	},
	24725,
	(e, t, r) => {
		t.exports = e.x("next/dist/server/app-render/after-task-async-storage.external.js", () =>
			require("next/dist/server/app-render/after-task-async-storage.external.js"),
		)
	},
	93695,
	(e, t, r) => {
		t.exports = e.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
			require("next/dist/shared/lib/no-fallback-error.external.js"),
		)
	},
	14747,
	(e, t, r) => {
		t.exports = e.x("path", () => require("path"))
	},
	46786,
	(e, t, r) => {
		t.exports = e.x("os", () => require("os"))
	},
	22734,
	(e, t, r) => {
		t.exports = e.x("fs", () => require("fs"))
	},
	4446,
	(e, t, r) => {
		t.exports = e.x("net", () => require("net"))
	},
	55004,
	(e, t, r) => {
		t.exports = e.x("tls", () => require("tls"))
	},
	54799,
	(e, t, r) => {
		t.exports = e.x("crypto", () => require("crypto"))
	},
	88947,
	(e, t, r) => {
		t.exports = e.x("stream", () => require("stream"))
	},
	60438,
	(e, t, r) => {
		t.exports = e.x("perf_hooks", () => require("perf_hooks"))
	},
	24868,
	(e, t, r) => {
		t.exports = e.x("fs/promises", () => require("fs/promises"))
	},
	92509,
	(e, t, r) => {
		t.exports = e.x("url", () => require("url"))
	},
	12714,
	(e, t, r) => {
		t.exports = e.x("node:fs/promises", () => require("node:fs/promises"))
	},
	50227,
	(e, t, r) => {
		t.exports = e.x("node:path", () => require("node:path"))
	},
	78982,
	(e) => {
		"use strict"
		var t = e.i(20875),
			r = e.i(9796),
			a = e.i(61378),
			n = e.i(26303),
			s = e.i(15494),
			o = e.i(48068),
			i = e.i(53267),
			l = e.i(73324),
			u = e.i(73190),
			d = e.i(10629),
			p = e.i(48122),
			c = e.i(75247),
			x = e.i(71750),
			h = e.i(4177),
			f = e.i(38370),
			R = e.i(93695)
		e.i(16377)
		var g = e.i(82999),
			v = e.i(1847),
			m = e.i(12714),
			E = e.i(50227)
		e.i(97884)
		var w = e.i(2226),
			y = e.i(35865)
		let N = "/tmp/evals/runs"
		function C(e) {
			return e.replace(/[/\\:\0*?"<>|]/g, "_")
		}
		async function k(e, { params: t }) {
			let { id: r, taskId: a } = await t
			try {
				let e = Number(r),
					t = Number(a)
				if (isNaN(e) || isNaN(t))
					return v.NextResponse.json({ error: "Invalid run ID or task ID" }, { status: 400 })
				await (0, y.findRun)(e)
				let n = await (0, w.findTask)(t)
				if (n.runId !== e)
					return v.NextResponse.json({ error: "Task does not belong to this run" }, { status: 404 })
				let s = C(n.language),
					o = C(n.exercise),
					i = `${s}-${o}.log`,
					l = E.join(N, String(e), i),
					u = E.resolve(l),
					d = E.resolve(N)
				if (!u.startsWith(d)) return v.NextResponse.json({ error: "Invalid log path" }, { status: 400 })
				try {
					let e = await m.readFile(l, "utf-8")
					return v.NextResponse.json({ logContent: e })
				} catch (e) {
					if ("ENOENT" === e.code)
						return v.NextResponse.json({ error: "Log file not found", logContent: null }, { status: 200 })
					throw e
				}
			} catch (e) {
				if (
					(console.error("Error reading task log:", e),
					e instanceof Error && "RecordNotFoundError" === e.name)
				)
					return v.NextResponse.json({ error: "Task or run not found" }, { status: 404 })
				return v.NextResponse.json({ error: "Failed to read log file" }, { status: 500 })
			}
		}
		e.s(["GET", () => k, "dynamic", 0, "force-dynamic"], 88138)
		var b = e.i(88138)
		let q = new t.AppRouteRouteModule({
				definition: {
					kind: r.RouteKind.APP_ROUTE,
					page: "/api/runs/[id]/logs/[taskId]/route",
					pathname: "/api/runs/[id]/logs/[taskId]",
					filename: "route",
					bundlePath: "",
				},
				distDir: ".next",
				relativeProjectDir: "",
				resolvedPagePath: "[project]/apps/web-evals/src/app/api/runs/[id]/logs/[taskId]/route.ts",
				nextConfigOutput: "",
				userland: b,
			}),
			{ workAsyncStorage: A, workUnitAsyncStorage: T, serverHooks: j } = q
		function I() {
			return (0, a.patchFetch)({ workAsyncStorage: A, workUnitAsyncStorage: T })
		}
		async function P(e, t, a) {
			q.isDev && (0, n.addRequestMeta)(e, "devRequestTimingInternalsEnd", process.hrtime.bigint())
			let v = "/api/runs/[id]/logs/[taskId]/route"
			v = v.replace(/\/index$/, "") || "/"
			let m = await q.prepare(e, t, { srcPage: v, multiZoneDraftMode: !1 })
			if (!m)
				return (
					(t.statusCode = 400),
					t.end("Bad Request"),
					null == a.waitUntil || a.waitUntil.call(a, Promise.resolve()),
					null
				)
			let {
					buildId: E,
					params: w,
					nextConfig: y,
					parsedUrl: N,
					isDraftMode: C,
					prerenderManifest: k,
					routerServerContext: b,
					isOnDemandRevalidate: A,
					revalidateOnlyGenerated: T,
					resolvedPathname: j,
					clientReferenceManifest: I,
					serverActionsManifest: P,
				} = m,
				_ = (0, i.normalizeAppPath)(v),
				O = !!(k.dynamicRoutes[_] || k.routes[j]),
				S = async () => (
					(null == b ? void 0 : b.render404)
						? await b.render404(e, t, N, !1)
						: t.end("This page could not be found"),
					null
				)
			if (O && !C) {
				let e = !!k.routes[j],
					t = k.dynamicRoutes[_]
				if (t && !1 === t.fallback && !e) {
					if (y.experimental.adapterPath) return await S()
					throw new R.NoFallbackError()
				}
			}
			let H = null
			!O || q.isDev || C || (H = "/index" === (H = j) ? "/" : H)
			let U = !0 === q.isDev || !O,
				D = O && !U
			P && I && (0, o.setManifestsSingleton)({ page: v, clientReferenceManifest: I, serverActionsManifest: P })
			let M = e.method || "GET",
				F = (0, s.getTracer)(),
				$ = F.getActiveScopeSpan(),
				K = {
					params: w,
					prerenderManifest: k,
					renderOpts: {
						experimental: { authInterrupts: !!y.experimental.authInterrupts },
						cacheComponents: !!y.cacheComponents,
						supportsDynamicResponse: U,
						incrementalCache: (0, n.getRequestMeta)(e, "incrementalCache"),
						cacheLifeProfiles: y.cacheLife,
						waitUntil: a.waitUntil,
						onClose: (e) => {
							t.on("close", e)
						},
						onAfterTaskError: void 0,
						onInstrumentationRequestError: (t, r, a, n) => q.onRequestError(e, t, a, n, b),
					},
					sharedContext: { buildId: E },
				},
				L = new l.NodeNextRequest(e),
				B = new l.NodeNextResponse(t),
				G = u.NextRequestAdapter.fromNodeNextRequest(L, (0, u.signalFromNodeResponse)(t))
			try {
				let o = async (e) =>
						q.handle(G, K).finally(() => {
							if (!e) return
							e.setAttributes({ "http.status_code": t.statusCode, "next.rsc": !1 })
							let r = F.getRootSpanAttributes()
							if (!r) return
							if (r.get("next.span_type") !== d.BaseServerSpan.handleRequest)
								return void console.warn(
									`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`,
								)
							let a = r.get("next.route")
							if (a) {
								let t = `${M} ${a}`
								e.setAttributes({ "next.route": a, "http.route": a, "next.span_name": t }),
									e.updateName(t)
							} else e.updateName(`${M} ${v}`)
						}),
					i = !!(0, n.getRequestMeta)(e, "minimalMode"),
					l = async (n) => {
						var s, l
						let u = async ({ previousCacheEntry: r }) => {
								try {
									if (!i && A && T && !r)
										return (
											(t.statusCode = 404),
											t.setHeader("x-nextjs-cache", "REVALIDATED"),
											t.end("This page could not be found"),
											null
										)
									let s = await o(n)
									e.fetchMetrics = K.renderOpts.fetchMetrics
									let l = K.renderOpts.pendingWaitUntil
									l && a.waitUntil && (a.waitUntil(l), (l = void 0))
									let u = K.renderOpts.collectedTags
									if (!O)
										return await (0, c.sendResponse)(L, B, s, K.renderOpts.pendingWaitUntil), null
									{
										let e = await s.blob(),
											t = (0, x.toNodeOutgoingHttpHeaders)(s.headers)
										u && (t[f.NEXT_CACHE_TAGS_HEADER] = u),
											!t["content-type"] && e.type && (t["content-type"] = e.type)
										let r =
												void 0 !== K.renderOpts.collectedRevalidate &&
												!(K.renderOpts.collectedRevalidate >= f.INFINITE_CACHE) &&
												K.renderOpts.collectedRevalidate,
											a =
												void 0 === K.renderOpts.collectedExpire ||
												K.renderOpts.collectedExpire >= f.INFINITE_CACHE
													? void 0
													: K.renderOpts.collectedExpire
										return {
											value: {
												kind: g.CachedRouteKind.APP_ROUTE,
												status: s.status,
												body: Buffer.from(await e.arrayBuffer()),
												headers: t,
											},
											cacheControl: { revalidate: r, expire: a },
										}
									}
								} catch (t) {
									throw (
										((null == r ? void 0 : r.isStale) &&
											(await q.onRequestError(
												e,
												t,
												{
													routerKind: "App Router",
													routePath: v,
													routeType: "route",
													revalidateReason: (0, p.getRevalidateReason)({
														isStaticGeneration: D,
														isOnDemandRevalidate: A,
													}),
												},
												!1,
												b,
											)),
										t)
									)
								}
							},
							d = await q.handleResponse({
								req: e,
								nextConfig: y,
								cacheKey: H,
								routeKind: r.RouteKind.APP_ROUTE,
								isFallback: !1,
								prerenderManifest: k,
								isRoutePPREnabled: !1,
								isOnDemandRevalidate: A,
								revalidateOnlyGenerated: T,
								responseGenerator: u,
								waitUntil: a.waitUntil,
								isMinimalMode: i,
							})
						if (!O) return null
						if ((null == d || null == (s = d.value) ? void 0 : s.kind) !== g.CachedRouteKind.APP_ROUTE)
							throw Object.defineProperty(
								Error(
									`Invariant: app-route received invalid cache entry ${null == d || null == (l = d.value) ? void 0 : l.kind}`,
								),
								"__NEXT_ERROR_CODE",
								{ value: "E701", enumerable: !1, configurable: !0 },
							)
						i ||
							t.setHeader(
								"x-nextjs-cache",
								A ? "REVALIDATED" : d.isMiss ? "MISS" : d.isStale ? "STALE" : "HIT",
							),
							C && t.setHeader("Cache-Control", "private, no-cache, no-store, max-age=0, must-revalidate")
						let R = (0, x.fromNodeOutgoingHttpHeaders)(d.value.headers)
						return (
							(i && O) || R.delete(f.NEXT_CACHE_TAGS_HEADER),
							!d.cacheControl ||
								t.getHeader("Cache-Control") ||
								R.get("Cache-Control") ||
								R.set("Cache-Control", (0, h.getCacheControlHeader)(d.cacheControl)),
							await (0, c.sendResponse)(
								L,
								B,
								new Response(d.value.body, { headers: R, status: d.value.status || 200 }),
							),
							null
						)
					}
				$
					? await l($)
					: await F.withPropagatedContext(e.headers, () =>
							F.trace(
								d.BaseServerSpan.handleRequest,
								{
									spanName: `${M} ${v}`,
									kind: s.SpanKind.SERVER,
									attributes: { "http.method": M, "http.target": e.url },
								},
								l,
							),
						)
			} catch (t) {
				if (
					(t instanceof R.NoFallbackError ||
						(await q.onRequestError(
							e,
							t,
							{
								routerKind: "App Router",
								routePath: _,
								routeType: "route",
								revalidateReason: (0, p.getRevalidateReason)({
									isStaticGeneration: D,
									isOnDemandRevalidate: A,
								}),
							},
							!1,
							b,
						)),
					O)
				)
					throw t
				return await (0, c.sendResponse)(L, B, new Response(null, { status: 500 })), null
			}
		}
		e.s(
			[
				"handler",
				() => P,
				"patchFetch",
				() => I,
				"routeModule",
				() => q,
				"serverHooks",
				() => j,
				"workAsyncStorage",
				() => A,
				"workUnitAsyncStorage",
				() => T,
			],
			78982,
		)
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__e6950ecf._.js.map
