;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	26613,
	(e) => {
		"use strict"
		var t = e.i(10008)
		function r(e, t) {
			if ("function" == typeof e) return e(t)
			null != e && (e.current = t)
		}
		function n(...e) {
			return (t) => {
				let n = !1,
					o = e.map((e) => {
						let o = r(e, t)
						return n || "function" != typeof o || (n = !0), o
					})
				if (n)
					return () => {
						for (let t = 0; t < o.length; t++) {
							let n = o[t]
							"function" == typeof n ? n() : r(e[t], null)
						}
					}
			}
		}
		function o(...e) {
			return t.useCallback(n(...e), e)
		}
		e.s(["composeRefs", () => n, "useComposedRefs", () => o])
	},
	45326,
	7284,
	(e) => {
		"use strict"
		function t() {
			for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
				(e = arguments[r]) &&
					(t = (function e(t) {
						var r,
							n,
							o = ""
						if ("string" == typeof t || "number" == typeof t) o += t
						else if ("object" == typeof t)
							if (Array.isArray(t)) {
								var a = t.length
								for (r = 0; r < a; r++) t[r] && (n = e(t[r])) && (o && (o += " "), (o += n))
							} else for (n in t) t[n] && (o && (o += " "), (o += n))
						return o
					})(e)) &&
					(n && (n += " "), (n += t))
			return n
		}
		e.s(["clsx", () => t, "default", 0, t], 7284)
		let r = (e = new Map(), t = null, r) => ({ nextPart: e, validators: t, classGroupId: r }),
			n = [],
			o = (e, t, r) => {
				if (0 == e.length - t) return r.classGroupId
				let n = e[t],
					a = r.nextPart.get(n)
				if (a) {
					let r = o(e, t + 1, a)
					if (r) return r
				}
				let l = r.validators
				if (null === l) return
				let i = 0 === t ? e.join("-") : e.slice(t).join("-"),
					s = l.length
				for (let e = 0; e < s; e++) {
					let t = l[e]
					if (t.validator(i)) return t.classGroupId
				}
			},
			a = (e, t) => {
				let n = r()
				for (let r in e) l(e[r], n, r, t)
				return n
			},
			l = (e, t, r, n) => {
				let o = e.length
				for (let a = 0; a < o; a++) i(e[a], t, r, n)
			},
			i = (e, t, r, n) => {
				"string" == typeof e ? s(e, t, r) : "function" == typeof e ? c(e, t, r, n) : d(e, t, r, n)
			},
			s = (e, t, r) => {
				;("" === e ? t : u(t, e)).classGroupId = r
			},
			c = (e, t, r, n) => {
				f(e)
					? l(e(n), t, r, n)
					: (null === t.validators && (t.validators = []),
						t.validators.push({ classGroupId: r, validator: e }))
			},
			d = (e, t, r, n) => {
				let o = Object.entries(e),
					a = o.length
				for (let e = 0; e < a; e++) {
					let [a, i] = o[e]
					l(i, u(t, a), r, n)
				}
			},
			u = (e, t) => {
				let n = e,
					o = t.split("-"),
					a = o.length
				for (let e = 0; e < a; e++) {
					let t = o[e],
						a = n.nextPart.get(t)
					a || ((a = r()), n.nextPart.set(t, a)), (n = a)
				}
				return n
			},
			f = (e) => "isThemeGetter" in e && !0 === e.isThemeGetter,
			m = [],
			p = (e, t, r, n, o) => ({
				modifiers: e,
				hasImportantModifier: t,
				baseClassName: r,
				maybePostfixModifierPosition: n,
				isExternal: o,
			}),
			g = /\s+/,
			b = (e) => {
				let t
				if ("string" == typeof e) return e
				let r = ""
				for (let n = 0; n < e.length; n++) e[n] && (t = b(e[n])) && (r && (r += " "), (r += t))
				return r
			},
			h = [],
			v = (e) => {
				let t = (t) => t[e] || h
				return (t.isThemeGetter = !0), t
			},
			y = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
			w = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
			x = /^\d+\/\d+$/,
			k = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
			E =
				/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
			C = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
			N = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
			R = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
			S = (e) => x.test(e),
			j = (e) => !!e && !Number.isNaN(Number(e)),
			D = (e) => !!e && Number.isInteger(Number(e)),
			O = (e) => e.endsWith("%") && j(e.slice(0, -1)),
			P = (e) => k.test(e),
			T = () => !0,
			z = (e) => E.test(e) && !C.test(e),
			M = () => !1,
			A = (e) => N.test(e),
			I = (e) => R.test(e),
			L = (e) => !W(e) && !G(e),
			_ = (e) => J(e, er, M),
			W = (e) => y.test(e),
			F = (e) => J(e, en, z),
			$ = (e) => J(e, eo, j),
			B = (e) => J(e, ee, M),
			U = (e) => J(e, et, I),
			H = (e) => J(e, el, A),
			G = (e) => w.test(e),
			K = (e) => Q(e, en),
			X = (e) => Q(e, ea),
			Y = (e) => Q(e, ee),
			q = (e) => Q(e, er),
			V = (e) => Q(e, et),
			Z = (e) => Q(e, el, !0),
			J = (e, t, r) => {
				let n = y.exec(e)
				return !!n && (n[1] ? t(n[1]) : r(n[2]))
			},
			Q = (e, t, r = !1) => {
				let n = w.exec(e)
				return !!n && (n[1] ? t(n[1]) : r)
			},
			ee = (e) => "position" === e || "percentage" === e,
			et = (e) => "image" === e || "url" === e,
			er = (e) => "length" === e || "size" === e || "bg-size" === e,
			en = (e) => "length" === e,
			eo = (e) => "number" === e,
			ea = (e) => "family-name" === e,
			el = (e) => "shadow" === e,
			ei = ((e, ...t) => {
				let r,
					l,
					i,
					s,
					c = (e) => {
						let t = l(e)
						if (t) return t
						let n = ((e, t) => {
							let {
									parseClassName: r,
									getClassGroupId: n,
									getConflictingClassGroupIds: o,
									sortModifiers: a,
								} = t,
								l = [],
								i = e.trim().split(g),
								s = ""
							for (let e = i.length - 1; e >= 0; e -= 1) {
								let t = i[e],
									{
										isExternal: c,
										modifiers: d,
										hasImportantModifier: u,
										baseClassName: f,
										maybePostfixModifierPosition: m,
									} = r(t)
								if (c) {
									s = t + (s.length > 0 ? " " + s : s)
									continue
								}
								let p = !!m,
									g = n(p ? f.substring(0, m) : f)
								if (!g) {
									if (!p || !(g = n(f))) {
										s = t + (s.length > 0 ? " " + s : s)
										continue
									}
									p = !1
								}
								let b = 0 === d.length ? "" : 1 === d.length ? d[0] : a(d).join(":"),
									h = u ? b + "!" : b,
									v = h + g
								if (l.indexOf(v) > -1) continue
								l.push(v)
								let y = o(g, p)
								for (let e = 0; e < y.length; ++e) {
									let t = y[e]
									l.push(h + t)
								}
								s = t + (s.length > 0 ? " " + s : s)
							}
							return s
						})(e, r)
						return i(e, n), n
					}
				return (
					(s = (d) => {
						var u
						let f
						return (
							(l = (r = {
								cache: ((e) => {
									if (e < 1) return { get: () => void 0, set: () => {} }
									let t = 0,
										r = Object.create(null),
										n = Object.create(null),
										o = (o, a) => {
											;(r[o] = a), ++t > e && ((t = 0), (n = r), (r = Object.create(null)))
										}
									return {
										get(e) {
											let t = r[e]
											return void 0 !== t ? t : void 0 !== (t = n[e]) ? (o(e, t), t) : void 0
										},
										set(e, t) {
											e in r ? (r[e] = t) : o(e, t)
										},
									}
								})((u = t.reduce((e, t) => t(e), e())).cacheSize),
								parseClassName: ((e) => {
									let { prefix: t, experimentalParseClassName: r } = e,
										n = (e) => {
											let t,
												r = [],
												n = 0,
												o = 0,
												a = 0,
												l = e.length
											for (let i = 0; i < l; i++) {
												let l = e[i]
												if (0 === n && 0 === o) {
													if (":" === l) {
														r.push(e.slice(a, i)), (a = i + 1)
														continue
													}
													if ("/" === l) {
														t = i
														continue
													}
												}
												"[" === l ? n++ : "]" === l ? n-- : "(" === l ? o++ : ")" === l && o--
											}
											let i = 0 === r.length ? e : e.slice(a),
												s = i,
												c = !1
											return (
												i.endsWith("!")
													? ((s = i.slice(0, -1)), (c = !0))
													: i.startsWith("!") && ((s = i.slice(1)), (c = !0)),
												p(r, c, s, t && t > a ? t - a : void 0)
											)
										}
									if (t) {
										let e = t + ":",
											r = n
										n = (t) => (t.startsWith(e) ? r(t.slice(e.length)) : p(m, !1, t, void 0, !0))
									}
									if (r) {
										let e = n
										n = (t) => r({ className: t, parseClassName: e })
									}
									return n
								})(u),
								sortModifiers:
									((f = new Map()),
									u.orderSensitiveModifiers.forEach((e, t) => {
										f.set(e, 1e6 + t)
									}),
									(e) => {
										let t = [],
											r = []
										for (let n = 0; n < e.length; n++) {
											let o = e[n],
												a = "[" === o[0],
												l = f.has(o)
											a || l
												? (r.length > 0 && (r.sort(), t.push(...r), (r = [])), t.push(o))
												: r.push(o)
										}
										return r.length > 0 && (r.sort(), t.push(...r)), t
									}),
								...((e) => {
									let t = ((e) => {
											let { theme: t, classGroups: r } = e
											return a(r, t)
										})(e),
										{ conflictingClassGroups: r, conflictingClassGroupModifiers: l } = e
									return {
										getClassGroupId: (e) => {
											if (e.startsWith("[") && e.endsWith("]")) {
												var r
												let t, n, o
												return -1 === (r = e).slice(1, -1).indexOf(":")
													? void 0
													: ((n = (t = r.slice(1, -1)).indexOf(":")),
														(o = t.slice(0, n)) ? "arbitrary.." + o : void 0)
											}
											let n = e.split("-"),
												a = +("" === n[0] && n.length > 1)
											return o(n, a, t)
										},
										getConflictingClassGroupIds: (e, t) => {
											if (t) {
												let t = l[e],
													o = r[e]
												if (t) {
													if (o) {
														let e = Array(o.length + t.length)
														for (let t = 0; t < o.length; t++) e[t] = o[t]
														for (let r = 0; r < t.length; r++) e[o.length + r] = t[r]
														return e
													}
													return t
												}
												return o || n
											}
											return r[e] || n
										},
									}
								})(u),
							}).cache.get),
							(i = r.cache.set),
							(s = c),
							c(d)
						)
					}),
					(...e) =>
						s(
							((...e) => {
								let t,
									r,
									n = 0,
									o = ""
								for (; n < e.length; ) (t = e[n++]) && (r = b(t)) && (o && (o += " "), (o += r))
								return o
							})(...e),
						)
				)
			})(() => {
				let e = v("color"),
					t = v("font"),
					r = v("text"),
					n = v("font-weight"),
					o = v("tracking"),
					a = v("leading"),
					l = v("breakpoint"),
					i = v("container"),
					s = v("spacing"),
					c = v("radius"),
					d = v("shadow"),
					u = v("inset-shadow"),
					f = v("text-shadow"),
					m = v("drop-shadow"),
					p = v("blur"),
					g = v("perspective"),
					b = v("aspect"),
					h = v("ease"),
					y = v("animate"),
					w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
					x = () => [
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
					k = () => [...x(), G, W],
					E = () => ["auto", "hidden", "clip", "visible", "scroll"],
					C = () => ["auto", "contain", "none"],
					N = () => [G, W, s],
					R = () => [S, "full", "auto", ...N()],
					z = () => [D, "none", "subgrid", G, W],
					M = () => ["auto", { span: ["full", D, G, W] }, D, G, W],
					A = () => [D, "auto", G, W],
					I = () => ["auto", "min", "max", "fr", G, W],
					J = () => [
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
					Q = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
					ee = () => ["auto", ...N()],
					et = () => [
						S,
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
						...N(),
					],
					er = () => [e, G, W],
					en = () => [...x(), Y, B, { position: [G, W] }],
					eo = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
					ea = () => ["auto", "cover", "contain", q, _, { size: [G, W] }],
					el = () => [O, K, F],
					ei = () => ["", "none", "full", c, G, W],
					es = () => ["", j, K, F],
					ec = () => ["solid", "dashed", "dotted", "double"],
					ed = () => [
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
					eu = () => [j, O, Y, B],
					ef = () => ["", "none", p, G, W],
					em = () => ["none", j, G, W],
					ep = () => ["none", j, G, W],
					eg = () => [j, G, W],
					eb = () => [S, "full", ...N()]
				return {
					cacheSize: 500,
					theme: {
						animate: ["spin", "ping", "pulse", "bounce"],
						aspect: ["video"],
						blur: [P],
						breakpoint: [P],
						color: [T],
						container: [P],
						"drop-shadow": [P],
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
						"inset-shadow": [P],
						leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
						perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
						radius: [P],
						shadow: [P],
						spacing: ["px", j],
						text: [P],
						"text-shadow": [P],
						tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
					},
					classGroups: {
						aspect: [{ aspect: ["auto", "square", S, W, G, b] }],
						container: ["container"],
						columns: [{ columns: [j, W, G, i] }],
						"break-after": [{ "break-after": w() }],
						"break-before": [{ "break-before": w() }],
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
						"object-position": [{ object: k() }],
						overflow: [{ overflow: E() }],
						"overflow-x": [{ "overflow-x": E() }],
						"overflow-y": [{ "overflow-y": E() }],
						overscroll: [{ overscroll: C() }],
						"overscroll-x": [{ "overscroll-x": C() }],
						"overscroll-y": [{ "overscroll-y": C() }],
						position: ["static", "fixed", "absolute", "relative", "sticky"],
						inset: [{ inset: R() }],
						"inset-x": [{ "inset-x": R() }],
						"inset-y": [{ "inset-y": R() }],
						start: [{ start: R() }],
						end: [{ end: R() }],
						top: [{ top: R() }],
						right: [{ right: R() }],
						bottom: [{ bottom: R() }],
						left: [{ left: R() }],
						visibility: ["visible", "invisible", "collapse"],
						z: [{ z: [D, "auto", G, W] }],
						basis: [{ basis: [S, "full", "auto", i, ...N()] }],
						"flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
						"flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
						flex: [{ flex: [j, S, "auto", "initial", "none", W] }],
						grow: [{ grow: ["", j, G, W] }],
						shrink: [{ shrink: ["", j, G, W] }],
						order: [{ order: [D, "first", "last", "none", G, W] }],
						"grid-cols": [{ "grid-cols": z() }],
						"col-start-end": [{ col: M() }],
						"col-start": [{ "col-start": A() }],
						"col-end": [{ "col-end": A() }],
						"grid-rows": [{ "grid-rows": z() }],
						"row-start-end": [{ row: M() }],
						"row-start": [{ "row-start": A() }],
						"row-end": [{ "row-end": A() }],
						"grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
						"auto-cols": [{ "auto-cols": I() }],
						"auto-rows": [{ "auto-rows": I() }],
						gap: [{ gap: N() }],
						"gap-x": [{ "gap-x": N() }],
						"gap-y": [{ "gap-y": N() }],
						"justify-content": [{ justify: [...J(), "normal"] }],
						"justify-items": [{ "justify-items": [...Q(), "normal"] }],
						"justify-self": [{ "justify-self": ["auto", ...Q()] }],
						"align-content": [{ content: ["normal", ...J()] }],
						"align-items": [{ items: [...Q(), { baseline: ["", "last"] }] }],
						"align-self": [{ self: ["auto", ...Q(), { baseline: ["", "last"] }] }],
						"place-content": [{ "place-content": J() }],
						"place-items": [{ "place-items": [...Q(), "baseline"] }],
						"place-self": [{ "place-self": ["auto", ...Q()] }],
						p: [{ p: N() }],
						px: [{ px: N() }],
						py: [{ py: N() }],
						ps: [{ ps: N() }],
						pe: [{ pe: N() }],
						pt: [{ pt: N() }],
						pr: [{ pr: N() }],
						pb: [{ pb: N() }],
						pl: [{ pl: N() }],
						m: [{ m: ee() }],
						mx: [{ mx: ee() }],
						my: [{ my: ee() }],
						ms: [{ ms: ee() }],
						me: [{ me: ee() }],
						mt: [{ mt: ee() }],
						mr: [{ mr: ee() }],
						mb: [{ mb: ee() }],
						ml: [{ ml: ee() }],
						"space-x": [{ "space-x": N() }],
						"space-x-reverse": ["space-x-reverse"],
						"space-y": [{ "space-y": N() }],
						"space-y-reverse": ["space-y-reverse"],
						size: [{ size: et() }],
						w: [{ w: [i, "screen", ...et()] }],
						"min-w": [{ "min-w": [i, "screen", "none", ...et()] }],
						"max-w": [{ "max-w": [i, "screen", "none", "prose", { screen: [l] }, ...et()] }],
						h: [{ h: ["screen", "lh", ...et()] }],
						"min-h": [{ "min-h": ["screen", "lh", "none", ...et()] }],
						"max-h": [{ "max-h": ["screen", "lh", ...et()] }],
						"font-size": [{ text: ["base", r, K, F] }],
						"font-smoothing": ["antialiased", "subpixel-antialiased"],
						"font-style": ["italic", "not-italic"],
						"font-weight": [{ font: [n, G, $] }],
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
									O,
									W,
								],
							},
						],
						"font-family": [{ font: [X, W, t] }],
						"fvn-normal": ["normal-nums"],
						"fvn-ordinal": ["ordinal"],
						"fvn-slashed-zero": ["slashed-zero"],
						"fvn-figure": ["lining-nums", "oldstyle-nums"],
						"fvn-spacing": ["proportional-nums", "tabular-nums"],
						"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
						tracking: [{ tracking: [o, G, W] }],
						"line-clamp": [{ "line-clamp": [j, "none", G, $] }],
						leading: [{ leading: [a, ...N()] }],
						"list-image": [{ "list-image": ["none", G, W] }],
						"list-style-position": [{ list: ["inside", "outside"] }],
						"list-style-type": [{ list: ["disc", "decimal", "none", G, W] }],
						"text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
						"placeholder-color": [{ placeholder: er() }],
						"text-color": [{ text: er() }],
						"text-decoration": ["underline", "overline", "line-through", "no-underline"],
						"text-decoration-style": [{ decoration: [...ec(), "wavy"] }],
						"text-decoration-thickness": [{ decoration: [j, "from-font", "auto", G, F] }],
						"text-decoration-color": [{ decoration: er() }],
						"underline-offset": [{ "underline-offset": [j, "auto", G, W] }],
						"text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
						"text-overflow": ["truncate", "text-ellipsis", "text-clip"],
						"text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
						indent: [{ indent: N() }],
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
									G,
									W,
								],
							},
						],
						whitespace: [
							{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] },
						],
						break: [{ break: ["normal", "words", "all", "keep"] }],
						wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
						hyphens: [{ hyphens: ["none", "manual", "auto"] }],
						content: [{ content: ["none", G, W] }],
						"bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
						"bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
						"bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
						"bg-position": [{ bg: en() }],
						"bg-repeat": [{ bg: eo() }],
						"bg-size": [{ bg: ea() }],
						"bg-image": [
							{
								bg: [
									"none",
									{
										linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, D, G, W],
										radial: ["", G, W],
										conic: [D, G, W],
									},
									V,
									U,
								],
							},
						],
						"bg-color": [{ bg: er() }],
						"gradient-from-pos": [{ from: el() }],
						"gradient-via-pos": [{ via: el() }],
						"gradient-to-pos": [{ to: el() }],
						"gradient-from": [{ from: er() }],
						"gradient-via": [{ via: er() }],
						"gradient-to": [{ to: er() }],
						rounded: [{ rounded: ei() }],
						"rounded-s": [{ "rounded-s": ei() }],
						"rounded-e": [{ "rounded-e": ei() }],
						"rounded-t": [{ "rounded-t": ei() }],
						"rounded-r": [{ "rounded-r": ei() }],
						"rounded-b": [{ "rounded-b": ei() }],
						"rounded-l": [{ "rounded-l": ei() }],
						"rounded-ss": [{ "rounded-ss": ei() }],
						"rounded-se": [{ "rounded-se": ei() }],
						"rounded-ee": [{ "rounded-ee": ei() }],
						"rounded-es": [{ "rounded-es": ei() }],
						"rounded-tl": [{ "rounded-tl": ei() }],
						"rounded-tr": [{ "rounded-tr": ei() }],
						"rounded-br": [{ "rounded-br": ei() }],
						"rounded-bl": [{ "rounded-bl": ei() }],
						"border-w": [{ border: es() }],
						"border-w-x": [{ "border-x": es() }],
						"border-w-y": [{ "border-y": es() }],
						"border-w-s": [{ "border-s": es() }],
						"border-w-e": [{ "border-e": es() }],
						"border-w-t": [{ "border-t": es() }],
						"border-w-r": [{ "border-r": es() }],
						"border-w-b": [{ "border-b": es() }],
						"border-w-l": [{ "border-l": es() }],
						"divide-x": [{ "divide-x": es() }],
						"divide-x-reverse": ["divide-x-reverse"],
						"divide-y": [{ "divide-y": es() }],
						"divide-y-reverse": ["divide-y-reverse"],
						"border-style": [{ border: [...ec(), "hidden", "none"] }],
						"divide-style": [{ divide: [...ec(), "hidden", "none"] }],
						"border-color": [{ border: er() }],
						"border-color-x": [{ "border-x": er() }],
						"border-color-y": [{ "border-y": er() }],
						"border-color-s": [{ "border-s": er() }],
						"border-color-e": [{ "border-e": er() }],
						"border-color-t": [{ "border-t": er() }],
						"border-color-r": [{ "border-r": er() }],
						"border-color-b": [{ "border-b": er() }],
						"border-color-l": [{ "border-l": er() }],
						"divide-color": [{ divide: er() }],
						"outline-style": [{ outline: [...ec(), "none", "hidden"] }],
						"outline-offset": [{ "outline-offset": [j, G, W] }],
						"outline-w": [{ outline: ["", j, K, F] }],
						"outline-color": [{ outline: er() }],
						shadow: [{ shadow: ["", "none", d, Z, H] }],
						"shadow-color": [{ shadow: er() }],
						"inset-shadow": [{ "inset-shadow": ["none", u, Z, H] }],
						"inset-shadow-color": [{ "inset-shadow": er() }],
						"ring-w": [{ ring: es() }],
						"ring-w-inset": ["ring-inset"],
						"ring-color": [{ ring: er() }],
						"ring-offset-w": [{ "ring-offset": [j, F] }],
						"ring-offset-color": [{ "ring-offset": er() }],
						"inset-ring-w": [{ "inset-ring": es() }],
						"inset-ring-color": [{ "inset-ring": er() }],
						"text-shadow": [{ "text-shadow": ["none", f, Z, H] }],
						"text-shadow-color": [{ "text-shadow": er() }],
						opacity: [{ opacity: [j, G, W] }],
						"mix-blend": [{ "mix-blend": [...ed(), "plus-darker", "plus-lighter"] }],
						"bg-blend": [{ "bg-blend": ed() }],
						"mask-clip": [
							{ "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] },
							"mask-no-clip",
						],
						"mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }],
						"mask-image-linear-pos": [{ "mask-linear": [j] }],
						"mask-image-linear-from-pos": [{ "mask-linear-from": eu() }],
						"mask-image-linear-to-pos": [{ "mask-linear-to": eu() }],
						"mask-image-linear-from-color": [{ "mask-linear-from": er() }],
						"mask-image-linear-to-color": [{ "mask-linear-to": er() }],
						"mask-image-t-from-pos": [{ "mask-t-from": eu() }],
						"mask-image-t-to-pos": [{ "mask-t-to": eu() }],
						"mask-image-t-from-color": [{ "mask-t-from": er() }],
						"mask-image-t-to-color": [{ "mask-t-to": er() }],
						"mask-image-r-from-pos": [{ "mask-r-from": eu() }],
						"mask-image-r-to-pos": [{ "mask-r-to": eu() }],
						"mask-image-r-from-color": [{ "mask-r-from": er() }],
						"mask-image-r-to-color": [{ "mask-r-to": er() }],
						"mask-image-b-from-pos": [{ "mask-b-from": eu() }],
						"mask-image-b-to-pos": [{ "mask-b-to": eu() }],
						"mask-image-b-from-color": [{ "mask-b-from": er() }],
						"mask-image-b-to-color": [{ "mask-b-to": er() }],
						"mask-image-l-from-pos": [{ "mask-l-from": eu() }],
						"mask-image-l-to-pos": [{ "mask-l-to": eu() }],
						"mask-image-l-from-color": [{ "mask-l-from": er() }],
						"mask-image-l-to-color": [{ "mask-l-to": er() }],
						"mask-image-x-from-pos": [{ "mask-x-from": eu() }],
						"mask-image-x-to-pos": [{ "mask-x-to": eu() }],
						"mask-image-x-from-color": [{ "mask-x-from": er() }],
						"mask-image-x-to-color": [{ "mask-x-to": er() }],
						"mask-image-y-from-pos": [{ "mask-y-from": eu() }],
						"mask-image-y-to-pos": [{ "mask-y-to": eu() }],
						"mask-image-y-from-color": [{ "mask-y-from": er() }],
						"mask-image-y-to-color": [{ "mask-y-to": er() }],
						"mask-image-radial": [{ "mask-radial": [G, W] }],
						"mask-image-radial-from-pos": [{ "mask-radial-from": eu() }],
						"mask-image-radial-to-pos": [{ "mask-radial-to": eu() }],
						"mask-image-radial-from-color": [{ "mask-radial-from": er() }],
						"mask-image-radial-to-color": [{ "mask-radial-to": er() }],
						"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
						"mask-image-radial-size": [
							{ "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] },
						],
						"mask-image-radial-pos": [{ "mask-radial-at": x() }],
						"mask-image-conic-pos": [{ "mask-conic": [j] }],
						"mask-image-conic-from-pos": [{ "mask-conic-from": eu() }],
						"mask-image-conic-to-pos": [{ "mask-conic-to": eu() }],
						"mask-image-conic-from-color": [{ "mask-conic-from": er() }],
						"mask-image-conic-to-color": [{ "mask-conic-to": er() }],
						"mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
						"mask-origin": [{ "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] }],
						"mask-position": [{ mask: en() }],
						"mask-repeat": [{ mask: eo() }],
						"mask-size": [{ mask: ea() }],
						"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
						"mask-image": [{ mask: ["none", G, W] }],
						filter: [{ filter: ["", "none", G, W] }],
						blur: [{ blur: ef() }],
						brightness: [{ brightness: [j, G, W] }],
						contrast: [{ contrast: [j, G, W] }],
						"drop-shadow": [{ "drop-shadow": ["", "none", m, Z, H] }],
						"drop-shadow-color": [{ "drop-shadow": er() }],
						grayscale: [{ grayscale: ["", j, G, W] }],
						"hue-rotate": [{ "hue-rotate": [j, G, W] }],
						invert: [{ invert: ["", j, G, W] }],
						saturate: [{ saturate: [j, G, W] }],
						sepia: [{ sepia: ["", j, G, W] }],
						"backdrop-filter": [{ "backdrop-filter": ["", "none", G, W] }],
						"backdrop-blur": [{ "backdrop-blur": ef() }],
						"backdrop-brightness": [{ "backdrop-brightness": [j, G, W] }],
						"backdrop-contrast": [{ "backdrop-contrast": [j, G, W] }],
						"backdrop-grayscale": [{ "backdrop-grayscale": ["", j, G, W] }],
						"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [j, G, W] }],
						"backdrop-invert": [{ "backdrop-invert": ["", j, G, W] }],
						"backdrop-opacity": [{ "backdrop-opacity": [j, G, W] }],
						"backdrop-saturate": [{ "backdrop-saturate": [j, G, W] }],
						"backdrop-sepia": [{ "backdrop-sepia": ["", j, G, W] }],
						"border-collapse": [{ border: ["collapse", "separate"] }],
						"border-spacing": [{ "border-spacing": N() }],
						"border-spacing-x": [{ "border-spacing-x": N() }],
						"border-spacing-y": [{ "border-spacing-y": N() }],
						"table-layout": [{ table: ["auto", "fixed"] }],
						caption: [{ caption: ["top", "bottom"] }],
						transition: [
							{ transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", G, W] },
						],
						"transition-behavior": [{ transition: ["normal", "discrete"] }],
						duration: [{ duration: [j, "initial", G, W] }],
						ease: [{ ease: ["linear", "initial", h, G, W] }],
						delay: [{ delay: [j, G, W] }],
						animate: [{ animate: ["none", y, G, W] }],
						backface: [{ backface: ["hidden", "visible"] }],
						perspective: [{ perspective: [g, G, W] }],
						"perspective-origin": [{ "perspective-origin": k() }],
						rotate: [{ rotate: em() }],
						"rotate-x": [{ "rotate-x": em() }],
						"rotate-y": [{ "rotate-y": em() }],
						"rotate-z": [{ "rotate-z": em() }],
						scale: [{ scale: ep() }],
						"scale-x": [{ "scale-x": ep() }],
						"scale-y": [{ "scale-y": ep() }],
						"scale-z": [{ "scale-z": ep() }],
						"scale-3d": ["scale-3d"],
						skew: [{ skew: eg() }],
						"skew-x": [{ "skew-x": eg() }],
						"skew-y": [{ "skew-y": eg() }],
						transform: [{ transform: [G, W, "", "none", "gpu", "cpu"] }],
						"transform-origin": [{ origin: k() }],
						"transform-style": [{ transform: ["3d", "flat"] }],
						translate: [{ translate: eb() }],
						"translate-x": [{ "translate-x": eb() }],
						"translate-y": [{ "translate-y": eb() }],
						"translate-z": [{ "translate-z": eb() }],
						"translate-none": ["translate-none"],
						accent: [{ accent: er() }],
						appearance: [{ appearance: ["none", "auto"] }],
						"caret-color": [{ caret: er() }],
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
									G,
									W,
								],
							},
						],
						"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
						"pointer-events": [{ "pointer-events": ["auto", "none"] }],
						resize: [{ resize: ["none", "", "y", "x"] }],
						"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
						"scroll-m": [{ "scroll-m": N() }],
						"scroll-mx": [{ "scroll-mx": N() }],
						"scroll-my": [{ "scroll-my": N() }],
						"scroll-ms": [{ "scroll-ms": N() }],
						"scroll-me": [{ "scroll-me": N() }],
						"scroll-mt": [{ "scroll-mt": N() }],
						"scroll-mr": [{ "scroll-mr": N() }],
						"scroll-mb": [{ "scroll-mb": N() }],
						"scroll-ml": [{ "scroll-ml": N() }],
						"scroll-p": [{ "scroll-p": N() }],
						"scroll-px": [{ "scroll-px": N() }],
						"scroll-py": [{ "scroll-py": N() }],
						"scroll-ps": [{ "scroll-ps": N() }],
						"scroll-pe": [{ "scroll-pe": N() }],
						"scroll-pt": [{ "scroll-pt": N() }],
						"scroll-pr": [{ "scroll-pr": N() }],
						"scroll-pb": [{ "scroll-pb": N() }],
						"scroll-pl": [{ "scroll-pl": N() }],
						"snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
						"snap-stop": [{ snap: ["normal", "always"] }],
						"snap-type": [{ snap: ["none", "x", "y", "both"] }],
						"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
						touch: [{ touch: ["auto", "none", "manipulation"] }],
						"touch-x": [{ "touch-pan": ["x", "left", "right"] }],
						"touch-y": [{ "touch-pan": ["y", "up", "down"] }],
						"touch-pz": ["touch-pinch-zoom"],
						select: [{ select: ["none", "text", "all", "auto"] }],
						"will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", G, W] }],
						fill: [{ fill: ["none", ...er()] }],
						"stroke-w": [{ stroke: [j, K, F, $] }],
						stroke: [{ stroke: ["none", ...er()] }],
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
		function es(...e) {
			return ei(t(e))
		}
		e.s(["cn", () => es], 45326)
	},
	91967,
	(e) => {
		"use strict"
		function t(e, r, { checkForDefaultPrevented: n = !0 } = {}) {
			return function (t) {
				if ((e?.(t), !1 === n || !t.defaultPrevented)) return r?.(t)
			}
		}
		"u" > typeof window && window.document && window.document.createElement, e.s(["composeEventHandlers", () => t])
	},
	74209,
	(e) => {
		"use strict"
		let t = (0, e.i(21387).default)("x", [
			["path", { d: "M18 6 6 18", key: "1bl5f8" }],
			["path", { d: "m6 6 12 12", key: "d8bk6v" }],
		])
		e.s(["X", () => t], 74209)
	},
	65221,
	4113,
	29241,
	55162,
	93180,
	75263,
	24805,
	84123,
	80959,
	24196,
	(e) => {
		"use strict"
		let t
		var r,
			n,
			o,
			a,
			l,
			i,
			s,
			c,
			d = e.i(8026),
			u = e.i(10008),
			f = e.i(91967),
			m = e.i(26613)
		function p(e, t) {
			let r = u.createContext(t),
				n = (e) => {
					let { children: t, ...n } = e,
						o = u.useMemo(() => n, Object.values(n))
					return (0, d.jsx)(r.Provider, { value: o, children: t })
				}
			return (
				(n.displayName = e + "Provider"),
				[
					n,
					function (n) {
						let o = u.useContext(r)
						if (o) return o
						if (void 0 !== t) return t
						throw Error(`\`${n}\` must be used within \`${e}\``)
					},
				]
			)
		}
		function g(e, t = []) {
			let r = [],
				n = () => {
					let t = r.map((e) => u.createContext(e))
					return function (r) {
						let n = r?.[e] || t
						return u.useMemo(() => ({ [`__scope${e}`]: { ...r, [e]: n } }), [r, n])
					}
				}
			return (
				(n.scopeName = e),
				[
					function (t, n) {
						let o = u.createContext(n),
							a = r.length
						r = [...r, n]
						let l = (t) => {
							let { scope: r, children: n, ...l } = t,
								i = r?.[e]?.[a] || o,
								s = u.useMemo(() => l, Object.values(l))
							return (0, d.jsx)(i.Provider, { value: s, children: n })
						}
						return (
							(l.displayName = t + "Provider"),
							[
								l,
								function (r, l) {
									let i = l?.[e]?.[a] || o,
										s = u.useContext(i)
									if (s) return s
									if (void 0 !== n) return n
									throw Error(`\`${r}\` must be used within \`${t}\``)
								},
							]
						)
					},
					(function (...e) {
						let t = e[0]
						if (1 === e.length) return t
						let r = () => {
							let r = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }))
							return function (e) {
								let n = r.reduce((t, { useScope: r, scopeName: n }) => {
									let o = r(e)[`__scope${n}`]
									return { ...t, ...o }
								}, {})
								return u.useMemo(() => ({ [`__scope${t.scopeName}`]: n }), [n])
							}
						}
						return (r.scopeName = t.scopeName), r
					})(n, ...t),
				]
			)
		}
		e.s(["createContext", () => p, "createContextScope", () => g], 4113)
		var b = globalThis?.document ? u.useLayoutEffect : () => {}
		e.s(["useLayoutEffect", () => b], 29241)
		var h = u[" useId ".trim().toString()] || (() => void 0),
			v = 0
		function y(e) {
			let [t, r] = u.useState(h())
			return (
				b(() => {
					e || r((e) => e ?? String(v++))
				}, [e]),
				e || (t ? `radix-${t}` : "")
			)
		}
		e.s(["useId", () => y], 55162),
			u[" useEffectEvent ".trim().toString()],
			u[" useInsertionEffect ".trim().toString()]
		var w = u[" useInsertionEffect ".trim().toString()] || b
		function x({ prop: e, defaultProp: t, onChange: r = () => {}, caller: n }) {
			let [o, a, l] = (function ({ defaultProp: e, onChange: t }) {
					let [r, n] = u.useState(e),
						o = u.useRef(r),
						a = u.useRef(t)
					return (
						w(() => {
							a.current = t
						}, [t]),
						u.useEffect(() => {
							o.current !== r && (a.current?.(r), (o.current = r))
						}, [r, o]),
						[r, n, a]
					)
				})({ defaultProp: t, onChange: r }),
				i = void 0 !== e,
				s = i ? e : o
			{
				let t = u.useRef(void 0 !== e)
				u.useEffect(() => {
					let e = t.current
					if (e !== i) {
						let t = i ? "controlled" : "uncontrolled"
						console.warn(
							`${n} is changing from ${e ? "controlled" : "uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
						)
					}
					t.current = i
				}, [i, n])
			}
			return [
				s,
				u.useCallback(
					(t) => {
						if (i) {
							let r = "function" == typeof t ? t(e) : t
							r !== e && l.current?.(r)
						} else a(t)
					},
					[i, e, a, l],
				),
			]
		}
		Symbol("RADIX:SYNC_STATE"), e.s(["useControllableState", () => x], 93180)
		var k = e.i(68069)
		function E(e) {
			var t
			let r,
				n =
					((t = e),
					((r = u.forwardRef((e, t) => {
						let { children: r, ...n } = e
						if (u.isValidElement(r)) {
							var o
							let e,
								a,
								l =
									((o = r),
									(a =
										(e = Object.getOwnPropertyDescriptor(o.props, "ref")?.get) &&
										"isReactWarning" in e &&
										e.isReactWarning)
										? o.ref
										: (a =
													(e = Object.getOwnPropertyDescriptor(o, "ref")?.get) &&
													"isReactWarning" in e &&
													e.isReactWarning)
											? o.props.ref
											: o.props.ref || o.ref),
								i = (function (e, t) {
									let r = { ...t }
									for (let n in t) {
										let o = e[n],
											a = t[n]
										;/^on[A-Z]/.test(n)
											? o && a
												? (r[n] = (...e) => {
														let t = a(...e)
														return o(...e), t
													})
												: o && (r[n] = o)
											: "style" === n
												? (r[n] = { ...o, ...a })
												: "className" === n && (r[n] = [o, a].filter(Boolean).join(" "))
									}
									return { ...e, ...r }
								})(n, r.props)
							return (
								r.type !== u.Fragment && (i.ref = t ? (0, m.composeRefs)(t, l) : l),
								u.cloneElement(r, i)
							)
						}
						return u.Children.count(r) > 1 ? u.Children.only(null) : null
					})).displayName = `${t}.SlotClone`),
					r),
				o = u.forwardRef((e, t) => {
					let { children: r, ...o } = e,
						a = u.Children.toArray(r),
						l = a.find(N)
					if (l) {
						let e = l.props.children,
							r = a.map((t) =>
								t !== l
									? t
									: u.Children.count(e) > 1
										? u.Children.only(null)
										: u.isValidElement(e)
											? e.props.children
											: null,
							)
						return (0, d.jsx)(n, {
							...o,
							ref: t,
							children: u.isValidElement(e) ? u.cloneElement(e, void 0, r) : null,
						})
					}
					return (0, d.jsx)(n, { ...o, ref: t, children: r })
				})
			return (o.displayName = `${e}.Slot`), o
		}
		var C = Symbol("radix.slottable")
		function N(e) {
			return u.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === C
		}
		e.s(["createSlot", () => E], 75263)
		var R = [
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
		].reduce((e, t) => {
			let r = E(`Primitive.${t}`),
				n = u.forwardRef((e, n) => {
					let { asChild: o, ...a } = e
					return (
						"u" > typeof window && (window[Symbol.for("radix-ui")] = !0),
						(0, d.jsx)(o ? r : t, { ...a, ref: n })
					)
				})
			return (n.displayName = `Primitive.${t}`), { ...e, [t]: n }
		}, {})
		function S(e, t) {
			e && k.flushSync(() => e.dispatchEvent(t))
		}
		function j(e) {
			let t = u.useRef(e)
			return (
				u.useEffect(() => {
					t.current = e
				}),
				u.useMemo(
					() =>
						(...e) =>
							t.current?.(...e),
					[],
				)
			)
		}
		e.s(["Primitive", () => R, "dispatchDiscreteCustomEvent", () => S], 24805),
			e.s(["useCallbackRef", () => j], 84123)
		var D = "dismissableLayer.update",
			O = u.createContext({
				layers: new Set(),
				layersWithOutsidePointerEventsDisabled: new Set(),
				branches: new Set(),
			}),
			P = u.forwardRef((e, t) => {
				let {
						disableOutsidePointerEvents: r = !1,
						onEscapeKeyDown: n,
						onPointerDownOutside: o,
						onFocusOutside: a,
						onInteractOutside: l,
						onDismiss: i,
						...c
					} = e,
					p = u.useContext(O),
					[g, b] = u.useState(null),
					h = g?.ownerDocument ?? globalThis?.document,
					[, v] = u.useState({}),
					y = (0, m.useComposedRefs)(t, (e) => b(e)),
					w = Array.from(p.layers),
					[x] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
					k = w.indexOf(x),
					E = g ? w.indexOf(g) : -1,
					C = p.layersWithOutsidePointerEventsDisabled.size > 0,
					N = E >= k,
					S = (function (e, t = globalThis?.document) {
						let r = j(e),
							n = u.useRef(!1),
							o = u.useRef(() => {})
						return (
							u.useEffect(() => {
								let e = (e) => {
										if (e.target && !n.current) {
											let n = function () {
													z("dismissableLayer.pointerDownOutside", r, a, { discrete: !0 })
												},
												a = { originalEvent: e }
											"touch" === e.pointerType
												? (t.removeEventListener("click", o.current),
													(o.current = n),
													t.addEventListener("click", o.current, { once: !0 }))
												: n()
										} else t.removeEventListener("click", o.current)
										n.current = !1
									},
									a = window.setTimeout(() => {
										t.addEventListener("pointerdown", e)
									}, 0)
								return () => {
									window.clearTimeout(a),
										t.removeEventListener("pointerdown", e),
										t.removeEventListener("click", o.current)
								}
							}, [t, r]),
							{ onPointerDownCapture: () => (n.current = !0) }
						)
					})((e) => {
						let t = e.target,
							r = [...p.branches].some((e) => e.contains(t))
						N && !r && (o?.(e), l?.(e), e.defaultPrevented || i?.())
					}, h),
					P = (function (e, t = globalThis?.document) {
						let r = j(e),
							n = u.useRef(!1)
						return (
							u.useEffect(() => {
								let e = (e) => {
									e.target &&
										!n.current &&
										z("dismissableLayer.focusOutside", r, { originalEvent: e }, { discrete: !1 })
								}
								return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
							}, [t, r]),
							{ onFocusCapture: () => (n.current = !0), onBlurCapture: () => (n.current = !1) }
						)
					})((e) => {
						let t = e.target
						![...p.branches].some((e) => e.contains(t)) && (a?.(e), l?.(e), e.defaultPrevented || i?.())
					}, h)
				return (
					!(function (e, t = globalThis?.document) {
						let r = j(e)
						u.useEffect(() => {
							let e = (e) => {
								"Escape" === e.key && r(e)
							}
							return (
								t.addEventListener("keydown", e, { capture: !0 }),
								() => t.removeEventListener("keydown", e, { capture: !0 })
							)
						}, [r, t])
					})((e) => {
						E === p.layers.size - 1 && (n?.(e), !e.defaultPrevented && i && (e.preventDefault(), i()))
					}, h),
					u.useEffect(() => {
						if (g)
							return (
								r &&
									(0 === p.layersWithOutsidePointerEventsDisabled.size &&
										((s = h.body.style.pointerEvents), (h.body.style.pointerEvents = "none")),
									p.layersWithOutsidePointerEventsDisabled.add(g)),
								p.layers.add(g),
								T(),
								() => {
									r &&
										1 === p.layersWithOutsidePointerEventsDisabled.size &&
										(h.body.style.pointerEvents = s)
								}
							)
					}, [g, h, r, p]),
					u.useEffect(
						() => () => {
							g && (p.layers.delete(g), p.layersWithOutsidePointerEventsDisabled.delete(g), T())
						},
						[g, p],
					),
					u.useEffect(() => {
						let e = () => v({})
						return document.addEventListener(D, e), () => document.removeEventListener(D, e)
					}, []),
					(0, d.jsx)(R.div, {
						...c,
						ref: y,
						style: { pointerEvents: C ? (N ? "auto" : "none") : void 0, ...e.style },
						onFocusCapture: (0, f.composeEventHandlers)(e.onFocusCapture, P.onFocusCapture),
						onBlurCapture: (0, f.composeEventHandlers)(e.onBlurCapture, P.onBlurCapture),
						onPointerDownCapture: (0, f.composeEventHandlers)(
							e.onPointerDownCapture,
							S.onPointerDownCapture,
						),
					})
				)
			})
		function T() {
			let e = new CustomEvent(D)
			document.dispatchEvent(e)
		}
		function z(e, t, r, { discrete: n }) {
			let o = r.originalEvent.target,
				a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r })
			t && o.addEventListener(e, t, { once: !0 }), n ? S(o, a) : o.dispatchEvent(a)
		}
		;(P.displayName = "DismissableLayer"),
			(u.forwardRef((e, t) => {
				let r = u.useContext(O),
					n = u.useRef(null),
					o = (0, m.useComposedRefs)(t, n)
				return (
					u.useEffect(() => {
						let e = n.current
						if (e)
							return (
								r.branches.add(e),
								() => {
									r.branches.delete(e)
								}
							)
					}, [r.branches]),
					(0, d.jsx)(R.div, { ...e, ref: o })
				)
			}).displayName = "DismissableLayerBranch"),
			e.s(["DismissableLayer", () => P], 80959)
		var M = "focusScope.autoFocusOnMount",
			A = "focusScope.autoFocusOnUnmount",
			I = { bubbles: !1, cancelable: !0 },
			L = u.forwardRef((e, t) => {
				let { loop: r = !1, trapped: n = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...l } = e,
					[i, s] = u.useState(null),
					c = j(o),
					f = j(a),
					p = u.useRef(null),
					g = (0, m.useComposedRefs)(t, (e) => s(e)),
					b = u.useRef({
						paused: !1,
						pause() {
							this.paused = !0
						},
						resume() {
							this.paused = !1
						},
					}).current
				u.useEffect(() => {
					if (n) {
						let e = function (e) {
								if (b.paused || !i) return
								let t = e.target
								i.contains(t) ? (p.current = t) : F(p.current, { select: !0 })
							},
							t = function (e) {
								if (b.paused || !i) return
								let t = e.relatedTarget
								null !== t && (i.contains(t) || F(p.current, { select: !0 }))
							}
						document.addEventListener("focusin", e), document.addEventListener("focusout", t)
						let r = new MutationObserver(function (e) {
							if (document.activeElement === document.body)
								for (let t of e) t.removedNodes.length > 0 && F(i)
						})
						return (
							i && r.observe(i, { childList: !0, subtree: !0 }),
							() => {
								document.removeEventListener("focusin", e),
									document.removeEventListener("focusout", t),
									r.disconnect()
							}
						)
					}
				}, [n, i, b.paused]),
					u.useEffect(() => {
						if (i) {
							$.add(b)
							let e = document.activeElement
							if (!i.contains(e)) {
								let t = new CustomEvent(M, I)
								i.addEventListener(M, c),
									i.dispatchEvent(t),
									t.defaultPrevented ||
										((function (e, { select: t = !1 } = {}) {
											let r = document.activeElement
											for (let n of e)
												if ((F(n, { select: t }), document.activeElement !== r)) return
										})(
											_(i).filter((e) => "A" !== e.tagName),
											{ select: !0 },
										),
										document.activeElement === e && F(i))
							}
							return () => {
								i.removeEventListener(M, c),
									setTimeout(() => {
										let t = new CustomEvent(A, I)
										i.addEventListener(A, f),
											i.dispatchEvent(t),
											t.defaultPrevented || F(e ?? document.body, { select: !0 }),
											i.removeEventListener(A, f),
											$.remove(b)
									}, 0)
							}
						}
					}, [i, c, f, b])
				let h = u.useCallback(
					(e) => {
						if ((!r && !n) || b.paused) return
						let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
							o = document.activeElement
						if (t && o) {
							var a
							let t,
								n = e.currentTarget,
								[l, i] = [W((t = _((a = n))), a), W(t.reverse(), a)]
							l && i
								? e.shiftKey || o !== i
									? e.shiftKey && o === l && (e.preventDefault(), r && F(i, { select: !0 }))
									: (e.preventDefault(), r && F(l, { select: !0 }))
								: o === n && e.preventDefault()
						}
					},
					[r, n, b.paused],
				)
				return (0, d.jsx)(R.div, { tabIndex: -1, ...l, ref: g, onKeyDown: h })
			})
		function _(e) {
			let t = [],
				r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
					acceptNode: (e) => {
						let t = "INPUT" === e.tagName && "hidden" === e.type
						return e.disabled || e.hidden || t
							? NodeFilter.FILTER_SKIP
							: e.tabIndex >= 0
								? NodeFilter.FILTER_ACCEPT
								: NodeFilter.FILTER_SKIP
					},
				})
			for (; r.nextNode(); ) t.push(r.currentNode)
			return t
		}
		function W(e, t) {
			for (let r of e)
				if (
					!(function (e, { upTo: t }) {
						if ("hidden" === getComputedStyle(e).visibility) return !0
						for (; e && (void 0 === t || e !== t); ) {
							if ("none" === getComputedStyle(e).display) return !0
							e = e.parentElement
						}
						return !1
					})(r, { upTo: t })
				)
					return r
		}
		function F(e, { select: t = !1 } = {}) {
			if (e && e.focus) {
				var r
				let n = document.activeElement
				e.focus({ preventScroll: !0 }),
					e !== n && (r = e) instanceof HTMLInputElement && "select" in r && t && e.select()
			}
		}
		L.displayName = "FocusScope"
		var $ =
			((t = []),
			{
				add(e) {
					let r = t[0]
					e !== r && r?.pause(), (t = B(t, e)).unshift(e)
				},
				remove(e) {
					;(t = B(t, e)), t[0]?.resume()
				},
			})
		function B(e, t) {
			let r = [...e],
				n = r.indexOf(t)
			return -1 !== n && r.splice(n, 1), r
		}
		var U = u.forwardRef((e, t) => {
			let { container: r, ...n } = e,
				[o, a] = u.useState(!1)
			b(() => a(!0), [])
			let l = r || (o && globalThis?.document?.body)
			return l ? k.default.createPortal((0, d.jsx)(R.div, { ...n, ref: t }), l) : null
		})
		U.displayName = "Portal"
		var H = (e) => {
			var t
			let r,
				n,
				{ present: o, children: a } = e,
				l = (function (e) {
					var t, r
					let [n, o] = u.useState(),
						a = u.useRef(null),
						l = u.useRef(e),
						i = u.useRef("none"),
						[s, c] =
							((t = e ? "mounted" : "unmounted"),
							(r = {
								mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
								unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
								unmounted: { MOUNT: "mounted" },
							}),
							u.useReducer((e, t) => r[e][t] ?? e, t))
					return (
						u.useEffect(() => {
							let e = G(a.current)
							i.current = "mounted" === s ? e : "none"
						}, [s]),
						b(() => {
							let t = a.current,
								r = l.current
							if (r !== e) {
								let n = i.current,
									o = G(t)
								e
									? c("MOUNT")
									: "none" === o || t?.display === "none"
										? c("UNMOUNT")
										: r && n !== o
											? c("ANIMATION_OUT")
											: c("UNMOUNT"),
									(l.current = e)
							}
						}, [e, c]),
						b(() => {
							if (n) {
								let e,
									t = n.ownerDocument.defaultView ?? window,
									r = (r) => {
										let o = G(a.current).includes(CSS.escape(r.animationName))
										if (r.target === n && o && (c("ANIMATION_END"), !l.current)) {
											let r = n.style.animationFillMode
											;(n.style.animationFillMode = "forwards"),
												(e = t.setTimeout(() => {
													"forwards" === n.style.animationFillMode &&
														(n.style.animationFillMode = r)
												}))
										}
									},
									o = (e) => {
										e.target === n && (i.current = G(a.current))
									}
								return (
									n.addEventListener("animationstart", o),
									n.addEventListener("animationcancel", r),
									n.addEventListener("animationend", r),
									() => {
										t.clearTimeout(e),
											n.removeEventListener("animationstart", o),
											n.removeEventListener("animationcancel", r),
											n.removeEventListener("animationend", r)
									}
								)
							}
							c("ANIMATION_END")
						}, [n, c]),
						{
							isPresent: ["mounted", "unmountSuspended"].includes(s),
							ref: u.useCallback((e) => {
								;(a.current = e ? getComputedStyle(e) : null), o(e)
							}, []),
						}
					)
				})(o),
				i = "function" == typeof a ? a({ present: l.isPresent }) : u.Children.only(a),
				s = (0, m.useComposedRefs)(
					l.ref,
					((t = i),
					(n =
						(r = Object.getOwnPropertyDescriptor(t.props, "ref")?.get) &&
						"isReactWarning" in r &&
						r.isReactWarning)
						? t.ref
						: (n =
									(r = Object.getOwnPropertyDescriptor(t, "ref")?.get) &&
									"isReactWarning" in r &&
									r.isReactWarning)
							? t.props.ref
							: t.props.ref || t.ref),
				)
			return "function" == typeof a || l.isPresent ? u.cloneElement(i, { ref: s }) : null
		}
		function G(e) {
			return e?.animationName || "none"
		}
		;(H.displayName = "Presence"), e.s(["Presence", () => H], 24196)
		var K = 0
		function X() {
			let e = document.createElement("span")
			return (
				e.setAttribute("data-radix-focus-guard", ""),
				(e.tabIndex = 0),
				(e.style.outline = "none"),
				(e.style.opacity = "0"),
				(e.style.position = "fixed"),
				(e.style.pointerEvents = "none"),
				e
			)
		}
		var Y = function () {
			return (Y =
				Object.assign ||
				function (e) {
					for (var t, r = 1, n = arguments.length; r < n; r++)
						for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
					return e
				}).apply(this, arguments)
		}
		function q(e, t) {
			var r = {}
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n])
			if (null != e && "function" == typeof Object.getOwnPropertySymbols)
				for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
					0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
			return r
		}
		var V = ("function" == typeof SuppressedError && SuppressedError, "right-scroll-bar-position"),
			Z = "width-before-scroll-bar"
		function J(e, t) {
			return "function" == typeof e ? e(t) : e && (e.current = t), e
		}
		var Q = "u" > typeof window ? u.useLayoutEffect : u.useEffect,
			ee = new WeakMap(),
			et =
				(void 0 === r && (r = {}),
				((void 0 === n &&
					(n = function (e) {
						return e
					}),
				(o = []),
				(a = !1),
				(l = {
					read: function () {
						if (a)
							throw Error(
								"Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
							)
						return o.length ? o[o.length - 1] : null
					},
					useMedium: function (e) {
						var t = n(e, a)
						return (
							o.push(t),
							function () {
								o = o.filter(function (e) {
									return e !== t
								})
							}
						)
					},
					assignSyncMedium: function (e) {
						for (a = !0; o.length; ) {
							var t = o
							;(o = []), t.forEach(e)
						}
						o = {
							push: function (t) {
								return e(t)
							},
							filter: function () {
								return o
							},
						}
					},
					assignMedium: function (e) {
						a = !0
						var t = []
						if (o.length) {
							var r = o
							;(o = []), r.forEach(e), (t = o)
						}
						var n = function () {
								var r = t
								;(t = []), r.forEach(e)
							},
							l = function () {
								return Promise.resolve().then(n)
							}
						l(),
							(o = {
								push: function (e) {
									t.push(e), l()
								},
								filter: function (e) {
									return (t = t.filter(e)), o
								},
							})
					},
				})).options = Y({ async: !0, ssr: !1 }, r)),
				l),
			er = function () {},
			en = u.forwardRef(function (e, t) {
				var r,
					n,
					o,
					a,
					l = u.useRef(null),
					i = u.useState({ onScrollCapture: er, onWheelCapture: er, onTouchMoveCapture: er }),
					s = i[0],
					c = i[1],
					d = e.forwardProps,
					f = e.children,
					m = e.className,
					p = e.removeScrollBar,
					g = e.enabled,
					b = e.shards,
					h = e.sideCar,
					v = e.noIsolation,
					y = e.inert,
					w = e.allowPinchZoom,
					x = e.as,
					k = e.gapMode,
					E = q(e, [
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
					C =
						((r = [l, t]),
						(n = function (e) {
							return r.forEach(function (t) {
								return J(t, e)
							})
						}),
						((o = (0, u.useState)(function () {
							return {
								value: null,
								callback: n,
								facade: {
									get current() {
										return o.value
									},
									set current(value) {
										var e = o.value
										e !== value && ((o.value = value), o.callback(value, e))
									},
								},
							}
						})[0]).callback = n),
						(a = o.facade),
						Q(
							function () {
								var e = ee.get(a)
								if (e) {
									var t = new Set(e),
										n = new Set(r),
										o = a.current
									t.forEach(function (e) {
										n.has(e) || J(e, null)
									}),
										n.forEach(function (e) {
											t.has(e) || J(e, o)
										})
								}
								ee.set(a, r)
							},
							[r],
						),
						a),
					N = Y(Y({}, E), s)
				return u.createElement(
					u.Fragment,
					null,
					g &&
						u.createElement(h, {
							sideCar: et,
							removeScrollBar: p,
							shards: b,
							noIsolation: v,
							inert: y,
							setCallbacks: c,
							allowPinchZoom: !!w,
							lockRef: l,
							gapMode: k,
						}),
					d
						? u.cloneElement(u.Children.only(f), Y(Y({}, N), { ref: C }))
						: u.createElement(void 0 === x ? "div" : x, Y({}, N, { className: m, ref: C }), f),
				)
			})
		;(en.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
			(en.classNames = { fullWidth: Z, zeroRight: V })
		var eo = function (e) {
			var t = e.sideCar,
				r = q(e, ["sideCar"])
			if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car")
			var n = t.read()
			if (!n) throw Error("Sidecar medium not found")
			return u.createElement(n, Y({}, r))
		}
		eo.isSideCarExport = !0
		var ea = function () {
				var e = 0,
					t = null
				return {
					add: function (r) {
						if (
							0 == e &&
							(t = (function () {
								if (!document) return null
								var e = document.createElement("style")
								e.type = "text/css"
								var t = c || ("u" > typeof __webpack_nonce__ ? __webpack_nonce__ : void 0)
								return t && e.setAttribute("nonce", t), e
							})())
						) {
							var n, o
							;(n = t).styleSheet
								? (n.styleSheet.cssText = r)
								: n.appendChild(document.createTextNode(r)),
								(o = t),
								(document.head || document.getElementsByTagName("head")[0]).appendChild(o)
						}
						e++
					},
					remove: function () {
						--e || !t || (t.parentNode && t.parentNode.removeChild(t), (t = null))
					},
				}
			},
			el = function () {
				var e = ea()
				return function (t, r) {
					u.useEffect(
						function () {
							return (
								e.add(t),
								function () {
									e.remove()
								}
							)
						},
						[t && r],
					)
				}
			},
			ei = function () {
				var e = el()
				return function (t) {
					return e(t.styles, t.dynamic), null
				}
			},
			es = { left: 0, top: 0, right: 0, gap: 0 },
			ec = function (e) {
				return parseInt(e || "", 10) || 0
			},
			ed = function (e) {
				var t = window.getComputedStyle(document.body),
					r = t["padding" === e ? "paddingLeft" : "marginLeft"],
					n = t["padding" === e ? "paddingTop" : "marginTop"],
					o = t["padding" === e ? "paddingRight" : "marginRight"]
				return [ec(r), ec(n), ec(o)]
			},
			eu = function (e) {
				if ((void 0 === e && (e = "margin"), "u" < typeof window)) return es
				var t = ed(e),
					r = document.documentElement.clientWidth,
					n = window.innerWidth
				return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, n - r + t[2] - t[0]) }
			},
			ef = ei(),
			em = "data-scroll-locked",
			ep = function (e, t, r, n) {
				var o = e.left,
					a = e.top,
					l = e.right,
					i = e.gap
				return (
					void 0 === r && (r = "margin"),
					"\n  ."
						.concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
						.concat(n, ";\n   padding-right: ")
						.concat(i, "px ")
						.concat(n, ";\n  }\n  body[")
						.concat(em, "] {\n    overflow: hidden ")
						.concat(n, ";\n    overscroll-behavior: contain;\n    ")
						.concat(
							[
								t && "position: relative ".concat(n, ";"),
								"margin" === r &&
									"\n    padding-left: "
										.concat(o, "px;\n    padding-top: ")
										.concat(a, "px;\n    padding-right: ")
										.concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ")
										.concat(i, "px ")
										.concat(n, ";\n    "),
								"padding" === r && "padding-right: ".concat(i, "px ").concat(n, ";"),
							]
								.filter(Boolean)
								.join(""),
							"\n  }\n  \n  .",
						)
						.concat(V, " {\n    right: ")
						.concat(i, "px ")
						.concat(n, ";\n  }\n  \n  .")
						.concat(Z, " {\n    margin-right: ")
						.concat(i, "px ")
						.concat(n, ";\n  }\n  \n  .")
						.concat(V, " .")
						.concat(V, " {\n    right: 0 ")
						.concat(n, ";\n  }\n  \n  .")
						.concat(Z, " .")
						.concat(Z, " {\n    margin-right: 0 ")
						.concat(n, ";\n  }\n  \n  body[")
						.concat(em, "] {\n    ")
						.concat("--removed-body-scroll-bar-size", ": ")
						.concat(i, "px;\n  }\n")
				)
			},
			eg = function () {
				var e = parseInt(document.body.getAttribute(em) || "0", 10)
				return isFinite(e) ? e : 0
			},
			eb = function () {
				u.useEffect(function () {
					return (
						document.body.setAttribute(em, (eg() + 1).toString()),
						function () {
							var e = eg() - 1
							e <= 0 ? document.body.removeAttribute(em) : document.body.setAttribute(em, e.toString())
						}
					)
				}, [])
			},
			eh = function (e) {
				var t = e.noRelative,
					r = e.noImportant,
					n = e.gapMode,
					o = void 0 === n ? "margin" : n
				eb()
				var a = u.useMemo(
					function () {
						return eu(o)
					},
					[o],
				)
				return u.createElement(ef, { styles: ep(a, !t, o, r ? "" : "!important") })
			},
			ev = !1
		if ("u" > typeof window)
			try {
				var ey = Object.defineProperty({}, "passive", {
					get: function () {
						return (ev = !0), !0
					},
				})
				window.addEventListener("test", ey, ey), window.removeEventListener("test", ey, ey)
			} catch (e) {
				ev = !1
			}
		var ew = !!ev && { passive: !1 },
			ex = function (e, t) {
				if (!(e instanceof Element)) return !1
				var r = window.getComputedStyle(e)
				return (
					"hidden" !== r[t] && (r.overflowY !== r.overflowX || "TEXTAREA" === e.tagName || "visible" !== r[t])
				)
			},
			ek = function (e, t) {
				var r = t.ownerDocument,
					n = t
				do {
					if (("u" > typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), eE(e, n))) {
						var o = eC(e, n)
						if (o[1] > o[2]) return !0
					}
					n = n.parentNode
				} while (n && n !== r.body)
				return !1
			},
			eE = function (e, t) {
				return "v" === e ? ex(t, "overflowY") : ex(t, "overflowX")
			},
			eC = function (e, t) {
				return "v" === e
					? [t.scrollTop, t.scrollHeight, t.clientHeight]
					: [t.scrollLeft, t.scrollWidth, t.clientWidth]
			},
			eN = function (e, t, r, n, o) {
				var a,
					l = ((a = window.getComputedStyle(t).direction), "h" === e && "rtl" === a ? -1 : 1),
					i = l * n,
					s = r.target,
					c = t.contains(s),
					d = !1,
					u = i > 0,
					f = 0,
					m = 0
				do {
					var p = eC(e, s),
						g = p[0],
						b = p[1] - p[2] - l * g
					;(g || b) && eE(e, s) && ((f += b), (m += g)), (s = s instanceof ShadowRoot ? s.host : s.parentNode)
				} while ((!c && s !== document.body) || (c && (t.contains(s) || t === s)))
				return (
					u && ((o && 1 > Math.abs(f)) || (!o && i > f))
						? (d = !0)
						: !u && ((o && 1 > Math.abs(m)) || (!o && -i > m)) && (d = !0),
					d
				)
			},
			eR = function (e) {
				return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
			},
			eS = function (e) {
				return [e.deltaX, e.deltaY]
			},
			ej = function (e) {
				return e && "current" in e ? e.current : e
			},
			eD = 0,
			eO = []
		let eP =
			((i = function (e) {
				var t = u.useRef([]),
					r = u.useRef([0, 0]),
					n = u.useRef(),
					o = u.useState(eD++)[0],
					a = u.useState(ei)[0],
					l = u.useRef(e)
				u.useEffect(
					function () {
						l.current = e
					},
					[e],
				),
					u.useEffect(
						function () {
							if (e.inert) {
								document.body.classList.add("block-interactivity-".concat(o))
								var t = (function (e, t, r) {
									if (r || 2 == arguments.length)
										for (var n, o = 0, a = t.length; o < a; o++)
											(!n && o in t) ||
												(n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]))
									return e.concat(n || Array.prototype.slice.call(t))
								})([e.lockRef.current], (e.shards || []).map(ej), !0).filter(Boolean)
								return (
									t.forEach(function (e) {
										return e.classList.add("allow-interactivity-".concat(o))
									}),
									function () {
										document.body.classList.remove("block-interactivity-".concat(o)),
											t.forEach(function (e) {
												return e.classList.remove("allow-interactivity-".concat(o))
											})
									}
								)
							}
						},
						[e.inert, e.lockRef.current, e.shards],
					)
				var i = u.useCallback(function (e, t) {
						if (("touches" in e && 2 === e.touches.length) || ("wheel" === e.type && e.ctrlKey))
							return !l.current.allowPinchZoom
						var o,
							a = eR(e),
							i = r.current,
							s = "deltaX" in e ? e.deltaX : i[0] - a[0],
							c = "deltaY" in e ? e.deltaY : i[1] - a[1],
							d = e.target,
							u = Math.abs(s) > Math.abs(c) ? "h" : "v"
						if ("touches" in e && "h" === u && "range" === d.type) return !1
						var f = ek(u, d)
						if (!f) return !0
						if ((f ? (o = u) : ((o = "v" === u ? "h" : "v"), (f = ek(u, d))), !f)) return !1
						if ((!n.current && "changedTouches" in e && (s || c) && (n.current = o), !o)) return !0
						var m = n.current || o
						return eN(m, t, e, "h" === m ? s : c, !0)
					}, []),
					s = u.useCallback(function (e) {
						if (eO.length && eO[eO.length - 1] === a) {
							var r = "deltaY" in e ? eS(e) : eR(e),
								n = t.current.filter(function (t) {
									var n
									return (
										t.name === e.type &&
										(t.target === e.target || e.target === t.shadowParent) &&
										((n = t.delta), n[0] === r[0] && n[1] === r[1])
									)
								})[0]
							if (n && n.should) {
								e.cancelable && e.preventDefault()
								return
							}
							if (!n) {
								var o = (l.current.shards || [])
									.map(ej)
									.filter(Boolean)
									.filter(function (t) {
										return t.contains(e.target)
									})
								;(o.length > 0 ? i(e, o[0]) : !l.current.noIsolation) &&
									e.cancelable &&
									e.preventDefault()
							}
						}
					}, []),
					c = u.useCallback(function (e, r, n, o) {
						var a = {
							name: e,
							delta: r,
							target: n,
							should: o,
							shadowParent: (function (e) {
								for (var t = null; null !== e; )
									e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode)
								return t
							})(n),
						}
						t.current.push(a),
							setTimeout(function () {
								t.current = t.current.filter(function (e) {
									return e !== a
								})
							}, 1)
					}, []),
					d = u.useCallback(function (e) {
						;(r.current = eR(e)), (n.current = void 0)
					}, []),
					f = u.useCallback(function (t) {
						c(t.type, eS(t), t.target, i(t, e.lockRef.current))
					}, []),
					m = u.useCallback(function (t) {
						c(t.type, eR(t), t.target, i(t, e.lockRef.current))
					}, [])
				u.useEffect(function () {
					return (
						eO.push(a),
						e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: m }),
						document.addEventListener("wheel", s, ew),
						document.addEventListener("touchmove", s, ew),
						document.addEventListener("touchstart", d, ew),
						function () {
							;(eO = eO.filter(function (e) {
								return e !== a
							})),
								document.removeEventListener("wheel", s, ew),
								document.removeEventListener("touchmove", s, ew),
								document.removeEventListener("touchstart", d, ew)
						}
					)
				}, [])
				var p = e.removeScrollBar,
					g = e.inert
				return u.createElement(
					u.Fragment,
					null,
					g
						? u.createElement(a, {
								styles: "\n  .block-interactivity-"
									.concat(o, " {pointer-events: none;}\n  .allow-interactivity-")
									.concat(o, " {pointer-events: all;}\n"),
							})
						: null,
					p ? u.createElement(eh, { gapMode: e.gapMode }) : null,
				)
			}),
			et.useMedium(i),
			eo)
		var eT = u.forwardRef(function (e, t) {
			return u.createElement(en, Y({}, e, { ref: t, sideCar: eP }))
		})
		eT.classNames = en.classNames
		var ez = new WeakMap(),
			eM = new WeakMap(),
			eA = {},
			eI = 0,
			eL = function (e) {
				return e && (e.host || eL(e.parentNode))
			},
			e_ = function (e, t, r, n) {
				var o = (Array.isArray(e) ? e : [e])
					.map(function (e) {
						if (t.contains(e)) return e
						var r = eL(e)
						return r && t.contains(r)
							? r
							: (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
					})
					.filter(function (e) {
						return !!e
					})
				eA[r] || (eA[r] = new WeakMap())
				var a = eA[r],
					l = [],
					i = new Set(),
					s = new Set(o),
					c = function (e) {
						!e || i.has(e) || (i.add(e), c(e.parentNode))
					}
				o.forEach(c)
				var d = function (e) {
					!e ||
						s.has(e) ||
						Array.prototype.forEach.call(e.children, function (e) {
							if (i.has(e)) d(e)
							else
								try {
									var t = e.getAttribute(n),
										o = null !== t && "false" !== t,
										s = (ez.get(e) || 0) + 1,
										c = (a.get(e) || 0) + 1
									ez.set(e, s),
										a.set(e, c),
										l.push(e),
										1 === s && o && eM.set(e, !0),
										1 === c && e.setAttribute(r, "true"),
										o || e.setAttribute(n, "true")
								} catch (t) {
									console.error("aria-hidden: cannot operate on ", e, t)
								}
						})
				}
				return (
					d(t),
					i.clear(),
					eI++,
					function () {
						l.forEach(function (e) {
							var t = ez.get(e) - 1,
								o = a.get(e) - 1
							ez.set(e, t),
								a.set(e, o),
								t || (eM.has(e) || e.removeAttribute(n), eM.delete(e)),
								o || e.removeAttribute(r)
						}),
							--eI || ((ez = new WeakMap()), (ez = new WeakMap()), (eM = new WeakMap()), (eA = {}))
					}
				)
			},
			eW = function (e, t, r) {
				void 0 === r && (r = "data-aria-hidden")
				var n = Array.from(Array.isArray(e) ? e : [e]),
					o = t || ("u" < typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body)
				return o
					? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), e_(n, o, r, "aria-hidden"))
					: function () {
							return null
						}
			},
			eF = "Dialog",
			[e$, eB] = g(eF),
			[eU, eH] = e$(eF),
			eG = (e) => {
				let { __scopeDialog: t, children: r, open: n, defaultOpen: o, onOpenChange: a, modal: l = !0 } = e,
					i = u.useRef(null),
					s = u.useRef(null),
					[c, f] = x({ prop: n, defaultProp: o ?? !1, onChange: a, caller: eF })
				return (0, d.jsx)(eU, {
					scope: t,
					triggerRef: i,
					contentRef: s,
					contentId: y(),
					titleId: y(),
					descriptionId: y(),
					open: c,
					onOpenChange: f,
					onOpenToggle: u.useCallback(() => f((e) => !e), [f]),
					modal: l,
					children: r,
				})
			}
		eG.displayName = eF
		var eK = "DialogTrigger",
			eX = u.forwardRef((e, t) => {
				let { __scopeDialog: r, ...n } = e,
					o = eH(eK, r),
					a = (0, m.useComposedRefs)(t, o.triggerRef)
				return (0, d.jsx)(R.button, {
					type: "button",
					"aria-haspopup": "dialog",
					"aria-expanded": o.open,
					"aria-controls": o.contentId,
					"data-state": tn(o.open),
					...n,
					ref: a,
					onClick: (0, f.composeEventHandlers)(e.onClick, o.onOpenToggle),
				})
			})
		eX.displayName = eK
		var eY = "DialogPortal",
			[eq, eV] = e$(eY, { forceMount: void 0 }),
			eZ = (e) => {
				let { __scopeDialog: t, forceMount: r, children: n, container: o } = e,
					a = eH(eY, t)
				return (0, d.jsx)(eq, {
					scope: t,
					forceMount: r,
					children: u.Children.map(n, (e) =>
						(0, d.jsx)(H, {
							present: r || a.open,
							children: (0, d.jsx)(U, { asChild: !0, container: o, children: e }),
						}),
					),
				})
			}
		eZ.displayName = eY
		var eJ = "DialogOverlay",
			eQ = u.forwardRef((e, t) => {
				let r = eV(eJ, e.__scopeDialog),
					{ forceMount: n = r.forceMount, ...o } = e,
					a = eH(eJ, e.__scopeDialog)
				return a.modal
					? (0, d.jsx)(H, { present: n || a.open, children: (0, d.jsx)(e1, { ...o, ref: t }) })
					: null
			})
		eQ.displayName = eJ
		var e0 = E("DialogOverlay.RemoveScroll"),
			e1 = u.forwardRef((e, t) => {
				let { __scopeDialog: r, ...n } = e,
					o = eH(eJ, r)
				return (0, d.jsx)(eT, {
					as: e0,
					allowPinchZoom: !0,
					shards: [o.contentRef],
					children: (0, d.jsx)(R.div, {
						"data-state": tn(o.open),
						...n,
						ref: t,
						style: { pointerEvents: "auto", ...n.style },
					}),
				})
			}),
			e2 = "DialogContent",
			e6 = u.forwardRef((e, t) => {
				let r = eV(e2, e.__scopeDialog),
					{ forceMount: n = r.forceMount, ...o } = e,
					a = eH(e2, e.__scopeDialog)
				return (0, d.jsx)(H, {
					present: n || a.open,
					children: a.modal ? (0, d.jsx)(e5, { ...o, ref: t }) : (0, d.jsx)(e4, { ...o, ref: t }),
				})
			})
		e6.displayName = e2
		var e5 = u.forwardRef((e, t) => {
				let r = eH(e2, e.__scopeDialog),
					n = u.useRef(null),
					o = (0, m.useComposedRefs)(t, r.contentRef, n)
				return (
					u.useEffect(() => {
						let e = n.current
						if (e) return eW(e)
					}, []),
					(0, d.jsx)(e8, {
						...e,
						ref: o,
						trapFocus: r.open,
						disableOutsidePointerEvents: !0,
						onCloseAutoFocus: (0, f.composeEventHandlers)(e.onCloseAutoFocus, (e) => {
							e.preventDefault(), r.triggerRef.current?.focus()
						}),
						onPointerDownOutside: (0, f.composeEventHandlers)(e.onPointerDownOutside, (e) => {
							let t = e.detail.originalEvent,
								r = 0 === t.button && !0 === t.ctrlKey
							;(2 === t.button || r) && e.preventDefault()
						}),
						onFocusOutside: (0, f.composeEventHandlers)(e.onFocusOutside, (e) => e.preventDefault()),
					})
				)
			}),
			e4 = u.forwardRef((e, t) => {
				let r = eH(e2, e.__scopeDialog),
					n = u.useRef(!1),
					o = u.useRef(!1)
				return (0, d.jsx)(e8, {
					...e,
					ref: t,
					trapFocus: !1,
					disableOutsidePointerEvents: !1,
					onCloseAutoFocus: (t) => {
						e.onCloseAutoFocus?.(t),
							t.defaultPrevented || (n.current || r.triggerRef.current?.focus(), t.preventDefault()),
							(n.current = !1),
							(o.current = !1)
					},
					onInteractOutside: (t) => {
						e.onInteractOutside?.(t),
							t.defaultPrevented ||
								((n.current = !0), "pointerdown" === t.detail.originalEvent.type && (o.current = !0))
						let a = t.target
						r.triggerRef.current?.contains(a) && t.preventDefault(),
							"focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
					},
				})
			}),
			e8 = u.forwardRef((e, t) => {
				let { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: a, ...l } = e,
					i = eH(e2, r),
					s = u.useRef(null),
					c = (0, m.useComposedRefs)(t, s)
				return (
					u.useEffect(() => {
						let e = document.querySelectorAll("[data-radix-focus-guard]")
						return (
							document.body.insertAdjacentElement("afterbegin", e[0] ?? X()),
							document.body.insertAdjacentElement("beforeend", e[1] ?? X()),
							K++,
							() => {
								1 === K &&
									document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()),
									K--
							}
						)
					}, []),
					(0, d.jsxs)(d.Fragment, {
						children: [
							(0, d.jsx)(L, {
								asChild: !0,
								loop: !0,
								trapped: n,
								onMountAutoFocus: o,
								onUnmountAutoFocus: a,
								children: (0, d.jsx)(P, {
									role: "dialog",
									id: i.contentId,
									"aria-describedby": i.descriptionId,
									"aria-labelledby": i.titleId,
									"data-state": tn(i.open),
									...l,
									ref: c,
									onDismiss: () => i.onOpenChange(!1),
								}),
							}),
							(0, d.jsxs)(d.Fragment, {
								children: [
									(0, d.jsx)(ti, { titleId: i.titleId }),
									(0, d.jsx)(ts, { contentRef: s, descriptionId: i.descriptionId }),
								],
							}),
						],
					})
				)
			}),
			e9 = "DialogTitle",
			e3 = u.forwardRef((e, t) => {
				let { __scopeDialog: r, ...n } = e,
					o = eH(e9, r)
				return (0, d.jsx)(R.h2, { id: o.titleId, ...n, ref: t })
			})
		e3.displayName = e9
		var e7 = "DialogDescription",
			te = u.forwardRef((e, t) => {
				let { __scopeDialog: r, ...n } = e,
					o = eH(e7, r)
				return (0, d.jsx)(R.p, { id: o.descriptionId, ...n, ref: t })
			})
		te.displayName = e7
		var tt = "DialogClose",
			tr = u.forwardRef((e, t) => {
				let { __scopeDialog: r, ...n } = e,
					o = eH(tt, r)
				return (0, d.jsx)(R.button, {
					type: "button",
					...n,
					ref: t,
					onClick: (0, f.composeEventHandlers)(e.onClick, () => o.onOpenChange(!1)),
				})
			})
		function tn(e) {
			return e ? "open" : "closed"
		}
		tr.displayName = tt
		var to = "DialogTitleWarning",
			[ta, tl] = p(to, { contentName: e2, titleName: e9, docsSlug: "dialog" }),
			ti = ({ titleId: e }) => {
				let t = tl(to),
					r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`
				return (
					u.useEffect(() => {
						e && (document.getElementById(e) || console.error(r))
					}, [r, e]),
					null
				)
			},
			ts = ({ contentRef: e, descriptionId: t }) => {
				let r = tl("DialogDescriptionWarning"),
					n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${r.contentName}}.`
				return (
					u.useEffect(() => {
						let r = e.current?.getAttribute("aria-describedby")
						t && r && (document.getElementById(t) || console.warn(n))
					}, [n, e, t]),
					null
				)
			},
			tc = e.i(74209),
			td = e.i(45326)
		let tu = u.forwardRef(({ className: e, ...t }, r) =>
			(0, d.jsx)(eQ, {
				ref: r,
				className: (0, td.cn)(
					"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
					e,
				),
				...t,
			}),
		)
		tu.displayName = eQ.displayName
		let tf = u.forwardRef(({ className: e, children: t, ...r }, n) =>
			(0, d.jsxs)(eZ, {
				children: [
					(0, d.jsx)(tu, {}),
					(0, d.jsxs)(e6, {
						ref: n,
						className: (0, td.cn)(
							"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
							e,
						),
						...r,
						children: [
							t,
							(0, d.jsxs)(tr, {
								className:
									"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
								children: [
									(0, d.jsx)(tc.X, { className: "h-4 w-4" }),
									(0, d.jsx)("span", { className: "sr-only", children: "Close" }),
								],
							}),
						],
					}),
				],
			}),
		)
		tf.displayName = e6.displayName
		let tm = ({ className: e, ...t }) =>
			(0, d.jsx)("div", { className: (0, td.cn)("flex flex-col space-y-1.5 text-center sm:text-left", e), ...t })
		tm.displayName = "DialogHeader"
		let tp = ({ className: e, ...t }) =>
			(0, d.jsx)("div", {
				className: (0, td.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
				...t,
			})
		tp.displayName = "DialogFooter"
		let tg = u.forwardRef(({ className: e, ...t }, r) =>
			(0, d.jsx)(e3, {
				ref: r,
				className: (0, td.cn)("text-lg font-semibold leading-none tracking-tight", e),
				...t,
			}),
		)
		tg.displayName = e3.displayName
		let tb = u.forwardRef(({ className: e, ...t }, r) =>
			(0, d.jsx)(te, { ref: r, className: (0, td.cn)("text-sm text-muted-foreground", e), ...t }),
		)
		;(tb.displayName = te.displayName),
			e.s(
				[
					"Dialog",
					() => eG,
					"DialogClose",
					() => tr,
					"DialogContent",
					() => tf,
					"DialogDescription",
					() => tb,
					"DialogFooter",
					() => tp,
					"DialogHeader",
					() => tm,
					"DialogOverlay",
					() => tu,
					"DialogPortal",
					() => eZ,
					"DialogTitle",
					() => tg,
					"DialogTrigger",
					() => eX,
				],
				65221,
			)
	},
])
