module.exports = [
	57111,
	(a) => {
		"use strict"
		var b = a.i(67191)
		function c(a, b) {
			if ("function" == typeof a) return a(b)
			null != a && (a.current = b)
		}
		function d(...a) {
			return (b) => {
				let d = !1,
					e = a.map((a) => {
						let e = c(a, b)
						return d || "function" != typeof e || (d = !0), e
					})
				if (d)
					return () => {
						for (let b = 0; b < e.length; b++) {
							let d = e[b]
							"function" == typeof d ? d() : c(a[b], null)
						}
					}
			}
		}
		function e(...a) {
			return b.useCallback(d(...a), a)
		}
		a.s(["composeRefs", () => d, "useComposedRefs", () => e])
	},
	42685,
	39337,
	(a) => {
		"use strict"
		function b() {
			for (var a, b, c = 0, d = "", e = arguments.length; c < e; c++)
				(a = arguments[c]) &&
					(b = (function a(b) {
						var c,
							d,
							e = ""
						if ("string" == typeof b || "number" == typeof b) e += b
						else if ("object" == typeof b)
							if (Array.isArray(b)) {
								var f = b.length
								for (c = 0; c < f; c++) b[c] && (d = a(b[c])) && (e && (e += " "), (e += d))
							} else for (d in b) b[d] && (e && (e += " "), (e += d))
						return e
					})(a)) &&
					(d && (d += " "), (d += b))
			return d
		}
		a.s(["clsx", () => b, "default", 0, b], 39337)
		let c = (a = new Map(), b = null, c) => ({ nextPart: a, validators: b, classGroupId: c }),
			d = [],
			e = (a, b, c) => {
				if (0 == a.length - b) return c.classGroupId
				let d = a[b],
					f = c.nextPart.get(d)
				if (f) {
					let c = e(a, b + 1, f)
					if (c) return c
				}
				let g = c.validators
				if (null === g) return
				let h = 0 === b ? a.join("-") : a.slice(b).join("-"),
					i = g.length
				for (let a = 0; a < i; a++) {
					let b = g[a]
					if (b.validator(h)) return b.classGroupId
				}
			},
			f = (a, b) => {
				let d = c()
				for (let c in a) g(a[c], d, c, b)
				return d
			},
			g = (a, b, c, d) => {
				let e = a.length
				for (let f = 0; f < e; f++) h(a[f], b, c, d)
			},
			h = (a, b, c, d) => {
				"string" == typeof a ? i(a, b, c) : "function" == typeof a ? j(a, b, c, d) : k(a, b, c, d)
			},
			i = (a, b, c) => {
				;("" === a ? b : l(b, a)).classGroupId = c
			},
			j = (a, b, c, d) => {
				m(a)
					? g(a(d), b, c, d)
					: (null === b.validators && (b.validators = []),
						b.validators.push({ classGroupId: c, validator: a }))
			},
			k = (a, b, c, d) => {
				let e = Object.entries(a),
					f = e.length
				for (let a = 0; a < f; a++) {
					let [f, h] = e[a]
					g(h, l(b, f), c, d)
				}
			},
			l = (a, b) => {
				let d = a,
					e = b.split("-"),
					f = e.length
				for (let a = 0; a < f; a++) {
					let b = e[a],
						f = d.nextPart.get(b)
					f || ((f = c()), d.nextPart.set(b, f)), (d = f)
				}
				return d
			},
			m = (a) => "isThemeGetter" in a && !0 === a.isThemeGetter,
			n = [],
			o = (a, b, c, d, e) => ({
				modifiers: a,
				hasImportantModifier: b,
				baseClassName: c,
				maybePostfixModifierPosition: d,
				isExternal: e,
			}),
			p = /\s+/,
			q = (a) => {
				let b
				if ("string" == typeof a) return a
				let c = ""
				for (let d = 0; d < a.length; d++) a[d] && (b = q(a[d])) && (c && (c += " "), (c += b))
				return c
			},
			r = [],
			s = (a) => {
				let b = (b) => b[a] || r
				return (b.isThemeGetter = !0), b
			},
			t = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
			u = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
			v = /^\d+\/\d+$/,
			w = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
			x =
				/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
			y = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
			z = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
			A = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
			B = (a) => v.test(a),
			C = (a) => !!a && !Number.isNaN(Number(a)),
			D = (a) => !!a && Number.isInteger(Number(a)),
			E = (a) => a.endsWith("%") && C(a.slice(0, -1)),
			F = (a) => w.test(a),
			G = () => !0,
			H = (a) => x.test(a) && !y.test(a),
			I = () => !1,
			J = (a) => z.test(a),
			K = (a) => A.test(a),
			L = (a) => !N(a) && !T(a),
			M = (a) => $(a, ac, I),
			N = (a) => t.test(a),
			O = (a) => $(a, ad, H),
			P = (a) => $(a, ae, C),
			Q = (a) => $(a, aa, I),
			R = (a) => $(a, ab, K),
			S = (a) => $(a, ag, J),
			T = (a) => u.test(a),
			U = (a) => _(a, ad),
			V = (a) => _(a, af),
			W = (a) => _(a, aa),
			X = (a) => _(a, ac),
			Y = (a) => _(a, ab),
			Z = (a) => _(a, ag, !0),
			$ = (a, b, c) => {
				let d = t.exec(a)
				return !!d && (d[1] ? b(d[1]) : c(d[2]))
			},
			_ = (a, b, c = !1) => {
				let d = u.exec(a)
				return !!d && (d[1] ? b(d[1]) : c)
			},
			aa = (a) => "position" === a || "percentage" === a,
			ab = (a) => "image" === a || "url" === a,
			ac = (a) => "length" === a || "size" === a || "bg-size" === a,
			ad = (a) => "length" === a,
			ae = (a) => "number" === a,
			af = (a) => "family-name" === a,
			ag = (a) => "shadow" === a,
			ah = ((a, ...b) => {
				let c,
					g,
					h,
					i,
					j = (a) => {
						let b = g(a)
						if (b) return b
						let d = ((a, b) => {
							let {
									parseClassName: c,
									getClassGroupId: d,
									getConflictingClassGroupIds: e,
									sortModifiers: f,
								} = b,
								g = [],
								h = a.trim().split(p),
								i = ""
							for (let a = h.length - 1; a >= 0; a -= 1) {
								let b = h[a],
									{
										isExternal: j,
										modifiers: k,
										hasImportantModifier: l,
										baseClassName: m,
										maybePostfixModifierPosition: n,
									} = c(b)
								if (j) {
									i = b + (i.length > 0 ? " " + i : i)
									continue
								}
								let o = !!n,
									p = d(o ? m.substring(0, n) : m)
								if (!p) {
									if (!o || !(p = d(m))) {
										i = b + (i.length > 0 ? " " + i : i)
										continue
									}
									o = !1
								}
								let q = 0 === k.length ? "" : 1 === k.length ? k[0] : f(k).join(":"),
									r = l ? q + "!" : q,
									s = r + p
								if (g.indexOf(s) > -1) continue
								g.push(s)
								let t = e(p, o)
								for (let a = 0; a < t.length; ++a) {
									let b = t[a]
									g.push(r + b)
								}
								i = b + (i.length > 0 ? " " + i : i)
							}
							return i
						})(a, c)
						return h(a, d), d
					}
				return (
					(i = (k) => {
						var l
						let m
						return (
							(g = (c = {
								cache: ((a) => {
									if (a < 1) return { get: () => void 0, set: () => {} }
									let b = 0,
										c = Object.create(null),
										d = Object.create(null),
										e = (e, f) => {
											;(c[e] = f), ++b > a && ((b = 0), (d = c), (c = Object.create(null)))
										}
									return {
										get(a) {
											let b = c[a]
											return void 0 !== b ? b : void 0 !== (b = d[a]) ? (e(a, b), b) : void 0
										},
										set(a, b) {
											a in c ? (c[a] = b) : e(a, b)
										},
									}
								})((l = b.reduce((a, b) => b(a), a())).cacheSize),
								parseClassName: ((a) => {
									let { prefix: b, experimentalParseClassName: c } = a,
										d = (a) => {
											let b,
												c = [],
												d = 0,
												e = 0,
												f = 0,
												g = a.length
											for (let h = 0; h < g; h++) {
												let g = a[h]
												if (0 === d && 0 === e) {
													if (":" === g) {
														c.push(a.slice(f, h)), (f = h + 1)
														continue
													}
													if ("/" === g) {
														b = h
														continue
													}
												}
												"[" === g ? d++ : "]" === g ? d-- : "(" === g ? e++ : ")" === g && e--
											}
											let h = 0 === c.length ? a : a.slice(f),
												i = h,
												j = !1
											return (
												h.endsWith("!")
													? ((i = h.slice(0, -1)), (j = !0))
													: h.startsWith("!") && ((i = h.slice(1)), (j = !0)),
												o(c, j, i, b && b > f ? b - f : void 0)
											)
										}
									if (b) {
										let a = b + ":",
											c = d
										d = (b) => (b.startsWith(a) ? c(b.slice(a.length)) : o(n, !1, b, void 0, !0))
									}
									if (c) {
										let a = d
										d = (b) => c({ className: b, parseClassName: a })
									}
									return d
								})(l),
								sortModifiers:
									((m = new Map()),
									l.orderSensitiveModifiers.forEach((a, b) => {
										m.set(a, 1e6 + b)
									}),
									(a) => {
										let b = [],
											c = []
										for (let d = 0; d < a.length; d++) {
											let e = a[d],
												f = "[" === e[0],
												g = m.has(e)
											f || g
												? (c.length > 0 && (c.sort(), b.push(...c), (c = [])), b.push(e))
												: c.push(e)
										}
										return c.length > 0 && (c.sort(), b.push(...c)), b
									}),
								...((a) => {
									let b = ((a) => {
											let { theme: b, classGroups: c } = a
											return f(c, b)
										})(a),
										{ conflictingClassGroups: c, conflictingClassGroupModifiers: g } = a
									return {
										getClassGroupId: (a) => {
											if (a.startsWith("[") && a.endsWith("]")) {
												var c
												let b, d, e
												return -1 === (c = a).slice(1, -1).indexOf(":")
													? void 0
													: ((d = (b = c.slice(1, -1)).indexOf(":")),
														(e = b.slice(0, d)) ? "arbitrary.." + e : void 0)
											}
											let d = a.split("-"),
												f = +("" === d[0] && d.length > 1)
											return e(d, f, b)
										},
										getConflictingClassGroupIds: (a, b) => {
											if (b) {
												let b = g[a],
													e = c[a]
												if (b) {
													if (e) {
														let a = Array(e.length + b.length)
														for (let b = 0; b < e.length; b++) a[b] = e[b]
														for (let c = 0; c < b.length; c++) a[e.length + c] = b[c]
														return a
													}
													return b
												}
												return e || d
											}
											return c[a] || d
										},
									}
								})(l),
							}).cache.get),
							(h = c.cache.set),
							(i = j),
							j(k)
						)
					}),
					(...a) =>
						i(
							((...a) => {
								let b,
									c,
									d = 0,
									e = ""
								for (; d < a.length; ) (b = a[d++]) && (c = q(b)) && (e && (e += " "), (e += c))
								return e
							})(...a),
						)
				)
			})(() => {
				let a = s("color"),
					b = s("font"),
					c = s("text"),
					d = s("font-weight"),
					e = s("tracking"),
					f = s("leading"),
					g = s("breakpoint"),
					h = s("container"),
					i = s("spacing"),
					j = s("radius"),
					k = s("shadow"),
					l = s("inset-shadow"),
					m = s("text-shadow"),
					n = s("drop-shadow"),
					o = s("blur"),
					p = s("perspective"),
					q = s("aspect"),
					r = s("ease"),
					t = s("animate"),
					u = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
					v = () => [
						"center",
						"top",
						"bottom",
						"left",
						"right",
						"top-left",
						"left-top",
						"top-right",
						"right-top",
						"bottom-right",
						"right-bottom",
						"bottom-left",
						"left-bottom",
					],
					w = () => [...v(), T, N],
					x = () => ["auto", "hidden", "clip", "visible", "scroll"],
					y = () => ["auto", "contain", "none"],
					z = () => [T, N, i],
					A = () => [B, "full", "auto", ...z()],
					H = () => [D, "none", "subgrid", T, N],
					I = () => ["auto", { span: ["full", D, T, N] }, D, T, N],
					J = () => [D, "auto", T, N],
					K = () => ["auto", "min", "max", "fr", T, N],
					$ = () => [
						"start",
						"end",
						"center",
						"between",
						"around",
						"evenly",
						"stretch",
						"baseline",
						"center-safe",
						"end-safe",
					],
					_ = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
					aa = () => ["auto", ...z()],
					ab = () => [
						B,
						"auto",
						"full",
						"dvw",
						"dvh",
						"lvw",
						"lvh",
						"svw",
						"svh",
						"min",
						"max",
						"fit",
						...z(),
					],
					ac = () => [a, T, N],
					ad = () => [...v(), W, Q, { position: [T, N] }],
					ae = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
					af = () => ["auto", "cover", "contain", X, M, { size: [T, N] }],
					ag = () => [E, U, O],
					ah = () => ["", "none", "full", j, T, N],
					ai = () => ["", C, U, O],
					aj = () => ["solid", "dashed", "dotted", "double"],
					ak = () => [
						"normal",
						"multiply",
						"screen",
						"overlay",
						"darken",
						"lighten",
						"color-dodge",
						"color-burn",
						"hard-light",
						"soft-light",
						"difference",
						"exclusion",
						"hue",
						"saturation",
						"color",
						"luminosity",
					],
					al = () => [C, E, W, Q],
					am = () => ["", "none", o, T, N],
					an = () => ["none", C, T, N],
					ao = () => ["none", C, T, N],
					ap = () => [C, T, N],
					aq = () => [B, "full", ...z()]
				return {
					cacheSize: 500,
					theme: {
						animate: ["spin", "ping", "pulse", "bounce"],
						aspect: ["video"],
						blur: [F],
						breakpoint: [F],
						color: [G],
						container: [F],
						"drop-shadow": [F],
						ease: ["in", "out", "in-out"],
						font: [L],
						"font-weight": [
							"thin",
							"extralight",
							"light",
							"normal",
							"medium",
							"semibold",
							"bold",
							"extrabold",
							"black",
						],
						"inset-shadow": [F],
						leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
						perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
						radius: [F],
						shadow: [F],
						spacing: ["px", C],
						text: [F],
						"text-shadow": [F],
						tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
					},
					classGroups: {
						aspect: [{ aspect: ["auto", "square", B, N, T, q] }],
						container: ["container"],
						columns: [{ columns: [C, N, T, h] }],
						"break-after": [{ "break-after": u() }],
						"break-before": [{ "break-before": u() }],
						"break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
						"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
						box: [{ box: ["border", "content"] }],
						display: [
							"block",
							"inline-block",
							"inline",
							"flex",
							"inline-flex",
							"table",
							"inline-table",
							"table-caption",
							"table-cell",
							"table-column",
							"table-column-group",
							"table-footer-group",
							"table-header-group",
							"table-row-group",
							"table-row",
							"flow-root",
							"grid",
							"inline-grid",
							"contents",
							"list-item",
							"hidden",
						],
						sr: ["sr-only", "not-sr-only"],
						float: [{ float: ["right", "left", "none", "start", "end"] }],
						clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
						isolation: ["isolate", "isolation-auto"],
						"object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
						"object-position": [{ object: w() }],
						overflow: [{ overflow: x() }],
						"overflow-x": [{ "overflow-x": x() }],
						"overflow-y": [{ "overflow-y": x() }],
						overscroll: [{ overscroll: y() }],
						"overscroll-x": [{ "overscroll-x": y() }],
						"overscroll-y": [{ "overscroll-y": y() }],
						position: ["static", "fixed", "absolute", "relative", "sticky"],
						inset: [{ inset: A() }],
						"inset-x": [{ "inset-x": A() }],
						"inset-y": [{ "inset-y": A() }],
						start: [{ start: A() }],
						end: [{ end: A() }],
						top: [{ top: A() }],
						right: [{ right: A() }],
						bottom: [{ bottom: A() }],
						left: [{ left: A() }],
						visibility: ["visible", "invisible", "collapse"],
						z: [{ z: [D, "auto", T, N] }],
						basis: [{ basis: [B, "full", "auto", h, ...z()] }],
						"flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
						"flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
						flex: [{ flex: [C, B, "auto", "initial", "none", N] }],
						grow: [{ grow: ["", C, T, N] }],
						shrink: [{ shrink: ["", C, T, N] }],
						order: [{ order: [D, "first", "last", "none", T, N] }],
						"grid-cols": [{ "grid-cols": H() }],
						"col-start-end": [{ col: I() }],
						"col-start": [{ "col-start": J() }],
						"col-end": [{ "col-end": J() }],
						"grid-rows": [{ "grid-rows": H() }],
						"row-start-end": [{ row: I() }],
						"row-start": [{ "row-start": J() }],
						"row-end": [{ "row-end": J() }],
						"grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
						"auto-cols": [{ "auto-cols": K() }],
						"auto-rows": [{ "auto-rows": K() }],
						gap: [{ gap: z() }],
						"gap-x": [{ "gap-x": z() }],
						"gap-y": [{ "gap-y": z() }],
						"justify-content": [{ justify: [...$(), "normal"] }],
						"justify-items": [{ "justify-items": [..._(), "normal"] }],
						"justify-self": [{ "justify-self": ["auto", ..._()] }],
						"align-content": [{ content: ["normal", ...$()] }],
						"align-items": [{ items: [..._(), { baseline: ["", "last"] }] }],
						"align-self": [{ self: ["auto", ..._(), { baseline: ["", "last"] }] }],
						"place-content": [{ "place-content": $() }],
						"place-items": [{ "place-items": [..._(), "baseline"] }],
						"place-self": [{ "place-self": ["auto", ..._()] }],
						p: [{ p: z() }],
						px: [{ px: z() }],
						py: [{ py: z() }],
						ps: [{ ps: z() }],
						pe: [{ pe: z() }],
						pt: [{ pt: z() }],
						pr: [{ pr: z() }],
						pb: [{ pb: z() }],
						pl: [{ pl: z() }],
						m: [{ m: aa() }],
						mx: [{ mx: aa() }],
						my: [{ my: aa() }],
						ms: [{ ms: aa() }],
						me: [{ me: aa() }],
						mt: [{ mt: aa() }],
						mr: [{ mr: aa() }],
						mb: [{ mb: aa() }],
						ml: [{ ml: aa() }],
						"space-x": [{ "space-x": z() }],
						"space-x-reverse": ["space-x-reverse"],
						"space-y": [{ "space-y": z() }],
						"space-y-reverse": ["space-y-reverse"],
						size: [{ size: ab() }],
						w: [{ w: [h, "screen", ...ab()] }],
						"min-w": [{ "min-w": [h, "screen", "none", ...ab()] }],
						"max-w": [{ "max-w": [h, "screen", "none", "prose", { screen: [g] }, ...ab()] }],
						h: [{ h: ["screen", "lh", ...ab()] }],
						"min-h": [{ "min-h": ["screen", "lh", "none", ...ab()] }],
						"max-h": [{ "max-h": ["screen", "lh", ...ab()] }],
						"font-size": [{ text: ["base", c, U, O] }],
						"font-smoothing": ["antialiased", "subpixel-antialiased"],
						"font-style": ["italic", "not-italic"],
						"font-weight": [{ font: [d, T, P] }],
						"font-stretch": [
							{
								"font-stretch": [
									"ultra-condensed",
									"extra-condensed",
									"condensed",
									"semi-condensed",
									"normal",
									"semi-expanded",
									"expanded",
									"extra-expanded",
									"ultra-expanded",
									E,
									N,
								],
							},
						],
						"font-family": [{ font: [V, N, b] }],
						"fvn-normal": ["normal-nums"],
						"fvn-ordinal": ["ordinal"],
						"fvn-slashed-zero": ["slashed-zero"],
						"fvn-figure": ["lining-nums", "oldstyle-nums"],
						"fvn-spacing": ["proportional-nums", "tabular-nums"],
						"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
						tracking: [{ tracking: [e, T, N] }],
						"line-clamp": [{ "line-clamp": [C, "none", T, P] }],
						leading: [{ leading: [f, ...z()] }],
						"list-image": [{ "list-image": ["none", T, N] }],
						"list-style-position": [{ list: ["inside", "outside"] }],
						"list-style-type": [{ list: ["disc", "decimal", "none", T, N] }],
						"text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
						"placeholder-color": [{ placeholder: ac() }],
						"text-color": [{ text: ac() }],
						"text-decoration": ["underline", "overline", "line-through", "no-underline"],
						"text-decoration-style": [{ decoration: [...aj(), "wavy"] }],
						"text-decoration-thickness": [{ decoration: [C, "from-font", "auto", T, O] }],
						"text-decoration-color": [{ decoration: ac() }],
						"underline-offset": [{ "underline-offset": [C, "auto", T, N] }],
						"text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
						"text-overflow": ["truncate", "text-ellipsis", "text-clip"],
						"text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
						indent: [{ indent: z() }],
						"vertical-align": [
							{
								align: [
									"baseline",
									"top",
									"middle",
									"bottom",
									"text-top",
									"text-bottom",
									"sub",
									"super",
									T,
									N,
								],
							},
						],
						whitespace: [
							{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] },
						],
						break: [{ break: ["normal", "words", "all", "keep"] }],
						wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
						hyphens: [{ hyphens: ["none", "manual", "auto"] }],
						content: [{ content: ["none", T, N] }],
						"bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
						"bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
						"bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
						"bg-position": [{ bg: ad() }],
						"bg-repeat": [{ bg: ae() }],
						"bg-size": [{ bg: af() }],
						"bg-image": [
							{
								bg: [
									"none",
									{
										linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, D, T, N],
										radial: ["", T, N],
										conic: [D, T, N],
									},
									Y,
									R,
								],
							},
						],
						"bg-color": [{ bg: ac() }],
						"gradient-from-pos": [{ from: ag() }],
						"gradient-via-pos": [{ via: ag() }],
						"gradient-to-pos": [{ to: ag() }],
						"gradient-from": [{ from: ac() }],
						"gradient-via": [{ via: ac() }],
						"gradient-to": [{ to: ac() }],
						rounded: [{ rounded: ah() }],
						"rounded-s": [{ "rounded-s": ah() }],
						"rounded-e": [{ "rounded-e": ah() }],
						"rounded-t": [{ "rounded-t": ah() }],
						"rounded-r": [{ "rounded-r": ah() }],
						"rounded-b": [{ "rounded-b": ah() }],
						"rounded-l": [{ "rounded-l": ah() }],
						"rounded-ss": [{ "rounded-ss": ah() }],
						"rounded-se": [{ "rounded-se": ah() }],
						"rounded-ee": [{ "rounded-ee": ah() }],
						"rounded-es": [{ "rounded-es": ah() }],
						"rounded-tl": [{ "rounded-tl": ah() }],
						"rounded-tr": [{ "rounded-tr": ah() }],
						"rounded-br": [{ "rounded-br": ah() }],
						"rounded-bl": [{ "rounded-bl": ah() }],
						"border-w": [{ border: ai() }],
						"border-w-x": [{ "border-x": ai() }],
						"border-w-y": [{ "border-y": ai() }],
						"border-w-s": [{ "border-s": ai() }],
						"border-w-e": [{ "border-e": ai() }],
						"border-w-t": [{ "border-t": ai() }],
						"border-w-r": [{ "border-r": ai() }],
						"border-w-b": [{ "border-b": ai() }],
						"border-w-l": [{ "border-l": ai() }],
						"divide-x": [{ "divide-x": ai() }],
						"divide-x-reverse": ["divide-x-reverse"],
						"divide-y": [{ "divide-y": ai() }],
						"divide-y-reverse": ["divide-y-reverse"],
						"border-style": [{ border: [...aj(), "hidden", "none"] }],
						"divide-style": [{ divide: [...aj(), "hidden", "none"] }],
						"border-color": [{ border: ac() }],
						"border-color-x": [{ "border-x": ac() }],
						"border-color-y": [{ "border-y": ac() }],
						"border-color-s": [{ "border-s": ac() }],
						"border-color-e": [{ "border-e": ac() }],
						"border-color-t": [{ "border-t": ac() }],
						"border-color-r": [{ "border-r": ac() }],
						"border-color-b": [{ "border-b": ac() }],
						"border-color-l": [{ "border-l": ac() }],
						"divide-color": [{ divide: ac() }],
						"outline-style": [{ outline: [...aj(), "none", "hidden"] }],
						"outline-offset": [{ "outline-offset": [C, T, N] }],
						"outline-w": [{ outline: ["", C, U, O] }],
						"outline-color": [{ outline: ac() }],
						shadow: [{ shadow: ["", "none", k, Z, S] }],
						"shadow-color": [{ shadow: ac() }],
						"inset-shadow": [{ "inset-shadow": ["none", l, Z, S] }],
						"inset-shadow-color": [{ "inset-shadow": ac() }],
						"ring-w": [{ ring: ai() }],
						"ring-w-inset": ["ring-inset"],
						"ring-color": [{ ring: ac() }],
						"ring-offset-w": [{ "ring-offset": [C, O] }],
						"ring-offset-color": [{ "ring-offset": ac() }],
						"inset-ring-w": [{ "inset-ring": ai() }],
						"inset-ring-color": [{ "inset-ring": ac() }],
						"text-shadow": [{ "text-shadow": ["none", m, Z, S] }],
						"text-shadow-color": [{ "text-shadow": ac() }],
						opacity: [{ opacity: [C, T, N] }],
						"mix-blend": [{ "mix-blend": [...ak(), "plus-darker", "plus-lighter"] }],
						"bg-blend": [{ "bg-blend": ak() }],
						"mask-clip": [
							{ "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] },
							"mask-no-clip",
						],
						"mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }],
						"mask-image-linear-pos": [{ "mask-linear": [C] }],
						"mask-image-linear-from-pos": [{ "mask-linear-from": al() }],
						"mask-image-linear-to-pos": [{ "mask-linear-to": al() }],
						"mask-image-linear-from-color": [{ "mask-linear-from": ac() }],
						"mask-image-linear-to-color": [{ "mask-linear-to": ac() }],
						"mask-image-t-from-pos": [{ "mask-t-from": al() }],
						"mask-image-t-to-pos": [{ "mask-t-to": al() }],
						"mask-image-t-from-color": [{ "mask-t-from": ac() }],
						"mask-image-t-to-color": [{ "mask-t-to": ac() }],
						"mask-image-r-from-pos": [{ "mask-r-from": al() }],
						"mask-image-r-to-pos": [{ "mask-r-to": al() }],
						"mask-image-r-from-color": [{ "mask-r-from": ac() }],
						"mask-image-r-to-color": [{ "mask-r-to": ac() }],
						"mask-image-b-from-pos": [{ "mask-b-from": al() }],
						"mask-image-b-to-pos": [{ "mask-b-to": al() }],
						"mask-image-b-from-color": [{ "mask-b-from": ac() }],
						"mask-image-b-to-color": [{ "mask-b-to": ac() }],
						"mask-image-l-from-pos": [{ "mask-l-from": al() }],
						"mask-image-l-to-pos": [{ "mask-l-to": al() }],
						"mask-image-l-from-color": [{ "mask-l-from": ac() }],
						"mask-image-l-to-color": [{ "mask-l-to": ac() }],
						"mask-image-x-from-pos": [{ "mask-x-from": al() }],
						"mask-image-x-to-pos": [{ "mask-x-to": al() }],
						"mask-image-x-from-color": [{ "mask-x-from": ac() }],
						"mask-image-x-to-color": [{ "mask-x-to": ac() }],
						"mask-image-y-from-pos": [{ "mask-y-from": al() }],
						"mask-image-y-to-pos": [{ "mask-y-to": al() }],
						"mask-image-y-from-color": [{ "mask-y-from": ac() }],
						"mask-image-y-to-color": [{ "mask-y-to": ac() }],
						"mask-image-radial": [{ "mask-radial": [T, N] }],
						"mask-image-radial-from-pos": [{ "mask-radial-from": al() }],
						"mask-image-radial-to-pos": [{ "mask-radial-to": al() }],
						"mask-image-radial-from-color": [{ "mask-radial-from": ac() }],
						"mask-image-radial-to-color": [{ "mask-radial-to": ac() }],
						"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
						"mask-image-radial-size": [
							{ "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] },
						],
						"mask-image-radial-pos": [{ "mask-radial-at": v() }],
						"mask-image-conic-pos": [{ "mask-conic": [C] }],
						"mask-image-conic-from-pos": [{ "mask-conic-from": al() }],
						"mask-image-conic-to-pos": [{ "mask-conic-to": al() }],
						"mask-image-conic-from-color": [{ "mask-conic-from": ac() }],
						"mask-image-conic-to-color": [{ "mask-conic-to": ac() }],
						"mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
						"mask-origin": [{ "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] }],
						"mask-position": [{ mask: ad() }],
						"mask-repeat": [{ mask: ae() }],
						"mask-size": [{ mask: af() }],
						"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
						"mask-image": [{ mask: ["none", T, N] }],
						filter: [{ filter: ["", "none", T, N] }],
						blur: [{ blur: am() }],
						brightness: [{ brightness: [C, T, N] }],
						contrast: [{ contrast: [C, T, N] }],
						"drop-shadow": [{ "drop-shadow": ["", "none", n, Z, S] }],
						"drop-shadow-color": [{ "drop-shadow": ac() }],
						grayscale: [{ grayscale: ["", C, T, N] }],
						"hue-rotate": [{ "hue-rotate": [C, T, N] }],
						invert: [{ invert: ["", C, T, N] }],
						saturate: [{ saturate: [C, T, N] }],
						sepia: [{ sepia: ["", C, T, N] }],
						"backdrop-filter": [{ "backdrop-filter": ["", "none", T, N] }],
						"backdrop-blur": [{ "backdrop-blur": am() }],
						"backdrop-brightness": [{ "backdrop-brightness": [C, T, N] }],
						"backdrop-contrast": [{ "backdrop-contrast": [C, T, N] }],
						"backdrop-grayscale": [{ "backdrop-grayscale": ["", C, T, N] }],
						"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [C, T, N] }],
						"backdrop-invert": [{ "backdrop-invert": ["", C, T, N] }],
						"backdrop-opacity": [{ "backdrop-opacity": [C, T, N] }],
						"backdrop-saturate": [{ "backdrop-saturate": [C, T, N] }],
						"backdrop-sepia": [{ "backdrop-sepia": ["", C, T, N] }],
						"border-collapse": [{ border: ["collapse", "separate"] }],
						"border-spacing": [{ "border-spacing": z() }],
						"border-spacing-x": [{ "border-spacing-x": z() }],
						"border-spacing-y": [{ "border-spacing-y": z() }],
						"table-layout": [{ table: ["auto", "fixed"] }],
						caption: [{ caption: ["top", "bottom"] }],
						transition: [
							{ transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", T, N] },
						],
						"transition-behavior": [{ transition: ["normal", "discrete"] }],
						duration: [{ duration: [C, "initial", T, N] }],
						ease: [{ ease: ["linear", "initial", r, T, N] }],
						delay: [{ delay: [C, T, N] }],
						animate: [{ animate: ["none", t, T, N] }],
						backface: [{ backface: ["hidden", "visible"] }],
						perspective: [{ perspective: [p, T, N] }],
						"perspective-origin": [{ "perspective-origin": w() }],
						rotate: [{ rotate: an() }],
						"rotate-x": [{ "rotate-x": an() }],
						"rotate-y": [{ "rotate-y": an() }],
						"rotate-z": [{ "rotate-z": an() }],
						scale: [{ scale: ao() }],
						"scale-x": [{ "scale-x": ao() }],
						"scale-y": [{ "scale-y": ao() }],
						"scale-z": [{ "scale-z": ao() }],
						"scale-3d": ["scale-3d"],
						skew: [{ skew: ap() }],
						"skew-x": [{ "skew-x": ap() }],
						"skew-y": [{ "skew-y": ap() }],
						transform: [{ transform: [T, N, "", "none", "gpu", "cpu"] }],
						"transform-origin": [{ origin: w() }],
						"transform-style": [{ transform: ["3d", "flat"] }],
						translate: [{ translate: aq() }],
						"translate-x": [{ "translate-x": aq() }],
						"translate-y": [{ "translate-y": aq() }],
						"translate-z": [{ "translate-z": aq() }],
						"translate-none": ["translate-none"],
						accent: [{ accent: ac() }],
						appearance: [{ appearance: ["none", "auto"] }],
						"caret-color": [{ caret: ac() }],
						"color-scheme": [
							{ scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] },
						],
						cursor: [
							{
								cursor: [
									"auto",
									"default",
									"pointer",
									"wait",
									"text",
									"move",
									"help",
									"not-allowed",
									"none",
									"context-menu",
									"progress",
									"cell",
									"crosshair",
									"vertical-text",
									"alias",
									"copy",
									"no-drop",
									"grab",
									"grabbing",
									"all-scroll",
									"col-resize",
									"row-resize",
									"n-resize",
									"e-resize",
									"s-resize",
									"w-resize",
									"ne-resize",
									"nw-resize",
									"se-resize",
									"sw-resize",
									"ew-resize",
									"ns-resize",
									"nesw-resize",
									"nwse-resize",
									"zoom-in",
									"zoom-out",
									T,
									N,
								],
							},
						],
						"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
						"pointer-events": [{ "pointer-events": ["auto", "none"] }],
						resize: [{ resize: ["none", "", "y", "x"] }],
						"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
						"scroll-m": [{ "scroll-m": z() }],
						"scroll-mx": [{ "scroll-mx": z() }],
						"scroll-my": [{ "scroll-my": z() }],
						"scroll-ms": [{ "scroll-ms": z() }],
						"scroll-me": [{ "scroll-me": z() }],
						"scroll-mt": [{ "scroll-mt": z() }],
						"scroll-mr": [{ "scroll-mr": z() }],
						"scroll-mb": [{ "scroll-mb": z() }],
						"scroll-ml": [{ "scroll-ml": z() }],
						"scroll-p": [{ "scroll-p": z() }],
						"scroll-px": [{ "scroll-px": z() }],
						"scroll-py": [{ "scroll-py": z() }],
						"scroll-ps": [{ "scroll-ps": z() }],
						"scroll-pe": [{ "scroll-pe": z() }],
						"scroll-pt": [{ "scroll-pt": z() }],
						"scroll-pr": [{ "scroll-pr": z() }],
						"scroll-pb": [{ "scroll-pb": z() }],
						"scroll-pl": [{ "scroll-pl": z() }],
						"snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
						"snap-stop": [{ snap: ["normal", "always"] }],
						"snap-type": [{ snap: ["none", "x", "y", "both"] }],
						"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
						touch: [{ touch: ["auto", "none", "manipulation"] }],
						"touch-x": [{ "touch-pan": ["x", "left", "right"] }],
						"touch-y": [{ "touch-pan": ["y", "up", "down"] }],
						"touch-pz": ["touch-pinch-zoom"],
						select: [{ select: ["none", "text", "all", "auto"] }],
						"will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", T, N] }],
						fill: [{ fill: ["none", ...ac()] }],
						"stroke-w": [{ stroke: [C, U, O, P] }],
						stroke: [{ stroke: ["none", ...ac()] }],
						"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
					},
					conflictingClassGroups: {
						overflow: ["overflow-x", "overflow-y"],
						overscroll: ["overscroll-x", "overscroll-y"],
						inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
						"inset-x": ["right", "left"],
						"inset-y": ["top", "bottom"],
						flex: ["basis", "grow", "shrink"],
						gap: ["gap-x", "gap-y"],
						p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
						px: ["pr", "pl"],
						py: ["pt", "pb"],
						m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
						mx: ["mr", "ml"],
						my: ["mt", "mb"],
						size: ["w", "h"],
						"font-size": ["leading"],
						"fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
						"fvn-ordinal": ["fvn-normal"],
						"fvn-slashed-zero": ["fvn-normal"],
						"fvn-figure": ["fvn-normal"],
						"fvn-spacing": ["fvn-normal"],
						"fvn-fraction": ["fvn-normal"],
						"line-clamp": ["display", "overflow"],
						rounded: [
							"rounded-s",
							"rounded-e",
							"rounded-t",
							"rounded-r",
							"rounded-b",
							"rounded-l",
							"rounded-ss",
							"rounded-se",
							"rounded-ee",
							"rounded-es",
							"rounded-tl",
							"rounded-tr",
							"rounded-br",
							"rounded-bl",
						],
						"rounded-s": ["rounded-ss", "rounded-es"],
						"rounded-e": ["rounded-se", "rounded-ee"],
						"rounded-t": ["rounded-tl", "rounded-tr"],
						"rounded-r": ["rounded-tr", "rounded-br"],
						"rounded-b": ["rounded-br", "rounded-bl"],
						"rounded-l": ["rounded-tl", "rounded-bl"],
						"border-spacing": ["border-spacing-x", "border-spacing-y"],
						"border-w": [
							"border-w-x",
							"border-w-y",
							"border-w-s",
							"border-w-e",
							"border-w-t",
							"border-w-r",
							"border-w-b",
							"border-w-l",
						],
						"border-w-x": ["border-w-r", "border-w-l"],
						"border-w-y": ["border-w-t", "border-w-b"],
						"border-color": [
							"border-color-x",
							"border-color-y",
							"border-color-s",
							"border-color-e",
							"border-color-t",
							"border-color-r",
							"border-color-b",
							"border-color-l",
						],
						"border-color-x": ["border-color-r", "border-color-l"],
						"border-color-y": ["border-color-t", "border-color-b"],
						translate: ["translate-x", "translate-y", "translate-none"],
						"translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
						"scroll-m": [
							"scroll-mx",
							"scroll-my",
							"scroll-ms",
							"scroll-me",
							"scroll-mt",
							"scroll-mr",
							"scroll-mb",
							"scroll-ml",
						],
						"scroll-mx": ["scroll-mr", "scroll-ml"],
						"scroll-my": ["scroll-mt", "scroll-mb"],
						"scroll-p": [
							"scroll-px",
							"scroll-py",
							"scroll-ps",
							"scroll-pe",
							"scroll-pt",
							"scroll-pr",
							"scroll-pb",
							"scroll-pl",
						],
						"scroll-px": ["scroll-pr", "scroll-pl"],
						"scroll-py": ["scroll-pt", "scroll-pb"],
						touch: ["touch-x", "touch-y", "touch-pz"],
						"touch-x": ["touch"],
						"touch-y": ["touch"],
						"touch-pz": ["touch"],
					},
					conflictingClassGroupModifiers: { "font-size": ["leading"] },
					orderSensitiveModifiers: [
						"*",
						"**",
						"after",
						"backdrop",
						"before",
						"details-content",
						"file",
						"first-letter",
						"first-line",
						"marker",
						"placeholder",
						"selection",
					],
				}
			})
		function ai(...a) {
			return ah(b(a))
		}
		a.s(["cn", () => ai], 42685)
	},
	59653,
	(a) => {
		"use strict"
		function b(a, c, { checkForDefaultPrevented: d = !0 } = {}) {
			return function (b) {
				if ((a?.(b), !1 === d || !b.defaultPrevented)) return c?.(b)
			}
		}
		a.s(["composeEventHandlers", () => b])
	},
	29159,
	(a) => {
		"use strict"
		let b = (0, a.i(8402).default)("x", [
			["path", { d: "M18 6 6 18", key: "1bl5f8" }],
			["path", { d: "m6 6 12 12", key: "d8bk6v" }],
		])
		a.s(["X", () => b], 29159)
	},
	49939,
	44823,
	39743,
	3058,
	70962,
	79696,
	11306,
	95840,
	88986,
	64699,
	(a) => {
		"use strict"
		let b
		var c,
			d,
			e,
			f,
			g,
			h,
			i,
			j,
			k = a.i(9116),
			l = a.i(67191),
			m = a.i(59653),
			n = a.i(57111)
		function o(a, b) {
			let c = l.createContext(b),
				d = (a) => {
					let { children: b, ...d } = a,
						e = l.useMemo(() => d, Object.values(d))
					return (0, k.jsx)(c.Provider, { value: e, children: b })
				}
			return (
				(d.displayName = a + "Provider"),
				[
					d,
					function (d) {
						let e = l.useContext(c)
						if (e) return e
						if (void 0 !== b) return b
						throw Error(`\`${d}\` must be used within \`${a}\``)
					},
				]
			)
		}
		function p(a, b = []) {
			let c = [],
				d = () => {
					let b = c.map((a) => l.createContext(a))
					return function (c) {
						let d = c?.[a] || b
						return l.useMemo(() => ({ [`__scope${a}`]: { ...c, [a]: d } }), [c, d])
					}
				}
			return (
				(d.scopeName = a),
				[
					function (b, d) {
						let e = l.createContext(d),
							f = c.length
						c = [...c, d]
						let g = (b) => {
							let { scope: c, children: d, ...g } = b,
								h = c?.[a]?.[f] || e,
								i = l.useMemo(() => g, Object.values(g))
							return (0, k.jsx)(h.Provider, { value: i, children: d })
						}
						return (
							(g.displayName = b + "Provider"),
							[
								g,
								function (c, g) {
									let h = g?.[a]?.[f] || e,
										i = l.useContext(h)
									if (i) return i
									if (void 0 !== d) return d
									throw Error(`\`${c}\` must be used within \`${b}\``)
								},
							]
						)
					},
					(function (...a) {
						let b = a[0]
						if (1 === a.length) return b
						let c = () => {
							let c = a.map((a) => ({ useScope: a(), scopeName: a.scopeName }))
							return function (a) {
								let d = c.reduce((b, { useScope: c, scopeName: d }) => {
									let e = c(a)[`__scope${d}`]
									return { ...b, ...e }
								}, {})
								return l.useMemo(() => ({ [`__scope${b.scopeName}`]: d }), [d])
							}
						}
						return (c.scopeName = b.scopeName), c
					})(d, ...b),
				]
			)
		}
		a.s(["createContext", () => o, "createContextScope", () => p], 44823)
		var q = globalThis?.document ? l.useLayoutEffect : () => {}
		a.s(["useLayoutEffect", () => q], 39743)
		var r = l[" useId ".trim().toString()] || (() => void 0),
			s = 0
		function t(a) {
			let [b, c] = l.useState(r())
			return (
				q(() => {
					a || c((a) => a ?? String(s++))
				}, [a]),
				a || (b ? `radix-${b}` : "")
			)
		}
		a.s(["useId", () => t], 3058),
			l[" useEffectEvent ".trim().toString()],
			l[" useInsertionEffect ".trim().toString()]
		var u = l[" useInsertionEffect ".trim().toString()] || q
		function v({ prop: a, defaultProp: b, onChange: c = () => {}, caller: d }) {
			let [e, f, g] = (function ({ defaultProp: a, onChange: b }) {
					let [c, d] = l.useState(a),
						e = l.useRef(c),
						f = l.useRef(b)
					return (
						u(() => {
							f.current = b
						}, [b]),
						l.useEffect(() => {
							e.current !== c && (f.current?.(c), (e.current = c))
						}, [c, e]),
						[c, d, f]
					)
				})({ defaultProp: b, onChange: c }),
				h = void 0 !== a,
				i = h ? a : e
			{
				let b = l.useRef(void 0 !== a)
				l.useEffect(() => {
					let a = b.current
					if (a !== h) {
						let b = h ? "controlled" : "uncontrolled"
						console.warn(
							`${d} is changing from ${a ? "controlled" : "uncontrolled"} to ${b}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
						)
					}
					b.current = h
				}, [h, d])
			}
			return [
				i,
				l.useCallback(
					(b) => {
						if (h) {
							let c = "function" == typeof b ? b(a) : b
							c !== a && g.current?.(c)
						} else f(b)
					},
					[h, a, f, g],
				),
			]
		}
		Symbol("RADIX:SYNC_STATE"), a.s(["useControllableState", () => v], 70962)
		var w = a.i(23360)
		function x(a) {
			var b
			let c,
				d =
					((b = a),
					((c = l.forwardRef((a, b) => {
						let { children: c, ...d } = a
						if (l.isValidElement(c)) {
							var e
							let a,
								f,
								g =
									((e = c),
									(f =
										(a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get) &&
										"isReactWarning" in a &&
										a.isReactWarning)
										? e.ref
										: (f =
													(a = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
													"isReactWarning" in a &&
													a.isReactWarning)
											? e.props.ref
											: e.props.ref || e.ref),
								h = (function (a, b) {
									let c = { ...b }
									for (let d in b) {
										let e = a[d],
											f = b[d]
										;/^on[A-Z]/.test(d)
											? e && f
												? (c[d] = (...a) => {
														let b = f(...a)
														return e(...a), b
													})
												: e && (c[d] = e)
											: "style" === d
												? (c[d] = { ...e, ...f })
												: "className" === d && (c[d] = [e, f].filter(Boolean).join(" "))
									}
									return { ...a, ...c }
								})(d, c.props)
							return (
								c.type !== l.Fragment && (h.ref = b ? (0, n.composeRefs)(b, g) : g),
								l.cloneElement(c, h)
							)
						}
						return l.Children.count(c) > 1 ? l.Children.only(null) : null
					})).displayName = `${b}.SlotClone`),
					c),
				e = l.forwardRef((a, b) => {
					let { children: c, ...e } = a,
						f = l.Children.toArray(c),
						g = f.find(z)
					if (g) {
						let a = g.props.children,
							c = f.map((b) =>
								b !== g
									? b
									: l.Children.count(a) > 1
										? l.Children.only(null)
										: l.isValidElement(a)
											? a.props.children
											: null,
							)
						return (0, k.jsx)(d, {
							...e,
							ref: b,
							children: l.isValidElement(a) ? l.cloneElement(a, void 0, c) : null,
						})
					}
					return (0, k.jsx)(d, { ...e, ref: b, children: c })
				})
			return (e.displayName = `${a}.Slot`), e
		}
		var y = Symbol("radix.slottable")
		function z(a) {
			return l.isValidElement(a) && "function" == typeof a.type && "__radixId" in a.type && a.type.__radixId === y
		}
		a.s(["createSlot", () => x], 79696)
		var A = [
			"a",
			"button",
			"div",
			"form",
			"h2",
			"h3",
			"img",
			"input",
			"label",
			"li",
			"nav",
			"ol",
			"p",
			"select",
			"span",
			"svg",
			"ul",
		].reduce((a, b) => {
			let c = x(`Primitive.${b}`),
				d = l.forwardRef((a, d) => {
					let { asChild: e, ...f } = a
					return (0, k.jsx)(e ? c : b, { ...f, ref: d })
				})
			return (d.displayName = `Primitive.${b}`), { ...a, [b]: d }
		}, {})
		function B(a, b) {
			a && w.flushSync(() => a.dispatchEvent(b))
		}
		function C(a) {
			let b = l.useRef(a)
			return (
				l.useEffect(() => {
					b.current = a
				}),
				l.useMemo(
					() =>
						(...a) =>
							b.current?.(...a),
					[],
				)
			)
		}
		a.s(["Primitive", () => A, "dispatchDiscreteCustomEvent", () => B], 11306),
			a.s(["useCallbackRef", () => C], 95840)
		var D = "dismissableLayer.update",
			E = l.createContext({
				layers: new Set(),
				layersWithOutsidePointerEventsDisabled: new Set(),
				branches: new Set(),
			}),
			F = l.forwardRef((a, b) => {
				let {
						disableOutsidePointerEvents: c = !1,
						onEscapeKeyDown: d,
						onPointerDownOutside: e,
						onFocusOutside: f,
						onInteractOutside: g,
						onDismiss: h,
						...j
					} = a,
					o = l.useContext(E),
					[p, q] = l.useState(null),
					r = p?.ownerDocument ?? globalThis?.document,
					[, s] = l.useState({}),
					t = (0, n.useComposedRefs)(b, (a) => q(a)),
					u = Array.from(o.layers),
					[v] = [...o.layersWithOutsidePointerEventsDisabled].slice(-1),
					w = u.indexOf(v),
					x = p ? u.indexOf(p) : -1,
					y = o.layersWithOutsidePointerEventsDisabled.size > 0,
					z = x >= w,
					B = (function (a, b = globalThis?.document) {
						let c = C(a),
							d = l.useRef(!1),
							e = l.useRef(() => {})
						return (
							l.useEffect(() => {
								let a = (a) => {
										if (a.target && !d.current) {
											let d = function () {
													H("dismissableLayer.pointerDownOutside", c, f, { discrete: !0 })
												},
												f = { originalEvent: a }
											"touch" === a.pointerType
												? (b.removeEventListener("click", e.current),
													(e.current = d),
													b.addEventListener("click", e.current, { once: !0 }))
												: d()
										} else b.removeEventListener("click", e.current)
										d.current = !1
									},
									f = window.setTimeout(() => {
										b.addEventListener("pointerdown", a)
									}, 0)
								return () => {
									window.clearTimeout(f),
										b.removeEventListener("pointerdown", a),
										b.removeEventListener("click", e.current)
								}
							}, [b, c]),
							{ onPointerDownCapture: () => (d.current = !0) }
						)
					})((a) => {
						let b = a.target,
							c = [...o.branches].some((a) => a.contains(b))
						z && !c && (e?.(a), g?.(a), a.defaultPrevented || h?.())
					}, r),
					F = (function (a, b = globalThis?.document) {
						let c = C(a),
							d = l.useRef(!1)
						return (
							l.useEffect(() => {
								let a = (a) => {
									a.target &&
										!d.current &&
										H("dismissableLayer.focusOutside", c, { originalEvent: a }, { discrete: !1 })
								}
								return b.addEventListener("focusin", a), () => b.removeEventListener("focusin", a)
							}, [b, c]),
							{ onFocusCapture: () => (d.current = !0), onBlurCapture: () => (d.current = !1) }
						)
					})((a) => {
						let b = a.target
						![...o.branches].some((a) => a.contains(b)) && (f?.(a), g?.(a), a.defaultPrevented || h?.())
					}, r)
				return (
					!(function (a, b = globalThis?.document) {
						let c = C(a)
						l.useEffect(() => {
							let a = (a) => {
								"Escape" === a.key && c(a)
							}
							return (
								b.addEventListener("keydown", a, { capture: !0 }),
								() => b.removeEventListener("keydown", a, { capture: !0 })
							)
						}, [c, b])
					})((a) => {
						x === o.layers.size - 1 && (d?.(a), !a.defaultPrevented && h && (a.preventDefault(), h()))
					}, r),
					l.useEffect(() => {
						if (p)
							return (
								c &&
									(0 === o.layersWithOutsidePointerEventsDisabled.size &&
										((i = r.body.style.pointerEvents), (r.body.style.pointerEvents = "none")),
									o.layersWithOutsidePointerEventsDisabled.add(p)),
								o.layers.add(p),
								G(),
								() => {
									c &&
										1 === o.layersWithOutsidePointerEventsDisabled.size &&
										(r.body.style.pointerEvents = i)
								}
							)
					}, [p, r, c, o]),
					l.useEffect(
						() => () => {
							p && (o.layers.delete(p), o.layersWithOutsidePointerEventsDisabled.delete(p), G())
						},
						[p, o],
					),
					l.useEffect(() => {
						let a = () => s({})
						return document.addEventListener(D, a), () => document.removeEventListener(D, a)
					}, []),
					(0, k.jsx)(A.div, {
						...j,
						ref: t,
						style: { pointerEvents: y ? (z ? "auto" : "none") : void 0, ...a.style },
						onFocusCapture: (0, m.composeEventHandlers)(a.onFocusCapture, F.onFocusCapture),
						onBlurCapture: (0, m.composeEventHandlers)(a.onBlurCapture, F.onBlurCapture),
						onPointerDownCapture: (0, m.composeEventHandlers)(
							a.onPointerDownCapture,
							B.onPointerDownCapture,
						),
					})
				)
			})
		function G() {
			let a = new CustomEvent(D)
			document.dispatchEvent(a)
		}
		function H(a, b, c, { discrete: d }) {
			let e = c.originalEvent.target,
				f = new CustomEvent(a, { bubbles: !1, cancelable: !0, detail: c })
			b && e.addEventListener(a, b, { once: !0 }), d ? B(e, f) : e.dispatchEvent(f)
		}
		;(F.displayName = "DismissableLayer"),
			(l.forwardRef((a, b) => {
				let c = l.useContext(E),
					d = l.useRef(null),
					e = (0, n.useComposedRefs)(b, d)
				return (
					l.useEffect(() => {
						let a = d.current
						if (a)
							return (
								c.branches.add(a),
								() => {
									c.branches.delete(a)
								}
							)
					}, [c.branches]),
					(0, k.jsx)(A.div, { ...a, ref: e })
				)
			}).displayName = "DismissableLayerBranch"),
			a.s(["DismissableLayer", () => F], 88986)
		var I = "focusScope.autoFocusOnMount",
			J = "focusScope.autoFocusOnUnmount",
			K = { bubbles: !1, cancelable: !0 },
			L = l.forwardRef((a, b) => {
				let { loop: c = !1, trapped: d = !1, onMountAutoFocus: e, onUnmountAutoFocus: f, ...g } = a,
					[h, i] = l.useState(null),
					j = C(e),
					m = C(f),
					o = l.useRef(null),
					p = (0, n.useComposedRefs)(b, (a) => i(a)),
					q = l.useRef({
						paused: !1,
						pause() {
							this.paused = !0
						},
						resume() {
							this.paused = !1
						},
					}).current
				l.useEffect(() => {
					if (d) {
						let a = function (a) {
								if (q.paused || !h) return
								let b = a.target
								h.contains(b) ? (o.current = b) : O(o.current, { select: !0 })
							},
							b = function (a) {
								if (q.paused || !h) return
								let b = a.relatedTarget
								null !== b && (h.contains(b) || O(o.current, { select: !0 }))
							}
						document.addEventListener("focusin", a), document.addEventListener("focusout", b)
						let c = new MutationObserver(function (a) {
							if (document.activeElement === document.body)
								for (let b of a) b.removedNodes.length > 0 && O(h)
						})
						return (
							h && c.observe(h, { childList: !0, subtree: !0 }),
							() => {
								document.removeEventListener("focusin", a),
									document.removeEventListener("focusout", b),
									c.disconnect()
							}
						)
					}
				}, [d, h, q.paused]),
					l.useEffect(() => {
						if (h) {
							P.add(q)
							let a = document.activeElement
							if (!h.contains(a)) {
								let b = new CustomEvent(I, K)
								h.addEventListener(I, j),
									h.dispatchEvent(b),
									b.defaultPrevented ||
										((function (a, { select: b = !1 } = {}) {
											let c = document.activeElement
											for (let d of a)
												if ((O(d, { select: b }), document.activeElement !== c)) return
										})(
											M(h).filter((a) => "A" !== a.tagName),
											{ select: !0 },
										),
										document.activeElement === a && O(h))
							}
							return () => {
								h.removeEventListener(I, j),
									setTimeout(() => {
										let b = new CustomEvent(J, K)
										h.addEventListener(J, m),
											h.dispatchEvent(b),
											b.defaultPrevented || O(a ?? document.body, { select: !0 }),
											h.removeEventListener(J, m),
											P.remove(q)
									}, 0)
							}
						}
					}, [h, j, m, q])
				let r = l.useCallback(
					(a) => {
						if ((!c && !d) || q.paused) return
						let b = "Tab" === a.key && !a.altKey && !a.ctrlKey && !a.metaKey,
							e = document.activeElement
						if (b && e) {
							var f
							let b,
								d = a.currentTarget,
								[g, h] = [N((b = M((f = d))), f), N(b.reverse(), f)]
							g && h
								? a.shiftKey || e !== h
									? a.shiftKey && e === g && (a.preventDefault(), c && O(h, { select: !0 }))
									: (a.preventDefault(), c && O(g, { select: !0 }))
								: e === d && a.preventDefault()
						}
					},
					[c, d, q.paused],
				)
				return (0, k.jsx)(A.div, { tabIndex: -1, ...g, ref: p, onKeyDown: r })
			})
		function M(a) {
			let b = [],
				c = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
					acceptNode: (a) => {
						let b = "INPUT" === a.tagName && "hidden" === a.type
						return a.disabled || a.hidden || b
							? NodeFilter.FILTER_SKIP
							: a.tabIndex >= 0
								? NodeFilter.FILTER_ACCEPT
								: NodeFilter.FILTER_SKIP
					},
				})
			for (; c.nextNode(); ) b.push(c.currentNode)
			return b
		}
		function N(a, b) {
			for (let c of a)
				if (
					!(function (a, { upTo: b }) {
						if ("hidden" === getComputedStyle(a).visibility) return !0
						for (; a && (void 0 === b || a !== b); ) {
							if ("none" === getComputedStyle(a).display) return !0
							a = a.parentElement
						}
						return !1
					})(c, { upTo: b })
				)
					return c
		}
		function O(a, { select: b = !1 } = {}) {
			if (a && a.focus) {
				var c
				let d = document.activeElement
				a.focus({ preventScroll: !0 }),
					a !== d && (c = a) instanceof HTMLInputElement && "select" in c && b && a.select()
			}
		}
		L.displayName = "FocusScope"
		var P =
			((b = []),
			{
				add(a) {
					let c = b[0]
					a !== c && c?.pause(), (b = Q(b, a)).unshift(a)
				},
				remove(a) {
					;(b = Q(b, a)), b[0]?.resume()
				},
			})
		function Q(a, b) {
			let c = [...a],
				d = c.indexOf(b)
			return -1 !== d && c.splice(d, 1), c
		}
		var R = l.forwardRef((a, b) => {
			let { container: c, ...d } = a,
				[e, f] = l.useState(!1)
			q(() => f(!0), [])
			let g = c || (e && globalThis?.document?.body)
			return g ? w.default.createPortal((0, k.jsx)(A.div, { ...d, ref: b }), g) : null
		})
		R.displayName = "Portal"
		var S = (a) => {
			var b
			let c,
				d,
				{ present: e, children: f } = a,
				g = (function (a) {
					var b, c
					let [d, e] = l.useState(),
						f = l.useRef(null),
						g = l.useRef(a),
						h = l.useRef("none"),
						[i, j] =
							((b = a ? "mounted" : "unmounted"),
							(c = {
								mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
								unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
								unmounted: { MOUNT: "mounted" },
							}),
							l.useReducer((a, b) => c[a][b] ?? a, b))
					return (
						l.useEffect(() => {
							let a = T(f.current)
							h.current = "mounted" === i ? a : "none"
						}, [i]),
						q(() => {
							let b = f.current,
								c = g.current
							if (c !== a) {
								let d = h.current,
									e = T(b)
								a
									? j("MOUNT")
									: "none" === e || b?.display === "none"
										? j("UNMOUNT")
										: c && d !== e
											? j("ANIMATION_OUT")
											: j("UNMOUNT"),
									(g.current = a)
							}
						}, [a, j]),
						q(() => {
							if (d) {
								let a,
									b = d.ownerDocument.defaultView ?? window,
									c = (c) => {
										let e = T(f.current).includes(CSS.escape(c.animationName))
										if (c.target === d && e && (j("ANIMATION_END"), !g.current)) {
											let c = d.style.animationFillMode
											;(d.style.animationFillMode = "forwards"),
												(a = b.setTimeout(() => {
													"forwards" === d.style.animationFillMode &&
														(d.style.animationFillMode = c)
												}))
										}
									},
									e = (a) => {
										a.target === d && (h.current = T(f.current))
									}
								return (
									d.addEventListener("animationstart", e),
									d.addEventListener("animationcancel", c),
									d.addEventListener("animationend", c),
									() => {
										b.clearTimeout(a),
											d.removeEventListener("animationstart", e),
											d.removeEventListener("animationcancel", c),
											d.removeEventListener("animationend", c)
									}
								)
							}
							j("ANIMATION_END")
						}, [d, j]),
						{
							isPresent: ["mounted", "unmountSuspended"].includes(i),
							ref: l.useCallback((a) => {
								;(f.current = a ? getComputedStyle(a) : null), e(a)
							}, []),
						}
					)
				})(e),
				h = "function" == typeof f ? f({ present: g.isPresent }) : l.Children.only(f),
				i = (0, n.useComposedRefs)(
					g.ref,
					((b = h),
					(d =
						(c = Object.getOwnPropertyDescriptor(b.props, "ref")?.get) &&
						"isReactWarning" in c &&
						c.isReactWarning)
						? b.ref
						: (d =
									(c = Object.getOwnPropertyDescriptor(b, "ref")?.get) &&
									"isReactWarning" in c &&
									c.isReactWarning)
							? b.props.ref
							: b.props.ref || b.ref),
				)
			return "function" == typeof f || g.isPresent ? l.cloneElement(h, { ref: i }) : null
		}
		function T(a) {
			return a?.animationName || "none"
		}
		;(S.displayName = "Presence"), a.s(["Presence", () => S], 64699)
		var U = 0
		function V() {
			let a = document.createElement("span")
			return (
				a.setAttribute("data-radix-focus-guard", ""),
				(a.tabIndex = 0),
				(a.style.outline = "none"),
				(a.style.opacity = "0"),
				(a.style.position = "fixed"),
				(a.style.pointerEvents = "none"),
				a
			)
		}
		var W = function () {
			return (W =
				Object.assign ||
				function (a) {
					for (var b, c = 1, d = arguments.length; c < d; c++)
						for (var e in (b = arguments[c])) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
					return a
				}).apply(this, arguments)
		}
		function X(a, b) {
			var c = {}
			for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && 0 > b.indexOf(d) && (c[d] = a[d])
			if (null != a && "function" == typeof Object.getOwnPropertySymbols)
				for (var e = 0, d = Object.getOwnPropertySymbols(a); e < d.length; e++)
					0 > b.indexOf(d[e]) && Object.prototype.propertyIsEnumerable.call(a, d[e]) && (c[d[e]] = a[d[e]])
			return c
		}
		var Y = ("function" == typeof SuppressedError && SuppressedError, "right-scroll-bar-position"),
			Z = "width-before-scroll-bar"
		function $(a, b) {
			return "function" == typeof a ? a(b) : a && (a.current = b), a
		}
		var _ = l.useEffect,
			aa = new WeakMap(),
			ab =
				(void 0 === c && (c = {}),
				((void 0 === d &&
					(d = function (a) {
						return a
					}),
				(e = []),
				(f = !1),
				(g = {
					read: function () {
						if (f)
							throw Error(
								"Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
							)
						return e.length ? e[e.length - 1] : null
					},
					useMedium: function (a) {
						var b = d(a, f)
						return (
							e.push(b),
							function () {
								e = e.filter(function (a) {
									return a !== b
								})
							}
						)
					},
					assignSyncMedium: function (a) {
						for (f = !0; e.length; ) {
							var b = e
							;(e = []), b.forEach(a)
						}
						e = {
							push: function (b) {
								return a(b)
							},
							filter: function () {
								return e
							},
						}
					},
					assignMedium: function (a) {
						f = !0
						var b = []
						if (e.length) {
							var c = e
							;(e = []), c.forEach(a), (b = e)
						}
						var d = function () {
								var c = b
								;(b = []), c.forEach(a)
							},
							g = function () {
								return Promise.resolve().then(d)
							}
						g(),
							(e = {
								push: function (a) {
									b.push(a), g()
								},
								filter: function (a) {
									return (b = b.filter(a)), e
								},
							})
					},
				})).options = W({ async: !0, ssr: !1 }, c)),
				g),
			ac = function () {},
			ad = l.forwardRef(function (a, b) {
				var c,
					d,
					e,
					f,
					g = l.useRef(null),
					h = l.useState({ onScrollCapture: ac, onWheelCapture: ac, onTouchMoveCapture: ac }),
					i = h[0],
					j = h[1],
					k = a.forwardProps,
					m = a.children,
					n = a.className,
					o = a.removeScrollBar,
					p = a.enabled,
					q = a.shards,
					r = a.sideCar,
					s = a.noIsolation,
					t = a.inert,
					u = a.allowPinchZoom,
					v = a.as,
					w = a.gapMode,
					x = X(a, [
						"forwardProps",
						"children",
						"className",
						"removeScrollBar",
						"enabled",
						"shards",
						"sideCar",
						"noIsolation",
						"inert",
						"allowPinchZoom",
						"as",
						"gapMode",
					]),
					y =
						((c = [g, b]),
						(d = function (a) {
							return c.forEach(function (b) {
								return $(b, a)
							})
						}),
						((e = (0, l.useState)(function () {
							return {
								value: null,
								callback: d,
								facade: {
									get current() {
										return e.value
									},
									set current(value) {
										var a = e.value
										a !== value && ((e.value = value), e.callback(value, a))
									},
								},
							}
						})[0]).callback = d),
						(f = e.facade),
						_(
							function () {
								var a = aa.get(f)
								if (a) {
									var b = new Set(a),
										d = new Set(c),
										e = f.current
									b.forEach(function (a) {
										d.has(a) || $(a, null)
									}),
										d.forEach(function (a) {
											b.has(a) || $(a, e)
										})
								}
								aa.set(f, c)
							},
							[c],
						),
						f),
					z = W(W({}, x), i)
				return l.createElement(
					l.Fragment,
					null,
					p &&
						l.createElement(r, {
							sideCar: ab,
							removeScrollBar: o,
							shards: q,
							noIsolation: s,
							inert: t,
							setCallbacks: j,
							allowPinchZoom: !!u,
							lockRef: g,
							gapMode: w,
						}),
					k
						? l.cloneElement(l.Children.only(m), W(W({}, z), { ref: y }))
						: l.createElement(void 0 === v ? "div" : v, W({}, z, { className: n, ref: y }), m),
				)
			})
		;(ad.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
			(ad.classNames = { fullWidth: Z, zeroRight: Y })
		var ae = function (a) {
			var b = a.sideCar,
				c = X(a, ["sideCar"])
			if (!b) throw Error("Sidecar: please provide `sideCar` property to import the right car")
			var d = b.read()
			if (!d) throw Error("Sidecar medium not found")
			return l.createElement(d, W({}, c))
		}
		ae.isSideCarExport = !0
		var af = function () {
				var a = 0,
					b = null
				return {
					add: function (c) {
						if (
							0 == a &&
							(b = (function () {
								if (!document) return null
								var a = document.createElement("style")
								a.type = "text/css"
								var b = j || ("u" > typeof __webpack_nonce__ ? __webpack_nonce__ : void 0)
								return b && a.setAttribute("nonce", b), a
							})())
						) {
							var d, e
							;(d = b).styleSheet
								? (d.styleSheet.cssText = c)
								: d.appendChild(document.createTextNode(c)),
								(e = b),
								(document.head || document.getElementsByTagName("head")[0]).appendChild(e)
						}
						a++
					},
					remove: function () {
						--a || !b || (b.parentNode && b.parentNode.removeChild(b), (b = null))
					},
				}
			},
			ag = function () {
				var a = af()
				return function (b, c) {
					l.useEffect(
						function () {
							return (
								a.add(b),
								function () {
									a.remove()
								}
							)
						},
						[b && c],
					)
				}
			},
			ah = function () {
				var a = ag()
				return function (b) {
					return a(b.styles, b.dynamic), null
				}
			},
			ai = { left: 0, top: 0, right: 0, gap: 0 },
			aj = ah(),
			ak = "data-scroll-locked",
			al = function (a, b, c, d) {
				var e = a.left,
					f = a.top,
					g = a.right,
					h = a.gap
				return (
					void 0 === c && (c = "margin"),
					"\n  ."
						.concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
						.concat(d, ";\n   padding-right: ")
						.concat(h, "px ")
						.concat(d, ";\n  }\n  body[")
						.concat(ak, "] {\n    overflow: hidden ")
						.concat(d, ";\n    overscroll-behavior: contain;\n    ")
						.concat(
							[
								b && "position: relative ".concat(d, ";"),
								"margin" === c &&
									"\n    padding-left: "
										.concat(e, "px;\n    padding-top: ")
										.concat(f, "px;\n    padding-right: ")
										.concat(g, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ")
										.concat(h, "px ")
										.concat(d, ";\n    "),
								"padding" === c && "padding-right: ".concat(h, "px ").concat(d, ";"),
							]
								.filter(Boolean)
								.join(""),
							"\n  }\n  \n  .",
						)
						.concat(Y, " {\n    right: ")
						.concat(h, "px ")
						.concat(d, ";\n  }\n  \n  .")
						.concat(Z, " {\n    margin-right: ")
						.concat(h, "px ")
						.concat(d, ";\n  }\n  \n  .")
						.concat(Y, " .")
						.concat(Y, " {\n    right: 0 ")
						.concat(d, ";\n  }\n  \n  .")
						.concat(Z, " .")
						.concat(Z, " {\n    margin-right: 0 ")
						.concat(d, ";\n  }\n  \n  body[")
						.concat(ak, "] {\n    ")
						.concat("--removed-body-scroll-bar-size", ": ")
						.concat(h, "px;\n  }\n")
				)
			},
			am = function () {
				var a = parseInt(document.body.getAttribute(ak) || "0", 10)
				return isFinite(a) ? a : 0
			},
			an = function () {
				l.useEffect(function () {
					return (
						document.body.setAttribute(ak, (am() + 1).toString()),
						function () {
							var a = am() - 1
							a <= 0 ? document.body.removeAttribute(ak) : document.body.setAttribute(ak, a.toString())
						}
					)
				}, [])
			},
			ao = function (a) {
				var b = a.noRelative,
					c = a.noImportant,
					d = a.gapMode,
					e = void 0 === d ? "margin" : d
				an()
				var f = l.useMemo(
					function () {
						return void 0 === e, ai
					},
					[e],
				)
				return l.createElement(aj, { styles: al(f, !b, e, c ? "" : "!important") })
			},
			ap = function (a, b) {
				if (!(a instanceof Element)) return !1
				var c = window.getComputedStyle(a)
				return (
					"hidden" !== c[b] && (c.overflowY !== c.overflowX || "TEXTAREA" === a.tagName || "visible" !== c[b])
				)
			},
			aq = function (a, b) {
				var c = b.ownerDocument,
					d = b
				do {
					if (("u" > typeof ShadowRoot && d instanceof ShadowRoot && (d = d.host), ar(a, d))) {
						var e = as(a, d)
						if (e[1] > e[2]) return !0
					}
					d = d.parentNode
				} while (d && d !== c.body)
				return !1
			},
			ar = function (a, b) {
				return "v" === a ? ap(b, "overflowY") : ap(b, "overflowX")
			},
			as = function (a, b) {
				return "v" === a
					? [b.scrollTop, b.scrollHeight, b.clientHeight]
					: [b.scrollLeft, b.scrollWidth, b.clientWidth]
			},
			at = function (a, b, c, d, e) {
				var f,
					g = ((f = window.getComputedStyle(b).direction), "h" === a && "rtl" === f ? -1 : 1),
					h = g * d,
					i = c.target,
					j = b.contains(i),
					k = !1,
					l = h > 0,
					m = 0,
					n = 0
				do {
					var o = as(a, i),
						p = o[0],
						q = o[1] - o[2] - g * p
					;(p || q) && ar(a, i) && ((m += q), (n += p)), (i = i instanceof ShadowRoot ? i.host : i.parentNode)
				} while ((!j && i !== document.body) || (j && (b.contains(i) || b === i)))
				return (
					l && ((e && 1 > Math.abs(m)) || (!e && h > m))
						? (k = !0)
						: !l && ((e && 1 > Math.abs(n)) || (!e && -h > n)) && (k = !0),
					k
				)
			},
			au = function (a) {
				return "changedTouches" in a ? [a.changedTouches[0].clientX, a.changedTouches[0].clientY] : [0, 0]
			},
			av = function (a) {
				return [a.deltaX, a.deltaY]
			},
			aw = function (a) {
				return a && "current" in a ? a.current : a
			},
			ax = 0,
			ay = []
		let az =
			((h = function (a) {
				var b = l.useRef([]),
					c = l.useRef([0, 0]),
					d = l.useRef(),
					e = l.useState(ax++)[0],
					f = l.useState(ah)[0],
					g = l.useRef(a)
				l.useEffect(
					function () {
						g.current = a
					},
					[a],
				),
					l.useEffect(
						function () {
							if (a.inert) {
								document.body.classList.add("block-interactivity-".concat(e))
								var b = (function (a, b, c) {
									if (c || 2 == arguments.length)
										for (var d, e = 0, f = b.length; e < f; e++)
											(!d && e in b) ||
												(d || (d = Array.prototype.slice.call(b, 0, e)), (d[e] = b[e]))
									return a.concat(d || Array.prototype.slice.call(b))
								})([a.lockRef.current], (a.shards || []).map(aw), !0).filter(Boolean)
								return (
									b.forEach(function (a) {
										return a.classList.add("allow-interactivity-".concat(e))
									}),
									function () {
										document.body.classList.remove("block-interactivity-".concat(e)),
											b.forEach(function (a) {
												return a.classList.remove("allow-interactivity-".concat(e))
											})
									}
								)
							}
						},
						[a.inert, a.lockRef.current, a.shards],
					)
				var h = l.useCallback(function (a, b) {
						if (("touches" in a && 2 === a.touches.length) || ("wheel" === a.type && a.ctrlKey))
							return !g.current.allowPinchZoom
						var e,
							f = au(a),
							h = c.current,
							i = "deltaX" in a ? a.deltaX : h[0] - f[0],
							j = "deltaY" in a ? a.deltaY : h[1] - f[1],
							k = a.target,
							l = Math.abs(i) > Math.abs(j) ? "h" : "v"
						if ("touches" in a && "h" === l && "range" === k.type) return !1
						var m = aq(l, k)
						if (!m) return !0
						if ((m ? (e = l) : ((e = "v" === l ? "h" : "v"), (m = aq(l, k))), !m)) return !1
						if ((!d.current && "changedTouches" in a && (i || j) && (d.current = e), !e)) return !0
						var n = d.current || e
						return at(n, b, a, "h" === n ? i : j, !0)
					}, []),
					i = l.useCallback(function (a) {
						if (ay.length && ay[ay.length - 1] === f) {
							var c = "deltaY" in a ? av(a) : au(a),
								d = b.current.filter(function (b) {
									var d
									return (
										b.name === a.type &&
										(b.target === a.target || a.target === b.shadowParent) &&
										((d = b.delta), d[0] === c[0] && d[1] === c[1])
									)
								})[0]
							if (d && d.should) {
								a.cancelable && a.preventDefault()
								return
							}
							if (!d) {
								var e = (g.current.shards || [])
									.map(aw)
									.filter(Boolean)
									.filter(function (b) {
										return b.contains(a.target)
									})
								;(e.length > 0 ? h(a, e[0]) : !g.current.noIsolation) &&
									a.cancelable &&
									a.preventDefault()
							}
						}
					}, []),
					j = l.useCallback(function (a, c, d, e) {
						var f = {
							name: a,
							delta: c,
							target: d,
							should: e,
							shadowParent: (function (a) {
								for (var b = null; null !== a; )
									a instanceof ShadowRoot && ((b = a.host), (a = a.host)), (a = a.parentNode)
								return b
							})(d),
						}
						b.current.push(f),
							setTimeout(function () {
								b.current = b.current.filter(function (a) {
									return a !== f
								})
							}, 1)
					}, []),
					k = l.useCallback(function (a) {
						;(c.current = au(a)), (d.current = void 0)
					}, []),
					m = l.useCallback(function (b) {
						j(b.type, av(b), b.target, h(b, a.lockRef.current))
					}, []),
					n = l.useCallback(function (b) {
						j(b.type, au(b), b.target, h(b, a.lockRef.current))
					}, [])
				l.useEffect(function () {
					return (
						ay.push(f),
						a.setCallbacks({ onScrollCapture: m, onWheelCapture: m, onTouchMoveCapture: n }),
						document.addEventListener("wheel", i, !1),
						document.addEventListener("touchmove", i, !1),
						document.addEventListener("touchstart", k, !1),
						function () {
							;(ay = ay.filter(function (a) {
								return a !== f
							})),
								document.removeEventListener("wheel", i, !1),
								document.removeEventListener("touchmove", i, !1),
								document.removeEventListener("touchstart", k, !1)
						}
					)
				}, [])
				var o = a.removeScrollBar,
					p = a.inert
				return l.createElement(
					l.Fragment,
					null,
					p
						? l.createElement(f, {
								styles: "\n  .block-interactivity-"
									.concat(e, " {pointer-events: none;}\n  .allow-interactivity-")
									.concat(e, " {pointer-events: all;}\n"),
							})
						: null,
					o ? l.createElement(ao, { gapMode: a.gapMode }) : null,
				)
			}),
			ab.useMedium(h),
			ae)
		var aA = l.forwardRef(function (a, b) {
			return l.createElement(ad, W({}, a, { ref: b, sideCar: az }))
		})
		aA.classNames = ad.classNames
		var aB = new WeakMap(),
			aC = new WeakMap(),
			aD = {},
			aE = 0,
			aF = function (a) {
				return a && (a.host || aF(a.parentNode))
			},
			aG = function (a, b, c, d) {
				var e = (Array.isArray(a) ? a : [a])
					.map(function (a) {
						if (b.contains(a)) return a
						var c = aF(a)
						return c && b.contains(c)
							? c
							: (console.error("aria-hidden", a, "in not contained inside", b, ". Doing nothing"), null)
					})
					.filter(function (a) {
						return !!a
					})
				aD[c] || (aD[c] = new WeakMap())
				var f = aD[c],
					g = [],
					h = new Set(),
					i = new Set(e),
					j = function (a) {
						!a || h.has(a) || (h.add(a), j(a.parentNode))
					}
				e.forEach(j)
				var k = function (a) {
					!a ||
						i.has(a) ||
						Array.prototype.forEach.call(a.children, function (a) {
							if (h.has(a)) k(a)
							else
								try {
									var b = a.getAttribute(d),
										e = null !== b && "false" !== b,
										i = (aB.get(a) || 0) + 1,
										j = (f.get(a) || 0) + 1
									aB.set(a, i),
										f.set(a, j),
										g.push(a),
										1 === i && e && aC.set(a, !0),
										1 === j && a.setAttribute(c, "true"),
										e || a.setAttribute(d, "true")
								} catch (b) {
									console.error("aria-hidden: cannot operate on ", a, b)
								}
						})
				}
				return (
					k(b),
					h.clear(),
					aE++,
					function () {
						g.forEach(function (a) {
							var b = aB.get(a) - 1,
								e = f.get(a) - 1
							aB.set(a, b),
								f.set(a, e),
								b || (aC.has(a) || a.removeAttribute(d), aC.delete(a)),
								e || a.removeAttribute(c)
						}),
							--aE || ((aB = new WeakMap()), (aB = new WeakMap()), (aC = new WeakMap()), (aD = {}))
					}
				)
			},
			aH = function (a, b, c) {
				void 0 === c && (c = "data-aria-hidden")
				var d = Array.from(Array.isArray(a) ? a : [a]),
					e = b || ("u" < typeof document ? null : (Array.isArray(a) ? a[0] : a).ownerDocument.body)
				return e
					? (d.push.apply(d, Array.from(e.querySelectorAll("[aria-live]"))), aG(d, e, c, "aria-hidden"))
					: function () {
							return null
						}
			},
			aI = "Dialog",
			[aJ, aK] = p(aI),
			[aL, aM] = aJ(aI),
			aN = (a) => {
				let { __scopeDialog: b, children: c, open: d, defaultOpen: e, onOpenChange: f, modal: g = !0 } = a,
					h = l.useRef(null),
					i = l.useRef(null),
					[j, m] = v({ prop: d, defaultProp: e ?? !1, onChange: f, caller: aI })
				return (0, k.jsx)(aL, {
					scope: b,
					triggerRef: h,
					contentRef: i,
					contentId: t(),
					titleId: t(),
					descriptionId: t(),
					open: j,
					onOpenChange: m,
					onOpenToggle: l.useCallback(() => m((a) => !a), [m]),
					modal: g,
					children: c,
				})
			}
		aN.displayName = aI
		var aO = "DialogTrigger",
			aP = l.forwardRef((a, b) => {
				let { __scopeDialog: c, ...d } = a,
					e = aM(aO, c),
					f = (0, n.useComposedRefs)(b, e.triggerRef)
				return (0, k.jsx)(A.button, {
					type: "button",
					"aria-haspopup": "dialog",
					"aria-expanded": e.open,
					"aria-controls": e.contentId,
					"data-state": a7(e.open),
					...d,
					ref: f,
					onClick: (0, m.composeEventHandlers)(a.onClick, e.onOpenToggle),
				})
			})
		aP.displayName = aO
		var aQ = "DialogPortal",
			[aR, aS] = aJ(aQ, { forceMount: void 0 }),
			aT = (a) => {
				let { __scopeDialog: b, forceMount: c, children: d, container: e } = a,
					f = aM(aQ, b)
				return (0, k.jsx)(aR, {
					scope: b,
					forceMount: c,
					children: l.Children.map(d, (a) =>
						(0, k.jsx)(S, {
							present: c || f.open,
							children: (0, k.jsx)(R, { asChild: !0, container: e, children: a }),
						}),
					),
				})
			}
		aT.displayName = aQ
		var aU = "DialogOverlay",
			aV = l.forwardRef((a, b) => {
				let c = aS(aU, a.__scopeDialog),
					{ forceMount: d = c.forceMount, ...e } = a,
					f = aM(aU, a.__scopeDialog)
				return f.modal
					? (0, k.jsx)(S, { present: d || f.open, children: (0, k.jsx)(aX, { ...e, ref: b }) })
					: null
			})
		aV.displayName = aU
		var aW = x("DialogOverlay.RemoveScroll"),
			aX = l.forwardRef((a, b) => {
				let { __scopeDialog: c, ...d } = a,
					e = aM(aU, c)
				return (0, k.jsx)(aA, {
					as: aW,
					allowPinchZoom: !0,
					shards: [e.contentRef],
					children: (0, k.jsx)(A.div, {
						"data-state": a7(e.open),
						...d,
						ref: b,
						style: { pointerEvents: "auto", ...d.style },
					}),
				})
			}),
			aY = "DialogContent",
			aZ = l.forwardRef((a, b) => {
				let c = aS(aY, a.__scopeDialog),
					{ forceMount: d = c.forceMount, ...e } = a,
					f = aM(aY, a.__scopeDialog)
				return (0, k.jsx)(S, {
					present: d || f.open,
					children: f.modal ? (0, k.jsx)(a$, { ...e, ref: b }) : (0, k.jsx)(a_, { ...e, ref: b }),
				})
			})
		aZ.displayName = aY
		var a$ = l.forwardRef((a, b) => {
				let c = aM(aY, a.__scopeDialog),
					d = l.useRef(null),
					e = (0, n.useComposedRefs)(b, c.contentRef, d)
				return (
					l.useEffect(() => {
						let a = d.current
						if (a) return aH(a)
					}, []),
					(0, k.jsx)(a0, {
						...a,
						ref: e,
						trapFocus: c.open,
						disableOutsidePointerEvents: !0,
						onCloseAutoFocus: (0, m.composeEventHandlers)(a.onCloseAutoFocus, (a) => {
							a.preventDefault(), c.triggerRef.current?.focus()
						}),
						onPointerDownOutside: (0, m.composeEventHandlers)(a.onPointerDownOutside, (a) => {
							let b = a.detail.originalEvent,
								c = 0 === b.button && !0 === b.ctrlKey
							;(2 === b.button || c) && a.preventDefault()
						}),
						onFocusOutside: (0, m.composeEventHandlers)(a.onFocusOutside, (a) => a.preventDefault()),
					})
				)
			}),
			a_ = l.forwardRef((a, b) => {
				let c = aM(aY, a.__scopeDialog),
					d = l.useRef(!1),
					e = l.useRef(!1)
				return (0, k.jsx)(a0, {
					...a,
					ref: b,
					trapFocus: !1,
					disableOutsidePointerEvents: !1,
					onCloseAutoFocus: (b) => {
						a.onCloseAutoFocus?.(b),
							b.defaultPrevented || (d.current || c.triggerRef.current?.focus(), b.preventDefault()),
							(d.current = !1),
							(e.current = !1)
					},
					onInteractOutside: (b) => {
						a.onInteractOutside?.(b),
							b.defaultPrevented ||
								((d.current = !0), "pointerdown" === b.detail.originalEvent.type && (e.current = !0))
						let f = b.target
						c.triggerRef.current?.contains(f) && b.preventDefault(),
							"focusin" === b.detail.originalEvent.type && e.current && b.preventDefault()
					},
				})
			}),
			a0 = l.forwardRef((a, b) => {
				let { __scopeDialog: c, trapFocus: d, onOpenAutoFocus: e, onCloseAutoFocus: f, ...g } = a,
					h = aM(aY, c),
					i = l.useRef(null),
					j = (0, n.useComposedRefs)(b, i)
				return (
					l.useEffect(() => {
						let a = document.querySelectorAll("[data-radix-focus-guard]")
						return (
							document.body.insertAdjacentElement("afterbegin", a[0] ?? V()),
							document.body.insertAdjacentElement("beforeend", a[1] ?? V()),
							U++,
							() => {
								1 === U &&
									document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()),
									U--
							}
						)
					}, []),
					(0, k.jsxs)(k.Fragment, {
						children: [
							(0, k.jsx)(L, {
								asChild: !0,
								loop: !0,
								trapped: d,
								onMountAutoFocus: e,
								onUnmountAutoFocus: f,
								children: (0, k.jsx)(F, {
									role: "dialog",
									id: h.contentId,
									"aria-describedby": h.descriptionId,
									"aria-labelledby": h.titleId,
									"data-state": a7(h.open),
									...g,
									ref: j,
									onDismiss: () => h.onOpenChange(!1),
								}),
							}),
							(0, k.jsxs)(k.Fragment, {
								children: [
									(0, k.jsx)(bb, { titleId: h.titleId }),
									(0, k.jsx)(bc, { contentRef: i, descriptionId: h.descriptionId }),
								],
							}),
						],
					})
				)
			}),
			a1 = "DialogTitle",
			a2 = l.forwardRef((a, b) => {
				let { __scopeDialog: c, ...d } = a,
					e = aM(a1, c)
				return (0, k.jsx)(A.h2, { id: e.titleId, ...d, ref: b })
			})
		a2.displayName = a1
		var a3 = "DialogDescription",
			a4 = l.forwardRef((a, b) => {
				let { __scopeDialog: c, ...d } = a,
					e = aM(a3, c)
				return (0, k.jsx)(A.p, { id: e.descriptionId, ...d, ref: b })
			})
		a4.displayName = a3
		var a5 = "DialogClose",
			a6 = l.forwardRef((a, b) => {
				let { __scopeDialog: c, ...d } = a,
					e = aM(a5, c)
				return (0, k.jsx)(A.button, {
					type: "button",
					...d,
					ref: b,
					onClick: (0, m.composeEventHandlers)(a.onClick, () => e.onOpenChange(!1)),
				})
			})
		function a7(a) {
			return a ? "open" : "closed"
		}
		a6.displayName = a5
		var a8 = "DialogTitleWarning",
			[a9, ba] = o(a8, { contentName: aY, titleName: a1, docsSlug: "dialog" }),
			bb = ({ titleId: a }) => {
				let b = ba(a8),
					c = `\`${b.contentName}\` requires a \`${b.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${b.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${b.docsSlug}`
				return (
					l.useEffect(() => {
						a && (document.getElementById(a) || console.error(c))
					}, [c, a]),
					null
				)
			},
			bc = ({ contentRef: a, descriptionId: b }) => {
				let c = ba("DialogDescriptionWarning"),
					d = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${c.contentName}}.`
				return (
					l.useEffect(() => {
						let c = a.current?.getAttribute("aria-describedby")
						b && c && (document.getElementById(b) || console.warn(d))
					}, [d, a, b]),
					null
				)
			},
			bd = a.i(29159),
			be = a.i(42685)
		let bf = l.forwardRef(({ className: a, ...b }, c) =>
			(0, k.jsx)(aV, {
				ref: c,
				className: (0, be.cn)(
					"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
					a,
				),
				...b,
			}),
		)
		bf.displayName = aV.displayName
		let bg = l.forwardRef(({ className: a, children: b, ...c }, d) =>
			(0, k.jsxs)(aT, {
				children: [
					(0, k.jsx)(bf, {}),
					(0, k.jsxs)(aZ, {
						ref: d,
						className: (0, be.cn)(
							"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
							a,
						),
						...c,
						children: [
							b,
							(0, k.jsxs)(a6, {
								className:
									"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
								children: [
									(0, k.jsx)(bd.X, { className: "h-4 w-4" }),
									(0, k.jsx)("span", { className: "sr-only", children: "Close" }),
								],
							}),
						],
					}),
				],
			}),
		)
		bg.displayName = aZ.displayName
		let bh = ({ className: a, ...b }) =>
			(0, k.jsx)("div", { className: (0, be.cn)("flex flex-col space-y-1.5 text-center sm:text-left", a), ...b })
		bh.displayName = "DialogHeader"
		let bi = ({ className: a, ...b }) =>
			(0, k.jsx)("div", {
				className: (0, be.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", a),
				...b,
			})
		bi.displayName = "DialogFooter"
		let bj = l.forwardRef(({ className: a, ...b }, c) =>
			(0, k.jsx)(a2, {
				ref: c,
				className: (0, be.cn)("text-lg font-semibold leading-none tracking-tight", a),
				...b,
			}),
		)
		bj.displayName = a2.displayName
		let bk = l.forwardRef(({ className: a, ...b }, c) =>
			(0, k.jsx)(a4, { ref: c, className: (0, be.cn)("text-sm text-muted-foreground", a), ...b }),
		)
		;(bk.displayName = a4.displayName),
			a.s(
				[
					"Dialog",
					() => aN,
					"DialogClose",
					() => a6,
					"DialogContent",
					() => bg,
					"DialogDescription",
					() => bk,
					"DialogFooter",
					() => bi,
					"DialogHeader",
					() => bh,
					"DialogOverlay",
					() => bf,
					"DialogPortal",
					() => aT,
					"DialogTitle",
					() => bj,
					"DialogTrigger",
					() => aP,
				],
				49939,
			)
	},
]

//# sourceMappingURL=_235bf666._.js.map
