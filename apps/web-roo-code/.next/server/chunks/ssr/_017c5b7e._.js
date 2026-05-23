module.exports = [
	97009,
	(a) => {
		"use strict"
		var b,
			c,
			d =
				/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
			e =
				((b = function (a) {
					return d.test(a) || (111 === a.charCodeAt(0) && 110 === a.charCodeAt(1) && 91 > a.charCodeAt(2))
				}),
				(c = Object.create(null)),
				function (a) {
					return void 0 === c[a] && (c[a] = b(a)), c[a]
				})
		a.s(["default", () => e], 97009)
	},
	57429,
	56195,
	61964,
	48187,
	53686,
	50283,
	42132,
	88412,
	(a) => {
		"use strict"
		let b,
			c,
			d,
			e = [
				"transformPerspective",
				"x",
				"y",
				"z",
				"translateX",
				"translateY",
				"translateZ",
				"scale",
				"scaleX",
				"scaleY",
				"rotate",
				"rotateX",
				"rotateY",
				"rotateZ",
				"skew",
				"skewX",
				"skewY",
			],
			f = new Set(e),
			g = (a, b, c) => (c > b ? b : c < a ? a : c),
			h = { test: (a) => "number" == typeof a, parse: parseFloat, transform: (a) => a },
			i = { ...h, transform: (a) => g(0, 1, a) },
			j = { ...h, default: 1 },
			k = (a) => Math.round(1e5 * a) / 1e5,
			l = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
			m =
				/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
			n = (a, b) => (c) =>
				!!(
					("string" == typeof c && m.test(c) && c.startsWith(a)) ||
					(b && null != c && Object.prototype.hasOwnProperty.call(c, b))
				),
			o = (a, b, c) => (d) => {
				if ("string" != typeof d) return d
				let [e, f, g, h] = d.match(l)
				return {
					[a]: parseFloat(e),
					[b]: parseFloat(f),
					[c]: parseFloat(g),
					alpha: void 0 !== h ? parseFloat(h) : 1,
				}
			},
			p = { ...h, transform: (a) => Math.round(g(0, 255, a)) },
			q = {
				test: n("rgb", "red"),
				parse: o("red", "green", "blue"),
				transform: ({ red: a, green: b, blue: c, alpha: d = 1 }) =>
					"rgba(" +
					p.transform(a) +
					", " +
					p.transform(b) +
					", " +
					p.transform(c) +
					", " +
					k(i.transform(d)) +
					")",
			},
			r = {
				test: n("#"),
				parse: function (a) {
					let b = "",
						c = "",
						d = "",
						e = ""
					return (
						a.length > 5
							? ((b = a.substring(1, 3)),
								(c = a.substring(3, 5)),
								(d = a.substring(5, 7)),
								(e = a.substring(7, 9)))
							: ((b = a.substring(1, 2)),
								(c = a.substring(2, 3)),
								(d = a.substring(3, 4)),
								(e = a.substring(4, 5)),
								(b += b),
								(c += c),
								(d += d),
								(e += e)),
						{
							red: parseInt(b, 16),
							green: parseInt(c, 16),
							blue: parseInt(d, 16),
							alpha: e ? parseInt(e, 16) / 255 : 1,
						}
					)
				},
				transform: q.transform,
			},
			s = (a) => ({
				test: (b) => "string" == typeof b && b.endsWith(a) && 1 === b.split(" ").length,
				parse: parseFloat,
				transform: (b) => `${b}${a}`,
			}),
			t = s("deg"),
			u = s("%"),
			v = s("px"),
			w = s("vh"),
			x = s("vw"),
			y = { ...u, parse: (a) => u.parse(a) / 100, transform: (a) => u.transform(100 * a) },
			z = {
				test: n("hsl", "hue"),
				parse: o("hue", "saturation", "lightness"),
				transform: ({ hue: a, saturation: b, lightness: c, alpha: d = 1 }) =>
					"hsla(" +
					Math.round(a) +
					", " +
					u.transform(k(b)) +
					", " +
					u.transform(k(c)) +
					", " +
					k(i.transform(d)) +
					")",
			},
			A = {
				test: (a) => q.test(a) || r.test(a) || z.test(a),
				parse: (a) => (q.test(a) ? q.parse(a) : z.test(a) ? z.parse(a) : r.parse(a)),
				transform: (a) =>
					"string" == typeof a ? a : a.hasOwnProperty("red") ? q.transform(a) : z.transform(a),
				getAnimatableNone: (a) => {
					let b = A.parse(a)
					return (b.alpha = 0), A.transform(b)
				},
			},
			B =
				/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
			C = "number",
			D = "color",
			E =
				/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu
		function F(a) {
			let b = a.toString(),
				c = [],
				d = { color: [], number: [], var: [] },
				e = [],
				f = 0,
				g = b
					.replace(
						E,
						(a) => (
							A.test(a)
								? (d.color.push(f), e.push(D), c.push(A.parse(a)))
								: a.startsWith("var(")
									? (d.var.push(f), e.push("var"), c.push(a))
									: (d.number.push(f), e.push(C), c.push(parseFloat(a))),
							++f,
							"${}"
						),
					)
					.split("${}")
			return { values: c, split: g, indexes: d, types: e }
		}
		function G(a) {
			return F(a).values
		}
		function H(a) {
			let { split: b, types: c } = F(a),
				d = b.length
			return (a) => {
				let e = ""
				for (let f = 0; f < d; f++)
					if (((e += b[f]), void 0 !== a[f])) {
						let b = c[f]
						b === C ? (e += k(a[f])) : b === D ? (e += A.transform(a[f])) : (e += a[f])
					}
				return e
			}
		}
		let I = (a) => ("number" == typeof a ? 0 : A.test(a) ? A.getAnimatableNone(a) : a),
			J = {
				test: function (a) {
					return isNaN(a) && "string" == typeof a && (a.match(l)?.length || 0) + (a.match(B)?.length || 0) > 0
				},
				parse: G,
				createTransformer: H,
				getAnimatableNone: function (a) {
					let b = G(a)
					return H(a)(b.map(I))
				},
			},
			K = new Set(["brightness", "contrast", "saturate", "opacity"])
		function L(a) {
			let [b, c] = a.slice(0, -1).split("(")
			if ("drop-shadow" === b) return a
			let [d] = c.match(l) || []
			if (!d) return a
			let e = c.replace(d, ""),
				f = +!!K.has(b)
			return d !== c && (f *= 100), b + "(" + f + e + ")"
		}
		let M = /\b([a-z-]*)\(.*?\)/gu,
			N = {
				...J,
				getAnimatableNone: (a) => {
					let b = a.match(M)
					return b ? b.map(L).join(" ") : a
				},
			},
			O = { ...h, transform: Math.round },
			P = {
				borderWidth: v,
				borderTopWidth: v,
				borderRightWidth: v,
				borderBottomWidth: v,
				borderLeftWidth: v,
				borderRadius: v,
				borderTopLeftRadius: v,
				borderTopRightRadius: v,
				borderBottomRightRadius: v,
				borderBottomLeftRadius: v,
				width: v,
				maxWidth: v,
				height: v,
				maxHeight: v,
				top: v,
				right: v,
				bottom: v,
				left: v,
				inset: v,
				insetBlock: v,
				insetBlockStart: v,
				insetBlockEnd: v,
				insetInline: v,
				insetInlineStart: v,
				insetInlineEnd: v,
				padding: v,
				paddingTop: v,
				paddingRight: v,
				paddingBottom: v,
				paddingLeft: v,
				paddingBlock: v,
				paddingBlockStart: v,
				paddingBlockEnd: v,
				paddingInline: v,
				paddingInlineStart: v,
				paddingInlineEnd: v,
				margin: v,
				marginTop: v,
				marginRight: v,
				marginBottom: v,
				marginLeft: v,
				marginBlock: v,
				marginBlockStart: v,
				marginBlockEnd: v,
				marginInline: v,
				marginInlineStart: v,
				marginInlineEnd: v,
				fontSize: v,
				backgroundPositionX: v,
				backgroundPositionY: v,
				rotate: t,
				rotateX: t,
				rotateY: t,
				rotateZ: t,
				scale: j,
				scaleX: j,
				scaleY: j,
				scaleZ: j,
				skew: t,
				skewX: t,
				skewY: t,
				distance: v,
				translateX: v,
				translateY: v,
				translateZ: v,
				x: v,
				y: v,
				z: v,
				perspective: v,
				transformPerspective: v,
				opacity: i,
				originX: y,
				originY: y,
				originZ: v,
				zIndex: O,
				fillOpacity: i,
				strokeOpacity: i,
				numOctaves: O,
			},
			Q = {
				...P,
				color: A,
				backgroundColor: A,
				outlineColor: A,
				fill: A,
				stroke: A,
				borderColor: A,
				borderTopColor: A,
				borderRightColor: A,
				borderBottomColor: A,
				borderLeftColor: A,
				filter: N,
				WebkitFilter: N,
			},
			R = (a) => Q[a],
			S = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
			T = () => ({ x: S(), y: S() }),
			U = () => ({ min: 0, max: 0 }),
			V = () => ({ x: U(), y: U() }),
			W = (a) => !!(a && a.getVelocity),
			X = new Set(["width", "height", "top", "left", "right", "bottom", ...e]),
			Y = (a) => (b) => b.test(a),
			Z = [h, v, u, t, x, w, { test: (a) => "auto" === a, parse: (a) => a }],
			$ = (a) => Z.find(Y(a)),
			_ = () => {},
			aa = () => {},
			ab = (a) => (b) => "string" == typeof b && b.startsWith(a),
			ac = ab("--"),
			ad = ab("var(--"),
			ae = (a) => !!ad(a) && af.test(a.split("/*")[0].trim()),
			af = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
		function ag(a) {
			return "string" == typeof a && a.split("/*")[0].includes("var(--")
		}
		let ah = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
			ai = (a) => (180 * a) / Math.PI,
			aj = (a) => al(ai(Math.atan2(a[1], a[0]))),
			ak = {
				x: 4,
				y: 5,
				translateX: 4,
				translateY: 5,
				scaleX: 0,
				scaleY: 3,
				scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
				rotate: aj,
				rotateZ: aj,
				skewX: (a) => ai(Math.atan(a[1])),
				skewY: (a) => ai(Math.atan(a[2])),
				skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2,
			},
			al = (a) => ((a %= 360) < 0 && (a += 360), a),
			am = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]),
			an = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]),
			ao = {
				x: 12,
				y: 13,
				z: 14,
				translateX: 12,
				translateY: 13,
				translateZ: 14,
				scaleX: am,
				scaleY: an,
				scale: (a) => (am(a) + an(a)) / 2,
				rotateX: (a) => al(ai(Math.atan2(a[6], a[5]))),
				rotateY: (a) => al(ai(Math.atan2(-a[2], a[0]))),
				rotateZ: aj,
				rotate: aj,
				skewX: (a) => ai(Math.atan(a[4])),
				skewY: (a) => ai(Math.atan(a[1])),
				skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2,
			}
		function ap(a) {
			return +!!a.includes("scale")
		}
		function aq(a, b) {
			let c, d
			if (!a || "none" === a) return ap(b)
			let e = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u)
			if (e) (c = ao), (d = e)
			else {
				let b = a.match(/^matrix\(([-\d.e\s,]+)\)$/u)
				;(c = ak), (d = b)
			}
			if (!d) return ap(b)
			let f = c[b],
				g = d[1].split(",").map(ar)
			return "function" == typeof f ? f(g) : g[f]
		}
		function ar(a) {
			return parseFloat(a.trim())
		}
		let as = (a) => a === h || a === v,
			at = new Set(["x", "y", "z"]),
			au = e.filter((a) => !at.has(a)),
			av = {
				width: ({ x: a }, { paddingLeft: b = "0", paddingRight: c = "0" }) =>
					a.max - a.min - parseFloat(b) - parseFloat(c),
				height: ({ y: a }, { paddingTop: b = "0", paddingBottom: c = "0" }) =>
					a.max - a.min - parseFloat(b) - parseFloat(c),
				top: (a, { top: b }) => parseFloat(b),
				left: (a, { left: b }) => parseFloat(b),
				bottom: ({ y: a }, { top: b }) => parseFloat(b) + (a.max - a.min),
				right: ({ x: a }, { left: b }) => parseFloat(b) + (a.max - a.min),
				x: (a, { transform: b }) => aq(b, "x"),
				y: (a, { transform: b }) => aq(b, "y"),
			}
		;(av.translateX = av.x), (av.translateY = av.y)
		let aw = (a) => a,
			ax = {},
			ay = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
		function az(a, b) {
			let c = !1,
				d = !0,
				e = { delta: 0, timestamp: 0, isProcessing: !1 },
				f = () => (c = !0),
				g = ay.reduce(
					(a, c) => (
						(a[c] = (function (a, b) {
							let c = new Set(),
								d = new Set(),
								e = !1,
								f = !1,
								g = new WeakSet(),
								h = { delta: 0, timestamp: 0, isProcessing: !1 },
								i = 0
							function j(b) {
								g.has(b) && (k.schedule(b), a()), i++, b(h)
							}
							let k = {
								schedule: (a, b = !1, f = !1) => {
									let h = f && e ? c : d
									return b && g.add(a), h.has(a) || h.add(a), a
								},
								cancel: (a) => {
									d.delete(a), g.delete(a)
								},
								process: (a) => {
									if (((h = a), e)) {
										f = !0
										return
									}
									;(e = !0),
										([c, d] = [d, c]),
										c.forEach(j),
										b,
										(i = 0),
										c.clear(),
										(e = !1),
										f && ((f = !1), k.process(a))
								},
							}
							return k
						})(f, b ? c : void 0)),
						a
					),
					{},
				),
				{
					setup: h,
					read: i,
					resolveKeyframes: j,
					preUpdate: k,
					update: l,
					preRender: m,
					render: n,
					postRender: o,
				} = g,
				p = () => {
					let f = ax.useManualTiming ? e.timestamp : performance.now()
					;(c = !1),
						ax.useManualTiming || (e.delta = d ? 1e3 / 60 : Math.max(Math.min(f - e.timestamp, 40), 1)),
						(e.timestamp = f),
						(e.isProcessing = !0),
						h.process(e),
						i.process(e),
						j.process(e),
						k.process(e),
						l.process(e),
						m.process(e),
						n.process(e),
						o.process(e),
						(e.isProcessing = !1),
						c && b && ((d = !1), a(p))
				}
			return {
				schedule: ay.reduce((b, f) => {
					let h = g[f]
					return (
						(b[f] = (b, f = !1, g = !1) => (
							!c && ((c = !0), (d = !0), e.isProcessing || a(p)), h.schedule(b, f, g)
						)),
						b
					)
				}, {}),
				cancel: (a) => {
					for (let b = 0; b < ay.length; b++) g[ay[b]].cancel(a)
				},
				state: e,
				steps: g,
			}
		}
		let {
				schedule: aA,
				cancel: aB,
				state: aC,
				steps: aD,
			} = az("u" > typeof requestAnimationFrame ? requestAnimationFrame : aw, !0),
			aE = new Set(),
			aF = !1,
			aG = !1,
			aH = !1
		function aI() {
			if (aG) {
				let a = Array.from(aE).filter((a) => a.needsMeasurement),
					b = new Set(a.map((a) => a.element)),
					c = new Map()
				b.forEach((a) => {
					let b,
						d =
							((b = []),
							au.forEach((c) => {
								let d = a.getValue(c)
								void 0 !== d && (b.push([c, d.get()]), d.set(+!!c.startsWith("scale")))
							}),
							b)
					d.length && (c.set(a, d), a.render())
				}),
					a.forEach((a) => a.measureInitialState()),
					b.forEach((a) => {
						a.render()
						let b = c.get(a)
						b &&
							b.forEach(([b, c]) => {
								a.getValue(b)?.set(c)
							})
					}),
					a.forEach((a) => a.measureEndState()),
					a.forEach((a) => {
						void 0 !== a.suspendedScrollY && window.scrollTo(0, a.suspendedScrollY)
					})
			}
			;(aG = !1), (aF = !1), aE.forEach((a) => a.complete(aH)), aE.clear()
		}
		function aJ() {
			aE.forEach((a) => {
				a.readKeyframes(), a.needsMeasurement && (aG = !0)
			})
		}
		class aK {
			constructor(a, b, c, d, e, f = !1) {
				;(this.state = "pending"),
					(this.isAsync = !1),
					(this.needsMeasurement = !1),
					(this.unresolvedKeyframes = [...a]),
					(this.onComplete = b),
					(this.name = c),
					(this.motionValue = d),
					(this.element = e),
					(this.isAsync = f)
			}
			scheduleResolve() {
				;(this.state = "scheduled"),
					this.isAsync
						? (aE.add(this), aF || ((aF = !0), aA.read(aJ), aA.resolveKeyframes(aI)))
						: (this.readKeyframes(), this.complete())
			}
			readKeyframes() {
				let { unresolvedKeyframes: a, name: b, element: c, motionValue: d } = this
				if (null === a[0]) {
					let e = d?.get(),
						f = a[a.length - 1]
					if (void 0 !== e) a[0] = e
					else if (c && b) {
						let d = c.readValue(b, f)
						null != d && (a[0] = d)
					}
					void 0 === a[0] && (a[0] = f), d && void 0 === e && d.set(a[0])
				}
				for (let b = 1; b < a.length; b++) a[b] ?? (a[b] = a[b - 1])
			}
			setFinalKeyframe() {}
			measureInitialState() {}
			renderEndStyles() {}
			measureEndState() {}
			complete(a = !1) {
				;(this.state = "complete"),
					this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, a),
					aE.delete(this)
			}
			cancel() {
				"scheduled" === this.state && (aE.delete(this), (this.state = "pending"))
			}
			resume() {
				"pending" === this.state && this.scheduleResolve()
			}
		}
		function aL(a, b) {
			let c = R(a)
			return c !== N && (c = J), c.getAnimatableNone ? c.getAnimatableNone(b) : void 0
		}
		let aM = new Set(["auto", "none", "0"])
		class aN extends aK {
			constructor(a, b, c, d, e) {
				super(a, b, c, d, e, !0)
			}
			readKeyframes() {
				let { unresolvedKeyframes: a, element: b, name: c } = this
				if (!b || !b.current) return
				super.readKeyframes()
				for (let c = 0; c < a.length; c++) {
					let d = a[c]
					if ("string" == typeof d && ae((d = d.trim()))) {
						let e = (function a(b, c, d = 1) {
							aa(
								d <= 4,
								`Max CSS variable fallback depth detected in property "${b}". This may indicate a circular fallback dependency.`,
								"max-css-var-depth",
							)
							let [e, f] = (function (a) {
								let b = ah.exec(a)
								if (!b) return [,]
								let [, c, d, e] = b
								return [`--${c ?? d}`, e]
							})(b)
							if (!e) return
							let g = window.getComputedStyle(c).getPropertyValue(e)
							if (g) {
								let a = g.trim()
								return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a) ? parseFloat(a) : a
							}
							return ae(f) ? a(f, c, d + 1) : f
						})(d, b.current)
						void 0 !== e && (a[c] = e), c === a.length - 1 && (this.finalKeyframe = d)
					}
				}
				if ((this.resolveNoneKeyframes(), !X.has(c) || 2 !== a.length)) return
				let [d, e] = a,
					f = $(d),
					g = $(e)
				if (ag(d) !== ag(e) && av[c]) {
					this.needsMeasurement = !0
					return
				}
				if (f !== g)
					if (as(f) && as(g))
						for (let b = 0; b < a.length; b++) {
							let c = a[b]
							"string" == typeof c && (a[b] = parseFloat(c))
						}
					else av[c] && (this.needsMeasurement = !0)
			}
			resolveNoneKeyframes() {
				let { unresolvedKeyframes: a, name: b } = this,
					c = []
				for (let b = 0; b < a.length; b++)
					(null === a[b] ||
						(function (a) {
							if ("number" == typeof a) return 0 === a
							if (null === a) return !0
							return "none" === a || "0" === a || /^0[^.\s]+$/u.test(a)
						})(a[b])) &&
						c.push(b)
				c.length &&
					(function (a, b, c) {
						let d,
							e = 0
						for (; e < a.length && !d; ) {
							let b = a[e]
							"string" == typeof b && !aM.has(b) && F(b).values.length && (d = a[e]), e++
						}
						if (d && c) for (let e of b) a[e] = aL(c, d)
					})(a, c, b)
			}
			measureInitialState() {
				let { element: a, unresolvedKeyframes: b, name: c } = this
				if (!a || !a.current) return
				"height" === c && (this.suspendedScrollY = window.pageYOffset),
					(this.measuredOrigin = av[c](a.measureViewportBox(), window.getComputedStyle(a.current))),
					(b[0] = this.measuredOrigin)
				let d = b[b.length - 1]
				void 0 !== d && a.getValue(c, d).jump(d, !1)
			}
			measureEndState() {
				let { element: a, name: b, unresolvedKeyframes: c } = this
				if (!a || !a.current) return
				let d = a.getValue(b)
				d && d.jump(this.measuredOrigin, !1)
				let e = c.length - 1,
					f = c[e]
				;(c[e] = av[b](a.measureViewportBox(), window.getComputedStyle(a.current))),
					null !== f && void 0 === this.finalKeyframe && (this.finalKeyframe = f),
					this.removedTransforms?.length &&
						this.removedTransforms.forEach(([b, c]) => {
							a.getValue(b).set(c)
						}),
					this.resolveNoneKeyframes()
			}
		}
		function aO(a, b) {
			;-1 === a.indexOf(b) && a.push(b)
		}
		function aP(a, b) {
			let c = a.indexOf(b)
			c > -1 && a.splice(c, 1)
		}
		class aQ {
			constructor() {
				this.subscriptions = []
			}
			add(a) {
				return aO(this.subscriptions, a), () => aP(this.subscriptions, a)
			}
			notify(a, b, c) {
				let d = this.subscriptions.length
				if (d)
					if (1 === d) this.subscriptions[0](a, b, c)
					else
						for (let e = 0; e < d; e++) {
							let d = this.subscriptions[e]
							d && d(a, b, c)
						}
			}
			getSize() {
				return this.subscriptions.length
			}
			clear() {
				this.subscriptions.length = 0
			}
		}
		let { schedule: aR } = az(queueMicrotask, !1)
		function aS() {
			c = void 0
		}
		let aT = {
			now: () => (
				void 0 === c && aT.set(aC.isProcessing || ax.useManualTiming ? aC.timestamp : performance.now()), c
			),
			set: (a) => {
				;(c = a), queueMicrotask(aS)
			},
		}
		class aU {
			constructor(a, b = {}) {
				;(this.canTrackVelocity = null),
					(this.events = {}),
					(this.updateAndNotify = (a) => {
						let b = aT.now()
						if (
							(this.updatedAt !== b && this.setPrevFrameValue(),
							(this.prev = this.current),
							this.setCurrent(a),
							this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
						)
							for (let a of this.dependents) a.dirty()
					}),
					(this.hasAnimated = !1),
					this.setCurrent(a),
					(this.owner = b.owner)
			}
			setCurrent(a) {
				;(this.current = a),
					(this.updatedAt = aT.now()),
					null === this.canTrackVelocity &&
						void 0 !== a &&
						(this.canTrackVelocity = !isNaN(parseFloat(this.current)))
			}
			setPrevFrameValue(a = this.current) {
				;(this.prevFrameValue = a), (this.prevUpdatedAt = this.updatedAt)
			}
			onChange(a) {
				return this.on("change", a)
			}
			on(a, b) {
				this.events[a] || (this.events[a] = new aQ())
				let c = this.events[a].add(b)
				return "change" === a
					? () => {
							c(),
								aA.read(() => {
									this.events.change.getSize() || this.stop()
								})
						}
					: c
			}
			clearListeners() {
				for (let a in this.events) this.events[a].clear()
			}
			attach(a, b) {
				;(this.passiveEffect = a), (this.stopPassiveEffect = b)
			}
			set(a) {
				this.passiveEffect ? this.passiveEffect(a, this.updateAndNotify) : this.updateAndNotify(a)
			}
			setWithVelocity(a, b, c) {
				this.set(b), (this.prev = void 0), (this.prevFrameValue = a), (this.prevUpdatedAt = this.updatedAt - c)
			}
			jump(a, b = !0) {
				this.updateAndNotify(a),
					(this.prev = a),
					(this.prevUpdatedAt = this.prevFrameValue = void 0),
					b && this.stop(),
					this.stopPassiveEffect && this.stopPassiveEffect()
			}
			dirty() {
				this.events.change?.notify(this.current)
			}
			addDependent(a) {
				this.dependents || (this.dependents = new Set()), this.dependents.add(a)
			}
			removeDependent(a) {
				this.dependents && this.dependents.delete(a)
			}
			get() {
				return b && b.push(this), this.current
			}
			getPrevious() {
				return this.prev
			}
			getVelocity() {
				var a
				let b = aT.now()
				if (!this.canTrackVelocity || void 0 === this.prevFrameValue || b - this.updatedAt > 30) return 0
				let c = Math.min(this.updatedAt - this.prevUpdatedAt, 30)
				return (a = parseFloat(this.current) - parseFloat(this.prevFrameValue)), c ? (1e3 / c) * a : 0
			}
			start(a) {
				return (
					this.stop(),
					new Promise((b) => {
						;(this.hasAnimated = !0),
							(this.animation = a(b)),
							this.events.animationStart && this.events.animationStart.notify()
					}).then(() => {
						this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
					})
				)
			}
			stop() {
				this.animation &&
					(this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
					this.clearAnimation()
			}
			isAnimating() {
				return !!this.animation
			}
			clearAnimation() {
				delete this.animation
			}
			destroy() {
				this.dependents?.clear(),
					this.events.destroy?.notify(),
					this.clearListeners(),
					this.stop(),
					this.stopPassiveEffect && this.stopPassiveEffect()
			}
		}
		function aV(a, b) {
			return new aU(a, b)
		}
		let aW = [...Z, A, J],
			aX = { current: !1 },
			aY = new WeakMap()
		function aZ(a) {
			return null !== a && "object" == typeof a && "function" == typeof a.start
		}
		function a$(a) {
			return "string" == typeof a || Array.isArray(a)
		}
		let a_ = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
			a0 = ["initial", ...a_]
		function a1(a) {
			return aZ(a.animate) || a0.some((b) => a$(a[b]))
		}
		function a2(a) {
			return !!(a1(a) || a.variants)
		}
		function a3(a) {
			let b = [{}, {}]
			return (
				a?.values.forEach((a, c) => {
					;(b[0][c] = a.get()), (b[1][c] = a.getVelocity())
				}),
				b
			)
		}
		function a4(a, b, c, d) {
			if ("function" == typeof b) {
				let [e, f] = a3(d)
				b = b(void 0 !== c ? c : a.custom, e, f)
			}
			if (("string" == typeof b && (b = a.variants && a.variants[b]), "function" == typeof b)) {
				let [e, f] = a3(d)
				b = b(void 0 !== c ? c : a.custom, e, f)
			}
			return b
		}
		let a5 = [
				"AnimationStart",
				"AnimationComplete",
				"Update",
				"BeforeLayoutMeasure",
				"LayoutMeasure",
				"LayoutAnimationStart",
				"LayoutAnimationComplete",
			],
			a6 = {}
		class a7 {
			scrapeMotionValuesFromProps(a, b, c) {
				return {}
			}
			constructor(
				{
					parent: a,
					props: b,
					presenceContext: c,
					reducedMotionConfig: d,
					blockInitialAnimation: e,
					visualState: f,
				},
				g = {},
			) {
				;(this.current = null),
					(this.children = new Set()),
					(this.isVariantNode = !1),
					(this.isControllingVariants = !1),
					(this.shouldReduceMotion = null),
					(this.values = new Map()),
					(this.KeyframeResolver = aK),
					(this.features = {}),
					(this.valueSubscriptions = new Map()),
					(this.prevMotionValues = {}),
					(this.events = {}),
					(this.propEventSubscriptions = {}),
					(this.notifyUpdate = () => this.notify("Update", this.latestValues)),
					(this.render = () => {
						this.current &&
							(this.triggerBuild(),
							this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
					}),
					(this.renderScheduledAt = 0),
					(this.scheduleRender = () => {
						let a = aT.now()
						this.renderScheduledAt < a && ((this.renderScheduledAt = a), aA.render(this.render, !1, !0))
					})
				const { latestValues: h, renderState: i } = f
				;(this.latestValues = h),
					(this.baseTarget = { ...h }),
					(this.initialValues = b.initial ? { ...h } : {}),
					(this.renderState = i),
					(this.parent = a),
					(this.props = b),
					(this.presenceContext = c),
					(this.depth = a ? a.depth + 1 : 0),
					(this.reducedMotionConfig = d),
					(this.options = g),
					(this.blockInitialAnimation = !!e),
					(this.isControllingVariants = a1(b)),
					(this.isVariantNode = a2(b)),
					this.isVariantNode && (this.variantChildren = new Set()),
					(this.manuallyAnimateOnMount = !!(a && a.current))
				const { willChange: j, ...k } = this.scrapeMotionValuesFromProps(b, {}, this)
				for (const a in k) {
					const b = k[a]
					void 0 !== h[a] && W(b) && b.set(h[a])
				}
			}
			mount(a) {
				;(this.current = a),
					aY.set(a, this),
					this.projection && !this.projection.instance && this.projection.mount(a),
					this.parent &&
						this.isVariantNode &&
						!this.isControllingVariants &&
						(this.removeFromVariantTree = this.parent.addVariantChild(this)),
					this.values.forEach((a, b) => this.bindToMotionValue(b, a)),
					"never" === this.reducedMotionConfig
						? (this.shouldReduceMotion = !1)
						: "always" === this.reducedMotionConfig
							? (this.shouldReduceMotion = !0)
							: (aX.current || (aX.current = !0), (this.shouldReduceMotion = null)),
					this.parent?.addChild(this),
					this.update(this.props, this.presenceContext)
			}
			unmount() {
				for (let a in (this.projection && this.projection.unmount(),
				aB(this.notifyUpdate),
				aB(this.render),
				this.valueSubscriptions.forEach((a) => a()),
				this.valueSubscriptions.clear(),
				this.removeFromVariantTree && this.removeFromVariantTree(),
				this.parent?.removeChild(this),
				this.events))
					this.events[a].clear()
				for (let a in this.features) {
					let b = this.features[a]
					b && (b.unmount(), (b.isMounted = !1))
				}
				this.current = null
			}
			addChild(a) {
				this.children.add(a),
					this.enteringChildren ?? (this.enteringChildren = new Set()),
					this.enteringChildren.add(a)
			}
			removeChild(a) {
				this.children.delete(a), this.enteringChildren && this.enteringChildren.delete(a)
			}
			bindToMotionValue(a, b) {
				let c
				this.valueSubscriptions.has(a) && this.valueSubscriptions.get(a)()
				let d = f.has(a)
				d && this.onBindTransform && this.onBindTransform()
				let e = b.on("change", (b) => {
					;(this.latestValues[a] = b),
						this.props.onUpdate && aA.preRender(this.notifyUpdate),
						d && this.projection && (this.projection.isTransformDirty = !0),
						this.scheduleRender()
				})
				this.valueSubscriptions.set(a, () => {
					e(), c && c(), b.owner && b.stop()
				})
			}
			sortNodePosition(a) {
				return this.current && this.sortInstanceNodePosition && this.type === a.type
					? this.sortInstanceNodePosition(this.current, a.current)
					: 0
			}
			updateFeatures() {
				let a = "animation"
				for (a in a6) {
					let b = a6[a]
					if (!b) continue
					let { isEnabled: c, Feature: d } = b
					if (
						(!this.features[a] && d && c(this.props) && (this.features[a] = new d(this)), this.features[a])
					) {
						let b = this.features[a]
						b.isMounted ? b.update() : (b.mount(), (b.isMounted = !0))
					}
				}
			}
			triggerBuild() {
				this.build(this.renderState, this.latestValues, this.props)
			}
			measureViewportBox() {
				return this.current ? this.measureInstanceViewportBox(this.current, this.props) : V()
			}
			getStaticValue(a) {
				return this.latestValues[a]
			}
			setStaticValue(a, b) {
				this.latestValues[a] = b
			}
			update(a, b) {
				;(a.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
					(this.prevProps = this.props),
					(this.props = a),
					(this.prevPresenceContext = this.presenceContext),
					(this.presenceContext = b)
				for (let b = 0; b < a5.length; b++) {
					let c = a5[b]
					this.propEventSubscriptions[c] &&
						(this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c])
					let d = a["on" + c]
					d && (this.propEventSubscriptions[c] = this.on(c, d))
				}
				;(this.prevMotionValues = (function (a, b, c) {
					for (let d in b) {
						let e = b[d],
							f = c[d]
						if (W(e)) a.addValue(d, e)
						else if (W(f)) a.addValue(d, aV(e, { owner: a }))
						else if (f !== e)
							if (a.hasValue(d)) {
								let b = a.getValue(d)
								!0 === b.liveStyle ? b.jump(e) : b.hasAnimated || b.set(e)
							} else {
								let b = a.getStaticValue(d)
								a.addValue(d, aV(void 0 !== b ? b : e, { owner: a }))
							}
					}
					for (let d in c) void 0 === b[d] && a.removeValue(d)
					return b
				})(this, this.scrapeMotionValuesFromProps(a, this.prevProps || {}, this), this.prevMotionValues)),
					this.handleChildMotionValue && this.handleChildMotionValue()
			}
			getProps() {
				return this.props
			}
			getVariant(a) {
				return this.props.variants ? this.props.variants[a] : void 0
			}
			getDefaultTransition() {
				return this.props.transition
			}
			getTransformPagePoint() {
				return this.props.transformPagePoint
			}
			getClosestVariantNode() {
				return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
			}
			addVariantChild(a) {
				let b = this.getClosestVariantNode()
				if (b) return b.variantChildren && b.variantChildren.add(a), () => b.variantChildren.delete(a)
			}
			addValue(a, b) {
				let c = this.values.get(a)
				b !== c &&
					(c && this.removeValue(a),
					this.bindToMotionValue(a, b),
					this.values.set(a, b),
					(this.latestValues[a] = b.get()))
			}
			removeValue(a) {
				this.values.delete(a)
				let b = this.valueSubscriptions.get(a)
				b && (b(), this.valueSubscriptions.delete(a)),
					delete this.latestValues[a],
					this.removeValueFromRenderState(a, this.renderState)
			}
			hasValue(a) {
				return this.values.has(a)
			}
			getValue(a, b) {
				if (this.props.values && this.props.values[a]) return this.props.values[a]
				let c = this.values.get(a)
				return (
					void 0 === c &&
						void 0 !== b &&
						((c = aV(null === b ? void 0 : b, { owner: this })), this.addValue(a, c)),
					c
				)
			}
			readValue(a, b) {
				let c =
					void 0 === this.latestValues[a] && this.current
						? (this.getBaseTargetFromProps(this.props, a) ??
							this.readValueFromInstance(this.current, a, this.options))
						: this.latestValues[a]
				if (null != c) {
					let d, e
					if (
						"string" == typeof c &&
						((d = c), /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(d) || ((e = c), /^0[^.\s]+$/u.test(e)))
					)
						c = parseFloat(c)
					else {
						let d
						;(d = c), !aW.find(Y(d)) && J.test(b) && (c = aL(a, b))
					}
					this.setBaseTarget(a, W(c) ? c.get() : c)
				}
				return W(c) ? c.get() : c
			}
			setBaseTarget(a, b) {
				this.baseTarget[a] = b
			}
			getBaseTarget(a) {
				let b,
					{ initial: c } = this.props
				if ("string" == typeof c || "object" == typeof c) {
					let d = a4(this.props, c, this.presenceContext?.custom)
					d && (b = d[a])
				}
				if (c && void 0 !== b) return b
				let d = this.getBaseTargetFromProps(this.props, a)
				return void 0 === d || W(d)
					? void 0 !== this.initialValues[a] && void 0 === b
						? void 0
						: this.baseTarget[a]
					: d
			}
			on(a, b) {
				return this.events[a] || (this.events[a] = new aQ()), this.events[a].add(b)
			}
			notify(a, ...b) {
				this.events[a] && this.events[a].notify(...b)
			}
			scheduleRenderMicrotask() {
				aR.render(this.render)
			}
		}
		class a8 extends a7 {
			constructor() {
				super(...arguments), (this.KeyframeResolver = aN)
			}
			sortInstanceNodePosition(a, b) {
				return 2 & a.compareDocumentPosition(b) ? 1 : -1
			}
			getBaseTargetFromProps(a, b) {
				let c = a.style
				return c ? c[b] : void 0
			}
			removeValueFromRenderState(a, { vars: b, style: c }) {
				delete b[a], delete c[a]
			}
			handleChildMotionValue() {
				this.childSubscription && (this.childSubscription(), delete this.childSubscription)
				let { children: a } = this.props
				W(a) &&
					(this.childSubscription = a.on("change", (a) => {
						this.current && (this.current.textContent = `${a}`)
					}))
			}
		}
		function a9(a) {
			return a.replace(/([A-Z])/g, (a) => `-${a.toLowerCase()}`)
		}
		let ba = (a, b) => (b && "number" == typeof a ? b.transform(a) : a),
			bb = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
			bc = e.length
		function bd(a, b, c) {
			let { style: d, vars: g, transformOrigin: h } = a,
				i = !1,
				j = !1
			for (let a in b) {
				let c = b[a]
				if (f.has(a)) {
					i = !0
					continue
				}
				if (ac(a)) {
					g[a] = c
					continue
				}
				{
					let b = ba(c, P[a])
					a.startsWith("origin") ? ((j = !0), (h[a] = b)) : (d[a] = b)
				}
			}
			if (
				(!b.transform &&
					(i || c
						? (d.transform = (function (a, b, c) {
								let d = "",
									f = !0
								for (let g = 0; g < bc; g++) {
									let h = e[g],
										i = a[h]
									if (void 0 === i) continue
									let j = !0
									if ("number" == typeof i) j = i === +!!h.startsWith("scale")
									else {
										let a = parseFloat(i)
										j = h.startsWith("scale") ? 1 === a : 0 === a
									}
									if (!j || c) {
										let a = ba(i, P[h])
										if (!j) {
											f = !1
											let b = bb[h] || h
											d += `${b}(${a}) `
										}
										c && (b[h] = a)
									}
								}
								return (d = d.trim()), c ? (d = c(b, f ? "" : d)) : f && (d = "none"), d
							})(b, a.transform, c))
						: d.transform && (d.transform = "none")),
				j)
			) {
				let { originX: a = "50%", originY: b = "50%", originZ: c = 0 } = h
				d.transformOrigin = `${a} ${b} ${c}`
			}
		}
		let be = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
			bf = { offset: "strokeDashoffset", array: "strokeDasharray" },
			bg = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"]
		function bh(
			a,
			{ attrX: b, attrY: c, attrScale: d, pathLength: e, pathSpacing: f = 1, pathOffset: g = 0, ...h },
			i,
			j,
			k,
		) {
			if ((bd(a, h, j), i)) {
				a.style.viewBox && (a.attrs.viewBox = a.style.viewBox)
				return
			}
			;(a.attrs = a.style), (a.style = {})
			let { attrs: l, style: m } = a
			for (let a of (l.transform && ((m.transform = l.transform), delete l.transform),
			(m.transform || l.transformOrigin) &&
				((m.transformOrigin = l.transformOrigin ?? "50% 50%"), delete l.transformOrigin),
			m.transform && ((m.transformBox = k?.transformBox ?? "fill-box"), delete l.transformBox),
			bg))
				void 0 !== l[a] && ((m[a] = l[a]), delete l[a])
			void 0 !== b && (l.x = b),
				void 0 !== c && (l.y = c),
				void 0 !== d && (l.scale = d),
				void 0 !== e &&
					(function (a, b, c = 1, d = 0, e = !0) {
						a.pathLength = 1
						let f = e ? be : bf
						;(a[f.offset] = `${-d}`), (a[f.array] = `${b} ${c}`)
					})(l, e, f, g, !1)
		}
		let bi = new Set([
				"baseFrequency",
				"diffuseConstant",
				"kernelMatrix",
				"kernelUnitLength",
				"keySplines",
				"keyTimes",
				"limitingConeAngle",
				"markerHeight",
				"markerWidth",
				"numOctaves",
				"targetX",
				"targetY",
				"surfaceScale",
				"specularConstant",
				"specularExponent",
				"stdDeviation",
				"tableValues",
				"viewBox",
				"gradientTransform",
				"pathLength",
				"startOffset",
				"textLength",
				"lengthAdjust",
			]),
			bj = (a) => "string" == typeof a && "svg" === a.toLowerCase()
		function bk(a, { style: b, vars: c }, d, e) {
			let f,
				g = a.style
			for (f in b) g[f] = b[f]
			for (f in (e?.applyProjectionStyles(g, d), c)) g.setProperty(f, c[f])
		}
		function bl(a, b) {
			return b.max === b.min ? 0 : (a / (b.max - b.min)) * 100
		}
		let bm = {
				correct: (a, b) => {
					if (!b.target) return a
					if ("string" == typeof a)
						if (!v.test(a)) return a
						else a = parseFloat(a)
					let c = bl(a, b.target.x),
						d = bl(a, b.target.y)
					return `${c}% ${d}%`
				},
			},
			bn = (a, b, c) => a + (b - a) * c,
			bo = {
				borderRadius: {
					...bm,
					applyTo: [
						"borderTopLeftRadius",
						"borderTopRightRadius",
						"borderBottomLeftRadius",
						"borderBottomRightRadius",
					],
				},
				borderTopLeftRadius: bm,
				borderTopRightRadius: bm,
				borderBottomLeftRadius: bm,
				borderBottomRightRadius: bm,
				boxShadow: {
					correct: (a, { treeScale: b, projectionDelta: c }) => {
						let d = J.parse(a)
						if (d.length > 5) return a
						let e = J.createTransformer(a),
							f = +("number" != typeof d[0]),
							g = c.x.scale * b.x,
							h = c.y.scale * b.y
						;(d[0 + f] /= g), (d[1 + f] /= h)
						let i = bn(g, h, 0.5)
						return (
							"number" == typeof d[2 + f] && (d[2 + f] /= i),
							"number" == typeof d[3 + f] && (d[3 + f] /= i),
							e(d)
						)
					},
				},
			}
		function bp(a, { layout: b, layoutId: c }) {
			return f.has(a) || a.startsWith("origin") || ((b || void 0 !== c) && (!!bo[a] || "opacity" === a))
		}
		function bq(a, b, c) {
			let d = a.style,
				e = b?.style,
				f = {}
			if (!d) return f
			for (let b in d)
				(W(d[b]) || (e && W(e[b])) || bp(b, a) || c?.getValue(b)?.liveStyle !== void 0) && (f[b] = d[b])
			return f
		}
		function br(a, b, c) {
			let d = bq(a, b, c)
			for (let c in a)
				(W(a[c]) || W(b[c])) &&
					(d[-1 !== e.indexOf(c) ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c] = a[c])
			return d
		}
		class bs extends a8 {
			constructor() {
				super(...arguments), (this.type = "svg"), (this.isSVGTag = !1), (this.measureInstanceViewportBox = V)
			}
			getBaseTargetFromProps(a, b) {
				return a[b]
			}
			readValueFromInstance(a, b) {
				if (f.has(b)) {
					let a = R(b)
					return (a && a.default) || 0
				}
				return (b = bi.has(b) ? b : a9(b)), a.getAttribute(b)
			}
			scrapeMotionValuesFromProps(a, b, c) {
				return br(a, b, c)
			}
			build(a, b, c) {
				bh(a, b, this.isSVGTag, c.transformTemplate, c.style)
			}
			renderInstance(a, b, c, d) {
				for (let c in (bk(a, b, void 0, d), b.attrs)) a.setAttribute(bi.has(c) ? c : a9(c), b.attrs[c])
			}
			mount(a) {
				;(this.isSVGTag = bj(a.tagName)), super.mount(a)
			}
		}
		function bt({ top: a, left: b, right: c, bottom: d }) {
			return { x: { min: b, max: c }, y: { min: a, max: d } }
		}
		function bu(a) {
			return void 0 === a || 1 === a
		}
		function bv({ scale: a, scaleX: b, scaleY: c }) {
			return !bu(a) || !bu(b) || !bu(c)
		}
		function bw(a) {
			return bv(a) || bx(a) || a.z || a.rotate || a.rotateX || a.rotateY || a.skewX || a.skewY
		}
		function bx(a) {
			var b, c
			return ((b = a.x) && "0%" !== b) || ((c = a.y) && "0%" !== c)
		}
		function by(a, b, c, d, e) {
			return void 0 !== e && (a = d + e * (a - d)), d + c * (a - d) + b
		}
		function bz(a, b = 0, c = 1, d, e) {
			;(a.min = by(a.min, b, c, d, e)), (a.max = by(a.max, b, c, d, e))
		}
		function bA(a, { x: b, y: c }) {
			bz(a.x, b.translate, b.scale, b.originPoint), bz(a.y, c.translate, c.scale, c.originPoint)
		}
		function bB(a, b) {
			;(a.min = a.min + b), (a.max = a.max + b)
		}
		function bC(a, b, c, d, e = 0.5) {
			let f = bn(a.min, a.max, e)
			bz(a, b, c, f, d)
		}
		function bD(a, b) {
			bC(a.x, b.x, b.scaleX, b.scale, b.originX), bC(a.y, b.y, b.scaleY, b.scale, b.originY)
		}
		function bE(a, b) {
			return bt(
				(function (a, b) {
					if (!b) return a
					let c = b({ x: a.left, y: a.top }),
						d = b({ x: a.right, y: a.bottom })
					return { top: c.y, left: c.x, bottom: d.y, right: d.x }
				})(a.getBoundingClientRect(), b),
			)
		}
		class bF extends a8 {
			constructor() {
				super(...arguments), (this.type = "html"), (this.renderInstance = bk)
			}
			readValueFromInstance(a, b) {
				if (f.has(b))
					return this.projection?.isProjecting
						? ap(b)
						: ((a, b) => {
								let { transform: c = "none" } = getComputedStyle(a)
								return aq(c, b)
							})(a, b)
				{
					let c = window.getComputedStyle(a),
						d = (ac(b) ? c.getPropertyValue(b) : c[b]) || 0
					return "string" == typeof d ? d.trim() : d
				}
			}
			measureInstanceViewportBox(a, { transformPagePoint: b }) {
				return bE(a, b)
			}
			build(a, b, c) {
				bd(a, b, c.transformTemplate)
			}
			scrapeMotionValuesFromProps(a, b, c) {
				return bq(a, b, c)
			}
		}
		var bG,
			bH = a.i(67191)
		let bI = [
			"animate",
			"circle",
			"defs",
			"desc",
			"ellipse",
			"g",
			"image",
			"line",
			"filter",
			"marker",
			"mask",
			"metadata",
			"path",
			"pattern",
			"polygon",
			"polyline",
			"rect",
			"stop",
			"switch",
			"symbol",
			"svg",
			"text",
			"tspan",
			"use",
			"view",
		]
		function bJ(a) {
			if ("string" != typeof a || a.includes("-"));
			else if (bI.indexOf(a) > -1 || /[A-Z]/u.test(a)) return !0
			return !1
		}
		var bK = a.i(9116)
		let bL = (0, bH.createContext)({})
		a.s(["LayoutGroupContext", () => bL], 56195), (0, bH.createContext)({ strict: !1 })
		let bM = (0, bH.createContext)({ transformPagePoint: (a) => a, isStatic: !1, reducedMotion: "never" })
		a.s(["MotionConfigContext", () => bM], 61964)
		let bN = (0, bH.createContext)({})
		function bO(a) {
			return Array.isArray(a) ? a.join(" ") : a
		}
		let bP = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} })
		function bQ(a, b, c) {
			for (let d in b) W(b[d]) || bp(d, c) || (a[d] = b[d])
		}
		let bR = () => ({ ...bP(), attrs: {} }),
			bS = new Set([
				"animate",
				"exit",
				"variants",
				"initial",
				"style",
				"values",
				"variants",
				"transition",
				"transformTemplate",
				"custom",
				"inherit",
				"onBeforeLayoutMeasure",
				"onAnimationStart",
				"onAnimationComplete",
				"onUpdate",
				"onDragStart",
				"onDrag",
				"onDragEnd",
				"onMeasureDragConstraints",
				"onDirectionLock",
				"onDragTransitionEnd",
				"_dragX",
				"_dragY",
				"onHoverStart",
				"onHoverEnd",
				"onViewportEnter",
				"onViewportLeave",
				"globalTapTarget",
				"ignoreStrict",
				"viewport",
			])
		function bT(a) {
			return (
				a.startsWith("while") ||
				(a.startsWith("drag") && "draggable" !== a) ||
				a.startsWith("layout") ||
				a.startsWith("onTap") ||
				a.startsWith("onPan") ||
				a.startsWith("onLayout") ||
				bS.has(a)
			)
		}
		let bU = (a) => !bT(a)
		try {
			;(bG = a.r(97009).default), "function" == typeof bG && (bU = (a) => (a.startsWith("on") ? !bT(a) : bG(a)))
		} catch {}
		function bV(a) {
			return W(a) ? a.get() : a
		}
		let bW = (0, bH.createContext)(null)
		function bX(a) {
			let b = (0, bH.useRef)(null)
			return null === b.current && (b.current = a()), b.current
		}
		a.s(["PresenceContext", () => bW], 48187), a.s(["useConstant", () => bX], 53686)
		let bY = (a) => (b, c) => {
				let d = (0, bH.useContext)(bN),
					e = (0, bH.useContext)(bW),
					f = () =>
						(function ({ scrapeMotionValuesFromProps: a, createRenderState: b }, c, d, e) {
							return {
								latestValues: (function (a, b, c, d) {
									let e = {},
										f = d(a, {})
									for (let a in f) e[a] = bV(f[a])
									let { initial: g, animate: h } = a,
										i = a1(a),
										j = a2(a)
									b &&
										j &&
										!i &&
										!1 !== a.inherit &&
										(void 0 === g && (g = b.initial), void 0 === h && (h = b.animate))
									let k = !!c && !1 === c.initial,
										l = (k = k || !1 === g) ? h : g
									if (l && "boolean" != typeof l && !aZ(l)) {
										let b = Array.isArray(l) ? l : [l]
										for (let c = 0; c < b.length; c++) {
											let d = a4(a, b[c])
											if (d) {
												let { transitionEnd: a, transition: b, ...c } = d
												for (let a in c) {
													let b = c[a]
													if (Array.isArray(b)) {
														let a = k ? b.length - 1 : 0
														b = b[a]
													}
													null !== b && (e[a] = b)
												}
												for (let b in a) e[b] = a[b]
											}
										}
									}
									return e
								})(c, d, e, a),
								renderState: b(),
							}
						})(a, b, d, e)
				return c ? f() : bX(f)
			},
			bZ = bY({ scrapeMotionValuesFromProps: bq, createRenderState: bP }),
			b$ = bY({ scrapeMotionValuesFromProps: br, createRenderState: bR }),
			b_ = {
				animation: [
					"animate",
					"variants",
					"whileHover",
					"whileTap",
					"exit",
					"whileInView",
					"whileFocus",
					"whileDrag",
				],
				exit: ["exit"],
				drag: ["drag", "dragControls"],
				focus: ["whileFocus"],
				hover: ["whileHover", "onHoverStart", "onHoverEnd"],
				tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
				pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
				inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
				layout: ["layout", "layoutId"],
			},
			b0 = !1,
			b1 = Symbol.for("motionComponentSymbol"),
			b2 = "data-" + a9("framerAppearId"),
			b3 = (0, bH.createContext)({})
		function b4(a) {
			return a && "object" == typeof a && Object.prototype.hasOwnProperty.call(a, "current")
		}
		let b5 = bH.useEffect
		function b6(a, { forwardMotionProps: b = !1, type: c } = {}, d, e) {
			d &&
				(function (a) {
					let b =
						(!(function () {
							if (b0) return
							let a = {}
							for (let b in b_) a[b] = { isEnabled: (a) => b_[b].some((b) => !!a[b]) }
							;(a6 = a), (b0 = !0)
						})(),
						a6)
					for (let c in a) b[c] = { ...b[c], ...a[c] }
					a6 = b
				})(d)
			let f = c ? "svg" === c : bJ(a),
				g = f ? b$ : bZ
			function h(c, d) {
				var e
				let h,
					i,
					j,
					k = {
						...(0, bH.useContext)(bM),
						...c,
						layoutId: (function ({ layoutId: a }) {
							let b = (0, bH.useContext)(bL).id
							return b && void 0 !== a ? b + "-" + a : a
						})(c),
					},
					{ isStatic: l } = k,
					m = (function (a) {
						let { initial: b, animate: c } = (function (a, b) {
							if (a1(a)) {
								let { initial: b, animate: c } = a
								return { initial: !1 === b || a$(b) ? b : void 0, animate: a$(c) ? c : void 0 }
							}
							return !1 !== a.inherit ? b : {}
						})(a, (0, bH.useContext)(bN))
						return (0, bH.useMemo)(() => ({ initial: b, animate: c }), [bO(b), bO(c)])
					})(c),
					n = g(c, l)
				return (0, bK.jsxs)(bN.Provider, {
					value: m,
					children: [
						h && m.visualElement ? (0, bK.jsx)(h, { visualElement: m.visualElement, ...k }) : null,
						(function (a, b, c, { latestValues: d }, e, f = !1, g) {
							let h = (
									(g ?? bJ(a))
										? function (a, b, c, d) {
												let e = (0, bH.useMemo)(() => {
													let c = bR()
													return (
														bh(c, b, bj(d), a.transformTemplate, a.style),
														{ ...c.attrs, style: { ...c.style } }
													)
												}, [b])
												if (a.style) {
													let b = {}
													bQ(b, a.style, a), (e.style = { ...b, ...e.style })
												}
												return e
											}
										: function (a, b) {
												let c,
													d,
													e = {},
													f =
														((c = a.style || {}),
														bQ((d = {}), c, a),
														Object.assign(
															d,
															(function ({ transformTemplate: a }, b) {
																return (0, bH.useMemo)(() => {
																	let c = bP()
																	return (
																		bd(c, b, a), Object.assign({}, c.vars, c.style)
																	)
																}, [b])
															})(a, b),
														),
														d)
												return (
													a.drag &&
														!1 !== a.dragListener &&
														((e.draggable = !1),
														(f.userSelect =
															f.WebkitUserSelect =
															f.WebkitTouchCallout =
																"none"),
														(f.touchAction =
															!0 === a.drag
																? "none"
																: `pan-${"x" === a.drag ? "y" : "x"}`)),
													void 0 === a.tabIndex &&
														(a.onTap || a.onTapStart || a.whileTap) &&
														(e.tabIndex = 0),
													(e.style = f),
													e
												)
											}
								)(b, d, e, a),
								i = (function (a, b, c) {
									let d = {}
									for (let e in a)
										("values" !== e || "object" != typeof a.values) &&
											(bU(e) ||
												(!0 === c && bT(e)) ||
												(!b && !bT(e)) ||
												(a.draggable && e.startsWith("onDrag"))) &&
											(d[e] = a[e])
									return d
								})(b, "string" == typeof a, f),
								j = a !== bH.Fragment ? { ...i, ...h, ref: c } : {},
								{ children: k } = b,
								l = (0, bH.useMemo)(() => (W(k) ? k.get() : k), [k])
							return (0, bH.createElement)(a, { ...j, children: l })
						})(
							a,
							c,
							((e = m.visualElement),
							(i = (0, bH.useRef)(d)),
							(0, bH.useInsertionEffect)(() => {
								i.current = d
							}),
							(j = (0, bH.useRef)(null)),
							(0, bH.useCallback)(
								(a) => {
									a && n.onMount?.(a), e && (a ? e.mount(a) : e.unmount())
									let b = i.current
									if ("function" == typeof b)
										if (a) {
											let c = b(a)
											"function" == typeof c && (j.current = c)
										} else j.current ? (j.current(), (j.current = null)) : b(a)
									else b && (b.current = a)
								},
								[e],
							)),
							n,
							l,
							b,
							f,
						),
					],
				})
			}
			h.displayName = `motion.${"string" == typeof a ? a : `create(${a.displayName ?? a.name ?? ""})`}`
			let i = (0, bH.forwardRef)(h)
			return (i[b1] = a), i
		}
		a.s(["useIsomorphicLayoutEffect", () => b5], 50283)
		class b7 {
			constructor(a) {
				;(this.isMounted = !1), (this.node = a)
			}
			update() {}
		}
		function b8(a, b, c) {
			let d = a.getProps()
			return a4(d, b, void 0 !== c ? c : d.custom, a)
		}
		function b9(a, b) {
			return a?.[b] ?? a?.default ?? a
		}
		let ca = (a) => Array.isArray(a)
		function cb(a, b) {
			let c = a.getValue("willChange")
			if (W(c) && c.add) return c.add(b)
			if (!c && ax.WillChange) {
				let c = new ax.WillChange("auto")
				a.addValue("willChange", c), c.add(b)
			}
		}
		let cc = (a) => 1e3 * a,
			cd = (a, b) => (c) => b(a(c)),
			ce = (...a) => a.reduce(cd),
			cf = { layout: 0, mainThread: 0, waapi: 0 }
		function cg(a, b, c) {
			return (c < 0 && (c += 1), c > 1 && (c -= 1), c < 1 / 6)
				? a + (b - a) * 6 * c
				: c < 0.5
					? b
					: c < 2 / 3
						? a + (b - a) * (2 / 3 - c) * 6
						: a
		}
		function ch(a, b) {
			return (c) => (c > 0 ? b : a)
		}
		let ci = (a, b, c) => {
				let d = a * a,
					e = c * (b * b - d) + d
				return e < 0 ? 0 : Math.sqrt(e)
			},
			cj = [r, q, z]
		function ck(a) {
			let b = cj.find((b) => b.test(a))
			if (
				(_(
					!!b,
					`'${a}' is not an animatable color. Use the equivalent color code instead.`,
					"color-not-animatable",
				),
				!b)
			)
				return !1
			let c = b.parse(a)
			return (
				b === z &&
					(c = (function ({ hue: a, saturation: b, lightness: c, alpha: d }) {
						;(a /= 360), (c /= 100)
						let e = 0,
							f = 0,
							g = 0
						if ((b /= 100)) {
							let d = c < 0.5 ? c * (1 + b) : c + b - c * b,
								h = 2 * c - d
							;(e = cg(h, d, a + 1 / 3)), (f = cg(h, d, a)), (g = cg(h, d, a - 1 / 3))
						} else e = f = g = c
						return {
							red: Math.round(255 * e),
							green: Math.round(255 * f),
							blue: Math.round(255 * g),
							alpha: d,
						}
					})(c)),
				c
			)
		}
		let cl = (a, b) => {
				let c = ck(a),
					d = ck(b)
				if (!c || !d) return ch(a, b)
				let e = { ...c }
				return (a) => (
					(e.red = ci(c.red, d.red, a)),
					(e.green = ci(c.green, d.green, a)),
					(e.blue = ci(c.blue, d.blue, a)),
					(e.alpha = bn(c.alpha, d.alpha, a)),
					q.transform(e)
				)
			},
			cm = new Set(["none", "hidden"])
		function cn(a, b) {
			return (c) => bn(a, b, c)
		}
		function co(a) {
			return "number" == typeof a
				? cn
				: "string" == typeof a
					? ae(a)
						? ch
						: A.test(a)
							? cl
							: cr
					: Array.isArray(a)
						? cp
						: "object" == typeof a
							? A.test(a)
								? cl
								: cq
							: ch
		}
		function cp(a, b) {
			let c = [...a],
				d = c.length,
				e = a.map((a, c) => co(a)(a, b[c]))
			return (a) => {
				for (let b = 0; b < d; b++) c[b] = e[b](a)
				return c
			}
		}
		function cq(a, b) {
			let c = { ...a, ...b },
				d = {}
			for (let e in c) void 0 !== a[e] && void 0 !== b[e] && (d[e] = co(a[e])(a[e], b[e]))
			return (a) => {
				for (let b in d) c[b] = d[b](a)
				return c
			}
		}
		let cr = (a, b) => {
			let c = J.createTransformer(b),
				d = F(a),
				e = F(b)
			if (
				!(
					d.indexes.var.length === e.indexes.var.length &&
					d.indexes.color.length === e.indexes.color.length &&
					d.indexes.number.length >= e.indexes.number.length
				)
			)
				return (
					_(
						!0,
						`Complex values '${a}' and '${b}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
						"complex-values-different",
					),
					ch(a, b)
				)
			if ((cm.has(a) && !e.values.length) || (cm.has(b) && !d.values.length))
				return cm.has(a) ? (c) => (c <= 0 ? a : b) : (c) => (c >= 1 ? b : a)
			return ce(
				cp(
					(function (a, b) {
						let c = [],
							d = { color: 0, var: 0, number: 0 }
						for (let e = 0; e < b.values.length; e++) {
							let f = b.types[e],
								g = a.indexes[f][d[f]],
								h = a.values[g] ?? 0
							;(c[e] = h), d[f]++
						}
						return c
					})(d, e),
					e.values,
				),
				c,
			)
		}
		function cs(a, b, c) {
			return "number" == typeof a && "number" == typeof b && "number" == typeof c ? bn(a, b, c) : co(a)(a, b)
		}
		let ct = (a) => {
				let b = ({ timestamp: b }) => a(b)
				return {
					start: (a = !0) => aA.update(b, a),
					stop: () => aB(b),
					now: () => (aC.isProcessing ? aC.timestamp : aT.now()),
				}
			},
			cu = (a, b, c = 10) => {
				let d = "",
					e = Math.max(Math.round(b / c), 2)
				for (let b = 0; b < e; b++) d += Math.round(1e4 * a(b / (e - 1))) / 1e4 + ", "
				return `linear(${d.substring(0, d.length - 2)})`
			}
		function cv(a) {
			let b = 0,
				c = a.next(b)
			for (; !c.done && b < 2e4; ) (b += 50), (c = a.next(b))
			return b >= 2e4 ? 1 / 0 : b
		}
		function cw(a, b, c) {
			var d, e
			let f = Math.max(b - 5, 0)
			return (d = c - a(f)), (e = b - f) ? (1e3 / e) * d : 0
		}
		let cx = 0.01,
			cy = 2,
			cz = 0.005,
			cA = 0.5
		function cB(a, b) {
			return a * Math.sqrt(1 - b * b)
		}
		let cC = ["duration", "bounce"],
			cD = ["stiffness", "damping", "mass"]
		function cE(a, b) {
			return b.some((b) => void 0 !== a[b])
		}
		function cF(a = 0.3, b = 0.3) {
			let c,
				d = "object" != typeof a ? { visualDuration: a, keyframes: [0, 1], bounce: b } : a,
				{ restSpeed: e, restDelta: f } = d,
				h = d.keyframes[0],
				i = d.keyframes[d.keyframes.length - 1],
				j = { done: !1, value: h },
				{
					stiffness: k,
					damping: l,
					mass: m,
					duration: n,
					velocity: o,
					isResolvedFromDuration: p,
				} = (function (a) {
					let b = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...a }
					if (!cE(a, cD) && cE(a, cC))
						if (a.visualDuration) {
							let c = (2 * Math.PI) / (1.2 * a.visualDuration),
								d = c * c,
								e = 2 * g(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(d)
							b = { ...b, mass: 1, stiffness: d, damping: e }
						} else {
							let c = (function ({ duration: a = 800, bounce: b = 0.3, velocity: c = 0, mass: d = 1 }) {
								let e, f
								_(a <= cc(10), "Spring duration must be 10 seconds or less", "spring-duration-limit")
								let h = 1 - b
								;(h = g(0.05, 1, h)),
									(a = g(0.01, 10, a / 1e3)),
									h < 1
										? ((e = (b) => {
												let d = b * h,
													e = d * a
												return 0.001 - ((d - c) / cB(b, h)) * Math.exp(-e)
											}),
											(f = (b) => {
												let d = b * h * a,
													f = Math.pow(h, 2) * Math.pow(b, 2) * a,
													g = Math.exp(-d),
													i = cB(Math.pow(b, 2), h)
												return ((d * c + c - f) * g * (-e(b) + 0.001 > 0 ? -1 : 1)) / i
											}))
										: ((e = (b) => -0.001 + Math.exp(-b * a) * ((b - c) * a + 1)),
											(f = (b) => a * a * (c - b) * Math.exp(-b * a)))
								let i = (function (a, b, c) {
									let d = c
									for (let c = 1; c < 12; c++) d -= a(d) / b(d)
									return d
								})(e, f, 5 / a)
								if (((a = cc(a)), isNaN(i))) return { stiffness: 100, damping: 10, duration: a }
								{
									let b = Math.pow(i, 2) * d
									return { stiffness: b, damping: 2 * h * Math.sqrt(d * b), duration: a }
								}
							})(a)
							;(b = { ...b, ...c, mass: 1 }).isResolvedFromDuration = !0
						}
					return b
				})({ ...d, velocity: -((d.velocity || 0) / 1e3) }),
				q = o || 0,
				r = l / (2 * Math.sqrt(k * m)),
				s = i - h,
				t = Math.sqrt(k / m) / 1e3,
				u = 5 > Math.abs(s)
			if ((e || (e = u ? cx : cy), f || (f = u ? cz : cA), r < 1)) {
				let a = cB(t, r)
				c = (b) => i - Math.exp(-r * t * b) * (((q + r * t * s) / a) * Math.sin(a * b) + s * Math.cos(a * b))
			} else if (1 === r) c = (a) => i - Math.exp(-t * a) * (s + (q + t * s) * a)
			else {
				let a = t * Math.sqrt(r * r - 1)
				c = (b) => {
					let c = Math.exp(-r * t * b),
						d = Math.min(a * b, 300)
					return i - (c * ((q + r * t * s) * Math.sinh(d) + a * s * Math.cosh(d))) / a
				}
			}
			let v = {
				calculatedDuration: (p && n) || null,
				next: (a) => {
					let b = c(a)
					if (p) j.done = a >= n
					else {
						let d = 0 === a ? q : 0
						r < 1 && (d = 0 === a ? cc(q) : cw(c, a, b))
						let g = Math.abs(i - b) <= f
						j.done = Math.abs(d) <= e && g
					}
					return (j.value = j.done ? i : b), j
				},
				toString: () => {
					let a = Math.min(cv(v), 2e4),
						b = cu((b) => v.next(a * b).value, a, 30)
					return a + "ms " + b
				},
				toTransition: () => {},
			}
			return v
		}
		function cG({
			keyframes: a,
			velocity: b = 0,
			power: c = 0.8,
			timeConstant: d = 325,
			bounceDamping: e = 10,
			bounceStiffness: f = 500,
			modifyTarget: g,
			min: h,
			max: i,
			restDelta: j = 0.5,
			restSpeed: k,
		}) {
			let l,
				m,
				n = a[0],
				o = { done: !1, value: n },
				p = c * b,
				q = n + p,
				r = void 0 === g ? q : g(q)
			r !== q && (p = r - n)
			let s = (a) => -p * Math.exp(-a / d),
				t = (a) => r + s(a),
				u = (a) => {
					let b = s(a),
						c = t(a)
					;(o.done = Math.abs(b) <= j), (o.value = o.done ? r : c)
				},
				v = (a) => {
					let b
					if (((b = o.value), (void 0 !== h && b < h) || (void 0 !== i && b > i))) {
						var c
						;(l = a),
							(m = cF({
								keyframes: [
									o.value,
									((c = o.value),
									void 0 === h ? i : void 0 === i || Math.abs(h - c) < Math.abs(i - c) ? h : i),
								],
								velocity: cw(t, a, o.value),
								damping: e,
								stiffness: f,
								restDelta: j,
								restSpeed: k,
							}))
					}
				}
			return (
				v(0),
				{
					calculatedDuration: null,
					next: (a) => {
						let b = !1
						return (m || void 0 !== l || ((b = !0), u(a), v(a)), void 0 !== l && a >= l)
							? m.next(a - l)
							: (b || u(a), o)
					},
				}
			)
		}
		cF.applyToOptions = (a) => {
			let b = (function (a, b = 100, c) {
				let d = c({ ...a, keyframes: [0, b] }),
					e = Math.min(cv(d), 2e4)
				return { type: "keyframes", ease: (a) => d.next(e * a).value / b, duration: e / 1e3 }
			})(a, 100, cF)
			return (a.ease = b.ease), (a.duration = cc(b.duration)), (a.type = "keyframes"), a
		}
		let cH = (a, b, c) => (((1 - 3 * c + 3 * b) * a + (3 * c - 6 * b)) * a + 3 * b) * a
		function cI(a, b, c, d) {
			return a === b && c === d
				? aw
				: (e) =>
						0 === e || 1 === e
							? e
							: cH(
									(function (a, b, c, d, e) {
										let f,
											g,
											h = 0
										do (f = cH((g = b + (c - b) / 2), d, e) - a) > 0 ? (c = g) : (b = g)
										while (Math.abs(f) > 1e-7 && ++h < 12)
										return g
									})(e, 0, 1, a, c),
									b,
									d,
								)
		}
		let cJ = cI(0.42, 0, 1, 1),
			cK = cI(0, 0, 0.58, 1),
			cL = cI(0.42, 0, 0.58, 1),
			cM = (a) => (b) => (b <= 0.5 ? a(2 * b) / 2 : (2 - a(2 * (1 - b))) / 2),
			cN = (a) => (b) => 1 - a(1 - b),
			cO = cI(0.33, 1.53, 0.69, 0.99),
			cP = cN(cO),
			cQ = cM(cP),
			cR = (a) => ((a *= 2) < 1 ? 0.5 * cP(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1)))),
			cS = (a) => 1 - Math.sin(Math.acos(a)),
			cT = cN(cS),
			cU = cM(cS),
			cV = (a) => Array.isArray(a) && "number" == typeof a[0],
			cW = {
				linear: aw,
				easeIn: cJ,
				easeInOut: cL,
				easeOut: cK,
				circIn: cS,
				circInOut: cU,
				circOut: cT,
				backIn: cP,
				backInOut: cQ,
				backOut: cO,
				anticipate: cR,
			},
			cX = (a) => {
				if (cV(a)) {
					aa(4 === a.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length")
					let [b, c, d, e] = a
					return cI(b, c, d, e)
				}
				return "string" == typeof a
					? (aa(void 0 !== cW[a], `Invalid easing type '${a}'`, "invalid-easing-type"), cW[a])
					: a
			},
			cY = (a, b, c) => {
				let d = b - a
				return 0 === d ? 1 : (c - a) / d
			}
		function cZ({ duration: a = 300, keyframes: b, times: c, ease: d = "easeInOut" }) {
			var e
			let f,
				h = Array.isArray(d) && "number" != typeof d[0] ? d.map(cX) : cX(d),
				i = { done: !1, value: b[0] },
				j = (function (a, b, { clamp: c = !0, ease: d, mixer: e } = {}) {
					let f = a.length
					if (
						(aa(f === b.length, "Both input and output ranges must be the same length", "range-length"),
						1 === f)
					)
						return () => b[0]
					if (2 === f && b[0] === b[1]) return () => b[1]
					let h = a[0] === a[1]
					a[0] > a[f - 1] && ((a = [...a].reverse()), (b = [...b].reverse()))
					let i = (function (a, b, c) {
							let d = [],
								e = c || ax.mix || cs,
								f = a.length - 1
							for (let c = 0; c < f; c++) {
								let f = e(a[c], a[c + 1])
								b && (f = ce(Array.isArray(b) ? b[c] || aw : b, f)), d.push(f)
							}
							return d
						})(b, d, e),
						j = i.length,
						k = (c) => {
							if (h && c < a[0]) return b[0]
							let d = 0
							if (j > 1) for (; d < a.length - 2 && !(c < a[d + 1]); d++);
							let e = cY(a[d], a[d + 1], c)
							return i[d](e)
						}
					return c ? (b) => k(g(a[0], a[f - 1], b)) : k
				})(
					((e =
						c && c.length === b.length
							? c
							: (!(function (a, b) {
									let c = a[a.length - 1]
									for (let d = 1; d <= b; d++) {
										let e = cY(0, b, d)
										a.push(bn(c, 1, e))
									}
								})((f = [0]), b.length - 1),
								f)),
					e.map((b) => b * a)),
					b,
					{ ease: Array.isArray(h) ? h : b.map(() => h || cL).splice(0, b.length - 1) },
				)
			return { calculatedDuration: a, next: (b) => ((i.value = j(b)), (i.done = b >= a), i) }
		}
		let c$ = (a) => null !== a
		function c_(a, { repeat: b, repeatType: c = "loop" }, d, e = 1) {
			let f = a.filter(c$),
				g = e < 0 || (b && "loop" !== c && b % 2 == 1) ? 0 : f.length - 1
			return g && void 0 !== d ? d : f[g]
		}
		let c0 = { decay: cG, inertia: cG, tween: cZ, keyframes: cZ, spring: cF }
		function c1(a) {
			"string" == typeof a.type && (a.type = c0[a.type])
		}
		class c2 {
			constructor() {
				this.updateFinished()
			}
			get finished() {
				return this._finished
			}
			updateFinished() {
				this._finished = new Promise((a) => {
					this.resolve = a
				})
			}
			notifyFinished() {
				this.resolve()
			}
			then(a, b) {
				return this.finished.then(a, b)
			}
		}
		let c3 = (a) => a / 100
		class c4 extends c2 {
			constructor(a) {
				super(),
					(this.state = "idle"),
					(this.startTime = null),
					(this.isStopped = !1),
					(this.currentTime = 0),
					(this.holdTime = null),
					(this.playbackSpeed = 1),
					(this.stop = () => {
						let { motionValue: a } = this.options
						a && a.updatedAt !== aT.now() && this.tick(aT.now()),
							(this.isStopped = !0),
							"idle" !== this.state && (this.teardown(), this.options.onStop?.())
					}),
					cf.mainThread++,
					(this.options = a),
					this.initAnimation(),
					this.play(),
					!1 === a.autoplay && this.pause()
			}
			initAnimation() {
				let { options: a } = this
				c1(a)
				let { type: b = cZ, repeat: c = 0, repeatDelay: d = 0, repeatType: e, velocity: f = 0 } = a,
					{ keyframes: g } = a,
					h = b || cZ
				h !== cZ && "number" != typeof g[0] && ((this.mixKeyframes = ce(c3, cs(g[0], g[1]))), (g = [0, 100]))
				let i = h({ ...a, keyframes: g })
				"mirror" === e && (this.mirroredGenerator = h({ ...a, keyframes: [...g].reverse(), velocity: -f })),
					null === i.calculatedDuration && (i.calculatedDuration = cv(i))
				let { calculatedDuration: j } = i
				;(this.calculatedDuration = j),
					(this.resolvedDuration = j + d),
					(this.totalDuration = this.resolvedDuration * (c + 1) - d),
					(this.generator = i)
			}
			updateTime(a) {
				let b = Math.round(a - this.startTime) * this.playbackSpeed
				null !== this.holdTime ? (this.currentTime = this.holdTime) : (this.currentTime = b)
			}
			tick(a, b = !1) {
				let {
					generator: c,
					totalDuration: d,
					mixKeyframes: e,
					mirroredGenerator: f,
					resolvedDuration: h,
					calculatedDuration: i,
				} = this
				if (null === this.startTime) return c.next(0)
				let {
					delay: j = 0,
					keyframes: k,
					repeat: l,
					repeatType: m,
					repeatDelay: n,
					type: o,
					onUpdate: p,
					finalKeyframe: q,
				} = this.options
				this.speed > 0
					? (this.startTime = Math.min(this.startTime, a))
					: this.speed < 0 && (this.startTime = Math.min(a - d / this.speed, this.startTime)),
					b ? (this.currentTime = a) : this.updateTime(a)
				let r = this.currentTime - j * (this.playbackSpeed >= 0 ? 1 : -1),
					s = this.playbackSpeed >= 0 ? r < 0 : r > d
				;(this.currentTime = Math.max(r, 0)),
					"finished" === this.state && null === this.holdTime && (this.currentTime = d)
				let t = this.currentTime,
					u = c
				if (l) {
					let a = Math.min(this.currentTime, d) / h,
						b = Math.floor(a),
						c = a % 1
					!c && a >= 1 && (c = 1),
						1 === c && b--,
						(b = Math.min(b, l + 1)) % 2 &&
							("reverse" === m ? ((c = 1 - c), n && (c -= n / h)) : "mirror" === m && (u = f)),
						(t = g(0, 1, c) * h)
				}
				let v = s ? { done: !1, value: k[0] } : u.next(t)
				e && (v.value = e(v.value))
				let { done: w } = v
				s || null === i || (w = this.playbackSpeed >= 0 ? this.currentTime >= d : this.currentTime <= 0)
				let x = null === this.holdTime && ("finished" === this.state || ("running" === this.state && w))
				return (
					x && o !== cG && (v.value = c_(k, this.options, q, this.speed)),
					p && p(v.value),
					x && this.finish(),
					v
				)
			}
			then(a, b) {
				return this.finished.then(a, b)
			}
			get duration() {
				return this.calculatedDuration / 1e3
			}
			get iterationDuration() {
				let { delay: a = 0 } = this.options || {}
				return this.duration + a / 1e3
			}
			get time() {
				return this.currentTime / 1e3
			}
			set time(a) {
				;(a = cc(a)),
					(this.currentTime = a),
					null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed
						? (this.holdTime = a)
						: this.driver && (this.startTime = this.driver.now() - a / this.playbackSpeed),
					this.driver?.start(!1)
			}
			get speed() {
				return this.playbackSpeed
			}
			set speed(a) {
				this.updateTime(aT.now())
				let b = this.playbackSpeed !== a
				;(this.playbackSpeed = a), b && (this.time = this.currentTime / 1e3)
			}
			play() {
				if (this.isStopped) return
				let { driver: a = ct, startTime: b } = this.options
				this.driver || (this.driver = a((a) => this.tick(a))), this.options.onPlay?.()
				let c = this.driver.now()
				"finished" === this.state
					? (this.updateFinished(), (this.startTime = c))
					: null !== this.holdTime
						? (this.startTime = c - this.holdTime)
						: this.startTime || (this.startTime = b ?? c),
					"finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration),
					(this.holdTime = null),
					(this.state = "running"),
					this.driver.start()
			}
			pause() {
				;(this.state = "paused"), this.updateTime(aT.now()), (this.holdTime = this.currentTime)
			}
			complete() {
				"running" !== this.state && this.play(), (this.state = "finished"), (this.holdTime = null)
			}
			finish() {
				this.notifyFinished(), this.teardown(), (this.state = "finished"), this.options.onComplete?.()
			}
			cancel() {
				;(this.holdTime = null), (this.startTime = 0), this.tick(0), this.teardown(), this.options.onCancel?.()
			}
			teardown() {
				;(this.state = "idle"), this.stopDriver(), (this.startTime = this.holdTime = null), cf.mainThread--
			}
			stopDriver() {
				this.driver && (this.driver.stop(), (this.driver = void 0))
			}
			sample(a) {
				return (this.startTime = 0), this.tick(a, !0)
			}
			attachTimeline(a) {
				return (
					this.options.allowFlatten &&
						((this.options.type = "keyframes"), (this.options.ease = "linear"), this.initAnimation()),
					this.driver?.stop(),
					a.observe(this)
				)
			}
		}
		function c5(a) {
			let b
			return () => (void 0 === b && (b = a()), b)
		}
		let c6 = c5(() => void 0 !== window.ScrollTimeline),
			c7 = {},
			c8 =
				((d = c5(() => {
					try {
						document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" })
					} catch (a) {
						return !1
					}
					return !0
				})),
				() => c7.linearEasing ?? d()),
			c9 = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`,
			da = {
				linear: "linear",
				ease: "ease",
				easeIn: "ease-in",
				easeOut: "ease-out",
				easeInOut: "ease-in-out",
				circIn: c9([0, 0.65, 0.55, 1]),
				circOut: c9([0.55, 0, 1, 0.45]),
				backIn: c9([0.31, 0.01, 0.66, -0.59]),
				backOut: c9([0.33, 1.53, 0.69, 0.99]),
			}
		function db(a) {
			return "function" == typeof a && "applyToOptions" in a
		}
		class dc extends c2 {
			constructor(a) {
				if ((super(), (this.finishedTime = null), (this.isStopped = !1), (this.manualStartTime = null), !a))
					return
				const {
					element: b,
					name: c,
					keyframes: d,
					pseudoElement: e,
					allowFlatten: f = !1,
					finalKeyframe: g,
					onComplete: h,
				} = a
				;(this.isPseudoElement = !!e),
					(this.allowFlatten = f),
					(this.options = a),
					aa("string" != typeof a.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring")
				const i = (function ({ type: a, ...b }) {
					return db(a) && c8()
						? a.applyToOptions(b)
						: (b.duration ?? (b.duration = 300), b.ease ?? (b.ease = "easeOut"), b)
				})(a)
				;(this.animation = (function (
					a,
					b,
					c,
					{
						delay: d = 0,
						duration: e = 300,
						repeat: f = 0,
						repeatType: g = "loop",
						ease: h = "easeOut",
						times: i,
					} = {},
					j,
				) {
					let k = { [b]: c }
					i && (k.offset = i)
					let l = (function a(b, c) {
						if (b)
							return "function" == typeof b
								? c8()
									? cu(b, c)
									: "ease-out"
								: cV(b)
									? c9(b)
									: Array.isArray(b)
										? b.map((b) => a(b, c) || da.easeOut)
										: da[b]
					})(h, e)
					Array.isArray(l) && (k.easing = l)
					let m = {
						delay: d,
						duration: e,
						easing: Array.isArray(l) ? "linear" : l,
						fill: "both",
						iterations: f + 1,
						direction: "reverse" === g ? "alternate" : "normal",
					}
					j && (m.pseudoElement = j)
					let n = a.animate(k, m)
					return n
				})(b, c, d, i, e)),
					!1 === i.autoplay && this.animation.pause(),
					(this.animation.onfinish = () => {
						if (((this.finishedTime = this.time), !e)) {
							let a = c_(d, this.options, g, this.speed)
							this.updateMotionValue
								? this.updateMotionValue(a)
								: c.startsWith("--")
									? b.style.setProperty(c, a)
									: (b.style[c] = a),
								this.animation.cancel()
						}
						h?.(), this.notifyFinished()
					})
			}
			play() {
				this.isStopped ||
					((this.manualStartTime = null),
					this.animation.play(),
					"finished" === this.state && this.updateFinished())
			}
			pause() {
				this.animation.pause()
			}
			complete() {
				this.animation.finish?.()
			}
			cancel() {
				try {
					this.animation.cancel()
				} catch (a) {}
			}
			stop() {
				if (this.isStopped) return
				this.isStopped = !0
				let { state: a } = this
				"idle" !== a &&
					"finished" !== a &&
					(this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
					this.isPseudoElement || this.cancel())
			}
			commitStyles() {
				this.isPseudoElement || this.animation.commitStyles?.()
			}
			get duration() {
				return Number(this.animation.effect?.getComputedTiming?.().duration || 0) / 1e3
			}
			get iterationDuration() {
				let { delay: a = 0 } = this.options || {}
				return this.duration + a / 1e3
			}
			get time() {
				return (Number(this.animation.currentTime) || 0) / 1e3
			}
			set time(a) {
				;(this.manualStartTime = null), (this.finishedTime = null), (this.animation.currentTime = cc(a))
			}
			get speed() {
				return this.animation.playbackRate
			}
			set speed(a) {
				a < 0 && (this.finishedTime = null), (this.animation.playbackRate = a)
			}
			get state() {
				return null !== this.finishedTime ? "finished" : this.animation.playState
			}
			get startTime() {
				return this.manualStartTime ?? Number(this.animation.startTime)
			}
			set startTime(a) {
				this.manualStartTime = this.animation.startTime = a
			}
			attachTimeline({ timeline: a, observe: b }) {
				return (this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }),
				(this.animation.onfinish = null),
				a && c6())
					? ((this.animation.timeline = a), aw)
					: b(this)
			}
		}
		let dd = { anticipate: cR, backInOut: cQ, circInOut: cU }
		class de extends dc {
			constructor(a) {
				!(function (a) {
					"string" == typeof a.ease && a.ease in dd && (a.ease = dd[a.ease])
				})(a),
					c1(a),
					super(a),
					void 0 !== a.startTime && (this.startTime = a.startTime),
					(this.options = a)
			}
			updateMotionValue(a) {
				let { motionValue: b, onUpdate: c, onComplete: d, element: e, ...f } = this.options
				if (!b) return
				if (void 0 !== a) return void b.set(a)
				let h = new c4({ ...f, autoplay: !1 }),
					i = Math.max(10, aT.now() - this.startTime),
					j = g(0, 10, i - 10)
				b.setWithVelocity(h.sample(Math.max(0, i - j)).value, h.sample(i).value, j), h.stop()
			}
		}
		let df = (a, b) =>
			"zIndex" !== b &&
			!!(
				"number" == typeof a ||
				Array.isArray(a) ||
				("string" == typeof a && (J.test(a) || "0" === a) && !a.startsWith("url("))
			)
		function dg(a) {
			;(a.duration = 0), (a.type = "keyframes")
		}
		let dh = new Set(["opacity", "clipPath", "filter", "transform"]),
			di = c5(() => Object.hasOwnProperty.call(Element.prototype, "animate"))
		class dj extends c2 {
			constructor({
				autoplay: a = !0,
				delay: b = 0,
				type: c = "keyframes",
				repeat: d = 0,
				repeatDelay: e = 0,
				repeatType: f = "loop",
				keyframes: g,
				name: h,
				motionValue: i,
				element: j,
				...k
			}) {
				super(),
					(this.stop = () => {
						this._animation && (this._animation.stop(), this.stopTimeline?.()),
							this.keyframeResolver?.cancel()
					}),
					(this.createdAt = aT.now())
				const l = {
						autoplay: a,
						delay: b,
						type: c,
						repeat: d,
						repeatDelay: e,
						repeatType: f,
						name: h,
						motionValue: i,
						element: j,
						...k,
					},
					m = j?.KeyframeResolver || aK
				;(this.keyframeResolver = new m(g, (a, b, c) => this.onKeyframesResolved(a, b, l, !c), h, i, j)),
					this.keyframeResolver?.scheduleResolve()
			}
			onKeyframesResolved(a, b, c, d) {
				this.keyframeResolver = void 0
				let { name: e, type: f, velocity: g, delay: h, isHandoff: i, onUpdate: j } = c
				;(this.resolvedAt = aT.now()),
					!(function (a, b, c, d) {
						let e = a[0]
						if (null === e) return !1
						if ("display" === b || "visibility" === b) return !0
						let f = a[a.length - 1],
							g = df(e, b),
							h = df(f, b)
						return (
							_(
								g === h,
								`You are trying to animate ${b} from "${e}" to "${f}". "${g ? f : e}" is not an animatable value.`,
								"value-not-animatable",
							),
							!!g &&
								!!h &&
								((function (a) {
									let b = a[0]
									if (1 === a.length) return !0
									for (let c = 0; c < a.length; c++) if (a[c] !== b) return !0
								})(a) ||
									(("spring" === c || db(c)) && d))
						)
					})(a, e, f, g) &&
						((ax.instantAnimations || !h) && j?.(c_(a, c, b)),
						(a[0] = a[a.length - 1]),
						dg(c),
						(c.repeat = 0))
				let k = {
						startTime: d
							? this.resolvedAt && this.resolvedAt - this.createdAt > 40
								? this.resolvedAt
								: this.createdAt
							: void 0,
						finalKeyframe: b,
						...c,
						keyframes: a,
					},
					l =
						!i &&
						(function (a) {
							let { motionValue: b, name: c, repeatDelay: d, repeatType: e, damping: f, type: g } = a
							if (!(b?.owner?.current instanceof HTMLElement)) return !1
							let { onUpdate: h, transformTemplate: i } = b.owner.getProps()
							return (
								di() &&
								c &&
								dh.has(c) &&
								("transform" !== c || !i) &&
								!h &&
								!d &&
								"mirror" !== e &&
								0 !== f &&
								"inertia" !== g
							)
						})(k),
					m = k.motionValue?.owner?.current,
					n = l ? new de({ ...k, element: m }) : new c4(k)
				n.finished
					.then(() => {
						this.notifyFinished()
					})
					.catch(aw),
					this.pendingTimeline &&
						((this.stopTimeline = n.attachTimeline(this.pendingTimeline)), (this.pendingTimeline = void 0)),
					(this._animation = n)
			}
			get finished() {
				return this._animation ? this.animation.finished : this._finished
			}
			then(a, b) {
				return this.finished.finally(a).then(() => {})
			}
			get animation() {
				return (
					this._animation || (this.keyframeResolver?.resume(), (aH = !0), aJ(), aI(), (aH = !1)),
					this._animation
				)
			}
			get duration() {
				return this.animation.duration
			}
			get iterationDuration() {
				return this.animation.iterationDuration
			}
			get time() {
				return this.animation.time
			}
			set time(a) {
				this.animation.time = a
			}
			get speed() {
				return this.animation.speed
			}
			get state() {
				return this.animation.state
			}
			set speed(a) {
				this.animation.speed = a
			}
			get startTime() {
				return this.animation.startTime
			}
			attachTimeline(a) {
				return (
					this._animation
						? (this.stopTimeline = this.animation.attachTimeline(a))
						: (this.pendingTimeline = a),
					() => this.stop()
				)
			}
			play() {
				this.animation.play()
			}
			pause() {
				this.animation.pause()
			}
			complete() {
				this.animation.complete()
			}
			cancel() {
				this._animation && this.animation.cancel(), this.keyframeResolver?.cancel()
			}
		}
		let dk = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
			dl = { type: "keyframes", duration: 0.8 },
			dm = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
			dn = (a) => null !== a,
			dp =
				(a, b, c, d = {}, e, g) =>
				(h) => {
					let i = b9(d, a) || {},
						j = i.delay || d.delay || 0,
						{ elapsed: k = 0 } = d
					k -= cc(j)
					let l = {
						keyframes: Array.isArray(c) ? c : [null, c],
						ease: "easeOut",
						velocity: b.getVelocity(),
						...i,
						delay: -k,
						onUpdate: (a) => {
							b.set(a), i.onUpdate && i.onUpdate(a)
						},
						onComplete: () => {
							h(), i.onComplete && i.onComplete()
						},
						name: a,
						motionValue: b,
						element: g ? void 0 : e,
					}
					!(function ({
						when: a,
						delay: b,
						delayChildren: c,
						staggerChildren: d,
						staggerDirection: e,
						repeat: f,
						repeatType: g,
						repeatDelay: h,
						from: i,
						elapsed: j,
						...k
					}) {
						return !!Object.keys(k).length
					})(i) &&
						Object.assign(
							l,
							((a, { keyframes: b }) =>
								b.length > 2
									? dl
									: f.has(a)
										? a.startsWith("scale")
											? {
													type: "spring",
													stiffness: 550,
													damping: 0 === b[1] ? 2 * Math.sqrt(550) : 30,
													restSpeed: 10,
												}
											: dk
										: dm)(a, l),
						),
						l.duration && (l.duration = cc(l.duration)),
						l.repeatDelay && (l.repeatDelay = cc(l.repeatDelay)),
						void 0 !== l.from && (l.keyframes[0] = l.from)
					let m = !1
					if (
						((!1 !== l.type && (0 !== l.duration || l.repeatDelay)) || (dg(l), 0 === l.delay && (m = !0)),
						(ax.instantAnimations || ax.skipAnimations) && ((m = !0), dg(l), (l.delay = 0)),
						(l.allowFlatten = !i.type && !i.ease),
						m && !g && void 0 !== b.get())
					) {
						let a = (function (a, { repeat: b, repeatType: c = "loop" }, d) {
							let e = a.filter(dn),
								f = b && "loop" !== c && b % 2 == 1 ? 0 : e.length - 1
							return e[f]
						})(l.keyframes, i)
						if (void 0 !== a)
							return void aA.update(() => {
								l.onUpdate(a), l.onComplete()
							})
					}
					return i.isSync ? new c4(l) : new dj(l)
				}
		function dq(a, b, { delay: c = 0, transitionOverride: d, type: e } = {}) {
			let { transition: f = a.getDefaultTransition(), transitionEnd: g, ...h } = b,
				i = f?.reduceMotion
			d && (f = d)
			let j = [],
				k = e && a.animationState && a.animationState.getState()[e]
			for (let b in h) {
				let d = a.getValue(b, a.latestValues[b] ?? null),
					e = h[b]
				if (
					void 0 === e ||
					(k &&
						(function ({ protectedKeys: a, needsAnimating: b }, c) {
							let d = a.hasOwnProperty(c) && !0 !== b[c]
							return (b[c] = !1), d
						})(k, b))
				)
					continue
				let g = { delay: c, ...b9(f || {}, b) },
					l = d.get()
				if (void 0 !== l && !d.isAnimating && !Array.isArray(e) && e === l && !g.velocity) continue
				let m = !1
				if (window.MotionHandoffAnimation) {
					let c = a.props[b2]
					if (c) {
						let a = window.MotionHandoffAnimation(c, b, aA)
						null !== a && ((g.startTime = a), (m = !0))
					}
				}
				cb(a, b)
				let n = i ?? a.shouldReduceMotion
				d.start(dp(b, d, e, n && X.has(b) ? { type: !1 } : g, a, m))
				let o = d.animation
				o && j.push(o)
			}
			return (
				g &&
					Promise.all(j).then(() => {
						aA.update(() => {
							g &&
								(function (a, b) {
									let { transitionEnd: c = {}, transition: d = {}, ...e } = b8(a, b) || {}
									for (let b in (e = { ...e, ...c })) {
										var f
										let c = ca((f = e[b])) ? f[f.length - 1] || 0 : f
										a.hasValue(b) ? a.getValue(b).set(c) : a.addValue(b, aV(c))
									}
								})(a, g)
						})
					}),
				j
			)
		}
		function dr(a, b, c, d = 0, e = 1) {
			let f = Array.from(a)
					.sort((a, b) => a.sortNodePosition(b))
					.indexOf(b),
				g = a.size,
				h = (g - 1) * d
			return "function" == typeof c ? c(f, g) : 1 === e ? f * d : h - f * d
		}
		function ds(a, b, c = {}) {
			let d = b8(a, b, "exit" === c.type ? a.presenceContext?.custom : void 0),
				{ transition: e = a.getDefaultTransition() || {} } = d || {}
			c.transitionOverride && (e = c.transitionOverride)
			let f = d ? () => Promise.all(dq(a, d, c)) : () => Promise.resolve(),
				g =
					a.variantChildren && a.variantChildren.size
						? (d = 0) => {
								let { delayChildren: f = 0, staggerChildren: g, staggerDirection: h } = e
								return (function (a, b, c = 0, d = 0, e = 0, f = 1, g) {
									let h = []
									for (let i of a.variantChildren)
										i.notify("AnimationStart", b),
											h.push(
												ds(i, b, {
													...g,
													delay:
														c +
														("function" == typeof d ? 0 : d) +
														dr(a.variantChildren, i, d, e, f),
												}).then(() => i.notify("AnimationComplete", b)),
											)
									return Promise.all(h)
								})(a, b, d, f, g, h, c)
							}
						: () => Promise.resolve(),
				{ when: h } = e
			if (!h) return Promise.all([f(), g(c.delay)])
			{
				let [a, b] = "beforeChildren" === h ? [f, g] : [g, f]
				return a().then(() => b())
			}
		}
		let dt = a0.length
		function du(a, b) {
			if (!Array.isArray(b)) return !1
			let c = b.length
			if (c !== a.length) return !1
			for (let d = 0; d < c; d++) if (b[d] !== a[d]) return !1
			return !0
		}
		let dv = [...a_].reverse(),
			dw = a_.length
		function dx(a = !1) {
			return { isActive: a, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} }
		}
		function dy() {
			return {
				animate: dx(!0),
				whileInView: dx(),
				whileHover: dx(),
				whileTap: dx(),
				whileDrag: dx(),
				whileFocus: dx(),
				exit: dx(),
			}
		}
		let dz = 0
		function dA(a) {
			return [a("x"), a("y")]
		}
		let dB = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"])
		function dC(a) {
			return dB.has(a.tagName) || !0 === a.isContentEditable
		}
		function dD(a, b, c, d = { passive: !0 }) {
			return a.addEventListener(b, c, d), () => a.removeEventListener(b, c)
		}
		let dE = { x: !1, y: !1 }
		function dF(a) {
			return a.max - a.min
		}
		function dG(a, b, c, d = 0.5) {
			;(a.origin = d),
				(a.originPoint = bn(b.min, b.max, a.origin)),
				(a.scale = dF(c) / dF(b)),
				(a.translate = bn(c.min, c.max, a.origin) - a.originPoint),
				((a.scale >= 0.9999 && a.scale <= 1.0001) || isNaN(a.scale)) && (a.scale = 1),
				((a.translate >= -0.01 && a.translate <= 0.01) || isNaN(a.translate)) && (a.translate = 0)
		}
		function dH(a, b, c, d) {
			dG(a.x, b.x, c.x, d ? d.originX : void 0), dG(a.y, b.y, c.y, d ? d.originY : void 0)
		}
		function dI(a, b, c) {
			;(a.min = c.min + b.min), (a.max = a.min + dF(b))
		}
		function dJ(a, b, c) {
			;(a.min = b.min - c.min), (a.max = a.min + dF(b))
		}
		function dK(a, b, c) {
			dJ(a.x, b.x, c.x), dJ(a.y, b.y, c.y)
		}
		let dL = (a) => ("mouse" === a.pointerType ? "number" != typeof a.button || a.button <= 0 : !1 !== a.isPrimary)
		function dM(a) {
			return { point: { x: a.pageX, y: a.pageY } }
		}
		function dN(a, b, c, d) {
			return dD(a, b, (a) => dL(a) && c(a, dM(a)), d)
		}
		let dO = ({ current: a }) => (a ? a.ownerDocument.defaultView : null),
			dP = (a, b) => Math.abs(a - b),
			dQ = new Set(["auto", "scroll"])
		class dR {
			constructor(
				a,
				b,
				{
					transformPagePoint: c,
					contextWindow: d = window,
					dragSnapToOrigin: e = !1,
					distanceThreshold: f = 3,
					element: g,
				} = {},
			) {
				if (
					((this.startEvent = null),
					(this.lastMoveEvent = null),
					(this.lastMoveEventInfo = null),
					(this.handlers = {}),
					(this.contextWindow = window),
					(this.scrollPositions = new Map()),
					(this.removeScrollListeners = null),
					(this.onElementScroll = (a) => {
						this.handleScroll(a.target)
					}),
					(this.onWindowScroll = () => {
						this.handleScroll(window)
					}),
					(this.updatePoint = () => {
						var a, b
						if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
						let c = dU(this.lastMoveEventInfo, this.history),
							d = null !== this.startEvent,
							e =
								((a = c.offset),
								(b = { x: 0, y: 0 }),
								Math.sqrt(dP(a.x, b.x) ** 2 + dP(a.y, b.y) ** 2) >= this.distanceThreshold)
						if (!d && !e) return
						let { point: f } = c,
							{ timestamp: g } = aC
						this.history.push({ ...f, timestamp: g })
						let { onStart: h, onMove: i } = this.handlers
						d || (h && h(this.lastMoveEvent, c), (this.startEvent = this.lastMoveEvent)),
							i && i(this.lastMoveEvent, c)
					}),
					(this.handlePointerMove = (a, b) => {
						;(this.lastMoveEvent = a),
							(this.lastMoveEventInfo = dS(b, this.transformPagePoint)),
							aA.update(this.updatePoint, !0)
					}),
					(this.handlePointerUp = (a, b) => {
						this.end()
						let { onEnd: c, onSessionEnd: d, resumeAnimation: e } = this.handlers
						if (
							((this.dragSnapToOrigin || !this.startEvent) && e && e(),
							!(this.lastMoveEvent && this.lastMoveEventInfo))
						)
							return
						let f = dU(
							"pointercancel" === a.type ? this.lastMoveEventInfo : dS(b, this.transformPagePoint),
							this.history,
						)
						this.startEvent && c && c(a, f), d && d(a, f)
					}),
					!dL(a))
				)
					return
				;(this.dragSnapToOrigin = e),
					(this.handlers = b),
					(this.transformPagePoint = c),
					(this.distanceThreshold = f),
					(this.contextWindow = d || window)
				const h = dS(dM(a), this.transformPagePoint),
					{ point: i } = h,
					{ timestamp: j } = aC
				this.history = [{ ...i, timestamp: j }]
				const { onSessionStart: k } = b
				k && k(a, dU(h, this.history)),
					(this.removeListeners = ce(
						dN(this.contextWindow, "pointermove", this.handlePointerMove),
						dN(this.contextWindow, "pointerup", this.handlePointerUp),
						dN(this.contextWindow, "pointercancel", this.handlePointerUp),
					)),
					g && this.startScrollTracking(g)
			}
			startScrollTracking(a) {
				let b = a.parentElement
				for (; b; ) {
					let a = getComputedStyle(b)
					;(dQ.has(a.overflowX) || dQ.has(a.overflowY)) &&
						this.scrollPositions.set(b, { x: b.scrollLeft, y: b.scrollTop }),
						(b = b.parentElement)
				}
				this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
					window.addEventListener("scroll", this.onElementScroll, { capture: !0, passive: !0 }),
					window.addEventListener("scroll", this.onWindowScroll, { passive: !0 }),
					(this.removeScrollListeners = () => {
						window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }),
							window.removeEventListener("scroll", this.onWindowScroll)
					})
			}
			handleScroll(a) {
				let b = this.scrollPositions.get(a)
				if (!b) return
				let c = a === window,
					d = c ? { x: window.scrollX, y: window.scrollY } : { x: a.scrollLeft, y: a.scrollTop },
					e = { x: d.x - b.x, y: d.y - b.y }
				;(0 !== e.x || 0 !== e.y) &&
					(c
						? this.lastMoveEventInfo &&
							((this.lastMoveEventInfo.point.x += e.x), (this.lastMoveEventInfo.point.y += e.y))
						: this.history.length > 0 && ((this.history[0].x -= e.x), (this.history[0].y -= e.y)),
					this.scrollPositions.set(a, d),
					aA.update(this.updatePoint, !0))
			}
			updateHandlers(a) {
				this.handlers = a
			}
			end() {
				this.removeListeners && this.removeListeners(),
					this.removeScrollListeners && this.removeScrollListeners(),
					this.scrollPositions.clear(),
					aB(this.updatePoint)
			}
		}
		function dS(a, b) {
			return b ? { point: b(a.point) } : a
		}
		function dT(a, b) {
			return { x: a.x - b.x, y: a.y - b.y }
		}
		function dU({ point: a }, b) {
			return {
				point: a,
				delta: dT(a, dV(b)),
				offset: dT(a, b[0]),
				velocity: (function (a, b) {
					if (a.length < 2) return { x: 0, y: 0 }
					let c = a.length - 1,
						d = null,
						e = dV(a)
					for (; c >= 0 && ((d = a[c]), !(e.timestamp - d.timestamp > cc(0.1))); ) c--
					if (!d) return { x: 0, y: 0 }
					let f = (e.timestamp - d.timestamp) / 1e3
					if (0 === f) return { x: 0, y: 0 }
					let g = { x: (e.x - d.x) / f, y: (e.y - d.y) / f }
					return g.x === 1 / 0 && (g.x = 0), g.y === 1 / 0 && (g.y = 0), g
				})(b, 0.1),
			}
		}
		function dV(a) {
			return a[a.length - 1]
		}
		function dW(a, b, c) {
			return { min: void 0 !== b ? a.min + b : void 0, max: void 0 !== c ? a.max + c - (a.max - a.min) : void 0 }
		}
		function dX(a, b) {
			let c = b.min - a.min,
				d = b.max - a.max
			return b.max - b.min < a.max - a.min && ([c, d] = [d, c]), { min: c, max: d }
		}
		function dY(a, b, c) {
			return { min: dZ(a, b), max: dZ(a, c) }
		}
		function dZ(a, b) {
			return "number" == typeof a ? a : a[b] || 0
		}
		let d$ = new WeakMap()
		class d_ {
			constructor(a) {
				;(this.openDragLock = null),
					(this.isDragging = !1),
					(this.currentDirection = null),
					(this.originPoint = { x: 0, y: 0 }),
					(this.constraints = !1),
					(this.hasMutatedConstraints = !1),
					(this.elastic = V()),
					(this.latestPointerEvent = null),
					(this.latestPanInfo = null),
					(this.visualElement = a)
			}
			start(a, { snapToCursor: b = !1, distanceThreshold: c } = {}) {
				let { presenceContext: d } = this.visualElement
				if (d && !1 === d.isPresent) return
				let e = (a) => {
						b ? (this.stopAnimation(), this.snapToCursor(dM(a).point)) : this.pauseAnimation()
					},
					f = (a, b) => {
						this.stopAnimation()
						let { drag: c, dragPropagation: d, onDragStart: e } = this.getProps()
						if (
							c &&
							!d &&
							(this.openDragLock && this.openDragLock(),
							(this.openDragLock = (function (a) {
								if ("x" === a || "y" === a)
									if (dE[a]) return null
									else
										return (
											(dE[a] = !0),
											() => {
												dE[a] = !1
											}
										)
								return dE.x || dE.y
									? null
									: ((dE.x = dE.y = !0),
										() => {
											dE.x = dE.y = !1
										})
							})(c)),
							!this.openDragLock)
						)
							return
						;(this.latestPointerEvent = a),
							(this.latestPanInfo = b),
							(this.isDragging = !0),
							(this.currentDirection = null),
							this.resolveConstraints(),
							this.visualElement.projection &&
								((this.visualElement.projection.isAnimationBlocked = !0),
								(this.visualElement.projection.target = void 0)),
							dA((a) => {
								let b = this.getAxisMotionValue(a).get() || 0
								if (u.test(b)) {
									let { projection: c } = this.visualElement
									if (c && c.layout) {
										let d = c.layout.layoutBox[a]
										d && (b = dF(d) * (parseFloat(b) / 100))
									}
								}
								this.originPoint[a] = b
							}),
							e && aA.postRender(() => e(a, b)),
							cb(this.visualElement, "transform")
						let { animationState: f } = this.visualElement
						f && f.setActive("whileDrag", !0)
					},
					g = (a, b) => {
						;(this.latestPointerEvent = a), (this.latestPanInfo = b)
						let {
							dragPropagation: c,
							dragDirectionLock: d,
							onDirectionLock: e,
							onDrag: f,
						} = this.getProps()
						if (!c && !this.openDragLock) return
						let { offset: g } = b
						if (d && null === this.currentDirection) {
							;(this.currentDirection = (function (a, b = 10) {
								let c = null
								return Math.abs(a.y) > b ? (c = "y") : Math.abs(a.x) > b && (c = "x"), c
							})(g)),
								null !== this.currentDirection && e && e(this.currentDirection)
							return
						}
						this.updateAxis("x", b.point, g),
							this.updateAxis("y", b.point, g),
							this.visualElement.render(),
							f && f(a, b)
					},
					h = (a, b) => {
						;(this.latestPointerEvent = a),
							(this.latestPanInfo = b),
							this.stop(a, b),
							(this.latestPointerEvent = null),
							(this.latestPanInfo = null)
					},
					i = () =>
						dA(
							(a) =>
								"paused" === this.getAnimationState(a) && this.getAxisMotionValue(a).animation?.play(),
						),
					{ dragSnapToOrigin: j } = this.getProps()
				this.panSession = new dR(
					a,
					{ onSessionStart: e, onStart: f, onMove: g, onSessionEnd: h, resumeAnimation: i },
					{
						transformPagePoint: this.visualElement.getTransformPagePoint(),
						dragSnapToOrigin: j,
						distanceThreshold: c,
						contextWindow: dO(this.visualElement),
						element: this.visualElement.current,
					},
				)
			}
			stop(a, b) {
				let c = a || this.latestPointerEvent,
					d = b || this.latestPanInfo,
					e = this.isDragging
				if ((this.cancel(), !e || !d || !c)) return
				let { velocity: f } = d
				this.startAnimation(f)
				let { onDragEnd: g } = this.getProps()
				g && aA.postRender(() => g(c, d))
			}
			cancel() {
				this.isDragging = !1
				let { projection: a, animationState: b } = this.visualElement
				a && (a.isAnimationBlocked = !1), this.endPanSession()
				let { dragPropagation: c } = this.getProps()
				!c && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
					b && b.setActive("whileDrag", !1)
			}
			endPanSession() {
				this.panSession && this.panSession.end(), (this.panSession = void 0)
			}
			updateAxis(a, b, c) {
				let { drag: d } = this.getProps()
				if (!c || !d0(a, d, this.currentDirection)) return
				let e = this.getAxisMotionValue(a),
					f = this.originPoint[a] + c[a]
				this.constraints &&
					this.constraints[a] &&
					(f = (function (a, { min: b, max: c }, d) {
						return (
							void 0 !== b && a < b
								? (a = d ? bn(b, a, d.min) : Math.max(a, b))
								: void 0 !== c && a > c && (a = d ? bn(c, a, d.max) : Math.min(a, c)),
							a
						)
					})(f, this.constraints[a], this.elastic[a])),
					e.set(f)
			}
			resolveConstraints() {
				let { dragConstraints: a, dragElastic: b } = this.getProps(),
					c =
						this.visualElement.projection && !this.visualElement.projection.layout
							? this.visualElement.projection.measure(!1)
							: this.visualElement.projection?.layout,
					d = this.constraints
				a && b4(a)
					? this.constraints || (this.constraints = this.resolveRefConstraints())
					: a && c
						? (this.constraints = (function (a, { top: b, left: c, bottom: d, right: e }) {
								return { x: dW(a.x, c, e), y: dW(a.y, b, d) }
							})(c.layoutBox, a))
						: (this.constraints = !1),
					(this.elastic = (function (a = 0.35) {
						return (
							!1 === a ? (a = 0) : !0 === a && (a = 0.35),
							{ x: dY(a, "left", "right"), y: dY(a, "top", "bottom") }
						)
					})(b)),
					d !== this.constraints &&
						c &&
						this.constraints &&
						!this.hasMutatedConstraints &&
						dA((a) => {
							var b, d
							let e
							!1 !== this.constraints &&
								this.getAxisMotionValue(a) &&
								(this.constraints[a] =
									((b = c.layoutBox[a]),
									(d = this.constraints[a]),
									(e = {}),
									void 0 !== d.min && (e.min = d.min - b.min),
									void 0 !== d.max && (e.max = d.max - b.min),
									e))
						})
			}
			resolveRefConstraints() {
				var a
				let { dragConstraints: b, onMeasureDragConstraints: c } = this.getProps()
				if (!b || !b4(b)) return !1
				let d = b.current
				aa(
					null !== d,
					"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
					"drag-constraints-ref",
				)
				let { projection: e } = this.visualElement
				if (!e || !e.layout) return !1
				let f = (function (a, b, c) {
						let d = bE(a, c),
							{ scroll: e } = b
						return e && (bB(d.x, e.offset.x), bB(d.y, e.offset.y)), d
					})(d, e.root, this.visualElement.getTransformPagePoint()),
					g = ((a = e.layout.layoutBox), { x: dX(a.x, f.x), y: dX(a.y, f.y) })
				if (c) {
					let a = c(
						(function ({ x: a, y: b }) {
							return { top: b.min, right: a.max, bottom: b.max, left: a.min }
						})(g),
					)
					;(this.hasMutatedConstraints = !!a), a && (g = bt(a))
				}
				return g
			}
			startAnimation(a) {
				let {
						drag: b,
						dragMomentum: c,
						dragElastic: d,
						dragTransition: e,
						dragSnapToOrigin: f,
						onDragTransitionEnd: g,
					} = this.getProps(),
					h = this.constraints || {}
				return Promise.all(
					dA((g) => {
						if (!d0(g, b, this.currentDirection)) return
						let i = (h && h[g]) || {}
						f && (i = { min: 0, max: 0 })
						let j = {
							type: "inertia",
							velocity: c ? a[g] : 0,
							bounceStiffness: d ? 200 : 1e6,
							bounceDamping: d ? 40 : 1e7,
							timeConstant: 750,
							restDelta: 1,
							restSpeed: 10,
							...e,
							...i,
						}
						return this.startAxisValueAnimation(g, j)
					}),
				).then(g)
			}
			startAxisValueAnimation(a, b) {
				let c = this.getAxisMotionValue(a)
				return cb(this.visualElement, a), c.start(dp(a, c, 0, b, this.visualElement, !1))
			}
			stopAnimation() {
				dA((a) => this.getAxisMotionValue(a).stop())
			}
			pauseAnimation() {
				dA((a) => this.getAxisMotionValue(a).animation?.pause())
			}
			getAnimationState(a) {
				return this.getAxisMotionValue(a).animation?.state
			}
			getAxisMotionValue(a) {
				let b = `_drag${a.toUpperCase()}`,
					c = this.visualElement.getProps()
				return c[b] || this.visualElement.getValue(a, (c.initial ? c.initial[a] : void 0) || 0)
			}
			snapToCursor(a) {
				dA((b) => {
					let { drag: c } = this.getProps()
					if (!d0(b, c, this.currentDirection)) return
					let { projection: d } = this.visualElement,
						e = this.getAxisMotionValue(b)
					if (d && d.layout) {
						let { min: c, max: f } = d.layout.layoutBox[b],
							g = e.get() || 0
						e.set(a[b] - bn(c, f, 0.5) + g)
					}
				})
			}
			scalePositionWithinConstraints() {
				if (!this.visualElement.current) return
				let { drag: a, dragConstraints: b } = this.getProps(),
					{ projection: c } = this.visualElement
				if (!b4(b) || !c || !this.constraints) return
				this.stopAnimation()
				let d = { x: 0, y: 0 }
				dA((a) => {
					let b = this.getAxisMotionValue(a)
					if (b && !1 !== this.constraints) {
						var c, e
						let f,
							h,
							i,
							j = b.get()
						d[a] =
							((c = { min: j, max: j }),
							(e = this.constraints[a]),
							(f = 0.5),
							(h = dF(c)),
							(i = dF(e)) > h
								? (f = cY(e.min, e.max - h, c.min))
								: h > i && (f = cY(c.min, c.max - i, e.min)),
							g(0, 1, f))
					}
				})
				let { transformTemplate: e } = this.visualElement.getProps()
				;(this.visualElement.current.style.transform = e ? e({}, "") : "none"),
					c.root && c.root.updateScroll(),
					c.updateLayout(),
					this.resolveConstraints(),
					dA((b) => {
						if (!d0(b, a, null)) return
						let c = this.getAxisMotionValue(b),
							{ min: e, max: f } = this.constraints[b]
						c.set(bn(e, f, d[b]))
					})
			}
			addListeners() {
				if (!this.visualElement.current) return
				d$.set(this.visualElement, this)
				let a = this.visualElement.current,
					b = dN(a, "pointerdown", (b) => {
						let { drag: c, dragListener: d = !0 } = this.getProps(),
							e = b.target,
							f = e !== a && dC(e)
						c && d && !f && this.start(b)
					}),
					c = () => {
						let { dragConstraints: a } = this.getProps()
						b4(a) && a.current && (this.constraints = this.resolveRefConstraints())
					},
					{ projection: d } = this.visualElement,
					e = d.addEventListener("measure", c)
				d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()), aA.read(c)
				let f = dD(window, "resize", () => this.scalePositionWithinConstraints()),
					g = d.addEventListener("didUpdate", ({ delta: a, hasLayoutChanged: b }) => {
						this.isDragging &&
							b &&
							(dA((b) => {
								let c = this.getAxisMotionValue(b)
								c && ((this.originPoint[b] += a[b].translate), c.set(c.get() + a[b].translate))
							}),
							this.visualElement.render())
					})
				return () => {
					f(), b(), e(), g && g()
				}
			}
			getProps() {
				let a = this.visualElement.getProps(),
					{
						drag: b = !1,
						dragDirectionLock: c = !1,
						dragPropagation: d = !1,
						dragConstraints: e = !1,
						dragElastic: f = 0.35,
						dragMomentum: g = !0,
					} = a
				return {
					...a,
					drag: b,
					dragDirectionLock: c,
					dragPropagation: d,
					dragConstraints: e,
					dragElastic: f,
					dragMomentum: g,
				}
			}
		}
		function d0(a, b, c) {
			return (!0 === b || b === a) && (null === c || c === a)
		}
		let d1 = (a) => (b, c) => {
				a && aA.postRender(() => a(b, c))
			},
			d2 = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
		var d3 = bH
		function d4(a = !0) {
			let b = (0, bH.useContext)(bW)
			if (null === b) return [!0, null]
			let { isPresent: c, onExitComplete: d, register: e } = b,
				f = (0, bH.useId)()
			;(0, bH.useEffect)(() => {
				if (a) return e(f)
			}, [a])
			let g = (0, bH.useCallback)(() => a && d && d(f), [f, d, a])
			return !c && d ? [!1, g] : [!0]
		}
		a.s(["usePresence", () => d4], 42132)
		let d5 = !1
		class d6 extends d3.Component {
			componentDidMount() {
				let { visualElement: a, layoutGroup: b, switchLayoutGroup: c, layoutId: d } = this.props,
					{ projection: e } = a
				e &&
					(b.group && b.group.add(e),
					c && c.register && d && c.register(e),
					d5 && e.root.didUpdate(),
					e.addEventListener("animationComplete", () => {
						this.safeToRemove()
					}),
					e.setOptions({
						...e.options,
						layoutDependency: this.props.layoutDependency,
						onExitComplete: () => this.safeToRemove(),
					})),
					(d2.hasEverUpdated = !0)
			}
			getSnapshotBeforeUpdate(a) {
				let { layoutDependency: b, visualElement: c, drag: d, isPresent: e } = this.props,
					{ projection: f } = c
				return (
					f &&
						((f.isPresent = e),
						a.layoutDependency !== b && f.setOptions({ ...f.options, layoutDependency: b }),
						(d5 = !0),
						d || a.layoutDependency !== b || void 0 === b || a.isPresent !== e
							? f.willUpdate()
							: this.safeToRemove(),
						a.isPresent !== e &&
							(e
								? f.promote()
								: f.relegate() ||
									aA.postRender(() => {
										let a = f.getStack()
										;(a && a.members.length) || this.safeToRemove()
									}))),
					null
				)
			}
			componentDidUpdate() {
				let { projection: a } = this.props.visualElement
				a &&
					(a.root.didUpdate(),
					aR.postRender(() => {
						!a.currentAnimation && a.isLead() && this.safeToRemove()
					}))
			}
			componentWillUnmount() {
				let { visualElement: a, layoutGroup: b, switchLayoutGroup: c } = this.props,
					{ projection: d } = a
				;(d5 = !0),
					d &&
						(d.scheduleCheckAfterUnmount(),
						b && b.group && b.group.remove(d),
						c && c.deregister && c.deregister(d))
			}
			safeToRemove() {
				let { safeToRemove: a } = this.props
				a && a()
			}
			render() {
				return null
			}
		}
		function d7(a) {
			let [b, c] = d4(),
				d = (0, d3.useContext)(bL)
			return (0, bK.jsx)(d6, {
				...a,
				layoutGroup: d,
				switchLayoutGroup: (0, d3.useContext)(b3),
				isPresent: b,
				safeToRemove: c,
			})
		}
		function d8(a) {
			return "object" == typeof a && null !== a
		}
		function d9(a) {
			return d8(a) && "ownerSVGElement" in a
		}
		let ea = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
			eb = ea.length,
			ec = (a) => ("string" == typeof a ? parseFloat(a) : a),
			ed = (a) => "number" == typeof a || v.test(a)
		function ee(a, b) {
			return void 0 !== a[b] ? a[b] : a.borderRadius
		}
		let ef = eh(0, 0.5, cT),
			eg = eh(0.5, 0.95, aw)
		function eh(a, b, c) {
			return (d) => (d < a ? 0 : d > b ? 1 : c(cY(a, b, d)))
		}
		function ei(a, b) {
			;(a.min = b.min), (a.max = b.max)
		}
		function ej(a, b) {
			ei(a.x, b.x), ei(a.y, b.y)
		}
		function ek(a, b) {
			;(a.translate = b.translate), (a.scale = b.scale), (a.originPoint = b.originPoint), (a.origin = b.origin)
		}
		function el(a, b, c, d, e) {
			return (a -= b), (a = d + (1 / c) * (a - d)), void 0 !== e && (a = d + (1 / e) * (a - d)), a
		}
		function em(a, b, [c, d, e], f, g) {
			!(function (a, b = 0, c = 1, d = 0.5, e, f = a, g = a) {
				if ((u.test(b) && ((b = parseFloat(b)), (b = bn(g.min, g.max, b / 100) - g.min)), "number" != typeof b))
					return
				let h = bn(f.min, f.max, d)
				a === f && (h -= b), (a.min = el(a.min, b, c, h, e)), (a.max = el(a.max, b, c, h, e))
			})(a, b[c], b[d], b[e], b.scale, f, g)
		}
		let en = ["x", "scaleX", "originX"],
			eo = ["y", "scaleY", "originY"]
		function ep(a, b, c, d) {
			em(a.x, b, en, c ? c.x : void 0, d ? d.x : void 0), em(a.y, b, eo, c ? c.y : void 0, d ? d.y : void 0)
		}
		function eq(a) {
			return 0 === a.translate && 1 === a.scale
		}
		function er(a) {
			return eq(a.x) && eq(a.y)
		}
		function es(a, b) {
			return a.min === b.min && a.max === b.max
		}
		function et(a, b) {
			return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max)
		}
		function eu(a, b) {
			return et(a.x, b.x) && et(a.y, b.y)
		}
		function ev(a) {
			return dF(a.x) / dF(a.y)
		}
		function ew(a, b) {
			return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint
		}
		class ex {
			constructor() {
				this.members = []
			}
			add(a) {
				aO(this.members, a), a.scheduleRender()
			}
			remove(a) {
				if ((aP(this.members, a), a === this.prevLead && (this.prevLead = void 0), a === this.lead)) {
					let a = this.members[this.members.length - 1]
					a && this.promote(a)
				}
			}
			relegate(a) {
				let b,
					c = this.members.findIndex((b) => a === b)
				if (0 === c) return !1
				for (let a = c; a >= 0; a--) {
					let c = this.members[a]
					if (!1 !== c.isPresent) {
						b = c
						break
					}
				}
				return !!b && (this.promote(b), !0)
			}
			promote(a, b) {
				let c = this.lead
				if (a !== c && ((this.prevLead = c), (this.lead = a), a.show(), c)) {
					c.instance && c.scheduleRender(), a.scheduleRender()
					let d = c.options.layoutDependency,
						e = a.options.layoutDependency
					;(void 0 === d || void 0 === e || d !== e) &&
						((a.resumeFrom = c),
						b && (a.resumeFrom.preserveOpacity = !0),
						c.snapshot &&
							((a.snapshot = c.snapshot),
							(a.snapshot.latestValues = c.animationValues || c.latestValues)),
						a.root && a.root.isUpdating && (a.isLayoutDirty = !0))
					let { crossfade: f } = a.options
					!1 === f && c.hide()
				}
			}
			exitAnimationComplete() {
				this.members.forEach((a) => {
					let { options: b, resumingFrom: c } = a
					b.onExitComplete && b.onExitComplete(), c && c.options.onExitComplete && c.options.onExitComplete()
				})
			}
			scheduleRender() {
				this.members.forEach((a) => {
					a.instance && a.scheduleRender(!1)
				})
			}
			removeLeadSnapshot() {
				this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
			}
		}
		let ey = (a, b) => a.depth - b.depth
		class ez {
			constructor() {
				;(this.children = []), (this.isDirty = !1)
			}
			add(a) {
				aO(this.children, a), (this.isDirty = !0)
			}
			remove(a) {
				aP(this.children, a), (this.isDirty = !0)
			}
			forEach(a) {
				this.isDirty && this.children.sort(ey), (this.isDirty = !1), this.children.forEach(a)
			}
		}
		let eA = ["", "X", "Y", "Z"],
			eB = 0
		function eC(a, b, c, d) {
			let { latestValues: e } = b
			e[a] && ((c[a] = e[a]), b.setStaticValue(a, 0), d && (d[a] = 0))
		}
		function eD({
			attachResizeListener: a,
			defaultParent: b,
			measureScroll: c,
			checkIsScrollRoot: d,
			resetTransform: e,
		}) {
			return class {
				constructor(a = {}, c = b?.()) {
					;(this.id = eB++),
						(this.animationId = 0),
						(this.animationCommitId = 0),
						(this.children = new Set()),
						(this.options = {}),
						(this.isTreeAnimating = !1),
						(this.isAnimationBlocked = !1),
						(this.isLayoutDirty = !1),
						(this.isProjectionDirty = !1),
						(this.isSharedProjectionDirty = !1),
						(this.isTransformDirty = !1),
						(this.updateManuallyBlocked = !1),
						(this.updateBlockedByResize = !1),
						(this.isUpdating = !1),
						(this.isSVG = !1),
						(this.needsReset = !1),
						(this.shouldResetTransform = !1),
						(this.hasCheckedOptimisedAppear = !1),
						(this.treeScale = { x: 1, y: 1 }),
						(this.eventHandlers = new Map()),
						(this.hasTreeAnimated = !1),
						(this.layoutVersion = 0),
						(this.updateScheduled = !1),
						(this.scheduleUpdate = () => this.update()),
						(this.projectionUpdateScheduled = !1),
						(this.checkUpdateFailed = () => {
							this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots())
						}),
						(this.updateProjection = () => {
							;(this.projectionUpdateScheduled = !1),
								this.nodes.forEach(eG),
								this.nodes.forEach(eN),
								this.nodes.forEach(eO),
								this.nodes.forEach(eH)
						}),
						(this.resolvedRelativeTargetAt = 0),
						(this.linkedParentVersion = 0),
						(this.hasProjected = !1),
						(this.isVisible = !0),
						(this.animationProgress = 0),
						(this.sharedNodes = new Map()),
						(this.latestValues = a),
						(this.root = c ? c.root || c : this),
						(this.path = c ? [...c.path, c] : []),
						(this.parent = c),
						(this.depth = c ? c.depth + 1 : 0)
					for (let a = 0; a < this.path.length; a++) this.path[a].shouldResetTransform = !0
					this.root === this && (this.nodes = new ez())
				}
				addEventListener(a, b) {
					return (
						this.eventHandlers.has(a) || this.eventHandlers.set(a, new aQ()),
						this.eventHandlers.get(a).add(b)
					)
				}
				notifyListeners(a, ...b) {
					let c = this.eventHandlers.get(a)
					c && c.notify(...b)
				}
				hasListeners(a) {
					return this.eventHandlers.has(a)
				}
				mount(b) {
					if (this.instance) return
					;(this.isSVG = d9(b) && !(d9(b) && "svg" === b.tagName)), (this.instance = b)
					let { layoutId: c, layout: d, visualElement: e } = this.options
					if (
						(e && !e.current && e.mount(b),
						this.root.nodes.add(this),
						this.parent && this.parent.children.add(this),
						this.root.hasTreeAnimated && (d || c) && (this.isLayoutDirty = !0),
						a)
					) {
						let c,
							d = 0,
							e = () => (this.root.updateBlockedByResize = !1)
						aA.read(() => {
							d = window.innerWidth
						}),
							a(b, () => {
								let a = window.innerWidth
								if (a !== d) {
									let b, f
									;(d = a),
										(this.root.updateBlockedByResize = !0),
										c && c(),
										(b = aT.now()),
										(f = ({ timestamp: a }) => {
											let c = a - b
											c >= 250 && (aB(f), e(c - 250))
										}),
										aA.setup(f, !0),
										(c = () => aB(f)),
										d2.hasAnimatedSinceResize &&
											((d2.hasAnimatedSinceResize = !1), this.nodes.forEach(eM))
								}
							})
					}
					c && this.root.registerSharedNode(c, this),
						!1 !== this.options.animate &&
							e &&
							(c || d) &&
							this.addEventListener(
								"didUpdate",
								({ delta: a, hasLayoutChanged: b, hasRelativeLayoutChanged: c, layout: d }) => {
									if (this.isTreeAnimationBlocked()) {
										;(this.target = void 0), (this.relativeTarget = void 0)
										return
									}
									let f = this.options.transition || e.getDefaultTransition() || eU,
										{ onLayoutAnimationStart: g, onLayoutAnimationComplete: h } = e.getProps(),
										i = !this.targetLayout || !eu(this.targetLayout, d),
										j = !b && c
									if (
										this.options.layoutRoot ||
										this.resumeFrom ||
										j ||
										(b && (i || !this.currentAnimation))
									) {
										this.resumeFrom &&
											((this.resumingFrom = this.resumeFrom),
											(this.resumingFrom.resumingFrom = void 0))
										let b = { ...b9(f, "layout"), onPlay: g, onComplete: h }
										;(e.shouldReduceMotion || this.options.layoutRoot) &&
											((b.delay = 0), (b.type = !1)),
											this.startAnimation(b),
											this.setAnimationOrigin(a, j)
									} else
										b || eM(this),
											this.isLead() &&
												this.options.onExitComplete &&
												this.options.onExitComplete()
									this.targetLayout = d
								},
							)
				}
				unmount() {
					this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this)
					let a = this.getStack()
					a && a.remove(this),
						this.parent && this.parent.children.delete(this),
						(this.instance = void 0),
						this.eventHandlers.clear(),
						aB(this.updateProjection)
				}
				blockUpdate() {
					this.updateManuallyBlocked = !0
				}
				unblockUpdate() {
					this.updateManuallyBlocked = !1
				}
				isUpdateBlocked() {
					return this.updateManuallyBlocked || this.updateBlockedByResize
				}
				isTreeAnimationBlocked() {
					return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1
				}
				startUpdate() {
					!this.isUpdateBlocked() &&
						((this.isUpdating = !0), this.nodes && this.nodes.forEach(eP), this.animationId++)
				}
				getTransformTemplate() {
					let { visualElement: a } = this.options
					return a && a.getProps().transformTemplate
				}
				willUpdate(a = !0) {
					if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
						this.options.onExitComplete && this.options.onExitComplete()
						return
					}
					if (
						(window.MotionCancelOptimisedAnimation &&
							!this.hasCheckedOptimisedAppear &&
							(function a(b) {
								if (((b.hasCheckedOptimisedAppear = !0), b.root === b)) return
								let { visualElement: c } = b.options
								if (!c) return
								let d = c.props[b2]
								if (window.MotionHasOptimisedAnimation(d, "transform")) {
									let { layout: a, layoutId: c } = b.options
									window.MotionCancelOptimisedAnimation(d, "transform", aA, !(a || c))
								}
								let { parent: e } = b
								e && !e.hasCheckedOptimisedAppear && a(e)
							})(this),
						this.root.isUpdating || this.root.startUpdate(),
						this.isLayoutDirty)
					)
						return
					this.isLayoutDirty = !0
					for (let a = 0; a < this.path.length; a++) {
						let b = this.path[a]
						;(b.shouldResetTransform = !0),
							b.updateScroll("snapshot"),
							b.options.layoutRoot && b.willUpdate(!1)
					}
					let { layoutId: b, layout: c } = this.options
					if (void 0 === b && !c) return
					let d = this.getTransformTemplate()
					;(this.prevTransformTemplateValue = d ? d(this.latestValues, "") : void 0),
						this.updateSnapshot(),
						a && this.notifyListeners("willUpdate")
				}
				update() {
					if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
						this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(eJ)
						return
					}
					if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(eK)
					;(this.animationCommitId = this.animationId),
						this.isUpdating
							? ((this.isUpdating = !1),
								this.nodes.forEach(eL),
								this.nodes.forEach(eE),
								this.nodes.forEach(eF))
							: this.nodes.forEach(eK),
						this.clearAllSnapshots()
					let a = aT.now()
					;(aC.delta = g(0, 1e3 / 60, a - aC.timestamp)),
						(aC.timestamp = a),
						(aC.isProcessing = !0),
						aD.update.process(aC),
						aD.preRender.process(aC),
						aD.render.process(aC),
						(aC.isProcessing = !1)
				}
				didUpdate() {
					this.updateScheduled || ((this.updateScheduled = !0), aR.read(this.scheduleUpdate))
				}
				clearAllSnapshots() {
					this.nodes.forEach(eI), this.sharedNodes.forEach(eQ)
				}
				scheduleUpdateProjection() {
					this.projectionUpdateScheduled ||
						((this.projectionUpdateScheduled = !0), aA.preRender(this.updateProjection, !1, !0))
				}
				scheduleCheckAfterUnmount() {
					aA.postRender(() => {
						this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
					})
				}
				updateSnapshot() {
					!this.snapshot &&
						this.instance &&
						((this.snapshot = this.measure()),
						!this.snapshot ||
							dF(this.snapshot.measuredBox.x) ||
							dF(this.snapshot.measuredBox.y) ||
							(this.snapshot = void 0))
				}
				updateLayout() {
					if (
						!this.instance ||
						(this.updateScroll(),
						!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
					)
						return
					if (this.resumeFrom && !this.resumeFrom.instance)
						for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll()
					let a = this.layout
					;(this.layout = this.measure(!1)),
						this.layoutVersion++,
						(this.layoutCorrected = V()),
						(this.isLayoutDirty = !1),
						(this.projectionDelta = void 0),
						this.notifyListeners("measure", this.layout.layoutBox)
					let { visualElement: b } = this.options
					b && b.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0)
				}
				updateScroll(a = "measure") {
					let b = !!(this.options.layoutScroll && this.instance)
					if (
						(this.scroll &&
							this.scroll.animationId === this.root.animationId &&
							this.scroll.phase === a &&
							(b = !1),
						b && this.instance)
					) {
						let b = d(this.instance)
						this.scroll = {
							animationId: this.root.animationId,
							phase: a,
							isRoot: b,
							offset: c(this.instance),
							wasRoot: this.scroll ? this.scroll.isRoot : b,
						}
					}
				}
				resetTransform() {
					if (!e) return
					let a = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
						b = this.projectionDelta && !er(this.projectionDelta),
						c = this.getTransformTemplate(),
						d = c ? c(this.latestValues, "") : void 0,
						f = d !== this.prevTransformTemplateValue
					a &&
						this.instance &&
						(b || bw(this.latestValues) || f) &&
						(e(this.instance, d), (this.shouldResetTransform = !1), this.scheduleRender())
				}
				measure(a = !0) {
					var b
					let c = this.measurePageBox(),
						d = this.removeElementScroll(c)
					return (
						a && (d = this.removeTransform(d)),
						eX((b = d).x),
						eX(b.y),
						{
							animationId: this.root.animationId,
							measuredBox: c,
							layoutBox: d,
							latestValues: {},
							source: this.id,
						}
					)
				}
				measurePageBox() {
					let { visualElement: a } = this.options
					if (!a) return V()
					let b = a.measureViewportBox()
					if (!(this.scroll?.wasRoot || this.path.some(eZ))) {
						let { scroll: a } = this.root
						a && (bB(b.x, a.offset.x), bB(b.y, a.offset.y))
					}
					return b
				}
				removeElementScroll(a) {
					let b = V()
					if ((ej(b, a), this.scroll?.wasRoot)) return b
					for (let c = 0; c < this.path.length; c++) {
						let d = this.path[c],
							{ scroll: e, options: f } = d
						d !== this.root &&
							e &&
							f.layoutScroll &&
							(e.wasRoot && ej(b, a), bB(b.x, e.offset.x), bB(b.y, e.offset.y))
					}
					return b
				}
				applyTransform(a, b = !1) {
					let c = V()
					ej(c, a)
					for (let a = 0; a < this.path.length; a++) {
						let d = this.path[a]
						!b &&
							d.options.layoutScroll &&
							d.scroll &&
							d !== d.root &&
							bD(c, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
							bw(d.latestValues) && bD(c, d.latestValues)
					}
					return bw(this.latestValues) && bD(c, this.latestValues), c
				}
				removeTransform(a) {
					let b = V()
					ej(b, a)
					for (let a = 0; a < this.path.length; a++) {
						let c = this.path[a]
						if (!c.instance || !bw(c.latestValues)) continue
						bv(c.latestValues) && c.updateSnapshot()
						let d = V()
						ej(d, c.measurePageBox()), ep(b, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d)
					}
					return bw(this.latestValues) && ep(b, this.latestValues), b
				}
				setTargetDelta(a) {
					;(this.targetDelta = a), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0)
				}
				setOptions(a) {
					this.options = { ...this.options, ...a, crossfade: void 0 === a.crossfade || a.crossfade }
				}
				clearMeasurements() {
					;(this.scroll = void 0),
						(this.layout = void 0),
						(this.snapshot = void 0),
						(this.prevTransformTemplateValue = void 0),
						(this.targetDelta = void 0),
						(this.target = void 0),
						(this.isLayoutDirty = !1)
				}
				forceRelativeParentToResolveTarget() {
					this.relativeParent &&
						this.relativeParent.resolvedRelativeTargetAt !== aC.timestamp &&
						this.relativeParent.resolveTargetDelta(!0)
				}
				resolveTargetDelta(a = !1) {
					let b = this.getLead()
					this.isProjectionDirty || (this.isProjectionDirty = b.isProjectionDirty),
						this.isTransformDirty || (this.isTransformDirty = b.isTransformDirty),
						this.isSharedProjectionDirty || (this.isSharedProjectionDirty = b.isSharedProjectionDirty)
					let c = !!this.resumingFrom || this !== b
					if (
						!(
							a ||
							(c && this.isSharedProjectionDirty) ||
							this.isProjectionDirty ||
							this.parent?.isProjectionDirty ||
							this.attemptToResolveRelativeTarget ||
							this.root.updateBlockedByResize
						)
					)
						return
					let { layout: d, layoutId: e } = this.options
					if (!this.layout || !(d || e)) return
					this.resolvedRelativeTargetAt = aC.timestamp
					let f = this.getClosestProjectingParent()
					if (
						(f &&
							this.linkedParentVersion !== f.layoutVersion &&
							!f.options.layoutRoot &&
							this.removeRelativeTarget(),
						this.targetDelta ||
							this.relativeTarget ||
							(f && f.layout
								? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox)
								: this.removeRelativeTarget()),
						this.relativeTarget || this.targetDelta)
					) {
						if (
							(this.target || ((this.target = V()), (this.targetWithTransforms = V())),
							this.relativeTarget &&
								this.relativeTargetOrigin &&
								this.relativeParent &&
								this.relativeParent.target)
						) {
							var g, h, i
							this.forceRelativeParentToResolveTarget(),
								(g = this.target),
								(h = this.relativeTarget),
								(i = this.relativeParent.target),
								dI(g.x, h.x, i.x),
								dI(g.y, h.y, i.y)
						} else
							this.targetDelta
								? (this.resumingFrom
										? (this.target = this.applyTransform(this.layout.layoutBox))
										: ej(this.target, this.layout.layoutBox),
									bA(this.target, this.targetDelta))
								: ej(this.target, this.layout.layoutBox)
						this.attemptToResolveRelativeTarget &&
							((this.attemptToResolveRelativeTarget = !1),
							f &&
							!!f.resumingFrom == !!this.resumingFrom &&
							!f.options.layoutScroll &&
							f.target &&
							1 !== this.animationProgress
								? this.createRelativeTarget(f, this.target, f.target)
								: (this.relativeParent = this.relativeTarget = void 0))
					}
				}
				getClosestProjectingParent() {
					if (!(!this.parent || bv(this.parent.latestValues) || bx(this.parent.latestValues)))
						if (this.parent.isProjecting()) return this.parent
						else return this.parent.getClosestProjectingParent()
				}
				isProjecting() {
					return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
				}
				createRelativeTarget(a, b, c) {
					;(this.relativeParent = a),
						(this.linkedParentVersion = a.layoutVersion),
						this.forceRelativeParentToResolveTarget(),
						(this.relativeTarget = V()),
						(this.relativeTargetOrigin = V()),
						dK(this.relativeTargetOrigin, b, c),
						ej(this.relativeTarget, this.relativeTargetOrigin)
				}
				removeRelativeTarget() {
					this.relativeParent = this.relativeTarget = void 0
				}
				calcProjection() {
					let a = this.getLead(),
						b = !!this.resumingFrom || this !== a,
						c = !0
					if (
						((this.isProjectionDirty || this.parent?.isProjectionDirty) && (c = !1),
						b && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1),
						this.resolvedRelativeTargetAt === aC.timestamp && (c = !1),
						c)
					)
						return
					let { layout: d, layoutId: e } = this.options
					if (
						((this.isTreeAnimating = !!(
							(this.parent && this.parent.isTreeAnimating) ||
							this.currentAnimation ||
							this.pendingAnimation
						)),
						this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
						!this.layout || !(d || e))
					)
						return
					ej(this.layoutCorrected, this.layout.layoutBox)
					let f = this.treeScale.x,
						g = this.treeScale.y
					!(function (a, b, c, d = !1) {
						let e,
							f,
							g = c.length
						if (g) {
							b.x = b.y = 1
							for (let h = 0; h < g; h++) {
								f = (e = c[h]).projectionDelta
								let { visualElement: g } = e.options
								;(!g || !g.props.style || "contents" !== g.props.style.display) &&
									(d &&
										e.options.layoutScroll &&
										e.scroll &&
										e !== e.root &&
										bD(a, { x: -e.scroll.offset.x, y: -e.scroll.offset.y }),
									f && ((b.x *= f.x.scale), (b.y *= f.y.scale), bA(a, f)),
									d && bw(e.latestValues) && bD(a, e.latestValues))
							}
							b.x < 1.0000000000001 && b.x > 0.999999999999 && (b.x = 1),
								b.y < 1.0000000000001 && b.y > 0.999999999999 && (b.y = 1)
						}
					})(this.layoutCorrected, this.treeScale, this.path, b),
						a.layout &&
							!a.target &&
							(1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
							((a.target = a.layout.layoutBox), (a.targetWithTransforms = V()))
					let { target: h } = a
					if (!h) {
						this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender())
						return
					}
					this.projectionDelta && this.prevProjectionDelta
						? (ek(this.prevProjectionDelta.x, this.projectionDelta.x),
							ek(this.prevProjectionDelta.y, this.projectionDelta.y))
						: this.createProjectionDeltas(),
						dH(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
						(this.treeScale.x === f &&
							this.treeScale.y === g &&
							ew(this.projectionDelta.x, this.prevProjectionDelta.x) &&
							ew(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
							((this.hasProjected = !0),
							this.scheduleRender(),
							this.notifyListeners("projectionUpdate", h))
				}
				hide() {
					this.isVisible = !1
				}
				show() {
					this.isVisible = !0
				}
				scheduleRender(a = !0) {
					if ((this.options.visualElement?.scheduleRender(), a)) {
						let a = this.getStack()
						a && a.scheduleRender()
					}
					this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
				}
				createProjectionDeltas() {
					;(this.prevProjectionDelta = T()),
						(this.projectionDelta = T()),
						(this.projectionDeltaWithTransform = T())
				}
				setAnimationOrigin(a, b = !1) {
					let c,
						d = this.snapshot,
						e = d ? d.latestValues : {},
						f = { ...this.latestValues },
						g = T()
					;(this.relativeParent && this.relativeParent.options.layoutRoot) ||
						(this.relativeTarget = this.relativeTargetOrigin = void 0),
						(this.attemptToResolveRelativeTarget = !b)
					let h = V(),
						i = (d ? d.source : void 0) !== (this.layout ? this.layout.source : void 0),
						j = this.getStack(),
						k = !j || j.members.length <= 1,
						l = !!(i && !k && !0 === this.options.crossfade && !this.path.some(eT))
					;(this.animationProgress = 0),
						(this.mixTargetDelta = (b) => {
							let d = b / 1e3
							if (
								(eR(g.x, a.x, d),
								eR(g.y, a.y, d),
								this.setTargetDelta(g),
								this.relativeTarget &&
									this.relativeTargetOrigin &&
									this.layout &&
									this.relativeParent &&
									this.relativeParent.layout)
							) {
								var j, m, n, o, p, q
								dK(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
									(n = this.relativeTarget),
									(o = this.relativeTargetOrigin),
									(p = h),
									(q = d),
									eS(n.x, o.x, p.x, q),
									eS(n.y, o.y, p.y, q),
									c &&
										((j = this.relativeTarget), (m = c), es(j.x, m.x) && es(j.y, m.y)) &&
										(this.isProjectionDirty = !1),
									c || (c = V()),
									ej(c, this.relativeTarget)
							}
							i &&
								((this.animationValues = f),
								(function (a, b, c, d, e, f) {
									e
										? ((a.opacity = bn(0, c.opacity ?? 1, ef(d))),
											(a.opacityExit = bn(b.opacity ?? 1, 0, eg(d))))
										: f && (a.opacity = bn(b.opacity ?? 1, c.opacity ?? 1, d))
									for (let e = 0; e < eb; e++) {
										let f = `border${ea[e]}Radius`,
											g = ee(b, f),
											h = ee(c, f)
										;(void 0 !== g || void 0 !== h) &&
											(g || (g = 0),
											h || (h = 0),
											0 === g || 0 === h || ed(g) === ed(h)
												? ((a[f] = Math.max(bn(ec(g), ec(h), d), 0)),
													(u.test(h) || u.test(g)) && (a[f] += "%"))
												: (a[f] = h))
									}
									;(b.rotate || c.rotate) && (a.rotate = bn(b.rotate || 0, c.rotate || 0, d))
								})(f, e, this.latestValues, d, l, k)),
								this.root.scheduleUpdateProjection(),
								this.scheduleRender(),
								(this.animationProgress = d)
						}),
						this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
				}
				startAnimation(a) {
					this.notifyListeners("animationStart"),
						this.currentAnimation?.stop(),
						this.resumingFrom?.currentAnimation?.stop(),
						this.pendingAnimation && (aB(this.pendingAnimation), (this.pendingAnimation = void 0)),
						(this.pendingAnimation = aA.update(() => {
							var b, c, d
							let e
							;(d2.hasAnimatedSinceResize = !0),
								cf.layout++,
								this.motionValue || (this.motionValue = aV(0)),
								(this.currentAnimation =
									((b = this.motionValue),
									(c = [0, 1e3]),
									(d = {
										...a,
										velocity: 0,
										isSync: !0,
										onUpdate: (b) => {
											this.mixTargetDelta(b), a.onUpdate && a.onUpdate(b)
										},
										onStop: () => {
											cf.layout--
										},
										onComplete: () => {
											cf.layout--, a.onComplete && a.onComplete(), this.completeAnimation()
										},
									}),
									(e = W(b) ? b : aV(b)).start(dp("", e, c, d)),
									e.animation)),
								this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
								(this.pendingAnimation = void 0)
						}))
				}
				completeAnimation() {
					this.resumingFrom &&
						((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0))
					let a = this.getStack()
					a && a.exitAnimationComplete(),
						(this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
						this.notifyListeners("animationComplete")
				}
				finishAnimation() {
					this.currentAnimation &&
						(this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()),
						this.completeAnimation()
				}
				applyTransformsToTarget() {
					let a = this.getLead(),
						{ targetWithTransforms: b, target: c, layout: d, latestValues: e } = a
					if (b && c && d) {
						if (
							this !== a &&
							this.layout &&
							d &&
							eY(this.options.animationType, this.layout.layoutBox, d.layoutBox)
						) {
							c = this.target || V()
							let b = dF(this.layout.layoutBox.x)
							;(c.x.min = a.target.x.min), (c.x.max = c.x.min + b)
							let d = dF(this.layout.layoutBox.y)
							;(c.y.min = a.target.y.min), (c.y.max = c.y.min + d)
						}
						ej(b, c), bD(b, e), dH(this.projectionDeltaWithTransform, this.layoutCorrected, b, e)
					}
				}
				registerSharedNode(a, b) {
					this.sharedNodes.has(a) || this.sharedNodes.set(a, new ex()), this.sharedNodes.get(a).add(b)
					let c = b.options.initialPromotionConfig
					b.promote({
						transition: c ? c.transition : void 0,
						preserveFollowOpacity:
							c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(b) : void 0,
					})
				}
				isLead() {
					let a = this.getStack()
					return !a || a.lead === this
				}
				getLead() {
					let { layoutId: a } = this.options
					return (a && this.getStack()?.lead) || this
				}
				getPrevLead() {
					let { layoutId: a } = this.options
					return a ? this.getStack()?.prevLead : void 0
				}
				getStack() {
					let { layoutId: a } = this.options
					if (a) return this.root.sharedNodes.get(a)
				}
				promote({ needsReset: a, transition: b, preserveFollowOpacity: c } = {}) {
					let d = this.getStack()
					d && d.promote(this, c),
						a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
						b && this.setOptions({ transition: b })
				}
				relegate() {
					let a = this.getStack()
					return !!a && a.relegate(this)
				}
				resetSkewAndRotation() {
					let { visualElement: a } = this.options
					if (!a) return
					let b = !1,
						{ latestValues: c } = a
					if (
						((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (b = !0), !b)
					)
						return
					let d = {}
					c.z && eC("z", a, d, this.animationValues)
					for (let b = 0; b < eA.length; b++)
						eC(`rotate${eA[b]}`, a, d, this.animationValues), eC(`skew${eA[b]}`, a, d, this.animationValues)
					for (let b in (a.render(), d))
						a.setStaticValue(b, d[b]), this.animationValues && (this.animationValues[b] = d[b])
					a.scheduleRender()
				}
				applyProjectionStyles(a, b) {
					if (!this.instance || this.isSVG) return
					if (!this.isVisible) {
						a.visibility = "hidden"
						return
					}
					let c = this.getTransformTemplate()
					if (this.needsReset) {
						;(this.needsReset = !1),
							(a.visibility = ""),
							(a.opacity = ""),
							(a.pointerEvents = bV(b?.pointerEvents) || ""),
							(a.transform = c ? c(this.latestValues, "") : "none")
						return
					}
					let d = this.getLead()
					if (!this.projectionDelta || !this.layout || !d.target) {
						this.options.layoutId &&
							((a.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1),
							(a.pointerEvents = bV(b?.pointerEvents) || "")),
							this.hasProjected &&
								!bw(this.latestValues) &&
								((a.transform = c ? c({}, "") : "none"), (this.hasProjected = !1))
						return
					}
					a.visibility = ""
					let e = d.animationValues || d.latestValues
					this.applyTransformsToTarget()
					let f = (function (a, b, c) {
						let d = "",
							e = a.x.translate / b.x,
							f = a.y.translate / b.y,
							g = c?.z || 0
						if (
							((e || f || g) && (d = `translate3d(${e}px, ${f}px, ${g}px) `),
							(1 !== b.x || 1 !== b.y) && (d += `scale(${1 / b.x}, ${1 / b.y}) `),
							c)
						) {
							let { transformPerspective: a, rotate: b, rotateX: e, rotateY: f, skewX: g, skewY: h } = c
							a && (d = `perspective(${a}px) ${d}`),
								b && (d += `rotate(${b}deg) `),
								e && (d += `rotateX(${e}deg) `),
								f && (d += `rotateY(${f}deg) `),
								g && (d += `skewX(${g}deg) `),
								h && (d += `skewY(${h}deg) `)
						}
						let h = a.x.scale * b.x,
							i = a.y.scale * b.y
						return (1 !== h || 1 !== i) && (d += `scale(${h}, ${i})`), d || "none"
					})(this.projectionDeltaWithTransform, this.treeScale, e)
					c && (f = c(e, f)), (a.transform = f)
					let { x: g, y: h } = this.projectionDelta
					for (let b in ((a.transformOrigin = `${100 * g.origin}% ${100 * h.origin}% 0`),
					d.animationValues
						? (a.opacity =
								d === this
									? (e.opacity ?? this.latestValues.opacity ?? 1)
									: this.preserveOpacity
										? this.latestValues.opacity
										: e.opacityExit)
						: (a.opacity =
								d === this
									? void 0 !== e.opacity
										? e.opacity
										: ""
									: void 0 !== e.opacityExit
										? e.opacityExit
										: 0),
					bo)) {
						if (void 0 === e[b]) continue
						let { correct: c, applyTo: g, isCSSVariable: h } = bo[b],
							i = "none" === f ? e[b] : c(e[b], d)
						if (g) {
							let b = g.length
							for (let c = 0; c < b; c++) a[g[c]] = i
						} else h ? (this.options.visualElement.renderState.vars[b] = i) : (a[b] = i)
					}
					this.options.layoutId && (a.pointerEvents = d === this ? bV(b?.pointerEvents) || "" : "none")
				}
				clearSnapshot() {
					this.resumeFrom = this.snapshot = void 0
				}
				resetTree() {
					this.root.nodes.forEach((a) => a.currentAnimation?.stop()),
						this.root.nodes.forEach(eJ),
						this.root.sharedNodes.clear()
				}
			}
		}
		function eE(a) {
			a.updateLayout()
		}
		function eF(a) {
			let b = a.resumeFrom?.snapshot || a.snapshot
			if (a.isLead() && a.layout && b && a.hasListeners("didUpdate")) {
				let { layoutBox: c, measuredBox: d } = a.layout,
					{ animationType: e } = a.options,
					f = b.source !== a.layout.source
				"size" === e
					? dA((a) => {
							let d = f ? b.measuredBox[a] : b.layoutBox[a],
								e = dF(d)
							;(d.min = c[a].min), (d.max = d.min + e)
						})
					: eY(e, b.layoutBox, c) &&
						dA((d) => {
							let e = f ? b.measuredBox[d] : b.layoutBox[d],
								g = dF(c[d])
							;(e.max = e.min + g),
								a.relativeTarget &&
									!a.currentAnimation &&
									((a.isProjectionDirty = !0),
									(a.relativeTarget[d].max = a.relativeTarget[d].min + g))
						})
				let g = T()
				dH(g, c, b.layoutBox)
				let h = T()
				f ? dH(h, a.applyTransform(d, !0), b.measuredBox) : dH(h, c, b.layoutBox)
				let i = !er(g),
					j = !1
				if (!a.resumeFrom) {
					let d = a.getClosestProjectingParent()
					if (d && !d.resumeFrom) {
						let { snapshot: e, layout: f } = d
						if (e && f) {
							let g = V()
							dK(g, b.layoutBox, e.layoutBox)
							let h = V()
							dK(h, c, f.layoutBox),
								eu(g, h) || (j = !0),
								d.options.layoutRoot &&
									((a.relativeTarget = h), (a.relativeTargetOrigin = g), (a.relativeParent = d))
						}
					}
				}
				a.notifyListeners("didUpdate", {
					layout: c,
					snapshot: b,
					delta: h,
					layoutDelta: g,
					hasLayoutChanged: i,
					hasRelativeLayoutChanged: j,
				})
			} else if (a.isLead()) {
				let { onExitComplete: b } = a.options
				b && b()
			}
			a.options.transition = void 0
		}
		function eG(a) {
			a.parent &&
				(a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
				a.isSharedProjectionDirty ||
					(a.isSharedProjectionDirty = !!(
						a.isProjectionDirty ||
						a.parent.isProjectionDirty ||
						a.parent.isSharedProjectionDirty
					)),
				a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty))
		}
		function eH(a) {
			a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1
		}
		function eI(a) {
			a.clearSnapshot()
		}
		function eJ(a) {
			a.clearMeasurements()
		}
		function eK(a) {
			a.isLayoutDirty = !1
		}
		function eL(a) {
			let { visualElement: b } = a.options
			b && b.getProps().onBeforeLayoutMeasure && b.notify("BeforeLayoutMeasure"), a.resetTransform()
		}
		function eM(a) {
			a.finishAnimation(), (a.targetDelta = a.relativeTarget = a.target = void 0), (a.isProjectionDirty = !0)
		}
		function eN(a) {
			a.resolveTargetDelta()
		}
		function eO(a) {
			a.calcProjection()
		}
		function eP(a) {
			a.resetSkewAndRotation()
		}
		function eQ(a) {
			a.removeLeadSnapshot()
		}
		function eR(a, b, c) {
			;(a.translate = bn(b.translate, 0, c)),
				(a.scale = bn(b.scale, 1, c)),
				(a.origin = b.origin),
				(a.originPoint = b.originPoint)
		}
		function eS(a, b, c, d) {
			;(a.min = bn(b.min, c.min, d)), (a.max = bn(b.max, c.max, d))
		}
		function eT(a) {
			return a.animationValues && void 0 !== a.animationValues.opacityExit
		}
		let eU = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
			eV = (a) => "u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(a),
			eW = eV("applewebkit/") && !eV("chrome/") ? Math.round : aw
		function eX(a) {
			;(a.min = eW(a.min)), (a.max = eW(a.max))
		}
		function eY(a, b, c) {
			return "position" === a || ("preserve-aspect" === a && !(0.2 >= Math.abs(ev(b) - ev(c))))
		}
		function eZ(a) {
			return a !== a.root && a.scroll?.wasRoot
		}
		let e$ = eD({
				attachResizeListener: (a, b) => dD(a, "resize", b),
				measureScroll: () => ({
					x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
					y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
				}),
				checkIsScrollRoot: () => !0,
			}),
			e_ = { current: void 0 },
			e0 = eD({
				measureScroll: (a) => ({ x: a.scrollLeft, y: a.scrollTop }),
				defaultParent: () => {
					if (!e_.current) {
						let a = new e$({})
						a.mount(window), a.setOptions({ layoutScroll: !0 }), (e_.current = a)
					}
					return e_.current
				},
				resetTransform: (a, b) => {
					a.style.transform = void 0 !== b ? b : "none"
				},
				checkIsScrollRoot: (a) => "fixed" === window.getComputedStyle(a).position,
			})
		function e1(a, b) {
			let c = (function (a, b, c) {
					if (null == a) return []
					if (a instanceof EventTarget) return [a]
					if ("string" == typeof a) {
						let b = document,
							c = void 0 ?? b.querySelectorAll(a)
						return c ? Array.from(c) : []
					}
					return Array.from(a).filter((a) => null != a)
				})(a),
				d = new AbortController()
			return [c, { passive: !0, ...b, signal: d.signal }, () => d.abort()]
		}
		function e2(a) {
			return !("touch" === a.pointerType || dE.x || dE.y)
		}
		function e3(a, b, c) {
			let { props: d } = a
			a.animationState && d.whileHover && a.animationState.setActive("whileHover", "Start" === c)
			let e = d["onHover" + c]
			e && aA.postRender(() => e(b, dM(b)))
		}
		function e4(a) {
			return d8(a) && "offsetHeight" in a
		}
		a.s(["isHTMLElement", () => e4], 88412)
		let e5 = (a, b) => !!b && (a === b || e5(a, b.parentElement)),
			e6 = new WeakSet()
		function e7(a) {
			return (b) => {
				"Enter" === b.key && a(b)
			}
		}
		function e8(a, b) {
			a.dispatchEvent(new PointerEvent("pointer" + b, { isPrimary: !0, bubbles: !0 }))
		}
		function e9(a) {
			return dL(a) && !(dE.x || dE.y)
		}
		function fa(a, b, c) {
			let { props: d } = a
			if (a.current instanceof HTMLButtonElement && a.current.disabled) return
			a.animationState && d.whileTap && a.animationState.setActive("whileTap", "Start" === c)
			let e = d["onTap" + ("End" === c ? "" : c)]
			e && aA.postRender(() => e(b, dM(b)))
		}
		let fb = new WeakMap(),
			fc = new WeakMap(),
			fd = (a) => {
				let b = fb.get(a.target)
				b && b(a)
			},
			fe = (a) => {
				a.forEach(fd)
			},
			ff = { some: 0, all: 1 },
			fg = (function (a, b) {
				if ("u" < typeof Proxy) return b6
				let c = new Map(),
					d = (c, d) => b6(c, d, a, b)
				return new Proxy((a, b) => d(a, b), {
					get: (e, f) => ("create" === f ? d : (c.has(f) || c.set(f, b6(f, void 0, a, b)), c.get(f))),
				})
			})(
				{
					animation: {
						Feature: class extends b7 {
							constructor(a) {
								super(a),
									a.animationState ||
										(a.animationState = (function (a) {
											let b = (b) =>
													Promise.all(
														b.map(({ animation: b, options: c }) =>
															(function (a, b, c = {}) {
																let d
																if ((a.notify("AnimationStart", b), Array.isArray(b)))
																	d = Promise.all(b.map((b) => ds(a, b, c)))
																else if ("string" == typeof b) d = ds(a, b, c)
																else {
																	let e =
																		"function" == typeof b ? b8(a, b, c.custom) : b
																	d = Promise.all(dq(a, e, c))
																}
																return d.then(() => {
																	a.notify("AnimationComplete", b)
																})
															})(a, b, c),
														),
													),
												c = dy(),
												d = !0,
												e = (b) => (c, d) => {
													let e = b8(a, d, "exit" === b ? a.presenceContext?.custom : void 0)
													if (e) {
														let { transition: a, transitionEnd: b, ...d } = e
														c = { ...c, ...d, ...b }
													}
													return c
												}
											function f(f) {
												let { props: g } = a,
													h =
														(function a(b) {
															if (!b) return
															if (!b.isControllingVariants) {
																let c = (b.parent && a(b.parent)) || {}
																return (
																	void 0 !== b.props.initial &&
																		(c.initial = b.props.initial),
																	c
																)
															}
															let c = {}
															for (let a = 0; a < dt; a++) {
																let d = a0[a],
																	e = b.props[d]
																;(a$(e) || !1 === e) && (c[d] = e)
															}
															return c
														})(a.parent) || {},
													i = [],
													j = new Set(),
													k = {},
													l = 1 / 0
												for (let b = 0; b < dw; b++) {
													var m, n
													let o = dv[b],
														p = c[o],
														q = void 0 !== g[o] ? g[o] : h[o],
														r = a$(q),
														s = o === f ? p.isActive : null
													!1 === s && (l = b)
													let t = q === h[o] && q !== g[o] && r
													if (
														(t && d && a.manuallyAnimateOnMount && (t = !1),
														(p.protectedKeys = { ...k }),
														(!p.isActive && null === s) ||
															(!q && !p.prevProp) ||
															aZ(q) ||
															"boolean" == typeof q)
													)
														continue
													let u =
															((m = p.prevProp),
															"string" == typeof (n = q)
																? n !== m
																: !!Array.isArray(n) && !du(n, m)),
														v = u || (o === f && p.isActive && !t && r) || (b > l && r),
														w = !1,
														x = Array.isArray(q) ? q : [q],
														y = x.reduce(e(o), {})
													!1 === s && (y = {})
													let { prevResolvedValues: z = {} } = p,
														A = { ...z, ...y },
														B = (b) => {
															;(v = !0),
																j.has(b) && ((w = !0), j.delete(b)),
																(p.needsAnimating[b] = !0)
															let c = a.getValue(b)
															c && (c.liveStyle = !1)
														}
													for (let a in A) {
														let b = y[a],
															c = z[a]
														if (!k.hasOwnProperty(a))
															(ca(b) && ca(c) ? du(b, c) : b === c)
																? void 0 !== b && j.has(a)
																	? B(a)
																	: (p.protectedKeys[a] = !0)
																: null != b
																	? B(a)
																	: j.add(a)
													}
													;(p.prevProp = q),
														(p.prevResolvedValues = y),
														p.isActive && (k = { ...k, ...y }),
														d && a.blockInitialAnimation && (v = !1)
													let C = t && u,
														D = !C || w
													v &&
														D &&
														i.push(
															...x.map((b) => {
																let c = { type: o }
																if (
																	"string" == typeof b &&
																	d &&
																	!C &&
																	a.manuallyAnimateOnMount &&
																	a.parent
																) {
																	let { parent: d } = a,
																		e = b8(d, b)
																	if (d.enteringChildren && e) {
																		let { delayChildren: b } = e.transition || {}
																		c.delay = dr(d.enteringChildren, a, b)
																	}
																}
																return { animation: b, options: c }
															}),
														)
												}
												if (j.size) {
													let b = {}
													if ("boolean" != typeof g.initial) {
														let c = b8(
															a,
															Array.isArray(g.initial) ? g.initial[0] : g.initial,
														)
														c && c.transition && (b.transition = c.transition)
													}
													j.forEach((c) => {
														let d = a.getBaseTarget(c),
															e = a.getValue(c)
														e && (e.liveStyle = !0), (b[c] = d ?? null)
													}),
														i.push({ animation: b })
												}
												let o = !!i.length
												return (
													d &&
														(!1 === g.initial || g.initial === g.animate) &&
														!a.manuallyAnimateOnMount &&
														(o = !1),
													(d = !1),
													o ? b(i) : Promise.resolve()
												)
											}
											return {
												animateChanges: f,
												setActive: function (b, d) {
													if (c[b].isActive === d) return Promise.resolve()
													a.variantChildren?.forEach((a) =>
														a.animationState?.setActive(b, d),
													),
														(c[b].isActive = d)
													let e = f(b)
													for (let a in c) c[a].protectedKeys = {}
													return e
												},
												setAnimateFunction: function (c) {
													b = c(a)
												},
												getState: () => c,
												reset: () => {
													c = dy()
												},
											}
										})(a))
							}
							updateAnimationControlsSubscription() {
								let { animate: a } = this.node.getProps()
								aZ(a) && (this.unmountControls = a.subscribe(this.node))
							}
							mount() {
								this.updateAnimationControlsSubscription()
							}
							update() {
								let { animate: a } = this.node.getProps(),
									{ animate: b } = this.node.prevProps || {}
								a !== b && this.updateAnimationControlsSubscription()
							}
							unmount() {
								this.node.animationState.reset(), this.unmountControls?.()
							}
						},
					},
					exit: {
						Feature: class extends b7 {
							constructor() {
								super(...arguments), (this.id = dz++)
							}
							update() {
								if (!this.node.presenceContext) return
								let { isPresent: a, onExitComplete: b } = this.node.presenceContext,
									{ isPresent: c } = this.node.prevPresenceContext || {}
								if (!this.node.animationState || a === c) return
								let d = this.node.animationState.setActive("exit", !a)
								b &&
									!a &&
									d.then(() => {
										b(this.id)
									})
							}
							mount() {
								let { register: a, onExitComplete: b } = this.node.presenceContext || {}
								b && b(this.id), a && (this.unmount = a(this.id))
							}
							unmount() {}
						},
					},
					inView: {
						Feature: class extends b7 {
							constructor() {
								super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1)
							}
							startObserver() {
								var a
								let b
								this.unmount()
								let { viewport: c = {} } = this.node.getProps(),
									{ root: d, margin: e, amount: f = "some", once: g } = c,
									h = {
										root: d ? d.current : void 0,
										rootMargin: e,
										threshold: "number" == typeof f ? f : ff[f],
									},
									i = (a) => {
										let { isIntersecting: b } = a
										if (
											this.isInView === b ||
											((this.isInView = b), g && !b && this.hasEnteredView)
										)
											return
										b && (this.hasEnteredView = !0),
											this.node.animationState &&
												this.node.animationState.setActive("whileInView", b)
										let { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
											e = b ? c : d
										e && e(a)
									}
								return (
									(a = this.node.current),
									(b = (function ({ root: a, ...b }) {
										let c = a || document
										fc.has(c) || fc.set(c, {})
										let d = fc.get(c),
											e = JSON.stringify(b)
										return d[e] || (d[e] = new IntersectionObserver(fe, { root: a, ...b })), d[e]
									})(h)),
									fb.set(a, i),
									b.observe(a),
									() => {
										fb.delete(a), b.unobserve(a)
									}
								)
							}
							mount() {
								this.startObserver()
							}
							update() {
								if ("u" < typeof IntersectionObserver) return
								let { props: a, prevProps: b } = this.node
								;["amount", "margin", "root"].some(
									(function ({ viewport: a = {} }, { viewport: b = {} } = {}) {
										return (c) => a[c] !== b[c]
									})(a, b),
								) && this.startObserver()
							}
							unmount() {}
						},
					},
					tap: {
						Feature: class extends b7 {
							mount() {
								let { current: a } = this.node
								a &&
									(this.unmount = (function (a, b, c = {}) {
										let [d, e, f] = e1(a, c),
											g = (a) => {
												let d = a.currentTarget
												if (!e9(a)) return
												e6.add(d)
												let f = b(d, a),
													g = (a, b) => {
														window.removeEventListener("pointerup", h),
															window.removeEventListener("pointercancel", i),
															e6.has(d) && e6.delete(d),
															e9(a) && "function" == typeof f && f(a, { success: b })
													},
													h = (a) => {
														g(
															a,
															d === window ||
																d === document ||
																c.useGlobalTarget ||
																e5(d, a.target),
														)
													},
													i = (a) => {
														g(a, !1)
													}
												window.addEventListener("pointerup", h, e),
													window.addEventListener("pointercancel", i, e)
											}
										return (
											d.forEach((a) => {
												;(c.useGlobalTarget ? window : a).addEventListener("pointerdown", g, e),
													e4(a) &&
														(a.addEventListener("focus", (a) =>
															((a, b) => {
																let c = a.currentTarget
																if (!c) return
																let d = e7(() => {
																	if (e6.has(c)) return
																	e8(c, "down")
																	let a = e7(() => {
																		e8(c, "up")
																	})
																	c.addEventListener("keyup", a, b),
																		c.addEventListener(
																			"blur",
																			() => e8(c, "cancel"),
																			b,
																		)
																})
																c.addEventListener("keydown", d, b),
																	c.addEventListener(
																		"blur",
																		() => c.removeEventListener("keydown", d),
																		b,
																	)
															})(a, e),
														),
														dC(a) || a.hasAttribute("tabindex") || (a.tabIndex = 0))
											}),
											f
										)
									})(
										a,
										(a, b) => (
											fa(this.node, b, "Start"),
											(a, { success: b }) => fa(this.node, a, b ? "End" : "Cancel")
										),
										{ useGlobalTarget: this.node.props.globalTapTarget },
									))
							}
							unmount() {}
						},
					},
					focus: {
						Feature: class extends b7 {
							constructor() {
								super(...arguments), (this.isActive = !1)
							}
							onFocus() {
								let a = !1
								try {
									a = this.node.current.matches(":focus-visible")
								} catch (b) {
									a = !0
								}
								a &&
									this.node.animationState &&
									(this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0))
							}
							onBlur() {
								this.isActive &&
									this.node.animationState &&
									(this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1))
							}
							mount() {
								this.unmount = ce(
									dD(this.node.current, "focus", () => this.onFocus()),
									dD(this.node.current, "blur", () => this.onBlur()),
								)
							}
							unmount() {}
						},
					},
					hover: {
						Feature: class extends b7 {
							mount() {
								let { current: a } = this.node
								a &&
									(this.unmount = (function (a, b, c = {}) {
										let [d, e, f] = e1(a, c),
											g = (a) => {
												if (!e2(a)) return
												let { target: c } = a,
													d = b(c, a)
												if ("function" != typeof d || !c) return
												let f = (a) => {
													e2(a) && (d(a), c.removeEventListener("pointerleave", f))
												}
												c.addEventListener("pointerleave", f, e)
											}
										return (
											d.forEach((a) => {
												a.addEventListener("pointerenter", g, e)
											}),
											f
										)
									})(a, (a, b) => (e3(this.node, b, "Start"), (a) => e3(this.node, a, "End"))))
							}
							unmount() {}
						},
					},
					pan: {
						Feature: class extends b7 {
							constructor() {
								super(...arguments), (this.removePointerDownListener = aw)
							}
							onPointerDown(a) {
								this.session = new dR(a, this.createPanHandlers(), {
									transformPagePoint: this.node.getTransformPagePoint(),
									contextWindow: dO(this.node),
								})
							}
							createPanHandlers() {
								let {
									onPanSessionStart: a,
									onPanStart: b,
									onPan: c,
									onPanEnd: d,
								} = this.node.getProps()
								return {
									onSessionStart: d1(a),
									onStart: d1(b),
									onMove: c,
									onEnd: (a, b) => {
										delete this.session, d && aA.postRender(() => d(a, b))
									},
								}
							}
							mount() {
								this.removePointerDownListener = dN(this.node.current, "pointerdown", (a) =>
									this.onPointerDown(a),
								)
							}
							update() {
								this.session && this.session.updateHandlers(this.createPanHandlers())
							}
							unmount() {
								this.removePointerDownListener(), this.session && this.session.end()
							}
						},
					},
					drag: {
						Feature: class extends b7 {
							constructor(a) {
								super(a),
									(this.removeGroupControls = aw),
									(this.removeListeners = aw),
									(this.controls = new d_(a))
							}
							mount() {
								let { dragControls: a } = this.node.getProps()
								a && (this.removeGroupControls = a.subscribe(this.controls)),
									(this.removeListeners = this.controls.addListeners() || aw)
							}
							update() {
								let { dragControls: a } = this.node.getProps(),
									{ dragControls: b } = this.node.prevProps || {}
								a !== b &&
									(this.removeGroupControls(),
									a && (this.removeGroupControls = a.subscribe(this.controls)))
							}
							unmount() {
								this.removeGroupControls(),
									this.removeListeners(),
									this.controls.isDragging || this.controls.endPanSession()
							}
						},
						ProjectionNode: e0,
						MeasureLayout: d7,
					},
					layout: { ProjectionNode: e0, MeasureLayout: d7 },
				},
				(a, b) => ((b.isSVG ?? bJ(a)) ? new bs(b) : new bF(b, { allowProjection: a !== bH.Fragment })),
			)
		a.s(["motion", () => fg], 57429)
	},
	23260,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(67191)
		function d() {
			let a = (0, c.useRef)(null)
			return (
				(0, c.useEffect)(() => {
					let b,
						c = a.current
					if (!c) return
					let d = c.getContext("2d")
					if (!d) return
					let e = [
							{
								x: 0.2 * c.width,
								y: 0.3 * c.height,
								radius: 0.4 * c.width,
								color: "rgba(0, 100, 255, 0.15)",
							},
							{
								x: 0.8 * c.width,
								y: 0.7 * c.height,
								radius: 0.5 * c.width,
								color: "rgba(100, 0, 255, 0.1)",
							},
						],
						f = [],
						g = Math.min(50, Math.floor(window.innerWidth / 40)),
						h = () => {
							;(c.width = window.innerWidth),
								(c.height = window.innerHeight),
								(e = [
									{
										x: 0.2 * c.width,
										y: 0.3 * c.height,
										radius: 0.4 * c.width,
										color: "rgba(0, 100, 255, 0.15)",
									},
									{
										x: 0.8 * c.width,
										y: 0.7 * c.height,
										radius: 0.5 * c.width,
										color: "rgba(100, 0, 255, 0.1)",
									},
								]),
								i()
						}
					function i() {
						if (!d) throw Error("Context is null (not initialized?)")
						if (!c) throw Error("Canvas is null (not initialized?)")
						d.clearRect(0, 0, c.width, c.height),
							e.forEach((a) => {
								let b = d.createRadialGradient(a.x, a.y, 0, a.x, a.y, a.radius)
								b.addColorStop(0, a.color),
									b.addColorStop(1, "rgba(0, 0, 0, 0)"),
									(d.fillStyle = b),
									d.fillRect(0, 0, c.width, c.height)
							}),
							(d.strokeStyle = "rgba(50, 50, 70, 0.15)"),
							(d.lineWidth = 0.5)
						let a = 0.7 * c.height,
							b = 0.5 * c.width
						for (let e = 0; e <= c.width; e += 50) {
							let f = e / c.width - 0.5
							d.beginPath(), d.moveTo(e, 0)
							let g = a - 50 * Math.abs(f)
							d.quadraticCurveTo(e + (b - e) * 0.3, g, b + (e - b) * 0.2, a), d.stroke()
						}
						for (let c = 0; c <= a; c += 50) {
							let e = 50 * (1 + (c / a) * 5)
							d.beginPath(), d.moveTo(b - e, c), d.lineTo(b + e, c), d.stroke()
						}
						f.forEach((a) => {
							a.update(), a.draw()
						}),
							(function () {
								if (!d) throw Error("Context is null (not initialized?)")
								for (let a = 0; a < f.length; a++)
									for (let b = a; b < f.length; b++) {
										let c = f[a].x - f[b].x,
											e = f[a].y - f[b].y,
											g = Math.sqrt(c * c + e * e)
										if (g < 150) {
											let c = (1 - g / 150) * 0.5
											;(d.strokeStyle = `rgba(100, 150, 255, ${c})`),
												(d.lineWidth = 0.5),
												d.beginPath(),
												d.moveTo(f[a].x, f[a].y),
												d.lineTo(f[b].x, f[b].y),
												d.stroke()
										}
									}
							})()
					}
					h(), window.addEventListener("resize", h)
					class j {
						x
						y
						size
						speedX
						speedY
						color
						opacity
						constructor() {
							if (!c) throw Error("Canvas is null (not initialized?)")
							;(this.x = Math.random() * c.width),
								(this.y = Math.random() * (0.7 * c.height)),
								(this.size = 2 * Math.random() + 1),
								(this.speedX = (Math.random() - 0.5) * 0.8),
								(this.speedY = (Math.random() - 0.5) * 0.8),
								(this.color = "rgba(100, 150, 255, "),
								(this.opacity = 0.5 * Math.random() + 0.2)
						}
						update() {
							if (!c) throw Error("Canvas is null (not initialized?)")
							;(this.x += this.speedX),
								(this.y += this.speedY),
								this.x > c.width ? (this.x = 0) : this.x < 0 && (this.x = c.width),
								this.y > 0.7 * c.height ? (this.y = 0) : this.y < 0 && (this.y = 0.7 * c.height),
								(this.opacity += 0.01 * Math.sin(0.001 * Date.now())),
								(this.opacity = Math.max(0.1, Math.min(0.7, this.opacity)))
						}
						draw() {
							if (!d) throw Error("Context is null (not initialized?)")
							;(d.fillStyle = `${this.color}${this.opacity})`),
								d.beginPath(),
								d.arc(this.x, this.y, this.size, 0, 2 * Math.PI),
								d.fill()
						}
					}
					for (let a = 0; a < g; a++) f.push(new j())
					let k = 0.2 * c.width,
						l = 0.3 * c.height,
						m = (a) => {
							;(k = a.clientX), (l = a.clientY)
						}
					return (
						!(function a() {
							if (((b = requestAnimationFrame(a)), !c)) throw Error("Canvas is null (not initialized?)")
							let d = k - e[0].x,
								f = l - e[0].y
							;(e[0].x += 0.05 * d), (e[0].y += 0.05 * f)
							let g = Math.sqrt(d * d + f * f)
							;(e[0].radius = Math.max(0.2 * c.width, Math.min(0.4 * c.width, 0.3 * c.width + 0.1 * g))),
								i()
						})(),
						window.addEventListener("mousemove", m),
						() => {
							window.removeEventListener("resize", h),
								window.removeEventListener("mousemove", m),
								cancelAnimationFrame(b)
						}
					)
				}, []),
				(0, b.jsx)("canvas", { ref: a, className: "absolute inset-0 h-full w-full", style: { zIndex: 0 } })
			)
		}
		a.s(["AnimatedBackground", () => d])
	},
	92427,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(67191),
			d = a.i(57429)
		function e() {
			let [a, e] = (0, c.useState)("code"),
				[g, h] = (0, c.useState)(!1),
				[i, j] = (0, c.useState)(""),
				[k, l] = (0, c.useState)(0),
				m = (0, c.useRef)(null)
			;(0, c.useEffect)(() => {
				if (g && k < f[a].code.length) {
					let b = setTimeout(() => {
						j((b) => b + f[a].code[k]),
							l(k + 1),
							m.current && (m.current.scrollTop = m.current.scrollHeight)
					}, 15)
					return () => clearTimeout(b)
				}
				if (k >= f[a].code.length) {
					h(!1)
					let b = setTimeout(() => {
						n("code" === a ? "architect" : "architect" === a ? "debug" : "code")
					}, 1e3)
					return () => clearTimeout(b)
				}
			}, [g, k, a])
			let n = (a) => {
				e(a), j(""), l(0), h(!0), m.current && (m.current.scrollTop = 0)
			}
			return (
				(0, c.useEffect)(() => {
					h(!0)
				}, []),
				(0, b.jsx)("div", {
					className:
						"relative z-10 w-full max-w-[90vw] rounded-lg border border-border bg-background/50 p-2 shadow-2xl backdrop-blur-sm sm:max-w-[500px]",
					children: (0, b.jsxs)("div", {
						className: "rounded-md bg-muted p-1.5 dark:bg-gray-900 sm:p-2",
						children: [
							(0, b.jsxs)("div", {
								className:
									"flex items-center justify-between border-b border-border px-2 py-1.5 sm:px-3 sm:py-2",
								children: [
									(0, b.jsxs)("div", {
										className: "flex items-center space-x-1.5",
										children: [
											(0, b.jsx)("div", {
												className: "h-2.5 w-2.5 rounded-full bg-red-500 sm:h-3 sm:w-3",
											}),
											(0, b.jsx)("div", {
												className: "h-2.5 w-2.5 rounded-full bg-yellow-500 sm:h-3 sm:w-3",
											}),
											(0, b.jsx)("div", {
												className: "h-2.5 w-2.5 rounded-full bg-green-500 sm:h-3 sm:w-3",
											}),
										],
									}),
									(0, b.jsxs)("div", {
										className: "flex space-x-1",
										children: [
											(0, b.jsx)("button", {
												onClick: () => n("code"),
												className: `rounded px-2 py-0.5 text-xs font-medium transition-colors sm:text-sm ${"code" === a ? "bg-blue-500/20 text-blue-400" : "text-gray-400 hover:bg-gray-800"}`,
												children: "Code",
											}),
											(0, b.jsx)("button", {
												onClick: () => n("architect"),
												className: `rounded px-2 py-0.5 text-xs font-medium transition-colors sm:text-sm ${"architect" === a ? "bg-purple-500/20 text-purple-400" : "text-gray-400 hover:bg-gray-800"}`,
												children: "Architect",
											}),
											(0, b.jsx)("button", {
												onClick: () => n("debug"),
												className: `rounded px-2 py-0.5 text-xs font-medium transition-colors sm:text-sm ${"debug" === a ? "bg-green-500/20 text-green-400" : "text-gray-400 hover:bg-gray-800"}`,
												children: "Debug",
											}),
										],
									}),
								],
							}),
							(0, b.jsx)("div", {
								className: "p-2 sm:p-4",
								children: (0, b.jsx)("pre", {
									ref: m,
									className:
										"scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent overflow-y-hidden text-xs text-muted-foreground max-lg:h-[25vh] sm:text-sm lg:max-h-[50vh]",
									children: (0, b.jsxs)("code", {
										className: "block whitespace-pre font-mono",
										children: [
											i,
											g &&
												(0, b.jsx)(d.motion.span, {
													animate: { opacity: [1, 0] },
													transition: { repeat: 1 / 0, duration: 0.8 },
													className: "inline-block h-4 w-2 bg-blue-500",
												}),
										],
									}),
								}),
							}),
						],
					}),
				})
			)
		}
		let f = {
			code: {
				code: `// Code Mode
You: Generate a React component for a user profile card

Roo: Here's a React component for a user profile card:

import React from 'react';

interface UserProfileProps {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  stats: {
    projects: number;
    followers: number;
    following: number;
  };
}

export const UserProfile: React.FC<UserProfileProps> = ({
  name,
  role,
  avatar,
  bio,
  stats
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
      <div className="flex items-center space-x-4">
        <img 
          src={avatar || "/placeholder.svg"} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{bio}</p>
      <div className="mt-6 flex justify-between">
        <div className="text-center">
          <span className="block font-bold">{stats.projects}</span>
          <span className="text-sm text-gray-500">Projects</span>
        </div>
        <div className="text-center">
          <span className="block font-bold">{stats.followers}</span>
          <span className="text-sm text-gray-500">Followers</span>
        </div>
        <div className="text-center">
          <span className="block font-bold">{stats.following}</span>
          <span className="text-sm text-gray-500">Following</span>
        </div>
      </div>
    </div>
  );
};`,
			},
			architect: {
				code: `// Architect Mode
// Project: E-commerce Platform
// Request: Design the authentication system

Roo is analyzing your project...

📂 Recommended Architecture:

auth/
├─ services/
│  ├─ authService.ts       // Core authentication logic
│  ├─ tokenService.ts      // JWT handling and refresh
│  └─ userService.ts       // User data operations
├─ hooks/
│  ├─ useAuth.ts           // React hook for auth state
│  └─ useProtectedRoute.ts // Route protection
├─ components/
│  ├─ LoginForm.tsx        // Login UI
│  ├─ SignupForm.tsx       // Registration UI
│  ├─ PasswordReset.tsx    // Password recovery
│  └─ TwoFactorAuth.tsx    // 2FA implementation
└─ context/
   └─ AuthContext.tsx      // Global auth state

🔐 Security Recommendations:
- Implement PKCE flow for auth code exchange
- Use HttpOnly cookies for refresh tokens
- Rate limit authentication attempts
- Add device fingerprinting for suspicious login detection

⚡ Performance Considerations:
- Prefetch user data on auth
- Implement token refresh without UI disruption
- Lazy load auth components

Would you like me to generate any of these files?`,
			},
			debug: {
				code: `// Debug Mode
// Analyzing error: TypeError: Cannot read property 'map' of undefined

Roo has analyzed your code and found 3 issues:

🐛 Issue #1: Null data reference
  Line 42: const items = data.items.map(item => item.name);
  
  ✓ Root Cause: 'data' is undefined when component mounts
  ✓ Context: API request in useEffect hasn't completed yet
  
  Recommended Fix:
  const items = data?.items?.map(item => item.name) || [];

🐛 Issue #2: Missing dependency in useEffect
  Line 37: useEffect(() => { fetchData() }, []);
  
  ✓ Root Cause: fetchData depends on 'userId' but isn't in deps array
  ✓ Context: This causes stale data when userId changes
  
  Recommended Fix:
  useEffect(() => { fetchData() }, [userId, fetchData]);

🐛 Issue #3: Memory leak from unfinished API call
  Line 38: const response = await api.getItems(userId);
  
  ✓ Root Cause: No cleanup when component unmounts during API call
  ✓ Context: This triggers React warning in development
  
  Recommended Fix:
  Add AbortController to cancel pending requests on unmount

Apply these fixes automatically? [Yes/No]`,
			},
		}
		a.s(["CodeExample", () => e])
	},
	75581,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(57429),
			d = a.i(71544)
		let e = ["Apple", "Microsoft", "Amazon", "ByteDance", "Rakuten", "Carvana"]
		function f() {
			return (0, b.jsxs)("div", {
				children: [
					(0, b.jsx)(c.motion.p, {
						initial: { opacity: 0, y: 10 },
						animate: { opacity: 1, y: 0 },
						transition: { duration: 0.5, ease: "easeOut" },
						className: "text-xs text-muted-foreground mb-2 ",
						children: "Helping teams ship more at",
					}),
					(0, b.jsx)("div", {
						className: "mt-4 flex flex-wrap items-center gap-6 justify-center sm:justify-start",
						children: e.map((a, e) =>
							(0, b.jsx)(
								c.motion.div,
								{
									initial: { opacity: 0, y: 10 },
									animate: { opacity: 1, y: 0 },
									transition: { duration: 0.5, delay: 0.1 * e, ease: "easeOut" },
									children: (0, b.jsx)(d.default, {
										width: 0,
										height: 0,
										className: "h-[20px] w-auto overflow-clip opacity-70 dark:invert",
										src: `/logos/${a.toLowerCase().replace(/\s+/g, "-")}.svg`,
										alt: `${a} Logo`,
									}),
								},
								a,
							),
						),
					}),
				],
			})
		}
		a.s(["CompanyLogos", () => f])
	},
	94692,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(67191),
			d = a.i(57429),
			e = a.i(92137),
			f = a.i(42685),
			g = a.i(46395)
		let h = [
			{
				question: "What exactly is Roo Code?",
				answer: (0, b.jsx)(b.Fragment, {
					children:
						"Roo Code is an open-source, AI-powered coding assistant that runs in VS Code. It goes beyond simple autocompletion by reading and writing across multiple files, executing commands, and adapting to your workflow—like having a whole dev team right inside your editor.",
				}),
			},
			{
				question: "How does Roo Code differ from Copilot, Cursor, or Windsurf?",
				answer: (0, b.jsxs)(b.Fragment, {
					children: [
						"Roo Code is ",
						(0, b.jsx)("strong", { children: "open-source and fully customizable" }),
						", letting you integrate any AI model you choose (e.g, OpenAI, Anthropic, local LLMs, etc.). It's built for ",
						(0, b.jsx)("strong", { children: "multi-file edits" }),
						", so it can read, refactor, and update multiple files at once for holistic code changes. Its",
						" ",
						(0, b.jsx)("strong", { children: "agentic abilities" }),
						" go beyond a typical AI autocomplete, enabling it to run tests, open a browser, and handle deeper tasks. And you're always in control: Roo Code is",
						" ",
						(0, b.jsx)("strong", { children: "permission-based" }),
						", meaning you can control and approve any file changes or command executions.",
					],
				}),
			},
			{
				question: "Is Roo Code really free?",
				answer: (0, b.jsx)(b.Fragment, {
					children:
						"Yes! Roo Code is completely free and open-source. You'll only pay for the AI model usage if you use a paid API (like OpenAI). If you choose free or self-hosted models, there's no cost at all.",
				}),
			},
			{
				question: "Will my code stay private?",
				answer: (0, b.jsx)(b.Fragment, {
					children:
						"Yes. Because Roo Code is an extension in your local VS Code, your code never leaves your machine unless you connect to an external AI API. Even then, you control exactly what is sent to the AI model. You can use tools like .rooignore to exclude sensitive files, and you can also run Roo Code with offline/local models for full privacy.",
				}),
			},
			{
				question: "Which AI models does Roo Code support?",
				answer: (0, b.jsx)(b.Fragment, {
					children:
						"Roo Code is fully model-agnostic, giving you the flexibility to work with whatever AI models you prefer. It supports OpenAI models (like GPT-4o, GPT-4, and o1), Anthropic's Claude (including Claude 3.5 Sonnet), Google's Gemini models, and local LLMs via APIs or specialized plugins. You can even connect any other model that follows Roo Code's Model Context Protocol (MCP).",
				}),
			},
			{
				question: "Does Roo Code support my programming language?",
				answer: (0, b.jsx)(b.Fragment, {
					children:
						"Likely yes! Roo Code supports a wide range of languages—Python, Java, C#, JavaScript/TypeScript, Go, Rust, etc. Since it leverages the AI model's understanding, new or lesser-known languages may also work, depending on model support.",
				}),
			},
			{
				question: "How do I install and get started?",
				answer: (0, b.jsxs)(b.Fragment, {
					children: [
						"Install Roo Code from the",
						" ",
						(0, b.jsx)("a", {
							href: "https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: "VS Code Marketplace",
						}),
						" ",
						"(or GitHub). Add your AI keys (OpenAI, Anthropic, or other) in the extension settings. Open the Roo panel (the rocket icon) in VS Code, and start typing commands in plain English!",
						" ",
						(0, b.jsx)("a", {
							href: "https://docs.roocode.com/tutorial-videos",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: "Watch our tutorial to help you get started.",
						}),
					],
				}),
			},
			{
				question: "Can it handle large, enterprise-scale projects?",
				answer: (0, b.jsxs)(b.Fragment, {
					children: [
						"Absolutely. Roo Code uses efficient strategies (like partial-file analysis, summarization, or user-specified context) to handle large codebases. Enterprises especially appreciate the on-prem or self-hosted model option for compliance and security needs.",
						" ",
						(0, b.jsx)(g.default, {
							href: "/enterprise",
							className: "text-primary underline-offset-4 hover:underline",
							children: "Learn more about Roo Code for enterprise.",
						}),
					],
				}),
			},
			{
				question: "Is it safe for enterprise use?",
				answer: (0, b.jsxs)(b.Fragment, {
					children: [
						"Yes. Roo Code was built for enterprise environments. You can self-host AI models or use your own trusted provider. All file changes and commands go through permission gating, so nothing runs without your approval. And because Roo Code is fully open-source, it's auditable—you can review exactly how it works before deploying it.",
						" ",
						(0, b.jsx)("a", {
							href: "https://roocode.com/enterprise",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: "Learn more about Roo Code for enterprise.",
						}),
					],
				}),
			},
			{
				question: "Can Roo Code run commands and tests automatically?",
				answer: (0, b.jsx)(b.Fragment, {
					children:
						"Yes! One of Roo Code's biggest strengths is its ability to execute commands—always optional and fully permission-based. It can run terminal commands like npm install, execute your test suites, and even open a web browser for integration testing when you approve it.",
				}),
			},
			{
				question: "What if I just want a casual coding 'vibe'?",
				answer: (0, b.jsx)(b.Fragment, {
					children:
						'Roo Code shines for both serious enterprise development and casual "vibe coding." You can ask it to quickly prototype ideas, refactor on the fly, or provide design suggestions—without a rigid, step-by-step process.',
				}),
			},
			{
				question: "Can I contribute to Roo Code?",
				answer: (0, b.jsxs)(b.Fragment, {
					children: [
						"Yes, please do! Roo Code is open-source on",
						" ",
						(0, b.jsx)("a", {
							href: "https://github.com/RooCodeInc/Roo-Code",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: "GitHub",
						}),
						". Submit issues, suggest features, or open a pull request. There's also an active community on",
						" ",
						(0, b.jsx)("a", {
							href: "https://discord.gg/roocode",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: "Discord",
						}),
						" ",
						"and",
						" ",
						(0, b.jsx)("a", {
							href: "https://reddit.com/r/RooCode",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: "Reddit",
						}),
						" ",
						"if you want to share feedback or help others.",
					],
				}),
			},
			{
				question: "Where can I learn more or get help?",
				answer: (0, b.jsxs)(b.Fragment, {
					children: [
						"Check out our",
						" ",
						(0, b.jsx)("a", {
							href: "https://docs.roocode.com",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: "official documentation",
						}),
						" ",
						"for both a quick-start set up and advanced guides. You can also get community support on",
						" ",
						(0, b.jsx)("a", {
							href: "https://discord.gg/roocode",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: "Discord",
						}),
						" ",
						"and",
						" ",
						(0, b.jsx)("a", {
							href: "https://reddit.com/r/RooCode",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: "Reddit",
						}),
						". You can also check out our",
						" ",
						(0, b.jsx)("a", {
							href: "https://www.youtube.com/@RooCodeYT",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: "YouTube",
						}),
						" ",
						"tutorials and",
						" ",
						(0, b.jsx)("a", {
							href: "https://blog.roocode.com",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: "blog posts",
						}),
						" ",
						"from fellow developers showcasing real-world usage.",
					],
				}),
			},
		]
		function i() {
			let [a, g] = (0, c.useState)(null)
			return (0, b.jsx)("section", {
				id: "faq-section",
				className: "border-t border-border py-20",
				children: (0, b.jsxs)("div", {
					className: "container mx-auto px-4 sm:px-6 lg:px-8",
					children: [
						(0, b.jsx)("div", {
							className: "mx-auto mb-24 max-w-3xl text-center",
							children: (0, b.jsxs)(d.motion.div, {
								initial: { opacity: 0, y: 20 },
								whileInView: { opacity: 1, y: 0 },
								viewport: { once: !0 },
								transition: { duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] },
								children: [
									(0, b.jsx)("h2", {
										className: "text-4xl font-bold tracking-tight sm:text-5xl",
										children: "Frequently Asked Questions",
									}),
									(0, b.jsx)("p", {
										className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto",
										children:
											"Everything you need to know about Roo Code and how it can transform your development workflow.",
									}),
								],
							}),
						}),
						(0, b.jsx)("div", {
							className: "mx-auto max-w-3xl",
							children: (0, b.jsx)("div", {
								className: "space-y-4",
								children: h.map((c, h) =>
									(0, b.jsx)(
										d.motion.div,
										{
											initial: { opacity: 0, y: 20 },
											whileInView: { opacity: 1, y: 0 },
											viewport: { once: !0 },
											transition: {
												duration: 0.5,
												delay: 0.1 * h,
												ease: [0.21, 0.45, 0.27, 0.9],
											},
											children: (0, b.jsxs)("div", {
												className:
													"group relative rounded-lg border border-border/50 bg-background/30 backdrop-blur-xl transition-all duration-300 hover:border-border",
												children: [
													(0, b.jsxs)("button", {
														onClick: () => {
															g(a === h ? null : h)
														},
														className:
															"flex w-full items-center justify-between p-6 text-left",
														"aria-expanded": a === h,
														children: [
															(0, b.jsx)("h3", {
																className: "text-lg font-medium text-foreground/90",
																children: c.question,
															}),
															(0, b.jsx)(e.ChevronDown, {
																className: (0, f.cn)(
																	"h-5 w-5 text-muted-foreground transition-transform duration-200",
																	a === h ? "rotate-180" : "",
																),
															}),
														],
													}),
													(0, b.jsx)("div", {
														className: (0, f.cn)(
															"overflow-hidden transition-all duration-300 ease-in-out",
															a === h ? "max-h-96 pb-6" : "max-h-0",
														),
														children: (0, b.jsx)("div", {
															className: "px-6 text-muted-foreground",
															children: c.answer,
														}),
													}),
												],
											}),
										},
										h,
									),
								),
							}),
						}),
					],
				}),
			})
		}
		a.s(["FAQSection", () => i])
	},
	62180,
	(a) => {
		"use strict"
		let b = (0, a.i(8402).default)("users-round", [
			["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
			["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
			["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }],
		])
		a.s(["Users2", () => b], 62180)
	},
	95368,
	(a) => {
		"use strict"
		let b = (0, a.i(8402).default)("git-pull-request", [
			["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
			["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
			["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
			["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }],
		])
		a.s(["GitPullRequest", () => b], 95368)
	},
	62420,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(57429),
			d = a.i(8402)
		let e = (0, d.default)("shield", [
			[
				"path",
				{
					d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
					key: "oel41y",
				},
			],
		])
		var f = a.i(62180)
		let g = (0, d.default)("replace-all", [
				["path", { d: "M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1", key: "zg1ipl" }],
				["path", { d: "M14 4a1 1 0 0 1 1-1", key: "dhj8ez" }],
				["path", { d: "M15 10a1 1 0 0 1-1-1", key: "1mnyi5" }],
				["path", { d: "M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1", key: "txt6k4" }],
				["path", { d: "M21 4a1 1 0 0 0-1-1", key: "sfs9ap" }],
				["path", { d: "M21 9a1 1 0 0 1-1 1", key: "mp6qeo" }],
				["path", { d: "m3 7 3 3 3-3", key: "x25e72" }],
				["path", { d: "M6 10V5a2 2 0 0 1 2-2h2", key: "15xut4" }],
				["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1", key: "1bkyp8" }],
			]),
			h = (0, d.default)("keyboard", [
				["path", { d: "M10 8h.01", key: "1r9ogq" }],
				["path", { d: "M12 12h.01", key: "1mp3jc" }],
				["path", { d: "M14 8h.01", key: "1primd" }],
				["path", { d: "M16 12h.01", key: "1l6xoz" }],
				["path", { d: "M18 8h.01", key: "emo2bl" }],
				["path", { d: "M6 8h.01", key: "x9i8wu" }],
				["path", { d: "M7 16h10", key: "wp8him" }],
				["path", { d: "M8 12h.01", key: "czm47f" }],
				["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
			]),
			i = (0, d.default)("check-check", [
				["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
				["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }],
			])
		var j = a.i(95368)
		let k = (0, d.default)("boxes", [
				[
					"path",
					{
						d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
						key: "lc1i9w",
					},
				],
				["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
				["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
				["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
				[
					"path",
					{
						d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
						key: "8zsnat",
					},
				],
				["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
				["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
				["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
				[
					"path",
					{
						d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
						key: "1xygjf",
					},
				],
				["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
				["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
				["path", { d: "M12 13.5V8", key: "1io7kd" }],
			]),
			l = (0, d.default)("text-search", [
				["path", { d: "M21 5H3", key: "1fi0y6" }],
				["path", { d: "M10 12H3", key: "1ulcyk" }],
				["path", { d: "M10 19H3", key: "108z41" }],
				["circle", { cx: "17", cy: "15", r: "3", key: "1upz2a" }],
				["path", { d: "m21 19-1.9-1.9", key: "dwi7p8" }],
			])
		var m = a.i(71544)
		let n = [
			{
				icon: f.Users2,
				title: "Specialized modes",
				description:
					"Planning, Architecture, Debugging and beyond: Roo's modes stay on-task and deliver. They even know when to hand off work to other modes. Create your own or download from the marketplace.",
			},
			{
				icon: g,
				title: "Model-agnostic",
				description:
					"Use the Roo Code cloud Provider, bring your own provider key or even run local inference — no markup, lock-in, no restrictions.",
				logos: ["Anthropic", "OpenAI", "Gemini", "Grok", "Qwen", "Kimi", "Mistral", "Ollama"],
			},
			{
				icon: i,
				title: "Granular auto-approval",
				description:
					"Control each action and make Roo as autonomous as you want as you build confidence. Or go BRRR and let it rip.",
			},
			{
				icon: k,
				title: "Large task coordination",
				description:
					"Orchestrator mode handles large tasks by coordinating tasks for other agents, running for hours and delivering.",
			},
			{
				icon: l,
				title: "Performant with large codebases",
				description: "Configurable integrated semantic search for quicker retrieval in large codebases.",
			},
			{
				icon: h,
				title: "Highly customizable",
				description:
					"Fine-tune settings for Roo to work for you, like inference context, model properties, slash commands and more. Most settings can be global or serialized in your repository.",
			},
			{
				icon: j.GitPullRequest,
				title: "Proudly open source",
				description:
					"Community-driven and fully auditable: no throttling or surprises about what's happening behind the scenes.",
			},
			{
				icon: e,
				title: "Secure and private by design",
				description:
					"Client-only architecture means no code leaves your machine unless you say so. SOC 2 Type II compliant.",
			},
		]
		function o() {
			return (0, b.jsxs)("section", {
				className: "relative overflow-hidden border-t border-border py-32",
				children: [
					(0, b.jsx)(c.motion.div, {
						className: "absolute inset-0",
						initial: "hidden",
						whileInView: "visible",
						viewport: { once: !0 },
						variants: {
							hidden: { opacity: 0 },
							visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
						},
						children: (0, b.jsx)("div", {
							className: "absolute inset-y-0 left-1/2 h-full w-full max-w-[1200px] -translate-x-1/2",
							children: (0, b.jsx)("div", {
								className:
									"absolute left-1/2 top-1/2 h-[800px] w-full -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-blue-500/10 dark:bg-blue-700/30 blur-[120px]",
							}),
						}),
					}),
					(0, b.jsxs)("div", {
						className: "container relative z-10 mx-auto px-4 sm:px-6 lg:px-8",
						children: [
							(0, b.jsx)("div", {
								className: "mx-auto mb-12 md:mb-24 max-w-4xl text-center",
								children: (0, b.jsxs)(c.motion.div, {
									initial: { opacity: 0, y: 20 },
									whileInView: { opacity: 1, y: 0 },
									viewport: { once: !0 },
									transition: { duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] },
									children: [
										(0, b.jsx)("h2", {
											className: "text-4xl font-bold tracking-tight sm:text-5xl",
											children: "Power and flexibility to get stuff done.",
										}),
										(0, b.jsx)("p", {
											className: "mt-6 text-lg text-muted-foreground",
											children:
												"The features you need to build, debug and ship faster – without compromising quality.",
										}),
									],
								}),
							}),
							(0, b.jsx)(c.motion.div, {
								className: "relative mx-auto md:max-w-[1200px]",
								variants: {
									hidden: { opacity: 0 },
									visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
								},
								initial: "hidden",
								whileInView: "visible",
								viewport: { once: !0 },
								children: (0, b.jsx)("ul", {
									className:
										"grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8",
									children: n.map((a, c) => {
										let d = a.icon
										return (0, b.jsxs)(
											"li",
											{
												className:
													"relative h-full border border-border rounded-2xl bg-background p-8 transition-all duration-300",
												children: [
													(0, b.jsx)(d, { className: "size-6 text-foreground/80" }),
													(0, b.jsx)("h3", {
														className: "mb-3 mt-3 text-xl font-semibold text-foreground",
														children: a.title,
													}),
													(0, b.jsx)("p", {
														className: "leading-relaxed font-light text-muted-foreground",
														children: a.description,
													}),
													a.logos &&
														(0, b.jsx)("div", {
															className: "mt-4 flex flex-wrap items-center gap-4",
															children: a.logos.map((a) =>
																(0, b.jsx)(
																	m.default,
																	{
																		width: 20,
																		height: 20,
																		className:
																			"w-5 h-5 overflow-clip opacity-50 dark:invert",
																		src: `/logos/${a.toLowerCase()}.svg`,
																		alt: `${a} Logo`,
																	},
																	a,
																),
															),
														}),
												],
											},
											c,
										)
									}),
								}),
							}),
						],
					}),
				],
			})
		}
		a.s(["Features", () => o, "features", 0, n], 62420)
	},
	23022,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(27794),
			d = a.i(46395),
			e = a.i(57429)
		function f({ downloads: a }) {
			return (0, b.jsxs)("section", {
				className:
					"relative overflow-hidden border-t-2 border-border bg-gradient-to-b from-background via-background/95 to-background dark:from-background dark:via-background/98 dark:to-background py-20 sm:py-28 lg:py-36",
				children: [
					(0, b.jsxs)(e.motion.div, {
						className: "absolute inset-0",
						initial: "hidden",
						whileInView: "visible",
						viewport: { once: !0 },
						variants: {
							hidden: { opacity: 0 },
							visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
						},
						children: [
							(0, b.jsx)("div", {
								className:
									"absolute inset-0 bg-gradient-to-b from-blue-500/5 via-cyan-500/5 to-purple-500/5 dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-purple-500/10",
							}),
							(0, b.jsx)("div", {
								className: "relative mx-auto max-w-[1200px]",
								children: (0, b.jsx)("div", {
									className:
										"absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 blur-[100px] dark:from-blue-500/30 dark:via-cyan-500/30 dark:to-purple-500/30",
								}),
							}),
						],
					}),
					(0, b.jsx)("div", {
						className: "container relative z-10 mx-auto px-4 sm:px-6 lg:px-8",
						children: (0, b.jsx)("div", {
							className: "mx-auto max-w-4xl",
							children: (0, b.jsxs)("div", {
								className:
									"relative rounded-3xl border border-border/50 bg-background/60 p-8 shadow-2xl backdrop-blur-xl dark:border-border/30 dark:bg-background/40 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:p-12 lg:p-16",
								children: [
									(0, b.jsx)("div", {
										className:
											"absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10",
									}),
									(0, b.jsxs)("div", {
										className: "relative text-center",
										children: [
											(0, b.jsx)("h2", {
												className:
													"text-3xl font-bold tracking-tight text-foreground sm:text-5xl",
												children: "Install Roo Code now",
											}),
											(0, b.jsxs)("p", {
												className: "mt-6 text-lg text-muted-foreground",
												children: [
													"Install from the VS Code Marketplace or the CLI in minutes, then bring your own AI model.",
													(0, b.jsx)("br", {}),
													"Roo Code is also compatible with all VSCode forks.",
												],
											}),
											(0, b.jsxs)("div", {
												className: "mt-12 flex flex-col items-center justify-center gap-6",
												children: [
													(0, b.jsxs)(d.default, {
														href: "https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline",
														target: "_blank",
														className:
															"group relative inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-cyan-700 hover:shadow-xl hover:shadow-blue-500/25 dark:from-blue-500 dark:to-cyan-500 dark:hover:from-blue-600 dark:hover:to-cyan-600 sm:w-auto sm:px-8 sm:text-xl",
														children: [
															(0, b.jsx)("div", {
																className:
																	"absolute -inset-px rounded-xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 opacity-0 blur transition-opacity duration-500 group-hover:opacity-70",
															}),
															(0, b.jsxs)("div", {
																className:
																	"relative flex flex-col md:flex-row items-center md:gap-3",
																children: [
																	(0, b.jsx)(c.VscVscode, {
																		className: "h-6 w-6 shrink-0",
																	}),
																	(0, b.jsxs)("span", {
																		className:
																			"flex flex-col md:flex-row items-center md:gap-2",
																		children: [
																			(0, b.jsx)("span", {
																				children: "From VS Code Marketplace",
																			}),
																			null !== a &&
																				(0, b.jsxs)(b.Fragment, {
																					children: [
																						(0, b.jsx)("span", {
																							className:
																								"font-black opacity-60 hidden md:inline",
																							children: "·",
																						}),
																						(0, b.jsxs)("span", {
																							className: "opacity-90",
																							children: [a, " Downloads"],
																						}),
																					],
																				}),
																		],
																	}),
																],
															}),
														],
													}),
													(0, b.jsxs)("div", {
														className: "group relative w-full max-w-xl",
														children: [
															(0, b.jsx)("div", {
																className:
																	"absolute -inset-px rounded-xl bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-purple-500/50 opacity-30 blur-sm transition-all duration-500 group-hover:opacity-60 dark:opacity-40 dark:group-hover:opacity-70",
															}),
															(0, b.jsxs)("div", {
																className:
																	"relative overflow-hidden rounded-xl border border-border bg-background/80 shadow-lg backdrop-blur-xl transition-all duration-500 ease-out group-hover:border-blue-500/50 group-hover:shadow-xl group-hover:shadow-blue-500/10 dark:border-border/50 dark:bg-background/60 dark:group-hover:border-blue-400/50",
																children: [
																	(0, b.jsx)("div", {
																		className:
																			"border-b border-border/50 bg-muted/30 px-4 py-3 dark:bg-muted/20",
																		children: (0, b.jsx)("div", {
																			className:
																				"text-sm font-medium text-foreground",
																			children: "or via CLI",
																		}),
																	}),
																	(0, b.jsx)("div", {
																		className:
																			"overflow-x-auto bg-background/50 dark:bg-background/30",
																		children: (0, b.jsx)("pre", {
																			className: "p-4",
																			children: (0, b.jsx)("code", {
																				className:
																					"whitespace-pre-wrap break-all text-sm font-mono text-foreground sm:break-normal sm:text-base",
																				children:
																					"code --install-extension RooVeterinaryInc.roo-cline",
																			}),
																		}),
																	}),
																],
															}),
														],
													}),
												],
											}),
										],
									}),
								],
							}),
						}),
					}),
				],
			})
		}
		a.s(["InstallSection", () => f])
	},
	18823,
	(a) => {
		"use strict"
		let b = (0, a.i(8402).default)("chevron-right", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]])
		a.s(["ChevronRight", () => b], 18823)
	},
	66998,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(67191),
			d = a.i(57429)
		function e(a) {
			return "[object Object]" === Object.prototype.toString.call(a) || Array.isArray(a)
		}
		function f(a, b) {
			let c = Object.keys(a),
				d = Object.keys(b)
			return (
				c.length === d.length &&
				JSON.stringify(Object.keys(a.breakpoints || {})) === JSON.stringify(Object.keys(b.breakpoints || {})) &&
				c.every((c) => {
					let d = a[c],
						g = b[c]
					return "function" == typeof d ? `${d}` == `${g}` : e(d) && e(g) ? f(d, g) : d === g
				})
			)
		}
		function g(a) {
			return a
				.concat()
				.sort((a, b) => (a.name > b.name ? 1 : -1))
				.map((a) => a.options)
		}
		function h(a) {
			return "number" == typeof a
		}
		function i(a) {
			return "string" == typeof a
		}
		function j(a) {
			return "boolean" == typeof a
		}
		function k(a) {
			return "[object Object]" === Object.prototype.toString.call(a)
		}
		function l(a) {
			return Math.abs(a)
		}
		function m(a) {
			return Math.sign(a)
		}
		function n(a) {
			return r(a).map(Number)
		}
		function o(a) {
			return a[p(a)]
		}
		function p(a) {
			return Math.max(0, a.length - 1)
		}
		function q(a, b = 0) {
			return Array.from(Array(a), (a, c) => b + c)
		}
		function r(a) {
			return Object.keys(a)
		}
		function s(a, b) {
			return void 0 !== b.MouseEvent && a instanceof b.MouseEvent
		}
		function t() {
			let a = [],
				b = {
					add: function (c, d, e, f = { passive: !0 }) {
						let g
						return (
							"addEventListener" in c
								? (c.addEventListener(d, e, f), (g = () => c.removeEventListener(d, e, f)))
								: (c.addListener(e), (g = () => c.removeListener(e))),
							a.push(g),
							b
						)
					},
					clear: function () {
						a = a.filter((a) => a())
					},
				}
			return b
		}
		function u(a = 0, b = 0) {
			let c = l(a - b)
			function d(c) {
				return c < a || c > b
			}
			return {
				length: c,
				max: b,
				min: a,
				constrain: function (c) {
					return d(c) ? (c < a ? a : b) : c
				},
				reachedAny: d,
				reachedMax: function (a) {
					return a > b
				},
				reachedMin: function (b) {
					return b < a
				},
				removeOffset: function (a) {
					return c ? a - c * Math.ceil((a - b) / c) : a
				},
			}
		}
		function v(a) {
			let b = a
			function c(a) {
				return h(a) ? a : a.get()
			}
			return {
				get: function () {
					return b
				},
				set: function (a) {
					b = c(a)
				},
				add: function (a) {
					b += c(a)
				},
				subtract: function (a) {
					b -= c(a)
				},
			}
		}
		function w(a, b) {
			let c =
					"x" === a.scroll
						? function (a) {
								return `translate3d(${a}px,0px,0px)`
							}
						: function (a) {
								return `translate3d(0px,${a}px,0px)`
							},
				d = b.style,
				e = null,
				f = !1
			return {
				clear: function () {
					!f && ((d.transform = ""), b.getAttribute("style") || b.removeAttribute("style"))
				},
				to: function (b) {
					if (f) return
					let g = Math.round(100 * a.direction(b)) / 100
					g !== e && ((d.transform = c(g)), (e = g))
				},
				toggleActive: function (a) {
					f = !a
				},
			}
		}
		let x = {
			align: "center",
			axis: "x",
			container: null,
			slides: null,
			containScroll: "trimSnaps",
			direction: "ltr",
			slidesToScroll: 1,
			inViewThreshold: 0,
			breakpoints: {},
			dragFree: !1,
			dragThreshold: 10,
			loop: !1,
			skipSnaps: !1,
			duration: 25,
			startIndex: 0,
			active: !0,
			watchDrag: !0,
			watchResize: !0,
			watchSlides: !0,
			watchFocus: !0,
		}
		function y(a, b, c) {
			let d,
				e,
				f,
				g,
				z,
				A,
				B,
				C,
				D = a.ownerDocument,
				E = D.defaultView,
				F = (function (a) {
					function b(a, b) {
						return (function a(b, c) {
							return [b, c].reduce(
								(b, c) => (
									r(c).forEach((d) => {
										let e = b[d],
											f = c[d],
											g = k(e) && k(f)
										b[d] = g ? a(e, f) : f
									}),
									b
								),
								{},
							)
						})(a, b || {})
					}
					return {
						mergeOptions: b,
						optionsAtMedia: function (c) {
							let d = c.breakpoints || {},
								e = r(d)
									.filter((b) => a.matchMedia(b).matches)
									.map((a) => d[a])
									.reduce((a, c) => b(a, c), {})
							return b(c, e)
						},
						optionsMediaQueries: function (b) {
							return b
								.map((a) => r(a.breakpoints || {}))
								.reduce((a, b) => a.concat(b), [])
								.map(a.matchMedia)
						},
					}
				})(E),
				G =
					((C = []),
					{
						init: function (a, b) {
							return (
								(C = b.filter(({ options: a }) => !1 !== F.optionsAtMedia(a).active)).forEach((b) =>
									b.init(a, F),
								),
								b.reduce((a, b) => Object.assign(a, { [b.name]: b }), {})
							)
						},
						destroy: function () {
							C = C.filter((a) => a.destroy())
						},
					}),
				H = t(),
				I =
					((e = {}),
					(f = {
						init: function (a) {
							d = a
						},
						emit: function (a) {
							return (e[a] || []).forEach((b) => b(d, a)), f
						},
						off: function (a, b) {
							return (e[a] = (e[a] || []).filter((a) => a !== b)), f
						},
						on: function (a, b) {
							return (e[a] = (e[a] || []).concat([b])), f
						},
						clear: function () {
							e = {}
						},
					})),
				{ mergeOptions: J, optionsAtMedia: K, optionsMediaQueries: L } = F,
				{ on: M, off: N, emit: O } = I,
				P = !1,
				Q = J(x, y.globalOptions),
				R = J(Q),
				S = []
			function T(b, c) {
				P ||
					((R = K((Q = J(Q, b)))),
					(S = c || S),
					(function () {
						let { container: b, slides: c } = R
						A = (i(b) ? a.querySelector(b) : b) || a.children[0]
						let d = i(c) ? A.querySelectorAll(c) : c
						B = [].slice.call(d || A.children)
					})(),
					(g = (function b(c) {
						let d = (function (a, b, c, d, e, f, g) {
							var k, x
							let y,
								z,
								A,
								B,
								C,
								D,
								E,
								F,
								G,
								H,
								I,
								J,
								K,
								L,
								{
									align: M,
									axis: N,
									direction: O,
									startIndex: P,
									loop: Q,
									duration: R,
									dragFree: S,
									dragThreshold: T,
									inViewThreshold: U,
									slidesToScroll: V,
									skipSnaps: W,
									containScroll: X,
									watchResize: Y,
									watchSlides: Z,
									watchDrag: $,
									watchFocus: _,
								} = f,
								aa = {
									measure: function (a) {
										let { offsetTop: b, offsetLeft: c, offsetWidth: d, offsetHeight: e } = a
										return { top: b, right: c + d, bottom: b + e, left: c, width: d, height: e }
									},
								},
								ab = aa.measure(b),
								ac = c.map(aa.measure),
								ad =
									((z = "rtl" === O),
									(B = (A = "y" === N) || !z ? 1 : -1),
									(C = A ? "top" : z ? "right" : "left"),
									(D = A ? "bottom" : z ? "left" : "right"),
									{
										scroll: A ? "y" : "x",
										cross: A ? "x" : "y",
										startEdge: C,
										endEdge: D,
										measureSize: function (a) {
											let { height: b, width: c } = a
											return A ? b : c
										},
										direction: function (a) {
											return a * B
										},
									}),
								ae = ad.measureSize(ab),
								af = {
									measure: function (a) {
										return (a / 100) * ae
									},
								},
								ag =
									((k = M),
									(x = ae),
									(y = {
										start: function () {
											return 0
										},
										center: function (a) {
											return (x - a) / 2
										},
										end: function (a) {
											return x - a
										},
									}),
									{
										measure: function (a, b) {
											return i(k) ? y[k](a) : k(x, a, b)
										},
									}),
								ah = !Q && !!X,
								{
									slideSizes: ai,
									slideSizesWithGaps: aj,
									startGap: ak,
									endGap: al,
								} = (function (a, b, c, d, e, f) {
									let { measureSize: g, startEdge: h, endEdge: i } = a,
										j = c[0] && e,
										k = (function () {
											if (!j) return 0
											let a = c[0]
											return l(b[h] - a[h])
										})(),
										m = j
											? parseFloat(f.getComputedStyle(o(d)).getPropertyValue(`margin-${i}`))
											: 0,
										n = c.map(g),
										q = c
											.map((a, b, c) => {
												let d = b === p(c)
												return b ? (d ? n[b] + m : c[b + 1][h] - a[h]) : n[b] + k
											})
											.map(l)
									return { slideSizes: n, slideSizesWithGaps: q, startGap: k, endGap: m }
								})(ad, ab, ac, c, Q || !!X, e),
								am = (function (a, b, c, d, e, f, g, i, j) {
									let { startEdge: k, endEdge: m, direction: q } = a,
										r = h(c)
									return {
										groupSlides: function (a) {
											return r
												? n(a)
														.filter((a) => a % c == 0)
														.map((b) => a.slice(b, b + c))
												: a.length
													? n(a)
															.reduce((c, h, j) => {
																let n = o(c) || 0,
																	r = h === p(a),
																	s = e[k] - f[n][k],
																	t = e[k] - f[h][m],
																	u = d || 0 !== n ? 0 : q(g),
																	v = l(t - (!d && r ? q(i) : 0) - (s + u))
																return (
																	j && v > b + 2 && c.push(h),
																	r && c.push(a.length),
																	c
																)
															}, [])
															.map((b, c, d) => {
																let e = Math.max(d[c - 1] || 0)
																return a.slice(e, b)
															})
													: []
										},
									}
								})(ad, ae, V, Q, ab, ac, ak, al, 0),
								{ snaps: an, snapsAligned: ao } = (function (a, b, c, d, e) {
									let { startEdge: f, endEdge: g } = a,
										{ groupSlides: h } = e,
										i = h(d)
											.map((a) => o(a)[g] - a[0][f])
											.map(l)
											.map(b.measure),
										j = d.map((a) => c[f] - a[f]).map((a) => -l(a)),
										k = h(j)
											.map((a) => a[0])
											.map((a, b) => a + i[b])
									return { snaps: j, snapsAligned: k }
								})(ad, ag, ab, ac, am),
								ap = -o(an) + o(aj),
								{ snapsContained: aq, scrollContainLimit: ar } = (function (a, b, c, d, e) {
									let f,
										g,
										h = u(-b + a, 0),
										i = c
											.map((a, b) => {
												let { min: d, max: e } = h,
													f = h.constrain(a),
													g = b === p(c)
												return b
													? g ||
														(function (a, b) {
															return 1 >= l(a - b)
														})(d, f)
														? d
														: (function (a, b) {
																	return 1 >= l(a - b)
															  })(e, f)
															? e
															: f
													: e
											})
											.map((a) => parseFloat(a.toFixed(3))),
										j = ((f = i[0]), (g = o(i)), u(i.lastIndexOf(f), i.indexOf(g) + 1))
									return {
										snapsContained: (function () {
											if (b <= a + 2) return [h.max]
											if ("keepSnaps" === d) return i
											let { min: c, max: e } = j
											return i.slice(c, e)
										})(),
										scrollContainLimit: j,
									}
								})(ae, ap, ao, X, 0),
								as = ah ? aq : ao,
								{ limit: at } = ((E = as[0]), { limit: u(Q ? E - ap : o(as), E) }),
								au = (function a(b, c, d) {
									let { constrain: e } = u(0, b),
										f = b + 1,
										g = h(c)
									function h(a) {
										return d ? l((f + a) % f) : e(a)
									}
									function i() {
										return a(b, g, d)
									}
									let j = {
										get: function () {
											return g
										},
										set: function (a) {
											return (g = h(a)), j
										},
										add: function (a) {
											return i().set(g + a)
										},
										clone: i,
									}
									return j
								})(p(as), P, Q),
								av = au.clone(),
								aw = n(c),
								ax = (function (a, b, c, d) {
									let e = t(),
										f = 1e3 / 60,
										g = null,
										h = 0,
										i = 0
									function j(a) {
										if (!i) return
										g || ((g = a), c(), c())
										let e = a - g
										for (g = a, h += e; h >= f; ) c(), (h -= f)
										d(h / f), i && (i = b.requestAnimationFrame(j))
									}
									function k() {
										b.cancelAnimationFrame(i), (g = null), (h = 0), (i = 0)
									}
									return {
										init: function () {
											e.add(a, "visibilitychange", () => {
												a.hidden && ((g = null), (h = 0))
											})
										},
										destroy: function () {
											k(), e.clear()
										},
										start: function () {
											i || (i = b.requestAnimationFrame(j))
										},
										stop: k,
										update: c,
										render: d,
									}
								})(
									d,
									e,
									() =>
										(({ dragHandler: a, scrollBody: b, scrollBounds: c, options: { loop: d } }) => {
											d || c.constrain(a.pointerDown()), b.seek()
										})(aL),
									(a) =>
										((
											{
												scrollBody: a,
												translate: b,
												location: c,
												offsetLocation: d,
												previousLocation: e,
												scrollLooper: f,
												slideLooper: g,
												dragHandler: h,
												animation: i,
												eventHandler: j,
												scrollBounds: k,
												options: { loop: l },
											},
											m,
										) => {
											let n = a.settled(),
												o = !k.shouldConstrain(),
												p = l ? n : n && o,
												q = p && !h.pointerDown()
											q && i.stop()
											let r = c.get() * m + e.get() * (1 - m)
											d.set(r),
												l && (f.loop(a.direction()), g.loop()),
												b.to(d.get()),
												q && j.emit("settle"),
												p || j.emit("scroll")
										})(aL, a),
								),
								ay = as[au.get()],
								az = v(ay),
								aA = v(ay),
								aB = v(ay),
								aC = v(ay),
								aD = (function (a, b, c, d, e, f) {
									let g = 0,
										h = 0,
										i = e,
										j = 0.68,
										k = a.get(),
										n = 0
									function o(a) {
										return (i = a), q
									}
									function p(a) {
										return (j = a), q
									}
									let q = {
										direction: function () {
											return h
										},
										duration: function () {
											return i
										},
										velocity: function () {
											return g
										},
										seek: function () {
											let b = d.get() - a.get(),
												e = 0
											return (
												i
													? (c.set(a),
														(g += b / i),
														(g *= j),
														(k += g),
														a.add(g),
														(e = k - n))
													: ((g = 0), c.set(d), a.set(d), (e = b)),
												(h = m(e)),
												(n = k),
												q
											)
										},
										settled: function () {
											return 0.001 > l(d.get() - b.get())
										},
										useBaseFriction: function () {
											return p(0.68)
										},
										useBaseDuration: function () {
											return o(e)
										},
										useFriction: p,
										useDuration: o,
									}
									return q
								})(az, aB, aA, aC, R, 0),
								aE = (function (a, b, c, d, e) {
									let { reachedAny: f, removeOffset: g, constrain: h } = d
									function i(a) {
										return a.concat().sort((a, b) => l(a) - l(b))[0]
									}
									function j(b, d) {
										let e = [b, b + c, b - c]
										if (!a) return b
										if (!d) return i(e)
										let f = e.filter((a) => m(a) === d)
										return f.length ? i(f) : o(e) - c
									}
									return {
										byDistance: function (c, d) {
											let i = e.get() + c,
												{ index: k, distance: m } = (function (c) {
													let d = a ? g(c) : h(c),
														{ index: e } = b
															.map((a, b) => ({ diff: j(a - d, 0), index: b }))
															.sort((a, b) => l(a.diff) - l(b.diff))[0]
													return { index: e, distance: d }
												})(i),
												n = !a && f(i)
											if (!d || n) return { index: k, distance: c }
											let o = c + j(b[k] - m, 0)
											return { index: k, distance: o }
										},
										byIndex: function (a, c) {
											let d = j(b[a] - e.get(), c)
											return { index: a, distance: d }
										},
										shortcut: j,
									}
								})(Q, as, ap, at, aC),
								aF = (function (a, b, c, d, e, f, g) {
									function h(e) {
										let h = e.distance,
											i = e.index !== b.get()
										f.add(h),
											h && (d.duration() ? a.start() : (a.update(), a.render(1), a.update())),
											i && (c.set(b.get()), b.set(e.index), g.emit("select"))
									}
									return {
										distance: function (a, b) {
											h(e.byDistance(a, b))
										},
										index: function (a, c) {
											let d = b.clone().set(a)
											h(e.byIndex(d.get(), c))
										},
									}
								})(ax, au, av, aD, aE, aC, g),
								aG = (function (a) {
									let { max: b, length: c } = a
									return {
										get: function (a) {
											return c ? -((a - b) / c) : 0
										},
									}
								})(at),
								aH = t(),
								aI =
									((G = {}),
									(H = null),
									(I = null),
									(J = !1),
									{
										init: function () {
											;(F = new IntersectionObserver(
												(a) => {
													J ||
														(a.forEach((a) => {
															G[c.indexOf(a.target)] = a
														}),
														(H = null),
														(I = null),
														g.emit("slidesInView"))
												},
												{ root: b.parentElement, threshold: U },
											)),
												c.forEach((a) => F.observe(a))
										},
										destroy: function () {
											F && F.disconnect(), (J = !0)
										},
										get: function (a = !0) {
											if (a && H) return H
											if (!a && I) return I
											let b = r(G).reduce((b, c) => {
												let d = parseInt(c),
													{ isIntersecting: e } = G[d]
												return ((a && e) || (!a && !e)) && b.push(d), b
											}, [])
											return a && (H = b), a || (I = b), b
										},
									}),
								{ slideRegistry: aJ } = (function (a, b, c, d, e, f) {
									let g,
										{ groupSlides: h } = e,
										{ min: i, max: j } = d
									return {
										slideRegistry:
											((g = h(f)),
											1 === c.length
												? [f]
												: a && "keepSnaps" !== b
													? g.slice(i, j).map((a, b, c) => {
															let d = b === p(c)
															return b
																? d
																	? q(p(f) - o(c)[0] + 1, o(c)[0])
																	: a
																: q(o(c[0]) + 1)
														})
													: g),
									}
								})(ah, X, as, ar, am, aw),
								aK = (function (a, b, c, d, e, f, g, i) {
									let k = { passive: !0, capture: !0 },
										l = 0
									function m(a) {
										"Tab" === a.code && (l = new Date().getTime())
									}
									return {
										init: function (n) {
											i &&
												(f.add(document, "keydown", m, !1),
												b.forEach((b, m) => {
													f.add(
														b,
														"focus",
														(b) => {
															;(j(i) || i(n, b)) &&
																(function (b) {
																	if (new Date().getTime() - l > 10) return
																	g.emit("slideFocusStart"), (a.scrollLeft = 0)
																	let f = c.findIndex((a) => a.includes(b))
																	h(f) &&
																		(e.useDuration(0),
																		d.index(f, 0),
																		g.emit("slideFocus"))
																})(m)
														},
														k,
													)
												}))
										},
									}
								})(a, c, aJ, aF, aD, aH, g, _),
								aL = {
									ownerDocument: d,
									ownerWindow: e,
									eventHandler: g,
									containerRect: ab,
									slideRects: ac,
									animation: ax,
									axis: ad,
									dragHandler: (function (a, b, c, d, e, f, g, h, i, k, n, o, p, q, r, v, w, x, y) {
										let { cross: z, direction: A } = a,
											B = ["INPUT", "SELECT", "TEXTAREA"],
											C = { passive: !1 },
											D = t(),
											E = t(),
											F = u(50, 225).constrain(q.measure(20)),
											G = { mouse: 300, touch: 400 },
											H = { mouse: 500, touch: 600 },
											I = r ? 43 : 25,
											J = !1,
											K = 0,
											L = 0,
											M = !1,
											N = !1,
											O = !1,
											P = !1
										function Q(a) {
											if (!s(a, d) && a.touches.length >= 2) return R(a)
											let b = f.readPoint(a),
												c = f.readPoint(a, z),
												g = l(b - K),
												i = l(c - L)
											if (!N && !P && (!a.cancelable || !(N = g > i))) return R(a)
											let j = f.pointerMove(a)
											g > v && (O = !0),
												k.useFriction(0.3).useDuration(0.75),
												h.start(),
												e.add(A(j)),
												a.preventDefault()
										}
										function R(a) {
											var b
											let c,
												d,
												e = n.byDistance(0, !1).index !== o.get(),
												g = f.pointerUp(a) * (r ? H : G)[P ? "mouse" : "touch"],
												h =
													((b = A(g)),
													(c = o.add(-1 * m(b))),
													(d = n.byDistance(b, !r).distance),
													r || l(b) < F
														? d
														: w && e
															? 0.5 * d
															: n.byIndex(c.get(), 0).distance),
												j = (function (a, b) {
													var c, d
													if (0 === a || 0 === b || l(a) <= l(b)) return 0
													let e = ((c = l(a)), (d = l(b)), l(c - d))
													return l(e / a)
												})(g, h)
											;(N = !1),
												(M = !1),
												E.clear(),
												k.useDuration(I - 10 * j).useFriction(0.68 + j / 50),
												i.distance(h, !r),
												(P = !1),
												p.emit("pointerUp")
										}
										function S(a) {
											O && (a.stopPropagation(), a.preventDefault(), (O = !1))
										}
										return {
											init: function (a) {
												y &&
													D.add(b, "dragstart", (a) => a.preventDefault(), C)
														.add(b, "touchmove", () => void 0, C)
														.add(b, "touchend", () => void 0)
														.add(b, "touchstart", h)
														.add(b, "mousedown", h)
														.add(b, "touchcancel", R)
														.add(b, "contextmenu", R)
														.add(b, "click", S, !0)
												function h(h) {
													;(j(y) || y(a, h)) &&
														(function (a) {
															let h,
																i = s(a, d)
															if (
																((P = i),
																(O = r && i && !a.buttons && J),
																(J = l(e.get() - g.get()) >= 2),
																!i || 0 === a.button) &&
																((h = a.target.nodeName || ""), !B.includes(h))
															) {
																let d
																;(M = !0),
																	f.pointerDown(a),
																	k.useFriction(0).useDuration(0),
																	e.set(g),
																	(d = P ? c : b),
																	E.add(d, "touchmove", Q, C)
																		.add(d, "touchend", R)
																		.add(d, "mousemove", Q, C)
																		.add(d, "mouseup", R),
																	(K = f.readPoint(a)),
																	(L = f.readPoint(a, z)),
																	p.emit("pointerDown")
															}
														})(h)
												}
											},
											destroy: function () {
												D.clear(), E.clear()
											},
											pointerDown: function () {
												return M
											},
										}
									})(
										ad,
										a,
										d,
										e,
										aC,
										(function (a, b) {
											let c, d
											function e(a) {
												return a.timeStamp
											}
											function f(c, d) {
												let e = d || a.scroll,
													f = `client${"x" === e ? "X" : "Y"}`
												return (s(c, b) ? c : c.touches[0])[f]
											}
											return {
												pointerDown: function (a) {
													return (c = a), (d = a), f(a)
												},
												pointerMove: function (a) {
													let b = f(a) - f(d),
														g = e(a) - e(c) > 170
													return (d = a), g && (c = a), b
												},
												pointerUp: function (a) {
													if (!c || !d) return 0
													let b = f(d) - f(c),
														g = e(a) - e(c),
														h = e(a) - e(d) > 170,
														i = b / g
													return g && !h && l(i) > 0.1 ? i : 0
												},
												readPoint: f,
											}
										})(ad, e),
										az,
										ax,
										aF,
										aD,
										aE,
										au,
										g,
										af,
										S,
										T,
										W,
										0,
										$,
									),
									eventStore: aH,
									percentOfView: af,
									index: au,
									indexPrevious: av,
									limit: at,
									location: az,
									offsetLocation: aB,
									previousLocation: aA,
									options: f,
									resizeHandler: (function (a, b, c, d, e, f, g) {
										let h,
											i,
											k = [a].concat(d),
											m = [],
											n = !1
										function o(a) {
											return e.measureSize(g.measure(a))
										}
										return {
											init: function (e) {
												f &&
													((i = o(a)),
													(m = d.map(o)),
													(h = new ResizeObserver((c) => {
														;(j(f) || f(e, c)) &&
															(function (c) {
																for (let f of c) {
																	if (n) return
																	let c = f.target === a,
																		g = d.indexOf(f.target),
																		h = c ? i : m[g]
																	if (l(o(c ? a : d[g]) - h) >= 0.5) {
																		e.reInit(), b.emit("resize")
																		break
																	}
																}
															})(c)
													})),
													c.requestAnimationFrame(() => {
														k.forEach((a) => h.observe(a))
													}))
											},
											destroy: function () {
												;(n = !0), h && h.disconnect()
											},
										}
									})(b, g, e, c, ad, Y, aa),
									scrollBody: aD,
									scrollBounds: (function (a, b, c, d, e) {
										let f = e.measure(10),
											g = e.measure(50),
											h = u(0.1, 0.99),
											i = !1
										function j() {
											return !i && !!a.reachedAny(c.get()) && !!a.reachedAny(b.get())
										}
										return {
											shouldConstrain: j,
											constrain: function (e) {
												if (!j()) return
												let i = a.reachedMin(b.get()) ? "min" : "max",
													k = l(a[i] - b.get()),
													m = c.get() - b.get(),
													n = h.constrain(k / g)
												c.subtract(m * n),
													!e &&
														l(m) < f &&
														(c.set(a.constrain(c.get())),
														d.useDuration(25).useBaseFriction())
											},
											toggleActive: function (a) {
												i = !a
											},
										}
									})(at, aB, aC, aD, af),
									scrollLooper: (function (a, b, c, d) {
										let { reachedMin: e, reachedMax: f } = u(b.min + 0.1, b.max + 0.1)
										return {
											loop: function (b) {
												if (!(1 === b ? f(c.get()) : -1 === b && e(c.get()))) return
												let g = -1 * b * a
												d.forEach((a) => a.add(g))
											},
										}
									})(ap, at, aB, [az, aB, aA, aC]),
									scrollProgress: aG,
									scrollSnapList: as.map(aG.get),
									scrollSnaps: as,
									scrollTarget: aE,
									scrollTo: aF,
									slideLooper: (function (a, b, c, d, e, f, g, h, i) {
										let j = n(e),
											k = n(e).reverse(),
											l = p(o(k, g[0]), c, !1).concat(p(o(j, b - g[0] - 1), -c, !0))
										function m(a, b) {
											return a.reduce((a, b) => a - e[b], b)
										}
										function o(a, b) {
											return a.reduce((a, c) => (m(a, b) > 0 ? a.concat([c]) : a), [])
										}
										function p(e, g, j) {
											let k = f.map((a, c) => ({
												start: a - d[c] + 0.5 + g,
												end: a + b - 0.5 + g,
											}))
											return e.map((b) => {
												let d = j ? 0 : -c,
													e = j ? c : 0,
													f = k[b][j ? "end" : "start"]
												return {
													index: b,
													loopPoint: f,
													slideLocation: v(-1),
													translate: w(a, i[b]),
													target: () => (h.get() > f ? d : e),
												}
											})
										}
										return {
											canLoop: function () {
												return l.every(
													({ index: a }) =>
														0.1 >=
														m(
															j.filter((b) => b !== a),
															b,
														),
												)
											},
											clear: function () {
												l.forEach((a) => a.translate.clear())
											},
											loop: function () {
												l.forEach((a) => {
													let { target: b, translate: c, slideLocation: d } = a,
														e = b()
													e !== d.get() && (c.to(e), d.set(e))
												})
											},
											loopPoints: l,
										}
									})(ad, ae, ap, ai, aj, an, as, aB, c),
									slideFocus: aK,
									slidesHandler:
										((L = !1),
										{
											init: function (a) {
												Z &&
													(K = new MutationObserver((b) => {
														!L &&
															(j(Z) || Z(a, b)) &&
															(function (b) {
																for (let c of b)
																	if ("childList" === c.type) {
																		a.reInit(), g.emit("slidesChanged")
																		break
																	}
															})(b)
													})).observe(b, { childList: !0 })
											},
											destroy: function () {
												K && K.disconnect(), (L = !0)
											},
										}),
									slidesInView: aI,
									slideIndexes: aw,
									slideRegistry: aJ,
									slidesToScroll: am,
									target: aC,
									translate: w(ad, b),
								}
							return aL
						})(a, A, B, D, E, c, I)
						return c.loop && !d.slideLooper.canLoop() ? b(Object.assign({}, c, { loop: !1 })) : d
					})(R)),
					L([Q, ...S.map(({ options: a }) => a)]).forEach((a) => H.add(a, "change", U)),
					R.active &&
						(g.translate.to(g.location.get()),
						g.animation.init(),
						g.slidesInView.init(),
						g.slideFocus.init(Y),
						g.eventHandler.init(Y),
						g.resizeHandler.init(Y),
						g.slidesHandler.init(Y),
						g.options.loop && g.slideLooper.loop(),
						A.offsetParent && B.length && g.dragHandler.init(Y),
						(z = G.init(Y, S))))
			}
			function U(a, b) {
				let c = X()
				V(), T(J({ startIndex: c }, a), b), I.emit("reInit")
			}
			function V() {
				g.dragHandler.destroy(),
					g.eventStore.clear(),
					g.translate.clear(),
					g.slideLooper.clear(),
					g.resizeHandler.destroy(),
					g.slidesHandler.destroy(),
					g.slidesInView.destroy(),
					g.animation.destroy(),
					G.destroy(),
					H.clear()
			}
			function W(a, b, c) {
				R.active &&
					!P &&
					(g.scrollBody.useBaseFriction().useDuration(!0 === b ? 0 : R.duration), g.scrollTo.index(a, c || 0))
			}
			function X() {
				return g.index.get()
			}
			let Y = {
				canScrollNext: function () {
					return g.index.add(1).get() !== X()
				},
				canScrollPrev: function () {
					return g.index.add(-1).get() !== X()
				},
				containerNode: function () {
					return A
				},
				internalEngine: function () {
					return g
				},
				destroy: function () {
					P || ((P = !0), H.clear(), V(), I.emit("destroy"), I.clear())
				},
				off: N,
				on: M,
				emit: O,
				plugins: function () {
					return z
				},
				previousScrollSnap: function () {
					return g.indexPrevious.get()
				},
				reInit: U,
				rootNode: function () {
					return a
				},
				scrollNext: function (a) {
					W(g.index.add(1).get(), a, -1)
				},
				scrollPrev: function (a) {
					W(g.index.add(-1).get(), a, 1)
				},
				scrollProgress: function () {
					return g.scrollProgress.get(g.offsetLocation.get())
				},
				scrollSnapList: function () {
					return g.scrollSnapList
				},
				scrollTo: W,
				selectedScrollSnap: X,
				slideNodes: function () {
					return B
				},
				slidesInView: function () {
					return g.slidesInView.get()
				},
				slidesNotInView: function () {
					return g.slidesInView.get(!1)
				},
			}
			return T(b, c), setTimeout(() => I.emit("init"), 0), Y
		}
		function z(a = {}, b = []) {
			let d = (0, c.useRef)(a),
				e = (0, c.useRef)(b),
				[h, i] = (0, c.useState)(),
				[j, k] = (0, c.useState)(),
				l = (0, c.useCallback)(() => {
					h && h.reInit(d.current, e.current)
				}, [h])
			return (
				(0, c.useEffect)(() => {
					f(d.current, a) || ((d.current = a), l())
				}, [a, l]),
				(0, c.useEffect)(() => {
					!(function (a, b) {
						if (a.length !== b.length) return !1
						let c = g(a),
							d = g(b)
						return c.every((a, b) => f(a, d[b]))
					})(e.current, b) && ((e.current = b), l())
				}, [b, l]),
				(0, c.useEffect)(() => {
					i(void 0)
				}, [j, i]),
				[k, h]
			)
		}
		;(y.globalOptions = void 0), (z.globalOptions = void 0)
		let A = {
			active: !0,
			breakpoints: {},
			delay: 4e3,
			jump: !1,
			playOnInit: !0,
			stopOnFocusIn: !0,
			stopOnInteraction: !0,
			stopOnMouseEnter: !1,
			stopOnLastSnap: !1,
			rootNode: null,
		}
		function B(a = {}) {
			let b,
				c,
				d,
				e,
				f = null,
				g = 0,
				h = !1,
				i = !1,
				j = !1,
				k = !1
			function l() {
				if (!d) {
					if (o()) {
						j = !0
						return
					}
					h || c.emit("autoplay:play"),
						(function () {
							let { ownerWindow: a } = c.internalEngine()
							a.clearTimeout(g),
								(g = a.setTimeout(t, e[c.selectedScrollSnap()])),
								(f = new Date().getTime()),
								c.emit("autoplay:timerset")
						})(),
						(h = !0)
				}
			}
			function m() {
				d ||
					(h && c.emit("autoplay:stop"),
					(function () {
						let { ownerWindow: a } = c.internalEngine()
						a.clearTimeout(g), (g = 0), (f = null), c.emit("autoplay:timerstopped")
					})(),
					(h = !1))
			}
			function n() {
				if (o()) return (j = h), m()
				j && l()
			}
			function o() {
				let { ownerDocument: a } = c.internalEngine()
				return "hidden" === a.visibilityState
			}
			function p() {
				i || m()
			}
			function q() {
				i || l()
			}
			function r() {
				;(i = !0), m()
			}
			function s() {
				;(i = !1), l()
			}
			function t() {
				let { index: a } = c.internalEngine(),
					d = a.clone().add(1).get(),
					e = c.scrollSnapList().length - 1,
					f = b.stopOnLastSnap && d === e
				if ((c.canScrollNext() ? c.scrollNext(k) : c.scrollTo(0, k), c.emit("autoplay:select"), f)) return m()
				l()
			}
			return {
				name: "autoplay",
				options: a,
				init: function (f, g) {
					var h, i, j, o
					let t, u
					c = f
					let { mergeOptions: v, optionsAtMedia: w } = g,
						x = v(A, B.globalOptions)
					if (((b = w(v(x, a))), c.scrollSnapList().length <= 1)) return
					;(k = b.jump),
						(d = !1),
						(h = c),
						(i = b.delay),
						(t = h.scrollSnapList()),
						(e = "number" == typeof i ? t.map(() => i) : i(t, h))
					let { eventStore: y, ownerDocument: z } = c.internalEngine(),
						C = !!c.internalEngine().options.watchDrag,
						D = ((j = c), (o = b.rootNode), (u = j.rootNode()), (o && o(u)) || u)
					y.add(z, "visibilitychange", n),
						C && c.on("pointerDown", p),
						C && !b.stopOnInteraction && c.on("pointerUp", q),
						b.stopOnMouseEnter && y.add(D, "mouseenter", r),
						b.stopOnMouseEnter && !b.stopOnInteraction && y.add(D, "mouseleave", s),
						b.stopOnFocusIn && c.on("slideFocusStart", m),
						b.stopOnFocusIn && !b.stopOnInteraction && y.add(c.containerNode(), "focusout", l),
						b.playOnInit && l()
				},
				destroy: function () {
					c.off("pointerDown", p).off("pointerUp", q).off("slideFocusStart", m), m(), (d = !0), (h = !1)
				},
				play: function (a) {
					void 0 !== a && (k = a), l()
				},
				stop: function () {
					h && m()
				},
				reset: function () {
					h && l()
				},
				isPlaying: function () {
					return h
				},
				timeUntilNext: function () {
					return f ? e[c.selectedScrollSnap()] - (new Date().getTime() - f) : null
				},
			}
		}
		B.globalOptions = void 0
		var C = a.i(8402)
		let D = (0, C.default)("chevron-left", [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]])
		var E = a.i(18823)
		let F = (0, C.default)("star", [
				[
					"path",
					{
						d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
						key: "r04s7s",
					},
				],
			]),
			G = [
				{
					name: "Luca",
					role: "Reviewer",
					origin: "VS Code Marketplace",
					quote: "Roo Code is an absolute game-changer! 🚀 It makes coding faster, easier, and more intuitive with its smart AI-powered suggestions, real-time debugging, and automation features. The seamless integration with VS Code is a huge plus, and the constant updates ensure it keeps getting better",
					stars: 5,
				},
				{
					name: "Taro Woollett-Chiba",
					role: "AI Product Lead",
					origin: "Vendidit",
					quote: "Easily the best AI code editor. Roo Code has the best features and capabilities, along with the best development team. I swear, they're the fastest to support new models and implement useful functionality whenever users mention it... simply amazing.",
				},
				{
					name: "Can Nuri",
					role: "Reviewer",
					origin: "VS Code Marketplace",
					quote: "Roo Code is one of the most inspiring projects I have seen for a long time. It shapes the way I think and deal with software development.",
					stars: 5,
				},
				{
					name: "Michael",
					role: "Reviewer",
					origin: "VS Code Marketplace",
					quote: "I switched from Windsurf to Roo Code in January and honestly, it's been a huge upgrade. Windsurf kept making mistakes and being dumb when I ask it for things. Roo just gets it. Projects that used to take a full day now wrap up before lunch. ",
					stars: 5,
				},
				{
					name: "Darien Hardin",
					role: "Reviewer",
					origin: "VS Code Marketplace",
					quote: "By far the best coding tool I have used. Looking forward to where this goes in the future. Also, their Discord is an excellent resource with many knowledgeable users sharing their discoveries.",
					stars: 5,
				},
				{
					name: "Wiliam Azzam",
					role: "Reviewer",
					origin: "VS Code Marketplace",
					quote: "I've tried Cursor, Windsurf, Cline, Trae and others, and although using RooCode with OpenRouter is more expensive, it is also far more effective. Its agents and initial setup, and learning how to use Code/Architect/Orchestrator, help a great deal in developing quality projects.",
					stars: 5,
				},
				{
					name: "Matěj Zapletal",
					role: "Reviewer",
					origin: "VS Code Marketplace",
					quote: "Definitely the best AI coding agent extension.",
					stars: 5,
				},
				{
					name: "Ali Davachi",
					role: "Reviewer",
					origin: "VS Code Marketplace",
					quote: "We tried the rest, now we are using the best.  The alternatives are more restrictive.  I didn't use competitors for a reason.  This team is killing it.",
					stars: 5,
				},
				{
					name: "Ryan Booth",
					role: "Reviewer",
					origin: "VS Code Marketplace",
					quote: "I work inside Roo about 60+ hours a week and usually roo is building something at all hours of the day. An amazing tool by an amazing team!",
					stars: 5,
				},
				{
					name: "Matthew Martin",
					role: "Reviewer",
					origin: "VS Code Marketplace",
					quote: "i spent a fortune trying to dial in various tools to get them to work the way i want, and then i found roocode.  customizable for your flavors on your terms.  this is what i always wanted.",
					stars: 5,
				},
				{
					name: "Edwin Jacques",
					role: "Reviewer",
					origin: "VS Code Marketplace",
					quote: "The BEST. Super fast, no-nonsense, UI that makes sense, many API provider choices, responsive, helpful developer community.",
					stars: 5,
				},
				{
					name: "Sean McCann",
					role: "Reviewer",
					origin: "VS Code Marketplace",
					quote: "Roo Code is impressively capable while staying refreshingly simple. It integrates seamlessly into VS Code and handles everything from generating code to refactoring with accuracy and speed. It feels like a natural part of the workflow—no clutter, just results. Extra points for the flexibility of the different agents and the ability to customize them to fit the job.",
					stars: 5,
				},
				{
					name: "Colin Tate",
					role: "Reviewer",
					origin: "VS Code Marketplace",
					quote: "Absolutely amazing extension. I had tried Cursor previously, and this just beats it hands down. I've used it for several large projects now, and it is now my go-to for creating things that would normally take weeks or months. Highly recommended.",
					stars: 5,
				},
				{
					name: "Michael Scott",
					role: "Reviewer",
					origin: "VS Code Marketplace",
					quote: "I've used all the IDEs and all the assistants - Roo Code is hands down the best of them. It's also one of the few that lets you bring your own API keys - no subscriptions required, just pay as you need/go! Fantastic team and support as well!",
					stars: 5,
				},
			]
		function H() {
			let a = (0, c.useRef)(null),
				[e, f] = z({ loop: !0, align: "center", skipSnaps: !1, containScroll: !1 }, [
					B({ playOnInit: !0, delay: 3500, stopOnInteraction: !1, stopOnMouseEnter: !0, stopOnFocusIn: !0 }),
				]),
				g = (0, c.useCallback)(() => {
					f && f.scrollPrev()
				}, [f]),
				h = (0, c.useCallback)(() => {
					f && f.scrollNext()
				}, [f])
			return (
				(0, c.useEffect)(() => {
					if (!f) return
					let a = f?.plugins()?.autoPlay
					if (!a) return
					let b = () => {
						;(a.isPlaying && a.isPlaying()) ||
							setTimeout(() => {
								a.play && a.play()
							}, 2e3)
					}
					return (
						f.on("pointerUp", b),
						() => {
							f.off("pointerUp", b)
						}
					)
				}, [f]),
				(0, b.jsxs)("section", {
					ref: a,
					className: "relative overflow-hidden border-t border-border py-32",
					children: [
						(0, b.jsx)("div", {
							className: "absolute inset-y-0 left-1/2 h-full w-full max-w-[1200px] -translate-x-1/2",
							children: (0, b.jsx)("div", {
								className:
									"absolute left-1/2 top-1/2 h-[400px] w-full -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-violet-500/10 dark:bg-violet-700/30 blur-[120px]",
							}),
						}),
						(0, b.jsxs)("div", {
							className: "container relative z-10 mx-auto px-4 sm:px-6 lg:px-8",
							children: [
								(0, b.jsxs)("div", {
									className: "mx-auto mb-8 md:max-w-2xl text-center",
									children: [
										(0, b.jsx)("h2", {
											className: "text-4xl font-bold tracking-tight sm:text-5xl",
											children: "More than 1 million people are shipping with Roo.",
										}),
										(0, b.jsx)("p", {
											className: "mt-6 text-lg text-muted-foreground",
											children: "And they have some great things to say.",
										}),
									],
								}),
								(0, b.jsxs)(d.motion.div, {
									className: "relative -mx-4 md:mx-auto max-w-[1400px]",
									variants: {
										hidden: { opacity: 0 },
										visible: {
											opacity: 1,
											transition: { duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] },
										},
									},
									initial: "hidden",
									whileInView: "visible",
									viewport: { once: !0 },
									children: [
										(0, b.jsx)("button", {
											onClick: g,
											className:
												"absolute left-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border/50 bg-background/80 p-2 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:shadow-lg md:left-4 md:p-3 lg:left-8",
											"aria-label": "Previous testimonial",
											children: (0, b.jsx)(D, {
												className:
													"h-5 w-5 text-muted-foreground transition-colors hover:text-foreground md:h-6 md:w-6",
											}),
										}),
										(0, b.jsx)("button", {
											onClick: h,
											className:
												"absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border/50 bg-background/80 p-2 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:shadow-lg md:right-4 md:p-3 lg:right-8",
											"aria-label": "Next testimonial",
											children: (0, b.jsx)(E.ChevronRight, {
												className:
													"h-5 w-5 text-muted-foreground transition-colors hover:text-foreground md:h-6 md:w-6",
											}),
										}),
										(0, b.jsx)("div", {
											className:
												"hidden md:block absolute inset-y-0 left-0 z-10 w-[10%] bg-gradient-to-r from-background to-transparent pointer-events-none md:w-[15%]",
										}),
										(0, b.jsx)("div", {
											className:
												"hidden md:block absolute inset-y-0 right-0 z-10 w-[10%] bg-gradient-to-l from-background to-transparent pointer-events-none md:w-[15%]",
										}),
										(0, b.jsx)("div", {
											className: "overflow-hidden",
											ref: e,
											children: (0, b.jsx)("div", {
												className: "flex",
												children: G.map((a) =>
													(0, b.jsx)(
														"div",
														{
															className:
																"relative min-w-0 flex-[0_0_85%] px-2 md:flex-[0_0_70%] md:px-4 lg:flex-[0_0_30%]",
															children: (0, b.jsx)("div", {
																className: "group relative py-10 h-full",
																children: (0, b.jsx)("div", {
																	className:
																		"relative flex h-full flex-col rounded-2xl border border-border bg-background transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:border-border group-hover:bg-background/40 group-hover:shadow-xl dark:border-border/70 dark:bg-background/40 dark:group-hover:border-border dark:group-hover:bg-background/60 dark:group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]",
																	children: (0, b.jsxs)("div", {
																		className: "flex flex-1 flex-col p-4 md:p-6",
																		children: [
																			(0, b.jsx)("div", {
																				className: "flex-1",
																				children: (0, b.jsx)("p", {
																					className:
																						"relative text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80 dark:text-foreground/70 dark:group-hover:text-foreground/90",
																					children: a.quote,
																				}),
																			}),
																			(0, b.jsxs)("div", {
																				className: "relative mt-4 md:mt-6",
																				children: [
																					(0, b.jsx)("h3", {
																						className:
																							"font-medium text-foreground/90 transition-colors duration-300 dark:text-foreground",
																						children: a.name,
																					}),
																					(0, b.jsxs)("p", {
																						className:
																							"text-sm text-muted-foreground transition-colors duration-300 dark:text-muted-foreground/80",
																						children: [
																							"Reviewer" !== a.role &&
																								(0, b.jsxs)(
																									b.Fragment,
																									{
																										children: [
																											a.role,
																											" at ",
																											a.origin,
																										],
																									},
																								),
																							a.stars &&
																								(0, b.jsxs)("span", {
																									className:
																										"flex items-center mt-1",
																									children: [
																										" ",
																										Array.from(
																											{
																												length: a.stars,
																											},
																											(a, c) =>
																												(0,
																												b.jsx)(
																													F,
																													{
																														className:
																															"size-4 fill-violet-500",
																													},
																													c,
																												),
																										),
																									],
																								}),
																						],
																					}),
																				],
																			}),
																		],
																	}),
																}),
															}),
														},
														a.name,
													),
												),
											}),
										}),
									],
								}),
							],
						}),
					],
				})
			)
		}
		a.s(["Testimonials", () => H, "testimonials", 0, G], 66998)
	},
	19648,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(67191),
			d = a.i(56195),
			e = a.i(53686),
			f = a.i(50283),
			g = a.i(48187),
			h = a.i(88412),
			i = c,
			j = a.i(61964)
		function k(a, b) {
			if ("function" == typeof a) return a(b)
			null != a && (a.current = b)
		}
		class l extends i.Component {
			getSnapshotBeforeUpdate(a) {
				let b = this.props.childRef.current
				if (b && a.isPresent && !this.props.isPresent) {
					let a = b.offsetParent,
						c = ((0, h.isHTMLElement)(a) && a.offsetWidth) || 0,
						d = ((0, h.isHTMLElement)(a) && a.offsetHeight) || 0,
						e = this.props.sizeRef.current
					;(e.height = b.offsetHeight || 0),
						(e.width = b.offsetWidth || 0),
						(e.top = b.offsetTop),
						(e.left = b.offsetLeft),
						(e.right = c - e.width - e.left),
						(e.bottom = d - e.height - e.top)
				}
				return null
			}
			componentDidUpdate() {}
			render() {
				return this.props.children
			}
		}
		function m({ children: a, isPresent: d, anchorX: e, anchorY: f, root: g }) {
			let h = (0, i.useId)(),
				m = (0, i.useRef)(null),
				n = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
				{ nonce: o } = (0, i.useContext)(j.MotionConfigContext),
				p = (function (...a) {
					return c.useCallback(
						(function (...a) {
							return (b) => {
								let c = !1,
									d = a.map((a) => {
										let d = k(a, b)
										return c || "function" != typeof d || (c = !0), d
									})
								if (c)
									return () => {
										for (let b = 0; b < d.length; b++) {
											let c = d[b]
											"function" == typeof c ? c() : k(a[b], null)
										}
									}
							}
						})(...a),
						a,
					)
				})(m, a.props?.ref ?? a?.ref)
			return (
				(0, i.useInsertionEffect)(() => {
					let { width: a, height: b, top: c, left: i, right: j, bottom: k } = n.current
					if (d || !m.current || !a || !b) return
					let l = "left" === e ? `left: ${i}` : `right: ${j}`,
						p = "bottom" === f ? `bottom: ${k}` : `top: ${c}`
					m.current.dataset.motionPopId = h
					let q = document.createElement("style")
					o && (q.nonce = o)
					let r = g ?? document.head
					return (
						r.appendChild(q),
						q.sheet &&
							q.sheet.insertRule(`
          [data-motion-pop-id="${h}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${b}px !important;
            ${l}px !important;
            ${p}px !important;
          }
        `),
						() => {
							r.contains(q) && r.removeChild(q)
						}
					)
				}, [d]),
				(0, b.jsx)(l, { isPresent: d, childRef: m, sizeRef: n, children: i.cloneElement(a, { ref: p }) })
			)
		}
		let n = ({
			children: a,
			initial: d,
			isPresent: f,
			onExitComplete: h,
			custom: i,
			presenceAffectsLayout: j,
			mode: k,
			anchorX: l,
			anchorY: n,
			root: p,
		}) => {
			let q = (0, e.useConstant)(o),
				r = (0, c.useId)(),
				s = !0,
				t = (0, c.useMemo)(
					() => (
						(s = !1),
						{
							id: r,
							initial: d,
							isPresent: f,
							custom: i,
							onExitComplete: (a) => {
								for (let b of (q.set(a, !0), q.values())) if (!b) return
								h && h()
							},
							register: (a) => (q.set(a, !1), () => q.delete(a)),
						}
					),
					[f, q, h],
				)
			return (
				j && s && (t = { ...t }),
				(0, c.useMemo)(() => {
					q.forEach((a, b) => q.set(b, !1))
				}, [f]),
				c.useEffect(() => {
					f || q.size || !h || h()
				}, [f]),
				"popLayout" === k &&
					(a = (0, b.jsx)(m, { isPresent: f, anchorX: l, anchorY: n, root: p, children: a })),
				(0, b.jsx)(g.PresenceContext.Provider, { value: t, children: a })
			)
		}
		function o() {
			return new Map()
		}
		var p = a.i(42132)
		let q = (a) => a.key || ""
		function r(a) {
			let b = []
			return (
				c.Children.forEach(a, (a) => {
					;(0, c.isValidElement)(a) && b.push(a)
				}),
				b
			)
		}
		let s = ({
			children: a,
			custom: g,
			initial: h = !0,
			onExitComplete: i,
			presenceAffectsLayout: j = !0,
			mode: k = "sync",
			propagate: l = !1,
			anchorX: m = "left",
			anchorY: o = "top",
			root: s,
		}) => {
			let [t, u] = (0, p.usePresence)(l),
				v = (0, c.useMemo)(() => r(a), [a]),
				w = l && !t ? [] : v.map(q),
				x = (0, c.useRef)(!0),
				y = (0, c.useRef)(v),
				z = (0, e.useConstant)(() => new Map()),
				A = (0, c.useRef)(new Set()),
				[B, C] = (0, c.useState)(v),
				[D, E] = (0, c.useState)(v)
			;(0, f.useIsomorphicLayoutEffect)(() => {
				;(x.current = !1), (y.current = v)
				for (let a = 0; a < D.length; a++) {
					let b = q(D[a])
					w.includes(b) ? (z.delete(b), A.current.delete(b)) : !0 !== z.get(b) && z.set(b, !1)
				}
			}, [D, w.length, w.join("-")])
			let F = []
			if (v !== B) {
				let a = [...v]
				for (let b = 0; b < D.length; b++) {
					let c = D[b],
						d = q(c)
					w.includes(d) || (a.splice(b, 0, c), F.push(c))
				}
				return "wait" === k && F.length && (a = F), E(r(a)), C(v), null
			}
			let { forceRender: G } = (0, c.useContext)(d.LayoutGroupContext)
			return (0, b.jsx)(b.Fragment, {
				children: D.map((a) => {
					let c = q(a),
						d = (!l || !!t) && (v === D || w.includes(c))
					return (0, b.jsx)(
						n,
						{
							isPresent: d,
							initial: (!x.current || !!h) && void 0,
							custom: g,
							presenceAffectsLayout: j,
							mode: k,
							root: s,
							onExitComplete: d
								? void 0
								: () => {
										if (A.current.has(c) || (A.current.add(c), !z.has(c))) return
										z.set(c, !0)
										let a = !0
										z.forEach((b) => {
											b || (a = !1)
										}),
											a && (G?.(), E(y.current), l && u?.(), i && i())
									},
							anchorX: m,
							anchorY: o,
							children: a,
						},
						c,
					)
				}),
			})
		}
		a.s(["AnimatePresence", () => s], 19648)
	},
	61278,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(67191),
			d = a.i(57429),
			e = a.i(19648),
			f = a.i(29159),
			g = a.i(92564),
			h = a.i(8402)
		let i = (0, h.default)("code-xml", [
			["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
			["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
			["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
		])
		var j = a.i(62180)
		let k = (0, h.default)("zap", [
			[
				"path",
				{
					d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
					key: "1xq2db",
				},
			],
		])
		var l = a.i(46395)
		function m({ icon: a, color: c, title: d, description: e }) {
			return (0, b.jsxs)("div", {
				className: "space-y-1.5 sm:space-y-2",
				children: [
					(0, b.jsxs)("div", {
						className: "flex items-center gap-1 space-x-2",
						children: [
							(0, b.jsx)("div", {
								className: `rounded-full ${{ blue: "bg-blue-500/20", purple: "bg-purple-500/20", green: "bg-green-500/20" }[c]} p-3 ${{ blue: "text-blue-400", purple: "text-purple-400", green: "text-green-400" }[c]}`,
								children: (0, b.jsx)(a, { className: "h-6 w-6" }),
							}),
							(0, b.jsx)("h3", { className: "text-base font-semibold sm:text-lg", children: d }),
						],
					}),
					(0, b.jsx)("p", { className: "text-sm text-gray-400 sm:text-base", children: e }),
				],
			})
		}
		let n = "v3.8.0"
		function o() {
			let [a, h] = (0, c.useState)(!1),
				o = (0, c.useRef)(null),
				p = (0, c.useRef)(null)
			return (
				(0, c.useEffect)(() => {
					let a,
						b = p.current,
						c = o.current
					if (!b || !c) return
					let d = b.getContext("2d")
					if (!d) return
					let e = () => {
						let a = c.getBoundingClientRect()
						;(b.width = a.width + 8),
							(b.height = a.height + 8),
							(b.style.width = `${b.width}px`),
							(b.style.height = `${b.height}px`)
					}
					e(), window.addEventListener("resize", e)
					let f = 0,
						g = () => {
							if (!d || !b) return
							d.clearRect(0, 0, b.width, b.height)
							let c = b.width - 4,
								e = b.height - 4,
								h = e / 2
							d.beginPath(),
								d.moveTo(2 + h, 2),
								d.lineTo(2 + c - h, 2),
								d.arcTo(2 + c, 2, 2 + c, 2 + h, h),
								d.lineTo(2 + c, 2 + e - h),
								d.arcTo(2 + c, 2 + e, 2 + c - h, 2 + e, h),
								d.lineTo(2 + h, 2 + e),
								d.arcTo(2, 2 + e, 2, 2 + e - h, h),
								d.lineTo(2, 2 + h),
								d.arcTo(2, 2, 2 + h, 2, h),
								d.closePath(),
								(f = (f + 0.016) % (2 * Math.PI))
							let i = b.width / 2,
								j = b.height / 2,
								k = "70, 130, 255",
								l = d.createConicGradient(f, i, j)
							l.addColorStop(0, `rgba(${k}, 0)`),
								l.addColorStop(0.2, `rgba(${k}, 0.8)`),
								l.addColorStop(0.4, `rgba(${k}, 0)`),
								l.addColorStop(1, `rgba(${k}, 0)`),
								(d.strokeStyle = l),
								(d.lineWidth = 1.5),
								d.stroke(),
								(d.shadowColor = `rgba(${k}, 0.6)`),
								(d.shadowBlur = 5),
								(d.strokeStyle = `rgba(${k}, 0.3)`),
								(d.lineWidth = 0.5),
								d.stroke(),
								(a = requestAnimationFrame(g))
						}
					return (
						g(),
						() => {
							window.removeEventListener("resize", e), a && cancelAnimationFrame(a)
						}
					)
				}, []),
				(0, b.jsxs)(b.Fragment, {
					children: [
						(0, b.jsxs)("div", {
							className: "relative inline-flex",
							ref: o,
							children: [
								(0, b.jsx)("canvas", {
									ref: p,
									className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
									style: { pointerEvents: "none" },
								}),
								(0, b.jsxs)(l.default, {
									href: "#",
									onClick: (a) => {
										a.preventDefault(), h(!0)
									},
									className:
										"relative z-10 flex items-center space-x-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-all hover:bg-gray-900",
									children: [
										(0, b.jsxs)("span", { children: ["See what's new in ", n] }),
										(0, b.jsx)(g.ArrowRight, { className: "h-3.5 w-3.5" }),
									],
								}),
							],
						}),
						(0, b.jsx)(e.AnimatePresence, {
							children:
								a &&
								(0, b.jsxs)(b.Fragment, {
									children: [
										(0, b.jsx)(d.motion.div, {
											className: "fixed inset-0 z-40 bg-black/80 backdrop-blur-sm",
											initial: { opacity: 0, backdropFilter: "blur(0px)" },
											animate: { opacity: 1, backdropFilter: "blur(8px)" },
											exit: { opacity: 0, backdropFilter: "blur(0px)" },
											transition: { duration: 0.2 },
										}),
										(0, b.jsx)("div", {
											className: "fixed inset-0 z-50 overflow-y-auto",
											onClick: () => h(!1),
											children: (0, b.jsx)("div", {
												className: "flex min-h-full items-center justify-center p-4",
												children: (0, b.jsxs)(d.motion.div, {
													className:
														"relative w-full max-w-2xl rounded-lg border border-gray-800 bg-black p-6 sm:p-8",
													initial: { opacity: 0, y: 20, scale: 0.95 },
													animate: { opacity: 1, y: 0, scale: 1 },
													exit: { opacity: 0, y: 20, scale: 0.95 },
													transition: {
														type: "spring",
														damping: 20,
														stiffness: 400,
														mass: 0.6,
														duration: 0.25,
													},
													onClick: (a) => {
														a.stopPropagation()
													},
													children: [
														(0, b.jsxs)("div", {
															className: "flex items-center justify-between gap-4",
															children: [
																(0, b.jsxs)("h2", {
																	className: "text-xl font-bold sm:text-2xl",
																	children: ["What's New in Roo Code ", n],
																}),
																(0, b.jsx)("button", {
																	onClick: () => h(!1),
																	className:
																		"flex-shrink-0 rounded-full p-1.5 text-gray-400 hover:bg-gray-800 hover:text-white",
																	children: (0, b.jsx)(f.X, { className: "h-5 w-5" }),
																}),
															],
														}),
														(0, b.jsxs)("div", {
															className: "mt-4 space-y-4 sm:mt-6 sm:space-y-6",
															children: [
																(0, b.jsx)(m, {
																	icon: i,
																	color: "blue",
																	title: "AI-Powered Code Generation",
																	description:
																		"Generate high-quality code snippets and entire components with our new AI assistant. Trained on millions of code repositories to understand your project context.",
																}),
																(0, b.jsx)(m, {
																	icon: j.Users2,
																	color: "purple",
																	title: "Real-time Collaboration",
																	description:
																		"Work together with your team in real-time with our new collaborative editing features. See changes as they happen and resolve conflicts automatically.",
																}),
																(0, b.jsx)(m, {
																	icon: k,
																	color: "green",
																	title: "Performance Optimizations",
																	description:
																		"We've completely rewritten our core engine for blazing fast performance. Experience up to 10x faster build times and smoother development workflow.",
																}),
															],
														}),
													],
												}),
											}),
										}),
									],
								}),
						}),
					],
				})
			)
		}
		a.s(["WhatsNewButton", () => o], 61278)
	},
	19034,
	98241,
	(a) => {
		"use strict"
		var b = a.i(8402)
		let c = (0, b.default)("pointer", [
			["path", { d: "M22 14a8 8 0 0 1-8 8", key: "56vcr3" }],
			["path", { d: "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1agjmk" }],
			["path", { d: "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1", key: "wdbh2u" }],
			["path", { d: "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10", key: "1ibuk9" }],
			[
				"path",
				{
					d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
					key: "g6ys72",
				},
			],
		])
		a.s(["Pointer", () => c], 19034)
		let d = (0, b.default)("github", [
			[
				"path",
				{
					d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
					key: "tonef",
				},
			],
			["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
		])
		a.s(["Github", () => d], 98241)
	},
	73111,
	(a) => {
		"use strict"
		let b = (0, a.i(8402).default)("code", [
			["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
			["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }],
		])
		a.s(["Code", () => b], 73111)
	},
	20771,
	36777,
	(a) => {
		"use strict"
		var b = a.i(8402)
		let c = (0, b.default)("wrench", [
			[
				"path",
				{
					d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
					key: "1ngwbx",
				},
			],
		])
		a.s(["Wrench", () => c], 20771)
		let d = (0, b.default)("map", [
			[
				"path",
				{
					d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
					key: "169xi5",
				},
			],
			["path", { d: "M15 5.764v15", key: "1pn4in" }],
			["path", { d: "M9 3.236v15", key: "1uimfh" }],
		])
		a.s(["Map", () => d], 36777)
	},
	56666,
	(a) => {
		"use strict"
		let b = (0, a.i(8402).default)("message-circle-question-mark", [
			[
				"path",
				{
					d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
					key: "1sd12s",
				},
			],
			["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
			["path", { d: "M12 17h.01", key: "p32p05" }],
		])
		a.s(["default", () => b])
	},
	92785,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(67191),
			d = a.i(57429),
			e = a.i(19648),
			f = a.i(19034),
			g = a.i(40760),
			h = a.i(98241),
			i = a.i(73111),
			j = a.i(95368),
			k = a.i(20771),
			l = a.i(36777),
			m = a.i(56666),
			m = m
		let n = (0, a.i(8402).default)("corner-down-right", [
			["path", { d: "m15 10 5 5-5 5", key: "qqa56n" }],
			["path", { d: "M4 4v7a4 4 0 0 0 4 4h12", key: "z08zvw" }],
		])
		var o = a.i(92137),
			p = a.i(71544)
		a.i(46951)
		var q = a.i(36894)
		let r = {
				slack: { name: "Slack", icon: g.Slack },
				web: { name: "Web", icon: f.Pointer },
				github: { name: "GitHub", icon: h.Github },
				extension: { name: "Extension", icon: i.Code },
			},
			s = {
				explainer: { name: "Explainer", icon: m.default },
				planner: { name: "Planner", icon: l.Map },
				coder: { name: "Coder", icon: i.Code },
				reviewer: { name: "Reviewer", icon: j.GitPullRequest },
				fixer: { name: "Fixer", icon: k.Wrench },
			},
			t = [
				{
					role: "Frontend Developer",
					use: "Take Lisa's feedback above and incorporate it into the landing page.",
					agent: s.coder,
					context: r.slack,
				},
				{
					role: "Customer Success",
					use: "What could be causing this bug as described by the customer?",
					agent: s.explainer,
					context: r.web,
				},
				{
					role: "Backend Engineer",
					use: "Create a migration denormalizing total_cost calculation and backfill the remainder.",
					agent: s.coder,
					context: r.extension,
				},
				{
					role: "Security Engineer",
					use: "Do we use any of the libraries mentioned in the thread?",
					agent: s.explainer,
					context: r.slack,
				},
				{
					role: "Designer",
					use: "Refactor the button component to use CSS variables",
					agent: s.coder,
					context: r.slack,
				},
				{
					role: "Product Manager",
					use: "How big of a change would it be to turn this from a yes/no to have 4 options?",
					agent: s.coder,
					context: r.web,
				},
				{
					role: "QA Engineer",
					use: "Write a Playwright test for the login flow failure case, extract existing mocks into shared.",
					agent: s.coder,
					context: r.github,
				},
				{
					role: "DevOps Engineer",
					use: "Update the Dockerfile to use Node 20 Alpine.",
					agent: s.fixer,
					context: r.slack,
				},
				{
					role: "Mobile Developer",
					use: "Copy what we did in PR #4253 and apply to this component.",
					agent: s.coder,
					context: r.slack,
				},
				{
					role: "Technical Writer",
					use: "Generate JSDoc comments for the auth utility functions.",
					agent: s.coder,
					context: r.github,
				},
				{
					role: "Junior Developer",
					use: "Review this pull request for potential performance improvements.",
					agent: s.reviewer,
					context: r.github,
				},
				{
					role: "Engineering Manager",
					use: "Break down this user profile feature into technical tasks, grouped by skill.",
					agent: s.planner,
					context: r.web,
				},
				{
					role: "Support Engineer",
					use: "What's causing this stack trace? The customer is on macOS 26.1.",
					agent: s.explainer,
					context: r.web,
				},
				{
					role: "Frontend Developer",
					use: "Make the navigation menu responsive on mobile devices.",
					agent: s.coder,
					context: r.web,
				},
				{
					role: "Backend Engineer",
					use: "Give me two architecture options for the notification system in this PRD.",
					agent: s.planner,
					context: r.web,
				},
				{
					role: "Designer",
					use: "Implement the loading spinner animation in CSS.",
					agent: s.coder,
					context: r.web,
				},
				{
					role: "Customer Success",
					use: "Write a script to find patterns in these CPU load logs.",
					agent: s.coder,
					context: r.slack,
				},
				{
					role: "Full Stack Dev",
					use: "Refactor user_preferences to use named columns instead of a single JSON blob",
					agent: s.coder,
					context: r.extension,
				},
				{
					role: "QA Engineer",
					use: "Automate the regression suite for the checkout process.",
					agent: s.coder,
					context: r.extension,
				},
				{
					role: "DevOps Engineer",
					use: "Understand why this build error only happens in prod and fix it.",
					agent: s.coder,
					context: r.extension,
				},
				{
					role: "Product Marketer",
					use: "What were the 5 most significant PRs merged in the past week?",
					agent: s.explainer,
					context: r.slack,
				},
				{
					role: "Junior Developer",
					use: "Explain how useEffect dependency arrays work here.",
					agent: s.explainer,
					context: r.extension,
				},
				{
					role: "Senior Engineer",
					use: "Check if this implementation follows the Single Responsibility Principle.",
					agent: s.reviewer,
					context: r.github,
				},
			],
			u = { 1: 0.7, 2: 0.85, 3: 1, 4: 1.15 }
		function v({ item: a, opacity: c = 1, className: d = "" }) {
			let e = a.context.icon
			return (0, b.jsxs)("div", {
				className: `rounded-xl outline outline-border/50 bg-card/80 backdrop-blur-sm p-3 md:p-4 shadow-xl transition-all hover:shadow-xl hover:outline-8 ${d}`,
				children: [
					(0, b.jsxs)("div", {
						className: "text-sm flex items-center gap-2 font-medium text-violet-600 mb-1",
						style: { opacity: c },
						children: [
							(0, b.jsx)(p.default, {
								src: a.avatar,
								className: "size-6 rounded-full outline-1 outline-border",
								alt: "",
								width: 18,
								height: 18,
								unoptimized: !0,
							}),
							(0, b.jsx)("span", { className: "text-nowrap", children: a.role }),
						],
					}),
					(0, b.jsxs)("div", {
						className: "text-[0.7em] flex flex-wrap items-center gap-1 text-muted-foreground mb-1",
						style: { opacity: c },
						children: [
							(0, b.jsx)(n, { className: "size-4 shrink-0 ml-3 -mt-1" }),
							(0, b.jsxs)("span", {
								className: "text-nowrap font-mono",
								children: ["To ", a.agent.name, " Agent"],
							}),
						],
					}),
					(0, b.jsx)("div", {
						className: "text-base font-light leading-tight my-1 ml-8",
						style: { opacity: c },
						children: a.use,
					}),
					(0, b.jsxs)("div", {
						className: "text-[0.7em] font-light text-muted-foreground leading-tight mt-2 ml-8",
						style: { opacity: c },
						children: [
							"via ",
							(0, b.jsx)(e, { strokeWidth: 1.5, className: "size-3.5 inline ml-1" }),
							" ",
							a.context.name,
						],
					}),
				],
			})
		}
		function w({ item: a }) {
			let c = Math.min(1, 0.5 + a.layer / 3)
			return (0, b.jsx)(d.motion.div, {
				className: "absolute w-[200px] cursor-default group",
				style: { left: `${a.position.x}%`, top: `${a.position.y}%`, zIndex: a.zIndex, width: a.width },
				initial: { opacity: 0, scale: 0 },
				whileInView: { opacity: 1, scale: a.scale, transition: { duration: 0.1, delay: 0 } },
				whileHover: { scale: 1.3, zIndex: 30 },
				viewport: { once: !0 },
				transformTemplate: ({ scale: a }) => `translate(-50%, -50%) scale(${a})`,
				children: (0, b.jsx)(v, {
					item: a,
					opacity: c,
					className: 4 === a.layer ? "shadow-lg border-border" : "",
				}),
			})
		}
		function x({ agentTitle: a = !1 }) {
			let f = (0, c.useMemo)(
					() =>
						(function (a) {
							let b,
								c = ((b = 42), () => (b = (9301 * b + 49297) % 233280) / 233280),
								d = 25,
								e = 14.285714285714286,
								f = Array.from({ length: a.length }, (a, b) => b)
							for (let a = f.length - 1; a > 0; a--) {
								let b = Math.floor(c() * (a + 1)),
									d = f[a]
								;(f[a] = f[b]), (f[b] = d)
							}
							return a.map((a, b) => {
								let g = f[b],
									h = Math.floor(g / 4),
									i = (b % 4) + 1,
									j = (c() - 0.5) * d * 0.7,
									k = (c() - 0.5) * e * 0.7
								return {
									...a,
									avatar: `/illustrations/user-faces/${b + 1}.jpg`,
									layer: i,
									position: { x: (g % 4) * d + d / 2 + j, y: h * e + e / 2 + k },
									scale: u[i],
									zIndex: i,
									width: Math.round(300 + 100 * c()),
								}
							})
						})(t),
					[],
				),
				[g, h] = (0, c.useState)(!1)
			return (0, b.jsxs)("section", {
				className: "pt-24 bg-background overflow-hidden relative",
				children: [
					(0, b.jsx)("div", {
						className: "absolute inset-y-0 left-1/2 h-full w-full max-w-[1200px] -translate-x-1/2",
						children: (0, b.jsx)("div", {
							className:
								"absolute left-1/2 top-1/2 h-[700px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/10 blur-[140px]",
						}),
					}),
					(0, b.jsxs)("div", {
						className: "container px-4 mx-auto sm:px-6 lg:px-8",
						children: [
							(0, b.jsxs)("div", {
								className: "text-center mb-16",
								children: [
									(0, b.jsx)("h2", {
										className: "text-4xl font-bold tracking-tight mb-4",
										children: a
											? (0, b.jsxs)(b.Fragment, {
													children: [
														"Part of the AI team to help your ",
														(0, b.jsx)("em", { children: "entire" }),
														" human team",
													],
												})
											: (0, b.jsxs)(b.Fragment, {
													children: [
														"The AI team to help your ",
														(0, b.jsx)("em", { children: "entire" }),
														" human team",
													],
												}),
									}),
									(0, b.jsx)("p", {
										className: "text-xl font-light text-muted-foreground max-w-2xl mx-auto",
										children:
											"Developers, PMs, Designers, Customer Success: everyone moves faster and more independently with Roo.",
									}),
								],
							}),
							(0, b.jsxs)("div", {
								className: "md:hidden flex flex-col gap-2 px-2 pb-12 max-w-md mx-auto",
								children: [
									(0, b.jsx)(e.AnimatePresence, {
										mode: "popLayout",
										children: f
											.slice(0, g ? void 0 : 8)
											.map((a, c) =>
												(0, b.jsx)(
													d.motion.div,
													{
														initial: { opacity: 0, y: 20 },
														whileInView: { opacity: 1, y: 0 },
														transition: { delay: (c % 8) * 0.1, duration: 0.4 },
														viewport: { once: !0, margin: "-50px" },
														className: `w-[90%] ${c % 2 == 0 ? "self-start" : "self-end"}`,
														children: (0, b.jsx)(v, { item: a }),
													},
													a.use,
												),
											),
									}),
									!g &&
										(0, b.jsx)("div", {
											className: "text-center mt-8 z-10",
											children: (0, b.jsxs)(q.Button, {
												variant: "outline",
												onClick: () => h(!0),
												children: ["More", (0, b.jsx)(o.ChevronDown, {})],
											}),
										}),
								],
							}),
							(0, b.jsx)("div", {
								className:
									"hidden md:block relative h-[800px] md:min-h-[800px] w-full max-w-6xl mx-auto",
								children: f.map((a, c) => (0, b.jsx)(w, { item: a }, c)),
							}),
						],
					}),
				],
			})
		}
		a.s(["UseExamplesSection", () => x], 92785)
	},
]

//# sourceMappingURL=_017c5b7e._.js.map
