;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	93702,
	(e) => {
		"use strict"
		let t = (0, e.i(21387).default)("git-pull-request", [
			["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
			["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
			["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
			["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }],
		])
		e.s(["GitPullRequest", () => t], 93702)
	},
	20291,
	(e) => {
		"use strict"
		var t = e.i(8026),
			i = e.i(10008)
		function n() {
			let e = (0, i.useRef)(null)
			return (
				(0, i.useEffect)(() => {
					let t,
						i = e.current
					if (!i) return
					let n = i.getContext("2d")
					if (!n) return
					let r = [
							{
								x: 0.2 * i.width,
								y: 0.3 * i.height,
								radius: 0.4 * i.width,
								color: "rgba(0, 100, 255, 0.15)",
							},
							{
								x: 0.8 * i.width,
								y: 0.7 * i.height,
								radius: 0.5 * i.width,
								color: "rgba(100, 0, 255, 0.1)",
							},
						],
						s = [],
						o = Math.min(50, Math.floor(window.innerWidth / 40)),
						a = () => {
							;(i.width = window.innerWidth),
								(i.height = window.innerHeight),
								(r = [
									{
										x: 0.2 * i.width,
										y: 0.3 * i.height,
										radius: 0.4 * i.width,
										color: "rgba(0, 100, 255, 0.15)",
									},
									{
										x: 0.8 * i.width,
										y: 0.7 * i.height,
										radius: 0.5 * i.width,
										color: "rgba(100, 0, 255, 0.1)",
									},
								]),
								l()
						}
					function l() {
						if (!n) throw Error("Context is null (not initialized?)")
						if (!i) throw Error("Canvas is null (not initialized?)")
						n.clearRect(0, 0, i.width, i.height),
							r.forEach((e) => {
								let t = n.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.radius)
								t.addColorStop(0, e.color),
									t.addColorStop(1, "rgba(0, 0, 0, 0)"),
									(n.fillStyle = t),
									n.fillRect(0, 0, i.width, i.height)
							}),
							(n.strokeStyle = "rgba(50, 50, 70, 0.15)"),
							(n.lineWidth = 0.5)
						let e = 0.7 * i.height,
							t = 0.5 * i.width
						for (let r = 0; r <= i.width; r += 50) {
							let s = r / i.width - 0.5
							n.beginPath(), n.moveTo(r, 0)
							let o = e - 50 * Math.abs(s)
							n.quadraticCurveTo(r + (t - r) * 0.3, o, t + (r - t) * 0.2, e), n.stroke()
						}
						for (let i = 0; i <= e; i += 50) {
							let r = 50 * (1 + (i / e) * 5)
							n.beginPath(), n.moveTo(t - r, i), n.lineTo(t + r, i), n.stroke()
						}
						s.forEach((e) => {
							e.update(), e.draw()
						}),
							(function () {
								if (!n) throw Error("Context is null (not initialized?)")
								for (let e = 0; e < s.length; e++)
									for (let t = e; t < s.length; t++) {
										let i = s[e].x - s[t].x,
											r = s[e].y - s[t].y,
											o = Math.sqrt(i * i + r * r)
										if (o < 150) {
											let i = (1 - o / 150) * 0.5
											;(n.strokeStyle = `rgba(100, 150, 255, ${i})`),
												(n.lineWidth = 0.5),
												n.beginPath(),
												n.moveTo(s[e].x, s[e].y),
												n.lineTo(s[t].x, s[t].y),
												n.stroke()
										}
									}
							})()
					}
					a(), window.addEventListener("resize", a)
					class u {
						x
						y
						size
						speedX
						speedY
						color
						opacity
						constructor() {
							if (!i) throw Error("Canvas is null (not initialized?)")
							;(this.x = Math.random() * i.width),
								(this.y = Math.random() * (0.7 * i.height)),
								(this.size = 2 * Math.random() + 1),
								(this.speedX = (Math.random() - 0.5) * 0.8),
								(this.speedY = (Math.random() - 0.5) * 0.8),
								(this.color = "rgba(100, 150, 255, "),
								(this.opacity = 0.5 * Math.random() + 0.2)
						}
						update() {
							if (!i) throw Error("Canvas is null (not initialized?)")
							;(this.x += this.speedX),
								(this.y += this.speedY),
								this.x > i.width ? (this.x = 0) : this.x < 0 && (this.x = i.width),
								this.y > 0.7 * i.height ? (this.y = 0) : this.y < 0 && (this.y = 0.7 * i.height),
								(this.opacity += 0.01 * Math.sin(0.001 * Date.now())),
								(this.opacity = Math.max(0.1, Math.min(0.7, this.opacity)))
						}
						draw() {
							if (!n) throw Error("Context is null (not initialized?)")
							;(n.fillStyle = `${this.color}${this.opacity})`),
								n.beginPath(),
								n.arc(this.x, this.y, this.size, 0, 2 * Math.PI),
								n.fill()
						}
					}
					for (let e = 0; e < o; e++) s.push(new u())
					let d = 0.2 * i.width,
						c = 0.3 * i.height,
						h = (e) => {
							;(d = e.clientX), (c = e.clientY)
						}
					return (
						!(function e() {
							if (((t = requestAnimationFrame(e)), !i)) throw Error("Canvas is null (not initialized?)")
							let n = d - r[0].x,
								s = c - r[0].y
							;(r[0].x += 0.05 * n), (r[0].y += 0.05 * s)
							let o = Math.sqrt(n * n + s * s)
							;(r[0].radius = Math.max(0.2 * i.width, Math.min(0.4 * i.width, 0.3 * i.width + 0.1 * o))),
								l()
						})(),
						window.addEventListener("mousemove", h),
						() => {
							window.removeEventListener("resize", a),
								window.removeEventListener("mousemove", h),
								cancelAnimationFrame(t)
						}
					)
				}, []),
				(0, t.jsx)("canvas", { ref: e, className: "absolute inset-0 h-full w-full", style: { zIndex: 0 } })
			)
		}
		e.s(["AnimatedBackground", () => n])
	},
	27686,
	(e) => {
		"use strict"
		var t,
			i,
			n =
				/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
			r =
				((t = function (e) {
					return n.test(e) || (111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && 91 > e.charCodeAt(2))
				}),
				(i = Object.create(null)),
				function (e) {
					return void 0 === i[e] && (i[e] = t(e)), i[e]
				})
		e.s(["default", () => r], 27686)
	},
	66904,
	5482,
	42614,
	13502,
	21798,
	49109,
	87467,
	82075,
	(e) => {
		"use strict"
		let t,
			i,
			n,
			r = [
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
			s = new Set(r),
			o = (e, t, i) => (i > t ? t : i < e ? e : i),
			a = { test: (e) => "number" == typeof e, parse: parseFloat, transform: (e) => e },
			l = { ...a, transform: (e) => o(0, 1, e) },
			u = { ...a, default: 1 },
			d = (e) => Math.round(1e5 * e) / 1e5,
			c = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
			h =
				/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
			p = (e, t) => (i) =>
				!!(
					("string" == typeof i && h.test(i) && i.startsWith(e)) ||
					(t && null != i && Object.prototype.hasOwnProperty.call(i, t))
				),
			m = (e, t, i) => (n) => {
				if ("string" != typeof n) return n
				let [r, s, o, a] = n.match(c)
				return {
					[e]: parseFloat(r),
					[t]: parseFloat(s),
					[i]: parseFloat(o),
					alpha: void 0 !== a ? parseFloat(a) : 1,
				}
			},
			f = { ...a, transform: (e) => Math.round(o(0, 255, e)) },
			g = {
				test: p("rgb", "red"),
				parse: m("red", "green", "blue"),
				transform: ({ red: e, green: t, blue: i, alpha: n = 1 }) =>
					"rgba(" +
					f.transform(e) +
					", " +
					f.transform(t) +
					", " +
					f.transform(i) +
					", " +
					d(l.transform(n)) +
					")",
			},
			y = {
				test: p("#"),
				parse: function (e) {
					let t = "",
						i = "",
						n = "",
						r = ""
					return (
						e.length > 5
							? ((t = e.substring(1, 3)),
								(i = e.substring(3, 5)),
								(n = e.substring(5, 7)),
								(r = e.substring(7, 9)))
							: ((t = e.substring(1, 2)),
								(i = e.substring(2, 3)),
								(n = e.substring(3, 4)),
								(r = e.substring(4, 5)),
								(t += t),
								(i += i),
								(n += n),
								(r += r)),
						{
							red: parseInt(t, 16),
							green: parseInt(i, 16),
							blue: parseInt(n, 16),
							alpha: r ? parseInt(r, 16) / 255 : 1,
						}
					)
				},
				transform: g.transform,
			},
			v = (e) => ({
				test: (t) => "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
				parse: parseFloat,
				transform: (t) => `${t}${e}`,
			}),
			x = v("deg"),
			b = v("%"),
			w = v("px"),
			k = v("vh"),
			S = v("vw"),
			T = { ...b, parse: (e) => b.parse(e) / 100, transform: (e) => b.transform(100 * e) },
			P = {
				test: p("hsl", "hue"),
				parse: m("hue", "saturation", "lightness"),
				transform: ({ hue: e, saturation: t, lightness: i, alpha: n = 1 }) =>
					"hsla(" +
					Math.round(e) +
					", " +
					b.transform(d(t)) +
					", " +
					b.transform(d(i)) +
					", " +
					d(l.transform(n)) +
					")",
			},
			C = {
				test: (e) => g.test(e) || y.test(e) || P.test(e),
				parse: (e) => (g.test(e) ? g.parse(e) : P.test(e) ? P.parse(e) : y.parse(e)),
				transform: (e) =>
					"string" == typeof e ? e : e.hasOwnProperty("red") ? g.transform(e) : P.transform(e),
				getAnimatableNone: (e) => {
					let t = C.parse(e)
					return (t.alpha = 0), C.transform(t)
				},
			},
			M =
				/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
			A = "number",
			j = "color",
			E =
				/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu
		function R(e) {
			let t = e.toString(),
				i = [],
				n = { color: [], number: [], var: [] },
				r = [],
				s = 0,
				o = t
					.replace(
						E,
						(e) => (
							C.test(e)
								? (n.color.push(s), r.push(j), i.push(C.parse(e)))
								: e.startsWith("var(")
									? (n.var.push(s), r.push("var"), i.push(e))
									: (n.number.push(s), r.push(A), i.push(parseFloat(e))),
							++s,
							"${}"
						),
					)
					.split("${}")
			return { values: i, split: o, indexes: n, types: r }
		}
		function V(e) {
			return R(e).values
		}
		function N(e) {
			let { split: t, types: i } = R(e),
				n = t.length
			return (e) => {
				let r = ""
				for (let s = 0; s < n; s++)
					if (((r += t[s]), void 0 !== e[s])) {
						let t = i[s]
						t === A ? (r += d(e[s])) : t === j ? (r += C.transform(e[s])) : (r += e[s])
					}
				return r
			}
		}
		let D = (e) => ("number" == typeof e ? 0 : C.test(e) ? C.getAnimatableNone(e) : e),
			I = {
				test: function (e) {
					return isNaN(e) && "string" == typeof e && (e.match(c)?.length || 0) + (e.match(M)?.length || 0) > 0
				},
				parse: V,
				createTransformer: N,
				getAnimatableNone: function (e) {
					let t = V(e)
					return N(e)(t.map(D))
				},
			},
			L = new Set(["brightness", "contrast", "saturate", "opacity"])
		function F(e) {
			let [t, i] = e.slice(0, -1).split("(")
			if ("drop-shadow" === t) return e
			let [n] = i.match(c) || []
			if (!n) return e
			let r = i.replace(n, ""),
				s = +!!L.has(t)
			return n !== i && (s *= 100), t + "(" + s + r + ")"
		}
		let O = /\b([a-z-]*)\(.*?\)/gu,
			B = {
				...I,
				getAnimatableNone: (e) => {
					let t = e.match(O)
					return t ? t.map(F).join(" ") : e
				},
			},
			z = { ...a, transform: Math.round },
			U = {
				borderWidth: w,
				borderTopWidth: w,
				borderRightWidth: w,
				borderBottomWidth: w,
				borderLeftWidth: w,
				borderRadius: w,
				borderTopLeftRadius: w,
				borderTopRightRadius: w,
				borderBottomRightRadius: w,
				borderBottomLeftRadius: w,
				width: w,
				maxWidth: w,
				height: w,
				maxHeight: w,
				top: w,
				right: w,
				bottom: w,
				left: w,
				inset: w,
				insetBlock: w,
				insetBlockStart: w,
				insetBlockEnd: w,
				insetInline: w,
				insetInlineStart: w,
				insetInlineEnd: w,
				padding: w,
				paddingTop: w,
				paddingRight: w,
				paddingBottom: w,
				paddingLeft: w,
				paddingBlock: w,
				paddingBlockStart: w,
				paddingBlockEnd: w,
				paddingInline: w,
				paddingInlineStart: w,
				paddingInlineEnd: w,
				margin: w,
				marginTop: w,
				marginRight: w,
				marginBottom: w,
				marginLeft: w,
				marginBlock: w,
				marginBlockStart: w,
				marginBlockEnd: w,
				marginInline: w,
				marginInlineStart: w,
				marginInlineEnd: w,
				fontSize: w,
				backgroundPositionX: w,
				backgroundPositionY: w,
				rotate: x,
				rotateX: x,
				rotateY: x,
				rotateZ: x,
				scale: u,
				scaleX: u,
				scaleY: u,
				scaleZ: u,
				skew: x,
				skewX: x,
				skewY: x,
				distance: w,
				translateX: w,
				translateY: w,
				translateZ: w,
				x: w,
				y: w,
				z: w,
				perspective: w,
				transformPerspective: w,
				opacity: l,
				originX: T,
				originY: T,
				originZ: w,
				zIndex: z,
				fillOpacity: l,
				strokeOpacity: l,
				numOctaves: z,
			},
			$ = {
				...U,
				color: C,
				backgroundColor: C,
				outlineColor: C,
				fill: C,
				stroke: C,
				borderColor: C,
				borderTopColor: C,
				borderRightColor: C,
				borderBottomColor: C,
				borderLeftColor: C,
				filter: B,
				WebkitFilter: B,
			},
			W = (e) => $[e],
			q = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
			H = () => ({ x: q(), y: q() }),
			Y = () => ({ min: 0, max: 0 }),
			X = () => ({ x: Y(), y: Y() }),
			G = (e) => !!(e && e.getVelocity),
			_ = new Set(["width", "height", "top", "left", "right", "bottom", ...r]),
			K = (e) => (t) => t.test(e),
			Z = [a, w, b, x, S, k, { test: (e) => "auto" === e, parse: (e) => e }],
			J = (e) => Z.find(K(e))
		var Q,
			ee = e.i(53378)
		let et = () => {},
			ei = () => {}
		ee.default
		let en = (e) => (t) => "string" == typeof t && t.startsWith(e),
			er = en("--"),
			es = en("var(--"),
			eo = (e) => !!es(e) && ea.test(e.split("/*")[0].trim()),
			ea = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
		function el(e) {
			return "string" == typeof e && e.split("/*")[0].includes("var(--")
		}
		let eu = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
			ed = (e) => (180 * e) / Math.PI,
			ec = (e) => ep(ed(Math.atan2(e[1], e[0]))),
			eh = {
				x: 4,
				y: 5,
				translateX: 4,
				translateY: 5,
				scaleX: 0,
				scaleY: 3,
				scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
				rotate: ec,
				rotateZ: ec,
				skewX: (e) => ed(Math.atan(e[1])),
				skewY: (e) => ed(Math.atan(e[2])),
				skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
			},
			ep = (e) => ((e %= 360) < 0 && (e += 360), e),
			em = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
			ef = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
			eg = {
				x: 12,
				y: 13,
				z: 14,
				translateX: 12,
				translateY: 13,
				translateZ: 14,
				scaleX: em,
				scaleY: ef,
				scale: (e) => (em(e) + ef(e)) / 2,
				rotateX: (e) => ep(ed(Math.atan2(e[6], e[5]))),
				rotateY: (e) => ep(ed(Math.atan2(-e[2], e[0]))),
				rotateZ: ec,
				rotate: ec,
				skewX: (e) => ed(Math.atan(e[4])),
				skewY: (e) => ed(Math.atan(e[1])),
				skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
			}
		function ey(e) {
			return +!!e.includes("scale")
		}
		function ev(e, t) {
			let i, n
			if (!e || "none" === e) return ey(t)
			let r = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u)
			if (r) (i = eg), (n = r)
			else {
				let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u)
				;(i = eh), (n = t)
			}
			if (!n) return ey(t)
			let s = i[t],
				o = n[1].split(",").map(ex)
			return "function" == typeof s ? s(o) : o[s]
		}
		function ex(e) {
			return parseFloat(e.trim())
		}
		let eb = (e) => e === a || e === w,
			ew = new Set(["x", "y", "z"]),
			ek = r.filter((e) => !ew.has(e)),
			eS = {
				width: ({ x: e }, { paddingLeft: t = "0", paddingRight: i = "0" }) =>
					e.max - e.min - parseFloat(t) - parseFloat(i),
				height: ({ y: e }, { paddingTop: t = "0", paddingBottom: i = "0" }) =>
					e.max - e.min - parseFloat(t) - parseFloat(i),
				top: (e, { top: t }) => parseFloat(t),
				left: (e, { left: t }) => parseFloat(t),
				bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
				right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
				x: (e, { transform: t }) => ev(t, "x"),
				y: (e, { transform: t }) => ev(t, "y"),
			}
		;(eS.translateX = eS.x), (eS.translateY = eS.y)
		let eT = (e) => e,
			eP = {},
			eC = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
		function eM(e, t) {
			let i = !1,
				n = !0,
				r = { delta: 0, timestamp: 0, isProcessing: !1 },
				s = () => (i = !0),
				o = eC.reduce(
					(e, i) => (
						(e[i] = (function (e, t) {
							let i = new Set(),
								n = new Set(),
								r = !1,
								s = !1,
								o = new WeakSet(),
								a = { delta: 0, timestamp: 0, isProcessing: !1 },
								l = 0
							function u(t) {
								o.has(t) && (d.schedule(t), e()), l++, t(a)
							}
							let d = {
								schedule: (e, t = !1, s = !1) => {
									let a = s && r ? i : n
									return t && o.add(e), a.has(e) || a.add(e), e
								},
								cancel: (e) => {
									n.delete(e), o.delete(e)
								},
								process: (e) => {
									if (((a = e), r)) {
										s = !0
										return
									}
									;(r = !0),
										([i, n] = [n, i]),
										i.forEach(u),
										t,
										(l = 0),
										i.clear(),
										(r = !1),
										s && ((s = !1), d.process(e))
								},
							}
							return d
						})(s, t ? i : void 0)),
						e
					),
					{},
				),
				{
					setup: a,
					read: l,
					resolveKeyframes: u,
					preUpdate: d,
					update: c,
					preRender: h,
					render: p,
					postRender: m,
				} = o,
				f = () => {
					let s = eP.useManualTiming ? r.timestamp : performance.now()
					;(i = !1),
						eP.useManualTiming || (r.delta = n ? 1e3 / 60 : Math.max(Math.min(s - r.timestamp, 40), 1)),
						(r.timestamp = s),
						(r.isProcessing = !0),
						a.process(r),
						l.process(r),
						u.process(r),
						d.process(r),
						c.process(r),
						h.process(r),
						p.process(r),
						m.process(r),
						(r.isProcessing = !1),
						i && t && ((n = !1), e(f))
				}
			return {
				schedule: eC.reduce((t, s) => {
					let a = o[s]
					return (
						(t[s] = (t, s = !1, o = !1) => (
							!i && ((i = !0), (n = !0), r.isProcessing || e(f)), a.schedule(t, s, o)
						)),
						t
					)
				}, {}),
				cancel: (e) => {
					for (let t = 0; t < eC.length; t++) o[eC[t]].cancel(e)
				},
				state: r,
				steps: o,
			}
		}
		let {
				schedule: eA,
				cancel: ej,
				state: eE,
				steps: eR,
			} = eM("u" > typeof requestAnimationFrame ? requestAnimationFrame : eT, !0),
			eV = new Set(),
			eN = !1,
			eD = !1,
			eI = !1
		function eL() {
			if (eD) {
				let e = Array.from(eV).filter((e) => e.needsMeasurement),
					t = new Set(e.map((e) => e.element)),
					i = new Map()
				t.forEach((e) => {
					let t,
						n =
							((t = []),
							ek.forEach((i) => {
								let n = e.getValue(i)
								void 0 !== n && (t.push([i, n.get()]), n.set(+!!i.startsWith("scale")))
							}),
							t)
					n.length && (i.set(e, n), e.render())
				}),
					e.forEach((e) => e.measureInitialState()),
					t.forEach((e) => {
						e.render()
						let t = i.get(e)
						t &&
							t.forEach(([t, i]) => {
								e.getValue(t)?.set(i)
							})
					}),
					e.forEach((e) => e.measureEndState()),
					e.forEach((e) => {
						void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY)
					})
			}
			;(eD = !1), (eN = !1), eV.forEach((e) => e.complete(eI)), eV.clear()
		}
		function eF() {
			eV.forEach((e) => {
				e.readKeyframes(), e.needsMeasurement && (eD = !0)
			})
		}
		class eO {
			constructor(e, t, i, n, r, s = !1) {
				;(this.state = "pending"),
					(this.isAsync = !1),
					(this.needsMeasurement = !1),
					(this.unresolvedKeyframes = [...e]),
					(this.onComplete = t),
					(this.name = i),
					(this.motionValue = n),
					(this.element = r),
					(this.isAsync = s)
			}
			scheduleResolve() {
				;(this.state = "scheduled"),
					this.isAsync
						? (eV.add(this), eN || ((eN = !0), eA.read(eF), eA.resolveKeyframes(eL)))
						: (this.readKeyframes(), this.complete())
			}
			readKeyframes() {
				let { unresolvedKeyframes: e, name: t, element: i, motionValue: n } = this
				if (null === e[0]) {
					let r = n?.get(),
						s = e[e.length - 1]
					if (void 0 !== r) e[0] = r
					else if (i && t) {
						let n = i.readValue(t, s)
						null != n && (e[0] = n)
					}
					void 0 === e[0] && (e[0] = s), n && void 0 === r && n.set(e[0])
				}
				for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1])
			}
			setFinalKeyframe() {}
			measureInitialState() {}
			renderEndStyles() {}
			measureEndState() {}
			complete(e = !1) {
				;(this.state = "complete"),
					this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
					eV.delete(this)
			}
			cancel() {
				"scheduled" === this.state && (eV.delete(this), (this.state = "pending"))
			}
			resume() {
				"pending" === this.state && this.scheduleResolve()
			}
		}
		function eB(e, t) {
			let i = W(e)
			return i !== B && (i = I), i.getAnimatableNone ? i.getAnimatableNone(t) : void 0
		}
		let ez = new Set(["auto", "none", "0"])
		class eU extends eO {
			constructor(e, t, i, n, r) {
				super(e, t, i, n, r, !0)
			}
			readKeyframes() {
				let { unresolvedKeyframes: e, element: t, name: i } = this
				if (!t || !t.current) return
				super.readKeyframes()
				for (let i = 0; i < e.length; i++) {
					let n = e[i]
					if ("string" == typeof n && eo((n = n.trim()))) {
						let r = (function e(t, i, n = 1) {
							ei(
								n <= 4,
								`Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,
								"max-css-var-depth",
							)
							let [r, s] = (function (e) {
								let t = eu.exec(e)
								if (!t) return [,]
								let [, i, n, r] = t
								return [`--${i ?? n}`, r]
							})(t)
							if (!r) return
							let o = window.getComputedStyle(i).getPropertyValue(r)
							if (o) {
								let e = o.trim()
								return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e) ? parseFloat(e) : e
							}
							return eo(s) ? e(s, i, n + 1) : s
						})(n, t.current)
						void 0 !== r && (e[i] = r), i === e.length - 1 && (this.finalKeyframe = n)
					}
				}
				if ((this.resolveNoneKeyframes(), !_.has(i) || 2 !== e.length)) return
				let [n, r] = e,
					s = J(n),
					o = J(r)
				if (el(n) !== el(r) && eS[i]) {
					this.needsMeasurement = !0
					return
				}
				if (s !== o)
					if (eb(s) && eb(o))
						for (let t = 0; t < e.length; t++) {
							let i = e[t]
							"string" == typeof i && (e[t] = parseFloat(i))
						}
					else eS[i] && (this.needsMeasurement = !0)
			}
			resolveNoneKeyframes() {
				let { unresolvedKeyframes: e, name: t } = this,
					i = []
				for (let t = 0; t < e.length; t++)
					(null === e[t] ||
						(function (e) {
							if ("number" == typeof e) return 0 === e
							if (null === e) return !0
							return "none" === e || "0" === e || /^0[^.\s]+$/u.test(e)
						})(e[t])) &&
						i.push(t)
				i.length &&
					(function (e, t, i) {
						let n,
							r = 0
						for (; r < e.length && !n; ) {
							let t = e[r]
							"string" == typeof t && !ez.has(t) && R(t).values.length && (n = e[r]), r++
						}
						if (n && i) for (let r of t) e[r] = eB(i, n)
					})(e, i, t)
			}
			measureInitialState() {
				let { element: e, unresolvedKeyframes: t, name: i } = this
				if (!e || !e.current) return
				"height" === i && (this.suspendedScrollY = window.pageYOffset),
					(this.measuredOrigin = eS[i](e.measureViewportBox(), window.getComputedStyle(e.current))),
					(t[0] = this.measuredOrigin)
				let n = t[t.length - 1]
				void 0 !== n && e.getValue(i, n).jump(n, !1)
			}
			measureEndState() {
				let { element: e, name: t, unresolvedKeyframes: i } = this
				if (!e || !e.current) return
				let n = e.getValue(t)
				n && n.jump(this.measuredOrigin, !1)
				let r = i.length - 1,
					s = i[r]
				;(i[r] = eS[t](e.measureViewportBox(), window.getComputedStyle(e.current))),
					null !== s && void 0 === this.finalKeyframe && (this.finalKeyframe = s),
					this.removedTransforms?.length &&
						this.removedTransforms.forEach(([t, i]) => {
							e.getValue(t).set(i)
						}),
					this.resolveNoneKeyframes()
			}
		}
		function e$(e, t) {
			;-1 === e.indexOf(t) && e.push(t)
		}
		function eW(e, t) {
			let i = e.indexOf(t)
			i > -1 && e.splice(i, 1)
		}
		class eq {
			constructor() {
				this.subscriptions = []
			}
			add(e) {
				return e$(this.subscriptions, e), () => eW(this.subscriptions, e)
			}
			notify(e, t, i) {
				let n = this.subscriptions.length
				if (n)
					if (1 === n) this.subscriptions[0](e, t, i)
					else
						for (let r = 0; r < n; r++) {
							let n = this.subscriptions[r]
							n && n(e, t, i)
						}
			}
			getSize() {
				return this.subscriptions.length
			}
			clear() {
				this.subscriptions.length = 0
			}
		}
		let { schedule: eH } = eM(queueMicrotask, !1)
		function eY() {
			i = void 0
		}
		let eX = {
			now: () => (
				void 0 === i && eX.set(eE.isProcessing || eP.useManualTiming ? eE.timestamp : performance.now()), i
			),
			set: (e) => {
				;(i = e), queueMicrotask(eY)
			},
		}
		class eG {
			constructor(e, t = {}) {
				;(this.canTrackVelocity = null),
					(this.events = {}),
					(this.updateAndNotify = (e) => {
						let t = eX.now()
						if (
							(this.updatedAt !== t && this.setPrevFrameValue(),
							(this.prev = this.current),
							this.setCurrent(e),
							this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
						)
							for (let e of this.dependents) e.dirty()
					}),
					(this.hasAnimated = !1),
					this.setCurrent(e),
					(this.owner = t.owner)
			}
			setCurrent(e) {
				;(this.current = e),
					(this.updatedAt = eX.now()),
					null === this.canTrackVelocity &&
						void 0 !== e &&
						(this.canTrackVelocity = !isNaN(parseFloat(this.current)))
			}
			setPrevFrameValue(e = this.current) {
				;(this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt)
			}
			onChange(e) {
				return this.on("change", e)
			}
			on(e, t) {
				this.events[e] || (this.events[e] = new eq())
				let i = this.events[e].add(t)
				return "change" === e
					? () => {
							i(),
								eA.read(() => {
									this.events.change.getSize() || this.stop()
								})
						}
					: i
			}
			clearListeners() {
				for (let e in this.events) this.events[e].clear()
			}
			attach(e, t) {
				;(this.passiveEffect = e), (this.stopPassiveEffect = t)
			}
			set(e) {
				this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e)
			}
			setWithVelocity(e, t, i) {
				this.set(t), (this.prev = void 0), (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt - i)
			}
			jump(e, t = !0) {
				this.updateAndNotify(e),
					(this.prev = e),
					(this.prevUpdatedAt = this.prevFrameValue = void 0),
					t && this.stop(),
					this.stopPassiveEffect && this.stopPassiveEffect()
			}
			dirty() {
				this.events.change?.notify(this.current)
			}
			addDependent(e) {
				this.dependents || (this.dependents = new Set()), this.dependents.add(e)
			}
			removeDependent(e) {
				this.dependents && this.dependents.delete(e)
			}
			get() {
				return t && t.push(this), this.current
			}
			getPrevious() {
				return this.prev
			}
			getVelocity() {
				var e
				let t = eX.now()
				if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0
				let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30)
				return (e = parseFloat(this.current) - parseFloat(this.prevFrameValue)), i ? (1e3 / i) * e : 0
			}
			start(e) {
				return (
					this.stop(),
					new Promise((t) => {
						;(this.hasAnimated = !0),
							(this.animation = e(t)),
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
		function e_(e, t) {
			return new eG(e, t)
		}
		let eK = [...Z, C, I],
			eZ = { current: null },
			eJ = { current: !1 },
			eQ = "u" > typeof window,
			e0 = new WeakMap()
		function e1(e) {
			return null !== e && "object" == typeof e && "function" == typeof e.start
		}
		function e2(e) {
			return "string" == typeof e || Array.isArray(e)
		}
		let e5 = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
			e3 = ["initial", ...e5]
		function e6(e) {
			return e1(e.animate) || e3.some((t) => e2(e[t]))
		}
		function e4(e) {
			return !!(e6(e) || e.variants)
		}
		function e8(e) {
			let t = [{}, {}]
			return (
				e?.values.forEach((e, i) => {
					;(t[0][i] = e.get()), (t[1][i] = e.getVelocity())
				}),
				t
			)
		}
		function e9(e, t, i, n) {
			if ("function" == typeof t) {
				let [r, s] = e8(n)
				t = t(void 0 !== i ? i : e.custom, r, s)
			}
			if (("string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t)) {
				let [r, s] = e8(n)
				t = t(void 0 !== i ? i : e.custom, r, s)
			}
			return t
		}
		let e7 = [
				"AnimationStart",
				"AnimationComplete",
				"Update",
				"BeforeLayoutMeasure",
				"LayoutMeasure",
				"LayoutAnimationStart",
				"LayoutAnimationComplete",
			],
			te = {}
		class tt {
			scrapeMotionValuesFromProps(e, t, i) {
				return {}
			}
			constructor(
				{
					parent: e,
					props: t,
					presenceContext: i,
					reducedMotionConfig: n,
					blockInitialAnimation: r,
					visualState: s,
				},
				o = {},
			) {
				;(this.current = null),
					(this.children = new Set()),
					(this.isVariantNode = !1),
					(this.isControllingVariants = !1),
					(this.shouldReduceMotion = null),
					(this.values = new Map()),
					(this.KeyframeResolver = eO),
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
						let e = eX.now()
						this.renderScheduledAt < e && ((this.renderScheduledAt = e), eA.render(this.render, !1, !0))
					})
				const { latestValues: a, renderState: l } = s
				;(this.latestValues = a),
					(this.baseTarget = { ...a }),
					(this.initialValues = t.initial ? { ...a } : {}),
					(this.renderState = l),
					(this.parent = e),
					(this.props = t),
					(this.presenceContext = i),
					(this.depth = e ? e.depth + 1 : 0),
					(this.reducedMotionConfig = n),
					(this.options = o),
					(this.blockInitialAnimation = !!r),
					(this.isControllingVariants = e6(t)),
					(this.isVariantNode = e4(t)),
					this.isVariantNode && (this.variantChildren = new Set()),
					(this.manuallyAnimateOnMount = !!(e && e.current))
				const { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this)
				for (const e in d) {
					const t = d[e]
					void 0 !== a[e] && G(t) && t.set(a[e])
				}
			}
			mount(e) {
				;(this.current = e),
					e0.set(e, this),
					this.projection && !this.projection.instance && this.projection.mount(e),
					this.parent &&
						this.isVariantNode &&
						!this.isControllingVariants &&
						(this.removeFromVariantTree = this.parent.addVariantChild(this)),
					this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
					"never" === this.reducedMotionConfig
						? (this.shouldReduceMotion = !1)
						: "always" === this.reducedMotionConfig
							? (this.shouldReduceMotion = !0)
							: (eJ.current ||
									(function () {
										if (((eJ.current = !0), eQ))
											if (window.matchMedia) {
												let e = window.matchMedia("(prefers-reduced-motion)"),
													t = () => (eZ.current = e.matches)
												e.addEventListener("change", t), t()
											} else eZ.current = !1
									})(),
								(this.shouldReduceMotion = eZ.current)),
					this.parent?.addChild(this),
					this.update(this.props, this.presenceContext)
			}
			unmount() {
				for (let e in (this.projection && this.projection.unmount(),
				ej(this.notifyUpdate),
				ej(this.render),
				this.valueSubscriptions.forEach((e) => e()),
				this.valueSubscriptions.clear(),
				this.removeFromVariantTree && this.removeFromVariantTree(),
				this.parent?.removeChild(this),
				this.events))
					this.events[e].clear()
				for (let e in this.features) {
					let t = this.features[e]
					t && (t.unmount(), (t.isMounted = !1))
				}
				this.current = null
			}
			addChild(e) {
				this.children.add(e),
					this.enteringChildren ?? (this.enteringChildren = new Set()),
					this.enteringChildren.add(e)
			}
			removeChild(e) {
				this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e)
			}
			bindToMotionValue(e, t) {
				let i
				this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)()
				let n = s.has(e)
				n && this.onBindTransform && this.onBindTransform()
				let r = t.on("change", (t) => {
					;(this.latestValues[e] = t),
						this.props.onUpdate && eA.preRender(this.notifyUpdate),
						n && this.projection && (this.projection.isTransformDirty = !0),
						this.scheduleRender()
				})
				"u" > typeof window && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)),
					this.valueSubscriptions.set(e, () => {
						r(), i && i(), t.owner && t.stop()
					})
			}
			sortNodePosition(e) {
				return this.current && this.sortInstanceNodePosition && this.type === e.type
					? this.sortInstanceNodePosition(this.current, e.current)
					: 0
			}
			updateFeatures() {
				let e = "animation"
				for (e in te) {
					let t = te[e]
					if (!t) continue
					let { isEnabled: i, Feature: n } = t
					if (
						(!this.features[e] && n && i(this.props) && (this.features[e] = new n(this)), this.features[e])
					) {
						let t = this.features[e]
						t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0))
					}
				}
			}
			triggerBuild() {
				this.build(this.renderState, this.latestValues, this.props)
			}
			measureViewportBox() {
				return this.current ? this.measureInstanceViewportBox(this.current, this.props) : X()
			}
			getStaticValue(e) {
				return this.latestValues[e]
			}
			setStaticValue(e, t) {
				this.latestValues[e] = t
			}
			update(e, t) {
				;(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
					(this.prevProps = this.props),
					(this.props = e),
					(this.prevPresenceContext = this.presenceContext),
					(this.presenceContext = t)
				for (let t = 0; t < e7.length; t++) {
					let i = e7[t]
					this.propEventSubscriptions[i] &&
						(this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i])
					let n = e["on" + i]
					n && (this.propEventSubscriptions[i] = this.on(i, n))
				}
				;(this.prevMotionValues = (function (e, t, i) {
					for (let n in t) {
						let r = t[n],
							s = i[n]
						if (G(r)) e.addValue(n, r)
						else if (G(s)) e.addValue(n, e_(r, { owner: e }))
						else if (s !== r)
							if (e.hasValue(n)) {
								let t = e.getValue(n)
								!0 === t.liveStyle ? t.jump(r) : t.hasAnimated || t.set(r)
							} else {
								let t = e.getStaticValue(n)
								e.addValue(n, e_(void 0 !== t ? t : r, { owner: e }))
							}
					}
					for (let n in i) void 0 === t[n] && e.removeValue(n)
					return t
				})(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues)),
					this.handleChildMotionValue && this.handleChildMotionValue()
			}
			getProps() {
				return this.props
			}
			getVariant(e) {
				return this.props.variants ? this.props.variants[e] : void 0
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
			addVariantChild(e) {
				let t = this.getClosestVariantNode()
				if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
			}
			addValue(e, t) {
				let i = this.values.get(e)
				t !== i &&
					(i && this.removeValue(e),
					this.bindToMotionValue(e, t),
					this.values.set(e, t),
					(this.latestValues[e] = t.get()))
			}
			removeValue(e) {
				this.values.delete(e)
				let t = this.valueSubscriptions.get(e)
				t && (t(), this.valueSubscriptions.delete(e)),
					delete this.latestValues[e],
					this.removeValueFromRenderState(e, this.renderState)
			}
			hasValue(e) {
				return this.values.has(e)
			}
			getValue(e, t) {
				if (this.props.values && this.props.values[e]) return this.props.values[e]
				let i = this.values.get(e)
				return (
					void 0 === i &&
						void 0 !== t &&
						((i = e_(null === t ? void 0 : t, { owner: this })), this.addValue(e, i)),
					i
				)
			}
			readValue(e, t) {
				let i =
					void 0 === this.latestValues[e] && this.current
						? (this.getBaseTargetFromProps(this.props, e) ??
							this.readValueFromInstance(this.current, e, this.options))
						: this.latestValues[e]
				if (null != i) {
					let n, r
					if (
						"string" == typeof i &&
						((n = i), /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n) || ((r = i), /^0[^.\s]+$/u.test(r)))
					)
						i = parseFloat(i)
					else {
						let n
						;(n = i), !eK.find(K(n)) && I.test(t) && (i = eB(e, t))
					}
					this.setBaseTarget(e, G(i) ? i.get() : i)
				}
				return G(i) ? i.get() : i
			}
			setBaseTarget(e, t) {
				this.baseTarget[e] = t
			}
			getBaseTarget(e) {
				let t,
					{ initial: i } = this.props
				if ("string" == typeof i || "object" == typeof i) {
					let n = e9(this.props, i, this.presenceContext?.custom)
					n && (t = n[e])
				}
				if (i && void 0 !== t) return t
				let n = this.getBaseTargetFromProps(this.props, e)
				return void 0 === n || G(n)
					? void 0 !== this.initialValues[e] && void 0 === t
						? void 0
						: this.baseTarget[e]
					: n
			}
			on(e, t) {
				return this.events[e] || (this.events[e] = new eq()), this.events[e].add(t)
			}
			notify(e, ...t) {
				this.events[e] && this.events[e].notify(...t)
			}
			scheduleRenderMicrotask() {
				eH.render(this.render)
			}
		}
		class ti extends tt {
			constructor() {
				super(...arguments), (this.KeyframeResolver = eU)
			}
			sortInstanceNodePosition(e, t) {
				return 2 & e.compareDocumentPosition(t) ? 1 : -1
			}
			getBaseTargetFromProps(e, t) {
				let i = e.style
				return i ? i[t] : void 0
			}
			removeValueFromRenderState(e, { vars: t, style: i }) {
				delete t[e], delete i[e]
			}
			handleChildMotionValue() {
				this.childSubscription && (this.childSubscription(), delete this.childSubscription)
				let { children: e } = this.props
				G(e) &&
					(this.childSubscription = e.on("change", (e) => {
						this.current && (this.current.textContent = `${e}`)
					}))
			}
		}
		function tn(e) {
			return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`)
		}
		let tr = (e, t) => (t && "number" == typeof e ? t.transform(e) : e),
			ts = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
			to = r.length
		function ta(e, t, i) {
			let { style: n, vars: o, transformOrigin: a } = e,
				l = !1,
				u = !1
			for (let e in t) {
				let i = t[e]
				if (s.has(e)) {
					l = !0
					continue
				}
				if (er(e)) {
					o[e] = i
					continue
				}
				{
					let t = tr(i, U[e])
					e.startsWith("origin") ? ((u = !0), (a[e] = t)) : (n[e] = t)
				}
			}
			if (
				(!t.transform &&
					(l || i
						? (n.transform = (function (e, t, i) {
								let n = "",
									s = !0
								for (let o = 0; o < to; o++) {
									let a = r[o],
										l = e[a]
									if (void 0 === l) continue
									let u = !0
									if ("number" == typeof l) u = l === +!!a.startsWith("scale")
									else {
										let e = parseFloat(l)
										u = a.startsWith("scale") ? 1 === e : 0 === e
									}
									if (!u || i) {
										let e = tr(l, U[a])
										if (!u) {
											s = !1
											let t = ts[a] || a
											n += `${t}(${e}) `
										}
										i && (t[a] = e)
									}
								}
								return (n = n.trim()), i ? (n = i(t, s ? "" : n)) : s && (n = "none"), n
							})(t, e.transform, i))
						: n.transform && (n.transform = "none")),
				u)
			) {
				let { originX: e = "50%", originY: t = "50%", originZ: i = 0 } = a
				n.transformOrigin = `${e} ${t} ${i}`
			}
		}
		let tl = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
			tu = { offset: "strokeDashoffset", array: "strokeDasharray" },
			td = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"]
		function tc(
			e,
			{ attrX: t, attrY: i, attrScale: n, pathLength: r, pathSpacing: s = 1, pathOffset: o = 0, ...a },
			l,
			u,
			d,
		) {
			if ((ta(e, a, u), l)) {
				e.style.viewBox && (e.attrs.viewBox = e.style.viewBox)
				return
			}
			;(e.attrs = e.style), (e.style = {})
			let { attrs: c, style: h } = e
			for (let e of (c.transform && ((h.transform = c.transform), delete c.transform),
			(h.transform || c.transformOrigin) &&
				((h.transformOrigin = c.transformOrigin ?? "50% 50%"), delete c.transformOrigin),
			h.transform && ((h.transformBox = d?.transformBox ?? "fill-box"), delete c.transformBox),
			td))
				void 0 !== c[e] && ((h[e] = c[e]), delete c[e])
			void 0 !== t && (c.x = t),
				void 0 !== i && (c.y = i),
				void 0 !== n && (c.scale = n),
				void 0 !== r &&
					(function (e, t, i = 1, n = 0, r = !0) {
						e.pathLength = 1
						let s = r ? tl : tu
						;(e[s.offset] = `${-n}`), (e[s.array] = `${t} ${i}`)
					})(c, r, s, o, !1)
		}
		let th = new Set([
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
			tp = (e) => "string" == typeof e && "svg" === e.toLowerCase()
		function tm(e, { style: t, vars: i }, n, r) {
			let s,
				o = e.style
			for (s in t) o[s] = t[s]
			for (s in (r?.applyProjectionStyles(o, n), i)) o.setProperty(s, i[s])
		}
		function tf(e, t) {
			return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100
		}
		let tg = {
				correct: (e, t) => {
					if (!t.target) return e
					if ("string" == typeof e)
						if (!w.test(e)) return e
						else e = parseFloat(e)
					let i = tf(e, t.target.x),
						n = tf(e, t.target.y)
					return `${i}% ${n}%`
				},
			},
			ty = (e, t, i) => e + (t - e) * i,
			tv = {
				borderRadius: {
					...tg,
					applyTo: [
						"borderTopLeftRadius",
						"borderTopRightRadius",
						"borderBottomLeftRadius",
						"borderBottomRightRadius",
					],
				},
				borderTopLeftRadius: tg,
				borderTopRightRadius: tg,
				borderBottomLeftRadius: tg,
				borderBottomRightRadius: tg,
				boxShadow: {
					correct: (e, { treeScale: t, projectionDelta: i }) => {
						let n = I.parse(e)
						if (n.length > 5) return e
						let r = I.createTransformer(e),
							s = +("number" != typeof n[0]),
							o = i.x.scale * t.x,
							a = i.y.scale * t.y
						;(n[0 + s] /= o), (n[1 + s] /= a)
						let l = ty(o, a, 0.5)
						return (
							"number" == typeof n[2 + s] && (n[2 + s] /= l),
							"number" == typeof n[3 + s] && (n[3 + s] /= l),
							r(n)
						)
					},
				},
			}
		function tx(e, { layout: t, layoutId: i }) {
			return s.has(e) || e.startsWith("origin") || ((t || void 0 !== i) && (!!tv[e] || "opacity" === e))
		}
		function tb(e, t, i) {
			let n = e.style,
				r = t?.style,
				s = {}
			if (!n) return s
			for (let t in n)
				(G(n[t]) || (r && G(r[t])) || tx(t, e) || i?.getValue(t)?.liveStyle !== void 0) && (s[t] = n[t])
			return s
		}
		function tw(e, t, i) {
			let n = tb(e, t, i)
			for (let i in e)
				(G(e[i]) || G(t[i])) &&
					(n[-1 !== r.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = e[i])
			return n
		}
		class tk extends ti {
			constructor() {
				super(...arguments), (this.type = "svg"), (this.isSVGTag = !1), (this.measureInstanceViewportBox = X)
			}
			getBaseTargetFromProps(e, t) {
				return e[t]
			}
			readValueFromInstance(e, t) {
				if (s.has(t)) {
					let e = W(t)
					return (e && e.default) || 0
				}
				return (t = th.has(t) ? t : tn(t)), e.getAttribute(t)
			}
			scrapeMotionValuesFromProps(e, t, i) {
				return tw(e, t, i)
			}
			build(e, t, i) {
				tc(e, t, this.isSVGTag, i.transformTemplate, i.style)
			}
			renderInstance(e, t, i, n) {
				for (let i in (tm(e, t, void 0, n), t.attrs)) e.setAttribute(th.has(i) ? i : tn(i), t.attrs[i])
			}
			mount(e) {
				;(this.isSVGTag = tp(e.tagName)), super.mount(e)
			}
		}
		function tS({ top: e, left: t, right: i, bottom: n }) {
			return { x: { min: t, max: i }, y: { min: e, max: n } }
		}
		function tT(e) {
			return void 0 === e || 1 === e
		}
		function tP({ scale: e, scaleX: t, scaleY: i }) {
			return !tT(e) || !tT(t) || !tT(i)
		}
		function tC(e) {
			return tP(e) || tM(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
		}
		function tM(e) {
			var t, i
			return ((t = e.x) && "0%" !== t) || ((i = e.y) && "0%" !== i)
		}
		function tA(e, t, i, n, r) {
			return void 0 !== r && (e = n + r * (e - n)), n + i * (e - n) + t
		}
		function tj(e, t = 0, i = 1, n, r) {
			;(e.min = tA(e.min, t, i, n, r)), (e.max = tA(e.max, t, i, n, r))
		}
		function tE(e, { x: t, y: i }) {
			tj(e.x, t.translate, t.scale, t.originPoint), tj(e.y, i.translate, i.scale, i.originPoint)
		}
		function tR(e, t) {
			;(e.min = e.min + t), (e.max = e.max + t)
		}
		function tV(e, t, i, n, r = 0.5) {
			let s = ty(e.min, e.max, r)
			tj(e, t, i, s, n)
		}
		function tN(e, t) {
			tV(e.x, t.x, t.scaleX, t.scale, t.originX), tV(e.y, t.y, t.scaleY, t.scale, t.originY)
		}
		function tD(e, t) {
			return tS(
				(function (e, t) {
					if (!t) return e
					let i = t({ x: e.left, y: e.top }),
						n = t({ x: e.right, y: e.bottom })
					return { top: i.y, left: i.x, bottom: n.y, right: n.x }
				})(e.getBoundingClientRect(), t),
			)
		}
		class tI extends ti {
			constructor() {
				super(...arguments), (this.type = "html"), (this.renderInstance = tm)
			}
			readValueFromInstance(e, t) {
				if (s.has(t))
					return this.projection?.isProjecting
						? ey(t)
						: ((e, t) => {
								let { transform: i = "none" } = getComputedStyle(e)
								return ev(i, t)
							})(e, t)
				{
					let i = window.getComputedStyle(e),
						n = (er(t) ? i.getPropertyValue(t) : i[t]) || 0
					return "string" == typeof n ? n.trim() : n
				}
			}
			measureInstanceViewportBox(e, { transformPagePoint: t }) {
				return tD(e, t)
			}
			build(e, t, i) {
				ta(e, t, i.transformTemplate)
			}
			scrapeMotionValuesFromProps(e, t, i) {
				return tb(e, t, i)
			}
		}
		var tL = e.i(10008)
		let tF = [
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
		function tO(e) {
			if ("string" != typeof e || e.includes("-"));
			else if (tF.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0
			return !1
		}
		var tB = e.i(8026)
		let tz = (0, tL.createContext)({})
		e.s(["LayoutGroupContext", () => tz], 5482)
		let tU = (0, tL.createContext)({ strict: !1 }),
			t$ = (0, tL.createContext)({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: "never" })
		e.s(["MotionConfigContext", () => t$], 42614)
		let tW = (0, tL.createContext)({})
		function tq(e) {
			return Array.isArray(e) ? e.join(" ") : e
		}
		let tH = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} })
		function tY(e, t, i) {
			for (let n in t) G(t[n]) || tx(n, i) || (e[n] = t[n])
		}
		let tX = () => ({ ...tH(), attrs: {} }),
			tG = new Set([
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
		function t_(e) {
			return (
				e.startsWith("while") ||
				(e.startsWith("drag") && "draggable" !== e) ||
				e.startsWith("layout") ||
				e.startsWith("onTap") ||
				e.startsWith("onPan") ||
				e.startsWith("onLayout") ||
				tG.has(e)
			)
		}
		let tK = (e) => !t_(e)
		try {
			;(Q = e.r(27686).default), "function" == typeof Q && (tK = (e) => (e.startsWith("on") ? !t_(e) : Q(e)))
		} catch {}
		function tZ(e) {
			return G(e) ? e.get() : e
		}
		let tJ = (0, tL.createContext)(null)
		function tQ(e) {
			let t = (0, tL.useRef)(null)
			return null === t.current && (t.current = e()), t.current
		}
		e.s(["PresenceContext", () => tJ], 13502), e.s(["useConstant", () => tQ], 21798)
		let t0 = (e) => (t, i) => {
				let n = (0, tL.useContext)(tW),
					r = (0, tL.useContext)(tJ),
					s = () =>
						(function ({ scrapeMotionValuesFromProps: e, createRenderState: t }, i, n, r) {
							return {
								latestValues: (function (e, t, i, n) {
									let r = {},
										s = n(e, {})
									for (let e in s) r[e] = tZ(s[e])
									let { initial: o, animate: a } = e,
										l = e6(e),
										u = e4(e)
									t &&
										u &&
										!l &&
										!1 !== e.inherit &&
										(void 0 === o && (o = t.initial), void 0 === a && (a = t.animate))
									let d = !!i && !1 === i.initial,
										c = (d = d || !1 === o) ? a : o
									if (c && "boolean" != typeof c && !e1(c)) {
										let t = Array.isArray(c) ? c : [c]
										for (let i = 0; i < t.length; i++) {
											let n = e9(e, t[i])
											if (n) {
												let { transitionEnd: e, transition: t, ...i } = n
												for (let e in i) {
													let t = i[e]
													if (Array.isArray(t)) {
														let e = d ? t.length - 1 : 0
														t = t[e]
													}
													null !== t && (r[e] = t)
												}
												for (let t in e) r[t] = e[t]
											}
										}
									}
									return r
								})(i, n, r, e),
								renderState: t(),
							}
						})(e, t, n, r)
				return i ? s() : tQ(s)
			},
			t1 = t0({ scrapeMotionValuesFromProps: tb, createRenderState: tH }),
			t2 = t0({ scrapeMotionValuesFromProps: tw, createRenderState: tX }),
			t5 = "u" > typeof window,
			t3 = {
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
			t6 = !1
		function t4() {
			return (
				!(function () {
					if (t6) return
					let e = {}
					for (let t in t3) e[t] = { isEnabled: (e) => t3[t].some((t) => !!e[t]) }
					;(te = e), (t6 = !0)
				})(),
				te
			)
		}
		let t8 = Symbol.for("motionComponentSymbol"),
			t9 = "data-" + tn("framerAppearId"),
			t7 = (0, tL.createContext)({})
		function ie(e) {
			return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
		}
		let it = t5 ? tL.useLayoutEffect : tL.useEffect
		function ii(e, { forwardMotionProps: t = !1, type: i } = {}, n, r) {
			n &&
				(function (e) {
					let t = t4()
					for (let i in e) t[i] = { ...t[i], ...e[i] }
					te = t
				})(n)
			let s = i ? "svg" === i : tO(e),
				o = s ? t2 : t1
			function a(i, n) {
				var a
				let l,
					u,
					d,
					c = {
						...(0, tL.useContext)(t$),
						...i,
						layoutId: (function ({ layoutId: e }) {
							let t = (0, tL.useContext)(tz).id
							return t && void 0 !== e ? t + "-" + e : e
						})(i),
					},
					{ isStatic: h } = c,
					p = (function (e) {
						let { initial: t, animate: i } = (function (e, t) {
							if (e6(e)) {
								let { initial: t, animate: i } = e
								return { initial: !1 === t || e2(t) ? t : void 0, animate: e2(i) ? i : void 0 }
							}
							return !1 !== e.inherit ? t : {}
						})(e, (0, tL.useContext)(tW))
						return (0, tL.useMemo)(() => ({ initial: t, animate: i }), [tq(t), tq(i)])
					})(i),
					m = o(i, h)
				if (!h && t5) {
					;(0, tL.useContext)(tU).strict
					let t = (function (e) {
						let { drag: t, layout: i } = t4()
						if (!t && !i) return {}
						let n = { ...t, ...i }
						return {
							MeasureLayout: t?.isEnabled(e) || i?.isEnabled(e) ? n.MeasureLayout : void 0,
							ProjectionNode: n.ProjectionNode,
						}
					})(c)
					;(l = t.MeasureLayout),
						(p.visualElement = (function (e, t, i, n, r, s) {
							let { visualElement: o } = (0, tL.useContext)(tW),
								a = (0, tL.useContext)(tU),
								l = (0, tL.useContext)(tJ),
								u = (0, tL.useContext)(t$).reducedMotion,
								d = (0, tL.useRef)(null),
								c = (0, tL.useRef)(!1)
							;(n = n || a.renderer),
								!d.current &&
									n &&
									((d.current = n(e, {
										visualState: t,
										parent: o,
										props: i,
										presenceContext: l,
										blockInitialAnimation: !!l && !1 === l.initial,
										reducedMotionConfig: u,
										isSVG: s,
									})),
									c.current && d.current && (d.current.manuallyAnimateOnMount = !0))
							let h = d.current,
								p = (0, tL.useContext)(t7)
							h &&
								!h.projection &&
								r &&
								("html" === h.type || "svg" === h.type) &&
								(function (e, t, i, n) {
									let {
										layoutId: r,
										layout: s,
										drag: o,
										dragConstraints: a,
										layoutScroll: l,
										layoutRoot: u,
										layoutCrossfade: d,
									} = t
									;(e.projection = new i(
										e.latestValues,
										t["data-framer-portal-id"]
											? void 0
											: (function e(t) {
													if (t)
														return !1 !== t.options.allowProjection
															? t.projection
															: e(t.parent)
												})(e.parent),
									)),
										e.projection.setOptions({
											layoutId: r,
											layout: s,
											alwaysMeasureLayout: !!o || (a && ie(a)),
											visualElement: e,
											animationType: "string" == typeof s ? s : "both",
											initialPromotionConfig: n,
											crossfade: d,
											layoutScroll: l,
											layoutRoot: u,
										})
								})(d.current, i, r, p)
							let m = (0, tL.useRef)(!1)
							;(0, tL.useInsertionEffect)(() => {
								h && m.current && h.update(i, l)
							})
							let f = i[t9],
								g = (0, tL.useRef)(
									!!f &&
										!window.MotionHandoffIsComplete?.(f) &&
										window.MotionHasOptimisedAnimation?.(f),
								)
							return (
								it(() => {
									;(c.current = !0),
										h &&
											((m.current = !0),
											(window.MotionIsMounted = !0),
											h.updateFeatures(),
											h.scheduleRenderMicrotask(),
											g.current && h.animationState && h.animationState.animateChanges())
								}),
								(0, tL.useEffect)(() => {
									h &&
										(!g.current && h.animationState && h.animationState.animateChanges(),
										g.current &&
											(queueMicrotask(() => {
												window.MotionHandoffMarkAsComplete?.(f)
											}),
											(g.current = !1)),
										(h.enteringChildren = void 0))
								}),
								h
							)
						})(e, m, c, r, t.ProjectionNode, s))
				}
				return (0, tB.jsxs)(tW.Provider, {
					value: p,
					children: [
						l && p.visualElement ? (0, tB.jsx)(l, { visualElement: p.visualElement, ...c }) : null,
						(function (e, t, i, { latestValues: n }, r, s = !1, o) {
							let a = (
									(o ?? tO(e))
										? function (e, t, i, n) {
												let r = (0, tL.useMemo)(() => {
													let i = tX()
													return (
														tc(i, t, tp(n), e.transformTemplate, e.style),
														{ ...i.attrs, style: { ...i.style } }
													)
												}, [t])
												if (e.style) {
													let t = {}
													tY(t, e.style, e), (r.style = { ...t, ...r.style })
												}
												return r
											}
										: function (e, t) {
												let i,
													n,
													r = {},
													s =
														((i = e.style || {}),
														tY((n = {}), i, e),
														Object.assign(
															n,
															(function ({ transformTemplate: e }, t) {
																return (0, tL.useMemo)(() => {
																	let i = tH()
																	return (
																		ta(i, t, e), Object.assign({}, i.vars, i.style)
																	)
																}, [t])
															})(e, t),
														),
														n)
												return (
													e.drag &&
														!1 !== e.dragListener &&
														((r.draggable = !1),
														(s.userSelect =
															s.WebkitUserSelect =
															s.WebkitTouchCallout =
																"none"),
														(s.touchAction =
															!0 === e.drag
																? "none"
																: `pan-${"x" === e.drag ? "y" : "x"}`)),
													void 0 === e.tabIndex &&
														(e.onTap || e.onTapStart || e.whileTap) &&
														(r.tabIndex = 0),
													(r.style = s),
													r
												)
											}
								)(t, n, r, e),
								l = (function (e, t, i) {
									let n = {}
									for (let r in e)
										("values" !== r || "object" != typeof e.values) &&
											(tK(r) ||
												(!0 === i && t_(r)) ||
												(!t && !t_(r)) ||
												(e.draggable && r.startsWith("onDrag"))) &&
											(n[r] = e[r])
									return n
								})(t, "string" == typeof e, s),
								u = e !== tL.Fragment ? { ...l, ...a, ref: i } : {},
								{ children: d } = t,
								c = (0, tL.useMemo)(() => (G(d) ? d.get() : d), [d])
							return (0, tL.createElement)(e, { ...u, children: c })
						})(
							e,
							i,
							((a = p.visualElement),
							(u = (0, tL.useRef)(n)),
							(0, tL.useInsertionEffect)(() => {
								u.current = n
							}),
							(d = (0, tL.useRef)(null)),
							(0, tL.useCallback)(
								(e) => {
									e && m.onMount?.(e), a && (e ? a.mount(e) : a.unmount())
									let t = u.current
									if ("function" == typeof t)
										if (e) {
											let i = t(e)
											"function" == typeof i && (d.current = i)
										} else d.current ? (d.current(), (d.current = null)) : t(e)
									else t && (t.current = e)
								},
								[a],
							)),
							m,
							h,
							t,
							s,
						),
					],
				})
			}
			a.displayName = `motion.${"string" == typeof e ? e : `create(${e.displayName ?? e.name ?? ""})`}`
			let l = (0, tL.forwardRef)(a)
			return (l[t8] = e), l
		}
		e.s(["useIsomorphicLayoutEffect", () => it], 49109)
		class ir {
			constructor(e) {
				;(this.isMounted = !1), (this.node = e)
			}
			update() {}
		}
		function is(e, t, i) {
			let n = e.getProps()
			return e9(n, t, void 0 !== i ? i : n.custom, e)
		}
		function io(e, t) {
			return e?.[t] ?? e?.default ?? e
		}
		let ia = (e) => Array.isArray(e)
		function il(e, t) {
			let i = e.getValue("willChange")
			if (G(i) && i.add) return i.add(t)
			if (!i && eP.WillChange) {
				let i = new eP.WillChange("auto")
				e.addValue("willChange", i), i.add(t)
			}
		}
		let iu = (e) => 1e3 * e,
			id = (e, t) => (i) => t(e(i)),
			ic = (...e) => e.reduce(id),
			ih = { layout: 0, mainThread: 0, waapi: 0 }
		function ip(e, t, i) {
			return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
				? e + (t - e) * 6 * i
				: i < 0.5
					? t
					: i < 2 / 3
						? e + (t - e) * (2 / 3 - i) * 6
						: e
		}
		function im(e, t) {
			return (i) => (i > 0 ? t : e)
		}
		let ig = (e, t, i) => {
				let n = e * e,
					r = i * (t * t - n) + n
				return r < 0 ? 0 : Math.sqrt(r)
			},
			iy = [y, g, P]
		function iv(e) {
			let t = iy.find((t) => t.test(e))
			if (
				(et(
					!!t,
					`'${e}' is not an animatable color. Use the equivalent color code instead.`,
					"color-not-animatable",
				),
				!t)
			)
				return !1
			let i = t.parse(e)
			return (
				t === P &&
					(i = (function ({ hue: e, saturation: t, lightness: i, alpha: n }) {
						;(e /= 360), (i /= 100)
						let r = 0,
							s = 0,
							o = 0
						if ((t /= 100)) {
							let n = i < 0.5 ? i * (1 + t) : i + t - i * t,
								a = 2 * i - n
							;(r = ip(a, n, e + 1 / 3)), (s = ip(a, n, e)), (o = ip(a, n, e - 1 / 3))
						} else r = s = o = i
						return {
							red: Math.round(255 * r),
							green: Math.round(255 * s),
							blue: Math.round(255 * o),
							alpha: n,
						}
					})(i)),
				i
			)
		}
		let ix = (e, t) => {
				let i = iv(e),
					n = iv(t)
				if (!i || !n) return im(e, t)
				let r = { ...i }
				return (e) => (
					(r.red = ig(i.red, n.red, e)),
					(r.green = ig(i.green, n.green, e)),
					(r.blue = ig(i.blue, n.blue, e)),
					(r.alpha = ty(i.alpha, n.alpha, e)),
					g.transform(r)
				)
			},
			ib = new Set(["none", "hidden"])
		function iw(e, t) {
			return (i) => ty(e, t, i)
		}
		function ik(e) {
			return "number" == typeof e
				? iw
				: "string" == typeof e
					? eo(e)
						? im
						: C.test(e)
							? ix
							: iP
					: Array.isArray(e)
						? iS
						: "object" == typeof e
							? C.test(e)
								? ix
								: iT
							: im
		}
		function iS(e, t) {
			let i = [...e],
				n = i.length,
				r = e.map((e, i) => ik(e)(e, t[i]))
			return (e) => {
				for (let t = 0; t < n; t++) i[t] = r[t](e)
				return i
			}
		}
		function iT(e, t) {
			let i = { ...e, ...t },
				n = {}
			for (let r in i) void 0 !== e[r] && void 0 !== t[r] && (n[r] = ik(e[r])(e[r], t[r]))
			return (e) => {
				for (let t in n) i[t] = n[t](e)
				return i
			}
		}
		let iP = (e, t) => {
			let i = I.createTransformer(t),
				n = R(e),
				r = R(t)
			if (
				!(
					n.indexes.var.length === r.indexes.var.length &&
					n.indexes.color.length === r.indexes.color.length &&
					n.indexes.number.length >= r.indexes.number.length
				)
			)
				return (
					et(
						!0,
						`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
						"complex-values-different",
					),
					im(e, t)
				)
			if ((ib.has(e) && !r.values.length) || (ib.has(t) && !n.values.length))
				return ib.has(e) ? (i) => (i <= 0 ? e : t) : (i) => (i >= 1 ? t : e)
			return ic(
				iS(
					(function (e, t) {
						let i = [],
							n = { color: 0, var: 0, number: 0 }
						for (let r = 0; r < t.values.length; r++) {
							let s = t.types[r],
								o = e.indexes[s][n[s]],
								a = e.values[o] ?? 0
							;(i[r] = a), n[s]++
						}
						return i
					})(n, r),
					r.values,
				),
				i,
			)
		}
		function iC(e, t, i) {
			return "number" == typeof e && "number" == typeof t && "number" == typeof i ? ty(e, t, i) : ik(e)(e, t)
		}
		let iM = (e) => {
				let t = ({ timestamp: t }) => e(t)
				return {
					start: (e = !0) => eA.update(t, e),
					stop: () => ej(t),
					now: () => (eE.isProcessing ? eE.timestamp : eX.now()),
				}
			},
			iA = (e, t, i = 10) => {
				let n = "",
					r = Math.max(Math.round(t / i), 2)
				for (let t = 0; t < r; t++) n += Math.round(1e4 * e(t / (r - 1))) / 1e4 + ", "
				return `linear(${n.substring(0, n.length - 2)})`
			}
		function ij(e) {
			let t = 0,
				i = e.next(t)
			for (; !i.done && t < 2e4; ) (t += 50), (i = e.next(t))
			return t >= 2e4 ? 1 / 0 : t
		}
		function iE(e, t, i) {
			var n, r
			let s = Math.max(t - 5, 0)
			return (n = i - e(s)), (r = t - s) ? (1e3 / r) * n : 0
		}
		let iR = 0.01,
			iV = 2,
			iN = 0.005,
			iD = 0.5
		function iI(e, t) {
			return e * Math.sqrt(1 - t * t)
		}
		let iL = ["duration", "bounce"],
			iF = ["stiffness", "damping", "mass"]
		function iO(e, t) {
			return t.some((t) => void 0 !== e[t])
		}
		function iB(e = 0.3, t = 0.3) {
			let i,
				n = "object" != typeof e ? { visualDuration: e, keyframes: [0, 1], bounce: t } : e,
				{ restSpeed: r, restDelta: s } = n,
				a = n.keyframes[0],
				l = n.keyframes[n.keyframes.length - 1],
				u = { done: !1, value: a },
				{
					stiffness: d,
					damping: c,
					mass: h,
					duration: p,
					velocity: m,
					isResolvedFromDuration: f,
				} = (function (e) {
					let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e }
					if (!iO(e, iF) && iO(e, iL))
						if (e.visualDuration) {
							let i = (2 * Math.PI) / (1.2 * e.visualDuration),
								n = i * i,
								r = 2 * o(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(n)
							t = { ...t, mass: 1, stiffness: n, damping: r }
						} else {
							let i = (function ({ duration: e = 800, bounce: t = 0.3, velocity: i = 0, mass: n = 1 }) {
								let r, s
								et(e <= iu(10), "Spring duration must be 10 seconds or less", "spring-duration-limit")
								let a = 1 - t
								;(a = o(0.05, 1, a)),
									(e = o(0.01, 10, e / 1e3)),
									a < 1
										? ((r = (t) => {
												let n = t * a,
													r = n * e
												return 0.001 - ((n - i) / iI(t, a)) * Math.exp(-r)
											}),
											(s = (t) => {
												let n = t * a * e,
													s = Math.pow(a, 2) * Math.pow(t, 2) * e,
													o = Math.exp(-n),
													l = iI(Math.pow(t, 2), a)
												return ((n * i + i - s) * o * (-r(t) + 0.001 > 0 ? -1 : 1)) / l
											}))
										: ((r = (t) => -0.001 + Math.exp(-t * e) * ((t - i) * e + 1)),
											(s = (t) => e * e * (i - t) * Math.exp(-t * e)))
								let l = (function (e, t, i) {
									let n = i
									for (let i = 1; i < 12; i++) n -= e(n) / t(n)
									return n
								})(r, s, 5 / e)
								if (((e = iu(e)), isNaN(l))) return { stiffness: 100, damping: 10, duration: e }
								{
									let t = Math.pow(l, 2) * n
									return { stiffness: t, damping: 2 * a * Math.sqrt(n * t), duration: e }
								}
							})(e)
							;(t = { ...t, ...i, mass: 1 }).isResolvedFromDuration = !0
						}
					return t
				})({ ...n, velocity: -((n.velocity || 0) / 1e3) }),
				g = m || 0,
				y = c / (2 * Math.sqrt(d * h)),
				v = l - a,
				x = Math.sqrt(d / h) / 1e3,
				b = 5 > Math.abs(v)
			if ((r || (r = b ? iR : iV), s || (s = b ? iN : iD), y < 1)) {
				let e = iI(x, y)
				i = (t) => l - Math.exp(-y * x * t) * (((g + y * x * v) / e) * Math.sin(e * t) + v * Math.cos(e * t))
			} else if (1 === y) i = (e) => l - Math.exp(-x * e) * (v + (g + x * v) * e)
			else {
				let e = x * Math.sqrt(y * y - 1)
				i = (t) => {
					let i = Math.exp(-y * x * t),
						n = Math.min(e * t, 300)
					return l - (i * ((g + y * x * v) * Math.sinh(n) + e * v * Math.cosh(n))) / e
				}
			}
			let w = {
				calculatedDuration: (f && p) || null,
				next: (e) => {
					let t = i(e)
					if (f) u.done = e >= p
					else {
						let n = 0 === e ? g : 0
						y < 1 && (n = 0 === e ? iu(g) : iE(i, e, t))
						let o = Math.abs(l - t) <= s
						u.done = Math.abs(n) <= r && o
					}
					return (u.value = u.done ? l : t), u
				},
				toString: () => {
					let e = Math.min(ij(w), 2e4),
						t = iA((t) => w.next(e * t).value, e, 30)
					return e + "ms " + t
				},
				toTransition: () => {},
			}
			return w
		}
		function iz({
			keyframes: e,
			velocity: t = 0,
			power: i = 0.8,
			timeConstant: n = 325,
			bounceDamping: r = 10,
			bounceStiffness: s = 500,
			modifyTarget: o,
			min: a,
			max: l,
			restDelta: u = 0.5,
			restSpeed: d,
		}) {
			let c,
				h,
				p = e[0],
				m = { done: !1, value: p },
				f = i * t,
				g = p + f,
				y = void 0 === o ? g : o(g)
			y !== g && (f = y - p)
			let v = (e) => -f * Math.exp(-e / n),
				x = (e) => y + v(e),
				b = (e) => {
					let t = v(e),
						i = x(e)
					;(m.done = Math.abs(t) <= u), (m.value = m.done ? y : i)
				},
				w = (e) => {
					let t
					if (((t = m.value), (void 0 !== a && t < a) || (void 0 !== l && t > l))) {
						var i
						;(c = e),
							(h = iB({
								keyframes: [
									m.value,
									((i = m.value),
									void 0 === a ? l : void 0 === l || Math.abs(a - i) < Math.abs(l - i) ? a : l),
								],
								velocity: iE(x, e, m.value),
								damping: r,
								stiffness: s,
								restDelta: u,
								restSpeed: d,
							}))
					}
				}
			return (
				w(0),
				{
					calculatedDuration: null,
					next: (e) => {
						let t = !1
						return (h || void 0 !== c || ((t = !0), b(e), w(e)), void 0 !== c && e >= c)
							? h.next(e - c)
							: (t || b(e), m)
					},
				}
			)
		}
		iB.applyToOptions = (e) => {
			let t = (function (e, t = 100, i) {
				let n = i({ ...e, keyframes: [0, t] }),
					r = Math.min(ij(n), 2e4)
				return { type: "keyframes", ease: (e) => n.next(r * e).value / t, duration: r / 1e3 }
			})(e, 100, iB)
			return (e.ease = t.ease), (e.duration = iu(t.duration)), (e.type = "keyframes"), e
		}
		let iU = (e, t, i) => (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e
		function i$(e, t, i, n) {
			return e === t && i === n
				? eT
				: (r) =>
						0 === r || 1 === r
							? r
							: iU(
									(function (e, t, i, n, r) {
										let s,
											o,
											a = 0
										do (s = iU((o = t + (i - t) / 2), n, r) - e) > 0 ? (i = o) : (t = o)
										while (Math.abs(s) > 1e-7 && ++a < 12)
										return o
									})(r, 0, 1, e, i),
									t,
									n,
								)
		}
		let iW = i$(0.42, 0, 1, 1),
			iq = i$(0, 0, 0.58, 1),
			iH = i$(0.42, 0, 0.58, 1),
			iY = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
			iX = (e) => (t) => 1 - e(1 - t),
			iG = i$(0.33, 1.53, 0.69, 0.99),
			i_ = iX(iG),
			iK = iY(i_),
			iZ = (e) => ((e *= 2) < 1 ? 0.5 * i_(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
			iJ = (e) => 1 - Math.sin(Math.acos(e)),
			iQ = iX(iJ),
			i0 = iY(iJ),
			i1 = (e) => Array.isArray(e) && "number" == typeof e[0],
			i2 = {
				linear: eT,
				easeIn: iW,
				easeInOut: iH,
				easeOut: iq,
				circIn: iJ,
				circInOut: i0,
				circOut: iQ,
				backIn: i_,
				backInOut: iK,
				backOut: iG,
				anticipate: iZ,
			},
			i5 = (e) => {
				if (i1(e)) {
					ei(4 === e.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length")
					let [t, i, n, r] = e
					return i$(t, i, n, r)
				}
				return "string" == typeof e
					? (ei(void 0 !== i2[e], `Invalid easing type '${e}'`, "invalid-easing-type"), i2[e])
					: e
			},
			i3 = (e, t, i) => {
				let n = t - e
				return 0 === n ? 1 : (i - e) / n
			}
		function i6({ duration: e = 300, keyframes: t, times: i, ease: n = "easeInOut" }) {
			var r
			let s,
				a = Array.isArray(n) && "number" != typeof n[0] ? n.map(i5) : i5(n),
				l = { done: !1, value: t[0] },
				u = (function (e, t, { clamp: i = !0, ease: n, mixer: r } = {}) {
					let s = e.length
					if (
						(ei(s === t.length, "Both input and output ranges must be the same length", "range-length"),
						1 === s)
					)
						return () => t[0]
					if (2 === s && t[0] === t[1]) return () => t[1]
					let a = e[0] === e[1]
					e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()))
					let l = (function (e, t, i) {
							let n = [],
								r = i || eP.mix || iC,
								s = e.length - 1
							for (let i = 0; i < s; i++) {
								let s = r(e[i], e[i + 1])
								t && (s = ic(Array.isArray(t) ? t[i] || eT : t, s)), n.push(s)
							}
							return n
						})(t, n, r),
						u = l.length,
						d = (i) => {
							if (a && i < e[0]) return t[0]
							let n = 0
							if (u > 1) for (; n < e.length - 2 && !(i < e[n + 1]); n++);
							let r = i3(e[n], e[n + 1], i)
							return l[n](r)
						}
					return i ? (t) => d(o(e[0], e[s - 1], t)) : d
				})(
					((r =
						i && i.length === t.length
							? i
							: (!(function (e, t) {
									let i = e[e.length - 1]
									for (let n = 1; n <= t; n++) {
										let r = i3(0, t, n)
										e.push(ty(i, 1, r))
									}
								})((s = [0]), t.length - 1),
								s)),
					r.map((t) => t * e)),
					t,
					{ ease: Array.isArray(a) ? a : t.map(() => a || iH).splice(0, t.length - 1) },
				)
			return { calculatedDuration: e, next: (t) => ((l.value = u(t)), (l.done = t >= e), l) }
		}
		let i4 = (e) => null !== e
		function i8(e, { repeat: t, repeatType: i = "loop" }, n, r = 1) {
			let s = e.filter(i4),
				o = r < 0 || (t && "loop" !== i && t % 2 == 1) ? 0 : s.length - 1
			return o && void 0 !== n ? n : s[o]
		}
		let i9 = { decay: iz, inertia: iz, tween: i6, keyframes: i6, spring: iB }
		function i7(e) {
			"string" == typeof e.type && (e.type = i9[e.type])
		}
		class ne {
			constructor() {
				this.updateFinished()
			}
			get finished() {
				return this._finished
			}
			updateFinished() {
				this._finished = new Promise((e) => {
					this.resolve = e
				})
			}
			notifyFinished() {
				this.resolve()
			}
			then(e, t) {
				return this.finished.then(e, t)
			}
		}
		let nt = (e) => e / 100
		class ni extends ne {
			constructor(e) {
				super(),
					(this.state = "idle"),
					(this.startTime = null),
					(this.isStopped = !1),
					(this.currentTime = 0),
					(this.holdTime = null),
					(this.playbackSpeed = 1),
					(this.stop = () => {
						let { motionValue: e } = this.options
						e && e.updatedAt !== eX.now() && this.tick(eX.now()),
							(this.isStopped = !0),
							"idle" !== this.state && (this.teardown(), this.options.onStop?.())
					}),
					ih.mainThread++,
					(this.options = e),
					this.initAnimation(),
					this.play(),
					!1 === e.autoplay && this.pause()
			}
			initAnimation() {
				let { options: e } = this
				i7(e)
				let { type: t = i6, repeat: i = 0, repeatDelay: n = 0, repeatType: r, velocity: s = 0 } = e,
					{ keyframes: o } = e,
					a = t || i6
				a !== i6 && "number" != typeof o[0] && ((this.mixKeyframes = ic(nt, iC(o[0], o[1]))), (o = [0, 100]))
				let l = a({ ...e, keyframes: o })
				"mirror" === r && (this.mirroredGenerator = a({ ...e, keyframes: [...o].reverse(), velocity: -s })),
					null === l.calculatedDuration && (l.calculatedDuration = ij(l))
				let { calculatedDuration: u } = l
				;(this.calculatedDuration = u),
					(this.resolvedDuration = u + n),
					(this.totalDuration = this.resolvedDuration * (i + 1) - n),
					(this.generator = l)
			}
			updateTime(e) {
				let t = Math.round(e - this.startTime) * this.playbackSpeed
				null !== this.holdTime ? (this.currentTime = this.holdTime) : (this.currentTime = t)
			}
			tick(e, t = !1) {
				let {
					generator: i,
					totalDuration: n,
					mixKeyframes: r,
					mirroredGenerator: s,
					resolvedDuration: a,
					calculatedDuration: l,
				} = this
				if (null === this.startTime) return i.next(0)
				let {
					delay: u = 0,
					keyframes: d,
					repeat: c,
					repeatType: h,
					repeatDelay: p,
					type: m,
					onUpdate: f,
					finalKeyframe: g,
				} = this.options
				this.speed > 0
					? (this.startTime = Math.min(this.startTime, e))
					: this.speed < 0 && (this.startTime = Math.min(e - n / this.speed, this.startTime)),
					t ? (this.currentTime = e) : this.updateTime(e)
				let y = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
					v = this.playbackSpeed >= 0 ? y < 0 : y > n
				;(this.currentTime = Math.max(y, 0)),
					"finished" === this.state && null === this.holdTime && (this.currentTime = n)
				let x = this.currentTime,
					b = i
				if (c) {
					let e = Math.min(this.currentTime, n) / a,
						t = Math.floor(e),
						i = e % 1
					!i && e >= 1 && (i = 1),
						1 === i && t--,
						(t = Math.min(t, c + 1)) % 2 &&
							("reverse" === h ? ((i = 1 - i), p && (i -= p / a)) : "mirror" === h && (b = s)),
						(x = o(0, 1, i) * a)
				}
				let w = v ? { done: !1, value: d[0] } : b.next(x)
				r && (w.value = r(w.value))
				let { done: k } = w
				v || null === l || (k = this.playbackSpeed >= 0 ? this.currentTime >= n : this.currentTime <= 0)
				let S = null === this.holdTime && ("finished" === this.state || ("running" === this.state && k))
				return (
					S && m !== iz && (w.value = i8(d, this.options, g, this.speed)),
					f && f(w.value),
					S && this.finish(),
					w
				)
			}
			then(e, t) {
				return this.finished.then(e, t)
			}
			get duration() {
				return this.calculatedDuration / 1e3
			}
			get iterationDuration() {
				let { delay: e = 0 } = this.options || {}
				return this.duration + e / 1e3
			}
			get time() {
				return this.currentTime / 1e3
			}
			set time(e) {
				;(e = iu(e)),
					(this.currentTime = e),
					null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed
						? (this.holdTime = e)
						: this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed),
					this.driver?.start(!1)
			}
			get speed() {
				return this.playbackSpeed
			}
			set speed(e) {
				this.updateTime(eX.now())
				let t = this.playbackSpeed !== e
				;(this.playbackSpeed = e), t && (this.time = this.currentTime / 1e3)
			}
			play() {
				if (this.isStopped) return
				let { driver: e = iM, startTime: t } = this.options
				this.driver || (this.driver = e((e) => this.tick(e))), this.options.onPlay?.()
				let i = this.driver.now()
				"finished" === this.state
					? (this.updateFinished(), (this.startTime = i))
					: null !== this.holdTime
						? (this.startTime = i - this.holdTime)
						: this.startTime || (this.startTime = t ?? i),
					"finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration),
					(this.holdTime = null),
					(this.state = "running"),
					this.driver.start()
			}
			pause() {
				;(this.state = "paused"), this.updateTime(eX.now()), (this.holdTime = this.currentTime)
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
				;(this.state = "idle"), this.stopDriver(), (this.startTime = this.holdTime = null), ih.mainThread--
			}
			stopDriver() {
				this.driver && (this.driver.stop(), (this.driver = void 0))
			}
			sample(e) {
				return (this.startTime = 0), this.tick(e, !0)
			}
			attachTimeline(e) {
				return (
					this.options.allowFlatten &&
						((this.options.type = "keyframes"), (this.options.ease = "linear"), this.initAnimation()),
					this.driver?.stop(),
					e.observe(this)
				)
			}
		}
		function nn(e) {
			let t
			return () => (void 0 === t && (t = e()), t)
		}
		let nr = nn(() => void 0 !== window.ScrollTimeline),
			ns = {},
			no =
				((n = nn(() => {
					try {
						document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" })
					} catch (e) {
						return !1
					}
					return !0
				})),
				() => ns.linearEasing ?? n()),
			na = ([e, t, i, n]) => `cubic-bezier(${e}, ${t}, ${i}, ${n})`,
			nl = {
				linear: "linear",
				ease: "ease",
				easeIn: "ease-in",
				easeOut: "ease-out",
				easeInOut: "ease-in-out",
				circIn: na([0, 0.65, 0.55, 1]),
				circOut: na([0.55, 0, 1, 0.45]),
				backIn: na([0.31, 0.01, 0.66, -0.59]),
				backOut: na([0.33, 1.53, 0.69, 0.99]),
			}
		function nu(e) {
			return "function" == typeof e && "applyToOptions" in e
		}
		class nd extends ne {
			constructor(e) {
				if ((super(), (this.finishedTime = null), (this.isStopped = !1), (this.manualStartTime = null), !e))
					return
				const {
					element: t,
					name: i,
					keyframes: n,
					pseudoElement: r,
					allowFlatten: s = !1,
					finalKeyframe: o,
					onComplete: a,
				} = e
				;(this.isPseudoElement = !!r),
					(this.allowFlatten = s),
					(this.options = e),
					ei("string" != typeof e.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring")
				const l = (function ({ type: e, ...t }) {
					return nu(e) && no()
						? e.applyToOptions(t)
						: (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t)
				})(e)
				;(this.animation = (function (
					e,
					t,
					i,
					{
						delay: n = 0,
						duration: r = 300,
						repeat: s = 0,
						repeatType: o = "loop",
						ease: a = "easeOut",
						times: l,
					} = {},
					u,
				) {
					let d = { [t]: i }
					l && (d.offset = l)
					let c = (function e(t, i) {
						if (t)
							return "function" == typeof t
								? no()
									? iA(t, i)
									: "ease-out"
								: i1(t)
									? na(t)
									: Array.isArray(t)
										? t.map((t) => e(t, i) || nl.easeOut)
										: nl[t]
					})(a, r)
					Array.isArray(c) && (d.easing = c)
					let h = {
						delay: n,
						duration: r,
						easing: Array.isArray(c) ? "linear" : c,
						fill: "both",
						iterations: s + 1,
						direction: "reverse" === o ? "alternate" : "normal",
					}
					u && (h.pseudoElement = u)
					let p = e.animate(d, h)
					return p
				})(t, i, n, l, r)),
					!1 === l.autoplay && this.animation.pause(),
					(this.animation.onfinish = () => {
						if (((this.finishedTime = this.time), !r)) {
							let e = i8(n, this.options, o, this.speed)
							this.updateMotionValue
								? this.updateMotionValue(e)
								: i.startsWith("--")
									? t.style.setProperty(i, e)
									: (t.style[i] = e),
								this.animation.cancel()
						}
						a?.(), this.notifyFinished()
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
				} catch (e) {}
			}
			stop() {
				if (this.isStopped) return
				this.isStopped = !0
				let { state: e } = this
				"idle" !== e &&
					"finished" !== e &&
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
				let { delay: e = 0 } = this.options || {}
				return this.duration + e / 1e3
			}
			get time() {
				return (Number(this.animation.currentTime) || 0) / 1e3
			}
			set time(e) {
				;(this.manualStartTime = null), (this.finishedTime = null), (this.animation.currentTime = iu(e))
			}
			get speed() {
				return this.animation.playbackRate
			}
			set speed(e) {
				e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e)
			}
			get state() {
				return null !== this.finishedTime ? "finished" : this.animation.playState
			}
			get startTime() {
				return this.manualStartTime ?? Number(this.animation.startTime)
			}
			set startTime(e) {
				this.manualStartTime = this.animation.startTime = e
			}
			attachTimeline({ timeline: e, observe: t }) {
				return (this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }),
				(this.animation.onfinish = null),
				e && nr())
					? ((this.animation.timeline = e), eT)
					: t(this)
			}
		}
		let nc = { anticipate: iZ, backInOut: iK, circInOut: i0 }
		class nh extends nd {
			constructor(e) {
				!(function (e) {
					"string" == typeof e.ease && e.ease in nc && (e.ease = nc[e.ease])
				})(e),
					i7(e),
					super(e),
					void 0 !== e.startTime && (this.startTime = e.startTime),
					(this.options = e)
			}
			updateMotionValue(e) {
				let { motionValue: t, onUpdate: i, onComplete: n, element: r, ...s } = this.options
				if (!t) return
				if (void 0 !== e) return void t.set(e)
				let a = new ni({ ...s, autoplay: !1 }),
					l = Math.max(10, eX.now() - this.startTime),
					u = o(0, 10, l - 10)
				t.setWithVelocity(a.sample(Math.max(0, l - u)).value, a.sample(l).value, u), a.stop()
			}
		}
		let np = (e, t) =>
			"zIndex" !== t &&
			!!(
				"number" == typeof e ||
				Array.isArray(e) ||
				("string" == typeof e && (I.test(e) || "0" === e) && !e.startsWith("url("))
			)
		function nm(e) {
			;(e.duration = 0), (e.type = "keyframes")
		}
		let nf = new Set(["opacity", "clipPath", "filter", "transform"]),
			ng = nn(() => Object.hasOwnProperty.call(Element.prototype, "animate"))
		class ny extends ne {
			constructor({
				autoplay: e = !0,
				delay: t = 0,
				type: i = "keyframes",
				repeat: n = 0,
				repeatDelay: r = 0,
				repeatType: s = "loop",
				keyframes: o,
				name: a,
				motionValue: l,
				element: u,
				...d
			}) {
				super(),
					(this.stop = () => {
						this._animation && (this._animation.stop(), this.stopTimeline?.()),
							this.keyframeResolver?.cancel()
					}),
					(this.createdAt = eX.now())
				const c = {
						autoplay: e,
						delay: t,
						type: i,
						repeat: n,
						repeatDelay: r,
						repeatType: s,
						name: a,
						motionValue: l,
						element: u,
						...d,
					},
					h = u?.KeyframeResolver || eO
				;(this.keyframeResolver = new h(o, (e, t, i) => this.onKeyframesResolved(e, t, c, !i), a, l, u)),
					this.keyframeResolver?.scheduleResolve()
			}
			onKeyframesResolved(e, t, i, n) {
				this.keyframeResolver = void 0
				let { name: r, type: s, velocity: o, delay: a, isHandoff: l, onUpdate: u } = i
				;(this.resolvedAt = eX.now()),
					!(function (e, t, i, n) {
						let r = e[0]
						if (null === r) return !1
						if ("display" === t || "visibility" === t) return !0
						let s = e[e.length - 1],
							o = np(r, t),
							a = np(s, t)
						return (
							et(
								o === a,
								`You are trying to animate ${t} from "${r}" to "${s}". "${o ? s : r}" is not an animatable value.`,
								"value-not-animatable",
							),
							!!o &&
								!!a &&
								((function (e) {
									let t = e[0]
									if (1 === e.length) return !0
									for (let i = 0; i < e.length; i++) if (e[i] !== t) return !0
								})(e) ||
									(("spring" === i || nu(i)) && n))
						)
					})(e, r, s, o) &&
						((eP.instantAnimations || !a) && u?.(i8(e, i, t)),
						(e[0] = e[e.length - 1]),
						nm(i),
						(i.repeat = 0))
				let d = {
						startTime: n
							? this.resolvedAt && this.resolvedAt - this.createdAt > 40
								? this.resolvedAt
								: this.createdAt
							: void 0,
						finalKeyframe: t,
						...i,
						keyframes: e,
					},
					c =
						!l &&
						(function (e) {
							let { motionValue: t, name: i, repeatDelay: n, repeatType: r, damping: s, type: o } = e
							if (!(t?.owner?.current instanceof HTMLElement)) return !1
							let { onUpdate: a, transformTemplate: l } = t.owner.getProps()
							return (
								ng() &&
								i &&
								nf.has(i) &&
								("transform" !== i || !l) &&
								!a &&
								!n &&
								"mirror" !== r &&
								0 !== s &&
								"inertia" !== o
							)
						})(d),
					h = d.motionValue?.owner?.current,
					p = c ? new nh({ ...d, element: h }) : new ni(d)
				p.finished
					.then(() => {
						this.notifyFinished()
					})
					.catch(eT),
					this.pendingTimeline &&
						((this.stopTimeline = p.attachTimeline(this.pendingTimeline)), (this.pendingTimeline = void 0)),
					(this._animation = p)
			}
			get finished() {
				return this._animation ? this.animation.finished : this._finished
			}
			then(e, t) {
				return this.finished.finally(e).then(() => {})
			}
			get animation() {
				return (
					this._animation || (this.keyframeResolver?.resume(), (eI = !0), eF(), eL(), (eI = !1)),
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
			set time(e) {
				this.animation.time = e
			}
			get speed() {
				return this.animation.speed
			}
			get state() {
				return this.animation.state
			}
			set speed(e) {
				this.animation.speed = e
			}
			get startTime() {
				return this.animation.startTime
			}
			attachTimeline(e) {
				return (
					this._animation
						? (this.stopTimeline = this.animation.attachTimeline(e))
						: (this.pendingTimeline = e),
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
		let nv = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
			nx = { type: "keyframes", duration: 0.8 },
			nb = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
			nw = (e) => null !== e,
			nk =
				(e, t, i, n = {}, r, o) =>
				(a) => {
					let l = io(n, e) || {},
						u = l.delay || n.delay || 0,
						{ elapsed: d = 0 } = n
					d -= iu(u)
					let c = {
						keyframes: Array.isArray(i) ? i : [null, i],
						ease: "easeOut",
						velocity: t.getVelocity(),
						...l,
						delay: -d,
						onUpdate: (e) => {
							t.set(e), l.onUpdate && l.onUpdate(e)
						},
						onComplete: () => {
							a(), l.onComplete && l.onComplete()
						},
						name: e,
						motionValue: t,
						element: o ? void 0 : r,
					}
					!(function ({
						when: e,
						delay: t,
						delayChildren: i,
						staggerChildren: n,
						staggerDirection: r,
						repeat: s,
						repeatType: o,
						repeatDelay: a,
						from: l,
						elapsed: u,
						...d
					}) {
						return !!Object.keys(d).length
					})(l) &&
						Object.assign(
							c,
							((e, { keyframes: t }) =>
								t.length > 2
									? nx
									: s.has(e)
										? e.startsWith("scale")
											? {
													type: "spring",
													stiffness: 550,
													damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
													restSpeed: 10,
												}
											: nv
										: nb)(e, c),
						),
						c.duration && (c.duration = iu(c.duration)),
						c.repeatDelay && (c.repeatDelay = iu(c.repeatDelay)),
						void 0 !== c.from && (c.keyframes[0] = c.from)
					let h = !1
					if (
						((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) || (nm(c), 0 === c.delay && (h = !0)),
						(eP.instantAnimations || eP.skipAnimations) && ((h = !0), nm(c), (c.delay = 0)),
						(c.allowFlatten = !l.type && !l.ease),
						h && !o && void 0 !== t.get())
					) {
						let e = (function (e, { repeat: t, repeatType: i = "loop" }, n) {
							let r = e.filter(nw),
								s = t && "loop" !== i && t % 2 == 1 ? 0 : r.length - 1
							return r[s]
						})(c.keyframes, l)
						if (void 0 !== e)
							return void eA.update(() => {
								c.onUpdate(e), c.onComplete()
							})
					}
					return l.isSync ? new ni(c) : new ny(c)
				}
		function nS(e, t, { delay: i = 0, transitionOverride: n, type: r } = {}) {
			let { transition: s = e.getDefaultTransition(), transitionEnd: o, ...a } = t,
				l = s?.reduceMotion
			n && (s = n)
			let u = [],
				d = r && e.animationState && e.animationState.getState()[r]
			for (let t in a) {
				let n = e.getValue(t, e.latestValues[t] ?? null),
					r = a[t]
				if (
					void 0 === r ||
					(d &&
						(function ({ protectedKeys: e, needsAnimating: t }, i) {
							let n = e.hasOwnProperty(i) && !0 !== t[i]
							return (t[i] = !1), n
						})(d, t))
				)
					continue
				let o = { delay: i, ...io(s || {}, t) },
					c = n.get()
				if (void 0 !== c && !n.isAnimating && !Array.isArray(r) && r === c && !o.velocity) continue
				let h = !1
				if (window.MotionHandoffAnimation) {
					let i = e.props[t9]
					if (i) {
						let e = window.MotionHandoffAnimation(i, t, eA)
						null !== e && ((o.startTime = e), (h = !0))
					}
				}
				il(e, t)
				let p = l ?? e.shouldReduceMotion
				n.start(nk(t, n, r, p && _.has(t) ? { type: !1 } : o, e, h))
				let m = n.animation
				m && u.push(m)
			}
			return (
				o &&
					Promise.all(u).then(() => {
						eA.update(() => {
							o &&
								(function (e, t) {
									let { transitionEnd: i = {}, transition: n = {}, ...r } = is(e, t) || {}
									for (let t in (r = { ...r, ...i })) {
										var s
										let i = ia((s = r[t])) ? s[s.length - 1] || 0 : s
										e.hasValue(t) ? e.getValue(t).set(i) : e.addValue(t, e_(i))
									}
								})(e, o)
						})
					}),
				u
			)
		}
		function nT(e, t, i, n = 0, r = 1) {
			let s = Array.from(e)
					.sort((e, t) => e.sortNodePosition(t))
					.indexOf(t),
				o = e.size,
				a = (o - 1) * n
			return "function" == typeof i ? i(s, o) : 1 === r ? s * n : a - s * n
		}
		function nP(e, t, i = {}) {
			let n = is(e, t, "exit" === i.type ? e.presenceContext?.custom : void 0),
				{ transition: r = e.getDefaultTransition() || {} } = n || {}
			i.transitionOverride && (r = i.transitionOverride)
			let s = n ? () => Promise.all(nS(e, n, i)) : () => Promise.resolve(),
				o =
					e.variantChildren && e.variantChildren.size
						? (n = 0) => {
								let { delayChildren: s = 0, staggerChildren: o, staggerDirection: a } = r
								return (function (e, t, i = 0, n = 0, r = 0, s = 1, o) {
									let a = []
									for (let l of e.variantChildren)
										l.notify("AnimationStart", t),
											a.push(
												nP(l, t, {
													...o,
													delay:
														i +
														("function" == typeof n ? 0 : n) +
														nT(e.variantChildren, l, n, r, s),
												}).then(() => l.notify("AnimationComplete", t)),
											)
									return Promise.all(a)
								})(e, t, n, s, o, a, i)
							}
						: () => Promise.resolve(),
				{ when: a } = r
			if (!a) return Promise.all([s(), o(i.delay)])
			{
				let [e, t] = "beforeChildren" === a ? [s, o] : [o, s]
				return e().then(() => t())
			}
		}
		let nC = e3.length
		function nM(e, t) {
			if (!Array.isArray(t)) return !1
			let i = t.length
			if (i !== e.length) return !1
			for (let n = 0; n < i; n++) if (t[n] !== e[n]) return !1
			return !0
		}
		let nA = [...e5].reverse(),
			nj = e5.length
		function nE(e = !1) {
			return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} }
		}
		function nR() {
			return {
				animate: nE(!0),
				whileInView: nE(),
				whileHover: nE(),
				whileTap: nE(),
				whileDrag: nE(),
				whileFocus: nE(),
				exit: nE(),
			}
		}
		let nV = 0
		function nN(e) {
			return [e("x"), e("y")]
		}
		let nD = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"])
		function nI(e) {
			return nD.has(e.tagName) || !0 === e.isContentEditable
		}
		function nL(e, t, i, n = { passive: !0 }) {
			return e.addEventListener(t, i, n), () => e.removeEventListener(t, i)
		}
		let nF = { x: !1, y: !1 }
		function nO(e) {
			return e.max - e.min
		}
		function nB(e, t, i, n = 0.5) {
			;(e.origin = n),
				(e.originPoint = ty(t.min, t.max, e.origin)),
				(e.scale = nO(i) / nO(t)),
				(e.translate = ty(i.min, i.max, e.origin) - e.originPoint),
				((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) && (e.scale = 1),
				((e.translate >= -0.01 && e.translate <= 0.01) || isNaN(e.translate)) && (e.translate = 0)
		}
		function nz(e, t, i, n) {
			nB(e.x, t.x, i.x, n ? n.originX : void 0), nB(e.y, t.y, i.y, n ? n.originY : void 0)
		}
		function nU(e, t, i) {
			;(e.min = i.min + t.min), (e.max = e.min + nO(t))
		}
		function n$(e, t, i) {
			;(e.min = t.min - i.min), (e.max = e.min + nO(t))
		}
		function nW(e, t, i) {
			n$(e.x, t.x, i.x), n$(e.y, t.y, i.y)
		}
		let nq = (e) => ("mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary)
		function nH(e) {
			return { point: { x: e.pageX, y: e.pageY } }
		}
		function nY(e, t, i, n) {
			return nL(e, t, (e) => nq(e) && i(e, nH(e)), n)
		}
		let nX = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
			nG = (e, t) => Math.abs(e - t),
			n_ = new Set(["auto", "scroll"])
		class nK {
			constructor(
				e,
				t,
				{
					transformPagePoint: i,
					contextWindow: n = window,
					dragSnapToOrigin: r = !1,
					distanceThreshold: s = 3,
					element: o,
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
					(this.onElementScroll = (e) => {
						this.handleScroll(e.target)
					}),
					(this.onWindowScroll = () => {
						this.handleScroll(window)
					}),
					(this.updatePoint = () => {
						var e, t
						if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
						let i = nQ(this.lastMoveEventInfo, this.history),
							n = null !== this.startEvent,
							r =
								((e = i.offset),
								(t = { x: 0, y: 0 }),
								Math.sqrt(nG(e.x, t.x) ** 2 + nG(e.y, t.y) ** 2) >= this.distanceThreshold)
						if (!n && !r) return
						let { point: s } = i,
							{ timestamp: o } = eE
						this.history.push({ ...s, timestamp: o })
						let { onStart: a, onMove: l } = this.handlers
						n || (a && a(this.lastMoveEvent, i), (this.startEvent = this.lastMoveEvent)),
							l && l(this.lastMoveEvent, i)
					}),
					(this.handlePointerMove = (e, t) => {
						;(this.lastMoveEvent = e),
							(this.lastMoveEventInfo = nZ(t, this.transformPagePoint)),
							eA.update(this.updatePoint, !0)
					}),
					(this.handlePointerUp = (e, t) => {
						this.end()
						let { onEnd: i, onSessionEnd: n, resumeAnimation: r } = this.handlers
						if (
							((this.dragSnapToOrigin || !this.startEvent) && r && r(),
							!(this.lastMoveEvent && this.lastMoveEventInfo))
						)
							return
						let s = nQ(
							"pointercancel" === e.type ? this.lastMoveEventInfo : nZ(t, this.transformPagePoint),
							this.history,
						)
						this.startEvent && i && i(e, s), n && n(e, s)
					}),
					!nq(e))
				)
					return
				;(this.dragSnapToOrigin = r),
					(this.handlers = t),
					(this.transformPagePoint = i),
					(this.distanceThreshold = s),
					(this.contextWindow = n || window)
				const a = nZ(nH(e), this.transformPagePoint),
					{ point: l } = a,
					{ timestamp: u } = eE
				this.history = [{ ...l, timestamp: u }]
				const { onSessionStart: d } = t
				d && d(e, nQ(a, this.history)),
					(this.removeListeners = ic(
						nY(this.contextWindow, "pointermove", this.handlePointerMove),
						nY(this.contextWindow, "pointerup", this.handlePointerUp),
						nY(this.contextWindow, "pointercancel", this.handlePointerUp),
					)),
					o && this.startScrollTracking(o)
			}
			startScrollTracking(e) {
				let t = e.parentElement
				for (; t; ) {
					let e = getComputedStyle(t)
					;(n_.has(e.overflowX) || n_.has(e.overflowY)) &&
						this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
						(t = t.parentElement)
				}
				this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
					window.addEventListener("scroll", this.onElementScroll, { capture: !0, passive: !0 }),
					window.addEventListener("scroll", this.onWindowScroll, { passive: !0 }),
					(this.removeScrollListeners = () => {
						window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }),
							window.removeEventListener("scroll", this.onWindowScroll)
					})
			}
			handleScroll(e) {
				let t = this.scrollPositions.get(e)
				if (!t) return
				let i = e === window,
					n = i ? { x: window.scrollX, y: window.scrollY } : { x: e.scrollLeft, y: e.scrollTop },
					r = { x: n.x - t.x, y: n.y - t.y }
				;(0 !== r.x || 0 !== r.y) &&
					(i
						? this.lastMoveEventInfo &&
							((this.lastMoveEventInfo.point.x += r.x), (this.lastMoveEventInfo.point.y += r.y))
						: this.history.length > 0 && ((this.history[0].x -= r.x), (this.history[0].y -= r.y)),
					this.scrollPositions.set(e, n),
					eA.update(this.updatePoint, !0))
			}
			updateHandlers(e) {
				this.handlers = e
			}
			end() {
				this.removeListeners && this.removeListeners(),
					this.removeScrollListeners && this.removeScrollListeners(),
					this.scrollPositions.clear(),
					ej(this.updatePoint)
			}
		}
		function nZ(e, t) {
			return t ? { point: t(e.point) } : e
		}
		function nJ(e, t) {
			return { x: e.x - t.x, y: e.y - t.y }
		}
		function nQ({ point: e }, t) {
			return {
				point: e,
				delta: nJ(e, n0(t)),
				offset: nJ(e, t[0]),
				velocity: (function (e, t) {
					if (e.length < 2) return { x: 0, y: 0 }
					let i = e.length - 1,
						n = null,
						r = n0(e)
					for (; i >= 0 && ((n = e[i]), !(r.timestamp - n.timestamp > iu(0.1))); ) i--
					if (!n) return { x: 0, y: 0 }
					let s = (r.timestamp - n.timestamp) / 1e3
					if (0 === s) return { x: 0, y: 0 }
					let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s }
					return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
				})(t, 0.1),
			}
		}
		function n0(e) {
			return e[e.length - 1]
		}
		function n1(e, t, i) {
			return { min: void 0 !== t ? e.min + t : void 0, max: void 0 !== i ? e.max + i - (e.max - e.min) : void 0 }
		}
		function n2(e, t) {
			let i = t.min - e.min,
				n = t.max - e.max
			return t.max - t.min < e.max - e.min && ([i, n] = [n, i]), { min: i, max: n }
		}
		function n5(e, t, i) {
			return { min: n3(e, t), max: n3(e, i) }
		}
		function n3(e, t) {
			return "number" == typeof e ? e : e[t] || 0
		}
		let n6 = new WeakMap()
		class n4 {
			constructor(e) {
				;(this.openDragLock = null),
					(this.isDragging = !1),
					(this.currentDirection = null),
					(this.originPoint = { x: 0, y: 0 }),
					(this.constraints = !1),
					(this.hasMutatedConstraints = !1),
					(this.elastic = X()),
					(this.latestPointerEvent = null),
					(this.latestPanInfo = null),
					(this.visualElement = e)
			}
			start(e, { snapToCursor: t = !1, distanceThreshold: i } = {}) {
				let { presenceContext: n } = this.visualElement
				if (n && !1 === n.isPresent) return
				let r = (e) => {
						t ? (this.stopAnimation(), this.snapToCursor(nH(e).point)) : this.pauseAnimation()
					},
					s = (e, t) => {
						this.stopAnimation()
						let { drag: i, dragPropagation: n, onDragStart: r } = this.getProps()
						if (
							i &&
							!n &&
							(this.openDragLock && this.openDragLock(),
							(this.openDragLock = (function (e) {
								if ("x" === e || "y" === e)
									if (nF[e]) return null
									else
										return (
											(nF[e] = !0),
											() => {
												nF[e] = !1
											}
										)
								return nF.x || nF.y
									? null
									: ((nF.x = nF.y = !0),
										() => {
											nF.x = nF.y = !1
										})
							})(i)),
							!this.openDragLock)
						)
							return
						;(this.latestPointerEvent = e),
							(this.latestPanInfo = t),
							(this.isDragging = !0),
							(this.currentDirection = null),
							this.resolveConstraints(),
							this.visualElement.projection &&
								((this.visualElement.projection.isAnimationBlocked = !0),
								(this.visualElement.projection.target = void 0)),
							nN((e) => {
								let t = this.getAxisMotionValue(e).get() || 0
								if (b.test(t)) {
									let { projection: i } = this.visualElement
									if (i && i.layout) {
										let n = i.layout.layoutBox[e]
										n && (t = nO(n) * (parseFloat(t) / 100))
									}
								}
								this.originPoint[e] = t
							}),
							r && eA.postRender(() => r(e, t)),
							il(this.visualElement, "transform")
						let { animationState: s } = this.visualElement
						s && s.setActive("whileDrag", !0)
					},
					o = (e, t) => {
						;(this.latestPointerEvent = e), (this.latestPanInfo = t)
						let {
							dragPropagation: i,
							dragDirectionLock: n,
							onDirectionLock: r,
							onDrag: s,
						} = this.getProps()
						if (!i && !this.openDragLock) return
						let { offset: o } = t
						if (n && null === this.currentDirection) {
							;(this.currentDirection = (function (e, t = 10) {
								let i = null
								return Math.abs(e.y) > t ? (i = "y") : Math.abs(e.x) > t && (i = "x"), i
							})(o)),
								null !== this.currentDirection && r && r(this.currentDirection)
							return
						}
						this.updateAxis("x", t.point, o),
							this.updateAxis("y", t.point, o),
							this.visualElement.render(),
							s && s(e, t)
					},
					a = (e, t) => {
						;(this.latestPointerEvent = e),
							(this.latestPanInfo = t),
							this.stop(e, t),
							(this.latestPointerEvent = null),
							(this.latestPanInfo = null)
					},
					l = () =>
						nN(
							(e) =>
								"paused" === this.getAnimationState(e) && this.getAxisMotionValue(e).animation?.play(),
						),
					{ dragSnapToOrigin: u } = this.getProps()
				this.panSession = new nK(
					e,
					{ onSessionStart: r, onStart: s, onMove: o, onSessionEnd: a, resumeAnimation: l },
					{
						transformPagePoint: this.visualElement.getTransformPagePoint(),
						dragSnapToOrigin: u,
						distanceThreshold: i,
						contextWindow: nX(this.visualElement),
						element: this.visualElement.current,
					},
				)
			}
			stop(e, t) {
				let i = e || this.latestPointerEvent,
					n = t || this.latestPanInfo,
					r = this.isDragging
				if ((this.cancel(), !r || !n || !i)) return
				let { velocity: s } = n
				this.startAnimation(s)
				let { onDragEnd: o } = this.getProps()
				o && eA.postRender(() => o(i, n))
			}
			cancel() {
				this.isDragging = !1
				let { projection: e, animationState: t } = this.visualElement
				e && (e.isAnimationBlocked = !1), this.endPanSession()
				let { dragPropagation: i } = this.getProps()
				!i && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
					t && t.setActive("whileDrag", !1)
			}
			endPanSession() {
				this.panSession && this.panSession.end(), (this.panSession = void 0)
			}
			updateAxis(e, t, i) {
				let { drag: n } = this.getProps()
				if (!i || !n8(e, n, this.currentDirection)) return
				let r = this.getAxisMotionValue(e),
					s = this.originPoint[e] + i[e]
				this.constraints &&
					this.constraints[e] &&
					(s = (function (e, { min: t, max: i }, n) {
						return (
							void 0 !== t && e < t
								? (e = n ? ty(t, e, n.min) : Math.max(e, t))
								: void 0 !== i && e > i && (e = n ? ty(i, e, n.max) : Math.min(e, i)),
							e
						)
					})(s, this.constraints[e], this.elastic[e])),
					r.set(s)
			}
			resolveConstraints() {
				let { dragConstraints: e, dragElastic: t } = this.getProps(),
					i =
						this.visualElement.projection && !this.visualElement.projection.layout
							? this.visualElement.projection.measure(!1)
							: this.visualElement.projection?.layout,
					n = this.constraints
				e && ie(e)
					? this.constraints || (this.constraints = this.resolveRefConstraints())
					: e && i
						? (this.constraints = (function (e, { top: t, left: i, bottom: n, right: r }) {
								return { x: n1(e.x, i, r), y: n1(e.y, t, n) }
							})(i.layoutBox, e))
						: (this.constraints = !1),
					(this.elastic = (function (e = 0.35) {
						return (
							!1 === e ? (e = 0) : !0 === e && (e = 0.35),
							{ x: n5(e, "left", "right"), y: n5(e, "top", "bottom") }
						)
					})(t)),
					n !== this.constraints &&
						i &&
						this.constraints &&
						!this.hasMutatedConstraints &&
						nN((e) => {
							var t, n
							let r
							!1 !== this.constraints &&
								this.getAxisMotionValue(e) &&
								(this.constraints[e] =
									((t = i.layoutBox[e]),
									(n = this.constraints[e]),
									(r = {}),
									void 0 !== n.min && (r.min = n.min - t.min),
									void 0 !== n.max && (r.max = n.max - t.min),
									r))
						})
			}
			resolveRefConstraints() {
				var e
				let { dragConstraints: t, onMeasureDragConstraints: i } = this.getProps()
				if (!t || !ie(t)) return !1
				let n = t.current
				ei(
					null !== n,
					"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
					"drag-constraints-ref",
				)
				let { projection: r } = this.visualElement
				if (!r || !r.layout) return !1
				let s = (function (e, t, i) {
						let n = tD(e, i),
							{ scroll: r } = t
						return r && (tR(n.x, r.offset.x), tR(n.y, r.offset.y)), n
					})(n, r.root, this.visualElement.getTransformPagePoint()),
					o = ((e = r.layout.layoutBox), { x: n2(e.x, s.x), y: n2(e.y, s.y) })
				if (i) {
					let e = i(
						(function ({ x: e, y: t }) {
							return { top: t.min, right: e.max, bottom: t.max, left: e.min }
						})(o),
					)
					;(this.hasMutatedConstraints = !!e), e && (o = tS(e))
				}
				return o
			}
			startAnimation(e) {
				let {
						drag: t,
						dragMomentum: i,
						dragElastic: n,
						dragTransition: r,
						dragSnapToOrigin: s,
						onDragTransitionEnd: o,
					} = this.getProps(),
					a = this.constraints || {}
				return Promise.all(
					nN((o) => {
						if (!n8(o, t, this.currentDirection)) return
						let l = (a && a[o]) || {}
						s && (l = { min: 0, max: 0 })
						let u = {
							type: "inertia",
							velocity: i ? e[o] : 0,
							bounceStiffness: n ? 200 : 1e6,
							bounceDamping: n ? 40 : 1e7,
							timeConstant: 750,
							restDelta: 1,
							restSpeed: 10,
							...r,
							...l,
						}
						return this.startAxisValueAnimation(o, u)
					}),
				).then(o)
			}
			startAxisValueAnimation(e, t) {
				let i = this.getAxisMotionValue(e)
				return il(this.visualElement, e), i.start(nk(e, i, 0, t, this.visualElement, !1))
			}
			stopAnimation() {
				nN((e) => this.getAxisMotionValue(e).stop())
			}
			pauseAnimation() {
				nN((e) => this.getAxisMotionValue(e).animation?.pause())
			}
			getAnimationState(e) {
				return this.getAxisMotionValue(e).animation?.state
			}
			getAxisMotionValue(e) {
				let t = `_drag${e.toUpperCase()}`,
					i = this.visualElement.getProps()
				return i[t] || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
			}
			snapToCursor(e) {
				nN((t) => {
					let { drag: i } = this.getProps()
					if (!n8(t, i, this.currentDirection)) return
					let { projection: n } = this.visualElement,
						r = this.getAxisMotionValue(t)
					if (n && n.layout) {
						let { min: i, max: s } = n.layout.layoutBox[t],
							o = r.get() || 0
						r.set(e[t] - ty(i, s, 0.5) + o)
					}
				})
			}
			scalePositionWithinConstraints() {
				if (!this.visualElement.current) return
				let { drag: e, dragConstraints: t } = this.getProps(),
					{ projection: i } = this.visualElement
				if (!ie(t) || !i || !this.constraints) return
				this.stopAnimation()
				let n = { x: 0, y: 0 }
				nN((e) => {
					let t = this.getAxisMotionValue(e)
					if (t && !1 !== this.constraints) {
						var i, r
						let s,
							a,
							l,
							u = t.get()
						n[e] =
							((i = { min: u, max: u }),
							(r = this.constraints[e]),
							(s = 0.5),
							(a = nO(i)),
							(l = nO(r)) > a
								? (s = i3(r.min, r.max - a, i.min))
								: a > l && (s = i3(i.min, i.max - l, r.min)),
							o(0, 1, s))
					}
				})
				let { transformTemplate: r } = this.visualElement.getProps()
				;(this.visualElement.current.style.transform = r ? r({}, "") : "none"),
					i.root && i.root.updateScroll(),
					i.updateLayout(),
					this.resolveConstraints(),
					nN((t) => {
						if (!n8(t, e, null)) return
						let i = this.getAxisMotionValue(t),
							{ min: r, max: s } = this.constraints[t]
						i.set(ty(r, s, n[t]))
					})
			}
			addListeners() {
				if (!this.visualElement.current) return
				n6.set(this.visualElement, this)
				let e = this.visualElement.current,
					t = nY(e, "pointerdown", (t) => {
						let { drag: i, dragListener: n = !0 } = this.getProps(),
							r = t.target,
							s = r !== e && nI(r)
						i && n && !s && this.start(t)
					}),
					i = () => {
						let { dragConstraints: e } = this.getProps()
						ie(e) && e.current && (this.constraints = this.resolveRefConstraints())
					},
					{ projection: n } = this.visualElement,
					r = n.addEventListener("measure", i)
				n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), eA.read(i)
				let s = nL(window, "resize", () => this.scalePositionWithinConstraints()),
					o = n.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t }) => {
						this.isDragging &&
							t &&
							(nN((t) => {
								let i = this.getAxisMotionValue(t)
								i && ((this.originPoint[t] += e[t].translate), i.set(i.get() + e[t].translate))
							}),
							this.visualElement.render())
					})
				return () => {
					s(), t(), r(), o && o()
				}
			}
			getProps() {
				let e = this.visualElement.getProps(),
					{
						drag: t = !1,
						dragDirectionLock: i = !1,
						dragPropagation: n = !1,
						dragConstraints: r = !1,
						dragElastic: s = 0.35,
						dragMomentum: o = !0,
					} = e
				return {
					...e,
					drag: t,
					dragDirectionLock: i,
					dragPropagation: n,
					dragConstraints: r,
					dragElastic: s,
					dragMomentum: o,
				}
			}
		}
		function n8(e, t, i) {
			return (!0 === t || t === e) && (null === i || i === e)
		}
		let n9 = (e) => (t, i) => {
				e && eA.postRender(() => e(t, i))
			},
			n7 = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
		var re = tL
		function rt(e = !0) {
			let t = (0, tL.useContext)(tJ)
			if (null === t) return [!0, null]
			let { isPresent: i, onExitComplete: n, register: r } = t,
				s = (0, tL.useId)()
			;(0, tL.useEffect)(() => {
				if (e) return r(s)
			}, [e])
			let o = (0, tL.useCallback)(() => e && n && n(s), [s, n, e])
			return !i && n ? [!1, o] : [!0]
		}
		e.s(["usePresence", () => rt], 87467)
		let ri = !1
		class rn extends re.Component {
			componentDidMount() {
				let { visualElement: e, layoutGroup: t, switchLayoutGroup: i, layoutId: n } = this.props,
					{ projection: r } = e
				r &&
					(t.group && t.group.add(r),
					i && i.register && n && i.register(r),
					ri && r.root.didUpdate(),
					r.addEventListener("animationComplete", () => {
						this.safeToRemove()
					}),
					r.setOptions({
						...r.options,
						layoutDependency: this.props.layoutDependency,
						onExitComplete: () => this.safeToRemove(),
					})),
					(n7.hasEverUpdated = !0)
			}
			getSnapshotBeforeUpdate(e) {
				let { layoutDependency: t, visualElement: i, drag: n, isPresent: r } = this.props,
					{ projection: s } = i
				return (
					s &&
						((s.isPresent = r),
						e.layoutDependency !== t && s.setOptions({ ...s.options, layoutDependency: t }),
						(ri = !0),
						n || e.layoutDependency !== t || void 0 === t || e.isPresent !== r
							? s.willUpdate()
							: this.safeToRemove(),
						e.isPresent !== r &&
							(r
								? s.promote()
								: s.relegate() ||
									eA.postRender(() => {
										let e = s.getStack()
										;(e && e.members.length) || this.safeToRemove()
									}))),
					null
				)
			}
			componentDidUpdate() {
				let { projection: e } = this.props.visualElement
				e &&
					(e.root.didUpdate(),
					eH.postRender(() => {
						!e.currentAnimation && e.isLead() && this.safeToRemove()
					}))
			}
			componentWillUnmount() {
				let { visualElement: e, layoutGroup: t, switchLayoutGroup: i } = this.props,
					{ projection: n } = e
				;(ri = !0),
					n &&
						(n.scheduleCheckAfterUnmount(),
						t && t.group && t.group.remove(n),
						i && i.deregister && i.deregister(n))
			}
			safeToRemove() {
				let { safeToRemove: e } = this.props
				e && e()
			}
			render() {
				return null
			}
		}
		function rr(e) {
			let [t, i] = rt(),
				n = (0, re.useContext)(tz)
			return (0, tB.jsx)(rn, {
				...e,
				layoutGroup: n,
				switchLayoutGroup: (0, re.useContext)(t7),
				isPresent: t,
				safeToRemove: i,
			})
		}
		function rs(e) {
			return "object" == typeof e && null !== e
		}
		function ro(e) {
			return rs(e) && "ownerSVGElement" in e
		}
		let ra = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
			rl = ra.length,
			ru = (e) => ("string" == typeof e ? parseFloat(e) : e),
			rd = (e) => "number" == typeof e || w.test(e)
		function rc(e, t) {
			return void 0 !== e[t] ? e[t] : e.borderRadius
		}
		let rh = rm(0, 0.5, iQ),
			rp = rm(0.5, 0.95, eT)
		function rm(e, t, i) {
			return (n) => (n < e ? 0 : n > t ? 1 : i(i3(e, t, n)))
		}
		function rf(e, t) {
			;(e.min = t.min), (e.max = t.max)
		}
		function rg(e, t) {
			rf(e.x, t.x), rf(e.y, t.y)
		}
		function ry(e, t) {
			;(e.translate = t.translate), (e.scale = t.scale), (e.originPoint = t.originPoint), (e.origin = t.origin)
		}
		function rv(e, t, i, n, r) {
			return (e -= t), (e = n + (1 / i) * (e - n)), void 0 !== r && (e = n + (1 / r) * (e - n)), e
		}
		function rx(e, t, [i, n, r], s, o) {
			!(function (e, t = 0, i = 1, n = 0.5, r, s = e, o = e) {
				if ((b.test(t) && ((t = parseFloat(t)), (t = ty(o.min, o.max, t / 100) - o.min)), "number" != typeof t))
					return
				let a = ty(s.min, s.max, n)
				e === s && (a -= t), (e.min = rv(e.min, t, i, a, r)), (e.max = rv(e.max, t, i, a, r))
			})(e, t[i], t[n], t[r], t.scale, s, o)
		}
		let rb = ["x", "scaleX", "originX"],
			rw = ["y", "scaleY", "originY"]
		function rk(e, t, i, n) {
			rx(e.x, t, rb, i ? i.x : void 0, n ? n.x : void 0), rx(e.y, t, rw, i ? i.y : void 0, n ? n.y : void 0)
		}
		function rS(e) {
			return 0 === e.translate && 1 === e.scale
		}
		function rT(e) {
			return rS(e.x) && rS(e.y)
		}
		function rP(e, t) {
			return e.min === t.min && e.max === t.max
		}
		function rC(e, t) {
			return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
		}
		function rM(e, t) {
			return rC(e.x, t.x) && rC(e.y, t.y)
		}
		function rA(e) {
			return nO(e.x) / nO(e.y)
		}
		function rj(e, t) {
			return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
		}
		class rE {
			constructor() {
				this.members = []
			}
			add(e) {
				e$(this.members, e), e.scheduleRender()
			}
			remove(e) {
				if ((eW(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)) {
					let e = this.members[this.members.length - 1]
					e && this.promote(e)
				}
			}
			relegate(e) {
				let t,
					i = this.members.findIndex((t) => e === t)
				if (0 === i) return !1
				for (let e = i; e >= 0; e--) {
					let i = this.members[e]
					if (!1 !== i.isPresent) {
						t = i
						break
					}
				}
				return !!t && (this.promote(t), !0)
			}
			promote(e, t) {
				let i = this.lead
				if (e !== i && ((this.prevLead = i), (this.lead = e), e.show(), i)) {
					i.instance && i.scheduleRender(), e.scheduleRender()
					let n = i.options.layoutDependency,
						r = e.options.layoutDependency
					;(void 0 === n || void 0 === r || n !== r) &&
						((e.resumeFrom = i),
						t && (e.resumeFrom.preserveOpacity = !0),
						i.snapshot &&
							((e.snapshot = i.snapshot),
							(e.snapshot.latestValues = i.animationValues || i.latestValues)),
						e.root && e.root.isUpdating && (e.isLayoutDirty = !0))
					let { crossfade: s } = e.options
					!1 === s && i.hide()
				}
			}
			exitAnimationComplete() {
				this.members.forEach((e) => {
					let { options: t, resumingFrom: i } = e
					t.onExitComplete && t.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
				})
			}
			scheduleRender() {
				this.members.forEach((e) => {
					e.instance && e.scheduleRender(!1)
				})
			}
			removeLeadSnapshot() {
				this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
			}
		}
		let rR = (e, t) => e.depth - t.depth
		class rV {
			constructor() {
				;(this.children = []), (this.isDirty = !1)
			}
			add(e) {
				e$(this.children, e), (this.isDirty = !0)
			}
			remove(e) {
				eW(this.children, e), (this.isDirty = !0)
			}
			forEach(e) {
				this.isDirty && this.children.sort(rR), (this.isDirty = !1), this.children.forEach(e)
			}
		}
		let rN = ["", "X", "Y", "Z"],
			rD = 0
		function rI(e, t, i, n) {
			let { latestValues: r } = t
			r[e] && ((i[e] = r[e]), t.setStaticValue(e, 0), n && (n[e] = 0))
		}
		function rL({
			attachResizeListener: e,
			defaultParent: t,
			measureScroll: i,
			checkIsScrollRoot: n,
			resetTransform: r,
		}) {
			return class {
				constructor(e = {}, i = t?.()) {
					;(this.id = rD++),
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
								this.nodes.forEach(rB),
								this.nodes.forEach(rY),
								this.nodes.forEach(rX),
								this.nodes.forEach(rz)
						}),
						(this.resolvedRelativeTargetAt = 0),
						(this.linkedParentVersion = 0),
						(this.hasProjected = !1),
						(this.isVisible = !0),
						(this.animationProgress = 0),
						(this.sharedNodes = new Map()),
						(this.latestValues = e),
						(this.root = i ? i.root || i : this),
						(this.path = i ? [...i.path, i] : []),
						(this.parent = i),
						(this.depth = i ? i.depth + 1 : 0)
					for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0
					this.root === this && (this.nodes = new rV())
				}
				addEventListener(e, t) {
					return (
						this.eventHandlers.has(e) || this.eventHandlers.set(e, new eq()),
						this.eventHandlers.get(e).add(t)
					)
				}
				notifyListeners(e, ...t) {
					let i = this.eventHandlers.get(e)
					i && i.notify(...t)
				}
				hasListeners(e) {
					return this.eventHandlers.has(e)
				}
				mount(t) {
					if (this.instance) return
					;(this.isSVG = ro(t) && !(ro(t) && "svg" === t.tagName)), (this.instance = t)
					let { layoutId: i, layout: n, visualElement: r } = this.options
					if (
						(r && !r.current && r.mount(t),
						this.root.nodes.add(this),
						this.parent && this.parent.children.add(this),
						this.root.hasTreeAnimated && (n || i) && (this.isLayoutDirty = !0),
						e)
					) {
						let i,
							n = 0,
							r = () => (this.root.updateBlockedByResize = !1)
						eA.read(() => {
							n = window.innerWidth
						}),
							e(t, () => {
								let e = window.innerWidth
								if (e !== n) {
									let t, s
									;(n = e),
										(this.root.updateBlockedByResize = !0),
										i && i(),
										(t = eX.now()),
										(s = ({ timestamp: e }) => {
											let i = e - t
											i >= 250 && (ej(s), r(i - 250))
										}),
										eA.setup(s, !0),
										(i = () => ej(s)),
										n7.hasAnimatedSinceResize &&
											((n7.hasAnimatedSinceResize = !1), this.nodes.forEach(rH))
								}
							})
					}
					i && this.root.registerSharedNode(i, this),
						!1 !== this.options.animate &&
							r &&
							(i || n) &&
							this.addEventListener(
								"didUpdate",
								({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: i, layout: n }) => {
									if (this.isTreeAnimationBlocked()) {
										;(this.target = void 0), (this.relativeTarget = void 0)
										return
									}
									let s = this.options.transition || r.getDefaultTransition() || rQ,
										{ onLayoutAnimationStart: o, onLayoutAnimationComplete: a } = r.getProps(),
										l = !this.targetLayout || !rM(this.targetLayout, n),
										u = !t && i
									if (
										this.options.layoutRoot ||
										this.resumeFrom ||
										u ||
										(t && (l || !this.currentAnimation))
									) {
										this.resumeFrom &&
											((this.resumingFrom = this.resumeFrom),
											(this.resumingFrom.resumingFrom = void 0))
										let t = { ...io(s, "layout"), onPlay: o, onComplete: a }
										;(r.shouldReduceMotion || this.options.layoutRoot) &&
											((t.delay = 0), (t.type = !1)),
											this.startAnimation(t),
											this.setAnimationOrigin(e, u)
									} else
										t || rH(this),
											this.isLead() &&
												this.options.onExitComplete &&
												this.options.onExitComplete()
									this.targetLayout = n
								},
							)
				}
				unmount() {
					this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this)
					let e = this.getStack()
					e && e.remove(this),
						this.parent && this.parent.children.delete(this),
						(this.instance = void 0),
						this.eventHandlers.clear(),
						ej(this.updateProjection)
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
						((this.isUpdating = !0), this.nodes && this.nodes.forEach(rG), this.animationId++)
				}
				getTransformTemplate() {
					let { visualElement: e } = this.options
					return e && e.getProps().transformTemplate
				}
				willUpdate(e = !0) {
					if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
						this.options.onExitComplete && this.options.onExitComplete()
						return
					}
					if (
						(window.MotionCancelOptimisedAnimation &&
							!this.hasCheckedOptimisedAppear &&
							(function e(t) {
								if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return
								let { visualElement: i } = t.options
								if (!i) return
								let n = i.props[t9]
								if (window.MotionHasOptimisedAnimation(n, "transform")) {
									let { layout: e, layoutId: i } = t.options
									window.MotionCancelOptimisedAnimation(n, "transform", eA, !(e || i))
								}
								let { parent: r } = t
								r && !r.hasCheckedOptimisedAppear && e(r)
							})(this),
						this.root.isUpdating || this.root.startUpdate(),
						this.isLayoutDirty)
					)
						return
					this.isLayoutDirty = !0
					for (let e = 0; e < this.path.length; e++) {
						let t = this.path[e]
						;(t.shouldResetTransform = !0),
							t.updateScroll("snapshot"),
							t.options.layoutRoot && t.willUpdate(!1)
					}
					let { layoutId: t, layout: i } = this.options
					if (void 0 === t && !i) return
					let n = this.getTransformTemplate()
					;(this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0),
						this.updateSnapshot(),
						e && this.notifyListeners("willUpdate")
				}
				update() {
					if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
						this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(r$)
						return
					}
					if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(rW)
					;(this.animationCommitId = this.animationId),
						this.isUpdating
							? ((this.isUpdating = !1),
								this.nodes.forEach(rq),
								this.nodes.forEach(rF),
								this.nodes.forEach(rO))
							: this.nodes.forEach(rW),
						this.clearAllSnapshots()
					let e = eX.now()
					;(eE.delta = o(0, 1e3 / 60, e - eE.timestamp)),
						(eE.timestamp = e),
						(eE.isProcessing = !0),
						eR.update.process(eE),
						eR.preRender.process(eE),
						eR.render.process(eE),
						(eE.isProcessing = !1)
				}
				didUpdate() {
					this.updateScheduled || ((this.updateScheduled = !0), eH.read(this.scheduleUpdate))
				}
				clearAllSnapshots() {
					this.nodes.forEach(rU), this.sharedNodes.forEach(r_)
				}
				scheduleUpdateProjection() {
					this.projectionUpdateScheduled ||
						((this.projectionUpdateScheduled = !0), eA.preRender(this.updateProjection, !1, !0))
				}
				scheduleCheckAfterUnmount() {
					eA.postRender(() => {
						this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
					})
				}
				updateSnapshot() {
					!this.snapshot &&
						this.instance &&
						((this.snapshot = this.measure()),
						!this.snapshot ||
							nO(this.snapshot.measuredBox.x) ||
							nO(this.snapshot.measuredBox.y) ||
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
						for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll()
					let e = this.layout
					;(this.layout = this.measure(!1)),
						this.layoutVersion++,
						(this.layoutCorrected = X()),
						(this.isLayoutDirty = !1),
						(this.projectionDelta = void 0),
						this.notifyListeners("measure", this.layout.layoutBox)
					let { visualElement: t } = this.options
					t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
				}
				updateScroll(e = "measure") {
					let t = !!(this.options.layoutScroll && this.instance)
					if (
						(this.scroll &&
							this.scroll.animationId === this.root.animationId &&
							this.scroll.phase === e &&
							(t = !1),
						t && this.instance)
					) {
						let t = n(this.instance)
						this.scroll = {
							animationId: this.root.animationId,
							phase: e,
							isRoot: t,
							offset: i(this.instance),
							wasRoot: this.scroll ? this.scroll.isRoot : t,
						}
					}
				}
				resetTransform() {
					if (!r) return
					let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
						t = this.projectionDelta && !rT(this.projectionDelta),
						i = this.getTransformTemplate(),
						n = i ? i(this.latestValues, "") : void 0,
						s = n !== this.prevTransformTemplateValue
					e &&
						this.instance &&
						(t || tC(this.latestValues) || s) &&
						(r(this.instance, n), (this.shouldResetTransform = !1), this.scheduleRender())
				}
				measure(e = !0) {
					var t
					let i = this.measurePageBox(),
						n = this.removeElementScroll(i)
					return (
						e && (n = this.removeTransform(n)),
						r2((t = n).x),
						r2(t.y),
						{
							animationId: this.root.animationId,
							measuredBox: i,
							layoutBox: n,
							latestValues: {},
							source: this.id,
						}
					)
				}
				measurePageBox() {
					let { visualElement: e } = this.options
					if (!e) return X()
					let t = e.measureViewportBox()
					if (!(this.scroll?.wasRoot || this.path.some(r3))) {
						let { scroll: e } = this.root
						e && (tR(t.x, e.offset.x), tR(t.y, e.offset.y))
					}
					return t
				}
				removeElementScroll(e) {
					let t = X()
					if ((rg(t, e), this.scroll?.wasRoot)) return t
					for (let i = 0; i < this.path.length; i++) {
						let n = this.path[i],
							{ scroll: r, options: s } = n
						n !== this.root &&
							r &&
							s.layoutScroll &&
							(r.wasRoot && rg(t, e), tR(t.x, r.offset.x), tR(t.y, r.offset.y))
					}
					return t
				}
				applyTransform(e, t = !1) {
					let i = X()
					rg(i, e)
					for (let e = 0; e < this.path.length; e++) {
						let n = this.path[e]
						!t &&
							n.options.layoutScroll &&
							n.scroll &&
							n !== n.root &&
							tN(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
							tC(n.latestValues) && tN(i, n.latestValues)
					}
					return tC(this.latestValues) && tN(i, this.latestValues), i
				}
				removeTransform(e) {
					let t = X()
					rg(t, e)
					for (let e = 0; e < this.path.length; e++) {
						let i = this.path[e]
						if (!i.instance || !tC(i.latestValues)) continue
						tP(i.latestValues) && i.updateSnapshot()
						let n = X()
						rg(n, i.measurePageBox()), rk(t, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
					}
					return tC(this.latestValues) && rk(t, this.latestValues), t
				}
				setTargetDelta(e) {
					;(this.targetDelta = e), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0)
				}
				setOptions(e) {
					this.options = { ...this.options, ...e, crossfade: void 0 === e.crossfade || e.crossfade }
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
						this.relativeParent.resolvedRelativeTargetAt !== eE.timestamp &&
						this.relativeParent.resolveTargetDelta(!0)
				}
				resolveTargetDelta(e = !1) {
					let t = this.getLead()
					this.isProjectionDirty || (this.isProjectionDirty = t.isProjectionDirty),
						this.isTransformDirty || (this.isTransformDirty = t.isTransformDirty),
						this.isSharedProjectionDirty || (this.isSharedProjectionDirty = t.isSharedProjectionDirty)
					let i = !!this.resumingFrom || this !== t
					if (
						!(
							e ||
							(i && this.isSharedProjectionDirty) ||
							this.isProjectionDirty ||
							this.parent?.isProjectionDirty ||
							this.attemptToResolveRelativeTarget ||
							this.root.updateBlockedByResize
						)
					)
						return
					let { layout: n, layoutId: r } = this.options
					if (!this.layout || !(n || r)) return
					this.resolvedRelativeTargetAt = eE.timestamp
					let s = this.getClosestProjectingParent()
					if (
						(s &&
							this.linkedParentVersion !== s.layoutVersion &&
							!s.options.layoutRoot &&
							this.removeRelativeTarget(),
						this.targetDelta ||
							this.relativeTarget ||
							(s && s.layout
								? this.createRelativeTarget(s, this.layout.layoutBox, s.layout.layoutBox)
								: this.removeRelativeTarget()),
						this.relativeTarget || this.targetDelta)
					) {
						if (
							(this.target || ((this.target = X()), (this.targetWithTransforms = X())),
							this.relativeTarget &&
								this.relativeTargetOrigin &&
								this.relativeParent &&
								this.relativeParent.target)
						) {
							var o, a, l
							this.forceRelativeParentToResolveTarget(),
								(o = this.target),
								(a = this.relativeTarget),
								(l = this.relativeParent.target),
								nU(o.x, a.x, l.x),
								nU(o.y, a.y, l.y)
						} else
							this.targetDelta
								? (this.resumingFrom
										? (this.target = this.applyTransform(this.layout.layoutBox))
										: rg(this.target, this.layout.layoutBox),
									tE(this.target, this.targetDelta))
								: rg(this.target, this.layout.layoutBox)
						this.attemptToResolveRelativeTarget &&
							((this.attemptToResolveRelativeTarget = !1),
							s &&
							!!s.resumingFrom == !!this.resumingFrom &&
							!s.options.layoutScroll &&
							s.target &&
							1 !== this.animationProgress
								? this.createRelativeTarget(s, this.target, s.target)
								: (this.relativeParent = this.relativeTarget = void 0))
					}
				}
				getClosestProjectingParent() {
					if (!(!this.parent || tP(this.parent.latestValues) || tM(this.parent.latestValues)))
						if (this.parent.isProjecting()) return this.parent
						else return this.parent.getClosestProjectingParent()
				}
				isProjecting() {
					return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
				}
				createRelativeTarget(e, t, i) {
					;(this.relativeParent = e),
						(this.linkedParentVersion = e.layoutVersion),
						this.forceRelativeParentToResolveTarget(),
						(this.relativeTarget = X()),
						(this.relativeTargetOrigin = X()),
						nW(this.relativeTargetOrigin, t, i),
						rg(this.relativeTarget, this.relativeTargetOrigin)
				}
				removeRelativeTarget() {
					this.relativeParent = this.relativeTarget = void 0
				}
				calcProjection() {
					let e = this.getLead(),
						t = !!this.resumingFrom || this !== e,
						i = !0
					if (
						((this.isProjectionDirty || this.parent?.isProjectionDirty) && (i = !1),
						t && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1),
						this.resolvedRelativeTargetAt === eE.timestamp && (i = !1),
						i)
					)
						return
					let { layout: n, layoutId: r } = this.options
					if (
						((this.isTreeAnimating = !!(
							(this.parent && this.parent.isTreeAnimating) ||
							this.currentAnimation ||
							this.pendingAnimation
						)),
						this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
						!this.layout || !(n || r))
					)
						return
					rg(this.layoutCorrected, this.layout.layoutBox)
					let s = this.treeScale.x,
						o = this.treeScale.y
					!(function (e, t, i, n = !1) {
						let r,
							s,
							o = i.length
						if (o) {
							t.x = t.y = 1
							for (let a = 0; a < o; a++) {
								s = (r = i[a]).projectionDelta
								let { visualElement: o } = r.options
								;(!o || !o.props.style || "contents" !== o.props.style.display) &&
									(n &&
										r.options.layoutScroll &&
										r.scroll &&
										r !== r.root &&
										tN(e, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
									s && ((t.x *= s.x.scale), (t.y *= s.y.scale), tE(e, s)),
									n && tC(r.latestValues) && tN(e, r.latestValues))
							}
							t.x < 1.0000000000001 && t.x > 0.999999999999 && (t.x = 1),
								t.y < 1.0000000000001 && t.y > 0.999999999999 && (t.y = 1)
						}
					})(this.layoutCorrected, this.treeScale, this.path, t),
						e.layout &&
							!e.target &&
							(1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
							((e.target = e.layout.layoutBox), (e.targetWithTransforms = X()))
					let { target: a } = e
					if (!a) {
						this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender())
						return
					}
					this.projectionDelta && this.prevProjectionDelta
						? (ry(this.prevProjectionDelta.x, this.projectionDelta.x),
							ry(this.prevProjectionDelta.y, this.projectionDelta.y))
						: this.createProjectionDeltas(),
						nz(this.projectionDelta, this.layoutCorrected, a, this.latestValues),
						(this.treeScale.x === s &&
							this.treeScale.y === o &&
							rj(this.projectionDelta.x, this.prevProjectionDelta.x) &&
							rj(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
							((this.hasProjected = !0),
							this.scheduleRender(),
							this.notifyListeners("projectionUpdate", a))
				}
				hide() {
					this.isVisible = !1
				}
				show() {
					this.isVisible = !0
				}
				scheduleRender(e = !0) {
					if ((this.options.visualElement?.scheduleRender(), e)) {
						let e = this.getStack()
						e && e.scheduleRender()
					}
					this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
				}
				createProjectionDeltas() {
					;(this.prevProjectionDelta = H()),
						(this.projectionDelta = H()),
						(this.projectionDeltaWithTransform = H())
				}
				setAnimationOrigin(e, t = !1) {
					let i,
						n = this.snapshot,
						r = n ? n.latestValues : {},
						s = { ...this.latestValues },
						o = H()
					;(this.relativeParent && this.relativeParent.options.layoutRoot) ||
						(this.relativeTarget = this.relativeTargetOrigin = void 0),
						(this.attemptToResolveRelativeTarget = !t)
					let a = X(),
						l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
						u = this.getStack(),
						d = !u || u.members.length <= 1,
						c = !!(l && !d && !0 === this.options.crossfade && !this.path.some(rJ))
					;(this.animationProgress = 0),
						(this.mixTargetDelta = (t) => {
							let n = t / 1e3
							if (
								(rK(o.x, e.x, n),
								rK(o.y, e.y, n),
								this.setTargetDelta(o),
								this.relativeTarget &&
									this.relativeTargetOrigin &&
									this.layout &&
									this.relativeParent &&
									this.relativeParent.layout)
							) {
								var u, h, p, m, f, g
								nW(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
									(p = this.relativeTarget),
									(m = this.relativeTargetOrigin),
									(f = a),
									(g = n),
									rZ(p.x, m.x, f.x, g),
									rZ(p.y, m.y, f.y, g),
									i &&
										((u = this.relativeTarget), (h = i), rP(u.x, h.x) && rP(u.y, h.y)) &&
										(this.isProjectionDirty = !1),
									i || (i = X()),
									rg(i, this.relativeTarget)
							}
							l &&
								((this.animationValues = s),
								(function (e, t, i, n, r, s) {
									r
										? ((e.opacity = ty(0, i.opacity ?? 1, rh(n))),
											(e.opacityExit = ty(t.opacity ?? 1, 0, rp(n))))
										: s && (e.opacity = ty(t.opacity ?? 1, i.opacity ?? 1, n))
									for (let r = 0; r < rl; r++) {
										let s = `border${ra[r]}Radius`,
											o = rc(t, s),
											a = rc(i, s)
										;(void 0 !== o || void 0 !== a) &&
											(o || (o = 0),
											a || (a = 0),
											0 === o || 0 === a || rd(o) === rd(a)
												? ((e[s] = Math.max(ty(ru(o), ru(a), n), 0)),
													(b.test(a) || b.test(o)) && (e[s] += "%"))
												: (e[s] = a))
									}
									;(t.rotate || i.rotate) && (e.rotate = ty(t.rotate || 0, i.rotate || 0, n))
								})(s, r, this.latestValues, n, c, d)),
								this.root.scheduleUpdateProjection(),
								this.scheduleRender(),
								(this.animationProgress = n)
						}),
						this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
				}
				startAnimation(e) {
					this.notifyListeners("animationStart"),
						this.currentAnimation?.stop(),
						this.resumingFrom?.currentAnimation?.stop(),
						this.pendingAnimation && (ej(this.pendingAnimation), (this.pendingAnimation = void 0)),
						(this.pendingAnimation = eA.update(() => {
							var t, i, n
							let r
							;(n7.hasAnimatedSinceResize = !0),
								ih.layout++,
								this.motionValue || (this.motionValue = e_(0)),
								(this.currentAnimation =
									((t = this.motionValue),
									(i = [0, 1e3]),
									(n = {
										...e,
										velocity: 0,
										isSync: !0,
										onUpdate: (t) => {
											this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t)
										},
										onStop: () => {
											ih.layout--
										},
										onComplete: () => {
											ih.layout--, e.onComplete && e.onComplete(), this.completeAnimation()
										},
									}),
									(r = G(t) ? t : e_(t)).start(nk("", r, i, n)),
									r.animation)),
								this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
								(this.pendingAnimation = void 0)
						}))
				}
				completeAnimation() {
					this.resumingFrom &&
						((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0))
					let e = this.getStack()
					e && e.exitAnimationComplete(),
						(this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
						this.notifyListeners("animationComplete")
				}
				finishAnimation() {
					this.currentAnimation &&
						(this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()),
						this.completeAnimation()
				}
				applyTransformsToTarget() {
					let e = this.getLead(),
						{ targetWithTransforms: t, target: i, layout: n, latestValues: r } = e
					if (t && i && n) {
						if (
							this !== e &&
							this.layout &&
							n &&
							r5(this.options.animationType, this.layout.layoutBox, n.layoutBox)
						) {
							i = this.target || X()
							let t = nO(this.layout.layoutBox.x)
							;(i.x.min = e.target.x.min), (i.x.max = i.x.min + t)
							let n = nO(this.layout.layoutBox.y)
							;(i.y.min = e.target.y.min), (i.y.max = i.y.min + n)
						}
						rg(t, i), tN(t, r), nz(this.projectionDeltaWithTransform, this.layoutCorrected, t, r)
					}
				}
				registerSharedNode(e, t) {
					this.sharedNodes.has(e) || this.sharedNodes.set(e, new rE()), this.sharedNodes.get(e).add(t)
					let i = t.options.initialPromotionConfig
					t.promote({
						transition: i ? i.transition : void 0,
						preserveFollowOpacity:
							i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(t) : void 0,
					})
				}
				isLead() {
					let e = this.getStack()
					return !e || e.lead === this
				}
				getLead() {
					let { layoutId: e } = this.options
					return (e && this.getStack()?.lead) || this
				}
				getPrevLead() {
					let { layoutId: e } = this.options
					return e ? this.getStack()?.prevLead : void 0
				}
				getStack() {
					let { layoutId: e } = this.options
					if (e) return this.root.sharedNodes.get(e)
				}
				promote({ needsReset: e, transition: t, preserveFollowOpacity: i } = {}) {
					let n = this.getStack()
					n && n.promote(this, i),
						e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
						t && this.setOptions({ transition: t })
				}
				relegate() {
					let e = this.getStack()
					return !!e && e.relegate(this)
				}
				resetSkewAndRotation() {
					let { visualElement: e } = this.options
					if (!e) return
					let t = !1,
						{ latestValues: i } = e
					if (
						((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (t = !0), !t)
					)
						return
					let n = {}
					i.z && rI("z", e, n, this.animationValues)
					for (let t = 0; t < rN.length; t++)
						rI(`rotate${rN[t]}`, e, n, this.animationValues), rI(`skew${rN[t]}`, e, n, this.animationValues)
					for (let t in (e.render(), n))
						e.setStaticValue(t, n[t]), this.animationValues && (this.animationValues[t] = n[t])
					e.scheduleRender()
				}
				applyProjectionStyles(e, t) {
					if (!this.instance || this.isSVG) return
					if (!this.isVisible) {
						e.visibility = "hidden"
						return
					}
					let i = this.getTransformTemplate()
					if (this.needsReset) {
						;(this.needsReset = !1),
							(e.visibility = ""),
							(e.opacity = ""),
							(e.pointerEvents = tZ(t?.pointerEvents) || ""),
							(e.transform = i ? i(this.latestValues, "") : "none")
						return
					}
					let n = this.getLead()
					if (!this.projectionDelta || !this.layout || !n.target) {
						this.options.layoutId &&
							((e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1),
							(e.pointerEvents = tZ(t?.pointerEvents) || "")),
							this.hasProjected &&
								!tC(this.latestValues) &&
								((e.transform = i ? i({}, "") : "none"), (this.hasProjected = !1))
						return
					}
					e.visibility = ""
					let r = n.animationValues || n.latestValues
					this.applyTransformsToTarget()
					let s = (function (e, t, i) {
						let n = "",
							r = e.x.translate / t.x,
							s = e.y.translate / t.y,
							o = i?.z || 0
						if (
							((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `),
							(1 !== t.x || 1 !== t.y) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
							i)
						) {
							let { transformPerspective: e, rotate: t, rotateX: r, rotateY: s, skewX: o, skewY: a } = i
							e && (n = `perspective(${e}px) ${n}`),
								t && (n += `rotate(${t}deg) `),
								r && (n += `rotateX(${r}deg) `),
								s && (n += `rotateY(${s}deg) `),
								o && (n += `skewX(${o}deg) `),
								a && (n += `skewY(${a}deg) `)
						}
						let a = e.x.scale * t.x,
							l = e.y.scale * t.y
						return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none"
					})(this.projectionDeltaWithTransform, this.treeScale, r)
					i && (s = i(r, s)), (e.transform = s)
					let { x: o, y: a } = this.projectionDelta
					for (let t in ((e.transformOrigin = `${100 * o.origin}% ${100 * a.origin}% 0`),
					n.animationValues
						? (e.opacity =
								n === this
									? (r.opacity ?? this.latestValues.opacity ?? 1)
									: this.preserveOpacity
										? this.latestValues.opacity
										: r.opacityExit)
						: (e.opacity =
								n === this
									? void 0 !== r.opacity
										? r.opacity
										: ""
									: void 0 !== r.opacityExit
										? r.opacityExit
										: 0),
					tv)) {
						if (void 0 === r[t]) continue
						let { correct: i, applyTo: o, isCSSVariable: a } = tv[t],
							l = "none" === s ? r[t] : i(r[t], n)
						if (o) {
							let t = o.length
							for (let i = 0; i < t; i++) e[o[i]] = l
						} else a ? (this.options.visualElement.renderState.vars[t] = l) : (e[t] = l)
					}
					this.options.layoutId && (e.pointerEvents = n === this ? tZ(t?.pointerEvents) || "" : "none")
				}
				clearSnapshot() {
					this.resumeFrom = this.snapshot = void 0
				}
				resetTree() {
					this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
						this.root.nodes.forEach(r$),
						this.root.sharedNodes.clear()
				}
			}
		}
		function rF(e) {
			e.updateLayout()
		}
		function rO(e) {
			let t = e.resumeFrom?.snapshot || e.snapshot
			if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
				let { layoutBox: i, measuredBox: n } = e.layout,
					{ animationType: r } = e.options,
					s = t.source !== e.layout.source
				"size" === r
					? nN((e) => {
							let n = s ? t.measuredBox[e] : t.layoutBox[e],
								r = nO(n)
							;(n.min = i[e].min), (n.max = n.min + r)
						})
					: r5(r, t.layoutBox, i) &&
						nN((n) => {
							let r = s ? t.measuredBox[n] : t.layoutBox[n],
								o = nO(i[n])
							;(r.max = r.min + o),
								e.relativeTarget &&
									!e.currentAnimation &&
									((e.isProjectionDirty = !0),
									(e.relativeTarget[n].max = e.relativeTarget[n].min + o))
						})
				let o = H()
				nz(o, i, t.layoutBox)
				let a = H()
				s ? nz(a, e.applyTransform(n, !0), t.measuredBox) : nz(a, i, t.layoutBox)
				let l = !rT(o),
					u = !1
				if (!e.resumeFrom) {
					let n = e.getClosestProjectingParent()
					if (n && !n.resumeFrom) {
						let { snapshot: r, layout: s } = n
						if (r && s) {
							let o = X()
							nW(o, t.layoutBox, r.layoutBox)
							let a = X()
							nW(a, i, s.layoutBox),
								rM(o, a) || (u = !0),
								n.options.layoutRoot &&
									((e.relativeTarget = a), (e.relativeTargetOrigin = o), (e.relativeParent = n))
						}
					}
				}
				e.notifyListeners("didUpdate", {
					layout: i,
					snapshot: t,
					delta: a,
					layoutDelta: o,
					hasLayoutChanged: l,
					hasRelativeLayoutChanged: u,
				})
			} else if (e.isLead()) {
				let { onExitComplete: t } = e.options
				t && t()
			}
			e.options.transition = void 0
		}
		function rB(e) {
			e.parent &&
				(e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
				e.isSharedProjectionDirty ||
					(e.isSharedProjectionDirty = !!(
						e.isProjectionDirty ||
						e.parent.isProjectionDirty ||
						e.parent.isSharedProjectionDirty
					)),
				e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
		}
		function rz(e) {
			e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
		}
		function rU(e) {
			e.clearSnapshot()
		}
		function r$(e) {
			e.clearMeasurements()
		}
		function rW(e) {
			e.isLayoutDirty = !1
		}
		function rq(e) {
			let { visualElement: t } = e.options
			t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
		}
		function rH(e) {
			e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0)
		}
		function rY(e) {
			e.resolveTargetDelta()
		}
		function rX(e) {
			e.calcProjection()
		}
		function rG(e) {
			e.resetSkewAndRotation()
		}
		function r_(e) {
			e.removeLeadSnapshot()
		}
		function rK(e, t, i) {
			;(e.translate = ty(t.translate, 0, i)),
				(e.scale = ty(t.scale, 1, i)),
				(e.origin = t.origin),
				(e.originPoint = t.originPoint)
		}
		function rZ(e, t, i, n) {
			;(e.min = ty(t.min, i.min, n)), (e.max = ty(t.max, i.max, n))
		}
		function rJ(e) {
			return e.animationValues && void 0 !== e.animationValues.opacityExit
		}
		let rQ = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
			r0 = (e) => "u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
			r1 = r0("applewebkit/") && !r0("chrome/") ? Math.round : eT
		function r2(e) {
			;(e.min = r1(e.min)), (e.max = r1(e.max))
		}
		function r5(e, t, i) {
			return "position" === e || ("preserve-aspect" === e && !(0.2 >= Math.abs(rA(t) - rA(i))))
		}
		function r3(e) {
			return e !== e.root && e.scroll?.wasRoot
		}
		let r6 = rL({
				attachResizeListener: (e, t) => nL(e, "resize", t),
				measureScroll: () => ({
					x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
					y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
				}),
				checkIsScrollRoot: () => !0,
			}),
			r4 = { current: void 0 },
			r8 = rL({
				measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
				defaultParent: () => {
					if (!r4.current) {
						let e = new r6({})
						e.mount(window), e.setOptions({ layoutScroll: !0 }), (r4.current = e)
					}
					return r4.current
				},
				resetTransform: (e, t) => {
					e.style.transform = void 0 !== t ? t : "none"
				},
				checkIsScrollRoot: (e) => "fixed" === window.getComputedStyle(e).position,
			})
		function r9(e, t) {
			let i = (function (e, t, i) {
					if (null == e) return []
					if (e instanceof EventTarget) return [e]
					if ("string" == typeof e) {
						let t = document,
							i = void 0 ?? t.querySelectorAll(e)
						return i ? Array.from(i) : []
					}
					return Array.from(e).filter((e) => null != e)
				})(e),
				n = new AbortController()
			return [i, { passive: !0, ...t, signal: n.signal }, () => n.abort()]
		}
		function r7(e) {
			return !("touch" === e.pointerType || nF.x || nF.y)
		}
		function se(e, t, i) {
			let { props: n } = e
			e.animationState && n.whileHover && e.animationState.setActive("whileHover", "Start" === i)
			let r = n["onHover" + i]
			r && eA.postRender(() => r(t, nH(t)))
		}
		function st(e) {
			return rs(e) && "offsetHeight" in e
		}
		e.s(["isHTMLElement", () => st], 82075)
		let si = (e, t) => !!t && (e === t || si(e, t.parentElement)),
			sn = new WeakSet()
		function sr(e) {
			return (t) => {
				"Enter" === t.key && e(t)
			}
		}
		function ss(e, t) {
			e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }))
		}
		function so(e) {
			return nq(e) && !(nF.x || nF.y)
		}
		function sa(e, t, i) {
			let { props: n } = e
			if (e.current instanceof HTMLButtonElement && e.current.disabled) return
			e.animationState && n.whileTap && e.animationState.setActive("whileTap", "Start" === i)
			let r = n["onTap" + ("End" === i ? "" : i)]
			r && eA.postRender(() => r(t, nH(t)))
		}
		let sl = new WeakMap(),
			su = new WeakMap(),
			sd = (e) => {
				let t = sl.get(e.target)
				t && t(e)
			},
			sc = (e) => {
				e.forEach(sd)
			},
			sh = { some: 0, all: 1 },
			sp = (function (e, t) {
				if ("u" < typeof Proxy) return ii
				let i = new Map(),
					n = (i, n) => ii(i, n, e, t)
				return new Proxy((e, t) => n(e, t), {
					get: (r, s) => ("create" === s ? n : (i.has(s) || i.set(s, ii(s, void 0, e, t)), i.get(s))),
				})
			})(
				{
					animation: {
						Feature: class extends ir {
							constructor(e) {
								super(e),
									e.animationState ||
										(e.animationState = (function (e) {
											let t = (t) =>
													Promise.all(
														t.map(({ animation: t, options: i }) =>
															(function (e, t, i = {}) {
																let n
																if ((e.notify("AnimationStart", t), Array.isArray(t)))
																	n = Promise.all(t.map((t) => nP(e, t, i)))
																else if ("string" == typeof t) n = nP(e, t, i)
																else {
																	let r =
																		"function" == typeof t ? is(e, t, i.custom) : t
																	n = Promise.all(nS(e, r, i))
																}
																return n.then(() => {
																	e.notify("AnimationComplete", t)
																})
															})(e, t, i),
														),
													),
												i = nR(),
												n = !0,
												r = (t) => (i, n) => {
													let r = is(e, n, "exit" === t ? e.presenceContext?.custom : void 0)
													if (r) {
														let { transition: e, transitionEnd: t, ...n } = r
														i = { ...i, ...n, ...t }
													}
													return i
												}
											function s(s) {
												let { props: o } = e,
													a =
														(function e(t) {
															if (!t) return
															if (!t.isControllingVariants) {
																let i = (t.parent && e(t.parent)) || {}
																return (
																	void 0 !== t.props.initial &&
																		(i.initial = t.props.initial),
																	i
																)
															}
															let i = {}
															for (let e = 0; e < nC; e++) {
																let n = e3[e],
																	r = t.props[n]
																;(e2(r) || !1 === r) && (i[n] = r)
															}
															return i
														})(e.parent) || {},
													l = [],
													u = new Set(),
													d = {},
													c = 1 / 0
												for (let t = 0; t < nj; t++) {
													var h, p
													let m = nA[t],
														f = i[m],
														g = void 0 !== o[m] ? o[m] : a[m],
														y = e2(g),
														v = m === s ? f.isActive : null
													!1 === v && (c = t)
													let x = g === a[m] && g !== o[m] && y
													if (
														(x && n && e.manuallyAnimateOnMount && (x = !1),
														(f.protectedKeys = { ...d }),
														(!f.isActive && null === v) ||
															(!g && !f.prevProp) ||
															e1(g) ||
															"boolean" == typeof g)
													)
														continue
													let b =
															((h = f.prevProp),
															"string" == typeof (p = g)
																? p !== h
																: !!Array.isArray(p) && !nM(p, h)),
														w = b || (m === s && f.isActive && !x && y) || (t > c && y),
														k = !1,
														S = Array.isArray(g) ? g : [g],
														T = S.reduce(r(m), {})
													!1 === v && (T = {})
													let { prevResolvedValues: P = {} } = f,
														C = { ...P, ...T },
														M = (t) => {
															;(w = !0),
																u.has(t) && ((k = !0), u.delete(t)),
																(f.needsAnimating[t] = !0)
															let i = e.getValue(t)
															i && (i.liveStyle = !1)
														}
													for (let e in C) {
														let t = T[e],
															i = P[e]
														if (!d.hasOwnProperty(e))
															(ia(t) && ia(i) ? nM(t, i) : t === i)
																? void 0 !== t && u.has(e)
																	? M(e)
																	: (f.protectedKeys[e] = !0)
																: null != t
																	? M(e)
																	: u.add(e)
													}
													;(f.prevProp = g),
														(f.prevResolvedValues = T),
														f.isActive && (d = { ...d, ...T }),
														n && e.blockInitialAnimation && (w = !1)
													let A = x && b,
														j = !A || k
													w &&
														j &&
														l.push(
															...S.map((t) => {
																let i = { type: m }
																if (
																	"string" == typeof t &&
																	n &&
																	!A &&
																	e.manuallyAnimateOnMount &&
																	e.parent
																) {
																	let { parent: n } = e,
																		r = is(n, t)
																	if (n.enteringChildren && r) {
																		let { delayChildren: t } = r.transition || {}
																		i.delay = nT(n.enteringChildren, e, t)
																	}
																}
																return { animation: t, options: i }
															}),
														)
												}
												if (u.size) {
													let t = {}
													if ("boolean" != typeof o.initial) {
														let i = is(
															e,
															Array.isArray(o.initial) ? o.initial[0] : o.initial,
														)
														i && i.transition && (t.transition = i.transition)
													}
													u.forEach((i) => {
														let n = e.getBaseTarget(i),
															r = e.getValue(i)
														r && (r.liveStyle = !0), (t[i] = n ?? null)
													}),
														l.push({ animation: t })
												}
												let m = !!l.length
												return (
													n &&
														(!1 === o.initial || o.initial === o.animate) &&
														!e.manuallyAnimateOnMount &&
														(m = !1),
													(n = !1),
													m ? t(l) : Promise.resolve()
												)
											}
											return {
												animateChanges: s,
												setActive: function (t, n) {
													if (i[t].isActive === n) return Promise.resolve()
													e.variantChildren?.forEach((e) =>
														e.animationState?.setActive(t, n),
													),
														(i[t].isActive = n)
													let r = s(t)
													for (let e in i) i[e].protectedKeys = {}
													return r
												},
												setAnimateFunction: function (i) {
													t = i(e)
												},
												getState: () => i,
												reset: () => {
													i = nR()
												},
											}
										})(e))
							}
							updateAnimationControlsSubscription() {
								let { animate: e } = this.node.getProps()
								e1(e) && (this.unmountControls = e.subscribe(this.node))
							}
							mount() {
								this.updateAnimationControlsSubscription()
							}
							update() {
								let { animate: e } = this.node.getProps(),
									{ animate: t } = this.node.prevProps || {}
								e !== t && this.updateAnimationControlsSubscription()
							}
							unmount() {
								this.node.animationState.reset(), this.unmountControls?.()
							}
						},
					},
					exit: {
						Feature: class extends ir {
							constructor() {
								super(...arguments), (this.id = nV++)
							}
							update() {
								if (!this.node.presenceContext) return
								let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
									{ isPresent: i } = this.node.prevPresenceContext || {}
								if (!this.node.animationState || e === i) return
								let n = this.node.animationState.setActive("exit", !e)
								t &&
									!e &&
									n.then(() => {
										t(this.id)
									})
							}
							mount() {
								let { register: e, onExitComplete: t } = this.node.presenceContext || {}
								t && t(this.id), e && (this.unmount = e(this.id))
							}
							unmount() {}
						},
					},
					inView: {
						Feature: class extends ir {
							constructor() {
								super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1)
							}
							startObserver() {
								var e
								let t
								this.unmount()
								let { viewport: i = {} } = this.node.getProps(),
									{ root: n, margin: r, amount: s = "some", once: o } = i,
									a = {
										root: n ? n.current : void 0,
										rootMargin: r,
										threshold: "number" == typeof s ? s : sh[s],
									},
									l = (e) => {
										let { isIntersecting: t } = e
										if (
											this.isInView === t ||
											((this.isInView = t), o && !t && this.hasEnteredView)
										)
											return
										t && (this.hasEnteredView = !0),
											this.node.animationState &&
												this.node.animationState.setActive("whileInView", t)
										let { onViewportEnter: i, onViewportLeave: n } = this.node.getProps(),
											r = t ? i : n
										r && r(e)
									}
								return (
									(e = this.node.current),
									(t = (function ({ root: e, ...t }) {
										let i = e || document
										su.has(i) || su.set(i, {})
										let n = su.get(i),
											r = JSON.stringify(t)
										return n[r] || (n[r] = new IntersectionObserver(sc, { root: e, ...t })), n[r]
									})(a)),
									sl.set(e, l),
									t.observe(e),
									() => {
										sl.delete(e), t.unobserve(e)
									}
								)
							}
							mount() {
								this.startObserver()
							}
							update() {
								if ("u" < typeof IntersectionObserver) return
								let { props: e, prevProps: t } = this.node
								;["amount", "margin", "root"].some(
									(function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
										return (i) => e[i] !== t[i]
									})(e, t),
								) && this.startObserver()
							}
							unmount() {}
						},
					},
					tap: {
						Feature: class extends ir {
							mount() {
								let { current: e } = this.node
								e &&
									(this.unmount = (function (e, t, i = {}) {
										let [n, r, s] = r9(e, i),
											o = (e) => {
												let n = e.currentTarget
												if (!so(e)) return
												sn.add(n)
												let s = t(n, e),
													o = (e, t) => {
														window.removeEventListener("pointerup", a),
															window.removeEventListener("pointercancel", l),
															sn.has(n) && sn.delete(n),
															so(e) && "function" == typeof s && s(e, { success: t })
													},
													a = (e) => {
														o(
															e,
															n === window ||
																n === document ||
																i.useGlobalTarget ||
																si(n, e.target),
														)
													},
													l = (e) => {
														o(e, !1)
													}
												window.addEventListener("pointerup", a, r),
													window.addEventListener("pointercancel", l, r)
											}
										return (
											n.forEach((e) => {
												;(i.useGlobalTarget ? window : e).addEventListener("pointerdown", o, r),
													st(e) &&
														(e.addEventListener("focus", (e) =>
															((e, t) => {
																let i = e.currentTarget
																if (!i) return
																let n = sr(() => {
																	if (sn.has(i)) return
																	ss(i, "down")
																	let e = sr(() => {
																		ss(i, "up")
																	})
																	i.addEventListener("keyup", e, t),
																		i.addEventListener(
																			"blur",
																			() => ss(i, "cancel"),
																			t,
																		)
																})
																i.addEventListener("keydown", n, t),
																	i.addEventListener(
																		"blur",
																		() => i.removeEventListener("keydown", n),
																		t,
																	)
															})(e, r),
														),
														nI(e) || e.hasAttribute("tabindex") || (e.tabIndex = 0))
											}),
											s
										)
									})(
										e,
										(e, t) => (
											sa(this.node, t, "Start"),
											(e, { success: t }) => sa(this.node, e, t ? "End" : "Cancel")
										),
										{ useGlobalTarget: this.node.props.globalTapTarget },
									))
							}
							unmount() {}
						},
					},
					focus: {
						Feature: class extends ir {
							constructor() {
								super(...arguments), (this.isActive = !1)
							}
							onFocus() {
								let e = !1
								try {
									e = this.node.current.matches(":focus-visible")
								} catch (t) {
									e = !0
								}
								e &&
									this.node.animationState &&
									(this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0))
							}
							onBlur() {
								this.isActive &&
									this.node.animationState &&
									(this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1))
							}
							mount() {
								this.unmount = ic(
									nL(this.node.current, "focus", () => this.onFocus()),
									nL(this.node.current, "blur", () => this.onBlur()),
								)
							}
							unmount() {}
						},
					},
					hover: {
						Feature: class extends ir {
							mount() {
								let { current: e } = this.node
								e &&
									(this.unmount = (function (e, t, i = {}) {
										let [n, r, s] = r9(e, i),
											o = (e) => {
												if (!r7(e)) return
												let { target: i } = e,
													n = t(i, e)
												if ("function" != typeof n || !i) return
												let s = (e) => {
													r7(e) && (n(e), i.removeEventListener("pointerleave", s))
												}
												i.addEventListener("pointerleave", s, r)
											}
										return (
											n.forEach((e) => {
												e.addEventListener("pointerenter", o, r)
											}),
											s
										)
									})(e, (e, t) => (se(this.node, t, "Start"), (e) => se(this.node, e, "End"))))
							}
							unmount() {}
						},
					},
					pan: {
						Feature: class extends ir {
							constructor() {
								super(...arguments), (this.removePointerDownListener = eT)
							}
							onPointerDown(e) {
								this.session = new nK(e, this.createPanHandlers(), {
									transformPagePoint: this.node.getTransformPagePoint(),
									contextWindow: nX(this.node),
								})
							}
							createPanHandlers() {
								let {
									onPanSessionStart: e,
									onPanStart: t,
									onPan: i,
									onPanEnd: n,
								} = this.node.getProps()
								return {
									onSessionStart: n9(e),
									onStart: n9(t),
									onMove: i,
									onEnd: (e, t) => {
										delete this.session, n && eA.postRender(() => n(e, t))
									},
								}
							}
							mount() {
								this.removePointerDownListener = nY(this.node.current, "pointerdown", (e) =>
									this.onPointerDown(e),
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
						Feature: class extends ir {
							constructor(e) {
								super(e),
									(this.removeGroupControls = eT),
									(this.removeListeners = eT),
									(this.controls = new n4(e))
							}
							mount() {
								let { dragControls: e } = this.node.getProps()
								e && (this.removeGroupControls = e.subscribe(this.controls)),
									(this.removeListeners = this.controls.addListeners() || eT)
							}
							update() {
								let { dragControls: e } = this.node.getProps(),
									{ dragControls: t } = this.node.prevProps || {}
								e !== t &&
									(this.removeGroupControls(),
									e && (this.removeGroupControls = e.subscribe(this.controls)))
							}
							unmount() {
								this.removeGroupControls(),
									this.removeListeners(),
									this.controls.isDragging || this.controls.endPanSession()
							}
						},
						ProjectionNode: r8,
						MeasureLayout: rr,
					},
					layout: { ProjectionNode: r8, MeasureLayout: rr },
				},
				(e, t) => ((t.isSVG ?? tO(e)) ? new tk(t) : new tI(t, { allowProjection: e !== tL.Fragment })),
			)
		e.s(["motion", () => sp], 66904)
	},
	85277,
	(e) => {
		"use strict"
		var t = e.i(8026),
			i = e.i(10008),
			n = e.i(66904)
		function r() {
			let [e, r] = (0, i.useState)("code"),
				[o, a] = (0, i.useState)(!1),
				[l, u] = (0, i.useState)(""),
				[d, c] = (0, i.useState)(0),
				h = (0, i.useRef)(null)
			;(0, i.useEffect)(() => {
				if (o && d < s[e].code.length) {
					let t = setTimeout(() => {
						u((t) => t + s[e].code[d]),
							c(d + 1),
							h.current && (h.current.scrollTop = h.current.scrollHeight)
					}, 15)
					return () => clearTimeout(t)
				}
				if (d >= s[e].code.length) {
					a(!1)
					let t = setTimeout(() => {
						p("code" === e ? "architect" : "architect" === e ? "debug" : "code")
					}, 1e3)
					return () => clearTimeout(t)
				}
			}, [o, d, e])
			let p = (e) => {
				r(e), u(""), c(0), a(!0), h.current && (h.current.scrollTop = 0)
			}
			return (
				(0, i.useEffect)(() => {
					a(!0)
				}, []),
				(0, t.jsx)("div", {
					className:
						"relative z-10 w-full max-w-[90vw] rounded-lg border border-border bg-background/50 p-2 shadow-2xl backdrop-blur-sm sm:max-w-[500px]",
					children: (0, t.jsxs)("div", {
						className: "rounded-md bg-muted p-1.5 dark:bg-gray-900 sm:p-2",
						children: [
							(0, t.jsxs)("div", {
								className:
									"flex items-center justify-between border-b border-border px-2 py-1.5 sm:px-3 sm:py-2",
								children: [
									(0, t.jsxs)("div", {
										className: "flex items-center space-x-1.5",
										children: [
											(0, t.jsx)("div", {
												className: "h-2.5 w-2.5 rounded-full bg-red-500 sm:h-3 sm:w-3",
											}),
											(0, t.jsx)("div", {
												className: "h-2.5 w-2.5 rounded-full bg-yellow-500 sm:h-3 sm:w-3",
											}),
											(0, t.jsx)("div", {
												className: "h-2.5 w-2.5 rounded-full bg-green-500 sm:h-3 sm:w-3",
											}),
										],
									}),
									(0, t.jsxs)("div", {
										className: "flex space-x-1",
										children: [
											(0, t.jsx)("button", {
												onClick: () => p("code"),
												className: `rounded px-2 py-0.5 text-xs font-medium transition-colors sm:text-sm ${"code" === e ? "bg-blue-500/20 text-blue-400" : "text-gray-400 hover:bg-gray-800"}`,
												children: "Code",
											}),
											(0, t.jsx)("button", {
												onClick: () => p("architect"),
												className: `rounded px-2 py-0.5 text-xs font-medium transition-colors sm:text-sm ${"architect" === e ? "bg-purple-500/20 text-purple-400" : "text-gray-400 hover:bg-gray-800"}`,
												children: "Architect",
											}),
											(0, t.jsx)("button", {
												onClick: () => p("debug"),
												className: `rounded px-2 py-0.5 text-xs font-medium transition-colors sm:text-sm ${"debug" === e ? "bg-green-500/20 text-green-400" : "text-gray-400 hover:bg-gray-800"}`,
												children: "Debug",
											}),
										],
									}),
								],
							}),
							(0, t.jsx)("div", {
								className: "p-2 sm:p-4",
								children: (0, t.jsx)("pre", {
									ref: h,
									className:
										"scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent overflow-y-hidden text-xs text-muted-foreground max-lg:h-[25vh] sm:text-sm lg:max-h-[50vh]",
									children: (0, t.jsxs)("code", {
										className: "block whitespace-pre font-mono",
										children: [
											l,
											o &&
												(0, t.jsx)(n.motion.span, {
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
		let s = {
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
		e.s(["CodeExample", () => r])
	},
	33604,
	(e) => {
		"use strict"
		var t = e.i(8026),
			i = e.i(66904),
			n = e.i(45438)
		let r = ["Apple", "Microsoft", "Amazon", "ByteDance", "Rakuten", "Carvana"]
		function s() {
			return (0, t.jsxs)("div", {
				children: [
					(0, t.jsx)(i.motion.p, {
						initial: { opacity: 0, y: 10 },
						animate: { opacity: 1, y: 0 },
						transition: { duration: 0.5, ease: "easeOut" },
						className: "text-xs text-muted-foreground mb-2 ",
						children: "Helping teams ship more at",
					}),
					(0, t.jsx)("div", {
						className: "mt-4 flex flex-wrap items-center gap-6 justify-center sm:justify-start",
						children: r.map((e, r) =>
							(0, t.jsx)(
								i.motion.div,
								{
									initial: { opacity: 0, y: 10 },
									animate: { opacity: 1, y: 0 },
									transition: { duration: 0.5, delay: 0.1 * r, ease: "easeOut" },
									children: (0, t.jsx)(n.default, {
										width: 0,
										height: 0,
										className: "h-[20px] w-auto overflow-clip opacity-70 dark:invert",
										src: `/logos/${e.toLowerCase().replace(/\s+/g, "-")}.svg`,
										alt: `${e} Logo`,
									}),
								},
								e,
							),
						),
					}),
				],
			})
		}
		e.s(["CompanyLogos", () => s])
	},
	91793,
	(e) => {
		"use strict"
		var t = e.i(8026),
			i = e.i(10008),
			n = e.i(66904),
			r = e.i(15628),
			s = e.i(45326),
			o = e.i(21862)
		let a = [
			{
				question: "What exactly is Roo Code?",
				answer: (0, t.jsx)(t.Fragment, {
					children:
						"Roo Code is an open-source, AI-powered coding assistant that runs in VS Code. It goes beyond simple autocompletion by reading and writing across multiple files, executing commands, and adapting to your workflow—like having a whole dev team right inside your editor.",
				}),
			},
			{
				question: "How does Roo Code differ from Copilot, Cursor, or Windsurf?",
				answer: (0, t.jsxs)(t.Fragment, {
					children: [
						"Roo Code is ",
						(0, t.jsx)("strong", { children: "open-source and fully customizable" }),
						", letting you integrate any AI model you choose (e.g, OpenAI, Anthropic, local LLMs, etc.). It's built for ",
						(0, t.jsx)("strong", { children: "multi-file edits" }),
						", so it can read, refactor, and update multiple files at once for holistic code changes. Its",
						" ",
						(0, t.jsx)("strong", { children: "agentic abilities" }),
						" go beyond a typical AI autocomplete, enabling it to run tests, open a browser, and handle deeper tasks. And you're always in control: Roo Code is",
						" ",
						(0, t.jsx)("strong", { children: "permission-based" }),
						", meaning you can control and approve any file changes or command executions.",
					],
				}),
			},
			{
				question: "Is Roo Code really free?",
				answer: (0, t.jsx)(t.Fragment, {
					children:
						"Yes! Roo Code is completely free and open-source. You'll only pay for the AI model usage if you use a paid API (like OpenAI). If you choose free or self-hosted models, there's no cost at all.",
				}),
			},
			{
				question: "Will my code stay private?",
				answer: (0, t.jsx)(t.Fragment, {
					children:
						"Yes. Because Roo Code is an extension in your local VS Code, your code never leaves your machine unless you connect to an external AI API. Even then, you control exactly what is sent to the AI model. You can use tools like .rooignore to exclude sensitive files, and you can also run Roo Code with offline/local models for full privacy.",
				}),
			},
			{
				question: "Which AI models does Roo Code support?",
				answer: (0, t.jsx)(t.Fragment, {
					children:
						"Roo Code is fully model-agnostic, giving you the flexibility to work with whatever AI models you prefer. It supports OpenAI models (like GPT-4o, GPT-4, and o1), Anthropic's Claude (including Claude 3.5 Sonnet), Google's Gemini models, and local LLMs via APIs or specialized plugins. You can even connect any other model that follows Roo Code's Model Context Protocol (MCP).",
				}),
			},
			{
				question: "Does Roo Code support my programming language?",
				answer: (0, t.jsx)(t.Fragment, {
					children:
						"Likely yes! Roo Code supports a wide range of languages—Python, Java, C#, JavaScript/TypeScript, Go, Rust, etc. Since it leverages the AI model's understanding, new or lesser-known languages may also work, depending on model support.",
				}),
			},
			{
				question: "How do I install and get started?",
				answer: (0, t.jsxs)(t.Fragment, {
					children: [
						"Install Roo Code from the",
						" ",
						(0, t.jsx)("a", {
							href: "https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: "VS Code Marketplace",
						}),
						" ",
						"(or GitHub). Add your AI keys (OpenAI, Anthropic, or other) in the extension settings. Open the Roo panel (the rocket icon) in VS Code, and start typing commands in plain English!",
						" ",
						(0, t.jsx)("a", {
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
				answer: (0, t.jsxs)(t.Fragment, {
					children: [
						"Absolutely. Roo Code uses efficient strategies (like partial-file analysis, summarization, or user-specified context) to handle large codebases. Enterprises especially appreciate the on-prem or self-hosted model option for compliance and security needs.",
						" ",
						(0, t.jsx)(o.default, {
							href: "/enterprise",
							className: "text-primary underline-offset-4 hover:underline",
							children: "Learn more about Roo Code for enterprise.",
						}),
					],
				}),
			},
			{
				question: "Is it safe for enterprise use?",
				answer: (0, t.jsxs)(t.Fragment, {
					children: [
						"Yes. Roo Code was built for enterprise environments. You can self-host AI models or use your own trusted provider. All file changes and commands go through permission gating, so nothing runs without your approval. And because Roo Code is fully open-source, it's auditable—you can review exactly how it works before deploying it.",
						" ",
						(0, t.jsx)("a", {
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
				answer: (0, t.jsx)(t.Fragment, {
					children:
						"Yes! One of Roo Code's biggest strengths is its ability to execute commands—always optional and fully permission-based. It can run terminal commands like npm install, execute your test suites, and even open a web browser for integration testing when you approve it.",
				}),
			},
			{
				question: "What if I just want a casual coding 'vibe'?",
				answer: (0, t.jsx)(t.Fragment, {
					children:
						'Roo Code shines for both serious enterprise development and casual "vibe coding." You can ask it to quickly prototype ideas, refactor on the fly, or provide design suggestions—without a rigid, step-by-step process.',
				}),
			},
			{
				question: "Can I contribute to Roo Code?",
				answer: (0, t.jsxs)(t.Fragment, {
					children: [
						"Yes, please do! Roo Code is open-source on",
						" ",
						(0, t.jsx)("a", {
							href: "https://github.com/RooCodeInc/Roo-Code",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: "GitHub",
						}),
						". Submit issues, suggest features, or open a pull request. There's also an active community on",
						" ",
						(0, t.jsx)("a", {
							href: "https://discord.gg/roocode",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: "Discord",
						}),
						" ",
						"and",
						" ",
						(0, t.jsx)("a", {
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
				answer: (0, t.jsxs)(t.Fragment, {
					children: [
						"Check out our",
						" ",
						(0, t.jsx)("a", {
							href: "https://docs.roocode.com",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: "official documentation",
						}),
						" ",
						"for both a quick-start set up and advanced guides. You can also get community support on",
						" ",
						(0, t.jsx)("a", {
							href: "https://discord.gg/roocode",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: "Discord",
						}),
						" ",
						"and",
						" ",
						(0, t.jsx)("a", {
							href: "https://reddit.com/r/RooCode",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: "Reddit",
						}),
						". You can also check out our",
						" ",
						(0, t.jsx)("a", {
							href: "https://www.youtube.com/@RooCodeYT",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline-offset-4 hover:underline",
							children: "YouTube",
						}),
						" ",
						"tutorials and",
						" ",
						(0, t.jsx)("a", {
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
		function l() {
			let [e, o] = (0, i.useState)(null)
			return (0, t.jsx)("section", {
				id: "faq-section",
				className: "border-t border-border py-20",
				children: (0, t.jsxs)("div", {
					className: "container mx-auto px-4 sm:px-6 lg:px-8",
					children: [
						(0, t.jsx)("div", {
							className: "mx-auto mb-24 max-w-3xl text-center",
							children: (0, t.jsxs)(n.motion.div, {
								initial: { opacity: 0, y: 20 },
								whileInView: { opacity: 1, y: 0 },
								viewport: { once: !0 },
								transition: { duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] },
								children: [
									(0, t.jsx)("h2", {
										className: "text-4xl font-bold tracking-tight sm:text-5xl",
										children: "Frequently Asked Questions",
									}),
									(0, t.jsx)("p", {
										className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto",
										children:
											"Everything you need to know about Roo Code and how it can transform your development workflow.",
									}),
								],
							}),
						}),
						(0, t.jsx)("div", {
							className: "mx-auto max-w-3xl",
							children: (0, t.jsx)("div", {
								className: "space-y-4",
								children: a.map((i, a) =>
									(0, t.jsx)(
										n.motion.div,
										{
											initial: { opacity: 0, y: 20 },
											whileInView: { opacity: 1, y: 0 },
											viewport: { once: !0 },
											transition: {
												duration: 0.5,
												delay: 0.1 * a,
												ease: [0.21, 0.45, 0.27, 0.9],
											},
											children: (0, t.jsxs)("div", {
												className:
													"group relative rounded-lg border border-border/50 bg-background/30 backdrop-blur-xl transition-all duration-300 hover:border-border",
												children: [
													(0, t.jsxs)("button", {
														onClick: () => {
															o(e === a ? null : a)
														},
														className:
															"flex w-full items-center justify-between p-6 text-left",
														"aria-expanded": e === a,
														children: [
															(0, t.jsx)("h3", {
																className: "text-lg font-medium text-foreground/90",
																children: i.question,
															}),
															(0, t.jsx)(r.ChevronDown, {
																className: (0, s.cn)(
																	"h-5 w-5 text-muted-foreground transition-transform duration-200",
																	e === a ? "rotate-180" : "",
																),
															}),
														],
													}),
													(0, t.jsx)("div", {
														className: (0, s.cn)(
															"overflow-hidden transition-all duration-300 ease-in-out",
															e === a ? "max-h-96 pb-6" : "max-h-0",
														),
														children: (0, t.jsx)("div", {
															className: "px-6 text-muted-foreground",
															children: i.answer,
														}),
													}),
												],
											}),
										},
										a,
									),
								),
							}),
						}),
					],
				}),
			})
		}
		e.s(["FAQSection", () => l])
	},
	78443,
	(e) => {
		"use strict"
		let t = (0, e.i(21387).default)("users-round", [
			["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
			["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
			["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }],
		])
		e.s(["Users2", () => t], 78443)
	},
	80391,
	(e) => {
		"use strict"
		var t = e.i(8026),
			i = e.i(66904),
			n = e.i(21387)
		let r = (0, n.default)("shield", [
			[
				"path",
				{
					d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
					key: "oel41y",
				},
			],
		])
		var s = e.i(78443)
		let o = (0, n.default)("replace-all", [
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
			a = (0, n.default)("keyboard", [
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
			l = (0, n.default)("check-check", [
				["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
				["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }],
			])
		var u = e.i(93702)
		let d = (0, n.default)("boxes", [
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
			c = (0, n.default)("text-search", [
				["path", { d: "M21 5H3", key: "1fi0y6" }],
				["path", { d: "M10 12H3", key: "1ulcyk" }],
				["path", { d: "M10 19H3", key: "108z41" }],
				["circle", { cx: "17", cy: "15", r: "3", key: "1upz2a" }],
				["path", { d: "m21 19-1.9-1.9", key: "dwi7p8" }],
			])
		var h = e.i(45438)
		let p = [
			{
				icon: s.Users2,
				title: "Specialized modes",
				description:
					"Planning, Architecture, Debugging and beyond: Roo's modes stay on-task and deliver. They even know when to hand off work to other modes. Create your own or download from the marketplace.",
			},
			{
				icon: o,
				title: "Model-agnostic",
				description:
					"Use the Roo Code cloud Provider, bring your own provider key or even run local inference — no markup, lock-in, no restrictions.",
				logos: ["Anthropic", "OpenAI", "Gemini", "Grok", "Qwen", "Kimi", "Mistral", "Ollama"],
			},
			{
				icon: l,
				title: "Granular auto-approval",
				description:
					"Control each action and make Roo as autonomous as you want as you build confidence. Or go BRRR and let it rip.",
			},
			{
				icon: d,
				title: "Large task coordination",
				description:
					"Orchestrator mode handles large tasks by coordinating tasks for other agents, running for hours and delivering.",
			},
			{
				icon: c,
				title: "Performant with large codebases",
				description: "Configurable integrated semantic search for quicker retrieval in large codebases.",
			},
			{
				icon: a,
				title: "Highly customizable",
				description:
					"Fine-tune settings for Roo to work for you, like inference context, model properties, slash commands and more. Most settings can be global or serialized in your repository.",
			},
			{
				icon: u.GitPullRequest,
				title: "Proudly open source",
				description:
					"Community-driven and fully auditable: no throttling or surprises about what's happening behind the scenes.",
			},
			{
				icon: r,
				title: "Secure and private by design",
				description:
					"Client-only architecture means no code leaves your machine unless you say so. SOC 2 Type II compliant.",
			},
		]
		function m() {
			return (0, t.jsxs)("section", {
				className: "relative overflow-hidden border-t border-border py-32",
				children: [
					(0, t.jsx)(i.motion.div, {
						className: "absolute inset-0",
						initial: "hidden",
						whileInView: "visible",
						viewport: { once: !0 },
						variants: {
							hidden: { opacity: 0 },
							visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
						},
						children: (0, t.jsx)("div", {
							className: "absolute inset-y-0 left-1/2 h-full w-full max-w-[1200px] -translate-x-1/2",
							children: (0, t.jsx)("div", {
								className:
									"absolute left-1/2 top-1/2 h-[800px] w-full -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-blue-500/10 dark:bg-blue-700/30 blur-[120px]",
							}),
						}),
					}),
					(0, t.jsxs)("div", {
						className: "container relative z-10 mx-auto px-4 sm:px-6 lg:px-8",
						children: [
							(0, t.jsx)("div", {
								className: "mx-auto mb-12 md:mb-24 max-w-4xl text-center",
								children: (0, t.jsxs)(i.motion.div, {
									initial: { opacity: 0, y: 20 },
									whileInView: { opacity: 1, y: 0 },
									viewport: { once: !0 },
									transition: { duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] },
									children: [
										(0, t.jsx)("h2", {
											className: "text-4xl font-bold tracking-tight sm:text-5xl",
											children: "Power and flexibility to get stuff done.",
										}),
										(0, t.jsx)("p", {
											className: "mt-6 text-lg text-muted-foreground",
											children:
												"The features you need to build, debug and ship faster – without compromising quality.",
										}),
									],
								}),
							}),
							(0, t.jsx)(i.motion.div, {
								className: "relative mx-auto md:max-w-[1200px]",
								variants: {
									hidden: { opacity: 0 },
									visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
								},
								initial: "hidden",
								whileInView: "visible",
								viewport: { once: !0 },
								children: (0, t.jsx)("ul", {
									className:
										"grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8",
									children: p.map((e, i) => {
										let n = e.icon
										return (0, t.jsxs)(
											"li",
											{
												className:
													"relative h-full border border-border rounded-2xl bg-background p-8 transition-all duration-300",
												children: [
													(0, t.jsx)(n, { className: "size-6 text-foreground/80" }),
													(0, t.jsx)("h3", {
														className: "mb-3 mt-3 text-xl font-semibold text-foreground",
														children: e.title,
													}),
													(0, t.jsx)("p", {
														className: "leading-relaxed font-light text-muted-foreground",
														children: e.description,
													}),
													e.logos &&
														(0, t.jsx)("div", {
															className: "mt-4 flex flex-wrap items-center gap-4",
															children: e.logos.map((e) =>
																(0, t.jsx)(
																	h.default,
																	{
																		width: 20,
																		height: 20,
																		className:
																			"w-5 h-5 overflow-clip opacity-50 dark:invert",
																		src: `/logos/${e.toLowerCase()}.svg`,
																		alt: `${e} Logo`,
																	},
																	e,
																),
															),
														}),
												],
											},
											i,
										)
									}),
								}),
							}),
						],
					}),
				],
			})
		}
		e.s(["Features", () => m, "features", 0, p], 80391)
	},
	34531,
	(e) => {
		"use strict"
		var t = e.i(8026),
			i = e.i(98807),
			n = e.i(21862),
			r = e.i(66904)
		function s({ downloads: e }) {
			return (0, t.jsxs)("section", {
				className:
					"relative overflow-hidden border-t-2 border-border bg-gradient-to-b from-background via-background/95 to-background dark:from-background dark:via-background/98 dark:to-background py-20 sm:py-28 lg:py-36",
				children: [
					(0, t.jsxs)(r.motion.div, {
						className: "absolute inset-0",
						initial: "hidden",
						whileInView: "visible",
						viewport: { once: !0 },
						variants: {
							hidden: { opacity: 0 },
							visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
						},
						children: [
							(0, t.jsx)("div", {
								className:
									"absolute inset-0 bg-gradient-to-b from-blue-500/5 via-cyan-500/5 to-purple-500/5 dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-purple-500/10",
							}),
							(0, t.jsx)("div", {
								className: "relative mx-auto max-w-[1200px]",
								children: (0, t.jsx)("div", {
									className:
										"absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 blur-[100px] dark:from-blue-500/30 dark:via-cyan-500/30 dark:to-purple-500/30",
								}),
							}),
						],
					}),
					(0, t.jsx)("div", {
						className: "container relative z-10 mx-auto px-4 sm:px-6 lg:px-8",
						children: (0, t.jsx)("div", {
							className: "mx-auto max-w-4xl",
							children: (0, t.jsxs)("div", {
								className:
									"relative rounded-3xl border border-border/50 bg-background/60 p-8 shadow-2xl backdrop-blur-xl dark:border-border/30 dark:bg-background/40 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:p-12 lg:p-16",
								children: [
									(0, t.jsx)("div", {
										className:
											"absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10",
									}),
									(0, t.jsxs)("div", {
										className: "relative text-center",
										children: [
											(0, t.jsx)("h2", {
												className:
													"text-3xl font-bold tracking-tight text-foreground sm:text-5xl",
												children: "Install Roo Code now",
											}),
											(0, t.jsxs)("p", {
												className: "mt-6 text-lg text-muted-foreground",
												children: [
													"Install from the VS Code Marketplace or the CLI in minutes, then bring your own AI model.",
													(0, t.jsx)("br", {}),
													"Roo Code is also compatible with all VSCode forks.",
												],
											}),
											(0, t.jsxs)("div", {
												className: "mt-12 flex flex-col items-center justify-center gap-6",
												children: [
													(0, t.jsxs)(n.default, {
														href: "https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline",
														target: "_blank",
														className:
															"group relative inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-cyan-700 hover:shadow-xl hover:shadow-blue-500/25 dark:from-blue-500 dark:to-cyan-500 dark:hover:from-blue-600 dark:hover:to-cyan-600 sm:w-auto sm:px-8 sm:text-xl",
														children: [
															(0, t.jsx)("div", {
																className:
																	"absolute -inset-px rounded-xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 opacity-0 blur transition-opacity duration-500 group-hover:opacity-70",
															}),
															(0, t.jsxs)("div", {
																className:
																	"relative flex flex-col md:flex-row items-center md:gap-3",
																children: [
																	(0, t.jsx)(i.VscVscode, {
																		className: "h-6 w-6 shrink-0",
																	}),
																	(0, t.jsxs)("span", {
																		className:
																			"flex flex-col md:flex-row items-center md:gap-2",
																		children: [
																			(0, t.jsx)("span", {
																				children: "From VS Code Marketplace",
																			}),
																			null !== e &&
																				(0, t.jsxs)(t.Fragment, {
																					children: [
																						(0, t.jsx)("span", {
																							className:
																								"font-black opacity-60 hidden md:inline",
																							children: "·",
																						}),
																						(0, t.jsxs)("span", {
																							className: "opacity-90",
																							children: [e, " Downloads"],
																						}),
																					],
																				}),
																		],
																	}),
																],
															}),
														],
													}),
													(0, t.jsxs)("div", {
														className: "group relative w-full max-w-xl",
														children: [
															(0, t.jsx)("div", {
																className:
																	"absolute -inset-px rounded-xl bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-purple-500/50 opacity-30 blur-sm transition-all duration-500 group-hover:opacity-60 dark:opacity-40 dark:group-hover:opacity-70",
															}),
															(0, t.jsxs)("div", {
																className:
																	"relative overflow-hidden rounded-xl border border-border bg-background/80 shadow-lg backdrop-blur-xl transition-all duration-500 ease-out group-hover:border-blue-500/50 group-hover:shadow-xl group-hover:shadow-blue-500/10 dark:border-border/50 dark:bg-background/60 dark:group-hover:border-blue-400/50",
																children: [
																	(0, t.jsx)("div", {
																		className:
																			"border-b border-border/50 bg-muted/30 px-4 py-3 dark:bg-muted/20",
																		children: (0, t.jsx)("div", {
																			className:
																				"text-sm font-medium text-foreground",
																			children: "or via CLI",
																		}),
																	}),
																	(0, t.jsx)("div", {
																		className:
																			"overflow-x-auto bg-background/50 dark:bg-background/30",
																		children: (0, t.jsx)("pre", {
																			className: "p-4",
																			children: (0, t.jsx)("code", {
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
		e.s(["InstallSection", () => s])
	},
	91686,
	(e) => {
		"use strict"
		let t = (0, e.i(21387).default)("chevron-right", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]])
		e.s(["ChevronRight", () => t], 91686)
	},
	1044,
	(e) => {
		"use strict"
		var t = e.i(8026),
			i = e.i(10008),
			n = e.i(66904)
		function r(e) {
			return "[object Object]" === Object.prototype.toString.call(e) || Array.isArray(e)
		}
		function s(e, t) {
			let i = Object.keys(e),
				n = Object.keys(t)
			return (
				i.length === n.length &&
				JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) &&
				i.every((i) => {
					let n = e[i],
						o = t[i]
					return "function" == typeof n ? `${n}` == `${o}` : r(n) && r(o) ? s(n, o) : n === o
				})
			)
		}
		function o(e) {
			return e
				.concat()
				.sort((e, t) => (e.name > t.name ? 1 : -1))
				.map((e) => e.options)
		}
		function a(e) {
			return "number" == typeof e
		}
		function l(e) {
			return "string" == typeof e
		}
		function u(e) {
			return "boolean" == typeof e
		}
		function d(e) {
			return "[object Object]" === Object.prototype.toString.call(e)
		}
		function c(e) {
			return Math.abs(e)
		}
		function h(e) {
			return Math.sign(e)
		}
		function p(e) {
			return y(e).map(Number)
		}
		function m(e) {
			return e[f(e)]
		}
		function f(e) {
			return Math.max(0, e.length - 1)
		}
		function g(e, t = 0) {
			return Array.from(Array(e), (e, i) => t + i)
		}
		function y(e) {
			return Object.keys(e)
		}
		function v(e, t) {
			return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
		}
		function x() {
			let e = [],
				t = {
					add: function (i, n, r, s = { passive: !0 }) {
						let o
						return (
							"addEventListener" in i
								? (i.addEventListener(n, r, s), (o = () => i.removeEventListener(n, r, s)))
								: (i.addListener(r), (o = () => i.removeListener(r))),
							e.push(o),
							t
						)
					},
					clear: function () {
						e = e.filter((e) => e())
					},
				}
			return t
		}
		function b(e = 0, t = 0) {
			let i = c(e - t)
			function n(i) {
				return i < e || i > t
			}
			return {
				length: i,
				max: t,
				min: e,
				constrain: function (i) {
					return n(i) ? (i < e ? e : t) : i
				},
				reachedAny: n,
				reachedMax: function (e) {
					return e > t
				},
				reachedMin: function (t) {
					return t < e
				},
				removeOffset: function (e) {
					return i ? e - i * Math.ceil((e - t) / i) : e
				},
			}
		}
		function w(e) {
			let t = e
			function i(e) {
				return a(e) ? e : e.get()
			}
			return {
				get: function () {
					return t
				},
				set: function (e) {
					t = i(e)
				},
				add: function (e) {
					t += i(e)
				},
				subtract: function (e) {
					t -= i(e)
				},
			}
		}
		function k(e, t) {
			let i =
					"x" === e.scroll
						? function (e) {
								return `translate3d(${e}px,0px,0px)`
							}
						: function (e) {
								return `translate3d(0px,${e}px,0px)`
							},
				n = t.style,
				r = null,
				s = !1
			return {
				clear: function () {
					!s && ((n.transform = ""), t.getAttribute("style") || t.removeAttribute("style"))
				},
				to: function (t) {
					if (s) return
					let o = Math.round(100 * e.direction(t)) / 100
					o !== r && ((n.transform = i(o)), (r = o))
				},
				toggleActive: function (e) {
					s = !e
				},
			}
		}
		let S = {
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
		function T(e, t, i) {
			let n,
				r,
				s,
				o,
				P,
				C,
				M,
				A,
				j = e.ownerDocument,
				E = j.defaultView,
				R = (function (e) {
					function t(e, t) {
						return (function e(t, i) {
							return [t, i].reduce(
								(t, i) => (
									y(i).forEach((n) => {
										let r = t[n],
											s = i[n],
											o = d(r) && d(s)
										t[n] = o ? e(r, s) : s
									}),
									t
								),
								{},
							)
						})(e, t || {})
					}
					return {
						mergeOptions: t,
						optionsAtMedia: function (i) {
							let n = i.breakpoints || {},
								r = y(n)
									.filter((t) => e.matchMedia(t).matches)
									.map((e) => n[e])
									.reduce((e, i) => t(e, i), {})
							return t(i, r)
						},
						optionsMediaQueries: function (t) {
							return t
								.map((e) => y(e.breakpoints || {}))
								.reduce((e, t) => e.concat(t), [])
								.map(e.matchMedia)
						},
					}
				})(E),
				V =
					((A = []),
					{
						init: function (e, t) {
							return (
								(A = t.filter(({ options: e }) => !1 !== R.optionsAtMedia(e).active)).forEach((t) =>
									t.init(e, R),
								),
								t.reduce((e, t) => Object.assign(e, { [t.name]: t }), {})
							)
						},
						destroy: function () {
							A = A.filter((e) => e.destroy())
						},
					}),
				N = x(),
				D =
					((r = {}),
					(s = {
						init: function (e) {
							n = e
						},
						emit: function (e) {
							return (r[e] || []).forEach((t) => t(n, e)), s
						},
						off: function (e, t) {
							return (r[e] = (r[e] || []).filter((e) => e !== t)), s
						},
						on: function (e, t) {
							return (r[e] = (r[e] || []).concat([t])), s
						},
						clear: function () {
							r = {}
						},
					})),
				{ mergeOptions: I, optionsAtMedia: L, optionsMediaQueries: F } = R,
				{ on: O, off: B, emit: z } = D,
				U = !1,
				$ = I(S, T.globalOptions),
				W = I($),
				q = []
			function H(t, i) {
				U ||
					((W = L(($ = I($, t)))),
					(q = i || q),
					(function () {
						let { container: t, slides: i } = W
						C = (l(t) ? e.querySelector(t) : t) || e.children[0]
						let n = l(i) ? C.querySelectorAll(i) : i
						M = [].slice.call(n || C.children)
					})(),
					(o = (function t(i) {
						let n = (function (e, t, i, n, r, s, o) {
							var d, S
							let T,
								P,
								C,
								M,
								A,
								j,
								E,
								R,
								V,
								N,
								D,
								I,
								L,
								F,
								{
									align: O,
									axis: B,
									direction: z,
									startIndex: U,
									loop: $,
									duration: W,
									dragFree: q,
									dragThreshold: H,
									inViewThreshold: Y,
									slidesToScroll: X,
									skipSnaps: G,
									containScroll: _,
									watchResize: K,
									watchSlides: Z,
									watchDrag: J,
									watchFocus: Q,
								} = s,
								ee = {
									measure: function (e) {
										let { offsetTop: t, offsetLeft: i, offsetWidth: n, offsetHeight: r } = e
										return { top: t, right: i + n, bottom: t + r, left: i, width: n, height: r }
									},
								},
								et = ee.measure(t),
								ei = i.map(ee.measure),
								en =
									((P = "rtl" === z),
									(M = (C = "y" === B) || !P ? 1 : -1),
									(A = C ? "top" : P ? "right" : "left"),
									(j = C ? "bottom" : P ? "left" : "right"),
									{
										scroll: C ? "y" : "x",
										cross: C ? "x" : "y",
										startEdge: A,
										endEdge: j,
										measureSize: function (e) {
											let { height: t, width: i } = e
											return C ? t : i
										},
										direction: function (e) {
											return e * M
										},
									}),
								er = en.measureSize(et),
								es = {
									measure: function (e) {
										return (e / 100) * er
									},
								},
								eo =
									((d = O),
									(S = er),
									(T = {
										start: function () {
											return 0
										},
										center: function (e) {
											return (S - e) / 2
										},
										end: function (e) {
											return S - e
										},
									}),
									{
										measure: function (e, t) {
											return l(d) ? T[d](e) : d(S, e, t)
										},
									}),
								ea = !$ && !!_,
								{
									slideSizes: el,
									slideSizesWithGaps: eu,
									startGap: ed,
									endGap: ec,
								} = (function (e, t, i, n, r, s) {
									let { measureSize: o, startEdge: a, endEdge: l } = e,
										u = i[0] && r,
										d = (function () {
											if (!u) return 0
											let e = i[0]
											return c(t[a] - e[a])
										})(),
										h = u
											? parseFloat(s.getComputedStyle(m(n)).getPropertyValue(`margin-${l}`))
											: 0,
										p = i.map(o),
										g = i
											.map((e, t, i) => {
												let n = t === f(i)
												return t ? (n ? p[t] + h : i[t + 1][a] - e[a]) : p[t] + d
											})
											.map(c)
									return { slideSizes: p, slideSizesWithGaps: g, startGap: d, endGap: h }
								})(en, et, ei, i, $ || !!_, r),
								eh = (function (e, t, i, n, r, s, o, l, u) {
									let { startEdge: d, endEdge: h, direction: g } = e,
										y = a(i)
									return {
										groupSlides: function (e) {
											return y
												? p(e)
														.filter((e) => e % i == 0)
														.map((t) => e.slice(t, t + i))
												: e.length
													? p(e)
															.reduce((i, a, u) => {
																let p = m(i) || 0,
																	y = a === f(e),
																	v = r[d] - s[p][d],
																	x = r[d] - s[a][h],
																	b = n || 0 !== p ? 0 : g(o),
																	w = c(x - (!n && y ? g(l) : 0) - (v + b))
																return (
																	u && w > t + 2 && i.push(a),
																	y && i.push(e.length),
																	i
																)
															}, [])
															.map((t, i, n) => {
																let r = Math.max(n[i - 1] || 0)
																return e.slice(r, t)
															})
													: []
										},
									}
								})(en, er, X, $, et, ei, ed, ec, 0),
								{ snaps: ep, snapsAligned: em } = (function (e, t, i, n, r) {
									let { startEdge: s, endEdge: o } = e,
										{ groupSlides: a } = r,
										l = a(n)
											.map((e) => m(e)[o] - e[0][s])
											.map(c)
											.map(t.measure),
										u = n.map((e) => i[s] - e[s]).map((e) => -c(e)),
										d = a(u)
											.map((e) => e[0])
											.map((e, t) => e + l[t])
									return { snaps: u, snapsAligned: d }
								})(en, eo, et, ei, eh),
								ef = -m(ep) + m(eu),
								{ snapsContained: eg, scrollContainLimit: ey } = (function (e, t, i, n, r) {
									let s,
										o,
										a = b(-t + e, 0),
										l = i
											.map((e, t) => {
												let { min: n, max: r } = a,
													s = a.constrain(e),
													o = t === f(i)
												return t
													? o ||
														(function (e, t) {
															return 1 >= c(e - t)
														})(n, s)
														? n
														: (function (e, t) {
																	return 1 >= c(e - t)
															  })(r, s)
															? r
															: s
													: r
											})
											.map((e) => parseFloat(e.toFixed(3))),
										u = ((s = l[0]), (o = m(l)), b(l.lastIndexOf(s), l.indexOf(o) + 1))
									return {
										snapsContained: (function () {
											if (t <= e + 2) return [a.max]
											if ("keepSnaps" === n) return l
											let { min: i, max: r } = u
											return l.slice(i, r)
										})(),
										scrollContainLimit: u,
									}
								})(er, ef, em, _, 0),
								ev = ea ? eg : em,
								{ limit: ex } = ((E = ev[0]), { limit: b($ ? E - ef : m(ev), E) }),
								eb = (function e(t, i, n) {
									let { constrain: r } = b(0, t),
										s = t + 1,
										o = a(i)
									function a(e) {
										return n ? c((s + e) % s) : r(e)
									}
									function l() {
										return e(t, o, n)
									}
									let u = {
										get: function () {
											return o
										},
										set: function (e) {
											return (o = a(e)), u
										},
										add: function (e) {
											return l().set(o + e)
										},
										clone: l,
									}
									return u
								})(f(ev), U, $),
								ew = eb.clone(),
								ek = p(i),
								eS = (function (e, t, i, n) {
									let r = x(),
										s = 1e3 / 60,
										o = null,
										a = 0,
										l = 0
									function u(e) {
										if (!l) return
										o || ((o = e), i(), i())
										let r = e - o
										for (o = e, a += r; a >= s; ) i(), (a -= s)
										n(a / s), l && (l = t.requestAnimationFrame(u))
									}
									function d() {
										t.cancelAnimationFrame(l), (o = null), (a = 0), (l = 0)
									}
									return {
										init: function () {
											r.add(e, "visibilitychange", () => {
												e.hidden && ((o = null), (a = 0))
											})
										},
										destroy: function () {
											d(), r.clear()
										},
										start: function () {
											l || (l = t.requestAnimationFrame(u))
										},
										stop: d,
										update: i,
										render: n,
									}
								})(
									n,
									r,
									() =>
										(({ dragHandler: e, scrollBody: t, scrollBounds: i, options: { loop: n } }) => {
											n || i.constrain(e.pointerDown()), t.seek()
										})(eF),
									(e) =>
										((
											{
												scrollBody: e,
												translate: t,
												location: i,
												offsetLocation: n,
												previousLocation: r,
												scrollLooper: s,
												slideLooper: o,
												dragHandler: a,
												animation: l,
												eventHandler: u,
												scrollBounds: d,
												options: { loop: c },
											},
											h,
										) => {
											let p = e.settled(),
												m = !d.shouldConstrain(),
												f = c ? p : p && m,
												g = f && !a.pointerDown()
											g && l.stop()
											let y = i.get() * h + r.get() * (1 - h)
											n.set(y),
												c && (s.loop(e.direction()), o.loop()),
												t.to(n.get()),
												g && u.emit("settle"),
												f || u.emit("scroll")
										})(eF, e),
								),
								eT = ev[eb.get()],
								eP = w(eT),
								eC = w(eT),
								eM = w(eT),
								eA = w(eT),
								ej = (function (e, t, i, n, r, s) {
									let o = 0,
										a = 0,
										l = r,
										u = 0.68,
										d = e.get(),
										p = 0
									function m(e) {
										return (l = e), g
									}
									function f(e) {
										return (u = e), g
									}
									let g = {
										direction: function () {
											return a
										},
										duration: function () {
											return l
										},
										velocity: function () {
											return o
										},
										seek: function () {
											let t = n.get() - e.get(),
												r = 0
											return (
												l
													? (i.set(e),
														(o += t / l),
														(o *= u),
														(d += o),
														e.add(o),
														(r = d - p))
													: ((o = 0), i.set(n), e.set(n), (r = t)),
												(a = h(r)),
												(p = d),
												g
											)
										},
										settled: function () {
											return 0.001 > c(n.get() - t.get())
										},
										useBaseFriction: function () {
											return f(0.68)
										},
										useBaseDuration: function () {
											return m(r)
										},
										useFriction: f,
										useDuration: m,
									}
									return g
								})(eP, eM, eC, eA, W, 0),
								eE = (function (e, t, i, n, r) {
									let { reachedAny: s, removeOffset: o, constrain: a } = n
									function l(e) {
										return e.concat().sort((e, t) => c(e) - c(t))[0]
									}
									function u(t, n) {
										let r = [t, t + i, t - i]
										if (!e) return t
										if (!n) return l(r)
										let s = r.filter((e) => h(e) === n)
										return s.length ? l(s) : m(r) - i
									}
									return {
										byDistance: function (i, n) {
											let l = r.get() + i,
												{ index: d, distance: h } = (function (i) {
													let n = e ? o(i) : a(i),
														{ index: r } = t
															.map((e, t) => ({ diff: u(e - n, 0), index: t }))
															.sort((e, t) => c(e.diff) - c(t.diff))[0]
													return { index: r, distance: n }
												})(l),
												p = !e && s(l)
											if (!n || p) return { index: d, distance: i }
											let m = i + u(t[d] - h, 0)
											return { index: d, distance: m }
										},
										byIndex: function (e, i) {
											let n = u(t[e] - r.get(), i)
											return { index: e, distance: n }
										},
										shortcut: u,
									}
								})($, ev, ef, ex, eA),
								eR = (function (e, t, i, n, r, s, o) {
									function a(r) {
										let a = r.distance,
											l = r.index !== t.get()
										s.add(a),
											a && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())),
											l && (i.set(t.get()), t.set(r.index), o.emit("select"))
									}
									return {
										distance: function (e, t) {
											a(r.byDistance(e, t))
										},
										index: function (e, i) {
											let n = t.clone().set(e)
											a(r.byIndex(n.get(), i))
										},
									}
								})(eS, eb, ew, ej, eE, eA, o),
								eV = (function (e) {
									let { max: t, length: i } = e
									return {
										get: function (e) {
											return i ? -((e - t) / i) : 0
										},
									}
								})(ex),
								eN = x(),
								eD =
									((V = {}),
									(N = null),
									(D = null),
									(I = !1),
									{
										init: function () {
											;(R = new IntersectionObserver(
												(e) => {
													I ||
														(e.forEach((e) => {
															V[i.indexOf(e.target)] = e
														}),
														(N = null),
														(D = null),
														o.emit("slidesInView"))
												},
												{ root: t.parentElement, threshold: Y },
											)),
												i.forEach((e) => R.observe(e))
										},
										destroy: function () {
											R && R.disconnect(), (I = !0)
										},
										get: function (e = !0) {
											if (e && N) return N
											if (!e && D) return D
											let t = y(V).reduce((t, i) => {
												let n = parseInt(i),
													{ isIntersecting: r } = V[n]
												return ((e && r) || (!e && !r)) && t.push(n), t
											}, [])
											return e && (N = t), e || (D = t), t
										},
									}),
								{ slideRegistry: eI } = (function (e, t, i, n, r, s) {
									let o,
										{ groupSlides: a } = r,
										{ min: l, max: u } = n
									return {
										slideRegistry:
											((o = a(s)),
											1 === i.length
												? [s]
												: e && "keepSnaps" !== t
													? o.slice(l, u).map((e, t, i) => {
															let n = t === f(i)
															return t
																? n
																	? g(f(s) - m(i)[0] + 1, m(i)[0])
																	: e
																: g(m(i[0]) + 1)
														})
													: o),
									}
								})(ea, _, ev, ey, eh, ek),
								eL = (function (e, t, i, n, r, s, o, l) {
									let d = { passive: !0, capture: !0 },
										c = 0
									function h(e) {
										"Tab" === e.code && (c = new Date().getTime())
									}
									return {
										init: function (p) {
											l &&
												(s.add(document, "keydown", h, !1),
												t.forEach((t, h) => {
													s.add(
														t,
														"focus",
														(t) => {
															;(u(l) || l(p, t)) &&
																(function (t) {
																	if (new Date().getTime() - c > 10) return
																	o.emit("slideFocusStart"), (e.scrollLeft = 0)
																	let s = i.findIndex((e) => e.includes(t))
																	a(s) &&
																		(r.useDuration(0),
																		n.index(s, 0),
																		o.emit("slideFocus"))
																})(h)
														},
														d,
													)
												}))
										},
									}
								})(e, i, eI, eR, ej, eN, o, Q),
								eF = {
									ownerDocument: n,
									ownerWindow: r,
									eventHandler: o,
									containerRect: et,
									slideRects: ei,
									animation: eS,
									axis: en,
									dragHandler: (function (e, t, i, n, r, s, o, a, l, d, p, m, f, g, y, w, k, S, T) {
										let { cross: P, direction: C } = e,
											M = ["INPUT", "SELECT", "TEXTAREA"],
											A = { passive: !1 },
											j = x(),
											E = x(),
											R = b(50, 225).constrain(g.measure(20)),
											V = { mouse: 300, touch: 400 },
											N = { mouse: 500, touch: 600 },
											D = y ? 43 : 25,
											I = !1,
											L = 0,
											F = 0,
											O = !1,
											B = !1,
											z = !1,
											U = !1
										function $(e) {
											if (!v(e, n) && e.touches.length >= 2) return W(e)
											let t = s.readPoint(e),
												i = s.readPoint(e, P),
												o = c(t - L),
												l = c(i - F)
											if (!B && !U && (!e.cancelable || !(B = o > l))) return W(e)
											let u = s.pointerMove(e)
											o > w && (z = !0),
												d.useFriction(0.3).useDuration(0.75),
												a.start(),
												r.add(C(u)),
												e.preventDefault()
										}
										function W(e) {
											var t
											let i,
												n,
												r = p.byDistance(0, !1).index !== m.get(),
												o = s.pointerUp(e) * (y ? N : V)[U ? "mouse" : "touch"],
												a =
													((t = C(o)),
													(i = m.add(-1 * h(t))),
													(n = p.byDistance(t, !y).distance),
													y || c(t) < R
														? n
														: k && r
															? 0.5 * n
															: p.byIndex(i.get(), 0).distance),
												u = (function (e, t) {
													var i, n
													if (0 === e || 0 === t || c(e) <= c(t)) return 0
													let r = ((i = c(e)), (n = c(t)), c(i - n))
													return c(r / e)
												})(o, a)
											;(B = !1),
												(O = !1),
												E.clear(),
												d.useDuration(D - 10 * u).useFriction(0.68 + u / 50),
												l.distance(a, !y),
												(U = !1),
												f.emit("pointerUp")
										}
										function q(e) {
											z && (e.stopPropagation(), e.preventDefault(), (z = !1))
										}
										return {
											init: function (e) {
												T &&
													j
														.add(t, "dragstart", (e) => e.preventDefault(), A)
														.add(t, "touchmove", () => void 0, A)
														.add(t, "touchend", () => void 0)
														.add(t, "touchstart", a)
														.add(t, "mousedown", a)
														.add(t, "touchcancel", W)
														.add(t, "contextmenu", W)
														.add(t, "click", q, !0)
												function a(a) {
													;(u(T) || T(e, a)) &&
														(function (e) {
															let a,
																l = v(e, n)
															if (
																((U = l),
																(z = y && l && !e.buttons && I),
																(I = c(r.get() - o.get()) >= 2),
																!l || 0 === e.button) &&
																((a = e.target.nodeName || ""), !M.includes(a))
															) {
																let n
																;(O = !0),
																	s.pointerDown(e),
																	d.useFriction(0).useDuration(0),
																	r.set(o),
																	(n = U ? i : t),
																	E.add(n, "touchmove", $, A)
																		.add(n, "touchend", W)
																		.add(n, "mousemove", $, A)
																		.add(n, "mouseup", W),
																	(L = s.readPoint(e)),
																	(F = s.readPoint(e, P)),
																	f.emit("pointerDown")
															}
														})(a)
												}
											},
											destroy: function () {
												j.clear(), E.clear()
											},
											pointerDown: function () {
												return O
											},
										}
									})(
										en,
										e,
										n,
										r,
										eA,
										(function (e, t) {
											let i, n
											function r(e) {
												return e.timeStamp
											}
											function s(i, n) {
												let r = n || e.scroll,
													s = `client${"x" === r ? "X" : "Y"}`
												return (v(i, t) ? i : i.touches[0])[s]
											}
											return {
												pointerDown: function (e) {
													return (i = e), (n = e), s(e)
												},
												pointerMove: function (e) {
													let t = s(e) - s(n),
														o = r(e) - r(i) > 170
													return (n = e), o && (i = e), t
												},
												pointerUp: function (e) {
													if (!i || !n) return 0
													let t = s(n) - s(i),
														o = r(e) - r(i),
														a = r(e) - r(n) > 170,
														l = t / o
													return o && !a && c(l) > 0.1 ? l : 0
												},
												readPoint: s,
											}
										})(en, r),
										eP,
										eS,
										eR,
										ej,
										eE,
										eb,
										o,
										es,
										q,
										H,
										G,
										0,
										J,
									),
									eventStore: eN,
									percentOfView: es,
									index: eb,
									indexPrevious: ew,
									limit: ex,
									location: eP,
									offsetLocation: eM,
									previousLocation: eC,
									options: s,
									resizeHandler: (function (e, t, i, n, r, s, o) {
										let a,
											l,
											d = [e].concat(n),
											h = [],
											p = !1
										function m(e) {
											return r.measureSize(o.measure(e))
										}
										return {
											init: function (r) {
												s &&
													((l = m(e)),
													(h = n.map(m)),
													(a = new ResizeObserver((i) => {
														;(u(s) || s(r, i)) &&
															(function (i) {
																for (let s of i) {
																	if (p) return
																	let i = s.target === e,
																		o = n.indexOf(s.target),
																		a = i ? l : h[o]
																	if (c(m(i ? e : n[o]) - a) >= 0.5) {
																		r.reInit(), t.emit("resize")
																		break
																	}
																}
															})(i)
													})),
													i.requestAnimationFrame(() => {
														d.forEach((e) => a.observe(e))
													}))
											},
											destroy: function () {
												;(p = !0), a && a.disconnect()
											},
										}
									})(t, o, r, i, en, K, ee),
									scrollBody: ej,
									scrollBounds: (function (e, t, i, n, r) {
										let s = r.measure(10),
											o = r.measure(50),
											a = b(0.1, 0.99),
											l = !1
										function u() {
											return !l && !!e.reachedAny(i.get()) && !!e.reachedAny(t.get())
										}
										return {
											shouldConstrain: u,
											constrain: function (r) {
												if (!u()) return
												let l = e.reachedMin(t.get()) ? "min" : "max",
													d = c(e[l] - t.get()),
													h = i.get() - t.get(),
													p = a.constrain(d / o)
												i.subtract(h * p),
													!r &&
														c(h) < s &&
														(i.set(e.constrain(i.get())),
														n.useDuration(25).useBaseFriction())
											},
											toggleActive: function (e) {
												l = !e
											},
										}
									})(ex, eM, eA, ej, es),
									scrollLooper: (function (e, t, i, n) {
										let { reachedMin: r, reachedMax: s } = b(t.min + 0.1, t.max + 0.1)
										return {
											loop: function (t) {
												if (!(1 === t ? s(i.get()) : -1 === t && r(i.get()))) return
												let o = -1 * t * e
												n.forEach((e) => e.add(o))
											},
										}
									})(ef, ex, eM, [eP, eM, eC, eA]),
									scrollProgress: eV,
									scrollSnapList: ev.map(eV.get),
									scrollSnaps: ev,
									scrollTarget: eE,
									scrollTo: eR,
									slideLooper: (function (e, t, i, n, r, s, o, a, l) {
										let u = p(r),
											d = p(r).reverse(),
											c = f(m(d, o[0]), i, !1).concat(f(m(u, t - o[0] - 1), -i, !0))
										function h(e, t) {
											return e.reduce((e, t) => e - r[t], t)
										}
										function m(e, t) {
											return e.reduce((e, i) => (h(e, t) > 0 ? e.concat([i]) : e), [])
										}
										function f(r, o, u) {
											let d = s.map((e, i) => ({
												start: e - n[i] + 0.5 + o,
												end: e + t - 0.5 + o,
											}))
											return r.map((t) => {
												let n = u ? 0 : -i,
													r = u ? i : 0,
													s = d[t][u ? "end" : "start"]
												return {
													index: t,
													loopPoint: s,
													slideLocation: w(-1),
													translate: k(e, l[t]),
													target: () => (a.get() > s ? n : r),
												}
											})
										}
										return {
											canLoop: function () {
												return c.every(
													({ index: e }) =>
														0.1 >=
														h(
															u.filter((t) => t !== e),
															t,
														),
												)
											},
											clear: function () {
												c.forEach((e) => e.translate.clear())
											},
											loop: function () {
												c.forEach((e) => {
													let { target: t, translate: i, slideLocation: n } = e,
														r = t()
													r !== n.get() && (i.to(r), n.set(r))
												})
											},
											loopPoints: c,
										}
									})(en, er, ef, el, eu, ep, ev, eM, i),
									slideFocus: eL,
									slidesHandler:
										((F = !1),
										{
											init: function (e) {
												Z &&
													(L = new MutationObserver((t) => {
														!F &&
															(u(Z) || Z(e, t)) &&
															(function (t) {
																for (let i of t)
																	if ("childList" === i.type) {
																		e.reInit(), o.emit("slidesChanged")
																		break
																	}
															})(t)
													})).observe(t, { childList: !0 })
											},
											destroy: function () {
												L && L.disconnect(), (F = !0)
											},
										}),
									slidesInView: eD,
									slideIndexes: ek,
									slideRegistry: eI,
									slidesToScroll: eh,
									target: eA,
									translate: k(en, t),
								}
							return eF
						})(e, C, M, j, E, i, D)
						return i.loop && !n.slideLooper.canLoop() ? t(Object.assign({}, i, { loop: !1 })) : n
					})(W)),
					F([$, ...q.map(({ options: e }) => e)]).forEach((e) => N.add(e, "change", Y)),
					W.active &&
						(o.translate.to(o.location.get()),
						o.animation.init(),
						o.slidesInView.init(),
						o.slideFocus.init(K),
						o.eventHandler.init(K),
						o.resizeHandler.init(K),
						o.slidesHandler.init(K),
						o.options.loop && o.slideLooper.loop(),
						C.offsetParent && M.length && o.dragHandler.init(K),
						(P = V.init(K, q))))
			}
			function Y(e, t) {
				let i = _()
				X(), H(I({ startIndex: i }, e), t), D.emit("reInit")
			}
			function X() {
				o.dragHandler.destroy(),
					o.eventStore.clear(),
					o.translate.clear(),
					o.slideLooper.clear(),
					o.resizeHandler.destroy(),
					o.slidesHandler.destroy(),
					o.slidesInView.destroy(),
					o.animation.destroy(),
					V.destroy(),
					N.clear()
			}
			function G(e, t, i) {
				W.active &&
					!U &&
					(o.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : W.duration), o.scrollTo.index(e, i || 0))
			}
			function _() {
				return o.index.get()
			}
			let K = {
				canScrollNext: function () {
					return o.index.add(1).get() !== _()
				},
				canScrollPrev: function () {
					return o.index.add(-1).get() !== _()
				},
				containerNode: function () {
					return C
				},
				internalEngine: function () {
					return o
				},
				destroy: function () {
					U || ((U = !0), N.clear(), X(), D.emit("destroy"), D.clear())
				},
				off: B,
				on: O,
				emit: z,
				plugins: function () {
					return P
				},
				previousScrollSnap: function () {
					return o.indexPrevious.get()
				},
				reInit: Y,
				rootNode: function () {
					return e
				},
				scrollNext: function (e) {
					G(o.index.add(1).get(), e, -1)
				},
				scrollPrev: function (e) {
					G(o.index.add(-1).get(), e, 1)
				},
				scrollProgress: function () {
					return o.scrollProgress.get(o.offsetLocation.get())
				},
				scrollSnapList: function () {
					return o.scrollSnapList
				},
				scrollTo: G,
				selectedScrollSnap: _,
				slideNodes: function () {
					return M
				},
				slidesInView: function () {
					return o.slidesInView.get()
				},
				slidesNotInView: function () {
					return o.slidesInView.get(!1)
				},
			}
			return H(t, i), setTimeout(() => D.emit("init"), 0), K
		}
		function P(e = {}, t = []) {
			let n = (0, i.useRef)(e),
				r = (0, i.useRef)(t),
				[a, l] = (0, i.useState)(),
				[u, d] = (0, i.useState)(),
				c = (0, i.useCallback)(() => {
					a && a.reInit(n.current, r.current)
				}, [a])
			return (
				(0, i.useEffect)(() => {
					s(n.current, e) || ((n.current = e), c())
				}, [e, c]),
				(0, i.useEffect)(() => {
					!(function (e, t) {
						if (e.length !== t.length) return !1
						let i = o(e),
							n = o(t)
						return i.every((e, t) => s(e, n[t]))
					})(r.current, t) && ((r.current = t), c())
				}, [t, c]),
				(0, i.useEffect)(() => {
					if ("u" > typeof window && window.document && window.document.createElement && u) {
						T.globalOptions = P.globalOptions
						let e = T(u, n.current, r.current)
						return l(e), () => e.destroy()
					}
					l(void 0)
				}, [u, l]),
				[d, a]
			)
		}
		;(T.globalOptions = void 0), (P.globalOptions = void 0)
		let C = {
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
		function M(e = {}) {
			let t,
				i,
				n,
				r,
				s = null,
				o = 0,
				a = !1,
				l = !1,
				u = !1,
				d = !1
			function c() {
				if (!n) {
					if (m()) {
						u = !0
						return
					}
					a || i.emit("autoplay:play"),
						(function () {
							let { ownerWindow: e } = i.internalEngine()
							e.clearTimeout(o),
								(o = e.setTimeout(x, r[i.selectedScrollSnap()])),
								(s = new Date().getTime()),
								i.emit("autoplay:timerset")
						})(),
						(a = !0)
				}
			}
			function h() {
				n ||
					(a && i.emit("autoplay:stop"),
					(function () {
						let { ownerWindow: e } = i.internalEngine()
						e.clearTimeout(o), (o = 0), (s = null), i.emit("autoplay:timerstopped")
					})(),
					(a = !1))
			}
			function p() {
				if (m()) return (u = a), h()
				u && c()
			}
			function m() {
				let { ownerDocument: e } = i.internalEngine()
				return "hidden" === e.visibilityState
			}
			function f() {
				l || h()
			}
			function g() {
				l || c()
			}
			function y() {
				;(l = !0), h()
			}
			function v() {
				;(l = !1), c()
			}
			function x() {
				let { index: e } = i.internalEngine(),
					n = e.clone().add(1).get(),
					r = i.scrollSnapList().length - 1,
					s = t.stopOnLastSnap && n === r
				if ((i.canScrollNext() ? i.scrollNext(d) : i.scrollTo(0, d), i.emit("autoplay:select"), s)) return h()
				c()
			}
			return {
				name: "autoplay",
				options: e,
				init: function (s, o) {
					var a, l, u, m
					let x, b
					i = s
					let { mergeOptions: w, optionsAtMedia: k } = o,
						S = w(C, M.globalOptions)
					if (((t = k(w(S, e))), i.scrollSnapList().length <= 1)) return
					;(d = t.jump),
						(n = !1),
						(a = i),
						(l = t.delay),
						(x = a.scrollSnapList()),
						(r = "number" == typeof l ? x.map(() => l) : l(x, a))
					let { eventStore: T, ownerDocument: P } = i.internalEngine(),
						A = !!i.internalEngine().options.watchDrag,
						j = ((u = i), (m = t.rootNode), (b = u.rootNode()), (m && m(b)) || b)
					T.add(P, "visibilitychange", p),
						A && i.on("pointerDown", f),
						A && !t.stopOnInteraction && i.on("pointerUp", g),
						t.stopOnMouseEnter && T.add(j, "mouseenter", y),
						t.stopOnMouseEnter && !t.stopOnInteraction && T.add(j, "mouseleave", v),
						t.stopOnFocusIn && i.on("slideFocusStart", h),
						t.stopOnFocusIn && !t.stopOnInteraction && T.add(i.containerNode(), "focusout", c),
						t.playOnInit && c()
				},
				destroy: function () {
					i.off("pointerDown", f).off("pointerUp", g).off("slideFocusStart", h), h(), (n = !0), (a = !1)
				},
				play: function (e) {
					void 0 !== e && (d = e), c()
				},
				stop: function () {
					a && h()
				},
				reset: function () {
					a && c()
				},
				isPlaying: function () {
					return a
				},
				timeUntilNext: function () {
					return s ? r[i.selectedScrollSnap()] - (new Date().getTime() - s) : null
				},
			}
		}
		M.globalOptions = void 0
		var A = e.i(21387)
		let j = (0, A.default)("chevron-left", [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]])
		var E = e.i(91686)
		let R = (0, A.default)("star", [
				[
					"path",
					{
						d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
						key: "r04s7s",
					},
				],
			]),
			V = [
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
		function N() {
			let e = (0, i.useRef)(null),
				[r, s] = P({ loop: !0, align: "center", skipSnaps: !1, containScroll: !1 }, [
					M({ playOnInit: !0, delay: 3500, stopOnInteraction: !1, stopOnMouseEnter: !0, stopOnFocusIn: !0 }),
				]),
				o = (0, i.useCallback)(() => {
					s && s.scrollPrev()
				}, [s]),
				a = (0, i.useCallback)(() => {
					s && s.scrollNext()
				}, [s])
			return (
				(0, i.useEffect)(() => {
					if (!s) return
					let e = s?.plugins()?.autoPlay
					if (!e) return
					let t = () => {
						;(e.isPlaying && e.isPlaying()) ||
							setTimeout(() => {
								e.play && e.play()
							}, 2e3)
					}
					return (
						s.on("pointerUp", t),
						() => {
							s.off("pointerUp", t)
						}
					)
				}, [s]),
				(0, t.jsxs)("section", {
					ref: e,
					className: "relative overflow-hidden border-t border-border py-32",
					children: [
						(0, t.jsx)("div", {
							className: "absolute inset-y-0 left-1/2 h-full w-full max-w-[1200px] -translate-x-1/2",
							children: (0, t.jsx)("div", {
								className:
									"absolute left-1/2 top-1/2 h-[400px] w-full -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-violet-500/10 dark:bg-violet-700/30 blur-[120px]",
							}),
						}),
						(0, t.jsxs)("div", {
							className: "container relative z-10 mx-auto px-4 sm:px-6 lg:px-8",
							children: [
								(0, t.jsxs)("div", {
									className: "mx-auto mb-8 md:max-w-2xl text-center",
									children: [
										(0, t.jsx)("h2", {
											className: "text-4xl font-bold tracking-tight sm:text-5xl",
											children: "More than 1 million people are shipping with Roo.",
										}),
										(0, t.jsx)("p", {
											className: "mt-6 text-lg text-muted-foreground",
											children: "And they have some great things to say.",
										}),
									],
								}),
								(0, t.jsxs)(n.motion.div, {
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
										(0, t.jsx)("button", {
											onClick: o,
											className:
												"absolute left-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border/50 bg-background/80 p-2 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:shadow-lg md:left-4 md:p-3 lg:left-8",
											"aria-label": "Previous testimonial",
											children: (0, t.jsx)(j, {
												className:
													"h-5 w-5 text-muted-foreground transition-colors hover:text-foreground md:h-6 md:w-6",
											}),
										}),
										(0, t.jsx)("button", {
											onClick: a,
											className:
												"absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border/50 bg-background/80 p-2 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:shadow-lg md:right-4 md:p-3 lg:right-8",
											"aria-label": "Next testimonial",
											children: (0, t.jsx)(E.ChevronRight, {
												className:
													"h-5 w-5 text-muted-foreground transition-colors hover:text-foreground md:h-6 md:w-6",
											}),
										}),
										(0, t.jsx)("div", {
											className:
												"hidden md:block absolute inset-y-0 left-0 z-10 w-[10%] bg-gradient-to-r from-background to-transparent pointer-events-none md:w-[15%]",
										}),
										(0, t.jsx)("div", {
											className:
												"hidden md:block absolute inset-y-0 right-0 z-10 w-[10%] bg-gradient-to-l from-background to-transparent pointer-events-none md:w-[15%]",
										}),
										(0, t.jsx)("div", {
											className: "overflow-hidden",
											ref: r,
											children: (0, t.jsx)("div", {
												className: "flex",
												children: V.map((e) =>
													(0, t.jsx)(
														"div",
														{
															className:
																"relative min-w-0 flex-[0_0_85%] px-2 md:flex-[0_0_70%] md:px-4 lg:flex-[0_0_30%]",
															children: (0, t.jsx)("div", {
																className: "group relative py-10 h-full",
																children: (0, t.jsx)("div", {
																	className:
																		"relative flex h-full flex-col rounded-2xl border border-border bg-background transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:border-border group-hover:bg-background/40 group-hover:shadow-xl dark:border-border/70 dark:bg-background/40 dark:group-hover:border-border dark:group-hover:bg-background/60 dark:group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]",
																	children: (0, t.jsxs)("div", {
																		className: "flex flex-1 flex-col p-4 md:p-6",
																		children: [
																			(0, t.jsx)("div", {
																				className: "flex-1",
																				children: (0, t.jsx)("p", {
																					className:
																						"relative text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80 dark:text-foreground/70 dark:group-hover:text-foreground/90",
																					children: e.quote,
																				}),
																			}),
																			(0, t.jsxs)("div", {
																				className: "relative mt-4 md:mt-6",
																				children: [
																					(0, t.jsx)("h3", {
																						className:
																							"font-medium text-foreground/90 transition-colors duration-300 dark:text-foreground",
																						children: e.name,
																					}),
																					(0, t.jsxs)("p", {
																						className:
																							"text-sm text-muted-foreground transition-colors duration-300 dark:text-muted-foreground/80",
																						children: [
																							"Reviewer" !== e.role &&
																								(0, t.jsxs)(
																									t.Fragment,
																									{
																										children: [
																											e.role,
																											" at ",
																											e.origin,
																										],
																									},
																								),
																							e.stars &&
																								(0, t.jsxs)("span", {
																									className:
																										"flex items-center mt-1",
																									children: [
																										" ",
																										Array.from(
																											{
																												length: e.stars,
																											},
																											(e, i) =>
																												(0,
																												t.jsx)(
																													R,
																													{
																														className:
																															"size-4 fill-violet-500",
																													},
																													i,
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
														e.name,
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
		e.s(["Testimonials", () => N, "testimonials", 0, V], 1044)
	},
	31282,
	(e) => {
		"use strict"
		e.i(53378)
		var t = e.i(8026),
			i = e.i(10008),
			n = e.i(5482),
			r = e.i(21798),
			s = e.i(49109),
			o = e.i(13502),
			a = e.i(82075),
			l = i,
			u = e.i(42614)
		function d(e, t) {
			if ("function" == typeof e) return e(t)
			null != e && (e.current = t)
		}
		class c extends l.Component {
			getSnapshotBeforeUpdate(e) {
				let t = this.props.childRef.current
				if (t && e.isPresent && !this.props.isPresent) {
					let e = t.offsetParent,
						i = ((0, a.isHTMLElement)(e) && e.offsetWidth) || 0,
						n = ((0, a.isHTMLElement)(e) && e.offsetHeight) || 0,
						r = this.props.sizeRef.current
					;(r.height = t.offsetHeight || 0),
						(r.width = t.offsetWidth || 0),
						(r.top = t.offsetTop),
						(r.left = t.offsetLeft),
						(r.right = i - r.width - r.left),
						(r.bottom = n - r.height - r.top)
				}
				return null
			}
			componentDidUpdate() {}
			render() {
				return this.props.children
			}
		}
		function h({ children: e, isPresent: n, anchorX: r, anchorY: s, root: o }) {
			let a = (0, l.useId)(),
				h = (0, l.useRef)(null),
				p = (0, l.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
				{ nonce: m } = (0, l.useContext)(u.MotionConfigContext),
				f = (function (...e) {
					return i.useCallback(
						(function (...e) {
							return (t) => {
								let i = !1,
									n = e.map((e) => {
										let n = d(e, t)
										return i || "function" != typeof n || (i = !0), n
									})
								if (i)
									return () => {
										for (let t = 0; t < n.length; t++) {
											let i = n[t]
											"function" == typeof i ? i() : d(e[t], null)
										}
									}
							}
						})(...e),
						e,
					)
				})(h, e.props?.ref ?? e?.ref)
			return (
				(0, l.useInsertionEffect)(() => {
					let { width: e, height: t, top: i, left: l, right: u, bottom: d } = p.current
					if (n || !h.current || !e || !t) return
					let c = "left" === r ? `left: ${l}` : `right: ${u}`,
						f = "bottom" === s ? `bottom: ${d}` : `top: ${i}`
					h.current.dataset.motionPopId = a
					let g = document.createElement("style")
					m && (g.nonce = m)
					let y = o ?? document.head
					return (
						y.appendChild(g),
						g.sheet &&
							g.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${c}px !important;
            ${f}px !important;
          }
        `),
						() => {
							y.contains(g) && y.removeChild(g)
						}
					)
				}, [n]),
				(0, t.jsx)(c, { isPresent: n, childRef: h, sizeRef: p, children: l.cloneElement(e, { ref: f }) })
			)
		}
		let p = ({
			children: e,
			initial: n,
			isPresent: s,
			onExitComplete: a,
			custom: l,
			presenceAffectsLayout: u,
			mode: d,
			anchorX: c,
			anchorY: p,
			root: f,
		}) => {
			let g = (0, r.useConstant)(m),
				y = (0, i.useId)(),
				v = !0,
				x = (0, i.useMemo)(
					() => (
						(v = !1),
						{
							id: y,
							initial: n,
							isPresent: s,
							custom: l,
							onExitComplete: (e) => {
								for (let t of (g.set(e, !0), g.values())) if (!t) return
								a && a()
							},
							register: (e) => (g.set(e, !1), () => g.delete(e)),
						}
					),
					[s, g, a],
				)
			return (
				u && v && (x = { ...x }),
				(0, i.useMemo)(() => {
					g.forEach((e, t) => g.set(t, !1))
				}, [s]),
				i.useEffect(() => {
					s || g.size || !a || a()
				}, [s]),
				"popLayout" === d &&
					(e = (0, t.jsx)(h, { isPresent: s, anchorX: c, anchorY: p, root: f, children: e })),
				(0, t.jsx)(o.PresenceContext.Provider, { value: x, children: e })
			)
		}
		function m() {
			return new Map()
		}
		var f = e.i(87467)
		let g = (e) => e.key || ""
		function y(e) {
			let t = []
			return (
				i.Children.forEach(e, (e) => {
					;(0, i.isValidElement)(e) && t.push(e)
				}),
				t
			)
		}
		let v = ({
			children: e,
			custom: o,
			initial: a = !0,
			onExitComplete: l,
			presenceAffectsLayout: u = !0,
			mode: d = "sync",
			propagate: c = !1,
			anchorX: h = "left",
			anchorY: m = "top",
			root: v,
		}) => {
			let [x, b] = (0, f.usePresence)(c),
				w = (0, i.useMemo)(() => y(e), [e]),
				k = c && !x ? [] : w.map(g),
				S = (0, i.useRef)(!0),
				T = (0, i.useRef)(w),
				P = (0, r.useConstant)(() => new Map()),
				C = (0, i.useRef)(new Set()),
				[M, A] = (0, i.useState)(w),
				[j, E] = (0, i.useState)(w)
			;(0, s.useIsomorphicLayoutEffect)(() => {
				;(S.current = !1), (T.current = w)
				for (let e = 0; e < j.length; e++) {
					let t = g(j[e])
					k.includes(t) ? (P.delete(t), C.current.delete(t)) : !0 !== P.get(t) && P.set(t, !1)
				}
			}, [j, k.length, k.join("-")])
			let R = []
			if (w !== M) {
				let e = [...w]
				for (let t = 0; t < j.length; t++) {
					let i = j[t],
						n = g(i)
					k.includes(n) || (e.splice(t, 0, i), R.push(i))
				}
				return "wait" === d && R.length && (e = R), E(y(e)), A(w), null
			}
			let { forceRender: V } = (0, i.useContext)(n.LayoutGroupContext)
			return (0, t.jsx)(t.Fragment, {
				children: j.map((e) => {
					let i = g(e),
						n = (!c || !!x) && (w === j || k.includes(i))
					return (0, t.jsx)(
						p,
						{
							isPresent: n,
							initial: (!S.current || !!a) && void 0,
							custom: o,
							presenceAffectsLayout: u,
							mode: d,
							root: v,
							onExitComplete: n
								? void 0
								: () => {
										if (C.current.has(i) || (C.current.add(i), !P.has(i))) return
										P.set(i, !0)
										let e = !0
										P.forEach((t) => {
											t || (e = !1)
										}),
											e && (V?.(), E(T.current), c && b?.(), l && l())
									},
							anchorX: h,
							anchorY: m,
							children: e,
						},
						i,
					)
				}),
			})
		}
		e.s(["AnimatePresence", () => v], 31282)
	},
	51610,
	(e) => {
		"use strict"
		var t = e.i(8026),
			i = e.i(10008),
			n = e.i(66904),
			r = e.i(31282),
			s = e.i(74209),
			o = e.i(56727),
			a = e.i(21387)
		let l = (0, a.default)("code-xml", [
			["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
			["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
			["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
		])
		var u = e.i(78443)
		let d = (0, a.default)("zap", [
			[
				"path",
				{
					d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
					key: "1xq2db",
				},
			],
		])
		var c = e.i(21862)
		function h({ icon: e, color: i, title: n, description: r }) {
			return (0, t.jsxs)("div", {
				className: "space-y-1.5 sm:space-y-2",
				children: [
					(0, t.jsxs)("div", {
						className: "flex items-center gap-1 space-x-2",
						children: [
							(0, t.jsx)("div", {
								className: `rounded-full ${{ blue: "bg-blue-500/20", purple: "bg-purple-500/20", green: "bg-green-500/20" }[i]} p-3 ${{ blue: "text-blue-400", purple: "text-purple-400", green: "text-green-400" }[i]}`,
								children: (0, t.jsx)(e, { className: "h-6 w-6" }),
							}),
							(0, t.jsx)("h3", { className: "text-base font-semibold sm:text-lg", children: n }),
						],
					}),
					(0, t.jsx)("p", { className: "text-sm text-gray-400 sm:text-base", children: r }),
				],
			})
		}
		let p = "v3.8.0"
		function m() {
			let [e, a] = (0, i.useState)(!1),
				m = (0, i.useRef)(null),
				f = (0, i.useRef)(null)
			return (
				(0, i.useEffect)(() => {
					let e,
						t = f.current,
						i = m.current
					if (!t || !i) return
					let n = t.getContext("2d")
					if (!n) return
					let r = () => {
						let e = i.getBoundingClientRect()
						;(t.width = e.width + 8),
							(t.height = e.height + 8),
							(t.style.width = `${t.width}px`),
							(t.style.height = `${t.height}px`)
					}
					r(), window.addEventListener("resize", r)
					let s = 0,
						o = () => {
							if (!n || !t) return
							n.clearRect(0, 0, t.width, t.height)
							let i = t.width - 4,
								r = t.height - 4,
								a = r / 2
							n.beginPath(),
								n.moveTo(2 + a, 2),
								n.lineTo(2 + i - a, 2),
								n.arcTo(2 + i, 2, 2 + i, 2 + a, a),
								n.lineTo(2 + i, 2 + r - a),
								n.arcTo(2 + i, 2 + r, 2 + i - a, 2 + r, a),
								n.lineTo(2 + a, 2 + r),
								n.arcTo(2, 2 + r, 2, 2 + r - a, a),
								n.lineTo(2, 2 + a),
								n.arcTo(2, 2, 2 + a, 2, a),
								n.closePath(),
								(s = (s + 0.016) % (2 * Math.PI))
							let l = t.width / 2,
								u = t.height / 2,
								d = "70, 130, 255",
								c = n.createConicGradient(s, l, u)
							c.addColorStop(0, `rgba(${d}, 0)`),
								c.addColorStop(0.2, `rgba(${d}, 0.8)`),
								c.addColorStop(0.4, `rgba(${d}, 0)`),
								c.addColorStop(1, `rgba(${d}, 0)`),
								(n.strokeStyle = c),
								(n.lineWidth = 1.5),
								n.stroke(),
								(n.shadowColor = `rgba(${d}, 0.6)`),
								(n.shadowBlur = 5),
								(n.strokeStyle = `rgba(${d}, 0.3)`),
								(n.lineWidth = 0.5),
								n.stroke(),
								(e = requestAnimationFrame(o))
						}
					return (
						o(),
						() => {
							window.removeEventListener("resize", r), e && cancelAnimationFrame(e)
						}
					)
				}, []),
				(0, t.jsxs)(t.Fragment, {
					children: [
						(0, t.jsxs)("div", {
							className: "relative inline-flex",
							ref: m,
							children: [
								(0, t.jsx)("canvas", {
									ref: f,
									className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
									style: { pointerEvents: "none" },
								}),
								(0, t.jsxs)(c.default, {
									href: "#",
									onClick: (e) => {
										e.preventDefault(), a(!0)
									},
									className:
										"relative z-10 flex items-center space-x-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-all hover:bg-gray-900",
									children: [
										(0, t.jsxs)("span", { children: ["See what's new in ", p] }),
										(0, t.jsx)(o.ArrowRight, { className: "h-3.5 w-3.5" }),
									],
								}),
							],
						}),
						(0, t.jsx)(r.AnimatePresence, {
							children:
								e &&
								(0, t.jsxs)(t.Fragment, {
									children: [
										(0, t.jsx)(n.motion.div, {
											className: "fixed inset-0 z-40 bg-black/80 backdrop-blur-sm",
											initial: { opacity: 0, backdropFilter: "blur(0px)" },
											animate: { opacity: 1, backdropFilter: "blur(8px)" },
											exit: { opacity: 0, backdropFilter: "blur(0px)" },
											transition: { duration: 0.2 },
										}),
										(0, t.jsx)("div", {
											className: "fixed inset-0 z-50 overflow-y-auto",
											onClick: () => a(!1),
											children: (0, t.jsx)("div", {
												className: "flex min-h-full items-center justify-center p-4",
												children: (0, t.jsxs)(n.motion.div, {
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
													onClick: (e) => {
														e.stopPropagation()
													},
													children: [
														(0, t.jsxs)("div", {
															className: "flex items-center justify-between gap-4",
															children: [
																(0, t.jsxs)("h2", {
																	className: "text-xl font-bold sm:text-2xl",
																	children: ["What's New in Roo Code ", p],
																}),
																(0, t.jsx)("button", {
																	onClick: () => a(!1),
																	className:
																		"flex-shrink-0 rounded-full p-1.5 text-gray-400 hover:bg-gray-800 hover:text-white",
																	children: (0, t.jsx)(s.X, { className: "h-5 w-5" }),
																}),
															],
														}),
														(0, t.jsxs)("div", {
															className: "mt-4 space-y-4 sm:mt-6 sm:space-y-6",
															children: [
																(0, t.jsx)(h, {
																	icon: l,
																	color: "blue",
																	title: "AI-Powered Code Generation",
																	description:
																		"Generate high-quality code snippets and entire components with our new AI assistant. Trained on millions of code repositories to understand your project context.",
																}),
																(0, t.jsx)(h, {
																	icon: u.Users2,
																	color: "purple",
																	title: "Real-time Collaboration",
																	description:
																		"Work together with your team in real-time with our new collaborative editing features. See changes as they happen and resolve conflicts automatically.",
																}),
																(0, t.jsx)(h, {
																	icon: d,
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
		e.s(["WhatsNewButton", () => m], 51610)
	},
	39100,
	13758,
	(e) => {
		"use strict"
		var t = e.i(21387)
		let i = (0, t.default)("wrench", [
			[
				"path",
				{
					d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
					key: "1ngwbx",
				},
			],
		])
		e.s(["Wrench", () => i], 39100)
		let n = (0, t.default)("map", [
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
		e.s(["Map", () => n], 13758)
	},
	15599,
	(e) => {
		"use strict"
		let t = (0, e.i(21387).default)("code", [
			["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
			["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }],
		])
		e.s(["Code", () => t], 15599)
	},
	60631,
	(e) => {
		"use strict"
		let t = (0, e.i(21387).default)("message-circle-question-mark", [
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
		e.s(["default", () => t])
	},
	4916,
	6765,
	(e) => {
		"use strict"
		var t = e.i(21387)
		let i = (0, t.default)("pointer", [
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
		e.s(["Pointer", () => i], 4916)
		let n = (0, t.default)("github", [
			[
				"path",
				{
					d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
					key: "tonef",
				},
			],
			["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
		])
		e.s(["Github", () => n], 6765)
	},
	80101,
	(e) => {
		"use strict"
		var t = e.i(8026),
			i = e.i(10008),
			n = e.i(66904),
			r = e.i(31282),
			s = e.i(4916),
			o = e.i(3883),
			a = e.i(6765),
			l = e.i(15599),
			u = e.i(93702),
			d = e.i(39100),
			c = e.i(13758),
			h = e.i(60631),
			h = h
		let p = (0, e.i(21387).default)("corner-down-right", [
			["path", { d: "m15 10 5 5-5 5", key: "qqa56n" }],
			["path", { d: "M4 4v7a4 4 0 0 0 4 4h12", key: "z08zvw" }],
		])
		var m = e.i(15628),
			f = e.i(45438)
		e.i(8068)
		var g = e.i(38387)
		let y = {
				slack: { name: "Slack", icon: o.Slack },
				web: { name: "Web", icon: s.Pointer },
				github: { name: "GitHub", icon: a.Github },
				extension: { name: "Extension", icon: l.Code },
			},
			v = {
				explainer: { name: "Explainer", icon: h.default },
				planner: { name: "Planner", icon: c.Map },
				coder: { name: "Coder", icon: l.Code },
				reviewer: { name: "Reviewer", icon: u.GitPullRequest },
				fixer: { name: "Fixer", icon: d.Wrench },
			},
			x = [
				{
					role: "Frontend Developer",
					use: "Take Lisa's feedback above and incorporate it into the landing page.",
					agent: v.coder,
					context: y.slack,
				},
				{
					role: "Customer Success",
					use: "What could be causing this bug as described by the customer?",
					agent: v.explainer,
					context: y.web,
				},
				{
					role: "Backend Engineer",
					use: "Create a migration denormalizing total_cost calculation and backfill the remainder.",
					agent: v.coder,
					context: y.extension,
				},
				{
					role: "Security Engineer",
					use: "Do we use any of the libraries mentioned in the thread?",
					agent: v.explainer,
					context: y.slack,
				},
				{
					role: "Designer",
					use: "Refactor the button component to use CSS variables",
					agent: v.coder,
					context: y.slack,
				},
				{
					role: "Product Manager",
					use: "How big of a change would it be to turn this from a yes/no to have 4 options?",
					agent: v.coder,
					context: y.web,
				},
				{
					role: "QA Engineer",
					use: "Write a Playwright test for the login flow failure case, extract existing mocks into shared.",
					agent: v.coder,
					context: y.github,
				},
				{
					role: "DevOps Engineer",
					use: "Update the Dockerfile to use Node 20 Alpine.",
					agent: v.fixer,
					context: y.slack,
				},
				{
					role: "Mobile Developer",
					use: "Copy what we did in PR #4253 and apply to this component.",
					agent: v.coder,
					context: y.slack,
				},
				{
					role: "Technical Writer",
					use: "Generate JSDoc comments for the auth utility functions.",
					agent: v.coder,
					context: y.github,
				},
				{
					role: "Junior Developer",
					use: "Review this pull request for potential performance improvements.",
					agent: v.reviewer,
					context: y.github,
				},
				{
					role: "Engineering Manager",
					use: "Break down this user profile feature into technical tasks, grouped by skill.",
					agent: v.planner,
					context: y.web,
				},
				{
					role: "Support Engineer",
					use: "What's causing this stack trace? The customer is on macOS 26.1.",
					agent: v.explainer,
					context: y.web,
				},
				{
					role: "Frontend Developer",
					use: "Make the navigation menu responsive on mobile devices.",
					agent: v.coder,
					context: y.web,
				},
				{
					role: "Backend Engineer",
					use: "Give me two architecture options for the notification system in this PRD.",
					agent: v.planner,
					context: y.web,
				},
				{
					role: "Designer",
					use: "Implement the loading spinner animation in CSS.",
					agent: v.coder,
					context: y.web,
				},
				{
					role: "Customer Success",
					use: "Write a script to find patterns in these CPU load logs.",
					agent: v.coder,
					context: y.slack,
				},
				{
					role: "Full Stack Dev",
					use: "Refactor user_preferences to use named columns instead of a single JSON blob",
					agent: v.coder,
					context: y.extension,
				},
				{
					role: "QA Engineer",
					use: "Automate the regression suite for the checkout process.",
					agent: v.coder,
					context: y.extension,
				},
				{
					role: "DevOps Engineer",
					use: "Understand why this build error only happens in prod and fix it.",
					agent: v.coder,
					context: y.extension,
				},
				{
					role: "Product Marketer",
					use: "What were the 5 most significant PRs merged in the past week?",
					agent: v.explainer,
					context: y.slack,
				},
				{
					role: "Junior Developer",
					use: "Explain how useEffect dependency arrays work here.",
					agent: v.explainer,
					context: y.extension,
				},
				{
					role: "Senior Engineer",
					use: "Check if this implementation follows the Single Responsibility Principle.",
					agent: v.reviewer,
					context: y.github,
				},
			],
			b = { 1: 0.7, 2: 0.85, 3: 1, 4: 1.15 }
		function w({ item: e, opacity: i = 1, className: n = "" }) {
			let r = e.context.icon
			return (0, t.jsxs)("div", {
				className: `rounded-xl outline outline-border/50 bg-card/80 backdrop-blur-sm p-3 md:p-4 shadow-xl transition-all hover:shadow-xl hover:outline-8 ${n}`,
				children: [
					(0, t.jsxs)("div", {
						className: "text-sm flex items-center gap-2 font-medium text-violet-600 mb-1",
						style: { opacity: i },
						children: [
							(0, t.jsx)(f.default, {
								src: e.avatar,
								className: "size-6 rounded-full outline-1 outline-border",
								alt: "",
								width: 18,
								height: 18,
								unoptimized: !0,
							}),
							(0, t.jsx)("span", { className: "text-nowrap", children: e.role }),
						],
					}),
					(0, t.jsxs)("div", {
						className: "text-[0.7em] flex flex-wrap items-center gap-1 text-muted-foreground mb-1",
						style: { opacity: i },
						children: [
							(0, t.jsx)(p, { className: "size-4 shrink-0 ml-3 -mt-1" }),
							(0, t.jsxs)("span", {
								className: "text-nowrap font-mono",
								children: ["To ", e.agent.name, " Agent"],
							}),
						],
					}),
					(0, t.jsx)("div", {
						className: "text-base font-light leading-tight my-1 ml-8",
						style: { opacity: i },
						children: e.use,
					}),
					(0, t.jsxs)("div", {
						className: "text-[0.7em] font-light text-muted-foreground leading-tight mt-2 ml-8",
						style: { opacity: i },
						children: [
							"via ",
							(0, t.jsx)(r, { strokeWidth: 1.5, className: "size-3.5 inline ml-1" }),
							" ",
							e.context.name,
						],
					}),
				],
			})
		}
		function k({ item: e }) {
			let i = Math.min(1, 0.5 + e.layer / 3)
			return (0, t.jsx)(n.motion.div, {
				className: "absolute w-[200px] cursor-default group",
				style: { left: `${e.position.x}%`, top: `${e.position.y}%`, zIndex: e.zIndex, width: e.width },
				initial: { opacity: 0, scale: 0 },
				whileInView: { opacity: 1, scale: e.scale, transition: { duration: 0.1, delay: 0 } },
				whileHover: { scale: 1.3, zIndex: 30 },
				viewport: { once: !0 },
				transformTemplate: ({ scale: e }) => `translate(-50%, -50%) scale(${e})`,
				children: (0, t.jsx)(w, {
					item: e,
					opacity: i,
					className: 4 === e.layer ? "shadow-lg border-border" : "",
				}),
			})
		}
		function S({ agentTitle: e = !1 }) {
			let s = (0, i.useMemo)(
					() =>
						(function (e) {
							let t,
								i = ((t = 42), () => (t = (9301 * t + 49297) % 233280) / 233280),
								n = 25,
								r = 14.285714285714286,
								s = Array.from({ length: e.length }, (e, t) => t)
							for (let e = s.length - 1; e > 0; e--) {
								let t = Math.floor(i() * (e + 1)),
									n = s[e]
								;(s[e] = s[t]), (s[t] = n)
							}
							return e.map((e, t) => {
								let o = s[t],
									a = Math.floor(o / 4),
									l = (t % 4) + 1,
									u = (i() - 0.5) * n * 0.7,
									d = (i() - 0.5) * r * 0.7
								return {
									...e,
									avatar: `/illustrations/user-faces/${t + 1}.jpg`,
									layer: l,
									position: { x: (o % 4) * n + n / 2 + u, y: a * r + r / 2 + d },
									scale: b[l],
									zIndex: l,
									width: Math.round(300 + 100 * i()),
								}
							})
						})(x),
					[],
				),
				[o, a] = (0, i.useState)(!1)
			return (0, t.jsxs)("section", {
				className: "pt-24 bg-background overflow-hidden relative",
				children: [
					(0, t.jsx)("div", {
						className: "absolute inset-y-0 left-1/2 h-full w-full max-w-[1200px] -translate-x-1/2",
						children: (0, t.jsx)("div", {
							className:
								"absolute left-1/2 top-1/2 h-[700px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/10 blur-[140px]",
						}),
					}),
					(0, t.jsxs)("div", {
						className: "container px-4 mx-auto sm:px-6 lg:px-8",
						children: [
							(0, t.jsxs)("div", {
								className: "text-center mb-16",
								children: [
									(0, t.jsx)("h2", {
										className: "text-4xl font-bold tracking-tight mb-4",
										children: e
											? (0, t.jsxs)(t.Fragment, {
													children: [
														"Part of the AI team to help your ",
														(0, t.jsx)("em", { children: "entire" }),
														" human team",
													],
												})
											: (0, t.jsxs)(t.Fragment, {
													children: [
														"The AI team to help your ",
														(0, t.jsx)("em", { children: "entire" }),
														" human team",
													],
												}),
									}),
									(0, t.jsx)("p", {
										className: "text-xl font-light text-muted-foreground max-w-2xl mx-auto",
										children:
											"Developers, PMs, Designers, Customer Success: everyone moves faster and more independently with Roo.",
									}),
								],
							}),
							(0, t.jsxs)("div", {
								className: "md:hidden flex flex-col gap-2 px-2 pb-12 max-w-md mx-auto",
								children: [
									(0, t.jsx)(r.AnimatePresence, {
										mode: "popLayout",
										children: s
											.slice(0, o ? void 0 : 8)
											.map((e, i) =>
												(0, t.jsx)(
													n.motion.div,
													{
														initial: { opacity: 0, y: 20 },
														whileInView: { opacity: 1, y: 0 },
														transition: { delay: (i % 8) * 0.1, duration: 0.4 },
														viewport: { once: !0, margin: "-50px" },
														className: `w-[90%] ${i % 2 == 0 ? "self-start" : "self-end"}`,
														children: (0, t.jsx)(w, { item: e }),
													},
													e.use,
												),
											),
									}),
									!o &&
										(0, t.jsx)("div", {
											className: "text-center mt-8 z-10",
											children: (0, t.jsxs)(g.Button, {
												variant: "outline",
												onClick: () => a(!0),
												children: ["More", (0, t.jsx)(m.ChevronDown, {})],
											}),
										}),
								],
							}),
							(0, t.jsx)("div", {
								className:
									"hidden md:block relative h-[800px] md:min-h-[800px] w-full max-w-6xl mx-auto",
								children: s.map((e, i) => (0, t.jsx)(k, { item: e }, i)),
							}),
						],
					}),
				],
			})
		}
		e.s(["UseExamplesSection", () => S], 80101)
	},
])
